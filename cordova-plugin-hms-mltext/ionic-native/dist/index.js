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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from "@ionic-native/core";
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
}(IonicNativePlugin));
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
}(IonicNativePlugin));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBaUJBLE9BQU8sc0VBS04sTUFBTSxvQkFBb0IsQ0FBQzs7SUFTUyxtQ0FBaUI7Ozs7SUEyQmxEOzs7T0FHRztJQUNILG9DQUFVO0lBSVY7OztPQUdHO0lBQ0gsaUNBQU87SUFJUDs7O09BR0c7SUFDSCw2Q0FBbUI7SUFJbkI7Ozs7T0FJRztJQUNILG9DQUFVLGFBQUMsYUFBNEI7SUFJdkM7Ozs7T0FJRztJQUNILHNDQUFZLGFBQUMsR0FBUTtJQUlyQjs7OztPQUlHO0lBQ0gsc0NBQVksYUFBQyxHQUFRO0lBSXJCOzs7T0FHRztJQUNILHNDQUFZO0lBSVo7OztPQUdHO0lBQ0gsdUNBQWE7MEJBeEZiLCtDQUFrQjs7Ozs7OzBCQUVsQiw2Q0FBZ0I7Ozs7OzswQkFFaEIseUNBQVk7Ozs7OzswQkFFWixnREFBbUI7Ozs7OzswQkFFbkIsK0NBQWtCOzs7Ozs7MEJBRWxCLGlEQUFvQjs7Ozs7OzBCQUVwQiw4Q0FBaUI7Ozs7OzswQkFFakIscURBQXdCOzs7Ozs7MEJBRXhCLG1EQUFzQjs7Ozs7OzBCQUV0Qiw0Q0FBZTs7Ozs7OzBCQUVmLDJDQUFjOzs7Ozs7MEJBRWQsbUNBQU07Ozs7Ozs7Ozs7MEJBdkRWO0VBK0JxQyxpQkFBaUI7U0FBekMsZUFBZTs7SUFxR0csNkJBQWlCOzs7O0lBNkI1Qzs7OztPQUlHO0lBQ0gscUNBQWlCLGFBQ2Isc0JBQThEO0lBS2xFOzs7T0FHRztJQUNILG9DQUFnQjtJQUloQjs7O09BR0c7SUFDSCx1Q0FBbUI7SUFJbkI7Ozs7T0FJRztJQUNILHlDQUFxQixhQUNqQix3QkFBa0Q7SUFLdEQ7OztPQUdHO0lBQ0gsNkNBQXlCO0lBSXpCOzs7T0FHRztJQUNILDhDQUEwQjtJQUkxQjs7O09BR0c7SUFDSCxtREFB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QTtJQUN4Qiw0REFBc0IsQ0FBQTtJQUN0Qiw4REFBdUIsQ0FBQTtJQUN2Qiw4REFBdUIsQ0FBQTtJQUN2QixvRUFBMEIsQ0FBQTtBQUMxQixDQUFDLEVBTlcsTUFBTSxLQUFOLE1BQU0sUUFNakIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIENvcHlyaWdodCAyMDIzLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxuICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgICBQbHVnaW4sXG4gICAgQ29yZG92YSxcbiAgICBDb3Jkb3ZhUHJvcGVydHksIFxuICAgIElvbmljTmF0aXZlUGx1Z2luLFxufSBmcm9tIFwiQGlvbmljLW5hdGl2ZS9jb3JlXCI7XG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6IFwiSE1TTUxUZXh0UGx1Z2luXCIsXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1tbHRleHRcIiwgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gICAgcGx1Z2luUmVmOiBcIkhNU01MVGV4dFBsdWdpblwiLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLCAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TTUxUZXh0UGx1Z2luIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MTG9jYWxUZXh0U2V0dGluZyA9IE1MTG9jYWxUZXh0U2V0dGluZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBpY3JWbkNhcHR1cmVUeXBlID0gaWNyQ2FwdHVyZVR5cGU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxUZXh0Q29uZmlnID0gTUxUZXh0Q29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MUmVtb3RlVGV4dFNldHRpbmcgPSBNTFJlbW90ZVRleHRTZXR0aW5nO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MQmNyQ2FwdHVyZUNvbmZpZyA9IE1MQmNyQ2FwdHVyZUNvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEdjckNhcHR1cmVVSUNvbmZpZyA9IE1MR2NyQ2FwdHVyZVVJQ29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MQmNyUmVzdWx0Q29uZmlnID0gTUxCY3JSZXN1bHRDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgSW1nU3VwZXJSZXNvbHV0aW9uQ29uZmlnID0gSW1nU3VwZXJSZXNvbHV0aW9uQ29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MRm9ybVJlY29naXRpb25Db25maWcgPSBNTEZvcm1SZWNvZ2l0aW9uQ29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MUHJvZHVjdENvbmZpZyA9IE1MUHJvZHVjdENvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBnY3JDYXB0dXJlVHlwZSA9IGdjckNhcHR1cmVUeXBlO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIENvbG9ycyA9IENvbG9ycztcblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogTW9uaXRvcnMgcGhvdG9ncmFwaGluZy5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBwaG90b2dyYXBoKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBDbG9zZSBsZW5zIGVuZ2luZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBkZXN0cm95KCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBPYnRhaW5zIHRoZSBzaXplIG9mIHRoZSBwcmV2aWV3IGltYWdlIG9mIGEgY2FtZXJhLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGdldERpc3BsYXlEaW1lbnNpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIEFuIGFwcCBpbmZvcm1hdGlvbiBjbGFzcyB1c2VkIHRvIHN0b3JlIGJhc2ljIGluZm9ybWF0aW9uIGFib3V0IGFwcHMgd2l0aCB0aGUgSE1TIENvcmUgTUwgU0RLIGludGVncmF0ZWQgYW5kIGNvbXBsZXRlIHRoZSBpbml0aWFsaXphdGlvbiBvZiBNTCBUZXh0IEtpdC4gV2hlbiB1c2luZyBjbG91ZCBzZXJ2aWNlcyBvZiB0aGUgTUwgVGV4dCBLaXQsIHlvdSBuZWVkIHRvIHNldCB0aGUgYXBpS2V5IG9mIHlvdXIgYXBwLlxuICAgICAqIEBwYXJhbSAge2FwcFNldHRpbmdSZXF9IGFwcFNldHRpbmdSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGFwcFNldHRpbmcoYXBwU2V0dGluZ1JlcTogYXBwU2V0dGluZ1JlcSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gY29sbGVjdCBzdGF0aXN0aWNzIG9uIHRoZSBjdXJyZW50IGFwcC5cbiAgICAgKiBAcGFyYW0ge2FueX0gYW55XG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgc2V0U3RhdGlzdGljKGFueTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0byBjb2xsZWN0IHN0YXRpc3RpY3Mgb24gdGhlIGN1cnJlbnQgYXBwLlxuICAgICAqKiBAcGFyYW0ge2FueX0gYW55XG4gICAgICogIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGdldFN0YXRpc3RpYyhhbnk6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIHNlcnZpY2UgZW5hYmxlIGxvZ2dlciBzZXJ2aWNlLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGVuYWJsZUxvZ2dlcigpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBzZXJ2aWNlIGRpc2FibGUgbG9nZ2VyIHNlcnZpY2UuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogXCJITVNNTFRleHRcIixcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLW1sdGV4dFwiLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgICBwbHVnaW5SZWY6IFwiSE1TTUxUZXh0XCIsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNNTFRleHQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgaWNyVm5DYXB0dXJlVHlwZSA9IGljckNhcHR1cmVUeXBlO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIGdjckNhcHR1cmVUeXBlID0gZ2NyQ2FwdHVyZVR5cGU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxMb2NhbFRleHRTZXR0aW5nID0gTUxMb2NhbFRleHRTZXR0aW5nO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MVGV4dENvbmZpZyA9IE1MVGV4dENvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFJlbW90ZVRleHRTZXR0aW5nID0gTUxSZW1vdGVUZXh0U2V0dGluZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEJjckNhcHR1cmVDb25maWcgPSBNTEJjckNhcHR1cmVDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxHY3JDYXB0dXJlVUlDb25maWcgPSBNTEdjckNhcHR1cmVVSUNvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEJjclJlc3VsdENvbmZpZyA9IE1MQmNyUmVzdWx0Q29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIEltZ1N1cGVyUmVzb2x1dGlvbkNvbmZpZyA9IEltZ1N1cGVyUmVzb2x1dGlvbkNvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEZvcm1SZWNvZ2l0aW9uQ29uZmlnID0gTUxGb3JtUmVjb2dpdGlvbkNvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFByb2R1Y3RDb25maWcgPSBNTFByb2R1Y3RDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgQ29sb3JzID0gQ29sb3JzO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIFJlY01vZGUgPSBSZWNNb2RlO1xuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBzdGFydCB0aGUgVGV4dCBhbmFseXplci5cbiAgICAgKiBAcGFyYW0gIHtsb2NhbEltYWdlVGV4dFJlcXxyZW1vdGVJbWFnZVRleHRSZXF9IEltYWdlVGV4dEFuYWx5c2VySW5wdXQgUmVwZXJlc2VudHMgdGhlIG5lY2Vzc2FyeSBwYXJhbWV0ZXJzIHRvIGNvbnZlcnQgaW1hZ2VzIHRvIHRleHQgZm9ybWF0LlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgPFRleHRBbmFseXNlcj5cbiAgICAgKi9cbiAgICBpbWFnZVRleHRBbmFseXNlcihcbiAgICAgICAgSW1hZ2VUZXh0QW5hbHlzZXJJbnB1dDogbG9jYWxJbWFnZVRleHRSZXEgfCByZW1vdGVJbWFnZVRleHRSZXFcbiAgICApOiBQcm9taXNlPE1MVGV4dD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCB0aGUgVGV4dCBhbmFseXplci5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBzdG9wVGV4dEFuYWx5c2VyKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBnaXZlcyBUZXh0IEFuYWx5c2VyIGluZm9ybWF0aW9uLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGdldFRleHRBbmFseXNlckluZm8oKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHByb3ZpZGVzIGEgZG9jdW1lbnQgcmVjb2duaXRpb24gY29tcG9uZW50IHRoYXQgcmVjb2duaXplcyB0ZXh0IGZyb20gaW1hZ2VzIG9mIGRvY3VtZW50cy5cbiAgICAgKiBAcGFyYW0gIHtkb2N1bWVudEltYWdlQW5hbHlzZXJSZXF9IGRvY3VtZW50SW1hZ2VBbmFseXNlclJlcSBSZXBlcmVzZW50cyB0aGUgbmVjZXNzYXJ5IHBhcmFtZXRlciB0byBjb252ZXJ0IGRvY3VtZW50IGltYWdlcyB0byB0ZXh0IGZvcm1hdC5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPERvY3VtZW50QW5hbHlzZXI+XG4gICAgICovXG4gICAgZG9jdW1lbnRJbWFnZUFuYWx5c2VyKFxuICAgICAgICBkb2N1bWVudEltYWdlQW5hbHlzZXJSZXE6IGRvY3VtZW50SW1hZ2VBbmFseXNlclJlcVxuICAgICk6IFByb21pc2U8TUxEb2N1bWVudD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCB0aGUgRG9jdW1lbnQgYW5hbHl6ZXIuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgc3RvcERvY3VtZW50SW1hZ2VBbmFseXNlcigpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgY2xvc2UgdGhlIERvY3VtZW50IGFuYWx5emVyLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGNsb3NlRG9jdW1lbnRJbWFnZUFuYWx5c2VyKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBEb2N1bWVudCBhbmFseXplciBzZXR0aW5nLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGdldERvY3VtZW50SW1hZ2VBbmFseXNlclNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIEltYWdlIGFuYWx5emVyIHNldHRpbmcuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZ2V0VGV4dEFuYWx5c2VyU2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgR0NSIHNldHRpbmcuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZ2V0R0NSU2V0dGluZygpOiBQcm9taXNlPGdjclNldHRpbmdSZXN1bHRzPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wIHRoZSBGb3JtIFJlY29nbml0aW9uIEFuYWx5emVyLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHN0b3BGb3JtUmVjb2duaXRpb25BbmFseXNlcigpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBiYW5rIGNhcmQgcmVjb2duaXRpb24gc2VydmljZSByZWNvZ25pemVzIGJhbmsgY2FyZHMgaW4gY2FtZXJhIHN0cmVhbXMgd2l0aGluIGFuZ2xlIG9mZnNldCBvZiAxNSBkZWdyZWVzIGFuZCBleHRyYWN0cyBrZXkgaW5mb3JtYXRpb24gc3VjaCBhcyBjYXJkIG51bWJlciBhbmQgdmFsaWRpdHkgcGVyaW9kLlxuICAgICAqIEBwYXJhbSAge2JhbmtDYXJkU0RLRGV0ZWN0b3JSZXF8YmFua0NhcmRQbHVnaW5EZXRlY3RvclJlcX0gYmFua0NhcmREZXRlY3RlcklucHV0IFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgYmFuayBjYXJkIHJlY29nbml0aW9uLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8QmFua0NhcmRBbmFseXNlcj4gfCBQcm9taXNlPEJhbmtDYXJkQW5hbHlzZXI+XG4gICAgICovXG4gICAgYmFua0NhcmREZXRlY3RvcihcbiAgICAgICAgYmFua0NhcmREZXRlY3RlcklucHV0OlxuICAgICAgICAgICAgfCBiYW5rQ2FyZFNES0RldGVjdG9yUmVxXG4gICAgICAgICAgICB8IGJhbmtDYXJkUGx1Z2luRGV0ZWN0b3JSZXFcbiAgICApOiBQcm9taXNlPE1MQmFua0NhcmQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3AgYmFua2NhcmQgcmVjb2duaXRpb24gc2VydmljZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBzdG9wQmFua0NhcmREZXRlY3RvcigpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0UmVzdWx0VHlwZUJjcihtTEJjckNhcHR1cmVDb25maWc6IG1MQmNyQ2FwdHVyZUNvbmZpZyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRSZWNNb2RlQmNyKG1MQmNyQ2FwdHVyZUNvbmZpZzogbUxCY3JDYXB0dXJlQ29uZmlnKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIEJDUiBzZXR0aW5nLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGdldEJhbmtDYXJkRGV0ZWN0b3JTZXR0aW5nKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGUgZ2VuZXJhbCBjYXJkIHJlY29nbml0aW9uIHNlcnZpY2UgcHJvdmlkZXMgYSB1bml2ZXJzYWwgZGV2ZWxvcG1lbnQgZnJhbWV3b3JrIGJhc2VkIG9uIHRoZSB0ZXh0IHJlY29nbml0aW9uIHRlY2hub2xvZ3kuXG4gICAgICogQHBhcmFtICB7Z2VuZXJhbENhcmREZXRlY3RvclJlcX0gZ2VuZXJhbENhcmREZXRlY3RvclJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIGdlbmVyYWwgY2FyZCByZWNvZ25pdGlvbiBwbHVnLWluLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8R2VuZXJhbENhcmRBbmFseXNlcj5cbiAgICAgKi9cbiAgICBnZW5lcmFsQ2FyZERldGVjdG9yKFxuICAgICAgICBnZW5lcmFsQ2FyZERldGVjdG9yUmVxOiBnZW5lcmFsQ2FyZERldGVjdG9yUmVxXG4gICAgKTogUHJvbWlzZTxNTEdjckNhcHR1cmVSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoZSBnZW5lcmFsIFZpZXRuYW0gaWQgY2FyZCAgcmVjb2duaXRpb24gc2VydmljZSBwcm92aWRlcyBhIHVuaXZlcnNhbCBkZXZlbG9wbWVudCBmcmFtZXdvcmsgYmFzZWQgb24gdGhlIHRleHQgcmVjb2duaXRpb24gdGVjaG5vbG9neS5cbiAgICAgKiBAcGFyYW0gIHtpY3JWbkRldGVjdG9yUmVxfSBpY3JWbkRldGVjdG9yUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgZ2VuZXJhbCBjYXJkIHJlY29nbml0aW9uIHBsdWctaW4uXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxNTFZuSWNyQ2FwdHVyZVJlc3VsdD5cbiAgICAgKi9cbiAgICBpY3JWbkNhcmREZXRlY3RvcihcbiAgICAgICAgaWNyVm5EZXRlY3RvclJlcTogaWNyVm5EZXRlY3RvclJlcVxuICAgICk6IFByb21pc2U8TUxWbkljckNhcHR1cmVSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoZSBmb3JtIHJlY29nbml0aW9uIHNlcnZpY2UgdXNlcyBBSSB0ZWNobm9sb2dpZXMgdG8gcmVjb2duaXplIGFuZCByZXR1cm4gZm9ybSBzdHJ1Y3R1cmUgaW5mb3JtYXRpb24gKGluY2x1ZGluZyByb3dzLCBjb2x1bW5zLCBhbmQgY29vcmRpbmF0ZXMgb2YgY2VsbHMpIGFuZCBmb3JtIHRleHQgaW4gQ2hpbmVzZSBhbmQgRW5nbGlzaCAoaW5jbHVkaW5nIHB1bmN0dWF0aW9uKSBmcm9tIGlucHV0IGltYWdlcy5cbiAgICAgKiBAcGFyYW0gIHtmb3JtUmVjb2duaXplckFuYWx5c2VyUmVxfSBmb3JtUmVjb2duaXplckFuYWx5c2VyUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgZ2VuZXJhbCBjYXJkIHJlY29nbml0aW9uIHBsdWctaW4uXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxHZW5lcmFsQ2FyZEFuYWx5c2VyPlxuICAgICAqL1xuICAgIGZvcm1SZWNvZ25pdGlvbkFuYWx5c2VyKFxuICAgICAgICBmb3JtUmVjb2duaXplckFuYWx5c2VyUmVxOiBmb3JtUmVjb2duaXplckFuYWx5c2VyUmVxXG4gICAgKTogUHJvbWlzZTxNTEdjckNhcHR1cmVSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGljckxvY2FsQW5hbHlzZXIoXG4gICAgICAgIGxvY2FsQW5hbHlzZXJSZXE6IGxvY2FsQW5hbHlzZXJSZXFcbiAgICApOiBQcm9taXNlPE1MSWNyQ2FwdHVyZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBpY3JMb2NhbEFuYWx5c2VyQ3JlYXRlSWRDYXJkKFxuICAgICAgICBjcmVhdGVJZENhcmRSZXE6IGNyZWF0ZUlkQ2FyZFJlcVxuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGljckxvY2FsQW5hbHlzZXJTdG9wKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldGljckNuQ2FyZEluc3RhbmNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGljckNuQ2FyZENyZWF0ZSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0aWNyVm5DYXJkSW5zdGFuY2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGljclZuQ2FyZENyZWF0ZSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0SWNyVm5DYXB0dXJlKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHN0YXJ0Q3VzdG9taXplZFZpZXcodXNlclByb3BzOiBDdXN0b21WaWV3TW9kZVJlcXVlc3QpOiBQcm9taXNlPE1MQmFua0NhcmQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHN3aXRjaExpZ2h0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0TGlnaHRTdGF0dXMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldFVzZXJSZWdpb24ocmVnaW9uOiBSZWdpb24pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0Q291bnRyeUNvZGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21WaWV3TW9kZVJlcXVlc3Qge1xuICAgIGlzVGl0bGVBdmFpbGFibGU6IGJvb2xlYW47XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBoZWlnaHRGYWN0b3I6IG51bWJlcjtcbiAgICB3aWR0aEZhY3RvcjogbnVtYmVyO1xuICAgIGlzRmxhc2hBdmFpbGFibGU6IGJvb2xlYW47XG4gICAgcmVzdWx0VHlwZTogTUxCY3JSZXN1bHRDb25maWc7XG4gICAgcmVjTW9kZTogUmVjTW9kZTtcbiB9XG5cbi8vIEFQSSBLRVlcblxuZXhwb3J0IGludGVyZmFjZSBjb25maWdSZXEge1xuICAgIGFwaUtleTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIGFwcFNldHRpbmdSZXEge1xuICAgIGFwaUtleT86IHN0cmluZyB8IG51bGw7XG4gICAgYXBwbGljYXRpb25JZD86IHN0cmluZyB8IG51bGw7XG4gICAgY2VydEZpbmdlcnByaW50Pzogc3RyaW5nIHwgbnVsbDtcbn0gXG5cblxuLy8gU0RLIEJBTksgQ0FSRCBBTkFMWVNFUlxuXG5leHBvcnQgaW50ZXJmYWNlIGJhbmtDYXJkU0RLRGV0ZWN0b3JSZXEge1xuICAgIGZpbGVQYXRoOiBhbnk7XG4gICAgZGV0ZWN0VHlwZTogMDtcbiAgICBtTEJjckFuYWx5emVyU2V0dGluZz86IE1MQmNyQW5hbHl6ZXJTZXR0aW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTEJjckFuYWx5emVyU2V0dGluZyB7XG4gICAgbGFuZ1R5cGU/OiBzdHJpbmcgfCBudWxsO1xuICAgIHJlc3VsdFR5cGU/OiBNTEJjclJlc3VsdENvbmZpZyB8IG51bGw7XG59XG5cbi8vIFBMVUdJTiBCQU5LIENBUkQgQU5BTFlTRVJcblxuZXhwb3J0IGludGVyZmFjZSBiYW5rQ2FyZFBsdWdpbkRldGVjdG9yUmVxIHtcbiAgICBkZXRlY3RUeXBlOiAxO1xuICAgIG1MQmNyQ2FwdHVyZUNvbmZpZz86IG1MQmNyQ2FwdHVyZUNvbmZpZyB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgbUxCY3JDYXB0dXJlQ29uZmlnIHtcbiAgICBvcmllbnRhdGlvbj86IE1MQmNyQ2FwdHVyZUNvbmZpZyB8IG51bGw7XG4gICAgcmVzdWx0VHlwZT86IE1MQmNyUmVzdWx0Q29uZmlnIHwgbnVsbDtcbiAgICByZWNNb2RlPzogUmVjTW9kZSB8IG51bGw7XG59XG5cbmV4cG9ydCBlbnVtIFJlY01vZGUge1xuICAgIFdFQUtfTU9ERSA9IDAsXG4gICAgU1RSSUNUX01PREUgPSAxLFxufVxuXG5leHBvcnQgZW51bSBNTEJjckNhcHR1cmVDb25maWcge1xuICAgIEVSUk9SX0NPREVfSU5JVF9DQU1FUkFfRkFJTEVEID0gMTAxMDEsXG4gICAgUkVTVUxUX05VTV9PTkxZID0gMCxcbiAgICBPUklFTlRBVElPTl9BVVRPID0gMCxcbiAgICBXRUFLX01PREUgPSAwLFxuICAgIE9SSUVOVEFUSU9OX0xBTkRTQ0FQRSA9IDEsXG4gICAgT1JJRU5UQVRJT05fUE9SVFJBSVQgPSAyLFxuICAgIFJFU1VMVF9BTEwgPSAyLFxuICAgIFJFU1VMVF9TSU1QTEUgPSAxLFxuICAgIFNUUklDVF9NT0RFID0gMSxcbn1cbmV4cG9ydCBlbnVtIE1MQmNyUmVzdWx0Q29uZmlnIHtcbiAgICBSRVNVTFRfTlVNX09OTFkgPSAwLFxuICAgIFJFU1VMVF9TSU1QTEUgPSAxLFxuICAgIFJFU1VMVF9BTEwgPSAyLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MQmNyQ2FwdHVyZVJlc3VsdCB7XG4gICAgZXJyb3JDb2RlPzogTUxCY3JDYXB0dXJlRXJyb3JDb2RlIHwgbnVsbDtcbiAgICBleHBpcmU/OiBTdHJpbmcgfCBudWxsO1xuICAgIGlzc3Vlcj86IFN0cmluZyB8IG51bGw7XG4gICAgbnVtYmVyPzogU3RyaW5nIHwgbnVsbDtcbiAgICBudW1iZXJCaXRtYXA/OiBhbnk7XG4gICAgb3JnYW5pemF0aW9uPzogU3RyaW5nIHwgbnVsbDtcbiAgICByaWdpbmFsQml0bWFwPzogYW55O1xuICAgIHR5cGU/OiBTdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgZW51bSBNTEJjckNhcHR1cmVFcnJvckNvZGUge1xuICAgIEVSUk9SX0NPREVfSU5JVF9DQU1FUkFfRkFJTEVEID0gMTAxMDEsXG59XG5cblxuLy9Eb2N1bWVudCBBbmFseXNlclxuXG5leHBvcnQgaW50ZXJmYWNlIGRvY3VtZW50SW1hZ2VBbmFseXNlclJlcSB7XG4gICAgZG9jdW1lbnRTZXR0aW5nPzogRG9jdW1lbnRTZXR0aW5nIHwgbnVsbDtcbiAgICBmaWxlUGF0aDogYW55O1xufVxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudFNldHRpbmcge1xuICAgIGJvcmRlclR5cGU/OiBNTFJlbW90ZVRleHRTZXR0aW5nIHwgbnVsbDtcbiAgICBsYW5ndWFnZUxpc3Q/OiBBcnJheTxzdHJpbmc+IHwgbnVsbDtcbiAgICBlbmFibGVGaW5nZXJwcmludFZlcmlmaWNhdGlvbjogYm9vbGVhbiB8IG51bGw7XG59XG5cbmV4cG9ydCBlbnVtIE1MUmVtb3RlVGV4dFNldHRpbmcge1xuICAgIE9DUl9MT09TRV9TQ0VORSA9IDEsXG4gICAgT0NSX0NPTVBBQ1RfU0NFTkUgPSAyLFxuICAgIE5HT04gPSBcIk5HT05cIixcbiAgICBBUkMgPSBcIkFSQ1wiLFxuICAgIE9USEVSID0gNSxcbiAgICBORVdfTElORV9DSEFSQUNURVIgPSA4LFxuICAgIFNQQUNFID0gNixcbn1cblxuXG5cbi8vRm9ybSBSZWNvZ25pemVyIEFuYWx5c2VyXG5cbmV4cG9ydCBpbnRlcmZhY2UgZm9ybVJlY29nbml6ZXJBbmFseXNlclJlcSB7XG4gICAgZmlsZVBhdGg6IGFueTtcbiAgICBzeW5jVHlwZTogTUxGb3JtUmVjb2dpdGlvbkNvbmZpZztcbn1cbmV4cG9ydCBlbnVtIE1MRm9ybVJlY29naXRpb25Db25maWcge1xuICAgIFNZTkNfVFlQRSA9IDEsXG4gICAgQVNZTkNfVFlQRSA9IDAsXG59XG5cbi8vIEdFTkVSQUwgQ0FSRCBBTkFMWVNFUlxuXG5leHBvcnQgaW50ZXJmYWNlIGdlbmVyYWxDYXJkRGV0ZWN0b3JSZXEge1xuICAgIGdjckNhcHR1cmVDb25maWc/OiBnY3JDYXB0dXJlQ29uZmlnO1xuICAgIGdjckNhcHR1cmVVSUNvbmZpZz86IGdjckNhcHR1cmVVSUNvbmZpZztcbiAgICBjYXB0dXJlVHlwZT86IGdjckNhcHR1cmVUeXBlIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBnY3JDYXB0dXJlQ29uZmlnIHtcbiAgICBsYW5ndWFnZTogc3RyaW5nO1xufVxuZXhwb3J0IGVudW0gZ2NyQ2FwdHVyZVR5cGUge1xuICAgIENBUFRVUkVfQUNUSVZJVFkgPSAwLFxuICAgIENBUFRVUkVfUEhPVE8gPSAxLFxuICAgIENBUFRVUkVfSU1BR0UgPSAyLFxufVxuZXhwb3J0IGludGVyZmFjZSBnY3JDYXB0dXJlVUlDb25maWcge1xuICAgIG9yaWVudGF0aW9uPzogTUxHY3JDYXB0dXJlVUlDb25maWcgfCBudWxsO1xuICAgIHRpcFRleHQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIHRpcFRleHRDb2xvcj86IG51bWJlciB8IG51bGw7XG4gICAgcGhvdG9CdXR0b25SZXNJZD86IG51bWJlciB8IG51bGw7XG4gICAgc2NhbkJveENvcm5lckNvbG9yPzogbnVtYmVyIHwgbnVsbDtcbiAgICBiYWNrQnV0dG9uUmVkSWQ/OiBudW1iZXIgfCBudWxsO1xuICAgIHRvcmNoUmVkSWQ/OiBudW1iZXIgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBnY3JTZXR0aW5nUmVzdWx0cyB7XG4gICAgZ2NyQ29uZmlnTGFuZ3VhZ2U6IFN0cmluZztcbiAgICB0b3JjaE9uUmVzSWQ6IG51bWJlcjtcbiAgICB0aXBUZXh0Q29sb3I6IG51bWJlcjtcbiAgICB0aXBUZXh0OiBTdHJpbmc7XG4gICAgYmFja0J1dHRvblJlc0lkOiBudW1iZXI7XG4gICAgb3JpZW50YXRpb246IG51bWJlcjtcbiAgICBwaG90b0J1dHRvblJlc0lkOiBudW1iZXI7XG4gICAgc2NhbkJveFNjcmVlblJhdGlvOiBudW1iZXI7XG4gICAgc2NhbkJveENvcm5lckNvbG9yOiBudW1iZXI7XG4gICAgc2NhbkJveEFzcGVjdFJhdGlvOiBudW1iZXI7XG59XG5cbmV4cG9ydCBlbnVtIE1MR2NyQ2FwdHVyZVVJQ29uZmlnIHtcbiAgICBPUklFTlRBVElPTl9BVVRPID0gMCxcbiAgICBPUklFTlRBVElPTl9MQU5EU0NBUEUgPSAxLFxuICAgIE9SSUVOVEFUSU9OX1BPUlRSQUlUID0gMixcbn1cblxuLy8gSUQgQ0FSRCBBTkFMWVNFUlxuXG5leHBvcnQgaW50ZXJmYWNlIGljclZuRGV0ZWN0b3JSZXEge1xuICAgIGNhcHR1cmVUeXBlOiBpY3JDYXB0dXJlVHlwZTtcbiAgICBmaWxlUGF0aD86IGFueSB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgaWNyQ25EZXRlY3RvclJlcSB7XG4gICAgY2FwdHVyZVR5cGU6IGljckNhcHR1cmVUeXBlO1xuICAgIGZpbGVQYXRoPzogYW55IHwgbnVsbDtcbiAgICBpc0Zyb250PzogYm9vbGVhbiB8IG51bGw7XG59XG5cbmV4cG9ydCBlbnVtIGljckNhcHR1cmVUeXBlIHtcbiAgICBDQVBUVVJFX0NBTUVSQSA9IDAsXG4gICAgQ0FQVFVSRV9JTUFHRSA9IDEsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgY3JlYXRlSWRDYXJkUmVxIHtcbiAgICBtbEljckFuYWx5emVyU2V0dGluZz86IE1MSWNyQW5hbHl6ZXJTZXR0aW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBsb2NhbEFuYWx5c2VyUmVxIHtcbiAgICBzZXR0aW5nczogTUxJY3JBbmFseXplclNldHRpbmc7XG4gICAgZmlsZVBhdGg/OiBhbnkgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBNTEljckFuYWx5emVyU2V0dGluZyB7XG4gICAgY291bnRyeUNvZGU6IHN0cmluZztcbiAgICBoYXNoQ29kZT86IG51bWJlciB8IG51bGw7XG4gICAgc2lkZVR5cGU/OiBNTEljclNpZGVUeXBlIHwgbnVsbDtcbn1cblxuZXhwb3J0IGVudW0gTUxJY3JTaWRlVHlwZSB7XG4gICAgRlJPTlQgPSBcIkZST05UXCIsXG4gICAgQkFDSyA9IFwiQkFDS1wiLFxufVxuXG5cbi8vSW1hZ2UgU3VwZXIgUmVzb2x1dGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIGltYWdlU3VwZXJSZXNvbHV0aW9uUmVxIHtcbiAgICBmaWxlUGF0aDogYW55O1xuICAgIGltZ1N1cGVyUmVzb2x1dGlvblNldHRpbmc/OiBJbWdTdXBlclJlc29sdXRpb25TZXR0aW5nIHwgbnVsbDtcbiAgICBzeW5jVHlwZT86IE1MRm9ybVJlY29naXRpb25Db25maWcgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBJbWdTdXBlclJlc29sdXRpb25TZXR0aW5nIHtcbiAgICBzY2FsZVR5cGU/OiBJbWdTdXBlclJlc29sdXRpb25Db25maWc7XG59XG5leHBvcnQgZW51bSBJbWdTdXBlclJlc29sdXRpb25Db25maWcge1xuICAgIElTUl9TQ0FMRV8xWCA9IDEuMCxcbiAgICBJU1JfU0NBTEVfM1ggPSAzLjAsXG59XG5cbi8vUHJvZHVjdCBWaXNpb24gQW5hbHlzZXJcblxuZXhwb3J0IGludGVyZmFjZSBwcm9kdWN0UmVxIHtcbiAgICBmaWxlUGF0aD86IGFueSB8IG51bGw7XG4gICAgZGV0ZWN0VHlwZT86IG51bWJlcjtcbiAgICBtbFByb2R1Y3RTZXR0aW5nPzogbWxQcm9kdWN0U2V0dGluZyB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIG1sUHJvZHVjdFNldHRpbmcge1xuICAgIGxhcmdlc3ROdW1PZlJldHVybnM/OiBudW1iZXIgfCBudWxsO1xuICAgIHByb2R1Y3RTZXRJZD86IHN0cmluZyB8IG51bGw7XG4gICAgcmVnaW9uPzogTUxQcm9kdWN0Q29uZmlnIHwgbnVsbDtcbn1cbmV4cG9ydCBlbnVtIE1MUHJvZHVjdENvbmZpZyB7XG4gICAgUkVHSU9OX0RSX0NISU5BID0gMTAwMixcbiAgICBSRUdJT05fRFJfQUZJTEEgPSAxMDAzLFxuICAgIFJFR0lPTl9EUl9FVVJPUEUgPSAxMDA0LFxuICAgIFJFR0lPTl9EUl9SVVNTSUEgPSAxMDA1LFxuICAgIFJFR0lPTl9EUl9HRVJNQU4gPSAxMDA2LFxuICAgIFJFR0lPTl9EUl9TSUFOR0FQT1JFID0gMTAwNyxcbn1cblxuXG5cbi8vVGV4dCBBbmFseXNlclxuXG5leHBvcnQgaW50ZXJmYWNlIGxvY2FsSW1hZ2VUZXh0UmVxIHtcbiAgICBvY3JUeXBlOiBNTFRleHRDb25maWc7XG4gICAgYW5hbHlzZU1vZGU/OiBudW1iZXI7XG4gICAgbG9jYWxUZXh0U2V0dGluZz86IGxvY2FsVGV4dFNldHRpbmcgfCBudWxsO1xuICAgIGZpbGVQYXRoOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgbG9jYWxUZXh0U2V0dGluZyB7XG4gICAgb2NyTW9kZT86IE1MTG9jYWxUZXh0U2V0dGluZztcbiAgICBsYW5ndWFnZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gTUxMb2NhbFRleHRTZXR0aW5nIHtcbiAgICBPQ1JfREVURUNUX01PREUgPSAxLFxuICAgIE9DUl9UUkFDS0lOR19NT0RFID0gMixcbn1cbmV4cG9ydCBlbnVtIE1MVGV4dENvbmZpZyB7XG4gICAgT0NSX0xPQ0FMX1RZUEUgPSAwLFxuICAgIE9DUl9SRU1PVEVfVFlQRSA9IDEsXG59XG5leHBvcnQgaW50ZXJmYWNlIHJlbW90ZUltYWdlVGV4dFJlcSB7XG4gICAgb2NyVHlwZTogTUxUZXh0Q29uZmlnO1xuICAgIGFuYWx5c2VNb2RlPzogbnVtYmVyO1xuICAgIHJlbW90ZVRleHRTZXR0aW5nPzogcmVtb3RlVGV4dFNldHRpbmc7XG4gICAgZmlsZVBhdGg6IGFueTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgcmVtb3RlVGV4dFNldHRpbmcge1xuICAgIHRleHREZW5zaXR5U2NlbmU/OiBNTFJlbW90ZVRleHRTZXR0aW5nO1xuICAgIGxhbmd1YWdlTGlzdD86IEFycmF5PHN0cmluZz47XG4gICAgYm9yZGVyVHlwZT86IE1MUmVtb3RlVGV4dFNldHRpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTUxCYW5rQ2FyZCB7XG4gICAgbnVtYmVyOiBzdHJpbmc7XG4gICAgZXhwaXJlOiBzdHJpbmc7XG4gICAgaXNzdWVyOiBzdHJpbmc7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIG9yZ2FuaXphdGlvbjogc3RyaW5nO1xuICAgIG9yaWdpbmFsQml0bWFwOiBhbnk7XG4gICAgbnVtYmVyQml0bWFwOiBhbnk7XG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBCb3JkZXIge1xuICAgIGJvdHRvbTogbnVtYmVyO1xuICAgIHRvcDogbnVtYmVyO1xuICAgIGxlZnQ6IG51bWJlcjtcbiAgICByaWdodDogbnVtYmVyO1xuICAgIGV4YWN0Q2VudGVyWDogbnVtYmVyO1xuICAgIGNlbnRlclk6IG51bWJlcjtcbiAgICBjZW50ZXJYOiBudW1iZXI7XG4gICAgZGVzY3JpYmVDb250ZW50czogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTUxEb2N1bWVudCB7XG4gICAgc3RyaW5nVmFsdWU6IHN0cmluZztcbiAgICBibG9ja3M/OiBCbG9ja3NbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYW5ndWFnZUxpc3Qge1xuICAgIGxhbmd1YWdlOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBNTFZuSWNyQ2FwdHVyZVJlc3VsdCB7XG4gICAgYmlydGhkYXk6IHN0cmluZztcbiAgICBjYXJkQml0bWFwOiBCaXRtYXA7XG4gICAgaWROdW06IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgc2V4OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTUxDbkljckNhcHR1cmVSZXN1bHQge1xuICAgIGJpcnRoZGF5OiBzdHJpbmc7XG4gICAgY2FyZEJpdG1hcDogQml0bWFwO1xuICAgIGlkTnVtOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHNleDogc3RyaW5nO1xuICAgIG5hdGlvbjogc3RyaW5nO1xuICAgIGFkZHJlc3M6IHN0cmluZztcbiAgICBhdXRob3JpdHk6IHN0cmluZztcbiAgICB2YWxpZERhdGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTEljckNhcHR1cmVSZXN1bHQge1xuICAgIGJpcnRoZGF5OiBzdHJpbmc7XG4gICAgY2FyZEJpdG1hcDogQml0bWFwO1xuICAgIGlkTnVtOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHNleDogc3RyaW5nO1xuICAgIG5hdGlvbjogc3RyaW5nO1xuICAgIGFkZHJlc3M6IHN0cmluZztcbiAgICB2YWxpZERhdGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTEdjckNhcHR1cmVSZXN1bHQge1xuICAgIHRleHQ6IHN0cmluZztcbiAgICBjYXJkQml0bWFwOiBCaXRtYXA7XG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBSZWN0IHtcbiAgICBib3R0b206IG51bWJlcjtcbiAgICB0b3A6IG51bWJlcjtcbiAgICBsZWZ0OiBudW1iZXI7XG4gICAgcmlnaHQ6IG51bWJlcjtcbiAgICBleGFjdENlbnRlclg6IG51bWJlcjtcbiAgICBjZW50ZXJZOiBudW1iZXI7XG4gICAgY2VudGVyWDogbnVtYmVyO1xuICAgIGRlc2NyaWJlQ29udGVudHM6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICB3aWR0aDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJpdG1hcCB7XG4gICAgbUdhbGxlcnlDYWNoZWQ6IGJvb2xlYW47XG4gICAgbUhlaWdodDogbnVtYmVyO1xuICAgIG1OYXRpdmVQdHI6IG51bWJlcjtcbiAgICBtV2lkdGg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTFRleHQge1xuICAgIHN0cmluZ1ZhbHVlOiBzdHJpbmc7XG4gICAgYmxvY2tzPzogQmxvY2tzW107XG59XG5leHBvcnQgaW50ZXJmYWNlIEJsb2NrcyB7XG4gICAgY29udGVudHM/OiBDb250ZW50c1tdO1xufVxuZXhwb3J0IGludGVyZmFjZSBDb250ZW50cyB7XG4gICAgc3RyaW5nVmFsdWU6IHN0cmluZztcbiAgICBib3JkZXI6IEJvcmRlcjtcbiAgICBsYW5ndWFnZTogc3RyaW5nO1xuICAgIGxhbmd1YWdlTGlzdD86IExhbmd1YWdlTGlzdFtdO1xuICAgIHZlcnRleGVzPzogVmVydGV4ZXNbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VMaXN0IHtcbiAgICBsYW5ndWFnZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBWZXJ0ZXhlcyB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBkZXNjcmliZUNvbnRlbnRzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTUxGb3JtUmVjb2dpdGlvblJlc3VsdCB7XG4gICAgcmV0Q29kZTogbnVtYmVyO1xuICAgIHRhYmxlQ29udGVudDogVGFibGVDb250ZW50O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlQ29udGVudCB7XG4gICAgdGFibGVDb3VudDogbnVtYmVyO1xuICAgIHRhYmxlcz86IFRhYmxlc0VudGl0eVtdIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVzRW50aXR5IHtcbiAgICB0YWJsZUlEOiBudW1iZXI7XG4gICAgaGVhZGVySW5mbzogc3RyaW5nO1xuICAgIGZvb3RlckluZm86IHN0cmluZztcbiAgICB0YWJsZUJvZHk/OiBUYWJsZUJvZHlFbnRpdHlbXSB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlQm9keUVudGl0eSB7XG4gICAgc3RhcnRSb3c6IG51bWJlcjtcbiAgICBlbmRSb3c6IG51bWJlcjtcbiAgICBzdGFydENvbDogbnVtYmVyO1xuICAgIGVuZENvbDogbnVtYmVyO1xuICAgIGNlbGxDb29yZGluYXRlOiBDZWxsQ29vcmRpbmF0ZTtcbiAgICB0ZXh0SW5mbzogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBDZWxsQ29vcmRpbmF0ZSB7XG4gICAgdG9wTGVmdF94OiBudW1iZXI7XG4gICAgdG9wTGVmdF95OiBudW1iZXI7XG4gICAgdG9wUmlnaHRfeDogbnVtYmVyO1xuICAgIHRvcFJpZ2h0X3k6IG51bWJlcjtcbiAgICBib3R0b21MZWZ0X3g6IG51bWJlcjtcbiAgICBib3R0b21MZWZ0X3k6IG51bWJlcjtcbiAgICBib3R0b21SaWdodF94OiBudW1iZXI7XG4gICAgYm90dG9tUmlnaHRfeTogbnVtYmVyO1xufVxuXG5leHBvcnQgZW51bSBDb2xvcnMge1xuICAgIFJFRCA9IC02NTUzNixcbiAgICBES0dSQVkgPSAtMTIzMDMyOTIsXG4gICAgR1JBWSA9IC03ODI5MzY4LFxuICAgIFdISVRFID0gLTEsXG4gICAgQkxVRSA9IC0xNjc3Njk2MSxcbiAgICBCTEFDSyA9IC0xNjc3NzIxNixcbiAgICBMVEdSQVkgPSAtMzM1NTQ0NCxcbiAgICBNQUdFTlRBID0gLTY1MjgxLFxuICAgIFlFTExPVyA9IC0yNTYsXG4gICAgQ1lBTiA9IC0xNjcxMTY4MSxcbiAgICBHUkVFTiA9IC0xNjcxMTkzNixcbiAgICBUUkFOU1BBUkVOVCA9IDAsXG59XG5cbmV4cG9ydCBlbnVtIENvcmRvdmFFcnJvcnMge1xuICAgIFVOS05PV04gPSAtMSxcbiAgICBTVUNDRVNTID0gMCxcbiAgICBESVNDQVJERUQgPSAxLFxuICAgIElOTkVSID0gMixcbiAgICBJTkFDVElWRSA9IDMsXG4gICAgTk9UX1NVUFBPUlRFRCA9IDQsXG4gICAgSUxMRUdBTF9QQVJBTUVURVIgPSA1LFxuICAgIE9WRVJEVUUgPSA2LFxuICAgIE5PX0ZPVU5EID0gNyxcbiAgICBEVVBMSUNBVEVfRk9VTkQgPSA4LFxuICAgIE5PX1BFUk1JU1NJT04gPSA5LFxuICAgIElOU1VGRklDSUVOVF9SRVNPVVJDRSA9IDEwLFxuICAgIEFOQUxZU0lTX0ZBSUxVUkUgPSAxMSxcbiAgICBJTlRFUlJVUFRFRCA9IDEyLFxuICAgIEVYQ0VFRF9SQU5HRSA9IDEzLFxuICAgIERBVEFfTUlTU0lORyA9IDE0LFxuICAgIEFVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEID0gMTUsXG4gICAgVEZMSVRFX05PVF9DT01QQVRJQkxFID0gMTYsXG4gICAgSU5TVUZGSUNJRU5UX1NQQUNFID0gMTcsXG4gICAgSEFTSF9NSVNTID0gMTgsXG4gICAgVE9LRU5fSU5WQUxJRCA9IDE5LFxuICAgIFNFUlZJQ0VfRkFJTFVSRSA9IDIwLFxuICAgIEFOQUxZU0lTX05VTEwgPSAyMSxcbn1cblxuXG5leHBvcnQgZW51bSBSZWdpb24ge1xuUkVHSU9OX0RSX1VOS05PV04gPSAxMDAxLFxuUkVHSU9OX0RSX0NISU5BID0gMTAwMixcblJFR0lPTl9EUl9SVVNTSUEgPSAxMDA1LFxuUkVHSU9OX0RSX0dFUk1BTiA9IDEwMDYsXG5SRUdJT05fRFJfU0lOR0FQT1JFID0gMTAwN1xufVxuIl19