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

package com.huawei.hms.cordova.health.utils;

import android.util.Log;

import com.huawei.hms.common.ApiException;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.Objects;

public class Error {
    public static final String TAG = Error.class.getSimpleName();

    public static JSONObject getErrorMessage(Exception e) {
        Log.i(TAG, "getErrorMessage start");

        JSONObject error = new JSONObject();

        try {
            if (e instanceof ApiException) {
                error.put("errorCode", ((ApiException) e).getStatusCode());
            } else {
                error.put("errorCode", "500");
            }
            error.put("errorMessage", e.getMessage());
        } catch (JSONException ex) {
            Log.d(TAG, Objects.requireNonNull(ex.getMessage()));
        }

        return error;
    }
}
