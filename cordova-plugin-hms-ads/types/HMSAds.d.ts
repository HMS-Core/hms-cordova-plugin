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
import { HMSRequestOptions, OaidResult, ReferrerDetails, ConsentUpdateResult } from './interfaces';
import { ConsentStatus, DebugNeedConsent } from './HMSConstants';
export { HMSInterstitialAd } from './HMSInterstitialAd';
export { HMSBannerAd } from './HMSBannerAd';
export { HMSRewardAd } from './HMSRewardAd';
export { HMSSplashAd } from './HMSSplashAd';
export { HMSRollAd } from './HMSRollAd';
export { HMSNativeAd } from './HMSNativeAd';
export declare function on(event: string, callback: () => void): void;
export declare function init(): Promise<void>;
export declare function getSDKVersion(): Promise<string>;
export declare function getRequestOptions(): Promise<HMSRequestOptions>;
export declare function setRequestOptions(requestOptions: HMSRequestOptions): Promise<void>;
export declare function setConsent(consent: string): Promise<void>;
export declare function enableLogger(): Promise<any>;
export declare function disableLogger(): Promise<any>;
export declare function addTestDeviceId(testDeviceId: string): Promise<void>;
export declare function getTestDeviceId(): Promise<string>;
export declare function setUnderAgeOfPromise(underAgeOfPromise: boolean): Promise<void>;
export declare function setConsentStatus(consentStatus: ConsentStatus): Promise<void>;
export declare function setDebugNeedConsent(debugNeedConsent: DebugNeedConsent): Promise<any>;
export declare function requestConsentUpdate(): Promise<ConsentUpdateResult>;
export declare function verifyAdId(adId: string, isLimitAdTracking: boolean): Promise<boolean>;
export declare function getAdvertisingIdInfo(): Promise<OaidResult>;
export declare function referrerClientStartConnection(isTest?: boolean): Promise<number>;
export declare function referrerClientEndConnection(): Promise<void>;
export declare function referrerClientIsReady(): Promise<boolean>;
export declare function getInstallReferrer(): Promise<ReferrerDetails>;
