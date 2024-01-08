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

import { Injectable } from "@angular/core";
import {
    Plugin,
    Cordova,
    CordovaProperty,
    IonicNativePlugin,
} from "@ionic-native/core";

///////////////////////////////////////////////////////////////
// Constants
///////////////////////////////////////////////////////////////

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
export enum RewardAdStatusErrorCodes {
    REWARD_AD_STATUS_INTERNAL = 0,
    REWARD_AD_STATUS_REUSED = 1,
    REWARD_AD_STATUS_NOT_LOADED = 2,
    REWARD_AD_STATUS_BACKGROUND = 3,
}
export enum AdContentClassification {
    AD_CONTENT_CLASSIFICATION_A = "A",
    AD_CONTENT_CLASSIFICATION_PI = "PI",
    AD_CONTENT_CLASSIFICATION_UNKNOWN = "",
    AD_CONTENT_CLASSIFICATION_J = "J",
    AD_CONTENT_CLASSIFICATION_W = "W",
}
export enum Gender {
    FEMALE = 2,
    MALE = 1,
    UNKNOWN = 0,
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
    PROMISE_TRUE = 1,
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
    BANNER_SIZE_SMART = "BANNER_SIZE_SMART",
    BANNER_SIZE_ADVANCED = "BANNER_SIZE_ADVANCED",
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
    CONSENT_DEBUG_NOT_NEED_CONSENT = 2,
}
export enum ConsentStatus {
    CONSENT_PERSONALIZED = 0,
    CONSENT_NON_PERSONALIZED = 1,
    CONSENT_UNKNOWN = 2,
}
export enum AudioFocusType {
    GAIN_AUDIO_FOCUS_ALL = 0,
    NOT_GAIN_AUDIO_FOCUS_WHEN_MUTE = 1,
    NOT_GAIN_AUDIO_FOCUS_ALL = 2,
}
export enum MediaAspect {
    ASPECT_ANY = 1,
    ASPECT_CUSTOM_SIZE = -1,
    ASPECT_LANDSCAPE = 2,
    ASPECT_PORTRAIT = 3,
    ASPECT_SQUARE = 4,
    ASPECT_UNKNOWN = 0,
}
export enum ChoicesPosition {
    BOTTOM_LEFT = 3,
    BOTTOM_RIGHT = 2,
    INVISIBLE = 4,
    TOP_LEFT = 0,
    TOP_RIGHT = 1,
}
export enum MediaDirection {
    ANY = 0,
    LANDSCAPE = 2,
    PORTRAIT = 1,
}
export enum NativeAdTemplate {
    NATIVE_AD_SMALL_TEMPLATE = "NATIVE_AD_SMALL_TEMPLATE",
    NATIVE_AD_FULL_TEMPLATE = "NATIVE_AD_FULL_TEMPLATE",
    NATIVE_AD_BANNER_TEMPLATE = "NATIVE_AD_BANNER_TEMPLATE",
    NATIVE_AD_VIDEO_TEMPLATE = "NATIVE_AD_VIDEO_TEMPLATE",
    NATIVE_AD_WITH_APP_DOWNLOAD_BTN_TEMPLATE = "NATIVE_AD_WITH_APP_DOWNLOAD_BTN_TEMPLATE"
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
    TRANSPARENT = "TRANSPARENT",
}
export enum InstallReferrerResponses {
    SERVICE_DISCONNECTED = -1,
    DEVELOPER_ERROR = 3,
    SERVICE_UNAVAILABLE = 1,
    OK = 0,
    FEATURE_NOT_SUPPORTED = 2,
}
export enum Anchor {
    TOP = "top",
    BOTTOM = "bottom",
    INVISIBLE = "invisible",
}
export enum BannerAdEvents {
    BANNER_AD_CLOSED = "banner_ad_closed",
    BANNER_AD_FAILED = "banner_ad_failed",
    BANNER_AD_LEAVE = "banner_ad_leave",
    BANNER_AD_OPENED = "banner_ad_opened",
    BANNER_AD_LOADED = "banner_ad_loaded",
    BANNER_AD_CLICKED = "banner_ad_clicked",
    BANNER_AD_IMPRESSION = "banner_ad_impression",
}
export enum InterstitialAdEvents {
    INTERSTITIAL_AD_CLOSED = "interstitial_ad_closed",
    INTERSTITIAL_AD_FAILED = "interstitial_ad_failed",
    INTERSTITIAL_AD_LEAVE = "interstitial_ad_leave",
    INTERSTITIAL_AD_OPENED = "interstitial_ad_opened",
    INTERSTITIAL_AD_LOADED = "interstitial_ad_loaded",
    INTERSTITIAL_AD_CLICKED = "interstitial_ad_clicked",
    INTERSTITIAL_AD_IMPRESSION = "interstitial_ad_impression",
    INTERSTITIAL_AD_REWARDED = "interstitial_ad_rewarded",
    INTERSTITIAL_REWARD_AD_CLOSED = "interstitial_reward_ad_closed",
    INTERSTITIAL_REWARD_AD_FAILED_TO_LOAD = "interstitial_reward_ad_failed_to_load",
    INTERSTITIAL_REWARD_AD_LEFT_APP = "interstitial_reward_ad_left_app",
    INTERSTITIAL_REWARD_AD_LOADED = "interstitial_reward_ad_loaded",
    INTERSTITIAL_REWARD_AD_OPENED = "interstitial_reward_ad_opened",
    INTERSTITIAL_REWARD_AD_COMPLETED = "interstitial_reward_ad_completed",
    INTERSTITIAL_REWARD_AD_STARTED = "interstitial_reward_ad_started",
}
export enum SplashAdEvents {
    SPLASH_AD_FAILED_TO_LOAD = "splash_ad_failed_to_load",
    SPLASH_AD_LOADED = "splash_ad_loaded",
    SPLASH_AD_DISMISSED = "splash_ad_dismissed",
    SPLASH_AD_SHOWED = "splash_ad_showed",
    SPLASH_AD_CLICK = "splash_ad_click",
}
export enum RollAdEvents {
    ROLL_AD_LOAD_FAILED = "roll_ad_load_failed",
    ROLL_AD_LOADED = "roll_ad_loaded",
    ROLL_AD_MEDIA_CHANGED = "roll_ad_media_changed",
    ROLL_AD_CLICKED = "roll_ad_clicked",
    ROLL_AD_MEDIA_PROGRESS = "roll_ad_media_progress",
    ROLL_AD_MEDIA_START = "roll_ad_media_start",
    ROLL_AD_MEDIA_PAUSE = "roll_ad_media_pause",
    ROLL_AD_MEDIA_STOP = "roll_ad_media_stop",
    ROLL_AD_MEDIA_COMPLETION = "roll_ad_media_completion",
    ROLL_AD_MEDIA_ERROR = "roll_ad_media_error",
    ROLL_AD_MEDIA_UNMUTE = "roll_ad_media_unmute",
    ROLL_AD_MEDIA_MUTE = "roll_ad_media_mute",
    ROLL_AD_WHY_THIS_AD = "roll_ad_why_this_ad",
}
export enum RewardAdEvents {
    REWARD_METADATA_CHANGED = "reward_metadata_changed",
    REWARD_AD_FAILED_TO_LOAD_LOAD = "reward_ad_failed_to_load_load",
    REWARDED_LOADED = "rewarded_loaded",
    REWARDED_STATUS = "rewarded_status",
    REWARD_AD_CLOSED_STATUS = "reward_ad_closed_status",
    REWARD_AD_OPENED_STATUS = "reward_ad_opened_status",
    REWARD_AD_FAILED_TO_SHOW = "reward_ad_failed_to_show",
    REWARDED = "rewarded",
    REWARD_AD_CLOSED = "reward_ad_closed",
    REWARD_AD_FAILED_TO_LOAD = "reward_ad_failed_to_load",
    REWARD_AD_LOADED = "reward_ad_loaded",
    REWARD_AD_OPENED = "reward_ad_opened",
}

