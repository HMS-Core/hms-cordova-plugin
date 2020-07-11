/*
Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

package com.huawei.hms.cordova.map.utils;

import android.util.Log;

import org.json.JSONObject;

public enum ErrorCodes {
    MAP_WITH_ID_ALREADY_EXISTS(3000, "Trying to init an already existing map."),
    EVENT_DOES_NOT_EXIST(30002, "Given event does not exist."),
    ACTION_DOES_NOT_EXIST(30003, "Given action does not exist."),
    GENERIC_ERROR(3100, "A generic error.");

    public static final String TAG = ErrorCodes.class.getSimpleName();

    public final int id;
    public final String msg;
    ErrorCodes(int id, String msg) {
        this.id = id;
        this.msg = msg;
    }

    public JSONObject asJSON() {
        return CordovaUtils.err(this.id, this.msg);
    }

    public static JSONObject genericError(String msg) {
        Log.e(TAG, "genericError :: err " + msg);
        return CordovaUtils.err(ErrorCodes.GENERIC_ERROR.id, msg);
    }

    public static <T extends Exception> JSONObject genericError(T err) {
        Log.e(TAG, "genericError :: err " + err.getMessage());
        return CordovaUtils.err(ErrorCodes.GENERIC_ERROR.id, err.getMessage());
    }
}
