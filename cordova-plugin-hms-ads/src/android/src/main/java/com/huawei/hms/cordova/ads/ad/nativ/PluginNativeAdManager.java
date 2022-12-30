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

package com.huawei.hms.cordova.ads.ad.nativ;

import android.app.Activity;
import android.content.Context;
import android.graphics.Color;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

import com.huawei.hms.ads.AdParam;
import com.huawei.hms.ads.AppDownloadButton;
import com.huawei.hms.ads.AppDownloadButtonStyle;
import com.huawei.hms.ads.VideoOperator;
import com.huawei.hms.ads.nativead.MediaView;
import com.huawei.hms.ads.nativead.NativeAd;
import com.huawei.hms.ads.nativead.NativeAdConfiguration;
import com.huawei.hms.ads.nativead.NativeAdLoader;
import com.huawei.hms.ads.nativead.NativeView;
import com.huawei.hms.cordova.ads.Converter;
import com.huawei.hms.cordova.ads.ad.PluginAbstractAdManager;
import com.huawei.hms.cordova.ads.basef.handler.CordovaEventRunner;
import com.huawei.hms.cordova.ads.basef.handler.Promise;
import com.huawei.hms.cordova.ads.layout.PluginAdLayout;
import com.huawei.hms.cordova.ads.layout.PluginLayoutManager;
import com.huawei.hms.cordova.ads.utils.ErrorAndStateCodes;

import org.json.JSONException;
import org.json.JSONObject;

public class PluginNativeAdManager extends PluginAbstractAdManager {
    private static final String NATIVE_AD_SMALL_TEMPLATE = "native_ad_small_template";

    private static final String NATIVE_AD_FULL_TEMPLATE = "native_ad_full_template";

    private static final String NATIVE_AD_BANNER_TEMPLATE = "native_ad_banner_template";

    private static final String NATIVE_AD_VIDEO_TEMPLATE = "native_ad_video_template";

    private static final String NATIVE_AD_WITH_APP_DOWNLOAD_BTN_TEMPLATE = "native_ad_with_app_download_btn_template";

    public static final String NATIVE_BUTTON_ROUNDED_CORNERS_SHAPE = "native_button_rounded_corners_shape";

    private NativeAd nativeAd;

    private NativeView nativeView;

    private PluginNativeAdListener listener;

    private Context context;

    private NativeAdLoader nativeAdLoader;

    private PluginLayoutManager nativeLayoutManager;

    private PluginAdLayout parent;

    private VideoOperator videoOperator = null;

    private NativeAdConfiguration nativeAdConfiguration = null;

    private AppDownloadButton appDownloadButton;

    public PluginNativeAdManager(Context context, Activity activity, PluginAdLayout parent, CordovaEventRunner manager,
        JSONObject json) {
        super();
        this.context = context;
        pluginListenerManager = manager;
        this.parent = parent;
        listener = new PluginNativeAdListener(pluginListenerManager, managerId);

        nativeView = (NativeView) activity.getLayoutInflater().inflate(fromJSONObjectToTemplate(json), null);
        nativeView.setTitleView(handleResources("ad_title"));
        nativeView.setMediaView((MediaView) handleResources("ad_media"));
        nativeView.setAdSourceView(handleResources("ad_source"));
        nativeView.setCallToActionView(handleResources("ad_call_to_action"));
        nativeView.setIconView(handleResources("ad_icon"));
        nativeView.setDescriptionView(handleResources("ad_description"));
        appDownloadButton = (AppDownloadButton) handleResources("app_download_btn");

        // Apply customizations
        nativeView.setBackgroundColor(Color.parseColor(json.optString("bgColor", "WHITE")));

    }

    private int fromJSONObjectToTemplate(final JSONObject json) {
        try {
            return context.getResources()
                .getIdentifier((String) PluginNativeAdManager.class.getDeclaredField(
                    json.optString("template", "NATIVE_AD_SMALL_TEMPLATE")).get(null), "layout",
                    context.getPackageName());
        } catch (NoSuchFieldException | IllegalAccessException e) {
            Log.e(TAG, e.getMessage());
            return -1;
        }
    }

    private View handleResources(String resourceName) {
        return nativeView.findViewById(
            context.getResources().getIdentifier(resourceName, "id", context.getPackageName()));
    }

    public void create(JSONObject initialProps) {
        nativeLayoutManager = new PluginLayoutManager(parent, nativeView,
            Converter.constructInitialPropsFromJSON(initialProps));
    }

    @Override
    public boolean hasLayout() {
        return true;
    }

    @Override
    public PluginLayoutManager getLayoutManager() {
        return nativeLayoutManager;
    }

