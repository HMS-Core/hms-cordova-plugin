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
    HMSMLTextPlugin.pluginName = "HMSMLTextPlugin";
    HMSMLTextPlugin.plugin = "cordova-plugin-hms-mltext";
    HMSMLTextPlugin.pluginRef = "HMSMLTextPlugin";
    HMSMLTextPlugin.platforms = ["Android"];
    HMSMLTextPlugin.decorators = [
        { type: Injectable }
    ];
    return HMSMLTextPlugin;
}(IonicNativePlugin));
export { HMSMLTextPlugin };
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
    HMSMLText.pluginName = "HMSMLText";
    HMSMLText.plugin = "cordova-plugin-hms-mltext";
    HMSMLText.pluginRef = "HMSMLText";
    HMSMLText.platforms = ["Android"];
    HMSMLText.decorators = [
        { type: Injectable }
    ];
    return HMSMLText;
}(IonicNativePlugin));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7O0FBRUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHNFQUtOLE1BQU0sb0JBQW9CLENBQUM7O0lBU1MsbUNBQWlCOzs7O0lBMkJsRDs7O09BR0c7SUFDSCxvQ0FBVTtJQUlWOzs7T0FHRztJQUNILGlDQUFPO0lBSVA7OztPQUdHO0lBQ0gsNkNBQW1CO0lBSW5COzs7O09BSUc7SUFDSCxvQ0FBVSxhQUFDLGFBQTRCO0lBSXZDOzs7O09BSUc7SUFDSCxzQ0FBWSxhQUFDLEdBQVE7SUFJckI7Ozs7T0FJRztJQUNILHNDQUFZLGFBQUMsR0FBUTtJQUlyQjs7O09BR0c7SUFDSCxzQ0FBWTtJQUlaOzs7T0FHRztJQUNILHVDQUFhOzBCQXhGYiwrQ0FBa0I7Ozs7OzswQkFFbEIsNkNBQWdCOzs7Ozs7MEJBRWhCLHlDQUFZOzs7Ozs7MEJBRVosZ0RBQW1COzs7Ozs7MEJBRW5CLCtDQUFrQjs7Ozs7OzBCQUVsQixpREFBb0I7Ozs7OzswQkFFcEIsOENBQWlCOzs7Ozs7MEJBRWpCLHFEQUF3Qjs7Ozs7OzBCQUV4QixtREFBc0I7Ozs7OzswQkFFdEIsNENBQWU7Ozs7OzswQkFFZiwyQ0FBYzs7Ozs7OzBCQUVkLG1DQUFNOzs7Ozs7Ozs7OztnQkF6QlQsVUFBVTs7MEJBOUJYO0VBK0JxQyxpQkFBaUI7U0FBekMsZUFBZTs7SUFxR0csNkJBQWlCOzs7O0lBNkI1Qzs7OztPQUlHO0lBQ0gscUNBQWlCLGFBQ2Isc0JBQThEO0lBS2xFOzs7T0FHRztJQUNILG9DQUFnQjtJQUloQjs7O09BR0c7SUFDSCx1Q0FBbUI7SUFJbkI7Ozs7T0FJRztJQUNILHlDQUFxQixhQUNqQix3QkFBa0Q7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QyxFQXhCVyxhQUFhLEtBQWIsYUFBYSxRQXdCeEI7QUFHRCxNQUFNLENBQU4sSUFBWSxNQU1YO0FBTkQsV0FBWSxNQUFNO0lBQ2xCLGdFQUF3QixDQUFBO0lBQ3hCLDREQUFzQixDQUFBO0lBQ3RCLDhEQUF1QixDQUFBO0lBQ3ZCLDhEQUF1QixDQUFBO0lBQ3ZCLG9FQUEwQixDQUFBO0FBQzFCLENBQUMsRUFOVyxNQUFNLEtBQU4sTUFBTSxRQU1qQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQ29weXJpZ2h0IDIwMjMuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5cbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICAgIFBsdWdpbixcbiAgICBDb3Jkb3ZhLFxuICAgIENvcmRvdmFQcm9wZXJ0eSwgXG4gICAgSW9uaWNOYXRpdmVQbHVnaW4sXG59IGZyb20gXCJAaW9uaWMtbmF0aXZlL2NvcmVcIjtcblxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogXCJITVNNTFRleHRQbHVnaW5cIixcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLW1sdGV4dFwiLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgICBwbHVnaW5SZWY6IFwiSE1TTUxUZXh0UGx1Z2luXCIsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNNTFRleHRQbHVnaW4gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxMb2NhbFRleHRTZXR0aW5nID0gTUxMb2NhbFRleHRTZXR0aW5nO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIGljclZuQ2FwdHVyZVR5cGUgPSBpY3JDYXB0dXJlVHlwZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFRleHRDb25maWcgPSBNTFRleHRDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxSZW1vdGVUZXh0U2V0dGluZyA9IE1MUmVtb3RlVGV4dFNldHRpbmc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxCY3JDYXB0dXJlQ29uZmlnID0gTUxCY3JDYXB0dXJlQ29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MR2NyQ2FwdHVyZVVJQ29uZmlnID0gTUxHY3JDYXB0dXJlVUlDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxCY3JSZXN1bHRDb25maWcgPSBNTEJjclJlc3VsdENvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBJbWdTdXBlclJlc29sdXRpb25Db25maWcgPSBJbWdTdXBlclJlc29sdXRpb25Db25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxGb3JtUmVjb2dpdGlvbkNvbmZpZyA9IE1MRm9ybVJlY29naXRpb25Db25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxQcm9kdWN0Q29uZmlnID0gTUxQcm9kdWN0Q29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIGdjckNhcHR1cmVUeXBlID0gZ2NyQ2FwdHVyZVR5cGU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgQ29sb3JzID0gQ29sb3JzO1xuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBNb25pdG9ycyBwaG90b2dyYXBoaW5nLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHBob3RvZ3JhcGgoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIENsb3NlIGxlbnMgZW5naW5lLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGRlc3Ryb3koKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIE9idGFpbnMgdGhlIHNpemUgb2YgdGhlIHByZXZpZXcgaW1hZ2Ugb2YgYSBjYW1lcmEuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZ2V0RGlzcGxheURpbWVuc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogQW4gYXBwIGluZm9ybWF0aW9uIGNsYXNzIHVzZWQgdG8gc3RvcmUgYmFzaWMgaW5mb3JtYXRpb24gYWJvdXQgYXBwcyB3aXRoIHRoZSBITVMgQ29yZSBNTCBTREsgaW50ZWdyYXRlZCBhbmQgY29tcGxldGUgdGhlIGluaXRpYWxpemF0aW9uIG9mIE1MIFRleHQgS2l0LiBXaGVuIHVzaW5nIGNsb3VkIHNlcnZpY2VzIG9mIHRoZSBNTCBUZXh0IEtpdCwgeW91IG5lZWQgdG8gc2V0IHRoZSBhcGlLZXkgb2YgeW91ciBhcHAuXG4gICAgICogQHBhcmFtICB7YXBwU2V0dGluZ1JlcX0gYXBwU2V0dGluZ1JlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgYXBwU2V0dGluZyhhcHBTZXR0aW5nUmVxOiBhcHBTZXR0aW5nUmVxKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0byBjb2xsZWN0IHN0YXRpc3RpY3Mgb24gdGhlIGN1cnJlbnQgYXBwLlxuICAgICAqIEBwYXJhbSB7YW55fSBhbnlcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBzZXRTdGF0aXN0aWMoYW55OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGNvbGxlY3Qgc3RhdGlzdGljcyBvbiB0aGUgY3VycmVudCBhcHAuXG4gICAgICoqIEBwYXJhbSB7YW55fSBhbnlcbiAgICAgKiAgQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZ2V0U3RhdGlzdGljKGFueTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgc2VydmljZSBlbmFibGUgbG9nZ2VyIHNlcnZpY2UuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIHNlcnZpY2UgZGlzYWJsZSBsb2dnZXIgc2VydmljZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBkaXNhYmxlTG9nZ2VyKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiBcIkhNU01MVGV4dFwiLFxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtbWx0ZXh0XCIsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICAgIHBsdWdpblJlZjogXCJITVNNTFRleHRcIiwgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU01MVGV4dCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBpY3JWbkNhcHR1cmVUeXBlID0gaWNyQ2FwdHVyZVR5cGU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgZ2NyQ2FwdHVyZVR5cGUgPSBnY3JDYXB0dXJlVHlwZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTExvY2FsVGV4dFNldHRpbmcgPSBNTExvY2FsVGV4dFNldHRpbmc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxUZXh0Q29uZmlnID0gTUxUZXh0Q29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MUmVtb3RlVGV4dFNldHRpbmcgPSBNTFJlbW90ZVRleHRTZXR0aW5nO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MQmNyQ2FwdHVyZUNvbmZpZyA9IE1MQmNyQ2FwdHVyZUNvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEdjckNhcHR1cmVVSUNvbmZpZyA9IE1MR2NyQ2FwdHVyZVVJQ29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MQmNyUmVzdWx0Q29uZmlnID0gTUxCY3JSZXN1bHRDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgSW1nU3VwZXJSZXNvbHV0aW9uQ29uZmlnID0gSW1nU3VwZXJSZXNvbHV0aW9uQ29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MRm9ybVJlY29naXRpb25Db25maWcgPSBNTEZvcm1SZWNvZ2l0aW9uQ29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MUHJvZHVjdENvbmZpZyA9IE1MUHJvZHVjdENvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBDb2xvcnMgPSBDb2xvcnM7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgUmVjTW9kZSA9IFJlY01vZGU7XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHN0YXJ0IHRoZSBUZXh0IGFuYWx5emVyLlxuICAgICAqIEBwYXJhbSAge2xvY2FsSW1hZ2VUZXh0UmVxfHJlbW90ZUltYWdlVGV4dFJlcX0gSW1hZ2VUZXh0QW5hbHlzZXJJbnB1dCBSZXBlcmVzZW50cyB0aGUgbmVjZXNzYXJ5IHBhcmFtZXRlcnMgdG8gY29udmVydCBpbWFnZXMgdG8gdGV4dCBmb3JtYXQuXG4gICAgICogQHJldHVybnMgUHJvbWlzZSA8VGV4dEFuYWx5c2VyPlxuICAgICAqL1xuICAgIGltYWdlVGV4dEFuYWx5c2VyKFxuICAgICAgICBJbWFnZVRleHRBbmFseXNlcklucHV0OiBsb2NhbEltYWdlVGV4dFJlcSB8IHJlbW90ZUltYWdlVGV4dFJlcVxuICAgICk6IFByb21pc2U8TUxUZXh0PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wIHRoZSBUZXh0IGFuYWx5emVyLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHN0b3BUZXh0QW5hbHlzZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGdpdmVzIFRleHQgQW5hbHlzZXIgaW5mb3JtYXRpb24uXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZ2V0VGV4dEFuYWx5c2VySW5mbygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcHJvdmlkZXMgYSBkb2N1bWVudCByZWNvZ25pdGlvbiBjb21wb25lbnQgdGhhdCByZWNvZ25pemVzIHRleHQgZnJvbSBpbWFnZXMgb2YgZG9jdW1lbnRzLlxuICAgICAqIEBwYXJhbSAge2RvY3VtZW50SW1hZ2VBbmFseXNlclJlcX0gZG9jdW1lbnRJbWFnZUFuYWx5c2VyUmVxIFJlcGVyZXNlbnRzIHRoZSBuZWNlc3NhcnkgcGFyYW1ldGVyIHRvIGNvbnZlcnQgZG9jdW1lbnQgaW1hZ2VzIHRvIHRleHQgZm9ybWF0LlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8RG9jdW1lbnRBbmFseXNlcj5cbiAgICAgKi9cbiAgICBkb2N1bWVudEltYWdlQW5hbHlzZXIoXG4gICAgICAgIGRvY3VtZW50SW1hZ2VBbmFseXNlclJlcTogZG9jdW1lbnRJbWFnZUFuYWx5c2VyUmVxXG4gICAgKTogUHJvbWlzZTxNTERvY3VtZW50PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wIHRoZSBEb2N1bWVudCBhbmFseXplci5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBzdG9wRG9jdW1lbnRJbWFnZUFuYWx5c2VyKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBjbG9zZSB0aGUgRG9jdW1lbnQgYW5hbHl6ZXIuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgY2xvc2VEb2N1bWVudEltYWdlQW5hbHlzZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIERvY3VtZW50IGFuYWx5emVyIHNldHRpbmcuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZ2V0RG9jdW1lbnRJbWFnZUFuYWx5c2VyU2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgSW1hZ2UgYW5hbHl6ZXIgc2V0dGluZy5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBnZXRUZXh0QW5hbHlzZXJTZXR0aW5nKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBHQ1Igc2V0dGluZy5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBnZXRHQ1JTZXR0aW5nKCk6IFByb21pc2U8Z2NyU2V0dGluZ1Jlc3VsdHM+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3AgdGhlIEZvcm0gUmVjb2duaXRpb24gQW5hbHl6ZXIuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgc3RvcEZvcm1SZWNvZ25pdGlvbkFuYWx5c2VyKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIGJhbmsgY2FyZCByZWNvZ25pdGlvbiBzZXJ2aWNlIHJlY29nbml6ZXMgYmFuayBjYXJkcyBpbiBjYW1lcmEgc3RyZWFtcyB3aXRoaW4gYW5nbGUgb2Zmc2V0IG9mIDE1IGRlZ3JlZXMgYW5kIGV4dHJhY3RzIGtleSBpbmZvcm1hdGlvbiBzdWNoIGFzIGNhcmQgbnVtYmVyIGFuZCB2YWxpZGl0eSBwZXJpb2QuXG4gICAgICogQHBhcmFtICB7YmFua0NhcmRTREtEZXRlY3RvclJlcXxiYW5rQ2FyZFBsdWdpbkRldGVjdG9yUmVxfSBiYW5rQ2FyZERldGVjdGVySW5wdXQgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBiYW5rIGNhcmQgcmVjb2duaXRpb24uXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxCYW5rQ2FyZEFuYWx5c2VyPiB8IFByb21pc2U8QmFua0NhcmRBbmFseXNlcj5cbiAgICAgKi9cbiAgICBiYW5rQ2FyZERldGVjdG9yKFxuICAgICAgICBiYW5rQ2FyZERldGVjdGVySW5wdXQ6XG4gICAgICAgICAgICB8IGJhbmtDYXJkU0RLRGV0ZWN0b3JSZXFcbiAgICAgICAgICAgIHwgYmFua0NhcmRQbHVnaW5EZXRlY3RvclJlcVxuICAgICk6IFByb21pc2U8TUxCYW5rQ2FyZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCBiYW5rY2FyZCByZWNvZ25pdGlvbiBzZXJ2aWNlLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHN0b3BCYW5rQ2FyZERldGVjdG9yKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRSZXN1bHRUeXBlQmNyKG1MQmNyQ2FwdHVyZUNvbmZpZzogbUxCY3JDYXB0dXJlQ29uZmlnKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldFJlY01vZGVCY3IobUxCY3JDYXB0dXJlQ29uZmlnOiBtTEJjckNhcHR1cmVDb25maWcpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgQkNSIHNldHRpbmcuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZ2V0QmFua0NhcmREZXRlY3RvclNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoZSBnZW5lcmFsIGNhcmQgcmVjb2duaXRpb24gc2VydmljZSBwcm92aWRlcyBhIHVuaXZlcnNhbCBkZXZlbG9wbWVudCBmcmFtZXdvcmsgYmFzZWQgb24gdGhlIHRleHQgcmVjb2duaXRpb24gdGVjaG5vbG9neS5cbiAgICAgKiBAcGFyYW0gIHtnZW5lcmFsQ2FyZERldGVjdG9yUmVxfSBnZW5lcmFsQ2FyZERldGVjdG9yUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgZ2VuZXJhbCBjYXJkIHJlY29nbml0aW9uIHBsdWctaW4uXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxHZW5lcmFsQ2FyZEFuYWx5c2VyPlxuICAgICAqL1xuICAgIGdlbmVyYWxDYXJkRGV0ZWN0b3IoXG4gICAgICAgIGdlbmVyYWxDYXJkRGV0ZWN0b3JSZXE6IGdlbmVyYWxDYXJkRGV0ZWN0b3JSZXFcbiAgICApOiBQcm9taXNlPE1MR2NyQ2FwdHVyZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhlIGdlbmVyYWwgVmlldG5hbSBpZCBjYXJkICByZWNvZ25pdGlvbiBzZXJ2aWNlIHByb3ZpZGVzIGEgdW5pdmVyc2FsIGRldmVsb3BtZW50IGZyYW1ld29yayBiYXNlZCBvbiB0aGUgdGV4dCByZWNvZ25pdGlvbiB0ZWNobm9sb2d5LlxuICAgICAqIEBwYXJhbSAge2ljclZuRGV0ZWN0b3JSZXF9IGljclZuRGV0ZWN0b3JSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBnZW5lcmFsIGNhcmQgcmVjb2duaXRpb24gcGx1Zy1pbi5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPE1MVm5JY3JDYXB0dXJlUmVzdWx0PlxuICAgICAqL1xuICAgIGljclZuQ2FyZERldGVjdG9yKFxuICAgICAgICBpY3JWbkRldGVjdG9yUmVxOiBpY3JWbkRldGVjdG9yUmVxXG4gICAgKTogUHJvbWlzZTxNTFZuSWNyQ2FwdHVyZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhlIGZvcm0gcmVjb2duaXRpb24gc2VydmljZSB1c2VzIEFJIHRlY2hub2xvZ2llcyB0byByZWNvZ25pemUgYW5kIHJldHVybiBmb3JtIHN0cnVjdHVyZSBpbmZvcm1hdGlvbiAoaW5jbHVkaW5nIHJvd3MsIGNvbHVtbnMsIGFuZCBjb29yZGluYXRlcyBvZiBjZWxscykgYW5kIGZvcm0gdGV4dCBpbiBDaGluZXNlIGFuZCBFbmdsaXNoIChpbmNsdWRpbmcgcHVuY3R1YXRpb24pIGZyb20gaW5wdXQgaW1hZ2VzLlxuICAgICAqIEBwYXJhbSAge2Zvcm1SZWNvZ25pemVyQW5hbHlzZXJSZXF9IGZvcm1SZWNvZ25pemVyQW5hbHlzZXJSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBnZW5lcmFsIGNhcmQgcmVjb2duaXRpb24gcGx1Zy1pbi5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPEdlbmVyYWxDYXJkQW5hbHlzZXI+XG4gICAgICovXG4gICAgZm9ybVJlY29nbml0aW9uQW5hbHlzZXIoXG4gICAgICAgIGZvcm1SZWNvZ25pemVyQW5hbHlzZXJSZXE6IGZvcm1SZWNvZ25pemVyQW5hbHlzZXJSZXFcbiAgICApOiBQcm9taXNlPE1MR2NyQ2FwdHVyZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaWNyTG9jYWxBbmFseXNlcihcbiAgICAgICAgbG9jYWxBbmFseXNlclJlcTogbG9jYWxBbmFseXNlclJlcVxuICAgICk6IFByb21pc2U8TUxJY3JDYXB0dXJlUmVzdWx0PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGljckxvY2FsQW5hbHlzZXJDcmVhdGVJZENhcmQoXG4gICAgICAgIGNyZWF0ZUlkQ2FyZFJlcTogY3JlYXRlSWRDYXJkUmVxXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaWNyTG9jYWxBbmFseXNlclN0b3AoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0aWNyQ25DYXJkSW5zdGFuY2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaWNyQ25DYXJkQ3JlYXRlKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRpY3JWbkNhcmRJbnN0YW5jZSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaWNyVm5DYXJkQ3JlYXRlKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRJY3JWbkNhcHR1cmUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc3RhcnRDdXN0b21pemVkVmlldyh1c2VyUHJvcHM6IEN1c3RvbVZpZXdNb2RlUmVxdWVzdCk6IFByb21pc2U8TUxCYW5rQ2FyZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc3dpdGNoTGlnaHQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRMaWdodFN0YXR1cygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0VXNlclJlZ2lvbihyZWdpb246IFJlZ2lvbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRDb3VudHJ5Q29kZSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbVZpZXdNb2RlUmVxdWVzdCB7XG4gICAgaXNUaXRsZUF2YWlsYWJsZTogYm9vbGVhbjtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGhlaWdodEZhY3RvcjogbnVtYmVyO1xuICAgIHdpZHRoRmFjdG9yOiBudW1iZXI7XG4gICAgaXNGbGFzaEF2YWlsYWJsZTogYm9vbGVhbjtcbiAgICByZXN1bHRUeXBlOiBNTEJjclJlc3VsdENvbmZpZztcbiAgICByZWNNb2RlOiBSZWNNb2RlO1xuIH1cblxuLy8gQVBJIEtFWVxuXG5leHBvcnQgaW50ZXJmYWNlIGNvbmZpZ1JlcSB7XG4gICAgYXBpS2V5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgYXBwU2V0dGluZ1JlcSB7XG4gICAgYXBpS2V5Pzogc3RyaW5nIHwgbnVsbDtcbiAgICBhcHBsaWNhdGlvbklkPzogc3RyaW5nIHwgbnVsbDtcbiAgICBjZXJ0RmluZ2VycHJpbnQ/OiBzdHJpbmcgfCBudWxsO1xufSBcblxuXG4vLyBTREsgQkFOSyBDQVJEIEFOQUxZU0VSXG5cbmV4cG9ydCBpbnRlcmZhY2UgYmFua0NhcmRTREtEZXRlY3RvclJlcSB7XG4gICAgZmlsZVBhdGg6IGFueTtcbiAgICBkZXRlY3RUeXBlOiAwO1xuICAgIG1MQmNyQW5hbHl6ZXJTZXR0aW5nPzogTUxCY3JBbmFseXplclNldHRpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MQmNyQW5hbHl6ZXJTZXR0aW5nIHtcbiAgICBsYW5nVHlwZT86IHN0cmluZyB8IG51bGw7XG4gICAgcmVzdWx0VHlwZT86IE1MQmNyUmVzdWx0Q29uZmlnIHwgbnVsbDtcbn1cblxuLy8gUExVR0lOIEJBTksgQ0FSRCBBTkFMWVNFUlxuXG5leHBvcnQgaW50ZXJmYWNlIGJhbmtDYXJkUGx1Z2luRGV0ZWN0b3JSZXEge1xuICAgIGRldGVjdFR5cGU6IDE7XG4gICAgbUxCY3JDYXB0dXJlQ29uZmlnPzogbUxCY3JDYXB0dXJlQ29uZmlnIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBtTEJjckNhcHR1cmVDb25maWcge1xuICAgIG9yaWVudGF0aW9uPzogTUxCY3JDYXB0dXJlQ29uZmlnIHwgbnVsbDtcbiAgICByZXN1bHRUeXBlPzogTUxCY3JSZXN1bHRDb25maWcgfCBudWxsO1xuICAgIHJlY01vZGU/OiBSZWNNb2RlIHwgbnVsbDtcbn1cblxuZXhwb3J0IGVudW0gUmVjTW9kZSB7XG4gICAgV0VBS19NT0RFID0gMCxcbiAgICBTVFJJQ1RfTU9ERSA9IDEsXG59XG5cbmV4cG9ydCBlbnVtIE1MQmNyQ2FwdHVyZUNvbmZpZyB7XG4gICAgRVJST1JfQ09ERV9JTklUX0NBTUVSQV9GQUlMRUQgPSAxMDEwMSxcbiAgICBSRVNVTFRfTlVNX09OTFkgPSAwLFxuICAgIE9SSUVOVEFUSU9OX0FVVE8gPSAwLFxuICAgIFdFQUtfTU9ERSA9IDAsXG4gICAgT1JJRU5UQVRJT05fTEFORFNDQVBFID0gMSxcbiAgICBPUklFTlRBVElPTl9QT1JUUkFJVCA9IDIsXG4gICAgUkVTVUxUX0FMTCA9IDIsXG4gICAgUkVTVUxUX1NJTVBMRSA9IDEsXG4gICAgU1RSSUNUX01PREUgPSAxLFxufVxuZXhwb3J0IGVudW0gTUxCY3JSZXN1bHRDb25maWcge1xuICAgIFJFU1VMVF9OVU1fT05MWSA9IDAsXG4gICAgUkVTVUxUX1NJTVBMRSA9IDEsXG4gICAgUkVTVUxUX0FMTCA9IDIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTUxCY3JDYXB0dXJlUmVzdWx0IHtcbiAgICBlcnJvckNvZGU/OiBNTEJjckNhcHR1cmVFcnJvckNvZGUgfCBudWxsO1xuICAgIGV4cGlyZT86IFN0cmluZyB8IG51bGw7XG4gICAgaXNzdWVyPzogU3RyaW5nIHwgbnVsbDtcbiAgICBudW1iZXI/OiBTdHJpbmcgfCBudWxsO1xuICAgIG51bWJlckJpdG1hcD86IGFueTtcbiAgICBvcmdhbml6YXRpb24/OiBTdHJpbmcgfCBudWxsO1xuICAgIHJpZ2luYWxCaXRtYXA/OiBhbnk7XG4gICAgdHlwZT86IFN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBlbnVtIE1MQmNyQ2FwdHVyZUVycm9yQ29kZSB7XG4gICAgRVJST1JfQ09ERV9JTklUX0NBTUVSQV9GQUlMRUQgPSAxMDEwMSxcbn1cblxuXG4vL0RvY3VtZW50IEFuYWx5c2VyXG5cbmV4cG9ydCBpbnRlcmZhY2UgZG9jdW1lbnRJbWFnZUFuYWx5c2VyUmVxIHtcbiAgICBkb2N1bWVudFNldHRpbmc/OiBEb2N1bWVudFNldHRpbmcgfCBudWxsO1xuICAgIGZpbGVQYXRoOiBhbnk7XG59XG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50U2V0dGluZyB7XG4gICAgYm9yZGVyVHlwZT86IE1MUmVtb3RlVGV4dFNldHRpbmcgfCBudWxsO1xuICAgIGxhbmd1YWdlTGlzdD86IEFycmF5PHN0cmluZz4gfCBudWxsO1xuICAgIGVuYWJsZUZpbmdlcnByaW50VmVyaWZpY2F0aW9uOiBib29sZWFuIHwgbnVsbDtcbn1cblxuZXhwb3J0IGVudW0gTUxSZW1vdGVUZXh0U2V0dGluZyB7XG4gICAgT0NSX0xPT1NFX1NDRU5FID0gMSxcbiAgICBPQ1JfQ09NUEFDVF9TQ0VORSA9IDIsXG4gICAgTkdPTiA9IFwiTkdPTlwiLFxuICAgIEFSQyA9IFwiQVJDXCIsXG4gICAgT1RIRVIgPSA1LFxuICAgIE5FV19MSU5FX0NIQVJBQ1RFUiA9IDgsXG4gICAgU1BBQ0UgPSA2LFxufVxuXG5cblxuLy9Gb3JtIFJlY29nbml6ZXIgQW5hbHlzZXJcblxuZXhwb3J0IGludGVyZmFjZSBmb3JtUmVjb2duaXplckFuYWx5c2VyUmVxIHtcbiAgICBmaWxlUGF0aDogYW55O1xuICAgIHN5bmNUeXBlOiBNTEZvcm1SZWNvZ2l0aW9uQ29uZmlnO1xufVxuZXhwb3J0IGVudW0gTUxGb3JtUmVjb2dpdGlvbkNvbmZpZyB7XG4gICAgU1lOQ19UWVBFID0gMSxcbiAgICBBU1lOQ19UWVBFID0gMCxcbn1cblxuLy8gR0VORVJBTCBDQVJEIEFOQUxZU0VSXG5cbmV4cG9ydCBpbnRlcmZhY2UgZ2VuZXJhbENhcmREZXRlY3RvclJlcSB7XG4gICAgZ2NyQ2FwdHVyZUNvbmZpZz86IGdjckNhcHR1cmVDb25maWc7XG4gICAgZ2NyQ2FwdHVyZVVJQ29uZmlnPzogZ2NyQ2FwdHVyZVVJQ29uZmlnO1xuICAgIGNhcHR1cmVUeXBlPzogZ2NyQ2FwdHVyZVR5cGUgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIGdjckNhcHR1cmVDb25maWcge1xuICAgIGxhbmd1YWdlOiBzdHJpbmc7XG59XG5leHBvcnQgZW51bSBnY3JDYXB0dXJlVHlwZSB7XG4gICAgQ0FQVFVSRV9BQ1RJVklUWSA9IDAsXG4gICAgQ0FQVFVSRV9QSE9UTyA9IDEsXG4gICAgQ0FQVFVSRV9JTUFHRSA9IDIsXG59XG5leHBvcnQgaW50ZXJmYWNlIGdjckNhcHR1cmVVSUNvbmZpZyB7XG4gICAgb3JpZW50YXRpb24/OiBNTEdjckNhcHR1cmVVSUNvbmZpZyB8IG51bGw7XG4gICAgdGlwVGV4dD86IHN0cmluZyB8IG51bGw7XG4gICAgdGlwVGV4dENvbG9yPzogbnVtYmVyIHwgbnVsbDtcbiAgICBwaG90b0J1dHRvblJlc0lkPzogbnVtYmVyIHwgbnVsbDtcbiAgICBzY2FuQm94Q29ybmVyQ29sb3I/OiBudW1iZXIgfCBudWxsO1xuICAgIGJhY2tCdXR0b25SZWRJZD86IG51bWJlciB8IG51bGw7XG4gICAgdG9yY2hSZWRJZD86IG51bWJlciB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIGdjclNldHRpbmdSZXN1bHRzIHtcbiAgICBnY3JDb25maWdMYW5ndWFnZTogU3RyaW5nO1xuICAgIHRvcmNoT25SZXNJZDogbnVtYmVyO1xuICAgIHRpcFRleHRDb2xvcjogbnVtYmVyO1xuICAgIHRpcFRleHQ6IFN0cmluZztcbiAgICBiYWNrQnV0dG9uUmVzSWQ6IG51bWJlcjtcbiAgICBvcmllbnRhdGlvbjogbnVtYmVyO1xuICAgIHBob3RvQnV0dG9uUmVzSWQ6IG51bWJlcjtcbiAgICBzY2FuQm94U2NyZWVuUmF0aW86IG51bWJlcjtcbiAgICBzY2FuQm94Q29ybmVyQ29sb3I6IG51bWJlcjtcbiAgICBzY2FuQm94QXNwZWN0UmF0aW86IG51bWJlcjtcbn1cblxuZXhwb3J0IGVudW0gTUxHY3JDYXB0dXJlVUlDb25maWcge1xuICAgIE9SSUVOVEFUSU9OX0FVVE8gPSAwLFxuICAgIE9SSUVOVEFUSU9OX0xBTkRTQ0FQRSA9IDEsXG4gICAgT1JJRU5UQVRJT05fUE9SVFJBSVQgPSAyLFxufVxuXG4vLyBJRCBDQVJEIEFOQUxZU0VSXG5cbmV4cG9ydCBpbnRlcmZhY2UgaWNyVm5EZXRlY3RvclJlcSB7XG4gICAgY2FwdHVyZVR5cGU6IGljckNhcHR1cmVUeXBlO1xuICAgIGZpbGVQYXRoPzogYW55IHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBpY3JDbkRldGVjdG9yUmVxIHtcbiAgICBjYXB0dXJlVHlwZTogaWNyQ2FwdHVyZVR5cGU7XG4gICAgZmlsZVBhdGg/OiBhbnkgfCBudWxsO1xuICAgIGlzRnJvbnQ/OiBib29sZWFuIHwgbnVsbDtcbn1cblxuZXhwb3J0IGVudW0gaWNyQ2FwdHVyZVR5cGUge1xuICAgIENBUFRVUkVfQ0FNRVJBID0gMCxcbiAgICBDQVBUVVJFX0lNQUdFID0gMSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBjcmVhdGVJZENhcmRSZXEge1xuICAgIG1sSWNyQW5hbHl6ZXJTZXR0aW5nPzogTUxJY3JBbmFseXplclNldHRpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIGxvY2FsQW5hbHlzZXJSZXEge1xuICAgIHNldHRpbmdzOiBNTEljckFuYWx5emVyU2V0dGluZztcbiAgICBmaWxlUGF0aD86IGFueSB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIE1MSWNyQW5hbHl6ZXJTZXR0aW5nIHtcbiAgICBjb3VudHJ5Q29kZTogc3RyaW5nO1xuICAgIGhhc2hDb2RlPzogbnVtYmVyIHwgbnVsbDtcbiAgICBzaWRlVHlwZT86IE1MSWNyU2lkZVR5cGUgfCBudWxsO1xufVxuXG5leHBvcnQgZW51bSBNTEljclNpZGVUeXBlIHtcbiAgICBGUk9OVCA9IFwiRlJPTlRcIixcbiAgICBCQUNLID0gXCJCQUNLXCIsXG59XG5cblxuLy9JbWFnZSBTdXBlciBSZXNvbHV0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgaW1hZ2VTdXBlclJlc29sdXRpb25SZXEge1xuICAgIGZpbGVQYXRoOiBhbnk7XG4gICAgaW1nU3VwZXJSZXNvbHV0aW9uU2V0dGluZz86IEltZ1N1cGVyUmVzb2x1dGlvblNldHRpbmcgfCBudWxsO1xuICAgIHN5bmNUeXBlPzogTUxGb3JtUmVjb2dpdGlvbkNvbmZpZyB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIEltZ1N1cGVyUmVzb2x1dGlvblNldHRpbmcge1xuICAgIHNjYWxlVHlwZT86IEltZ1N1cGVyUmVzb2x1dGlvbkNvbmZpZztcbn1cbmV4cG9ydCBlbnVtIEltZ1N1cGVyUmVzb2x1dGlvbkNvbmZpZyB7XG4gICAgSVNSX1NDQUxFXzFYID0gMS4wLFxuICAgIElTUl9TQ0FMRV8zWCA9IDMuMCxcbn1cblxuLy9Qcm9kdWN0IFZpc2lvbiBBbmFseXNlclxuXG5leHBvcnQgaW50ZXJmYWNlIHByb2R1Y3RSZXEge1xuICAgIGZpbGVQYXRoPzogYW55IHwgbnVsbDtcbiAgICBkZXRlY3RUeXBlPzogbnVtYmVyO1xuICAgIG1sUHJvZHVjdFNldHRpbmc/OiBtbFByb2R1Y3RTZXR0aW5nIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgbWxQcm9kdWN0U2V0dGluZyB7XG4gICAgbGFyZ2VzdE51bU9mUmV0dXJucz86IG51bWJlciB8IG51bGw7XG4gICAgcHJvZHVjdFNldElkPzogc3RyaW5nIHwgbnVsbDtcbiAgICByZWdpb24/OiBNTFByb2R1Y3RDb25maWcgfCBudWxsO1xufVxuZXhwb3J0IGVudW0gTUxQcm9kdWN0Q29uZmlnIHtcbiAgICBSRUdJT05fRFJfQ0hJTkEgPSAxMDAyLFxuICAgIFJFR0lPTl9EUl9BRklMQSA9IDEwMDMsXG4gICAgUkVHSU9OX0RSX0VVUk9QRSA9IDEwMDQsXG4gICAgUkVHSU9OX0RSX1JVU1NJQSA9IDEwMDUsXG4gICAgUkVHSU9OX0RSX0dFUk1BTiA9IDEwMDYsXG4gICAgUkVHSU9OX0RSX1NJQU5HQVBPUkUgPSAxMDA3LFxufVxuXG5cblxuLy9UZXh0IEFuYWx5c2VyXG5cbmV4cG9ydCBpbnRlcmZhY2UgbG9jYWxJbWFnZVRleHRSZXEge1xuICAgIG9jclR5cGU6IE1MVGV4dENvbmZpZztcbiAgICBhbmFseXNlTW9kZT86IG51bWJlcjtcbiAgICBsb2NhbFRleHRTZXR0aW5nPzogbG9jYWxUZXh0U2V0dGluZyB8IG51bGw7XG4gICAgZmlsZVBhdGg6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBsb2NhbFRleHRTZXR0aW5nIHtcbiAgICBvY3JNb2RlPzogTUxMb2NhbFRleHRTZXR0aW5nO1xuICAgIGxhbmd1YWdlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBNTExvY2FsVGV4dFNldHRpbmcge1xuICAgIE9DUl9ERVRFQ1RfTU9ERSA9IDEsXG4gICAgT0NSX1RSQUNLSU5HX01PREUgPSAyLFxufVxuZXhwb3J0IGVudW0gTUxUZXh0Q29uZmlnIHtcbiAgICBPQ1JfTE9DQUxfVFlQRSA9IDAsXG4gICAgT0NSX1JFTU9URV9UWVBFID0gMSxcbn1cbmV4cG9ydCBpbnRlcmZhY2UgcmVtb3RlSW1hZ2VUZXh0UmVxIHtcbiAgICBvY3JUeXBlOiBNTFRleHRDb25maWc7XG4gICAgYW5hbHlzZU1vZGU/OiBudW1iZXI7XG4gICAgcmVtb3RlVGV4dFNldHRpbmc/OiByZW1vdGVUZXh0U2V0dGluZztcbiAgICBmaWxlUGF0aDogYW55O1xufVxuZXhwb3J0IGludGVyZmFjZSByZW1vdGVUZXh0U2V0dGluZyB7XG4gICAgdGV4dERlbnNpdHlTY2VuZT86IE1MUmVtb3RlVGV4dFNldHRpbmc7XG4gICAgbGFuZ3VhZ2VMaXN0PzogQXJyYXk8c3RyaW5nPjtcbiAgICBib3JkZXJUeXBlPzogTUxSZW1vdGVUZXh0U2V0dGluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTEJhbmtDYXJkIHtcbiAgICBudW1iZXI6IHN0cmluZztcbiAgICBleHBpcmU6IHN0cmluZztcbiAgICBpc3N1ZXI6IHN0cmluZztcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgb3JnYW5pemF0aW9uOiBzdHJpbmc7XG4gICAgb3JpZ2luYWxCaXRtYXA6IGFueTtcbiAgICBudW1iZXJCaXRtYXA6IGFueTtcbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIEJvcmRlciB7XG4gICAgYm90dG9tOiBudW1iZXI7XG4gICAgdG9wOiBudW1iZXI7XG4gICAgbGVmdDogbnVtYmVyO1xuICAgIHJpZ2h0OiBudW1iZXI7XG4gICAgZXhhY3RDZW50ZXJYOiBudW1iZXI7XG4gICAgY2VudGVyWTogbnVtYmVyO1xuICAgIGNlbnRlclg6IG51bWJlcjtcbiAgICBkZXNjcmliZUNvbnRlbnRzOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgd2lkdGg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTERvY3VtZW50IHtcbiAgICBzdHJpbmdWYWx1ZTogc3RyaW5nO1xuICAgIGJsb2Nrcz86IEJsb2Nrc1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlTGlzdCB7XG4gICAgbGFuZ3VhZ2U6IHN0cmluZztcbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIE1MVm5JY3JDYXB0dXJlUmVzdWx0IHtcbiAgICBiaXJ0aGRheTogc3RyaW5nO1xuICAgIGNhcmRCaXRtYXA6IEJpdG1hcDtcbiAgICBpZE51bTogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBzZXg6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTENuSWNyQ2FwdHVyZVJlc3VsdCB7XG4gICAgYmlydGhkYXk6IHN0cmluZztcbiAgICBjYXJkQml0bWFwOiBCaXRtYXA7XG4gICAgaWROdW06IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgc2V4OiBzdHJpbmc7XG4gICAgbmF0aW9uOiBzdHJpbmc7XG4gICAgYWRkcmVzczogc3RyaW5nO1xuICAgIGF1dGhvcml0eTogc3RyaW5nO1xuICAgIHZhbGlkRGF0ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MSWNyQ2FwdHVyZVJlc3VsdCB7XG4gICAgYmlydGhkYXk6IHN0cmluZztcbiAgICBjYXJkQml0bWFwOiBCaXRtYXA7XG4gICAgaWROdW06IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgc2V4OiBzdHJpbmc7XG4gICAgbmF0aW9uOiBzdHJpbmc7XG4gICAgYWRkcmVzczogc3RyaW5nO1xuICAgIHZhbGlkRGF0ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MR2NyQ2FwdHVyZVJlc3VsdCB7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIGNhcmRCaXRtYXA6IEJpdG1hcDtcbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIFJlY3Qge1xuICAgIGJvdHRvbTogbnVtYmVyO1xuICAgIHRvcDogbnVtYmVyO1xuICAgIGxlZnQ6IG51bWJlcjtcbiAgICByaWdodDogbnVtYmVyO1xuICAgIGV4YWN0Q2VudGVyWDogbnVtYmVyO1xuICAgIGNlbnRlclk6IG51bWJlcjtcbiAgICBjZW50ZXJYOiBudW1iZXI7XG4gICAgZGVzY3JpYmVDb250ZW50czogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQml0bWFwIHtcbiAgICBtR2FsbGVyeUNhY2hlZDogYm9vbGVhbjtcbiAgICBtSGVpZ2h0OiBudW1iZXI7XG4gICAgbU5hdGl2ZVB0cjogbnVtYmVyO1xuICAgIG1XaWR0aDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MVGV4dCB7XG4gICAgc3RyaW5nVmFsdWU6IHN0cmluZztcbiAgICBibG9ja3M/OiBCbG9ja3NbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQmxvY2tzIHtcbiAgICBjb250ZW50cz86IENvbnRlbnRzW107XG59XG5leHBvcnQgaW50ZXJmYWNlIENvbnRlbnRzIHtcbiAgICBzdHJpbmdWYWx1ZTogc3RyaW5nO1xuICAgIGJvcmRlcjogQm9yZGVyO1xuICAgIGxhbmd1YWdlOiBzdHJpbmc7XG4gICAgbGFuZ3VhZ2VMaXN0PzogTGFuZ3VhZ2VMaXN0W107XG4gICAgdmVydGV4ZXM/OiBWZXJ0ZXhlc1tdO1xufVxuZXhwb3J0IGludGVyZmFjZSBMYW5ndWFnZUxpc3Qge1xuICAgIGxhbmd1YWdlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFZlcnRleGVzIHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIGRlc2NyaWJlQ29udGVudHM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTEZvcm1SZWNvZ2l0aW9uUmVzdWx0IHtcbiAgICByZXRDb2RlOiBudW1iZXI7XG4gICAgdGFibGVDb250ZW50OiBUYWJsZUNvbnRlbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVDb250ZW50IHtcbiAgICB0YWJsZUNvdW50OiBudW1iZXI7XG4gICAgdGFibGVzPzogVGFibGVzRW50aXR5W10gfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBUYWJsZXNFbnRpdHkge1xuICAgIHRhYmxlSUQ6IG51bWJlcjtcbiAgICBoZWFkZXJJbmZvOiBzdHJpbmc7XG4gICAgZm9vdGVySW5mbzogc3RyaW5nO1xuICAgIHRhYmxlQm9keT86IFRhYmxlQm9keUVudGl0eVtdIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVCb2R5RW50aXR5IHtcbiAgICBzdGFydFJvdzogbnVtYmVyO1xuICAgIGVuZFJvdzogbnVtYmVyO1xuICAgIHN0YXJ0Q29sOiBudW1iZXI7XG4gICAgZW5kQ29sOiBudW1iZXI7XG4gICAgY2VsbENvb3JkaW5hdGU6IENlbGxDb29yZGluYXRlO1xuICAgIHRleHRJbmZvOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIENlbGxDb29yZGluYXRlIHtcbiAgICB0b3BMZWZ0X3g6IG51bWJlcjtcbiAgICB0b3BMZWZ0X3k6IG51bWJlcjtcbiAgICB0b3BSaWdodF94OiBudW1iZXI7XG4gICAgdG9wUmlnaHRfeTogbnVtYmVyO1xuICAgIGJvdHRvbUxlZnRfeDogbnVtYmVyO1xuICAgIGJvdHRvbUxlZnRfeTogbnVtYmVyO1xuICAgIGJvdHRvbVJpZ2h0X3g6IG51bWJlcjtcbiAgICBib3R0b21SaWdodF95OiBudW1iZXI7XG59XG5cbmV4cG9ydCBlbnVtIENvbG9ycyB7XG4gICAgUkVEID0gLTY1NTM2LFxuICAgIERLR1JBWSA9IC0xMjMwMzI5MixcbiAgICBHUkFZID0gLTc4MjkzNjgsXG4gICAgV0hJVEUgPSAtMSxcbiAgICBCTFVFID0gLTE2Nzc2OTYxLFxuICAgIEJMQUNLID0gLTE2Nzc3MjE2LFxuICAgIExUR1JBWSA9IC0zMzU1NDQ0LFxuICAgIE1BR0VOVEEgPSAtNjUyODEsXG4gICAgWUVMTE9XID0gLTI1NixcbiAgICBDWUFOID0gLTE2NzExNjgxLFxuICAgIEdSRUVOID0gLTE2NzExOTM2LFxuICAgIFRSQU5TUEFSRU5UID0gMCxcbn1cblxuZXhwb3J0IGVudW0gQ29yZG92YUVycm9ycyB7XG4gICAgVU5LTk9XTiA9IC0xLFxuICAgIFNVQ0NFU1MgPSAwLFxuICAgIERJU0NBUkRFRCA9IDEsXG4gICAgSU5ORVIgPSAyLFxuICAgIElOQUNUSVZFID0gMyxcbiAgICBOT1RfU1VQUE9SVEVEID0gNCxcbiAgICBJTExFR0FMX1BBUkFNRVRFUiA9IDUsXG4gICAgT1ZFUkRVRSA9IDYsXG4gICAgTk9fRk9VTkQgPSA3LFxuICAgIERVUExJQ0FURV9GT1VORCA9IDgsXG4gICAgTk9fUEVSTUlTU0lPTiA9IDksXG4gICAgSU5TVUZGSUNJRU5UX1JFU09VUkNFID0gMTAsXG4gICAgQU5BTFlTSVNfRkFJTFVSRSA9IDExLFxuICAgIElOVEVSUlVQVEVEID0gMTIsXG4gICAgRVhDRUVEX1JBTkdFID0gMTMsXG4gICAgREFUQV9NSVNTSU5HID0gMTQsXG4gICAgQVVUSEVOVElDQVRJT05fUkVRVUlSRUQgPSAxNSxcbiAgICBURkxJVEVfTk9UX0NPTVBBVElCTEUgPSAxNixcbiAgICBJTlNVRkZJQ0lFTlRfU1BBQ0UgPSAxNyxcbiAgICBIQVNIX01JU1MgPSAxOCxcbiAgICBUT0tFTl9JTlZBTElEID0gMTksXG4gICAgU0VSVklDRV9GQUlMVVJFID0gMjAsXG4gICAgQU5BTFlTSVNfTlVMTCA9IDIxLFxufVxuXG5cbmV4cG9ydCBlbnVtIFJlZ2lvbiB7XG5SRUdJT05fRFJfVU5LTk9XTiA9IDEwMDEsXG5SRUdJT05fRFJfQ0hJTkEgPSAxMDAyLFxuUkVHSU9OX0RSX1JVU1NJQSA9IDEwMDUsXG5SRUdJT05fRFJfR0VSTUFOID0gMTAwNixcblJFR0lPTl9EUl9TSU5HQVBPUkUgPSAxMDA3XG59XG4iXX0=