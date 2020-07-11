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

package com.huawei.hms.cordova.location.utils;

import android.util.Log;

import com.huawei.hms.cordova.location.helpers.JSONMapper;
import com.huawei.hms.location.Geofence;
import com.huawei.hms.location.GeofenceData;
import com.huawei.hms.location.GeofenceErrorCodes;
import com.huawei.hms.location.GeofenceRequest;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;


public class GeofenceUtils {

    private static final String TAG = GeofenceUtils.class.getSimpleName();

    public static final JSONMapper<JSONObject, Geofence> fromJSONObjectToGeofence = readableMap -> {
        Log.i(TAG, "fromJSONObjectToGeofence: " + readableMap.toString());
        Geofence.Builder builder = new Geofence.Builder();
        builder
                .setRoundArea(readableMap.getDouble("latitude"),
                        readableMap.getDouble("longitude"),
                        (float) readableMap.getDouble("radius"))
                .setUniqueId(readableMap.getString("uniqueId"))
                .setConversions(readableMap.getInt("conversions"))
                .setValidContinueTime((long) readableMap.getDouble("validContinueTime"))
                .setDwellDelayTime(readableMap.getInt("dwellDelayTime"))
                .setNotificationInterval(readableMap.getInt("notificationInterval"));

        return builder.build();
    };

    public static final JSONMapper<Geofence, JSONObject> fromGeofenceToJSONObject = geofence -> {
        JSONObject result = new JSONObject();
        result.put("uniqueId", geofence.getUniqueId());
        return result;
    };

    public static GeofenceRequest fromJSONArrayToGeofences(final JSONArray arrayGeofences, int initConversions, int coordinateType) throws JSONException {
        Log.i(TAG, "buildGeofenceRequest start");
        List<Geofence> geofences = CordovaUtils.mapJSONArray(arrayGeofences, fromJSONObjectToGeofence);

        GeofenceRequest.Builder request = new GeofenceRequest.Builder();
        request.createGeofenceList(geofences)
                .setInitConversions(initConversions)
                .setCoordinateType(coordinateType);

        Log.i(TAG, "buildGeofenceRequest end");
        return request.build();
    }

    public static JSONObject fromGeofenceDataToJSONObject(GeofenceData geofenceData) throws JSONException {
        JSONObject result = new JSONObject();

        // Add convertingGeofenceList
        result.put("convertingGeofenceList", CordovaUtils.mapList(geofenceData.getConvertingGeofenceList(), fromGeofenceToJSONObject));

        result.put("conversion", geofenceData.getConversion());
        result.put("convertingLocation", LocationUtils.fromLocationToJSONObject(geofenceData.getConvertingLocation()));
        result.put("errorCode", geofenceData.getErrorCode());
        result.put("errorMessage", GeofenceErrorCodes.getErrorMessage(geofenceData.getErrorCode()));

        return result;
    }

}