export enum DetailedCreativeType {
  BIG_IMG = 901,
  VIDEO = 903,
  THREE_IMG = 904,
  SMALL_IMG = 905,
  SINGLE_IMG = 909,
  SHORT_TEXT = 913,
  LONG_TEXT = 914
}

export enum NativeAdEvents {
    NATIVE_AD_DISLIKED = "native_ad_disliked",
    NATIVE_AD_LOADED_LOAD = "native_ad_loaded_load",
    NATIVE_AD_CLOSED = "native_ad_closed",
    NATIVE_AD_FAILED = "native_ad_failed",
    NATIVE_AD_LEAVE = "native_ad_leave",
    NATIVE_AD_OPENED = "native_ad_opened",
    NATIVE_AD_LOADED = "native_ad_loaded",
    NATIVE_AD_CLICKED = "native_ad_clicked",
    NATIVE_AD_IMPRESSION = "native_ad_impression",
    VIDEO_OPERATOR_VIDEO_START = "video_operator_video_start",
    VIDEO_OPERATOR_VIDEO_PLAY = "video_operator_video_play",
    VIDEO_OPERATOR_VIDEO_PAUSE = "video_operator_video_pause",
    VIDEO_OPERATOR_VIDEO_END = "video_operator_video_end",
    VIDEO_OPERATOR_VIDEO_MUTE = "video_operator_video_mute",
    APP_DOWNLOAD_STATUS_CHANGED ='app_download_status_changed',
    APP_DOWNLOAD_NON_WIFI_DOWNLOAD = 'app_download_non_wifi_download'
}

