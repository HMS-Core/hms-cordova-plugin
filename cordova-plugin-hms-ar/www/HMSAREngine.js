"use strict";
/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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
exports.disableLogger = exports.enableLogger = exports.navigateToAppMarket = exports.isAREngineServiceAPKReady = exports.hasCameraPermission = exports.requestCameraPermission = exports.ARCloud3DObjectScene = exports.ARSceneMeshScene = exports.ARWorldBodyScene = exports.ARAugmentedImageScene = exports.ARBodyScene = exports.ARFaceScene = exports.ARWorldScene = exports.ARHandScene = exports.ARScene = exports.Events = exports.PlaneFindingMode = exports.TargetShapeType = exports.TargetLabel = exports.UpdateMode = exports.FocusMode = exports.PowerMode = exports.SemanticMode = exports.CameraLensFacing = exports.LightMode = exports.FaceHealthCheckState = exports.HealthParameter = exports.SemanticPlaneLabel = exports.PlaneType = exports.ARHandType = exports.ARCoordinateSystemType = exports.TrackingState = void 0;
const util_1 = require("./util");
var interfaces_1 = require("./interfaces");
Object.defineProperty(exports, "TrackingState", { enumerable: true, get: function () { return interfaces_1.TrackingState; } });
Object.defineProperty(exports, "ARCoordinateSystemType", { enumerable: true, get: function () { return interfaces_1.ARCoordinateSystemType; } });
Object.defineProperty(exports, "ARHandType", { enumerable: true, get: function () { return interfaces_1.ARHandType; } });
Object.defineProperty(exports, "PlaneType", { enumerable: true, get: function () { return interfaces_1.PlaneType; } });
Object.defineProperty(exports, "SemanticPlaneLabel", { enumerable: true, get: function () { return interfaces_1.SemanticPlaneLabel; } });
Object.defineProperty(exports, "HealthParameter", { enumerable: true, get: function () { return interfaces_1.HealthParameter; } });
Object.defineProperty(exports, "FaceHealthCheckState", { enumerable: true, get: function () { return interfaces_1.FaceHealthCheckState; } });
Object.defineProperty(exports, "LightMode", { enumerable: true, get: function () { return interfaces_1.LightMode; } });
Object.defineProperty(exports, "CameraLensFacing", { enumerable: true, get: function () { return interfaces_1.CameraLensFacing; } });
Object.defineProperty(exports, "SemanticMode", { enumerable: true, get: function () { return interfaces_1.SemanticMode; } });
Object.defineProperty(exports, "PowerMode", { enumerable: true, get: function () { return interfaces_1.PowerMode; } });
Object.defineProperty(exports, "FocusMode", { enumerable: true, get: function () { return interfaces_1.FocusMode; } });
Object.defineProperty(exports, "UpdateMode", { enumerable: true, get: function () { return interfaces_1.UpdateMode; } });
Object.defineProperty(exports, "TargetLabel", { enumerable: true, get: function () { return interfaces_1.TargetLabel; } });
Object.defineProperty(exports, "TargetShapeType", { enumerable: true, get: function () { return interfaces_1.TargetShapeType; } });
Object.defineProperty(exports, "PlaneFindingMode", { enumerable: true, get: function () { return interfaces_1.PlaneFindingMode; } });
Object.defineProperty(exports, "Events", { enumerable: true, get: function () { return interfaces_1.Events; } });
function getInitialProps(divId) {
    const htmlElement = document.getElementById(divId);
    const clientRect = htmlElement.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(htmlElement, null);
    let props = {};
    props['x'] = clientRect.x;
    props['y'] = clientRect.y;
    props['width'] = parseInt(computedStyle.getPropertyValue('width'));
    props['height'] = parseInt(computedStyle.getPropertyValue('height'));
    return props;
}
class ARScene {
    constructor(scene, divId) {
        this.scene = scene;
        this.divId = divId;
    }
    on(eventName, call) {
        window.subscribeHMSEvent(`${eventName}_${this.scene}_${this.divId}`, call);
        return this.execHelper('setCallback', [this.scene, this.divId, call.toString()]);
    }
    startARScene(config, bounds) {
        const initialProps = getInitialProps(this.divId);
        if (bounds) {
            if (bounds.marginTop)
                initialProps['marginTop'] = bounds.marginTop;
            if (bounds.marginBottom)
                initialProps['marginBottom'] = bounds.marginBottom;
        }
        this.mutationObserver = new MutationObserver(() => {
            const sceneRect = document.getElementById(this.divId).getBoundingClientRect();
            this.forceUpdateXAndY(sceneRect.x, sceneRect.y);
        });
        const mutationObserverConfig = { attributes: true, childList: true, subtree: true };
        this.mutationObserver.observe(document.body, mutationObserverConfig);
        return this.execHelper('startARScene', [this.scene, config, initialProps]);
    }
    destroy() {
        return this.execHelper('destroy', [this.scene]);
    }
    setConfig(config) {
        return this.execHelper('setConfig', [this.scene, config]);
    }
    scroll() {
        const sceneRect = document.getElementById(this.divId).getBoundingClientRect();
        return this.forceUpdateXAndY(sceneRect.x, sceneRect.y);
    }
    execHelper(func, args) {
        return (0, util_1.asyncExec)('HMSAREngine', func, args);
    }
    forceUpdateXAndY(x, y) {
        return this.execHelper('forceUpdateXAndY', [this.scene, x, y]);
    }
}
exports.ARScene = ARScene;
class ARHandScene extends ARScene {
    constructor(divId) {
        super("ARHand", divId);
    }
}
exports.ARHandScene = ARHandScene;
class ARWorldScene extends ARScene {
    constructor(divId) {
        super("ARWorld", divId);
    }
}
exports.ARWorldScene = ARWorldScene;
class ARFaceScene extends ARScene {
    constructor(divId) {
        super("ARFace", divId);
    }
}
exports.ARFaceScene = ARFaceScene;
class ARBodyScene extends ARScene {
    constructor(divId) {
        super("ARBody", divId);
    }
}
exports.ARBodyScene = ARBodyScene;
class ARAugmentedImageScene extends ARScene {
    constructor(divId) {
        super("ARAugmentedImage", divId);
    }
}
exports.ARAugmentedImageScene = ARAugmentedImageScene;
class ARWorldBodyScene extends ARScene {
    constructor(divId) {
        super("ARWorldBody", divId);
    }
}
exports.ARWorldBodyScene = ARWorldBodyScene;
class ARSceneMeshScene extends ARScene {
    constructor(divId) {
        super("ARSceneMesh", divId);
    }
}
exports.ARSceneMeshScene = ARSceneMeshScene;
class ARCloud3DObjectScene extends ARScene {
    constructor(divId) {
        super("ARCloud3DObject", divId);
    }
}
exports.ARCloud3DObjectScene = ARCloud3DObjectScene;
function requestCameraPermission() {
    return (0, util_1.asyncExec)('HMSAREngine', 'requestPermission', []);
}
exports.requestCameraPermission = requestCameraPermission;
function hasCameraPermission() {
    return __awaiter(this, void 0, void 0, function* () {
        const out = yield (0, util_1.asyncExec)('HMSAREngine', 'hasPermission', []);
        return out.result;
    });
}
exports.hasCameraPermission = hasCameraPermission;
function isAREngineServiceAPKReady() {
    return __awaiter(this, void 0, void 0, function* () {
        const out = yield (0, util_1.asyncExec)('HMSAREngine', 'isAREngineServiceAPKReady', []);
        return out.result;
    });
}
exports.isAREngineServiceAPKReady = isAREngineServiceAPKReady;
function navigateToAppMarket() {
    return (0, util_1.asyncExec)('HMSAREngine', 'navigateToAppMarket', []);
}
exports.navigateToAppMarket = navigateToAppMarket;
function enableLogger() {
    return (0, util_1.asyncExec)('HMSAREngine', 'enableLogger', []);
}
exports.enableLogger = enableLogger;
function disableLogger() {
    return (0, util_1.asyncExec)('HMSAREngine', 'disableLogger', []);
}
exports.disableLogger = disableLogger;
//# sourceMappingURL=HMSAREngine.js.map