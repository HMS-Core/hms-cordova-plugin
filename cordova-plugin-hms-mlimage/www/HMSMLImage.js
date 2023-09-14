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
exports.TISRAnalyserStop = exports.textImageSuperResolution = exports.stillSceneAnalyserStop = exports.stillSceneAnalyser = exports.productAnalyserStop = exports.productVisionAnalyser = exports.getObjectSetting = exports.objectAnalyserStop = exports.objectAnalyser = exports.getLandmarkSetting = exports.imgLandMarkAnalyserStop = exports.imgLandMarkAnalyser = exports.getSegmentationSetting = exports.stopImgSegmentation = exports.imgSegmentation = exports.ISRAnalyserStop = exports.getISRSetting = exports.imageSuperResolution = exports.docSkewAnalyserStop = exports.documentSkewCorrectionAnalyser = exports.getImageClassificationAnalyserSetting = exports.stopImageClassificationAnalyser = exports.imageClassificationAnalyser = void 0;

const util_1 = require("./util");
__exportStar(require("./interfaces"), exports);
// Classification
function imageClassificationAnalyser(imageClassificationReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImage", "MLImageClassificationAnalyser", [
            "imageClassificationAnalyser",
            imageClassificationReq,
        ]);
    });
}
exports.imageClassificationAnalyser = imageClassificationAnalyser;
function stopImageClassificationAnalyser() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImage", "MLImageClassificationAnalyser", [
            "stopImageClassificationAnalyser"
        ]);
    });
}
exports.stopImageClassificationAnalyser = stopImageClassificationAnalyser;
function getImageClassificationAnalyserSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImage", "MLImageClassificationAnalyser", [
            "getImageClassificationAnalyserSetting"
        ]);
    });
}
exports.getImageClassificationAnalyserSetting = getImageClassificationAnalyserSetting;
// Document Skew Correction
function documentSkewCorrectionAnalyser(documentSkewCorrectionReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImage", "MLDocumentSkewCorrectionAnalyser", [
            "documentSkewCorrectionAnalyser",
            documentSkewCorrectionReq,
        ]);
    });
}
exports.documentSkewCorrectionAnalyser = documentSkewCorrectionAnalyser;
function docSkewAnalyserStop() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImage", "MLDocumentSkewCorrectionAnalyser", [
            "docSkewAnalyserStop"
        ]);
    });
}
exports.docSkewAnalyserStop = docSkewAnalyserStop;
// Image Super Resolution
function imageSuperResolution(imageSuperResolutionReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImage", "MLImageSuperResolutionAnalyser", [
            "imageSuperResolution",
            imageSuperResolutionReq
        ]);
    });
}
exports.imageSuperResolution = imageSuperResolution;
function getISRSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImage", "MLImageSuperResolutionAnalyser", [
            "getISRSetting"
        ]);
    });
}
exports.getISRSetting = getISRSetting;
function ISRAnalyserStop() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImage", "MLImageSuperResolutionAnalyser", [
            "ISRAnalyserStop"
        ]);
    });
}
exports.ISRAnalyserStop = ISRAnalyserStop;
// Image Segmentation
function imgSegmentation(imgSegmentationReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImage", "MLImageSegmentationAnalyser", [
            "imgSegmentation",
            imgSegmentationReq,
        ]);
    });
}
exports.imgSegmentation = imgSegmentation;
function stopImgSegmentation() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImage", "MLImageSegmentationAnalyser", [
            "stopImgSegmentation"
        ]);
    });
}
exports.stopImgSegmentation = stopImgSegmentation;
function getSegmentationSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImage", "MLImageSegmentationAnalyser", [
            "getSegmentationSetting"
        ]);
    });
}
exports.getSegmentationSetting = getSegmentationSetting;
// Landmark
function imgLandMarkAnalyser(imgLandMarkReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImage", "MLImageLandMarkAnalyser", [
            "imgLandMarkAnalyser",
            imgLandMarkReq
        ]);
    });
}
exports.imgLandMarkAnalyser = imgLandMarkAnalyser;
function imgLandMarkAnalyserStop() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImage", "MLImageLandMarkAnalyser", [
            "imgLandMarkAnalyserStop"
        ]);
    });
}
exports.imgLandMarkAnalyserStop = imgLandMarkAnalyserStop;
function getLandmarkSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImage", "MLImageLandMarkAnalyser", [
            "getLandmarkSetting"
        ]);
    });
}
exports.getLandmarkSetting = getLandmarkSetting;
// Object
function objectAnalyser(objectReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImage", "MLImageObjectAnalyser", [
            "objectAnalyser",
            objectReq,
        ]);
    });
}
exports.objectAnalyser = objectAnalyser;
function objectAnalyserStop() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImage", "MLImageObjectAnalyser", [
            "objectAnalyserStop"
        ]);
    });
}
exports.objectAnalyserStop = objectAnalyserStop;
function getObjectSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImage", "MLImageObjectAnalyser", [
            "getObjectSetting"
        ]);
    });
}
exports.getObjectSetting = getObjectSetting;
// Product
function productVisionAnalyser(productReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImage", "MLProductVisionAnalyser", [
            "productVisionAnalyser",
            productReq
        ]);
    });
}
exports.productVisionAnalyser = productVisionAnalyser;
function productAnalyserStop() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImage", "MLProductVisionAnalyser", [
            "productAnalyserStop"
        ]);
    });
}
exports.productAnalyserStop = productAnalyserStop;
// Scene Detection
function stillSceneAnalyser(stillSceneReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImage", "MLStillSceneDetectionAnalyser", [
            "stillSceneAnalyser",
            stillSceneReq,
        ]);
    });
}
exports.stillSceneAnalyser = stillSceneAnalyser;
function stillSceneAnalyserStop() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImage", "MLStillSceneDetectionAnalyser", [
            "stillSceneAnalyserStop"
        ]);
    });
}
exports.stillSceneAnalyserStop = stillSceneAnalyserStop;
// Text Image Super Resolution
function textImageSuperResolution(textImageSuperResolutionReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImage", "MLTextImageSuperResolutionAnalyser", [
            "textImageSuperResolution",
            textImageSuperResolutionReq
        ]);
    });
}
exports.textImageSuperResolution = textImageSuperResolution;
function TISRAnalyserStop() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLImage", "MLTextImageSuperResolutionAnalyser", [
            "TISRAnalyserStop"
        ]);
    });
}
exports.TISRAnalyserStop = TISRAnalyserStop;
//# sourceMappingURL=HMSMLImage.js.map