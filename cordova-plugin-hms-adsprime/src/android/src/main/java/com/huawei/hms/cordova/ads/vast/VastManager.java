/*
 * Copyright 2022-2023. Huawei Technologies Co., Ltd. All rights reserved.
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

package com.huawei.hms.cordova.ads.vast;

import android.app.Activity;
import android.content.Context;
import android.util.Log;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.ProgressBar;

import com.huawei.hms.ads.vast.player.VastApplication;
import com.huawei.hms.ads.vast.player.api.DefaultVideoController;
import com.huawei.hms.ads.vast.player.api.PlayerConfig;
import com.huawei.hms.ads.vast.player.api.VastAdPlayer;
import com.huawei.hms.ads.vast.player.model.adslot.AdsData;
import com.huawei.hms.ads.vast.player.model.adslot.LinearAdSlot;
import com.huawei.hms.ads.vast.player.model.remote.RequestCallback;
import com.huawei.hms.cordova.ads.Converter;
import com.huawei.hms.cordova.ads.ad.PluginAbstractAdManager;
import com.huawei.hms.cordova.ads.basef.handler.CordovaEventRunner;
import com.huawei.hms.cordova.ads.basef.handler.Promise;
import com.huawei.hms.cordova.ads.layout.PluginAdLayout;
import com.huawei.hms.cordova.ads.layout.PluginLayoutManager;

import org.json.JSONException;
import org.json.JSONObject;

public class VastManager extends PluginAbstractAdManager {
    private static final String TAG = VastManager.class.getSimpleName();

    private static final String VAST_LOAD_SUCCESS = "vast_load_success_%d";

    private static final String VAST_LOAD_FAILED = "vast_load_failed_%d";

    private static final String VAST_TEMPLATE = "vast_template";

    protected PlayerConfig playerConfig;

    protected AdsData mAdsData;

    protected LinearAdSlot linearAdSlot;

    protected CustomeVideoController customeVideoController;

    protected DefaultVideoController defaultVideoController;

    private View vastView;

    private Context context;

    private Activity activity;

    private VastListener listener;

    private FrameLayout linearAdView;

    private ProgressBar progressBar;

    private boolean isCustomVideoPlayer = false;

    private boolean isAdLoadWithAdsData = false;

    private boolean isTestAd = false;

    private PluginAdLayout parent;

    private PluginLayoutManager vastLayoutManager;

    public VastManager(Context context, Activity activity, PluginAdLayout parent, CordovaEventRunner manager,
        JSONObject json) {
        super();
        this.context = context;
        this.activity = activity;
        pluginListenerManager = manager;
        this.parent = parent;
        listener = new VastListener(pluginListenerManager, managerId);

        vastView = activity.getLayoutInflater().inflate(getTemplate(), null);

    }

    public void create(JSONObject initialProps) {
        vastLayoutManager = new PluginLayoutManager(parent, vastView,
            Converter.constructInitialPropsFromJSON(initialProps));
    }

    public void loadAd(JSONObject json, final Promise promise) throws JSONException {
        VastApplication.init(context, isTestAd);
        VastAdPlayer.getInstance().setAdViewStrategy((expectedHeight, expectedWidth, height, width) -> true);

        if (json.has("adParam")) {
            linearAdSlot = Converter.fromJSONObjectToLinearAdSlot(json.optJSONObject("adParam"));
        }
        if (json.has("playerConfig")) {
            playerConfig = Converter.fromJSONObjectToPlayerConfig(json.optJSONObject("playerConfig"));
        }
        if (json.has("isTestAd")) {
            isTestAd = json.getBoolean("isTestAd");
        }
        if (json.has("isAdLoadWithAdsData")) {
            isAdLoadWithAdsData = json.getBoolean("isAdLoadWithAdsData");
        }
        if (json.has("isCustomVideoPlayer")) {
            isCustomVideoPlayer = json.getBoolean("isCustomVideoPlayer");
        }

        linearAdView = (FrameLayout) handleResources("fl_linear_ad");
        progressBar = (ProgressBar) handleResources("progress");

        if (isCustomVideoPlayer) {
            customeVideoController = new CustomeVideoController(context);
            customeVideoController.setPlayerListener(listener.getVastPlayerListener());
            VastAdPlayer.getInstance().registerLinearAdView(linearAdView, customeVideoController);
        } else {
            defaultVideoController = new DefaultVideoController(context);
            VastAdPlayer.getInstance().registerLinearAdView(linearAdView, defaultVideoController);
        }

        VastAdPlayer.getInstance().setConfig(playerConfig);

        if (isAdLoadWithAdsData) {
            VastAdPlayer.getInstance().loadLinearAd(linearAdSlot, new RequestCallback() {
                @Override
                public void onAdsLoadedSuccess(AdsData adsData) {
                    Log.d(TAG, "onAdsLoadedSuccess :");
                    mAdsData = adsData;
                    listener.configureEventNameAndParamsThenSendEvent(VAST_LOAD_SUCCESS);
                    show();
                }

                @Override
                public void onAdsLoadFailed() {
                    Log.d(TAG, "onAdsLoadFailed :");
                    mAdsData = null;
                    listener.configureEventNameAndParamsThenSendEvent(VAST_LOAD_FAILED);
                }
            });
        } else {
            show();
        }
        promise.success();
    }

    void show() {
        if (linearAdSlot == null) {
            return;
        }
        if (mAdsData != null) {
            VastAdPlayer.getInstance()
                .playLinearAds(linearAdSlot, mAdsData, listener.getAdsRequestListener(linearAdView, progressBar));
        } else {
            if (linearAdSlot.getMaxAdPods() != 0) {
                VastAdPlayer.getInstance()
                    .startAdPods(linearAdSlot, listener.getAdsRequestListener(linearAdView, progressBar));
            } else {
                VastAdPlayer.getInstance()
                    .startLinearAd(linearAdSlot, listener.getAdsRequestListener(linearAdView, progressBar));
            }
        }
    }

    private View handleResources(String resourceName) {
        return vastView.findViewById(
            context.getResources().getIdentifier(resourceName, "id", context.getPackageName()));
    }

    private int getTemplate() {
        try {
            return context.getResources()
                .getIdentifier((String) VastManager.class.getDeclaredField("VAST_TEMPLATE").get(null), "layout",
                    context.getPackageName());
        } catch (NoSuchFieldException | IllegalAccessException e) {
            Log.e(TAG, e.getMessage());
            return -1;
        }
    }

    public void resume(JSONObject args, final Promise promise) {
        VastAdPlayer.getInstance().resume();
        promise.success();
    }

    public void pause(JSONObject args, final Promise promise) {
        VastAdPlayer.getInstance().pause();
        promise.success();
    }

    public void release(JSONObject args, final Promise promise) {
        if (linearAdView != null) {
            VastAdPlayer.getInstance().unregisterLinearAdView(linearAdView);
        }
        VastAdPlayer.getInstance().release();
        promise.success();
    }

    public void toggleMuteState(JSONObject json, final Promise promise) throws JSONException {
        Boolean isMute = json.getBoolean("isMute");
        if (isCustomVideoPlayer) {
            customeVideoController.toggleMuteState(isMute);
        } else {
            defaultVideoController.toggleMuteState(isMute);
        }
        promise.success();
    }

    public void startOrPause(final Promise promise) throws JSONException {
        if (isCustomVideoPlayer) {
            customeVideoController.startOrPause();
        } else {
            defaultVideoController.startOrPause();
        }
        promise.success();
    }

    public void scroll(JSONObject json, final Promise promise) {
        if (vastLayoutManager == null) {
            return;
        }
        vastLayoutManager.setChildPropsForScroll(json.optInt("scrolledX"), json.optInt("scrolledY"));
    }

    public void forceUpdateVastXAndY(JSONObject json, final Promise promise) {
        if (vastLayoutManager == null) {
            return;
        }
        vastLayoutManager.forceUpdateXAndY(json.optInt("scrolledX"), json.optInt("scrolledY"),
            json.optInt("pageXOffset"), json.optInt("pageYOffset"));
    }

    @Override
    public boolean hasLayout() {
        return true;
    }

    @Override
    public PluginLayoutManager getLayoutManager() {
        return vastLayoutManager;
    }
}
