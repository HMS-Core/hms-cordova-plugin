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
    HMSAds.prototype.getInstallReferrer = function (reqOpt) { return cordova(this, "getInstallReferrer", { "otherPromise": true }, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7O0FBRUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHNFQUtOLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsK0RBQStEO0FBQy9ELFlBQVk7QUFDWiwrREFBK0Q7QUFFL0QsTUFBTSxDQUFOLElBQVksaUJBVVg7QUFWRCxXQUFZLGlCQUFpQjtJQUN6Qiw2RUFBa0IsQ0FBQTtJQUNsQixpR0FBNEIsQ0FBQTtJQUM1Qiw2RkFBMEIsQ0FBQTtJQUMxQiw2RUFBa0IsQ0FBQTtJQUNsQix1RkFBdUIsQ0FBQTtJQUN2QixpRkFBb0IsQ0FBQTtJQUNwQixtR0FBNkIsQ0FBQTtJQUM3QixtR0FBNkIsQ0FBQTtJQUM3QixpSEFBb0MsQ0FBQTtBQUN4QyxDQUFDLEVBVlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQVU1QjtBQUNELE1BQU0sQ0FBTixJQUFZLHdCQUtYO0FBTEQsV0FBWSx3QkFBd0I7SUFDaEMsaUhBQTZCLENBQUE7SUFDN0IsNkdBQTJCLENBQUE7SUFDM0IscUhBQStCLENBQUE7SUFDL0IscUhBQStCLENBQUE7QUFDbkMsQ0FBQyxFQUxXLHdCQUF3QixLQUF4Qix3QkFBd0IsUUFLbkM7QUFDRCxNQUFNLENBQU4sSUFBWSx1QkFNWDtBQU5ELFdBQVksdUJBQXVCO0lBQy9CLDREQUFpQyxDQUFBO0lBQ2pDLDhEQUFtQyxDQUFBO0lBQ25DLGlFQUFzQyxDQUFBO0lBQ3RDLDREQUFpQyxDQUFBO0lBQ2pDLDREQUFpQyxDQUFBO0FBQ3JDLENBQUMsRUFOVyx1QkFBdUIsS0FBdkIsdUJBQXVCLFFBTWxDO0FBQ0QsTUFBTSxDQUFOLElBQVksTUFJWDtBQUpELFdBQVksTUFBTTtJ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O0lBRTFDLG9CQUFFLGFBQUMsU0FBcUIsRUFBRSxRQUFnQztJQUlwRCx3QkFBTSxhQUNSLEtBQWEsRUFDYixNQUFxQjtJQUt6Qix3QkFBTTtJQUlOLHdCQUFNLGFBQUMsT0FBd0I7SUFJL0Isd0JBQU07SUFJTix1QkFBSztJQUlMLHlCQUFPO0lBSVAsaUNBQWUsYUFBQyxNQUFjO0lBSzlCLDhCQUFZOzs7Ozs7O2dCQXZDZixVQUFVOztrQkE3dkNYO0VBOHZDNkIsaUJBQWlCO1NBQWpDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIENvcHlyaWdodCAyMDIwLTIwMjIuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5cbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICAgIFBsdWdpbixcbiAgICBDb3Jkb3ZhLFxuICAgIENvcmRvdmFQcm9wZXJ0eSxcbiAgICBJb25pY05hdGl2ZVBsdWdpbixcbn0gZnJvbSBcIkBpb25pYy1uYXRpdmUvY29yZVwiO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIENvbnN0YW50c1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBlbnVtIEFkUGFyYW1FcnJvckNvZGVzIHtcbiAgICBBRF9QQVJBTV9JTk5FUiA9IDAsXG4gICAgQURfUEFSQU1fSU5WQUxJRF9SRVFVRVNUID0gMSxcbiAgICBBRF9QQVJBTV9ORVRXT1JLX0VSUk9SID0gMixcbiAgICBBRF9QQVJBTV9OT19BRCA9IDMsXG4gICAgQURfUEFSQU1fQURfTE9BRElORyA9IDQsXG4gICAgQURfUEFSQU1fTE9XX0FQSSA9IDUsXG4gICAgQURfUEFSQU1fQkFOTkVSX0FEX0VYUElSRSA9IDYsXG4gICAgQURfUEFSQU1fQkFOTkVSX0FEX0NBTkNFTCA9IDcsXG4gICAgQURfUEFSQU1fSE1TX05PVF9TVVBQT1JUX1NFVF9BUFAgPSA4LFxufVxuZXhwb3J0IGVudW0gUmV3YXJkQWRTdGF0dXNFcnJvckNvZGVzIHtcbiAgICBSRVdBUkRfQURfU1RBVFVTX0lOVEVSTkFMID0gMCxcbiAgICBSRVdBUkRfQURfU1RBVFVTX1JFVVNFRCA9IDEsXG4gICAgUkVXQVJEX0FEX1NUQVRVU19OT1RfTE9BREVEID0gMixcbiAgICBSRVdBUkRfQURfU1RBVFVTX0JBQ0tHUk9VTkQgPSAzLFxufVxuZXhwb3J0IGVudW0gQWRDb250ZW50Q2xhc3NpZmljYXRpb24ge1xuICAgIEFEX0NPTlRFTlRfQ0xBU1NJRklDQVRJT05fQSA9IFwiQVwiLFxuICAgIEFEX0NPTlRFTlRfQ0xBU1NJRklDQVRJT05fUEkgPSBcIlBJXCIsXG4gICAgQURfQ09OVEVOVF9DTEFTU0lGSUNBVElPTl9VTktOT1dOID0gXCJcIixcbiAgICBBRF9DT05URU5UX0NMQVNTSUZJQ0FUSU9OX0ogPSBcIkpcIixcbiAgICBBRF9DT05URU5UX0NMQVNTSUZJQ0FUSU9OX1cgPSBcIldcIixcbn1cbmV4cG9ydCBlbnVtIEdlbmRlciB7XG4gICAgRkVNQUxFID0gMixcbiAgICBNQUxFID0gMSxcbiAgICBVTktOT1dOID0gMCxcbn1cbmV4cG9ydCBlbnVtIE5vblBlcnNvbmFsaXplZEFkIHtcbiAgICBBTExPV19BTEwgPSAwLFxuICAgIEFMTE9XX05PTl9QRVJTT05BTElaRUQgPSAxLFxufVxuZXhwb3J0IGVudW0gQ2hpbGRQcm90ZWN0aW9uIHtcbiAgICBUQUdfRk9SX0NISUxEX1BST1RFQ1RJT05fVU5TUEVDSUZJRUQgPSAtMSxcbiAgICBUQUdfRk9SX0NISUxEX1BST1RFQ1RJT05fRkFMU0UgPSAwLFxuICAgIFRBR19GT1JfQ0hJTERfUFJPVEVDVElPTl9UUlVFID0gMSxcbn1cbmV4cG9ydCBlbnVtIFVuZGVyQWdlT2ZQcm9taXNlIHtcbiAgICBQUk9NSVNFX1VOU1BFQ0lGSUVEID0gLTEsXG4gICAgUFJPTUlTRV9GQUxTRSA9IDAsXG4gICAgUFJPTUlTRV9UUlVFID0gMSxcbn1cbmV4cG9ydCBlbnVtIEJhbm5lckFkU2l6ZSB7XG4gICAgQkFOTkVSX1NJWkVfMzYwXzU3ID0gXCJCQU5ORVJfU0laRV8zNjBfNTdcIixcbiAgICBCQU5ORVJfU0laRV8zNjBfMTQ0ID0gXCJCQU5ORVJfU0laRV8zNjBfMTQ0XCIsXG4gICAgQkFOTkVSX1NJWkVfMTYwXzYwMCA9IFwiQkFOTkVSX1NJWkVfMTYwXzYwMFwiLFxuICAgIEJBTk5FUl9TSVpFXzMwMF8yNTAgPSBcIkJBTk5FUl9TSVpFXzMwMF8yNTBcIixcbiAgICBCQU5ORVJfU0laRV8zMjBfMTAwID0gXCJCQU5ORVJfU0laRV8zMjBfMTAwXCIsXG4gICAgQkFOTkVSX1NJWkVfMzIwXzUwID0gXCJCQU5ORVJfU0laRV8zMjBfNTBcIixcbiAgICBCQU5ORVJfU0laRV80NjhfNjAgPSBcIkJBTk5FUl9TSVpFXzQ2OF82MFwiLFxuICAgIEJBTk5FUl9TSVpFXzcyOF85MCA9IFwiQkFOTkVSX1NJWkVfNzI4XzkwXCIsXG4gICAgQkFOTkVSX1NJWkVfRFlOQU1JQyA9IFwiQkFOTkVSX1NJWkVfRFlOQU1JQ1wiLFxuICAgIEJBTk5FUl9TSVpFX0lOVkFMSUQgPSBcIkJBTk5FUl9TSVpFX0lOVkFMSURcIixcbiAgICBCQU5ORVJfU0laRV9TTUFSVCA9IFwiQkFOTkVSX1NJWkVfU01BUlRcIixcbiAgICBCQU5ORVJfU0laRV9BRFZBTkNFRCA9IFwiQkFOTkVSX1NJWkVfQURWQU5DRURcIixcbn1cbmV4cG9ydCBlbnVtIEhNU1NjcmVlbk9yaWVudGF0aW9uIHtcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fTEFORFNDQVBFID0gMCxcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fVU5TUEVDSUZJRUQgPSAtMSxcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fUE9SVFJBSVQgPSAxLFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9VU0VSID0gMixcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fQkVISU5EID0gMyxcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fU0VOU09SID0gNCxcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fTk9TRU5TT1IgPSA1LFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9TRU5TT1JfTEFORFNDQVBFID0gNixcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fU0VOU09SX1BPUlRSQUlUID0gNyxcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fUkVWRVJTRV9MQU5EU0NBUEUgPSA4LFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9SRVZFUlNFX1BPUlRSQUlUID0gOSxcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fRlVMTF9TRU5TT1IgPSAxMCxcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fVVNFUl9MQU5EU0NBUEUgPSAxMSxcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fVVNFUl9QT1JUUkFJVCA9IDEyLFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9GVUxMX1VTRVIgPSAxMyxcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fTE9DS0VEID0gMTQsXG59XG5leHBvcnQgZW51bSBEZWJ1Z05lZWRDb25zZW50IHtcbiAgICBDT05TRU5UX0RFQlVHX0RJU0FCTEVEID0gMCxcbiAgICBDT05TRU5UX0RFQlVHX05FRURfQ09OU0VOVCA9IDEsXG4gICAgQ09OU0VOVF9ERUJVR19OT1RfTkVFRF9DT05TRU5UID0gMixcbn1cbmV4cG9ydCBlbnVtIENvbnNlbnRTdGF0dXMge1xuICAgIENPTlNFTlRfUEVSU09OQUxJWkVEID0gMCxcbiAgICBDT05TRU5UX05PTl9QRVJTT05BTElaRUQgPSAxLFxuICAgIENPTlNFTlRfVU5LTk9XTiA9IDIsXG59XG5leHBvcnQgZW51bSBBdWRpb0ZvY3VzVHlwZSB7XG4gICAgR0FJTl9BVURJT19GT0NVU19BTEwgPSAwLFxuICAgIE5PVF9HQUlOX0FVRElPX0ZPQ1VTX1dIRU5fTVVURSA9IDEsXG4gICAgTk9UX0dBSU5fQVVESU9fRk9DVVNfQUxMID0gMixcbn1cbmV4cG9ydCBlbnVtIE1lZGlhQXNwZWN0IHtcbiAgICBBU1BFQ1RfQU5ZID0gMSxcbiAgICBBU1BFQ1RfQ1VTVE9NX1NJWkUgPSAtMSxcbiAgICBBU1BFQ1RfTEFORFNDQVBFID0gMixcbiAgICBBU1BFQ1RfUE9SVFJBSVQgPSAzLFxuICAgIEFTUEVDVF9TUVVBUkUgPSA0LFxuICAgIEFTUEVDVF9VTktOT1dOID0gMCxcbn1cbmV4cG9ydCBlbnVtIENob2ljZXNQb3NpdGlvbiB7XG4gICAgQk9UVE9NX0xFRlQgPSAzLFxuICAgIEJPVFRPTV9SSUdIVCA9IDIsXG4gICAgSU5WSVNJQkxFID0gNCxcbiAgICBUT1BfTEVGVCA9IDAsXG4gICAgVE9QX1JJR0hUID0gMSxcbn1cbmV4cG9ydCBlbnVtIE1lZGlhRGlyZWN0aW9uIHtcbiAgICBBTlkgPSAwLFxuICAgIExBTkRTQ0FQRSA9IDIsXG4gICAgUE9SVFJBSVQgPSAxLFxufVxuZXhwb3J0IGVudW0gTmF0aXZlQWRUZW1wbGF0ZSB7XG4gICAgTkFUSVZFX0FEX1NNQUxMX1RFTVBMQVRFID0gXCJOQVRJVkVfQURfU01BTExfVEVNUExBVEVcIixcbiAgICBOQVRJVkVfQURfRlVMTF9URU1QTEFURSA9IFwiTkFUSVZFX0FEX0ZVTExfVEVNUExBVEVcIixcbiAgICBOQVRJVkVfQURfQkFOTkVSX1RFTVBMQVRFID0gXCJOQVRJVkVfQURfQkFOTkVSX1RFTVBMQVRFXCIsXG4gICAgTkFUSVZFX0FEX1ZJREVPX1RFTVBMQVRFID0gXCJOQVRJVkVfQURfVklERU9fVEVNUExBVEVcIixcbiAgICBOQVRJVkVfQURfV0lUSF9BUFBfRE9XTkxPQURfQlROX1RFTVBMQVRFID0gXCJOQVRJVkVfQURfV0lUSF9BUFBfRE9XTkxPQURfQlROX1RFTVBMQVRFXCJcbn1cbmV4cG9ydCBlbnVtIENvbG9yIHtcbiAgICBSRUQgPSBcIlJFRFwiLFxuICAgIERLR1JBWSA9IFwiREtHUkFZXCIsXG4gICAgR1JBWSA9IFwiR1JBWVwiLFxuICAgIFdISVRFID0gXCJXSElURVwiLFxuICAgIEJMVUUgPSBcIkJMVUVcIixcbiAgICBCTEFDSyA9IFwiQkxBQ0tcIixcbiAgICBMVEdSQVkgPSBcIkxUR1JBWVwiLFxuICAgIE1BR0VOVEEgPSBcIk1BR0VOVEFcIixcbiAgICBZRUxMT1cgPSBcIllFTExPV1wiLFxuICAgIENZQU4gPSBcIkNZQU5cIixcbiAgICBHUkVFTiA9IFwiR1JFRU5cIixcbiAgICBUUkFOU1BBUkVOVCA9IFwiVFJBTlNQQVJFTlRcIixcbn1cbmV4cG9ydCBlbnVtIEluc3RhbGxSZWZlcnJlclJlc3BvbnNlcyB7XG4gICAgU0VSVklDRV9ESVNDT05ORUNURUQgPSAtMSxcbiAgICBERVZFTE9QRVJfRVJST1IgPSAzLFxuICAgIFNFUlZJQ0VfVU5BVkFJTEFCTEUgPSAxLFxuICAgIE9LID0gMCxcbiAgICBGRUFUVVJFX05PVF9TVVBQT1JURUQgPSAyLFxufVxuZXhwb3J0IGVudW0gQW5jaG9yIHtcbiAgICBUT1AgPSBcInRvcFwiLFxuICAgIEJPVFRPTSA9IFwiYm90dG9tXCIsXG4gICAgSU5WSVNJQkxFID0gXCJpbnZpc2libGVcIixcbn1cbmV4cG9ydCBlbnVtIEJhbm5lckFkRXZlbnRzIHtcbiAgICBCQU5ORVJfQURfQ0xPU0VEID0gXCJiYW5uZXJfYWRfY2xvc2VkXCIsXG4gICAgQkFOTkVSX0FEX0ZBSUxFRCA9IFwiYmFubmVyX2FkX2ZhaWxlZFwiLFxuICAgIEJBTk5FUl9BRF9MRUFWRSA9IFwiYmFubmVyX2FkX2xlYXZlXCIsXG4gICAgQkFOTkVSX0FEX09QRU5FRCA9IFwiYmFubmVyX2FkX29wZW5lZFwiLFxuICAgIEJBTk5FUl9BRF9MT0FERUQgPSBcImJhbm5lcl9hZF9sb2FkZWRcIixcbiAgICBCQU5ORVJfQURfQ0xJQ0tFRCA9IFwiYmFubmVyX2FkX2NsaWNrZWRcIixcbiAgICBCQU5ORVJfQURfSU1QUkVTU0lPTiA9IFwiYmFubmVyX2FkX2ltcHJlc3Npb25cIixcbn1cbmV4cG9ydCBlbnVtIEludGVyc3RpdGlhbEFkRXZlbnRzIHtcbiAgICBJTlRFUlNUSVRJQUxfQURfQ0xPU0VEID0gXCJpbnRlcnN0aXRpYWxfYWRfY2xvc2VkXCIsXG4gICAgSU5URVJTVElUSUFMX0FEX0ZBSUxFRCA9IFwiaW50ZXJzdGl0aWFsX2FkX2ZhaWxlZFwiLFxuICAgIElOVEVSU1RJVElBTF9BRF9MRUFWRSA9IFwiaW50ZXJzdGl0aWFsX2FkX2xlYXZlXCIsXG4gICAgSU5URVJTVElUSUFMX0FEX09QRU5FRCA9IFwiaW50ZXJzdGl0aWFsX2FkX29wZW5lZFwiLFxuICAgIElOVEVSU1RJVElBTF9BRF9MT0FERUQgPSBcImludGVyc3RpdGlhbF9hZF9sb2FkZWRcIixcbiAgICBJTlRFUlNUSVRJQUxfQURfQ0xJQ0tFRCA9IFwiaW50ZXJzdGl0aWFsX2FkX2NsaWNrZWRcIixcbiAgICBJTlRFUlNUSVRJQUxfQURfSU1QUkVTU0lPTiA9IFwiaW50ZXJzdGl0aWFsX2FkX2ltcHJlc3Npb25cIixcbiAgICBJTlRFUlNUSVRJQUxfQURfUkVXQVJERUQgPSBcImludGVyc3RpdGlhbF9hZF9yZXdhcmRlZFwiLFxuICAgIElOVEVSU1RJVElBTF9SRVdBUkRfQURfQ0xPU0VEID0gXCJpbnRlcnN0aXRpYWxfcmV3YXJkX2FkX2Nsb3NlZFwiLFxuICAgIElOVEVSU1RJVElBTF9SRVdBUkRfQURfRkFJTEVEX1RPX0xPQUQgPSBcImludGVyc3RpdGlhbF9yZXdhcmRfYWRfZmFpbGVkX3RvX2xvYWRcIixcbiAgICBJTlRFUlNUSVRJQUxfUkVXQVJEX0FEX0xFRlRfQVBQID0gXCJpbnRlcnN0aXRpYWxfcmV3YXJkX2FkX2xlZnRfYXBwXCIsXG4gICAgSU5URVJTVElUSUFMX1JFV0FSRF9BRF9MT0FERUQgPSBcImludGVyc3RpdGlhbF9yZXdhcmRfYWRfbG9hZGVkXCIsXG4gICAgSU5URVJTVElUSUFMX1JFV0FSRF9BRF9PUEVORUQgPSBcImludGVyc3RpdGlhbF9yZXdhcmRfYWRfb3BlbmVkXCIsXG4gICAgSU5URVJTVElUSUFMX1JFV0FSRF9BRF9DT01QTEVURUQgPSBcImludGVyc3RpdGlhbF9yZXdhcmRfYWRfY29tcGxldGVkXCIsXG4gICAgSU5URVJTVElUSUFMX1JFV0FSRF9BRF9TVEFSVEVEID0gXCJpbnRlcnN0aXRpYWxfcmV3YXJkX2FkX3N0YXJ0ZWRcIixcbn1cbmV4cG9ydCBlbnVtIFNwbGFzaEFkRXZlbnRzIHtcbiAgICBTUExBU0hfQURfRkFJTEVEX1RPX0xPQUQgPSBcInNwbGFzaF9hZF9mYWlsZWRfdG9fbG9hZFwiLFxuICAgIFNQTEFTSF9BRF9MT0FERUQgPSBcInNwbGFzaF9hZF9sb2FkZWRcIixcbiAgICBTUExBU0hfQURfRElTTUlTU0VEID0gXCJzcGxhc2hfYWRfZGlzbWlzc2VkXCIsXG4gICAgU1BMQVNIX0FEX1NIT1dFRCA9IFwic3BsYXNoX2FkX3Nob3dlZFwiLFxuICAgIFNQTEFTSF9BRF9DTElDSyA9IFwic3BsYXNoX2FkX2NsaWNrXCIsXG59XG5leHBvcnQgZW51bSBSb2xsQWRFdmVudHMge1xuICAgIFJPTExfQURfTE9BRF9GQUlMRUQgPSBcInJvbGxfYWRfbG9hZF9mYWlsZWRcIixcbiAgICBST0xMX0FEX0xPQURFRCA9IFwicm9sbF9hZF9sb2FkZWRcIixcbiAgICBST0xMX0FEX01FRElBX0NIQU5HRUQgPSBcInJvbGxfYWRfbWVkaWFfY2hhbmdlZFwiLFxuICAgIFJPTExfQURfQ0xJQ0tFRCA9IFwicm9sbF9hZF9jbGlja2VkXCIsXG4gICAgUk9MTF9BRF9NRURJQV9QUk9HUkVTUyA9IFwicm9sbF9hZF9tZWRpYV9wcm9ncmVzc1wiLFxuICAgIFJPTExfQURfTUVESUFfU1RBUlQgPSBcInJvbGxfYWRfbWVkaWFfc3RhcnRcIixcbiAgICBST0xMX0FEX01FRElBX1BBVVNFID0gXCJyb2xsX2FkX21lZGlhX3BhdXNlXCIsXG4gICAgUk9MTF9BRF9NRURJQV9TVE9QID0gXCJyb2xsX2FkX21lZGlhX3N0b3BcIixcbiAgICBST0xMX0FEX01FRElBX0NPTVBMRVRJT04gPSBcInJvbGxfYWRfbWVkaWFfY29tcGxldGlvblwiLFxuICAgIFJPTExfQURfTUVESUFfRVJST1IgPSBcInJvbGxfYWRfbWVkaWFfZXJyb3JcIixcbiAgICBST0xMX0FEX01FRElBX1VOTVVURSA9IFwicm9sbF9hZF9tZWRpYV91bm11dGVcIixcbiAgICBST0xMX0FEX01FRElBX01VVEUgPSBcInJvbGxfYWRfbWVkaWFfbXV0ZVwiLFxuICAgIFJPTExfQURfV0hZX1RISVNfQUQgPSBcInJvbGxfYWRfd2h5X3RoaXNfYWRcIixcbn1cbmV4cG9ydCBlbnVtIFJld2FyZEFkRXZlbnRzIHtcbiAgICBSRVdBUkRfTUVUQURBVEFfQ0hBTkdFRCA9IFwicmV3YXJkX21ldGFkYXRhX2NoYW5nZWRcIixcbiAgICBSRVdBUkRfQURfRkFJTEVEX1RPX0xPQURfTE9BRCA9IFwicmV3YXJkX2FkX2ZhaWxlZF90b19sb2FkX2xvYWRcIixcbiAgICBSRVdBUkRFRF9MT0FERUQgPSBcInJld2FyZGVkX2xvYWRlZFwiLFxuICAgIFJFV0FSREVEX1NUQVRVUyA9IFwicmV3YXJkZWRfc3RhdHVzXCIsXG4gICAgUkVXQVJEX0FEX0NMT1NFRF9TVEFUVVMgPSBcInJld2FyZF9hZF9jbG9zZWRfc3RhdHVzXCIsXG4gICAgUkVXQVJEX0FEX09QRU5FRF9TVEFUVVMgPSBcInJld2FyZF9hZF9vcGVuZWRfc3RhdHVzXCIsXG4gICAgUkVXQVJEX0FEX0ZBSUxFRF9UT19TSE9XID0gXCJyZXdhcmRfYWRfZmFpbGVkX3RvX3Nob3dcIixcbiAgICBSRVdBUkRFRCA9IFwicmV3YXJkZWRcIixcbiAgICBSRVdBUkRfQURfQ0xPU0VEID0gXCJyZXdhcmRfYWRfY2xvc2VkXCIsXG4gICAgUkVXQVJEX0FEX0ZBSUxFRF9UT19MT0FEID0gXCJyZXdhcmRfYWRfZmFpbGVkX3RvX2xvYWRcIixcbiAgICBSRVdBUkRfQURfTE9BREVEID0gXCJyZXdhcmRfYWRfbG9hZGVkXCIsXG4gICAgUkVXQVJEX0FEX09QRU5FRCA9IFwicmV3YXJkX2FkX29wZW5lZFwiLFxufVxuXG5leHBvcnQgZW51bSBEZXRhaWxlZENyZWF0aXZlVHlwZSB7XG4gIEJJR19JTUcgPSA5MDEsXG4gIFZJREVPID0gOTAzLFxuICBUSFJFRV9JTUcgPSA5MDQsXG4gIFNNQUxMX0lNRyA9IDkwNSxcbiAgU0lOR0xFX0lNRyA9IDkwOSxcbiAgU0hPUlRfVEVYVCA9IDkxMyxcbiAgTE9OR19URVhUID0gOTE0XG59XG5cbmV4cG9ydCBlbnVtIE5hdGl2ZUFkRXZlbnRzIHtcbiAgICBOQVRJVkVfQURfRElTTElLRUQgPSBcIm5hdGl2ZV9hZF9kaXNsaWtlZFwiLFxuICAgIE5BVElWRV9BRF9MT0FERURfTE9BRCA9IFwibmF0aXZlX2FkX2xvYWRlZF9sb2FkXCIsXG4gICAgTkFUSVZFX0FEX0NMT1NFRCA9IFwibmF0aXZlX2FkX2Nsb3NlZFwiLFxuICAgIE5BVElWRV9BRF9GQUlMRUQgPSBcIm5hdGl2ZV9hZF9mYWlsZWRcIixcbiAgICBOQVRJVkVfQURfTEVBVkUgPSBcIm5hdGl2ZV9hZF9sZWF2ZVwiLFxuICAgIE5BVElWRV9BRF9PUEVORUQgPSBcIm5hdGl2ZV9hZF9vcGVuZWRcIixcbiAgICBOQVRJVkVfQURfTE9BREVEID0gXCJuYXRpdmVfYWRfbG9hZGVkXCIsXG4gICAgTkFUSVZFX0FEX0NMSUNLRUQgPSBcIm5hdGl2ZV9hZF9jbGlja2VkXCIsXG4gICAgTkFUSVZFX0FEX0lNUFJFU1NJT04gPSBcIm5hdGl2ZV9hZF9pbXByZXNzaW9uXCIsXG4gICAgVklERU9fT1BFUkFUT1JfVklERU9fU1RBUlQgPSBcInZpZGVvX29wZXJhdG9yX3ZpZGVvX3N0YXJ0XCIsXG4gICAgVklERU9fT1BFUkFUT1JfVklERU9fUExBWSA9IFwidmlkZW9fb3BlcmF0b3JfdmlkZW9fcGxheVwiLFxuICAgIFZJREVPX09QRVJBVE9SX1ZJREVPX1BBVVNFID0gXCJ2aWRlb19vcGVyYXRvcl92aWRlb19wYXVzZVwiLFxuICAgIFZJREVPX09QRVJBVE9SX1ZJREVPX0VORCA9IFwidmlkZW9fb3BlcmF0b3JfdmlkZW9fZW5kXCIsXG4gICAgVklERU9fT1BFUkFUT1JfVklERU9fTVVURSA9IFwidmlkZW9fb3BlcmF0b3JfdmlkZW9fbXV0ZVwiLFxuICAgIEFQUF9ET1dOTE9BRF9TVEFUVVNfQ0hBTkdFRCA9J2FwcF9kb3dubG9hZF9zdGF0dXNfY2hhbmdlZCcsXG4gICAgQVBQX0RPV05MT0FEX05PTl9XSUZJX0RPV05MT0FEID0gJ2FwcF9kb3dubG9hZF9ub25fd2lmaV9kb3dubG9hZCdcbn1cblxuZXhwb3J0IGVudW0gVmFzdEV2ZW50cyB7XG4gICAgVkFTVF9MT0FEX1NVQ0NFU1MgPSAndmFzdF9sb2FkX3N1Y2Nlc3MnLFxuICAgIFZBU1RfTE9BRF9GQUlMRUQgPSAndmFzdF9sb2FkX2ZhaWxlZCcsXG4gICAgVkFTVF9QTEFZX1NUQVRFX0NIQU5HRUQgPSAndmFzdF9wbGF5X3N0YXRlX2NoYW5nZWQnLFxuICAgIFZBU1RfVk9MVU1FX0NIQU5HRUQgPSAndmFzdF92b2x1bWVfY2hhbmdlZCcsXG4gICAgVkFTVF9TQ1JFRU5fVklFV19DSEFOR0VEID0gJ3Zhc3Rfc2NyZWVuX3ZpZXdfY2hhbmdlZCcsXG4gICAgVkFTVF9QUk9HUkVTU19DSEFOR0VEID0gJ3Zhc3RfcHJvZ3Jlc3NfY2hhbmdlZCcsXG4gICAgVkFTVF9PTl9TVUNDRVNTID0gJ3Zhc3Rfb25fc3VjY2VzcycsXG4gICAgVkFTVF9PTl9GQUlMRUQgPSAndmFzdF9vbl9mYWlsZWQnLFxuICAgIFZBU1RfQURfUkVBRFkgPSAndmFzdF9hZF9yZWFkeScsXG4gICAgVkFTVF9BRF9GSU5JU0ggPSAndmFzdF9hZF9maW5pc2gnLFxuICAgIFZBU1RfQlVGRkVSX1NUQVJUPSAndmFzdF9idWZmZXJfc3RhcnQnLFxuICAgIFZBU1RfQlVGRkVSX0VORD0gJ3Zhc3RfYnVmZmVyX2VuZCcsXG59XG5cbmV4cG9ydCBlbnVtIEFjdGl2YXRlU3R5bGUgeyBcdFxuICAgIEJPVFRPTV9CQU5ORVIgPSAxLFxuICAgIENPTkZJUk1fRElBTE9HID0gMlxufVxuZXhwb3J0IGVudW0gQ3JlYXRpdmVNYXRjaFR5cGUge1xuICAgIEVYQUNUID0gMCxcbiAgICBTTUFSVD0gMSxcbiAgICBVTktOT1dOID0gMixcbiAgICBBTlkgPSAzLFxuICAgIExBTkRTQ0FQRSA9IDQsXG4gICAgUE9SVFJBSVQgPSA1LFxuICAgIFNRVUFSRSA9IDZcbiAgXG59XG5leHBvcnQgZW51bSBBcHBEb3dubG9hZFN0YXR1cyB7XG4gICAgRE9XTkxPQUQgPSBcIkRPV05MT0FEXCIsXG4gICAgV0FJVElOR19GT1JfV0lGSSA9IFwiV0FJVElOR19GT1JfV0lGSVwiLFxuICAgIFdBSVRJTkcgPSBcIldBSVRJTkdcIixcbiAgICBET1dOTE9BRElORyA9IFwiRE9XTkxPQURJTkdcIixcbiAgICBQQVVTRSA9IFwiUEFVU0VcIixcbiAgICBSRVNVTUUgPSBcIlJFU1VNRVwiLFxuICAgIERPV05MT0FERUQgPSBcIkRPV05MT0FERURcIixcbiAgICBET1dOTE9BREZBSUxFRCA9IFwiRE9XTkxPQURGQUlMRURcIixcbiAgICBJTlNUQUxMSU5HID0gXCJJTlNUQUxMSU5HXCIsXG4gICAgSU5TVEFMTCA9IFwiSU5TVEFMTFwiLFxuICAgIElOU1RBTExFRCA9IFwiSU5TVEFMTEVEXCJcbiAgfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gSW50ZXJmYWNlc1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0Qm91bmRzIHtcbiAgICBtYXJnaW5MZWZ0PzogbnVtYmVyO1xuICAgIG1hcmdpblJpZ2h0PzogbnVtYmVyO1xuICAgIG1hcmdpblRvcD86IG51bWJlcjtcbiAgICBtYXJnaW5Cb3R0b20/OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgbWFyZ2luTGVmdD86IG51bWJlcjtcbiAgICBtYXJnaW5SaWdodD86IG51bWJlcjtcbiAgICBtYXJnaW5Ub3A/OiBudW1iZXI7XG4gICAgbWFyZ2luQm90dG9tPzogbnVtYmVyO1xuICAgIHBhZ2VYT2Zmc2V0PzogbnVtYmVyO1xuICAgIHBhZ2VZT2Zmc2V0PzogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBBZFBhcmFtIHtcbiAgICBnZW5kZXI/OiBHZW5kZXI7XG4gICAgYWRDb250ZW50Q2xhc3NpZmljYXRpb24/OiBBZENvbnRlbnRDbGFzc2lmaWNhdGlvbjtcbiAgICB0YWdGb3JVbmRlckFnZU9mUHJvbWlzZT86IFVuZGVyQWdlT2ZQcm9taXNlO1xuICAgIHRhZ0ZvckNoaWxkUHJvdGVjdGlvbj86IENoaWxkUHJvdGVjdGlvbjtcbiAgICBub25QZXJzb25hbGl6ZWRBZD86IE5vblBlcnNvbmFsaXplZEFkO1xuICAgIGFwcENvdW50cnk/OiBzdHJpbmc7XG4gICAgYXBwTGFuZz86IHN0cmluZztcbiAgICBjb3VudHJ5Q29kZT86IHN0cmluZztcbiAgICBiZWxvbmdDb3VudHJ5Q29kZT86IHN0cmluZztcbiAgICBjb25zZW50Pzogc3RyaW5nO1xuICAgIHJlcXVlc3RMb2NhdGlvbj86IGJvb2xlYW47XG4gICAgZGV0YWlsZWRDcmVhdGl2ZVR5cGU/OiBEZXRhaWxlZENyZWF0aXZlVHlwZVtdO1xuICAgIGxvY2F0aW9uPyA6TG9jYXRpb24sXG4gICAgY29udGVudEJ1bmRsZT8gOiBDb250ZW50QnVuZGxlLFxufVxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvbiB7XG4gICAgbGF0OiBudW1iZXIsXG4gICAgbG5nOiBudW1iZXJcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29udGVudEJ1bmRsZXtcbiAgICBjaGFubmVsQ2F0ZWdvcnlDb2RlPzogc3RyaW5nLFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIHRhZ3M/OiBzdHJpbmcsXG4gICAgcmVsYXRlZFBlb3BsZT86IHN0cmluZyxcbiAgICBjb250ZW50Pzogc3RyaW5nLFxuICAgIGNvbnRlbnRJRD86IG51bWJlcixcbiAgICBjYXRlZ29yeT86IHN0cmluZyxcbiAgICBzdWJjYXRlZ29yeT86IHN0cmluZyxcbiAgICB0aGlyZENhdGVnb3J5Pzogc3RyaW5nXG59XG5leHBvcnQgaW50ZXJmYWNlIEhNU1JlcXVlc3RPcHRpb25zIHtcbiAgICBhZENvbnRlbnRDbGFzc2lmaWNhdGlvbj86IEFkQ29udGVudENsYXNzaWZpY2F0aW9uO1xuICAgIGFwcExhbmc/OiBzdHJpbmc7XG4gICAgYXBwQ291bnRyeT86IHN0cmluZztcbiAgICB0YWdGb3JDaGlsZFByb3RlY3Rpb24/OiBDaGlsZFByb3RlY3Rpb247XG4gICAgdGFnRm9yVW5kZXJBZ2VPZlByb21pc2U/OiBVbmRlckFnZU9mUHJvbWlzZTtcbiAgICBub25QZXJzb25hbGl6ZWRBZD86IE5vblBlcnNvbmFsaXplZEFkO1xuICAgIGNvbnNlbnQ/OiBzdHJpbmc7XG4gICAgcmVxdWVzdExvY2F0aW9uPzogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSE1TUmV3YXJkIHtcbiAgICByZXdhcmRBbW91bnQ6IG51bWJlcjtcbiAgICByZXdhcmROYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEhNU1Jld2FyZFZlcmlmeUNvbmZpZyB7XG4gICAgZGF0YTogc3RyaW5nO1xuICAgIHVzZXJJZDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBPYWlkUmVzdWx0IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGlzTGltaXRBZFRyYWNpbmdFbmFibGVkOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBEdXJhdGlvbiB7XG4gICAgZHVyYXRpb246IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUm9sbEFkTG9hZGVyUGFyYW1zIHtcbiAgICBhZElkOiBzdHJpbmc7XG4gICAgdG90YWxEdXJhdGlvbjogbnVtYmVyO1xuICAgIG1heENvdW50OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFZpZGVvQ29uZmlndXJhdGlvbiB7XG4gICAgYXVkaW9Gb2N1c1R5cGU/OiBBdWRpb0ZvY3VzVHlwZTtcbiAgICBjbGlja1RvRnVsbFNjcmVlblJlcXVlc3Q/OiBib29sZWFuO1xuICAgIGN1c3RvbWl6ZU9wZXJhdGVSZXF1ZXN0ZWQ/OiBib29sZWFuO1xuICAgIGlzU3RhcnRNdXRlZD86IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIE5hdGl2ZUFkQ29uZmlndXJhdGlvbiB7XG4gICAgYWRTaXplOiBBZFNpemU7XG4gICAgY2hvaWNlc1Bvc2l0aW9uPzogQ2hvaWNlc1Bvc2l0aW9uO1xuICAgIG1lZGlhQXNwZWN0PzogTWVkaWFBc3BlY3Q7XG4gICAgbWVkaWFEaXJlY3Rpb24/OiBNZWRpYURpcmVjdGlvbjtcbiAgICByZXR1cm5VcmxzRm9ySW1hZ2VzPzogYm9vbGVhbjtcbiAgICByZXF1ZXN0Q3VzdG9tRGlzbGlrZVRoaXNBZD86IGJvb2xlYW47XG4gICAgcmVxdWVzdE11bHRpSW1hZ2VzPzogYm9vbGVhbjtcbiAgICB2aWRlb0NvbmZpZ3VyYXRpb24/OiBWaWRlb0NvbmZpZ3VyYXRpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlkZW9PcGVyYXRvckFzcGVjdFJhdGlvIHtcbiAgICB2aWRlb09wZXJhdG9yR2V0QXNwZWN0UmF0aW86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXRpdmVBZExvYWRPcHRpb25zIHtcbiAgICBhZElkPzogc3RyaW5nO1xuICAgIGFkPzogQWRQYXJhbTtcbiAgICBuYXRpdmVBZE9wdGlvbnM/OiBOYXRpdmVBZENvbmZpZ3VyYXRpb247XG59XG5leHBvcnQgaW50ZXJmYWNlIEFkU2l6ZSB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmF0aXZlQWRPcHRpb25zIHtcbiAgICBkaXY6IHN0cmluZztcbiAgICB0ZW1wbGF0ZT86IE5hdGl2ZUFkVGVtcGxhdGU7XG4gICAgYmc/OiBDb2xvcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUm9sbEFkTG9hZE9wdGlvbnMge1xuICAgIGZpbGU/OiBzdHJpbmc7XG4gICAgYWRQYXJhbT86IEFkUGFyYW07XG59XG5leHBvcnQgaW50ZXJmYWNlIFJlZmVycmVyRGV0YWlscyB7XG4gICAgcmVzcG9uc2VDb2RlPzogSW5zdGFsbFJlZmVycmVyUmVzcG9uc2VzO1xuICAgIGluc3RhbGxSZWZlcnJlcj86IHN0cmluZztcbiAgICByZWZlcnJlckNsaWNrVGltZXN0YW1wPzogbnVtYmVyO1xuICAgIGluc3RhbGxCZWdpblRpbWVzdGFtcD86IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc2VudFVwZGF0ZVJlc3VsdCB7XG4gICAgY29uc2VudFN0YXR1cz86IENvbnNlbnRTdGF0dXM7XG4gICAgaXNOZWVkQ29uc2VudD86IGJvb2xlYW47XG4gICAgYWRQcm92aWRlcnM/OiBBZFByb3ZpZGVyW107XG59XG5leHBvcnQgaW50ZXJmYWNlIEFkUHJvdmlkZXIge1xuICAgIGlkPzogc3RyaW5nO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgcHJpdmFjeVBvbGljeVVybD86IHN0cmluZztcbiAgICBzZXJ2aWNlQXJlYT86IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3BsYXNoQWRMb2FkT3B0aW9ucyB7XG4gICAgYWRJZDogc3RyaW5nO1xuICAgIG9yaWVudGF0aW9uPzogSE1TU2NyZWVuT3JpZW50YXRpb247XG4gICAgYWRQYXJhbT86IEFkUGFyYW07XG4gICAgbG9nb0FuY2hvcj86IEFuY2hvcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVmFzdExvYWRPcHRpb25zIHtcbiAgICBhZFBhcmFtPzogVmFzdENvbmZpZ3VyYXRpb24sXG4gICAgcGxheWVyQ29uZmlnPzogUGxheWVyQ29uZmlnLFxuICAgIGlzVGVzdEFkPzogYm9vbGVhbixcbiAgICBpc0FkTG9hZFdpdGhBZHNEYXRhPzogYm9vbGVhbixcbiAgICBpc0N1c3RvbVZpZGVvUGxheWVyPzogYm9vbGVhblxufVxuZXhwb3J0IGludGVyZmFjZSBWYXN0Q29uZmlndXJhdGlvbiB7XG4gICAgYWRJZD86IHN0cmluZyxcbiAgICB0b3RhbER1cmF0aW9uPzogbnVtYmVyLFxuICAgIGNyZWF0aXZlTWF0Y2hTdHJhdGVneT86IENyZWF0aXZlTWF0Y2hUeXBlLFxuICAgIGFsbG93TW9iaWxlVHJhZmZpYz86IGJvb2xlYW4sXG4gICAgYWRPcmllbnRhdGlvbj86TWVkaWFEaXJlY3Rpb24sXG4gICAgbWF4QWRQb2RzPzogbnVtYmVyLFxuICAgIHJlcXVlc3RPcHRpb24/OiBITVNSZXF1ZXN0T3B0aW9uc1xufVxuZXhwb3J0IGludGVyZmFjZSBQbGF5ZXJDb25maWcge1xuICAgIGlzRW5hYmxlQ3V0b3V0PzogYm9vbGVhbixcbiAgICBpc0VuYWJsZVBvcnRyYWl0PzogYm9vbGVhbixcbiAgICBpc0VuYWJsZVJvdGF0aW9uPzogYm9vbGVhbixcbiAgICBpc1NraXBMaW5lYXJBZD86IGJvb2xlYW4sXG4gICAgaXNGb3JjZU11dGU/OmJvb2xlYW4sXG4gICAgaXNJbmR1c3RyeUljb25TaG93Pzpib29sZWFuXG59XG5leHBvcnQgaW50ZXJmYWNlIFZhc3RTZGtDb25maWd1cmF0aW9ue1xuICAgIGh0dHBDYWxsVGltZW91dE1zOm51bWJlcixcbiAgICBodHRwQ29ubmVjdFRpbWVvdXRNczpudW1iZXIsXG4gICAgaHR0cEtlZXBBbGl2ZUR1cmF0aW9uTXM6bnVtYmVyLFxuICAgIGh0dHBSZWFkVGltZW91dE1zOm51bWJlcixcbiAgICBtYXhIdHRwQ29ubmVjdGlvbnM6bnVtYmVyLFxuICAgIG1heFJlZGlyZWN0V3JhcHBlckxpbWl0Om51bWJlcixcbiAgICBpc1Rlc3Q6Ym9vbGVhbixcbiAgICB2YXN0RXZlbnRSZXRyeUJhdGNoU2l6ZTpudW1iZXIsXG4gICAgdmFzdEV2ZW50UmV0cnlJbnRlcnZhbFNlY29uZHM6bnVtYmVyLFxuICAgIHZhc3RFdmVudFJldHJ5VXBsb2FkVGltZXM6bnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5zdGFsbFJlZmVycmVyUmVxe1xuICAgIGluc3RhbGxDaGFubmVsID86IFN0cmluZ1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBNb2R1bGVzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogXCJITVNBZHNcIixcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc1wiLFxuICAgIHBsdWdpblJlZjogXCJITVNBZHNcIixcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU0FkcyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgICBAQ29yZG92YVByb3BlcnR5KCkgSE1TSW50ZXJzdGl0aWFsQWQgPSBITVNJbnRlcnN0aXRpYWxBZDtcbiAgICBAQ29yZG92YVByb3BlcnR5KCkgSE1TQmFubmVyQWQgPSBITVNCYW5uZXJBZDtcbiAgICBAQ29yZG92YVByb3BlcnR5KCkgSE1TU3BsYXNoQWQgPSBITVNTcGxhc2hBZDtcbiAgICBAQ29yZG92YVByb3BlcnR5KCkgSE1TUmV3YXJkQWQgPSBITVNSZXdhcmRBZDtcbiAgICBAQ29yZG92YVByb3BlcnR5KCkgSE1TTmF0aXZlQWQgPSBITVNOYXRpdmVBZDtcbiAgICBAQ29yZG92YVByb3BlcnR5KCkgSE1TUm9sbEFkID0gSE1TUm9sbEFkO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKSBITVNWYXN0ID0gSE1TVmFzdDtcblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgb24oZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRTREtWZXJzaW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRSZXF1ZXN0T3B0aW9ucygpOiBQcm9taXNlPEhNU1JlcXVlc3RPcHRpb25zPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRSZXF1ZXN0T3B0aW9ucyhyZXF1ZXN0T3B0aW9uczogSE1TUmVxdWVzdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldENvbnNlbnQoY29uc2VudDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRBcHBBY3RpdmF0ZVN0eWxlKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRBcHBBY3RpdmF0ZVN0eWxlKHN0eWxlOm51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QXBwSW5zdGFsbGVkTm90aWZ5KHN0YXR1czpib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0FwcEluc3RhbGxlZE5vdGlmeSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGVuYWJsZUxvZ2dlcigpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgYWRkVGVzdERldmljZUlkKHRlc3REZXZpY2VJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRUZXN0RGV2aWNlSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldFVuZGVyQWdlT2ZQcm9taXNlKHVuZGVyQWdlT2ZQcm9taXNlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRDb25zZW50U3RhdHVzKGNvbnNlbnRTdGF0dXM6IENvbnNlbnRTdGF0dXMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldERlYnVnTmVlZENvbnNlbnQoZGVidWdOZWVkQ29uc2VudDogRGVidWdOZWVkQ29uc2VudCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZXF1ZXN0Q29uc2VudFVwZGF0ZSgpOiBQcm9taXNlPENvbnNlbnRVcGRhdGVSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHZlcmlmeUFkSWQoYWRJZDogc3RyaW5nLCBpc0xpbWl0QWRUcmFja2luZzogYm9vbGVhbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0QWR2ZXJ0aXNpbmdJZEluZm8oKTogUHJvbWlzZTxPYWlkUmVzdWx0PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZWZlcnJlckNsaWVudFN0YXJ0Q29ubmVjdGlvbihpc1Rlc3Q/OiBib29sZWFuKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHJlZmVycmVyQ2xpZW50RW5kQ29ubmVjdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHJlZmVycmVyQ2xpZW50SXNSZWFkeSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEluc3RhbGxSZWZlcnJlcihyZXFPcHQ/OiBJbnN0YWxsUmVmZXJyZXJSZXEpOiBQcm9taXNlPFJlZmVycmVyRGV0YWlscz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaW5pdFZhc3QodmFzdFNka0NvbmZpZ3VyYXRpb246VmFzdFNka0NvbmZpZ3VyYXRpb24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldFZhc3RTZGtDb25maWd1cmF0aW9uKCk6IFByb21pc2U8VmFzdFNka0NvbmZpZ3VyYXRpb24+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHVwZGF0ZVNka1NlcnZlckNvbmZpZyhzbG90SWQ6c3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICB1c2VyQWNjZXB0QWRMaWNlbnNlKGlzQWNjZXB0TGljZW5zZTpib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRFdmVudFByb2Nlc3NvcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogXCJITVNBZHNcIixcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc1wiLFxuICAgIHBsdWdpblJlZjogXCJITVNBZHMuSE1TQmFubmVyQWRcIixcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU0Jhbm5lckFkIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgb24oZXZlbnROYW1lOiBCYW5uZXJBZEV2ZW50cywgY2FsbGJhY2s6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGFzeW5jIGNyZWF0ZShkaXZJZDogc3RyaW5nLCBib3VuZHM/OiBMYXlvdXRCb3VuZHMpOiBQcm9taXNlPEhNU0Jhbm5lckFkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzY3JvbGwoKTogdm9pZCB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRBZElkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRBZElkKGFkSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0QmFubmVyQWRTaXplKCk6IFByb21pc2U8QWRTaXplPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRCYW5uZXJBZFNpemUoYmFubmVyQWRTaXplOiBCYW5uZXJBZFNpemUgfCBBZFNpemUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEJhY2tncm91bmRDb2xvcihiZ0NvbG9yOiBDb2xvcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QmFubmVyUmVmcmVzaChiYW5uZXJSZWZyZXNoOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEFkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0xvYWRpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBsb2FkQWQoYWRQYXJhbT86IEFkUGFyYW0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHBhdXNlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcmVzdW1lKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEhlaWdodCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0SGVpZ2h0UHgoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldFdpZHRoKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRXaWR0aFB4KCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0F1dG9IZWlnaHRTaXplKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNEeW5hbWljU2l6ZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzRnVsbFdpZHRoU2l6ZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEN1cnJlbnREaXJlY3Rpb25CYW5uZXJTaXplKHdpZHRoOiBudW1iZXIpOiBQcm9taXNlPEFkU2l6ZT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0TGFuZHNjYXBlQmFubmVyU2l6ZSh3aWR0aDogbnVtYmVyKTogUHJvbWlzZTxBZFNpemU+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldFBvcnRyYWl0QmFubmVyU2l6ZSh3aWR0aDogbnVtYmVyKTogUHJvbWlzZTxBZFNpemU+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogXCJITVNBZHNcIixcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc1wiLFxuICAgIHBsdWdpblJlZjogXCJITVNBZHMuSE1TSW50ZXJzdGl0aWFsQWRcIixcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU0ludGVyc3RpdGlhbEFkIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgb24oXG4gICAgICAgIGV2ZW50TmFtZTogSW50ZXJzdGl0aWFsQWRFdmVudHMsXG4gICAgICAgIGNhbGxiYWNrOiAocmVzdWx0PzogYW55KSA9PiB2b2lkXG4gICAgKTogdm9pZCB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBhc3luYyBjcmVhdGUodXNlQWN0aXZpdHk6IGJvb2xlYW4pOiBQcm9taXNlPEhNU0ludGVyc3RpdGlhbEFkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzY3JvbGwoKTogdm9pZCB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzaG93KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNMb2FkZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0xvYWRpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBsb2FkQWQoYWRQYXJhbT86IEFkUGFyYW0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEFkSWQoYWRJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRBZElkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRBZExpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0UmV3YXJkQWRMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHZpZGVvT3BlcmF0b3JHZXRBc3BlY3RSYXRpbygpOiBQcm9taXNlPFZpZGVvT3BlcmF0b3JBc3BlY3RSYXRpbz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgdmlkZW9PcGVyYXRvckhhc1ZpZGVvKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgdmlkZW9PcGVyYXRvcklzQ3VzdG9taXplT3BlcmF0ZUVuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICB2aWRlb09wZXJhdG9ySXNNdXRlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHZpZGVvT3BlcmF0b3JNdXRlKG11dGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHZpZGVvT3BlcmF0b3JQYXVzZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHZpZGVvT3BlcmF0b3JQbGF5KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgdmlkZW9PcGVyYXRvclN0b3AoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6IFwiSE1TQWRzXCIsXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1hZHNcIixcbiAgICBwbHVnaW5SZWY6IFwiSE1TQWRzLkhNU05hdGl2ZUFkXCIsXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNOYXRpdmVBZCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIG9uKGV2ZW50TmFtZTogTmF0aXZlQWRFdmVudHMsIGNhbGxiYWNrOiAocmVzdWx0PzogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBhc3luYyBjcmVhdGUoXG4gICAgICAgIG9wdGlvbnM6IE5hdGl2ZUFkT3B0aW9ucyxcbiAgICAgICAgYm91bmRzPzogTGF5b3V0Qm91bmRzXG4gICAgKTogUHJvbWlzZTxITVNOYXRpdmVBZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgbG9hZEFkKG9wdGlvbnM/OiBOYXRpdmVBZExvYWRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzaG93KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNMb2FkaW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGRpc2xpa2VBZChkaXNsaWtlUmVhc29uOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEFsbG93Q3VzdG9tQ2xpY2soKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRBZFNvdXJjZSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0RGVzY3JpcHRpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldENhbGxUb0FjdGlvbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0RGlzbGlrZUFkUmVhc29ucygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0N1c3RvbUNsaWNrQWxsb3dlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzQ3VzdG9tRGlzbGlrZVRoaXNBZEVuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZWNvcmRDbGlja0V2ZW50KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcmVjb3JkSW1wcmVzc2lvbkV2ZW50KGltcHJlc3Npb25EYXRhOiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldFVuaXF1ZUlkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXREaXNsaWtlQWRMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdvdG9XaHlUaGlzQWRQYWdlKHVzZVZpZXc6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEFkU2lnbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0VGl0bGUoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldFdoeVRoaXNBZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcmVjb3JkU2hvd1N0YXJ0RXZlbnQoc2hvd1N0YXJ0RGF0YTogYW55KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBvbkFkQ2xvc2Uoa2V5d29yZHM6IHN0cmluZ1tdKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXROYXRpdmVBZENvbmZpZ3VyYXRpb24oKTogUHJvbWlzZTxOYXRpdmVBZENvbmZpZ3VyYXRpb24+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldE9uRG93bmxvYWRTdGF0dXNDaGFuZ2VkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRPbk5vbldpZmlEb3dubG9hZExpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0U2hvd1Blcm1pc3Npb25EaWFsb2coc2hvdzpib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRBbGxvd2VkTm9uV2lmaU5ldHdvcmsoYWxsb3dlZDpib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBjYW5jZWwoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBjb250aW51ZURvd25sb2FkKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0Fkc1wiLFxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzXCIsXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkcy5ITVNSZXdhcmRBZFwiLFxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TUmV3YXJkQWQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBvbihldmVudE5hbWU6IFJld2FyZEFkRXZlbnRzLCBjYWxsYmFjazogKHJlc3VsdD86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgYXN5bmMgY3JlYXRlKGFkSWQ6IHN0cmluZyk6IFByb21pc2U8SE1TUmV3YXJkQWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNob3codXNlQWN0aXZpdHk6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHJlc3VtZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHBhdXNlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGxvYWRBZFdpdGhBZElkKGFkSWQ6c3RyaW5nLGFkUGFyYW0/OkFkUGFyYW0pOiBQcm9taXNlPHZvaWQ+e1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGxvYWRBZChhZFBhcmFtPzogQWRQYXJhbSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNMb2FkZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXREYXRhKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRVc2VySWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldFJld2FyZCgpOiBQcm9taXNlPEhNU1Jld2FyZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0RGF0YShkYXRhOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEltbWVyc2l2ZShpbW1lcnNpdmU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldFVzZXJJZCh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0UmV3YXJkVmVyaWZ5Q29uZmlnKGNvbmZpZzogSE1TUmV3YXJkVmVyaWZ5Q29uZmlnKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRSZXdhcmRWZXJpZnlDb25maWcoKTogUHJvbWlzZTxITVNSZXdhcmRWZXJpZnlDb25maWc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldE9uTWV0YWRhdGFDaGFuZ2VkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRSZXdhcmRBZExpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0TW9iaWxlRGF0YUFsZXJ0U3dpdGNoKGFsZXJ0U3dpdGNoOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6IFwiSE1TQWRzXCIsXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1hZHNcIixcbiAgICBwbHVnaW5SZWY6IFwiSE1TQWRzLkhNU1JvbGxBZFwiLFxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TUm9sbEFkIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgb24oZXZlbnROYW1lOiBSb2xsQWRFdmVudHMsIGNhbGxiYWNrOiAocmVzdWx0PzogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBhc3luYyBjcmVhdGUoXG4gICAgICAgIHBhcmFtczogUm9sbEFkTG9hZGVyUGFyYW1zLFxuICAgICAgICBkaXZJZDogc3RyaW5nLFxuICAgICAgICBib3VuZHM/OiBMYXlvdXRCb3VuZHNcbiAgICApOiBQcm9taXNlPEhNU1JvbGxBZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2Nyb2xsKCk6IHZvaWQge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgbG9hZEFkKG9wdGlvbnM6IFJvbGxBZExvYWRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0xvYWRpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcGF1c2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc1BsYXlpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBtdXRlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgdW5tdXRlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgb25DbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHBsYXkoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzdG9wKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcmVtb3ZlSW5zdHJlYW1NZWRpYUNoYW5nZUxpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcmVtb3ZlTWVkaWFNdXRlTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZW1vdmVJbnN0cmVhbU1lZGlhU3RhdGVMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEluc3RyZWFtQWRzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0SW5zdHJlYW1NZWRpYUNoYW5nZUxpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0TWVkaWFNdXRlTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRJbnN0cmVhbU1lZGlhU3RhdGVMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldE9uSW5zdHJlYW1BZENsaWNrTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRBZFNvdXJjZSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0RHVyYXRpb24oKTogUHJvbWlzZTxEdXJhdGlvbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0V2h5VGhpc0FkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRBZFNpZ24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzQ2xpY2tlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzRXhwaXJlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzSW1hZ2VBZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzU2hvd24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc1ZpZGVvQWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRDYWxsVG9BY3Rpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogXCJITVNBZHNcIixcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc1wiLFxuICAgIHBsdWdpblJlZjogXCJITVNBZHMuSE1TU3BsYXNoQWRcIixcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU1NwbGFzaEFkIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgb24oZXZlbnROYW1lOiBTcGxhc2hBZEV2ZW50cywgY2FsbGJhY2s6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGFzeW5jIGNyZWF0ZSgpOiBQcm9taXNlPEhNU1NwbGFzaEFkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRMb2dvKGZpbGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0V2lkZVNsb2dhblJlc0lkKHdpZGVTbG9nYW5SZXNJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRTbG9nYW5SZXNJZChzbG9nYW5SZXNJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBsb2FkKG9wdGlvbnM6IFNwbGFzaEFkTG9hZE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHByZWxvYWRBZChvcHRpb25zOiBTcGxhc2hBZExvYWRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBkZXN0cm95VmlldygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHBhdXNlVmlldygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHJlc3VtZVZpZXcoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0xvYWRpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0xvYWRlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEFkRGlzcGxheUxpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QXVkaW9Gb2N1c1R5cGUoYXVkaW9Gb2N1c1R5cGU6IEF1ZGlvRm9jdXNUeXBlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6IFwiSE1TQWRzXCIsXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1hZHNcIixcbiAgICBwbHVnaW5SZWY6IFwiSE1TQWRzLkhNU1Zhc3RcIixcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU1Zhc3QgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBvbihldmVudE5hbWU6IFZhc3RFdmVudHMsIGNhbGxiYWNrOiAocmVzdWx0PzogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBhc3luYyBjcmVhdGUoXG4gICAgICAgIGRpdklkOiBzdHJpbmcsXG4gICAgICAgIGJvdW5kcz86IExheW91dEJvdW5kc1xuICAgICk6IFByb21pc2U8SE1TVmFzdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2Nyb2xsKCk6IHZvaWQge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgbG9hZEFkKG9wdGlvbnM6IFZhc3RMb2FkT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcmVzdW1lKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcGF1c2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZWxlYXNlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgdG9nZ2xlTXV0ZVN0YXRlKGlzTXV0ZTpib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHN0YXJ0T3JQYXVzZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxufSAgICBcbiJdfQ==