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
import com.huawei.hms.cordova.location.utils.CordovaUtils;
import com.huawei.hms.cordova.location.utils.GeofenceUtils;
import com.huawei.hms.location.Geofence;
import com.huawei.hms.location.GeofenceErrorCodes;
import com.huawei.hms.location.GeofenceRequest;
import com.huawei.hms.location.GeofenceService;
import com.huawei.hms.location.LocationServices;

import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;


public class HMSGeofence extends HMSCordovaPlugin {

    public GeofenceService geofenceService;
    private final static String TAG = HMSGeofence.class.getSimpleName();

    private int mRequestCode = 0;
    private Map<Integer, PendingIntent> requests;

    public HMSGeofence() {}

    public void pluginInitialize() {
        super.pluginInitialize();
        this.geofenceService = LocationServices.getGeofenceService(cordova.getActivity().getApplicationContext());
        this.requests = new HashMap<>();
    }

    public boolean executer(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        Log.d(TAG, action + " is called.");
        if ("createGeofenceList".equals(action)) {
            createGeofenceList(args.getJSONArray(0), args.getInt(1), args.getInt(2), callbackContext);
        } else if ("deleteGeofenceList".equals(action)) {
            deleteGeofenceList(args.getInt(0), callbackContext);
        } else {
            return false;
        }
        return true;
    }

    @Override
    public JSONObject getConstants() throws JSONException {
        Log.d(TAG, "Initializing constants");

        JSONObject geofenceRequestConstants = new JSONObject();
        geofenceRequestConstants.put("ENTER_INIT_CONVERSION", GeofenceRequest.ENTER_INIT_CONVERSION);
        geofenceRequestConstants.put("EXIT_INIT_CONVERSION", GeofenceRequest.EXIT_INIT_CONVERSION);
        geofenceRequestConstants.put("DWELL_INIT_CONVERSION", GeofenceRequest.DWELL_INIT_CONVERSION);
        geofenceRequestConstants.put("COORDINATE_TYPE_WGS_84", GeofenceRequest.COORDINATE_TYPE_WGS_84);
        geofenceRequestConstants.put("COORDINATE_TYPE_GCJ_02", GeofenceRequest.COORDINATE_TYPE_GCJ_02);

        JSONObject geofenceConstants = new JSONObject();
        geofenceConstants.put("ENTER_GEOFENCE_CONVERSION",  Geofence.ENTER_GEOFENCE_CONVERSION);
        geofenceConstants.put("EXIT_GEOFENCE_CONVERSION",   Geofence.EXIT_GEOFENCE_CONVERSION);
        geofenceConstants.put("DWELL_GEOFENCE_CONVERSION",  Geofence.DWELL_GEOFENCE_CONVERSION);
        geofenceConstants.put("GEOFENCE_NEVER_EXPIRE", Geofence.GEOFENCE_NEVER_EXPIRE);

        JSONObject errorConstants = new JSONObject();
        errorConstants.put("GEOFENCE_UNAVAILABLE", GeofenceErrorCodes.GEOFENCE_UNAVAILABLE);
        errorConstants.put("GEOFENCE_NUMBER_OVER_LIMIT", GeofenceErrorCodes.GEOFENCE_NUMBER_OVER_LIMIT);
        errorConstants.put("GEOFENCE_PENDINGINTENT_OVER_LIMIT", GeofenceErrorCodes.GEOFENCE_PENDINGINTENT_OVER_LIMIT);
        errorConstants.put("GEOFENCE_INSUFFICIENT_PERMISSION", GeofenceErrorCodes.GEOFENCE_INSUFFICIENT_PERMISSION);
        errorConstants.put("GEOFENCE_REQUEST_TOO_OFTEN", GeofenceErrorCodes.GEOFENCE_REQUEST_TOO_OFTEN);

        JSONObject eventConstants = new JSONObject();
        eventConstants.put("GEOFENCE_RESULT", Event.GEOFENCE_RESULT.getVal());

        JSONObject constants = new JSONObject();
        constants.put("GeofenceRequestConstants", geofenceRequestConstants);
        constants.put("GeofenceConstants", geofenceConstants);
        constants.put("ErrorCodes", errorConstants);
        constants.put("Events", eventConstants);

        return constants;
    }

    // @CordovaMethod
    public void createGeofenceList(final JSONArray geofences, final int initConversions, final int coordinateType, final CallbackContext cordovaCallback) throws JSONException {
        Log.i(TAG, "createGeofences start");

        final Pair<Integer, PendingIntent> intentData = buildPendingIntent();
        GeofenceRequest geofenceRequest = GeofenceUtils.fromJSONArrayToGeofences(geofences, initConversions, coordinateType);

        geofenceService.createGeofenceList(geofenceRequest, intentData.get1())
                .addOnCompleteListener(task -> {
                    if (task.isSuccessful()) {
                        Log.i(TAG, "createGeofences -> task success");
                        cordovaCallback.success(CordovaUtils.keyValPair("requestCode", intentData.get0()));
                    } else {
                        Log.w(TAG, "createGeofences -> task failed | " + task.getException().getMessage());
                        cordovaCallback.error(task.getException().getMessage());
                    }
                });
    }

    // @CordovaMethod
    public void deleteGeofenceList(int requestCode, final CallbackContext cordovaCallback) {
        Log.i(TAG, "deleteGeofenceList start");
        if (!requests.containsKey(requestCode)) {
            cordovaCallback.error(new Exceptions.NonExistentRequestID().getMessage());
        }

        geofenceService.deleteGeofenceList(requests.get(requestCode))
            .addOnSuccessListener(aVoid -> {
                Log.i(TAG, "deleteGeofenceList onSuccess");
                cordovaCallback.success(CordovaUtils.keyValPair("success", true));
            })
            .addOnFailureListener(e -> {
                Log.e(TAG, "deleteGeofenceList onFailure: " + e.getMessage());
                cordovaCallback.error(e.getMessage());
            });
    }

    private Pair<Integer, PendingIntent> buildPendingIntent() {
        Log.d(TAG, "buildPendingIntent start");
        Intent intent = new Intent();
        intent.setPackage(cordova.getActivity().getApplicationContext().getPackageName());
        intent.setAction(HMSBroadcastReceiver.ACTION_PROCESS_LOCATION);
        PendingIntent pendingIntent = PendingIntent.getBroadcast(cordova.getActivity().getApplicationContext(), mRequestCode++, intent, PendingIntent.FLAG_UPDATE_CURRENT);
        this.requests.put(mRequestCode, pendingIntent);
        return Pair.create(mRequestCode, pendingIntent);
    }

}
