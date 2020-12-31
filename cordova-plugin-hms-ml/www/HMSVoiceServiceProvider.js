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
exports.rttAnalyserStop = exports.rttAnalyserStart = exports.asrAnalyser = exports.getDownloadStrategy = exports.aftAnalyser = exports.ttsOfflineAnalyser = exports.aftAnalyserPause = exports.soundDectAnalyserDestroy = exports.aftAnalyserDestroy = exports.asrAnalyserStop = exports.aftAnalyserClose = exports.ttsAnalyserDownloadSetting = exports.ttsAnalyserEngineSetting = exports.ttsAnalysershutDown = exports.ttsAnalyserResume = exports.ttsAnalyserPause = exports.ttsAnalyserStop = exports.ttsAnalyser = exports.soundDectAnalyser = exports.stopLangDetectionService = exports.getLangDetectionSetting = exports.getAFTSetting = exports.getTTSSetting = exports.getRTTSetting = exports.stopTranslatorService = exports.translatorRemoteAllLang = exports.translatorLocalAllLang = exports.translatorDeleteModel = exports.translatorDownloadModel = exports.localLangDetection = exports.remoteLangDetection = exports.remoteTranslator = exports.localTranslator = exports.MLImageSegmentationSetting = exports.MLImageClassificationConfig = exports.MLLocalTextSetting = exports.MLRemoteTextSetting = exports.MLTextConfig = exports.MLImageSegmentationScene = exports.MLBcrCaptureConfig = exports.MLRemoteLandmarkSetting = exports.MLGcrCaptureUIConfig = exports.HandkeyPointConfig = exports.MLBcrResultConfig = exports.ImgSuperResolutionConfig = exports.MlObjectAnalyserConfig = exports.FEATURE = exports.DownloadStrategyCustom = exports.RectStyle = exports.MLSkeletonConfig = exports.MLFaceSetting = exports.Colors = exports.MLTtsConstants = exports.LANGUAGE = void 0;
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
const cordova_1 = require("cordova");
const util_1 = require("./util");
var Interfaces_1 = require("./Interfaces");
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
//Voice Provider
function localTranslator(localTranslateReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_LOCAL_TRANSLATOR', [localTranslateReq]);
    });
}
exports.localTranslator = localTranslator;
function remoteTranslator(remotetranslateReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_REMOTE_TRANSLATOR', [remotetranslateReq]);
    });
}
exports.remoteTranslator = remoteTranslator;
function remoteLangDetection(remoteLangDetectionReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_REMOTE_LANG_DETECTION', [remoteLangDetectionReq]);
    });
}
exports.remoteLangDetection = remoteLangDetection;
function localLangDetection(localLangDetectionReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_LOCAL_LANG_DETECTION', [localLangDetectionReq]);
    });
}
exports.localLangDetection = localLangDetection;
function translatorDownloadModel(downloadTranslateReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_DOWNLOAD_MODEL', [downloadTranslateReq]);
    });
}
exports.translatorDownloadModel = translatorDownloadModel;
function translatorDeleteModel(deleteTranslateReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_DELETE_MODEL', [deleteTranslateReq]);
    });
}
exports.translatorDeleteModel = translatorDeleteModel;
function translatorLocalAllLang(localAllLangReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_LOCAL_GETLANG', [localAllLangReq]);
    });
}
exports.translatorLocalAllLang = translatorLocalAllLang;
function translatorRemoteAllLang(remoteAllLangReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_REMOTE_GETLANG', [remoteAllLangReq]);
    });
}
exports.translatorRemoteAllLang = translatorRemoteAllLang;
function stopTranslatorService() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_STOP_TRANSLATOR_SERVICE', []);
    });
}
exports.stopTranslatorService = stopTranslatorService;
function getRTTSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_RTT_ANALYSE_SETTING', []);
    });
}
exports.getRTTSetting = getRTTSetting;
function getTTSSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_TTS_ANALYSE_SETTING', []);
    });
}
exports.getTTSSetting = getTTSSetting;
function getAFTSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_AFT_ANALYSE_SETTING', []);
    });
}
exports.getAFTSetting = getAFTSetting;
function getLangDetectionSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_LANG_ANALYSE_SETTING', []);
    });
}
exports.getLangDetectionSetting = getLangDetectionSetting;
function stopLangDetectionService() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_STOP_LANGDETECTION_SERVICE', []);
    });
}
exports.stopLangDetectionService = stopLangDetectionService;
function soundDectAnalyser(soundDectReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_SOUNDDECT_ANALYSE', [soundDectReq]);
    });
}
exports.soundDectAnalyser = soundDectAnalyser;
function ttsAnalyser(ttsReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_TTS_ANALYSE', [ttsReq]);
    });
}
exports.ttsAnalyser = ttsAnalyser;
function ttsAnalyserStop() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_TTS_ANALYSE_STOP', []);
    });
}
exports.ttsAnalyserStop = ttsAnalyserStop;
function ttsAnalyserPause() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_TTS_ANALYSE_PAUSE', []);
    });
}
exports.ttsAnalyserPause = ttsAnalyserPause;
function ttsAnalyserResume() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_TTS_ANALYSE_RESUME', []);
    });
}
exports.ttsAnalyserResume = ttsAnalyserResume;
function ttsAnalysershutDown() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_TTS_ANALYSE_SHUTDOWN', []);
    });
}
exports.ttsAnalysershutDown = ttsAnalysershutDown;
function ttsAnalyserEngineSetting(ttsEngineReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_TTS_ANALYSE_ENGINESETTING', [ttsEngineReq]);
    });
}
exports.ttsAnalyserEngineSetting = ttsAnalyserEngineSetting;
function ttsAnalyserDownloadSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_TTS_ANALYSE_DSETTING', []);
    });
}
exports.ttsAnalyserDownloadSetting = ttsAnalyserDownloadSetting;
function aftAnalyserClose() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_AFT_ANALYSE_CLOSE', []);
    });
}
exports.aftAnalyserClose = aftAnalyserClose;
function asrAnalyserStop() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_ASR_ANALYSE_STOP', []);
    });
}
exports.asrAnalyserStop = asrAnalyserStop;
function aftAnalyserDestroy() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_AFT_ANALYSE_DESTROY', []);
    });
}
exports.aftAnalyserDestroy = aftAnalyserDestroy;
function soundDectAnalyserDestroy() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_SOUNDDECT_ANALYSE_DESTROY', []);
    });
}
exports.soundDectAnalyserDestroy = soundDectAnalyserDestroy;
function aftAnalyserPause() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_AFT_ANALYSE_PAUSE', []);
    });
}
exports.aftAnalyserPause = aftAnalyserPause;
function ttsOfflineAnalyser(ttsReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_TTS_OFFLINE_ANALYSE', [ttsReq]);
    });
}
exports.ttsOfflineAnalyser = ttsOfflineAnalyser;
function aftAnalyser(aftReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_AFT_ANALYSE', [aftReq]);
    });
}
exports.aftAnalyser = aftAnalyser;
function getDownloadStrategy() {
    return __awaiter(this, void 0, void 0, function* () {
        return util_1.asyncExec('HMSVoiceServiceProvider', 'ACTION_GET_DSTRATEGY', []);
    });
}
exports.getDownloadStrategy = getDownloadStrategy;
function asrAnalyser(asrReq, success, error) {
    cordova_1.exec(success, error, "HMSVoiceServiceProvider", "ACTION_ASR_ANALYSE", [asrReq]);
}
exports.asrAnalyser = asrAnalyser;
;
function rttAnalyserStart(rttReq, success, error) {
    cordova_1.exec(success, error, "HMSVoiceServiceProvider", "ACTION_RTT_ANALYSE", [rttReq]);
}
exports.rttAnalyserStart = rttAnalyserStart;
;
function rttAnalyserStop(success, error) {
    cordova_1.exec(success, error, "HMSVoiceServiceProvider", "ACTION_RTT_ANALYSE_STOP");
}
exports.rttAnalyserStop = rttAnalyserStop;
;
//# sourceMappingURL=HMSVoiceServiceProvider.js.map