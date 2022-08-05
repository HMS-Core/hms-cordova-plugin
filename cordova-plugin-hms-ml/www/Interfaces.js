/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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
exports.RectStyle = exports.Colors = exports.MLTtsConstants = exports.MLTtsAudioFragmentConstant = exports.MLTextEmbeddibgExceptions = exports.TextLanguage = exports.MLTranslateLanguages = exports.MLTextConfig = exports.MLLocalTextSetting = exports.MLSkeletonConfig = exports.MLSpeechRealTimeTranscriptionConstants = exports.MLRttScenes = exports.MLRttLanguages = exports.MlObjectAnalyserConfig = exports.MLLivenessCaptureError = exports.MLLivenessConfig = exports.MLLanguageDetection = exports.MLRemoteLandmarkSetting = exports.MLImageSegmentationScene = exports.MLImageSegmentationClassification = exports.MLImageSegmentationSetting = exports.MLProductConfig = exports.ImgSuperResolutionConfig = exports.HandkeyPointConfig = exports.GestureTypes = exports.syncType = exports.MLIcrSideType = exports.icrCaptureType = exports.MLGcrCaptureUIConfig = exports.gcrCaptureType = exports.MLFaceSetting = exports.MLFaceConfigs = exports.MLFormRecogitionConfig = exports.languageListRemoteText = exports.MLRemoteTextSetting = exports.DownloadStrategyCustom = exports.MLImageClassificationConfig = exports.MLBcrCaptureErrorCode = exports.MLBcrResultConfig = exports.MLBcrCaptureConfig = exports.RecMode = exports.MLDocumentSkewCorrectionConstant = exports.LANGUAGE = exports.FEATURE = exports.MLAsrConstants = exports.MLFrame = exports.MLAnalyzerName = exports.MLStillCompositerName = exports.MLLensType = exports.MLFlashMode = void 0;
exports.CordovaErrors = exports.MLSoundDectSoundTypeResult = exports.MLJointPoints = exports.handkeyPointsTypes = exports.MLFaceConstant = exports.MLAftConstants = exports.MLAFTEventCodes = exports.MLAftErrorCodes = exports.MLTtsError = void 0;
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
    MLStillCompositerName["OBJECT"] = "OBJECT";
    MLStillCompositerName["TEXT"] = "TEXT";
    MLStillCompositerName["CLASSIFICATION"] = "classification";
})(MLStillCompositerName = exports.MLStillCompositerName || (exports.MLStillCompositerName = {}));
var MLAnalyzerName;
(function (MLAnalyzerName) {
    MLAnalyzerName["LIVEFACE"] = "FACE";
    MLAnalyzerName["LIVEFACE3D"] = "FACE3D";
    MLAnalyzerName["LIVEFACEMAX"] = "FACEMAX";
    MLAnalyzerName["LIVEHAND"] = "HAND";
    MLAnalyzerName["LIVESKELETON"] = "SKELETON";
    MLAnalyzerName["LIVEOBJECT"] = "OBJECT";
    MLAnalyzerName["LIVECLASSIFICATION"] = "CLASSIFICATION";
    MLAnalyzerName["LIVESCENE"] = "SCENE";
    MLAnalyzerName["LIVETEXT"] = "TEXT";
    MLAnalyzerName["LIVEGESTURE"] = "GESTURE";
})(MLAnalyzerName = exports.MLAnalyzerName || (exports.MLAnalyzerName = {}));
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
var MLAsrConstants;
(function (MLAsrConstants) {
    MLAsrConstants["PUNCTUATION_ENABLE"] = "PUNCTUATION_ENABLE";
    MLAsrConstants[MLAsrConstants["ERR_NO_NETWORK"] = 11202] = "ERR_NO_NETWORK";
    MLAsrConstants[MLAsrConstants["ERR_NO_UNDERSTAND"] = 11204] = "ERR_NO_UNDERSTAND";
    MLAsrConstants[MLAsrConstants["ERR_SERVICE_UNAVAILABLE"] = 11203] = "ERR_SERVICE_UNAVAILABLE";
    MLAsrConstants["FEATURE"] = "FEATURE";
    MLAsrConstants["LANGUAGE"] = "LANGUAGE";
    MLAsrConstants["LAN_EN_US"] = "en-US";
    MLAsrConstants["LAN_FR_FR"] = "fr-FR";
    MLAsrConstants["LAN_ZH"] = "zh";
    MLAsrConstants["LAN_ZH_CN"] = "zh-CN";
    MLAsrConstants["LAN_ES_ES"] = "es-ES";
    MLAsrConstants["LAN_DE_DE"] = "de-DE";
    MLAsrConstants["LAN_RU_RU"] = "ru-RU";
    MLAsrConstants["LAN_IT_IT"] = "it-IT";
    MLAsrConstants["LAN_AR"] = "ar";
    MLAsrConstants["LAN_TH_TH"] = "th_TH";
    MLAsrConstants["LAN_MS_MY"] = "ms_MY";
    MLAsrConstants["LAN_FIL_PH"] = "fil_PH";
    MLAsrConstants["Turkish"] = "tr-TR";
    MLAsrConstants[MLAsrConstants["ERR_INVALIDATE_TOKEN"] = 11219] = "ERR_INVALIDATE_TOKEN";
    MLAsrConstants[MLAsrConstants["FEATURE_ALLINONE"] = 12] = "FEATURE_ALLINONE";
    MLAsrConstants[MLAsrConstants["FEATURE_WORDFLUX"] = 11] = "FEATURE_WORDFLUX";
    MLAsrConstants["SCENES"] = "scenes";
    MLAsrConstants["SCENES_SHOPPING"] = "shopping";
    MLAsrConstants[MLAsrConstants["STATE_LISTENING"] = 1] = "STATE_LISTENING";
    MLAsrConstants[MLAsrConstants["STATE_NO_NETWORK"] = 7] = "STATE_NO_NETWORK";
    MLAsrConstants[MLAsrConstants["STATE_NO_SOUND"] = 2] = "STATE_NO_SOUND";
    MLAsrConstants[MLAsrConstants["STATE_NO_SOUND_TIMES_EXCEED"] = 3] = "STATE_NO_SOUND_TIMES_EXCEED";
    MLAsrConstants[MLAsrConstants["STATE_NO_UNDERSTAND"] = 6] = "STATE_NO_UNDERSTAND";
    MLAsrConstants[MLAsrConstants["STATE_WAITING"] = 9] = "STATE_WAITING";
    MLAsrConstants["ACTION_HMS_ASR_SPEECH"] = "com.huawei.hms.mlsdk.action.RECOGNIZE_SPEECH";
    MLAsrConstants["WAVE_PAINE_ENCODING"] = "ENCODING";
    MLAsrConstants["WAVE_PAINE_SAMPLE_RATE"] = "SAMPLE_RATE";
    MLAsrConstants["WAVE_PAINE_BIT_WIDTH"] = "BIT_WIDTH";
    MLAsrConstants["WAVE_PAINE_CHANNEL_COUNT"] = "CHANNEL_COUNT";
})(MLAsrConstants = exports.MLAsrConstants || (exports.MLAsrConstants = {}));
var FEATURE;
(function (FEATURE) {
    FEATURE[FEATURE["FEATURE_ALLINONE"] = 12] = "FEATURE_ALLINONE";
    FEATURE[FEATURE["FEATURE_WORDFLUX"] = 11] = "FEATURE_WORDFLUX";
})(FEATURE = exports.FEATURE || (exports.FEATURE = {}));
var LANGUAGE;
(function (LANGUAGE) {
    LANGUAGE["LAN_EN_US"] = "en-US";
    LANGUAGE["LAN_FR_FR"] = "fr-FR";
    LANGUAGE["LAN_ZH"] = "zh";
    LANGUAGE["LAN_ZH_CN"] = "zh-CN";
    LANGUAGE["LAN_ES_ES"] = "es-ES";
    LANGUAGE["LAN_DE_DE"] = "de-DE";
    LANGUAGE["LAN_RU_RU"] = "ru-RU";
    LANGUAGE["LAN_IT_IT"] = "it-IT";
    LANGUAGE["LAN_AR"] = "ar";
    LANGUAGE["LAN_TH_TH"] = "th_TH";
    LANGUAGE["LAN_MS_MY"] = "ms_MY";
    LANGUAGE["LAN_FIL_PH"] = "fil_PH";
    LANGUAGE["Turkish"] = "tr-TR";
})(LANGUAGE = exports.LANGUAGE || (exports.LANGUAGE = {}));
var MLDocumentSkewCorrectionConstant;
(function (MLDocumentSkewCorrectionConstant) {
    MLDocumentSkewCorrectionConstant[MLDocumentSkewCorrectionConstant["SUCCESS"] = 0] = "SUCCESS";
    MLDocumentSkewCorrectionConstant[MLDocumentSkewCorrectionConstant["DETECT_FAILED"] = 1] = "DETECT_FAILED";
    MLDocumentSkewCorrectionConstant[MLDocumentSkewCorrectionConstant["CORRECTION_FAILED"] = 2] = "CORRECTION_FAILED";
    MLDocumentSkewCorrectionConstant[MLDocumentSkewCorrectionConstant["IMAGE_DATA_ERROR"] = 3] = "IMAGE_DATA_ERROR";
})(MLDocumentSkewCorrectionConstant = exports.MLDocumentSkewCorrectionConstant || (exports.MLDocumentSkewCorrectionConstant = {}));
var RecMode;
(function (RecMode) {
    RecMode[RecMode["WEAK_MODE"] = 0] = "WEAK_MODE";
    RecMode[RecMode["STRICT_MODE"] = 1] = "STRICT_MODE";
})(RecMode = exports.RecMode || (exports.RecMode = {}));
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
})(MLBcrCaptureConfig = exports.MLBcrCaptureConfig || (exports.MLBcrCaptureConfig = {}));
var MLBcrResultConfig;
(function (MLBcrResultConfig) {
    MLBcrResultConfig[MLBcrResultConfig["RESULT_NUM_ONLY"] = 0] = "RESULT_NUM_ONLY";
    MLBcrResultConfig[MLBcrResultConfig["RESULT_SIMPLE"] = 1] = "RESULT_SIMPLE";
    MLBcrResultConfig[MLBcrResultConfig["RESULT_ALL"] = 2] = "RESULT_ALL";
})(MLBcrResultConfig = exports.MLBcrResultConfig || (exports.MLBcrResultConfig = {}));
var MLBcrCaptureErrorCode;
(function (MLBcrCaptureErrorCode) {
    MLBcrCaptureErrorCode[MLBcrCaptureErrorCode["ERROR_CODE_INIT_CAMERA_FAILED"] = 10101] = "ERROR_CODE_INIT_CAMERA_FAILED";
})(MLBcrCaptureErrorCode = exports.MLBcrCaptureErrorCode || (exports.MLBcrCaptureErrorCode = {}));
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
var MLRemoteTextSetting;
(function (MLRemoteTextSetting) {
    MLRemoteTextSetting[MLRemoteTextSetting["OCR_LOOSE_SCENE"] = 1] = "OCR_LOOSE_SCENE";
    MLRemoteTextSetting[MLRemoteTextSetting["OCR_COMPACT_SCENE"] = 2] = "OCR_COMPACT_SCENE";
    MLRemoteTextSetting["NGON"] = "NGON";
    MLRemoteTextSetting["ARC"] = "ARC";
    MLRemoteTextSetting[MLRemoteTextSetting["OTHER"] = 5] = "OTHER";
    MLRemoteTextSetting[MLRemoteTextSetting["NEW_LINE_CHARACTER"] = 8] = "NEW_LINE_CHARACTER";
    MLRemoteTextSetting[MLRemoteTextSetting["SPACE"] = 6] = "SPACE";
})(MLRemoteTextSetting = exports.MLRemoteTextSetting || (exports.MLRemoteTextSetting = {}));
var languageListRemoteText;
(function (languageListRemoteText) {
    languageListRemoteText["LATIN"] = "rm";
    languageListRemoteText["ENGLISH"] = "en";
    languageListRemoteText["CHINESE"] = "zh";
    languageListRemoteText["JAPANESE"] = "ja";
    languageListRemoteText["KOREAN"] = "ko";
    languageListRemoteText["RUSSIAN"] = "ru";
    languageListRemoteText["GERMAN"] = "de";
    languageListRemoteText["FRENCH"] = "fr";
    languageListRemoteText["ITALIAN"] = "it";
    languageListRemoteText["PORTUGUESE"] = "pt";
    languageListRemoteText["SPANISH"] = "es";
    languageListRemoteText["POLISH"] = "pl";
    languageListRemoteText["NORWEGIAN"] = "no";
    languageListRemoteText["SWEDISH"] = "sv";
    languageListRemoteText["DANISH"] = "da";
    languageListRemoteText["TURKISH"] = "tr";
    languageListRemoteText["FINNISH"] = "fi";
    languageListRemoteText["THAI"] = "th";
    languageListRemoteText["ARABIC"] = "ar";
    languageListRemoteText["HINDI"] = "hi";
})(languageListRemoteText = exports.languageListRemoteText || (exports.languageListRemoteText = {}));
var MLFormRecogitionConfig;
(function (MLFormRecogitionConfig) {
    MLFormRecogitionConfig[MLFormRecogitionConfig["SYNC_TYPE"] = 1] = "SYNC_TYPE";
    MLFormRecogitionConfig[MLFormRecogitionConfig["ASYNC_TYPE"] = 0] = "ASYNC_TYPE";
})(MLFormRecogitionConfig = exports.MLFormRecogitionConfig || (exports.MLFormRecogitionConfig = {}));
var MLFaceConfigs;
(function (MLFaceConfigs) {
    MLFaceConfigs[MLFaceConfigs["TYPE_2D_SYNC"] = 0] = "TYPE_2D_SYNC";
    MLFaceConfigs[MLFaceConfigs["TYPE_2D_ASYNC"] = 1] = "TYPE_2D_ASYNC";
    MLFaceConfigs[MLFaceConfigs["TYPE_3D_SYNC"] = 2] = "TYPE_3D_SYNC";
    MLFaceConfigs[MLFaceConfigs["TYPE_3D_ASYNC"] = 3] = "TYPE_3D_ASYNC";
})(MLFaceConfigs = exports.MLFaceConfigs || (exports.MLFaceConfigs = {}));
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
var gcrCaptureType;
(function (gcrCaptureType) {
    gcrCaptureType[gcrCaptureType["CAPTURE_ACTIVITY"] = 0] = "CAPTURE_ACTIVITY";
    gcrCaptureType[gcrCaptureType["CAPTURE_PHOTO"] = 1] = "CAPTURE_PHOTO";
    gcrCaptureType[gcrCaptureType["CAPTURE_IMAGE"] = 2] = "CAPTURE_IMAGE";
})(gcrCaptureType = exports.gcrCaptureType || (exports.gcrCaptureType = {}));
var MLGcrCaptureUIConfig;
(function (MLGcrCaptureUIConfig) {
    MLGcrCaptureUIConfig[MLGcrCaptureUIConfig["ORIENTATION_AUTO"] = 0] = "ORIENTATION_AUTO";
    MLGcrCaptureUIConfig[MLGcrCaptureUIConfig["ORIENTATION_LANDSCAPE"] = 1] = "ORIENTATION_LANDSCAPE";
    MLGcrCaptureUIConfig[MLGcrCaptureUIConfig["ORIENTATION_PORTRAIT"] = 2] = "ORIENTATION_PORTRAIT";
})(MLGcrCaptureUIConfig = exports.MLGcrCaptureUIConfig || (exports.MLGcrCaptureUIConfig = {}));
var icrCaptureType;
(function (icrCaptureType) {
    icrCaptureType[icrCaptureType["CAPTURE_CAMERA"] = 0] = "CAPTURE_CAMERA";
    icrCaptureType[icrCaptureType["CAPTURE_IMAGE"] = 1] = "CAPTURE_IMAGE";
})(icrCaptureType = exports.icrCaptureType || (exports.icrCaptureType = {}));
var MLIcrSideType;
(function (MLIcrSideType) {
    MLIcrSideType["FRONT"] = "FRONT";
    MLIcrSideType["BACK"] = "BACK";
})(MLIcrSideType = exports.MLIcrSideType || (exports.MLIcrSideType = {}));
var syncType;
(function (syncType) {
    syncType[syncType["SYNC_MODE"] = 0] = "SYNC_MODE";
    syncType[syncType["ASYNC_MODE"] = 1] = "ASYNC_MODE";
})(syncType = exports.syncType || (exports.syncType = {}));
var GestureTypes;
(function (GestureTypes) {
    GestureTypes[GestureTypes["ONE"] = 0] = "ONE";
    GestureTypes[GestureTypes["SECOND"] = 1] = "SECOND";
    GestureTypes[GestureTypes["THREE"] = 2] = "THREE";
    GestureTypes[GestureTypes["FOUR"] = 3] = "FOUR";
    GestureTypes[GestureTypes["FIVE"] = 4] = "FIVE";
    GestureTypes[GestureTypes["SIX"] = 5] = "SIX";
    GestureTypes[GestureTypes["SEVEN"] = 6] = "SEVEN";
    GestureTypes[GestureTypes["EIGHT"] = 7] = "EIGHT";
    GestureTypes[GestureTypes["NINE"] = 8] = "NINE";
    GestureTypes[GestureTypes["DISS"] = 9] = "DISS";
    GestureTypes[GestureTypes["FIST"] = 10] = "FIST";
    GestureTypes[GestureTypes["GOOD"] = 11] = "GOOD";
    GestureTypes[GestureTypes["HEART"] = 12] = "HEART";
    GestureTypes[GestureTypes["OK"] = 13] = "OK";
    GestureTypes[GestureTypes["UNKNOWN"] = 14] = "UNKNOWN";
})(GestureTypes = exports.GestureTypes || (exports.GestureTypes = {}));
var HandkeyPointConfig;
(function (HandkeyPointConfig) {
    HandkeyPointConfig[HandkeyPointConfig["TYPE_ALL"] = 0] = "TYPE_ALL";
    HandkeyPointConfig[HandkeyPointConfig["TYPE_KEYPOINT_ONLY"] = 1] = "TYPE_KEYPOINT_ONLY";
    HandkeyPointConfig[HandkeyPointConfig["TYPE_RECT_ONLY"] = 2] = "TYPE_RECT_ONLY";
    HandkeyPointConfig[HandkeyPointConfig["MAX_HANDS_NUM"] = 10] = "MAX_HANDS_NUM";
})(HandkeyPointConfig = exports.HandkeyPointConfig || (exports.HandkeyPointConfig = {}));
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
var MLLanguageDetection;
(function (MLLanguageDetection) {
    MLLanguageDetection[MLLanguageDetection["FIRST_BEST_DETECTION_LANGUAGE_TRUSTED_THRESHOLD"] = 0.5] = "FIRST_BEST_DETECTION_LANGUAGE_TRUSTED_THRESHOLD";
    MLLanguageDetection[MLLanguageDetection["PROBABILITY_DETECTION_LANGUAGE_TRUSTED_THRESHOLD"] = 0.01] = "PROBABILITY_DETECTION_LANGUAGE_TRUSTED_THRESHOLD";
    MLLanguageDetection["UNDETECTION_LANGUAGE_TRUSTED_THRESHOLD"] = "unknown";
})(MLLanguageDetection = exports.MLLanguageDetection || (exports.MLLanguageDetection = {}));
var MLLivenessConfig;
(function (MLLivenessConfig) {
    MLLivenessConfig[MLLivenessConfig["DEFAULT"] = 0] = "DEFAULT";
    MLLivenessConfig[MLLivenessConfig["CUSTOM"] = 1] = "CUSTOM";
})(MLLivenessConfig = exports.MLLivenessConfig || (exports.MLLivenessConfig = {}));
var MLLivenessCaptureError;
(function (MLLivenessCaptureError) {
    MLLivenessCaptureError[MLLivenessCaptureError["CAMERA_NO_PERMISSION"] = 11401] = "CAMERA_NO_PERMISSION";
    MLLivenessCaptureError[MLLivenessCaptureError["CAMERA_START_FAILED"] = 11402] = "CAMERA_START_FAILED";
    MLLivenessCaptureError[MLLivenessCaptureError["USER_CANCEL"] = 11403] = "USER_CANCEL";
    MLLivenessCaptureError[MLLivenessCaptureError["DETECT_FACE_TIME_OUT"] = 11404] = "DETECT_FACE_TIME_OUT";
    MLLivenessCaptureError[MLLivenessCaptureError["DETECT_MASK"] = 1] = "DETECT_MASK";
})(MLLivenessCaptureError = exports.MLLivenessCaptureError || (exports.MLLivenessCaptureError = {}));
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
var MLRttLanguages;
(function (MLRttLanguages) {
    MLRttLanguages["LAN_ZH_CN"] = "zh-CN";
    MLRttLanguages["LAN_EN_US"] = "en-US";
    MLRttLanguages["LAN_FR_FR"] = "fr-FR";
    MLRttLanguages["LAN_ES_ES"] = "es-ES";
    MLRttLanguages["LAN_EN_IN"] = "en-IN";
    MLRttLanguages["LAN_DE_DE"] = "de-DE";
})(MLRttLanguages = exports.MLRttLanguages || (exports.MLRttLanguages = {}));
var MLRttScenes;
(function (MLRttScenes) {
    MLRttScenes["SCENES_SHOPPINGf"] = "shopping";
})(MLRttScenes = exports.MLRttScenes || (exports.MLRttScenes = {}));
var MLSpeechRealTimeTranscriptionConstants;
(function (MLSpeechRealTimeTranscriptionConstants) {
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["ERR_INVALIDE_TOKEN"] = 13219] = "ERR_INVALIDE_TOKEN";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["ERR_NO_NETWORK"] = 13202] = "ERR_NO_NETWORK";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["ERR_SERVICE_CREDIT"] = 13222] = "ERR_SERVICE_CREDIT";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["ERR_SERVICE_UNSUBSCRIBED"] = 13223] = "ERR_SERVICE_UNSUBSCRIBED";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["ERR_SERVICE_FREE_USED_UP"] = 13224] = "ERR_SERVICE_FREE_USED_UP";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["ERR_SERVICE_UNAVAILABLE"] = 13203] = "ERR_SERVICE_UNAVAILABLE";
    MLSpeechRealTimeTranscriptionConstants["LAN_EN_US"] = " en-US";
    MLSpeechRealTimeTranscriptionConstants["LAN_FR_FR"] = "fr-FR";
    MLSpeechRealTimeTranscriptionConstants["LAN_ZH_CN"] = "zh-CN";
    MLSpeechRealTimeTranscriptionConstants["RESULTS_PARTIALFINAL"] = "RESULTS_PARTIALFINAL";
    MLSpeechRealTimeTranscriptionConstants["RESULTS_RECOGNIZING"] = "results_recognizing";
    MLSpeechRealTimeTranscriptionConstants["RESULTS_SENTENCE_OFFSET"] = "RESULTS_SENTENCE_OFFSET";
    MLSpeechRealTimeTranscriptionConstants["RESULTS_WORD_OFFSET"] = "RESULTS_WORD_OFFSET";
    MLSpeechRealTimeTranscriptionConstants["SCENES_SHOPPING"] = "shopping";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["STATE_SERVICE_RECONNECTED"] = 43] = "STATE_SERVICE_RECONNECTED";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["STATE_SERVICE_RECONNECTING"] = 42] = "STATE_SERVICE_RECONNECTING";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["STATE_LISTENING"] = 1] = "STATE_LISTENING";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["STATE_NO_NETWORK"] = 7] = "STATE_NO_NETWORK";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["STATE_NO_UNDERSTAND"] = 6] = "STATE_NO_UNDERSTAND";
    MLSpeechRealTimeTranscriptionConstants["WAVE_PAINE_BIT_WIDTH"] = "BIT_WIDTH";
    MLSpeechRealTimeTranscriptionConstants["WAVE_PAINE_CHANNEL_COUNT"] = "CHANNEL_COUNT";
    MLSpeechRealTimeTranscriptionConstants["WAVE_PAINE_ENCODING"] = "ENCODING";
    MLSpeechRealTimeTranscriptionConstants["WAVE_PAINE_SAMPLE_RATE"] = "SAMPLE_RATE";
})(MLSpeechRealTimeTranscriptionConstants = exports.MLSpeechRealTimeTranscriptionConstants || (exports.MLSpeechRealTimeTranscriptionConstants = {}));
var MLSkeletonConfig;
(function (MLSkeletonConfig) {
    MLSkeletonConfig[MLSkeletonConfig["SYNC_MODE"] = 0] = "SYNC_MODE";
    MLSkeletonConfig[MLSkeletonConfig["ASYNC_MODE"] = 1] = "ASYNC_MODE";
    MLSkeletonConfig[MLSkeletonConfig["SIMILARITTY_MODE"] = 2] = "SIMILARITTY_MODE";
    MLSkeletonConfig[MLSkeletonConfig["TYPE_YOGA"] = 1] = "TYPE_YOGA";
    MLSkeletonConfig[MLSkeletonConfig["TYPE_NORMAL"] = 0] = "TYPE_NORMAL";
})(MLSkeletonConfig = exports.MLSkeletonConfig || (exports.MLSkeletonConfig = {}));
var MLLocalTextSetting;
(function (MLLocalTextSetting) {
    MLLocalTextSetting[MLLocalTextSetting["OCR_DETECT_MODE"] = 1] = "OCR_DETECT_MODE";
    MLLocalTextSetting[MLLocalTextSetting["OCR_TRACKING_MODE"] = 2] = "OCR_TRACKING_MODE";
})(MLLocalTextSetting = exports.MLLocalTextSetting || (exports.MLLocalTextSetting = {}));
var MLTextConfig;
(function (MLTextConfig) {
    MLTextConfig[MLTextConfig["OCR_LOCAL_TYPE"] = 0] = "OCR_LOCAL_TYPE";
    MLTextConfig[MLTextConfig["OCR_REMOTE_TYPE"] = 1] = "OCR_REMOTE_TYPE";
})(MLTextConfig = exports.MLTextConfig || (exports.MLTextConfig = {}));
var MLTranslateLanguages;
(function (MLTranslateLanguages) {
    MLTranslateLanguages["AFRIKAANS"] = "af";
    MLTranslateLanguages["ARABIC"] = "ar";
    MLTranslateLanguages["BULGARIAN"] = "bg";
    MLTranslateLanguages["BURMESE"] = "my";
    MLTranslateLanguages["CROATIAN"] = "hr";
    MLTranslateLanguages["CZECH"] = "cs";
    MLTranslateLanguages["CHINESE"] = "zh";
    MLTranslateLanguages["TRADITIONAL_CHINESE"] = "zh-hk";
    MLTranslateLanguages["DANISH"] = "da";
    MLTranslateLanguages["DUTCH"] = "nl";
    MLTranslateLanguages["ESTONIAN"] = "et";
    MLTranslateLanguages["ENGLISH"] = "en";
    MLTranslateLanguages["FINNISH"] = "fi";
    MLTranslateLanguages["FRENCH"] = "fr";
    MLTranslateLanguages["GERMAN"] = "de";
    MLTranslateLanguages["GUJARATI"] = "gu";
    MLTranslateLanguages["GREEK"] = "el";
    MLTranslateLanguages["HUNGARIAN"] = "hu";
    MLTranslateLanguages["HINDI"] = "hi";
    MLTranslateLanguages["HEBREW"] = "he";
    MLTranslateLanguages["IRISH"] = "is";
    MLTranslateLanguages["ITALIAN"] = "it";
    MLTranslateLanguages["INDONESIAN"] = "id";
    MLTranslateLanguages["KHMER"] = "km";
    MLTranslateLanguages["KOREAN"] = "ko";
    MLTranslateLanguages["JAPANESE"] = "ja";
    MLTranslateLanguages["LATIN"] = "rm";
    MLTranslateLanguages["LATVIAN"] = "lv";
    MLTranslateLanguages["MALAY"] = "ms";
    MLTranslateLanguages["MARATHI"] = "mr";
    MLTranslateLanguages["NORWEGIAN"] = "no";
    MLTranslateLanguages["PUNJABI"] = "pa";
    MLTranslateLanguages["POLISH"] = "pl";
    MLTranslateLanguages["PORTUGUESE"] = "pt";
    MLTranslateLanguages["PERSIAN"] = "fa";
    MLTranslateLanguages["RUSSIAN"] = "ru";
    MLTranslateLanguages["ROMANIAN"] = "ro";
    MLTranslateLanguages["SERBIAN"] = "sr";
    MLTranslateLanguages["SPANISH"] = "es";
    MLTranslateLanguages["SLOVAK"] = "sk";
    MLTranslateLanguages["SWEDISH"] = "sv";
    MLTranslateLanguages["TAMIL"] = "ta";
    MLTranslateLanguages["TURKISH"] = "tr";
    MLTranslateLanguages["THAI"] = "th";
    MLTranslateLanguages["TAGALOG"] = "tl";
    MLTranslateLanguages["TELUGU"] = "te";
    MLTranslateLanguages["VIETNAMESE"] = "vi";
})(MLTranslateLanguages = exports.MLTranslateLanguages || (exports.MLTranslateLanguages = {}));
var TextLanguage;
(function (TextLanguage) {
    TextLanguage["LANGUAGE_ZH"] = "zh";
    TextLanguage["LANGUAGE_EN"] = "em";
})(TextLanguage = exports.TextLanguage || (exports.TextLanguage = {}));
var MLTextEmbeddibgExceptions;
(function (MLTextEmbeddibgExceptions) {
    MLTextEmbeddibgExceptions["LANGUAGE_ZH"] = "zh";
    MLTextEmbeddibgExceptions["LANGUAGE_EN"] = "en";
    MLTextEmbeddibgExceptions[MLTextEmbeddibgExceptions["ERR_SERVICE_IS_UNAVAILABLE"] = 12199] = "ERR_SERVICE_IS_UNAVAILABLE";
    MLTextEmbeddibgExceptions[MLTextEmbeddibgExceptions["RR_NET_UNAVAILABLE"] = 12198] = "RR_NET_UNAVAILABLE";
    MLTextEmbeddibgExceptions[MLTextEmbeddibgExceptions["ERR_INNER"] = 12101] = "ERR_INNER";
    MLTextEmbeddibgExceptions[MLTextEmbeddibgExceptions["ERR_AUTH_FAILED"] = 12102] = "ERR_AUTH_FAILED";
    MLTextEmbeddibgExceptions[MLTextEmbeddibgExceptions["ERR_PARAM_ILLEGAL"] = 12103] = "ERR_PARAM_ILLEGAL";
    MLTextEmbeddibgExceptions[MLTextEmbeddibgExceptions["ERR_ANALYZE_FAILED"] = 12104] = "ERR_ANALYZE_FAILED";
    MLTextEmbeddibgExceptions[MLTextEmbeddibgExceptions["ERR_AUTH_TOKEN_INVALIDE"] = 12105] = "ERR_AUTH_TOKEN_INVALIDE";
})(MLTextEmbeddibgExceptions = exports.MLTextEmbeddibgExceptions || (exports.MLTextEmbeddibgExceptions = {}));
var MLTtsAudioFragmentConstant;
(function (MLTtsAudioFragmentConstant) {
    MLTtsAudioFragmentConstant[MLTtsAudioFragmentConstant["CHANNEL_OUT_MONO"] = 4] = "CHANNEL_OUT_MONO";
    MLTtsAudioFragmentConstant[MLTtsAudioFragmentConstant["FORMAT_PCM_16BIT"] = 2] = "FORMAT_PCM_16BIT";
    MLTtsAudioFragmentConstant[MLTtsAudioFragmentConstant["FORMAT_PCM_8BIT"] = 1] = "FORMAT_PCM_8BIT";
    MLTtsAudioFragmentConstant[MLTtsAudioFragmentConstant["SAMPLE_RATE_16K"] = 16000] = "SAMPLE_RATE_16K";
})(MLTtsAudioFragmentConstant = exports.MLTtsAudioFragmentConstant || (exports.MLTtsAudioFragmentConstant = {}));
var MLTtsConstants;
(function (MLTtsConstants) {
    MLTtsConstants[MLTtsConstants["EVENT_PLAY_START"] = 1] = "EVENT_PLAY_START";
    MLTtsConstants[MLTtsConstants["EVENT_PLAY_RESUME"] = 2] = "EVENT_PLAY_RESUME";
    MLTtsConstants[MLTtsConstants["EVENT_PLAY_PAUSE"] = 3] = "EVENT_PLAY_PAUSE";
    MLTtsConstants[MLTtsConstants["EVENT_PLAY_STOP"] = 4] = "EVENT_PLAY_STOP";
    MLTtsConstants[MLTtsConstants["EVENT_SYNTHESIS_START"] = 5] = "EVENT_SYNTHESIS_START";
    MLTtsConstants[MLTtsConstants["EVENT_SYNTHESIS_END"] = 6] = "EVENT_SYNTHESIS_END";
    MLTtsConstants[MLTtsConstants["EVENT_SYNTHESIS_COMPLETE"] = 7] = "EVENT_SYNTHESIS_COMPLETE";
    MLTtsConstants["EVENT_PLAY_STOP_INTERRUPTED"] = "interrupted";
    MLTtsConstants["EVENT_SYNTHESIS_INTERRUPTED"] = "interrupted";
    MLTtsConstants[MLTtsConstants["LANGUAGE_AVAILABLE"] = 0] = "LANGUAGE_AVAILABLE";
    MLTtsConstants[MLTtsConstants["LANGUAGE_NOT_SUPPORT"] = 1] = "LANGUAGE_NOT_SUPPORT";
    MLTtsConstants[MLTtsConstants["LANGUAGE_UPDATING"] = 2] = "LANGUAGE_UPDATING";
    MLTtsConstants["TTS_EN_US"] = "en-US";
    MLTtsConstants["TTS_LAN_AR_AR"] = "ar-AR";
    MLTtsConstants["TTS_LAN_TR_TR"] = "tr-TR";
    MLTtsConstants["TTS_SPEAKER_FEMALE_AR"] = "ar-AR-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_TR"] = "tr-TR-st-1";
    MLTtsConstants["TTS_LAN_ES_ES"] = "es-ES";
    MLTtsConstants["TTS_LAN_FR_FR"] = "fr-FR";
    MLTtsConstants["TTS_LAN_DE_DE"] = "de-DE";
    MLTtsConstants["TTS_LAN_IT_IT"] = "it-IT";
    MLTtsConstants["TTS_LAN_RU_RU"] = "ru-RU";
    MLTtsConstants["TTS_LAN_PL_PL"] = "pl-PL";
    MLTtsConstants["TTS_LAN_TH_TH"] = " th-TH";
    MLTtsConstants["TTS_LAN_MS_MS"] = "ms-MS";
    MLTtsConstants["TTS_ZH_HANS"] = "zh-Hans";
    MLTtsConstants["TTS_SPEAKER_FEMALE_EN"] = "Female-en";
    MLTtsConstants["TTS_SPEAKER_FEMALE_ZH"] = "Female-zh";
    MLTtsConstants["TTS_SPEAKER_MALE_EN"] = "Male-en";
    MLTtsConstants["TTS_SPEAKER_MALE_ZH"] = "Male-zh";
    MLTtsConstants["TTS_SPEAKER_MALE_ZH_2"] = "zh-Hans-st-4";
    MLTtsConstants["TTS_SPEAKER_FEMALE_ZH_2"] = "zh-Hans-st-3";
    MLTtsConstants["TTS_SPEAKER_MALE_EN_2"] = "en-US-st-4";
    MLTtsConstants["TTS_SPEAKER_FEMALE_EN_2"] = "en-US-st-3";
    MLTtsConstants["TTS_SPEAKER_FEMALE_DE"] = "de-DE-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_ES"] = "it-IT-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_IT"] = "es-ES-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_FR"] = "fr-FR-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_RU"] = "ru-RU-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_PL"] = "pl-PL-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_TH"] = "th-TH-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_MS"] = "ms-MS-st-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_EN_US_MALE_BOLT"] = "en-US-st-bolt-2";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_ZH_HANS_FEMALE_EAGLE"] = "zh-Hans-st-eagle-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_ZH_HANS_MALE_EAGLE"] = "zh-Hans-st-eagle-2";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_EN_US_FEMALE_EAGLE"] = "en-US-st-eagle-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_EN_US_MALE_EAGLE"] = "en-US-st-eagle-2";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_EN_US_FEMALE_BEE"] = "en-US-st-bee-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_FR_FR_FEMALE_BEE"] = "fr-FR-st-bee-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_ES_ES_FEMALE_BEE"] = "es-ES-st-bee-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_DE_DE_FEMALE_BEE"] = "de-DE-st-bee-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_IT_IT_FEMALE_BEE"] = "it-IT-st-bee-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_ZH_HANS_FEMALE_BOLT"] = "zh-Hans-st-bolt-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_ZH_HANS_MALE_BOLT"] = "zh-Hans-st-bolt-2";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_EN_US_FEMALE_BOLT"] = "en-US-st-bolt-1";
    MLTtsConstants["TTS_ONLINE_MODE"] = "online";
    MLTtsConstants["TTS_OFFLINE_MODE"] = "offline";
    MLTtsConstants[MLTtsConstants["QUEUE_APPEND"] = 0] = "QUEUE_APPEND";
    MLTtsConstants[MLTtsConstants["QUEUE_FLUSH"] = 1] = "QUEUE_FLUSH";
    MLTtsConstants[MLTtsConstants["EXTERNAL_PLAYBACK"] = 2] = "EXTERNAL_PLAYBACK";
    MLTtsConstants[MLTtsConstants["OPEN_STREAM"] = 4] = "OPEN_STREAM";
})(MLTtsConstants = exports.MLTtsConstants || (exports.MLTtsConstants = {}));
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
var RectStyle;
(function (RectStyle) {
    RectStyle[RectStyle["STROKE"] = 1] = "STROKE";
    RectStyle[RectStyle["FILL"] = 2] = "FILL";
    RectStyle[RectStyle["FILL_AND_STROKE"] = 3] = "FILL_AND_STROKE";
})(RectStyle = exports.RectStyle || (exports.RectStyle = {}));
var MLTtsError;
(function (MLTtsError) {
    MLTtsError[MLTtsError["ERR_AUDIO_PLAYER_FAILED"] = 11305] = "ERR_AUDIO_PLAYER_FAILED";
    MLTtsError[MLTtsError["ERR_AUTHORIZE_FAILED"] = 11306] = "ERR_AUTHORIZE_FAILED";
    MLTtsError[MLTtsError["ERR_AUTHORIZE_TOKEN_INVALIDE"] = 11307] = "ERR_AUTHORIZE_TOKEN_INVALIDE";
    MLTtsError[MLTtsError["ERR_ILLEGAL_PARAMETER"] = 11301] = "ERR_ILLEGAL_PARAMETER";
    MLTtsError[MLTtsError["ERR_INSUFFICIENT_BALANCE"] = 11303] = "ERR_INSUFFICIENT_BALANCE";
    MLTtsError[MLTtsError["ERR_INTERNAL"] = 11398] = "ERR_INTERNAL";
    MLTtsError[MLTtsError["ERR_NETCONNECT_FAILED"] = 11302] = "ERR_NETCONNECT_FAILED";
    MLTtsError[MLTtsError["ERR_SPEECH_SYNTHESIS_FAILED"] = 11304] = "ERR_SPEECH_SYNTHESIS_FAILED";
    MLTtsError[MLTtsError["ERR_UNKNOWN"] = 11399] = "ERR_UNKNOWN";
})(MLTtsError = exports.MLTtsError || (exports.MLTtsError = {}));
var MLAftErrorCodes;
(function (MLAftErrorCodes) {
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUDIO_FILE_NOTSUPPORTED"] = 11101] = "ERR_AUDIO_FILE_NOTSUPPORTED";
    MLAftErrorCodes[MLAftErrorCodes["LANGUAGE_CODE_NOTSUPPORTED"] = 11102] = "LANGUAGE_CODE_NOTSUPPORTED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUDIO_FILE_SIZE_OVERFLOW"] = 11103] = "ERR_AUDIO_FILE_SIZE_OVERFLOW";
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUDIO_LENGTH_OVERFLOW"] = 11104] = "ERR_AUDIO_LENGTH_OVERFLOW";
    MLAftErrorCodes[MLAftErrorCodes["ERR_FILE_NOT_FOUND"] = 11105] = "ERR_FILE_NOT_FOUND";
    MLAftErrorCodes[MLAftErrorCodes["ERR_ILLEGAL_PARAMETER"] = 11106] = "ERR_ILLEGAL_PARAMETER";
    MLAftErrorCodes[MLAftErrorCodes["ERR_ENGINE_BUSY"] = 11107] = "ERR_ENGINE_BUSY";
    MLAftErrorCodes[MLAftErrorCodes["ERR_NETCONNECT_FAILED"] = 11108] = "ERR_NETCONNECT_FAILED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_RESULT_WHEN_UPLOADING"] = 11109] = "ERR_RESULT_WHEN_UPLOADING";
    MLAftErrorCodes[MLAftErrorCodes["ERR_TASK_NOT_EXISTED"] = 11110] = "ERR_TASK_NOT_EXISTED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUDIO_TRANSCRIPT_FAILED"] = 11111] = "ERR_AUDIO_TRANSCRIPT_FAILED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUDIO_INIT_FAILED"] = 11112] = "ERR_AUDIO_INIT_FAILED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUDIO_UPLOAD_FAILED"] = 11113] = "ERR_AUDIO_UPLOAD_FAILED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_TASK_ALREADY_INPROGRESS"] = 11114] = "ERR_TASK_ALREADY_INPROGRESS";
    MLAftErrorCodes[MLAftErrorCodes["ERR_NO_ENOUGH_STORAGE"] = 11115] = "ERR_NO_ENOUGH_STORAGE";
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUTHORIZE_FAILED"] = 11119] = "ERR_AUTHORIZE_FAILED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_SERVICE_CREDIT"] = 11122] = "ERR_SERVICE_CREDIT";
    MLAftErrorCodes[MLAftErrorCodes["ERR_SERVICE_UNSUBSCRIBED"] = 11123] = "ERR_SERVICE_UNSUBSCRIBED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_SERVICE_FREE_USED_UP"] = 11124] = "ERR_SERVICE_FREE_USED_UP";
    MLAftErrorCodes[MLAftErrorCodes["ERR_INTERNAL"] = 11198] = "ERR_INTERNAL";
    MLAftErrorCodes[MLAftErrorCodes["ERR_UNKNOWN"] = 11199] = "ERR_UNKNOWN";
})(MLAftErrorCodes = exports.MLAftErrorCodes || (exports.MLAftErrorCodes = {}));
var MLAFTEventCodes;
(function (MLAFTEventCodes) {
    MLAFTEventCodes[MLAFTEventCodes["PAUSE_EVENT"] = 2] = "PAUSE_EVENT";
    MLAFTEventCodes[MLAFTEventCodes["STOP_EVENT"] = 3] = "STOP_EVENT";
    MLAFTEventCodes[MLAFTEventCodes["UPLOADED_EVENT"] = 1] = "UPLOADED_EVENT";
})(MLAFTEventCodes = exports.MLAFTEventCodes || (exports.MLAFTEventCodes = {}));
var MLAftConstants;
(function (MLAftConstants) {
    MLAftConstants["LANGUAGE_ZH"] = "zh";
    MLAftConstants["LANGUAGE_EN_US"] = "en-US";
})(MLAftConstants = exports.MLAftConstants || (exports.MLAftConstants = {}));
var MLFaceConstant;
(function (MLFaceConstant) {
    MLFaceConstant[MLFaceConstant["UNANALYZED_POSSIBILITY"] = -1] = "UNANALYZED_POSSIBILITY";
})(MLFaceConstant = exports.MLFaceConstant || (exports.MLFaceConstant = {}));
var handkeyPointsTypes;
(function (handkeyPointsTypes) {
    handkeyPointsTypes[handkeyPointsTypes["TYPE_WRIST"] = 0] = "TYPE_WRIST";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_THUMB_FIRST"] = 1] = "TYPE_THUMB_FIRST";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_THUMB_SECOND"] = 2] = "TYPE_THUMB_SECOND";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_THUMB_THIRD"] = 3] = "TYPE_THUMB_THIRD";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_THUMB_FOURTH"] = 4] = "TYPE_THUMB_FOURTH";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_FOREFINGER_FIRST"] = 5] = "TYPE_FOREFINGER_FIRST";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_FOREFINGER_SECOND"] = 6] = "TYPE_FOREFINGER_SECOND";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_FOREFINGER_THIRD"] = 7] = "TYPE_FOREFINGER_THIRD";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_FOREFINGER_FOURTH"] = 8] = "TYPE_FOREFINGER_FOURTH";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_MIDDLE_FINGER_FIRST"] = 9] = "TYPE_MIDDLE_FINGER_FIRST";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_MIDDLE_FINGER_SECOND"] = 10] = "TYPE_MIDDLE_FINGER_SECOND";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_MIDDLE_FINGER_THIRD"] = 11] = "TYPE_MIDDLE_FINGER_THIRD";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_MIDDLE_FINGER_FOURTH"] = 12] = "TYPE_MIDDLE_FINGER_FOURTH";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_RING_FINGER_FIRST"] = 13] = "TYPE_RING_FINGER_FIRST";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_RING_FINGER_SECOND"] = 14] = "TYPE_RING_FINGER_SECOND";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_RING_FINGER_THIRD"] = 15] = "TYPE_RING_FINGER_THIRD";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_RING_FINGER_FOURTH"] = 16] = "TYPE_RING_FINGER_FOURTH";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_LITTLE_FINGER_FIRST"] = 17] = "TYPE_LITTLE_FINGER_FIRST";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_LITTLE_FINGER_SECOND"] = 18] = "TYPE_LITTLE_FINGER_SECOND";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_LITTLE_FINGER_THIRD"] = 19] = "TYPE_LITTLE_FINGER_THIRD";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_LITTLE_FINGER_FOURTH"] = 20] = "TYPE_LITTLE_FINGER_FOURTH";
})(handkeyPointsTypes = exports.handkeyPointsTypes || (exports.handkeyPointsTypes = {}));
var MLJointPoints;
(function (MLJointPoints) {
    MLJointPoints[MLJointPoints["TYPE_RIGHT_SHOULDER"] = 101] = "TYPE_RIGHT_SHOULDER";
    MLJointPoints[MLJointPoints["TYPE_RIGHT_ELBOW"] = 102] = "TYPE_RIGHT_ELBOW";
    MLJointPoints[MLJointPoints["TYPE_RIGHT_WRIST"] = 103] = "TYPE_RIGHT_WRIST";
    MLJointPoints[MLJointPoints["TYPE_LEFT_SHOULDER"] = 104] = "TYPE_LEFT_SHOULDER";
    MLJointPoints[MLJointPoints["TYPE_LEFT_ELBOW"] = 105] = "TYPE_LEFT_ELBOW";
    MLJointPoints[MLJointPoints["TYPE_LEFT_WRIST"] = 106] = "TYPE_LEFT_WRIST";
    MLJointPoints[MLJointPoints["TYPE_RIGHT_HIP"] = 107] = "TYPE_RIGHT_HIP";
    MLJointPoints[MLJointPoints["TYPE_RIGHT_KNEE"] = 108] = "TYPE_RIGHT_KNEE";
    MLJointPoints[MLJointPoints["TYPE_RIGHT_ANKLE"] = 109] = "TYPE_RIGHT_ANKLE";
    MLJointPoints[MLJointPoints["TYPE_LEFT_HIP"] = 110] = "TYPE_LEFT_HIP";
    MLJointPoints[MLJointPoints["TYPE_LEFT_KNEE"] = 111] = "TYPE_LEFT_KNEE";
    MLJointPoints[MLJointPoints["TYPE_LEFT_ANKLE"] = 112] = "TYPE_LEFT_ANKLE";
    MLJointPoints[MLJointPoints["TYPE_HEAD_TOP"] = 113] = "TYPE_HEAD_TOP";
    MLJointPoints[MLJointPoints["TYPE_NECK"] = 114] = "TYPE_NECK";
})(MLJointPoints = exports.MLJointPoints || (exports.MLJointPoints = {}));
var MLSoundDectSoundTypeResult;
(function (MLSoundDectSoundTypeResult) {
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_DECT_ERROR_NO_MEM"] = 12201] = "SOUND_DECT_ERROR_NO_MEM";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_DECT_ERROR_FATAL_ERROR"] = 12202] = "SOUND_DECT_ERROR_FATAL_ERROR";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_DECT_ERROR_AUDIO"] = 12203] = "SOUND_DECT_ERROR_AUDIO";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_DECT_ERROR_INTERNAL"] = 12298] = "SOUND_DECT_ERROR_INTERNAL";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_LAUGHTER"] = 0] = "SOUND_EVENT_TYPE_LAUGHTER";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_BABY_CRY"] = 1] = "SOUND_EVENT_TYPE_BABY_CRY";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_SNORING"] = 2] = "SOUND_EVENT_TYPE_SNORING";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_SNEEZE"] = 3] = "SOUND_EVENT_TYPE_SNEEZE";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_SCREAMING"] = 4] = "SOUND_EVENT_TYPE_SCREAMING";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_MEOW"] = 5] = "SOUND_EVENT_TYPE_MEOW";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_BARK"] = 6] = "SOUND_EVENT_TYPE_BARK";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_WATER"] = 7] = "SOUND_EVENT_TYPE_WATER";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_CAR_ALARM"] = 8] = "SOUND_EVENT_TYPE_CAR_ALARM";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_DOOR_BELL"] = 9] = "SOUND_EVENT_TYPE_DOOR_BELL";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_KNOCK"] = 10] = "SOUND_EVENT_TYPE_KNOCK";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_ALARM"] = 11] = "SOUND_EVENT_TYPE_ALARM";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_STEAM_WHISTLE"] = 12] = "SOUND_EVENT_TYPE_STEAM_WHISTLE";
})(MLSoundDectSoundTypeResult = exports.MLSoundDectSoundTypeResult || (exports.MLSoundDectSoundTypeResult = {}));
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
//# sourceMappingURL=Interfaces.js.map