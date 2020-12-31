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
exports.stopStillSkeletonAnalyser = exports.getHandKeyAnalyserSetting = exports.getFaceAnalyserSetting = exports.stopStillHandKeyAnalyser = exports.stillHandkeyAnalyser = exports.liveLivenessAnalyser = exports.stillSkeletonAnalyser = exports.stopStillFaceAnalyser = exports.stilFaceAnalyserInfo = exports.stillFaceAnalyser = exports.MLImageSegmentationSetting = exports.MLImageClassificationConfig = exports.MLLocalTextSetting = exports.MLRemoteTextSetting = exports.MLTextConfig = exports.MLImageSegmentationScene = exports.MLBcrCaptureConfig = exports.MLRemoteLandmarkSetting = exports.MLGcrCaptureUIConfig = exports.HandkeyPointConfig = exports.MLBcrResultConfig = exports.ImgSuperResolutionConfig = exports.MlObjectAnalyserConfig = exports.FEATURE = exports.DownloadStrategyCustom = exports.RectStyle = exports.MLSkeletonConfig = exports.MLFaceSetting = exports.Colors = exports.MLTtsConstants = exports.LANGUAGE = exports.MLLivenessConfig = exports.MLFaceConfigs = void 0;
const util_1 = require("./util");
var Interfaces_1 = require("./Interfaces");
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
function stillFaceAnalyser(faceReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSFaceBodyProvider', 'ACTION_STILL_FACE_ANALYSER', [faceReq]);
    });
}
exports.stillFaceAnalyser = stillFaceAnalyser;
function stilFaceAnalyserInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSFaceBodyProvider', 'ACTION_STILL_FACE_INFO', []);
    });
}
exports.stilFaceAnalyserInfo = stilFaceAnalyserInfo;
function stopStillFaceAnalyser() {
    return util_1.asyncExec('HMSFaceBodyProvider', 'ACTION_STOP_STILL_FACE_ANALYSER', []);
}
exports.stopStillFaceAnalyser = stopStillFaceAnalyser;
function stillSkeletonAnalyser(stillSkeletonReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSFaceBodyProvider', 'ACTION_STILL_SKELETON_ANALYSE', [stillSkeletonReq]);
    });
}
exports.stillSkeletonAnalyser = stillSkeletonAnalyser;
function liveLivenessAnalyser(livenessDetectionReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSFaceBodyProvider', 'ACTION_LIVENESS_DETECTION', [livenessDetectionReq]);
    });
}
exports.liveLivenessAnalyser = liveLivenessAnalyser;
function stillHandkeyAnalyser(stillHandKeypointReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSFaceBodyProvider', 'ACTION_STILL_HANDKEYPOINT_ANALYSE', [stillHandKeypointReq]);
    });
}
exports.stillHandkeyAnalyser = stillHandkeyAnalyser;
function stopStillHandKeyAnalyser() {
    return util_1.asyncExec('HMSFaceBodyProvider', 'ACTION_STILL_HANDKEYPOINT_ANALYSE_STOP', []);
}
exports.stopStillHandKeyAnalyser = stopStillHandKeyAnalyser;
function getFaceAnalyserSetting() {
    return util_1.asyncExec('HMSFaceBodyProvider', 'ACTION_STILL_FACE_ANALYSER_SETTING', []);
}
exports.getFaceAnalyserSetting = getFaceAnalyserSetting;
function getHandKeyAnalyserSetting() {
    return util_1.asyncExec('HMSFaceBodyProvider', 'ACTION_STILL_HANDKEYPOINT_ANALYSE_SETTING', []);
}
exports.getHandKeyAnalyserSetting = getHandKeyAnalyserSetting;
function stopStillSkeletonAnalyser() {
    return util_1.asyncExec('HMSFaceBodyProvider', 'ACTION_STILL_SKELETON_ANALYSE_STOP', []);
}
exports.stopStillSkeletonAnalyser = stopStillSkeletonAnalyser;
//# sourceMappingURL=HMSFaceBodyProvider.js.map