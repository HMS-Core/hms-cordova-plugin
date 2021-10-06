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

package com.huawei.hms.cordova.ads.ad.banner;

import com.huawei.hms.ads.AdListener;
import com.huawei.hms.cordova.ads.ad.PluginAbstractAdListener;
import com.huawei.hms.cordova.ads.basef.handler.CordovaEventRunner;
import com.huawei.hms.cordova.ads.utils.ErrorCodes;

public class PluginBannerAdListener extends PluginAbstractAdListener {

    private static final String BANNER_AD_CLOSED = "banner_ad_closed_%d";
    private static final String BANNER_AD_FAILED = "banner_ad_failed_%d";
    private static final String BANNER_AD_LEAVE = "banner_ad_leave_%d";
    private static final String BANNER_AD_OPENED = "banner_ad_opened_%d";
    private static final String BANNER_AD_LOADED = "banner_ad_loaded_%d";
    private static final String BANNER_AD_CLICKED = "banner_ad_clicked_%d";
    private static final String BANNER_AD_IMPRESSION = "banner_ad_impression_%d";

    public PluginBannerAdListener(CordovaEventRunner listenerManager, int objectId) {
        super(listenerManager, objectId);
    }

    public AdListener getAdListener() {
        return new AdListener() {
            @Override
            public void onAdClosed() {
                configureEventNameAndParamsThenSendEvent(PluginBannerAdListener.BANNER_AD_CLOSED);
            }

            @Override
            public void onAdFailed(int i) {
                configureEventNameAndParamsThenSendEvent(PluginBannerAdListener.BANNER_AD_FAILED,
                    ErrorCodes.fromCode(i).toJson());

            }

            @Override
            public void onAdLeave() {
                configureEventNameAndParamsThenSendEvent(PluginBannerAdListener.BANNER_AD_LEAVE);
            }

            @Override
            public void onAdOpened() {
                configureEventNameAndParamsThenSendEvent(PluginBannerAdListener.BANNER_AD_OPENED);
            }

            @Override
            public void onAdLoaded() {
                configureEventNameAndParamsThenSendEvent(PluginBannerAdListener.BANNER_AD_LOADED);
            }

            @Override
            public void onAdClicked() {
                configureEventNameAndParamsThenSendEvent(PluginBannerAdListener.BANNER_AD_CLICKED);
            }

            @Override
            public void onAdImpression() {
                configureEventNameAndParamsThenSendEvent(PluginBannerAdListener.BANNER_AD_IMPRESSION);
            }
        };
    }

}
