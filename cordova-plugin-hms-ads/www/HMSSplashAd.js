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
exports.HMSSplashAd = void 0;
const ads_1 = require("./ads");
class HMSSplashAd extends ads_1.Ads {
    constructor() {
        super(HMSSplashAd.name.toLowerCase());
    }
    create() {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.create.call(this);
        });
    }
    on(eventName, callback) {
        super.on(eventName, callback);
    }
    setLogo(file) {
        return this.run('setLogo', { 'file': file });
    }
    setWideSloganResId(wideSloganResId) {
        return this.run('setWideSloganResId', { 'wideSloganResId': wideSloganResId });
    }
    setSloganResId(sloganResId) {
        return this.run('setSloganResId', { 'sloganResId': sloganResId });
    }
    load(options) {
        return this.run('load', options);
    }
    preloadAd(options) {
        return this.run('preloadAd', options);
    }
    destroyView() {
        return this.run('destroyView');
    }
    pauseView() {
        return this.run('pauseView');
    }
    resumeView() {
        return this.run('resumeView');
    }
    isLoading() {
        return this.run('isLoading');
    }
    isLoaded() {
        return this.run('isLoaded');
    }
    setAdDisplayListener() {
        return this.run('setAdDisplayListener');
    }
    setAudioFocusType(audioFocusType) {
        return this.run('setAudioFocusType', { "audioFocusType": audioFocusType });
    }
}
exports.HMSSplashAd = HMSSplashAd;
//# sourceMappingURL=HMSSplashAd.js.map