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

import com.huawei.hms.ads.reward.OnMetadataChangedListener;
import com.huawei.hms.ads.reward.Reward;
import com.huawei.hms.ads.reward.RewardAdListener;
import com.huawei.hms.ads.reward.RewardAdLoadListener;
import com.huawei.hms.ads.reward.RewardAdStatusListener;
import com.huawei.hms.cordova.ads.Converter;
import com.huawei.hms.cordova.ads.ad.PluginAbstractAdListener;
import com.huawei.hms.cordova.ads.basef.handler.CordovaEventRunner;
import com.huawei.hms.cordova.ads.utils.ErrorCodes;

public class PluginRewardAdListener extends PluginAbstractAdListener {
    private static final String REWARD_METADATA_CHANGED = "reward_metadata_changed_%d";

    private static final String REWARD_AD_FAILED_TO_LOAD_LOAD = "reward_ad_failed_to_load_load%d";
    private static final String REWARDED_LOADED = "rewarded_loaded_%d";

    private static final String REWARDED_STATUS = "rewarded_status_%d";
    private static final String REWARD_AD_CLOSED_STATUS = "reward_ad_closed_status_%d";
    private static final String REWARD_AD_OPENED_STATUS = "reward_ad_opened_status_%d";
    private static final String REWARD_AD_FAILED_TO_SHOW = "reward_ad_failed_to_show_%d";

    private static final String REWARDED = "rewarded_%d";
    private static final String REWARD_AD_CLOSED = "reward_ad_closed_%d";
    private static final String REWARD_AD_FAILED_TO_LOAD = "reward_ad_failed_to_load_%d";
    private static final String REWARD_AD_LEFT_APP = "reward_ad_left_app_%d";
    private static final String REWARD_AD_LOADED = "reward_ad_loaded_%d";
    private static final String REWARD_AD_OPENED = "reward_ad_opened_%d";
    private static final String REWARD_AD_COMPLETED = "reward_ad_completed_%d";
    private static final String REWARD_AD_STARTED = "reward_ad_started_%d";

    public PluginRewardAdListener(CordovaEventRunner listenerManager, int objectId) {
        super(listenerManager, objectId);
    }

    public OnMetadataChangedListener getOnMetadataChangedListener() {
        return new OnMetadataChangedListener() {
            @Override
            public void onMetadataChanged() {
                configureEventNameAndParamsThenSendEvent(PluginRewardAdListener.REWARD_METADATA_CHANGED);

            }
        };
    }

    public RewardAdLoadListener getRewardAdLoadListener() {
        return new RewardAdLoadListener() {
            @Override
            public void onRewardAdFailedToLoad(int i) {
                configureEventNameAndParamsThenSendEvent(PluginRewardAdListener.REWARD_AD_FAILED_TO_LOAD_LOAD,
                    ErrorCodes.fromCode(i).toJson());
            }

            @Override
            public void onRewardedLoaded() {
                configureEventNameAndParamsThenSendEvent(PluginRewardAdListener.REWARDED_LOADED);

            }
        };
    }

    public RewardAdStatusListener getRewardAdStatusListener() {
        return new RewardAdStatusListener() {
            @Override
            public void onRewardAdClosed() {
                configureEventNameAndParamsThenSendEvent(PluginRewardAdListener.REWARD_AD_CLOSED_STATUS);
            }

            @Override
            public void onRewardAdFailedToShow(int i) {
                configureEventNameAndParamsThenSendEvent(PluginRewardAdListener.REWARD_AD_FAILED_TO_SHOW,
                    ErrorCodes.fromCodeRewardAdStatus(i).toJson());
            }

            @Override
            public void onRewardAdOpened() {
                configureEventNameAndParamsThenSendEvent(PluginRewardAdListener.REWARD_AD_OPENED_STATUS);
            }

            @Override
            public void onRewarded(Reward reward) {
                configureEventNameAndParamsThenSendEvent(PluginRewardAdListener.REWARDED_STATUS,
                    Converter.fromRewardToJsonObject(reward));

            }
        };
    }

    public RewardAdListener getRewardAdListener() {
        return new RewardAdListener() {
            @Override
            public void onRewarded(Reward reward) {
                configureEventNameAndParamsThenSendEvent(PluginRewardAdListener.REWARDED,
                    Converter.fromRewardToJsonObject(reward));
            }

            @Override
            public void onRewardAdClosed() {
                configureEventNameAndParamsThenSendEvent(PluginRewardAdListener.REWARD_AD_CLOSED);
            }

            @Override
            public void onRewardAdFailedToLoad(int i) {
                configureEventNameAndParamsThenSendEvent(PluginRewardAdListener.REWARD_AD_FAILED_TO_LOAD,
                    ErrorCodes.fromCode(i).toJson());
            }

            @Override
            public void onRewardAdLeftApp() {
                configureEventNameAndParamsThenSendEvent(PluginRewardAdListener.REWARD_AD_LEFT_APP);
            }

            @Override
            public void onRewardAdLoaded() {
                configureEventNameAndParamsThenSendEvent(PluginRewardAdListener.REWARD_AD_LOADED);
            }

            @Override
            public void onRewardAdOpened() {
                configureEventNameAndParamsThenSendEvent(PluginRewardAdListener.REWARD_AD_OPENED);
            }

            @Override
            public void onRewardAdCompleted() {
                configureEventNameAndParamsThenSendEvent(PluginRewardAdListener.REWARD_AD_COMPLETED);
            }

            @Override
            public void onRewardAdStarted() {
                configureEventNameAndParamsThenSendEvent(PluginRewardAdListener.REWARD_AD_STARTED);
            }
        };
    }

}
