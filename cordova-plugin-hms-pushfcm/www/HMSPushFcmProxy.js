"use strict";
/*
    Copyright 2021-2021. Huawei Technologies Co., Ltd. All rights reserved.

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableLogger = exports.enableLogger = exports.setCountryCode = exports.isProxyInitEnabled = exports.init = void 0;
const utils_1 = require("./utils");
function init() {
    return utils_1.asyncExec('HMSPushFcmProxy', 'FcmProxy', ['init']);
}
exports.init = init;
function isProxyInitEnabled() {
    return utils_1.asyncExec('HMSPushFcmProxy', 'FcmProxy', ['isProxyInitEnabled']);
}
exports.isProxyInitEnabled = isProxyInitEnabled;
function setCountryCode(countryCode) {
    return utils_1.asyncExec('HMSPushFcmProxy', 'FcmProxy', ['setCountryCode', countryCode]);
}
exports.setCountryCode = setCountryCode;
function enableLogger() {
    return utils_1.asyncExec('HMSPushFcmProxy', 'FcmProxy', ['enableLogger']);
}
exports.enableLogger = enableLogger;
function disableLogger() {
    return utils_1.asyncExec('HMSPushFcmProxy', 'FcmProxy', ['disableLogger']);
}
exports.disableLogger = disableLogger;
//# sourceMappingURL=HMSPushFcmProxy.js.map