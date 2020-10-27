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
    textColor?: Colors | null
    textSize?: number | null;
    strokeWidth?: number | null;
    rectColor?: Colors | null;
    rectStyle?: RectStyle | null;
    scanAreaWidth?: number | null;
    scanAreaHeight?: number | null;
}
export interface MultiProcessorAsynModeRequest {
    scanTypes: ScanTypes[];
    enableScanArea?: boolean | null;
    enablePhotoButton?: boolean | null;
    textColor?: Colors | null
    textSize?: number | null;
    strokeWidth?: number | null
    rectColor?: Colors | null
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
    scanTypes: ScanTypes;
    enableScanArea?: boolean;
    scanTips?: string;
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
    TRANSPARENT = 0
}
export enum ScanTypes {
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
    AZTEC_SCAN_TYPE = 2,
}
export enum RectStyle {
    STROKE = 0,
    FILL = 1,
    FILL_AND_STROKE = 2,
}
