/*
    Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.

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

import { __decorate, __extends } from "tslib";
import { Injectable } from "@angular/core";
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from "@awesome-cordova-plugins/core";
import * as i0 from "@angular/core";
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
export var AutoPlayNetType;
(function (AutoPlayNetType) {
    AutoPlayNetType[AutoPlayNetType["WIFI_ONLY"] = 0] = "WIFI_ONLY";
    AutoPlayNetType[AutoPlayNetType["BOTH_WIFI_AND_DATA"] = 1] = "BOTH_WIFI_AND_DATA";
    AutoPlayNetType[AutoPlayNetType["FORBID_AUTO_PLAY"] = 2] = "FORBID_AUTO_PLAY";
})(AutoPlayNetType || (AutoPlayNetType = {}));
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
    HMSAds.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSAds, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HMSAds.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSAds });
    HMSAds.pluginName = "HMSAds";
    HMSAds.plugin = "cordova-plugin-hms-ads";
    HMSAds.pluginRef = "HMSAds";
    HMSAds.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSAds.platforms = ["Android"];
    HMSAds = __decorate([], HMSAds);
    return HMSAds;
}(AwesomeCordovaNativePlugin));
export { HMSAds };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSAds, decorators: [{
            type: Injectable
        }], propDecorators: { HMSInterstitialAd: [], HMSBannerAd: [], HMSSplashAd: [], HMSRewardAd: [], HMSNativeAd: [], HMSRollAd: [], HMSVast: [], on: [], init: [], getSDKVersion: [], getRequestOptions: [], setRequestOptions: [], setConsent: [], getAppActivateStyle: [], setAppActivateStyle: [], setAppInstalledNotify: [], isAppInstalledNotify: [], enableLogger: [], disableLogger: [], addTestDeviceId: [], getTestDeviceId: [], setUnderAgeOfPromise: [], setConsentStatus: [], setDebugNeedConsent: [], requestConsentUpdate: [], verifyAdId: [], getAdvertisingIdInfo: [], referrerClientStartConnection: [], referrerClientEndConnection: [], referrerClientIsReady: [], getInstallReferrer: [], initVast: [], getVastSdkConfiguration: [], updateSdkServerConfig: [], userAcceptAdLicense: [], getEventProcessor: [] } });
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
    HMSBannerAd.prototype.getBiddingInfo = function () { return cordova(this, "getBiddingInfo", { "otherPromise": true }, arguments); };
    HMSBannerAd.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSBannerAd, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HMSBannerAd.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSBannerAd });
    HMSBannerAd.pluginName = "HMSAds";
    HMSBannerAd.plugin = "cordova-plugin-hms-ads";
    HMSBannerAd.pluginRef = "HMSAds.HMSBannerAd";
    HMSBannerAd.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSBannerAd.platforms = ["Android"];
    HMSBannerAd = __decorate([], HMSBannerAd);
    return HMSBannerAd;
}(AwesomeCordovaNativePlugin));
export { HMSBannerAd };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSBannerAd, decorators: [{
            type: Injectable
        }], propDecorators: { on: [], create: [], scroll: [], getAdId: [], setAdId: [], getBannerAdSize: [], setBannerAdSize: [], setBackgroundColor: [], setBannerRefresh: [], setAdListener: [], isLoading: [], loadAd: [], pause: [], resume: [], destroy: [], getHeight: [], getHeightPx: [], getWidth: [], getWidthPx: [], isAutoHeightSize: [], isDynamicSize: [], isFullWidthSize: [], getCurrentDirectionBannerSize: [], getLandscapeBannerSize: [], getPortraitBannerSize: [], getBiddingInfo: [] } });
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
    HMSInterstitialAd.prototype.setVideoConfiguration = function (videoConfiguration) { return cordova(this, "setVideoConfiguration", { "otherPromise": true }, arguments); };
    HMSInterstitialAd.prototype.getBiddingInfo = function () { return cordova(this, "getBiddingInfo", { "otherPromise": true }, arguments); };
    HMSInterstitialAd.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSInterstitialAd, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HMSInterstitialAd.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSInterstitialAd });
    HMSInterstitialAd.pluginName = "HMSAds";
    HMSInterstitialAd.plugin = "cordova-plugin-hms-ads";
    HMSInterstitialAd.pluginRef = "HMSAds.HMSInterstitialAd";
    HMSInterstitialAd.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSInterstitialAd.platforms = ["Android"];
    HMSInterstitialAd = __decorate([], HMSInterstitialAd);
    return HMSInterstitialAd;
}(AwesomeCordovaNativePlugin));
export { HMSInterstitialAd };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSInterstitialAd, decorators: [{
            type: Injectable
        }], propDecorators: { on: [], create: [], scroll: [], show: [], isLoaded: [], isLoading: [], loadAd: [], setAdId: [], getAdId: [], setAdListener: [], setRewardAdListener: [], videoOperatorGetAspectRatio: [], videoOperatorHasVideo: [], videoOperatorIsCustomizeOperateEnabled: [], videoOperatorIsMuted: [], videoOperatorMute: [], videoOperatorPause: [], videoOperatorPlay: [], videoOperatorStop: [], setVideoConfiguration: [], getBiddingInfo: [] } });
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
    HMSNativeAd.prototype.getAppInfo = function () { return cordova(this, "getAppInfo", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.getPromoteInfo = function () { return cordova(this, "getPromoteInfo", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.showAppDetailPage = function () { return cordova(this, "showAppDetailPage", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.showPrivacyPolicy = function () { return cordova(this, "showPrivacyPolicy", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.showPermissionPage = function () { return cordova(this, "showPermissionPage", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.isTransparencyOpen = function () { return cordova(this, "isTransparencyOpen", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.getTransparencyTplUrl = function () { return cordova(this, "getTransparencyTplUrl", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.getInterActionType = function () { return cordova(this, "getInterActionType", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.setVideoConfiguration = function (videoConfiguration) { return cordova(this, "setVideoConfiguration", { "otherPromise": true }, arguments); };
    HMSNativeAd.prototype.getBiddingInfo = function () { return cordova(this, "getBiddingInfo", { "otherPromise": true }, arguments); };
    HMSNativeAd.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSNativeAd, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HMSNativeAd.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSNativeAd });
    HMSNativeAd.pluginName = "HMSAds";
    HMSNativeAd.plugin = "cordova-plugin-hms-ads";
    HMSNativeAd.pluginRef = "HMSAds.HMSNativeAd";
    HMSNativeAd.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSNativeAd.platforms = ["Android"];
    HMSNativeAd = __decorate([], HMSNativeAd);
    return HMSNativeAd;
}(AwesomeCordovaNativePlugin));
export { HMSNativeAd };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSNativeAd, decorators: [{
            type: Injectable
        }], propDecorators: { on: [], create: [], loadAd: [], show: [], isLoading: [], destroy: [], dislikeAd: [], setAllowCustomClick: [], getAdSource: [], getDescription: [], getCallToAction: [], getDislikeAdReasons: [], isCustomClickAllowed: [], isCustomDislikeThisAdEnabled: [], recordClickEvent: [], recordImpressionEvent: [], getUniqueId: [], setDislikeAdListener: [], gotoWhyThisAdPage: [], getAdSign: [], getTitle: [], getWhyThisAd: [], recordShowStartEvent: [], onAdClose: [], getNativeAdConfiguration: [], setOnDownloadStatusChangedListener: [], setOnNonWifiDownloadListener: [], setShowPermissionDialog: [], setAllowedNonWifiNetwork: [], cancel: [], continueDownload: [], showAdvertiserInfoDialog: [], hideAdvertiserInfoDialog: [], hasAdvertiserInfo: [], getAdvertiserInfo: [], getAppInfo: [], getPromoteInfo: [], showAppDetailPage: [], showPrivacyPolicy: [], showPermissionPage: [], isTransparencyOpen: [], getTransparencyTplUrl: [], getInterActionType: [], setVideoConfiguration: [], getBiddingInfo: [] } });
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
    HMSRewardAd.prototype.setVideoConfiguration = function (videoConfiguration) { return cordova(this, "setVideoConfiguration", { "otherPromise": true }, arguments); };
    HMSRewardAd.prototype.getBiddingInfo = function () { return cordova(this, "getBiddingInfo", { "otherPromise": true }, arguments); };
    HMSRewardAd.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSRewardAd, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HMSRewardAd.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSRewardAd });
    HMSRewardAd.pluginName = "HMSAds";
    HMSRewardAd.plugin = "cordova-plugin-hms-ads";
    HMSRewardAd.pluginRef = "HMSAds.HMSRewardAd";
    HMSRewardAd.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSRewardAd.platforms = ["Android"];
    HMSRewardAd = __decorate([], HMSRewardAd);
    return HMSRewardAd;
}(AwesomeCordovaNativePlugin));
export { HMSRewardAd };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSRewardAd, decorators: [{
            type: Injectable
        }], propDecorators: { on: [], create: [], show: [], resume: [], pause: [], destroy: [], loadAdWithAdId: [], loadAd: [], isLoaded: [], getData: [], getUserId: [], getReward: [], setData: [], setImmersive: [], setUserId: [], setRewardVerifyConfig: [], getRewardVerifyConfig: [], setOnMetadataChangedListener: [], setRewardAdListener: [], setMobileDataAlertSwitch: [], setVideoConfiguration: [], getBiddingInfo: [] } });
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
    HMSRollAd.prototype.getBiddingInfo = function () { return cordova(this, "getBiddingInfo", { "otherPromise": true }, arguments); };
    HMSRollAd.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSRollAd, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HMSRollAd.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSRollAd });
    HMSRollAd.pluginName = "HMSAds";
    HMSRollAd.plugin = "cordova-plugin-hms-ads";
    HMSRollAd.pluginRef = "HMSAds.HMSRollAd";
    HMSRollAd.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSRollAd.platforms = ["Android"];
    HMSRollAd = __decorate([], HMSRollAd);
    return HMSRollAd;
}(AwesomeCordovaNativePlugin));
export { HMSRollAd };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSRollAd, decorators: [{
            type: Injectable
        }], propDecorators: { on: [], create: [], scroll: [], loadAd: [], isLoading: [], destroy: [], pause: [], isPlaying: [], mute: [], unmute: [], onClose: [], play: [], stop: [], removeInstreamMediaChangeListener: [], removeMediaMuteListener: [], removeInstreamMediaStateListener: [], setInstreamAds: [], setInstreamMediaChangeListener: [], setMediaMuteListener: [], setInstreamMediaStateListener: [], setOnInstreamAdClickListener: [], getAdSource: [], getDuration: [], getWhyThisAd: [], getAdSign: [], isClicked: [], isExpired: [], isImageAd: [], isShown: [], isVideoAd: [], getCallToAction: [], showAdvertiserInfoDialog: [], hideAdvertiserInfoDialog: [], hasAdvertiserInfo: [], getAdvertiserInfo: [], isTransparencyOpen: [], getTransparencyTplUrl: [], showTransparencyDialog: [], hideTransparencyDialog: [], getBiddingInfo: [] } });
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
    HMSSplashAd.prototype.getBiddingInfo = function () { return cordova(this, "getBiddingInfo", { "otherPromise": true }, arguments); };
    HMSSplashAd.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSSplashAd, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HMSSplashAd.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSSplashAd });
    HMSSplashAd.pluginName = "HMSAds";
    HMSSplashAd.plugin = "cordova-plugin-hms-ads";
    HMSSplashAd.pluginRef = "HMSAds.HMSSplashAd";
    HMSSplashAd.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSSplashAd.platforms = ["Android"];
    HMSSplashAd = __decorate([], HMSSplashAd);
    return HMSSplashAd;
}(AwesomeCordovaNativePlugin));
export { HMSSplashAd };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSSplashAd, decorators: [{
            type: Injectable
        }], propDecorators: { on: [], create: [], setLogo: [], setWideSloganResId: [], setSloganResId: [], load: [], preloadAd: [], destroyView: [], pauseView: [], resumeView: [], isLoading: [], isLoaded: [], setAdDisplayListener: [], setAudioFocusType: [], getBiddingInfo: [] } });
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
    HMSVast.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSVast, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HMSVast.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSVast });
    HMSVast.pluginName = "HMSAds";
    HMSVast.plugin = "cordova-plugin-hms-ads";
    HMSVast.pluginRef = "HMSAds.HMSVast";
    HMSVast.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSVast.platforms = ["Android"];
    HMSVast = __decorate([], HMSVast);
    return HMSVast;
}(AwesomeCordovaNativePlugin));
export { HMSVast };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSVast, decorators: [{
            type: Injectable
        }], propDecorators: { on: [], create: [], scroll: [], loadAd: [], resume: [], pause: [], release: [], toggleMuteState: [], startOrPause: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmF0aXZlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7QUFFRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sK0VBS04sTUFBTSwrQkFBK0IsQ0FBQzs7QUFFdkMsK0RBQStEO0FBQy9ELFlBQVk7QUFDWiwrREFBK0Q7QUFFL0QsTUFBTSxDQUFOLElBQVksaUJBVVg7QUFWRCxXQUFZLGlCQUFpQjtJQUN6Qiw2RUFBa0IsQ0FBQTtJQUNsQixpR0FBNEIsQ0FBQTtJQUM1Qiw2RkFBMEIsQ0FBQTtJQUMxQiw2RUFBa0IsQ0FBQTtJQUNsQix1RkFBdUIsQ0FBQTtJQUN2QixpRkFBb0IsQ0FBQTtJQUNwQixtR0FBNkIsQ0FBQTtJQUM3QixtR0FBNkIsQ0FBQTtJQUM3QixpSEFBb0MsQ0FBQTtBQUN4QyxDQUFDLEVBVlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQVU1QjtBQUNELE1BQU0sQ0FBTixJQUFZLHdCQUtYO0FBTEQsV0FBWSx3QkFBd0I7SUFDaEMsaUhBQTZCLENBQUE7SUFDN0IsNkdBQTJCLENBQUE7SUFDM0IscUhBQStCLENBQUE7SUFDL0IscUhBQStCLENBQUE7QUFDbkMsQ0FBQyxFQUxXLHdCQUF3QixLQUF4Qix3QkFBd0IsUUFLbkM7QUFDRCxNQUFNLENBQU4sSUFBWSx1QkFNWDtBQU5ELFdBQVksdUJBQXVCO0lBQy9CLDREQUFpQyxDQUFBO0lBQ2pDLDhEQUFtQyxDQUFBO0lBQ25DLGlFQUFzQyxDQUFBO0lBQ3RDLDREQUFpQyxDQUFBO0lBQ2pDLDREQUFpQyxDQUFBO0FBQ3JDLENBQUMsRUFOVyx1QkFBdUIsS0FBdkIsdUJBQXVCLFFBTWxDO0FBQ0QsTUFBTSxDQUFOLElBQVksTUFJWDtBQUpE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ZixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIENvcHlyaWdodCAyMDIwLTIwMjQuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxyXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgICBQbHVnaW4sXHJcbiAgICBDb3Jkb3ZhLFxyXG4gICAgQ29yZG92YVByb3BlcnR5LFxyXG4gICAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW5cclxufSBmcm9tIFwiQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmVcIjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBDb25zdGFudHNcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgZW51bSBBZFBhcmFtRXJyb3JDb2RlcyB7XHJcbiAgICBBRF9QQVJBTV9JTk5FUiA9IDAsXHJcbiAgICBBRF9QQVJBTV9JTlZBTElEX1JFUVVFU1QgPSAxLFxyXG4gICAgQURfUEFSQU1fTkVUV09SS19FUlJPUiA9IDIsXHJcbiAgICBBRF9QQVJBTV9OT19BRCA9IDMsXHJcbiAgICBBRF9QQVJBTV9BRF9MT0FESU5HID0gNCxcclxuICAgIEFEX1BBUkFNX0xPV19BUEkgPSA1LFxyXG4gICAgQURfUEFSQU1fQkFOTkVSX0FEX0VYUElSRSA9IDYsXHJcbiAgICBBRF9QQVJBTV9CQU5ORVJfQURfQ0FOQ0VMID0gNyxcclxuICAgIEFEX1BBUkFNX0hNU19OT1RfU1VQUE9SVF9TRVRfQVBQID0gOCxcclxufVxyXG5leHBvcnQgZW51bSBSZXdhcmRBZFN0YXR1c0Vycm9yQ29kZXMge1xyXG4gICAgUkVXQVJEX0FEX1NUQVRVU19JTlRFUk5BTCA9IDAsXHJcbiAgICBSRVdBUkRfQURfU1RBVFVTX1JFVVNFRCA9IDEsXHJcbiAgICBSRVdBUkRfQURfU1RBVFVTX05PVF9MT0FERUQgPSAyLFxyXG4gICAgUkVXQVJEX0FEX1NUQVRVU19CQUNLR1JPVU5EID0gMyxcclxufVxyXG5leHBvcnQgZW51bSBBZENvbnRlbnRDbGFzc2lmaWNhdGlvbiB7XHJcbiAgICBBRF9DT05URU5UX0NMQVNTSUZJQ0FUSU9OX0EgPSBcIkFcIixcclxuICAgIEFEX0NPTlRFTlRfQ0xBU1NJRklDQVRJT05fUEkgPSBcIlBJXCIsXHJcbiAgICBBRF9DT05URU5UX0NMQVNTSUZJQ0FUSU9OX1VOS05PV04gPSBcIlwiLFxyXG4gICAgQURfQ09OVEVOVF9DTEFTU0lGSUNBVElPTl9KID0gXCJKXCIsXHJcbiAgICBBRF9DT05URU5UX0NMQVNTSUZJQ0FUSU9OX1cgPSBcIldcIixcclxufVxyXG5leHBvcnQgZW51bSBHZW5kZXIge1xyXG4gICAgRkVNQUxFID0gMixcclxuICAgIE1BTEUgPSAxLFxyXG4gICAgVU5LTk9XTiA9IDAsXHJcbn1cclxuZXhwb3J0IGVudW0gTm9uUGVyc29uYWxpemVkQWQge1xyXG4gICAgQUxMT1dfQUxMID0gMCxcclxuICAgIEFMTE9XX05PTl9QRVJTT05BTElaRUQgPSAxLFxyXG59XHJcbmV4cG9ydCBlbnVtIENoaWxkUHJvdGVjdGlvbiB7XHJcbiAgICBUQUdfRk9SX0NISUxEX1BST1RFQ1RJT05fVU5TUEVDSUZJRUQgPSAtMSxcclxuICAgIFRBR19GT1JfQ0hJTERfUFJPVEVDVElPTl9GQUxTRSA9IDAsXHJcbiAgICBUQUdfRk9SX0NISUxEX1BST1RFQ1RJT05fVFJVRSA9IDEsXHJcbn1cclxuZXhwb3J0IGVudW0gVW5kZXJBZ2VPZlByb21pc2Uge1xyXG4gICAgUFJPTUlTRV9VTlNQRUNJRklFRCA9IC0xLFxyXG4gICAgUFJPTUlTRV9GQUxTRSA9IDAsXHJcbiAgICBQUk9NSVNFX1RSVUUgPSAxLFxyXG59XHJcbmV4cG9ydCBlbnVtIEJhbm5lckFkU2l6ZSB7XHJcbiAgICBCQU5ORVJfU0laRV8zNjBfNTcgPSBcIkJBTk5FUl9TSVpFXzM2MF81N1wiLFxyXG4gICAgQkFOTkVSX1NJWkVfMzYwXzE0NCA9IFwiQkFOTkVSX1NJWkVfMzYwXzE0NFwiLFxyXG4gICAgQkFOTkVSX1NJWkVfMTYwXzYwMCA9IFwiQkFOTkVSX1NJWkVfMTYwXzYwMFwiLFxyXG4gICAgQkFOTkVSX1NJWkVfMzAwXzI1MCA9IFwiQkFOTkVSX1NJWkVfMzAwXzI1MFwiLFxyXG4gICAgQkFOTkVSX1NJWkVfMzIwXzEwMCA9IFwiQkFOTkVSX1NJWkVfMzIwXzEwMFwiLFxyXG4gICAgQkFOTkVSX1NJWkVfMzIwXzUwID0gXCJCQU5ORVJfU0laRV8zMjBfNTBcIixcclxuICAgIEJBTk5FUl9TSVpFXzQ2OF82MCA9IFwiQkFOTkVSX1NJWkVfNDY4XzYwXCIsXHJcbiAgICBCQU5ORVJfU0laRV83MjhfOTAgPSBcIkJBTk5FUl9TSVpFXzcyOF85MFwiLFxyXG4gICAgQkFOTkVSX1NJWkVfRFlOQU1JQyA9IFwiQkFOTkVSX1NJWkVfRFlOQU1JQ1wiLFxyXG4gICAgQkFOTkVSX1NJWkVfSU5WQUxJRCA9IFwiQkFOTkVSX1NJWkVfSU5WQUxJRFwiLFxyXG4gICAgQkFOTkVSX1NJWkVfU01BUlQgPSBcIkJBTk5FUl9TSVpFX1NNQVJUXCIsXHJcbiAgICBCQU5ORVJfU0laRV9BRFZBTkNFRCA9IFwiQkFOTkVSX1NJWkVfQURWQU5DRURcIixcclxufVxyXG5leHBvcnQgZW51bSBITVNTY3JlZW5PcmllbnRhdGlvbiB7XHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fTEFORFNDQVBFID0gMCxcclxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9VTlNQRUNJRklFRCA9IC0xLFxyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1BPUlRSQUlUID0gMSxcclxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9VU0VSID0gMixcclxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9CRUhJTkQgPSAzLFxyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1NFTlNPUiA9IDQsXHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fTk9TRU5TT1IgPSA1LFxyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1NFTlNPUl9MQU5EU0NBUEUgPSA2LFxyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1NFTlNPUl9QT1JUUkFJVCA9IDcsXHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fUkVWRVJTRV9MQU5EU0NBUEUgPSA4LFxyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1JFVkVSU0VfUE9SVFJBSVQgPSA5LFxyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX0ZVTExfU0VOU09SID0gMTAsXHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fVVNFUl9MQU5EU0NBUEUgPSAxMSxcclxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9VU0VSX1BPUlRSQUlUID0gMTIsXHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fRlVMTF9VU0VSID0gMTMsXHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fTE9DS0VEID0gMTQsXHJcbn1cclxuZXhwb3J0IGVudW0gRGVidWdOZWVkQ29uc2VudCB7XHJcbiAgICBDT05TRU5UX0RFQlVHX0RJU0FCTEVEID0gMCxcclxuICAgIENPTlNFTlRfREVCVUdfTkVFRF9DT05TRU5UID0gMSxcclxuICAgIENPTlNFTlRfREVCVUdfTk9UX05FRURfQ09OU0VOVCA9IDIsXHJcbn1cclxuZXhwb3J0IGVudW0gQ29uc2VudFN0YXR1cyB7XHJcbiAgICBDT05TRU5UX1BFUlNPTkFMSVpFRCA9IDAsXHJcbiAgICBDT05TRU5UX05PTl9QRVJTT05BTElaRUQgPSAxLFxyXG4gICAgQ09OU0VOVF9VTktOT1dOID0gMixcclxufVxyXG5leHBvcnQgZW51bSBBdWRpb0ZvY3VzVHlwZSB7XHJcbiAgICBHQUlOX0FVRElPX0ZPQ1VTX0FMTCA9IDAsXHJcbiAgICBOT1RfR0FJTl9BVURJT19GT0NVU19XSEVOX01VVEUgPSAxLFxyXG4gICAgTk9UX0dBSU5fQVVESU9fRk9DVVNfQUxMID0gMixcclxufVxyXG5leHBvcnQgZW51bSBNZWRpYUFzcGVjdCB7XHJcbiAgICBBU1BFQ1RfQU5ZID0gMSxcclxuICAgIEFTUEVDVF9DVVNUT01fU0laRSA9IC0xLFxyXG4gICAgQVNQRUNUX0xBTkRTQ0FQRSA9IDIsXHJcbiAgICBBU1BFQ1RfUE9SVFJBSVQgPSAzLFxyXG4gICAgQVNQRUNUX1NRVUFSRSA9IDQsXHJcbiAgICBBU1BFQ1RfVU5LTk9XTiA9IDAsXHJcbn1cclxuZXhwb3J0IGVudW0gQ2hvaWNlc1Bvc2l0aW9uIHtcclxuICAgIEJPVFRPTV9MRUZUID0gMyxcclxuICAgIEJPVFRPTV9SSUdIVCA9IDIsXHJcbiAgICBJTlZJU0lCTEUgPSA0LFxyXG4gICAgVE9QX0xFRlQgPSAwLFxyXG4gICAgVE9QX1JJR0hUID0gMSxcclxufVxyXG5leHBvcnQgZW51bSBNZWRpYURpcmVjdGlvbiB7XHJcbiAgICBBTlkgPSAwLFxyXG4gICAgTEFORFNDQVBFID0gMixcclxuICAgIFBPUlRSQUlUID0gMSxcclxufVxyXG5leHBvcnQgZW51bSBOYXRpdmVBZFRlbXBsYXRlIHtcclxuICAgIE5BVElWRV9BRF9TTUFMTF9URU1QTEFURSA9IFwiTkFUSVZFX0FEX1NNQUxMX1RFTVBMQVRFXCIsXHJcbiAgICBOQVRJVkVfQURfRlVMTF9URU1QTEFURSA9IFwiTkFUSVZFX0FEX0ZVTExfVEVNUExBVEVcIixcclxuICAgIE5BVElWRV9BRF9CQU5ORVJfVEVNUExBVEUgPSBcIk5BVElWRV9BRF9CQU5ORVJfVEVNUExBVEVcIixcclxuICAgIE5BVElWRV9BRF9WSURFT19URU1QTEFURSA9IFwiTkFUSVZFX0FEX1ZJREVPX1RFTVBMQVRFXCIsXHJcbiAgICBOQVRJVkVfQURfV0lUSF9BUFBfRE9XTkxPQURfQlROX1RFTVBMQVRFID0gXCJOQVRJVkVfQURfV0lUSF9BUFBfRE9XTkxPQURfQlROX1RFTVBMQVRFXCJcclxufVxyXG5leHBvcnQgZW51bSBDb2xvciB7XHJcbiAgICBSRUQgPSBcIlJFRFwiLFxyXG4gICAgREtHUkFZID0gXCJES0dSQVlcIixcclxuICAgIEdSQVkgPSBcIkdSQVlcIixcclxuICAgIFdISVRFID0gXCJXSElURVwiLFxyXG4gICAgQkxVRSA9IFwiQkxVRVwiLFxyXG4gICAgQkxBQ0sgPSBcIkJMQUNLXCIsXHJcbiAgICBMVEdSQVkgPSBcIkxUR1JBWVwiLFxyXG4gICAgTUFHRU5UQSA9IFwiTUFHRU5UQVwiLFxyXG4gICAgWUVMTE9XID0gXCJZRUxMT1dcIixcclxuICAgIENZQU4gPSBcIkNZQU5cIixcclxuICAgIEdSRUVOID0gXCJHUkVFTlwiLFxyXG4gICAgVFJBTlNQQVJFTlQgPSBcIlRSQU5TUEFSRU5UXCIsXHJcbn1cclxuZXhwb3J0IGVudW0gSW5zdGFsbFJlZmVycmVyUmVzcG9uc2VzIHtcclxuICAgIFNFUlZJQ0VfRElTQ09OTkVDVEVEID0gLTEsXHJcbiAgICBERVZFTE9QRVJfRVJST1IgPSAzLFxyXG4gICAgU0VSVklDRV9VTkFWQUlMQUJMRSA9IDEsXHJcbiAgICBPSyA9IDAsXHJcbiAgICBGRUFUVVJFX05PVF9TVVBQT1JURUQgPSAyLFxyXG59XHJcbmV4cG9ydCBlbnVtIEFuY2hvciB7XHJcbiAgICBUT1AgPSBcInRvcFwiLFxyXG4gICAgQk9UVE9NID0gXCJib3R0b21cIixcclxuICAgIElOVklTSUJMRSA9IFwiaW52aXNpYmxlXCIsXHJcbn1cclxuZXhwb3J0IGVudW0gQmFubmVyQWRFdmVudHMge1xyXG4gICAgQkFOTkVSX0FEX0NMT1NFRCA9IFwiYmFubmVyX2FkX2Nsb3NlZFwiLFxyXG4gICAgQkFOTkVSX0FEX0ZBSUxFRCA9IFwiYmFubmVyX2FkX2ZhaWxlZFwiLFxyXG4gICAgQkFOTkVSX0FEX0xFQVZFID0gXCJiYW5uZXJfYWRfbGVhdmVcIixcclxuICAgIEJBTk5FUl9BRF9PUEVORUQgPSBcImJhbm5lcl9hZF9vcGVuZWRcIixcclxuICAgIEJBTk5FUl9BRF9MT0FERUQgPSBcImJhbm5lcl9hZF9sb2FkZWRcIixcclxuICAgIEJBTk5FUl9BRF9DTElDS0VEID0gXCJiYW5uZXJfYWRfY2xpY2tlZFwiLFxyXG4gICAgQkFOTkVSX0FEX0lNUFJFU1NJT04gPSBcImJhbm5lcl9hZF9pbXByZXNzaW9uXCIsXHJcbn1cclxuZXhwb3J0IGVudW0gSW50ZXJzdGl0aWFsQWRFdmVudHMge1xyXG4gICAgSU5URVJTVElUSUFMX0FEX0NMT1NFRCA9IFwiaW50ZXJzdGl0aWFsX2FkX2Nsb3NlZFwiLFxyXG4gICAgSU5URVJTVElUSUFMX0FEX0ZBSUxFRCA9IFwiaW50ZXJzdGl0aWFsX2FkX2ZhaWxlZFwiLFxyXG4gICAgSU5URVJTVElUSUFMX0FEX0xFQVZFID0gXCJpbnRlcnN0aXRpYWxfYWRfbGVhdmVcIixcclxuICAgIElOVEVSU1RJVElBTF9BRF9PUEVORUQgPSBcImludGVyc3RpdGlhbF9hZF9vcGVuZWRcIixcclxuICAgIElOVEVSU1RJVElBTF9BRF9MT0FERUQgPSBcImludGVyc3RpdGlhbF9hZF9sb2FkZWRcIixcclxuICAgIElOVEVSU1RJVElBTF9BRF9DTElDS0VEID0gXCJpbnRlcnN0aXRpYWxfYWRfY2xpY2tlZFwiLFxyXG4gICAgSU5URVJTVElUSUFMX0FEX0lNUFJFU1NJT04gPSBcImludGVyc3RpdGlhbF9hZF9pbXByZXNzaW9uXCIsXHJcbiAgICBJTlRFUlNUSVRJQUxfQURfUkVXQVJERUQgPSBcImludGVyc3RpdGlhbF9hZF9yZXdhcmRlZFwiLFxyXG4gICAgSU5URVJTVElUSUFMX1JFV0FSRF9BRF9DTE9TRUQgPSBcImludGVyc3RpdGlhbF9yZXdhcmRfYWRfY2xvc2VkXCIsXHJcbiAgICBJTlRFUlNUSVRJQUxfUkVXQVJEX0FEX0ZBSUxFRF9UT19MT0FEID0gXCJpbnRlcnN0aXRpYWxfcmV3YXJkX2FkX2ZhaWxlZF90b19sb2FkXCIsXHJcbiAgICBJTlRFUlNUSVRJQUxfUkVXQVJEX0FEX0xFRlRfQVBQID0gXCJpbnRlcnN0aXRpYWxfcmV3YXJkX2FkX2xlZnRfYXBwXCIsXHJcbiAgICBJTlRFUlNUSVRJQUxfUkVXQVJEX0FEX0xPQURFRCA9IFwiaW50ZXJzdGl0aWFsX3Jld2FyZF9hZF9sb2FkZWRcIixcclxuICAgIElOVEVSU1RJVElBTF9SRVdBUkRfQURfT1BFTkVEID0gXCJpbnRlcnN0aXRpYWxfcmV3YXJkX2FkX29wZW5lZFwiLFxyXG4gICAgSU5URVJTVElUSUFMX1JFV0FSRF9BRF9DT01QTEVURUQgPSBcImludGVyc3RpdGlhbF9yZXdhcmRfYWRfY29tcGxldGVkXCIsXHJcbiAgICBJTlRFUlNUSVRJQUxfUkVXQVJEX0FEX1NUQVJURUQgPSBcImludGVyc3RpdGlhbF9yZXdhcmRfYWRfc3RhcnRlZFwiLFxyXG59XHJcbmV4cG9ydCBlbnVtIFNwbGFzaEFkRXZlbnRzIHtcclxuICAgIFNQTEFTSF9BRF9GQUlMRURfVE9fTE9BRCA9IFwic3BsYXNoX2FkX2ZhaWxlZF90b19sb2FkXCIsXHJcbiAgICBTUExBU0hfQURfTE9BREVEID0gXCJzcGxhc2hfYWRfbG9hZGVkXCIsXHJcbiAgICBTUExBU0hfQURfRElTTUlTU0VEID0gXCJzcGxhc2hfYWRfZGlzbWlzc2VkXCIsXHJcbiAgICBTUExBU0hfQURfU0hPV0VEID0gXCJzcGxhc2hfYWRfc2hvd2VkXCIsXHJcbiAgICBTUExBU0hfQURfQ0xJQ0sgPSBcInNwbGFzaF9hZF9jbGlja1wiLFxyXG59XHJcbmV4cG9ydCBlbnVtIFJvbGxBZEV2ZW50cyB7XHJcbiAgICBST0xMX0FEX0xPQURfRkFJTEVEID0gXCJyb2xsX2FkX2xvYWRfZmFpbGVkXCIsXHJcbiAgICBST0xMX0FEX0xPQURFRCA9IFwicm9sbF9hZF9sb2FkZWRcIixcclxuICAgIFJPTExfQURfTUVESUFfQ0hBTkdFRCA9IFwicm9sbF9hZF9tZWRpYV9jaGFuZ2VkXCIsXHJcbiAgICBST0xMX0FEX0NMSUNLRUQgPSBcInJvbGxfYWRfY2xpY2tlZFwiLFxyXG4gICAgUk9MTF9BRF9NRURJQV9QUk9HUkVTUyA9IFwicm9sbF9hZF9tZWRpYV9wcm9ncmVzc1wiLFxyXG4gICAgUk9MTF9BRF9NRURJQV9TVEFSVCA9IFwicm9sbF9hZF9tZWRpYV9zdGFydFwiLFxyXG4gICAgUk9MTF9BRF9NRURJQV9QQVVTRSA9IFwicm9sbF9hZF9tZWRpYV9wYXVzZVwiLFxyXG4gICAgUk9MTF9BRF9NRURJQV9TVE9QID0gXCJyb2xsX2FkX21lZGlhX3N0b3BcIixcclxuICAgIFJPTExfQURfTUVESUFfQ09NUExFVElPTiA9IFwicm9sbF9hZF9tZWRpYV9jb21wbGV0aW9uXCIsXHJcbiAgICBST0xMX0FEX01FRElBX0VSUk9SID0gXCJyb2xsX2FkX21lZGlhX2Vycm9yXCIsXHJcbiAgICBST0xMX0FEX01FRElBX1VOTVVURSA9IFwicm9sbF9hZF9tZWRpYV91bm11dGVcIixcclxuICAgIFJPTExfQURfTUVESUFfTVVURSA9IFwicm9sbF9hZF9tZWRpYV9tdXRlXCIsXHJcbiAgICBST0xMX0FEX1dIWV9USElTX0FEID0gXCJyb2xsX2FkX3doeV90aGlzX2FkXCIsXHJcbn1cclxuZXhwb3J0IGVudW0gUmV3YXJkQWRFdmVudHMge1xyXG4gICAgUkVXQVJEX01FVEFEQVRBX0NIQU5HRUQgPSBcInJld2FyZF9tZXRhZGF0YV9jaGFuZ2VkXCIsXHJcbiAgICBSRVdBUkRfQURfRkFJTEVEX1RPX0xPQURfTE9BRCA9IFwicmV3YXJkX2FkX2ZhaWxlZF90b19sb2FkX2xvYWRcIixcclxuICAgIFJFV0FSREVEX0xPQURFRCA9IFwicmV3YXJkZWRfbG9hZGVkXCIsXHJcbiAgICBSRVdBUkRFRF9TVEFUVVMgPSBcInJld2FyZGVkX3N0YXR1c1wiLFxyXG4gICAgUkVXQVJEX0FEX0NMT1NFRF9TVEFUVVMgPSBcInJld2FyZF9hZF9jbG9zZWRfc3RhdHVzXCIsXHJcbiAgICBSRVdBUkRfQURfT1BFTkVEX1NUQVRVUyA9IFwicmV3YXJkX2FkX29wZW5lZF9zdGF0dXNcIixcclxuICAgIFJFV0FSRF9BRF9GQUlMRURfVE9fU0hPVyA9IFwicmV3YXJkX2FkX2ZhaWxlZF90b19zaG93XCIsXHJcbiAgICBSRVdBUkRFRCA9IFwicmV3YXJkZWRcIixcclxuICAgIFJFV0FSRF9BRF9DTE9TRUQgPSBcInJld2FyZF9hZF9jbG9zZWRcIixcclxuICAgIFJFV0FSRF9BRF9GQUlMRURfVE9fTE9BRCA9IFwicmV3YXJkX2FkX2ZhaWxlZF90b19sb2FkXCIsXHJcbiAgICBSRVdBUkRfQURfTE9BREVEID0gXCJyZXdhcmRfYWRfbG9hZGVkXCIsXHJcbiAgICBSRVdBUkRfQURfT1BFTkVEID0gXCJyZXdhcmRfYWRfb3BlbmVkXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERldGFpbGVkQ3JlYXRpdmVUeXBlIHtcclxuICBCSUdfSU1HID0gOTAxLFxyXG4gIFZJREVPID0gOTAzLFxyXG4gIFRIUkVFX0lNRyA9IDkwNCxcclxuICBTTUFMTF9JTUcgPSA5MDUsXHJcbiAgU0lOR0xFX0lNRyA9IDkwOSxcclxuICBTSE9SVF9URVhUID0gOTEzLFxyXG4gIExPTkdfVEVYVCA9IDkxNFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBOYXRpdmVBZEV2ZW50cyB7XHJcbiAgICBOQVRJVkVfQURfRElTTElLRUQgPSBcIm5hdGl2ZV9hZF9kaXNsaWtlZFwiLFxyXG4gICAgTkFUSVZFX0FEX0xPQURFRF9MT0FEID0gXCJuYXRpdmVfYWRfbG9hZGVkX2xvYWRcIixcclxuICAgIE5BVElWRV9BRF9DTE9TRUQgPSBcIm5hdGl2ZV9hZF9jbG9zZWRcIixcclxuICAgIE5BVElWRV9BRF9GQUlMRUQgPSBcIm5hdGl2ZV9hZF9mYWlsZWRcIixcclxuICAgIE5BVElWRV9BRF9MRUFWRSA9IFwibmF0aXZlX2FkX2xlYXZlXCIsXHJcbiAgICBOQVRJVkVfQURfT1BFTkVEID0gXCJuYXRpdmVfYWRfb3BlbmVkXCIsXHJcbiAgICBOQVRJVkVfQURfTE9BREVEID0gXCJuYXRpdmVfYWRfbG9hZGVkXCIsXHJcbiAgICBOQVRJVkVfQURfQ0xJQ0tFRCA9IFwibmF0aXZlX2FkX2NsaWNrZWRcIixcclxuICAgIE5BVElWRV9BRF9JTVBSRVNTSU9OID0gXCJuYXRpdmVfYWRfaW1wcmVzc2lvblwiLFxyXG4gICAgVklERU9fT1BFUkFUT1JfVklERU9fU1RBUlQgPSBcInZpZGVvX29wZXJhdG9yX3ZpZGVvX3N0YXJ0XCIsXHJcbiAgICBWSURFT19PUEVSQVRPUl9WSURFT19QTEFZID0gXCJ2aWRlb19vcGVyYXRvcl92aWRlb19wbGF5XCIsXHJcbiAgICBWSURFT19PUEVSQVRPUl9WSURFT19QQVVTRSA9IFwidmlkZW9fb3BlcmF0b3JfdmlkZW9fcGF1c2VcIixcclxuICAgIFZJREVPX09QRVJBVE9SX1ZJREVPX0VORCA9IFwidmlkZW9fb3BlcmF0b3JfdmlkZW9fZW5kXCIsXHJcbiAgICBWSURFT19PUEVSQVRPUl9WSURFT19NVVRFID0gXCJ2aWRlb19vcGVyYXRvcl92aWRlb19tdXRlXCIsXHJcbiAgICBBUFBfRE9XTkxPQURfU1RBVFVTX0NIQU5HRUQgPSdhcHBfZG93bmxvYWRfc3RhdHVzX2NoYW5nZWQnLFxyXG4gICAgQVBQX0RPV05MT0FEX05PTl9XSUZJX0RPV05MT0FEID0gJ2FwcF9kb3dubG9hZF9ub25fd2lmaV9kb3dubG9hZCdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVmFzdEV2ZW50cyB7XHJcbiAgICBWQVNUX0xPQURfU1VDQ0VTUyA9ICd2YXN0X2xvYWRfc3VjY2VzcycsXHJcbiAgICBWQVNUX0xPQURfRkFJTEVEID0gJ3Zhc3RfbG9hZF9mYWlsZWQnLFxyXG4gICAgVkFTVF9QTEFZX1NUQVRFX0NIQU5HRUQgPSAndmFzdF9wbGF5X3N0YXRlX2NoYW5nZWQnLFxyXG4gICAgVkFTVF9WT0xVTUVfQ0hBTkdFRCA9ICd2YXN0X3ZvbHVtZV9jaGFuZ2VkJyxcclxuICAgIFZBU1RfU0NSRUVOX1ZJRVdfQ0hBTkdFRCA9ICd2YXN0X3NjcmVlbl92aWV3X2NoYW5nZWQnLFxyXG4gICAgVkFTVF9QUk9HUkVTU19DSEFOR0VEID0gJ3Zhc3RfcHJvZ3Jlc3NfY2hhbmdlZCcsXHJcbiAgICBWQVNUX09OX1NVQ0NFU1MgPSAndmFzdF9vbl9zdWNjZXNzJyxcclxuICAgIFZBU1RfT05fRkFJTEVEID0gJ3Zhc3Rfb25fZmFpbGVkJyxcclxuICAgIFZBU1RfQURfUkVBRFkgPSAndmFzdF9hZF9yZWFkeScsXHJcbiAgICBWQVNUX0FEX0ZJTklTSCA9ICd2YXN0X2FkX2ZpbmlzaCcsXHJcbiAgICBWQVNUX0JVRkZFUl9TVEFSVD0gJ3Zhc3RfYnVmZmVyX3N0YXJ0JyxcclxuICAgIFZBU1RfQlVGRkVSX0VORD0gJ3Zhc3RfYnVmZmVyX2VuZCcsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFjdGl2YXRlU3R5bGUgeyBcdFxyXG4gICAgQk9UVE9NX0JBTk5FUiA9IDEsXHJcbiAgICBDT05GSVJNX0RJQUxPRyA9IDJcclxufVxyXG5leHBvcnQgZW51bSBDcmVhdGl2ZU1hdGNoVHlwZSB7XHJcbiAgICBFWEFDVCA9IDAsXHJcbiAgICBTTUFSVD0gMSxcclxuICAgIFVOS05PV04gPSAyLFxyXG4gICAgQU5ZID0gMyxcclxuICAgIExBTkRTQ0FQRSA9IDQsXHJcbiAgICBQT1JUUkFJVCA9IDUsXHJcbiAgICBTUVVBUkUgPSA2XHJcbiAgXHJcbn1cclxuZXhwb3J0IGVudW0gQXBwRG93bmxvYWRTdGF0dXMge1xyXG4gICAgRE9XTkxPQUQgPSBcIkRPV05MT0FEXCIsXHJcbiAgICBXQUlUSU5HX0ZPUl9XSUZJID0gXCJXQUlUSU5HX0ZPUl9XSUZJXCIsXHJcbiAgICBXQUlUSU5HID0gXCJXQUlUSU5HXCIsXHJcbiAgICBET1dOTE9BRElORyA9IFwiRE9XTkxPQURJTkdcIixcclxuICAgIFBBVVNFID0gXCJQQVVTRVwiLFxyXG4gICAgUkVTVU1FID0gXCJSRVNVTUVcIixcclxuICAgIERPV05MT0FERUQgPSBcIkRPV05MT0FERURcIixcclxuICAgIERPV05MT0FERkFJTEVEID0gXCJET1dOTE9BREZBSUxFRFwiLFxyXG4gICAgSU5TVEFMTElORyA9IFwiSU5TVEFMTElOR1wiLFxyXG4gICAgSU5TVEFMTCA9IFwiSU5TVEFMTFwiLFxyXG4gICAgSU5TVEFMTEVEID0gXCJJTlNUQUxMRURcIlxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGVudW0gQXV0b1BsYXlOZXRUeXBle1xyXG4gICAgV0lGSV9PTkxZID0gMCxcclxuICAgIEJPVEhfV0lGSV9BTkRfREFUQSA9IDEsXHJcbiAgICBGT1JCSURfQVVUT19QTEFZID0gMlxyXG4gIH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBJbnRlcmZhY2VzXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYXlvdXRCb3VuZHMge1xyXG4gICAgbWFyZ2luTGVmdD86IG51bWJlcjtcclxuICAgIG1hcmdpblJpZ2h0PzogbnVtYmVyO1xyXG4gICAgbWFyZ2luVG9wPzogbnVtYmVyO1xyXG4gICAgbWFyZ2luQm90dG9tPzogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgbWFyZ2luTGVmdD86IG51bWJlcjtcclxuICAgIG1hcmdpblJpZ2h0PzogbnVtYmVyO1xyXG4gICAgbWFyZ2luVG9wPzogbnVtYmVyO1xyXG4gICAgbWFyZ2luQm90dG9tPzogbnVtYmVyO1xyXG4gICAgcGFnZVhPZmZzZXQ/OiBudW1iZXI7XHJcbiAgICBwYWdlWU9mZnNldD86IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEFkUGFyYW0ge1xyXG4gICAgZ2VuZGVyPzogR2VuZGVyO1xyXG4gICAgYWRDb250ZW50Q2xhc3NpZmljYXRpb24/OiBBZENvbnRlbnRDbGFzc2lmaWNhdGlvbjtcclxuICAgIHRhZ0ZvclVuZGVyQWdlT2ZQcm9taXNlPzogVW5kZXJBZ2VPZlByb21pc2U7XHJcbiAgICB0YWdGb3JDaGlsZFByb3RlY3Rpb24/OiBDaGlsZFByb3RlY3Rpb247XHJcbiAgICBub25QZXJzb25hbGl6ZWRBZD86IE5vblBlcnNvbmFsaXplZEFkO1xyXG4gICAgYXBwQ291bnRyeT86IHN0cmluZztcclxuICAgIGFwcExhbmc/OiBzdHJpbmc7XHJcbiAgICBjb3VudHJ5Q29kZT86IHN0cmluZztcclxuICAgIGJlbG9uZ0NvdW50cnlDb2RlPzogc3RyaW5nO1xyXG4gICAgY29uc2VudD86IHN0cmluZztcclxuICAgIHJlcXVlc3RMb2NhdGlvbj86IGJvb2xlYW47XHJcbiAgICBkZXRhaWxlZENyZWF0aXZlVHlwZT86IERldGFpbGVkQ3JlYXRpdmVUeXBlW107XHJcbiAgICBsb2NhdGlvbj8gOkxvY2F0aW9uLFxyXG4gICAgY29udGVudEJ1bmRsZT8gOiBDb250ZW50QnVuZGxlLFxyXG4gICAgdE1heD86IG51bWJlciwgXHJcbiAgICBhZGRCaWRkaW5nUGFyYW1NYXA/OiBBZGRCaWRkaW5nUGFyYW1NYXAsXHRcclxuICAgIHNldEJpZGRpbmdQYXJhbU1hcD86IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBCaWRkaW5nUGFyYW07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRkQmlkZGluZ1BhcmFtTWFwe1xyXG4gICAgc2xvdElkOiBzdHJpbmcsXHJcbiAgICBiaWRkaW5nUGFyYW06IEJpZGRpbmdQYXJhbSxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvbiB7XHJcbiAgICBsYXQ6IG51bWJlcixcclxuICAgIGxuZzogbnVtYmVyXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDb250ZW50QnVuZGxle1xyXG4gICAgY2hhbm5lbENhdGVnb3J5Q29kZT86IHN0cmluZyxcclxuICAgIHRpdGxlPzogc3RyaW5nLFxyXG4gICAgdGFncz86IHN0cmluZyxcclxuICAgIHJlbGF0ZWRQZW9wbGU/OiBzdHJpbmcsXHJcbiAgICBjb250ZW50Pzogc3RyaW5nLFxyXG4gICAgY29udGVudElEPzogbnVtYmVyLFxyXG4gICAgY2F0ZWdvcnk/OiBzdHJpbmcsXHJcbiAgICBzdWJjYXRlZ29yeT86IHN0cmluZyxcclxuICAgIHRoaXJkQ2F0ZWdvcnk/OiBzdHJpbmdcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEhNU1JlcXVlc3RPcHRpb25zIHtcclxuICAgIGFkQ29udGVudENsYXNzaWZpY2F0aW9uPzogQWRDb250ZW50Q2xhc3NpZmljYXRpb247XHJcbiAgICBhcHBMYW5nPzogc3RyaW5nO1xyXG4gICAgYXBwQ291bnRyeT86IHN0cmluZztcclxuICAgIHRhZ0ZvckNoaWxkUHJvdGVjdGlvbj86IENoaWxkUHJvdGVjdGlvbjtcclxuICAgIHRhZ0ZvclVuZGVyQWdlT2ZQcm9taXNlPzogVW5kZXJBZ2VPZlByb21pc2U7XHJcbiAgICBub25QZXJzb25hbGl6ZWRBZD86IE5vblBlcnNvbmFsaXplZEFkO1xyXG4gICAgY29uc2VudD86IHN0cmluZztcclxuICAgIHJlcXVlc3RMb2NhdGlvbj86IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBITVNSZXdhcmQge1xyXG4gICAgcmV3YXJkQW1vdW50OiBudW1iZXI7XHJcbiAgICByZXdhcmROYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBITVNSZXdhcmRWZXJpZnlDb25maWcge1xyXG4gICAgZGF0YTogc3RyaW5nO1xyXG4gICAgdXNlcklkOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBPYWlkUmVzdWx0IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBpc0xpbWl0QWRUcmFjaW5nRW5hYmxlZDogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIER1cmF0aW9uIHtcclxuICAgIGR1cmF0aW9uOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBSb2xsQWRMb2FkZXJQYXJhbXMge1xyXG4gICAgYWRJZDogc3RyaW5nO1xyXG4gICAgdG90YWxEdXJhdGlvbjogbnVtYmVyO1xyXG4gICAgbWF4Q291bnQ6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFZpZGVvQ29uZmlndXJhdGlvbiB7XHJcbiAgICBhdWRpb0ZvY3VzVHlwZT86IEF1ZGlvRm9jdXNUeXBlO1xyXG4gICAgY2xpY2tUb0Z1bGxTY3JlZW5SZXF1ZXN0PzogYm9vbGVhbjtcclxuICAgIGN1c3RvbWl6ZU9wZXJhdGVSZXF1ZXN0ZWQ/OiBib29sZWFuO1xyXG4gICAgaXNTdGFydE11dGVkPzogYm9vbGVhbjtcclxuICAgIGF1dG9QbGF5TmV0d29yaz86IEF1dG9QbGF5TmV0VHlwZTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE5hdGl2ZUFkQ29uZmlndXJhdGlvbiB7XHJcbiAgICBhZFNpemU6IEFkU2l6ZTtcclxuICAgIGNob2ljZXNQb3NpdGlvbj86IENob2ljZXNQb3NpdGlvbjtcclxuICAgIG1lZGlhQXNwZWN0PzogTWVkaWFBc3BlY3Q7XHJcbiAgICBtZWRpYURpcmVjdGlvbj86IE1lZGlhRGlyZWN0aW9uO1xyXG4gICAgcmV0dXJuVXJsc0ZvckltYWdlcz86IGJvb2xlYW47XHJcbiAgICByZXF1ZXN0Q3VzdG9tRGlzbGlrZVRoaXNBZD86IGJvb2xlYW47XHJcbiAgICByZXF1ZXN0TXVsdGlJbWFnZXM/OiBib29sZWFuO1xyXG4gICAgdmlkZW9Db25maWd1cmF0aW9uPzogVmlkZW9Db25maWd1cmF0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFZpZGVvT3BlcmF0b3JBc3BlY3RSYXRpbyB7XHJcbiAgICB2aWRlb09wZXJhdG9yR2V0QXNwZWN0UmF0aW86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOYXRpdmVBZExvYWRPcHRpb25zIHtcclxuICAgIGFkSWQ/OiBzdHJpbmc7XHJcbiAgICBhZD86IEFkUGFyYW07XHJcbiAgICBuYXRpdmVBZE9wdGlvbnM/OiBOYXRpdmVBZENvbmZpZ3VyYXRpb247XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBZFNpemUge1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTmF0aXZlQWRPcHRpb25zIHtcclxuICAgIGRpdjogc3RyaW5nO1xyXG4gICAgdGVtcGxhdGU/OiBOYXRpdmVBZFRlbXBsYXRlO1xyXG4gICAgYmc/OiBDb2xvcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFJvbGxBZExvYWRPcHRpb25zIHtcclxuICAgIGZpbGU/OiBzdHJpbmc7XHJcbiAgICBhZFBhcmFtPzogQWRQYXJhbTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFJlZmVycmVyRGV0YWlscyB7XHJcbiAgICByZXNwb25zZUNvZGU/OiBJbnN0YWxsUmVmZXJyZXJSZXNwb25zZXM7XHJcbiAgICBpbnN0YWxsUmVmZXJyZXI/OiBzdHJpbmc7XHJcbiAgICByZWZlcnJlckNsaWNrVGltZXN0YW1wPzogbnVtYmVyO1xyXG4gICAgaW5zdGFsbEJlZ2luVGltZXN0YW1wPzogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uc2VudFVwZGF0ZVJlc3VsdCB7XHJcbiAgICBjb25zZW50U3RhdHVzPzogQ29uc2VudFN0YXR1cztcclxuICAgIGlzTmVlZENvbnNlbnQ/OiBib29sZWFuO1xyXG4gICAgYWRQcm92aWRlcnM/OiBBZFByb3ZpZGVyW107XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBZFByb3ZpZGVyIHtcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIHByaXZhY3lQb2xpY3lVcmw/OiBzdHJpbmc7XHJcbiAgICBzZXJ2aWNlQXJlYT86IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNwbGFzaEFkTG9hZE9wdGlvbnMge1xyXG4gICAgYWRJZDogc3RyaW5nO1xyXG4gICAgb3JpZW50YXRpb24/OiBITVNTY3JlZW5PcmllbnRhdGlvbjtcclxuICAgIGFkUGFyYW0/OiBBZFBhcmFtO1xyXG4gICAgbG9nb0FuY2hvcj86IEFuY2hvcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFZhc3RMb2FkT3B0aW9ucyB7XHJcbiAgICBhZFBhcmFtPzogVmFzdENvbmZpZ3VyYXRpb24sXHJcbiAgICBwbGF5ZXJDb25maWc/OiBQbGF5ZXJDb25maWcsXHJcbiAgICBpc1Rlc3RBZD86IGJvb2xlYW4sXHJcbiAgICBpc0FkTG9hZFdpdGhBZHNEYXRhPzogYm9vbGVhbixcclxuICAgIGlzQ3VzdG9tVmlkZW9QbGF5ZXI/OiBib29sZWFuXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBWYXN0Q29uZmlndXJhdGlvbiB7XHJcbiAgICBhZElkPzogc3RyaW5nLFxyXG4gICAgdG90YWxEdXJhdGlvbj86IG51bWJlcixcclxuICAgIGNyZWF0aXZlTWF0Y2hTdHJhdGVneT86IENyZWF0aXZlTWF0Y2hUeXBlLFxyXG4gICAgYWxsb3dNb2JpbGVUcmFmZmljPzogYm9vbGVhbixcclxuICAgIGFkT3JpZW50YXRpb24/Ok1lZGlhRGlyZWN0aW9uLFxyXG4gICAgbWF4QWRQb2RzPzogbnVtYmVyLFxyXG4gICAgcmVxdWVzdE9wdGlvbj86IEhNU1JlcXVlc3RPcHRpb25zXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBQbGF5ZXJDb25maWcge1xyXG4gICAgaXNFbmFibGVDdXRvdXQ/OiBib29sZWFuLFxyXG4gICAgaXNFbmFibGVQb3J0cmFpdD86IGJvb2xlYW4sXHJcbiAgICBpc0VuYWJsZVJvdGF0aW9uPzogYm9vbGVhbixcclxuICAgIGlzU2tpcExpbmVhckFkPzogYm9vbGVhbixcclxuICAgIGlzRm9yY2VNdXRlPzpib29sZWFuLFxyXG4gICAgaXNJbmR1c3RyeUljb25TaG93Pzpib29sZWFuXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBWYXN0U2RrQ29uZmlndXJhdGlvbntcclxuICAgIGh0dHBDYWxsVGltZW91dE1zOm51bWJlcixcclxuICAgIGh0dHBDb25uZWN0VGltZW91dE1zOm51bWJlcixcclxuICAgIGh0dHBLZWVwQWxpdmVEdXJhdGlvbk1zOm51bWJlcixcclxuICAgIGh0dHBSZWFkVGltZW91dE1zOm51bWJlcixcclxuICAgIG1heEh0dHBDb25uZWN0aW9uczpudW1iZXIsXHJcbiAgICBtYXhSZWRpcmVjdFdyYXBwZXJMaW1pdDpudW1iZXIsXHJcbiAgICBpc1Rlc3Q6Ym9vbGVhbixcclxuICAgIHZhc3RFdmVudFJldHJ5QmF0Y2hTaXplOm51bWJlcixcclxuICAgIHZhc3RFdmVudFJldHJ5SW50ZXJ2YWxTZWNvbmRzOm51bWJlcixcclxuICAgIHZhc3RFdmVudFJldHJ5VXBsb2FkVGltZXM6bnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWR2ZXJ0aXNlckluZm97XHJcbiAgICBzZXE6bnVtYmVyLFxyXG4gICAga2V5OnN0cmluZyxcclxuICAgIHZhbHVlOnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcEluZm8ge1xyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgdmVyc2lvbk5hbWU6IHN0cmluZyxcclxuICAgIGRldmVsb3Blck5hbWU6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb21vdGVJbmZvIHtcclxuICAgIHR5cGU6IG51bWJlcixcclxuICAgIG5hbWU6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJpZGRpbmdJbmZvIHtcclxuICAgIHByaWNlOiBudW1iZXIsXHJcbiAgICBjdXI6IHN0cmluZyxcclxuICAgIG51cmw6IHN0cmluZyxcclxuICAgIGx1cmw6IHN0cmluZyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCaWRkaW5nUGFyYW0geyBcclxuICAgIGJpZEZsb29yIDpudW1iZXIsXHJcbiAgICBiaWRGbG9vckN1ciA6IHN0cmluZywgXHJcbiAgICBicGtnTmFtZTogc3RyaW5nW11cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIE1vZHVsZXNcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6IFwiSE1TQWRzXCIsXHJcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc1wiLFxyXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkc1wiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0FkcyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKSBITVNJbnRlcnN0aXRpYWxBZCA9IEhNU0ludGVyc3RpdGlhbEFkO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpIEhNU0Jhbm5lckFkID0gSE1TQmFubmVyQWQ7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KCkgSE1TU3BsYXNoQWQgPSBITVNTcGxhc2hBZDtcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKSBITVNSZXdhcmRBZCA9IEhNU1Jld2FyZEFkO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpIEhNU05hdGl2ZUFkID0gSE1TTmF0aXZlQWQ7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KCkgSE1TUm9sbEFkID0gSE1TUm9sbEFkO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpIEhNU1Zhc3QgPSBITVNWYXN0O1xyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBvbihldmVudDogc3RyaW5nLCBjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRTREtWZXJzaW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldFJlcXVlc3RPcHRpb25zKCk6IFByb21pc2U8SE1TUmVxdWVzdE9wdGlvbnM+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0UmVxdWVzdE9wdGlvbnMocmVxdWVzdE9wdGlvbnM6IEhNU1JlcXVlc3RPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldENvbnNlbnQoY29uc2VudDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEFwcEFjdGl2YXRlU3R5bGUoKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QXBwQWN0aXZhdGVTdHlsZShzdHlsZTpudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QXBwSW5zdGFsbGVkTm90aWZ5KHN0YXR1czpib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzQXBwSW5zdGFsbGVkTm90aWZ5KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBhZGRUZXN0RGV2aWNlSWQodGVzdERldmljZUlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0VGVzdERldmljZUlkKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldFVuZGVyQWdlT2ZQcm9taXNlKHVuZGVyQWdlT2ZQcm9taXNlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldENvbnNlbnRTdGF0dXMoY29uc2VudFN0YXR1czogQ29uc2VudFN0YXR1cyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXREZWJ1Z05lZWRDb25zZW50KGRlYnVnTmVlZENvbnNlbnQ6IERlYnVnTmVlZENvbnNlbnQpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZXF1ZXN0Q29uc2VudFVwZGF0ZSgpOiBQcm9taXNlPENvbnNlbnRVcGRhdGVSZXN1bHQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgdmVyaWZ5QWRJZChhZElkOiBzdHJpbmcsIGlzTGltaXRBZFRyYWNraW5nOiBib29sZWFuKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEFkdmVydGlzaW5nSWRJbmZvKCk6IFByb21pc2U8T2FpZFJlc3VsdD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZWZlcnJlckNsaWVudFN0YXJ0Q29ubmVjdGlvbihpc1Rlc3Q/OiBib29sZWFuKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVmZXJyZXJDbGllbnRFbmRDb25uZWN0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZWZlcnJlckNsaWVudElzUmVhZHkoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEluc3RhbGxSZWZlcnJlcihpbnN0YWxsQ2hhbm5lbD86c3RyaW5nKTogUHJvbWlzZTxSZWZlcnJlckRldGFpbHM+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaW5pdFZhc3QodmFzdFNka0NvbmZpZ3VyYXRpb246VmFzdFNka0NvbmZpZ3VyYXRpb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0VmFzdFNka0NvbmZpZ3VyYXRpb24oKTogUHJvbWlzZTxWYXN0U2RrQ29uZmlndXJhdGlvbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICB1cGRhdGVTZGtTZXJ2ZXJDb25maWcoc2xvdElkOnN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICB1c2VyQWNjZXB0QWRMaWNlbnNlKGlzQWNjZXB0TGljZW5zZTpib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEV2ZW50UHJvY2Vzc29yKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0Fkc1wiLFxyXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1hZHNcIixcclxuICAgIHBsdWdpblJlZjogXCJITVNBZHMuSE1TQmFubmVyQWRcIixcclxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxyXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNCYW5uZXJBZCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBvbihldmVudE5hbWU6IEJhbm5lckFkRXZlbnRzLCBjYWxsYmFjazogKHJlc3VsdD86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBhc3luYyBjcmVhdGUoZGl2SWQ6IHN0cmluZywgYm91bmRzPzogTGF5b3V0Qm91bmRzKTogUHJvbWlzZTxITVNCYW5uZXJBZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzY3JvbGwoKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEFkSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QWRJZChhZElkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0QmFubmVyQWRTaXplKCk6IFByb21pc2U8QWRTaXplPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldEJhbm5lckFkU2l6ZShiYW5uZXJBZFNpemU6IEJhbm5lckFkU2l6ZSB8IEFkU2l6ZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRCYWNrZ3JvdW5kQ29sb3IoYmdDb2xvcjogQ29sb3IpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QmFubmVyUmVmcmVzaChiYW5uZXJSZWZyZXNoOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QWRMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNMb2FkaW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBsb2FkQWQoYWRQYXJhbT86IEFkUGFyYW0pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcGF1c2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHJlc3VtZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0SGVpZ2h0KCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEhlaWdodFB4KCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldFdpZHRoKCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldFdpZHRoUHgoKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNBdXRvSGVpZ2h0U2l6ZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNEeW5hbWljU2l6ZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNGdWxsV2lkdGhTaXplKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRDdXJyZW50RGlyZWN0aW9uQmFubmVyU2l6ZSh3aWR0aDogbnVtYmVyKTogUHJvbWlzZTxBZFNpemU+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0TGFuZHNjYXBlQmFubmVyU2l6ZSh3aWR0aDogbnVtYmVyKTogUHJvbWlzZTxBZFNpemU+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0UG9ydHJhaXRCYW5uZXJTaXplKHdpZHRoOiBudW1iZXIpOiBQcm9taXNlPEFkU2l6ZT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRCaWRkaW5nSW5mbygpOiBQcm9taXNlPEJpZGRpbmdJbmZvPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6IFwiSE1TQWRzXCIsXHJcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc1wiLFxyXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkcy5ITVNJbnRlcnN0aXRpYWxBZFwiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0ludGVyc3RpdGlhbEFkIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIG9uKFxyXG4gICAgICAgIGV2ZW50TmFtZTogSW50ZXJzdGl0aWFsQWRFdmVudHMsXHJcbiAgICAgICAgY2FsbGJhY2s6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWRcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBhc3luYyBjcmVhdGUodXNlQWN0aXZpdHk6IGJvb2xlYW4pOiBQcm9taXNlPEhNU0ludGVyc3RpdGlhbEFkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNjcm9sbCgpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2hvdygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNMb2FkZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzTG9hZGluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgbG9hZEFkKGFkUGFyYW0/OiBBZFBhcmFtKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldEFkSWQoYWRJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEFkSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QWRMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0UmV3YXJkQWRMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgdmlkZW9PcGVyYXRvckdldEFzcGVjdFJhdGlvKCk6IFByb21pc2U8VmlkZW9PcGVyYXRvckFzcGVjdFJhdGlvPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHZpZGVvT3BlcmF0b3JIYXNWaWRlbygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgdmlkZW9PcGVyYXRvcklzQ3VzdG9taXplT3BlcmF0ZUVuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHZpZGVvT3BlcmF0b3JJc011dGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICB2aWRlb09wZXJhdG9yTXV0ZShtdXRlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHZpZGVvT3BlcmF0b3JQYXVzZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgdmlkZW9PcGVyYXRvclBsYXkoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHZpZGVvT3BlcmF0b3JTdG9wKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRWaWRlb0NvbmZpZ3VyYXRpb24odmlkZW9Db25maWd1cmF0aW9uOiBWaWRlb0NvbmZpZ3VyYXRpb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0QmlkZGluZ0luZm8oKTogUHJvbWlzZTxCaWRkaW5nSW5mbz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0Fkc1wiLFxyXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1hZHNcIixcclxuICAgIHBsdWdpblJlZjogXCJITVNBZHMuSE1TTmF0aXZlQWRcIixcclxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxyXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNOYXRpdmVBZCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBvbihldmVudE5hbWU6IE5hdGl2ZUFkRXZlbnRzLCBjYWxsYmFjazogKHJlc3VsdD86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBhc3luYyBjcmVhdGUoXHJcbiAgICAgICAgb3B0aW9uczogTmF0aXZlQWRPcHRpb25zLFxyXG4gICAgICAgIGJvdW5kcz86IExheW91dEJvdW5kc1xyXG4gICAgKTogUHJvbWlzZTxITVNOYXRpdmVBZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBsb2FkQWQob3B0aW9ucz86IE5hdGl2ZUFkTG9hZE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2hvdygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNMb2FkaW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBkaXNsaWtlQWQoZGlzbGlrZVJlYXNvbjogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldEFsbG93Q3VzdG9tQ2xpY2soKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEFkU291cmNlKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldERlc2NyaXB0aW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldENhbGxUb0FjdGlvbigpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXREaXNsaWtlQWRSZWFzb25zKCk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNDdXN0b21DbGlja0FsbG93ZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzQ3VzdG9tRGlzbGlrZVRoaXNBZEVuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHJlY29yZENsaWNrRXZlbnQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHJlY29yZEltcHJlc3Npb25FdmVudChpbXByZXNzaW9uRGF0YTogYW55KTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldFVuaXF1ZUlkKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldERpc2xpa2VBZExpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnb3RvV2h5VGhpc0FkUGFnZSh1c2VWaWV3OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEFkU2lnbigpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRUaXRsZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRXaHlUaGlzQWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVjb3JkU2hvd1N0YXJ0RXZlbnQoc2hvd1N0YXJ0RGF0YTogYW55KTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIG9uQWRDbG9zZShrZXl3b3Jkczogc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0TmF0aXZlQWRDb25maWd1cmF0aW9uKCk6IFByb21pc2U8TmF0aXZlQWRDb25maWd1cmF0aW9uPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldE9uRG93bmxvYWRTdGF0dXNDaGFuZ2VkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldE9uTm9uV2lmaURvd25sb2FkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldFNob3dQZXJtaXNzaW9uRGlhbG9nKHNob3c6Ym9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRBbGxvd2VkTm9uV2lmaU5ldHdvcmsoYWxsb3dlZDpib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGNhbmNlbCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgY29udGludWVEb3dubG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2hvd0FkdmVydGlzZXJJbmZvRGlhbG9nKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBoaWRlQWR2ZXJ0aXNlckluZm9EaWFsb2coKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGhhc0FkdmVydGlzZXJJbmZvKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRBZHZlcnRpc2VySW5mbygpOiBQcm9taXNlPEFkdmVydGlzZXJJbmZvW10+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0QXBwSW5mbygpOiBQcm9taXNlPEFwcEluZm8+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0UHJvbW90ZUluZm8oKTogUHJvbWlzZTxQcm9tb3RlSW5mbz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzaG93QXBwRGV0YWlsUGFnZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2hvd1ByaXZhY3lQb2xpY3koKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNob3dQZXJtaXNzaW9uUGFnZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNUcmFuc3BhcmVuY3lPcGVuKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRUcmFuc3BhcmVuY3lUcGxVcmwoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0SW50ZXJBY3Rpb25UeXBlKCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldFZpZGVvQ29uZmlndXJhdGlvbih2aWRlb0NvbmZpZ3VyYXRpb246IFZpZGVvQ29uZmlndXJhdGlvbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRCaWRkaW5nSW5mbygpOiBQcm9taXNlPEJpZGRpbmdJbmZvPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6IFwiSE1TQWRzXCIsXHJcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc1wiLFxyXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkcy5ITVNSZXdhcmRBZFwiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU1Jld2FyZEFkIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIG9uKGV2ZW50TmFtZTogUmV3YXJkQWRFdmVudHMsIGNhbGxiYWNrOiAocmVzdWx0PzogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGFzeW5jIGNyZWF0ZShhZElkOiBzdHJpbmcpOiBQcm9taXNlPEhNU1Jld2FyZEFkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNob3codXNlQWN0aXZpdHk6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVzdW1lKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBwYXVzZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgbG9hZEFkV2l0aEFkSWQoYWRJZDpzdHJpbmcsYWRQYXJhbT86QWRQYXJhbSk6IFByb21pc2U8dm9pZD57XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBsb2FkQWQoYWRQYXJhbT86IEFkUGFyYW0pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNMb2FkZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldERhdGEoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0VXNlcklkKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldFJld2FyZCgpOiBQcm9taXNlPEhNU1Jld2FyZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXREYXRhKGRhdGE6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRJbW1lcnNpdmUoaW1tZXJzaXZlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldFVzZXJJZCh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRSZXdhcmRWZXJpZnlDb25maWcoY29uZmlnOiBITVNSZXdhcmRWZXJpZnlDb25maWcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0UmV3YXJkVmVyaWZ5Q29uZmlnKCk6IFByb21pc2U8SE1TUmV3YXJkVmVyaWZ5Q29uZmlnPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldE9uTWV0YWRhdGFDaGFuZ2VkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldFJld2FyZEFkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldE1vYmlsZURhdGFBbGVydFN3aXRjaChhbGVydFN3aXRjaDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRWaWRlb0NvbmZpZ3VyYXRpb24odmlkZW9Db25maWd1cmF0aW9uOiBWaWRlb0NvbmZpZ3VyYXRpb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0QmlkZGluZ0luZm8oKTogUHJvbWlzZTxCaWRkaW5nSW5mbz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0Fkc1wiLFxyXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1hZHNcIixcclxuICAgIHBsdWdpblJlZjogXCJITVNBZHMuSE1TUm9sbEFkXCIsXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcclxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TUm9sbEFkIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIG9uKGV2ZW50TmFtZTogUm9sbEFkRXZlbnRzLCBjYWxsYmFjazogKHJlc3VsdD86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBhc3luYyBjcmVhdGUoXHJcbiAgICAgICAgcGFyYW1zOiBSb2xsQWRMb2FkZXJQYXJhbXMsXHJcbiAgICAgICAgZGl2SWQ6IHN0cmluZyxcclxuICAgICAgICBib3VuZHM/OiBMYXlvdXRCb3VuZHNcclxuICAgICk6IFByb21pc2U8SE1TUm9sbEFkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNjcm9sbCgpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgbG9hZEFkKG9wdGlvbnM6IFJvbGxBZExvYWRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzTG9hZGluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcGF1c2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzUGxheWluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgbXV0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgdW5tdXRlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBvbkNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBwbGF5KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzdG9wKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZW1vdmVJbnN0cmVhbU1lZGlhQ2hhbmdlTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHJlbW92ZU1lZGlhTXV0ZUxpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZW1vdmVJbnN0cmVhbU1lZGlhU3RhdGVMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0SW5zdHJlYW1BZHMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldEluc3RyZWFtTWVkaWFDaGFuZ2VMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0TWVkaWFNdXRlTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldEluc3RyZWFtTWVkaWFTdGF0ZUxpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRPbkluc3RyZWFtQWRDbGlja0xpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRBZFNvdXJjZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXREdXJhdGlvbigpOiBQcm9taXNlPER1cmF0aW9uPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldFdoeVRoaXNBZCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRBZFNpZ24oKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNDbGlja2VkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0V4cGlyZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzSW1hZ2VBZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNTaG93bigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNWaWRlb0FkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRDYWxsVG9BY3Rpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2hvd0FkdmVydGlzZXJJbmZvRGlhbG9nKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBoaWRlQWR2ZXJ0aXNlckluZm9EaWFsb2coKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGhhc0FkdmVydGlzZXJJbmZvKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRBZHZlcnRpc2VySW5mbygpOiBQcm9taXNlPEFkdmVydGlzZXJJbmZvW10+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNUcmFuc3BhcmVuY3lPcGVuKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRUcmFuc3BhcmVuY3lUcGxVcmwoKTogUHJvbWlzZTxTdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2hvd1RyYW5zcGFyZW5jeURpYWxvZygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaGlkZVRyYW5zcGFyZW5jeURpYWxvZygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0QmlkZGluZ0luZm8oKTogUHJvbWlzZTxCaWRkaW5nSW5mbz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0Fkc1wiLFxyXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1hZHNcIixcclxuICAgIHBsdWdpblJlZjogXCJITVNBZHMuSE1TU3BsYXNoQWRcIixcclxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxyXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNTcGxhc2hBZCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBvbihldmVudE5hbWU6IFNwbGFzaEFkRXZlbnRzLCBjYWxsYmFjazogKHJlc3VsdD86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBhc3luYyBjcmVhdGUoKTogUHJvbWlzZTxITVNTcGxhc2hBZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRMb2dvKGZpbGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRXaWRlU2xvZ2FuUmVzSWQod2lkZVNsb2dhblJlc0lkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0U2xvZ2FuUmVzSWQoc2xvZ2FuUmVzSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBsb2FkKG9wdGlvbnM6IFNwbGFzaEFkTG9hZE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcHJlbG9hZEFkKG9wdGlvbnM6IFNwbGFzaEFkTG9hZE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZGVzdHJveVZpZXcoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHBhdXNlVmlldygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVzdW1lVmlldygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNMb2FkaW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0xvYWRlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QWREaXNwbGF5TGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldEF1ZGlvRm9jdXNUeXBlKGF1ZGlvRm9jdXNUeXBlOiBBdWRpb0ZvY3VzVHlwZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRCaWRkaW5nSW5mbygpOiBQcm9taXNlPEJpZGRpbmdJbmZvPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6IFwiSE1TQWRzXCIsXHJcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc1wiLFxyXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkcy5ITVNWYXN0XCIsXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcclxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TVmFzdCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBvbihldmVudE5hbWU6IFZhc3RFdmVudHMsIGNhbGxiYWNrOiAocmVzdWx0PzogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGFzeW5jIGNyZWF0ZShcclxuICAgICAgICBkaXZJZDogc3RyaW5nLFxyXG4gICAgICAgIGJvdW5kcz86IExheW91dEJvdW5kc1xyXG4gICAgKTogUHJvbWlzZTxITVNWYXN0PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNjcm9sbCgpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgbG9hZEFkKG9wdGlvbnM6IFZhc3RMb2FkT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZXN1bWUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHBhdXNlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZWxlYXNlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICB0b2dnbGVNdXRlU3RhdGUoaXNNdXRlOmJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHN0YXJ0T3JQYXVzZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG59ICAgIFxyXG4iXX0=