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

import android.location.Location;
import android.os.Build;
import android.util.Log;

import com.huawei.hms.cordova.location.utils.CordovaUtils;
import com.huawei.hms.location.ActivityConversionData;
import com.huawei.hms.location.ActivityConversionResponse;
import com.huawei.hms.location.ActivityIdentificationData;
import com.huawei.hms.location.ActivityIdentificationResponse;
import com.huawei.hms.location.Geofence;
import com.huawei.hms.location.HWLocation;
import com.huawei.hms.location.LocationResult;
import com.huawei.hms.location.LocationSettingsStates;
import com.huawei.hms.location.LogConfig;
import com.huawei.hms.location.NavigationResult;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

public class ObjectToJSON {
    private static final String TAG = ObjectToJSON.class.getSimpleName();

    public static JSONObject convertLocationToJSON(Location location) {
        JSONObject json = new JSONObject();
        try {
            json.put("latitude", location.getLatitude());
            json.put("longitude", location.getLongitude());
            json.put("altitude", location.getAltitude());
            json.put("speed", location.getSpeed());
            json.put("bearing", location.getBearing());
            json.put("accuracy", location.getAccuracy());
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                json.put("verticalAccuracyMeters", location.getVerticalAccuracyMeters());
                json.put("bearingAccuracyDegrees", location.getBearingAccuracyDegrees());
                json.put("speedAccuracyMetersPerSecond", location.getSpeedAccuracyMetersPerSecond());
            } else {
                json.put("verticalAccuracyMeters", 0.0);
                json.put("bearingAccuracyDegrees", 0.0);
                json.put("speedAccuracyMetersPerSecond", 0.0);
            }
            json.put("time", location.getTime());
            json.put("fromMockProvider", location.isFromMockProvider());
        } catch (JSONException e) {
            Log.d(TAG, e.getLocalizedMessage());
        }
        return json;
    }

    public static JSONArray convertHWLocationListToJSONArray(List<HWLocation> hwLocations) {
        JSONArray jsonArray = new JSONArray();
        for (HWLocation hwLocation : hwLocations) {
            jsonArray.put(convertHWLocationToJSON(hwLocation));
        }
        return jsonArray;
    }

    public static JSONObject convertHWLocationToJSON(HWLocation hwLocation) {
        JSONObject result = new JSONObject();
        try {
            result.put("latitude", hwLocation.getLatitude())
                .put("longitude", hwLocation.getLongitude())
                .put("altitude", hwLocation.getAltitude())
                .put("speed", hwLocation.getSpeed())
                .put("bearing", hwLocation.getBearing())
                .put("accuracy", hwLocation.getAccuracy())
                .put("provider", hwLocation.getProvider())
                .put("time", hwLocation.getTime())
                .put("elapsedRealtimeNanos", hwLocation.getElapsedRealtimeNanos())
                .put("countryCode", hwLocation.getCountryCode())
                .put("countryName", hwLocation.getCountryName())
                .put("state", hwLocation.getState())
                .put("city", hwLocation.getCity())
                .put("county", hwLocation.getCounty())
                .put("street", hwLocation.getStreet())
                .put("featureName", hwLocation.getFeatureName())
                .put("postalCode", hwLocation.getPostalCode())
                .put("phone", hwLocation.getPhone())
                .put("url", hwLocation.getUrl())
                .put("extraInfo", CordovaUtils.fromMapToJSONObject(hwLocation.getExtraInfo()));
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                result.put("verticalAccuracyMeters", hwLocation.getVerticalAccuracyMeters())
                    .put("bearingAccuracyDegrees", hwLocation.getBearingAccuracyDegrees())
                    .put("speedAccuracyMetersPerSecond", hwLocation.getSpeedAccuracyMetersPerSecond());
            } else {
                result.put("verticalAccuracyMeters", 0.0)
                    .put("bearingAccuracyDegrees", 0.0)
                    .put("speedAccuracyMetersPerSecond", 0.0);
            }
        } catch (JSONException e) {
            Log.d(TAG, e.getLocalizedMessage());
        }
        return result;
    }

    public static JSONObject locationSettingsStatesToJSON(LocationSettingsStates locationSettingsStates) {
        JSONObject json = new JSONObject();
        try {
            json.put("isBlePresent", locationSettingsStates.isBlePresent())
                .put("isBleUsable", locationSettingsStates.isBleUsable())
                .put("isGnssPresent", locationSettingsStates.isGnssPresent())
                .put("isGnssUsable", locationSettingsStates.isGnssUsable())
                .put("isLocationPresent", locationSettingsStates.isLocationPresent())
                .put("isLocationUsable", locationSettingsStates.isLocationUsable())
                .put("isNetworkLocationPresent", locationSettingsStates.isNetworkLocationPresent())
                .put("isNetworkLocationUsable", locationSettingsStates.isNetworkLocationUsable());
        } catch (JSONException e) {
            Log.d(TAG, e.getLocalizedMessage());
        }
        return json;
    }

    public static JSONObject navigationResultToJSON(NavigationResult navigationResult) {
        JSONObject result = new JSONObject();
        try {
            result.put("state", navigationResult.getState());
            result.put("possibility", navigationResult.getPossibility());
        } catch (JSONException e) {
            Log.d(TAG, e.getLocalizedMessage());
        }
        return result;
    }

    public static JSONObject activityIdentificationResponseToJSON(ActivityIdentificationResponse response) {
        JSONObject result = new JSONObject();
        try {
            result.put("elapsedTimeFromReboot", (double) response.getElapsedTimeFromReboot());
            result.put("mostActivityIdentification",
                activityIdentificationDataToJSON(response.getMostActivityIdentification()));
            result.put("activityIdentificationDatas",
                activityIdentificationDatasToJSON(response.getActivityIdentificationDatas()));
            result.put("time", (double) response.getTime());
        } catch (JSONException e) {
            Log.d(TAG, e.getLocalizedMessage());
        }
        return result;
    }

    private static JSONObject activityIdentificationDataToJSON(ActivityIdentificationData data) throws JSONException {
        JSONObject result = new JSONObject();
        result.put("possibility", data.getPossibility());
        result.put("identificationActivity", data.getIdentificationActivity());
        return result;
    }

    private static JSONArray activityIdentificationDatasToJSON(List<ActivityIdentificationData> datas)
        throws JSONException {
        JSONArray result = new JSONArray();
        for (ActivityIdentificationData data : datas) {
            result.put(activityIdentificationDataToJSON(data));
        }
        return result;
    }

    public static JSONObject activityConversionResponseToJSON(ActivityConversionResponse response) {
        JSONObject result = new JSONObject();
        try {
            result.put("activityConversionDataList",
                activityConversionListToJSON(response.getActivityConversionDatas()));
        } catch (JSONException e) {
            Log.d(TAG, e.getLocalizedMessage());
        }
        return result;
    }

    private static JSONArray activityConversionListToJSON(List<ActivityConversionData> datas) throws JSONException {
        JSONArray result = new JSONArray();
        for (ActivityConversionData data : datas) {
            result.put(convertActivityConversionDataToJSON(data));
        }
        return result;
    }

    private static JSONObject convertActivityConversionDataToJSON(ActivityConversionData data) throws JSONException {
        JSONObject result = new JSONObject();
        result.put("activityType", data.getActivityType());
        result.put("elapsedTimeFromReboot", data.getElapsedTimeFromReboot());
        result.put("conversionType", data.getConversionType());
        return result;
    }

    public static JSONArray convertGeofenceListToJSONArray(List<Geofence> triggeringGeofences) {
        JSONArray array = new JSONArray();
        try {
            for (Geofence triggeringGeofence : triggeringGeofences) {
                array.put(convertGeofenceToJSON(triggeringGeofence));
            }
        } catch (JSONException e) {
            Log.d(TAG, e.getLocalizedMessage());
        }
        return array;
    }

    private static JSONObject convertGeofenceToJSON(Geofence geofence) throws JSONException {
        JSONObject data = new JSONObject();
        data.put("uniqueId", geofence.getUniqueId());
        return data;
    }

    public static JSONObject convertLocationResultToJSON(LocationResult locationResult) {
        JSONObject result = new JSONObject();
        try {
            Location lastLocation = locationResult.getLastLocation();
            if (lastLocation != null) {
                result.put("lastLocation", convertLocationToJSON(lastLocation));
            }
            HWLocation lastHWLocation = locationResult.getLastHWLocation();
            if (lastHWLocation != null) {
                result.put("lastHWLocation", convertHWLocationToJSON(lastHWLocation));
            }
            List<Location> locations = locationResult.getLocations();
            if (locations.size() > 0) {
                result.put("locations", convertLocationListToJSON(locations));
            }
            List<HWLocation> hwLocations = locationResult.getHWLocationList();
            if (hwLocations.size() > 0) {
                result.put("hwLocations", convertHWLocationListToJSON(hwLocations));
            }
        } catch (JSONException e) {
            Log.d(TAG, e.getLocalizedMessage());
        }
        return result;
    }

    public static JSONObject convertLogConfigToJSON(LogConfig logConfig) throws JSONException {
        JSONObject result = new JSONObject();
        result.put("fileExpiredTime", logConfig.getFileExpiredTime());
        result.put("fileNum", logConfig.getFileNum());
        result.put("fileSize", logConfig.getFileSize());
        result.put("logPath", logConfig.getLogPath());
        return result;
    }

    private static JSONArray convertHWLocationListToJSON(List<HWLocation> hwLocations) {
        JSONArray args = new JSONArray();
        for (HWLocation currentHWLocation : hwLocations) {
            args.put(convertHWLocationToJSON(currentHWLocation));
        }
        return args;
    }

    private static JSONArray convertLocationListToJSON(List<Location> locations) {
        JSONArray args = new JSONArray();
        for (Location currentLocation : locations) {
            args.put(convertLocationToJSON(currentLocation));
        }
        return args;
    }
}
