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

public class MLTtsErrorConstants {
    public static final int ERR_ILLEGAL_PARAMETER = 11301;

    public static final int ERR_NET_CONNECT_FAILED = 11302;

    public static final int ERR_INSUFFICIENT_BALANCE = 11303;

    public static final int ERR_SPEECH_SYNTHESIS_FAILED = 11304;

    public static final int ERR_AUDIO_PLAYER_FAILED = 11305;

    public static final int ERR_AUTHORIZE_FAILED = 11306;

    public static final int ERR_AUTHORIZE_TOKEN_INVALIDE = 11307;

    public static final int ERR_INTERNAL = 11398;

    public static final int ERR_UNKNOWN = 11399;

    static final Map<Integer, String> TTS_ERROR_MSGS = new HashMap<>();

    static {
        TTS_ERROR_MSGS.put(ERR_ILLEGAL_PARAMETER, "Invalid parameter");
        TTS_ERROR_MSGS.put(ERR_NET_CONNECT_FAILED, "Abnormal network connection");
        TTS_ERROR_MSGS.put(ERR_INSUFFICIENT_BALANCE, "Insufficient balance");
        TTS_ERROR_MSGS.put(ERR_SPEECH_SYNTHESIS_FAILED, "Audio synthesis failed");
        TTS_ERROR_MSGS.put(ERR_AUDIO_PLAYER_FAILED, "Audio playback error");
        TTS_ERROR_MSGS.put(ERR_AUTHORIZE_FAILED, "Authentication failed");
        TTS_ERROR_MSGS.put(ERR_AUTHORIZE_TOKEN_INVALIDE, "Expired or invalid token");
        TTS_ERROR_MSGS.put(ERR_INTERNAL, "Internal error");
        TTS_ERROR_MSGS.put(ERR_UNKNOWN, "Unknown error");
    }

    public MLTtsErrorConstants() {
    }

    public static JSONObject toErrorJSON(int errorCode) {
        try {
            return new JSONObject().put("errorCode", errorCode).put("errorMessage", TTS_ERROR_MSGS.get(errorCode));
        } catch (JSONException e) {
            Log.e("toErrorJSON get error: ", Objects.requireNonNull(e.getMessage()));
        }
        return new JSONObject();
    }

}
