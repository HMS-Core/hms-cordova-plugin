/*
    Copyright 2020-2021. Huawei Technologies Co., Ltd. All rights reserved.

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
import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name HMSScan
 * @description
 * Cordova Scan Plugin enables communication between the HMS Core Scan SDK and Cordova platform. This plugin demonstrates wide-ranging functionality of the HMS Core Scan SDK.
 *
 * @usage
 * ```typescript
 * import { HMSScan } from '@ionic-native/hms-scan';
 *
 *
 * constructor(private hmsScan: HMSScan) { }
 *
 * ...
 *
 *
 * this.hmsScan.defaultViewMode(Request)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class HMSScan extends IonicNativePlugin {
    Colors: typeof Colors;
    ScanTypes: typeof ScanTypes;
    RectStyle: typeof RectStyle;
    Permission: typeof HMSPermission;
    ErrorCorrectionLevel: typeof ErrorCorrectionLevel;
    /**
     * Checks whether necessary permissions are granted to use the services.
     * @param  {Permission} permission Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    hasPermission(permission: HMSPermission): Promise<any>;
    /**
     * Obtains a permission to use the services.
     * @param  {Permission} permission Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    requestPermission(permission: HMSPermission): Promise<any>;
    /**
     * Obtains a permissions to use the services.
     * @param  {Permission[]} permissions Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    requestPermissions(permissions: HMSPermission[]): Promise<any>;
    /**
     * Enables the HMSLogger capability which is used for sending usage analytics of Scan SDK's methods to improve the service quality.
     * @returns Promise<any>
     */
    enableLogger(): Promise<any>;
    /**
     * Disables the HMSLogger capability which is used for sending usage analytics of Scan SDK's methods to improve the service quality.
     * @returns Promise<any>
     */
    disableLogger(): Promise<any>;
    /**
     * In Default View mode, Scan Kit scans barcodes using the camera or from images in the album, and also provides activities that can be directly used.
     * @param  {ScanTypes[]} scanTypes Sets the barcode scanning format..
     * @returns Promise<any>
     */
    defaultViewMode(scanTypes: ScanTypes[]): Promise<any>;
    /**
     * This service works asynchronously, defines the bitmap given as a parameter, and returns the Scan results.
     * @param  {string} filePath The URI of the photo requested to be scanned by the service.
     * @param  {ScanTypes[]} scanTypes Sets the barcode scanning format.
     * @returns Promise<any>
     */
    analyzInAsyn(filePath: string, scanTypes: ScanTypes[]): Promise<any>;
    /**
     * This service works synchronously, defines the bitmap given as a parameter, and returns the Scan results.
     * @param  {string} filePath The URI of the photo requested to be scanned by the service.
     * @param  {ScanTypes[]} scanTypes Sets the barcode scanning format.
     * @returns Promise<any>
     */
    analyseFrame(filePath: string, scanTypes: ScanTypes[]): Promise<any>;
    /**
     * The service recognition scanning barcodes from images in Bitmap mode.
     * @param  {string} filePath The URI of the photo requested to be scanned by the service.
     * @param  {ScanTypes[]} scanTypes Sets the barcode scanning format.
     * @returns Promise<any>
     */
    decodeWithBitmap(filePath: string, scanTypes: ScanTypes[]): Promise<any>;
    /**
     * Scan Kit can convert character strings into 1D or 2D barcodes in 13 formats, including EAN-8, EAN-13, UPC-A, UPC-E, Codabar, Code 39, Code 93, Code 128, ITF, QR code, Data Matrix, PDF417, and Aztec. Besides a character string, you still need to specify the format and size for generating a barcode.
     * @param  {BuildBitmapRequest} buildBitmapRequest Contains the settings of the barcode generation service.
     * @returns Promise<any>
     */
    buildBitmap(buildBitmapRequest: BuildBitmapRequest): Promise<any>;
    /**
     * Obtains the bitmap from the corresponding file path, performs sampling rate compression, and returns the bitmap that meets the size requirements.
     * @param  {string} filePath The URI of the photo requested to be scanned by the service.
     * @param  {ScanTypes[]} scanTypes Sets the barcode scanning format.
     * @returns Promise<any>
     */
    detectForHmsDector(filePath: string, scanTypes: ScanTypes[]): Promise<any>;
}
export declare class MultiProcessor extends IonicNativePlugin {
    Colors: typeof Colors;
    ScanTypes: typeof ScanTypes;
    RectStyle: typeof RectStyle;
    Permission: typeof HMSPermission;
    ErrorCorrectionLevel: typeof ErrorCorrectionLevel;
    /**
      * The service process of using the MultiProcessor mode in synchronous mode.
      * @param  {string} divId ScanArea
      * @param  {MultiProcessorSynModeRequest} multiProcessorSynModeRequest Contains the settings of the multiProcessorSynMode service.
      * @returns Promise<any>
     */
    multiProcessorSynMode(divId: string, multiProcessorSynModeRequest: MultiProcessorModeRequest): Promise<any>;
    /**
     * The service process of using the MultiProcessor mode in asynchronous mode
      * @param  {string} divId ScanArea
      * @param  {MultiProcessorSynModeRequest} multiProcessorSynModeRequest Contains the settings of the multiProcessorSynMode service.
      * @returns Promise<any>
     */
    multiProcessorAsynMode(divId: string, multiProcessorAsynModeRequest: MultiProcessorModeRequest): Promise<any>;
    /**
     * It recognizes barcodes using the camera in Bitmap mode.
     * @param  {string} divId ScanArea
     * @param  {BitmapModeRequest} bitmapModeRequest Contains the settings of the BitmapMode service.
     * @returns Promise<any>
     */
    bitmapMode(divId: string, bitmapModeRequest: BitmapModeRequest): Promise<any>;
    /**
     * The service process of using the MultiProcessor and bitmap mode
      * @param  {string} eventName Event name.
      * @param  {(value: any) => void} call Method.
      * @returns void
     */
    on(eventName: string, call: (value: any) => void): void;
    /**
     * It stops the custom view mode service.
     * @returns Promise<any>
     */
    stopViewService(): Promise<any>;
}
export declare class CustomView extends IonicNativePlugin {
    Colors: typeof Colors;
    ScanTypes: typeof ScanTypes;
    RectStyle: typeof RectStyle;
    Permission: typeof HMSPermission;
    ErrorCorrectionLevel: typeof ErrorCorrectionLevel;
    /**
     * In Customized View mode, you do not need to worry about developing the scanning process or camera control.
     * @param  {string} divId ScanArea
     * @param  {CustomViewModeRequest} customViewModeRequest Contains the settings of the customViewMode service.
     * @returns Promise<any>
     */
    customViewMode(divId: string, customViewModeRequest: CustomViewModeRequest): Promise<any>;
    /**
     * It opens flush light.
     * @returns Promise<any>
     */
    openFlushLight(): Promise<any>;
    /**
     * It pause the continuously scan.
     * @returns Promise<any>
     */
    pauseContinuouslyScan(): Promise<any>;
    /**
     * The service process of using the MultiProcessor and bitmap mode
      * @param  {string} eventName Event name.
      * @param  {(value: any) => void} call Method.
      * @returns void
     */
    on(eventName: string, call: (value: any) => void): void;
    /**
     * It resume the continuously scan.
     * @returns Promise<any>
     */
    resumeContinuouslyScan(): Promise<any>;
    /**
     * It stops the custom view mode service.
     * @returns Promise<any>
     */
    stopViewService(): Promise<any>;
}
export interface CustomViewModeRequest {
    scanTypes: ScanTypes[] | ScanTypes;
    isContinuouslyScan?: boolean;
    enableReturnBitmap?: boolean;
    enableScanAreaBox?: boolean;
    scanFrameSize?: number;
}
export interface MultiProcessorModeRequest {
    scanTypes: ScanTypes[] | ScanTypes;
    scanFrameSize?: number;
    enableScanAreaBox?: boolean;
    enableDrawScanResult?: boolean;
    viewAttributes?: ViewAttributes;
}
export interface ViewAttributes {
    textColor?: Colors;
    textSize?: number;
    strokeWitdh?: number;
    rectColor?: Colors;
    rectStyle?: RectStyle;
}
export interface BuildBitmapRequest {
    inputContent: string;
    barcodeFormat: ScanTypes;
    barcodeWidth?: number;
    barcodeHeight?: number;
    hmsBuildBitmapOptions?: HMSBuildBitmapOptions;
}
export interface HMSBuildBitmapOptions {
    bitmapMargin?: number;
    bitmapColor?: Colors;
    bitmapBackgroundColor?: Colors;
    qrErrorCorrectionLevel?: ErrorCorrectionLevel;
    qrLogoBitmap?: string;
}
export interface BitmapModeRequest {
    scanTypes: ScanTypes[];
    scanFrameSize?: number;
    enableScanAreaBox?: boolean;
}
export interface ScanBounds {
    marginTop?: number;
    marginBottom?: number;
}
export declare enum HMSPermission {
    CAMERA = "android.permission.CAMERA",
    READ_EXTERNAL_STORAGE = "android.permission.READ_EXTERNAL_STORAGE"
}
export declare enum ErrorCorrectionLevel {
    L = "L",
    M = "M",
    Q = "Q",
    H = "H"
}
export declare enum Colors {
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
    TRANSPARENT = 0
}
export declare enum ScanTypes {
    OTHER_SCAN_TYPE = -1,
    ALL_SCAN_TYPE = 0,
    CODE128_SCAN_TYPE = 64,
    CODE39_SCAN_TYPE = 16,
    CODE93_SCAN_TYPE = 32,
    CODABAR_SCAN_TYPE = 4096,
    DATAMATRIX_SCAN_TYPE = 4,
    EAN13_SCAN_TYPE = 128,
    EAN8_SCAN_TYPE = 256,
    ITF14_SCAN_TYPE = 512,
    QRCODE_SCAN_TYPE = 1,
    UPCCODE_A_SCAN_TYPE = 1024,
    UPCCODE_E_SCAN_TYPE = 2048,
    PDF417_SCAN_TYPE = 8,
    AZTEC_SCAN_TYPE = 2
}
export declare enum RectStyle {
    STROKE = 0,
    FILL = 1,
    FILL_AND_STROKE = 2
}
export interface LayoutBounds {
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    marginBottom?: number;
}
export interface Props {
    x: number;
    y: number;
    width: number;
    height: number;
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    marginBottom?: number;
    pageXOffset?: number;
    pageYOffset?: number;
}
