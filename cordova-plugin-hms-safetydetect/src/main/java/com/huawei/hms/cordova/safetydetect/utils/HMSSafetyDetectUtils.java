/*
    Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.safetydetect.utils;

import com.huawei.hms.support.api.entity.safetydetect.MaliciousAppsData;
import com.huawei.hms.support.api.entity.safetydetect.UrlCheckThreat;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

public class HMSSafetyDetectUtils {
    public static JSONArray fromMaliciousAppsDataToJsonArray(List<MaliciousAppsData> maliciousAppsData)
        throws JSONException {
        JSONArray arrayListMaliciousAppsData = new JSONArray();

        for (MaliciousAppsData maliciousApp : maliciousAppsData) {
            JSONObject maliciousAppsObject = new JSONObject();
            maliciousAppsObject.put("apkCategory", maliciousApp.getApkCategory());
            maliciousAppsObject.put("apkPackageName", maliciousApp.getApkPackageName());
            maliciousAppsObject.put("apkSha256", maliciousApp.getApkSha256());
            arrayListMaliciousAppsData.put(maliciousAppsObject);
        }

        return arrayListMaliciousAppsData;
    }

    public static int[] fromJsonArrayToUrlCheckThreats(JSONArray urlCheckThreats) throws JSONException {
        int[] ret = new int[urlCheckThreats.length()];
        for (int i = 0; i < ret.length; i++) {
            ret[i] = (int) urlCheckThreats.get(i);
        }
        return ret;
    }

    public static JSONArray fromUrlCheckThreatsToJsonArray(List<UrlCheckThreat> urlCheckThreats)
        throws JSONException {
        JSONArray arrayListUrlCheckThreats = new JSONArray();

        for (UrlCheckThreat urlCheckThreat : urlCheckThreats) {
            arrayListUrlCheckThreats.put(urlCheckThreat.getUrlCheckResult());
        }

        return arrayListUrlCheckThreats;
    }
}
