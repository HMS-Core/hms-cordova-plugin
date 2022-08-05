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

import com.huawei.hms.mlsdk.tts.MLTtsAudioFragment;
import com.huawei.hms.mlsdk.tts.MLTtsConstants;
import com.huawei.hms.mlsdk.tts.MLTtsEngine;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

public class MLTtsConstant {
    public static final String TTS_ON_AUDIO_AVAILABLE = "ttsOnAudioAvailable";

    public static final String TTS_ON_EVENT = "ttsOnEvent";

    public static final String TTS_ON_RANGE_START = "ttsOnRangeStart";

    public static final String TTS_ON_WARN = "ttsOnWarn";

    public static final String TTS_ON_ERROR = "ttsOnError";

    public static final int EVENT_PLAY_START = 1;

    public static final int EVENT_PLAY_RESUME = 2;

    public static final int EVENT_PLAY_PAUSE = 3;

    public static final int EVENT_PLAY_STOP = 4;

    public static final int EVENT_SYNTHESIS_START = 5;

    public static final int EVENT_SYNTHESIS_END = 6;

    public static final int EVENT_SYNTHESIS_COMPLETE = 7;

    public static final int LANGUAGE_AVAILABLE = 0;

    public static final int LANGUAGE_NOT_SUPPORT = 1;

    public static final int LANGUAGE_UPDATING = 2;

    public static final int FORMAT_PCM_8BIT = 1;

    public static final int FORMAT_PCM_16BIT = 2;

    public static final int SAMPLE_RATE_16K = 16000;

    public static final int CHANNEL_OUT_MONO = 4;

    public static final int QUEUE_APPEND = 0;

    public static final int QUEUE_FLUSH = 1;

    public static final int EXTERNAL_PLAYBACK = 2;

    public static final int OPEN_STREAM = 4;

    public static final String TTS_ONLINE_MODE = "online";

    public static final String TTS_OFFLINE_MODE = "offline";

    public static final String EVENT_PLAY_STOP_INTERRUPTED = "interrupted";

    public static final String EVENT_SYNTHESIS_INTERRUPTED = "interrupted";

    public static final String TTS_SPEAKER_FEMALE_ZH = "Female-zh";

    public static final String TTS_SPEAKER_FEMALE_EN = "Female-en";

    public static final String TTS_SPEAKER_MALE_ZH = "Male-zh";

    public static final String TTS_SPEAKER_MALE_EN = "Male-en";

    public static final String TTS_SPEAKER_FEMALE_ZH_2 = "zh-Hans-st-3";

    public static final String TTS_SPEAKER_MALE_ZH_2 = "zh-Hans-st-4";

    public static final String TTS_SPEAKER_MALE_EN_2 = "en-US-st-4";

    public static final String TTS_SPEAKER_FEMALE_FR = "fr-FR-st-1";

    public static final String TTS_SPEAKER_FEMALE_ES = "es-ES-st-1";

    public static final String TTS_SPEAKER_FEMALE_DE = "de-DE-st-1";

    public static final String TTS_SPEAKER_FEMALE_IT = "it-IT-st-1";

    public static final String TTS_SPEAKER_FEMALE_AR = "ar-AR-st-1";

    public static final String TTS_SPEAKER_FEMALE_RU = "ru-RU-st-1";

    public static final String TTS_SPEAKER_FEMALE_TH = "th-TH-st-1";

    public static final String TTS_SPEAKER_FEMALE_PL = "pl-PL-st-1";

    public static final String TTS_SPEAKER_FEMALE_MS = "ms-MS-st-1";

    public static final String TTS_SPEAKER_FEMALE_TR = "tr-TR-st-1";

    public static final String TTS_ZH_HANS = "zh-Hans";

    public static final String TTS_EN_US = "en-US";

    public static final String TTS_LAN_FR_FR = "fr-FR";

    public static final String TTS_LAN_ES_ES = "es-ES";

    public static final String TTS_LAN_DE_DE = "de-DE";

    public static final String TTS_LAN_IT_IT = "it-IT";

    public static final String TTS_LAN_AR_AR = "ar-AR";

    public static final String TTS_LAN_RU_RU = "ru-RU";

    public static final String TTS_LAN_TH_TH = "th-TH";

    public static final String TTS_LAN_PL_PL = "pl-PL";

    public static final String TTS_LAN_MS_MS = "ms-MS";

    public static final String TTS_LAN_TR_TR = "tr-TR";

