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

package com.huawei.hms.cordova.ads.ad.instream;

import static android.view.ViewGroup.LayoutParams.MATCH_PARENT;

import android.app.Activity;
import android.content.Context;
import android.graphics.Color;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.widget.FrameLayout;

import com.huawei.hms.ads.AdParam;
import com.huawei.hms.ads.instreamad.InstreamAdLoader;
import com.huawei.hms.ads.instreamad.InstreamView;
import com.huawei.hms.cordova.ads.Converter;
import com.huawei.hms.cordova.ads.ad.PluginAbstractAdManager;
import com.huawei.hms.cordova.ads.basef.handler.CorPack;
import com.huawei.hms.cordova.ads.basef.handler.CordovaEventRunner;
import com.huawei.hms.cordova.ads.basef.handler.Promise;
import com.huawei.hms.cordova.ads.layout.InitialProps;
import com.huawei.hms.cordova.ads.layout.PluginAdLayout;
import com.huawei.hms.cordova.ads.layout.PluginLayoutManager;
import com.huawei.hms.cordova.ads.utils.ErrorCodes;
import com.huawei.hms.cordova.ads.utils.FileUtils;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Locale;

public class PluginRollAdManager extends PluginAbstractAdManager {

    private InstreamView instreamView;
    private PluginRollAdListener listener;
    private Context context;
    private PluginAdLayout parent;
    private InstreamAdLoader instreamAdLoader;
    private PluginLayoutManager instreamLayoutManager;
    private WebView webView;
    private FrameLayout frameLayout;
    private JSONObject initialProps;
    private Activity activity;
    private CorPack corPack;

    public PluginRollAdManager(Context context, Activity activity, PluginAdLayout parent, CordovaEventRunner manager,
        JSONObject rollAdLoaderParams, CorPack corPack) {
        super();
        pluginListenerManager = manager;
        instreamView = new InstreamView(context);
        this.context = context;
        this.activity = activity;
        this.parent = parent;
        listener = new PluginRollAdListener(pluginListenerManager, managerId);

        instreamAdLoader = new InstreamAdLoader.Builder(context, rollAdLoaderParams.optString("adId")).setTotalDuration(
            rollAdLoaderParams.optInt("totalDuration"))
            .setMaxCount(rollAdLoaderParams.optInt("maxDuration"))
            .setInstreamAdLoadListener(listener.getInstreamAdLoadListener())
            .build();
        this.corPack = corPack;
    }

    public void create(JSONObject initialProps) {
        this.initialProps = initialProps;
    }

    @Override
    public boolean hasLayout() {
        return true;
    }

    @Override
    public PluginLayoutManager getLayoutManager() {
        return instreamLayoutManager;
    }

    private String insertEventRegisterationFuncForWebview(String content) {
        content = "<script> const ROLL_AD_MEDIA_CHANGED = 'roll_ad_media_changed';\n"
            + "const ROLL_AD_MEDIA_PROGRESS = 'roll_ad_media_progress';\n"
            + "const ROLL_AD_MEDIA_START = 'roll_ad_media_start';\n"
            + "const ROLL_AD_MEDIA_PAUSE = 'roll_ad_media_pause';\n"
            + "const ROLL_AD_MEDIA_STOP = 'roll_ad_media_stop';\n"
            + "const ROLL_AD_MEDIA_COMPLETION = 'roll_ad_media_completion';\n"
            + "const ROLL_AD_MEDIA_ERROR = 'roll_ad_media_error';\n"
            + "const ROLL_AD_MEDIA_UNMUTE = 'roll_ad_media_unmute';\n"
            + "const ROLL_AD_MEDIA_MUTE = 'roll_ad_media_mute';" + "function on(eventName, callback)"
            + "{window[eventName + '_' +" + managerId + "] = " + "callback;} </script>\n" + content;

        return content;
    }

    private void setLayout(String file) {
        webView = new WebView(context);
        webView.getSettings().setJavaScriptEnabled(true);
        webView.getSettings().setSavePassword(false);
        webView.addJavascriptInterface(new InstreamAdJsInterface(), "RollAd");
        webView.setBackgroundColor(Color.TRANSPARENT);

        String content = FileUtils.readContent(TAG, context, file);

        String baseUrl = "file:///android_asset/" + file;
        webView.loadDataWithBaseURL(baseUrl, insertEventRegisterationFuncForWebview(content), "text/html", "UTF-8",
            null);

        frameLayout = new FrameLayout(context);
        frameLayout.setVisibility(View.GONE);
        frameLayout.setLayoutParams(new FrameLayout.LayoutParams(MATCH_PARENT, MATCH_PARENT));

        InitialProps props = Converter.constructInitialPropsFromJSON(initialProps);
        FrameLayout.LayoutParams lp1 = new FrameLayout.LayoutParams(MATCH_PARENT, MATCH_PARENT);
        lp1.setMargins(props.getMarginLeft(), props.getMarginTop(), props.getMarginRight(), props.getMarginBottom());
        instreamView.setLayoutParams(lp1);
        frameLayout.addView(instreamView);
        webView.setLayoutParams(lp1);
        frameLayout.addView(webView);

        listener.setWebView(webView);
        instreamLayoutManager = new PluginLayoutManager(parent, frameLayout, props);

    }

