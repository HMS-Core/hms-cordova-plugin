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
package com.huawei.hms.cordova.ads.ad.reward;

import android.app.Activity;
import android.content.Context;

import com.huawei.hms.ads.AdParam;
import com.huawei.hms.ads.reward.RewardAd;
import com.huawei.hms.ads.reward.RewardVerifyConfig;
import com.huawei.hms.cordova.ads.Converter;
import com.huawei.hms.cordova.ads.ad.PluginAbstractAdManager;
import com.huawei.hms.cordova.ads.basef.handler.CordovaEventRunner;
import com.huawei.hms.cordova.ads.basef.handler.Promise;
import com.huawei.hms.cordova.ads.layout.PluginLayoutManager;
import com.huawei.hms.cordova.ads.utils.ErrorCodes;

import org.json.JSONException;
import org.json.JSONObject;

public class PluginRewardAdManager extends PluginAbstractAdManager {
    private RewardAd rewardAd;
    private Activity activity;
    private PluginRewardAdListener listener;
    private RewardVerifyConfig rewardVerifyConfig = null;

    public PluginRewardAdManager(Context context, Activity activity, CordovaEventRunner manager, JSONObject args) {
        super();

        pluginListenerManager = manager;
        this.activity = activity;
        rewardAd = new RewardAd(context, args.optString("adId"));

        listener = new PluginRewardAdListener(pluginListenerManager, managerId);
    }

    @Override
    public PluginLayoutManager getLayoutManager() {
        return null;
    }

    public void show(JSONObject args, final Promise promise) {
        if (!args.optBoolean("useActivity", false)) {
            rewardAd.show();
        } else {
            rewardAd.show(activity, listener.getRewardAdStatusListener());

        }
        promise.success();
    }

    public void resume(JSONObject args, final Promise promise) {
        rewardAd.resume();
        promise.success();
    }

    public void pause(JSONObject args, final Promise promise) {
        rewardAd.pause();
        promise.success();
    }

    public void destroy(JSONObject args, final Promise promise) {
        rewardAd.destroy();
        promise.success();
    }

    public void loadAd(JSONObject args, final Promise promise) throws JSONException {
        if (args == null) {
            rewardAd.loadAd(new AdParam.Builder().build(), listener.getRewardAdLoadListener());
        } else {
            rewardAd.loadAd(Converter.fromJsonObjectToAdParam(args), listener.getRewardAdLoadListener());
        }
        promise.success();
    }

    public void isLoaded(JSONObject args, final Promise promise) {
        promise.success(rewardAd.isLoaded());
    }

    public void getData(JSONObject args, final Promise promise) {
        promise.success(rewardAd.getData());
    }

    public void getUserId(JSONObject args, final Promise promise) {
        promise.success(rewardAd.getUserId());
    }

    public void getReward(JSONObject args, final Promise promise) throws JSONException {
        promise.success(new JSONObject().put("rewardAmount", rewardAd.getReward().getAmount())
            .put("rewardName", rewardAd.getReward().getName()));
    }

    public void setData(JSONObject args, final Promise promise) {
        rewardAd.setData(args.optString("data"));
        promise.success();
    }

    public void setImmersive(JSONObject args, final Promise promise) {
        rewardAd.setImmersive(args.optBoolean("immersive"));
        promise.success();
    }

    public void setUserId(JSONObject args, final Promise promise) {
        rewardAd.setUserId(args.optString("userId"));
        promise.success();
    }

    public void setRewardVerifyConfig(JSONObject args, final Promise promise) {
        RewardVerifyConfig.Builder builder = new RewardVerifyConfig.Builder();
        if (args.has("userId")) {
            builder.setUserId(args.optString("userId"));
        }
        if (args.has("data")) {
            builder.setData(args.optString("data"));
        }
        rewardVerifyConfig = builder.build();
        rewardAd.setRewardVerifyConfig(rewardVerifyConfig);
        promise.success();
    }

    public void getRewardVerifyConfig(JSONObject json, final Promise promise) throws JSONException {
        if (rewardVerifyConfig == null) {
            promise.error(ErrorCodes.REWARD_VERIFY_CONF_NOT_INITIALIZED.toJson());
            checkIfObjectNullOrThrowError(rewardVerifyConfig, promise, ErrorCodes.REWARD_VERIFY_CONF_NOT_INITIALIZED);
        }
        promise.success(
            new JSONObject().put("data", rewardVerifyConfig.getData()).put("userId", rewardVerifyConfig.getUserId()));
    }

    public void setOnMetadataChangedListener(JSONObject args, final Promise promise) {
        rewardAd.setOnMetadataChangedListener(listener.getOnMetadataChangedListener());
        promise.success();
    }

    public void setRewardAdListener(JSONObject args, final Promise promise) {
        rewardAd.setRewardAdListener(listener.getRewardAdListener());
        promise.success();
    }

    @Override
    public boolean hasLayout() {
        return false;
    }

}
