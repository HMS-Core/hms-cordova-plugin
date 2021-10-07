/*
    Copyright 2020-2021. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.map.utils;

import com.huawei.hms.cordova.map.utils.json.JsonToObject;
import com.huawei.hms.maps.MapsInitializer;
import com.huawei.hms.maps.common.util.DistanceCalculator;
import com.huawei.hms.maps.model.LatLng;

import org.json.JSONException;
import org.json.JSONObject;

public class MapKitUtils {
    private MapKitUtils() {
    }

    public static JSONObject computeDistanceBetween(JSONObject json) {
        try {
            LatLng from = JsonToObject.constructLatLng(json.optJSONObject("from"));
            LatLng to = JsonToObject.constructLatLng(json.optJSONObject("to"));
            double distance = DistanceCalculator.computeDistanceBetween(from, to);
            return new JSONObject().put("distance", distance);
        } catch (JSONException e) {
            return null;
        }
    }

    public static void setApiKey(JSONObject json) {
        MapsInitializer.setApiKey(json.optString("apiKey"));
    }
}
