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

package com.huawei.hms.cordova.ads;

import android.app.Dialog;
import android.content.pm.ActivityInfo;
import android.graphics.Color;
import android.util.Log;
import android.util.Pair;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import com.huawei.hms.ads.AdParam;
import com.huawei.hms.ads.AudioFocusType;
import com.huawei.hms.ads.BannerAdSize;
import com.huawei.hms.ads.ContentClassification;
import com.huawei.hms.ads.HwAds;
import com.huawei.hms.ads.InterstitialAd;
import com.huawei.hms.ads.NonPersonalizedAd;
import com.huawei.hms.ads.TagForChild;
import com.huawei.hms.ads.UnderAge;
import com.huawei.hms.ads.banner.BannerView;
import com.huawei.hms.ads.consent.constant.ConsentStatus;
import com.huawei.hms.ads.consent.constant.DebugNeedConsent;
import com.huawei.hms.ads.consent.inter.Consent;
import com.huawei.hms.ads.consent.inter.ConsentUpdateListener;
import com.huawei.hms.ads.installreferrer.api.InstallReferrerClient;
import com.huawei.hms.ads.nativead.NativeAd;
import com.huawei.hms.ads.nativead.NativeAdConfiguration;
import com.huawei.hms.ads.nativead.NativeAdLoader;
import com.huawei.hms.ads.nativead.NativeView;
import com.huawei.hms.ads.reward.RewardAd;
import com.huawei.hms.ads.splash.SplashView;
import com.huawei.hms.cordova.ads.helpers.BiConsumer;
import com.huawei.hms.cordova.ads.helpers.HMSCordovaPlugin;
import com.huawei.hms.cordova.ads.helpers.JSONBiConsumer;
import com.huawei.hms.cordova.ads.helpers.QuadConsumer;
import com.huawei.hms.cordova.ads.utils.AdUtils;
import com.huawei.hms.cordova.ads.utils.BannerUtils;
import com.huawei.hms.cordova.ads.utils.ConsentUtils;
import com.huawei.hms.cordova.ads.utils.CordovaUtils;
import com.huawei.hms.cordova.ads.utils.HwAdsUtils;
import com.huawei.hms.cordova.ads.utils.InstallReferrerUtils;
import com.huawei.hms.cordova.ads.utils.JavaUtils;
import com.huawei.hms.cordova.ads.utils.NativeUtils;
import com.huawei.hms.cordova.ads.utils.OaidUtils;
import com.huawei.hms.cordova.ads.utils.RewardUtils;
import com.huawei.hms.cordova.ads.utils.SplashUtils;
import java.util.HashMap;
import java.util.Map;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;


public class HMSAds extends HMSCordovaPlugin {
    public static final String TAG = HMSAds.class.getSimpleName();

    // Object tables
    private Map<Integer, BannerView> bannerViews;
    private Map<Integer, RewardAd> rewardViews;
    private Map<Integer, InterstitialAd> interstitialViews;
    private Map<Integer, SplashView> splashViews;
    private Map<Integer, Pair<NativeView, NativeAd>> nativeViews;

    // Action tables
    private Map<String, BiConsumer<JSONObject, CallbackContext>> creators;
    private Map<String, JSONBiConsumer<JSONArray, CallbackContext>> functions;
    private Map<String, QuadConsumer<Integer, String, JSONObject, CallbackContext>> dispatchers;

    // State
    private int objectId = 0;
    private FrameLayout mainLayout;
    private LinearLayout parentLayout = null;
    private boolean isBannerFloat = false;

