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

package com.huawei.hms.cordova.utils;

import android.util.Log;

import com.huawei.hms.common.ApiException;
import com.huawei.hms.cordova.helpers.Constants;
import com.huawei.hms.cordova.helpers.HMSCordovaException;
import com.huawei.hms.cordova.logger.HMSLogger;
import com.huawei.hms.support.hwid.common.HuaweiIdAuthException;

import org.json.JSONException;
import org.json.JSONObject;

public class ExceptionUtils {
    public static final String TAG = ExceptionUtils.class.getSimpleName();
    private HMSLogger logger;

    public ExceptionUtils(HMSLogger logger) {
        this.logger = logger;
    }

    public JSONObject logAndGetErrorJSON(String action, Exception e, String eventType) {
        JSONObject error = new JSONObject();
        try {
            error = getErrorMessage(e);
            sendRequiredEvent(action, error.getString("errorCode"), eventType);
        } catch (Exception ex) {
            Log.i(TAG, ex.getMessage());
        }
        return error;
    }

    public void sendRequiredEvent(String action, String errorCode, String eventType) {
        try {
            if (eventType.equals("single")) {
                logger.sendSingleEvent(action, errorCode);
            } else {
                logger.sendPeriodicEvent(action, errorCode);
            }
        } catch (Exception e) {
            Log.i(TAG, e.getMessage());
        }

    }

    public JSONObject getErrorMessage(Exception e) {
        Log.i(TAG, "getErrorMessage start");

        JSONObject error = new JSONObject();

        try {
            if (e instanceof ApiException) {
                error.put("errorCode", ((ApiException) e).getStatusCode());
                error.put("errorMessage", e.getMessage());
            } else if (e instanceof HuaweiIdAuthException) {
                error.put("errorCode", Constants.ERR_HUAWEI_AUTH);
                error.put("errorMessage", e.getMessage());
            } else if (e instanceof HMSCordovaException) {
                error.put("errorCode", ((HMSCordovaException) e).getErrorCode());
                error.put("errorMessage", e.getMessage());
            } else {
                error.put("errorCode", Constants.ERR_UNKNOWN);
                error.put("errorMessage", e.getMessage());
            }
        } catch (JSONException ex) {
            Log.d(TAG, ex.getMessage());
        }

        return error;
    }
}
