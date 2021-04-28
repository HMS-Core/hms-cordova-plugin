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
exports.HMSBannerAd = exports.BannerAlreadyDefinedError = void 0;
const layout_1 = require("./layout");
const ads_1 = require("./ads");
const bannerViews = new Map();
class BannerAlreadyDefinedError extends Error {
    constructor() {
        super();
        this.name = "BannerAlreadyDefinedError";
        this.message = "Banner object with the id specified already defined";
    }
}
exports.BannerAlreadyDefinedError = BannerAlreadyDefinedError;
class HMSBannerAd extends ads_1.Ads {
    constructor() {
        super(HMSBannerAd.name.toLowerCase());
        this.divId = "";
        this.element = null;
        this.bannerCurrentProps = {};
    }
    on(eventName, callback) {
        super.on(eventName, callback);
    }
    create(divId, bounds) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.divId = divId;
            if (bannerViews.has(divId))
                throw new BannerAlreadyDefinedError();
            this.element = document.getElementById(this.divId);
            bannerViews.set(divId, this);
            const initialProps = layout_1.getInitialPropsOfHTMLElementFrom(divId);
            if (bounds) {
                if (bounds.marginLeft)
                    initialProps['marginLeft'] = bounds.marginLeft;
                if (bounds.marginTop)
                    initialProps['marginTop'] = bounds.marginTop;
                if (bounds.marginBottom)
                    initialProps['marginBottom'] = bounds.marginBottom;
                if (bounds.marginRight)
                    initialProps['marginRight'] = bounds.marginRight;
            }
            const bannerMutationObserver = new MutationObserver(() => {
                if (this.element != null) {
                    this.forceUpdateBannerXAndY();
                }
            });
            const config = { attributes: true, childList: true, subtree: true };
            bannerMutationObserver.observe(document.body, config);
            this.bannerCurrentProps = initialProps;
            return _super.create.call(this, initialProps);
        });
    }
    scroll() {
        if (this.element === null)
            return;
        const bannerRect = this.element.getBoundingClientRect();
        if (this.bannerCurrentProps.x === bannerRect.x && this.bannerCurrentProps.y === bannerRect.y)
            return;
        this.run('scroll', { 'scrolledX': bannerRect.x, 'scrolledY': bannerRect.y });
    }
    forceUpdateBannerXAndY() {
        if (this.element === null)
            return;
        const bannerRect = this.element.getBoundingClientRect();
        this.run('forceUpdateBannerXAndY', { 'scrolledX': bannerRect.x, 'scrolledY': bannerRect.y,
            'pageYOffset': window.pageYOffset, 'pageXOffset': window.pageXOffset });
    }
    getAdId() {
        return this.run('getAdId');
    }
    setAdId(adId) {
        return this.run('setAdId', { 'adId': adId });
    }
    getBannerAdSize() {
        return this.run('getBannerAdSize');
    }
    setBannerAdSize(bannerAdSize) {
        return this.run('setBannerAdSize', { 'bannerAdSize': bannerAdSize });
    }
    setBackgroundColor(bgColor) {
        return this.run('setBackgroundColor', { 'backgroundColor': bgColor });
    }
    setBannerRefresh(bannerRefresh) {
        return this.run('setBannerRefresh', { 'bannerRefresh': bannerRefresh });
    }
    setAdListener() {
        return this.run('setAdListener');
    }
    isLoading() {
        return this.run('isLoading');
    }
    loadAd(adParam = {}) {
        return this.run('loadAd', adParam);
    }
    pause() {
        return this.run('pause');
    }
    resume() {
        return this.run('resume');
    }
    destroy() {
        bannerViews.delete(this.divId);
        return this.run('destroy');
    }
    getHeight() {
        return this.run('getHeight');
    }
    getHeightPx() {
        return this.run('getHeightPx');
    }
    getWidth() {
        return this.run('getWidth');
    }
    getWidthPx() {
        return this.run('getWidthPx');
    }
    isAutoHeightSize() {
        return this.run('isAutoHeightSize');
    }
    isDynamicSize() {
        return this.run('isDynamicSize');
    }
    isFullWidthSize() {
        return this.run('isFullWidthSize');
    }
    getCurrentDirectionBannerSize(width) {
        return this.run('getCurrentDirectionBannerSize', { "width": width });
    }
    getLandscapeBannerSize(width) {
        return this.run('getLandscapeBannerSize', { "width": width });
    }
    getPortraitBannerSize(width) {
        return this.run('getPortraitBannerSize', { "width": width });
    }
}
exports.HMSBannerAd = HMSBannerAd;
//# sourceMappingURL=HMSBannerAd.js.map