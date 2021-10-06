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
import { __extends } from "tslib";
import { Injectable } from "@angular/core";
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from "@ionic-native/core";
///////////////////////////////////////////////////////////////
// Constants
///////////////////////////////////////////////////////////////
export var AdParamErrorCodes;
(function (AdParamErrorCodes) {
    AdParamErrorCodes[AdParamErrorCodes["AD_PARAM_INNER"] = 0] = "AD_PARAM_INNER";
    AdParamErrorCodes[AdParamErrorCodes["AD_PARAM_INVALID_REQUEST"] = 1] = "AD_PARAM_INVALID_REQUEST";
    AdParamErrorCodes[AdParamErrorCodes["AD_PARAM_NETWORK_ERROR"] = 2] = "AD_PARAM_NETWORK_ERROR";
    AdParamErrorCodes[AdParamErrorCodes["AD_PARAM_NO_AD"] = 3] = "AD_PARAM_NO_AD";
    AdParamErrorCodes[AdParamErrorCodes["AD_PARAM_AD_LOADING"] = 4] = "AD_PARAM_AD_LOADING";
    AdParamErrorCodes[AdParamErrorCodes["AD_PARAM_LOW_API"] = 5] = "AD_PARAM_LOW_API";
    AdParamErrorCodes[AdParamErrorCodes["AD_PARAM_BANNER_AD_EXPIRE"] = 6] = "AD_PARAM_BANNER_AD_EXPIRE";
    AdParamErrorCodes[AdParamErrorCodes["AD_PARAM_BANNER_AD_CANCEL"] = 7] = "AD_PARAM_BANNER_AD_CANCEL";
    AdParamErrorCodes[AdParamErrorCodes["AD_PARAM_HMS_NOT_SUPPORT_SET_APP"] = 8] = "AD_PARAM_HMS_NOT_SUPPORT_SET_APP";
})(AdParamErrorCodes || (AdParamErrorCodes = {}));
export var RewardAdStatusErrorCodes;
(function (RewardAdStatusErrorCodes) {
    RewardAdStatusErrorCodes[RewardAdStatusErrorCodes["REWARD_AD_STATUS_INTERNAL"] = 0] = "REWARD_AD_STATUS_INTERNAL";
    RewardAdStatusErrorCodes[RewardAdStatusErrorCodes["REWARD_AD_STATUS_REUSED"] = 1] = "REWARD_AD_STATUS_REUSED";
    RewardAdStatusErrorCodes[RewardAdStatusErrorCodes["REWARD_AD_STATUS_NOT_LOADED"] = 2] = "REWARD_AD_STATUS_NOT_LOADED";
    RewardAdStatusErrorCodes[RewardAdStatusErrorCodes["REWARD_AD_STATUS_BACKGROUND"] = 3] = "REWARD_AD_STATUS_BACKGROUND";
})(RewardAdStatusErrorCodes || (RewardAdStatusErrorCodes = {}));
export var AdContentClassification;
(function (AdContentClassification) {
    AdContentClassification["AD_CONTENT_CLASSIFICATION_A"] = "A";
    AdContentClassification["AD_CONTENT_CLASSIFICATION_PI"] = "PI";
    AdContentClassification["AD_CONTENT_CLASSIFICATION_UNKNOWN"] = "";
    AdContentClassification["AD_CONTENT_CLASSIFICATION_J"] = "J";
    AdContentClassification["AD_CONTENT_CLASSIFICATION_W"] = "W";
})(AdContentClassification || (AdContentClassification = {}));
export var Gender;
(function (Gender) {
    Gender[Gender["FEMALE"] = 2] = "FEMALE";
    Gender[Gender["MALE"] = 1] = "MALE";
    Gender[Gender["UNKNOWN"] = 0] = "UNKNOWN";
})(Gender || (Gender = {}));
export var NonPersonalizedAd;
(function (NonPersonalizedAd) {
    NonPersonalizedAd[NonPersonalizedAd["ALLOW_ALL"] = 0] = "ALLOW_ALL";
    NonPersonalizedAd[NonPersonalizedAd["ALLOW_NON_PERSONALIZED"] = 1] = "ALLOW_NON_PERSONALIZED";
})(NonPersonalizedAd || (NonPersonalizedAd = {}));
export var ChildProtection;
(function (ChildProtection) {
    ChildProtection[ChildProtection["TAG_FOR_CHILD_PROTECTION_UNSPECIFIED"] = -1] = "TAG_FOR_CHILD_PROTECTION_UNSPECIFIED";
    ChildProtection[ChildProtection["TAG_FOR_CHILD_PROTECTION_FALSE"] = 0] = "TAG_FOR_CHILD_PROTECTION_FALSE";
    ChildProtection[ChildProtection["TAG_FOR_CHILD_PROTECTION_TRUE"] = 1] = "TAG_FOR_CHILD_PROTECTION_TRUE";
})(ChildProtection || (ChildProtection = {}));
export var UnderAgeOfPromise;
(function (UnderAgeOfPromise) {
    UnderAgeOfPromise[UnderAgeOfPromise["PROMISE_UNSPECIFIED"] = -1] = "PROMISE_UNSPECIFIED";
    UnderAgeOfPromise[UnderAgeOfPromise["PROMISE_FALSE"] = 0] = "PROMISE_FALSE";
    UnderAgeOfPromise[UnderAgeOfPromise["PROMISE_TRUE"] = 1] = "PROMISE_TRUE";
})(UnderAgeOfPromise || (UnderAgeOfPromise = {}));
export var BannerAdSize;
(function (BannerAdSize) {
    BannerAdSize["BANNER_SIZE_360_57"] = "BANNER_SIZE_360_57";
    BannerAdSize["BANNER_SIZE_360_144"] = "BANNER_SIZE_360_144";
    BannerAdSize["BANNER_SIZE_160_600"] = "BANNER_SIZE_160_600";
    BannerAdSize["BANNER_SIZE_300_250"] = "BANNER_SIZE_300_250";
    BannerAdSize["BANNER_SIZE_320_100"] = "BANNER_SIZE_320_100";
    BannerAdSize["BANNER_SIZE_320_50"] = "BANNER_SIZE_320_50";
    BannerAdSize["BANNER_SIZE_468_60"] = "BANNER_SIZE_468_60";
    BannerAdSize["BANNER_SIZE_728_90"] = "BANNER_SIZE_728_90";
    BannerAdSize["BANNER_SIZE_DYNAMIC"] = "BANNER_SIZE_DYNAMIC";
    BannerAdSize["BANNER_SIZE_INVALID"] = "BANNER_SIZE_INVALID";
    BannerAdSize["BANNER_SIZE_SMART"] = "BANNER_SIZE_SMART";
})(BannerAdSize || (BannerAdSize = {}));
export var HMSScreenOrientation;
(function (HMSScreenOrientation) {
    HMSScreenOrientation[HMSScreenOrientation["SCREEN_ORIENTATION_LANDSCAPE"] = 0] = "SCREEN_ORIENTATION_LANDSCAPE";
    HMSScreenOrientation[HMSScreenOrientation["SCREEN_ORIENTATION_UNSPECIFIED"] = -1] = "SCREEN_ORIENTATION_UNSPECIFIED";
    HMSScreenOrientation[HMSScreenOrientation["SCREEN_ORIENTATION_PORTRAIT"] = 1] = "SCREEN_ORIENTATION_PORTRAIT";
    HMSScreenOrientation[HMSScreenOrientation["SCREEN_ORIENTATION_USER"] = 2] = "SCREEN_ORIENTATION_USER";
    HMSScreenOrientation[HMSScreenOrientation["SCREEN_ORIENTATION_BEHIND"] = 3] = "SCREEN_ORIENTATION_BEHIND";
    HMSScreenOrientation[HMSScreenOrientation["SCREEN_ORIENTATION_SENSOR"] = 4] = "SCREEN_ORIENTATION_SENSOR";
    HMSScreenOrientation[HMSScreenOrientation["SCREEN_ORIENTATION_NOSENSOR"] = 5] = "SCREEN_ORIENTATION_NOSENSOR";
    HMSScreenOrientation[HMSScreenOrientation["SCREEN_ORIENTATION_SENSOR_LANDSCAPE"] = 6] = "SCREEN_ORIENTATION_SENSOR_LANDSCAPE";
    HMSScreenOrientation[HMSScreenOrientation["SCREEN_ORIENTATION_SENSOR_PORTRAIT"] = 7] = "SCREEN_ORIENTATION_SENSOR_PORTRAIT";
    HMSScreenOrientation[HMSScreenOrientation["SCREEN_ORIENTATION_REVERSE_LANDSCAPE"] = 8] = "SCREEN_ORIENTATION_REVERSE_LANDSCAPE";
    HMSScreenOrientation[HMSScreenOrientation["SCREEN_ORIENTATION_REVERSE_PORTRAIT"] = 9] = "SCREEN_ORIENTATION_REVERSE_PORTRAIT";
    HMSScreenOrientation[HMSScreenOrientation["SCREEN_ORIENTATION_FULL_SENSOR"] = 10] = "SCREEN_ORIENTATION_FULL_SENSOR";
    HMSScreenOrientation[HMSScreenOrientation["SCREEN_ORIENTATION_USER_LANDSCAPE"] = 11] = "SCREEN_ORIENTATION_USER_LANDSCAPE";
    HMSScreenOrientation[HMSScreenOrientation["SCREEN_ORIENTATION_USER_PORTRAIT"] = 12] = "SCREEN_ORIENTATION_USER_PORTRAIT";
    HMSScreenOrientation[HMSScreenOrientation["SCREEN_ORIENTATION_FULL_USER"] = 13] = "SCREEN_ORIENTATION_FULL_USER";
    HMSScreenOrientation[HMSScreenOrientation["SCREEN_ORIENTATION_LOCKED"] = 14] = "SCREEN_ORIENTATION_LOCKED";
})(HMSScreenOrientation || (HMSScreenOrientation = {}));
export var DebugNeedConsent;
(function (DebugNeedConsent) {
    DebugNeedConsent[DebugNeedConsent["CONSENT_DEBUG_DISABLED"] = 0] = "CONSENT_DEBUG_DISABLED";
    DebugNeedConsent[DebugNeedConsent["CONSENT_DEBUG_NEED_CONSENT"] = 1] = "CONSENT_DEBUG_NEED_CONSENT";
    DebugNeedConsent[DebugNeedConsent["CONSENT_DEBUG_NOT_NEED_CONSENT"] = 2] = "CONSENT_DEBUG_NOT_NEED_CONSENT";
})(DebugNeedConsent || (DebugNeedConsent = {}));
export var ConsentStatus;
(function (ConsentStatus) {
    ConsentStatus[ConsentStatus["CONSENT_PERSONALIZED"] = 0] = "CONSENT_PERSONALIZED";
    ConsentStatus[ConsentStatus["CONSENT_NON_PERSONALIZED"] = 1] = "CONSENT_NON_PERSONALIZED";
    ConsentStatus[ConsentStatus["CONSENT_UNKNOWN"] = 2] = "CONSENT_UNKNOWN";
})(ConsentStatus || (ConsentStatus = {}));
export var AudioFocusType;
(function (AudioFocusType) {
    AudioFocusType[AudioFocusType["GAIN_AUDIO_FOCUS_ALL"] = 0] = "GAIN_AUDIO_FOCUS_ALL";
    AudioFocusType[AudioFocusType["NOT_GAIN_AUDIO_FOCUS_WHEN_MUTE"] = 1] = "NOT_GAIN_AUDIO_FOCUS_WHEN_MUTE";
    AudioFocusType[AudioFocusType["NOT_GAIN_AUDIO_FOCUS_ALL"] = 2] = "NOT_GAIN_AUDIO_FOCUS_ALL";
})(AudioFocusType || (AudioFocusType = {}));
export var MediaAspect;
(function (MediaAspect) {
    MediaAspect[MediaAspect["ASPECT_ANY"] = 1] = "ASPECT_ANY";
    MediaAspect[MediaAspect["ASPECT_CUSTOM_SIZE"] = -1] = "ASPECT_CUSTOM_SIZE";
    MediaAspect[MediaAspect["ASPECT_LANDSCAPE"] = 2] = "ASPECT_LANDSCAPE";
    MediaAspect[MediaAspect["ASPECT_PORTRAIT"] = 3] = "ASPECT_PORTRAIT";
    MediaAspect[MediaAspect["ASPECT_SQUARE"] = 4] = "ASPECT_SQUARE";
    MediaAspect[MediaAspect["ASPECT_UNKNOWN"] = 0] = "ASPECT_UNKNOWN";
})(MediaAspect || (MediaAspect = {}));
export var ChoicesPosition;
(function (ChoicesPosition) {
    ChoicesPosition[ChoicesPosition["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
    ChoicesPosition[ChoicesPosition["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
    ChoicesPosition[ChoicesPosition["INVISIBLE"] = 4] = "INVISIBLE";
    ChoicesPosition[ChoicesPosition["TOP_LEFT"] = 0] = "TOP_LEFT";
    ChoicesPosition[ChoicesPosition["TOP_RIGHT"] = 1] = "TOP_RIGHT";
})(ChoicesPosition || (ChoicesPosition = {}));
export var MediaDirection;
(function (MediaDirection) {
    MediaDirection[MediaDirection["ANY"] = 0] = "ANY";
    MediaDirection[MediaDirection["LANDSCAPE"] = 2] = "LANDSCAPE";
    MediaDirection[MediaDirection["PORTRAIT"] = 1] = "PORTRAIT";
})(MediaDirection || (MediaDirection = {}));
export var NativeAdTemplate;
(function (NativeAdTemplate) {
    NativeAdTemplate["NATIVE_AD_SMALL_TEMPLATE"] = "NATIVE_AD_SMALL_TEMPLATE";
    NativeAdTemplate["NATIVE_AD_FULL_TEMPLATE"] = "NATIVE_AD_FULL_TEMPLATE";
    NativeAdTemplate["NATIVE_AD_BANNER_TEMPLATE"] = "NATIVE_AD_BANNER_TEMPLATE";
    NativeAdTemplate["NATIVE_AD_VIDEO_TEMPLATE"] = "NATIVE_AD_VIDEO_TEMPLATE";
})(NativeAdTemplate || (NativeAdTemplate = {}));
export var Color;
(function (Color) {
    Color["RED"] = "RED";
    Color["DKGRAY"] = "DKGRAY";
    Color["GRAY"] = "GRAY";
    Color["WHITE"] = "WHITE";
    Color["BLUE"] = "BLUE";
    Color["BLACK"] = "BLACK";
    Color["LTGRAY"] = "LTGRAY";
    Color["MAGENTA"] = "MAGENTA";
    Color["YELLOW"] = "YELLOW";
    Color["CYAN"] = "CYAN";
    Color["GREEN"] = "GREEN";
    Color["TRANSPARENT"] = "TRANSPARENT";
})(Color || (Color = {}));
export var InstallReferrerResponses;
(function (InstallReferrerResponses) {
    InstallReferrerResponses[InstallReferrerResponses["SERVICE_DISCONNECTED"] = -1] = "SERVICE_DISCONNECTED";
    InstallReferrerResponses[InstallReferrerResponses["DEVELOPER_ERROR"] = 3] = "DEVELOPER_ERROR";
    InstallReferrerResponses[InstallReferrerResponses["SERVICE_UNAVAILABLE"] = 1] = "SERVICE_UNAVAILABLE";
    InstallReferrerResponses[InstallReferrerResponses["OK"] = 0] = "OK";
    InstallReferrerResponses[InstallReferrerResponses["FEATURE_NOT_SUPPORTED"] = 2] = "FEATURE_NOT_SUPPORTED";
})(InstallReferrerResponses || (InstallReferrerResponses = {}));
export var Anchor;
(function (Anchor) {
    Anchor["TOP"] = "top";
    Anchor["BOTTOM"] = "bottom";
    Anchor["INVISIBLE"] = "invisible";
})(Anchor || (Anchor = {}));
export var BannerAdEvents;
(function (BannerAdEvents) {
    BannerAdEvents["BANNER_AD_CLOSED"] = "banner_ad_closed";
    BannerAdEvents["BANNER_AD_FAILED"] = "banner_ad_failed";
    BannerAdEvents["BANNER_AD_LEAVE"] = "banner_ad_leave";
    BannerAdEvents["BANNER_AD_OPENED"] = "banner_ad_opened";
    BannerAdEvents["BANNER_AD_LOADED"] = "banner_ad_loaded";
    BannerAdEvents["BANNER_AD_CLICKED"] = "banner_ad_clicked";
    BannerAdEvents["BANNER_AD_IMPRESSION"] = "banner_ad_impression";
})(BannerAdEvents || (BannerAdEvents = {}));
export var InterstitialAdEvents;
(function (InterstitialAdEvents) {
    InterstitialAdEvents["INTERSTITIAL_AD_CLOSED"] = "interstitial_ad_closed";
    InterstitialAdEvents["INTERSTITIAL_AD_FAILED"] = "interstitial_ad_failed";
    InterstitialAdEvents["INTERSTITIAL_AD_LEAVE"] = "interstitial_ad_leave";
    InterstitialAdEvents["INTERSTITIAL_AD_OPENED"] = "interstitial_ad_opened";
    InterstitialAdEvents["INTERSTITIAL_AD_LOADED"] = "interstitial_ad_loaded";
    InterstitialAdEvents["INTERSTITIAL_AD_CLICKED"] = "interstitial_ad_clicked";
    InterstitialAdEvents["INTERSTITIAL_AD_IMPRESSION"] = "interstitial_ad_impression";
    InterstitialAdEvents["INTERSTITIAL_AD_REWARDED"] = "interstitial_ad_rewarded";
    InterstitialAdEvents["INTERSTITIAL_REWARD_AD_CLOSED"] = "interstitial_reward_ad_closed";
    InterstitialAdEvents["INTERSTITIAL_REWARD_AD_FAILED_TO_LOAD"] = "interstitial_reward_ad_failed_to_load";
    InterstitialAdEvents["INTERSTITIAL_REWARD_AD_LEFT_APP"] = "interstitial_reward_ad_left_app";
    InterstitialAdEvents["INTERSTITIAL_REWARD_AD_LOADED"] = "interstitial_reward_ad_loaded";
    InterstitialAdEvents["INTERSTITIAL_REWARD_AD_OPENED"] = "interstitial_reward_ad_opened";
    InterstitialAdEvents["INTERSTITIAL_REWARD_AD_COMPLETED"] = "interstitial_reward_ad_completed";
    InterstitialAdEvents["INTERSTITIAL_REWARD_AD_STARTED"] = "interstitial_reward_ad_started";
})(InterstitialAdEvents || (InterstitialAdEvents = {}));
export var SplashAdEvents;
(function (SplashAdEvents) {
    SplashAdEvents["SPLASH_AD_FAILED_TO_LOAD"] = "splash_ad_failed_to_load";
    SplashAdEvents["SPLASH_AD_LOADED"] = "splash_ad_loaded";
    SplashAdEvents["SPLASH_AD_DISMISSED"] = "splash_ad_dismissed";
    SplashAdEvents["SPLASH_AD_SHOWED"] = "splash_ad_showed";
    SplashAdEvents["SPLASH_AD_CLICK"] = "splash_ad_click";
})(SplashAdEvents || (SplashAdEvents = {}));
export var RollAdEvents;
(function (RollAdEvents) {
    RollAdEvents["ROLL_AD_LOAD_FAILED"] = "roll_ad_load_failed";
    RollAdEvents["ROLL_AD_LOADED"] = "roll_ad_loaded";
    RollAdEvents["ROLL_AD_MEDIA_CHANGED"] = "roll_ad_media_changed";
    RollAdEvents["ROLL_AD_CLICKED"] = "roll_ad_clicked";
    RollAdEvents["ROLL_AD_MEDIA_PROGRESS"] = "roll_ad_media_progress";
    RollAdEvents["ROLL_AD_MEDIA_START"] = "roll_ad_media_start";
    RollAdEvents["ROLL_AD_MEDIA_PAUSE"] = "roll_ad_media_pause";
    RollAdEvents["ROLL_AD_MEDIA_STOP"] = "roll_ad_media_stop";
    RollAdEvents["ROLL_AD_MEDIA_COMPLETION"] = "roll_ad_media_completion";
    RollAdEvents["ROLL_AD_MEDIA_ERROR"] = "roll_ad_media_error";
    RollAdEvents["ROLL_AD_MEDIA_UNMUTE"] = "roll_ad_media_unmute";
    RollAdEvents["ROLL_AD_MEDIA_MUTE"] = "roll_ad_media_mute";
    RollAdEvents["ROLL_AD_WHY_THIS_AD"] = "roll_ad_why_this_ad";
})(RollAdEvents || (RollAdEvents = {}));
export var RewardAdEvents;
(function (RewardAdEvents) {
    RewardAdEvents["REWARD_METADATA_CHANGED"] = "reward_metadata_changed";
    RewardAdEvents["REWARD_AD_FAILED_TO_LOAD_LOAD"] = "reward_ad_failed_to_load_load";
    RewardAdEvents["REWARDED_LOADED"] = "rewarded_loaded";
    RewardAdEvents["REWARDED_STATUS"] = "rewarded_status";
    RewardAdEvents["REWARD_AD_CLOSED_STATUS"] = "reward_ad_closed_status";
    RewardAdEvents["REWARD_AD_OPENED_STATUS"] = "reward_ad_opened_status";
    RewardAdEvents["REWARD_AD_FAILED_TO_SHOW"] = "reward_ad_failed_to_show";
    RewardAdEvents["REWARDED"] = "rewarded";
    RewardAdEvents["REWARD_AD_CLOSED"] = "reward_ad_closed";
    RewardAdEvents["REWARD_AD_FAILED_TO_LOAD"] = "reward_ad_failed_to_load";
    RewardAdEvents["REWARD_AD_LOADED"] = "reward_ad_loaded";
    RewardAdEvents["REWARD_AD_OPENED"] = "reward_ad_opened";
})(RewardAdEvents || (RewardAdEvents = {}));
export var DetailedCreativeType;
(function (DetailedCreativeType) {
    DetailedCreativeType[DetailedCreativeType["BIG_IMG"] = 901] = "BIG_IMG";
    DetailedCreativeType[DetailedCreativeType["VIDEO"] = 903] = "VIDEO";
    DetailedCreativeType[DetailedCreativeType["THREE_IMG"] = 904] = "THREE_IMG";
    DetailedCreativeType[DetailedCreativeType["SMALL_IMG"] = 905] = "SMALL_IMG";
    DetailedCreativeType[DetailedCreativeType["SINGLE_IMG"] = 909] = "SINGLE_IMG";
    DetailedCreativeType[DetailedCreativeType["SHORT_TEXT"] = 913] = "SHORT_TEXT";
    DetailedCreativeType[DetailedCreativeType["LONG_TEXT"] = 914] = "LONG_TEXT";
})(DetailedCreativeType || (DetailedCreativeType = {}));
export var NativeAdEvents;
(function (NativeAdEvents) {
    NativeAdEvents["NATIVE_AD_DISLIKED"] = "native_ad_disliked";
    NativeAdEvents["NATIVE_AD_LOADED_LOAD"] = "native_ad_loaded_load";
    NativeAdEvents["NATIVE_AD_CLOSED"] = "native_ad_closed";
    NativeAdEvents["NATIVE_AD_FAILED"] = "native_ad_failed";
    NativeAdEvents["NATIVE_AD_LEAVE"] = "native_ad_leave";
    NativeAdEvents["NATIVE_AD_OPENED"] = "native_ad_opened";
    NativeAdEvents["NATIVE_AD_LOADED"] = "native_ad_loaded";
    NativeAdEvents["NATIVE_AD_CLICKED"] = "native_ad_clicked";
    NativeAdEvents["NATIVE_AD_IMPRESSION"] = "native_ad_impression";
    NativeAdEvents["VIDEO_OPERATOR_VIDEO_START"] = "video_operator_video_start";
    NativeAdEvents["VIDEO_OPERATOR_VIDEO_PLAY"] = "video_operator_video_play";
    NativeAdEvents["VIDEO_OPERATOR_VIDEO_PAUSE"] = "video_operator_video_pause";
    NativeAdEvents["VIDEO_OPERATOR_VIDEO_END"] = "video_operator_video_end";
    NativeAdEvents["VIDEO_OPERATOR_VIDEO_MUTE"] = "video_operator_video_mute";
})(NativeAdEvents || (NativeAdEvents = {}));
var HMSAds = /** @class */ (function (_super) {
    __extends(HMSAds, _super);
    function HMSAds() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSAds.prototype.on = function (event, callback) { return cordova(this, "on", { "otherPromise": true }, arguments); };
    HMSAds.prototype.init = function () { return cordova(this, "init", { "otherPromise": true }, arguments); };
    HMSAds.prototype.getSDKVersion = function () { return cordova(this, "getSDKVersion", { "otherPromise": true }, arguments); };
    HMSAds.prototype.getRequestOptions = function () { return cordova(this, "getRequestOptions", { "otherPromise": true }, arguments); };
    HMSAds.prototype.setRequestOptions = function (requestOptions) { return cordova(this, "setRequestOptions", { "otherPromise": true }, arguments); };
    HMSAds.prototype.setConsent = function (consent) { return cordova(this, "setConsent", { "otherPromise": true }, arguments); };
    HMSAds.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HMSAds.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSAds.prototype.addTestDeviceId = function (testDeviceId) { return cordova(this, "addTestDeviceId", { "otherPromise": true }, arguments); };
    HMSAds.prototype.getTestDeviceId = function () { return cordova(this, "getTestDeviceId", { "otherPromise": true }, arguments); };
    HMSAds.prototype.setUnderAgeOfPromise = function (underAgeOfPromise) { return cordova(this, "setUnderAgeOfPromise", { "otherPromise": true }, arguments); };
    HMSAds.prototype.setConsentStatus = function (consentStatus) { return cordova(this, "setConsentStatus", { "otherPromise": true }, arguments); };
    HMSAds.prototype.setDebugNeedConsent = function (debugNeedConsent) { return cordova(this, "setDebugNeedConsent", { "otherPromise": true }, arguments); };
    HMSAds.prototype.requestConsentUpdate = function () { return cordova(this, "requestConsentUpdate", { "otherPromise": true }, arguments); };
    HMSAds.prototype.verifyAdId = function (adId, isLimitAdTracking) { return cordova(this, "verifyAdId", { "otherPromise": true }, arguments); };
    HMSAds.prototype.getAdvertisingIdInfo = function () { return cordova(this, "getAdvertisingIdInfo", { "otherPromise": true }, arguments); };
    HMSAds.prototype.referrerClientStartConnection = function (isTest) { return cordova(this, "referrerClientStartConnection", { "otherPromise": true }, arguments); };
    HMSAds.prototype.referrerClientEndConnection = function () { return cordova(this, "referrerClientEndConnection", { "otherPromise": true }, arguments); };
    HMSAds.prototype.referrerClientIsReady = function () { return cordova(this, "referrerClientIsReady", { "otherPromise": true }, arguments); };
    HMSAds.prototype.getInstallReferrer = function () { return cordova(this, "getInstallReferrer", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSAds.prototype, "HMSInterstitialAd", {
        get: function () { return cordovaPropertyGet(this, "HMSInterstitialAd"); },
        set: function (value) { cordovaPropertySet(this, "HMSInterstitialAd", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSAds.prototype, "HMSBannerAd", {
        get: function () { return cordovaPropertyGet(this, "HMSBannerAd"); },
        set: function (value) { cordovaPropertySet(this, "HMSBannerAd", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSAds.prototype, "HMSSplashAd", {
        get: function () { return cordovaPropertyGet(this, "HMSSplashAd"); },
        set: function (value) { cordovaPropertySet(this, "HMSSplashAd", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSAds.prototype, "HMSRewardAd", {
        get: function () { return cordovaPropertyGet(this, "HMSRewardAd"); },
        set: function (value) { cordovaPropertySet(this, "HMSRewardAd", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSAds.prototype, "HMSNativeAd", {
        get: function () { return cordovaPropertyGet(this, "HMSNativeAd"); },
        set: function (value) { cordovaPropertySet(this, "HMSNativeAd", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSAds.prototype, "HMSRollAd", {
        get: function () { return cordovaPropertyGet(this, "HMSRollAd"); },
        set: function (value) { cordovaPropertySet(this, "HMSRollAd", value); },
        enumerable: false,
        configurable: true
    });
    HMSAds.pluginName = "HMSAds";
    HMSAds.plugin = "cordova-plugin-hms-ads";
    HMSAds.pluginRef = "HMSAds";
    HMSAds.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSAds.platforms = ["Android"];
    HMSAds.decorators = [
        { type: Injectable }
    ];
    return HMSAds;
}(IonicNativePlugin));
export { HMSAds };
var HMSBannerAd = /** @class */ (function (_super) {
    __extends(HMSBannerAd, _super);
    function HMSBannerAd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSBannerAd.prototype.on = function (eventName, callback) { return cordova(this, "on", { "otherPromise": true }, arguments); };
    HMSBannerAd.prototype.create = function (divId, bounds) { return cordova(this, "create", { "otherPromise": true }, arguments); };
    HMSBannerAd.prototype.scroll = function () { return cordova(this, "scroll", { "otherPromise": true }, arguments); };
    HMSBannerAd.prototype.getAdId = function () { return cordova(this, "getAdId", { "otherPromise": true }, arguments); };
    HMSBannerAd.prototype.setAdId = function (adId) { return cordova(this, "setAdId", { "otherPromise": true }, arguments); };
    HMSBannerAd.prototype.getBannerAdSize = function () { return cordova(this, "getBannerAdSize", { "otherPromise": true }, arguments); };
    HMSBannerAd.prototype.setBannerAdSize = function (bannerAdSize) { return cordova(this, "setBannerAdSize", { "otherPromise": true }, arguments); };
    HMSBannerAd.prototype.setBackgroundColor = function (bgColor) { return cordova(this, "setBackgroundColor", { "otherPromise": true }, arguments); };
    HMSBannerAd.prototype.setBannerRefresh = function (bannerRefresh) { return cordova(this, "setBannerRefresh", { "otherPromise": true }, arguments); };
    HMSBannerAd.prototype.setAdListener = function () { return cordova(this, "setAdListener", { "otherPromise": true }, arguments); };
    HMSBannerAd.prototype.isLoading = function () { return cordova(this, "isLoading", { "otherPromise": true }, arguments); };
    HMSBannerAd.prototype.loadAd = function (adParam) { return cordova(this, "loadAd", { "otherPromise": true }, arguments); };
    HMSBannerAd.prototype.pause = function () { return cordova(this, "pause", { "otherPromise": true }, arguments); };
    HMSBannerAd.prototype.resume = function () { return cordova(this, "resume", { "otherPromise": true }, arguments); };
    HMSBannerAd.prototype.destroy = function () { return cordova(this, "destroy", { "otherPromise": true }, arguments); };
    HMSBannerAd.prototype.getHeight = function () { return cordova(this, "getHeight", { "otherPromise": true }, arguments); };
    HMSBannerAd.prototype.getHeightPx = function () { return cordova(this, "getHeightPx", { "otherPromise": true }, arguments); };
    HMSBannerAd.prototype.getWidth = function () { return cordova(this, "getWidth", { "otherPromise": true }, arguments); };
    HMSBannerAd.prototype.getWidthPx = function () { return cordova(this, "getWidthPx", { "otherPromise": true }, arguments); };
    HMSBannerAd.prototype.isAutoHeightSize = function () { return cordova(this, "isAutoHeightSize", { "otherPromise": true }, arguments); };
    HMSBannerAd.prototype.isDynamicSize = function () { return cordova(this, "isDynamicSize", { "otherPromise": true }, arguments); };
    HMSBannerAd.prototype.isFullWidthSize = function () { return cordova(this, "isFullWidthSize", { "otherPromise": true }, arguments); };
    HMSBannerAd.prototype.getCurrentDirectionBannerSize = function (width) { return cordova(this, "getCurrentDirectionBannerSize", { "otherPromise": true }, arguments); };
    HMSBannerAd.prototype.getLandscapeBannerSize = function (width) { return cordova(this, "getLandscapeBannerSize", { "otherPromise": true }, arguments); };
    HMSBannerAd.prototype.getPortraitBannerSize = function (width) { return cordova(this, "getPortraitBannerSize", { "otherPromise": true }, arguments); };
    HMSBannerAd.pluginName = "HMSAds";
    HMSBannerAd.plugin = "cordova-plugin-hms-ads";
    HMSBannerAd.pluginRef = "HMSAds.HMSBannerAd";
    HMSBannerAd.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSBannerAd.platforms = ["Android"];
    HMSBannerAd.decorators = [
        { type: Injectable }
    ];
    return HMSBannerAd;
}(IonicNativePlugin));
export { HMSBannerAd };
var HMSInterstitialAd = /** @class */ (function (_super) {
    __extends(HMSInterstitialAd, _super);
    function HMSInterstitialAd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSInterstitialAd.prototype.on = function (eventName, callback) { return cordova(this, "on", { "otherPromise": true }, arguments); };
    HMSInterstitialAd.prototype.create = function (useActivity) { return cordova(this, "create", { "otherPromise": true }, arguments); };
    HMSInterstitialAd.prototype.scroll = function () { return cordova(this, "scroll", { "otherPromise": true }, arguments); };
    HMSInterstitialAd.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    HMSInterstitialAd.prototype.isLoaded = function () { return cordova(this, "isLoaded", { "otherPromise": true }, arguments); };
    HMSInterstitialAd.prototype.isLoading = function () { return cordova(this, "isLoading", { "otherPromise": true }, arguments); };
    HMSInterstitialAd.prototype.loadAd = function (adParam) { return cordova(this, "loadAd", { "otherPromise": true }, arguments); };
    HMSInterstitialAd.prototype.setAdId = function (adId) { return cordova(this, "setAdId", { "otherPromise": true }, arguments); };
    HMSInterstitialAd.prototype.getAdId = function () { return cordova(this, "getAdId", { "otherPromise": true }, arguments); };
    HMSInterstitialAd.prototype.setAdListener = function () { return cordova(this, "setAdListener", { "otherPromise": true }, arguments); };
    HMSInterstitialAd.prototype.setRewardAdListener = function () { return cordova(this, "setRewardAdListener", { "otherPromise": true }, arguments); };
    HMSInterstitialAd.prototype.videoOperatorGetAspectRatio = function () { return cordova(this, "videoOperatorGetAspectRatio", { "otherPromise": true }, arguments); };
    HMSInterstitialAd.prototype.videoOperatorHasVideo = function () { return cordova(this, "videoOperatorHasVideo", { "otherPromise": true }, arguments); };
    HMSInterstitialAd.prototype.videoOperatorIsCustomizeOperateEnabled = function () { return cordova(this, "videoOperatorIsCustomizeOperateEnabled", { "otherPromise": true }, arguments); };
    HMSInterstitialAd.prototype.videoOperatorIsMuted = function () { return cordova(this, "videoOperatorIsMuted", { "otherPromise": true }, arguments); };
    HMSInterstitialAd.prototype.videoOperatorMute = function (mute) { return cordova(this, "videoOperatorMute", { "otherPromise": true }, arguments); };
    HMSInterstitialAd.prototype.videoOperatorPause = function () { return cordova(this, "videoOperatorPause", { "otherPromise": true }, arguments); };
    HMSInterstitialAd.prototype.videoOperatorPlay = function () { return cordova(this, "videoOperatorPlay", { "otherPromise": true }, arguments); };
    HMSInterstitialAd.prototype.videoOperatorStop = function () { return cordova(this, "videoOperatorStop", { "otherPromise": true }, arguments); };
    HMSInterstitialAd.pluginName = "HMSAds";
    HMSInterstitialAd.plugin = "cordova-plugin-hms-ads";
    HMSInterstitialAd.pluginRef = "HMSAds.HMSInterstitialAd";
    HMSInterstitialAd.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSInterstitialAd.platforms = ["Android"];
    HMSInterstitialAd.decorators = [
        { type: Injectable }
    ];
    return HMSInterstitialAd;
}(IonicNativePlugin));
export { HMSInterstitialAd };
var HMSNativeAd = /** @class */ (function (_super) {
    __extends(HMSNativeAd, _super);
    function HMSNativeAd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSNativeAd.prototype.on = function (eventName, callback) { return cordova(this, "on", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.create = function (options, bounds) { return cordova(this, "create", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.loadAd = function (options) { return cordova(this, "loadAd", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.isLoading = function () { return cordova(this, "isLoading", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.destroy = function () { return cordova(this, "destroy", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.dislikeAd = function (dislikeReason) { return cordova(this, "dislikeAd", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.setAllowCustomClick = function () { return cordova(this, "setAllowCustomClick", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.getAdSource = function () { return cordova(this, "getAdSource", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.getDescription = function () { return cordova(this, "getDescription", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.getCallToAction = function () { return cordova(this, "getCallToAction", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.getDislikeAdReasons = function () { return cordova(this, "getDislikeAdReasons", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.isCustomClickAllowed = function () { return cordova(this, "isCustomClickAllowed", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.isCustomDislikeThisAdEnabled = function () { return cordova(this, "isCustomDislikeThisAdEnabled", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.recordClickEvent = function () { return cordova(this, "recordClickEvent", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.recordImpressionEvent = function (impressionData) { return cordova(this, "recordImpressionEvent", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.getUniqueId = function () { return cordova(this, "getUniqueId", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.setDislikeAdListener = function () { return cordova(this, "setDislikeAdListener", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.gotoWhyThisAdPage = function (useView) { return cordova(this, "gotoWhyThisAdPage", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.getAdSign = function () { return cordova(this, "getAdSign", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.getTitle = function () { return cordova(this, "getTitle", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.getWhyThisAd = function () { return cordova(this, "getWhyThisAd", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.recordShowStartEvent = function (showStartData) { return cordova(this, "recordShowStartEvent", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.onAdClose = function (keywords) { return cordova(this, "onAdClose", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.getNativeAdConfiguration = function () { return cordova(this, "getNativeAdConfiguration", { "otherPromise": true }, arguments); };
    HMSNativeAd.pluginName = "HMSAds";
    HMSNativeAd.plugin = "cordova-plugin-hms-ads";
    HMSNativeAd.pluginRef = "HMSAds.HMSNativeAd";
    HMSNativeAd.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSNativeAd.platforms = ["Android"];
    HMSNativeAd.decorators = [
        { type: Injectable }
    ];
    return HMSNativeAd;
}(IonicNativePlugin));
export { HMSNativeAd };
var HMSRewardAd = /** @class */ (function (_super) {
    __extends(HMSRewardAd, _super);
    function HMSRewardAd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSRewardAd.prototype.on = function (eventName, callback) { return cordova(this, "on", { "otherPromise": true }, arguments); };
    HMSRewardAd.prototype.create = function (adId) { return cordova(this, "create", { "otherPromise": true }, arguments); };
    HMSRewardAd.prototype.show = function (useActivity) { return cordova(this, "show", { "otherPromise": true }, arguments); };
    HMSRewardAd.prototype.resume = function () { return cordova(this, "resume", { "otherPromise": true }, arguments); };
    HMSRewardAd.prototype.pause = function () { return cordova(this, "pause", { "otherPromise": true }, arguments); };
    HMSRewardAd.prototype.destroy = function () { return cordova(this, "destroy", { "otherPromise": true }, arguments); };
    HMSRewardAd.prototype.loadAdWithAdId = function (adId, adParam) { return cordova(this, "loadAdWithAdId", { "otherPromise": true }, arguments); };
    HMSRewardAd.prototype.loadAd = function (adParam) { return cordova(this, "loadAd", { "otherPromise": true }, arguments); };
    HMSRewardAd.prototype.isLoaded = function () { return cordova(this, "isLoaded", { "otherPromise": true }, arguments); };
    HMSRewardAd.prototype.getData = function () { return cordova(this, "getData", { "otherPromise": true }, arguments); };
    HMSRewardAd.prototype.getUserId = function () { return cordova(this, "getUserId", { "otherPromise": true }, arguments); };
    HMSRewardAd.prototype.getReward = function () { return cordova(this, "getReward", { "otherPromise": true }, arguments); };
    HMSRewardAd.prototype.setData = function (data) { return cordova(this, "setData", { "otherPromise": true }, arguments); };
    HMSRewardAd.prototype.setImmersive = function (immersive) { return cordova(this, "setImmersive", { "otherPromise": true }, arguments); };
    HMSRewardAd.prototype.setUserId = function (userId) { return cordova(this, "setUserId", { "otherPromise": true }, arguments); };
    HMSRewardAd.prototype.setRewardVerifyConfig = function (config) { return cordova(this, "setRewardVerifyConfig", { "otherPromise": true }, arguments); };
    HMSRewardAd.prototype.getRewardVerifyConfig = function () { return cordova(this, "getRewardVerifyConfig", { "otherPromise": true }, arguments); };
    HMSRewardAd.prototype.setOnMetadataChangedListener = function () { return cordova(this, "setOnMetadataChangedListener", { "otherPromise": true }, arguments); };
    HMSRewardAd.prototype.setRewardAdListener = function () { return cordova(this, "setRewardAdListener", { "otherPromise": true }, arguments); };
    HMSRewardAd.pluginName = "HMSAds";
    HMSRewardAd.plugin = "cordova-plugin-hms-ads";
    HMSRewardAd.pluginRef = "HMSAds.HMSRewardAd";
    HMSRewardAd.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSRewardAd.platforms = ["Android"];
    HMSRewardAd.decorators = [
        { type: Injectable }
    ];
    return HMSRewardAd;
}(IonicNativePlugin));
export { HMSRewardAd };
var HMSRollAd = /** @class */ (function (_super) {
    __extends(HMSRollAd, _super);
    function HMSRollAd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSRollAd.prototype.on = function (eventName, callback) { return cordova(this, "on", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.create = function (params, divId, bounds) { return cordova(this, "create", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.scroll = function () { return cordova(this, "scroll", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.loadAd = function (options) { return cordova(this, "loadAd", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.isLoading = function () { return cordova(this, "isLoading", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.destroy = function () { return cordova(this, "destroy", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.pause = function () { return cordova(this, "pause", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.isPlaying = function () { return cordova(this, "isPlaying", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.mute = function () { return cordova(this, "mute", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.unmute = function () { return cordova(this, "unmute", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.onClose = function () { return cordova(this, "onClose", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.play = function () { return cordova(this, "play", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.stop = function () { return cordova(this, "stop", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.removeInstreamMediaChangeListener = function () { return cordova(this, "removeInstreamMediaChangeListener", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.removeMediaMuteListener = function () { return cordova(this, "removeMediaMuteListener", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.removeInstreamMediaStateListener = function () { return cordova(this, "removeInstreamMediaStateListener", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.setInstreamAds = function () { return cordova(this, "setInstreamAds", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.setInstreamMediaChangeListener = function () { return cordova(this, "setInstreamMediaChangeListener", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.setMediaMuteListener = function () { return cordova(this, "setMediaMuteListener", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.setInstreamMediaStateListener = function () { return cordova(this, "setInstreamMediaStateListener", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.setOnInstreamAdClickListener = function () { return cordova(this, "setOnInstreamAdClickListener", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.getAdSource = function () { return cordova(this, "getAdSource", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.getDuration = function () { return cordova(this, "getDuration", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.getWhyThisAd = function () { return cordova(this, "getWhyThisAd", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.getAdSign = function () { return cordova(this, "getAdSign", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.isClicked = function () { return cordova(this, "isClicked", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.isExpired = function () { return cordova(this, "isExpired", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.isImageAd = function () { return cordova(this, "isImageAd", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.isShown = function () { return cordova(this, "isShown", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.isVideoAd = function () { return cordova(this, "isVideoAd", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.getCallToAction = function () { return cordova(this, "getCallToAction", { "otherPromise": true }, arguments); };
    HMSRollAd.pluginName = "HMSAds";
    HMSRollAd.plugin = "cordova-plugin-hms-ads";
    HMSRollAd.pluginRef = "HMSAds.HMSRollAd";
    HMSRollAd.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSRollAd.platforms = ["Android"];
    HMSRollAd.decorators = [
        { type: Injectable }
    ];
    return HMSRollAd;
}(IonicNativePlugin));
export { HMSRollAd };
var HMSSplashAd = /** @class */ (function (_super) {
    __extends(HMSSplashAd, _super);
    function HMSSplashAd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSSplashAd.prototype.on = function (eventName, callback) { return cordova(this, "on", { "otherPromise": true }, arguments); };
    HMSSplashAd.prototype.create = function () { return cordova(this, "create", { "otherPromise": true }, arguments); };
    HMSSplashAd.prototype.setLogo = function (file) { return cordova(this, "setLogo", { "otherPromise": true }, arguments); };
    HMSSplashAd.prototype.setWideSloganResId = function (wideSloganResId) { return cordova(this, "setWideSloganResId", { "otherPromise": true }, arguments); };
    HMSSplashAd.prototype.setSloganResId = function (sloganResId) { return cordova(this, "setSloganResId", { "otherPromise": true }, arguments); };
    HMSSplashAd.prototype.load = function (options) { return cordova(this, "load", { "otherPromise": true }, arguments); };
    HMSSplashAd.prototype.preloadAd = function (options) { return cordova(this, "preloadAd", { "otherPromise": true }, arguments); };
    HMSSplashAd.prototype.destroyView = function () { return cordova(this, "destroyView", { "otherPromise": true }, arguments); };
    HMSSplashAd.prototype.pauseView = function () { return cordova(this, "pauseView", { "otherPromise": true }, arguments); };
    HMSSplashAd.prototype.resumeView = function () { return cordova(this, "resumeView", { "otherPromise": true }, arguments); };
    HMSSplashAd.prototype.isLoading = function () { return cordova(this, "isLoading", { "otherPromise": true }, arguments); };
    HMSSplashAd.prototype.isLoaded = function () { return cordova(this, "isLoaded", { "otherPromise": true }, arguments); };
    HMSSplashAd.prototype.setAdDisplayListener = function () { return cordova(this, "setAdDisplayListener", { "otherPromise": true }, arguments); };
    HMSSplashAd.prototype.setAudioFocusType = function (audioFocusType) { return cordova(this, "setAudioFocusType", { "otherPromise": true }, arguments); };
    HMSSplashAd.pluginName = "HMSAds";
    HMSSplashAd.plugin = "cordova-plugin-hms-ads";
    HMSSplashAd.pluginRef = "HMSAds.HMSSplashAd";
    HMSSplashAd.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSSplashAd.platforms = ["Android"];
    HMSSplashAd.decorators = [
        { type: Injectable }
    ];
    return HMSSplashAd;
}(IonicNativePlugin));
export { HMSSplashAd };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1hZHMvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7RUFjRTtBQUNGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxzRUFLTixNQUFNLG9CQUFvQixDQUFDO0FBRTVCLCtEQUErRDtBQUMvRCxZQUFZO0FBQ1osK0RBQStEO0FBRS9ELE1BQU0sQ0FBTixJQUFZLGlCQVVYO0FBVkQsV0FBWSxpQkFBaUI7SUFDekIsNkVBQWtCLENBQUE7SUFDbEIsaUdBQTRCLENBQUE7SUFDNUIsNkZBQTBCLENBQUE7SUFDMUIsNkVBQWtCLENBQUE7SUFDbEIsdUZBQXVCLENBQUE7SUFDdkIsaUZBQW9CLENBQUE7SUFDcEIsbUdBQTZCLENBQUE7SUFDN0IsbUdBQTZCLENBQUE7SUFDN0IsaUhBQW9DLENBQUE7QUFDeEMsQ0FBQyxFQVZXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFVNUI7QUFDRCxNQUFNLENBQU4sSUFBWSx3QkFLWDtBQUxELFdBQVksd0JBQXdCO0lBQ2hDLGlIQUE2QixDQUFBO0lBQzdCLDZHQUEyQixDQUFBO0lBQzNCLHFIQUErQixDQUFBO0lBQy9CLHFIQUErQixDQUFBO0FBQ25DLENBQUMsRUFMVyx3QkFBd0IsS0FBeEIsd0JBQXdCLFFBS25DO0FBQ0QsTUFBTSxDQUFOLElBQVksdUJBTVg7QUFORCxXQUFZLHVCQUF1QjtJQUMvQiw0REFBaUMsQ0FBQTtJQUNqQyw4REFBbUMsQ0FBQTtJQUNuQyxpRUFBc0MsQ0FBQTtJQUN0Qyw0REFBaUMsQ0FBQTtJQUNqQyw0REFBaUMsQ0FBQTtBQUNyQyxDQUFDLEVBTlcsdUJBQXVCLEtBQXZCLHVCQUF1QixRQU1sQztBQUNELE1BQU0sQ0FBTixJQUFZLE1BSVg7QUFKRCxXQUFZLE1BQU07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QUE2QjtJQUk3QixnREFBNEI7SUFJNUIsK0JBQVc7SUFJWCwrQkFBVztJQUlYLGdDQUFZO0lBSVosNkJBQVM7SUFJVCw2QkFBUztJQUlULDZCQUFTO0lBSVQsNkJBQVM7SUFJVCwyQkFBTztJQUlQLDZCQUFTO0lBSVQsbUNBQWU7Ozs7Ozs7Z0JBL0hsQixVQUFVOztvQkFsNEJYO0VBbTRCK0IsaUJBQWlCO1NBQW5DLFNBQVM7O0lBMklXLCtCQUFpQjs7OztJQUU5Qyx3QkFBRSxhQUFDLFNBQXlCLEVBQUUsUUFBZ0M7SUFJeEQsNEJBQU07SUFJWiw2QkFBTyxhQUFDLElBQVk7SUFJcEIsd0NBQWtCLGFBQUMsZUFBdUI7SUFJMUMsb0NBQWMsYUFBQyxXQUFtQjtJQUlsQywwQkFBSSxhQUFDLE9BQTRCO0lBSWpDLCtCQUFTLGFBQUMsT0FBNEI7SUFJdEMsaUNBQVc7SUFJWCwrQkFBUztJQUlULGdDQUFVO0lBSVYsK0JBQVM7SUFJVCw4QkFBUTtJQUlSLDBDQUFvQjtJQUlwQix1Q0FBaUIsYUFBQyxjQUE4Qjs7Ozs7OztnQkF2RG5ELFVBQVU7O3NCQTdnQ1g7RUE4Z0NpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgICBDb3B5cmlnaHQgMjAyMC0yMDIxLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5cclxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcclxuICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG5cclxuICAgICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAgICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgICBQbHVnaW4sXHJcbiAgICBDb3Jkb3ZhLFxyXG4gICAgQ29yZG92YVByb3BlcnR5LFxyXG4gICAgSW9uaWNOYXRpdmVQbHVnaW4sXHJcbn0gZnJvbSBcIkBpb25pYy1uYXRpdmUvY29yZVwiO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIENvbnN0YW50c1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmV4cG9ydCBlbnVtIEFkUGFyYW1FcnJvckNvZGVzIHtcclxuICAgIEFEX1BBUkFNX0lOTkVSID0gMCxcclxuICAgIEFEX1BBUkFNX0lOVkFMSURfUkVRVUVTVCA9IDEsXHJcbiAgICBBRF9QQVJBTV9ORVRXT1JLX0VSUk9SID0gMixcclxuICAgIEFEX1BBUkFNX05PX0FEID0gMyxcclxuICAgIEFEX1BBUkFNX0FEX0xPQURJTkcgPSA0LFxyXG4gICAgQURfUEFSQU1fTE9XX0FQSSA9IDUsXHJcbiAgICBBRF9QQVJBTV9CQU5ORVJfQURfRVhQSVJFID0gNixcclxuICAgIEFEX1BBUkFNX0JBTk5FUl9BRF9DQU5DRUwgPSA3LFxyXG4gICAgQURfUEFSQU1fSE1TX05PVF9TVVBQT1JUX1NFVF9BUFAgPSA4LFxyXG59XHJcbmV4cG9ydCBlbnVtIFJld2FyZEFkU3RhdHVzRXJyb3JDb2RlcyB7XHJcbiAgICBSRVdBUkRfQURfU1RBVFVTX0lOVEVSTkFMID0gMCxcclxuICAgIFJFV0FSRF9BRF9TVEFUVVNfUkVVU0VEID0gMSxcclxuICAgIFJFV0FSRF9BRF9TVEFUVVNfTk9UX0xPQURFRCA9IDIsXHJcbiAgICBSRVdBUkRfQURfU1RBVFVTX0JBQ0tHUk9VTkQgPSAzLFxyXG59XHJcbmV4cG9ydCBlbnVtIEFkQ29udGVudENsYXNzaWZpY2F0aW9uIHtcclxuICAgIEFEX0NPTlRFTlRfQ0xBU1NJRklDQVRJT05fQSA9IFwiQVwiLFxyXG4gICAgQURfQ09OVEVOVF9DTEFTU0lGSUNBVElPTl9QSSA9IFwiUElcIixcclxuICAgIEFEX0NPTlRFTlRfQ0xBU1NJRklDQVRJT05fVU5LTk9XTiA9IFwiXCIsXHJcbiAgICBBRF9DT05URU5UX0NMQVNTSUZJQ0FUSU9OX0ogPSBcIkpcIixcclxuICAgIEFEX0NPTlRFTlRfQ0xBU1NJRklDQVRJT05fVyA9IFwiV1wiLFxyXG59XHJcbmV4cG9ydCBlbnVtIEdlbmRlciB7XHJcbiAgICBGRU1BTEUgPSAyLFxyXG4gICAgTUFMRSA9IDEsXHJcbiAgICBVTktOT1dOID0gMCxcclxufVxyXG5leHBvcnQgZW51bSBOb25QZXJzb25hbGl6ZWRBZCB7XHJcbiAgICBBTExPV19BTEwgPSAwLFxyXG4gICAgQUxMT1dfTk9OX1BFUlNPTkFMSVpFRCA9IDEsXHJcbn1cclxuZXhwb3J0IGVudW0gQ2hpbGRQcm90ZWN0aW9uIHtcclxuICAgIFRBR19GT1JfQ0hJTERfUFJPVEVDVElPTl9VTlNQRUNJRklFRCA9IC0xLFxyXG4gICAgVEFHX0ZPUl9DSElMRF9QUk9URUNUSU9OX0ZBTFNFID0gMCxcclxuICAgIFRBR19GT1JfQ0hJTERfUFJPVEVDVElPTl9UUlVFID0gMSxcclxufVxyXG5leHBvcnQgZW51bSBVbmRlckFnZU9mUHJvbWlzZSB7XHJcbiAgICBQUk9NSVNFX1VOU1BFQ0lGSUVEID0gLTEsXHJcbiAgICBQUk9NSVNFX0ZBTFNFID0gMCxcclxuICAgIFBST01JU0VfVFJVRSA9IDEsXHJcbn1cclxuZXhwb3J0IGVudW0gQmFubmVyQWRTaXplIHtcclxuICAgIEJBTk5FUl9TSVpFXzM2MF81NyA9IFwiQkFOTkVSX1NJWkVfMzYwXzU3XCIsXHJcbiAgICBCQU5ORVJfU0laRV8zNjBfMTQ0ID0gXCJCQU5ORVJfU0laRV8zNjBfMTQ0XCIsXHJcbiAgICBCQU5ORVJfU0laRV8xNjBfNjAwID0gXCJCQU5ORVJfU0laRV8xNjBfNjAwXCIsXHJcbiAgICBCQU5ORVJfU0laRV8zMDBfMjUwID0gXCJCQU5ORVJfU0laRV8zMDBfMjUwXCIsXHJcbiAgICBCQU5ORVJfU0laRV8zMjBfMTAwID0gXCJCQU5ORVJfU0laRV8zMjBfMTAwXCIsXHJcbiAgICBCQU5ORVJfU0laRV8zMjBfNTAgPSBcIkJBTk5FUl9TSVpFXzMyMF81MFwiLFxyXG4gICAgQkFOTkVSX1NJWkVfNDY4XzYwID0gXCJCQU5ORVJfU0laRV80NjhfNjBcIixcclxuICAgIEJBTk5FUl9TSVpFXzcyOF85MCA9IFwiQkFOTkVSX1NJWkVfNzI4XzkwXCIsXHJcbiAgICBCQU5ORVJfU0laRV9EWU5BTUlDID0gXCJCQU5ORVJfU0laRV9EWU5BTUlDXCIsXHJcbiAgICBCQU5ORVJfU0laRV9JTlZBTElEID0gXCJCQU5ORVJfU0laRV9JTlZBTElEXCIsXHJcbiAgICBCQU5ORVJfU0laRV9TTUFSVCA9IFwiQkFOTkVSX1NJWkVfU01BUlRcIixcclxufVxyXG5leHBvcnQgZW51bSBITVNTY3JlZW5PcmllbnRhdGlvbiB7XHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fTEFORFNDQVBFID0gMCxcclxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9VTlNQRUNJRklFRCA9IC0xLFxyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1BPUlRSQUlUID0gMSxcclxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9VU0VSID0gMixcclxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9CRUhJTkQgPSAzLFxyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1NFTlNPUiA9IDQsXHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fTk9TRU5TT1IgPSA1LFxyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1NFTlNPUl9MQU5EU0NBUEUgPSA2LFxyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1NFTlNPUl9QT1JUUkFJVCA9IDcsXHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fUkVWRVJTRV9MQU5EU0NBUEUgPSA4LFxyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1JFVkVSU0VfUE9SVFJBSVQgPSA5LFxyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX0ZVTExfU0VOU09SID0gMTAsXHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fVVNFUl9MQU5EU0NBUEUgPSAxMSxcclxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9VU0VSX1BPUlRSQUlUID0gMTIsXHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fRlVMTF9VU0VSID0gMTMsXHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fTE9DS0VEID0gMTQsXHJcbn1cclxuZXhwb3J0IGVudW0gRGVidWdOZWVkQ29uc2VudCB7XHJcbiAgICBDT05TRU5UX0RFQlVHX0RJU0FCTEVEID0gMCxcclxuICAgIENPTlNFTlRfREVCVUdfTkVFRF9DT05TRU5UID0gMSxcclxuICAgIENPTlNFTlRfREVCVUdfTk9UX05FRURfQ09OU0VOVCA9IDIsXHJcbn1cclxuZXhwb3J0IGVudW0gQ29uc2VudFN0YXR1cyB7XHJcbiAgICBDT05TRU5UX1BFUlNPTkFMSVpFRCA9IDAsXHJcbiAgICBDT05TRU5UX05PTl9QRVJTT05BTElaRUQgPSAxLFxyXG4gICAgQ09OU0VOVF9VTktOT1dOID0gMixcclxufVxyXG5leHBvcnQgZW51bSBBdWRpb0ZvY3VzVHlwZSB7XHJcbiAgICBHQUlOX0FVRElPX0ZPQ1VTX0FMTCA9IDAsXHJcbiAgICBOT1RfR0FJTl9BVURJT19GT0NVU19XSEVOX01VVEUgPSAxLFxyXG4gICAgTk9UX0dBSU5fQVVESU9fRk9DVVNfQUxMID0gMixcclxufVxyXG5leHBvcnQgZW51bSBNZWRpYUFzcGVjdCB7XHJcbiAgICBBU1BFQ1RfQU5ZID0gMSxcclxuICAgIEFTUEVDVF9DVVNUT01fU0laRSA9IC0xLFxyXG4gICAgQVNQRUNUX0xBTkRTQ0FQRSA9IDIsXHJcbiAgICBBU1BFQ1RfUE9SVFJBSVQgPSAzLFxyXG4gICAgQVNQRUNUX1NRVUFSRSA9IDQsXHJcbiAgICBBU1BFQ1RfVU5LTk9XTiA9IDAsXHJcbn1cclxuZXhwb3J0IGVudW0gQ2hvaWNlc1Bvc2l0aW9uIHtcclxuICAgIEJPVFRPTV9MRUZUID0gMyxcclxuICAgIEJPVFRPTV9SSUdIVCA9IDIsXHJcbiAgICBJTlZJU0lCTEUgPSA0LFxyXG4gICAgVE9QX0xFRlQgPSAwLFxyXG4gICAgVE9QX1JJR0hUID0gMSxcclxufVxyXG5leHBvcnQgZW51bSBNZWRpYURpcmVjdGlvbiB7XHJcbiAgICBBTlkgPSAwLFxyXG4gICAgTEFORFNDQVBFID0gMixcclxuICAgIFBPUlRSQUlUID0gMSxcclxufVxyXG5leHBvcnQgZW51bSBOYXRpdmVBZFRlbXBsYXRlIHtcclxuICAgIE5BVElWRV9BRF9TTUFMTF9URU1QTEFURSA9IFwiTkFUSVZFX0FEX1NNQUxMX1RFTVBMQVRFXCIsXHJcbiAgICBOQVRJVkVfQURfRlVMTF9URU1QTEFURSA9IFwiTkFUSVZFX0FEX0ZVTExfVEVNUExBVEVcIixcclxuICAgIE5BVElWRV9BRF9CQU5ORVJfVEVNUExBVEUgPSBcIk5BVElWRV9BRF9CQU5ORVJfVEVNUExBVEVcIixcclxuICAgIE5BVElWRV9BRF9WSURFT19URU1QTEFURSA9IFwiTkFUSVZFX0FEX1ZJREVPX1RFTVBMQVRFXCIsXHJcbn1cclxuZXhwb3J0IGVudW0gQ29sb3Ige1xyXG4gICAgUkVEID0gXCJSRURcIixcclxuICAgIERLR1JBWSA9IFwiREtHUkFZXCIsXHJcbiAgICBHUkFZID0gXCJHUkFZXCIsXHJcbiAgICBXSElURSA9IFwiV0hJVEVcIixcclxuICAgIEJMVUUgPSBcIkJMVUVcIixcclxuICAgIEJMQUNLID0gXCJCTEFDS1wiLFxyXG4gICAgTFRHUkFZID0gXCJMVEdSQVlcIixcclxuICAgIE1BR0VOVEEgPSBcIk1BR0VOVEFcIixcclxuICAgIFlFTExPVyA9IFwiWUVMTE9XXCIsXHJcbiAgICBDWUFOID0gXCJDWUFOXCIsXHJcbiAgICBHUkVFTiA9IFwiR1JFRU5cIixcclxuICAgIFRSQU5TUEFSRU5UID0gXCJUUkFOU1BBUkVOVFwiLFxyXG59XHJcbmV4cG9ydCBlbnVtIEluc3RhbGxSZWZlcnJlclJlc3BvbnNlcyB7XHJcbiAgICBTRVJWSUNFX0RJU0NPTk5FQ1RFRCA9IC0xLFxyXG4gICAgREVWRUxPUEVSX0VSUk9SID0gMyxcclxuICAgIFNFUlZJQ0VfVU5BVkFJTEFCTEUgPSAxLFxyXG4gICAgT0sgPSAwLFxyXG4gICAgRkVBVFVSRV9OT1RfU1VQUE9SVEVEID0gMixcclxufVxyXG5leHBvcnQgZW51bSBBbmNob3Ige1xyXG4gICAgVE9QID0gXCJ0b3BcIixcclxuICAgIEJPVFRPTSA9IFwiYm90dG9tXCIsXHJcbiAgICBJTlZJU0lCTEUgPSBcImludmlzaWJsZVwiLFxyXG59XHJcbmV4cG9ydCBlbnVtIEJhbm5lckFkRXZlbnRzIHtcclxuICAgIEJBTk5FUl9BRF9DTE9TRUQgPSBcImJhbm5lcl9hZF9jbG9zZWRcIixcclxuICAgIEJBTk5FUl9BRF9GQUlMRUQgPSBcImJhbm5lcl9hZF9mYWlsZWRcIixcclxuICAgIEJBTk5FUl9BRF9MRUFWRSA9IFwiYmFubmVyX2FkX2xlYXZlXCIsXHJcbiAgICBCQU5ORVJfQURfT1BFTkVEID0gXCJiYW5uZXJfYWRfb3BlbmVkXCIsXHJcbiAgICBCQU5ORVJfQURfTE9BREVEID0gXCJiYW5uZXJfYWRfbG9hZGVkXCIsXHJcbiAgICBCQU5ORVJfQURfQ0xJQ0tFRCA9IFwiYmFubmVyX2FkX2NsaWNrZWRcIixcclxuICAgIEJBTk5FUl9BRF9JTVBSRVNTSU9OID0gXCJiYW5uZXJfYWRfaW1wcmVzc2lvblwiLFxyXG59XHJcbmV4cG9ydCBlbnVtIEludGVyc3RpdGlhbEFkRXZlbnRzIHtcclxuICAgIElOVEVSU1RJVElBTF9BRF9DTE9TRUQgPSBcImludGVyc3RpdGlhbF9hZF9jbG9zZWRcIixcclxuICAgIElOVEVSU1RJVElBTF9BRF9GQUlMRUQgPSBcImludGVyc3RpdGlhbF9hZF9mYWlsZWRcIixcclxuICAgIElOVEVSU1RJVElBTF9BRF9MRUFWRSA9IFwiaW50ZXJzdGl0aWFsX2FkX2xlYXZlXCIsXHJcbiAgICBJTlRFUlNUSVRJQUxfQURfT1BFTkVEID0gXCJpbnRlcnN0aXRpYWxfYWRfb3BlbmVkXCIsXHJcbiAgICBJTlRFUlNUSVRJQUxfQURfTE9BREVEID0gXCJpbnRlcnN0aXRpYWxfYWRfbG9hZGVkXCIsXHJcbiAgICBJTlRFUlNUSVRJQUxfQURfQ0xJQ0tFRCA9IFwiaW50ZXJzdGl0aWFsX2FkX2NsaWNrZWRcIixcclxuICAgIElOVEVSU1RJVElBTF9BRF9JTVBSRVNTSU9OID0gXCJpbnRlcnN0aXRpYWxfYWRfaW1wcmVzc2lvblwiLFxyXG4gICAgSU5URVJTVElUSUFMX0FEX1JFV0FSREVEID0gXCJpbnRlcnN0aXRpYWxfYWRfcmV3YXJkZWRcIixcclxuICAgIElOVEVSU1RJVElBTF9SRVdBUkRfQURfQ0xPU0VEID0gXCJpbnRlcnN0aXRpYWxfcmV3YXJkX2FkX2Nsb3NlZFwiLFxyXG4gICAgSU5URVJTVElUSUFMX1JFV0FSRF9BRF9GQUlMRURfVE9fTE9BRCA9IFwiaW50ZXJzdGl0aWFsX3Jld2FyZF9hZF9mYWlsZWRfdG9fbG9hZFwiLFxyXG4gICAgSU5URVJTVElUSUFMX1JFV0FSRF9BRF9MRUZUX0FQUCA9IFwiaW50ZXJzdGl0aWFsX3Jld2FyZF9hZF9sZWZ0X2FwcFwiLFxyXG4gICAgSU5URVJTVElUSUFMX1JFV0FSRF9BRF9MT0FERUQgPSBcImludGVyc3RpdGlhbF9yZXdhcmRfYWRfbG9hZGVkXCIsXHJcbiAgICBJTlRFUlNUSVRJQUxfUkVXQVJEX0FEX09QRU5FRCA9IFwiaW50ZXJzdGl0aWFsX3Jld2FyZF9hZF9vcGVuZWRcIixcclxuICAgIElOVEVSU1RJVElBTF9SRVdBUkRfQURfQ09NUExFVEVEID0gXCJpbnRlcnN0aXRpYWxfcmV3YXJkX2FkX2NvbXBsZXRlZFwiLFxyXG4gICAgSU5URVJTVElUSUFMX1JFV0FSRF9BRF9TVEFSVEVEID0gXCJpbnRlcnN0aXRpYWxfcmV3YXJkX2FkX3N0YXJ0ZWRcIixcclxufVxyXG5leHBvcnQgZW51bSBTcGxhc2hBZEV2ZW50cyB7XHJcbiAgICBTUExBU0hfQURfRkFJTEVEX1RPX0xPQUQgPSBcInNwbGFzaF9hZF9mYWlsZWRfdG9fbG9hZFwiLFxyXG4gICAgU1BMQVNIX0FEX0xPQURFRCA9IFwic3BsYXNoX2FkX2xvYWRlZFwiLFxyXG4gICAgU1BMQVNIX0FEX0RJU01JU1NFRCA9IFwic3BsYXNoX2FkX2Rpc21pc3NlZFwiLFxyXG4gICAgU1BMQVNIX0FEX1NIT1dFRCA9IFwic3BsYXNoX2FkX3Nob3dlZFwiLFxyXG4gICAgU1BMQVNIX0FEX0NMSUNLID0gXCJzcGxhc2hfYWRfY2xpY2tcIixcclxufVxyXG5leHBvcnQgZW51bSBSb2xsQWRFdmVudHMge1xyXG4gICAgUk9MTF9BRF9MT0FEX0ZBSUxFRCA9IFwicm9sbF9hZF9sb2FkX2ZhaWxlZFwiLFxyXG4gICAgUk9MTF9BRF9MT0FERUQgPSBcInJvbGxfYWRfbG9hZGVkXCIsXHJcbiAgICBST0xMX0FEX01FRElBX0NIQU5HRUQgPSBcInJvbGxfYWRfbWVkaWFfY2hhbmdlZFwiLFxyXG4gICAgUk9MTF9BRF9DTElDS0VEID0gXCJyb2xsX2FkX2NsaWNrZWRcIixcclxuICAgIFJPTExfQURfTUVESUFfUFJPR1JFU1MgPSBcInJvbGxfYWRfbWVkaWFfcHJvZ3Jlc3NcIixcclxuICAgIFJPTExfQURfTUVESUFfU1RBUlQgPSBcInJvbGxfYWRfbWVkaWFfc3RhcnRcIixcclxuICAgIFJPTExfQURfTUVESUFfUEFVU0UgPSBcInJvbGxfYWRfbWVkaWFfcGF1c2VcIixcclxuICAgIFJPTExfQURfTUVESUFfU1RPUCA9IFwicm9sbF9hZF9tZWRpYV9zdG9wXCIsXHJcbiAgICBST0xMX0FEX01FRElBX0NPTVBMRVRJT04gPSBcInJvbGxfYWRfbWVkaWFfY29tcGxldGlvblwiLFxyXG4gICAgUk9MTF9BRF9NRURJQV9FUlJPUiA9IFwicm9sbF9hZF9tZWRpYV9lcnJvclwiLFxyXG4gICAgUk9MTF9BRF9NRURJQV9VTk1VVEUgPSBcInJvbGxfYWRfbWVkaWFfdW5tdXRlXCIsXHJcbiAgICBST0xMX0FEX01FRElBX01VVEUgPSBcInJvbGxfYWRfbWVkaWFfbXV0ZVwiLFxyXG4gICAgUk9MTF9BRF9XSFlfVEhJU19BRCA9IFwicm9sbF9hZF93aHlfdGhpc19hZFwiLFxyXG59XHJcbmV4cG9ydCBlbnVtIFJld2FyZEFkRXZlbnRzIHtcclxuICAgIFJFV0FSRF9NRVRBREFUQV9DSEFOR0VEID0gXCJyZXdhcmRfbWV0YWRhdGFfY2hhbmdlZFwiLFxyXG4gICAgUkVXQVJEX0FEX0ZBSUxFRF9UT19MT0FEX0xPQUQgPSBcInJld2FyZF9hZF9mYWlsZWRfdG9fbG9hZF9sb2FkXCIsXHJcbiAgICBSRVdBUkRFRF9MT0FERUQgPSBcInJld2FyZGVkX2xvYWRlZFwiLFxyXG4gICAgUkVXQVJERURfU1RBVFVTID0gXCJyZXdhcmRlZF9zdGF0dXNcIixcclxuICAgIFJFV0FSRF9BRF9DTE9TRURfU1RBVFVTID0gXCJyZXdhcmRfYWRfY2xvc2VkX3N0YXR1c1wiLFxyXG4gICAgUkVXQVJEX0FEX09QRU5FRF9TVEFUVVMgPSBcInJld2FyZF9hZF9vcGVuZWRfc3RhdHVzXCIsXHJcbiAgICBSRVdBUkRfQURfRkFJTEVEX1RPX1NIT1cgPSBcInJld2FyZF9hZF9mYWlsZWRfdG9fc2hvd1wiLFxyXG4gICAgUkVXQVJERUQgPSBcInJld2FyZGVkXCIsXHJcbiAgICBSRVdBUkRfQURfQ0xPU0VEID0gXCJyZXdhcmRfYWRfY2xvc2VkXCIsXHJcbiAgICBSRVdBUkRfQURfRkFJTEVEX1RPX0xPQUQgPSBcInJld2FyZF9hZF9mYWlsZWRfdG9fbG9hZFwiLFxyXG4gICAgUkVXQVJEX0FEX0xPQURFRCA9IFwicmV3YXJkX2FkX2xvYWRlZFwiLFxyXG4gICAgUkVXQVJEX0FEX09QRU5FRCA9IFwicmV3YXJkX2FkX29wZW5lZFwiLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBEZXRhaWxlZENyZWF0aXZlVHlwZSB7XHJcbiAgQklHX0lNRyA9IDkwMSxcclxuICBWSURFTyA9IDkwMyxcclxuICBUSFJFRV9JTUcgPSA5MDQsXHJcbiAgU01BTExfSU1HID0gOTA1LFxyXG4gIFNJTkdMRV9JTUcgPSA5MDksXHJcbiAgU0hPUlRfVEVYVCA9IDkxMyxcclxuICBMT05HX1RFWFQgPSA5MTRcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTmF0aXZlQWRFdmVudHMge1xyXG4gICAgTkFUSVZFX0FEX0RJU0xJS0VEID0gXCJuYXRpdmVfYWRfZGlzbGlrZWRcIixcclxuICAgIE5BVElWRV9BRF9MT0FERURfTE9BRCA9IFwibmF0aXZlX2FkX2xvYWRlZF9sb2FkXCIsXHJcbiAgICBOQVRJVkVfQURfQ0xPU0VEID0gXCJuYXRpdmVfYWRfY2xvc2VkXCIsXHJcbiAgICBOQVRJVkVfQURfRkFJTEVEID0gXCJuYXRpdmVfYWRfZmFpbGVkXCIsXHJcbiAgICBOQVRJVkVfQURfTEVBVkUgPSBcIm5hdGl2ZV9hZF9sZWF2ZVwiLFxyXG4gICAgTkFUSVZFX0FEX09QRU5FRCA9IFwibmF0aXZlX2FkX29wZW5lZFwiLFxyXG4gICAgTkFUSVZFX0FEX0xPQURFRCA9IFwibmF0aXZlX2FkX2xvYWRlZFwiLFxyXG4gICAgTkFUSVZFX0FEX0NMSUNLRUQgPSBcIm5hdGl2ZV9hZF9jbGlja2VkXCIsXHJcbiAgICBOQVRJVkVfQURfSU1QUkVTU0lPTiA9IFwibmF0aXZlX2FkX2ltcHJlc3Npb25cIixcclxuICAgIFZJREVPX09QRVJBVE9SX1ZJREVPX1NUQVJUID0gXCJ2aWRlb19vcGVyYXRvcl92aWRlb19zdGFydFwiLFxyXG4gICAgVklERU9fT1BFUkFUT1JfVklERU9fUExBWSA9IFwidmlkZW9fb3BlcmF0b3JfdmlkZW9fcGxheVwiLFxyXG4gICAgVklERU9fT1BFUkFUT1JfVklERU9fUEFVU0UgPSBcInZpZGVvX29wZXJhdG9yX3ZpZGVvX3BhdXNlXCIsXHJcbiAgICBWSURFT19PUEVSQVRPUl9WSURFT19FTkQgPSBcInZpZGVvX29wZXJhdG9yX3ZpZGVvX2VuZFwiLFxyXG4gICAgVklERU9fT1BFUkFUT1JfVklERU9fTVVURSA9IFwidmlkZW9fb3BlcmF0b3JfdmlkZW9fbXV0ZVwiLFxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gSW50ZXJmYWNlc1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0Qm91bmRzIHtcclxuICAgIG1hcmdpbkxlZnQ/OiBudW1iZXI7XHJcbiAgICBtYXJnaW5SaWdodD86IG51bWJlcjtcclxuICAgIG1hcmdpblRvcD86IG51bWJlcjtcclxuICAgIG1hcmdpbkJvdHRvbT86IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIG1hcmdpbkxlZnQ/OiBudW1iZXI7XHJcbiAgICBtYXJnaW5SaWdodD86IG51bWJlcjtcclxuICAgIG1hcmdpblRvcD86IG51bWJlcjtcclxuICAgIG1hcmdpbkJvdHRvbT86IG51bWJlcjtcclxuICAgIHBhZ2VYT2Zmc2V0PzogbnVtYmVyO1xyXG4gICAgcGFnZVlPZmZzZXQ/OiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBZFBhcmFtIHtcclxuICAgIGdlbmRlcj86IEdlbmRlcjtcclxuICAgIGFkQ29udGVudENsYXNzaWZpY2F0aW9uPzogQWRDb250ZW50Q2xhc3NpZmljYXRpb247XHJcbiAgICB0YWdGb3JVbmRlckFnZU9mUHJvbWlzZT86IFVuZGVyQWdlT2ZQcm9taXNlO1xyXG4gICAgdGFnRm9yQ2hpbGRQcm90ZWN0aW9uPzogQ2hpbGRQcm90ZWN0aW9uO1xyXG4gICAgbm9uUGVyc29uYWxpemVkQWQ/OiBOb25QZXJzb25hbGl6ZWRBZDtcclxuICAgIGFwcENvdW50cnk/OiBzdHJpbmc7XHJcbiAgICBhcHBMYW5nPzogc3RyaW5nO1xyXG4gICAgY291bnRyeUNvZGU/OiBzdHJpbmc7XHJcbiAgICBiZWxvbmdDb3VudHJ5Q29kZT86IHN0cmluZztcclxuICAgIGNvbnNlbnQ/OiBzdHJpbmc7XHJcbiAgICByZXF1ZXN0TG9jYXRpb24/OiBib29sZWFuO1xyXG4gICAgZGV0YWlsZWRDcmVhdGl2ZVR5cGU/OiBEZXRhaWxlZENyZWF0aXZlVHlwZVtdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSE1TUmVxdWVzdE9wdGlvbnMge1xyXG4gICAgYWRDb250ZW50Q2xhc3NpZmljYXRpb24/OiBBZENvbnRlbnRDbGFzc2lmaWNhdGlvbjtcclxuICAgIGFwcExhbmc/OiBzdHJpbmc7XHJcbiAgICBhcHBDb3VudHJ5Pzogc3RyaW5nO1xyXG4gICAgdGFnRm9yQ2hpbGRQcm90ZWN0aW9uPzogQ2hpbGRQcm90ZWN0aW9uO1xyXG4gICAgdGFnRm9yVW5kZXJBZ2VPZlByb21pc2U/OiBVbmRlckFnZU9mUHJvbWlzZTtcclxuICAgIG5vblBlcnNvbmFsaXplZEFkPzogTm9uUGVyc29uYWxpemVkQWQ7XHJcbiAgICBjb25zZW50Pzogc3RyaW5nO1xyXG4gICAgcmVxdWVzdExvY2F0aW9uPzogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEhNU1Jld2FyZCB7XHJcbiAgICByZXdhcmRBbW91bnQ6IG51bWJlcjtcclxuICAgIHJld2FyZE5hbWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEhNU1Jld2FyZFZlcmlmeUNvbmZpZyB7XHJcbiAgICBkYXRhOiBzdHJpbmc7XHJcbiAgICB1c2VySWQ6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE9haWRSZXN1bHQge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGlzTGltaXRBZFRyYWNpbmdFbmFibGVkOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRHVyYXRpb24ge1xyXG4gICAgZHVyYXRpb246IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFJvbGxBZExvYWRlclBhcmFtcyB7XHJcbiAgICBhZElkOiBzdHJpbmc7XHJcbiAgICB0b3RhbER1cmF0aW9uOiBudW1iZXI7XHJcbiAgICBtYXhDb3VudDogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVmlkZW9Db25maWd1cmF0aW9uIHtcclxuICAgIGF1ZGlvRm9jdXNUeXBlPzogQXVkaW9Gb2N1c1R5cGU7XHJcbiAgICBjbGlja1RvRnVsbFNjcmVlblJlcXVlc3Q/OiBib29sZWFuO1xyXG4gICAgY3VzdG9taXplT3BlcmF0ZVJlcXVlc3RlZD86IGJvb2xlYW47XHJcbiAgICBpc1N0YXJ0TXV0ZWQ/OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTmF0aXZlQWRDb25maWd1cmF0aW9uIHtcclxuICAgIGFkU2l6ZTogQWRTaXplO1xyXG4gICAgY2hvaWNlc1Bvc2l0aW9uPzogQ2hvaWNlc1Bvc2l0aW9uO1xyXG4gICAgbWVkaWFBc3BlY3Q/OiBNZWRpYUFzcGVjdDtcclxuICAgIG1lZGlhRGlyZWN0aW9uPzogTWVkaWFEaXJlY3Rpb247XHJcbiAgICByZXR1cm5VcmxzRm9ySW1hZ2VzPzogYm9vbGVhbjtcclxuICAgIHJlcXVlc3RDdXN0b21EaXNsaWtlVGhpc0FkPzogYm9vbGVhbjtcclxuICAgIHJlcXVlc3RNdWx0aUltYWdlcz86IGJvb2xlYW47XHJcbiAgICB2aWRlb0NvbmZpZ3VyYXRpb24/OiBWaWRlb0NvbmZpZ3VyYXRpb247XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmlkZW9PcGVyYXRvckFzcGVjdFJhdGlvIHtcclxuICAgIHZpZGVvT3BlcmF0b3JHZXRBc3BlY3RSYXRpbzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5hdGl2ZUFkTG9hZE9wdGlvbnMge1xyXG4gICAgYWRJZD86IHN0cmluZztcclxuICAgIGFkPzogQWRQYXJhbTtcclxuICAgIG5hdGl2ZUFkT3B0aW9ucz86IE5hdGl2ZUFkQ29uZmlndXJhdGlvbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEFkU2l6ZSB7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBOYXRpdmVBZE9wdGlvbnMge1xyXG4gICAgZGl2OiBzdHJpbmc7XHJcbiAgICB0ZW1wbGF0ZT86IE5hdGl2ZUFkVGVtcGxhdGU7XHJcbiAgICBiZz86IENvbG9yO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUm9sbEFkTG9hZE9wdGlvbnMge1xyXG4gICAgZmlsZT86IHN0cmluZztcclxuICAgIGFkUGFyYW0/OiBBZFBhcmFtO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVmZXJyZXJEZXRhaWxzIHtcclxuICAgIHJlc3BvbnNlQ29kZT86IEluc3RhbGxSZWZlcnJlclJlc3BvbnNlcztcclxuICAgIGluc3RhbGxSZWZlcnJlcj86IHN0cmluZztcclxuICAgIHJlZmVycmVyQ2xpY2tUaW1lc3RhbXA/OiBudW1iZXI7XHJcbiAgICBpbnN0YWxsQmVnaW5UaW1lc3RhbXA/OiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDb25zZW50VXBkYXRlUmVzdWx0IHtcclxuICAgIGNvbnNlbnRTdGF0dXM/OiBDb25zZW50U3RhdHVzO1xyXG4gICAgaXNOZWVkQ29uc2VudD86IGJvb2xlYW47XHJcbiAgICBhZFByb3ZpZGVycz86IEFkUHJvdmlkZXJbXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEFkUHJvdmlkZXIge1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICBuYW1lPzogc3RyaW5nO1xyXG4gICAgcHJpdmFjeVBvbGljeVVybD86IHN0cmluZztcclxuICAgIHNlcnZpY2VBcmVhPzogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU3BsYXNoQWRMb2FkT3B0aW9ucyB7XHJcbiAgICBhZElkOiBzdHJpbmc7XHJcbiAgICBvcmllbnRhdGlvbj86IEhNU1NjcmVlbk9yaWVudGF0aW9uO1xyXG4gICAgYWRQYXJhbT86IEFkUGFyYW07XHJcbiAgICBsb2dvQW5jaG9yPzogQW5jaG9yO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gTW9kdWxlc1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBQbHVnaW4oe1xyXG4gICAgcGx1Z2luTmFtZTogXCJITVNBZHNcIixcclxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzXCIsXHJcbiAgICBwbHVnaW5SZWY6IFwiSE1TQWRzXCIsXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcclxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TQWRzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpIEhNU0ludGVyc3RpdGlhbEFkID0gSE1TSW50ZXJzdGl0aWFsQWQ7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KCkgSE1TQmFubmVyQWQgPSBITVNCYW5uZXJBZDtcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKSBITVNTcGxhc2hBZCA9IEhNU1NwbGFzaEFkO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpIEhNU1Jld2FyZEFkID0gSE1TUmV3YXJkQWQ7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KCkgSE1TTmF0aXZlQWQgPSBITVNOYXRpdmVBZDtcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKSBITVNSb2xsQWQgPSBITVNSb2xsQWQ7XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIG9uKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldFNES1ZlcnNpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0UmVxdWVzdE9wdGlvbnMoKTogUHJvbWlzZTxITVNSZXF1ZXN0T3B0aW9ucz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRSZXF1ZXN0T3B0aW9ucyhyZXF1ZXN0T3B0aW9uczogSE1TUmVxdWVzdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0Q29uc2VudChjb25zZW50OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGRpc2FibGVMb2dnZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgYWRkVGVzdERldmljZUlkKHRlc3REZXZpY2VJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldFRlc3REZXZpY2VJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRVbmRlckFnZU9mUHJvbWlzZSh1bmRlckFnZU9mUHJvbWlzZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRDb25zZW50U3RhdHVzKGNvbnNlbnRTdGF0dXM6IENvbnNlbnRTdGF0dXMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0RGVidWdOZWVkQ29uc2VudChkZWJ1Z05lZWRDb25zZW50OiBEZWJ1Z05lZWRDb25zZW50KTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVxdWVzdENvbnNlbnRVcGRhdGUoKTogUHJvbWlzZTxDb25zZW50VXBkYXRlUmVzdWx0PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHZlcmlmeUFkSWQoYWRJZDogc3RyaW5nLCBpc0xpbWl0QWRUcmFja2luZzogYm9vbGVhbik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRBZHZlcnRpc2luZ0lkSW5mbygpOiBQcm9taXNlPE9haWRSZXN1bHQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVmZXJyZXJDbGllbnRTdGFydENvbm5lY3Rpb24oaXNUZXN0PzogYm9vbGVhbik6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHJlZmVycmVyQ2xpZW50RW5kQ29ubmVjdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVmZXJyZXJDbGllbnRJc1JlYWR5KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRJbnN0YWxsUmVmZXJyZXIoKTogUHJvbWlzZTxSZWZlcnJlckRldGFpbHM+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gICAgcGx1Z2luTmFtZTogXCJITVNBZHNcIixcclxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzXCIsXHJcbiAgICBwbHVnaW5SZWY6IFwiSE1TQWRzLkhNU0Jhbm5lckFkXCIsXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcclxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TQmFubmVyQWQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgb24oZXZlbnROYW1lOiBCYW5uZXJBZEV2ZW50cywgY2FsbGJhY2s6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgYXN5bmMgY3JlYXRlKGRpdklkOiBzdHJpbmcsIGJvdW5kcz86IExheW91dEJvdW5kcyk6IFByb21pc2U8SE1TQmFubmVyQWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2Nyb2xsKCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRBZElkKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldEFkSWQoYWRJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEJhbm5lckFkU2l6ZSgpOiBQcm9taXNlPEFkU2l6ZT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRCYW5uZXJBZFNpemUoYmFubmVyQWRTaXplOiBCYW5uZXJBZFNpemUgfCBBZFNpemUpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QmFja2dyb3VuZENvbG9yKGJnQ29sb3I6IENvbG9yKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldEJhbm5lclJlZnJlc2goYmFubmVyUmVmcmVzaDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldEFkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzTG9hZGluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgbG9hZEFkKGFkUGFyYW0/OiBBZFBhcmFtKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHBhdXNlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZXN1bWUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGRlc3Ryb3koKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEhlaWdodCgpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRIZWlnaHRQeCgpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRXaWR0aCgpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRXaWR0aFB4KCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzQXV0b0hlaWdodFNpemUoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzRHluYW1pY1NpemUoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzRnVsbFdpZHRoU2l6ZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0Q3VycmVudERpcmVjdGlvbkJhbm5lclNpemUod2lkdGg6IG51bWJlcik6IFByb21pc2U8QWRTaXplPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldExhbmRzY2FwZUJhbm5lclNpemUod2lkdGg6IG51bWJlcik6IFByb21pc2U8QWRTaXplPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldFBvcnRyYWl0QmFubmVyU2l6ZSh3aWR0aDogbnVtYmVyKTogUHJvbWlzZTxBZFNpemU+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gICAgcGx1Z2luTmFtZTogXCJITVNBZHNcIixcclxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzXCIsXHJcbiAgICBwbHVnaW5SZWY6IFwiSE1TQWRzLkhNU0ludGVyc3RpdGlhbEFkXCIsXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcclxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TSW50ZXJzdGl0aWFsQWQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgb24oXHJcbiAgICAgICAgZXZlbnROYW1lOiBJbnRlcnN0aXRpYWxBZEV2ZW50cyxcclxuICAgICAgICBjYWxsYmFjazogKHJlc3VsdD86IGFueSkgPT4gdm9pZFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGFzeW5jIGNyZWF0ZSh1c2VBY3Rpdml0eTogYm9vbGVhbik6IFByb21pc2U8SE1TSW50ZXJzdGl0aWFsQWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2Nyb2xsKCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzaG93KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0xvYWRlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNMb2FkaW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBsb2FkQWQoYWRQYXJhbT86IEFkUGFyYW0pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QWRJZChhZElkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0QWRJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRBZExpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRSZXdhcmRBZExpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICB2aWRlb09wZXJhdG9yR2V0QXNwZWN0UmF0aW8oKTogUHJvbWlzZTxWaWRlb09wZXJhdG9yQXNwZWN0UmF0aW8+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgdmlkZW9PcGVyYXRvckhhc1ZpZGVvKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICB2aWRlb09wZXJhdG9ySXNDdXN0b21pemVPcGVyYXRlRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgdmlkZW9PcGVyYXRvcklzTXV0ZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHZpZGVvT3BlcmF0b3JNdXRlKG11dGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgdmlkZW9PcGVyYXRvclBhdXNlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICB2aWRlb09wZXJhdG9yUGxheSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgdmlkZW9PcGVyYXRvclN0b3AoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6IFwiSE1TQWRzXCIsXHJcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc1wiLFxyXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkcy5ITVNOYXRpdmVBZFwiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU05hdGl2ZUFkIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIG9uKGV2ZW50TmFtZTogTmF0aXZlQWRFdmVudHMsIGNhbGxiYWNrOiAocmVzdWx0PzogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGFzeW5jIGNyZWF0ZShcclxuICAgICAgICBvcHRpb25zOiBOYXRpdmVBZE9wdGlvbnMsXHJcbiAgICAgICAgYm91bmRzPzogTGF5b3V0Qm91bmRzXHJcbiAgICApOiBQcm9taXNlPEhNU05hdGl2ZUFkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGxvYWRBZChvcHRpb25zPzogTmF0aXZlQWRMb2FkT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzaG93KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0xvYWRpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGRlc3Ryb3koKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGRpc2xpa2VBZChkaXNsaWtlUmVhc29uOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QWxsb3dDdXN0b21DbGljaygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0QWRTb3VyY2UoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0RGVzY3JpcHRpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0Q2FsbFRvQWN0aW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldERpc2xpa2VBZFJlYXNvbnMoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0N1c3RvbUNsaWNrQWxsb3dlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNDdXN0b21EaXNsaWtlVGhpc0FkRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVjb3JkQ2xpY2tFdmVudCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVjb3JkSW1wcmVzc2lvbkV2ZW50KGltcHJlc3Npb25EYXRhOiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0VW5pcXVlSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0RGlzbGlrZUFkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdvdG9XaHlUaGlzQWRQYWdlKHVzZVZpZXc6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0QWRTaWduKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldFRpdGxlKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldFdoeVRoaXNBZCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZWNvcmRTaG93U3RhcnRFdmVudChzaG93U3RhcnREYXRhOiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgb25BZENsb3NlKGtleXdvcmRzOiBzdHJpbmdbXSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXROYXRpdmVBZENvbmZpZ3VyYXRpb24oKTogUHJvbWlzZTxOYXRpdmVBZENvbmZpZ3VyYXRpb24+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gICAgcGx1Z2luTmFtZTogXCJITVNBZHNcIixcclxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzXCIsXHJcbiAgICBwbHVnaW5SZWY6IFwiSE1TQWRzLkhNU1Jld2FyZEFkXCIsXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcclxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TUmV3YXJkQWQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgb24oZXZlbnROYW1lOiBSZXdhcmRBZEV2ZW50cywgY2FsbGJhY2s6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgYXN5bmMgY3JlYXRlKGFkSWQ6IHN0cmluZyk6IFByb21pc2U8SE1TUmV3YXJkQWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2hvdyh1c2VBY3Rpdml0eTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZXN1bWUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHBhdXNlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBsb2FkQWRXaXRoQWRJZChhZElkOnN0cmluZyxhZFBhcmFtPzpBZFBhcmFtKTogUHJvbWlzZTx2b2lkPntcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGxvYWRBZChhZFBhcmFtPzogQWRQYXJhbSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0xvYWRlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0RGF0YSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRVc2VySWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0UmV3YXJkKCk6IFByb21pc2U8SE1TUmV3YXJkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldERhdGEoZGF0YTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldEltbWVyc2l2ZShpbW1lcnNpdmU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0VXNlcklkKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldFJld2FyZFZlcmlmeUNvbmZpZyhjb25maWc6IEhNU1Jld2FyZFZlcmlmeUNvbmZpZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRSZXdhcmRWZXJpZnlDb25maWcoKTogUHJvbWlzZTxITVNSZXdhcmRWZXJpZnlDb25maWc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0T25NZXRhZGF0YUNoYW5nZWRMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0UmV3YXJkQWRMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gICAgcGx1Z2luTmFtZTogXCJITVNBZHNcIixcclxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzXCIsXHJcbiAgICBwbHVnaW5SZWY6IFwiSE1TQWRzLkhNU1JvbGxBZFwiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU1JvbGxBZCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBvbihldmVudE5hbWU6IFJvbGxBZEV2ZW50cywgY2FsbGJhY2s6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgYXN5bmMgY3JlYXRlKFxyXG4gICAgICAgIHBhcmFtczogUm9sbEFkTG9hZGVyUGFyYW1zLFxyXG4gICAgICAgIGRpdklkOiBzdHJpbmcsXHJcbiAgICAgICAgYm91bmRzPzogTGF5b3V0Qm91bmRzXHJcbiAgICApOiBQcm9taXNlPEhNU1JvbGxBZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzY3JvbGwoKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGxvYWRBZChvcHRpb25zOiBSb2xsQWRMb2FkT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0xvYWRpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGRlc3Ryb3koKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHBhdXNlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc1BsYXlpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIG11dGUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHVubXV0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgb25DbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcGxheSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc3RvcCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVtb3ZlSW5zdHJlYW1NZWRpYUNoYW5nZUxpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZW1vdmVNZWRpYU11dGVMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVtb3ZlSW5zdHJlYW1NZWRpYVN0YXRlTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldEluc3RyZWFtQWRzKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRJbnN0cmVhbU1lZGlhQ2hhbmdlTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldE1lZGlhTXV0ZUxpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRJbnN0cmVhbU1lZGlhU3RhdGVMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0T25JbnN0cmVhbUFkQ2xpY2tMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0QWRTb3VyY2UoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0RHVyYXRpb24oKTogUHJvbWlzZTxEdXJhdGlvbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRXaHlUaGlzQWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0QWRTaWduKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzQ2xpY2tlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNFeHBpcmVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0ltYWdlQWQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzU2hvd24oKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzVmlkZW9BZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0Q2FsbFRvQWN0aW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6IFwiSE1TQWRzXCIsXHJcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc1wiLFxyXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkcy5ITVNTcGxhc2hBZFwiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU1NwbGFzaEFkIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIG9uKGV2ZW50TmFtZTogU3BsYXNoQWRFdmVudHMsIGNhbGxiYWNrOiAocmVzdWx0PzogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGFzeW5jIGNyZWF0ZSgpOiBQcm9taXNlPEhNU1NwbGFzaEFkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldExvZ28oZmlsZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldFdpZGVTbG9nYW5SZXNJZCh3aWRlU2xvZ2FuUmVzSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRTbG9nYW5SZXNJZChzbG9nYW5SZXNJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGxvYWQob3B0aW9uczogU3BsYXNoQWRMb2FkT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBwcmVsb2FkQWQob3B0aW9uczogU3BsYXNoQWRMb2FkT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBkZXN0cm95VmlldygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcGF1c2VWaWV3KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZXN1bWVWaWV3KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0xvYWRpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzTG9hZGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRBZERpc3BsYXlMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QXVkaW9Gb2N1c1R5cGUoYXVkaW9Gb2N1c1R5cGU6IEF1ZGlvRm9jdXNUeXBlKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==