/*
 * Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.
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

package com.huawei.hms.cordova.ads.ad.interstitial;

import android.app.Activity;
import android.content.Context;

import com.huawei.hms.ads.AdParam;
import com.huawei.hms.ads.InterstitialAd;
import com.huawei.hms.ads.VideoConfiguration;
import com.huawei.hms.cordova.ads.Converter;
import com.huawei.hms.cordova.ads.ad.PluginAbstractAdManager;
import com.huawei.hms.cordova.ads.basef.handler.CordovaEventRunner;
import com.huawei.hms.cordova.ads.basef.handler.Promise;
import com.huawei.hms.cordova.ads.layout.PluginLayoutManager;
import com.huawei.hms.cordova.ads.utils.ErrorAndStateCodes;
import com.huawei.hms.ads.BiddingInfo;

import org.json.JSONException;
import org.json.JSONObject;

public class PluginInterstitialAdManager extends PluginAbstractAdManager {
    private InterstitialAd interstitialAd;

    public static InterstitialAd globalInterstitialAd;

    public static VideoConfiguration videoConfiguration;

    private PluginInterstitialAdListener listener;

    private Activity activity;

    private BiddingInfo biddingInfo;

    public PluginInterstitialAdManager(Context context, Activity activity, CordovaEventRunner manager,
        JSONObject json) {
        super();
        this.activity = activity;
        if (json.optBoolean("useActivity", false)) {
            interstitialAd = new InterstitialAd(activity);
        } else {
            interstitialAd = new InterstitialAd(context);
        }
        globalInterstitialAd = interstitialAd;
        pluginListenerManager = manager;
        listener = new PluginInterstitialAdListener(pluginListenerManager, managerId);
    }

    public void show(JSONObject args, final Promise promise) {
        interstitialAd.show(activity);
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

    public void setVideoConfiguration(JSONObject args, final Promise promise) {
        videoConfiguration = Converter.setVideoConfiguration(args);
        promise.success();
    }

    public void getBiddingInfo(JSONObject json, final Promise promise) throws JSONException {
        checkIfObjectNullOrThrowError(interstitialAd, promise, ErrorAndStateCodes.AD_NOT_INITIALIZED);
        JSONObject result = new JSONObject();
        biddingInfo = interstitialAd.getBiddingInfo();
        if (biddingInfo != null) {
            result.put("price", biddingInfo.getPrice());
            result.put("cur", biddingInfo.getCur());
            result.put("nurl", biddingInfo.getNurl());
            result.put("lurl", biddingInfo.getLurl());
        }
        promise.success(result);
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
