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

package com.huawei.hms.cordova.ads.utils;

import com.huawei.hms.ads.AdvertiserInfo;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

public class ListToJson {

    public static JSONArray advertiserInfosToJson(List<AdvertiserInfo> advertiserInfos) throws JSONException {
        JSONArray result = new JSONArray();
        if (advertiserInfos != null) {
            for (AdvertiserInfo advertiserInfo : advertiserInfos) {
                result.put(advertiserInfoToJson(advertiserInfo));
            }
        }
        return result;
    }

    public static JSONObject advertiserInfoToJson(AdvertiserInfo advertiserInfo) throws JSONException {
        JSONObject result = new JSONObject();
        result.put("seq", advertiserInfo.getSeq());
        result.put("key", advertiserInfo.getKey());
        result.put("value", advertiserInfo.getValue());
        return result;
    }
}