/*
    Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

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
exports.disableLogger = exports.enableLogger = exports.requestPermissions = exports.requestPermission = exports.hasPermission = void 0;
const util_1 = require("./util");
var interfaces_1 = require("./interfaces");
Object.defineProperty(exports, "HMSPermission", { enumerable: true, get: function () { return interfaces_1.HMSPermission; } });
let HMSAwarenessClass = 'HMSAwareness';
function hasPermission(permission) {
    return util_1.asyncExec(HMSAwarenessClass, 'HMSAwarenessModule', ['hasPermission', permission]);
}
exports.hasPermission = hasPermission;
;
function requestPermission(permission) {
    return util_1.asyncExec(HMSAwarenessClass, 'HMSAwarenessModule', ['requestPermission', permission]);
}
exports.requestPermission = requestPermission;
;
function requestPermissions(permissions) {
    return util_1.asyncExec(HMSAwarenessClass, 'HMSAwarenessModule', ['requestPermissions', permissions]);
}
exports.requestPermissions = requestPermissions;
;
function enableLogger() {
    return util_1.asyncExec(HMSAwarenessClass, 'HMSAwarenessModule', ['enableLogger']);
}
exports.enableLogger = enableLogger;
;
function disableLogger() {
    return util_1.asyncExec(HMSAwarenessClass, 'HMSAwarenessModule', ['disableLogger']);
}
exports.disableLogger = disableLogger;
;
//# sourceMappingURL=HMSAwareness.js.map