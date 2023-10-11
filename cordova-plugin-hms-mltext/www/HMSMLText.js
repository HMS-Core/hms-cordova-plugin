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
exports.getLightStatus = exports.switchLight = exports.startCustomizedView = exports.icrLocalAnalyserStop = exports.icrLocalAnalyserCreateIdCard = exports.icrLocalAnalyser = exports.icrCnCardDetector = exports.getIcrCnCapture = exports.geticrCnCardInstance = exports.icrCnCardCreate = exports.geticrVnCardInstance = exports.getIcrVnCapture = exports.icrVnCardCreate = exports.icrVnCardDetector = exports.formRecognitionAnalyser = exports.generalCardDetector = exports.getBankCardDetectorSetting = exports.setRecModeBcr = exports.setResultTypeBcr = exports.setResultCallbackBcr = exports.stopBankCardDetector = exports.bankCardDetector = exports.stopFormRecognitionAnalyser = exports.getGCRSetting = exports.getTextAnalyserSetting = exports.getDocumentImageAnalyserSetting = exports.stopDocumentImageAnalyser = exports.closeDocumentImageAnalyser = exports.documentImageAnalyser = exports.getTextAnalyserInfo = exports.stopTextAnalyser = exports.imageTextAnalyser = exports.RecMode = exports.Colors = exports.MLBcrCaptureErrorCode = exports.CordovaErrors = exports.MLLocalTextSetting = exports.MLRemoteTextSetting = exports.MLTextConfig = exports.MLBcrCaptureConfig = exports.MLGcrCaptureUIConfig = exports.MLBcrResultConfig = exports.ImgSuperResolutionConfig = exports.MLFormRecogitionConfig = exports.MLProductConfig = void 0;
const util_1 = require("./util");
var interfaces_1 = require("./interfaces");
Object.defineProperty(exports, "MLProductConfig", { enumerable: true, get: function () { return interfaces_1.MLProductConfig; } });
Object.defineProperty(exports, "MLFormRecogitionConfig", { enumerable: true, get: function () { return interfaces_1.MLFormRecogitionConfig; } });
Object.defineProperty(exports, "ImgSuperResolutionConfig", { enumerable: true, get: function () { return interfaces_1.ImgSuperResolutionConfig; } });
Object.defineProperty(exports, "MLBcrResultConfig", { enumerable: true, get: function () { return interfaces_1.MLBcrResultConfig; } });
Object.defineProperty(exports, "MLGcrCaptureUIConfig", { enumerable: true, get: function () { return interfaces_1.MLGcrCaptureUIConfig; } });
Object.defineProperty(exports, "MLBcrCaptureConfig", { enumerable: true, get: function () { return interfaces_1.MLBcrCaptureConfig; } });
Object.defineProperty(exports, "MLTextConfig", { enumerable: true, get: function () { return interfaces_1.MLTextConfig; } });
Object.defineProperty(exports, "MLRemoteTextSetting", { enumerable: true, get: function () { return interfaces_1.MLRemoteTextSetting; } });
Object.defineProperty(exports, "MLLocalTextSetting", { enumerable: true, get: function () { return interfaces_1.MLLocalTextSetting; } });
Object.defineProperty(exports, "CordovaErrors", { enumerable: true, get: function () { return interfaces_1.CordovaErrors; } });
Object.defineProperty(exports, "MLBcrCaptureErrorCode", { enumerable: true, get: function () { return interfaces_1.MLBcrCaptureErrorCode; } });
Object.defineProperty(exports, "Colors", { enumerable: true, get: function () { return interfaces_1.Colors; } });
Object.defineProperty(exports, "RecMode", { enumerable: true, get: function () { return interfaces_1.RecMode; } });
//Text Provider
function imageTextAnalyser(ImageTextReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_IMAGE_TEXT_ANALYSER", [
            ImageTextReq,
        ]);
    });
}
exports.imageTextAnalyser = imageTextAnalyser;
function stopTextAnalyser() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_STOP_TEXT_ANALYSER", []);
    });
}
exports.stopTextAnalyser = stopTextAnalyser;
function getTextAnalyserInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_GET_IMAGE_TEXT_INFO", []);
    });
}
exports.getTextAnalyserInfo = getTextAnalyserInfo;
function documentImageAnalyser(documentImageReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_DOCUMENT_IMAGE_ANALYSER", [documentImageReq]);
    });
}
exports.documentImageAnalyser = documentImageAnalyser;
function closeDocumentImageAnalyser() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_CLOSE_DOCUMENT_IMAGE_ANALYSER", []);
    });
}
exports.closeDocumentImageAnalyser = closeDocumentImageAnalyser;
function stopDocumentImageAnalyser() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_STOP_DOCUMENT_IMAGE_ANALYSER", []);
    });
}
exports.stopDocumentImageAnalyser = stopDocumentImageAnalyser;
function getDocumentImageAnalyserSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_GET_DOCUMENT_IMAGE_ANALYSER_SETTING", []);
    });
}
exports.getDocumentImageAnalyserSetting = getDocumentImageAnalyserSetting;
function getTextAnalyserSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_GET_IMAGE_TEXT_SETTING", []);
    });
}
exports.getTextAnalyserSetting = getTextAnalyserSetting;
function getGCRSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_GET_GCR_SETTING", []);
    });
}
exports.getGCRSetting = getGCRSetting;
function stopFormRecognitionAnalyser() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_FORM_RECOGNITION_STOP", []);
    });
}
exports.stopFormRecognitionAnalyser = stopFormRecognitionAnalyser;
function bankCardDetector(bankCardDetecterReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_BANK_CARD_DETECTOR", [
            bankCardDetecterReq,
        ]);
    });
}
exports.bankCardDetector = bankCardDetector;
function stopBankCardDetector() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_STOP_BANK_CARD_DETECTOR", []);
    });
}
exports.stopBankCardDetector = stopBankCardDetector;
function setResultCallbackBcr() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_BANK_CARD_SET_RESULT_CALLBACK", []);
    });
}
exports.setResultCallbackBcr = setResultCallbackBcr;
function setResultTypeBcr(mLBcrCaptureConfig) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_BANK_CARD_SET_RESULT_TYPE", []);
    });
}
exports.setResultTypeBcr = setResultTypeBcr;
function setRecModeBcr(mLBcrCaptureConfig) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_BANK_CARD_SET_RECMODE", []);
    });
}
exports.setRecModeBcr = setRecModeBcr;
function getBankCardDetectorSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_GET_BANK_CARD_SETTING", []);
    });
}
exports.getBankCardDetectorSetting = getBankCardDetectorSetting;
function generalCardDetector(generalCardDetectorReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_GENERALCARD_PLUGIN_DETECTOR", [generalCardDetectorReq]);
    });
}
exports.generalCardDetector = generalCardDetector;
function formRecognitionAnalyser(formRecognizerAnalyserReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_FORM_RECOGNITION", [
            formRecognizerAnalyserReq,
        ]);
    });
}
exports.formRecognitionAnalyser = formRecognitionAnalyser;
function icrVnCardDetector(icrVnDetectorReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_ICRVN_PLUGIN_DETECTOR", [
            icrVnDetectorReq,
        ]);
    });
}
exports.icrVnCardDetector = icrVnCardDetector;
function icrVnCardCreate() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_ICRVN_CREATE", []);
    });
}
exports.icrVnCardCreate = icrVnCardCreate;
function getIcrVnCapture() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_ICRVN_CAPTURE", []);
    });
}
exports.getIcrVnCapture = getIcrVnCapture;
function geticrVnCardInstance() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_ICRVN_GET_INSTANCE", []);
    });
}
exports.geticrVnCardInstance = geticrVnCardInstance;
function icrCnCardCreate() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_ICRCN_CREATE", []);
    });
}
exports.icrCnCardCreate = icrCnCardCreate;
function geticrCnCardInstance() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_ICRCN_GET_INSTANCE", []);
    });
}
exports.geticrCnCardInstance = geticrCnCardInstance;
function getIcrCnCapture() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_ICRCN_CAPTURE", []);
    });
}
exports.getIcrCnCapture = getIcrCnCapture;
function icrCnCardDetector(icrCnDetectorReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_ICRCN_PLUGIN_DETECTOR", [
            icrCnDetectorReq,
        ]);
    });
}
exports.icrCnCardDetector = icrCnCardDetector;
function icrLocalAnalyser(localAnalyserReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_LOCAL_ANALYSER", [
            localAnalyserReq,
        ]);
    });
}
exports.icrLocalAnalyser = icrLocalAnalyser;
function icrLocalAnalyserCreateIdCard(createIdCardReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_LOCAL_ANALYSER_CREATE", [
            createIdCardReq,
        ]);
    });
}
exports.icrLocalAnalyserCreateIdCard = icrLocalAnalyserCreateIdCard;
function icrLocalAnalyserStop() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLText", "ACTION_LOCAL_ANALYSER_STOP", []);
    });
}
exports.icrLocalAnalyserStop = icrLocalAnalyserStop;
function startCustomizedView(userProps) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)('HMSMLText', 'startCustomizedView', [userProps]);
    });
}
exports.startCustomizedView = startCustomizedView;
;
function switchLight() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)('HMSMLText', 'switchLight', []);
    });
}
exports.switchLight = switchLight;
;
function getLightStatus() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)('HMSMLText', 'getLightStatus', []);
    });
}
exports.getLightStatus = getLightStatus;
;
//# sourceMappingURL=HMSMLText.js.map