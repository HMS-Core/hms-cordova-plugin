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

package com.huawei.hms.cordova.ads.utils;

import com.huawei.hms.ads.HwAds;
import com.huawei.hms.ads.RequestOptions;

import org.json.JSONObject;

public class HwAdsUtils {
    public static RequestOptions fromJSONObjectToRequestOptions(JSONObject json) {
        // Need to use existing configuration, according to the guide
        RequestOptions.Builder requestOptions;
        if (null == HwAds.getRequestOptions()) {
            requestOptions = new RequestOptions().toBuilder();
        } else {
            requestOptions = HwAds.getRequestOptions().toBuilder();
        }

        if (null == json) {
            return requestOptions.build();
        }

        if (json.has("adContentClassification")) {
            requestOptions.setAdContentClassification(json.optString("adContentClassification"));
        }
        if (json.has("appCountry")) {
            requestOptions.setAppCountry(json.optString("appCountry"));
        }
        if (json.has("appLang")) {
            requestOptions.setAppLang(json.optString("appLang"));
        }
        if (json.has("nonPersonalizedAd")) {
            requestOptions.setNonPersonalizedAd(json.optInt("nonPersonalizedAd"));
        }
        if (json.has("tagForChildProtection")) {
            requestOptions.setTagForChildProtection(json.optInt("tagForChildProtection"));
        }
        if (json.has("tagForUnderAgeOfPromise")) {
            requestOptions.setTagForUnderAgeOfPromise(json.optInt("tagForUnderAgeOfPromise"));
        }

        return requestOptions.build();
    }
}
