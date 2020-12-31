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
exports.getObjectSetting = exports.getLandmarkSetting = exports.getSegmentationSetting = exports.getISRSetting = exports.getImageClassificationAnalyserSetting = exports.stillSceneAnalyserStop = exports.TISRAnalyserStop = exports.ISRAnalyserStop = exports.docSkewAnalyserStop = exports.productAnalyserStop = exports.objectAnalyserStop = exports.productVisionAnalyser = exports.imageSuperResolution = exports.textImageSuperResolution = exports.documentSkewCorrectionAnalyser = exports.stillSceneAnalyser = exports.objectAnalyser = exports.imgLandMarkAnalyserStop = exports.imgLandMarkAnalyser = exports.stopImgSegmentation = exports.imgSegmentation = exports.stopImageClassificationAnalyser = exports.imageClassificationAnalyser = exports.MLImageSegmentationSetting = exports.MLImageClassificationConfig = exports.MLLocalTextSetting = exports.MLRemoteTextSetting = exports.MLTextConfig = exports.MLImageSegmentationScene = exports.MLBcrCaptureConfig = exports.MLRemoteLandmarkSetting = exports.MLGcrCaptureUIConfig = exports.HandkeyPointConfig = exports.MLBcrResultConfig = exports.ImgSuperResolutionConfig = exports.MlObjectAnalyserConfig = exports.FEATURE = exports.DownloadStrategyCustom = exports.RectStyle = exports.MLSkeletonConfig = exports.MLFaceSetting = exports.Colors = exports.MLTtsConstants = exports.MLFormRecogitionConfig = exports.LANGUAGE = exports.MLProductConfig = void 0;
const util_1 = require("./util");
var Interfaces_1 = require("./Interfaces");
Object.defineProperty(exports, "MLProductConfig", { enumerable: true, get: function () { return Interfaces_1.MLProductConfig; } });
Object.defineProperty(exports, "LANGUAGE", { enumerable: true, get: function () { return Interfaces_1.LANGUAGE; } });
Object.defineProperty(exports, "MLFormRecogitionConfig", { enumerable: true, get: function () { return Interfaces_1.MLFormRecogitionConfig; } });
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
function imageClassificationAnalyser(imageClassificationReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSImageServiceProvider', 'ACTION_IMAGE_CLASSIFICATION_ANALYSER', [imageClassificationReq]);
    });
}
exports.imageClassificationAnalyser = imageClassificationAnalyser;
function stopImageClassificationAnalyser() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSImageServiceProvider', 'ACTION_CLOSE_IMAGE_CLASSIFICATION_ANALYSER', []);
    });
}
exports.stopImageClassificationAnalyser = stopImageClassificationAnalyser;
function imgSegmentation(imgSegmentationReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSImageServiceProvider', 'ACTION_IMAGE_SEGMENTATION', [imgSegmentationReq]);
    });
}
exports.imgSegmentation = imgSegmentation;
function stopImgSegmentation() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSImageServiceProvider', 'STOP_IMAGE_SEGMENTATION', []);
    });
}
exports.stopImgSegmentation = stopImgSegmentation;
function imgLandMarkAnalyser(imgLandMarkReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSImageServiceProvider', 'ACTION_IMAGE_LANDMARK_ANALYSE', [imgLandMarkReq]);
    });
}
exports.imgLandMarkAnalyser = imgLandMarkAnalyser;
function imgLandMarkAnalyserStop() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSImageServiceProvider', 'ACTION_IMAGE_LANDMARK_STOP', []);
    });
}
exports.imgLandMarkAnalyserStop = imgLandMarkAnalyserStop;
function objectAnalyser(objectReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSImageServiceProvider', 'ACTION_OBJECT_ANALYSER', [objectReq]);
    });
}
exports.objectAnalyser = objectAnalyser;
function stillSceneAnalyser(stillSceneReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSImageServiceProvider', 'ACTION_STILL_SCENE_ANALYSE', [stillSceneReq]);
    });
}
exports.stillSceneAnalyser = stillSceneAnalyser;
function documentSkewCorrectionAnalyser(documentSkewCorrectionReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSImageServiceProvider', 'ACTION_DOCUMENT_SKEW_ANALYSE', [documentSkewCorrectionReq]);
    });
}
exports.documentSkewCorrectionAnalyser = documentSkewCorrectionAnalyser;
function textImageSuperResolution(textImageSuperResolutionReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSImageServiceProvider', 'ACTION_TEXTIMAGE_SUPER_RESOLUTION_ANALYSE', [textImageSuperResolutionReq]);
    });
}
exports.textImageSuperResolution = textImageSuperResolution;
function imageSuperResolution(imageSuperResolutionReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSImageServiceProvider', 'ACTION_IMAGE_SUPER_RESOLUTION_ANALYSE', [imageSuperResolutionReq]);
    });
}
exports.imageSuperResolution = imageSuperResolution;
function productVisionAnalyser(productReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSImageServiceProvider', 'ACTION_PRODUCT_VISION_ANALYSE', [productReq]);
    });
}
exports.productVisionAnalyser = productVisionAnalyser;
function objectAnalyserStop() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSImageServiceProvider', 'ACTION_OBJECT_ANALYSER_CLOSE', []);
    });
}
exports.objectAnalyserStop = objectAnalyserStop;
function productAnalyserStop() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSImageServiceProvider', 'ACTION_PRODUCT_VISION_ANALYSE_STOP', []);
    });
}
exports.productAnalyserStop = productAnalyserStop;
function docSkewAnalyserStop() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSImageServiceProvider', 'ACTION_DOCUMENT_SKEW_ANALYSE_STOP', []);
    });
}
exports.docSkewAnalyserStop = docSkewAnalyserStop;
function ISRAnalyserStop() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSImageServiceProvider', 'ACTION_IMAGE_SUPER_RESOLUTION_ANALYSE_STOP', []);
    });
}
exports.ISRAnalyserStop = ISRAnalyserStop;
function TISRAnalyserStop() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSImageServiceProvider', 'ACTION_TEXTIMAGE_SUPER_RESOLUTION_ANALYSE_STOP', []);
    });
}
exports.TISRAnalyserStop = TISRAnalyserStop;
function stillSceneAnalyserStop() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSImageServiceProvider', 'ACTION_STILL_SCENE_ANALYSE_STOP', []);
    });
}
exports.stillSceneAnalyserStop = stillSceneAnalyserStop;
function getImageClassificationAnalyserSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSImageServiceProvider', 'ACTION_GET_IMAGE_CLASSIFICATION_ANALYSER_SETTING', []);
    });
}
exports.getImageClassificationAnalyserSetting = getImageClassificationAnalyserSetting;
function getISRSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSImageServiceProvider', 'ACTION_IMAGE_SUPER_RESOLUTION_ANALYSE_SETTING', []);
    });
}
exports.getISRSetting = getISRSetting;
function getSegmentationSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSImageServiceProvider', 'ACTION_GET_IMAGE_SEGMENTATION_SETTING', []);
    });
}
exports.getSegmentationSetting = getSegmentationSetting;
function getLandmarkSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSImageServiceProvider', 'ACTION_IMAGE_LANDMARK_ANALYSE_SETTING', []);
    });
}
exports.getLandmarkSetting = getLandmarkSetting;
function getObjectSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSImageServiceProvider', 'ACTION_OBJECT_ANALYSER_SETTING', []);
    });
}
exports.getObjectSetting = getObjectSetting;
//# sourceMappingURL=HMSImageServiceProvider.js.map