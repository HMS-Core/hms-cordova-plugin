/*
 * Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.huawei.hms.cordova.location.helpers;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import com.huawei.hms.cordova.location.utils.Constants;
import com.huawei.hms.cordova.location.utils.CordovaUtils;
import com.huawei.hms.cordova.location.utils.LocationUtils;
import com.huawei.hms.cordova.location.utils.json.ObjectToJSON;
import com.huawei.hms.location.ActivityConversionResponse;
import com.huawei.hms.location.ActivityIdentificationResponse;
import com.huawei.hms.location.Geofence;
import com.huawei.hms.location.GeofenceData;
import com.huawei.hms.location.GeofenceErrorCodes;
import com.huawei.hms.location.LocationResult;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.List;

public class LocationBroadcastReceiver extends BroadcastReceiver {
    public static final String ACTION_PROCESS_GEOFENCE = "com.huawei.hms.location.ACTION_PROCESS_GEOFENCE";

    public static final String ACTION_PROCESS_IDENTIFICATION = "com.huawei.hms.location.ACTION_PROCESS_ACTIVITY_IDENTIFICATION";

    public static final String ACTION_PROCESS_CONVERSION = "com.huawei.hms.location.ACTION_PROCESS_ACTIVITY_CONVERSION";

    public static final String ACTION_PROCESS_LOCATION = "com.huawei.hms.location.ACTION_PROCESS_LOCATION";

    private static final String TAG = LocationBroadcastReceiver.class.getSimpleName();

    @Override
    public void onReceive(Context context, Intent intent) {
        if (intent == null || intent.getAction() == null) {
            return;
        }
        Log.d(TAG, "onReceive is called. Action: " + intent.getAction());
        switch (intent.getAction()) {
            case ACTION_PROCESS_GEOFENCE:
                executeActionGeofence(context, intent);
                break;
            case ACTION_PROCESS_IDENTIFICATION:
                executeActionIdentification(context, intent);
                break;
            case ACTION_PROCESS_CONVERSION:
                executeActionConversion(context, intent);
                break;
            case ACTION_PROCESS_LOCATION:
                executeActionLocation(context, intent);
                break;
            default:
                Log.d(TAG, "onReceive: Provider is not found.");
                break;
        }
    }

    private void executeActionLocation(Context context, Intent intent) {
        if(LocationResult.hasResult(intent)) {
            LocationResult locationResult = LocationResult.extractResult(intent);
            JSONObject json = ObjectToJSON.convertLocationResultToJSON(locationResult);
            if (!LocationUtils.isApplicationInForeground(context)) {
                runBackgroundTask(Constants.FunctionType.LOCATION_FUNCTION, context, json);
            } else {
                Log.d(TAG, "executeActionLocation: foreground");
                CordovaUtils.sendEvent(Constants.Event.ON_LOCATION_RESULT, json);
            }
        } else{
            Log.d(TAG, "executeActionLocation: intent result is null");
        }
    }

    private void executeActionConversion(Context context, Intent intent) {
        if(ActivityConversionResponse.containDataFromIntent(intent)) {
            ActivityConversionResponse activityConversionResponse = ActivityConversionResponse.getDataFromIntent(intent);
            JSONObject result = ObjectToJSON.activityConversionResponseToJSON(activityConversionResponse);
            if (!LocationUtils.isApplicationInForeground(context)) {
                runBackgroundTask(Constants.FunctionType.CONVERSION_FUNCTION, context, result);
            } else {
                Log.d(TAG, "executeActionConversion: foreground");
                CordovaUtils.sendEvent(Constants.Event.ON_ACTIVITY_CONVERSION_RESULT, result);
            }
        } else{
            Log.d(TAG, "executeActionConversion: intent result is null");
        }
    }

    private void runBackgroundTask(String functionName, Context context, JSONObject result) {
        Log.d(TAG, "runBackgroundTask() called with: functionName = [" + functionName + "], context = [" + context
            + "], result = [" + result + "]");
        BackgroundTaskHandler handler = new BackgroundTaskHandler(context);
        handler.handle(functionName, result);
    }

    private void executeActionIdentification(Context context, Intent intent) {
        if(ActivityIdentificationResponse.containDataFromIntent(intent)) {
            ActivityIdentificationResponse response = ActivityIdentificationResponse.getDataFromIntent(intent);
            JSONObject result = ObjectToJSON.activityIdentificationResponseToJSON(response);
            if (!LocationUtils.isApplicationInForeground(context)) {
                runBackgroundTask(Constants.FunctionType.IDENTIFICATION_FUNCTION, context, result);
            } else {
                CordovaUtils.sendEvent(Constants.Event.ON_ACTIVITY_IDENTIFICATION_RESULT, result);
            }
        } else{
            Log.d(TAG, "executeActionIdentification: intent result is null");
        }
    }

    private void executeActionGeofence(Context context, Intent intent) {
        if(intent != null) {
            GeofenceData geofenceData = GeofenceData.getDataFromIntent(intent);
            if (geofenceData.isFailure()) {
                String errorMessage = GeofenceErrorCodes.getStatusCodeString(geofenceData.getErrorCode());
                Log.e(TAG, errorMessage);
                return;
            }
            int triggerType = geofenceData.getConversion(); // Get the conversion type.
            if (triggerType == Geofence.ENTER_GEOFENCE_CONVERSION || triggerType == Geofence.EXIT_GEOFENCE_CONVERSION
                    || triggerType == Geofence.DWELL_GEOFENCE_CONVERSION) {
                List<Geofence> triggeringGeofences
                        = geofenceData.getConvertingGeofenceList(); // Get the geofences that were triggered. A single event can trigger
                JSONArray geofences = ObjectToJSON.convertGeofenceListToJSONArray(triggeringGeofences);
                if (!LocationUtils.isApplicationInForeground(context)) {
                    JSONObject json = ObjectToJSON.convertLocationToJSON(geofenceData.getConvertingLocation());
                    runBackgroundTask(Constants.FunctionType.GEOFENCE_FUNCTION, context, json);
                } else {
                    CordovaUtils.sendEvent(Constants.Event.ON_GEOFENCE_RESULT, geofences);
                }
            } else {
                Log.e(TAG, "Invalid trigger type: " + triggerType);
            }
        } else{
            Log.d(TAG, "executeActionIdentification: intent result is null");
        }
    }
}