export enum VastEvents {
    VAST_LOAD_SUCCESS = 'vast_load_success',
    VAST_LOAD_FAILED = 'vast_load_failed',
    VAST_PLAY_STATE_CHANGED = 'vast_play_state_changed',
    VAST_VOLUME_CHANGED = 'vast_volume_changed',
    VAST_SCREEN_VIEW_CHANGED = 'vast_screen_view_changed',
    VAST_PROGRESS_CHANGED = 'vast_progress_changed',
    VAST_ON_SUCCESS = 'vast_on_success',
    VAST_ON_FAILED = 'vast_on_failed',
    VAST_AD_READY = 'vast_ad_ready',
    VAST_AD_FINISH = 'vast_ad_finish',
    VAST_BUFFER_START= 'vast_buffer_start',
    VAST_BUFFER_END= 'vast_buffer_end',
}

export enum ActivateStyle { 	
    BOTTOM_BANNER = 1,
    CONFIRM_DIALOG = 2
}
export enum CreativeMatchType {
    EXACT = 0,
    SMART= 1,
    UNKNOWN = 2,
    ANY = 3,
    LANDSCAPE = 4,
    PORTRAIT = 5,
    SQUARE = 6
  
}
export enum AppDownloadStatus {
    DOWNLOAD = "DOWNLOAD",
    WAITING_FOR_WIFI = "WAITING_FOR_WIFI",
    WAITING = "WAITING",
    DOWNLOADING = "DOWNLOADING",
    PAUSE = "PAUSE",
    RESUME = "RESUME",
    DOWNLOADED = "DOWNLOADED",
    DOWNLOADFAILED = "DOWNLOADFAILED",
    INSTALLING = "INSTALLING",
    INSTALL = "INSTALL",
    INSTALLED = "INSTALLED"
  }


///////////////////////////////////////////////////////////////
// Interfaces
///////////////////////////////////////////////////////////////

