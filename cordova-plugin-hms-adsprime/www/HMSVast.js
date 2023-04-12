/*
    Copyright 2022-2023. Huawei Technologies Co., Ltd. All rights reserved.

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
exports.HMSVast = exports.VastAlreadyDefinedError = void 0;
const ads_1 = require("./ads");
const layout_1 = require("./layout");
const vastViews = new Map();
class VastAlreadyDefinedError extends Error {
    constructor() {
        super();
        this.name = "VastAlreadyDefinedError";
        this.message = "Vast object with the id specified already defined";
    }
}
exports.VastAlreadyDefinedError = VastAlreadyDefinedError;
class HMSVast extends ads_1.Ads {
    constructor() {
        super(HMSVast.name.toLowerCase());
        this.divId = "";
        this.element = null;
        this.vastCurrentProps = {};
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
            if (vastViews.has(divId))
                throw new VastAlreadyDefinedError();
            this.element = document.getElementById(this.divId);
            vastViews.set(divId, this);
            const vastMutationObserver = new MutationObserver(() => {
                if (this.element != null) {
                    this.forceUpdateVastXAndY();
                }
            });
            const config = { attributes: true, childList: true, subtree: true };
            vastMutationObserver.observe(document.body, config);
            const initialProps = (0, layout_1.getInitialPropsOfHTMLElementFrom)(divId);
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
            this.vastCurrentProps = initialProps;
            return _super.create.call(this, initialProps);
        });
    }
    scroll() {
        if (this.element === null)
            return;
        const vastRect = this.element.getBoundingClientRect();
        if (this.vastCurrentProps.x === vastRect.x && this.vastCurrentProps.y === vastRect.y)
            return;
        this.run('scroll', { 'scrolledX': vastRect.x, 'scrolledY': vastRect.y });
    }
    forceUpdateVastXAndY() {
        if (this.element === null)
            return;
        const vastRect = this.element.getBoundingClientRect();
        this.run('forceUpdateVastXAndY', { 'scrolledX': vastRect.x, 'scrolledY': vastRect.y,
            'pageYOffset': window.pageYOffset, 'pageXOffset': window.pageXOffset });
    }
    loadAd(options = {}) {
        return this.run('loadAd', options);
    }
    resume() {
        return this.run('resume');
    }
    pause() {
        return this.run('pause');
    }
    release() {
        vastViews.delete(this.divId);
        return this.run('release');
    }
    toggleMuteState(isMute) {
        return this.run('toggleMuteState', isMute);
    }
    startOrPause() {
        return this.run('startOrPause');
    }
}
exports.HMSVast = HMSVast;
//# sourceMappingURL=HMSVast.js.map