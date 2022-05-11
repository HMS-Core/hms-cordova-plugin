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

package com.huawei.hms.cordova.location.utils.json;

import com.huawei.hms.location.ActivityConversionInfo;
import com.huawei.hms.location.ActivityConversionRequest;
import com.huawei.hms.location.Geofence;
import com.huawei.hms.location.LocationRequest;
import com.huawei.hms.location.LocationSettingsRequest;
import com.huawei.hms.location.LogConfig;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class JSONToObject {
    public static LocationRequest convertJSONToLocationRequest(JSONObject json) {
        LocationRequest locationRequest = LocationRequest.create();
        return locationRequest.setPriority(json.optInt("priority", locationRequest.getPriority()))
            .setInterval((long) json.optDouble("interval", locationRequest.getInterval()))
            .setNumUpdates(json.optInt("numUpdates", locationRequest.getNumUpdates()))
            .setFastestInterval((long) json.optDouble("fastestInterval", locationRequest.getFastestInterval()))
            .setExpirationTime((long) json.optDouble("expirationTime", locationRequest.getExpirationTime()))
            .setExpirationDuration((long) json.optDouble("expirationTimeDuration", Long.MAX_VALUE))
            .setSmallestDisplacement(
                (long) json.optDouble("smallestDisplacement", locationRequest.getSmallestDisplacement()))
            .setMaxWaitTime((long) json.optDouble("maxWaitTime", locationRequest.getMaxWaitTime()))
            .setNeedAddress(json.optBoolean("needAddress", locationRequest.getNeedAddress()))
            .setLanguage(json.optString("language", locationRequest.getLanguage()))
            .setCountryCode(json.optString("countryCode", locationRequest.getCountryCode()));
    }

    public static LocationSettingsRequest convertJSONToLocationSettingsRequest(JSONObject json) throws JSONException {
        JSONArray locationRequestsArray = json.getJSONArray("locationRequests");
        List<LocationRequest> locationRequestList = convertJSONArrayToLocationRequestList(locationRequestsArray);
        LocationSettingsRequest.Builder builder = new LocationSettingsRequest.Builder();
        return builder.addAllLocationRequests(locationRequestList)
            .setAlwaysShow(json.getBoolean("alwaysShow"))
            .setNeedBle(json.getBoolean("needBle"))
            .build();
    }

    private static List<LocationRequest> convertJSONArrayToLocationRequestList(JSONArray array) throws JSONException {
        List<LocationRequest> list = new ArrayList<>();
        for (int i = 0; i < array.length(); i++) {
            list.add(convertJSONToLocationRequest(array.getJSONObject(i)));
        }
        return list;
    }

    public static List<Geofence> convertJSONToGeofenceList(JSONArray geofences) throws JSONException {
        List<Geofence> list = new ArrayList<>();
        for (int i = 0; i < geofences.length(); i++) {
            JSONObject currentGeofence = geofences.getJSONObject(i);
            list.add(convertJSONToGeofence(currentGeofence));
        }
        return list;
    }

    public static Geofence convertJSONToGeofence(JSONObject geofence) throws JSONException {
        Geofence.Builder builder = new Geofence.Builder();
        builder.setRoundArea(geofence.getDouble("latitude"), geofence.getDouble("longitude"),
            (float) geofence.getDouble("radius"))
            .setConversions(geofence.getInt("conversions"))
            .setValidContinueTime(geofence.getLong("validContinueTime"))
            .setNotificationInterval(geofence.getInt("notificationInterval"))
            .setDwellDelayTime(geofence.getInt("dwellDelayTime"))
            .setUniqueId(geofence.getString("uniqueId"));
        return builder.build();
    }

    public static LogConfig convertJSONToLogConfig(JSONObject logConfigSettings, LogConfig logConfig)
        throws JSONException {
        if (logConfigSettings.has("logConfigSettingsFile")) {
            JSONObject logConfigSettingsFile = logConfigSettings.getJSONObject("logConfigSettingsFile");
            if (logConfigSettingsFile.has("fileExpiredTime")) {
                logConfig.setFileExpiredTime(logConfigSettingsFile.getInt("fileExpiredTime"));
            }
            if (logConfigSettingsFile.has("fileNum")) {
                logConfig.setFileNum(logConfigSettingsFile.getInt("fileNum"));
            }
            if (logConfigSettingsFile.has("fileSize")) {
                logConfig.setFileSize(logConfigSettingsFile.getInt("fileSize"));
            }
        }
        if (logConfigSettings.has("logPath")) {
            logConfig.setLogPath(logConfigSettings.getString("logPath"));
        }
        return logConfig;
    }

    public static ActivityConversionRequest convertJSONToActivityConversionRequest(JSONArray arr) throws JSONException {
        List<ActivityConversionInfo> activityConversions = convertJSONToActivityConversionInfoList(arr);
        return new ActivityConversionRequest(activityConversions);
    }

    private static List<ActivityConversionInfo> convertJSONToActivityConversionInfoList(JSONArray arr)
        throws JSONException {
        List<ActivityConversionInfo> list = new ArrayList<>();
        for (int i = 0; i < arr.length(); i++) {
            list.add(convertJSONToActivityConversionInfo(arr.getJSONObject(i)));
        }
        return list;
    }

    private static ActivityConversionInfo convertJSONToActivityConversionInfo(JSONObject json) throws JSONException {
        ActivityConversionInfo.Builder builder = new ActivityConversionInfo.Builder();
        return builder.setConversionType(json.getInt("conversionType"))
            .setActivityType(json.getInt("activityType"))
            .build();
    }
}
