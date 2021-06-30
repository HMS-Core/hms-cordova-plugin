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
    scanTypes: ScanTypes;
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
