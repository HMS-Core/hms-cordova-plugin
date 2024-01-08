/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.

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
    BannerAdSize["BANNER_SIZE_ADVANCED"] = "BANNER_SIZE_ADVANCED";
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
    NativeAdTemplate["NATIVE_AD_WITH_APP_DOWNLOAD_BTN_TEMPLATE"] = "NATIVE_AD_WITH_APP_DOWNLOAD_BTN_TEMPLATE";
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
    NativeAdEvents["APP_DOWNLOAD_STATUS_CHANGED"] = "app_download_status_changed";
    NativeAdEvents["APP_DOWNLOAD_NON_WIFI_DOWNLOAD"] = "app_download_non_wifi_download";
})(NativeAdEvents || (NativeAdEvents = {}));
export var VastEvents;
(function (VastEvents) {
    VastEvents["VAST_LOAD_SUCCESS"] = "vast_load_success";
    VastEvents["VAST_LOAD_FAILED"] = "vast_load_failed";
    VastEvents["VAST_PLAY_STATE_CHANGED"] = "vast_play_state_changed";
    VastEvents["VAST_VOLUME_CHANGED"] = "vast_volume_changed";
    VastEvents["VAST_SCREEN_VIEW_CHANGED"] = "vast_screen_view_changed";
    VastEvents["VAST_PROGRESS_CHANGED"] = "vast_progress_changed";
    VastEvents["VAST_ON_SUCCESS"] = "vast_on_success";
    VastEvents["VAST_ON_FAILED"] = "vast_on_failed";
    VastEvents["VAST_AD_READY"] = "vast_ad_ready";
    VastEvents["VAST_AD_FINISH"] = "vast_ad_finish";
    VastEvents["VAST_BUFFER_START"] = "vast_buffer_start";
    VastEvents["VAST_BUFFER_END"] = "vast_buffer_end";
})(VastEvents || (VastEvents = {}));
export var ActivateStyle;
(function (ActivateStyle) {
    ActivateStyle[ActivateStyle["BOTTOM_BANNER"] = 1] = "BOTTOM_BANNER";
    ActivateStyle[ActivateStyle["CONFIRM_DIALOG"] = 2] = "CONFIRM_DIALOG";
})(ActivateStyle || (ActivateStyle = {}));
export var CreativeMatchType;
(function (CreativeMatchType) {
    CreativeMatchType[CreativeMatchType["EXACT"] = 0] = "EXACT";
    CreativeMatchType[CreativeMatchType["SMART"] = 1] = "SMART";
    CreativeMatchType[CreativeMatchType["UNKNOWN"] = 2] = "UNKNOWN";
    CreativeMatchType[CreativeMatchType["ANY"] = 3] = "ANY";
    CreativeMatchType[CreativeMatchType["LANDSCAPE"] = 4] = "LANDSCAPE";
    CreativeMatchType[CreativeMatchType["PORTRAIT"] = 5] = "PORTRAIT";
    CreativeMatchType[CreativeMatchType["SQUARE"] = 6] = "SQUARE";
})(CreativeMatchType || (CreativeMatchType = {}));
export var AppDownloadStatus;
(function (AppDownloadStatus) {
    AppDownloadStatus["DOWNLOAD"] = "DOWNLOAD";
    AppDownloadStatus["WAITING_FOR_WIFI"] = "WAITING_FOR_WIFI";
    AppDownloadStatus["WAITING"] = "WAITING";
    AppDownloadStatus["DOWNLOADING"] = "DOWNLOADING";
    AppDownloadStatus["PAUSE"] = "PAUSE";
    AppDownloadStatus["RESUME"] = "RESUME";
    AppDownloadStatus["DOWNLOADED"] = "DOWNLOADED";
    AppDownloadStatus["DOWNLOADFAILED"] = "DOWNLOADFAILED";
    AppDownloadStatus["INSTALLING"] = "INSTALLING";
    AppDownloadStatus["INSTALL"] = "INSTALL";
    AppDownloadStatus["INSTALLED"] = "INSTALLED";
})(AppDownloadStatus || (AppDownloadStatus = {}));
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
    HMSAds.prototype.getAppActivateStyle = function () { return cordova(this, "getAppActivateStyle", { "otherPromise": true }, arguments); };
    HMSAds.prototype.setAppActivateStyle = function (style) { return cordova(this, "setAppActivateStyle", { "otherPromise": true }, arguments); };
    HMSAds.prototype.setAppInstalledNotify = function (status) { return cordova(this, "setAppInstalledNotify", { "otherPromise": true }, arguments); };
    HMSAds.prototype.isAppInstalledNotify = function () { return cordova(this, "isAppInstalledNotify", { "otherPromise": true }, arguments); };
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
    HMSAds.prototype.getInstallReferrer = function (installChannel) { return cordova(this, "getInstallReferrer", { "otherPromise": true }, arguments); };
    HMSAds.prototype.initVast = function (vastSdkConfiguration) { return cordova(this, "initVast", { "otherPromise": true }, arguments); };
    HMSAds.prototype.getVastSdkConfiguration = function () { return cordova(this, "getVastSdkConfiguration", { "otherPromise": true }, arguments); };
    HMSAds.prototype.updateSdkServerConfig = function (slotId) { return cordova(this, "updateSdkServerConfig", { "otherPromise": true }, arguments); };
    HMSAds.prototype.userAcceptAdLicense = function (isAcceptLicense) { return cordova(this, "userAcceptAdLicense", { "otherPromise": true }, arguments); };
    HMSAds.prototype.getEventProcessor = function () { return cordova(this, "getEventProcessor", { "otherPromise": true }, arguments); };
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
    Object.defineProperty(HMSAds.prototype, "HMSVast", {
        get: function () { return cordovaPropertyGet(this, "HMSVast"); },
        set: function (value) { cordovaPropertySet(this, "HMSVast", value); },
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
    HMSNativeAd.prototype.setOnDownloadStatusChangedListener = function () { return cordova(this, "setOnDownloadStatusChangedListener", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.setOnNonWifiDownloadListener = function () { return cordova(this, "setOnNonWifiDownloadListener", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.setShowPermissionDialog = function (show) { return cordova(this, "setShowPermissionDialog", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.setAllowedNonWifiNetwork = function (allowed) { return cordova(this, "setAllowedNonWifiNetwork", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.cancel = function () { return cordova(this, "cancel", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.continueDownload = function () { return cordova(this, "continueDownload", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.showAdvertiserInfoDialog = function () { return cordova(this, "showAdvertiserInfoDialog", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.hideAdvertiserInfoDialog = function () { return cordova(this, "hideAdvertiserInfoDialog", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.hasAdvertiserInfo = function () { return cordova(this, "hasAdvertiserInfo", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.getAdvertiserInfo = function () { return cordova(this, "getAdvertiserInfo", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.showAppDetailPage = function () { return cordova(this, "showAppDetailPage", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.isTransparencyOpen = function () { return cordova(this, "isTransparencyOpen", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.getTransparencyTplUrl = function () { return cordova(this, "getTransparencyTplUrl", { "otherPromise": true }, arguments); };
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
    HMSRewardAd.prototype.setMobileDataAlertSwitch = function (alertSwitch) { return cordova(this, "setMobileDataAlertSwitch", { "otherPromise": true }, arguments); };
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
    HMSRollAd.prototype.showAdvertiserInfoDialog = function () { return cordova(this, "showAdvertiserInfoDialog", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.hideAdvertiserInfoDialog = function () { return cordova(this, "hideAdvertiserInfoDialog", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.hasAdvertiserInfo = function () { return cordova(this, "hasAdvertiserInfo", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.getAdvertiserInfo = function () { return cordova(this, "getAdvertiserInfo", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.isTransparencyOpen = function () { return cordova(this, "isTransparencyOpen", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.getTransparencyTplUrl = function () { return cordova(this, "getTransparencyTplUrl", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.showTransparencyDialog = function () { return cordova(this, "showTransparencyDialog", { "otherPromise": true }, arguments); };
    HMSRollAd.prototype.hideTransparencyDialog = function () { return cordova(this, "hideTransparencyDialog", { "otherPromise": true }, arguments); };
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
var HMSVast = /** @class */ (function (_super) {
    __extends(HMSVast, _super);
    function HMSVast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSVast.prototype.on = function (eventName, callback) { return cordova(this, "on", { "otherPromise": true }, arguments); };
    HMSVast.prototype.create = function (divId, bounds) { return cordova(this, "create", { "otherPromise": true }, arguments); };
    HMSVast.prototype.scroll = function () { return cordova(this, "scroll", { "otherPromise": true }, arguments); };
    HMSVast.prototype.loadAd = function (options) { return cordova(this, "loadAd", { "otherPromise": true }, arguments); };
    HMSVast.prototype.resume = function () { return cordova(this, "resume", { "otherPromise": true }, arguments); };
    HMSVast.prototype.pause = function () { return cordova(this, "pause", { "otherPromise": true }, arguments); };
    HMSVast.prototype.release = function () { return cordova(this, "release", { "otherPromise": true }, arguments); };
    HMSVast.prototype.toggleMuteState = function (isMute) { return cordova(this, "toggleMuteState", { "otherPromise": true }, arguments); };
    HMSVast.prototype.startOrPause = function () { return cordova(this, "startOrPause", { "otherPromise": true }, arguments); };
    HMSVast.pluginName = "HMSAds";
    HMSVast.plugin = "cordova-plugin-hms-ads";
    HMSVast.pluginRef = "HMSAds.HMSVast";
    HMSVast.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSVast.platforms = ["Android"];
    HMSVast.decorators = [
        { type: Injectable }
    ];
    return HMSVast;
}(IonicNativePlugin));
export { HMSVast };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7O0FBRUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHNFQUtOLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsK0RBQStEO0FBQy9ELFlBQVk7QUFDWiwrREFBK0Q7QUFFL0QsTUFBTSxDQUFOLElBQVksaUJBVVg7QUFWRCxXQUFZLGlCQUFpQjtJQUN6Qiw2RUFBa0IsQ0FBQTtJQUNsQixpR0FBNEIsQ0FBQTtJQUM1Qiw2RkFBMEIsQ0FBQTtJQUMxQiw2RUFBa0IsQ0FBQTtJQUNsQix1RkFBdUIsQ0FBQTtJQUN2QixpRkFBb0IsQ0FBQTtJQUNwQixtR0FBNkIsQ0FBQTtJQUM3QixtR0FBNkIsQ0FBQTtJQUM3QixpSEFBb0MsQ0FBQTtBQUN4QyxDQUFDLEVBVlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQVU1QjtBQUNELE1BQU0sQ0FBTixJQUFZLHdCQUtYO0FBTEQsV0FBWSx3QkFBd0I7SUFDaEMsaUhBQTZCLENBQUE7SUFDN0IsNkdBQTJCLENBQUE7SUFDM0IscUhBQStCLENBQUE7SUFDL0IscUhBQStCLENBQUE7QUFDbkMsQ0FBQyxFQUxXLHdCQUF3QixLQUF4Qix3QkFBd0IsUUFLbkM7QUFDRCxNQUFNLENBQU4sSUFBWSx1QkFNWDtBQU5ELFdBQVksdUJBQXVCO0lBQy9CLDREQUFpQyxDQUFBO0lBQ2pDLDhEQUFtQyxDQUFBO0lBQ25DLGlFQUFzQyxDQUFBO0lBQ3RDLDREQUFpQyxDQUFBO0lBQ2pDLDREQUFpQyxDQUFBO0FBQ3JDLENBQUMsRUFOVyx1QkFBdUIsS0FBdkIsdUJBQXVCLFFBTWxDO0FBQ0QsTUFBTSxDQUFOLElBQVksTUFJWDtBQUpELFdBQVksTUFBTTtJ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QUMsT0FBNEI7SUFJakMsK0JBQVMsYUFBQyxPQUE0QjtJQUl0QyxpQ0FBVztJQUlYLCtCQUFTO0lBSVQsZ0NBQVU7SUFJViwrQkFBUztJQUlULDhCQUFRO0lBSVIsMENBQW9CO0lBSXBCLHVDQUFpQixhQUFDLGNBQThCOzs7Ozs7O2dCQXZEbkQsVUFBVTs7c0JBdnZDWDtFQXd2Q2lDLGlCQUFpQjtTQUFyQyxXQUFXOztJQW1FSywyQkFBaUI7Ozs7SUFFMUMsb0JBQUUsYUFBQyxTQUFxQixFQUFFLFFBQWdDO0lBSXBELHdCQUFNLGFBQ1IsS0FBYSxFQUNiLE1BQXFCO0lBS3pCLHdCQUFNO0lBSU4sd0JBQU0sYUFBQyxPQUF3QjtJQUkvQix3QkFBTTtJQUlOLHVCQUFLO0lBSUwseUJBQU87SUFJUCxpQ0FBZSxhQUFDLE1BQWM7SUFLOUIsOEJBQVk7Ozs7Ozs7Z0JBdkNmLFVBQVU7O2tCQTF6Q1g7RUEyekM2QixpQkFBaUI7U0FBakMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQ29weXJpZ2h0IDIwMjAtMjAyMy4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcbiAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gICAgUGx1Z2luLFxuICAgIENvcmRvdmEsXG4gICAgQ29yZG92YVByb3BlcnR5LFxuICAgIElvbmljTmF0aXZlUGx1Z2luLFxufSBmcm9tIFwiQGlvbmljLW5hdGl2ZS9jb3JlXCI7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gQ29uc3RhbnRzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGVudW0gQWRQYXJhbUVycm9yQ29kZXMge1xuICAgIEFEX1BBUkFNX0lOTkVSID0gMCxcbiAgICBBRF9QQVJBTV9JTlZBTElEX1JFUVVFU1QgPSAxLFxuICAgIEFEX1BBUkFNX05FVFdPUktfRVJST1IgPSAyLFxuICAgIEFEX1BBUkFNX05PX0FEID0gMyxcbiAgICBBRF9QQVJBTV9BRF9MT0FESU5HID0gNCxcbiAgICBBRF9QQVJBTV9MT1dfQVBJID0gNSxcbiAgICBBRF9QQVJBTV9CQU5ORVJfQURfRVhQSVJFID0gNixcbiAgICBBRF9QQVJBTV9CQU5ORVJfQURfQ0FOQ0VMID0gNyxcbiAgICBBRF9QQVJBTV9ITVNfTk9UX1NVUFBPUlRfU0VUX0FQUCA9IDgsXG59XG5leHBvcnQgZW51bSBSZXdhcmRBZFN0YXR1c0Vycm9yQ29kZXMge1xuICAgIFJFV0FSRF9BRF9TVEFUVVNfSU5URVJOQUwgPSAwLFxuICAgIFJFV0FSRF9BRF9TVEFUVVNfUkVVU0VEID0gMSxcbiAgICBSRVdBUkRfQURfU1RBVFVTX05PVF9MT0FERUQgPSAyLFxuICAgIFJFV0FSRF9BRF9TVEFUVVNfQkFDS0dST1VORCA9IDMsXG59XG5leHBvcnQgZW51bSBBZENvbnRlbnRDbGFzc2lmaWNhdGlvbiB7XG4gICAgQURfQ09OVEVOVF9DTEFTU0lGSUNBVElPTl9BID0gXCJBXCIsXG4gICAgQURfQ09OVEVOVF9DTEFTU0lGSUNBVElPTl9QSSA9IFwiUElcIixcbiAgICBBRF9DT05URU5UX0NMQVNTSUZJQ0FUSU9OX1VOS05PV04gPSBcIlwiLFxuICAgIEFEX0NPTlRFTlRfQ0xBU1NJRklDQVRJT05fSiA9IFwiSlwiLFxuICAgIEFEX0NPTlRFTlRfQ0xBU1NJRklDQVRJT05fVyA9IFwiV1wiLFxufVxuZXhwb3J0IGVudW0gR2VuZGVyIHtcbiAgICBGRU1BTEUgPSAyLFxuICAgIE1BTEUgPSAxLFxuICAgIFVOS05PV04gPSAwLFxufVxuZXhwb3J0IGVudW0gTm9uUGVyc29uYWxpemVkQWQge1xuICAgIEFMTE9XX0FMTCA9IDAsXG4gICAgQUxMT1dfTk9OX1BFUlNPTkFMSVpFRCA9IDEsXG59XG5leHBvcnQgZW51bSBDaGlsZFByb3RlY3Rpb24ge1xuICAgIFRBR19GT1JfQ0hJTERfUFJPVEVDVElPTl9VTlNQRUNJRklFRCA9IC0xLFxuICAgIFRBR19GT1JfQ0hJTERfUFJPVEVDVElPTl9GQUxTRSA9IDAsXG4gICAgVEFHX0ZPUl9DSElMRF9QUk9URUNUSU9OX1RSVUUgPSAxLFxufVxuZXhwb3J0IGVudW0gVW5kZXJBZ2VPZlByb21pc2Uge1xuICAgIFBST01JU0VfVU5TUEVDSUZJRUQgPSAtMSxcbiAgICBQUk9NSVNFX0ZBTFNFID0gMCxcbiAgICBQUk9NSVNFX1RSVUUgPSAxLFxufVxuZXhwb3J0IGVudW0gQmFubmVyQWRTaXplIHtcbiAgICBCQU5ORVJfU0laRV8zNjBfNTcgPSBcIkJBTk5FUl9TSVpFXzM2MF81N1wiLFxuICAgIEJBTk5FUl9TSVpFXzM2MF8xNDQgPSBcIkJBTk5FUl9TSVpFXzM2MF8xNDRcIixcbiAgICBCQU5ORVJfU0laRV8xNjBfNjAwID0gXCJCQU5ORVJfU0laRV8xNjBfNjAwXCIsXG4gICAgQkFOTkVSX1NJWkVfMzAwXzI1MCA9IFwiQkFOTkVSX1NJWkVfMzAwXzI1MFwiLFxuICAgIEJBTk5FUl9TSVpFXzMyMF8xMDAgPSBcIkJBTk5FUl9TSVpFXzMyMF8xMDBcIixcbiAgICBCQU5ORVJfU0laRV8zMjBfNTAgPSBcIkJBTk5FUl9TSVpFXzMyMF81MFwiLFxuICAgIEJBTk5FUl9TSVpFXzQ2OF82MCA9IFwiQkFOTkVSX1NJWkVfNDY4XzYwXCIsXG4gICAgQkFOTkVSX1NJWkVfNzI4XzkwID0gXCJCQU5ORVJfU0laRV83MjhfOTBcIixcbiAgICBCQU5ORVJfU0laRV9EWU5BTUlDID0gXCJCQU5ORVJfU0laRV9EWU5BTUlDXCIsXG4gICAgQkFOTkVSX1NJWkVfSU5WQUxJRCA9IFwiQkFOTkVSX1NJWkVfSU5WQUxJRFwiLFxuICAgIEJBTk5FUl9TSVpFX1NNQVJUID0gXCJCQU5ORVJfU0laRV9TTUFSVFwiLFxuICAgIEJBTk5FUl9TSVpFX0FEVkFOQ0VEID0gXCJCQU5ORVJfU0laRV9BRFZBTkNFRFwiLFxufVxuZXhwb3J0IGVudW0gSE1TU2NyZWVuT3JpZW50YXRpb24ge1xuICAgIFNDUkVFTl9PUklFTlRBVElPTl9MQU5EU0NBUEUgPSAwLFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9VTlNQRUNJRklFRCA9IC0xLFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9QT1JUUkFJVCA9IDEsXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1VTRVIgPSAyLFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9CRUhJTkQgPSAzLFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9TRU5TT1IgPSA0LFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9OT1NFTlNPUiA9IDUsXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1NFTlNPUl9MQU5EU0NBUEUgPSA2LFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9TRU5TT1JfUE9SVFJBSVQgPSA3LFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9SRVZFUlNFX0xBTkRTQ0FQRSA9IDgsXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1JFVkVSU0VfUE9SVFJBSVQgPSA5LFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9GVUxMX1NFTlNPUiA9IDEwLFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9VU0VSX0xBTkRTQ0FQRSA9IDExLFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9VU0VSX1BPUlRSQUlUID0gMTIsXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX0ZVTExfVVNFUiA9IDEzLFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9MT0NLRUQgPSAxNCxcbn1cbmV4cG9ydCBlbnVtIERlYnVnTmVlZENvbnNlbnQge1xuICAgIENPTlNFTlRfREVCVUdfRElTQUJMRUQgPSAwLFxuICAgIENPTlNFTlRfREVCVUdfTkVFRF9DT05TRU5UID0gMSxcbiAgICBDT05TRU5UX0RFQlVHX05PVF9ORUVEX0NPTlNFTlQgPSAyLFxufVxuZXhwb3J0IGVudW0gQ29uc2VudFN0YXR1cyB7XG4gICAgQ09OU0VOVF9QRVJTT05BTElaRUQgPSAwLFxuICAgIENPTlNFTlRfTk9OX1BFUlNPTkFMSVpFRCA9IDEsXG4gICAgQ09OU0VOVF9VTktOT1dOID0gMixcbn1cbmV4cG9ydCBlbnVtIEF1ZGlvRm9jdXNUeXBlIHtcbiAgICBHQUlOX0FVRElPX0ZPQ1VTX0FMTCA9IDAsXG4gICAgTk9UX0dBSU5fQVVESU9fRk9DVVNfV0hFTl9NVVRFID0gMSxcbiAgICBOT1RfR0FJTl9BVURJT19GT0NVU19BTEwgPSAyLFxufVxuZXhwb3J0IGVudW0gTWVkaWFBc3BlY3Qge1xuICAgIEFTUEVDVF9BTlkgPSAxLFxuICAgIEFTUEVDVF9DVVNUT01fU0laRSA9IC0xLFxuICAgIEFTUEVDVF9MQU5EU0NBUEUgPSAyLFxuICAgIEFTUEVDVF9QT1JUUkFJVCA9IDMsXG4gICAgQVNQRUNUX1NRVUFSRSA9IDQsXG4gICAgQVNQRUNUX1VOS05PV04gPSAwLFxufVxuZXhwb3J0IGVudW0gQ2hvaWNlc1Bvc2l0aW9uIHtcbiAgICBCT1RUT01fTEVGVCA9IDMsXG4gICAgQk9UVE9NX1JJR0hUID0gMixcbiAgICBJTlZJU0lCTEUgPSA0LFxuICAgIFRPUF9MRUZUID0gMCxcbiAgICBUT1BfUklHSFQgPSAxLFxufVxuZXhwb3J0IGVudW0gTWVkaWFEaXJlY3Rpb24ge1xuICAgIEFOWSA9IDAsXG4gICAgTEFORFNDQVBFID0gMixcbiAgICBQT1JUUkFJVCA9IDEsXG59XG5leHBvcnQgZW51bSBOYXRpdmVBZFRlbXBsYXRlIHtcbiAgICBOQVRJVkVfQURfU01BTExfVEVNUExBVEUgPSBcIk5BVElWRV9BRF9TTUFMTF9URU1QTEFURVwiLFxuICAgIE5BVElWRV9BRF9GVUxMX1RFTVBMQVRFID0gXCJOQVRJVkVfQURfRlVMTF9URU1QTEFURVwiLFxuICAgIE5BVElWRV9BRF9CQU5ORVJfVEVNUExBVEUgPSBcIk5BVElWRV9BRF9CQU5ORVJfVEVNUExBVEVcIixcbiAgICBOQVRJVkVfQURfVklERU9fVEVNUExBVEUgPSBcIk5BVElWRV9BRF9WSURFT19URU1QTEFURVwiLFxuICAgIE5BVElWRV9BRF9XSVRIX0FQUF9ET1dOTE9BRF9CVE5fVEVNUExBVEUgPSBcIk5BVElWRV9BRF9XSVRIX0FQUF9ET1dOTE9BRF9CVE5fVEVNUExBVEVcIlxufVxuZXhwb3J0IGVudW0gQ29sb3Ige1xuICAgIFJFRCA9IFwiUkVEXCIsXG4gICAgREtHUkFZID0gXCJES0dSQVlcIixcbiAgICBHUkFZID0gXCJHUkFZXCIsXG4gICAgV0hJVEUgPSBcIldISVRFXCIsXG4gICAgQkxVRSA9IFwiQkxVRVwiLFxuICAgIEJMQUNLID0gXCJCTEFDS1wiLFxuICAgIExUR1JBWSA9IFwiTFRHUkFZXCIsXG4gICAgTUFHRU5UQSA9IFwiTUFHRU5UQVwiLFxuICAgIFlFTExPVyA9IFwiWUVMTE9XXCIsXG4gICAgQ1lBTiA9IFwiQ1lBTlwiLFxuICAgIEdSRUVOID0gXCJHUkVFTlwiLFxuICAgIFRSQU5TUEFSRU5UID0gXCJUUkFOU1BBUkVOVFwiLFxufVxuZXhwb3J0IGVudW0gSW5zdGFsbFJlZmVycmVyUmVzcG9uc2VzIHtcbiAgICBTRVJWSUNFX0RJU0NPTk5FQ1RFRCA9IC0xLFxuICAgIERFVkVMT1BFUl9FUlJPUiA9IDMsXG4gICAgU0VSVklDRV9VTkFWQUlMQUJMRSA9IDEsXG4gICAgT0sgPSAwLFxuICAgIEZFQVRVUkVfTk9UX1NVUFBPUlRFRCA9IDIsXG59XG5leHBvcnQgZW51bSBBbmNob3Ige1xuICAgIFRPUCA9IFwidG9wXCIsXG4gICAgQk9UVE9NID0gXCJib3R0b21cIixcbiAgICBJTlZJU0lCTEUgPSBcImludmlzaWJsZVwiLFxufVxuZXhwb3J0IGVudW0gQmFubmVyQWRFdmVudHMge1xuICAgIEJBTk5FUl9BRF9DTE9TRUQgPSBcImJhbm5lcl9hZF9jbG9zZWRcIixcbiAgICBCQU5ORVJfQURfRkFJTEVEID0gXCJiYW5uZXJfYWRfZmFpbGVkXCIsXG4gICAgQkFOTkVSX0FEX0xFQVZFID0gXCJiYW5uZXJfYWRfbGVhdmVcIixcbiAgICBCQU5ORVJfQURfT1BFTkVEID0gXCJiYW5uZXJfYWRfb3BlbmVkXCIsXG4gICAgQkFOTkVSX0FEX0xPQURFRCA9IFwiYmFubmVyX2FkX2xvYWRlZFwiLFxuICAgIEJBTk5FUl9BRF9DTElDS0VEID0gXCJiYW5uZXJfYWRfY2xpY2tlZFwiLFxuICAgIEJBTk5FUl9BRF9JTVBSRVNTSU9OID0gXCJiYW5uZXJfYWRfaW1wcmVzc2lvblwiLFxufVxuZXhwb3J0IGVudW0gSW50ZXJzdGl0aWFsQWRFdmVudHMge1xuICAgIElOVEVSU1RJVElBTF9BRF9DTE9TRUQgPSBcImludGVyc3RpdGlhbF9hZF9jbG9zZWRcIixcbiAgICBJTlRFUlNUSVRJQUxfQURfRkFJTEVEID0gXCJpbnRlcnN0aXRpYWxfYWRfZmFpbGVkXCIsXG4gICAgSU5URVJTVElUSUFMX0FEX0xFQVZFID0gXCJpbnRlcnN0aXRpYWxfYWRfbGVhdmVcIixcbiAgICBJTlRFUlNUSVRJQUxfQURfT1BFTkVEID0gXCJpbnRlcnN0aXRpYWxfYWRfb3BlbmVkXCIsXG4gICAgSU5URVJTVElUSUFMX0FEX0xPQURFRCA9IFwiaW50ZXJzdGl0aWFsX2FkX2xvYWRlZFwiLFxuICAgIElOVEVSU1RJVElBTF9BRF9DTElDS0VEID0gXCJpbnRlcnN0aXRpYWxfYWRfY2xpY2tlZFwiLFxuICAgIElOVEVSU1RJVElBTF9BRF9JTVBSRVNTSU9OID0gXCJpbnRlcnN0aXRpYWxfYWRfaW1wcmVzc2lvblwiLFxuICAgIElOVEVSU1RJVElBTF9BRF9SRVdBUkRFRCA9IFwiaW50ZXJzdGl0aWFsX2FkX3Jld2FyZGVkXCIsXG4gICAgSU5URVJTVElUSUFMX1JFV0FSRF9BRF9DTE9TRUQgPSBcImludGVyc3RpdGlhbF9yZXdhcmRfYWRfY2xvc2VkXCIsXG4gICAgSU5URVJTVElUSUFMX1JFV0FSRF9BRF9GQUlMRURfVE9fTE9BRCA9IFwiaW50ZXJzdGl0aWFsX3Jld2FyZF9hZF9mYWlsZWRfdG9fbG9hZFwiLFxuICAgIElOVEVSU1RJVElBTF9SRVdBUkRfQURfTEVGVF9BUFAgPSBcImludGVyc3RpdGlhbF9yZXdhcmRfYWRfbGVmdF9hcHBcIixcbiAgICBJTlRFUlNUSVRJQUxfUkVXQVJEX0FEX0xPQURFRCA9IFwiaW50ZXJzdGl0aWFsX3Jld2FyZF9hZF9sb2FkZWRcIixcbiAgICBJTlRFUlNUSVRJQUxfUkVXQVJEX0FEX09QRU5FRCA9IFwiaW50ZXJzdGl0aWFsX3Jld2FyZF9hZF9vcGVuZWRcIixcbiAgICBJTlRFUlNUSVRJQUxfUkVXQVJEX0FEX0NPTVBMRVRFRCA9IFwiaW50ZXJzdGl0aWFsX3Jld2FyZF9hZF9jb21wbGV0ZWRcIixcbiAgICBJTlRFUlNUSVRJQUxfUkVXQVJEX0FEX1NUQVJURUQgPSBcImludGVyc3RpdGlhbF9yZXdhcmRfYWRfc3RhcnRlZFwiLFxufVxuZXhwb3J0IGVudW0gU3BsYXNoQWRFdmVudHMge1xuICAgIFNQTEFTSF9BRF9GQUlMRURfVE9fTE9BRCA9IFwic3BsYXNoX2FkX2ZhaWxlZF90b19sb2FkXCIsXG4gICAgU1BMQVNIX0FEX0xPQURFRCA9IFwic3BsYXNoX2FkX2xvYWRlZFwiLFxuICAgIFNQTEFTSF9BRF9ESVNNSVNTRUQgPSBcInNwbGFzaF9hZF9kaXNtaXNzZWRcIixcbiAgICBTUExBU0hfQURfU0hPV0VEID0gXCJzcGxhc2hfYWRfc2hvd2VkXCIsXG4gICAgU1BMQVNIX0FEX0NMSUNLID0gXCJzcGxhc2hfYWRfY2xpY2tcIixcbn1cbmV4cG9ydCBlbnVtIFJvbGxBZEV2ZW50cyB7XG4gICAgUk9MTF9BRF9MT0FEX0ZBSUxFRCA9IFwicm9sbF9hZF9sb2FkX2ZhaWxlZFwiLFxuICAgIFJPTExfQURfTE9BREVEID0gXCJyb2xsX2FkX2xvYWRlZFwiLFxuICAgIFJPTExfQURfTUVESUFfQ0hBTkdFRCA9IFwicm9sbF9hZF9tZWRpYV9jaGFuZ2VkXCIsXG4gICAgUk9MTF9BRF9DTElDS0VEID0gXCJyb2xsX2FkX2NsaWNrZWRcIixcbiAgICBST0xMX0FEX01FRElBX1BST0dSRVNTID0gXCJyb2xsX2FkX21lZGlhX3Byb2dyZXNzXCIsXG4gICAgUk9MTF9BRF9NRURJQV9TVEFSVCA9IFwicm9sbF9hZF9tZWRpYV9zdGFydFwiLFxuICAgIFJPTExfQURfTUVESUFfUEFVU0UgPSBcInJvbGxfYWRfbWVkaWFfcGF1c2VcIixcbiAgICBST0xMX0FEX01FRElBX1NUT1AgPSBcInJvbGxfYWRfbWVkaWFfc3RvcFwiLFxuICAgIFJPTExfQURfTUVESUFfQ09NUExFVElPTiA9IFwicm9sbF9hZF9tZWRpYV9jb21wbGV0aW9uXCIsXG4gICAgUk9MTF9BRF9NRURJQV9FUlJPUiA9IFwicm9sbF9hZF9tZWRpYV9lcnJvclwiLFxuICAgIFJPTExfQURfTUVESUFfVU5NVVRFID0gXCJyb2xsX2FkX21lZGlhX3VubXV0ZVwiLFxuICAgIFJPTExfQURfTUVESUFfTVVURSA9IFwicm9sbF9hZF9tZWRpYV9tdXRlXCIsXG4gICAgUk9MTF9BRF9XSFlfVEhJU19BRCA9IFwicm9sbF9hZF93aHlfdGhpc19hZFwiLFxufVxuZXhwb3J0IGVudW0gUmV3YXJkQWRFdmVudHMge1xuICAgIFJFV0FSRF9NRVRBREFUQV9DSEFOR0VEID0gXCJyZXdhcmRfbWV0YWRhdGFfY2hhbmdlZFwiLFxuICAgIFJFV0FSRF9BRF9GQUlMRURfVE9fTE9BRF9MT0FEID0gXCJyZXdhcmRfYWRfZmFpbGVkX3RvX2xvYWRfbG9hZFwiLFxuICAgIFJFV0FSREVEX0xPQURFRCA9IFwicmV3YXJkZWRfbG9hZGVkXCIsXG4gICAgUkVXQVJERURfU1RBVFVTID0gXCJyZXdhcmRlZF9zdGF0dXNcIixcbiAgICBSRVdBUkRfQURfQ0xPU0VEX1NUQVRVUyA9IFwicmV3YXJkX2FkX2Nsb3NlZF9zdGF0dXNcIixcbiAgICBSRVdBUkRfQURfT1BFTkVEX1NUQVRVUyA9IFwicmV3YXJkX2FkX29wZW5lZF9zdGF0dXNcIixcbiAgICBSRVdBUkRfQURfRkFJTEVEX1RPX1NIT1cgPSBcInJld2FyZF9hZF9mYWlsZWRfdG9fc2hvd1wiLFxuICAgIFJFV0FSREVEID0gXCJyZXdhcmRlZFwiLFxuICAgIFJFV0FSRF9BRF9DTE9TRUQgPSBcInJld2FyZF9hZF9jbG9zZWRcIixcbiAgICBSRVdBUkRfQURfRkFJTEVEX1RPX0xPQUQgPSBcInJld2FyZF9hZF9mYWlsZWRfdG9fbG9hZFwiLFxuICAgIFJFV0FSRF9BRF9MT0FERUQgPSBcInJld2FyZF9hZF9sb2FkZWRcIixcbiAgICBSRVdBUkRfQURfT1BFTkVEID0gXCJyZXdhcmRfYWRfb3BlbmVkXCIsXG59XG5cbmV4cG9ydCBlbnVtIERldGFpbGVkQ3JlYXRpdmVUeXBlIHtcbiAgQklHX0lNRyA9IDkwMSxcbiAgVklERU8gPSA5MDMsXG4gIFRIUkVFX0lNRyA9IDkwNCxcbiAgU01BTExfSU1HID0gOTA1LFxuICBTSU5HTEVfSU1HID0gOTA5LFxuICBTSE9SVF9URVhUID0gOTEzLFxuICBMT05HX1RFWFQgPSA5MTRcbn1cblxuZXhwb3J0IGVudW0gTmF0aXZlQWRFdmVudHMge1xuICAgIE5BVElWRV9BRF9ESVNMSUtFRCA9IFwibmF0aXZlX2FkX2Rpc2xpa2VkXCIsXG4gICAgTkFUSVZFX0FEX0xPQURFRF9MT0FEID0gXCJuYXRpdmVfYWRfbG9hZGVkX2xvYWRcIixcbiAgICBOQVRJVkVfQURfQ0xPU0VEID0gXCJuYXRpdmVfYWRfY2xvc2VkXCIsXG4gICAgTkFUSVZFX0FEX0ZBSUxFRCA9IFwibmF0aXZlX2FkX2ZhaWxlZFwiLFxuICAgIE5BVElWRV9BRF9MRUFWRSA9IFwibmF0aXZlX2FkX2xlYXZlXCIsXG4gICAgTkFUSVZFX0FEX09QRU5FRCA9IFwibmF0aXZlX2FkX29wZW5lZFwiLFxuICAgIE5BVElWRV9BRF9MT0FERUQgPSBcIm5hdGl2ZV9hZF9sb2FkZWRcIixcbiAgICBOQVRJVkVfQURfQ0xJQ0tFRCA9IFwibmF0aXZlX2FkX2NsaWNrZWRcIixcbiAgICBOQVRJVkVfQURfSU1QUkVTU0lPTiA9IFwibmF0aXZlX2FkX2ltcHJlc3Npb25cIixcbiAgICBWSURFT19PUEVSQVRPUl9WSURFT19TVEFSVCA9IFwidmlkZW9fb3BlcmF0b3JfdmlkZW9fc3RhcnRcIixcbiAgICBWSURFT19PUEVSQVRPUl9WSURFT19QTEFZID0gXCJ2aWRlb19vcGVyYXRvcl92aWRlb19wbGF5XCIsXG4gICAgVklERU9fT1BFUkFUT1JfVklERU9fUEFVU0UgPSBcInZpZGVvX29wZXJhdG9yX3ZpZGVvX3BhdXNlXCIsXG4gICAgVklERU9fT1BFUkFUT1JfVklERU9fRU5EID0gXCJ2aWRlb19vcGVyYXRvcl92aWRlb19lbmRcIixcbiAgICBWSURFT19PUEVSQVRPUl9WSURFT19NVVRFID0gXCJ2aWRlb19vcGVyYXRvcl92aWRlb19tdXRlXCIsXG4gICAgQVBQX0RPV05MT0FEX1NUQVRVU19DSEFOR0VEID0nYXBwX2Rvd25sb2FkX3N0YXR1c19jaGFuZ2VkJyxcbiAgICBBUFBfRE9XTkxPQURfTk9OX1dJRklfRE9XTkxPQUQgPSAnYXBwX2Rvd25sb2FkX25vbl93aWZpX2Rvd25sb2FkJ1xufVxuXG5leHBvcnQgZW51bSBWYXN0RXZlbnRzIHtcbiAgICBWQVNUX0xPQURfU1VDQ0VTUyA9ICd2YXN0X2xvYWRfc3VjY2VzcycsXG4gICAgVkFTVF9MT0FEX0ZBSUxFRCA9ICd2YXN0X2xvYWRfZmFpbGVkJyxcbiAgICBWQVNUX1BMQVlfU1RBVEVfQ0hBTkdFRCA9ICd2YXN0X3BsYXlfc3RhdGVfY2hhbmdlZCcsXG4gICAgVkFTVF9WT0xVTUVfQ0hBTkdFRCA9ICd2YXN0X3ZvbHVtZV9jaGFuZ2VkJyxcbiAgICBWQVNUX1NDUkVFTl9WSUVXX0NIQU5HRUQgPSAndmFzdF9zY3JlZW5fdmlld19jaGFuZ2VkJyxcbiAgICBWQVNUX1BST0dSRVNTX0NIQU5HRUQgPSAndmFzdF9wcm9ncmVzc19jaGFuZ2VkJyxcbiAgICBWQVNUX09OX1NVQ0NFU1MgPSAndmFzdF9vbl9zdWNjZXNzJyxcbiAgICBWQVNUX09OX0ZBSUxFRCA9ICd2YXN0X29uX2ZhaWxlZCcsXG4gICAgVkFTVF9BRF9SRUFEWSA9ICd2YXN0X2FkX3JlYWR5JyxcbiAgICBWQVNUX0FEX0ZJTklTSCA9ICd2YXN0X2FkX2ZpbmlzaCcsXG4gICAgVkFTVF9CVUZGRVJfU1RBUlQ9ICd2YXN0X2J1ZmZlcl9zdGFydCcsXG4gICAgVkFTVF9CVUZGRVJfRU5EPSAndmFzdF9idWZmZXJfZW5kJyxcbn1cblxuZXhwb3J0IGVudW0gQWN0aXZhdGVTdHlsZSB7IFx0XG4gICAgQk9UVE9NX0JBTk5FUiA9IDEsXG4gICAgQ09ORklSTV9ESUFMT0cgPSAyXG59XG5leHBvcnQgZW51bSBDcmVhdGl2ZU1hdGNoVHlwZSB7XG4gICAgRVhBQ1QgPSAwLFxuICAgIFNNQVJUPSAxLFxuICAgIFVOS05PV04gPSAyLFxuICAgIEFOWSA9IDMsXG4gICAgTEFORFNDQVBFID0gNCxcbiAgICBQT1JUUkFJVCA9IDUsXG4gICAgU1FVQVJFID0gNlxuICBcbn1cbmV4cG9ydCBlbnVtIEFwcERvd25sb2FkU3RhdHVzIHtcbiAgICBET1dOTE9BRCA9IFwiRE9XTkxPQURcIixcbiAgICBXQUlUSU5HX0ZPUl9XSUZJID0gXCJXQUlUSU5HX0ZPUl9XSUZJXCIsXG4gICAgV0FJVElORyA9IFwiV0FJVElOR1wiLFxuICAgIERPV05MT0FESU5HID0gXCJET1dOTE9BRElOR1wiLFxuICAgIFBBVVNFID0gXCJQQVVTRVwiLFxuICAgIFJFU1VNRSA9IFwiUkVTVU1FXCIsXG4gICAgRE9XTkxPQURFRCA9IFwiRE9XTkxPQURFRFwiLFxuICAgIERPV05MT0FERkFJTEVEID0gXCJET1dOTE9BREZBSUxFRFwiLFxuICAgIElOU1RBTExJTkcgPSBcIklOU1RBTExJTkdcIixcbiAgICBJTlNUQUxMID0gXCJJTlNUQUxMXCIsXG4gICAgSU5TVEFMTEVEID0gXCJJTlNUQUxMRURcIlxuICB9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBJbnRlcmZhY2VzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGludGVyZmFjZSBMYXlvdXRCb3VuZHMge1xuICAgIG1hcmdpbkxlZnQ/OiBudW1iZXI7XG4gICAgbWFyZ2luUmlnaHQ/OiBudW1iZXI7XG4gICAgbWFyZ2luVG9wPzogbnVtYmVyO1xuICAgIG1hcmdpbkJvdHRvbT86IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICBtYXJnaW5MZWZ0PzogbnVtYmVyO1xuICAgIG1hcmdpblJpZ2h0PzogbnVtYmVyO1xuICAgIG1hcmdpblRvcD86IG51bWJlcjtcbiAgICBtYXJnaW5Cb3R0b20/OiBudW1iZXI7XG4gICAgcGFnZVhPZmZzZXQ/OiBudW1iZXI7XG4gICAgcGFnZVlPZmZzZXQ/OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIEFkUGFyYW0ge1xuICAgIGdlbmRlcj86IEdlbmRlcjtcbiAgICBhZENvbnRlbnRDbGFzc2lmaWNhdGlvbj86IEFkQ29udGVudENsYXNzaWZpY2F0aW9uO1xuICAgIHRhZ0ZvclVuZGVyQWdlT2ZQcm9taXNlPzogVW5kZXJBZ2VPZlByb21pc2U7XG4gICAgdGFnRm9yQ2hpbGRQcm90ZWN0aW9uPzogQ2hpbGRQcm90ZWN0aW9uO1xuICAgIG5vblBlcnNvbmFsaXplZEFkPzogTm9uUGVyc29uYWxpemVkQWQ7XG4gICAgYXBwQ291bnRyeT86IHN0cmluZztcbiAgICBhcHBMYW5nPzogc3RyaW5nO1xuICAgIGNvdW50cnlDb2RlPzogc3RyaW5nO1xuICAgIGJlbG9uZ0NvdW50cnlDb2RlPzogc3RyaW5nO1xuICAgIGNvbnNlbnQ/OiBzdHJpbmc7XG4gICAgcmVxdWVzdExvY2F0aW9uPzogYm9vbGVhbjtcbiAgICBkZXRhaWxlZENyZWF0aXZlVHlwZT86IERldGFpbGVkQ3JlYXRpdmVUeXBlW107XG4gICAgbG9jYXRpb24/IDpMb2NhdGlvbixcbiAgICBjb250ZW50QnVuZGxlPyA6IENvbnRlbnRCdW5kbGUsXG59XG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uIHtcbiAgICBsYXQ6IG51bWJlcixcbiAgICBsbmc6IG51bWJlclxufVxuZXhwb3J0IGludGVyZmFjZSBDb250ZW50QnVuZGxle1xuICAgIGNoYW5uZWxDYXRlZ29yeUNvZGU/OiBzdHJpbmcsXG4gICAgdGl0bGU/OiBzdHJpbmcsXG4gICAgdGFncz86IHN0cmluZyxcbiAgICByZWxhdGVkUGVvcGxlPzogc3RyaW5nLFxuICAgIGNvbnRlbnQ/OiBzdHJpbmcsXG4gICAgY29udGVudElEPzogbnVtYmVyLFxuICAgIGNhdGVnb3J5Pzogc3RyaW5nLFxuICAgIHN1YmNhdGVnb3J5Pzogc3RyaW5nLFxuICAgIHRoaXJkQ2F0ZWdvcnk/OiBzdHJpbmdcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSE1TUmVxdWVzdE9wdGlvbnMge1xuICAgIGFkQ29udGVudENsYXNzaWZpY2F0aW9uPzogQWRDb250ZW50Q2xhc3NpZmljYXRpb247XG4gICAgYXBwTGFuZz86IHN0cmluZztcbiAgICBhcHBDb3VudHJ5Pzogc3RyaW5nO1xuICAgIHRhZ0ZvckNoaWxkUHJvdGVjdGlvbj86IENoaWxkUHJvdGVjdGlvbjtcbiAgICB0YWdGb3JVbmRlckFnZU9mUHJvbWlzZT86IFVuZGVyQWdlT2ZQcm9taXNlO1xuICAgIG5vblBlcnNvbmFsaXplZEFkPzogTm9uUGVyc29uYWxpemVkQWQ7XG4gICAgY29uc2VudD86IHN0cmluZztcbiAgICByZXF1ZXN0TG9jYXRpb24/OiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBITVNSZXdhcmQge1xuICAgIHJld2FyZEFtb3VudDogbnVtYmVyO1xuICAgIHJld2FyZE5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSE1TUmV3YXJkVmVyaWZ5Q29uZmlnIHtcbiAgICBkYXRhOiBzdHJpbmc7XG4gICAgdXNlcklkOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIE9haWRSZXN1bHQge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgaXNMaW1pdEFkVHJhY2luZ0VuYWJsZWQ6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIER1cmF0aW9uIHtcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBSb2xsQWRMb2FkZXJQYXJhbXMge1xuICAgIGFkSWQ6IHN0cmluZztcbiAgICB0b3RhbER1cmF0aW9uOiBudW1iZXI7XG4gICAgbWF4Q291bnQ6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVmlkZW9Db25maWd1cmF0aW9uIHtcbiAgICBhdWRpb0ZvY3VzVHlwZT86IEF1ZGlvRm9jdXNUeXBlO1xuICAgIGNsaWNrVG9GdWxsU2NyZWVuUmVxdWVzdD86IGJvb2xlYW47XG4gICAgY3VzdG9taXplT3BlcmF0ZVJlcXVlc3RlZD86IGJvb2xlYW47XG4gICAgaXNTdGFydE11dGVkPzogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmF0aXZlQWRDb25maWd1cmF0aW9uIHtcbiAgICBhZFNpemU6IEFkU2l6ZTtcbiAgICBjaG9pY2VzUG9zaXRpb24/OiBDaG9pY2VzUG9zaXRpb247XG4gICAgbWVkaWFBc3BlY3Q/OiBNZWRpYUFzcGVjdDtcbiAgICBtZWRpYURpcmVjdGlvbj86IE1lZGlhRGlyZWN0aW9uO1xuICAgIHJldHVyblVybHNGb3JJbWFnZXM/OiBib29sZWFuO1xuICAgIHJlcXVlc3RDdXN0b21EaXNsaWtlVGhpc0FkPzogYm9vbGVhbjtcbiAgICByZXF1ZXN0TXVsdGlJbWFnZXM/OiBib29sZWFuO1xuICAgIHZpZGVvQ29uZmlndXJhdGlvbj86IFZpZGVvQ29uZmlndXJhdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWaWRlb09wZXJhdG9yQXNwZWN0UmF0aW8ge1xuICAgIHZpZGVvT3BlcmF0b3JHZXRBc3BlY3RSYXRpbzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdGl2ZUFkTG9hZE9wdGlvbnMge1xuICAgIGFkSWQ/OiBzdHJpbmc7XG4gICAgYWQ/OiBBZFBhcmFtO1xuICAgIG5hdGl2ZUFkT3B0aW9ucz86IE5hdGl2ZUFkQ29uZmlndXJhdGlvbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQWRTaXplIHtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBOYXRpdmVBZE9wdGlvbnMge1xuICAgIGRpdjogc3RyaW5nO1xuICAgIHRlbXBsYXRlPzogTmF0aXZlQWRUZW1wbGF0ZTtcbiAgICBiZz86IENvbG9yO1xufVxuZXhwb3J0IGludGVyZmFjZSBSb2xsQWRMb2FkT3B0aW9ucyB7XG4gICAgZmlsZT86IHN0cmluZztcbiAgICBhZFBhcmFtPzogQWRQYXJhbTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUmVmZXJyZXJEZXRhaWxzIHtcbiAgICByZXNwb25zZUNvZGU/OiBJbnN0YWxsUmVmZXJyZXJSZXNwb25zZXM7XG4gICAgaW5zdGFsbFJlZmVycmVyPzogc3RyaW5nO1xuICAgIHJlZmVycmVyQ2xpY2tUaW1lc3RhbXA/OiBudW1iZXI7XG4gICAgaW5zdGFsbEJlZ2luVGltZXN0YW1wPzogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBDb25zZW50VXBkYXRlUmVzdWx0IHtcbiAgICBjb25zZW50U3RhdHVzPzogQ29uc2VudFN0YXR1cztcbiAgICBpc05lZWRDb25zZW50PzogYm9vbGVhbjtcbiAgICBhZFByb3ZpZGVycz86IEFkUHJvdmlkZXJbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQWRQcm92aWRlciB7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBwcml2YWN5UG9saWN5VXJsPzogc3RyaW5nO1xuICAgIHNlcnZpY2VBcmVhPzogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBTcGxhc2hBZExvYWRPcHRpb25zIHtcbiAgICBhZElkOiBzdHJpbmc7XG4gICAgb3JpZW50YXRpb24/OiBITVNTY3JlZW5PcmllbnRhdGlvbjtcbiAgICBhZFBhcmFtPzogQWRQYXJhbTtcbiAgICBsb2dvQW5jaG9yPzogQW5jaG9yO1xufVxuZXhwb3J0IGludGVyZmFjZSBWYXN0TG9hZE9wdGlvbnMge1xuICAgIGFkUGFyYW0/OiBWYXN0Q29uZmlndXJhdGlvbixcbiAgICBwbGF5ZXJDb25maWc/OiBQbGF5ZXJDb25maWcsXG4gICAgaXNUZXN0QWQ/OiBib29sZWFuLFxuICAgIGlzQWRMb2FkV2l0aEFkc0RhdGE/OiBib29sZWFuLFxuICAgIGlzQ3VzdG9tVmlkZW9QbGF5ZXI/OiBib29sZWFuXG59XG5leHBvcnQgaW50ZXJmYWNlIFZhc3RDb25maWd1cmF0aW9uIHtcbiAgICBhZElkPzogc3RyaW5nLFxuICAgIHRvdGFsRHVyYXRpb24/OiBudW1iZXIsXG4gICAgY3JlYXRpdmVNYXRjaFN0cmF0ZWd5PzogQ3JlYXRpdmVNYXRjaFR5cGUsXG4gICAgYWxsb3dNb2JpbGVUcmFmZmljPzogYm9vbGVhbixcbiAgICBhZE9yaWVudGF0aW9uPzpNZWRpYURpcmVjdGlvbixcbiAgICBtYXhBZFBvZHM/OiBudW1iZXIsXG4gICAgcmVxdWVzdE9wdGlvbj86IEhNU1JlcXVlc3RPcHRpb25zXG59XG5leHBvcnQgaW50ZXJmYWNlIFBsYXllckNvbmZpZyB7XG4gICAgaXNFbmFibGVDdXRvdXQ/OiBib29sZWFuLFxuICAgIGlzRW5hYmxlUG9ydHJhaXQ/OiBib29sZWFuLFxuICAgIGlzRW5hYmxlUm90YXRpb24/OiBib29sZWFuLFxuICAgIGlzU2tpcExpbmVhckFkPzogYm9vbGVhbixcbiAgICBpc0ZvcmNlTXV0ZT86Ym9vbGVhbixcbiAgICBpc0luZHVzdHJ5SWNvblNob3c/OmJvb2xlYW5cbn1cbmV4cG9ydCBpbnRlcmZhY2UgVmFzdFNka0NvbmZpZ3VyYXRpb257XG4gICAgaHR0cENhbGxUaW1lb3V0TXM6bnVtYmVyLFxuICAgIGh0dHBDb25uZWN0VGltZW91dE1zOm51bWJlcixcbiAgICBodHRwS2VlcEFsaXZlRHVyYXRpb25NczpudW1iZXIsXG4gICAgaHR0cFJlYWRUaW1lb3V0TXM6bnVtYmVyLFxuICAgIG1heEh0dHBDb25uZWN0aW9uczpudW1iZXIsXG4gICAgbWF4UmVkaXJlY3RXcmFwcGVyTGltaXQ6bnVtYmVyLFxuICAgIGlzVGVzdDpib29sZWFuLFxuICAgIHZhc3RFdmVudFJldHJ5QmF0Y2hTaXplOm51bWJlcixcbiAgICB2YXN0RXZlbnRSZXRyeUludGVydmFsU2Vjb25kczpudW1iZXIsXG4gICAgdmFzdEV2ZW50UmV0cnlVcGxvYWRUaW1lczpudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZHZlcnRpc2VySW5mb3tcbiAgICBzZXE6bnVtYmVyLFxuICAgIGtleTpzdHJpbmcsXG4gICAgdmFsdWU6c3RyaW5nXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBNb2R1bGVzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogXCJITVNBZHNcIixcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc1wiLFxuICAgIHBsdWdpblJlZjogXCJITVNBZHNcIixcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU0FkcyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgICBAQ29yZG92YVByb3BlcnR5KCkgSE1TSW50ZXJzdGl0aWFsQWQgPSBITVNJbnRlcnN0aXRpYWxBZDtcbiAgICBAQ29yZG92YVByb3BlcnR5KCkgSE1TQmFubmVyQWQgPSBITVNCYW5uZXJBZDtcbiAgICBAQ29yZG92YVByb3BlcnR5KCkgSE1TU3BsYXNoQWQgPSBITVNTcGxhc2hBZDtcbiAgICBAQ29yZG92YVByb3BlcnR5KCkgSE1TUmV3YXJkQWQgPSBITVNSZXdhcmRBZDtcbiAgICBAQ29yZG92YVByb3BlcnR5KCkgSE1TTmF0aXZlQWQgPSBITVNOYXRpdmVBZDtcbiAgICBAQ29yZG92YVByb3BlcnR5KCkgSE1TUm9sbEFkID0gSE1TUm9sbEFkO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKSBITVNWYXN0ID0gSE1TVmFzdDtcblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgb24oZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRTREtWZXJzaW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRSZXF1ZXN0T3B0aW9ucygpOiBQcm9taXNlPEhNU1JlcXVlc3RPcHRpb25zPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRSZXF1ZXN0T3B0aW9ucyhyZXF1ZXN0T3B0aW9uczogSE1TUmVxdWVzdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldENvbnNlbnQoY29uc2VudDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRBcHBBY3RpdmF0ZVN0eWxlKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRBcHBBY3RpdmF0ZVN0eWxlKHN0eWxlOm51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QXBwSW5zdGFsbGVkTm90aWZ5KHN0YXR1czpib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0FwcEluc3RhbGxlZE5vdGlmeSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGVuYWJsZUxvZ2dlcigpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgYWRkVGVzdERldmljZUlkKHRlc3REZXZpY2VJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRUZXN0RGV2aWNlSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldFVuZGVyQWdlT2ZQcm9taXNlKHVuZGVyQWdlT2ZQcm9taXNlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRDb25zZW50U3RhdHVzKGNvbnNlbnRTdGF0dXM6IENvbnNlbnRTdGF0dXMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldERlYnVnTmVlZENvbnNlbnQoZGVidWdOZWVkQ29uc2VudDogRGVidWdOZWVkQ29uc2VudCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZXF1ZXN0Q29uc2VudFVwZGF0ZSgpOiBQcm9taXNlPENvbnNlbnRVcGRhdGVSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHZlcmlmeUFkSWQoYWRJZDogc3RyaW5nLCBpc0xpbWl0QWRUcmFja2luZzogYm9vbGVhbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0QWR2ZXJ0aXNpbmdJZEluZm8oKTogUHJvbWlzZTxPYWlkUmVzdWx0PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZWZlcnJlckNsaWVudFN0YXJ0Q29ubmVjdGlvbihpc1Rlc3Q/OiBib29sZWFuKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHJlZmVycmVyQ2xpZW50RW5kQ29ubmVjdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHJlZmVycmVyQ2xpZW50SXNSZWFkeSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEluc3RhbGxSZWZlcnJlcihpbnN0YWxsQ2hhbm5lbD86c3RyaW5nKTogUHJvbWlzZTxSZWZlcnJlckRldGFpbHM+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGluaXRWYXN0KHZhc3RTZGtDb25maWd1cmF0aW9uOlZhc3RTZGtDb25maWd1cmF0aW9uKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRWYXN0U2RrQ29uZmlndXJhdGlvbigpOiBQcm9taXNlPFZhc3RTZGtDb25maWd1cmF0aW9uPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICB1cGRhdGVTZGtTZXJ2ZXJDb25maWcoc2xvdElkOnN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgdXNlckFjY2VwdEFkTGljZW5zZShpc0FjY2VwdExpY2Vuc2U6Ym9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0RXZlbnRQcm9jZXNzb3IoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6IFwiSE1TQWRzXCIsXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1hZHNcIixcbiAgICBwbHVnaW5SZWY6IFwiSE1TQWRzLkhNU0Jhbm5lckFkXCIsXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNCYW5uZXJBZCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIG9uKGV2ZW50TmFtZTogQmFubmVyQWRFdmVudHMsIGNhbGxiYWNrOiAocmVzdWx0PzogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBhc3luYyBjcmVhdGUoZGl2SWQ6IHN0cmluZywgYm91bmRzPzogTGF5b3V0Qm91bmRzKTogUHJvbWlzZTxITVNCYW5uZXJBZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2Nyb2xsKCk6IHZvaWQge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0QWRJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QWRJZChhZElkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEJhbm5lckFkU2l6ZSgpOiBQcm9taXNlPEFkU2l6ZT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QmFubmVyQWRTaXplKGJhbm5lckFkU2l6ZTogQmFubmVyQWRTaXplIHwgQWRTaXplKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRCYWNrZ3JvdW5kQ29sb3IoYmdDb2xvcjogQ29sb3IpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEJhbm5lclJlZnJlc2goYmFubmVyUmVmcmVzaDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRBZExpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNMb2FkaW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgbG9hZEFkKGFkUGFyYW0/OiBBZFBhcmFtKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBwYXVzZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHJlc3VtZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGRlc3Ryb3koKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRIZWlnaHQoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEhlaWdodFB4KCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRXaWR0aCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0V2lkdGhQeCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNBdXRvSGVpZ2h0U2l6ZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzRHluYW1pY1NpemUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0Z1bGxXaWR0aFNpemUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRDdXJyZW50RGlyZWN0aW9uQmFubmVyU2l6ZSh3aWR0aDogbnVtYmVyKTogUHJvbWlzZTxBZFNpemU+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldExhbmRzY2FwZUJhbm5lclNpemUod2lkdGg6IG51bWJlcik6IFByb21pc2U8QWRTaXplPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRQb3J0cmFpdEJhbm5lclNpemUod2lkdGg6IG51bWJlcik6IFByb21pc2U8QWRTaXplPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6IFwiSE1TQWRzXCIsXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1hZHNcIixcbiAgICBwbHVnaW5SZWY6IFwiSE1TQWRzLkhNU0ludGVyc3RpdGlhbEFkXCIsXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNJbnRlcnN0aXRpYWxBZCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIG9uKFxuICAgICAgICBldmVudE5hbWU6IEludGVyc3RpdGlhbEFkRXZlbnRzLFxuICAgICAgICBjYWxsYmFjazogKHJlc3VsdD86IGFueSkgPT4gdm9pZFxuICAgICk6IHZvaWQge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgYXN5bmMgY3JlYXRlKHVzZUFjdGl2aXR5OiBib29sZWFuKTogUHJvbWlzZTxITVNJbnRlcnN0aXRpYWxBZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2Nyb2xsKCk6IHZvaWQge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2hvdygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzTG9hZGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNMb2FkaW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgbG9hZEFkKGFkUGFyYW0/OiBBZFBhcmFtKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRBZElkKGFkSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0QWRJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QWRMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldFJld2FyZEFkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICB2aWRlb09wZXJhdG9yR2V0QXNwZWN0UmF0aW8oKTogUHJvbWlzZTxWaWRlb09wZXJhdG9yQXNwZWN0UmF0aW8+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHZpZGVvT3BlcmF0b3JIYXNWaWRlbygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHZpZGVvT3BlcmF0b3JJc0N1c3RvbWl6ZU9wZXJhdGVFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgdmlkZW9PcGVyYXRvcklzTXV0ZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICB2aWRlb09wZXJhdG9yTXV0ZShtdXRlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICB2aWRlb09wZXJhdG9yUGF1c2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICB2aWRlb09wZXJhdG9yUGxheSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHZpZGVvT3BlcmF0b3JTdG9wKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0Fkc1wiLFxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzXCIsXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkcy5ITVNOYXRpdmVBZFwiLFxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TTmF0aXZlQWQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBvbihldmVudE5hbWU6IE5hdGl2ZUFkRXZlbnRzLCBjYWxsYmFjazogKHJlc3VsdD86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgYXN5bmMgY3JlYXRlKFxuICAgICAgICBvcHRpb25zOiBOYXRpdmVBZE9wdGlvbnMsXG4gICAgICAgIGJvdW5kcz86IExheW91dEJvdW5kc1xuICAgICk6IFByb21pc2U8SE1TTmF0aXZlQWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGxvYWRBZChvcHRpb25zPzogTmF0aXZlQWRMb2FkT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2hvdygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzTG9hZGluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGRlc3Ryb3koKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBkaXNsaWtlQWQoZGlzbGlrZVJlYXNvbjogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRBbGxvd0N1c3RvbUNsaWNrKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0QWRTb3VyY2UoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldERlc2NyaXB0aW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRDYWxsVG9BY3Rpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldERpc2xpa2VBZFJlYXNvbnMoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNDdXN0b21DbGlja0FsbG93ZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0N1c3RvbURpc2xpa2VUaGlzQWRFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcmVjb3JkQ2xpY2tFdmVudCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHJlY29yZEltcHJlc3Npb25FdmVudChpbXByZXNzaW9uRGF0YTogYW55KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRVbmlxdWVJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0RGlzbGlrZUFkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnb3RvV2h5VGhpc0FkUGFnZSh1c2VWaWV3OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRBZFNpZ24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldFRpdGxlKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRXaHlUaGlzQWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHJlY29yZFNob3dTdGFydEV2ZW50KHNob3dTdGFydERhdGE6IGFueSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgb25BZENsb3NlKGtleXdvcmRzOiBzdHJpbmdbXSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0TmF0aXZlQWRDb25maWd1cmF0aW9uKCk6IFByb21pc2U8TmF0aXZlQWRDb25maWd1cmF0aW9uPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRPbkRvd25sb2FkU3RhdHVzQ2hhbmdlZExpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0T25Ob25XaWZpRG93bmxvYWRMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldFNob3dQZXJtaXNzaW9uRGlhbG9nKHNob3c6Ym9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QWxsb3dlZE5vbldpZmlOZXR3b3JrKGFsbG93ZWQ6Ym9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgY2FuY2VsKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgY29udGludWVEb3dubG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNob3dBZHZlcnRpc2VySW5mb0RpYWxvZygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGhpZGVBZHZlcnRpc2VySW5mb0RpYWxvZygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGhhc0FkdmVydGlzZXJJbmZvKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0QWR2ZXJ0aXNlckluZm8oKTogUHJvbWlzZTxBZHZlcnRpc2VySW5mb1tdPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzaG93QXBwRGV0YWlsUGFnZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzVHJhbnNwYXJlbmN5T3BlbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldFRyYW5zcGFyZW5jeVRwbFVybCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0Fkc1wiLFxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzXCIsXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkcy5ITVNSZXdhcmRBZFwiLFxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TUmV3YXJkQWQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBvbihldmVudE5hbWU6IFJld2FyZEFkRXZlbnRzLCBjYWxsYmFjazogKHJlc3VsdD86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgYXN5bmMgY3JlYXRlKGFkSWQ6IHN0cmluZyk6IFByb21pc2U8SE1TUmV3YXJkQWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNob3codXNlQWN0aXZpdHk6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHJlc3VtZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHBhdXNlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGxvYWRBZFdpdGhBZElkKGFkSWQ6c3RyaW5nLGFkUGFyYW0/OkFkUGFyYW0pOiBQcm9taXNlPHZvaWQ+e1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGxvYWRBZChhZFBhcmFtPzogQWRQYXJhbSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNMb2FkZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXREYXRhKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRVc2VySWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldFJld2FyZCgpOiBQcm9taXNlPEhNU1Jld2FyZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0RGF0YShkYXRhOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEltbWVyc2l2ZShpbW1lcnNpdmU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldFVzZXJJZCh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0UmV3YXJkVmVyaWZ5Q29uZmlnKGNvbmZpZzogSE1TUmV3YXJkVmVyaWZ5Q29uZmlnKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRSZXdhcmRWZXJpZnlDb25maWcoKTogUHJvbWlzZTxITVNSZXdhcmRWZXJpZnlDb25maWc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldE9uTWV0YWRhdGFDaGFuZ2VkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRSZXdhcmRBZExpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0TW9iaWxlRGF0YUFsZXJ0U3dpdGNoKGFsZXJ0U3dpdGNoOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6IFwiSE1TQWRzXCIsXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1hZHNcIixcbiAgICBwbHVnaW5SZWY6IFwiSE1TQWRzLkhNU1JvbGxBZFwiLFxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TUm9sbEFkIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgb24oZXZlbnROYW1lOiBSb2xsQWRFdmVudHMsIGNhbGxiYWNrOiAocmVzdWx0PzogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBhc3luYyBjcmVhdGUoXG4gICAgICAgIHBhcmFtczogUm9sbEFkTG9hZGVyUGFyYW1zLFxuICAgICAgICBkaXZJZDogc3RyaW5nLFxuICAgICAgICBib3VuZHM/OiBMYXlvdXRCb3VuZHNcbiAgICApOiBQcm9taXNlPEhNU1JvbGxBZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2Nyb2xsKCk6IHZvaWQge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgbG9hZEFkKG9wdGlvbnM6IFJvbGxBZExvYWRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0xvYWRpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcGF1c2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc1BsYXlpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBtdXRlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgdW5tdXRlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgb25DbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHBsYXkoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzdG9wKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcmVtb3ZlSW5zdHJlYW1NZWRpYUNoYW5nZUxpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcmVtb3ZlTWVkaWFNdXRlTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZW1vdmVJbnN0cmVhbU1lZGlhU3RhdGVMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEluc3RyZWFtQWRzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0SW5zdHJlYW1NZWRpYUNoYW5nZUxpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0TWVkaWFNdXRlTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRJbnN0cmVhbU1lZGlhU3RhdGVMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldE9uSW5zdHJlYW1BZENsaWNrTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRBZFNvdXJjZSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0RHVyYXRpb24oKTogUHJvbWlzZTxEdXJhdGlvbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0V2h5VGhpc0FkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRBZFNpZ24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzQ2xpY2tlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzRXhwaXJlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzSW1hZ2VBZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzU2hvd24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc1ZpZGVvQWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRDYWxsVG9BY3Rpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNob3dBZHZlcnRpc2VySW5mb0RpYWxvZygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGhpZGVBZHZlcnRpc2VySW5mb0RpYWxvZygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGhhc0FkdmVydGlzZXJJbmZvKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0QWR2ZXJ0aXNlckluZm8oKTogUHJvbWlzZTxBZHZlcnRpc2VySW5mb1tdPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc1RyYW5zcGFyZW5jeU9wZW4oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRUcmFuc3BhcmVuY3lUcGxVcmwoKTogUHJvbWlzZTxTdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNob3dUcmFuc3BhcmVuY3lEaWFsb2coKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBoaWRlVHJhbnNwYXJlbmN5RGlhbG9nKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0Fkc1wiLFxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzXCIsXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkcy5ITVNTcGxhc2hBZFwiLFxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TU3BsYXNoQWQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBvbihldmVudE5hbWU6IFNwbGFzaEFkRXZlbnRzLCBjYWxsYmFjazogKHJlc3VsdD86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgYXN5bmMgY3JlYXRlKCk6IFByb21pc2U8SE1TU3BsYXNoQWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldExvZ28oZmlsZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRXaWRlU2xvZ2FuUmVzSWQod2lkZVNsb2dhblJlc0lkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldFNsb2dhblJlc0lkKHNsb2dhblJlc0lkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGxvYWQob3B0aW9uczogU3BsYXNoQWRMb2FkT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcHJlbG9hZEFkKG9wdGlvbnM6IFNwbGFzaEFkTG9hZE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGRlc3Ryb3lWaWV3KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcGF1c2VWaWV3KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcmVzdW1lVmlldygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzTG9hZGluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzTG9hZGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QWREaXNwbGF5TGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRBdWRpb0ZvY3VzVHlwZShhdWRpb0ZvY3VzVHlwZTogQXVkaW9Gb2N1c1R5cGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogXCJITVNBZHNcIixcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc1wiLFxuICAgIHBsdWdpblJlZjogXCJITVNBZHMuSE1TVmFzdFwiLFxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TVmFzdCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIG9uKGV2ZW50TmFtZTogVmFzdEV2ZW50cywgY2FsbGJhY2s6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGFzeW5jIGNyZWF0ZShcbiAgICAgICAgZGl2SWQ6IHN0cmluZyxcbiAgICAgICAgYm91bmRzPzogTGF5b3V0Qm91bmRzXG4gICAgKTogUHJvbWlzZTxITVNWYXN0PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzY3JvbGwoKTogdm9pZCB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBsb2FkQWQob3B0aW9uczogVmFzdExvYWRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZXN1bWUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBwYXVzZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHJlbGVhc2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICB0b2dnbGVNdXRlU3RhdGUoaXNNdXRlOmJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc3RhcnRPclBhdXNlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG59ICAgIFxuIl19