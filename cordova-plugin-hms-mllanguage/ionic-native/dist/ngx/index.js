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

import { __decorate, __extends } from "tslib";
import { Injectable } from "@angular/core";
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
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
    HMSMLPlugin.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSMLPlugin, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HMSMLPlugin.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSMLPlugin });
    HMSMLPlugin.pluginName = "HMSMLPlugin";
    HMSMLPlugin.plugin = "cordova-plugin-hms-mllanguage";
    HMSMLPlugin.pluginRef = "HMSMLPlugin";
    HMSMLPlugin.platforms = ["Android"];
    HMSMLPlugin = __decorate([], HMSMLPlugin);
    return HMSMLPlugin;
}(AwesomeCordovaNativePlugin));
export { HMSMLPlugin };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSMLPlugin, decorators: [{
            type: Injectable
        }], propDecorators: { FEATURE: [], LANGUAGE: [], MLTtsConstants: [], Colors: [], RectStyle: [], MLRttLanguages: [], MLRttScenes: [], 
        /**
         * It sets Api Key or access token for application.
         * @param  {configReq} params Represents your API_KEY.
         * @returns Promise<any>
         */
        serviceInitializer: [], 
        /**
         * An app information class used to store basic information about apps with the HMS Core ML SDK integrated and complete the initialization of ML Kit. When using cloud services of the ML Kit, you need to set the apiKey of your app.
         * @param  {appSettingReq} appSettingReq Represents the parameter required.
         * @returns Promise<any>
         */
        appSetting: [], 
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
        setUserRegion: [], 
        /**
         * Obtains the country/region code of the data processing location you have specified when you choose to manually manage and specify such a location.
         * @returns Promise<String>
         */
        getCountryCode: [], 
        /**
         * This service enable logger service.
         * @returns Promise<any>
         */
        enableLogger: [], 
        /**
         * This service disable logger service.
         * @returns Promise<any>
         */
        disableLogger: [] } });
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
    HMSMLLanguage.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSMLLanguage, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HMSMLLanguage.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSMLLanguage });
    HMSMLLanguage.pluginName = "HMSMLLanguage";
    HMSMLLanguage.plugin = "cordova-plugin-hms-mllanguage";
    HMSMLLanguage.pluginRef = "HMSMLLanguage";
    HMSMLLanguage.platforms = ["Android"];
    HMSMLLanguage = __decorate([], HMSMLLanguage);
    return HMSMLLanguage;
}(AwesomeCordovaNativePlugin));
export { HMSMLLanguage };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSMLLanguage, decorators: [{
            type: Injectable
        }], propDecorators: { FEATURE: [], LANGUAGE: [], MLTtsConstants: [], Colors: [], RectStyle: [], MLRttLanguages: [], MLRttScenes: [], 
        /**
         * @param  {syncProbabilityDetect} syncRequestLocalLangDetect Represents the parameter.
         * @returns Promise<MLRemoteLangDetection>
         */
        syncProbabilityDetect: [], 
        /**
         * @param  {syncProbabilityDetect} syncProbabilityDetect Represents the parameter.
         * @returns Promise<String>
         */
        syncFirstBestDetect: [], 
        /**
         * Implements on-cloud text translation.
         * @param  {remotetranslateReq} remotetranslateReq Represents the parameter required for translate.
         * @returns Promise<any>
         */
        remoteTranslator: [], 
        /**
         * Implements on-cloud text translation.
         * @param  {localtranslateReq} localtranslateReq Represents the parameter required for translate.
         * @returns Promise<any>
         */
        localTranslator: [], 
        /**
         * Obtains all languages supported for local translation.
         * @param  {localAllLangReq} localAllLangReq Represents the parameter required for translate.
         * @returns Promise<any>
         */
        translatorLocalAllLang: [], 
        /**
         * Obtains all languages supported for on-cloud translation.
         * @param  {remoteAllLangReq} remoteAllLangReq Represents the parameter required for translate.
         * @returns Promise<any>
         */
        translatorRemoteAllLang: [], 
        /**
         * Detects languages on the cloud.
         * @param  {remoteLangDetectionReq} remoteLangDetectionReq Represents the parameter required for lang detection.
         * @returns Promise<RemoteLangDetectionAnalyser> | Promise<langDetectionWithFirstDetect>
         */
        remoteLangDetection: [], 
        /**
         * Detects languages on local.
         * @param  {localLangDetectionReq} localLangDetectionReq Represents the parameter required for lang detection.
         * @returns Promise<any> | Promise<any>
         */
        localLangDetection: [], 
        /**
         * Download language model.
         * @param  {downloadTranslateReq} downloadTranslateReq Represents the parameter required for download model.
         * @returns Promise<any>
         */
        translatorDownloadModel: [], 
        /**
         * For delete language model.
         * @param  {deleteTranslateReq} deleteTranslateReq Represents the parameter required for delete model.
         * @returns Promise<any>
         */
        translatorDeleteModel: [], 
        /**
         * This method stop translator service.
         * @returns Promise<any>
         */
        stopTranslatorService: [], 
        /**
         * This method return RTT setting.
         * @returns Promise<any>
         */
        getRTTSetting: [], 
        /**
         * This method returns TTS setting.
         * @returns Promise<any>
         */
        getTTSSetting: [], 
        /**
         * This method returns AFT setting.
         * @returns Promise<any>
         */
        getAFTSetting: [], 
        /**
         * This method returns Lang Detection setting.
         * @returns Promise<any>
         */
        getLangDetectionSetting: [], 
        /**
         * This method stop lang detection service.
         * @returns Promise<any>
         */
        stopLangDetectionService: [], 
        /**
         * The sound detection service can detect sound events in online (real-time recording) mode. The detected sound events can help you perform subsequent actions.
         * @param  {soundDectReq} soundDectReq Represents the parameter required for Sound Detection analyser.
         * @returns Promise<any>
         */
        soundDectAnalyser: [], 
        /**
         * TTS can convert text information into audio output. Rich timbres, and volume and speed options are supported to produce more natural sounds.
         * @param  {ttsReq} ttsReq Represents the parameter required for text to speech.
         * @returns Promise<TtsAnalyser>
         */
        ttsAnalyser: [], 
        /**
         * TTS can convert text information into audio output offline. Rich timbres, and volume and speed options are supported to produce more natural sounds.
         * @param  {ttsReq} ttsReq Represents the parameter required for text to speech.
         * @returns Promise<TtsAnalyser>
         */
        ttsOfflineAnalyser: [], 
        /**
         * This service stop text to speech (TTS) service.
         * @returns Promise<any>
         */
        ttsAnalyserStop: [], 
        /**
         * This service pauses text to speech (TTS) analyser.
         * @returns Promise<any>
         */
        ttsAnalyserPause: [], 
        /**
         * This service continues text to speech (TTS) analyser.
         * @returns Promise<any>
         */
        ttsAnalyserResume: [], 
        /**
         * This service shutdown text to speech (TTS) analyser.
         * @returns Promise<any>
         */
        ttsAnalysershutDown: [], 
        /**
         * This method returns TTS Download setting.
         * @returns Promise<any>
         */
        ttsAnalyserDownloadSetting: [], 
        /**
         * This service close AFT analyser.
         * @returns Promise<any>
         */
        aftAnalyserClose: [], 
        /**
         * This service stop AFT analyser.
         * @returns Promise<any>
         */
        asrAnalyserStop: [], 
        /**
         * This service destroy AFT analyser.
         * @returns Promise<any>
         */
        aftAnalyserDestroy: [], 
        /**
         * This service pause AFT analyser.
         * @returns Promise<any>
         */
        aftAnalyserPause: [], 
        /**
         * This service destroy Sound Detection analyser.
         * @returns Promise<any>
         */
        soundDectAnalyserDestroy: [], 
        /**
         * The audio file transcription service can convert an audio file less than or equal to 60 seconds into a text file. Currently, Chinese and English are supported.
         * @param  {aftReq} aftReq Represents the parameter required for aft analyser.
         * @returns Promise<AftAnalyser>
         */
        aftAnalyser: [], asrAnalyser: [], rttAnalyserStart: [], rttAnalyserStop: [] } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmF0aXZlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7QUFFRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sK0VBQWlFLE1BQU0sK0JBQStCLENBQUM7QUFDOUcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0lBU0QsK0JBQTBCOzs7O0lBZ0J2RDs7OztPQUlHO0lBQ0gsd0NBQWtCLGFBQUMsTUFBaUI7SUFLcEM7Ozs7T0FJRztJQUNILGdDQUFVLGFBQUMsYUFBNEI7SUFLdkM7Ozs7Ozs7OztPQVNHO0lBQ0gsbUNBQWEsYUFBQyxNQUFjO0lBSzVCOzs7T0FHRztJQUNILG9DQUFjO0lBS2Q7OztPQUdHO0lBQ0gsa0NBQVk7SUFLWjs7O09BR0c7SUFDSCxtQ0FBYTswQkF2RWIsZ0NBQU87Ozs7OzswQkFFUCxpQ0FBUTs7Ozs7OzBCQUVSLHVDQUFjOzs7Ozs7MEJBRWQsK0JBQU07Ozs7OzswQkFFTixrQ0FBUzs7Ozs7OzBCQUVULHVDQUFjOzs7Ozs7MEJBRWQsb0NBQVc7Ozs7Ozs2R0FkRixXQUFXO2lIQUFYLFdBQVc7Ozs7O0lBQVgsV0FBVyxrQkFBWCxXQUFXO3NCQTNCeEI7RUEyQmlDLDBCQUEwQjtTQUE5QyxXQUFXOzRGQUFYLFdBQVc7a0JBRHZCLFVBQVU7OEJBR1AsT0FBTyxNQUVQLFFBQVEsTUFFUixjQUFjLE1BRWQsTUFBTSxNQUVOLFNBQVMsTUFFVCxjQUFjLE1BRWQsV0FBVztRQUVYOzs7O1dBSUc7UUFDSCxrQkFBa0I7UUFLbEI7Ozs7V0FJRztRQUNILFVBQVU7UUFLVjs7Ozs7Ozs7O1dBU0c7UUFDSCxhQUFhO1FBS2I7OztXQUdHO1FBQ0gsY0FBYztRQUtkOzs7V0FH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QUFBO0lBQ3BCLHlFQUFtQixDQUFBO0lBQ25CLHFGQUF5QixDQUFBO0lBQ3pCLGlGQUF1QixDQUFBO0lBQ3ZCLDJGQUE0QixDQUFBO0lBQzVCLDZEQUEyQyxDQUFBO0lBQzNDLDZEQUEyQyxDQUFBO0lBQzNDLCtFQUFzQixDQUFBO0lBQ3RCLG1GQUF3QixDQUFBO0lBQ3hCLDZFQUFxQixDQUFBO0lBQ3JCLHFDQUFtQixDQUFBO0lBQ25CLHlDQUF1QixDQUFBO0lBQ3ZCLHlDQUF1QixDQUFBO0lBQ3ZCLHNEQUFvQyxDQUFBO0lBQ3BDLHNEQUFvQyxDQUFBO0lBQ3BDLHlDQUF1QixDQUFBO0lBQ3ZCLHlDQUF1QixDQUFBO0lBQ3ZCLHlDQUF1QixDQUFBO0lBQ3ZCLHlDQUF1QixDQUFBO0lBQ3ZCLHlDQUF1QixDQUFBO0lBQ3ZCLHlDQUF1QixDQUFBO0lBQ3ZCLDBDQUF3QixDQUFBO0lBQ3hCLHlDQUF1QixDQUFBO0lBQ3ZCLHlDQUF1QixDQUFBO0lBQ3ZCLHFEQUFtQyxDQUFBO0lBQ25DLHFEQUFtQyxDQUFBO0lBQ25DLGlEQUErQixDQUFBO0lBQy9CLGlEQUErQixDQUFBO0lBQy9CLHdEQUFzQyxDQUFBO0lBQ3RDLDBEQUF3QyxDQUFBO0lBQ3hDLHNEQUFvQyxDQUFBO0lBQ3BDLHdEQUFzQyxDQUFBO0lBQ3RDLHNEQUFvQyxDQUFBO0lBQ3BDLHNEQUFvQyxDQUFBO0lBQ3BDLHNEQUFvQyxDQUFBO0lBQ3BDLHNEQUFvQyxDQUFBO0lBQ3BDLHNEQUFvQyxDQUFBO0lBQ3BDLHNEQUFvQyxDQUFBO0lBQ3BDLHNEQUFvQyxDQUFBO0lBQ3BDLHNEQUFvQyxDQUFBO0lBQ3BDLHlFQUF1RCxDQUFBO0lBQ3ZELGlGQUErRCxDQUFBO0lBQy9ELCtFQUE2RCxDQUFBO0lBQzdELDZFQUEyRCxDQUFBO0lBQzNELDJFQUF5RCxDQUFBO0lBQ3pELHlFQUF1RCxDQUFBO0lBQ3ZELHlFQUF1RCxDQUFBO0lBQ3ZELHlFQUF1RCxDQUFBO0lBQ3ZELHlFQUF1RCxDQUFBO0lBQ3ZELHlFQUF1RCxDQUFBO0lBQ3ZELCtFQUE2RCxD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LHVIQUE4QixDQUFBO0lBQzlCLHVIQUE4QixDQUFBO0lBQzlCLGdIQUEyQixDQUFBO0lBQzNCLGdIQUEyQixDQUFBO0lBQzNCLGdJQUFtQyxDQUFBO0FBQ3ZDLENBQUMsRUFsQlcsMEJBQTBCLEtBQTFCLDBCQUEwQixRQWtCckM7QUFFRCxNQUFNLENBQU4sSUFBWSxhQXdCWDtBQXhCRCxXQUFZLGFBQWE7SUFDckIsd0RBQVksQ0FBQTtJQUNaLHVEQUFXLENBQUE7SUFDWCwyREFBYSxDQUFBO0lBQ2IsbURBQVMsQ0FBQTtJQUNULHlEQUFZLENBQUE7SUFDWixtRUFBaUIsQ0FBQTtJQUNqQiwyRUFBcUIsQ0FBQTtJQUNyQix1REFBVyxDQUFBO0lBQ1gseURBQVksQ0FBQTtJQUNaLHVFQUFtQixDQUFBO0lBQ25CLG1FQUFpQixDQUFBO0lBQ2pCLG9GQUEwQixDQUFBO0lBQzFCLDBFQUFxQixDQUFBO0lBQ3JCLGdFQUFnQixDQUFBO0lBQ2hCLGtFQUFpQixDQUFBO0lBQ2pCLGtFQUFpQixDQUFBO0lBQ2pCLHdGQUE0QixDQUFBO0lBQzVCLG9GQUEwQixDQUFBO0lBQzFCLDhFQUF1QixDQUFBO0lBQ3ZCLDREQUFjLENBQUE7SUFDZCxvRUFBa0IsQ0FBQTtJQUNsQix3RUFBb0IsQ0FBQTtJQUNwQixvRUFBa0IsQ0FBQTtBQUN0QixDQUFDLEVBeEJXLGFBQWEsS0FBYixhQUFhLFFBd0J4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgICBDb3B5cmlnaHQgMjAyMy4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuXHJcbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXHJcbiAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuXHJcbiAgICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luICB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6IFwiSE1TTUxQbHVnaW5cIixcclxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtbWxsYW5ndWFnZVwiLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICAgIHBsdWdpblJlZjogXCJITVNNTFBsdWdpblwiLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNNTFBsdWdpbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luICB7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIEZFQVRVUkUgPSBGRUFUVVJFO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBMQU5HVUFHRSA9IExBTkdVQUdFO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBNTFR0c0NvbnN0YW50cyA9IE1MVHRzQ29uc3RhbnRzO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBDb2xvcnMgPSBDb2xvcnM7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIFJlY3RTdHlsZSA9IFJlY3RTdHlsZTtcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgTUxSdHRMYW5ndWFnZXMgPSBNTFJ0dExhbmd1YWdlcztcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgTUxSdHRTY2VuZXMgPSBNTFJ0dFNjZW5lcztcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIEl0IHNldHMgQXBpIEtleSBvciBhY2Nlc3MgdG9rZW4gZm9yIGFwcGxpY2F0aW9uLlxyXG4gICAgICogQHBhcmFtICB7Y29uZmlnUmVxfSBwYXJhbXMgUmVwcmVzZW50cyB5b3VyIEFQSV9LRVkuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgc2VydmljZUluaXRpYWxpemVyKHBhcmFtczogY29uZmlnUmVxKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogQW4gYXBwIGluZm9ybWF0aW9uIGNsYXNzIHVzZWQgdG8gc3RvcmUgYmFzaWMgaW5mb3JtYXRpb24gYWJvdXQgYXBwcyB3aXRoIHRoZSBITVMgQ29yZSBNTCBTREsgaW50ZWdyYXRlZCBhbmQgY29tcGxldGUgdGhlIGluaXRpYWxpemF0aW9uIG9mIE1MIEtpdC4gV2hlbiB1c2luZyBjbG91ZCBzZXJ2aWNlcyBvZiB0aGUgTUwgS2l0LCB5b3UgbmVlZCB0byBzZXQgdGhlIGFwaUtleSBvZiB5b3VyIGFwcC5cclxuICAgICAqIEBwYXJhbSAge2FwcFNldHRpbmdSZXF9IGFwcFNldHRpbmdSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIGFwcFNldHRpbmcoYXBwU2V0dGluZ1JlcTogYXBwU2V0dGluZ1JlcSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgYSBkYXRhIHByb2Nlc3NpbmcgbG9jYXRpb24gd2hlbiB5b3UgY2hvb3NlIHRvIG1hbnVhbGx5IG1hbmFnZSBhbmQgc3BlY2lmeSBzdWNoIGEgbG9jYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gIHtyZWdpb259IHJlZ2lvbiBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIuXHJcbiAgICAgKiAgICAgICAgICogUkVHSU9OX0RSX1VOS05PV04gPSAxMDAxLFxyXG4gICAgICAgICAgICAgICAqIFJFR0lPTl9EUl9DSElOQSA9IDEwMDIsXHJcbiAgICAgICAgICAgICAgICogUkVHSU9OX0RSX1JVU1NJQSA9IDEwMDUsXHJcbiAgICAgICAgICAgICAgICogUkVHSU9OX0RSX0dFUk1BTiA9IDEwMDYsXHJcbiAgICAgICAgICAgICAgICogUkVHSU9OX0RSX1NJTkdBUE9SRSA9IDEwMDcgXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgc2V0VXNlclJlZ2lvbihyZWdpb246IG51bWJlcik6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbnMgdGhlIGNvdW50cnkvcmVnaW9uIGNvZGUgb2YgdGhlIGRhdGEgcHJvY2Vzc2luZyBsb2NhdGlvbiB5b3UgaGF2ZSBzcGVjaWZpZWQgd2hlbiB5b3UgY2hvb3NlIHRvIG1hbnVhbGx5IG1hbmFnZSBhbmQgc3BlY2lmeSBzdWNoIGEgbG9jYXRpb24uXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPFN0cmluZz5cclxuICAgICAqL1xyXG4gICAgZ2V0Q291bnRyeUNvZGUoKTogUHJvbWlzZTxTdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBzZXJ2aWNlIGVuYWJsZSBsb2dnZXIgc2VydmljZS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBzZXJ2aWNlIGRpc2FibGUgbG9nZ2VyIHNlcnZpY2UuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiBcIkhNU01MTGFuZ3VhZ2VcIixcclxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtbWxsYW5ndWFnZVwiLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICAgIHBsdWdpblJlZjogXCJITVNNTExhbmd1YWdlXCIsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU01MTGFuZ3VhZ2UgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIEZFQVRVUkUgPSBGRUFUVVJFO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBMQU5HVUFHRSA9IExBTkdVQUdFO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBNTFR0c0NvbnN0YW50cyA9IE1MVHRzQ29uc3RhbnRzO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBDb2xvcnMgPSBDb2xvcnM7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIFJlY3RTdHlsZSA9IFJlY3RTdHlsZTtcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgTUxSdHRMYW5ndWFnZXMgPSBNTFJ0dExhbmd1YWdlcztcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgTUxSdHRTY2VuZXMgPSBNTFJ0dFNjZW5lcztcclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gIHtzeW5jUHJvYmFiaWxpdHlEZXRlY3R9IHN5bmNSZXF1ZXN0TG9jYWxMYW5nRGV0ZWN0IFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlci5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8TUxSZW1vdGVMYW5nRGV0ZWN0aW9uPlxyXG4gICAgICovXHJcbiAgICBzeW5jUHJvYmFiaWxpdHlEZXRlY3QoXHJcbiAgICAgICAgc3luY1Byb2JhYmlsaXR5RGV0ZWN0OiBzeW5jUmVxdWVzdExvY2FsTGFuZ0RldGVjdFxyXG4gICAgKTogUHJvbWlzZTxNTFJlbW90ZUxhbmdEZXRlY3Rpb24+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gIHtzeW5jUHJvYmFiaWxpdHlEZXRlY3R9IHN5bmNQcm9iYWJpbGl0eURldGVjdCBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPFN0cmluZz5cclxuICAgICAqL1xyXG4gICAgc3luY0ZpcnN0QmVzdERldGVjdChcclxuICAgICAgICBzeW5jUHJvYmFiaWxpdHlEZXRlY3Q6IHN5bmNSZXF1ZXN0TG9jYWxMYW5nRGV0ZWN0XHJcbiAgICApOiBQcm9taXNlPFN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBsZW1lbnRzIG9uLWNsb3VkIHRleHQgdHJhbnNsYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gIHtyZW1vdGV0cmFuc2xhdGVSZXF9IHJlbW90ZXRyYW5zbGF0ZVJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIHRyYW5zbGF0ZS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICByZW1vdGVUcmFuc2xhdG9yKHJlbW90ZXRyYW5zbGF0ZVJlcTogcmVtb3RldHJhbnNsYXRlUmVxKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBsZW1lbnRzIG9uLWNsb3VkIHRleHQgdHJhbnNsYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gIHtsb2NhbHRyYW5zbGF0ZVJlcX0gbG9jYWx0cmFuc2xhdGVSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciB0cmFuc2xhdGUuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgbG9jYWxUcmFuc2xhdG9yKGxvY2FsdHJhbnNsYXRlUmVxOiBsb2NhbHRyYW5zbGF0ZVJlcSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyBhbGwgbGFuZ3VhZ2VzIHN1cHBvcnRlZCBmb3IgbG9jYWwgdHJhbnNsYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gIHtsb2NhbEFsbExhbmdSZXF9IGxvY2FsQWxsTGFuZ1JlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIHRyYW5zbGF0ZS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICB0cmFuc2xhdG9yTG9jYWxBbGxMYW5nKGxvY2FsQWxsTGFuZ1JlcTogbG9jYWxBbGxMYW5nUmVxKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRhaW5zIGFsbCBsYW5ndWFnZXMgc3VwcG9ydGVkIGZvciBvbi1jbG91ZCB0cmFuc2xhdGlvbi5cclxuICAgICAqIEBwYXJhbSAge3JlbW90ZUFsbExhbmdSZXF9IHJlbW90ZUFsbExhbmdSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciB0cmFuc2xhdGUuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgdHJhbnNsYXRvclJlbW90ZUFsbExhbmcocmVtb3RlQWxsTGFuZ1JlcTogcmVtb3RlQWxsTGFuZ1JlcSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogRGV0ZWN0cyBsYW5ndWFnZXMgb24gdGhlIGNsb3VkLlxyXG4gICAgICogQHBhcmFtICB7cmVtb3RlTGFuZ0RldGVjdGlvblJlcX0gcmVtb3RlTGFuZ0RldGVjdGlvblJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIGxhbmcgZGV0ZWN0aW9uLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxSZW1vdGVMYW5nRGV0ZWN0aW9uQW5hbHlzZXI+IHwgUHJvbWlzZTxsYW5nRGV0ZWN0aW9uV2l0aEZpcnN0RGV0ZWN0PlxyXG4gICAgICovXHJcbiAgICByZW1vdGVMYW5nRGV0ZWN0aW9uKFxyXG4gICAgICAgIHJlbW90ZUxhbmdEZXRlY3Rpb25SZXE6IHJlbW90ZUxhbmdEZXRlY3Rpb25SZXFcclxuICAgICk6IFByb21pc2U8TUxSZW1vdGVMYW5nRGV0ZWN0aW9uIHwgTUxsYW5nRGV0ZWN0aW9uV2l0aEZpcnN0RGV0ZWN0PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogRGV0ZWN0cyBsYW5ndWFnZXMgb24gbG9jYWwuXHJcbiAgICAgKiBAcGFyYW0gIHtsb2NhbExhbmdEZXRlY3Rpb25SZXF9IGxvY2FsTGFuZ0RldGVjdGlvblJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIGxhbmcgZGV0ZWN0aW9uLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IHwgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIGxvY2FsTGFuZ0RldGVjdGlvbihcclxuICAgICAgICBsb2NhbExhbmdEZXRlY3Rpb25SZXE6IGxvY2FsTGFuZ0RldGVjdGlvblJlcVxyXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRG93bmxvYWQgbGFuZ3VhZ2UgbW9kZWwuXHJcbiAgICAgKiBAcGFyYW0gIHtkb3dubG9hZFRyYW5zbGF0ZVJlcX0gZG93bmxvYWRUcmFuc2xhdGVSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBkb3dubG9hZCBtb2RlbC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICB0cmFuc2xhdG9yRG93bmxvYWRNb2RlbChcclxuICAgICAgICBkb3dubG9hZFRyYW5zbGF0ZVJlcTogZG93bmxvYWRUcmFuc2xhdGVSZXFcclxuICAgICk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogRm9yIGRlbGV0ZSBsYW5ndWFnZSBtb2RlbC5cclxuICAgICAqIEBwYXJhbSAge2RlbGV0ZVRyYW5zbGF0ZVJlcX0gZGVsZXRlVHJhbnNsYXRlUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgZGVsZXRlIG1vZGVsLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIHRyYW5zbGF0b3JEZWxldGVNb2RlbChcclxuICAgICAgICBkZWxldGVUcmFuc2xhdGVSZXE6IGRlbGV0ZVRyYW5zbGF0ZVJlcVxyXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wIHRyYW5zbGF0b3Igc2VydmljZS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBzdG9wVHJhbnNsYXRvclNlcnZpY2UoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm4gUlRUIHNldHRpbmcuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgZ2V0UlRUU2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJldHVybnMgVFRTIHNldHRpbmcuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgZ2V0VFRTU2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJldHVybnMgQUZUIHNldHRpbmcuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgZ2V0QUZUU2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJldHVybnMgTGFuZyBEZXRlY3Rpb24gc2V0dGluZy5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBnZXRMYW5nRGV0ZWN0aW9uU2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3AgbGFuZyBkZXRlY3Rpb24gc2VydmljZS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBzdG9wTGFuZ0RldGVjdGlvblNlcnZpY2UoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc291bmQgZGV0ZWN0aW9uIHNlcnZpY2UgY2FuIGRldGVjdCBzb3VuZCBldmVudHMgaW4gb25saW5lIChyZWFsLXRpbWUgcmVjb3JkaW5nKSBtb2RlLiBUaGUgZGV0ZWN0ZWQgc291bmQgZXZlbnRzIGNhbiBoZWxwIHlvdSBwZXJmb3JtIHN1YnNlcXVlbnQgYWN0aW9ucy5cclxuICAgICAqIEBwYXJhbSAge3NvdW5kRGVjdFJlcX0gc291bmREZWN0UmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgU291bmQgRGV0ZWN0aW9uIGFuYWx5c2VyLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIHNvdW5kRGVjdEFuYWx5c2VyKHNvdW5kRGVjdFJlcTogc291bmREZWN0UmVxKTogUHJvbWlzZTxNTFNvdW5kRGVjdFJlc3VsdD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRUUyBjYW4gY29udmVydCB0ZXh0IGluZm9ybWF0aW9uIGludG8gYXVkaW8gb3V0cHV0LiBSaWNoIHRpbWJyZXMsIGFuZCB2b2x1bWUgYW5kIHNwZWVkIG9wdGlvbnMgYXJlIHN1cHBvcnRlZCB0byBwcm9kdWNlIG1vcmUgbmF0dXJhbCBzb3VuZHMuXHJcbiAgICAgKiBAcGFyYW0gIHt0dHNSZXF9IHR0c1JlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIHRleHQgdG8gc3BlZWNoLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxUdHNBbmFseXNlcj5cclxuICAgICAqL1xyXG4gICAgdHRzQW5hbHlzZXIodHRzUmVxOiB0dHNSZXEpOiBQcm9taXNlPE1MVHRzUmVzdWx0PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVFRTIGNhbiBjb252ZXJ0IHRleHQgaW5mb3JtYXRpb24gaW50byBhdWRpbyBvdXRwdXQgb2ZmbGluZS4gUmljaCB0aW1icmVzLCBhbmQgdm9sdW1lIGFuZCBzcGVlZCBvcHRpb25zIGFyZSBzdXBwb3J0ZWQgdG8gcHJvZHVjZSBtb3JlIG5hdHVyYWwgc291bmRzLlxyXG4gICAgICogQHBhcmFtICB7dHRzUmVxfSB0dHNSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciB0ZXh0IHRvIHNwZWVjaC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8VHRzQW5hbHlzZXI+XHJcbiAgICAgKi9cclxuICAgIHR0c09mZmxpbmVBbmFseXNlcih0dHNSZXE6IHR0c1JlcSk6IFByb21pc2U8TUxUdHNSZXN1bHQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHNlcnZpY2Ugc3RvcCB0ZXh0IHRvIHNwZWVjaCAoVFRTKSBzZXJ2aWNlLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIHR0c0FuYWx5c2VyU3RvcCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgc2VydmljZSBwYXVzZXMgdGV4dCB0byBzcGVlY2ggKFRUUykgYW5hbHlzZXIuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgdHRzQW5hbHlzZXJQYXVzZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgc2VydmljZSBjb250aW51ZXMgdGV4dCB0byBzcGVlY2ggKFRUUykgYW5hbHlzZXIuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgdHRzQW5hbHlzZXJSZXN1bWUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHNlcnZpY2Ugc2h1dGRvd24gdGV4dCB0byBzcGVlY2ggKFRUUykgYW5hbHlzZXIuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgdHRzQW5hbHlzZXJzaHV0RG93bigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJldHVybnMgVFRTIERvd25sb2FkIHNldHRpbmcuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgdHRzQW5hbHlzZXJEb3dubG9hZFNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHNlcnZpY2UgY2xvc2UgQUZUIGFuYWx5c2VyLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIGFmdEFuYWx5c2VyQ2xvc2UoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHNlcnZpY2Ugc3RvcCBBRlQgYW5hbHlzZXIuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgYXNyQW5hbHlzZXJTdG9wKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBzZXJ2aWNlIGRlc3Ryb3kgQUZUIGFuYWx5c2VyLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIGFmdEFuYWx5c2VyRGVzdHJveSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgc2VydmljZSBwYXVzZSBBRlQgYW5hbHlzZXIuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgYWZ0QW5hbHlzZXJQYXVzZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgc2VydmljZSBkZXN0cm95IFNvdW5kIERldGVjdGlvbiBhbmFseXNlci5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBzb3VuZERlY3RBbmFseXNlckRlc3Ryb3koKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgYXVkaW8gZmlsZSB0cmFuc2NyaXB0aW9uIHNlcnZpY2UgY2FuIGNvbnZlcnQgYW4gYXVkaW8gZmlsZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gNjAgc2Vjb25kcyBpbnRvIGEgdGV4dCBmaWxlLiBDdXJyZW50bHksIENoaW5lc2UgYW5kIEVuZ2xpc2ggYXJlIHN1cHBvcnRlZC5cclxuICAgICAqIEBwYXJhbSAge2FmdFJlcX0gYWZ0UmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgYWZ0IGFuYWx5c2VyLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxBZnRBbmFseXNlcj5cclxuICAgICAqL1xyXG4gICAgYWZ0QW5hbHlzZXIoYWZ0UmVxOiBhZnRSZXEpOiBQcm9taXNlPE1MQWZ0UmVzdWx0PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBU1IgY2FuIHJlY29nbml6ZSBzcGVlY2ggbm90IGxvbmdlciB0aGFuIDYwcyBhbmQgY29udmVydCB0aGUgaW5wdXQgc3BlZWNoIGludG8gdGV4dCBpbiByZWFsIHRpbWUuXHJcbiAgICAgKiBAcGFyYW0gIHthc3JSZXF9IGFzclJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIGFzciBhbmFseXNlci5cclxuICAgICAqIEBwYXJhbSAge2FueX0gc3VjY2VzcyBBIGNhbGxiYWNrIGZ1bmN0aW9uLiBJdCBpcyBjYWxsZWQgd2hlbiBmdW5jdGlvbiBpcyBleGVjdXRlZCBzdWNjZXNzZnVsbHkuIEl0IHJldHVybnMgdGhlIHJlc3VsdHMgb2YgdGV4dC5cclxuICAgICAqIEBwYXJhbSAge2FueX0gZXJyb3IgQSBjYWxsYmFjayBmdW5jdGlvbi4gSXQgaXMgY2FsbGVkIHdoZW4gZnVuY3Rpb24gaXMgZmFpbGVkLlxyXG4gICAgICogQHJldHVybnMgY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXHJcbiAgICBhc3JBbmFseXNlcihhc3JSZXE6IGFzclJlcSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWFsLXRpbWUgdHJhbnNjcmlwdGlvbiBlbmFibGVzIHlvdXIgYXBwIHRvIGNvbnZlcnQgbG9uZyBzcGVlY2ggKG5vIGxvbmdlciB0aGFuIDUgaG91cnMpIGludG8gdGV4dCBpbiByZWFsIHRpbWUuIFRoZSBnZW5lcmF0ZWQgdGV4dCBjb250YWlucyBwdW5jdHVhdGlvbiBtYXJrcyBhbmQgdGltZXN0YW1wcy5cclxuICAgICAqIEBwYXJhbSAge3J0dFJlcX0gcnR0UmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgcnR0IGFuYWx5c2VyLlxyXG4gICAgICogQHBhcmFtICB7YW55fSBzdWNjZXNzIEEgY2FsbGJhY2sgZnVuY3Rpb24uIEl0IGlzIGNhbGxlZCB3aGVuIGZ1bmN0aW9uIGlzIGV4ZWN1dGVkIHN1Y2Nlc3NmdWxseS4gSXQgcmV0dXJucyB0aGUgcmVzdWx0cyBvZiB0ZXh0LlxyXG4gICAgICogQHBhcmFtICB7YW55fSBlcnJvciBBIGNhbGxiYWNrIGZ1bmN0aW9uLiBJdCBpcyBjYWxsZWQgd2hlbiBmdW5jdGlvbiBpcyBmYWlsZWQuXHJcbiAgICAgKiBAcmV0dXJucyBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcclxuICAgIHJ0dEFuYWx5c2VyU3RhcnQocnR0UmVxOiBydHRSZXEpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCBSVFQgYW5hbHlzZXJcclxuICAgICAqIEBwYXJhbSAge2FueX0gc3VjY2VzcyBBIGNhbGxiYWNrIGZ1bmN0aW9uLiBJdCBpcyBjYWxsZWQgd2hlbiBmdW5jdGlvbiBpcyBleGVjdXRlZCBzdWNjZXNzZnVsbHkuIEl0IHJldHVybnMgdGhlIHJlc3VsdHMgb2YgdGV4dC5cclxuICAgICAqIEBwYXJhbSAge2FueX0gZXJyb3IgQSBjYWxsYmFjayBmdW5jdGlvbi4gSXQgaXMgY2FsbGVkIHdoZW4gZnVuY3Rpb24gaXMgZmFpbGVkLlxyXG4gICAgICogQHJldHVybnMgY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXHJcbiAgICBydHRBbmFseXNlclN0b3AoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEFQSSBLRVlcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgY29uZmlnUmVxIHtcclxuICAgIGFwaUtleTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGFwcFNldHRpbmdSZXEge1xyXG4gICAgYXBpS2V5Pzogc3RyaW5nIHwgbnVsbDtcclxuICAgIGFwcGxpY2F0aW9uSWQ/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgY2VydEZpbmdlcnByaW50Pzogc3RyaW5nIHwgbnVsbDtcclxufVxyXG5cclxuLy8gQUZUIEFOQUxZU0VSXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGFmdFJlcSB7XHJcbiAgICBhdWRpb1BhdGg6IGFueTtcclxuICAgIGFmdFNldHRpbmc/OiBBZnRTZXR0aW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFmdFNldHRpbmcge1xyXG4gICAgbGFuZ3VhZ2VDb2RlPzogc3RyaW5nIHwgbnVsbDtcclxuICAgIHB1bmN0dWF0aW9uRW5hYmxlZD86IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgdGltZU9mZnNldD86IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgd29yZFRpbWVPZmZzZXRFbmFibGVkPzogYm9vbGVhbiB8IG51bGw7XHJcbiAgICBzZW50ZW5jZVRpbWVPZmZzZXRFbmFibGVkPzogYm9vbGVhbiB8IG51bGw7XHJcbn1cclxuXHJcbi8vIEFTUiBBTkFMWVNFUlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBhc3JSZXEge1xyXG4gICAgbGFuZ3VhZ2U/OiBMQU5HVUFHRSB8IG51bGw7XHJcbiAgICBmZWF0dXJlPzogRkVBVFVSRSB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1MQXNyQ29uc3RhbnRzIHtcclxuICAgIFBVTkNUVUFUSU9OX0VOQUJMRSA9IFwiUFVOQ1RVQVRJT05fRU5BQkxFXCIsXHJcbiAgICBFUlJfTk9fTkVUV09SSyA9IDExMjAyLFxyXG4gICAgRVJSX05PX1VOREVSU1RBTkQgPSAxMTIwNCxcclxuICAgIEVSUl9TRVJWSUNFX1VOQVZBSUxBQkxFID0gMTEyMDMsXHJcbiAgICBGRUFUVVJFID0gXCJGRUFUVVJFXCIsXHJcbiAgICBMQU5HVUFHRSA9IFwiTEFOR1VBR0VcIixcclxuICAgIExBTl9FTl9VUyA9IFwiZW4tVVNcIixcclxuICAgIExBTl9GUl9GUiA9IFwiZnItRlJcIixcclxuICAgIExBTl9aSCA9IFwiemhcIixcclxuICAgIExBTl9aSF9DTiA9IFwiemgtQ05cIixcclxuICAgIExBTl9FU19FUyA9IFwiZXMtRVNcIixcclxuICAgIExBTl9ERV9ERSA9IFwiZGUtREVcIixcclxuICAgIExBTl9SVV9SVSA9IFwicnUtUlVcIixcclxuICAgIExBTl9JVF9JVCA9IFwiaXQtSVRcIixcclxuICAgIExBTl9BUiA9IFwiYXJcIixcclxuICAgIExBTl9USF9USCA9IFwidGhfVEhcIixcclxuICAgIExBTl9NU19NWSA9IFwibXNfTVlcIixcclxuICAgIExBTl9GSUxfUEggPSBcImZpbF9QSFwiLFxyXG4gICAgVHVya2lzaCA9IFwidHItVFJcIixcclxuICAgIEVSUl9JTlZBTElEQVRFX1RPS0VOID0gMTEyMTksXHJcbiAgICBGRUFUVVJFX0FMTElOT05FID0gMTIsXHJcbiAgICBGRUFUVVJFX1dPUkRGTFVYID0gMTEsXHJcbiAgICBTQ0VORVMgPSBcInNjZW5lc1wiLFxyXG4gICAgU0NFTkVTX1NIT1BQSU5HID0gXCJzaG9wcGluZ1wiLFxyXG4gICAgU1RBVEVfTElTVEVOSU5HID0gMSxcclxuICAgIFNUQVRFX05PX05FVFdPUksgPSA3LFxyXG4gICAgU1RBVEVfTk9fU09VTkQgPSAyLFxyXG4gICAgU1RBVEVfTk9fU09VTkRfVElNRVNfRVhDRUVEID0gMyxcclxuICAgIFNUQVRFX05PX1VOREVSU1RBTkQgPSA2LFxyXG4gICAgU1RBVEVfV0FJVElORyA9IDksXHJcbiAgICBBQ1RJT05fSE1TX0FTUl9TUEVFQ0ggPSBcImNvbS5odWF3ZWkuaG1zLm1sc2RrLmFjdGlvbi5SRUNPR05JWkVfU1BFRUNIXCIsXHJcbiAgICBXQVZFX1BBSU5FX0VOQ09ESU5HID0gXCJFTkNPRElOR1wiLFxyXG4gICAgV0FWRV9QQUlORV9TQU1QTEVfUkFURSA9IFwiU0FNUExFX1JBVEVcIixcclxuICAgIFdBVkVfUEFJTkVfQklUX1dJRFRIID0gXCJCSVRfV0lEVEhcIixcclxuICAgIFdBVkVfUEFJTkVfQ0hBTk5FTF9DT1VOVCA9IFwiQ0hBTk5FTF9DT1VOVFwiLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBGRUFUVVJFIHtcclxuICAgIEZFQVRVUkVfQUxMSU5PTkUgPSAxMixcclxuICAgIEZFQVRVUkVfV09SREZMVVggPSAxMSxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTEFOR1VBR0Uge1xyXG4gICAgTEFOX0VOX1VTID0gXCJlbi1VU1wiLFxyXG4gICAgTEFOX0ZSX0ZSID0gXCJmci1GUlwiLFxyXG4gICAgTEFOX1pIID0gXCJ6aFwiLFxyXG4gICAgTEFOX1pIX0NOID0gXCJ6aC1DTlwiLFxyXG4gICAgTEFOX0VTX0VTID0gXCJlcy1FU1wiLFxyXG4gICAgTEFOX0RFX0RFID0gXCJkZS1ERVwiLFxyXG4gICAgTEFOX1JVX1JVID0gXCJydS1SVVwiLFxyXG4gICAgTEFOX0lUX0lUID0gXCJpdC1JVFwiLFxyXG4gICAgTEFOX0FSID0gXCJhclwiLFxyXG4gICAgTEFOX1RIX1RIID0gXCJ0aF9USFwiLFxyXG4gICAgTEFOX01TX01ZID0gXCJtc19NWVwiLFxyXG4gICAgTEFOX0ZJTF9QSCA9IFwiZmlsX1BIXCIsXHJcbiAgICBUdXJraXNoID0gXCJ0ci1UUlwiLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBNTERvY3VtZW50U2tld0NvcnJlY3Rpb25Db25zdGFudCB7XHJcbiAgICBTVUNDRVNTID0gMCxcclxuICAgIERFVEVDVF9GQUlMRUQgPSAxLFxyXG4gICAgQ09SUkVDVElPTl9GQUlMRUQgPSAyLFxyXG4gICAgSU1BR0VfREFUQV9FUlJPUiA9IDMsXHJcbn1cclxuXHJcbi8vTGFuZyBEZXRlY3RcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcmVtb3RlTGFuZ0RldGVjdGlvblJlcSB7XHJcbiAgICBzb3VyY2VUZXh0OiBzdHJpbmc7XHJcbiAgICB0YXNrTW9kZT86IG51bWJlcjtcclxuICAgIHRydXN0ZWRUaHJlc2hvbGQ/OiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBsb2NhbExhbmdEZXRlY3Rpb25SZXEge1xyXG4gICAgc291cmNlVGV4dDogc3RyaW5nO1xyXG4gICAgdHJ1c3RlZFRocmVzaG9sZD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBzeW5jUmVxdWVzdExvY2FsTGFuZ0RldGVjdCB7XHJcbiAgICBzb3VyY2VUZXh0OiBzdHJpbmc7XHJcbiAgICB0cnVzdGVkVGhyZXNob2xkPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBNTExhbmd1YWdlRGV0ZWN0aW9uIHtcclxuICAgIEZJUlNUX0JFU1RfREVURUNUSU9OX0xBTkdVQUdFX1RSVVNURURfVEhSRVNIT0xEID0gMC41LFxyXG4gICAgUFJPQkFCSUxJVFlfREVURUNUSU9OX0xBTkdVQUdFX1RSVVNURURfVEhSRVNIT0xEID0gMC4wMSxcclxuICAgIFVOREVURUNUSU9OX0xBTkdVQUdFX1RSVVNURURfVEhSRVNIT0xEID0gXCJ1bmtub3duXCIsXHJcbn1cclxuXHJcbi8vUlRUXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHJ0dFJlcSB7XHJcbiAgICBtTFNwZWVjaFJlYWxUaW1lVHJhbnNjcmlwdGlvbkNvbmZpZzogTUxTcGVlY2hSZWFsVGltZVRyYW5zY3JpcHRpb25Db25maWc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNTFNwZWVjaFJlYWxUaW1lVHJhbnNjcmlwdGlvbkNvbmZpZyB7XHJcbiAgICBsYW5ndWFnZTogTUxSdHRMYW5ndWFnZXMgfCBudWxsO1xyXG4gICAgcHVuY3R1YXRpb25FbmFibGU6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgd29yZFRpbWVPZmZzZXRFbmFibGU6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgc2VudGVuY2VUaW1lT2Zmc2V0RW5hYmxlOiBib29sZWFuIHwgbnVsbDtcclxuICAgIHNjZW5lcz86IE1MUnR0U2NlbmVzIHwgbnVsbDtcclxufVxyXG5leHBvcnQgZW51bSBNTFJ0dExhbmd1YWdlcyB7XHJcbiAgICBMQU5fWkhfQ04gPSBcInpoLUNOXCIsXHJcbiAgICBMQU5fRU5fVVMgPSBcImVuLVVTXCIsXHJcbiAgICBMQU5fRlJfRlIgPSBcImZyLUZSXCIsXHJcbiAgICBMQU5fRVNfRVMgPSBcImVzLUVTXCIsXHJcbiAgICBMQU5fRU5fSU4gPSBcImVuLUlOXCIsXHJcbiAgICBMQU5fREVfREUgPSBcImRlLURFXCIsXHJcbn1cclxuZXhwb3J0IGVudW0gTUxSdHRTY2VuZXMge1xyXG4gICAgU0NFTkVTX1NIT1BQSU5HZiA9IFwic2hvcHBpbmdcIixcclxufVxyXG5leHBvcnQgZW51bSBNTFNwZWVjaFJlYWxUaW1lVHJhbnNjcmlwdGlvbkNvbnN0YW50cyB7XHJcbiAgICBFUlJfSU5WQUxJREVfVE9LRU4gPSAxMzIxOSxcclxuICAgIEVSUl9OT19ORVRXT1JLID0gMTMyMDIsXHJcbiAgICBFUlJfU0VSVklDRV9DUkVESVQgPSAxMzIyMixcclxuICAgIEVSUl9TRVJWSUNFX1VOU1VCU0NSSUJFRCA9IDEzMjIzLFxyXG4gICAgRVJSX1NFUlZJQ0VfRlJFRV9VU0VEX1VQID0gMTMyMjQsXHJcbiAgICBFUlJfU0VSVklDRV9VTkFWQUlMQUJMRSA9IDEzMjAzLFxyXG4gICAgTEFOX0VOX1VTID0gXCIgZW4tVVNcIixcclxuICAgIExBTl9GUl9GUiA9IFwiZnItRlJcIixcclxuICAgIExBTl9aSF9DTiA9IFwiemgtQ05cIixcclxuICAgIFJFU1VMVFNfUEFSVElBTEZJTkFMID0gXCJSRVNVTFRTX1BBUlRJQUxGSU5BTFwiLFxyXG4gICAgUkVTVUxUU19SRUNPR05JWklORyA9IFwicmVzdWx0c19yZWNvZ25pemluZ1wiLFxyXG4gICAgUkVTVUxUU19TRU5URU5DRV9PRkZTRVQgPSBcIlJFU1VMVFNfU0VOVEVOQ0VfT0ZGU0VUXCIsXHJcbiAgICBSRVNVTFRTX1dPUkRfT0ZGU0VUID0gXCJSRVNVTFRTX1dPUkRfT0ZGU0VUXCIsXHJcbiAgICBTQ0VORVNfU0hPUFBJTkcgPSBcInNob3BwaW5nXCIsXHJcbiAgICBTVEFURV9TRVJWSUNFX1JFQ09OTkVDVEVEID0gNDMsXHJcbiAgICBTVEFURV9TRVJWSUNFX1JFQ09OTkVDVElORyA9IDQyLFxyXG4gICAgU1RBVEVfTElTVEVOSU5HID0gMSxcclxuICAgIFNUQVRFX05PX05FVFdPUksgPSA3LFxyXG4gICAgU1RBVEVfTk9fVU5ERVJTVEFORCA9IDYsXHJcbiAgICBXQVZFX1BBSU5FX0JJVF9XSURUSCA9IFwiQklUX1dJRFRIXCIsXHJcbiAgICBXQVZFX1BBSU5FX0NIQU5ORUxfQ09VTlQgPSBcIkNIQU5ORUxfQ09VTlRcIixcclxuICAgIFdBVkVfUEFJTkVfRU5DT0RJTkcgPSBcIkVOQ09ESU5HXCIsXHJcbiAgICBXQVZFX1BBSU5FX1NBTVBMRV9SQVRFID0gXCJTQU1QTEVfUkFURVwiLFxyXG59XHJcblxyXG4vL1RSQU5TTEFURVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSByZW1vdGV0cmFuc2xhdGVSZXEge1xyXG4gICAgVVNFX1NZTkM6IGJvb2xlYW47XHJcbiAgICB0YXJnZXRMYW5nQ29kZTogTUxUcmFuc2xhdGVMYW5ndWFnZXM7XHJcbiAgICBzb3VyY2VMYW5nQ29kZT86IE1MVHJhbnNsYXRlTGFuZ3VhZ2VzO1xyXG4gICAgc291cmNlVGV4dDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgbG9jYWx0cmFuc2xhdGVSZXEge1xyXG4gICAgVVNFX1NZTkM6IGJvb2xlYW47XHJcbiAgICB0YXJnZXRMYW5nQ29kZTogTUxUcmFuc2xhdGVMYW5ndWFnZXM7XHJcbiAgICBzb3VyY2VMYW5nQ29kZTogTUxUcmFuc2xhdGVMYW5ndWFnZXM7XHJcbiAgICBzb3VyY2VUZXh0OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBkZWxldGVUcmFuc2xhdGVSZXEge1xyXG4gICAgVVNFX1NZTkM6IGJvb2xlYW47XHJcbiAgICBsYW5nY29kZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgZG93bmxvYWRUcmFuc2xhdGVSZXEge1xyXG4gICAgVVNFX1NZTkM6IGJvb2xlYW47XHJcbiAgICBsYW5nY29kZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgbG9jYWxBbGxMYW5nUmVxIHtcclxuICAgIFVTRV9TWU5DOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgcmVtb3RlQWxsTGFuZ1JlcSB7XHJcbiAgICBVU0VfU1lOQzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTUxUcmFuc2xhdGVMYW5ndWFnZXMge1xyXG4gICAgQUZSSUtBQU5TID0gXCJhZlwiLFxyXG4gICAgQVJBQklDID0gXCJhclwiLFxyXG4gICAgQlVMR0FSSUFOID0gXCJiZ1wiLFxyXG4gICAgQlVSTUVTRSA9IFwibXlcIixcclxuICAgIENST0FUSUFOID0gXCJoclwiLFxyXG4gICAgQ1pFQ0ggPSBcImNzXCIsXHJcbiAgICBDSElORVNFID0gXCJ6aFwiLFxyXG4gICAgVFJBRElUSU9OQUxfQ0hJTkVTRSA9IFwiemgtaGtcIixcclxuICAgIERBTklTSCA9IFwiZGFcIixcclxuICAgIERVVENIID0gXCJubFwiLFxyXG4gICAgRVNUT05JQU4gPSBcImV0XCIsXHJcbiAgICBFTkdMSVNIID0gXCJlblwiLFxyXG4gICAgRklOTklTSCA9IFwiZmlcIixcclxuICAgIEZSRU5DSCA9IFwiZnJcIixcclxuICAgIEdFUk1BTiA9IFwiZGVcIixcclxuICAgIEdVSkFSQVRJID0gXCJndVwiLFxyXG4gICAgR1JFRUsgPSBcImVsXCIsXHJcbiAgICBIVU5HQVJJQU4gPSBcImh1XCIsXHJcbiAgICBISU5ESSA9IFwiaGlcIixcclxuICAgIEhFQlJFVyA9IFwiaGVcIixcclxuICAgIElSSVNIID0gXCJpc1wiLFxyXG4gICAgSVRBTElBTiA9IFwiaXRcIixcclxuICAgIElORE9ORVNJQU4gPSBcImlkXCIsXHJcbiAgICBLSE1FUiA9IFwia21cIixcclxuICAgIEtPUkVBTiA9IFwia29cIixcclxuICAgIEpBUEFORVNFID0gXCJqYVwiLFxyXG4gICAgTEFUSU4gPSBcInJtXCIsXHJcbiAgICBMQVRWSUFOID0gXCJsdlwiLFxyXG4gICAgTUFMQVkgPSBcIm1zXCIsXHJcbiAgICBNQVJBVEhJID0gXCJtclwiLFxyXG4gICAgTk9SV0VHSUFOID0gXCJub1wiLFxyXG4gICAgUFVOSkFCSSA9IFwicGFcIixcclxuICAgIFBPTElTSCA9IFwicGxcIixcclxuICAgIFBPUlRVR1VFU0UgPSBcInB0XCIsXHJcbiAgICBQRVJTSUFOID0gXCJmYVwiLFxyXG4gICAgUlVTU0lBTiA9IFwicnVcIixcclxuICAgIFJPTUFOSUFOID0gXCJyb1wiLFxyXG4gICAgU0VSQklBTiA9IFwic3JcIixcclxuICAgIFNQQU5JU0ggPSBcImVzXCIsXHJcbiAgICBTTE9WQUsgPSBcInNrXCIsXHJcbiAgICBTV0VESVNIID0gXCJzdlwiLFxyXG4gICAgVEFNSUwgPSBcInRhXCIsXHJcbiAgICBUVVJLSVNIID0gXCJ0clwiLFxyXG4gICAgVEhBSSA9IFwidGhcIixcclxuICAgIFRBR0FMT0cgPSBcInRsXCIsXHJcbiAgICBURUxVR1UgPSBcInRlXCIsXHJcbiAgICBWSUVUTkFNRVNFID0gXCJ2aVwiLFxyXG59XHJcblxyXG4vLyBTb3VuZCBEZWN0XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHNvdW5kRGVjdFJlcSB7XHJcbiAgICBzdGFydFR5cGU6IGJvb2xlYW4gfCBudWxsO1xyXG59XHJcblxyXG4vLyBUVFMgQU5BTFlTRVJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxUdHNTcGVha2VyIHtcclxuICAgIGxhbmd1YWdlPzogc3RyaW5nIHwgbnVsbDtcclxuICAgIG1vZGVsU2l6ZT86IHN0cmluZyB8IG51bGw7XHJcbiAgICBuYW1lPzogc3RyaW5nIHwgbnVsbDtcclxuICAgIHNwZWFrZXJEZXNjPzogc3RyaW5nIHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSB0dHNFbmdpbmVSZXEge1xyXG4gICAgbGFuZ3VhZ2U/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgcGxheWVyVm9sdW1lPzogbnVtYmVyIHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSB0dHNBbmFseXNlclNldHRpbmdzUmVzdWx0cyB7XHJcbiAgICBsYW5ndWFnZXM6IFN0cmluZ1tdO1xyXG4gICAgc3BlYWtlcnM6IE1MVHRzU3BlYWtlcjtcclxuICAgIHNwZWFrZXI6IE1MVHRzU3BlYWtlcjtcclxuICAgIGlzTGFuZ3VhZ2VBdmFpbGFibGU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSB0dHNSZXEge1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgbWxDb25maWdzOiBNTENvbmZpZ3M7XHJcbiAgICBxdWV1aW5nTW9kZTogTUxUdHNDb25zdGFudHM7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxUdHNBdWRpb0ZyYWdtZW50IHtcclxuICAgIGF1ZGlvRGF0YT86IG51bWJlciB8IG51bGw7XHJcbiAgICBhdWRpb0Zvcm1hdD86IG51bWJlciB8IG51bGw7XHJcbiAgICBjaGFubmVsSW5mbz86IG51bWJlciB8IG51bGw7XHJcbiAgICBTYW1wbGVSYXRlSW5Iej86IG51bWJlciB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1MVHRzQXVkaW9GcmFnbWVudENvbnN0YW50IHtcclxuICAgIENIQU5ORUxfT1VUX01PTk8gPSA0LFxyXG4gICAgRk9STUFUX1BDTV8xNkJJVCA9IDIsXHJcbiAgICBGT1JNQVRfUENNXzhCSVQgPSAxLFxyXG4gICAgU0FNUExFX1JBVEVfMTZLID0gMTYwMDAsXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNTENvbmZpZ3Mge1xyXG4gICAgbGFuZ3VhZ2U6IE1MVHRzQ29uc3RhbnRzO1xyXG4gICAgcGVyc29uOiBNTFR0c0NvbnN0YW50cztcclxuICAgIHNwZWVkOiBudW1iZXI7XHJcbiAgICB2b2x1bWU6IG51bWJlcjtcclxuICAgIHN5bnRoZXNpemVNb2RlOiBNTFR0c0NvbnN0YW50cztcclxufVxyXG5leHBvcnQgZW51bSBNTFR0c0NvbnN0YW50cyB7XHJcbiAgICBFVkVOVF9QTEFZX1NUQVJUID0gMSxcclxuICAgIEVWRU5UX1BMQVlfUkVTVU1FID0gMixcclxuICAgIEVWRU5UX1BMQVlfUEFVU0UgPSAzLFxyXG4gICAgRVZFTlRfUExBWV9TVE9QID0gNCxcclxuICAgIEVWRU5UX1NZTlRIRVNJU19TVEFSVCA9IDUsXHJcbiAgICBFVkVOVF9TWU5USEVTSVNfRU5EID0gNixcclxuICAgIEVWRU5UX1NZTlRIRVNJU19DT01QTEVURSA9IDcsXHJcbiAgICBFVkVOVF9QTEFZX1NUT1BfSU5URVJSVVBURUQgPSBcImludGVycnVwdGVkXCIsXHJcbiAgICBFVkVOVF9TWU5USEVTSVNfSU5URVJSVVBURUQgPSBcImludGVycnVwdGVkXCIsXHJcbiAgICBMQU5HVUFHRV9BVkFJTEFCTEUgPSAwLFxyXG4gICAgTEFOR1VBR0VfTk9UX1NVUFBPUlQgPSAxLFxyXG4gICAgTEFOR1VBR0VfVVBEQVRJTkcgPSAyLFxyXG4gICAgVFRTX0VOX1VTID0gXCJlbi1VU1wiLFxyXG4gICAgVFRTX0xBTl9BUl9BUiA9IFwiYXItQVJcIixcclxuICAgIFRUU19MQU5fVFJfVFIgPSBcInRyLVRSXCIsXHJcbiAgICBUVFNfU1BFQUtFUl9GRU1BTEVfQVIgPSBcImFyLUFSLXN0LTFcIixcclxuICAgIFRUU19TUEVBS0VSX0ZFTUFMRV9UUiA9IFwidHItVFItc3QtMVwiLFxyXG4gICAgVFRTX0xBTl9FU19FUyA9IFwiZXMtRVNcIixcclxuICAgIFRUU19MQU5fRlJfRlIgPSBcImZyLUZSXCIsXHJcbiAgICBUVFNfTEFOX0RFX0RFID0gXCJkZS1ERVwiLFxyXG4gICAgVFRTX0xBTl9JVF9JVCA9IFwiaXQtSVRcIixcclxuICAgIFRUU19MQU5fUlVfUlUgPSBcInJ1LVJVXCIsXHJcbiAgICBUVFNfTEFOX1BMX1BMID0gXCJwbC1QTFwiLFxyXG4gICAgVFRTX0xBTl9USF9USCA9IFwiIHRoLVRIXCIsXHJcbiAgICBUVFNfTEFOX01TX01TID0gXCJtcy1NU1wiLFxyXG4gICAgVFRTX1pIX0hBTlMgPSBcInpoLUhhbnNcIixcclxuICAgIFRUU19TUEVBS0VSX0ZFTUFMRV9FTiA9IFwiRmVtYWxlLWVuXCIsXHJcbiAgICBUVFNfU1BFQUtFUl9GRU1BTEVfWkggPSBcIkZlbWFsZS16aFwiLFxyXG4gICAgVFRTX1NQRUFLRVJfTUFMRV9FTiA9IFwiTWFsZS1lblwiLFxyXG4gICAgVFRTX1NQRUFLRVJfTUFMRV9aSCA9IFwiTWFsZS16aFwiLFxyXG4gICAgVFRTX1NQRUFLRVJfTUFMRV9aSF8yID0gXCJ6aC1IYW5zLXN0LTRcIixcclxuICAgIFRUU19TUEVBS0VSX0ZFTUFMRV9aSF8yID0gXCJ6aC1IYW5zLXN0LTNcIixcclxuICAgIFRUU19TUEVBS0VSX01BTEVfRU5fMiA9IFwiZW4tVVMtc3QtNFwiLFxyXG4gICAgVFRTX1NQRUFLRVJfRkVNQUxFX0VOXzIgPSBcImVuLVVTLXN0LTNcIixcclxuICAgIFRUU19TUEVBS0VSX0ZFTUFMRV9ERSA9IFwiZGUtREUtc3QtMVwiLFxyXG4gICAgVFRTX1NQRUFLRVJfRkVNQUxFX0VTID0gXCJpdC1JVC1zdC0xXCIsXHJcbiAgICBUVFNfU1BFQUtFUl9GRU1BTEVfSVQgPSBcImVzLUVTLXN0LTFcIixcclxuICAgIFRUU19TUEVBS0VSX0ZFTUFMRV9GUiA9IFwiZnItRlItc3QtMVwiLFxyXG4gICAgVFRTX1NQRUFLRVJfRkVNQUxFX1JVID0gXCJydS1SVS1zdC0xXCIsXHJcbiAgICBUVFNfU1BFQUtFUl9GRU1BTEVfUEwgPSBcInBsLVBMLXN0LTFcIixcclxuICAgIFRUU19TUEVBS0VSX0ZFTUFMRV9USCA9IFwidGgtVEgtc3QtMVwiLFxyXG4gICAgVFRTX1NQRUFLRVJfRkVNQUxFX01TID0gXCJtcy1NUy1zdC0xXCIsXHJcbiAgICBUVFNfU1BFQUtFUl9PRkZMSU5FX0VOX1VTX01BTEVfQk9MVCA9IFwiZW4tVVMtc3QtYm9sdC0yXCIsXHJcbiAgICBUVFNfU1BFQUtFUl9PRkZMSU5FX1pIX0hBTlNfRkVNQUxFX0VBR0xFID0gXCJ6aC1IYW5zLXN0LWVhZ2xlLTFcIixcclxuICAgIFRUU19TUEVBS0VSX09GRkxJTkVfWkhfSEFOU19NQUxFX0VBR0xFID0gXCJ6aC1IYW5zLXN0LWVhZ2xlLTJcIixcclxuICAgIFRUU19TUEVBS0VSX09GRkxJTkVfRU5fVVNfRkVNQUxFX0VBR0xFID0gXCJlbi1VUy1zdC1lYWdsZS0xXCIsXHJcbiAgICBUVFNfU1BFQUtFUl9PRkZMSU5FX0VOX1VTX01BTEVfRUFHTEUgPSBcImVuLVVTLXN0LWVhZ2xlLTJcIixcclxuICAgIFRUU19TUEVBS0VSX09GRkxJTkVfRU5fVVNfRkVNQUxFX0JFRSA9IFwiZW4tVVMtc3QtYmVlLTFcIixcclxuICAgIFRUU19TUEVBS0VSX09GRkxJTkVfRlJfRlJfRkVNQUxFX0JFRSA9IFwiZnItRlItc3QtYmVlLTFcIixcclxuICAgIFRUU19TUEVBS0VSX09GRkxJTkVfRVNfRVNfRkVNQUxFX0JFRSA9IFwiZXMtRVMtc3QtYmVlLTFcIixcclxuICAgIFRUU19TUEVBS0VSX09GRkxJTkVfREVfREVfRkVNQUxFX0JFRSA9IFwiZGUtREUtc3QtYmVlLTFcIixcclxuICAgIFRUU19TUEVBS0VSX09GRkxJTkVfSVRfSVRfRkVNQUxFX0JFRSA9IFwiaXQtSVQtc3QtYmVlLTFcIixcclxuICAgIFRUU19TUEVBS0VSX09GRkxJTkVfWkhfSEFOU19GRU1BTEVfQk9MVCA9IFwiemgtSGFucy1zdC1ib2x0LTFcIixcclxuICAgIFRUU19TUEVBS0VSX09GRkxJTkVfWkhfSEFOU19NQUxFX0JPTFQgPSBcInpoLUhhbnMtc3QtYm9sdC0yXCIsXHJcbiAgICBUVFNfU1BFQUtFUl9PRkZMSU5FX0VOX1VTX0ZFTUFMRV9CT0xUID0gXCJlbi1VUy1zdC1ib2x0LTFcIixcclxuICAgIFRUU19PTkxJTkVfTU9ERSA9IFwib25saW5lXCIsXHJcbiAgICBUVFNfT0ZGTElORV9NT0RFID0gXCJvZmZsaW5lXCIsXHJcbiAgICBRVUVVRV9BUFBFTkQgPSAwLFxyXG4gICAgUVVFVUVfRkxVU0ggPSAxLFxyXG4gICAgRVhURVJOQUxfUExBWUJBQ0sgPSAyLFxyXG4gICAgT1BFTl9TVFJFQU0gPSA0LFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDb2xvcnMge1xyXG4gICAgUkVEID0gLTY1NTM2LFxyXG4gICAgREtHUkFZID0gLTEyMzAzMjkyLFxyXG4gICAgR1JBWSA9IC03ODI5MzY4LFxyXG4gICAgV0hJVEUgPSAtMSxcclxuICAgIEJMVUUgPSAtMTY3NzY5NjEsXHJcbiAgICBCTEFDSyA9IC0xNjc3NzIxNixcclxuICAgIExUR1JBWSA9IC0zMzU1NDQ0LFxyXG4gICAgTUFHRU5UQSA9IC02NTI4MSxcclxuICAgIFlFTExPVyA9IC0yNTYsXHJcbiAgICBDWUFOID0gLTE2NzExNjgxLFxyXG4gICAgR1JFRU4gPSAtMTY3MTE5MzYsXHJcbiAgICBUUkFOU1BBUkVOVCA9IDAsXHJcbn1cclxuZXhwb3J0IGVudW0gUmVjdFN0eWxlIHtcclxuICAgIFNUUk9LRSA9IDEsXHJcbiAgICBGSUxMID0gMixcclxuICAgIEZJTExfQU5EX1NUUk9LRSA9IDMsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1MVHRzRXJyb3Ige1xyXG4gICAgRVJSX0FVRElPX1BMQVlFUl9GQUlMRUQgPSAxMTMwNSxcclxuICAgIEVSUl9BVVRIT1JJWkVfRkFJTEVEID0gMTEzMDYsXHJcbiAgICBFUlJfQVVUSE9SSVpFX1RPS0VOX0lOVkFMSURFID0gMTEzMDcsXHJcbiAgICBFUlJfSUxMRUdBTF9QQVJBTUVURVIgPSAxMTMwMSxcclxuICAgIEVSUl9JTlNVRkZJQ0lFTlRfQkFMQU5DRSA9IDExMzAzLFxyXG4gICAgRVJSX0lOVEVSTkFMID0gMTEzOTgsXHJcbiAgICBFUlJfTkVUQ09OTkVDVF9GQUlMRUQgPSAxMTMwMixcclxuICAgIEVSUl9TUEVFQ0hfU1lOVEhFU0lTX0ZBSUxFRCA9IDExMzA0LFxyXG4gICAgRVJSX1VOS05PV04gPSAxMTM5OSxcclxufVxyXG5cclxuLypcclxuLS0tLS0tLS0tLS0tLS0tLS0gcmV0dXJuXHJcbiovXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1MQWZ0UmVzdWx0IHtcclxuICAgIGV2ZW50TmFtZTogc3RyaW5nO1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgdGFza0lkOiBzdHJpbmc7XHJcbiAgICBjb21wbGV0ZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE1MQWZ0RXJyb3JSZXN1bHQge1xyXG4gICAgZXZlbnROYW1lOiBzdHJpbmc7XHJcbiAgICB0YXNrSWQ6IHN0cmluZztcclxuICAgIGVycm9yQ29kZTogTUxBZnRFcnJvckNvZGVzO1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBlbnVtIE1MQWZ0RXJyb3JDb2RlcyB7XHJcbiAgICBFUlJfQVVESU9fRklMRV9OT1RTVVBQT1JURUQgPSAxMTEwMSxcclxuICAgIExBTkdVQUdFX0NPREVfTk9UU1VQUE9SVEVEID0gMTExMDIsXHJcbiAgICBFUlJfQVVESU9fRklMRV9TSVpFX09WRVJGTE9XID0gMTExMDMsXHJcbiAgICBFUlJfQVVESU9fTEVOR1RIX09WRVJGTE9XID0gMTExMDQsXHJcbiAgICBFUlJfRklMRV9OT1RfRk9VTkQgPSAxMTEwNSxcclxuICAgIEVSUl9JTExFR0FMX1BBUkFNRVRFUiA9IDExMTA2LFxyXG4gICAgRVJSX0VOR0lORV9CVVNZID0gMTExMDcsXHJcbiAgICBFUlJfTkVUQ09OTkVDVF9GQUlMRUQgPSAxMTEwOCxcclxuICAgIEVSUl9SRVNVTFRfV0hFTl9VUExPQURJTkcgPSAxMTEwOSxcclxuICAgIEVSUl9UQVNLX05PVF9FWElTVEVEID0gMTExMTAsXHJcbiAgICBFUlJfQVVESU9fVFJBTlNDUklQVF9GQUlMRUQgPSAxMTExMSxcclxuICAgIEVSUl9BVURJT19JTklUX0ZBSUxFRCA9IDExMTEyLFxyXG4gICAgRVJSX0FVRElPX1VQTE9BRF9GQUlMRUQgPSAxMTExMyxcclxuICAgIEVSUl9UQVNLX0FMUkVBRFlfSU5QUk9HUkVTUyA9IDExMTE0LFxyXG4gICAgRVJSX05PX0VOT1VHSF9TVE9SQUdFID0gMTExMTUsXHJcbiAgICBFUlJfQVVUSE9SSVpFX0ZBSUxFRCA9IDExMTE5LFxyXG4gICAgRVJSX1NFUlZJQ0VfQ1JFRElUID0gMTExMjIsXHJcbiAgICBFUlJfU0VSVklDRV9VTlNVQlNDUklCRUQgPSAxMTEyMyxcclxuICAgIEVSUl9TRVJWSUNFX0ZSRUVfVVNFRF9VUCA9IDExMTI0LFxyXG4gICAgRVJSX0lOVEVSTkFMID0gMTExOTgsXHJcbiAgICBFUlJfVU5LTk9XTiA9IDExMTk5LFxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxBZnRFdmVudFJlc3VsdCB7XHJcbiAgICBldmVudE5hbWU6IHN0cmluZztcclxuICAgIHRhc2tJZDogc3RyaW5nO1xyXG4gICAgZXh0OiBzdHJpbmc7XHJcbiAgICBldmVudElkOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGVudW0gTUxBRlRFdmVudENvZGVzIHtcclxuICAgIFBBVVNFX0VWRU5UID0gMixcclxuICAgIFNUT1BfRVZFTlQgPSAzLFxyXG4gICAgVVBMT0FERURfRVZFTlQgPSAxLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBNTEFmdENvbnN0YW50cyB7XHJcbiAgICBMQU5HVUFHRV9aSCA9IFwiemhcIixcclxuICAgIExBTkdVQUdFX0VOX1VTID0gXCJlbi1VU1wiLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1MUmVtb3RlTGFuZ0RldGVjdGlvbiB7XHJcbiAgICBsYW5nQ29kZTogc3RyaW5nO1xyXG4gICAgcHJvYmFiaWxpdHk6IG51bWJlcjtcclxuICAgIGhhc2hDb2RlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxsYW5nRGV0ZWN0aW9uV2l0aEZpcnN0RGV0ZWN0IHtcclxuICAgIGxhbmdDb2RlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxUdHNSZXN1bHQge1xyXG4gICAgZXZlbnROYW1lOiBzdHJpbmc7XHJcbiAgICB0YXNrSUQ6IHN0cmluZztcclxuICAgIHN0YXJ0OiBudW1iZXI7XHJcbiAgICBlbmQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNTFNvdW5kRGVjdFJlc3VsdCB7XHJcbiAgICBzb3VuZFR5cGU6IE1MU291bmREZWN0U291bmRUeXBlUmVzdWx0O1xyXG4gICAgZXZlbnROYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGVudW0gTUxTb3VuZERlY3RTb3VuZFR5cGVSZXN1bHQge1xyXG4gICAgU09VTkRfREVDVF9FUlJPUl9OT19NRU0gPSAxMjIwMSxcclxuICAgIFNPVU5EX0RFQ1RfRVJST1JfRkFUQUxfRVJST1IgPSAxMjIwMixcclxuICAgIFNPVU5EX0RFQ1RfRVJST1JfQVVESU8gPSAxMjIwMyxcclxuICAgIFNPVU5EX0RFQ1RfRVJST1JfSU5URVJOQUwgPSAxMjI5OCxcclxuICAgIFNPVU5EX0VWRU5UX1RZUEVfTEFVR0hURVIgPSAwLFxyXG4gICAgU09VTkRfRVZFTlRfVFlQRV9CQUJZX0NSWSA9IDEsXHJcbiAgICBTT1VORF9FVkVOVF9UWVBFX1NOT1JJTkcgPSAyLFxyXG4gICAgU09VTkRfRVZFTlRfVFlQRV9TTkVFWkUgPSAzLFxyXG4gICAgU09VTkRfRVZFTlRfVFlQRV9TQ1JFQU1JTkcgPSA0LFxyXG4gICAgU09VTkRfRVZFTlRfVFlQRV9NRU9XID0gNSxcclxuICAgIFNPVU5EX0VWRU5UX1RZUEVfQkFSSyA9IDYsXHJcbiAgICBTT1VORF9FVkVOVF9UWVBFX1dBVEVSID0gNyxcclxuICAgIFNPVU5EX0VWRU5UX1RZUEVfQ0FSX0FMQVJNID0gOCxcclxuICAgIFNPVU5EX0VWRU5UX1RZUEVfRE9PUl9CRUxMID0gOSxcclxuICAgIFNPVU5EX0VWRU5UX1RZUEVfS05PQ0sgPSAxMCxcclxuICAgIFNPVU5EX0VWRU5UX1RZUEVfQUxBUk0gPSAxMSxcclxuICAgIFNPVU5EX0VWRU5UX1RZUEVfU1RFQU1fV0hJU1RMRSA9IDEyLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDb3Jkb3ZhRXJyb3JzIHtcclxuICAgIFVOS05PV04gPSAtMSxcclxuICAgIFNVQ0NFU1MgPSAwLFxyXG4gICAgRElTQ0FSREVEID0gMSxcclxuICAgIElOTkVSID0gMixcclxuICAgIElOQUNUSVZFID0gMyxcclxuICAgIE5PVF9TVVBQT1JURUQgPSA0LFxyXG4gICAgSUxMRUdBTF9QQVJBTUVURVIgPSA1LFxyXG4gICAgT1ZFUkRVRSA9IDYsXHJcbiAgICBOT19GT1VORCA9IDcsXHJcbiAgICBEVVBMSUNBVEVfRk9VTkQgPSA4LFxyXG4gICAgTk9fUEVSTUlTU0lPTiA9IDksXHJcbiAgICBJTlNVRkZJQ0lFTlRfUkVTT1VSQ0UgPSAxMCxcclxuICAgIEFOQUxZU0lTX0ZBSUxVUkUgPSAxMSxcclxuICAgIElOVEVSUlVQVEVEID0gMTIsXHJcbiAgICBFWENFRURfUkFOR0UgPSAxMyxcclxuICAgIERBVEFfTUlTU0lORyA9IDE0LFxyXG4gICAgQVVUSEVOVElDQVRJT05fUkVRVUlSRUQgPSAxNSxcclxuICAgIFRGTElURV9OT1RfQ09NUEFUSUJMRSA9IDE2LFxyXG4gICAgSU5TVUZGSUNJRU5UX1NQQUNFID0gMTcsXHJcbiAgICBIQVNIX01JU1MgPSAxOCxcclxuICAgIFRPS0VOX0lOVkFMSUQgPSAxOSxcclxuICAgIFNFUlZJQ0VfRkFJTFVSRSA9IDIwLFxyXG4gICAgQU5BTFlTSVNfTlVMTCA9IDIxLFxyXG59XHJcbiJdfQ==