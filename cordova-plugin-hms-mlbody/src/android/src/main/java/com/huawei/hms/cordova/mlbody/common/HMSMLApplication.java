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

package com.huawei.hms.cordova.mlbody.common;

import android.content.Context;

import com.huawei.hms.cordova.mlbody.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlbody.logger.HMSLogger;
import com.huawei.hms.cordova.mlbody.utils.TextUtils;
import com.huawei.hms.mlsdk.common.MLApplication;
import com.huawei.hms.mlsdk.common.MLApplicationSetting;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

public class HMSMLApplication extends HMSProvider {

    public HMSMLApplication(Context ctx) {
        super(ctx);
    }

    public void applicationSetting(final JSONObject params, final CallbackContext callbackContext)
        throws JSONException {
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
        callbackContext.success(TextUtils.getApplicationSetting(mlApplicationSetting));
        HMSLogger.getInstance(getContext()).sendSingleEvent("appSetting");

    }

    public void getCountryCode(final CallbackContext callbackContext) {
        String countryCode = MLApplication.getInstance().getCountryCode();
        callbackContext.success(countryCode);
    }

    public void setUserRegion(final JSONObject params, final CallbackContext callbackContext) {
        int region = params.optInt("region");
        MLApplication.getInstance().setUserRegion(region);
        callbackContext.success();
    }

}
