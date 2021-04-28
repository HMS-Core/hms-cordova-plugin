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

package com.huawei.hms.cordova.ads;

import android.app.Activity;
import android.content.Context;
import android.view.ViewGroup;

import com.huawei.hms.cordova.ads.ad.PluginAbstractAdManager;
import com.huawei.hms.cordova.ads.ad.banner.PluginBannerAdManager;
import com.huawei.hms.cordova.ads.ad.instream.PluginRollAdManager;
import com.huawei.hms.cordova.ads.ad.interstitial.PluginInterstitialAdManager;
import com.huawei.hms.cordova.ads.ad.nativ.PluginNativeAdManager;
import com.huawei.hms.cordova.ads.ad.reward.PluginRewardAdManager;
import com.huawei.hms.cordova.ads.ad.splash.PluginSplashAdManager;
import com.huawei.hms.cordova.ads.basef.CordovaBaseModule;
import com.huawei.hms.cordova.ads.basef.CordovaMethod;
import com.huawei.hms.cordova.ads.basef.handler.CorPack;
import com.huawei.hms.cordova.ads.basef.handler.CordovaEventRunner;
import com.huawei.hms.cordova.ads.basef.handler.Promise;
import com.huawei.hms.cordova.ads.layout.PluginAdLayout;
import com.huawei.hms.cordova.ads.utils.ErrorCodes;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.lang.reflect.InvocationTargetException;
import java.util.HashMap;
import java.util.Map;

public class AdManagerModule extends CordovaBaseModule implements OnAdLayoutScroll {
    public static final String TAG = AdManagerModule.class.getSimpleName();
    private Map<Integer, PluginAbstractAdManager> managerMap = new HashMap<>();
    private PluginAdLayout pluginAdLayout;
    private ViewGroup parent;

    public AdManagerModule(PluginAdLayout pluginAdLayout, HMSAds hmsAds) {
        this.pluginAdLayout = pluginAdLayout;
        parent = ((ViewGroup) (hmsAds.webView.getView().getParent()));
        hmsAds.setOnAdLayoutScroll(this);
    }

    private PluginAbstractAdManager createInterstitialAd(Context context, Activity activity,
        CordovaEventRunner eventRunner, JSONArray args) {
        return new PluginInterstitialAdManager(context, activity, eventRunner, args.optJSONObject(0));
    }

    private PluginAbstractAdManager createBannerAd(Context context, Activity activity, CordovaEventRunner eventRunner,
        JSONArray args) {
        PluginAbstractAdManager abstractAdManager = new PluginBannerAdManager(context, pluginAdLayout, eventRunner);
        activity.runOnUiThread(() -> {
            ((PluginBannerAdManager) abstractAdManager).create(args.optJSONObject(0));
        });

        return abstractAdManager;
    }

    private PluginAbstractAdManager createSplashAd(Context context, CordovaEventRunner eventRunner) {
        return new PluginSplashAdManager(context, eventRunner);
    }

    private PluginAbstractAdManager createRewardAd(Context context, Activity activity, CordovaEventRunner eventRunner,
        JSONArray args) {
        return new PluginRewardAdManager(context, activity, eventRunner, args.optJSONObject(0));
    }

    private PluginAbstractAdManager createRollAd(Context context, Activity activity, CordovaEventRunner eventRunner,
        JSONArray args, CorPack corPack) {
        PluginAbstractAdManager abstractAdManager = new PluginRollAdManager(context, activity, pluginAdLayout,
            eventRunner, args.optJSONObject(1), corPack);
        activity.runOnUiThread(() -> ((PluginRollAdManager) abstractAdManager).create(args.optJSONObject(0)));
        return abstractAdManager;
    }

    private PluginAbstractAdManager createNativeAd(Context context, Activity activity, CordovaEventRunner eventRunner,
        JSONArray args) {
        PluginAbstractAdManager abstractAdManager = new PluginNativeAdManager(context, activity, pluginAdLayout,
            eventRunner, args.optJSONObject(1));
        activity.runOnUiThread(() -> ((PluginNativeAdManager) abstractAdManager).create(args.optJSONObject(0)));
        return abstractAdManager;
    }

    @CordovaMethod
    public void createAd(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {

        PluginAbstractAdManager adManager = null;
        switch (args.optString(0)) {
            case "hmsinterstitialad":
                adManager = createInterstitialAd(corPack.getCordovaWebView().getContext(),
                    corPack.getCordova().getActivity(), corPack.getEventRunner(), args.optJSONArray(1));
                break;
            case "hmsbannerad":
                adManager = createBannerAd(corPack.getCordovaWebView().getContext(), corPack.getCordova().getActivity(),
                    corPack.getEventRunner(), args.optJSONArray(1));

                break;
            case "hmssplashad":
                adManager = createSplashAd(corPack.getCordovaWebView().getContext(), corPack.getEventRunner());
                break;
            case "hmsrewardad":
                adManager = createRewardAd(corPack.getCordovaWebView().getContext(), corPack.getCordova().getActivity(),
                    corPack.getEventRunner(), args.optJSONArray(1));
                break;
            case "hmsrollad":
                adManager = createRollAd(corPack.getCordovaWebView().getContext(), corPack.getCordova().getActivity(),
                    corPack.getEventRunner(), args.optJSONArray(1), corPack);
                break;
            case "hmsnativead":
                adManager = createNativeAd(corPack.getCordovaWebView().getContext(), corPack.getCordova().getActivity(),
                    corPack.getEventRunner(), args.optJSONArray(1));
                break;
            default:
                break;
        }
        if (adManager == null) {
            promise.error("Create Failed!");
            return;
        }
        managerMap.put(adManager.getManagerId(), adManager);
        promise.success(new JSONObject().put("id", adManager.getManagerId()));

    }

    @CordovaMethod
    public void run(final CorPack corPack, JSONArray args, final Promise promise) {
        corPack.getCordova().getActivity().runOnUiThread(() -> {
            String loggerMethod = args.optString(0) + "-" + args.optString(2);
            corPack.startMethodExecution(loggerMethod);
            try {
                if (managerMap.containsKey(args.optInt(1))) {
                    managerMap.get(args.optInt(1)).runMethod(args.optString(2), args.optJSONObject(3), promise);
                    corPack.sendSingleEvent(loggerMethod);
                } else {
                    promise.error(ErrorCodes.AD_NOT_INITIALIZED.toJson());
                    corPack.sendSingleEvent(loggerMethod, "" + ErrorCodes.AD_NOT_INITIALIZED.toJson().optInt("code"));
                }
            } catch (NoSuchMethodException | IllegalAccessException e) {
                corPack.sendSingleEvent(loggerMethod, e.getMessage());
            } catch (InvocationTargetException e) {
                corPack.sendSingleEvent(loggerMethod, e.getTargetException().getMessage());
            }
        });
    }

    @Override
    public void onScroll(int scrollX, int scrollY) {
        pluginAdLayout.updateScrollValues(scrollX, scrollY);
        for (Map.Entry<Integer, PluginAbstractAdManager> entry : managerMap.entrySet()) {
            if (entry.getValue().hasLayout() && entry.getValue().getLayoutManager() != null) {
                entry.getValue().getLayoutManager().scroll(scrollX, scrollY);
            }
        }
    }
}

