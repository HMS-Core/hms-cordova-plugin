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
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HMSNativeAd = exports.NativeAlreadyDefinedError = void 0;
const layout_1 = require("./layout");
const ads_1 = require("./ads");
const nativeViews = new Map();
class NativeAlreadyDefinedError extends Error {
    constructor() {
        super();
        this.name = "NativeAlreadyDefinedError";
        this.message = "Native object with the id specified already defined";
    }
}
exports.NativeAlreadyDefinedError = NativeAlreadyDefinedError;
class HMSNativeAd extends ads_1.Ads {
    constructor() {
        super(HMSNativeAd.name.toLowerCase());
        this.divId = "";
        this.element = null;
        this.nativeCurrentProps = {};
    }
    on(eventName, callback) {
        super.on(eventName, callback);
    }
    create(options, bounds) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.divId = options.div;
            if (nativeViews.has(options.div))
                throw new NativeAlreadyDefinedError();
            nativeViews.set(options.div, this);
            this.element = document.getElementById(this.divId);
            const nativeMutationObserver = new MutationObserver(() => {
                if (this.element != null) {
                    this.forceUpdateNativeXAndY();
                }
            });
            const config = { attributes: true, childList: true, subtree: true };
            nativeMutationObserver.observe(document.body, config);
            const initialProps = layout_1.getInitialPropsOfHTMLElementFrom(options.div);
            if (bounds) {
                if (bounds.marginRight)
                    initialProps['marginRight'] = bounds.marginRight;
                if (bounds.marginTop)
                    initialProps['marginTop'] = bounds.marginTop;
                if (bounds.marginBottom)
                    initialProps['marginBottom'] = bounds.marginBottom;
                if (bounds.marginLeft)
                    initialProps['marginLeft'] = bounds.marginLeft;
            }
            this.nativeCurrentProps = initialProps;
            return _super.create.call(this, initialProps, options);
        });
    }
    scroll() {
        if (this.element === null)
            return;
        const nativeRect = this.element.getBoundingClientRect();
        if (this.nativeCurrentProps.x === nativeRect.x && this.nativeCurrentProps.y === nativeRect.y)
            return;
        this.run('scroll', { 'scrolledX': nativeRect.x, 'scrolledY': nativeRect.y });
    }
    forceUpdateNativeXAndY() {
        if (this.element === null)
            return;
        const nativeRect = this.element.getBoundingClientRect();
        this.run('forceUpdateNativeXAndY', { 'scrolledX': nativeRect.x, 'scrolledY': nativeRect.y,
            'pageYOffset': window.pageYOffset, 'pageXOffset': window.pageXOffset });
    }
    loadAd(options = {}) {
        return this.run('loadAd', options);
    }
    show() {
        return this.run('show');
    }
    isLoading() {
        return this.run('isLoading');
    }
    destroy() {
        nativeViews.delete(this.divId);
        return this.run('destroy');
    }
    dislikeAd(dislikeReason) {
        return this.run('dislikeAd', { 'dislikeAdReason': dislikeReason });
    }
    setAllowCustomClick() {
        return this.run('setAllowCustomClick');
    }
    getAdSource() {
        return this.run('getAdSource');
    }
    getDescription() {
        return this.run('getDescription');
    }
    getCallToAction() {
        return this.run('getCallToAction');
    }
    getDislikeAdReasons() {
        return this.run('getDislikeAdReasons');
    }
    isCustomClickAllowed() {
        return this.run('isCustomClickAllowed');
    }
    isCustomDislikeThisAdEnabled() {
        return this.run('isCustomDislikeThisAdEnabled');
    }
    recordClickEvent() {
        return this.run('recordClickEvent');
    }
    recordImpressionEvent(impressionData) {
        return this.run('recordImpressionEvent', impressionData);
    }
    getUniqueId() {
        return this.run('getUniqueId');
    }
    setDislikeAdListener() {
        return this.run('setDislikeAdListener');
    }
    gotoWhyThisAdPage(useView) {
        return this.run('gotoWhyThisAdPage', { "useView": useView });
    }
    getAdSign() {
        return this.run('getAdSign');
    }
    getTitle() {
        return this.run('getTitle');
    }
    getWhyThisAd() {
        return this.run('getWhyThisAd');
    }
    recordShowStartEvent(showStartData) {
        return this.run('recordShowStartEvent', showStartData);
    }
    onAdClose(keywords) {
        return this.run('onAdClose', { 'keywords': keywords });
    }
    getNativeAdConfiguration() {
        return this.run('getNativeAdConfiguration');
    }
    // VideoOperator
    videoOperatorGetAspectRatio() {
        return this.run('videoOperatorGetAspectRatio');
    }
    videoOperatorHasVideo() {
        return this.run('videoOperatorHasVideo');
    }
    videoOperatorIsCustomizeOperateEnabled() {
        return this.run('videoOperatorIsCustomizeOperateEnabled');
    }
    videoOperatorIsMuted() {
        return this.run('videoOperatorIsMuted');
    }
    videoOperatorMute(mute) {
        return this.run('videoOperatorMute', { "mute": mute });
    }
    videoOperatorPause() {
        return this.run('videoOperatorPause');
    }
    videoOperatorPlay() {
        return this.run('videoOperatorPlay');
    }
    videoOperatorStop() {
        return this.run('videoOperatorStop');
    }
}
exports.HMSNativeAd = HMSNativeAd;
//# sourceMappingURL=HMSNativeAd.js.map