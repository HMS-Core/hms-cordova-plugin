/*
    Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

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

public class CordovaErrors {

    public static final int UNKNOWN = -1;
    public static final int SUCCESS = 0;
    public static final int DISCARDED = 1;
    public static final int INNER = 2;
    public static final int INACTIVE = 3;
    public static final int NOT_SUPPORTED = 4;
    public static final int ILLEGAL_PARAMETER = 5;
    public static final int OVERDUE = 6;
    public static final int NO_FOUND = 7;
    public static final int DUPLICATE_FOUND = 8;
    public static final int NO_PERMISSION = 9;
    public static final int INSUFFICIENT_RESOURCE = 10;
    public static final int ANALYSIS_FAILURE = 11;
    public static final int INTERRUPTED = 12;
    public static final int EXCEED_RANGE = 13;
    public static final int DATA_MISSING = 14;
    public static final int AUTHENTICATION_REQUIRED = 15;
    public static final int TFLITE_NOT_COMPATIBLE = 16;
    public static final int INSUFFICIENT_SPACE = 17;
    public static final int HASH_MISS = 18;
    public static final int TOKEN_INVALID = 19;
    public static final int SERVICE_FAILURE = 20;
    public static final int ANALYSIS_NULL = 21;
    static final Map<Integer, String> ERROR_MSGS = new HashMap<>();

    static {

        ERROR_MSGS.put(UNKNOWN, "UNKNOWN Error");
        ERROR_MSGS.put(SUCCESS, "Succesed");
        ERROR_MSGS.put(DISCARDED, "Operation canceled.");
        ERROR_MSGS.put(INNER, "Internal error.");
        ERROR_MSGS.put(INACTIVE, "Service unavailable.");
        ERROR_MSGS.put(NOT_SUPPORTED, "Operation not supported.");
        ERROR_MSGS.put(ILLEGAL_PARAMETER, "Incorrect parameter. This exception is irrelevant to services.");
        ERROR_MSGS.put(OVERDUE, "Operation timed out.");
        ERROR_MSGS.put(NO_FOUND, "Requested resource not found or not exist.");
        ERROR_MSGS.put(DUPLICATE_FOUND, "Resource created repeatedly.");
        ERROR_MSGS.put(NO_PERMISSION, "No operation permission.");
        ERROR_MSGS.put(INSUFFICIENT_RESOURCE,
            "Resources exhausted. The system resources or resources of the current user may be insufficient.");
        ERROR_MSGS.put(ANALYSIS_FAILURE, "Operation failed because the system was not ready.");
        ERROR_MSGS.put(INTERRUPTED, "Operation interrupted, possibly due to concurrent operations.");
        ERROR_MSGS.put(EXCEED_RANGE, "Out-of-bounds access.");
        ERROR_MSGS.put(DATA_MISSING, "Unrecoverable data damage or loss.");
        ERROR_MSGS.put(AUTHENTICATION_REQUIRED, "Identity authentication required.");
        ERROR_MSGS.put(TFLITE_NOT_COMPATIBLE, "Downloaded model incompatible with the running model.");
        ERROR_MSGS.put(INSUFFICIENT_SPACE, "Insufficient disk space.");
        ERROR_MSGS.put(HASH_MISS, "Unexpected hash value of the downloaded model.");
        ERROR_MSGS.put(TOKEN_INVALID, "Invalid token.");
        ERROR_MSGS.put(SERVICE_FAILURE, "Service failed.");
        ERROR_MSGS.put(ANALYSIS_NULL, "Null analyser");
    }

    public CordovaErrors() {
    }

    public static JSONObject toErrorJSON(int errorCode) {
        try {
            return new JSONObject().put("errorCode", errorCode).put("errorMessage", ERROR_MSGS.get(errorCode));
        } catch (JSONException e) {
            Log.e("toErrorJSON get error: ", Objects.requireNonNull(e.getMessage()));
        }
        return new JSONObject();
    }
}


