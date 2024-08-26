/*
 * Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.
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

package com.huawei.hms.cordova.location.services;

import android.app.PendingIntent;
import android.util.Log;
import android.os.Build;

import com.huawei.hms.cordova.location.basef.CordovaBaseModule;
import com.huawei.hms.cordova.location.basef.CordovaMethod;
import com.huawei.hms.cordova.location.basef.HMSLog;
import com.huawei.hms.cordova.location.basef.handler.CorPack;
import com.huawei.hms.cordova.location.basef.handler.Promise;
import com.huawei.hms.cordova.location.helpers.LocationBroadcastReceiver;
import com.huawei.hms.cordova.location.utils.json.JSONToObject;
import com.huawei.hms.cordova.location.utils.Constants;
import com.huawei.hms.cordova.location.utils.Exceptions;
import com.huawei.hms.cordova.location.utils.LocationUtils;
import com.huawei.hms.location.GeofenceRequest;
import com.huawei.hms.location.LocationServices;

import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;

import java.util.HashMap;
import java.util.Map;

public class GeofenceService extends CordovaBaseModule {
    private final com.huawei.hms.location.GeofenceService geofenceService;

    private final Map<Integer, PendingIntent> requests;

    public GeofenceService(CordovaInterface cordova) {
        geofenceService = LocationServices.getGeofenceService(cordova.getContext());
        requests = new HashMap<>();
    }

    @Override
    public void onDestroy() {
        Log.d("GeofenceService", "onDestroy() called");
    }

    @CordovaMethod
    @HMSLog
    public void createGeofenceList(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        if (!LocationUtils.hasLocationPermission(corPack)) {
            cb.error(Exceptions.getError(Exceptions.GEOFENCE_INSUFFICIENT_PERMISSION));
            return;
        }
        int requestCode = args.getInt(0);
        JSONArray requestParams = args.getJSONArray(1);
        GeofenceRequest geofenceRequest = getGeofenceRequest(requestParams);
        if (args.length() > 2) {
            String function = args.getString(2);
            LocationUtils.saveBackgroundTask(corPack.getCordova().getContext(),
                Constants.FunctionType.GEOFENCE_FUNCTION, function);
        }
        PendingIntent pendingIntent;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            pendingIntent = LocationUtils.getPendingIntent(corPack.getCordova().getContext(),
            LocationBroadcastReceiver.ACTION_PROCESS_GEOFENCE, requestCode, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_MUTABLE);
        } else {
            pendingIntent = LocationUtils.getPendingIntent(corPack.getCordova().getContext(),
            LocationBroadcastReceiver.ACTION_PROCESS_GEOFENCE, requestCode, PendingIntent.FLAG_UPDATE_CURRENT);
        }
        requests.put(requestCode, pendingIntent);
        geofenceService.createGeofenceList(geofenceRequest, pendingIntent)
            .addOnSuccessListener(aVoid -> cb.success(true))
            .addOnFailureListener(e -> cb.error(e.getLocalizedMessage()));
    }

    @CordovaMethod
    @HMSLog
    public void deleteGeofenceList(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        int requestCode = args.getInt(0);
        PendingIntent pendingIntent;
        if (!requests.containsKey(requestCode)) {
            pendingIntent = LocationUtils.getPendingIntent(corPack.getCordova().getContext(),
                LocationBroadcastReceiver.ACTION_PROCESS_GEOFENCE, requestCode, PendingIntent.FLAG_NO_CREATE);
            if (pendingIntent != null) {
                pendingIntent.cancel();
                cb.success(true);
            } else {
                cb.error(Exceptions.getError(Exceptions.NO_MATCHED_INTENT));
            }
        } else {
            pendingIntent = requests.get(requestCode);
            geofenceService.deleteGeofenceList(pendingIntent)
                .addOnSuccessListener(aVoid -> cb.success(true))
                .addOnFailureListener(e -> cb.error(e.getLocalizedMessage()));
            requests.remove(requestCode);
        }
        LocationUtils.deleteBackgroundTask(corPack.getCordova().getContext(), Constants.FunctionType.GEOFENCE_FUNCTION);
    }

    private GeofenceRequest getGeofenceRequest(JSONArray args) throws JSONException {
        GeofenceRequest.Builder builder = new GeofenceRequest.Builder();
        builder.createGeofenceList(JSONToObject.convertJSONToGeofenceList(args.getJSONArray(0)));
        builder.setInitConversions(args.getInt(1));
        builder.setCoordinateType(args.getInt(2));
        return builder.build();
    }
}