    public static final String TTS_SPEAKER_OFFLINE_ZH_HANS_FEMALE_EAGLE = "zh-Hans-st-eagle-1";

    public static final String TTS_SPEAKER_OFFLINE_ZH_HANS_MALE_EAGLE = "zh-Hans-st-eagle-2";

    public static final String TTS_SPEAKER_OFFLINE_EN_US_FEMALE_EAGLE = "en-US-st-eagle-1";

    public static final String TTS_SPEAKER_OFFLINE_EN_US_MALE_EAGLE = "en-US-st-eagle-2";

    public static final String TTS_SPEAKER_OFFLINE_EN_US_FEMALE_BEE = "en-US-st-bee-1";

    public static final String TTS_SPEAKER_OFFLINE_FR_FR_FEMALE_BEE = "fr-FR-st-bee-1";

    public static final String TTS_SPEAKER_OFFLINE_ES_ES_FEMALE_BEE = "es-ES-st-bee-1";

    public static final String TTS_SPEAKER_OFFLINE_DE_DE_FEMALE_BEE = "de-DE-st-bee-1";

    public static final String TTS_SPEAKER_OFFLINE_IT_IT_FEMALE_BEE = "it-IT-st-bee-1";

    static final Map<String, String> TTS_CONSTANTS_MAP = new HashMap<>();

    static final Map<Integer, Integer> TTS_CONSTANTS_MAP2 = new HashMap<>();

