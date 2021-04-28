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

package com.huawei.hms.cordova.ads.ad.banner;

import android.content.Context;
import android.graphics.Color;

import com.huawei.hms.ads.AdParam;
import com.huawei.hms.ads.BannerAdSize;
import com.huawei.hms.ads.banner.BannerView;
import com.huawei.hms.cordova.ads.Converter;
import com.huawei.hms.cordova.ads.ad.PluginAbstractAdManager;
import com.huawei.hms.cordova.ads.basef.handler.CordovaEventRunner;
import com.huawei.hms.cordova.ads.basef.handler.Promise;
import com.huawei.hms.cordova.ads.layout.PluginAdLayout;
import com.huawei.hms.cordova.ads.layout.PluginLayoutManager;
import com.huawei.hms.cordova.ads.utils.ErrorCodes;

import org.json.JSONException;
import org.json.JSONObject;

public class PluginBannerAdManager extends PluginAbstractAdManager {

    private BannerView bannerView;
    private PluginAdLayout parent;
    private PluginLayoutManager bannerLayoutManager;
    private PluginBannerAdListener listener;
    private Context context;

    public PluginBannerAdManager(Context context, PluginAdLayout parent, CordovaEventRunner manager) {
        super();
        bannerView = new BannerView(context);
        this.parent = parent;
        this.context = context;
        pluginListenerManager = manager;
        listener = new PluginBannerAdListener(pluginListenerManager, managerId);

    }

    public BannerView getBannerView() {
        return bannerView;
    }

    public void create(JSONObject initialProps) {
        bannerLayoutManager = new PluginLayoutManager(parent, bannerView,
            Converter.constructInitialPropsFromJSON(initialProps));
    }

    public void scroll(JSONObject json, final Promise promise) {
        if (bannerLayoutManager == null) {
            return;
        }
        bannerLayoutManager.setChildPropsForScroll(json.optInt("scrolledX"), json.optInt("scrolledY"));
    }

    public void forceUpdateBannerXAndY(JSONObject json, final Promise promise) {
        if (bannerLayoutManager == null) {
            return;
        }
        bannerLayoutManager.forceUpdateXAndY(json.optInt("scrolledX"), json.optInt("scrolledY"),
            json.optInt("pageXOffset"), json.optInt("pageYOffset"));
    }

    public void getAdId(JSONObject json, final Promise promise) {
        promise.success(bannerView.getAdId());
    }

    public void getBannerAdSize(JSONObject json, final Promise promise) throws JSONException {
        promise.success(new JSONObject().put("width", bannerView.getBannerAdSize().getWidth())
            .put("height", bannerView.getBannerAdSize().getHeight()));
    }

    public void getHeight(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(bannerView.getBannerAdSize(), promise, ErrorCodes.BANNER_AD_SIZE_NOT_INITIALIZED);
        promise.success(bannerView.getBannerAdSize().getHeight());

    }

    public void getHeightPx(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(bannerView.getBannerAdSize(), promise, ErrorCodes.BANNER_AD_SIZE_NOT_INITIALIZED);
        promise.success(bannerView.getBannerAdSize().getHeightPx(context));

    }

    public void getWidth(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(bannerView.getBannerAdSize(), promise, ErrorCodes.BANNER_AD_SIZE_NOT_INITIALIZED);
        promise.success(bannerView.getBannerAdSize().getWidth());

    }

    public void getWidthPx(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(bannerView.getBannerAdSize(), promise, ErrorCodes.BANNER_AD_SIZE_NOT_INITIALIZED);
        promise.success(bannerView.getBannerAdSize().getWidthPx(context));

    }

    public void isAutoHeightSize(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(bannerView.getBannerAdSize(), promise, ErrorCodes.BANNER_AD_SIZE_NOT_INITIALIZED);
        promise.success(bannerView.getBannerAdSize().isAutoHeightSize());

    }

    public void isDynamicSize(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(bannerView.getBannerAdSize(), promise, ErrorCodes.BANNER_AD_SIZE_NOT_INITIALIZED);
        promise.success(bannerView.getBannerAdSize().isDynamicSize());

    }

