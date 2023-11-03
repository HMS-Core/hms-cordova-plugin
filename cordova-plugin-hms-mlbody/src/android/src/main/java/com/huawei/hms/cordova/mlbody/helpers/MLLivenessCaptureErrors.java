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

package com.huawei.hms.cordova.mlbody.helpers;

import android.util.Log;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

public class MLLivenessCaptureErrors {
    public static final int CAMERA_NO_PERMISSION = 11401;

    public static final int CAMERA_START_FAILED = 11402;

    public static final int USER_CANCEL = 11403;

    public static final int DETECT_FACE_TIME_OUT = 11404;

    static final Map<Integer, String> ERROR_MSGS = new HashMap<>();

    static {
        ERROR_MSGS.put(CAMERA_NO_PERMISSION, "The camera permission is not obtained.");
        ERROR_MSGS.put(CAMERA_START_FAILED, "The camera fails to be started.");
        ERROR_MSGS.put(DETECT_FACE_TIME_OUT, "The face detection module times out.");
        ERROR_MSGS.put(USER_CANCEL, "The operation is canceled by the user.");
    }

    public MLLivenessCaptureErrors() {
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
