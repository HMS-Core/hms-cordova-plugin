"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncExec = void 0;
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
const cordova_1 = require("cordova");
function asyncExec(clazz, ref, args = []) {
    return new Promise((resolve, reject) => {
        cordova_1.exec(resolve, reject, clazz, ref, args);
    });
}
exports.asyncExec = asyncExec;
function initEventHandler() {
    if (window.HMSEvents != null)
        return;
    window.HMSEvents = {};
    window.runHMSEvent = (eventName, data, data2) => {
        if (Object.prototype.hasOwnProperty.call(window.HMSEvents, eventName)) {
            if (data2)
                window.HMSEvents[eventName](data, data2);
            else
                window.HMSEvents[eventName](data);
        }
    };
    window.subscribeHMSEvent = (eventName, handler) => {
        window.HMSEvents[eventName] = handler;
    };
}
initEventHandler();
//# sourceMappingURL=utils.js.map