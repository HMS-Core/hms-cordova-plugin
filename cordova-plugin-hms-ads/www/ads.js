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
exports.Ads = void 0;
const utils_1 = require("./utils");
class Ads {
    constructor(objectName = 'ads') {
        this.id = -1;
        this.objectName = objectName;
        console.log(`New ads object created, objType=${this.objectName}..`);
    }
    on(eventName, handler) {
        const instanceEventName = `${eventName}_${this.id}`;
        console.log(`${this.objectName} :: ${instanceEventName} -> event registeration started..`);
        window.subscribeHMSEvent(instanceEventName, handler);
    }
    create(...options) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`${this.objectName} ads creation started..`);
            if (this.id != -1)
                return this;
            console.log('createAd starting');
            const result = yield utils_1.asyncExec('HMSAds', 'AdManagerModule', ['createAd', this.objectName, options]);
            console.log('result', JSON.stringify(result));
            this.id = result.id;
            console.log(`${this.objectName} ads creation result id=${this.id}`);
            return this;
        });
    }
    run(funcName, opts = {}) {
        console.log(`run :: ${funcName} -> function called by object=${this.objectName}`);
        return utils_1.asyncExec('HMSAds', 'AdManagerModule', ['run', this.objectName, this.id, funcName, opts]);
    }
}
exports.Ads = Ads;
//# sourceMappingURL=ads.js.map