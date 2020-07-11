/*
Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

package com.huawei.hms.cordova.ads.utils;

import android.util.Log;

import com.huawei.hms.ads.consent.bean.AdProvider;
import com.huawei.hms.ads.consent.constant.ConsentStatus;
import com.huawei.hms.ads.consent.inter.ConsentUpdateListener;
import com.huawei.hms.cordova.ads.helpers.JSONMapper;

import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

public class ConsentUtils {
    private static final String TAG = ConsentUtils.class.getSimpleName();

    public static JSONObject fromAdProviderToJSONObject(AdProvider adProvider) throws JSONException {
        return new JSONObject()
                .put("id", adProvider.getId())
                .put("name", adProvider.getName())
                .put("privacyPolicyUrl", adProvider.getPrivacyPolicyUrl())
                .put("serviceArea", adProvider.getServiceArea())
                .put("a", adProvider.a())
                .put("valid", adProvider.valid());
    }

    public static ConsentUpdateListener newConsentUpdateListener(CallbackContext cb) {
        return new ConsentUpdateListener() {
            @Override
            public void onSuccess(ConsentStatus consentStatus, boolean b, List<AdProvider> list) {
                JSONObject json = new JSONObject();
                try {
                    json.put("consentStatus", consentStatus.getValue());
                    json.put("b", b);
                    json.put("adProviders", new JSONArray(JavaUtils.mapj(list, ConsentUtils::fromAdProviderToJSONObject)));
                } catch (JSONException e) {
                    Log.e(TAG, JavaUtils.format("newConsentUpdateListener() :: %s", e.getMessage()));
                    cb.error(e.getMessage());
                    return;
                }
                cb.success(json);
            }

            @Override
            public void onFail(String s) {
                cb.error(s);
            }
        };
    }
}
