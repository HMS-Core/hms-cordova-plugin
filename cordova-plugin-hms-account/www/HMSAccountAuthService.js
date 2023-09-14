/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIndependentSignIn = exports.getChannel = exports.silentSignIn = exports.cancelAuthorization = exports.signOut = exports.signIn = void 0;
const utils_1 = require("./utils");
function signIn(signInData, packageName) {
    return (0, utils_1.asyncExec)('HMSAccount', 'HMSAuthService', ['signIn', signInData ? signInData : [], packageName]);
}
exports.signIn = signIn;
function signOut() {
    return (0, utils_1.asyncExec)('HMSAccount', 'HMSAuthService', ['signOut']);
}
exports.signOut = signOut;
function cancelAuthorization() {
    return (0, utils_1.asyncExec)('HMSAccount', 'HMSAuthService', ['cancelAuthorization']);
}
exports.cancelAuthorization = cancelAuthorization;
function silentSignIn(authParams, packageName) {
    return (0, utils_1.asyncExec)('HMSAccount', 'HMSAuthService', ['silentSignIn', authParams, packageName]);
}
exports.silentSignIn = silentSignIn;
function getChannel() {
    return (0, utils_1.asyncExec)('HMSAccount', 'HMSAuthService', ['getChannel']);
}
exports.getChannel = getChannel;
function getIndependentSignIn(accessToken) {
    return (0, utils_1.asyncExec)('HMSAccount', 'HMSAuthService', ['getIndependentSignIn', accessToken]);
}
exports.getIndependentSignIn = getIndependentSignIn;
//# sourceMappingURL=HMSAccountAuthService.js.map