export interface LayoutBounds {
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    marginBottom?: number;
}
export interface Props {
    x: number;
    y: number;
    width: number;
    height: number;
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    marginBottom?: number;
    pageXOffset?: number;
    pageYOffset?: number;
}
export interface AdParam {
    gender?: Gender;
    adContentClassification?: AdContentClassification;
    tagForUnderAgeOfPromise?: UnderAgeOfPromise;
    tagForChildProtection?: ChildProtection;
    nonPersonalizedAd?: NonPersonalizedAd;
    appCountry?: string;
    appLang?: string;
    countryCode?: string;
    belongCountryCode?: string;
    consent?: string;
    requestLocation?: boolean;
    detailedCreativeType?: DetailedCreativeType[];
    location? :Location,
    contentBundle? : ContentBundle,
}
export interface Location {
    lat: number,
    lng: number
}
export interface ContentBundle{
    channelCategoryCode?: string,
    title?: string,
    tags?: string,
    relatedPeople?: string,
    content?: string,
    contentID?: number,
    category?: string,
    subcategory?: string,
    thirdCategory?: string
}
export interface HMSRequestOptions {
    adContentClassification?: AdContentClassification;
    appLang?: string;
    appCountry?: string;
    tagForChildProtection?: ChildProtection;
    tagForUnderAgeOfPromise?: UnderAgeOfPromise;
    nonPersonalizedAd?: NonPersonalizedAd;
    consent?: string;
    requestLocation?: boolean;
}
export interface HMSReward {
    rewardAmount: number;
    rewardName: string;
}
export interface HMSRewardVerifyConfig {
    data: string;
    userId: string;
}
export interface OaidResult {
    id: string;
    isLimitAdTracingEnabled: boolean;
}
export interface Duration {
    duration: number;
}
export interface RollAdLoaderParams {
    adId: string;
    totalDuration: number;
    maxCount: number;
}
export interface VideoConfiguration {
    audioFocusType?: AudioFocusType;
    clickToFullScreenRequest?: boolean;
    customizeOperateRequested?: boolean;
    isStartMuted?: boolean;
}
export interface NativeAdConfiguration {
    adSize: AdSize;
    choicesPosition?: ChoicesPosition;
    mediaAspect?: MediaAspect;
    mediaDirection?: MediaDirection;
    returnUrlsForImages?: boolean;
    requestCustomDislikeThisAd?: boolean;
    requestMultiImages?: boolean;
    videoConfiguration?: VideoConfiguration;
}

export interface VideoOperatorAspectRatio {
    videoOperatorGetAspectRatio: number;
}

export interface NativeAdLoadOptions {
    adId?: string;
    ad?: AdParam;
    nativeAdOptions?: NativeAdConfiguration;
}
export interface AdSize {
    width: number;
    height: number;
}
export interface NativeAdOptions {
    div: string;
    template?: NativeAdTemplate;
    bg?: Color;
}
export interface RollAdLoadOptions {
    file?: string;
    adParam?: AdParam;
}
export interface ReferrerDetails {
    responseCode?: InstallReferrerResponses;
    installReferrer?: string;
    referrerClickTimestamp?: number;
    installBeginTimestamp?: number;
}
export interface ConsentUpdateResult {
    consentStatus?: ConsentStatus;
    isNeedConsent?: boolean;
    adProviders?: AdProvider[];
}
export interface AdProvider {
    id?: string;
    name?: string;
    privacyPolicyUrl?: string;
    serviceArea?: string;
}
export interface SplashAdLoadOptions {
    adId: string;
    orientation?: HMSScreenOrientation;
    adParam?: AdParam;
    logoAnchor?: Anchor;
}
export interface VastLoadOptions {
    adParam?: VastConfiguration,
    playerConfig?: PlayerConfig,
    isTestAd?: boolean,
    isAdLoadWithAdsData?: boolean,
    isCustomVideoPlayer?: boolean
}
export interface VastConfiguration {
    adId?: string,
    totalDuration?: number,
    creativeMatchStrategy?: CreativeMatchType,
    allowMobileTraffic?: boolean,
    adOrientation?:MediaDirection,
    maxAdPods?: number,
    requestOption?: HMSRequestOptions
}
export interface PlayerConfig {
    isEnableCutout?: boolean,
    isEnablePortrait?: boolean,
    isEnableRotation?: boolean,
    isSkipLinearAd?: boolean,
    isForceMute?:boolean,
    isIndustryIconShow?:boolean
}
export interface VastSdkConfiguration{
    httpCallTimeoutMs:number,
    httpConnectTimeoutMs:number,
    httpKeepAliveDurationMs:number,
    httpReadTimeoutMs:number,
    maxHttpConnections:number,
    maxRedirectWrapperLimit:number,
    isTest:boolean,
    vastEventRetryBatchSize:number,
    vastEventRetryIntervalSeconds:number,
    vastEventRetryUploadTimes:number
}

