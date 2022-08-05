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

import com.huawei.hms.mlsdk.asr.MLAsrConstants;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

public class MLAsrConstant {

    public static final String FEATURE = "FEATURE";

    public static final String LANGUAGE = "LANGUAGE";

    public static final String PUNCTUATION_ENABLE = "PUNCTUATION_ENABLE";

    public static final String SCENES = "scenes";

    public static final String SCENES_SHOPPING = "shopping";

    public static final int FEATURE_WORDFLUX = 11;

    public static final int FEATURE_ALLINONE = 12;

    public static final String ACTION_HMS_ASR_SPEECH = "com.huawei.hms.mlsdk.action.RECOGNIZE_SPEECH";

    public static final String WAVE_PAINE_ENCODING = "ENCODING";

    public static final String WAVE_PAINE_SAMPLE_RATE = "SAMPLE_RATE";

    public static final String WAVE_PAINE_BIT_WIDTH = "BIT_WIDTH";

    public static final String WAVE_PAINE_CHANNEL_COUNT = "CHANNEL_COUNT";

    public static final int STATE_LISTENING = 1;

    public static final int STATE_NO_SOUND = 2;

    public static final int STATE_NO_SOUND_TIMES_EXCEED = 3;

    public static final int STATE_NO_UNDERSTAND = 6;

    public static final int STATE_NO_NETWORK = 7;

    public static final int STATE_WAITING = 9;

    public static final String LAN_ZH = "zh";

    public static final String LAN_ZH_CN = "zh-CN";

    public static final String LAN_EN_US = "en-US";

    public static final String LAN_FR_FR = "fr-FR";

    public static final String LAN_ES_ES = "es-ES";

    public static final String LAN_DE_DE = "de-DE";

    public static final String LAN_RU_RU = "ru-RU";

    public static final String LAN_IT_IT = "it-IT";

    public static final String LAN_AR = "ar";

    public static final String LAN_TH_TH = "th-TH";

    public static final String LAN_FIL_PH = "fil-PH";

    public static final String LAN_MS_MY = "ms-MY";

    public static final int ERR_NO_NETWORK = 11202;

    public static final int ERR_SERVICE_UNAVAILABLE = 11203;

    public static final int ERR_NO_UNDERSTAND = 11204;

    public static final int ERR_INVALIDATE_TOKEN = 11219;

    static final Map<String, String> ASR_CONSTANTS_MAP = new HashMap<>();

    static final Map<Integer, Integer> ASR_CONSTANTS_MAP2 = new HashMap<>();

    static {

        ASR_CONSTANTS_MAP.put(LAN_EN_US, MLAsrConstants.LAN_EN_US);
        ASR_CONSTANTS_MAP.put(LAN_FR_FR, MLAsrConstants.LAN_FR_FR);
        ASR_CONSTANTS_MAP.put(LAN_ZH_CN, MLAsrConstants.LAN_ZH_CN);
        ASR_CONSTANTS_MAP.put(LAN_ES_ES, MLAsrConstants.LAN_ES_ES);
        ASR_CONSTANTS_MAP.put(LAN_DE_DE, MLAsrConstants.LAN_DE_DE);
        ASR_CONSTANTS_MAP.put(LAN_RU_RU, MLAsrConstants.LAN_RU_RU);
        ASR_CONSTANTS_MAP.put(LAN_IT_IT, MLAsrConstants.LAN_IT_IT);
        ASR_CONSTANTS_MAP.put(LAN_AR, MLAsrConstants.LAN_AR);
        ASR_CONSTANTS_MAP.put(LAN_TH_TH, MLAsrConstants.LAN_TH_TH);
        ASR_CONSTANTS_MAP.put(LAN_MS_MY, MLAsrConstants.LAN_MS_MY);
        ASR_CONSTANTS_MAP.put(LAN_FIL_PH, MLAsrConstants.LAN_FIL_PH);
        ASR_CONSTANTS_MAP.put(LAN_ZH, MLAsrConstants.LAN_ZH);
        ASR_CONSTANTS_MAP.put(FEATURE, MLAsrConstants.FEATURE);
        ASR_CONSTANTS_MAP.put(PUNCTUATION_ENABLE, MLAsrConstants.PUNCTUATION_ENABLE);
        ASR_CONSTANTS_MAP.put(SCENES, MLAsrConstants.SCENES);
        ASR_CONSTANTS_MAP.put(SCENES_SHOPPING, MLAsrConstants.SCENES_SHOPPING);
        ASR_CONSTANTS_MAP.put(ACTION_HMS_ASR_SPEECH, MLAsrConstants.ACTION_HMS_ASR_SPEECH);
        ASR_CONSTANTS_MAP.put(WAVE_PAINE_SAMPLE_RATE, MLAsrConstants.WAVE_PAINE_SAMPLE_RATE);
        ASR_CONSTANTS_MAP.put(WAVE_PAINE_BIT_WIDTH, MLAsrConstants.WAVE_PAINE_BIT_WIDTH);
        ASR_CONSTANTS_MAP.put(WAVE_PAINE_CHANNEL_COUNT, MLAsrConstants.WAVE_PAINE_CHANNEL_COUNT);
        ASR_CONSTANTS_MAP.put(WAVE_PAINE_ENCODING, MLAsrConstants.WAVE_PAINE_ENCODING);

    }

