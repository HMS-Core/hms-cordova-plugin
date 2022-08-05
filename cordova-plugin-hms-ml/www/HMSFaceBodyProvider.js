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
exports.stopStillSkeletonAnalyser = exports.getGestureAnalyserSetting = exports.getHandKeyAnalyserSetting = exports.getFaceAnalyserSetting = exports.stopStillHandKeyAnalyser = exports.stillHandkeyAnalyser = exports.stopStillGestureAnalyser = exports.stillGestureAnalyser = exports.liveLivenessAnalyser = exports.stillSkeletonAnalyser = exports.stopStillFaceAnalyser = exports.stillFaceAnalyserInfo = exports.stopStillFaceVerificationAnalyser = exports.getFaceVerificationAnalyserSetting = exports.setFaceDetected = exports.stillFaceVerificationAnalyser = exports.stillFaceAnalyser = exports.MLSpeechRealTimeTranscriptionConstants = exports.MLTtsError = exports.MLTtsAudioFragmentConstant = exports.MLBcrCaptureErrorCode = exports.CordovaErrors = exports.MLImageSegmentationSetting = exports.MLImageClassificationConfig = exports.MLLocalTextSetting = exports.MLRemoteTextSetting = exports.MLTextConfig = exports.MLImageSegmentationScene = exports.MLBcrCaptureConfig = exports.MLRemoteLandmarkSetting = exports.MLGcrCaptureUIConfig = exports.HandkeyPointConfig = exports.MLBcrResultConfig = exports.ImgSuperResolutionConfig = exports.MlObjectAnalyserConfig = exports.FEATURE = exports.DownloadStrategyCustom = exports.RectStyle = exports.MLSkeletonConfig = exports.MLFaceSetting = exports.Colors = exports.MLDocumentSkewCorrectionConstant = exports.MLAftConstants = exports.MLTtsConstants = exports.LANGUAGE = exports.MLLivenessConfig = exports.MLFaceConfigs = exports.MLJointPoints = void 0;
const util_1 = require("./util");
var Interfaces_1 = require("./Interfaces");
Object.defineProperty(exports, "MLJointPoints", { enumerable: true, get: function () { return Interfaces_1.MLJointPoints; } });
Object.defineProperty(exports, "MLFaceConfigs", { enumerable: true, get: function () { return Interfaces_1.MLFaceConfigs; } });
Object.defineProperty(exports, "MLLivenessConfig", { enumerable: true, get: function () { return Interfaces_1.MLLivenessConfig; } });
Object.defineProperty(exports, "LANGUAGE", { enumerable: true, get: function () { return Interfaces_1.LANGUAGE; } });
Object.defineProperty(exports, "MLTtsConstants", { enumerable: true, get: function () { return Interfaces_1.MLTtsConstants; } });
Object.defineProperty(exports, "MLAftConstants", { enumerable: true, get: function () { return Interfaces_1.MLAftConstants; } });
Object.defineProperty(exports, "MLDocumentSkewCorrectionConstant", { enumerable: true, get: function () { return Interfaces_1.MLDocumentSkewCorrectionConstant; } });
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
Object.defineProperty(exports, "CordovaErrors", { enumerable: true, get: function () { return Interfaces_1.CordovaErrors; } });
Object.defineProperty(exports, "MLBcrCaptureErrorCode", { enumerable: true, get: function () { return Interfaces_1.MLBcrCaptureErrorCode; } });
Object.defineProperty(exports, "MLTtsAudioFragmentConstant", { enumerable: true, get: function () { return Interfaces_1.MLTtsAudioFragmentConstant; } });
Object.defineProperty(exports, "MLTtsError", { enumerable: true, get: function () { return Interfaces_1.MLTtsError; } });
Object.defineProperty(exports, "MLSpeechRealTimeTranscriptionConstants", { enumerable: true, get: function () { return Interfaces_1.MLSpeechRealTimeTranscriptionConstants; } });
function stillFaceAnalyser(faceReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSFaceBodyProvider", "ACTION_STILL_FACE_ANALYSER", [
            faceReq,
        ]);
    });
}
exports.stillFaceAnalyser = stillFaceAnalyser;
function stillFaceVerificationAnalyser(faceVerificationReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSFaceBodyProvider", "ACTION_STILL_FACE_VERIFICATION", [
            faceVerificationReq,
        ]);
    });
}
exports.stillFaceVerificationAnalyser = stillFaceVerificationAnalyser;
function setFaceDetected(maxFaceVerificationReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSFaceBodyProvider", "ACTION_STILL_FACE_VERIFICATION_FACEDETECTED", [maxFaceVerificationReq]);
    });
}
exports.setFaceDetected = setFaceDetected;
function getFaceVerificationAnalyserSetting() {
    return (0, util_1.asyncExec)("HMSFaceBodyProvider", "ACTION_STILL_FACE_VERIFICATION_ANALYSE_SETTING", []);
}
exports.getFaceVerificationAnalyserSetting = getFaceVerificationAnalyserSetting;
function stopStillFaceVerificationAnalyser() {
    return (0, util_1.asyncExec)("HMSFaceBodyProvider", "ACTION_STOP_STILL_FACE_VERIFICATION", []);
}
exports.stopStillFaceVerificationAnalyser = stopStillFaceVerificationAnalyser;
function stillFaceAnalyserInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSFaceBodyProvider", "ACTION_STILL_FACE_INFO", []);
    });
}
exports.stillFaceAnalyserInfo = stillFaceAnalyserInfo;
function stopStillFaceAnalyser() {
    return (0, util_1.asyncExec)("HMSFaceBodyProvider", "ACTION_STOP_STILL_FACE_ANALYSER", []);
}
exports.stopStillFaceAnalyser = stopStillFaceAnalyser;
function stillSkeletonAnalyser(stillSkeletonReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSFaceBodyProvider", "ACTION_STILL_SKELETON_ANALYSE", [
            stillSkeletonReq,
        ]);
    });
}
exports.stillSkeletonAnalyser = stillSkeletonAnalyser;
function liveLivenessAnalyser(livenessDetectionReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSFaceBodyProvider", "ACTION_LIVENESS_DETECTION", [
            livenessDetectionReq,
        ]);
    });
}
exports.liveLivenessAnalyser = liveLivenessAnalyser;
function stillGestureAnalyser(stillGestureReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSFaceBodyProvider", "ACTION_STILL_GESTURE_ANALYSE", [
            stillGestureReq,
        ]);
    });
}
exports.stillGestureAnalyser = stillGestureAnalyser;
function stopStillGestureAnalyser() {
    return (0, util_1.asyncExec)("HMSFaceBodyProvider", "ACTION_STILL_GESTURE_ANALYSE_STOP", []);
}
exports.stopStillGestureAnalyser = stopStillGestureAnalyser;
function stillHandkeyAnalyser(stillHandKeypointReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSFaceBodyProvider", "ACTION_STILL_HANDKEYPOINT_ANALYSE", [stillHandKeypointReq]);
    });
}
exports.stillHandkeyAnalyser = stillHandkeyAnalyser;
function stopStillHandKeyAnalyser() {
    return (0, util_1.asyncExec)("HMSFaceBodyProvider", "ACTION_STILL_HANDKEYPOINT_ANALYSE_STOP", []);
}
exports.stopStillHandKeyAnalyser = stopStillHandKeyAnalyser;
function getFaceAnalyserSetting() {
    return (0, util_1.asyncExec)("HMSFaceBodyProvider", "ACTION_STILL_FACE_ANALYSER_SETTING", []);
}
exports.getFaceAnalyserSetting = getFaceAnalyserSetting;
function getHandKeyAnalyserSetting() {
    return (0, util_1.asyncExec)("HMSFaceBodyProvider", "ACTION_STILL_HANDKEYPOINT_ANALYSE_SETTING", []);
}
exports.getHandKeyAnalyserSetting = getHandKeyAnalyserSetting;
function getGestureAnalyserSetting() {
    return (0, util_1.asyncExec)("HMSFaceBodyProvider", "ACTION_STILL_GESTURE_ANALYSE_SETTING", []);
}
exports.getGestureAnalyserSetting = getGestureAnalyserSetting;
function stopStillSkeletonAnalyser() {
    return (0, util_1.asyncExec)("HMSFaceBodyProvider", "ACTION_STILL_SKELETON_ANALYSE_STOP", []);
}
exports.stopStillSkeletonAnalyser = stopStillSkeletonAnalyser;
//# sourceMappingURL=HMSFaceBodyProvider.js.map