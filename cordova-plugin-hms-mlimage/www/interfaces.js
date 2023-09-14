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
exports.CordovaErrors = exports.Events = exports.Colors = exports.RectStyle = exports.MlObjectAnalyserConfig = exports.MLRemoteLandmarkSetting = exports.MLImageSegmentationScene = exports.MLImageSegmentationClassification = exports.MLImageSegmentationSetting = exports.MLProductConfig = exports.ImgSuperResolutionConfig = exports.syncMode = exports.DownloadStrategyCustom = exports.MLImageClassificationConfig = exports.MLFrame = exports.MLCompositeAnalyzerName = exports.MLAnalyzerName = exports.MLStillCompositerName = exports.MLLensType = exports.MLFlashMode = exports.MLFaceSetting = exports.HandkeyPointConfig = void 0;
var HandkeyPointConfig;
(function (HandkeyPointConfig) {
    HandkeyPointConfig[HandkeyPointConfig["TYPE_ALL"] = 0] = "TYPE_ALL";
    HandkeyPointConfig[HandkeyPointConfig["TYPE_KEYPOINT_ONLY"] = 1] = "TYPE_KEYPOINT_ONLY";
    HandkeyPointConfig[HandkeyPointConfig["TYPE_RECT_ONLY"] = 2] = "TYPE_RECT_ONLY";
    HandkeyPointConfig[HandkeyPointConfig["MAX_HANDS_NUM"] = 10] = "MAX_HANDS_NUM";
})(HandkeyPointConfig = exports.HandkeyPointConfig || (exports.HandkeyPointConfig = {}));
var MLFaceSetting;
(function (MLFaceSetting) {
    MLFaceSetting[MLFaceSetting["MODE_TRACING_FAST"] = 1] = "MODE_TRACING_FAST";
    MLFaceSetting[MLFaceSetting["MODE_TRACING_ROBUST"] = 2] = "MODE_TRACING_ROBUST";
    MLFaceSetting[MLFaceSetting["TYPE_FEATURES"] = 1] = "TYPE_FEATURES";
    MLFaceSetting[MLFaceSetting["TYPE_FEATURE_AGE"] = 256] = "TYPE_FEATURE_AGE";
    MLFaceSetting[MLFaceSetting["TYPE_FEATURE_BEARD"] = 32] = "TYPE_FEATURE_BEARD";
    MLFaceSetting[MLFaceSetting["TYPE_FEATURE_EMOTION"] = 4] = "TYPE_FEATURE_EMOTION";
    MLFaceSetting[MLFaceSetting["TYPE_FEATURE_EYEGLASS"] = 8] = "TYPE_FEATURE_EYEGLASS";
    MLFaceSetting[MLFaceSetting["TYPE_FEATURE_GENDAR"] = 128] = "TYPE_FEATURE_GENDAR";
    MLFaceSetting[MLFaceSetting["TYPE_FEATURE_HAT"] = 16] = "TYPE_FEATURE_HAT";
    MLFaceSetting[MLFaceSetting["TYPE_FEATURE_OPENCLOSEEYE"] = 64] = "TYPE_FEATURE_OPENCLOSEEYE";
    MLFaceSetting[MLFaceSetting["TYPE_KEYPOINTS"] = 1] = "TYPE_KEYPOINTS";
    MLFaceSetting[MLFaceSetting["TYPE_PRECISION"] = 1] = "TYPE_PRECISION";
    MLFaceSetting[MLFaceSetting["TYPE_SHAPES"] = 2] = "TYPE_SHAPES";
    MLFaceSetting[MLFaceSetting["TYPE_SPEED"] = 2] = "TYPE_SPEED";
    MLFaceSetting[MLFaceSetting["TYPE_UNSUPPORT_FEATURES"] = 2] = "TYPE_UNSUPPORT_FEATURES";
    MLFaceSetting[MLFaceSetting["TYPE_UNSUPPORT_KEYPOINTS"] = 0] = "TYPE_UNSUPPORT_KEYPOINTS";
    MLFaceSetting[MLFaceSetting["TYPE_UNSUPPORT_SHAPES"] = 3] = "TYPE_UNSUPPORT_SHAPES";
    MLFaceSetting[MLFaceSetting["TYPE_BOTTOM_OF_MOUTH"] = 1] = "TYPE_BOTTOM_OF_MOUTH";
    MLFaceSetting[MLFaceSetting["TYPE_LEFT_CHEEK"] = 2] = "TYPE_LEFT_CHEEK";
    MLFaceSetting[MLFaceSetting["TYPE_LEFT_EAR"] = 3] = "TYPE_LEFT_EAR";
    MLFaceSetting[MLFaceSetting["TYPE_LEFT_SIDE_OF_MOUTH"] = 6] = "TYPE_LEFT_SIDE_OF_MOUTH";
    MLFaceSetting[MLFaceSetting["TYPE_RIGHT_CHEEK"] = 8] = "TYPE_RIGHT_CHEEK";
    MLFaceSetting[MLFaceSetting["TYPE_RIGHT_EAR"] = 9] = "TYPE_RIGHT_EAR";
    MLFaceSetting[MLFaceSetting["TYPE_RIGHT_SIDE_OF_MOUTH"] = 12] = "TYPE_RIGHT_SIDE_OF_MOUTH";
    MLFaceSetting[MLFaceSetting["TYPE_TIP_OF_LEFT_EAR"] = 4] = "TYPE_TIP_OF_LEFT_EAR";
    MLFaceSetting[MLFaceSetting["TYPE_TIP_OF_NOSE"] = 7] = "TYPE_TIP_OF_NOSE";
    MLFaceSetting[MLFaceSetting["TYPE_TIP_OF_RIGHT_EAR"] = 10] = "TYPE_TIP_OF_RIGHT_EAR";
    MLFaceSetting[MLFaceSetting["TYPE_ALL"] = 0] = "TYPE_ALL";
    MLFaceSetting[MLFaceSetting["TYPE_BOTTOM_OF_LEFT_EYEBROW"] = 4] = "TYPE_BOTTOM_OF_LEFT_EYEBROW";
    MLFaceSetting[MLFaceSetting["TYPE_BOTTOM_OF_LOWER_LIP"] = 8] = "TYPE_BOTTOM_OF_LOWER_LIP";
    MLFaceSetting[MLFaceSetting["TYPE_BOTTOM_OF_NOSE"] = 12] = "TYPE_BOTTOM_OF_NOSE";
    MLFaceSetting[MLFaceSetting["TYPE_BOTTOM_OF_RIGHT_EYEBROW"] = 5] = "TYPE_BOTTOM_OF_RIGHT_EYEBROW";
    MLFaceSetting[MLFaceSetting["TYPE_BOTTOM_OF_UPPER_LIP"] = 10] = "TYPE_BOTTOM_OF_UPPER_LIP";
    MLFaceSetting[MLFaceSetting["TYPE_BRIDGE_OF_NOSE"] = 13] = "TYPE_BRIDGE_OF_NOSE";
    MLFaceSetting[MLFaceSetting["TYPE_FACE"] = 1] = "TYPE_FACE";
    MLFaceSetting[MLFaceSetting["TYPE_TOP_OF_LEFT_EYEBROW"] = 6] = "TYPE_TOP_OF_LEFT_EYEBROW";
    MLFaceSetting[MLFaceSetting["TYPE_TOP_OF_LOWER_LIP"] = 9] = "TYPE_TOP_OF_LOWER_LIP";
    MLFaceSetting[MLFaceSetting["TYPE_TOP_OF_RIGHT_EYEBROW"] = 7] = "TYPE_TOP_OF_RIGHT_EYEBROW";
    MLFaceSetting[MLFaceSetting["TYPE_TOP_OF_UPPER_LIP"] = 11] = "TYPE_TOP_OF_UPPER_LIP";
})(MLFaceSetting = exports.MLFaceSetting || (exports.MLFaceSetting = {}));
var MLFlashMode;
(function (MLFlashMode) {
    MLFlashMode["AUTO"] = "auto";
    MLFlashMode["ON"] = "on";
    MLFlashMode["OFF"] = "off";
})(MLFlashMode = exports.MLFlashMode || (exports.MLFlashMode = {}));
var MLLensType;
(function (MLLensType) {
    MLLensType[MLLensType["BACK_LENS"] = 0] = "BACK_LENS";
    MLLensType[MLLensType["FRONT_LENS"] = 1] = "FRONT_LENS";
})(MLLensType = exports.MLLensType || (exports.MLLensType = {}));
var MLStillCompositerName;
(function (MLStillCompositerName) {
    MLStillCompositerName["FACE"] = "FACE";
    MLStillCompositerName["HAND"] = "HAND";
    MLStillCompositerName["SKELETON"] = "SKELETON";
    MLStillCompositerName["TEXT"] = "TEXT";
    MLStillCompositerName["OBJECT"] = "OBJECT";
    MLStillCompositerName["CLASSIFICATION"] = "CLASSIFICATION";
})(MLStillCompositerName = exports.MLStillCompositerName || (exports.MLStillCompositerName = {}));
var MLAnalyzerName;
(function (MLAnalyzerName) {
    MLAnalyzerName["LIVEOBJECT"] = "OBJECT";
    MLAnalyzerName["LIVECLASSIFICATION"] = "CLASSIFICATION";
    MLAnalyzerName["LIVESCENE"] = "SCENE";
    MLAnalyzerName["LIVESEGMENTATION"] = "SEGMENTATION";
})(MLAnalyzerName = exports.MLAnalyzerName || (exports.MLAnalyzerName = {}));
var MLCompositeAnalyzerName;
(function (MLCompositeAnalyzerName) {
    MLCompositeAnalyzerName["LIVEFACE"] = "FACE";
    MLCompositeAnalyzerName["LIVEFACE3D"] = "FACE3D";
    MLCompositeAnalyzerName["LIVEFACEMAX"] = "FACEMAX";
    MLCompositeAnalyzerName["LIVEHAND"] = "HAND";
    MLCompositeAnalyzerName["LIVESKELETON"] = "SKELETON";
    MLCompositeAnalyzerName["LIVEOBJECT"] = "OBJECT";
    MLCompositeAnalyzerName["LIVECLASSIFICATION"] = "CLASSIFICATION";
    MLCompositeAnalyzerName["LIVESCENE"] = "SCENE";
    MLCompositeAnalyzerName["LIVESEGMENTATION"] = "SEGMENTATION";
    MLCompositeAnalyzerName["LIVETEXT"] = "TEXT";
    MLCompositeAnalyzerName["LIVEGESTURE"] = "GESTURE";
})(MLCompositeAnalyzerName = exports.MLCompositeAnalyzerName || (exports.MLCompositeAnalyzerName = {}));
var MLFrame;
(function (MLFrame) {
    MLFrame["getPreviewBitmap"] = "getPreviewBitmap";
    MLFrame["readBitmap"] = "readBitmap";
    MLFrame["rotate"] = "rotate";
    MLFrame[MLFrame["SCREEN_FIRST_QUADRANT"] = 0] = "SCREEN_FIRST_QUADRANT";
    MLFrame[MLFrame["SCREEN_SECOND_QUADRANT"] = 1] = "SCREEN_SECOND_QUADRANT";
    MLFrame[MLFrame["SCREEN_THIRD_QUADRANT"] = 2] = "SCREEN_THIRD_QUADRANT";
    MLFrame[MLFrame["SCREEN_FOURTH_QUADRANT"] = 3] = "SCREEN_FOURTH_QUADRANT";
})(MLFrame = exports.MLFrame || (exports.MLFrame = {}));
var MLImageClassificationConfig;
(function (MLImageClassificationConfig) {
    MLImageClassificationConfig[MLImageClassificationConfig["TYPE_LOCAL"] = 0] = "TYPE_LOCAL";
    MLImageClassificationConfig[MLImageClassificationConfig["TYPE_REMOTE"] = 1] = "TYPE_REMOTE";
})(MLImageClassificationConfig = exports.MLImageClassificationConfig || (exports.MLImageClassificationConfig = {}));
var DownloadStrategyCustom;
(function (DownloadStrategyCustom) {
    DownloadStrategyCustom[DownloadStrategyCustom["REGION_DR_CHINA"] = 1002] = "REGION_DR_CHINA";
    DownloadStrategyCustom[DownloadStrategyCustom["REGION_DR_AFILA"] = 1003] = "REGION_DR_AFILA";
    DownloadStrategyCustom[DownloadStrategyCustom["REGION_DR_EUROPE"] = 1004] = "REGION_DR_EUROPE";
    DownloadStrategyCustom[DownloadStrategyCustom["REGION_DR_RUSSIA"] = 1005] = "REGION_DR_RUSSIA";
})(DownloadStrategyCustom = exports.DownloadStrategyCustom || (exports.DownloadStrategyCustom = {}));
var syncMode;
(function (syncMode) {
    syncMode[syncMode["SYNC_TYPE"] = 1] = "SYNC_TYPE";
    syncMode[syncMode["ASYNC_TYPE"] = 0] = "ASYNC_TYPE";
})(syncMode = exports.syncMode || (exports.syncMode = {}));
var ImgSuperResolutionConfig;
(function (ImgSuperResolutionConfig) {
    ImgSuperResolutionConfig[ImgSuperResolutionConfig["ISR_SCALE_1X"] = 1] = "ISR_SCALE_1X";
    ImgSuperResolutionConfig[ImgSuperResolutionConfig["ISR_SCALE_3X"] = 3] = "ISR_SCALE_3X";
})(ImgSuperResolutionConfig = exports.ImgSuperResolutionConfig || (exports.ImgSuperResolutionConfig = {}));
var MLProductConfig;
(function (MLProductConfig) {
    MLProductConfig[MLProductConfig["REGION_DR_CHINA"] = 1002] = "REGION_DR_CHINA";
    MLProductConfig[MLProductConfig["REGION_DR_AFILA"] = 1003] = "REGION_DR_AFILA";
    MLProductConfig[MLProductConfig["REGION_DR_EUROPE"] = 1004] = "REGION_DR_EUROPE";
    MLProductConfig[MLProductConfig["REGION_DR_RUSSIA"] = 1005] = "REGION_DR_RUSSIA";
    MLProductConfig[MLProductConfig["REGION_DR_GERMAN"] = 1006] = "REGION_DR_GERMAN";
    MLProductConfig[MLProductConfig["REGION_DR_SIANGAPORE"] = 1007] = "REGION_DR_SIANGAPORE";
})(MLProductConfig = exports.MLProductConfig || (exports.MLProductConfig = {}));
var MLImageSegmentationSetting;
(function (MLImageSegmentationSetting) {
    MLImageSegmentationSetting[MLImageSegmentationSetting["BODY_SEG"] = 0] = "BODY_SEG";
    MLImageSegmentationSetting[MLImageSegmentationSetting["IMAGE_SEG"] = 1] = "IMAGE_SEG";
    MLImageSegmentationSetting[MLImageSegmentationSetting["HAIR_SEG"] = 2] = "HAIR_SEG";
})(MLImageSegmentationSetting = exports.MLImageSegmentationSetting || (exports.MLImageSegmentationSetting = {}));
var MLImageSegmentationClassification;
(function (MLImageSegmentationClassification) {
    MLImageSegmentationClassification[MLImageSegmentationClassification["TYPE_BACKGOURND"] = 0] = "TYPE_BACKGOURND";
    MLImageSegmentationClassification[MLImageSegmentationClassification["TYPE_HUMAN"] = 1] = "TYPE_HUMAN";
    MLImageSegmentationClassification[MLImageSegmentationClassification["TYPE_SKY"] = 2] = "TYPE_SKY";
    MLImageSegmentationClassification[MLImageSegmentationClassification["TYPE_GRASS"] = 3] = "TYPE_GRASS";
    MLImageSegmentationClassification[MLImageSegmentationClassification["TYPE_FOOD"] = 4] = "TYPE_FOOD";
    MLImageSegmentationClassification[MLImageSegmentationClassification["TYPE_CAT"] = 5] = "TYPE_CAT";
    MLImageSegmentationClassification[MLImageSegmentationClassification["TYPE_BUILD"] = 6] = "TYPE_BUILD";
    MLImageSegmentationClassification[MLImageSegmentationClassification["TYPE_FLOWER"] = 7] = "TYPE_FLOWER";
    MLImageSegmentationClassification[MLImageSegmentationClassification["TYPE_WATER"] = 8] = "TYPE_WATER";
    MLImageSegmentationClassification[MLImageSegmentationClassification["TYPE_SAND"] = 9] = "TYPE_SAND";
    MLImageSegmentationClassification[MLImageSegmentationClassification["TYPE_MOUNTAIN"] = 10] = "TYPE_MOUNTAIN";
})(MLImageSegmentationClassification = exports.MLImageSegmentationClassification || (exports.MLImageSegmentationClassification = {}));
var MLImageSegmentationScene;
(function (MLImageSegmentationScene) {
    MLImageSegmentationScene[MLImageSegmentationScene["ALL"] = 0] = "ALL";
    MLImageSegmentationScene[MLImageSegmentationScene["MASK_ONLY"] = 1] = "MASK_ONLY";
    MLImageSegmentationScene[MLImageSegmentationScene["FOREGROUND_ONLY"] = 2] = "FOREGROUND_ONLY";
    MLImageSegmentationScene[MLImageSegmentationScene["GRAYSCALE_ONLY"] = 3] = "GRAYSCALE_ONLY";
})(MLImageSegmentationScene = exports.MLImageSegmentationScene || (exports.MLImageSegmentationScene = {}));
var MLRemoteLandmarkSetting;
(function (MLRemoteLandmarkSetting) {
    MLRemoteLandmarkSetting[MLRemoteLandmarkSetting["STEADY_PATTERN"] = 1] = "STEADY_PATTERN";
    MLRemoteLandmarkSetting[MLRemoteLandmarkSetting["NEWEST_PATTERN"] = 2] = "NEWEST_PATTERN";
})(MLRemoteLandmarkSetting = exports.MLRemoteLandmarkSetting || (exports.MLRemoteLandmarkSetting = {}));
var MlObjectAnalyserConfig;
(function (MlObjectAnalyserConfig) {
    MlObjectAnalyserConfig[MlObjectAnalyserConfig["TYPE_PICTURE"] = 0] = "TYPE_PICTURE";
    MlObjectAnalyserConfig[MlObjectAnalyserConfig["TYPE_VIDEO"] = 1] = "TYPE_VIDEO";
    MlObjectAnalyserConfig[MlObjectAnalyserConfig["TYPE_OTHER"] = 0] = "TYPE_OTHER";
    MlObjectAnalyserConfig[MlObjectAnalyserConfig["TYPE_GOODS"] = 1] = "TYPE_GOODS";
    MlObjectAnalyserConfig[MlObjectAnalyserConfig["TYPE_FOOD"] = 2] = "TYPE_FOOD";
    MlObjectAnalyserConfig[MlObjectAnalyserConfig["TYPE_FURNITURE"] = 3] = "TYPE_FURNITURE";
    MlObjectAnalyserConfig[MlObjectAnalyserConfig["TYPE_PLANT"] = 4] = "TYPE_PLANT";
    MlObjectAnalyserConfig[MlObjectAnalyserConfig["TYPE_PLACE"] = 5] = "TYPE_PLACE";
    MlObjectAnalyserConfig[MlObjectAnalyserConfig["TYPE_FACE"] = 6] = "TYPE_FACE";
})(MlObjectAnalyserConfig = exports.MlObjectAnalyserConfig || (exports.MlObjectAnalyserConfig = {}));
var RectStyle;
(function (RectStyle) {
    RectStyle[RectStyle["STROKE"] = 1] = "STROKE";
    RectStyle[RectStyle["FILL"] = 2] = "FILL";
    RectStyle[RectStyle["FILL_AND_STROKE"] = 3] = "FILL_AND_STROKE";
})(RectStyle = exports.RectStyle || (exports.RectStyle = {}));
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
var Events;
(function (Events) {
    Events["TEXT_TRANSACTOR_ON_DESTROY"] = "textTransactorOnDestroy";
    Events["TEXT_TRANSACTOR_ON_RESULT"] = "textTransactorOnResult";
    Events["FACE_TRANSACTOR_ON_DESTROY"] = "faceTransactorOnDestroy";
    Events["FACE_TRANSACTOR_ON_RESULT"] = "faceTransactorOnResult";
    Events["FACE_3D_TRANSACTOR_ON_DESTROY"] = "face3dTransactorOnDestroy";
    Events["FACE_3D_TRANSACTOR_ON_RESULT"] = "face3dTransactorOnResult";
    Events["CLASSIFICATION_TRANSACTOR_ON_DESTROY"] = "classificationTransactorOnDestroy";
    Events["CLASSIFICATION_TRANSACTOR_ON_RESULT"] = "classificationTransactorOnResult";
    Events["OBJECT_TRANSACTOR_ON_DESTROY"] = "objectTransactorOnDestroy";
    Events["OBJECT_TRANSACTOR_ON_RESULT"] = "objectTransactorOnResult";
    Events["SCENE_TRANSACTOR_ON_DESTROY"] = "sceneTransactorOnDestroy";
    Events["SCENE_TRANSACTOR_ON_RESULT"] = "sceneTransactorOnResult";
    Events["SKELETON_TRANSACTOR_ON_DESTROY"] = "skeletonTransactorOnDestroy";
    Events["SKELETON_TRANSACTOR_ON_RESULT"] = "skeletonTransactorOnResult";
    Events["HAND_TRANSACTOR_ON_DESTROY"] = "handTransactorOnDestroy";
    Events["HAND_TRANSACTOR_ON_RESULT"] = "handTransactorOnResult";
    Events["GESTURE_TRANSACTOR_ON_DESTROY"] = "gestureTransactorOnDestroy";
    Events["GESTURE_TRANSACTOR_ON_RESULT"] = "gestureTransactorOnResult";
    Events["SEGMENTATION_TRANSACTOR_ON_DESTROY"] = "segmentationTransactorOnDestroy";
    Events["SEGMENTATION_TRANSACTOR_ON_RESULT"] = "segmentationTransactorOnResult";
})(Events = exports.Events || (exports.Events = {}));
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
})(CordovaErrors = exports.CordovaErrors || (exports.CordovaErrors = {}));
//# sourceMappingURL=interfaces.js.map