/*
    Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

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
import { Observable } from 'rxjs';
/**
 * @name HMSScan
 * @description Cordova Scan Plugin enables communication between the HMS Core Scan SDK and Cordova platform. This plugin demonstrates wide-ranging functionality of the HMS Core Scan SDK.
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
    /**
     * It checks the permissions required to use this Kit.
     * @param {CheckPermissionInput} permissionListInput Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    checkPermissions(permissionListInput: CheckPermissionInput): Promise<any>;
    /**
     * It gets the necessary permissions
     * @param {RequestPermissionInput} permissionListInput Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    requestPermissions(permissionListInput: RequestPermissionInput): Promise<any>;
    /**
     * In Default View mode, Scan Kit scans barcodes using the camera or from images in the album, and also provides activities that can be directly used.
     * @param {DefaultViewModeRequest} defaultViewModeRequest Contains the settings of the defaultViewMode service.
     * @returns Promise<any>
     */
    defaultViewMode(defaultViewModeRequest: DefaultViewModeRequest): Promise<any>;
    /**
     * In Customized View mode, you do not need to worry about developing the scanning process or camera control.
     * @param {CustomViewModeRequest} customViewModeRequest Contains the settings of the customViewMode service.
     * @returns Promise<any>
     */
    customViewMode(customViewModeRequest: CustomViewModeRequest): Promise<any>;
    /**
     * The service process of using the MultiProcessor mode in synchronous mode
     * @param {MultiProcessorSynModeRequest} multiProcessorSynModeRequest Contains the settings of the multiProcessorSynMode service.
      * @param {any} success A callback function. It is called when function is executed successfully. It returns the results of barcode result.
      * @param {any} error A callback function. It is called when function is failed.
      * @returns callback
     */
    multiProcessorSynMode(multiProcessorSynModeRequest: MultiProcessorSynModeRequest): Observable<any>;
    /**
     * The service process of using the MultiProcessor mode in asynchronous mode
      * @param {MultiProcessorAsynModeRequest} multiProcessorAsynMode Contains the settings of the multiProcessorAsynMode service.
      * @param {any} success A callback function. It is called when function is executed successfully. It returns the results of barcode result.
      * @param {any} error A callback function. It is called when function is failed.
      * @returns callback
     */
    multiProcessorAsynMode(multiProcessorAsynModeRequest: MultiProcessorAsynModeRequest): Observable<any>;
    /**
     * Service that defines barcodes from given image objects with Asynmode.
     * @param {AsynModeWithImageRequest} asynModeWithImageRequest Contains the settings of the asynModeWithImage service.
     * @returns Promise<any>
     */
    asynModeWithImage(asynModeWithImageRequest: AsynModeWithImageRequest): Promise<any>;
    /**
     * Service that defines barcodes from given image objects with Synmode.
     * @param {SynModeWithImageRequest} synModeWithImageRequest Contains the settings of the synModeWithImage service.
     * @returns Promise<any>
     */
    synModeWithImage(synModeWithImageRequest: SynModeWithImageRequest): Promise<any>;
    /**
     * Service that defines barcodes from given bitmap.
     * @param {DecodeBitmapRequest} decodeBitmapRequest Contains the settings of the decodeWithBitmap service.
     * @returns Promise<any>
     */
    decodeWithBitmap(decodeBitmapRequest: DecodeWithBitmapRequest): Promise<any>;
    /**
     * Scan Kit can convert character strings into 1D or 2D barcodes in 13 formats, including EAN-8, EAN-13, UPC-A, UPC-E, Codabar, Code 39, Code 93, Code 128, ITF, QR code, Data Matrix, PDF417, and Aztec.
     * @param {GenerateBarcodeRequest} generateBarcodeRequest Barcode generation options.
     * @returns Promise<any>
     */
    generateBarcode(generateBarcodeRequest: GenerateBarcodeRequest): Promise<any>;
    /**
     *
      It recognizes barcodes using the camera in Bitmap mode.
     * @param {BitmapModeRequest} bitmapModeRequest Contains the settings of the BitmapMode service.
     * @returns Promise<any>
     */
    bitmapMode(bitmapModeRequest: BitmapModeRequest): Promise<any>;
    /**
     * Enables HMSLogger. HMSLogger is enabled by default.
     * @returns Promise<any>
     */
    enableLogger(): Promise<any>;
    /**
     * Disables HMSLogger.
     * @returns Promise<any>
     */
    disableLogger(): Promise<any>;
}
export interface RequestPermissionInput {
    permissionList: Array<string>;
}
export interface CheckPermissionInput {
    permissionList: Array<string>;
}
export interface DefaultViewModeRequest {
    scanTypes: ScanTypes[] | ScanTypes;
}
export interface CustomViewModeRequest {
    scanTypes: ScanTypes[] | ScanTypes;
    scanAreaWidth?: number | null;
    scanAreaHeight?: number | null;
    enableFlushButton?: boolean | null;
    enablePictureButton?: boolean | null;
    scanAreaText?: string | null;
}
export interface MultiProcessorSynModeRequest {
    scanTypes: ScanTypes[] | ScanTypes;
    enableScanArea?: boolean | null;
    enablePhotoButton?: boolean | null;
    textColor?: Colors | null;
    textSize?: number | null;
    strokeWidth?: number | null;
    rectColor?: Colors | null;
    rectStyle?: RectStyle | null;
    scanAreaWidth?: number | null;
    scanAreaHeight?: number | null;
}
export interface MultiProcessorAsynModeRequest {
    scanTypes: ScanTypes[] | ScanTypes;
    enableScanArea?: boolean | null;
    enablePhotoButton?: boolean | null;
    textColor?: Colors | null;
    textSize?: number | null;
    strokeWidth?: number | null;
    rectColor?: Colors | null;
    rectStyle?: RectStyle | null;
    scanAreaWidth?: number | null;
    scanAreaHeight?: number | null;
}
export interface AsynModeWithImageRequest {
    filePath: string;
    scanTypes: ScanTypes[] | ScanTypes;
}
export interface SynModeWithImageRequest {
    filePath: string;
    scanTypes: ScanTypes[] | ScanTypes;
}
export interface DecodeWithBitmapRequest {
    filePath: string;
    scanTypes: ScanTypes[] | ScanTypes;
}
export interface GenerateBarcodeRequest {
    barcodeHeight?: number | null;
    barcodeWidth?: number | null;
    bitmapBackgroundColor?: Colors | null;
    bitmapColor?: Colors | null;
    bitmapMargin?: number | null;
    barcodeFormat: ScanTypes[] | ScanTypes;
    inputContent: string;
}
export interface BitmapModeRequest {
    scanAreaWidth?: number;
    scanAreaHeight?: number;
    scanTypes: ScanTypes[] | ScanTypes;
    enableScanArea?: boolean;
    scanTips?: string;
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