    static {
        ASR_CONSTANTS_MAP2.put(STATE_WAITING, MLAsrConstants.STATE_WAITING);
        ASR_CONSTANTS_MAP2.put(ERR_NO_NETWORK, MLAsrConstants.ERR_NO_NETWORK);
        ASR_CONSTANTS_MAP2.put(ERR_NO_UNDERSTAND, MLAsrConstants.ERR_NO_UNDERSTAND);
        ASR_CONSTANTS_MAP2.put(ERR_SERVICE_UNAVAILABLE, MLAsrConstants.ERR_SERVICE_UNAVAILABLE);
        ASR_CONSTANTS_MAP2.put(ERR_INVALIDATE_TOKEN, MLAsrConstants.ERR_INVALIDATE_TOKEN);
        ASR_CONSTANTS_MAP2.put(FEATURE_ALLINONE, MLAsrConstants.FEATURE_ALLINONE);
        ASR_CONSTANTS_MAP2.put(FEATURE_WORDFLUX, MLAsrConstants.FEATURE_WORDFLUX);
        ASR_CONSTANTS_MAP2.put(STATE_NO_UNDERSTAND, MLAsrConstants.STATE_NO_UNDERSTAND);
        ASR_CONSTANTS_MAP2.put(STATE_NO_SOUND, MLAsrConstants.STATE_NO_SOUND);
        ASR_CONSTANTS_MAP2.put(STATE_NO_NETWORK, MLAsrConstants.STATE_NO_NETWORK);
        ASR_CONSTANTS_MAP2.put(STATE_LISTENING, MLAsrConstants.STATE_LISTENING);
        ASR_CONSTANTS_MAP2.put(STATE_NO_SOUND_TIMES_EXCEED, MLAsrConstants.STATE_NO_SOUND_TIMES_EXCEED);
    }

    public MLAsrConstant() {
    }

    public static JSONObject toErrorJSON(int errorCode) {
        try {
            return new JSONObject().put("errorCode", errorCode).put("errorMessage", ASR_CONSTANTS_MAP2.get(errorCode));
        } catch (JSONException e) {
            Log.e("toErrorJSON get error: ", Objects.requireNonNull(e.getMessage()));
        }
        return new JSONObject();
    }

    public static JSONObject toErrorJSON(String errorCode) {
        try {
            return new JSONObject().put("errorCode", errorCode).put("errorMessage", ASR_CONSTANTS_MAP.get(errorCode));
        } catch (JSONException e) {
            Log.e("toErrorJSON get error: ", Objects.requireNonNull(e.getMessage()));
        }
        return new JSONObject();
    }

}
