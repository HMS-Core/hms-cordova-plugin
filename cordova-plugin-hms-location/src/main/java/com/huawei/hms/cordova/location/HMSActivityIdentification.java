/*
Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

package com.huawei.hms.cordova.location;

import android.app.PendingIntent;
import android.content.Intent;
import android.util.Log;

import com.huawei.hms.cordova.location.helpers.Constants.Event;
import com.huawei.hms.cordova.location.helpers.Exceptions;
import com.huawei.hms.cordova.location.helpers.HMSBroadcastReceiver;
import com.huawei.hms.cordova.location.helpers.HMSCordovaPlugin;
import com.huawei.hms.cordova.location.helpers.Pair;
import com.huawei.hms.cordova.location.utils.ActivityUtils;
import com.huawei.hms.cordova.location.utils.CordovaUtils;
import com.huawei.hms.cordova.location.utils.PermissionUtils;
import com.huawei.hms.location.ActivityConversionInfo;
import com.huawei.hms.location.ActivityConversionRequest;
import com.huawei.hms.location.ActivityIdentification;
import com.huawei.hms.location.ActivityIdentificationData;
import com.huawei.hms.location.ActivityIdentificationService;

import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;


public class HMSActivityIdentification extends HMSCordovaPlugin {

    private static String TAG = HMSActivityIdentification.class.getSimpleName();

    private ActivityIdentificationService activityService;

    private Map<Integer, PendingIntent> requests;
    private int mRequestCode = 0;


    public HMSActivityIdentification() {}

    public void pluginInitialize() {
        super.pluginInitialize();
        this.activityService = ActivityIdentification.getService(cordova.getActivity().getApplicationContext());
        this.requests = new HashMap<>();
    }

    public boolean executer(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        Log.d(TAG, action + " is called.");
        if ("createActivityConversionUpdates".equals(action)) {
            createActivityConversionUpdates(args.getJSONArray(0), callbackContext);
        } else if ("createActivityIdentificationUpdates".equals(action)) {
            createActivityIdentificationUpdates(args.getDouble(0), callbackContext);
        } else if ("deleteActivityConversionUpdates".equals(action)) {
            deleteActivityConversionUpdates(args.getInt(0), callbackContext);
        } else if ("deleteActivityIdentificationUpdates".equals(action)) {
            deleteActivityIdentificationUpdates(args.getInt(0), callbackContext);
        } else if ("requestPermission".equals(action)) {
            requestPermission(callbackContext);
        } else if ("hasPermission".equals(action)) {
            hasPermission(callbackContext);
        } else {
            return false;
        }
        return true;
    }

    @Override
    public JSONObject getConstants() throws JSONException {
        final JSONObject activityConstants = new JSONObject();
        activityConstants.put("VEHICLE", ActivityIdentificationData.VEHICLE);
        activityConstants.put("BIKE", ActivityIdentificationData.BIKE);
        activityConstants.put("FOOT", ActivityIdentificationData.FOOT);
        activityConstants.put("RUNNING", ActivityIdentificationData.RUNNING);
        activityConstants.put("STILL", ActivityIdentificationData.STILL);
        activityConstants.put("TILTING", ActivityIdentificationData.TILTING);
        activityConstants.put("OTHERS", ActivityIdentificationData.OTHERS);
        activityConstants.put("WALKING", ActivityIdentificationData.WALKING);

        final JSONObject eventConstants = new JSONObject();
        eventConstants.put("ACTIVITY_CONVERSION_RESULT", Event.ACTIVITY_CONVERSION_RESULT.getVal());
        eventConstants.put("ACTIVITY_IDENTIFICATION_RESULT", Event.ACTIVITY_IDENTIFICATION_RESULT.getVal());

        final JSONObject activityConversionConstants = new JSONObject();
        activityConversionConstants.put("ENTER_ACTIVITY_CONVERSION", ActivityConversionInfo.ENTER_ACTIVITY_CONVERSION);
        activityConversionConstants.put("EXIT_ACTIVITY_CONVERSION", ActivityConversionInfo.EXIT_ACTIVITY_CONVERSION);

        final JSONObject constants = new JSONObject();
        constants.put("Activities", activityConstants);
        constants.put("Events", eventConstants);
        constants.put("ActivityConversions", activityConversionConstants);

        return constants;
    }

    // @CordovaMethod
    public void createActivityConversionUpdates(JSONArray activityConversionRequestArray, final CallbackContext cordovaCallback) throws JSONException {
        Log.i(TAG, "createActivityConversionUpdates start");
        ActivityConversionRequest request =
            ActivityUtils.fromJSONArrayToActivityConversionRequest(activityConversionRequestArray);
        final Pair<Integer, PendingIntent> intentData = buildPendingIntent(HMSBroadcastReceiver.ACTION_PROCESS_CONVERSION);
        activityService.createActivityConversionUpdates(request, intentData.get1())
            .addOnSuccessListener(aVoid -> {
                Log.i(TAG, "createActivityConversionUpdates onSuccess");
                cordovaCallback.success(CordovaUtils.keyValPair("requestCode", intentData.get0()));
            })
            .addOnFailureListener(e -> {
                Log.e(TAG, "createActivityConversionUpdates onFailure: " + e.getMessage());
                cordovaCallback.error(e.getMessage());
            });

        Log.i(TAG, "createActivityConversionUpdates end");
    }

    // @CordovaMethod
    public void createActivityIdentificationUpdates(double intervalMillis, final CallbackContext cordovaCallback) {
        Log.i(TAG, "createActivityIdentificationUpdates start");
        final Pair<Integer, PendingIntent> intentData = buildPendingIntent(HMSBroadcastReceiver.ACTION_PROCESS_IDENTIFICATION);
        activityService.createActivityIdentificationUpdates((long)intervalMillis, intentData.get1())
            .addOnSuccessListener(aVoid -> {
                Log.i(TAG, "createActivityIdentificationUpdates onSuccess");
                cordovaCallback.success(CordovaUtils.keyValPair("requestCode", intentData.get0()));
            })
            .addOnFailureListener(e -> {
                Log.e(TAG, "createActivityIdentificationUpdates onFailure: " + e.getMessage());
                cordovaCallback.error(e.getMessage());
            });

        Log.i(TAG, "createActivityIdentificationUpdates end");
    }

    // @CordovaMethod
    public void deleteActivityConversionUpdates(final int requestCode, final CallbackContext cordovaCallback) {
        Log.i(TAG, "deleteActivityConversionUpdates start");
        if (!requests.containsKey(requestCode)) {
            cordovaCallback.error(new Exceptions.NonExistentRequestID().getMessage());
        }

        activityService.deleteActivityConversionUpdates(requests.get(requestCode))
            .addOnSuccessListener(aVoid -> {
                Log.i(TAG, "deleteActivityConversionUpdates onSuccess");
                requests.remove(requestCode);
                cordovaCallback.success(CordovaUtils.keyValPair("result", true));
            })
            .addOnFailureListener(e -> {
                Log.e(TAG, "deleteActivityConversionUpdates onFailure: " + e.getMessage());
                cordovaCallback.error(e.getMessage());
            });

        Log.i(TAG, "deleteActivityConversionUpdates end");
    }

    // @CordovaMethod
    public void deleteActivityIdentificationUpdates(final int requestCode, final CallbackContext cordovaCallback) {
        Log.i(TAG, "deleteActivityIdentificationUpdates start");
        if (!requests.containsKey(requestCode)) {
            cordovaCallback.error(new Exceptions.NonExistentRequestID().getMessage());
        }

        activityService.deleteActivityIdentificationUpdates(requests.get(requestCode))
            .addOnSuccessListener(aVoid -> {
                Log.i(TAG, "deleteActivityIdentificationUpdates onSuccess");
                requests.remove(requestCode);
                cordovaCallback.success(CordovaUtils.keyValPair("result", true));
            })
            .addOnFailureListener(e -> {
                Log.e(TAG, "deleteActivityIdentificationUpdates onFailure: " + e.getMessage());
                cordovaCallback.error(e.getMessage());
            });

        Log.i(TAG, "deleteActivityIdentificationUpdates end");
    }

    // @CordovaMethod
    public void requestPermission(final CallbackContext cordovaCallback) { // FIXME: handle callback
        PermissionUtils.requestActivityRecognitionPermission(this, cordova);
    }

    // @CordovaMethod
    public void hasPermission(final CallbackContext cordovaCallback) {
        boolean result = PermissionUtils.hasActivityRecognitionPermission(cordova);
        cordovaCallback.success(CordovaUtils.keyValPair("hasPermission", result));
    }

    private Pair<Integer, PendingIntent> buildPendingIntent(String action) {
        Log.d(TAG, "buildPendingIntent start");
        Intent intent = new Intent();
        intent.setPackage(cordova.getActivity().getApplicationContext().getPackageName());
        intent.setAction(action);
        PendingIntent pendingIntent = PendingIntent.getBroadcast(cordova.getActivity().getApplicationContext(), mRequestCode++, intent, PendingIntent.FLAG_UPDATE_CURRENT);
        this.requests.put(mRequestCode, pendingIntent);
        return Pair.create(mRequestCode, pendingIntent);
    }

}
