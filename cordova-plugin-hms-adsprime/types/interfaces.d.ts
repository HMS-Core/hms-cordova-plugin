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

import { ChildProtection, NonPersonalizedAd, UnderAgeOfPromise, AdContentClassification, Gender, AudioFocusType, MediaAspect, MediaDirection, ChoicesPosition, Color, NativeAdTemplate, InstallReferrerResponses, ConsentStatus, HMSScreenOrientation, Anchor, DetailedCreativeType, CreativeMatchType } from './HMSConstants';
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