    public void scroll(JSONObject json, final Promise promise) {
        if (nativeLayoutManager == null) {
            return;
        }
        nativeLayoutManager.setChildPropsForScroll(json.optInt("scrolledX"), json.optInt("scrolledY"));
    }

    public void forceUpdateNativeXAndY(JSONObject json, final Promise promise) {
        if (nativeLayoutManager == null) {
            return;
        }
        nativeLayoutManager.forceUpdateXAndY(json.optInt("scrolledX"), json.optInt("scrolledY"),
            json.optInt("pageXOffset"), json.optInt("pageYOffset"));
    }

    public void loadAd(JSONObject json, final Promise promise) throws JSONException {
        nativeAdConfiguration = Converter.setNativeAdOptions(json.optJSONObject("nativeAdOptions"));
        nativeAdLoader = new NativeAdLoader.Builder(context, json.optString("adId")).setNativeAdLoadedListener(
            listener.getNativeAdLoadedListener())
            .setAdListener(listener.getAdListener())
            .setNativeAdOptions(nativeAdConfiguration)
            .build();

        if (json.has("adParam")) {
            nativeAdLoader.loadAd(Converter.fromJsonObjectToAdParam(json.optJSONObject("adParam")));
        } else {
            nativeAdLoader.loadAd(new AdParam.Builder().build());
        }

        promise.success();
    }

    public void show(JSONObject json, final Promise promise) {
        nativeAd = listener.getNativeAd();
        if (nativeAd.getTitle() != null && nativeView.getTitleView() != null) {
            ((TextView) nativeView.getTitleView()).setText(nativeAd.getTitle());
            nativeView.getTitleView().setVisibility(View.VISIBLE);
        }

        if (nativeAd.getCallToAction() != null && nativeView.getCallToActionView() != null) {
            ((TextView) nativeView.getCallToActionView()).setText(nativeAd.getCallToAction());
            nativeView.getCallToActionView().setVisibility(View.VISIBLE);
        }

        if (nativeAd.getDescription() != null && nativeView.getDescriptionView() != null) {
            ((TextView) nativeView.getDescriptionView()).setText(nativeAd.getDescription());
            nativeView.getDescriptionView().setVisibility(View.VISIBLE);
        }

        if (nativeAd.getIcon() != null && nativeView.getIconView() != null) {
            ((ImageView) nativeView.getIconView()).setImageDrawable(nativeAd.getIcon().getDrawable());
            nativeView.getIconView().setVisibility(View.VISIBLE);
        }

        videoOperator = nativeAd.getVideoOperator();
        if (videoOperator.hasVideo()) {
            videoOperator.setVideoLifecycleListener(listener.getVideoLifecycleListener());
        }

        nativeView.setNativeAd(nativeAd);
        nativeView.getMediaView().setMediaContent(nativeAd.getMediaContent());
        nativeView.getMediaView().setVisibility(View.VISIBLE);

        appDownloadButton.setAppDownloadButtonStyle(new MyAppDownloadStyle(context));
        if (nativeView.register(appDownloadButton)) {
            appDownloadButton.setVisibility(View.VISIBLE);
            appDownloadButton.refreshAppStatus();
            nativeView.getCallToActionView().setVisibility(View.GONE);
        } else {
            appDownloadButton.setVisibility(View.GONE);
            nativeView.getCallToActionView().setVisibility(View.VISIBLE);
        }
        promise.success();
    }

    private static class MyAppDownloadStyle extends AppDownloadButtonStyle {

        public MyAppDownloadStyle(Context context) {
            super(context);
            normalStyle.setTextColor(Color.parseColor("WHITE"));
            normalStyle.setBackground(context.getResources().getDrawable(getDrawableId(context)));
            processingStyle.setTextColor(Color.parseColor("BLACK"));
        }

        private int getDrawableId(Context context) {
            try {
                return context.getResources().getIdentifier((String) PluginNativeAdManager.class.getDeclaredField(
                    "NATIVE_BUTTON_ROUNDED_CORNERS_SHAPE").get(null), "drawable",
                    context.getPackageName());
            } catch (NoSuchFieldException | IllegalAccessException e) {
                Log.e("PluginNativeAdManager", e.getMessage());
                return -1;
            }
        }
    }

    public void videoOperatorGetAspectRatio(JSONObject json, final Promise promise) throws JSONException {
        checkIfObjectNullOrThrowError(videoOperator, promise, ErrorAndStateCodes.VIDEO_OPERATOR_NOT_INITIALIZED);
        promise.success(new JSONObject().put("videoOperatorGetAspectRatio", videoOperator.getAspectRatio()));
    }

