/*
 * Copyright 2023. Huawei Technologies Co., Ltd. All rights reserved.
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

package com.huawei.hms.cordova.mllanguage.utils;

import android.util.Log;

import org.json.JSONException;
import org.json.JSONObject;

public class MLError {

    public MLError() {
    }

    public static JSONObject toErrorJSON(final int errorCode, final Throwable t) {
        try {
            return new JSONObject().put("errorCode", errorCode).put("errorMessage", t.getMessage());
        } catch (JSONException e) {
            Log.e("toErrorJSON get error: ", e.getMessage());
        }
        return new JSONObject();
    }

    public static JSONObject toErrorJSON(final int errorCode, final String t) {
        try {
            return new JSONObject().put("errorCode", errorCode).put("errorMessage", t);
        } catch (JSONException e) {
            Log.e("toErrorJSON get error: ", e.getMessage());
        }
        return new JSONObject();
    }
}
