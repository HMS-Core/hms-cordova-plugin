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
package com.huawei.hms.cordova.ads;

import com.huawei.hms.ads.identifier.AdIdVerifyException;
import com.huawei.hms.ads.identifier.AdvertisingIdClient;
import com.huawei.hms.cordova.ads.basef.CordovaBaseModule;
import com.huawei.hms.cordova.ads.basef.CordovaMethod;
import com.huawei.hms.cordova.ads.basef.HMSLog;
import com.huawei.hms.cordova.ads.basef.handler.CorPack;
import com.huawei.hms.cordova.ads.basef.handler.Promise;

import org.json.JSONArray;
import org.json.JSONException;

import java.io.IOException;

public class IdentifierModule extends CordovaBaseModule {

    @CordovaMethod
    @HMSLog
    public void verifyAdId(final CorPack corPack, JSONArray args, final Promise promise) {
        corPack.getCordova().getThreadPool().execute(() -> {
            try {
                String adId = args.optString(0);
                boolean isLimitAdTracking = args.optBoolean(1);
                boolean verifyAdIdResult = AdvertisingIdClient.verifyAdId(corPack.getCordovaWebView().getContext(),
                    adId, isLimitAdTracking);
                promise.success(verifyAdIdResult);
            } catch (AdIdVerifyException e) {
                promise.error(e.getMessage());
            }
        });
    }

    @CordovaMethod
    @HMSLog
    public void getAdvertisingIdInfo(final CorPack corPack, JSONArray args, final Promise promise) {
        corPack.getCordova().getThreadPool().execute(() -> {
            try {
                AdvertisingIdClient.Info info = AdvertisingIdClient.getAdvertisingIdInfo(
                    corPack.getCordovaWebView().getContext());
                promise.success(Converter.fromAdvertisingClientInfoToJson(info));
            } catch (IOException | JSONException e) {
                promise.error(e.getMessage());
            }
        });
    }

}
