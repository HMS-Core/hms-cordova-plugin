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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
import { Observable } from 'rxjs';
export var MLFlashMode;
(function (MLFlashMode) {
    MLFlashMode["AUTO"] = "auto";
    MLFlashMode["ON"] = "on";
    MLFlashMode["OFF"] = "off";
})(MLFlashMode || (MLFlashMode = {}));
export var MLLensType;
(function (MLLensType) {
    MLLensType[MLLensType["BACK_LENS"] = 0] = "BACK_LENS";
    MLLensType[MLLensType["FRONT_LENS"] = 1] = "FRONT_LENS";
})(MLLensType || (MLLensType = {}));
export var MLStillCompositerName;
(function (MLStillCompositerName) {
    MLStillCompositerName["FACE"] = "FACE";
    MLStillCompositerName["HAND"] = "HAND";
    MLStillCompositerName["SKELETON"] = "SKELETON";
    MLStillCompositerName["OBJECT"] = "OBJECT";
    MLStillCompositerName["TEXT"] = "TEXT";
    MLStillCompositerName["CLASSIFICATION"] = "classification";
})(MLStillCompositerName || (MLStillCompositerName = {}));
export var MLAnalyzerName;
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
})(MLAnalyzerName || (MLAnalyzerName = {}));
export var MLFrame;
(function (MLFrame) {
    MLFrame["getPreviewBitmap"] = "getPreviewBitmap";
    MLFrame["readBitmap"] = "readBitmap";
    MLFrame["rotate"] = "rotate";
})(MLFrame || (MLFrame = {}));
export var FEATURE;
(function (FEATURE) {
    FEATURE[FEATURE["FEATURE_ALLINONE"] = 12] = "FEATURE_ALLINONE";
    FEATURE[FEATURE["FEATURE_WORDFLUX"] = 11] = "FEATURE_WORDFLUX";
})(FEATURE || (FEATURE = {}));
export var LANGUAGE;
(function (LANGUAGE) {
    LANGUAGE["LAN_EN_US"] = "en-US";
    LANGUAGE["LAN_FR_FR"] = "fr-FR";
    LANGUAGE["LAN_ZH"] = "zh";
    LANGUAGE["LAN_ZH_CN"] = "zh-CN";
    LANGUAGE["LAN_ES_ES"] = "es-ES";
    LANGUAGE["LAN_DE_DE"] = "de-DE";
})(LANGUAGE || (LANGUAGE = {}));
export var MLBcrCaptureConfig;
(function (MLBcrCaptureConfig) {
    MLBcrCaptureConfig[MLBcrCaptureConfig["ORIENTATION_AUTO"] = 0] = "ORIENTATION_AUTO";
    MLBcrCaptureConfig[MLBcrCaptureConfig["ORIENTATION_LANDSCAPE"] = 1] = "ORIENTATION_LANDSCAPE";
    MLBcrCaptureConfig[MLBcrCaptureConfig["ORIENTATION_PORTRAIT"] = 2] = "ORIENTATION_PORTRAIT";
})(MLBcrCaptureConfig || (MLBcrCaptureConfig = {}));
export var MLBcrResultConfig;
(function (MLBcrResultConfig) {
    MLBcrResultConfig[MLBcrResultConfig["RESULT_NUM_ONLY"] = 0] = "RESULT_NUM_ONLY";
    MLBcrResultConfig[MLBcrResultConfig["RESULT_SIMPLE"] = 1] = "RESULT_SIMPLE";
    MLBcrResultConfig[MLBcrResultConfig["RESULT_ALL"] = 2] = "RESULT_ALL";
})(MLBcrResultConfig || (MLBcrResultConfig = {}));
export var MLImageClassificationConfig;
(function (MLImageClassificationConfig) {
    MLImageClassificationConfig[MLImageClassificationConfig["TYPE_LOCAL"] = 0] = "TYPE_LOCAL";
    MLImageClassificationConfig[MLImageClassificationConfig["TYPE_REMOTE"] = 1] = "TYPE_REMOTE";
})(MLImageClassificationConfig || (MLImageClassificationConfig = {}));
export var DownloadStrategyCustom;
(function (DownloadStrategyCustom) {
    DownloadStrategyCustom[DownloadStrategyCustom["REGION_DR_CHINA"] = 1002] = "REGION_DR_CHINA";
    DownloadStrategyCustom[DownloadStrategyCustom["REGION_DR_AFILA"] = 1003] = "REGION_DR_AFILA";
    DownloadStrategyCustom[DownloadStrategyCustom["REGION_DR_EUROPE"] = 1004] = "REGION_DR_EUROPE";
    DownloadStrategyCustom[DownloadStrategyCustom["REGION_DR_RUSSIA"] = 1005] = "REGION_DR_RUSSIA";
})(DownloadStrategyCustom || (DownloadStrategyCustom = {}));
export var MLRemoteTextSetting;
(function (MLRemoteTextSetting) {
    MLRemoteTextSetting[MLRemoteTextSetting["OCR_LOOSE_SCENE"] = 1] = "OCR_LOOSE_SCENE";
    MLRemoteTextSetting[MLRemoteTextSetting["OCR_COMPACT_SCENE"] = 2] = "OCR_COMPACT_SCENE";
    MLRemoteTextSetting["NGON"] = "NGON";
    MLRemoteTextSetting["ARC"] = "ARC";
})(MLRemoteTextSetting || (MLRemoteTextSetting = {}));
export var MLFormRecogitionConfig;
(function (MLFormRecogitionConfig) {
    MLFormRecogitionConfig[MLFormRecogitionConfig["SYNC_TYPE"] = 1] = "SYNC_TYPE";
    MLFormRecogitionConfig[MLFormRecogitionConfig["ASYNC_TYPE"] = 0] = "ASYNC_TYPE";
})(MLFormRecogitionConfig || (MLFormRecogitionConfig = {}));
export var MLFaceConfigs;
(function (MLFaceConfigs) {
    MLFaceConfigs[MLFaceConfigs["TYPE_2D_SYNC"] = 0] = "TYPE_2D_SYNC";
    MLFaceConfigs[MLFaceConfigs["TYPE_2D_ASYNC"] = 1] = "TYPE_2D_ASYNC";
    MLFaceConfigs[MLFaceConfigs["TYPE_3D_SYNC"] = 2] = "TYPE_3D_SYNC";
    MLFaceConfigs[MLFaceConfigs["TYPE_3D_ASYNC"] = 3] = "TYPE_3D_ASYNC";
})(MLFaceConfigs || (MLFaceConfigs = {}));
export var MLFaceSetting;
(function (MLFaceSetting) {
    MLFaceSetting[MLFaceSetting["TYPE_FEATURES"] = 1] = "TYPE_FEATURES";
    MLFaceSetting[MLFaceSetting["TYPE_UNSUPPORT_FEATURES"] = 2] = "TYPE_UNSUPPORT_FEATURES";
    MLFaceSetting[MLFaceSetting["TYPE_KEYPOINTS"] = 0] = "TYPE_KEYPOINTS";
    MLFaceSetting[MLFaceSetting["TYPE_UNSUPPORT_KEYPOINTS"] = 2] = "TYPE_UNSUPPORT_KEYPOINTS";
    MLFaceSetting[MLFaceSetting["TYPE_PRECISION"] = 1] = "TYPE_PRECISION";
    MLFaceSetting[MLFaceSetting["TYPE_SPEED"] = 2] = "TYPE_SPEED";
    MLFaceSetting[MLFaceSetting["TYPE_SHAPES"] = 2] = "TYPE_SHAPES";
    MLFaceSetting[MLFaceSetting["TYPE_UNSUPPORT_SHAPES"] = 3] = "TYPE_UNSUPPORT_SHAPES";
    MLFaceSetting[MLFaceSetting["TYPE_FEATURE_EMOTION"] = 4] = "TYPE_FEATURE_EMOTION";
    MLFaceSetting[MLFaceSetting["TYPE_FEATURE_EYEGLASS"] = 8] = "TYPE_FEATURE_EYEGLASS";
    MLFaceSetting[MLFaceSetting["TYPE_FEATURE_HAT"] = 16] = "TYPE_FEATURE_HAT";
    MLFaceSetting[MLFaceSetting["TYPE_FEATURE_BEARD"] = 32] = "TYPE_FEATURE_BEARD";
    MLFaceSetting[MLFaceSetting["TYPE_FEATURE_OPENCLOSEEYE"] = 64] = "TYPE_FEATURE_OPENCLOSEEYE";
    MLFaceSetting[MLFaceSetting["TYPE_FEATURE_GENDAR"] = 128] = "TYPE_FEATURE_GENDAR";
    MLFaceSetting[MLFaceSetting["TYPE_FEATURE_AGE"] = 256] = "TYPE_FEATURE_AGE";
    MLFaceSetting[MLFaceSetting["MODE_TRACING_FAST"] = 1] = "MODE_TRACING_FAST";
    MLFaceSetting[MLFaceSetting["MODE_TRACING_ROBUST"] = 2] = "MODE_TRACING_ROBUST";
})(MLFaceSetting || (MLFaceSetting = {}));
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
export var syncType;
(function (syncType) {
    syncType[syncType["SYNC_MODE"] = 0] = "SYNC_MODE";
    syncType[syncType["ASYNC_MODE"] = 1] = "ASYNC_MODE";
})(syncType || (syncType = {}));
export var HandkeyPointConfig;
(function (HandkeyPointConfig) {
    HandkeyPointConfig[HandkeyPointConfig["TYPE_ALL"] = 0] = "TYPE_ALL";
    HandkeyPointConfig[HandkeyPointConfig["TYPE_KEYPOINT_ONLY"] = 1] = "TYPE_KEYPOINT_ONLY";
    HandkeyPointConfig[HandkeyPointConfig["TYPE_RECT_ONLY"] = 2] = "TYPE_RECT_ONLY";
})(HandkeyPointConfig || (HandkeyPointConfig = {}));
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
export var MLImageSegmentationSetting;
(function (MLImageSegmentationSetting) {
    MLImageSegmentationSetting[MLImageSegmentationSetting["BODY_SEG"] = 0] = "BODY_SEG";
    MLImageSegmentationSetting[MLImageSegmentationSetting["IMAGE_SEG"] = 1] = "IMAGE_SEG";
})(MLImageSegmentationSetting || (MLImageSegmentationSetting = {}));
export var MLImageSegmentationScene;
(function (MLImageSegmentationScene) {
    MLImageSegmentationScene[MLImageSegmentationScene["ALL"] = 0] = "ALL";
    MLImageSegmentationScene[MLImageSegmentationScene["MASK_ONLY"] = 1] = "MASK_ONLY";
    MLImageSegmentationScene[MLImageSegmentationScene["FOREGROUND_ONLY"] = 2] = "FOREGROUND_ONLY";
    MLImageSegmentationScene[MLImageSegmentationScene["GRAYSCALE_ONLY"] = 3] = "GRAYSCALE_ONLY";
})(MLImageSegmentationScene || (MLImageSegmentationScene = {}));
export var MLRemoteLandmarkSetting;
(function (MLRemoteLandmarkSetting) {
    MLRemoteLandmarkSetting[MLRemoteLandmarkSetting["STEADY_PATTERN"] = 1] = "STEADY_PATTERN";
    MLRemoteLandmarkSetting[MLRemoteLandmarkSetting["NEWEST_PATTERN"] = 2] = "NEWEST_PATTERN";
})(MLRemoteLandmarkSetting || (MLRemoteLandmarkSetting = {}));
export var MLLivenessConfig;
(function (MLLivenessConfig) {
    MLLivenessConfig[MLLivenessConfig["DEFAULT"] = 0] = "DEFAULT";
    MLLivenessConfig[MLLivenessConfig["CUSTOM"] = 1] = "CUSTOM";
})(MLLivenessConfig || (MLLivenessConfig = {}));
export var MlObjectAnalyserConfig;
(function (MlObjectAnalyserConfig) {
    MlObjectAnalyserConfig[MlObjectAnalyserConfig["TYPE_VIDEO"] = 1] = "TYPE_VIDEO";
    MlObjectAnalyserConfig[MlObjectAnalyserConfig["TYPE_PICTURE"] = 0] = "TYPE_PICTURE";
})(MlObjectAnalyserConfig || (MlObjectAnalyserConfig = {}));
export var MLRttLanguages;
(function (MLRttLanguages) {
    MLRttLanguages["LAN_ZH_CN"] = "zh-CN";
    MLRttLanguages["LAN_EN_US"] = "en-US";
    MLRttLanguages["LAN_FR_FR"] = "fr-FR";
    MLRttLanguages["LAN_ES_ES"] = "es-ES";
    MLRttLanguages["LAN_EN_IN"] = "en-IN";
    MLRttLanguages["LAN_DE_DE"] = "de-DE";
})(MLRttLanguages || (MLRttLanguages = {}));
export var MLRttScenes;
(function (MLRttScenes) {
    MLRttScenes["SCENES_SHOPPING"] = "shopping";
})(MLRttScenes || (MLRttScenes = {}));
export var MLSkeletonConfig;
(function (MLSkeletonConfig) {
    MLSkeletonConfig[MLSkeletonConfig["SYNC_MODE"] = 0] = "SYNC_MODE";
    MLSkeletonConfig[MLSkeletonConfig["ASYNC_MODE"] = 1] = "ASYNC_MODE";
    MLSkeletonConfig[MLSkeletonConfig["SIMILARITTY_MODE"] = 2] = "SIMILARITTY_MODE";
    MLSkeletonConfig[MLSkeletonConfig["TYPE_YOGA"] = 1] = "TYPE_YOGA";
    MLSkeletonConfig[MLSkeletonConfig["TYPE_NORMAL"] = 0] = "TYPE_NORMAL";
})(MLSkeletonConfig || (MLSkeletonConfig = {}));
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
export var MLTtsConstants;
(function (MLTtsConstants) {
    MLTtsConstants["TTS_EN_US"] = "en-US";
    MLTtsConstants["TTS_LAN_ES_ES"] = "es-ES";
    MLTtsConstants["TTS_LAN_FR_FR"] = "fr-FR";
    MLTtsConstants["TTS_LAN_DE_DE"] = "de-DE";
    MLTtsConstants["TTS_LAN_IT_IT"] = "it-IT";
    MLTtsConstants["TTS_ZH_HANS"] = "zh-Hans";
    MLTtsConstants["TTS_SPEAKER_FEMALE_EN"] = "Female-en";
    MLTtsConstants["TTS_SPEAKER_FEMALE_ZH"] = "Female-zh";
    MLTtsConstants["TTS_SPEAKER_MALE_EN"] = "Male-en";
    MLTtsConstants["TTS_SPEAKER_MALE_ZH"] = "Male-zh";
    MLTtsConstants["TTS_SPEAKER_FEMALE_DE"] = "de-DE-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_ES"] = "it-IT-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_IT"] = "es-ES-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_FR"] = "fr-FR-st-1";
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
})(MLTtsConstants || (MLTtsConstants = {}));
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
export var RectStyle;
(function (RectStyle) {
    RectStyle[RectStyle["STROKE"] = 1] = "STROKE";
    RectStyle[RectStyle["FILL"] = 2] = "FILL";
    RectStyle[RectStyle["FILL_AND_STROKE"] = 3] = "FILL_AND_STROKE";
})(RectStyle || (RectStyle = {}));
export var MLAftErrorCodes;
(function (MLAftErrorCodes) {
    MLAftErrorCodes[MLAftErrorCodes["EROTSUPPORTED"] = 11101] = "EROTSUPPORTED";
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
    MLAftErrorCodes[MLAftErrorCodes["ERR_INTERNAL"] = 11198] = "ERR_INTERNAL";
    MLAftErrorCodes[MLAftErrorCodes["ERR_UNKNOWN"] = 11199] = "ERR_UNKNOWN";
})(MLAftErrorCodes || (MLAftErrorCodes = {}));
export var MLAFTEventCodes;
(function (MLAFTEventCodes) {
    MLAFTEventCodes[MLAFTEventCodes["PAUSE_EVENT"] = 2] = "PAUSE_EVENT";
    MLAFTEventCodes[MLAFTEventCodes["STOP_EVENT"] = 3] = "STOP_EVENT";
    MLAFTEventCodes[MLAFTEventCodes["UPLOADED_EVENT"] = 1] = "UPLOADED_EVENT";
})(MLAFTEventCodes || (MLAFTEventCodes = {}));
export var MLSoundDectSoundTypeResult;
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
})(MLSoundDectSoundTypeResult || (MLSoundDectSoundTypeResult = {}));
var HMSMLKitOriginal = /** @class */ (function (_super) {
    __extends(HMSMLKitOriginal, _super);
    function HMSMLKitOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adjusts the focal length of the camera based on the scaling coefficient (digital zoom).
     * @param  {doZoomReq} doZoomReq Reperesents the necessary parameters.
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.doZoom = function (doZoomReq) { return cordova(this, "doZoom", { "otherPromise": true }, arguments); };
    ;
    /**
     * Monitors photographing.
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.photograph = function () { return cordova(this, "photograph", { "otherPromise": true }, arguments); };
    ;
    /**
     * Close lens engine.
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.destroy = function () { return cordova(this, "destroy", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains the size of the preview image of a camera.
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.getDisplayDimension = function () { return cordova(this, "getDisplayDimension", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains the selected camera type.
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.getLensType = function () { return cordova(this, "getLensType", { "otherPromise": true }, arguments); };
    ;
    /**
     * It checks the permissions required to use this Kit.
     * @param  {CheckPermissionReq} permissionListInput Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.hasPermissions = function (permissionListReq) { return cordova(this, "hasPermissions", { "otherPromise": true }, arguments); };
    ;
    /**
     * It gets the necessary permissions.
     * @param  {RequestPermissionReq} permissionListInput Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.requestPermissions = function (permissionListInput) { return cordova(this, "requestPermissions", { "otherPromise": true }, arguments); };
    ;
    /**
     * It sets Api Key or access token for application.
     * @param  {configReq} params Represents your API_KEY.
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.serviceInitializer = function (params) { return cordova(this, "serviceInitializer", { "otherPromise": true }, arguments); };
    ;
    /**
     * This service recognize the image from the picture and return what the picture can be with the percentages. Use ML Libraries.
     * @param  {ownCustomModelReq | downloadModelReq} customModelReq Represents the parameter required for custom model analyser.
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.customModelAnalyser = function (customModelReq) { return cordova(this, "customModelAnalyser", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains Frame.
     * @param  {mlFrameReq} mlFrameReq Represents the parameter required.
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.mlFrame = function (mlFrameReq) { return cordova(this, "mlFrame", { "otherPromise": true }, arguments); };
    ;
    /**
     * An app information class used to store basic information about apps with the HMS Core ML SDK integrated and complete the initialization of ML Kit. When using cloud services of the ML Kit, you need to set the apiKey of your app.
     * @param  {appSettingReq} appSettingReq Represents the parameter required.
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.appSetting = function (appSettingReq) { return cordova(this, "appSetting", { "otherPromise": true }, arguments); };
    ;
    /**
     * Determines whether to collect statistics on the current app.
     * @param {any} any
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.setStatistic = function (any) { return cordova(this, "setStatistic", { "otherPromise": true }, arguments); };
    ;
    /**
     * Determines whether to collect statistics on the current app.
     ** @param {any} any
     *  @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.getStatistic = function (any) { return cordova(this, "getStatistic", { "otherPromise": true }, arguments); };
    ;
    /**
     * This service enable logger service.
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    ;
    /**
     * This service disable logger service.
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    ;
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLFaceSetting", {
        get: function () { return cordovaPropertyGet(this, "MLFaceSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLLocalTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLLocalTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLLocalTextSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLTextConfig", {
        get: function () { return cordovaPropertyGet(this, "MLTextConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLTextConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLRemoteTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteTextSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLImageClassificationConfig", {
        get: function () { return cordovaPropertyGet(this, "MLImageClassificationConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLImageClassificationConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLImageSegmentationSetting", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLImageSegmentationScene", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationScene"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationScene", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLRemoteLandmarkSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteLandmarkSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteLandmarkSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLBcrCaptureConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrCaptureConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrCaptureConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLGcrCaptureUIConfig", {
        get: function () { return cordovaPropertyGet(this, "MLGcrCaptureUIConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLGcrCaptureUIConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLBcrResultConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrResultConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrResultConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "HandkeyPointConfig", {
        get: function () { return cordovaPropertyGet(this, "HandkeyPointConfig"); },
        set: function (value) { cordovaPropertySet(this, "HandkeyPointConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "ImgSuperResolutionConfig", {
        get: function () { return cordovaPropertyGet(this, "ImgSuperResolutionConfig"); },
        set: function (value) { cordovaPropertySet(this, "ImgSuperResolutionConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MlObjectAnalyserConfig", {
        get: function () { return cordovaPropertyGet(this, "MlObjectAnalyserConfig"); },
        set: function (value) { cordovaPropertySet(this, "MlObjectAnalyserConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "DownloadStrategyCustom", {
        get: function () { return cordovaPropertyGet(this, "DownloadStrategyCustom"); },
        set: function (value) { cordovaPropertySet(this, "DownloadStrategyCustom", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "FEATURE", {
        get: function () { return cordovaPropertyGet(this, "FEATURE"); },
        set: function (value) { cordovaPropertySet(this, "FEATURE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "LANGUAGE", {
        get: function () { return cordovaPropertyGet(this, "LANGUAGE"); },
        set: function (value) { cordovaPropertySet(this, "LANGUAGE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLTtsConstants", {
        get: function () { return cordovaPropertyGet(this, "MLTtsConstants"); },
        set: function (value) { cordovaPropertySet(this, "MLTtsConstants", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLSkeletonConfig", {
        get: function () { return cordovaPropertyGet(this, "MLSkeletonConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLSkeletonConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLFlashMode", {
        get: function () { return cordovaPropertyGet(this, "MLFlashMode"); },
        set: function (value) { cordovaPropertySet(this, "MLFlashMode", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLLensType", {
        get: function () { return cordovaPropertyGet(this, "MLLensType"); },
        set: function (value) { cordovaPropertySet(this, "MLLensType", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLAnalyzerName", {
        get: function () { return cordovaPropertyGet(this, "MLAnalyzerName"); },
        set: function (value) { cordovaPropertySet(this, "MLAnalyzerName", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLFrame", {
        get: function () { return cordovaPropertyGet(this, "MLFrame"); },
        set: function (value) { cordovaPropertySet(this, "MLFrame", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLFormRecogitionConfig", {
        get: function () { return cordovaPropertyGet(this, "MLFormRecogitionConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLFormRecogitionConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLFaceConfigs", {
        get: function () { return cordovaPropertyGet(this, "MLFaceConfigs"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceConfigs", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLProductConfig", {
        get: function () { return cordovaPropertyGet(this, "MLProductConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLProductConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLLivenessConfig", {
        get: function () { return cordovaPropertyGet(this, "MLLivenessConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLLivenessConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLRttLanguages", {
        get: function () { return cordovaPropertyGet(this, "MLRttLanguages"); },
        set: function (value) { cordovaPropertySet(this, "MLRttLanguages", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLRttScenes", {
        get: function () { return cordovaPropertyGet(this, "MLRttScenes"); },
        set: function (value) { cordovaPropertySet(this, "MLRttScenes", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "gcrCaptureType", {
        get: function () { return cordovaPropertyGet(this, "gcrCaptureType"); },
        set: function (value) { cordovaPropertySet(this, "gcrCaptureType", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "syncType", {
        get: function () { return cordovaPropertyGet(this, "syncType"); },
        set: function (value) { cordovaPropertySet(this, "syncType", value); },
        enumerable: true,
        configurable: true
    });
    HMSMLKitOriginal.pluginName = "HMSMLKit";
    HMSMLKitOriginal.plugin = "cordova-plugin-hms-ml";
    HMSMLKitOriginal.pluginRef = "HMSMLKit";
    HMSMLKitOriginal.platforms = ["Android"];
    return HMSMLKitOriginal;
}(IonicNativePlugin));
var HMSMLKit = new HMSMLKitOriginal();
export { HMSMLKit };
var MLLive = /** @class */ (function () {
    function MLLive(scene, divId) {
        if (scene === "ACTION_LIVE_ANALYSE")
            this.arScene = new (HMSMLKitOriginal.getPlugin()).liveEngineAnalyser(divId);
    }
    MLLive.prototype.on = function (call) {
        return this.arScene.on(call);
    };
    MLLive.prototype.startARScene = function (config, bounds) {
        return this.arScene.startARScene(config, bounds);
    };
    MLLive.prototype.destroy = function () {
        return this.arScene.destroy();
    };
    MLLive.prototype.setConfig = function (config) {
        return this.arScene.setConfig(config);
    };
    MLLive.prototype.scroll = function () {
        return this.arScene.scroll();
    };
    return MLLive;
}());
export { MLLive };
var liveEngineAnalyser = /** @class */ (function (_super) {
    __extends(liveEngineAnalyser, _super);
    function liveEngineAnalyser(divId) {
        return _super.call(this, "ACTION_LIVE_ANALYSE", divId) || this;
    }
    return liveEngineAnalyser;
}(MLLive));
export { liveEngineAnalyser };
var HMSFaceBodyProviderOriginal = /** @class */ (function (_super) {
    __extends(HMSFaceBodyProviderOriginal, _super);
    function HMSFaceBodyProviderOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * The face detection service can detect the face contour, recognize facial features, and determine facial expressions for a person.
     * @param  {faceReq} faceReq Represents the parameter required for face detection.
     * @returns Promise<StillFaceAnalyser>
     */
    HMSFaceBodyProviderOriginal.prototype.stillFaceAnalyser = function (faceReq) { return cordova(this, "stillFaceAnalyser", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method gives the information of the face recognition service.
     * @returns Promise<any>
     */
    HMSFaceBodyProviderOriginal.prototype.stilFaceAnalyserInfo = function () { return cordova(this, "stilFaceAnalyserInfo", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method stop face recognition service.
     * @returns Promise<any>
     */
    HMSFaceBodyProviderOriginal.prototype.stopStillFaceAnalyser = function () { return cordova(this, "stopStillFaceAnalyser", { "otherPromise": true }, arguments); };
    ;
    /**
     The skeleton detection service detects and locates key points of the human body, such as the top of the head, neck, shoulder, elbow, wrist, hip, knee, and ankle.
     * @param  {stillSkeletonReq |stillSkeletonSimilarityReq} stillSkeletonReq Represents the parameter required for still skeleton detection.
     * @returns Promise<StillSkeletonAnalyser>
     */
    HMSFaceBodyProviderOriginal.prototype.stillSkeletonAnalyser = function (stillSkeletonReq) { return cordova(this, "stillSkeletonAnalyser", { "otherPromise": true }, arguments); };
    ;
    /**
     * The liveness detection service supports silent liveness detection and captures faces in real time. It can determine whether a face is of a real user or is a face attack
     * (for example, face recapture image, face recapture video, or face mask) without requiring the user to follow specific instructions.
     * @param  {livenessDetectionReq} livenessDetectionReq Represents the parameter required.
     * @returns Promise<LiveLivenessAnalyser>
     */
    HMSFaceBodyProviderOriginal.prototype.liveLivenessAnalyser = function (livenessDetectionReq) { return cordova(this, "liveLivenessAnalyser", { "otherPromise": true }, arguments); };
    ;
    /**
     * This service can detects 21 hand keypoints (including fingertips, knuckles, and wrists) and return positions of the keypoints.
     * @param  {stillHandKeypointReq } stillHandKeypointReq Represents the parameter required for still handkey analyser.
     * @returns Promise<StillHandKeyAnalyser>
     */
    HMSFaceBodyProviderOriginal.prototype.stillHandkeyAnalyser = function (stillHandKeypointReq) { return cordova(this, "stillHandkeyAnalyser", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method stop hand analyzer service.
     * @returns Promise<any>
     */
    HMSFaceBodyProviderOriginal.prototype.stopStillHandKeyAnalyser = function () { return cordova(this, "stopStillHandKeyAnalyser", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method returns face analyzer settings.
     * @returns Promise<any>
     */
    HMSFaceBodyProviderOriginal.prototype.getFaceAnalyserSetting = function () { return cordova(this, "getFaceAnalyserSetting", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method  returns hand analyzer settings.
     * @returns Promise<any>
     */
    HMSFaceBodyProviderOriginal.prototype.getHandKeyAnalyserSetting = function () { return cordova(this, "getHandKeyAnalyserSetting", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method stop skeleton analyzer service.
     * @returns Promise<any>
     */
    HMSFaceBodyProviderOriginal.prototype.stopStillSkeletonAnalyser = function () { return cordova(this, "stopStillSkeletonAnalyser", { "otherPromise": true }, arguments); };
    ;
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLFaceSetting", {
        get: function () { return cordovaPropertyGet(this, "MLFaceSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLLocalTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLLocalTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLLocalTextSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLTextConfig", {
        get: function () { return cordovaPropertyGet(this, "MLTextConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLTextConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLRemoteTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteTextSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLImageClassificationConfig", {
        get: function () { return cordovaPropertyGet(this, "MLImageClassificationConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLImageClassificationConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLImageSegmentationSetting", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLImageSegmentationScene", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationScene"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationScene", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLRemoteLandmarkSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteLandmarkSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteLandmarkSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLBcrCaptureConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrCaptureConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrCaptureConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLGcrCaptureUIConfig", {
        get: function () { return cordovaPropertyGet(this, "MLGcrCaptureUIConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLGcrCaptureUIConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLBcrResultConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrResultConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrResultConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "HandkeyPointConfig", {
        get: function () { return cordovaPropertyGet(this, "HandkeyPointConfig"); },
        set: function (value) { cordovaPropertySet(this, "HandkeyPointConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "ImgSuperResolutionConfig", {
        get: function () { return cordovaPropertyGet(this, "ImgSuperResolutionConfig"); },
        set: function (value) { cordovaPropertySet(this, "ImgSuperResolutionConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MlObjectAnalyserConfig", {
        get: function () { return cordovaPropertyGet(this, "MlObjectAnalyserConfig"); },
        set: function (value) { cordovaPropertySet(this, "MlObjectAnalyserConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "DownloadStrategyCustom", {
        get: function () { return cordovaPropertyGet(this, "DownloadStrategyCustom"); },
        set: function (value) { cordovaPropertySet(this, "DownloadStrategyCustom", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "FEATURE", {
        get: function () { return cordovaPropertyGet(this, "FEATURE"); },
        set: function (value) { cordovaPropertySet(this, "FEATURE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "LANGUAGE", {
        get: function () { return cordovaPropertyGet(this, "LANGUAGE"); },
        set: function (value) { cordovaPropertySet(this, "LANGUAGE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLTtsConstants", {
        get: function () { return cordovaPropertyGet(this, "MLTtsConstants"); },
        set: function (value) { cordovaPropertySet(this, "MLTtsConstants", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLSkeletonConfig", {
        get: function () { return cordovaPropertyGet(this, "MLSkeletonConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLSkeletonConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLFlashMode", {
        get: function () { return cordovaPropertyGet(this, "MLFlashMode"); },
        set: function (value) { cordovaPropertySet(this, "MLFlashMode", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLLensType", {
        get: function () { return cordovaPropertyGet(this, "MLLensType"); },
        set: function (value) { cordovaPropertySet(this, "MLLensType", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLAnalyzerName", {
        get: function () { return cordovaPropertyGet(this, "MLAnalyzerName"); },
        set: function (value) { cordovaPropertySet(this, "MLAnalyzerName", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLFrame", {
        get: function () { return cordovaPropertyGet(this, "MLFrame"); },
        set: function (value) { cordovaPropertySet(this, "MLFrame", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLFormRecogitionConfig", {
        get: function () { return cordovaPropertyGet(this, "MLFormRecogitionConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLFormRecogitionConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLFaceConfigs", {
        get: function () { return cordovaPropertyGet(this, "MLFaceConfigs"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceConfigs", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLProductConfig", {
        get: function () { return cordovaPropertyGet(this, "MLProductConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLProductConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLLivenessConfig", {
        get: function () { return cordovaPropertyGet(this, "MLLivenessConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLLivenessConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLRttLanguages", {
        get: function () { return cordovaPropertyGet(this, "MLRttLanguages"); },
        set: function (value) { cordovaPropertySet(this, "MLRttLanguages", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLRttScenes", {
        get: function () { return cordovaPropertyGet(this, "MLRttScenes"); },
        set: function (value) { cordovaPropertySet(this, "MLRttScenes", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "gcrCaptureType", {
        get: function () { return cordovaPropertyGet(this, "gcrCaptureType"); },
        set: function (value) { cordovaPropertySet(this, "gcrCaptureType", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "syncType", {
        get: function () { return cordovaPropertyGet(this, "syncType"); },
        set: function (value) { cordovaPropertySet(this, "syncType", value); },
        enumerable: true,
        configurable: true
    });
    HMSFaceBodyProviderOriginal.pluginName = "HMSFaceBodyProvider";
    HMSFaceBodyProviderOriginal.plugin = "cordova-plugin-hms-ml";
    HMSFaceBodyProviderOriginal.pluginRef = "HMSFaceBodyProvider";
    HMSFaceBodyProviderOriginal.platforms = ["Android"];
    return HMSFaceBodyProviderOriginal;
}(IonicNativePlugin));
var HMSFaceBodyProvider = new HMSFaceBodyProviderOriginal();
export { HMSFaceBodyProvider };
var HMSImageServiceProviderOriginal = /** @class */ (function (_super) {
    __extends(HMSImageServiceProviderOriginal, _super);
    function HMSImageServiceProviderOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This method represents the image classification SDK.
     * @param  {localImageClassificationReq|remoteImageClassificationReq} imageClassificationInput Represents the parameter required for classify objects.
     * @returns Promise<ImageClassificationAnalyser>
     */
    HMSImageServiceProviderOriginal.prototype.imageClassificationAnalyser = function (imageClassificationInput) { return cordova(this, "imageClassificationAnalyser", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method stop image classification analyser.
     * @returns Promise<string>
     */
    HMSImageServiceProviderOriginal.prototype.stopImageClassificationAnalyser = function () { return cordova(this, "stopImageClassificationAnalyser", { "otherPromise": true }, arguments); };
    ;
    /**
     * The image segmentation service segments same elements (such as human body, plant, and sky) from an image. The elements supported include human body, sky, plant, food and others.
     * @param  {imgSegmentationReq} imgSegmentationReq Represents the parameter required for image segmentation.
     * @returns Promise<SegmentationAnalyser>
     */
    HMSImageServiceProviderOriginal.prototype.imgSegmentation = function (imgSegmentationReq) { return cordova(this, "imgSegmentation", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method stop image segmentation service.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.stopImgSegmentation = function () { return cordova(this, "stopImgSegmentation", { "otherPromise": true }, arguments); };
    ;
    /**
     * The landmark recognition service enables you to obtain the landmark name, landmark longitude and latitude, and confidence of the input image.
     * @param  {imgLandMarkReq} imgLandMarkReq Represents the parameter required for image landmark analyser.
     * @returns Promise<ImageLandmarkAnalyser>
     */
    HMSImageServiceProviderOriginal.prototype.imgLandMarkAnalyser = function (imgLandMarkReq) { return cordova(this, "imgLandMarkAnalyser", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method stop image landmark analyser service.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.imgLandMarkAnalyserStop = function () { return cordova(this, "imgLandMarkAnalyserStop", { "otherPromise": true }, arguments); };
    ;
    /**
     * The object detection service can detect and track multiple objects in an image.
     * @param  {objectReq} objectReq Represents the parameter required for object detection.
     * @returns Promise<ImageObjectAnalyser>
     */
    HMSImageServiceProviderOriginal.prototype.objectAnalyser = function (objectReq) { return cordova(this, "objectAnalyser", { "otherPromise": true }, arguments); };
    ;
    /**
     * The scene detection service can classify the scenario content of images and add labels, such as outdoor scenery, indoor places, and buildings, to help understand the image content.
     *   @param  {stillSceneReq} stillSceneReq Represents the parameter required for Scene analyser.
     *  @returns Promise <any>
     */
    HMSImageServiceProviderOriginal.prototype.stillSceneAnalyser = function (stillSceneReq) { return cordova(this, "stillSceneAnalyser", { "otherPromise": true }, arguments); };
    ;
    /**
     This service can automatically identify the location of a document in an image and adjust the shooting angle to the angle facing the document, even if the document is tilted.
     * @param  {documentSkewCorrectionReq} documentSkewCorrectionReq Represents the parameter required for document skew correction.
     * @returns Promise<DocumentSkewAnalyser>
     */
    HMSImageServiceProviderOriginal.prototype.documentSkewCorrectionAnalyser = function (documentSkewCorrectionReq) { return cordova(this, "documentSkewCorrectionAnalyser", { "otherPromise": true }, arguments); };
    ;
    /**
     * This service can zoom in an image that contains text and significantly improve the definition of text in the image.
     * @param  {textImageSuperResolutionReq} textImageSuperResolutionReq Represents the parameter required for Text Image Super Resolution.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.textImageSuperResolution = function (textImageSuperResolutionReq) { return cordova(this, "textImageSuperResolution", { "otherPromise": true }, arguments); };
    ;
    /**
     * This service provides the 1x super-resolution capabilities. 1x super-resolution removes the compression noise.
     * @param  {imageSuperResolutionReq} imageSuperResolutionReq Represents the parameter required for Image Super Resolution.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.imageSuperResolution = function (imageSuperResolutionReq) { return cordova(this, "imageSuperResolution", { "otherPromise": true }, arguments); };
    ;
    /**
     * Represents the image-based product detection API of HUAWEI ML Kit.
     * @param  {productReq} productReq Represents the parameter required.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.productVisionAnalyser = function (productReq) { return cordova(this, "productVisionAnalyser", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method stop object analyser service.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.objectAnalyserStop = function () { return cordova(this, "objectAnalyserStop", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method stop product analyser service.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.productAnalyserStop = function () { return cordova(this, "productAnalyserStop", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method stop document skew analyser service.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.docSkewAnalyserStop = function () { return cordova(this, "docSkewAnalyserStop", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method stop TISR analyser service.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.TISRAnalyserStop = function () { return cordova(this, "TISRAnalyserStop", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method stop ISR analyser service.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.ISRAnalyserStop = function () { return cordova(this, "ISRAnalyserStop", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method stop scene analyser service.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.stillSceneAnalyserStop = function () { return cordova(this, "stillSceneAnalyserStop", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method returns image classification settings.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.getImageClassificationAnalyserSetting = function () { return cordova(this, "getImageClassificationAnalyserSetting", { "otherPromise": true }, arguments); };
    ;
    /**
     *  This method returns ISR settings.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.getISRSetting = function () { return cordova(this, "getISRSetting", { "otherPromise": true }, arguments); };
    ;
    /**
     *  This method returns segmentation settings.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.getSegmentationSetting = function () { return cordova(this, "getSegmentationSetting", { "otherPromise": true }, arguments); };
    ;
    /**
     *  This method returns landmark settings.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.getLandmarkSetting = function () { return cordova(this, "getLandmarkSetting", { "otherPromise": true }, arguments); };
    ;
    /**
     *  This method returns object settings.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.getObjectSetting = function () { return cordova(this, "getObjectSetting", { "otherPromise": true }, arguments); };
    ;
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLFaceSetting", {
        get: function () { return cordovaPropertyGet(this, "MLFaceSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "gcrCaptureType", {
        get: function () { return cordovaPropertyGet(this, "gcrCaptureType"); },
        set: function (value) { cordovaPropertySet(this, "gcrCaptureType", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "syncType", {
        get: function () { return cordovaPropertyGet(this, "syncType"); },
        set: function (value) { cordovaPropertySet(this, "syncType", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLLocalTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLLocalTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLLocalTextSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLTextConfig", {
        get: function () { return cordovaPropertyGet(this, "MLTextConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLTextConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLRemoteTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteTextSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLImageClassificationConfig", {
        get: function () { return cordovaPropertyGet(this, "MLImageClassificationConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLImageClassificationConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLImageSegmentationSetting", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLImageSegmentationScene", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationScene"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationScene", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLRemoteLandmarkSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteLandmarkSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteLandmarkSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLBcrCaptureConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrCaptureConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrCaptureConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLGcrCaptureUIConfig", {
        get: function () { return cordovaPropertyGet(this, "MLGcrCaptureUIConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLGcrCaptureUIConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLBcrResultConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrResultConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrResultConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "HandkeyPointConfig", {
        get: function () { return cordovaPropertyGet(this, "HandkeyPointConfig"); },
        set: function (value) { cordovaPropertySet(this, "HandkeyPointConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "ImgSuperResolutionConfig", {
        get: function () { return cordovaPropertyGet(this, "ImgSuperResolutionConfig"); },
        set: function (value) { cordovaPropertySet(this, "ImgSuperResolutionConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MlObjectAnalyserConfig", {
        get: function () { return cordovaPropertyGet(this, "MlObjectAnalyserConfig"); },
        set: function (value) { cordovaPropertySet(this, "MlObjectAnalyserConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "DownloadStrategyCustom", {
        get: function () { return cordovaPropertyGet(this, "DownloadStrategyCustom"); },
        set: function (value) { cordovaPropertySet(this, "DownloadStrategyCustom", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "FEATURE", {
        get: function () { return cordovaPropertyGet(this, "FEATURE"); },
        set: function (value) { cordovaPropertySet(this, "FEATURE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "LANGUAGE", {
        get: function () { return cordovaPropertyGet(this, "LANGUAGE"); },
        set: function (value) { cordovaPropertySet(this, "LANGUAGE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLTtsConstants", {
        get: function () { return cordovaPropertyGet(this, "MLTtsConstants"); },
        set: function (value) { cordovaPropertySet(this, "MLTtsConstants", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLSkeletonConfig", {
        get: function () { return cordovaPropertyGet(this, "MLSkeletonConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLSkeletonConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLFlashMode", {
        get: function () { return cordovaPropertyGet(this, "MLFlashMode"); },
        set: function (value) { cordovaPropertySet(this, "MLFlashMode", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLLensType", {
        get: function () { return cordovaPropertyGet(this, "MLLensType"); },
        set: function (value) { cordovaPropertySet(this, "MLLensType", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLAnalyzerName", {
        get: function () { return cordovaPropertyGet(this, "MLAnalyzerName"); },
        set: function (value) { cordovaPropertySet(this, "MLAnalyzerName", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLFrame", {
        get: function () { return cordovaPropertyGet(this, "MLFrame"); },
        set: function (value) { cordovaPropertySet(this, "MLFrame", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLFormRecogitionConfig", {
        get: function () { return cordovaPropertyGet(this, "MLFormRecogitionConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLFormRecogitionConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLFaceConfigs", {
        get: function () { return cordovaPropertyGet(this, "MLFaceConfigs"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceConfigs", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLProductConfig", {
        get: function () { return cordovaPropertyGet(this, "MLProductConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLProductConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLLivenessConfig", {
        get: function () { return cordovaPropertyGet(this, "MLLivenessConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLLivenessConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLRttLanguages", {
        get: function () { return cordovaPropertyGet(this, "MLRttLanguages"); },
        set: function (value) { cordovaPropertySet(this, "MLRttLanguages", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLRttScenes", {
        get: function () { return cordovaPropertyGet(this, "MLRttScenes"); },
        set: function (value) { cordovaPropertySet(this, "MLRttScenes", value); },
        enumerable: true,
        configurable: true
    });
    HMSImageServiceProviderOriginal.pluginName = "HMSImageServiceProvider";
    HMSImageServiceProviderOriginal.plugin = "cordova-plugin-hms-ml";
    HMSImageServiceProviderOriginal.pluginRef = "HMSImageServiceProvider";
    HMSImageServiceProviderOriginal.platforms = ["Android"];
    return HMSImageServiceProviderOriginal;
}(IonicNativePlugin));
var HMSImageServiceProvider = new HMSImageServiceProviderOriginal();
export { HMSImageServiceProvider };
var HMSLanguageServiceProviderOriginal = /** @class */ (function (_super) {
    __extends(HMSLanguageServiceProviderOriginal, _super);
    function HMSLanguageServiceProviderOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result.
     * @param  {textEmbeddingDicInfoReq} textEmbeddingDicInfoReq Represents the parameter required for Text Embedding.
     * @returns Promise<any>
     */
    HMSLanguageServiceProviderOriginal.prototype.textEmbeddingDictionaryInfo = function (textEmbeddingDicInfoReq) { return cordova(this, "textEmbeddingDictionaryInfo", { "otherPromise": true }, arguments); };
    ;
    /**
     * Asynchronously queries word vectors in batches. (The number of words ranges from 1 to 500.)
     * @param  {textEmbeddingWordBatchReq} textEmbeddingWordBatchReq Represents the parameter required for Text Embedding.
     * @returns Promise<any>
     */
    HMSLanguageServiceProviderOriginal.prototype.textEmbeddingWordBatchVector = function (textEmbeddingWordBatchReq) { return cordova(this, "textEmbeddingWordBatchVector", { "otherPromise": true }, arguments); };
    ;
    /**
   * The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result.
   * @param  {textEmbeddingWordtoVectorReq} textEmbeddingWordtoVectorReq Represents the parameter required for Text Embedding.
   * @returns Promise<any>
   */
    HMSLanguageServiceProviderOriginal.prototype.textEmbeddingWordtoVector = function (textEmbeddingWordtoVectorReq) { return cordova(this, "textEmbeddingWordtoVector", { "otherPromise": true }, arguments); };
    ;
    /**
   * The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result.
   * @param  {textEmbeddingSentencetoVectorReq} textEmbeddingSentencetoVectorReq Represents the parameter required for Text Embedding.
   * @returns Promise<any>
   */
    HMSLanguageServiceProviderOriginal.prototype.textEmbeddingSentencetoVector = function (textEmbeddingSentencetoVectorReq) { return cordova(this, "textEmbeddingSentencetoVector", { "otherPromise": true }, arguments); };
    ;
    /**
   * The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result.
   * @param  {textEmbeddingWordSimilarityReq} textEmbeddingWordSimilarityReq Represents the parameter required for Text Embedding.
   * @returns Promise<any>
   */
    HMSLanguageServiceProviderOriginal.prototype.textEmbeddingWordSimilarty = function (textEmbeddingWordSimilarityReq) { return cordova(this, "textEmbeddingWordSimilarty", { "otherPromise": true }, arguments); };
    ;
    /**
   * The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result.
   * @param  {textEmbeddingSentenceSimilarityReq} textEmbeddingSentenceSimilarityReq Represents the parameter required for Text Embedding.
   * @returns Promise<any>
   */
    HMSLanguageServiceProviderOriginal.prototype.textEmbeddingSentenceSimilarty = function (textEmbeddingSentenceSimilarityReq) { return cordova(this, "textEmbeddingSentenceSimilarty", { "otherPromise": true }, arguments); };
    ;
    /**
   * The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result.
   * @param  {textEmbeddingSimilarWordsReq} textEmbeddingSimilarWordsReq Represents the parameter required for Text Embedding.
   * @returns Promise<any>
   */
    HMSLanguageServiceProviderOriginal.prototype.textEmbeddingSimilarWords = function (textEmbeddingSimilarWordsReq) { return cordova(this, "textEmbeddingSimilarWords", { "otherPromise": true }, arguments); };
    ;
    /**
   * This method returns textembedding settings.
   * @returns Promise<any>
   */
    HMSLanguageServiceProviderOriginal.prototype.getTextEmbeddingSetting = function () { return cordova(this, "getTextEmbeddingSetting", { "otherPromise": true }, arguments); };
    ;
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLFaceSetting", {
        get: function () { return cordovaPropertyGet(this, "MLFaceSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "gcrCaptureType", {
        get: function () { return cordovaPropertyGet(this, "gcrCaptureType"); },
        set: function (value) { cordovaPropertySet(this, "gcrCaptureType", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "syncType", {
        get: function () { return cordovaPropertyGet(this, "syncType"); },
        set: function (value) { cordovaPropertySet(this, "syncType", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLLocalTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLLocalTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLLocalTextSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLTextConfig", {
        get: function () { return cordovaPropertyGet(this, "MLTextConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLTextConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLRemoteTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteTextSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLImageClassificationConfig", {
        get: function () { return cordovaPropertyGet(this, "MLImageClassificationConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLImageClassificationConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLImageSegmentationSetting", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLImageSegmentationScene", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationScene"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationScene", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLRemoteLandmarkSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteLandmarkSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteLandmarkSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLBcrCaptureConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrCaptureConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrCaptureConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLGcrCaptureUIConfig", {
        get: function () { return cordovaPropertyGet(this, "MLGcrCaptureUIConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLGcrCaptureUIConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLBcrResultConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrResultConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrResultConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "HandkeyPointConfig", {
        get: function () { return cordovaPropertyGet(this, "HandkeyPointConfig"); },
        set: function (value) { cordovaPropertySet(this, "HandkeyPointConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "ImgSuperResolutionConfig", {
        get: function () { return cordovaPropertyGet(this, "ImgSuperResolutionConfig"); },
        set: function (value) { cordovaPropertySet(this, "ImgSuperResolutionConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MlObjectAnalyserConfig", {
        get: function () { return cordovaPropertyGet(this, "MlObjectAnalyserConfig"); },
        set: function (value) { cordovaPropertySet(this, "MlObjectAnalyserConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "DownloadStrategyCustom", {
        get: function () { return cordovaPropertyGet(this, "DownloadStrategyCustom"); },
        set: function (value) { cordovaPropertySet(this, "DownloadStrategyCustom", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "FEATURE", {
        get: function () { return cordovaPropertyGet(this, "FEATURE"); },
        set: function (value) { cordovaPropertySet(this, "FEATURE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "LANGUAGE", {
        get: function () { return cordovaPropertyGet(this, "LANGUAGE"); },
        set: function (value) { cordovaPropertySet(this, "LANGUAGE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLTtsConstants", {
        get: function () { return cordovaPropertyGet(this, "MLTtsConstants"); },
        set: function (value) { cordovaPropertySet(this, "MLTtsConstants", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLSkeletonConfig", {
        get: function () { return cordovaPropertyGet(this, "MLSkeletonConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLSkeletonConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLFlashMode", {
        get: function () { return cordovaPropertyGet(this, "MLFlashMode"); },
        set: function (value) { cordovaPropertySet(this, "MLFlashMode", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLLensType", {
        get: function () { return cordovaPropertyGet(this, "MLLensType"); },
        set: function (value) { cordovaPropertySet(this, "MLLensType", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLAnalyzerName", {
        get: function () { return cordovaPropertyGet(this, "MLAnalyzerName"); },
        set: function (value) { cordovaPropertySet(this, "MLAnalyzerName", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLFrame", {
        get: function () { return cordovaPropertyGet(this, "MLFrame"); },
        set: function (value) { cordovaPropertySet(this, "MLFrame", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLFormRecogitionConfig", {
        get: function () { return cordovaPropertyGet(this, "MLFormRecogitionConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLFormRecogitionConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLFaceConfigs", {
        get: function () { return cordovaPropertyGet(this, "MLFaceConfigs"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceConfigs", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLProductConfig", {
        get: function () { return cordovaPropertyGet(this, "MLProductConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLProductConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLLivenessConfig", {
        get: function () { return cordovaPropertyGet(this, "MLLivenessConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLLivenessConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLRttLanguages", {
        get: function () { return cordovaPropertyGet(this, "MLRttLanguages"); },
        set: function (value) { cordovaPropertySet(this, "MLRttLanguages", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLRttScenes", {
        get: function () { return cordovaPropertyGet(this, "MLRttScenes"); },
        set: function (value) { cordovaPropertySet(this, "MLRttScenes", value); },
        enumerable: true,
        configurable: true
    });
    HMSLanguageServiceProviderOriginal.pluginName = "HMSLanguageServiceProvider";
    HMSLanguageServiceProviderOriginal.plugin = "cordova-plugin-hms-ml";
    HMSLanguageServiceProviderOriginal.pluginRef = "HMSLanguageServiceProvider";
    HMSLanguageServiceProviderOriginal.platforms = ["Android"];
    return HMSLanguageServiceProviderOriginal;
}(IonicNativePlugin));
var HMSLanguageServiceProvider = new HMSLanguageServiceProviderOriginal();
export { HMSLanguageServiceProvider };
var HMSTextServiceProviderOriginal = /** @class */ (function (_super) {
    __extends(HMSTextServiceProviderOriginal, _super);
    function HMSTextServiceProviderOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This method start the Text analyzer.
     * @param  {localImageTextReq|remoteImageTextReq} ImageTextAnalyserInput Reperesents the necessary parameters to convert images to text format.
     * @returns Promise <TextAnalyser>
     */
    HMSTextServiceProviderOriginal.prototype.imageTextAnalyser = function (ImageTextAnalyserInput) { return cordova(this, "imageTextAnalyser", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method stop the Text analyzer.
     * @returns Promise<any>
     */
    HMSTextServiceProviderOriginal.prototype.stopTextAnalyser = function () { return cordova(this, "stopTextAnalyser", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method gives Text Analyser information.
     * @returns Promise<any>
     */
    HMSTextServiceProviderOriginal.prototype.getTextAnalyserInfo = function () { return cordova(this, "getTextAnalyserInfo", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method provides a document recognition component that recognizes text from images of documents.
     * @param  {documentImageAnalyserReq} documentImageAnalyserReq Reperesents the necessary parameter to convert document images to text format.
     * @returns Promise<DocumentAnalyser>
     */
    HMSTextServiceProviderOriginal.prototype.documentImageAnalyser = function (documentImageAnalyserReq) { return cordova(this, "documentImageAnalyser", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method stop the Document analyzer.
     * @returns Promise<any>
     */
    HMSTextServiceProviderOriginal.prototype.stopDocumentImageAnalyser = function () { return cordova(this, "stopDocumentImageAnalyser", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method close the Document analyzer.
     * @returns Promise<any>
     */
    HMSTextServiceProviderOriginal.prototype.closeDocumentImageAnalyser = function () { return cordova(this, "closeDocumentImageAnalyser", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method returns the Document analyzer setting.
     * @returns Promise<any>
     */
    HMSTextServiceProviderOriginal.prototype.getDocumentImageAnalyserSetting = function () { return cordova(this, "getDocumentImageAnalyserSetting", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method returns the Image analyzer setting.
     * @returns Promise<any>
     */
    HMSTextServiceProviderOriginal.prototype.getTextAnalyserSetting = function () { return cordova(this, "getTextAnalyserSetting", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method returns the GCR setting.
     * @returns Promise<any>
     */
    HMSTextServiceProviderOriginal.prototype.getGCRSetting = function () { return cordova(this, "getGCRSetting", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method stop the Form Recognition Analyzer.
     * @returns Promise<any>
     */
    HMSTextServiceProviderOriginal.prototype.stopFormRecognitionAnalyser = function () { return cordova(this, "stopFormRecognitionAnalyser", { "otherPromise": true }, arguments); };
    ;
    /**
     * The bank card recognition service recognizes bank cards in camera streams within angle offset of 15 degrees and extracts key information such as card number and validity period.
     * @param  {bankCardSDKDetectorReq|bankCardPluginDetectorReq} bankCardDetecterInput Represents the parameter required for bank card recognition.
     * @returns Promise<BankCardAnalyser> | Promise<BankCardAnalyser>
     */
    HMSTextServiceProviderOriginal.prototype.bankCardDetector = function (bankCardDetecterInput) {
        return;
    };
    ;
    /**
     * This method stop bankcard recognition service.
     * @returns Promise<any>
     */
    HMSTextServiceProviderOriginal.prototype.stopBankCardDetector = function () { return cordova(this, "stopBankCardDetector", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method returns the BCR setting.
     * @returns Promise<any>
     */
    HMSTextServiceProviderOriginal.prototype.getBankCardDetectorSetting = function () { return cordova(this, "getBankCardDetectorSetting", { "otherPromise": true }, arguments); };
    ;
    /**
     * The general card recognition service provides a universal development framework based on the text recognition technology.
     * @param  {generalCardDetectorReq} generalCardDetectorReq Represents the parameter required for general card recognition plug-in.
     * @returns Promise<GeneralCardAnalyser>
     */
    HMSTextServiceProviderOriginal.prototype.generalCardDetector = function (generalCardDetectorReq) { return cordova(this, "generalCardDetector", { "otherPromise": true }, arguments); };
    ;
    /**
     * The form recognition service uses AI technologies to recognize and return form structure information (including rows, columns, and coordinates of cells) and form text in Chinese and English (including punctuation) from input images.
     * @param  {formRecognizerAnalyserReq} formRecognizerAnalyserReq Represents the parameter required for general card recognition plug-in.
     * @returns Promise<GeneralCardAnalyser>
     */
    HMSTextServiceProviderOriginal.prototype.formRecognitionAnalyser = function (formRecognizerAnalyserReq) { return cordova(this, "formRecognitionAnalyser", { "otherPromise": true }, arguments); };
    ;
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLFaceSetting", {
        get: function () { return cordovaPropertyGet(this, "MLFaceSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "gcrCaptureType", {
        get: function () { return cordovaPropertyGet(this, "gcrCaptureType"); },
        set: function (value) { cordovaPropertySet(this, "gcrCaptureType", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "syncType", {
        get: function () { return cordovaPropertyGet(this, "syncType"); },
        set: function (value) { cordovaPropertySet(this, "syncType", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLLocalTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLLocalTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLLocalTextSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLTextConfig", {
        get: function () { return cordovaPropertyGet(this, "MLTextConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLTextConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLRemoteTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteTextSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLImageClassificationConfig", {
        get: function () { return cordovaPropertyGet(this, "MLImageClassificationConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLImageClassificationConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLImageSegmentationSetting", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLImageSegmentationScene", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationScene"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationScene", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLRemoteLandmarkSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteLandmarkSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteLandmarkSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLBcrCaptureConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrCaptureConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrCaptureConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLGcrCaptureUIConfig", {
        get: function () { return cordovaPropertyGet(this, "MLGcrCaptureUIConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLGcrCaptureUIConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLBcrResultConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrResultConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrResultConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "HandkeyPointConfig", {
        get: function () { return cordovaPropertyGet(this, "HandkeyPointConfig"); },
        set: function (value) { cordovaPropertySet(this, "HandkeyPointConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "ImgSuperResolutionConfig", {
        get: function () { return cordovaPropertyGet(this, "ImgSuperResolutionConfig"); },
        set: function (value) { cordovaPropertySet(this, "ImgSuperResolutionConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MlObjectAnalyserConfig", {
        get: function () { return cordovaPropertyGet(this, "MlObjectAnalyserConfig"); },
        set: function (value) { cordovaPropertySet(this, "MlObjectAnalyserConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "DownloadStrategyCustom", {
        get: function () { return cordovaPropertyGet(this, "DownloadStrategyCustom"); },
        set: function (value) { cordovaPropertySet(this, "DownloadStrategyCustom", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "FEATURE", {
        get: function () { return cordovaPropertyGet(this, "FEATURE"); },
        set: function (value) { cordovaPropertySet(this, "FEATURE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "LANGUAGE", {
        get: function () { return cordovaPropertyGet(this, "LANGUAGE"); },
        set: function (value) { cordovaPropertySet(this, "LANGUAGE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLTtsConstants", {
        get: function () { return cordovaPropertyGet(this, "MLTtsConstants"); },
        set: function (value) { cordovaPropertySet(this, "MLTtsConstants", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLSkeletonConfig", {
        get: function () { return cordovaPropertyGet(this, "MLSkeletonConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLSkeletonConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLFlashMode", {
        get: function () { return cordovaPropertyGet(this, "MLFlashMode"); },
        set: function (value) { cordovaPropertySet(this, "MLFlashMode", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLLensType", {
        get: function () { return cordovaPropertyGet(this, "MLLensType"); },
        set: function (value) { cordovaPropertySet(this, "MLLensType", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLAnalyzerName", {
        get: function () { return cordovaPropertyGet(this, "MLAnalyzerName"); },
        set: function (value) { cordovaPropertySet(this, "MLAnalyzerName", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLFrame", {
        get: function () { return cordovaPropertyGet(this, "MLFrame"); },
        set: function (value) { cordovaPropertySet(this, "MLFrame", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLFormRecogitionConfig", {
        get: function () { return cordovaPropertyGet(this, "MLFormRecogitionConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLFormRecogitionConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLFaceConfigs", {
        get: function () { return cordovaPropertyGet(this, "MLFaceConfigs"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceConfigs", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLProductConfig", {
        get: function () { return cordovaPropertyGet(this, "MLProductConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLProductConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLLivenessConfig", {
        get: function () { return cordovaPropertyGet(this, "MLLivenessConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLLivenessConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLRttLanguages", {
        get: function () { return cordovaPropertyGet(this, "MLRttLanguages"); },
        set: function (value) { cordovaPropertySet(this, "MLRttLanguages", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLRttScenes", {
        get: function () { return cordovaPropertyGet(this, "MLRttScenes"); },
        set: function (value) { cordovaPropertySet(this, "MLRttScenes", value); },
        enumerable: true,
        configurable: true
    });
    HMSTextServiceProviderOriginal.pluginName = "HMSTextServiceProvider";
    HMSTextServiceProviderOriginal.plugin = "cordova-plugin-hms-ml";
    HMSTextServiceProviderOriginal.pluginRef = "HMSTextServiceProvider";
    HMSTextServiceProviderOriginal.platforms = ["Android"];
    return HMSTextServiceProviderOriginal;
}(IonicNativePlugin));
var HMSTextServiceProvider = new HMSTextServiceProviderOriginal();
export { HMSTextServiceProvider };
var HMSVoiceServiceProviderOriginal = /** @class */ (function (_super) {
    __extends(HMSVoiceServiceProviderOriginal, _super);
    function HMSVoiceServiceProviderOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Implements on-cloud text translation.
     * @param  {remotetranslateReq} remotetranslateReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.remoteTranslator = function (remotetranslateReq) { return cordova(this, "remoteTranslator", { "otherPromise": true }, arguments); };
    ;
    /**
     * Implements on-cloud text translation.
     * @param  {localtranslateReq} localtranslateReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.localTranslator = function (localtranslateReq) { return cordova(this, "localTranslator", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains all languages supported for local translation.
     * @param  {localAllLangReq} localAllLangReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.translatorLocalAllLang = function (localAllLangReq) { return cordova(this, "translatorLocalAllLang", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains all languages supported for on-cloud translation.
     * @param  {remoteAllLangReq} remoteAllLangReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.translatorRemoteAllLang = function (remoteAllLangReq) { return cordova(this, "translatorRemoteAllLang", { "otherPromise": true }, arguments); };
    ;
    /**
     * Detects languages on the cloud.
     * @param  {remoteLangDetectionReq} remoteLangDetectionReq Represents the parameter required for lang detection.
     * @returns Promise<RemoteLangDetectionAnalyser> | Promise<langDetectionWithFirstDetect>
     */
    HMSVoiceServiceProviderOriginal.prototype.remoteLangDetection = function (remoteLangDetectionReq) { return cordova(this, "remoteLangDetection", { "otherPromise": true }, arguments); };
    ;
    /**
     * Detects languages on local.
     * @param  {localLangDetectionReq} localLangDetectionReq Represents the parameter required for lang detection.
     * @returns Promise<any> | Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.localLangDetection = function (localLangDetectionReq) { return cordova(this, "localLangDetection", { "otherPromise": true }, arguments); };
    ;
    /**
     * Download language model.
     * @param  {downloadTranslateReq} downloadTranslateReq Represents the parameter required for download model.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.translatorDownloadModel = function (downloadTranslateReq) { return cordova(this, "translatorDownloadModel", { "otherPromise": true }, arguments); };
    ;
    /**
     * For delete language model.
     * @param  {deleteTranslateReq} deleteTranslateReq Represents the parameter required for delete model.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.translatorDeleteModel = function (deleteTranslateReq) { return cordova(this, "translatorDeleteModel", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method stop translator service.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.stopTranslatorService = function () { return cordova(this, "stopTranslatorService", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method return RTT setting.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.getRTTSetting = function () { return cordova(this, "getRTTSetting", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method returns TTS setting.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.getTTSSetting = function () { return cordova(this, "getTTSSetting", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method returns AFT setting.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.getAFTSetting = function () { return cordova(this, "getAFTSetting", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method returns Lang Detection setting.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.getLangDetectionSetting = function () { return cordova(this, "getLangDetectionSetting", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method stop lang detection service.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.stopLangDetectionService = function () { return cordova(this, "stopLangDetectionService", { "otherPromise": true }, arguments); };
    ;
    /**
     * The sound detection service can detect sound events in online (real-time recording) mode. The detected sound events can help you perform subsequent actions.
     * @param  {soundDectReq} soundDectReq Represents the parameter required for Sound Detection analyser.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.soundDectAnalyser = function (soundDectReq) { return cordova(this, "soundDectAnalyser", { "otherPromise": true }, arguments); };
    ;
    /**
     * TTS can convert text information into audio output. Rich timbres, and volume and speed options are supported to produce more natural sounds.
     * @param  {ttsReq} ttsReq Represents the parameter required for text to speech.
     * @returns Promise<TtsAnalyser>
     */
    HMSVoiceServiceProviderOriginal.prototype.ttsAnalyser = function (ttsReq) { return cordova(this, "ttsAnalyser", { "otherPromise": true }, arguments); };
    ;
    /**
     * TTS can convert text information into audio output offline. Rich timbres, and volume and speed options are supported to produce more natural sounds.
     * @param  {ttsReq} ttsReq Represents the parameter required for text to speech.
     * @returns Promise<TtsAnalyser>
     */
    HMSVoiceServiceProviderOriginal.prototype.ttsOfflineAnalyser = function (ttsReq) { return cordova(this, "ttsOfflineAnalyser", { "otherPromise": true }, arguments); };
    ;
    /**
     * This service stop text to speech (TTS) service.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.ttsAnalyserStop = function () { return cordova(this, "ttsAnalyserStop", { "otherPromise": true }, arguments); };
    ;
    /**
     * This service pauses text to speech (TTS) analyser.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.ttsAnalyserPause = function () { return cordova(this, "ttsAnalyserPause", { "otherPromise": true }, arguments); };
    ;
    /**
     * This service continues text to speech (TTS) analyser.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.ttsAnalyserResume = function () { return cordova(this, "ttsAnalyserResume", { "otherPromise": true }, arguments); };
    ;
    /**
     * This service shutdown text to speech (TTS) analyser.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.ttsAnalysershutDown = function () { return cordova(this, "ttsAnalysershutDown", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method returns TTS Download setting.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.ttsAnalyserDownloadSetting = function () { return cordova(this, "ttsAnalyserDownloadSetting", { "otherPromise": true }, arguments); };
    ;
    /**
     * This service close AFT analyser.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.aftAnalyserClose = function () { return cordova(this, "aftAnalyserClose", { "otherPromise": true }, arguments); };
    ;
    /**
     * This service stop AFT analyser.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.asrAnalyserStop = function () { return cordova(this, "asrAnalyserStop", { "otherPromise": true }, arguments); };
    ;
    /**
     * This service destroy AFT analyser.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.aftAnalyserDestroy = function () { return cordova(this, "aftAnalyserDestroy", { "otherPromise": true }, arguments); };
    ;
    /**
     * This service pause AFT analyser.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.aftAnalyserPause = function () { return cordova(this, "aftAnalyserPause", { "otherPromise": true }, arguments); };
    ;
    /**
     * This service destroy Sound Detection analyser.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.soundDectAnalyserDestroy = function () { return cordova(this, "soundDectAnalyserDestroy", { "otherPromise": true }, arguments); };
    ;
    /**
     * The audio file transcription service can convert an audio file less than or equal to 60 seconds into a text file. Currently, Chinese and English are supported.
     * @param  {aftReq} aftReq Represents the parameter required for aft analyser.
     * @returns Promise<AftAnalyser>
     */
    HMSVoiceServiceProviderOriginal.prototype.aftAnalyser = function (aftReq) { return cordova(this, "aftAnalyser", { "otherPromise": true }, arguments); };
    ;
    HMSVoiceServiceProviderOriginal.prototype.asrAnalyser = function (asrReq) { return cordova(this, "asrAnalyser", { "observable": true }, arguments); };
    ;
    HMSVoiceServiceProviderOriginal.prototype.rttAnalyserStart = function (rttReq) { return cordova(this, "rttAnalyserStart", { "observable": true }, arguments); };
    ;
    HMSVoiceServiceProviderOriginal.prototype.rttAnalyserStop = function () { return cordova(this, "rttAnalyserStop", { "observable": true }, arguments); };
    ;
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLFaceSetting", {
        get: function () { return cordovaPropertyGet(this, "MLFaceSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLLocalTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLLocalTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLLocalTextSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLTextConfig", {
        get: function () { return cordovaPropertyGet(this, "MLTextConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLTextConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLRemoteTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteTextSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLImageClassificationConfig", {
        get: function () { return cordovaPropertyGet(this, "MLImageClassificationConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLImageClassificationConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLImageSegmentationSetting", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLImageSegmentationScene", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationScene"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationScene", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLRemoteLandmarkSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteLandmarkSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteLandmarkSetting", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLBcrCaptureConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrCaptureConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrCaptureConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLGcrCaptureUIConfig", {
        get: function () { return cordovaPropertyGet(this, "MLGcrCaptureUIConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLGcrCaptureUIConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLBcrResultConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrResultConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrResultConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "HandkeyPointConfig", {
        get: function () { return cordovaPropertyGet(this, "HandkeyPointConfig"); },
        set: function (value) { cordovaPropertySet(this, "HandkeyPointConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "ImgSuperResolutionConfig", {
        get: function () { return cordovaPropertyGet(this, "ImgSuperResolutionConfig"); },
        set: function (value) { cordovaPropertySet(this, "ImgSuperResolutionConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MlObjectAnalyserConfig", {
        get: function () { return cordovaPropertyGet(this, "MlObjectAnalyserConfig"); },
        set: function (value) { cordovaPropertySet(this, "MlObjectAnalyserConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "DownloadStrategyCustom", {
        get: function () { return cordovaPropertyGet(this, "DownloadStrategyCustom"); },
        set: function (value) { cordovaPropertySet(this, "DownloadStrategyCustom", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "FEATURE", {
        get: function () { return cordovaPropertyGet(this, "FEATURE"); },
        set: function (value) { cordovaPropertySet(this, "FEATURE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "LANGUAGE", {
        get: function () { return cordovaPropertyGet(this, "LANGUAGE"); },
        set: function (value) { cordovaPropertySet(this, "LANGUAGE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLTtsConstants", {
        get: function () { return cordovaPropertyGet(this, "MLTtsConstants"); },
        set: function (value) { cordovaPropertySet(this, "MLTtsConstants", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLSkeletonConfig", {
        get: function () { return cordovaPropertyGet(this, "MLSkeletonConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLSkeletonConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLFlashMode", {
        get: function () { return cordovaPropertyGet(this, "MLFlashMode"); },
        set: function (value) { cordovaPropertySet(this, "MLFlashMode", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLLensType", {
        get: function () { return cordovaPropertyGet(this, "MLLensType"); },
        set: function (value) { cordovaPropertySet(this, "MLLensType", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLAnalyzerName", {
        get: function () { return cordovaPropertyGet(this, "MLAnalyzerName"); },
        set: function (value) { cordovaPropertySet(this, "MLAnalyzerName", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLFrame", {
        get: function () { return cordovaPropertyGet(this, "MLFrame"); },
        set: function (value) { cordovaPropertySet(this, "MLFrame", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLFormRecogitionConfig", {
        get: function () { return cordovaPropertyGet(this, "MLFormRecogitionConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLFormRecogitionConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLFaceConfigs", {
        get: function () { return cordovaPropertyGet(this, "MLFaceConfigs"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceConfigs", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLProductConfig", {
        get: function () { return cordovaPropertyGet(this, "MLProductConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLProductConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLLivenessConfig", {
        get: function () { return cordovaPropertyGet(this, "MLLivenessConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLLivenessConfig", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLRttLanguages", {
        get: function () { return cordovaPropertyGet(this, "MLRttLanguages"); },
        set: function (value) { cordovaPropertySet(this, "MLRttLanguages", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLRttScenes", {
        get: function () { return cordovaPropertyGet(this, "MLRttScenes"); },
        set: function (value) { cordovaPropertySet(this, "MLRttScenes", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "gcrCaptureType", {
        get: function () { return cordovaPropertyGet(this, "gcrCaptureType"); },
        set: function (value) { cordovaPropertySet(this, "gcrCaptureType", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "syncType", {
        get: function () { return cordovaPropertyGet(this, "syncType"); },
        set: function (value) { cordovaPropertySet(this, "syncType", value); },
        enumerable: true,
        configurable: true
    });
    HMSVoiceServiceProviderOriginal.pluginName = "HMSVoiceServiceProvider";
    HMSVoiceServiceProviderOriginal.plugin = "cordova-plugin-hms-ml";
    HMSVoiceServiceProviderOriginal.pluginRef = "HMSVoiceServiceProvider";
    HMSVoiceServiceProviderOriginal.platforms = ["Android"];
    return HMSVoiceServiceProviderOriginal;
}(IonicNativePlugin));
var HMSVoiceServiceProvider = new HMSVoiceServiceProviderOriginal();
export { HMSVoiceServiceProvider };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1tbC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBZ0JBLE9BQU8sc0VBQTBGLE1BQU0sb0JBQW9CLENBQUM7QUFDNUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQWlFbEMsTUFBTSxDQUFOLElBQVksV0FLWDtBQUxELFdBQVksV0FBVztJQUNyQiw0QkFBVyxDQUFBO0lBQ1gsd0JBQU8sQ0FBQTtJQUNQLDBCQUFTLENBQUE7QUFFWCxDQUFDLEVBTFcsV0FBVyxLQUFYLFdBQVcsUUFLdEI7QUFDRCxNQUFNLENBQU4sSUFBWSxVQUlYO0FBSkQsV0FBWSxVQUFVO0lBQ3BCLHFEQUFXLENBQUE7SUFDWCx1REFBYyxDQUFBO0FBRWhCLENBQUMsRUFKVyxVQUFVLEtBQVYsVUFBVSxRQUlyQjtBQUNELE1BQU0sQ0FBTixJQUFZLHFCQU9YO0FBUEQsV0FBWSxxQkFBcUI7SUFDL0Isc0NBQVcsQ0FBQTtJQUNYLHNDQUFXLENBQUE7SUFDWCw4Q0FBbUIsQ0FBQTtJQUNuQiwwQ0FBZSxDQUFBO0lBQ2Ysc0NBQVcsQ0FBQTtJQUNYLDBEQUErQixDQUFBO0FBQ2pDLENBQUMsRUFQVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBT2hDO0FBQ0QsTUFBTSxDQUFOLElBQVksY0FVWDtBQVZELFdBQVksY0FBYztJQUN4QixtQ0FBZSxDQUFBO0lBQ2YsdUNBQW1CLENBQUE7SUFDbkIseUNBQXFCLENBQUE7SUFDckIsbUNBQWUsQ0FBQTtJQUNmLDJDQUF1QixDQUFBO0lBQ3ZCLHVDQUFtQixDQUFBO0lBQ25CLHVEQUFtQyxDQUFBO0lBQ25DLHFDQUFpQixDQUFBO0lBQ2pCLG1DQUFlLENBQUE7QUFDakIsQ0FBQyxFQVZXLGNBQWMsS0FBZCxjQUFjLFFBVXpCO0FBUUQsTUFBTSxDQUFOLElB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QUFTOzs7Ozs7MEJBRVQscURBQWdCOzs7Ozs7MEJBRWhCLGdEQUFXOzs7Ozs7MEJBRVgsK0NBQVU7Ozs7OzswQkFFVixtREFBYzs7Ozs7OzBCQUVkLDRDQUFPOzs7Ozs7MEJBRVAsMkRBQXNCOzs7Ozs7MEJBRXRCLGtEQUFhOzs7Ozs7MEJBRWIsb0RBQWU7Ozs7OzswQkFFZixxREFBZ0I7Ozs7OzswQkFFaEIsbURBQWM7Ozs7OzswQkFFZCxnREFBVzs7Ozs7OzBCQUVYLG1EQUFjOzs7Ozs7MEJBRWQsNkNBQVE7Ozs7Ozs7Ozs7a0NBbmhGVjtFQWk5RTZDLGlCQUFpQjtTQUFqRCx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgQ29weXJpZ2h0IDIwMjAuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxyXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gQ29uc3RhbnRzIFxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLypcclxuICAgIENvcHlyaWdodCAyMDIwLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5cclxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcclxuICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG5cclxuICAgICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAgICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0UGVybWlzc2lvblJlcSB7XHJcbiAgcGVybWlzc2lvbkxpc3Q6IEFycmF5PHN0cmluZz47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDaGVja1Blcm1pc3Npb25SZXEge1xyXG4gIHBlcm1pc3Npb25MaXN0OiBBcnJheTxzdHJpbmc+O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2Ugc3RhdGlzdGljc25SZXEge1xyXG4gIGlzQWxsb3dlZDpib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxCb3VuZHMge1xyXG4gIG1hcmdpblRvcD86IG51bWJlcixcclxuICBtYXJnaW5Cb3R0b20/OiBudW1iZXIsXHJcbiAgbWFyZ2luTGVmdD86bnVtYmVyLFxyXG4gIG1hcmdpblJpZ2h0PzpudW1iZXJcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE1MY29uZmlne1xyXG4gIGxlbnNFbmdpbmVSZXE6IGxlbnNFbmdpbmVSZXE7XHJcbiAgXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBsZW5zRW5naW5lUmVxe1xyXG4gIGFuYWx5emVyTmFtZTogTUxBbmFseXplck5hbWU7XHJcbiAgbGVuc0VuZ2luZVNldHRpbmcgPzogTUxMZW5zRW5naW5lU2V0dGluZztcclxuICBncmFwZ2ljU2V0dGluZz86IEZhY2VHcmFwaGljU2V0dGluZyB8IHNjZW5lU2V0dGluZ3N8IEhhbmRrZXlHcmFwaGljU2V0dGluZyB8IFNrZWxldG9uR3JhcGhpY1NldHRpbmcgfCBPYmplY3RHcmFwaGljU2V0dGluZyB8IG51bGw7XHJcbiAgYW5hbHl6ZXJTZXR0aW5nPzogbWxGYWNlQW5hbHl6ZXJTZXR0aW5nIHxtbEhhbmRLZXlwb2ludFNldHRpbmd8bWxJbWFnZVNlZ21lbnRhdGlvblNldHRpbmd8bWxPYmplY3RBbmFseXNlclNldHRpbmcgfG51bGw7XHJcblxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxjb25maWdDb21wb3NpdGV7XHJcbiAgbGVuc0VuZ2luZVJlcTpjb21wb3NpdGVBbmFseXNlclxyXG4gIFxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgY29tcG9zaXRlQW5hbHlzZXJ7XHJcbiAgYW5hbHl6ZXJOYW1lcz86IEFycmF5PE1MQW5hbHl6ZXJOYW1lPjtcclxuICBsZW5zRW5naW5lU2V0dGluZyA/OiBNTExlbnNFbmdpbmVTZXR0aW5nO1xyXG4gIGdyYXBnaWNTZXR0aW5nPzogRmFjZUdyYXBoaWNTZXR0aW5nIHwgc2NlbmVTZXR0aW5nc3wgSGFuZGtleUdyYXBoaWNTZXR0aW5nIHwgU2tlbGV0b25HcmFwaGljU2V0dGluZyB8IE9iamVjdEdyYXBoaWNTZXR0aW5nIHwgbnVsbDtcclxuICBhbmFseXplclNldHRpbmc/OiBtbEZhY2VBbmFseXplclNldHRpbmcgfG1sSGFuZEtleXBvaW50U2V0dGluZ3xtbEltYWdlU2VnbWVudGF0aW9uU2V0dGluZ3xtbE9iamVjdEFuYWx5c2VyU2V0dGluZyB8bnVsbDtcclxuXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNTExlbnNFbmdpbmVTZXR0aW5ne1xyXG4gIGZwcz86bnVtYmVyIHwgbnVsbDtcclxuICBkaXNwbGF5RGltZW5zaW9uST86bnVtYmVyIHwgbnVsbDtcclxuICBkaXNwbGF5RGltZW5zaW9uSTE/Om51bWJlciB8IG51bGw7XHJcbiAgbGVuc1R5cGU/OiBNTExlbnNUeXBlIHxudWxsO1xyXG4gIGVuYWJsZUZvY3VzPzpib29sZWFufG51bGw7XHJcbiAgZmxhc2hNb2RlPzpNTEZsYXNoTW9kZXxudWxsO1xyXG5cclxufVxyXG5leHBvcnQgZW51bSBNTEZsYXNoTW9kZXtcclxuICBBVVRPPVwiYXV0b1wiLFxyXG4gIE9OPVwib25cIixcclxuICBPRkY9XCJvZmZcIlxyXG5cclxufSBcclxuZXhwb3J0IGVudW0gTUxMZW5zVHlwZXtcclxuICBCQUNLX0xFTlM9MCxcclxuICBGUk9OVF9MRU5TID0gMVxyXG5cclxufVxyXG5leHBvcnQgZW51bSBNTFN0aWxsQ29tcG9zaXRlck5hbWV7XHJcbiAgRkFDRT1cIkZBQ0VcIixcclxuICBIQU5EPVwiSEFORFwiLFxyXG4gIFNLRUxFVE9OPVwiU0tFTEVUT05cIixcclxuICBPQkpFQ1Q9XCJPQkpFQ1RcIixcclxuICBURVhUPVwiVEVYVFwiLFxyXG4gIENMQVNTSUZJQ0FUSU9OPVwiY2xhc3NpZmljYXRpb25cIlxyXG59XHJcbmV4cG9ydCBlbnVtIE1MQW5hbHl6ZXJOYW1le1xyXG4gIExJVkVGQUNFPVwiRkFDRVwiLFxyXG4gIExJVkVGQUNFM0Q9XCJGQUNFM0RcIixcclxuICBMSVZFRkFDRU1BWD1cIkZBQ0VNQVhcIixcclxuICBMSVZFSEFORD1cIkhBTkRcIixcclxuICBMSVZFU0tFTEVUT049XCJTS0VMRVRPTlwiLFxyXG4gIExJVkVPQkpFQ1Q9XCJPQkpFQ1RcIixcclxuICBMSVZFQ0xBU1NJRklDQVRJT049XCJDTEFTU0lGSUNBVElPTlwiLFxyXG4gIExJVkVTQ0VORT1cIlNDRU5FXCIsXHJcbiAgTElWRVRFWFQ9XCJURVhUXCJcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIGRvWm9vbVJlcXtcclxuICBzY2FsZT86bnVtYmVyfG51bGw7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBtbEZyYW1lUmVxe1xyXG4gIGFjdGlvbk5hbWU6TUxGcmFtZTtcclxuICBmaWxlUGF0aDphbnk7XHJcbn1cclxuZXhwb3J0IGVudW0gTUxGcmFtZXtcclxuICBnZXRQcmV2aWV3Qml0bWFwPVwiZ2V0UHJldmlld0JpdG1hcFwiLFxyXG4gIHJlYWRCaXRtYXA9XCJyZWFkQml0bWFwXCIsXHJcbiAgcm90YXRlPVwicm90YXRlXCJcclxuXHJcbn1cclxuLy8vLy8vLyoqKiovLy8vLy8vLy9cclxuLy8gQVBJIEtFWVxyXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBjb25maWdSZXF7XHJcbiAgYXBpS2V5OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgYXBwU2V0dGluZ1JlcXtcclxuICBhcGlLZXk/OnN0cmluZ3xudWxsO1xyXG4gIGFwcGxpY2F0aW9uSWQ/OnN0cmluZ3xudWxsO1xyXG4gIGNlcnRGaW5nZXJwcmludD86c3RyaW5nfG51bGw7XHJcbn1cclxuXHJcblxyXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xyXG4vLyBDT01QT1NJVEVcclxuLy8vLy8vLyoqKiovLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBjb21wb3NpdGVBbmFseXNlclJlcXtcclxuICBjb21wb3NpdGVBbmFseXNlckNvbmZpZzogY29tcG9zaXRlQW5hbHlzZXJDb25maWdcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIGNvbXBvc2l0ZUFuYWx5c2VyQ29uZmlne1xyXG4gIGZpbGVQYXRoIDogYW55O1xyXG4gIGFuYWx5emVyTmFtZXM/OiBBcnJheTxNTFN0aWxsQ29tcG9zaXRlck5hbWU+O1xyXG4gIGFuYWx5emVyU2V0dGluZz86IG1sRmFjZUFuYWx5emVyU2V0dGluZyB8bWxIYW5kS2V5cG9pbnRTZXR0aW5nfG1sSW1hZ2VTZWdtZW50YXRpb25TZXR0aW5nfG1sT2JqZWN0QW5hbHlzZXJTZXR0aW5nIHxudWxsO1xyXG5cclxufVxyXG5cclxuLy8vLy8vLyoqKiovLy8vLy8vLy9cclxuLy8gQUZUIEFOQUxZU0VSXHJcbi8vLy8vLy8qKioqLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGFmdFJlcSB7XHJcbiAgYXVkaW9QYXRoOiBhbnk7XHJcbiAgYWZ0U2V0dGluZz86IChBZnRTZXR0aW5nKTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZnRTZXR0aW5ne1xyXG5cclxuICBsYW5ndWFnZUNvZGUgPzogc3RyaW5nIHwgbnVsbDtcclxuICBwdW5jdHVhdGlvbkVuYWJsZWQgPzogYm9vbGVhbiB8IG51bGw7XHJcbiAgdGltZU9mZnNldCA/OiBib29sZWFuIHwgbnVsbDtcclxuICB3b3JkVGltZU9mZnNldEVuYWJsZWQgPzogYm9vbGVhbiB8IG51bGw7XHJcbiAgc2VudGVuY2VUaW1lT2Zmc2V0RW5hYmxlZCA/OiBib29sZWFuIHwgbnVsbCA7XHJcbn1cclxuXHJcblxyXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xyXG4vLyBBU1IgQU5BTFlTRVJcclxuLy8vLy8vLyoqKiovLy8vLy8vLy9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgYXNyUmVxIHtcclxuICBsYW5ndWFnZSA/OiBMQU5HVUFHRSB8IG51bGw7XHJcbiAgZmVhdHVyZSA/OiBGRUFUVVJFIHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRkVBVFVSRSB7XHJcbiAgRkVBVFVSRV9BTExJTk9ORSA9IDEyLFxyXG4gIEZFQVRVUkVfV09SREZMVVggPSAxMSxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTEFOR1VBR0Uge1xyXG4gIExBTl9FTl9VUyA9IFwiZW4tVVNcIixcclxuICBMQU5fRlJfRlIgPSBcImZyLUZSXCIsXHJcbiAgTEFOX1pIID0gXCJ6aFwiLFxyXG4gIExBTl9aSF9DTiA9IFwiemgtQ05cIixcclxuICBMQU5fRVNfRVM9XCJlcy1FU1wiLFxyXG4gIExBTl9ERV9ERT1cImRlLURFXCJcclxuXHJcbn1cclxuXHJcbi8vLy8vLy8qKioqLy8vLy8vLy8vXHJcbi8vIFNESyBCQU5LIENBUkQgQU5BTFlTRVJcclxuLy8vLy8vLyoqKiovLy8vLy8vLy9cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGJhbmtDYXJkU0RLRGV0ZWN0b3JSZXEge1xyXG4gIGZpbGVQYXRoOiBhbnk7XHJcbiAgZGV0ZWN0VHlwZTogMDtcclxuICBtTEJjckFuYWx5emVyU2V0dGluZz86IE1MQmNyQW5hbHl6ZXJTZXR0aW5nIHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNTEJjckFuYWx5emVyU2V0dGluZyB7XHJcbiAgbGFuZ1R5cGU/OiBzdHJpbmcgfCBudWxsO1xyXG4gIHJlc3VsdFR5cGU/OiBNTEJjclJlc3VsdENvbmZpZyB8IG51bGw7XHJcbn1cclxuXHJcbi8vLy8vLy8qKioqLy8vLy8vLy8vXHJcbi8vIFBMVUdJTiBCQU5LIENBUkQgQU5BTFlTRVJcclxuLy8vLy8vLyoqKiovLy8vLy8vLy9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgYmFua0NhcmRQbHVnaW5EZXRlY3RvclJlcSB7XHJcbiAgZGV0ZWN0VHlwZTogMTtcclxuICBtTEJjckNhcHR1cmVDb25maWc/OiBtTEJjckNhcHR1cmVDb25maWcgfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIG1MQmNyQ2FwdHVyZUNvbmZpZyB7XHJcbiAgb3JpZW50YXRpb24/OiBNTEJjckNhcHR1cmVDb25maWcgfCBudWxsO1xyXG4gIHJlc3VsdFR5cGU/OiBNTEJjclJlc3VsdENvbmZpZyB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1MQmNyQ2FwdHVyZUNvbmZpZyB7XHJcbiAgT1JJRU5UQVRJT05fQVVUTyA9IDAsXHJcbiAgT1JJRU5UQVRJT05fTEFORFNDQVBFID0gMSxcclxuICBPUklFTlRBVElPTl9QT1JUUkFJVCA9IDJcclxufVxyXG5leHBvcnQgZW51bSBNTEJjclJlc3VsdENvbmZpZyB7XHJcbiAgUkVTVUxUX05VTV9PTkxZID0gMCxcclxuICBSRVNVTFRfU0lNUExFID0gMSxcclxuICBSRVNVTFRfQUxMID0gMlxyXG59XHJcblxyXG5cclxuLy8vLy8vLyoqKiovLy8vLy8vLy9cclxuLy9DbGFzc2lmeVxyXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgbG9jYWxJbWFnZUNsYXNzaWZpY2F0aW9uUmVxIHtcclxuICBvY3JUeXBlOiBNTEltYWdlQ2xhc3NpZmljYXRpb25Db25maWcgfCBudWxsO1xyXG4gIGFuYWx5c2VNb2RlPzogbnVtYmVyIHwgbnVsbDtcclxuICBsb2NhbENsYXNzaWZpY2F0aW9uQW5hbHl6ZXJTZXR0aW5nPzogKExvY2FsQ2xhc3NpZmljYXRpb25BbmFseXplclNldHRpbmcpIHwgbnVsbDtcclxuICBmaWxlUGF0aDogYW55O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9jYWxDbGFzc2lmaWNhdGlvbkFuYWx5emVyU2V0dGluZyB7XHJcbiAgcG9zc2liaWxpdHk/OiBudW1iZXIgfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHJlbW90ZUltYWdlQ2xhc3NpZmljYXRpb25SZXEge1xyXG4gIG9jclR5cGU6IE1MSW1hZ2VDbGFzc2lmaWNhdGlvbkNvbmZpZztcclxuICBhbmFseXNlTW9kZT86IG51bWJlcjtcclxuICByZW1vdGVDbGFzc2lmaWNhdGlvbkFuYWx5emVyU2V0dGluZz86IChSZW1vdGVDbGFzc2lmaWNhdGlvbkFuYWx5emVyU2V0dGluZykgfCBudWxsO1xyXG4gIGZpbGVQYXRoOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVtb3RlQ2xhc3NpZmljYXRpb25BbmFseXplclNldHRpbmcge1xyXG4gIG1heFJlc3VsdHM/OiBudW1iZXIgfCBudWxsO1xyXG4gIHBvc3NpYmlsaXR5PzogbnVtYmVyIHwgbnVsbDtcclxuICBpc0VuYWJsZUZpbmdlcnByaW50VmVyaWZpY2F0aW9uPzogYm9vbGVhbiB8bnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTUxJbWFnZUNsYXNzaWZpY2F0aW9uQ29uZmlnIHtcclxuICBUWVBFX0xPQ0FMID0gMCxcclxuICBUWVBFX1JFTU9URSA9IDFcclxufVxyXG5cclxuLy8vLy8vLyoqKiovLy8vLy8vLy9cclxuLy9DdXN0b20gTW9kZWwgRG93bmxvYWRcclxuLy8vLy8vLyoqKiovLy8vLy8vLy9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgZG93bmxvYWRNb2RlbFJlcXtcclxuICBkZXRlY3RUeXBlOiAxO1xyXG4gIGZpbGVQYXRoOiBhbnk7XHJcbiAgZG93bmxvYWRTdHJhdGVneVNldHRpbmcgPzpEb3dubG9hZFN0cmF0ZWd5U2V0dGluZyB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRG93bmxvYWRTdHJhdGVneVNldHRpbmcge1xyXG4gIGlzQ2hhcmdpbmdOZWVkOmJvb2xlYW4gfCBudWxsO1xyXG4gIGlzV2lmaU5lZWQ6Ym9vbGVhbiB8IG51bGwgO1xyXG4gIGlzRGV2aWNlSWRsZU5lZWQ6Ym9vbGVhbiB8IG51bGw7XHJcbiAgc2V0UmVnaW9uPzogRG93bmxvYWRTdHJhdGVneUN1c3RvbSB8IG51bGw7XHJcblxyXG59XHJcbmV4cG9ydCBlbnVtIERvd25sb2FkU3RyYXRlZ3lDdXN0b217XHJcbiAgIFxyXG4gIFJFR0lPTl9EUl9DSElOQSA9IDEwMDIsXHJcbiAgUkVHSU9OX0RSX0FGSUxBID0gMTAwMyxcclxuICBSRUdJT05fRFJfRVVST1BFID0gMTAwNCxcclxuICBSRUdJT05fRFJfUlVTU0lBID0gMTAwNVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIG93bkN1c3RvbU1vZGVsUmVxe1xyXG4gIGRldGVjdFR5cGU6bnVtYmVyO1xyXG4gIGZpbGVQYXRoOmFueTtcclxuICBtb2RlbEZ1bGxOYW1lOnN0cmluZyB8bnVsbCA7XHJcbiAgbW9kZWxOYW1lOnN0cmluZyB8bnVsbDtcclxuICBsYWJlbEZpbGVOYW1lOnN0cmluZyB8bnVsbDtcclxuICBiaXRtYXBIZWlnaHQ6bnVtYmVyIHxudWxsO1xyXG4gIGJpdG1hcFdpZHRoOm51bWJlciB8bnVsbDtcclxuICBvdXRQdXRTaXplOm51bWJlciB8bnVsbDtcclxufVxyXG5cclxuLy8vLy8vLyoqKiovLy8vLy8vLy9cclxuLy9Eb2N1bWVudCBBbmFseXNlclxyXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBkb2N1bWVudEltYWdlQW5hbHlzZXJSZXEge1xyXG4gIGRvY3VtZW50U2V0dGluZz86IERvY3VtZW50U2V0dGluZyB8IG51bGw7XHJcbiAgZmlsZVBhdGg6IGFueTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50U2V0dGluZyB7XHJcbiAgYm9yZGVyVHlwZT86IE1MUmVtb3RlVGV4dFNldHRpbmcgfCBudWxsO1xyXG4gIExhbmd1YWdlTGlzdD86IEFycmF5PHN0cmluZz4gfCBudWxsO1xyXG4gIGVuYWJsZUZpbmdlcnByaW50VmVyaWZpY2F0aW9uIDpib29sZWFuIHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTUxSZW1vdGVUZXh0U2V0dGluZyB7XHJcbiAgT0NSX0xPT1NFX1NDRU5FID0gMSxcclxuICBPQ1JfQ09NUEFDVF9TQ0VORSA9IDIsXHJcbiAgTkdPTiA9IFwiTkdPTlwiLFxyXG4gIEFSQyA9IFwiQVJDXCJcclxufVxyXG5cclxuLy8vLy8vLyoqKiovLy8vLy8vLy9cclxuLy9Gb3JtIFJlY29nbml6ZXIgQW5hbHlzZXJcclxuLy8vLy8vLyoqKiovLy8vLy8vLy9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgZm9ybVJlY29nbml6ZXJBbmFseXNlclJlcSB7XHJcbiAgZmlsZVBhdGg6IGFueTtcclxuICBzeW5jVHlwZTogTUxGb3JtUmVjb2dpdGlvbkNvbmZpZztcclxufVxyXG5leHBvcnQgZW51bSBNTEZvcm1SZWNvZ2l0aW9uQ29uZmlne1xyXG4gIFNZTkNfVFlQRT0xLFxyXG4gIEFTWU5DX1RZUEU9MFxyXG59XHJcblxyXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xyXG4vL0RvY3VtZW50IFNrZXcgQ29ycmVjdGlvblxyXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBkb2N1bWVudFNrZXdDb3JyZWN0aW9uUmVxe1xyXG4gIGZpbGVQYXRoOiBhbnk7XHJcbiAgc3luY01vZGU/OiBNTEZvcm1SZWNvZ2l0aW9uQ29uZmlnfG51bGw7XHJcbn1cclxuXHJcbi8vLy8vLy8qKioqLy8vLy8vLy8vXHJcbi8vIFNUSUxMICYmIExJVkUgRkFDRSBBTkFMWVNFUiBcclxuLy8vLy8vLyoqKiovLy8vLy8vLy9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgZmFjZVJlcSB7XHJcbiAgbWxGYWNlQW5hbHlzZXJTZXR0aW5nPzogbWxGYWNlQW5hbHl6ZXJTZXR0aW5nIHwgbnVsbDtcclxuICBhbmFseXNlTW9kZT86IE1MRmFjZUNvbmZpZ3MgfG51bGw7XHJcbiAgZmlsZVBhdGg6IGFueTtcclxufVxyXG5leHBvcnQgZW51bSBNTEZhY2VDb25maWdze1xyXG4gIFRZUEVfMkRfU1lOQz0wLFxyXG4gIFRZUEVfMkRfQVNZTkM9MSxcclxuICBUWVBFXzNEX1NZTkM9MixcclxuICBUWVBFXzNEX0FTWU5DPTNcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGYWNlR3JhcGhpY1NldHRpbmd7XHJcbiAgZmFjZVBvc2l0aW9uUGFpbnRTZXR0aW5nID86IEZhY2VQb3NpdGlvblBhaW50U2V0dGluZyB8IG51bGw7XHJcbiAgdGV4dFBhaW50U2V0dGluZyA/OlRleHRQYWludFNldHRpbmdGYWNlIHwgbnVsbDtcclxuICBmYWNlRmVhdHVyZVBhaW50VGV4dFNldHRpbmcgPzpGYWNlRmVhdHVyZVBhaW50VGV4dFNldHRpbmcgfCBudWxsO1xyXG4gIGtleXBvaW50UGFpbnRTZXR0aW5nID86ICBLZXlwb2ludFBhaW50U2V0dGluZyB8IG51bGw7XHJcbiAgYm94UGFpbnRTZXR0aW5nID86IEJveFBhaW50U2V0dGluZ0ZhY2UgfCBudWxsO1xyXG4gIGZhY2VQYWludFNldHRpbmcgPzogRmFjZVBhaW50U2V0dGluZyB8IG51bGw7XHJcbiAgZXllUGFpbnRTZXR0aW5nID86RXllUGFpbnRTZXR0aW5nIHwgbnVsbDtcclxuICBleWVicm93UGFpbnRTZXR0aW5nID86RXllYnJvd1BhaW50U2V0dGluZyB8IG51bGw7XHJcbiAgbm9zZVBhaW50U2V0dGluZyA/Ok5vc2VQYWludFNldHRpbmcgfCBudWxsO1xyXG4gIG5vc2VCYXNlUGFpbnRTZXR0aW5nID86Tm9zZUJhc2VQYWludFNldHRpbmcgfCBudWxsO1xyXG4gIGxpcFBhaW50U2V0dGluZyA/OkxpcFBhaW50U2V0dGluZyB8IG51bGw7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBMaXBQYWludFNldHRpbmd7XHJcbiAgY29sb3I/OlN0cmluZyB8IENvbG9yc3xudWxsO1xyXG4gIHN0eWxlPzpSZWN0U3R5bGUgfCBudWxsO1xyXG4gIHN0cm9rZVdpZHRoOk51bWJlciB8IG51bGw7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBOb3NlUGFpbnRTZXR0aW5ne1xyXG4gIGNvbG9yPzpTdHJpbmcgfCBDb2xvcnMgfG51bGw7XHJcbiAgc3R5bGU/OlJlY3RTdHlsZSB8IG51bGw7XHJcbiAgc3Ryb2tlV2lkdGggPzpOdW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBOb3NlQmFzZVBhaW50U2V0dGluZ3tcclxuICBjb2xvciA/OlN0cmluZyB8Q29sb3JzIHwgbnVsbDtcclxuICBzdHlsZSA/OlJlY3RTdHlsZSB8IG51bGw7XHJcbiAgc3Ryb2tlV2lkdGggPzpOdW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBFeWVicm93UGFpbnRTZXR0aW5ne1xyXG4gIGNvbG9yPzpTdHJpbmcgfENvbG9ycyB8IG51bGw7XHJcbiAgc3R5bGU/OlJlY3RTdHlsZTtcclxuICBzdHJva2VXaWR0aD86TnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRXllUGFpbnRTZXR0aW5ne1xyXG4gIGNvbG9yPzpTdHJpbmcgfENvbG9ycztcclxuICBzdHlsZT86UmVjdFN0eWxlIHxDb2xvcnM7XHJcbiAgc3Ryb2tlV2lkdGg6TnVtYmVyIHwgbnVsbDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEZhY2VQYWludFNldHRpbmd7XHJcbiAgY29sb3IgPzpTdHJpbmcgfCBDb2xvcnMgfCBudWxsIDtcclxuICBzdHlsZSA/OiBSZWN0U3R5bGUgfCBudWxsO1xyXG4gIHN0cm9rZVdpZHRoOk51bWJlciB8IG51bGw7XHJcblxyXG5cclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEJveFBhaW50U2V0dGluZ0ZhY2V7XHJcbiAgY29sb3IgPzpTdHJpbmcgfENvbG9ycyB8IG51bGw7XHJcbiAgc3R5bGUgPzpSZWN0U3R5bGUgfCBudWxsO1xyXG4gIHN0cm9rZVdpZHRoID86TnVtYmVyIHwgbnVsbDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEtleXBvaW50UGFpbnRTZXR0aW5ne1xyXG4gIGNvbG9yPzogQ29sb3JzIHwgQ29sb3JzIHwgbnVsbDtcclxuICBzdHlsZT86UmVjdFN0eWxlIHwgbnVsbDtcclxuICB0ZXh0U2l6ZTpOdW1iZXIgfCBudWxsIDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGYWNlRmVhdHVyZVBhaW50VGV4dFNldHRpbmd7XHJcbiAgY29sb3I/OkNvbG9ycyB8IG51bGw7XHJcbiAgdGV4dFNpemU6TnVtYmVyIHwgbnVsbDtcclxuXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBGYWNlUG9zaXRpb25QYWludFNldHRpbmd7XHJcbiAgY29sb3IgPzogQ29sb3JzIHwgbnVsbDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFRleHRQYWludFNldHRpbmdGYWNle1xyXG4gIGNvbG9yID86IENvbG9ycyB8IG51bGw7XHJcbiAgdGV4dFNpemUgPzogTnVtYmVyIHwgbnVsbDtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgbWxGYWNlQW5hbHl6ZXJTZXR0aW5nIHtcclxuICBmZWF0dXJlVHlwZT86IE1MRmFjZVNldHRpbmcgfCBudWxsO1xyXG4gIGtleVBvaW50VHlwZT86IE1MRmFjZVNldHRpbmcgfCBudWxsO1xyXG4gIG1heFNpemVGYWNlT25seT86IGJvb2xlYW4gfCBudWxsO1xyXG4gIG1pbkZhY2VQcm9wb3J0aW9uPzogbnVtYmVyIHwgbnVsbDtcclxuICBwZXJmb3JtYW5jZVR5cGU/OiBNTEZhY2VTZXR0aW5nIHwgbnVsbDtcclxuICBwb3NlRGlzYWJsZWQ/OmJvb2xlYW4gfCBudWxsO1xyXG4gIHNoYXBlVHlwZT86IE1MRmFjZVNldHRpbmcgfCBudWxsO1xyXG4gIHRyYWNpbmdBbGxvd2VkPzogYm9vbGVhbiB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1MRmFjZVNldHRpbmcge1xyXG4gIFRZUEVfRkVBVFVSRVMgPSAxLFxyXG4gIFRZUEVfVU5TVVBQT1JUX0ZFQVRVUkVTID0gMixcclxuICBUWVBFX0tFWVBPSU5UUyA9IDAsXHJcbiAgVFlQRV9VTlNVUFBPUlRfS0VZUE9JTlRTID0gMixcclxuICBUWVBFX1BSRUNJU0lPTiA9IDEsXHJcbiAgVFlQRV9TUEVFRCA9IDIsXHJcbiAgVFlQRV9TSEFQRVMgPSAyLFxyXG4gIFRZUEVfVU5TVVBQT1JUX1NIQVBFUyA9IDMsXHJcbiAgVFlQRV9GRUFUVVJFX0VNT1RJT04gPSA0LFxyXG4gIFRZUEVfRkVBVFVSRV9FWUVHTEFTUyA9IDgsXHJcbiAgVFlQRV9GRUFUVVJFX0hBVCA9IDE2LFxyXG4gIFRZUEVfRkVBVFVSRV9CRUFSRCA9IDMyLFxyXG4gIFRZUEVfRkVBVFVSRV9PUEVOQ0xPU0VFWUUgPSA2NCxcclxuICBUWVBFX0ZFQVRVUkVfR0VOREFSID0gMTI4LFxyXG4gIFRZUEVfRkVBVFVSRV9BR0UgPSAyNTYsXHJcbiAgTU9ERV9UUkFDSU5HX0ZBU1QgPSAxLFxyXG4gIE1PREVfVFJBQ0lOR19ST0JVU1QgPSAyXHJcbn1cclxuXHJcblxyXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xyXG4vLyBHRU5FUkFMIENBUkQgQU5BTFlTRVJcclxuLy8vLy8vLyoqKiovLy8vLy8vLy9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgZ2VuZXJhbENhcmREZXRlY3RvclJlcSB7XHJcbiAgZ2NyQ2FwdHVyZUNvbmZpZz86IGdjckNhcHR1cmVDb25maWc7XHJcbiAgZ2NyQ2FwdHVyZVVJQ29uZmlnPzogZ2NyQ2FwdHVyZVVJQ29uZmlnO1xyXG4gIGNhcHR1cmVUeXBlPzogZ2NyQ2FwdHVyZVR5cGV8bnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBnY3JDYXB0dXJlQ29uZmlnIHtcclxuICBsYW5ndWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBlbnVtIGdjckNhcHR1cmVUeXBle1xyXG4gIENBUFRVUkVfQUNUSVZJVFk9MCxcclxuICBDQVBUVVJFX1BIT1RPPTEsXHJcbiAgQ0FQVFVSRV9JTUFHRT0yXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBnY3JDYXB0dXJlVUlDb25maWcge1xyXG4gIG9yaWVudGF0aW9uPzogTUxHY3JDYXB0dXJlVUlDb25maWcgfCBudWxsO1xyXG4gIHRpcFRleHQ/OiBzdHJpbmcgfCBudWxsO1xyXG4gIHRpcFRleHRDb2xvcj86IG51bWJlciB8IG51bGw7XHJcbiAgcGhvdG9CdXR0b25SZXNJZD86IG51bWJlciB8IG51bGw7XHJcbiAgc2NhbkJveENvcm5lckNvbG9yPzogbnVtYmVyIHwgbnVsbDtcclxuICBiYWNrQnV0dG9uUmVkSWQ/OiBudW1iZXIgfCBudWxsO1xyXG4gIHRvcmNoUmVkSWQ/OiBudW1iZXIgfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBNTEdjckNhcHR1cmVVSUNvbmZpZyB7XHJcbiAgT1JJRU5UQVRJT05fQVVUTyA9IDAsXHJcbiAgT1JJRU5UQVRJT05fTEFORFNDQVBFID0gMSxcclxuICBPUklFTlRBVElPTl9QT1JUUkFJVCA9IDIsXHJcbn1cclxuXHJcblxyXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xyXG4vLyBJRCBDQVJEIEFOQUxZU0VSXHJcbi8vLy8vLy8qKioqLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGlkQ2FyZEFuYWx5c2VyUmVxV2l0aFNESyB7XHJcbiAgZGV0ZWN0VHlwZTogbnVtYmVyO1xyXG4gIGlzUmVtb3RlPzogYm9vbGVhbiB8IG51bGw7XHJcbiAgaXNGcm9udD86IGJvb2xlYW4gfCBudWxsIDtcclxuICBjb3VudHJ5Q29kZT86IHN0cmluZztcclxuICBmaWxlUGF0aDogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGlkQ2FyZEFuYWx5c2VyUmVxV2l0aFBsdWdpbiB7XHJcbiAgZGV0ZWN0VHlwZTogbnVtYmVyO1xyXG4gIGlzUmVtb3RlPzogYm9vbGVhbiB8IG51bGw7XHJcbiAgaXNGcm9udD86IGJvb2xlYW4gfCBudWxsO1xyXG4gIGNvdW50cnlDb2RlPzogc3RyaW5nO1xyXG59XHJcblxyXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xyXG4vL0xpdmUgJiYgU3RpbCBIYW5ka2V5UG9pbnRcclxuLy8vLy8vLyoqKiovLy8vLy8vLy9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2Ugc3RpbGxIYW5kS2V5cG9pbnRSZXF7XHJcbiAgc3luY1R5cGU/OiBzeW5jVHlwZSB8bnVsbDtcclxuICBmaWxlUGF0aDogYW55O1xyXG4gIGhhbmRrZXlTZXR0aW5nID86IG1sSGFuZEtleXBvaW50U2V0dGluZyB8IG51bGw7XHJcbn1cclxuZXhwb3J0IGVudW0gc3luY1R5cGV7XHJcbiAgU1lOQ19NT0RFPTAsXHJcbiAgQVNZTkNfTU9ERT0xXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGFuZGtleUdyYXBoaWNTZXR0aW5ne1xyXG4gIGlkUGFpbnRuZXdTZXR0aW5nID86IElkUGFpbnRuZXdTZXR0aW5nIHwgbnVsbDtcclxuICByZWN0UGFpbnRTZXR0aW5nID86IFJlY3RQYWludFNldHRpbmcgfCBudWxsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSWRQYWludG5ld1NldHRpbmd7XHJcbiAgY29sb3IgPzogQ29sb3JzIHwgbnVsbDtcclxuICB0ZXh0U2l6ZSA/OiBOdW1iZXIgfCBudWxsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVjdFBhaW50U2V0dGluZ3tcclxuICBjb2xvciA/OiBDb2xvcnMgfCBudWxsO1xyXG4gIHN0eWxlID86IFJlY3RTdHlsZSB8IG51bGw7XHJcbiAgYm94U3Ryb2tlV2lkdGggPzogTnVtYmVyIHwgbnVsbDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIG1sSGFuZEtleXBvaW50U2V0dGluZ3tcclxuICBzY2VuZVR5cGUgPzogSGFuZGtleVBvaW50Q29uZmlnIHwgbnVsbDtcclxuICBtYXhIYW5kUmVzdWx0cyA/OiBudW1iZXIgfCBudWxsO1xyXG5cclxufVxyXG5leHBvcnQgZW51bSBIYW5ka2V5UG9pbnRDb25maWd7XHJcbiAgVFlQRV9BTEwgPSAwLFxyXG4gIFRZUEVfS0VZUE9JTlRfT05MWSA9IDEsXHJcbiAgVFlQRV9SRUNUX09OTFkgPSAyXHJcbn1cclxuXHJcbi8vLy8vLy8qKioqLy8vLy8vLy8vXHJcbi8vSW1hZ2UgU3VwZXIgUmVzb2x1dGlvblxyXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBpbWFnZVN1cGVyUmVzb2x1dGlvblJlcXtcclxuICBmaWxlUGF0aDphbnk7XHJcbiAgaW1nU3VwZXJSZXNvbHV0aW9uU2V0dGluZyA/OiAoSW1nU3VwZXJSZXNvbHV0aW9uU2V0dGluZykgfCBudWxsO1xyXG4gIHN5bmNUeXBlPzogTUxGb3JtUmVjb2dpdGlvbkNvbmZpZyB8IG51bGw7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJbWdTdXBlclJlc29sdXRpb25TZXR0aW5ne1xyXG4gIHNjYWxlVHlwZSA/OiBJbWdTdXBlclJlc29sdXRpb25Db25maWc7XHJcbn1cclxuZXhwb3J0IGVudW0gSW1nU3VwZXJSZXNvbHV0aW9uQ29uZmlne1xyXG4gIElTUl9TQ0FMRV8xWCA9IDEuMCxcclxuICBJU1JfU0NBTEVfM1ggPSAzLjBcclxufVxyXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xyXG4vL1Byb2R1Y3QgVmlzaW9uIEFuYWx5c2VyXHJcbi8vLy8vLy8qKioqLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHByb2R1Y3RSZXF7XHJcbiAgZmlsZVBhdGg/OmFueSB8bnVsbDtcclxuICBkZXRlY3RUeXBlPzpudW1iZXI7XHJcbiAgbWxQcm9kdWN0U2V0dGluZyA/OiAobWxQcm9kdWN0U2V0dGluZykgfCBudWxsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgbWxQcm9kdWN0U2V0dGluZ3tcclxuICBsYXJnZXN0TnVtT2ZSZXR1cm5zID86IG51bWJlcnxudWxsO1xyXG4gIHByb2R1Y3RTZXRJZD86c3RyaW5nfG51bGw7XHJcbiAgcmVnaW9uPzpNTFByb2R1Y3RDb25maWd8bnVsbDtcclxufVxyXG5leHBvcnQgZW51bSBNTFByb2R1Y3RDb25maWd7XHJcbiAgUkVHSU9OX0RSX0NISU5BID0gMTAwMixcclxuICBSRUdJT05fRFJfQUZJTEEgPSAxMDAzLFxyXG4gIFJFR0lPTl9EUl9FVVJPUEUgPSAxMDA0LFxyXG4gIFJFR0lPTl9EUl9SVVNTSUEgPSAxMDA1LFxyXG4gIFJFR0lPTl9EUl9HRVJNQU4gPSAxMDA2LFxyXG4gIFJFR0lPTl9EUl9TSUFOR0FQT1JFID0gMTAwN1xyXG59XHJcblxyXG4gIC8vLy8vLy8qKioqLy8vLy8vLy8vXHJcbi8vVGV4dCBJbWFnZSBTdXBlciBSZXNvbHV0aW9uXHJcbi8vLy8vLy8qKioqLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHRleHRJbWFnZVN1cGVyUmVzb2x1dGlvblJlcXtcclxuICBmaWxlUGF0aDphbnk7XHJcbiAgYW5hbHlzZU1vZGU/OiBNTEZvcm1SZWNvZ2l0aW9uQ29uZmlnIHxudWxsO1xyXG59XHJcblxyXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xyXG4vL0lNQUdFIFNUSUxMICYmIExJVkVTRUdNRU5UQVRJT05cclxuLy8vLy8vLyoqKiovLy8vLy8vLy9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgaW1nU2VnbWVudGF0aW9uUmVxIHtcclxuICBpbWFnZVNlZ21lbnRhdGlvblNldHRpbmc/OiAobWxJbWFnZVNlZ21lbnRhdGlvblNldHRpbmcpO1xyXG4gIGZpbGVQYXRoOiBhbnk7XHJcbiAgYW5hbHlzZU1vZGU/OiBNTEZvcm1SZWNvZ2l0aW9uQ29uZmlnIHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBtbEltYWdlU2VnbWVudGF0aW9uU2V0dGluZyB7XHJcbiAgaXNFeGFjdDpib29sZWFuIHwgbnVsbDtcclxuICBhbmFseXNlclR5cGU/OiBNTEltYWdlU2VnbWVudGF0aW9uU2V0dGluZyB8IG51bGwgO1xyXG4gIHNjZW5lPzogTUxJbWFnZVNlZ21lbnRhdGlvblNjZW5lO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGVudW0gTUxJbWFnZVNlZ21lbnRhdGlvblNldHRpbmcge1xyXG4gIEJPRFlfU0VHID0gMCxcclxuICBJTUFHRV9TRUcgPSAxLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBNTEltYWdlU2VnbWVudGF0aW9uU2NlbmUge1xyXG4gIEFMTCA9IDAsXHJcbiAgTUFTS19PTkxZID0gMSxcclxuICBGT1JFR1JPVU5EX09OTFkgPSAyLFxyXG4gIEdSQVlTQ0FMRV9PTkxZID0gMyxcclxufVxyXG5cclxuLy8vLy8vLyoqKiovLy8vLy8vLy9cclxuLy9MQU5EIE1BUksgXHJcbi8vLy8vLy8qKioqLy8vLy8vLy8vXHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBpbWdMYW5kTWFya1JlcSB7XHJcbiAgbGFuZG1hcmtBbmFseXplclNldHRpbmc/OiBsYW5kbWFya0FuYWx5emVyU2V0dGluZztcclxuICBmaWxlUGF0aDogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGxhbmRtYXJrQW5hbHl6ZXJTZXR0aW5nIHtcclxuICBtYXhSZXN1bHRzPzogbnVtYmVyIHwgbnVsbDtcclxuICBtb2RlbFR5cGU/OiBNTFJlbW90ZUxhbmRtYXJrU2V0dGluZyB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1MUmVtb3RlTGFuZG1hcmtTZXR0aW5nIHtcclxuICBTVEVBRFlfUEFUVEVSTiA9IDEsXHJcbiAgTkVXRVNUX1BBVFRFUk4gPSAyLFxyXG59XHJcblxyXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xyXG4vL0xhbmcgRGV0ZWN0IFxyXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSByZW1vdGVMYW5nRGV0ZWN0aW9uUmVxIHtcclxuICBzb3VyY2VUZXh0OiBzdHJpbmc7XHJcbiAgdGFza01vZGU/OiBudW1iZXI7XHJcbiAgdHJ1c3RlZFRocmVzaG9sZD86IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIGxvY2FsTGFuZ0RldGVjdGlvblJlcXtcclxuICBzb3VyY2VUZXh0OnN0cmluZztcclxuICB0cnVzdGVkVGhyZXNob2xkPzpudW1iZXI7XHJcbn1cclxuXHJcbi8vLy8vLy8qKioqLy8vLy8vLy8vXHJcbi8vTGl2ZW5lc3MgRGV0ZWN0aW9uXHJcbi8vLy8vLy8qKioqLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGxpdmVuZXNzRGV0ZWN0aW9uUmVxe1xyXG4gIGFuYWx5c2VyTW9kZT86IE1MTGl2ZW5lc3NDYXB0dXJlUmVzdWx0IHwgbnVsbDtcclxufVxyXG5leHBvcnQgZW51bSBNTExpdmVuZXNzQ29uZmlne1xyXG4gIERFRkFVTFQ9MCxcclxuICBDVVNUT009MVxyXG59XHJcbi8vLy8vLy8qKioqLy8vLy8vLy8vXHJcbi8vIFNUSUxMICYmIExJVkVPQkpFQ1QgIEFOQUxZU0VSXHJcbi8vLy8vLy8qKioqLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIG9iamVjdFJlcSB7XHJcbiAgZmlsZVBhdGg6IGFueTtcclxuICBtbE9iamVjdEFuYWx5c2VyU2V0dGluZz86IG1sT2JqZWN0QW5hbHlzZXJTZXR0aW5nO1xyXG4gIHN5bmNUeXBlPzogTUxGb3JtUmVjb2dpdGlvbkNvbmZpZyB8bnVsbDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdEdyYXBoaWNTZXR0aW5ne1xyXG4gIGJveFBhaW50U2V0dGluZz86IEJveFBhaW50U2V0dGluZ3wgbnVsbDtcclxuICB0ZXh0UGFpbnRTZXR0aW5nPzogVGV4dFBhaW50U2V0dGluZ3wgbnVsbDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEJveFBhaW50U2V0dGluZ3tcclxuICBjb2xvcj86Q29sb3JzIHwgbnVsbDtcclxuICBzdHlsZT86IFJlY3RTdHlsZSB8IG51bGw7XHJcbiAgYm94U3Ryb2tlV2lkdGg/OiBOdW1iZXIgfCBudWxsO1xyXG5cclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFRleHRQYWludFNldHRpbmd7XHJcbiAgY29sb3IgPzpDb2xvcnMgfCBudWxsO1xyXG4gIHRleHRTaXplID86IE51bWJlciB8IG51bGw7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBtbE9iamVjdEFuYWx5c2VyU2V0dGluZyB7XHJcbiAgaXNDbGFzc2lmaWNhdGlvbkFsbG93ZWQ/OiBib29sZWFuIHwgbnVsbDtcclxuICBpc011bHRpcGxlUmVzdWx0c0FsbG93ZWQ/OiBib29sZWFuIHwgbnVsbDtcclxuICBhbmFseXplclR5cGU6IE1sT2JqZWN0QW5hbHlzZXJDb25maWc7XHJcbn1cclxuZXhwb3J0IGVudW0gTWxPYmplY3RBbmFseXNlckNvbmZpZ3tcclxuICBUWVBFX1ZJREVPID0gMSxcclxuICBUWVBFX1BJQ1RVUkUgPSAwXHJcbn1cclxuXHJcbi8vLy8vLy8qKioqLy8vLy8vLy8vXHJcbi8vUlRUIFxyXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBydHRSZXF7XHJcbm1MU3BlZWNoUmVhbFRpbWVUcmFuc2NyaXB0aW9uQ29uZmlnIDogTUxTcGVlY2hSZWFsVGltZVRyYW5zY3JpcHRpb25Db25maWc7XHJcblxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxTcGVlY2hSZWFsVGltZVRyYW5zY3JpcHRpb25Db25maWcge1xyXG5sYW5ndWFnZTogTUxSdHRMYW5ndWFnZXMgfCBudWxsIDtcclxucHVuY3R1YXRpb25FbmFibGU6IGJvb2xlYW4gfCBudWxsIDtcclxud29yZFRpbWVPZmZzZXRFbmFibGU6IGJvb2xlYW4gfCBudWxsO1xyXG5zZW50ZW5jZVRpbWVPZmZzZXRFbmFibGU6IGJvb2xlYW4gfCBudWxsIDtcclxuc2NlbmVzPzogTUxSdHRTY2VuZXMgfG51bGw7XHJcblxyXG59XHJcbmV4cG9ydCBlbnVtIE1MUnR0TGFuZ3VhZ2Vze1xyXG4gIExBTl9aSF9DTiA9IFwiemgtQ05cIixcclxuICBMQU5fRU5fVVMgPSBcImVuLVVTXCIsXHJcbiAgTEFOX0ZSX0ZSID0gXCJmci1GUlwiLFxyXG4gIExBTl9FU19FUyA9IFwiZXMtRVNcIixcclxuICBMQU5fRU5fSU4gPSBcImVuLUlOXCIsXHJcbiAgTEFOX0RFX0RFID0gXCJkZS1ERVwiXHJcbn1cclxuZXhwb3J0IGVudW0gTUxSdHRTY2VuZXN7XHJcbiAgU0NFTkVTX1NIT1BQSU5HPVwic2hvcHBpbmdcIlxyXG59XHJcblxyXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xyXG4vL1NUSUxMICYmIExJVkUgU0NFTkUgQU5BTFlTRVIgXHJcbi8vLy8vLy8qKioqLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHN0aWxsU2NlbmVSZXF7XHJcbiAgZmlsZVBhdGg6IGFueTtcclxuICBhbmFseXNlTW9kZT86IHN5bmNUeXBlIHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBzY2VuZVNldHRpbmdze1xyXG4gIGNvbG9yID86IENvbG9ycyB8IG51bGw7XHJcbiAgdGV4dFNpemUgPzogTnVtYmVyIHwgbnVsbDtcclxufVxyXG5cclxuLy8vLy8vLyoqKiovLy8vLy8vLy9cclxuLy9TVElMTCAmJiBMSVZFIFNLRUxFVE9OIEFOQUxZU0VSIFxyXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBzdGlsbFNrZWxldG9uUmVxe1xyXG4gIGZpbGVQYXRoOiBhbnk7XHJcbiAgc3luY1R5cGU6IE1MU2tlbGV0b25Db25maWc7XHJcbiAgYW5hbHl6ZXJUeXBlOiBNTFNrZWxldG9uQ29uZmlnO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2Ugc3RpbGxTa2VsZXRvblNpbWlsYXJpdHlSZXF7XHJcbiAgZmlsZVBhdGg6IGFueTtcclxuICBmaWxlcGF0aDI6IGFueTtcclxuICBzeW5jVHlwZTogTUxTa2VsZXRvbkNvbmZpZztcclxuICBhbmFseXplclR5cGU6IE1MU2tlbGV0b25Db25maWc7XHJcbn1cclxuZXhwb3J0IGVudW0gTUxTa2VsZXRvbkNvbmZpZ3tcclxuICBTWU5DX01PREU9MCxcclxuICBBU1lOQ19NT0RFPTEsXHJcbiAgU0lNSUxBUklUVFlfTU9ERT0yLFxyXG4gIFRZUEVfWU9HQT0xLFxyXG4gIFRZUEVfTk9STUFMPTAsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2tlbGV0b25HcmFwaGljU2V0dGluZ3tcclxuICBjaXJjbGVQYWludFNldHRpbmcgPzogY2lyY2xlUGFpbnRTZXR0aW5nIHwgbnVsbDtcclxuICBsaW5lUGFpbnRTZXR0aW5nID86IGxpbmVQYWludFNldHRpbmcgfCBudWxsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgY2lyY2xlUGFpbnRTZXR0aW5ne1xyXG4gICBjb2xvcj86IENvbG9yc3wgbnVsbDtcclxuICAgc3R5bGU/OiBSZWN0U3R5bGUgfCBudWxsO1xyXG4gICBhbnRpQWxpYXM/OmJvb2xlYW58IG51bGw7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBsaW5lUGFpbnRTZXR0aW5ne1xyXG4gIGNvbG9yPzpDb2xvcnN8IG51bGw7XHJcbiAgc3R5bGU/OiBSZWN0U3R5bGUgfCBudWxsO1xyXG4gIHN0cm9rZVdpZHRoPzpOdW1iZXJ8IG51bGw7XHJcbiAgYW50aUFsaWFzPzpib29sZWFufCBudWxsO1xyXG5cclxufVxyXG5cclxuLy8vLy8vLyoqKiovLy8vLy8vLy9cclxuLy9UZXh0IEFuYWx5c2VyXHJcbi8vLy8vLy8qKioqLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgbG9jYWxJbWFnZVRleHRSZXEge1xyXG4gIG9jclR5cGU6IE1MVGV4dENvbmZpZztcclxuICBhbmFseXNlTW9kZT86IG51bWJlcjtcclxuICBsb2NhbFRleHRTZXR0aW5nPzogKGxvY2FsVGV4dFNldHRpbmcpIHwgbnVsbDtcclxuICBmaWxlUGF0aDogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGxvY2FsVGV4dFNldHRpbmcge1xyXG4gIG9jck1vZGU/OiBNTExvY2FsVGV4dFNldHRpbmc7XHJcbiAgbGFuZ3VhZ2U/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1MTG9jYWxUZXh0U2V0dGluZyB7XHJcbiAgT0NSX0RFVEVDVF9NT0RFID0gMSxcclxuICBPQ1JfVFJBQ0tJTkdfTU9ERSA9IDJcclxufVxyXG5leHBvcnQgZW51bSBNTFRleHRDb25maWcge1xyXG4gIE9DUl9MT0NBTF9UWVBFID0gMCxcclxuICBPQ1JfUkVNT1RFX1RZUEUgPSAxXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSByZW1vdGVJbWFnZVRleHRSZXEge1xyXG4gIG9jclR5cGU6IE1MVGV4dENvbmZpZztcclxuICBhbmFseXNlTW9kZT86IG51bWJlcjtcclxuICByZW1vdGVUZXh0U2V0dGluZz86IChyZW1vdGVUZXh0U2V0dGluZyk7XHJcbiAgZmlsZVBhdGg6IGFueTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIHJlbW90ZVRleHRTZXR0aW5nIHtcclxuICB0ZXh0RGVuc2l0eVNjZW5lPzogTUxSZW1vdGVUZXh0U2V0dGluZztcclxuICBsYW5ndWFnZUxpc3Q/OiBBcnJheTxzdHJpbmc+O1xyXG4gIGJvcmRlclR5cGU/OiBNTFJlbW90ZVRleHRTZXR0aW5nO1xyXG59XHJcblxyXG5cclxuLy8vLy8vLyoqKiovLy8vLy8vLy9cclxuLy9UUkFOU0xBVEVcclxuLy8vLy8vLyoqKiovLy8vLy8vLy9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcmVtb3RldHJhbnNsYXRlUmVxIHtcclxuICBVU0VfU1lOQzogYm9vbGVhbixcclxuICB0YXJnZXRMYW5nQ29kZTogc3RyaW5nO1xyXG4gIHNvdXJjZUxhbmdDb2RlPzogc3RyaW5nO1xyXG4gIHNvdXJjZVRleHQ6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIGxvY2FsdHJhbnNsYXRlUmVxIHtcclxuICBVU0VfU1lOQzogYm9vbGVhbixcclxuICB0YXJnZXRMYW5nQ29kZTogc3RyaW5nO1xyXG4gIHNvdXJjZUxhbmdDb2RlOiBzdHJpbmc7XHJcbiAgc291cmNlVGV4dDogc3RyaW5nO1xyXG5cclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIGRlbGV0ZVRyYW5zbGF0ZVJlcXtcclxuICBVU0VfU1lOQzogYm9vbGVhbixcclxuICBsYW5nY29kZTpzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBkb3dubG9hZFRyYW5zbGF0ZVJlcXtcclxuICBVU0VfU1lOQzogYm9vbGVhbixcclxuICBsYW5nY29kZTpzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBsb2NhbEFsbExhbmdSZXF7XHJcbiAgVVNFX1NZTkM6IGJvb2xlYW4sXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSByZW1vdGVBbGxMYW5nUmVxe1xyXG4gIFVTRV9TWU5DOiBib29sZWFuLFxyXG59XHJcblxyXG4gLy8vLy8vLyoqKiovLy8vLy8vLy9cclxuLy8gU291bmQgRGVjdFxyXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBzb3VuZERlY3RSZXEge1xyXG4gIHN0YXJ0VHlwZTogYm9vbGVhbiB8IG51bGw7XHJcbiAgXHJcbn1cclxuLy8vLy8vLyoqKiovLy8vLy8vLy9cclxuLy8gVGV4dCBFbWJlZGRpbmdcclxuLy8vLy8vLyoqKiovLy8vLy8vLy9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgdGV4dEVtYmVkZGluZ0RpY0luZm9SZXEge1xyXG4gIHRleHRFbWJlZGRpbmdTZXR0aW5nOiB0ZXh0RW1iZWRkaW5nU2V0dGluZztcclxuICBcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIHRleHRFbWJlZGRpbmdXb3JkdG9WZWN0b3JSZXEge1xyXG4gIHRleHRFbWJlZGRpbmdTZXR0aW5nPzogdGV4dEVtYmVkZGluZ1NldHRpbmc7XHJcbiAgd29yZFRleHQ6c3RyaW5nO1xyXG4gIFxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgdGV4dEVtYmVkZGluZ1NlbnRlbmNldG9WZWN0b3JSZXEge1xyXG4gIHRleHRFbWJlZGRpbmdTZXR0aW5nPzogdGV4dEVtYmVkZGluZ1NldHRpbmc7XHJcbiAgc2VudGVuY2VUZXh0OnN0cmluZztcclxuXHJcbiAgXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSB0ZXh0RW1iZWRkaW5nV29yZFNpbWlsYXJpdHlSZXEge1xyXG4gIHRleHRFbWJlZGRpbmdTZXR0aW5nPzogdGV4dEVtYmVkZGluZ1NldHRpbmc7XHJcbiAgd29yZFRleHQxIDogc3RyaW5nO1xyXG4gIHdvcmRUZXh0MiA6IHN0cmluZztcclxuICBcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIHRleHRFbWJlZGRpbmdTZW50ZW5jZVNpbWlsYXJpdHlSZXEge1xyXG4gIHRleHRFbWJlZGRpbmdTZXR0aW5nPzogdGV4dEVtYmVkZGluZ1NldHRpbmc7XHJcbiAgc2VudGVuY2VUZXh0MSA6IHN0cmluZztcclxuICBzZW50ZW5jZVRleHQyIDogc3RyaW5nO1xyXG4gIFxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgdGV4dEVtYmVkZGluZ1NpbWlsYXJXb3Jkc1JlcSB7XHJcbiAgdGV4dEVtYmVkZGluZ1NldHRpbmc/OiB0ZXh0RW1iZWRkaW5nU2V0dGluZztcclxuICBtdWx0aXBsZVRleHQ6c3RyaW5nO1xyXG4gIHNpbWlsYXJpdHlOdW1iZXI6bnVtYmVyO1xyXG5cclxuICBcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIHRleHRFbWJlZGRpbmdXb3JkQmF0Y2hSZXF7XHJcbiAgdGV4dEVtYmVkZGluZ1NldHRpbmc/OiB0ZXh0RW1iZWRkaW5nU2V0dGluZztcclxuICBiYXRjaFRleHQ6c3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHRleHRFbWJlZGRpbmdTZXR0aW5ne1xyXG4gIGxhbmd1YWdlOnN0cmluZ1xyXG59XHJcblxyXG5cclxuLy8vLy8vLyoqKiovLy8vLy8vLy9cclxuLy8gVFRTIEFOQUxZU0VSXHJcbi8vLy8vLy8qKioqLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHR0c0VuZ2luZVJlcSB7XHJcbiAgbGFuZ3VhZ2U/OiBzdHJpbmcgfG51bGw7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSB0dHNSZXEge1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBtbENvbmZpZ3M6IE1MQ29uZmlncztcclxuICBxdWV1aW5nTW9kZTogTUxUdHNDb25zdGFudHM7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxDb25maWdzIHtcclxuICBsYW5ndWFnZTogTUxUdHNDb25zdGFudHM7XHJcbiAgcGVyc29uOiBNTFR0c0NvbnN0YW50cztcclxuICBzcGVlZDogbnVtYmVyO1xyXG4gIHZvbHVtZTogbnVtYmVyO1xyXG4gIHN5bnRoZXNpemVNb2RlOiBNTFR0c0NvbnN0YW50cztcclxufVxyXG5leHBvcnQgZW51bSBNTFR0c0NvbnN0YW50cyB7XHJcbiAgVFRTX0VOX1VTID0gXCJlbi1VU1wiLFxyXG4gIFRUU19MQU5fRVNfRVMgPSBcImVzLUVTXCIsXHJcbiAgVFRTX0xBTl9GUl9GUiA9IFwiZnItRlJcIixcclxuICBUVFNfTEFOX0RFX0RFID1cImRlLURFXCIsXHJcbiAgVFRTX0xBTl9JVF9JVCA9IFwiaXQtSVRcIixcclxuICBUVFNfWkhfSEFOUyA9IFwiemgtSGFuc1wiLFxyXG4gIFRUU19TUEVBS0VSX0ZFTUFMRV9FTiA9IFwiRmVtYWxlLWVuXCIsXHJcbiAgVFRTX1NQRUFLRVJfRkVNQUxFX1pIID0gXCJGZW1hbGUtemhcIixcclxuICBUVFNfU1BFQUtFUl9NQUxFX0VOID0gXCJNYWxlLWVuXCIsXHJcbiAgVFRTX1NQRUFLRVJfTUFMRV9aSCA9IFwiTWFsZS16aFwiLFxyXG4gIFRUU19TUEVBS0VSX0ZFTUFMRV9ERSA9IFwiZGUtREUtc3QtMVwiLFxyXG4gIFRUU19TUEVBS0VSX0ZFTUFMRV9FUyA9IFwiaXQtSVQtc3QtMVwiLFxyXG4gIFRUU19TUEVBS0VSX0ZFTUFMRV9JVCA9IFwiZXMtRVMtc3QtMVwiLFxyXG4gIFRUU19TUEVBS0VSX0ZFTUFMRV9GUiA9IFwiZnItRlItc3QtMVwiLFxyXG4gIFRUU19TUEVBS0VSX09GRkxJTkVfRU5fVVNfTUFMRV9CT0xUID0gXCJlbi1VUy1zdC1ib2x0LTJcIixcclxuICBUVFNfU1BFQUtFUl9PRkZMSU5FX1pIX0hBTlNfRkVNQUxFX0VBR0xFID0gXCJ6aC1IYW5zLXN0LWVhZ2xlLTFcIixcclxuICBUVFNfU1BFQUtFUl9PRkZMSU5FX1pIX0hBTlNfTUFMRV9FQUdMRSA9IFwiemgtSGFucy1zdC1lYWdsZS0yXCIsXHJcbiAgVFRTX1NQRUFLRVJfT0ZGTElORV9FTl9VU19GRU1BTEVfRUFHTEUgPSBcImVuLVVTLXN0LWVhZ2xlLTFcIixcclxuICBUVFNfU1BFQUtFUl9PRkZMSU5FX0VOX1VTX01BTEVfRUFHTEUgPSBcImVuLVVTLXN0LWVhZ2xlLTJcIixcclxuICBUVFNfU1BFQUtFUl9PRkZMSU5FX0VOX1VTX0ZFTUFMRV9CRUUgPSBcImVuLVVTLXN0LWJlZS0xXCIsXHJcbiAgVFRTX1NQRUFLRVJfT0ZGTElORV9GUl9GUl9GRU1BTEVfQkVFID0gXCJmci1GUi1zdC1iZWUtMVwiLFxyXG4gIFRUU19TUEVBS0VSX09GRkxJTkVfRVNfRVNfRkVNQUxFX0JFRSA9IFwiZXMtRVMtc3QtYmVlLTFcIixcclxuICBUVFNfU1BFQUtFUl9PRkZMSU5FX0RFX0RFX0ZFTUFMRV9CRUUgPSBcImRlLURFLXN0LWJlZS0xXCIsXHJcbiAgVFRTX1NQRUFLRVJfT0ZGTElORV9JVF9JVF9GRU1BTEVfQkVFID0gXCJpdC1JVC1zdC1iZWUtMVwiLFxyXG4gIFRUU19TUEVBS0VSX09GRkxJTkVfWkhfSEFOU19GRU1BTEVfQk9MVCA9IFwiemgtSGFucy1zdC1ib2x0LTFcIixcclxuICBUVFNfU1BFQUtFUl9PRkZMSU5FX1pIX0hBTlNfTUFMRV9CT0xUID0gXCJ6aC1IYW5zLXN0LWJvbHQtMlwiLFxyXG4gIFRUU19TUEVBS0VSX09GRkxJTkVfRU5fVVNfRkVNQUxFX0JPTFQgPSBcImVuLVVTLXN0LWJvbHQtMVwiLFxyXG4gIFRUU19PTkxJTkVfTU9ERSA9IFwib25saW5lXCIsXHJcbiAgVFRTX09GRkxJTkVfTU9ERSA9IFwib2ZmbGluZVwiLFxyXG4gIFFVRVVFX0FQUEVORCA9IDAsXHJcbiAgUVVFVUVfRkxVU0ggPSAxLFxyXG4gIEVYVEVSTkFMX1BMQVlCQUNLID0yLFxyXG4gIE9QRU5fU1RSRUFNID0gNFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDb2xvcnMge1xyXG4gIFJFRCA9IC02NTUzNixcclxuICBES0dSQVkgPSAtMTIzMDMyOTIsXHJcbiAgR1JBWSA9IC03ODI5MzY4LFxyXG4gIFdISVRFID0gLTEsXHJcbiAgQkxVRSA9IC0xNjc3Njk2MSxcclxuICBCTEFDSyA9IC0xNjc3NzIxNixcclxuICBMVEdSQVkgPSAtMzM1NTQ0NCxcclxuICBNQUdFTlRBID0gLTY1MjgxLFxyXG4gIFlFTExPVyA9IC0yNTYsXHJcbiAgQ1lBTiA9IC0xNjcxMTY4MSxcclxuICBHUkVFTiA9IC0xNjcxMTkzNixcclxuICBUUkFOU1BBUkVOVCA9IDBcclxufVxyXG5leHBvcnQgZW51bSBSZWN0U3R5bGUge1xyXG4gIFNUUk9LRSA9IDEsXHJcbiAgRklMTCA9IDIsXHJcbiAgRklMTF9BTkRfU1RST0tFID0gMyxcclxuICB9IFxyXG5cclxuLypcclxuLS0tLS0tLS0tLS0tLS0tLS0gcmV0dXJuXHJcbiovXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1MQWZ0UmVzdWx0IHtcclxuICBldmVudE5hbWU6IHN0cmluZztcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgdGFza0lkOiBzdHJpbmc7XHJcbiAgY29tcGxldGU6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNTEFmdEVycm9yUmVzdWx0e1xyXG4gIGV2ZW50TmFtZTogc3RyaW5nO1xyXG4gIHRhc2tJZDpzdHJpbmc7XHJcbiAgZXJyb3JDb2RlOk1MQWZ0RXJyb3JDb2RlcztcclxuICBtZXNzYWdlOnN0cmluZztcclxufVxyXG5leHBvcnQgZW51bSBNTEFmdEVycm9yQ29kZXN7XHJcbiAgRVJPVFNVUFBPUlRFRCA9IDExMTAxLFxyXG4gIExBTkdVQUdFX0NPREVfTk9UU1VQUE9SVEVEID0gMTExMDIsXHJcbiAgRVJSX0FVRElPX0ZJTEVfU0laRV9PVkVSRkxPVyA9IDExMTAzLFxyXG4gIEVSUl9BVURJT19MRU5HVEhfT1ZFUkZMT1cgPSAxMTEwNCxcclxuICBFUlJfRklMRV9OT1RfRk9VTkQgPSAxMTEwNSxcclxuICBFUlJfSUxMRUdBTF9QQVJBTUVURVIgPSAxMTEwNixcclxuICBFUlJfRU5HSU5FX0JVU1kgPSAxMTEwNyxcclxuICBFUlJfTkVUQ09OTkVDVF9GQUlMRUQgPSAxMTEwOCxcclxuICBFUlJfUkVTVUxUX1dIRU5fVVBMT0FESU5HID0gMTExMDksXHJcbiAgRVJSX1RBU0tfTk9UX0VYSVNURUQgPSAxMTExMCxcclxuICBFUlJfQVVESU9fVFJBTlNDUklQVF9GQUlMRUQgPSAxMTExMSxcclxuICBFUlJfQVVESU9fSU5JVF9GQUlMRUQgPSAxMTExMixcclxuICBFUlJfQVVESU9fVVBMT0FEX0ZBSUxFRCA9IDExMTEzLFxyXG4gIEVSUl9UQVNLX0FMUkVBRFlfSU5QUk9HUkVTUyA9IDExMTE0LFxyXG4gIEVSUl9OT19FTk9VR0hfU1RPUkFHRSA9IDExMTE1LFxyXG4gIEVSUl9BVVRIT1JJWkVfRkFJTEVEID0gMTExMTksXHJcbiAgRVJSX1NFUlZJQ0VfQ1JFRElUID0gMTExMjIsXHJcbiAgRVJSX0lOVEVSTkFMID0gMTExOTgsXHJcbiAgRVJSX1VOS05PV04gPSAxMTE5OVxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxBZnRFdmVudFJlc3VsdHtcclxuICBldmVudE5hbWU6IHN0cmluZztcclxuICB0YXNrSWQ6c3RyaW5nO1xyXG4gIGV4dDpzdHJpbmc7XHJcbiAgZXZlbnRJZDpzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGVudW0gTUxBRlRFdmVudENvZGVze1xyXG4gIFBBVVNFX0VWRU5UPTIsXHJcbiAgU1RPUF9FVkVOVD0zLFxyXG4gIFVQTE9BREVEX0VWRU5UPTFcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxCYW5rQ2FyZCB7XHJcbiAgbnVtYmVyOiBzdHJpbmc7XHJcbiAgZXhwaXJlOiBzdHJpbmc7XHJcbiAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIG9yZ2FuaXphdGlvbjpzdHJpbmc7XHJcbiAgb3JpZ2luYWxCaXRtYXA6YW55O1xyXG4gIG51bWJlckJpdG1hcDphbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxDdXN0b21CYW5rQ2FyZCB7XHJcbiAgbnVtYmVyOiBzdHJpbmc7XHJcbiAgZXhwaXJlOiBzdHJpbmc7XHJcbiAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIG9yZ2FuaXphdGlvbjpzdHJpbmc7XHJcbiAgb3JpZ2luYWxCaXRtYXA6YW55O1xyXG4gIG51bWJlckJpdG1hcDphbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxGYWNlIHtcclxuICBSZXN1bHQ/OiAoUmVzdWx0RW50aXR5KVtdIHwgbnVsbDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFJlc3VsdEVudGl0eSB7XHJcbiAgb3Blbm5lc3NPZkxlZnRFeWU6IG51bWJlcjtcclxuICB0cmFjaW5nSWRlbnRpdHk6IG51bWJlcjtcclxuICBwb3NzaWJpbGl0eU9mU21pbGluZzogbnVtYmVyO1xyXG4gIG9wZW5uZXNzT2ZSaWdodEV5ZTogbnVtYmVyO1xyXG4gIHJvdGF0aW9uQW5nbGVYOiBudW1iZXI7XHJcbiAgcm90YXRpb25BbmdsZVk6IG51bWJlcjtcclxuICByb3RhdGlvbkFuZ2xlWjogbnVtYmVyO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgYm9yZGVyOiBCb3JkZXI7XHJcbiAgZmVhdHVyZXM6IEZlYXR1cmVzO1xyXG4gIGVtb3Rpb25zOiBFbW90aW9ucztcclxuICBhbGxQb2ludHM/OiAoQWxsUG9pbnRzRW50aXR5KVtdIHwgbnVsbDtcclxuICBrZXlQb2ludHM/OiAobnVsbClbXSB8IG51bGw7XHJcbiAgZmFjZVNoYXBlTGlzdD86IChGYWNlU2hhcGVMaXN0RW50aXR5KVtdIHwgbnVsbDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEJvcmRlciB7XHJcbiAgYm90dG9tOiBudW1iZXI7XHJcbiAgdG9wOiBudW1iZXI7XHJcbiAgbGVmdDogbnVtYmVyO1xyXG4gIHJpZ2h0OiBudW1iZXI7XHJcbiAgZXhhY3RDZW50ZXJYOiBudW1iZXI7XHJcbiAgY2VudGVyWTogbnVtYmVyO1xyXG4gIGNlbnRlclg6IG51bWJlcjtcclxuICBkZXNjcmliZUNvbnRlbnRzOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEZlYXR1cmVzIHtcclxuICBzdW5HbGFzc1Byb2JhYmlsaXR5OiBudW1iZXI7XHJcbiAgc2V4UHJvYmFiaWxpdHk6IG51bWJlcjtcclxuICByaWdodEV5ZU9wZW5Qcm9iYWJpbGl0eTogbnVtYmVyO1xyXG4gIG1vdXN0YWNoZVByb2JhYmlsaXR5OiBudW1iZXI7XHJcbiAgbGVmdEV5ZU9wZW5Qcm9iYWJpbGl0eTogbnVtYmVyO1xyXG4gIGFnZTogbnVtYmVyO1xyXG4gIGhhdFByb2JhYmlsaXR5OiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBFbW90aW9ucyB7XHJcbiAgc3VycHJpc2VQcm9iYWJpbGl0eTogbnVtYmVyO1xyXG4gIHNtaWxpbmdQcm9iYWJpbGl0eTogbnVtYmVyO1xyXG4gIHNhZFByb2JhYmlsaXR5OiBudW1iZXI7XHJcbiAgbmV1dHJhbFByb2JhYmlsaXR5OiBudW1iZXI7XHJcbiAgZmVhclByb2JhYmlsaXR5OiBudW1iZXI7XHJcbiAgZGlzZ3VzdFByb2JhYmlsaXR5OiBudW1iZXI7XHJcbiAgYW5ncnlQcm9iYWJpbGl0eTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQWxsUG9pbnRzRW50aXR5IHtcclxuICBYOiBudW1iZXI7XHJcbiAgWTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRmFjZVNoYXBlTGlzdEVudGl0eSB7XHJcbiAgcG9pbnRzPzogKFBvaW50c0VudGl0eSlbXSB8IG51bGw7XHJcbiAgZmFjZVNoYXBlVHlwZTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnRzRW50aXR5IHtcclxuICBYOiBudW1iZXI7XHJcbiAgWTogbnVtYmVyO1xyXG4gIFo6IG51bWJlcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxJbWFnZUNsYXNzaWZpY2F0aW9uIHtcclxuICByZXN1bHQ/OiAoUmVzdWx0RW50aXR5KVtdIHwgbnVsbDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFJlc3VsdEVudGl0eSB7XHJcbiAgaWRlbnRpdHk6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcG9zc2liaWxpdHk6IG51bWJlcjtcclxuICBoYXNoQ29kZTogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxEb2N1bWVudCB7XHJcbiAgc3RyaW5nVmFsdWU6IHN0cmluZztcclxuICBibG9ja3M/OiAoQmxvY2tzKVtdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQmxvY2tzIHtcclxuICBzdHJpbmdWYWx1ZTogc3RyaW5nO1xyXG4gIHBvc3NpYmlsaXR5OiBudW1iZXI7XHJcbiAgYm9yZGVyOiBCb3JkZXI7XHJcbiAgaW50ZXJ2YWw6IEludGVydmFsO1xyXG4gIHNlY3Rpb25zPzogKFNlY3Rpb25zKVtdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQm9yZGVyIHtcclxuICBib3R0b206IG51bWJlcjtcclxuICB0b3A6IG51bWJlcjtcclxuICBsZWZ0OiBudW1iZXI7XHJcbiAgcmlnaHQ6IG51bWJlcjtcclxuICBleGFjdENlbnRlclg6IG51bWJlcjtcclxuICBjZW50ZXJZOiBudW1iZXI7XHJcbiAgY2VudGVyWDogbnVtYmVyO1xyXG4gIGRlc2NyaWJlQ29udGVudHM6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICB3aWR0aDogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJ2YWwge1xyXG4gIGludGVydmFsVHlwZTogbnVtYmVyO1xyXG4gIGlzVGV4dEZvbGxvd2VkOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VjdGlvbnMge1xyXG4gIHN0cmluZ1ZhbHVlOiBzdHJpbmc7XHJcbiAgYm9yZGVyOiBCb3JkZXI7XHJcbiAgaW50ZXJ2YWw6IEludGVydmFsO1xyXG4gIHBvc3NpYmlsaXR5OiBudW1iZXI7XHJcbiAgbGFuZ3VhZ2VMaXN0PzogKExhbmd1YWdlTGlzdClbXTtcclxuICBsaW5lTGlzdD86IChMaW5lTGlzdClbXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlTGlzdCB7XHJcbiAgbGFuZ3VhZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIExpbmVMaXN0IHtcclxuICBzdHJpbmdWYWx1ZTogc3RyaW5nO1xyXG4gIGJvcmRlcjogQm9yZGVyO1xyXG4gIHBvc3NpYmlsaXR5OiBudW1iZXI7XHJcbiAgbGFuZ3VhZ2VMaXN0PzogKExhbmd1YWdlTGlzdClbXTtcclxuICB3b3JkTGlzdD86IChXb3JkTGlzdClbXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFdvcmRMaXN0IHtcclxuICBzdHJpbmdWYWx1ZTogc3RyaW5nO1xyXG4gIGJvcmRlcjogQm9yZGVyO1xyXG4gIGNoYXJhY3Rlckxpc3Q/OiAoQ2hhcmFjdGVyTGlzdClbXTtcclxuICBsYW5ndWFnZUxpc3Q/OiAoTGFuZ3VhZ2VMaXN0KVtdO1xyXG4gIHBvc3NpYmlsaXR5PzogbnVtYmVyO1xyXG4gIGludGVydmFsPzogSW50ZXJ2YWw7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDaGFyYWN0ZXJMaXN0IHtcclxuICBzdHJpbmdWYWx1ZTogc3RyaW5nO1xyXG4gIHBvc3NpYmlsaXR5OiBudW1iZXI7XHJcbiAgYm9yZGVyPzogQm9yZGVyO1xyXG4gIGxhbmd1YWdlTGlzdD86IChMYW5ndWFnZUxpc3QpW107XHJcbiAgaW50ZXJ2YWw/OiBJbnRlcnZhbDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNTERvY3VtZW50U2tld0RldGVjdFJlc3VsdCB7XHJcbiAgcmVzdWx0Q29kZTogbnVtYmVyO1xyXG4gIGJpdG1hcDogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1MR2NyQ2FwdHVyZVJlc3VsdCB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIGNhcmRCaXRtYXA6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNTEhhbmRLZXlwb2ludHMge1xyXG4gIGhhbmRrZXlQb2ludHM6IGhhbmRrZXlQb2ludHM7XHJcbiAgcmVjdDogUmVjdDtcclxuICBzY29yZTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgaGFuZGtleVBvaW50c3tcclxuICB4Om51bWJlcjtcclxuICB5Om51bWJlcjtcclxuICBzY29yZTpudW1iZXI7XHJcbiAgdHlwZTpudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBSZWN0IHtcclxuICBib3R0b206IG51bWJlcjtcclxuICB0b3A6IG51bWJlcjtcclxuICBsZWZ0OiBudW1iZXI7XHJcbiAgcmlnaHQ6IG51bWJlcjtcclxuICBleGFjdENlbnRlclg6IG51bWJlcjtcclxuICBjZW50ZXJZOiBudW1iZXI7XHJcbiAgY2VudGVyWDogbnVtYmVyO1xyXG4gIGRlc2NyaWJlQ29udGVudHM6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICB3aWR0aDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1MSW1hZ2VTZWdtZW50YXRpb24ge1xyXG4gIGJpdG1hcEZvcmVncm91bmQ6IGFueTtcclxuICBiaXRtYXBHcmF5c2NhbGU6IGFueTtcclxuICBtYXNrczogbnVtYmVyO1xyXG4gIGJpdG1hcE9yaWdpbmFsOiBhbnk7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNTFJlbW90ZUxhbmRtYXJrIHtcclxuICBsYW5kbWFyazogc3RyaW5nO1xyXG4gIGxhbmRtYXJrSWRlbnRpdHk6IHN0cmluZztcclxuICBwb3NzaWJpbGl0eTogbnVtYmVyO1xyXG4gIGJvcmRlcjogQm9yZGVyO1xyXG4gIHBvc2l0aW9uSW5mbz86IChQb3NpdGlvbkluZm9FbnRpdHkpW10gfCBudWxsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQm9yZGVyIHtcclxuICBib3R0b206IG51bWJlcjtcclxuICB0b3A6IG51bWJlcjtcclxuICBsZWZ0OiBudW1iZXI7XHJcbiAgcmlnaHQ6IG51bWJlcjtcclxuICBleGFjdENlbnRlclg6IG51bWJlcjtcclxuICBjZW50ZXJZOiBudW1iZXI7XHJcbiAgY2VudGVyWDogbnVtYmVyO1xyXG4gIGRlc2NyaWJlQ29udGVudHM6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICB3aWR0aDogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9zaXRpb25JbmZvRW50aXR5IHtcclxuICBsbmc6IG51bWJlcjtcclxuICBsYXQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNTFJlbW90ZUxhbmdEZXRlY3Rpb24ge1xyXG4gIGxhbmdDb2RlOiBzdHJpbmc7XHJcbiAgcHJvYmFiaWxpdHk6IG51bWJlcjtcclxuICBoYXNoQ29kZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1MbGFuZ0RldGVjdGlvbldpdGhGaXJzdERldGVjdCB7XHJcbiAgbGFuZ0NvZGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNTExpdmVuZXNzQ2FwdHVyZVJlc3VsdCB7XHJcbiAgYml0bWFwOiBCaXRtYXA7XHJcbiAgaXNMaXZlOiBib29sZWFuO1xyXG4gIHBpdGNoOiBudW1iZXI7XHJcbiAgcm9sbDogbnVtYmVyO1xyXG4gIHNjb3JlOiBudW1iZXI7XHJcbiAgeWF3OiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBCaXRtYXAge1xyXG4gIG1HYWxsZXJ5Q2FjaGVkOiBib29sZWFuO1xyXG4gIG1IZWlnaHQ6IG51bWJlcjtcclxuICBtTmF0aXZlUHRyOiBudW1iZXI7XHJcbiAgbVdpZHRoOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxPYmplY3Qge1xyXG4gIHR5cGVJZGVudGl0eTogbnVtYmVyO1xyXG4gIHR5cGVQb3NzaWJpbGl0eTogbnVtYmVyO1xyXG4gIGJvcmRlcjogQm9yZGVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQm9yZGVyIHtcclxuICBib3R0b206IG51bWJlcjtcclxuICB0b3A6IG51bWJlcjtcclxuICBsZWZ0OiBudW1iZXI7XHJcbiAgcmlnaHQ6IG51bWJlcjtcclxuICBleGFjdENlbnRlclg6IG51bWJlcjtcclxuICBjZW50ZXJZOiBudW1iZXI7XHJcbiAgY2VudGVyWDogbnVtYmVyO1xyXG4gIGRlc2NyaWJlQ29udGVudHM6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICB3aWR0aDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1MU2tlbGV0b24ge1xyXG4gIGpvaW50czogam9pbnRzO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2Ugam9pbnRze1xyXG4gIHg6bnVtYmVyO1xyXG4gIHk6bnVtYmVyO1xyXG4gIHNjb3JlOm51bWJlcjtcclxuICB0eXBlOm51bWJlcjtcclxuICBoYXNoQ29kZTpudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxUZXh0IHtcclxuICBzdHJpbmdWYWx1ZTogc3RyaW5nO1xyXG4gIGJsb2Nrcz86IChCbG9ja3MpW107XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBCbG9ja3Mge1xyXG4gIGNvbnRlbnRzPzogKENvbnRlbnRzKVtdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29udGVudHMge1xyXG4gIHN0cmluZ1ZhbHVlOiBzdHJpbmc7XHJcbiAgcm90YXRpbmdEZWdyZWU6IG51bWJlcjtcclxuICBpc1ZlcnRpY2FsOiBib29sZWFuO1xyXG4gIGxhbmd1YWdlOiBzdHJpbmc7XHJcbiAgYm9yZGVyOiBCb3JkZXI7XHJcbiAgY29udGVudHM/OiAoQ29udGVudHMpW107XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBCb3JkZXIge1xyXG4gIGJvdHRvbTogbnVtYmVyO1xyXG4gIHRvcDogbnVtYmVyO1xyXG4gIGxlZnQ6IG51bWJlcjtcclxuICByaWdodDogbnVtYmVyO1xyXG4gIGV4YWN0Q2VudGVyWDogbnVtYmVyO1xyXG4gIGNlbnRlclk6IG51bWJlcjtcclxuICBjZW50ZXJYOiBudW1iZXI7XHJcbiAgZGVzY3JpYmVDb250ZW50czogbnVtYmVyO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDb250ZW50cyB7XHJcbiAgc3RyaW5nVmFsdWU6IHN0cmluZztcclxuICBib3JkZXI6IEJvcmRlcjtcclxuICBsYW5ndWFnZTogc3RyaW5nO1xyXG4gIGxhbmd1YWdlTGlzdD86IChMYW5ndWFnZUxpc3QpW107XHJcbiAgdmVydGV4ZXM/OiAoVmVydGV4ZXMpW107XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBMYW5ndWFnZUxpc3Qge1xyXG4gIGxhbmd1YWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBWZXJ0ZXhlcyB7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxuICBkZXNjcmliZUNvbnRlbnRzOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxUdHNSZXN1bHQge1xyXG4gIGV2ZW50TmFtZTogc3RyaW5nO1xyXG4gIHRhc2tJRDogc3RyaW5nO1xyXG4gIHN0YXJ0OiBudW1iZXI7XHJcbiAgZW5kOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNTFNjZW5lRGV0ZWN0aW9uUmVzdWx0IHtcclxuICByZXN1bHRTdHJpbmc6IHN0cmluZztcclxuICBjb25maWRlbmNlOiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExpdmVTY2VuQW5hbHlzZXIge1xyXG4gIGFuYWx5c2VMaXN0OiBbQW5hbHlzZUxpc3RdO1xyXG4gIGZyYW1lUHJvcGVydHk6IEZyYW1lUHJvcGVydHk7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBbmFseXNlTGlzdCB7XHJcbiAgMDogYTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIGF7XHJcbiAgcmVzdWx0OiBzdHJpbmc7XHJcbiAgY29uZmlkZW5jZTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRnJhbWVQcm9wZXJ0eSB7XHJcbiAgZXh0OiBzdHJpbmc7XHJcbiAgZm9ybWF0VHlwZTogbnVtYmVyO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIGl0ZW1JZGVudGl0eTogbnVtYmVyO1xyXG4gIHF1YWRyYW50OiBudW1iZXI7XHJcbiAgdGltZXN0YW1wOiBudW1iZXI7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNTFNvdW5kRGVjdFJlc3VsdCB7XHJcbiAgc291bmRUeXBlOiBNTFNvdW5kRGVjdFNvdW5kVHlwZVJlc3VsdDtcclxuICBldmVudE5hbWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgZW51bSBNTFNvdW5kRGVjdFNvdW5kVHlwZVJlc3VsdHtcclxuICAgU09VTkRfREVDVF9FUlJPUl9OT19NRU0gPSAxMjIwMSxcclxuICAgU09VTkRfREVDVF9FUlJPUl9GQVRBTF9FUlJPUiA9IDEyMjAyLFxyXG4gICBTT1VORF9ERUNUX0VSUk9SX0FVRElPID0gMTIyMDMsXHJcbiAgIFNPVU5EX0RFQ1RfRVJST1JfSU5URVJOQUwgPSAxMjI5OCxcclxuICAgU09VTkRfRVZFTlRfVFlQRV9MQVVHSFRFUiA9IDAsXHJcbiAgIFNPVU5EX0VWRU5UX1RZUEVfQkFCWV9DUlkgPSAxLFxyXG4gICBTT1VORF9FVkVOVF9UWVBFX1NOT1JJTkcgPSAyLFxyXG4gICBTT1VORF9FVkVOVF9UWVBFX1NORUVaRSA9IDMsXHJcbiAgIFNPVU5EX0VWRU5UX1RZUEVfU0NSRUFNSU5HID0gNCxcclxuICAgU09VTkRfRVZFTlRfVFlQRV9NRU9XID0gNSxcclxuICAgU09VTkRfRVZFTlRfVFlQRV9CQVJLID0gNixcclxuICAgU09VTkRfRVZFTlRfVFlQRV9XQVRFUiA9IDcsXHJcbiAgIFNPVU5EX0VWRU5UX1RZUEVfQ0FSX0FMQVJNID0gOCxcclxuICAgU09VTkRfRVZFTlRfVFlQRV9ET09SX0JFTEwgPSA5LFxyXG4gICBTT1VORF9FVkVOVF9UWVBFX0tOT0NLID0gMTAsXHJcbiAgIFNPVU5EX0VWRU5UX1RZUEVfQUxBUk0gPSAxMSxcclxuICAgU09VTkRfRVZFTlRfVFlQRV9TVEVBTV9XSElTVExFID0gMTJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNTFZvY2FidWxhcnlWZXJzaW9uIHtcclxuICBkaWN0aW9uYXJ5RGltZW5zaW9uOiBzdHJpbmc7XHJcbiAgZGljdGlvbmFyeVNpemU6IHN0cmluZztcclxuICB2ZXJzaW9uTm86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNTFdvcmR0b1ZlY3RvclJlc3VsdCB7XHJcbiAgcmVzdWx0OiBSZXN1bHQ7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBSZXN1bHQge1xyXG4gIHdvcmRUZXh0OiBzdHJpbmc7XHJcbiAgdmVjdG9yOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNbFNlbnRlbmNldG9WZWN0b3JSZXN1bHQge1xyXG4gIHNlbnRlbmNlOiBzdHJpbmc7XHJcbiAgdmVjdG9yOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNTFdvcmRTaW1pbGFyaXR5UmVzdWx0IHtcclxuICB3b3JkU2ltaWxhcml0eTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxTZW50ZW5jZVNpbWlsYXJpdHlSZXN1bHQge1xyXG4gIHNlbnRlbmNlU2ltaWxhcml0eTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxTaW1pbGFyV29yZHNSZXN1bHQge1xyXG4gIHJlc3VsdD86IChzdHJpbmcpW10gfCBudWxsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxGb3JtUmVjb2dpdGlvblJlc3VsdCB7XHJcbiAgcmV0Q29kZTogbnVtYmVyO1xyXG4gIHRhYmxlQ29udGVudDogVGFibGVDb250ZW50O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVDb250ZW50IHtcclxuICB0YWJsZUNvdW50OiBudW1iZXI7XHJcbiAgdGFibGVzPzogKFRhYmxlc0VudGl0eSlbXSB8IG51bGw7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBUYWJsZXNFbnRpdHkge1xyXG4gIHRhYmxlSUQ6IG51bWJlcjtcclxuICBoZWFkZXJJbmZvOiBzdHJpbmc7XHJcbiAgZm9vdGVySW5mbzogc3RyaW5nO1xyXG4gIHRhYmxlQm9keT86IChUYWJsZUJvZHlFbnRpdHkpW10gfCBudWxsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVCb2R5RW50aXR5IHtcclxuICBzdGFydFJvdzogbnVtYmVyO1xyXG4gIGVuZFJvdzogbnVtYmVyO1xyXG4gIHN0YXJ0Q29sOiBudW1iZXI7XHJcbiAgZW5kQ29sOiBudW1iZXI7XHJcbiAgY2VsbENvb3JkaW5hdGU6IENlbGxDb29yZGluYXRlO1xyXG4gIHRleHRJbmZvOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDZWxsQ29vcmRpbmF0ZSB7XHJcbiAgdG9wTGVmdF94OiBudW1iZXI7XHJcbiAgdG9wTGVmdF95OiBudW1iZXI7XHJcbiAgdG9wUmlnaHRfeDogbnVtYmVyO1xyXG4gIHRvcFJpZ2h0X3k6IG51bWJlcjtcclxuICBib3R0b21MZWZ0X3g6IG51bWJlcjtcclxuICBib3R0b21MZWZ0X3k6IG51bWJlcjtcclxuICBib3R0b21SaWdodF94OiBudW1iZXI7XHJcbiAgYm90dG9tUmlnaHRfeTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1MUHJvZHVjdFZpc2lvblJlc3VsdCB7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGJvcmRlcjogQm9yZGVyO1xyXG4gIGxpc3Q/OiAoTGlzdEVudGl0eSlbXSB8IG51bGw7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBCb3JkZXIge1xyXG4gIGJvdHRvbTogbnVtYmVyO1xyXG4gIHRvcDogbnVtYmVyO1xyXG4gIGxlZnQ6IG51bWJlcjtcclxuICByaWdodDogbnVtYmVyO1xyXG4gIGV4YWN0Q2VudGVyWDogbnVtYmVyO1xyXG4gIGNlbnRlclk6IG51bWJlcjtcclxuICBjZW50ZXJYOiBudW1iZXI7XHJcbiAgZGVzY3JpYmVDb250ZW50czogbnVtYmVyO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBMaXN0RW50aXR5IHtcclxuICBjdXN0b21jb250ZW50OiBzdHJpbmc7XHJcbiAgaW1hZ2VsaXN0PzogKEltYWdlbGlzdEVudGl0eSlbXSB8IG51bGw7XHJcbiAgcG9zc2liaWxpdHk6IG51bWJlcjtcclxuICBwcm9kdWN0VVJMOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJbWFnZWxpc3RFbnRpdHkge1xyXG4gIGltYWdlSWQ6IHN0cmluZztcclxuICBwb3NzaWJpbGl0eTogbnVtYmVyO1xyXG4gIHByb2R1Y3RJZDogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIE1vZHVsZXMgXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU01MS2l0JyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtbWwnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICBwbHVnaW5SZWY6ICdITVNNTEtpdCcsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNNTEtpdCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTUxGYWNlU2V0dGluZyA9IE1MRmFjZVNldHRpbmc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1MTG9jYWxUZXh0U2V0dGluZyA9IE1MTG9jYWxUZXh0U2V0dGluZztcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTUxUZXh0Q29uZmlnID0gTUxUZXh0Q29uZmlnO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNTFJlbW90ZVRleHRTZXR0aW5nID0gTUxSZW1vdGVUZXh0U2V0dGluZztcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTUxJbWFnZUNsYXNzaWZpY2F0aW9uQ29uZmlnID0gTUxJbWFnZUNsYXNzaWZpY2F0aW9uQ29uZmlnO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNTEltYWdlU2VnbWVudGF0aW9uU2V0dGluZyA9IE1MSW1hZ2VTZWdtZW50YXRpb25TZXR0aW5nO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNTEltYWdlU2VnbWVudGF0aW9uU2NlbmUgPSBNTEltYWdlU2VnbWVudGF0aW9uU2NlbmU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1MUmVtb3RlTGFuZG1hcmtTZXR0aW5nID0gTUxSZW1vdGVMYW5kbWFya1NldHRpbmc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1MQmNyQ2FwdHVyZUNvbmZpZyA9IE1MQmNyQ2FwdHVyZUNvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTUxHY3JDYXB0dXJlVUlDb25maWcgPSBNTEdjckNhcHR1cmVVSUNvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTUxCY3JSZXN1bHRDb25maWc9IE1MQmNyUmVzdWx0Q29uZmlnO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBIYW5ka2V5UG9pbnRDb25maWc9IEhhbmRrZXlQb2ludENvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KCkgSW1nU3VwZXJSZXNvbHV0aW9uQ29uZmlnPUltZ1N1cGVyUmVzb2x1dGlvbkNvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTWxPYmplY3RBbmFseXNlckNvbmZpZz0gTWxPYmplY3RBbmFseXNlckNvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KCkgRG93bmxvYWRTdHJhdGVneUN1c3RvbT0gRG93bmxvYWRTdHJhdGVneUN1c3RvbTtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgRkVBVFVSRSA9IEZFQVRVUkU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIExBTkdVQUdFID0gTEFOR1VBR0U7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1MVHRzQ29uc3RhbnRzID0gTUxUdHNDb25zdGFudHM7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIENvbG9ycyA9IENvbG9ycztcclxuICBAQ29yZG92YVByb3BlcnR5KCkgUmVjdFN0eWxlID0gUmVjdFN0eWxlO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNTFNrZWxldG9uQ29uZmlnID0gTUxTa2VsZXRvbkNvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTUxGbGFzaE1vZGU9TUxGbGFzaE1vZGU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1MTGVuc1R5cGU9TUxMZW5zVHlwZTtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTUxBbmFseXplck5hbWU9TUxBbmFseXplck5hbWU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1MRnJhbWU9TUxGcmFtZTtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTUxGb3JtUmVjb2dpdGlvbkNvbmZpZz1NTEZvcm1SZWNvZ2l0aW9uQ29uZmlnO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNTEZhY2VDb25maWdzPU1MRmFjZUNvbmZpZ3M7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1MUHJvZHVjdENvbmZpZz1NTFByb2R1Y3RDb25maWc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1MTGl2ZW5lc3NDb25maWc9TUxMaXZlbmVzc0NvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTUxSdHRMYW5ndWFnZXM9TUxSdHRMYW5ndWFnZXM7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1MUnR0U2NlbmVzPU1MUnR0U2NlbmVzO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBnY3JDYXB0dXJlVHlwZT1nY3JDYXB0dXJlVHlwZTtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgc3luY1R5cGU9c3luY1R5cGU7XHJcbiAgXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBBZGp1c3RzIHRoZSBmb2NhbCBsZW5ndGggb2YgdGhlIGNhbWVyYSBiYXNlZCBvbiB0aGUgc2NhbGluZyBjb2VmZmljaWVudCAoZGlnaXRhbCB6b29tKS5cclxuICAgKiBAcGFyYW0gIHtkb1pvb21SZXF9IGRvWm9vbVJlcSBSZXBlcmVzZW50cyB0aGUgbmVjZXNzYXJ5IHBhcmFtZXRlcnMuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxyXG4gICAqL1xyXG4gIGRvWm9vbShkb1pvb21SZXE6IGRvWm9vbVJlcSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIE1vbml0b3JzIHBob3RvZ3JhcGhpbmcuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxyXG4gICAqL1xyXG4gIHBob3RvZ3JhcGgoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogQ2xvc2UgbGVucyBlbmdpbmUuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxyXG4gICAqL1xyXG4gIGRlc3Ryb3koKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogT2J0YWlucyB0aGUgc2l6ZSBvZiB0aGUgcHJldmlldyBpbWFnZSBvZiBhIGNhbWVyYS5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXHJcbiAgICovXHJcbiAgZ2V0RGlzcGxheURpbWVuc2lvbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBPYnRhaW5zIHRoZSBzZWxlY3RlZCBjYW1lcmEgdHlwZS5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXHJcbiAgICovXHJcbiAgZ2V0TGVuc1R5cGUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogSXQgY2hlY2tzIHRoZSBwZXJtaXNzaW9ucyByZXF1aXJlZCB0byB1c2UgdGhpcyBLaXQuXHJcbiAgICogQHBhcmFtICB7Q2hlY2tQZXJtaXNzaW9uUmVxfSBwZXJtaXNzaW9uTGlzdElucHV0IFJlcHJlc2VudHMgdGhlIGxpc3QgaW4gd2hpY2ggcGVybWlzc2lvbiBuYW1lcyBhcmUga2VwdC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXHJcbiAgICovXHJcbiAgaGFzUGVybWlzc2lvbnMocGVybWlzc2lvbkxpc3RSZXE6IENoZWNrUGVybWlzc2lvblJlcSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIEl0IGdldHMgdGhlIG5lY2Vzc2FyeSBwZXJtaXNzaW9ucy5cclxuICAgKiBAcGFyYW0gIHtSZXF1ZXN0UGVybWlzc2lvblJlcX0gcGVybWlzc2lvbkxpc3RJbnB1dCBSZXByZXNlbnRzIHRoZSBsaXN0IGluIHdoaWNoIHBlcm1pc3Npb24gbmFtZXMgYXJlIGtlcHQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgcmVxdWVzdFBlcm1pc3Npb25zKHBlcm1pc3Npb25MaXN0SW5wdXQ6IFJlcXVlc3RQZXJtaXNzaW9uUmVxKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogSXQgc2V0cyBBcGkgS2V5IG9yIGFjY2VzcyB0b2tlbiBmb3IgYXBwbGljYXRpb24uXHJcbiAgICogQHBhcmFtICB7Y29uZmlnUmVxfSBwYXJhbXMgUmVwcmVzZW50cyB5b3VyIEFQSV9LRVkuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgc2VydmljZUluaXRpYWxpemVyKHBhcmFtczogY29uZmlnUmVxKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBzZXJ2aWNlIHJlY29nbml6ZSB0aGUgaW1hZ2UgZnJvbSB0aGUgcGljdHVyZSBhbmQgcmV0dXJuIHdoYXQgdGhlIHBpY3R1cmUgY2FuIGJlIHdpdGggdGhlIHBlcmNlbnRhZ2VzLiBVc2UgTUwgTGlicmFyaWVzLlxyXG4gICAqIEBwYXJhbSAge293bkN1c3RvbU1vZGVsUmVxIHwgZG93bmxvYWRNb2RlbFJlcX0gY3VzdG9tTW9kZWxSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBjdXN0b20gbW9kZWwgYW5hbHlzZXIuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgY3VzdG9tTW9kZWxBbmFseXNlcihjdXN0b21Nb2RlbFJlcTogb3duQ3VzdG9tTW9kZWxSZXEgfGRvd25sb2FkTW9kZWxSZXEpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBPYnRhaW5zIEZyYW1lLlxyXG4gICAqIEBwYXJhbSAge21sRnJhbWVSZXF9IG1sRnJhbWVSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIG1sRnJhbWUobWxGcmFtZVJlcTogbWxGcmFtZVJlcSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIEFuIGFwcCBpbmZvcm1hdGlvbiBjbGFzcyB1c2VkIHRvIHN0b3JlIGJhc2ljIGluZm9ybWF0aW9uIGFib3V0IGFwcHMgd2l0aCB0aGUgSE1TIENvcmUgTUwgU0RLIGludGVncmF0ZWQgYW5kIGNvbXBsZXRlIHRoZSBpbml0aWFsaXphdGlvbiBvZiBNTCBLaXQuIFdoZW4gdXNpbmcgY2xvdWQgc2VydmljZXMgb2YgdGhlIE1MIEtpdCwgeW91IG5lZWQgdG8gc2V0IHRoZSBhcGlLZXkgb2YgeW91ciBhcHAuXHJcbiAgICogQHBhcmFtICB7YXBwU2V0dGluZ1JlcX0gYXBwU2V0dGluZ1JlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgYXBwU2V0dGluZyhhcHBTZXR0aW5nUmVxOiBhcHBTZXR0aW5nUmVxKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGNvbGxlY3Qgc3RhdGlzdGljcyBvbiB0aGUgY3VycmVudCBhcHAuXHJcbiAgICogQHBhcmFtIHthbnl9IGFueSBcclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBzZXRTdGF0aXN0aWMoYW55OmFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZXMgd2hldGhlciB0byBjb2xsZWN0IHN0YXRpc3RpY3Mgb24gdGhlIGN1cnJlbnQgYXBwLlxyXG4gICAqKiBAcGFyYW0ge2FueX0gYW55IFxyXG4gICAqICBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBnZXRTdGF0aXN0aWMoYW55OmFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgc2VydmljZSBlbmFibGUgbG9nZ2VyIHNlcnZpY2UuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgc2VydmljZSBkaXNhYmxlIGxvZ2dlciBzZXJ2aWNlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGRpc2FibGVMb2dnZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gXHJcbn1cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1MTGl2ZSB7XHJcblxyXG4gIHByaXZhdGUgYXJTY2VuZTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihzY2VuZTogc3RyaW5nLCBkaXZJZDogc3RyaW5nKSB7XHJcbiAgICBpZiAoc2NlbmUgPT09IFwiQUNUSU9OX0xJVkVfQU5BTFlTRVwiKSB0aGlzLmFyU2NlbmUgPSBuZXcgKEhNU01MS2l0LmdldFBsdWdpbigpKS5saXZlRW5naW5lQW5hbHlzZXIoZGl2SWQpO1xyXG4gICB9XHJcblxyXG4gIG9uKGNhbGw6ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmFyU2NlbmUub24oY2FsbCk7XHJcbiAgfVxyXG4gIHN0YXJ0QVJTY2VuZShjb25maWc/OiBNTGNvbmZpZywgYm91bmRzPzogTUxCb3VuZHMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXJTY2VuZS5zdGFydEFSU2NlbmUoY29uZmlnLCBib3VuZHMpO1xyXG4gIH1cclxuICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5hclNjZW5lLmRlc3Ryb3koKTtcclxuICB9XHJcbiAgc2V0Q29uZmlnKGNvbmZpZzogTUxjb25maWcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXJTY2VuZS5zZXRDb25maWcoY29uZmlnKTtcclxuICB9XHJcbiAgc2Nyb2xsKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5hclNjZW5lLnNjcm9sbCgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIGxpdmVFbmdpbmVBbmFseXNlciBleHRlbmRzIE1MTGl2ZSB7XHJcbmNvbnN0cnVjdG9yKGRpdklkOiBzdHJpbmcpIHsgc3VwZXIoXCJBQ1RJT05fTElWRV9BTkFMWVNFXCIsIGRpdklkKTsgfVxyXG59XHJcblxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU0ZhY2VCb2R5UHJvdmlkZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1tbCcsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gIHBsdWdpblJlZjogJ0hNU0ZhY2VCb2R5UHJvdmlkZXInLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TRmFjZUJvZHlQcm92aWRlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTEZhY2VTZXR0aW5nID0gTUxGYWNlU2V0dGluZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTExvY2FsVGV4dFNldHRpbmcgPSBNTExvY2FsVGV4dFNldHRpbmc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxUZXh0Q29uZmlnID0gTUxUZXh0Q29uZmlnO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MUmVtb3RlVGV4dFNldHRpbmcgPSBNTFJlbW90ZVRleHRTZXR0aW5nO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MSW1hZ2VDbGFzc2lmaWNhdGlvbkNvbmZpZyA9IE1MSW1hZ2VDbGFzc2lmaWNhdGlvbkNvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTEltYWdlU2VnbWVudGF0aW9uU2V0dGluZyA9IE1MSW1hZ2VTZWdtZW50YXRpb25TZXR0aW5nO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MSW1hZ2VTZWdtZW50YXRpb25TY2VuZSA9IE1MSW1hZ2VTZWdtZW50YXRpb25TY2VuZTtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTFJlbW90ZUxhbmRtYXJrU2V0dGluZyA9IE1MUmVtb3RlTGFuZG1hcmtTZXR0aW5nO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MQmNyQ2FwdHVyZUNvbmZpZyA9IE1MQmNyQ2FwdHVyZUNvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTEdjckNhcHR1cmVVSUNvbmZpZyA9IE1MR2NyQ2FwdHVyZVVJQ29uZmlnO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MQmNyUmVzdWx0Q29uZmlnPSBNTEJjclJlc3VsdENvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBIYW5ka2V5UG9pbnRDb25maWc9IEhhbmRrZXlQb2ludENvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBJbWdTdXBlclJlc29sdXRpb25Db25maWc9SW1nU3VwZXJSZXNvbHV0aW9uQ29uZmlnO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1sT2JqZWN0QW5hbHlzZXJDb25maWc9IE1sT2JqZWN0QW5hbHlzZXJDb25maWc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRG93bmxvYWRTdHJhdGVneUN1c3RvbT0gRG93bmxvYWRTdHJhdGVneUN1c3RvbTtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBGRUFUVVJFID0gRkVBVFVSRTtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBMQU5HVUFHRSA9IExBTkdVQUdFO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MVHRzQ29uc3RhbnRzID0gTUxUdHNDb25zdGFudHM7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgQ29sb3JzID0gQ29sb3JzO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFJlY3RTdHlsZSA9IFJlY3RTdHlsZTtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTFNrZWxldG9uQ29uZmlnID0gTUxTa2VsZXRvbkNvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTEZsYXNoTW9kZT1NTEZsYXNoTW9kZTtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTExlbnNUeXBlPU1MTGVuc1R5cGU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxBbmFseXplck5hbWU9TUxBbmFseXplck5hbWU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxGcmFtZT1NTEZyYW1lO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MRm9ybVJlY29naXRpb25Db25maWc9TUxGb3JtUmVjb2dpdGlvbkNvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTEZhY2VDb25maWdzPU1MRmFjZUNvbmZpZ3M7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxQcm9kdWN0Q29uZmlnPU1MUHJvZHVjdENvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTExpdmVuZXNzQ29uZmlnPU1MTGl2ZW5lc3NDb25maWc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxSdHRMYW5ndWFnZXM9TUxSdHRMYW5ndWFnZXM7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxSdHRTY2VuZXM9TUxSdHRTY2VuZXM7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgZ2NyQ2FwdHVyZVR5cGU9Z2NyQ2FwdHVyZVR5cGU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgc3luY1R5cGU9c3luY1R5cGU7XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhlIGZhY2UgZGV0ZWN0aW9uIHNlcnZpY2UgY2FuIGRldGVjdCB0aGUgZmFjZSBjb250b3VyLCByZWNvZ25pemUgZmFjaWFsIGZlYXR1cmVzLCBhbmQgZGV0ZXJtaW5lIGZhY2lhbCBleHByZXNzaW9ucyBmb3IgYSBwZXJzb24uXHJcbiAgICogQHBhcmFtICB7ZmFjZVJlcX0gZmFjZVJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIGZhY2UgZGV0ZWN0aW9uLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8U3RpbGxGYWNlQW5hbHlzZXI+XHJcbiAgICovXHJcbiAgc3RpbGxGYWNlQW5hbHlzZXIoZmFjZVJlcTogZmFjZVJlcSk6IFByb21pc2U8TUxGYWNlPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGdpdmVzIHRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgZmFjZSByZWNvZ25pdGlvbiBzZXJ2aWNlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIHN0aWxGYWNlQW5hbHlzZXJJbmZvKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHN0b3AgZmFjZSByZWNvZ25pdGlvbiBzZXJ2aWNlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIHN0b3BTdGlsbEZhY2VBbmFseXNlcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgVGhlIHNrZWxldG9uIGRldGVjdGlvbiBzZXJ2aWNlIGRldGVjdHMgYW5kIGxvY2F0ZXMga2V5IHBvaW50cyBvZiB0aGUgaHVtYW4gYm9keSwgc3VjaCBhcyB0aGUgdG9wIG9mIHRoZSBoZWFkLCBuZWNrLCBzaG91bGRlciwgZWxib3csIHdyaXN0LCBoaXAsIGtuZWUsIGFuZCBhbmtsZS5cclxuICAgKiBAcGFyYW0gIHtzdGlsbFNrZWxldG9uUmVxIHxzdGlsbFNrZWxldG9uU2ltaWxhcml0eVJlcX0gc3RpbGxTa2VsZXRvblJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIHN0aWxsIHNrZWxldG9uIGRldGVjdGlvbi5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPFN0aWxsU2tlbGV0b25BbmFseXNlcj5cclxuICAgKi9cclxuICBzdGlsbFNrZWxldG9uQW5hbHlzZXIoc3RpbGxTa2VsZXRvblJlcTogc3RpbGxTa2VsZXRvblJlcSB8c3RpbGxTa2VsZXRvblNpbWlsYXJpdHlSZXEpOiBQcm9taXNlPE1MU2tlbGV0b24+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhlIGxpdmVuZXNzIGRldGVjdGlvbiBzZXJ2aWNlIHN1cHBvcnRzIHNpbGVudCBsaXZlbmVzcyBkZXRlY3Rpb24gYW5kIGNhcHR1cmVzIGZhY2VzIGluIHJlYWwgdGltZS4gSXQgY2FuIGRldGVybWluZSB3aGV0aGVyIGEgZmFjZSBpcyBvZiBhIHJlYWwgdXNlciBvciBpcyBhIGZhY2UgYXR0YWNrIFxyXG4gICAqIChmb3IgZXhhbXBsZSwgZmFjZSByZWNhcHR1cmUgaW1hZ2UsIGZhY2UgcmVjYXB0dXJlIHZpZGVvLCBvciBmYWNlIG1hc2spIHdpdGhvdXQgcmVxdWlyaW5nIHRoZSB1c2VyIHRvIGZvbGxvdyBzcGVjaWZpYyBpbnN0cnVjdGlvbnMuXHJcbiAgICogQHBhcmFtICB7bGl2ZW5lc3NEZXRlY3Rpb25SZXF9IGxpdmVuZXNzRGV0ZWN0aW9uUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPExpdmVMaXZlbmVzc0FuYWx5c2VyPlxyXG4gICAqL1xyXG4gIGxpdmVMaXZlbmVzc0FuYWx5c2VyKGxpdmVuZXNzRGV0ZWN0aW9uUmVxOmxpdmVuZXNzRGV0ZWN0aW9uUmVxKTogUHJvbWlzZTxNTExpdmVuZXNzQ2FwdHVyZVJlc3VsdD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIHNlcnZpY2UgY2FuIGRldGVjdHMgMjEgaGFuZCBrZXlwb2ludHMgKGluY2x1ZGluZyBmaW5nZXJ0aXBzLCBrbnVja2xlcywgYW5kIHdyaXN0cykgYW5kIHJldHVybiBwb3NpdGlvbnMgb2YgdGhlIGtleXBvaW50cy5cclxuICAgKiBAcGFyYW0gIHtzdGlsbEhhbmRLZXlwb2ludFJlcSB9IHN0aWxsSGFuZEtleXBvaW50UmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3Igc3RpbGwgaGFuZGtleSBhbmFseXNlci5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPFN0aWxsSGFuZEtleUFuYWx5c2VyPlxyXG4gICAqL1xyXG4gIHN0aWxsSGFuZGtleUFuYWx5c2VyKHN0aWxsSGFuZEtleXBvaW50UmVxOiBzdGlsbEhhbmRLZXlwb2ludFJlcSk6IFByb21pc2U8TUxIYW5kS2V5cG9pbnRzPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHN0b3AgaGFuZCBhbmFseXplciBzZXJ2aWNlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIHN0b3BTdGlsbEhhbmRLZXlBbmFseXNlcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIGZhY2UgYW5hbHl6ZXIgc2V0dGluZ3MuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgZ2V0RmFjZUFuYWx5c2VyU2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCAgcmV0dXJucyBoYW5kIGFuYWx5emVyIHNldHRpbmdzLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGdldEhhbmRLZXlBbmFseXNlclNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2Qgc3RvcCBza2VsZXRvbiBhbmFseXplciBzZXJ2aWNlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIHN0b3BTdGlsbFNrZWxldG9uQW5hbHlzZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gXHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNJbWFnZVNlcnZpY2VQcm92aWRlcicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLW1sJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnSE1TSW1hZ2VTZXJ2aWNlUHJvdmlkZXInLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TSW1hZ2VTZXJ2aWNlUHJvdmlkZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxGYWNlU2V0dGluZyA9IE1MRmFjZVNldHRpbmc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgZ2NyQ2FwdHVyZVR5cGU9Z2NyQ2FwdHVyZVR5cGU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgc3luY1R5cGU9c3luY1R5cGU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxMb2NhbFRleHRTZXR0aW5nID0gTUxMb2NhbFRleHRTZXR0aW5nO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MVGV4dENvbmZpZyA9IE1MVGV4dENvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTFJlbW90ZVRleHRTZXR0aW5nID0gTUxSZW1vdGVUZXh0U2V0dGluZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTEltYWdlQ2xhc3NpZmljYXRpb25Db25maWcgPSBNTEltYWdlQ2xhc3NpZmljYXRpb25Db25maWc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxJbWFnZVNlZ21lbnRhdGlvblNldHRpbmcgPSBNTEltYWdlU2VnbWVudGF0aW9uU2V0dGluZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTEltYWdlU2VnbWVudGF0aW9uU2NlbmUgPSBNTEltYWdlU2VnbWVudGF0aW9uU2NlbmU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxSZW1vdGVMYW5kbWFya1NldHRpbmcgPSBNTFJlbW90ZUxhbmRtYXJrU2V0dGluZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTEJjckNhcHR1cmVDb25maWcgPSBNTEJjckNhcHR1cmVDb25maWc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxHY3JDYXB0dXJlVUlDb25maWcgPSBNTEdjckNhcHR1cmVVSUNvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTEJjclJlc3VsdENvbmZpZz0gTUxCY3JSZXN1bHRDb25maWc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgSGFuZGtleVBvaW50Q29uZmlnPSBIYW5ka2V5UG9pbnRDb25maWc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgSW1nU3VwZXJSZXNvbHV0aW9uQ29uZmlnPUltZ1N1cGVyUmVzb2x1dGlvbkNvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNbE9iamVjdEFuYWx5c2VyQ29uZmlnPSBNbE9iamVjdEFuYWx5c2VyQ29uZmlnO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIERvd25sb2FkU3RyYXRlZ3lDdXN0b209IERvd25sb2FkU3RyYXRlZ3lDdXN0b207XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRkVBVFVSRSA9IEZFQVRVUkU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTEFOR1VBR0UgPSBMQU5HVUFHRTtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTFR0c0NvbnN0YW50cyA9IE1MVHRzQ29uc3RhbnRzO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIENvbG9ycyA9IENvbG9ycztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBSZWN0U3R5bGUgPSBSZWN0U3R5bGU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxTa2VsZXRvbkNvbmZpZyA9IE1MU2tlbGV0b25Db25maWc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxGbGFzaE1vZGU9TUxGbGFzaE1vZGU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxMZW5zVHlwZT1NTExlbnNUeXBlO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MQW5hbHl6ZXJOYW1lPU1MQW5hbHl6ZXJOYW1lO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MRnJhbWU9TUxGcmFtZTtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTEZvcm1SZWNvZ2l0aW9uQ29uZmlnPU1MRm9ybVJlY29naXRpb25Db25maWc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxGYWNlQ29uZmlncz1NTEZhY2VDb25maWdzO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MUHJvZHVjdENvbmZpZz1NTFByb2R1Y3RDb25maWc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxMaXZlbmVzc0NvbmZpZz1NTExpdmVuZXNzQ29uZmlnO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MUnR0TGFuZ3VhZ2VzPU1MUnR0TGFuZ3VhZ2VzO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MUnR0U2NlbmVzPU1MUnR0U2NlbmVzO1xyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHJlcHJlc2VudHMgdGhlIGltYWdlIGNsYXNzaWZpY2F0aW9uIFNESy5cclxuICAgKiBAcGFyYW0gIHtsb2NhbEltYWdlQ2xhc3NpZmljYXRpb25SZXF8cmVtb3RlSW1hZ2VDbGFzc2lmaWNhdGlvblJlcX0gaW1hZ2VDbGFzc2lmaWNhdGlvbklucHV0IFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgY2xhc3NpZnkgb2JqZWN0cy5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPEltYWdlQ2xhc3NpZmljYXRpb25BbmFseXNlcj5cclxuICAgKi9cclxuICBpbWFnZUNsYXNzaWZpY2F0aW9uQW5hbHlzZXIoaW1hZ2VDbGFzc2lmaWNhdGlvbklucHV0OiBsb2NhbEltYWdlQ2xhc3NpZmljYXRpb25SZXEgfCByZW1vdGVJbWFnZUNsYXNzaWZpY2F0aW9uUmVxKTogUHJvbWlzZTxNTEltYWdlQ2xhc3NpZmljYXRpb24+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2Qgc3RvcCBpbWFnZSBjbGFzc2lmaWNhdGlvbiBhbmFseXNlci5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgKi9cclxuICBzdG9wSW1hZ2VDbGFzc2lmaWNhdGlvbkFuYWx5c2VyKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoZSBpbWFnZSBzZWdtZW50YXRpb24gc2VydmljZSBzZWdtZW50cyBzYW1lIGVsZW1lbnRzIChzdWNoIGFzIGh1bWFuIGJvZHksIHBsYW50LCBhbmQgc2t5KSBmcm9tIGFuIGltYWdlLiBUaGUgZWxlbWVudHMgc3VwcG9ydGVkIGluY2x1ZGUgaHVtYW4gYm9keSwgc2t5LCBwbGFudCwgZm9vZCBhbmQgb3RoZXJzLlxyXG4gICAqIEBwYXJhbSAge2ltZ1NlZ21lbnRhdGlvblJlcX0gaW1nU2VnbWVudGF0aW9uUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgaW1hZ2Ugc2VnbWVudGF0aW9uLiBcclxuICAgKiBAcmV0dXJucyBQcm9taXNlPFNlZ21lbnRhdGlvbkFuYWx5c2VyPlxyXG4gICAqL1xyXG4gIGltZ1NlZ21lbnRhdGlvbihpbWdTZWdtZW50YXRpb25SZXE6IGltZ1NlZ21lbnRhdGlvblJlcSk6IFByb21pc2U8TUxJbWFnZVNlZ21lbnRhdGlvbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBzdG9wIGltYWdlIHNlZ21lbnRhdGlvbiBzZXJ2aWNlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIHN0b3BJbWdTZWdtZW50YXRpb24oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhlIGxhbmRtYXJrIHJlY29nbml0aW9uIHNlcnZpY2UgZW5hYmxlcyB5b3UgdG8gb2J0YWluIHRoZSBsYW5kbWFyayBuYW1lLCBsYW5kbWFyayBsb25naXR1ZGUgYW5kIGxhdGl0dWRlLCBhbmQgY29uZmlkZW5jZSBvZiB0aGUgaW5wdXQgaW1hZ2UuXHJcbiAgICogQHBhcmFtICB7aW1nTGFuZE1hcmtSZXF9IGltZ0xhbmRNYXJrUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgaW1hZ2UgbGFuZG1hcmsgYW5hbHlzZXIuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxJbWFnZUxhbmRtYXJrQW5hbHlzZXI+XHJcbiAgICovXHJcbiAgaW1nTGFuZE1hcmtBbmFseXNlcihpbWdMYW5kTWFya1JlcTogaW1nTGFuZE1hcmtSZXEpOiBQcm9taXNlPE1MUmVtb3RlTGFuZG1hcms+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2Qgc3RvcCBpbWFnZSBsYW5kbWFyayBhbmFseXNlciBzZXJ2aWNlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGltZ0xhbmRNYXJrQW5hbHlzZXJTdG9wKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoZSBvYmplY3QgZGV0ZWN0aW9uIHNlcnZpY2UgY2FuIGRldGVjdCBhbmQgdHJhY2sgbXVsdGlwbGUgb2JqZWN0cyBpbiBhbiBpbWFnZS5cclxuICAgKiBAcGFyYW0gIHtvYmplY3RSZXF9IG9iamVjdFJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIG9iamVjdCBkZXRlY3Rpb24uXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxJbWFnZU9iamVjdEFuYWx5c2VyPlxyXG4gICAqL1xyXG4gIG9iamVjdEFuYWx5c2VyKG9iamVjdFJlcTogb2JqZWN0UmVxKTogUHJvbWlzZTxNTE9iamVjdD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGUgc2NlbmUgZGV0ZWN0aW9uIHNlcnZpY2UgY2FuIGNsYXNzaWZ5IHRoZSBzY2VuYXJpbyBjb250ZW50IG9mIGltYWdlcyBhbmQgYWRkIGxhYmVscywgc3VjaCBhcyBvdXRkb29yIHNjZW5lcnksIGluZG9vciBwbGFjZXMsIGFuZCBidWlsZGluZ3MsIHRvIGhlbHAgdW5kZXJzdGFuZCB0aGUgaW1hZ2UgY29udGVudC5cclxuICAgKiAgIEBwYXJhbSAge3N0aWxsU2NlbmVSZXF9IHN0aWxsU2NlbmVSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBTY2VuZSBhbmFseXNlci5cclxuICAgKiAgQHJldHVybnMgUHJvbWlzZSA8YW55PlxyXG4gICAqL1xyXG4gIHN0aWxsU2NlbmVBbmFseXNlcihzdGlsbFNjZW5lUmVxOiBzdGlsbFNjZW5lUmVxKTogUHJvbWlzZTxNTFNjZW5lRGV0ZWN0aW9uUmVzdWx0PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICBUaGlzIHNlcnZpY2UgY2FuIGF1dG9tYXRpY2FsbHkgaWRlbnRpZnkgdGhlIGxvY2F0aW9uIG9mIGEgZG9jdW1lbnQgaW4gYW4gaW1hZ2UgYW5kIGFkanVzdCB0aGUgc2hvb3RpbmcgYW5nbGUgdG8gdGhlIGFuZ2xlIGZhY2luZyB0aGUgZG9jdW1lbnQsIGV2ZW4gaWYgdGhlIGRvY3VtZW50IGlzIHRpbHRlZC5cclxuICAgKiBAcGFyYW0gIHtkb2N1bWVudFNrZXdDb3JyZWN0aW9uUmVxfSBkb2N1bWVudFNrZXdDb3JyZWN0aW9uUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgZG9jdW1lbnQgc2tldyBjb3JyZWN0aW9uLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8RG9jdW1lbnRTa2V3QW5hbHlzZXI+XHJcbiAgICovXHJcbiAgZG9jdW1lbnRTa2V3Q29ycmVjdGlvbkFuYWx5c2VyKGRvY3VtZW50U2tld0NvcnJlY3Rpb25SZXE6IGRvY3VtZW50U2tld0NvcnJlY3Rpb25SZXEpOiBQcm9taXNlPE1MRG9jdW1lbnRTa2V3RGV0ZWN0UmVzdWx0PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgc2VydmljZSBjYW4gem9vbSBpbiBhbiBpbWFnZSB0aGF0IGNvbnRhaW5zIHRleHQgYW5kIHNpZ25pZmljYW50bHkgaW1wcm92ZSB0aGUgZGVmaW5pdGlvbiBvZiB0ZXh0IGluIHRoZSBpbWFnZS5cclxuICAgKiBAcGFyYW0gIHt0ZXh0SW1hZ2VTdXBlclJlc29sdXRpb25SZXF9IHRleHRJbWFnZVN1cGVyUmVzb2x1dGlvblJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIFRleHQgSW1hZ2UgU3VwZXIgUmVzb2x1dGlvbi5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICB0ZXh0SW1hZ2VTdXBlclJlc29sdXRpb24odGV4dEltYWdlU3VwZXJSZXNvbHV0aW9uUmVxOiB0ZXh0SW1hZ2VTdXBlclJlc29sdXRpb25SZXEpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIHNlcnZpY2UgcHJvdmlkZXMgdGhlIDF4IHN1cGVyLXJlc29sdXRpb24gY2FwYWJpbGl0aWVzLiAxeCBzdXBlci1yZXNvbHV0aW9uIHJlbW92ZXMgdGhlIGNvbXByZXNzaW9uIG5vaXNlLlxyXG4gICAqIEBwYXJhbSAge2ltYWdlU3VwZXJSZXNvbHV0aW9uUmVxfSBpbWFnZVN1cGVyUmVzb2x1dGlvblJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIEltYWdlIFN1cGVyIFJlc29sdXRpb24uXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgaW1hZ2VTdXBlclJlc29sdXRpb24oaW1hZ2VTdXBlclJlc29sdXRpb25SZXE6IGltYWdlU3VwZXJSZXNvbHV0aW9uUmVxKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogUmVwcmVzZW50cyB0aGUgaW1hZ2UtYmFzZWQgcHJvZHVjdCBkZXRlY3Rpb24gQVBJIG9mIEhVQVdFSSBNTCBLaXQuXHJcbiAgICogQHBhcmFtICB7cHJvZHVjdFJlcX0gcHJvZHVjdFJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgcHJvZHVjdFZpc2lvbkFuYWx5c2VyKHByb2R1Y3RSZXE6IHByb2R1Y3RSZXEpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBzdG9wIG9iamVjdCBhbmFseXNlciBzZXJ2aWNlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIG9iamVjdEFuYWx5c2VyU3RvcCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBzdG9wIHByb2R1Y3QgYW5hbHlzZXIgc2VydmljZS5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBwcm9kdWN0QW5hbHlzZXJTdG9wKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHN0b3AgZG9jdW1lbnQgc2tldyBhbmFseXNlciBzZXJ2aWNlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGRvY1NrZXdBbmFseXNlclN0b3AoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2Qgc3RvcCBUSVNSIGFuYWx5c2VyIHNlcnZpY2UuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgVElTUkFuYWx5c2VyU3RvcCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBzdG9wIElTUiBhbmFseXNlciBzZXJ2aWNlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIElTUkFuYWx5c2VyU3RvcCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBzdG9wIHNjZW5lIGFuYWx5c2VyIHNlcnZpY2UuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgc3RpbGxTY2VuZUFuYWx5c2VyU3RvcCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIGltYWdlIGNsYXNzaWZpY2F0aW9uIHNldHRpbmdzLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGdldEltYWdlQ2xhc3NpZmljYXRpb25BbmFseXNlclNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogIFRoaXMgbWV0aG9kIHJldHVybnMgSVNSIHNldHRpbmdzLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGdldElTUlNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogIFRoaXMgbWV0aG9kIHJldHVybnMgc2VnbWVudGF0aW9uIHNldHRpbmdzLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGdldFNlZ21lbnRhdGlvblNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogIFRoaXMgbWV0aG9kIHJldHVybnMgbGFuZG1hcmsgc2V0dGluZ3MuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgZ2V0TGFuZG1hcmtTZXR0aW5nKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqICBUaGlzIG1ldGhvZCByZXR1cm5zIG9iamVjdCBzZXR0aW5ncy5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBnZXRPYmplY3RTZXR0aW5nKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuXHJcbiBcclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU0xhbmd1YWdlU2VydmljZVByb3ZpZGVyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtbWwnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICBwbHVnaW5SZWY6ICdITVNMYW5ndWFnZVNlcnZpY2VQcm92aWRlcicsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNMYW5ndWFnZVNlcnZpY2VQcm92aWRlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTEZhY2VTZXR0aW5nID0gTUxGYWNlU2V0dGluZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBnY3JDYXB0dXJlVHlwZT1nY3JDYXB0dXJlVHlwZTtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBzeW5jVHlwZT1zeW5jVHlwZTtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTExvY2FsVGV4dFNldHRpbmcgPSBNTExvY2FsVGV4dFNldHRpbmc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxUZXh0Q29uZmlnID0gTUxUZXh0Q29uZmlnO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MUmVtb3RlVGV4dFNldHRpbmcgPSBNTFJlbW90ZVRleHRTZXR0aW5nO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MSW1hZ2VDbGFzc2lmaWNhdGlvbkNvbmZpZyA9IE1MSW1hZ2VDbGFzc2lmaWNhdGlvbkNvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTEltYWdlU2VnbWVudGF0aW9uU2V0dGluZyA9IE1MSW1hZ2VTZWdtZW50YXRpb25TZXR0aW5nO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MSW1hZ2VTZWdtZW50YXRpb25TY2VuZSA9IE1MSW1hZ2VTZWdtZW50YXRpb25TY2VuZTtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTFJlbW90ZUxhbmRtYXJrU2V0dGluZyA9IE1MUmVtb3RlTGFuZG1hcmtTZXR0aW5nO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MQmNyQ2FwdHVyZUNvbmZpZyA9IE1MQmNyQ2FwdHVyZUNvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTEdjckNhcHR1cmVVSUNvbmZpZyA9IE1MR2NyQ2FwdHVyZVVJQ29uZmlnO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MQmNyUmVzdWx0Q29uZmlnPSBNTEJjclJlc3VsdENvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBIYW5ka2V5UG9pbnRDb25maWc9IEhhbmRrZXlQb2ludENvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBJbWdTdXBlclJlc29sdXRpb25Db25maWc9SW1nU3VwZXJSZXNvbHV0aW9uQ29uZmlnO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1sT2JqZWN0QW5hbHlzZXJDb25maWc9IE1sT2JqZWN0QW5hbHlzZXJDb25maWc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRG93bmxvYWRTdHJhdGVneUN1c3RvbT0gRG93bmxvYWRTdHJhdGVneUN1c3RvbTtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBGRUFUVVJFID0gRkVBVFVSRTtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBMQU5HVUFHRSA9IExBTkdVQUdFO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MVHRzQ29uc3RhbnRzID0gTUxUdHNDb25zdGFudHM7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgQ29sb3JzID0gQ29sb3JzO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFJlY3RTdHlsZSA9IFJlY3RTdHlsZTtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTFNrZWxldG9uQ29uZmlnID0gTUxTa2VsZXRvbkNvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTEZsYXNoTW9kZT1NTEZsYXNoTW9kZTtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTExlbnNUeXBlPU1MTGVuc1R5cGU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxBbmFseXplck5hbWU9TUxBbmFseXplck5hbWU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxGcmFtZT1NTEZyYW1lO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MRm9ybVJlY29naXRpb25Db25maWc9TUxGb3JtUmVjb2dpdGlvbkNvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTEZhY2VDb25maWdzPU1MRmFjZUNvbmZpZ3M7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxQcm9kdWN0Q29uZmlnPU1MUHJvZHVjdENvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTExpdmVuZXNzQ29uZmlnPU1MTGl2ZW5lc3NDb25maWc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxSdHRMYW5ndWFnZXM9TUxSdHRMYW5ndWFnZXM7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxSdHRTY2VuZXM9TUxSdHRTY2VuZXM7XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGUgdGV4dCBlbWJlZGRpbmcgc2VydmljZSBhbGxvd3MgeW91IHRvIGVudGVyIENoaW5lc2UgYW5kIEVuZ2xpc2ggd29yZHMgb3Igc2VudGVuY2VzIHRvIHF1ZXJ5IG1hdGNoaW5nIHZlY3RvciB2YWx1ZXMsIGFuZCBwZXJmb3JtIGZ1cnRoZXIgcmVzZWFyY2ggYmFzZWQgb24gdGhlIHF1ZXJ5IHJlc3VsdC5cclxuICAgKiBAcGFyYW0gIHt0ZXh0RW1iZWRkaW5nRGljSW5mb1JlcX0gdGV4dEVtYmVkZGluZ0RpY0luZm9SZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBUZXh0IEVtYmVkZGluZy5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICB0ZXh0RW1iZWRkaW5nRGljdGlvbmFyeUluZm8odGV4dEVtYmVkZGluZ0RpY0luZm9SZXE6IHRleHRFbWJlZGRpbmdEaWNJbmZvUmVxKTogUHJvbWlzZTxNTFZvY2FidWxhcnlWZXJzaW9uPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIEFzeW5jaHJvbm91c2x5IHF1ZXJpZXMgd29yZCB2ZWN0b3JzIGluIGJhdGNoZXMuIChUaGUgbnVtYmVyIG9mIHdvcmRzIHJhbmdlcyBmcm9tIDEgdG8gNTAwLilcclxuICAgKiBAcGFyYW0gIHt0ZXh0RW1iZWRkaW5nV29yZEJhdGNoUmVxfSB0ZXh0RW1iZWRkaW5nV29yZEJhdGNoUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgVGV4dCBFbWJlZGRpbmcuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgdGV4dEVtYmVkZGluZ1dvcmRCYXRjaFZlY3Rvcih0ZXh0RW1iZWRkaW5nV29yZEJhdGNoUmVxOiB0ZXh0RW1iZWRkaW5nV29yZEJhdGNoUmVxKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgKiBUaGUgdGV4dCBlbWJlZGRpbmcgc2VydmljZSBhbGxvd3MgeW91IHRvIGVudGVyIENoaW5lc2UgYW5kIEVuZ2xpc2ggd29yZHMgb3Igc2VudGVuY2VzIHRvIHF1ZXJ5IG1hdGNoaW5nIHZlY3RvciB2YWx1ZXMsIGFuZCBwZXJmb3JtIGZ1cnRoZXIgcmVzZWFyY2ggYmFzZWQgb24gdGhlIHF1ZXJ5IHJlc3VsdC5cclxuICAgKiBAcGFyYW0gIHt0ZXh0RW1iZWRkaW5nV29yZHRvVmVjdG9yUmVxfSB0ZXh0RW1iZWRkaW5nV29yZHRvVmVjdG9yUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgVGV4dCBFbWJlZGRpbmcuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgdGV4dEVtYmVkZGluZ1dvcmR0b1ZlY3Rvcih0ZXh0RW1iZWRkaW5nV29yZHRvVmVjdG9yUmVxOiB0ZXh0RW1iZWRkaW5nV29yZHRvVmVjdG9yUmVxKTogUHJvbWlzZTxNTFdvcmR0b1ZlY3RvclJlc3VsdD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAqIFRoZSB0ZXh0IGVtYmVkZGluZyBzZXJ2aWNlIGFsbG93cyB5b3UgdG8gZW50ZXIgQ2hpbmVzZSBhbmQgRW5nbGlzaCB3b3JkcyBvciBzZW50ZW5jZXMgdG8gcXVlcnkgbWF0Y2hpbmcgdmVjdG9yIHZhbHVlcywgYW5kIHBlcmZvcm0gZnVydGhlciByZXNlYXJjaCBiYXNlZCBvbiB0aGUgcXVlcnkgcmVzdWx0LlxyXG4gICAqIEBwYXJhbSAge3RleHRFbWJlZGRpbmdTZW50ZW5jZXRvVmVjdG9yUmVxfSB0ZXh0RW1iZWRkaW5nU2VudGVuY2V0b1ZlY3RvclJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIFRleHQgRW1iZWRkaW5nLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIHRleHRFbWJlZGRpbmdTZW50ZW5jZXRvVmVjdG9yKHRleHRFbWJlZGRpbmdTZW50ZW5jZXRvVmVjdG9yUmVxOiB0ZXh0RW1iZWRkaW5nU2VudGVuY2V0b1ZlY3RvclJlcSk6IFByb21pc2U8TWxTZW50ZW5jZXRvVmVjdG9yUmVzdWx0PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICogVGhlIHRleHQgZW1iZWRkaW5nIHNlcnZpY2UgYWxsb3dzIHlvdSB0byBlbnRlciBDaGluZXNlIGFuZCBFbmdsaXNoIHdvcmRzIG9yIHNlbnRlbmNlcyB0byBxdWVyeSBtYXRjaGluZyB2ZWN0b3IgdmFsdWVzLCBhbmQgcGVyZm9ybSBmdXJ0aGVyIHJlc2VhcmNoIGJhc2VkIG9uIHRoZSBxdWVyeSByZXN1bHQuXHJcbiAgICogQHBhcmFtICB7dGV4dEVtYmVkZGluZ1dvcmRTaW1pbGFyaXR5UmVxfSB0ZXh0RW1iZWRkaW5nV29yZFNpbWlsYXJpdHlSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBUZXh0IEVtYmVkZGluZy5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICB0ZXh0RW1iZWRkaW5nV29yZFNpbWlsYXJ0eSh0ZXh0RW1iZWRkaW5nV29yZFNpbWlsYXJpdHlSZXE6IHRleHRFbWJlZGRpbmdXb3JkU2ltaWxhcml0eVJlcSk6IFByb21pc2U8TUxXb3JkU2ltaWxhcml0eVJlc3VsdD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAqIFRoZSB0ZXh0IGVtYmVkZGluZyBzZXJ2aWNlIGFsbG93cyB5b3UgdG8gZW50ZXIgQ2hpbmVzZSBhbmQgRW5nbGlzaCB3b3JkcyBvciBzZW50ZW5jZXMgdG8gcXVlcnkgbWF0Y2hpbmcgdmVjdG9yIHZhbHVlcywgYW5kIHBlcmZvcm0gZnVydGhlciByZXNlYXJjaCBiYXNlZCBvbiB0aGUgcXVlcnkgcmVzdWx0LlxyXG4gICAqIEBwYXJhbSAge3RleHRFbWJlZGRpbmdTZW50ZW5jZVNpbWlsYXJpdHlSZXF9IHRleHRFbWJlZGRpbmdTZW50ZW5jZVNpbWlsYXJpdHlSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBUZXh0IEVtYmVkZGluZy5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICB0ZXh0RW1iZWRkaW5nU2VudGVuY2VTaW1pbGFydHkodGV4dEVtYmVkZGluZ1NlbnRlbmNlU2ltaWxhcml0eVJlcTogdGV4dEVtYmVkZGluZ1NlbnRlbmNlU2ltaWxhcml0eVJlcSk6IFByb21pc2U8TUxTZW50ZW5jZVNpbWlsYXJpdHlSZXN1bHQ+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgKiBUaGUgdGV4dCBlbWJlZGRpbmcgc2VydmljZSBhbGxvd3MgeW91IHRvIGVudGVyIENoaW5lc2UgYW5kIEVuZ2xpc2ggd29yZHMgb3Igc2VudGVuY2VzIHRvIHF1ZXJ5IG1hdGNoaW5nIHZlY3RvciB2YWx1ZXMsIGFuZCBwZXJmb3JtIGZ1cnRoZXIgcmVzZWFyY2ggYmFzZWQgb24gdGhlIHF1ZXJ5IHJlc3VsdC5cclxuICAgKiBAcGFyYW0gIHt0ZXh0RW1iZWRkaW5nU2ltaWxhcldvcmRzUmVxfSB0ZXh0RW1iZWRkaW5nU2ltaWxhcldvcmRzUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgVGV4dCBFbWJlZGRpbmcuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgdGV4dEVtYmVkZGluZ1NpbWlsYXJXb3Jkcyh0ZXh0RW1iZWRkaW5nU2ltaWxhcldvcmRzUmVxOiB0ZXh0RW1iZWRkaW5nU2ltaWxhcldvcmRzUmVxKTogUHJvbWlzZTxNTFNpbWlsYXJXb3Jkc1Jlc3VsdD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0ZXh0ZW1iZWRkaW5nIHNldHRpbmdzLlxyXG4gKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICovXHJcbmdldFRleHRFbWJlZGRpbmdTZXR0aW5nKCk6IFByb21pc2U8YW55PiB7XHJcbiAgcmV0dXJuO1xyXG59O1xyXG4gXHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNUZXh0U2VydmljZVByb3ZpZGVyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtbWwnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICBwbHVnaW5SZWY6ICdITVNUZXh0U2VydmljZVByb3ZpZGVyJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU1RleHRTZXJ2aWNlUHJvdmlkZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxGYWNlU2V0dGluZyA9IE1MRmFjZVNldHRpbmc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgZ2NyQ2FwdHVyZVR5cGU9Z2NyQ2FwdHVyZVR5cGU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgc3luY1R5cGU9c3luY1R5cGU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxMb2NhbFRleHRTZXR0aW5nID0gTUxMb2NhbFRleHRTZXR0aW5nO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MVGV4dENvbmZpZyA9IE1MVGV4dENvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTFJlbW90ZVRleHRTZXR0aW5nID0gTUxSZW1vdGVUZXh0U2V0dGluZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTEltYWdlQ2xhc3NpZmljYXRpb25Db25maWcgPSBNTEltYWdlQ2xhc3NpZmljYXRpb25Db25maWc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxJbWFnZVNlZ21lbnRhdGlvblNldHRpbmcgPSBNTEltYWdlU2VnbWVudGF0aW9uU2V0dGluZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTEltYWdlU2VnbWVudGF0aW9uU2NlbmUgPSBNTEltYWdlU2VnbWVudGF0aW9uU2NlbmU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxSZW1vdGVMYW5kbWFya1NldHRpbmcgPSBNTFJlbW90ZUxhbmRtYXJrU2V0dGluZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTEJjckNhcHR1cmVDb25maWcgPSBNTEJjckNhcHR1cmVDb25maWc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxHY3JDYXB0dXJlVUlDb25maWcgPSBNTEdjckNhcHR1cmVVSUNvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTEJjclJlc3VsdENvbmZpZz0gTUxCY3JSZXN1bHRDb25maWc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgSGFuZGtleVBvaW50Q29uZmlnPSBIYW5ka2V5UG9pbnRDb25maWc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgSW1nU3VwZXJSZXNvbHV0aW9uQ29uZmlnPUltZ1N1cGVyUmVzb2x1dGlvbkNvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNbE9iamVjdEFuYWx5c2VyQ29uZmlnPSBNbE9iamVjdEFuYWx5c2VyQ29uZmlnO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIERvd25sb2FkU3RyYXRlZ3lDdXN0b209IERvd25sb2FkU3RyYXRlZ3lDdXN0b207XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRkVBVFVSRSA9IEZFQVRVUkU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTEFOR1VBR0UgPSBMQU5HVUFHRTtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTFR0c0NvbnN0YW50cyA9IE1MVHRzQ29uc3RhbnRzO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIENvbG9ycyA9IENvbG9ycztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBSZWN0U3R5bGUgPSBSZWN0U3R5bGU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxTa2VsZXRvbkNvbmZpZyA9IE1MU2tlbGV0b25Db25maWc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxGbGFzaE1vZGU9TUxGbGFzaE1vZGU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxMZW5zVHlwZT1NTExlbnNUeXBlO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MQW5hbHl6ZXJOYW1lPU1MQW5hbHl6ZXJOYW1lO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MRnJhbWU9TUxGcmFtZTtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTEZvcm1SZWNvZ2l0aW9uQ29uZmlnPU1MRm9ybVJlY29naXRpb25Db25maWc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxGYWNlQ29uZmlncz1NTEZhY2VDb25maWdzO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MUHJvZHVjdENvbmZpZz1NTFByb2R1Y3RDb25maWc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxMaXZlbmVzc0NvbmZpZz1NTExpdmVuZXNzQ29uZmlnO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MUnR0TGFuZ3VhZ2VzPU1MUnR0TGFuZ3VhZ2VzO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MUnR0U2NlbmVzPU1MUnR0U2NlbmVzO1xyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHN0YXJ0IHRoZSBUZXh0IGFuYWx5emVyLlxyXG4gICAqIEBwYXJhbSAge2xvY2FsSW1hZ2VUZXh0UmVxfHJlbW90ZUltYWdlVGV4dFJlcX0gSW1hZ2VUZXh0QW5hbHlzZXJJbnB1dCBSZXBlcmVzZW50cyB0aGUgbmVjZXNzYXJ5IHBhcmFtZXRlcnMgdG8gY29udmVydCBpbWFnZXMgdG8gdGV4dCBmb3JtYXQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZSA8VGV4dEFuYWx5c2VyPlxyXG4gICAqL1xyXG4gIGltYWdlVGV4dEFuYWx5c2VyKEltYWdlVGV4dEFuYWx5c2VySW5wdXQ6IGxvY2FsSW1hZ2VUZXh0UmVxIHwgcmVtb3RlSW1hZ2VUZXh0UmVxKTogUHJvbWlzZTxNTFRleHQ+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2Qgc3RvcCB0aGUgVGV4dCBhbmFseXplci5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBzdG9wVGV4dEFuYWx5c2VyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGdpdmVzIFRleHQgQW5hbHlzZXIgaW5mb3JtYXRpb24uXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgZ2V0VGV4dEFuYWx5c2VySW5mbygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBwcm92aWRlcyBhIGRvY3VtZW50IHJlY29nbml0aW9uIGNvbXBvbmVudCB0aGF0IHJlY29nbml6ZXMgdGV4dCBmcm9tIGltYWdlcyBvZiBkb2N1bWVudHMuXHJcbiAgICogQHBhcmFtICB7ZG9jdW1lbnRJbWFnZUFuYWx5c2VyUmVxfSBkb2N1bWVudEltYWdlQW5hbHlzZXJSZXEgUmVwZXJlc2VudHMgdGhlIG5lY2Vzc2FyeSBwYXJhbWV0ZXIgdG8gY29udmVydCBkb2N1bWVudCBpbWFnZXMgdG8gdGV4dCBmb3JtYXQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxEb2N1bWVudEFuYWx5c2VyPlxyXG4gICAqL1xyXG4gIGRvY3VtZW50SW1hZ2VBbmFseXNlcihkb2N1bWVudEltYWdlQW5hbHlzZXJSZXE6IGRvY3VtZW50SW1hZ2VBbmFseXNlclJlcSk6IFByb21pc2U8TUxEb2N1bWVudD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBzdG9wIHRoZSBEb2N1bWVudCBhbmFseXplci5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBzdG9wRG9jdW1lbnRJbWFnZUFuYWx5c2VyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGNsb3NlIHRoZSBEb2N1bWVudCBhbmFseXplci5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBjbG9zZURvY3VtZW50SW1hZ2VBbmFseXNlcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBEb2N1bWVudCBhbmFseXplciBzZXR0aW5nLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGdldERvY3VtZW50SW1hZ2VBbmFseXNlclNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgSW1hZ2UgYW5hbHl6ZXIgc2V0dGluZy5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBnZXRUZXh0QW5hbHlzZXJTZXR0aW5nKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIEdDUiBzZXR0aW5nLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGdldEdDUlNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2Qgc3RvcCB0aGUgRm9ybSBSZWNvZ25pdGlvbiBBbmFseXplci5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBzdG9wRm9ybVJlY29nbml0aW9uQW5hbHlzZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIFRoZSBiYW5rIGNhcmQgcmVjb2duaXRpb24gc2VydmljZSByZWNvZ25pemVzIGJhbmsgY2FyZHMgaW4gY2FtZXJhIHN0cmVhbXMgd2l0aGluIGFuZ2xlIG9mZnNldCBvZiAxNSBkZWdyZWVzIGFuZCBleHRyYWN0cyBrZXkgaW5mb3JtYXRpb24gc3VjaCBhcyBjYXJkIG51bWJlciBhbmQgdmFsaWRpdHkgcGVyaW9kLlxyXG4gICAqIEBwYXJhbSAge2JhbmtDYXJkU0RLRGV0ZWN0b3JSZXF8YmFua0NhcmRQbHVnaW5EZXRlY3RvclJlcX0gYmFua0NhcmREZXRlY3RlcklucHV0IFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgYmFuayBjYXJkIHJlY29nbml0aW9uLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8QmFua0NhcmRBbmFseXNlcj4gfCBQcm9taXNlPEJhbmtDYXJkQW5hbHlzZXI+XHJcbiAgICovXHJcbiAgYmFua0NhcmREZXRlY3RvcihiYW5rQ2FyZERldGVjdGVySW5wdXQ6IGJhbmtDYXJkU0RLRGV0ZWN0b3JSZXEgfCBiYW5rQ2FyZFBsdWdpbkRldGVjdG9yUmVxKTogUHJvbWlzZTxNTEJhbmtDYXJkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHN0b3AgYmFua2NhcmQgcmVjb2duaXRpb24gc2VydmljZS5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBzdG9wQmFua0NhcmREZXRlY3RvcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBCQ1Igc2V0dGluZy5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBnZXRCYW5rQ2FyZERldGVjdG9yU2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGUgZ2VuZXJhbCBjYXJkIHJlY29nbml0aW9uIHNlcnZpY2UgcHJvdmlkZXMgYSB1bml2ZXJzYWwgZGV2ZWxvcG1lbnQgZnJhbWV3b3JrIGJhc2VkIG9uIHRoZSB0ZXh0IHJlY29nbml0aW9uIHRlY2hub2xvZ3kuIFxyXG4gICAqIEBwYXJhbSAge2dlbmVyYWxDYXJkRGV0ZWN0b3JSZXF9IGdlbmVyYWxDYXJkRGV0ZWN0b3JSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBnZW5lcmFsIGNhcmQgcmVjb2duaXRpb24gcGx1Zy1pbi5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPEdlbmVyYWxDYXJkQW5hbHlzZXI+XHJcbiAgICovXHJcbiAgZ2VuZXJhbENhcmREZXRlY3RvcihnZW5lcmFsQ2FyZERldGVjdG9yUmVxOiBnZW5lcmFsQ2FyZERldGVjdG9yUmVxKTogUHJvbWlzZTxNTEdjckNhcHR1cmVSZXN1bHQ+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhlIGZvcm0gcmVjb2duaXRpb24gc2VydmljZSB1c2VzIEFJIHRlY2hub2xvZ2llcyB0byByZWNvZ25pemUgYW5kIHJldHVybiBmb3JtIHN0cnVjdHVyZSBpbmZvcm1hdGlvbiAoaW5jbHVkaW5nIHJvd3MsIGNvbHVtbnMsIGFuZCBjb29yZGluYXRlcyBvZiBjZWxscykgYW5kIGZvcm0gdGV4dCBpbiBDaGluZXNlIGFuZCBFbmdsaXNoIChpbmNsdWRpbmcgcHVuY3R1YXRpb24pIGZyb20gaW5wdXQgaW1hZ2VzLlxyXG4gICAqIEBwYXJhbSAge2Zvcm1SZWNvZ25pemVyQW5hbHlzZXJSZXF9IGZvcm1SZWNvZ25pemVyQW5hbHlzZXJSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBnZW5lcmFsIGNhcmQgcmVjb2duaXRpb24gcGx1Zy1pbi5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPEdlbmVyYWxDYXJkQW5hbHlzZXI+XHJcbiAgICovXHJcbiAgZm9ybVJlY29nbml0aW9uQW5hbHlzZXIoZm9ybVJlY29nbml6ZXJBbmFseXNlclJlcTogZm9ybVJlY29nbml6ZXJBbmFseXNlclJlcSk6IFByb21pc2U8TUxHY3JDYXB0dXJlUmVzdWx0PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuXHJcblxyXG4gXHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNWb2ljZVNlcnZpY2VQcm92aWRlcicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLW1sJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnSE1TVm9pY2VTZXJ2aWNlUHJvdmlkZXInLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TVm9pY2VTZXJ2aWNlUHJvdmlkZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxGYWNlU2V0dGluZyA9IE1MRmFjZVNldHRpbmc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxMb2NhbFRleHRTZXR0aW5nID0gTUxMb2NhbFRleHRTZXR0aW5nO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MVGV4dENvbmZpZyA9IE1MVGV4dENvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTFJlbW90ZVRleHRTZXR0aW5nID0gTUxSZW1vdGVUZXh0U2V0dGluZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTEltYWdlQ2xhc3NpZmljYXRpb25Db25maWcgPSBNTEltYWdlQ2xhc3NpZmljYXRpb25Db25maWc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxJbWFnZVNlZ21lbnRhdGlvblNldHRpbmcgPSBNTEltYWdlU2VnbWVudGF0aW9uU2V0dGluZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTEltYWdlU2VnbWVudGF0aW9uU2NlbmUgPSBNTEltYWdlU2VnbWVudGF0aW9uU2NlbmU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxSZW1vdGVMYW5kbWFya1NldHRpbmcgPSBNTFJlbW90ZUxhbmRtYXJrU2V0dGluZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTEJjckNhcHR1cmVDb25maWcgPSBNTEJjckNhcHR1cmVDb25maWc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxHY3JDYXB0dXJlVUlDb25maWcgPSBNTEdjckNhcHR1cmVVSUNvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTEJjclJlc3VsdENvbmZpZz0gTUxCY3JSZXN1bHRDb25maWc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgSGFuZGtleVBvaW50Q29uZmlnPSBIYW5ka2V5UG9pbnRDb25maWc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgSW1nU3VwZXJSZXNvbHV0aW9uQ29uZmlnPUltZ1N1cGVyUmVzb2x1dGlvbkNvbmZpZztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNbE9iamVjdEFuYWx5c2VyQ29uZmlnPSBNbE9iamVjdEFuYWx5c2VyQ29uZmlnO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIERvd25sb2FkU3RyYXRlZ3lDdXN0b209IERvd25sb2FkU3RyYXRlZ3lDdXN0b207XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRkVBVFVSRSA9IEZFQVRVUkU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTEFOR1VBR0UgPSBMQU5HVUFHRTtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTFR0c0NvbnN0YW50cyA9IE1MVHRzQ29uc3RhbnRzO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIENvbG9ycyA9IENvbG9ycztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBSZWN0U3R5bGUgPSBSZWN0U3R5bGU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxTa2VsZXRvbkNvbmZpZyA9IE1MU2tlbGV0b25Db25maWc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxGbGFzaE1vZGU9TUxGbGFzaE1vZGU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxMZW5zVHlwZT1NTExlbnNUeXBlO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MQW5hbHl6ZXJOYW1lPU1MQW5hbHl6ZXJOYW1lO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MRnJhbWU9TUxGcmFtZTtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBNTEZvcm1SZWNvZ2l0aW9uQ29uZmlnPU1MRm9ybVJlY29naXRpb25Db25maWc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxGYWNlQ29uZmlncz1NTEZhY2VDb25maWdzO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MUHJvZHVjdENvbmZpZz1NTFByb2R1Y3RDb25maWc7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUxMaXZlbmVzc0NvbmZpZz1NTExpdmVuZXNzQ29uZmlnO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MUnR0TGFuZ3VhZ2VzPU1MUnR0TGFuZ3VhZ2VzO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1MUnR0U2NlbmVzPU1MUnR0U2NlbmVzO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIGdjckNhcHR1cmVUeXBlPWdjckNhcHR1cmVUeXBlO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIHN5bmNUeXBlPXN5bmNUeXBlO1xyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIEltcGxlbWVudHMgb24tY2xvdWQgdGV4dCB0cmFuc2xhdGlvbi5cclxuICAgKiBAcGFyYW0gIHtyZW1vdGV0cmFuc2xhdGVSZXF9IHJlbW90ZXRyYW5zbGF0ZVJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIHRyYW5zbGF0ZS5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICByZW1vdGVUcmFuc2xhdG9yKHJlbW90ZXRyYW5zbGF0ZVJlcTpyZW1vdGV0cmFuc2xhdGVSZXEpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBJbXBsZW1lbnRzIG9uLWNsb3VkIHRleHQgdHJhbnNsYXRpb24uXHJcbiAgICogQHBhcmFtICB7bG9jYWx0cmFuc2xhdGVSZXF9IGxvY2FsdHJhbnNsYXRlUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgdHJhbnNsYXRlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGxvY2FsVHJhbnNsYXRvcihsb2NhbHRyYW5zbGF0ZVJlcTpsb2NhbHRyYW5zbGF0ZVJlcSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIE9idGFpbnMgYWxsIGxhbmd1YWdlcyBzdXBwb3J0ZWQgZm9yIGxvY2FsIHRyYW5zbGF0aW9uLlxyXG4gICAqIEBwYXJhbSAge2xvY2FsQWxsTGFuZ1JlcX0gbG9jYWxBbGxMYW5nUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgdHJhbnNsYXRlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIHRyYW5zbGF0b3JMb2NhbEFsbExhbmcobG9jYWxBbGxMYW5nUmVxOmxvY2FsQWxsTGFuZ1JlcSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIE9idGFpbnMgYWxsIGxhbmd1YWdlcyBzdXBwb3J0ZWQgZm9yIG9uLWNsb3VkIHRyYW5zbGF0aW9uLlxyXG4gICAqIEBwYXJhbSAge3JlbW90ZUFsbExhbmdSZXF9IHJlbW90ZUFsbExhbmdSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciB0cmFuc2xhdGUuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgdHJhbnNsYXRvclJlbW90ZUFsbExhbmcocmVtb3RlQWxsTGFuZ1JlcTpyZW1vdGVBbGxMYW5nUmVxKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogRGV0ZWN0cyBsYW5ndWFnZXMgb24gdGhlIGNsb3VkLlxyXG4gICAqIEBwYXJhbSAge3JlbW90ZUxhbmdEZXRlY3Rpb25SZXF9IHJlbW90ZUxhbmdEZXRlY3Rpb25SZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBsYW5nIGRldGVjdGlvbi5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPFJlbW90ZUxhbmdEZXRlY3Rpb25BbmFseXNlcj4gfCBQcm9taXNlPGxhbmdEZXRlY3Rpb25XaXRoRmlyc3REZXRlY3Q+XHJcbiAgICovXHJcbiAgcmVtb3RlTGFuZ0RldGVjdGlvbihyZW1vdGVMYW5nRGV0ZWN0aW9uUmVxOiByZW1vdGVMYW5nRGV0ZWN0aW9uUmVxKTogUHJvbWlzZTxNTFJlbW90ZUxhbmdEZXRlY3Rpb24gfCBNTGxhbmdEZXRlY3Rpb25XaXRoRmlyc3REZXRlY3Q+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogRGV0ZWN0cyBsYW5ndWFnZXMgb24gbG9jYWwuXHJcbiAgICogQHBhcmFtICB7bG9jYWxMYW5nRGV0ZWN0aW9uUmVxfSBsb2NhbExhbmdEZXRlY3Rpb25SZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBsYW5nIGRldGVjdGlvbi5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gfCBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBsb2NhbExhbmdEZXRlY3Rpb24obG9jYWxMYW5nRGV0ZWN0aW9uUmVxOiBsb2NhbExhbmdEZXRlY3Rpb25SZXEpOlByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIERvd25sb2FkIGxhbmd1YWdlIG1vZGVsLlxyXG4gICAqIEBwYXJhbSAge2Rvd25sb2FkVHJhbnNsYXRlUmVxfSBkb3dubG9hZFRyYW5zbGF0ZVJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIGRvd25sb2FkIG1vZGVsLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcclxuICAgKi9cclxuICB0cmFuc2xhdG9yRG93bmxvYWRNb2RlbChkb3dubG9hZFRyYW5zbGF0ZVJlcTogZG93bmxvYWRUcmFuc2xhdGVSZXEpOlByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIEZvciBkZWxldGUgbGFuZ3VhZ2UgbW9kZWwuXHJcbiAgICogQHBhcmFtICB7ZGVsZXRlVHJhbnNsYXRlUmVxfSBkZWxldGVUcmFuc2xhdGVSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBkZWxldGUgbW9kZWwuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxyXG4gICAqL1xyXG4gIHRyYW5zbGF0b3JEZWxldGVNb2RlbChkZWxldGVUcmFuc2xhdGVSZXE6IGRlbGV0ZVRyYW5zbGF0ZVJlcSk6UHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2Qgc3RvcCB0cmFuc2xhdG9yIHNlcnZpY2UuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgc3RvcFRyYW5zbGF0b3JTZXJ2aWNlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHJldHVybiBSVFQgc2V0dGluZy5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBnZXRSVFRTZXR0aW5nKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHJldHVybnMgVFRTIHNldHRpbmcuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgZ2V0VFRTU2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIEFGVCBzZXR0aW5nLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGdldEFGVFNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgcmV0dXJucyBMYW5nIERldGVjdGlvbiBzZXR0aW5nLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGdldExhbmdEZXRlY3Rpb25TZXR0aW5nKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHN0b3AgbGFuZyBkZXRlY3Rpb24gc2VydmljZS5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBzdG9wTGFuZ0RldGVjdGlvblNlcnZpY2UoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhlIHNvdW5kIGRldGVjdGlvbiBzZXJ2aWNlIGNhbiBkZXRlY3Qgc291bmQgZXZlbnRzIGluIG9ubGluZSAocmVhbC10aW1lIHJlY29yZGluZykgbW9kZS4gVGhlIGRldGVjdGVkIHNvdW5kIGV2ZW50cyBjYW4gaGVscCB5b3UgcGVyZm9ybSBzdWJzZXF1ZW50IGFjdGlvbnMuXHJcbiAgICogQHBhcmFtICB7c291bmREZWN0UmVxfSBzb3VuZERlY3RSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBTb3VuZCBEZXRlY3Rpb24gYW5hbHlzZXIuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgc291bmREZWN0QW5hbHlzZXIoc291bmREZWN0UmVxOiBzb3VuZERlY3RSZXEpOiBQcm9taXNlPE1MU291bmREZWN0UmVzdWx0PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRUUyBjYW4gY29udmVydCB0ZXh0IGluZm9ybWF0aW9uIGludG8gYXVkaW8gb3V0cHV0LiBSaWNoIHRpbWJyZXMsIGFuZCB2b2x1bWUgYW5kIHNwZWVkIG9wdGlvbnMgYXJlIHN1cHBvcnRlZCB0byBwcm9kdWNlIG1vcmUgbmF0dXJhbCBzb3VuZHMuIFxyXG4gICAqIEBwYXJhbSAge3R0c1JlcX0gdHRzUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgdGV4dCB0byBzcGVlY2guXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxUdHNBbmFseXNlcj5cclxuICAgKi9cclxuICB0dHNBbmFseXNlcih0dHNSZXE6IHR0c1JlcSk6IFByb21pc2U8TUxUdHNSZXN1bHQ+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVFRTIGNhbiBjb252ZXJ0IHRleHQgaW5mb3JtYXRpb24gaW50byBhdWRpbyBvdXRwdXQgb2ZmbGluZS4gUmljaCB0aW1icmVzLCBhbmQgdm9sdW1lIGFuZCBzcGVlZCBvcHRpb25zIGFyZSBzdXBwb3J0ZWQgdG8gcHJvZHVjZSBtb3JlIG5hdHVyYWwgc291bmRzLiBcclxuICAgKiBAcGFyYW0gIHt0dHNSZXF9IHR0c1JlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIHRleHQgdG8gc3BlZWNoLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8VHRzQW5hbHlzZXI+XHJcbiAgICovXHJcbiAgdHRzT2ZmbGluZUFuYWx5c2VyKHR0c1JlcTogdHRzUmVxKTogUHJvbWlzZTxNTFR0c1Jlc3VsdD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIHNlcnZpY2Ugc3RvcCB0ZXh0IHRvIHNwZWVjaCAoVFRTKSBzZXJ2aWNlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIHR0c0FuYWx5c2VyU3RvcCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIHNlcnZpY2UgcGF1c2VzIHRleHQgdG8gc3BlZWNoIChUVFMpIGFuYWx5c2VyLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIHR0c0FuYWx5c2VyUGF1c2UoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBzZXJ2aWNlIGNvbnRpbnVlcyB0ZXh0IHRvIHNwZWVjaCAoVFRTKSBhbmFseXNlci5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICB0dHNBbmFseXNlclJlc3VtZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIHNlcnZpY2Ugc2h1dGRvd24gdGV4dCB0byBzcGVlY2ggKFRUUykgYW5hbHlzZXIuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgdHRzQW5hbHlzZXJzaHV0RG93bigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIFRUUyBEb3dubG9hZCBzZXR0aW5nLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIHR0c0FuYWx5c2VyRG93bmxvYWRTZXR0aW5nKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgc2VydmljZSBjbG9zZSBBRlQgYW5hbHlzZXIuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgYWZ0QW5hbHlzZXJDbG9zZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIHNlcnZpY2Ugc3RvcCBBRlQgYW5hbHlzZXIuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgYXNyQW5hbHlzZXJTdG9wKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgc2VydmljZSBkZXN0cm95IEFGVCBhbmFseXNlci5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBhZnRBbmFseXNlckRlc3Ryb3koKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBzZXJ2aWNlIHBhdXNlIEFGVCBhbmFseXNlci5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBhZnRBbmFseXNlclBhdXNlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgc2VydmljZSBkZXN0cm95IFNvdW5kIERldGVjdGlvbiBhbmFseXNlci5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBzb3VuZERlY3RBbmFseXNlckRlc3Ryb3koKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhlIGF1ZGlvIGZpbGUgdHJhbnNjcmlwdGlvbiBzZXJ2aWNlIGNhbiBjb252ZXJ0IGFuIGF1ZGlvIGZpbGUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIDYwIHNlY29uZHMgaW50byBhIHRleHQgZmlsZS4gQ3VycmVudGx5LCBDaGluZXNlIGFuZCBFbmdsaXNoIGFyZSBzdXBwb3J0ZWQuXHJcbiAgICogQHBhcmFtICB7YWZ0UmVxfSBhZnRSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBhZnQgYW5hbHlzZXIuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxBZnRBbmFseXNlcj5cclxuICAgKi9cclxuICBhZnRBbmFseXNlcihhZnRSZXE6IGFmdFJlcSk6IFByb21pc2U8TUxBZnRSZXN1bHQ+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gICAvKipcclxuICAgKiBBU1IgY2FuIHJlY29nbml6ZSBzcGVlY2ggbm90IGxvbmdlciB0aGFuIDYwcyBhbmQgY29udmVydCB0aGUgaW5wdXQgc3BlZWNoIGludG8gdGV4dCBpbiByZWFsIHRpbWUuXHJcbiAgICogQHBhcmFtICB7YXNyUmVxfSBhc3JSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBhc3IgYW5hbHlzZXIuXHJcbiAgICogQHBhcmFtICB7YW55fSBzdWNjZXNzIEEgY2FsbGJhY2sgZnVuY3Rpb24uIEl0IGlzIGNhbGxlZCB3aGVuIGZ1bmN0aW9uIGlzIGV4ZWN1dGVkIHN1Y2Nlc3NmdWxseS4gSXQgcmV0dXJucyB0aGUgcmVzdWx0cyBvZiB0ZXh0LlxyXG4gICAqIEBwYXJhbSAge2FueX0gZXJyb3IgQSBjYWxsYmFjayBmdW5jdGlvbi4gSXQgaXMgY2FsbGVkIHdoZW4gZnVuY3Rpb24gaXMgZmFpbGVkLlxyXG4gICAqIEByZXR1cm5zIGNhbGxiYWNrXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXHJcbiAgYXNyQW5hbHlzZXIoYXNyUmVxOiBhc3JSZXEpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogUmVhbC10aW1lIHRyYW5zY3JpcHRpb24gZW5hYmxlcyB5b3VyIGFwcCB0byBjb252ZXJ0IGxvbmcgc3BlZWNoIChubyBsb25nZXIgdGhhbiA1IGhvdXJzKSBpbnRvIHRleHQgaW4gcmVhbCB0aW1lLiBUaGUgZ2VuZXJhdGVkIHRleHQgY29udGFpbnMgcHVuY3R1YXRpb24gbWFya3MgYW5kIHRpbWVzdGFtcHMuXHJcbiAgICogQHBhcmFtICB7cnR0UmVxfSBydHRSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBydHQgYW5hbHlzZXIuXHJcbiAgICogQHBhcmFtICB7YW55fSBzdWNjZXNzIEEgY2FsbGJhY2sgZnVuY3Rpb24uIEl0IGlzIGNhbGxlZCB3aGVuIGZ1bmN0aW9uIGlzIGV4ZWN1dGVkIHN1Y2Nlc3NmdWxseS4gSXQgcmV0dXJucyB0aGUgcmVzdWx0cyBvZiB0ZXh0LlxyXG4gICAqIEBwYXJhbSAge2FueX0gZXJyb3IgQSBjYWxsYmFjayBmdW5jdGlvbi4gSXQgaXMgY2FsbGVkIHdoZW4gZnVuY3Rpb24gaXMgZmFpbGVkLlxyXG4gICAqIEByZXR1cm5zIGNhbGxiYWNrXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXHJcbiAgcnR0QW5hbHlzZXJTdGFydChydHRSZXE6IHJ0dFJlcSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBzdG9wIFJUVCBhbmFseXNlclxyXG4gICAqIEBwYXJhbSAge2FueX0gc3VjY2VzcyBBIGNhbGxiYWNrIGZ1bmN0aW9uLiBJdCBpcyBjYWxsZWQgd2hlbiBmdW5jdGlvbiBpcyBleGVjdXRlZCBzdWNjZXNzZnVsbHkuIEl0IHJldHVybnMgdGhlIHJlc3VsdHMgb2YgdGV4dC5cclxuICAgKiBAcGFyYW0gIHthbnl9IGVycm9yIEEgY2FsbGJhY2sgZnVuY3Rpb24uIEl0IGlzIGNhbGxlZCB3aGVuIGZ1bmN0aW9uIGlzIGZhaWxlZC5cclxuICAgKiBAcmV0dXJucyBjYWxsYmFja1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxyXG4gIHJ0dEFuYWx5c2VyU3RvcCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==