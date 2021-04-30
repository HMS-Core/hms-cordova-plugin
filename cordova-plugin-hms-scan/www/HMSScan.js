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
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestPermissions = exports.requestPermission = exports.hasPermission = exports.disableLogger = exports.enableLogger = exports.detectForHmsDector = exports.compressBitmap = exports.buildBitmap = exports.decodeWithBitmap = exports.analyseFrame = exports.analyzInAsyn = exports.defaultViewMode = exports.ErrorCorrectionLevel = exports.HMSPermission = exports.RectStyle = exports.ScanTypes = exports.Colors = void 0;
const util_1 = require("./util");
var interfaces_1 = require("./interfaces");
Object.defineProperty(exports, "Colors", { enumerable: true, get: function () { return interfaces_1.Colors; } });
Object.defineProperty(exports, "ScanTypes", { enumerable: true, get: function () { return interfaces_1.ScanTypes; } });
Object.defineProperty(exports, "RectStyle", { enumerable: true, get: function () { return interfaces_1.RectStyle; } });
Object.defineProperty(exports, "HMSPermission", { enumerable: true, get: function () { return interfaces_1.HMSPermission; } });
Object.defineProperty(exports, "ErrorCorrectionLevel", { enumerable: true, get: function () { return interfaces_1.ErrorCorrectionLevel; } });
let HMSScanClass = 'HMSScan';
let HMSScanModule = 'HMSScanModule';
function defaultViewMode(scanTypes) {
    return util_1.asyncExec(HMSScanClass, HMSScanModule, ['defaultViewMode', scanTypes]);
}
exports.defaultViewMode = defaultViewMode;
;
function analyzInAsyn(filePath, scanTypes) {
    return util_1.asyncExec(HMSScanClass, HMSScanModule, ['analyzInAsyn', filePath, scanTypes]);
}
exports.analyzInAsyn = analyzInAsyn;
;
function analyseFrame(filePath, scanTypes) {
    return util_1.asyncExec(HMSScanClass, HMSScanModule, ['analyseFrame', filePath, scanTypes]);
}
exports.analyseFrame = analyseFrame;
;
function decodeWithBitmap(filePath, scanTypes) {
    return util_1.asyncExec(HMSScanClass, HMSScanModule, ['decodeWithBitmap', filePath, scanTypes]);
}
exports.decodeWithBitmap = decodeWithBitmap;
;
function buildBitmap(params) {
    return util_1.asyncExec(HMSScanClass, HMSScanModule, ['buildBitmap', params]);
}
exports.buildBitmap = buildBitmap;
;
function compressBitmap(path) {
    return util_1.asyncExec(HMSScanClass, HMSScanModule, ['compressBitmap', path]);
}
exports.compressBitmap = compressBitmap;
;
function detectForHmsDector(path, scanTypes) {
    return util_1.asyncExec(HMSScanClass, HMSScanModule, ['detectForHmsDector', path, scanTypes]);
}
exports.detectForHmsDector = detectForHmsDector;
;
function enableLogger() {
    return util_1.asyncExec(HMSScanClass, HMSScanModule, ['enableLogger']);
}
exports.enableLogger = enableLogger;
;
function disableLogger() {
    return util_1.asyncExec(HMSScanClass, HMSScanModule, ['disableLogger']);
}
exports.disableLogger = disableLogger;
;
function hasPermission(permission) {
    return util_1.asyncExec(HMSScanClass, HMSScanModule, ['hasPermission', permission]);
}
exports.hasPermission = hasPermission;
;
function requestPermission(permission) {
    return util_1.asyncExec(HMSScanClass, HMSScanModule, ['requestPermission', permission]);
}
exports.requestPermission = requestPermission;
;
function requestPermissions(permissions) {
    return util_1.asyncExec(HMSScanClass, HMSScanModule, ['requestPermissions', permissions]);
}
exports.requestPermissions = requestPermissions;
;
//# sourceMappingURL=HMSScan.js.map