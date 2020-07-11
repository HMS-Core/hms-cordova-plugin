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

import com.huawei.hms.ads.reward.Reward;
import com.huawei.hms.ads.reward.RewardAd;
import com.huawei.hms.ads.reward.RewardAdLoadListener;
import com.huawei.hms.ads.reward.RewardAdStatusListener;
import com.huawei.hms.ads.reward.RewardVerifyConfig;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaWebView;
import org.json.JSONObject;

public class RewardUtils {
    public static JSONObject fromRewardToJSONObject(Reward reward) {
        return CordovaUtils.basicMap("name", reward.getName(), "amount", reward.getAmount());
    }

    public static RewardAdLoadListener getLoadListener(final CordovaInterface cordova, final CordovaWebView webView, int objectId) {
        return new RewardAdLoadListener() {
            @Override
            public void onRewardedLoaded() {
                CordovaUtils.sendEvent(cordova, webView, JavaUtils.format("loaded-%s", objectId));
            }

            @Override
            public void onRewardAdFailedToLoad(int errorCode) {
                CordovaUtils.sendEvent(cordova, webView, JavaUtils.format("loadFailed-%s", objectId), CordovaUtils.keyValPair("errorCode", errorCode));
            }
        };
    }

    public static RewardAdStatusListener getStatusListener(final CordovaInterface cordova, final CordovaWebView webView, int objectId) {
        return new RewardAdStatusListener() {
            @Override
            public void onRewardAdOpened() {
                CordovaUtils.sendEvent(cordova, webView, JavaUtils.format("opened-%s", objectId));
            }

            @Override
            public void onRewardAdFailedToShow(int errorCode) {
                CordovaUtils.sendEvent(cordova, webView, JavaUtils.format("showFailed-%s", objectId), CordovaUtils.keyValPair("errorCode", errorCode));
            }

            @Override
            public void onRewardAdClosed() {
                CordovaUtils.sendEvent(cordova, webView, JavaUtils.format("closed-%s", objectId));
            }

            @Override
            public void onRewarded(Reward reward) {
                CordovaUtils.sendEvent(cordova, webView, JavaUtils.format("rewarded-%s", objectId), fromRewardToJSONObject(reward));
            }
        };
    }

    public static RewardAd createRewardView(CordovaInterface cordova, JSONObject json) {
        RewardAd rewardAd = new RewardAd(cordova.getContext(), json.optString("adId"));
        if (json.has("userId")) {
            rewardAd.setUserId(json.optString("userId"));
        }
        if (json.has("immersive")) {
            rewardAd.setImmersive(json.optBoolean("immersive"));
        }
        if (json.has("data")) {
            rewardAd.setData(json.optString("data"));
        }
        if (json.has("rewardVerifyConfig")) {
            rewardAd.setRewardVerifyConfig(fromJSONObjectToRewardVerifyConfig(json.optJSONObject("rewardVerifyConfig")));
        }

        return rewardAd;
    }

    private static RewardVerifyConfig fromJSONObjectToRewardVerifyConfig(JSONObject json) {
        return new RewardVerifyConfig.Builder()
                .setData(json.optString("data"))
                .setUserId(json.optString("userId"))
                .build();
    }
}
