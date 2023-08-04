/*
 * Copyright 2023. Huawei Technologies Co., Ltd. All rights reserved.
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

package com.huawei.hms.cordova.mllanguage.common;

import android.content.Context;

import com.huawei.hms.cordova.mllanguage.basef.CordovaBaseModule;
import com.huawei.hms.cordova.mllanguage.basef.CordovaMethod;
import com.huawei.hms.cordova.mllanguage.basef.HMSLog;
import com.huawei.hms.cordova.mllanguage.basef.handler.CorPack;
import com.huawei.hms.cordova.mllanguage.basef.handler.Promise;
import com.huawei.hms.cordova.mllanguage.utils.TextUtils;
import com.huawei.hms.mlsdk.common.MLApplication;
import com.huawei.hms.mlsdk.common.MLApplicationSetting;

import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class HMSMLApplication extends CordovaBaseModule {
    private final Context context;

    public HMSMLApplication(CordovaInterface cordova) {
        this.context = cordova.getContext();
    }

    @HMSLog
    @CordovaMethod
    public void serviceInitializer(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject params = args.getJSONObject(0);

        if ((!params.has("apiKey") || params.isNull("apiKey")) && (!params.has("accessToken") || params.isNull(
            "accessToken"))) {
            promise.error("Illegal argument. apiKey or accessToken field is mandatory and it must not be null.");
            return;
        }
        if (params.has("apiKey")) {
            MLApplication.getInstance().setApiKey(params.getString("apiKey"));
            promise.success();
        }
        if (params.has("accessToken")) {
            MLApplication.getInstance().setAccessToken(params.getString("accessToken"));
            promise.success();
        }
    }

    @HMSLog
    @CordovaMethod
    public void appSetting(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject params = args.getJSONObject(0);
        JSONObject applicationSetting = params.optJSONObject("mlApplicationSetting");
        String apiKey;
        String applicationId;
        String certFingerprint;
        MLApplicationSetting mlApplicationSetting = null;
        if (applicationSetting != null) {
            apiKey = params.optString("apiKey");
            applicationId = params.optString("applicationId");
            certFingerprint = params.optString("certFingerprint");
            mlApplicationSetting = new MLApplicationSetting.Factory().setApiKey(apiKey)
                .setApplicationId(applicationId)
                .setCertFingerprint(certFingerprint)
                .create();
        } else {
            mlApplicationSetting = new MLApplicationSetting.Factory().create();
        }
        promise.success(TextUtils.getApplicationSetting(mlApplicationSetting));
    }

    @HMSLog
    @CordovaMethod
    public void setUserRegion(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        int region = args.getInt(0);
        MLApplication.getInstance().setUserRegion(region);
        promise.success();
    }

    @HMSLog
    @CordovaMethod
    public void getCountryCode(final CorPack corPack, JSONArray args, final Promise promise) {
        final String countryCode = MLApplication.getInstance().getCountryCode();
        promise.success(countryCode);
    }

    @HMSLog
    @CordovaMethod
    public void enableLogger(final CorPack corPack, JSONArray args, final Promise promise) {
        corPack.enableLogger();
        promise.success();
    }

    @HMSLog
    @CordovaMethod
    public void disableLogger(final CorPack corPack, JSONArray args, final Promise promise) {
        corPack.disableLogger();
        promise.success();
    }
}
