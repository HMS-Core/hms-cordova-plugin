/*
 * Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.
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

package com.huawei.hms.cordova.ads;

import com.huawei.hms.ads.HwAds;
import com.huawei.hms.ads.RequestOptions;
import com.huawei.hms.cordova.ads.basef.CordovaBaseModule;
import com.huawei.hms.cordova.ads.basef.CordovaMethod;
import com.huawei.hms.cordova.ads.basef.HMSLog;
import com.huawei.hms.cordova.ads.basef.handler.CorPack;
import com.huawei.hms.cordova.ads.basef.handler.Promise;

import org.json.JSONArray;
import org.json.JSONException;

public class HwAdsModule extends CordovaBaseModule {
    @CordovaMethod
    @HMSLog
    public void init(final CorPack corPack, JSONArray args, final Promise promise) {
        HwAds.init(corPack.getCordovaWebView().getContext());
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void getSDKVersion(final CorPack corPack, JSONArray args, final Promise promise) {
        promise.success(HwAds.getSDKVersion());
    }

    @CordovaMethod
    @HMSLog
    public void getRequestOptions(final CorPack corPack, JSONArray args, final Promise promise) {
        promise.success(Converter.fromRequestOptionsToJsonObj(HwAds.getRequestOptions()));
    }

    @CordovaMethod
    @HMSLog
    public void setRequestOptions(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        RequestOptions requestOptions = Converter.fromJSONObjectToRequestOptions(args.getJSONObject(0));
        HwAds.setRequestOptions(requestOptions);
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void setConsent(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String consent = args.getString(0);
        HwAds.setConsent(consent);
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void enableLogger(final CorPack corPack, JSONArray args, final Promise promise) {
        corPack.enableLogger();
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void disableLogger(final CorPack corPack, JSONArray args, final Promise promise) {
        corPack.disableLogger();
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void getAppActivateStyle(final CorPack corPack, JSONArray args, final Promise promise) {
        promise.success(HwAds.getAppActivateStyle());
    }

    @CordovaMethod
    @HMSLog
    public void setAppActivateStyle(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        int style = args.getInt(0);
        HwAds.setAppActivateStyle(style);
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void setAppInstalledNotify(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException {
        boolean status = args.getBoolean(0);
        HwAds.setAppInstalledNotify(status);
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void isAppInstalledNotify(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException {
        promise.success(HwAds.isAppInstalledNotify());
    }
}