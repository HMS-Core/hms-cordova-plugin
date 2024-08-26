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
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from "@awesome-cordova-plugins/core";
import * as i0 from "@angular/core";
var HMSMLTextPlugin = /** @class */ (function (_super) {
    __extends(HMSMLTextPlugin, _super);
    function HMSMLTextPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Monitors photographing.
     * @returns Promise<any>
     */
    HMSMLTextPlugin.prototype.photograph = function () { return cordova(this, "photograph", { "otherPromise": true }, arguments); };
    /**
     * Close lens engine.
     * @returns Promise<any>
     */
    HMSMLTextPlugin.prototype.destroy = function () { return cordova(this, "destroy", { "otherPromise": true }, arguments); };
    /**
     * Obtains the size of the preview image of a camera.
     * @returns Promise<any>
     */
    HMSMLTextPlugin.prototype.getDisplayDimension = function () { return cordova(this, "getDisplayDimension", { "otherPromise": true }, arguments); };
    /**
     * An app information class used to store basic information about apps with the HMS Core ML SDK integrated and complete the initialization of ML Text Kit. When using cloud services of the ML Text Kit, you need to set the apiKey of your app.
     * @param  {appSettingReq} appSettingReq Represents the parameter required.
     * @returns Promise<any>
     */
    HMSMLTextPlugin.prototype.appSetting = function (appSettingReq) { return cordova(this, "appSetting", { "otherPromise": true }, arguments); };
    /**
     * Determines whether to collect statistics on the current app.
     * @param {any} any
     * @returns Promise<any>
     */
    HMSMLTextPlugin.prototype.setStatistic = function (any) { return cordova(this, "setStatistic", { "otherPromise": true }, arguments); };
    /**
     * Determines whether to collect statistics on the current app.
     ** @param {any} any
     *  @returns Promise<any>
     */
    HMSMLTextPlugin.prototype.getStatistic = function (any) { return cordova(this, "getStatistic", { "otherPromise": true }, arguments); };
    /**
     * This service enable logger service.
     * @returns Promise<any>
     */
    HMSMLTextPlugin.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    /**
     * This service disable logger service.
     * @returns Promise<any>
     */
    HMSMLTextPlugin.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSMLTextPlugin.prototype, "MLLocalTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLLocalTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLLocalTextSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPlugin.prototype, "icrVnCaptureType", {
        get: function () { return cordovaPropertyGet(this, "icrVnCaptureType"); },
        set: function (value) { cordovaPropertySet(this, "icrVnCaptureType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPlugin.prototype, "MLTextConfig", {
        get: function () { return cordovaPropertyGet(this, "MLTextConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLTextConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPlugin.prototype, "MLRemoteTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteTextSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPlugin.prototype, "MLBcrCaptureConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrCaptureConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrCaptureConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPlugin.prototype, "MLGcrCaptureUIConfig", {
        get: function () { return cordovaPropertyGet(this, "MLGcrCaptureUIConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLGcrCaptureUIConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPlugin.prototype, "MLBcrResultConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrResultConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrResultConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPlugin.prototype, "ImgSuperResolutionConfig", {
        get: function () { return cordovaPropertyGet(this, "ImgSuperResolutionConfig"); },
        set: function (value) { cordovaPropertySet(this, "ImgSuperResolutionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPlugin.prototype, "MLFormRecogitionConfig", {
        get: function () { return cordovaPropertyGet(this, "MLFormRecogitionConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLFormRecogitionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPlugin.prototype, "MLProductConfig", {
        get: function () { return cordovaPropertyGet(this, "MLProductConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLProductConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPlugin.prototype, "gcrCaptureType", {
        get: function () { return cordovaPropertyGet(this, "gcrCaptureType"); },
        set: function (value) { cordovaPropertySet(this, "gcrCaptureType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPlugin.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    HMSMLTextPlugin.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSMLTextPlugin, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HMSMLTextPlugin.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSMLTextPlugin });
    HMSMLTextPlugin.pluginName = "HMSMLTextPlugin";
    HMSMLTextPlugin.plugin = "cordova-plugin-hms-mltext";
    HMSMLTextPlugin.pluginRef = "HMSMLTextPlugin";
    HMSMLTextPlugin.platforms = ["Android"];
    HMSMLTextPlugin = __decorate([], HMSMLTextPlugin);
    return HMSMLTextPlugin;
}(AwesomeCordovaNativePlugin));
export { HMSMLTextPlugin };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSMLTextPlugin, decorators: [{
            type: Injectable
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
    __extends(HMSMLText, _super);
    function HMSMLText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This method start the Text analyzer.
     * @param  {localImageTextReq|remoteImageTextReq} ImageTextAnalyserInput Reperesents the necessary parameters to convert images to text format.
     * @returns Promise <TextAnalyser>
     */
    HMSMLText.prototype.imageTextAnalyser = function (ImageTextAnalyserInput) { return cordova(this, "imageTextAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method stop the Text analyzer.
     * @returns Promise<any>
     */
    HMSMLText.prototype.stopTextAnalyser = function () { return cordova(this, "stopTextAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method gives Text Analyser information.
     * @returns Promise<any>
     */
    HMSMLText.prototype.getTextAnalyserInfo = function () { return cordova(this, "getTextAnalyserInfo", { "otherPromise": true }, arguments); };
    /**
     * This method provides a document recognition component that recognizes text from images of documents.
     * @param  {documentImageAnalyserReq} documentImageAnalyserReq Reperesents the necessary parameter to convert document images to text format.
     * @returns Promise<DocumentAnalyser>
     */
    HMSMLText.prototype.documentImageAnalyser = function (documentImageAnalyserReq) { return cordova(this, "documentImageAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method stop the Document analyzer.
     * @returns Promise<any>
     */
    HMSMLText.prototype.stopDocumentImageAnalyser = function () { return cordova(this, "stopDocumentImageAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method close the Document analyzer.
     * @returns Promise<any>
     */
    HMSMLText.prototype.closeDocumentImageAnalyser = function () { return cordova(this, "closeDocumentImageAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method returns the Document analyzer setting.
     * @returns Promise<any>
     */
    HMSMLText.prototype.getDocumentImageAnalyserSetting = function () { return cordova(this, "getDocumentImageAnalyserSetting", { "otherPromise": true }, arguments); };
    /**
     * This method returns the Image analyzer setting.
     * @returns Promise<any>
     */
    HMSMLText.prototype.getTextAnalyserSetting = function () { return cordova(this, "getTextAnalyserSetting", { "otherPromise": true }, arguments); };
    /**
     * This method returns the GCR setting.
     * @returns Promise<any>
     */
    HMSMLText.prototype.getGCRSetting = function () { return cordova(this, "getGCRSetting", { "otherPromise": true }, arguments); };
    /**
     * This method stop the Form Recognition Analyzer.
     * @returns Promise<any>
     */
    HMSMLText.prototype.stopFormRecognitionAnalyser = function () { return cordova(this, "stopFormRecognitionAnalyser", { "otherPromise": true }, arguments); };
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
    HMSMLText.prototype.stopBankCardDetector = function () { return cordova(this, "stopBankCardDetector", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.setResultTypeBcr = function (mLBcrCaptureConfig) { return cordova(this, "setResultTypeBcr", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.setRecModeBcr = function (mLBcrCaptureConfig) { return cordova(this, "setRecModeBcr", { "otherPromise": true }, arguments); };
    /**
     * This method returns the BCR setting.
     * @returns Promise<any>
     */
    HMSMLText.prototype.getBankCardDetectorSetting = function () { return cordova(this, "getBankCardDetectorSetting", { "otherPromise": true }, arguments); };
    /**
     * The general card recognition service provides a universal development framework based on the text recognition technology.
     * @param  {generalCardDetectorReq} generalCardDetectorReq Represents the parameter required for general card recognition plug-in.
     * @returns Promise<GeneralCardAnalyser>
     */
    HMSMLText.prototype.generalCardDetector = function (generalCardDetectorReq) { return cordova(this, "generalCardDetector", { "otherPromise": true }, arguments); };
    /**
     * The general Vietnam id card  recognition service provides a universal development framework based on the text recognition technology.
     * @param  {icrVnDetectorReq} icrVnDetectorReq Represents the parameter required for general card recognition plug-in.
     * @returns Promise<MLVnIcrCaptureResult>
     */
    HMSMLText.prototype.icrVnCardDetector = function (icrVnDetectorReq) { return cordova(this, "icrVnCardDetector", { "otherPromise": true }, arguments); };
    /**
     * The form recognition service uses AI technologies to recognize and return form structure information (including rows, columns, and coordinates of cells) and form text in Chinese and English (including punctuation) from input images.
     * @param  {formRecognizerAnalyserReq} formRecognizerAnalyserReq Represents the parameter required for general card recognition plug-in.
     * @returns Promise<GeneralCardAnalyser>
     */
    HMSMLText.prototype.formRecognitionAnalyser = function (formRecognizerAnalyserReq) { return cordova(this, "formRecognitionAnalyser", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.icrLocalAnalyser = function (localAnalyserReq) { return cordova(this, "icrLocalAnalyser", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.icrLocalAnalyserCreateIdCard = function (createIdCardReq) { return cordova(this, "icrLocalAnalyserCreateIdCard", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.icrLocalAnalyserStop = function () { return cordova(this, "icrLocalAnalyserStop", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.geticrCnCardInstance = function () { return cordova(this, "geticrCnCardInstance", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.icrCnCardCreate = function () { return cordova(this, "icrCnCardCreate", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.geticrVnCardInstance = function () { return cordova(this, "geticrVnCardInstance", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.icrVnCardCreate = function () { return cordova(this, "icrVnCardCreate", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.getIcrVnCapture = function () { return cordova(this, "getIcrVnCapture", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.startCustomizedView = function (userProps) { return cordova(this, "startCustomizedView", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.switchLight = function () { return cordova(this, "switchLight", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.getLightStatus = function () { return cordova(this, "getLightStatus", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.setUserRegion = function (region) { return cordova(this, "setUserRegion", { "otherPromise": true }, arguments); };
    HMSMLText.prototype.getCountryCode = function () { return cordova(this, "getCountryCode", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSMLText.prototype, "icrVnCaptureType", {
        get: function () { return cordovaPropertyGet(this, "icrVnCaptureType"); },
        set: function (value) { cordovaPropertySet(this, "icrVnCaptureType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLText.prototype, "gcrCaptureType", {
        get: function () { return cordovaPropertyGet(this, "gcrCaptureType"); },
        set: function (value) { cordovaPropertySet(this, "gcrCaptureType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLText.prototype, "MLLocalTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLLocalTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLLocalTextSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLText.prototype, "MLTextConfig", {
        get: function () { return cordovaPropertyGet(this, "MLTextConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLTextConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLText.prototype, "MLRemoteTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteTextSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLText.prototype, "MLBcrCaptureConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrCaptureConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrCaptureConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLText.prototype, "MLGcrCaptureUIConfig", {
        get: function () { return cordovaPropertyGet(this, "MLGcrCaptureUIConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLGcrCaptureUIConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLText.prototype, "MLBcrResultConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrResultConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrResultConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLText.prototype, "ImgSuperResolutionConfig", {
        get: function () { return cordovaPropertyGet(this, "ImgSuperResolutionConfig"); },
        set: function (value) { cordovaPropertySet(this, "ImgSuperResolutionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLText.prototype, "MLFormRecogitionConfig", {
        get: function () { return cordovaPropertyGet(this, "MLFormRecogitionConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLFormRecogitionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLText.prototype, "MLProductConfig", {
        get: function () { return cordovaPropertyGet(this, "MLProductConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLProductConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLText.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLText.prototype, "RecMode", {
        get: function () { return cordovaPropertyGet(this, "RecMode"); },
        set: function (value) { cordovaPropertySet(this, "RecMode", value); },
        enumerable: false,
        configurable: true
    });
    HMSMLText.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSMLText, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HMSMLText.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSMLText });
    HMSMLText.pluginName = "HMSMLText";
    HMSMLText.plugin = "cordova-plugin-hms-mltext";
    HMSMLText.pluginRef = "HMSMLText";
    HMSMLText.platforms = ["Android"];
    HMSMLText = __decorate([], HMSMLText);
    return HMSMLText;
}(AwesomeCordovaNativePlugin));
export { HMSMLText };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSMLText, decorators: [{
            type: Injectable
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
export var RecMode;
(function (RecMode) {
    RecMode[RecMode["WEAK_MODE"] = 0] = "WEAK_MODE";
    RecMode[RecMode["STRICT_MODE"] = 1] = "STRICT_MODE";
})(RecMode || (RecMode = {}));
export var MLBcrCaptureConfig;
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
})(MLBcrCaptureConfig || (MLBcrCaptureConfig = {}));
export var MLBcrResultConfig;
(function (MLBcrResultConfig) {
    MLBcrResultConfig[MLBcrResultConfig["RESULT_NUM_ONLY"] = 0] = "RESULT_NUM_ONLY";
    MLBcrResultConfig[MLBcrResultConfig["RESULT_SIMPLE"] = 1] = "RESULT_SIMPLE";
    MLBcrResultConfig[MLBcrResultConfig["RESULT_ALL"] = 2] = "RESULT_ALL";
})(MLBcrResultConfig || (MLBcrResultConfig = {}));
export var MLBcrCaptureErrorCode;
(function (MLBcrCaptureErrorCode) {
    MLBcrCaptureErrorCode[MLBcrCaptureErrorCode["ERROR_CODE_INIT_CAMERA_FAILED"] = 10101] = "ERROR_CODE_INIT_CAMERA_FAILED";
})(MLBcrCaptureErrorCode || (MLBcrCaptureErrorCode = {}));
export var MLRemoteTextSetting;
(function (MLRemoteTextSetting) {
    MLRemoteTextSetting[MLRemoteTextSetting["OCR_LOOSE_SCENE"] = 1] = "OCR_LOOSE_SCENE";
    MLRemoteTextSetting[MLRemoteTextSetting["OCR_COMPACT_SCENE"] = 2] = "OCR_COMPACT_SCENE";
    MLRemoteTextSetting["NGON"] = "NGON";
    MLRemoteTextSetting["ARC"] = "ARC";
    MLRemoteTextSetting[MLRemoteTextSetting["OTHER"] = 5] = "OTHER";
    MLRemoteTextSetting[MLRemoteTextSetting["NEW_LINE_CHARACTER"] = 8] = "NEW_LINE_CHARACTER";
    MLRemoteTextSetting[MLRemoteTextSetting["SPACE"] = 6] = "SPACE";
})(MLRemoteTextSetting || (MLRemoteTextSetting = {}));
export var MLFormRecogitionConfig;
(function (MLFormRecogitionConfig) {
    MLFormRecogitionConfig[MLFormRecogitionConfig["SYNC_TYPE"] = 1] = "SYNC_TYPE";
    MLFormRecogitionConfig[MLFormRecogitionConfig["ASYNC_TYPE"] = 0] = "ASYNC_TYPE";
})(MLFormRecogitionConfig || (MLFormRecogitionConfig = {}));
export var gcrCaptureType;
(function (gcrCaptureType) {
    gcrCaptureType[gcrCaptureType["CAPTURE_ACTIVITY"] = 0] = "CAPTURE_ACTIVITY";
    gcrCaptureType[gcrCaptureType["CAPTURE_PHOTO"] = 1] = "CAPTURE_PHOTO";
    gcrCaptureType[gcrCaptureType["CAPTURE_IMAGE"] = 2] = "CAPTURE_IMAGE";
})(gcrCaptureType || (gcrCaptureType = {}));
export var MLGcrCaptureUIConfig;
(function (MLGcrCaptureUIConfig) {
    MLGcrCaptureUIConfig[MLGcrCaptureUIConfig["ORIENTATION_AUTO"] = 0] = "ORIENTATION_AUTO";
    MLGcrCaptureUIConfig[MLGcrCaptureUIConfig["ORIENTATION_LANDSCAPE"] = 1] = "ORIENTATION_LANDSCAPE";
    MLGcrCaptureUIConfig[MLGcrCaptureUIConfig["ORIENTATION_PORTRAIT"] = 2] = "ORIENTATION_PORTRAIT";
})(MLGcrCaptureUIConfig || (MLGcrCaptureUIConfig = {}));
export var icrCaptureType;
(function (icrCaptureType) {
    icrCaptureType[icrCaptureType["CAPTURE_CAMERA"] = 0] = "CAPTURE_CAMERA";
    icrCaptureType[icrCaptureType["CAPTURE_IMAGE"] = 1] = "CAPTURE_IMAGE";
})(icrCaptureType || (icrCaptureType = {}));
export var MLIcrSideType;
(function (MLIcrSideType) {
    MLIcrSideType["FRONT"] = "FRONT";
    MLIcrSideType["BACK"] = "BACK";
})(MLIcrSideType || (MLIcrSideType = {}));
export var ImgSuperResolutionConfig;
(function (ImgSuperResolutionConfig) {
    ImgSuperResolutionConfig[ImgSuperResolutionConfig["ISR_SCALE_1X"] = 1] = "ISR_SCALE_1X";
    ImgSuperResolutionConfig[ImgSuperResolutionConfig["ISR_SCALE_3X"] = 3] = "ISR_SCALE_3X";
})(ImgSuperResolutionConfig || (ImgSuperResolutionConfig = {}));
export var MLProductConfig;
(function (MLProductConfig) {
    MLProductConfig[MLProductConfig["REGION_DR_CHINA"] = 1002] = "REGION_DR_CHINA";
    MLProductConfig[MLProductConfig["REGION_DR_AFILA"] = 1003] = "REGION_DR_AFILA";
    MLProductConfig[MLProductConfig["REGION_DR_EUROPE"] = 1004] = "REGION_DR_EUROPE";
    MLProductConfig[MLProductConfig["REGION_DR_RUSSIA"] = 1005] = "REGION_DR_RUSSIA";
    MLProductConfig[MLProductConfig["REGION_DR_GERMAN"] = 1006] = "REGION_DR_GERMAN";
    MLProductConfig[MLProductConfig["REGION_DR_SIANGAPORE"] = 1007] = "REGION_DR_SIANGAPORE";
})(MLProductConfig || (MLProductConfig = {}));
export var MLLocalTextSetting;
(function (MLLocalTextSetting) {
    MLLocalTextSetting[MLLocalTextSetting["OCR_DETECT_MODE"] = 1] = "OCR_DETECT_MODE";
    MLLocalTextSetting[MLLocalTextSetting["OCR_TRACKING_MODE"] = 2] = "OCR_TRACKING_MODE";
})(MLLocalTextSetting || (MLLocalTextSetting = {}));
export var MLTextConfig;
(function (MLTextConfig) {
    MLTextConfig[MLTextConfig["OCR_LOCAL_TYPE"] = 0] = "OCR_LOCAL_TYPE";
    MLTextConfig[MLTextConfig["OCR_REMOTE_TYPE"] = 1] = "OCR_REMOTE_TYPE";
})(MLTextConfig || (MLTextConfig = {}));
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
export var Region;
(function (Region) {
    Region[Region["REGION_DR_UNKNOWN"] = 1001] = "REGION_DR_UNKNOWN";
    Region[Region["REGION_DR_CHINA"] = 1002] = "REGION_DR_CHINA";
    Region[Region["REGION_DR_RUSSIA"] = 1005] = "REGION_DR_RUSSIA";
    Region[Region["REGION_DR_GERMAN"] = 1006] = "REGION_DR_GERMAN";
    Region[Region["REGION_DR_SINGAPORE"] = 1007] = "REGION_DR_SINGAPORE";
})(Region || (Region = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmF0aXZlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7QUFFRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sK0VBS04sTUFBTSwrQkFBK0IsQ0FBQzs7O0lBU0YsbUNBQTBCOzs7O0lBMkIzRDs7O09BR0c7SUFDSCxvQ0FBVTtJQUlWOzs7T0FHRztJQUNILGlDQUFPO0lBSVA7OztPQUdHO0lBQ0gsNkNBQW1CO0lBSW5COzs7O09BSUc7SUFDSCxvQ0FBVSxhQUFDLGFBQTRCO0lBSXZDOzs7O09BSUc7SUFDSCxzQ0FBWSxhQUFDLEdBQVE7SUFJckI7Ozs7T0FJRztJQUNILHNDQUFZLGFBQUMsR0FBUTtJQUlyQjs7O09BR0c7SUFDSCxzQ0FBWTtJQUlaOzs7T0FHRztJQUNILHVDQUFhOzBCQXhGYiwrQ0FBa0I7Ozs7OzswQkFFbEIsNkNBQWdCOzs7Ozs7MEJBRWhCLHlDQUFZOzs7Ozs7MEJBRVosZ0RBQW1COzs7Ozs7MEJBRW5CLCtDQUFrQjs7Ozs7OzBCQUVsQixpREFBb0I7Ozs7OzswQkFFcEIsOENBQWlCOzs7Ozs7MEJBRWpCLHFEQUF3Qjs7Ozs7OzBCQUV4QixtREFBc0I7Ozs7OzswQkFFdEIsNENBQWU7Ozs7OzswQkFFZiwyQ0FBYzs7Ozs7OzBCQUVkLG1DQUFNOzs7Ozs7aUhBeEJHLGVBQWU7cUhBQWYsZUFBZTs7Ozs7SUFBZixlQUFlLGtCQUFmLGVBQWU7MEJBL0I1QjtFQStCcUMsMEJBQTBCO1NBQWxELGVBQWU7NEZBQWYsZUFBZTtrQkFEM0IsVUFBVTs4QkFHUCxrQkFBa0IsTUFFbEIsZ0JBQWdCLE1BRWhCLFlBQVksTUFFWixtQkFBbUIsTUFFbkIsa0JBQWtCLE1BRWxCLG9CQUFvQixNQUVw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QW1CLENBQUE7SUFDbkIsbUVBQWlCLENBQUE7SUFDakIsb0ZBQTBCLENBQUE7SUFDMUIsMEVBQXFCLENBQUE7SUFDckIsZ0VBQWdCLENBQUE7SUFDaEIsa0VBQWlCLENBQUE7SUFDakIsa0VBQWlCLENBQUE7SUFDakIsd0ZBQTRCLENBQUE7SUFDNUIsb0ZBQTBCLENBQUE7SUFDMUIsOEVBQXVCLENBQUE7SUFDdkIsNERBQWMsQ0FBQTtJQUNkLG9FQUFrQixDQUFBO0lBQ2xCLHdFQUFvQixDQUFBO0lBQ3BCLG9FQUFrQixDQUFBO0FBQ3RCLENBQUMsRUF4QlcsYUFBYSxLQUFiLGFBQWEsUUF3QnhCO0FBR0QsTUFBTSxDQUFOLElBQVksTUFNWDtBQU5ELFdBQVksTUFBTTtJQUNsQixnRUFBd0IsQ0FBQTtJQUN4Qiw0REFBc0IsQ0FBQTtJQUN0Qiw4REFBdUIsQ0FBQTtJQUN2Qiw4REFBdUIsQ0FBQTtJQUN2QixvRUFBMEIsQ0FBQTtBQUMxQixDQUFDLEVBTlcsTUFBTSxLQUFOLE1BQU0sUUFNakIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgQ29weXJpZ2h0IDIwMjMuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxyXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgICBQbHVnaW4sXHJcbiAgICBDb3Jkb3ZhLFxyXG4gICAgQ29yZG92YVByb3BlcnR5LCBcclxuICAgIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luICxcclxufSBmcm9tIFwiQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmVcIjtcclxuXHJcbkBQbHVnaW4oe1xyXG4gICAgcGx1Z2luTmFtZTogXCJITVNNTFRleHRQbHVnaW5cIixcclxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtbWx0ZXh0XCIsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gICAgcGx1Z2luUmVmOiBcIkhNU01MVGV4dFBsdWdpblwiLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNNTFRleHRQbHVnaW4gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiAge1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBNTExvY2FsVGV4dFNldHRpbmcgPSBNTExvY2FsVGV4dFNldHRpbmc7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIGljclZuQ2FwdHVyZVR5cGUgPSBpY3JDYXB0dXJlVHlwZTtcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgTUxUZXh0Q29uZmlnID0gTUxUZXh0Q29uZmlnO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBNTFJlbW90ZVRleHRTZXR0aW5nID0gTUxSZW1vdGVUZXh0U2V0dGluZztcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgTUxCY3JDYXB0dXJlQ29uZmlnID0gTUxCY3JDYXB0dXJlQ29uZmlnO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBNTEdjckNhcHR1cmVVSUNvbmZpZyA9IE1MR2NyQ2FwdHVyZVVJQ29uZmlnO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBNTEJjclJlc3VsdENvbmZpZyA9IE1MQmNyUmVzdWx0Q29uZmlnO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBJbWdTdXBlclJlc29sdXRpb25Db25maWcgPSBJbWdTdXBlclJlc29sdXRpb25Db25maWc7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIE1MRm9ybVJlY29naXRpb25Db25maWcgPSBNTEZvcm1SZWNvZ2l0aW9uQ29uZmlnO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBNTFByb2R1Y3RDb25maWcgPSBNTFByb2R1Y3RDb25maWc7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIGdjckNhcHR1cmVUeXBlID0gZ2NyQ2FwdHVyZVR5cGU7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIENvbG9ycyA9IENvbG9ycztcclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBNb25pdG9ycyBwaG90b2dyYXBoaW5nLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIHBob3RvZ3JhcGgoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZSBsZW5zIGVuZ2luZS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBkZXN0cm95KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyB0aGUgc2l6ZSBvZiB0aGUgcHJldmlldyBpbWFnZSBvZiBhIGNhbWVyYS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBnZXREaXNwbGF5RGltZW5zaW9uKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogQW4gYXBwIGluZm9ybWF0aW9uIGNsYXNzIHVzZWQgdG8gc3RvcmUgYmFzaWMgaW5mb3JtYXRpb24gYWJvdXQgYXBwcyB3aXRoIHRoZSBITVMgQ29yZSBNTCBTREsgaW50ZWdyYXRlZCBhbmQgY29tcGxldGUgdGhlIGluaXRpYWxpemF0aW9uIG9mIE1MIFRleHQgS2l0LiBXaGVuIHVzaW5nIGNsb3VkIHNlcnZpY2VzIG9mIHRoZSBNTCBUZXh0IEtpdCwgeW91IG5lZWQgdG8gc2V0IHRoZSBhcGlLZXkgb2YgeW91ciBhcHAuXHJcbiAgICAgKiBAcGFyYW0gIHthcHBTZXR0aW5nUmVxfSBhcHBTZXR0aW5nUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBhcHBTZXR0aW5nKGFwcFNldHRpbmdSZXE6IGFwcFNldHRpbmdSZXEpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0byBjb2xsZWN0IHN0YXRpc3RpY3Mgb24gdGhlIGN1cnJlbnQgYXBwLlxyXG4gICAgICogQHBhcmFtIHthbnl9IGFueVxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIHNldFN0YXRpc3RpYyhhbnk6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGNvbGxlY3Qgc3RhdGlzdGljcyBvbiB0aGUgY3VycmVudCBhcHAuXHJcbiAgICAgKiogQHBhcmFtIHthbnl9IGFueVxyXG4gICAgICogIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBnZXRTdGF0aXN0aWMoYW55OiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgc2VydmljZSBlbmFibGUgbG9nZ2VyIHNlcnZpY2UuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBzZXJ2aWNlIGRpc2FibGUgbG9nZ2VyIHNlcnZpY2UuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6IFwiSE1TTUxUZXh0XCIsXHJcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLW1sdGV4dFwiLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICAgIHBsdWdpblJlZjogXCJITVNNTFRleHRcIiwgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxyXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLCAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TTUxUZXh0IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gIHtcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgaWNyVm5DYXB0dXJlVHlwZSA9IGljckNhcHR1cmVUeXBlO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBnY3JDYXB0dXJlVHlwZSA9IGdjckNhcHR1cmVUeXBlO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBNTExvY2FsVGV4dFNldHRpbmcgPSBNTExvY2FsVGV4dFNldHRpbmc7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIE1MVGV4dENvbmZpZyA9IE1MVGV4dENvbmZpZztcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgTUxSZW1vdGVUZXh0U2V0dGluZyA9IE1MUmVtb3RlVGV4dFNldHRpbmc7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIE1MQmNyQ2FwdHVyZUNvbmZpZyA9IE1MQmNyQ2FwdHVyZUNvbmZpZztcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgTUxHY3JDYXB0dXJlVUlDb25maWcgPSBNTEdjckNhcHR1cmVVSUNvbmZpZztcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgTUxCY3JSZXN1bHRDb25maWcgPSBNTEJjclJlc3VsdENvbmZpZztcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgSW1nU3VwZXJSZXNvbHV0aW9uQ29uZmlnID0gSW1nU3VwZXJSZXNvbHV0aW9uQ29uZmlnO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBNTEZvcm1SZWNvZ2l0aW9uQ29uZmlnID0gTUxGb3JtUmVjb2dpdGlvbkNvbmZpZztcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgTUxQcm9kdWN0Q29uZmlnID0gTUxQcm9kdWN0Q29uZmlnO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBDb2xvcnMgPSBDb2xvcnM7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIFJlY01vZGUgPSBSZWNNb2RlO1xyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHN0YXJ0IHRoZSBUZXh0IGFuYWx5emVyLlxyXG4gICAgICogQHBhcmFtICB7bG9jYWxJbWFnZVRleHRSZXF8cmVtb3RlSW1hZ2VUZXh0UmVxfSBJbWFnZVRleHRBbmFseXNlcklucHV0IFJlcGVyZXNlbnRzIHRoZSBuZWNlc3NhcnkgcGFyYW1ldGVycyB0byBjb252ZXJ0IGltYWdlcyB0byB0ZXh0IGZvcm1hdC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2UgPFRleHRBbmFseXNlcj5cclxuICAgICAqL1xyXG4gICAgaW1hZ2VUZXh0QW5hbHlzZXIoXHJcbiAgICAgICAgSW1hZ2VUZXh0QW5hbHlzZXJJbnB1dDogbG9jYWxJbWFnZVRleHRSZXEgfCByZW1vdGVJbWFnZVRleHRSZXFcclxuICAgICk6IFByb21pc2U8TUxUZXh0PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCB0aGUgVGV4dCBhbmFseXplci5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBzdG9wVGV4dEFuYWx5c2VyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgZ2l2ZXMgVGV4dCBBbmFseXNlciBpbmZvcm1hdGlvbi5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBnZXRUZXh0QW5hbHlzZXJJbmZvKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcHJvdmlkZXMgYSBkb2N1bWVudCByZWNvZ25pdGlvbiBjb21wb25lbnQgdGhhdCByZWNvZ25pemVzIHRleHQgZnJvbSBpbWFnZXMgb2YgZG9jdW1lbnRzLlxyXG4gICAgICogQHBhcmFtICB7ZG9jdW1lbnRJbWFnZUFuYWx5c2VyUmVxfSBkb2N1bWVudEltYWdlQW5hbHlzZXJSZXEgUmVwZXJlc2VudHMgdGhlIG5lY2Vzc2FyeSBwYXJhbWV0ZXIgdG8gY29udmVydCBkb2N1bWVudCBpbWFnZXMgdG8gdGV4dCBmb3JtYXQuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPERvY3VtZW50QW5hbHlzZXI+XHJcbiAgICAgKi9cclxuICAgIGRvY3VtZW50SW1hZ2VBbmFseXNlcihcclxuICAgICAgICBkb2N1bWVudEltYWdlQW5hbHlzZXJSZXE6IGRvY3VtZW50SW1hZ2VBbmFseXNlclJlcVxyXG4gICAgKTogUHJvbWlzZTxNTERvY3VtZW50PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCB0aGUgRG9jdW1lbnQgYW5hbHl6ZXIuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgc3RvcERvY3VtZW50SW1hZ2VBbmFseXNlcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGNsb3NlIHRoZSBEb2N1bWVudCBhbmFseXplci5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBjbG9zZURvY3VtZW50SW1hZ2VBbmFseXNlcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIERvY3VtZW50IGFuYWx5emVyIHNldHRpbmcuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgZ2V0RG9jdW1lbnRJbWFnZUFuYWx5c2VyU2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIEltYWdlIGFuYWx5emVyIHNldHRpbmcuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgZ2V0VGV4dEFuYWx5c2VyU2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIEdDUiBzZXR0aW5nLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIGdldEdDUlNldHRpbmcoKTogUHJvbWlzZTxnY3JTZXR0aW5nUmVzdWx0cz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3AgdGhlIEZvcm0gUmVjb2duaXRpb24gQW5hbHl6ZXIuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgc3RvcEZvcm1SZWNvZ25pdGlvbkFuYWx5c2VyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgYmFuayBjYXJkIHJlY29nbml0aW9uIHNlcnZpY2UgcmVjb2duaXplcyBiYW5rIGNhcmRzIGluIGNhbWVyYSBzdHJlYW1zIHdpdGhpbiBhbmdsZSBvZmZzZXQgb2YgMTUgZGVncmVlcyBhbmQgZXh0cmFjdHMga2V5IGluZm9ybWF0aW9uIHN1Y2ggYXMgY2FyZCBudW1iZXIgYW5kIHZhbGlkaXR5IHBlcmlvZC5cclxuICAgICAqIEBwYXJhbSAge2JhbmtDYXJkU0RLRGV0ZWN0b3JSZXF8YmFua0NhcmRQbHVnaW5EZXRlY3RvclJlcX0gYmFua0NhcmREZXRlY3RlcklucHV0IFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgYmFuayBjYXJkIHJlY29nbml0aW9uLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxCYW5rQ2FyZEFuYWx5c2VyPiB8IFByb21pc2U8QmFua0NhcmRBbmFseXNlcj5cclxuICAgICAqL1xyXG4gICAgYmFua0NhcmREZXRlY3RvcihcclxuICAgICAgICBiYW5rQ2FyZERldGVjdGVySW5wdXQ6XHJcbiAgICAgICAgICAgIHwgYmFua0NhcmRTREtEZXRlY3RvclJlcVxyXG4gICAgICAgICAgICB8IGJhbmtDYXJkUGx1Z2luRGV0ZWN0b3JSZXFcclxuICAgICk6IFByb21pc2U8TUxCYW5rQ2FyZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3AgYmFua2NhcmQgcmVjb2duaXRpb24gc2VydmljZS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBzdG9wQmFua0NhcmREZXRlY3RvcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRSZXN1bHRUeXBlQmNyKG1MQmNyQ2FwdHVyZUNvbmZpZzogbUxCY3JDYXB0dXJlQ29uZmlnKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0UmVjTW9kZUJjcihtTEJjckNhcHR1cmVDb25maWc6IG1MQmNyQ2FwdHVyZUNvbmZpZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgQkNSIHNldHRpbmcuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgZ2V0QmFua0NhcmREZXRlY3RvclNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZ2VuZXJhbCBjYXJkIHJlY29nbml0aW9uIHNlcnZpY2UgcHJvdmlkZXMgYSB1bml2ZXJzYWwgZGV2ZWxvcG1lbnQgZnJhbWV3b3JrIGJhc2VkIG9uIHRoZSB0ZXh0IHJlY29nbml0aW9uIHRlY2hub2xvZ3kuXHJcbiAgICAgKiBAcGFyYW0gIHtnZW5lcmFsQ2FyZERldGVjdG9yUmVxfSBnZW5lcmFsQ2FyZERldGVjdG9yUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgZ2VuZXJhbCBjYXJkIHJlY29nbml0aW9uIHBsdWctaW4uXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPEdlbmVyYWxDYXJkQW5hbHlzZXI+XHJcbiAgICAgKi9cclxuICAgIGdlbmVyYWxDYXJkRGV0ZWN0b3IoXHJcbiAgICAgICAgZ2VuZXJhbENhcmREZXRlY3RvclJlcTogZ2VuZXJhbENhcmREZXRlY3RvclJlcVxyXG4gICAgKTogUHJvbWlzZTxNTEdjckNhcHR1cmVSZXN1bHQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZ2VuZXJhbCBWaWV0bmFtIGlkIGNhcmQgIHJlY29nbml0aW9uIHNlcnZpY2UgcHJvdmlkZXMgYSB1bml2ZXJzYWwgZGV2ZWxvcG1lbnQgZnJhbWV3b3JrIGJhc2VkIG9uIHRoZSB0ZXh0IHJlY29nbml0aW9uIHRlY2hub2xvZ3kuXHJcbiAgICAgKiBAcGFyYW0gIHtpY3JWbkRldGVjdG9yUmVxfSBpY3JWbkRldGVjdG9yUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgZ2VuZXJhbCBjYXJkIHJlY29nbml0aW9uIHBsdWctaW4uXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPE1MVm5JY3JDYXB0dXJlUmVzdWx0PlxyXG4gICAgICovXHJcbiAgICBpY3JWbkNhcmREZXRlY3RvcihcclxuICAgICAgICBpY3JWbkRldGVjdG9yUmVxOiBpY3JWbkRldGVjdG9yUmVxXHJcbiAgICApOiBQcm9taXNlPE1MVm5JY3JDYXB0dXJlUmVzdWx0PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGZvcm0gcmVjb2duaXRpb24gc2VydmljZSB1c2VzIEFJIHRlY2hub2xvZ2llcyB0byByZWNvZ25pemUgYW5kIHJldHVybiBmb3JtIHN0cnVjdHVyZSBpbmZvcm1hdGlvbiAoaW5jbHVkaW5nIHJvd3MsIGNvbHVtbnMsIGFuZCBjb29yZGluYXRlcyBvZiBjZWxscykgYW5kIGZvcm0gdGV4dCBpbiBDaGluZXNlIGFuZCBFbmdsaXNoIChpbmNsdWRpbmcgcHVuY3R1YXRpb24pIGZyb20gaW5wdXQgaW1hZ2VzLlxyXG4gICAgICogQHBhcmFtICB7Zm9ybVJlY29nbml6ZXJBbmFseXNlclJlcX0gZm9ybVJlY29nbml6ZXJBbmFseXNlclJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIGdlbmVyYWwgY2FyZCByZWNvZ25pdGlvbiBwbHVnLWluLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxHZW5lcmFsQ2FyZEFuYWx5c2VyPlxyXG4gICAgICovXHJcbiAgICBmb3JtUmVjb2duaXRpb25BbmFseXNlcihcclxuICAgICAgICBmb3JtUmVjb2duaXplckFuYWx5c2VyUmVxOiBmb3JtUmVjb2duaXplckFuYWx5c2VyUmVxXHJcbiAgICApOiBQcm9taXNlPE1MR2NyQ2FwdHVyZVJlc3VsdD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpY3JMb2NhbEFuYWx5c2VyKFxyXG4gICAgICAgIGxvY2FsQW5hbHlzZXJSZXE6IGxvY2FsQW5hbHlzZXJSZXFcclxuICAgICk6IFByb21pc2U8TUxJY3JDYXB0dXJlUmVzdWx0PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpY3JMb2NhbEFuYWx5c2VyQ3JlYXRlSWRDYXJkKFxyXG4gICAgICAgIGNyZWF0ZUlkQ2FyZFJlcTogY3JlYXRlSWRDYXJkUmVxXHJcbiAgICApOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaWNyTG9jYWxBbmFseXNlclN0b3AoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldGljckNuQ2FyZEluc3RhbmNlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpY3JDbkNhcmRDcmVhdGUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0aWNyVm5DYXJkSW5zdGFuY2UoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaWNyVm5DYXJkQ3JlYXRlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEljclZuQ2FwdHVyZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc3RhcnRDdXN0b21pemVkVmlldyh1c2VyUHJvcHM6IEN1c3RvbVZpZXdNb2RlUmVxdWVzdCk6IFByb21pc2U8TUxCYW5rQ2FyZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzd2l0Y2hMaWdodCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0TGlnaHRTdGF0dXMoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0VXNlclJlZ2lvbihyZWdpb246IFJlZ2lvbik6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldENvdW50cnlDb2RlKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbVZpZXdNb2RlUmVxdWVzdCB7XHJcbiAgICBpc1RpdGxlQXZhaWxhYmxlOiBib29sZWFuO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGhlaWdodEZhY3RvcjogbnVtYmVyO1xyXG4gICAgd2lkdGhGYWN0b3I6IG51bWJlcjtcclxuICAgIGlzRmxhc2hBdmFpbGFibGU6IGJvb2xlYW47XHJcbiAgICByZXN1bHRUeXBlOiBNTEJjclJlc3VsdENvbmZpZztcclxuICAgIHJlY01vZGU6IFJlY01vZGU7XHJcbiB9XHJcblxyXG4vLyBBUEkgS0VZXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGNvbmZpZ1JlcSB7XHJcbiAgICBhcGlLZXk6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBhcHBTZXR0aW5nUmVxIHtcclxuICAgIGFwaUtleT86IHN0cmluZyB8IG51bGw7XHJcbiAgICBhcHBsaWNhdGlvbklkPzogc3RyaW5nIHwgbnVsbDtcclxuICAgIGNlcnRGaW5nZXJwcmludD86IHN0cmluZyB8IG51bGw7XHJcbn0gXHJcblxyXG5cclxuLy8gU0RLIEJBTksgQ0FSRCBBTkFMWVNFUlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBiYW5rQ2FyZFNES0RldGVjdG9yUmVxIHtcclxuICAgIGZpbGVQYXRoOiBhbnk7XHJcbiAgICBkZXRlY3RUeXBlOiAwO1xyXG4gICAgbUxCY3JBbmFseXplclNldHRpbmc/OiBNTEJjckFuYWx5emVyU2V0dGluZyB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxCY3JBbmFseXplclNldHRpbmcge1xyXG4gICAgbGFuZ1R5cGU/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgcmVzdWx0VHlwZT86IE1MQmNyUmVzdWx0Q29uZmlnIHwgbnVsbDtcclxufVxyXG5cclxuLy8gUExVR0lOIEJBTksgQ0FSRCBBTkFMWVNFUlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBiYW5rQ2FyZFBsdWdpbkRldGVjdG9yUmVxIHtcclxuICAgIGRldGVjdFR5cGU6IDE7XHJcbiAgICBtTEJjckNhcHR1cmVDb25maWc/OiBtTEJjckNhcHR1cmVDb25maWcgfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIG1MQmNyQ2FwdHVyZUNvbmZpZyB7XHJcbiAgICBvcmllbnRhdGlvbj86IE1MQmNyQ2FwdHVyZUNvbmZpZyB8IG51bGw7XHJcbiAgICByZXN1bHRUeXBlPzogTUxCY3JSZXN1bHRDb25maWcgfCBudWxsO1xyXG4gICAgcmVjTW9kZT86IFJlY01vZGUgfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBSZWNNb2RlIHtcclxuICAgIFdFQUtfTU9ERSA9IDAsXHJcbiAgICBTVFJJQ1RfTU9ERSA9IDEsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1MQmNyQ2FwdHVyZUNvbmZpZyB7XHJcbiAgICBFUlJPUl9DT0RFX0lOSVRfQ0FNRVJBX0ZBSUxFRCA9IDEwMTAxLFxyXG4gICAgUkVTVUxUX05VTV9PTkxZID0gMCxcclxuICAgIE9SSUVOVEFUSU9OX0FVVE8gPSAwLFxyXG4gICAgV0VBS19NT0RFID0gMCxcclxuICAgIE9SSUVOVEFUSU9OX0xBTkRTQ0FQRSA9IDEsXHJcbiAgICBPUklFTlRBVElPTl9QT1JUUkFJVCA9IDIsXHJcbiAgICBSRVNVTFRfQUxMID0gMixcclxuICAgIFJFU1VMVF9TSU1QTEUgPSAxLFxyXG4gICAgU1RSSUNUX01PREUgPSAxLFxyXG59XHJcbmV4cG9ydCBlbnVtIE1MQmNyUmVzdWx0Q29uZmlnIHtcclxuICAgIFJFU1VMVF9OVU1fT05MWSA9IDAsXHJcbiAgICBSRVNVTFRfU0lNUExFID0gMSxcclxuICAgIFJFU1VMVF9BTEwgPSAyLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1MQmNyQ2FwdHVyZVJlc3VsdCB7XHJcbiAgICBlcnJvckNvZGU/OiBNTEJjckNhcHR1cmVFcnJvckNvZGUgfCBudWxsO1xyXG4gICAgZXhwaXJlPzogU3RyaW5nIHwgbnVsbDtcclxuICAgIGlzc3Vlcj86IFN0cmluZyB8IG51bGw7XHJcbiAgICBudW1iZXI/OiBTdHJpbmcgfCBudWxsO1xyXG4gICAgbnVtYmVyQml0bWFwPzogYW55O1xyXG4gICAgb3JnYW5pemF0aW9uPzogU3RyaW5nIHwgbnVsbDtcclxuICAgIHJpZ2luYWxCaXRtYXA/OiBhbnk7XHJcbiAgICB0eXBlPzogU3RyaW5nIHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTUxCY3JDYXB0dXJlRXJyb3JDb2RlIHtcclxuICAgIEVSUk9SX0NPREVfSU5JVF9DQU1FUkFfRkFJTEVEID0gMTAxMDEsXHJcbn1cclxuXHJcblxyXG4vL0RvY3VtZW50IEFuYWx5c2VyXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGRvY3VtZW50SW1hZ2VBbmFseXNlclJlcSB7XHJcbiAgICBkb2N1bWVudFNldHRpbmc/OiBEb2N1bWVudFNldHRpbmcgfCBudWxsO1xyXG4gICAgZmlsZVBhdGg6IGFueTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50U2V0dGluZyB7XHJcbiAgICBib3JkZXJUeXBlPzogTUxSZW1vdGVUZXh0U2V0dGluZyB8IG51bGw7XHJcbiAgICBsYW5ndWFnZUxpc3Q/OiBBcnJheTxzdHJpbmc+IHwgbnVsbDtcclxuICAgIGVuYWJsZUZpbmdlcnByaW50VmVyaWZpY2F0aW9uOiBib29sZWFuIHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTUxSZW1vdGVUZXh0U2V0dGluZyB7XHJcbiAgICBPQ1JfTE9PU0VfU0NFTkUgPSAxLFxyXG4gICAgT0NSX0NPTVBBQ1RfU0NFTkUgPSAyLFxyXG4gICAgTkdPTiA9IFwiTkdPTlwiLFxyXG4gICAgQVJDID0gXCJBUkNcIixcclxuICAgIE9USEVSID0gNSxcclxuICAgIE5FV19MSU5FX0NIQVJBQ1RFUiA9IDgsXHJcbiAgICBTUEFDRSA9IDYsXHJcbn1cclxuXHJcblxyXG5cclxuLy9Gb3JtIFJlY29nbml6ZXIgQW5hbHlzZXJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgZm9ybVJlY29nbml6ZXJBbmFseXNlclJlcSB7XHJcbiAgICBmaWxlUGF0aDogYW55O1xyXG4gICAgc3luY1R5cGU6IE1MRm9ybVJlY29naXRpb25Db25maWc7XHJcbn1cclxuZXhwb3J0IGVudW0gTUxGb3JtUmVjb2dpdGlvbkNvbmZpZyB7XHJcbiAgICBTWU5DX1RZUEUgPSAxLFxyXG4gICAgQVNZTkNfVFlQRSA9IDAsXHJcbn1cclxuXHJcbi8vIEdFTkVSQUwgQ0FSRCBBTkFMWVNFUlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBnZW5lcmFsQ2FyZERldGVjdG9yUmVxIHtcclxuICAgIGdjckNhcHR1cmVDb25maWc/OiBnY3JDYXB0dXJlQ29uZmlnO1xyXG4gICAgZ2NyQ2FwdHVyZVVJQ29uZmlnPzogZ2NyQ2FwdHVyZVVJQ29uZmlnO1xyXG4gICAgY2FwdHVyZVR5cGU/OiBnY3JDYXB0dXJlVHlwZSB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgZ2NyQ2FwdHVyZUNvbmZpZyB7XHJcbiAgICBsYW5ndWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBlbnVtIGdjckNhcHR1cmVUeXBlIHtcclxuICAgIENBUFRVUkVfQUNUSVZJVFkgPSAwLFxyXG4gICAgQ0FQVFVSRV9QSE9UTyA9IDEsXHJcbiAgICBDQVBUVVJFX0lNQUdFID0gMixcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIGdjckNhcHR1cmVVSUNvbmZpZyB7XHJcbiAgICBvcmllbnRhdGlvbj86IE1MR2NyQ2FwdHVyZVVJQ29uZmlnIHwgbnVsbDtcclxuICAgIHRpcFRleHQ/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgdGlwVGV4dENvbG9yPzogbnVtYmVyIHwgbnVsbDtcclxuICAgIHBob3RvQnV0dG9uUmVzSWQ/OiBudW1iZXIgfCBudWxsO1xyXG4gICAgc2NhbkJveENvcm5lckNvbG9yPzogbnVtYmVyIHwgbnVsbDtcclxuICAgIGJhY2tCdXR0b25SZWRJZD86IG51bWJlciB8IG51bGw7XHJcbiAgICB0b3JjaFJlZElkPzogbnVtYmVyIHwgbnVsbDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIGdjclNldHRpbmdSZXN1bHRzIHtcclxuICAgIGdjckNvbmZpZ0xhbmd1YWdlOiBTdHJpbmc7XHJcbiAgICB0b3JjaE9uUmVzSWQ6IG51bWJlcjtcclxuICAgIHRpcFRleHRDb2xvcjogbnVtYmVyO1xyXG4gICAgdGlwVGV4dDogU3RyaW5nO1xyXG4gICAgYmFja0J1dHRvblJlc0lkOiBudW1iZXI7XHJcbiAgICBvcmllbnRhdGlvbjogbnVtYmVyO1xyXG4gICAgcGhvdG9CdXR0b25SZXNJZDogbnVtYmVyO1xyXG4gICAgc2NhbkJveFNjcmVlblJhdGlvOiBudW1iZXI7XHJcbiAgICBzY2FuQm94Q29ybmVyQ29sb3I6IG51bWJlcjtcclxuICAgIHNjYW5Cb3hBc3BlY3RSYXRpbzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBNTEdjckNhcHR1cmVVSUNvbmZpZyB7XHJcbiAgICBPUklFTlRBVElPTl9BVVRPID0gMCxcclxuICAgIE9SSUVOVEFUSU9OX0xBTkRTQ0FQRSA9IDEsXHJcbiAgICBPUklFTlRBVElPTl9QT1JUUkFJVCA9IDIsXHJcbn1cclxuXHJcbi8vIElEIENBUkQgQU5BTFlTRVJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgaWNyVm5EZXRlY3RvclJlcSB7XHJcbiAgICBjYXB0dXJlVHlwZTogaWNyQ2FwdHVyZVR5cGU7XHJcbiAgICBmaWxlUGF0aD86IGFueSB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgaWNyQ25EZXRlY3RvclJlcSB7XHJcbiAgICBjYXB0dXJlVHlwZTogaWNyQ2FwdHVyZVR5cGU7XHJcbiAgICBmaWxlUGF0aD86IGFueSB8IG51bGw7XHJcbiAgICBpc0Zyb250PzogYm9vbGVhbiB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIGljckNhcHR1cmVUeXBlIHtcclxuICAgIENBUFRVUkVfQ0FNRVJBID0gMCxcclxuICAgIENBUFRVUkVfSU1BR0UgPSAxLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGNyZWF0ZUlkQ2FyZFJlcSB7XHJcbiAgICBtbEljckFuYWx5emVyU2V0dGluZz86IE1MSWNyQW5hbHl6ZXJTZXR0aW5nIHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBsb2NhbEFuYWx5c2VyUmVxIHtcclxuICAgIHNldHRpbmdzOiBNTEljckFuYWx5emVyU2V0dGluZztcclxuICAgIGZpbGVQYXRoPzogYW55IHwgbnVsbDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE1MSWNyQW5hbHl6ZXJTZXR0aW5nIHtcclxuICAgIGNvdW50cnlDb2RlOiBzdHJpbmc7XHJcbiAgICBoYXNoQ29kZT86IG51bWJlciB8IG51bGw7XHJcbiAgICBzaWRlVHlwZT86IE1MSWNyU2lkZVR5cGUgfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBNTEljclNpZGVUeXBlIHtcclxuICAgIEZST05UID0gXCJGUk9OVFwiLFxyXG4gICAgQkFDSyA9IFwiQkFDS1wiLFxyXG59XHJcblxyXG5cclxuLy9JbWFnZSBTdXBlciBSZXNvbHV0aW9uXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGltYWdlU3VwZXJSZXNvbHV0aW9uUmVxIHtcclxuICAgIGZpbGVQYXRoOiBhbnk7XHJcbiAgICBpbWdTdXBlclJlc29sdXRpb25TZXR0aW5nPzogSW1nU3VwZXJSZXNvbHV0aW9uU2V0dGluZyB8IG51bGw7XHJcbiAgICBzeW5jVHlwZT86IE1MRm9ybVJlY29naXRpb25Db25maWcgfCBudWxsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSW1nU3VwZXJSZXNvbHV0aW9uU2V0dGluZyB7XHJcbiAgICBzY2FsZVR5cGU/OiBJbWdTdXBlclJlc29sdXRpb25Db25maWc7XHJcbn1cclxuZXhwb3J0IGVudW0gSW1nU3VwZXJSZXNvbHV0aW9uQ29uZmlnIHtcclxuICAgIElTUl9TQ0FMRV8xWCA9IDEuMCxcclxuICAgIElTUl9TQ0FMRV8zWCA9IDMuMCxcclxufVxyXG5cclxuLy9Qcm9kdWN0IFZpc2lvbiBBbmFseXNlclxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBwcm9kdWN0UmVxIHtcclxuICAgIGZpbGVQYXRoPzogYW55IHwgbnVsbDtcclxuICAgIGRldGVjdFR5cGU/OiBudW1iZXI7XHJcbiAgICBtbFByb2R1Y3RTZXR0aW5nPzogbWxQcm9kdWN0U2V0dGluZyB8IG51bGw7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBtbFByb2R1Y3RTZXR0aW5nIHtcclxuICAgIGxhcmdlc3ROdW1PZlJldHVybnM/OiBudW1iZXIgfCBudWxsO1xyXG4gICAgcHJvZHVjdFNldElkPzogc3RyaW5nIHwgbnVsbDtcclxuICAgIHJlZ2lvbj86IE1MUHJvZHVjdENvbmZpZyB8IG51bGw7XHJcbn1cclxuZXhwb3J0IGVudW0gTUxQcm9kdWN0Q29uZmlnIHtcclxuICAgIFJFR0lPTl9EUl9DSElOQSA9IDEwMDIsXHJcbiAgICBSRUdJT05fRFJfQUZJTEEgPSAxMDAzLFxyXG4gICAgUkVHSU9OX0RSX0VVUk9QRSA9IDEwMDQsXHJcbiAgICBSRUdJT05fRFJfUlVTU0lBID0gMTAwNSxcclxuICAgIFJFR0lPTl9EUl9HRVJNQU4gPSAxMDA2LFxyXG4gICAgUkVHSU9OX0RSX1NJQU5HQVBPUkUgPSAxMDA3LFxyXG59XHJcblxyXG5cclxuXHJcbi8vVGV4dCBBbmFseXNlclxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBsb2NhbEltYWdlVGV4dFJlcSB7XHJcbiAgICBvY3JUeXBlOiBNTFRleHRDb25maWc7XHJcbiAgICBhbmFseXNlTW9kZT86IG51bWJlcjtcclxuICAgIGxvY2FsVGV4dFNldHRpbmc/OiBsb2NhbFRleHRTZXR0aW5nIHwgbnVsbDtcclxuICAgIGZpbGVQYXRoOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgbG9jYWxUZXh0U2V0dGluZyB7XHJcbiAgICBvY3JNb2RlPzogTUxMb2NhbFRleHRTZXR0aW5nO1xyXG4gICAgbGFuZ3VhZ2U/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1MTG9jYWxUZXh0U2V0dGluZyB7XHJcbiAgICBPQ1JfREVURUNUX01PREUgPSAxLFxyXG4gICAgT0NSX1RSQUNLSU5HX01PREUgPSAyLFxyXG59XHJcbmV4cG9ydCBlbnVtIE1MVGV4dENvbmZpZyB7XHJcbiAgICBPQ1JfTE9DQUxfVFlQRSA9IDAsXHJcbiAgICBPQ1JfUkVNT1RFX1RZUEUgPSAxLFxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgcmVtb3RlSW1hZ2VUZXh0UmVxIHtcclxuICAgIG9jclR5cGU6IE1MVGV4dENvbmZpZztcclxuICAgIGFuYWx5c2VNb2RlPzogbnVtYmVyO1xyXG4gICAgcmVtb3RlVGV4dFNldHRpbmc/OiByZW1vdGVUZXh0U2V0dGluZztcclxuICAgIGZpbGVQYXRoOiBhbnk7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSByZW1vdGVUZXh0U2V0dGluZyB7XHJcbiAgICB0ZXh0RGVuc2l0eVNjZW5lPzogTUxSZW1vdGVUZXh0U2V0dGluZztcclxuICAgIGxhbmd1YWdlTGlzdD86IEFycmF5PHN0cmluZz47XHJcbiAgICBib3JkZXJUeXBlPzogTUxSZW1vdGVUZXh0U2V0dGluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNTEJhbmtDYXJkIHtcclxuICAgIG51bWJlcjogc3RyaW5nO1xyXG4gICAgZXhwaXJlOiBzdHJpbmc7XHJcbiAgICBpc3N1ZXI6IHN0cmluZztcclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIG9yZ2FuaXphdGlvbjogc3RyaW5nO1xyXG4gICAgb3JpZ2luYWxCaXRtYXA6IGFueTtcclxuICAgIG51bWJlckJpdG1hcDogYW55O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCb3JkZXIge1xyXG4gICAgYm90dG9tOiBudW1iZXI7XHJcbiAgICB0b3A6IG51bWJlcjtcclxuICAgIGxlZnQ6IG51bWJlcjtcclxuICAgIHJpZ2h0OiBudW1iZXI7XHJcbiAgICBleGFjdENlbnRlclg6IG51bWJlcjtcclxuICAgIGNlbnRlclk6IG51bWJlcjtcclxuICAgIGNlbnRlclg6IG51bWJlcjtcclxuICAgIGRlc2NyaWJlQ29udGVudHM6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNTERvY3VtZW50IHtcclxuICAgIHN0cmluZ1ZhbHVlOiBzdHJpbmc7XHJcbiAgICBibG9ja3M/OiBCbG9ja3NbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYW5ndWFnZUxpc3Qge1xyXG4gICAgbGFuZ3VhZ2U6IHN0cmluZztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxWbkljckNhcHR1cmVSZXN1bHQge1xyXG4gICAgYmlydGhkYXk6IHN0cmluZztcclxuICAgIGNhcmRCaXRtYXA6IEJpdG1hcDtcclxuICAgIGlkTnVtOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBzZXg6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNTENuSWNyQ2FwdHVyZVJlc3VsdCB7XHJcbiAgICBiaXJ0aGRheTogc3RyaW5nO1xyXG4gICAgY2FyZEJpdG1hcDogQml0bWFwO1xyXG4gICAgaWROdW06IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHNleDogc3RyaW5nO1xyXG4gICAgbmF0aW9uOiBzdHJpbmc7XHJcbiAgICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgICBhdXRob3JpdHk6IHN0cmluZztcclxuICAgIHZhbGlkRGF0ZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1MSWNyQ2FwdHVyZVJlc3VsdCB7XHJcbiAgICBiaXJ0aGRheTogc3RyaW5nO1xyXG4gICAgY2FyZEJpdG1hcDogQml0bWFwO1xyXG4gICAgaWROdW06IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHNleDogc3RyaW5nO1xyXG4gICAgbmF0aW9uOiBzdHJpbmc7XHJcbiAgICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgICB2YWxpZERhdGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNTEdjckNhcHR1cmVSZXN1bHQge1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgY2FyZEJpdG1hcDogQml0bWFwO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZWN0IHtcclxuICAgIGJvdHRvbTogbnVtYmVyO1xyXG4gICAgdG9wOiBudW1iZXI7XHJcbiAgICBsZWZ0OiBudW1iZXI7XHJcbiAgICByaWdodDogbnVtYmVyO1xyXG4gICAgZXhhY3RDZW50ZXJYOiBudW1iZXI7XHJcbiAgICBjZW50ZXJZOiBudW1iZXI7XHJcbiAgICBjZW50ZXJYOiBudW1iZXI7XHJcbiAgICBkZXNjcmliZUNvbnRlbnRzOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQml0bWFwIHtcclxuICAgIG1HYWxsZXJ5Q2FjaGVkOiBib29sZWFuO1xyXG4gICAgbUhlaWdodDogbnVtYmVyO1xyXG4gICAgbU5hdGl2ZVB0cjogbnVtYmVyO1xyXG4gICAgbVdpZHRoOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxUZXh0IHtcclxuICAgIHN0cmluZ1ZhbHVlOiBzdHJpbmc7XHJcbiAgICBibG9ja3M/OiBCbG9ja3NbXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEJsb2NrcyB7XHJcbiAgICBjb250ZW50cz86IENvbnRlbnRzW107XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDb250ZW50cyB7XHJcbiAgICBzdHJpbmdWYWx1ZTogc3RyaW5nO1xyXG4gICAgYm9yZGVyOiBCb3JkZXI7XHJcbiAgICBsYW5ndWFnZTogc3RyaW5nO1xyXG4gICAgbGFuZ3VhZ2VMaXN0PzogTGFuZ3VhZ2VMaXN0W107XHJcbiAgICB2ZXJ0ZXhlcz86IFZlcnRleGVzW107XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBMYW5ndWFnZUxpc3Qge1xyXG4gICAgbGFuZ3VhZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFZlcnRleGVzIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIGRlc2NyaWJlQ29udGVudHM6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNTEZvcm1SZWNvZ2l0aW9uUmVzdWx0IHtcclxuICAgIHJldENvZGU6IG51bWJlcjtcclxuICAgIHRhYmxlQ29udGVudDogVGFibGVDb250ZW50O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlQ29udGVudCB7XHJcbiAgICB0YWJsZUNvdW50OiBudW1iZXI7XHJcbiAgICB0YWJsZXM/OiBUYWJsZXNFbnRpdHlbXSB8IG51bGw7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBUYWJsZXNFbnRpdHkge1xyXG4gICAgdGFibGVJRDogbnVtYmVyO1xyXG4gICAgaGVhZGVySW5mbzogc3RyaW5nO1xyXG4gICAgZm9vdGVySW5mbzogc3RyaW5nO1xyXG4gICAgdGFibGVCb2R5PzogVGFibGVCb2R5RW50aXR5W10gfCBudWxsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVCb2R5RW50aXR5IHtcclxuICAgIHN0YXJ0Um93OiBudW1iZXI7XHJcbiAgICBlbmRSb3c6IG51bWJlcjtcclxuICAgIHN0YXJ0Q29sOiBudW1iZXI7XHJcbiAgICBlbmRDb2w6IG51bWJlcjtcclxuICAgIGNlbGxDb29yZGluYXRlOiBDZWxsQ29vcmRpbmF0ZTtcclxuICAgIHRleHRJbmZvOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDZWxsQ29vcmRpbmF0ZSB7XHJcbiAgICB0b3BMZWZ0X3g6IG51bWJlcjtcclxuICAgIHRvcExlZnRfeTogbnVtYmVyO1xyXG4gICAgdG9wUmlnaHRfeDogbnVtYmVyO1xyXG4gICAgdG9wUmlnaHRfeTogbnVtYmVyO1xyXG4gICAgYm90dG9tTGVmdF94OiBudW1iZXI7XHJcbiAgICBib3R0b21MZWZ0X3k6IG51bWJlcjtcclxuICAgIGJvdHRvbVJpZ2h0X3g6IG51bWJlcjtcclxuICAgIGJvdHRvbVJpZ2h0X3k6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ29sb3JzIHtcclxuICAgIFJFRCA9IC02NTUzNixcclxuICAgIERLR1JBWSA9IC0xMjMwMzI5MixcclxuICAgIEdSQVkgPSAtNzgyOTM2OCxcclxuICAgIFdISVRFID0gLTEsXHJcbiAgICBCTFVFID0gLTE2Nzc2OTYxLFxyXG4gICAgQkxBQ0sgPSAtMTY3NzcyMTYsXHJcbiAgICBMVEdSQVkgPSAtMzM1NTQ0NCxcclxuICAgIE1BR0VOVEEgPSAtNjUyODEsXHJcbiAgICBZRUxMT1cgPSAtMjU2LFxyXG4gICAgQ1lBTiA9IC0xNjcxMTY4MSxcclxuICAgIEdSRUVOID0gLTE2NzExOTM2LFxyXG4gICAgVFJBTlNQQVJFTlQgPSAwLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDb3Jkb3ZhRXJyb3JzIHtcclxuICAgIFVOS05PV04gPSAtMSxcclxuICAgIFNVQ0NFU1MgPSAwLFxyXG4gICAgRElTQ0FSREVEID0gMSxcclxuICAgIElOTkVSID0gMixcclxuICAgIElOQUNUSVZFID0gMyxcclxuICAgIE5PVF9TVVBQT1JURUQgPSA0LFxyXG4gICAgSUxMRUdBTF9QQVJBTUVURVIgPSA1LFxyXG4gICAgT1ZFUkRVRSA9IDYsXHJcbiAgICBOT19GT1VORCA9IDcsXHJcbiAgICBEVVBMSUNBVEVfRk9VTkQgPSA4LFxyXG4gICAgTk9fUEVSTUlTU0lPTiA9IDksXHJcbiAgICBJTlNVRkZJQ0lFTlRfUkVTT1VSQ0UgPSAxMCxcclxuICAgIEFOQUxZU0lTX0ZBSUxVUkUgPSAxMSxcclxuICAgIElOVEVSUlVQVEVEID0gMTIsXHJcbiAgICBFWENFRURfUkFOR0UgPSAxMyxcclxuICAgIERBVEFfTUlTU0lORyA9IDE0LFxyXG4gICAgQVVUSEVOVElDQVRJT05fUkVRVUlSRUQgPSAxNSxcclxuICAgIFRGTElURV9OT1RfQ09NUEFUSUJMRSA9IDE2LFxyXG4gICAgSU5TVUZGSUNJRU5UX1NQQUNFID0gMTcsXHJcbiAgICBIQVNIX01JU1MgPSAxOCxcclxuICAgIFRPS0VOX0lOVkFMSUQgPSAxOSxcclxuICAgIFNFUlZJQ0VfRkFJTFVSRSA9IDIwLFxyXG4gICAgQU5BTFlTSVNfTlVMTCA9IDIxLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGVudW0gUmVnaW9uIHtcclxuUkVHSU9OX0RSX1VOS05PV04gPSAxMDAxLFxyXG5SRUdJT05fRFJfQ0hJTkEgPSAxMDAyLFxyXG5SRUdJT05fRFJfUlVTU0lBID0gMTAwNSxcclxuUkVHSU9OX0RSX0dFUk1BTiA9IDEwMDYsXHJcblJFR0lPTl9EUl9TSU5HQVBPUkUgPSAxMDA3XHJcbn1cclxuIl19