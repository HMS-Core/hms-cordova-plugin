"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestAccessToken = exports.requestUnionId = exports.deleteAuthInfo = void 0;
const utils_1 = require("./utils");
function deleteAuthInfo(accessToken) {
    return utils_1.asyncExec('HMSHuaweiIdAuthTool', 'deleteAuthInfo', [accessToken]);
}
exports.deleteAuthInfo = deleteAuthInfo;
function requestUnionId(huaweiAccountName) {
    return utils_1.asyncExec('HMSHuaweiIdAuthTool', 'requestUnionId', [huaweiAccountName]);
}
exports.requestUnionId = requestUnionId;
function requestAccessToken(account, authScopeList) {
    return utils_1.asyncExec('HMSHuaweiIdAuthTool', 'requestAccessToken', [account, authScopeList]);
}
exports.requestAccessToken = requestAccessToken;
//# sourceMappingURL=HMSHuaweiIdAuthTool.js.map