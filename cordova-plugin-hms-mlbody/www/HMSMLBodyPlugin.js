/*
    Copyright 2023. Huawei Technologies Co., Ltd. All rights reserved.

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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
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
exports.getCountryCode = exports.setUserRegion = exports.disableLogger = exports.enableLogger = exports.appSetting = exports.mlFrame = exports.serviceInitializer = exports.getLensType = exports.getDisplayDimension = exports.destroy = exports.photograph = exports.doZoom = exports.liveEngineAnalyser = exports.gestureliveEngineAnalyser = exports.MLLive = void 0;
const util_1 = require("./util");
__exportStar(require("./interfaces"), exports);
//ML
function getInitialProps(divId) {
    const element = document.getElementById(divId);
    if (element === null)
        return {};
    const clientRect = element.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(element, null);
    let props = {};
    props["x"] = clientRect.x;
    props["y"] = clientRect.y;
    props["width"] = parseInt(computedStyle.getPropertyValue("width"));
    props["height"] = parseInt(computedStyle.getPropertyValue("height"));
    return props;
}
class MLLive {
    constructor(scene, divId) {
        this.scene = scene;
        this.divId = divId;
    }
    execHelper(func, args) {
        return (0, util_1.asyncExec)("HMSMLBodyPlugin", func, args);
    }
    on(eventName, call) {
        window.subscribeHMSEvent(eventName, call);
    }
    startMLLive(config, bounds) {
        const initialProps = getInitialProps(this.divId);
        if (bounds) {
            if (bounds.marginLeft)
                initialProps["marginLeft"] = bounds.marginLeft;
            if (bounds.marginTop)
                initialProps["marginTop"] = bounds.marginTop;
            if (bounds.marginBottom)
                initialProps["marginBottom"] = bounds.marginBottom;
            if (bounds.marginRight)
                initialProps["marginRight"] = bounds.marginRight;
        }
        this.mutationObserver = new MutationObserver(() => {
            const sceneRect = document
                .getElementById(this.divId)
                .getBoundingClientRect();
            this.forceUpdateXAndY(sceneRect.x, sceneRect.y);
        });
        const mutationObserverConfig = {
            attributes: true,
            childList: true,
            subtree: true,
        };
        this.mutationObserver.observe(document.body, mutationObserverConfig);
        return this.execHelper(this.scene, [config, initialProps]);
    }
    setConfig(config) {
        return this.execHelper("setConfig", [this.scene, config]);
    }
    scroll() {
        const sceneRect = document
            .getElementById(this.divId)
            .getBoundingClientRect();
        return this.forceUpdateXAndY(sceneRect.x, sceneRect.y);
    }
    forceUpdateXAndY(x, y) {
        return this.execHelper("forceUpdateXAndY", [this.scene, x, y]);
    }
}
exports.MLLive = MLLive;
class gestureliveEngineAnalyser extends MLLive {
    constructor(divId) {
        super("ACTION_GESTURE_LIVE_ANALYSE", divId);
    }
}
exports.gestureliveEngineAnalyser = gestureliveEngineAnalyser;
class liveEngineAnalyser extends MLLive {
    constructor(divId) {
        super("ACTION_LIVE_ANALYSE", divId);
    }
}
exports.liveEngineAnalyser = liveEngineAnalyser;
function doZoom(doZoomReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLBodyPlugin", "ACTION_LIVE_DOZOOM", [
            doZoomReq
        ]);
    });
}
exports.doZoom = doZoom;
function photograph() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLBodyPlugin", "ACTION_LIVE_PHOTOGRAPHY_ANALYSE", []);
    });
}
exports.photograph = photograph;
function destroy() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLBodyPlugin", "ACTION_LIVE_DESTROY", []);
    });
}
exports.destroy = destroy;
function getDisplayDimension() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLBodyPlugin", "ACTION_LIVE_DISPLAYDIMENSION", []);
    });
}
exports.getDisplayDimension = getDisplayDimension;
function getLensType() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLBodyPlugin", "ACTION_LIVE_GETLENSTYPE", []);
    });
}
exports.getLensType = getLensType;
function serviceInitializer(params) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLBodyPlugin", "HMSMLKIT_INITILALIZER", [
            params
        ]);
    });
}
exports.serviceInitializer = serviceInitializer;
function mlFrame(mlFrameReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLBodyPlugin", "ACTION_MLFRAME", [
            mlFrameReq
        ]);
    });
}
exports.mlFrame = mlFrame;
function appSetting(appSettingReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLBodyPlugin", "ACTION_APP_SETTING", [
            appSettingReq
        ]);
    });
}
exports.appSetting = appSetting;
function enableLogger() {
    return (0, util_1.asyncExec)("HMSMLBodyPlugin", "enableLogger", []);
}
exports.enableLogger = enableLogger;
function disableLogger() {
    return (0, util_1.asyncExec)("HMSMLBodyPlugin", "disableLogger", []);
}
exports.disableLogger = disableLogger;
/// Sets a data processing location when you choose to manually manage and specify such a location.
///
/// REGION_DR_UNKNOWN = 1001,
/// REGION_DR_CHINA = 1002,
/// REGION_DR_RUSSIA = 1005,
/// REGION_DR_GERMAN = 1006,
/// REGION_DR_SINGAPORE = 1007
function setUserRegion(region) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLBodyPlugin", "setUserRegion", [region]);
    });
}
exports.setUserRegion = setUserRegion;
function getCountryCode() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLBodyPlugin", "getCountryCode", []);
    });
}
exports.getCountryCode = getCountryCode;
//# sourceMappingURL=HMSMLBodyPlugin.js.map