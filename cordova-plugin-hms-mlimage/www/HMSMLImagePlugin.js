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
exports.obtainPicture = exports.closeCompositeAnalyser = exports.infoCompositeAnalyser = exports.initializeCompositeAnalyzer = exports.customModelAnalyser = exports.getLensType = exports.getDisplayDimension = exports.doZoom = exports.destroy = exports.photograph = exports.liveCompositeAnalyser = exports.liveEngineAnalyser = exports.mlFrame = exports.disableLogger = exports.enableLogger = exports.getCountryCode = exports.setUserRegion = exports.appSetting = exports.serviceInitializer = exports.MLLive = void 0;
const util_1 = require("./util");
__exportStar(require("./interfaces"), exports);
class MLLive {
    constructor(scene, divId) {
        this.scene = scene;
        this.divId = divId;
    }
    execHelper(func, args) {
        return (0, util_1.asyncExec)("HMSMLImagePlugin", func, args);
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
        return this.execHelper("HMSMLLensEngine", [this.scene, config, initialProps]);
    }
    setConfig(config) {
        return this.execHelper("HMSMLLensEngine", ["setConfig", this.scene, config]);
    }
    scroll() {
        const sceneRect = document
            .getElementById(this.divId)
            .getBoundingClientRect();
        return this.forceUpdateXAndY(sceneRect.x, sceneRect.y);
    }
    forceUpdateXAndY(x, y) {
        return this.execHelper("HMSMLLensEngine", ["forceUpdateXAndY", this.scene, x, y]);
    }
}
exports.MLLive = MLLive;
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
function serviceInitializer(params) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImagePlugin", "HMSMLApplication", [
            "serviceInitializer",
            params
        ]);
    });
}
exports.serviceInitializer = serviceInitializer;
function appSetting(appSettingReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImagePlugin", "HMSMLApplication", [
            "appSetting",
            appSettingReq
        ]);
    });
}
exports.appSetting = appSetting;
/// Sets a data processing location when you choose to manually manage and specify such a location.
///
/// REGION_DR_UNKNOWN = 1001,
/// REGION_DR_CHINA = 1002,
/// REGION_DR_RUSSIA = 1005,
/// REGION_DR_GERMAN = 1006,
/// REGION_DR_SINGAPORE = 1007
function setUserRegion(region) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImagePlugin", "HMSMLApplication", [
            "setUserRegion",
            region
        ]);
    });
}
exports.setUserRegion = setUserRegion;
function getCountryCode() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImagePlugin", "HMSMLApplication", [
            "getCountryCode"
        ]);
    });
}
exports.getCountryCode = getCountryCode;
function enableLogger() {
    return (0, util_1.asyncExec)("HMSMLImagePlugin", "HMSMLApplication", [
        "enableLogger"
    ]);
}
exports.enableLogger = enableLogger;
function disableLogger() {
    return (0, util_1.asyncExec)("HMSMLImagePlugin", "HMSMLApplication", [
        "disableLogger"
    ]);
}
exports.disableLogger = disableLogger;
function mlFrame(mlFrameReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImagePlugin", "HMSMLFrame", [
            "mlFrame",
            mlFrameReq
        ]);
    });
}
exports.mlFrame = mlFrame;
class liveEngineAnalyser extends MLLive {
    constructor(divId) {
        super("liveEngineAnalyser", divId);
    }
}
exports.liveEngineAnalyser = liveEngineAnalyser;
class liveCompositeAnalyser extends MLLive {
    constructor(divId) {
        super("liveCompositeAnalyser", divId);
    }
}
exports.liveCompositeAnalyser = liveCompositeAnalyser;
function photograph() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImagePlugin", "HMSMLLensEngine", [
            "photograph"
        ]);
    });
}
exports.photograph = photograph;
function destroy() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImagePlugin", "HMSMLLensEngine", [
            "destroy"
        ]);
    });
}
exports.destroy = destroy;
function doZoom(doZoomReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImagePlugin", "HMSMLLensEngine", [
            "doZoom",
            doZoomReq
        ]);
    });
}
exports.doZoom = doZoom;
function getDisplayDimension() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImagePlugin", "HMSMLLensEngine", [
            "getDisplayDimension"
        ]);
    });
}
exports.getDisplayDimension = getDisplayDimension;
function getLensType() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImagePlugin", "HMSMLLensEngine", [
            "getLensType"
        ]);
    });
}
exports.getLensType = getLensType;
function customModelAnalyser(customModelReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImagePlugin", "MLCustomModel", [
            "customModelAnalyser",
            customModelReq
        ]);
    });
}
exports.customModelAnalyser = customModelAnalyser;
function initializeCompositeAnalyzer(compositeAnalyserReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImagePlugin", "HMSMLCompositeAnalyzer", [
            "initializeCompositeAnalyzer",
            compositeAnalyserReq
        ]);
    });
}
exports.initializeCompositeAnalyzer = initializeCompositeAnalyzer;
function infoCompositeAnalyser() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImagePlugin", "HMSMLCompositeAnalyzer", [
            "infoCompositeAnalyser"
        ]);
    });
}
exports.infoCompositeAnalyser = infoCompositeAnalyser;
function closeCompositeAnalyser() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImagePlugin", "HMSMLCompositeAnalyzer", [
            "closeCompositeAnalyser"
        ]);
    });
}
exports.closeCompositeAnalyser = closeCompositeAnalyser;
function obtainPicture(req) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImagePlugin", "HMSMLCompositeAnalyzer", [
            "obtainPicture",
            req
        ]);
    });
}
exports.obtainPicture = obtainPicture;
//# sourceMappingURL=HMSMLImagePlugin.js.map