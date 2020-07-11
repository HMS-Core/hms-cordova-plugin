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

import static com.huawei.hms.cordova.ads.utils.CordovaUtils.rdraw;
import static com.huawei.hms.cordova.ads.utils.CordovaUtils.resId;
import static com.huawei.hms.cordova.ads.utils.CordovaUtils.rid;
import static com.huawei.hms.cordova.ads.utils.CordovaUtils.rlayout;

import android.app.Dialog;
import android.graphics.Color;
import android.view.Display;
import android.view.View;
import android.view.WindowManager;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;
import com.huawei.hms.ads.AudioFocusType;
import com.huawei.hms.ads.splash.SplashAd;
import com.huawei.hms.ads.splash.SplashAdDisplayListener;
import com.huawei.hms.ads.splash.SplashView;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaWebView;
import org.json.JSONException;
import org.json.JSONObject;

public class SplashUtils {
    public static SplashView.SplashAdLoadListener getLoadListener(final CordovaInterface cordova, final CordovaWebView webView, int objectId) {
        return new SplashView.SplashAdLoadListener() {
            @Override
            public void onAdFailedToLoad(int errorCode) {
                CordovaUtils.sendEvent(cordova, webView, String.format("loadFailed-%s", objectId), CordovaUtils.keyValPair("errorCode", errorCode));
            }

            @Override
            public void onAdLoaded() {
                CordovaUtils.sendEvent(cordova, webView, String.format("loaded-%s", objectId));
            }

            @Override
            public void onAdDismissed() {
                CordovaUtils.sendEvent(cordova, webView, String.format("dismissed-%s", objectId));
            }
        };
    }

    public static SplashAdDisplayListener getDisplayListener(CordovaInterface cordova, CordovaWebView webView, int objectId) {
        return new SplashAdDisplayListener() {
            @Override
            public void onAdShowed() {
                CordovaUtils.sendEvent(cordova, webView, String.format("showed-%s", objectId));
            }

            @Override
            public void onAdClick() {
                CordovaUtils.sendEvent(cordova, webView, String.format("click-%s", objectId));
            }
        };
    }

    public static SplashView createSplashView(CordovaInterface cordova, CordovaWebView webView, int objectId, JSONObject json) {
        Display display = cordova.getActivity().getWindowManager().getDefaultDisplay();

        // Dialog
        Dialog splashDialog = new Dialog(cordova.getContext(), android.R.style.Theme_Translucent_NoTitleBar);
        splashDialog.setCancelable(false);
        splashDialog.getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);

        // Layout
        RelativeLayout splashLayout = (RelativeLayout) cordova.getActivity().getLayoutInflater().inflate(rlayout(cordova, "splash_ad"), null);
        splashLayout.setLayoutParams(new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.MATCH_PARENT));
        splashLayout.setMinimumHeight(display.getHeight());
        splashLayout.setMinimumWidth(display.getWidth());

        splashDialog.setContentView(splashLayout);

        // SplashView
        SplashView splashView = splashLayout.findViewById(rid(cordova, "splash_ad_view"));
        splashView.setTag(splashDialog); // Store a pointer to splashDialog
        splashView.setAdDisplayListener(SplashUtils.getDisplayListener(cordova, webView, objectId));
        splashView.setLogoResId(resId(cordova, "mipmap", "ic_launcher"));

        splashView.setSloganResId(rdraw(cordova, json.optString("sloganResId")));
        splashView.setWideSloganResId(rdraw(cordova, json.optString("wideSloganResId")));
        splashView.setAudioFocusType(json.optInt("audioFocusType", AudioFocusType.NOT_GAIN_AUDIO_FOCUS_WHEN_MUTE));
        //  Set a logo image.
        // TODO: splashView.setLogoResId(R.mipmap.ic_launcher);
        // Set logo description.
        // TODO: splashView.setMediaNameResId(R.string.media_name);

        JSONObject jsonLogo = CordovaUtils.optJSONObject(json, "logo", new JSONObject());

        //
        // logo settings
        //
        int logoLayoutId = CordovaUtils.rid(cordova, "logo");
        RelativeLayout layoutLogo = splashLayout.findViewById(logoLayoutId);
        if (jsonLogo.optString("anchor", "bottom").equals("top")) {
            RelativeLayout.LayoutParams logoLayoutLP = (RelativeLayout.LayoutParams) layoutLogo.getLayoutParams();
            RelativeLayout.LayoutParams splashViewLP = (RelativeLayout.LayoutParams) splashView.getLayoutParams();

            splashViewLP.addRule(RelativeLayout.BELOW, logoLayoutId);
            splashViewLP.removeRule(RelativeLayout.ABOVE);
            logoLayoutLP.removeRule(RelativeLayout.ALIGN_PARENT_BOTTOM);
        }

        // texts
        ((TextView)splashLayout.findViewById(rid(cordova, "txt_owner"))).setText(jsonLogo.optString("owner", ""));
        ((TextView)splashLayout.findViewById(rid(cordova, "txt_copyright"))).setText(jsonLogo.optString("copyright", ""));

        // color
        layoutLogo.setBackgroundColor(CordovaUtils.parseColor(jsonLogo, "bg", Color.WHITE));

        if (jsonLogo.optBoolean("hidden", false)) {
            layoutLogo.setVisibility(View.GONE);
        }

        return splashView;
    }

    public static void preloadAdIfRequested(CordovaInterface cordova, JSONObject json) throws JSONException {
        if (json.optBoolean("preload", false)) {
            SplashAd.preloadAd(
                    cordova.getContext(),
                    json.getString("adId"),
                    json.getInt("orientation"),
                    AdUtils.fromJSONObjectToAdParam(json.optJSONObject("ad"))
            );
        }
    }
}
