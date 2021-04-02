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
///////////////////////////////////////////////////////////////////////////
// Constants
///////////////////////////////////////////////////////////////////////////

export enum AdParamErrorCodes {
  AD_PARAM_INNER = 0,
  AD_PARAM_INVALID_REQUEST = 1,
  AD_PARAM_NETWORK_ERROR = 2,
  AD_PARAM_NO_AD = 3,
  AD_PARAM_AD_LOADING = 4,
  AD_PARAM_LOW_API = 5,
  AD_PARAM_BANNER_AD_EXPIRE = 6,
  AD_PARAM_BANNER_AD_CANCEL = 7,
  AD_PARAM_HMS_NOT_SUPPORT_SET_APP = 8,
}

export enum RewardAdStatusErrorCodes{
  REWARD_AD_STATUS_INTERNAL = 0,
  REWARD_AD_STATUS_REUSED = 1,
  REWARD_AD_STATUS_NOT_LOADED = 2, 
  REWARD_AD_STATUS_BACKGROUND = 3,
}

export enum AdContentClassification {
  AD_CONTENT_CLASSIFICATION_A = "A",
  AD_CONTENT_CLASSIFICATION_PI = "PI",
  AD_CONTENT_CLASSIFICATION_UNKOWN = "",
  AD_CONTENT_CLASSIFICATION_J = "J",
  AD_CONTENT_CLASSIFICATION_W = "W",
}

export enum Gender {
  FEMALE = 2,
  MALE = 1,
  UNKNOWN = 0
}

export enum NonPersonalizedAd {
  ALLOW_ALL = 0,
  ALLOW_NON_PERSONALIZED = 1,
}

export enum ChildProtection {
  TAG_FOR_CHILD_PROTECTION_UNSPECIFIED = -1,
  TAG_FOR_CHILD_PROTECTION_FALSE = 0,
  TAG_FOR_CHILD_PROTECTION_TRUE = 1,
}

export enum UnderAgeOfPromise {
  PROMISE_UNSPECIFIED = -1,
  PROMISE_FALSE = 0,
  PROMISE_TRUE = 1
}

export enum BannerAdSize {
  BANNER_SIZE_360_57 = "BANNER_SIZE_360_57",
  BANNER_SIZE_360_144 = "BANNER_SIZE_360_144",
  BANNER_SIZE_160_600 = "BANNER_SIZE_160_600",
  BANNER_SIZE_300_250 = "BANNER_SIZE_300_250",
  BANNER_SIZE_320_100 = "BANNER_SIZE_320_100",
  BANNER_SIZE_320_50 = "BANNER_SIZE_320_50",
  BANNER_SIZE_468_60 = "BANNER_SIZE_468_60",
  BANNER_SIZE_728_90 = "BANNER_SIZE_728_90",
  BANNER_SIZE_DYNAMIC = "BANNER_SIZE_DYNAMIC",
  BANNER_SIZE_INVALID = "BANNER_SIZE_INVALID",
  BANNER_SIZE_SMART = "BANNER_SIZE_SMART"
}

export enum HMSScreenOrientation {
  SCREEN_ORIENTATION_LANDSCAPE = 0,
  SCREEN_ORIENTATION_UNSPECIFIED = -1,
  SCREEN_ORIENTATION_PORTRAIT = 1,
  SCREEN_ORIENTATION_USER = 2,
  SCREEN_ORIENTATION_BEHIND = 3,
  SCREEN_ORIENTATION_SENSOR = 4,
  SCREEN_ORIENTATION_NOSENSOR = 5,
  SCREEN_ORIENTATION_SENSOR_LANDSCAPE = 6,
  SCREEN_ORIENTATION_SENSOR_PORTRAIT = 7,
  SCREEN_ORIENTATION_REVERSE_LANDSCAPE = 8,
  SCREEN_ORIENTATION_REVERSE_PORTRAIT = 9,
  SCREEN_ORIENTATION_FULL_SENSOR = 10,
  SCREEN_ORIENTATION_USER_LANDSCAPE = 11,
  SCREEN_ORIENTATION_USER_PORTRAIT = 12,
  SCREEN_ORIENTATION_FULL_USER = 13,
  SCREEN_ORIENTATION_LOCKED = 14,
}