    static {
        TTS_CONSTANTS_MAP.put(TTS_OFFLINE_MODE, MLTtsConstants.TTS_OFFLINE_MODE);
        TTS_CONSTANTS_MAP.put(TTS_ONLINE_MODE, MLTtsConstants.TTS_ONLINE_MODE);
        TTS_CONSTANTS_MAP.put(EVENT_SYNTHESIS_INTERRUPTED, MLTtsConstants.EVENT_SYNTHESIS_INTERRUPTED);
        TTS_CONSTANTS_MAP.put(TTS_EN_US, MLTtsConstants.TTS_EN_US);
        TTS_CONSTANTS_MAP.put(TTS_LAN_DE_DE, MLTtsConstants.TTS_LAN_DE_DE);
        TTS_CONSTANTS_MAP.put(TTS_LAN_ES_ES, MLTtsConstants.TTS_LAN_ES_ES);
        TTS_CONSTANTS_MAP.put(TTS_LAN_FR_FR, MLTtsConstants.TTS_LAN_FR_FR);
        TTS_CONSTANTS_MAP.put(TTS_LAN_IT_IT, MLTtsConstants.TTS_LAN_IT_IT);
        TTS_CONSTANTS_MAP.put(TTS_LAN_TH_TH, MLTtsConstants.TTS_LAN_TH_TH);
        TTS_CONSTANTS_MAP.put(TTS_LAN_MS_MS, MLTtsConstants.TTS_LAN_MS_MS);
        TTS_CONSTANTS_MAP.put(TTS_LAN_RU_RU, MLTtsConstants.TTS_LAN_RU_RU);
        TTS_CONSTANTS_MAP.put(TTS_LAN_PL_PL, MLTtsConstants.TTS_LAN_PL_PL);
        TTS_CONSTANTS_MAP.put(TTS_LAN_AR_AR, MLTtsConstants.TTS_LAN_AR_AR);
        TTS_CONSTANTS_MAP.put(TTS_LAN_TR_TR, MLTtsConstants.TTS_LAN_TR_TR);
        TTS_CONSTANTS_MAP.put(TTS_SPEAKER_FEMALE_EN, MLTtsConstants.TTS_SPEAKER_FEMALE_EN);
        TTS_CONSTANTS_MAP.put(TTS_SPEAKER_FEMALE_ZH, MLTtsConstants.TTS_SPEAKER_FEMALE_ZH);
        TTS_CONSTANTS_MAP.put(TTS_SPEAKER_FEMALE_ZH_2, MLTtsConstants.TTS_SPEAKER_FEMALE_ZH_2);
        TTS_CONSTANTS_MAP.put(TTS_SPEAKER_MALE_EN, MLTtsConstants.TTS_SPEAKER_MALE_EN);
        TTS_CONSTANTS_MAP.put(TTS_SPEAKER_MALE_EN_2, MLTtsConstants.TTS_SPEAKER_MALE_EN_2);
        TTS_CONSTANTS_MAP.put(TTS_SPEAKER_MALE_ZH, MLTtsConstants.TTS_SPEAKER_MALE_ZH);
        TTS_CONSTANTS_MAP.put(TTS_SPEAKER_MALE_ZH_2, MLTtsConstants.TTS_SPEAKER_MALE_ZH_2);
        TTS_CONSTANTS_MAP.put(TTS_ZH_HANS, MLTtsConstants.TTS_ZH_HANS);
        TTS_CONSTANTS_MAP.put(TTS_SPEAKER_FEMALE_DE, MLTtsConstants.TTS_SPEAKER_FEMALE_DE);
        TTS_CONSTANTS_MAP.put(TTS_SPEAKER_FEMALE_ES, MLTtsConstants.TTS_SPEAKER_FEMALE_ES);
        TTS_CONSTANTS_MAP.put(TTS_SPEAKER_FEMALE_FR, MLTtsConstants.TTS_SPEAKER_FEMALE_FR);
        TTS_CONSTANTS_MAP.put(TTS_SPEAKER_FEMALE_IT, MLTtsConstants.TTS_SPEAKER_FEMALE_IT);
        TTS_CONSTANTS_MAP.put(TTS_SPEAKER_FEMALE_TH, MLTtsConstants.TTS_SPEAKER_FEMALE_TH);
        TTS_CONSTANTS_MAP.put(TTS_SPEAKER_FEMALE_MS, MLTtsConstants.TTS_SPEAKER_FEMALE_MS);
        TTS_CONSTANTS_MAP.put(TTS_SPEAKER_FEMALE_RU, MLTtsConstants.TTS_SPEAKER_FEMALE_RU);
        TTS_CONSTANTS_MAP.put(TTS_SPEAKER_FEMALE_PL, MLTtsConstants.TTS_SPEAKER_FEMALE_PL);
        TTS_CONSTANTS_MAP.put(TTS_SPEAKER_FEMALE_AR, MLTtsConstants.TTS_SPEAKER_FEMALE_AR);
        TTS_CONSTANTS_MAP.put(TTS_SPEAKER_FEMALE_TR, MLTtsConstants.TTS_SPEAKER_FEMALE_TR);
        TTS_CONSTANTS_MAP.put(TTS_SPEAKER_OFFLINE_DE_DE_FEMALE_BEE,
            MLTtsConstants.TTS_SPEAKER_OFFLINE_DE_DE_FEMALE_BEE);
        TTS_CONSTANTS_MAP.put(TTS_SPEAKER_OFFLINE_EN_US_FEMALE_BEE,
            MLTtsConstants.TTS_SPEAKER_OFFLINE_EN_US_FEMALE_BEE);
        TTS_CONSTANTS_MAP.put(TTS_SPEAKER_OFFLINE_ES_ES_FEMALE_BEE,
            MLTtsConstants.TTS_SPEAKER_OFFLINE_ES_ES_FEMALE_BEE);
        TTS_CONSTANTS_MAP.put(TTS_SPEAKER_OFFLINE_FR_FR_FEMALE_BEE,
            MLTtsConstants.TTS_SPEAKER_OFFLINE_FR_FR_FEMALE_BEE);
        TTS_CONSTANTS_MAP.put(TTS_SPEAKER_OFFLINE_IT_IT_FEMALE_BEE,
            MLTtsConstants.TTS_SPEAKER_OFFLINE_IT_IT_FEMALE_BEE);
        TTS_CONSTANTS_MAP.put(TTS_SPEAKER_OFFLINE_ZH_HANS_MALE_EAGLE,
            MLTtsConstants.TTS_SPEAKER_OFFLINE_ZH_HANS_MALE_EAGLE);
        TTS_CONSTANTS_MAP.put(TTS_SPEAKER_OFFLINE_ZH_HANS_FEMALE_EAGLE,
            MLTtsConstants.TTS_SPEAKER_OFFLINE_ZH_HANS_FEMALE_EAGLE);
        TTS_CONSTANTS_MAP.put(TTS_SPEAKER_OFFLINE_EN_US_MALE_EAGLE,
            MLTtsConstants.TTS_SPEAKER_OFFLINE_EN_US_MALE_EAGLE);
        TTS_CONSTANTS_MAP.put(TTS_SPEAKER_OFFLINE_EN_US_FEMALE_EAGLE,
            MLTtsConstants.TTS_SPEAKER_OFFLINE_EN_US_FEMALE_EAGLE);
        TTS_CONSTANTS_MAP.put(EVENT_PLAY_STOP_INTERRUPTED, MLTtsConstants.EVENT_PLAY_STOP_INTERRUPTED);
        TTS_CONSTANTS_MAP.put(TTS_ON_AUDIO_AVAILABLE, TTS_ON_AUDIO_AVAILABLE);
        TTS_CONSTANTS_MAP.put(TTS_ON_EVENT, TTS_ON_EVENT);
        TTS_CONSTANTS_MAP.put(TTS_ON_RANGE_START, TTS_ON_RANGE_START);
        TTS_CONSTANTS_MAP.put(TTS_ON_WARN, TTS_ON_WARN);
        TTS_CONSTANTS_MAP.put(TTS_ON_ERROR, TTS_ON_ERROR);
    }

