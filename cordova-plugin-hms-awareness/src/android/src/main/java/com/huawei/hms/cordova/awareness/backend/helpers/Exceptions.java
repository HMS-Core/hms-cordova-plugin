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


package com.huawei.hms.cordova.awareness.backend.helpers;

import android.util.Log;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

public class Exceptions {
    public static final int ERR_NULL_VALUE = 810;
    public static final int ERR_NO_LOW_API_LEVEL_24 = 811;
    public static final int ERR_NO_LOW_API_LEVEL_29 = 812;
    public static final int ERR_NULL_ARRAY = 813;
    public static final int ERR_NO_EXISTENT_REQUEST_ID = 814;
    public static final int ERR_NO_BEACON_MATCHES = 815;
    public static final int ERR_ALREADY_HAVE_PERMISSIONS = 816;

    static final Map<Integer, String> ERROR_MSGS = new HashMap<>();

    static {
        ERROR_MSGS.put(ERR_NULL_VALUE, "Result from awareness kit is null");
        ERROR_MSGS.put(ERR_NO_LOW_API_LEVEL_24, "The location capture function is available only on devices with API level 24 or later");
        ERROR_MSGS.put(ERR_NO_LOW_API_LEVEL_29, "The get dark status function is available only on devices with API level 29 or later");
        ERROR_MSGS.put(ERR_NULL_ARRAY, "The array length must be at least 1");
        ERROR_MSGS.put(ERR_NO_EXISTENT_REQUEST_ID, "RequestId does not in Status list");
        ERROR_MSGS.put(ERR_NO_BEACON_MATCHES, "No beacon matches filters nearby");
        ERROR_MSGS.put(ERR_ALREADY_HAVE_PERMISSIONS, "already have the permissions");
    }

    public Exceptions() {
    }

    public static JSONObject toErrorJSON(int errorCode) {
        try {
            return new JSONObject()
                    .put("errorCode", errorCode)
                    .put("errorMessage", ERROR_MSGS.get(errorCode));
        } catch (JSONException e) {
            Log.e("toErrorJSON get error: ", Objects.requireNonNull(e.getMessage()));
        }
        return new JSONObject();
    }
}