export enum DebugNeedConsent {
  CONSENT_DEBUG_DISABLED = 0,
  CONSENT_DEBUG_NEED_CONSENT = 1,
  CONSENT_DEBUG_NOT_NEED_CONSENT = 2
}

export enum ConsentStatus {
  CONSENT_PERSONALIZED = 0,
  CONSENT_NON_PERSONALIZED = 1,
  CONSENT_UNKNOWN = 2
}

export enum AudioFocusType {
  GAIN_AUDIO_FOCUS_ALL = 0,
  NOT_GAIN_AUDIO_FOCUS_WHEN_MUTE = 1,
  NOT_GAIN_AUDIO_FOCUS_ALL = 2
}

export enum MediaAspect {
  ASPECT_ANY = 1,
  ASPECT_CUSTOM_SIZE = -1,
  ASPECT_LANDSCAPE = 2,
  ASPECT_PORTRAIT = 3,
  ASPECT_SQUARE = 4,
  ASPECT_UNKNOWN = 0
}

export enum ChoicesPosition {
  BOTTOM_LEFT = 3,
  BOTTOM_RIGHT = 2,
  INVISIBLE = 4,
  TOP_LEFT = 0,
  TOP_RIGHT = 1
}

export enum MediaDirection {
  ANY = 0,
  LANDSCAPE = 2,
  PORTRAIT = 1
}

export enum NativeAdTemplate {
  NATIVE_AD_SMALL_TEMPLATE = "NATIVE_AD_SMALL_TEMPLATE",
  NATIVE_AD_FULL_TEMPLATE = "NATIVE_AD_FULL_TEMPLATE",
  NATIVE_AD_BANNER_TEMPLATE = "NATIVE_AD_BANNER_TEMPLATE",
  NATIVE_AD_VIDEO_TEMPLATE = "NATIVE_AD_VIDEO_TEMPLATE"
}

export enum Color {
  RED = "RED",
  DKGRAY = "DKGRAY",
  GRAY = "GRAY",
  WHITE = "WHITE",
  BLUE = "BLUE",
  BLACK = "BLACK",
  LTGRAY = "LTGRAY",
  MAGENTA = "MAGENTA",
  YELLOW = "YELLOW",
  CYAN = "CYAN",
  GREEN = "GREEN",
  TRANSPARENT = "TRANSPARENT"
}

export enum InstallReferrerResponses {
  SERVICE_DISCONNECTED = -1,
  DEVELOPER_ERROR = 3,
  SERVICE_UNAVAILABLE = 1,
  OK = 0,
  FEATURE_NOT_SUPPORTED = 2
}

export enum Anchor {
  TOP = "top",
  BOTTOM = "bottom",
  INVISIBLE = "invisible"
}
///////////////////////////////////////////////
export enum BannerAdEvents {
  BANNER_AD_CLOSED = 'banner_ad_closed',
  BANNER_AD_FAILED = 'banner_ad_failed',
  BANNER_AD_LEAVE = 'banner_ad_leave',
  BANNER_AD_OPENED = 'banner_ad_opened',
  BANNER_AD_LOADED = 'banner_ad_loaded',
  BANNER_AD_CLICKED = 'banner_ad_clicked',
  BANNER_AD_IMPRESSION = 'banner_ad_impression',
}

export enum InterstitialAdEvents {
  INTERSTITIAL_AD_CLOSED = 'interstitial_ad_closed',
  INTERSTITIAL_AD_FAILED = 'interstitial_ad_failed',
  INTERSTITIAL_AD_LEAVE = 'interstitial_ad_leave',
  INTERSTITIAL_AD_OPENED = 'interstitial_ad_opened',
  INTERSTITIAL_AD_LOADED = 'interstitial_ad_loaded',
  INTERSTITIAL_AD_CLICKED = 'interstitial_ad_clicked',
  INTERSTITIAL_AD_IMPRESSION = 'interstitial_ad_impression',
  INTERSTITIAL_AD_REWARDED = 'interstitial_ad_rewarded',
  INTERSTITIAL_REWARD_AD_CLOSED = 'interstitial_reward_ad_closed',
  INTERSTITIAL_REWARD_AD_FAILED_TO_LOAD = 'interstitial_reward_ad_failed_to_load',
  INTERSTITIAL_REWARD_AD_LEFT_APP = 'interstitial_reward_ad_left_app',
  INTERSTITIAL_REWARD_AD_LOADED = 'interstitial_reward_ad_loaded',
  INTERSTITIAL_REWARD_AD_OPENED = 'interstitial_reward_ad_opened',
  INTERSTITIAL_REWARD_AD_COMPLETED = 'interstitial_reward_ad_completed',
  INTERSTITIAL_REWARD_AD_STARTED = 'interstitial_reward_ad_started'
}

