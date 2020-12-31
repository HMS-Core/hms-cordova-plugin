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

package com.huawei.hms.cordova.mlkit.utils;

import android.app.Activity;
import android.util.Log;

import com.huawei.hmf.tasks.OnFailureListener;
import com.huawei.hmf.tasks.OnSuccessListener;
import com.huawei.hms.cordova.mlkit.interfaces.JSONMapper;
import com.huawei.hms.cordova.mlkit.logger.HMSMethod;
import com.huawei.hms.mlsdk.common.MLException;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

public class PlatformUtils {
    private final static String TAG = PlatformUtils.class.getSimpleName();
    private static final int RESOLUTION_REQUEST = 66666;

    public static <T> JSONObject keyValPair(String key, T val) {
        JSONObject map = new JSONObject();
        try {
            map.put(key, val);
        } catch (JSONException e) {
            Log.d(TAG, "JSONException :: " + e.getMessage());
        }
        return map;
    }

    public static <T> OnSuccessListener<T> successListener(HMSMethod method, Activity activity,
        CallbackContext callback) {
        return value -> {
            Log.d(TAG, "successListener()");
            method.sendLoggerEvent(activity);
            callback.success();
        };
    }

    public static <T> OnSuccessListener<T> successListener(HMSMethod method, Activity activity,
        CallbackContext callback, Mapper<T, JSONObject> mapper) {
        return value -> {
            Log.d(TAG, "successListener()");
            if (value == null) {
                Log.e(TAG, "Value is null.");
                callback.error("-1");
                method.sendLoggerEvent(activity, "-1");
                return;
            }
            method.sendLoggerEvent(activity);
            try {
                Log.i(TAG, "" + mapper.map(value));
                callback.success(mapper.map(value));
            } catch (JSONException e) {
                Log.e(TAG, "successListener: error ->", e);
            }
        };
    }

    public static <T> OnSuccessListener<T> successListener(HMSMethod method, Activity activity,
        CallbackContext callback, JSONObject json) {
        return value -> {
            Log.d(TAG, "successListener()");
            method.sendLoggerEvent(activity);
            callback.success(json);
        };
    }

    public static OnFailureListener failureListener(HMSMethod method, Activity activity, CallbackContext callback) {
        return e -> {
            Log.d(TAG, "failureListener() :: " + e.getMessage());

            if (!(e instanceof MLException)) {
                MLException mlException = (MLException) e;
                String error = "error code: " + mlException.getErrCode() + "\n" + "error message: "
                    + mlException.getMessage();
                method.sendLoggerEvent(activity, "-1");
                callback.error(error);
            }
        };
    }

    public static <T, R> Mapper<T, R> mapperWrapper(JSONMapper<T, R> jm, R def) {
        return arg -> {
            if (arg == null) {
                return null;
            }

            try {
                return jm.map(arg);
            } catch (JSONException | NullPointerException e) {
                Log.e(TAG, "wrapper :: JSONException, " + e.getMessage());
                return def;
            }
        };
    }

}
