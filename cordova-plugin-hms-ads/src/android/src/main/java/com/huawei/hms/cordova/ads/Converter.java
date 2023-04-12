/*
 * Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.
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

package com.huawei.hms.cordova.ads;

import android.location.Location;
import android.os.Bundle;
import android.util.Log;

import com.huawei.hms.ads.AdParam;
import com.huawei.hms.ads.AdSize;
import com.huawei.hms.ads.AudioFocusType;
import com.huawei.hms.ads.HwAds;
import com.huawei.hms.ads.RequestOptions;
import com.huawei.hms.ads.VideoConfiguration;
import com.huawei.hms.ads.consent.bean.AdProvider;
import com.huawei.hms.ads.identifier.AdvertisingIdClient;
import com.huawei.hms.ads.installreferrer.api.InstallReferrerClient;
import com.huawei.hms.ads.installreferrer.api.ReferrerDetails;
import com.huawei.hms.ads.instreamad.InstreamAd;
import com.huawei.hms.ads.nativead.DislikeAdReason;
import com.huawei.hms.ads.nativead.NativeAdConfiguration;
import com.huawei.hms.ads.reward.Reward;
import com.huawei.hms.ads.vast.adapter.SdkFactory;
import com.huawei.hms.ads.vast.adapter.VastSdkConfiguration;
import com.huawei.hms.ads.vast.application.requestinfo.CreativeMatchStrategy;
import com.huawei.hms.ads.vast.domain.advertisement.CreativeExtension;
import com.huawei.hms.ads.vast.player.api.PlayerConfig;
import com.huawei.hms.ads.vast.player.model.LinearCreative;
import com.huawei.hms.ads.vast.player.model.adslot.LinearAdSlot;
import com.huawei.hms.cordova.ads.layout.InitialProps;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

public class Converter {
    public static final String TAG = Converter.class.getSimpleName();

    private Converter() {
    }

    public static InitialProps constructInitialPropsFromJSON(JSONObject json) {

        InitialProps.Builder initialPropsBuilder = new InitialProps.Builder(json.optInt("x", 0), json.optInt("y", 0),
            json.optInt("width", 0), json.optInt("height", 0), json.optInt("pageXOffset", 0),
            json.optInt("pageYOffset", 0));

        if (json.has("marginBottom")) {
            initialPropsBuilder.marginBottom(json.optInt("marginBottom"));
        }
        if (json.has("marginRight")) {
            initialPropsBuilder.marginRight(json.optInt("marginRight"));
        }
        if (json.has("marginLeft")) {
            initialPropsBuilder.marginLeft(json.optInt("marginLeft"));
        }
        if (json.has("marginTop")) {
            initialPropsBuilder.marginTop(json.optInt("marginTop"));
        }

        return initialPropsBuilder.build();
    }

    public static AdParam fromJsonObjectToAdParam(JSONObject json) throws JSONException {
        if (json == null) {
            return new AdParam.Builder().build();
        }

        AdParam.Builder builder = new AdParam.Builder();
        if (json.has("adContentClassification")) {
            builder.setAdContentClassification(json.getString("adContentClassification"));
        }
        if (json.has("appCountry")) {
            builder.setAppCountry(json.getString("appCountry"));
        }
        if (json.has("appLang")) {
            builder.setAppLang(json.getString("appLang"));
        }
        if (json.has("belongCountryCode")) {
            builder.setBelongCountryCode(json.getString("belongCountryCode"));
        }
        if (json.has("gender")) {
            builder.setGender(json.optInt("gender"));
        }
        if (json.has("nonPersonalizedAd")) {
            builder.setNonPersonalizedAd(json.getInt("nonPersonalizedAd"));
        }
        if (json.has("requestOrigin")) {
            builder.setRequestOrigin(json.getString("requestOrigin"));
        }
        if (json.has("tagForChildProtection")) {
            builder.setTagForChildProtection(json.getInt("tagForChildProtection"));
        }
        if (json.has("tagForUnderAgeOfPromise")) {
            builder.setTagForUnderAgeOfPromise(json.getInt("tagForUnderAgeOfPromise"));
        }
        if (json.has("requestLocation")) {
            builder.setRequestLocation(json.getBoolean("requestLocation"));
        }
        if (json.has("detailedCreativeType")) {
            builder.setDetailedCreativeTypeList(
                Converter.fromJsonToListInteger(json.getJSONArray("detailedCreativeType")));
        }
        if (json.has("consent")) {
            builder.setConsent(json.getString("consent"));
        }
        if (json.has("contentBundle")) {
            builder.setContentBundle(json.getString("contentBundle"));
        }
        if (json.has("location")) {
            builder.setLocation(fromJSONObjectToLocation((JSONObject) json.get("location")));
        }
        return builder.build();

    }

    public static Location fromJSONObjectToLocation(JSONObject json) throws JSONException {
        Location location = new Location("");

        if (json.has("lat")) {
            location.setLatitude(json.getInt("lat"));
        }
        if (json.has("lng")) {
            location.setLongitude(json.getInt("lng"));
        }
        return location;
    }

    public static JSONObject fromRequestOptionsToJsonObj(RequestOptions requestOptions) {
        JSONObject requestOptionsJsonObject = new JSONObject();

        try {
            requestOptionsJsonObject.put("adContentClassification", requestOptions.getAdContentClassification());
            requestOptionsJsonObject.put("appLang", requestOptions.getAppLang());
            requestOptionsJsonObject.put("appCountry", requestOptions.getAppCountry());
            requestOptionsJsonObject.put("tagForChildProtection", requestOptions.getTagForChildProtection());
            requestOptionsJsonObject.put("tagForUnderAgeOfPromise", requestOptions.getTagForUnderAgeOfPromise());
            requestOptionsJsonObject.put("nonPersonalizedAd", requestOptions.getNonPersonalizedAd());
            requestOptionsJsonObject.put("consent", requestOptions.getConsent());
        } catch (JSONException e) {
            Log.d(TAG,e.getMessage());

        }

        return requestOptionsJsonObject;

    }

    public static RequestOptions fromJSONObjectToRequestOptions(JSONObject requestOptionsJson) throws JSONException {
        RequestOptions.Builder requestOptions;
        if (HwAds.getRequestOptions() == null) {
            requestOptions = new RequestOptions().toBuilder();
        } else {
            requestOptions = HwAds.getRequestOptions().toBuilder();
        }

        if (requestOptionsJson == null) {
            return requestOptions.build();
        }

        if (requestOptionsJson.has("adContentClassification")) {
            requestOptions.setAdContentClassification(requestOptionsJson.getString("adContentClassification"));
        }

        if (requestOptionsJson.has("appLang")) {
            requestOptions.setAppLang(requestOptionsJson.getString("appLang"));
        }

        if (requestOptionsJson.has("appCountry")) {
            requestOptions.setAppCountry(requestOptionsJson.getString("appCountry"));
        }

        if (requestOptionsJson.has("tagForChildProtection")) {
            requestOptions.setTagForChildProtection(requestOptionsJson.getInt("tagForChildProtection"));
        }

        if (requestOptionsJson.has("tagForUnderAgeOfPromise")) {
            requestOptions.setTagForUnderAgeOfPromise(requestOptionsJson.getInt("tagForUnderAgeOfPromise"));
        }

        if (requestOptionsJson.has("nonPersonalizedAd")) {
            requestOptions.setNonPersonalizedAd(requestOptionsJson.getInt("nonPersonalizedAd"));
        }

        if (requestOptionsJson.has("requestLocation")) {
            requestOptions.setRequestLocation(requestOptionsJson.getBoolean("requestLocation"));
        }

        if (requestOptionsJson.has("consent")) {
            requestOptions.setConsent(requestOptionsJson.getString("consent"));
        }
        return requestOptions.build();
    }

    public static JSONArray fromAdProviderListToJSONObject(List<AdProvider> adProvider) throws JSONException {
        JSONArray jsonArray = new JSONArray();

        for (AdProvider provider : adProvider) {
            jsonArray.put(new JSONObject().put("id", provider.getId())
                .put("name", provider.getName())
                .put("privacyPolicyUrl", provider.getPrivacyPolicyUrl())
                .put("serviceArea", provider.getServiceArea()));
        }
        return jsonArray;
    }

    public static JSONObject fromAdvertisingClientInfoToJson(AdvertisingIdClient.Info info) throws JSONException {
        return new JSONObject().put("id", info.getId())
            .put("isLimitAdTrackingEnabled", info.isLimitAdTrackingEnabled());
    }

    public static JSONObject fromRewardToJsonObject(Reward reward) {
        try {
            return new JSONObject().put("rewardAmount", reward.getAmount()).put("rewardName", reward.getName());
        } catch (JSONException e) {
            Log.e(TAG, "fromRewardToJsonObject :: ERROR => " + e.getMessage());
            return null;
        }
    }

    public static Bundle fromJsonObjectToBundle(final JSONObject json) {
        final Bundle bundle = new Bundle();
        try {
            final Iterator<String> iterator = json.keys();
            while (iterator.hasNext()) {
                final String key = (String) iterator.next();
                final Object value = json.get(key);
                if (value instanceof String) {
                    bundle.putString(key, (String) value);
                } else if (value instanceof Integer) {
                    bundle.putInt(key, (Integer) value);
                } else if (value instanceof Long) {
                    bundle.putLong(key, (Long) value);
                } else if (value instanceof Boolean) {
                    bundle.putBoolean(key, (Boolean) value);
                } else if (value instanceof JSONObject) {
                    bundle.putBundle(key, fromJsonObjectToBundle((JSONObject) value));
                } else if (value instanceof Float) {
                    bundle.putFloat(key, (Float) value);
                } else if (value instanceof Double) {
                    bundle.putDouble(key, (Double) value);
                }
            }
        } catch (final JSONException e) {
            Log.d(TAG,e.getMessage());

        }
        return bundle;
    }

    public static AdSize fromJSONObjectToAdSize(final JSONObject json) {
        if (json == null) {
            return null;
        }

        return new AdSize(json.optInt("width"), json.optInt("height"));
    }

    public static List<String> fromJsonToListString(JSONArray arr) throws JSONException {
        List<String> list = new ArrayList<>();
        for (int i = 0; i < arr.length(); i++) {
            list.add(arr.getJSONObject(i).getString("name"));
        }
        return list;
    }

    public static List<Integer> fromJsonToListInteger(JSONArray arr) throws JSONException {
        List<Integer> list = new ArrayList<>();
        for (int i = 0; i < arr.length(); i++) {
            list.add(arr.getInt(i));
        }
        return list;
    }

    public static JSONObject fromReferrerDetailsToJSONObject(ReferrerDetails referrerDetails) {
        try {
            return new JSONObject().put("responseCode", InstallReferrerClient.InstallReferrerResponse.OK)
                .put("installReferrer", referrerDetails.getInstallReferrer())
                .put("referrerClickTimestamp", referrerDetails.getReferrerClickTimestampMillisecond())
                .put("installBeginTimestamp", referrerDetails.getInstallBeginTimestampMillisecond())
                .put("installChannel", referrerDetails.getInstallChannel());
        } catch (JSONException ignored) {
            return null;
        }
    }

    public static JSONArray fromInstreamAdListToJson(List<InstreamAd> list) throws JSONException {
        JSONArray json = new JSONArray();

        for (InstreamAd ad : list) {
            json.put(fromInstreamAdToJson(ad));
        }
        return json;
    }

    public static JSONObject fromInstreamAdToJson(InstreamAd instreamAd) throws JSONException {
        return new JSONObject().put("adSource", instreamAd.getAdSource())
            .put("callToAction", instreamAd.getCallToAction())
            .put("duration", instreamAd.getDuration())
            .put("whyThisAdLink", instreamAd.getWhyThisAd())
            .put("getAdSign", instreamAd.getAdSign())
            .put("isClicked", instreamAd.isClicked())
            .put("isExpired", instreamAd.isExpired())
            .put("isImageAd", instreamAd.isImageAd())
            .put("isVideoAd", instreamAd.isVideoAd())
            .put("isShown", instreamAd.isShown());

    }

    public static NativeAdConfiguration setNativeAdOptions(JSONObject json) {
        if (json == null) {
            return null;
        }
        final NativeAdConfiguration.Builder nativeAdConfigurationBuilder
            = new NativeAdConfiguration.Builder().setAdSize(
            Converter.fromJSONObjectToAdSize(json.optJSONObject("adSize")))
            .setChoicesPosition(json.optInt("choicesPosition", NativeAdConfiguration.ChoicesPosition.TOP_LEFT))
            .setReturnUrlsForImages(json.optBoolean("returnUrlsForImages", false))
            .setRequestCustomDislikeThisAd(json.optBoolean("requestCustomDislikeThisAd", false))
            .setRequestMultiImages(json.optBoolean("requestMultiImages", false))
            .setVideoConfiguration(setVideoConfiguration(json.optJSONObject("videoConfiguration")));

        if (json.has("mediaAspect")) {
            nativeAdConfigurationBuilder.setMediaAspect(
                json.optInt("mediaAspect", NativeAdConfiguration.MediaAspect.ASPECT_SQUARE));
        }
        if (json.has("mediaDirection")) {
            nativeAdConfigurationBuilder.setMediaDirection(
                json.optInt("mediaDirection", NativeAdConfiguration.Direction.PORTRAIT));
        }
        return nativeAdConfigurationBuilder.build();
    }

    public static JSONObject fromNativeAdConfigurationToJson(NativeAdConfiguration nativeAdConfiguration)
        throws JSONException {
        return new JSONObject().put("adSize", nativeAdConfiguration.getAdSize())
            .put("choicesPosition", nativeAdConfiguration.getChoicesPosition())
            .put("returnUrlsForImages", nativeAdConfiguration.isReturnUrlsForImages())
            .put("requestMultiImages", nativeAdConfiguration.isRequestMultiImages())
            .put("videoConfiguration", fromVideoConfigurationToJson(nativeAdConfiguration.getVideoConfiguration()))
            .put("mediaAspect", nativeAdConfiguration.getMediaAspect())
            .put("mediaDirection", nativeAdConfiguration.getMediaDirection());
    }

    private static JSONObject fromVideoConfigurationToJson(VideoConfiguration videoConfiguration) throws JSONException {
        return new JSONObject().put("audioFocusType", videoConfiguration.getAudioFocusType())
            .put("clickToFullScreenRequested", videoConfiguration.isClickToFullScreenRequested())
            .put("customizeOperateRequested", videoConfiguration.isCustomizeOperateRequested())
            .put("isStartMuted", videoConfiguration.isStartMuted());
    }

    private static VideoConfiguration setVideoConfiguration(JSONObject json) {
        if (json == null) {
            return null;
        }
        return new VideoConfiguration.Builder().setAudioFocusType(
            json.optInt("audioFocusType", AudioFocusType.NOT_GAIN_AUDIO_FOCUS_WHEN_MUTE))
            .setClickToFullScreenRequested(json.optBoolean("clickToFullScreenRequested", false))
            .setCustomizeOperateRequested(json.optBoolean("customizeOperateRequested", false))
            .setStartMuted(json.optBoolean("isStartMuted", false))
            .build();
    }

    public static JSONArray fromDislikeAdReasonsToJson(final List<DislikeAdReason> dislikeAdReasons) {
        final JSONArray jsonArray = new JSONArray();

        for (final DislikeAdReason dislikeAdReason : dislikeAdReasons) {
            jsonArray.put(dislikeAdReason.getDescription());
        }

        return jsonArray;
    }

    public static VastSdkConfiguration fromJSONObjectToVastSdkConfiguration(JSONObject json) throws JSONException {
        VastSdkConfiguration vastSdkConfiguration = SdkFactory.getConfiguration();
        if (json != null) {
            if (json.has("httpCallTimeoutMs")) {
                vastSdkConfiguration.setHttpCallTimeoutMs(json.getInt("httpCallTimeoutMs"));
            }
            if (json.has("httpConnectTimeoutMs")) {
                vastSdkConfiguration.setHttpConnectTimeoutMs(json.getInt("httpConnectTimeoutMs"));
            }
            if (json.has("httpKeepAliveDurationMs")) {
                vastSdkConfiguration.setHttpKeepAliveDurationMs(json.getInt("httpKeepAliveDurationMs"));
            }
            if (json.has("httpReadTimeoutMs")) {
                vastSdkConfiguration.setHttpReadTimeoutMs(json.getInt("httpReadTimeoutMs"));
            }
            if (json.has("maxHttpConnections")) {
                vastSdkConfiguration.setMaxHttpConnections(json.getInt("maxHttpConnections"));
            }
            if (json.has("maxRedirectWrapperLimit")) {
                vastSdkConfiguration.setMaxRedirectWrapperLimit(json.getInt("maxRedirectWrapperLimit"));
            }
            if (json.has("isTest")) {
                vastSdkConfiguration.setTest(json.getBoolean("isTest"));
            }
            if (json.has("vastEventRetryBatchSize")) {
                vastSdkConfiguration.setVastEventRetryBatchSize(json.getInt("vastEventRetryBatchSize"));
            }
            if (json.has("vastEventRetryIntervalSeconds")) {
                vastSdkConfiguration.setVastEventRetryIntervalSeconds(json.getInt("vastEventRetryIntervalSeconds"));
            }
            if (json.has("vastEventRetryUploadTimes")) {
                vastSdkConfiguration.setVastEventRetryUploadTimes(json.getInt("vastEventRetryUploadTimes"));
            }
        }
        return vastSdkConfiguration;
    }

    public static JSONObject fromVastSdkConfigurationToJson(VastSdkConfiguration vastSdkConfiguration)
        throws JSONException {
        return new JSONObject().put("httpCallTimeoutMs", vastSdkConfiguration.getHttpCallTimeoutMs())
            .put("httpConnectTimeoutMs", vastSdkConfiguration.getHttpConnectTimeoutMs())
            .put("httpKeepAliveDurationMs", vastSdkConfiguration.getHttpKeepAliveDurationMs())
            .put("httpReadTimeoutMs", vastSdkConfiguration.getHttpReadTimeoutMs())
            .put("maxHttpConnections", vastSdkConfiguration.getMaxHttpConnections())
            .put("maxRedirectWrapperLimit", vastSdkConfiguration.getMaxRedirectWrapperLimit())
            .put("isTest", vastSdkConfiguration.isTest())
            .put("vastEventRetryBatchSize", vastSdkConfiguration.getVastEventRetryBatchSize())
            .put("vastEventRetryIntervalSeconds", vastSdkConfiguration.getVastEventRetryIntervalSeconds())
            .put("vastEventRetryUploadTimes", vastSdkConfiguration.getVastEventRetryUploadTimes());
    }

    public static com.huawei.hms.ads.vast.openalliance.ad.beans.parameter.RequestOptions fromJSONObjectToVastRequestOptions(
        JSONObject json) throws JSONException {
        com.huawei.hms.ads.vast.openalliance.ad.beans.parameter.RequestOptions.Builder vastRequestOptions
            = new com.huawei.hms.ads.vast.openalliance.ad.beans.parameter.RequestOptions.Builder();
        if (json != null) {
            if (json.has("adContentClassification")) {
                vastRequestOptions.setAdContentClassification(json.getString("adContentClassification"));
            }
            if (json.has("appCountry")) {
                vastRequestOptions.setAppCountry(json.getString("appCountry"));
            }
            if (json.has("appLang")) {
                vastRequestOptions.setAppLang(json.getString("appLang"));
            }
            if (json.has("nonPersonalizedAd")) {
                vastRequestOptions.setNonPersonalizedAd(json.getInt("nonPersonalizedAd"));
            }
            if (json.has("tagForChildProtection")) {
                vastRequestOptions.setTagForChildProtection(json.getInt("tagForChildProtection"));
            }
            if (json.has("tagForUnderAgeOfPromise")) {
                vastRequestOptions.setTagForUnderAgeOfPromise(json.getInt("tagForUnderAgeOfPromise"));
            }
            if (json.has("requestLocation")) {
                vastRequestOptions.setRequestLocation(json.getBoolean("requestLocation"));
            }
            if (json.has("consent")) {
                vastRequestOptions.setConsent(json.getString("consent"));
            }
        }
        return vastRequestOptions.build();
    }

    public static JSONObject fromVastRequestOptionsToJson(
        com.huawei.hms.ads.vast.openalliance.ad.beans.parameter.RequestOptions vastRequestOptions)
        throws JSONException {

        return new JSONObject().put("adContentClassification", vastRequestOptions.getAdContentClassification())
            .put("appCountry", vastRequestOptions.getAppCountry())
            .put("appLang", vastRequestOptions.getAppLang())
            .put("nonPersonalizedAd", vastRequestOptions.getNonPersonalizedAd())
            .put("tagForChildProtection", vastRequestOptions.getTagForChildProtection())
            .put("tagForUnderAgeOfPromise", vastRequestOptions.getTagForUnderAgeOfPromise())
            .put("isRequestLocation", vastRequestOptions.isRequestLocation())
            .put("consent", vastRequestOptions.getConsent());

    }

    public static LinearAdSlot fromJSONObjectToLinearAdSlot(JSONObject json) throws JSONException {
        LinearAdSlot linearAdSlot = new LinearAdSlot();
        if (json != null) {
            if (json.has("adId")) {
                linearAdSlot.setSlotId(json.getString("adId"));
            }
            if (json.has("totalDuration")) {
                linearAdSlot.setTotalDuration(json.getInt("totalDuration"));
            }
            if (json.has("isAllowMobileTraffic")) {
                linearAdSlot.setAllowMobileTraffic(json.getBoolean("isAllowMobileTraffic"));
            }
            if (json.has("adOrientation")) {
                linearAdSlot.setOrientation(json.getInt("adOrientation"));
            }
            if (json.has("creativeMatchStrategy")) {
                CreativeMatchStrategy creativeMatchStrategy = new CreativeMatchStrategy(
                    toCreativeMatchType(json.getInt("creativeMatchStrategy")));
                linearAdSlot.setCreativeMatchStrategy(creativeMatchStrategy);
            }
            if (json.has("requestOption")) {
                linearAdSlot.setRequestOptions(fromJSONObjectToVastRequestOptions(json.getJSONObject("requestOption")));
            }
            if (json.has("size")) {
                linearAdSlot.setSize(json.getInt("width"), json.getInt("height"));
            }
            if (json.has("maxAdPods")) {
                linearAdSlot.setMaxAdPods(json.getInt("maxAdPods"));
            }
        }

        return linearAdSlot;
    }

    private static CreativeMatchStrategy.CreativeMatchType toCreativeMatchType(int creativeMatchStrategy) {
        switch (creativeMatchStrategy) {
            case 0:
                return CreativeMatchStrategy.CreativeMatchType.EXACT;
            case 1:
                return CreativeMatchStrategy.CreativeMatchType.SMART;
            case 2:
                return CreativeMatchStrategy.CreativeMatchType.UNKNOWN;
            case 3:
                return CreativeMatchStrategy.CreativeMatchType.ANY;
            case 4:
                return CreativeMatchStrategy.CreativeMatchType.LANDSCAPE;
            case 5:
                return CreativeMatchStrategy.CreativeMatchType.PORTRAIT;
            case 6:
                return CreativeMatchStrategy.CreativeMatchType.SQUARE;
            default:
                break;
        }
        return CreativeMatchStrategy.CreativeMatchType.ANY;
    }

    ;

    public static JSONObject fromLinearAdSlotToJson(LinearAdSlot linearAdSlot) throws JSONException {
        return new JSONObject().put("adId", linearAdSlot.getSlotId())
            .put("totalDuration", linearAdSlot.getTotalDuration())
            .put("isAllowMobileTraffic", linearAdSlot.isAllowMobileTraffic())
            .put("adOrientation", linearAdSlot.getOrientation())
            .put("requestOption", linearAdSlot.getRequestOptions())
            .put("maxAdPods", linearAdSlot.getMaxAdPods())
            .put("width", linearAdSlot.getWidth())
            .put("height", linearAdSlot.getHeight())
            .put("creativeMatchStrategy", fromCreativeMatchStrategyToJson(linearAdSlot.getCreativeMatchStrategy()));
    }

    public static JSONObject fromCreativeMatchStrategyToJson(CreativeMatchStrategy creativeMatchStrategy)
        throws JSONException {
        return new JSONObject().put("height", creativeMatchStrategy.getExpectedCreativeHeight())
            .put("width", creativeMatchStrategy.getExpectedCreativeWidth())
            .put("creativeMatchType", creativeMatchStrategy.getCreativeMatchType().getCode());
    }

    public static JSONObject fromLinearCreativeToJson(LinearCreative linearCreative) throws JSONException {
        return new JSONObject().put("contentId", linearCreative.getContentId())
            .put("requestId", linearCreative.getRequestId())
            .put("showId", linearCreative.getShowId())
            .put("slotId", linearCreative.getSlotId())
            .put("type", linearCreative.getType())
            .put("url", linearCreative.getUrl())
            .put("adExtensions", fromCreativeExtensionMapToJson(linearCreative.getAdExtensionMap()))
            .put("typeToCreativeExtensions",
                fromCreativeExtensionMapToJson(linearCreative.getTypeToCreativeExtension()));
    }

    public static JSONObject fromCreativeExtensionMapToJson(Map<String, CreativeExtension> map) throws JSONException {
        JSONObject json = new JSONObject();
        Iterator<Map.Entry<String, CreativeExtension>> iterator = map.entrySet().iterator();
        while (iterator.hasNext()) {
            Map.Entry<String, CreativeExtension> pair = iterator.next();
            json.put(pair.getKey(), pair.getValue());
        }
        return json;
    }

    public static PlayerConfig fromJSONObjectToPlayerConfig(JSONObject json) throws JSONException {
        PlayerConfig.Builder playerConfig = PlayerConfig.newBuilder();
        if (json != null) {
            if (json.has("isEnableCutout")) {
                playerConfig.setIsEnableCutout(json.getBoolean("isEnableCutout"));
            }
            if (json.has("isEnablePortrait")) {
                playerConfig.setIsEnablePortrait(json.getBoolean("isEnablePortrait"));
            }
            if (json.has("isEnableRotation")) {
                playerConfig.setEnableRotation(json.getBoolean("isEnableRotation"));
            }
            if (json.has("isSkipLinearAd")) {
                playerConfig.setSkipLinearAd(json.getBoolean("isSkipLinearAd"));
            }
        }
        return playerConfig.build();
    }

    public static JSONObject fromPlayerConfigToJson(PlayerConfig playerConfig) throws JSONException {
        return new JSONObject().put("isEnableCutout", playerConfig.isEnableCutout())
            .put("isEnablePortrait", playerConfig.isEnablePortrait())
            .put("isEnableRotation", playerConfig.isEnableRotation())
            .put("isForceMute", playerConfig.isForceMute())
            .put("isIndustryIconShow", playerConfig.isIndustryIconShow())
            .put("isSkipLinearAd", playerConfig.isSkipLinearAd());
    }

}
