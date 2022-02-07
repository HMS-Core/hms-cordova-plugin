/*
    Copyright 2021-2021. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.fcm.remote;

import android.content.Context;

import com.huawei.hms.cordova.fcm.basef.CordovaBaseModule;
import com.huawei.hms.cordova.fcm.basef.CordovaMethod;
import com.huawei.hms.cordova.fcm.basef.HMSLog;
import com.huawei.hms.cordova.fcm.basef.handler.CorPack;
import com.huawei.hms.cordova.fcm.basef.handler.Promise;
import com.huawei.hms.push.plugin.base.proxy.ProxySettings;
import com.huawei.hms.push.plugin.fcm.FcmPushProxy;

import org.json.JSONArray;
import org.json.JSONException;

public class FcmProxy extends CordovaBaseModule {
    private final Context context;

    public FcmProxy(Context context) {
        this.context = context;
    }

    @HMSLog
    @CordovaMethod
    public void init(final CorPack corPack, JSONArray args, final Promise promise) {
        boolean result = FcmPushProxy.init(context);
        promise.success(result);
    }

    @HMSLog
    @CordovaMethod
    public void setCountryCode(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String countryCode = args.getString(0);
        ProxySettings.setCountryCode(context, countryCode);
        promise.success();
    }

    @HMSLog
    @CordovaMethod
    public void isProxyInitEnabled(final CorPack corPack, JSONArray args, final Promise promise) {
        boolean isProxyInitEnabled = FcmPushProxy.isProxyInitEnabled(context);
        promise.success(isProxyInitEnabled);
    }

    @CordovaMethod
    public void enableLogger(final CorPack corPack,JSONArray args,final Promise promise){
        corPack.enableLogger();
        promise.success(true);
    }

    @CordovaMethod
    public void disableLogger(final CorPack corPack,JSONArray args,final Promise promise){
        corPack.disableLogger();
        promise.success(true);
    }
}
