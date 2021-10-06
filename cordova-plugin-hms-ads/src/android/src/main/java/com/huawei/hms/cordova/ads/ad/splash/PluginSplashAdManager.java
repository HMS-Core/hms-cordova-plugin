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

import static android.view.ViewGroup.LayoutParams.MATCH_PARENT;
import static android.view.ViewGroup.LayoutParams.WRAP_CONTENT;

import android.app.Dialog;
import android.content.Context;
import android.content.pm.ActivityInfo;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.view.View;
import android.webkit.WebView;
import android.widget.RelativeLayout;

import com.huawei.hms.ads.AdParam;
import com.huawei.hms.ads.AudioFocusType;
import com.huawei.hms.ads.splash.SplashAd;
import com.huawei.hms.ads.splash.SplashView;
import com.huawei.hms.cordova.ads.Converter;
import com.huawei.hms.cordova.ads.ad.PluginAbstractAdManager;
import com.huawei.hms.cordova.ads.basef.handler.CordovaEventRunner;
import com.huawei.hms.cordova.ads.basef.handler.Promise;
import com.huawei.hms.cordova.ads.layout.PluginLayoutManager;
import com.huawei.hms.cordova.ads.utils.FileUtils;

import org.json.JSONException;
import org.json.JSONObject;

public class PluginSplashAdManager extends PluginAbstractAdManager {
    private SplashView splashView;
    private PluginSplashAdListener listener;
    private Context context;
    private Dialog dialog = null;

    private RelativeLayout relativeLayout;
    private WebView webView;

    public PluginSplashAdManager(Context context, CordovaEventRunner manager) {
        super();
        this.context = context;

        splashView = new SplashView(context);
        splashView.setId(View.generateViewId());

        relativeLayout = new RelativeLayout(context);
        relativeLayout.setVisibility(View.GONE);

        pluginListenerManager = manager;
        listener = new PluginSplashAdListener(pluginListenerManager, managerId);
    }

    @Override
    public PluginLayoutManager getLayoutManager() {
        return null;
    }

    @Override
    public boolean hasLayout() {
        return false;
    }

    public void load(JSONObject json, final Promise promise) throws JSONException {
        if (!json.has("adParam")) {
            splashView.load(json.optString("adId"), json.optInt("orientation", ActivityInfo.SCREEN_ORIENTATION_USER),
                new AdParam.Builder().build(), listener.getSplashAdLoadListener());
        } else {
            splashView.load(json.optString("adId"), json.optInt("orientation", ActivityInfo.SCREEN_ORIENTATION_USER),
                Converter.fromJsonObjectToAdParam(json.optJSONObject("adParam")), listener.getSplashAdLoadListener());
        }

        if (webView == null) {
            webView = new WebView(context);
        }
        createSplashAdDialog(json.optString("logoAnchor", "bottom"));

        promise.success();
    }

    public void createSplashAdDialog(String anchor) {
        RelativeLayout.LayoutParams splashViewLayoutParams = new RelativeLayout.LayoutParams(WRAP_CONTENT,
            WRAP_CONTENT);
        RelativeLayout.LayoutParams webViewLayoutParams = new RelativeLayout.LayoutParams(MATCH_PARENT, WRAP_CONTENT);

        switch (anchor) {
            case "invisible":
                splashViewLayoutParams.addRule(RelativeLayout.ALIGN_PARENT_BOTTOM);
                webViewLayoutParams.addRule(RelativeLayout.END_OF, splashView.getId());
                break;
            case "top":
                splashViewLayoutParams.addRule(RelativeLayout.BELOW, webView.getId());
                webViewLayoutParams.addRule(RelativeLayout.ALIGN_PARENT_TOP);
                break;
            default:
                splashViewLayoutParams.addRule(RelativeLayout.ABOVE, webView.getId());
                webViewLayoutParams.addRule(RelativeLayout.ALIGN_PARENT_BOTTOM);
                break;
        }

        splashView.setLayoutParams(splashViewLayoutParams);
        relativeLayout.addView(splashView, splashViewLayoutParams);

        webView.setLayoutParams(webViewLayoutParams);
        relativeLayout.addView(webView, webViewLayoutParams);

        relativeLayout.setVisibility(View.VISIBLE);

        dialog = new Dialog(context);
        dialog.setContentView(relativeLayout);
        dialog.getWindow().setLayout(MATCH_PARENT, MATCH_PARENT);
        dialog.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        dialog.show();
    }

    public void pauseView(JSONObject json, final Promise promise) {
        splashView.pauseView();
        promise.success();
    }

    public void resumeView(JSONObject json, final Promise promise) {
        splashView.resumeView();
        promise.success();
    }

    public void destroyView(JSONObject json, final Promise promise) {
        splashView.destroyView();
        webView.destroy();
        dialog.dismiss();
        dialog.cancel();
        promise.success();
    }

    public void isLoading(JSONObject json, final Promise promise) {
        promise.success(splashView.isLoading());
    }

    public void isLoaded(JSONObject json, final Promise promise) {
        promise.success(splashView.isLoaded());
    }

    public void setLogo(JSONObject json, final Promise promise) {
        webView = new WebView(context);
        webView.setId(View.generateViewId());
        String file = json.optString("file");
        String content = FileUtils.readContent(TAG, context, file);
        String baseUrl = "file:///android_asset/" + file;
        webView.loadDataWithBaseURL(baseUrl, content, "text/html", "UTF-8", "about:blank");

        splashView.setLogo(webView, View.GONE);
        promise.success();
    }

    public void setAudioFocusType(JSONObject json, final Promise promise) {
        splashView.setAudioFocusType(json.optInt("audioFocusType", AudioFocusType.NOT_GAIN_AUDIO_FOCUS_WHEN_MUTE));
        promise.success();
    }

    public void setWideSloganResId(JSONObject json, final Promise promise) {
        splashView.setWideSloganResId(context.getResources()
            .getIdentifier(json.optString("wideSloganResId"), "drawable", context.getPackageName()));
        promise.success();
    }

    public void setSloganResId(JSONObject json, final Promise promise) {
        splashView.setSloganResId(
            context.getResources().getIdentifier(json.optString("sloganResId"), "drawable", context.getPackageName()));
        promise.success();
    }

    public void setAdDisplayListener(JSONObject json, final Promise promise) {
        splashView.setAdDisplayListener(listener.getSplashAdDisplayListener());
        promise.success();
    }

    public void preloadAd(JSONObject json, final Promise promise) throws JSONException {
        if (!json.has("adParam")) {
            SplashAd.preloadAd(context, json.optString("adId"),
                json.optInt("orientation", ActivityInfo.SCREEN_ORIENTATION_USER), new AdParam.Builder().build());
        } else {
            SplashAd.preloadAd(context, json.optString("adId"),
                json.optInt("orientation", ActivityInfo.SCREEN_ORIENTATION_USER),
                Converter.fromJsonObjectToAdParam(json.optJSONObject("adParam")));
        }
        promise.success();
    }

}