    public void isFullWidthSize(JSONObject json, final Promise promise) {
        checkIfObjectNullOrThrowError(bannerView.getBannerAdSize(), promise, ErrorCodes.BANNER_AD_SIZE_NOT_INITIALIZED);
        promise.success(bannerView.getBannerAdSize().isFullWidthSize());
    }

    public void getCurrentDirectionBannerSize(JSONObject json, final Promise promise) throws JSONException {
        BannerAdSize bannerAdSize = BannerAdSize.getCurrentDirectionBannerSize(context, json.optInt("width"));
        promise.success(new JSONObject().put("width", bannerAdSize.getWidth()).put("height", bannerAdSize.getHeight()));
    }

    public void getLandscapeBannerSize(JSONObject json, final Promise promise) throws JSONException {
        BannerAdSize bannerAdSize = BannerAdSize.getLandscapeBannerSize(context, json.optInt("width"));
        promise.success(new JSONObject().put("width", bannerAdSize.getWidth()).put("height", bannerAdSize.getHeight()));
    }

    public void getPortraitBannerSize(JSONObject json, final Promise promise) throws JSONException {
        BannerAdSize bannerAdSize = BannerAdSize.getPortraitBannerSize(context, json.optInt("width"));
        promise.success(new JSONObject().put("width", bannerAdSize.getWidth()).put("height", bannerAdSize.getHeight()));
    }

    public void setAdId(JSONObject json, final Promise promise) {
        String adId = json.optString("adId");
        bannerView.setAdId(adId);
        promise.success();

    }

    public void setBannerAdSize(JSONObject json, final Promise promise)
        throws NoSuchFieldException, IllegalAccessException {
        boolean isAdSizeObject = json.opt("bannerAdSize").getClass() == JSONObject.class;
        BannerAdSize bannerAdSize;
        if (isAdSizeObject) {
            bannerAdSize = new BannerAdSize(json.optJSONObject("bannerAdSize").optInt("width"),
                json.optJSONObject("bannerAdSize").optInt("height"));

        } else {
            bannerAdSize = (BannerAdSize) BannerAdSize.class.getDeclaredField(
                json.optString("bannerAdSize", "BANNER_SIZE_320_50")).get(null);
        }
        bannerView.setBannerAdSize(bannerAdSize);
        promise.success();
    }

    public void setBackgroundColor(JSONObject json, final Promise promise) {
        int color;
        if (json.length() == 0) {
            color = Color.TRANSPARENT;
        } else {
            try {
                color = Color.parseColor(json.optString("backgroundColor"));
            } catch (IllegalArgumentException e) {
                color = Color.TRANSPARENT;
            }
        }
        bannerView.setBackgroundColor(color);
        promise.success();
    }

    public void setBannerRefresh(JSONObject json, final Promise promise) throws JSONException {
        long bannerRefresh = json.getLong("bannerRefresh");
        bannerView.setBannerRefresh(bannerRefresh);
        promise.success();
    }

    public void setAdListener(JSONObject args, final Promise promise) {
        bannerView.setAdListener(listener.getAdListener());
        promise.success();
    }

    public void isLoading(JSONObject args, final Promise promise) {
        promise.success(bannerView.isLoading());
    }

    public void loadAd(JSONObject args, final Promise promise) throws JSONException {
        if (args == null) {
            bannerView.loadAd(new AdParam.Builder().build());
        } else {
            bannerView.loadAd(Converter.fromJsonObjectToAdParam(args));
        }
        promise.success();
    }

    public void pause(JSONObject args, final Promise promise) {
        bannerView.pause();
        promise.success();
    }

    public void resume(JSONObject args, final Promise promise) {
        bannerView.resume();
        promise.success();
    }

    public void destroy(JSONObject args, final Promise promise) {
        bannerView.destroy();
        if (bannerLayoutManager != null) {
            bannerLayoutManager.removeChildView(bannerView);
        }
        promise.success();
    }

    @Override
    public boolean hasLayout() {
        return true;
    }

    @Override
    public PluginLayoutManager getLayoutManager() {
        return bannerLayoutManager;
    }
}
