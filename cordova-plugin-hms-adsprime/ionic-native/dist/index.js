/*
    Copyright 2022-2023. Huawei Technologies Co., Ltd. All rights reserved.

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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var HMSAdsOriginal = /** @class */ (function (_super) {
    __extends(HMSAdsOriginal, _super);
    function HMSAdsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSAdsOriginal.prototype.on = function (event, callback) { return cordova(this, "on", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.init = function () { return cordova(this, "init", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.getSDKVersion = function () { return cordova(this, "getSDKVersion", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.getRequestOptions = function () { return cordova(this, "getRequestOptions", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.setRequestOptions = function (requestOptions) { return cordova(this, "setRequestOptions", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.setConsent = function (consent) { return cordova(this, "setConsent", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.getAppActivateStyle = function () { return cordova(this, "getAppActivateStyle", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.setAppActivateStyle = function (style) { return cordova(this, "setAppActivateStyle", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.setAppInstalledNotify = function (status) { return cordova(this, "setAppInstalledNotify", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.isAppInstalledNotify = function () { return cordova(this, "isAppInstalledNotify", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.addTestDeviceId = function (testDeviceId) { return cordova(this, "addTestDeviceId", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.getTestDeviceId = function () { return cordova(this, "getTestDeviceId", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.setUnderAgeOfPromise = function (underAgeOfPromise) { return cordova(this, "setUnderAgeOfPromise", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.setConsentStatus = function (consentStatus) { return cordova(this, "setConsentStatus", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.setDebugNeedConsent = function (debugNeedConsent) { return cordova(this, "setDebugNeedConsent", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.requestConsentUpdate = function () { return cordova(this, "requestConsentUpdate", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.verifyAdId = function (adId, isLimitAdTracking) { return cordova(this, "verifyAdId", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.getAdvertisingIdInfo = function () { return cordova(this, "getAdvertisingIdInfo", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.referrerClientStartConnection = function (isTest) { return cordova(this, "referrerClientStartConnection", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.referrerClientEndConnection = function () { return cordova(this, "referrerClientEndConnection", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.referrerClientIsReady = function () { return cordova(this, "referrerClientIsReady", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.getInstallReferrer = function (installChannel) { return cordova(this, "getInstallReferrer", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.initVast = function (vastSdkConfiguration) { return cordova(this, "initVast", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.getVastSdkConfiguration = function () { return cordova(this, "getVastSdkConfiguration", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.updateSdkServerConfig = function (slotId) { return cordova(this, "updateSdkServerConfig", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.userAcceptAdLicense = function (isAcceptLicense) { return cordova(this, "userAcceptAdLicense", { "otherPromise": true }, arguments); };
    HMSAdsOriginal.prototype.getEventProcessor = function () { return cordova(this, "getEventProcessor", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSAdsOriginal.prototype, "HMSInterstitialAd", {
        get: function () { return cordovaPropertyGet(this, "HMSInterstitialAd"); },
        set: function (value) { cordovaPropertySet(this, "HMSInterstitialAd", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSAdsOriginal.prototype, "HMSBannerAd", {
        get: function () { return cordovaPropertyGet(this, "HMSBannerAd"); },
        set: function (value) { cordovaPropertySet(this, "HMSBannerAd", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSAdsOriginal.prototype, "HMSSplashAd", {
        get: function () { return cordovaPropertyGet(this, "HMSSplashAd"); },
        set: function (value) { cordovaPropertySet(this, "HMSSplashAd", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSAdsOriginal.prototype, "HMSRewardAd", {
        get: function () { return cordovaPropertyGet(this, "HMSRewardAd"); },
        set: function (value) { cordovaPropertySet(this, "HMSRewardAd", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSAdsOriginal.prototype, "HMSNativeAd", {
        get: function () { return cordovaPropertyGet(this, "HMSNativeAd"); },
        set: function (value) { cordovaPropertySet(this, "HMSNativeAd", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSAdsOriginal.prototype, "HMSRollAd", {
        get: function () { return cordovaPropertyGet(this, "HMSRollAd"); },
        set: function (value) { cordovaPropertySet(this, "HMSRollAd", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSAdsOriginal.prototype, "HMSVast", {
        get: function () { return cordovaPropertyGet(this, "HMSVast"); },
        set: function (value) { cordovaPropertySet(this, "HMSVast", value); },
        enumerable: false,
        configurable: true
    });
    HMSAdsOriginal.pluginName = "HMSAds";
    HMSAdsOriginal.plugin = "cordova-plugin-hms-adsprime";
    HMSAdsOriginal.pluginRef = "HMSAds";
    HMSAdsOriginal.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSAdsOriginal.platforms = ["Android"];
    return HMSAdsOriginal;
}(IonicNativePlugin));
var HMSAds = new HMSAdsOriginal();
export { HMSAds };
var HMSBannerAdOriginal = /** @class */ (function (_super) {
    __extends(HMSBannerAdOriginal, _super);
    function HMSBannerAdOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSBannerAdOriginal.prototype.on = function (eventName, callback) { return cordova(this, "on", { "otherPromise": true }, arguments); };
    HMSBannerAdOriginal.prototype.create = function (divId, bounds) { return cordova(this, "create", { "otherPromise": true }, arguments); };
    HMSBannerAdOriginal.prototype.scroll = function () { return cordova(this, "scroll", { "otherPromise": true }, arguments); };
    HMSBannerAdOriginal.prototype.getAdId = function () { return cordova(this, "getAdId", { "otherPromise": true }, arguments); };
    HMSBannerAdOriginal.prototype.setAdId = function (adId) { return cordova(this, "setAdId", { "otherPromise": true }, arguments); };
    HMSBannerAdOriginal.prototype.getBannerAdSize = function () { return cordova(this, "getBannerAdSize", { "otherPromise": true }, arguments); };
    HMSBannerAdOriginal.prototype.setBannerAdSize = function (bannerAdSize) { return cordova(this, "setBannerAdSize", { "otherPromise": true }, arguments); };
    HMSBannerAdOriginal.prototype.setBackgroundColor = function (bgColor) { return cordova(this, "setBackgroundColor", { "otherPromise": true }, arguments); };
    HMSBannerAdOriginal.prototype.setBannerRefresh = function (bannerRefresh) { return cordova(this, "setBannerRefresh", { "otherPromise": true }, arguments); };
    HMSBannerAdOriginal.prototype.setAdListener = function () { return cordova(this, "setAdListener", { "otherPromise": true }, arguments); };
    HMSBannerAdOriginal.prototype.isLoading = function () { return cordova(this, "isLoading", { "otherPromise": true }, arguments); };
    HMSBannerAdOriginal.prototype.loadAd = function (adParam) { return cordova(this, "loadAd", { "otherPromise": true }, arguments); };
    HMSBannerAdOriginal.prototype.pause = function () { return cordova(this, "pause", { "otherPromise": true }, arguments); };
    HMSBannerAdOriginal.prototype.resume = function () { return cordova(this, "resume", { "otherPromise": true }, arguments); };
    HMSBannerAdOriginal.prototype.destroy = function () { return cordova(this, "destroy", { "otherPromise": true }, arguments); };
    HMSBannerAdOriginal.prototype.getHeight = function () { return cordova(this, "getHeight", { "otherPromise": true }, arguments); };
    HMSBannerAdOriginal.prototype.getHeightPx = function () { return cordova(this, "getHeightPx", { "otherPromise": true }, arguments); };
    HMSBannerAdOriginal.prototype.getWidth = function () { return cordova(this, "getWidth", { "otherPromise": true }, arguments); };
    HMSBannerAdOriginal.prototype.getWidthPx = function () { return cordova(this, "getWidthPx", { "otherPromise": true }, arguments); };
    HMSBannerAdOriginal.prototype.isAutoHeightSize = function () { return cordova(this, "isAutoHeightSize", { "otherPromise": true }, arguments); };
    HMSBannerAdOriginal.prototype.isDynamicSize = function () { return cordova(this, "isDynamicSize", { "otherPromise": true }, arguments); };
    HMSBannerAdOriginal.prototype.isFullWidthSize = function () { return cordova(this, "isFullWidthSize", { "otherPromise": true }, arguments); };
    HMSBannerAdOriginal.prototype.getCurrentDirectionBannerSize = function (width) { return cordova(this, "getCurrentDirectionBannerSize", { "otherPromise": true }, arguments); };
    HMSBannerAdOriginal.prototype.getLandscapeBannerSize = function (width) { return cordova(this, "getLandscapeBannerSize", { "otherPromise": true }, arguments); };
    HMSBannerAdOriginal.prototype.getPortraitBannerSize = function (width) { return cordova(this, "getPortraitBannerSize", { "otherPromise": true }, arguments); };
    HMSBannerAdOriginal.pluginName = "HMSAds";
    HMSBannerAdOriginal.plugin = "cordova-plugin-hms-adsprime";
    HMSBannerAdOriginal.pluginRef = "HMSAds.HMSBannerAd";
    HMSBannerAdOriginal.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSBannerAdOriginal.platforms = ["Android"];
    return HMSBannerAdOriginal;
}(IonicNativePlugin));
var HMSBannerAd = new HMSBannerAdOriginal();
export { HMSBannerAd };
var HMSInterstitialAdOriginal = /** @class */ (function (_super) {
    __extends(HMSInterstitialAdOriginal, _super);
    function HMSInterstitialAdOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSInterstitialAdOriginal.prototype.on = function (eventName, callback) { return cordova(this, "on", { "otherPromise": true }, arguments); };
    HMSInterstitialAdOriginal.prototype.create = function (useActivity) { return cordova(this, "create", { "otherPromise": true }, arguments); };
    HMSInterstitialAdOriginal.prototype.scroll = function () { return cordova(this, "scroll", { "otherPromise": true }, arguments); };
    HMSInterstitialAdOriginal.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    HMSInterstitialAdOriginal.prototype.isLoaded = function () { return cordova(this, "isLoaded", { "otherPromise": true }, arguments); };
    HMSInterstitialAdOriginal.prototype.isLoading = function () { return cordova(this, "isLoading", { "otherPromise": true }, arguments); };
    HMSInterstitialAdOriginal.prototype.loadAd = function (adParam) { return cordova(this, "loadAd", { "otherPromise": true }, arguments); };
    HMSInterstitialAdOriginal.prototype.setAdId = function (adId) { return cordova(this, "setAdId", { "otherPromise": true }, arguments); };
    HMSInterstitialAdOriginal.prototype.getAdId = function () { return cordova(this, "getAdId", { "otherPromise": true }, arguments); };
    HMSInterstitialAdOriginal.prototype.setAdListener = function () { return cordova(this, "setAdListener", { "otherPromise": true }, arguments); };
    HMSInterstitialAdOriginal.prototype.setRewardAdListener = function () { return cordova(this, "setRewardAdListener", { "otherPromise": true }, arguments); };
    HMSInterstitialAdOriginal.prototype.videoOperatorGetAspectRatio = function () { return cordova(this, "videoOperatorGetAspectRatio", { "otherPromise": true }, arguments); };
    HMSInterstitialAdOriginal.prototype.videoOperatorHasVideo = function () { return cordova(this, "videoOperatorHasVideo", { "otherPromise": true }, arguments); };
    HMSInterstitialAdOriginal.prototype.videoOperatorIsCustomizeOperateEnabled = function () { return cordova(this, "videoOperatorIsCustomizeOperateEnabled", { "otherPromise": true }, arguments); };
    HMSInterstitialAdOriginal.prototype.videoOperatorIsMuted = function () { return cordova(this, "videoOperatorIsMuted", { "otherPromise": true }, arguments); };
    HMSInterstitialAdOriginal.prototype.videoOperatorMute = function (mute) { return cordova(this, "videoOperatorMute", { "otherPromise": true }, arguments); };
    HMSInterstitialAdOriginal.prototype.videoOperatorPause = function () { return cordova(this, "videoOperatorPause", { "otherPromise": true }, arguments); };
    HMSInterstitialAdOriginal.prototype.videoOperatorPlay = function () { return cordova(this, "videoOperatorPlay", { "otherPromise": true }, arguments); };
    HMSInterstitialAdOriginal.prototype.videoOperatorStop = function () { return cordova(this, "videoOperatorStop", { "otherPromise": true }, arguments); };
    HMSInterstitialAdOriginal.pluginName = "HMSAds";
    HMSInterstitialAdOriginal.plugin = "cordova-plugin-hms-adsprime";
    HMSInterstitialAdOriginal.pluginRef = "HMSAds.HMSInterstitialAd";
    HMSInterstitialAdOriginal.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSInterstitialAdOriginal.platforms = ["Android"];
    return HMSInterstitialAdOriginal;
}(IonicNativePlugin));
var HMSInterstitialAd = new HMSInterstitialAdOriginal();
export { HMSInterstitialAd };
var HMSNativeAdOriginal = /** @class */ (function (_super) {
    __extends(HMSNativeAdOriginal, _super);
    function HMSNativeAdOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSNativeAdOriginal.prototype.on = function (eventName, callback) { return cordova(this, "on", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.create = function (options, bounds) { return cordova(this, "create", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.loadAd = function (options) { return cordova(this, "loadAd", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.isLoading = function () { return cordova(this, "isLoading", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.destroy = function () { return cordova(this, "destroy", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.dislikeAd = function (dislikeReason) { return cordova(this, "dislikeAd", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.setAllowCustomClick = function () { return cordova(this, "setAllowCustomClick", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.getAdSource = function () { return cordova(this, "getAdSource", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.getDescription = function () { return cordova(this, "getDescription", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.getCallToAction = function () { return cordova(this, "getCallToAction", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.getDislikeAdReasons = function () { return cordova(this, "getDislikeAdReasons", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.isCustomClickAllowed = function () { return cordova(this, "isCustomClickAllowed", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.isCustomDislikeThisAdEnabled = function () { return cordova(this, "isCustomDislikeThisAdEnabled", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.recordClickEvent = function () { return cordova(this, "recordClickEvent", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.recordImpressionEvent = function (impressionData) { return cordova(this, "recordImpressionEvent", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.getUniqueId = function () { return cordova(this, "getUniqueId", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.setDislikeAdListener = function () { return cordova(this, "setDislikeAdListener", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.gotoWhyThisAdPage = function (useView) { return cordova(this, "gotoWhyThisAdPage", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.getAdSign = function () { return cordova(this, "getAdSign", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.getTitle = function () { return cordova(this, "getTitle", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.getWhyThisAd = function () { return cordova(this, "getWhyThisAd", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.showAppDetailPage = function () { return cordova(this, "showAppDetailPage", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.recordShowStartEvent = function (showStartData) { return cordova(this, "recordShowStartEvent", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.onAdClose = function (keywords) { return cordova(this, "onAdClose", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.getNativeAdConfiguration = function () { return cordova(this, "getNativeAdConfiguration", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.setOnDownloadStatusChangedListener = function () { return cordova(this, "setOnDownloadStatusChangedListener", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.setOnNonWifiDownloadListener = function () { return cordova(this, "setOnNonWifiDownloadListener", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.setShowPermissionDialog = function (show) { return cordova(this, "setShowPermissionDialog", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.setAllowedNonWifiNetwork = function (allowed) { return cordova(this, "setAllowedNonWifiNetwork", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.cancel = function () { return cordova(this, "cancel", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.continueDownload = function () { return cordova(this, "continueDownload", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.showAdvertiserInfoDialog = function () { return cordova(this, "showAdvertiserInfoDialog", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.hideAdvertiserInfoDialog = function () { return cordova(this, "hideAdvertiserInfoDialog", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.hasAdvertiserInfo = function () { return cordova(this, "hasAdvertiserInfo", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.getAdvertiserInfo = function () { return cordova(this, "getAdvertiserInfo", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.showAppDetailPage = function () { return cordova(this, "showAppDetailPage", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.isTransparencyOpen = function () { return cordova(this, "isTransparencyOpen", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.getTransparencyTplUrl = function () { return cordova(this, "getTransparencyTplUrl", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.pluginName = "HMSAds";
    HMSNativeAdOriginal.plugin = "cordova-plugin-hms-adsprime";
    HMSNativeAdOriginal.pluginRef = "HMSAds.HMSNativeAd";
    HMSNativeAdOriginal.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSNativeAdOriginal.platforms = ["Android"];
    return HMSNativeAdOriginal;
}(IonicNativePlugin));
var HMSNativeAd = new HMSNativeAdOriginal();
export { HMSNativeAd };
var HMSRewardAdOriginal = /** @class */ (function (_super) {
    __extends(HMSRewardAdOriginal, _super);
    function HMSRewardAdOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSRewardAdOriginal.prototype.on = function (eventName, callback) { return cordova(this, "on", { "otherPromise": true }, arguments); };
    HMSRewardAdOriginal.prototype.create = function (adId) { return cordova(this, "create", { "otherPromise": true }, arguments); };
    HMSRewardAdOriginal.prototype.show = function (useActivity) { return cordova(this, "show", { "otherPromise": true }, arguments); };
    HMSRewardAdOriginal.prototype.resume = function () { return cordova(this, "resume", { "otherPromise": true }, arguments); };
    HMSRewardAdOriginal.prototype.pause = function () { return cordova(this, "pause", { "otherPromise": true }, arguments); };
    HMSRewardAdOriginal.prototype.destroy = function () { return cordova(this, "destroy", { "otherPromise": true }, arguments); };
    HMSRewardAdOriginal.prototype.loadAdWithAdId = function (adId, adParam) { return cordova(this, "loadAdWithAdId", { "otherPromise": true }, arguments); };
    HMSRewardAdOriginal.prototype.loadAd = function (adParam) { return cordova(this, "loadAd", { "otherPromise": true }, arguments); };
    HMSRewardAdOriginal.prototype.isLoaded = function () { return cordova(this, "isLoaded", { "otherPromise": true }, arguments); };
    HMSRewardAdOriginal.prototype.getData = function () { return cordova(this, "getData", { "otherPromise": true }, arguments); };
    HMSRewardAdOriginal.prototype.getUserId = function () { return cordova(this, "getUserId", { "otherPromise": true }, arguments); };
    HMSRewardAdOriginal.prototype.getReward = function () { return cordova(this, "getReward", { "otherPromise": true }, arguments); };
    HMSRewardAdOriginal.prototype.setData = function (data) { return cordova(this, "setData", { "otherPromise": true }, arguments); };
    HMSRewardAdOriginal.prototype.setImmersive = function (immersive) { return cordova(this, "setImmersive", { "otherPromise": true }, arguments); };
    HMSRewardAdOriginal.prototype.setUserId = function (userId) { return cordova(this, "setUserId", { "otherPromise": true }, arguments); };
    HMSRewardAdOriginal.prototype.setRewardVerifyConfig = function (config) { return cordova(this, "setRewardVerifyConfig", { "otherPromise": true }, arguments); };
    HMSRewardAdOriginal.prototype.getRewardVerifyConfig = function () { return cordova(this, "getRewardVerifyConfig", { "otherPromise": true }, arguments); };
    HMSRewardAdOriginal.prototype.setOnMetadataChangedListener = function () { return cordova(this, "setOnMetadataChangedListener", { "otherPromise": true }, arguments); };
    HMSRewardAdOriginal.prototype.setRewardAdListener = function () { return cordova(this, "setRewardAdListener", { "otherPromise": true }, arguments); };
    HMSRewardAdOriginal.prototype.setMobileDataAlertSwitch = function (alertSwitch) { return cordova(this, "setMobileDataAlertSwitch", { "otherPromise": true }, arguments); };
    HMSRewardAdOriginal.pluginName = "HMSAds";
    HMSRewardAdOriginal.plugin = "cordova-plugin-hms-adsprime";
    HMSRewardAdOriginal.pluginRef = "HMSAds.HMSRewardAd";
    HMSRewardAdOriginal.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSRewardAdOriginal.platforms = ["Android"];
    return HMSRewardAdOriginal;
}(IonicNativePlugin));
var HMSRewardAd = new HMSRewardAdOriginal();
export { HMSRewardAd };
var HMSRollAdOriginal = /** @class */ (function (_super) {
    __extends(HMSRollAdOriginal, _super);
    function HMSRollAdOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSRollAdOriginal.prototype.on = function (eventName, callback) { return cordova(this, "on", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.create = function (params, divId, bounds) { return cordova(this, "create", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.scroll = function () { return cordova(this, "scroll", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.loadAd = function (options) { return cordova(this, "loadAd", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.isLoading = function () { return cordova(this, "isLoading", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.destroy = function () { return cordova(this, "destroy", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.pause = function () { return cordova(this, "pause", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.isPlaying = function () { return cordova(this, "isPlaying", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.mute = function () { return cordova(this, "mute", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.unmute = function () { return cordova(this, "unmute", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.onClose = function () { return cordova(this, "onClose", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.play = function () { return cordova(this, "play", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.stop = function () { return cordova(this, "stop", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.removeInstreamMediaChangeListener = function () { return cordova(this, "removeInstreamMediaChangeListener", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.removeMediaMuteListener = function () { return cordova(this, "removeMediaMuteListener", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.removeInstreamMediaStateListener = function () { return cordova(this, "removeInstreamMediaStateListener", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.setInstreamAds = function () { return cordova(this, "setInstreamAds", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.setInstreamMediaChangeListener = function () { return cordova(this, "setInstreamMediaChangeListener", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.setMediaMuteListener = function () { return cordova(this, "setMediaMuteListener", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.setInstreamMediaStateListener = function () { return cordova(this, "setInstreamMediaStateListener", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.setOnInstreamAdClickListener = function () { return cordova(this, "setOnInstreamAdClickListener", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.getAdSource = function () { return cordova(this, "getAdSource", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.getDuration = function () { return cordova(this, "getDuration", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.getWhyThisAd = function () { return cordova(this, "getWhyThisAd", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.getAdSign = function () { return cordova(this, "getAdSign", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.isClicked = function () { return cordova(this, "isClicked", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.isExpired = function () { return cordova(this, "isExpired", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.isImageAd = function () { return cordova(this, "isImageAd", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.isShown = function () { return cordova(this, "isShown", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.isVideoAd = function () { return cordova(this, "isVideoAd", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.getCallToAction = function () { return cordova(this, "getCallToAction", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.showAdvertiserInfoDialog = function () { return cordova(this, "showAdvertiserInfoDialog", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.hideAdvertiserInfoDialog = function () { return cordova(this, "hideAdvertiserInfoDialog", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.hasAdvertiserInfo = function () { return cordova(this, "hasAdvertiserInfo", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.getAdvertiserInfo = function () { return cordova(this, "getAdvertiserInfo", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.isTransparencyOpen = function () { return cordova(this, "isTransparencyOpen", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.getTransparencyTplUrl = function () { return cordova(this, "getTransparencyTplUrl", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.showTransparencyDialog = function () { return cordova(this, "showTransparencyDialog", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.prototype.hideTransparencyDialog = function () { return cordova(this, "hideTransparencyDialog", { "otherPromise": true }, arguments); };
    HMSRollAdOriginal.pluginName = "HMSAds";
    HMSRollAdOriginal.plugin = "cordova-plugin-hms-adsprime";
    HMSRollAdOriginal.pluginRef = "HMSAds.HMSRollAd";
    HMSRollAdOriginal.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSRollAdOriginal.platforms = ["Android"];
    return HMSRollAdOriginal;
}(IonicNativePlugin));
var HMSRollAd = new HMSRollAdOriginal();
export { HMSRollAd };
var HMSSplashAdOriginal = /** @class */ (function (_super) {
    __extends(HMSSplashAdOriginal, _super);
    function HMSSplashAdOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSSplashAdOriginal.prototype.on = function (eventName, callback) { return cordova(this, "on", { "otherPromise": true }, arguments); };
    HMSSplashAdOriginal.prototype.create = function () { return cordova(this, "create", { "otherPromise": true }, arguments); };
    HMSSplashAdOriginal.prototype.setLogo = function (file) { return cordova(this, "setLogo", { "otherPromise": true }, arguments); };
    HMSSplashAdOriginal.prototype.setWideSloganResId = function (wideSloganResId) { return cordova(this, "setWideSloganResId", { "otherPromise": true }, arguments); };
    HMSSplashAdOriginal.prototype.setSloganResId = function (sloganResId) { return cordova(this, "setSloganResId", { "otherPromise": true }, arguments); };
    HMSSplashAdOriginal.prototype.load = function (options) { return cordova(this, "load", { "otherPromise": true }, arguments); };
    HMSSplashAdOriginal.prototype.preloadAd = function (options) { return cordova(this, "preloadAd", { "otherPromise": true }, arguments); };
    HMSSplashAdOriginal.prototype.destroyView = function () { return cordova(this, "destroyView", { "otherPromise": true }, arguments); };
    HMSSplashAdOriginal.prototype.pauseView = function () { return cordova(this, "pauseView", { "otherPromise": true }, arguments); };
    HMSSplashAdOriginal.prototype.resumeView = function () { return cordova(this, "resumeView", { "otherPromise": true }, arguments); };
    HMSSplashAdOriginal.prototype.isLoading = function () { return cordova(this, "isLoading", { "otherPromise": true }, arguments); };
    HMSSplashAdOriginal.prototype.isLoaded = function () { return cordova(this, "isLoaded", { "otherPromise": true }, arguments); };
    HMSSplashAdOriginal.prototype.setAdDisplayListener = function () { return cordova(this, "setAdDisplayListener", { "otherPromise": true }, arguments); };
    HMSSplashAdOriginal.prototype.setAudioFocusType = function (audioFocusType) { return cordova(this, "setAudioFocusType", { "otherPromise": true }, arguments); };
    HMSSplashAdOriginal.pluginName = "HMSAds";
    HMSSplashAdOriginal.plugin = "cordova-plugin-hms-adsprime";
    HMSSplashAdOriginal.pluginRef = "HMSAds.HMSSplashAd";
    HMSSplashAdOriginal.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSSplashAdOriginal.platforms = ["Android"];
    return HMSSplashAdOriginal;
}(IonicNativePlugin));
var HMSSplashAd = new HMSSplashAdOriginal();
export { HMSSplashAd };
var HMSVastOriginal = /** @class */ (function (_super) {
    __extends(HMSVastOriginal, _super);
    function HMSVastOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSVastOriginal.prototype.on = function (eventName, callback) { return cordova(this, "on", { "otherPromise": true }, arguments); };
    HMSVastOriginal.prototype.create = function (divId, bounds) { return cordova(this, "create", { "otherPromise": true }, arguments); };
    HMSVastOriginal.prototype.scroll = function () { return cordova(this, "scroll", { "otherPromise": true }, arguments); };
    HMSVastOriginal.prototype.loadAd = function (options) { return cordova(this, "loadAd", { "otherPromise": true }, arguments); };
    HMSVastOriginal.prototype.resume = function () { return cordova(this, "resume", { "otherPromise": true }, arguments); };
    HMSVastOriginal.prototype.pause = function () { return cordova(this, "pause", { "otherPromise": true }, arguments); };
    HMSVastOriginal.prototype.release = function () { return cordova(this, "release", { "otherPromise": true }, arguments); };
    HMSVastOriginal.prototype.toggleMuteState = function (isMute) { return cordova(this, "toggleMuteState", { "otherPromise": true }, arguments); };
    HMSVastOriginal.prototype.startOrPause = function () { return cordova(this, "startOrPause", { "otherPromise": true }, arguments); };
    HMSVastOriginal.pluginName = "HMSAds";
    HMSVastOriginal.plugin = "cordova-plugin-hms-adsprime";
    HMSVastOriginal.pluginRef = "HMSAds.HMSVast";
    HMSVastOriginal.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSVastOriginal.platforms = ["Android"];
    return HMSVastOriginal;
}(IonicNativePlugin));
var HMSVast = new HMSVastOriginal();
export { HMSVast };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBaUJBLE9BQU8sc0VBS04sTUFBTSxvQkFBb0IsQ0FBQztBQUU1QiwrREFBK0Q7QUFDL0QsWUFBWTtBQUNaLCtEQUErRDtBQUUvRCxNQUFNLENBQU4sSUFBWSxpQkFVWDtBQVZELFdBQVksaUJBQWlCO0lBQ3pCLDZFQUFrQixDQUFBO0lBQ2xCLGlHQUE0QixDQUFBO0lBQzVCLDZGQUEwQixDQUFBO0lBQzFCLDZFQUFrQixDQUFBO0lBQ2xCLHVGQUF1QixDQUFBO0lBQ3ZCLGlGQUFvQixDQUFBO0lBQ3BCLG1HQUE2QixDQUFBO0lBQzdCLG1HQUE2QixDQUFBO0lBQzdCLGlIQUFvQyxDQUFBO0FBQ3hDLENBQUMsRUFWVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBVTVCO0FBQ0QsTUFBTSxDQUFOLElBQVksd0JBS1g7QUFMRCxXQUFZLHdCQUF3QjtJQUNoQyxpSEFBNkIsQ0FBQTtJQUM3Qiw2R0FBMkIsQ0FBQTtJQUMzQixxSEFBK0IsQ0FBQTtJQUMvQixxSEFBK0IsQ0FBQTtBQUNuQyxDQUFDLEVBTFcsd0JBQXdCLEtBQXhCLHdCQUF3QixRQUtuQztBQUNELE1BQU0sQ0FBTixJQUFZLHVCQU1YO0FBTkQsV0FBWSx1QkFBdUI7SUFDL0IsNERBQWlDLENBQUE7SUFDakMsOERBQW1DLENBQUE7SUFDbkMsaUVBQXNDLENBQUE7SUFDdEMsNERBQWlDLENBQUE7SUFDakMsNERBQWlDLENBQUE7QUFDckMsQ0FBQyxFQU5XLHVCQUF1QixLQUF2Qix1QkFBdUIsUUFNbEM7QUFDRCxNQUFNLENBQU4sSUFBWSxNQUlYO0FBSkQsV0FBWSxNQUFNO0lBQ2QsdUNBQVUsQ0FBQTtJQUNWLG1DQUFRLENBQUE7SUFDUix5Q0FBVyxDQUFBO0FBQ2YsQ0FBQyxF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OztzQkFqekNwRDtFQTJ2Q2lDLGlCQUFpQjtTQUFyQyxXQUFXOztJQW1FSywyQkFBaUI7Ozs7SUFFMUMsb0JBQUUsYUFBQyxTQUFxQixFQUFFLFFBQWdDO0lBSXBELHdCQUFNLGFBQ1IsS0FBYSxFQUNiLE1BQXFCO0lBS3pCLHdCQUFNO0lBSU4sd0JBQU0sYUFBQyxPQUF3QjtJQUkvQix3QkFBTTtJQUlOLHVCQUFLO0lBSUwseUJBQU87SUFJUCxpQ0FBZSxhQUFDLE1BQWM7SUFLOUIsOEJBQVk7Ozs7OztrQkFwMkNoQjtFQTh6QzZCLGlCQUFpQjtTQUFqQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBDb3B5cmlnaHQgMjAyMi0yMDIzLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxuICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgICBQbHVnaW4sXG4gICAgQ29yZG92YSxcbiAgICBDb3Jkb3ZhUHJvcGVydHksXG4gICAgSW9uaWNOYXRpdmVQbHVnaW4sXG59IGZyb20gXCJAaW9uaWMtbmF0aXZlL2NvcmVcIjtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBDb25zdGFudHNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgZW51bSBBZFBhcmFtRXJyb3JDb2RlcyB7XG4gICAgQURfUEFSQU1fSU5ORVIgPSAwLFxuICAgIEFEX1BBUkFNX0lOVkFMSURfUkVRVUVTVCA9IDEsXG4gICAgQURfUEFSQU1fTkVUV09SS19FUlJPUiA9IDIsXG4gICAgQURfUEFSQU1fTk9fQUQgPSAzLFxuICAgIEFEX1BBUkFNX0FEX0xPQURJTkcgPSA0LFxuICAgIEFEX1BBUkFNX0xPV19BUEkgPSA1LFxuICAgIEFEX1BBUkFNX0JBTk5FUl9BRF9FWFBJUkUgPSA2LFxuICAgIEFEX1BBUkFNX0JBTk5FUl9BRF9DQU5DRUwgPSA3LFxuICAgIEFEX1BBUkFNX0hNU19OT1RfU1VQUE9SVF9TRVRfQVBQID0gOCxcbn1cbmV4cG9ydCBlbnVtIFJld2FyZEFkU3RhdHVzRXJyb3JDb2RlcyB7XG4gICAgUkVXQVJEX0FEX1NUQVRVU19JTlRFUk5BTCA9IDAsXG4gICAgUkVXQVJEX0FEX1NUQVRVU19SRVVTRUQgPSAxLFxuICAgIFJFV0FSRF9BRF9TVEFUVVNfTk9UX0xPQURFRCA9IDIsXG4gICAgUkVXQVJEX0FEX1NUQVRVU19CQUNLR1JPVU5EID0gMyxcbn1cbmV4cG9ydCBlbnVtIEFkQ29udGVudENsYXNzaWZpY2F0aW9uIHtcbiAgICBBRF9DT05URU5UX0NMQVNTSUZJQ0FUSU9OX0EgPSBcIkFcIixcbiAgICBBRF9DT05URU5UX0NMQVNTSUZJQ0FUSU9OX1BJID0gXCJQSVwiLFxuICAgIEFEX0NPTlRFTlRfQ0xBU1NJRklDQVRJT05fVU5LTk9XTiA9IFwiXCIsXG4gICAgQURfQ09OVEVOVF9DTEFTU0lGSUNBVElPTl9KID0gXCJKXCIsXG4gICAgQURfQ09OVEVOVF9DTEFTU0lGSUNBVElPTl9XID0gXCJXXCIsXG59XG5leHBvcnQgZW51bSBHZW5kZXIge1xuICAgIEZFTUFMRSA9IDIsXG4gICAgTUFMRSA9IDEsXG4gICAgVU5LTk9XTiA9IDAsXG59XG5leHBvcnQgZW51bSBOb25QZXJzb25hbGl6ZWRBZCB7XG4gICAgQUxMT1dfQUxMID0gMCxcbiAgICBBTExPV19OT05fUEVSU09OQUxJWkVEID0gMSxcbn1cbmV4cG9ydCBlbnVtIENoaWxkUHJvdGVjdGlvbiB7XG4gICAgVEFHX0ZPUl9DSElMRF9QUk9URUNUSU9OX1VOU1BFQ0lGSUVEID0gLTEsXG4gICAgVEFHX0ZPUl9DSElMRF9QUk9URUNUSU9OX0ZBTFNFID0gMCxcbiAgICBUQUdfRk9SX0NISUxEX1BST1RFQ1RJT05fVFJVRSA9IDEsXG59XG5leHBvcnQgZW51bSBVbmRlckFnZU9mUHJvbWlzZSB7XG4gICAgUFJPTUlTRV9VTlNQRUNJRklFRCA9IC0xLFxuICAgIFBST01JU0VfRkFMU0UgPSAwLFxuICAgIFBST01JU0VfVFJVRSA9IDEsXG59XG5leHBvcnQgZW51bSBCYW5uZXJBZFNpemUge1xuICAgIEJBTk5FUl9TSVpFXzM2MF81NyA9IFwiQkFOTkVSX1NJWkVfMzYwXzU3XCIsXG4gICAgQkFOTkVSX1NJWkVfMzYwXzE0NCA9IFwiQkFOTkVSX1NJWkVfMzYwXzE0NFwiLFxuICAgIEJBTk5FUl9TSVpFXzE2MF82MDAgPSBcIkJBTk5FUl9TSVpFXzE2MF82MDBcIixcbiAgICBCQU5ORVJfU0laRV8zMDBfMjUwID0gXCJCQU5ORVJfU0laRV8zMDBfMjUwXCIsXG4gICAgQkFOTkVSX1NJWkVfMzIwXzEwMCA9IFwiQkFOTkVSX1NJWkVfMzIwXzEwMFwiLFxuICAgIEJBTk5FUl9TSVpFXzMyMF81MCA9IFwiQkFOTkVSX1NJWkVfMzIwXzUwXCIsXG4gICAgQkFOTkVSX1NJWkVfNDY4XzYwID0gXCJCQU5ORVJfU0laRV80NjhfNjBcIixcbiAgICBCQU5ORVJfU0laRV83MjhfOTAgPSBcIkJBTk5FUl9TSVpFXzcyOF85MFwiLFxuICAgIEJBTk5FUl9TSVpFX0RZTkFNSUMgPSBcIkJBTk5FUl9TSVpFX0RZTkFNSUNcIixcbiAgICBCQU5ORVJfU0laRV9JTlZBTElEID0gXCJCQU5ORVJfU0laRV9JTlZBTElEXCIsXG4gICAgQkFOTkVSX1NJWkVfU01BUlQgPSBcIkJBTk5FUl9TSVpFX1NNQVJUXCIsXG4gICAgQkFOTkVSX1NJWkVfQURWQU5DRUQgPSBcIkJBTk5FUl9TSVpFX0FEVkFOQ0VEXCIsXG59XG5leHBvcnQgZW51bSBITVNTY3JlZW5PcmllbnRhdGlvbiB7XG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX0xBTkRTQ0FQRSA9IDAsXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1VOU1BFQ0lGSUVEID0gLTEsXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1BPUlRSQUlUID0gMSxcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fVVNFUiA9IDIsXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX0JFSElORCA9IDMsXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1NFTlNPUiA9IDQsXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX05PU0VOU09SID0gNSxcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fU0VOU09SX0xBTkRTQ0FQRSA9IDYsXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1NFTlNPUl9QT1JUUkFJVCA9IDcsXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1JFVkVSU0VfTEFORFNDQVBFID0gOCxcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fUkVWRVJTRV9QT1JUUkFJVCA9IDksXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX0ZVTExfU0VOU09SID0gMTAsXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1VTRVJfTEFORFNDQVBFID0gMTEsXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1VTRVJfUE9SVFJBSVQgPSAxMixcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fRlVMTF9VU0VSID0gMTMsXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX0xPQ0tFRCA9IDE0LFxufVxuZXhwb3J0IGVudW0gRGVidWdOZWVkQ29uc2VudCB7XG4gICAgQ09OU0VOVF9ERUJVR19ESVNBQkxFRCA9IDAsXG4gICAgQ09OU0VOVF9ERUJVR19ORUVEX0NPTlNFTlQgPSAxLFxuICAgIENPTlNFTlRfREVCVUdfTk9UX05FRURfQ09OU0VOVCA9IDIsXG59XG5leHBvcnQgZW51bSBDb25zZW50U3RhdHVzIHtcbiAgICBDT05TRU5UX1BFUlNPTkFMSVpFRCA9IDAsXG4gICAgQ09OU0VOVF9OT05fUEVSU09OQUxJWkVEID0gMSxcbiAgICBDT05TRU5UX1VOS05PV04gPSAyLFxufVxuZXhwb3J0IGVudW0gQXVkaW9Gb2N1c1R5cGUge1xuICAgIEdBSU5fQVVESU9fRk9DVVNfQUxMID0gMCxcbiAgICBOT1RfR0FJTl9BVURJT19GT0NVU19XSEVOX01VVEUgPSAxLFxuICAgIE5PVF9HQUlOX0FVRElPX0ZPQ1VTX0FMTCA9IDIsXG59XG5leHBvcnQgZW51bSBNZWRpYUFzcGVjdCB7XG4gICAgQVNQRUNUX0FOWSA9IDEsXG4gICAgQVNQRUNUX0NVU1RPTV9TSVpFID0gLTEsXG4gICAgQVNQRUNUX0xBTkRTQ0FQRSA9IDIsXG4gICAgQVNQRUNUX1BPUlRSQUlUID0gMyxcbiAgICBBU1BFQ1RfU1FVQVJFID0gNCxcbiAgICBBU1BFQ1RfVU5LTk9XTiA9IDAsXG59XG5leHBvcnQgZW51bSBDaG9pY2VzUG9zaXRpb24ge1xuICAgIEJPVFRPTV9MRUZUID0gMyxcbiAgICBCT1RUT01fUklHSFQgPSAyLFxuICAgIElOVklTSUJMRSA9IDQsXG4gICAgVE9QX0xFRlQgPSAwLFxuICAgIFRPUF9SSUdIVCA9IDEsXG59XG5leHBvcnQgZW51bSBNZWRpYURpcmVjdGlvbiB7XG4gICAgQU5ZID0gMCxcbiAgICBMQU5EU0NBUEUgPSAyLFxuICAgIFBPUlRSQUlUID0gMSxcbn1cbmV4cG9ydCBlbnVtIE5hdGl2ZUFkVGVtcGxhdGUge1xuICAgIE5BVElWRV9BRF9TTUFMTF9URU1QTEFURSA9IFwiTkFUSVZFX0FEX1NNQUxMX1RFTVBMQVRFXCIsXG4gICAgTkFUSVZFX0FEX0ZVTExfVEVNUExBVEUgPSBcIk5BVElWRV9BRF9GVUxMX1RFTVBMQVRFXCIsXG4gICAgTkFUSVZFX0FEX0JBTk5FUl9URU1QTEFURSA9IFwiTkFUSVZFX0FEX0JBTk5FUl9URU1QTEFURVwiLFxuICAgIE5BVElWRV9BRF9WSURFT19URU1QTEFURSA9IFwiTkFUSVZFX0FEX1ZJREVPX1RFTVBMQVRFXCIsXG4gICAgTkFUSVZFX0FEX1dJVEhfQVBQX0RPV05MT0FEX0JUTl9URU1QTEFURSA9IFwiTkFUSVZFX0FEX1dJVEhfQVBQX0RPV05MT0FEX0JUTl9URU1QTEFURVwiXG59XG5leHBvcnQgZW51bSBDb2xvciB7XG4gICAgUkVEID0gXCJSRURcIixcbiAgICBES0dSQVkgPSBcIkRLR1JBWVwiLFxuICAgIEdSQVkgPSBcIkdSQVlcIixcbiAgICBXSElURSA9IFwiV0hJVEVcIixcbiAgICBCTFVFID0gXCJCTFVFXCIsXG4gICAgQkxBQ0sgPSBcIkJMQUNLXCIsXG4gICAgTFRHUkFZID0gXCJMVEdSQVlcIixcbiAgICBNQUdFTlRBID0gXCJNQUdFTlRBXCIsXG4gICAgWUVMTE9XID0gXCJZRUxMT1dcIixcbiAgICBDWUFOID0gXCJDWUFOXCIsXG4gICAgR1JFRU4gPSBcIkdSRUVOXCIsXG4gICAgVFJBTlNQQVJFTlQgPSBcIlRSQU5TUEFSRU5UXCIsXG59XG5leHBvcnQgZW51bSBJbnN0YWxsUmVmZXJyZXJSZXNwb25zZXMge1xuICAgIFNFUlZJQ0VfRElTQ09OTkVDVEVEID0gLTEsXG4gICAgREVWRUxPUEVSX0VSUk9SID0gMyxcbiAgICBTRVJWSUNFX1VOQVZBSUxBQkxFID0gMSxcbiAgICBPSyA9IDAsXG4gICAgRkVBVFVSRV9OT1RfU1VQUE9SVEVEID0gMixcbn1cbmV4cG9ydCBlbnVtIEFuY2hvciB7XG4gICAgVE9QID0gXCJ0b3BcIixcbiAgICBCT1RUT00gPSBcImJvdHRvbVwiLFxuICAgIElOVklTSUJMRSA9IFwiaW52aXNpYmxlXCIsXG59XG5leHBvcnQgZW51bSBCYW5uZXJBZEV2ZW50cyB7XG4gICAgQkFOTkVSX0FEX0NMT1NFRCA9IFwiYmFubmVyX2FkX2Nsb3NlZFwiLFxuICAgIEJBTk5FUl9BRF9GQUlMRUQgPSBcImJhbm5lcl9hZF9mYWlsZWRcIixcbiAgICBCQU5ORVJfQURfTEVBVkUgPSBcImJhbm5lcl9hZF9sZWF2ZVwiLFxuICAgIEJBTk5FUl9BRF9PUEVORUQgPSBcImJhbm5lcl9hZF9vcGVuZWRcIixcbiAgICBCQU5ORVJfQURfTE9BREVEID0gXCJiYW5uZXJfYWRfbG9hZGVkXCIsXG4gICAgQkFOTkVSX0FEX0NMSUNLRUQgPSBcImJhbm5lcl9hZF9jbGlja2VkXCIsXG4gICAgQkFOTkVSX0FEX0lNUFJFU1NJT04gPSBcImJhbm5lcl9hZF9pbXByZXNzaW9uXCIsXG59XG5leHBvcnQgZW51bSBJbnRlcnN0aXRpYWxBZEV2ZW50cyB7XG4gICAgSU5URVJTVElUSUFMX0FEX0NMT1NFRCA9IFwiaW50ZXJzdGl0aWFsX2FkX2Nsb3NlZFwiLFxuICAgIElOVEVSU1RJVElBTF9BRF9GQUlMRUQgPSBcImludGVyc3RpdGlhbF9hZF9mYWlsZWRcIixcbiAgICBJTlRFUlNUSVRJQUxfQURfTEVBVkUgPSBcImludGVyc3RpdGlhbF9hZF9sZWF2ZVwiLFxuICAgIElOVEVSU1RJVElBTF9BRF9PUEVORUQgPSBcImludGVyc3RpdGlhbF9hZF9vcGVuZWRcIixcbiAgICBJTlRFUlNUSVRJQUxfQURfTE9BREVEID0gXCJpbnRlcnN0aXRpYWxfYWRfbG9hZGVkXCIsXG4gICAgSU5URVJTVElUSUFMX0FEX0NMSUNLRUQgPSBcImludGVyc3RpdGlhbF9hZF9jbGlja2VkXCIsXG4gICAgSU5URVJTVElUSUFMX0FEX0lNUFJFU1NJT04gPSBcImludGVyc3RpdGlhbF9hZF9pbXByZXNzaW9uXCIsXG4gICAgSU5URVJTVElUSUFMX0FEX1JFV0FSREVEID0gXCJpbnRlcnN0aXRpYWxfYWRfcmV3YXJkZWRcIixcbiAgICBJTlRFUlNUSVRJQUxfUkVXQVJEX0FEX0NMT1NFRCA9IFwiaW50ZXJzdGl0aWFsX3Jld2FyZF9hZF9jbG9zZWRcIixcbiAgICBJTlRFUlNUSVRJQUxfUkVXQVJEX0FEX0ZBSUxFRF9UT19MT0FEID0gXCJpbnRlcnN0aXRpYWxfcmV3YXJkX2FkX2ZhaWxlZF90b19sb2FkXCIsXG4gICAgSU5URVJTVElUSUFMX1JFV0FSRF9BRF9MRUZUX0FQUCA9IFwiaW50ZXJzdGl0aWFsX3Jld2FyZF9hZF9sZWZ0X2FwcFwiLFxuICAgIElOVEVSU1RJVElBTF9SRVdBUkRfQURfTE9BREVEID0gXCJpbnRlcnN0aXRpYWxfcmV3YXJkX2FkX2xvYWRlZFwiLFxuICAgIElOVEVSU1RJVElBTF9SRVdBUkRfQURfT1BFTkVEID0gXCJpbnRlcnN0aXRpYWxfcmV3YXJkX2FkX29wZW5lZFwiLFxuICAgIElOVEVSU1RJVElBTF9SRVdBUkRfQURfQ09NUExFVEVEID0gXCJpbnRlcnN0aXRpYWxfcmV3YXJkX2FkX2NvbXBsZXRlZFwiLFxuICAgIElOVEVSU1RJVElBTF9SRVdBUkRfQURfU1RBUlRFRCA9IFwiaW50ZXJzdGl0aWFsX3Jld2FyZF9hZF9zdGFydGVkXCIsXG59XG5leHBvcnQgZW51bSBTcGxhc2hBZEV2ZW50cyB7XG4gICAgU1BMQVNIX0FEX0ZBSUxFRF9UT19MT0FEID0gXCJzcGxhc2hfYWRfZmFpbGVkX3RvX2xvYWRcIixcbiAgICBTUExBU0hfQURfTE9BREVEID0gXCJzcGxhc2hfYWRfbG9hZGVkXCIsXG4gICAgU1BMQVNIX0FEX0RJU01JU1NFRCA9IFwic3BsYXNoX2FkX2Rpc21pc3NlZFwiLFxuICAgIFNQTEFTSF9BRF9TSE9XRUQgPSBcInNwbGFzaF9hZF9zaG93ZWRcIixcbiAgICBTUExBU0hfQURfQ0xJQ0sgPSBcInNwbGFzaF9hZF9jbGlja1wiLFxufVxuZXhwb3J0IGVudW0gUm9sbEFkRXZlbnRzIHtcbiAgICBST0xMX0FEX0xPQURfRkFJTEVEID0gXCJyb2xsX2FkX2xvYWRfZmFpbGVkXCIsXG4gICAgUk9MTF9BRF9MT0FERUQgPSBcInJvbGxfYWRfbG9hZGVkXCIsXG4gICAgUk9MTF9BRF9NRURJQV9DSEFOR0VEID0gXCJyb2xsX2FkX21lZGlhX2NoYW5nZWRcIixcbiAgICBST0xMX0FEX0NMSUNLRUQgPSBcInJvbGxfYWRfY2xpY2tlZFwiLFxuICAgIFJPTExfQURfTUVESUFfUFJPR1JFU1MgPSBcInJvbGxfYWRfbWVkaWFfcHJvZ3Jlc3NcIixcbiAgICBST0xMX0FEX01FRElBX1NUQVJUID0gXCJyb2xsX2FkX21lZGlhX3N0YXJ0XCIsXG4gICAgUk9MTF9BRF9NRURJQV9QQVVTRSA9IFwicm9sbF9hZF9tZWRpYV9wYXVzZVwiLFxuICAgIFJPTExfQURfTUVESUFfU1RPUCA9IFwicm9sbF9hZF9tZWRpYV9zdG9wXCIsXG4gICAgUk9MTF9BRF9NRURJQV9DT01QTEVUSU9OID0gXCJyb2xsX2FkX21lZGlhX2NvbXBsZXRpb25cIixcbiAgICBST0xMX0FEX01FRElBX0VSUk9SID0gXCJyb2xsX2FkX21lZGlhX2Vycm9yXCIsXG4gICAgUk9MTF9BRF9NRURJQV9VTk1VVEUgPSBcInJvbGxfYWRfbWVkaWFfdW5tdXRlXCIsXG4gICAgUk9MTF9BRF9NRURJQV9NVVRFID0gXCJyb2xsX2FkX21lZGlhX211dGVcIixcbiAgICBST0xMX0FEX1dIWV9USElTX0FEID0gXCJyb2xsX2FkX3doeV90aGlzX2FkXCIsXG59XG5leHBvcnQgZW51bSBSZXdhcmRBZEV2ZW50cyB7XG4gICAgUkVXQVJEX01FVEFEQVRBX0NIQU5HRUQgPSBcInJld2FyZF9tZXRhZGF0YV9jaGFuZ2VkXCIsXG4gICAgUkVXQVJEX0FEX0ZBSUxFRF9UT19MT0FEX0xPQUQgPSBcInJld2FyZF9hZF9mYWlsZWRfdG9fbG9hZF9sb2FkXCIsXG4gICAgUkVXQVJERURfTE9BREVEID0gXCJyZXdhcmRlZF9sb2FkZWRcIixcbiAgICBSRVdBUkRFRF9TVEFUVVMgPSBcInJld2FyZGVkX3N0YXR1c1wiLFxuICAgIFJFV0FSRF9BRF9DTE9TRURfU1RBVFVTID0gXCJyZXdhcmRfYWRfY2xvc2VkX3N0YXR1c1wiLFxuICAgIFJFV0FSRF9BRF9PUEVORURfU1RBVFVTID0gXCJyZXdhcmRfYWRfb3BlbmVkX3N0YXR1c1wiLFxuICAgIFJFV0FSRF9BRF9GQUlMRURfVE9fU0hPVyA9IFwicmV3YXJkX2FkX2ZhaWxlZF90b19zaG93XCIsXG4gICAgUkVXQVJERUQgPSBcInJld2FyZGVkXCIsXG4gICAgUkVXQVJEX0FEX0NMT1NFRCA9IFwicmV3YXJkX2FkX2Nsb3NlZFwiLFxuICAgIFJFV0FSRF9BRF9GQUlMRURfVE9fTE9BRCA9IFwicmV3YXJkX2FkX2ZhaWxlZF90b19sb2FkXCIsXG4gICAgUkVXQVJEX0FEX0xPQURFRCA9IFwicmV3YXJkX2FkX2xvYWRlZFwiLFxuICAgIFJFV0FSRF9BRF9PUEVORUQgPSBcInJld2FyZF9hZF9vcGVuZWRcIixcbn1cblxuZXhwb3J0IGVudW0gRGV0YWlsZWRDcmVhdGl2ZVR5cGUge1xuICBCSUdfSU1HID0gOTAxLFxuICBWSURFTyA9IDkwMyxcbiAgVEhSRUVfSU1HID0gOTA0LFxuICBTTUFMTF9JTUcgPSA5MDUsXG4gIFNJTkdMRV9JTUcgPSA5MDksXG4gIFNIT1JUX1RFWFQgPSA5MTMsXG4gIExPTkdfVEVYVCA9IDkxNFxufVxuXG5leHBvcnQgZW51bSBOYXRpdmVBZEV2ZW50cyB7XG4gICAgTkFUSVZFX0FEX0RJU0xJS0VEID0gXCJuYXRpdmVfYWRfZGlzbGlrZWRcIixcbiAgICBOQVRJVkVfQURfTE9BREVEX0xPQUQgPSBcIm5hdGl2ZV9hZF9sb2FkZWRfbG9hZFwiLFxuICAgIE5BVElWRV9BRF9DTE9TRUQgPSBcIm5hdGl2ZV9hZF9jbG9zZWRcIixcbiAgICBOQVRJVkVfQURfRkFJTEVEID0gXCJuYXRpdmVfYWRfZmFpbGVkXCIsXG4gICAgTkFUSVZFX0FEX0xFQVZFID0gXCJuYXRpdmVfYWRfbGVhdmVcIixcbiAgICBOQVRJVkVfQURfT1BFTkVEID0gXCJuYXRpdmVfYWRfb3BlbmVkXCIsXG4gICAgTkFUSVZFX0FEX0xPQURFRCA9IFwibmF0aXZlX2FkX2xvYWRlZFwiLFxuICAgIE5BVElWRV9BRF9DTElDS0VEID0gXCJuYXRpdmVfYWRfY2xpY2tlZFwiLFxuICAgIE5BVElWRV9BRF9JTVBSRVNTSU9OID0gXCJuYXRpdmVfYWRfaW1wcmVzc2lvblwiLFxuICAgIFZJREVPX09QRVJBVE9SX1ZJREVPX1NUQVJUID0gXCJ2aWRlb19vcGVyYXRvcl92aWRlb19zdGFydFwiLFxuICAgIFZJREVPX09QRVJBVE9SX1ZJREVPX1BMQVkgPSBcInZpZGVvX29wZXJhdG9yX3ZpZGVvX3BsYXlcIixcbiAgICBWSURFT19PUEVSQVRPUl9WSURFT19QQVVTRSA9IFwidmlkZW9fb3BlcmF0b3JfdmlkZW9fcGF1c2VcIixcbiAgICBWSURFT19PUEVSQVRPUl9WSURFT19FTkQgPSBcInZpZGVvX29wZXJhdG9yX3ZpZGVvX2VuZFwiLFxuICAgIFZJREVPX09QRVJBVE9SX1ZJREVPX01VVEUgPSBcInZpZGVvX29wZXJhdG9yX3ZpZGVvX211dGVcIixcbiAgICBBUFBfRE9XTkxPQURfU1RBVFVTX0NIQU5HRUQgPSdhcHBfZG93bmxvYWRfc3RhdHVzX2NoYW5nZWQnLFxuICAgIEFQUF9ET1dOTE9BRF9OT05fV0lGSV9ET1dOTE9BRCA9ICdhcHBfZG93bmxvYWRfbm9uX3dpZmlfZG93bmxvYWQnXG59XG5cbmV4cG9ydCBlbnVtIFZhc3RFdmVudHMge1xuICAgIFZBU1RfTE9BRF9TVUNDRVNTID0gJ3Zhc3RfbG9hZF9zdWNjZXNzJyxcbiAgICBWQVNUX0xPQURfRkFJTEVEID0gJ3Zhc3RfbG9hZF9mYWlsZWQnLFxuICAgIFZBU1RfUExBWV9TVEFURV9DSEFOR0VEID0gJ3Zhc3RfcGxheV9zdGF0ZV9jaGFuZ2VkJyxcbiAgICBWQVNUX1ZPTFVNRV9DSEFOR0VEID0gJ3Zhc3Rfdm9sdW1lX2NoYW5nZWQnLFxuICAgIFZBU1RfU0NSRUVOX1ZJRVdfQ0hBTkdFRCA9ICd2YXN0X3NjcmVlbl92aWV3X2NoYW5nZWQnLFxuICAgIFZBU1RfUFJPR1JFU1NfQ0hBTkdFRCA9ICd2YXN0X3Byb2dyZXNzX2NoYW5nZWQnLFxuICAgIFZBU1RfT05fU1VDQ0VTUyA9ICd2YXN0X29uX3N1Y2Nlc3MnLFxuICAgIFZBU1RfT05fRkFJTEVEID0gJ3Zhc3Rfb25fZmFpbGVkJyxcbiAgICBWQVNUX0FEX1JFQURZID0gJ3Zhc3RfYWRfcmVhZHknLFxuICAgIFZBU1RfQURfRklOSVNIID0gJ3Zhc3RfYWRfZmluaXNoJyxcbiAgICBWQVNUX0JVRkZFUl9TVEFSVD0gJ3Zhc3RfYnVmZmVyX3N0YXJ0JyxcbiAgICBWQVNUX0JVRkZFUl9FTkQ9ICd2YXN0X2J1ZmZlcl9lbmQnLFxufVxuXG5leHBvcnQgZW51bSBBY3RpdmF0ZVN0eWxlIHsgXHRcbiAgICBCT1RUT01fQkFOTkVSID0gMSxcbiAgICBDT05GSVJNX0RJQUxPRyA9IDJcbn1cbmV4cG9ydCBlbnVtIENyZWF0aXZlTWF0Y2hUeXBlIHtcbiAgICBFWEFDVCA9IDAsXG4gICAgU01BUlQ9IDEsXG4gICAgVU5LTk9XTiA9IDIsXG4gICAgQU5ZID0gMyxcbiAgICBMQU5EU0NBUEUgPSA0LFxuICAgIFBPUlRSQUlUID0gNSxcbiAgICBTUVVBUkUgPSA2XG4gIFxufVxuZXhwb3J0IGVudW0gQXBwRG93bmxvYWRTdGF0dXMge1xuICAgIERPV05MT0FEID0gXCJET1dOTE9BRFwiLFxuICAgIFdBSVRJTkdfRk9SX1dJRkkgPSBcIldBSVRJTkdfRk9SX1dJRklcIixcbiAgICBXQUlUSU5HID0gXCJXQUlUSU5HXCIsXG4gICAgRE9XTkxPQURJTkcgPSBcIkRPV05MT0FESU5HXCIsXG4gICAgUEFVU0UgPSBcIlBBVVNFXCIsXG4gICAgUkVTVU1FID0gXCJSRVNVTUVcIixcbiAgICBET1dOTE9BREVEID0gXCJET1dOTE9BREVEXCIsXG4gICAgRE9XTkxPQURGQUlMRUQgPSBcIkRPV05MT0FERkFJTEVEXCIsXG4gICAgSU5TVEFMTElORyA9IFwiSU5TVEFMTElOR1wiLFxuICAgIElOU1RBTEwgPSBcIklOU1RBTExcIixcbiAgICBJTlNUQUxMRUQgPSBcIklOU1RBTExFRFwiXG4gIH1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEludGVyZmFjZXNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgaW50ZXJmYWNlIExheW91dEJvdW5kcyB7XG4gICAgbWFyZ2luTGVmdD86IG51bWJlcjtcbiAgICBtYXJnaW5SaWdodD86IG51bWJlcjtcbiAgICBtYXJnaW5Ub3A/OiBudW1iZXI7XG4gICAgbWFyZ2luQm90dG9tPzogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIG1hcmdpbkxlZnQ/OiBudW1iZXI7XG4gICAgbWFyZ2luUmlnaHQ/OiBudW1iZXI7XG4gICAgbWFyZ2luVG9wPzogbnVtYmVyO1xuICAgIG1hcmdpbkJvdHRvbT86IG51bWJlcjtcbiAgICBwYWdlWE9mZnNldD86IG51bWJlcjtcbiAgICBwYWdlWU9mZnNldD86IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQWRQYXJhbSB7XG4gICAgZ2VuZGVyPzogR2VuZGVyO1xuICAgIGFkQ29udGVudENsYXNzaWZpY2F0aW9uPzogQWRDb250ZW50Q2xhc3NpZmljYXRpb247XG4gICAgdGFnRm9yVW5kZXJBZ2VPZlByb21pc2U/OiBVbmRlckFnZU9mUHJvbWlzZTtcbiAgICB0YWdGb3JDaGlsZFByb3RlY3Rpb24/OiBDaGlsZFByb3RlY3Rpb247XG4gICAgbm9uUGVyc29uYWxpemVkQWQ/OiBOb25QZXJzb25hbGl6ZWRBZDtcbiAgICBhcHBDb3VudHJ5Pzogc3RyaW5nO1xuICAgIGFwcExhbmc/OiBzdHJpbmc7XG4gICAgY291bnRyeUNvZGU/OiBzdHJpbmc7XG4gICAgYmVsb25nQ291bnRyeUNvZGU/OiBzdHJpbmc7XG4gICAgY29uc2VudD86IHN0cmluZztcbiAgICByZXF1ZXN0TG9jYXRpb24/OiBib29sZWFuO1xuICAgIGRldGFpbGVkQ3JlYXRpdmVUeXBlPzogRGV0YWlsZWRDcmVhdGl2ZVR5cGVbXTtcbiAgICBsb2NhdGlvbj8gOkxvY2F0aW9uLFxuICAgIGNvbnRlbnRCdW5kbGU/IDogQ29udGVudEJ1bmRsZSxcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYXRpb24ge1xuICAgIGxhdDogbnVtYmVyLFxuICAgIGxuZzogbnVtYmVyXG59XG5leHBvcnQgaW50ZXJmYWNlIENvbnRlbnRCdW5kbGV7XG4gICAgY2hhbm5lbENhdGVnb3J5Q29kZT86IHN0cmluZyxcbiAgICB0aXRsZT86IHN0cmluZyxcbiAgICB0YWdzPzogc3RyaW5nLFxuICAgIHJlbGF0ZWRQZW9wbGU/OiBzdHJpbmcsXG4gICAgY29udGVudD86IHN0cmluZyxcbiAgICBjb250ZW50SUQ/OiBudW1iZXIsXG4gICAgY2F0ZWdvcnk/OiBzdHJpbmcsXG4gICAgc3ViY2F0ZWdvcnk/OiBzdHJpbmcsXG4gICAgdGhpcmRDYXRlZ29yeT86IHN0cmluZ1xufVxuZXhwb3J0IGludGVyZmFjZSBITVNSZXF1ZXN0T3B0aW9ucyB7XG4gICAgYWRDb250ZW50Q2xhc3NpZmljYXRpb24/OiBBZENvbnRlbnRDbGFzc2lmaWNhdGlvbjtcbiAgICBhcHBMYW5nPzogc3RyaW5nO1xuICAgIGFwcENvdW50cnk/OiBzdHJpbmc7XG4gICAgdGFnRm9yQ2hpbGRQcm90ZWN0aW9uPzogQ2hpbGRQcm90ZWN0aW9uO1xuICAgIHRhZ0ZvclVuZGVyQWdlT2ZQcm9taXNlPzogVW5kZXJBZ2VPZlByb21pc2U7XG4gICAgbm9uUGVyc29uYWxpemVkQWQ/OiBOb25QZXJzb25hbGl6ZWRBZDtcbiAgICBjb25zZW50Pzogc3RyaW5nO1xuICAgIHJlcXVlc3RMb2NhdGlvbj86IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIEhNU1Jld2FyZCB7XG4gICAgcmV3YXJkQW1vdW50OiBudW1iZXI7XG4gICAgcmV3YXJkTmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBITVNSZXdhcmRWZXJpZnlDb25maWcge1xuICAgIGRhdGE6IHN0cmluZztcbiAgICB1c2VySWQ6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgT2FpZFJlc3VsdCB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBpc0xpbWl0QWRUcmFjaW5nRW5hYmxlZDogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRHVyYXRpb24ge1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFJvbGxBZExvYWRlclBhcmFtcyB7XG4gICAgYWRJZDogc3RyaW5nO1xuICAgIHRvdGFsRHVyYXRpb246IG51bWJlcjtcbiAgICBtYXhDb3VudDogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBWaWRlb0NvbmZpZ3VyYXRpb24ge1xuICAgIGF1ZGlvRm9jdXNUeXBlPzogQXVkaW9Gb2N1c1R5cGU7XG4gICAgY2xpY2tUb0Z1bGxTY3JlZW5SZXF1ZXN0PzogYm9vbGVhbjtcbiAgICBjdXN0b21pemVPcGVyYXRlUmVxdWVzdGVkPzogYm9vbGVhbjtcbiAgICBpc1N0YXJ0TXV0ZWQ/OiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBOYXRpdmVBZENvbmZpZ3VyYXRpb24ge1xuICAgIGFkU2l6ZTogQWRTaXplO1xuICAgIGNob2ljZXNQb3NpdGlvbj86IENob2ljZXNQb3NpdGlvbjtcbiAgICBtZWRpYUFzcGVjdD86IE1lZGlhQXNwZWN0O1xuICAgIG1lZGlhRGlyZWN0aW9uPzogTWVkaWFEaXJlY3Rpb247XG4gICAgcmV0dXJuVXJsc0ZvckltYWdlcz86IGJvb2xlYW47XG4gICAgcmVxdWVzdEN1c3RvbURpc2xpa2VUaGlzQWQ/OiBib29sZWFuO1xuICAgIHJlcXVlc3RNdWx0aUltYWdlcz86IGJvb2xlYW47XG4gICAgdmlkZW9Db25maWd1cmF0aW9uPzogVmlkZW9Db25maWd1cmF0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZpZGVvT3BlcmF0b3JBc3BlY3RSYXRpbyB7XG4gICAgdmlkZW9PcGVyYXRvckdldEFzcGVjdFJhdGlvOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF0aXZlQWRMb2FkT3B0aW9ucyB7XG4gICAgYWRJZD86IHN0cmluZztcbiAgICBhZD86IEFkUGFyYW07XG4gICAgbmF0aXZlQWRPcHRpb25zPzogTmF0aXZlQWRDb25maWd1cmF0aW9uO1xufVxuZXhwb3J0IGludGVyZmFjZSBBZFNpemUge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIE5hdGl2ZUFkT3B0aW9ucyB7XG4gICAgZGl2OiBzdHJpbmc7XG4gICAgdGVtcGxhdGU/OiBOYXRpdmVBZFRlbXBsYXRlO1xuICAgIGJnPzogQ29sb3I7XG59XG5leHBvcnQgaW50ZXJmYWNlIFJvbGxBZExvYWRPcHRpb25zIHtcbiAgICBmaWxlPzogc3RyaW5nO1xuICAgIGFkUGFyYW0/OiBBZFBhcmFtO1xufVxuZXhwb3J0IGludGVyZmFjZSBSZWZlcnJlckRldGFpbHMge1xuICAgIHJlc3BvbnNlQ29kZT86IEluc3RhbGxSZWZlcnJlclJlc3BvbnNlcztcbiAgICBpbnN0YWxsUmVmZXJyZXI/OiBzdHJpbmc7XG4gICAgcmVmZXJyZXJDbGlja1RpbWVzdGFtcD86IG51bWJlcjtcbiAgICBpbnN0YWxsQmVnaW5UaW1lc3RhbXA/OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIENvbnNlbnRVcGRhdGVSZXN1bHQge1xuICAgIGNvbnNlbnRTdGF0dXM/OiBDb25zZW50U3RhdHVzO1xuICAgIGlzTmVlZENvbnNlbnQ/OiBib29sZWFuO1xuICAgIGFkUHJvdmlkZXJzPzogQWRQcm92aWRlcltdO1xufVxuZXhwb3J0IGludGVyZmFjZSBBZFByb3ZpZGVyIHtcbiAgICBpZD86IHN0cmluZztcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHByaXZhY3lQb2xpY3lVcmw/OiBzdHJpbmc7XG4gICAgc2VydmljZUFyZWE/OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFNwbGFzaEFkTG9hZE9wdGlvbnMge1xuICAgIGFkSWQ6IHN0cmluZztcbiAgICBvcmllbnRhdGlvbj86IEhNU1NjcmVlbk9yaWVudGF0aW9uO1xuICAgIGFkUGFyYW0/OiBBZFBhcmFtO1xuICAgIGxvZ29BbmNob3I/OiBBbmNob3I7XG59XG5leHBvcnQgaW50ZXJmYWNlIFZhc3RMb2FkT3B0aW9ucyB7XG4gICAgYWRQYXJhbT86IFZhc3RDb25maWd1cmF0aW9uLFxuICAgIHBsYXllckNvbmZpZz86IFBsYXllckNvbmZpZyxcbiAgICBpc1Rlc3RBZD86IGJvb2xlYW4sXG4gICAgaXNBZExvYWRXaXRoQWRzRGF0YT86IGJvb2xlYW4sXG4gICAgaXNDdXN0b21WaWRlb1BsYXllcj86IGJvb2xlYW5cbn1cbmV4cG9ydCBpbnRlcmZhY2UgVmFzdENvbmZpZ3VyYXRpb24ge1xuICAgIGFkSWQ/OiBzdHJpbmcsXG4gICAgdG90YWxEdXJhdGlvbj86IG51bWJlcixcbiAgICBjcmVhdGl2ZU1hdGNoU3RyYXRlZ3k/OiBDcmVhdGl2ZU1hdGNoVHlwZSxcbiAgICBhbGxvd01vYmlsZVRyYWZmaWM/OiBib29sZWFuLFxuICAgIGFkT3JpZW50YXRpb24/Ok1lZGlhRGlyZWN0aW9uLFxuICAgIG1heEFkUG9kcz86IG51bWJlcixcbiAgICByZXF1ZXN0T3B0aW9uPzogSE1TUmVxdWVzdE9wdGlvbnNcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUGxheWVyQ29uZmlnIHtcbiAgICBpc0VuYWJsZUN1dG91dD86IGJvb2xlYW4sXG4gICAgaXNFbmFibGVQb3J0cmFpdD86IGJvb2xlYW4sXG4gICAgaXNFbmFibGVSb3RhdGlvbj86IGJvb2xlYW4sXG4gICAgaXNTa2lwTGluZWFyQWQ/OiBib29sZWFuLFxuICAgIGlzRm9yY2VNdXRlPzpib29sZWFuLFxuICAgIGlzSW5kdXN0cnlJY29uU2hvdz86Ym9vbGVhblxufVxuZXhwb3J0IGludGVyZmFjZSBWYXN0U2RrQ29uZmlndXJhdGlvbntcbiAgICBodHRwQ2FsbFRpbWVvdXRNczpudW1iZXIsXG4gICAgaHR0cENvbm5lY3RUaW1lb3V0TXM6bnVtYmVyLFxuICAgIGh0dHBLZWVwQWxpdmVEdXJhdGlvbk1zOm51bWJlcixcbiAgICBodHRwUmVhZFRpbWVvdXRNczpudW1iZXIsXG4gICAgbWF4SHR0cENvbm5lY3Rpb25zOm51bWJlcixcbiAgICBtYXhSZWRpcmVjdFdyYXBwZXJMaW1pdDpudW1iZXIsXG4gICAgaXNUZXN0OmJvb2xlYW4sXG4gICAgdmFzdEV2ZW50UmV0cnlCYXRjaFNpemU6bnVtYmVyLFxuICAgIHZhc3RFdmVudFJldHJ5SW50ZXJ2YWxTZWNvbmRzOm51bWJlcixcbiAgICB2YXN0RXZlbnRSZXRyeVVwbG9hZFRpbWVzOm51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkdmVydGlzZXJJbmZve1xuICAgIHNlcTpudW1iZXIsXG4gICAga2V5OnN0cmluZyxcbiAgICB2YWx1ZTpzdHJpbmdcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBNb2R1bGVzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogXCJITVNBZHNcIixcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc3ByaW1lXCIsXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkc1wiLFxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TQWRzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKSBITVNJbnRlcnN0aXRpYWxBZCA9IEhNU0ludGVyc3RpdGlhbEFkO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKSBITVNCYW5uZXJBZCA9IEhNU0Jhbm5lckFkO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKSBITVNTcGxhc2hBZCA9IEhNU1NwbGFzaEFkO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKSBITVNSZXdhcmRBZCA9IEhNU1Jld2FyZEFkO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKSBITVNOYXRpdmVBZCA9IEhNU05hdGl2ZUFkO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKSBITVNSb2xsQWQgPSBITVNSb2xsQWQ7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpIEhNU1Zhc3QgPSBITVNWYXN0O1xuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBvbihldmVudDogc3RyaW5nLCBjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldFNES1ZlcnNpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldFJlcXVlc3RPcHRpb25zKCk6IFByb21pc2U8SE1TUmVxdWVzdE9wdGlvbnM+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldFJlcXVlc3RPcHRpb25zKHJlcXVlc3RPcHRpb25zOiBITVNSZXF1ZXN0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0Q29uc2VudChjb25zZW50OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEFwcEFjdGl2YXRlU3R5bGUoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEFwcEFjdGl2YXRlU3R5bGUoc3R5bGU6bnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRBcHBJbnN0YWxsZWROb3RpZnkoc3RhdHVzOmJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzQXBwSW5zdGFsbGVkTm90aWZ5KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBkaXNhYmxlTG9nZ2VyKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBhZGRUZXN0RGV2aWNlSWQodGVzdERldmljZUlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldFRlc3REZXZpY2VJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0VW5kZXJBZ2VPZlByb21pc2UodW5kZXJBZ2VPZlByb21pc2U6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldENvbnNlbnRTdGF0dXMoY29uc2VudFN0YXR1czogQ29uc2VudFN0YXR1cyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0RGVidWdOZWVkQ29uc2VudChkZWJ1Z05lZWRDb25zZW50OiBEZWJ1Z05lZWRDb25zZW50KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHJlcXVlc3RDb25zZW50VXBkYXRlKCk6IFByb21pc2U8Q29uc2VudFVwZGF0ZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgdmVyaWZ5QWRJZChhZElkOiBzdHJpbmcsIGlzTGltaXRBZFRyYWNraW5nOiBib29sZWFuKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRBZHZlcnRpc2luZ0lkSW5mbygpOiBQcm9taXNlPE9haWRSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHJlZmVycmVyQ2xpZW50U3RhcnRDb25uZWN0aW9uKGlzVGVzdD86IGJvb2xlYW4pOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcmVmZXJyZXJDbGllbnRFbmRDb25uZWN0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcmVmZXJyZXJDbGllbnRJc1JlYWR5KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0SW5zdGFsbFJlZmVycmVyKGluc3RhbGxDaGFubmVsPzpzdHJpbmcpOiBQcm9taXNlPFJlZmVycmVyRGV0YWlscz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaW5pdFZhc3QodmFzdFNka0NvbmZpZ3VyYXRpb246VmFzdFNka0NvbmZpZ3VyYXRpb24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldFZhc3RTZGtDb25maWd1cmF0aW9uKCk6IFByb21pc2U8VmFzdFNka0NvbmZpZ3VyYXRpb24+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHVwZGF0ZVNka1NlcnZlckNvbmZpZyhzbG90SWQ6c3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICB1c2VyQWNjZXB0QWRMaWNlbnNlKGlzQWNjZXB0TGljZW5zZTpib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRFdmVudFByb2Nlc3NvcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogXCJITVNBZHNcIixcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc3ByaW1lXCIsXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkcy5ITVNCYW5uZXJBZFwiLFxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TQmFubmVyQWQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBvbihldmVudE5hbWU6IEJhbm5lckFkRXZlbnRzLCBjYWxsYmFjazogKHJlc3VsdD86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgYXN5bmMgY3JlYXRlKGRpdklkOiBzdHJpbmcsIGJvdW5kcz86IExheW91dEJvdW5kcyk6IFByb21pc2U8SE1TQmFubmVyQWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNjcm9sbCgpOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEFkSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEFkSWQoYWRJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRCYW5uZXJBZFNpemUoKTogUHJvbWlzZTxBZFNpemU+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEJhbm5lckFkU2l6ZShiYW5uZXJBZFNpemU6IEJhbm5lckFkU2l6ZSB8IEFkU2l6ZSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QmFja2dyb3VuZENvbG9yKGJnQ29sb3I6IENvbG9yKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRCYW5uZXJSZWZyZXNoKGJhbm5lclJlZnJlc2g6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QWRMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzTG9hZGluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGxvYWRBZChhZFBhcmFtPzogQWRQYXJhbSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcGF1c2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZXN1bWUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0SGVpZ2h0KCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRIZWlnaHRQeCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0V2lkdGgoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldFdpZHRoUHgoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzQXV0b0hlaWdodFNpemUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0R5bmFtaWNTaXplKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNGdWxsV2lkdGhTaXplKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0Q3VycmVudERpcmVjdGlvbkJhbm5lclNpemUod2lkdGg6IG51bWJlcik6IFByb21pc2U8QWRTaXplPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRMYW5kc2NhcGVCYW5uZXJTaXplKHdpZHRoOiBudW1iZXIpOiBQcm9taXNlPEFkU2l6ZT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0UG9ydHJhaXRCYW5uZXJTaXplKHdpZHRoOiBudW1iZXIpOiBQcm9taXNlPEFkU2l6ZT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0Fkc1wiLFxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzcHJpbWVcIixcbiAgICBwbHVnaW5SZWY6IFwiSE1TQWRzLkhNU0ludGVyc3RpdGlhbEFkXCIsXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNJbnRlcnN0aXRpYWxBZCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIG9uKFxuICAgICAgICBldmVudE5hbWU6IEludGVyc3RpdGlhbEFkRXZlbnRzLFxuICAgICAgICBjYWxsYmFjazogKHJlc3VsdD86IGFueSkgPT4gdm9pZFxuICAgICk6IHZvaWQge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgYXN5bmMgY3JlYXRlKHVzZUFjdGl2aXR5OiBib29sZWFuKTogUHJvbWlzZTxITVNJbnRlcnN0aXRpYWxBZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2Nyb2xsKCk6IHZvaWQge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2hvdygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzTG9hZGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNMb2FkaW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgbG9hZEFkKGFkUGFyYW0/OiBBZFBhcmFtKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRBZElkKGFkSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0QWRJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QWRMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldFJld2FyZEFkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICB2aWRlb09wZXJhdG9yR2V0QXNwZWN0UmF0aW8oKTogUHJvbWlzZTxWaWRlb09wZXJhdG9yQXNwZWN0UmF0aW8+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHZpZGVvT3BlcmF0b3JIYXNWaWRlbygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHZpZGVvT3BlcmF0b3JJc0N1c3RvbWl6ZU9wZXJhdGVFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgdmlkZW9PcGVyYXRvcklzTXV0ZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICB2aWRlb09wZXJhdG9yTXV0ZShtdXRlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICB2aWRlb09wZXJhdG9yUGF1c2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICB2aWRlb09wZXJhdG9yUGxheSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHZpZGVvT3BlcmF0b3JTdG9wKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0Fkc1wiLFxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzcHJpbWVcIixcbiAgICBwbHVnaW5SZWY6IFwiSE1TQWRzLkhNU05hdGl2ZUFkXCIsXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNOYXRpdmVBZCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIG9uKGV2ZW50TmFtZTogTmF0aXZlQWRFdmVudHMsIGNhbGxiYWNrOiAocmVzdWx0PzogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBhc3luYyBjcmVhdGUoXG4gICAgICAgIG9wdGlvbnM6IE5hdGl2ZUFkT3B0aW9ucyxcbiAgICAgICAgYm91bmRzPzogTGF5b3V0Qm91bmRzXG4gICAgKTogUHJvbWlzZTxITVNOYXRpdmVBZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgbG9hZEFkKG9wdGlvbnM/OiBOYXRpdmVBZExvYWRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzaG93KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNMb2FkaW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGRpc2xpa2VBZChkaXNsaWtlUmVhc29uOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEFsbG93Q3VzdG9tQ2xpY2soKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRBZFNvdXJjZSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0RGVzY3JpcHRpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldENhbGxUb0FjdGlvbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0RGlzbGlrZUFkUmVhc29ucygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0N1c3RvbUNsaWNrQWxsb3dlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzQ3VzdG9tRGlzbGlrZVRoaXNBZEVuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZWNvcmRDbGlja0V2ZW50KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcmVjb3JkSW1wcmVzc2lvbkV2ZW50KGltcHJlc3Npb25EYXRhOiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldFVuaXF1ZUlkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXREaXNsaWtlQWRMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdvdG9XaHlUaGlzQWRQYWdlKHVzZVZpZXc6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEFkU2lnbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0VGl0bGUoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldFdoeVRoaXNBZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2hvd0FwcERldGFpbFBhZ2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZWNvcmRTaG93U3RhcnRFdmVudChzaG93U3RhcnREYXRhOiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIG9uQWRDbG9zZShrZXl3b3Jkczogc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldE5hdGl2ZUFkQ29uZmlndXJhdGlvbigpOiBQcm9taXNlPE5hdGl2ZUFkQ29uZmlndXJhdGlvbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0T25Eb3dubG9hZFN0YXR1c0NoYW5nZWRMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldE9uTm9uV2lmaURvd25sb2FkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRTaG93UGVybWlzc2lvbkRpYWxvZyhzaG93OmJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEFsbG93ZWROb25XaWZpTmV0d29yayhhbGxvd2VkOmJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGNhbmNlbCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGNvbnRpbnVlRG93bmxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzaG93QWR2ZXJ0aXNlckluZm9EaWFsb2coKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBoaWRlQWR2ZXJ0aXNlckluZm9EaWFsb2coKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBoYXNBZHZlcnRpc2VySW5mbygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEFkdmVydGlzZXJJbmZvKCk6IFByb21pc2U8QWR2ZXJ0aXNlckluZm9bXT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2hvd0FwcERldGFpbFBhZ2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc1RyYW5zcGFyZW5jeU9wZW4oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRUcmFuc3BhcmVuY3lUcGxVcmwoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogXCJITVNBZHNcIixcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc3ByaW1lXCIsXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkcy5ITVNSZXdhcmRBZFwiLFxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TUmV3YXJkQWQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBvbihldmVudE5hbWU6IFJld2FyZEFkRXZlbnRzLCBjYWxsYmFjazogKHJlc3VsdD86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgYXN5bmMgY3JlYXRlKGFkSWQ6IHN0cmluZyk6IFByb21pc2U8SE1TUmV3YXJkQWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNob3codXNlQWN0aXZpdHk6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHJlc3VtZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHBhdXNlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGxvYWRBZFdpdGhBZElkKGFkSWQ6c3RyaW5nLGFkUGFyYW0/OkFkUGFyYW0pOiBQcm9taXNlPHZvaWQ+e1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGxvYWRBZChhZFBhcmFtPzogQWRQYXJhbSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNMb2FkZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXREYXRhKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRVc2VySWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldFJld2FyZCgpOiBQcm9taXNlPEhNU1Jld2FyZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0RGF0YShkYXRhOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEltbWVyc2l2ZShpbW1lcnNpdmU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldFVzZXJJZCh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0UmV3YXJkVmVyaWZ5Q29uZmlnKGNvbmZpZzogSE1TUmV3YXJkVmVyaWZ5Q29uZmlnKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRSZXdhcmRWZXJpZnlDb25maWcoKTogUHJvbWlzZTxITVNSZXdhcmRWZXJpZnlDb25maWc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldE9uTWV0YWRhdGFDaGFuZ2VkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRSZXdhcmRBZExpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0TW9iaWxlRGF0YUFsZXJ0U3dpdGNoKGFsZXJ0U3dpdGNoOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6IFwiSE1TQWRzXCIsXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1hZHNwcmltZVwiLFxuICAgIHBsdWdpblJlZjogXCJITVNBZHMuSE1TUm9sbEFkXCIsXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNSb2xsQWQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBvbihldmVudE5hbWU6IFJvbGxBZEV2ZW50cywgY2FsbGJhY2s6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGFzeW5jIGNyZWF0ZShcbiAgICAgICAgcGFyYW1zOiBSb2xsQWRMb2FkZXJQYXJhbXMsXG4gICAgICAgIGRpdklkOiBzdHJpbmcsXG4gICAgICAgIGJvdW5kcz86IExheW91dEJvdW5kc1xuICAgICk6IFByb21pc2U8SE1TUm9sbEFkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzY3JvbGwoKTogdm9pZCB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBsb2FkQWQob3B0aW9uczogUm9sbEFkTG9hZE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzTG9hZGluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGRlc3Ryb3koKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBwYXVzZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzUGxheWluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIG11dGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICB1bm11dGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBvbkNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcGxheSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHN0b3AoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZW1vdmVJbnN0cmVhbU1lZGlhQ2hhbmdlTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZW1vdmVNZWRpYU11dGVMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHJlbW92ZUluc3RyZWFtTWVkaWFTdGF0ZUxpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0SW5zdHJlYW1BZHMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRJbnN0cmVhbU1lZGlhQ2hhbmdlTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRNZWRpYU11dGVMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEluc3RyZWFtTWVkaWFTdGF0ZUxpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0T25JbnN0cmVhbUFkQ2xpY2tMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEFkU291cmNlKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXREdXJhdGlvbigpOiBQcm9taXNlPER1cmF0aW9uPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRXaHlUaGlzQWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEFkU2lnbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNDbGlja2VkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNFeHBpcmVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNJbWFnZUFkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNTaG93bigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzVmlkZW9BZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldENhbGxUb0FjdGlvbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2hvd0FkdmVydGlzZXJJbmZvRGlhbG9nKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaGlkZUFkdmVydGlzZXJJbmZvRGlhbG9nKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaGFzQWR2ZXJ0aXNlckluZm8oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRBZHZlcnRpc2VySW5mbygpOiBQcm9taXNlPEFkdmVydGlzZXJJbmZvW10+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzVHJhbnNwYXJlbmN5T3BlbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldFRyYW5zcGFyZW5jeVRwbFVybCgpOiBQcm9taXNlPFN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2hvd1RyYW5zcGFyZW5jeURpYWxvZygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGhpZGVUcmFuc3BhcmVuY3lEaWFsb2coKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6IFwiSE1TQWRzXCIsXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1hZHNwcmltZVwiLFxuICAgIHBsdWdpblJlZjogXCJITVNBZHMuSE1TU3BsYXNoQWRcIixcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU1NwbGFzaEFkIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgb24oZXZlbnROYW1lOiBTcGxhc2hBZEV2ZW50cywgY2FsbGJhY2s6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGFzeW5jIGNyZWF0ZSgpOiBQcm9taXNlPEhNU1NwbGFzaEFkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRMb2dvKGZpbGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0V2lkZVNsb2dhblJlc0lkKHdpZGVTbG9nYW5SZXNJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRTbG9nYW5SZXNJZChzbG9nYW5SZXNJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBsb2FkKG9wdGlvbnM6IFNwbGFzaEFkTG9hZE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHByZWxvYWRBZChvcHRpb25zOiBTcGxhc2hBZExvYWRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBkZXN0cm95VmlldygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHBhdXNlVmlldygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHJlc3VtZVZpZXcoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0xvYWRpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0xvYWRlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEFkRGlzcGxheUxpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QXVkaW9Gb2N1c1R5cGUoYXVkaW9Gb2N1c1R5cGU6IEF1ZGlvRm9jdXNUeXBlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6IFwiSE1TQWRzXCIsXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1hZHNwcmltZVwiLFxuICAgIHBsdWdpblJlZjogXCJITVNBZHMuSE1TVmFzdFwiLFxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TVmFzdCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIG9uKGV2ZW50TmFtZTogVmFzdEV2ZW50cywgY2FsbGJhY2s6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGFzeW5jIGNyZWF0ZShcbiAgICAgICAgZGl2SWQ6IHN0cmluZyxcbiAgICAgICAgYm91bmRzPzogTGF5b3V0Qm91bmRzXG4gICAgKTogUHJvbWlzZTxITVNWYXN0PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzY3JvbGwoKTogdm9pZCB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBsb2FkQWQob3B0aW9uczogVmFzdExvYWRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZXN1bWUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBwYXVzZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHJlbGVhc2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICB0b2dnbGVNdXRlU3RhdGUoaXNNdXRlOmJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc3RhcnRPclBhdXNlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG59ICAgIFxuIl19