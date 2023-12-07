/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.
    
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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RectStyle = exports.ScanTypes = exports.Colors = exports.ErrorCorrectionLevel = exports.HMSPermission = void 0;
var HMSPermission;
(function (HMSPermission) {
    HMSPermission["CAMERA"] = "android.permission.CAMERA";
    HMSPermission["READ_EXTERNAL_STORAGE"] = "android.permission.READ_EXTERNAL_STORAGE";
})(HMSPermission = exports.HMSPermission || (exports.HMSPermission = {}));
var ErrorCorrectionLevel;
(function (ErrorCorrectionLevel) {
    ErrorCorrectionLevel["L"] = "L";
    ErrorCorrectionLevel["M"] = "M";
    ErrorCorrectionLevel["Q"] = "Q";
    ErrorCorrectionLevel["H"] = "H";
})(ErrorCorrectionLevel = exports.ErrorCorrectionLevel || (exports.ErrorCorrectionLevel = {}));
var Colors;
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
})(Colors = exports.Colors || (exports.Colors = {}));
var ScanTypes;
(function (ScanTypes) {
    ScanTypes[ScanTypes["OTHER_SCAN_TYPE"] = -1] = "OTHER_SCAN_TYPE";
    ScanTypes[ScanTypes["ALL_SCAN_TYPE"] = 0] = "ALL_SCAN_TYPE";
    ScanTypes[ScanTypes["CODE128_SCAN_TYPE"] = 64] = "CODE128_SCAN_TYPE";
    ScanTypes[ScanTypes["CODE39_SCAN_TYPE"] = 16] = "CODE39_SCAN_TYPE";
    ScanTypes[ScanTypes["CODE93_SCAN_TYPE"] = 32] = "CODE93_SCAN_TYPE";
    ScanTypes[ScanTypes["CODABAR_SCAN_TYPE"] = 4096] = "CODABAR_SCAN_TYPE";
    ScanTypes[ScanTypes["DATAMATRIX_SCAN_TYPE"] = 4] = "DATAMATRIX_SCAN_TYPE";
    ScanTypes[ScanTypes["EAN13_SCAN_TYPE"] = 128] = "EAN13_SCAN_TYPE";
    ScanTypes[ScanTypes["EAN8_SCAN_TYPE"] = 256] = "EAN8_SCAN_TYPE";
    ScanTypes[ScanTypes["ITF14_SCAN_TYPE"] = 512] = "ITF14_SCAN_TYPE";
    ScanTypes[ScanTypes["QRCODE_SCAN_TYPE"] = 1] = "QRCODE_SCAN_TYPE";
    ScanTypes[ScanTypes["UPCCODE_A_SCAN_TYPE"] = 1024] = "UPCCODE_A_SCAN_TYPE";
    ScanTypes[ScanTypes["UPCCODE_E_SCAN_TYPE"] = 2048] = "UPCCODE_E_SCAN_TYPE";
    ScanTypes[ScanTypes["PDF417_SCAN_TYPE"] = 8] = "PDF417_SCAN_TYPE";
    ScanTypes[ScanTypes["AZTEC_SCAN_TYPE"] = 2] = "AZTEC_SCAN_TYPE";
    ScanTypes[ScanTypes["MULTI_FUNCTIONAL_SCAN_TYPE"] = 8192] = "MULTI_FUNCTIONAL_SCAN_TYPE";
})(ScanTypes = exports.ScanTypes || (exports.ScanTypes = {}));
var RectStyle;
(function (RectStyle) {
    RectStyle[RectStyle["STROKE"] = 0] = "STROKE";
    RectStyle[RectStyle["FILL"] = 1] = "FILL";
    RectStyle[RectStyle["FILL_AND_STROKE"] = 2] = "FILL_AND_STROKE";
})(RectStyle = exports.RectStyle || (exports.RectStyle = {}));
//# sourceMappingURL=interfaces.js.map