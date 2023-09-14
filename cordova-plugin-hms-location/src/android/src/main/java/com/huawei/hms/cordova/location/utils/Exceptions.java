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

package com.huawei.hms.cordova.location.utils;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

public class Exceptions {
    public static final int NOT_IN_MOCK_MODE = 10103;

    public static final int NO_MATCHED_CALLBACK = 10104;

    public static final int NO_MATCHED_INTENT = 10108;

    public static final int JSON_ERROR = 10801;

    public static final int NO_PERMISSION_ERROR = 10803;

    public static final int NO_EXISTENT_REQUEST_ID_ERROR = 10806;

    public static final int DUPLICATE_ID_ERROR = 10807;

    public static final int RESOLUTION_FAILED_ERROR = 10808;

    public static final int PENDING_RESOLUTION_ERROR = 10809;

    public static final int NULL_VALUE_ERROR = 10810;

    public static final int INVALID_REQUEST_TYPE = 10811;

    public static final int NO_HW_LOCATION_ERROR = 10812;

    public static final int GEOFENCE_INSUFFICIENT_PERMISSION = 10204;

    static final Map<Integer, String> ERROR_MAP = new HashMap<>();

    static {
        ERROR_MAP.put(INVALID_REQUEST_TYPE, "Request type is invalid.");
        ERROR_MAP.put(NO_MATCHED_INTENT,
            "No matched PendingIntent. Use the same request code that is used when the request is sent.");
        ERROR_MAP.put(NOT_IN_MOCK_MODE,
            "You must call the setMockMode(boolean) method and set the flag to true before calling this method.");
        ERROR_MAP.put(NO_PERMISSION_ERROR, "App does not have location permission.");
        ERROR_MAP.put(NO_MATCHED_CALLBACK,
            "No matched callback. Verify that the correct callback has been passed to the parameter list.");
        ERROR_MAP.put(NO_EXISTENT_REQUEST_ID_ERROR, "RequestId does not in Geofence list.");
        ERROR_MAP.put(DUPLICATE_ID_ERROR, "Callback id already exist.");
        ERROR_MAP.put(NO_HW_LOCATION_ERROR, "HWLocation is null.");
        ERROR_MAP.put(RESOLUTION_FAILED_ERROR, "Resolution failed.");
        ERROR_MAP.put(PENDING_RESOLUTION_ERROR, "Error occurred, a resolution is available and being applied.");
        ERROR_MAP.put(NULL_VALUE_ERROR, "Result from location kit is null.");
        ERROR_MAP.put(JSON_ERROR, "JSON Error.");

        ERROR_MAP.put(GEOFENCE_INSUFFICIENT_PERMISSION,
            "Insufficient permission to perform geofence-related operations.");
    }

    private Exceptions() {
    }

    public static JSONObject getError(int errorCode) throws JSONException {
        JSONObject errorObject = new JSONObject();
        if (ERROR_MAP.containsKey(errorCode)) {
            errorObject.put("errorCode", errorCode).put("message", ERROR_MAP.get(errorCode));
            return errorObject;
        }
        errorObject.put("errorCode", -1).put("message", "No message is found.");
        return errorObject;
    }

    public static JSONObject getError(int errorCode, String errorMsg) throws JSONException {
        JSONObject errorObject = new JSONObject();
        errorObject.put("errorCode", errorCode).put("message", errorMsg);
        return errorObject;
    }
}
