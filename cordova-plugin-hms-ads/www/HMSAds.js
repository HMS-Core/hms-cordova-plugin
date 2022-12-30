"use strict";
/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEventProcessor = exports.userAcceptAdLicense = exports.updateSdkServerConfig = exports.getVastSdkConfiguration = exports.initVast = exports.getInstallReferrer = exports.referrerClientIsReady = exports.referrerClientEndConnection = exports.referrerClientStartConnection = exports.getAdvertisingIdInfo = exports.verifyAdId = exports.requestConsentUpdate = exports.setDebugNeedConsent = exports.setConsentStatus = exports.setUnderAgeOfPromise = exports.getTestDeviceId = exports.addTestDeviceId = exports.disableLogger = exports.enableLogger = exports.isAppInstalledNotify = exports.setAppInstalledNotify = exports.setAppActivateStyle = exports.getAppActivateStyle = exports.setConsent = exports.setRequestOptions = exports.getRequestOptions = exports.getSDKVersion = exports.init = exports.on = exports.HMSVast = exports.HMSNativeAd = exports.HMSRollAd = exports.HMSSplashAd = exports.HMSRewardAd = exports.HMSBannerAd = exports.HMSInterstitialAd = void 0;
const utils_1 = require("./utils");
var HMSInterstitialAd_1 = require("./HMSInterstitialAd");
Object.defineProperty(exports, "HMSInterstitialAd", { enumerable: true, get: function () { return HMSInterstitialAd_1.HMSInterstitialAd; } });
var HMSBannerAd_1 = require("./HMSBannerAd");
Object.defineProperty(exports, "HMSBannerAd", { enumerable: true, get: function () { return HMSBannerAd_1.HMSBannerAd; } });
var HMSRewardAd_1 = require("./HMSRewardAd");
Object.defineProperty(exports, "HMSRewardAd", { enumerable: true, get: function () { return HMSRewardAd_1.HMSRewardAd; } });
var HMSSplashAd_1 = require("./HMSSplashAd");
Object.defineProperty(exports, "HMSSplashAd", { enumerable: true, get: function () { return HMSSplashAd_1.HMSSplashAd; } });
var HMSRollAd_1 = require("./HMSRollAd");
Object.defineProperty(exports, "HMSRollAd", { enumerable: true, get: function () { return HMSRollAd_1.HMSRollAd; } });
var HMSNativeAd_1 = require("./HMSNativeAd");
Object.defineProperty(exports, "HMSNativeAd", { enumerable: true, get: function () { return HMSNativeAd_1.HMSNativeAd; } });
var HMSVast_1 = require("./HMSVast");
Object.defineProperty(exports, "HMSVast", { enumerable: true, get: function () { return HMSVast_1.HMSVast; } });
function on(event, callback) {
    window.subscribeHMSEvent(event, callback);
}
exports.on = on;
///////////////////////////////////////////////////////////////////////////
// HwAdsModule
///////////////////////////////////////////////////////////////////////////
function init() {
    return (0, utils_1.asyncExec)('HMSAds', 'HwAdsModule', ['init']);
}
exports.init = init;
function getSDKVersion() {
    return (0, utils_1.asyncExec)('HMSAds', 'HwAdsModule', ['getSDKVersion']);
}
exports.getSDKVersion = getSDKVersion;
function getRequestOptions() {
    return (0, utils_1.asyncExec)('HMSAds', 'HwAdsModule', ['getRequestOptions']);
}
exports.getRequestOptions = getRequestOptions;
function setRequestOptions(requestOptions) {
    return (0, utils_1.asyncExec)('HMSAds', 'HwAdsModule', ['setRequestOptions', requestOptions]);
}
exports.setRequestOptions = setRequestOptions;
function setConsent(consent) {
    return (0, utils_1.asyncExec)('HMSAds', 'HwAdsModule', ['setConsent', consent]);
}
exports.setConsent = setConsent;
function getAppActivateStyle() {
    return (0, utils_1.asyncExec)('HMSAds', 'HwAdsModule', ['getAppActivateStyle']);
}
exports.getAppActivateStyle = getAppActivateStyle;
function setAppActivateStyle(style) {
    return (0, utils_1.asyncExec)('HMSAds', 'HwAdsModule', ['setAppActivateStyle', style]);
}
exports.setAppActivateStyle = setAppActivateStyle;
function setAppInstalledNotify(status) {
    return (0, utils_1.asyncExec)('HMSAds', 'HwAdsModule', ['setAppInstalledNotify', status]);
}
exports.setAppInstalledNotify = setAppInstalledNotify;
function isAppInstalledNotify() {
    return (0, utils_1.asyncExec)('HMSAds', 'HwAdsModule', ['isAppInstalledNotify']);
}
exports.isAppInstalledNotify = isAppInstalledNotify;
// HMSLogger
function enableLogger() {
    return (0, utils_1.asyncExec)('HMSAds', 'HwAdsModule', ['enableLogger']);
}
exports.enableLogger = enableLogger;
function disableLogger() {
    return (0, utils_1.asyncExec)('HMSAds', 'HwAdsModule', ['disableLogger']);
}
exports.disableLogger = disableLogger;
///////////////////////////////////////////////////////////////////////////
// Consent Methods
///////////////////////////////////////////////////////////////////////////
function addTestDeviceId(testDeviceId) {
    return (0, utils_1.asyncExec)('HMSAds', 'ConsentModule', ['addTestDeviceId', testDeviceId]);
}
exports.addTestDeviceId = addTestDeviceId;
function getTestDeviceId() {
    return (0, utils_1.asyncExec)('HMSAds', 'ConsentModule', ['getTestDeviceId']);
}
exports.getTestDeviceId = getTestDeviceId;
function setUnderAgeOfPromise(underAgeOfPromise) {
    return (0, utils_1.asyncExec)('HMSAds', 'ConsentModule', ['setUnderAgeOfPromise', underAgeOfPromise]);
}
exports.setUnderAgeOfPromise = setUnderAgeOfPromise;
function setConsentStatus(consentStatus) {
    return (0, utils_1.asyncExec)('HMSAds', 'ConsentModule', ['setConsentStatus', consentStatus]);
}
exports.setConsentStatus = setConsentStatus;
function setDebugNeedConsent(debugNeedConsent) {
    return (0, utils_1.asyncExec)('HMSAds', 'ConsentModule', ['setDebugNeedConsent', debugNeedConsent]);
}
exports.setDebugNeedConsent = setDebugNeedConsent;
function requestConsentUpdate() {
    return (0, utils_1.asyncExec)('HMSAds', 'ConsentModule', ['requestConsentUpdate']);
}
exports.requestConsentUpdate = requestConsentUpdate;
///////////////////////////////////////////////////////////////////////////
// Identifier Methods
///////////////////////////////////////////////////////////////////////////
function verifyAdId(adId, isLimitAdTracking) {
    return (0, utils_1.asyncExec)('HMSAds', 'IdentifierModule', ['verifyAdId', adId, isLimitAdTracking]);
}
exports.verifyAdId = verifyAdId;
function getAdvertisingIdInfo() {
    return (0, utils_1.asyncExec)('HMSAds', 'IdentifierModule', ['getAdvertisingIdInfo']);
}
exports.getAdvertisingIdInfo = getAdvertisingIdInfo;
///////////////////////////////////////////////////////////////////////////
// Install Referrer Methods
///////////////////////////////////////////////////////////////////////////
function referrerClientStartConnection(isTest) {
    return (0, utils_1.asyncExec)('HMSAds', 'InstallReferrerModule', ['referrerClientStartConnection', isTest]);
}
exports.referrerClientStartConnection = referrerClientStartConnection;
function referrerClientEndConnection() {
    return (0, utils_1.asyncExec)('HMSAds', 'InstallReferrerModule', ['referrerClientEndConnection']);
}
exports.referrerClientEndConnection = referrerClientEndConnection;
function referrerClientIsReady() {
    return (0, utils_1.asyncExec)('HMSAds', 'InstallReferrerModule', ['referrerClientIsReady']);
}
exports.referrerClientIsReady = referrerClientIsReady;
function getInstallReferrer(reqOpt) {
    return (0, utils_1.asyncExec)('HMSAds', 'InstallReferrerModule', ['getInstallReferrer', reqOpt]);
}
exports.getInstallReferrer = getInstallReferrer;
///////////////////////////////////////////////////////////////////////////
// VAST Module
///////////////////////////////////////////////////////////////////////////
function initVast(vastSdkConfiguration) {
    return (0, utils_1.asyncExec)('HMSAds', 'VastModule', ['initVast', vastSdkConfiguration]);
}
exports.initVast = initVast;
function getVastSdkConfiguration() {
    return (0, utils_1.asyncExec)('HMSAds', 'VastModule', ['getVastSdkConfiguration']);
}
exports.getVastSdkConfiguration = getVastSdkConfiguration;
function updateSdkServerConfig(slotId) {
    return (0, utils_1.asyncExec)('HMSAds', 'VastModule', ['updateSdkServerConfig', slotId]);
}
exports.updateSdkServerConfig = updateSdkServerConfig;
function userAcceptAdLicense(isAcceptLicense) {
    return (0, utils_1.asyncExec)('HMSAds', 'VastModule', ['userAcceptAdLicense', isAcceptLicense]);
}
exports.userAcceptAdLicense = userAcceptAdLicense;
function getEventProcessor() {
    return (0, utils_1.asyncExec)('HMSAds', 'VastModule', ['getEventProcessor']);
}
exports.getEventProcessor = getEventProcessor;
//# sourceMappingURL=HMSAds.js.map