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
    HMSAdsOriginal.plugin = "cordova-plugin-hms-ads";
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
    HMSBannerAdOriginal.plugin = "cordova-plugin-hms-ads";
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
    HMSInterstitialAdOriginal.plugin = "cordova-plugin-hms-ads";
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
    HMSNativeAdOriginal.plugin = "cordova-plugin-hms-ads";
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
    HMSRewardAdOriginal.plugin = "cordova-plugin-hms-ads";
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
    HMSRollAdOriginal.plugin = "cordova-plugin-hms-ads";
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
    HMSSplashAdOriginal.plugin = "cordova-plugin-hms-ads";
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
    HMSVastOriginal.plugin = "cordova-plugin-hms-ads";
    HMSVastOriginal.pluginRef = "HMSAds.HMSVast";
    HMSVastOriginal.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSVastOriginal.platforms = ["Android"];
    return HMSVastOriginal;
}(IonicNativePlugin));
var HMSVast = new HMSVastOriginal();
export { HMSVast };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBaUJBLE9BQU8sc0VBS04sTUFBTSxvQkFBb0IsQ0FBQztBQUU1QiwrREFBK0Q7QUFDL0QsWUFBWTtBQUNaLCtEQUErRDtBQUUvRCxNQUFNLENBQU4sSUFBWSxpQkFVWDtBQVZELFdBQVksaUJBQWlCO0lBQ3pCLDZFQUFrQixDQUFBO0lBQ2xCLGlHQUE0QixDQUFBO0lBQzVCLDZGQUEwQixDQUFBO0lBQzFCLDZFQUFrQixDQUFBO0lBQ2xCLHVGQUF1QixDQUFBO0lBQ3ZCLGlGQUFvQixDQUFBO0lBQ3BCLG1HQUE2QixDQUFBO0lBQzdCLG1HQUE2QixDQUFBO0lBQzdCLGlIQUFvQyxDQUFBO0FBQ3hDLENBQUMsRUFWVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBVTVCO0FBQ0QsTUFBTSxDQUFOLElBQVksd0JBS1g7QUFMRCxXQUFZLHdCQUF3QjtJQUNoQyxpSEFBNkIsQ0FBQTtJQUM3Qiw2R0FBMkIsQ0FBQTtJQUMzQixxSEFBK0IsQ0FBQTtJQUMvQixxSEFBK0IsQ0FBQTtBQUNuQyxDQUFDLEVBTFcsd0JBQXdCLEtBQXhCLHdCQUF3QixRQUtuQztBQUNELE1BQU0sQ0FBTixJQUFZLHVCQU1YO0FBTkQsV0FBWSx1QkFBdUI7SUFDL0IsNERBQWlDLENBQUE7SUFDakMsOERBQW1DLENBQUE7SUFDbkMsaUVBQXNDLENBQUE7SUFDdEMsNERBQWlDLENBQUE7SUFDakMsNERBQWlDLENBQUE7QUFDckMsQ0FBQyxFQU5XLHVCQUF1QixLQUF2Qix1QkFBdUIsUUFNbEM7QUFDRCxNQUFNLENBQU4sSUFBWSxNQUlYO0FBSkQsV0FBWSxNQUFNO0lBQ2QsdUNBQVUsQ0FBQTtJQUNWLG1DQUFRLENBQUE7SUFDUix5Q0FBVyxDQUFBO0FBQ2YsQ0FBQyxF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d3ZDaUMsaUJBQWlCO1NBQXJDLFdBQVc7O0lBbUVLLDJCQUFpQjs7OztJQUUxQyxvQkFBRSxhQUFDLFNBQXFCLEVBQUUsUUFBZ0M7SUFJcEQsd0JBQU0sYUFDUixLQUFhLEVBQ2IsTUFBcUI7SUFLekIsd0JBQU07SUFJTix3QkFBTSxhQUFDLE9BQXdCO0lBSS9CLHdCQUFNO0lBSU4sdUJBQUs7SUFJTCx5QkFBTztJQUlQLGlDQUFlLGFBQUMsTUFBYztJQUs5Qiw4QkFBWTs7Ozs7O2tCQWoyQ2hCO0VBMnpDNkIsaUJBQWlCO1NBQWpDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIENvcHlyaWdodCAyMDIwLTIwMjMuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5cbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICAgIFBsdWdpbixcbiAgICBDb3Jkb3ZhLFxuICAgIENvcmRvdmFQcm9wZXJ0eSxcbiAgICBJb25pY05hdGl2ZVBsdWdpbixcbn0gZnJvbSBcIkBpb25pYy1uYXRpdmUvY29yZVwiO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIENvbnN0YW50c1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBlbnVtIEFkUGFyYW1FcnJvckNvZGVzIHtcbiAgICBBRF9QQVJBTV9JTk5FUiA9IDAsXG4gICAgQURfUEFSQU1fSU5WQUxJRF9SRVFVRVNUID0gMSxcbiAgICBBRF9QQVJBTV9ORVRXT1JLX0VSUk9SID0gMixcbiAgICBBRF9QQVJBTV9OT19BRCA9IDMsXG4gICAgQURfUEFSQU1fQURfTE9BRElORyA9IDQsXG4gICAgQURfUEFSQU1fTE9XX0FQSSA9IDUsXG4gICAgQURfUEFSQU1fQkFOTkVSX0FEX0VYUElSRSA9IDYsXG4gICAgQURfUEFSQU1fQkFOTkVSX0FEX0NBTkNFTCA9IDcsXG4gICAgQURfUEFSQU1fSE1TX05PVF9TVVBQT1JUX1NFVF9BUFAgPSA4LFxufVxuZXhwb3J0IGVudW0gUmV3YXJkQWRTdGF0dXNFcnJvckNvZGVzIHtcbiAgICBSRVdBUkRfQURfU1RBVFVTX0lOVEVSTkFMID0gMCxcbiAgICBSRVdBUkRfQURfU1RBVFVTX1JFVVNFRCA9IDEsXG4gICAgUkVXQVJEX0FEX1NUQVRVU19OT1RfTE9BREVEID0gMixcbiAgICBSRVdBUkRfQURfU1RBVFVTX0JBQ0tHUk9VTkQgPSAzLFxufVxuZXhwb3J0IGVudW0gQWRDb250ZW50Q2xhc3NpZmljYXRpb24ge1xuICAgIEFEX0NPTlRFTlRfQ0xBU1NJRklDQVRJT05fQSA9IFwiQVwiLFxuICAgIEFEX0NPTlRFTlRfQ0xBU1NJRklDQVRJT05fUEkgPSBcIlBJXCIsXG4gICAgQURfQ09OVEVOVF9DTEFTU0lGSUNBVElPTl9VTktOT1dOID0gXCJcIixcbiAgICBBRF9DT05URU5UX0NMQVNTSUZJQ0FUSU9OX0ogPSBcIkpcIixcbiAgICBBRF9DT05URU5UX0NMQVNTSUZJQ0FUSU9OX1cgPSBcIldcIixcbn1cbmV4cG9ydCBlbnVtIEdlbmRlciB7XG4gICAgRkVNQUxFID0gMixcbiAgICBNQUxFID0gMSxcbiAgICBVTktOT1dOID0gMCxcbn1cbmV4cG9ydCBlbnVtIE5vblBlcnNvbmFsaXplZEFkIHtcbiAgICBBTExPV19BTEwgPSAwLFxuICAgIEFMTE9XX05PTl9QRVJTT05BTElaRUQgPSAxLFxufVxuZXhwb3J0IGVudW0gQ2hpbGRQcm90ZWN0aW9uIHtcbiAgICBUQUdfRk9SX0NISUxEX1BST1RFQ1RJT05fVU5TUEVDSUZJRUQgPSAtMSxcbiAgICBUQUdfRk9SX0NISUxEX1BST1RFQ1RJT05fRkFMU0UgPSAwLFxuICAgIFRBR19GT1JfQ0hJTERfUFJPVEVDVElPTl9UUlVFID0gMSxcbn1cbmV4cG9ydCBlbnVtIFVuZGVyQWdlT2ZQcm9taXNlIHtcbiAgICBQUk9NSVNFX1VOU1BFQ0lGSUVEID0gLTEsXG4gICAgUFJPTUlTRV9GQUxTRSA9IDAsXG4gICAgUFJPTUlTRV9UUlVFID0gMSxcbn1cbmV4cG9ydCBlbnVtIEJhbm5lckFkU2l6ZSB7XG4gICAgQkFOTkVSX1NJWkVfMzYwXzU3ID0gXCJCQU5ORVJfU0laRV8zNjBfNTdcIixcbiAgICBCQU5ORVJfU0laRV8zNjBfMTQ0ID0gXCJCQU5ORVJfU0laRV8zNjBfMTQ0XCIsXG4gICAgQkFOTkVSX1NJWkVfMTYwXzYwMCA9IFwiQkFOTkVSX1NJWkVfMTYwXzYwMFwiLFxuICAgIEJBTk5FUl9TSVpFXzMwMF8yNTAgPSBcIkJBTk5FUl9TSVpFXzMwMF8yNTBcIixcbiAgICBCQU5ORVJfU0laRV8zMjBfMTAwID0gXCJCQU5ORVJfU0laRV8zMjBfMTAwXCIsXG4gICAgQkFOTkVSX1NJWkVfMzIwXzUwID0gXCJCQU5ORVJfU0laRV8zMjBfNTBcIixcbiAgICBCQU5ORVJfU0laRV80NjhfNjAgPSBcIkJBTk5FUl9TSVpFXzQ2OF82MFwiLFxuICAgIEJBTk5FUl9TSVpFXzcyOF85MCA9IFwiQkFOTkVSX1NJWkVfNzI4XzkwXCIsXG4gICAgQkFOTkVSX1NJWkVfRFlOQU1JQyA9IFwiQkFOTkVSX1NJWkVfRFlOQU1JQ1wiLFxuICAgIEJBTk5FUl9TSVpFX0lOVkFMSUQgPSBcIkJBTk5FUl9TSVpFX0lOVkFMSURcIixcbiAgICBCQU5ORVJfU0laRV9TTUFSVCA9IFwiQkFOTkVSX1NJWkVfU01BUlRcIixcbiAgICBCQU5ORVJfU0laRV9BRFZBTkNFRCA9IFwiQkFOTkVSX1NJWkVfQURWQU5DRURcIixcbn1cbmV4cG9ydCBlbnVtIEhNU1NjcmVlbk9yaWVudGF0aW9uIHtcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fTEFORFNDQVBFID0gMCxcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fVU5TUEVDSUZJRUQgPSAtMSxcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fUE9SVFJBSVQgPSAxLFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9VU0VSID0gMixcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fQkVISU5EID0gMyxcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fU0VOU09SID0gNCxcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fTk9TRU5TT1IgPSA1LFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9TRU5TT1JfTEFORFNDQVBFID0gNixcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fU0VOU09SX1BPUlRSQUlUID0gNyxcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fUkVWRVJTRV9MQU5EU0NBUEUgPSA4LFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9SRVZFUlNFX1BPUlRSQUlUID0gOSxcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fRlVMTF9TRU5TT1IgPSAxMCxcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fVVNFUl9MQU5EU0NBUEUgPSAxMSxcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fVVNFUl9QT1JUUkFJVCA9IDEyLFxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9GVUxMX1VTRVIgPSAxMyxcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fTE9DS0VEID0gMTQsXG59XG5leHBvcnQgZW51bSBEZWJ1Z05lZWRDb25zZW50IHtcbiAgICBDT05TRU5UX0RFQlVHX0RJU0FCTEVEID0gMCxcbiAgICBDT05TRU5UX0RFQlVHX05FRURfQ09OU0VOVCA9IDEsXG4gICAgQ09OU0VOVF9ERUJVR19OT1RfTkVFRF9DT05TRU5UID0gMixcbn1cbmV4cG9ydCBlbnVtIENvbnNlbnRTdGF0dXMge1xuICAgIENPTlNFTlRfUEVSU09OQUxJWkVEID0gMCxcbiAgICBDT05TRU5UX05PTl9QRVJTT05BTElaRUQgPSAxLFxuICAgIENPTlNFTlRfVU5LTk9XTiA9IDIsXG59XG5leHBvcnQgZW51bSBBdWRpb0ZvY3VzVHlwZSB7XG4gICAgR0FJTl9BVURJT19GT0NVU19BTEwgPSAwLFxuICAgIE5PVF9HQUlOX0FVRElPX0ZPQ1VTX1dIRU5fTVVURSA9IDEsXG4gICAgTk9UX0dBSU5fQVVESU9fRk9DVVNfQUxMID0gMixcbn1cbmV4cG9ydCBlbnVtIE1lZGlhQXNwZWN0IHtcbiAgICBBU1BFQ1RfQU5ZID0gMSxcbiAgICBBU1BFQ1RfQ1VTVE9NX1NJWkUgPSAtMSxcbiAgICBBU1BFQ1RfTEFORFNDQVBFID0gMixcbiAgICBBU1BFQ1RfUE9SVFJBSVQgPSAzLFxuICAgIEFTUEVDVF9TUVVBUkUgPSA0LFxuICAgIEFTUEVDVF9VTktOT1dOID0gMCxcbn1cbmV4cG9ydCBlbnVtIENob2ljZXNQb3NpdGlvbiB7XG4gICAgQk9UVE9NX0xFRlQgPSAzLFxuICAgIEJPVFRPTV9SSUdIVCA9IDIsXG4gICAgSU5WSVNJQkxFID0gNCxcbiAgICBUT1BfTEVGVCA9IDAsXG4gICAgVE9QX1JJR0hUID0gMSxcbn1cbmV4cG9ydCBlbnVtIE1lZGlhRGlyZWN0aW9uIHtcbiAgICBBTlkgPSAwLFxuICAgIExBTkRTQ0FQRSA9IDIsXG4gICAgUE9SVFJBSVQgPSAxLFxufVxuZXhwb3J0IGVudW0gTmF0aXZlQWRUZW1wbGF0ZSB7XG4gICAgTkFUSVZFX0FEX1NNQUxMX1RFTVBMQVRFID0gXCJOQVRJVkVfQURfU01BTExfVEVNUExBVEVcIixcbiAgICBOQVRJVkVfQURfRlVMTF9URU1QTEFURSA9IFwiTkFUSVZFX0FEX0ZVTExfVEVNUExBVEVcIixcbiAgICBOQVRJVkVfQURfQkFOTkVSX1RFTVBMQVRFID0gXCJOQVRJVkVfQURfQkFOTkVSX1RFTVBMQVRFXCIsXG4gICAgTkFUSVZFX0FEX1ZJREVPX1RFTVBMQVRFID0gXCJOQVRJVkVfQURfVklERU9fVEVNUExBVEVcIixcbiAgICBOQVRJVkVfQURfV0lUSF9BUFBfRE9XTkxPQURfQlROX1RFTVBMQVRFID0gXCJOQVRJVkVfQURfV0lUSF9BUFBfRE9XTkxPQURfQlROX1RFTVBMQVRFXCJcbn1cbmV4cG9ydCBlbnVtIENvbG9yIHtcbiAgICBSRUQgPSBcIlJFRFwiLFxuICAgIERLR1JBWSA9IFwiREtHUkFZXCIsXG4gICAgR1JBWSA9IFwiR1JBWVwiLFxuICAgIFdISVRFID0gXCJXSElURVwiLFxuICAgIEJMVUUgPSBcIkJMVUVcIixcbiAgICBCTEFDSyA9IFwiQkxBQ0tcIixcbiAgICBMVEdSQVkgPSBcIkxUR1JBWVwiLFxuICAgIE1BR0VOVEEgPSBcIk1BR0VOVEFcIixcbiAgICBZRUxMT1cgPSBcIllFTExPV1wiLFxuICAgIENZQU4gPSBcIkNZQU5cIixcbiAgICBHUkVFTiA9IFwiR1JFRU5cIixcbiAgICBUUkFOU1BBUkVOVCA9IFwiVFJBTlNQQVJFTlRcIixcbn1cbmV4cG9ydCBlbnVtIEluc3RhbGxSZWZlcnJlclJlc3BvbnNlcyB7XG4gICAgU0VSVklDRV9ESVNDT05ORUNURUQgPSAtMSxcbiAgICBERVZFTE9QRVJfRVJST1IgPSAzLFxuICAgIFNFUlZJQ0VfVU5BVkFJTEFCTEUgPSAxLFxuICAgIE9LID0gMCxcbiAgICBGRUFUVVJFX05PVF9TVVBQT1JURUQgPSAyLFxufVxuZXhwb3J0IGVudW0gQW5jaG9yIHtcbiAgICBUT1AgPSBcInRvcFwiLFxuICAgIEJPVFRPTSA9IFwiYm90dG9tXCIsXG4gICAgSU5WSVNJQkxFID0gXCJpbnZpc2libGVcIixcbn1cbmV4cG9ydCBlbnVtIEJhbm5lckFkRXZlbnRzIHtcbiAgICBCQU5ORVJfQURfQ0xPU0VEID0gXCJiYW5uZXJfYWRfY2xvc2VkXCIsXG4gICAgQkFOTkVSX0FEX0ZBSUxFRCA9IFwiYmFubmVyX2FkX2ZhaWxlZFwiLFxuICAgIEJBTk5FUl9BRF9MRUFWRSA9IFwiYmFubmVyX2FkX2xlYXZlXCIsXG4gICAgQkFOTkVSX0FEX09QRU5FRCA9IFwiYmFubmVyX2FkX29wZW5lZFwiLFxuICAgIEJBTk5FUl9BRF9MT0FERUQgPSBcImJhbm5lcl9hZF9sb2FkZWRcIixcbiAgICBCQU5ORVJfQURfQ0xJQ0tFRCA9IFwiYmFubmVyX2FkX2NsaWNrZWRcIixcbiAgICBCQU5ORVJfQURfSU1QUkVTU0lPTiA9IFwiYmFubmVyX2FkX2ltcHJlc3Npb25cIixcbn1cbmV4cG9ydCBlbnVtIEludGVyc3RpdGlhbEFkRXZlbnRzIHtcbiAgICBJTlRFUlNUSVRJQUxfQURfQ0xPU0VEID0gXCJpbnRlcnN0aXRpYWxfYWRfY2xvc2VkXCIsXG4gICAgSU5URVJTVElUSUFMX0FEX0ZBSUxFRCA9IFwiaW50ZXJzdGl0aWFsX2FkX2ZhaWxlZFwiLFxuICAgIElOVEVSU1RJVElBTF9BRF9MRUFWRSA9IFwiaW50ZXJzdGl0aWFsX2FkX2xlYXZlXCIsXG4gICAgSU5URVJTVElUSUFMX0FEX09QRU5FRCA9IFwiaW50ZXJzdGl0aWFsX2FkX29wZW5lZFwiLFxuICAgIElOVEVSU1RJVElBTF9BRF9MT0FERUQgPSBcImludGVyc3RpdGlhbF9hZF9sb2FkZWRcIixcbiAgICBJTlRFUlNUSVRJQUxfQURfQ0xJQ0tFRCA9IFwiaW50ZXJzdGl0aWFsX2FkX2NsaWNrZWRcIixcbiAgICBJTlRFUlNUSVRJQUxfQURfSU1QUkVTU0lPTiA9IFwiaW50ZXJzdGl0aWFsX2FkX2ltcHJlc3Npb25cIixcbiAgICBJTlRFUlNUSVRJQUxfQURfUkVXQVJERUQgPSBcImludGVyc3RpdGlhbF9hZF9yZXdhcmRlZFwiLFxuICAgIElOVEVSU1RJVElBTF9SRVdBUkRfQURfQ0xPU0VEID0gXCJpbnRlcnN0aXRpYWxfcmV3YXJkX2FkX2Nsb3NlZFwiLFxuICAgIElOVEVSU1RJVElBTF9SRVdBUkRfQURfRkFJTEVEX1RPX0xPQUQgPSBcImludGVyc3RpdGlhbF9yZXdhcmRfYWRfZmFpbGVkX3RvX2xvYWRcIixcbiAgICBJTlRFUlNUSVRJQUxfUkVXQVJEX0FEX0xFRlRfQVBQID0gXCJpbnRlcnN0aXRpYWxfcmV3YXJkX2FkX2xlZnRfYXBwXCIsXG4gICAgSU5URVJTVElUSUFMX1JFV0FSRF9BRF9MT0FERUQgPSBcImludGVyc3RpdGlhbF9yZXdhcmRfYWRfbG9hZGVkXCIsXG4gICAgSU5URVJTVElUSUFMX1JFV0FSRF9BRF9PUEVORUQgPSBcImludGVyc3RpdGlhbF9yZXdhcmRfYWRfb3BlbmVkXCIsXG4gICAgSU5URVJTVElUSUFMX1JFV0FSRF9BRF9DT01QTEVURUQgPSBcImludGVyc3RpdGlhbF9yZXdhcmRfYWRfY29tcGxldGVkXCIsXG4gICAgSU5URVJTVElUSUFMX1JFV0FSRF9BRF9TVEFSVEVEID0gXCJpbnRlcnN0aXRpYWxfcmV3YXJkX2FkX3N0YXJ0ZWRcIixcbn1cbmV4cG9ydCBlbnVtIFNwbGFzaEFkRXZlbnRzIHtcbiAgICBTUExBU0hfQURfRkFJTEVEX1RPX0xPQUQgPSBcInNwbGFzaF9hZF9mYWlsZWRfdG9fbG9hZFwiLFxuICAgIFNQTEFTSF9BRF9MT0FERUQgPSBcInNwbGFzaF9hZF9sb2FkZWRcIixcbiAgICBTUExBU0hfQURfRElTTUlTU0VEID0gXCJzcGxhc2hfYWRfZGlzbWlzc2VkXCIsXG4gICAgU1BMQVNIX0FEX1NIT1dFRCA9IFwic3BsYXNoX2FkX3Nob3dlZFwiLFxuICAgIFNQTEFTSF9BRF9DTElDSyA9IFwic3BsYXNoX2FkX2NsaWNrXCIsXG59XG5leHBvcnQgZW51bSBSb2xsQWRFdmVudHMge1xuICAgIFJPTExfQURfTE9BRF9GQUlMRUQgPSBcInJvbGxfYWRfbG9hZF9mYWlsZWRcIixcbiAgICBST0xMX0FEX0xPQURFRCA9IFwicm9sbF9hZF9sb2FkZWRcIixcbiAgICBST0xMX0FEX01FRElBX0NIQU5HRUQgPSBcInJvbGxfYWRfbWVkaWFfY2hhbmdlZFwiLFxuICAgIFJPTExfQURfQ0xJQ0tFRCA9IFwicm9sbF9hZF9jbGlja2VkXCIsXG4gICAgUk9MTF9BRF9NRURJQV9QUk9HUkVTUyA9IFwicm9sbF9hZF9tZWRpYV9wcm9ncmVzc1wiLFxuICAgIFJPTExfQURfTUVESUFfU1RBUlQgPSBcInJvbGxfYWRfbWVkaWFfc3RhcnRcIixcbiAgICBST0xMX0FEX01FRElBX1BBVVNFID0gXCJyb2xsX2FkX21lZGlhX3BhdXNlXCIsXG4gICAgUk9MTF9BRF9NRURJQV9TVE9QID0gXCJyb2xsX2FkX21lZGlhX3N0b3BcIixcbiAgICBST0xMX0FEX01FRElBX0NPTVBMRVRJT04gPSBcInJvbGxfYWRfbWVkaWFfY29tcGxldGlvblwiLFxuICAgIFJPTExfQURfTUVESUFfRVJST1IgPSBcInJvbGxfYWRfbWVkaWFfZXJyb3JcIixcbiAgICBST0xMX0FEX01FRElBX1VOTVVURSA9IFwicm9sbF9hZF9tZWRpYV91bm11dGVcIixcbiAgICBST0xMX0FEX01FRElBX01VVEUgPSBcInJvbGxfYWRfbWVkaWFfbXV0ZVwiLFxuICAgIFJPTExfQURfV0hZX1RISVNfQUQgPSBcInJvbGxfYWRfd2h5X3RoaXNfYWRcIixcbn1cbmV4cG9ydCBlbnVtIFJld2FyZEFkRXZlbnRzIHtcbiAgICBSRVdBUkRfTUVUQURBVEFfQ0hBTkdFRCA9IFwicmV3YXJkX21ldGFkYXRhX2NoYW5nZWRcIixcbiAgICBSRVdBUkRfQURfRkFJTEVEX1RPX0xPQURfTE9BRCA9IFwicmV3YXJkX2FkX2ZhaWxlZF90b19sb2FkX2xvYWRcIixcbiAgICBSRVdBUkRFRF9MT0FERUQgPSBcInJld2FyZGVkX2xvYWRlZFwiLFxuICAgIFJFV0FSREVEX1NUQVRVUyA9IFwicmV3YXJkZWRfc3RhdHVzXCIsXG4gICAgUkVXQVJEX0FEX0NMT1NFRF9TVEFUVVMgPSBcInJld2FyZF9hZF9jbG9zZWRfc3RhdHVzXCIsXG4gICAgUkVXQVJEX0FEX09QRU5FRF9TVEFUVVMgPSBcInJld2FyZF9hZF9vcGVuZWRfc3RhdHVzXCIsXG4gICAgUkVXQVJEX0FEX0ZBSUxFRF9UT19TSE9XID0gXCJyZXdhcmRfYWRfZmFpbGVkX3RvX3Nob3dcIixcbiAgICBSRVdBUkRFRCA9IFwicmV3YXJkZWRcIixcbiAgICBSRVdBUkRfQURfQ0xPU0VEID0gXCJyZXdhcmRfYWRfY2xvc2VkXCIsXG4gICAgUkVXQVJEX0FEX0ZBSUxFRF9UT19MT0FEID0gXCJyZXdhcmRfYWRfZmFpbGVkX3RvX2xvYWRcIixcbiAgICBSRVdBUkRfQURfTE9BREVEID0gXCJyZXdhcmRfYWRfbG9hZGVkXCIsXG4gICAgUkVXQVJEX0FEX09QRU5FRCA9IFwicmV3YXJkX2FkX29wZW5lZFwiLFxufVxuXG5leHBvcnQgZW51bSBEZXRhaWxlZENyZWF0aXZlVHlwZSB7XG4gIEJJR19JTUcgPSA5MDEsXG4gIFZJREVPID0gOTAzLFxuICBUSFJFRV9JTUcgPSA5MDQsXG4gIFNNQUxMX0lNRyA9IDkwNSxcbiAgU0lOR0xFX0lNRyA9IDkwOSxcbiAgU0hPUlRfVEVYVCA9IDkxMyxcbiAgTE9OR19URVhUID0gOTE0XG59XG5cbmV4cG9ydCBlbnVtIE5hdGl2ZUFkRXZlbnRzIHtcbiAgICBOQVRJVkVfQURfRElTTElLRUQgPSBcIm5hdGl2ZV9hZF9kaXNsaWtlZFwiLFxuICAgIE5BVElWRV9BRF9MT0FERURfTE9BRCA9IFwibmF0aXZlX2FkX2xvYWRlZF9sb2FkXCIsXG4gICAgTkFUSVZFX0FEX0NMT1NFRCA9IFwibmF0aXZlX2FkX2Nsb3NlZFwiLFxuICAgIE5BVElWRV9BRF9GQUlMRUQgPSBcIm5hdGl2ZV9hZF9mYWlsZWRcIixcbiAgICBOQVRJVkVfQURfTEVBVkUgPSBcIm5hdGl2ZV9hZF9sZWF2ZVwiLFxuICAgIE5BVElWRV9BRF9PUEVORUQgPSBcIm5hdGl2ZV9hZF9vcGVuZWRcIixcbiAgICBOQVRJVkVfQURfTE9BREVEID0gXCJuYXRpdmVfYWRfbG9hZGVkXCIsXG4gICAgTkFUSVZFX0FEX0NMSUNLRUQgPSBcIm5hdGl2ZV9hZF9jbGlja2VkXCIsXG4gICAgTkFUSVZFX0FEX0lNUFJFU1NJT04gPSBcIm5hdGl2ZV9hZF9pbXByZXNzaW9uXCIsXG4gICAgVklERU9fT1BFUkFUT1JfVklERU9fU1RBUlQgPSBcInZpZGVvX29wZXJhdG9yX3ZpZGVvX3N0YXJ0XCIsXG4gICAgVklERU9fT1BFUkFUT1JfVklERU9fUExBWSA9IFwidmlkZW9fb3BlcmF0b3JfdmlkZW9fcGxheVwiLFxuICAgIFZJREVPX09QRVJBVE9SX1ZJREVPX1BBVVNFID0gXCJ2aWRlb19vcGVyYXRvcl92aWRlb19wYXVzZVwiLFxuICAgIFZJREVPX09QRVJBVE9SX1ZJREVPX0VORCA9IFwidmlkZW9fb3BlcmF0b3JfdmlkZW9fZW5kXCIsXG4gICAgVklERU9fT1BFUkFUT1JfVklERU9fTVVURSA9IFwidmlkZW9fb3BlcmF0b3JfdmlkZW9fbXV0ZVwiLFxuICAgIEFQUF9ET1dOTE9BRF9TVEFUVVNfQ0hBTkdFRCA9J2FwcF9kb3dubG9hZF9zdGF0dXNfY2hhbmdlZCcsXG4gICAgQVBQX0RPV05MT0FEX05PTl9XSUZJX0RPV05MT0FEID0gJ2FwcF9kb3dubG9hZF9ub25fd2lmaV9kb3dubG9hZCdcbn1cblxuZXhwb3J0IGVudW0gVmFzdEV2ZW50cyB7XG4gICAgVkFTVF9MT0FEX1NVQ0NFU1MgPSAndmFzdF9sb2FkX3N1Y2Nlc3MnLFxuICAgIFZBU1RfTE9BRF9GQUlMRUQgPSAndmFzdF9sb2FkX2ZhaWxlZCcsXG4gICAgVkFTVF9QTEFZX1NUQVRFX0NIQU5HRUQgPSAndmFzdF9wbGF5X3N0YXRlX2NoYW5nZWQnLFxuICAgIFZBU1RfVk9MVU1FX0NIQU5HRUQgPSAndmFzdF92b2x1bWVfY2hhbmdlZCcsXG4gICAgVkFTVF9TQ1JFRU5fVklFV19DSEFOR0VEID0gJ3Zhc3Rfc2NyZWVuX3ZpZXdfY2hhbmdlZCcsXG4gICAgVkFTVF9QUk9HUkVTU19DSEFOR0VEID0gJ3Zhc3RfcHJvZ3Jlc3NfY2hhbmdlZCcsXG4gICAgVkFTVF9PTl9TVUNDRVNTID0gJ3Zhc3Rfb25fc3VjY2VzcycsXG4gICAgVkFTVF9PTl9GQUlMRUQgPSAndmFzdF9vbl9mYWlsZWQnLFxuICAgIFZBU1RfQURfUkVBRFkgPSAndmFzdF9hZF9yZWFkeScsXG4gICAgVkFTVF9BRF9GSU5JU0ggPSAndmFzdF9hZF9maW5pc2gnLFxuICAgIFZBU1RfQlVGRkVSX1NUQVJUPSAndmFzdF9idWZmZXJfc3RhcnQnLFxuICAgIFZBU1RfQlVGRkVSX0VORD0gJ3Zhc3RfYnVmZmVyX2VuZCcsXG59XG5cbmV4cG9ydCBlbnVtIEFjdGl2YXRlU3R5bGUgeyBcdFxuICAgIEJPVFRPTV9CQU5ORVIgPSAxLFxuICAgIENPTkZJUk1fRElBTE9HID0gMlxufVxuZXhwb3J0IGVudW0gQ3JlYXRpdmVNYXRjaFR5cGUge1xuICAgIEVYQUNUID0gMCxcbiAgICBTTUFSVD0gMSxcbiAgICBVTktOT1dOID0gMixcbiAgICBBTlkgPSAzLFxuICAgIExBTkRTQ0FQRSA9IDQsXG4gICAgUE9SVFJBSVQgPSA1LFxuICAgIFNRVUFSRSA9IDZcbiAgXG59XG5leHBvcnQgZW51bSBBcHBEb3dubG9hZFN0YXR1cyB7XG4gICAgRE9XTkxPQUQgPSBcIkRPV05MT0FEXCIsXG4gICAgV0FJVElOR19GT1JfV0lGSSA9IFwiV0FJVElOR19GT1JfV0lGSVwiLFxuICAgIFdBSVRJTkcgPSBcIldBSVRJTkdcIixcbiAgICBET1dOTE9BRElORyA9IFwiRE9XTkxPQURJTkdcIixcbiAgICBQQVVTRSA9IFwiUEFVU0VcIixcbiAgICBSRVNVTUUgPSBcIlJFU1VNRVwiLFxuICAgIERPV05MT0FERUQgPSBcIkRPV05MT0FERURcIixcbiAgICBET1dOTE9BREZBSUxFRCA9IFwiRE9XTkxPQURGQUlMRURcIixcbiAgICBJTlNUQUxMSU5HID0gXCJJTlNUQUxMSU5HXCIsXG4gICAgSU5TVEFMTCA9IFwiSU5TVEFMTFwiLFxuICAgIElOU1RBTExFRCA9IFwiSU5TVEFMTEVEXCJcbiAgfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gSW50ZXJmYWNlc1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0Qm91bmRzIHtcbiAgICBtYXJnaW5MZWZ0PzogbnVtYmVyO1xuICAgIG1hcmdpblJpZ2h0PzogbnVtYmVyO1xuICAgIG1hcmdpblRvcD86IG51bWJlcjtcbiAgICBtYXJnaW5Cb3R0b20/OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgbWFyZ2luTGVmdD86IG51bWJlcjtcbiAgICBtYXJnaW5SaWdodD86IG51bWJlcjtcbiAgICBtYXJnaW5Ub3A/OiBudW1iZXI7XG4gICAgbWFyZ2luQm90dG9tPzogbnVtYmVyO1xuICAgIHBhZ2VYT2Zmc2V0PzogbnVtYmVyO1xuICAgIHBhZ2VZT2Zmc2V0PzogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBBZFBhcmFtIHtcbiAgICBnZW5kZXI/OiBHZW5kZXI7XG4gICAgYWRDb250ZW50Q2xhc3NpZmljYXRpb24/OiBBZENvbnRlbnRDbGFzc2lmaWNhdGlvbjtcbiAgICB0YWdGb3JVbmRlckFnZU9mUHJvbWlzZT86IFVuZGVyQWdlT2ZQcm9taXNlO1xuICAgIHRhZ0ZvckNoaWxkUHJvdGVjdGlvbj86IENoaWxkUHJvdGVjdGlvbjtcbiAgICBub25QZXJzb25hbGl6ZWRBZD86IE5vblBlcnNvbmFsaXplZEFkO1xuICAgIGFwcENvdW50cnk/OiBzdHJpbmc7XG4gICAgYXBwTGFuZz86IHN0cmluZztcbiAgICBjb3VudHJ5Q29kZT86IHN0cmluZztcbiAgICBiZWxvbmdDb3VudHJ5Q29kZT86IHN0cmluZztcbiAgICBjb25zZW50Pzogc3RyaW5nO1xuICAgIHJlcXVlc3RMb2NhdGlvbj86IGJvb2xlYW47XG4gICAgZGV0YWlsZWRDcmVhdGl2ZVR5cGU/OiBEZXRhaWxlZENyZWF0aXZlVHlwZVtdO1xuICAgIGxvY2F0aW9uPyA6TG9jYXRpb24sXG4gICAgY29udGVudEJ1bmRsZT8gOiBDb250ZW50QnVuZGxlLFxufVxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvbiB7XG4gICAgbGF0OiBudW1iZXIsXG4gICAgbG5nOiBudW1iZXJcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29udGVudEJ1bmRsZXtcbiAgICBjaGFubmVsQ2F0ZWdvcnlDb2RlPzogc3RyaW5nLFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIHRhZ3M/OiBzdHJpbmcsXG4gICAgcmVsYXRlZFBlb3BsZT86IHN0cmluZyxcbiAgICBjb250ZW50Pzogc3RyaW5nLFxuICAgIGNvbnRlbnRJRD86IG51bWJlcixcbiAgICBjYXRlZ29yeT86IHN0cmluZyxcbiAgICBzdWJjYXRlZ29yeT86IHN0cmluZyxcbiAgICB0aGlyZENhdGVnb3J5Pzogc3RyaW5nXG59XG5leHBvcnQgaW50ZXJmYWNlIEhNU1JlcXVlc3RPcHRpb25zIHtcbiAgICBhZENvbnRlbnRDbGFzc2lmaWNhdGlvbj86IEFkQ29udGVudENsYXNzaWZpY2F0aW9uO1xuICAgIGFwcExhbmc/OiBzdHJpbmc7XG4gICAgYXBwQ291bnRyeT86IHN0cmluZztcbiAgICB0YWdGb3JDaGlsZFByb3RlY3Rpb24/OiBDaGlsZFByb3RlY3Rpb247XG4gICAgdGFnRm9yVW5kZXJBZ2VPZlByb21pc2U/OiBVbmRlckFnZU9mUHJvbWlzZTtcbiAgICBub25QZXJzb25hbGl6ZWRBZD86IE5vblBlcnNvbmFsaXplZEFkO1xuICAgIGNvbnNlbnQ/OiBzdHJpbmc7XG4gICAgcmVxdWVzdExvY2F0aW9uPzogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSE1TUmV3YXJkIHtcbiAgICByZXdhcmRBbW91bnQ6IG51bWJlcjtcbiAgICByZXdhcmROYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEhNU1Jld2FyZFZlcmlmeUNvbmZpZyB7XG4gICAgZGF0YTogc3RyaW5nO1xuICAgIHVzZXJJZDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBPYWlkUmVzdWx0IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGlzTGltaXRBZFRyYWNpbmdFbmFibGVkOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBEdXJhdGlvbiB7XG4gICAgZHVyYXRpb246IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUm9sbEFkTG9hZGVyUGFyYW1zIHtcbiAgICBhZElkOiBzdHJpbmc7XG4gICAgdG90YWxEdXJhdGlvbjogbnVtYmVyO1xuICAgIG1heENvdW50OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFZpZGVvQ29uZmlndXJhdGlvbiB7XG4gICAgYXVkaW9Gb2N1c1R5cGU/OiBBdWRpb0ZvY3VzVHlwZTtcbiAgICBjbGlja1RvRnVsbFNjcmVlblJlcXVlc3Q/OiBib29sZWFuO1xuICAgIGN1c3RvbWl6ZU9wZXJhdGVSZXF1ZXN0ZWQ/OiBib29sZWFuO1xuICAgIGlzU3RhcnRNdXRlZD86IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIE5hdGl2ZUFkQ29uZmlndXJhdGlvbiB7XG4gICAgYWRTaXplOiBBZFNpemU7XG4gICAgY2hvaWNlc1Bvc2l0aW9uPzogQ2hvaWNlc1Bvc2l0aW9uO1xuICAgIG1lZGlhQXNwZWN0PzogTWVkaWFBc3BlY3Q7XG4gICAgbWVkaWFEaXJlY3Rpb24/OiBNZWRpYURpcmVjdGlvbjtcbiAgICByZXR1cm5VcmxzRm9ySW1hZ2VzPzogYm9vbGVhbjtcbiAgICByZXF1ZXN0Q3VzdG9tRGlzbGlrZVRoaXNBZD86IGJvb2xlYW47XG4gICAgcmVxdWVzdE11bHRpSW1hZ2VzPzogYm9vbGVhbjtcbiAgICB2aWRlb0NvbmZpZ3VyYXRpb24/OiBWaWRlb0NvbmZpZ3VyYXRpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlkZW9PcGVyYXRvckFzcGVjdFJhdGlvIHtcbiAgICB2aWRlb09wZXJhdG9yR2V0QXNwZWN0UmF0aW86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXRpdmVBZExvYWRPcHRpb25zIHtcbiAgICBhZElkPzogc3RyaW5nO1xuICAgIGFkPzogQWRQYXJhbTtcbiAgICBuYXRpdmVBZE9wdGlvbnM/OiBOYXRpdmVBZENvbmZpZ3VyYXRpb247XG59XG5leHBvcnQgaW50ZXJmYWNlIEFkU2l6ZSB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmF0aXZlQWRPcHRpb25zIHtcbiAgICBkaXY6IHN0cmluZztcbiAgICB0ZW1wbGF0ZT86IE5hdGl2ZUFkVGVtcGxhdGU7XG4gICAgYmc/OiBDb2xvcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUm9sbEFkTG9hZE9wdGlvbnMge1xuICAgIGZpbGU/OiBzdHJpbmc7XG4gICAgYWRQYXJhbT86IEFkUGFyYW07XG59XG5leHBvcnQgaW50ZXJmYWNlIFJlZmVycmVyRGV0YWlscyB7XG4gICAgcmVzcG9uc2VDb2RlPzogSW5zdGFsbFJlZmVycmVyUmVzcG9uc2VzO1xuICAgIGluc3RhbGxSZWZlcnJlcj86IHN0cmluZztcbiAgICByZWZlcnJlckNsaWNrVGltZXN0YW1wPzogbnVtYmVyO1xuICAgIGluc3RhbGxCZWdpblRpbWVzdGFtcD86IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc2VudFVwZGF0ZVJlc3VsdCB7XG4gICAgY29uc2VudFN0YXR1cz86IENvbnNlbnRTdGF0dXM7XG4gICAgaXNOZWVkQ29uc2VudD86IGJvb2xlYW47XG4gICAgYWRQcm92aWRlcnM/OiBBZFByb3ZpZGVyW107XG59XG5leHBvcnQgaW50ZXJmYWNlIEFkUHJvdmlkZXIge1xuICAgIGlkPzogc3RyaW5nO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgcHJpdmFjeVBvbGljeVVybD86IHN0cmluZztcbiAgICBzZXJ2aWNlQXJlYT86IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3BsYXNoQWRMb2FkT3B0aW9ucyB7XG4gICAgYWRJZDogc3RyaW5nO1xuICAgIG9yaWVudGF0aW9uPzogSE1TU2NyZWVuT3JpZW50YXRpb247XG4gICAgYWRQYXJhbT86IEFkUGFyYW07XG4gICAgbG9nb0FuY2hvcj86IEFuY2hvcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVmFzdExvYWRPcHRpb25zIHtcbiAgICBhZFBhcmFtPzogVmFzdENvbmZpZ3VyYXRpb24sXG4gICAgcGxheWVyQ29uZmlnPzogUGxheWVyQ29uZmlnLFxuICAgIGlzVGVzdEFkPzogYm9vbGVhbixcbiAgICBpc0FkTG9hZFdpdGhBZHNEYXRhPzogYm9vbGVhbixcbiAgICBpc0N1c3RvbVZpZGVvUGxheWVyPzogYm9vbGVhblxufVxuZXhwb3J0IGludGVyZmFjZSBWYXN0Q29uZmlndXJhdGlvbiB7XG4gICAgYWRJZD86IHN0cmluZyxcbiAgICB0b3RhbER1cmF0aW9uPzogbnVtYmVyLFxuICAgIGNyZWF0aXZlTWF0Y2hTdHJhdGVneT86IENyZWF0aXZlTWF0Y2hUeXBlLFxuICAgIGFsbG93TW9iaWxlVHJhZmZpYz86IGJvb2xlYW4sXG4gICAgYWRPcmllbnRhdGlvbj86TWVkaWFEaXJlY3Rpb24sXG4gICAgbWF4QWRQb2RzPzogbnVtYmVyLFxuICAgIHJlcXVlc3RPcHRpb24/OiBITVNSZXF1ZXN0T3B0aW9uc1xufVxuZXhwb3J0IGludGVyZmFjZSBQbGF5ZXJDb25maWcge1xuICAgIGlzRW5hYmxlQ3V0b3V0PzogYm9vbGVhbixcbiAgICBpc0VuYWJsZVBvcnRyYWl0PzogYm9vbGVhbixcbiAgICBpc0VuYWJsZVJvdGF0aW9uPzogYm9vbGVhbixcbiAgICBpc1NraXBMaW5lYXJBZD86IGJvb2xlYW4sXG4gICAgaXNGb3JjZU11dGU/OmJvb2xlYW4sXG4gICAgaXNJbmR1c3RyeUljb25TaG93Pzpib29sZWFuXG59XG5leHBvcnQgaW50ZXJmYWNlIFZhc3RTZGtDb25maWd1cmF0aW9ue1xuICAgIGh0dHBDYWxsVGltZW91dE1zOm51bWJlcixcbiAgICBodHRwQ29ubmVjdFRpbWVvdXRNczpudW1iZXIsXG4gICAgaHR0cEtlZXBBbGl2ZUR1cmF0aW9uTXM6bnVtYmVyLFxuICAgIGh0dHBSZWFkVGltZW91dE1zOm51bWJlcixcbiAgICBtYXhIdHRwQ29ubmVjdGlvbnM6bnVtYmVyLFxuICAgIG1heFJlZGlyZWN0V3JhcHBlckxpbWl0Om51bWJlcixcbiAgICBpc1Rlc3Q6Ym9vbGVhbixcbiAgICB2YXN0RXZlbnRSZXRyeUJhdGNoU2l6ZTpudW1iZXIsXG4gICAgdmFzdEV2ZW50UmV0cnlJbnRlcnZhbFNlY29uZHM6bnVtYmVyLFxuICAgIHZhc3RFdmVudFJldHJ5VXBsb2FkVGltZXM6bnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWR2ZXJ0aXNlckluZm97XG4gICAgc2VxOm51bWJlcixcbiAgICBrZXk6c3RyaW5nLFxuICAgIHZhbHVlOnN0cmluZ1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gTW9kdWxlc1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6IFwiSE1TQWRzXCIsXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1hZHNcIixcbiAgICBwbHVnaW5SZWY6IFwiSE1TQWRzXCIsXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNBZHMgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpIEhNU0ludGVyc3RpdGlhbEFkID0gSE1TSW50ZXJzdGl0aWFsQWQ7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpIEhNU0Jhbm5lckFkID0gSE1TQmFubmVyQWQ7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpIEhNU1NwbGFzaEFkID0gSE1TU3BsYXNoQWQ7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpIEhNU1Jld2FyZEFkID0gSE1TUmV3YXJkQWQ7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpIEhNU05hdGl2ZUFkID0gSE1TTmF0aXZlQWQ7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpIEhNU1JvbGxBZCA9IEhNU1JvbGxBZDtcbiAgICBAQ29yZG92YVByb3BlcnR5KCkgSE1TVmFzdCA9IEhNU1Zhc3Q7XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIG9uKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0U0RLVmVyc2lvbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0UmVxdWVzdE9wdGlvbnMoKTogUHJvbWlzZTxITVNSZXF1ZXN0T3B0aW9ucz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0UmVxdWVzdE9wdGlvbnMocmVxdWVzdE9wdGlvbnM6IEhNU1JlcXVlc3RPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRDb25zZW50KGNvbnNlbnQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0QXBwQWN0aXZhdGVTdHlsZSgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QXBwQWN0aXZhdGVTdHlsZShzdHlsZTpudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEFwcEluc3RhbGxlZE5vdGlmeShzdGF0dXM6Ym9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNBcHBJbnN0YWxsZWROb3RpZnkoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGRpc2FibGVMb2dnZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGFkZFRlc3REZXZpY2VJZCh0ZXN0RGV2aWNlSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0VGVzdERldmljZUlkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRVbmRlckFnZU9mUHJvbWlzZSh1bmRlckFnZU9mUHJvbWlzZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0Q29uc2VudFN0YXR1cyhjb25zZW50U3RhdHVzOiBDb25zZW50U3RhdHVzKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXREZWJ1Z05lZWRDb25zZW50KGRlYnVnTmVlZENvbnNlbnQ6IERlYnVnTmVlZENvbnNlbnQpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcmVxdWVzdENvbnNlbnRVcGRhdGUoKTogUHJvbWlzZTxDb25zZW50VXBkYXRlUmVzdWx0PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICB2ZXJpZnlBZElkKGFkSWQ6IHN0cmluZywgaXNMaW1pdEFkVHJhY2tpbmc6IGJvb2xlYW4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEFkdmVydGlzaW5nSWRJbmZvKCk6IFByb21pc2U8T2FpZFJlc3VsdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcmVmZXJyZXJDbGllbnRTdGFydENvbm5lY3Rpb24oaXNUZXN0PzogYm9vbGVhbik6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZWZlcnJlckNsaWVudEVuZENvbm5lY3Rpb24oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZWZlcnJlckNsaWVudElzUmVhZHkoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRJbnN0YWxsUmVmZXJyZXIoaW5zdGFsbENoYW5uZWw/OnN0cmluZyk6IFByb21pc2U8UmVmZXJyZXJEZXRhaWxzPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpbml0VmFzdCh2YXN0U2RrQ29uZmlndXJhdGlvbjpWYXN0U2RrQ29uZmlndXJhdGlvbik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0VmFzdFNka0NvbmZpZ3VyYXRpb24oKTogUHJvbWlzZTxWYXN0U2RrQ29uZmlndXJhdGlvbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgdXBkYXRlU2RrU2VydmVyQ29uZmlnKHNsb3RJZDpzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHVzZXJBY2NlcHRBZExpY2Vuc2UoaXNBY2NlcHRMaWNlbnNlOmJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEV2ZW50UHJvY2Vzc29yKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0Fkc1wiLFxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzXCIsXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkcy5ITVNCYW5uZXJBZFwiLFxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TQmFubmVyQWQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBvbihldmVudE5hbWU6IEJhbm5lckFkRXZlbnRzLCBjYWxsYmFjazogKHJlc3VsdD86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgYXN5bmMgY3JlYXRlKGRpdklkOiBzdHJpbmcsIGJvdW5kcz86IExheW91dEJvdW5kcyk6IFByb21pc2U8SE1TQmFubmVyQWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNjcm9sbCgpOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEFkSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEFkSWQoYWRJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRCYW5uZXJBZFNpemUoKTogUHJvbWlzZTxBZFNpemU+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEJhbm5lckFkU2l6ZShiYW5uZXJBZFNpemU6IEJhbm5lckFkU2l6ZSB8IEFkU2l6ZSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QmFja2dyb3VuZENvbG9yKGJnQ29sb3I6IENvbG9yKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRCYW5uZXJSZWZyZXNoKGJhbm5lclJlZnJlc2g6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QWRMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzTG9hZGluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGxvYWRBZChhZFBhcmFtPzogQWRQYXJhbSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcGF1c2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZXN1bWUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0SGVpZ2h0KCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRIZWlnaHRQeCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0V2lkdGgoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldFdpZHRoUHgoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzQXV0b0hlaWdodFNpemUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0R5bmFtaWNTaXplKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNGdWxsV2lkdGhTaXplKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0Q3VycmVudERpcmVjdGlvbkJhbm5lclNpemUod2lkdGg6IG51bWJlcik6IFByb21pc2U8QWRTaXplPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRMYW5kc2NhcGVCYW5uZXJTaXplKHdpZHRoOiBudW1iZXIpOiBQcm9taXNlPEFkU2l6ZT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0UG9ydHJhaXRCYW5uZXJTaXplKHdpZHRoOiBudW1iZXIpOiBQcm9taXNlPEFkU2l6ZT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0Fkc1wiLFxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzXCIsXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkcy5ITVNJbnRlcnN0aXRpYWxBZFwiLFxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TSW50ZXJzdGl0aWFsQWQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBvbihcbiAgICAgICAgZXZlbnROYW1lOiBJbnRlcnN0aXRpYWxBZEV2ZW50cyxcbiAgICAgICAgY2FsbGJhY2s6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWRcbiAgICApOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGFzeW5jIGNyZWF0ZSh1c2VBY3Rpdml0eTogYm9vbGVhbik6IFByb21pc2U8SE1TSW50ZXJzdGl0aWFsQWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNjcm9sbCgpOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNob3coKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0xvYWRlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzTG9hZGluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGxvYWRBZChhZFBhcmFtPzogQWRQYXJhbSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QWRJZChhZElkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEFkSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEFkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRSZXdhcmRBZExpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgdmlkZW9PcGVyYXRvckdldEFzcGVjdFJhdGlvKCk6IFByb21pc2U8VmlkZW9PcGVyYXRvckFzcGVjdFJhdGlvPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICB2aWRlb09wZXJhdG9ySGFzVmlkZW8oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICB2aWRlb09wZXJhdG9ySXNDdXN0b21pemVPcGVyYXRlRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHZpZGVvT3BlcmF0b3JJc011dGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgdmlkZW9PcGVyYXRvck11dGUobXV0ZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgdmlkZW9PcGVyYXRvclBhdXNlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgdmlkZW9PcGVyYXRvclBsYXkoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICB2aWRlb09wZXJhdG9yU3RvcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogXCJITVNBZHNcIixcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc1wiLFxuICAgIHBsdWdpblJlZjogXCJITVNBZHMuSE1TTmF0aXZlQWRcIixcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU05hdGl2ZUFkIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgb24oZXZlbnROYW1lOiBOYXRpdmVBZEV2ZW50cywgY2FsbGJhY2s6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGFzeW5jIGNyZWF0ZShcbiAgICAgICAgb3B0aW9uczogTmF0aXZlQWRPcHRpb25zLFxuICAgICAgICBib3VuZHM/OiBMYXlvdXRCb3VuZHNcbiAgICApOiBQcm9taXNlPEhNU05hdGl2ZUFkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBsb2FkQWQob3B0aW9ucz86IE5hdGl2ZUFkTG9hZE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNob3coKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0xvYWRpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZGlzbGlrZUFkKGRpc2xpa2VSZWFzb246IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QWxsb3dDdXN0b21DbGljaygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEFkU291cmNlKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXREZXNjcmlwdGlvbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0Q2FsbFRvQWN0aW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXREaXNsaWtlQWRSZWFzb25zKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzQ3VzdG9tQ2xpY2tBbGxvd2VkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNDdXN0b21EaXNsaWtlVGhpc0FkRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHJlY29yZENsaWNrRXZlbnQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZWNvcmRJbXByZXNzaW9uRXZlbnQoaW1wcmVzc2lvbkRhdGE6IGFueSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0VW5pcXVlSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldERpc2xpa2VBZExpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ290b1doeVRoaXNBZFBhZ2UodXNlVmlldzogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0QWRTaWduKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRUaXRsZSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0V2h5VGhpc0FkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZWNvcmRTaG93U3RhcnRFdmVudChzaG93U3RhcnREYXRhOiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIG9uQWRDbG9zZShrZXl3b3Jkczogc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldE5hdGl2ZUFkQ29uZmlndXJhdGlvbigpOiBQcm9taXNlPE5hdGl2ZUFkQ29uZmlndXJhdGlvbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0T25Eb3dubG9hZFN0YXR1c0NoYW5nZWRMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldE9uTm9uV2lmaURvd25sb2FkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRTaG93UGVybWlzc2lvbkRpYWxvZyhzaG93OmJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEFsbG93ZWROb25XaWZpTmV0d29yayhhbGxvd2VkOmJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGNhbmNlbCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGNvbnRpbnVlRG93bmxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzaG93QWR2ZXJ0aXNlckluZm9EaWFsb2coKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBoaWRlQWR2ZXJ0aXNlckluZm9EaWFsb2coKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBoYXNBZHZlcnRpc2VySW5mbygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEFkdmVydGlzZXJJbmZvKCk6IFByb21pc2U8QWR2ZXJ0aXNlckluZm9bXT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2hvd0FwcERldGFpbFBhZ2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc1RyYW5zcGFyZW5jeU9wZW4oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRUcmFuc3BhcmVuY3lUcGxVcmwoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogXCJITVNBZHNcIixcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc1wiLFxuICAgIHBsdWdpblJlZjogXCJITVNBZHMuSE1TUmV3YXJkQWRcIixcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU1Jld2FyZEFkIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgb24oZXZlbnROYW1lOiBSZXdhcmRBZEV2ZW50cywgY2FsbGJhY2s6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGFzeW5jIGNyZWF0ZShhZElkOiBzdHJpbmcpOiBQcm9taXNlPEhNU1Jld2FyZEFkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzaG93KHVzZUFjdGl2aXR5OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZXN1bWUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBwYXVzZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGRlc3Ryb3koKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBsb2FkQWRXaXRoQWRJZChhZElkOnN0cmluZyxhZFBhcmFtPzpBZFBhcmFtKTogUHJvbWlzZTx2b2lkPntcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBsb2FkQWQoYWRQYXJhbT86IEFkUGFyYW0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGlzTG9hZGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0RGF0YSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0VXNlcklkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRSZXdhcmQoKTogUHJvbWlzZTxITVNSZXdhcmQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldERhdGEoZGF0YTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRJbW1lcnNpdmUoaW1tZXJzaXZlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRVc2VySWQodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldFJld2FyZFZlcmlmeUNvbmZpZyhjb25maWc6IEhNU1Jld2FyZFZlcmlmeUNvbmZpZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0UmV3YXJkVmVyaWZ5Q29uZmlnKCk6IFByb21pc2U8SE1TUmV3YXJkVmVyaWZ5Q29uZmlnPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRPbk1ldGFkYXRhQ2hhbmdlZExpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0UmV3YXJkQWRMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldE1vYmlsZURhdGFBbGVydFN3aXRjaChhbGVydFN3aXRjaDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0Fkc1wiLFxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzXCIsXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkcy5ITVNSb2xsQWRcIixcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU1JvbGxBZCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIG9uKGV2ZW50TmFtZTogUm9sbEFkRXZlbnRzLCBjYWxsYmFjazogKHJlc3VsdD86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgYXN5bmMgY3JlYXRlKFxuICAgICAgICBwYXJhbXM6IFJvbGxBZExvYWRlclBhcmFtcyxcbiAgICAgICAgZGl2SWQ6IHN0cmluZyxcbiAgICAgICAgYm91bmRzPzogTGF5b3V0Qm91bmRzXG4gICAgKTogUHJvbWlzZTxITVNSb2xsQWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNjcm9sbCgpOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGxvYWRBZChvcHRpb25zOiBSb2xsQWRMb2FkT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNMb2FkaW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHBhdXNlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNQbGF5aW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgbXV0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHVubXV0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIG9uQ2xvc2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBwbGF5KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc3RvcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHJlbW92ZUluc3RyZWFtTWVkaWFDaGFuZ2VMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHJlbW92ZU1lZGlhTXV0ZUxpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcmVtb3ZlSW5zdHJlYW1NZWRpYVN0YXRlTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRJbnN0cmVhbUFkcygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEluc3RyZWFtTWVkaWFDaGFuZ2VMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldE1lZGlhTXV0ZUxpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0SW5zdHJlYW1NZWRpYVN0YXRlTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRPbkluc3RyZWFtQWRDbGlja0xpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0QWRTb3VyY2UoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldER1cmF0aW9uKCk6IFByb21pc2U8RHVyYXRpb24+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldFdoeVRoaXNBZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0QWRTaWduKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0NsaWNrZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0V4cGlyZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0ltYWdlQWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc1Nob3duKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNWaWRlb0FkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0Q2FsbFRvQWN0aW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzaG93QWR2ZXJ0aXNlckluZm9EaWFsb2coKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBoaWRlQWR2ZXJ0aXNlckluZm9EaWFsb2coKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBoYXNBZHZlcnRpc2VySW5mbygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEFkdmVydGlzZXJJbmZvKCk6IFByb21pc2U8QWR2ZXJ0aXNlckluZm9bXT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaXNUcmFuc3BhcmVuY3lPcGVuKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0VHJhbnNwYXJlbmN5VHBsVXJsKCk6IFByb21pc2U8U3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzaG93VHJhbnNwYXJlbmN5RGlhbG9nKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaGlkZVRyYW5zcGFyZW5jeURpYWxvZygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogXCJITVNBZHNcIixcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc1wiLFxuICAgIHBsdWdpblJlZjogXCJITVNBZHMuSE1TU3BsYXNoQWRcIixcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU1NwbGFzaEFkIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgb24oZXZlbnROYW1lOiBTcGxhc2hBZEV2ZW50cywgY2FsbGJhY2s6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGFzeW5jIGNyZWF0ZSgpOiBQcm9taXNlPEhNU1NwbGFzaEFkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRMb2dvKGZpbGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0V2lkZVNsb2dhblJlc0lkKHdpZGVTbG9nYW5SZXNJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRTbG9nYW5SZXNJZChzbG9nYW5SZXNJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBsb2FkKG9wdGlvbnM6IFNwbGFzaEFkTG9hZE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHByZWxvYWRBZChvcHRpb25zOiBTcGxhc2hBZExvYWRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBkZXN0cm95VmlldygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHBhdXNlVmlldygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHJlc3VtZVZpZXcoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0xvYWRpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpc0xvYWRlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEFkRGlzcGxheUxpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QXVkaW9Gb2N1c1R5cGUoYXVkaW9Gb2N1c1R5cGU6IEF1ZGlvRm9jdXNUeXBlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6IFwiSE1TQWRzXCIsXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1hZHNcIixcbiAgICBwbHVnaW5SZWY6IFwiSE1TQWRzLkhNU1Zhc3RcIixcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU1Zhc3QgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBvbihldmVudE5hbWU6IFZhc3RFdmVudHMsIGNhbGxiYWNrOiAocmVzdWx0PzogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBhc3luYyBjcmVhdGUoXG4gICAgICAgIGRpdklkOiBzdHJpbmcsXG4gICAgICAgIGJvdW5kcz86IExheW91dEJvdW5kc1xuICAgICk6IFByb21pc2U8SE1TVmFzdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2Nyb2xsKCk6IHZvaWQge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgbG9hZEFkKG9wdGlvbnM6IFZhc3RMb2FkT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcmVzdW1lKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcGF1c2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZWxlYXNlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgdG9nZ2xlTXV0ZVN0YXRlKGlzTXV0ZTpib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHN0YXJ0T3JQYXVzZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxufSAgICBcbiJdfQ==