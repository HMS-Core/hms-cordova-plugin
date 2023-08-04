/*
 * Copyright 2023. Huawei Technologies Co., Ltd. All rights reserved.
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

package com.huawei.hms.cordova.mllanguage.utils;

import static com.huawei.hms.cordova.mllanguage.utils.PlatformUtils.mapperWrapper;

import com.huawei.hms.mlsdk.common.MLApplicationSetting;
import com.huawei.hms.mlsdk.langdetect.MLDetectedLang;
import com.huawei.hms.mlsdk.model.download.MLModelDownloadStrategy;

import com.google.gson.Gson;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

public class TextUtils {
    public static final Mapper<List<MLDetectedLang>, JSONObject> FROM_MLLANG_TO_JSON_OBJECT = mapperWrapper(
        (List<MLDetectedLang> mlDetectedLangs) -> {
            JSONObject map = new JSONObject();
            JSONArray array = HMSMLUtils.listToJSONArray(mlDetectedLangs, TextUtils::langDetectResultTOJSON);
            map.putOpt("result", array);
            return map;
        }, new JSONObject());

    private static final String TAG = TextUtils.class.getSimpleName();

    private static Gson gson = new Gson();

    private static JSONObject langDetectResultTOJSON(final MLDetectedLang detectedLang) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("langCode", detectedLang.getLangCode());
        jsonObject.putOpt("probability", detectedLang.getProbability());
        jsonObject.putOpt("hashCode", detectedLang.hashCode());
        return jsonObject;
    }

    public static JSONObject mlLangDetectToJSON(final MLDetectedLang detectedLang) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("langCode", detectedLang.getLangCode());
        jsonObject.putOpt("probability", detectedLang.getProbability());
        jsonObject.putOpt("hashCode", detectedLang.hashCode());

        return jsonObject;
    }

    public static <T> T toObject(final JSONObject jsonObject, final Class<T> clazz) {
        if (jsonObject != null) {
            return gson.fromJson(jsonObject.toString(), clazz);
        } else {
            return null;
        }
    }

    public static JSONObject downloadStrategy(final MLModelDownloadStrategy mlModelDownloadStrategy)
        throws JSONException {
        JSONObject object = new JSONObject();
        object.putOpt("isChargingNeed", mlModelDownloadStrategy.isChargingNeed());
        object.putOpt("isDeviceIdleNeed", mlModelDownloadStrategy.isDeviceIdleNeed());
        object.putOpt("isWifiNeed", mlModelDownloadStrategy.isWifiNeed());
        return object;
    }

    public static JSONObject getApplicationSetting(final MLApplicationSetting mlApplicationSetting)
        throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("apiKey", mlApplicationSetting.getApiKey());
        jsonObject.putOpt("certFingerprint", mlApplicationSetting.getCertFingerprint());
        jsonObject.putOpt("appID", mlApplicationSetting.getAppId());
        jsonObject.putOpt("acceptHa", mlApplicationSetting.getAcceptHa());
        jsonObject.putOpt("sdkVersion", mlApplicationSetting.getMLSdkVersion());
        jsonObject.putOpt("packageName", mlApplicationSetting.getPackageName());
        jsonObject.putOpt("region", mlApplicationSetting.getRegion());
        jsonObject.putOpt("extProperties", mlApplicationSetting.getExtProperties());
        jsonObject.putOpt("serviceUrl", mlApplicationSetting.getMLServiceUrls());
        return jsonObject;
    }

}
