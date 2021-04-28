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
package com.huawei.hms.cordova.ads.ad.splash;

import com.huawei.hms.ads.splash.SplashAdDisplayListener;
import com.huawei.hms.ads.splash.SplashView.SplashAdLoadListener;
import com.huawei.hms.cordova.ads.ad.PluginAbstractAdListener;
import com.huawei.hms.cordova.ads.basef.handler.CordovaEventRunner;
import com.huawei.hms.cordova.ads.utils.ErrorCodes;

public class PluginSplashAdListener extends PluginAbstractAdListener {

    private static final String SPLASH_AD_FAILED_TO_LOAD = "splash_ad_failed_to_load_%d";
    private static final String SPLASH_AD_LOADED = "splash_ad_loaded_%d";
    private static final String SPLASH_AD_DISMISSED = "splash_ad_dismissed_%d";
    private static final String SPLASH_AD_SHOWED = "splash_ad_showed_%d";
    private static final String SPLASH_AD_CLICK = "splash_ad_click_%d";

    public PluginSplashAdListener(CordovaEventRunner listenerManager, int objectId) {
        super(listenerManager, objectId);
    }

    public SplashAdLoadListener getSplashAdLoadListener() {
        return new SplashAdLoadListener() {
            @Override
            public void onAdFailedToLoad(int i) {
                configureEventNameAndParamsThenSendEvent(PluginSplashAdListener.SPLASH_AD_FAILED_TO_LOAD,
                    ErrorCodes.fromCode(i).toJson());
            }

            @Override
            public void onAdLoaded() {
                configureEventNameAndParamsThenSendEvent(PluginSplashAdListener.SPLASH_AD_LOADED);
            }

            @Override
            public void onAdDismissed() {
                configureEventNameAndParamsThenSendEvent(PluginSplashAdListener.SPLASH_AD_DISMISSED);
            }
        };
    }

    public SplashAdDisplayListener getSplashAdDisplayListener() {
        return new SplashAdDisplayListener() {
            @Override
            public void onAdShowed() {
                configureEventNameAndParamsThenSendEvent(PluginSplashAdListener.SPLASH_AD_SHOWED);
            }

            @Override
            public void onAdClick() {
                configureEventNameAndParamsThenSendEvent(PluginSplashAdListener.SPLASH_AD_CLICK);
            }
        };
    }
}
