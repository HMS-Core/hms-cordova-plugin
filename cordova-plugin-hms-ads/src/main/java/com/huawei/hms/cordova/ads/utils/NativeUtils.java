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

import static com.huawei.hms.cordova.ads.utils.CordovaUtils.rid;
import static com.huawei.hms.cordova.ads.utils.CordovaUtils.rlayout;

import android.util.Log;
import android.util.Pair;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.TextView;
import com.huawei.hms.ads.AdSize;
import com.huawei.hms.ads.AudioFocusType;
import com.huawei.hms.ads.VideoConfiguration;
import com.huawei.hms.ads.VideoOperator;
import com.huawei.hms.ads.nativead.DislikeAdListener;
import com.huawei.hms.ads.nativead.NativeAd;
import com.huawei.hms.ads.nativead.NativeAdConfiguration;
import com.huawei.hms.ads.nativead.NativeAdLoader;
import com.huawei.hms.ads.nativead.NativeView;
import com.huawei.hms.cordova.ads.helpers.Consumer;
import com.huawei.hms.cordova.ads.helpers.NativeViewProps;
import java.util.Map;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaWebView;
import org.json.JSONException;
import org.json.JSONObject;

public class NativeUtils {
    public static final String TAG = NativeUtils.class.getSimpleName();

    public static NativeView newView(CordovaInterface cordova, JSONObject json) {
        int layoutId = fromJSONObjectToTemplate(cordova, json);
        NativeView nativeView = (NativeView) cordova.getActivity().getLayoutInflater().inflate(layoutId, null);
        nativeView.setTitleView(nativeView.findViewById(rid(cordova, "ad_title")));
        nativeView.setMediaView(nativeView.findViewById(rid(cordova, "ad_media")));
        nativeView.setAdSourceView(nativeView.findViewById(rid(cordova, "ad_source")));
        nativeView.setCallToActionView(nativeView.findViewById(rid(cordova, "ad_call_to_action")));
        nativeView.setIconView(nativeView.findViewById(rid(cordova, "ad_icon")));
        nativeView.setDescriptionView(nativeView.findViewById(rid(cordova, "ad_description")));

        // Apply customizations
        nativeView.setBackgroundColor(CordovaUtils.parseColor(json, "bg"));

        return nativeView;
    }

    private static <T extends View> void setSafe(View view, Consumer<T> consumer) {
        if (view != null) {
            consumer.run((T) view);
        }
    }

    public static void plugNativeAd(CordovaInterface cordova, CordovaWebView webView, int objectId, NativeAd nativeAd, NativeView nativeView, JSONObject json) {
        nativeView.getMediaView().setMediaContent(nativeAd.getMediaContent());

        boolean hasTitle = null != nativeAd.getTitle();
        if (hasTitle) {
            setSafe(nativeView.getTitleView(), (TextView view) -> view.setText(nativeAd.getTitle()));
        }
        setSafe(nativeView.getDescriptionView(), (view) -> view.setVisibility(hasTitle ? View.VISIBLE : View.INVISIBLE));

        boolean hasCallToAction = null != nativeAd.getCallToAction();
        if (hasCallToAction) {
            setSafe(nativeView.getCallToActionView(), (Button view) -> view.setText(nativeAd.getCallToAction()));
        }
        setSafe(nativeView.getCallToActionView(), (view) -> view.setVisibility(hasCallToAction ? View.VISIBLE : View.INVISIBLE));

        boolean hasDescription = null != nativeAd.getDescription();
        if (hasDescription) {
            setSafe(nativeView.getDescriptionView(), (TextView view) -> view.setText(nativeAd.getDescription()));
        }
        setSafe(nativeView.getDescriptionView(), (view) -> view.setVisibility(hasDescription ? View.VISIBLE : View.INVISIBLE));

        boolean hasIcon = null != nativeAd.getIcon();
        if (hasIcon) {
            setSafe(nativeView.getIconView(), (ImageView view) -> view.setImageDrawable(nativeAd.getIcon().getDrawable()));
        }
        setSafe(nativeView.getIconView(), (view) -> view.setVisibility(hasIcon ? View.VISIBLE : View.GONE));

        boolean hasAdSource = null != nativeAd.getAdSource();
        if (hasAdSource) {
            setSafe(nativeView.getAdSourceView(), (TextView view) -> view.setText(nativeAd.getAdSource()));
        }
        setSafe(nativeView.getAdSourceView(), (view) -> view.setVisibility(hasAdSource ? View.VISIBLE : View.GONE));

        VideoOperator videoOperator = nativeAd.getVideoOperator();
        if (videoOperator.hasVideo()) {
            videoOperator.setVideoLifecycleListener(newVideoLifecycleListener(cordova, webView, objectId));
        }

        nativeView.setNativeAd(nativeAd);

        // Set the initial position
        NativeViewProps props = NativeUtils.fromJSONObjectToNativeViewProps(json);
        FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(props.width(), props.height());
        params.gravity = Gravity.TOP;
        params.setMargins(props.position().x, props.position().y, 0, 0);
        nativeView.setLayoutParams(params);
    }

    public static VideoOperator.VideoLifecycleListener newVideoLifecycleListener(CordovaInterface cordova, CordovaWebView webView, int objectId) {
        return new VideoOperator.VideoLifecycleListener() {
            @Override
            public void onVideoStart() {
                CordovaUtils.sendEvent(cordova, webView, JavaUtils.format("videoStart-%s", objectId));
            }

            @Override
            public void onVideoPlay() {
                CordovaUtils.sendEvent(cordova, webView, JavaUtils.format("videoPlay-%s", objectId));
            }

            @Override
            public void onVideoPause() {
                CordovaUtils.sendEvent(cordova, webView, JavaUtils.format("videoPause-%s", objectId));
            }

            @Override
            public void onVideoEnd() {
                CordovaUtils.sendEvent(cordova, webView, JavaUtils.format("videoEnd-%s", objectId));
            }

            @Override
            public void onVideoMute(boolean isMute) {
                CordovaUtils.sendEvent(cordova, webView, JavaUtils.format("videoMute-%s", objectId), CordovaUtils.keyValPair("isMute", isMute));
            }
        };
    }