export enum SplashAdEvents {
  SPLASH_AD_FAILED_TO_LOAD = 'splash_ad_failed_to_load',
  SPLASH_AD_LOADED = 'splash_ad_loaded',
  SPLASH_AD_DISMISSED = 'splash_ad_dismissed',
  SPLASH_AD_SHOWED = 'splash_ad_showed',
  SPLASH_AD_CLICK = 'splash_ad_click'

}

export enum RollAdEvents {
  ROLL_AD_LOAD_FAILED = 'roll_ad_load_failed',
  ROLL_AD_LOADED = 'roll_ad_loaded',
  ROLL_AD_MEDIA_CHANGED = 'roll_ad_media_changed',
  ROLL_AD_CLICKED = 'roll_ad_clicked',
  ROLL_AD_MEDIA_PROGRESS = 'roll_ad_media_progress',
  ROLL_AD_MEDIA_START = 'roll_ad_media_start',
  ROLL_AD_MEDIA_PAUSE = 'roll_ad_media_pause',
  ROLL_AD_MEDIA_STOP = 'roll_ad_media_stop',
  ROLL_AD_MEDIA_COMPLETION = 'roll_ad_media_completion',
  ROLL_AD_MEDIA_ERROR = 'roll_ad_media_error',
  ROLL_AD_MEDIA_UNMUTE = 'roll_ad_media_unmute',
  ROLL_AD_MEDIA_MUTE = 'roll_ad_media_mute',
  ROLL_AD_WHY_THIS_AD = 'roll_ad_why_this_ad',
}

export enum RewardAdEvents {
  REWARD_METADATA_CHANGED = 'reward_metadata_changed',

  REWARD_AD_FAILED_TO_LOAD_LOAD = 'reward_ad_failed_to_load_load',
  REWARDED_LOADED = 'rewarded_loaded',

  REWARDED_STATUS = 'rewarded_status',
  REWARD_AD_CLOSED_STATUS = 'reward_ad_closed_status',
  REWARD_AD_OPENED_STATUS = 'reward_ad_opened_status',
  REWARD_AD_FAILED_TO_SHOW = 'reward_ad_failed_to_show',

  REWARDED = 'rewarded',
  REWARD_AD_CLOSED = 'reward_ad_closed',
  REWARD_AD_FAILED_TO_LOAD = 'reward_ad_failed_to_load',
  REWARD_AD_LEFT_APP = 'reward_ad_left_app',
  REWARD_AD_LOADED = 'reward_ad_loaded',
  REWARD_AD_OPENED = 'reward_ad_opened',
  REWARD_AD_COMPLETED = 'reward_ad_completed',
  REWARD_AD_STARTED = 'reward_ad_started'
}

export enum NativeAdEvents {
  NATIVE_AD_DISLIKED = 'native_ad_disliked',
  NATIVE_AD_LOADED_LOAD = 'native_ad_loaded_load',
  NATIVE_AD_CLOSED = 'native_ad_closed',
  NATIVE_AD_FAILED = 'native_ad_failed',
  NATIVE_AD_LEAVE = 'native_ad_leave',
  NATIVE_AD_OPENED = 'native_ad_opened',
  NATIVE_AD_LOADED = 'native_ad_loaded',
  NATIVE_AD_CLICKED = 'native_ad_clicked',
  NATIVE_AD_IMPRESSION = 'native_ad_impression',
  VIDEO_OPERATOR_VIDEO_START = 'video_operator_video_start',
  VIDEO_OPERATOR_VIDEO_PLAY = 'video_operator_video_play',
  VIDEO_OPERATOR_VIDEO_PAUSE = 'video_operator_video_pause',
  VIDEO_OPERATOR_VIDEO_END = 'video_operator_video_end',
  VIDEO_OPERATOR_VIDEO_MUTE = 'video_operator_video_mute',
}

