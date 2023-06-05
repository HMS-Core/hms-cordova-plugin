"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopViewService = exports.on = exports.multiProcessorAsynMode = exports.multiProcessorSynMode = exports.bitmapMode = exports.RectStyle = exports.ScanTypes = exports.Colors = void 0;
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
const util_1 = require("./util");
var interfaces_1 = require("./interfaces");
Object.defineProperty(exports, "Colors", { enumerable: true, get: function () { return interfaces_1.Colors; } });
Object.defineProperty(exports, "ScanTypes", { enumerable: true, get: function () { return interfaces_1.ScanTypes; } });
Object.defineProperty(exports, "RectStyle", { enumerable: true, get: function () { return interfaces_1.RectStyle; } });
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
function bitmapMode(divId, userProps) {
    const initialProps = getInitialPropsMethod(divId);
    const customProps = userProps;
    return (0, util_1.asyncExec)('HMSScan', 'ViewBaseModule', ['multiProcessorMode', initialProps, customProps, 1]);
}
exports.bitmapMode = bitmapMode;
;
function multiProcessorSynMode(divId, userProps) {
    const initialProps = getInitialPropsMethod(divId);
    const customProps = userProps;
    return (0, util_1.asyncExec)('HMSScan', 'ViewBaseModule', ['multiProcessorMode', initialProps, customProps, 2]);
}
exports.multiProcessorSynMode = multiProcessorSynMode;
;
function multiProcessorAsynMode(divId, userProps) {
    const initialProps = getInitialPropsMethod(divId);
    const customProps = userProps;
    return (0, util_1.asyncExec)('HMSScan', 'ViewBaseModule', ['multiProcessorMode', initialProps, customProps, 3]);
}
exports.multiProcessorAsynMode = multiProcessorAsynMode;
;
function on(eventName, call) {
    window.subscribeHMSEvent(eventName, call);
}
exports.on = on;
function stopViewService() {
    return (0, util_1.asyncExec)('HMSScan', 'ViewBaseModule', ['stopViewService']);
}
exports.stopViewService = stopViewService;
function forceUpdateXAndY() {
    if (element === null)
        return;
    const rect = element.getBoundingClientRect();
    return (0, util_1.asyncExec)('HMSScan', 'ViewBaseModule', ['forceUpdateXAndY',
        rect.x, rect.y, window.pageXOffset, window.pageYOffset
    ]);
}
//# sourceMappingURL=MultiProcessor.js.map