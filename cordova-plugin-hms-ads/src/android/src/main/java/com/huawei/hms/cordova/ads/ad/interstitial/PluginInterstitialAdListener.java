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

import com.huawei.hms.ads.AdListener;
import com.huawei.hms.ads.reward.OnMetadataChangedListener;
import com.huawei.hms.ads.reward.Reward;
import com.huawei.hms.ads.reward.RewardAdListener;
import com.huawei.hms.cordova.ads.Converter;
import com.huawei.hms.cordova.ads.ad.PluginAbstractAdListener;
import com.huawei.hms.cordova.ads.basef.handler.CordovaEventRunner;
import com.huawei.hms.cordova.ads.utils.ErrorCodes;

public class PluginInterstitialAdListener extends PluginAbstractAdListener {

    private static final String INTERSTITIAL_METADATA_CHANGED = "interstitial_metadata_changed_%d";

    private static final String INTERSTITIAL_AD_CLOSED = "interstitial_ad_closed_%d";
    private static final String INTERSTITIAL_AD_FAILED = "interstitial_ad_failed_%d";
    private static final String INTERSTITIAL_AD_LEAVE = "interstitial_ad_leave_%d";
    private static final String INTERSTITIAL_AD_OPENED = "interstitial_ad_opened_%d";
    private static final String INTERSTITIAL_AD_LOADED = "interstitial_ad_loaded_%d";
    private static final String INTERSTITIAL_AD_CLICKED = "interstitial_ad_clicked_%d";
    private static final String INTERSTITIAL_AD_IMPRESSION = "interstitial_ad_impression_%d";

    private static final String INTERSTITIAL_AD_REWARDED = "interstitial_ad_rewarded_%d";
    private static final String INTERSTITIAL_REWARD_AD_CLOSED = "interstitial_reward_ad_closed_%d";
    private static final String INTERSTITIAL_REWARD_AD_FAILED_TO_LOAD = "interstitial_reward_ad_failed_to_load_%d";
    private static final String INTERSTITIAL_REWARD_AD_LEFT_APP = "interstitial_reward_ad_left_app_%d";
    private static final String INTERSTITIAL_REWARD_AD_LOADED = "interstitial_reward_ad_loaded_%d";
    private static final String INTERSTITIAL_REWARD_AD_OPENED = "interstitial_reward_ad_opened_%d";
    private static final String INTERSTITIAL_REWARD_AD_COMPLETED = "interstitial_reward_ad_completed_%d";
    private static final String INTERSTITIAL_REWARD_AD_STARTED = "interstitial_reward_ad_started_%d";

    public PluginInterstitialAdListener(CordovaEventRunner listenerManager, int objectId) {
        super(listenerManager, objectId);
    }

    public OnMetadataChangedListener getOnMetadataChangedListener() {
        return new OnMetadataChangedListener() {
            @Override
            public void onMetadataChanged() {
                configureEventNameAndParamsThenSendEvent(PluginInterstitialAdListener.INTERSTITIAL_METADATA_CHANGED);
            }
        };
    }

    public AdListener getAdListener() {
        return new AdListener() {
            @Override
            public void onAdClosed() {
                configureEventNameAndParamsThenSendEvent(PluginInterstitialAdListener.INTERSTITIAL_AD_CLOSED);
            }

            @Override
            public void onAdFailed(int i) {
                configureEventNameAndParamsThenSendEvent(PluginInterstitialAdListener.INTERSTITIAL_AD_FAILED,
                    ErrorCodes.fromCode(i).toJson());

            }

            @Override
            public void onAdLeave() {
                configureEventNameAndParamsThenSendEvent(PluginInterstitialAdListener.INTERSTITIAL_AD_LEAVE);
            }

            @Override
            public void onAdOpened() {
                configureEventNameAndParamsThenSendEvent(PluginInterstitialAdListener.INTERSTITIAL_AD_OPENED);
            }

            @Override
            public void onAdLoaded() {
                configureEventNameAndParamsThenSendEvent(PluginInterstitialAdListener.INTERSTITIAL_AD_LOADED);
            }

            @Override
            public void onAdClicked() {
                configureEventNameAndParamsThenSendEvent(PluginInterstitialAdListener.INTERSTITIAL_AD_CLICKED);
            }

            @Override
            public void onAdImpression() {
                configureEventNameAndParamsThenSendEvent(PluginInterstitialAdListener.INTERSTITIAL_AD_IMPRESSION);
            }
        };
    }

    public RewardAdListener getRewardAdListener() {
        return new RewardAdListener() {
            @Override
            public void onRewarded(Reward reward) {
                configureEventNameAndParamsThenSendEvent(PluginInterstitialAdListener.INTERSTITIAL_AD_REWARDED,
                    Converter.fromRewardToJsonObject(reward));

            }

            @Override
            public void onRewardAdClosed() {
                configureEventNameAndParamsThenSendEvent(PluginInterstitialAdListener.INTERSTITIAL_REWARD_AD_CLOSED);
            }

            @Override
            public void onRewardAdFailedToLoad(int i) {
                configureEventNameAndParamsThenSendEvent(
                    PluginInterstitialAdListener.INTERSTITIAL_REWARD_AD_FAILED_TO_LOAD,
                    ErrorCodes.fromCode(i).toJson());
            }

            @Override
            public void onRewardAdLeftApp() {
                configureEventNameAndParamsThenSendEvent(PluginInterstitialAdListener.INTERSTITIAL_REWARD_AD_LEFT_APP);
            }

            @Override
            public void onRewardAdLoaded() {
                configureEventNameAndParamsThenSendEvent(PluginInterstitialAdListener.INTERSTITIAL_REWARD_AD_LOADED);
            }

            @Override
            public void onRewardAdOpened() {
                configureEventNameAndParamsThenSendEvent(PluginInterstitialAdListener.INTERSTITIAL_REWARD_AD_OPENED);
            }

            @Override
            public void onRewardAdCompleted() {
                configureEventNameAndParamsThenSendEvent(PluginInterstitialAdListener.INTERSTITIAL_REWARD_AD_COMPLETED);
            }

            @Override
            public void onRewardAdStarted() {
                configureEventNameAndParamsThenSendEvent(PluginInterstitialAdListener.INTERSTITIAL_REWARD_AD_STARTED);

            }
        };
    }

}
