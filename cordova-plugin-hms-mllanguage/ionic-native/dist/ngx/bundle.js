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

'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var HMSMLPlugin = /** @class */ (function (_super) {
    tslib.__extends(HMSMLPlugin, _super);
    function HMSMLPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * It sets Api Key or access token for application.
     * @param  {configReq} params Represents your API_KEY.
     * @returns Promise<any>
     */
    HMSMLPlugin.prototype.serviceInitializer = function (params) { return core.cordova(this, "serviceInitializer", { "otherPromise": true }, arguments); };
    /**
     * An app information class used to store basic information about apps with the HMS Core ML SDK integrated and complete the initialization of ML Kit. When using cloud services of the ML Kit, you need to set the apiKey of your app.
     * @param  {appSettingReq} appSettingReq Represents the parameter required.
     * @returns Promise<any>
     */
    HMSMLPlugin.prototype.appSetting = function (appSettingReq) { return core.cordova(this, "appSetting", { "otherPromise": true }, arguments); };
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
    HMSMLPlugin.prototype.setUserRegion = function (region) { return core.cordova(this, "setUserRegion", { "otherPromise": true }, arguments); };
    /**
     * Obtains the country/region code of the data processing location you have specified when you choose to manually manage and specify such a location.
     * @returns Promise<String>
     */
    HMSMLPlugin.prototype.getCountryCode = function () { return core.cordova(this, "getCountryCode", { "otherPromise": true }, arguments); };
    /**
     * This service enable logger service.
     * @returns Promise<any>
     */
    HMSMLPlugin.prototype.enableLogger = function () { return core.cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    /**
     * This service disable logger service.
     * @returns Promise<any>
     */
    HMSMLPlugin.prototype.disableLogger = function () { return core.cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSMLPlugin.prototype, "FEATURE", {
        get: function () { return core.cordovaPropertyGet(this, "FEATURE"); },
        set: function (value) { core.cordovaPropertySet(this, "FEATURE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLPlugin.prototype, "LANGUAGE", {
        get: function () { return core.cordovaPropertyGet(this, "LANGUAGE"); },
        set: function (value) { core.cordovaPropertySet(this, "LANGUAGE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLPlugin.prototype, "MLTtsConstants", {
        get: function () { return core.cordovaPropertyGet(this, "MLTtsConstants"); },
        set: function (value) { core.cordovaPropertySet(this, "MLTtsConstants", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLPlugin.prototype, "Colors", {
        get: function () { return core.cordovaPropertyGet(this, "Colors"); },
        set: function (value) { core.cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLPlugin.prototype, "RectStyle", {
        get: function () { return core.cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { core.cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLPlugin.prototype, "MLRttLanguages", {
        get: function () { return core.cordovaPropertyGet(this, "MLRttLanguages"); },
        set: function (value) { core.cordovaPropertySet(this, "MLRttLanguages", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLPlugin.prototype, "MLRttScenes", {
        get: function () { return core.cordovaPropertyGet(this, "MLRttScenes"); },
        set: function (value) { core.cordovaPropertySet(this, "MLRttScenes", value); },
        enumerable: false,
        configurable: true
    });
    HMSMLPlugin.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSMLPlugin, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HMSMLPlugin.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSMLPlugin });
    HMSMLPlugin.pluginName = "HMSMLPlugin";
    HMSMLPlugin.plugin = "cordova-plugin-hms-mllanguage";
    HMSMLPlugin.pluginRef = "HMSMLPlugin";
    HMSMLPlugin.platforms = ["Android"];
    HMSMLPlugin = tslib.__decorate([], HMSMLPlugin);
    return HMSMLPlugin;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSMLPlugin, decorators: [{
            type: i0.Injectable
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
    tslib.__extends(HMSMLLanguage, _super);
    function HMSMLLanguage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param  {syncProbabilityDetect} syncRequestLocalLangDetect Represents the parameter.
     * @returns Promise<MLRemoteLangDetection>
     */
    HMSMLLanguage.prototype.syncProbabilityDetect = function (syncProbabilityDetect) { return core.cordova(this, "syncProbabilityDetect", { "otherPromise": true }, arguments); };
    /**
     * @param  {syncProbabilityDetect} syncProbabilityDetect Represents the parameter.
     * @returns Promise<String>
     */
    HMSMLLanguage.prototype.syncFirstBestDetect = function (syncProbabilityDetect) { return core.cordova(this, "syncFirstBestDetect", { "otherPromise": true }, arguments); };
    /**
     * Implements on-cloud text translation.
     * @param  {remotetranslateReq} remotetranslateReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.remoteTranslator = function (remotetranslateReq) { return core.cordova(this, "remoteTranslator", { "otherPromise": true }, arguments); };
    /**
     * Implements on-cloud text translation.
     * @param  {localtranslateReq} localtranslateReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.localTranslator = function (localtranslateReq) { return core.cordova(this, "localTranslator", { "otherPromise": true }, arguments); };
    /**
     * Obtains all languages supported for local translation.
     * @param  {localAllLangReq} localAllLangReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.translatorLocalAllLang = function (localAllLangReq) { return core.cordova(this, "translatorLocalAllLang", { "otherPromise": true }, arguments); };
    /**
     * Obtains all languages supported for on-cloud translation.
     * @param  {remoteAllLangReq} remoteAllLangReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.translatorRemoteAllLang = function (remoteAllLangReq) { return core.cordova(this, "translatorRemoteAllLang", { "otherPromise": true }, arguments); };
    /**
     * Detects languages on the cloud.
     * @param  {remoteLangDetectionReq} remoteLangDetectionReq Represents the parameter required for lang detection.
     * @returns Promise<RemoteLangDetectionAnalyser> | Promise<langDetectionWithFirstDetect>
     */
    HMSMLLanguage.prototype.remoteLangDetection = function (remoteLangDetectionReq) { return core.cordova(this, "remoteLangDetection", { "otherPromise": true }, arguments); };
    /**
     * Detects languages on local.
     * @param  {localLangDetectionReq} localLangDetectionReq Represents the parameter required for lang detection.
     * @returns Promise<any> | Promise<any>
     */
    HMSMLLanguage.prototype.localLangDetection = function (localLangDetectionReq) { return core.cordova(this, "localLangDetection", { "otherPromise": true }, arguments); };
    /**
     * Download language model.
     * @param  {downloadTranslateReq} downloadTranslateReq Represents the parameter required for download model.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.translatorDownloadModel = function (downloadTranslateReq) { return core.cordova(this, "translatorDownloadModel", { "otherPromise": true }, arguments); };
    /**
     * For delete language model.
     * @param  {deleteTranslateReq} deleteTranslateReq Represents the parameter required for delete model.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.translatorDeleteModel = function (deleteTranslateReq) { return core.cordova(this, "translatorDeleteModel", { "otherPromise": true }, arguments); };
    /**
     * This method stop translator service.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.stopTranslatorService = function () { return core.cordova(this, "stopTranslatorService", { "otherPromise": true }, arguments); };
    /**
     * This method return RTT setting.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.getRTTSetting = function () { return core.cordova(this, "getRTTSetting", { "otherPromise": true }, arguments); };
    /**
     * This method returns TTS setting.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.getTTSSetting = function () { return core.cordova(this, "getTTSSetting", { "otherPromise": true }, arguments); };
    /**
     * This method returns AFT setting.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.getAFTSetting = function () { return core.cordova(this, "getAFTSetting", { "otherPromise": true }, arguments); };
    /**
     * This method returns Lang Detection setting.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.getLangDetectionSetting = function () { return core.cordova(this, "getLangDetectionSetting", { "otherPromise": true }, arguments); };
    /**
     * This method stop lang detection service.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.stopLangDetectionService = function () { return core.cordova(this, "stopLangDetectionService", { "otherPromise": true }, arguments); };
    /**
     * The sound detection service can detect sound events in online (real-time recording) mode. The detected sound events can help you perform subsequent actions.
     * @param  {soundDectReq} soundDectReq Represents the parameter required for Sound Detection analyser.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.soundDectAnalyser = function (soundDectReq) { return core.cordova(this, "soundDectAnalyser", { "otherPromise": true }, arguments); };
    /**
     * TTS can convert text information into audio output. Rich timbres, and volume and speed options are supported to produce more natural sounds.
     * @param  {ttsReq} ttsReq Represents the parameter required for text to speech.
     * @returns Promise<TtsAnalyser>
     */
    HMSMLLanguage.prototype.ttsAnalyser = function (ttsReq) { return core.cordova(this, "ttsAnalyser", { "otherPromise": true }, arguments); };
    /**
     * TTS can convert text information into audio output offline. Rich timbres, and volume and speed options are supported to produce more natural sounds.
     * @param  {ttsReq} ttsReq Represents the parameter required for text to speech.
     * @returns Promise<TtsAnalyser>
     */
    HMSMLLanguage.prototype.ttsOfflineAnalyser = function (ttsReq) { return core.cordova(this, "ttsOfflineAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This service stop text to speech (TTS) service.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.ttsAnalyserStop = function () { return core.cordova(this, "ttsAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * This service pauses text to speech (TTS) analyser.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.ttsAnalyserPause = function () { return core.cordova(this, "ttsAnalyserPause", { "otherPromise": true }, arguments); };
    /**
     * This service continues text to speech (TTS) analyser.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.ttsAnalyserResume = function () { return core.cordova(this, "ttsAnalyserResume", { "otherPromise": true }, arguments); };
    /**
     * This service shutdown text to speech (TTS) analyser.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.ttsAnalysershutDown = function () { return core.cordova(this, "ttsAnalysershutDown", { "otherPromise": true }, arguments); };
    /**
     * This method returns TTS Download setting.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.ttsAnalyserDownloadSetting = function () { return core.cordova(this, "ttsAnalyserDownloadSetting", { "otherPromise": true }, arguments); };
    /**
     * This service close AFT analyser.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.aftAnalyserClose = function () { return core.cordova(this, "aftAnalyserClose", { "otherPromise": true }, arguments); };
    /**
     * This service stop AFT analyser.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.asrAnalyserStop = function () { return core.cordova(this, "asrAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * This service destroy AFT analyser.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.aftAnalyserDestroy = function () { return core.cordova(this, "aftAnalyserDestroy", { "otherPromise": true }, arguments); };
    /**
     * This service pause AFT analyser.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.aftAnalyserPause = function () { return core.cordova(this, "aftAnalyserPause", { "otherPromise": true }, arguments); };
    /**
     * This service destroy Sound Detection analyser.
     * @returns Promise<any>
     */
    HMSMLLanguage.prototype.soundDectAnalyserDestroy = function () { return core.cordova(this, "soundDectAnalyserDestroy", { "otherPromise": true }, arguments); };
    /**
     * The audio file transcription service can convert an audio file less than or equal to 60 seconds into a text file. Currently, Chinese and English are supported.
     * @param  {aftReq} aftReq Represents the parameter required for aft analyser.
     * @returns Promise<AftAnalyser>
     */
    HMSMLLanguage.prototype.aftAnalyser = function (aftReq) { return core.cordova(this, "aftAnalyser", { "otherPromise": true }, arguments); };
    HMSMLLanguage.prototype.asrAnalyser = function (asrReq) { return core.cordova(this, "asrAnalyser", { "observable": true }, arguments); };
    HMSMLLanguage.prototype.rttAnalyserStart = function (rttReq) { return core.cordova(this, "rttAnalyserStart", { "observable": true }, arguments); };
    HMSMLLanguage.prototype.rttAnalyserStop = function () { return core.cordova(this, "rttAnalyserStop", { "observable": true }, arguments); };
    Object.defineProperty(HMSMLLanguage.prototype, "FEATURE", {
        get: function () { return core.cordovaPropertyGet(this, "FEATURE"); },
        set: function (value) { core.cordovaPropertySet(this, "FEATURE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLLanguage.prototype, "LANGUAGE", {
        get: function () { return core.cordovaPropertyGet(this, "LANGUAGE"); },
        set: function (value) { core.cordovaPropertySet(this, "LANGUAGE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLLanguage.prototype, "MLTtsConstants", {
        get: function () { return core.cordovaPropertyGet(this, "MLTtsConstants"); },
        set: function (value) { core.cordovaPropertySet(this, "MLTtsConstants", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLLanguage.prototype, "Colors", {
        get: function () { return core.cordovaPropertyGet(this, "Colors"); },
        set: function (value) { core.cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLLanguage.prototype, "RectStyle", {
        get: function () { return core.cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { core.cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLLanguage.prototype, "MLRttLanguages", {
        get: function () { return core.cordovaPropertyGet(this, "MLRttLanguages"); },
        set: function (value) { core.cordovaPropertySet(this, "MLRttLanguages", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLLanguage.prototype, "MLRttScenes", {
        get: function () { return core.cordovaPropertyGet(this, "MLRttScenes"); },
        set: function (value) { core.cordovaPropertySet(this, "MLRttScenes", value); },
        enumerable: false,
        configurable: true
    });
    HMSMLLanguage.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSMLLanguage, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HMSMLLanguage.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSMLLanguage });
    HMSMLLanguage.pluginName = "HMSMLLanguage";
    HMSMLLanguage.plugin = "cordova-plugin-hms-mllanguage";
    HMSMLLanguage.pluginRef = "HMSMLLanguage";
    HMSMLLanguage.platforms = ["Android"];
    HMSMLLanguage = tslib.__decorate([], HMSMLLanguage);
    return HMSMLLanguage;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSMLLanguage, decorators: [{
            type: i0.Injectable
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
exports.MLAsrConstants = void 0;
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
})(exports.MLAsrConstants || (exports.MLAsrConstants = {}));
exports.FEATURE = void 0;
(function (FEATURE) {
    FEATURE[FEATURE["FEATURE_ALLINONE"] = 12] = "FEATURE_ALLINONE";
    FEATURE[FEATURE["FEATURE_WORDFLUX"] = 11] = "FEATURE_WORDFLUX";
})(exports.FEATURE || (exports.FEATURE = {}));
exports.LANGUAGE = void 0;
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
})(exports.LANGUAGE || (exports.LANGUAGE = {}));
exports.MLDocumentSkewCorrectionConstant = void 0;
(function (MLDocumentSkewCorrectionConstant) {
    MLDocumentSkewCorrectionConstant[MLDocumentSkewCorrectionConstant["SUCCESS"] = 0] = "SUCCESS";
    MLDocumentSkewCorrectionConstant[MLDocumentSkewCorrectionConstant["DETECT_FAILED"] = 1] = "DETECT_FAILED";
    MLDocumentSkewCorrectionConstant[MLDocumentSkewCorrectionConstant["CORRECTION_FAILED"] = 2] = "CORRECTION_FAILED";
    MLDocumentSkewCorrectionConstant[MLDocumentSkewCorrectionConstant["IMAGE_DATA_ERROR"] = 3] = "IMAGE_DATA_ERROR";
})(exports.MLDocumentSkewCorrectionConstant || (exports.MLDocumentSkewCorrectionConstant = {}));
exports.MLLanguageDetection = void 0;
(function (MLLanguageDetection) {
    MLLanguageDetection[MLLanguageDetection["FIRST_BEST_DETECTION_LANGUAGE_TRUSTED_THRESHOLD"] = 0.5] = "FIRST_BEST_DETECTION_LANGUAGE_TRUSTED_THRESHOLD";
    MLLanguageDetection[MLLanguageDetection["PROBABILITY_DETECTION_LANGUAGE_TRUSTED_THRESHOLD"] = 0.01] = "PROBABILITY_DETECTION_LANGUAGE_TRUSTED_THRESHOLD";
    MLLanguageDetection["UNDETECTION_LANGUAGE_TRUSTED_THRESHOLD"] = "unknown";
})(exports.MLLanguageDetection || (exports.MLLanguageDetection = {}));
exports.MLRttLanguages = void 0;
(function (MLRttLanguages) {
    MLRttLanguages["LAN_ZH_CN"] = "zh-CN";
    MLRttLanguages["LAN_EN_US"] = "en-US";
    MLRttLanguages["LAN_FR_FR"] = "fr-FR";
    MLRttLanguages["LAN_ES_ES"] = "es-ES";
    MLRttLanguages["LAN_EN_IN"] = "en-IN";
    MLRttLanguages["LAN_DE_DE"] = "de-DE";
})(exports.MLRttLanguages || (exports.MLRttLanguages = {}));
exports.MLRttScenes = void 0;
(function (MLRttScenes) {
    MLRttScenes["SCENES_SHOPPINGf"] = "shopping";
})(exports.MLRttScenes || (exports.MLRttScenes = {}));
exports.MLSpeechRealTimeTranscriptionConstants = void 0;
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
})(exports.MLSpeechRealTimeTranscriptionConstants || (exports.MLSpeechRealTimeTranscriptionConstants = {}));
exports.MLTranslateLanguages = void 0;
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
})(exports.MLTranslateLanguages || (exports.MLTranslateLanguages = {}));
exports.MLTtsAudioFragmentConstant = void 0;
(function (MLTtsAudioFragmentConstant) {
    MLTtsAudioFragmentConstant[MLTtsAudioFragmentConstant["CHANNEL_OUT_MONO"] = 4] = "CHANNEL_OUT_MONO";
    MLTtsAudioFragmentConstant[MLTtsAudioFragmentConstant["FORMAT_PCM_16BIT"] = 2] = "FORMAT_PCM_16BIT";
    MLTtsAudioFragmentConstant[MLTtsAudioFragmentConstant["FORMAT_PCM_8BIT"] = 1] = "FORMAT_PCM_8BIT";
    MLTtsAudioFragmentConstant[MLTtsAudioFragmentConstant["SAMPLE_RATE_16K"] = 16000] = "SAMPLE_RATE_16K";
})(exports.MLTtsAudioFragmentConstant || (exports.MLTtsAudioFragmentConstant = {}));
exports.MLTtsConstants = void 0;
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
})(exports.MLTtsConstants || (exports.MLTtsConstants = {}));
exports.Colors = void 0;
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
})(exports.Colors || (exports.Colors = {}));
exports.RectStyle = void 0;
(function (RectStyle) {
    RectStyle[RectStyle["STROKE"] = 1] = "STROKE";
    RectStyle[RectStyle["FILL"] = 2] = "FILL";
    RectStyle[RectStyle["FILL_AND_STROKE"] = 3] = "FILL_AND_STROKE";
})(exports.RectStyle || (exports.RectStyle = {}));
exports.MLTtsError = void 0;
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
})(exports.MLTtsError || (exports.MLTtsError = {}));
exports.MLAftErrorCodes = void 0;
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
})(exports.MLAftErrorCodes || (exports.MLAftErrorCodes = {}));
exports.MLAFTEventCodes = void 0;
(function (MLAFTEventCodes) {
    MLAFTEventCodes[MLAFTEventCodes["PAUSE_EVENT"] = 2] = "PAUSE_EVENT";
    MLAFTEventCodes[MLAFTEventCodes["STOP_EVENT"] = 3] = "STOP_EVENT";
    MLAFTEventCodes[MLAFTEventCodes["UPLOADED_EVENT"] = 1] = "UPLOADED_EVENT";
})(exports.MLAFTEventCodes || (exports.MLAFTEventCodes = {}));
exports.MLAftConstants = void 0;
(function (MLAftConstants) {
    MLAftConstants["LANGUAGE_ZH"] = "zh";
    MLAftConstants["LANGUAGE_EN_US"] = "en-US";
})(exports.MLAftConstants || (exports.MLAftConstants = {}));
exports.MLSoundDectSoundTypeResult = void 0;
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
})(exports.MLSoundDectSoundTypeResult || (exports.MLSoundDectSoundTypeResult = {}));
exports.CordovaErrors = void 0;
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
})(exports.CordovaErrors || (exports.CordovaErrors = {}));

exports.HMSMLLanguage = HMSMLLanguage;
exports.HMSMLPlugin = HMSMLPlugin;
