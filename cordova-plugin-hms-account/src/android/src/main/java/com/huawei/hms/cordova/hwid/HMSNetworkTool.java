/*
    Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.

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

import com.huawei.hms.support.hwid.tools.NetworkTool;

import com.huawei.hms.cordova.utils.ExceptionUtils;

import com.huawei.hms.cordova.basef.CordovaBaseModule;
import com.huawei.hms.cordova.basef.CordovaMethod;
import com.huawei.hms.cordova.basef.HMSLog;
import com.huawei.hms.cordova.basef.handler.CorPack;
import com.huawei.hms.cordova.basef.handler.Promise;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class HMSNetworkTool extends CordovaBaseModule {
    public static final String TAG = HMSNetworkTool.class.getSimpleName();

    protected ExceptionUtils exceptions;

    public HMSNetworkTool() {
        exceptions = new ExceptionUtils();
    }

    @CordovaMethod
    @HMSLog
    public void buildNetworkCookie(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        Log.i(TAG, "buildNetworkCookie start");
        JSONObject jsonCookie = args.getJSONObject(0);

        String cookieName = jsonCookie.getString("cookieName");
        String cookieValue = jsonCookie.getString("cookieValue");
        String domain = jsonCookie.getString("domain");
        String path = jsonCookie.getString("path");
        Boolean isHttpOnly = jsonCookie.getBoolean("isHttpOnly");
        Boolean isSecure = jsonCookie.getBoolean("isSecure");
        Long maxAge = jsonCookie.getLong("maxAge");

        String constructedCookie = NetworkTool.buildNetworkCookie(cookieName, cookieValue, domain, path, isHttpOnly,
            isSecure, maxAge);
        cb.success(constructedCookie);

        Log.i(TAG, "buildNetworkCookie end");
    }

    @CordovaMethod
    @HMSLog
    public void buildNetworkURL(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        Log.i(TAG, "buildNetworkURL start");
        JSONObject domainHttp = args.getJSONObject(0);

        String domainName = domainHttp.getString("domain");
        Boolean isUseHttps = domainHttp.getBoolean("isUseHttps");

        String cookie = NetworkTool.buildNetworkUrl(domainName, isUseHttps);
        cb.success(cookie);

        Log.i(TAG, "buildNetworkURL end");
    }

}