    public class InstreamAdJsInterface {

        public InstreamAdJsInterface() {
        }

        @JavascriptInterface
        public void pause() {
            corPack.startMethodExecution("hmsrollad-pause");
            instreamView.pause();
            corPack.sendSingleEvent("hmsrollad-pause");
        }

        @JavascriptInterface
        public void play() {
            corPack.startMethodExecution("hmsrollad-play");
            instreamView.play();
            corPack.sendSingleEvent("hmsrollad-play");
        }

        @JavascriptInterface
        public void stop() {
            corPack.startMethodExecution("hmsrollad-stop");

            instreamView.stop();
            corPack.sendSingleEvent("hmsrollad-stop");
        }

        @JavascriptInterface
        public void mute() {
            corPack.startMethodExecution("hmsrollad-mute");

            instreamView.mute();
            corPack.sendSingleEvent("hmsrollad-mute");
        }

        @JavascriptInterface
        public void unmute() {
            corPack.startMethodExecution("hmsrollad-unmute");

            instreamView.unmute();
            corPack.sendSingleEvent("hmsrollad-unmute");
        }

        @JavascriptInterface
        public void whyThisAd() {
            corPack.startMethodExecution("hmsrollad-whyThisAd");

            pluginListenerManager.sendEvent(String.format(Locale.ENGLISH, "roll_ad_why_this_ad_%d", managerId),
                new JSONArray().put(listener.getCurrentInstreamAd().getWhyThisAd()));
            corPack.sendSingleEvent("hmsrollad-whyThisAd");
        }

        @JavascriptInterface
        public void skip() {
            corPack.startMethodExecution("hmsrollad-skip");

            activity.runOnUiThread(() -> {
                frameLayout.setVisibility(View.GONE);
                if (instreamLayoutManager != null) {
                    instreamLayoutManager.removeChildView(frameLayout);
                }
                webView.destroy();
                instreamView.onClose();
                instreamView.destroy();
            });
            corPack.sendSingleEvent("hmsrollad-skip");
        }

        @JavascriptInterface
        public void onClick() {
            activity.runOnUiThread(() -> instreamView.performClick());
        }

        @JavascriptInterface
        public boolean isPlaying() {
            corPack.startMethodExecution("hmsrollad-isPlaying");
            boolean isPlaying = instreamView.isPlaying();
            corPack.sendSingleEvent("hmsrollad-isPlaying");
            return isPlaying;
        }

    }

    public void scroll(JSONObject json, final Promise promise) {
        if (instreamLayoutManager == null) {
            return;
        }
        instreamLayoutManager.setChildPropsForScroll(json.optInt("scrolledX"), json.optInt("scrolledY"));
    }

    public void forceUpdateRollXAndY(JSONObject json, final Promise promise) {
        if (instreamLayoutManager == null) {
            return;
        }
        instreamLayoutManager.forceUpdateXAndY(json.optInt("scrolledX"), json.optInt("scrolledY"),
            json.optInt("pageXOffset"), json.optInt("pageYOffset"));
    }

    public void loadAd(JSONObject json, final Promise promise) throws JSONException {
        setLayout(json.optString("file"));

        if (json.has("adParam")) {
            instreamAdLoader.loadAd(Converter.fromJsonObjectToAdParam(json.getJSONObject("adParam")));
        } else {
            instreamAdLoader.loadAd(new AdParam.Builder().build());
        }

        promise.success();
    }

    public void isLoading(JSONObject json, final Promise promise) {
        promise.success(instreamAdLoader.isLoading());
    }

    public void destroy(JSONObject json, final Promise promise) {
        activity.runOnUiThread(() -> {
            frameLayout.setVisibility(View.GONE);
            if (instreamLayoutManager != null) {
                instreamLayoutManager.removeChildView(frameLayout);
            }
            webView.destroy();
            instreamView.onClose();
            instreamView.destroy();
        });
        promise.success();
    }

    public void isPlaying(JSONObject json, final Promise promise) {
        promise.success(instreamView.isPlaying());
    }

