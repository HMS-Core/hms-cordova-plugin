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

import android.location.Location;
import android.os.Build;
import android.util.Log;

import com.huawei.hms.cordova.location.helpers.Exceptions;
import com.huawei.hms.cordova.location.helpers.JSONMapper;
import com.huawei.hms.location.FusedLocationProviderClient;
import com.huawei.hms.location.HWLocation;
import com.huawei.hms.location.LocationRequest;
import com.huawei.hms.location.LocationSettingsRequest;
import com.huawei.hms.location.LocationSettingsStates;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;


public class LocationUtils {

    private static final String TAG = LocationUtils.class.getSimpleName();

    public static final JSONMapper<JSONObject, LocationRequest> fromJSONObjectToLocationRequest = readableMap -> LocationRequest.create()
            .setPriority(readableMap.getInt("priority"))
            .setInterval((long) readableMap.getDouble("interval"))
            .setNumUpdates(readableMap.getInt("numUpdates"))
            .setFastestInterval((long) readableMap.getDouble("fastestInterval"))
            .setExpirationTime((long) readableMap.getDouble("expirationTime"))
            .setExpirationDuration((long) readableMap.getDouble("expirationTimeDuration"))
            .setSmallestDisplacement((long) readableMap.getDouble("smallestDisplacement"))
            .setMaxWaitTime((long) readableMap.getDouble("maxWaitTime"))
            .setNeedAddress(readableMap.getBoolean("needAddress"))
            .setLanguage(readableMap.getString("language"))
            .setCountryCode(readableMap.getString("countryCode"));

    public static final JSONMapper<JSONObject, LocationSettingsRequest> fromJSONObjectToLocationSettingsRequest = locationRequestMap -> {
        JSONArray locationRequestsArray = locationRequestMap.getJSONArray("locationRequests");
        List<LocationRequest> locationRequestList = CordovaUtils.mapJSONArray(locationRequestsArray, fromJSONObjectToLocationRequest);

        LocationSettingsRequest.Builder locationRequest = new LocationSettingsRequest.Builder();
        return locationRequest.addAllLocationRequests(locationRequestList)
                .setAlwaysShow(locationRequestMap.getBoolean("alwaysShow"))
                .setNeedBle(locationRequestMap.getBoolean("needBle"))
                .build();
    };

    public static JSONObject fromLocationToJSONObject(Location location) throws JSONException {
        JSONObject map = new JSONObject();

        map.put("latitude", location.getLatitude());
        map.put("longitude", location.getLongitude());
        map.put("altitude", location.getAltitude());
        map.put("speed", location.getSpeed());
        map.put("bearing", location.getBearing());
        map.put("accuracy", location.getAccuracy());

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            map.put("verticalAccuracyMeters", location.getVerticalAccuracyMeters());
            map.put("bearingAccuracyDegrees", location.getBearingAccuracyDegrees());
            map.put("speedAccuracyMetersPerSecond", location.getSpeedAccuracyMetersPerSecond());
        } else {
            map.put("verticalAccuracyMeters", 0.0);
            map.put("bearingAccuracyDegrees", 0.0);
            map.put("speedAccuracyMetersPerSecond", 0.0);
        }

        map.put("time", location.getTime());
        map.put("fromMockProvider", location.isFromMockProvider());

        return map;
    }

    public static boolean checkForObstacles(CordovaInterface cordova, FusedLocationProviderClient fused) {
        return checkForObstacles(cordova, fused, null);
    }

    public static boolean checkForObstacles(CordovaInterface cordova, FusedLocationProviderClient fused, final CallbackContext cordovaCallback) {
        if (!PermissionUtils.hasLocationPermission(cordova)) {
            Log.i(TAG, "checkForObstacles -> no permissions");
            if (cordovaCallback != null) {
                cordovaCallback.error(new Exceptions.NoPermissionsError().getMessage());
            }
            return true;
        }

        if (fused == null) {
            Log.i(TAG, "checkForObstacles -> fusedLocationProviderClient is null");
            if (cordovaCallback != null) {
                cordovaCallback.error(new Exceptions.NoFusedLocationProviderError().getMessage());
            }
            return true;
        }

        return false;
    }

    public static String hwLocationToString(HWLocation hwLocation) {
        return "HWLocation ["
            + "longitude=" + hwLocation.getLongitude()
            + ",latitude=" + hwLocation.getLatitude()
            + ",accuracy=" + hwLocation.getAccuracy()
            + ",countryName=" + hwLocation.getCountryName()
            + ",state=" + hwLocation.getState()
            + ",city=" + hwLocation.getCity()
            + ",county=" + hwLocation.getCounty()
            + ",featureName=" + hwLocation.getFeatureName()
            + "]";
    }

    public static JSONObject fromHWLocationToJSONObject(HWLocation hwLocation) throws JSONException {
        JSONObject result = new JSONObject();
        result.put("latitude", hwLocation.getLatitude());
        result.put("longitude", hwLocation.getLongitude());
        result.put("altitude", hwLocation.getAltitude ());
        result.put("speed", hwLocation.getSpeed());
        result.put("bearing", hwLocation.getBearing());
        result.put("accuracy", hwLocation.getAccuracy());
        result.put("provider", hwLocation.getProvider());
        result.put("time", hwLocation.getTime());
        result.put("elapsedRealtimeNanos", hwLocation.getElapsedRealtimeNanos());
        result.put("countryCode", hwLocation.getCountryCode());
        result.put("countryName", hwLocation.getCountryName());
        result.put("state", hwLocation.getState());
        result.put("city", hwLocation.getCity());
        result.put("county", hwLocation.getCounty());
        result.put("street", hwLocation.getStreet());
        result.put("featureName", hwLocation.getFeatureName());
        result.put("postalCode", hwLocation.getPostalCode());
        result.put("phone", hwLocation.getPhone());
        result.put("url", hwLocation.getUrl());
        result.put("extraInfo", CordovaUtils.fromMapToJSONObject(hwLocation.getExtraInfo()));

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            result.put("verticalAccuracyMeters", hwLocation.getVerticalAccuracyMeters());
            result.put("bearingAccuracyDegrees", hwLocation.getBearingAccuracyDegrees());
            result.put("speedAccuracyMetersPerSecond", hwLocation.getSpeedAccuracyMetersPerSecond());
        } else {
            result.put("verticalAccuracyMeters", 0.0);
            result.put("bearingAccuracyDegrees", 0.0);
            result.put("speedAccuracyMetersPerSecond", 0.0);
        }

        return result;
    }

    public static JSONObject fromLocationSettingsStatesResponseToJSONObject(LocationSettingsStates locationSettingsStates) throws JSONException {
        JSONObject result = new JSONObject();
        result.put("isBlePresent", locationSettingsStates.isBlePresent());
        result.put("isBleUsable", locationSettingsStates.isBleUsable());
        result.put("isGpsPresent", locationSettingsStates.isGpsPresent());
        result.put("isGpsUsable", locationSettingsStates.isGpsUsable());
        result.put("isLocationPresent", locationSettingsStates.isLocationPresent());
        result.put("isLocationUsable", locationSettingsStates.isLocationUsable());
        result.put("isNetworkLocationPresent", locationSettingsStates.isNetworkLocationPresent());
        result.put("isNetworkLocationUsable", locationSettingsStates.isNetworkLocationUsable());

        // TODO: result.put("status", fromStatusToJSONObject(locationSettingsStates.getStatus()))
        return result;
    }

}
