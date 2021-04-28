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
exports.HMSRollAd = exports.RollAlreadyDefinedError = void 0;
const layout_1 = require("./layout");
const ads_1 = require("./ads");
const rollAdViews = new Map();
class RollAlreadyDefinedError extends Error {
    constructor() {
        super();
        this.name = "RollAlreadyDefinedError";
        this.message = "Roll ad object with the id specified already defined";
    }
}
exports.RollAlreadyDefinedError = RollAlreadyDefinedError;
class HMSRollAd extends ads_1.Ads {
    constructor() {
        super(HMSRollAd.name.toLowerCase());
        this.divId = "";
        this.element = null;
        this.rollCurrentProps = {};
    }
    on(eventName, callback) {
        super.on(eventName, callback);
    }
    create(params, divId, bounds) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.divId = divId;
            if (rollAdViews.has(divId))
                throw new RollAlreadyDefinedError();
            const initialProps = layout_1.getInitialPropsOfHTMLElementFrom(divId);
            rollAdViews.set(divId, this);
            this.element = document.getElementById(this.divId);
            const rollMutationObserver = new MutationObserver(() => {
                if (this.element != null) {
                    this.forceUpdateRollXAndY();
                }
            });
            const config = { attributes: true, childList: true, subtree: true };
            rollMutationObserver.observe(document.body, config);
            if (bounds) {
                if (bounds.marginBottom)
                    initialProps['marginBottom'] = bounds.marginBottom;
                if (bounds.marginRight)
                    initialProps['marginRight'] = bounds.marginRight;
                if (bounds.marginLeft)
                    initialProps['marginLeft'] = bounds.marginLeft;
                if (bounds.marginTop)
                    initialProps['marginTop'] = bounds.marginTop;
            }
            this.rollCurrentProps = initialProps;
            return _super.create.call(this, initialProps, params);
        });
    }
    scroll() {
        if (this.element === null)
            return;
        const rollRect = this.element.getBoundingClientRect();
        if (this.rollCurrentProps.x === rollRect.x && this.rollCurrentProps.y === rollRect.y)
            return;
        this.run('scroll', { 'scrolledX': rollRect.x, 'scrolledY': rollRect.y });
    }
    forceUpdateRollXAndY() {
        if (this.element === null)
            return;
        const rollRect = this.element.getBoundingClientRect();
        this.run('forceUpdateRollXAndY', { 'scrolledX': rollRect.x, 'scrolledY': rollRect.y,
            'pageYOffset': window.pageYOffset, 'pageXOffset': window.pageXOffset });
    }
    //InstreamLoader
    loadAd(options) {
        return this.run('loadAd', options);
    }
    isLoading() {
        return this.run('isLoading');
    }
    //InstreamView 
    destroy() {
        rollAdViews.delete(this.divId);
        return this.run('destroy');
    }
    pause() {
        return this.run('pause');
    }
    isPlaying() {
        return this.run('isPlaying');
    }
    mute() {
        return this.run('mute');
    }
    unmute() {
        return this.run('unmute');
    }
    onClose() {
        return this.run('onClose');
    }
    play() {
        return this.run('play');
    }
    stop() {
        return this.run('stop');
    }
    removeInstreamMediaChangeListener() {
        return this.run('removeInstreamMediaChangeListener');
    }
    removeMediaMuteListener() {
        return this.run('removeMediaMuteListener');
    }
    removeInstreamMediaStateListener() {
        return this.run('removeInstreamMediaStateListener');
    }
    setInstreamAds() {
        return this.run('setInstreamAds');
    }
    setInstreamMediaChangeListener() {
        return this.run('setInstreamMediaChangeListener');
    }
    setMediaMuteListener() {
        return this.run('setMediaMuteListener');
    }
    setInstreamMediaStateListener() {
        return this.run('setInstreamMediaStateListener');
    }
    setOnInstreamAdClickListener() {
        return this.run('setOnInstreamAdClickListener');
    }
    //InstreamAd
    getAdSource() {
        return this.run('getAdSource');
    }
    getDuration() {
        return this.run('getDuration');
    }
    getWhyThisAd() {
        return this.run('getWhyThisAd');
    }
    getAdSign() {
        return this.run('getAdSign');
    }
    isClicked() {
        return this.run('isClicked');
    }
    isExpired() {
        return this.run('isExpired');
    }
    isImageAd() {
        return this.run('isImageAd');
    }
    isShown() {
        return this.run('isShown');
    }
    isVideoAd() {
        return this.run('isVideoAd');
    }
    getCallToAction() {
        return this.run('getCallToAction');
    }
}
exports.HMSRollAd = HMSRollAd;
//# sourceMappingURL=HMSRollAd.js.map