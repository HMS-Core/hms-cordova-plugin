/*
    Copyright 2022-2024. Huawei Technologies Co., Ltd. All rights reserved.

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
    HMSAds.plugin = "cordova-plugin-hms-adsprime";
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
    HMSBannerAd.plugin = "cordova-plugin-hms-adsprime";
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
    HMSInterstitialAd.plugin = "cordova-plugin-hms-adsprime";
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
    HMSNativeAd.plugin = "cordova-plugin-hms-adsprime";
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
    HMSRewardAd.plugin = "cordova-plugin-hms-adsprime";
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
    HMSRollAd.plugin = "cordova-plugin-hms-adsprime";
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
    HMSSplashAd.plugin = "cordova-plugin-hms-adsprime";
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
    HMSVast.plugin = "cordova-plugin-hms-adsprime";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmF0aXZlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7QUFFRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sK0VBS04sTUFBTSwrQkFBK0IsQ0FBQzs7QUFFdkMsK0RBQStEO0FBQy9ELFlBQVk7QUFDWiwrREFBK0Q7QUFFL0QsTUFBTSxDQUFOLElBQVksaUJBVVg7QUFWRCxXQUFZLGlCQUFpQjtJQUN6Qiw2RUFBa0IsQ0FBQTtJQUNsQixpR0FBNEIsQ0FBQTtJQUM1Qiw2RkFBMEIsQ0FBQTtJQUMxQiw2RUFBa0IsQ0FBQTtJQUNsQix1RkFBdUIsQ0FBQTtJQUN2QixpRkFBb0IsQ0FBQTtJQUNwQixtR0FBNkIsQ0FBQTtJQUM3QixtR0FBNkIsQ0FBQTtJQUM3QixpSEFBb0MsQ0FBQTtBQUN4QyxDQUFDLEVBVlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQVU1QjtBQUNELE1BQU0sQ0FBTixJQUFZLHdCQUtYO0FBTEQsV0FBWSx3QkFBd0I7SUFDaEMsaUhBQTZCLENBQUE7SUFDN0IsNkdBQTJCLENBQUE7SUFDM0IscUhBQStCLENBQUE7SUFDL0IscUhBQStCLENBQUE7QUFDbkMsQ0FBQyxFQUxXLHdCQUF3QixLQUF4Qix3QkFBd0IsUUFLbkM7QUFDRCxNQUFNLENBQU4sSUFBWSx1QkFNWDtBQU5ELFdBQVksdUJBQXVCO0lBQy9CLDREQUFpQyxDQUFBO0lBQ2pDLDhEQUFtQyxDQUFBO0lBQ25DLGlFQUFzQyxDQUFBO0lBQ3RDLDREQUFpQyxDQUFBO0lBQ2pDLDREQUFpQyxDQUFBO0FBQ3JDLENBQUMsRUFOVyx1QkFBdUIsS0FBdkIsdUJBQXVCLFFBTWxDO0FBQ0QsTUFBTSxDQUFOLElBQVksTUFJWDtBQUpE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ZixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIENvcHlyaWdodCAyMDIyLTIwMjQuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxyXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgICBQbHVnaW4sXHJcbiAgICBDb3Jkb3ZhLFxyXG4gICAgQ29yZG92YVByb3BlcnR5LFxyXG4gICAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sXHJcbn0gZnJvbSBcIkBhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlXCI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gQ29uc3RhbnRzXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuZXhwb3J0IGVudW0gQWRQYXJhbUVycm9yQ29kZXMge1xyXG4gICAgQURfUEFSQU1fSU5ORVIgPSAwLFxyXG4gICAgQURfUEFSQU1fSU5WQUxJRF9SRVFVRVNUID0gMSxcclxuICAgIEFEX1BBUkFNX05FVFdPUktfRVJST1IgPSAyLFxyXG4gICAgQURfUEFSQU1fTk9fQUQgPSAzLFxyXG4gICAgQURfUEFSQU1fQURfTE9BRElORyA9IDQsXHJcbiAgICBBRF9QQVJBTV9MT1dfQVBJID0gNSxcclxuICAgIEFEX1BBUkFNX0JBTk5FUl9BRF9FWFBJUkUgPSA2LFxyXG4gICAgQURfUEFSQU1fQkFOTkVSX0FEX0NBTkNFTCA9IDcsXHJcbiAgICBBRF9QQVJBTV9ITVNfTk9UX1NVUFBPUlRfU0VUX0FQUCA9IDgsXHJcbn1cclxuZXhwb3J0IGVudW0gUmV3YXJkQWRTdGF0dXNFcnJvckNvZGVzIHtcclxuICAgIFJFV0FSRF9BRF9TVEFUVVNfSU5URVJOQUwgPSAwLFxyXG4gICAgUkVXQVJEX0FEX1NUQVRVU19SRVVTRUQgPSAxLFxyXG4gICAgUkVXQVJEX0FEX1NUQVRVU19OT1RfTE9BREVEID0gMixcclxuICAgIFJFV0FSRF9BRF9TVEFUVVNfQkFDS0dST1VORCA9IDMsXHJcbn1cclxuZXhwb3J0IGVudW0gQWRDb250ZW50Q2xhc3NpZmljYXRpb24ge1xyXG4gICAgQURfQ09OVEVOVF9DTEFTU0lGSUNBVElPTl9BID0gXCJBXCIsXHJcbiAgICBBRF9DT05URU5UX0NMQVNTSUZJQ0FUSU9OX1BJID0gXCJQSVwiLFxyXG4gICAgQURfQ09OVEVOVF9DTEFTU0lGSUNBVElPTl9VTktOT1dOID0gXCJcIixcclxuICAgIEFEX0NPTlRFTlRfQ0xBU1NJRklDQVRJT05fSiA9IFwiSlwiLFxyXG4gICAgQURfQ09OVEVOVF9DTEFTU0lGSUNBVElPTl9XID0gXCJXXCIsXHJcbn1cclxuZXhwb3J0IGVudW0gR2VuZGVyIHtcclxuICAgIEZFTUFMRSA9IDIsXHJcbiAgICBNQUxFID0gMSxcclxuICAgIFVOS05PV04gPSAwLFxyXG59XHJcbmV4cG9ydCBlbnVtIE5vblBlcnNvbmFsaXplZEFkIHtcclxuICAgIEFMTE9XX0FMTCA9IDAsXHJcbiAgICBBTExPV19OT05fUEVSU09OQUxJWkVEID0gMSxcclxufVxyXG5leHBvcnQgZW51bSBDaGlsZFByb3RlY3Rpb24ge1xyXG4gICAgVEFHX0ZPUl9DSElMRF9QUk9URUNUSU9OX1VOU1BFQ0lGSUVEID0gLTEsXHJcbiAgICBUQUdfRk9SX0NISUxEX1BST1RFQ1RJT05fRkFMU0UgPSAwLFxyXG4gICAgVEFHX0ZPUl9DSElMRF9QUk9URUNUSU9OX1RSVUUgPSAxLFxyXG59XHJcbmV4cG9ydCBlbnVtIFVuZGVyQWdlT2ZQcm9taXNlIHtcclxuICAgIFBST01JU0VfVU5TUEVDSUZJRUQgPSAtMSxcclxuICAgIFBST01JU0VfRkFMU0UgPSAwLFxyXG4gICAgUFJPTUlTRV9UUlVFID0gMSxcclxufVxyXG5leHBvcnQgZW51bSBCYW5uZXJBZFNpemUge1xyXG4gICAgQkFOTkVSX1NJWkVfMzYwXzU3ID0gXCJCQU5ORVJfU0laRV8zNjBfNTdcIixcclxuICAgIEJBTk5FUl9TSVpFXzM2MF8xNDQgPSBcIkJBTk5FUl9TSVpFXzM2MF8xNDRcIixcclxuICAgIEJBTk5FUl9TSVpFXzE2MF82MDAgPSBcIkJBTk5FUl9TSVpFXzE2MF82MDBcIixcclxuICAgIEJBTk5FUl9TSVpFXzMwMF8yNTAgPSBcIkJBTk5FUl9TSVpFXzMwMF8yNTBcIixcclxuICAgIEJBTk5FUl9TSVpFXzMyMF8xMDAgPSBcIkJBTk5FUl9TSVpFXzMyMF8xMDBcIixcclxuICAgIEJBTk5FUl9TSVpFXzMyMF81MCA9IFwiQkFOTkVSX1NJWkVfMzIwXzUwXCIsXHJcbiAgICBCQU5ORVJfU0laRV80NjhfNjAgPSBcIkJBTk5FUl9TSVpFXzQ2OF82MFwiLFxyXG4gICAgQkFOTkVSX1NJWkVfNzI4XzkwID0gXCJCQU5ORVJfU0laRV83MjhfOTBcIixcclxuICAgIEJBTk5FUl9TSVpFX0RZTkFNSUMgPSBcIkJBTk5FUl9TSVpFX0RZTkFNSUNcIixcclxuICAgIEJBTk5FUl9TSVpFX0lOVkFMSUQgPSBcIkJBTk5FUl9TSVpFX0lOVkFMSURcIixcclxuICAgIEJBTk5FUl9TSVpFX1NNQVJUID0gXCJCQU5ORVJfU0laRV9TTUFSVFwiLFxyXG4gICAgQkFOTkVSX1NJWkVfQURWQU5DRUQgPSBcIkJBTk5FUl9TSVpFX0FEVkFOQ0VEXCIsXHJcbn1cclxuZXhwb3J0IGVudW0gSE1TU2NyZWVuT3JpZW50YXRpb24ge1xyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX0xBTkRTQ0FQRSA9IDAsXHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fVU5TUEVDSUZJRUQgPSAtMSxcclxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9QT1JUUkFJVCA9IDEsXHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fVVNFUiA9IDIsXHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fQkVISU5EID0gMyxcclxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9TRU5TT1IgPSA0LFxyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX05PU0VOU09SID0gNSxcclxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9TRU5TT1JfTEFORFNDQVBFID0gNixcclxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9TRU5TT1JfUE9SVFJBSVQgPSA3LFxyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1JFVkVSU0VfTEFORFNDQVBFID0gOCxcclxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9SRVZFUlNFX1BPUlRSQUlUID0gOSxcclxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9GVUxMX1NFTlNPUiA9IDEwLFxyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1VTRVJfTEFORFNDQVBFID0gMTEsXHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fVVNFUl9QT1JUUkFJVCA9IDEyLFxyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX0ZVTExfVVNFUiA9IDEzLFxyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX0xPQ0tFRCA9IDE0LFxyXG59XHJcbmV4cG9ydCBlbnVtIERlYnVnTmVlZENvbnNlbnQge1xyXG4gICAgQ09OU0VOVF9ERUJVR19ESVNBQkxFRCA9IDAsXHJcbiAgICBDT05TRU5UX0RFQlVHX05FRURfQ09OU0VOVCA9IDEsXHJcbiAgICBDT05TRU5UX0RFQlVHX05PVF9ORUVEX0NPTlNFTlQgPSAyLFxyXG59XHJcbmV4cG9ydCBlbnVtIENvbnNlbnRTdGF0dXMge1xyXG4gICAgQ09OU0VOVF9QRVJTT05BTElaRUQgPSAwLFxyXG4gICAgQ09OU0VOVF9OT05fUEVSU09OQUxJWkVEID0gMSxcclxuICAgIENPTlNFTlRfVU5LTk9XTiA9IDIsXHJcbn1cclxuZXhwb3J0IGVudW0gQXVkaW9Gb2N1c1R5cGUge1xyXG4gICAgR0FJTl9BVURJT19GT0NVU19BTEwgPSAwLFxyXG4gICAgTk9UX0dBSU5fQVVESU9fRk9DVVNfV0hFTl9NVVRFID0gMSxcclxuICAgIE5PVF9HQUlOX0FVRElPX0ZPQ1VTX0FMTCA9IDIsXHJcbn1cclxuZXhwb3J0IGVudW0gTWVkaWFBc3BlY3Qge1xyXG4gICAgQVNQRUNUX0FOWSA9IDEsXHJcbiAgICBBU1BFQ1RfQ1VTVE9NX1NJWkUgPSAtMSxcclxuICAgIEFTUEVDVF9MQU5EU0NBUEUgPSAyLFxyXG4gICAgQVNQRUNUX1BPUlRSQUlUID0gMyxcclxuICAgIEFTUEVDVF9TUVVBUkUgPSA0LFxyXG4gICAgQVNQRUNUX1VOS05PV04gPSAwLFxyXG59XHJcbmV4cG9ydCBlbnVtIENob2ljZXNQb3NpdGlvbiB7XHJcbiAgICBCT1RUT01fTEVGVCA9IDMsXHJcbiAgICBCT1RUT01fUklHSFQgPSAyLFxyXG4gICAgSU5WSVNJQkxFID0gNCxcclxuICAgIFRPUF9MRUZUID0gMCxcclxuICAgIFRPUF9SSUdIVCA9IDEsXHJcbn1cclxuZXhwb3J0IGVudW0gTWVkaWFEaXJlY3Rpb24ge1xyXG4gICAgQU5ZID0gMCxcclxuICAgIExBTkRTQ0FQRSA9IDIsXHJcbiAgICBQT1JUUkFJVCA9IDEsXHJcbn1cclxuZXhwb3J0IGVudW0gTmF0aXZlQWRUZW1wbGF0ZSB7XHJcbiAgICBOQVRJVkVfQURfU01BTExfVEVNUExBVEUgPSBcIk5BVElWRV9BRF9TTUFMTF9URU1QTEFURVwiLFxyXG4gICAgTkFUSVZFX0FEX0ZVTExfVEVNUExBVEUgPSBcIk5BVElWRV9BRF9GVUxMX1RFTVBMQVRFXCIsXHJcbiAgICBOQVRJVkVfQURfQkFOTkVSX1RFTVBMQVRFID0gXCJOQVRJVkVfQURfQkFOTkVSX1RFTVBMQVRFXCIsXHJcbiAgICBOQVRJVkVfQURfVklERU9fVEVNUExBVEUgPSBcIk5BVElWRV9BRF9WSURFT19URU1QTEFURVwiLFxyXG4gICAgTkFUSVZFX0FEX1dJVEhfQVBQX0RPV05MT0FEX0JUTl9URU1QTEFURSA9IFwiTkFUSVZFX0FEX1dJVEhfQVBQX0RPV05MT0FEX0JUTl9URU1QTEFURVwiXHJcbn1cclxuZXhwb3J0IGVudW0gQ29sb3Ige1xyXG4gICAgUkVEID0gXCJSRURcIixcclxuICAgIERLR1JBWSA9IFwiREtHUkFZXCIsXHJcbiAgICBHUkFZID0gXCJHUkFZXCIsXHJcbiAgICBXSElURSA9IFwiV0hJVEVcIixcclxuICAgIEJMVUUgPSBcIkJMVUVcIixcclxuICAgIEJMQUNLID0gXCJCTEFDS1wiLFxyXG4gICAgTFRHUkFZID0gXCJMVEdSQVlcIixcclxuICAgIE1BR0VOVEEgPSBcIk1BR0VOVEFcIixcclxuICAgIFlFTExPVyA9IFwiWUVMTE9XXCIsXHJcbiAgICBDWUFOID0gXCJDWUFOXCIsXHJcbiAgICBHUkVFTiA9IFwiR1JFRU5cIixcclxuICAgIFRSQU5TUEFSRU5UID0gXCJUUkFOU1BBUkVOVFwiLFxyXG59XHJcbmV4cG9ydCBlbnVtIEluc3RhbGxSZWZlcnJlclJlc3BvbnNlcyB7XHJcbiAgICBTRVJWSUNFX0RJU0NPTk5FQ1RFRCA9IC0xLFxyXG4gICAgREVWRUxPUEVSX0VSUk9SID0gMyxcclxuICAgIFNFUlZJQ0VfVU5BVkFJTEFCTEUgPSAxLFxyXG4gICAgT0sgPSAwLFxyXG4gICAgRkVBVFVSRV9OT1RfU1VQUE9SVEVEID0gMixcclxufVxyXG5leHBvcnQgZW51bSBBbmNob3Ige1xyXG4gICAgVE9QID0gXCJ0b3BcIixcclxuICAgIEJPVFRPTSA9IFwiYm90dG9tXCIsXHJcbiAgICBJTlZJU0lCTEUgPSBcImludmlzaWJsZVwiLFxyXG59XHJcbmV4cG9ydCBlbnVtIEJhbm5lckFkRXZlbnRzIHtcclxuICAgIEJBTk5FUl9BRF9DTE9TRUQgPSBcImJhbm5lcl9hZF9jbG9zZWRcIixcclxuICAgIEJBTk5FUl9BRF9GQUlMRUQgPSBcImJhbm5lcl9hZF9mYWlsZWRcIixcclxuICAgIEJBTk5FUl9BRF9MRUFWRSA9IFwiYmFubmVyX2FkX2xlYXZlXCIsXHJcbiAgICBCQU5ORVJfQURfT1BFTkVEID0gXCJiYW5uZXJfYWRfb3BlbmVkXCIsXHJcbiAgICBCQU5ORVJfQURfTE9BREVEID0gXCJiYW5uZXJfYWRfbG9hZGVkXCIsXHJcbiAgICBCQU5ORVJfQURfQ0xJQ0tFRCA9IFwiYmFubmVyX2FkX2NsaWNrZWRcIixcclxuICAgIEJBTk5FUl9BRF9JTVBSRVNTSU9OID0gXCJiYW5uZXJfYWRfaW1wcmVzc2lvblwiLFxyXG59XHJcbmV4cG9ydCBlbnVtIEludGVyc3RpdGlhbEFkRXZlbnRzIHtcclxuICAgIElOVEVSU1RJVElBTF9BRF9DTE9TRUQgPSBcImludGVyc3RpdGlhbF9hZF9jbG9zZWRcIixcclxuICAgIElOVEVSU1RJVElBTF9BRF9GQUlMRUQgPSBcImludGVyc3RpdGlhbF9hZF9mYWlsZWRcIixcclxuICAgIElOVEVSU1RJVElBTF9BRF9MRUFWRSA9IFwiaW50ZXJzdGl0aWFsX2FkX2xlYXZlXCIsXHJcbiAgICBJTlRFUlNUSVRJQUxfQURfT1BFTkVEID0gXCJpbnRlcnN0aXRpYWxfYWRfb3BlbmVkXCIsXHJcbiAgICBJTlRFUlNUSVRJQUxfQURfTE9BREVEID0gXCJpbnRlcnN0aXRpYWxfYWRfbG9hZGVkXCIsXHJcbiAgICBJTlRFUlNUSVRJQUxfQURfQ0xJQ0tFRCA9IFwiaW50ZXJzdGl0aWFsX2FkX2NsaWNrZWRcIixcclxuICAgIElOVEVSU1RJVElBTF9BRF9JTVBSRVNTSU9OID0gXCJpbnRlcnN0aXRpYWxfYWRfaW1wcmVzc2lvblwiLFxyXG4gICAgSU5URVJTVElUSUFMX0FEX1JFV0FSREVEID0gXCJpbnRlcnN0aXRpYWxfYWRfcmV3YXJkZWRcIixcclxuICAgIElOVEVSU1RJVElBTF9SRVdBUkRfQURfQ0xPU0VEID0gXCJpbnRlcnN0aXRpYWxfcmV3YXJkX2FkX2Nsb3NlZFwiLFxyXG4gICAgSU5URVJTVElUSUFMX1JFV0FSRF9BRF9GQUlMRURfVE9fTE9BRCA9IFwiaW50ZXJzdGl0aWFsX3Jld2FyZF9hZF9mYWlsZWRfdG9fbG9hZFwiLFxyXG4gICAgSU5URVJTVElUSUFMX1JFV0FSRF9BRF9MRUZUX0FQUCA9IFwiaW50ZXJzdGl0aWFsX3Jld2FyZF9hZF9sZWZ0X2FwcFwiLFxyXG4gICAgSU5URVJTVElUSUFMX1JFV0FSRF9BRF9MT0FERUQgPSBcImludGVyc3RpdGlhbF9yZXdhcmRfYWRfbG9hZGVkXCIsXHJcbiAgICBJTlRFUlNUSVRJQUxfUkVXQVJEX0FEX09QRU5FRCA9IFwiaW50ZXJzdGl0aWFsX3Jld2FyZF9hZF9vcGVuZWRcIixcclxuICAgIElOVEVSU1RJVElBTF9SRVdBUkRfQURfQ09NUExFVEVEID0gXCJpbnRlcnN0aXRpYWxfcmV3YXJkX2FkX2NvbXBsZXRlZFwiLFxyXG4gICAgSU5URVJTVElUSUFMX1JFV0FSRF9BRF9TVEFSVEVEID0gXCJpbnRlcnN0aXRpYWxfcmV3YXJkX2FkX3N0YXJ0ZWRcIixcclxufVxyXG5leHBvcnQgZW51bSBTcGxhc2hBZEV2ZW50cyB7XHJcbiAgICBTUExBU0hfQURfRkFJTEVEX1RPX0xPQUQgPSBcInNwbGFzaF9hZF9mYWlsZWRfdG9fbG9hZFwiLFxyXG4gICAgU1BMQVNIX0FEX0xPQURFRCA9IFwic3BsYXNoX2FkX2xvYWRlZFwiLFxyXG4gICAgU1BMQVNIX0FEX0RJU01JU1NFRCA9IFwic3BsYXNoX2FkX2Rpc21pc3NlZFwiLFxyXG4gICAgU1BMQVNIX0FEX1NIT1dFRCA9IFwic3BsYXNoX2FkX3Nob3dlZFwiLFxyXG4gICAgU1BMQVNIX0FEX0NMSUNLID0gXCJzcGxhc2hfYWRfY2xpY2tcIixcclxufVxyXG5leHBvcnQgZW51bSBSb2xsQWRFdmVudHMge1xyXG4gICAgUk9MTF9BRF9MT0FEX0ZBSUxFRCA9IFwicm9sbF9hZF9sb2FkX2ZhaWxlZFwiLFxyXG4gICAgUk9MTF9BRF9MT0FERUQgPSBcInJvbGxfYWRfbG9hZGVkXCIsXHJcbiAgICBST0xMX0FEX01FRElBX0NIQU5HRUQgPSBcInJvbGxfYWRfbWVkaWFfY2hhbmdlZFwiLFxyXG4gICAgUk9MTF9BRF9DTElDS0VEID0gXCJyb2xsX2FkX2NsaWNrZWRcIixcclxuICAgIFJPTExfQURfTUVESUFfUFJPR1JFU1MgPSBcInJvbGxfYWRfbWVkaWFfcHJvZ3Jlc3NcIixcclxuICAgIFJPTExfQURfTUVESUFfU1RBUlQgPSBcInJvbGxfYWRfbWVkaWFfc3RhcnRcIixcclxuICAgIFJPTExfQURfTUVESUFfUEFVU0UgPSBcInJvbGxfYWRfbWVkaWFfcGF1c2VcIixcclxuICAgIFJPTExfQURfTUVESUFfU1RPUCA9IFwicm9sbF9hZF9tZWRpYV9zdG9wXCIsXHJcbiAgICBST0xMX0FEX01FRElBX0NPTVBMRVRJT04gPSBcInJvbGxfYWRfbWVkaWFfY29tcGxldGlvblwiLFxyXG4gICAgUk9MTF9BRF9NRURJQV9FUlJPUiA9IFwicm9sbF9hZF9tZWRpYV9lcnJvclwiLFxyXG4gICAgUk9MTF9BRF9NRURJQV9VTk1VVEUgPSBcInJvbGxfYWRfbWVkaWFfdW5tdXRlXCIsXHJcbiAgICBST0xMX0FEX01FRElBX01VVEUgPSBcInJvbGxfYWRfbWVkaWFfbXV0ZVwiLFxyXG4gICAgUk9MTF9BRF9XSFlfVEhJU19BRCA9IFwicm9sbF9hZF93aHlfdGhpc19hZFwiLFxyXG59XHJcbmV4cG9ydCBlbnVtIFJld2FyZEFkRXZlbnRzIHtcclxuICAgIFJFV0FSRF9NRVRBREFUQV9DSEFOR0VEID0gXCJyZXdhcmRfbWV0YWRhdGFfY2hhbmdlZFwiLFxyXG4gICAgUkVXQVJEX0FEX0ZBSUxFRF9UT19MT0FEX0xPQUQgPSBcInJld2FyZF9hZF9mYWlsZWRfdG9fbG9hZF9sb2FkXCIsXHJcbiAgICBSRVdBUkRFRF9MT0FERUQgPSBcInJld2FyZGVkX2xvYWRlZFwiLFxyXG4gICAgUkVXQVJERURfU1RBVFVTID0gXCJyZXdhcmRlZF9zdGF0dXNcIixcclxuICAgIFJFV0FSRF9BRF9DTE9TRURfU1RBVFVTID0gXCJyZXdhcmRfYWRfY2xvc2VkX3N0YXR1c1wiLFxyXG4gICAgUkVXQVJEX0FEX09QRU5FRF9TVEFUVVMgPSBcInJld2FyZF9hZF9vcGVuZWRfc3RhdHVzXCIsXHJcbiAgICBSRVdBUkRfQURfRkFJTEVEX1RPX1NIT1cgPSBcInJld2FyZF9hZF9mYWlsZWRfdG9fc2hvd1wiLFxyXG4gICAgUkVXQVJERUQgPSBcInJld2FyZGVkXCIsXHJcbiAgICBSRVdBUkRfQURfQ0xPU0VEID0gXCJyZXdhcmRfYWRfY2xvc2VkXCIsXHJcbiAgICBSRVdBUkRfQURfRkFJTEVEX1RPX0xPQUQgPSBcInJld2FyZF9hZF9mYWlsZWRfdG9fbG9hZFwiLFxyXG4gICAgUkVXQVJEX0FEX0xPQURFRCA9IFwicmV3YXJkX2FkX2xvYWRlZFwiLFxyXG4gICAgUkVXQVJEX0FEX09QRU5FRCA9IFwicmV3YXJkX2FkX29wZW5lZFwiLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBEZXRhaWxlZENyZWF0aXZlVHlwZSB7XHJcbiAgQklHX0lNRyA9IDkwMSxcclxuICBWSURFTyA9IDkwMyxcclxuICBUSFJFRV9JTUcgPSA5MDQsXHJcbiAgU01BTExfSU1HID0gOTA1LFxyXG4gIFNJTkdMRV9JTUcgPSA5MDksXHJcbiAgU0hPUlRfVEVYVCA9IDkxMyxcclxuICBMT05HX1RFWFQgPSA5MTRcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTmF0aXZlQWRFdmVudHMge1xyXG4gICAgTkFUSVZFX0FEX0RJU0xJS0VEID0gXCJuYXRpdmVfYWRfZGlzbGlrZWRcIixcclxuICAgIE5BVElWRV9BRF9MT0FERURfTE9BRCA9IFwibmF0aXZlX2FkX2xvYWRlZF9sb2FkXCIsXHJcbiAgICBOQVRJVkVfQURfQ0xPU0VEID0gXCJuYXRpdmVfYWRfY2xvc2VkXCIsXHJcbiAgICBOQVRJVkVfQURfRkFJTEVEID0gXCJuYXRpdmVfYWRfZmFpbGVkXCIsXHJcbiAgICBOQVRJVkVfQURfTEVBVkUgPSBcIm5hdGl2ZV9hZF9sZWF2ZVwiLFxyXG4gICAgTkFUSVZFX0FEX09QRU5FRCA9IFwibmF0aXZlX2FkX29wZW5lZFwiLFxyXG4gICAgTkFUSVZFX0FEX0xPQURFRCA9IFwibmF0aXZlX2FkX2xvYWRlZFwiLFxyXG4gICAgTkFUSVZFX0FEX0NMSUNLRUQgPSBcIm5hdGl2ZV9hZF9jbGlja2VkXCIsXHJcbiAgICBOQVRJVkVfQURfSU1QUkVTU0lPTiA9IFwibmF0aXZlX2FkX2ltcHJlc3Npb25cIixcclxuICAgIFZJREVPX09QRVJBVE9SX1ZJREVPX1NUQVJUID0gXCJ2aWRlb19vcGVyYXRvcl92aWRlb19zdGFydFwiLFxyXG4gICAgVklERU9fT1BFUkFUT1JfVklERU9fUExBWSA9IFwidmlkZW9fb3BlcmF0b3JfdmlkZW9fcGxheVwiLFxyXG4gICAgVklERU9fT1BFUkFUT1JfVklERU9fUEFVU0UgPSBcInZpZGVvX29wZXJhdG9yX3ZpZGVvX3BhdXNlXCIsXHJcbiAgICBWSURFT19PUEVSQVRPUl9WSURFT19FTkQgPSBcInZpZGVvX29wZXJhdG9yX3ZpZGVvX2VuZFwiLFxyXG4gICAgVklERU9fT1BFUkFUT1JfVklERU9fTVVURSA9IFwidmlkZW9fb3BlcmF0b3JfdmlkZW9fbXV0ZVwiLFxyXG4gICAgQVBQX0RPV05MT0FEX1NUQVRVU19DSEFOR0VEID0nYXBwX2Rvd25sb2FkX3N0YXR1c19jaGFuZ2VkJyxcclxuICAgIEFQUF9ET1dOTE9BRF9OT05fV0lGSV9ET1dOTE9BRCA9ICdhcHBfZG93bmxvYWRfbm9uX3dpZmlfZG93bmxvYWQnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFZhc3RFdmVudHMge1xyXG4gICAgVkFTVF9MT0FEX1NVQ0NFU1MgPSAndmFzdF9sb2FkX3N1Y2Nlc3MnLFxyXG4gICAgVkFTVF9MT0FEX0ZBSUxFRCA9ICd2YXN0X2xvYWRfZmFpbGVkJyxcclxuICAgIFZBU1RfUExBWV9TVEFURV9DSEFOR0VEID0gJ3Zhc3RfcGxheV9zdGF0ZV9jaGFuZ2VkJyxcclxuICAgIFZBU1RfVk9MVU1FX0NIQU5HRUQgPSAndmFzdF92b2x1bWVfY2hhbmdlZCcsXHJcbiAgICBWQVNUX1NDUkVFTl9WSUVXX0NIQU5HRUQgPSAndmFzdF9zY3JlZW5fdmlld19jaGFuZ2VkJyxcclxuICAgIFZBU1RfUFJPR1JFU1NfQ0hBTkdFRCA9ICd2YXN0X3Byb2dyZXNzX2NoYW5nZWQnLFxyXG4gICAgVkFTVF9PTl9TVUNDRVNTID0gJ3Zhc3Rfb25fc3VjY2VzcycsXHJcbiAgICBWQVNUX09OX0ZBSUxFRCA9ICd2YXN0X29uX2ZhaWxlZCcsXHJcbiAgICBWQVNUX0FEX1JFQURZID0gJ3Zhc3RfYWRfcmVhZHknLFxyXG4gICAgVkFTVF9BRF9GSU5JU0ggPSAndmFzdF9hZF9maW5pc2gnLFxyXG4gICAgVkFTVF9CVUZGRVJfU1RBUlQ9ICd2YXN0X2J1ZmZlcl9zdGFydCcsXHJcbiAgICBWQVNUX0JVRkZFUl9FTkQ9ICd2YXN0X2J1ZmZlcl9lbmQnLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBBY3RpdmF0ZVN0eWxlIHsgXHRcclxuICAgIEJPVFRPTV9CQU5ORVIgPSAxLFxyXG4gICAgQ09ORklSTV9ESUFMT0cgPSAyXHJcbn1cclxuZXhwb3J0IGVudW0gQ3JlYXRpdmVNYXRjaFR5cGUge1xyXG4gICAgRVhBQ1QgPSAwLFxyXG4gICAgU01BUlQ9IDEsXHJcbiAgICBVTktOT1dOID0gMixcclxuICAgIEFOWSA9IDMsXHJcbiAgICBMQU5EU0NBUEUgPSA0LFxyXG4gICAgUE9SVFJBSVQgPSA1LFxyXG4gICAgU1FVQVJFID0gNlxyXG4gIFxyXG59XHJcbmV4cG9ydCBlbnVtIEFwcERvd25sb2FkU3RhdHVzIHtcclxuICAgIERPV05MT0FEID0gXCJET1dOTE9BRFwiLFxyXG4gICAgV0FJVElOR19GT1JfV0lGSSA9IFwiV0FJVElOR19GT1JfV0lGSVwiLFxyXG4gICAgV0FJVElORyA9IFwiV0FJVElOR1wiLFxyXG4gICAgRE9XTkxPQURJTkcgPSBcIkRPV05MT0FESU5HXCIsXHJcbiAgICBQQVVTRSA9IFwiUEFVU0VcIixcclxuICAgIFJFU1VNRSA9IFwiUkVTVU1FXCIsXHJcbiAgICBET1dOTE9BREVEID0gXCJET1dOTE9BREVEXCIsXHJcbiAgICBET1dOTE9BREZBSUxFRCA9IFwiRE9XTkxPQURGQUlMRURcIixcclxuICAgIElOU1RBTExJTkcgPSBcIklOU1RBTExJTkdcIixcclxuICAgIElOU1RBTEwgPSBcIklOU1RBTExcIixcclxuICAgIElOU1RBTExFRCA9IFwiSU5TVEFMTEVEXCJcclxuICB9XHJcblxyXG4gIGV4cG9ydCBlbnVtIEF1dG9QbGF5TmV0VHlwZXtcclxuICAgIFdJRklfT05MWSA9IDAsXHJcbiAgICBCT1RIX1dJRklfQU5EX0RBVEEgPSAxLFxyXG4gICAgRk9SQklEX0FVVE9fUExBWSA9IDJcclxuICB9XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gSW50ZXJmYWNlc1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0Qm91bmRzIHtcclxuICAgIG1hcmdpbkxlZnQ/OiBudW1iZXI7XHJcbiAgICBtYXJnaW5SaWdodD86IG51bWJlcjtcclxuICAgIG1hcmdpblRvcD86IG51bWJlcjtcclxuICAgIG1hcmdpbkJvdHRvbT86IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIG1hcmdpbkxlZnQ/OiBudW1iZXI7XHJcbiAgICBtYXJnaW5SaWdodD86IG51bWJlcjtcclxuICAgIG1hcmdpblRvcD86IG51bWJlcjtcclxuICAgIG1hcmdpbkJvdHRvbT86IG51bWJlcjtcclxuICAgIHBhZ2VYT2Zmc2V0PzogbnVtYmVyO1xyXG4gICAgcGFnZVlPZmZzZXQ/OiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBZFBhcmFtIHtcclxuICAgIGdlbmRlcj86IEdlbmRlcjtcclxuICAgIGFkQ29udGVudENsYXNzaWZpY2F0aW9uPzogQWRDb250ZW50Q2xhc3NpZmljYXRpb247XHJcbiAgICB0YWdGb3JVbmRlckFnZU9mUHJvbWlzZT86IFVuZGVyQWdlT2ZQcm9taXNlO1xyXG4gICAgdGFnRm9yQ2hpbGRQcm90ZWN0aW9uPzogQ2hpbGRQcm90ZWN0aW9uO1xyXG4gICAgbm9uUGVyc29uYWxpemVkQWQ/OiBOb25QZXJzb25hbGl6ZWRBZDtcclxuICAgIGFwcENvdW50cnk/OiBzdHJpbmc7XHJcbiAgICBhcHBMYW5nPzogc3RyaW5nO1xyXG4gICAgY291bnRyeUNvZGU/OiBzdHJpbmc7XHJcbiAgICBiZWxvbmdDb3VudHJ5Q29kZT86IHN0cmluZztcclxuICAgIGNvbnNlbnQ/OiBzdHJpbmc7XHJcbiAgICByZXF1ZXN0TG9jYXRpb24/OiBib29sZWFuO1xyXG4gICAgZGV0YWlsZWRDcmVhdGl2ZVR5cGU/OiBEZXRhaWxlZENyZWF0aXZlVHlwZVtdO1xyXG4gICAgbG9jYXRpb24/IDpMb2NhdGlvbixcclxuICAgIGNvbnRlbnRCdW5kbGU/IDogQ29udGVudEJ1bmRsZSxcclxuICAgIHRNYXg/OiBudW1iZXIsIFxyXG4gICAgYWRkQmlkZGluZ1BhcmFtTWFwPzogQWRkQmlkZGluZ1BhcmFtTWFwLFx0XHJcbiAgICBzZXRCaWRkaW5nUGFyYW1NYXA/OiB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogQmlkZGluZ1BhcmFtO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFkZEJpZGRpbmdQYXJhbU1hcHtcclxuICAgIHNsb3RJZDogc3RyaW5nLFxyXG4gICAgYmlkZGluZ1BhcmFtOiBCaWRkaW5nUGFyYW0sXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9jYXRpb24ge1xyXG4gICAgbGF0OiBudW1iZXIsXHJcbiAgICBsbmc6IG51bWJlclxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29udGVudEJ1bmRsZXtcclxuICAgIGNoYW5uZWxDYXRlZ29yeUNvZGU/OiBzdHJpbmcsXHJcbiAgICB0aXRsZT86IHN0cmluZyxcclxuICAgIHRhZ3M/OiBzdHJpbmcsXHJcbiAgICByZWxhdGVkUGVvcGxlPzogc3RyaW5nLFxyXG4gICAgY29udGVudD86IHN0cmluZyxcclxuICAgIGNvbnRlbnRJRD86IG51bWJlcixcclxuICAgIGNhdGVnb3J5Pzogc3RyaW5nLFxyXG4gICAgc3ViY2F0ZWdvcnk/OiBzdHJpbmcsXHJcbiAgICB0aGlyZENhdGVnb3J5Pzogc3RyaW5nXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBITVNSZXF1ZXN0T3B0aW9ucyB7XHJcbiAgICBhZENvbnRlbnRDbGFzc2lmaWNhdGlvbj86IEFkQ29udGVudENsYXNzaWZpY2F0aW9uO1xyXG4gICAgYXBwTGFuZz86IHN0cmluZztcclxuICAgIGFwcENvdW50cnk/OiBzdHJpbmc7XHJcbiAgICB0YWdGb3JDaGlsZFByb3RlY3Rpb24/OiBDaGlsZFByb3RlY3Rpb247XHJcbiAgICB0YWdGb3JVbmRlckFnZU9mUHJvbWlzZT86IFVuZGVyQWdlT2ZQcm9taXNlO1xyXG4gICAgbm9uUGVyc29uYWxpemVkQWQ/OiBOb25QZXJzb25hbGl6ZWRBZDtcclxuICAgIGNvbnNlbnQ/OiBzdHJpbmc7XHJcbiAgICByZXF1ZXN0TG9jYXRpb24/OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSE1TUmV3YXJkIHtcclxuICAgIHJld2FyZEFtb3VudDogbnVtYmVyO1xyXG4gICAgcmV3YXJkTmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSE1TUmV3YXJkVmVyaWZ5Q29uZmlnIHtcclxuICAgIGRhdGE6IHN0cmluZztcclxuICAgIHVzZXJJZDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgT2FpZFJlc3VsdCB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgaXNMaW1pdEFkVHJhY2luZ0VuYWJsZWQ6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBEdXJhdGlvbiB7XHJcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUm9sbEFkTG9hZGVyUGFyYW1zIHtcclxuICAgIGFkSWQ6IHN0cmluZztcclxuICAgIHRvdGFsRHVyYXRpb246IG51bWJlcjtcclxuICAgIG1heENvdW50OiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBWaWRlb0NvbmZpZ3VyYXRpb24ge1xyXG4gICAgYXVkaW9Gb2N1c1R5cGU/OiBBdWRpb0ZvY3VzVHlwZTtcclxuICAgIGNsaWNrVG9GdWxsU2NyZWVuUmVxdWVzdD86IGJvb2xlYW47XHJcbiAgICBjdXN0b21pemVPcGVyYXRlUmVxdWVzdGVkPzogYm9vbGVhbjtcclxuICAgIGlzU3RhcnRNdXRlZD86IGJvb2xlYW47XHJcbiAgICBhdXRvUGxheU5ldHdvcms/OiBBdXRvUGxheU5ldFR5cGU7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBOYXRpdmVBZENvbmZpZ3VyYXRpb24ge1xyXG4gICAgYWRTaXplOiBBZFNpemU7XHJcbiAgICBjaG9pY2VzUG9zaXRpb24/OiBDaG9pY2VzUG9zaXRpb247XHJcbiAgICBtZWRpYUFzcGVjdD86IE1lZGlhQXNwZWN0O1xyXG4gICAgbWVkaWFEaXJlY3Rpb24/OiBNZWRpYURpcmVjdGlvbjtcclxuICAgIHJldHVyblVybHNGb3JJbWFnZXM/OiBib29sZWFuO1xyXG4gICAgcmVxdWVzdEN1c3RvbURpc2xpa2VUaGlzQWQ/OiBib29sZWFuO1xyXG4gICAgcmVxdWVzdE11bHRpSW1hZ2VzPzogYm9vbGVhbjtcclxuICAgIHZpZGVvQ29uZmlndXJhdGlvbj86IFZpZGVvQ29uZmlndXJhdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWaWRlb09wZXJhdG9yQXNwZWN0UmF0aW8ge1xyXG4gICAgdmlkZW9PcGVyYXRvckdldEFzcGVjdFJhdGlvOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmF0aXZlQWRMb2FkT3B0aW9ucyB7XHJcbiAgICBhZElkPzogc3RyaW5nO1xyXG4gICAgYWQ/OiBBZFBhcmFtO1xyXG4gICAgbmF0aXZlQWRPcHRpb25zPzogTmF0aXZlQWRDb25maWd1cmF0aW9uO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRTaXplIHtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE5hdGl2ZUFkT3B0aW9ucyB7XHJcbiAgICBkaXY6IHN0cmluZztcclxuICAgIHRlbXBsYXRlPzogTmF0aXZlQWRUZW1wbGF0ZTtcclxuICAgIGJnPzogQ29sb3I7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBSb2xsQWRMb2FkT3B0aW9ucyB7XHJcbiAgICBmaWxlPzogc3RyaW5nO1xyXG4gICAgYWRQYXJhbT86IEFkUGFyYW07XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBSZWZlcnJlckRldGFpbHMge1xyXG4gICAgcmVzcG9uc2VDb2RlPzogSW5zdGFsbFJlZmVycmVyUmVzcG9uc2VzO1xyXG4gICAgaW5zdGFsbFJlZmVycmVyPzogc3RyaW5nO1xyXG4gICAgcmVmZXJyZXJDbGlja1RpbWVzdGFtcD86IG51bWJlcjtcclxuICAgIGluc3RhbGxCZWdpblRpbWVzdGFtcD86IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENvbnNlbnRVcGRhdGVSZXN1bHQge1xyXG4gICAgY29uc2VudFN0YXR1cz86IENvbnNlbnRTdGF0dXM7XHJcbiAgICBpc05lZWRDb25zZW50PzogYm9vbGVhbjtcclxuICAgIGFkUHJvdmlkZXJzPzogQWRQcm92aWRlcltdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRQcm92aWRlciB7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICBwcml2YWN5UG9saWN5VXJsPzogc3RyaW5nO1xyXG4gICAgc2VydmljZUFyZWE/OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTcGxhc2hBZExvYWRPcHRpb25zIHtcclxuICAgIGFkSWQ6IHN0cmluZztcclxuICAgIG9yaWVudGF0aW9uPzogSE1TU2NyZWVuT3JpZW50YXRpb247XHJcbiAgICBhZFBhcmFtPzogQWRQYXJhbTtcclxuICAgIGxvZ29BbmNob3I/OiBBbmNob3I7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBWYXN0TG9hZE9wdGlvbnMge1xyXG4gICAgYWRQYXJhbT86IFZhc3RDb25maWd1cmF0aW9uLFxyXG4gICAgcGxheWVyQ29uZmlnPzogUGxheWVyQ29uZmlnLFxyXG4gICAgaXNUZXN0QWQ/OiBib29sZWFuLFxyXG4gICAgaXNBZExvYWRXaXRoQWRzRGF0YT86IGJvb2xlYW4sXHJcbiAgICBpc0N1c3RvbVZpZGVvUGxheWVyPzogYm9vbGVhblxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVmFzdENvbmZpZ3VyYXRpb24ge1xyXG4gICAgYWRJZD86IHN0cmluZyxcclxuICAgIHRvdGFsRHVyYXRpb24/OiBudW1iZXIsXHJcbiAgICBjcmVhdGl2ZU1hdGNoU3RyYXRlZ3k/OiBDcmVhdGl2ZU1hdGNoVHlwZSxcclxuICAgIGFsbG93TW9iaWxlVHJhZmZpYz86IGJvb2xlYW4sXHJcbiAgICBhZE9yaWVudGF0aW9uPzpNZWRpYURpcmVjdGlvbixcclxuICAgIG1heEFkUG9kcz86IG51bWJlcixcclxuICAgIHJlcXVlc3RPcHRpb24/OiBITVNSZXF1ZXN0T3B0aW9uc1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUGxheWVyQ29uZmlnIHtcclxuICAgIGlzRW5hYmxlQ3V0b3V0PzogYm9vbGVhbixcclxuICAgIGlzRW5hYmxlUG9ydHJhaXQ/OiBib29sZWFuLFxyXG4gICAgaXNFbmFibGVSb3RhdGlvbj86IGJvb2xlYW4sXHJcbiAgICBpc1NraXBMaW5lYXJBZD86IGJvb2xlYW4sXHJcbiAgICBpc0ZvcmNlTXV0ZT86Ym9vbGVhbixcclxuICAgIGlzSW5kdXN0cnlJY29uU2hvdz86Ym9vbGVhblxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVmFzdFNka0NvbmZpZ3VyYXRpb257XHJcbiAgICBodHRwQ2FsbFRpbWVvdXRNczpudW1iZXIsXHJcbiAgICBodHRwQ29ubmVjdFRpbWVvdXRNczpudW1iZXIsXHJcbiAgICBodHRwS2VlcEFsaXZlRHVyYXRpb25NczpudW1iZXIsXHJcbiAgICBodHRwUmVhZFRpbWVvdXRNczpudW1iZXIsXHJcbiAgICBtYXhIdHRwQ29ubmVjdGlvbnM6bnVtYmVyLFxyXG4gICAgbWF4UmVkaXJlY3RXcmFwcGVyTGltaXQ6bnVtYmVyLFxyXG4gICAgaXNUZXN0OmJvb2xlYW4sXHJcbiAgICB2YXN0RXZlbnRSZXRyeUJhdGNoU2l6ZTpudW1iZXIsXHJcbiAgICB2YXN0RXZlbnRSZXRyeUludGVydmFsU2Vjb25kczpudW1iZXIsXHJcbiAgICB2YXN0RXZlbnRSZXRyeVVwbG9hZFRpbWVzOm51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFkdmVydGlzZXJJbmZve1xyXG4gICAgc2VxOm51bWJlcixcclxuICAgIGtleTpzdHJpbmcsXHJcbiAgICB2YWx1ZTpzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBJbmZvIHtcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIHZlcnNpb25OYW1lOiBzdHJpbmcsXHJcbiAgICBkZXZlbG9wZXJOYW1lOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9tb3RlSW5mbyB7XHJcbiAgICB0eXBlOiBudW1iZXIsXHJcbiAgICBuYW1lOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCaWRkaW5nSW5mbyB7XHJcbiAgICBwcmljZTogbnVtYmVyLFxyXG4gICAgY3VyOiBzdHJpbmcsXHJcbiAgICBudXJsOiBzdHJpbmcsXHJcbiAgICBsdXJsOiBzdHJpbmcsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmlkZGluZ1BhcmFtIHsgXHJcbiAgICBiaWRGbG9vciA6bnVtYmVyLFxyXG4gICAgYmlkRmxvb3JDdXIgOiBzdHJpbmcsIFxyXG4gICAgYnBrZ05hbWU6IHN0cmluZ1tdXHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBNb2R1bGVzXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0Fkc1wiLFxyXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1hZHNwcmltZVwiLFxyXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkc1wiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0FkcyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKSBITVNJbnRlcnN0aXRpYWxBZCA9IEhNU0ludGVyc3RpdGlhbEFkO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpIEhNU0Jhbm5lckFkID0gSE1TQmFubmVyQWQ7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KCkgSE1TU3BsYXNoQWQgPSBITVNTcGxhc2hBZDtcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKSBITVNSZXdhcmRBZCA9IEhNU1Jld2FyZEFkO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpIEhNU05hdGl2ZUFkID0gSE1TTmF0aXZlQWQ7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KCkgSE1TUm9sbEFkID0gSE1TUm9sbEFkO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpIEhNU1Zhc3QgPSBITVNWYXN0O1xyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBvbihldmVudDogc3RyaW5nLCBjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRTREtWZXJzaW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldFJlcXVlc3RPcHRpb25zKCk6IFByb21pc2U8SE1TUmVxdWVzdE9wdGlvbnM+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0UmVxdWVzdE9wdGlvbnMocmVxdWVzdE9wdGlvbnM6IEhNU1JlcXVlc3RPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldENvbnNlbnQoY29uc2VudDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEFwcEFjdGl2YXRlU3R5bGUoKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QXBwQWN0aXZhdGVTdHlsZShzdHlsZTpudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QXBwSW5zdGFsbGVkTm90aWZ5KHN0YXR1czpib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzQXBwSW5zdGFsbGVkTm90aWZ5KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBhZGRUZXN0RGV2aWNlSWQodGVzdERldmljZUlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0VGVzdERldmljZUlkKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldFVuZGVyQWdlT2ZQcm9taXNlKHVuZGVyQWdlT2ZQcm9taXNlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldENvbnNlbnRTdGF0dXMoY29uc2VudFN0YXR1czogQ29uc2VudFN0YXR1cyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXREZWJ1Z05lZWRDb25zZW50KGRlYnVnTmVlZENvbnNlbnQ6IERlYnVnTmVlZENvbnNlbnQpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZXF1ZXN0Q29uc2VudFVwZGF0ZSgpOiBQcm9taXNlPENvbnNlbnRVcGRhdGVSZXN1bHQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgdmVyaWZ5QWRJZChhZElkOiBzdHJpbmcsIGlzTGltaXRBZFRyYWNraW5nOiBib29sZWFuKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEFkdmVydGlzaW5nSWRJbmZvKCk6IFByb21pc2U8T2FpZFJlc3VsdD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZWZlcnJlckNsaWVudFN0YXJ0Q29ubmVjdGlvbihpc1Rlc3Q/OiBib29sZWFuKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVmZXJyZXJDbGllbnRFbmRDb25uZWN0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZWZlcnJlckNsaWVudElzUmVhZHkoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEluc3RhbGxSZWZlcnJlcihpbnN0YWxsQ2hhbm5lbD86c3RyaW5nKTogUHJvbWlzZTxSZWZlcnJlckRldGFpbHM+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaW5pdFZhc3QodmFzdFNka0NvbmZpZ3VyYXRpb246VmFzdFNka0NvbmZpZ3VyYXRpb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0VmFzdFNka0NvbmZpZ3VyYXRpb24oKTogUHJvbWlzZTxWYXN0U2RrQ29uZmlndXJhdGlvbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICB1cGRhdGVTZGtTZXJ2ZXJDb25maWcoc2xvdElkOnN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICB1c2VyQWNjZXB0QWRMaWNlbnNlKGlzQWNjZXB0TGljZW5zZTpib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEV2ZW50UHJvY2Vzc29yKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0Fkc1wiLFxyXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1hZHNwcmltZVwiLFxyXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkcy5ITVNCYW5uZXJBZFwiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0Jhbm5lckFkIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIG9uKGV2ZW50TmFtZTogQmFubmVyQWRFdmVudHMsIGNhbGxiYWNrOiAocmVzdWx0PzogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGFzeW5jIGNyZWF0ZShkaXZJZDogc3RyaW5nLCBib3VuZHM/OiBMYXlvdXRCb3VuZHMpOiBQcm9taXNlPEhNU0Jhbm5lckFkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNjcm9sbCgpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0QWRJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRBZElkKGFkSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRCYW5uZXJBZFNpemUoKTogUHJvbWlzZTxBZFNpemU+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QmFubmVyQWRTaXplKGJhbm5lckFkU2l6ZTogQmFubmVyQWRTaXplIHwgQWRTaXplKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldEJhY2tncm91bmRDb2xvcihiZ0NvbG9yOiBDb2xvcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRCYW5uZXJSZWZyZXNoKGJhbm5lclJlZnJlc2g6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRBZExpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0xvYWRpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGxvYWRBZChhZFBhcmFtPzogQWRQYXJhbSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBwYXVzZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVzdW1lKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRIZWlnaHQoKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0SGVpZ2h0UHgoKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0V2lkdGgoKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0V2lkdGhQeCgpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0F1dG9IZWlnaHRTaXplKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0R5bmFtaWNTaXplKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0Z1bGxXaWR0aFNpemUoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEN1cnJlbnREaXJlY3Rpb25CYW5uZXJTaXplKHdpZHRoOiBudW1iZXIpOiBQcm9taXNlPEFkU2l6ZT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRMYW5kc2NhcGVCYW5uZXJTaXplKHdpZHRoOiBudW1iZXIpOiBQcm9taXNlPEFkU2l6ZT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRQb3J0cmFpdEJhbm5lclNpemUod2lkdGg6IG51bWJlcik6IFByb21pc2U8QWRTaXplPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEJpZGRpbmdJbmZvKCk6IFByb21pc2U8QmlkZGluZ0luZm8+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gICAgcGx1Z2luTmFtZTogXCJITVNBZHNcIixcclxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzcHJpbWVcIixcclxuICAgIHBsdWdpblJlZjogXCJITVNBZHMuSE1TSW50ZXJzdGl0aWFsQWRcIixcclxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxyXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNJbnRlcnN0aXRpYWxBZCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBvbihcclxuICAgICAgICBldmVudE5hbWU6IEludGVyc3RpdGlhbEFkRXZlbnRzLFxyXG4gICAgICAgIGNhbGxiYWNrOiAocmVzdWx0PzogYW55KSA9PiB2b2lkXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgYXN5bmMgY3JlYXRlKHVzZUFjdGl2aXR5OiBib29sZWFuKTogUHJvbWlzZTxITVNJbnRlcnN0aXRpYWxBZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzY3JvbGwoKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNob3coKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzTG9hZGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0xvYWRpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGxvYWRBZChhZFBhcmFtPzogQWRQYXJhbSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRBZElkKGFkSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRBZElkKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldEFkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldFJld2FyZEFkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHZpZGVvT3BlcmF0b3JHZXRBc3BlY3RSYXRpbygpOiBQcm9taXNlPFZpZGVvT3BlcmF0b3JBc3BlY3RSYXRpbz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICB2aWRlb09wZXJhdG9ySGFzVmlkZW8oKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHZpZGVvT3BlcmF0b3JJc0N1c3RvbWl6ZU9wZXJhdGVFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICB2aWRlb09wZXJhdG9ySXNNdXRlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgdmlkZW9PcGVyYXRvck11dGUobXV0ZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICB2aWRlb09wZXJhdG9yUGF1c2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHZpZGVvT3BlcmF0b3JQbGF5KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICB2aWRlb09wZXJhdG9yU3RvcCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0VmlkZW9Db25maWd1cmF0aW9uKHZpZGVvQ29uZmlndXJhdGlvbjogVmlkZW9Db25maWd1cmF0aW9uKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEJpZGRpbmdJbmZvKCk6IFByb21pc2U8QmlkZGluZ0luZm8+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gICAgcGx1Z2luTmFtZTogXCJITVNBZHNcIixcclxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzcHJpbWVcIixcclxuICAgIHBsdWdpblJlZjogXCJITVNBZHMuSE1TTmF0aXZlQWRcIixcclxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxyXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNOYXRpdmVBZCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBvbihldmVudE5hbWU6IE5hdGl2ZUFkRXZlbnRzLCBjYWxsYmFjazogKHJlc3VsdD86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBhc3luYyBjcmVhdGUoXHJcbiAgICAgICAgb3B0aW9uczogTmF0aXZlQWRPcHRpb25zLFxyXG4gICAgICAgIGJvdW5kcz86IExheW91dEJvdW5kc1xyXG4gICAgKTogUHJvbWlzZTxITVNOYXRpdmVBZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBsb2FkQWQob3B0aW9ucz86IE5hdGl2ZUFkTG9hZE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2hvdygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNMb2FkaW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBkaXNsaWtlQWQoZGlzbGlrZVJlYXNvbjogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldEFsbG93Q3VzdG9tQ2xpY2soKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEFkU291cmNlKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldERlc2NyaXB0aW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldENhbGxUb0FjdGlvbigpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXREaXNsaWtlQWRSZWFzb25zKCk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNDdXN0b21DbGlja0FsbG93ZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzQ3VzdG9tRGlzbGlrZVRoaXNBZEVuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHJlY29yZENsaWNrRXZlbnQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHJlY29yZEltcHJlc3Npb25FdmVudChpbXByZXNzaW9uRGF0YTogYW55KTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldFVuaXF1ZUlkKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldERpc2xpa2VBZExpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnb3RvV2h5VGhpc0FkUGFnZSh1c2VWaWV3OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEFkU2lnbigpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRUaXRsZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRXaHlUaGlzQWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVjb3JkU2hvd1N0YXJ0RXZlbnQoc2hvd1N0YXJ0RGF0YTogYW55KTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIG9uQWRDbG9zZShrZXl3b3Jkczogc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0TmF0aXZlQWRDb25maWd1cmF0aW9uKCk6IFByb21pc2U8TmF0aXZlQWRDb25maWd1cmF0aW9uPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldE9uRG93bmxvYWRTdGF0dXNDaGFuZ2VkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldE9uTm9uV2lmaURvd25sb2FkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldFNob3dQZXJtaXNzaW9uRGlhbG9nKHNob3c6Ym9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRBbGxvd2VkTm9uV2lmaU5ldHdvcmsoYWxsb3dlZDpib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGNhbmNlbCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgY29udGludWVEb3dubG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2hvd0FkdmVydGlzZXJJbmZvRGlhbG9nKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBoaWRlQWR2ZXJ0aXNlckluZm9EaWFsb2coKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGhhc0FkdmVydGlzZXJJbmZvKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRBZHZlcnRpc2VySW5mbygpOiBQcm9taXNlPEFkdmVydGlzZXJJbmZvW10+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0QXBwSW5mbygpOiBQcm9taXNlPEFwcEluZm8+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0UHJvbW90ZUluZm8oKTogUHJvbWlzZTxQcm9tb3RlSW5mbz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzaG93QXBwRGV0YWlsUGFnZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2hvd1ByaXZhY3lQb2xpY3koKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNob3dQZXJtaXNzaW9uUGFnZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNUcmFuc3BhcmVuY3lPcGVuKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRUcmFuc3BhcmVuY3lUcGxVcmwoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0SW50ZXJBY3Rpb25UeXBlKCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldFZpZGVvQ29uZmlndXJhdGlvbih2aWRlb0NvbmZpZ3VyYXRpb246IFZpZGVvQ29uZmlndXJhdGlvbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRCaWRkaW5nSW5mbygpOiBQcm9taXNlPEJpZGRpbmdJbmZvPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6IFwiSE1TQWRzXCIsXHJcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc3ByaW1lXCIsXHJcbiAgICBwbHVnaW5SZWY6IFwiSE1TQWRzLkhNU1Jld2FyZEFkXCIsXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcclxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TUmV3YXJkQWQgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgb24oZXZlbnROYW1lOiBSZXdhcmRBZEV2ZW50cywgY2FsbGJhY2s6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgYXN5bmMgY3JlYXRlKGFkSWQ6IHN0cmluZyk6IFByb21pc2U8SE1TUmV3YXJkQWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2hvdyh1c2VBY3Rpdml0eTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZXN1bWUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHBhdXNlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBsb2FkQWRXaXRoQWRJZChhZElkOnN0cmluZyxhZFBhcmFtPzpBZFBhcmFtKTogUHJvbWlzZTx2b2lkPntcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGxvYWRBZChhZFBhcmFtPzogQWRQYXJhbSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0xvYWRlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0RGF0YSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRVc2VySWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0UmV3YXJkKCk6IFByb21pc2U8SE1TUmV3YXJkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldERhdGEoZGF0YTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldEltbWVyc2l2ZShpbW1lcnNpdmU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0VXNlcklkKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldFJld2FyZFZlcmlmeUNvbmZpZyhjb25maWc6IEhNU1Jld2FyZFZlcmlmeUNvbmZpZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRSZXdhcmRWZXJpZnlDb25maWcoKTogUHJvbWlzZTxITVNSZXdhcmRWZXJpZnlDb25maWc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0T25NZXRhZGF0YUNoYW5nZWRMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0UmV3YXJkQWRMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0TW9iaWxlRGF0YUFsZXJ0U3dpdGNoKGFsZXJ0U3dpdGNoOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldFZpZGVvQ29uZmlndXJhdGlvbih2aWRlb0NvbmZpZ3VyYXRpb246IFZpZGVvQ29uZmlndXJhdGlvbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRCaWRkaW5nSW5mbygpOiBQcm9taXNlPEJpZGRpbmdJbmZvPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6IFwiSE1TQWRzXCIsXHJcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc3ByaW1lXCIsXHJcbiAgICBwbHVnaW5SZWY6IFwiSE1TQWRzLkhNU1JvbGxBZFwiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU1JvbGxBZCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBvbihldmVudE5hbWU6IFJvbGxBZEV2ZW50cywgY2FsbGJhY2s6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgYXN5bmMgY3JlYXRlKFxyXG4gICAgICAgIHBhcmFtczogUm9sbEFkTG9hZGVyUGFyYW1zLFxyXG4gICAgICAgIGRpdklkOiBzdHJpbmcsXHJcbiAgICAgICAgYm91bmRzPzogTGF5b3V0Qm91bmRzXHJcbiAgICApOiBQcm9taXNlPEhNU1JvbGxBZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzY3JvbGwoKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGxvYWRBZChvcHRpb25zOiBSb2xsQWRMb2FkT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0xvYWRpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGRlc3Ryb3koKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHBhdXNlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc1BsYXlpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIG11dGUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHVubXV0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgb25DbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcGxheSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc3RvcCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVtb3ZlSW5zdHJlYW1NZWRpYUNoYW5nZUxpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZW1vdmVNZWRpYU11dGVMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVtb3ZlSW5zdHJlYW1NZWRpYVN0YXRlTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldEluc3RyZWFtQWRzKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRJbnN0cmVhbU1lZGlhQ2hhbmdlTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldE1lZGlhTXV0ZUxpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRJbnN0cmVhbU1lZGlhU3RhdGVMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0T25JbnN0cmVhbUFkQ2xpY2tMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0QWRTb3VyY2UoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0RHVyYXRpb24oKTogUHJvbWlzZTxEdXJhdGlvbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRXaHlUaGlzQWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0QWRTaWduKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzQ2xpY2tlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNFeHBpcmVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0ltYWdlQWQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzU2hvd24oKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzVmlkZW9BZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0Q2FsbFRvQWN0aW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNob3dBZHZlcnRpc2VySW5mb0RpYWxvZygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaGlkZUFkdmVydGlzZXJJbmZvRGlhbG9nKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBoYXNBZHZlcnRpc2VySW5mbygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0QWR2ZXJ0aXNlckluZm8oKTogUHJvbWlzZTxBZHZlcnRpc2VySW5mb1tdPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzVHJhbnNwYXJlbmN5T3BlbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0VHJhbnNwYXJlbmN5VHBsVXJsKCk6IFByb21pc2U8U3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNob3dUcmFuc3BhcmVuY3lEaWFsb2coKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGhpZGVUcmFuc3BhcmVuY3lEaWFsb2coKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEJpZGRpbmdJbmZvKCk6IFByb21pc2U8QmlkZGluZ0luZm8+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gICAgcGx1Z2luTmFtZTogXCJITVNBZHNcIixcclxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzcHJpbWVcIixcclxuICAgIHBsdWdpblJlZjogXCJITVNBZHMuSE1TU3BsYXNoQWRcIixcclxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxyXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNTcGxhc2hBZCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBvbihldmVudE5hbWU6IFNwbGFzaEFkRXZlbnRzLCBjYWxsYmFjazogKHJlc3VsdD86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBhc3luYyBjcmVhdGUoKTogUHJvbWlzZTxITVNTcGxhc2hBZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRMb2dvKGZpbGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRXaWRlU2xvZ2FuUmVzSWQod2lkZVNsb2dhblJlc0lkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0U2xvZ2FuUmVzSWQoc2xvZ2FuUmVzSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBsb2FkKG9wdGlvbnM6IFNwbGFzaEFkTG9hZE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcHJlbG9hZEFkKG9wdGlvbnM6IFNwbGFzaEFkTG9hZE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZGVzdHJveVZpZXcoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHBhdXNlVmlldygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVzdW1lVmlldygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNMb2FkaW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0xvYWRlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QWREaXNwbGF5TGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldEF1ZGlvRm9jdXNUeXBlKGF1ZGlvRm9jdXNUeXBlOiBBdWRpb0ZvY3VzVHlwZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRCaWRkaW5nSW5mbygpOiBQcm9taXNlPEJpZGRpbmdJbmZvPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6IFwiSE1TQWRzXCIsXHJcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc3ByaW1lXCIsXHJcbiAgICBwbHVnaW5SZWY6IFwiSE1TQWRzLkhNU1Zhc3RcIixcclxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxyXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNWYXN0IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIG9uKGV2ZW50TmFtZTogVmFzdEV2ZW50cywgY2FsbGJhY2s6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgYXN5bmMgY3JlYXRlKFxyXG4gICAgICAgIGRpdklkOiBzdHJpbmcsXHJcbiAgICAgICAgYm91bmRzPzogTGF5b3V0Qm91bmRzXHJcbiAgICApOiBQcm9taXNlPEhNU1Zhc3Q+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2Nyb2xsKCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBsb2FkQWQob3B0aW9uczogVmFzdExvYWRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHJlc3VtZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcGF1c2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHJlbGVhc2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHRvZ2dsZU11dGVTdGF0ZShpc011dGU6Ym9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc3RhcnRPclBhdXNlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbn0gICAgXHJcbiJdfQ==