    public static DislikeAdListener newAdDislikeListener(CordovaInterface cordova, CordovaWebView webView, int objectId) {
        return () -> {
            CordovaUtils.sendEvent(cordova, webView, JavaUtils.format("disliked-%s", objectId));
        };
    }

    public static NativeAd.NativeAdLoadedListener newNativeAdLoadedListener(CordovaInterface cordova, CordovaWebView webView, int objectId, Map<Integer, Pair<NativeView, NativeAd>> objects) {
        return nativeAd -> {
            Pair<NativeView, NativeAd> pair = objects.get(objectId);
            if (pair == null) {
                Log.e(TAG, "nativeAdLoadedListener :: pair is null");
                return;
            }

            objects.put(objectId, Pair.create(pair.first, nativeAd));
            nativeAd.setDislikeAdListener(NativeUtils.newAdDislikeListener(cordova, webView, objectId));

            CordovaUtils.sendEvent(cordova, webView, JavaUtils.format("nativeAdLoaded-%s", objectId));
        };
    }

    public static AdSize fromJSONObjectToAdSize(JSONObject json) {
        if (json == null) {
            return null;
        }

        return new AdSize(json.optInt("width"), json.optInt("height"));
    }

    public static int fromJSONObjectToTemplate(CordovaInterface cordova, JSONObject json) {
        String template = json.optString("template", "small");
        int resId = rlayout(cordova, "native_ad_small_template");
        if (template.equals("full")) {
            resId = rlayout(cordova, "native_ad_full_template");
        } else if (template.equals("banner")) {
            resId = rlayout(cordova, "native_ad_banner_template");
        } else if (template.equals("video")) {
            resId = rlayout(cordova, "native_ad_video_template");
        }
        return resId;

    }

    public static VideoConfiguration fromJSONObjectToVideoOptions(JSONObject json) {
        if (json == null) {
            return null;
        }

        return new VideoConfiguration.Builder()
                .setAudioFocusType(json.optInt("audioFocusType", AudioFocusType.NOT_GAIN_AUDIO_FOCUS_WHEN_MUTE))
                .setClickToFullScreenRequested(json.optBoolean("clickToFullScreenRequested", false))
                .setStartMuted(json.optBoolean("startMuted", false))
                .build();
    }

    public static NativeAdConfiguration fromJSONObjectToNativeAdConfiguration(JSONObject json) {
        if (json == null) {
            return null;
        }

        return new NativeAdConfiguration.Builder()
                .setAdSize(fromJSONObjectToAdSize(json.optJSONObject("adSize")))
                .setChoicesPosition(json.optInt("choicesPosition", NativeAdConfiguration.ChoicesPosition.TOP_LEFT))
                .setMediaAspect(json.optInt("mediaAspect", NativeAdConfiguration.MediaAspect.ASPECT_SQUARE))
                .setMediaDirection(json.optInt("mediaDirection", NativeAdConfiguration.Direction.PORTRAIT))
                .setReturnUrlsForImages(json.optBoolean("returnUrlsForImages", false))
                .setRequestCustomDislikeThisAd(json.optBoolean("requestCustomDislikeThisAd", false))
                .setRequestMultiImages(json.optBoolean("requestMultiImages", false))
                .setChoicesPosition(NativeAdConfiguration.ChoicesPosition.BOTTOM_RIGHT)
                .setVideoConfiguration(fromJSONObjectToVideoOptions(json.optJSONObject("videoConfiguration")))
                .build();
    }

    public static NativeViewProps fromJSONObjectToNativeViewProps(JSONObject json) {
        try {
            return new NativeViewProps()
                    .width(json.getInt("width"))
                    .height(json.getInt("height"))
                    .paddingLeft(json.getInt("paddingLeft"))
                    .paddingTop(json.getInt("paddingTop"))
                    .borderLeft(json.getInt("borderLeft"))
                    .borderTop(json.getInt("borderTop"))
                    .position(json);
        } catch (JSONException ex) {
            Log.e(TAG, "fromJSONObjectToNativeViewProps() :: JSONException " + ex.getMessage());
            return null;
        }
    }

    public static ViewGroup.LayoutParams fromJSONObjectToLayoutParams(JSONObject json, NativeView nativeView) {
        NativeViewProps props = NativeUtils.fromJSONObjectToNativeViewProps(json);
        FrameLayout.LayoutParams layoutParams = (FrameLayout.LayoutParams) nativeView.getLayoutParams();
        if (layoutParams == null) {
            Log.e(TAG, "layoutParams is null.");
            return null;
        }
        layoutParams.setMargins(props.position().x, props.position().y, 0, 0);
        return layoutParams;
    }

    public static NativeAdLoader fromJSONObjectToNativeAdLoader(CordovaInterface cordova, CordovaWebView webView, int id, Map<Integer, Pair<NativeView, NativeAd>> nativeViews, JSONObject json) {
        return new NativeAdLoader.Builder(cordova.getContext(), json.optString("adId"))
                .setNativeAdLoadedListener(NativeUtils.newNativeAdLoadedListener(cordova, webView, id, nativeViews))
                .setAdListener(AdUtils.newAdListener(cordova, webView, id))
                .setNativeAdOptions(NativeUtils.fromJSONObjectToNativeAdConfiguration(json.optJSONObject("nativeAdOptions")))
                .build();
    }
}
