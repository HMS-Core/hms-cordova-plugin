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
package com.huawei.hms.cordova.analytics.basef.handler;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONObject;

import static org.apache.cordova.PluginResult.Status.OK;

public class Promise {

    private final CallbackContext callbackContext;
    private final HMSLogger hmsLogger;
    private final String methodName;
    private final boolean isLoggerRunning;

    public Promise(final CallbackContext callbackContext, final HMSLogger logger, String method, boolean isActive) {
        this.callbackContext = callbackContext;
        this.hmsLogger = logger;
        this.methodName = method;
        this.isLoggerRunning = isActive;
    }

    public void success() {
        callbackContext.success();
        sendLogEvent(null);
    }
    public void success(int message) {
        callbackContext.success(message);
        sendLogEvent(null);
    }
    public void success(byte[] message) {
        callbackContext.success(message);
        sendLogEvent(null);
    }
    public void success(String message) {
        callbackContext.success(message);
        sendLogEvent(null);
    }
    public void success(JSONArray message) {
        callbackContext.success(message);
        sendLogEvent(null);
    }
    public void success(JSONObject message) {
        callbackContext.success(message);
        sendLogEvent(null);
    }
    public void success(boolean message) {
        callbackContext.sendPluginResult(new PluginResult(OK, message));
        sendLogEvent(null);
    }
    public void success(float message) {
        callbackContext.sendPluginResult(new PluginResult(OK, message));
        sendLogEvent(null);
    }
    public void error(int message) {
        callbackContext.error(message);
        sendLogEvent("" + message);
    }
    public void error(String message) {
        callbackContext.error(message);
        sendLogEvent(message);
    }
    public void error(JSONObject message) {
        callbackContext.error(message);
        sendLogEvent(message.toString());
    }
    public void sendPluginResult(PluginResult pluginResult) {
        callbackContext.sendPluginResult(pluginResult);
        sendLogEvent(null);
    }

    private void sendLogEvent(String nullable) {
        if (!isLoggerRunning) return;
        if (nullable == null) hmsLogger.sendSingleEvent(methodName);
        else hmsLogger.sendSingleEvent(methodName, nullable);
    }

}
