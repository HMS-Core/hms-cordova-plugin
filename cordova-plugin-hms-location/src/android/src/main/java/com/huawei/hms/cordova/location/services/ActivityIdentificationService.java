/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License")
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/
package com.huawei.hms.cordova.location.services;

import android.app.PendingIntent;
import android.util.Log;

import com.huawei.hms.cordova.location.basef.CordovaBaseModule;
import com.huawei.hms.cordova.location.basef.CordovaMethod;
import com.huawei.hms.cordova.location.basef.HMSLog;
import com.huawei.hms.cordova.location.basef.handler.CorPack;
import com.huawei.hms.cordova.location.basef.handler.Promise;
import com.huawei.hms.cordova.location.helpers.LocationBroadcastReceiver;
import com.huawei.hms.cordova.location.utils.Constants;
import com.huawei.hms.cordova.location.utils.Exceptions;
import com.huawei.hms.cordova.location.utils.LocationUtils;
import com.huawei.hms.cordova.location.utils.json.JSONToObject;
import com.huawei.hms.location.ActivityConversionRequest;
import com.huawei.hms.location.ActivityIdentification;

import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;

import java.util.HashMap;
import java.util.Map;

public class ActivityIdentificationService extends CordovaBaseModule {
    private static final String TAG = ActivityIdentificationService.class.getSimpleName();
    private com.huawei.hms.location.ActivityIdentificationService activityIdentificationService;
    private Map<Integer, PendingIntent> requests;

    public ActivityIdentificationService(CordovaInterface cordova) {
        activityIdentificationService = ActivityIdentification.getService(cordova.getContext());
        requests = new HashMap<>();
    }

    @Override
    public void onDestroy() {
        Log.d(TAG, "ActivityIdentificationService: onDestroy() called");
    }

    @CordovaMethod
    @HMSLog
    public void createActivityConversionUpdates(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        int requestCode = args.getInt(0);
        ActivityConversionRequest request = JSONToObject.convertJSONToActivityConversionRequest(args.getJSONArray(1));
        if (args.length() > 2) {
            String function = args.getString(2);
            LocationUtils.saveBackgroundTask(corPack.getCordova().getContext(), Constants.FunctionType.CONVERSION_FUNCTION, function);
        }
        PendingIntent pendingIntent = LocationUtils.getPendingIntent(corPack.getCordova().getContext(), LocationBroadcastReceiver.ACTION_PROCESS_CONVERSION, requestCode, PendingIntent.FLAG_UPDATE_CURRENT);
        requests.put(requestCode, pendingIntent);
        activityIdentificationService.createActivityConversionUpdates(request, pendingIntent)
                .addOnSuccessListener(aVoid -> cb.success(true))
                .addOnFailureListener(e -> cb.error(e.getLocalizedMessage()));
    }

    @CordovaMethod
    @HMSLog
    public void deleteActivityConversionUpdates(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        int requestCode = args.getInt(0);
        PendingIntent pendingIntent;
        if (!requests.containsKey(requestCode)) {
            pendingIntent = LocationUtils.getPendingIntent(corPack.getCordova().getContext(), LocationBroadcastReceiver.ACTION_PROCESS_CONVERSION, requestCode, PendingIntent.FLAG_NO_CREATE);
            if (pendingIntent != null) {
                pendingIntent.cancel();
                cb.success(true);
            } else {
                cb.error(Exceptions.getError(Exceptions.NO_MATCHED_INTENT));
            }
        } else {
            activityIdentificationService.deleteActivityConversionUpdates(requests.get(requestCode))
                    .addOnSuccessListener(aVoid -> cb.success())
                    .addOnFailureListener(e -> cb.error(e.getLocalizedMessage()));
            requests.remove(requestCode);
        }
        LocationUtils.deleteBackgroundTask(corPack.getCordova().getContext(), Constants.FunctionType.CONVERSION_FUNCTION);
    }

    @CordovaMethod
    @HMSLog
    public void createActivityIdentificationUpdates(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        int requestCode = args.getInt(0);
        long detectionIntervalMillis = args.getLong(1);
        if (args.length() > 2) {
            String function = args.getString(2);
            LocationUtils.saveBackgroundTask(corPack.getCordova().getContext(), Constants.FunctionType.IDENTIFICATION_FUNCTION, function);
        }
        PendingIntent pendingIntent = LocationUtils.getPendingIntent(corPack.getCordova().getContext(), LocationBroadcastReceiver.ACTION_PROCESS_IDENTIFICATION, requestCode, PendingIntent.FLAG_UPDATE_CURRENT);
        requests.put(requestCode, pendingIntent);
        activityIdentificationService.createActivityIdentificationUpdates(detectionIntervalMillis, pendingIntent)
                .addOnSuccessListener(aVoid -> cb.success(true))
                .addOnFailureListener(e -> cb.error(e.getLocalizedMessage()));
    }

    @CordovaMethod
    @HMSLog
    public void deleteActivityIdentificationUpdates(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        int requestCode = args.getInt(0);
        PendingIntent pendingIntent;
        if (!requests.containsKey(requestCode)) {
            pendingIntent = LocationUtils.getPendingIntent(corPack.getCordova().getContext(), LocationBroadcastReceiver.ACTION_PROCESS_IDENTIFICATION, requestCode, PendingIntent.FLAG_NO_CREATE);
            if (pendingIntent != null) {
                pendingIntent.cancel();
                cb.success(true);
            } else {
                cb.error(Exceptions.getError(Exceptions.NO_MATCHED_INTENT));
            }
        } else {
            activityIdentificationService.deleteActivityIdentificationUpdates(requests.get(requestCode))
                    .addOnSuccessListener(aVoid -> cb.success())
                    .addOnFailureListener(e -> cb.error(e.getLocalizedMessage()));
            requests.remove(requestCode);
            Log.i(TAG, "deleteActivityIdentificationUpdates end");
        }
        LocationUtils.deleteBackgroundTask(corPack.getCordova().getContext(), Constants.FunctionType.IDENTIFICATION_FUNCTION);
    }
}
