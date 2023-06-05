/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.health.modules;

import android.content.Context;
import android.content.Intent;
import android.util.Log;

import com.huawei.hms.cordova.health.basef.CordovaBaseModule;
import com.huawei.hms.cordova.health.basef.CordovaMethod;
import com.huawei.hms.cordova.health.basef.HMSLog;
import com.huawei.hms.cordova.health.basef.handler.CorPack;
import com.huawei.hms.cordova.health.basef.handler.Promise;
import com.huawei.hms.cordova.health.utils.Utils;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class AppInfo extends CordovaBaseModule {

    private static final String TAG = AppInfo.class.getSimpleName();

    private final Context context;

    private String packageName = null;

    private String domainName = null;

    private String version = null;

    private String detailsUrl = null;

    private com.huawei.hms.hihealth.data.AppInfo appInfo = null;

    public AppInfo(Context context) {
        this.context = context;
    }

    @HMSLog
    @CordovaMethod
    public void createApp(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final JSONObject appInfoJson = args.getJSONObject(0);

        try {
            packageName = appInfoJson.getString("packageName");
            domainName = appInfoJson.getString("domainName");
            version = appInfoJson.getString("version");
            detailsUrl = appInfoJson.getString("detailsUrl");
            appInfo = new com.huawei.hms.hihealth.data.AppInfo(packageName, domainName, version, detailsUrl);
            JSONObject appInfoResponse = Utils.getJSONFromAppInfo(appInfo);
            promise.success(appInfoResponse);
        } catch (NullPointerException e) {
            promise.error("Null object");
        }

    }

    @HMSLog
    @CordovaMethod
    public void getDetailsUrl(final CorPack corPack, final JSONArray args, final Promise promise) {
        try {
            Log.i(TAG, "" + appInfo.getDetailsUrl());
            promise.success(appInfo.getDetailsUrl());
        } catch (NullPointerException e) {
            promise.error("Null object");
        }
    }

    @HMSLog
    @CordovaMethod
    public void getDomainName(final CorPack corPack, final JSONArray args, final Promise promise) {
        try {
            Log.i(TAG, "" + appInfo.getDomainName());
            promise.success(appInfo.getDomainName());
        } catch (NullPointerException e) {
            promise.error("Null object");
        }

    }

    @HMSLog
    @CordovaMethod
    public void getPackageName(final CorPack corPack, final JSONArray args, final Promise promise) {
        try {
            Log.i(TAG, "" + appInfo.getPackageName());
            promise.success(appInfo.getPackageName());
        } catch (NullPointerException e) {
            promise.error("Null object");
        }

    }

    @HMSLog
    @CordovaMethod
    public void getVersion(final CorPack corPack, final JSONArray args, final Promise promise) {
        try {
            Log.i(TAG, "" + appInfo.getVersion());
            promise.success(appInfo.getVersion());
        } catch (NullPointerException e) {
            promise.error("Null object");
        }

    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent intent) {

    }
}