    public void videoOperatorHasVideo(JSONObject json, final Promise promise) throws JSONException {
        checkIfObjectNullOrThrowError(videoOperator, promise, ErrorAndStateCodes.VIDEO_OPERATOR_NOT_INITIALIZED);
        promise.success(videoOperator.hasVideo());
    }

    public void videoOperatorIsCustomizeOperateEnabled(JSONObject json, final Promise promise) throws JSONException {
        checkIfObjectNullOrThrowError(videoOperator, promise, ErrorAndStateCodes.VIDEO_OPERATOR_NOT_INITIALIZED);
        promise.success(videoOperator.isCustomizeOperateEnabled());
    }

    public void videoOperatorIsMuted(JSONObject json, final Promise promise) throws JSONException {
        checkIfObjectNullOrThrowError(videoOperator, promise, ErrorAndStateCodes.VIDEO_OPERATOR_NOT_INITIALIZED);
        promise.success(videoOperator.isMuted());
    }

    public void videoOperatorMute(JSONObject json, final Promise promise) throws JSONException {
        checkIfObjectNullOrThrowError(videoOperator, promise, ErrorAndStateCodes.VIDEO_OPERATOR_NOT_INITIALIZED);
        videoOperator.mute(json.optBoolean("mute"));
        promise.success();
    }

    public void videoOperatorPause(JSONObject json, final Promise promise) throws JSONException {
        checkIfObjectNullOrThrowError(videoOperator, promise, ErrorAndStateCodes.VIDEO_OPERATOR_NOT_INITIALIZED);
        videoOperator.pause();
        promise.success();
    }

    public void videoOperatorPlay(JSONObject json, final Promise promise) throws JSONException {
        checkIfObjectNullOrThrowError(videoOperator, promise, ErrorAndStateCodes.VIDEO_OPERATOR_NOT_INITIALIZED);
        videoOperator.play();
        promise.success();
    }

    public void videoOperatorStop(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(videoOperator, promise, ErrorAndStateCodes.VIDEO_OPERATOR_NOT_INITIALIZED);
        videoOperator.stop();
        promise.success();
    }

    public void getNativeAdConfiguration(JSONObject json, final Promise promise) throws JSONException {
        checkIfObjectNullOrThrowError(nativeAdConfiguration, promise,
            ErrorAndStateCodes.NATIVE_AD_CONFIGURATION_NOT_INITIALIZED);
        promise.success(Converter.fromNativeAdConfigurationToJson(nativeAdConfiguration));
    }

    public void isLoading(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(nativeAdLoader, promise, ErrorAndStateCodes.NATIVE_AD_LOADER_NOT_INITIALIZED);
        promise.success(nativeAdLoader.isLoading());
    }

    public void destroy(JSONObject json, final Promise promise) {
        if (nativeLayoutManager != null) {
            nativeLayoutManager.removeChildView(nativeView);
        }
        nativeView.destroy();
        if (nativeAd != null) {
            nativeAd.destroy();
        }
        promise.success();
    }

    public void dislikeAd(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(nativeAd, promise, ErrorAndStateCodes.NATIVE_AD_NOT_INITIALIZED);
        nativeAd.dislikeAd(() -> json.optString("dislikeAdReason"));
        promise.success();
    }

    public void setAllowCustomClick(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(nativeAd, promise, ErrorAndStateCodes.NATIVE_AD_NOT_INITIALIZED);
        nativeAd.setAllowCustomClick();
        promise.success();
    }

    public void getAdSource(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(nativeAd, promise, ErrorAndStateCodes.NATIVE_AD_NOT_INITIALIZED);
        promise.success(nativeAd.getAdSource());
    }

    public void getDescription(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(nativeAd, promise, ErrorAndStateCodes.NATIVE_AD_NOT_INITIALIZED);
        promise.success(nativeAd.getDescription());
    }

    public void getCallToAction(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(nativeAd, promise, ErrorAndStateCodes.NATIVE_AD_NOT_INITIALIZED);
        promise.success(nativeAd.getCallToAction());
    }

    public void getDislikeAdReasons(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(nativeAd, promise, ErrorAndStateCodes.NATIVE_AD_NOT_INITIALIZED);
        promise.success(Converter.fromDislikeAdReasonsToJson(nativeAd.getDislikeAdReasons()));
    }

    public void isCustomClickAllowed(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(nativeAd, promise, ErrorAndStateCodes.NATIVE_AD_NOT_INITIALIZED);
        boolean result = nativeAd.isCustomClickAllowed();
        promise.success(result);
    }

