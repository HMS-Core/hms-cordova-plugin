/**
 * Copyright 2020 Huawei Technologies Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const utils = require('./utils');

// ////////////////////////////////////////////////////////////////////////////////////////////////
// State
// ////////////////////////////////////////////////////////////////////////////////////////////////

const nativeViews = new Map();

// /////////////////////////////////////////////////////////////////////////////////////////////////
// Custom Errors
// /////////////////////////////////////////////////////////////////////////////////////////////////

function NativeAdAlreadyDefinedError(message) {
    this.name = "NativeAdAlreadyDefinedError";
    this.message = (message || "");
}
NativeAdAlreadyDefinedError.prototype = Object.create(Error.prototype);

// ////////////////////////////////////////////////////////////////////////////////////////////////
// Ads
// ////////////////////////////////////////////////////////////////////////////////////////////////

const Ads = function () {};

Ads.prototype.on = async function (eventName, handler) {
    const instanceEventName = `${eventName}-${this.__id}`;
    unregisterHMSEvent(instanceEventName); // Remove old handler
    registerHMSEvent(instanceEventName, handler);
};

Ads.prototype.__beforeCreateHook = function (options) {};

Ads.prototype.call = function (funcName, opts) {
    if (!opts) {
        opts = {};
    }
    return utils.asyncExec('HMSAds', null, `callAdFunction`, [this.__objName, this.__id, funcName, opts]);
};

Ads.prototype.create = async function (options) {
    if (this.__id != null) {
        return this;
    }

    this.__beforeCreateHook(options);

    const result = await utils.asyncExec('HMSAds', null, `createAd`, [this.__objName, options]);
    this.__id = result.id;
    return this;
};

// /////////////////////////////////////////////////////////////////////////////////////////////////
// Utility
// /////////////////////////////////////////////////////////////////////////////////////////////////

const attachFunctions = (carrierObj, funcList) => {
    funcList.forEach(fn => {
        carrierObj.prototype[fn] = function (arg) {
            return this.call(fn, arg);
        };
    });
};

// /////////////////////////////////////////////////////////////////////////////////////////////////
// BannerAds
// /////////////////////////////////////////////////////////////////////////////////////////////////

const HMSBannerAds = function () {};
HMSBannerAds.prototype = Object.create(Ads.prototype);
HMSBannerAds.prototype.__objName = "banner";

attachFunctions(HMSBannerAds, ["loadAd", "pause", "resume", "destroy"]);

// /////////////////////////////////////////////////////////////////////////////////////////////////
// Interstitial
// /////////////////////////////////////////////////////////////////////////////////////////////////

const HMSInterstitialAds = function () {};
HMSInterstitialAds.prototype = Object.create(Ads.prototype);
HMSInterstitialAds.prototype.__objName = "interstitial";

attachFunctions(HMSInterstitialAds, ["loadAd", "show", "destroy", "isLoaded", "isLoading"]);

// /////////////////////////////////////////////////////////////////////////////////////////////////
// Splash
// /////////////////////////////////////////////////////////////////////////////////////////////////

const HMSSplashAds = function () {};
HMSSplashAds.prototype = Object.create(Ads.prototype);
HMSSplashAds.prototype.__objName = "splash";

attachFunctions(HMSSplashAds, ["load", "show", "destroy", "cancel", "pause", "resume", "isLoaded", "isLoading"]);

// /////////////////////////////////////////////////////////////////////////////////////////////////
// RewardAds
// /////////////////////////////////////////////////////////////////////////////////////////////////

const HMSRewardAds = function () {};
HMSRewardAds.prototype = Object.create(Ads.prototype);
HMSRewardAds.prototype.__objName = "reward";

attachFunctions(HMSRewardAds, ["loadAd", "show", "pause", "resume", "destroy", "isLoaded"]);

// /////////////////////////////////////////////////////////////////////////////////////////////////
// NativeAds
// /////////////////////////////////////////////////////////////////////////////////////////////////

const HMSNativeAds = function () {};

HMSNativeAds.prototype = Object.create(Ads.prototype);
HMSNativeAds.prototype.__objName = "native";
HMSNativeAds.prototype.__beforeCreateHook = function (initialProps) {
    const elemId = initialProps.div;

    if (nativeViews.has(elemId)) {
        throw new NativeAdAlreadyDefinedError();
    }

    this.element = document.getElementById(elemId);
    this.props = initialProps;
    this.__refreshProps();

    const mutationObserver = new MutationObserver(this.__handleMutation);
    mutationObserver.observe(this.element, {attributes: true});

    nativeViews.set(elemId, this);
};

HMSNativeAds.prototype.__refreshProps = function () {
    const elemRect = this.element.getBoundingClientRect();
    const elemStyle = window.getComputedStyle(this.element, null);

    this.props.x = elemRect.x;
    this.props.y = elemRect.y;
    this.props.width = parseInt(elemStyle.getPropertyValue("width"));
    this.props.height = parseInt(elemStyle.getPropertyValue("height"));
    this.props.paddingLeft = parseInt(elemStyle.getPropertyValue("padding-left"));
    this.props.paddingTop = parseInt(elemStyle.getPropertyValue("padding-top"));
    this.props.borderLeft = parseInt(elemStyle.getPropertyValue("border-left-width"));
    this.props.borderTop = parseInt(elemStyle.getPropertyValue("border-top-width"));

    return this.props;
};

HMSNativeAds.prototype.__handleMutation = function () {
    this.call('setProps', this.__refreshProps());
};

HMSNativeAds.prototype.show = function () {
    this.call('show', this.__refreshProps());
};

HMSNativeAds.prototype.destroy = function () {
    nativeViews.delete(this.element.id);
    this.call('destroy');
};

attachFunctions(HMSNativeAds, ["loadAd", "isLoaded", "isLoading"]);

// ////////////////////////////////////////////////////////////////////////////////////////////////
// Global watchers
// ////////////////////////////////////////////////////////////////////////////////////////////////

const handleDisplacement = event => {
    for (let [objId, nativeAd] of nativeViews) {
        const nativeRect = nativeAd.element.getBoundingClientRect();

        if (nativeAd.props.x === nativeRect.x && nativeAd.props.y === nativeRect.y)
            continue;

        nativeAd.props.x = nativeRect.x;
        nativeAd.props.y = nativeRect.y;

        nativeAd.call('setProps', nativeAd.props);
    }
};

const mutationObserver = new MutationObserver(handleDisplacement);
mutationObserver.observe(document.body, {attributes: true, childList: true, subtree: true});
window.addEventListener('scroll', handleDisplacement);

// /////////////////////////////////////////////////////////////////////////////////////////////////
// HMSAds
// /////////////////////////////////////////////////////////////////////////////////////////////////

const init = (obj) => {
    return utils.asyncExec('HMSAds', null, 'init', [obj]);
};

const disconnectFromReferrerClient = () => {
    return utils.asyncExec('HMSAds', null, 'disconnectFromReferrerClient', []);
};

const getOaidResult = () => {
    return utils.asyncExec('HMSAds', null, 'getOaidResult', []);
};

const getReferrerDetails = (isTest) => {
    return utils.asyncExec('HMSAds', null, 'getReferrerDetails', [isTest]);
};

const verifyAdId = (adId, isLimitAdTracking) => {
    return utils.asyncExec('HMSAds', null, 'verifyAdId', [adId, isLimitAdTracking]);
};

const setRequestOptions = (options) => {
    return utils.asyncExec('HMSAds', null, 'setRequestOptions', [options]);
};

const getSDKVersion = () => {
    return utils.asyncExec('HMSAds', null, 'getSDKVersion', []);
};

const setVideoMuted = (muted) => {
    return utils.asyncExec('HMSAds', null, 'setVideoMuted', [muted]);
};

const setVideoVolume = (volume) => {
    return utils.asyncExec('HMSAds', null, 'setVideoVolume', [volume]);
};

const addTestDeviceId = (id) => {
    return utils.asyncExec('HMSAds', null, 'addTestDeviceId', [id]);
};

const getTestDeviceId = () => {
    return utils.asyncExec('HMSAds', null, 'getTestDeviceId', []);
};

const setUnderAgeOfPromise = (b) => {
    return utils.asyncExec('HMSAds', null, 'setUnderAgeOfPromise', [b]);
};

const setConsentStatus = (status) => {
    return utils.asyncExec('HMSAds', null, 'setConsentStatus', [status]);
};

const setDebugNeedConsent = (need) => {
    return utils.asyncExec('HMSAds', null, 'setDebugNeedConsent', [need]);
};

const requestConsentUpdate = () => {
    return utils.asyncExec('HMSAds', null, 'requestConsentUpdate', []);
};

module.exports = {
    Reward: HMSRewardAds,
    Interstitial: HMSInterstitialAds,
    Splash: HMSSplashAds,
    Banner: HMSBannerAds,
    Native: HMSNativeAds,
    getOaidResult,
    getReferrerDetails,
    disconnectFromReferrerClient,
    verifyAdId,
    setRequestOptions,
    getSDKVersion,
    setVideoMuted,
    setVideoVolume,
    addTestDeviceId,
    getTestDeviceId,
    setUnderAgeOfPromise,
    setConsentStatus,
    setDebugNeedConsent,
    requestConsentUpdate,
    init
};


