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
exports.HMSInterstitialAd = void 0;
const ads_1 = require("./ads");
class HMSInterstitialAd extends ads_1.Ads {
    constructor() {
        super(HMSInterstitialAd.name.toLowerCase());
    }
    on(eventName, callback) {
        super.on(eventName, callback);
    }
    create(useActivity) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.create.call(this, { "useActivity": useActivity });
        });
    }
    // Interstitial Ad Methods
    show() {
        return this.run('show');
    }
    isLoaded() {
        return this.run('isLoaded');
    }
    isLoading() {
        return this.run('isLoading');
    }
    loadAd(adParam = {}) {
        return this.run('loadAd', adParam);
    }
    setAdId(adId) {
        return this.run('setAdId', { 'adId': adId });
    }
    getAdId() {
        return this.run('getAdId');
    }
    setAdListener() {
        return this.run('setAdListener');
    }
    setRewardAdListener() {
        return this.run('setAdListener');
    }
}
exports.HMSInterstitialAd = HMSInterstitialAd;
//# sourceMappingURL=HMSInterstitialAd.js.map