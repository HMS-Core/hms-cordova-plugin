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

package com.huawei.hms.cordova.site.basef.handler;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONObject;

import static org.apache.cordova.PluginResult.Status.OK;

public final class Promise {

    private final CallbackContext callbackContext;
    private final String methodName;
    private final boolean isLoggerRunning;
    private final HMSLogger hmsLogger;

    public Promise(final CallbackContext callbackContext, String method, final HMSLogger logger, boolean isLoggerRunning) {
        this.callbackContext = callbackContext;
        this.methodName = method;
        this.isLoggerRunning = isLoggerRunning;
        this.hmsLogger = logger;
    }

    public void success() {
        callbackContext.success();
        sendSuccessLog();
    }

    public void success(int message) {
        callbackContext.success(message);
        sendSuccessLog();
    }

    public void success(byte[] message) {
        callbackContext.success(message);
        sendSuccessLog();
    }

    public void success(String message) {
        callbackContext.success(message);
        sendSuccessLog();
    }

    public void success(JSONArray message) {
        callbackContext.success(message);
        sendSuccessLog();
    }

    public void success(JSONObject message) {
        callbackContext.success(message);
        sendSuccessLog();
    }

    public void success(boolean message) {
        callbackContext.sendPluginResult(new PluginResult(OK, message));
        sendSuccessLog();
    }

    public void success(float message) {
        callbackContext.sendPluginResult(new PluginResult(OK, message));
        sendSuccessLog();
    }

    public void error(int message) {
        callbackContext.error(message);
        sendErrorLog("" + message);
    }

    public void error(CorError corError) {
        callbackContext.error(corError.toJson());
        sendErrorLog("" + corError.getCode());
    }

    public void error(String message) {
        callbackContext.error(message);
        sendErrorLog(message);
    }

    public void error(JSONObject message) {
        callbackContext.error(message);
        sendErrorLog(message.toString());
    }

    public void sendPluginResult(PluginResult pluginResult) {
        callbackContext.sendPluginResult(pluginResult);
    }

    private void sendSuccessLog() {
        if(isLoggerRunning)
            hmsLogger.sendSingleEvent(methodName);
    }

    private void sendErrorLog(String errorCode) {
        if(isLoggerRunning)
            hmsLogger.sendSingleEvent(methodName, errorCode);
    }
}
