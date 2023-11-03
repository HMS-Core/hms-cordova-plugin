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
exports.customInteractiveLivenessAnalyser = exports.interactiveLivenessAnalyser = exports.stopStillSkeletonAnalyser = exports.getGestureAnalyserSetting = exports.getHandKeyAnalyserSetting = exports.getFaceAnalyserSetting = exports.stopStillHandKeyAnalyser = exports.stillHandkeyAnalyser = exports.stopStillGestureAnalyser = exports.stillGestureAnalyser = exports.liveLivenessAnalyser = exports.stillSkeletonAnalyser = exports.stopStillFaceAnalyser = exports.stillFaceAnalyserInfo = exports.stopStillFaceVerificationAnalyser = exports.getFaceVerificationAnalyserSetting = exports.setFaceDetected = exports.stillFaceVerificationAnalyser = exports.stillFaceAnalyser = void 0;
const util_1 = require("./util");
__exportStar(require("./interfaces"), exports);
function stillFaceAnalyser(faceReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLBody", "ACTION_STILL_FACE_ANALYSER", [
            faceReq,
        ]);
    });
}
exports.stillFaceAnalyser = stillFaceAnalyser;
function stillFaceVerificationAnalyser(faceVerificationReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLBody", "ACTION_STILL_FACE_VERIFICATION", [
            faceVerificationReq,
        ]);
    });
}
exports.stillFaceVerificationAnalyser = stillFaceVerificationAnalyser;
function setFaceDetected(maxFaceVerificationReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLBody", "ACTION_STILL_FACE_VERIFICATION_FACEDETECTED", [
            maxFaceVerificationReq
        ]);
    });
}
exports.setFaceDetected = setFaceDetected;
function getFaceVerificationAnalyserSetting() {
    return (0, util_1.asyncExec)("HMSMLBody", "ACTION_STILL_FACE_VERIFICATION_ANALYSE_SETTING", []);
}
exports.getFaceVerificationAnalyserSetting = getFaceVerificationAnalyserSetting;
function stopStillFaceVerificationAnalyser() {
    return (0, util_1.asyncExec)("HMSMLBody", "ACTION_STOP_STILL_FACE_VERIFICATION", []);
}
exports.stopStillFaceVerificationAnalyser = stopStillFaceVerificationAnalyser;
function stillFaceAnalyserInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLBody", "ACTION_STILL_FACE_INFO", []);
    });
}
exports.stillFaceAnalyserInfo = stillFaceAnalyserInfo;
function stopStillFaceAnalyser() {
    return (0, util_1.asyncExec)("HMSMLBody", "ACTION_STOP_STILL_FACE_ANALYSER", []);
}
exports.stopStillFaceAnalyser = stopStillFaceAnalyser;
function stillSkeletonAnalyser(stillSkeletonReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLBody", "ACTION_STILL_SKELETON_ANALYSE", [
            stillSkeletonReq,
        ]);
    });
}
exports.stillSkeletonAnalyser = stillSkeletonAnalyser;
function liveLivenessAnalyser(livenessDetectionReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLBody", "ACTION_LIVENESS_DETECTION", [
            livenessDetectionReq,
        ]);
    });
}
exports.liveLivenessAnalyser = liveLivenessAnalyser;
function stillGestureAnalyser(stillGestureReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLBody", "ACTION_STILL_GESTURE_ANALYSE", [
            stillGestureReq,
        ]);
    });
}
exports.stillGestureAnalyser = stillGestureAnalyser;
function stopStillGestureAnalyser() {
    return (0, util_1.asyncExec)("HMSMLBody", "ACTION_STILL_GESTURE_ANALYSE_STOP", []);
}
exports.stopStillGestureAnalyser = stopStillGestureAnalyser;
function stillHandkeyAnalyser(stillHandKeypointReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLBody", "ACTION_STILL_HANDKEYPOINT_ANALYSE", [
            stillHandKeypointReq
        ]);
    });
}
exports.stillHandkeyAnalyser = stillHandkeyAnalyser;
function stopStillHandKeyAnalyser() {
    return (0, util_1.asyncExec)("HMSMLBody", "ACTION_STILL_HANDKEYPOINT_ANALYSE_STOP", []);
}
exports.stopStillHandKeyAnalyser = stopStillHandKeyAnalyser;
function getFaceAnalyserSetting() {
    return (0, util_1.asyncExec)("HMSMLBody", "ACTION_STILL_FACE_ANALYSER_SETTING", []);
}
exports.getFaceAnalyserSetting = getFaceAnalyserSetting;
function getHandKeyAnalyserSetting() {
    return (0, util_1.asyncExec)("HMSMLBody", "ACTION_STILL_HANDKEYPOINT_ANALYSE_SETTING", []);
}
exports.getHandKeyAnalyserSetting = getHandKeyAnalyserSetting;
function getGestureAnalyserSetting() {
    return (0, util_1.asyncExec)("HMSMLBody", "ACTION_STILL_GESTURE_ANALYSE_SETTING", []);
}
exports.getGestureAnalyserSetting = getGestureAnalyserSetting;
function stopStillSkeletonAnalyser() {
    return (0, util_1.asyncExec)("HMSMLBody", "ACTION_STILL_SKELETON_ANALYSE_STOP", []);
}
exports.stopStillSkeletonAnalyser = stopStillSkeletonAnalyser;
function interactiveLivenessAnalyser(interactiveLivenessDetectionReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLBody", "ACTION_INTERACTIVE_LIVENESS_DETECTION", [
            interactiveLivenessDetectionReq
        ]);
    });
}
exports.interactiveLivenessAnalyser = interactiveLivenessAnalyser;
function customInteractiveLivenessAnalyser(customInteractiveLivenessDetectionReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLBody", "ACTION_CUSTOM_INTERACTIVE_LIVENESS_DETECTION", [
            customInteractiveLivenessDetectionReq
        ]);
    });
}
exports.customInteractiveLivenessAnalyser = customInteractiveLivenessAnalyser;
//# sourceMappingURL=HMSMLBody.js.map