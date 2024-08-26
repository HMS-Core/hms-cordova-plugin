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

var HMSMLTextPlugin = /** @class */ (function (_super) {
    tslib.__extends(HMSMLTextPlugin, _super);
    function HMSMLTextPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Monitors photographing.
     * @returns Promise<any>
     */
    HMSMLTextPlugin.prototype.photograph = function () { return core.cordova(this, "photograph", { "otherPromise": true }, arguments); };
    /**
     * Close lens engine.
     * @returns Promise<any>
     */
    HMSMLTextPlugin.prototype.destroy = function () { return core.cordova(this, "destroy", { "otherPromise": true }, arguments); };
    /**
     * Obtains the size of the preview image of a camera.
     * @returns Promise<any>
     */
    HMSMLTextPlugin.prototype.getDisplayDimension = function () { return core.cordova(this, "getDisplayDimension", { "otherPromise": true }, arguments); };
    /**
     * An app information class used to store basic information about apps with the HMS Core ML SDK integrated and complete the initialization of ML Text Kit. When using cloud services of the ML Text Kit, you need to set the apiKey of your app.
     * @param  {appSettingReq} appSettingReq Represents the parameter required.
     * @returns Promise<any>
     */
    HMSMLTextPlugin.prototype.appSetting = function (appSettingReq) { return core.cordova(this, "appSetting", { "otherPromise": true }, arguments); };
    /**
     * Determines whether to collect statistics on the current app.
     * @param {any} any
     * @returns Promise<any>
     */
    HMSMLTextPlugin.prototype.setStatistic = function (any) { return core.cordova(this, "setStatistic", { "otherPromise": true }, arguments); };
    /**
     * Determines whether to collect statistics on the current app.
     ** @param {any} any
     *  @returns Promise<any>
     */
    HMSMLTextPlugin.prototype.getStatistic = function (any) { return core.cordova(this, "getStatistic", { "otherPromise": true }, arguments); };
    /**
     * This service enable logger service.
     * @returns Promise<any>
     */
    HMSMLTextPlugin.prototype.enableLogger = function () { return core.cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    /**
     * This service disable logger service.
     * @returns Promise<any>
     */
    HMSMLTextPlugin.prototype.disableLogger = function () { return core.cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSMLTextPlugin.prototype, "MLLocalTextSetting", {
        get: function () { return core.cordovaPropertyGet(this, "MLLocalTextSetting"); },
        set: function (value) { core.cordovaPropertySet(this, "MLLocalTextSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPlugin.prototype, "icrVnCaptureType", {
        get: function () { return core.cordovaPropertyGet(this, "icrVnCaptureType"); },
        set: function (value) { core.cordovaPropertySet(this, "icrVnCaptureType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPlugin.prototype, "MLTextConfig", {
        get: function () { return core.cordovaPropertyGet(this, "MLTextConfig"); },
        set: function (value) { core.cordovaPropertySet(this, "MLTextConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPlugin.prototype, "MLRemoteTextSetting", {
        get: function () { return core.cordovaPropertyGet(this, "MLRemoteTextSetting"); },
        set: function (value) { core.cordovaPropertySet(this, "MLRemoteTextSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPlugin.prototype, "MLBcrCaptureConfig", {
        get: function () { return core.cordovaPropertyGet(this, "MLBcrCaptureConfig"); },
        set: function (value) { core.cordovaPropertySet(this, "MLBcrCaptureConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPlugin.prototype, "MLGcrCaptureUIConfig", {
        get: function () { return core.cordovaPropertyGet(this, "MLGcrCaptureUIConfig"); },
        set: function (value) { core.cordovaPropertySet(this, "MLGcrCaptureUIConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPlugin.prototype, "MLBcrResultConfig", {
        get: function () { return core.cordovaPropertyGet(this, "MLBcrResultConfig"); },
        set: function (value) { core.cordovaPropertySet(this, "MLBcrResultConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPlugin.prototype, "ImgSuperResolutionConfig", {
        get: function () { return core.cordovaPropertyGet(this, "ImgSuperResolutionConfig"); },
        set: function (value) { core.cordovaPropertySet(this, "ImgSuperResolutionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPlugin.prototype, "MLFormRecogitionConfig", {
        get: function () { return core.cordovaPropertyGet(this, "MLFormRecogitionConfig"); },
        set: function (value) { core.cordovaPropertySet(this, "MLFormRecogitionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPlugin.prototype, "MLProductConfig", {
        get: function () { return core.cordovaPropertyGet(this, "MLProductConfig"); },
        set: function (value) { core.cordovaPropertySet(this, "MLProductConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPlugin.prototype, "gcrCaptureType", {
        get: function () { return core.cordovaPropertyGet(this, "gcrCaptureType"); },
        set: function (value) { core.cordovaPropertySet(this, "gcrCaptureType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPlugin.prototype, "Colors", {
        get: function () { return core.cordovaPropertyGet(this, "Colors"); },
        set: function (value) { core.cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    HMSMLTextPlugin.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSMLTextPlugin, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HMSMLTextPlugin.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSMLTextPlugin });
    HMSMLTextPlugin.pluginName = "HMSMLTextPlugin";
    HMSMLTextPlugin.plugin = "cordova-plugin-hms-mltext";
    HMSMLTextPlugin.pluginRef = "HMSMLTextPlugin";
    HMSMLTextPlugin.platforms = ["Android"];
    HMSMLTextPlugin = tslib.__decorate([], HMSMLTextPlugin);
    return HMSMLTextPlugin;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSMLTextPlugin, decorators: [{
            type: i0.Injectable
        }], propDecorators: { MLLocalTextSetting: [], icrVnCaptureType: [], MLTextConfig: [], MLRemoteTextSetting: [], MLBcrCaptureConfig: [], MLGcrCaptureUIConfig: [], MLBcrResultConfig: [], ImgSuperResolutionConfig: [], MLFormRecogitionConfig: [], MLProductConfig: [], gcrCaptureType: [], Colors: [], 
        /**
         * Monitors photographing.
         * @returns Promise<any>
         */
        photograph: [], 
        /**
         * Close lens engine.
         * @returns Promise<any>
         */
        destroy: [], 
        /**
         * Obtains the size of the preview image of a camera.
         * @returns Promise<any>
         */
        getDisplayDimension: [], 
        /**
         * An app information class used to store basic information about apps with the HMS Core ML SDK integrated and complete the initialization of ML Text Kit. When using cloud services of the ML Text Kit, you need to set the apiKey of your app.
         * @param  {appSettingReq} appSettingReq Represents the parameter required.
         * @returns Promise<any>
         */
        appSetting: [], 
        /**
         * Determines whether to collect statistics on the current app.
         * @param {any} any
         * @returns Promise<any>
         */
        setStatistic: [], 
        /**
         * Determines whether to collect statistics on the current app.
         ** @param {any} any
         *  @returns Promise<any>
         */
        getStatistic: [], 
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
var HMSMLText = /** @class */ (function (_super) {
    tslib.__extends(HMSMLText, _super);
    function HMSMLText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This method start the Text analyzer.
     * @param  {localImageTextReq|remoteImageTextReq} ImageTextAnalyserInput Reperesents the necessary parameters to convert images to text format.
     * @returns Promise <TextAnalyser>
     */
    HMSMLText.prototype.imageTextAnalyser = function (ImageTextAnalyserInput) { return core.cordova(this, "imageTextAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method stop the Text analyzer.
     * @returns Promise<any>
     */
    HMSMLText.prototype.stopTextAnalyser = function () { return core.cordova(this, "stopTextAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method gives Text Analyser information.
     * @returns Promise<any>
     */
    HMSMLText.prototype.getTextAnalyserInfo = function () { return core.cordova(this, "getTextAnalyserInfo", { "otherPromise": true }, arguments); };
    /**
     * This method provides a document recognition component that recognizes text from images of documents.
     * @param  {documentImageAnalyserReq} documentImageAnalyserReq Reperesents the necessary parameter to convert document images to text format.
     * @returns Promise<DocumentAnalyser>
     */
    HMSMLText.prototype.documentImageAnalyser = function (documentImageAnalyserReq) { return core.cordova(this, "documentImageAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method stop the Document analyzer.
     * @returns Promise<any>
     */
    HMSMLText.prototype.stopDocumentImageAnalyser = function () { return core.cordova(this, "stopDocumentImageAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method close the Document analyzer.
     * @returns Promise<any>
     */
    HMSMLText.prototype.closeDocumentImageAnalyser = function () { return core.cordova(this, "closeDocumentImageAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method returns the Document analyzer setting.
     * @returns Promise<any>
     */
    HMSMLText.prototype.getDocumentImageAnalyserSetting = function () { return core.cordova(this, "getDocumentImageAnalyserSetting", { "otherPromise": true }, arguments); };
    /**
     * This method returns the Image analyzer setting.
     * @returns Promise<any>
     */
    HMSMLText.prototype.getTextAnalyserSetting = function () { return core.cordova(this, "getTextAnalyserSetting", { "otherPromise": true }, arguments); };
    /**
     * This method returns the GCR setting.
     * @returns Promise<any>
     */
    HMSMLText.prototype.getGCRSetting = function () { return core.cordova(this, "getGCRSetting", { "otherPromise": true }, arguments); };
    /**
     * This method stop the Form Recognition Analyzer.
     * @returns Promise<any>
     */
    HMSMLText.prototype.stopFormRecognitionAnalyser = function () { return core.cordova(this, "stopFormRecognitionAnalyser", { "otherPromise": true }, arguments); };
    /**
     * The bank card recognition service recognizes bank cards in camera streams within angle offset of 15 degrees and extracts key information such as card number and validity period.
     * @param  {bankCardSDKDetectorReq|bankCardPluginDetectorReq} bankCardDetecterInput Represents the parameter required for bank card recognition.
     * @returns Promise<BankCardAnalyser> | Promise<BankCardAnalyser>
     */
    HMSMLText.prototype.bankCardDetector = function (bankCardDetecterInput) {
        return;
    };
    /**
     * This method stop bankcard recognition service.
     * @returns Promise<any>
     */
    HMSMLText.prototype.stopBankCardDetector = function () { return core.cordova(this, "stopBankCardDetector", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.setResultTypeBcr = function (mLBcrCaptureConfig) { return core.cordova(this, "setResultTypeBcr", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.setRecModeBcr = function (mLBcrCaptureConfig) { return core.cordova(this, "setRecModeBcr", { "otherPromise": true }, arguments); };
    /**
     * This method returns the BCR setting.
     * @returns Promise<any>
     */
    HMSMLText.prototype.getBankCardDetectorSetting = function () { return core.cordova(this, "getBankCardDetectorSetting", { "otherPromise": true }, arguments); };
    /**
     * The general card recognition service provides a universal development framework based on the text recognition technology.
     * @param  {generalCardDetectorReq} generalCardDetectorReq Represents the parameter required for general card recognition plug-in.
     * @returns Promise<GeneralCardAnalyser>
     */
    HMSMLText.prototype.generalCardDetector = function (generalCardDetectorReq) { return core.cordova(this, "generalCardDetector", { "otherPromise": true }, arguments); };
    /**
     * The general Vietnam id card  recognition service provides a universal development framework based on the text recognition technology.
     * @param  {icrVnDetectorReq} icrVnDetectorReq Represents the parameter required for general card recognition plug-in.
     * @returns Promise<MLVnIcrCaptureResult>
     */
    HMSMLText.prototype.icrVnCardDetector = function (icrVnDetectorReq) { return core.cordova(this, "icrVnCardDetector", { "otherPromise": true }, arguments); };
    /**
     * The form recognition service uses AI technologies to recognize and return form structure information (including rows, columns, and coordinates of cells) and form text in Chinese and English (including punctuation) from input images.
     * @param  {formRecognizerAnalyserReq} formRecognizerAnalyserReq Represents the parameter required for general card recognition plug-in.
     * @returns Promise<GeneralCardAnalyser>
     */
    HMSMLText.prototype.formRecognitionAnalyser = function (formRecognizerAnalyserReq) { return core.cordova(this, "formRecognitionAnalyser", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.icrLocalAnalyser = function (localAnalyserReq) { return core.cordova(this, "icrLocalAnalyser", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.icrLocalAnalyserCreateIdCard = function (createIdCardReq) { return core.cordova(this, "icrLocalAnalyserCreateIdCard", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.icrLocalAnalyserStop = function () { return core.cordova(this, "icrLocalAnalyserStop", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.geticrCnCardInstance = function () { return core.cordova(this, "geticrCnCardInstance", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.icrCnCardCreate = function () { return core.cordova(this, "icrCnCardCreate", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.geticrVnCardInstance = function () { return core.cordova(this, "geticrVnCardInstance", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.icrVnCardCreate = function () { return core.cordova(this, "icrVnCardCreate", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.getIcrVnCapture = function () { return core.cordova(this, "getIcrVnCapture", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.startCustomizedView = function (userProps) { return core.cordova(this, "startCustomizedView", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.switchLight = function () { return core.cordova(this, "switchLight", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.getLightStatus = function () { return core.cordova(this, "getLightStatus", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.setUserRegion = function (region) { return core.cordova(this, "setUserRegion", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.getCountryCode = function () { return core.cordova(this, "getCountryCode", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSMLText.prototype, "icrVnCaptureType", {
        get: function () { return core.cordovaPropertyGet(this, "icrVnCaptureType"); },
        set: function (value) { core.cordovaPropertySet(this, "icrVnCaptureType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLText.prototype, "gcrCaptureType", {
        get: function () { return core.cordovaPropertyGet(this, "gcrCaptureType"); },
        set: function (value) { core.cordovaPropertySet(this, "gcrCaptureType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLText.prototype, "MLLocalTextSetting", {
        get: function () { return core.cordovaPropertyGet(this, "MLLocalTextSetting"); },
        set: function (value) { core.cordovaPropertySet(this, "MLLocalTextSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLText.prototype, "MLTextConfig", {
        get: function () { return core.cordovaPropertyGet(this, "MLTextConfig"); },
        set: function (value) { core.cordovaPropertySet(this, "MLTextConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLText.prototype, "MLRemoteTextSetting", {
        get: function () { return core.cordovaPropertyGet(this, "MLRemoteTextSetting"); },
        set: function (value) { core.cordovaPropertySet(this, "MLRemoteTextSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLText.prototype, "MLBcrCaptureConfig", {
        get: function () { return core.cordovaPropertyGet(this, "MLBcrCaptureConfig"); },
        set: function (value) { core.cordovaPropertySet(this, "MLBcrCaptureConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLText.prototype, "MLGcrCaptureUIConfig", {
        get: function () { return core.cordovaPropertyGet(this, "MLGcrCaptureUIConfig"); },
        set: function (value) { core.cordovaPropertySet(this, "MLGcrCaptureUIConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLText.prototype, "MLBcrResultConfig", {
        get: function () { return core.cordovaPropertyGet(this, "MLBcrResultConfig"); },
        set: function (value) { core.cordovaPropertySet(this, "MLBcrResultConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLText.prototype, "ImgSuperResolutionConfig", {
        get: function () { return core.cordovaPropertyGet(this, "ImgSuperResolutionConfig"); },
        set: function (value) { core.cordovaPropertySet(this, "ImgSuperResolutionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLText.prototype, "MLFormRecogitionConfig", {
        get: function () { return core.cordovaPropertyGet(this, "MLFormRecogitionConfig"); },
        set: function (value) { core.cordovaPropertySet(this, "MLFormRecogitionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLText.prototype, "MLProductConfig", {
        get: function () { return core.cordovaPropertyGet(this, "MLProductConfig"); },
        set: function (value) { core.cordovaPropertySet(this, "MLProductConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLText.prototype, "Colors", {
        get: function () { return core.cordovaPropertyGet(this, "Colors"); },
        set: function (value) { core.cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLText.prototype, "RecMode", {
        get: function () { return core.cordovaPropertyGet(this, "RecMode"); },
        set: function (value) { core.cordovaPropertySet(this, "RecMode", value); },
        enumerable: false,
        configurable: true
    });
    HMSMLText.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSMLText, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HMSMLText.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSMLText });
    HMSMLText.pluginName = "HMSMLText";
    HMSMLText.plugin = "cordova-plugin-hms-mltext";
    HMSMLText.pluginRef = "HMSMLText";
    HMSMLText.platforms = ["Android"];
    HMSMLText = tslib.__decorate([], HMSMLText);
    return HMSMLText;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSMLText, decorators: [{
            type: i0.Injectable
        }], propDecorators: { icrVnCaptureType: [], gcrCaptureType: [], MLLocalTextSetting: [], MLTextConfig: [], MLRemoteTextSetting: [], MLBcrCaptureConfig: [], MLGcrCaptureUIConfig: [], MLBcrResultConfig: [], ImgSuperResolutionConfig: [], MLFormRecogitionConfig: [], MLProductConfig: [], Colors: [], RecMode: [], 
        /**
         * This method start the Text analyzer.
         * @param  {localImageTextReq|remoteImageTextReq} ImageTextAnalyserInput Reperesents the necessary parameters to convert images to text format.
         * @returns Promise <TextAnalyser>
         */
        imageTextAnalyser: [], 
        /**
         * This method stop the Text analyzer.
         * @returns Promise<any>
         */
        stopTextAnalyser: [], 
        /**
         * This method gives Text Analyser information.
         * @returns Promise<any>
         */
        getTextAnalyserInfo: [], 
        /**
         * This method provides a document recognition component that recognizes text from images of documents.
         * @param  {documentImageAnalyserReq} documentImageAnalyserReq Reperesents the necessary parameter to convert document images to text format.
         * @returns Promise<DocumentAnalyser>
         */
        documentImageAnalyser: [], 
        /**
         * This method stop the Document analyzer.
         * @returns Promise<any>
         */
        stopDocumentImageAnalyser: [], 
        /**
         * This method close the Document analyzer.
         * @returns Promise<any>
         */
        closeDocumentImageAnalyser: [], 
        /**
         * This method returns the Document analyzer setting.
         * @returns Promise<any>
         */
        getDocumentImageAnalyserSetting: [], 
        /**
         * This method returns the Image analyzer setting.
         * @returns Promise<any>
         */
        getTextAnalyserSetting: [], 
        /**
         * This method returns the GCR setting.
         * @returns Promise<any>
         */
        getGCRSetting: [], 
        /**
         * This method stop the Form Recognition Analyzer.
         * @returns Promise<any>
         */
        stopFormRecognitionAnalyser: [], 
        /**
         * This method stop bankcard recognition service.
         * @returns Promise<any>
         */
        stopBankCardDetector: [], setResultTypeBcr: [], setRecModeBcr: [], 
        /**
         * This method returns the BCR setting.
         * @returns Promise<any>
         */
        getBankCardDetectorSetting: [], 
        /**
         * The general card recognition service provides a universal development framework based on the text recognition technology.
         * @param  {generalCardDetectorReq} generalCardDetectorReq Represents the parameter required for general card recognition plug-in.
         * @returns Promise<GeneralCardAnalyser>
         */
        generalCardDetector: [], 
        /**
         * The general Vietnam id card  recognition service provides a universal development framework based on the text recognition technology.
         * @param  {icrVnDetectorReq} icrVnDetectorReq Represents the parameter required for general card recognition plug-in.
         * @returns Promise<MLVnIcrCaptureResult>
         */
        icrVnCardDetector: [], 
        /**
         * The form recognition service uses AI technologies to recognize and return form structure information (including rows, columns, and coordinates of cells) and form text in Chinese and English (including punctuation) from input images.
         * @param  {formRecognizerAnalyserReq} formRecognizerAnalyserReq Represents the parameter required for general card recognition plug-in.
         * @returns Promise<GeneralCardAnalyser>
         */
        formRecognitionAnalyser: [], icrLocalAnalyser: [], icrLocalAnalyserCreateIdCard: [], icrLocalAnalyserStop: [], geticrCnCardInstance: [], icrCnCardCreate: [], geticrVnCardInstance: [], icrVnCardCreate: [], getIcrVnCapture: [], startCustomizedView: [], switchLight: [], getLightStatus: [], setUserRegion: [], getCountryCode: [] } });
exports.RecMode = void 0;
(function (RecMode) {
    RecMode[RecMode["WEAK_MODE"] = 0] = "WEAK_MODE";
    RecMode[RecMode["STRICT_MODE"] = 1] = "STRICT_MODE";
})(exports.RecMode || (exports.RecMode = {}));
exports.MLBcrCaptureConfig = void 0;
(function (MLBcrCaptureConfig) {
    MLBcrCaptureConfig[MLBcrCaptureConfig["ERROR_CODE_INIT_CAMERA_FAILED"] = 10101] = "ERROR_CODE_INIT_CAMERA_FAILED";
    MLBcrCaptureConfig[MLBcrCaptureConfig["RESULT_NUM_ONLY"] = 0] = "RESULT_NUM_ONLY";
    MLBcrCaptureConfig[MLBcrCaptureConfig["ORIENTATION_AUTO"] = 0] = "ORIENTATION_AUTO";
    MLBcrCaptureConfig[MLBcrCaptureConfig["WEAK_MODE"] = 0] = "WEAK_MODE";
    MLBcrCaptureConfig[MLBcrCaptureConfig["ORIENTATION_LANDSCAPE"] = 1] = "ORIENTATION_LANDSCAPE";
    MLBcrCaptureConfig[MLBcrCaptureConfig["ORIENTATION_PORTRAIT"] = 2] = "ORIENTATION_PORTRAIT";
    MLBcrCaptureConfig[MLBcrCaptureConfig["RESULT_ALL"] = 2] = "RESULT_ALL";
    MLBcrCaptureConfig[MLBcrCaptureConfig["RESULT_SIMPLE"] = 1] = "RESULT_SIMPLE";
    MLBcrCaptureConfig[MLBcrCaptureConfig["STRICT_MODE"] = 1] = "STRICT_MODE";
})(exports.MLBcrCaptureConfig || (exports.MLBcrCaptureConfig = {}));
exports.MLBcrResultConfig = void 0;
(function (MLBcrResultConfig) {
    MLBcrResultConfig[MLBcrResultConfig["RESULT_NUM_ONLY"] = 0] = "RESULT_NUM_ONLY";
    MLBcrResultConfig[MLBcrResultConfig["RESULT_SIMPLE"] = 1] = "RESULT_SIMPLE";
    MLBcrResultConfig[MLBcrResultConfig["RESULT_ALL"] = 2] = "RESULT_ALL";
})(exports.MLBcrResultConfig || (exports.MLBcrResultConfig = {}));
exports.MLBcrCaptureErrorCode = void 0;
(function (MLBcrCaptureErrorCode) {
    MLBcrCaptureErrorCode[MLBcrCaptureErrorCode["ERROR_CODE_INIT_CAMERA_FAILED"] = 10101] = "ERROR_CODE_INIT_CAMERA_FAILED";
})(exports.MLBcrCaptureErrorCode || (exports.MLBcrCaptureErrorCode = {}));
exports.MLRemoteTextSetting = void 0;
(function (MLRemoteTextSetting) {
    MLRemoteTextSetting[MLRemoteTextSetting["OCR_LOOSE_SCENE"] = 1] = "OCR_LOOSE_SCENE";
    MLRemoteTextSetting[MLRemoteTextSetting["OCR_COMPACT_SCENE"] = 2] = "OCR_COMPACT_SCENE";
    MLRemoteTextSetting["NGON"] = "NGON";
    MLRemoteTextSetting["ARC"] = "ARC";
    MLRemoteTextSetting[MLRemoteTextSetting["OTHER"] = 5] = "OTHER";
    MLRemoteTextSetting[MLRemoteTextSetting["NEW_LINE_CHARACTER"] = 8] = "NEW_LINE_CHARACTER";
    MLRemoteTextSetting[MLRemoteTextSetting["SPACE"] = 6] = "SPACE";
})(exports.MLRemoteTextSetting || (exports.MLRemoteTextSetting = {}));
exports.MLFormRecogitionConfig = void 0;
(function (MLFormRecogitionConfig) {
    MLFormRecogitionConfig[MLFormRecogitionConfig["SYNC_TYPE"] = 1] = "SYNC_TYPE";
    MLFormRecogitionConfig[MLFormRecogitionConfig["ASYNC_TYPE"] = 0] = "ASYNC_TYPE";
})(exports.MLFormRecogitionConfig || (exports.MLFormRecogitionConfig = {}));
exports.gcrCaptureType = void 0;
(function (gcrCaptureType) {
    gcrCaptureType[gcrCaptureType["CAPTURE_ACTIVITY"] = 0] = "CAPTURE_ACTIVITY";
    gcrCaptureType[gcrCaptureType["CAPTURE_PHOTO"] = 1] = "CAPTURE_PHOTO";
    gcrCaptureType[gcrCaptureType["CAPTURE_IMAGE"] = 2] = "CAPTURE_IMAGE";
})(exports.gcrCaptureType || (exports.gcrCaptureType = {}));
exports.MLGcrCaptureUIConfig = void 0;
(function (MLGcrCaptureUIConfig) {
    MLGcrCaptureUIConfig[MLGcrCaptureUIConfig["ORIENTATION_AUTO"] = 0] = "ORIENTATION_AUTO";
    MLGcrCaptureUIConfig[MLGcrCaptureUIConfig["ORIENTATION_LANDSCAPE"] = 1] = "ORIENTATION_LANDSCAPE";
    MLGcrCaptureUIConfig[MLGcrCaptureUIConfig["ORIENTATION_PORTRAIT"] = 2] = "ORIENTATION_PORTRAIT";
})(exports.MLGcrCaptureUIConfig || (exports.MLGcrCaptureUIConfig = {}));
exports.icrCaptureType = void 0;
(function (icrCaptureType) {
    icrCaptureType[icrCaptureType["CAPTURE_CAMERA"] = 0] = "CAPTURE_CAMERA";
    icrCaptureType[icrCaptureType["CAPTURE_IMAGE"] = 1] = "CAPTURE_IMAGE";
})(exports.icrCaptureType || (exports.icrCaptureType = {}));
exports.MLIcrSideType = void 0;
(function (MLIcrSideType) {
    MLIcrSideType["FRONT"] = "FRONT";
    MLIcrSideType["BACK"] = "BACK";
})(exports.MLIcrSideType || (exports.MLIcrSideType = {}));
exports.ImgSuperResolutionConfig = void 0;
(function (ImgSuperResolutionConfig) {
    ImgSuperResolutionConfig[ImgSuperResolutionConfig["ISR_SCALE_1X"] = 1] = "ISR_SCALE_1X";
    ImgSuperResolutionConfig[ImgSuperResolutionConfig["ISR_SCALE_3X"] = 3] = "ISR_SCALE_3X";
})(exports.ImgSuperResolutionConfig || (exports.ImgSuperResolutionConfig = {}));
exports.MLProductConfig = void 0;
(function (MLProductConfig) {
    MLProductConfig[MLProductConfig["REGION_DR_CHINA"] = 1002] = "REGION_DR_CHINA";
    MLProductConfig[MLProductConfig["REGION_DR_AFILA"] = 1003] = "REGION_DR_AFILA";
    MLProductConfig[MLProductConfig["REGION_DR_EUROPE"] = 1004] = "REGION_DR_EUROPE";
    MLProductConfig[MLProductConfig["REGION_DR_RUSSIA"] = 1005] = "REGION_DR_RUSSIA";
    MLProductConfig[MLProductConfig["REGION_DR_GERMAN"] = 1006] = "REGION_DR_GERMAN";
    MLProductConfig[MLProductConfig["REGION_DR_SIANGAPORE"] = 1007] = "REGION_DR_SIANGAPORE";
})(exports.MLProductConfig || (exports.MLProductConfig = {}));
exports.MLLocalTextSetting = void 0;
(function (MLLocalTextSetting) {
    MLLocalTextSetting[MLLocalTextSetting["OCR_DETECT_MODE"] = 1] = "OCR_DETECT_MODE";
    MLLocalTextSetting[MLLocalTextSetting["OCR_TRACKING_MODE"] = 2] = "OCR_TRACKING_MODE";
})(exports.MLLocalTextSetting || (exports.MLLocalTextSetting = {}));
exports.MLTextConfig = void 0;
(function (MLTextConfig) {
    MLTextConfig[MLTextConfig["OCR_LOCAL_TYPE"] = 0] = "OCR_LOCAL_TYPE";
    MLTextConfig[MLTextConfig["OCR_REMOTE_TYPE"] = 1] = "OCR_REMOTE_TYPE";
})(exports.MLTextConfig || (exports.MLTextConfig = {}));
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
exports.Region = void 0;
(function (Region) {
    Region[Region["REGION_DR_UNKNOWN"] = 1001] = "REGION_DR_UNKNOWN";
    Region[Region["REGION_DR_CHINA"] = 1002] = "REGION_DR_CHINA";
    Region[Region["REGION_DR_RUSSIA"] = 1005] = "REGION_DR_RUSSIA";
    Region[Region["REGION_DR_GERMAN"] = 1006] = "REGION_DR_GERMAN";
    Region[Region["REGION_DR_SINGAPORE"] = 1007] = "REGION_DR_SINGAPORE";
})(exports.Region || (exports.Region = {}));

exports.HMSMLText = HMSMLText;
exports.HMSMLTextPlugin = HMSMLTextPlugin;
