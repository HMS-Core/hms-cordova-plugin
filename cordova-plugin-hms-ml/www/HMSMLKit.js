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
exports.disableLogger = exports.enableLogger = exports.getStatistic = exports.setStatistic = exports.appSetting = exports.mlFrame = exports.customModelAnalyser = exports.serviceInitializer = exports.requestPermissions = exports.hasPermissions = exports.getLensType = exports.getDisplayDimension = exports.destroy = exports.photograph = exports.doZoom = exports.liveEngineAnalyser = exports.MLLive = exports.MLImageSegmentationSetting = exports.MLImageClassificationConfig = exports.MLLocalTextSetting = exports.MLRemoteTextSetting = exports.MLTextConfig = exports.MLImageSegmentationScene = exports.MLBcrCaptureConfig = exports.MLRemoteLandmarkSetting = exports.MLGcrCaptureUIConfig = exports.HandkeyPointConfig = exports.MLBcrResultConfig = exports.ImgSuperResolutionConfig = exports.MlObjectAnalyserConfig = exports.FEATURE = exports.DownloadStrategyCustom = exports.RectStyle = exports.MLSkeletonConfig = exports.MLFaceSetting = exports.Colors = exports.MLTtsConstants = exports.LANGUAGE = exports.MLLivenessConfig = exports.MLFaceConfigs = exports.MLFlashMode = exports.MLLensType = exports.MLFrame = exports.MLStillCompositerName = exports.MLAnalyzerName = void 0;
const util_1 = require("./util");
var Interfaces_1 = require("./Interfaces");
Object.defineProperty(exports, "MLAnalyzerName", { enumerable: true, get: function () { return Interfaces_1.MLAnalyzerName; } });
Object.defineProperty(exports, "MLStillCompositerName", { enumerable: true, get: function () { return Interfaces_1.MLStillCompositerName; } });
Object.defineProperty(exports, "MLFrame", { enumerable: true, get: function () { return Interfaces_1.MLFrame; } });
Object.defineProperty(exports, "MLLensType", { enumerable: true, get: function () { return Interfaces_1.MLLensType; } });
Object.defineProperty(exports, "MLFlashMode", { enumerable: true, get: function () { return Interfaces_1.MLFlashMode; } });
Object.defineProperty(exports, "MLFaceConfigs", { enumerable: true, get: function () { return Interfaces_1.MLFaceConfigs; } });
Object.defineProperty(exports, "MLLivenessConfig", { enumerable: true, get: function () { return Interfaces_1.MLLivenessConfig; } });
Object.defineProperty(exports, "LANGUAGE", { enumerable: true, get: function () { return Interfaces_1.LANGUAGE; } });
Object.defineProperty(exports, "MLTtsConstants", { enumerable: true, get: function () { return Interfaces_1.MLTtsConstants; } });
Object.defineProperty(exports, "Colors", { enumerable: true, get: function () { return Interfaces_1.Colors; } });
Object.defineProperty(exports, "MLFaceSetting", { enumerable: true, get: function () { return Interfaces_1.MLFaceSetting; } });
Object.defineProperty(exports, "MLSkeletonConfig", { enumerable: true, get: function () { return Interfaces_1.MLSkeletonConfig; } });
Object.defineProperty(exports, "RectStyle", { enumerable: true, get: function () { return Interfaces_1.RectStyle; } });
Object.defineProperty(exports, "DownloadStrategyCustom", { enumerable: true, get: function () { return Interfaces_1.DownloadStrategyCustom; } });
Object.defineProperty(exports, "FEATURE", { enumerable: true, get: function () { return Interfaces_1.FEATURE; } });
Object.defineProperty(exports, "MlObjectAnalyserConfig", { enumerable: true, get: function () { return Interfaces_1.MlObjectAnalyserConfig; } });
Object.defineProperty(exports, "ImgSuperResolutionConfig", { enumerable: true, get: function () { return Interfaces_1.ImgSuperResolutionConfig; } });
Object.defineProperty(exports, "MLBcrResultConfig", { enumerable: true, get: function () { return Interfaces_1.MLBcrResultConfig; } });
Object.defineProperty(exports, "HandkeyPointConfig", { enumerable: true, get: function () { return Interfaces_1.HandkeyPointConfig; } });
Object.defineProperty(exports, "MLGcrCaptureUIConfig", { enumerable: true, get: function () { return Interfaces_1.MLGcrCaptureUIConfig; } });
Object.defineProperty(exports, "MLRemoteLandmarkSetting", { enumerable: true, get: function () { return Interfaces_1.MLRemoteLandmarkSetting; } });
Object.defineProperty(exports, "MLBcrCaptureConfig", { enumerable: true, get: function () { return Interfaces_1.MLBcrCaptureConfig; } });
Object.defineProperty(exports, "MLImageSegmentationScene", { enumerable: true, get: function () { return Interfaces_1.MLImageSegmentationScene; } });
Object.defineProperty(exports, "MLTextConfig", { enumerable: true, get: function () { return Interfaces_1.MLTextConfig; } });
Object.defineProperty(exports, "MLRemoteTextSetting", { enumerable: true, get: function () { return Interfaces_1.MLRemoteTextSetting; } });
Object.defineProperty(exports, "MLLocalTextSetting", { enumerable: true, get: function () { return Interfaces_1.MLLocalTextSetting; } });
Object.defineProperty(exports, "MLImageClassificationConfig", { enumerable: true, get: function () { return Interfaces_1.MLImageClassificationConfig; } });
Object.defineProperty(exports, "MLImageSegmentationSetting", { enumerable: true, get: function () { return Interfaces_1.MLImageSegmentationSetting; } });
//ML
function getInitialProps(divId) {
    const element = document.getElementById(divId);
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
class MLLive {
    constructor(scene, divId) {
        this.scene = scene;
        this.divId = divId;
    }
    execHelper(func, args) {
        return util_1.asyncExec('HMSMLPlugin', func, args);
    }
    on(call) {
        window.subscribeHMSEvent(`${this.scene}_${this.divId}`, call);
        return this.execHelper('setCallback', [this.scene, this.divId, call.toString()]);
    }
    startMLLive(config, bounds) {
        const initialProps = getInitialProps(this.divId);
        if (bounds) {
            if (bounds.marginLeft)
                initialProps['marginLeft'] = bounds.marginLeft;
            if (bounds.marginTop)
                initialProps['marginTop'] = bounds.marginTop;
            if (bounds.marginBottom)
                initialProps['marginBottom'] = bounds.marginBottom;
            if (bounds.marginRight)
                initialProps['marginRight'] = bounds.marginRight;
        }
        this.mutationObserver = new MutationObserver(() => {
            const sceneRect = document.getElementById(this.divId).getBoundingClientRect();
            this.forceUpdateXAndY(sceneRect.x, sceneRect.y);
        });
        const mutationObserverConfig = { attributes: true, childList: true, subtree: true };
        this.mutationObserver.observe(document.body, mutationObserverConfig);
        return this.execHelper(this.scene, [config, initialProps]);
    }
    setConfig(config) {
        return this.execHelper('setConfig', [this.scene, config]);
    }
    scroll() {
        const sceneRect = document.getElementById(this.divId).getBoundingClientRect();
        return this.forceUpdateXAndY(sceneRect.x, sceneRect.y);
    }
    forceUpdateXAndY(x, y) {
        return this.execHelper('forceUpdateXAndY', [this.scene, x, y]);
    }
}
exports.MLLive = MLLive;
class liveEngineAnalyser extends MLLive {
    constructor(divId) { super("ACTION_LIVE_ANALYSE", divId); }
}
exports.liveEngineAnalyser = liveEngineAnalyser;
function doZoom(doZoomReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSMLPlugin', 'ACTION_LIVE_DOZOOM', [doZoomReq]);
    });
}
exports.doZoom = doZoom;
function photograph() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSMLPlugin', 'ACTION_LIVE_PHOTOGRAPHY_ANALYSE', []);
    });
}
exports.photograph = photograph;
function destroy() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSMLPlugin', 'ACTION_LIVE_DESTROY', []);
    });
}
exports.destroy = destroy;
function getDisplayDimension() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSMLPlugin', 'ACTION_LIVE_DISPLAYDIMENSION', []);
    });
}
exports.getDisplayDimension = getDisplayDimension;
function getLensType() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSMLPlugin', 'ACTION_LIVE_GETLENSTYPE', []);
    });
}
exports.getLensType = getLensType;
function hasPermissions(permissionListReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSMLPlugin', 'ACTION_CHECK_PERMISSION', [permissionListReq]);
    });
}
exports.hasPermissions = hasPermissions;
function requestPermissions(permissionListReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSMLPlugin', 'ACTION_REQUEST_PERMISSION', [permissionListReq]);
    });
}
exports.requestPermissions = requestPermissions;
function serviceInitializer(params) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSMLPlugin', 'HMSMLKIT_INITILALIZER', [params]);
    });
}
exports.serviceInitializer = serviceInitializer;
function customModelAnalyser(customModelReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSMLPlugin', 'ACTION_CUSTOMMODEL_ANALYSER', [customModelReq]);
    });
}
exports.customModelAnalyser = customModelAnalyser;
function mlFrame(mlFrameReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSMLPlugin', 'ACTION_MLFRAME', [mlFrameReq]);
    });
}
exports.mlFrame = mlFrame;
function appSetting(appSettingReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSMLPlugin', 'ACTION_APP_SETTING', [appSettingReq]);
    });
}
exports.appSetting = appSetting;
function setStatistic(any) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSMLPlugin', 'ACTION_MLANALYSER_SETSTATISTIC', [any]);
    });
}
exports.setStatistic = setStatistic;
function getStatistic(any) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSMLPlugin', 'ACTION_MLANALYSER_GETSTATISTIC', [any]);
    });
}
exports.getStatistic = getStatistic;
function enableLogger() {
    return util_1.asyncExec('HMSMLPlugin', 'enableLogger', []);
}
exports.enableLogger = enableLogger;
function disableLogger() {
    return util_1.asyncExec('HMSMLPlugin', 'disableLogger', []);
}
exports.disableLogger = disableLogger;
//# sourceMappingURL=HMSMLKit.js.map