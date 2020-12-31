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
exports.formRecognitionAnalyser = exports.generalCardDetector = exports.getBankCardDetectorSetting = exports.stopBankCardDetector = exports.bankCardDetector = exports.stopFormRecognitionAnalyser = exports.getGCRSetting = exports.getTextAnalyserSetting = exports.getDocumentImageAnalyserSetting = exports.stopDocumentImageAnalyser = exports.closeDocumentImageAnalyser = exports.documentImageAnalyser = exports.getTextAnalyserInfo = exports.stopTextAnalyser = exports.imageTextAnalyser = exports.MLImageSegmentationSetting = exports.MLImageClassificationConfig = exports.MLLocalTextSetting = exports.MLRemoteTextSetting = exports.MLTextConfig = exports.MLImageSegmentationScene = exports.MLBcrCaptureConfig = exports.MLRemoteLandmarkSetting = exports.MLGcrCaptureUIConfig = exports.HandkeyPointConfig = exports.MLBcrResultConfig = exports.ImgSuperResolutionConfig = exports.MlObjectAnalyserConfig = exports.FEATURE = exports.DownloadStrategyCustom = exports.RectStyle = exports.MLSkeletonConfig = exports.MLFaceSetting = exports.Colors = exports.MLTtsConstants = exports.MLFormRecogitionConfig = exports.LANGUAGE = exports.MLProductConfig = void 0;
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
//Text Provider
function imageTextAnalyser(ImageTextReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSTextServiceProvider', 'ACTION_IMAGE_TEXT_ANALYSER', [ImageTextReq]);
    });
}
exports.imageTextAnalyser = imageTextAnalyser;
function stopTextAnalyser() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSTextServiceProvider', 'ACTION_STOP_TEXT_ANALYSER', []);
    });
}
exports.stopTextAnalyser = stopTextAnalyser;
function getTextAnalyserInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSTextServiceProvider', 'ACTION_GET_IMAGE_TEXT_INFO', []);
    });
}
exports.getTextAnalyserInfo = getTextAnalyserInfo;
function documentImageAnalyser(documentImageReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSTextServiceProvider', 'ACTION_DOCUMENT_IMAGE_ANALYSER', [documentImageReq]);
    });
}
exports.documentImageAnalyser = documentImageAnalyser;
function closeDocumentImageAnalyser() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSTextServiceProvider', 'ACTION_CLOSE_DOCUMENT_IMAGE_ANALYSER', []);
    });
}
exports.closeDocumentImageAnalyser = closeDocumentImageAnalyser;
function stopDocumentImageAnalyser() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSTextServiceProvider', 'ACTION_STOP_DOCUMENT_IMAGE_ANALYSER', []);
    });
}
exports.stopDocumentImageAnalyser = stopDocumentImageAnalyser;
function getDocumentImageAnalyserSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSTextServiceProvider', 'ACTION_GET_DOCUMENT_IMAGE_ANALYSER_SETTING', []);
    });
}
exports.getDocumentImageAnalyserSetting = getDocumentImageAnalyserSetting;
function getTextAnalyserSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSTextServiceProvider', 'ACTION_GET_IMAGE_TEXT_SETTING', []);
    });
}
exports.getTextAnalyserSetting = getTextAnalyserSetting;
function getGCRSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSTextServiceProvider', 'ACTION_GET_GCR_SETTING', []);
    });
}
exports.getGCRSetting = getGCRSetting;
function stopFormRecognitionAnalyser() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSTextServiceProvider', 'ACTION_FORM_RECOGNITION_STOP', []);
    });
}
exports.stopFormRecognitionAnalyser = stopFormRecognitionAnalyser;
function bankCardDetector(bankCardDetecterReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSTextServiceProvider', 'ACTION_BANK_CARD_DETECTOR', [bankCardDetecterReq]);
    });
}
exports.bankCardDetector = bankCardDetector;
function stopBankCardDetector() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSTextServiceProvider', 'ACTION_STOP_BANK_CARD_DETECTOR', []);
    });
}
exports.stopBankCardDetector = stopBankCardDetector;
function getBankCardDetectorSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSTextServiceProvider', 'ACTION_GET_BANK_CARD_SETTING', []);
    });
}
exports.getBankCardDetectorSetting = getBankCardDetectorSetting;
function generalCardDetector(generalCardDetectorReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSTextServiceProvider', 'ACTION_GENERALCARD_PLUGIN_DETECTOR', [generalCardDetectorReq]);
    });
}
exports.generalCardDetector = generalCardDetector;
function formRecognitionAnalyser(formRecognizerAnalyserReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSTextServiceProvider', 'ACTION_FORM_RECOGNITION', [formRecognizerAnalyserReq]);
    });
}
exports.formRecognitionAnalyser = formRecognitionAnalyser;
//# sourceMappingURL=HMSTextServiceProvider.js.map