    static {
        TTS_CONSTANTS_MAP2.put(EVENT_PLAY_START, MLTtsConstants.EVENT_PLAY_PAUSE);
        TTS_CONSTANTS_MAP2.put(LANGUAGE_AVAILABLE, MLTtsConstants.LANGUAGE_AVAILABLE);
        TTS_CONSTANTS_MAP2.put(LANGUAGE_NOT_SUPPORT, MLTtsConstants.LANGUAGE_NOT_SUPPORT);
        TTS_CONSTANTS_MAP2.put(EVENT_PLAY_PAUSE, MLTtsConstants.EVENT_PLAY_PAUSE);
        TTS_CONSTANTS_MAP2.put(EVENT_PLAY_RESUME, MLTtsConstants.EVENT_PLAY_RESUME);
        TTS_CONSTANTS_MAP2.put(EVENT_PLAY_START, MLTtsConstants.EVENT_PLAY_START);
        TTS_CONSTANTS_MAP2.put(EVENT_PLAY_STOP, MLTtsConstants.EVENT_PLAY_STOP);
        TTS_CONSTANTS_MAP2.put(LANGUAGE_UPDATING, MLTtsConstants.LANGUAGE_UPDATING);
        TTS_CONSTANTS_MAP2.put(CHANNEL_OUT_MONO, MLTtsAudioFragment.CHANNEL_OUT_MONO);
        TTS_CONSTANTS_MAP2.put(FORMAT_PCM_8BIT, MLTtsAudioFragment.FORMAT_PCM_8BIT);
        TTS_CONSTANTS_MAP2.put(FORMAT_PCM_16BIT, MLTtsAudioFragment.FORMAT_PCM_16BIT);
        TTS_CONSTANTS_MAP2.put(SAMPLE_RATE_16K, MLTtsAudioFragment.SAMPLE_RATE_16K);
        TTS_CONSTANTS_MAP2.put(EVENT_SYNTHESIS_START, MLTtsConstants.EVENT_SYNTHESIS_START);
        TTS_CONSTANTS_MAP2.put(EVENT_SYNTHESIS_COMPLETE, MLTtsConstants.EVENT_SYNTHESIS_COMPLETE);
        TTS_CONSTANTS_MAP2.put(EVENT_SYNTHESIS_END, MLTtsConstants.EVENT_SYNTHESIS_END);
        TTS_CONSTANTS_MAP2.put(EXTERNAL_PLAYBACK, MLTtsEngine.EXTERNAL_PLAYBACK);
        TTS_CONSTANTS_MAP2.put(OPEN_STREAM, MLTtsEngine.OPEN_STREAM);
        TTS_CONSTANTS_MAP2.put(QUEUE_APPEND, MLTtsEngine.QUEUE_APPEND);
        TTS_CONSTANTS_MAP2.put(QUEUE_FLUSH, MLTtsEngine.QUEUE_FLUSH);
    }

    public MLTtsConstant() {
    }

    public static JSONObject toErrorJSON(int errorCode) {
        try {
            return new JSONObject().put("errorCode", errorCode).put("errorMessage", TTS_CONSTANTS_MAP2.get(errorCode));
        } catch (JSONException e) {
            Log.e("toErrorJSON get error: ", Objects.requireNonNull(e.getMessage()));
        }
        return new JSONObject();
    }

    public static JSONObject toErrorJSON(String errorCode) {
        try {
            return new JSONObject().put("errorCode", errorCode).put("errorMessage", TTS_CONSTANTS_MAP.get(errorCode));
        } catch (JSONException e) {
            Log.e("toErrorJSON get error: ", Objects.requireNonNull(e.getMessage()));
        }
        return new JSONObject();
    }
}
