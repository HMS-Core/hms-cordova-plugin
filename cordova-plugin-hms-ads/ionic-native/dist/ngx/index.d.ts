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

import { IonicNativePlugin } from "@ionic-native/core";
export declare enum AdParamErrorCodes {
    AD_PARAM_INNER = 0,
    AD_PARAM_INVALID_REQUEST = 1,
    AD_PARAM_NETWORK_ERROR = 2,
    AD_PARAM_NO_AD = 3,
    AD_PARAM_AD_LOADING = 4,
    AD_PARAM_LOW_API = 5,
    AD_PARAM_BANNER_AD_EXPIRE = 6,
    AD_PARAM_BANNER_AD_CANCEL = 7,
    AD_PARAM_HMS_NOT_SUPPORT_SET_APP = 8
}
export declare enum RewardAdStatusErrorCodes {
    REWARD_AD_STATUS_INTERNAL = 0,
    REWARD_AD_STATUS_REUSED = 1,
    REWARD_AD_STATUS_NOT_LOADED = 2,
    REWARD_AD_STATUS_BACKGROUND = 3
}
export declare enum AdContentClassification {
    AD_CONTENT_CLASSIFICATION_A = "A",
    AD_CONTENT_CLASSIFICATION_PI = "PI",
    AD_CONTENT_CLASSIFICATION_UNKNOWN = "",
    AD_CONTENT_CLASSIFICATION_J = "J",
    AD_CONTENT_CLASSIFICATION_W = "W"
}
export declare enum Gender {
    FEMALE = 2,
    MALE = 1,
    UNKNOWN = 0
}
export declare enum NonPersonalizedAd {
    ALLOW_ALL = 0,
    ALLOW_NON_PERSONALIZED = 1
}
export declare enum ChildProtection {
    TAG_FOR_CHILD_PROTECTION_UNSPECIFIED = -1,
    TAG_FOR_CHILD_PROTECTION_FALSE = 0,
    TAG_FOR_CHILD_PROTECTION_TRUE = 1
}
export declare enum UnderAgeOfPromise {
    PROMISE_UNSPECIFIED = -1,
    PROMISE_FALSE = 0,
    PROMISE_TRUE = 1
}
export declare enum BannerAdSize {
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
    BANNER_SIZE_ADVANCED = "BANNER_SIZE_ADVANCED"
}
export declare enum HMSScreenOrientation {
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
    SCREEN_ORIENTATION_LOCKED = 14
}
export declare enum DebugNeedConsent {
    CONSENT_DEBUG_DISABLED = 0,
    CONSENT_DEBUG_NEED_CONSENT = 1,
    CONSENT_DEBUG_NOT_NEED_CONSENT = 2
}
export declare enum ConsentStatus {
    CONSENT_PERSONALIZED = 0,
    CONSENT_NON_PERSONALIZED = 1,
    CONSENT_UNKNOWN = 2
}
export declare enum AudioFocusType {
    GAIN_AUDIO_FOCUS_ALL = 0,
    NOT_GAIN_AUDIO_FOCUS_WHEN_MUTE = 1,
    NOT_GAIN_AUDIO_FOCUS_ALL = 2
}
export declare enum MediaAspect {
    ASPECT_ANY = 1,
    ASPECT_CUSTOM_SIZE = -1,
    ASPECT_LANDSCAPE = 2,
    ASPECT_PORTRAIT = 3,
    ASPECT_SQUARE = 4,
    ASPECT_UNKNOWN = 0
}
export declare enum ChoicesPosition {
    BOTTOM_LEFT = 3,
    BOTTOM_RIGHT = 2,
    INVISIBLE = 4,
    TOP_LEFT = 0,
    TOP_RIGHT = 1
}
export declare enum MediaDirection {
    ANY = 0,
    LANDSCAPE = 2,
    PORTRAIT = 1
}
export declare enum NativeAdTemplate {
    NATIVE_AD_SMALL_TEMPLATE = "NATIVE_AD_SMALL_TEMPLATE",
    NATIVE_AD_FULL_TEMPLATE = "NATIVE_AD_FULL_TEMPLATE",
    NATIVE_AD_BANNER_TEMPLATE = "NATIVE_AD_BANNER_TEMPLATE",
    NATIVE_AD_VIDEO_TEMPLATE = "NATIVE_AD_VIDEO_TEMPLATE",
    NATIVE_AD_WITH_APP_DOWNLOAD_BTN_TEMPLATE = "NATIVE_AD_WITH_APP_DOWNLOAD_BTN_TEMPLATE"
}
export declare enum Color {
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
export declare enum InstallReferrerResponses {
    SERVICE_DISCONNECTED = -1,
    DEVELOPER_ERROR = 3,
    SERVICE_UNAVAILABLE = 1,
    OK = 0,
    FEATURE_NOT_SUPPORTED = 2
}
export declare enum Anchor {
    TOP = "top",
    BOTTOM = "bottom",
    INVISIBLE = "invisible"
}
export declare enum BannerAdEvents {
    BANNER_AD_CLOSED = "banner_ad_closed",
    BANNER_AD_FAILED = "banner_ad_failed",
    BANNER_AD_LEAVE = "banner_ad_leave",
    BANNER_AD_OPENED = "banner_ad_opened",
    BANNER_AD_LOADED = "banner_ad_loaded",
    BANNER_AD_CLICKED = "banner_ad_clicked",
    BANNER_AD_IMPRESSION = "banner_ad_impression"
}
export declare enum InterstitialAdEvents {
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
    INTERSTITIAL_REWARD_AD_STARTED = "interstitial_reward_ad_started"
}
export declare enum SplashAdEvents {
    SPLASH_AD_FAILED_TO_LOAD = "splash_ad_failed_to_load",
    SPLASH_AD_LOADED = "splash_ad_loaded",
    SPLASH_AD_DISMISSED = "splash_ad_dismissed",
    SPLASH_AD_SHOWED = "splash_ad_showed",
    SPLASH_AD_CLICK = "splash_ad_click"
}
export declare enum RollAdEvents {
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
    ROLL_AD_WHY_THIS_AD = "roll_ad_why_this_ad"
}
export declare enum RewardAdEvents {
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
    REWARD_AD_OPENED = "reward_ad_opened"
}
export declare enum DetailedCreativeType {
    BIG_IMG = 901,
    VIDEO = 903,
    THREE_IMG = 904,
    SMALL_IMG = 905,
    SINGLE_IMG = 909,
    SHORT_TEXT = 913,
    LONG_TEXT = 914
}
export declare enum NativeAdEvents {
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
    APP_DOWNLOAD_STATUS_CHANGED = "app_download_status_changed",
    APP_DOWNLOAD_NON_WIFI_DOWNLOAD = "app_download_non_wifi_download"
}
export declare enum VastEvents {
    VAST_LOAD_SUCCESS = "vast_load_success",
    VAST_LOAD_FAILED = "vast_load_failed",
    VAST_PLAY_STATE_CHANGED = "vast_play_state_changed",
    VAST_VOLUME_CHANGED = "vast_volume_changed",
    VAST_SCREEN_VIEW_CHANGED = "vast_screen_view_changed",
    VAST_PROGRESS_CHANGED = "vast_progress_changed",
    VAST_ON_SUCCESS = "vast_on_success",
    VAST_ON_FAILED = "vast_on_failed",
    VAST_AD_READY = "vast_ad_ready",
    VAST_AD_FINISH = "vast_ad_finish",
    VAST_BUFFER_START = "vast_buffer_start",
    VAST_BUFFER_END = "vast_buffer_end"
}
export declare enum ActivateStyle {
    BOTTOM_BANNER = 1,
    CONFIRM_DIALOG = 2
}
export declare enum CreativeMatchType {
    EXACT = 0,
    SMART = 1,
    UNKNOWN = 2,
    ANY = 3,
    LANDSCAPE = 4,
    PORTRAIT = 5,
    SQUARE = 6
}
export declare enum AppDownloadStatus {
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
    location?: Location;
    contentBundle?: ContentBundle;
}
export interface Location {
    lat: number;
    lng: number;
}
export interface ContentBundle {
    channelCategoryCode?: string;
    title?: string;
    tags?: string;
    relatedPeople?: string;
    content?: string;
    contentID?: number;
    category?: string;
    subcategory?: string;
    thirdCategory?: string;
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
    adParam?: VastConfiguration;
    playerConfig?: PlayerConfig;
    isTestAd?: boolean;
    isAdLoadWithAdsData?: boolean;
    isCustomVideoPlayer?: boolean;
}
export interface VastConfiguration {
    adId?: string;
    totalDuration?: number;
    creativeMatchStrategy?: CreativeMatchType;
    allowMobileTraffic?: boolean;
    adOrientation?: MediaDirection;
    maxAdPods?: number;
    requestOption?: HMSRequestOptions;
}
export interface PlayerConfig {
    isEnableCutout?: boolean;
    isEnablePortrait?: boolean;
    isEnableRotation?: boolean;
    isSkipLinearAd?: boolean;
    isForceMute?: boolean;
    isIndustryIconShow?: boolean;
}
export interface VastSdkConfiguration {
    httpCallTimeoutMs: number;
    httpConnectTimeoutMs: number;
    httpKeepAliveDurationMs: number;
    httpReadTimeoutMs: number;
    maxHttpConnections: number;
    maxRedirectWrapperLimit: number;
    isTest: boolean;
    vastEventRetryBatchSize: number;
    vastEventRetryIntervalSeconds: number;
    vastEventRetryUploadTimes: number;
}
export interface AdvertiserInfo {
    seq: number;
    key: string;
    value: string;
}
export declare class HMSAds extends IonicNativePlugin {
    HMSInterstitialAd: typeof HMSInterstitialAd;
    HMSBannerAd: typeof HMSBannerAd;
    HMSSplashAd: typeof HMSSplashAd;
    HMSRewardAd: typeof HMSRewardAd;
    HMSNativeAd: typeof HMSNativeAd;
    HMSRollAd: typeof HMSRollAd;
    HMSVast: typeof HMSVast;
    on(event: string, callback: () => void): void;
    init(): Promise<void>;
    getSDKVersion(): Promise<string>;
    getRequestOptions(): Promise<HMSRequestOptions>;
    setRequestOptions(requestOptions: HMSRequestOptions): Promise<void>;
    setConsent(consent: string): Promise<void>;
    getAppActivateStyle(): Promise<number>;
    setAppActivateStyle(style: number): Promise<void>;
    setAppInstalledNotify(status: boolean): Promise<void>;
    isAppInstalledNotify(): Promise<boolean>;
    enableLogger(): Promise<any>;
    disableLogger(): Promise<any>;
    addTestDeviceId(testDeviceId: string): Promise<void>;
    getTestDeviceId(): Promise<string>;
    setUnderAgeOfPromise(underAgeOfPromise: boolean): Promise<void>;
    setConsentStatus(consentStatus: ConsentStatus): Promise<void>;
    setDebugNeedConsent(debugNeedConsent: DebugNeedConsent): Promise<any>;
    requestConsentUpdate(): Promise<ConsentUpdateResult>;
    verifyAdId(adId: string, isLimitAdTracking: boolean): Promise<boolean>;
    getAdvertisingIdInfo(): Promise<OaidResult>;
    referrerClientStartConnection(isTest?: boolean): Promise<number>;
    referrerClientEndConnection(): Promise<void>;
    referrerClientIsReady(): Promise<boolean>;
    getInstallReferrer(installChannel?: string): Promise<ReferrerDetails>;
    initVast(vastSdkConfiguration: VastSdkConfiguration): Promise<void>;
    getVastSdkConfiguration(): Promise<VastSdkConfiguration>;
    updateSdkServerConfig(slotId: string): Promise<void>;
    userAcceptAdLicense(isAcceptLicense: boolean): Promise<void>;
    getEventProcessor(): Promise<void>;
}
export declare class HMSBannerAd extends IonicNativePlugin {
    on(eventName: BannerAdEvents, callback: (result?: any) => void): void;
    create(divId: string, bounds?: LayoutBounds): Promise<HMSBannerAd>;
    scroll(): void;
    getAdId(): Promise<string>;
    setAdId(adId: string): Promise<void>;
    getBannerAdSize(): Promise<AdSize>;
    setBannerAdSize(bannerAdSize: BannerAdSize | AdSize): Promise<void>;
    setBackgroundColor(bgColor: Color): Promise<void>;
    setBannerRefresh(bannerRefresh: number): Promise<void>;
    setAdListener(): Promise<void>;
    isLoading(): Promise<boolean>;
    loadAd(adParam?: AdParam): Promise<void>;
    pause(): Promise<void>;
    resume(): Promise<void>;
    destroy(): Promise<void>;
    getHeight(): Promise<number>;
    getHeightPx(): Promise<number>;
    getWidth(): Promise<number>;
    getWidthPx(): Promise<number>;
    isAutoHeightSize(): Promise<boolean>;
    isDynamicSize(): Promise<boolean>;
    isFullWidthSize(): Promise<boolean>;
    getCurrentDirectionBannerSize(width: number): Promise<AdSize>;
    getLandscapeBannerSize(width: number): Promise<AdSize>;
    getPortraitBannerSize(width: number): Promise<AdSize>;
}
export declare class HMSInterstitialAd extends IonicNativePlugin {
    on(eventName: InterstitialAdEvents, callback: (result?: any) => void): void;
    create(useActivity: boolean): Promise<HMSInterstitialAd>;
    scroll(): void;
    show(): Promise<void>;
    isLoaded(): Promise<boolean>;
    isLoading(): Promise<boolean>;
    loadAd(adParam?: AdParam): Promise<void>;
    setAdId(adId: string): Promise<void>;
    getAdId(): Promise<string>;
    setAdListener(): Promise<void>;
    setRewardAdListener(): Promise<void>;
    videoOperatorGetAspectRatio(): Promise<VideoOperatorAspectRatio>;
    videoOperatorHasVideo(): Promise<boolean>;
    videoOperatorIsCustomizeOperateEnabled(): Promise<boolean>;
    videoOperatorIsMuted(): Promise<boolean>;
    videoOperatorMute(mute: boolean): Promise<void>;
    videoOperatorPause(): Promise<void>;
    videoOperatorPlay(): Promise<void>;
    videoOperatorStop(): Promise<void>;
}
export declare class HMSNativeAd extends IonicNativePlugin {
    on(eventName: NativeAdEvents, callback: (result?: any) => void): void;
    create(options: NativeAdOptions, bounds?: LayoutBounds): Promise<HMSNativeAd>;
    loadAd(options?: NativeAdLoadOptions): Promise<void>;
    show(): Promise<void>;
    isLoading(): Promise<boolean>;
    destroy(): Promise<void>;
    dislikeAd(dislikeReason: string): Promise<void>;
    setAllowCustomClick(): Promise<void>;
    getAdSource(): Promise<string>;
    getDescription(): Promise<string>;
    getCallToAction(): Promise<string>;
    getDislikeAdReasons(): Promise<string[]>;
    isCustomClickAllowed(): Promise<boolean>;
    isCustomDislikeThisAdEnabled(): Promise<boolean>;
    recordClickEvent(): Promise<void>;
    recordImpressionEvent(impressionData: any): Promise<boolean>;
    getUniqueId(): Promise<string>;
    setDislikeAdListener(): Promise<void>;
    gotoWhyThisAdPage(useView: boolean): Promise<void>;
    getAdSign(): Promise<string>;
    getTitle(): Promise<string>;
    getWhyThisAd(): Promise<string>;
    recordShowStartEvent(showStartData: any): Promise<boolean>;
    onAdClose(keywords: string[]): Promise<void>;
    getNativeAdConfiguration(): Promise<NativeAdConfiguration>;
    setOnDownloadStatusChangedListener(): Promise<void>;
    setOnNonWifiDownloadListener(): Promise<void>;
    setShowPermissionDialog(show: boolean): Promise<void>;
    setAllowedNonWifiNetwork(allowed: boolean): Promise<void>;
    cancel(): Promise<void>;
    continueDownload(): Promise<void>;
    showAdvertiserInfoDialog(): Promise<void>;
    hideAdvertiserInfoDialog(): Promise<void>;
    hasAdvertiserInfo(): Promise<boolean>;
    getAdvertiserInfo(): Promise<AdvertiserInfo[]>;
}
export declare class HMSRewardAd extends IonicNativePlugin {
    on(eventName: RewardAdEvents, callback: (result?: any) => void): void;
    create(adId: string): Promise<HMSRewardAd>;
    show(useActivity: boolean): Promise<void>;
    resume(): Promise<void>;
    pause(): Promise<void>;
    destroy(): Promise<void>;
    loadAdWithAdId(adId: string, adParam?: AdParam): Promise<void>;
    loadAd(adParam?: AdParam): Promise<void>;
    isLoaded(): Promise<boolean>;
    getData(): Promise<string>;
    getUserId(): Promise<string>;
    getReward(): Promise<HMSReward>;
    setData(data: string): Promise<void>;
    setImmersive(immersive: boolean): Promise<void>;
    setUserId(userId: string): Promise<void>;
    setRewardVerifyConfig(config: HMSRewardVerifyConfig): Promise<void>;
    getRewardVerifyConfig(): Promise<HMSRewardVerifyConfig>;
    setOnMetadataChangedListener(): Promise<void>;
    setRewardAdListener(): Promise<void>;
    setMobileDataAlertSwitch(alertSwitch: boolean): Promise<void>;
}
export declare class HMSRollAd extends IonicNativePlugin {
    on(eventName: RollAdEvents, callback: (result?: any) => void): void;
    create(params: RollAdLoaderParams, divId: string, bounds?: LayoutBounds): Promise<HMSRollAd>;
    scroll(): void;
    loadAd(options: RollAdLoadOptions): Promise<void>;
    isLoading(): Promise<boolean>;
    destroy(): Promise<void>;
    pause(): Promise<void>;
    isPlaying(): Promise<boolean>;
    mute(): Promise<void>;
    unmute(): Promise<void>;
    onClose(): Promise<void>;
    play(): Promise<void>;
    stop(): Promise<void>;
    removeInstreamMediaChangeListener(): Promise<void>;
    removeMediaMuteListener(): Promise<void>;
    removeInstreamMediaStateListener(): Promise<void>;
    setInstreamAds(): Promise<void>;
    setInstreamMediaChangeListener(): Promise<void>;
    setMediaMuteListener(): Promise<void>;
    setInstreamMediaStateListener(): Promise<void>;
    setOnInstreamAdClickListener(): Promise<void>;
    getAdSource(): Promise<string>;
    getDuration(): Promise<Duration>;
    getWhyThisAd(): Promise<string>;
    getAdSign(): Promise<string>;
    isClicked(): Promise<boolean>;
    isExpired(): Promise<boolean>;
    isImageAd(): Promise<boolean>;
    isShown(): Promise<boolean>;
    isVideoAd(): Promise<boolean>;
    getCallToAction(): Promise<string>;
    showAdvertiserInfoDialog(): Promise<void>;
    hideAdvertiserInfoDialog(): Promise<void>;
    hasAdvertiserInfo(): Promise<boolean>;
    getAdvertiserInfo(): Promise<AdvertiserInfo[]>;
}
export declare class HMSSplashAd extends IonicNativePlugin {
    on(eventName: SplashAdEvents, callback: (result?: any) => void): void;
    create(): Promise<HMSSplashAd>;
    setLogo(file: string): Promise<void>;
    setWideSloganResId(wideSloganResId: string): Promise<void>;
    setSloganResId(sloganResId: string): Promise<void>;
    load(options: SplashAdLoadOptions): Promise<void>;
    preloadAd(options: SplashAdLoadOptions): Promise<void>;
    destroyView(): Promise<void>;
    pauseView(): Promise<void>;
    resumeView(): Promise<void>;
    isLoading(): Promise<boolean>;
    isLoaded(): Promise<boolean>;
    setAdDisplayListener(): Promise<void>;
    setAudioFocusType(audioFocusType: AudioFocusType): Promise<void>;
}
export declare class HMSVast extends IonicNativePlugin {
    on(eventName: VastEvents, callback: (result?: any) => void): void;
    create(divId: string, bounds?: LayoutBounds): Promise<HMSVast>;
    scroll(): void;
    loadAd(options: VastLoadOptions): Promise<void>;
    resume(): Promise<void>;
    pause(): Promise<void>;
    release(): Promise<void>;
    toggleMuteState(isMute: boolean): Promise<void>;
    startOrPause(): Promise<void>;
}
