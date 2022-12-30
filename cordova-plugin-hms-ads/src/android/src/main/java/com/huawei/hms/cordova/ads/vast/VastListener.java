/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.ads.vast;

import android.view.View;
import android.widget.FrameLayout;
import android.widget.ProgressBar;

import com.huawei.hms.ads.vast.player.api.AdsRequestListener;
import com.huawei.hms.ads.vast.player.api.VastPlayerListener;
import com.huawei.hms.cordova.ads.ad.PluginAbstractAdListener;
import com.huawei.hms.cordova.ads.basef.handler.CordovaEventRunner;
import com.huawei.hms.cordova.ads.utils.ErrorAndStateCodes;

public class VastListener extends PluginAbstractAdListener {
    private static final String VAST_PLAY_STATE_CHANGED = "vast_play_state_changed_%d";

    private static final String VAST_VOLUME_CHANGED = "vast_volume_changed_%d";

    private static final String VAST_SCREEN_VIEW_CHANGED = "vast_screen_view_changed_%d";

    private static final String VAST_PROGRESS_CHANGED = "vast_progress_changed_%d";

    private static final String VAST_ON_SUCCESS = "vast_on_success_%d";

    private static final String VAST_ON_FAILED = "vast_on_failed_%d";

    private static final String VAST_AD_READY = "vast_ad_ready_%d";

    private static final String VAST_AD_FINISH = "vast_ad_finish_%d";

    private static final String VAST_BUFFER_START = "vast_buffer_start_%d";

    private static final String VAST_BUFFER_END = "vast_buffer_end_%d";

    public VastListener(CordovaEventRunner listenerManager, int objectId) {
        super(listenerManager, objectId);
    }

    public VastPlayerListener getVastPlayerListener() {
        return new VastPlayerListener() {
            @Override
            public void onPlayStateChanged(int i) {
                configureEventNameAndParamsThenSendEvent(VastListener.VAST_PLAY_STATE_CHANGED,
                    ErrorAndStateCodes.fromCodePlayState(i).toJson());
            }

            @Override
            public void onVolumeChanged(float v) {
                configureEventNameAndParamsThenSendEvent(VastListener.VAST_VOLUME_CHANGED);
            }

            @Override
            public void onScreenViewChanged(int i) {
                configureEventNameAndParamsThenSendEvent(VastListener.VAST_SCREEN_VIEW_CHANGED,
                    ErrorAndStateCodes.fromCodeScreenState(i).toJson());
            }

            @Override
            public void onProgressChanged(long duration, long currentPosition, long skipDuration) {
                configureEventNameAndParamsThenSendEvent(VastListener.VAST_PROGRESS_CHANGED);
            }
        };
    }

    public AdsRequestListener getAdsRequestListener(FrameLayout linearAdView, ProgressBar progressBar) {
        return new AdsRequestListener() {
            @Override
            public void onSuccess(View view, int i) {
                configureEventNameAndParamsThenSendEvent(VastListener.VAST_ON_SUCCESS);
            }

            @Override
            public void onFailed(View view, int i) {
                configureEventNameAndParamsThenSendEvent(VastListener.VAST_ON_FAILED,
                    ErrorAndStateCodes.fromCodeVast(i).toJson());
            }

            @Override
            public void playAdReady() {
                configureEventNameAndParamsThenSendEvent(VastListener.VAST_AD_READY);
                linearAdView.setVisibility(View.VISIBLE);
            }

            @Override
            public void playAdFinish() {
                configureEventNameAndParamsThenSendEvent(VastListener.VAST_AD_FINISH);
                linearAdView.setVisibility(View.INVISIBLE);
            }

            @Override
            public void onBufferStart() {
                configureEventNameAndParamsThenSendEvent(VastListener.VAST_BUFFER_START);
                progressBar.setVisibility(View.VISIBLE);
            }

            @Override
            public void onBufferEnd() {
                configureEventNameAndParamsThenSendEvent(VastListener.VAST_BUFFER_END);
                progressBar.setVisibility(View.INVISIBLE);

            }

        };
    }
}
