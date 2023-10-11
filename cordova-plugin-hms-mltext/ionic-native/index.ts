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

import { Injectable } from "@angular/core";
import {
    Plugin,
    Cordova,
    CordovaProperty, 
    IonicNativePlugin,
} from "@ionic-native/core";

@Plugin({
    pluginName: "HMSMLTextPlugin",
    plugin: "cordova-plugin-hms-mltext", // npm package name, example: cordova-plugin-camera
    pluginRef: "HMSMLTextPlugin", // the variable reference to call the plugin, example: navigator.geolocation
    platforms: ["Android"], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class HMSMLTextPlugin extends IonicNativePlugin {
    @CordovaProperty()
    MLLocalTextSetting = MLLocalTextSetting;
    @CordovaProperty()
    icrVnCaptureType = icrCaptureType;
    @CordovaProperty()
    MLTextConfig = MLTextConfig;
    @CordovaProperty()
    MLRemoteTextSetting = MLRemoteTextSetting;
    @CordovaProperty()
    MLBcrCaptureConfig = MLBcrCaptureConfig;
    @CordovaProperty()
    MLGcrCaptureUIConfig = MLGcrCaptureUIConfig;
    @CordovaProperty()
    MLBcrResultConfig = MLBcrResultConfig;
    @CordovaProperty()
    ImgSuperResolutionConfig = ImgSuperResolutionConfig;
    @CordovaProperty()
    MLFormRecogitionConfig = MLFormRecogitionConfig;
    @CordovaProperty()
    MLProductConfig = MLProductConfig;
    @CordovaProperty()
    gcrCaptureType = gcrCaptureType;
    @CordovaProperty()
    Colors = Colors;

    @Cordova({ otherPromise: true })
    /**
     * Monitors photographing.
     * @returns Promise<any>
     */
    photograph(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * Close lens engine.
     * @returns Promise<any>
     */
    destroy(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * Obtains the size of the preview image of a camera.
     * @returns Promise<any>
     */
    getDisplayDimension(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * An app information class used to store basic information about apps with the HMS Core ML SDK integrated and complete the initialization of ML Text Kit. When using cloud services of the ML Text Kit, you need to set the apiKey of your app.
     * @param  {appSettingReq} appSettingReq Represents the parameter required.
     * @returns Promise<any>
     */
    appSetting(appSettingReq: appSettingReq): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * Determines whether to collect statistics on the current app.
     * @param {any} any
     * @returns Promise<any>
     */
    setStatistic(any: any): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * Determines whether to collect statistics on the current app.
     ** @param {any} any
     *  @returns Promise<any>
     */
    getStatistic(any: any): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This service enable logger service.
     * @returns Promise<any>
     */
    enableLogger(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This service disable logger service.
     * @returns Promise<any>
     */
    disableLogger(): Promise<any> {
        return;
    }
}
@Plugin({
    pluginName: "HMSMLText",
    plugin: "cordova-plugin-hms-mltext", // npm package name, example: cordova-plugin-camera
    pluginRef: "HMSMLText", // the variable reference to call the plugin, example: navigator.geolocation
    platforms: ["Android"], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class HMSMLText extends IonicNativePlugin {
    @CordovaProperty()
    icrVnCaptureType = icrCaptureType;
    @CordovaProperty()
    gcrCaptureType = gcrCaptureType;
    @CordovaProperty()
    MLLocalTextSetting = MLLocalTextSetting;
    @CordovaProperty()
    MLTextConfig = MLTextConfig;
    @CordovaProperty()
    MLRemoteTextSetting = MLRemoteTextSetting;
    @CordovaProperty()
    MLBcrCaptureConfig = MLBcrCaptureConfig;
    @CordovaProperty()
    MLGcrCaptureUIConfig = MLGcrCaptureUIConfig;
    @CordovaProperty()
    MLBcrResultConfig = MLBcrResultConfig;
    @CordovaProperty()
    ImgSuperResolutionConfig = ImgSuperResolutionConfig;
    @CordovaProperty()
    MLFormRecogitionConfig = MLFormRecogitionConfig;
    @CordovaProperty()
    MLProductConfig = MLProductConfig;
    @CordovaProperty()
    Colors = Colors;
    @CordovaProperty()
    RecMode = RecMode;

    @Cordova({ otherPromise: true })
    /**
     * This method start the Text analyzer.
     * @param  {localImageTextReq|remoteImageTextReq} ImageTextAnalyserInput Reperesents the necessary parameters to convert images to text format.
     * @returns Promise <TextAnalyser>
     */
    imageTextAnalyser(
        ImageTextAnalyserInput: localImageTextReq | remoteImageTextReq
    ): Promise<MLText> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method stop the Text analyzer.
     * @returns Promise<any>
     */
    stopTextAnalyser(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method gives Text Analyser information.
     * @returns Promise<any>
     */
    getTextAnalyserInfo(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method provides a document recognition component that recognizes text from images of documents.
     * @param  {documentImageAnalyserReq} documentImageAnalyserReq Reperesents the necessary parameter to convert document images to text format.
     * @returns Promise<DocumentAnalyser>
     */
    documentImageAnalyser(
        documentImageAnalyserReq: documentImageAnalyserReq
    ): Promise<MLDocument> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method stop the Document analyzer.
     * @returns Promise<any>
     */
    stopDocumentImageAnalyser(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method close the Document analyzer.
     * @returns Promise<any>
     */
    closeDocumentImageAnalyser(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method returns the Document analyzer setting.
     * @returns Promise<any>
     */
    getDocumentImageAnalyserSetting(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method returns the Image analyzer setting.
     * @returns Promise<any>
     */
    getTextAnalyserSetting(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method returns the GCR setting.
     * @returns Promise<any>
     */
    getGCRSetting(): Promise<gcrSettingResults> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method stop the Form Recognition Analyzer.
     * @returns Promise<any>
     */
    stopFormRecognitionAnalyser(): Promise<any> {
        return;
    }
    /**
     * The bank card recognition service recognizes bank cards in camera streams within angle offset of 15 degrees and extracts key information such as card number and validity period.
     * @param  {bankCardSDKDetectorReq|bankCardPluginDetectorReq} bankCardDetecterInput Represents the parameter required for bank card recognition.
     * @returns Promise<BankCardAnalyser> | Promise<BankCardAnalyser>
     */
    bankCardDetector(
        bankCardDetecterInput:
            | bankCardSDKDetectorReq
            | bankCardPluginDetectorReq
    ): Promise<MLBankCard> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method stop bankcard recognition service.
     * @returns Promise<any>
     */
    stopBankCardDetector(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    setResultTypeBcr(mLBcrCaptureConfig: mLBcrCaptureConfig): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    setRecModeBcr(mLBcrCaptureConfig: mLBcrCaptureConfig): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method returns the BCR setting.
     * @returns Promise<any>
     */
    getBankCardDetectorSetting(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * The general card recognition service provides a universal development framework based on the text recognition technology.
     * @param  {generalCardDetectorReq} generalCardDetectorReq Represents the parameter required for general card recognition plug-in.
     * @returns Promise<GeneralCardAnalyser>
     */
    generalCardDetector(
        generalCardDetectorReq: generalCardDetectorReq
    ): Promise<MLGcrCaptureResult> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * The general Vietnam id card  recognition service provides a universal development framework based on the text recognition technology.
     * @param  {icrVnDetectorReq} icrVnDetectorReq Represents the parameter required for general card recognition plug-in.
     * @returns Promise<MLVnIcrCaptureResult>
     */
    icrVnCardDetector(
        icrVnDetectorReq: icrVnDetectorReq
    ): Promise<MLVnIcrCaptureResult> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * The form recognition service uses AI technologies to recognize and return form structure information (including rows, columns, and coordinates of cells) and form text in Chinese and English (including punctuation) from input images.
     * @param  {formRecognizerAnalyserReq} formRecognizerAnalyserReq Represents the parameter required for general card recognition plug-in.
     * @returns Promise<GeneralCardAnalyser>
     */
    formRecognitionAnalyser(
        formRecognizerAnalyserReq: formRecognizerAnalyserReq
    ): Promise<MLGcrCaptureResult> {
        return;
    }
    @Cordova({ otherPromise: true })
    icrLocalAnalyser(
        localAnalyserReq: localAnalyserReq
    ): Promise<MLIcrCaptureResult> {
        return;
    }

    @Cordova({ otherPromise: true })
    icrLocalAnalyserCreateIdCard(
        createIdCardReq: createIdCardReq
    ): Promise<any> {
        return;
    }

    @Cordova({ otherPromise: true })
    icrLocalAnalyserStop(): Promise<any> {
        return;
    }

    @Cordova({ otherPromise: true })
    geticrCnCardInstance(): Promise<any> {
        return;
    }

    @Cordova({ otherPromise: true })
    icrCnCardCreate(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    geticrVnCardInstance(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    icrVnCardCreate(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    getIcrVnCapture(): Promise<any> {
        return;
    }

    @Cordova({ otherPromise: true })
    startCustomizedView(userProps: CustomViewModeRequest): Promise<MLBankCard> {
        return;
    }
    @Cordova({ otherPromise: true })
    switchLight(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    getLightStatus(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    setUserRegion(region: Region): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    getCountryCode(): Promise<string> {
        return;
    }
}

export interface CustomViewModeRequest {
    isTitleAvailable: boolean;
    title: string;
    heightFactor: number;
    widthFactor: number;
    isFlashAvailable: boolean;
    resultType: MLBcrResultConfig;
    recMode: RecMode;
 }

// API KEY

export interface configReq {
    apiKey: string;
}

export interface appSettingReq {
    apiKey?: string | null;
    applicationId?: string | null;
    certFingerprint?: string | null;
} 


// SDK BANK CARD ANALYSER

export interface bankCardSDKDetectorReq {
    filePath: any;
    detectType: 0;
    mLBcrAnalyzerSetting?: MLBcrAnalyzerSetting | null;
}

export interface MLBcrAnalyzerSetting {
    langType?: string | null;
    resultType?: MLBcrResultConfig | null;
}

// PLUGIN BANK CARD ANALYSER

export interface bankCardPluginDetectorReq {
    detectType: 1;
    mLBcrCaptureConfig?: mLBcrCaptureConfig | null;
}

export interface mLBcrCaptureConfig {
    orientation?: MLBcrCaptureConfig | null;
    resultType?: MLBcrResultConfig | null;
    recMode?: RecMode | null;
}

export enum RecMode {
    WEAK_MODE = 0,
    STRICT_MODE = 1,
}

export enum MLBcrCaptureConfig {
    ERROR_CODE_INIT_CAMERA_FAILED = 10101,
    RESULT_NUM_ONLY = 0,
    ORIENTATION_AUTO = 0,
    WEAK_MODE = 0,
    ORIENTATION_LANDSCAPE = 1,
    ORIENTATION_PORTRAIT = 2,
    RESULT_ALL = 2,
    RESULT_SIMPLE = 1,
    STRICT_MODE = 1,
}
export enum MLBcrResultConfig {
    RESULT_NUM_ONLY = 0,
    RESULT_SIMPLE = 1,
    RESULT_ALL = 2,
}

export interface MLBcrCaptureResult {
    errorCode?: MLBcrCaptureErrorCode | null;
    expire?: String | null;
    issuer?: String | null;
    number?: String | null;
    numberBitmap?: any;
    organization?: String | null;
    riginalBitmap?: any;
    type?: String | null;
}

export enum MLBcrCaptureErrorCode {
    ERROR_CODE_INIT_CAMERA_FAILED = 10101,
}


//Document Analyser

export interface documentImageAnalyserReq {
    documentSetting?: DocumentSetting | null;
    filePath: any;
}
export interface DocumentSetting {
    borderType?: MLRemoteTextSetting | null;
    languageList?: Array<string> | null;
    enableFingerprintVerification: boolean | null;
}

export enum MLRemoteTextSetting {
    OCR_LOOSE_SCENE = 1,
    OCR_COMPACT_SCENE = 2,
    NGON = "NGON",
    ARC = "ARC",
    OTHER = 5,
    NEW_LINE_CHARACTER = 8,
    SPACE = 6,
}



//Form Recognizer Analyser

export interface formRecognizerAnalyserReq {
    filePath: any;
    syncType: MLFormRecogitionConfig;
}
export enum MLFormRecogitionConfig {
    SYNC_TYPE = 1,
    ASYNC_TYPE = 0,
}

// GENERAL CARD ANALYSER

export interface generalCardDetectorReq {
    gcrCaptureConfig?: gcrCaptureConfig;
    gcrCaptureUIConfig?: gcrCaptureUIConfig;
    captureType?: gcrCaptureType | null;
}

export interface gcrCaptureConfig {
    language: string;
}
export enum gcrCaptureType {
    CAPTURE_ACTIVITY = 0,
    CAPTURE_PHOTO = 1,
    CAPTURE_IMAGE = 2,
}
export interface gcrCaptureUIConfig {
    orientation?: MLGcrCaptureUIConfig | null;
    tipText?: string | null;
    tipTextColor?: number | null;
    photoButtonResId?: number | null;
    scanBoxCornerColor?: number | null;
    backButtonRedId?: number | null;
    torchRedId?: number | null;
}
export interface gcrSettingResults {
    gcrConfigLanguage: String;
    torchOnResId: number;
    tipTextColor: number;
    tipText: String;
    backButtonResId: number;
    orientation: number;
    photoButtonResId: number;
    scanBoxScreenRatio: number;
    scanBoxCornerColor: number;
    scanBoxAspectRatio: number;
}

export enum MLGcrCaptureUIConfig {
    ORIENTATION_AUTO = 0,
    ORIENTATION_LANDSCAPE = 1,
    ORIENTATION_PORTRAIT = 2,
}

// ID CARD ANALYSER

export interface icrVnDetectorReq {
    captureType: icrCaptureType;
    filePath?: any | null;
}

export interface icrCnDetectorReq {
    captureType: icrCaptureType;
    filePath?: any | null;
    isFront?: boolean | null;
}

export enum icrCaptureType {
    CAPTURE_CAMERA = 0,
    CAPTURE_IMAGE = 1,
}

export interface createIdCardReq {
    mlIcrAnalyzerSetting?: MLIcrAnalyzerSetting | null;
}

export interface localAnalyserReq {
    settings: MLIcrAnalyzerSetting;
    filePath?: any | null;
}
export interface MLIcrAnalyzerSetting {
    countryCode: string;
    hashCode?: number | null;
    sideType?: MLIcrSideType | null;
}

export enum MLIcrSideType {
    FRONT = "FRONT",
    BACK = "BACK",
}


//Image Super Resolution

export interface imageSuperResolutionReq {
    filePath: any;
    imgSuperResolutionSetting?: ImgSuperResolutionSetting | null;
    syncType?: MLFormRecogitionConfig | null;
}
export interface ImgSuperResolutionSetting {
    scaleType?: ImgSuperResolutionConfig;
}
export enum ImgSuperResolutionConfig {
    ISR_SCALE_1X = 1.0,
    ISR_SCALE_3X = 3.0,
}

//Product Vision Analyser

export interface productReq {
    filePath?: any | null;
    detectType?: number;
    mlProductSetting?: mlProductSetting | null;
}
export interface mlProductSetting {
    largestNumOfReturns?: number | null;
    productSetId?: string | null;
    region?: MLProductConfig | null;
}
export enum MLProductConfig {
    REGION_DR_CHINA = 1002,
    REGION_DR_AFILA = 1003,
    REGION_DR_EUROPE = 1004,
    REGION_DR_RUSSIA = 1005,
    REGION_DR_GERMAN = 1006,
    REGION_DR_SIANGAPORE = 1007,
}



//Text Analyser

export interface localImageTextReq {
    ocrType: MLTextConfig;
    analyseMode?: number;
    localTextSetting?: localTextSetting | null;
    filePath: any;
}

export interface localTextSetting {
    ocrMode?: MLLocalTextSetting;
    language?: string;
}

export enum MLLocalTextSetting {
    OCR_DETECT_MODE = 1,
    OCR_TRACKING_MODE = 2,
}
export enum MLTextConfig {
    OCR_LOCAL_TYPE = 0,
    OCR_REMOTE_TYPE = 1,
}
export interface remoteImageTextReq {
    ocrType: MLTextConfig;
    analyseMode?: number;
    remoteTextSetting?: remoteTextSetting;
    filePath: any;
}
export interface remoteTextSetting {
    textDensityScene?: MLRemoteTextSetting;
    languageList?: Array<string>;
    borderType?: MLRemoteTextSetting;
}

export interface MLBankCard {
    number: string;
    expire: string;
    issuer: string;
    type: string;
    organization: string;
    originalBitmap: any;
    numberBitmap: any;
}


export interface Border {
    bottom: number;
    top: number;
    left: number;
    right: number;
    exactCenterX: number;
    centerY: number;
    centerX: number;
    describeContents: number;
    height: number;
    width: number;
}

export interface MLDocument {
    stringValue: string;
    blocks?: Blocks[];
}

export interface LanguageList {
    language: string;
}


export interface MLVnIcrCaptureResult {
    birthday: string;
    cardBitmap: Bitmap;
    idNum: string;
    name: string;
    sex: string;
}

export interface MLCnIcrCaptureResult {
    birthday: string;
    cardBitmap: Bitmap;
    idNum: string;
    name: string;
    sex: string;
    nation: string;
    address: string;
    authority: string;
    validDate: string;
}

export interface MLIcrCaptureResult {
    birthday: string;
    cardBitmap: Bitmap;
    idNum: string;
    name: string;
    sex: string;
    nation: string;
    address: string;
    validDate: string;
}

export interface MLGcrCaptureResult {
    text: string;
    cardBitmap: Bitmap;
}


export interface Rect {
    bottom: number;
    top: number;
    left: number;
    right: number;
    exactCenterX: number;
    centerY: number;
    centerX: number;
    describeContents: number;
    height: number;
    width: number;
}

export interface Bitmap {
    mGalleryCached: boolean;
    mHeight: number;
    mNativePtr: number;
    mWidth: number;
}

export interface MLText {
    stringValue: string;
    blocks?: Blocks[];
}
export interface Blocks {
    contents?: Contents[];
}
export interface Contents {
    stringValue: string;
    border: Border;
    language: string;
    languageList?: LanguageList[];
    vertexes?: Vertexes[];
}
export interface LanguageList {
    language: string;
}
export interface Vertexes {
    x: number;
    y: number;
    describeContents: number;
}

export interface MLFormRecogitionResult {
    retCode: number;
    tableContent: TableContent;
}

export interface TableContent {
    tableCount: number;
    tables?: TablesEntity[] | null;
}
export interface TablesEntity {
    tableID: number;
    headerInfo: string;
    footerInfo: string;
    tableBody?: TableBodyEntity[] | null;
}
export interface TableBodyEntity {
    startRow: number;
    endRow: number;
    startCol: number;
    endCol: number;
    cellCoordinate: CellCoordinate;
    textInfo: string;
}
export interface CellCoordinate {
    topLeft_x: number;
    topLeft_y: number;
    topRight_x: number;
    topRight_y: number;
    bottomLeft_x: number;
    bottomLeft_y: number;
    bottomRight_x: number;
    bottomRight_y: number;
}

export enum Colors {
    RED = -65536,
    DKGRAY = -12303292,
    GRAY = -7829368,
    WHITE = -1,
    BLUE = -16776961,
    BLACK = -16777216,
    LTGRAY = -3355444,
    MAGENTA = -65281,
    YELLOW = -256,
    CYAN = -16711681,
    GREEN = -16711936,
    TRANSPARENT = 0,
}

export enum CordovaErrors {
    UNKNOWN = -1,
    SUCCESS = 0,
    DISCARDED = 1,
    INNER = 2,
    INACTIVE = 3,
    NOT_SUPPORTED = 4,
    ILLEGAL_PARAMETER = 5,
    OVERDUE = 6,
    NO_FOUND = 7,
    DUPLICATE_FOUND = 8,
    NO_PERMISSION = 9,
    INSUFFICIENT_RESOURCE = 10,
    ANALYSIS_FAILURE = 11,
    INTERRUPTED = 12,
    EXCEED_RANGE = 13,
    DATA_MISSING = 14,
    AUTHENTICATION_REQUIRED = 15,
    TFLITE_NOT_COMPATIBLE = 16,
    INSUFFICIENT_SPACE = 17,
    HASH_MISS = 18,
    TOKEN_INVALID = 19,
    SERVICE_FAILURE = 20,
    ANALYSIS_NULL = 21,
}


export enum Region {
REGION_DR_UNKNOWN = 1001,
REGION_DR_CHINA = 1002,
REGION_DR_RUSSIA = 1005,
REGION_DR_GERMAN = 1006,
REGION_DR_SINGAPORE = 1007
}
