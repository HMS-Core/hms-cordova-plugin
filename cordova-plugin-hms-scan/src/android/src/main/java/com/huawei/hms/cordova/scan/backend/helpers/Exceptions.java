/*
    Copyright 2020-2021. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.scan.backend.helpers;

import android.util.Log;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

public class Exceptions {
    public static final int ERR_NO_PERMISSION = 500;
    public static final int ERR_NO_CAMERA_PERMISSION = 501;
    public static final int ERR_NO_READ_EXTERNAL_PERMISSION = 502;
    public static final int ERR_NO_RESULT = 503;
    public static final int ANALYSER_IS_NOT_AVAILABLE = 504;
    public static final int ERR_WRONG_IMAGEURI_PARAMETER = 505;


    static final Map<Integer, String> ERROR_MSGS = new HashMap<>();

    static {
        ERROR_MSGS.put(ERR_NO_PERMISSION, "API does not have both camera and read external storage permissions");
        ERROR_MSGS.put(ERR_NO_CAMERA_PERMISSION, "API does not have camera permission");
        ERROR_MSGS.put(ERR_NO_READ_EXTERNAL_PERMISSION, "API does not have read external storage permission");
        ERROR_MSGS.put(ERR_NO_RESULT, "Result from Scan kit is null");
        ERROR_MSGS.put(ANALYSER_IS_NOT_AVAILABLE, "Analyser is not available.");
        ERROR_MSGS.put(ERR_WRONG_IMAGEURI_PARAMETER, "The imageUri parameter is empty or incorrect.");
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
