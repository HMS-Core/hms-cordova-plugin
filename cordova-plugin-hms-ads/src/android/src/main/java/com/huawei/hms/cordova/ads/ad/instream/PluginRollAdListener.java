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

import android.util.Log;
import android.webkit.WebView;

import com.huawei.hms.ads.MediaMuteListener;
import com.huawei.hms.ads.instreamad.InstreamAd;
import com.huawei.hms.ads.instreamad.InstreamAdLoadListener;
import com.huawei.hms.ads.instreamad.InstreamMediaChangeListener;
import com.huawei.hms.ads.instreamad.InstreamMediaStateListener;
import com.huawei.hms.ads.instreamad.InstreamView;
import com.huawei.hms.cordova.ads.Converter;
import com.huawei.hms.cordova.ads.ad.PluginAbstractAdListener;
import com.huawei.hms.cordova.ads.basef.handler.CordovaEventRunner;
import com.huawei.hms.cordova.ads.utils.ErrorCodes;

import org.json.JSONArray;
import org.json.JSONException;

import java.util.List;
import java.util.Locale;

public class PluginRollAdListener extends PluginAbstractAdListener {
    private static final String TAG = PluginRollAdListener.class.getSimpleName();
    private static final String ROLL_AD_LOAD_FAILED = "roll_ad_load_failed_%d";
    private static final String ROLL_AD_LOADED = "roll_ad_loaded_%d";
    private static final String ROLL_AD_MEDIA_CHANGED = "roll_ad_media_changed_%d";
    private static final String ROLL_AD_CLICKED = "roll_ad_clicked_%d";
    private static final String ROLL_AD_MEDIA_PROGRESS = "roll_ad_media_progress_%d";
    private static final String ROLL_AD_MEDIA_START = "roll_ad_media_start_%d";
    private static final String ROLL_AD_MEDIA_PAUSE = "roll_ad_media_pause_%d";
    private static final String ROLL_AD_MEDIA_STOP = "roll_ad_media_stop_%d";
    private static final String ROLL_AD_MEDIA_COMPLETION = "roll_ad_media_completion_%d";
    private static final String ROLL_AD_MEDIA_ERROR = "roll_ad_media_error_%d";
    private static final String ROLL_AD_MEDIA_UNMUTE = "roll_ad_media_unmute_%d";
    private static final String ROLL_AD_MEDIA_MUTE = "roll_ad_media_mute_%d";

    private List<InstreamAd> instreamAds = null;
    private InstreamAd currentInstreamAd = null;
    private WebView webView = null;

    public PluginRollAdListener(CordovaEventRunner listenerManager, int objectId) {
        super(listenerManager, objectId);
    }

    public void setWebView(WebView webView) {
        this.webView = webView;
    }

    public List<InstreamAd> getInstreamAds() {
        return instreamAds;
    }

    public InstreamAd getCurrentInstreamAd() {
        return currentInstreamAd;
    }

    public InstreamAdLoadListener getInstreamAdLoadListener() {
        return new InstreamAdLoadListener() {
            @Override
            public void onAdLoaded(List<InstreamAd> list) {
                try {
                    instreamAds = list;
                    configureEventNameAndParamsThenSendEvent(PluginRollAdListener.ROLL_AD_LOADED,
                        Converter.fromInstreamAdListToJson(list));
                } catch (JSONException e) {
                    configureEventNameAndParamsThenSendEvent(PluginRollAdListener.ROLL_AD_LOADED,
                        new JSONArray().put(e).put(e.getMessage()));
                }
            }

            @Override
            public void onAdFailed(int i) {
                configureEventNameAndParamsThenSendEvent(PluginRollAdListener.ROLL_AD_LOAD_FAILED,
                    ErrorCodes.fromCode(i).toJson());
            }
        };
    }

    public InstreamMediaChangeListener getInstreamMediaChangeListener() {
        return new InstreamMediaChangeListener() {
            @Override
            public void onSegmentMediaChange(InstreamAd instreamAd) {
                currentInstreamAd = instreamAd;

                try {
                    sendMediaStateEventToHtml(webView, PluginRollAdListener.ROLL_AD_MEDIA_CHANGED,
                        Converter.fromInstreamAdToJson(instreamAd));
                    configureEventNameAndParamsThenSendEvent(PluginRollAdListener.ROLL_AD_MEDIA_CHANGED,
                        Converter.fromInstreamAdToJson(instreamAd));
                } catch (JSONException e) {
                    configureEventNameAndParamsThenSendEvent(PluginRollAdListener.ROLL_AD_MEDIA_CHANGED,
                        new JSONArray().put(e).put(e.getMessage()));
                }
            }
        };
    }

