"use strict";
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
exports.getTTSSetting = exports.ttsOfflineAnalyser = exports.ttsAnalyserResume = exports.ttsAnalyserPause = exports.ttsAnalyserShutDown = exports.ttsAnalyserEngineSetting = exports.ttsAnalyserDownloadSetting = exports.ttsAnalyserSetPLayerVolume = exports.ttsAnalyserStop = exports.ttsAnalyser = exports.stopTranslatorService = exports.getDownloadStrategy = exports.translatorRemoteAllLang = exports.translatorLocalAllLang = exports.translatorDeleteModel = exports.translatorDownloadModel = exports.localTranslator = exports.remoteTranslator = exports.soundDectAnalyserDestroy = exports.soundDectAnalyser = exports.getRttLanguages = exports.getRTTSetting = exports.rttAnalyserStop = exports.rttAnalyserStart = exports.syncProbabilityDetect = exports.syncFirstBestDetect = exports.getLangDetectionSetting = exports.stopLangDetectionService = exports.localLangDetection = exports.remoteLangDetection = exports.asrAnalyserStop = exports.asrAnalyserGetLanguages = exports.asrAnalyser = exports.aftAnalyserDestroy = exports.aftAnalyserPause = exports.getAFTSetting = exports.aftAnalyserClose = exports.getLongAftLanguages = exports.getShortAftLanguages = exports.aftAnalyser = exports.MLSpeechRealTimeTranscriptionConstants = exports.MLTtsError = exports.MLTtsAudioFragmentConstant = exports.CordovaErrors = exports.FEATURE = exports.RectStyle = exports.Colors = exports.MLAftConstants = exports.MLTtsConstants = exports.LANGUAGE = void 0;
const cordova_1 = require("cordova");
const util_1 = require("./util");
var interfaces_1 = require("./interfaces");
Object.defineProperty(exports, "LANGUAGE", { enumerable: true, get: function () { return interfaces_1.LANGUAGE; } });
Object.defineProperty(exports, "MLTtsConstants", { enumerable: true, get: function () { return interfaces_1.MLTtsConstants; } });
Object.defineProperty(exports, "MLAftConstants", { enumerable: true, get: function () { return interfaces_1.MLAftConstants; } });
Object.defineProperty(exports, "Colors", { enumerable: true, get: function () { return interfaces_1.Colors; } });
Object.defineProperty(exports, "RectStyle", { enumerable: true, get: function () { return interfaces_1.RectStyle; } });
Object.defineProperty(exports, "FEATURE", { enumerable: true, get: function () { return interfaces_1.FEATURE; } });
Object.defineProperty(exports, "CordovaErrors", { enumerable: true, get: function () { return interfaces_1.CordovaErrors; } });
Object.defineProperty(exports, "MLTtsAudioFragmentConstant", { enumerable: true, get: function () { return interfaces_1.MLTtsAudioFragmentConstant; } });
Object.defineProperty(exports, "MLTtsError", { enumerable: true, get: function () { return interfaces_1.MLTtsError; } });
Object.defineProperty(exports, "MLSpeechRealTimeTranscriptionConstants", { enumerable: true, get: function () { return interfaces_1.MLSpeechRealTimeTranscriptionConstants; } });
// AFT
function aftAnalyser(aftReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLAftAnalyser", [
            "aftAnalyser",
            aftReq
        ]);
    });
}
exports.aftAnalyser = aftAnalyser;
function getShortAftLanguages() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLAftAnalyser", [
            "getShortAftLanguages"
        ]);
    });
}
exports.getShortAftLanguages = getShortAftLanguages;
function getLongAftLanguages() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLAftAnalyser", [
            "getLongAftLanguages"
        ]);
    });
}
exports.getLongAftLanguages = getLongAftLanguages;
function aftAnalyserClose() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLAftAnalyser", [
            "aftAnalyserClose"
        ]);
    });
}
exports.aftAnalyserClose = aftAnalyserClose;
function getAFTSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLAftAnalyser", [
            "getAFTSetting"
        ]);
    });
}
exports.getAFTSetting = getAFTSetting;
function aftAnalyserPause() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLAftAnalyser", [
            "aftAnalyserPause"
        ]);
    });
}
exports.aftAnalyserPause = aftAnalyserPause;
function aftAnalyserDestroy() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLAftAnalyser", [
            "aftAnalyserDestroy"
        ]);
    });
}
exports.aftAnalyserDestroy = aftAnalyserDestroy;
// ASR
function asrAnalyser(asrReq, success, error) {
    (0, cordova_1.exec)(success, error, "HMSMLLanguage", "MLAsrAnalyser", [
        "asrAnalyser",
        asrReq,
    ]);
}
exports.asrAnalyser = asrAnalyser;
function asrAnalyserGetLanguages() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLAsrAnalyser", [
            "asrAnalyserGetLanguages"
        ]);
    });
}
exports.asrAnalyserGetLanguages = asrAnalyserGetLanguages;
function asrAnalyserStop() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLAsrAnalyser", [
            "asrAnalyserStop"
        ]);
    });
}
exports.asrAnalyserStop = asrAnalyserStop;
// LangDetection
function remoteLangDetection(remoteLangDetectionReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLLangDetectionAnalyser", [
            "remoteLangDetection",
            remoteLangDetectionReq
        ]);
    });
}
exports.remoteLangDetection = remoteLangDetection;
function localLangDetection(localLangDetectionReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLLangDetectionAnalyser", [
            "localLangDetection",
            localLangDetectionReq,
        ]);
    });
}
exports.localLangDetection = localLangDetection;
function stopLangDetectionService() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLLangDetectionAnalyser", [
            "stopLangDetectionService"
        ]);
    });
}
exports.stopLangDetectionService = stopLangDetectionService;
function getLangDetectionSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLLangDetectionAnalyser", [
            "getLangDetectionSetting"
        ]);
    });
}
exports.getLangDetectionSetting = getLangDetectionSetting;
function syncFirstBestDetect(syncRequest) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLLangDetectionAnalyser", [
            "syncFirstBestDetect",
            syncRequest,
        ]);
    });
}
exports.syncFirstBestDetect = syncFirstBestDetect;
function syncProbabilityDetect(syncRequest) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLLangDetectionAnalyser", [
            "syncProbabilityDetect",
            syncRequest
        ]);
    });
}
exports.syncProbabilityDetect = syncProbabilityDetect;
// RTT
function rttAnalyserStart(rttReq, success, error) {
    (0, cordova_1.exec)(success, error, "HMSMLLanguage", "MLRttAnalyser", [
        "rttAnalyserStart",
        rttReq,
    ]);
}
exports.rttAnalyserStart = rttAnalyserStart;
function rttAnalyserStop(success, error) {
    (0, cordova_1.exec)(success, error, "HMSMLLanguage", "MLRttAnalyser", [
        "rttAnalyserStop"
    ]);
}
exports.rttAnalyserStop = rttAnalyserStop;
function getRTTSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLRttAnalyser", [
            "getRTTSetting"
        ]);
    });
}
exports.getRTTSetting = getRTTSetting;
function getRttLanguages() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLRttAnalyser", [
            "getRttLanguages"
        ]);
    });
}
exports.getRttLanguages = getRttLanguages;
// SoundDetect
function soundDectAnalyser(soundDectReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLSoundDetectionAnalyser", [
            "soundDectAnalyser",
            soundDectReq,
        ]);
    });
}
exports.soundDectAnalyser = soundDectAnalyser;
function soundDectAnalyserDestroy() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLSoundDetectionAnalyser", [
            "soundDectAnalyserDestroy"
        ]);
    });
}
exports.soundDectAnalyserDestroy = soundDectAnalyserDestroy;
// Translate
function remoteTranslator(remotetranslateReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLTranslatorAnalyser", [
            "remoteTranslator",
            remotetranslateReq,
        ]);
    });
}
exports.remoteTranslator = remoteTranslator;
function localTranslator(localTranslateReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLTranslatorAnalyser", [
            "localTranslator",
            localTranslateReq,
        ]);
    });
}
exports.localTranslator = localTranslator;
function translatorDownloadModel(downloadTranslateReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLTranslatorAnalyser", [
            "translatorDownloadModel",
            downloadTranslateReq,
        ]);
    });
}
exports.translatorDownloadModel = translatorDownloadModel;
function translatorDeleteModel(deleteTranslateReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLTranslatorAnalyser", [
            "translatorDeleteModel",
            deleteTranslateReq,
        ]);
    });
}
exports.translatorDeleteModel = translatorDeleteModel;
function translatorLocalAllLang(localAllLangReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLTranslatorAnalyser", [
            "translatorLocalAllLang",
            localAllLangReq,
        ]);
    });
}
exports.translatorLocalAllLang = translatorLocalAllLang;
function translatorRemoteAllLang(remoteAllLangReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLTranslatorAnalyser", [
            "translatorRemoteAllLang",
            remoteAllLangReq,
        ]);
    });
}
exports.translatorRemoteAllLang = translatorRemoteAllLang;
function getDownloadStrategy() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLTranslatorAnalyser", [
            "getDownloadStrategy"
        ]);
    });
}
exports.getDownloadStrategy = getDownloadStrategy;
function stopTranslatorService() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLTranslatorAnalyser", [
            "stopTranslatorService"
        ]);
    });
}
exports.stopTranslatorService = stopTranslatorService;
// TSS
function ttsAnalyser(ttsReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLTtsAnalyser", [
            "ttsAnalyser",
            ttsReq
        ]);
    });
}
exports.ttsAnalyser = ttsAnalyser;
function ttsAnalyserStop() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLTtsAnalyser", [
            "ttsAnalyserStop"
        ]);
    });
}
exports.ttsAnalyserStop = ttsAnalyserStop;
function ttsAnalyserSetPLayerVolume(ttsEngineReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLTtsAnalyser", [
            "ttsAnalyserSetPLayerVolume",
            ttsEngineReq
        ]);
    });
}
exports.ttsAnalyserSetPLayerVolume = ttsAnalyserSetPLayerVolume;
function ttsAnalyserDownloadSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLTtsAnalyser", [
            "ttsAnalyserDownloadSetting"
        ]);
    });
}
exports.ttsAnalyserDownloadSetting = ttsAnalyserDownloadSetting;
function ttsAnalyserEngineSetting(ttsEngineReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLTtsAnalyser", [
            "ttsAnalyserEngineSetting",
            ttsEngineReq
        ]);
    });
}
exports.ttsAnalyserEngineSetting = ttsAnalyserEngineSetting;
function ttsAnalyserShutDown() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLTtsAnalyser", [
            "ttsAnalyserShutDown"
        ]);
    });
}
exports.ttsAnalyserShutDown = ttsAnalyserShutDown;
function ttsAnalyserPause() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLTtsAnalyser", [
            "ttsAnalyserPause"
        ]);
    });
}
exports.ttsAnalyserPause = ttsAnalyserPause;
function ttsAnalyserResume() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLTtsAnalyser", [
            "ttsAnalyserResume"
        ]);
    });
}
exports.ttsAnalyserResume = ttsAnalyserResume;
function ttsOfflineAnalyser(ttsReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLTtsAnalyser", [
            "ttsOfflineAnalyser",
            ttsReq
        ]);
    });
}
exports.ttsOfflineAnalyser = ttsOfflineAnalyser;
function getTTSSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLLanguage", "MLTtsAnalyser", [
            "getTTSSetting"
        ]);
    });
}
exports.getTTSSetting = getTTSSetting;
//# sourceMappingURL=HMSMLLanguage.js.map