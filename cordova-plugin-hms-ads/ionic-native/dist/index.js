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
    HMSAdsOriginal.plugin = "cordova-plugin-hms-ads";
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
    HMSBannerAdOriginal.plugin = "cordova-plugin-hms-ads";
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
    HMSInterstitialAdOriginal.plugin = "cordova-plugin-hms-ads";
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
    HMSNativeAdOriginal.plugin = "cordova-plugin-hms-ads";
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
    HMSRewardAdOriginal.plugin = "cordova-plugin-hms-ads";
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
    HMSRollAdOriginal.plugin = "cordova-plugin-hms-ads";
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
    HMSSplashAdOriginal.plugin = "cordova-plugin-hms-ads";
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
    HMSVastOriginal.plugin = "cordova-plugin-hms-ads";
    HMSVastOriginal.pluginRef = "HMSAds.HMSVast";
    HMSVastOriginal.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSVastOriginal.platforms = ["Android"];
    return HMSVastOriginal;
}(AwesomeCordovaNativePlugin));
var HMSVast = new HMSVastOriginal();
export { HMSVast };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmF0aXZlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLCtFQUtOLE1BQU0sK0JBQStCLENBQUM7QUFFdkMsK0RBQStEO0FBQy9ELFlBQVk7QUFDWiwrREFBK0Q7QUFFL0QsTUFBTSxDQUFOLElBQVksaUJBVVg7QUFWRCxXQUFZLGlCQUFpQjtJQUN6Qiw2RUFBa0IsQ0FBQTtJQUNsQixpR0FBNEIsQ0FBQTtJQUM1Qiw2RkFBMEIsQ0FBQTtJQUMxQiw2RUFBa0IsQ0FBQTtJQUNsQix1RkFBdUIsQ0FBQTtJQUN2QixpRkFBb0IsQ0FBQTtJQUNwQixtR0FBNkIsQ0FBQTtJQUM3QixtR0FBNkIsQ0FBQTtJQUM3QixpSEFBb0MsQ0FBQTtBQUN4QyxDQUFDLEVBVlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQVU1QjtBQUNELE1BQU0sQ0FBTixJQUFZLHdCQUtYO0FBTEQsV0FBWSx3QkFBd0I7SUFDaEMsaUhBQTZCLENBQUE7SUFDN0IsNkdBQTJCLENBQUE7SUFDM0IscUhBQStCLENBQUE7SUFDL0IscUhBQStCLENBQUE7QUFDbkMsQ0FBQyxFQUxXLHdCQUF3QixLQUF4Qix3QkFBd0IsUUFLbkM7QUFDRCxNQUFNLENBQU4sSUFBWSx1QkFNWDtBQU5ELFdBQVksdUJBQXVCO0lBQy9CLDREQUFpQyxDQUFBO0lBQ2pDLDhEQUFtQyxDQUFBO0lBQ25DLGlFQUFzQyxDQUFBO0lBQ3RDLDREQUFpQyxDQUFBO0lBQ2pDLDREQUFpQyxDQUFBO0FBQ3JDLENBQUMsRUFOVyx1QkFBdUIsS0FBdkIsdUJBQXVCLFFBTWxDO0FBQ0QsTUFBTSxDQUFOLElBQVksTUFJWDtBQUpELFdBQVksTUFBTTtJQUNkLHVDQUFVLENBQUE7SUFDVixtQ0FBUSxDQUFBO0lBQ1IseUNBQVcsQ0FB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O0lBSVYsK0JBQVM7SUFJVCw4QkFBUTtJQUlSLDBDQUFvQjtJQUlwQix1Q0FBaUIsYUFBQyxjQUE4Qjs7Ozs7O3NCQTUwQ3BEO0VBc3hDaUMsMEJBQTBCO1NBQTlDLFdBQVc7O0lBbUVLLDJCQUEwQjs7OztJQUVuRCxvQkFBRSxhQUFDLFNBQXFCLEVBQUUsUUFBZ0M7SUFJcEQsd0JBQU0sYUFDUixLQUFhLEVBQ2IsTUFBcUI7SUFLekIsd0JBQU07SUFJTix3QkFBTSxhQUFDLE9BQXdCO0lBSS9CLHdCQUFNO0lBSU4sdUJBQUs7SUFJTCx5QkFBTztJQUlQLGlDQUFlLGFBQUMsTUFBYztJQUs5Qiw4QkFBWTs7Ozs7O2tCQS8zQ2hCO0VBeTFDNkIsMEJBQTBCO1NBQTFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgQ29weXJpZ2h0IDIwMjAtMjAyNC4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuXHJcbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXHJcbiAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuXHJcbiAgICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICAgIFBsdWdpbixcclxuICAgIENvcmRvdmEsXHJcbiAgICBDb3Jkb3ZhUHJvcGVydHksXHJcbiAgICBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpblxyXG59IGZyb20gXCJAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZVwiO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIENvbnN0YW50c1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmV4cG9ydCBlbnVtIEFkUGFyYW1FcnJvckNvZGVzIHtcclxuICAgIEFEX1BBUkFNX0lOTkVSID0gMCxcclxuICAgIEFEX1BBUkFNX0lOVkFMSURfUkVRVUVTVCA9IDEsXHJcbiAgICBBRF9QQVJBTV9ORVRXT1JLX0VSUk9SID0gMixcclxuICAgIEFEX1BBUkFNX05PX0FEID0gMyxcclxuICAgIEFEX1BBUkFNX0FEX0xPQURJTkcgPSA0LFxyXG4gICAgQURfUEFSQU1fTE9XX0FQSSA9IDUsXHJcbiAgICBBRF9QQVJBTV9CQU5ORVJfQURfRVhQSVJFID0gNixcclxuICAgIEFEX1BBUkFNX0JBTk5FUl9BRF9DQU5DRUwgPSA3LFxyXG4gICAgQURfUEFSQU1fSE1TX05PVF9TVVBQT1JUX1NFVF9BUFAgPSA4LFxyXG59XHJcbmV4cG9ydCBlbnVtIFJld2FyZEFkU3RhdHVzRXJyb3JDb2RlcyB7XHJcbiAgICBSRVdBUkRfQURfU1RBVFVTX0lOVEVSTkFMID0gMCxcclxuICAgIFJFV0FSRF9BRF9TVEFUVVNfUkVVU0VEID0gMSxcclxuICAgIFJFV0FSRF9BRF9TVEFUVVNfTk9UX0xPQURFRCA9IDIsXHJcbiAgICBSRVdBUkRfQURfU1RBVFVTX0JBQ0tHUk9VTkQgPSAzLFxyXG59XHJcbmV4cG9ydCBlbnVtIEFkQ29udGVudENsYXNzaWZpY2F0aW9uIHtcclxuICAgIEFEX0NPTlRFTlRfQ0xBU1NJRklDQVRJT05fQSA9IFwiQVwiLFxyXG4gICAgQURfQ09OVEVOVF9DTEFTU0lGSUNBVElPTl9QSSA9IFwiUElcIixcclxuICAgIEFEX0NPTlRFTlRfQ0xBU1NJRklDQVRJT05fVU5LTk9XTiA9IFwiXCIsXHJcbiAgICBBRF9DT05URU5UX0NMQVNTSUZJQ0FUSU9OX0ogPSBcIkpcIixcclxuICAgIEFEX0NPTlRFTlRfQ0xBU1NJRklDQVRJT05fVyA9IFwiV1wiLFxyXG59XHJcbmV4cG9ydCBlbnVtIEdlbmRlciB7XHJcbiAgICBGRU1BTEUgPSAyLFxyXG4gICAgTUFMRSA9IDEsXHJcbiAgICBVTktOT1dOID0gMCxcclxufVxyXG5leHBvcnQgZW51bSBOb25QZXJzb25hbGl6ZWRBZCB7XHJcbiAgICBBTExPV19BTEwgPSAwLFxyXG4gICAgQUxMT1dfTk9OX1BFUlNPTkFMSVpFRCA9IDEsXHJcbn1cclxuZXhwb3J0IGVudW0gQ2hpbGRQcm90ZWN0aW9uIHtcclxuICAgIFRBR19GT1JfQ0hJTERfUFJPVEVDVElPTl9VTlNQRUNJRklFRCA9IC0xLFxyXG4gICAgVEFHX0ZPUl9DSElMRF9QUk9URUNUSU9OX0ZBTFNFID0gMCxcclxuICAgIFRBR19GT1JfQ0hJTERfUFJPVEVDVElPTl9UUlVFID0gMSxcclxufVxyXG5leHBvcnQgZW51bSBVbmRlckFnZU9mUHJvbWlzZSB7XHJcbiAgICBQUk9NSVNFX1VOU1BFQ0lGSUVEID0gLTEsXHJcbiAgICBQUk9NSVNFX0ZBTFNFID0gMCxcclxuICAgIFBST01JU0VfVFJVRSA9IDEsXHJcbn1cclxuZXhwb3J0IGVudW0gQmFubmVyQWRTaXplIHtcclxuICAgIEJBTk5FUl9TSVpFXzM2MF81NyA9IFwiQkFOTkVSX1NJWkVfMzYwXzU3XCIsXHJcbiAgICBCQU5ORVJfU0laRV8zNjBfMTQ0ID0gXCJCQU5ORVJfU0laRV8zNjBfMTQ0XCIsXHJcbiAgICBCQU5ORVJfU0laRV8xNjBfNjAwID0gXCJCQU5ORVJfU0laRV8xNjBfNjAwXCIsXHJcbiAgICBCQU5ORVJfU0laRV8zMDBfMjUwID0gXCJCQU5ORVJfU0laRV8zMDBfMjUwXCIsXHJcbiAgICBCQU5ORVJfU0laRV8zMjBfMTAwID0gXCJCQU5ORVJfU0laRV8zMjBfMTAwXCIsXHJcbiAgICBCQU5ORVJfU0laRV8zMjBfNTAgPSBcIkJBTk5FUl9TSVpFXzMyMF81MFwiLFxyXG4gICAgQkFOTkVSX1NJWkVfNDY4XzYwID0gXCJCQU5ORVJfU0laRV80NjhfNjBcIixcclxuICAgIEJBTk5FUl9TSVpFXzcyOF85MCA9IFwiQkFOTkVSX1NJWkVfNzI4XzkwXCIsXHJcbiAgICBCQU5ORVJfU0laRV9EWU5BTUlDID0gXCJCQU5ORVJfU0laRV9EWU5BTUlDXCIsXHJcbiAgICBCQU5ORVJfU0laRV9JTlZBTElEID0gXCJCQU5ORVJfU0laRV9JTlZBTElEXCIsXHJcbiAgICBCQU5ORVJfU0laRV9TTUFSVCA9IFwiQkFOTkVSX1NJWkVfU01BUlRcIixcclxuICAgIEJBTk5FUl9TSVpFX0FEVkFOQ0VEID0gXCJCQU5ORVJfU0laRV9BRFZBTkNFRFwiLFxyXG59XHJcbmV4cG9ydCBlbnVtIEhNU1NjcmVlbk9yaWVudGF0aW9uIHtcclxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9MQU5EU0NBUEUgPSAwLFxyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1VOU1BFQ0lGSUVEID0gLTEsXHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fUE9SVFJBSVQgPSAxLFxyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1VTRVIgPSAyLFxyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX0JFSElORCA9IDMsXHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fU0VOU09SID0gNCxcclxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9OT1NFTlNPUiA9IDUsXHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fU0VOU09SX0xBTkRTQ0FQRSA9IDYsXHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fU0VOU09SX1BPUlRSQUlUID0gNyxcclxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9SRVZFUlNFX0xBTkRTQ0FQRSA9IDgsXHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fUkVWRVJTRV9QT1JUUkFJVCA9IDksXHJcbiAgICBTQ1JFRU5fT1JJRU5UQVRJT05fRlVMTF9TRU5TT1IgPSAxMCxcclxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9VU0VSX0xBTkRTQ0FQRSA9IDExLFxyXG4gICAgU0NSRUVOX09SSUVOVEFUSU9OX1VTRVJfUE9SVFJBSVQgPSAxMixcclxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9GVUxMX1VTRVIgPSAxMyxcclxuICAgIFNDUkVFTl9PUklFTlRBVElPTl9MT0NLRUQgPSAxNCxcclxufVxyXG5leHBvcnQgZW51bSBEZWJ1Z05lZWRDb25zZW50IHtcclxuICAgIENPTlNFTlRfREVCVUdfRElTQUJMRUQgPSAwLFxyXG4gICAgQ09OU0VOVF9ERUJVR19ORUVEX0NPTlNFTlQgPSAxLFxyXG4gICAgQ09OU0VOVF9ERUJVR19OT1RfTkVFRF9DT05TRU5UID0gMixcclxufVxyXG5leHBvcnQgZW51bSBDb25zZW50U3RhdHVzIHtcclxuICAgIENPTlNFTlRfUEVSU09OQUxJWkVEID0gMCxcclxuICAgIENPTlNFTlRfTk9OX1BFUlNPTkFMSVpFRCA9IDEsXHJcbiAgICBDT05TRU5UX1VOS05PV04gPSAyLFxyXG59XHJcbmV4cG9ydCBlbnVtIEF1ZGlvRm9jdXNUeXBlIHtcclxuICAgIEdBSU5fQVVESU9fRk9DVVNfQUxMID0gMCxcclxuICAgIE5PVF9HQUlOX0FVRElPX0ZPQ1VTX1dIRU5fTVVURSA9IDEsXHJcbiAgICBOT1RfR0FJTl9BVURJT19GT0NVU19BTEwgPSAyLFxyXG59XHJcbmV4cG9ydCBlbnVtIE1lZGlhQXNwZWN0IHtcclxuICAgIEFTUEVDVF9BTlkgPSAxLFxyXG4gICAgQVNQRUNUX0NVU1RPTV9TSVpFID0gLTEsXHJcbiAgICBBU1BFQ1RfTEFORFNDQVBFID0gMixcclxuICAgIEFTUEVDVF9QT1JUUkFJVCA9IDMsXHJcbiAgICBBU1BFQ1RfU1FVQVJFID0gNCxcclxuICAgIEFTUEVDVF9VTktOT1dOID0gMCxcclxufVxyXG5leHBvcnQgZW51bSBDaG9pY2VzUG9zaXRpb24ge1xyXG4gICAgQk9UVE9NX0xFRlQgPSAzLFxyXG4gICAgQk9UVE9NX1JJR0hUID0gMixcclxuICAgIElOVklTSUJMRSA9IDQsXHJcbiAgICBUT1BfTEVGVCA9IDAsXHJcbiAgICBUT1BfUklHSFQgPSAxLFxyXG59XHJcbmV4cG9ydCBlbnVtIE1lZGlhRGlyZWN0aW9uIHtcclxuICAgIEFOWSA9IDAsXHJcbiAgICBMQU5EU0NBUEUgPSAyLFxyXG4gICAgUE9SVFJBSVQgPSAxLFxyXG59XHJcbmV4cG9ydCBlbnVtIE5hdGl2ZUFkVGVtcGxhdGUge1xyXG4gICAgTkFUSVZFX0FEX1NNQUxMX1RFTVBMQVRFID0gXCJOQVRJVkVfQURfU01BTExfVEVNUExBVEVcIixcclxuICAgIE5BVElWRV9BRF9GVUxMX1RFTVBMQVRFID0gXCJOQVRJVkVfQURfRlVMTF9URU1QTEFURVwiLFxyXG4gICAgTkFUSVZFX0FEX0JBTk5FUl9URU1QTEFURSA9IFwiTkFUSVZFX0FEX0JBTk5FUl9URU1QTEFURVwiLFxyXG4gICAgTkFUSVZFX0FEX1ZJREVPX1RFTVBMQVRFID0gXCJOQVRJVkVfQURfVklERU9fVEVNUExBVEVcIixcclxuICAgIE5BVElWRV9BRF9XSVRIX0FQUF9ET1dOTE9BRF9CVE5fVEVNUExBVEUgPSBcIk5BVElWRV9BRF9XSVRIX0FQUF9ET1dOTE9BRF9CVE5fVEVNUExBVEVcIlxyXG59XHJcbmV4cG9ydCBlbnVtIENvbG9yIHtcclxuICAgIFJFRCA9IFwiUkVEXCIsXHJcbiAgICBES0dSQVkgPSBcIkRLR1JBWVwiLFxyXG4gICAgR1JBWSA9IFwiR1JBWVwiLFxyXG4gICAgV0hJVEUgPSBcIldISVRFXCIsXHJcbiAgICBCTFVFID0gXCJCTFVFXCIsXHJcbiAgICBCTEFDSyA9IFwiQkxBQ0tcIixcclxuICAgIExUR1JBWSA9IFwiTFRHUkFZXCIsXHJcbiAgICBNQUdFTlRBID0gXCJNQUdFTlRBXCIsXHJcbiAgICBZRUxMT1cgPSBcIllFTExPV1wiLFxyXG4gICAgQ1lBTiA9IFwiQ1lBTlwiLFxyXG4gICAgR1JFRU4gPSBcIkdSRUVOXCIsXHJcbiAgICBUUkFOU1BBUkVOVCA9IFwiVFJBTlNQQVJFTlRcIixcclxufVxyXG5leHBvcnQgZW51bSBJbnN0YWxsUmVmZXJyZXJSZXNwb25zZXMge1xyXG4gICAgU0VSVklDRV9ESVNDT05ORUNURUQgPSAtMSxcclxuICAgIERFVkVMT1BFUl9FUlJPUiA9IDMsXHJcbiAgICBTRVJWSUNFX1VOQVZBSUxBQkxFID0gMSxcclxuICAgIE9LID0gMCxcclxuICAgIEZFQVRVUkVfTk9UX1NVUFBPUlRFRCA9IDIsXHJcbn1cclxuZXhwb3J0IGVudW0gQW5jaG9yIHtcclxuICAgIFRPUCA9IFwidG9wXCIsXHJcbiAgICBCT1RUT00gPSBcImJvdHRvbVwiLFxyXG4gICAgSU5WSVNJQkxFID0gXCJpbnZpc2libGVcIixcclxufVxyXG5leHBvcnQgZW51bSBCYW5uZXJBZEV2ZW50cyB7XHJcbiAgICBCQU5ORVJfQURfQ0xPU0VEID0gXCJiYW5uZXJfYWRfY2xvc2VkXCIsXHJcbiAgICBCQU5ORVJfQURfRkFJTEVEID0gXCJiYW5uZXJfYWRfZmFpbGVkXCIsXHJcbiAgICBCQU5ORVJfQURfTEVBVkUgPSBcImJhbm5lcl9hZF9sZWF2ZVwiLFxyXG4gICAgQkFOTkVSX0FEX09QRU5FRCA9IFwiYmFubmVyX2FkX29wZW5lZFwiLFxyXG4gICAgQkFOTkVSX0FEX0xPQURFRCA9IFwiYmFubmVyX2FkX2xvYWRlZFwiLFxyXG4gICAgQkFOTkVSX0FEX0NMSUNLRUQgPSBcImJhbm5lcl9hZF9jbGlja2VkXCIsXHJcbiAgICBCQU5ORVJfQURfSU1QUkVTU0lPTiA9IFwiYmFubmVyX2FkX2ltcHJlc3Npb25cIixcclxufVxyXG5leHBvcnQgZW51bSBJbnRlcnN0aXRpYWxBZEV2ZW50cyB7XHJcbiAgICBJTlRFUlNUSVRJQUxfQURfQ0xPU0VEID0gXCJpbnRlcnN0aXRpYWxfYWRfY2xvc2VkXCIsXHJcbiAgICBJTlRFUlNUSVRJQUxfQURfRkFJTEVEID0gXCJpbnRlcnN0aXRpYWxfYWRfZmFpbGVkXCIsXHJcbiAgICBJTlRFUlNUSVRJQUxfQURfTEVBVkUgPSBcImludGVyc3RpdGlhbF9hZF9sZWF2ZVwiLFxyXG4gICAgSU5URVJTVElUSUFMX0FEX09QRU5FRCA9IFwiaW50ZXJzdGl0aWFsX2FkX29wZW5lZFwiLFxyXG4gICAgSU5URVJTVElUSUFMX0FEX0xPQURFRCA9IFwiaW50ZXJzdGl0aWFsX2FkX2xvYWRlZFwiLFxyXG4gICAgSU5URVJTVElUSUFMX0FEX0NMSUNLRUQgPSBcImludGVyc3RpdGlhbF9hZF9jbGlja2VkXCIsXHJcbiAgICBJTlRFUlNUSVRJQUxfQURfSU1QUkVTU0lPTiA9IFwiaW50ZXJzdGl0aWFsX2FkX2ltcHJlc3Npb25cIixcclxuICAgIElOVEVSU1RJVElBTF9BRF9SRVdBUkRFRCA9IFwiaW50ZXJzdGl0aWFsX2FkX3Jld2FyZGVkXCIsXHJcbiAgICBJTlRFUlNUSVRJQUxfUkVXQVJEX0FEX0NMT1NFRCA9IFwiaW50ZXJzdGl0aWFsX3Jld2FyZF9hZF9jbG9zZWRcIixcclxuICAgIElOVEVSU1RJVElBTF9SRVdBUkRfQURfRkFJTEVEX1RPX0xPQUQgPSBcImludGVyc3RpdGlhbF9yZXdhcmRfYWRfZmFpbGVkX3RvX2xvYWRcIixcclxuICAgIElOVEVSU1RJVElBTF9SRVdBUkRfQURfTEVGVF9BUFAgPSBcImludGVyc3RpdGlhbF9yZXdhcmRfYWRfbGVmdF9hcHBcIixcclxuICAgIElOVEVSU1RJVElBTF9SRVdBUkRfQURfTE9BREVEID0gXCJpbnRlcnN0aXRpYWxfcmV3YXJkX2FkX2xvYWRlZFwiLFxyXG4gICAgSU5URVJTVElUSUFMX1JFV0FSRF9BRF9PUEVORUQgPSBcImludGVyc3RpdGlhbF9yZXdhcmRfYWRfb3BlbmVkXCIsXHJcbiAgICBJTlRFUlNUSVRJQUxfUkVXQVJEX0FEX0NPTVBMRVRFRCA9IFwiaW50ZXJzdGl0aWFsX3Jld2FyZF9hZF9jb21wbGV0ZWRcIixcclxuICAgIElOVEVSU1RJVElBTF9SRVdBUkRfQURfU1RBUlRFRCA9IFwiaW50ZXJzdGl0aWFsX3Jld2FyZF9hZF9zdGFydGVkXCIsXHJcbn1cclxuZXhwb3J0IGVudW0gU3BsYXNoQWRFdmVudHMge1xyXG4gICAgU1BMQVNIX0FEX0ZBSUxFRF9UT19MT0FEID0gXCJzcGxhc2hfYWRfZmFpbGVkX3RvX2xvYWRcIixcclxuICAgIFNQTEFTSF9BRF9MT0FERUQgPSBcInNwbGFzaF9hZF9sb2FkZWRcIixcclxuICAgIFNQTEFTSF9BRF9ESVNNSVNTRUQgPSBcInNwbGFzaF9hZF9kaXNtaXNzZWRcIixcclxuICAgIFNQTEFTSF9BRF9TSE9XRUQgPSBcInNwbGFzaF9hZF9zaG93ZWRcIixcclxuICAgIFNQTEFTSF9BRF9DTElDSyA9IFwic3BsYXNoX2FkX2NsaWNrXCIsXHJcbn1cclxuZXhwb3J0IGVudW0gUm9sbEFkRXZlbnRzIHtcclxuICAgIFJPTExfQURfTE9BRF9GQUlMRUQgPSBcInJvbGxfYWRfbG9hZF9mYWlsZWRcIixcclxuICAgIFJPTExfQURfTE9BREVEID0gXCJyb2xsX2FkX2xvYWRlZFwiLFxyXG4gICAgUk9MTF9BRF9NRURJQV9DSEFOR0VEID0gXCJyb2xsX2FkX21lZGlhX2NoYW5nZWRcIixcclxuICAgIFJPTExfQURfQ0xJQ0tFRCA9IFwicm9sbF9hZF9jbGlja2VkXCIsXHJcbiAgICBST0xMX0FEX01FRElBX1BST0dSRVNTID0gXCJyb2xsX2FkX21lZGlhX3Byb2dyZXNzXCIsXHJcbiAgICBST0xMX0FEX01FRElBX1NUQVJUID0gXCJyb2xsX2FkX21lZGlhX3N0YXJ0XCIsXHJcbiAgICBST0xMX0FEX01FRElBX1BBVVNFID0gXCJyb2xsX2FkX21lZGlhX3BhdXNlXCIsXHJcbiAgICBST0xMX0FEX01FRElBX1NUT1AgPSBcInJvbGxfYWRfbWVkaWFfc3RvcFwiLFxyXG4gICAgUk9MTF9BRF9NRURJQV9DT01QTEVUSU9OID0gXCJyb2xsX2FkX21lZGlhX2NvbXBsZXRpb25cIixcclxuICAgIFJPTExfQURfTUVESUFfRVJST1IgPSBcInJvbGxfYWRfbWVkaWFfZXJyb3JcIixcclxuICAgIFJPTExfQURfTUVESUFfVU5NVVRFID0gXCJyb2xsX2FkX21lZGlhX3VubXV0ZVwiLFxyXG4gICAgUk9MTF9BRF9NRURJQV9NVVRFID0gXCJyb2xsX2FkX21lZGlhX211dGVcIixcclxuICAgIFJPTExfQURfV0hZX1RISVNfQUQgPSBcInJvbGxfYWRfd2h5X3RoaXNfYWRcIixcclxufVxyXG5leHBvcnQgZW51bSBSZXdhcmRBZEV2ZW50cyB7XHJcbiAgICBSRVdBUkRfTUVUQURBVEFfQ0hBTkdFRCA9IFwicmV3YXJkX21ldGFkYXRhX2NoYW5nZWRcIixcclxuICAgIFJFV0FSRF9BRF9GQUlMRURfVE9fTE9BRF9MT0FEID0gXCJyZXdhcmRfYWRfZmFpbGVkX3RvX2xvYWRfbG9hZFwiLFxyXG4gICAgUkVXQVJERURfTE9BREVEID0gXCJyZXdhcmRlZF9sb2FkZWRcIixcclxuICAgIFJFV0FSREVEX1NUQVRVUyA9IFwicmV3YXJkZWRfc3RhdHVzXCIsXHJcbiAgICBSRVdBUkRfQURfQ0xPU0VEX1NUQVRVUyA9IFwicmV3YXJkX2FkX2Nsb3NlZF9zdGF0dXNcIixcclxuICAgIFJFV0FSRF9BRF9PUEVORURfU1RBVFVTID0gXCJyZXdhcmRfYWRfb3BlbmVkX3N0YXR1c1wiLFxyXG4gICAgUkVXQVJEX0FEX0ZBSUxFRF9UT19TSE9XID0gXCJyZXdhcmRfYWRfZmFpbGVkX3RvX3Nob3dcIixcclxuICAgIFJFV0FSREVEID0gXCJyZXdhcmRlZFwiLFxyXG4gICAgUkVXQVJEX0FEX0NMT1NFRCA9IFwicmV3YXJkX2FkX2Nsb3NlZFwiLFxyXG4gICAgUkVXQVJEX0FEX0ZBSUxFRF9UT19MT0FEID0gXCJyZXdhcmRfYWRfZmFpbGVkX3RvX2xvYWRcIixcclxuICAgIFJFV0FSRF9BRF9MT0FERUQgPSBcInJld2FyZF9hZF9sb2FkZWRcIixcclxuICAgIFJFV0FSRF9BRF9PUEVORUQgPSBcInJld2FyZF9hZF9vcGVuZWRcIixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGV0YWlsZWRDcmVhdGl2ZVR5cGUge1xyXG4gIEJJR19JTUcgPSA5MDEsXHJcbiAgVklERU8gPSA5MDMsXHJcbiAgVEhSRUVfSU1HID0gOTA0LFxyXG4gIFNNQUxMX0lNRyA9IDkwNSxcclxuICBTSU5HTEVfSU1HID0gOTA5LFxyXG4gIFNIT1JUX1RFWFQgPSA5MTMsXHJcbiAgTE9OR19URVhUID0gOTE0XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE5hdGl2ZUFkRXZlbnRzIHtcclxuICAgIE5BVElWRV9BRF9ESVNMSUtFRCA9IFwibmF0aXZlX2FkX2Rpc2xpa2VkXCIsXHJcbiAgICBOQVRJVkVfQURfTE9BREVEX0xPQUQgPSBcIm5hdGl2ZV9hZF9sb2FkZWRfbG9hZFwiLFxyXG4gICAgTkFUSVZFX0FEX0NMT1NFRCA9IFwibmF0aXZlX2FkX2Nsb3NlZFwiLFxyXG4gICAgTkFUSVZFX0FEX0ZBSUxFRCA9IFwibmF0aXZlX2FkX2ZhaWxlZFwiLFxyXG4gICAgTkFUSVZFX0FEX0xFQVZFID0gXCJuYXRpdmVfYWRfbGVhdmVcIixcclxuICAgIE5BVElWRV9BRF9PUEVORUQgPSBcIm5hdGl2ZV9hZF9vcGVuZWRcIixcclxuICAgIE5BVElWRV9BRF9MT0FERUQgPSBcIm5hdGl2ZV9hZF9sb2FkZWRcIixcclxuICAgIE5BVElWRV9BRF9DTElDS0VEID0gXCJuYXRpdmVfYWRfY2xpY2tlZFwiLFxyXG4gICAgTkFUSVZFX0FEX0lNUFJFU1NJT04gPSBcIm5hdGl2ZV9hZF9pbXByZXNzaW9uXCIsXHJcbiAgICBWSURFT19PUEVSQVRPUl9WSURFT19TVEFSVCA9IFwidmlkZW9fb3BlcmF0b3JfdmlkZW9fc3RhcnRcIixcclxuICAgIFZJREVPX09QRVJBVE9SX1ZJREVPX1BMQVkgPSBcInZpZGVvX29wZXJhdG9yX3ZpZGVvX3BsYXlcIixcclxuICAgIFZJREVPX09QRVJBVE9SX1ZJREVPX1BBVVNFID0gXCJ2aWRlb19vcGVyYXRvcl92aWRlb19wYXVzZVwiLFxyXG4gICAgVklERU9fT1BFUkFUT1JfVklERU9fRU5EID0gXCJ2aWRlb19vcGVyYXRvcl92aWRlb19lbmRcIixcclxuICAgIFZJREVPX09QRVJBVE9SX1ZJREVPX01VVEUgPSBcInZpZGVvX29wZXJhdG9yX3ZpZGVvX211dGVcIixcclxuICAgIEFQUF9ET1dOTE9BRF9TVEFUVVNfQ0hBTkdFRCA9J2FwcF9kb3dubG9hZF9zdGF0dXNfY2hhbmdlZCcsXHJcbiAgICBBUFBfRE9XTkxPQURfTk9OX1dJRklfRE9XTkxPQUQgPSAnYXBwX2Rvd25sb2FkX25vbl93aWZpX2Rvd25sb2FkJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBWYXN0RXZlbnRzIHtcclxuICAgIFZBU1RfTE9BRF9TVUNDRVNTID0gJ3Zhc3RfbG9hZF9zdWNjZXNzJyxcclxuICAgIFZBU1RfTE9BRF9GQUlMRUQgPSAndmFzdF9sb2FkX2ZhaWxlZCcsXHJcbiAgICBWQVNUX1BMQVlfU1RBVEVfQ0hBTkdFRCA9ICd2YXN0X3BsYXlfc3RhdGVfY2hhbmdlZCcsXHJcbiAgICBWQVNUX1ZPTFVNRV9DSEFOR0VEID0gJ3Zhc3Rfdm9sdW1lX2NoYW5nZWQnLFxyXG4gICAgVkFTVF9TQ1JFRU5fVklFV19DSEFOR0VEID0gJ3Zhc3Rfc2NyZWVuX3ZpZXdfY2hhbmdlZCcsXHJcbiAgICBWQVNUX1BST0dSRVNTX0NIQU5HRUQgPSAndmFzdF9wcm9ncmVzc19jaGFuZ2VkJyxcclxuICAgIFZBU1RfT05fU1VDQ0VTUyA9ICd2YXN0X29uX3N1Y2Nlc3MnLFxyXG4gICAgVkFTVF9PTl9GQUlMRUQgPSAndmFzdF9vbl9mYWlsZWQnLFxyXG4gICAgVkFTVF9BRF9SRUFEWSA9ICd2YXN0X2FkX3JlYWR5JyxcclxuICAgIFZBU1RfQURfRklOSVNIID0gJ3Zhc3RfYWRfZmluaXNoJyxcclxuICAgIFZBU1RfQlVGRkVSX1NUQVJUPSAndmFzdF9idWZmZXJfc3RhcnQnLFxyXG4gICAgVkFTVF9CVUZGRVJfRU5EPSAndmFzdF9idWZmZXJfZW5kJyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQWN0aXZhdGVTdHlsZSB7IFx0XHJcbiAgICBCT1RUT01fQkFOTkVSID0gMSxcclxuICAgIENPTkZJUk1fRElBTE9HID0gMlxyXG59XHJcbmV4cG9ydCBlbnVtIENyZWF0aXZlTWF0Y2hUeXBlIHtcclxuICAgIEVYQUNUID0gMCxcclxuICAgIFNNQVJUPSAxLFxyXG4gICAgVU5LTk9XTiA9IDIsXHJcbiAgICBBTlkgPSAzLFxyXG4gICAgTEFORFNDQVBFID0gNCxcclxuICAgIFBPUlRSQUlUID0gNSxcclxuICAgIFNRVUFSRSA9IDZcclxuICBcclxufVxyXG5leHBvcnQgZW51bSBBcHBEb3dubG9hZFN0YXR1cyB7XHJcbiAgICBET1dOTE9BRCA9IFwiRE9XTkxPQURcIixcclxuICAgIFdBSVRJTkdfRk9SX1dJRkkgPSBcIldBSVRJTkdfRk9SX1dJRklcIixcclxuICAgIFdBSVRJTkcgPSBcIldBSVRJTkdcIixcclxuICAgIERPV05MT0FESU5HID0gXCJET1dOTE9BRElOR1wiLFxyXG4gICAgUEFVU0UgPSBcIlBBVVNFXCIsXHJcbiAgICBSRVNVTUUgPSBcIlJFU1VNRVwiLFxyXG4gICAgRE9XTkxPQURFRCA9IFwiRE9XTkxPQURFRFwiLFxyXG4gICAgRE9XTkxPQURGQUlMRUQgPSBcIkRPV05MT0FERkFJTEVEXCIsXHJcbiAgICBJTlNUQUxMSU5HID0gXCJJTlNUQUxMSU5HXCIsXHJcbiAgICBJTlNUQUxMID0gXCJJTlNUQUxMXCIsXHJcbiAgICBJTlNUQUxMRUQgPSBcIklOU1RBTExFRFwiXHJcbiAgfVxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBJbnRlcmZhY2VzXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYXlvdXRCb3VuZHMge1xyXG4gICAgbWFyZ2luTGVmdD86IG51bWJlcjtcclxuICAgIG1hcmdpblJpZ2h0PzogbnVtYmVyO1xyXG4gICAgbWFyZ2luVG9wPzogbnVtYmVyO1xyXG4gICAgbWFyZ2luQm90dG9tPzogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgbWFyZ2luTGVmdD86IG51bWJlcjtcclxuICAgIG1hcmdpblJpZ2h0PzogbnVtYmVyO1xyXG4gICAgbWFyZ2luVG9wPzogbnVtYmVyO1xyXG4gICAgbWFyZ2luQm90dG9tPzogbnVtYmVyO1xyXG4gICAgcGFnZVhPZmZzZXQ/OiBudW1iZXI7XHJcbiAgICBwYWdlWU9mZnNldD86IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEFkUGFyYW0ge1xyXG4gICAgZ2VuZGVyPzogR2VuZGVyO1xyXG4gICAgYWRDb250ZW50Q2xhc3NpZmljYXRpb24/OiBBZENvbnRlbnRDbGFzc2lmaWNhdGlvbjtcclxuICAgIHRhZ0ZvclVuZGVyQWdlT2ZQcm9taXNlPzogVW5kZXJBZ2VPZlByb21pc2U7XHJcbiAgICB0YWdGb3JDaGlsZFByb3RlY3Rpb24/OiBDaGlsZFByb3RlY3Rpb247XHJcbiAgICBub25QZXJzb25hbGl6ZWRBZD86IE5vblBlcnNvbmFsaXplZEFkO1xyXG4gICAgYXBwQ291bnRyeT86IHN0cmluZztcclxuICAgIGFwcExhbmc/OiBzdHJpbmc7XHJcbiAgICBjb3VudHJ5Q29kZT86IHN0cmluZztcclxuICAgIGJlbG9uZ0NvdW50cnlDb2RlPzogc3RyaW5nO1xyXG4gICAgY29uc2VudD86IHN0cmluZztcclxuICAgIHJlcXVlc3RMb2NhdGlvbj86IGJvb2xlYW47XHJcbiAgICBkZXRhaWxlZENyZWF0aXZlVHlwZT86IERldGFpbGVkQ3JlYXRpdmVUeXBlW107XHJcbiAgICBsb2NhdGlvbj8gOkxvY2F0aW9uLFxyXG4gICAgY29udGVudEJ1bmRsZT8gOiBDb250ZW50QnVuZGxlLFxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9jYXRpb24ge1xyXG4gICAgbGF0OiBudW1iZXIsXHJcbiAgICBsbmc6IG51bWJlclxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29udGVudEJ1bmRsZXtcclxuICAgIGNoYW5uZWxDYXRlZ29yeUNvZGU/OiBzdHJpbmcsXHJcbiAgICB0aXRsZT86IHN0cmluZyxcclxuICAgIHRhZ3M/OiBzdHJpbmcsXHJcbiAgICByZWxhdGVkUGVvcGxlPzogc3RyaW5nLFxyXG4gICAgY29udGVudD86IHN0cmluZyxcclxuICAgIGNvbnRlbnRJRD86IG51bWJlcixcclxuICAgIGNhdGVnb3J5Pzogc3RyaW5nLFxyXG4gICAgc3ViY2F0ZWdvcnk/OiBzdHJpbmcsXHJcbiAgICB0aGlyZENhdGVnb3J5Pzogc3RyaW5nXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBITVNSZXF1ZXN0T3B0aW9ucyB7XHJcbiAgICBhZENvbnRlbnRDbGFzc2lmaWNhdGlvbj86IEFkQ29udGVudENsYXNzaWZpY2F0aW9uO1xyXG4gICAgYXBwTGFuZz86IHN0cmluZztcclxuICAgIGFwcENvdW50cnk/OiBzdHJpbmc7XHJcbiAgICB0YWdGb3JDaGlsZFByb3RlY3Rpb24/OiBDaGlsZFByb3RlY3Rpb247XHJcbiAgICB0YWdGb3JVbmRlckFnZU9mUHJvbWlzZT86IFVuZGVyQWdlT2ZQcm9taXNlO1xyXG4gICAgbm9uUGVyc29uYWxpemVkQWQ/OiBOb25QZXJzb25hbGl6ZWRBZDtcclxuICAgIGNvbnNlbnQ/OiBzdHJpbmc7XHJcbiAgICByZXF1ZXN0TG9jYXRpb24/OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSE1TUmV3YXJkIHtcclxuICAgIHJld2FyZEFtb3VudDogbnVtYmVyO1xyXG4gICAgcmV3YXJkTmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSE1TUmV3YXJkVmVyaWZ5Q29uZmlnIHtcclxuICAgIGRhdGE6IHN0cmluZztcclxuICAgIHVzZXJJZDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgT2FpZFJlc3VsdCB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgaXNMaW1pdEFkVHJhY2luZ0VuYWJsZWQ6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBEdXJhdGlvbiB7XHJcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUm9sbEFkTG9hZGVyUGFyYW1zIHtcclxuICAgIGFkSWQ6IHN0cmluZztcclxuICAgIHRvdGFsRHVyYXRpb246IG51bWJlcjtcclxuICAgIG1heENvdW50OiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBWaWRlb0NvbmZpZ3VyYXRpb24ge1xyXG4gICAgYXVkaW9Gb2N1c1R5cGU/OiBBdWRpb0ZvY3VzVHlwZTtcclxuICAgIGNsaWNrVG9GdWxsU2NyZWVuUmVxdWVzdD86IGJvb2xlYW47XHJcbiAgICBjdXN0b21pemVPcGVyYXRlUmVxdWVzdGVkPzogYm9vbGVhbjtcclxuICAgIGlzU3RhcnRNdXRlZD86IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBOYXRpdmVBZENvbmZpZ3VyYXRpb24ge1xyXG4gICAgYWRTaXplOiBBZFNpemU7XHJcbiAgICBjaG9pY2VzUG9zaXRpb24/OiBDaG9pY2VzUG9zaXRpb247XHJcbiAgICBtZWRpYUFzcGVjdD86IE1lZGlhQXNwZWN0O1xyXG4gICAgbWVkaWFEaXJlY3Rpb24/OiBNZWRpYURpcmVjdGlvbjtcclxuICAgIHJldHVyblVybHNGb3JJbWFnZXM/OiBib29sZWFuO1xyXG4gICAgcmVxdWVzdEN1c3RvbURpc2xpa2VUaGlzQWQ/OiBib29sZWFuO1xyXG4gICAgcmVxdWVzdE11bHRpSW1hZ2VzPzogYm9vbGVhbjtcclxuICAgIHZpZGVvQ29uZmlndXJhdGlvbj86IFZpZGVvQ29uZmlndXJhdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWaWRlb09wZXJhdG9yQXNwZWN0UmF0aW8ge1xyXG4gICAgdmlkZW9PcGVyYXRvckdldEFzcGVjdFJhdGlvOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmF0aXZlQWRMb2FkT3B0aW9ucyB7XHJcbiAgICBhZElkPzogc3RyaW5nO1xyXG4gICAgYWQ/OiBBZFBhcmFtO1xyXG4gICAgbmF0aXZlQWRPcHRpb25zPzogTmF0aXZlQWRDb25maWd1cmF0aW9uO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRTaXplIHtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE5hdGl2ZUFkT3B0aW9ucyB7XHJcbiAgICBkaXY6IHN0cmluZztcclxuICAgIHRlbXBsYXRlPzogTmF0aXZlQWRUZW1wbGF0ZTtcclxuICAgIGJnPzogQ29sb3I7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBSb2xsQWRMb2FkT3B0aW9ucyB7XHJcbiAgICBmaWxlPzogc3RyaW5nO1xyXG4gICAgYWRQYXJhbT86IEFkUGFyYW07XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBSZWZlcnJlckRldGFpbHMge1xyXG4gICAgcmVzcG9uc2VDb2RlPzogSW5zdGFsbFJlZmVycmVyUmVzcG9uc2VzO1xyXG4gICAgaW5zdGFsbFJlZmVycmVyPzogc3RyaW5nO1xyXG4gICAgcmVmZXJyZXJDbGlja1RpbWVzdGFtcD86IG51bWJlcjtcclxuICAgIGluc3RhbGxCZWdpblRpbWVzdGFtcD86IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENvbnNlbnRVcGRhdGVSZXN1bHQge1xyXG4gICAgY29uc2VudFN0YXR1cz86IENvbnNlbnRTdGF0dXM7XHJcbiAgICBpc05lZWRDb25zZW50PzogYm9vbGVhbjtcclxuICAgIGFkUHJvdmlkZXJzPzogQWRQcm92aWRlcltdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRQcm92aWRlciB7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICBwcml2YWN5UG9saWN5VXJsPzogc3RyaW5nO1xyXG4gICAgc2VydmljZUFyZWE/OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTcGxhc2hBZExvYWRPcHRpb25zIHtcclxuICAgIGFkSWQ6IHN0cmluZztcclxuICAgIG9yaWVudGF0aW9uPzogSE1TU2NyZWVuT3JpZW50YXRpb247XHJcbiAgICBhZFBhcmFtPzogQWRQYXJhbTtcclxuICAgIGxvZ29BbmNob3I/OiBBbmNob3I7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBWYXN0TG9hZE9wdGlvbnMge1xyXG4gICAgYWRQYXJhbT86IFZhc3RDb25maWd1cmF0aW9uLFxyXG4gICAgcGxheWVyQ29uZmlnPzogUGxheWVyQ29uZmlnLFxyXG4gICAgaXNUZXN0QWQ/OiBib29sZWFuLFxyXG4gICAgaXNBZExvYWRXaXRoQWRzRGF0YT86IGJvb2xlYW4sXHJcbiAgICBpc0N1c3RvbVZpZGVvUGxheWVyPzogYm9vbGVhblxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVmFzdENvbmZpZ3VyYXRpb24ge1xyXG4gICAgYWRJZD86IHN0cmluZyxcclxuICAgIHRvdGFsRHVyYXRpb24/OiBudW1iZXIsXHJcbiAgICBjcmVhdGl2ZU1hdGNoU3RyYXRlZ3k/OiBDcmVhdGl2ZU1hdGNoVHlwZSxcclxuICAgIGFsbG93TW9iaWxlVHJhZmZpYz86IGJvb2xlYW4sXHJcbiAgICBhZE9yaWVudGF0aW9uPzpNZWRpYURpcmVjdGlvbixcclxuICAgIG1heEFkUG9kcz86IG51bWJlcixcclxuICAgIHJlcXVlc3RPcHRpb24/OiBITVNSZXF1ZXN0T3B0aW9uc1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUGxheWVyQ29uZmlnIHtcclxuICAgIGlzRW5hYmxlQ3V0b3V0PzogYm9vbGVhbixcclxuICAgIGlzRW5hYmxlUG9ydHJhaXQ/OiBib29sZWFuLFxyXG4gICAgaXNFbmFibGVSb3RhdGlvbj86IGJvb2xlYW4sXHJcbiAgICBpc1NraXBMaW5lYXJBZD86IGJvb2xlYW4sXHJcbiAgICBpc0ZvcmNlTXV0ZT86Ym9vbGVhbixcclxuICAgIGlzSW5kdXN0cnlJY29uU2hvdz86Ym9vbGVhblxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVmFzdFNka0NvbmZpZ3VyYXRpb257XHJcbiAgICBodHRwQ2FsbFRpbWVvdXRNczpudW1iZXIsXHJcbiAgICBodHRwQ29ubmVjdFRpbWVvdXRNczpudW1iZXIsXHJcbiAgICBodHRwS2VlcEFsaXZlRHVyYXRpb25NczpudW1iZXIsXHJcbiAgICBodHRwUmVhZFRpbWVvdXRNczpudW1iZXIsXHJcbiAgICBtYXhIdHRwQ29ubmVjdGlvbnM6bnVtYmVyLFxyXG4gICAgbWF4UmVkaXJlY3RXcmFwcGVyTGltaXQ6bnVtYmVyLFxyXG4gICAgaXNUZXN0OmJvb2xlYW4sXHJcbiAgICB2YXN0RXZlbnRSZXRyeUJhdGNoU2l6ZTpudW1iZXIsXHJcbiAgICB2YXN0RXZlbnRSZXRyeUludGVydmFsU2Vjb25kczpudW1iZXIsXHJcbiAgICB2YXN0RXZlbnRSZXRyeVVwbG9hZFRpbWVzOm51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFkdmVydGlzZXJJbmZve1xyXG4gICAgc2VxOm51bWJlcixcclxuICAgIGtleTpzdHJpbmcsXHJcbiAgICB2YWx1ZTpzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBJbmZvIHtcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIHZlcnNpb25OYW1lOiBzdHJpbmcsXHJcbiAgICBkZXZlbG9wZXJOYW1lOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9tb3RlSW5mbyB7XHJcbiAgICB0eXBlOiBudW1iZXIsXHJcbiAgICBuYW1lOiBzdHJpbmdcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIE1vZHVsZXNcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6IFwiSE1TQWRzXCIsXHJcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc1wiLFxyXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkc1wiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0FkcyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKSBITVNJbnRlcnN0aXRpYWxBZCA9IEhNU0ludGVyc3RpdGlhbEFkO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpIEhNU0Jhbm5lckFkID0gSE1TQmFubmVyQWQ7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KCkgSE1TU3BsYXNoQWQgPSBITVNTcGxhc2hBZDtcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKSBITVNSZXdhcmRBZCA9IEhNU1Jld2FyZEFkO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpIEhNU05hdGl2ZUFkID0gSE1TTmF0aXZlQWQ7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KCkgSE1TUm9sbEFkID0gSE1TUm9sbEFkO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpIEhNU1Zhc3QgPSBITVNWYXN0O1xyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBvbihldmVudDogc3RyaW5nLCBjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRTREtWZXJzaW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldFJlcXVlc3RPcHRpb25zKCk6IFByb21pc2U8SE1TUmVxdWVzdE9wdGlvbnM+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0UmVxdWVzdE9wdGlvbnMocmVxdWVzdE9wdGlvbnM6IEhNU1JlcXVlc3RPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldENvbnNlbnQoY29uc2VudDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEFwcEFjdGl2YXRlU3R5bGUoKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QXBwQWN0aXZhdGVTdHlsZShzdHlsZTpudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QXBwSW5zdGFsbGVkTm90aWZ5KHN0YXR1czpib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzQXBwSW5zdGFsbGVkTm90aWZ5KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBhZGRUZXN0RGV2aWNlSWQodGVzdERldmljZUlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0VGVzdERldmljZUlkKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldFVuZGVyQWdlT2ZQcm9taXNlKHVuZGVyQWdlT2ZQcm9taXNlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldENvbnNlbnRTdGF0dXMoY29uc2VudFN0YXR1czogQ29uc2VudFN0YXR1cyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXREZWJ1Z05lZWRDb25zZW50KGRlYnVnTmVlZENvbnNlbnQ6IERlYnVnTmVlZENvbnNlbnQpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZXF1ZXN0Q29uc2VudFVwZGF0ZSgpOiBQcm9taXNlPENvbnNlbnRVcGRhdGVSZXN1bHQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgdmVyaWZ5QWRJZChhZElkOiBzdHJpbmcsIGlzTGltaXRBZFRyYWNraW5nOiBib29sZWFuKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEFkdmVydGlzaW5nSWRJbmZvKCk6IFByb21pc2U8T2FpZFJlc3VsdD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZWZlcnJlckNsaWVudFN0YXJ0Q29ubmVjdGlvbihpc1Rlc3Q/OiBib29sZWFuKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVmZXJyZXJDbGllbnRFbmRDb25uZWN0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZWZlcnJlckNsaWVudElzUmVhZHkoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEluc3RhbGxSZWZlcnJlcihpbnN0YWxsQ2hhbm5lbD86c3RyaW5nKTogUHJvbWlzZTxSZWZlcnJlckRldGFpbHM+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaW5pdFZhc3QodmFzdFNka0NvbmZpZ3VyYXRpb246VmFzdFNka0NvbmZpZ3VyYXRpb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0VmFzdFNka0NvbmZpZ3VyYXRpb24oKTogUHJvbWlzZTxWYXN0U2RrQ29uZmlndXJhdGlvbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICB1cGRhdGVTZGtTZXJ2ZXJDb25maWcoc2xvdElkOnN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICB1c2VyQWNjZXB0QWRMaWNlbnNlKGlzQWNjZXB0TGljZW5zZTpib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEV2ZW50UHJvY2Vzc29yKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0Fkc1wiLFxyXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1hZHNcIixcclxuICAgIHBsdWdpblJlZjogXCJITVNBZHMuSE1TQmFubmVyQWRcIixcclxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxyXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNCYW5uZXJBZCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBvbihldmVudE5hbWU6IEJhbm5lckFkRXZlbnRzLCBjYWxsYmFjazogKHJlc3VsdD86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBhc3luYyBjcmVhdGUoZGl2SWQ6IHN0cmluZywgYm91bmRzPzogTGF5b3V0Qm91bmRzKTogUHJvbWlzZTxITVNCYW5uZXJBZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzY3JvbGwoKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEFkSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QWRJZChhZElkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0QmFubmVyQWRTaXplKCk6IFByb21pc2U8QWRTaXplPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldEJhbm5lckFkU2l6ZShiYW5uZXJBZFNpemU6IEJhbm5lckFkU2l6ZSB8IEFkU2l6ZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRCYWNrZ3JvdW5kQ29sb3IoYmdDb2xvcjogQ29sb3IpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QmFubmVyUmVmcmVzaChiYW5uZXJSZWZyZXNoOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QWRMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNMb2FkaW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBsb2FkQWQoYWRQYXJhbT86IEFkUGFyYW0pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcGF1c2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHJlc3VtZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0SGVpZ2h0KCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEhlaWdodFB4KCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldFdpZHRoKCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldFdpZHRoUHgoKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNBdXRvSGVpZ2h0U2l6ZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNEeW5hbWljU2l6ZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNGdWxsV2lkdGhTaXplKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRDdXJyZW50RGlyZWN0aW9uQmFubmVyU2l6ZSh3aWR0aDogbnVtYmVyKTogUHJvbWlzZTxBZFNpemU+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0TGFuZHNjYXBlQmFubmVyU2l6ZSh3aWR0aDogbnVtYmVyKTogUHJvbWlzZTxBZFNpemU+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0UG9ydHJhaXRCYW5uZXJTaXplKHdpZHRoOiBudW1iZXIpOiBQcm9taXNlPEFkU2l6ZT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0Fkc1wiLFxyXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1hZHNcIixcclxuICAgIHBsdWdpblJlZjogXCJITVNBZHMuSE1TSW50ZXJzdGl0aWFsQWRcIixcclxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxyXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNJbnRlcnN0aXRpYWxBZCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBvbihcclxuICAgICAgICBldmVudE5hbWU6IEludGVyc3RpdGlhbEFkRXZlbnRzLFxyXG4gICAgICAgIGNhbGxiYWNrOiAocmVzdWx0PzogYW55KSA9PiB2b2lkXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgYXN5bmMgY3JlYXRlKHVzZUFjdGl2aXR5OiBib29sZWFuKTogUHJvbWlzZTxITVNJbnRlcnN0aXRpYWxBZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzY3JvbGwoKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNob3coKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzTG9hZGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0xvYWRpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGxvYWRBZChhZFBhcmFtPzogQWRQYXJhbSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRBZElkKGFkSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRBZElkKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldEFkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldFJld2FyZEFkTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHZpZGVvT3BlcmF0b3JHZXRBc3BlY3RSYXRpbygpOiBQcm9taXNlPFZpZGVvT3BlcmF0b3JBc3BlY3RSYXRpbz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICB2aWRlb09wZXJhdG9ySGFzVmlkZW8oKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHZpZGVvT3BlcmF0b3JJc0N1c3RvbWl6ZU9wZXJhdGVFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICB2aWRlb09wZXJhdG9ySXNNdXRlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgdmlkZW9PcGVyYXRvck11dGUobXV0ZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICB2aWRlb09wZXJhdG9yUGF1c2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHZpZGVvT3BlcmF0b3JQbGF5KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICB2aWRlb09wZXJhdG9yU3RvcCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gICAgcGx1Z2luTmFtZTogXCJITVNBZHNcIixcclxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzXCIsXHJcbiAgICBwbHVnaW5SZWY6IFwiSE1TQWRzLkhNU05hdGl2ZUFkXCIsXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcclxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TTmF0aXZlQWQgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgb24oZXZlbnROYW1lOiBOYXRpdmVBZEV2ZW50cywgY2FsbGJhY2s6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgYXN5bmMgY3JlYXRlKFxyXG4gICAgICAgIG9wdGlvbnM6IE5hdGl2ZUFkT3B0aW9ucyxcclxuICAgICAgICBib3VuZHM/OiBMYXlvdXRCb3VuZHNcclxuICAgICk6IFByb21pc2U8SE1TTmF0aXZlQWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgbG9hZEFkKG9wdGlvbnM/OiBOYXRpdmVBZExvYWRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNob3coKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzTG9hZGluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZGlzbGlrZUFkKGRpc2xpa2VSZWFzb246IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRBbGxvd0N1c3RvbUNsaWNrKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRBZFNvdXJjZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXREZXNjcmlwdGlvbigpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRDYWxsVG9BY3Rpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0RGlzbGlrZUFkUmVhc29ucygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzQ3VzdG9tQ2xpY2tBbGxvd2VkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0N1c3RvbURpc2xpa2VUaGlzQWRFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZWNvcmRDbGlja0V2ZW50KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZWNvcmRJbXByZXNzaW9uRXZlbnQoaW1wcmVzc2lvbkRhdGE6IGFueSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRVbmlxdWVJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXREaXNsaWtlQWRMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ290b1doeVRoaXNBZFBhZ2UodXNlVmlldzogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRBZFNpZ24oKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0VGl0bGUoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0V2h5VGhpc0FkKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHJlY29yZFNob3dTdGFydEV2ZW50KHNob3dTdGFydERhdGE6IGFueSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBvbkFkQ2xvc2Uoa2V5d29yZHM6IHN0cmluZ1tdKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldE5hdGl2ZUFkQ29uZmlndXJhdGlvbigpOiBQcm9taXNlPE5hdGl2ZUFkQ29uZmlndXJhdGlvbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRPbkRvd25sb2FkU3RhdHVzQ2hhbmdlZExpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRPbk5vbldpZmlEb3dubG9hZExpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRTaG93UGVybWlzc2lvbkRpYWxvZyhzaG93OmJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QWxsb3dlZE5vbldpZmlOZXR3b3JrKGFsbG93ZWQ6Ym9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBjYW5jZWwoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGNvbnRpbnVlRG93bmxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNob3dBZHZlcnRpc2VySW5mb0RpYWxvZygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaGlkZUFkdmVydGlzZXJJbmZvRGlhbG9nKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBoYXNBZHZlcnRpc2VySW5mbygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0QWR2ZXJ0aXNlckluZm8oKTogUHJvbWlzZTxBZHZlcnRpc2VySW5mb1tdPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEFwcEluZm8oKTogUHJvbWlzZTxBcHBJbmZvPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldFByb21vdGVJbmZvKCk6IFByb21pc2U8UHJvbW90ZUluZm8+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2hvd0FwcERldGFpbFBhZ2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNob3dQcml2YWN5UG9saWN5KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzaG93UGVybWlzc2lvblBhZ2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzVHJhbnNwYXJlbmN5T3BlbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0VHJhbnNwYXJlbmN5VHBsVXJsKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEludGVyQWN0aW9uVHlwZSgpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0Fkc1wiLFxyXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1hZHNcIixcclxuICAgIHBsdWdpblJlZjogXCJITVNBZHMuSE1TUmV3YXJkQWRcIixcclxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxyXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNSZXdhcmRBZCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBvbihldmVudE5hbWU6IFJld2FyZEFkRXZlbnRzLCBjYWxsYmFjazogKHJlc3VsdD86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBhc3luYyBjcmVhdGUoYWRJZDogc3RyaW5nKTogUHJvbWlzZTxITVNSZXdhcmRBZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzaG93KHVzZUFjdGl2aXR5OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHJlc3VtZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcGF1c2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGRlc3Ryb3koKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGxvYWRBZFdpdGhBZElkKGFkSWQ6c3RyaW5nLGFkUGFyYW0/OkFkUGFyYW0pOiBQcm9taXNlPHZvaWQ+e1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgbG9hZEFkKGFkUGFyYW0/OiBBZFBhcmFtKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzTG9hZGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXREYXRhKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldFVzZXJJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRSZXdhcmQoKTogUHJvbWlzZTxITVNSZXdhcmQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0RGF0YShkYXRhOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0SW1tZXJzaXZlKGltbWVyc2l2ZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRVc2VySWQodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0UmV3YXJkVmVyaWZ5Q29uZmlnKGNvbmZpZzogSE1TUmV3YXJkVmVyaWZ5Q29uZmlnKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldFJld2FyZFZlcmlmeUNvbmZpZygpOiBQcm9taXNlPEhNU1Jld2FyZFZlcmlmeUNvbmZpZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRPbk1ldGFkYXRhQ2hhbmdlZExpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRSZXdhcmRBZExpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRNb2JpbGVEYXRhQWxlcnRTd2l0Y2goYWxlcnRTd2l0Y2g6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gICAgcGx1Z2luTmFtZTogXCJITVNBZHNcIixcclxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzXCIsXHJcbiAgICBwbHVnaW5SZWY6IFwiSE1TQWRzLkhNU1JvbGxBZFwiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU1JvbGxBZCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBvbihldmVudE5hbWU6IFJvbGxBZEV2ZW50cywgY2FsbGJhY2s6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgYXN5bmMgY3JlYXRlKFxyXG4gICAgICAgIHBhcmFtczogUm9sbEFkTG9hZGVyUGFyYW1zLFxyXG4gICAgICAgIGRpdklkOiBzdHJpbmcsXHJcbiAgICAgICAgYm91bmRzPzogTGF5b3V0Qm91bmRzXHJcbiAgICApOiBQcm9taXNlPEhNU1JvbGxBZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzY3JvbGwoKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGxvYWRBZChvcHRpb25zOiBSb2xsQWRMb2FkT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0xvYWRpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGRlc3Ryb3koKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHBhdXNlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc1BsYXlpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIG11dGUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHVubXV0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgb25DbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcGxheSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc3RvcCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVtb3ZlSW5zdHJlYW1NZWRpYUNoYW5nZUxpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZW1vdmVNZWRpYU11dGVMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVtb3ZlSW5zdHJlYW1NZWRpYVN0YXRlTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldEluc3RyZWFtQWRzKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRJbnN0cmVhbU1lZGlhQ2hhbmdlTGlzdGVuZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldE1lZGlhTXV0ZUxpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRJbnN0cmVhbU1lZGlhU3RhdGVMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0T25JbnN0cmVhbUFkQ2xpY2tMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0QWRTb3VyY2UoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0RHVyYXRpb24oKTogUHJvbWlzZTxEdXJhdGlvbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRXaHlUaGlzQWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0QWRTaWduKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzQ2xpY2tlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNFeHBpcmVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0ltYWdlQWQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzU2hvd24oKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzVmlkZW9BZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0Q2FsbFRvQWN0aW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNob3dBZHZlcnRpc2VySW5mb0RpYWxvZygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaGlkZUFkdmVydGlzZXJJbmZvRGlhbG9nKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBoYXNBZHZlcnRpc2VySW5mbygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0QWR2ZXJ0aXNlckluZm8oKTogUHJvbWlzZTxBZHZlcnRpc2VySW5mb1tdPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzVHJhbnNwYXJlbmN5T3BlbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0VHJhbnNwYXJlbmN5VHBsVXJsKCk6IFByb21pc2U8U3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNob3dUcmFuc3BhcmVuY3lEaWFsb2coKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGhpZGVUcmFuc3BhcmVuY3lEaWFsb2coKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6IFwiSE1TQWRzXCIsXHJcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc1wiLFxyXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkcy5ITVNTcGxhc2hBZFwiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU1NwbGFzaEFkIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIG9uKGV2ZW50TmFtZTogU3BsYXNoQWRFdmVudHMsIGNhbGxiYWNrOiAocmVzdWx0PzogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGFzeW5jIGNyZWF0ZSgpOiBQcm9taXNlPEhNU1NwbGFzaEFkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldExvZ28oZmlsZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldFdpZGVTbG9nYW5SZXNJZCh3aWRlU2xvZ2FuUmVzSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRTbG9nYW5SZXNJZChzbG9nYW5SZXNJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGxvYWQob3B0aW9uczogU3BsYXNoQWRMb2FkT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBwcmVsb2FkQWQob3B0aW9uczogU3BsYXNoQWRMb2FkT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBkZXN0cm95VmlldygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcGF1c2VWaWV3KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZXN1bWVWaWV3KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0xvYWRpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGlzTG9hZGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRBZERpc3BsYXlMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QXVkaW9Gb2N1c1R5cGUoYXVkaW9Gb2N1c1R5cGU6IEF1ZGlvRm9jdXNUeXBlKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6IFwiSE1TQWRzXCIsXHJcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWFkc1wiLFxyXG4gICAgcGx1Z2luUmVmOiBcIkhNU0Fkcy5ITVNWYXN0XCIsXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcclxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TVmFzdCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBvbihldmVudE5hbWU6IFZhc3RFdmVudHMsIGNhbGxiYWNrOiAocmVzdWx0PzogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGFzeW5jIGNyZWF0ZShcclxuICAgICAgICBkaXZJZDogc3RyaW5nLFxyXG4gICAgICAgIGJvdW5kcz86IExheW91dEJvdW5kc1xyXG4gICAgKTogUHJvbWlzZTxITVNWYXN0PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNjcm9sbCgpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgbG9hZEFkKG9wdGlvbnM6IFZhc3RMb2FkT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZXN1bWUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHBhdXNlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZWxlYXNlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICB0b2dnbGVNdXRlU3RhdGUoaXNNdXRlOmJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHN0YXJ0T3JQYXVzZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG59ICAgIFxyXG4iXX0=