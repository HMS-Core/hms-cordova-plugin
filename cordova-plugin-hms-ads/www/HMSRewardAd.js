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
exports.HMSRewardAd = void 0;
const ads_1 = require("./ads");
class HMSRewardAd extends ads_1.Ads {
    constructor() {
        super(HMSRewardAd.name.toLowerCase());
    }
    on(eventName, callback) {
        super.on(eventName, callback);
    }
    create(adId) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.create.call(this, { 'adId': adId });
        });
    }
    show(useActivity) {
        return this.run('show', { "useActivity": useActivity });
    }
    resume() {
        return this.run('resume');
    }
    pause() {
        return this.run('pause');
    }
    destroy() {
        return this.run('destroy');
    }
    loadAd(adParam = {}) {
        return this.run('loadAd', adParam);
    }
    isLoaded() {
        return this.run('isLoaded');
    }
    getData() {
        return this.run('getData');
    }
    getUserId() {
        return this.run('getUserId');
    }
    getReward() {
        return this.run('getReward');
    }
    setData(data) {
        return this.run('setData', { 'data': data });
    }
    setImmersive(immersive) {
        return this.run('setImmersive', { 'immersive': immersive });
    }
    setUserId(userId) {
        return this.run('setUserId', { 'userId': userId });
    }
    setRewardVerifyConfig(config) {
        return this.run('setRewardVerifyConfig', config);
    }
    getRewardVerifyConfig() {
        return this.run('setRewardVerifyConfig');
    }
    setOnMetadataChangedListener() {
        return this.run('setOnMetadataChangedListener');
    }
    setRewardAdListener() {
        return this.run('setRewardAdListener');
    }
}
exports.HMSRewardAd = HMSRewardAd;
//# sourceMappingURL=HMSRewardAd.js.map