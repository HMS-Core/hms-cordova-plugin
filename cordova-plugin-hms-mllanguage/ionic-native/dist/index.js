/*
    Copyright 2023-2024. Huawei Technologies Co., Ltd. All rights reserved.

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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
import { Observable } from "rxjs";
var HMSMLPluginOriginal = /** @class */ (function (_super) {
    __extends(HMSMLPluginOriginal, _super);
    function HMSMLPluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * It sets Api Key or access token for application.
     * @param  {configReq} params Represents your API_KEY.
     * @returns Promise<any>
     */
    HMSMLPluginOriginal.prototype.serviceInitializer = function (params) { return cordova(this, "serviceInitializer", { "otherPromise": true }, arguments); };
    /**
     * An app information class used to store basic information about apps with the HMS Core ML SDK integrated and complete the initialization of ML Kit. When using cloud services of the ML Kit, you need to set the apiKey of your app.
     * @param  {appSettingReq} appSettingReq Represents the parameter required.
     * @returns Promise<any>
     */
    HMSMLPluginOriginal.prototype.appSetting = function (appSettingReq) { return cordova(this, "appSetting", { "otherPromise": true }, arguments); };
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
    HMSMLPluginOriginal.prototype.setUserRegion = function (region) { return cordova(this, "setUserRegion", { "otherPromise": true }, arguments); };
    /**
     * Obtains the country/region code of the data processing location you have specified when you choose to manually manage and specify such a location.
     * @returns Promise<String>
     */
    HMSMLPluginOriginal.prototype.getCountryCode = function () { return cordova(this, "getCountryCode", { "otherPromise": true }, arguments); };
    /**
     * This service enable logger service.
     * @returns Promise<any>
     */
    HMSMLPluginOriginal.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    /**
     * This service disable logger service.
     * @returns Promise<any>
     */
    HMSMLPluginOriginal.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSMLPluginOriginal.prototype, "FEATURE", {
        get: function () { return cordovaPropertyGet(this, "FEATURE"); },
        set: function (value) { cordovaPropertySet(this, "FEATURE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLPluginOriginal.prototype, "LANGUAGE", {
        get: function () { return cordovaPropertyGet(this, "LANGUAGE"); },
        set: function (value) { cordovaPropertySet(this, "LANGUAGE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLPluginOriginal.prototype, "MLTtsConstants", {
        get: function () { return cordovaPropertyGet(this, "MLTtsConstants"); },
        set: function (value) { cordovaPropertySet(this, "MLTtsConstants", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLPluginOriginal.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLPluginOriginal.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLPluginOriginal.prototype, "MLRttLanguages", {
        get: function () { return cordovaPropertyGet(this, "MLRttLanguages"); },
        set: function (value) { cordovaPropertySet(this, "MLRttLanguages", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLPluginOriginal.prototype, "MLRttScenes", {
        get: function () { return cordovaPropertyGet(this, "MLRttScenes"); },
        set: function (value) { cordovaPropertySet(this, "MLRttScenes", value); },
        enumerable: false,
        configurable: true
    });
    HMSMLPluginOriginal.pluginName = "HMSMLPlugin";
    HMSMLPluginOriginal.plugin = "cordova-plugin-hms-mllanguage";
    HMSMLPluginOriginal.pluginRef = "HMSMLPlugin";
    HMSMLPluginOriginal.platforms = ["Android"];
    return HMSMLPluginOriginal;
}(AwesomeCordovaNativePlugin));
var HMSMLPlugin = new HMSMLPluginOriginal();
export { HMSMLPlugin };
var HMSMLLanguageOriginal = /** @class */ (function (_super) {
    __extends(HMSMLLanguageOriginal, _super);
    function HMSMLLanguageOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param  {syncProbabilityDetect} syncRequestLocalLangDetect Represents the parameter.
     * @returns Promise<MLRemoteLangDetection>
     */
    HMSMLLanguageOriginal.prototype.syncProbabilityDetect = function (syncProbabilityDetect) { return cordova(this, "syncProbabilityDetect", { "otherPromise": true }, arguments); };
    /**
     * @param  {syncProbabilityDetect} syncProbabilityDetect Represents the parameter.
     * @returns Promise<String>
     */
    HMSMLLanguageOriginal.prototype.syncFirstBestDetect = function (syncProbabilityDetect) { return cordova(this, "syncFirstBestDetect", { "otherPromise": true }, arguments); };
    /**
     * Implements on-cloud text translation.
     * @param  {remotetranslateReq} remotetranslateReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    HMSMLLanguageOriginal.prototype.remoteTranslator = function (remotetranslateReq) { return cordova(this, "remoteTranslator", { "otherPromise": true }, arguments); };
    /**
     * Implements on-cloud text translation.
     * @param  {localtranslateReq} localtranslateReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    HMSMLLanguageOriginal.prototype.localTranslator = function (localtranslateReq) { return cordova(this, "localTranslator", { "otherPromise": true }, arguments); };
    /**
     * Obtains all languages supported for local translation.
     * @param  {localAllLangReq} localAllLangReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    HMSMLLanguageOriginal.prototype.translatorLocalAllLang = function (localAllLangReq) { return cordova(this, "translatorLocalAllLang", { "otherPromise": true }, arguments); };
    /**
     * Obtains all languages supported for on-cloud translation.
     * @param  {remoteAllLangReq} remoteAllLangReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    HMSMLLanguageOriginal.prototype.translatorRemoteAllLang = function (remoteAllLangReq) { return cordova(this, "translatorRemoteAllLang", { "otherPromise": true }, arguments); };
    /**
     * Detects languages on the cloud.
     * @param  {remoteLangDetectionReq} remoteLangDetectionReq Represents the parameter required for lang detection.
     * @returns Promise<RemoteLangDetectionAnalyser> | Promise<langDetectionWithFirstDetect>
     */
    HMSMLLanguageOriginal.prototype.remoteLangDetection = function (remoteLangDetectionReq) { return cordova(this, "remoteLangDetection", { "otherPromise": true }, arguments); };
    /**
     * Detects languages on local.
     * @param  {localLangDetectionReq} localLangDetectionReq Represents the parameter required for lang detection.
     * @returns Promise<any> | Promise<any>
     */
    HMSMLLanguageOriginal.prototype.localLangDetection = function (localLangDetectionReq) { return cordova(this, "localLangDetection", { "otherPromise": true }, arguments); };
    /**
     * Download language model.
     * @param  {downloadTranslateReq} downloadTranslateReq Represents the parameter required for download model.
     * @returns Promise<any>
     */
    HMSMLLanguageOriginal.prototype.translatorDownloadModel = function (downloadTranslateReq) { return cordova(this, "translatorDownloadModel", { "otherPromise": true }, arguments); };
    /**
     * For delete language model.
     * @param  {deleteTranslateReq} deleteTranslateReq Represents the parameter required for delete model.
     * @returns Promise<any>
     */
    HMSMLLanguageOriginal.prototype.translatorDeleteModel = function (deleteTranslateReq) { return cordova(this, "translatorDeleteModel", { "otherPromise": true }, arguments); };
    /**
     * This method stop translator service.
     * @returns Promise<any>
     */
    HMSMLLanguageOriginal.prototype.stopTranslatorService = function () { return cordova(this, "stopTranslatorService", { "otherPromise": true }, arguments); };
    /**
     * This method return RTT setting.
     * @returns Promise<any>
     */
    HMSMLLanguageOriginal.prototype.getRTTSetting = function () { return cordova(this, "getRTTSetting", { "otherPromise": true }, arguments); };
    /**
     * This method returns TTS setting.
     * @returns Promise<any>
     */
    HMSMLLanguageOriginal.prototype.getTTSSetting = function () { return cordova(this, "getTTSSetting", { "otherPromise": true }, arguments); };
    /**
     * This method returns AFT setting.
     * @returns Promise<any>
     */
    HMSMLLanguageOriginal.prototype.getAFTSetting = function () { return cordova(this, "getAFTSetting", { "otherPromise": true }, arguments); };
    /**
     * This method returns Lang Detection setting.
     * @returns Promise<any>
     */
    HMSMLLanguageOriginal.prototype.getLangDetectionSetting = function () { return cordova(this, "getLangDetectionSetting", { "otherPromise": true }, arguments); };
    /**
     * This method stop lang detection service.
     * @returns Promise<any>
     */
    HMSMLLanguageOriginal.prototype.stopLangDetectionService = function () { return cordova(this, "stopLangDetectionService", { "otherPromise": true }, arguments); };
    /**
     * The sound detection service can detect sound events in online (real-time recording) mode. The detected sound events can help you perform subsequent actions.
     * @param  {soundDectReq} soundDectReq Represents the parameter required for Sound Detection analyser.
     * @returns Promise<any>
     */
    HMSMLLanguageOriginal.prototype.soundDectAnalyser = function (soundDectReq) { return cordova(this, "soundDectAnalyser", { "otherPromise": true }, arguments); };
    /**
     * TTS can convert text information into audio output. Rich timbres, and volume and speed options are supported to produce more natural sounds.
     * @param  {ttsReq} ttsReq Represents the parameter required for text to speech.
     * @returns Promise<TtsAnalyser>
     */
    HMSMLLanguageOriginal.prototype.ttsAnalyser = function (ttsReq) { return cordova(this, "ttsAnalyser", { "otherPromise": true }, arguments); };
    /**
     * TTS can convert text information into audio output offline. Rich timbres, and volume and speed options are supported to produce more natural sounds.
     * @param  {ttsReq} ttsReq Represents the parameter required for text to speech.
     * @returns Promise<TtsAnalyser>
     */
    HMSMLLanguageOriginal.prototype.ttsOfflineAnalyser = function (ttsReq) { return cordova(this, "ttsOfflineAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This service stop text to speech (TTS) service.
     * @returns Promise<any>
     */
    HMSMLLanguageOriginal.prototype.ttsAnalyserStop = function () { return cordova(this, "ttsAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * This service pauses text to speech (TTS) analyser.
     * @returns Promise<any>
     */
    HMSMLLanguageOriginal.prototype.ttsAnalyserPause = function () { return cordova(this, "ttsAnalyserPause", { "otherPromise": true }, arguments); };
    /**
     * This service continues text to speech (TTS) analyser.
     * @returns Promise<any>
     */
    HMSMLLanguageOriginal.prototype.ttsAnalyserResume = function () { return cordova(this, "ttsAnalyserResume", { "otherPromise": true }, arguments); };
    /**
     * This service shutdown text to speech (TTS) analyser.
     * @returns Promise<any>
     */
    HMSMLLanguageOriginal.prototype.ttsAnalysershutDown = function () { return cordova(this, "ttsAnalysershutDown", { "otherPromise": true }, arguments); };
    /**
     * This method returns TTS Download setting.
     * @returns Promise<any>
     */
    HMSMLLanguageOriginal.prototype.ttsAnalyserDownloadSetting = function () { return cordova(this, "ttsAnalyserDownloadSetting", { "otherPromise": true }, arguments); };
    /**
     * This service close AFT analyser.
     * @returns Promise<any>
     */
    HMSMLLanguageOriginal.prototype.aftAnalyserClose = function () { return cordova(this, "aftAnalyserClose", { "otherPromise": true }, arguments); };
    /**
     * This service stop AFT analyser.
     * @returns Promise<any>
     */
    HMSMLLanguageOriginal.prototype.asrAnalyserStop = function () { return cordova(this, "asrAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * This service destroy AFT analyser.
     * @returns Promise<any>
     */
    HMSMLLanguageOriginal.prototype.aftAnalyserDestroy = function () { return cordova(this, "aftAnalyserDestroy", { "otherPromise": true }, arguments); };
    /**
     * This service pause AFT analyser.
     * @returns Promise<any>
     */
    HMSMLLanguageOriginal.prototype.aftAnalyserPause = function () { return cordova(this, "aftAnalyserPause", { "otherPromise": true }, arguments); };
    /**
     * This service destroy Sound Detection analyser.
     * @returns Promise<any>
     */
    HMSMLLanguageOriginal.prototype.soundDectAnalyserDestroy = function () { return cordova(this, "soundDectAnalyserDestroy", { "otherPromise": true }, arguments); };
    /**
     * The audio file transcription service can convert an audio file less than or equal to 60 seconds into a text file. Currently, Chinese and English are supported.
     * @param  {aftReq} aftReq Represents the parameter required for aft analyser.
     * @returns Promise<AftAnalyser>
     */
    HMSMLLanguageOriginal.prototype.aftAnalyser = function (aftReq) { return cordova(this, "aftAnalyser", { "otherPromise": true }, arguments); };
    HMSMLLanguageOriginal.prototype.asrAnalyser = function (asrReq) { return cordova(this, "asrAnalyser", { "observable": true }, arguments); };
    HMSMLLanguageOriginal.prototype.rttAnalyserStart = function (rttReq) { return cordova(this, "rttAnalyserStart", { "observable": true }, arguments); };
    HMSMLLanguageOriginal.prototype.rttAnalyserStop = function () { return cordova(this, "rttAnalyserStop", { "observable": true }, arguments); };
    Object.defineProperty(HMSMLLanguageOriginal.prototype, "FEATURE", {
        get: function () { return cordovaPropertyGet(this, "FEATURE"); },
        set: function (value) { cordovaPropertySet(this, "FEATURE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLLanguageOriginal.prototype, "LANGUAGE", {
        get: function () { return cordovaPropertyGet(this, "LANGUAGE"); },
        set: function (value) { cordovaPropertySet(this, "LANGUAGE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLLanguageOriginal.prototype, "MLTtsConstants", {
        get: function () { return cordovaPropertyGet(this, "MLTtsConstants"); },
        set: function (value) { cordovaPropertySet(this, "MLTtsConstants", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLLanguageOriginal.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLLanguageOriginal.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLLanguageOriginal.prototype, "MLRttLanguages", {
        get: function () { return cordovaPropertyGet(this, "MLRttLanguages"); },
        set: function (value) { cordovaPropertySet(this, "MLRttLanguages", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLLanguageOriginal.prototype, "MLRttScenes", {
        get: function () { return cordovaPropertyGet(this, "MLRttScenes"); },
        set: function (value) { cordovaPropertySet(this, "MLRttScenes", value); },
        enumerable: false,
        configurable: true
    });
    HMSMLLanguageOriginal.pluginName = "HMSMLLanguage";
    HMSMLLanguageOriginal.plugin = "cordova-plugin-hms-mllanguage";
    HMSMLLanguageOriginal.pluginRef = "HMSMLLanguage";
    HMSMLLanguageOriginal.platforms = ["Android"];
    return HMSMLLanguageOriginal;
}(AwesomeCordovaNativePlugin));
var HMSMLLanguage = new HMSMLLanguageOriginal();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmF0aXZlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLCtFQUFpRSxNQUFNLCtCQUErQixDQUFDO0FBQzlHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBU0QsK0JBQTBCOzs7O0lBZ0J2RDs7OztPQUlHO0lBQ0gsd0NBQWtCLGFBQUMsTUFBaUI7SUFLcEM7Ozs7T0FJRztJQUNILGdDQUFVLGFBQUMsYUFBNEI7SUFLdkM7Ozs7Ozs7OztPQVNHO0lBQ0gsbUNBQWEsYUFBQyxNQUFjO0lBSzVCOzs7T0FHRztJQUNILG9DQUFjO0lBS2Q7OztPQUdHO0lBQ0gsa0NBQVk7SUFLWjs7O09BR0c7SUFDSCxtQ0FBYTswQkF2RWIsZ0NBQU87Ozs7OzswQkFFUCxpQ0FBUTs7Ozs7OzBCQUVSLHVDQUFjOzs7Ozs7MEJBRWQsK0JBQU07Ozs7OzswQkFFTixrQ0FBUzs7Ozs7OzBCQUVULHVDQUFjOzs7Ozs7MEJBRWQsb0NBQVc7Ozs7Ozs7Ozs7c0JBekNmO0VBMkJpQywwQkFBMEI7U0FBOUMsV0FBVzs7SUFxRlcsaUNBQTBCOzs7O0lBaUJ6RDs7O09BR0c7SUFDSCw2Q0FBcUIsYUFDakIscUJBQWlEO0lBS3JEOzs7T0FHRztJQUNILDJDQUFtQixhQUNmLHFCQUFpRDtJQU1yRDs7OztPQUlHO0lBQ0gsd0NBQWdCLGFBQUMsa0JBQXNDO0lBSXZEOzs7O09BSUc7SUFDSCx1Q0FBZSxhQUFDLGlCQUFvQztJQUlwRDs7OztPQUlHO0lBQ0gsOENBQXNCLGFBQUMsZUFBZ0M7SUFJdkQ7Ozs7T0FJRztJQUNILCtDQUF1QixhQUFDLGdCQUFrQztJQUkxRDs7OztPQUlHO0lBQ0gsMkNBQW1CLGFBQ2Ysc0JBQThDO0lBS2xEOzs7O09BSUc7SUFDSCwwQ0FBa0IsYUFDZCxxQkFBNEM7SUFNaEQ7Ozs7T0FJRztJQUNILCtDQUF1QixhQUNuQixvQkFBMEM7SUFLOUM7Ozs7T0FJRztJQUNILDZDQUFxQixhQUNqQixrQkFBc0M7SUFLMUM7OztPQUdHO0lBQ0gsNkNBQXFCO0lBSXJCOzs7T0FHRztJQUNILHFDQUFhO0lBSWI7OztPQUdHO0lBQ0gscUNBQWE7SUFJYjs7O09BR0c7SUFDSCxxQ0FBYTtJQUliOzs7T0FHRztJQUNILCtDQUF1QjtJQUl2Qjs7O09BR0c7SUFDSCxnREFBd0I7SUFJeEI7Ozs7T0FJRztJQUNILHlDQUFpQixhQUFDLFlBQTBCO0lBSTVDOzs7O09BSUc7SUFDSCxtQ0FBVyxhQUFDLE1BQWM7SUFJMUI7Ozs7T0FJRztJQUNILDBDQUFrQixhQUFDLE1BQWM7SUFJakM7OztPQUdHO0lBQ0gsdUNBQWU7SUFJZjs7O09BR0c7SUFDSCx3Q0FBZ0I7SUFJaEI7OztPQUdHO0lBQ0gseUNBQWlCO0lBSWpCOzs7T0FHRztJQUNILDJDQUFtQjtJQUluQjs7O09BR0c7SUFDSCxrREFBMEI7SUFJMUI7OztPQUdHO0lBQ0gsd0NBQWdCO0lBSWhCOzs7T0FHRztJQUNILHVDQUFlO0lBSWY7OztPQUdHO0lBQ0gsMENBQWtCO0lBSWxCOzs7T0FHRztJQUNILHdDQUFnQjtJQUloQjs7O09BR0c7SUFDSCxnREFBd0I7SUFJeEI7Ozs7T0FJRztJQUNILG1DQUFXLGFBQUMsTUFBYztJQVcxQixtQ0FBVyxhQUFDLE1BQWM7SUFXMUIsd0NBQWdCLGFBQUMsTUFBYztJQVUvQix1Q0FBZTswQkFyVGYsa0NBQU87Ozs7OzswQkFFUCxtQ0FBUTs7Ozs7OzBCQUVSLHlDQUFjOzs7Ozs7MEJBRWQsaUNBQU07Ozs7OzswQkFFTixvQ0FBUzs7Ozs7OzBCQUVULHlDQUFjOzs7Ozs7MEJBRWQsc0NBQVc7Ozs7Ozs7Ozs7d0JBOUhmO0VBZ0htQywwQkFBMEI7U0FBaEQsYUFBYTtBQThWMUIsTUFBTSxDQUFOLElBQVksY0FvQ1g7QUFwQ0QsV0FBWSxjQUFjO0lBQ3RCLDJEQUF5QyxDQUFBO0lBQ3pDLDJFQUFzQixDQUFBO0lBQ3RCLGlGQUF5QixDQUFBO0lBQ3pCLDZGQUErQixDQUFBO0lBQy9CLHFDQUFtQixDQUFBO0lBQ25CLHVDQUFxQixDQUFBO0lBQ3JCLHFDQUFtQixDQUFBO0lBQ25CLHFDQUFtQixDQUFBO0lBQ25CLCtCQUFhLENBQUE7SUFDYixxQ0FBbUIsQ0FBQTtJQUNuQixxQ0FBbUIsQ0FBQTtJQUNuQixxQ0FBbUIsQ0FBQTtJQUNuQixxQ0FBbUIsQ0FBQTtJQUNuQixxQ0FBbUIsQ0FBQTtJQUNuQiwrQkFBYSxDQUFBO0lBQ2IscUNBQW1CLENBQUE7SUFDbkIscUNBQW1CLENBQUE7SUFDbkIsdUNBQXFCLENBQUE7SUFDckIsbUNBQWlCLENBQUE7SUFDakIsdUZBQTRCLENBQUE7SUFDNUIsNEVBQXFCLENBQUE7SUFDckIsNEVBQXFCLENBQUE7SUFDckIsbUNBQWlCLENBQUE7SUFDakIsOENBQTRCLENBQUE7SUFDNUIseUVBQW1CLENBQUE7SUFDbkIsMkVBQW9CLENBQUE7SUFDcEIsdUVBQWtCLENBQUE7SUFDbEIsaUdBQStCLENBQUE7SUFDL0IsaUZBQXVCLENBQUE7SUFDdkIscUVBQWlCLENBQUE7SUFDakIsd0ZBQXNFLENBQUE7SUFDdEUsa0RBQWdDLENBQUE7SUFDaEMsd0RBQXNDLENBQUE7SUFDdEMsb0RBQWtDLENBQUE7SUFDbEMsNERBQTBDLENBQUE7QUFDOUMsQ0FBQyxFQXBDVyxjQUFjLEtBQWQsY0FBYyxRQW9DekI7QUFFRCxNQUFNLENBQU4sSUFBWSxPQUdYO0FBSEQsV0FBWSxPQUFPO0lBQ2YsOERBQXFCLENBQUE7SUFDckIsOERBQXFCLENBQUE7QUFDekIsQ0FBQyxFQUhXLE9BQU8sS0FBUCxPQUFPLFFBR2xCO0FBRUQsTUFBTSxDQUFOLElBQVksUUFjWDtBQWRELFdBQVksUUFBUTtJQUNoQiwrQkFBbUIsQ0FBQTtJQUNuQiwrQkFBbUIsQ0FBQTtJQUNuQix5QkFBYSxDQUFBO0lBQ2IsK0JBQW1CLENBQUE7SUFDbkIsK0JBQW1CLENBQUE7SUFDbkIsK0JBQW1CLENBQUE7SUFDbkIsK0JBQW1CLENBQUE7SUFDbkIsK0JBQW1CLENBQUE7SUFDbkIseUJBQWEsQ0FBQTtJQUNiLCtCQUFtQixDQUFBO0lBQ25CLCtCQUFtQixDQUFBO0lBQ25CLGlDQUFxQixDQUFBO0lBQ3JCLDZCQUFpQixDQUFBO0FBQ3JCLENBQUMsRUFkVyxRQUFRLEtBQVIsUUFBUSxRQWNuQjtBQUVELE1BQU0sQ0FBTixJQUFZLGdDQUtYO0FBTEQsV0FBWSxnQ0FBZ0M7SUFDeEMsNkZBQVcsQ0FBQTtJQUNYLHlHQUFpQixDQUFBO0lBQ2pCLGlIQUFxQixDQUFBO0lBQ3JCLCtHQUFvQixDQUFBO0FBQ3hCLENBQUMsRUFMVyxnQ0FBZ0MsS0FBaEMsZ0NBQWdDLFFBSzNDO0FBbUJELE1BQU0sQ0FBTixJQUFZLG1CQUlYO0FBSkQsV0FBWSxtQkFBbUI7SUFDM0IscUpBQXFELENBQUE7SUFDckQsd0pBQXVELENBQUE7SUFDdkQseUVBQWtELENBQUE7QUFDdEQsQ0FBQyxFQUpXLG1CQUFtQixLQUFuQixtQkFBbUIsUUFJOUI7QUFjRCxNQUFNLENBQU4sSUFBWSxjQU9YO0FBUEQsV0FBWSxjQUFjO0lBQ3RCLHFDQUFtQixDQUFBO0lBQ25CLHFDQUFtQixDQUFBO0lBQ25CLHFDQUFtQixDQUFBO0lBQ25CLHFDQUFtQixDQUFBO0lBQ25CLHFDQUFtQixDQUFBO0lBQ25CLHFDQUFtQixDQUFBO0FBQ3ZCLENBQUMsRUFQVyxjQUFjLEtBQWQsY0FBYyxRQU96QjtBQUNELE1BQU0sQ0FBTixJQUFZLFdBRVg7QUFGRCxXQUFZLFdBQVc7SUFDbkIsNENBQTZCLENBQUE7QUFDakMsQ0FBQyxFQUZXLFdBQVcsS0FBWCxXQUFXLFFBRXRCO0FBQ0QsTUFBTSxDQUFOLElBQVksc0NBd0JYO0FBeEJELFdBQVksc0NBQXNDO0lBQzlDLG1JQUEwQixDQUFBO0lBQzFCLDJIQUFzQixDQUFBO0lBQ3RCLG1JQUEwQixDQUFBO0lBQzFCLCtJQUFnQyxDQUFBO0lBQ2hDLCtJQUFnQyxDQUFBO0lBQ2hDLDZJQUErQixDQUFBO0lBQy9CLDhEQUFvQixDQUFBO0lBQ3BCLDZEQUFtQixDQUFBO0lBQ25CLDZEQUFtQixDQUFBO0lBQ25CLHVGQUE2QyxDQUFBO0lBQzdDLHFGQUEyQyxDQUFBO0lBQzNDLDZGQUFtRCxDQUFBO0lBQ25ELHFGQUEyQyxDQUFBO0lBQzNDLHNFQUE0QixDQUFBO0lBQzVCLDhJQUE4QixDQUFBO0lBQzlCLGdKQUErQixDQUFBO0lBQy9CLHlIQUFtQixDQUFBO0lBQ25CLDJIQUFvQixDQUFBO0lBQ3BCLGlJQUF1QixDQUFBO0lBQ3ZCLDRFQUFrQyxDQUFBO0lBQ2xDLG9GQUEwQyxDQUFBO0lBQzFDLDBFQUFnQyxDQUFBO0lBQ2hDLGdGQUFzQyxDQUFBO0FBQzFDLENBQUMsRUF4Qlcsc0NBQXNDLEtBQXRDLHNDQUFzQyxRQXdCakQ7QUErQkQsTUFBTSxDQUFOLElBQVksb0JBZ0RYO0FBaERELFdBQVksb0JBQW9CO0lBQzVCLHdDQUFnQixDQUFBO0lBQ2hCLHFDQUFhLENBQUE7SUFDYix3Q0FBZ0IsQ0FBQTtJQUNoQixzQ0FBYyxDQUFBO0lBQ2QsdUNBQWUsQ0FBQTtJQUNmLG9DQUFZLENBQUE7SUFDWixzQ0FBYyxDQUFBO0lBQ2QscURBQTZCLENBQUE7SUFDN0IscUNBQWEsQ0FBQTtJQUNiLG9DQUFZLENBQUE7SUFDWix1Q0FBZSxDQUFBO0lBQ2Ysc0NBQWMsQ0FBQTtJQUNkLHNDQUFjLENBQUE7SUFDZCxxQ0FBYSxDQUFBO0lBQ2IscUNBQWEsQ0FBQTtJQUNiLHVDQUFlLENBQUE7SUFDZixvQ0FBWSxDQUFBO0lBQ1osd0NBQWdCLENBQUE7SUFDaEIsb0NBQVksQ0FBQTtJQUNaLHFDQUFhLENBQUE7SUFDYixvQ0FBWSxDQUFBO0lBQ1osc0NBQWMsQ0FBQTtJQUNkLHlDQUFpQixDQUFBO0lBQ2pCLG9DQUFZLENBQUE7SUFDWixxQ0FBYSxDQUFBO0lBQ2IsdUNBQWUsQ0FBQTtJQUNmLG9DQUFZLENBQUE7SUFDWixzQ0FBYyxDQUFBO0lBQ2Qsb0NBQVksQ0FBQTtJQUNaLHNDQUFjLENBQUE7SUFDZCx3Q0FBZ0IsQ0FBQTtJQUNoQixzQ0FBYyxDQUFBO0lBQ2QscUNBQWEsQ0FBQTtJQUNiLHlDQUFpQixDQUFBO0lBQ2pCLHNDQUFjLENBQUE7SUFDZCxzQ0FBYyxDQUFBO0lBQ2QsdUNBQWUsQ0FBQTtJQUNmLHNDQUFjLENBQUE7SUFDZCxzQ0FBYyxDQUFBO0lBQ2QscUNBQWEsQ0FBQTtJQUNiLHNDQUFjLENBQUE7SUFDZCxvQ0FBWSxDQUFBO0lBQ1osc0NBQWMsQ0FBQTtJQUNkLG1DQUFXLENBQUE7SUFDWCxzQ0FBYyxDQUFBO0lBQ2QscUNBQWEsQ0FBQTtJQUNiLHlDQUFpQixDQUFBO0FBQ3JCLENBQUMsRUFoRFcsb0JBQW9CLEtBQXBCLG9CQUFvQixRQWdEL0I7QUEwQ0QsTUFBTSxDQUFOLElBQVksMEJBS1g7QUFMRCxXQUFZLDBCQUEwQjtJQUNsQyxtR0FBb0IsQ0FBQTtJQUNwQixtR0FBb0IsQ0FBQTtJQUNwQixpR0FBbUIsQ0FBQTtJQUNuQixxR0FBdUIsQ0FBQTtBQUMzQixDQUFDLEVBTFcsMEJBQTBCLEtBQTFCLDBCQUEwQixRQUtyQztBQVFELE1BQU0sQ0FBTixJQUFZLGNBOERYO0FBOURELFdBQVksY0FBYztJQUN0QiwyRUFBb0IsQ0FBQTtJQUNwQiw2RUFBcUIsQ0FBQTtJQUNyQiwyRUFBb0IsQ0FBQTtJQUNwQix5RUFBbUIsQ0FBQTtJQUNuQixxRkFBeUIsQ0FBQTtJQUN6QixpRkFBdUIsQ0FBQTtJQUN2QiwyRkFBNEIsQ0FBQTtJQUM1Qiw2REFBMkMsQ0FBQTtJQUMzQyw2REFBMkMsQ0FBQTtJQUMzQywrRUFBc0IsQ0FBQTtJQUN0QixtRkFBd0IsQ0FBQTtJQUN4Qiw2RUFBcUIsQ0FBQTtJQUNyQixxQ0FBbUIsQ0FBQTtJQUNuQix5Q0FBdUIsQ0FBQTtJQUN2Qix5Q0FBdUIsQ0FBQTtJQUN2QixzREFBb0MsQ0FBQTtJQUNwQyxzREFBb0MsQ0FBQTtJQUNwQyx5Q0FBdUIsQ0FBQTtJQUN2Qix5Q0FBdUIsQ0FBQTtJQUN2Qix5Q0FBdUIsQ0FBQTtJQUN2Qix5Q0FBdUIsQ0FBQTtJQUN2Qix5Q0FBdUIsQ0FBQTtJQUN2Qix5Q0FBdUIsQ0FBQTtJQUN2QiwwQ0FBd0IsQ0FBQTtJQUN4Qix5Q0FBdUIsQ0FBQTtJQUN2Qix5Q0FBdUIsQ0FBQTtJQUN2QixxREFBbUMsQ0FBQTtJQUNuQyxxREFBbUMsQ0FBQTtJQUNuQyxpREFBK0IsQ0FBQTtJQUMvQixpREFBK0IsQ0FBQTtJQUMvQix3REFBc0MsQ0FBQTtJQUN0QywwREFBd0MsQ0FBQTtJQUN4QyxzREFBb0MsQ0FBQTtJQUNwQyx3REFBc0MsQ0FBQTtJQUN0QyxzREFBb0MsQ0FBQTtJQUNwQyxzREFBb0MsQ0FBQTtJQUNwQyxzREFBb0MsQ0FBQTtJQUNwQyxzREFBb0MsQ0FBQTtJQUNwQyxzREFBb0MsQ0FBQTtJQUNwQyxzREFBb0MsQ0FBQTtJQUNwQyxzREFBb0MsQ0FBQTtJQUNwQyxzREFBb0MsQ0FBQTtJQUNwQyx5RUFBdUQsQ0FBQTtJQUN2RCxpRkFBK0QsQ0FBQTtJQUMvRCwrRUFBNkQsQ0FBQTtJQUM3RCw2RUFBMkQsQ0FBQTtJQUMzRCwyRUFBeUQsQ0FBQTtJQUN6RCx5RUFBdUQsQ0FBQTtJQUN2RCx5RUFBdUQsQ0FBQTtJQUN2RCx5RUFBdUQsQ0FBQTtJQUN2RCx5RUFBdUQsQ0FBQTtJQUN2RCx5RUFBdUQsQ0FBQTtJQUN2RCwrRUFBNkQsQ0FBQTtJQUM3RCw2RUFBMkQsQ0FBQTtJQUMzRCwyRUFBeUQsQ0FBQTtJQUN6RCw0Q0FBMEIsQ0FBQTtJQUMxQiw4Q0FBNEIsQ0FBQTtJQUM1QixtRUFBZ0IsQ0FBQTtJQUNoQixpRUFBZSxDQUFBO0lBQ2YsNkVBQXFCLENBQUE7SUFDckIsaUVBQWUsQ0FBQTtBQUNuQixDQUFDLEVBOURXLGNBQWMsS0FBZCxjQUFjLFFBOER6QjtBQUVELE1BQU0sQ0FBTixJQUFZLE1BYVg7QUFiRCxXQUFZLE1BQU07SUFDZCxzQ0FBWSxDQUFBO0lBQ1osK0NBQWtCLENBQUE7SUFDbEIsMENBQWUsQ0FBQTtJQUNmLHNDQUFVLENBQUE7SUFDViwyQ0FBZ0IsQ0FBQTtJQUNoQiw2Q0FBaUIsQ0FBQTtJQUNqQiw4Q0FBaUIsQ0FBQTtJQUNqQiw4Q0FBZ0IsQ0FBQTtJQUNoQiwwQ0FBYSxDQUFBO0lBQ2IsMkNBQWdCLENBQUE7SUFDaEIsNkNBQWlCLENBQUE7SUFDakIsaURBQWUsQ0FBQTtBQUNuQixDQUFDLEVBYlcsTUFBTSxLQUFOLE1BQU0sUUFhakI7QUFDRCxNQUFNLENBQU4sSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ2pCLDZDQUFVLENBQUE7SUFDVix5Q0FBUSxDQUFBO0lBQ1IsK0RBQW1CLENBQUE7QUFDdkIsQ0FBQyxFQUpXLFNBQVMsS0FBVCxTQUFTLFFBSXBCO0FBRUQsTUFBTSxDQUFOLElBQVksVUFVWDtBQVZELFdBQVksVUFBVTtJQUNsQixxRkFBK0IsQ0FBQTtJQUMvQiwrRUFBNEIsQ0FBQTtJQUM1QiwrRkFBb0MsQ0FBQTtJQUNwQyxpRkFBNkIsQ0FBQTtJQUM3Qix1RkFBZ0MsQ0FBQTtJQUNoQywrREFBb0IsQ0FBQTtJQUNwQixpRkFBNkIsQ0FBQTtJQUM3Qiw2RkFBbUMsQ0FBQTtJQUNuQyw2REFBbUIsQ0FBQTtBQUN2QixDQUFDLEVBVlcsVUFBVSxLQUFWLFVBQVUsUUFVckI7QUFrQkQsTUFBTSxDQUFOLElBQVksZUFzQlg7QUF0QkQsV0FBWSxlQUFlO0lBQ3ZCLHVHQUFtQyxDQUFBO0lBQ25DLHFHQUFrQyxDQUFBO0lBQ2xDLHlHQUFvQyxDQUFBO0lBQ3BDLG1HQUFpQyxDQUFBO0lBQ2pDLHFGQUEwQixDQUFBO0lBQzFCLDJGQUE2QixDQUFBO0lBQzdCLCtFQUF1QixDQUFBO0lBQ3ZCLDJGQUE2QixDQUFBO0lBQzdCLG1HQUFpQyxDQUFBO0lBQ2pDLHlGQUE0QixDQUFBO0lBQzVCLHVHQUFtQyxDQUFBO0lBQ25DLDJGQUE2QixDQUFBO0lBQzdCLCtGQUErQixDQUFBO0lBQy9CLHVHQUFtQyxDQUFBO0lBQ25DLDJGQUE2QixDQUFBO0lBQzdCLHlGQUE0QixDQUFBO0lBQzVCLHFGQUEwQixDQUFBO0lBQzFCLGlHQUFnQyxDQUFBO0lBQ2hDLGlHQUFnQyxDQUFBO0lBQ2hDLHlFQUFvQixDQUFBO0lBQ3BCLHVFQUFtQixDQUFBO0FBQ3ZCLENBQUMsRUF0QlcsZUFBZSxLQUFmLGVBQWUsUUFzQjFCO0FBT0QsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN2QixtRUFBZSxDQUFBO0lBQ2YsaUVBQWMsQ0FBQTtJQUNkLHlFQUFrQixDQUFBO0FBQ3RCLENBQUMsRUFKVyxlQUFlLEtBQWYsZUFBZSxRQUkxQjtBQUVELE1BQU0sQ0FBTixJQUFZLGNBR1g7QUFIRCxXQUFZLGNBQWM7SUFDdEIsb0NBQWtCLENBQUE7SUFDbEIsMENBQXdCLENBQUE7QUFDNUIsQ0FBQyxFQUhXLGNBQWMsS0FBZCxjQUFjLFFBR3pCO0FBdUJELE1BQU0sQ0FBTixJQUFZLDBCQWtCWDtBQWxCRCxXQUFZLDBCQUEwQjtJQUNsQyxxSEFBK0IsQ0FBQTtJQUMvQiwrSEFBb0MsQ0FBQTtJQUNwQyxtSEFBOEIsQ0FBQTtJQUM5Qix5SEFBaUMsQ0FBQTtJQUNqQyxxSEFBNkIsQ0FBQTtJQUM3QixxSEFBNkIsQ0FBQTtJQUM3QixtSEFBNEIsQ0FBQTtJQUM1QixpSEFBMkIsQ0FBQTtJQUMzQix1SEFBOEIsQ0FBQTtJQUM5Qiw2R0FBeUIsQ0FBQTtJQUN6Qiw2R0FBeUIsQ0FBQTtJQUN6QiwrR0FBMEIsQ0FBQTtJQUMxQix1SEFBOEIsQ0FBQTtJQUM5Qix1SEFBOEIsQ0FBQTtJQUM5QixnSEFBMkIsQ0FBQTtJQUMzQixnSEFBMkIsQ0FBQTtJQUMzQixnSUFBbUMsQ0FBQTtBQUN2QyxDQUFDLEVBbEJXLDBCQUEwQixLQUExQiwwQkFBMEIsUUFrQnJDO0FBRUQsTUFBTSxDQUFOLElBQVksYUF3Qlg7QUF4QkQsV0FBWSxhQUFhO0lBQ3JCLHdEQUFZLENBQUE7SUFDWix1REFBVyxDQUFBO0lBQ1gsMkRBQWEsQ0FBQTtJQUNiLG1EQUFTLENBQUE7SUFDVCx5REFBWSxDQUFBO0lBQ1osbUVBQWlCLENBQUE7SUFDakIsMkVBQXFCLENBQUE7SUFDckIsdURBQVcsQ0FBQTtJQUNYLHlEQUFZLENBQUE7SUFDWix1RUFBbUIsQ0FBQTtJQUNuQixtRUFBaUIsQ0FBQTtJQUNqQixvRkFBMEIsQ0FBQTtJQUMxQiwwRUFBcUIsQ0FBQTtJQUNyQixnRUFBZ0IsQ0FBQTtJQUNoQixrRUFBaUIsQ0FBQTtJQUNqQixrRUFBaUIsQ0FBQTtJQUNqQix3RkFBNEIsQ0FBQTtJQUM1QixvRkFBMEIsQ0FBQTtJQUMxQiw4RUFBdUIsQ0FBQTtJQUN2Qiw0REFBYyxDQUFBO0lBQ2Qsb0VBQWtCLENBQUE7SUFDbEIsd0VBQW9CLENBQUE7SUFDcEIsb0VBQWtCLENBQUE7QUFDdEIsQ0FBQyxFQXhCVyxhQUFhLEtBQWIsYUFBYSxRQXdCeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgQ29weXJpZ2h0IDIwMjMuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxyXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiAgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiBcIkhNU01MUGx1Z2luXCIsXHJcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLW1sbGFuZ3VhZ2VcIiwgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgICBwbHVnaW5SZWY6IFwiSE1TTUxQbHVnaW5cIiwgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxyXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLCAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TTUxQbHVnaW4gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiAge1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBGRUFUVVJFID0gRkVBVFVSRTtcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgTEFOR1VBR0UgPSBMQU5HVUFHRTtcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgTUxUdHNDb25zdGFudHMgPSBNTFR0c0NvbnN0YW50cztcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgQ29sb3JzID0gQ29sb3JzO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBSZWN0U3R5bGUgPSBSZWN0U3R5bGU7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIE1MUnR0TGFuZ3VhZ2VzID0gTUxSdHRMYW5ndWFnZXM7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIE1MUnR0U2NlbmVzID0gTUxSdHRTY2VuZXM7XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBJdCBzZXRzIEFwaSBLZXkgb3IgYWNjZXNzIHRva2VuIGZvciBhcHBsaWNhdGlvbi5cclxuICAgICAqIEBwYXJhbSAge2NvbmZpZ1JlcX0gcGFyYW1zIFJlcHJlc2VudHMgeW91ciBBUElfS0VZLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIHNlcnZpY2VJbml0aWFsaXplcihwYXJhbXM6IGNvbmZpZ1JlcSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIEFuIGFwcCBpbmZvcm1hdGlvbiBjbGFzcyB1c2VkIHRvIHN0b3JlIGJhc2ljIGluZm9ybWF0aW9uIGFib3V0IGFwcHMgd2l0aCB0aGUgSE1TIENvcmUgTUwgU0RLIGludGVncmF0ZWQgYW5kIGNvbXBsZXRlIHRoZSBpbml0aWFsaXphdGlvbiBvZiBNTCBLaXQuIFdoZW4gdXNpbmcgY2xvdWQgc2VydmljZXMgb2YgdGhlIE1MIEtpdCwgeW91IG5lZWQgdG8gc2V0IHRoZSBhcGlLZXkgb2YgeW91ciBhcHAuXHJcbiAgICAgKiBAcGFyYW0gIHthcHBTZXR0aW5nUmVxfSBhcHBTZXR0aW5nUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBhcHBTZXR0aW5nKGFwcFNldHRpbmdSZXE6IGFwcFNldHRpbmdSZXEpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGEgZGF0YSBwcm9jZXNzaW5nIGxvY2F0aW9uIHdoZW4geW91IGNob29zZSB0byBtYW51YWxseSBtYW5hZ2UgYW5kIHNwZWNpZnkgc3VjaCBhIGxvY2F0aW9uLlxyXG4gICAgICogQHBhcmFtICB7cmVnaW9ufSByZWdpb24gUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyLlxyXG4gICAgICogICAgICAgICAqIFJFR0lPTl9EUl9VTktOT1dOID0gMTAwMSxcclxuICAgICAgICAgICAgICAgKiBSRUdJT05fRFJfQ0hJTkEgPSAxMDAyLFxyXG4gICAgICAgICAgICAgICAqIFJFR0lPTl9EUl9SVVNTSUEgPSAxMDA1LFxyXG4gICAgICAgICAgICAgICAqIFJFR0lPTl9EUl9HRVJNQU4gPSAxMDA2LFxyXG4gICAgICAgICAgICAgICAqIFJFR0lPTl9EUl9TSU5HQVBPUkUgPSAxMDA3IFxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIHNldFVzZXJSZWdpb24ocmVnaW9uOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRhaW5zIHRoZSBjb3VudHJ5L3JlZ2lvbiBjb2RlIG9mIHRoZSBkYXRhIHByb2Nlc3NpbmcgbG9jYXRpb24geW91IGhhdmUgc3BlY2lmaWVkIHdoZW4geW91IGNob29zZSB0byBtYW51YWxseSBtYW5hZ2UgYW5kIHNwZWNpZnkgc3VjaCBhIGxvY2F0aW9uLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxTdHJpbmc+XHJcbiAgICAgKi9cclxuICAgIGdldENvdW50cnlDb2RlKCk6IFByb21pc2U8U3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgc2VydmljZSBlbmFibGUgbG9nZ2VyIHNlcnZpY2UuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgc2VydmljZSBkaXNhYmxlIGxvZ2dlciBzZXJ2aWNlLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIGRpc2FibGVMb2dnZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gICAgcGx1Z2luTmFtZTogXCJITVNNTExhbmd1YWdlXCIsXHJcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLW1sbGFuZ3VhZ2VcIiwgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgICBwbHVnaW5SZWY6IFwiSE1TTUxMYW5ndWFnZVwiLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNNTExhbmd1YWdlIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBGRUFUVVJFID0gRkVBVFVSRTtcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgTEFOR1VBR0UgPSBMQU5HVUFHRTtcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgTUxUdHNDb25zdGFudHMgPSBNTFR0c0NvbnN0YW50cztcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgQ29sb3JzID0gQ29sb3JzO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBSZWN0U3R5bGUgPSBSZWN0U3R5bGU7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIE1MUnR0TGFuZ3VhZ2VzID0gTUxSdHRMYW5ndWFnZXM7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIE1MUnR0U2NlbmVzID0gTUxSdHRTY2VuZXM7XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtICB7c3luY1Byb2JhYmlsaXR5RGV0ZWN0fSBzeW5jUmVxdWVzdExvY2FsTGFuZ0RldGVjdCBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPE1MUmVtb3RlTGFuZ0RldGVjdGlvbj5cclxuICAgICAqL1xyXG4gICAgc3luY1Byb2JhYmlsaXR5RGV0ZWN0KFxyXG4gICAgICAgIHN5bmNQcm9iYWJpbGl0eURldGVjdDogc3luY1JlcXVlc3RMb2NhbExhbmdEZXRlY3RcclxuICAgICk6IFByb21pc2U8TUxSZW1vdGVMYW5nRGV0ZWN0aW9uPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtICB7c3luY1Byb2JhYmlsaXR5RGV0ZWN0fSBzeW5jUHJvYmFiaWxpdHlEZXRlY3QgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxTdHJpbmc+XHJcbiAgICAgKi9cclxuICAgIHN5bmNGaXJzdEJlc3REZXRlY3QoXHJcbiAgICAgICAgc3luY1Byb2JhYmlsaXR5RGV0ZWN0OiBzeW5jUmVxdWVzdExvY2FsTGFuZ0RldGVjdFxyXG4gICAgKTogUHJvbWlzZTxTdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogSW1wbGVtZW50cyBvbi1jbG91ZCB0ZXh0IHRyYW5zbGF0aW9uLlxyXG4gICAgICogQHBhcmFtICB7cmVtb3RldHJhbnNsYXRlUmVxfSByZW1vdGV0cmFuc2xhdGVSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciB0cmFuc2xhdGUuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgcmVtb3RlVHJhbnNsYXRvcihyZW1vdGV0cmFuc2xhdGVSZXE6IHJlbW90ZXRyYW5zbGF0ZVJlcSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogSW1wbGVtZW50cyBvbi1jbG91ZCB0ZXh0IHRyYW5zbGF0aW9uLlxyXG4gICAgICogQHBhcmFtICB7bG9jYWx0cmFuc2xhdGVSZXF9IGxvY2FsdHJhbnNsYXRlUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgdHJhbnNsYXRlLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIGxvY2FsVHJhbnNsYXRvcihsb2NhbHRyYW5zbGF0ZVJlcTogbG9jYWx0cmFuc2xhdGVSZXEpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbnMgYWxsIGxhbmd1YWdlcyBzdXBwb3J0ZWQgZm9yIGxvY2FsIHRyYW5zbGF0aW9uLlxyXG4gICAgICogQHBhcmFtICB7bG9jYWxBbGxMYW5nUmVxfSBsb2NhbEFsbExhbmdSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciB0cmFuc2xhdGUuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgdHJhbnNsYXRvckxvY2FsQWxsTGFuZyhsb2NhbEFsbExhbmdSZXE6IGxvY2FsQWxsTGFuZ1JlcSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyBhbGwgbGFuZ3VhZ2VzIHN1cHBvcnRlZCBmb3Igb24tY2xvdWQgdHJhbnNsYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gIHtyZW1vdGVBbGxMYW5nUmVxfSByZW1vdGVBbGxMYW5nUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgdHJhbnNsYXRlLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIHRyYW5zbGF0b3JSZW1vdGVBbGxMYW5nKHJlbW90ZUFsbExhbmdSZXE6IHJlbW90ZUFsbExhbmdSZXEpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIERldGVjdHMgbGFuZ3VhZ2VzIG9uIHRoZSBjbG91ZC5cclxuICAgICAqIEBwYXJhbSAge3JlbW90ZUxhbmdEZXRlY3Rpb25SZXF9IHJlbW90ZUxhbmdEZXRlY3Rpb25SZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBsYW5nIGRldGVjdGlvbi5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8UmVtb3RlTGFuZ0RldGVjdGlvbkFuYWx5c2VyPiB8IFByb21pc2U8bGFuZ0RldGVjdGlvbldpdGhGaXJzdERldGVjdD5cclxuICAgICAqL1xyXG4gICAgcmVtb3RlTGFuZ0RldGVjdGlvbihcclxuICAgICAgICByZW1vdGVMYW5nRGV0ZWN0aW9uUmVxOiByZW1vdGVMYW5nRGV0ZWN0aW9uUmVxXHJcbiAgICApOiBQcm9taXNlPE1MUmVtb3RlTGFuZ0RldGVjdGlvbiB8IE1MbGFuZ0RldGVjdGlvbldpdGhGaXJzdERldGVjdD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIERldGVjdHMgbGFuZ3VhZ2VzIG9uIGxvY2FsLlxyXG4gICAgICogQHBhcmFtICB7bG9jYWxMYW5nRGV0ZWN0aW9uUmVxfSBsb2NhbExhbmdEZXRlY3Rpb25SZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBsYW5nIGRldGVjdGlvbi5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiB8IFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBsb2NhbExhbmdEZXRlY3Rpb24oXHJcbiAgICAgICAgbG9jYWxMYW5nRGV0ZWN0aW9uUmVxOiBsb2NhbExhbmdEZXRlY3Rpb25SZXFcclxuICAgICk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIERvd25sb2FkIGxhbmd1YWdlIG1vZGVsLlxyXG4gICAgICogQHBhcmFtICB7ZG93bmxvYWRUcmFuc2xhdGVSZXF9IGRvd25sb2FkVHJhbnNsYXRlUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgZG93bmxvYWQgbW9kZWwuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgdHJhbnNsYXRvckRvd25sb2FkTW9kZWwoXHJcbiAgICAgICAgZG93bmxvYWRUcmFuc2xhdGVSZXE6IGRvd25sb2FkVHJhbnNsYXRlUmVxXHJcbiAgICApOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIEZvciBkZWxldGUgbGFuZ3VhZ2UgbW9kZWwuXHJcbiAgICAgKiBAcGFyYW0gIHtkZWxldGVUcmFuc2xhdGVSZXF9IGRlbGV0ZVRyYW5zbGF0ZVJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIGRlbGV0ZSBtb2RlbC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICB0cmFuc2xhdG9yRGVsZXRlTW9kZWwoXHJcbiAgICAgICAgZGVsZXRlVHJhbnNsYXRlUmVxOiBkZWxldGVUcmFuc2xhdGVSZXFcclxuICAgICk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCB0cmFuc2xhdG9yIHNlcnZpY2UuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgc3RvcFRyYW5zbGF0b3JTZXJ2aWNlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJuIFJUVCBzZXR0aW5nLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIGdldFJUVFNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIFRUUyBzZXR0aW5nLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIGdldFRUU1NldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIEFGVCBzZXR0aW5nLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIGdldEFGVFNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIExhbmcgRGV0ZWN0aW9uIHNldHRpbmcuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgZ2V0TGFuZ0RldGVjdGlvblNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wIGxhbmcgZGV0ZWN0aW9uIHNlcnZpY2UuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgc3RvcExhbmdEZXRlY3Rpb25TZXJ2aWNlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHNvdW5kIGRldGVjdGlvbiBzZXJ2aWNlIGNhbiBkZXRlY3Qgc291bmQgZXZlbnRzIGluIG9ubGluZSAocmVhbC10aW1lIHJlY29yZGluZykgbW9kZS4gVGhlIGRldGVjdGVkIHNvdW5kIGV2ZW50cyBjYW4gaGVscCB5b3UgcGVyZm9ybSBzdWJzZXF1ZW50IGFjdGlvbnMuXHJcbiAgICAgKiBAcGFyYW0gIHtzb3VuZERlY3RSZXF9IHNvdW5kRGVjdFJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIFNvdW5kIERldGVjdGlvbiBhbmFseXNlci5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBzb3VuZERlY3RBbmFseXNlcihzb3VuZERlY3RSZXE6IHNvdW5kRGVjdFJlcSk6IFByb21pc2U8TUxTb3VuZERlY3RSZXN1bHQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUVFMgY2FuIGNvbnZlcnQgdGV4dCBpbmZvcm1hdGlvbiBpbnRvIGF1ZGlvIG91dHB1dC4gUmljaCB0aW1icmVzLCBhbmQgdm9sdW1lIGFuZCBzcGVlZCBvcHRpb25zIGFyZSBzdXBwb3J0ZWQgdG8gcHJvZHVjZSBtb3JlIG5hdHVyYWwgc291bmRzLlxyXG4gICAgICogQHBhcmFtICB7dHRzUmVxfSB0dHNSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciB0ZXh0IHRvIHNwZWVjaC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8VHRzQW5hbHlzZXI+XHJcbiAgICAgKi9cclxuICAgIHR0c0FuYWx5c2VyKHR0c1JlcTogdHRzUmVxKTogUHJvbWlzZTxNTFR0c1Jlc3VsdD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRUUyBjYW4gY29udmVydCB0ZXh0IGluZm9ybWF0aW9uIGludG8gYXVkaW8gb3V0cHV0IG9mZmxpbmUuIFJpY2ggdGltYnJlcywgYW5kIHZvbHVtZSBhbmQgc3BlZWQgb3B0aW9ucyBhcmUgc3VwcG9ydGVkIHRvIHByb2R1Y2UgbW9yZSBuYXR1cmFsIHNvdW5kcy5cclxuICAgICAqIEBwYXJhbSAge3R0c1JlcX0gdHRzUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgdGV4dCB0byBzcGVlY2guXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPFR0c0FuYWx5c2VyPlxyXG4gICAgICovXHJcbiAgICB0dHNPZmZsaW5lQW5hbHlzZXIodHRzUmVxOiB0dHNSZXEpOiBQcm9taXNlPE1MVHRzUmVzdWx0PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBzZXJ2aWNlIHN0b3AgdGV4dCB0byBzcGVlY2ggKFRUUykgc2VydmljZS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICB0dHNBbmFseXNlclN0b3AoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHNlcnZpY2UgcGF1c2VzIHRleHQgdG8gc3BlZWNoIChUVFMpIGFuYWx5c2VyLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIHR0c0FuYWx5c2VyUGF1c2UoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHNlcnZpY2UgY29udGludWVzIHRleHQgdG8gc3BlZWNoIChUVFMpIGFuYWx5c2VyLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIHR0c0FuYWx5c2VyUmVzdW1lKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBzZXJ2aWNlIHNodXRkb3duIHRleHQgdG8gc3BlZWNoIChUVFMpIGFuYWx5c2VyLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIHR0c0FuYWx5c2Vyc2h1dERvd24oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIFRUUyBEb3dubG9hZCBzZXR0aW5nLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIHR0c0FuYWx5c2VyRG93bmxvYWRTZXR0aW5nKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBzZXJ2aWNlIGNsb3NlIEFGVCBhbmFseXNlci5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBhZnRBbmFseXNlckNsb3NlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBzZXJ2aWNlIHN0b3AgQUZUIGFuYWx5c2VyLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIGFzckFuYWx5c2VyU3RvcCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgc2VydmljZSBkZXN0cm95IEFGVCBhbmFseXNlci5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBhZnRBbmFseXNlckRlc3Ryb3koKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHNlcnZpY2UgcGF1c2UgQUZUIGFuYWx5c2VyLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIGFmdEFuYWx5c2VyUGF1c2UoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHNlcnZpY2UgZGVzdHJveSBTb3VuZCBEZXRlY3Rpb24gYW5hbHlzZXIuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgc291bmREZWN0QW5hbHlzZXJEZXN0cm95KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGF1ZGlvIGZpbGUgdHJhbnNjcmlwdGlvbiBzZXJ2aWNlIGNhbiBjb252ZXJ0IGFuIGF1ZGlvIGZpbGUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIDYwIHNlY29uZHMgaW50byBhIHRleHQgZmlsZS4gQ3VycmVudGx5LCBDaGluZXNlIGFuZCBFbmdsaXNoIGFyZSBzdXBwb3J0ZWQuXHJcbiAgICAgKiBAcGFyYW0gIHthZnRSZXF9IGFmdFJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIGFmdCBhbmFseXNlci5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8QWZ0QW5hbHlzZXI+XHJcbiAgICAgKi9cclxuICAgIGFmdEFuYWx5c2VyKGFmdFJlcTogYWZ0UmVxKTogUHJvbWlzZTxNTEFmdFJlc3VsdD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQVNSIGNhbiByZWNvZ25pemUgc3BlZWNoIG5vdCBsb25nZXIgdGhhbiA2MHMgYW5kIGNvbnZlcnQgdGhlIGlucHV0IHNwZWVjaCBpbnRvIHRleHQgaW4gcmVhbCB0aW1lLlxyXG4gICAgICogQHBhcmFtICB7YXNyUmVxfSBhc3JSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBhc3IgYW5hbHlzZXIuXHJcbiAgICAgKiBAcGFyYW0gIHthbnl9IHN1Y2Nlc3MgQSBjYWxsYmFjayBmdW5jdGlvbi4gSXQgaXMgY2FsbGVkIHdoZW4gZnVuY3Rpb24gaXMgZXhlY3V0ZWQgc3VjY2Vzc2Z1bGx5LiBJdCByZXR1cm5zIHRoZSByZXN1bHRzIG9mIHRleHQuXHJcbiAgICAgKiBAcGFyYW0gIHthbnl9IGVycm9yIEEgY2FsbGJhY2sgZnVuY3Rpb24uIEl0IGlzIGNhbGxlZCB3aGVuIGZ1bmN0aW9uIGlzIGZhaWxlZC5cclxuICAgICAqIEByZXR1cm5zIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxyXG4gICAgYXNyQW5hbHlzZXIoYXNyUmVxOiBhc3JSZXEpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVhbC10aW1lIHRyYW5zY3JpcHRpb24gZW5hYmxlcyB5b3VyIGFwcCB0byBjb252ZXJ0IGxvbmcgc3BlZWNoIChubyBsb25nZXIgdGhhbiA1IGhvdXJzKSBpbnRvIHRleHQgaW4gcmVhbCB0aW1lLiBUaGUgZ2VuZXJhdGVkIHRleHQgY29udGFpbnMgcHVuY3R1YXRpb24gbWFya3MgYW5kIHRpbWVzdGFtcHMuXHJcbiAgICAgKiBAcGFyYW0gIHtydHRSZXF9IHJ0dFJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIHJ0dCBhbmFseXNlci5cclxuICAgICAqIEBwYXJhbSAge2FueX0gc3VjY2VzcyBBIGNhbGxiYWNrIGZ1bmN0aW9uLiBJdCBpcyBjYWxsZWQgd2hlbiBmdW5jdGlvbiBpcyBleGVjdXRlZCBzdWNjZXNzZnVsbHkuIEl0IHJldHVybnMgdGhlIHJlc3VsdHMgb2YgdGV4dC5cclxuICAgICAqIEBwYXJhbSAge2FueX0gZXJyb3IgQSBjYWxsYmFjayBmdW5jdGlvbi4gSXQgaXMgY2FsbGVkIHdoZW4gZnVuY3Rpb24gaXMgZmFpbGVkLlxyXG4gICAgICogQHJldHVybnMgY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXHJcbiAgICBydHRBbmFseXNlclN0YXJ0KHJ0dFJlcTogcnR0UmVxKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3AgUlRUIGFuYWx5c2VyXHJcbiAgICAgKiBAcGFyYW0gIHthbnl9IHN1Y2Nlc3MgQSBjYWxsYmFjayBmdW5jdGlvbi4gSXQgaXMgY2FsbGVkIHdoZW4gZnVuY3Rpb24gaXMgZXhlY3V0ZWQgc3VjY2Vzc2Z1bGx5LiBJdCByZXR1cm5zIHRoZSByZXN1bHRzIG9mIHRleHQuXHJcbiAgICAgKiBAcGFyYW0gIHthbnl9IGVycm9yIEEgY2FsbGJhY2sgZnVuY3Rpb24uIEl0IGlzIGNhbGxlZCB3aGVuIGZ1bmN0aW9uIGlzIGZhaWxlZC5cclxuICAgICAqIEByZXR1cm5zIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxyXG4gICAgcnR0QW5hbHlzZXJTdG9wKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBBUEkgS0VZXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGNvbmZpZ1JlcSB7XHJcbiAgICBhcGlLZXk6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBhcHBTZXR0aW5nUmVxIHtcclxuICAgIGFwaUtleT86IHN0cmluZyB8IG51bGw7XHJcbiAgICBhcHBsaWNhdGlvbklkPzogc3RyaW5nIHwgbnVsbDtcclxuICAgIGNlcnRGaW5nZXJwcmludD86IHN0cmluZyB8IG51bGw7XHJcbn1cclxuXHJcbi8vIEFGVCBBTkFMWVNFUlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBhZnRSZXEge1xyXG4gICAgYXVkaW9QYXRoOiBhbnk7XHJcbiAgICBhZnRTZXR0aW5nPzogQWZ0U2V0dGluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZnRTZXR0aW5nIHtcclxuICAgIGxhbmd1YWdlQ29kZT86IHN0cmluZyB8IG51bGw7XHJcbiAgICBwdW5jdHVhdGlvbkVuYWJsZWQ/OiBib29sZWFuIHwgbnVsbDtcclxuICAgIHRpbWVPZmZzZXQ/OiBib29sZWFuIHwgbnVsbDtcclxuICAgIHdvcmRUaW1lT2Zmc2V0RW5hYmxlZD86IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgc2VudGVuY2VUaW1lT2Zmc2V0RW5hYmxlZD86IGJvb2xlYW4gfCBudWxsO1xyXG59XHJcblxyXG4vLyBBU1IgQU5BTFlTRVJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgYXNyUmVxIHtcclxuICAgIGxhbmd1YWdlPzogTEFOR1VBR0UgfCBudWxsO1xyXG4gICAgZmVhdHVyZT86IEZFQVRVUkUgfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBNTEFzckNvbnN0YW50cyB7XHJcbiAgICBQVU5DVFVBVElPTl9FTkFCTEUgPSBcIlBVTkNUVUFUSU9OX0VOQUJMRVwiLFxyXG4gICAgRVJSX05PX05FVFdPUksgPSAxMTIwMixcclxuICAgIEVSUl9OT19VTkRFUlNUQU5EID0gMTEyMDQsXHJcbiAgICBFUlJfU0VSVklDRV9VTkFWQUlMQUJMRSA9IDExMjAzLFxyXG4gICAgRkVBVFVSRSA9IFwiRkVBVFVSRVwiLFxyXG4gICAgTEFOR1VBR0UgPSBcIkxBTkdVQUdFXCIsXHJcbiAgICBMQU5fRU5fVVMgPSBcImVuLVVTXCIsXHJcbiAgICBMQU5fRlJfRlIgPSBcImZyLUZSXCIsXHJcbiAgICBMQU5fWkggPSBcInpoXCIsXHJcbiAgICBMQU5fWkhfQ04gPSBcInpoLUNOXCIsXHJcbiAgICBMQU5fRVNfRVMgPSBcImVzLUVTXCIsXHJcbiAgICBMQU5fREVfREUgPSBcImRlLURFXCIsXHJcbiAgICBMQU5fUlVfUlUgPSBcInJ1LVJVXCIsXHJcbiAgICBMQU5fSVRfSVQgPSBcIml0LUlUXCIsXHJcbiAgICBMQU5fQVIgPSBcImFyXCIsXHJcbiAgICBMQU5fVEhfVEggPSBcInRoX1RIXCIsXHJcbiAgICBMQU5fTVNfTVkgPSBcIm1zX01ZXCIsXHJcbiAgICBMQU5fRklMX1BIID0gXCJmaWxfUEhcIixcclxuICAgIFR1cmtpc2ggPSBcInRyLVRSXCIsXHJcbiAgICBFUlJfSU5WQUxJREFURV9UT0tFTiA9IDExMjE5LFxyXG4gICAgRkVBVFVSRV9BTExJTk9ORSA9IDEyLFxyXG4gICAgRkVBVFVSRV9XT1JERkxVWCA9IDExLFxyXG4gICAgU0NFTkVTID0gXCJzY2VuZXNcIixcclxuICAgIFNDRU5FU19TSE9QUElORyA9IFwic2hvcHBpbmdcIixcclxuICAgIFNUQVRFX0xJU1RFTklORyA9IDEsXHJcbiAgICBTVEFURV9OT19ORVRXT1JLID0gNyxcclxuICAgIFNUQVRFX05PX1NPVU5EID0gMixcclxuICAgIFNUQVRFX05PX1NPVU5EX1RJTUVTX0VYQ0VFRCA9IDMsXHJcbiAgICBTVEFURV9OT19VTkRFUlNUQU5EID0gNixcclxuICAgIFNUQVRFX1dBSVRJTkcgPSA5LFxyXG4gICAgQUNUSU9OX0hNU19BU1JfU1BFRUNIID0gXCJjb20uaHVhd2VpLmhtcy5tbHNkay5hY3Rpb24uUkVDT0dOSVpFX1NQRUVDSFwiLFxyXG4gICAgV0FWRV9QQUlORV9FTkNPRElORyA9IFwiRU5DT0RJTkdcIixcclxuICAgIFdBVkVfUEFJTkVfU0FNUExFX1JBVEUgPSBcIlNBTVBMRV9SQVRFXCIsXHJcbiAgICBXQVZFX1BBSU5FX0JJVF9XSURUSCA9IFwiQklUX1dJRFRIXCIsXHJcbiAgICBXQVZFX1BBSU5FX0NIQU5ORUxfQ09VTlQgPSBcIkNIQU5ORUxfQ09VTlRcIixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRkVBVFVSRSB7XHJcbiAgICBGRUFUVVJFX0FMTElOT05FID0gMTIsXHJcbiAgICBGRUFUVVJFX1dPUkRGTFVYID0gMTEsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIExBTkdVQUdFIHtcclxuICAgIExBTl9FTl9VUyA9IFwiZW4tVVNcIixcclxuICAgIExBTl9GUl9GUiA9IFwiZnItRlJcIixcclxuICAgIExBTl9aSCA9IFwiemhcIixcclxuICAgIExBTl9aSF9DTiA9IFwiemgtQ05cIixcclxuICAgIExBTl9FU19FUyA9IFwiZXMtRVNcIixcclxuICAgIExBTl9ERV9ERSA9IFwiZGUtREVcIixcclxuICAgIExBTl9SVV9SVSA9IFwicnUtUlVcIixcclxuICAgIExBTl9JVF9JVCA9IFwiaXQtSVRcIixcclxuICAgIExBTl9BUiA9IFwiYXJcIixcclxuICAgIExBTl9USF9USCA9IFwidGhfVEhcIixcclxuICAgIExBTl9NU19NWSA9IFwibXNfTVlcIixcclxuICAgIExBTl9GSUxfUEggPSBcImZpbF9QSFwiLFxyXG4gICAgVHVya2lzaCA9IFwidHItVFJcIixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTUxEb2N1bWVudFNrZXdDb3JyZWN0aW9uQ29uc3RhbnQge1xyXG4gICAgU1VDQ0VTUyA9IDAsXHJcbiAgICBERVRFQ1RfRkFJTEVEID0gMSxcclxuICAgIENPUlJFQ1RJT05fRkFJTEVEID0gMixcclxuICAgIElNQUdFX0RBVEFfRVJST1IgPSAzLFxyXG59XHJcblxyXG4vL0xhbmcgRGV0ZWN0XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHJlbW90ZUxhbmdEZXRlY3Rpb25SZXEge1xyXG4gICAgc291cmNlVGV4dDogc3RyaW5nO1xyXG4gICAgdGFza01vZGU/OiBudW1iZXI7XHJcbiAgICB0cnVzdGVkVGhyZXNob2xkPzogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgbG9jYWxMYW5nRGV0ZWN0aW9uUmVxIHtcclxuICAgIHNvdXJjZVRleHQ6IHN0cmluZztcclxuICAgIHRydXN0ZWRUaHJlc2hvbGQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2Ugc3luY1JlcXVlc3RMb2NhbExhbmdEZXRlY3Qge1xyXG4gICAgc291cmNlVGV4dDogc3RyaW5nO1xyXG4gICAgdHJ1c3RlZFRocmVzaG9sZD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTUxMYW5ndWFnZURldGVjdGlvbiB7XHJcbiAgICBGSVJTVF9CRVNUX0RFVEVDVElPTl9MQU5HVUFHRV9UUlVTVEVEX1RIUkVTSE9MRCA9IDAuNSxcclxuICAgIFBST0JBQklMSVRZX0RFVEVDVElPTl9MQU5HVUFHRV9UUlVTVEVEX1RIUkVTSE9MRCA9IDAuMDEsXHJcbiAgICBVTkRFVEVDVElPTl9MQU5HVUFHRV9UUlVTVEVEX1RIUkVTSE9MRCA9IFwidW5rbm93blwiLFxyXG59XHJcblxyXG4vL1JUVFxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBydHRSZXEge1xyXG4gICAgbUxTcGVlY2hSZWFsVGltZVRyYW5zY3JpcHRpb25Db25maWc6IE1MU3BlZWNoUmVhbFRpbWVUcmFuc2NyaXB0aW9uQ29uZmlnO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxTcGVlY2hSZWFsVGltZVRyYW5zY3JpcHRpb25Db25maWcge1xyXG4gICAgbGFuZ3VhZ2U6IE1MUnR0TGFuZ3VhZ2VzIHwgbnVsbDtcclxuICAgIHB1bmN0dWF0aW9uRW5hYmxlOiBib29sZWFuIHwgbnVsbDtcclxuICAgIHdvcmRUaW1lT2Zmc2V0RW5hYmxlOiBib29sZWFuIHwgbnVsbDtcclxuICAgIHNlbnRlbmNlVGltZU9mZnNldEVuYWJsZTogYm9vbGVhbiB8IG51bGw7XHJcbiAgICBzY2VuZXM/OiBNTFJ0dFNjZW5lcyB8IG51bGw7XHJcbn1cclxuZXhwb3J0IGVudW0gTUxSdHRMYW5ndWFnZXMge1xyXG4gICAgTEFOX1pIX0NOID0gXCJ6aC1DTlwiLFxyXG4gICAgTEFOX0VOX1VTID0gXCJlbi1VU1wiLFxyXG4gICAgTEFOX0ZSX0ZSID0gXCJmci1GUlwiLFxyXG4gICAgTEFOX0VTX0VTID0gXCJlcy1FU1wiLFxyXG4gICAgTEFOX0VOX0lOID0gXCJlbi1JTlwiLFxyXG4gICAgTEFOX0RFX0RFID0gXCJkZS1ERVwiLFxyXG59XHJcbmV4cG9ydCBlbnVtIE1MUnR0U2NlbmVzIHtcclxuICAgIFNDRU5FU19TSE9QUElOR2YgPSBcInNob3BwaW5nXCIsXHJcbn1cclxuZXhwb3J0IGVudW0gTUxTcGVlY2hSZWFsVGltZVRyYW5zY3JpcHRpb25Db25zdGFudHMge1xyXG4gICAgRVJSX0lOVkFMSURFX1RPS0VOID0gMTMyMTksXHJcbiAgICBFUlJfTk9fTkVUV09SSyA9IDEzMjAyLFxyXG4gICAgRVJSX1NFUlZJQ0VfQ1JFRElUID0gMTMyMjIsXHJcbiAgICBFUlJfU0VSVklDRV9VTlNVQlNDUklCRUQgPSAxMzIyMyxcclxuICAgIEVSUl9TRVJWSUNFX0ZSRUVfVVNFRF9VUCA9IDEzMjI0LFxyXG4gICAgRVJSX1NFUlZJQ0VfVU5BVkFJTEFCTEUgPSAxMzIwMyxcclxuICAgIExBTl9FTl9VUyA9IFwiIGVuLVVTXCIsXHJcbiAgICBMQU5fRlJfRlIgPSBcImZyLUZSXCIsXHJcbiAgICBMQU5fWkhfQ04gPSBcInpoLUNOXCIsXHJcbiAgICBSRVNVTFRTX1BBUlRJQUxGSU5BTCA9IFwiUkVTVUxUU19QQVJUSUFMRklOQUxcIixcclxuICAgIFJFU1VMVFNfUkVDT0dOSVpJTkcgPSBcInJlc3VsdHNfcmVjb2duaXppbmdcIixcclxuICAgIFJFU1VMVFNfU0VOVEVOQ0VfT0ZGU0VUID0gXCJSRVNVTFRTX1NFTlRFTkNFX09GRlNFVFwiLFxyXG4gICAgUkVTVUxUU19XT1JEX09GRlNFVCA9IFwiUkVTVUxUU19XT1JEX09GRlNFVFwiLFxyXG4gICAgU0NFTkVTX1NIT1BQSU5HID0gXCJzaG9wcGluZ1wiLFxyXG4gICAgU1RBVEVfU0VSVklDRV9SRUNPTk5FQ1RFRCA9IDQzLFxyXG4gICAgU1RBVEVfU0VSVklDRV9SRUNPTk5FQ1RJTkcgPSA0MixcclxuICAgIFNUQVRFX0xJU1RFTklORyA9IDEsXHJcbiAgICBTVEFURV9OT19ORVRXT1JLID0gNyxcclxuICAgIFNUQVRFX05PX1VOREVSU1RBTkQgPSA2LFxyXG4gICAgV0FWRV9QQUlORV9CSVRfV0lEVEggPSBcIkJJVF9XSURUSFwiLFxyXG4gICAgV0FWRV9QQUlORV9DSEFOTkVMX0NPVU5UID0gXCJDSEFOTkVMX0NPVU5UXCIsXHJcbiAgICBXQVZFX1BBSU5FX0VOQ09ESU5HID0gXCJFTkNPRElOR1wiLFxyXG4gICAgV0FWRV9QQUlORV9TQU1QTEVfUkFURSA9IFwiU0FNUExFX1JBVEVcIixcclxufVxyXG5cclxuLy9UUkFOU0xBVEVcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcmVtb3RldHJhbnNsYXRlUmVxIHtcclxuICAgIFVTRV9TWU5DOiBib29sZWFuO1xyXG4gICAgdGFyZ2V0TGFuZ0NvZGU6IE1MVHJhbnNsYXRlTGFuZ3VhZ2VzO1xyXG4gICAgc291cmNlTGFuZ0NvZGU/OiBNTFRyYW5zbGF0ZUxhbmd1YWdlcztcclxuICAgIHNvdXJjZVRleHQ6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIGxvY2FsdHJhbnNsYXRlUmVxIHtcclxuICAgIFVTRV9TWU5DOiBib29sZWFuO1xyXG4gICAgdGFyZ2V0TGFuZ0NvZGU6IE1MVHJhbnNsYXRlTGFuZ3VhZ2VzO1xyXG4gICAgc291cmNlTGFuZ0NvZGU6IE1MVHJhbnNsYXRlTGFuZ3VhZ2VzO1xyXG4gICAgc291cmNlVGV4dDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgZGVsZXRlVHJhbnNsYXRlUmVxIHtcclxuICAgIFVTRV9TWU5DOiBib29sZWFuO1xyXG4gICAgbGFuZ2NvZGU6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIGRvd25sb2FkVHJhbnNsYXRlUmVxIHtcclxuICAgIFVTRV9TWU5DOiBib29sZWFuO1xyXG4gICAgbGFuZ2NvZGU6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIGxvY2FsQWxsTGFuZ1JlcSB7XHJcbiAgICBVU0VfU1lOQzogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIHJlbW90ZUFsbExhbmdSZXEge1xyXG4gICAgVVNFX1NZTkM6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1MVHJhbnNsYXRlTGFuZ3VhZ2VzIHtcclxuICAgIEFGUklLQUFOUyA9IFwiYWZcIixcclxuICAgIEFSQUJJQyA9IFwiYXJcIixcclxuICAgIEJVTEdBUklBTiA9IFwiYmdcIixcclxuICAgIEJVUk1FU0UgPSBcIm15XCIsXHJcbiAgICBDUk9BVElBTiA9IFwiaHJcIixcclxuICAgIENaRUNIID0gXCJjc1wiLFxyXG4gICAgQ0hJTkVTRSA9IFwiemhcIixcclxuICAgIFRSQURJVElPTkFMX0NISU5FU0UgPSBcInpoLWhrXCIsXHJcbiAgICBEQU5JU0ggPSBcImRhXCIsXHJcbiAgICBEVVRDSCA9IFwibmxcIixcclxuICAgIEVTVE9OSUFOID0gXCJldFwiLFxyXG4gICAgRU5HTElTSCA9IFwiZW5cIixcclxuICAgIEZJTk5JU0ggPSBcImZpXCIsXHJcbiAgICBGUkVOQ0ggPSBcImZyXCIsXHJcbiAgICBHRVJNQU4gPSBcImRlXCIsXHJcbiAgICBHVUpBUkFUSSA9IFwiZ3VcIixcclxuICAgIEdSRUVLID0gXCJlbFwiLFxyXG4gICAgSFVOR0FSSUFOID0gXCJodVwiLFxyXG4gICAgSElOREkgPSBcImhpXCIsXHJcbiAgICBIRUJSRVcgPSBcImhlXCIsXHJcbiAgICBJUklTSCA9IFwiaXNcIixcclxuICAgIElUQUxJQU4gPSBcIml0XCIsXHJcbiAgICBJTkRPTkVTSUFOID0gXCJpZFwiLFxyXG4gICAgS0hNRVIgPSBcImttXCIsXHJcbiAgICBLT1JFQU4gPSBcImtvXCIsXHJcbiAgICBKQVBBTkVTRSA9IFwiamFcIixcclxuICAgIExBVElOID0gXCJybVwiLFxyXG4gICAgTEFUVklBTiA9IFwibHZcIixcclxuICAgIE1BTEFZID0gXCJtc1wiLFxyXG4gICAgTUFSQVRISSA9IFwibXJcIixcclxuICAgIE5PUldFR0lBTiA9IFwibm9cIixcclxuICAgIFBVTkpBQkkgPSBcInBhXCIsXHJcbiAgICBQT0xJU0ggPSBcInBsXCIsXHJcbiAgICBQT1JUVUdVRVNFID0gXCJwdFwiLFxyXG4gICAgUEVSU0lBTiA9IFwiZmFcIixcclxuICAgIFJVU1NJQU4gPSBcInJ1XCIsXHJcbiAgICBST01BTklBTiA9IFwicm9cIixcclxuICAgIFNFUkJJQU4gPSBcInNyXCIsXHJcbiAgICBTUEFOSVNIID0gXCJlc1wiLFxyXG4gICAgU0xPVkFLID0gXCJza1wiLFxyXG4gICAgU1dFRElTSCA9IFwic3ZcIixcclxuICAgIFRBTUlMID0gXCJ0YVwiLFxyXG4gICAgVFVSS0lTSCA9IFwidHJcIixcclxuICAgIFRIQUkgPSBcInRoXCIsXHJcbiAgICBUQUdBTE9HID0gXCJ0bFwiLFxyXG4gICAgVEVMVUdVID0gXCJ0ZVwiLFxyXG4gICAgVklFVE5BTUVTRSA9IFwidmlcIixcclxufVxyXG5cclxuLy8gU291bmQgRGVjdFxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBzb3VuZERlY3RSZXEge1xyXG4gICAgc3RhcnRUeXBlOiBib29sZWFuIHwgbnVsbDtcclxufVxyXG5cclxuLy8gVFRTIEFOQUxZU0VSXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1MVHRzU3BlYWtlciB7XHJcbiAgICBsYW5ndWFnZT86IHN0cmluZyB8IG51bGw7XHJcbiAgICBtb2RlbFNpemU/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgbmFtZT86IHN0cmluZyB8IG51bGw7XHJcbiAgICBzcGVha2VyRGVzYz86IHN0cmluZyB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgdHRzRW5naW5lUmVxIHtcclxuICAgIGxhbmd1YWdlPzogc3RyaW5nIHwgbnVsbDtcclxuICAgIHBsYXllclZvbHVtZT86IG51bWJlciB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgdHRzQW5hbHlzZXJTZXR0aW5nc1Jlc3VsdHMge1xyXG4gICAgbGFuZ3VhZ2VzOiBTdHJpbmdbXTtcclxuICAgIHNwZWFrZXJzOiBNTFR0c1NwZWFrZXI7XHJcbiAgICBzcGVha2VyOiBNTFR0c1NwZWFrZXI7XHJcbiAgICBpc0xhbmd1YWdlQXZhaWxhYmxlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgdHRzUmVxIHtcclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIG1sQ29uZmlnczogTUxDb25maWdzO1xyXG4gICAgcXVldWluZ01vZGU6IE1MVHRzQ29uc3RhbnRzO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1MVHRzQXVkaW9GcmFnbWVudCB7XHJcbiAgICBhdWRpb0RhdGE/OiBudW1iZXIgfCBudWxsO1xyXG4gICAgYXVkaW9Gb3JtYXQ/OiBudW1iZXIgfCBudWxsO1xyXG4gICAgY2hhbm5lbEluZm8/OiBudW1iZXIgfCBudWxsO1xyXG4gICAgU2FtcGxlUmF0ZUluSHo/OiBudW1iZXIgfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBNTFR0c0F1ZGlvRnJhZ21lbnRDb25zdGFudCB7XHJcbiAgICBDSEFOTkVMX09VVF9NT05PID0gNCxcclxuICAgIEZPUk1BVF9QQ01fMTZCSVQgPSAyLFxyXG4gICAgRk9STUFUX1BDTV84QklUID0gMSxcclxuICAgIFNBTVBMRV9SQVRFXzE2SyA9IDE2MDAwLFxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxDb25maWdzIHtcclxuICAgIGxhbmd1YWdlOiBNTFR0c0NvbnN0YW50cztcclxuICAgIHBlcnNvbjogTUxUdHNDb25zdGFudHM7XHJcbiAgICBzcGVlZDogbnVtYmVyO1xyXG4gICAgdm9sdW1lOiBudW1iZXI7XHJcbiAgICBzeW50aGVzaXplTW9kZTogTUxUdHNDb25zdGFudHM7XHJcbn1cclxuZXhwb3J0IGVudW0gTUxUdHNDb25zdGFudHMge1xyXG4gICAgRVZFTlRfUExBWV9TVEFSVCA9IDEsXHJcbiAgICBFVkVOVF9QTEFZX1JFU1VNRSA9IDIsXHJcbiAgICBFVkVOVF9QTEFZX1BBVVNFID0gMyxcclxuICAgIEVWRU5UX1BMQVlfU1RPUCA9IDQsXHJcbiAgICBFVkVOVF9TWU5USEVTSVNfU1RBUlQgPSA1LFxyXG4gICAgRVZFTlRfU1lOVEhFU0lTX0VORCA9IDYsXHJcbiAgICBFVkVOVF9TWU5USEVTSVNfQ09NUExFVEUgPSA3LFxyXG4gICAgRVZFTlRfUExBWV9TVE9QX0lOVEVSUlVQVEVEID0gXCJpbnRlcnJ1cHRlZFwiLFxyXG4gICAgRVZFTlRfU1lOVEhFU0lTX0lOVEVSUlVQVEVEID0gXCJpbnRlcnJ1cHRlZFwiLFxyXG4gICAgTEFOR1VBR0VfQVZBSUxBQkxFID0gMCxcclxuICAgIExBTkdVQUdFX05PVF9TVVBQT1JUID0gMSxcclxuICAgIExBTkdVQUdFX1VQREFUSU5HID0gMixcclxuICAgIFRUU19FTl9VUyA9IFwiZW4tVVNcIixcclxuICAgIFRUU19MQU5fQVJfQVIgPSBcImFyLUFSXCIsXHJcbiAgICBUVFNfTEFOX1RSX1RSID0gXCJ0ci1UUlwiLFxyXG4gICAgVFRTX1NQRUFLRVJfRkVNQUxFX0FSID0gXCJhci1BUi1zdC0xXCIsXHJcbiAgICBUVFNfU1BFQUtFUl9GRU1BTEVfVFIgPSBcInRyLVRSLXN0LTFcIixcclxuICAgIFRUU19MQU5fRVNfRVMgPSBcImVzLUVTXCIsXHJcbiAgICBUVFNfTEFOX0ZSX0ZSID0gXCJmci1GUlwiLFxyXG4gICAgVFRTX0xBTl9ERV9ERSA9IFwiZGUtREVcIixcclxuICAgIFRUU19MQU5fSVRfSVQgPSBcIml0LUlUXCIsXHJcbiAgICBUVFNfTEFOX1JVX1JVID0gXCJydS1SVVwiLFxyXG4gICAgVFRTX0xBTl9QTF9QTCA9IFwicGwtUExcIixcclxuICAgIFRUU19MQU5fVEhfVEggPSBcIiB0aC1USFwiLFxyXG4gICAgVFRTX0xBTl9NU19NUyA9IFwibXMtTVNcIixcclxuICAgIFRUU19aSF9IQU5TID0gXCJ6aC1IYW5zXCIsXHJcbiAgICBUVFNfU1BFQUtFUl9GRU1BTEVfRU4gPSBcIkZlbWFsZS1lblwiLFxyXG4gICAgVFRTX1NQRUFLRVJfRkVNQUxFX1pIID0gXCJGZW1hbGUtemhcIixcclxuICAgIFRUU19TUEVBS0VSX01BTEVfRU4gPSBcIk1hbGUtZW5cIixcclxuICAgIFRUU19TUEVBS0VSX01BTEVfWkggPSBcIk1hbGUtemhcIixcclxuICAgIFRUU19TUEVBS0VSX01BTEVfWkhfMiA9IFwiemgtSGFucy1zdC00XCIsXHJcbiAgICBUVFNfU1BFQUtFUl9GRU1BTEVfWkhfMiA9IFwiemgtSGFucy1zdC0zXCIsXHJcbiAgICBUVFNfU1BFQUtFUl9NQUxFX0VOXzIgPSBcImVuLVVTLXN0LTRcIixcclxuICAgIFRUU19TUEVBS0VSX0ZFTUFMRV9FTl8yID0gXCJlbi1VUy1zdC0zXCIsXHJcbiAgICBUVFNfU1BFQUtFUl9GRU1BTEVfREUgPSBcImRlLURFLXN0LTFcIixcclxuICAgIFRUU19TUEVBS0VSX0ZFTUFMRV9FUyA9IFwiaXQtSVQtc3QtMVwiLFxyXG4gICAgVFRTX1NQRUFLRVJfRkVNQUxFX0lUID0gXCJlcy1FUy1zdC0xXCIsXHJcbiAgICBUVFNfU1BFQUtFUl9GRU1BTEVfRlIgPSBcImZyLUZSLXN0LTFcIixcclxuICAgIFRUU19TUEVBS0VSX0ZFTUFMRV9SVSA9IFwicnUtUlUtc3QtMVwiLFxyXG4gICAgVFRTX1NQRUFLRVJfRkVNQUxFX1BMID0gXCJwbC1QTC1zdC0xXCIsXHJcbiAgICBUVFNfU1BFQUtFUl9GRU1BTEVfVEggPSBcInRoLVRILXN0LTFcIixcclxuICAgIFRUU19TUEVBS0VSX0ZFTUFMRV9NUyA9IFwibXMtTVMtc3QtMVwiLFxyXG4gICAgVFRTX1NQRUFLRVJfT0ZGTElORV9FTl9VU19NQUxFX0JPTFQgPSBcImVuLVVTLXN0LWJvbHQtMlwiLFxyXG4gICAgVFRTX1NQRUFLRVJfT0ZGTElORV9aSF9IQU5TX0ZFTUFMRV9FQUdMRSA9IFwiemgtSGFucy1zdC1lYWdsZS0xXCIsXHJcbiAgICBUVFNfU1BFQUtFUl9PRkZMSU5FX1pIX0hBTlNfTUFMRV9FQUdMRSA9IFwiemgtSGFucy1zdC1lYWdsZS0yXCIsXHJcbiAgICBUVFNfU1BFQUtFUl9PRkZMSU5FX0VOX1VTX0ZFTUFMRV9FQUdMRSA9IFwiZW4tVVMtc3QtZWFnbGUtMVwiLFxyXG4gICAgVFRTX1NQRUFLRVJfT0ZGTElORV9FTl9VU19NQUxFX0VBR0xFID0gXCJlbi1VUy1zdC1lYWdsZS0yXCIsXHJcbiAgICBUVFNfU1BFQUtFUl9PRkZMSU5FX0VOX1VTX0ZFTUFMRV9CRUUgPSBcImVuLVVTLXN0LWJlZS0xXCIsXHJcbiAgICBUVFNfU1BFQUtFUl9PRkZMSU5FX0ZSX0ZSX0ZFTUFMRV9CRUUgPSBcImZyLUZSLXN0LWJlZS0xXCIsXHJcbiAgICBUVFNfU1BFQUtFUl9PRkZMSU5FX0VTX0VTX0ZFTUFMRV9CRUUgPSBcImVzLUVTLXN0LWJlZS0xXCIsXHJcbiAgICBUVFNfU1BFQUtFUl9PRkZMSU5FX0RFX0RFX0ZFTUFMRV9CRUUgPSBcImRlLURFLXN0LWJlZS0xXCIsXHJcbiAgICBUVFNfU1BFQUtFUl9PRkZMSU5FX0lUX0lUX0ZFTUFMRV9CRUUgPSBcIml0LUlULXN0LWJlZS0xXCIsXHJcbiAgICBUVFNfU1BFQUtFUl9PRkZMSU5FX1pIX0hBTlNfRkVNQUxFX0JPTFQgPSBcInpoLUhhbnMtc3QtYm9sdC0xXCIsXHJcbiAgICBUVFNfU1BFQUtFUl9PRkZMSU5FX1pIX0hBTlNfTUFMRV9CT0xUID0gXCJ6aC1IYW5zLXN0LWJvbHQtMlwiLFxyXG4gICAgVFRTX1NQRUFLRVJfT0ZGTElORV9FTl9VU19GRU1BTEVfQk9MVCA9IFwiZW4tVVMtc3QtYm9sdC0xXCIsXHJcbiAgICBUVFNfT05MSU5FX01PREUgPSBcIm9ubGluZVwiLFxyXG4gICAgVFRTX09GRkxJTkVfTU9ERSA9IFwib2ZmbGluZVwiLFxyXG4gICAgUVVFVUVfQVBQRU5EID0gMCxcclxuICAgIFFVRVVFX0ZMVVNIID0gMSxcclxuICAgIEVYVEVSTkFMX1BMQVlCQUNLID0gMixcclxuICAgIE9QRU5fU1RSRUFNID0gNCxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ29sb3JzIHtcclxuICAgIFJFRCA9IC02NTUzNixcclxuICAgIERLR1JBWSA9IC0xMjMwMzI5MixcclxuICAgIEdSQVkgPSAtNzgyOTM2OCxcclxuICAgIFdISVRFID0gLTEsXHJcbiAgICBCTFVFID0gLTE2Nzc2OTYxLFxyXG4gICAgQkxBQ0sgPSAtMTY3NzcyMTYsXHJcbiAgICBMVEdSQVkgPSAtMzM1NTQ0NCxcclxuICAgIE1BR0VOVEEgPSAtNjUyODEsXHJcbiAgICBZRUxMT1cgPSAtMjU2LFxyXG4gICAgQ1lBTiA9IC0xNjcxMTY4MSxcclxuICAgIEdSRUVOID0gLTE2NzExOTM2LFxyXG4gICAgVFJBTlNQQVJFTlQgPSAwLFxyXG59XHJcbmV4cG9ydCBlbnVtIFJlY3RTdHlsZSB7XHJcbiAgICBTVFJPS0UgPSAxLFxyXG4gICAgRklMTCA9IDIsXHJcbiAgICBGSUxMX0FORF9TVFJPS0UgPSAzLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBNTFR0c0Vycm9yIHtcclxuICAgIEVSUl9BVURJT19QTEFZRVJfRkFJTEVEID0gMTEzMDUsXHJcbiAgICBFUlJfQVVUSE9SSVpFX0ZBSUxFRCA9IDExMzA2LFxyXG4gICAgRVJSX0FVVEhPUklaRV9UT0tFTl9JTlZBTElERSA9IDExMzA3LFxyXG4gICAgRVJSX0lMTEVHQUxfUEFSQU1FVEVSID0gMTEzMDEsXHJcbiAgICBFUlJfSU5TVUZGSUNJRU5UX0JBTEFOQ0UgPSAxMTMwMyxcclxuICAgIEVSUl9JTlRFUk5BTCA9IDExMzk4LFxyXG4gICAgRVJSX05FVENPTk5FQ1RfRkFJTEVEID0gMTEzMDIsXHJcbiAgICBFUlJfU1BFRUNIX1NZTlRIRVNJU19GQUlMRUQgPSAxMTMwNCxcclxuICAgIEVSUl9VTktOT1dOID0gMTEzOTksXHJcbn1cclxuXHJcbi8qXHJcbi0tLS0tLS0tLS0tLS0tLS0tIHJldHVyblxyXG4qL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNTEFmdFJlc3VsdCB7XHJcbiAgICBldmVudE5hbWU6IHN0cmluZztcclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIHRhc2tJZDogc3RyaW5nO1xyXG4gICAgY29tcGxldGU6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNTEFmdEVycm9yUmVzdWx0IHtcclxuICAgIGV2ZW50TmFtZTogc3RyaW5nO1xyXG4gICAgdGFza0lkOiBzdHJpbmc7XHJcbiAgICBlcnJvckNvZGU6IE1MQWZ0RXJyb3JDb2RlcztcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgZW51bSBNTEFmdEVycm9yQ29kZXMge1xyXG4gICAgRVJSX0FVRElPX0ZJTEVfTk9UU1VQUE9SVEVEID0gMTExMDEsXHJcbiAgICBMQU5HVUFHRV9DT0RFX05PVFNVUFBPUlRFRCA9IDExMTAyLFxyXG4gICAgRVJSX0FVRElPX0ZJTEVfU0laRV9PVkVSRkxPVyA9IDExMTAzLFxyXG4gICAgRVJSX0FVRElPX0xFTkdUSF9PVkVSRkxPVyA9IDExMTA0LFxyXG4gICAgRVJSX0ZJTEVfTk9UX0ZPVU5EID0gMTExMDUsXHJcbiAgICBFUlJfSUxMRUdBTF9QQVJBTUVURVIgPSAxMTEwNixcclxuICAgIEVSUl9FTkdJTkVfQlVTWSA9IDExMTA3LFxyXG4gICAgRVJSX05FVENPTk5FQ1RfRkFJTEVEID0gMTExMDgsXHJcbiAgICBFUlJfUkVTVUxUX1dIRU5fVVBMT0FESU5HID0gMTExMDksXHJcbiAgICBFUlJfVEFTS19OT1RfRVhJU1RFRCA9IDExMTEwLFxyXG4gICAgRVJSX0FVRElPX1RSQU5TQ1JJUFRfRkFJTEVEID0gMTExMTEsXHJcbiAgICBFUlJfQVVESU9fSU5JVF9GQUlMRUQgPSAxMTExMixcclxuICAgIEVSUl9BVURJT19VUExPQURfRkFJTEVEID0gMTExMTMsXHJcbiAgICBFUlJfVEFTS19BTFJFQURZX0lOUFJPR1JFU1MgPSAxMTExNCxcclxuICAgIEVSUl9OT19FTk9VR0hfU1RPUkFHRSA9IDExMTE1LFxyXG4gICAgRVJSX0FVVEhPUklaRV9GQUlMRUQgPSAxMTExOSxcclxuICAgIEVSUl9TRVJWSUNFX0NSRURJVCA9IDExMTIyLFxyXG4gICAgRVJSX1NFUlZJQ0VfVU5TVUJTQ1JJQkVEID0gMTExMjMsXHJcbiAgICBFUlJfU0VSVklDRV9GUkVFX1VTRURfVVAgPSAxMTEyNCxcclxuICAgIEVSUl9JTlRFUk5BTCA9IDExMTk4LFxyXG4gICAgRVJSX1VOS05PV04gPSAxMTE5OSxcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE1MQWZ0RXZlbnRSZXN1bHQge1xyXG4gICAgZXZlbnROYW1lOiBzdHJpbmc7XHJcbiAgICB0YXNrSWQ6IHN0cmluZztcclxuICAgIGV4dDogc3RyaW5nO1xyXG4gICAgZXZlbnRJZDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBlbnVtIE1MQUZURXZlbnRDb2RlcyB7XHJcbiAgICBQQVVTRV9FVkVOVCA9IDIsXHJcbiAgICBTVE9QX0VWRU5UID0gMyxcclxuICAgIFVQTE9BREVEX0VWRU5UID0gMSxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTUxBZnRDb25zdGFudHMge1xyXG4gICAgTEFOR1VBR0VfWkggPSBcInpoXCIsXHJcbiAgICBMQU5HVUFHRV9FTl9VUyA9IFwiZW4tVVNcIixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNTFJlbW90ZUxhbmdEZXRlY3Rpb24ge1xyXG4gICAgbGFuZ0NvZGU6IHN0cmluZztcclxuICAgIHByb2JhYmlsaXR5OiBudW1iZXI7XHJcbiAgICBoYXNoQ29kZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1MbGFuZ0RldGVjdGlvbldpdGhGaXJzdERldGVjdCB7XHJcbiAgICBsYW5nQ29kZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1MVHRzUmVzdWx0IHtcclxuICAgIGV2ZW50TmFtZTogc3RyaW5nO1xyXG4gICAgdGFza0lEOiBzdHJpbmc7XHJcbiAgICBzdGFydDogbnVtYmVyO1xyXG4gICAgZW5kOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxTb3VuZERlY3RSZXN1bHQge1xyXG4gICAgc291bmRUeXBlOiBNTFNvdW5kRGVjdFNvdW5kVHlwZVJlc3VsdDtcclxuICAgIGV2ZW50TmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBlbnVtIE1MU291bmREZWN0U291bmRUeXBlUmVzdWx0IHtcclxuICAgIFNPVU5EX0RFQ1RfRVJST1JfTk9fTUVNID0gMTIyMDEsXHJcbiAgICBTT1VORF9ERUNUX0VSUk9SX0ZBVEFMX0VSUk9SID0gMTIyMDIsXHJcbiAgICBTT1VORF9ERUNUX0VSUk9SX0FVRElPID0gMTIyMDMsXHJcbiAgICBTT1VORF9ERUNUX0VSUk9SX0lOVEVSTkFMID0gMTIyOTgsXHJcbiAgICBTT1VORF9FVkVOVF9UWVBFX0xBVUdIVEVSID0gMCxcclxuICAgIFNPVU5EX0VWRU5UX1RZUEVfQkFCWV9DUlkgPSAxLFxyXG4gICAgU09VTkRfRVZFTlRfVFlQRV9TTk9SSU5HID0gMixcclxuICAgIFNPVU5EX0VWRU5UX1RZUEVfU05FRVpFID0gMyxcclxuICAgIFNPVU5EX0VWRU5UX1RZUEVfU0NSRUFNSU5HID0gNCxcclxuICAgIFNPVU5EX0VWRU5UX1RZUEVfTUVPVyA9IDUsXHJcbiAgICBTT1VORF9FVkVOVF9UWVBFX0JBUksgPSA2LFxyXG4gICAgU09VTkRfRVZFTlRfVFlQRV9XQVRFUiA9IDcsXHJcbiAgICBTT1VORF9FVkVOVF9UWVBFX0NBUl9BTEFSTSA9IDgsXHJcbiAgICBTT1VORF9FVkVOVF9UWVBFX0RPT1JfQkVMTCA9IDksXHJcbiAgICBTT1VORF9FVkVOVF9UWVBFX0tOT0NLID0gMTAsXHJcbiAgICBTT1VORF9FVkVOVF9UWVBFX0FMQVJNID0gMTEsXHJcbiAgICBTT1VORF9FVkVOVF9UWVBFX1NURUFNX1dISVNUTEUgPSAxMixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ29yZG92YUVycm9ycyB7XHJcbiAgICBVTktOT1dOID0gLTEsXHJcbiAgICBTVUNDRVNTID0gMCxcclxuICAgIERJU0NBUkRFRCA9IDEsXHJcbiAgICBJTk5FUiA9IDIsXHJcbiAgICBJTkFDVElWRSA9IDMsXHJcbiAgICBOT1RfU1VQUE9SVEVEID0gNCxcclxuICAgIElMTEVHQUxfUEFSQU1FVEVSID0gNSxcclxuICAgIE9WRVJEVUUgPSA2LFxyXG4gICAgTk9fRk9VTkQgPSA3LFxyXG4gICAgRFVQTElDQVRFX0ZPVU5EID0gOCxcclxuICAgIE5PX1BFUk1JU1NJT04gPSA5LFxyXG4gICAgSU5TVUZGSUNJRU5UX1JFU09VUkNFID0gMTAsXHJcbiAgICBBTkFMWVNJU19GQUlMVVJFID0gMTEsXHJcbiAgICBJTlRFUlJVUFRFRCA9IDEyLFxyXG4gICAgRVhDRUVEX1JBTkdFID0gMTMsXHJcbiAgICBEQVRBX01JU1NJTkcgPSAxNCxcclxuICAgIEFVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEID0gMTUsXHJcbiAgICBURkxJVEVfTk9UX0NPTVBBVElCTEUgPSAxNixcclxuICAgIElOU1VGRklDSUVOVF9TUEFDRSA9IDE3LFxyXG4gICAgSEFTSF9NSVNTID0gMTgsXHJcbiAgICBUT0tFTl9JTlZBTElEID0gMTksXHJcbiAgICBTRVJWSUNFX0ZBSUxVUkUgPSAyMCxcclxuICAgIEFOQUxZU0lTX05VTEwgPSAyMSxcclxufVxyXG4iXX0=