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

package com.huawei.hms.cordova.mlkit.helpers;

import android.util.Log;

import com.huawei.hms.mlsdk.textembedding.MLTextEmbeddingException;
import com.huawei.hms.mlsdk.textembedding.MLTextEmbeddingSetting;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

public class MLTextEmbeddibgExceptions {
    static final Map<String, Integer> TEXT_EMBEDING_ERRORS = new HashMap<>();

    static final Map<String, String> TEXT_EMBEDING_SETTINGS = new HashMap<>();

    static {

        TEXT_EMBEDING_ERRORS.put("ERR_AUTH_FAILED", MLTextEmbeddingException.ERR_AUTH_FAILED);
        TEXT_EMBEDING_ERRORS.put("ERR_PARAM_ILLEGAL", MLTextEmbeddingException.ERR_PARAM_ILLEGAL);
        TEXT_EMBEDING_ERRORS.put("ERR_ANALYZE_FAILED", MLTextEmbeddingException.ERR_ANALYZE_FAILED);
        TEXT_EMBEDING_ERRORS.put("ERR_AUTH_TOKEN_INVALID", MLTextEmbeddingException.ERR_AUTH_TOKEN_INVALIDE);
        TEXT_EMBEDING_ERRORS.put("ERR_NET_UNAVAILABLE", MLTextEmbeddingException.ERR_NET_UNAVAILABLE);
        TEXT_EMBEDING_ERRORS.put("ERR_SERVICE_IS_UNAVAILABLE", MLTextEmbeddingException.ERR_SERVICE_IS_UNAVAILABLE);
    }

    static {
        TEXT_EMBEDING_SETTINGS.put("LANGUAGE_EN", MLTextEmbeddingSetting.LANGUAGE_EN);
        TEXT_EMBEDING_SETTINGS.put("LANGUAGE_ZH", MLTextEmbeddingSetting.LANGUAGE_ZH);
    }

    public MLTextEmbeddibgExceptions() {
    }

    public static JSONObject toErrorJSON(String errorCode) {
        try {
            return new JSONObject().put("errorCode", errorCode)
                .put("errorMessage", TEXT_EMBEDING_SETTINGS.get(errorCode));
        } catch (JSONException e) {
            Log.e("toErrorJSON get error: ", Objects.requireNonNull(e.getMessage()));
        }
        return new JSONObject();
    }

    public static JSONObject toErrorJSON(int errorCode) {
        try {
            return new JSONObject().put("errorCode", errorCode)
                .put("errorMessage", TEXT_EMBEDING_ERRORS.get(errorCode));
        } catch (JSONException e) {
            Log.e("toErrorJSON get error: ", Objects.requireNonNull(e.getMessage()));
        }
        return new JSONObject();
    }

}
