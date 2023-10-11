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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CordovaErrors = exports.Colors = exports.MLTextConfig = exports.MLLocalTextSetting = exports.MLProductConfig = exports.ImgSuperResolutionConfig = exports.MLIcrSideType = exports.icrCaptureType = exports.MLGcrCaptureUIConfig = exports.gcrCaptureType = exports.MLFormRecogitionConfig = exports.MLRemoteTextSetting = exports.MLBcrCaptureErrorCode = exports.MLBcrResultConfig = exports.MLBcrCaptureConfig = exports.RecMode = exports.Region = void 0;
var Region;
(function (Region) {
    Region[Region["REGION_DR_UNKNOWN"] = 1001] = "REGION_DR_UNKNOWN";
    Region[Region["REGION_DR_CHINA"] = 1002] = "REGION_DR_CHINA";
    Region[Region["REGION_DR_RUSSIA"] = 1005] = "REGION_DR_RUSSIA";
    Region[Region["REGION_DR_GERMAN"] = 1006] = "REGION_DR_GERMAN";
    Region[Region["REGION_DR_SINGAPORE"] = 1007] = "REGION_DR_SINGAPORE";
})(Region || (exports.Region = Region = {}));
var RecMode;
(function (RecMode) {
    RecMode[RecMode["WEAK_MODE"] = 0] = "WEAK_MODE";
    RecMode[RecMode["STRICT_MODE"] = 1] = "STRICT_MODE";
})(RecMode || (exports.RecMode = RecMode = {}));
var MLBcrCaptureConfig;
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
})(MLBcrCaptureConfig || (exports.MLBcrCaptureConfig = MLBcrCaptureConfig = {}));
var MLBcrResultConfig;
(function (MLBcrResultConfig) {
    MLBcrResultConfig[MLBcrResultConfig["RESULT_NUM_ONLY"] = 0] = "RESULT_NUM_ONLY";
    MLBcrResultConfig[MLBcrResultConfig["RESULT_SIMPLE"] = 1] = "RESULT_SIMPLE";
    MLBcrResultConfig[MLBcrResultConfig["RESULT_ALL"] = 2] = "RESULT_ALL";
})(MLBcrResultConfig || (exports.MLBcrResultConfig = MLBcrResultConfig = {}));
var MLBcrCaptureErrorCode;
(function (MLBcrCaptureErrorCode) {
    MLBcrCaptureErrorCode[MLBcrCaptureErrorCode["ERROR_CODE_INIT_CAMERA_FAILED"] = 10101] = "ERROR_CODE_INIT_CAMERA_FAILED";
})(MLBcrCaptureErrorCode || (exports.MLBcrCaptureErrorCode = MLBcrCaptureErrorCode = {}));
var MLRemoteTextSetting;
(function (MLRemoteTextSetting) {
    MLRemoteTextSetting[MLRemoteTextSetting["OCR_LOOSE_SCENE"] = 1] = "OCR_LOOSE_SCENE";
    MLRemoteTextSetting[MLRemoteTextSetting["OCR_COMPACT_SCENE"] = 2] = "OCR_COMPACT_SCENE";
    MLRemoteTextSetting["NGON"] = "NGON";
    MLRemoteTextSetting["ARC"] = "ARC";
    MLRemoteTextSetting[MLRemoteTextSetting["OTHER"] = 5] = "OTHER";
    MLRemoteTextSetting[MLRemoteTextSetting["NEW_LINE_CHARACTER"] = 8] = "NEW_LINE_CHARACTER";
    MLRemoteTextSetting[MLRemoteTextSetting["SPACE"] = 6] = "SPACE";
})(MLRemoteTextSetting || (exports.MLRemoteTextSetting = MLRemoteTextSetting = {}));
var MLFormRecogitionConfig;
(function (MLFormRecogitionConfig) {
    MLFormRecogitionConfig[MLFormRecogitionConfig["SYNC_TYPE"] = 1] = "SYNC_TYPE";
    MLFormRecogitionConfig[MLFormRecogitionConfig["ASYNC_TYPE"] = 0] = "ASYNC_TYPE";
})(MLFormRecogitionConfig || (exports.MLFormRecogitionConfig = MLFormRecogitionConfig = {}));
var gcrCaptureType;
(function (gcrCaptureType) {
    gcrCaptureType[gcrCaptureType["CAPTURE_ACTIVITY"] = 0] = "CAPTURE_ACTIVITY";
    gcrCaptureType[gcrCaptureType["CAPTURE_PHOTO"] = 1] = "CAPTURE_PHOTO";
    gcrCaptureType[gcrCaptureType["CAPTURE_IMAGE"] = 2] = "CAPTURE_IMAGE";
})(gcrCaptureType || (exports.gcrCaptureType = gcrCaptureType = {}));
var MLGcrCaptureUIConfig;
(function (MLGcrCaptureUIConfig) {
    MLGcrCaptureUIConfig[MLGcrCaptureUIConfig["ORIENTATION_AUTO"] = 0] = "ORIENTATION_AUTO";
    MLGcrCaptureUIConfig[MLGcrCaptureUIConfig["ORIENTATION_LANDSCAPE"] = 1] = "ORIENTATION_LANDSCAPE";
    MLGcrCaptureUIConfig[MLGcrCaptureUIConfig["ORIENTATION_PORTRAIT"] = 2] = "ORIENTATION_PORTRAIT";
})(MLGcrCaptureUIConfig || (exports.MLGcrCaptureUIConfig = MLGcrCaptureUIConfig = {}));
var icrCaptureType;
(function (icrCaptureType) {
    icrCaptureType[icrCaptureType["CAPTURE_CAMERA"] = 0] = "CAPTURE_CAMERA";
    icrCaptureType[icrCaptureType["CAPTURE_IMAGE"] = 1] = "CAPTURE_IMAGE";
})(icrCaptureType || (exports.icrCaptureType = icrCaptureType = {}));
var MLIcrSideType;
(function (MLIcrSideType) {
    MLIcrSideType["FRONT"] = "FRONT";
    MLIcrSideType["BACK"] = "BACK";
})(MLIcrSideType || (exports.MLIcrSideType = MLIcrSideType = {}));
var ImgSuperResolutionConfig;
(function (ImgSuperResolutionConfig) {
    ImgSuperResolutionConfig[ImgSuperResolutionConfig["ISR_SCALE_1X"] = 1] = "ISR_SCALE_1X";
    ImgSuperResolutionConfig[ImgSuperResolutionConfig["ISR_SCALE_3X"] = 3] = "ISR_SCALE_3X";
})(ImgSuperResolutionConfig || (exports.ImgSuperResolutionConfig = ImgSuperResolutionConfig = {}));
var MLProductConfig;
(function (MLProductConfig) {
    MLProductConfig[MLProductConfig["REGION_DR_CHINA"] = 1002] = "REGION_DR_CHINA";
    MLProductConfig[MLProductConfig["REGION_DR_AFILA"] = 1003] = "REGION_DR_AFILA";
    MLProductConfig[MLProductConfig["REGION_DR_EUROPE"] = 1004] = "REGION_DR_EUROPE";
    MLProductConfig[MLProductConfig["REGION_DR_RUSSIA"] = 1005] = "REGION_DR_RUSSIA";
    MLProductConfig[MLProductConfig["REGION_DR_GERMAN"] = 1006] = "REGION_DR_GERMAN";
    MLProductConfig[MLProductConfig["REGION_DR_SIANGAPORE"] = 1007] = "REGION_DR_SIANGAPORE";
})(MLProductConfig || (exports.MLProductConfig = MLProductConfig = {}));
var MLLocalTextSetting;
(function (MLLocalTextSetting) {
    MLLocalTextSetting[MLLocalTextSetting["OCR_DETECT_MODE"] = 1] = "OCR_DETECT_MODE";
    MLLocalTextSetting[MLLocalTextSetting["OCR_TRACKING_MODE"] = 2] = "OCR_TRACKING_MODE";
})(MLLocalTextSetting || (exports.MLLocalTextSetting = MLLocalTextSetting = {}));
var MLTextConfig;
(function (MLTextConfig) {
    MLTextConfig[MLTextConfig["OCR_LOCAL_TYPE"] = 0] = "OCR_LOCAL_TYPE";
    MLTextConfig[MLTextConfig["OCR_REMOTE_TYPE"] = 1] = "OCR_REMOTE_TYPE";
})(MLTextConfig || (exports.MLTextConfig = MLTextConfig = {}));
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
})(Colors || (exports.Colors = Colors = {}));
var CordovaErrors;
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
})(CordovaErrors || (exports.CordovaErrors = CordovaErrors = {}));
//# sourceMappingURL=interfaces.js.map