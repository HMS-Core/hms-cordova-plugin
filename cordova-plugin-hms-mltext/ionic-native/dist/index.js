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
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from "@awesome-cordova-plugins/core";
var HMSMLTextPluginOriginal = /** @class */ (function (_super) {
    __extends(HMSMLTextPluginOriginal, _super);
    function HMSMLTextPluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Monitors photographing.
     * @returns Promise<any>
     */
    HMSMLTextPluginOriginal.prototype.photograph = function () { return cordova(this, "photograph", { "otherPromise": true }, arguments); };
    /**
     * Close lens engine.
     * @returns Promise<any>
     */
    HMSMLTextPluginOriginal.prototype.destroy = function () { return cordova(this, "destroy", { "otherPromise": true }, arguments); };
    /**
     * Obtains the size of the preview image of a camera.
     * @returns Promise<any>
     */
    HMSMLTextPluginOriginal.prototype.getDisplayDimension = function () { return cordova(this, "getDisplayDimension", { "otherPromise": true }, arguments); };
    /**
     * An app information class used to store basic information about apps with the HMS Core ML SDK integrated and complete the initialization of ML Text Kit. When using cloud services of the ML Text Kit, you need to set the apiKey of your app.
     * @param  {appSettingReq} appSettingReq Represents the parameter required.
     * @returns Promise<any>
     */
    HMSMLTextPluginOriginal.prototype.appSetting = function (appSettingReq) { return cordova(this, "appSetting", { "otherPromise": true }, arguments); };
    /**
     * Determines whether to collect statistics on the current app.
     * @param {any} any
     * @returns Promise<any>
     */
    HMSMLTextPluginOriginal.prototype.setStatistic = function (any) { return cordova(this, "setStatistic", { "otherPromise": true }, arguments); };
    /**
     * Determines whether to collect statistics on the current app.
     ** @param {any} any
     *  @returns Promise<any>
     */
    HMSMLTextPluginOriginal.prototype.getStatistic = function (any) { return cordova(this, "getStatistic", { "otherPromise": true }, arguments); };
    /**
     * This service enable logger service.
     * @returns Promise<any>
     */
    HMSMLTextPluginOriginal.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    /**
     * This service disable logger service.
     * @returns Promise<any>
     */
    HMSMLTextPluginOriginal.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSMLTextPluginOriginal.prototype, "MLLocalTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLLocalTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLLocalTextSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPluginOriginal.prototype, "icrVnCaptureType", {
        get: function () { return cordovaPropertyGet(this, "icrVnCaptureType"); },
        set: function (value) { cordovaPropertySet(this, "icrVnCaptureType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPluginOriginal.prototype, "MLTextConfig", {
        get: function () { return cordovaPropertyGet(this, "MLTextConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLTextConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPluginOriginal.prototype, "MLRemoteTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteTextSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPluginOriginal.prototype, "MLBcrCaptureConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrCaptureConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrCaptureConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPluginOriginal.prototype, "MLGcrCaptureUIConfig", {
        get: function () { return cordovaPropertyGet(this, "MLGcrCaptureUIConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLGcrCaptureUIConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPluginOriginal.prototype, "MLBcrResultConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrResultConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrResultConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPluginOriginal.prototype, "ImgSuperResolutionConfig", {
        get: function () { return cordovaPropertyGet(this, "ImgSuperResolutionConfig"); },
        set: function (value) { cordovaPropertySet(this, "ImgSuperResolutionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPluginOriginal.prototype, "MLFormRecogitionConfig", {
        get: function () { return cordovaPropertyGet(this, "MLFormRecogitionConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLFormRecogitionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPluginOriginal.prototype, "MLProductConfig", {
        get: function () { return cordovaPropertyGet(this, "MLProductConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLProductConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPluginOriginal.prototype, "gcrCaptureType", {
        get: function () { return cordovaPropertyGet(this, "gcrCaptureType"); },
        set: function (value) { cordovaPropertySet(this, "gcrCaptureType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextPluginOriginal.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    HMSMLTextPluginOriginal.pluginName = "HMSMLTextPlugin";
    HMSMLTextPluginOriginal.plugin = "cordova-plugin-hms-mltext";
    HMSMLTextPluginOriginal.pluginRef = "HMSMLTextPlugin";
    HMSMLTextPluginOriginal.platforms = ["Android"];
    return HMSMLTextPluginOriginal;
}(AwesomeCordovaNativePlugin));
var HMSMLTextPlugin = new HMSMLTextPluginOriginal();
export { HMSMLTextPlugin };
var HMSMLTextOriginal = /** @class */ (function (_super) {
    __extends(HMSMLTextOriginal, _super);
    function HMSMLTextOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This method start the Text analyzer.
     * @param  {localImageTextReq|remoteImageTextReq} ImageTextAnalyserInput Reperesents the necessary parameters to convert images to text format.
     * @returns Promise <TextAnalyser>
     */
    HMSMLTextOriginal.prototype.imageTextAnalyser = function (ImageTextAnalyserInput) { return cordova(this, "imageTextAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method stop the Text analyzer.
     * @returns Promise<any>
     */
    HMSMLTextOriginal.prototype.stopTextAnalyser = function () { return cordova(this, "stopTextAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method gives Text Analyser information.
     * @returns Promise<any>
     */
    HMSMLTextOriginal.prototype.getTextAnalyserInfo = function () { return cordova(this, "getTextAnalyserInfo", { "otherPromise": true }, arguments); };
    /**
     * This method provides a document recognition component that recognizes text from images of documents.
     * @param  {documentImageAnalyserReq} documentImageAnalyserReq Reperesents the necessary parameter to convert document images to text format.
     * @returns Promise<DocumentAnalyser>
     */
    HMSMLTextOriginal.prototype.documentImageAnalyser = function (documentImageAnalyserReq) { return cordova(this, "documentImageAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method stop the Document analyzer.
     * @returns Promise<any>
     */
    HMSMLTextOriginal.prototype.stopDocumentImageAnalyser = function () { return cordova(this, "stopDocumentImageAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method close the Document analyzer.
     * @returns Promise<any>
     */
    HMSMLTextOriginal.prototype.closeDocumentImageAnalyser = function () { return cordova(this, "closeDocumentImageAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method returns the Document analyzer setting.
     * @returns Promise<any>
     */
    HMSMLTextOriginal.prototype.getDocumentImageAnalyserSetting = function () { return cordova(this, "getDocumentImageAnalyserSetting", { "otherPromise": true }, arguments); };
    /**
     * This method returns the Image analyzer setting.
     * @returns Promise<any>
     */
    HMSMLTextOriginal.prototype.getTextAnalyserSetting = function () { return cordova(this, "getTextAnalyserSetting", { "otherPromise": true }, arguments); };
    /**
     * This method returns the GCR setting.
     * @returns Promise<any>
     */
    HMSMLTextOriginal.prototype.getGCRSetting = function () { return cordova(this, "getGCRSetting", { "otherPromise": true }, arguments); };
    /**
     * This method stop the Form Recognition Analyzer.
     * @returns Promise<any>
     */
    HMSMLTextOriginal.prototype.stopFormRecognitionAnalyser = function () { return cordova(this, "stopFormRecognitionAnalyser", { "otherPromise": true }, arguments); };
    /**
     * The bank card recognition service recognizes bank cards in camera streams within angle offset of 15 degrees and extracts key information such as card number and validity period.
     * @param  {bankCardSDKDetectorReq|bankCardPluginDetectorReq} bankCardDetecterInput Represents the parameter required for bank card recognition.
     * @returns Promise<BankCardAnalyser> | Promise<BankCardAnalyser>
     */
    HMSMLTextOriginal.prototype.bankCardDetector = function (bankCardDetecterInput) {
        return;
    };
    /**
     * This method stop bankcard recognition service.
     * @returns Promise<any>
     */
    HMSMLTextOriginal.prototype.stopBankCardDetector = function () { return cordova(this, "stopBankCardDetector", { "otherPromise": true }, arguments); };
    HMSMLTextOriginal.prototype.setResultTypeBcr = function (mLBcrCaptureConfig) { return cordova(this, "setResultTypeBcr", { "otherPromise": true }, arguments); };
    HMSMLTextOriginal.prototype.setRecModeBcr = function (mLBcrCaptureConfig) { return cordova(this, "setRecModeBcr", { "otherPromise": true }, arguments); };
    /**
     * This method returns the BCR setting.
     * @returns Promise<any>
     */
    HMSMLTextOriginal.prototype.getBankCardDetectorSetting = function () { return cordova(this, "getBankCardDetectorSetting", { "otherPromise": true }, arguments); };
    /**
     * The general card recognition service provides a universal development framework based on the text recognition technology.
     * @param  {generalCardDetectorReq} generalCardDetectorReq Represents the parameter required for general card recognition plug-in.
     * @returns Promise<GeneralCardAnalyser>
     */
    HMSMLTextOriginal.prototype.generalCardDetector = function (generalCardDetectorReq) { return cordova(this, "generalCardDetector", { "otherPromise": true }, arguments); };
    /**
     * The general Vietnam id card  recognition service provides a universal development framework based on the text recognition technology.
     * @param  {icrVnDetectorReq} icrVnDetectorReq Represents the parameter required for general card recognition plug-in.
     * @returns Promise<MLVnIcrCaptureResult>
     */
    HMSMLTextOriginal.prototype.icrVnCardDetector = function (icrVnDetectorReq) { return cordova(this, "icrVnCardDetector", { "otherPromise": true }, arguments); };
    /**
     * The form recognition service uses AI technologies to recognize and return form structure information (including rows, columns, and coordinates of cells) and form text in Chinese and English (including punctuation) from input images.
     * @param  {formRecognizerAnalyserReq} formRecognizerAnalyserReq Represents the parameter required for general card recognition plug-in.
     * @returns Promise<GeneralCardAnalyser>
     */
    HMSMLTextOriginal.prototype.formRecognitionAnalyser = function (formRecognizerAnalyserReq) { return cordova(this, "formRecognitionAnalyser", { "otherPromise": true }, arguments); };
    HMSMLTextOriginal.prototype.icrLocalAnalyser = function (localAnalyserReq) { return cordova(this, "icrLocalAnalyser", { "otherPromise": true }, arguments); };
    HMSMLTextOriginal.prototype.icrLocalAnalyserCreateIdCard = function (createIdCardReq) { return cordova(this, "icrLocalAnalyserCreateIdCard", { "otherPromise": true }, arguments); };
    HMSMLTextOriginal.prototype.icrLocalAnalyserStop = function () { return cordova(this, "icrLocalAnalyserStop", { "otherPromise": true }, arguments); };
    HMSMLTextOriginal.prototype.geticrCnCardInstance = function () { return cordova(this, "geticrCnCardInstance", { "otherPromise": true }, arguments); };
    HMSMLTextOriginal.prototype.icrCnCardCreate = function () { return cordova(this, "icrCnCardCreate", { "otherPromise": true }, arguments); };
    HMSMLTextOriginal.prototype.geticrVnCardInstance = function () { return cordova(this, "geticrVnCardInstance", { "otherPromise": true }, arguments); };
    HMSMLTextOriginal.prototype.icrVnCardCreate = function () { return cordova(this, "icrVnCardCreate", { "otherPromise": true }, arguments); };
    HMSMLTextOriginal.prototype.getIcrVnCapture = function () { return cordova(this, "getIcrVnCapture", { "otherPromise": true }, arguments); };
    HMSMLTextOriginal.prototype.startCustomizedView = function (userProps) { return cordova(this, "startCustomizedView", { "otherPromise": true }, arguments); };
    HMSMLTextOriginal.prototype.switchLight = function () { return cordova(this, "switchLight", { "otherPromise": true }, arguments); };
    HMSMLTextOriginal.prototype.getLightStatus = function () { return cordova(this, "getLightStatus", { "otherPromise": true }, arguments); };
    HMSMLTextOriginal.prototype.setUserRegion = function (region) { return cordova(this, "setUserRegion", { "otherPromise": true }, arguments); };
    HMSMLTextOriginal.prototype.getCountryCode = function () { return cordova(this, "getCountryCode", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSMLTextOriginal.prototype, "icrVnCaptureType", {
        get: function () { return cordovaPropertyGet(this, "icrVnCaptureType"); },
        set: function (value) { cordovaPropertySet(this, "icrVnCaptureType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextOriginal.prototype, "gcrCaptureType", {
        get: function () { return cordovaPropertyGet(this, "gcrCaptureType"); },
        set: function (value) { cordovaPropertySet(this, "gcrCaptureType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextOriginal.prototype, "MLLocalTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLLocalTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLLocalTextSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextOriginal.prototype, "MLTextConfig", {
        get: function () { return cordovaPropertyGet(this, "MLTextConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLTextConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextOriginal.prototype, "MLRemoteTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteTextSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextOriginal.prototype, "MLBcrCaptureConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrCaptureConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrCaptureConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextOriginal.prototype, "MLGcrCaptureUIConfig", {
        get: function () { return cordovaPropertyGet(this, "MLGcrCaptureUIConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLGcrCaptureUIConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextOriginal.prototype, "MLBcrResultConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrResultConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrResultConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextOriginal.prototype, "ImgSuperResolutionConfig", {
        get: function () { return cordovaPropertyGet(this, "ImgSuperResolutionConfig"); },
        set: function (value) { cordovaPropertySet(this, "ImgSuperResolutionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextOriginal.prototype, "MLFormRecogitionConfig", {
        get: function () { return cordovaPropertyGet(this, "MLFormRecogitionConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLFormRecogitionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextOriginal.prototype, "MLProductConfig", {
        get: function () { return cordovaPropertyGet(this, "MLProductConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLProductConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextOriginal.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLTextOriginal.prototype, "RecMode", {
        get: function () { return cordovaPropertyGet(this, "RecMode"); },
        set: function (value) { cordovaPropertySet(this, "RecMode", value); },
        enumerable: false,
        configurable: true
    });
    HMSMLTextOriginal.pluginName = "HMSMLText";
    HMSMLTextOriginal.plugin = "cordova-plugin-hms-mltext";
    HMSMLTextOriginal.pluginRef = "HMSMLText";
    HMSMLTextOriginal.platforms = ["Android"];
    return HMSMLTextOriginal;
}(AwesomeCordovaNativePlugin));
var HMSMLText = new HMSMLTextOriginal();
export { HMSMLText };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmF0aXZlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLCtFQUtOLE1BQU0sK0JBQStCLENBQUM7O0lBU0YsbUNBQTBCOzs7O0lBMkIzRDs7O09BR0c7SUFDSCxvQ0FBVTtJQUlWOzs7T0FHRztJQUNILGlDQUFPO0lBSVA7OztPQUdHO0lBQ0gsNkNBQW1CO0lBSW5COzs7O09BSUc7SUFDSCxvQ0FBVSxhQUFDLGFBQTRCO0lBSXZDOzs7O09BSUc7SUFDSCxzQ0FBWSxhQUFDLEdBQVE7SUFJckI7Ozs7T0FJRztJQUNILHNDQUFZLGFBQUMsR0FBUTtJQUlyQjs7O09BR0c7SUFDSCxzQ0FBWTtJQUlaOzs7T0FHRztJQUNILHVDQUFhOzBCQXhGYiwrQ0FBa0I7Ozs7OzswQkFFbEIsNkNBQWdCOzs7Ozs7MEJBRWhCLHlDQUFZOzs7Ozs7MEJBRVosZ0RBQW1COzs7Ozs7MEJBRW5CLCtDQUFrQjs7Ozs7OzBCQUVsQixpREFBb0I7Ozs7OzswQkFFcEIsOENBQWlCOzs7Ozs7MEJBRWpCLHFEQUF3Qjs7Ozs7OzBCQUV4QixtREFBc0I7Ozs7OzswQkFFdEIsNENBQWU7Ozs7OzswQkFFZiwyQ0FBYzs7Ozs7OzBCQUVkLG1DQUFNOzs7Ozs7Ozs7OzBCQXZEVjtFQStCcUMsMEJBQTBCO1NBQWxELGVBQWU7O0lBcUdHLDZCQUEwQjs7OztJQTZCckQ7Ozs7T0FJRztJQUNILHFDQUFpQixhQUNiLHNCQUE4RDtJQUtsRTs7O09BR0c7SUFDSCxvQ0FBZ0I7SUFJaEI7OztPQUdHO0lBQ0gsdUNBQW1CO0lBSW5COzs7O09BSUc7SUFDSCx5Q0FBcUIsYUFDakIsd0JBQWtEO0lBS3REOzs7T0FHRztJQUNILDZDQUF5QjtJQUl6Qjs7O09BR0c7SUFDSCw4Q0FBMEI7SUFJMUI7OztP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bEIsZ0VBQXdCLENBQUE7SUFDeEIsNERBQXNCLENBQUE7SUFDdEIsOERBQXVCLENBQUE7SUFDdkIsOERBQXVCLENBQUE7SUFDdkIsb0VBQTBCLENBQUE7QUFDMUIsQ0FBQyxFQU5XLE1BQU0sS0FBTixNQUFNLFFBTWpCIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIENvcHlyaWdodCAyMDIzLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5cclxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcclxuICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG5cclxuICAgICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAgICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gICAgUGx1Z2luLFxyXG4gICAgQ29yZG92YSxcclxuICAgIENvcmRvdmFQcm9wZXJ0eSwgXHJcbiAgICBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiAsXHJcbn0gZnJvbSBcIkBhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlXCI7XHJcblxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6IFwiSE1TTUxUZXh0UGx1Z2luXCIsXHJcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLW1sdGV4dFwiLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICAgIHBsdWdpblJlZjogXCJITVNNTFRleHRQbHVnaW5cIiwgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxyXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLCAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TTUxUZXh0UGx1Z2luIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gIHtcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgTUxMb2NhbFRleHRTZXR0aW5nID0gTUxMb2NhbFRleHRTZXR0aW5nO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBpY3JWbkNhcHR1cmVUeXBlID0gaWNyQ2FwdHVyZVR5cGU7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIE1MVGV4dENvbmZpZyA9IE1MVGV4dENvbmZpZztcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgTUxSZW1vdGVUZXh0U2V0dGluZyA9IE1MUmVtb3RlVGV4dFNldHRpbmc7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIE1MQmNyQ2FwdHVyZUNvbmZpZyA9IE1MQmNyQ2FwdHVyZUNvbmZpZztcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgTUxHY3JDYXB0dXJlVUlDb25maWcgPSBNTEdjckNhcHR1cmVVSUNvbmZpZztcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgTUxCY3JSZXN1bHRDb25maWcgPSBNTEJjclJlc3VsdENvbmZpZztcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgSW1nU3VwZXJSZXNvbHV0aW9uQ29uZmlnID0gSW1nU3VwZXJSZXNvbHV0aW9uQ29uZmlnO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBNTEZvcm1SZWNvZ2l0aW9uQ29uZmlnID0gTUxGb3JtUmVjb2dpdGlvbkNvbmZpZztcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgTUxQcm9kdWN0Q29uZmlnID0gTUxQcm9kdWN0Q29uZmlnO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBnY3JDYXB0dXJlVHlwZSA9IGdjckNhcHR1cmVUeXBlO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBDb2xvcnMgPSBDb2xvcnM7XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogTW9uaXRvcnMgcGhvdG9ncmFwaGluZy5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBwaG90b2dyYXBoKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogQ2xvc2UgbGVucyBlbmdpbmUuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgZGVzdHJveSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbnMgdGhlIHNpemUgb2YgdGhlIHByZXZpZXcgaW1hZ2Ugb2YgYSBjYW1lcmEuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgZ2V0RGlzcGxheURpbWVuc2lvbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIEFuIGFwcCBpbmZvcm1hdGlvbiBjbGFzcyB1c2VkIHRvIHN0b3JlIGJhc2ljIGluZm9ybWF0aW9uIGFib3V0IGFwcHMgd2l0aCB0aGUgSE1TIENvcmUgTUwgU0RLIGludGVncmF0ZWQgYW5kIGNvbXBsZXRlIHRoZSBpbml0aWFsaXphdGlvbiBvZiBNTCBUZXh0IEtpdC4gV2hlbiB1c2luZyBjbG91ZCBzZXJ2aWNlcyBvZiB0aGUgTUwgVGV4dCBLaXQsIHlvdSBuZWVkIHRvIHNldCB0aGUgYXBpS2V5IG9mIHlvdXIgYXBwLlxyXG4gICAgICogQHBhcmFtICB7YXBwU2V0dGluZ1JlcX0gYXBwU2V0dGluZ1JlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgYXBwU2V0dGluZyhhcHBTZXR0aW5nUmVxOiBhcHBTZXR0aW5nUmVxKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gY29sbGVjdCBzdGF0aXN0aWNzIG9uIHRoZSBjdXJyZW50IGFwcC5cclxuICAgICAqIEBwYXJhbSB7YW55fSBhbnlcclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBzZXRTdGF0aXN0aWMoYW55OiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0byBjb2xsZWN0IHN0YXRpc3RpY3Mgb24gdGhlIGN1cnJlbnQgYXBwLlxyXG4gICAgICoqIEBwYXJhbSB7YW55fSBhbnlcclxuICAgICAqICBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgZ2V0U3RhdGlzdGljKGFueTogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHNlcnZpY2UgZW5hYmxlIGxvZ2dlciBzZXJ2aWNlLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIGVuYWJsZUxvZ2dlcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgc2VydmljZSBkaXNhYmxlIGxvZ2dlciBzZXJ2aWNlLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIGRpc2FibGVMb2dnZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiBcIkhNU01MVGV4dFwiLFxyXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1tbHRleHRcIiwgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgICBwbHVnaW5SZWY6IFwiSE1TTUxUZXh0XCIsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU01MVGV4dCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luICB7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIGljclZuQ2FwdHVyZVR5cGUgPSBpY3JDYXB0dXJlVHlwZTtcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgZ2NyQ2FwdHVyZVR5cGUgPSBnY3JDYXB0dXJlVHlwZTtcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgTUxMb2NhbFRleHRTZXR0aW5nID0gTUxMb2NhbFRleHRTZXR0aW5nO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBNTFRleHRDb25maWcgPSBNTFRleHRDb25maWc7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIE1MUmVtb3RlVGV4dFNldHRpbmcgPSBNTFJlbW90ZVRleHRTZXR0aW5nO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBNTEJjckNhcHR1cmVDb25maWcgPSBNTEJjckNhcHR1cmVDb25maWc7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIE1MR2NyQ2FwdHVyZVVJQ29uZmlnID0gTUxHY3JDYXB0dXJlVUlDb25maWc7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIE1MQmNyUmVzdWx0Q29uZmlnID0gTUxCY3JSZXN1bHRDb25maWc7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIEltZ1N1cGVyUmVzb2x1dGlvbkNvbmZpZyA9IEltZ1N1cGVyUmVzb2x1dGlvbkNvbmZpZztcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgTUxGb3JtUmVjb2dpdGlvbkNvbmZpZyA9IE1MRm9ybVJlY29naXRpb25Db25maWc7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIE1MUHJvZHVjdENvbmZpZyA9IE1MUHJvZHVjdENvbmZpZztcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgQ29sb3JzID0gQ29sb3JzO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBSZWNNb2RlID0gUmVjTW9kZTtcclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBzdGFydCB0aGUgVGV4dCBhbmFseXplci5cclxuICAgICAqIEBwYXJhbSAge2xvY2FsSW1hZ2VUZXh0UmVxfHJlbW90ZUltYWdlVGV4dFJlcX0gSW1hZ2VUZXh0QW5hbHlzZXJJbnB1dCBSZXBlcmVzZW50cyB0aGUgbmVjZXNzYXJ5IHBhcmFtZXRlcnMgdG8gY29udmVydCBpbWFnZXMgdG8gdGV4dCBmb3JtYXQuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIDxUZXh0QW5hbHlzZXI+XHJcbiAgICAgKi9cclxuICAgIGltYWdlVGV4dEFuYWx5c2VyKFxyXG4gICAgICAgIEltYWdlVGV4dEFuYWx5c2VySW5wdXQ6IGxvY2FsSW1hZ2VUZXh0UmVxIHwgcmVtb3RlSW1hZ2VUZXh0UmVxXHJcbiAgICApOiBQcm9taXNlPE1MVGV4dD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3AgdGhlIFRleHQgYW5hbHl6ZXIuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgc3RvcFRleHRBbmFseXNlcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGdpdmVzIFRleHQgQW5hbHlzZXIgaW5mb3JtYXRpb24uXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgZ2V0VGV4dEFuYWx5c2VySW5mbygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHByb3ZpZGVzIGEgZG9jdW1lbnQgcmVjb2duaXRpb24gY29tcG9uZW50IHRoYXQgcmVjb2duaXplcyB0ZXh0IGZyb20gaW1hZ2VzIG9mIGRvY3VtZW50cy5cclxuICAgICAqIEBwYXJhbSAge2RvY3VtZW50SW1hZ2VBbmFseXNlclJlcX0gZG9jdW1lbnRJbWFnZUFuYWx5c2VyUmVxIFJlcGVyZXNlbnRzIHRoZSBuZWNlc3NhcnkgcGFyYW1ldGVyIHRvIGNvbnZlcnQgZG9jdW1lbnQgaW1hZ2VzIHRvIHRleHQgZm9ybWF0LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxEb2N1bWVudEFuYWx5c2VyPlxyXG4gICAgICovXHJcbiAgICBkb2N1bWVudEltYWdlQW5hbHlzZXIoXHJcbiAgICAgICAgZG9jdW1lbnRJbWFnZUFuYWx5c2VyUmVxOiBkb2N1bWVudEltYWdlQW5hbHlzZXJSZXFcclxuICAgICk6IFByb21pc2U8TUxEb2N1bWVudD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3AgdGhlIERvY3VtZW50IGFuYWx5emVyLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIHN0b3BEb2N1bWVudEltYWdlQW5hbHlzZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBjbG9zZSB0aGUgRG9jdW1lbnQgYW5hbHl6ZXIuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgY2xvc2VEb2N1bWVudEltYWdlQW5hbHlzZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBEb2N1bWVudCBhbmFseXplciBzZXR0aW5nLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIGdldERvY3VtZW50SW1hZ2VBbmFseXNlclNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBJbWFnZSBhbmFseXplciBzZXR0aW5nLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIGdldFRleHRBbmFseXNlclNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBHQ1Igc2V0dGluZy5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBnZXRHQ1JTZXR0aW5nKCk6IFByb21pc2U8Z2NyU2V0dGluZ1Jlc3VsdHM+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wIHRoZSBGb3JtIFJlY29nbml0aW9uIEFuYWx5emVyLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIHN0b3BGb3JtUmVjb2duaXRpb25BbmFseXNlcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGJhbmsgY2FyZCByZWNvZ25pdGlvbiBzZXJ2aWNlIHJlY29nbml6ZXMgYmFuayBjYXJkcyBpbiBjYW1lcmEgc3RyZWFtcyB3aXRoaW4gYW5nbGUgb2Zmc2V0IG9mIDE1IGRlZ3JlZXMgYW5kIGV4dHJhY3RzIGtleSBpbmZvcm1hdGlvbiBzdWNoIGFzIGNhcmQgbnVtYmVyIGFuZCB2YWxpZGl0eSBwZXJpb2QuXHJcbiAgICAgKiBAcGFyYW0gIHtiYW5rQ2FyZFNES0RldGVjdG9yUmVxfGJhbmtDYXJkUGx1Z2luRGV0ZWN0b3JSZXF9IGJhbmtDYXJkRGV0ZWN0ZXJJbnB1dCBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIGJhbmsgY2FyZCByZWNvZ25pdGlvbi5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8QmFua0NhcmRBbmFseXNlcj4gfCBQcm9taXNlPEJhbmtDYXJkQW5hbHlzZXI+XHJcbiAgICAgKi9cclxuICAgIGJhbmtDYXJkRGV0ZWN0b3IoXHJcbiAgICAgICAgYmFua0NhcmREZXRlY3RlcklucHV0OlxyXG4gICAgICAgICAgICB8IGJhbmtDYXJkU0RLRGV0ZWN0b3JSZXFcclxuICAgICAgICAgICAgfCBiYW5rQ2FyZFBsdWdpbkRldGVjdG9yUmVxXHJcbiAgICApOiBQcm9taXNlPE1MQmFua0NhcmQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wIGJhbmtjYXJkIHJlY29nbml0aW9uIHNlcnZpY2UuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgc3RvcEJhbmtDYXJkRGV0ZWN0b3IoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0UmVzdWx0VHlwZUJjcihtTEJjckNhcHR1cmVDb25maWc6IG1MQmNyQ2FwdHVyZUNvbmZpZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldFJlY01vZGVCY3IobUxCY3JDYXB0dXJlQ29uZmlnOiBtTEJjckNhcHR1cmVDb25maWcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIEJDUiBzZXR0aW5nLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIGdldEJhbmtDYXJkRGV0ZWN0b3JTZXR0aW5nKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGdlbmVyYWwgY2FyZCByZWNvZ25pdGlvbiBzZXJ2aWNlIHByb3ZpZGVzIGEgdW5pdmVyc2FsIGRldmVsb3BtZW50IGZyYW1ld29yayBiYXNlZCBvbiB0aGUgdGV4dCByZWNvZ25pdGlvbiB0ZWNobm9sb2d5LlxyXG4gICAgICogQHBhcmFtICB7Z2VuZXJhbENhcmREZXRlY3RvclJlcX0gZ2VuZXJhbENhcmREZXRlY3RvclJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIGdlbmVyYWwgY2FyZCByZWNvZ25pdGlvbiBwbHVnLWluLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxHZW5lcmFsQ2FyZEFuYWx5c2VyPlxyXG4gICAgICovXHJcbiAgICBnZW5lcmFsQ2FyZERldGVjdG9yKFxyXG4gICAgICAgIGdlbmVyYWxDYXJkRGV0ZWN0b3JSZXE6IGdlbmVyYWxDYXJkRGV0ZWN0b3JSZXFcclxuICAgICk6IFByb21pc2U8TUxHY3JDYXB0dXJlUmVzdWx0PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGdlbmVyYWwgVmlldG5hbSBpZCBjYXJkICByZWNvZ25pdGlvbiBzZXJ2aWNlIHByb3ZpZGVzIGEgdW5pdmVyc2FsIGRldmVsb3BtZW50IGZyYW1ld29yayBiYXNlZCBvbiB0aGUgdGV4dCByZWNvZ25pdGlvbiB0ZWNobm9sb2d5LlxyXG4gICAgICogQHBhcmFtICB7aWNyVm5EZXRlY3RvclJlcX0gaWNyVm5EZXRlY3RvclJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIGdlbmVyYWwgY2FyZCByZWNvZ25pdGlvbiBwbHVnLWluLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxNTFZuSWNyQ2FwdHVyZVJlc3VsdD5cclxuICAgICAqL1xyXG4gICAgaWNyVm5DYXJkRGV0ZWN0b3IoXHJcbiAgICAgICAgaWNyVm5EZXRlY3RvclJlcTogaWNyVm5EZXRlY3RvclJlcVxyXG4gICAgKTogUHJvbWlzZTxNTFZuSWNyQ2FwdHVyZVJlc3VsdD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBmb3JtIHJlY29nbml0aW9uIHNlcnZpY2UgdXNlcyBBSSB0ZWNobm9sb2dpZXMgdG8gcmVjb2duaXplIGFuZCByZXR1cm4gZm9ybSBzdHJ1Y3R1cmUgaW5mb3JtYXRpb24gKGluY2x1ZGluZyByb3dzLCBjb2x1bW5zLCBhbmQgY29vcmRpbmF0ZXMgb2YgY2VsbHMpIGFuZCBmb3JtIHRleHQgaW4gQ2hpbmVzZSBhbmQgRW5nbGlzaCAoaW5jbHVkaW5nIHB1bmN0dWF0aW9uKSBmcm9tIGlucHV0IGltYWdlcy5cclxuICAgICAqIEBwYXJhbSAge2Zvcm1SZWNvZ25pemVyQW5hbHlzZXJSZXF9IGZvcm1SZWNvZ25pemVyQW5hbHlzZXJSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBnZW5lcmFsIGNhcmQgcmVjb2duaXRpb24gcGx1Zy1pbi5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8R2VuZXJhbENhcmRBbmFseXNlcj5cclxuICAgICAqL1xyXG4gICAgZm9ybVJlY29nbml0aW9uQW5hbHlzZXIoXHJcbiAgICAgICAgZm9ybVJlY29nbml6ZXJBbmFseXNlclJlcTogZm9ybVJlY29nbml6ZXJBbmFseXNlclJlcVxyXG4gICAgKTogUHJvbWlzZTxNTEdjckNhcHR1cmVSZXN1bHQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaWNyTG9jYWxBbmFseXNlcihcclxuICAgICAgICBsb2NhbEFuYWx5c2VyUmVxOiBsb2NhbEFuYWx5c2VyUmVxXHJcbiAgICApOiBQcm9taXNlPE1MSWNyQ2FwdHVyZVJlc3VsdD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaWNyTG9jYWxBbmFseXNlckNyZWF0ZUlkQ2FyZChcclxuICAgICAgICBjcmVhdGVJZENhcmRSZXE6IGNyZWF0ZUlkQ2FyZFJlcVxyXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGljckxvY2FsQW5hbHlzZXJTdG9wKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRpY3JDbkNhcmRJbnN0YW5jZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaWNyQ25DYXJkQ3JlYXRlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldGljclZuQ2FyZEluc3RhbmNlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGljclZuQ2FyZENyZWF0ZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRJY3JWbkNhcHR1cmUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHN0YXJ0Q3VzdG9taXplZFZpZXcodXNlclByb3BzOiBDdXN0b21WaWV3TW9kZVJlcXVlc3QpOiBQcm9taXNlPE1MQmFua0NhcmQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc3dpdGNoTGlnaHQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldExpZ2h0U3RhdHVzKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldFVzZXJSZWdpb24ocmVnaW9uOiBSZWdpb24pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRDb3VudHJ5Q29kZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21WaWV3TW9kZVJlcXVlc3Qge1xyXG4gICAgaXNUaXRsZUF2YWlsYWJsZTogYm9vbGVhbjtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBoZWlnaHRGYWN0b3I6IG51bWJlcjtcclxuICAgIHdpZHRoRmFjdG9yOiBudW1iZXI7XHJcbiAgICBpc0ZsYXNoQXZhaWxhYmxlOiBib29sZWFuO1xyXG4gICAgcmVzdWx0VHlwZTogTUxCY3JSZXN1bHRDb25maWc7XHJcbiAgICByZWNNb2RlOiBSZWNNb2RlO1xyXG4gfVxyXG5cclxuLy8gQVBJIEtFWVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBjb25maWdSZXEge1xyXG4gICAgYXBpS2V5OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgYXBwU2V0dGluZ1JlcSB7XHJcbiAgICBhcGlLZXk/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgYXBwbGljYXRpb25JZD86IHN0cmluZyB8IG51bGw7XHJcbiAgICBjZXJ0RmluZ2VycHJpbnQ/OiBzdHJpbmcgfCBudWxsO1xyXG59IFxyXG5cclxuXHJcbi8vIFNESyBCQU5LIENBUkQgQU5BTFlTRVJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgYmFua0NhcmRTREtEZXRlY3RvclJlcSB7XHJcbiAgICBmaWxlUGF0aDogYW55O1xyXG4gICAgZGV0ZWN0VHlwZTogMDtcclxuICAgIG1MQmNyQW5hbHl6ZXJTZXR0aW5nPzogTUxCY3JBbmFseXplclNldHRpbmcgfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1MQmNyQW5hbHl6ZXJTZXR0aW5nIHtcclxuICAgIGxhbmdUeXBlPzogc3RyaW5nIHwgbnVsbDtcclxuICAgIHJlc3VsdFR5cGU/OiBNTEJjclJlc3VsdENvbmZpZyB8IG51bGw7XHJcbn1cclxuXHJcbi8vIFBMVUdJTiBCQU5LIENBUkQgQU5BTFlTRVJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgYmFua0NhcmRQbHVnaW5EZXRlY3RvclJlcSB7XHJcbiAgICBkZXRlY3RUeXBlOiAxO1xyXG4gICAgbUxCY3JDYXB0dXJlQ29uZmlnPzogbUxCY3JDYXB0dXJlQ29uZmlnIHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBtTEJjckNhcHR1cmVDb25maWcge1xyXG4gICAgb3JpZW50YXRpb24/OiBNTEJjckNhcHR1cmVDb25maWcgfCBudWxsO1xyXG4gICAgcmVzdWx0VHlwZT86IE1MQmNyUmVzdWx0Q29uZmlnIHwgbnVsbDtcclxuICAgIHJlY01vZGU/OiBSZWNNb2RlIHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUmVjTW9kZSB7XHJcbiAgICBXRUFLX01PREUgPSAwLFxyXG4gICAgU1RSSUNUX01PREUgPSAxLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBNTEJjckNhcHR1cmVDb25maWcge1xyXG4gICAgRVJST1JfQ09ERV9JTklUX0NBTUVSQV9GQUlMRUQgPSAxMDEwMSxcclxuICAgIFJFU1VMVF9OVU1fT05MWSA9IDAsXHJcbiAgICBPUklFTlRBVElPTl9BVVRPID0gMCxcclxuICAgIFdFQUtfTU9ERSA9IDAsXHJcbiAgICBPUklFTlRBVElPTl9MQU5EU0NBUEUgPSAxLFxyXG4gICAgT1JJRU5UQVRJT05fUE9SVFJBSVQgPSAyLFxyXG4gICAgUkVTVUxUX0FMTCA9IDIsXHJcbiAgICBSRVNVTFRfU0lNUExFID0gMSxcclxuICAgIFNUUklDVF9NT0RFID0gMSxcclxufVxyXG5leHBvcnQgZW51bSBNTEJjclJlc3VsdENvbmZpZyB7XHJcbiAgICBSRVNVTFRfTlVNX09OTFkgPSAwLFxyXG4gICAgUkVTVUxUX1NJTVBMRSA9IDEsXHJcbiAgICBSRVNVTFRfQUxMID0gMixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNTEJjckNhcHR1cmVSZXN1bHQge1xyXG4gICAgZXJyb3JDb2RlPzogTUxCY3JDYXB0dXJlRXJyb3JDb2RlIHwgbnVsbDtcclxuICAgIGV4cGlyZT86IFN0cmluZyB8IG51bGw7XHJcbiAgICBpc3N1ZXI/OiBTdHJpbmcgfCBudWxsO1xyXG4gICAgbnVtYmVyPzogU3RyaW5nIHwgbnVsbDtcclxuICAgIG51bWJlckJpdG1hcD86IGFueTtcclxuICAgIG9yZ2FuaXphdGlvbj86IFN0cmluZyB8IG51bGw7XHJcbiAgICByaWdpbmFsQml0bWFwPzogYW55O1xyXG4gICAgdHlwZT86IFN0cmluZyB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1MQmNyQ2FwdHVyZUVycm9yQ29kZSB7XHJcbiAgICBFUlJPUl9DT0RFX0lOSVRfQ0FNRVJBX0ZBSUxFRCA9IDEwMTAxLFxyXG59XHJcblxyXG5cclxuLy9Eb2N1bWVudCBBbmFseXNlclxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBkb2N1bWVudEltYWdlQW5hbHlzZXJSZXEge1xyXG4gICAgZG9jdW1lbnRTZXR0aW5nPzogRG9jdW1lbnRTZXR0aW5nIHwgbnVsbDtcclxuICAgIGZpbGVQYXRoOiBhbnk7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudFNldHRpbmcge1xyXG4gICAgYm9yZGVyVHlwZT86IE1MUmVtb3RlVGV4dFNldHRpbmcgfCBudWxsO1xyXG4gICAgbGFuZ3VhZ2VMaXN0PzogQXJyYXk8c3RyaW5nPiB8IG51bGw7XHJcbiAgICBlbmFibGVGaW5nZXJwcmludFZlcmlmaWNhdGlvbjogYm9vbGVhbiB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1MUmVtb3RlVGV4dFNldHRpbmcge1xyXG4gICAgT0NSX0xPT1NFX1NDRU5FID0gMSxcclxuICAgIE9DUl9DT01QQUNUX1NDRU5FID0gMixcclxuICAgIE5HT04gPSBcIk5HT05cIixcclxuICAgIEFSQyA9IFwiQVJDXCIsXHJcbiAgICBPVEhFUiA9IDUsXHJcbiAgICBORVdfTElORV9DSEFSQUNURVIgPSA4LFxyXG4gICAgU1BBQ0UgPSA2LFxyXG59XHJcblxyXG5cclxuXHJcbi8vRm9ybSBSZWNvZ25pemVyIEFuYWx5c2VyXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGZvcm1SZWNvZ25pemVyQW5hbHlzZXJSZXEge1xyXG4gICAgZmlsZVBhdGg6IGFueTtcclxuICAgIHN5bmNUeXBlOiBNTEZvcm1SZWNvZ2l0aW9uQ29uZmlnO1xyXG59XHJcbmV4cG9ydCBlbnVtIE1MRm9ybVJlY29naXRpb25Db25maWcge1xyXG4gICAgU1lOQ19UWVBFID0gMSxcclxuICAgIEFTWU5DX1RZUEUgPSAwLFxyXG59XHJcblxyXG4vLyBHRU5FUkFMIENBUkQgQU5BTFlTRVJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgZ2VuZXJhbENhcmREZXRlY3RvclJlcSB7XHJcbiAgICBnY3JDYXB0dXJlQ29uZmlnPzogZ2NyQ2FwdHVyZUNvbmZpZztcclxuICAgIGdjckNhcHR1cmVVSUNvbmZpZz86IGdjckNhcHR1cmVVSUNvbmZpZztcclxuICAgIGNhcHR1cmVUeXBlPzogZ2NyQ2FwdHVyZVR5cGUgfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGdjckNhcHR1cmVDb25maWcge1xyXG4gICAgbGFuZ3VhZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgZW51bSBnY3JDYXB0dXJlVHlwZSB7XHJcbiAgICBDQVBUVVJFX0FDVElWSVRZID0gMCxcclxuICAgIENBUFRVUkVfUEhPVE8gPSAxLFxyXG4gICAgQ0FQVFVSRV9JTUFHRSA9IDIsXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBnY3JDYXB0dXJlVUlDb25maWcge1xyXG4gICAgb3JpZW50YXRpb24/OiBNTEdjckNhcHR1cmVVSUNvbmZpZyB8IG51bGw7XHJcbiAgICB0aXBUZXh0Pzogc3RyaW5nIHwgbnVsbDtcclxuICAgIHRpcFRleHRDb2xvcj86IG51bWJlciB8IG51bGw7XHJcbiAgICBwaG90b0J1dHRvblJlc0lkPzogbnVtYmVyIHwgbnVsbDtcclxuICAgIHNjYW5Cb3hDb3JuZXJDb2xvcj86IG51bWJlciB8IG51bGw7XHJcbiAgICBiYWNrQnV0dG9uUmVkSWQ/OiBudW1iZXIgfCBudWxsO1xyXG4gICAgdG9yY2hSZWRJZD86IG51bWJlciB8IG51bGw7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBnY3JTZXR0aW5nUmVzdWx0cyB7XHJcbiAgICBnY3JDb25maWdMYW5ndWFnZTogU3RyaW5nO1xyXG4gICAgdG9yY2hPblJlc0lkOiBudW1iZXI7XHJcbiAgICB0aXBUZXh0Q29sb3I6IG51bWJlcjtcclxuICAgIHRpcFRleHQ6IFN0cmluZztcclxuICAgIGJhY2tCdXR0b25SZXNJZDogbnVtYmVyO1xyXG4gICAgb3JpZW50YXRpb246IG51bWJlcjtcclxuICAgIHBob3RvQnV0dG9uUmVzSWQ6IG51bWJlcjtcclxuICAgIHNjYW5Cb3hTY3JlZW5SYXRpbzogbnVtYmVyO1xyXG4gICAgc2NhbkJveENvcm5lckNvbG9yOiBudW1iZXI7XHJcbiAgICBzY2FuQm94QXNwZWN0UmF0aW86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTUxHY3JDYXB0dXJlVUlDb25maWcge1xyXG4gICAgT1JJRU5UQVRJT05fQVVUTyA9IDAsXHJcbiAgICBPUklFTlRBVElPTl9MQU5EU0NBUEUgPSAxLFxyXG4gICAgT1JJRU5UQVRJT05fUE9SVFJBSVQgPSAyLFxyXG59XHJcblxyXG4vLyBJRCBDQVJEIEFOQUxZU0VSXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGljclZuRGV0ZWN0b3JSZXEge1xyXG4gICAgY2FwdHVyZVR5cGU6IGljckNhcHR1cmVUeXBlO1xyXG4gICAgZmlsZVBhdGg/OiBhbnkgfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGljckNuRGV0ZWN0b3JSZXEge1xyXG4gICAgY2FwdHVyZVR5cGU6IGljckNhcHR1cmVUeXBlO1xyXG4gICAgZmlsZVBhdGg/OiBhbnkgfCBudWxsO1xyXG4gICAgaXNGcm9udD86IGJvb2xlYW4gfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBpY3JDYXB0dXJlVHlwZSB7XHJcbiAgICBDQVBUVVJFX0NBTUVSQSA9IDAsXHJcbiAgICBDQVBUVVJFX0lNQUdFID0gMSxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBjcmVhdGVJZENhcmRSZXEge1xyXG4gICAgbWxJY3JBbmFseXplclNldHRpbmc/OiBNTEljckFuYWx5emVyU2V0dGluZyB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgbG9jYWxBbmFseXNlclJlcSB7XHJcbiAgICBzZXR0aW5nczogTUxJY3JBbmFseXplclNldHRpbmc7XHJcbiAgICBmaWxlUGF0aD86IGFueSB8IG51bGw7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNTEljckFuYWx5emVyU2V0dGluZyB7XHJcbiAgICBjb3VudHJ5Q29kZTogc3RyaW5nO1xyXG4gICAgaGFzaENvZGU/OiBudW1iZXIgfCBudWxsO1xyXG4gICAgc2lkZVR5cGU/OiBNTEljclNpZGVUeXBlIHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTUxJY3JTaWRlVHlwZSB7XHJcbiAgICBGUk9OVCA9IFwiRlJPTlRcIixcclxuICAgIEJBQ0sgPSBcIkJBQ0tcIixcclxufVxyXG5cclxuXHJcbi8vSW1hZ2UgU3VwZXIgUmVzb2x1dGlvblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBpbWFnZVN1cGVyUmVzb2x1dGlvblJlcSB7XHJcbiAgICBmaWxlUGF0aDogYW55O1xyXG4gICAgaW1nU3VwZXJSZXNvbHV0aW9uU2V0dGluZz86IEltZ1N1cGVyUmVzb2x1dGlvblNldHRpbmcgfCBudWxsO1xyXG4gICAgc3luY1R5cGU/OiBNTEZvcm1SZWNvZ2l0aW9uQ29uZmlnIHwgbnVsbDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEltZ1N1cGVyUmVzb2x1dGlvblNldHRpbmcge1xyXG4gICAgc2NhbGVUeXBlPzogSW1nU3VwZXJSZXNvbHV0aW9uQ29uZmlnO1xyXG59XHJcbmV4cG9ydCBlbnVtIEltZ1N1cGVyUmVzb2x1dGlvbkNvbmZpZyB7XHJcbiAgICBJU1JfU0NBTEVfMVggPSAxLjAsXHJcbiAgICBJU1JfU0NBTEVfM1ggPSAzLjAsXHJcbn1cclxuXHJcbi8vUHJvZHVjdCBWaXNpb24gQW5hbHlzZXJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcHJvZHVjdFJlcSB7XHJcbiAgICBmaWxlUGF0aD86IGFueSB8IG51bGw7XHJcbiAgICBkZXRlY3RUeXBlPzogbnVtYmVyO1xyXG4gICAgbWxQcm9kdWN0U2V0dGluZz86IG1sUHJvZHVjdFNldHRpbmcgfCBudWxsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgbWxQcm9kdWN0U2V0dGluZyB7XHJcbiAgICBsYXJnZXN0TnVtT2ZSZXR1cm5zPzogbnVtYmVyIHwgbnVsbDtcclxuICAgIHByb2R1Y3RTZXRJZD86IHN0cmluZyB8IG51bGw7XHJcbiAgICByZWdpb24/OiBNTFByb2R1Y3RDb25maWcgfCBudWxsO1xyXG59XHJcbmV4cG9ydCBlbnVtIE1MUHJvZHVjdENvbmZpZyB7XHJcbiAgICBSRUdJT05fRFJfQ0hJTkEgPSAxMDAyLFxyXG4gICAgUkVHSU9OX0RSX0FGSUxBID0gMTAwMyxcclxuICAgIFJFR0lPTl9EUl9FVVJPUEUgPSAxMDA0LFxyXG4gICAgUkVHSU9OX0RSX1JVU1NJQSA9IDEwMDUsXHJcbiAgICBSRUdJT05fRFJfR0VSTUFOID0gMTAwNixcclxuICAgIFJFR0lPTl9EUl9TSUFOR0FQT1JFID0gMTAwNyxcclxufVxyXG5cclxuXHJcblxyXG4vL1RleHQgQW5hbHlzZXJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgbG9jYWxJbWFnZVRleHRSZXEge1xyXG4gICAgb2NyVHlwZTogTUxUZXh0Q29uZmlnO1xyXG4gICAgYW5hbHlzZU1vZGU/OiBudW1iZXI7XHJcbiAgICBsb2NhbFRleHRTZXR0aW5nPzogbG9jYWxUZXh0U2V0dGluZyB8IG51bGw7XHJcbiAgICBmaWxlUGF0aDogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGxvY2FsVGV4dFNldHRpbmcge1xyXG4gICAgb2NyTW9kZT86IE1MTG9jYWxUZXh0U2V0dGluZztcclxuICAgIGxhbmd1YWdlPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBNTExvY2FsVGV4dFNldHRpbmcge1xyXG4gICAgT0NSX0RFVEVDVF9NT0RFID0gMSxcclxuICAgIE9DUl9UUkFDS0lOR19NT0RFID0gMixcclxufVxyXG5leHBvcnQgZW51bSBNTFRleHRDb25maWcge1xyXG4gICAgT0NSX0xPQ0FMX1RZUEUgPSAwLFxyXG4gICAgT0NSX1JFTU9URV9UWVBFID0gMSxcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIHJlbW90ZUltYWdlVGV4dFJlcSB7XHJcbiAgICBvY3JUeXBlOiBNTFRleHRDb25maWc7XHJcbiAgICBhbmFseXNlTW9kZT86IG51bWJlcjtcclxuICAgIHJlbW90ZVRleHRTZXR0aW5nPzogcmVtb3RlVGV4dFNldHRpbmc7XHJcbiAgICBmaWxlUGF0aDogYW55O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgcmVtb3RlVGV4dFNldHRpbmcge1xyXG4gICAgdGV4dERlbnNpdHlTY2VuZT86IE1MUmVtb3RlVGV4dFNldHRpbmc7XHJcbiAgICBsYW5ndWFnZUxpc3Q/OiBBcnJheTxzdHJpbmc+O1xyXG4gICAgYm9yZGVyVHlwZT86IE1MUmVtb3RlVGV4dFNldHRpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxCYW5rQ2FyZCB7XHJcbiAgICBudW1iZXI6IHN0cmluZztcclxuICAgIGV4cGlyZTogc3RyaW5nO1xyXG4gICAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICBvcmdhbml6YXRpb246IHN0cmluZztcclxuICAgIG9yaWdpbmFsQml0bWFwOiBhbnk7XHJcbiAgICBudW1iZXJCaXRtYXA6IGFueTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQm9yZGVyIHtcclxuICAgIGJvdHRvbTogbnVtYmVyO1xyXG4gICAgdG9wOiBudW1iZXI7XHJcbiAgICBsZWZ0OiBudW1iZXI7XHJcbiAgICByaWdodDogbnVtYmVyO1xyXG4gICAgZXhhY3RDZW50ZXJYOiBudW1iZXI7XHJcbiAgICBjZW50ZXJZOiBudW1iZXI7XHJcbiAgICBjZW50ZXJYOiBudW1iZXI7XHJcbiAgICBkZXNjcmliZUNvbnRlbnRzOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxEb2N1bWVudCB7XHJcbiAgICBzdHJpbmdWYWx1ZTogc3RyaW5nO1xyXG4gICAgYmxvY2tzPzogQmxvY2tzW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VMaXN0IHtcclxuICAgIGxhbmd1YWdlOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1MVm5JY3JDYXB0dXJlUmVzdWx0IHtcclxuICAgIGJpcnRoZGF5OiBzdHJpbmc7XHJcbiAgICBjYXJkQml0bWFwOiBCaXRtYXA7XHJcbiAgICBpZE51bTogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgc2V4OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxDbkljckNhcHR1cmVSZXN1bHQge1xyXG4gICAgYmlydGhkYXk6IHN0cmluZztcclxuICAgIGNhcmRCaXRtYXA6IEJpdG1hcDtcclxuICAgIGlkTnVtOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBzZXg6IHN0cmluZztcclxuICAgIG5hdGlvbjogc3RyaW5nO1xyXG4gICAgYWRkcmVzczogc3RyaW5nO1xyXG4gICAgYXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgICB2YWxpZERhdGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNTEljckNhcHR1cmVSZXN1bHQge1xyXG4gICAgYmlydGhkYXk6IHN0cmluZztcclxuICAgIGNhcmRCaXRtYXA6IEJpdG1hcDtcclxuICAgIGlkTnVtOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBzZXg6IHN0cmluZztcclxuICAgIG5hdGlvbjogc3RyaW5nO1xyXG4gICAgYWRkcmVzczogc3RyaW5nO1xyXG4gICAgdmFsaWREYXRlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxHY3JDYXB0dXJlUmVzdWx0IHtcclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIGNhcmRCaXRtYXA6IEJpdG1hcDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVjdCB7XHJcbiAgICBib3R0b206IG51bWJlcjtcclxuICAgIHRvcDogbnVtYmVyO1xyXG4gICAgbGVmdDogbnVtYmVyO1xyXG4gICAgcmlnaHQ6IG51bWJlcjtcclxuICAgIGV4YWN0Q2VudGVyWDogbnVtYmVyO1xyXG4gICAgY2VudGVyWTogbnVtYmVyO1xyXG4gICAgY2VudGVyWDogbnVtYmVyO1xyXG4gICAgZGVzY3JpYmVDb250ZW50czogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJpdG1hcCB7XHJcbiAgICBtR2FsbGVyeUNhY2hlZDogYm9vbGVhbjtcclxuICAgIG1IZWlnaHQ6IG51bWJlcjtcclxuICAgIG1OYXRpdmVQdHI6IG51bWJlcjtcclxuICAgIG1XaWR0aDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1MVGV4dCB7XHJcbiAgICBzdHJpbmdWYWx1ZTogc3RyaW5nO1xyXG4gICAgYmxvY2tzPzogQmxvY2tzW107XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBCbG9ja3Mge1xyXG4gICAgY29udGVudHM/OiBDb250ZW50c1tdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29udGVudHMge1xyXG4gICAgc3RyaW5nVmFsdWU6IHN0cmluZztcclxuICAgIGJvcmRlcjogQm9yZGVyO1xyXG4gICAgbGFuZ3VhZ2U6IHN0cmluZztcclxuICAgIGxhbmd1YWdlTGlzdD86IExhbmd1YWdlTGlzdFtdO1xyXG4gICAgdmVydGV4ZXM/OiBWZXJ0ZXhlc1tdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VMaXN0IHtcclxuICAgIGxhbmd1YWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBWZXJ0ZXhlcyB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICBkZXNjcmliZUNvbnRlbnRzOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxGb3JtUmVjb2dpdGlvblJlc3VsdCB7XHJcbiAgICByZXRDb2RlOiBudW1iZXI7XHJcbiAgICB0YWJsZUNvbnRlbnQ6IFRhYmxlQ29udGVudDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJsZUNvbnRlbnQge1xyXG4gICAgdGFibGVDb3VudDogbnVtYmVyO1xyXG4gICAgdGFibGVzPzogVGFibGVzRW50aXR5W10gfCBudWxsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVzRW50aXR5IHtcclxuICAgIHRhYmxlSUQ6IG51bWJlcjtcclxuICAgIGhlYWRlckluZm86IHN0cmluZztcclxuICAgIGZvb3RlckluZm86IHN0cmluZztcclxuICAgIHRhYmxlQm9keT86IFRhYmxlQm9keUVudGl0eVtdIHwgbnVsbDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlQm9keUVudGl0eSB7XHJcbiAgICBzdGFydFJvdzogbnVtYmVyO1xyXG4gICAgZW5kUm93OiBudW1iZXI7XHJcbiAgICBzdGFydENvbDogbnVtYmVyO1xyXG4gICAgZW5kQ29sOiBudW1iZXI7XHJcbiAgICBjZWxsQ29vcmRpbmF0ZTogQ2VsbENvb3JkaW5hdGU7XHJcbiAgICB0ZXh0SW5mbzogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2VsbENvb3JkaW5hdGUge1xyXG4gICAgdG9wTGVmdF94OiBudW1iZXI7XHJcbiAgICB0b3BMZWZ0X3k6IG51bWJlcjtcclxuICAgIHRvcFJpZ2h0X3g6IG51bWJlcjtcclxuICAgIHRvcFJpZ2h0X3k6IG51bWJlcjtcclxuICAgIGJvdHRvbUxlZnRfeDogbnVtYmVyO1xyXG4gICAgYm90dG9tTGVmdF95OiBudW1iZXI7XHJcbiAgICBib3R0b21SaWdodF94OiBudW1iZXI7XHJcbiAgICBib3R0b21SaWdodF95OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENvbG9ycyB7XHJcbiAgICBSRUQgPSAtNjU1MzYsXHJcbiAgICBES0dSQVkgPSAtMTIzMDMyOTIsXHJcbiAgICBHUkFZID0gLTc4MjkzNjgsXHJcbiAgICBXSElURSA9IC0xLFxyXG4gICAgQkxVRSA9IC0xNjc3Njk2MSxcclxuICAgIEJMQUNLID0gLTE2Nzc3MjE2LFxyXG4gICAgTFRHUkFZID0gLTMzNTU0NDQsXHJcbiAgICBNQUdFTlRBID0gLTY1MjgxLFxyXG4gICAgWUVMTE9XID0gLTI1NixcclxuICAgIENZQU4gPSAtMTY3MTE2ODEsXHJcbiAgICBHUkVFTiA9IC0xNjcxMTkzNixcclxuICAgIFRSQU5TUEFSRU5UID0gMCxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ29yZG92YUVycm9ycyB7XHJcbiAgICBVTktOT1dOID0gLTEsXHJcbiAgICBTVUNDRVNTID0gMCxcclxuICAgIERJU0NBUkRFRCA9IDEsXHJcbiAgICBJTk5FUiA9IDIsXHJcbiAgICBJTkFDVElWRSA9IDMsXHJcbiAgICBOT1RfU1VQUE9SVEVEID0gNCxcclxuICAgIElMTEVHQUxfUEFSQU1FVEVSID0gNSxcclxuICAgIE9WRVJEVUUgPSA2LFxyXG4gICAgTk9fRk9VTkQgPSA3LFxyXG4gICAgRFVQTElDQVRFX0ZPVU5EID0gOCxcclxuICAgIE5PX1BFUk1JU1NJT04gPSA5LFxyXG4gICAgSU5TVUZGSUNJRU5UX1JFU09VUkNFID0gMTAsXHJcbiAgICBBTkFMWVNJU19GQUlMVVJFID0gMTEsXHJcbiAgICBJTlRFUlJVUFRFRCA9IDEyLFxyXG4gICAgRVhDRUVEX1JBTkdFID0gMTMsXHJcbiAgICBEQVRBX01JU1NJTkcgPSAxNCxcclxuICAgIEFVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEID0gMTUsXHJcbiAgICBURkxJVEVfTk9UX0NPTVBBVElCTEUgPSAxNixcclxuICAgIElOU1VGRklDSUVOVF9TUEFDRSA9IDE3LFxyXG4gICAgSEFTSF9NSVNTID0gMTgsXHJcbiAgICBUT0tFTl9JTlZBTElEID0gMTksXHJcbiAgICBTRVJWSUNFX0ZBSUxVUkUgPSAyMCxcclxuICAgIEFOQUxZU0lTX05VTEwgPSAyMSxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBlbnVtIFJlZ2lvbiB7XHJcblJFR0lPTl9EUl9VTktOT1dOID0gMTAwMSxcclxuUkVHSU9OX0RSX0NISU5BID0gMTAwMixcclxuUkVHSU9OX0RSX1JVU1NJQSA9IDEwMDUsXHJcblJFR0lPTl9EUl9HRVJNQU4gPSAxMDA2LFxyXG5SRUdJT05fRFJfU0lOR0FQT1JFID0gMTAwN1xyXG59XHJcbiJdfQ==