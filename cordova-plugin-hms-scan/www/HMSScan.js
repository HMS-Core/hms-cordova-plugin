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
exports.decodeStopViewService = exports.decodeOn = exports.requestPermissions = exports.requestPermission = exports.hasPermission = exports.disableLogger = exports.enableLogger = exports.detectForHmsDector = exports.compressBitmap = exports.buildBitmap = exports.decodeWithBitmap = exports.decode = exports.analyseFrame = exports.analyzInAsyn = exports.defaultViewMode = void 0;
const util_1 = require("./util");
var interfaces_1 = require("./interfaces");
Object.defineProperty(exports, "Colors", { enumerable: true, get: function () { return interfaces_1.Colors; } });
Object.defineProperty(exports, "ScanTypes", { enumerable: true, get: function () { return interfaces_1.ScanTypes; } });
Object.defineProperty(exports, "RectStyle", { enumerable: true, get: function () { return interfaces_1.RectStyle; } });
Object.defineProperty(exports, "HMSPermission", { enumerable: true, get: function () { return interfaces_1.HMSPermission; } });
Object.defineProperty(exports, "ErrorCorrectionLevel", { enumerable: true, get: function () { return interfaces_1.ErrorCorrectionLevel; } });
let HMSScanClass = 'HMSScan';
let HMSScanModule = 'HMSScanModule';
var currentProps = {};
var element = null;
function getInitialProps(divId) {
    element = document.getElementById(divId);
    if (element === null)
        return {};
    const clientRect = element.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(element, null);
    let props = {};
    props['x'] = clientRect.x;
    props['y'] = clientRect.y;
    props['width'] = parseInt(computedStyle.getPropertyValue('width'));
    props['height'] = parseInt(computedStyle.getPropertyValue('height'));
    return props;
}
function getInitialPropsMethod(divId) {
    const initialProps = getInitialProps(divId);
    const mutationObserver = new MutationObserver(() => {
        if (element != null) {
            forceUpdateXAndY();
        }
    });
    const config = { attributes: true, childList: true, subtree: true };
    mutationObserver.observe(document.body, config);
    currentProps = initialProps;
    return initialProps;
}
function forceUpdateXAndY() {
    if (element === null)
        return;
    const rect = element.getBoundingClientRect();
    return util_1.asyncExec(HMSScanClass, HMSScanModule, ['forceUpdateXAndY',
        rect.x, rect.y, window.pageXOffset, window.pageYOffset
    ]);
}
function defaultViewMode(scanTypes, viewType, errorCheck) {
    return util_1.asyncExec(HMSScanClass, HMSScanModule, ['defaultViewMode', scanTypes, viewType, errorCheck]);
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
function decode(scanFrameOptions, filePath, divId, customProps) {
    const initialProps = getInitialPropsMethod(divId);
    return util_1.asyncExec(HMSScanClass, HMSScanModule, ['decode', scanFrameOptions, filePath, initialProps, customProps]);
}
exports.decode = decode;
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
function decodeOn(eventName, call) {
    window.subscribeHMSEvent(eventName, call);
}
exports.decodeOn = decodeOn;
function decodeStopViewService() {
    return util_1.asyncExec(HMSScanClass, HMSScanModule, ['stopViewService']);
}
exports.decodeStopViewService = decodeStopViewService;
//# sourceMappingURL=HMSScan.js.map