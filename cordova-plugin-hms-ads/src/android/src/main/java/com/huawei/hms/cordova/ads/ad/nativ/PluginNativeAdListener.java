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
package com.huawei.hms.cordova.ads.ad.nativ;

import com.huawei.hms.ads.AdListener;
import com.huawei.hms.ads.VideoOperator.VideoLifecycleListener;
import com.huawei.hms.ads.nativead.DislikeAdListener;
import com.huawei.hms.ads.nativead.NativeAd;
import com.huawei.hms.cordova.ads.ad.PluginAbstractAdListener;
import com.huawei.hms.cordova.ads.basef.handler.CordovaEventRunner;
import com.huawei.hms.cordova.ads.utils.ErrorCodes;

public class PluginNativeAdListener extends PluginAbstractAdListener {
    private static final String NATIVE_AD_DISLIKED = "native_ad_disliked_%d";
    private static final String NATIVE_AD_LOADED_LOAD = "native_ad_loaded_load_%d";

    private static final String NATIVE_AD_CLOSED = "native_ad_closed_%d";
    private static final String NATIVE_AD_FAILED = "native_ad_failed_%d";
    private static final String NATIVE_AD_LEAVE = "native_ad_leave_%d";
    private static final String NATIVE_AD_OPENED = "native_ad_opened_%d";
    private static final String NATIVE_AD_LOADED = "native_ad_loaded_%d";
    private static final String NATIVE_AD_CLICKED = "native_ad_clicked_%d";
    private static final String NATIVE_AD_IMPRESSION = "native_ad_impression_%d";

    private static final String VIDEO_OPERATOR_VIDEO_START = "video_operator_video_start_%d";
    private static final String VIDEO_OPERATOR_VIDEO_PLAY = "video_operator_video_play_%d";
    private static final String VIDEO_OPERATOR_VIDEO_PAUSE = "video_operator_video_pause_%d";
    private static final String VIDEO_OPERATOR_VIDEO_END = "video_operator_video_end_%d";
    private static final String VIDEO_OPERATOR_VIDEO_MUTE = "video_operator_video_mute_%d";

    private NativeAd globalNativeAd = null;

    public NativeAd getNativeAd() {
        return globalNativeAd;
    }

    public PluginNativeAdListener(CordovaEventRunner listenerManager, int objectId) {
        super(listenerManager, objectId);
    }

    public DislikeAdListener getDislikeAdListener() {
        return new DislikeAdListener() {
            @Override
            public void onAdDisliked() {
                configureEventNameAndParamsThenSendEvent(PluginNativeAdListener.NATIVE_AD_DISLIKED);
            }
        };
    }

    public NativeAd.NativeAdLoadedListener getNativeAdLoadedListener() {
        return new NativeAd.NativeAdLoadedListener() {
            @Override
            public void onNativeAdLoaded(NativeAd nativeAd) {
                globalNativeAd = nativeAd;
                configureEventNameAndParamsThenSendEvent(PluginNativeAdListener.NATIVE_AD_LOADED_LOAD);
            }
        };
    }

    public AdListener getAdListener() {
        return new AdListener() {
            @Override
            public void onAdClosed() {
                configureEventNameAndParamsThenSendEvent(PluginNativeAdListener.NATIVE_AD_CLOSED);
            }

            @Override
            public void onAdFailed(int i) {
                configureEventNameAndParamsThenSendEvent(PluginNativeAdListener.NATIVE_AD_FAILED,
                    ErrorCodes.fromCode(i).toJson());

            }

            @Override
            public void onAdLeave() {
                configureEventNameAndParamsThenSendEvent(PluginNativeAdListener.NATIVE_AD_LEAVE);
            }

            @Override
            public void onAdOpened() {
                configureEventNameAndParamsThenSendEvent(PluginNativeAdListener.NATIVE_AD_OPENED);
            }

            @Override
            public void onAdLoaded() {
                configureEventNameAndParamsThenSendEvent(PluginNativeAdListener.NATIVE_AD_LOADED);
            }

            @Override
            public void onAdClicked() {
                configureEventNameAndParamsThenSendEvent(PluginNativeAdListener.NATIVE_AD_CLICKED);
            }

            @Override
            public void onAdImpression() {
                configureEventNameAndParamsThenSendEvent(PluginNativeAdListener.NATIVE_AD_IMPRESSION);
            }
        };
    }

    public VideoLifecycleListener getVideoLifecycleListener() {
        return new VideoLifecycleListener() {
            @Override
            public void onVideoStart() {
                configureEventNameAndParamsThenSendEvent(PluginNativeAdListener.VIDEO_OPERATOR_VIDEO_START);
            }

            @Override
            public void onVideoPlay() {
                configureEventNameAndParamsThenSendEvent(PluginNativeAdListener.VIDEO_OPERATOR_VIDEO_PLAY);
            }

            @Override
            public void onVideoPause() {
                configureEventNameAndParamsThenSendEvent(PluginNativeAdListener.VIDEO_OPERATOR_VIDEO_PAUSE);
            }

            @Override
            public void onVideoEnd() {
                configureEventNameAndParamsThenSendEvent(PluginNativeAdListener.VIDEO_OPERATOR_VIDEO_END);
            }

            @Override
            public void onVideoMute(boolean b) {
                configureEventNameAndParamsThenSendEvent(PluginNativeAdListener.VIDEO_OPERATOR_VIDEO_MUTE, b);
            }
        };
    }
}