    public void isCustomDislikeThisAdEnabled(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(nativeAd, promise, ErrorAndStateCodes.NATIVE_AD_NOT_INITIALIZED);
        promise.success(nativeAd.isCustomDislikeThisAdEnabled());

    }

    public void recordClickEvent(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(nativeAd, promise, ErrorAndStateCodes.NATIVE_AD_NOT_INITIALIZED);
        nativeAd.recordClickEvent();
        promise.success();
    }

    public void recordImpressionEvent(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(nativeAd, promise, ErrorAndStateCodes.NATIVE_AD_NOT_INITIALIZED);
        Bundle impressionEvent = Converter.fromJsonObjectToBundle(json);
        boolean isRecordImpressionEvent = nativeAd.recordImpressionEvent(impressionEvent);
        promise.success(isRecordImpressionEvent);
    }

    public void getUniqueId(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(nativeAd, promise, ErrorAndStateCodes.NATIVE_AD_NOT_INITIALIZED);
        promise.success(nativeAd.getUniqueId());
    }

    public void setDislikeAdListener(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(nativeAd, promise, ErrorAndStateCodes.NATIVE_AD_NOT_INITIALIZED);
        nativeAd.setDislikeAdListener(listener.getDislikeAdListener());
        promise.success();
    }

    public void gotoWhyThisAdPage(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(nativeAd, promise, ErrorAndStateCodes.NATIVE_AD_NOT_INITIALIZED);
        if (!json.optBoolean("useView", false)) {
            nativeAd.gotoWhyThisAdPage(context);
        } else {
            nativeView.gotoWhyThisAdPage();
        }
        promise.success();
    }

    public void getWhyThisAd(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(nativeAd, promise, ErrorAndStateCodes.NATIVE_AD_NOT_INITIALIZED);
        promise.success(nativeAd.getWhyThisAd());
    }

    public void getAdSign(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(nativeAd, promise, ErrorAndStateCodes.NATIVE_AD_NOT_INITIALIZED);
        promise.success(nativeAd.getAdSign());
    }

    public void recordShowStartEvent(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(nativeAd, promise, ErrorAndStateCodes.NATIVE_AD_NOT_INITIALIZED);
        Bundle recordShowStartEvent = Converter.fromJsonObjectToBundle(json);
        boolean isRecordShowStartEvent = nativeAd.recordShowStartEvent(recordShowStartEvent);
        promise.success(isRecordShowStartEvent);
    }

    public void getTitle(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(nativeAd, promise, ErrorAndStateCodes.NATIVE_AD_NOT_INITIALIZED);
        promise.success(nativeAd.getTitle());
    }

    public void onAdClose(JSONObject json, final Promise promise) throws JSONException {
        checkIfObjectNullOrThrowError(nativeAd, promise, ErrorAndStateCodes.NATIVE_AD_NOT_INITIALIZED);
        nativeAd.onAdClose(context, Converter.fromJsonToListString(json.getJSONArray("keywords")));
        promise.success();

    }

    public void setOnDownloadStatusChangedListener(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(nativeAd, promise, ErrorAndStateCodes.NATIVE_AD_NOT_INITIALIZED);
        appDownloadButton.setOnDownloadStatusChangedListener(listener.getOnDownloadStatusChangedListener());
        promise.success();
    }

    public void setOnNonWifiDownloadListener(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(nativeAd, promise, ErrorAndStateCodes.NATIVE_AD_NOT_INITIALIZED);
        appDownloadButton.setOnNonWifiDownloadListener(listener.getOnNonWifiDownloadListener());
        promise.success();
    }

    public void setShowPermissionDialog(JSONObject json, final Promise promise) throws JSONException {
        checkIfObjectNullOrThrowError(nativeAd, promise, ErrorAndStateCodes.NATIVE_AD_NOT_INITIALIZED);
        boolean show = json.optBoolean("show");
        appDownloadButton.setShowPermissionDialog(show);
        promise.success();
    }

    public void setAllowedNonWifiNetwork(JSONObject json, final Promise promise) throws JSONException {
        checkIfObjectNullOrThrowError(nativeAd, promise, ErrorAndStateCodes.NATIVE_AD_NOT_INITIALIZED);
        boolean allowed = json.optBoolean("allowed");
        appDownloadButton.setAllowedNonWifiNetwork(allowed);
        promise.success();
    }

    public void cancel(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(nativeAd, promise, ErrorAndStateCodes.NATIVE_AD_NOT_INITIALIZED);
        appDownloadButton.cancel();
        promise.success();
    }

    public void continueDownload(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(nativeAd, promise, ErrorAndStateCodes.NATIVE_AD_NOT_INITIALIZED);
        appDownloadButton.continueDownload();
        promise.success();
    }

}