export interface AdvertiserInfo{
    seq:number,
    key:string,
    value:string
}


///////////////////////////////////////////////////////////////
// Modules
///////////////////////////////////////////////////////////////

@Plugin({
    pluginName: "HMSAds",
    plugin: "cordova-plugin-hms-ads",
    pluginRef: "HMSAds",
    repo: "https://github.com/HMS-Core/hms-cordova-plugin",
    platforms: ["Android"],
})
@Injectable()
export class HMSAds extends IonicNativePlugin {
    @CordovaProperty() HMSInterstitialAd = HMSInterstitialAd;
    @CordovaProperty() HMSBannerAd = HMSBannerAd;
    @CordovaProperty() HMSSplashAd = HMSSplashAd;
    @CordovaProperty() HMSRewardAd = HMSRewardAd;
    @CordovaProperty() HMSNativeAd = HMSNativeAd;
    @CordovaProperty() HMSRollAd = HMSRollAd;
    @CordovaProperty() HMSVast = HMSVast;

    @Cordova({ otherPromise: true })
    on(event: string, callback: () => void): void {
        return;
    }
    @Cordova({ otherPromise: true })
    init(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    getSDKVersion(): Promise<string> {
        return;
    }
    @Cordova({ otherPromise: true })
    getRequestOptions(): Promise<HMSRequestOptions> {
        return;
    }
    @Cordova({ otherPromise: true })
    setRequestOptions(requestOptions: HMSRequestOptions): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    setConsent(consent: string): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    getAppActivateStyle(): Promise<number> {
        return;
    }
    @Cordova({ otherPromise: true })
    setAppActivateStyle(style:number): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    setAppInstalledNotify(status:boolean): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    isAppInstalledNotify(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    enableLogger(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    disableLogger(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    addTestDeviceId(testDeviceId: string): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    getTestDeviceId(): Promise<string> {
        return;
    }
    @Cordova({ otherPromise: true })
    setUnderAgeOfPromise(underAgeOfPromise: boolean): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    setConsentStatus(consentStatus: ConsentStatus): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    setDebugNeedConsent(debugNeedConsent: DebugNeedConsent): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    requestConsentUpdate(): Promise<ConsentUpdateResult> {
        return;
    }
    @Cordova({ otherPromise: true })
    verifyAdId(adId: string, isLimitAdTracking: boolean): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    getAdvertisingIdInfo(): Promise<OaidResult> {
        return;
    }
    @Cordova({ otherPromise: true })
    referrerClientStartConnection(isTest?: boolean): Promise<number> {
        return;
    }
    @Cordova({ otherPromise: true })
    referrerClientEndConnection(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    referrerClientIsReady(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    getInstallReferrer(installChannel?:string): Promise<ReferrerDetails> {
        return;
    }
    @Cordova({ otherPromise: true })
    initVast(vastSdkConfiguration:VastSdkConfiguration): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    getVastSdkConfiguration(): Promise<VastSdkConfiguration> {
        return;
    }
    @Cordova({ otherPromise: true })
    updateSdkServerConfig(slotId:string): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    userAcceptAdLicense(isAcceptLicense:boolean): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    getEventProcessor(): Promise<void> {
        return;
    }
}

@Plugin({
    pluginName: "HMSAds",
    plugin: "cordova-plugin-hms-ads",
    pluginRef: "HMSAds.HMSBannerAd",
    repo: "https://github.com/HMS-Core/hms-cordova-plugin",
    platforms: ["Android"],
})
@Injectable()
export class HMSBannerAd extends IonicNativePlugin {
    @Cordova({ otherPromise: true })
    on(eventName: BannerAdEvents, callback: (result?: any) => void): void {
        return;
    }
    @Cordova({ otherPromise: true })
    async create(divId: string, bounds?: LayoutBounds): Promise<HMSBannerAd> {
        return;
    }
    @Cordova({ otherPromise: true })
    scroll(): void {
        return;
    }
    @Cordova({ otherPromise: true })
    getAdId(): Promise<string> {
        return;
    }
    @Cordova({ otherPromise: true })
    setAdId(adId: string): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    getBannerAdSize(): Promise<AdSize> {
        return;
    }
    @Cordova({ otherPromise: true })
    setBannerAdSize(bannerAdSize: BannerAdSize | AdSize): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    setBackgroundColor(bgColor: Color): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    setBannerRefresh(bannerRefresh: number): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    setAdListener(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    isLoading(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    loadAd(adParam?: AdParam): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    pause(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    resume(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    destroy(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    getHeight(): Promise<number> {
        return;
    }
    @Cordova({ otherPromise: true })
    getHeightPx(): Promise<number> {
        return;
    }
    @Cordova({ otherPromise: true })
    getWidth(): Promise<number> {
        return;
    }
    @Cordova({ otherPromise: true })
    getWidthPx(): Promise<number> {
        return;
    }
    @Cordova({ otherPromise: true })
    isAutoHeightSize(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    isDynamicSize(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    isFullWidthSize(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    getCurrentDirectionBannerSize(width: number): Promise<AdSize> {
        return;
    }
    @Cordova({ otherPromise: true })
    getLandscapeBannerSize(width: number): Promise<AdSize> {
        return;
    }
    @Cordova({ otherPromise: true })
    getPortraitBannerSize(width: number): Promise<AdSize> {
        return;
    }
}

@Plugin({
    pluginName: "HMSAds",
    plugin: "cordova-plugin-hms-ads",
    pluginRef: "HMSAds.HMSInterstitialAd",
    repo: "https://github.com/HMS-Core/hms-cordova-plugin",
    platforms: ["Android"],
})
@Injectable()
export class HMSInterstitialAd extends IonicNativePlugin {
    @Cordova({ otherPromise: true })
    on(
        eventName: InterstitialAdEvents,
        callback: (result?: any) => void
    ): void {
        return;
    }
    @Cordova({ otherPromise: true })
    async create(useActivity: boolean): Promise<HMSInterstitialAd> {
        return;
    }
    @Cordova({ otherPromise: true })
    scroll(): void {
        return;
    }
    @Cordova({ otherPromise: true })
    show(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    isLoaded(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    isLoading(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    loadAd(adParam?: AdParam): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    setAdId(adId: string): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    getAdId(): Promise<string> {
        return;
    }
    @Cordova({ otherPromise: true })
    setAdListener(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    setRewardAdListener(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    videoOperatorGetAspectRatio(): Promise<VideoOperatorAspectRatio> {
        return;
    }
    @Cordova({ otherPromise: true })
    videoOperatorHasVideo(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    videoOperatorIsCustomizeOperateEnabled(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    videoOperatorIsMuted(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    videoOperatorMute(mute: boolean): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    videoOperatorPause(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    videoOperatorPlay(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    videoOperatorStop(): Promise<void> {
        return;
    }
}

@Plugin({
    pluginName: "HMSAds",
    plugin: "cordova-plugin-hms-ads",
    pluginRef: "HMSAds.HMSNativeAd",
    repo: "https://github.com/HMS-Core/hms-cordova-plugin",
    platforms: ["Android"],
})
@Injectable()
export class HMSNativeAd extends IonicNativePlugin {
    @Cordova({ otherPromise: true })
    on(eventName: NativeAdEvents, callback: (result?: any) => void): void {
        return;
    }
    @Cordova({ otherPromise: true })
    async create(
        options: NativeAdOptions,
        bounds?: LayoutBounds
    ): Promise<HMSNativeAd> {
        return;
    }
    @Cordova({ otherPromise: true })
    loadAd(options?: NativeAdLoadOptions): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    show(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    isLoading(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    destroy(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    dislikeAd(dislikeReason: string): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    setAllowCustomClick(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    getAdSource(): Promise<string> {
        return;
    }
    @Cordova({ otherPromise: true })
    getDescription(): Promise<string> {
        return;
    }
    @Cordova({ otherPromise: true })
    getCallToAction(): Promise<string> {
        return;
    }
    @Cordova({ otherPromise: true })
    getDislikeAdReasons(): Promise<string[]> {
        return;
    }
    @Cordova({ otherPromise: true })
    isCustomClickAllowed(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    isCustomDislikeThisAdEnabled(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    recordClickEvent(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    recordImpressionEvent(impressionData: any): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    getUniqueId(): Promise<string> {
        return;
    }
    @Cordova({ otherPromise: true })
    setDislikeAdListener(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    gotoWhyThisAdPage(useView: boolean): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    getAdSign(): Promise<string> {
        return;
    }
    @Cordova({ otherPromise: true })
    getTitle(): Promise<string> {
        return;
    }
    @Cordova({ otherPromise: true })
    getWhyThisAd(): Promise<string> {
        return;
    }
    @Cordova({ otherPromise: true })
    showAppDetailPage(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    recordShowStartEvent(showStartData: any): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    onAdClose(keywords: string[]): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    getNativeAdConfiguration(): Promise<NativeAdConfiguration> {
        return;
    }
    @Cordova({ otherPromise: true })
    setOnDownloadStatusChangedListener(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    setOnNonWifiDownloadListener(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    setShowPermissionDialog(show:boolean): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    setAllowedNonWifiNetwork(allowed:boolean): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    cancel(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    continueDownload(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    showAdvertiserInfoDialog(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    hideAdvertiserInfoDialog(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    hasAdvertiserInfo(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    getAdvertiserInfo(): Promise<AdvertiserInfo[]> {
        return;
    }
    @Cordova({ otherPromise: true })
    showAppDetailPage(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    isTransparencyOpen(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    getTransparencyTplUrl(): Promise<string> {
        return;
    }
}

@Plugin({
    pluginName: "HMSAds",
    plugin: "cordova-plugin-hms-ads",
    pluginRef: "HMSAds.HMSRewardAd",
    repo: "https://github.com/HMS-Core/hms-cordova-plugin",
    platforms: ["Android"],
})
@Injectable()
export class HMSRewardAd extends IonicNativePlugin {
    @Cordova({ otherPromise: true })
    on(eventName: RewardAdEvents, callback: (result?: any) => void): void {
        return;
    }
    @Cordova({ otherPromise: true })
    async create(adId: string): Promise<HMSRewardAd> {
        return;
    }
    @Cordova({ otherPromise: true })
    show(useActivity: boolean): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    resume(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    pause(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    destroy(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    loadAdWithAdId(adId:string,adParam?:AdParam): Promise<void>{
      return;
    }
    @Cordova({ otherPromise: true })
    loadAd(adParam?: AdParam): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    isLoaded(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    getData(): Promise<string> {
        return;
    }
    @Cordova({ otherPromise: true })
    getUserId(): Promise<string> {
        return;
    }
    @Cordova({ otherPromise: true })
    getReward(): Promise<HMSReward> {
        return;
    }
    @Cordova({ otherPromise: true })
    setData(data: string): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    setImmersive(immersive: boolean): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    setUserId(userId: string): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    setRewardVerifyConfig(config: HMSRewardVerifyConfig): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    getRewardVerifyConfig(): Promise<HMSRewardVerifyConfig> {
        return;
    }
    @Cordova({ otherPromise: true })
    setOnMetadataChangedListener(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    setRewardAdListener(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    setMobileDataAlertSwitch(alertSwitch: boolean): Promise<void> {
        return;
    }
}

@Plugin({
    pluginName: "HMSAds",
    plugin: "cordova-plugin-hms-ads",
    pluginRef: "HMSAds.HMSRollAd",
    repo: "https://github.com/HMS-Core/hms-cordova-plugin",
    platforms: ["Android"],
})
@Injectable()
export class HMSRollAd extends IonicNativePlugin {
    @Cordova({ otherPromise: true })
    on(eventName: RollAdEvents, callback: (result?: any) => void): void {
        return;
    }
    @Cordova({ otherPromise: true })
    async create(
        params: RollAdLoaderParams,
        divId: string,
        bounds?: LayoutBounds
    ): Promise<HMSRollAd> {
        return;
    }
    @Cordova({ otherPromise: true })
    scroll(): void {
        return;
    }
    @Cordova({ otherPromise: true })
    loadAd(options: RollAdLoadOptions): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    isLoading(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    destroy(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    pause(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    isPlaying(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    mute(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    unmute(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    onClose(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    play(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    stop(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    removeInstreamMediaChangeListener(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    removeMediaMuteListener(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    removeInstreamMediaStateListener(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    setInstreamAds(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    setInstreamMediaChangeListener(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    setMediaMuteListener(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    setInstreamMediaStateListener(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    setOnInstreamAdClickListener(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    getAdSource(): Promise<string> {
        return;
    }
    @Cordova({ otherPromise: true })
    getDuration(): Promise<Duration> {
        return;
    }
    @Cordova({ otherPromise: true })
    getWhyThisAd(): Promise<string> {
        return;
    }
    @Cordova({ otherPromise: true })
    getAdSign(): Promise<string> {
        return;
    }
    @Cordova({ otherPromise: true })
    isClicked(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    isExpired(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    isImageAd(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    isShown(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    isVideoAd(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    getCallToAction(): Promise<string> {
        return;
    }
    @Cordova({ otherPromise: true })
    showAdvertiserInfoDialog(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    hideAdvertiserInfoDialog(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    hasAdvertiserInfo(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    getAdvertiserInfo(): Promise<AdvertiserInfo[]> {
        return;
    }
    @Cordova({ otherPromise: true })
    isTransparencyOpen(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    getTransparencyTplUrl(): Promise<String> {
        return;
    }
    @Cordova({ otherPromise: true })
    showTransparencyDialog(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    hideTransparencyDialog(): Promise<void> {
        return;
    }
}

@Plugin({
    pluginName: "HMSAds",
    plugin: "cordova-plugin-hms-ads",
    pluginRef: "HMSAds.HMSSplashAd",
    repo: "https://github.com/HMS-Core/hms-cordova-plugin",
    platforms: ["Android"],
})
@Injectable()
export class HMSSplashAd extends IonicNativePlugin {
    @Cordova({ otherPromise: true })
    on(eventName: SplashAdEvents, callback: (result?: any) => void): void {
        return;
    }
    @Cordova({ otherPromise: true })
    async create(): Promise<HMSSplashAd> {
        return;
    }
    @Cordova({ otherPromise: true })
    setLogo(file: string): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    setWideSloganResId(wideSloganResId: string): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    setSloganResId(sloganResId: string): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    load(options: SplashAdLoadOptions): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    preloadAd(options: SplashAdLoadOptions): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    destroyView(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    pauseView(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    resumeView(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    isLoading(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    isLoaded(): Promise<boolean> {
        return;
    }
    @Cordova({ otherPromise: true })
    setAdDisplayListener(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    setAudioFocusType(audioFocusType: AudioFocusType): Promise<void> {
        return;
    }
}

@Plugin({
    pluginName: "HMSAds",
    plugin: "cordova-plugin-hms-ads",
    pluginRef: "HMSAds.HMSVast",
    repo: "https://github.com/HMS-Core/hms-cordova-plugin",
    platforms: ["Android"],
})
@Injectable()
export class HMSVast extends IonicNativePlugin {
    @Cordova({ otherPromise: true })
    on(eventName: VastEvents, callback: (result?: any) => void): void {
        return;
    }
    @Cordova({ otherPromise: true })
    async create(
        divId: string,
        bounds?: LayoutBounds
    ): Promise<HMSVast> {
        return;
    }
    @Cordova({ otherPromise: true })
    scroll(): void {
        return;
    }
    @Cordova({ otherPromise: true })
    loadAd(options: VastLoadOptions): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    resume(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    pause(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    release(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    toggleMuteState(isMute:boolean): Promise<void> {
        return;
    }

    @Cordova({ otherPromise: true })
    startOrPause(): Promise<void> {
        return;
    }

}    
