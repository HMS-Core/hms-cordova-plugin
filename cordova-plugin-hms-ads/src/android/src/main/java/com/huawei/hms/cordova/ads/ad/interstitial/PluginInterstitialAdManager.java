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
package com.huawei.hms.cordova.ads.ad.interstitial;

import android.app.Activity;
import android.content.Context;

import com.huawei.hms.ads.AdParam;
import com.huawei.hms.ads.InterstitialAd;
import com.huawei.hms.cordova.ads.Converter;
import com.huawei.hms.cordova.ads.ad.PluginAbstractAdManager;
import com.huawei.hms.cordova.ads.basef.handler.CordovaEventRunner;
import com.huawei.hms.cordova.ads.basef.handler.Promise;
import com.huawei.hms.cordova.ads.layout.PluginLayoutManager;

import org.json.JSONException;
import org.json.JSONObject;

public class PluginInterstitialAdManager extends PluginAbstractAdManager {
    private InterstitialAd interstitialAd;
    private PluginInterstitialAdListener listener;

    public PluginInterstitialAdManager(Context context, Activity activity, CordovaEventRunner manager,
        JSONObject json) {
        super();
        if (json.optBoolean("useActivity", false)) {
            interstitialAd = new InterstitialAd(activity);
        } else {
            interstitialAd = new InterstitialAd(context);
        }
        pluginListenerManager = manager;
        listener = new PluginInterstitialAdListener(pluginListenerManager, managerId);
    }

    public void show(JSONObject args, final Promise promise) {
        interstitialAd.show();
        promise.success();
    }

    public void isLoaded(JSONObject args, final Promise promise) {
        promise.success(interstitialAd.isLoaded());
    }

    public void isLoading(JSONObject args, final Promise promise) {
        promise.success(interstitialAd.isLoading());
    }

    public void loadAd(JSONObject args, final Promise promise) throws JSONException {
        if (args == null || args.length() == 0) {
            interstitialAd.loadAd(new AdParam.Builder().build());
        } else {
            interstitialAd.loadAd(Converter.fromJsonObjectToAdParam(args));
        }
        promise.success();
    }

    public void setAdId(JSONObject args, final Promise promise) {
        interstitialAd.setAdId(args.optString("adId"));
        promise.success();
    }

    public void getAdId(JSONObject args, final Promise promise) {
        promise.success(interstitialAd.getAdId());
    }

    public void setAdListener(JSONObject args, final Promise promise) {
        interstitialAd.setAdListener(listener.getAdListener());
        promise.success();
    }

    public void setRewardAdListener(JSONObject args, final Promise promise) {
        interstitialAd.setRewardAdListener(listener.getRewardAdListener());
        promise.success();
    }

    @Override
    public boolean hasLayout() {
        return false;
    }

    @Override
    public PluginLayoutManager getLayoutManager() {
        return null;
    }
}
