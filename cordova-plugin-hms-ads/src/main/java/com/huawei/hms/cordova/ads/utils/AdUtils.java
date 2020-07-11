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
import com.huawei.hms.ads.AdListener;
import com.huawei.hms.ads.AdParam;
import com.huawei.hms.ads.reward.OnMetadataChangedListener;
import java.util.List;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class AdUtils {
    public static final String TAG = AdUtils.class.getSimpleName();

    public static AdParam fromJSONObjectToAdParam(JSONObject json) {
        if (json == null) {
            return new AdParam.Builder().build();
        }

        Log.d(TAG, json.toString());

        try {
            // Decompiler did a bad job, so I'm unable to infer default values.
            // Going with if-has-then-add method.

            AdParam.Builder builder =  new AdParam.Builder();
            if (json.has("adContentClassification")) {
                builder.setAdContentClassification(json.getString("adContentClassification"));
            }
            if (json.has("appCountry")) {
                builder.setAppCountry(json.getString("appCountry"));
            }
            if (json.has("appLang")) {
                builder.setAppLang(json.getString("appLang"));
            }
            if (json.has("belongCountryCode")) {
                builder.setBelongCountryCode(json.getString("belongCountryCode"));
            }
            if (json.has("gender")) {
                builder.setGender(json.optInt("gender"));
            }
            if (json.has("nonPersonalizedAd")) {
                builder.setNonPersonalizedAd(json.getInt("nonPersonalizedAd"));
            }
            if (json.has("requestOrigin")) {
                builder.setRequestOrigin(json.getString("requestOrigin"));
            }
            if (json.has("tagForChildProtection")) {
                builder.setTagForChildProtection(json.getInt("tagForChildProtection"));
            }
            if (json.has("tagForUnderAgeOfPromise")) {
                builder.setTagForUnderAgeOfPromise(json.getInt("tagForUnderAgeOfPromise"));
            }
            if (json.has("targetingContentUrl")) {
                builder.setTargetingContentUrl(json.getString("targetingContentUrl"));;
            }

            List<String> keywords = CordovaUtils.jsonArrayToList(CordovaUtils.optJSONArray(json, "keywords", new JSONArray()), JSONArray::getString);
            for (String keyword: keywords) {
                builder.addKeyword(keyword);
            }

            return builder.build();
        } catch (JSONException e) {
            Log.e(TAG, "fromJSONObjectToAdParam() :: error" + e.getMessage());
            return null;
        }
    }

    public static AdListener newAdListener(final CordovaInterface cordova, final CordovaWebView webView, final int objectId) {
        return new AdListener() {
            @Override
            public void onAdLoaded() {
                CordovaUtils.sendEvent(cordova, webView, JavaUtils.format("loaded-%s", objectId));
            }

            @Override
            public void onAdFailed(int errorCode) {
                CordovaUtils.sendEvent(cordova, webView, JavaUtils.format("failed-%s", objectId), CordovaUtils.keyValPair("errorCode", errorCode));
            }

            @Override
            public void onAdOpened() {
                CordovaUtils.sendEvent(cordova, webView, JavaUtils.format("opened-%s", objectId));
            }

            @Override
            public void onAdClicked() {
                CordovaUtils.sendEvent(cordova, webView, JavaUtils.format("clicked-%s", objectId));
            }

            @Override
            public void onAdLeave() {
                CordovaUtils.sendEvent(cordova, webView, JavaUtils.format("leave-%s", objectId));
            }

            @Override
            public void onAdClosed() {
                CordovaUtils.sendEvent(cordova, webView, JavaUtils.format("closed-%s", objectId));
            }
        };
    }

    public static OnMetadataChangedListener newMetadataChangeListener(final CordovaInterface cordova, final CordovaWebView webView, final int objectId) {
        return new OnMetadataChangedListener() {
            @Override
            public void onMetadataChanged() {
                CordovaUtils.sendEvent(cordova, webView, JavaUtils.format("metadataChanged-%s", objectId));
            }
        };
    }
}
