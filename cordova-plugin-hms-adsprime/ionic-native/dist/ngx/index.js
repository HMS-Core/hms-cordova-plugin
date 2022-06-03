/*
    Copyright 2022. Huawei Technologies Co., Ltd. All rights reserved.

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
    HMSAds.prototype.getInstallReferrer = function () { return cordova(this, "getInstallReferrer", { "otherPromise": true }, arguments); };
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
    HMSAds.plugin = "cordova-plugin-hms-adsprime";
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
    HMSBannerAd.plugin = "cordova-plugin-hms-adsprime";
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
    HMSInterstitialAd.plugin = "cordova-plugin-hms-adsprime";
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
    HMSNativeAd.plugin = "cordova-plugin-hms-adsprime";
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
    HMSRewardAd.plugin = "cordova-plugin-hms-adsprime";
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
    HMSRollAd.plugin = "cordova-plugin-hms-adsprime";
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
    HMSSplashAd.plugin = "cordova-plugin-hms-adsprime";
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
    HMSVast.plugin = "cordova-plugin-hms-adsprime";
    HMSVast.pluginRef = "HMSAds.HMSVast";
    HMSVast.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSVast.platforms = ["Android"];
    HMSVast.decorators = [
        { type: Injectable }
    ];
    return HMSVast;
}(IonicNativePlugin));
export { HMSVast };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7OztFQWNFO0FBQ0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHNFQUtOLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsK0RBQStEO0FBQy9ELFlBQVk7QUFDWiwrREFBK0Q7QUFFL0QsTUFBTSxDQUFOLElBQVksaUJBVVg7QUFWRCxXQUFZLGlCQUFpQjtJQUN6Qiw2RUFBa0IsQ0FBQTtJQUNsQixpR0FBNEIsQ0FBQTtJQUM1Qiw2RkFBMEIsQ0FBQTtJQUMxQiw2RUFBa0IsQ0FBQTtJQUNsQix1RkFBdUIsQ0FBQTtJQUN2QixpRkFBb0IsQ0FBQTtJQUNwQixtR0FBNkIsQ0FBQTtJQUM3QixtR0FBNkIsQ0FBQTtJQUM3QixpSEFBb0MsQ0FBQTtBQUN4QyxDQUFDLEVBVlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQVU1QjtBQUNELE1BQU0sQ0FBTixJQUFZLHdCQUtYO0FBTEQsV0FBWSx3QkFBd0I7SUFDaEMsaUhBQTZCLENBQUE7SUFDN0IsNkdBQTJCLENBQUE7SUFDM0IscUhBQStCLENBQUE7SUFDL0IscUhBQStCLENBQUE7QUFDbkMsQ0FBQyxFQUxXLHdCQUF3QixLQUF4Qix3QkFBd0IsUUFLbkM7QUFDRCxNQUFNLENBQU4sSUFBWSx1QkFNWDtBQU5ELFdBQVksdUJBQXVCO0lBQy9CLDREQUFpQyxDQUFBO0lBQ2pDLDhEQUFtQyxDQUFBO0lBQ25DLGlFQUFzQyxDQUFBO0lBQ3RDLDREQUFpQyxDQUFBO0lBQ2pDLDREQUFpQyxDQUFBO0FBQ3JDLENBQUMsRUFOVyx1QkFBdUIsS0FBdkIsdUJBQXVCLFFBTWxDO0FBQ0QsTUFBTSxDQUFOLElBQVksTUFJWDtBQUpELFdBQVksTUFBTTtJ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RSxhQUFDLFNBQXFCLEVBQUUsUUFBZ0M7SUFJcEQsd0JBQU0sYUFDUixLQUFhLEVBQ2IsTUFBcUI7SUFLekIsd0JBQU07SUFJTix3QkFBTSxhQUFDLE9BQXdCO0lBSS9CLHdCQUFNO0lBSU4sdUJBQUs7SUFJTCx5QkFBTztJQUlQLGlDQUFlLGFBQUMsTUFBYztJQUs5Qiw4QkFBWTs7Ozs7OztnQkF2Q2YsVUFBVTs7a0JBdnZDWDtFQXd2QzZCLGlCQUFpQjtTQUFqQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBDb3B5cmlnaHQgMjAyMC0yMDIyLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxuICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gICAgUGx1Z2luLFxuICAgIENvcmRvdmEsXG4gICAgQ29yZG92YVByb3BlcnR5LFxuICAgIElvbmljTmF0aXZlUGx1Z2luLFxufSBmcm9tIFwiQGlvbmljLW5hdGl2ZS9jb3JlXCI7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gQ29uc3RhbnRzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGVudW0gQWRQYXJhbUVycm9yQ29kZXMge1xuICAgIEFEX1BBUkFNX0lOTkVSID0gMCxcbiAgICBBRF9QQVJBTV9JTlZBTElEX1JFUVVFU1QgPSAxLFxuICAgIEFEX1BBUkFNX05FVFdPUktfRVJST1IgPSAyLFxuICAgIEFEX1BBUkFNX05PX0FEID0gMyxcbiAgICBBRF9QQVJBTV9BRF9MT0FESU5HID0gNCxcbiAgICBBRF9QQVJBTV9MT1dfQVBJID0gNSxcbiAgICBBRF9QQVJBTV9CQU5ORVJfQURfRVhQSVJFID0gNixcbiAgICBBRF9QQVJBTV9CQU5ORVJfQURfQ0FOQ0VMID0gNyxcbiAgICBBRF9QQVJBTV9ITVNfTk9UX1NVUFBPUlRfU0VUX0FQUCA9IDgsXG59XG5leHBvcnQgZW51bSBSZXdhcmRBZFN0YXR1c0Vycm9yQ29kZXMge1xuICAgIFJFV0FSRF9BRF9TVEFUVVNfSU5URVJOQUwgPSAwLFxuICAgIFJFV0FSRF9BRF9TVEFUVVNfUkVVU0VEID0gMSxcbiAgICBSRVdBUkRfQURfU1RBVFVTX05PVF9MT0FERUQgPSAyLFxuICAgIFJFV0FSRF9BRF9TVEFUVVNfQkFDS0dST1VORCA9IDMsXG59XG5leHBvcnQgZW51bSBBZENvbnRlbnRDbGFzc2lmaWNhdGlvbiB7XG4gICAgQURfQ09OVEVOVF9DTEFTU0lGSUNBVElPTl9BID0gXCJBXCIsXG4gICAgQURfQ09OVEVOVF9DTEFTU0lGSUNBVElPTl9QSSA9IFwiUElcIixcbiAgICBBRF9DT05URU5UX0NMQVNTSUZJQ0FUSU9OX1VOS05PV04gPSBcIlwiLFxuICAgIEFEX0NPTlRFTlRfQ0xBU1NJRklDQVRJT05fSiA9IFwiSlwiLFxuICAgIEFEX0NPTlRFTlRfQ0xBU1NJRklDQVRJT05fVyA9IFwiV1wiLFxufVxuZXhwb3J0IGVudW0gR2VuZGVyIHtcbiAgICBGRU1BTEUgPSAyLFxuICAgIE1BTEUgPSAxLFxuICAgIFVOS05PV04gPSAwLFxufVxuZXhwb3J0IGVudW0gTm9uUGVyc29uYWxpemVkQWQge1xuICAgIEFMTE9XX0FMTCA9IDAsXG4gICAgQUxMT1dfTk9OX1BFUlNPTkFMSVpFRCA9IDEsXG59XG5leHBvcnQgZW51bSBDaGlsZFByb3RlY3Rpb24ge1xuICAgIFRBR19GT1JfQ0hJTERfUFJPVEVDVElPTl9VTlNQRUNJRklFRCA9IC0xLFxuICAgIFRBR19GT1JfQ0hJTERfUFJPVEVDVElPTl9GQUxTRSA9IDAsXG4gICAgVEFHX0ZPUl9DSElMRF9QUk9URUNUSU9OX1RSVUUgPSAxLFxufVxuZXhwb3J0IGVudW0gVW5kZXJBZ2VPZlByb21pc2Uge1xuICAgIFBST01JU0VfVU5TUEVDSUZJRUQgPSAtMSxcbiAgICBQUk9NSVNFX0ZBTFNFID0gMCxcbiAgICBQUk9NSVNFX1RSVUUgPSAxLFxufVxuZXhwb3J0IGVudW0gQmFubmVyQWRTaXplIHtcbiAgICBCQU5ORVJfU0laRV8zNjBfNTcgPSBcIkJBTk5FUl9TSVpFXzM2MF81N1wiLFxuICAgIEJBTk5FUl9TSVpFXzM2MF8xNDQgPSBcIkJBTk5FUl9TSVpFXzM2MF8xNDRcIixcbiAgICBCQU5ORVJfU0laRV8xNjBfNjAwID0gXCJCQU5ORVJfU0laRV8xNjBfNjAwXCIsXG4gICAgQkFOTkVSX1NJWkVfMzAwXzI1MCA9IFwiQkFOTkVSX1NJWkVfMzAwXzI1MFwiLFxuICAgIEJBTk5FUl9TSVpFXzMyMF8xMDAgPSBcIkJBTk5FUl9TSVpFXzMyMF8xMDBcIixcbiAgICBCQU5ORVJfU0laRV8zMjBfNTAgPSBcIkJBTk5FUl9TSVpFXzMyMF81MFwiLFxuICAgIEJBTk5FUl9TSVpFXzQ2OF82MCA9IFwiQkFOTkVSX1NJWkVfNDY4XzYwXCIsXG4gICAgQkFOTkVSX1NJWkVfNzI4XzkwID0gXCJCQU5ORVJfU0laRV83MjhfOTBcIixcbiAgICBCQU5ORVJfU0laRV9EWU5BTUlDID0gXCJCQU5ORVJfU0laRV9EWU5BTUlDXCIsXG4gICAgQkFOTkVSX1NJWkVfSU5WQUxJRCA9IFwiQkFOTkVSX1NJWkVfSU5WQUxJRFwiLFxuICAgIEJBTk5FUl9TSVpFX1NNQVJUID0gXCJCQU5ORVJfU0laRV9TTUFSVFwiLFxuICAgIEJBTk5FUl9TSVpFX0FEVkFOQ0VEID0gXCJCQU5ORVJfU0laRV9BRFZBTkNFRFwiLFxufVxuZXhwb3J0IGVudW0gSE1TU2NyZWVuT3JpZW50YXRpb24ge1xuICAgIFNDUkVFTl9PUklFTlRBVElPTl9MQU5EU0NBUEUgPSAwLFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9VTlNQRUNJRklFRCA9IC0xLFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9QT1JUUkFJVCA9IDEsXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1VTRVIgPSAyLFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9CRUhJTkQgPSAzLFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9TRU5TT1IgPSA0LFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9OT1NFTlNPUiA9IDUsXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1NFTlNPUl9MQU5EU0NBUEUgPSA2LFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9TRU5TT1JfUE9SVFJBSVQgPSA3LFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9SRVZFUlNFX0xBTkRTQ0FQRSA9IDgsXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1JFVkVSU0VfUE9SVFJBSVQgPSA5LFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9GVUxMX1NFTlNPUiA9IDEwLFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9VU0VSX0xBTkRTQ0FQRSA9IDExLFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9VU0VSX1BPUlRSQUlUID0gMTIsXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX0ZVTExfVVNFUiA9IDEzLFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9MT0NLRUQgPSAxNCxcbn1cbmV4cG9ydCBlbnVtIERlYnVnTmVlZENvbnNlbnQge1xuICAgIENPTlNFTlRfREVCVUdfRElTQUJMRUQgPSAwLFxuICAgIENPTlNFTlRfREVCVUdfTkVFRF9DT05TRU5UID0gMSxcbiAgICBDT05TRU5UX0RFQlVHX05PVF9ORUVEX0NPTlNFTlQgPSAyLFxufVxuZXhwb3J0IGVudW0gQ29uc2VudFN0YXR1cyB7XG4gICAgQ09OU0VOVF9QRVJTT05BTElaRUQgPSAwLFxuICAgIENPTlNFTlRfTk9OX1BFUlNPTkFMSVpFRCA9IDEsXG4gICAgQ09OU0VOVF9VTktOT1dOID0gMixcbn1cbmV4cG9ydCBlbnVtIEF1ZGlvRm9jdXNUeXBlIHtcbiAgICBHQUlOX0FVRElPX0ZPQ1VTX0FMTCA9IDAsXG4gICAgTk9UX0dBSU5fQVVESU9fRk9DVVNfV0hFTl9NVVRFID0gMSxcbiAgICBOT1RfR0FJTl9BVURJT19GT0NVU19BTEwgPSAyLFxufVxuZXhwb3J0IGVudW0gTWVkaWFBc3BlY3Qge1xuICAgIEFTUEVDVF9BTlkgPSAxLFxuICAgIEFTUEVDVF9DVVNUT01fU0laRSA9IC0xLFxuICAgIEFTUEVDVF9MQU5EU0NBUEUgPSAyLFxuICAgIEFTUEVDVF9QT1JUUkFJVCA9IDMsXG4gICAgQVNQRUNUX1NRVUFSRSA9IDQsXG4gICAgQVNQRUNUX1VOS05PV04gPSAwLFxufVxuZXhwb3J0IGVudW0gQ2hvaWNlc1Bvc2l0aW9uIHtcbiAgICBCT1RUT01fTEVGVCA9IDMsXG4gICAgQk9UVE9NX1JJR0hUID0gMixcbiAgICBJTlZJU0lCTEUgPSA0LFxuICAgIFRPUF9MRUZUID0gMCxcbiAgICBUT1BfUklHSFQgPSAxLFxufVxuZXhwb3J0IGVudW0gTWVkaWFEaXJlY3Rpb24ge1xuICAgIEFOWSA9IDAsXG4gICAgTEFORFNDQVBFID0gMixcbiAgICBQT1JUUkFJVCA9IDEsXG59XG5leHBvcnQgZW51bSBOYXRpdmVBZFRlbXBsYXRlIHtcbiAgICBOQVRJVkVfQURfU01BTExfVEVNUExBVEUgPSBcIk5BVElWRV9BRF9TTUFMTF9URU1QTEFURVwiLFxuICAgIE5BVElWRV9BRF9GVUxMX1RFTVBMQVRFID0gXCJOQVRJVkVfQURfRlVMTF9URU1QTEFURVwiLFxuICAgIE5BVElWRV9BRF9CQU5ORVJfVEVNUExBVEUgPSBcIk5BVElWRV9BRF9CQU5ORVJfVEVNUExBVEVcIixcbiAgICBOQVRJVkVfQURfVklERU9fVEVNUExBVEUgPSBcIk5BVElWRV9BRF9WSURFT19URU1QTEFURVwiLFxuICAgIE5BVElWRV9BRF9XSVRIX0FQUF9ET1dOTE9BRF9CVE5fVEVNUExBVEUgPSBcIk5BVElWRV9BRF9XSVRIX0FQUF9ET1dOTE9BRF9CVE5fVEVNUExBVEVcIlxufVxuZXhwb3J0IGVudW0gQ29sb3Ige1xuICAgIFJFRCA9IFwiUkVEXCIsXG4gICAgREtHUkFZID0gXCJES0dSQVlcIixcbiAgICBHUkFZID0gXCJHUkFZXCIsXG4gICAgV0hJVEUgPSBcIldISVRFXCIsXG4gICAgQkxVRSA9IFwiQkxVRVwiLFxuICAgIEJMQUNLID0gXCJCTEFDS1wiLFxuICAgIExUR1JBWSA9IFwiTFRHUkFZXCIsXG4gICAgTUFHRU5UQSA9IFwiTUFHRU5UQVwiLFxuICAgIFlFTExPVyA9IFwiWUVMTE9XXCIsXG4gICAgQ1lBTiA9IFwiQ1lBTlwiLFxuICAgIEdSRUVOID0gXCJHUkVFTlwiLFxuICAgIFRSQU5TUEFSRU5UID0gXCJUUkFOU1BBUkVOVFwiLFxufVxuZXhwb3J0IGVudW0gSW5zdGFsbFJlZmVycmVyUmVzcG9uc2VzIHtcbiAgICBTRVJWSUNFX0RJU0NPTk5FQ1RFRCA9IC0xLFxuICAgIERFVkVMT1BFUl9FUlJPUiA9IDMsXG4gICAgU0VSVklDRV9VTkFWQUlMQUJMRSA9IDEsXG4gICAgT0sgPSAwLFxuICAgIEZFQVRVUkVfTk9UX1NVUFBPUlRFRCA9IDIsXG59XG5leHBvcnQgZW51bSBBbmNob3Ige1xuICAgIFRPUCA9IFwidG9wXCIsXG4gICAgQk9UVE9NID0gXCJib3R0b21cIixcbiAgICBJTlZJU0lCTEUgPSBcImludmlzaWJsZVwiLFxufVxuZXhwb3J0IGVudW0gQmFubmVyQWRFdmVudHMge1xuICAgIEJBTk5FUl9BRF9DTE9TRUQgPSBcImJhbm5lcl9hZF9jbG9zZWRcIixcbiAgICBCQU5ORVJfQURfRkFJTEVEID0gXCJiYW5uZXJfYWRfZmFpbGVkXCIsXG4gICAgQkFOTkVSX0FEX0xFQVZFID0gXCJiYW5uZXJfYWRfbGVhdmVcIixcbiAgICBCQU5ORVJfQURfT1BFTkVEID0gXCJiYW5uZXJfYWRfb3BlbmVkXCIsXG4gICAgQkFOTkVSX0FEX0xPQURFRCA9IFwiYmFubmVyX2FkX2xvYWRlZFwiLFxuICAgIEJBTk5FUl9BRF9DTElDS0VEID0gXCJiYW5uZXJfYWRfY2xpY2tlZFwiLFxuICAgIEJBTk5FUl9BRF9JTVBSRVNTSU9OID0gXCJiYW5uZXJfYWRfaW1wcmVzc2lvblwiLFxufVxuZXhwb3J0IGVudW0gSW50ZXJzdGl0aWFsQWRFdmVudHMge1xuICAgIElOVEVSU1RJVElBTF9BRF9DTE9TRUQgPSBcImludGVyc3RpdGlhbF9hZF9jbG9zZWRcIixcbiAgICBJTlRFUlNUSVRJQUxfQURfRkFJTEVEID0gXCJpbnRlcnN0aXRpYWxfYWRfZmFpbGVkXCIsXG4gICAgSU5URVJTVElUSUFMX0FEX0xFQVZFID0gXCJpbnRlcnN0aXRpYWxfYWRfbGVhdmVcIixcbiAgICBJTlRFUlNUSVRJQUxfQURfT1BFTkVEID0gXCJpbnRlcnN0aXRpYWxfYWRfb3BlbmVkXCIsXG4gICAgSU5URVJTVElUSUFMX0FEX0xPQURFRCA9IFwiaW50ZXJzdGl0aWFsX2FkX2xvYWRlZFwiLFxuICAgIElOVEVSU1RJVElBTF9BRF9DTElDS0VEID0gXCJpbnRlcnN0aXRpYWxfYWRfY2xpY2tlZFwiLFxuICAgIElOVEVSU1RJVElBTF9BRF9JTVBSRVNTSU9OID0gXCJpbnRlcnN0aXRpYWxfYWRfaW1wcmVzc2lvblwiLFxuICAgIElOVEVSU1RJVElBTF9BRF9SRVdBUkRFRCA9IFwiaW50ZXJzdGl0aWFsX2FkX3Jld2FyZGVkXCIsXG4gICAgSU5URVJTVElUSUFMX1JFV0FSRF9BRF9DTE9TRUQgPSBcImludGVyc3RpdGlhbF9yZXdhcmRfYWRfY2xvc2VkXCIsXG4gICAgSU5URVJTVElUSUFMX1JFV0FSRF9BRF9GQUlMRURfVE9fTE9BRCA9IFwiaW50ZXJzdGl0aWFsX3Jld2FyZF9hZF9mYWlsZWRfdG9fbG9hZFwiLFxuICAgIElOVEVSU1RJVElBTF9SRVdBUkRfQURfTEVGVF9BUFAgPSBcImludGVyc3RpdGlhbF9yZXdhcmRfYWRfbGVmdF9hcHBcIixcbiAgICBJTlRFUlNUSVRJQUxfUkVXQVJEX0FEX0xPQURFRCA9IFwiaW50ZXJzdGl0aWFsX3Jld2FyZF9hZF9sb2FkZWRcIixcbiAgICBJTlRFUlNUSVRJQUxfUkVXQVJEX0FEX09QRU5FRCA9IFwiaW50ZXJzdGl0aWFsX3Jld2FyZF9hZF9vcGVuZWRcIixcbiAgICBJTlRFUlNUSVRJQUxfUkVXQVJEX0FEX0NPTVBMRVRFRCA9IFwiaW50ZXJzdGl0aWFsX3Jld2FyZF9hZF9jb21wbGV0ZWRcIixcbiAgICBJTlRFUlNUSVRJQUxfUkVXQVJEX0FEX1NUQVJURUQgPSBcImludGVyc3RpdGlhbF9yZXdhcmRfYWRfc3RhcnRlZFwiLFxufVxuZXhwb3J0IGVudW0gU3BsYXNoQWRFdmVudHMge1xuICAgIFNQTEFTSF9BRF9GQUlMRURfVE9fTE9BRCA9IFwic3BsYXNoX2FkX2ZhaWxlZF90b19sb2FkXCIsXG4gICAgU1BMQVNIX0FEX0xPQURFRCA9IFwic3BsYXNoX2FkX2xvYWRlZFwiLFxuICAgIFNQTEFTSF9BRF9ESVNNSVNTRUQgPSBcInNwbGFzaF9hZF9kaXNtaXNzZWRcIixcbiAgICBTUExBU0hfQURfU0hPV0VEID0gXCJzcGxhc2hfYWRfc2hvd2VkXCIsXG4gICAgU1BMQVNIX0FEX0NMSUNLID0gXCJzcGxhc2hfYWRfY2xpY2tcIixcbn1cbmV4cG9ydCBlbnVtIFJvbGxBZEV2ZW50cyB7XG4gICAgUk9MTF9BRF9MT0FEX0ZBSUxFRCA9IFwicm9sbF9hZF9sb2FkX2ZhaWxlZFwiLFxuICAgIFJPTExfQURfTE9BREVEID0gXCJyb2xsX2FkX2xvYWRlZFwiLFxuICAgIFJPTExfQURfTUVESUFfQ0hBTkdFRCA9IFwicm9sbF9hZF9tZWRpYV9jaGFuZ2VkXCIsXG4gICAgUk9MTF9BRF9DTElDS0VEID0gXCJyb2xsX2FkX2NsaWNrZWRcIixcbiAgICBST0xMX0FEX01FRElBX1BST0dSRVNTID0gXCJyb2xsX2FkX21lZGlhX3Byb2dyZXNzXCIsXG4gICAgUk9MTF9BRF9NRURJQV9TVEFSVCA9IFwicm9sbF9hZF9tZWRpYV9zdGFydFwiLFxuICAgIFJPTExfQURfTUVESUFfUEFVU0UgPSBcInJvbGxfYWRfbWVkaWFfcGF1c2VcIixcbiAgICBST0xMX0FEX01FRElBX1NUT1AgPSBcInJvbGxfYWRfbWVkaWFfc3RvcFwiLFxuICAgIFJPTExfQURfTUVESUFfQ09NUExFVElPTiA9IFwicm9sbF9hZF9tZWRpYV9jb21wbGV0aW9uXCIsXG4gICAgUk9MTF9BRF9NRURJQV9FUlJPUiA9IFwicm9sbF9hZF9tZWRpYV9lcnJvclwiLFxuICAgIFJPTExfQURfTUVESUFfVU5NVVRFID0gXCJyb2xsX2FkX21lZGlhX3VubXV0ZVwiLFxuICAgIFJPTExfQURfTUVESUFfTVVURSA9IFwicm9sbF9hZF9tZWRpYV9tdXRlXCIsXG4gICAgUk9MTF9BRF9XSFlfVEhJU19BRCA9IFwicm9sbF9hZF93aHlfdGhpc19hZFwiLFxufVxuZXhwb3J0IGVudW0gUmV3YXJkQWRFdmVudHMge1xuICAgIFJFV0FSRF9NRVRBREFUQV9DSEFOR0VEID0gXCJyZXdhcmRfbWV0YWRhdGFfY2hhbmdlZFwiLFxuICAgIFJFV0FSRF9BRF9GQUlMRURfVE9fTE9BRF9MT0FEID0gXCJyZXdhcmRfYWRfZmFpbGVkX3RvX2xvYWRfbG9hZFwiLFxuICAgIFJFV0FSREVEX0xPQURFRCA9IFwicmV3YXJkZWRfbG9hZGVkXCIsXG4gICAgUkVXQVJERURfU1RBVFVTID0gXCJyZXdhcmRlZF9zdGF0dXNcIixcbiAgICBSRVdBUkRfQURfQ0xPU0VEX1NUQVRVUyA9IFwicmV3YXJkX2FkX2Nsb3NlZF9zdGF0dXNcIixcbiAgICBSRVdBUkRfQURfT1BFTkVEX1NUQVRVUyA9IFwicmV3YXJkX2FkX29wZW5lZF9zdGF0dXNcIixcbiAgICBSRVdBUkRfQURfRkFJTEVEX1RPX1NIT1cgPSBcInJld2FyZF9hZF9mYWlsZWRfdG9fc2hvd1wiLFxuICAgIFJFV0FSREVEID0gXCJyZXdhcmRlZFwiLFxuICAgIFJFV0FSRF9BRF9DTE9TRUQgPSBcInJld2FyZF9hZF9jbG9zZWRcIixcbiAgICBSRVdBUkRfQURfRkFJTEVEX1RPX0xPQUQgPSBcInJld2FyZF9hZF9mYWlsZWRfdG9fbG9hZFwiLFxuICAgIFJFV0FSRF9BRF9MT0FERUQgPSBcInJld2FyZF9hZF9sb2FkZWRcIixcbiAgICBSRVdBUkRfQURfT1BFTkVEID0gXCJyZXdhcmRfYWRfb3BlbmVkXCIsXG59XG5cbmV4cG9ydCBlbnVtIERldGFpbGVkQ3JlYXRpdmVUeXBlIHtcbiAgQklHX0lNRyA9IDkwMSxcbiAgVklERU8gPSA5MDMsXG4gIFRIUkVFX0lNRyA9IDkwNCxcbiAgU01BTExfSU1HID0gOTA1LFxuICBTSU5HTEVfSU1HID0gOTA5LFxuICBTSE9SVF9URVhUID0gOTEzLFxuICBMT05HX1RFWFQgPSA5MTRcbn1cblxuZXhwb3J0IGVudW0gTmF0aXZlQWRFdmVudHMge1xuICAgIE5BVElWRV9BRF9ESVNMSUtFRCA9IFwibmF0aXZlX2FkX2Rpc2xpa2VkXCIsXG4gICAgTkFUSVZFX0FEX0xPQURFRF9MT0FEID0gXCJuYXRpdmVfYWRfbG9hZGVkX2xvYWRcIixcbiAgICBOQVRJVkVfQURfQ0xPU0VEID0gXCJuYXRpdmVfYWRfY2xvc2VkXCIsXG4gICAgTkFUSVZFX0FEX0ZBSUxFRCA9IFwibmF0aXZlX2FkX2ZhaWxlZFwiLFxuICAgIE5BVElWRV9BRF9MRUFWRSA9IFwibmF0aXZlX2FkX2xlYXZlXCIsXG4gICAgTkFUSVZFX0FEX09QRU5FRCA9IFwibmF0aXZlX2FkX29wZW5lZFwiLFxuICAgIE5BVElWRV9BRF9MT0FERUQgPSBcIm5hdGl2ZV9hZF9sb2FkZWRcIixcbiAgICBOQVRJVkVfQURfQ0xJQ0tFRCA9IFwibmF0aXZlX2FkX2NsaWNrZWRcIixcbiAgICBOQVRJVkVfQURfSU1QUkVTU0lPTiA9IFwibmF0aXZlX2FkX2ltcHJlc3Npb25cIixcbiAgICBWSURFT19PUEVSQVRPUl9WSURFT19TVEFSVCA9IFwidmlkZW9fb3BlcmF0b3JfdmlkZW9fc3RhcnRcIixcbiAgICBWSURFT19PUEVSQVRPUl9WSURFT19QTEFZID0gXCJ2aWRlb19vcGVyYXRvcl92aWRlb19wbGF5XCIsXG4gICAgVklERU9fT1BFUkFUT1JfVklERU9fUEFVU0UgPSBcInZpZGVvX29wZXJhdG9yX3ZpZGVvX3BhdXNlXCIsXG4gICAgVklERU9fT1BFUkFUT1JfVklERU9fRU5EID0gXCJ2aWRlb19vcGVyYXRvcl92aWRlb19lbmRcIixcbiAgICBWSURFT19PUEVSQVRPUl9WSURFT19NVVRFID0gXCJ2aWRlb19vcGVyYXRvcl92aWRlb19tdXRlXCIsXG4gICAgQVBQX0RPV05MT0FEX1NUQVRVU19DSEFOR0VEID0nYXBwX2Rvd25sb2FkX3N0YXR1c19jaGFuZ2VkJyxcbiAgICBBUFBfRE9XTkxPQURfTk9OX1dJRklfRE9XTkxPQUQgPSAnYXBwX2Rvd25sb2FkX25vbl93aWZpX2Rvd25sb2FkJ1xufVxuXG5leHBvcnQgZW51bSBWYXN0RXZlbnRzIHtcbiAgICBWQVNUX0xPQURfU1VDQ0VTUyA9ICd2YXN0X2xvYWRfc3VjY2VzcycsXG4gICAgVkFTVF9MT0FEX0ZBSUxFRCA9ICd2YXN0X2xvYWRfZmFpbGVkJyxcbiAgICBWQVNUX1BMQVlfU1RBVEVfQ0hBTkdFRCA9ICd2YXN0X3BsYXlfc3RhdGVfY2hhbmdlZCcsXG4gICAgVkFTVF9WT0xVTUVfQ0hBTkdFRCA9ICd2YXN0X3ZvbHVtZV9jaGFuZ2VkJyxcbiAgICBWQVNUX1NDUkVFTl9WSUVXX0NIQU5HRUQgPSAndmFzdF9zY3JlZW5fdmlld19jaGFuZ2VkJyxcbiAgICBWQVNUX1BST0dSRVNTX0NIQU5HRUQgPSAndmFzdF9wcm9ncmVzc19jaGFuZ2VkJyxcbiAgICBWQVNUX09OX1NVQ0NFU1MgPSAndmFzdF9vbl9zdWNjZXNzJyxcbiAgICBWQVNUX09OX0ZBSUxFRCA9ICd2YXN0X29uX2ZhaWxlZCcsXG4gICAgVkFTVF9BRF9SRUFEWSA9ICd2YXN0X2FkX3JlYWR5JyxcbiAgICBWQVNUX0FEX0ZJTklTSCA9ICd2YXN0X2FkX2ZpbmlzaCcsXG4gICAgVkFTVF9CVUZGRVJfU1RBUlQ9ICd2YXN0X2J1ZmZlcl9zdGFydCcsXG4gICAgVkFTVF9CVUZGRVJfRU5EPSAndmFzdF9idWZmZXJfZW5kJyxcbn1cblxuZXhwb3J0IGVudW0gQWN0aXZhdGVTdHlsZSB7IFx0XG4gICAgQk9UVE9NX0JBTk5FUiA9IDEsXG4gICAgQ09ORklSTV9ESUFMT0cgPSAyXG59XG5leHBvcnQgZW51bSBDcmVhdGl2ZU1hdGNoVHlwZSB7XG4gICAgRVhBQ1QgPSAwLFxuICAgIFNNQVJUPSAxLFxuICAgIFVOS05PV04gPSAyLFxuICAgIEFOWSA9IDMsXG4gICAgTEFORFNDQVBFID0gNCxcbiAgICBQT1JUUkFJVCA9IDUsXG4gICAgU1FVQVJFID0gNlxuICBcbn1cbmV4cG9ydCBlbnVtIEFwcERvd25sb2FkU3RhdHVzIHtcbiAgICBET1dOTE9BRCA9IFwiRE9XTkxPQURcIixcbiAgICBXQUlUSU5HX0ZPUl9XSUZJID0gXCJXQUlUSU5HX0ZPUl9XSUZJXCIsXG4gICAgV0FJVElORyA9IFwiV0FJVElOR1wiLFxuICAgIERPV05MT0FESU5HID0gXCJET1dOTE9BRElOR1wiLFxuICAgIFBBVVNFID0gXCJQQVVTRVwiLFxuICAgIFJFU1VNRSA9IFwiUkVTVU1FXCIsXG4gICAgRE9XTkxPQURFRCA9IFwiRE9XTkxPQURFRFwiLFxuICAgIERPV05MT0FERkFJTEVEID0gXCJET1dOTE9BREZBSUxFRFwiLFxuICAgIElOU1RBTExJTkcgPSBcIklOU1RBTExJTkdcIixcbiAgICBJTlNUQUxMID0gXCJJTlNUQUxMXCIsXG4gICAgSU5TVEFMTEVEID0gXCJJTlNUQUxMRURcIlxuICB9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBJbnRlcmZhY2VzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGludGVyZmFjZSBMYXlvdXRCb3VuZHMge1xuICAgIG1hcmdpbkxlZnQ/OiBudW1iZXI7XG4gICAgbWFyZ2luUmlnaHQ/OiBudW1iZXI7XG4gICAgbWFyZ2luVG9wPzogbnVtYmVyO1xuICAgIG1hcmdpbkJvdHRvbT86IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICBtYXJnaW5MZWZ0PzogbnVtYmVyO1xuICAgIG1hcmdpblJpZ2h0PzogbnVtYmVyO1xuICAgIG1hcmdpblRvcD86IG51bWJlcjtcbiAgICBtYXJnaW5Cb3R0b20/OiBudW1iZXI7XG4gICAgcGFnZVhPZmZzZXQ/OiBudW1iZXI7XG4gICAgcGFnZVlPZmZzZXQ/OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIEFkUGFyYW0ge1xuICAgIGdlbmRlcj86IEdlbmRlcjtcbiAgICBhZENvbnRlbnRDbGFzc2lmaWNhdGlvbj86IEFkQ29udGVudENsYXNzaWZpY2F0aW9uO1xuICAgIHRhZ0ZvclVuZGVyQWdlT2ZQcm9taXNlPzogVW5kZXJBZ2VPZlByb21pc2U7XG4gICAgdGFnRm9yQ2hpbGRQcm90ZWN0aW9uPzogQ2hpbGRQcm90ZWN0aW9uO1xuICAgIG5vblBlcnNvbmFsaXplZEFkPzogTm9uUGVyc29uYWxpemVkQWQ7XG4gICAgYXBwQ291bnRyeT86IHN0cmluZztcbiAgICBhcHBMYW5nPzogc3RyaW5nO1xuICAgIGNvdW50cnlDb2RlPzogc3RyaW5nO1xuICAgIGJlbG9uZ0NvdW50cnlDb2RlPzogc3RyaW5nO1xuICAgIGNvbnNlbnQ/OiBzdHJpbmc7XG4gICAgcmVxdWVzdExvY2F0aW9uPzogYm9vbGVhbjtcbiAgICBkZXRhaWxlZENyZWF0aXZlVHlwZT86IERldGFpbGVkQ3JlYXRpdmVUeXBlW107XG4gICAgbG9jYXRpb24/IDpMb2NhdGlvbixcbiAgICBjb250ZW50QnVuZGxlPyA6IENvbnRlbnRCdW5kbGUsXG59XG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uIHtcbiAgICBsYXQ6IG51bWJlcixcbiAgICBsbmc6IG51bWJlclxufVxuZXhwb3J0IGludGVyZmFjZSBDb250ZW50QnVuZGxle1xuICAgIGNoYW5uZWxDYXRlZ29yeUNvZGU/OiBzdHJpbmcsXG4gICAgdGl0bGU/OiBzdHJpbmcsXG4gICAgdGFncz86IHN0cmluZyxcbiAgICByZWxhdGVkUGVvcGxlPzogc3RyaW5nLFxuICAgIGNvbnRlbnQ/OiBzdHJpbmcsXG4gICAgY29udGVudElEPzogbnVtYmVyLFxuICAgIGNhdGVnb3J5Pzogc3RyaW5nLFxuICAgIHN1YmNhdGVnb3J5Pzogc3RyaW5nLFxuICAgIHRoaXJkQ2F0ZWdvcnk/OiBzdHJpbmdcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSE1TUmVxdWVzdE9wdGlvbnMge1xuICAgIGFkQ29udGVudENsYXNzaWZpY2F0aW9uPzogQWRDb250ZW50Q2xhc3NpZmljYXRpb247XG4gICAgYXBwTGFuZz86IHN0cmluZztcbiAgICBhcHBDb3VudHJ5Pzogc3RyaW5nO1xuICAgIHRhZ0ZvckNoaWxkUHJvdGVjdGlvbj86IENoaWxkUHJvdGVjdGlvbjtcbiAgICB0YWdGb3JVbmRlckFnZU9mUHJvbWlzZT86IFVuZGVyQWdlT2ZQcm9taXNlO1xuICAgIG5vblBlcnNvbmFsaXplZEFkPzogTm9uUGVyc29uYWxpemVkQWQ7XG4gICAgY29uc2VudD86IHN0cmluZztcbiAgICByZXF1ZXN0TG9jYXRpb24/OiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBITVNSZXdhcmQge1xuICAgIHJld2FyZEFtb3VudDogbnVtYmVyO1xuICAgIHJld2FyZE5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSE1TUmV3YXJkVmVyaWZ5Q29uZmlnIHtcbiAgICBkYXRhOiBzdHJpbmc7XG4gICAgdXNlcklkOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIE9haWRSZXN1bHQge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgaXNMaW1pdEFkVHJhY2luZ0VuYWJsZWQ6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIER1cmF0aW9uIHtcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBSb2xsQWRMb2FkZXJQYXJhbXMge1xuICAgIGFkSWQ6IHN0cmluZztcbiAgICB0b3RhbER1cmF0aW9uOiBudW1iZXI7XG4gICAgbWF4Q291bnQ6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVmlkZW9Db25maWd1cmF0aW9uIHtcbiAgICBhdWRpb0ZvY3VzVHlwZT86IEF1ZGlvRm9jdXNUeXBlO1xuICAgIGNsaWNrVG9GdWxsU2NyZWVuUmVxdWVzdD86IGJvb2xlYW47XG4gICAgY3VzdG9taXplT3BlcmF0ZVJlcXVlc3RlZD86IGJvb2xlYW47XG4gICAgaXNTdGFydE11dGVkPzogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmF0aXZlQWRDb25maWd1cmF0aW9uIHtcbiAgICBhZFNpemU6IEFkU2l6ZTtcbiAgICBjaG9pY2VzUG9zaXRpb24/OiBDaG9pY2VzUG9zaXRpb247XG4gICAgbWVkaWFBc3BlY3Q/OiBNZWRpYUFzcGVjdDtcbiAgICBtZWRpYURpcmVjdGlvbj86IE1lZGlhRGlyZWN0aW9uO1xuICAgIHJldHVyblVybHNGb3JJbWFnZXM/OiBib29sZWFuO1xuICAgIHJlcXVlc3RDdXN0b21EaXNsaWtlVGhpc0FkPzogYm9vbGVhbjtcbiAgICByZXF1ZXN0TXVsdGlJbWFnZXM/OiBib29sZWFuO1xuICAgIHZpZGVvQ29uZmlndXJhdGlvbj86IFZpZGVvQ29uZmlndXJhdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWaWRlb09wZXJhdG9yQXNwZWN0UmF0aW8ge1xuICAgIHZpZGVvT3BlcmF0b3JHZXRBc3BlY3RSYXRpbzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdGl2ZUFkTG9hZE9wdGlvbnMge1xuICAgIGFkSWQ/OiBzdHJpbmc7XG4gICAgYWQ/OiBBZFBhcmFtO1xuICAgIG5hdGl2ZUFkT3B0aW9ucz86IE5hdGl2ZUFkQ29uZmlndXJhdGlvbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQWRTaXplIHtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBOYXRpdmVBZE9wdGlvbnMge1xuICAgIGRpdjogc3RyaW5nO1xuICAgIHRlbXBsYXRlPzogTmF0aXZlQWRUZW1wbGF0ZTtcbiAgICBiZz86IENvbG9yO1xufVxuZXhwb3J0IGludGVyZmFjZSBSb2xsQWRMb2FkT3B0aW9ucyB7XG4gICAgZmlsZT86IHN0cmluZztcbiAgICBhZFBhcmFtPzogQWRQYXJhbTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUmVmZXJyZXJEZXRhaWxzIHtcbiAgICByZXNwb25zZUNvZGU/OiBJbnN0YWxsUmVmZXJyZXJSZXNwb25zZXM7XG4gICAgaW5zdGFsbFJlZmVycmVyPzogc3RyaW5nO1xuICAgIHJlZmVycmVyQ2xpY2tUaW1lc3RhbXA/OiBudW1iZXI7XG4gICAgaW5zdGFsbEJlZ2luVGltZXN0YW1wPzogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBDb25zZW50VXBkYXRlUmVzdWx0IHtcbiAgICBjb25zZW50U3RhdHVzPzogQ29uc2VudFN0YXR1cztcbiAgICBpc05lZWRDb25zZW50PzogYm9vbGVhbjtcbiAgICBhZFByb3ZpZGVycz86IEFkUHJvdmlkZXJbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQWRQcm92aWRlciB7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBwcml2YWN5UG9saWN5VXJsPzogc3RyaW5nO1xuICAgIHNlcnZpY2VBcmVhPzogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBTcGxhc2hBZExvYWRPcHRpb25zIHtcbiAgICBhZElkOiBzdHJpbmc7XG4gICAgb3JpZW50YXRpb24/OiBITVNTY3JlZW5PcmllbnRhdGlvbjtcbiAgICBhZFBhcmFtPzogQWRQYXJhbTtcbiAgICBsb2dvQW5jaG9yPzogQW5jaG9yO1xufVxuZXhwb3J0IGludGVyZmFjZSBWYXN0TG9hZE9wdGlvbnMge1xuICAgIGFkUGFyYW0/OiBWYXN0Q29uZmlndXJhdGlvbixcbiAgICBwbGF5ZXJDb25maWc/OiBQbGF5ZXJDb25maWcsXG4gICAgaXNUZXN0QWQ/OiBib29sZWFuLFxuICAgIGlzQWRMb2FkV2l0aEFkc0RhdGE/OiBib29sZWFuLFxuICAgIGlzQ3VzdG9tVmlkZW9QbGF5ZXI/OiBib29sZWFuXG59XG5leHBvcnQgaW50ZXJmYWNlIFZhc3RDb25maWd1cmF0aW9uIHtcbiAgICBhZElkPzogc3RyaW5nLFxuICAgIHRvdGFsRHVyYXRpb24/OiBudW1iZXIsXG4gICAgY3JlYXRpdmVNYXRjaFN0cmF0ZWd5PzogQ3JlYXRpdmVNYXRjaFR5cGUsXG4gICAgYWxsb3dNb2JpbGVUcmFmZmljPzogYm9vbGVhbixcbiAgICBhZE9yaWVudGF0aW9uPzpNZWRpYURpcmVjdGlvbixcbiAgICBtYXhBZFBvZHM/OiBudW1iZXIsXG4gICAgcmVxdWVzdE9wdGlvbj86IEhNU1JlcXVlc3RPcHRpb25zXG59XG5leHBvcnQgaW50ZXJmYWNlIFBsYXllckNvbmZpZyB7XG4gICAgaXNFbmFibGVDdXRvdXQ/OiBib29sZWFuLFxuICAgIGlzRW5hYmxlUG9ydHJhaXQ/OiBib29sZWFuLFxuICAgIGlzRW5hYmxlUm90YXRpb24/OiBib29sZWFuLFxuICAgIGlzU2tpcExpbmVhckFkPzogYm9vbGVhbixcbiAgICBpc0ZvcmNlTXV0ZT86Ym9vbGVhbixcbiAgICBpc0luZHVzdHJ5SWNvblNob3c/OmJvb2xlYW5cbn1cbmV4cG9ydCBpbnRlcmZhY2UgVmFzdFNka0NvbmZpZ3VyYXRpb257XG4gICAgaHR0cENhbGxUaW1lb3V0TXM6bnVtYmVyLFxuICAgIGh0dHBDb25uZWN0VGltZW91dE1zOm51bWJlcixcbiAgICBodHRwS2VlcEFsaXZlRHVyYXRpb25NczpudW1iZXIsXG4gICAgaHR0cFJlYWRUaW1lb3V0TXM6bnVtYmVyLFxuICAgIG1heEh0dHBDb25uZWN0aW9uczpudW1iZXIsXG4gICAgbWF4UmVkaXJlY3RXcmFwcGVyTGltaXQ6bnVtYmVyLFxuICAgIGlzVGVzdDpib29sZWFuLFxuICAgIHZhc3RFdmVudFJldHJ5QmF0Y2hTaXplOm51bWJlcixcbiAgICB2YXN0RXZlbnRSZXRyeUludGVydmFsU2Vjb25kczpudW1iZXIsXG4gICAgdmFzdEV2ZW50UmV0cnlVcGxvYWRUaW1lczpudW1iZXJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIE1vZHVsZXNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0Fkc1wiLFxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzXCIsXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkc1wiLFxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TQWRzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKSBITVNJbnRlcnN0aXRpYWxBZCA9IEhNU0ludGVyc3RpdGlhbEFkO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKSBITVNCYW5uZXJBZCA9IEhNU0Jhbm5lckFkO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKSBITVNTcGxhc2hBZCA9IEhNU1NwbGFzaEFkO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKSBITVNSZXdhcmRBZCA9IEhNU1Jld2FyZEFkO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKSBITVNOYXRpdmVBZCA9IEhNU05hdGl2ZUFkO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKSBITVNSb2xsQWQgPSBITVNSb2xsQWQ7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpIEhNU1Zhc3QgPSBITVNWYXN0O1xuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBvbihldmVudDogc3RyaW5nLCBjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldFNES1ZlcnNpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldFJlcXVlc3RPcHRpb25zKCk6IFByb21pc2U8SE1TUmVxdWVzdE9wdGlvbnM+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldFJlcXVlc3RPcHRpb25zKHJlcXVlc3RPcHRpb25zOiBITVNSZXF1ZXN0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0Q29uc2VudChjb25zZW50OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEFwcEFjdGl2YXRlU3R5bGUoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEFwcEFjdGl2YXRlU3R5bGUoc3R5bGU6bnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRBcHBJbnN0YWxsZWROb3RpZnkoc3RhdHVzOmJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzQXBwSW5zdGFsbGVkTm90aWZ5KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBkaXNhYmxlTG9nZ2VyKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBhZGRUZXN0RGV2aWNlSWQodGVzdERldmljZUlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldFRlc3REZXZpY2VJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0VW5kZXJBZ2VPZlByb21pc2UodW5kZXJBZ2VPZlByb21pc2U6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldENvbnNlbnRTdGF0dXMoY29uc2VudFN0YXR1czogQ29uc2VudFN0YXR1cyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0RGVidWdOZWVkQ29uc2VudChkZWJ1Z05lZWRDb25zZW50OiBEZWJ1Z05lZWRDb25zZW50KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHJlcXVlc3RDb25zZW50VXBkYXRlKCk6IFByb21pc2U8Q29uc2VudFVwZGF0ZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgdmVyaWZ5QWRJZChhZElkOiBzdHJpbmcsIGlzTGltaXRBZFRyYWNraW5nOiBib29sZWFuKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRBZHZlcnRpc2luZ0lkSW5mbygpOiBQcm9taXNlPE9haWRSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHJlZmVycmVyQ2xpZW50U3RhcnRDb25uZWN0aW9uKGlzVGVzdD86IGJvb2xlYW4pOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcmVmZXJyZXJDbGllbnRFbmRDb25uZWN0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcmVmZXJyZXJDbGllbnRJc1JlYWR5KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0SW5zdGFsbFJlZmVycmVyKCk6IFByb21pc2U8UmVmZXJyZXJEZXRhaWxzPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpbml0VmFzdCh2YXN0U2RrQ29uZmlndXJhdGlvbjpWYXN0U2RrQ29uZmlndXJhdGlvbik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0VmFzdFNka0NvbmZpZ3VyYXRpb24oKTogUHJvbWlzZTxWYXN0U2RrQ29uZmlndXJhdGlvbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgdXBkYXRlU2RrU2VydmVyQ29uZmlnKHNsb3RJZDpzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHVzZXJBY2NlcHRBZExpY2Vuc2UoaXNBY2NlcHRMaWNlbnNlOmJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEV2ZW50UHJvY2Vzc29yKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0Fkc1wiLFxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzXCIsXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkcy5ITVNCYW5uZXJBZFwiLFxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TQmFubmVyQWQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBvbihldmVudE5hbWU6IEJhbm5lckFkRXZlbnRzLCBjYWxsYmFjazogKHJlc3VsdD86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgYXN5bmMgY3JlYXRlKGRpdklkOiBzdHJpbmcsIGJvdW5kcz86IExheW91dEJvdW5kcyk6IFByb21pc2U8SE1TQmFubmVyQWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNjcm9sbCgpOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEFkSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEFkSWQoYWRJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRCYW5uZXJBZFNpemUoKTogUHJvbWlzZTxBZFNpemU+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEJhbm5lckFkU2l6ZShiYW5uZXJBZFNpemU6IEJhbm5lckFkU2l6ZSB8IEFkU2l6ZSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QmFja2dyb3VuZENvbG9yKGJnQ29sb3I6IENvbG9yKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRCYW5uZXJSZWZyZXNoKGJhbm5lclJlZnJlc2g6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QWRMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzTG9hZGluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGxvYWRBZChhZFBhcmFtPzogQWRQYXJhbSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcGF1c2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZXN1bWUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0SGVpZ2h0KCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRIZWlnaHRQeCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0V2lkdGgoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldFdpZHRoUHgoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzQXV0b0hlaWdodFNpemUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0R5bmFtaWNTaXplKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNGdWxsV2lkdGhTaXplKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0Q3VycmVudERpcmVjdGlvbkJhbm5lclNpemUod2lkdGg6IG51bWJlcik6IFByb21pc2U8QWRTaXplPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRMYW5kc2NhcGVCYW5uZXJTaXplKHdpZHRoOiBudW1iZXIpOiBQcm9taXNlPEFkU2l6ZT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0UG9ydHJhaXRCYW5uZXJTaXplKHdpZHRoOiBudW1iZXIpOiBQcm9taXNlPEFkU2l6ZT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0Fkc1wiLFxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzXCIsXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkcy5ITVNJbnRlcnN0aXRpYWxBZFwiLFxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TSW50ZXJzdGl0aWFsQWQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBvbihcbiAgICAgICAgZXZlbnROYW1lOiBJbnRlcnN0aXRpYWxBZEV2ZW50cyxcbiAgICAgICAgY2FsbGJhY2s6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWRcbiAgICApOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGFzeW5jIGNyZWF0ZSh1c2VBY3Rpdml0eTogYm9vbGVhbik6IFByb21pc2U8SE1TSW50ZXJzdGl0aWFsQWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNjcm9sbCgpOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNob3coKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0xvYWRlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzTG9hZGluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGxvYWRBZChhZFBhcmFtPzogQWRQYXJhbSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QWRJZChhZElkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEFkSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEFkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRSZXdhcmRBZExpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgdmlkZW9PcGVyYXRvckdldEFzcGVjdFJhdGlvKCk6IFByb21pc2U8VmlkZW9PcGVyYXRvckFzcGVjdFJhdGlvPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICB2aWRlb09wZXJhdG9ySGFzVmlkZW8oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICB2aWRlb09wZXJhdG9ySXNDdXN0b21pemVPcGVyYXRlRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHZpZGVvT3BlcmF0b3JJc011dGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgdmlkZW9PcGVyYXRvck11dGUobXV0ZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgdmlkZW9PcGVyYXRvclBhdXNlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgdmlkZW9PcGVyYXRvclBsYXkoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICB2aWRlb09wZXJhdG9yU3RvcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogXCJITVNBZHNcIixcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc1wiLFxuICAgIHBsdWdpblJlZjogXCJITVNBZHMuSE1TTmF0aXZlQWRcIixcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU05hdGl2ZUFkIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgb24oZXZlbnROYW1lOiBOYXRpdmVBZEV2ZW50cywgY2FsbGJhY2s6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGFzeW5jIGNyZWF0ZShcbiAgICAgICAgb3B0aW9uczogTmF0aXZlQWRPcHRpb25zLFxuICAgICAgICBib3VuZHM/OiBMYXlvdXRCb3VuZHNcbiAgICApOiBQcm9taXNlPEhNU05hdGl2ZUFkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBsb2FkQWQob3B0aW9ucz86IE5hdGl2ZUFkTG9hZE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNob3coKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0xvYWRpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZGlzbGlrZUFkKGRpc2xpa2VSZWFzb246IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QWxsb3dDdXN0b21DbGljaygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEFkU291cmNlKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXREZXNjcmlwdGlvbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0Q2FsbFRvQWN0aW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXREaXNsaWtlQWRSZWFzb25zKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzQ3VzdG9tQ2xpY2tBbGxvd2VkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNDdXN0b21EaXNsaWtlVGhpc0FkRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHJlY29yZENsaWNrRXZlbnQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZWNvcmRJbXByZXNzaW9uRXZlbnQoaW1wcmVzc2lvbkRhdGE6IGFueSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0VW5pcXVlSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldERpc2xpa2VBZExpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ290b1doeVRoaXNBZFBhZ2UodXNlVmlldzogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0QWRTaWduKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRUaXRsZSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0V2h5VGhpc0FkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZWNvcmRTaG93U3RhcnRFdmVudChzaG93U3RhcnREYXRhOiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIG9uQWRDbG9zZShrZXl3b3Jkczogc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldE5hdGl2ZUFkQ29uZmlndXJhdGlvbigpOiBQcm9taXNlPE5hdGl2ZUFkQ29uZmlndXJhdGlvbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0T25Eb3dubG9hZFN0YXR1c0NoYW5nZWRMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldE9uTm9uV2lmaURvd25sb2FkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRTaG93UGVybWlzc2lvbkRpYWxvZyhzaG93OmJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEFsbG93ZWROb25XaWZpTmV0d29yayhhbGxvd2VkOmJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGNhbmNlbCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGNvbnRpbnVlRG93bmxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6IFwiSE1TQWRzXCIsXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1hZHNcIixcbiAgICBwbHVnaW5SZWY6IFwiSE1TQWRzLkhNU1Jld2FyZEFkXCIsXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNSZXdhcmRBZCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIG9uKGV2ZW50TmFtZTogUmV3YXJkQWRFdmVudHMsIGNhbGxiYWNrOiAocmVzdWx0PzogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBhc3luYyBjcmVhdGUoYWRJZDogc3RyaW5nKTogUHJvbWlzZTxITVNSZXdhcmRBZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2hvdyh1c2VBY3Rpdml0eTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcmVzdW1lKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcGF1c2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgbG9hZEFkV2l0aEFkSWQoYWRJZDpzdHJpbmcsYWRQYXJhbT86QWRQYXJhbSk6IFByb21pc2U8dm9pZD57XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgbG9hZEFkKGFkUGFyYW0/OiBBZFBhcmFtKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0xvYWRlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldERhdGEoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldFVzZXJJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0UmV3YXJkKCk6IFByb21pc2U8SE1TUmV3YXJkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXREYXRhKGRhdGE6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0SW1tZXJzaXZlKGltbWVyc2l2ZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0VXNlcklkKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRSZXdhcmRWZXJpZnlDb25maWcoY29uZmlnOiBITVNSZXdhcmRWZXJpZnlDb25maWcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldFJld2FyZFZlcmlmeUNvbmZpZygpOiBQcm9taXNlPEhNU1Jld2FyZFZlcmlmeUNvbmZpZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0T25NZXRhZGF0YUNoYW5nZWRMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldFJld2FyZEFkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRNb2JpbGVEYXRhQWxlcnRTd2l0Y2goYWxlcnRTd2l0Y2g6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogXCJITVNBZHNcIixcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc1wiLFxuICAgIHBsdWdpblJlZjogXCJITVNBZHMuSE1TUm9sbEFkXCIsXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNSb2xsQWQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBvbihldmVudE5hbWU6IFJvbGxBZEV2ZW50cywgY2FsbGJhY2s6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGFzeW5jIGNyZWF0ZShcbiAgICAgICAgcGFyYW1zOiBSb2xsQWRMb2FkZXJQYXJhbXMsXG4gICAgICAgIGRpdklkOiBzdHJpbmcsXG4gICAgICAgIGJvdW5kcz86IExheW91dEJvdW5kc1xuICAgICk6IFByb21pc2U8SE1TUm9sbEFkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzY3JvbGwoKTogdm9pZCB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBsb2FkQWQob3B0aW9uczogUm9sbEFkTG9hZE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzTG9hZGluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGRlc3Ryb3koKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBwYXVzZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzUGxheWluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIG11dGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICB1bm11dGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBvbkNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcGxheSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHN0b3AoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZW1vdmVJbnN0cmVhbU1lZGlhQ2hhbmdlTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZW1vdmVNZWRpYU11dGVMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHJlbW92ZUluc3RyZWFtTWVkaWFTdGF0ZUxpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0SW5zdHJlYW1BZHMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRJbnN0cmVhbU1lZGlhQ2hhbmdlTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRNZWRpYU11dGVMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEluc3RyZWFtTWVkaWFTdGF0ZUxpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0T25JbnN0cmVhbUFkQ2xpY2tMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEFkU291cmNlKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXREdXJhdGlvbigpOiBQcm9taXNlPER1cmF0aW9uPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRXaHlUaGlzQWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEFkU2lnbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNDbGlja2VkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNFeHBpcmVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNJbWFnZUFkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNTaG93bigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzVmlkZW9BZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldENhbGxUb0FjdGlvbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0Fkc1wiLFxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzXCIsXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkcy5ITVNTcGxhc2hBZFwiLFxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TU3BsYXNoQWQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBvbihldmVudE5hbWU6IFNwbGFzaEFkRXZlbnRzLCBjYWxsYmFjazogKHJlc3VsdD86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgYXN5bmMgY3JlYXRlKCk6IFByb21pc2U8SE1TU3BsYXNoQWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldExvZ28oZmlsZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRXaWRlU2xvZ2FuUmVzSWQod2lkZVNsb2dhblJlc0lkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldFNsb2dhblJlc0lkKHNsb2dhblJlc0lkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGxvYWQob3B0aW9uczogU3BsYXNoQWRMb2FkT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcHJlbG9hZEFkKG9wdGlvbnM6IFNwbGFzaEFkTG9hZE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGRlc3Ryb3lWaWV3KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcGF1c2VWaWV3KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcmVzdW1lVmlldygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzTG9hZGluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzTG9hZGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QWREaXNwbGF5TGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRBdWRpb0ZvY3VzVHlwZShhdWRpb0ZvY3VzVHlwZTogQXVkaW9Gb2N1c1R5cGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogXCJITVNBZHNcIixcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc1wiLFxuICAgIHBsdWdpblJlZjogXCJITVNBZHMuSE1TVmFzdFwiLFxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TVmFzdCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIG9uKGV2ZW50TmFtZTogVmFzdEV2ZW50cywgY2FsbGJhY2s6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGFzeW5jIGNyZWF0ZShcbiAgICAgICAgZGl2SWQ6IHN0cmluZyxcbiAgICAgICAgYm91bmRzPzogTGF5b3V0Qm91bmRzXG4gICAgKTogUHJvbWlzZTxITVNWYXN0PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzY3JvbGwoKTogdm9pZCB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBsb2FkQWQob3B0aW9uczogVmFzdExvYWRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZXN1bWUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBwYXVzZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHJlbGVhc2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICB0b2dnbGVNdXRlU3RhdGUoaXNNdXRlOmJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc3RhcnRPclBhdXNlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG59ICAgICJdfQ==