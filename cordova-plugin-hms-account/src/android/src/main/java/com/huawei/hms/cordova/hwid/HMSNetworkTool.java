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

package com.huawei.hms.cordova.hwid;

import android.util.Log;

import com.huawei.hms.cordova.CordovaPluginWithLoggerAndExceptions;
import com.huawei.hms.support.hwid.tools.NetworkTool;

import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class HMSNetworkTool extends CordovaPluginWithLoggerAndExceptions {
    public static final String TAG = HMSNetworkTool.class.getSimpleName();

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        logger.startMethodExecutionTimer(action);
        if ("buildNetworkCookie".equals(action)) {
            JSONObject jsonCookie = args.getJSONObject(0);
            buildNetworkCookie(jsonCookie, callbackContext);
        } else if ("buildNetworkURL".equals(action)) {
            JSONObject domainHttp = args.getJSONObject(0);
            buildNetworkURL(domainHttp, callbackContext);
        }
        return false;
    }

    private void buildNetworkCookie(JSONObject jsonCookie, CallbackContext callbackContext) throws JSONException {
        Log.i(TAG, "buildNetworkCookie start");

        String cookieName = jsonCookie.getString("cookieName");
        String cookieValue = jsonCookie.getString("cookieValue");
        String domain = jsonCookie.getString("domain");
        String path = jsonCookie.getString("path");
        Boolean isHttpOnly = jsonCookie.getBoolean("isHttpOnly");
        Boolean isSecure = jsonCookie.getBoolean("isSecure");
        Long maxAge = jsonCookie.getLong("maxAge");

        String constructedCookie = NetworkTool.buildNetworkCookie(cookieName, cookieValue, domain, path, isHttpOnly, isSecure, maxAge);
        callbackContext.success(constructedCookie);
        logger.sendSingleEvent("buildNetworkCookie");
        Log.i(TAG, "buildNetworkCookie end");
    }

    private void buildNetworkURL(JSONObject domainHttp, CallbackContext callbackContext) throws JSONException {
        Log.i(TAG, "buildNetworkURL start");
        String domainName = domainHttp.getString("domain");
        Boolean isUseHttps = domainHttp.getBoolean("isUseHttps");

        String cookie = NetworkTool.buildNetworkUrl(domainName, isUseHttps);
        callbackContext.success(cookie);
        logger.sendSingleEvent("buildNetworkUrl");

        Log.i(TAG, "buildNetworkURL end");
    }
}