    public void sendMediaStateEventToHtml(WebView webView, String eventName, Object... args) {
        String event = String.format(Locale.ENGLISH, eventName, objId);
        StringBuilder builder = new StringBuilder().append("if(window['")
            .append(event)
            .append("'] != undefined) " + "window['")
            .append(event)
            .append("'](");

        if (args.length <= 0) {
            webView.evaluateJavascript(builder.append(");").toString(), null);
            return;
        }
        for (Object arg : args) {
            builder.append(arg).append(",");
        }

        builder.deleteCharAt(builder.length() - 1).append(");");
        if (webView != null) {
            webView.evaluateJavascript(builder.toString(), null);
        } else {
            Log.e(TAG, "Roll ad not initilized!");
        }
    }

    public InstreamMediaStateListener getInstreamMediaStateListener() {
        return new InstreamMediaStateListener() {
            @Override
            public void onMediaProgress(int i, int i1) {
                if (webView != null && getCurrentInstreamAd() != null) {
                    sendMediaStateEventToHtml(webView, PluginRollAdListener.ROLL_AD_MEDIA_PROGRESS,
                        (int) getCurrentInstreamAd().getDuration(), i, i1);
                }
                configureEventNameAndParamsThenSendEvent(PluginRollAdListener.ROLL_AD_MEDIA_PROGRESS, i, i1);
            }

            @Override
            public void onMediaStart(int i) {
                if (webView != null && getCurrentInstreamAd() != null) {
                    sendMediaStateEventToHtml(webView, PluginRollAdListener.ROLL_AD_MEDIA_START,
                        (int) getCurrentInstreamAd().getDuration(), i);
                }
                configureEventNameAndParamsThenSendEvent(PluginRollAdListener.ROLL_AD_MEDIA_START, i);
            }

            @Override
            public void onMediaPause(int i) {
                if (webView != null && getCurrentInstreamAd() != null) {
                    sendMediaStateEventToHtml(webView, PluginRollAdListener.ROLL_AD_MEDIA_PAUSE,
                        (int) getCurrentInstreamAd().getDuration(), i);
                }
                configureEventNameAndParamsThenSendEvent(PluginRollAdListener.ROLL_AD_MEDIA_PAUSE, i);

            }

            @Override
            public void onMediaStop(int i) {
                if (webView != null && getCurrentInstreamAd() != null) {

                    sendMediaStateEventToHtml(webView, PluginRollAdListener.ROLL_AD_MEDIA_STOP,
                        (int) getCurrentInstreamAd().getDuration(), i);
                }
                configureEventNameAndParamsThenSendEvent(PluginRollAdListener.ROLL_AD_MEDIA_STOP, i);

            }

            @Override
            public void onMediaCompletion(int i) {
                if (webView != null && getCurrentInstreamAd() != null) {

                    sendMediaStateEventToHtml(webView, PluginRollAdListener.ROLL_AD_MEDIA_COMPLETION,
                        (int) getCurrentInstreamAd().getDuration(), i);
                }
                configureEventNameAndParamsThenSendEvent(PluginRollAdListener.ROLL_AD_MEDIA_COMPLETION, i);
            }

            @Override
            public void onMediaError(int i, int i1, int i2) {
                if (webView != null && getCurrentInstreamAd() != null) {

                    sendMediaStateEventToHtml(webView, PluginRollAdListener.ROLL_AD_MEDIA_ERROR,
                        (int) getCurrentInstreamAd().getDuration(), i, i1, i2);
                }
                configureEventNameAndParamsThenSendEvent(PluginRollAdListener.ROLL_AD_MEDIA_ERROR, i, i1, i2);
            }
        };
    }

    public InstreamView.OnInstreamAdClickListener getOnInstreamAdClickListener() {
        return () -> configureEventNameAndParamsThenSendEvent(PluginRollAdListener.ROLL_AD_CLICKED);
    }

    public MediaMuteListener getMediaMuteListener() {
        return new MediaMuteListener() {
            @Override
            public void onMute() {
                sendMediaStateEventToHtml(webView, PluginRollAdListener.ROLL_AD_MEDIA_MUTE);
                configureEventNameAndParamsThenSendEvent(PluginRollAdListener.ROLL_AD_MEDIA_MUTE);
            }

            @Override
            public void onUnmute() {
                sendMediaStateEventToHtml(webView, PluginRollAdListener.ROLL_AD_MEDIA_UNMUTE);
                configureEventNameAndParamsThenSendEvent(PluginRollAdListener.ROLL_AD_MEDIA_UNMUTE);
            }
        };
    }

}
