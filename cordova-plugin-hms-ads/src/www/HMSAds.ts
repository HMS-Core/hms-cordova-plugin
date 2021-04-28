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
import { asyncExec } from './utils'
import { HMSRequestOptions,OaidResult, ReferrerDetails,ConsentUpdateResult } from './interfaces'
import { ConsentStatus, DebugNeedConsent } from './HMSConstants'


export { HMSInterstitialAd } from './HMSInterstitialAd';
export { HMSBannerAd } from './HMSBannerAd';
export { HMSRewardAd } from './HMSRewardAd';
export { HMSSplashAd } from './HMSSplashAd';
export { HMSRollAd } from './HMSRollAd';
export { HMSNativeAd } from './HMSNativeAd';

export function on(event: string, callback: ()=>void){
	window.subscribeHMSEvent(event, callback);
}

///////////////////////////////////////////////////////////////////////////
// HwAdsModule
///////////////////////////////////////////////////////////////////////////

export function init(): Promise<void> {
	return asyncExec('HMSAds', 'HwAdsModule', ['init']);
}
export function getSDKVersion(): Promise<string> {
	return asyncExec('HMSAds', 'HwAdsModule', ['getSDKVersion']);
}
export function getRequestOptions(): Promise<HMSRequestOptions> {
	return asyncExec('HMSAds', 'HwAdsModule', ['getRequestOptions']);
}
export function setRequestOptions(requestOptions:HMSRequestOptions): Promise<void> {
	return asyncExec('HMSAds', 'HwAdsModule', ['setRequestOptions', requestOptions]);
}
export function setConsent(consent:string): Promise<void> {
	return asyncExec('HMSAds', 'HwAdsModule', ['setConsent', consent]);
}

// HMSLogger
export function enableLogger(): Promise<any> {
	return asyncExec('HMSAds', 'HwAdsModule', ['enableLogger']);
}
export function disableLogger(): Promise<any> {
	return asyncExec('HMSAds', 'HwAdsModule', ['disableLogger']);
}


///////////////////////////////////////////////////////////////////////////
// Consent Methods
///////////////////////////////////////////////////////////////////////////

export function addTestDeviceId(testDeviceId:string): Promise<void> {
	return asyncExec('HMSAds', 'ConsentModule', ['addTestDeviceId', testDeviceId]);
}
export function getTestDeviceId(): Promise<string> {
	return asyncExec('HMSAds', 'ConsentModule', ['getTestDeviceId']);
}
export function setUnderAgeOfPromise(underAgeOfPromise:boolean): Promise<void> {
	return asyncExec('HMSAds', 'ConsentModule', ['setUnderAgeOfPromise', underAgeOfPromise]);
}
export function setConsentStatus(consentStatus:ConsentStatus): Promise<void> {
	return asyncExec('HMSAds', 'ConsentModule', ['setConsentStatus', consentStatus]);
}
export function setDebugNeedConsent(debugNeedConsent:DebugNeedConsent): Promise<any> {
	return asyncExec('HMSAds', 'ConsentModule', ['setDebugNeedConsent', debugNeedConsent]);
}
export function requestConsentUpdate(): Promise<ConsentUpdateResult> {
	return asyncExec('HMSAds', 'ConsentModule', ['requestConsentUpdate']);
}

///////////////////////////////////////////////////////////////////////////
// Identifier Methods
///////////////////////////////////////////////////////////////////////////

export function verifyAdId(adId:string, isLimitAdTracking:boolean): Promise<boolean> {
	return asyncExec('HMSAds', 'IdentifierModule', ['verifyAdId', adId, isLimitAdTracking]);
}
export function getAdvertisingIdInfo(): Promise<OaidResult> {
	return asyncExec('HMSAds', 'IdentifierModule', ['getAdvertisingIdInfo']);
}

///////////////////////////////////////////////////////////////////////////
// Install Referrer Methods
///////////////////////////////////////////////////////////////////////////

export function referrerClientStartConnection(isTest?:boolean): Promise<number> {
	return asyncExec('HMSAds', 'InstallReferrerModule', ['referrerClientStartConnection', isTest]);
}
export function referrerClientEndConnection(): Promise<void> {
	return asyncExec('HMSAds', 'InstallReferrerModule', ['referrerClientEndConnection']);
}
export function referrerClientIsReady(): Promise<boolean> {
	return asyncExec('HMSAds', 'InstallReferrerModule', ['referrerClientIsReady']);
}
export function getInstallReferrer(): Promise<ReferrerDetails> {
	return asyncExec('HMSAds', 'InstallReferrerModule', ['getInstallReferrer']);
}