    public void mute(JSONObject json, final Promise promise) {
        instreamView.mute();
        promise.success();
    }

    public void unmute(JSONObject json, final Promise promise) {
        instreamView.unmute();
        promise.success();
    }

    public void onClose(JSONObject json, final Promise promise) {
        instreamView.onClose();
        promise.success();
    }

    public void pause(JSONObject json, final Promise promise) {
        instreamView.pause();
        promise.success();
    }

    public void play(JSONObject json, final Promise promise) {
        instreamView.play();
        promise.success();
    }

    public void stop(JSONObject json, final Promise promise) {
        instreamView.stop();
        promise.success();
    }

    public void removeInstreamMediaChangeListener(JSONObject json, final Promise promise) {
        instreamView.removeInstreamMediaChangeListener();
        promise.success();
    }

    public void removeMediaMuteListener(JSONObject json, final Promise promise) {
        instreamView.removeMediaMuteListener();
        promise.success();
    }

    public void removeInstreamMediaStateListener(JSONObject json, final Promise promise) {
        instreamView.removeInstreamMediaStateListener();
        promise.success();
    }

    public void setInstreamAds(JSONObject json, final Promise promise) {
        if (listener.getInstreamAds() == null) {
            promise.error("There is no Roll Ad registered!");
            return;
        }
        instreamView.setInstreamAds(listener.getInstreamAds());
        frameLayout.setVisibility(View.VISIBLE);
        promise.success();
    }

    public void setInstreamMediaChangeListener(JSONObject json, final Promise promise) {
        instreamView.setInstreamMediaChangeListener(listener.getInstreamMediaChangeListener());
        promise.success();
    }

    public void setMediaMuteListener(JSONObject json, final Promise promise) {
        instreamView.setMediaMuteListener(listener.getMediaMuteListener());
        promise.success();
    }

    public void setInstreamMediaStateListener(JSONObject json, final Promise promise) {
        instreamView.setInstreamMediaStateListener(listener.getInstreamMediaStateListener());
        promise.success();
    }

    public void setOnInstreamAdClickListener(JSONObject json, final Promise promise) {
        instreamView.setOnInstreamAdClickListener(listener.getOnInstreamAdClickListener());
        promise.success();
    }

    public void getAdSource(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(listener.getCurrentInstreamAd(), promise, ErrorCodes.ROLL_AD_NOT_INITIALIZED);
        promise.success(listener.getCurrentInstreamAd().getAdSource());
    }

    public void getDuration(JSONObject json, final Promise promise) throws JSONException {
        checkIfObjectNullOrThrowError(listener.getCurrentInstreamAd(), promise, ErrorCodes.ROLL_AD_NOT_INITIALIZED);
        promise.success(new JSONObject().put("duration", listener.getCurrentInstreamAd().getDuration()));
    }

    public void getWhyThisAd(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(listener.getCurrentInstreamAd(), promise, ErrorCodes.ROLL_AD_NOT_INITIALIZED);
        promise.success(listener.getCurrentInstreamAd().getWhyThisAd());
    }

    public void getAdSign(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(listener.getCurrentInstreamAd(), promise, ErrorCodes.ROLL_AD_NOT_INITIALIZED);
        promise.success(listener.getCurrentInstreamAd().getAdSign());
    }

    public void isClicked(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(listener.getCurrentInstreamAd(), promise, ErrorCodes.ROLL_AD_NOT_INITIALIZED);
        promise.success(listener.getCurrentInstreamAd().isClicked());
    }

    public void isExpired(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(listener.getCurrentInstreamAd(), promise, ErrorCodes.ROLL_AD_NOT_INITIALIZED);
        promise.success(listener.getCurrentInstreamAd().isExpired());
    }

    public void isImageAd(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(listener.getCurrentInstreamAd(), promise, ErrorCodes.ROLL_AD_NOT_INITIALIZED);
        promise.success(listener.getCurrentInstreamAd().isImageAd());
    }

    public void isShown(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(listener.getCurrentInstreamAd(), promise, ErrorCodes.ROLL_AD_NOT_INITIALIZED);
        promise.success(listener.getCurrentInstreamAd().isShown());

    }

    public void isVideoAd(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(listener.getCurrentInstreamAd(), promise, ErrorCodes.ROLL_AD_NOT_INITIALIZED);
        promise.success(listener.getCurrentInstreamAd().isVideoAd());
    }

    public void getCallToAction(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(listener.getCurrentInstreamAd(), promise, ErrorCodes.ROLL_AD_NOT_INITIALIZED);
        promise.success(listener.getCurrentInstreamAd().getCallToAction());
    }

}
