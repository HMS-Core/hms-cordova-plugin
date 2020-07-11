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
import com.huawei.hms.location.ActivityConversionData;
import com.huawei.hms.location.ActivityConversionInfo;
import com.huawei.hms.location.ActivityConversionRequest;
import com.huawei.hms.location.ActivityConversionResponse;
import com.huawei.hms.location.ActivityIdentificationData;
import com.huawei.hms.location.ActivityIdentificationResponse;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;


public class ActivityUtils {

    private static final String TAG = ActivityUtils.class.getSimpleName();

    public static final JSONMapper<JSONObject, ActivityConversionInfo> fromJSONObjectToActivityConversionInfo = readableMap -> {
        Log.i(TAG, "fromJSONObjectToActivityConversionInfo, readableMap = " + readableMap.toString());
        ActivityConversionInfo.Builder builder = new ActivityConversionInfo.Builder();
        ActivityConversionInfo info = builder
            .setConversionType(readableMap.getInt("conversionType"))
            .setActivityType(readableMap.getInt("activityType"))
            .build();

        Log.i(TAG, "fromJSONObjectToActivityConversionInfo, activityConversionInfo = " + info.toString());
        return info;
    };

    public static final JSONMapper<ActivityIdentificationData, JSONObject> fromActivityIdentificationDataToJSONObject = data -> {
        JSONObject result = new JSONObject();
        result.put("possibility", data.getPossibility());
        result.put("identificationActivity", data.getIdentificationActivity());
        return result;
    };

    private static final JSONMapper<ActivityConversionData, JSONObject> fromActivityConversionDataToJSONObject = data -> {
        JSONObject result = new JSONObject();
        result.put("activityType", data.getActivityType());
        result.put("elapsedTimeFromReboot", data.getElapsedTimeFromReboot());
        result.put("conversionType", data.getConversionType());
        return result;
    };

    public static ActivityConversionRequest fromJSONArrayToActivityConversionRequest(JSONArray readableArray) throws JSONException {
        Log.i(TAG, "fromJSONObjectToActivityConversionRequest, readableArray = " + readableArray.toString());
        List<ActivityConversionInfo> activityConversions =
                CordovaUtils.mapJSONArray(readableArray, fromJSONObjectToActivityConversionInfo);
        // TODO: activityConversions.setDataToIntent?
        return new ActivityConversionRequest(activityConversions);
    }

    public static JSONObject fromActivityIdentificationResponseToJSONObject(ActivityIdentificationResponse response) throws JSONException {
        JSONObject result = new JSONObject();
        result.put("elapsedTimeFromReboot", (double)response.getElapsedTimeFromReboot());
        result.put("mostActivityIdentification", fromActivityIdentificationDataToJSONObject.map(response.getMostActivityIdentification()));
        result.put("activityIdentificationDatas", CordovaUtils.mapList(response.getActivityIdentificationDatas(), fromActivityIdentificationDataToJSONObject));
        result.put("time", (double)response.getTime());
        return result;
    }

    public static JSONObject fromActivityConversionResponseToJSONObject(ActivityConversionResponse response) throws JSONException {
        JSONObject result = new JSONObject();
        result.put("activityConversionDatas", CordovaUtils.mapList(response.getActivityConversionDatas(), fromActivityConversionDataToJSONObject));
        return result;
    }

}
