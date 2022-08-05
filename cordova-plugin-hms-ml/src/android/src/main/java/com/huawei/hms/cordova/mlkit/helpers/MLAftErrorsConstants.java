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

public class MLAftErrorsConstants {
    public static final int ERR_AUDIO_FILE_NOTSUPPORTED = 11101;

    public static final int ERR_LANGUAGE_CODE_NOTSUPPORTED = 11102;

    public static final int ERR_AUDIO_FILE_SIZE_OVERFLOW = 11103;

    public static final int ERR_AUDIO_LENGTH_OVERFLOW = 11104;

    public static final int ERR_FILE_NOT_FOUND = 11105;

    public static final int ERR_ILLEGAL_PARAMETER = 11106;

    public static final int ERR_ENGINE_BUSY = 11107;

    public static final int ERR_NETCONNECT_FAILED = 11108;

    public static final int ERR_RESULT_WHEN_UPLOADING = 11109;

    public static final int ERR_TASK_NOT_EXISTED = 11110;

    public static final int ERR_AUDIO_TRANSCRIPT_FAILED = 11111;

    public static final int ERR_AUDIO_INIT_FAILED = 11112;

    public static final int ERR_AUDIO_UPLOAD_FAILED = 11113;

    public static final int ERR_TASK_ALREADY_INPROGRESS = 11114;

    public static final int ERR_NO_ENOUGH_STORAGE = 11115;

    public static final int ERR_AUTHORIZE_FAILED = 11119;

    public static final int ERR_SERVICE_CREDIT = 11122;

    public static final int ERR_SERVICE_UNSUBSCRIBED = 11123;

    public static final int ERR_SERVICE_FREE_USED_UP = 11124;

    public static final int ERR_INTERNAL = 11198;

    public static final int ERR_UNKNOWN = 11199;

    static final Map<Integer, String> AFT_ERROR_MSGS = new HashMap<>();

    static {
        AFT_ERROR_MSGS.put(ERR_AUDIO_FILE_NOTSUPPORTED, "The audio file is not supported.");
        AFT_ERROR_MSGS.put(ERR_LANGUAGE_CODE_NOTSUPPORTED, "The language is not supported.");
        AFT_ERROR_MSGS.put(ERR_AUDIO_FILE_SIZE_OVERFLOW, "The audio file size is too large");
        AFT_ERROR_MSGS.put(ERR_AUDIO_LENGTH_OVERFLOW, "The audio duration is too long");
        AFT_ERROR_MSGS.put(ERR_FILE_NOT_FOUND, "The audio file does not exist");
        AFT_ERROR_MSGS.put(ERR_ILLEGAL_PARAMETER, "Invalid parameter.");
        AFT_ERROR_MSGS.put(ERR_ENGINE_BUSY, "The transcription engine is busy.");
        AFT_ERROR_MSGS.put(ERR_NETCONNECT_FAILED, "Network connection exception");
        AFT_ERROR_MSGS.put(ERR_RESULT_WHEN_UPLOADING, "The transcription result cannot be obtained during upload");
        AFT_ERROR_MSGS.put(ERR_TASK_NOT_EXISTED, "The transcription task does not exist.");
        AFT_ERROR_MSGS.put(ERR_AUDIO_TRANSCRIPT_FAILED, "File transcription failed");
        AFT_ERROR_MSGS.put(ERR_AUDIO_INIT_FAILED, "Task initialization failed.");
        AFT_ERROR_MSGS.put(ERR_AUDIO_UPLOAD_FAILED, "Audio file upload failed.");
        AFT_ERROR_MSGS.put(ERR_TASK_ALREADY_INPROGRESS, "The task is being executed and cannot be submitted");
        AFT_ERROR_MSGS.put(ERR_NO_ENOUGH_STORAGE, "Insufficient device storage space.");
        AFT_ERROR_MSGS.put(ERR_SERVICE_CREDIT, "A subscribed service is in arrears.");
        AFT_ERROR_MSGS.put(ERR_SERVICE_UNSUBSCRIBED, "You have not subscribed to the service.");
        AFT_ERROR_MSGS.put(ERR_SERVICE_FREE_USED_UP, "Free quota of a service is used up.");
        AFT_ERROR_MSGS.put(ERR_AUTHORIZE_FAILED, "Authentication failed.");
        AFT_ERROR_MSGS.put(ERR_INTERNAL, "Internal error.");
        AFT_ERROR_MSGS.put(ERR_UNKNOWN, "Unknown error.");

    }

    public MLAftErrorsConstants() {
    }

    public static JSONObject toErrorJSON(int errorCode) {
        try {
            return new JSONObject().put("errorCode", errorCode).put("errorMessage", AFT_ERROR_MSGS.get(errorCode));
        } catch (JSONException e) {
            Log.e("toErrorJSON get error: ", Objects.requireNonNull(e.getMessage()));
        }
        return new JSONObject();
    }
}