    public HMSAds()  {
        bannerViews = new HashMap<>();
        rewardViews = new HashMap<>();
        interstitialViews = new HashMap<>();
        nativeViews = new HashMap<>();
        splashViews = new HashMap<>();

        creators = new HashMap<>();
        dispatchers = new HashMap<>();
        functions = new HashMap<>();

        creators.put("banner", this::createBannerAd);
        creators.put("splash", this::createSplashAd);
        creators.put("reward", this::createRewardAd);
        creators.put("native", this::createNativeAd);
        creators.put("interstitial", this::createInterstitialAd);

        dispatchers.put("banner", this::callBannerAdFunction);
        dispatchers.put("splash", this::callSplashAdFunction);
        dispatchers.put("reward", this::callRewardAdFunction);
        dispatchers.put("native", this::callNativeAdFunction);
        dispatchers.put("interstitial", this::callInterstitialAdFunction);

        functions.put("createAd", this::createAd);
        functions.put("callAdFunction", this::callAdFunction);
        functions.put("verifyAdId", this::verifyAdId);
        functions.put("getReferrerDetails", this::getReferrerDetails);
        functions.put("disconnectFromReferrerClient", this::disconnectFromReferrerClient);
        functions.put("setRequestOptions", this::setRequestOptions);
        functions.put("getOaidResult", this::getOaidResult);
        functions.put("getSDKVersion", this::getSDKVersion);
        functions.put("setVideoMuted", this::setVideoMuted);
        functions.put("setVideoVolume", this::setVideoVolume);
        functions.put("addTestDeviceId", this::addTestDeviceId);
        functions.put("getTestDeviceId", this::getTestDeviceId);
        functions.put("setUnderAgeOfPromise", this::setUnderAgeOfPromise);
        functions.put("setConsentStatus", this::setConsentStatus);
        functions.put("setDebugNeedConsent", this::setDebugNeedConsent);
        functions.put("requestConsentUpdate", this::requestConsentUpdate);
    }

    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
    }

    @Override
    public JSONObject getConstants() throws JSONException {
        final JSONObject constants = new JSONObject();

        // Add banner sizes
        for (String constantName: JavaUtils.listOfConstants(BannerAdSize.class)) {
            constants.put(constantName, constantName);
        }

        constants.put("InstallReferrerResponses", new JSONObject(JavaUtils.mapOfConstants(InstallReferrerClient.InstallReferrerResponse.class)));
        constants.put("Colors", new JSONObject(JavaUtils.mapOfConstants(Color.class)));
        constants.put("ErrorCodes", new JSONObject(JavaUtils.mapOfConstants(AdParam.ErrorCode.class)));

        CordovaUtils.extendJSONWith(constants, JavaUtils.mapOfConstants(ActivityInfo.class, "SCREEN_ORIENTATION"));
        CordovaUtils.extendJSONWith(constants, JavaUtils.mapOfConstants(ContentClassification.class));
        CordovaUtils.extendJSONWith(constants, JavaUtils.mapOfConstants(ContentClassification.class));
        CordovaUtils.extendJSONWith(constants, JavaUtils.mapOfConstants(NonPersonalizedAd.class));
        CordovaUtils.extendJSONWith(constants, JavaUtils.mapOfConstants(TagForChild.class));
        CordovaUtils.extendJSONWith(constants, JavaUtils.mapOfConstants(UnderAge.class));
        CordovaUtils.extendJSONWith(constants, JavaUtils.mapOfConstants(AudioFocusType.class));

        constants.put("CONSENT_DEBUG_DISABLED", DebugNeedConsent.DEBUG_DISABLED.getValue());
        constants.put("CONSENT_DEBUG_NEED_CONSENT", DebugNeedConsent.DEBUG_NEED_CONSENT.getValue());
        constants.put("CONSENT_DEBUG_NOT_NEED_CONSENT", DebugNeedConsent.DEBUG_NOT_NEED_CONSENT.getValue());
        constants.put("CONSENT_NON_PERSONALIZED", ConsentStatus.NON_PERSONALIZED.getValue());
        constants.put("CONSENT_PERSONALIZED", ConsentStatus.PERSONALIZED.getValue());
        constants.put("CONSENT_UNKNOWN", ConsentStatus.UNKNOWN.getValue());

        final JSONObject nativeAdConstants = new JSONObject();
        CordovaUtils.extendJSONWith(nativeAdConstants, JavaUtils.mapOfConstants(NativeAdConfiguration.Direction.class));
        CordovaUtils.extendJSONWith(nativeAdConstants, JavaUtils.mapOfConstants(NativeAdConfiguration.MediaAspect.class));
        CordovaUtils.extendJSONWith(nativeAdConstants, JavaUtils.mapOfConstants(NativeAdConfiguration.ChoicesPosition.class));
        constants.put("NativeAdConstants", nativeAdConstants);

        return constants;
    }

    @Override
    public boolean executer(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        Log.d(TAG, JavaUtils.format("executer() :: action=%s, args=%s", action, args.toString()));
        if (functions.containsKey(action)) {
            functions.get(action).run(args, callbackContext);
            return true;
        }

        return false;
    }

    @Override
    public void init(final JSONObject json, final CallbackContext callbackContext) {
        Log.d(TAG, JavaUtils.format("init() :: json=%s", json.toString()));

        // Initialize HwAds
        HwAds.init(cordova.getContext(), json.optString("appCode"));

        // Initialize request options
        if (json.has("requestOptions")) {
            HwAds.setRequestOptions(HwAdsUtils.fromJSONObjectToRequestOptions(json.optJSONObject("requestOptions")));
        }

        // Initialize layout
        mainLayout = (FrameLayout) webView.getView().getParent();

        // Load global settings
        isBannerFloat = json.optBoolean("bannerFloat", false);
        if (isBannerFloat) {
            return;
        }

        cordova.getActivity().runOnUiThread(() -> {
            Log.d(TAG, "init() :: initializing LinearLayout");

            parentLayout = new LinearLayout(webView.getContext());
            parentLayout.setOrientation(LinearLayout.VERTICAL);
            parentLayout.setLayoutParams(new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT, 0.0F));
            getWebView().setLayoutParams(new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT, 1.0F));

            mainLayout.removeView(getWebView());
            parentLayout.addView(getWebView());
            mainLayout.addView(parentLayout);

            parentLayout.bringToFront();
            parentLayout.requestLayout();
        });

        super.init(json, callbackContext);
    }

    // /////////////////////////////////////////////////////////////////////////////////////////////
    // BannerView
    // /////////////////////////////////////////////////////////////////////////////////////////////

    private void createBannerAd(JSONObject json, CallbackContext callbackContext) {
        Log.d(TAG, JavaUtils.format("createBannerAd() :: json=%s", json.toString()));

        int bannerViewObjectId = ++objectId;

        cordova.getActivity().runOnUiThread(CordovaUtils.runnableWrapper(() -> {
            BannerView bannerView = new BannerView(webView.getContext());
            bannerView.setBannerAdSize(BannerUtils.getBannerAdSize(json.optString("bannerAdSize")));
            bannerView.setBackgroundColor(CordovaUtils.parseColor(json, "bgColor", Color.TRANSPARENT));
            bannerView.setAdId(json.getString("adId"));
            bannerView.setAdListener(AdUtils.newAdListener(cordova, webView, bannerViewObjectId));
            if (json.has("bannerRefresh")) {
                bannerView.setBannerRefresh(json.getLong("bannerRefresh"));
            }
            bannerViews.put(bannerViewObjectId, bannerView);

            String anchor = json.optString("anchor", "bottom");

            if (isBannerFloat) {
                FrameLayout.LayoutParams initialParams = new FrameLayout.LayoutParams(FrameLayout.LayoutParams.WRAP_CONTENT, FrameLayout.LayoutParams.WRAP_CONTENT);
                initialParams.gravity = BannerUtils.getGravity(anchor);
                bannerView.setLayoutParams(initialParams);
                mainLayout.addView(bannerView);
            } else {
                if (anchor.equals("top")) {
                    parentLayout.addView(bannerView, 0);
                } else {
                    parentLayout.addView(bannerView);
                }
            }

            callbackContext.success(CordovaUtils.keyValPair("id", bannerViewObjectId));
        }));
    }

    private void callBannerAdFunction(int id, String funcName, JSONObject json, CallbackContext callbackContext) {
        Log.d(TAG, JavaUtils.format("callBannerAdFunction() :: id=%s, funcName=%s, json=%s", id, funcName, json.toString()));
        BannerView bannerView = bannerViews.get(id);
        if (bannerView == null) {
            callbackContext.error("Object does not exist.");
            return;
        }

        cordova.getActivity().runOnUiThread(() -> {
            if (funcName.equals("loadAd")) {
                bannerView.loadAd(AdUtils.fromJSONObjectToAdParam(json));
            } else if (funcName.equals("pause")) {
                bannerView.pause();
            } else if (funcName.equals("resume")) {
                bannerView.resume();
            } else if (funcName.equals("destroy")) {
                bannerView.destroy();
                bannerViews.remove(id);
            }
        });

        callbackContext.success();
    }

    // /////////////////////////////////////////////////////////////////////////////////////////////
    // Interstitial
    // /////////////////////////////////////////////////////////////////////////////////////////////

    private void createInterstitialAd(JSONObject json, CallbackContext callbackContext) {
        Log.d(TAG, JavaUtils.format("showInterstitialAd() :: json=%s", json.toString()));

        int interstitialAdObjectId = ++objectId;

        cordova.getActivity().runOnUiThread(CordovaUtils.runnableWrapper(() -> {
            InterstitialAd interstitialAd = new InterstitialAd(cordova.getContext());
            interstitialAd.setAdListener(AdUtils.newAdListener(cordova, webView, interstitialAdObjectId));
            interstitialAd.setAdMetadataListener(AdUtils.newMetadataChangeListener(cordova, webView, interstitialAdObjectId));
            interstitialAd.setAdId(json.getString("adId"));

            interstitialViews.put(interstitialAdObjectId, interstitialAd);
            callbackContext.success(CordovaUtils.keyValPair("id", interstitialAdObjectId));
        }));
    }

    private void callInterstitialAdFunction(int id, String funcName, JSONObject json, CallbackContext callbackContext) {
        InterstitialAd interstitialAd = interstitialViews.get(id);
        if (interstitialAd == null) {
            callbackContext.error("Object does not exist.");
            return;
        }

        cordova.getActivity().runOnUiThread(() -> {
            if (funcName.equals("loadAd")) {
                interstitialAd.loadAd(AdUtils.fromJSONObjectToAdParam(json));
            } else if (funcName.equals("show")) {
                Log.i(TAG, JavaUtils.format("showInterstitialAd() :: isLoaded=%s", interstitialAd.isLoaded()));
                interstitialAd.show();
            } else if (funcName.equals("isLoading")) {
                callbackContext.success(CordovaUtils.keyValPair("isLoading", interstitialAd.isLoading()));
                return;
            } else if (funcName.equals("isLoaded")) {
                callbackContext.success(CordovaUtils.keyValPair("isLoaded", interstitialAd.isLoaded()));
                return;
            } else if (funcName.equals("destroy")) {
                interstitialViews.remove(id);
            }

            callbackContext.success();
        });
    }

    // /////////////////////////////////////////////////////////////////////////////////////////////
    // RewardAd
    // /////////////////////////////////////////////////////////////////////////////////////////////

    private void createRewardAd(final JSONObject json, CallbackContext callbackContext) {
        Log.d(TAG, JavaUtils.format("createRewardAd() :: json=%s", json.toString()));

        int rewardAdObjectId = ++objectId;
        cordova.getActivity().runOnUiThread(CordovaUtils.runnableWrapper(() -> {
            rewardViews.put(rewardAdObjectId, RewardUtils.createRewardView(cordova, json));
            callbackContext.success(CordovaUtils.keyValPair("id", rewardAdObjectId));
        }));
    }

    private void callRewardAdFunction(int id, String funcName, JSONObject json, CallbackContext callbackContext) {
        RewardAd rewardView = rewardViews.get(id);
        if (rewardView == null) {
            callbackContext.error("Object does not exist.");
            return;
        }

        cordova.getActivity().runOnUiThread(() -> {
            if (funcName.equals("loadAd")) {
                rewardView.loadAd(AdUtils.fromJSONObjectToAdParam(json), RewardUtils.getLoadListener(cordova, webView, id));
            } else if (funcName.equals("show")) {
                Log.i(TAG, JavaUtils.format("showRewardAd() :: isLoaded=%s", rewardView.isLoaded()));
                rewardView.show(cordova.getActivity(), RewardUtils.getStatusListener(cordova, webView, objectId));
            } else if (funcName.equals("pause")) {
                rewardView.pause();
            } else if (funcName.equals("resume")) {
                rewardView.resume();
            } else if (funcName.equals("destroy")) {
                rewardView.destroy();
                rewardViews.remove(id);
            } else if (funcName.equals("isLoaded")) {
                callbackContext.success(CordovaUtils.keyValPair("isLoaded", rewardView.isLoaded()));
                return;
            }
            callbackContext.success();
        });
    }

    // /////////////////////////////////////////////////////////////////////////////////////////////
    // Splash
    // /////////////////////////////////////////////////////////////////////////////////////////////

    private void createSplashAd(JSONObject json, CallbackContext callbackContext) {
        Log.d(TAG, JavaUtils.format("createSplashAd() :: json=%s", json.toString()));

        int splashAdObjectId = ++objectId;

        cordova.getActivity().runOnUiThread(CordovaUtils.runnableWrapper(() -> {
            SplashUtils.preloadAdIfRequested(cordova, json);
            splashViews.put(splashAdObjectId, SplashUtils.createSplashView(cordova, webView, objectId, json));
            callbackContext.success(CordovaUtils.keyValPair("id", splashAdObjectId));
        }));
    }

    private void callSplashAdFunction(int id, String funcName, JSONObject json, CallbackContext callbackContext) {
        Log.d(TAG, JavaUtils.format("callBannerAdFunction() :: id=%s, funcName=%s, json=%s", id, funcName, json.toString()));
        SplashView splashView = splashViews.get(id);
        if (splashView == null) {
            callbackContext.error("Object does not exist.");
            return;
        }

        Dialog dialog = (Dialog) splashView.getTag();

        cordova.getActivity().runOnUiThread(() -> {
            if (funcName.equals("load")) {
                splashView.load(
                        json.optString("adId"),
                        json.optInt("orientation", ActivityInfo.SCREEN_ORIENTATION_USER),
                        AdUtils.fromJSONObjectToAdParam(json.optJSONObject("ad")),
                        SplashUtils.getLoadListener(cordova, webView, id)
                );
            } else if (funcName.equals("show")) {
                Log.i(TAG, JavaUtils.format("showSplashAd() :: isLoaded=%s", splashView.isLoaded()));
                dialog.show();
            } else if (funcName.equals("pause")) {
                splashView.pauseView();
            } else if (funcName.equals("resume")) {
                splashView.resumeView();
            } else if (funcName.equals("cancel")) {
                dialog.cancel();
            } else if (funcName.equals("destroy")) {
                dialog.cancel();
                splashView.destroyView();
                rewardViews.remove(id);
            } else if (funcName.equals("isLoaded")) {
                callbackContext.success(CordovaUtils.keyValPair("isLoaded", splashView.isLoaded()));
                return;
            } else if (funcName.equals("isLoading")) {
                callbackContext.success(CordovaUtils.keyValPair("isLoading", splashView.isLoading()));
                return;
            }

            callbackContext.success();
        });
    }

    // /////////////////////////////////////////////////////////////////////////////////////////////
    // NativeAd
    // /////////////////////////////////////////////////////////////////////////////////////////////

    private void createNativeAd(JSONObject json, CallbackContext callbackContext) {
        Log.d(TAG, JavaUtils.format("createNativeAd() :: json=%s", json.toString()));

        int nativeViewObjectId = ++objectId;

        cordova.getActivity().runOnUiThread(() -> {
        nativeViews.put(nativeViewObjectId, Pair.create(NativeUtils.newView(cordova, json), null));
            callbackContext.success(CordovaUtils.keyValPair("id", nativeViewObjectId));
        });
    }

    private void callNativeAdFunction(int id, String funcName, JSONObject json, CallbackContext callbackContext) {
        Log.d(TAG, JavaUtils.format("callNativeAdFunction() :: id=%s, funcName=%s, json=%s", id, funcName, json.toString()));
        Pair<NativeView, NativeAd> nativeViewPair = nativeViews.get(id);
        if (nativeViewPair == null) {
            callbackContext.error("Object does not exist.");
            return;
        }
        NativeView nativeView = nativeViewPair.first;

        cordova.getActivity().runOnUiThread(() -> {
            if (funcName.equals("loadAd")) {
                NativeAdLoader nativeAdLoader = NativeUtils.fromJSONObjectToNativeAdLoader(cordova, webView, id, nativeViews, json);
                nativeAdLoader.loadAd(AdUtils.fromJSONObjectToAdParam(json.optJSONObject("ad")));
            } else if (funcName.equals("show")) {
                NativeAd nativeAd = nativeViewPair.second;
                if (nativeAd == null) {
                    callbackContext.error("Ad not initialized yet.");
                    return;
                }

                NativeUtils.plugNativeAd(cordova, webView, id, nativeAd, nativeView, json);
                mainLayout.addView(nativeView);
            } else if (funcName.equals("destroy")) {
                mainLayout.removeView(nativeView);
                nativeView.destroy();
                nativeViews.remove(id);
            } else if (funcName.equals("setProps")) {
                ViewGroup.LayoutParams params = NativeUtils.fromJSONObjectToLayoutParams(json, nativeView);
                if (params != null) {
                    mainLayout.updateViewLayout(nativeView, params);
                    callbackContext.success();
                } else {
                    callbackContext.error("nativeAd is not existent");
                }
            }
        });

        callbackContext.success();
    }

    // /////////////////////////////////////////////////////////////////////////////////////////////
    // HMSAds functions
    // /////////////////////////////////////////////////////////////////////////////////////////////

    private void createAd(JSONArray args, CallbackContext cb) throws JSONException {
        String variant = args.getString(0);
        JSONObject options = args.getJSONObject(1);

        Log.d(TAG, JavaUtils.format("createAd() :: variant=%s, options=%s", variant, options.toString()));

        creators.get(variant).run(options, cb);
    }

    private void callAdFunction(JSONArray args, CallbackContext cb) throws JSONException {
        String variant = args.getString(0);
        int id = args.getInt(1);
        String funcName = args.getString(2);
        JSONObject options = args.getJSONObject(3);

        Log.d(TAG, JavaUtils.format("callAdFunction() :: variant=%s, id=%s, funcName=%s, options=%s", variant, id, funcName, options.toString()));

        dispatchers.get(variant).run(id, funcName, options, cb);
    }

    private void verifyAdId(JSONArray args, CallbackContext cb) throws JSONException {
        OaidUtils.verifyAdId(cordova, args.getString(0), args.getBoolean(1), cb);
    }

    private void getReferrerDetails(JSONArray args, CallbackContext cb) {
        InstallReferrerUtils.start(cordova, args.optBoolean(0, false), cb);
    }

    private void disconnectFromReferrerClient(JSONArray args, CallbackContext cb) {
        InstallReferrerUtils.disconnect(cb);
    }

    private void getOaidResult(JSONArray args, CallbackContext cb) {
        OaidUtils.getAdvertisingIdInfo(cordova, (success, oaidResult) -> {
            if (success) {
                cb.success(oaidResult.toJSONObject());
            } else {
                cb.error("oaid failed");
            }
        });
    }

    private void setRequestOptions(JSONArray args, CallbackContext cb) throws JSONException {
        HwAds.setRequestOptions(HwAdsUtils.fromJSONObjectToRequestOptions(args.getJSONObject(0)));
        cb.success();
    }

    private void getSDKVersion(JSONArray args, CallbackContext cb) {
        cb.success(HwAds.getSDKVersion());
    }

    private void setVideoMuted(JSONArray args, CallbackContext cb) {
        HwAds.setVideoMuted(args.optBoolean(0));
        cb.success();
    }

    private void setVideoVolume(JSONArray args, CallbackContext cb) {
        HwAds.setVideoVolume((float) args.optDouble(0));
        cb.success();
    }

    private void addTestDeviceId(JSONArray args, CallbackContext cb) throws JSONException {
        Consent.getInstance(cordova.getContext()).addTestDeviceId(args.getString(0));
        cb.success();
    }

    private void getTestDeviceId(JSONArray args, CallbackContext cb) {
        cb.success(Consent.getInstance(cordova.getContext()).getTestDeviceId());
    }

    private void setUnderAgeOfPromise(JSONArray args, CallbackContext cb) throws JSONException {
        Consent.getInstance(cordova.getContext()).setUnderAgeOfPromise(args.getBoolean(0));
        cb.success();
    }

    private void setConsentStatus(JSONArray args, CallbackContext cb) throws JSONException {
        Consent.getInstance(cordova.getContext()).setConsentStatus(ConsentStatus.forValue(args.getInt(0)));
        cb.success();
    }

    private void setDebugNeedConsent(JSONArray args, CallbackContext cb) throws JSONException {
        Consent.getInstance(cordova.getContext()).setDebugNeedConsent(DebugNeedConsent.forValue(args.getInt(0)));
        cb.success();
    }

    private void requestConsentUpdate(JSONArray args, CallbackContext cb) {
        Consent.getInstance(cordova.getContext()).requestConsentUpdate(ConsentUtils.newConsentUpdateListener(cb));
    }

    // /////////////////////////////////////////////////////////////////////////////////////////////
    // Private utils
    // /////////////////////////////////////////////////////////////////////////////////////////////

    private View getWebView() {
        return webView.getView();
    }
}
