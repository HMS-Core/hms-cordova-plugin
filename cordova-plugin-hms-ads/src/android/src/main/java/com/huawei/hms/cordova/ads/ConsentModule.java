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

import com.huawei.hms.ads.consent.bean.AdProvider;
import com.huawei.hms.ads.consent.constant.ConsentStatus;
import com.huawei.hms.ads.consent.constant.DebugNeedConsent;
import com.huawei.hms.ads.consent.inter.Consent;
import com.huawei.hms.ads.consent.inter.ConsentUpdateListener;
import com.huawei.hms.cordova.ads.basef.CordovaBaseModule;
import com.huawei.hms.cordova.ads.basef.CordovaMethod;
import com.huawei.hms.cordova.ads.basef.HMSLog;
import com.huawei.hms.cordova.ads.basef.handler.CorPack;
import com.huawei.hms.cordova.ads.basef.handler.Promise;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

public class ConsentModule extends CordovaBaseModule {

    @CordovaMethod
    @HMSLog
    public void addTestDeviceId(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String testDeviceId = args.getString(0);
        Consent.getInstance(corPack.getCordovaWebView().getContext()).addTestDeviceId(testDeviceId);
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void getTestDeviceId(final CorPack corPack, JSONArray args, final Promise promise) {
        promise.success(Consent.getInstance(corPack.getCordovaWebView().getContext()).getTestDeviceId());
    }

    @CordovaMethod
    @HMSLog
    public void setUnderAgeOfPromise(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException {
        boolean underAgeOfPromise = args.getBoolean(0);
        Consent.getInstance(corPack.getCordovaWebView().getContext()).setUnderAgeOfPromise(underAgeOfPromise);
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void setConsentStatus(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        ConsentStatus consentStatus = ConsentStatus.forValue(args.getInt(0));
        Consent.getInstance(corPack.getCordovaWebView().getContext()).setConsentStatus(consentStatus);
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void setDebugNeedConsent(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        DebugNeedConsent debugNeedConsent = DebugNeedConsent.forValue(args.getInt(0));
        Consent.getInstance(corPack.getCordovaWebView().getContext()).setDebugNeedConsent(debugNeedConsent);
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void requestConsentUpdate(final CorPack corPack, JSONArray args, final Promise promise) {
        Consent.getInstance(corPack.getCordovaWebView().getContext())
            .requestConsentUpdate(new ConsentUpdateListenerInner(promise));
    }

    private static class ConsentUpdateListenerInner implements ConsentUpdateListener {
        Promise promise;

        public ConsentUpdateListenerInner(Promise promise) {
            this.promise = promise;
        }

        @Override
        public void onSuccess(ConsentStatus consentStatus, boolean b, List<AdProvider> list) {
            JSONObject json = new JSONObject();
            try {
                json.put("consentStatus", consentStatus.getValue());
                json.put("isNeedConsent", b);
                json.put("adProviders", Converter.fromAdProviderListToJSONObject(list));
            } catch (JSONException e) {
                promise.error(e.getMessage());
                return;
            }
            promise.success(json);
        }

        @Override
        public void onFail(String s) {
            promise.error(s);
        }
    }
}
