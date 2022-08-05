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

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

public class MLSpeechRttConstants {

    public static final String RESULTS_RECOGNIZING = "results_recognizing";

    public static final String RESULTS_PARTIALFINAL = "RESULTS_PARTIALFINAL";

    public static final String RESULTS_WORD_OFFSET = "RESULTS_WORD_OFFSET";

    public static final String RESULTS_SENTENCE_OFFSET = "RESULTS_SENTENCE_OFFSET";

    public static final int STATE_LISTENING = 1;

    public static final int STATE_NO_UNDERSTAND = 6;

    public static final int STATE_NO_NETWORK = 7;

    public static final int STATE_SERVICE_RECONNECTING = 42;

    public static final int STATE_SERVICE_RECONNECTED = 43;

    public static final String WAVE_PAINE_ENCODING = "ENCODING";

    public static final String WAVE_PAINE_SAMPLE_RATE = "SAMPLE_RATE";

    public static final String WAVE_PAINE_BIT_WIDTH = "BIT_WIDTH";

    public static final String WAVE_PAINE_CHANNEL_COUNT = "CHANNEL_COUNT";

    public static final String LAN_ZH_CN = "zh-CN";

    public static final String LAN_EN_US = "en-US";

    public static final String LAN_FR_FR = "fr-FR";

    public static final String LAN_ES_ES = "es-ES";

    public static final String LAN_EN_IN = "en-IN";

    public static final String LAN_DE_DE = "de-DE";

    public static final int ERR_NO_NETWORK = 13202;

    public static final int ERR_SERVICE_UNAVAILABLE = 13203;

    public static final int ERR_INVALIDE_TOKEN = 13219;

    public static final int ERR_SERVICE_CREDIT = 13222;

    public static final int ERR_SERVICE_UNSUBSCRIBED = 13223;

    public static final int ERR_SERVICE_FREE_USED_UP = 13224;

    public static final String SCENES_SHOPPING = "shopping";

    static final Map<Integer, Integer> RTT_ERROR_MSGS = new HashMap<>();

    static final Map<String, String> RTT_ERROR_MSGS_STRING = new HashMap<>();

    static {

        RTT_ERROR_MSGS.put(STATE_LISTENING, 1);
        RTT_ERROR_MSGS.put(STATE_NO_UNDERSTAND, 6);
        RTT_ERROR_MSGS.put(STATE_NO_NETWORK, 7);
        RTT_ERROR_MSGS.put(STATE_SERVICE_RECONNECTING, 42);
        RTT_ERROR_MSGS.put(STATE_SERVICE_RECONNECTED, 43);
        RTT_ERROR_MSGS.put(ERR_SERVICE_UNAVAILABLE, 13203);
        RTT_ERROR_MSGS.put(ERR_INVALIDE_TOKEN, 13219);
        RTT_ERROR_MSGS.put(ERR_SERVICE_CREDIT, 13222);
        RTT_ERROR_MSGS.put(ERR_SERVICE_UNSUBSCRIBED, 13223);
        RTT_ERROR_MSGS.put(ERR_SERVICE_FREE_USED_UP, 13224);
        RTT_ERROR_MSGS.put(ERR_NO_NETWORK, 13202);
    }

    static {
        RTT_ERROR_MSGS_STRING.put(RESULTS_RECOGNIZING, "results_recognizing");
        RTT_ERROR_MSGS_STRING.put(RESULTS_PARTIALFINAL, "RESULTS_PARTIALFINAL");
        RTT_ERROR_MSGS_STRING.put(RESULTS_WORD_OFFSET, "RESULTS_WORD_OFFSET");
        RTT_ERROR_MSGS_STRING.put(RESULTS_SENTENCE_OFFSET, "RESULTS_SENTENCE_OFFSET");
        RTT_ERROR_MSGS_STRING.put(WAVE_PAINE_ENCODING, "ENCODING");
        RTT_ERROR_MSGS_STRING.put(WAVE_PAINE_SAMPLE_RATE, "SAMPLE_RATE");
        RTT_ERROR_MSGS_STRING.put(WAVE_PAINE_BIT_WIDTH, "BIT_WIDTH");
        RTT_ERROR_MSGS_STRING.put(WAVE_PAINE_CHANNEL_COUNT, "CHANNEL_COUNT");
        RTT_ERROR_MSGS_STRING.put(SCENES_SHOPPING, "shopping");
        RTT_ERROR_MSGS_STRING.put(LAN_ZH_CN, "zh-CN");
        RTT_ERROR_MSGS_STRING.put(LAN_EN_US, "en-US");
        RTT_ERROR_MSGS_STRING.put(LAN_FR_FR, "fr-FR");
        RTT_ERROR_MSGS_STRING.put(LAN_ES_ES, "es-ES");
        RTT_ERROR_MSGS_STRING.put(LAN_EN_IN, "en-IN");
        RTT_ERROR_MSGS_STRING.put(LAN_DE_DE, "de-DE");

    }

    public MLSpeechRttConstants() {
    }

    public static JSONObject toErrorJSON(int errorCode) {
        try {
            return new JSONObject().put("errorCode", errorCode).put("errorMessage", RTT_ERROR_MSGS.get(errorCode));
        } catch (JSONException e) {
            Log.e("toErrorJSON get error: ", Objects.requireNonNull(e.getMessage()));
        }
        return new JSONObject();
    }

    public static JSONObject toErrorJSON(String errorCode) {
        try {
            return new JSONObject().put("errorCode", errorCode).put("errorMessage", RTT_ERROR_MSGS.get(errorCode));
        } catch (JSONException e) {
            Log.e("toErrorJSON get error: ", Objects.requireNonNull(e.getMessage()));
        }
        return new JSONObject();
    }

}
