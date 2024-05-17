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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from "@awesome-cordova-plugins/core";
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
}(AwesomeCordovaNativePlugin));
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
}(AwesomeCordovaNativePlugin));
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
}(AwesomeCordovaNativePlugin));
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
    HMSNativeAdOriginal.prototype.getAppInfo = function () { return cordova(this, "getAppInfo", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.getPromoteInfo = function () { return cordova(this, "getPromoteInfo", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.showAppDetailPage = function () { return cordova(this, "showAppDetailPage", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.showPrivacyPolicy = function () { return cordova(this, "showPrivacyPolicy", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.showPermissionPage = function () { return cordova(this, "showPermissionPage", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.isTransparencyOpen = function () { return cordova(this, "isTransparencyOpen", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.getTransparencyTplUrl = function () { return cordova(this, "getTransparencyTplUrl", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.prototype.getInterActionType = function () { return cordova(this, "getInterActionType", { "otherPromise": true }, arguments); };
    HMSNativeAdOriginal.pluginName = "HMSAds";
    HMSNativeAdOriginal.plugin = "cordova-plugin-hms-adsprime";
    HMSNativeAdOriginal.pluginRef = "HMSAds.HMSNativeAd";
    HMSNativeAdOriginal.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSNativeAdOriginal.platforms = ["Android"];
    return HMSNativeAdOriginal;
}(AwesomeCordovaNativePlugin));
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
}(AwesomeCordovaNativePlugin));
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
}(AwesomeCordovaNativePlugin));
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
}(AwesomeCordovaNativePlugin));
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
}(AwesomeCordovaNativePlugin));
var HMSVast = new HMSVastOriginal();
export { HMSVast };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmF0aXZlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLCtFQUtOLE1BQU0sK0JBQStCLENBQUM7QUFFdkMsK0RBQStEO0FBQy9ELFlBQVk7QUFDWiwrREFBK0Q7QUFFL0QsTUFBTSxDQUFOLElBQVksaUJBVVg7QUFWRCxXQUFZLGlCQUFpQjtJQUN6Qiw2RUFBa0IsQ0FBQTtJQUNsQixpR0FBNEIsQ0FBQTtJQUM1Qiw2RkFBMEIsQ0FBQTtJQUMxQiw2RUFBa0IsQ0FBQTtJQUNsQix1RkFBdUIsQ0FBQTtJQUN2QixpRkFBb0IsQ0FBQTtJQUNwQixtR0FBNkIsQ0FBQTtJQUM3QixtR0FBNkIsQ0FBQTtJQUM3QixpSEFBb0MsQ0FBQTtBQUN4QyxDQUFDLEVBVlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQVU1QjtBQUNELE1BQU0sQ0FBTixJQUFZLHdCQUtYO0FBTEQsV0FBWSx3QkFBd0I7SUFDaEMsaUhBQTZCLENBQUE7SUFDN0IsNkdBQTJCLENBQUE7SUFDM0IscUhBQStCLENBQUE7SUFDL0IscUhBQStCLENBQUE7QUFDbkMsQ0FBQyxFQUxXLHdCQUF3QixLQUF4Qix3QkFBd0IsUUFLbkM7QUFDRCxNQUFNLENBQU4sSUFBWSx1QkFNWDtBQU5ELFdBQVksdUJBQXVCO0lBQy9CLDREQUFpQyxDQUFBO0lBQ2pDLDhEQUFtQyxDQUFBO0lBQ25DLGlFQUFzQyxDQUFBO0lBQ3RDLDREQUFpQyxDQUFBO0lBQ2pDLDREQUFpQyxDQUFBO0FBQ3JDLENBQUMsRUFOVyx1QkFBdUIsS0FBdkIsdUJBQXVCLFFBTWxDO0FBQ0QsTUFBTSxDQUFOLElBQVksTUFJWDtBQUpELFdBQVksTUFBTTtJQUNkLHVDQUFVLENBQUE7SUFDVixtQ0FBUSxDQUFBO0lBQ1IseUNBQVcsQ0FB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O0lBSVYsK0JBQVM7SUFJVCw4QkFBUTtJQUlSLDBDQUFvQjtJQUlwQix1Q0FBaUIsYUFBQyxjQUE4Qjs7Ozs7O3NCQTUwQ3BEO0VBc3hDaUMsMEJBQTBCO1NBQTlDLFdBQVc7O0lBbUVLLDJCQUEwQjs7OztJQUVuRCxvQkFBRSxhQUFDLFNBQXFCLEVBQUUsUUFBZ0M7SUFJcEQsd0JBQU0sYUFDUixLQUFhLEVBQ2IsTUFBcUI7SUFLekIsd0JBQU07SUFJTix3QkFBTSxhQUFDLE9BQXdCO0lBSS9CLHdCQUFNO0lBSU4sdUJBQUs7SUFJTCx5QkFBTztJQUlQLGlDQUFlLGFBQUMsTUFBYztJQUs5Qiw4QkFBWTs7Ozs7O2tCQS8zQ2hCO0VBeTFDNkIsMEJBQTBCO1NBQTFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgQ29weXJpZ2h0IDIwMjItMjAyNC4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuXHJcbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXHJcbiAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuXHJcbiAgICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICAgIFBsdWdpbixcclxuICAgIENvcmRvdmEsXHJcbiAgICBDb3Jkb3ZhUHJvcGVydHksXHJcbiAgICBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbixcclxufSBmcm9tIFwiQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmVcIjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBDb25zdGFudHNcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgZW51bSBBZFBhcmFtRXJyb3JDb2RlcyB7XHJcbiAgICBBRF9QQVJBTV9JTk5FUiA9IDAsXHJcbiAgICBBRF9QQVJBTV9JTlZBTElEX1JFUVVFU1QgPSAxLFxyXG4gICAgQURfUEFSQU1fTkVUV09SS19FUlJPUiA9IDIsXHJcbiAgICBBRF9QQVJBTV9OT19BRCA9IDMsXHJcbiAgICBBRF9QQVJBTV9BRF9MT0FESU5HID0gNCxcclxuICAgIEFEX1BBUkFNX0xPV19BUEkgPSA1LFxyXG4gICAgQURfUEFSQU1fQkFOTkVSX0FEX0VYUElSRSA9IDYsXHJcbiAgICBBRF9QQVJBTV9CQU5ORVJfQURfQ0FOQ0VMID0gNyxcclxuICAgIEFEX1BBUkFNX0hNU19OT1RfU1VQUE9SVF9TRVRfQVBQID0gOCxcclxufVxyXG5leHBvcnQgZW51bSBSZXdhcmRBZFN0YXR1c0Vycm9yQ29kZXMge1xyXG4gICAgUkVXQVJEX0FEX1NUQVRVU19JTlRFUk5BTCA9IDAsXHJcbiAgICBSRVdBUkRfQURfU1RBVFVTX1JFVVNFRCA9IDEsXHJcbiAgICBSRVdBUkRfQURfU1RBVFVTX05PVF9MT0FERUQgPSAyLFxyXG4gICAgUkVXQVJEX0FEX1NUQVRVU19CQUNLR1JPVU5EID0gMyxcclxufVxyXG5leHBvcnQgZW51bSBBZENvbnRlbnRDbGFzc2lmaWNhdGlvbiB7XHJcbiAgICBBRF9DT05URU5UX0NMQVNTSUZJQ0FUSU9OX0EgPSBcIkFcIixcclxuICAgIEFEX0NPTlRFTlRfQ0xBU1NJRklDQVRJT05fUEkgPSBcIlBJXCIsXHJcbiAgICBBRF9DT05URU5UX0NMQVNTSUZJQ0FUSU9OX1VOS05PV04gPSBcIlwiLFxyXG4gICAgQURfQ09OVEVOVF9DTEFTU0lGSUNBVElPTl9KID0gXCJKXCIsXHJcbiAgICBBRF9DT05URU5UX0NMQVNTSUZJQ0FUSU9OX1cgPSBcIldcIixcclxufVxyXG5leHBvcnQgZW51bSBHZW5kZXIge1xyXG4gICAgRkVNQUxFID0gMixcclxuICAgIE1BTEUgPSAxLFxyXG4gICAgVU5LTk9XTiA9IDAsXHJcbn1cclxuZXhwb3J0IGVudW0gTm9uUGVyc29uYWxpemVkQWQge1xyXG4gICAgQUxMT1dfQUxMID0gMCxcclxuICAgIEFMTE9XX05PTl9QRVJTT05BTElaRUQgPSAxLFxyXG59XHJcbmV4cG9ydCBlbnVtIENoaWxkUHJvdGVjdGlvbiB7XHJcbiAgICBUQUdfRk9SX0NISUxEX1BST1RFQ1RJT05fVU5TUEVDSUZJRUQgPSAtMSxcclxuICAgIFRBR19GT1JfQ0hJTERfUFJPVEVDVElPTl9GQUxTRSA9IDAsXHJcbiAgICBUQUdfRk9SX0NISUxEX1BST1RFQ1RJT05fVFJVRSA9IDEsXHJcbn1cclxuZXhwb3J0IGVudW0gVW5kZXJBZ2VPZlByb21pc2Uge1xyXG4gICAgUFJPTUlTRV9VTlNQRUNJRklFRCA9IC0xLFxyXG4gICAgUFJPTUlTRV9GQUxTRSA9IDAsXHJcbiAgICBQUk9NSVNFX1RSVUUgPSAxLFxyXG59XHJcbmV4cG9ydCBlbnVtIEJhbm5lckFkU2l6ZSB7XHJcbiAgICBCQU5ORVJfU0laRV8zNjBfNTcgPSBcIkJBTk5FUl9TSVpFXzM2MF81N1wiLFxyXG4gICAgQkFOTkVSX1NJWkVfMzYwXzE0NCA9IFwiQkFOTkVSX1NJWkVfMzYwXzE0NFwiLFxyXG4gICAgQkFOTkVSX1NJWkVfMTYwXzYwMCA9IFwiQkFOTkVSX1NJWkVfMTYwXzYwMFwiLFxyXG4gICAgQkFOTkVSX1NJWkVfMzAwXzI1MCA9IFwiQkFOTkVSX1NJWkVfMzAwXzI1MFwiLFxyXG4gICAgQkFOTkVSX1NJWkVfMzIwXzEwMCA9IFwiQkFOTkVSX1NJWkVfMzIwXzEwMFwiLFxyXG4gICAgQkFOTkVSX1NJWkVfMzIwXzUwID0gXCJCQU5ORVJfU0laRV8zMjBfNTBcIixcclxuICAgIEJBTk5FUl9TSVpFXzQ2OF82MCA9IFwiQkFOTkVSX1NJWkVfNDY4XzYwXCIsXHJcbiAgICBCQU5ORVJfU0laRV83MjhfOTAgPSBcIkJBTk5FUl9TSVpFXzcyOF85MFwiLFxyXG4gICAgQkFOTkVSX1NJWkVfRFlOQU1JQyA9IFwiQkFOTkVSX1NJWkVfRFlOQU1JQ1wiLFxyXG4gICAgQkFOTkVSX1NJWkVfSU5WQUxJRCA9IFwiQkFOTkVSX1NJWkVfSU5WQUxJRFwiLFxyXG4gICAgQkFOTkVSX1NJWkVfU01BUlQgPSBcIkJBTk5FUl9TSVpFX1NNQVJUXCIsXHJcbiAgICBCQU5ORVJfU0laRV9BRFZBTkNFRCA9IFwiQkFOTkVSX1NJWkVfQURWQU5DRURcIixcclxufVxyXG5leHBvcnQgZW51bSBITVNTY3JlZW5PcmllbnRhdGlvbiB7XHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fTEFORFNDQVBFID0gMCxcclxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9VTlNQRUNJRklFRCA9IC0xLFxyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1BPUlRSQUlUID0gMSxcclxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9VU0VSID0gMixcclxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9CRUhJTkQgPSAzLFxyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1NFTlNPUiA9IDQsXHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fTk9TRU5TT1IgPSA1LFxyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1NFTlNPUl9MQU5EU0NBUEUgPSA2LFxyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1NFTlNPUl9QT1JUUkFJVCA9IDcsXHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fUkVWRVJTRV9MQU5EU0NBUEUgPSA4LFxyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1JFVkVSU0VfUE9SVFJBSVQgPSA5LFxyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX0ZVTExfU0VOU09SID0gMTAsXHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fVVNFUl9MQU5EU0NBUEUgPSAxMSxcclxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9VU0VSX1BPUlRSQUlUID0gMTIsXHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fRlVMTF9VU0VSID0gMTMsXHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fTE9DS0VEID0gMTQsXHJcbn1cclxuZXhwb3J0IGVudW0gRGVidWdOZWVkQ29uc2VudCB7XHJcbiAgICBDT05TRU5UX0RFQlVHX0RJU0FCTEVEID0gMCxcclxuICAgIENPTlNFTlRfREVCVUdfTkVFRF9DT05TRU5UID0gMSxcclxuICAgIENPTlNFTlRfREVCVUdfTk9UX05FRURfQ09OU0VOVCA9IDIsXHJcbn1cclxuZXhwb3J0IGVudW0gQ29uc2VudFN0YXR1cyB7XHJcbiAgICBDT05TRU5UX1BFUlNPTkFMSVpFRCA9IDAsXHJcbiAgICBDT05TRU5UX05PTl9QRVJTT05BTElaRUQgPSAxLFxyXG4gICAgQ09OU0VOVF9VTktOT1dOID0gMixcclxufVxyXG5leHBvcnQgZW51bSBBdWRpb0ZvY3VzVHlwZSB7XHJcbiAgICBHQUlOX0FVRElPX0ZPQ1VTX0FMTCA9IDAsXHJcbiAgICBOT1RfR0FJTl9BVURJT19GT0NVU19XSEVOX01VVEUgPSAxLFxyXG4gICAgTk9UX0dBSU5fQVVESU9fRk9DVVNfQUxMID0gMixcclxufVxyXG5leHBvcnQgZW51bSBNZWRpYUFzcGVjdCB7XHJcbiAgICBBU1BFQ1RfQU5ZID0gMSxcclxuICAgIEFTUEVDVF9DVVNUT01fU0laRSA9IC0xLFxyXG4gICAgQVNQRUNUX0xBTkRTQ0FQRSA9IDIsXHJcbiAgICBBU1BFQ1RfUE9SVFJBSVQgPSAzLFxyXG4gICAgQVNQRUNUX1NRVUFSRSA9IDQsXHJcbiAgICBBU1BFQ1RfVU5LTk9XTiA9IDAsXHJcbn1cclxuZXhwb3J0IGVudW0gQ2hvaWNlc1Bvc2l0aW9uIHtcclxuICAgIEJPVFRPTV9MRUZUID0gMyxcclxuICAgIEJPVFRPTV9SSUdIVCA9IDIsXHJcbiAgICBJTlZJU0lCTEUgPSA0LFxyXG4gICAgVE9QX0xFRlQgPSAwLFxyXG4gICAgVE9QX1JJR0hUID0gMSxcclxufVxyXG5leHBvcnQgZW51bSBNZWRpYURpcmVjdGlvbiB7XHJcbiAgICBBTlkgPSAwLFxyXG4gICAgTEFORFNDQVBFID0gMixcclxuICAgIFBPUlRSQUlUID0gMSxcclxufVxyXG5leHBvcnQgZW51bSBOYXRpdmVBZFRlbXBsYXRlIHtcclxuICAgIE5BVElWRV9BRF9TTUFMTF9URU1QTEFURSA9IFwiTkFUSVZFX0FEX1NNQUxMX1RFTVBMQVRFXCIsXHJcbiAgICBOQVRJVkVfQURfRlVMTF9URU1QTEFURSA9IFwiTkFUSVZFX0FEX0ZVTExfVEVNUExBVEVcIixcclxuICAgIE5BVElWRV9BRF9CQU5ORVJfVEVNUExBVEUgPSBcIk5BVElWRV9BRF9CQU5ORVJfVEVNUExBVEVcIixcclxuICAgIE5BVElWRV9BRF9WSURFT19URU1QTEFURSA9IFwiTkFUSVZFX0FEX1ZJREVPX1RFTVBMQVRFXCIsXHJcbiAgICBOQVRJVkVfQURfV0lUSF9BUFBfRE9XTkxPQURfQlROX1RFTVBMQVRFID0gXCJOQVRJVkVfQURfV0lUSF9BUFBfRE9XTkxPQURfQlROX1RFTVBMQVRFXCJcclxufVxyXG5leHBvcnQgZW51bSBDb2xvciB7XHJcbiAgICBSRUQgPSBcIlJFRFwiLFxyXG4gICAgREtHUkFZID0gXCJES0dSQVlcIixcclxuICAgIEdSQVkgPSBcIkdSQVlcIixcclxuICAgIFdISVRFID0gXCJXSElURVwiLFxyXG4gICAgQkxVRSA9IFwiQkxVRVwiLFxyXG4gICAgQkxBQ0sgPSBcIkJMQUNLXCIsXHJcbiAgICBMVEdSQVkgPSBcIkxUR1JBWVwiLFxyXG4gICAgTUFHRU5UQSA9IFwiTUFHRU5UQVwiLFxyXG4gICAgWUVMTE9XID0gXCJZRUxMT1dcIixcclxuICAgIENZQU4gPSBcIkNZQU5cIixcclxuICAgIEdSRUVOID0gXCJHUkVFTlwiLFxyXG4gICAgVFJBTlNQQVJFTlQgPSBcIlRSQU5TUEFSRU5UXCIsXHJcbn1cclxuZXhwb3J0IGVudW0gSW5zdGFsbFJlZmVycmVyUmVzcG9uc2VzIHtcclxuICAgIFNFUlZJQ0VfRElTQ09OTkVDVEVEID0gLTEsXHJcbiAgICBERVZFTE9QRVJfRVJST1IgPSAzLFxyXG4gICAgU0VSVklDRV9VTkFWQUlMQUJMRSA9IDEsXHJcbiAgICBPSyA9IDAsXHJcbiAgICBGRUFUVVJFX05PVF9TVVBQT1JURUQgPSAyLFxyXG59XHJcbmV4cG9ydCBlbnVtIEFuY2hvciB7XHJcbiAgICBUT1AgPSBcInRvcFwiLFxyXG4gICAgQk9UVE9NID0gXCJib3R0b21cIixcclxuICAgIElOVklTSUJMRSA9IFwiaW52aXNpYmxlXCIsXHJcbn1cclxuZXhwb3J0IGVudW0gQmFubmVyQWRFdmVudHMge1xyXG4gICAgQkFOTkVSX0FEX0NMT1NFRCA9IFwiYmFubmVyX2FkX2Nsb3NlZFwiLFxyXG4gICAgQkFOTkVSX0FEX0ZBSUxFRCA9IFwiYmFubmVyX2FkX2ZhaWxlZFwiLFxyXG4gICAgQkFOTkVSX0FEX0xFQVZFID0gXCJiYW5uZXJfYWRfbGVhdmVcIixcclxuICAgIEJBTk5FUl9BRF9PUEVORUQgPSBcImJhbm5lcl9hZF9vcGVuZWRcIixcclxuICAgIEJBTk5FUl9BRF9MT0FERUQgPSBcImJhbm5lcl9hZF9sb2FkZWRcIixcclxuICAgIEJBTk5FUl9BRF9DTElDS0VEID0gXCJiYW5uZXJfYWRfY2xpY2tlZFwiLFxyXG4gICAgQkFOTkVSX0FEX0lNUFJFU1NJT04gPSBcImJhbm5lcl9hZF9pbXByZXNzaW9uXCIsXHJcbn1cclxuZXhwb3J0IGVudW0gSW50ZXJzdGl0aWFsQWRFdmVudHMge1xyXG4gICAgSU5URVJTVElUSUFMX0FEX0NMT1NFRCA9IFwiaW50ZXJzdGl0aWFsX2FkX2Nsb3NlZFwiLFxyXG4gICAgSU5URVJTVElUSUFMX0FEX0ZBSUxFRCA9IFwiaW50ZXJzdGl0aWFsX2FkX2ZhaWxlZFwiLFxyXG4gICAgSU5URVJTVElUSUFMX0FEX0xFQVZFID0gXCJpbnRlcnN0aXRpYWxfYWRfbGVhdmVcIixcclxuICAgIElOVEVSU1RJVElBTF9BRF9PUEVORUQgPSBcImludGVyc3RpdGlhbF9hZF9vcGVuZWRcIixcclxuICAgIElOVEVSU1RJVElBTF9BRF9MT0FERUQgPSBcImludGVyc3RpdGlhbF9hZF9sb2FkZWRcIixcclxuICAgIElOVEVSU1RJVElBTF9BRF9DTElDS0VEID0gXCJpbnRlcnN0aXRpYWxfYWRfY2xpY2tlZFwiLFxyXG4gICAgSU5URVJTVElUSUFMX0FEX0lNUFJFU1NJT04gPSBcImludGVyc3RpdGlhbF9hZF9pbXByZXNzaW9uXCIsXHJcbiAgICBJTlRFUlNUSVRJQUxfQURfUkVXQVJERUQgPSBcImludGVyc3RpdGlhbF9hZF9yZXdhcmRlZFwiLFxyXG4gICAgSU5URVJTVElUSUFMX1JFV0FSRF9BRF9DTE9TRUQgPSBcImludGVyc3RpdGlhbF9yZXdhcmRfYWRfY2xvc2VkXCIsXHJcbiAgICBJTlRFUlNUSVRJQUxfUkVXQVJEX0FEX0ZBSUxFRF9UT19MT0FEID0gXCJpbnRlcnN0aXRpYWxfcmV3YXJkX2FkX2ZhaWxlZF90b19sb2FkXCIsXHJcbiAgICBJTlRFUlNUSVRJQUxfUkVXQVJEX0FEX0xFRlRfQVBQID0gXCJpbnRlcnN0aXRpYWxfcmV3YXJkX2FkX2xlZnRfYXBwXCIsXHJcbiAgICBJTlRFUlNUSVRJQUxfUkVXQVJEX0FEX0xPQURFRCA9IFwiaW50ZXJzdGl0aWFsX3Jld2FyZF9hZF9sb2FkZWRcIixcclxuICAgIElOVEVSU1RJVElBTF9SRVdBUkRfQURfT1BFTkVEID0gXCJpbnRlcnN0aXRpYWxfcmV3YXJkX2FkX29wZW5lZFwiLFxyXG4gICAgSU5URVJTVElUSUFMX1JFV0FSRF9BRF9DT01QTEVURUQgPSBcImludGVyc3RpdGlhbF9yZXdhcmRfYWRfY29tcGxldGVkXCIsXHJcbiAgICBJTlRFUlNUSVRJQUxfUkVXQVJEX0FEX1NUQVJURUQgPSBcImludGVyc3RpdGlhbF9yZXdhcmRfYWRfc3RhcnRlZFwiLFxyXG59XHJcbmV4cG9ydCBlbnVtIFNwbGFzaEFkRXZlbnRzIHtcclxuICAgIFNQTEFTSF9BRF9GQUlMRURfVE9fTE9BRCA9IFwic3BsYXNoX2FkX2ZhaWxlZF90b19sb2FkXCIsXHJcbiAgICBTUExBU0hfQURfTE9BREVEID0gXCJzcGxhc2hfYWRfbG9hZGVkXCIsXHJcbiAgICBTUExBU0hfQURfRElTTUlTU0VEID0gXCJzcGxhc2hfYWRfZGlzbWlzc2VkXCIsXHJcbiAgICBTUExBU0hfQURfU0hPV0VEID0gXCJzcGxhc2hfYWRfc2hvd2VkXCIsXHJcbiAgICBTUExBU0hfQURfQ0xJQ0sgPSBcInNwbGFzaF9hZF9jbGlja1wiLFxyXG59XHJcbmV4cG9ydCBlbnVtIFJvbGxBZEV2ZW50cyB7XHJcbiAgICBST0xMX0FEX0xPQURfRkFJTEVEID0gXCJyb2xsX2FkX2xvYWRfZmFpbGVkXCIsXHJcbiAgICBST0xMX0FEX0xPQURFRCA9IFwicm9sbF9hZF9sb2FkZWRcIixcclxuICAgIFJPTExfQURfTUVESUFfQ0hBTkdFRCA9IFwicm9sbF9hZF9tZWRpYV9jaGFuZ2VkXCIsXHJcbiAgICBST0xMX0FEX0NMSUNLRUQgPSBcInJvbGxfYWRfY2xpY2tlZFwiLFxyXG4gICAgUk9MTF9BRF9NRURJQV9QUk9HUkVTUyA9IFwicm9sbF9hZF9tZWRpYV9wcm9ncmVzc1wiLFxyXG4gICAgUk9MTF9BRF9NRURJQV9TVEFSVCA9IFwicm9sbF9hZF9tZWRpYV9zdGFydFwiLFxyXG4gICAgUk9MTF9BRF9NRURJQV9QQVVTRSA9IFwicm9sbF9hZF9tZWRpYV9wYXVzZVwiLFxyXG4gICAgUk9MTF9BRF9NRURJQV9TVE9QID0gXCJyb2xsX2FkX21lZGlhX3N0b3BcIixcclxuICAgIFJPTExfQURfTUVESUFfQ09NUExFVElPTiA9IFwicm9sbF9hZF9tZWRpYV9jb21wbGV0aW9uXCIsXHJcbiAgICBST0xMX0FEX01FRElBX0VSUk9SID0gXCJyb2xsX2FkX21lZGlhX2Vycm9yXCIsXHJcbiAgICBST0xMX0FEX01FRElBX1VOTVVURSA9IFwicm9sbF9hZF9tZWRpYV91bm11dGVcIixcclxuICAgIFJPTExfQURfTUVESUFfTVVURSA9IFwicm9sbF9hZF9tZWRpYV9tdXRlXCIsXHJcbiAgICBST0xMX0FEX1dIWV9USElTX0FEID0gXCJyb2xsX2FkX3doeV90aGlzX2FkXCIsXHJcbn1cclxuZXhwb3J0IGVudW0gUmV3YXJkQWRFdmVudHMge1xyXG4gICAgUkVXQVJEX01FVEFEQVRBX0NIQU5HRUQgPSBcInJld2FyZF9tZXRhZGF0YV9jaGFuZ2VkXCIsXHJcbiAgICBSRVdBUkRfQURfRkFJTEVEX1RPX0xPQURfTE9BRCA9IFwicmV3YXJkX2FkX2ZhaWxlZF90b19sb2FkX2xvYWRcIixcclxuICAgIFJFV0FSREVEX0xPQURFRCA9IFwicmV3YXJkZWRfbG9hZGVkXCIsXHJcbiAgICBSRVdBUkRFRF9TVEFUVVMgPSBcInJld2FyZGVkX3N0YXR1c1wiLFxyXG4gICAgUkVXQVJEX0FEX0NMT1NFRF9TVEFUVVMgPSBcInJld2FyZF9hZF9jbG9zZWRfc3RhdHVzXCIsXHJcbiAgICBSRVdBUkRfQURfT1BFTkVEX1NUQVRVUyA9IFwicmV3YXJkX2FkX29wZW5lZF9zdGF0dXNcIixcclxuICAgIFJFV0FSRF9BRF9GQUlMRURfVE9fU0hPVyA9IFwicmV3YXJkX2FkX2ZhaWxlZF90b19zaG93XCIsXHJcbiAgICBSRVdBUkRFRCA9IFwicmV3YXJkZWRcIixcclxuICAgIFJFV0FSRF9BRF9DTE9TRUQgPSBcInJld2FyZF9hZF9jbG9zZWRcIixcclxuICAgIFJFV0FSRF9BRF9GQUlMRURfVE9fTE9BRCA9IFwicmV3YXJkX2FkX2ZhaWxlZF90b19sb2FkXCIsXHJcbiAgICBSRVdBUkRfQURfTE9BREVEID0gXCJyZXdhcmRfYWRfbG9hZGVkXCIsXHJcbiAgICBSRVdBUkRfQURfT1BFTkVEID0gXCJyZXdhcmRfYWRfb3BlbmVkXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERldGFpbGVkQ3JlYXRpdmVUeXBlIHtcclxuICBCSUdfSU1HID0gOTAxLFxyXG4gIFZJREVPID0gOTAzLFxyXG4gIFRIUkVFX0lNRyA9IDkwNCxcclxuICBTTUFMTF9JTUcgPSA5MDUsXHJcbiAgU0lOR0xFX0lNRyA9IDkwOSxcclxuICBTSE9SVF9URVhUID0gOTEzLFxyXG4gIExPTkdfVEVYVCA9IDkxNFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBOYXRpdmVBZEV2ZW50cyB7XHJcbiAgICBOQVRJVkVfQURfRElTTElLRUQgPSBcIm5hdGl2ZV9hZF9kaXNsaWtlZFwiLFxyXG4gICAgTkFUSVZFX0FEX0xPQURFRF9MT0FEID0gXCJuYXRpdmVfYWRfbG9hZGVkX2xvYWRcIixcclxuICAgIE5BVElWRV9BRF9DTE9TRUQgPSBcIm5hdGl2ZV9hZF9jbG9zZWRcIixcclxuICAgIE5BVElWRV9BRF9GQUlMRUQgPSBcIm5hdGl2ZV9hZF9mYWlsZWRcIixcclxuICAgIE5BVElWRV9BRF9MRUFWRSA9IFwibmF0aXZlX2FkX2xlYXZlXCIsXHJcbiAgICBOQVRJVkVfQURfT1BFTkVEID0gXCJuYXRpdmVfYWRfb3BlbmVkXCIsXHJcbiAgICBOQVRJVkVfQURfTE9BREVEID0gXCJuYXRpdmVfYWRfbG9hZGVkXCIsXHJcbiAgICBOQVRJVkVfQURfQ0xJQ0tFRCA9IFwibmF0aXZlX2FkX2NsaWNrZWRcIixcclxuICAgIE5BVElWRV9BRF9JTVBSRVNTSU9OID0gXCJuYXRpdmVfYWRfaW1wcmVzc2lvblwiLFxyXG4gICAgVklERU9fT1BFUkFUT1JfVklERU9fU1RBUlQgPSBcInZpZGVvX29wZXJhdG9yX3ZpZGVvX3N0YXJ0XCIsXHJcbiAgICBWSURFT19PUEVSQVRPUl9WSURFT19QTEFZID0gXCJ2aWRlb19vcGVyYXRvcl92aWRlb19wbGF5XCIsXHJcbiAgICBWSURFT19PUEVSQVRPUl9WSURFT19QQVVTRSA9IFwidmlkZW9fb3BlcmF0b3JfdmlkZW9fcGF1c2VcIixcclxuICAgIFZJREVPX09QRVJBVE9SX1ZJREVPX0VORCA9IFwidmlkZW9fb3BlcmF0b3JfdmlkZW9fZW5kXCIsXHJcbiAgICBWSURFT19PUEVSQVRPUl9WSURFT19NVVRFID0gXCJ2aWRlb19vcGVyYXRvcl92aWRlb19tdXRlXCIsXHJcbiAgICBBUFBfRE9XTkxPQURfU1RBVFVTX0NIQU5HRUQgPSdhcHBfZG93bmxvYWRfc3RhdHVzX2NoYW5nZWQnLFxyXG4gICAgQVBQX0RPV05MT0FEX05PTl9XSUZJX0RPV05MT0FEID0gJ2FwcF9kb3dubG9hZF9ub25fd2lmaV9kb3dubG9hZCdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVmFzdEV2ZW50cyB7XHJcbiAgICBWQVNUX0xPQURfU1VDQ0VTUyA9ICd2YXN0X2xvYWRfc3VjY2VzcycsXHJcbiAgICBWQVNUX0xPQURfRkFJTEVEID0gJ3Zhc3RfbG9hZF9mYWlsZWQnLFxyXG4gICAgVkFTVF9QTEFZX1NUQVRFX0NIQU5HRUQgPSAndmFzdF9wbGF5X3N0YXRlX2NoYW5nZWQnLFxyXG4gICAgVkFTVF9WT0xVTUVfQ0hBTkdFRCA9ICd2YXN0X3ZvbHVtZV9jaGFuZ2VkJyxcclxuICAgIFZBU1RfU0NSRUVOX1ZJRVdfQ0hBTkdFRCA9ICd2YXN0X3NjcmVlbl92aWV3X2NoYW5nZWQnLFxyXG4gICAgVkFTVF9QUk9HUkVTU19DSEFOR0VEID0gJ3Zhc3RfcHJvZ3Jlc3NfY2hhbmdlZCcsXHJcbiAgICBWQVNUX09OX1NVQ0NFU1MgPSAndmFzdF9vbl9zdWNjZXNzJyxcclxuICAgIFZBU1RfT05fRkFJTEVEID0gJ3Zhc3Rfb25fZmFpbGVkJyxcclxuICAgIFZBU1RfQURfUkVBRFkgPSAndmFzdF9hZF9yZWFkeScsXHJcbiAgICBWQVNUX0FEX0ZJTklTSCA9ICd2YXN0X2FkX2ZpbmlzaCcsXHJcbiAgICBWQVNUX0JVRkZFUl9TVEFSVD0gJ3Zhc3RfYnVmZmVyX3N0YXJ0JyxcclxuICAgIFZBU1RfQlVGRkVSX0VORD0gJ3Zhc3RfYnVmZmVyX2VuZCcsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFjdGl2YXRlU3R5bGUgeyBcdFxyXG4gICAgQk9UVE9NX0JBTk5FUiA9IDEsXHJcbiAgICBDT05GSVJNX0RJQUxPRyA9IDJcclxufVxyXG5leHBvcnQgZW51bSBDcmVhdGl2ZU1hdGNoVHlwZSB7XHJcbiAgICBFWEFDVCA9IDAsXHJcbiAgICBTTUFSVD0gMSxcclxuICAgIFVOS05PV04gPSAyLFxyXG4gICAgQU5ZID0gMyxcclxuICAgIExBTkRTQ0FQRSA9IDQsXHJcbiAgICBQT1JUUkFJVCA9IDUsXHJcbiAgICBTUVVBUkUgPSA2XHJcbiAgXHJcbn1cclxuZXhwb3J0IGVudW0gQXBwRG93bmxvYWRTdGF0dXMge1xyXG4gICAgRE9XTkxPQUQgPSBcIkRPV05MT0FEXCIsXHJcbiAgICBXQUlUSU5HX0ZPUl9XSUZJID0gXCJXQUlUSU5HX0ZPUl9XSUZJXCIsXHJcbiAgICBXQUlUSU5HID0gXCJXQUlUSU5HXCIsXHJcbiAgICBET1dOTE9BRElORyA9IFwiRE9XTkxPQURJTkdcIixcclxuICAgIFBBVVNFID0gXCJQQVVTRVwiLFxyXG4gICAgUkVTVU1FID0gXCJSRVNVTUVcIixcclxuICAgIERPV05MT0FERUQgPSBcIkRPV05MT0FERURcIixcclxuICAgIERPV05MT0FERkFJTEVEID0gXCJET1dOTE9BREZBSUxFRFwiLFxyXG4gICAgSU5TVEFMTElORyA9IFwiSU5TVEFMTElOR1wiLFxyXG4gICAgSU5TVEFMTCA9IFwiSU5TVEFMTFwiLFxyXG4gICAgSU5TVEFMTEVEID0gXCJJTlNUQUxMRURcIlxyXG4gIH1cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gSW50ZXJmYWNlc1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0Qm91bmRzIHtcclxuICAgIG1hcmdpbkxlZnQ/OiBudW1iZXI7XHJcbiAgICBtYXJnaW5SaWdodD86IG51bWJlcjtcclxuICAgIG1hcmdpblRvcD86IG51bWJlcjtcclxuICAgIG1hcmdpbkJvdHRvbT86IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIG1hcmdpbkxlZnQ/OiBudW1iZXI7XHJcbiAgICBtYXJnaW5SaWdodD86IG51bWJlcjtcclxuICAgIG1hcmdpblRvcD86IG51bWJlcjtcclxuICAgIG1hcmdpbkJvdHRvbT86IG51bWJlcjtcclxuICAgIHBhZ2VYT2Zmc2V0PzogbnVtYmVyO1xyXG4gICAgcGFnZVlPZmZzZXQ/OiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBZFBhcmFtIHtcclxuICAgIGdlbmRlcj86IEdlbmRlcjtcclxuICAgIGFkQ29udGVudENsYXNzaWZpY2F0aW9uPzogQWRDb250ZW50Q2xhc3NpZmljYXRpb247XHJcbiAgICB0YWdGb3JVbmRlckFnZU9mUHJvbWlzZT86IFVuZGVyQWdlT2ZQcm9taXNlO1xyXG4gICAgdGFnRm9yQ2hpbGRQcm90ZWN0aW9uPzogQ2hpbGRQcm90ZWN0aW9uO1xyXG4gICAgbm9uUGVyc29uYWxpemVkQWQ/OiBOb25QZXJzb25hbGl6ZWRBZDtcclxuICAgIGFwcENvdW50cnk/OiBzdHJpbmc7XHJcbiAgICBhcHBMYW5nPzogc3RyaW5nO1xyXG4gICAgY291bnRyeUNvZGU/OiBzdHJpbmc7XHJcbiAgICBiZWxvbmdDb3VudHJ5Q29kZT86IHN0cmluZztcclxuICAgIGNvbnNlbnQ/OiBzdHJpbmc7XHJcbiAgICByZXF1ZXN0TG9jYXRpb24/OiBib29sZWFuO1xyXG4gICAgZGV0YWlsZWRDcmVhdGl2ZVR5cGU/OiBEZXRhaWxlZENyZWF0aXZlVHlwZVtdO1xyXG4gICAgbG9jYXRpb24/IDpMb2NhdGlvbixcclxuICAgIGNvbnRlbnRCdW5kbGU/IDogQ29udGVudEJ1bmRsZSxcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uIHtcclxuICAgIGxhdDogbnVtYmVyLFxyXG4gICAgbG5nOiBudW1iZXJcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENvbnRlbnRCdW5kbGV7XHJcbiAgICBjaGFubmVsQ2F0ZWdvcnlDb2RlPzogc3RyaW5nLFxyXG4gICAgdGl0bGU/OiBzdHJpbmcsXHJcbiAgICB0YWdzPzogc3RyaW5nLFxyXG4gICAgcmVsYXRlZFBlb3BsZT86IHN0cmluZyxcclxuICAgIGNvbnRlbnQ/OiBzdHJpbmcsXHJcbiAgICBjb250ZW50SUQ/OiBudW1iZXIsXHJcbiAgICBjYXRlZ29yeT86IHN0cmluZyxcclxuICAgIHN1YmNhdGVnb3J5Pzogc3RyaW5nLFxyXG4gICAgdGhpcmRDYXRlZ29yeT86IHN0cmluZ1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSE1TUmVxdWVzdE9wdGlvbnMge1xyXG4gICAgYWRDb250ZW50Q2xhc3NpZmljYXRpb24/OiBBZENvbnRlbnRDbGFzc2lmaWNhdGlvbjtcclxuICAgIGFwcExhbmc/OiBzdHJpbmc7XHJcbiAgICBhcHBDb3VudHJ5Pzogc3RyaW5nO1xyXG4gICAgdGFnRm9yQ2hpbGRQcm90ZWN0aW9uPzogQ2hpbGRQcm90ZWN0aW9uO1xyXG4gICAgdGFnRm9yVW5kZXJBZ2VPZlByb21pc2U/OiBVbmRlckFnZU9mUHJvbWlzZTtcclxuICAgIG5vblBlcnNvbmFsaXplZEFkPzogTm9uUGVyc29uYWxpemVkQWQ7XHJcbiAgICBjb25zZW50Pzogc3RyaW5nO1xyXG4gICAgcmVxdWVzdExvY2F0aW9uPzogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEhNU1Jld2FyZCB7XHJcbiAgICByZXdhcmRBbW91bnQ6IG51bWJlcjtcclxuICAgIHJld2FyZE5hbWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEhNU1Jld2FyZFZlcmlmeUNvbmZpZyB7XHJcbiAgICBkYXRhOiBzdHJpbmc7XHJcbiAgICB1c2VySWQ6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE9haWRSZXN1bHQge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGlzTGltaXRBZFRyYWNpbmdFbmFibGVkOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRHVyYXRpb24ge1xyXG4gICAgZHVyYXRpb246IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFJvbGxBZExvYWRlclBhcmFtcyB7XHJcbiAgICBhZElkOiBzdHJpbmc7XHJcbiAgICB0b3RhbER1cmF0aW9uOiBudW1iZXI7XHJcbiAgICBtYXhDb3VudDogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVmlkZW9Db25maWd1cmF0aW9uIHtcclxuICAgIGF1ZGlvRm9jdXNUeXBlPzogQXVkaW9Gb2N1c1R5cGU7XHJcbiAgICBjbGlja1RvRnVsbFNjcmVlblJlcXVlc3Q/OiBib29sZWFuO1xyXG4gICAgY3VzdG9taXplT3BlcmF0ZVJlcXVlc3RlZD86IGJvb2xlYW47XHJcbiAgICBpc1N0YXJ0TXV0ZWQ/OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTmF0aXZlQWRDb25maWd1cmF0aW9uIHtcclxuICAgIGFkU2l6ZTogQWRTaXplO1xyXG4gICAgY2hvaWNlc1Bvc2l0aW9uPzogQ2hvaWNlc1Bvc2l0aW9uO1xyXG4gICAgbWVkaWFBc3BlY3Q/OiBNZWRpYUFzcGVjdDtcclxuICAgIG1lZGlhRGlyZWN0aW9uPzogTWVkaWFEaXJlY3Rpb247XHJcbiAgICByZXR1cm5VcmxzRm9ySW1hZ2VzPzogYm9vbGVhbjtcclxuICAgIHJlcXVlc3RDdXN0b21EaXNsaWtlVGhpc0FkPzogYm9vbGVhbjtcclxuICAgIHJlcXVlc3RNdWx0aUltYWdlcz86IGJvb2xlYW47XHJcbiAgICB2aWRlb0NvbmZpZ3VyYXRpb24/OiBWaWRlb0NvbmZpZ3VyYXRpb247XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmlkZW9PcGVyYXRvckFzcGVjdFJhdGlvIHtcclxuICAgIHZpZGVvT3BlcmF0b3JHZXRBc3BlY3RSYXRpbzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5hdGl2ZUFkTG9hZE9wdGlvbnMge1xyXG4gICAgYWRJZD86IHN0cmluZztcclxuICAgIGFkPzogQWRQYXJhbTtcclxuICAgIG5hdGl2ZUFkT3B0aW9ucz86IE5hdGl2ZUFkQ29uZmlndXJhdGlvbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEFkU2l6ZSB7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBOYXRpdmVBZE9wdGlvbnMge1xyXG4gICAgZGl2OiBzdHJpbmc7XHJcbiAgICB0ZW1wbGF0ZT86IE5hdGl2ZUFkVGVtcGxhdGU7XHJcbiAgICBiZz86IENvbG9yO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUm9sbEFkTG9hZE9wdGlvbnMge1xyXG4gICAgZmlsZT86IHN0cmluZztcclxuICAgIGFkUGFyYW0/OiBBZFBhcmFtO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVmZXJyZXJEZXRhaWxzIHtcclxuICAgIHJlc3BvbnNlQ29kZT86IEluc3RhbGxSZWZlcnJlclJlc3BvbnNlcztcclxuICAgIGluc3RhbGxSZWZlcnJlcj86IHN0cmluZztcclxuICAgIHJlZmVycmVyQ2xpY2tUaW1lc3RhbXA/OiBudW1iZXI7XHJcbiAgICBpbnN0YWxsQmVnaW5UaW1lc3RhbXA/OiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDb25zZW50VXBkYXRlUmVzdWx0IHtcclxuICAgIGNvbnNlbnRTdGF0dXM/OiBDb25zZW50U3RhdHVzO1xyXG4gICAgaXNOZWVkQ29uc2VudD86IGJvb2xlYW47XHJcbiAgICBhZFByb3ZpZGVycz86IEFkUHJvdmlkZXJbXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEFkUHJvdmlkZXIge1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICBuYW1lPzogc3RyaW5nO1xyXG4gICAgcHJpdmFjeVBvbGljeVVybD86IHN0cmluZztcclxuICAgIHNlcnZpY2VBcmVhPzogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU3BsYXNoQWRMb2FkT3B0aW9ucyB7XHJcbiAgICBhZElkOiBzdHJpbmc7XHJcbiAgICBvcmllbnRhdGlvbj86IEhNU1NjcmVlbk9yaWVudGF0aW9uO1xyXG4gICAgYWRQYXJhbT86IEFkUGFyYW07XHJcbiAgICBsb2dvQW5jaG9yPzogQW5jaG9yO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVmFzdExvYWRPcHRpb25zIHtcclxuICAgIGFkUGFyYW0/OiBWYXN0Q29uZmlndXJhdGlvbixcclxuICAgIHBsYXllckNvbmZpZz86IFBsYXllckNvbmZpZyxcclxuICAgIGlzVGVzdEFkPzogYm9vbGVhbixcclxuICAgIGlzQWRMb2FkV2l0aEFkc0RhdGE/OiBib29sZWFuLFxyXG4gICAgaXNDdXN0b21WaWRlb1BsYXllcj86IGJvb2xlYW5cclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFZhc3RDb25maWd1cmF0aW9uIHtcclxuICAgIGFkSWQ/OiBzdHJpbmcsXHJcbiAgICB0b3RhbER1cmF0aW9uPzogbnVtYmVyLFxyXG4gICAgY3JlYXRpdmVNYXRjaFN0cmF0ZWd5PzogQ3JlYXRpdmVNYXRjaFR5cGUsXHJcbiAgICBhbGxvd01vYmlsZVRyYWZmaWM/OiBib29sZWFuLFxyXG4gICAgYWRPcmllbnRhdGlvbj86TWVkaWFEaXJlY3Rpb24sXHJcbiAgICBtYXhBZFBvZHM/OiBudW1iZXIsXHJcbiAgICByZXF1ZXN0T3B0aW9uPzogSE1TUmVxdWVzdE9wdGlvbnNcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFBsYXllckNvbmZpZyB7XHJcbiAgICBpc0VuYWJsZUN1dG91dD86IGJvb2xlYW4sXHJcbiAgICBpc0VuYWJsZVBvcnRyYWl0PzogYm9vbGVhbixcclxuICAgIGlzRW5hYmxlUm90YXRpb24/OiBib29sZWFuLFxyXG4gICAgaXNTa2lwTGluZWFyQWQ/OiBib29sZWFuLFxyXG4gICAgaXNGb3JjZU11dGU/OmJvb2xlYW4sXHJcbiAgICBpc0luZHVzdHJ5SWNvblNob3c/OmJvb2xlYW5cclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFZhc3RTZGtDb25maWd1cmF0aW9ue1xyXG4gICAgaHR0cENhbGxUaW1lb3V0TXM6bnVtYmVyLFxyXG4gICAgaHR0cENvbm5lY3RUaW1lb3V0TXM6bnVtYmVyLFxyXG4gICAgaHR0cEtlZXBBbGl2ZUR1cmF0aW9uTXM6bnVtYmVyLFxyXG4gICAgaHR0cFJlYWRUaW1lb3V0TXM6bnVtYmVyLFxyXG4gICAgbWF4SHR0cENvbm5lY3Rpb25zOm51bWJlcixcclxuICAgIG1heFJlZGlyZWN0V3JhcHBlckxpbWl0Om51bWJlcixcclxuICAgIGlzVGVzdDpib29sZWFuLFxyXG4gICAgdmFzdEV2ZW50UmV0cnlCYXRjaFNpemU6bnVtYmVyLFxyXG4gICAgdmFzdEV2ZW50UmV0cnlJbnRlcnZhbFNlY29uZHM6bnVtYmVyLFxyXG4gICAgdmFzdEV2ZW50UmV0cnlVcGxvYWRUaW1lczpudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZHZlcnRpc2VySW5mb3tcclxuICAgIHNlcTpudW1iZXIsXHJcbiAgICBrZXk6c3RyaW5nLFxyXG4gICAgdmFsdWU6c3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwSW5mbyB7XHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICB2ZXJzaW9uTmFtZTogc3RyaW5nLFxyXG4gICAgZGV2ZWxvcGVyTmFtZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvbW90ZUluZm8ge1xyXG4gICAgdHlwZTogbnVtYmVyLFxyXG4gICAgbmFtZTogc3RyaW5nXHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBNb2R1bGVzXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0Fkc1wiLFxyXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1hZHNwcmltZVwiLFxyXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkc1wiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0FkcyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKSBITVNJbnRlcnN0aXRpYWxBZCA9IEhNU0ludGVyc3RpdGlhbEFkO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpIEhNU0Jhbm5lckFkID0gSE1TQmFubmVyQWQ7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KCkgSE1TU3BsYXNoQWQgPSBITVNTcGxhc2hBZDtcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKSBITVNSZXdhcmRBZCA9IEhNU1Jld2FyZEFkO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpIEhNU05hdGl2ZUFkID0gSE1TTmF0aXZlQWQ7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KCkgSE1TUm9sbEFkID0gSE1TUm9sbEFkO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpIEhNU1Zhc3QgPSBITVNWYXN0O1xyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBvbihldmVudDogc3RyaW5nLCBjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRTREtWZXJzaW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldFJlcXVlc3RPcHRpb25zKCk6IFByb21pc2U8SE1TUmVxdWVzdE9wdGlvbnM+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0UmVxdWVzdE9wdGlvbnMocmVxdWVzdE9wdGlvbnM6IEhNU1JlcXVlc3RPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldENvbnNlbnQoY29uc2VudDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEFwcEFjdGl2YXRlU3R5bGUoKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QXBwQWN0aXZhdGVTdHlsZShzdHlsZTpudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QXBwSW5zdGFsbGVkTm90aWZ5KHN0YXR1czpib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzQXBwSW5zdGFsbGVkTm90aWZ5KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBhZGRUZXN0RGV2aWNlSWQodGVzdERldmljZUlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0VGVzdERldmljZUlkKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldFVuZGVyQWdlT2ZQcm9taXNlKHVuZGVyQWdlT2ZQcm9taXNlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldENvbnNlbnRTdGF0dXMoY29uc2VudFN0YXR1czogQ29uc2VudFN0YXR1cyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXREZWJ1Z05lZWRDb25zZW50KGRlYnVnTmVlZENvbnNlbnQ6IERlYnVnTmVlZENvbnNlbnQpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZXF1ZXN0Q29uc2VudFVwZGF0ZSgpOiBQcm9taXNlPENvbnNlbnRVcGRhdGVSZXN1bHQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgdmVyaWZ5QWRJZChhZElkOiBzdHJpbmcsIGlzTGltaXRBZFRyYWNraW5nOiBib29sZWFuKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEFkdmVydGlzaW5nSWRJbmZvKCk6IFByb21pc2U8T2FpZFJlc3VsdD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZWZlcnJlckNsaWVudFN0YXJ0Q29ubmVjdGlvbihpc1Rlc3Q/OiBib29sZWFuKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVmZXJyZXJDbGllbnRFbmRDb25uZWN0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZWZlcnJlckNsaWVudElzUmVhZHkoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEluc3RhbGxSZWZlcnJlcihpbnN0YWxsQ2hhbm5lbD86c3RyaW5nKTogUHJvbWlzZTxSZWZlcnJlckRldGFpbHM+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaW5pdFZhc3QodmFzdFNka0NvbmZpZ3VyYXRpb246VmFzdFNka0NvbmZpZ3VyYXRpb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0VmFzdFNka0NvbmZpZ3VyYXRpb24oKTogUHJvbWlzZTxWYXN0U2RrQ29uZmlndXJhdGlvbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICB1cGRhdGVTZGtTZXJ2ZXJDb25maWcoc2xvdElkOnN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICB1c2VyQWNjZXB0QWRMaWNlbnNlKGlzQWNjZXB0TGljZW5zZTpib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEV2ZW50UHJvY2Vzc29yKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0Fkc1wiLFxyXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1hZHNwcmltZVwiLFxyXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkcy5ITVNCYW5uZXJBZFwiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0Jhbm5lckFkIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIG9uKGV2ZW50TmFtZTogQmFubmVyQWRFdmVudHMsIGNhbGxiYWNrOiAocmVzdWx0PzogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGFzeW5jIGNyZWF0ZShkaXZJZDogc3RyaW5nLCBib3VuZHM/OiBMYXlvdXRCb3VuZHMpOiBQcm9taXNlPEhNU0Jhbm5lckFkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNjcm9sbCgpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0QWRJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRBZElkKGFkSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRCYW5uZXJBZFNpemUoKTogUHJvbWlzZTxBZFNpemU+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QmFubmVyQWRTaXplKGJhbm5lckFkU2l6ZTogQmFubmVyQWRTaXplIHwgQWRTaXplKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldEJhY2tncm91bmRDb2xvcihiZ0NvbG9yOiBDb2xvcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRCYW5uZXJSZWZyZXNoKGJhbm5lclJlZnJlc2g6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRBZExpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0xvYWRpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGxvYWRBZChhZFBhcmFtPzogQWRQYXJhbSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBwYXVzZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVzdW1lKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRIZWlnaHQoKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0SGVpZ2h0UHgoKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0V2lkdGgoKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0V2lkdGhQeCgpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0F1dG9IZWlnaHRTaXplKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0R5bmFtaWNTaXplKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0Z1bGxXaWR0aFNpemUoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEN1cnJlbnREaXJlY3Rpb25CYW5uZXJTaXplKHdpZHRoOiBudW1iZXIpOiBQcm9taXNlPEFkU2l6ZT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRMYW5kc2NhcGVCYW5uZXJTaXplKHdpZHRoOiBudW1iZXIpOiBQcm9taXNlPEFkU2l6ZT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRQb3J0cmFpdEJhbm5lclNpemUod2lkdGg6IG51bWJlcik6IFByb21pc2U8QWRTaXplPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6IFwiSE1TQWRzXCIsXHJcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc3ByaW1lXCIsXHJcbiAgICBwbHVnaW5SZWY6IFwiSE1TQWRzLkhNU0ludGVyc3RpdGlhbEFkXCIsXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcclxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TSW50ZXJzdGl0aWFsQWQgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgb24oXHJcbiAgICAgICAgZXZlbnROYW1lOiBJbnRlcnN0aXRpYWxBZEV2ZW50cyxcclxuICAgICAgICBjYWxsYmFjazogKHJlc3VsdD86IGFueSkgPT4gdm9pZFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGFzeW5jIGNyZWF0ZSh1c2VBY3Rpdml0eTogYm9vbGVhbik6IFByb21pc2U8SE1TSW50ZXJzdGl0aWFsQWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2Nyb2xsKCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzaG93KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0xvYWRlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNMb2FkaW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBsb2FkQWQoYWRQYXJhbT86IEFkUGFyYW0pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QWRJZChhZElkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0QWRJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRBZExpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRSZXdhcmRBZExpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICB2aWRlb09wZXJhdG9yR2V0QXNwZWN0UmF0aW8oKTogUHJvbWlzZTxWaWRlb09wZXJhdG9yQXNwZWN0UmF0aW8+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgdmlkZW9PcGVyYXRvckhhc1ZpZGVvKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICB2aWRlb09wZXJhdG9ySXNDdXN0b21pemVPcGVyYXRlRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgdmlkZW9PcGVyYXRvcklzTXV0ZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHZpZGVvT3BlcmF0b3JNdXRlKG11dGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgdmlkZW9PcGVyYXRvclBhdXNlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICB2aWRlb09wZXJhdG9yUGxheSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgdmlkZW9PcGVyYXRvclN0b3AoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6IFwiSE1TQWRzXCIsXHJcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc3ByaW1lXCIsXHJcbiAgICBwbHVnaW5SZWY6IFwiSE1TQWRzLkhNU05hdGl2ZUFkXCIsXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcclxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TTmF0aXZlQWQgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgb24oZXZlbnROYW1lOiBOYXRpdmVBZEV2ZW50cywgY2FsbGJhY2s6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgYXN5bmMgY3JlYXRlKFxyXG4gICAgICAgIG9wdGlvbnM6IE5hdGl2ZUFkT3B0aW9ucyxcclxuICAgICAgICBib3VuZHM/OiBMYXlvdXRCb3VuZHNcclxuICAgICk6IFByb21pc2U8SE1TTmF0aXZlQWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgbG9hZEFkKG9wdGlvbnM/OiBOYXRpdmVBZExvYWRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNob3coKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzTG9hZGluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZGlzbGlrZUFkKGRpc2xpa2VSZWFzb246IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRBbGxvd0N1c3RvbUNsaWNrKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRBZFNvdXJjZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXREZXNjcmlwdGlvbigpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRDYWxsVG9BY3Rpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0RGlzbGlrZUFkUmVhc29ucygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzQ3VzdG9tQ2xpY2tBbGxvd2VkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0N1c3RvbURpc2xpa2VUaGlzQWRFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZWNvcmRDbGlja0V2ZW50KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZWNvcmRJbXByZXNzaW9uRXZlbnQoaW1wcmVzc2lvbkRhdGE6IGFueSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRVbmlxdWVJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXREaXNsaWtlQWRMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ290b1doeVRoaXNBZFBhZ2UodXNlVmlldzogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRBZFNpZ24oKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0VGl0bGUoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0V2h5VGhpc0FkKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHJlY29yZFNob3dTdGFydEV2ZW50KHNob3dTdGFydERhdGE6IGFueSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBvbkFkQ2xvc2Uoa2V5d29yZHM6IHN0cmluZ1tdKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldE5hdGl2ZUFkQ29uZmlndXJhdGlvbigpOiBQcm9taXNlPE5hdGl2ZUFkQ29uZmlndXJhdGlvbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRPbkRvd25sb2FkU3RhdHVzQ2hhbmdlZExpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRPbk5vbldpZmlEb3dubG9hZExpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRTaG93UGVybWlzc2lvbkRpYWxvZyhzaG93OmJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QWxsb3dlZE5vbldpZmlOZXR3b3JrKGFsbG93ZWQ6Ym9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBjYW5jZWwoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGNvbnRpbnVlRG93bmxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNob3dBZHZlcnRpc2VySW5mb0RpYWxvZygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaGlkZUFkdmVydGlzZXJJbmZvRGlhbG9nKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBoYXNBZHZlcnRpc2VySW5mbygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0QWR2ZXJ0aXNlckluZm8oKTogUHJvbWlzZTxBZHZlcnRpc2VySW5mb1tdPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEFwcEluZm8oKTogUHJvbWlzZTxBcHBJbmZvPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldFByb21vdGVJbmZvKCk6IFByb21pc2U8UHJvbW90ZUluZm8+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2hvd0FwcERldGFpbFBhZ2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNob3dQcml2YWN5UG9saWN5KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzaG93UGVybWlzc2lvblBhZ2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzVHJhbnNwYXJlbmN5T3BlbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0VHJhbnNwYXJlbmN5VHBsVXJsKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEludGVyQWN0aW9uVHlwZSgpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0Fkc1wiLFxyXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1hZHNwcmltZVwiLFxyXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkcy5ITVNSZXdhcmRBZFwiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU1Jld2FyZEFkIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIG9uKGV2ZW50TmFtZTogUmV3YXJkQWRFdmVudHMsIGNhbGxiYWNrOiAocmVzdWx0PzogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGFzeW5jIGNyZWF0ZShhZElkOiBzdHJpbmcpOiBQcm9taXNlPEhNU1Jld2FyZEFkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNob3codXNlQWN0aXZpdHk6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVzdW1lKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBwYXVzZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgbG9hZEFkV2l0aEFkSWQoYWRJZDpzdHJpbmcsYWRQYXJhbT86QWRQYXJhbSk6IFByb21pc2U8dm9pZD57XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBsb2FkQWQoYWRQYXJhbT86IEFkUGFyYW0pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNMb2FkZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldERhdGEoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0VXNlcklkKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldFJld2FyZCgpOiBQcm9taXNlPEhNU1Jld2FyZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXREYXRhKGRhdGE6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRJbW1lcnNpdmUoaW1tZXJzaXZlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldFVzZXJJZCh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRSZXdhcmRWZXJpZnlDb25maWcoY29uZmlnOiBITVNSZXdhcmRWZXJpZnlDb25maWcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0UmV3YXJkVmVyaWZ5Q29uZmlnKCk6IFByb21pc2U8SE1TUmV3YXJkVmVyaWZ5Q29uZmlnPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldE9uTWV0YWRhdGFDaGFuZ2VkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldFJld2FyZEFkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldE1vYmlsZURhdGFBbGVydFN3aXRjaChhbGVydFN3aXRjaDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0Fkc1wiLFxyXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1hZHNwcmltZVwiLFxyXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkcy5ITVNSb2xsQWRcIixcclxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxyXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNSb2xsQWQgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgb24oZXZlbnROYW1lOiBSb2xsQWRFdmVudHMsIGNhbGxiYWNrOiAocmVzdWx0PzogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGFzeW5jIGNyZWF0ZShcclxuICAgICAgICBwYXJhbXM6IFJvbGxBZExvYWRlclBhcmFtcyxcclxuICAgICAgICBkaXZJZDogc3RyaW5nLFxyXG4gICAgICAgIGJvdW5kcz86IExheW91dEJvdW5kc1xyXG4gICAgKTogUHJvbWlzZTxITVNSb2xsQWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2Nyb2xsKCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBsb2FkQWQob3B0aW9uczogUm9sbEFkTG9hZE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNMb2FkaW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBwYXVzZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNQbGF5aW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBtdXRlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICB1bm11dGUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIG9uQ2xvc2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHBsYXkoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHN0b3AoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHJlbW92ZUluc3RyZWFtTWVkaWFDaGFuZ2VMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVtb3ZlTWVkaWFNdXRlTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHJlbW92ZUluc3RyZWFtTWVkaWFTdGF0ZUxpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRJbnN0cmVhbUFkcygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0SW5zdHJlYW1NZWRpYUNoYW5nZUxpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRNZWRpYU11dGVMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0SW5zdHJlYW1NZWRpYVN0YXRlTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldE9uSW5zdHJlYW1BZENsaWNrTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEFkU291cmNlKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldER1cmF0aW9uKCk6IFByb21pc2U8RHVyYXRpb24+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0V2h5VGhpc0FkKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEFkU2lnbigpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0NsaWNrZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzRXhwaXJlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNJbWFnZUFkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc1Nob3duKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc1ZpZGVvQWQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldENhbGxUb0FjdGlvbigpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzaG93QWR2ZXJ0aXNlckluZm9EaWFsb2coKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGhpZGVBZHZlcnRpc2VySW5mb0RpYWxvZygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaGFzQWR2ZXJ0aXNlckluZm8oKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEFkdmVydGlzZXJJbmZvKCk6IFByb21pc2U8QWR2ZXJ0aXNlckluZm9bXT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc1RyYW5zcGFyZW5jeU9wZW4oKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldFRyYW5zcGFyZW5jeVRwbFVybCgpOiBQcm9taXNlPFN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzaG93VHJhbnNwYXJlbmN5RGlhbG9nKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBoaWRlVHJhbnNwYXJlbmN5RGlhbG9nKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0Fkc1wiLFxyXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1hZHNwcmltZVwiLFxyXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkcy5ITVNTcGxhc2hBZFwiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU1NwbGFzaEFkIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIG9uKGV2ZW50TmFtZTogU3BsYXNoQWRFdmVudHMsIGNhbGxiYWNrOiAocmVzdWx0PzogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGFzeW5jIGNyZWF0ZSgpOiBQcm9taXNlPEhNU1NwbGFzaEFkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldExvZ28oZmlsZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldFdpZGVTbG9nYW5SZXNJZCh3aWRlU2xvZ2FuUmVzSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRTbG9nYW5SZXNJZChzbG9nYW5SZXNJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGxvYWQob3B0aW9uczogU3BsYXNoQWRMb2FkT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBwcmVsb2FkQWQob3B0aW9uczogU3BsYXNoQWRMb2FkT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBkZXN0cm95VmlldygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcGF1c2VWaWV3KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZXN1bWVWaWV3KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0xvYWRpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzTG9hZGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRBZERpc3BsYXlMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QXVkaW9Gb2N1c1R5cGUoYXVkaW9Gb2N1c1R5cGU6IEF1ZGlvRm9jdXNUeXBlKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6IFwiSE1TQWRzXCIsXHJcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc3ByaW1lXCIsXHJcbiAgICBwbHVnaW5SZWY6IFwiSE1TQWRzLkhNU1Zhc3RcIixcclxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxyXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNWYXN0IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIG9uKGV2ZW50TmFtZTogVmFzdEV2ZW50cywgY2FsbGJhY2s6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgYXN5bmMgY3JlYXRlKFxyXG4gICAgICAgIGRpdklkOiBzdHJpbmcsXHJcbiAgICAgICAgYm91bmRzPzogTGF5b3V0Qm91bmRzXHJcbiAgICApOiBQcm9taXNlPEhNU1Zhc3Q+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2Nyb2xsKCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBsb2FkQWQob3B0aW9uczogVmFzdExvYWRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHJlc3VtZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcGF1c2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHJlbGVhc2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHRvZ2dsZU11dGVTdGF0ZShpc011dGU6Ym9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc3RhcnRPclBhdXNlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbn0gICAgXHJcbiJdfQ==