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
import { __extends } from "tslib";
import { Injectable } from "@angular/core";
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from "@ionic-native/core";
import { Observable } from "rxjs";
var HMSMLPlugin = /** @class */ (function (_super) {
    __extends(HMSMLPlugin, _super);
    function HMSMLPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * It sets Api Key or access token for application.
     * @param  {configReq} params Represents your API_KEY.
     * @returns Promise<any>
     */
    HMSMLPlugin.prototype.serviceInitializer = function (params) { return cordova(this, "serviceInitializer", { "otherPromise": true }, arguments); };
    /**
     * An app information class used to store basic information about apps with the HMS Core ML SDK integrated and complete the initialization of ML Kit. When using cloud services of the ML Kit, you need to set the apiKey of your app.
     * @param  {appSettingReq} appSettingReq Represents the parameter required.
     * @returns Promise<any>
     */
    HMSMLPlugin.prototype.appSetting = function (appSettingReq) { return cordova(this, "appSetting", { "otherPromise": true }, arguments); };
    /**
     * Sets a data processing location when you choose to manually manage and specify such a location.
     * @param  {region} region Represents the parameter.
     *         * REGION_DR_UNKNOWN = 1001,
               * REGION_DR_CHINA = 1002,
               * REGION_DR_RUSSIA = 1005,
               * REGION_DR_GERMAN = 1006,
               * REGION_DR_SINGAPORE = 1007
     * @returns Promise<any>
     */
    HMSMLPlugin.prototype.setUserRegion = function (region) { return cordova(this, "setUserRegion", { "otherPromise": true }, arguments); };
    /**
     * Obtains the country/region code of the data processing location you have specified when you choose to manually manage and specify such a location.
     * @returns Promise<String>
     */
    HMSMLPlugin.prototype.getCountryCode = function () { return cordova(this, "getCountryCode", { "otherPromise": true }, arguments); };
    /**
     * This service enable logger service.
     * @returns Promise<any>
     */
    HMSMLPlugin.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    /**
     * This service disable logger service.
     * @returns Promise<any>
     */
    HMSMLPlugin.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSMLPlugin.prototype, "FEATURE", {
        get: function () { return cordovaPropertyGet(this, "FEATURE"); },
        set: function (value) { cordovaPropertySet(this, "FEATURE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLPlugin.prototype, "LANGUAGE", {
        get: function () { return cordovaPropertyGet(this, "LANGUAGE"); },
        set: function (value) { cordovaPropertySet(this, "LANGUAGE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLPlugin.prototype, "MLTtsConstants", {
        get: function () { return cordovaPropertyGet(this, "MLTtsConstants"); },
        set: function (value) { cordovaPropertySet(this, "MLTtsConstants", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLPlugin.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLPlugin.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLPlugin.prototype, "MLRttLanguages", {
        get: function () { return cordovaPropertyGet(this, "MLRttLanguages"); },
        set: function (value) { cordovaPropertySet(this, "MLRttLanguages", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLPlugin.prototype, "MLRttScenes", {
        get: function () { return cordovaPropertyGet(this, "MLRttScenes"); },
        set: function (value) { cordovaPropertySet(this, "MLRttScenes", value); },
        enumerable: false,
        configurable: true
    });
    HMSMLPlugin.pluginName = "HMSMLPlugin";
    HMSMLPlugin.plugin = "cordova-plugin-hms-mllanguage";
    HMSMLPlugin.pluginRef = "HMSMLPlugin";
    HMSMLPlugin.platforms = ["Android"];
    HMSMLPlugin.decorators = [
        { type: Injectable }
    ];
    return HMSMLPlugin;
}(IonicNativePlugin));
export { HMSMLPlugin };
var HMSMLLanguage = /** @class */ (function (_super) {
    __extends(HMSMLLanguage, _super);
    function HMSMLLanguage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param  {syncProbabilityDetect} syncRequestLocalLangDetect Represents the parameter.
     * @returns Promise<MLRemoteLangDetection>
     */
    HMSMLLanguage.prototype.syncProbabilityDetect = function (syncProbabilityDetect) { return cordova(this, "syncProbabilityDetect", { "otherPromise": true }, arguments); };
    /**
     * @param  {syncProbabilityDetect} syncProbabilityDetect Represents the parameter.
     * @returns Promise<String>
     */
    HMSMLLanguage.prototype.syncFirstBestDetect = function (syncProbabilityDetect) { return cordova(this, "syncFirstBestDetect", { "otherPromise": true }, arguments); };
    /**
     * Implements on-cloud text translation.
     * @param  {remotetranslateReq} remotetranslateReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.remoteTranslator = function (remotetranslateReq) { return cordova(this, "remoteTranslator", { "otherPromise": true }, arguments); };
    /**
     * Implements on-cloud text translation.
     * @param  {localtranslateReq} localtranslateReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.localTranslator = function (localtranslateReq) { return cordova(this, "localTranslator", { "otherPromise": true }, arguments); };
    /**
     * Obtains all languages supported for local translation.
     * @param  {localAllLangReq} localAllLangReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.translatorLocalAllLang = function (localAllLangReq) { return cordova(this, "translatorLocalAllLang", { "otherPromise": true }, arguments); };
    /**
     * Obtains all languages supported for on-cloud translation.
     * @param  {remoteAllLangReq} remoteAllLangReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.translatorRemoteAllLang = function (remoteAllLangReq) { return cordova(this, "translatorRemoteAllLang", { "otherPromise": true }, arguments); };
    /**
     * Detects languages on the cloud.
     * @param  {remoteLangDetectionReq} remoteLangDetectionReq Represents the parameter required for lang detection.
     * @returns Promise<RemoteLangDetectionAnalyser> | Promise<langDetectionWithFirstDetect>
     */
    HMSMLLanguage.prototype.remoteLangDetection = function (remoteLangDetectionReq) { return cordova(this, "remoteLangDetection", { "otherPromise": true }, arguments); };
    /**
     * Detects languages on local.
     * @param  {localLangDetectionReq} localLangDetectionReq Represents the parameter required for lang detection.
     * @returns Promise<any> | Promise<any>
     */
    HMSMLLanguage.prototype.localLangDetection = function (localLangDetectionReq) { return cordova(this, "localLangDetection", { "otherPromise": true }, arguments); };
    /**
     * Download language model.
     * @param  {downloadTranslateReq} downloadTranslateReq Represents the parameter required for download model.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.translatorDownloadModel = function (downloadTranslateReq) { return cordova(this, "translatorDownloadModel", { "otherPromise": true }, arguments); };
    /**
     * For delete language model.
     * @param  {deleteTranslateReq} deleteTranslateReq Represents the parameter required for delete model.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.translatorDeleteModel = function (deleteTranslateReq) { return cordova(this, "translatorDeleteModel", { "otherPromise": true }, arguments); };
    /**
     * This method stop translator service.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.stopTranslatorService = function () { return cordova(this, "stopTranslatorService", { "otherPromise": true }, arguments); };
    /**
     * This method return RTT setting.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.getRTTSetting = function () { return cordova(this, "getRTTSetting", { "otherPromise": true }, arguments); };
    /**
     * This method returns TTS setting.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.getTTSSetting = function () { return cordova(this, "getTTSSetting", { "otherPromise": true }, arguments); };
    /**
     * This method returns AFT setting.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.getAFTSetting = function () { return cordova(this, "getAFTSetting", { "otherPromise": true }, arguments); };
    /**
     * This method returns Lang Detection setting.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.getLangDetectionSetting = function () { return cordova(this, "getLangDetectionSetting", { "otherPromise": true }, arguments); };
    /**
     * This method stop lang detection service.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.stopLangDetectionService = function () { return cordova(this, "stopLangDetectionService", { "otherPromise": true }, arguments); };
    /**
     * The sound detection service can detect sound events in online (real-time recording) mode. The detected sound events can help you perform subsequent actions.
     * @param  {soundDectReq} soundDectReq Represents the parameter required for Sound Detection analyser.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.soundDectAnalyser = function (soundDectReq) { return cordova(this, "soundDectAnalyser", { "otherPromise": true }, arguments); };
    /**
     * TTS can convert text information into audio output. Rich timbres, and volume and speed options are supported to produce more natural sounds.
     * @param  {ttsReq} ttsReq Represents the parameter required for text to speech.
     * @returns Promise<TtsAnalyser>
     */
    HMSMLLanguage.prototype.ttsAnalyser = function (ttsReq) { return cordova(this, "ttsAnalyser", { "otherPromise": true }, arguments); };
    /**
     * TTS can convert text information into audio output offline. Rich timbres, and volume and speed options are supported to produce more natural sounds.
     * @param  {ttsReq} ttsReq Represents the parameter required for text to speech.
     * @returns Promise<TtsAnalyser>
     */
    HMSMLLanguage.prototype.ttsOfflineAnalyser = function (ttsReq) { return cordova(this, "ttsOfflineAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This service stop text to speech (TTS) service.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.ttsAnalyserStop = function () { return cordova(this, "ttsAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * This service pauses text to speech (TTS) analyser.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.ttsAnalyserPause = function () { return cordova(this, "ttsAnalyserPause", { "otherPromise": true }, arguments); };
    /**
     * This service continues text to speech (TTS) analyser.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.ttsAnalyserResume = function () { return cordova(this, "ttsAnalyserResume", { "otherPromise": true }, arguments); };
    /**
     * This service shutdown text to speech (TTS) analyser.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.ttsAnalysershutDown = function () { return cordova(this, "ttsAnalysershutDown", { "otherPromise": true }, arguments); };
    /**
     * This method returns TTS Download setting.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.ttsAnalyserDownloadSetting = function () { return cordova(this, "ttsAnalyserDownloadSetting", { "otherPromise": true }, arguments); };
    /**
     * This service close AFT analyser.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.aftAnalyserClose = function () { return cordova(this, "aftAnalyserClose", { "otherPromise": true }, arguments); };
    /**
     * This service stop AFT analyser.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.asrAnalyserStop = function () { return cordova(this, "asrAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * This service destroy AFT analyser.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.aftAnalyserDestroy = function () { return cordova(this, "aftAnalyserDestroy", { "otherPromise": true }, arguments); };
    /**
     * This service pause AFT analyser.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.aftAnalyserPause = function () { return cordova(this, "aftAnalyserPause", { "otherPromise": true }, arguments); };
    /**
     * This service destroy Sound Detection analyser.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.soundDectAnalyserDestroy = function () { return cordova(this, "soundDectAnalyserDestroy", { "otherPromise": true }, arguments); };
    /**
     * The audio file transcription service can convert an audio file less than or equal to 60 seconds into a text file. Currently, Chinese and English are supported.
     * @param  {aftReq} aftReq Represents the parameter required for aft analyser.
     * @returns Promise<AftAnalyser>
     */
    HMSMLLanguage.prototype.aftAnalyser = function (aftReq) { return cordova(this, "aftAnalyser", { "otherPromise": true }, arguments); };
    HMSMLLanguage.prototype.asrAnalyser = function (asrReq) { return cordova(this, "asrAnalyser", { "observable": true }, arguments); };
    HMSMLLanguage.prototype.rttAnalyserStart = function (rttReq) { return cordova(this, "rttAnalyserStart", { "observable": true }, arguments); };
    HMSMLLanguage.prototype.rttAnalyserStop = function () { return cordova(this, "rttAnalyserStop", { "observable": true }, arguments); };
    Object.defineProperty(HMSMLLanguage.prototype, "FEATURE", {
        get: function () { return cordovaPropertyGet(this, "FEATURE"); },
        set: function (value) { cordovaPropertySet(this, "FEATURE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLLanguage.prototype, "LANGUAGE", {
        get: function () { return cordovaPropertyGet(this, "LANGUAGE"); },
        set: function (value) { cordovaPropertySet(this, "LANGUAGE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLLanguage.prototype, "MLTtsConstants", {
        get: function () { return cordovaPropertyGet(this, "MLTtsConstants"); },
        set: function (value) { cordovaPropertySet(this, "MLTtsConstants", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLLanguage.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLLanguage.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLLanguage.prototype, "MLRttLanguages", {
        get: function () { return cordovaPropertyGet(this, "MLRttLanguages"); },
        set: function (value) { cordovaPropertySet(this, "MLRttLanguages", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLLanguage.prototype, "MLRttScenes", {
        get: function () { return cordovaPropertyGet(this, "MLRttScenes"); },
        set: function (value) { cordovaPropertySet(this, "MLRttScenes", value); },
        enumerable: false,
        configurable: true
    });
    HMSMLLanguage.pluginName = "HMSMLLanguage";
    HMSMLLanguage.plugin = "cordova-plugin-hms-mllanguage";
    HMSMLLanguage.pluginRef = "HMSMLLanguage";
    HMSMLLanguage.platforms = ["Android"];
    HMSMLLanguage.decorators = [
        { type: Injectable }
    ];
    return HMSMLLanguage;
}(IonicNativePlugin));
export { HMSMLLanguage };
export var MLAsrConstants;
(function (MLAsrConstants) {
    MLAsrConstants["PUNCTUATION_ENABLE"] = "PUNCTUATION_ENABLE";
    MLAsrConstants[MLAsrConstants["ERR_NO_NETWORK"] = 11202] = "ERR_NO_NETWORK";
    MLAsrConstants[MLAsrConstants["ERR_NO_UNDERSTAND"] = 11204] = "ERR_NO_UNDERSTAND";
    MLAsrConstants[MLAsrConstants["ERR_SERVICE_UNAVAILABLE"] = 11203] = "ERR_SERVICE_UNAVAILABLE";
    MLAsrConstants["FEATURE"] = "FEATURE";
    MLAsrConstants["LANGUAGE"] = "LANGUAGE";
    MLAsrConstants["LAN_EN_US"] = "en-US";
    MLAsrConstants["LAN_FR_FR"] = "fr-FR";
    MLAsrConstants["LAN_ZH"] = "zh";
    MLAsrConstants["LAN_ZH_CN"] = "zh-CN";
    MLAsrConstants["LAN_ES_ES"] = "es-ES";
    MLAsrConstants["LAN_DE_DE"] = "de-DE";
    MLAsrConstants["LAN_RU_RU"] = "ru-RU";
    MLAsrConstants["LAN_IT_IT"] = "it-IT";
    MLAsrConstants["LAN_AR"] = "ar";
    MLAsrConstants["LAN_TH_TH"] = "th_TH";
    MLAsrConstants["LAN_MS_MY"] = "ms_MY";
    MLAsrConstants["LAN_FIL_PH"] = "fil_PH";
    MLAsrConstants["Turkish"] = "tr-TR";
    MLAsrConstants[MLAsrConstants["ERR_INVALIDATE_TOKEN"] = 11219] = "ERR_INVALIDATE_TOKEN";
    MLAsrConstants[MLAsrConstants["FEATURE_ALLINONE"] = 12] = "FEATURE_ALLINONE";
    MLAsrConstants[MLAsrConstants["FEATURE_WORDFLUX"] = 11] = "FEATURE_WORDFLUX";
    MLAsrConstants["SCENES"] = "scenes";
    MLAsrConstants["SCENES_SHOPPING"] = "shopping";
    MLAsrConstants[MLAsrConstants["STATE_LISTENING"] = 1] = "STATE_LISTENING";
    MLAsrConstants[MLAsrConstants["STATE_NO_NETWORK"] = 7] = "STATE_NO_NETWORK";
    MLAsrConstants[MLAsrConstants["STATE_NO_SOUND"] = 2] = "STATE_NO_SOUND";
    MLAsrConstants[MLAsrConstants["STATE_NO_SOUND_TIMES_EXCEED"] = 3] = "STATE_NO_SOUND_TIMES_EXCEED";
    MLAsrConstants[MLAsrConstants["STATE_NO_UNDERSTAND"] = 6] = "STATE_NO_UNDERSTAND";
    MLAsrConstants[MLAsrConstants["STATE_WAITING"] = 9] = "STATE_WAITING";
    MLAsrConstants["ACTION_HMS_ASR_SPEECH"] = "com.huawei.hms.mlsdk.action.RECOGNIZE_SPEECH";
    MLAsrConstants["WAVE_PAINE_ENCODING"] = "ENCODING";
    MLAsrConstants["WAVE_PAINE_SAMPLE_RATE"] = "SAMPLE_RATE";
    MLAsrConstants["WAVE_PAINE_BIT_WIDTH"] = "BIT_WIDTH";
    MLAsrConstants["WAVE_PAINE_CHANNEL_COUNT"] = "CHANNEL_COUNT";
})(MLAsrConstants || (MLAsrConstants = {}));
export var FEATURE;
(function (FEATURE) {
    FEATURE[FEATURE["FEATURE_ALLINONE"] = 12] = "FEATURE_ALLINONE";
    FEATURE[FEATURE["FEATURE_WORDFLUX"] = 11] = "FEATURE_WORDFLUX";
})(FEATURE || (FEATURE = {}));
export var LANGUAGE;
(function (LANGUAGE) {
    LANGUAGE["LAN_EN_US"] = "en-US";
    LANGUAGE["LAN_FR_FR"] = "fr-FR";
    LANGUAGE["LAN_ZH"] = "zh";
    LANGUAGE["LAN_ZH_CN"] = "zh-CN";
    LANGUAGE["LAN_ES_ES"] = "es-ES";
    LANGUAGE["LAN_DE_DE"] = "de-DE";
    LANGUAGE["LAN_RU_RU"] = "ru-RU";
    LANGUAGE["LAN_IT_IT"] = "it-IT";
    LANGUAGE["LAN_AR"] = "ar";
    LANGUAGE["LAN_TH_TH"] = "th_TH";
    LANGUAGE["LAN_MS_MY"] = "ms_MY";
    LANGUAGE["LAN_FIL_PH"] = "fil_PH";
    LANGUAGE["Turkish"] = "tr-TR";
})(LANGUAGE || (LANGUAGE = {}));
export var MLDocumentSkewCorrectionConstant;
(function (MLDocumentSkewCorrectionConstant) {
    MLDocumentSkewCorrectionConstant[MLDocumentSkewCorrectionConstant["SUCCESS"] = 0] = "SUCCESS";
    MLDocumentSkewCorrectionConstant[MLDocumentSkewCorrectionConstant["DETECT_FAILED"] = 1] = "DETECT_FAILED";
    MLDocumentSkewCorrectionConstant[MLDocumentSkewCorrectionConstant["CORRECTION_FAILED"] = 2] = "CORRECTION_FAILED";
    MLDocumentSkewCorrectionConstant[MLDocumentSkewCorrectionConstant["IMAGE_DATA_ERROR"] = 3] = "IMAGE_DATA_ERROR";
})(MLDocumentSkewCorrectionConstant || (MLDocumentSkewCorrectionConstant = {}));
export var MLLanguageDetection;
(function (MLLanguageDetection) {
    MLLanguageDetection[MLLanguageDetection["FIRST_BEST_DETECTION_LANGUAGE_TRUSTED_THRESHOLD"] = 0.5] = "FIRST_BEST_DETECTION_LANGUAGE_TRUSTED_THRESHOLD";
    MLLanguageDetection[MLLanguageDetection["PROBABILITY_DETECTION_LANGUAGE_TRUSTED_THRESHOLD"] = 0.01] = "PROBABILITY_DETECTION_LANGUAGE_TRUSTED_THRESHOLD";
    MLLanguageDetection["UNDETECTION_LANGUAGE_TRUSTED_THRESHOLD"] = "unknown";
})(MLLanguageDetection || (MLLanguageDetection = {}));
export var MLRttLanguages;
(function (MLRttLanguages) {
    MLRttLanguages["LAN_ZH_CN"] = "zh-CN";
    MLRttLanguages["LAN_EN_US"] = "en-US";
    MLRttLanguages["LAN_FR_FR"] = "fr-FR";
    MLRttLanguages["LAN_ES_ES"] = "es-ES";
    MLRttLanguages["LAN_EN_IN"] = "en-IN";
    MLRttLanguages["LAN_DE_DE"] = "de-DE";
})(MLRttLanguages || (MLRttLanguages = {}));
export var MLRttScenes;
(function (MLRttScenes) {
    MLRttScenes["SCENES_SHOPPINGf"] = "shopping";
})(MLRttScenes || (MLRttScenes = {}));
export var MLSpeechRealTimeTranscriptionConstants;
(function (MLSpeechRealTimeTranscriptionConstants) {
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["ERR_INVALIDE_TOKEN"] = 13219] = "ERR_INVALIDE_TOKEN";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["ERR_NO_NETWORK"] = 13202] = "ERR_NO_NETWORK";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["ERR_SERVICE_CREDIT"] = 13222] = "ERR_SERVICE_CREDIT";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["ERR_SERVICE_UNSUBSCRIBED"] = 13223] = "ERR_SERVICE_UNSUBSCRIBED";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["ERR_SERVICE_FREE_USED_UP"] = 13224] = "ERR_SERVICE_FREE_USED_UP";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["ERR_SERVICE_UNAVAILABLE"] = 13203] = "ERR_SERVICE_UNAVAILABLE";
    MLSpeechRealTimeTranscriptionConstants["LAN_EN_US"] = " en-US";
    MLSpeechRealTimeTranscriptionConstants["LAN_FR_FR"] = "fr-FR";
    MLSpeechRealTimeTranscriptionConstants["LAN_ZH_CN"] = "zh-CN";
    MLSpeechRealTimeTranscriptionConstants["RESULTS_PARTIALFINAL"] = "RESULTS_PARTIALFINAL";
    MLSpeechRealTimeTranscriptionConstants["RESULTS_RECOGNIZING"] = "results_recognizing";
    MLSpeechRealTimeTranscriptionConstants["RESULTS_SENTENCE_OFFSET"] = "RESULTS_SENTENCE_OFFSET";
    MLSpeechRealTimeTranscriptionConstants["RESULTS_WORD_OFFSET"] = "RESULTS_WORD_OFFSET";
    MLSpeechRealTimeTranscriptionConstants["SCENES_SHOPPING"] = "shopping";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["STATE_SERVICE_RECONNECTED"] = 43] = "STATE_SERVICE_RECONNECTED";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["STATE_SERVICE_RECONNECTING"] = 42] = "STATE_SERVICE_RECONNECTING";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["STATE_LISTENING"] = 1] = "STATE_LISTENING";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["STATE_NO_NETWORK"] = 7] = "STATE_NO_NETWORK";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["STATE_NO_UNDERSTAND"] = 6] = "STATE_NO_UNDERSTAND";
    MLSpeechRealTimeTranscriptionConstants["WAVE_PAINE_BIT_WIDTH"] = "BIT_WIDTH";
    MLSpeechRealTimeTranscriptionConstants["WAVE_PAINE_CHANNEL_COUNT"] = "CHANNEL_COUNT";
    MLSpeechRealTimeTranscriptionConstants["WAVE_PAINE_ENCODING"] = "ENCODING";
    MLSpeechRealTimeTranscriptionConstants["WAVE_PAINE_SAMPLE_RATE"] = "SAMPLE_RATE";
})(MLSpeechRealTimeTranscriptionConstants || (MLSpeechRealTimeTranscriptionConstants = {}));
export var MLTranslateLanguages;
(function (MLTranslateLanguages) {
    MLTranslateLanguages["AFRIKAANS"] = "af";
    MLTranslateLanguages["ARABIC"] = "ar";
    MLTranslateLanguages["BULGARIAN"] = "bg";
    MLTranslateLanguages["BURMESE"] = "my";
    MLTranslateLanguages["CROATIAN"] = "hr";
    MLTranslateLanguages["CZECH"] = "cs";
    MLTranslateLanguages["CHINESE"] = "zh";
    MLTranslateLanguages["TRADITIONAL_CHINESE"] = "zh-hk";
    MLTranslateLanguages["DANISH"] = "da";
    MLTranslateLanguages["DUTCH"] = "nl";
    MLTranslateLanguages["ESTONIAN"] = "et";
    MLTranslateLanguages["ENGLISH"] = "en";
    MLTranslateLanguages["FINNISH"] = "fi";
    MLTranslateLanguages["FRENCH"] = "fr";
    MLTranslateLanguages["GERMAN"] = "de";
    MLTranslateLanguages["GUJARATI"] = "gu";
    MLTranslateLanguages["GREEK"] = "el";
    MLTranslateLanguages["HUNGARIAN"] = "hu";
    MLTranslateLanguages["HINDI"] = "hi";
    MLTranslateLanguages["HEBREW"] = "he";
    MLTranslateLanguages["IRISH"] = "is";
    MLTranslateLanguages["ITALIAN"] = "it";
    MLTranslateLanguages["INDONESIAN"] = "id";
    MLTranslateLanguages["KHMER"] = "km";
    MLTranslateLanguages["KOREAN"] = "ko";
    MLTranslateLanguages["JAPANESE"] = "ja";
    MLTranslateLanguages["LATIN"] = "rm";
    MLTranslateLanguages["LATVIAN"] = "lv";
    MLTranslateLanguages["MALAY"] = "ms";
    MLTranslateLanguages["MARATHI"] = "mr";
    MLTranslateLanguages["NORWEGIAN"] = "no";
    MLTranslateLanguages["PUNJABI"] = "pa";
    MLTranslateLanguages["POLISH"] = "pl";
    MLTranslateLanguages["PORTUGUESE"] = "pt";
    MLTranslateLanguages["PERSIAN"] = "fa";
    MLTranslateLanguages["RUSSIAN"] = "ru";
    MLTranslateLanguages["ROMANIAN"] = "ro";
    MLTranslateLanguages["SERBIAN"] = "sr";
    MLTranslateLanguages["SPANISH"] = "es";
    MLTranslateLanguages["SLOVAK"] = "sk";
    MLTranslateLanguages["SWEDISH"] = "sv";
    MLTranslateLanguages["TAMIL"] = "ta";
    MLTranslateLanguages["TURKISH"] = "tr";
    MLTranslateLanguages["THAI"] = "th";
    MLTranslateLanguages["TAGALOG"] = "tl";
    MLTranslateLanguages["TELUGU"] = "te";
    MLTranslateLanguages["VIETNAMESE"] = "vi";
})(MLTranslateLanguages || (MLTranslateLanguages = {}));
export var MLTtsAudioFragmentConstant;
(function (MLTtsAudioFragmentConstant) {
    MLTtsAudioFragmentConstant[MLTtsAudioFragmentConstant["CHANNEL_OUT_MONO"] = 4] = "CHANNEL_OUT_MONO";
    MLTtsAudioFragmentConstant[MLTtsAudioFragmentConstant["FORMAT_PCM_16BIT"] = 2] = "FORMAT_PCM_16BIT";
    MLTtsAudioFragmentConstant[MLTtsAudioFragmentConstant["FORMAT_PCM_8BIT"] = 1] = "FORMAT_PCM_8BIT";
    MLTtsAudioFragmentConstant[MLTtsAudioFragmentConstant["SAMPLE_RATE_16K"] = 16000] = "SAMPLE_RATE_16K";
})(MLTtsAudioFragmentConstant || (MLTtsAudioFragmentConstant = {}));
export var MLTtsConstants;
(function (MLTtsConstants) {
    MLTtsConstants[MLTtsConstants["EVENT_PLAY_START"] = 1] = "EVENT_PLAY_START";
    MLTtsConstants[MLTtsConstants["EVENT_PLAY_RESUME"] = 2] = "EVENT_PLAY_RESUME";
    MLTtsConstants[MLTtsConstants["EVENT_PLAY_PAUSE"] = 3] = "EVENT_PLAY_PAUSE";
    MLTtsConstants[MLTtsConstants["EVENT_PLAY_STOP"] = 4] = "EVENT_PLAY_STOP";
    MLTtsConstants[MLTtsConstants["EVENT_SYNTHESIS_START"] = 5] = "EVENT_SYNTHESIS_START";
    MLTtsConstants[MLTtsConstants["EVENT_SYNTHESIS_END"] = 6] = "EVENT_SYNTHESIS_END";
    MLTtsConstants[MLTtsConstants["EVENT_SYNTHESIS_COMPLETE"] = 7] = "EVENT_SYNTHESIS_COMPLETE";
    MLTtsConstants["EVENT_PLAY_STOP_INTERRUPTED"] = "interrupted";
    MLTtsConstants["EVENT_SYNTHESIS_INTERRUPTED"] = "interrupted";
    MLTtsConstants[MLTtsConstants["LANGUAGE_AVAILABLE"] = 0] = "LANGUAGE_AVAILABLE";
    MLTtsConstants[MLTtsConstants["LANGUAGE_NOT_SUPPORT"] = 1] = "LANGUAGE_NOT_SUPPORT";
    MLTtsConstants[MLTtsConstants["LANGUAGE_UPDATING"] = 2] = "LANGUAGE_UPDATING";
    MLTtsConstants["TTS_EN_US"] = "en-US";
    MLTtsConstants["TTS_LAN_AR_AR"] = "ar-AR";
    MLTtsConstants["TTS_LAN_TR_TR"] = "tr-TR";
    MLTtsConstants["TTS_SPEAKER_FEMALE_AR"] = "ar-AR-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_TR"] = "tr-TR-st-1";
    MLTtsConstants["TTS_LAN_ES_ES"] = "es-ES";
    MLTtsConstants["TTS_LAN_FR_FR"] = "fr-FR";
    MLTtsConstants["TTS_LAN_DE_DE"] = "de-DE";
    MLTtsConstants["TTS_LAN_IT_IT"] = "it-IT";
    MLTtsConstants["TTS_LAN_RU_RU"] = "ru-RU";
    MLTtsConstants["TTS_LAN_PL_PL"] = "pl-PL";
    MLTtsConstants["TTS_LAN_TH_TH"] = " th-TH";
    MLTtsConstants["TTS_LAN_MS_MS"] = "ms-MS";
    MLTtsConstants["TTS_ZH_HANS"] = "zh-Hans";
    MLTtsConstants["TTS_SPEAKER_FEMALE_EN"] = "Female-en";
    MLTtsConstants["TTS_SPEAKER_FEMALE_ZH"] = "Female-zh";
    MLTtsConstants["TTS_SPEAKER_MALE_EN"] = "Male-en";
    MLTtsConstants["TTS_SPEAKER_MALE_ZH"] = "Male-zh";
    MLTtsConstants["TTS_SPEAKER_MALE_ZH_2"] = "zh-Hans-st-4";
    MLTtsConstants["TTS_SPEAKER_FEMALE_ZH_2"] = "zh-Hans-st-3";
    MLTtsConstants["TTS_SPEAKER_MALE_EN_2"] = "en-US-st-4";
    MLTtsConstants["TTS_SPEAKER_FEMALE_EN_2"] = "en-US-st-3";
    MLTtsConstants["TTS_SPEAKER_FEMALE_DE"] = "de-DE-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_ES"] = "it-IT-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_IT"] = "es-ES-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_FR"] = "fr-FR-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_RU"] = "ru-RU-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_PL"] = "pl-PL-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_TH"] = "th-TH-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_MS"] = "ms-MS-st-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_EN_US_MALE_BOLT"] = "en-US-st-bolt-2";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_ZH_HANS_FEMALE_EAGLE"] = "zh-Hans-st-eagle-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_ZH_HANS_MALE_EAGLE"] = "zh-Hans-st-eagle-2";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_EN_US_FEMALE_EAGLE"] = "en-US-st-eagle-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_EN_US_MALE_EAGLE"] = "en-US-st-eagle-2";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_EN_US_FEMALE_BEE"] = "en-US-st-bee-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_FR_FR_FEMALE_BEE"] = "fr-FR-st-bee-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_ES_ES_FEMALE_BEE"] = "es-ES-st-bee-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_DE_DE_FEMALE_BEE"] = "de-DE-st-bee-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_IT_IT_FEMALE_BEE"] = "it-IT-st-bee-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_ZH_HANS_FEMALE_BOLT"] = "zh-Hans-st-bolt-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_ZH_HANS_MALE_BOLT"] = "zh-Hans-st-bolt-2";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_EN_US_FEMALE_BOLT"] = "en-US-st-bolt-1";
    MLTtsConstants["TTS_ONLINE_MODE"] = "online";
    MLTtsConstants["TTS_OFFLINE_MODE"] = "offline";
    MLTtsConstants[MLTtsConstants["QUEUE_APPEND"] = 0] = "QUEUE_APPEND";
    MLTtsConstants[MLTtsConstants["QUEUE_FLUSH"] = 1] = "QUEUE_FLUSH";
    MLTtsConstants[MLTtsConstants["EXTERNAL_PLAYBACK"] = 2] = "EXTERNAL_PLAYBACK";
    MLTtsConstants[MLTtsConstants["OPEN_STREAM"] = 4] = "OPEN_STREAM";
})(MLTtsConstants || (MLTtsConstants = {}));
export var Colors;
(function (Colors) {
    Colors[Colors["RED"] = -65536] = "RED";
    Colors[Colors["DKGRAY"] = -12303292] = "DKGRAY";
    Colors[Colors["GRAY"] = -7829368] = "GRAY";
    Colors[Colors["WHITE"] = -1] = "WHITE";
    Colors[Colors["BLUE"] = -16776961] = "BLUE";
    Colors[Colors["BLACK"] = -16777216] = "BLACK";
    Colors[Colors["LTGRAY"] = -3355444] = "LTGRAY";
    Colors[Colors["MAGENTA"] = -65281] = "MAGENTA";
    Colors[Colors["YELLOW"] = -256] = "YELLOW";
    Colors[Colors["CYAN"] = -16711681] = "CYAN";
    Colors[Colors["GREEN"] = -16711936] = "GREEN";
    Colors[Colors["TRANSPARENT"] = 0] = "TRANSPARENT";
})(Colors || (Colors = {}));
export var RectStyle;
(function (RectStyle) {
    RectStyle[RectStyle["STROKE"] = 1] = "STROKE";
    RectStyle[RectStyle["FILL"] = 2] = "FILL";
    RectStyle[RectStyle["FILL_AND_STROKE"] = 3] = "FILL_AND_STROKE";
})(RectStyle || (RectStyle = {}));
export var MLTtsError;
(function (MLTtsError) {
    MLTtsError[MLTtsError["ERR_AUDIO_PLAYER_FAILED"] = 11305] = "ERR_AUDIO_PLAYER_FAILED";
    MLTtsError[MLTtsError["ERR_AUTHORIZE_FAILED"] = 11306] = "ERR_AUTHORIZE_FAILED";
    MLTtsError[MLTtsError["ERR_AUTHORIZE_TOKEN_INVALIDE"] = 11307] = "ERR_AUTHORIZE_TOKEN_INVALIDE";
    MLTtsError[MLTtsError["ERR_ILLEGAL_PARAMETER"] = 11301] = "ERR_ILLEGAL_PARAMETER";
    MLTtsError[MLTtsError["ERR_INSUFFICIENT_BALANCE"] = 11303] = "ERR_INSUFFICIENT_BALANCE";
    MLTtsError[MLTtsError["ERR_INTERNAL"] = 11398] = "ERR_INTERNAL";
    MLTtsError[MLTtsError["ERR_NETCONNECT_FAILED"] = 11302] = "ERR_NETCONNECT_FAILED";
    MLTtsError[MLTtsError["ERR_SPEECH_SYNTHESIS_FAILED"] = 11304] = "ERR_SPEECH_SYNTHESIS_FAILED";
    MLTtsError[MLTtsError["ERR_UNKNOWN"] = 11399] = "ERR_UNKNOWN";
})(MLTtsError || (MLTtsError = {}));
export var MLAftErrorCodes;
(function (MLAftErrorCodes) {
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUDIO_FILE_NOTSUPPORTED"] = 11101] = "ERR_AUDIO_FILE_NOTSUPPORTED";
    MLAftErrorCodes[MLAftErrorCodes["LANGUAGE_CODE_NOTSUPPORTED"] = 11102] = "LANGUAGE_CODE_NOTSUPPORTED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUDIO_FILE_SIZE_OVERFLOW"] = 11103] = "ERR_AUDIO_FILE_SIZE_OVERFLOW";
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUDIO_LENGTH_OVERFLOW"] = 11104] = "ERR_AUDIO_LENGTH_OVERFLOW";
    MLAftErrorCodes[MLAftErrorCodes["ERR_FILE_NOT_FOUND"] = 11105] = "ERR_FILE_NOT_FOUND";
    MLAftErrorCodes[MLAftErrorCodes["ERR_ILLEGAL_PARAMETER"] = 11106] = "ERR_ILLEGAL_PARAMETER";
    MLAftErrorCodes[MLAftErrorCodes["ERR_ENGINE_BUSY"] = 11107] = "ERR_ENGINE_BUSY";
    MLAftErrorCodes[MLAftErrorCodes["ERR_NETCONNECT_FAILED"] = 11108] = "ERR_NETCONNECT_FAILED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_RESULT_WHEN_UPLOADING"] = 11109] = "ERR_RESULT_WHEN_UPLOADING";
    MLAftErrorCodes[MLAftErrorCodes["ERR_TASK_NOT_EXISTED"] = 11110] = "ERR_TASK_NOT_EXISTED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUDIO_TRANSCRIPT_FAILED"] = 11111] = "ERR_AUDIO_TRANSCRIPT_FAILED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUDIO_INIT_FAILED"] = 11112] = "ERR_AUDIO_INIT_FAILED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUDIO_UPLOAD_FAILED"] = 11113] = "ERR_AUDIO_UPLOAD_FAILED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_TASK_ALREADY_INPROGRESS"] = 11114] = "ERR_TASK_ALREADY_INPROGRESS";
    MLAftErrorCodes[MLAftErrorCodes["ERR_NO_ENOUGH_STORAGE"] = 11115] = "ERR_NO_ENOUGH_STORAGE";
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUTHORIZE_FAILED"] = 11119] = "ERR_AUTHORIZE_FAILED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_SERVICE_CREDIT"] = 11122] = "ERR_SERVICE_CREDIT";
    MLAftErrorCodes[MLAftErrorCodes["ERR_SERVICE_UNSUBSCRIBED"] = 11123] = "ERR_SERVICE_UNSUBSCRIBED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_SERVICE_FREE_USED_UP"] = 11124] = "ERR_SERVICE_FREE_USED_UP";
    MLAftErrorCodes[MLAftErrorCodes["ERR_INTERNAL"] = 11198] = "ERR_INTERNAL";
    MLAftErrorCodes[MLAftErrorCodes["ERR_UNKNOWN"] = 11199] = "ERR_UNKNOWN";
})(MLAftErrorCodes || (MLAftErrorCodes = {}));
export var MLAFTEventCodes;
(function (MLAFTEventCodes) {
    MLAFTEventCodes[MLAFTEventCodes["PAUSE_EVENT"] = 2] = "PAUSE_EVENT";
    MLAFTEventCodes[MLAFTEventCodes["STOP_EVENT"] = 3] = "STOP_EVENT";
    MLAFTEventCodes[MLAFTEventCodes["UPLOADED_EVENT"] = 1] = "UPLOADED_EVENT";
})(MLAFTEventCodes || (MLAFTEventCodes = {}));
export var MLAftConstants;
(function (MLAftConstants) {
    MLAftConstants["LANGUAGE_ZH"] = "zh";
    MLAftConstants["LANGUAGE_EN_US"] = "en-US";
})(MLAftConstants || (MLAftConstants = {}));
export var MLSoundDectSoundTypeResult;
(function (MLSoundDectSoundTypeResult) {
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_DECT_ERROR_NO_MEM"] = 12201] = "SOUND_DECT_ERROR_NO_MEM";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_DECT_ERROR_FATAL_ERROR"] = 12202] = "SOUND_DECT_ERROR_FATAL_ERROR";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_DECT_ERROR_AUDIO"] = 12203] = "SOUND_DECT_ERROR_AUDIO";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_DECT_ERROR_INTERNAL"] = 12298] = "SOUND_DECT_ERROR_INTERNAL";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_LAUGHTER"] = 0] = "SOUND_EVENT_TYPE_LAUGHTER";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_BABY_CRY"] = 1] = "SOUND_EVENT_TYPE_BABY_CRY";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_SNORING"] = 2] = "SOUND_EVENT_TYPE_SNORING";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_SNEEZE"] = 3] = "SOUND_EVENT_TYPE_SNEEZE";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_SCREAMING"] = 4] = "SOUND_EVENT_TYPE_SCREAMING";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_MEOW"] = 5] = "SOUND_EVENT_TYPE_MEOW";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_BARK"] = 6] = "SOUND_EVENT_TYPE_BARK";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_WATER"] = 7] = "SOUND_EVENT_TYPE_WATER";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_CAR_ALARM"] = 8] = "SOUND_EVENT_TYPE_CAR_ALARM";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_DOOR_BELL"] = 9] = "SOUND_EVENT_TYPE_DOOR_BELL";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_KNOCK"] = 10] = "SOUND_EVENT_TYPE_KNOCK";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_ALARM"] = 11] = "SOUND_EVENT_TYPE_ALARM";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_STEAM_WHISTLE"] = 12] = "SOUND_EVENT_TYPE_STEAM_WHISTLE";
})(MLSoundDectSoundTypeResult || (MLSoundDectSoundTypeResult = {}));
export var CordovaErrors;
(function (CordovaErrors) {
    CordovaErrors[CordovaErrors["UNKNOWN"] = -1] = "UNKNOWN";
    CordovaErrors[CordovaErrors["SUCCESS"] = 0] = "SUCCESS";
    CordovaErrors[CordovaErrors["DISCARDED"] = 1] = "DISCARDED";
    CordovaErrors[CordovaErrors["INNER"] = 2] = "INNER";
    CordovaErrors[CordovaErrors["INACTIVE"] = 3] = "INACTIVE";
    CordovaErrors[CordovaErrors["NOT_SUPPORTED"] = 4] = "NOT_SUPPORTED";
    CordovaErrors[CordovaErrors["ILLEGAL_PARAMETER"] = 5] = "ILLEGAL_PARAMETER";
    CordovaErrors[CordovaErrors["OVERDUE"] = 6] = "OVERDUE";
    CordovaErrors[CordovaErrors["NO_FOUND"] = 7] = "NO_FOUND";
    CordovaErrors[CordovaErrors["DUPLICATE_FOUND"] = 8] = "DUPLICATE_FOUND";
    CordovaErrors[CordovaErrors["NO_PERMISSION"] = 9] = "NO_PERMISSION";
    CordovaErrors[CordovaErrors["INSUFFICIENT_RESOURCE"] = 10] = "INSUFFICIENT_RESOURCE";
    CordovaErrors[CordovaErrors["ANALYSIS_FAILURE"] = 11] = "ANALYSIS_FAILURE";
    CordovaErrors[CordovaErrors["INTERRUPTED"] = 12] = "INTERRUPTED";
    CordovaErrors[CordovaErrors["EXCEED_RANGE"] = 13] = "EXCEED_RANGE";
    CordovaErrors[CordovaErrors["DATA_MISSING"] = 14] = "DATA_MISSING";
    CordovaErrors[CordovaErrors["AUTHENTICATION_REQUIRED"] = 15] = "AUTHENTICATION_REQUIRED";
    CordovaErrors[CordovaErrors["TFLITE_NOT_COMPATIBLE"] = 16] = "TFLITE_NOT_COMPATIBLE";
    CordovaErrors[CordovaErrors["INSUFFICIENT_SPACE"] = 17] = "INSUFFICIENT_SPACE";
    CordovaErrors[CordovaErrors["HASH_MISS"] = 18] = "HASH_MISS";
    CordovaErrors[CordovaErrors["TOKEN_INVALID"] = 19] = "TOKEN_INVALID";
    CordovaErrors[CordovaErrors["SERVICE_FAILURE"] = 20] = "SERVICE_FAILURE";
    CordovaErrors[CordovaErrors["ANALYSIS_NULL"] = 21] = "ANALYSIS_NULL";
})(CordovaErrors || (CordovaErrors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7O0FBRUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHNFQUF1RCxNQUFNLG9CQUFvQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBU0QsK0JBQWlCOzs7O0lBZ0I5Qzs7OztPQUlHO0lBQ0gsd0NBQWtCLGFBQUMsTUFBaUI7SUFLcEM7Ozs7T0FJRztJQUNILGdDQUFVLGFBQUMsYUFBNEI7SUFLdkM7Ozs7Ozs7OztPQVNHO0lBQ0gsbUNBQWEsYUFBQyxNQUFjO0lBSzVCOzs7T0FHRztJQUNILG9DQUFjO0lBS2Q7OztPQUdHO0lBQ0gsa0NBQVk7SUFLWjs7O09BR0c7SUFDSCxtQ0FBYTswQkF2RWIsZ0NBQU87Ozs7OzswQkFFUCxpQ0FBUTs7Ozs7OzBCQUVSLHVDQUFjOzs7Ozs7MEJBRWQsK0JBQU07Ozs7OzswQkFFTixrQ0FBUzs7Ozs7OzBCQUVULHVDQUFjOzs7Ozs7MEJBRWQsb0NBQVc7Ozs7Ozs7Ozs7O2dCQWZkLFVBQVU7O3NCQTFCWDtFQTJCaUMsaUJBQWlCO1NBQXJDLFdBQVc7O0lBcUZXLGlDQUFpQjs7OztJQWlCaEQ7OztPQUdHO0lBQ0gsNkNBQXFCLGFBQ2pCLHFCQUFpRDtJQUtyRDs7O09BR0c7SUFDSCwyQ0FBbUIsYUFDZixxQkFBaUQ7SUFNckQ7Ozs7T0FJRztJQUNILHdDQUFnQixhQUFDLGtCQUFzQztJQUl2RDs7OztPQUlHO0lBQ0gsdUNBQWUsYUFBQyxpQkFBb0M7SUFJcEQ7Ozs7T0FJRztJQUNILDhDQUFzQixhQUFDLGVBQWdDO0lBSXZEOzs7O09BSUc7SUFDSCwrQ0FBdUIsYUFBQyxnQkFBa0M7SUFJ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RUFBcUIsQ0FBQTtJQUNyQix1REFBVyxDQUFBO0lBQ1gseURBQVksQ0FBQTtJQUNaLHVFQUFtQixDQUFBO0lBQ25CLG1FQUFpQixDQUFBO0lBQ2pCLG9GQUEwQixDQUFBO0lBQzFCLDBFQUFxQixDQUFBO0lBQ3JCLGdFQUFnQixDQUFBO0lBQ2hCLGtFQUFpQixDQUFBO0lBQ2pCLGtFQUFpQixDQUFBO0lBQ2pCLHdGQUE0QixDQUFBO0lBQzVCLG9GQUEwQixDQUFBO0lBQzFCLDhFQUF1QixDQUFBO0lBQ3ZCLDREQUFjLENBQUE7SUFDZCxvRUFBa0IsQ0FBQTtJQUNsQix3RUFBb0IsQ0FBQTtJQUNwQixvRUFBa0IsQ0FBQTtBQUN0QixDQUFDLEVBeEJXLGFBQWEsS0FBYixhQUFhLFFBd0J4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQ29weXJpZ2h0IDIwMjMuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5cbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tIFwiQGlvbmljLW5hdGl2ZS9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogXCJITVNNTFBsdWdpblwiLFxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtbWxsYW5ndWFnZVwiLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgICBwbHVnaW5SZWY6IFwiSE1TTUxQbHVnaW5cIiwgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU01MUGx1Z2luIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIEZFQVRVUkUgPSBGRUFUVVJFO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIExBTkdVQUdFID0gTEFOR1VBR0U7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxUdHNDb25zdGFudHMgPSBNTFR0c0NvbnN0YW50cztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBDb2xvcnMgPSBDb2xvcnM7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgUmVjdFN0eWxlID0gUmVjdFN0eWxlO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MUnR0TGFuZ3VhZ2VzID0gTUxSdHRMYW5ndWFnZXM7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxSdHRTY2VuZXMgPSBNTFJ0dFNjZW5lcztcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIEl0IHNldHMgQXBpIEtleSBvciBhY2Nlc3MgdG9rZW4gZm9yIGFwcGxpY2F0aW9uLlxuICAgICAqIEBwYXJhbSAge2NvbmZpZ1JlcX0gcGFyYW1zIFJlcHJlc2VudHMgeW91ciBBUElfS0VZLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHNlcnZpY2VJbml0aWFsaXplcihwYXJhbXM6IGNvbmZpZ1JlcSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIEFuIGFwcCBpbmZvcm1hdGlvbiBjbGFzcyB1c2VkIHRvIHN0b3JlIGJhc2ljIGluZm9ybWF0aW9uIGFib3V0IGFwcHMgd2l0aCB0aGUgSE1TIENvcmUgTUwgU0RLIGludGVncmF0ZWQgYW5kIGNvbXBsZXRlIHRoZSBpbml0aWFsaXphdGlvbiBvZiBNTCBLaXQuIFdoZW4gdXNpbmcgY2xvdWQgc2VydmljZXMgb2YgdGhlIE1MIEtpdCwgeW91IG5lZWQgdG8gc2V0IHRoZSBhcGlLZXkgb2YgeW91ciBhcHAuXG4gICAgICogQHBhcmFtICB7YXBwU2V0dGluZ1JlcX0gYXBwU2V0dGluZ1JlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgYXBwU2V0dGluZyhhcHBTZXR0aW5nUmVxOiBhcHBTZXR0aW5nUmVxKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogU2V0cyBhIGRhdGEgcHJvY2Vzc2luZyBsb2NhdGlvbiB3aGVuIHlvdSBjaG9vc2UgdG8gbWFudWFsbHkgbWFuYWdlIGFuZCBzcGVjaWZ5IHN1Y2ggYSBsb2NhdGlvbi5cbiAgICAgKiBAcGFyYW0gIHtyZWdpb259IHJlZ2lvbiBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIuXG4gICAgICogICAgICAgICAqIFJFR0lPTl9EUl9VTktOT1dOID0gMTAwMSxcbiAgICAgICAgICAgICAgICogUkVHSU9OX0RSX0NISU5BID0gMTAwMixcbiAgICAgICAgICAgICAgICogUkVHSU9OX0RSX1JVU1NJQSA9IDEwMDUsXG4gICAgICAgICAgICAgICAqIFJFR0lPTl9EUl9HRVJNQU4gPSAxMDA2LFxuICAgICAgICAgICAgICAgKiBSRUdJT05fRFJfU0lOR0FQT1JFID0gMTAwNyBcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBzZXRVc2VyUmVnaW9uKHJlZ2lvbjogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogT2J0YWlucyB0aGUgY291bnRyeS9yZWdpb24gY29kZSBvZiB0aGUgZGF0YSBwcm9jZXNzaW5nIGxvY2F0aW9uIHlvdSBoYXZlIHNwZWNpZmllZCB3aGVuIHlvdSBjaG9vc2UgdG8gbWFudWFsbHkgbWFuYWdlIGFuZCBzcGVjaWZ5IHN1Y2ggYSBsb2NhdGlvbi5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPFN0cmluZz5cbiAgICAgKi9cbiAgICBnZXRDb3VudHJ5Q29kZSgpOiBQcm9taXNlPFN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIHNlcnZpY2UgZW5hYmxlIGxvZ2dlciBzZXJ2aWNlLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGVuYWJsZUxvZ2dlcigpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIHNlcnZpY2UgZGlzYWJsZSBsb2dnZXIgc2VydmljZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBkaXNhYmxlTG9nZ2VyKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6IFwiSE1TTUxMYW5ndWFnZVwiLFxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtbWxsYW5ndWFnZVwiLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgICBwbHVnaW5SZWY6IFwiSE1TTUxMYW5ndWFnZVwiLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLCAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TTUxMYW5ndWFnZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBGRUFUVVJFID0gRkVBVFVSRTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBMQU5HVUFHRSA9IExBTkdVQUdFO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MVHRzQ29uc3RhbnRzID0gTUxUdHNDb25zdGFudHM7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgQ29sb3JzID0gQ29sb3JzO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIFJlY3RTdHlsZSA9IFJlY3RTdHlsZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFJ0dExhbmd1YWdlcyA9IE1MUnR0TGFuZ3VhZ2VzO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MUnR0U2NlbmVzID0gTUxSdHRTY2VuZXM7XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSAge3N5bmNQcm9iYWJpbGl0eURldGVjdH0gc3luY1JlcXVlc3RMb2NhbExhbmdEZXRlY3QgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8TUxSZW1vdGVMYW5nRGV0ZWN0aW9uPlxuICAgICAqL1xuICAgIHN5bmNQcm9iYWJpbGl0eURldGVjdChcbiAgICAgICAgc3luY1Byb2JhYmlsaXR5RGV0ZWN0OiBzeW5jUmVxdWVzdExvY2FsTGFuZ0RldGVjdFxuICAgICk6IFByb21pc2U8TUxSZW1vdGVMYW5nRGV0ZWN0aW9uPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gIHtzeW5jUHJvYmFiaWxpdHlEZXRlY3R9IHN5bmNQcm9iYWJpbGl0eURldGVjdCBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxTdHJpbmc+XG4gICAgICovXG4gICAgc3luY0ZpcnN0QmVzdERldGVjdChcbiAgICAgICAgc3luY1Byb2JhYmlsaXR5RGV0ZWN0OiBzeW5jUmVxdWVzdExvY2FsTGFuZ0RldGVjdFxuICAgICk6IFByb21pc2U8U3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIEltcGxlbWVudHMgb24tY2xvdWQgdGV4dCB0cmFuc2xhdGlvbi5cbiAgICAgKiBAcGFyYW0gIHtyZW1vdGV0cmFuc2xhdGVSZXF9IHJlbW90ZXRyYW5zbGF0ZVJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIHRyYW5zbGF0ZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICByZW1vdGVUcmFuc2xhdG9yKHJlbW90ZXRyYW5zbGF0ZVJlcTogcmVtb3RldHJhbnNsYXRlUmVxKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIEltcGxlbWVudHMgb24tY2xvdWQgdGV4dCB0cmFuc2xhdGlvbi5cbiAgICAgKiBAcGFyYW0gIHtsb2NhbHRyYW5zbGF0ZVJlcX0gbG9jYWx0cmFuc2xhdGVSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciB0cmFuc2xhdGUuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgbG9jYWxUcmFuc2xhdG9yKGxvY2FsdHJhbnNsYXRlUmVxOiBsb2NhbHRyYW5zbGF0ZVJlcSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBPYnRhaW5zIGFsbCBsYW5ndWFnZXMgc3VwcG9ydGVkIGZvciBsb2NhbCB0cmFuc2xhdGlvbi5cbiAgICAgKiBAcGFyYW0gIHtsb2NhbEFsbExhbmdSZXF9IGxvY2FsQWxsTGFuZ1JlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIHRyYW5zbGF0ZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICB0cmFuc2xhdG9yTG9jYWxBbGxMYW5nKGxvY2FsQWxsTGFuZ1JlcTogbG9jYWxBbGxMYW5nUmVxKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIE9idGFpbnMgYWxsIGxhbmd1YWdlcyBzdXBwb3J0ZWQgZm9yIG9uLWNsb3VkIHRyYW5zbGF0aW9uLlxuICAgICAqIEBwYXJhbSAge3JlbW90ZUFsbExhbmdSZXF9IHJlbW90ZUFsbExhbmdSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciB0cmFuc2xhdGUuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgdHJhbnNsYXRvclJlbW90ZUFsbExhbmcocmVtb3RlQWxsTGFuZ1JlcTogcmVtb3RlQWxsTGFuZ1JlcSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBEZXRlY3RzIGxhbmd1YWdlcyBvbiB0aGUgY2xvdWQuXG4gICAgICogQHBhcmFtICB7cmVtb3RlTGFuZ0RldGVjdGlvblJlcX0gcmVtb3RlTGFuZ0RldGVjdGlvblJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIGxhbmcgZGV0ZWN0aW9uLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8UmVtb3RlTGFuZ0RldGVjdGlvbkFuYWx5c2VyPiB8IFByb21pc2U8bGFuZ0RldGVjdGlvbldpdGhGaXJzdERldGVjdD5cbiAgICAgKi9cbiAgICByZW1vdGVMYW5nRGV0ZWN0aW9uKFxuICAgICAgICByZW1vdGVMYW5nRGV0ZWN0aW9uUmVxOiByZW1vdGVMYW5nRGV0ZWN0aW9uUmVxXG4gICAgKTogUHJvbWlzZTxNTFJlbW90ZUxhbmdEZXRlY3Rpb24gfCBNTGxhbmdEZXRlY3Rpb25XaXRoRmlyc3REZXRlY3Q+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIERldGVjdHMgbGFuZ3VhZ2VzIG9uIGxvY2FsLlxuICAgICAqIEBwYXJhbSAge2xvY2FsTGFuZ0RldGVjdGlvblJlcX0gbG9jYWxMYW5nRGV0ZWN0aW9uUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgbGFuZyBkZXRlY3Rpb24uXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IHwgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgbG9jYWxMYW5nRGV0ZWN0aW9uKFxuICAgICAgICBsb2NhbExhbmdEZXRlY3Rpb25SZXE6IGxvY2FsTGFuZ0RldGVjdGlvblJlcVxuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcblxuICAgIC8qKlxuICAgICAqIERvd25sb2FkIGxhbmd1YWdlIG1vZGVsLlxuICAgICAqIEBwYXJhbSAge2Rvd25sb2FkVHJhbnNsYXRlUmVxfSBkb3dubG9hZFRyYW5zbGF0ZVJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIGRvd25sb2FkIG1vZGVsLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHRyYW5zbGF0b3JEb3dubG9hZE1vZGVsKFxuICAgICAgICBkb3dubG9hZFRyYW5zbGF0ZVJlcTogZG93bmxvYWRUcmFuc2xhdGVSZXFcbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogRm9yIGRlbGV0ZSBsYW5ndWFnZSBtb2RlbC5cbiAgICAgKiBAcGFyYW0gIHtkZWxldGVUcmFuc2xhdGVSZXF9IGRlbGV0ZVRyYW5zbGF0ZVJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIGRlbGV0ZSBtb2RlbC5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICB0cmFuc2xhdG9yRGVsZXRlTW9kZWwoXG4gICAgICAgIGRlbGV0ZVRyYW5zbGF0ZVJlcTogZGVsZXRlVHJhbnNsYXRlUmVxXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3AgdHJhbnNsYXRvciBzZXJ2aWNlLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHN0b3BUcmFuc2xhdG9yU2VydmljZSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJuIFJUVCBzZXR0aW5nLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGdldFJUVFNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHJldHVybnMgVFRTIHNldHRpbmcuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZ2V0VFRTU2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJucyBBRlQgc2V0dGluZy5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBnZXRBRlRTZXR0aW5nKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIExhbmcgRGV0ZWN0aW9uIHNldHRpbmcuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZ2V0TGFuZ0RldGVjdGlvblNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3AgbGFuZyBkZXRlY3Rpb24gc2VydmljZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBzdG9wTGFuZ0RldGVjdGlvblNlcnZpY2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoZSBzb3VuZCBkZXRlY3Rpb24gc2VydmljZSBjYW4gZGV0ZWN0IHNvdW5kIGV2ZW50cyBpbiBvbmxpbmUgKHJlYWwtdGltZSByZWNvcmRpbmcpIG1vZGUuIFRoZSBkZXRlY3RlZCBzb3VuZCBldmVudHMgY2FuIGhlbHAgeW91IHBlcmZvcm0gc3Vic2VxdWVudCBhY3Rpb25zLlxuICAgICAqIEBwYXJhbSAge3NvdW5kRGVjdFJlcX0gc291bmREZWN0UmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgU291bmQgRGV0ZWN0aW9uIGFuYWx5c2VyLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHNvdW5kRGVjdEFuYWx5c2VyKHNvdW5kRGVjdFJlcTogc291bmREZWN0UmVxKTogUHJvbWlzZTxNTFNvdW5kRGVjdFJlc3VsdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVFRTIGNhbiBjb252ZXJ0IHRleHQgaW5mb3JtYXRpb24gaW50byBhdWRpbyBvdXRwdXQuIFJpY2ggdGltYnJlcywgYW5kIHZvbHVtZSBhbmQgc3BlZWQgb3B0aW9ucyBhcmUgc3VwcG9ydGVkIHRvIHByb2R1Y2UgbW9yZSBuYXR1cmFsIHNvdW5kcy5cbiAgICAgKiBAcGFyYW0gIHt0dHNSZXF9IHR0c1JlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIHRleHQgdG8gc3BlZWNoLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8VHRzQW5hbHlzZXI+XG4gICAgICovXG4gICAgdHRzQW5hbHlzZXIodHRzUmVxOiB0dHNSZXEpOiBQcm9taXNlPE1MVHRzUmVzdWx0PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUVFMgY2FuIGNvbnZlcnQgdGV4dCBpbmZvcm1hdGlvbiBpbnRvIGF1ZGlvIG91dHB1dCBvZmZsaW5lLiBSaWNoIHRpbWJyZXMsIGFuZCB2b2x1bWUgYW5kIHNwZWVkIG9wdGlvbnMgYXJlIHN1cHBvcnRlZCB0byBwcm9kdWNlIG1vcmUgbmF0dXJhbCBzb3VuZHMuXG4gICAgICogQHBhcmFtICB7dHRzUmVxfSB0dHNSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciB0ZXh0IHRvIHNwZWVjaC5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPFR0c0FuYWx5c2VyPlxuICAgICAqL1xuICAgIHR0c09mZmxpbmVBbmFseXNlcih0dHNSZXE6IHR0c1JlcSk6IFByb21pc2U8TUxUdHNSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgc2VydmljZSBzdG9wIHRleHQgdG8gc3BlZWNoIChUVFMpIHNlcnZpY2UuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgdHRzQW5hbHlzZXJTdG9wKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIHNlcnZpY2UgcGF1c2VzIHRleHQgdG8gc3BlZWNoIChUVFMpIGFuYWx5c2VyLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHR0c0FuYWx5c2VyUGF1c2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgc2VydmljZSBjb250aW51ZXMgdGV4dCB0byBzcGVlY2ggKFRUUykgYW5hbHlzZXIuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgdHRzQW5hbHlzZXJSZXN1bWUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgc2VydmljZSBzaHV0ZG93biB0ZXh0IHRvIHNwZWVjaCAoVFRTKSBhbmFseXNlci5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICB0dHNBbmFseXNlcnNodXREb3duKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIFRUUyBEb3dubG9hZCBzZXR0aW5nLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHR0c0FuYWx5c2VyRG93bmxvYWRTZXR0aW5nKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIHNlcnZpY2UgY2xvc2UgQUZUIGFuYWx5c2VyLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGFmdEFuYWx5c2VyQ2xvc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgc2VydmljZSBzdG9wIEFGVCBhbmFseXNlci5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBhc3JBbmFseXNlclN0b3AoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgc2VydmljZSBkZXN0cm95IEFGVCBhbmFseXNlci5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBhZnRBbmFseXNlckRlc3Ryb3koKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgc2VydmljZSBwYXVzZSBBRlQgYW5hbHlzZXIuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgYWZ0QW5hbHlzZXJQYXVzZSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBzZXJ2aWNlIGRlc3Ryb3kgU291bmQgRGV0ZWN0aW9uIGFuYWx5c2VyLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHNvdW5kRGVjdEFuYWx5c2VyRGVzdHJveSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhlIGF1ZGlvIGZpbGUgdHJhbnNjcmlwdGlvbiBzZXJ2aWNlIGNhbiBjb252ZXJ0IGFuIGF1ZGlvIGZpbGUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIDYwIHNlY29uZHMgaW50byBhIHRleHQgZmlsZS4gQ3VycmVudGx5LCBDaGluZXNlIGFuZCBFbmdsaXNoIGFyZSBzdXBwb3J0ZWQuXG4gICAgICogQHBhcmFtICB7YWZ0UmVxfSBhZnRSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBhZnQgYW5hbHlzZXIuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxBZnRBbmFseXNlcj5cbiAgICAgKi9cbiAgICBhZnRBbmFseXNlcihhZnRSZXE6IGFmdFJlcSk6IFByb21pc2U8TUxBZnRSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBU1IgY2FuIHJlY29nbml6ZSBzcGVlY2ggbm90IGxvbmdlciB0aGFuIDYwcyBhbmQgY29udmVydCB0aGUgaW5wdXQgc3BlZWNoIGludG8gdGV4dCBpbiByZWFsIHRpbWUuXG4gICAgICogQHBhcmFtICB7YXNyUmVxfSBhc3JSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBhc3IgYW5hbHlzZXIuXG4gICAgICogQHBhcmFtICB7YW55fSBzdWNjZXNzIEEgY2FsbGJhY2sgZnVuY3Rpb24uIEl0IGlzIGNhbGxlZCB3aGVuIGZ1bmN0aW9uIGlzIGV4ZWN1dGVkIHN1Y2Nlc3NmdWxseS4gSXQgcmV0dXJucyB0aGUgcmVzdWx0cyBvZiB0ZXh0LlxuICAgICAqIEBwYXJhbSAge2FueX0gZXJyb3IgQSBjYWxsYmFjayBmdW5jdGlvbi4gSXQgaXMgY2FsbGVkIHdoZW4gZnVuY3Rpb24gaXMgZmFpbGVkLlxuICAgICAqIEByZXR1cm5zIGNhbGxiYWNrXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgYXNyQW5hbHlzZXIoYXNyUmVxOiBhc3JSZXEpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlYWwtdGltZSB0cmFuc2NyaXB0aW9uIGVuYWJsZXMgeW91ciBhcHAgdG8gY29udmVydCBsb25nIHNwZWVjaCAobm8gbG9uZ2VyIHRoYW4gNSBob3VycykgaW50byB0ZXh0IGluIHJlYWwgdGltZS4gVGhlIGdlbmVyYXRlZCB0ZXh0IGNvbnRhaW5zIHB1bmN0dWF0aW9uIG1hcmtzIGFuZCB0aW1lc3RhbXBzLlxuICAgICAqIEBwYXJhbSAge3J0dFJlcX0gcnR0UmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgcnR0IGFuYWx5c2VyLlxuICAgICAqIEBwYXJhbSAge2FueX0gc3VjY2VzcyBBIGNhbGxiYWNrIGZ1bmN0aW9uLiBJdCBpcyBjYWxsZWQgd2hlbiBmdW5jdGlvbiBpcyBleGVjdXRlZCBzdWNjZXNzZnVsbHkuIEl0IHJldHVybnMgdGhlIHJlc3VsdHMgb2YgdGV4dC5cbiAgICAgKiBAcGFyYW0gIHthbnl9IGVycm9yIEEgY2FsbGJhY2sgZnVuY3Rpb24uIEl0IGlzIGNhbGxlZCB3aGVuIGZ1bmN0aW9uIGlzIGZhaWxlZC5cbiAgICAgKiBAcmV0dXJucyBjYWxsYmFja1xuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHJ0dEFuYWx5c2VyU3RhcnQocnR0UmVxOiBydHRSZXEpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3AgUlRUIGFuYWx5c2VyXG4gICAgICogQHBhcmFtICB7YW55fSBzdWNjZXNzIEEgY2FsbGJhY2sgZnVuY3Rpb24uIEl0IGlzIGNhbGxlZCB3aGVuIGZ1bmN0aW9uIGlzIGV4ZWN1dGVkIHN1Y2Nlc3NmdWxseS4gSXQgcmV0dXJucyB0aGUgcmVzdWx0cyBvZiB0ZXh0LlxuICAgICAqIEBwYXJhbSAge2FueX0gZXJyb3IgQSBjYWxsYmFjayBmdW5jdGlvbi4gSXQgaXMgY2FsbGVkIHdoZW4gZnVuY3Rpb24gaXMgZmFpbGVkLlxuICAgICAqIEByZXR1cm5zIGNhbGxiYWNrXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgcnR0QW5hbHlzZXJTdG9wKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbi8vIEFQSSBLRVlcblxuZXhwb3J0IGludGVyZmFjZSBjb25maWdSZXEge1xuICAgIGFwaUtleTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIGFwcFNldHRpbmdSZXEge1xuICAgIGFwaUtleT86IHN0cmluZyB8IG51bGw7XG4gICAgYXBwbGljYXRpb25JZD86IHN0cmluZyB8IG51bGw7XG4gICAgY2VydEZpbmdlcnByaW50Pzogc3RyaW5nIHwgbnVsbDtcbn1cblxuLy8gQUZUIEFOQUxZU0VSXG5cbmV4cG9ydCBpbnRlcmZhY2UgYWZ0UmVxIHtcbiAgICBhdWRpb1BhdGg6IGFueTtcbiAgICBhZnRTZXR0aW5nPzogQWZ0U2V0dGluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZnRTZXR0aW5nIHtcbiAgICBsYW5ndWFnZUNvZGU/OiBzdHJpbmcgfCBudWxsO1xuICAgIHB1bmN0dWF0aW9uRW5hYmxlZD86IGJvb2xlYW4gfCBudWxsO1xuICAgIHRpbWVPZmZzZXQ/OiBib29sZWFuIHwgbnVsbDtcbiAgICB3b3JkVGltZU9mZnNldEVuYWJsZWQ/OiBib29sZWFuIHwgbnVsbDtcbiAgICBzZW50ZW5jZVRpbWVPZmZzZXRFbmFibGVkPzogYm9vbGVhbiB8IG51bGw7XG59XG5cbi8vIEFTUiBBTkFMWVNFUlxuXG5leHBvcnQgaW50ZXJmYWNlIGFzclJlcSB7XG4gICAgbGFuZ3VhZ2U/OiBMQU5HVUFHRSB8IG51bGw7XG4gICAgZmVhdHVyZT86IEZFQVRVUkUgfCBudWxsO1xufVxuXG5leHBvcnQgZW51bSBNTEFzckNvbnN0YW50cyB7XG4gICAgUFVOQ1RVQVRJT05fRU5BQkxFID0gXCJQVU5DVFVBVElPTl9FTkFCTEVcIixcbiAgICBFUlJfTk9fTkVUV09SSyA9IDExMjAyLFxuICAgIEVSUl9OT19VTkRFUlNUQU5EID0gMTEyMDQsXG4gICAgRVJSX1NFUlZJQ0VfVU5BVkFJTEFCTEUgPSAxMTIwMyxcbiAgICBGRUFUVVJFID0gXCJGRUFUVVJFXCIsXG4gICAgTEFOR1VBR0UgPSBcIkxBTkdVQUdFXCIsXG4gICAgTEFOX0VOX1VTID0gXCJlbi1VU1wiLFxuICAgIExBTl9GUl9GUiA9IFwiZnItRlJcIixcbiAgICBMQU5fWkggPSBcInpoXCIsXG4gICAgTEFOX1pIX0NOID0gXCJ6aC1DTlwiLFxuICAgIExBTl9FU19FUyA9IFwiZXMtRVNcIixcbiAgICBMQU5fREVfREUgPSBcImRlLURFXCIsXG4gICAgTEFOX1JVX1JVID0gXCJydS1SVVwiLFxuICAgIExBTl9JVF9JVCA9IFwiaXQtSVRcIixcbiAgICBMQU5fQVIgPSBcImFyXCIsXG4gICAgTEFOX1RIX1RIID0gXCJ0aF9USFwiLFxuICAgIExBTl9NU19NWSA9IFwibXNfTVlcIixcbiAgICBMQU5fRklMX1BIID0gXCJmaWxfUEhcIixcbiAgICBUdXJraXNoID0gXCJ0ci1UUlwiLFxuICAgIEVSUl9JTlZBTElEQVRFX1RPS0VOID0gMTEyMTksXG4gICAgRkVBVFVSRV9BTExJTk9ORSA9IDEyLFxuICAgIEZFQVRVUkVfV09SREZMVVggPSAxMSxcbiAgICBTQ0VORVMgPSBcInNjZW5lc1wiLFxuICAgIFNDRU5FU19TSE9QUElORyA9IFwic2hvcHBpbmdcIixcbiAgICBTVEFURV9MSVNURU5JTkcgPSAxLFxuICAgIFNUQVRFX05PX05FVFdPUksgPSA3LFxuICAgIFNUQVRFX05PX1NPVU5EID0gMixcbiAgICBTVEFURV9OT19TT1VORF9USU1FU19FWENFRUQgPSAzLFxuICAgIFNUQVRFX05PX1VOREVSU1RBTkQgPSA2LFxuICAgIFNUQVRFX1dBSVRJTkcgPSA5LFxuICAgIEFDVElPTl9ITVNfQVNSX1NQRUVDSCA9IFwiY29tLmh1YXdlaS5obXMubWxzZGsuYWN0aW9uLlJFQ09HTklaRV9TUEVFQ0hcIixcbiAgICBXQVZFX1BBSU5FX0VOQ09ESU5HID0gXCJFTkNPRElOR1wiLFxuICAgIFdBVkVfUEFJTkVfU0FNUExFX1JBVEUgPSBcIlNBTVBMRV9SQVRFXCIsXG4gICAgV0FWRV9QQUlORV9CSVRfV0lEVEggPSBcIkJJVF9XSURUSFwiLFxuICAgIFdBVkVfUEFJTkVfQ0hBTk5FTF9DT1VOVCA9IFwiQ0hBTk5FTF9DT1VOVFwiLFxufVxuXG5leHBvcnQgZW51bSBGRUFUVVJFIHtcbiAgICBGRUFUVVJFX0FMTElOT05FID0gMTIsXG4gICAgRkVBVFVSRV9XT1JERkxVWCA9IDExLFxufVxuXG5leHBvcnQgZW51bSBMQU5HVUFHRSB7XG4gICAgTEFOX0VOX1VTID0gXCJlbi1VU1wiLFxuICAgIExBTl9GUl9GUiA9IFwiZnItRlJcIixcbiAgICBMQU5fWkggPSBcInpoXCIsXG4gICAgTEFOX1pIX0NOID0gXCJ6aC1DTlwiLFxuICAgIExBTl9FU19FUyA9IFwiZXMtRVNcIixcbiAgICBMQU5fREVfREUgPSBcImRlLURFXCIsXG4gICAgTEFOX1JVX1JVID0gXCJydS1SVVwiLFxuICAgIExBTl9JVF9JVCA9IFwiaXQtSVRcIixcbiAgICBMQU5fQVIgPSBcImFyXCIsXG4gICAgTEFOX1RIX1RIID0gXCJ0aF9USFwiLFxuICAgIExBTl9NU19NWSA9IFwibXNfTVlcIixcbiAgICBMQU5fRklMX1BIID0gXCJmaWxfUEhcIixcbiAgICBUdXJraXNoID0gXCJ0ci1UUlwiLFxufVxuXG5leHBvcnQgZW51bSBNTERvY3VtZW50U2tld0NvcnJlY3Rpb25Db25zdGFudCB7XG4gICAgU1VDQ0VTUyA9IDAsXG4gICAgREVURUNUX0ZBSUxFRCA9IDEsXG4gICAgQ09SUkVDVElPTl9GQUlMRUQgPSAyLFxuICAgIElNQUdFX0RBVEFfRVJST1IgPSAzLFxufVxuXG4vL0xhbmcgRGV0ZWN0XG5cbmV4cG9ydCBpbnRlcmZhY2UgcmVtb3RlTGFuZ0RldGVjdGlvblJlcSB7XG4gICAgc291cmNlVGV4dDogc3RyaW5nO1xuICAgIHRhc2tNb2RlPzogbnVtYmVyO1xuICAgIHRydXN0ZWRUaHJlc2hvbGQ/OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIGxvY2FsTGFuZ0RldGVjdGlvblJlcSB7XG4gICAgc291cmNlVGV4dDogc3RyaW5nO1xuICAgIHRydXN0ZWRUaHJlc2hvbGQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2Ugc3luY1JlcXVlc3RMb2NhbExhbmdEZXRlY3Qge1xuICAgIHNvdXJjZVRleHQ6IHN0cmluZztcbiAgICB0cnVzdGVkVGhyZXNob2xkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZW51bSBNTExhbmd1YWdlRGV0ZWN0aW9uIHtcbiAgICBGSVJTVF9CRVNUX0RFVEVDVElPTl9MQU5HVUFHRV9UUlVTVEVEX1RIUkVTSE9MRCA9IDAuNSxcbiAgICBQUk9CQUJJTElUWV9ERVRFQ1RJT05fTEFOR1VBR0VfVFJVU1RFRF9USFJFU0hPTEQgPSAwLjAxLFxuICAgIFVOREVURUNUSU9OX0xBTkdVQUdFX1RSVVNURURfVEhSRVNIT0xEID0gXCJ1bmtub3duXCIsXG59XG5cbi8vUlRUXG5cbmV4cG9ydCBpbnRlcmZhY2UgcnR0UmVxIHtcbiAgICBtTFNwZWVjaFJlYWxUaW1lVHJhbnNjcmlwdGlvbkNvbmZpZzogTUxTcGVlY2hSZWFsVGltZVRyYW5zY3JpcHRpb25Db25maWc7XG59XG5leHBvcnQgaW50ZXJmYWNlIE1MU3BlZWNoUmVhbFRpbWVUcmFuc2NyaXB0aW9uQ29uZmlnIHtcbiAgICBsYW5ndWFnZTogTUxSdHRMYW5ndWFnZXMgfCBudWxsO1xuICAgIHB1bmN0dWF0aW9uRW5hYmxlOiBib29sZWFuIHwgbnVsbDtcbiAgICB3b3JkVGltZU9mZnNldEVuYWJsZTogYm9vbGVhbiB8IG51bGw7XG4gICAgc2VudGVuY2VUaW1lT2Zmc2V0RW5hYmxlOiBib29sZWFuIHwgbnVsbDtcbiAgICBzY2VuZXM/OiBNTFJ0dFNjZW5lcyB8IG51bGw7XG59XG5leHBvcnQgZW51bSBNTFJ0dExhbmd1YWdlcyB7XG4gICAgTEFOX1pIX0NOID0gXCJ6aC1DTlwiLFxuICAgIExBTl9FTl9VUyA9IFwiZW4tVVNcIixcbiAgICBMQU5fRlJfRlIgPSBcImZyLUZSXCIsXG4gICAgTEFOX0VTX0VTID0gXCJlcy1FU1wiLFxuICAgIExBTl9FTl9JTiA9IFwiZW4tSU5cIixcbiAgICBMQU5fREVfREUgPSBcImRlLURFXCIsXG59XG5leHBvcnQgZW51bSBNTFJ0dFNjZW5lcyB7XG4gICAgU0NFTkVTX1NIT1BQSU5HZiA9IFwic2hvcHBpbmdcIixcbn1cbmV4cG9ydCBlbnVtIE1MU3BlZWNoUmVhbFRpbWVUcmFuc2NyaXB0aW9uQ29uc3RhbnRzIHtcbiAgICBFUlJfSU5WQUxJREVfVE9LRU4gPSAxMzIxOSxcbiAgICBFUlJfTk9fTkVUV09SSyA9IDEzMjAyLFxuICAgIEVSUl9TRVJWSUNFX0NSRURJVCA9IDEzMjIyLFxuICAgIEVSUl9TRVJWSUNFX1VOU1VCU0NSSUJFRCA9IDEzMjIzLFxuICAgIEVSUl9TRVJWSUNFX0ZSRUVfVVNFRF9VUCA9IDEzMjI0LFxuICAgIEVSUl9TRVJWSUNFX1VOQVZBSUxBQkxFID0gMTMyMDMsXG4gICAgTEFOX0VOX1VTID0gXCIgZW4tVVNcIixcbiAgICBMQU5fRlJfRlIgPSBcImZyLUZSXCIsXG4gICAgTEFOX1pIX0NOID0gXCJ6aC1DTlwiLFxuICAgIFJFU1VMVFNfUEFSVElBTEZJTkFMID0gXCJSRVNVTFRTX1BBUlRJQUxGSU5BTFwiLFxuICAgIFJFU1VMVFNfUkVDT0dOSVpJTkcgPSBcInJlc3VsdHNfcmVjb2duaXppbmdcIixcbiAgICBSRVNVTFRTX1NFTlRFTkNFX09GRlNFVCA9IFwiUkVTVUxUU19TRU5URU5DRV9PRkZTRVRcIixcbiAgICBSRVNVTFRTX1dPUkRfT0ZGU0VUID0gXCJSRVNVTFRTX1dPUkRfT0ZGU0VUXCIsXG4gICAgU0NFTkVTX1NIT1BQSU5HID0gXCJzaG9wcGluZ1wiLFxuICAgIFNUQVRFX1NFUlZJQ0VfUkVDT05ORUNURUQgPSA0MyxcbiAgICBTVEFURV9TRVJWSUNFX1JFQ09OTkVDVElORyA9IDQyLFxuICAgIFNUQVRFX0xJU1RFTklORyA9IDEsXG4gICAgU1RBVEVfTk9fTkVUV09SSyA9IDcsXG4gICAgU1RBVEVfTk9fVU5ERVJTVEFORCA9IDYsXG4gICAgV0FWRV9QQUlORV9CSVRfV0lEVEggPSBcIkJJVF9XSURUSFwiLFxuICAgIFdBVkVfUEFJTkVfQ0hBTk5FTF9DT1VOVCA9IFwiQ0hBTk5FTF9DT1VOVFwiLFxuICAgIFdBVkVfUEFJTkVfRU5DT0RJTkcgPSBcIkVOQ09ESU5HXCIsXG4gICAgV0FWRV9QQUlORV9TQU1QTEVfUkFURSA9IFwiU0FNUExFX1JBVEVcIixcbn1cblxuLy9UUkFOU0xBVEVcblxuZXhwb3J0IGludGVyZmFjZSByZW1vdGV0cmFuc2xhdGVSZXEge1xuICAgIFVTRV9TWU5DOiBib29sZWFuO1xuICAgIHRhcmdldExhbmdDb2RlOiBNTFRyYW5zbGF0ZUxhbmd1YWdlcztcbiAgICBzb3VyY2VMYW5nQ29kZT86IE1MVHJhbnNsYXRlTGFuZ3VhZ2VzO1xuICAgIHNvdXJjZVRleHQ6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgbG9jYWx0cmFuc2xhdGVSZXEge1xuICAgIFVTRV9TWU5DOiBib29sZWFuO1xuICAgIHRhcmdldExhbmdDb2RlOiBNTFRyYW5zbGF0ZUxhbmd1YWdlcztcbiAgICBzb3VyY2VMYW5nQ29kZTogTUxUcmFuc2xhdGVMYW5ndWFnZXM7XG4gICAgc291cmNlVGV4dDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBkZWxldGVUcmFuc2xhdGVSZXEge1xuICAgIFVTRV9TWU5DOiBib29sZWFuO1xuICAgIGxhbmdjb2RlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIGRvd25sb2FkVHJhbnNsYXRlUmVxIHtcbiAgICBVU0VfU1lOQzogYm9vbGVhbjtcbiAgICBsYW5nY29kZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBsb2NhbEFsbExhbmdSZXEge1xuICAgIFVTRV9TWU5DOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSByZW1vdGVBbGxMYW5nUmVxIHtcbiAgICBVU0VfU1lOQzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGVudW0gTUxUcmFuc2xhdGVMYW5ndWFnZXMge1xuICAgIEFGUklLQUFOUyA9IFwiYWZcIixcbiAgICBBUkFCSUMgPSBcImFyXCIsXG4gICAgQlVMR0FSSUFOID0gXCJiZ1wiLFxuICAgIEJVUk1FU0UgPSBcIm15XCIsXG4gICAgQ1JPQVRJQU4gPSBcImhyXCIsXG4gICAgQ1pFQ0ggPSBcImNzXCIsXG4gICAgQ0hJTkVTRSA9IFwiemhcIixcbiAgICBUUkFESVRJT05BTF9DSElORVNFID0gXCJ6aC1oa1wiLFxuICAgIERBTklTSCA9IFwiZGFcIixcbiAgICBEVVRDSCA9IFwibmxcIixcbiAgICBFU1RPTklBTiA9IFwiZXRcIixcbiAgICBFTkdMSVNIID0gXCJlblwiLFxuICAgIEZJTk5JU0ggPSBcImZpXCIsXG4gICAgRlJFTkNIID0gXCJmclwiLFxuICAgIEdFUk1BTiA9IFwiZGVcIixcbiAgICBHVUpBUkFUSSA9IFwiZ3VcIixcbiAgICBHUkVFSyA9IFwiZWxcIixcbiAgICBIVU5HQVJJQU4gPSBcImh1XCIsXG4gICAgSElOREkgPSBcImhpXCIsXG4gICAgSEVCUkVXID0gXCJoZVwiLFxuICAgIElSSVNIID0gXCJpc1wiLFxuICAgIElUQUxJQU4gPSBcIml0XCIsXG4gICAgSU5ET05FU0lBTiA9IFwiaWRcIixcbiAgICBLSE1FUiA9IFwia21cIixcbiAgICBLT1JFQU4gPSBcImtvXCIsXG4gICAgSkFQQU5FU0UgPSBcImphXCIsXG4gICAgTEFUSU4gPSBcInJtXCIsXG4gICAgTEFUVklBTiA9IFwibHZcIixcbiAgICBNQUxBWSA9IFwibXNcIixcbiAgICBNQVJBVEhJID0gXCJtclwiLFxuICAgIE5PUldFR0lBTiA9IFwibm9cIixcbiAgICBQVU5KQUJJID0gXCJwYVwiLFxuICAgIFBPTElTSCA9IFwicGxcIixcbiAgICBQT1JUVUdVRVNFID0gXCJwdFwiLFxuICAgIFBFUlNJQU4gPSBcImZhXCIsXG4gICAgUlVTU0lBTiA9IFwicnVcIixcbiAgICBST01BTklBTiA9IFwicm9cIixcbiAgICBTRVJCSUFOID0gXCJzclwiLFxuICAgIFNQQU5JU0ggPSBcImVzXCIsXG4gICAgU0xPVkFLID0gXCJza1wiLFxuICAgIFNXRURJU0ggPSBcInN2XCIsXG4gICAgVEFNSUwgPSBcInRhXCIsXG4gICAgVFVSS0lTSCA9IFwidHJcIixcbiAgICBUSEFJID0gXCJ0aFwiLFxuICAgIFRBR0FMT0cgPSBcInRsXCIsXG4gICAgVEVMVUdVID0gXCJ0ZVwiLFxuICAgIFZJRVROQU1FU0UgPSBcInZpXCIsXG59XG5cbi8vIFNvdW5kIERlY3RcblxuZXhwb3J0IGludGVyZmFjZSBzb3VuZERlY3RSZXEge1xuICAgIHN0YXJ0VHlwZTogYm9vbGVhbiB8IG51bGw7XG59XG5cbi8vIFRUUyBBTkFMWVNFUlxuXG5leHBvcnQgaW50ZXJmYWNlIE1MVHRzU3BlYWtlciB7XG4gICAgbGFuZ3VhZ2U/OiBzdHJpbmcgfCBudWxsO1xuICAgIG1vZGVsU2l6ZT86IHN0cmluZyB8IG51bGw7XG4gICAgbmFtZT86IHN0cmluZyB8IG51bGw7XG4gICAgc3BlYWtlckRlc2M/OiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIHR0c0VuZ2luZVJlcSB7XG4gICAgbGFuZ3VhZ2U/OiBzdHJpbmcgfCBudWxsO1xuICAgIHBsYXllclZvbHVtZT86IG51bWJlciB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgdHRzQW5hbHlzZXJTZXR0aW5nc1Jlc3VsdHMge1xuICAgIGxhbmd1YWdlczogU3RyaW5nW107XG4gICAgc3BlYWtlcnM6IE1MVHRzU3BlYWtlcjtcbiAgICBzcGVha2VyOiBNTFR0c1NwZWFrZXI7XG4gICAgaXNMYW5ndWFnZUF2YWlsYWJsZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIHR0c1JlcSB7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIG1sQ29uZmlnczogTUxDb25maWdzO1xuICAgIHF1ZXVpbmdNb2RlOiBNTFR0c0NvbnN0YW50cztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTFR0c0F1ZGlvRnJhZ21lbnQge1xuICAgIGF1ZGlvRGF0YT86IG51bWJlciB8IG51bGw7XG4gICAgYXVkaW9Gb3JtYXQ/OiBudW1iZXIgfCBudWxsO1xuICAgIGNoYW5uZWxJbmZvPzogbnVtYmVyIHwgbnVsbDtcbiAgICBTYW1wbGVSYXRlSW5Iej86IG51bWJlciB8IG51bGw7XG59XG5cbmV4cG9ydCBlbnVtIE1MVHRzQXVkaW9GcmFnbWVudENvbnN0YW50IHtcbiAgICBDSEFOTkVMX09VVF9NT05PID0gNCxcbiAgICBGT1JNQVRfUENNXzE2QklUID0gMixcbiAgICBGT1JNQVRfUENNXzhCSVQgPSAxLFxuICAgIFNBTVBMRV9SQVRFXzE2SyA9IDE2MDAwLFxufVxuZXhwb3J0IGludGVyZmFjZSBNTENvbmZpZ3Mge1xuICAgIGxhbmd1YWdlOiBNTFR0c0NvbnN0YW50cztcbiAgICBwZXJzb246IE1MVHRzQ29uc3RhbnRzO1xuICAgIHNwZWVkOiBudW1iZXI7XG4gICAgdm9sdW1lOiBudW1iZXI7XG4gICAgc3ludGhlc2l6ZU1vZGU6IE1MVHRzQ29uc3RhbnRzO1xufVxuZXhwb3J0IGVudW0gTUxUdHNDb25zdGFudHMge1xuICAgIEVWRU5UX1BMQVlfU1RBUlQgPSAxLFxuICAgIEVWRU5UX1BMQVlfUkVTVU1FID0gMixcbiAgICBFVkVOVF9QTEFZX1BBVVNFID0gMyxcbiAgICBFVkVOVF9QTEFZX1NUT1AgPSA0LFxuICAgIEVWRU5UX1NZTlRIRVNJU19TVEFSVCA9IDUsXG4gICAgRVZFTlRfU1lOVEhFU0lTX0VORCA9IDYsXG4gICAgRVZFTlRfU1lOVEhFU0lTX0NPTVBMRVRFID0gNyxcbiAgICBFVkVOVF9QTEFZX1NUT1BfSU5URVJSVVBURUQgPSBcImludGVycnVwdGVkXCIsXG4gICAgRVZFTlRfU1lOVEhFU0lTX0lOVEVSUlVQVEVEID0gXCJpbnRlcnJ1cHRlZFwiLFxuICAgIExBTkdVQUdFX0FWQUlMQUJMRSA9IDAsXG4gICAgTEFOR1VBR0VfTk9UX1NVUFBPUlQgPSAxLFxuICAgIExBTkdVQUdFX1VQREFUSU5HID0gMixcbiAgICBUVFNfRU5fVVMgPSBcImVuLVVTXCIsXG4gICAgVFRTX0xBTl9BUl9BUiA9IFwiYXItQVJcIixcbiAgICBUVFNfTEFOX1RSX1RSID0gXCJ0ci1UUlwiLFxuICAgIFRUU19TUEVBS0VSX0ZFTUFMRV9BUiA9IFwiYXItQVItc3QtMVwiLFxuICAgIFRUU19TUEVBS0VSX0ZFTUFMRV9UUiA9IFwidHItVFItc3QtMVwiLFxuICAgIFRUU19MQU5fRVNfRVMgPSBcImVzLUVTXCIsXG4gICAgVFRTX0xBTl9GUl9GUiA9IFwiZnItRlJcIixcbiAgICBUVFNfTEFOX0RFX0RFID0gXCJkZS1ERVwiLFxuICAgIFRUU19MQU5fSVRfSVQgPSBcIml0LUlUXCIsXG4gICAgVFRTX0xBTl9SVV9SVSA9IFwicnUtUlVcIixcbiAgICBUVFNfTEFOX1BMX1BMID0gXCJwbC1QTFwiLFxuICAgIFRUU19MQU5fVEhfVEggPSBcIiB0aC1USFwiLFxuICAgIFRUU19MQU5fTVNfTVMgPSBcIm1zLU1TXCIsXG4gICAgVFRTX1pIX0hBTlMgPSBcInpoLUhhbnNcIixcbiAgICBUVFNfU1BFQUtFUl9GRU1BTEVfRU4gPSBcIkZlbWFsZS1lblwiLFxuICAgIFRUU19TUEVBS0VSX0ZFTUFMRV9aSCA9IFwiRmVtYWxlLXpoXCIsXG4gICAgVFRTX1NQRUFLRVJfTUFMRV9FTiA9IFwiTWFsZS1lblwiLFxuICAgIFRUU19TUEVBS0VSX01BTEVfWkggPSBcIk1hbGUtemhcIixcbiAgICBUVFNfU1BFQUtFUl9NQUxFX1pIXzIgPSBcInpoLUhhbnMtc3QtNFwiLFxuICAgIFRUU19TUEVBS0VSX0ZFTUFMRV9aSF8yID0gXCJ6aC1IYW5zLXN0LTNcIixcbiAgICBUVFNfU1BFQUtFUl9NQUxFX0VOXzIgPSBcImVuLVVTLXN0LTRcIixcbiAgICBUVFNfU1BFQUtFUl9GRU1BTEVfRU5fMiA9IFwiZW4tVVMtc3QtM1wiLFxuICAgIFRUU19TUEVBS0VSX0ZFTUFMRV9ERSA9IFwiZGUtREUtc3QtMVwiLFxuICAgIFRUU19TUEVBS0VSX0ZFTUFMRV9FUyA9IFwiaXQtSVQtc3QtMVwiLFxuICAgIFRUU19TUEVBS0VSX0ZFTUFMRV9JVCA9IFwiZXMtRVMtc3QtMVwiLFxuICAgIFRUU19TUEVBS0VSX0ZFTUFMRV9GUiA9IFwiZnItRlItc3QtMVwiLFxuICAgIFRUU19TUEVBS0VSX0ZFTUFMRV9SVSA9IFwicnUtUlUtc3QtMVwiLFxuICAgIFRUU19TUEVBS0VSX0ZFTUFMRV9QTCA9IFwicGwtUEwtc3QtMVwiLFxuICAgIFRUU19TUEVBS0VSX0ZFTUFMRV9USCA9IFwidGgtVEgtc3QtMVwiLFxuICAgIFRUU19TUEVBS0VSX0ZFTUFMRV9NUyA9IFwibXMtTVMtc3QtMVwiLFxuICAgIFRUU19TUEVBS0VSX09GRkxJTkVfRU5fVVNfTUFMRV9CT0xUID0gXCJlbi1VUy1zdC1ib2x0LTJcIixcbiAgICBUVFNfU1BFQUtFUl9PRkZMSU5FX1pIX0hBTlNfRkVNQUxFX0VBR0xFID0gXCJ6aC1IYW5zLXN0LWVhZ2xlLTFcIixcbiAgICBUVFNfU1BFQUtFUl9PRkZMSU5FX1pIX0hBTlNfTUFMRV9FQUdMRSA9IFwiemgtSGFucy1zdC1lYWdsZS0yXCIsXG4gICAgVFRTX1NQRUFLRVJfT0ZGTElORV9FTl9VU19GRU1BTEVfRUFHTEUgPSBcImVuLVVTLXN0LWVhZ2xlLTFcIixcbiAgICBUVFNfU1BFQUtFUl9PRkZMSU5FX0VOX1VTX01BTEVfRUFHTEUgPSBcImVuLVVTLXN0LWVhZ2xlLTJcIixcbiAgICBUVFNfU1BFQUtFUl9PRkZMSU5FX0VOX1VTX0ZFTUFMRV9CRUUgPSBcImVuLVVTLXN0LWJlZS0xXCIsXG4gICAgVFRTX1NQRUFLRVJfT0ZGTElORV9GUl9GUl9GRU1BTEVfQkVFID0gXCJmci1GUi1zdC1iZWUtMVwiLFxuICAgIFRUU19TUEVBS0VSX09GRkxJTkVfRVNfRVNfRkVNQUxFX0JFRSA9IFwiZXMtRVMtc3QtYmVlLTFcIixcbiAgICBUVFNfU1BFQUtFUl9PRkZMSU5FX0RFX0RFX0ZFTUFMRV9CRUUgPSBcImRlLURFLXN0LWJlZS0xXCIsXG4gICAgVFRTX1NQRUFLRVJfT0ZGTElORV9JVF9JVF9GRU1BTEVfQkVFID0gXCJpdC1JVC1zdC1iZWUtMVwiLFxuICAgIFRUU19TUEVBS0VSX09GRkxJTkVfWkhfSEFOU19GRU1BTEVfQk9MVCA9IFwiemgtSGFucy1zdC1ib2x0LTFcIixcbiAgICBUVFNfU1BFQUtFUl9PRkZMSU5FX1pIX0hBTlNfTUFMRV9CT0xUID0gXCJ6aC1IYW5zLXN0LWJvbHQtMlwiLFxuICAgIFRUU19TUEVBS0VSX09GRkxJTkVfRU5fVVNfRkVNQUxFX0JPTFQgPSBcImVuLVVTLXN0LWJvbHQtMVwiLFxuICAgIFRUU19PTkxJTkVfTU9ERSA9IFwib25saW5lXCIsXG4gICAgVFRTX09GRkxJTkVfTU9ERSA9IFwib2ZmbGluZVwiLFxuICAgIFFVRVVFX0FQUEVORCA9IDAsXG4gICAgUVVFVUVfRkxVU0ggPSAxLFxuICAgIEVYVEVSTkFMX1BMQVlCQUNLID0gMixcbiAgICBPUEVOX1NUUkVBTSA9IDQsXG59XG5cbmV4cG9ydCBlbnVtIENvbG9ycyB7XG4gICAgUkVEID0gLTY1NTM2LFxuICAgIERLR1JBWSA9IC0xMjMwMzI5MixcbiAgICBHUkFZID0gLTc4MjkzNjgsXG4gICAgV0hJVEUgPSAtMSxcbiAgICBCTFVFID0gLTE2Nzc2OTYxLFxuICAgIEJMQUNLID0gLTE2Nzc3MjE2LFxuICAgIExUR1JBWSA9IC0zMzU1NDQ0LFxuICAgIE1BR0VOVEEgPSAtNjUyODEsXG4gICAgWUVMTE9XID0gLTI1NixcbiAgICBDWUFOID0gLTE2NzExNjgxLFxuICAgIEdSRUVOID0gLTE2NzExOTM2LFxuICAgIFRSQU5TUEFSRU5UID0gMCxcbn1cbmV4cG9ydCBlbnVtIFJlY3RTdHlsZSB7XG4gICAgU1RST0tFID0gMSxcbiAgICBGSUxMID0gMixcbiAgICBGSUxMX0FORF9TVFJPS0UgPSAzLFxufVxuXG5leHBvcnQgZW51bSBNTFR0c0Vycm9yIHtcbiAgICBFUlJfQVVESU9fUExBWUVSX0ZBSUxFRCA9IDExMzA1LFxuICAgIEVSUl9BVVRIT1JJWkVfRkFJTEVEID0gMTEzMDYsXG4gICAgRVJSX0FVVEhPUklaRV9UT0tFTl9JTlZBTElERSA9IDExMzA3LFxuICAgIEVSUl9JTExFR0FMX1BBUkFNRVRFUiA9IDExMzAxLFxuICAgIEVSUl9JTlNVRkZJQ0lFTlRfQkFMQU5DRSA9IDExMzAzLFxuICAgIEVSUl9JTlRFUk5BTCA9IDExMzk4LFxuICAgIEVSUl9ORVRDT05ORUNUX0ZBSUxFRCA9IDExMzAyLFxuICAgIEVSUl9TUEVFQ0hfU1lOVEhFU0lTX0ZBSUxFRCA9IDExMzA0LFxuICAgIEVSUl9VTktOT1dOID0gMTEzOTksXG59XG5cbi8qXG4tLS0tLS0tLS0tLS0tLS0tLSByZXR1cm5cbiovXG5cbmV4cG9ydCBpbnRlcmZhY2UgTUxBZnRSZXN1bHQge1xuICAgIGV2ZW50TmFtZTogc3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZztcbiAgICB0YXNrSWQ6IHN0cmluZztcbiAgICBjb21wbGV0ZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTUxBZnRFcnJvclJlc3VsdCB7XG4gICAgZXZlbnROYW1lOiBzdHJpbmc7XG4gICAgdGFza0lkOiBzdHJpbmc7XG4gICAgZXJyb3JDb2RlOiBNTEFmdEVycm9yQ29kZXM7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xufVxuZXhwb3J0IGVudW0gTUxBZnRFcnJvckNvZGVzIHtcbiAgICBFUlJfQVVESU9fRklMRV9OT1RTVVBQT1JURUQgPSAxMTEwMSxcbiAgICBMQU5HVUFHRV9DT0RFX05PVFNVUFBPUlRFRCA9IDExMTAyLFxuICAgIEVSUl9BVURJT19GSUxFX1NJWkVfT1ZFUkZMT1cgPSAxMTEwMyxcbiAgICBFUlJfQVVESU9fTEVOR1RIX09WRVJGTE9XID0gMTExMDQsXG4gICAgRVJSX0ZJTEVfTk9UX0ZPVU5EID0gMTExMDUsXG4gICAgRVJSX0lMTEVHQUxfUEFSQU1FVEVSID0gMTExMDYsXG4gICAgRVJSX0VOR0lORV9CVVNZID0gMTExMDcsXG4gICAgRVJSX05FVENPTk5FQ1RfRkFJTEVEID0gMTExMDgsXG4gICAgRVJSX1JFU1VMVF9XSEVOX1VQTE9BRElORyA9IDExMTA5LFxuICAgIEVSUl9UQVNLX05PVF9FWElTVEVEID0gMTExMTAsXG4gICAgRVJSX0FVRElPX1RSQU5TQ1JJUFRfRkFJTEVEID0gMTExMTEsXG4gICAgRVJSX0FVRElPX0lOSVRfRkFJTEVEID0gMTExMTIsXG4gICAgRVJSX0FVRElPX1VQTE9BRF9GQUlMRUQgPSAxMTExMyxcbiAgICBFUlJfVEFTS19BTFJFQURZX0lOUFJPR1JFU1MgPSAxMTExNCxcbiAgICBFUlJfTk9fRU5PVUdIX1NUT1JBR0UgPSAxMTExNSxcbiAgICBFUlJfQVVUSE9SSVpFX0ZBSUxFRCA9IDExMTE5LFxuICAgIEVSUl9TRVJWSUNFX0NSRURJVCA9IDExMTIyLFxuICAgIEVSUl9TRVJWSUNFX1VOU1VCU0NSSUJFRCA9IDExMTIzLFxuICAgIEVSUl9TRVJWSUNFX0ZSRUVfVVNFRF9VUCA9IDExMTI0LFxuICAgIEVSUl9JTlRFUk5BTCA9IDExMTk4LFxuICAgIEVSUl9VTktOT1dOID0gMTExOTksXG59XG5leHBvcnQgaW50ZXJmYWNlIE1MQWZ0RXZlbnRSZXN1bHQge1xuICAgIGV2ZW50TmFtZTogc3RyaW5nO1xuICAgIHRhc2tJZDogc3RyaW5nO1xuICAgIGV4dDogc3RyaW5nO1xuICAgIGV2ZW50SWQ6IHN0cmluZztcbn1cbmV4cG9ydCBlbnVtIE1MQUZURXZlbnRDb2RlcyB7XG4gICAgUEFVU0VfRVZFTlQgPSAyLFxuICAgIFNUT1BfRVZFTlQgPSAzLFxuICAgIFVQTE9BREVEX0VWRU5UID0gMSxcbn1cblxuZXhwb3J0IGVudW0gTUxBZnRDb25zdGFudHMge1xuICAgIExBTkdVQUdFX1pIID0gXCJ6aFwiLFxuICAgIExBTkdVQUdFX0VOX1VTID0gXCJlbi1VU1wiLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MUmVtb3RlTGFuZ0RldGVjdGlvbiB7XG4gICAgbGFuZ0NvZGU6IHN0cmluZztcbiAgICBwcm9iYWJpbGl0eTogbnVtYmVyO1xuICAgIGhhc2hDb2RlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTUxsYW5nRGV0ZWN0aW9uV2l0aEZpcnN0RGV0ZWN0IHtcbiAgICBsYW5nQ29kZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MVHRzUmVzdWx0IHtcbiAgICBldmVudE5hbWU6IHN0cmluZztcbiAgICB0YXNrSUQ6IHN0cmluZztcbiAgICBzdGFydDogbnVtYmVyO1xuICAgIGVuZDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MU291bmREZWN0UmVzdWx0IHtcbiAgICBzb3VuZFR5cGU6IE1MU291bmREZWN0U291bmRUeXBlUmVzdWx0O1xuICAgIGV2ZW50TmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IGVudW0gTUxTb3VuZERlY3RTb3VuZFR5cGVSZXN1bHQge1xuICAgIFNPVU5EX0RFQ1RfRVJST1JfTk9fTUVNID0gMTIyMDEsXG4gICAgU09VTkRfREVDVF9FUlJPUl9GQVRBTF9FUlJPUiA9IDEyMjAyLFxuICAgIFNPVU5EX0RFQ1RfRVJST1JfQVVESU8gPSAxMjIwMyxcbiAgICBTT1VORF9ERUNUX0VSUk9SX0lOVEVSTkFMID0gMTIyOTgsXG4gICAgU09VTkRfRVZFTlRfVFlQRV9MQVVHSFRFUiA9IDAsXG4gICAgU09VTkRfRVZFTlRfVFlQRV9CQUJZX0NSWSA9IDEsXG4gICAgU09VTkRfRVZFTlRfVFlQRV9TTk9SSU5HID0gMixcbiAgICBTT1VORF9FVkVOVF9UWVBFX1NORUVaRSA9IDMsXG4gICAgU09VTkRfRVZFTlRfVFlQRV9TQ1JFQU1JTkcgPSA0LFxuICAgIFNPVU5EX0VWRU5UX1RZUEVfTUVPVyA9IDUsXG4gICAgU09VTkRfRVZFTlRfVFlQRV9CQVJLID0gNixcbiAgICBTT1VORF9FVkVOVF9UWVBFX1dBVEVSID0gNyxcbiAgICBTT1VORF9FVkVOVF9UWVBFX0NBUl9BTEFSTSA9IDgsXG4gICAgU09VTkRfRVZFTlRfVFlQRV9ET09SX0JFTEwgPSA5LFxuICAgIFNPVU5EX0VWRU5UX1RZUEVfS05PQ0sgPSAxMCxcbiAgICBTT1VORF9FVkVOVF9UWVBFX0FMQVJNID0gMTEsXG4gICAgU09VTkRfRVZFTlRfVFlQRV9TVEVBTV9XSElTVExFID0gMTIsXG59XG5cbmV4cG9ydCBlbnVtIENvcmRvdmFFcnJvcnMge1xuICAgIFVOS05PV04gPSAtMSxcbiAgICBTVUNDRVNTID0gMCxcbiAgICBESVNDQVJERUQgPSAxLFxuICAgIElOTkVSID0gMixcbiAgICBJTkFDVElWRSA9IDMsXG4gICAgTk9UX1NVUFBPUlRFRCA9IDQsXG4gICAgSUxMRUdBTF9QQVJBTUVURVIgPSA1LFxuICAgIE9WRVJEVUUgPSA2LFxuICAgIE5PX0ZPVU5EID0gNyxcbiAgICBEVVBMSUNBVEVfRk9VTkQgPSA4LFxuICAgIE5PX1BFUk1JU1NJT04gPSA5LFxuICAgIElOU1VGRklDSUVOVF9SRVNPVVJDRSA9IDEwLFxuICAgIEFOQUxZU0lTX0ZBSUxVUkUgPSAxMSxcbiAgICBJTlRFUlJVUFRFRCA9IDEyLFxuICAgIEVYQ0VFRF9SQU5HRSA9IDEzLFxuICAgIERBVEFfTUlTU0lORyA9IDE0LFxuICAgIEFVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEID0gMTUsXG4gICAgVEZMSVRFX05PVF9DT01QQVRJQkxFID0gMTYsXG4gICAgSU5TVUZGSUNJRU5UX1NQQUNFID0gMTcsXG4gICAgSEFTSF9NSVNTID0gMTgsXG4gICAgVE9LRU5fSU5WQUxJRCA9IDE5LFxuICAgIFNFUlZJQ0VfRkFJTFVSRSA9IDIwLFxuICAgIEFOQUxZU0lTX05VTEwgPSAyMSxcbn1cbiJdfQ==