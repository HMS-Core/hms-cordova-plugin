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
import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
export interface RequestPermissionReq {
    permissionList: Array<string>;
}
export interface CheckPermissionReq {
    permissionList: Array<string>;
}
export interface statisticsnReq {
    isAllowed: boolean;
}
export interface MLBounds {
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
}
export interface MLconfig {
    lensEngineReq: lensEngineReq;
}
export interface lensEngineReq {
    analyzerName: MLAnalyzerName;
    lensEngineSetting?: MLLensEngineSetting;
    grapgicSetting?: FaceGraphicSetting | sceneSettings | HandkeyGraphicSetting | SkeletonGraphicSetting | ObjectGraphicSetting | null;
    analyzerSetting?: mlFaceAnalyzerSetting | mlHandKeypointSetting | mlImageSegmentationSetting | mlObjectAnalyserSetting | null;
}
export interface MLconfigComposite {
    lensEngineReq: compositeAnalyser;
}
export interface compositeAnalyser {
    analyzerNames?: Array<MLAnalyzerName>;
    lensEngineSetting?: MLLensEngineSetting;
    grapgicSetting?: FaceGraphicSetting | sceneSettings | HandkeyGraphicSetting | SkeletonGraphicSetting | ObjectGraphicSetting | null;
    analyzerSetting?: mlFaceAnalyzerSetting | mlHandKeypointSetting | mlImageSegmentationSetting | mlObjectAnalyserSetting | null;
}
export interface MLLensEngineSetting {
    fps?: number | null;
    displayDimensionI?: number | null;
    displayDimensionI1?: number | null;
    lensType?: MLLensType | null;
    enableFocus?: boolean | null;
    flashMode?: MLFlashMode | null;
}
export declare enum MLFlashMode {
    AUTO = "auto",
    ON = "on",
    OFF = "off"
}
export declare enum MLLensType {
    BACK_LENS = 0,
    FRONT_LENS = 1
}
export declare enum MLStillCompositerName {
    FACE = "FACE",
    HAND = "HAND",
    SKELETON = "SKELETON",
    OBJECT = "OBJECT",
    TEXT = "TEXT",
    CLASSIFICATION = "classification"
}
export declare enum MLAnalyzerName {
    LIVEFACE = "FACE",
    LIVEFACE3D = "FACE3D",
    LIVEFACEMAX = "FACEMAX",
    LIVEHAND = "HAND",
    LIVESKELETON = "SKELETON",
    LIVEOBJECT = "OBJECT",
    LIVECLASSIFICATION = "CLASSIFICATION",
    LIVESCENE = "SCENE",
    LIVETEXT = "TEXT"
}
export interface doZoomReq {
    scale?: number | null;
}
export interface mlFrameReq {
    actionName: MLFrame;
    filePath: any;
}
export declare enum MLFrame {
    getPreviewBitmap = "getPreviewBitmap",
    readBitmap = "readBitmap",
    rotate = "rotate"
}
export interface configReq {
    apiKey: string;
}
export interface appSettingReq {
    apiKey?: string | null;
    applicationId?: string | null;
    certFingerprint?: string | null;
}
export interface compositeAnalyserReq {
    compositeAnalyserConfig: compositeAnalyserConfig;
}
export interface compositeAnalyserConfig {
    filePath: any;
    analyzerNames?: Array<MLStillCompositerName>;
    analyzerSetting?: mlFaceAnalyzerSetting | mlHandKeypointSetting | mlImageSegmentationSetting | mlObjectAnalyserSetting | null;
}
export interface aftReq {
    audioPath: any;
    aftSetting?: (AftSetting);
}
export interface AftSetting {
    languageCode?: string | null;
    punctuationEnabled?: boolean | null;
    timeOffset?: boolean | null;
    wordTimeOffsetEnabled?: boolean | null;
    sentenceTimeOffsetEnabled?: boolean | null;
}
export interface asrReq {
    language?: LANGUAGE | null;
    feature?: FEATURE | null;
}
export declare enum FEATURE {
    FEATURE_ALLINONE = 12,
    FEATURE_WORDFLUX = 11
}
export declare enum LANGUAGE {
    LAN_EN_US = "en-US",
    LAN_FR_FR = "fr-FR",
    LAN_ZH = "zh",
    LAN_ZH_CN = "zh-CN",
    LAN_ES_ES = "es-ES",
    LAN_DE_DE = "de-DE"
}
export interface bankCardSDKDetectorReq {
    filePath: any;
    detectType: 0;
    mLBcrAnalyzerSetting?: MLBcrAnalyzerSetting | null;
}
export interface MLBcrAnalyzerSetting {
    langType?: string | null;
    resultType?: MLBcrResultConfig | null;
}
export interface bankCardPluginDetectorReq {
    detectType: 1;
    mLBcrCaptureConfig?: mLBcrCaptureConfig | null;
}
export interface mLBcrCaptureConfig {
    orientation?: MLBcrCaptureConfig | null;
    resultType?: MLBcrResultConfig | null;
}
export declare enum MLBcrCaptureConfig {
    ORIENTATION_AUTO = 0,
    ORIENTATION_LANDSCAPE = 1,
    ORIENTATION_PORTRAIT = 2
}
export declare enum MLBcrResultConfig {
    RESULT_NUM_ONLY = 0,
    RESULT_SIMPLE = 1,
    RESULT_ALL = 2
}
export interface localImageClassificationReq {
    ocrType: MLImageClassificationConfig | null;
    analyseMode?: number | null;
    localClassificationAnalyzerSetting?: (LocalClassificationAnalyzerSetting) | null;
    filePath: any;
}
export interface LocalClassificationAnalyzerSetting {
    possibility?: number | null;
}
export interface remoteImageClassificationReq {
    ocrType: MLImageClassificationConfig;
    analyseMode?: number;
    remoteClassificationAnalyzerSetting?: (RemoteClassificationAnalyzerSetting) | null;
    filePath: any;
}
export interface RemoteClassificationAnalyzerSetting {
    maxResults?: number | null;
    possibility?: number | null;
    isEnableFingerprintVerification?: boolean | null;
}
export declare enum MLImageClassificationConfig {
    TYPE_LOCAL = 0,
    TYPE_REMOTE = 1
}
export interface downloadModelReq {
    detectType: 1;
    filePath: any;
    downloadStrategySetting?: DownloadStrategySetting | null;
}
export interface DownloadStrategySetting {
    isChargingNeed: boolean | null;
    isWifiNeed: boolean | null;
    isDeviceIdleNeed: boolean | null;
    setRegion?: DownloadStrategyCustom | null;
}
export declare enum DownloadStrategyCustom {
    REGION_DR_CHINA = 1002,
    REGION_DR_AFILA = 1003,
    REGION_DR_EUROPE = 1004,
    REGION_DR_RUSSIA = 1005
}
export interface ownCustomModelReq {
    detectType: number;
    filePath: any;
    modelFullName: string | null;
    modelName: string | null;
    labelFileName: string | null;
    bitmapHeight: number | null;
    bitmapWidth: number | null;
    outPutSize: number | null;
}
export interface documentImageAnalyserReq {
    documentSetting?: DocumentSetting | null;
    filePath: any;
}
export interface DocumentSetting {
    borderType?: MLRemoteTextSetting | null;
    LanguageList?: Array<string> | null;
    enableFingerprintVerification: boolean | null;
}
export declare enum MLRemoteTextSetting {
    OCR_LOOSE_SCENE = 1,
    OCR_COMPACT_SCENE = 2,
    NGON = "NGON",
    ARC = "ARC"
}
export interface formRecognizerAnalyserReq {
    filePath: any;
    syncType: MLFormRecogitionConfig;
}
export declare enum MLFormRecogitionConfig {
    SYNC_TYPE = 1,
    ASYNC_TYPE = 0
}
export interface documentSkewCorrectionReq {
    filePath: any;
    syncMode?: MLFormRecogitionConfig | null;
}
export interface faceReq {
    mlFaceAnalyserSetting?: mlFaceAnalyzerSetting | null;
    analyseMode?: MLFaceConfigs | null;
    filePath: any;
}
export declare enum MLFaceConfigs {
    TYPE_2D_SYNC = 0,
    TYPE_2D_ASYNC = 1,
    TYPE_3D_SYNC = 2,
    TYPE_3D_ASYNC = 3
}
export interface FaceGraphicSetting {
    facePositionPaintSetting?: FacePositionPaintSetting | null;
    textPaintSetting?: TextPaintSettingFace | null;
    faceFeaturePaintTextSetting?: FaceFeaturePaintTextSetting | null;
    keypointPaintSetting?: KeypointPaintSetting | null;
    boxPaintSetting?: BoxPaintSettingFace | null;
    facePaintSetting?: FacePaintSetting | null;
    eyePaintSetting?: EyePaintSetting | null;
    eyebrowPaintSetting?: EyebrowPaintSetting | null;
    nosePaintSetting?: NosePaintSetting | null;
    noseBasePaintSetting?: NoseBasePaintSetting | null;
    lipPaintSetting?: LipPaintSetting | null;
}
export interface LipPaintSetting {
    color?: String | Colors | null;
    style?: RectStyle | null;
    strokeWidth: Number | null;
}
export interface NosePaintSetting {
    color?: String | Colors | null;
    style?: RectStyle | null;
    strokeWidth?: Number;
}
export interface NoseBasePaintSetting {
    color?: String | Colors | null;
    style?: RectStyle | null;
    strokeWidth?: Number;
}
export interface EyebrowPaintSetting {
    color?: String | Colors | null;
    style?: RectStyle;
    strokeWidth?: Number;
}
export interface EyePaintSetting {
    color?: String | Colors;
    style?: RectStyle | Colors;
    strokeWidth: Number | null;
}
export interface FacePaintSetting {
    color?: String | Colors | null;
    style?: RectStyle | null;
    strokeWidth: Number | null;
}
export interface BoxPaintSettingFace {
    color?: String | Colors | null;
    style?: RectStyle | null;
    strokeWidth?: Number | null;
}
export interface KeypointPaintSetting {
    color?: Colors | Colors | null;
    style?: RectStyle | null;
    textSize: Number | null;
}
export interface FaceFeaturePaintTextSetting {
    color?: Colors | null;
    textSize: Number | null;
}
export interface FacePositionPaintSetting {
    color?: Colors | null;
}
export interface TextPaintSettingFace {
    color?: Colors | null;
    textSize?: Number | null;
}
export interface mlFaceAnalyzerSetting {
    featureType?: MLFaceSetting | null;
    keyPointType?: MLFaceSetting | null;
    maxSizeFaceOnly?: boolean | null;
    minFaceProportion?: number | null;
    performanceType?: MLFaceSetting | null;
    poseDisabled?: boolean | null;
    shapeType?: MLFaceSetting | null;
    tracingAllowed?: boolean | null;
}
export declare enum MLFaceSetting {
    TYPE_FEATURES = 1,
    TYPE_UNSUPPORT_FEATURES = 2,
    TYPE_KEYPOINTS = 0,
    TYPE_UNSUPPORT_KEYPOINTS = 2,
    TYPE_PRECISION = 1,
    TYPE_SPEED = 2,
    TYPE_SHAPES = 2,
    TYPE_UNSUPPORT_SHAPES = 3,
    TYPE_FEATURE_EMOTION = 4,
    TYPE_FEATURE_EYEGLASS = 8,
    TYPE_FEATURE_HAT = 16,
    TYPE_FEATURE_BEARD = 32,
    TYPE_FEATURE_OPENCLOSEEYE = 64,
    TYPE_FEATURE_GENDAR = 128,
    TYPE_FEATURE_AGE = 256,
    MODE_TRACING_FAST = 1,
    MODE_TRACING_ROBUST = 2
}
export interface generalCardDetectorReq {
    gcrCaptureConfig?: gcrCaptureConfig;
    gcrCaptureUIConfig?: gcrCaptureUIConfig;
    captureType?: gcrCaptureType | null;
}
export interface gcrCaptureConfig {
    language: string;
}
export declare enum gcrCaptureType {
    CAPTURE_ACTIVITY = 0,
    CAPTURE_PHOTO = 1,
    CAPTURE_IMAGE = 2
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
export declare enum MLGcrCaptureUIConfig {
    ORIENTATION_AUTO = 0,
    ORIENTATION_LANDSCAPE = 1,
    ORIENTATION_PORTRAIT = 2
}
export interface idCardAnalyserReqWithSDK {
    detectType: number;
    isRemote?: boolean | null;
    isFront?: boolean | null;
    countryCode?: string;
    filePath: any;
}
export interface idCardAnalyserReqWithPlugin {
    detectType: number;
    isRemote?: boolean | null;
    isFront?: boolean | null;
    countryCode?: string;
}
export interface stillHandKeypointReq {
    syncType?: syncType | null;
    filePath: any;
    handkeySetting?: mlHandKeypointSetting | null;
}
export declare enum syncType {
    SYNC_MODE = 0,
    ASYNC_MODE = 1
}
export interface HandkeyGraphicSetting {
    idPaintnewSetting?: IdPaintnewSetting | null;
    rectPaintSetting?: RectPaintSetting | null;
}
export interface IdPaintnewSetting {
    color?: Colors | null;
    textSize?: Number | null;
}
export interface RectPaintSetting {
    color?: Colors | null;
    style?: RectStyle | null;
    boxStrokeWidth?: Number | null;
}
export interface mlHandKeypointSetting {
    sceneType?: HandkeyPointConfig | null;
    maxHandResults?: number | null;
}
export declare enum HandkeyPointConfig {
    TYPE_ALL = 0,
    TYPE_KEYPOINT_ONLY = 1,
    TYPE_RECT_ONLY = 2
}
export interface imageSuperResolutionReq {
    filePath: any;
    imgSuperResolutionSetting?: (ImgSuperResolutionSetting) | null;
    syncType?: MLFormRecogitionConfig | null;
}
export interface ImgSuperResolutionSetting {
    scaleType?: ImgSuperResolutionConfig;
}
export declare enum ImgSuperResolutionConfig {
    ISR_SCALE_1X = 1,
    ISR_SCALE_3X = 3
}
export interface productReq {
    filePath?: any | null;
    detectType?: number;
    mlProductSetting?: (mlProductSetting) | null;
}
export interface mlProductSetting {
    largestNumOfReturns?: number | null;
    productSetId?: string | null;
    region?: MLProductConfig | null;
}
export declare enum MLProductConfig {
    REGION_DR_CHINA = 1002,
    REGION_DR_AFILA = 1003,
    REGION_DR_EUROPE = 1004,
    REGION_DR_RUSSIA = 1005,
    REGION_DR_GERMAN = 1006,
    REGION_DR_SIANGAPORE = 1007
}
export interface textImageSuperResolutionReq {
    filePath: any;
    analyseMode?: MLFormRecogitionConfig | null;
}
export interface imgSegmentationReq {
    imageSegmentationSetting?: (mlImageSegmentationSetting);
    filePath: any;
    analyseMode?: MLFormRecogitionConfig | null;
}
export interface mlImageSegmentationSetting {
    isExact: boolean | null;
    analyserType?: MLImageSegmentationSetting | null;
    scene?: MLImageSegmentationScene;
}
export declare enum MLImageSegmentationSetting {
    BODY_SEG = 0,
    IMAGE_SEG = 1
}
export declare enum MLImageSegmentationScene {
    ALL = 0,
    MASK_ONLY = 1,
    FOREGROUND_ONLY = 2,
    GRAYSCALE_ONLY = 3
}
export interface imgLandMarkReq {
    landmarkAnalyzerSetting?: landmarkAnalyzerSetting;
    filePath: any;
}
export interface landmarkAnalyzerSetting {
    maxResults?: number | null;
    modelType?: MLRemoteLandmarkSetting | null;
}
export declare enum MLRemoteLandmarkSetting {
    STEADY_PATTERN = 1,
    NEWEST_PATTERN = 2
}
export interface remoteLangDetectionReq {
    sourceText: string;
    taskMode?: number;
    trustedThreshold?: number;
}
export interface localLangDetectionReq {
    sourceText: string;
    trustedThreshold?: number;
}
export interface livenessDetectionReq {
    analyserMode?: MLLivenessCaptureResult | null;
}
export declare enum MLLivenessConfig {
    DEFAULT = 0,
    CUSTOM = 1
}
export interface objectReq {
    filePath: any;
    mlObjectAnalyserSetting?: mlObjectAnalyserSetting;
    syncType?: MLFormRecogitionConfig | null;
}
export interface ObjectGraphicSetting {
    boxPaintSetting?: BoxPaintSetting | null;
    textPaintSetting?: TextPaintSetting | null;
}
export interface BoxPaintSetting {
    color?: Colors | null;
    style?: RectStyle | null;
    boxStrokeWidth?: Number | null;
}
export interface TextPaintSetting {
    color?: Colors | null;
    textSize?: Number | null;
}
export interface mlObjectAnalyserSetting {
    isClassificationAllowed?: boolean | null;
    isMultipleResultsAllowed?: boolean | null;
    analyzerType: MlObjectAnalyserConfig;
}
export declare enum MlObjectAnalyserConfig {
    TYPE_VIDEO = 1,
    TYPE_PICTURE = 0
}
export interface rttReq {
    mLSpeechRealTimeTranscriptionConfig: MLSpeechRealTimeTranscriptionConfig;
}
export interface MLSpeechRealTimeTranscriptionConfig {
    language: MLRttLanguages | null;
    punctuationEnable: boolean | null;
    wordTimeOffsetEnable: boolean | null;
    sentenceTimeOffsetEnable: boolean | null;
    scenes?: MLRttScenes | null;
}
export declare enum MLRttLanguages {
    LAN_ZH_CN = "zh-CN",
    LAN_EN_US = "en-US",
    LAN_FR_FR = "fr-FR",
    LAN_ES_ES = "es-ES",
    LAN_EN_IN = "en-IN",
    LAN_DE_DE = "de-DE"
}
export declare enum MLRttScenes {
    SCENES_SHOPPING = "shopping"
}
export interface stillSceneReq {
    filePath: any;
    analyseMode?: syncType | null;
}
export interface sceneSettings {
    color?: Colors | null;
    textSize?: Number | null;
}
export interface stillSkeletonReq {
    filePath: any;
    syncType: MLSkeletonConfig;
    analyzerType: MLSkeletonConfig;
}
export interface stillSkeletonSimilarityReq {
    filePath: any;
    filepath2: any;
    syncType: MLSkeletonConfig;
    analyzerType: MLSkeletonConfig;
}
export declare enum MLSkeletonConfig {
    SYNC_MODE = 0,
    ASYNC_MODE = 1,
    SIMILARITTY_MODE = 2,
    TYPE_YOGA = 1,
    TYPE_NORMAL = 0
}
export interface SkeletonGraphicSetting {
    circlePaintSetting?: circlePaintSetting | null;
    linePaintSetting?: linePaintSetting | null;
}
export interface circlePaintSetting {
    color?: Colors | null;
    style?: RectStyle | null;
    antiAlias?: boolean | null;
}
export interface linePaintSetting {
    color?: Colors | null;
    style?: RectStyle | null;
    strokeWidth?: Number | null;
    antiAlias?: boolean | null;
}
export interface localImageTextReq {
    ocrType: MLTextConfig;
    analyseMode?: number;
    localTextSetting?: (localTextSetting) | null;
    filePath: any;
}
export interface localTextSetting {
    ocrMode?: MLLocalTextSetting;
    language?: string;
}
export declare enum MLLocalTextSetting {
    OCR_DETECT_MODE = 1,
    OCR_TRACKING_MODE = 2
}
export declare enum MLTextConfig {
    OCR_LOCAL_TYPE = 0,
    OCR_REMOTE_TYPE = 1
}
export interface remoteImageTextReq {
    ocrType: MLTextConfig;
    analyseMode?: number;
    remoteTextSetting?: (remoteTextSetting);
    filePath: any;
}
export interface remoteTextSetting {
    textDensityScene?: MLRemoteTextSetting;
    languageList?: Array<string>;
    borderType?: MLRemoteTextSetting;
}
export interface remotetranslateReq {
    USE_SYNC: boolean;
    targetLangCode: string;
    sourceLangCode?: string;
    sourceText: string;
}
export interface localtranslateReq {
    USE_SYNC: boolean;
    targetLangCode: string;
    sourceLangCode: string;
    sourceText: string;
}
export interface deleteTranslateReq {
    USE_SYNC: boolean;
    langcode: string;
}
export interface downloadTranslateReq {
    USE_SYNC: boolean;
    langcode: string;
}
export interface localAllLangReq {
    USE_SYNC: boolean;
}
export interface remoteAllLangReq {
    USE_SYNC: boolean;
}
export interface soundDectReq {
    startType: boolean | null;
}
export interface textEmbeddingDicInfoReq {
    textEmbeddingSetting: textEmbeddingSetting;
}
export interface textEmbeddingWordtoVectorReq {
    textEmbeddingSetting?: textEmbeddingSetting;
    wordText: string;
}
export interface textEmbeddingSentencetoVectorReq {
    textEmbeddingSetting?: textEmbeddingSetting;
    sentenceText: string;
}
export interface textEmbeddingWordSimilarityReq {
    textEmbeddingSetting?: textEmbeddingSetting;
    wordText1: string;
    wordText2: string;
}
export interface textEmbeddingSentenceSimilarityReq {
    textEmbeddingSetting?: textEmbeddingSetting;
    sentenceText1: string;
    sentenceText2: string;
}
export interface textEmbeddingSimilarWordsReq {
    textEmbeddingSetting?: textEmbeddingSetting;
    multipleText: string;
    similarityNumber: number;
}
export interface textEmbeddingWordBatchReq {
    textEmbeddingSetting?: textEmbeddingSetting;
    batchText: string;
}
export interface textEmbeddingSetting {
    language: string;
}
export interface ttsEngineReq {
    language?: string | null;
}
export interface ttsReq {
    text: string;
    mlConfigs: MLConfigs;
    queuingMode: MLTtsConstants;
}
export interface MLConfigs {
    language: MLTtsConstants;
    person: MLTtsConstants;
    speed: number;
    volume: number;
    synthesizeMode: MLTtsConstants;
}
export declare enum MLTtsConstants {
    TTS_EN_US = "en-US",
    TTS_LAN_ES_ES = "es-ES",
    TTS_LAN_FR_FR = "fr-FR",
    TTS_LAN_DE_DE = "de-DE",
    TTS_LAN_IT_IT = "it-IT",
    TTS_ZH_HANS = "zh-Hans",
    TTS_SPEAKER_FEMALE_EN = "Female-en",
    TTS_SPEAKER_FEMALE_ZH = "Female-zh",
    TTS_SPEAKER_MALE_EN = "Male-en",
    TTS_SPEAKER_MALE_ZH = "Male-zh",
    TTS_SPEAKER_FEMALE_DE = "de-DE-st-1",
    TTS_SPEAKER_FEMALE_ES = "it-IT-st-1",
    TTS_SPEAKER_FEMALE_IT = "es-ES-st-1",
    TTS_SPEAKER_FEMALE_FR = "fr-FR-st-1",
    TTS_SPEAKER_OFFLINE_EN_US_MALE_BOLT = "en-US-st-bolt-2",
    TTS_SPEAKER_OFFLINE_ZH_HANS_FEMALE_EAGLE = "zh-Hans-st-eagle-1",
    TTS_SPEAKER_OFFLINE_ZH_HANS_MALE_EAGLE = "zh-Hans-st-eagle-2",
    TTS_SPEAKER_OFFLINE_EN_US_FEMALE_EAGLE = "en-US-st-eagle-1",
    TTS_SPEAKER_OFFLINE_EN_US_MALE_EAGLE = "en-US-st-eagle-2",
    TTS_SPEAKER_OFFLINE_EN_US_FEMALE_BEE = "en-US-st-bee-1",
    TTS_SPEAKER_OFFLINE_FR_FR_FEMALE_BEE = "fr-FR-st-bee-1",
    TTS_SPEAKER_OFFLINE_ES_ES_FEMALE_BEE = "es-ES-st-bee-1",
    TTS_SPEAKER_OFFLINE_DE_DE_FEMALE_BEE = "de-DE-st-bee-1",
    TTS_SPEAKER_OFFLINE_IT_IT_FEMALE_BEE = "it-IT-st-bee-1",
    TTS_SPEAKER_OFFLINE_ZH_HANS_FEMALE_BOLT = "zh-Hans-st-bolt-1",
    TTS_SPEAKER_OFFLINE_ZH_HANS_MALE_BOLT = "zh-Hans-st-bolt-2",
    TTS_SPEAKER_OFFLINE_EN_US_FEMALE_BOLT = "en-US-st-bolt-1",
    TTS_ONLINE_MODE = "online",
    TTS_OFFLINE_MODE = "offline",
    QUEUE_APPEND = 0,
    QUEUE_FLUSH = 1,
    EXTERNAL_PLAYBACK = 2,
    OPEN_STREAM = 4
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
export declare enum RectStyle {
    STROKE = 1,
    FILL = 2,
    FILL_AND_STROKE = 3
}
export interface MLAftResult {
    eventName: string;
    text: string;
    taskId: string;
    complete: boolean;
}
export interface MLAftErrorResult {
    eventName: string;
    taskId: string;
    errorCode: MLAftErrorCodes;
    message: string;
}
export declare enum MLAftErrorCodes {
    EROTSUPPORTED = 11101,
    LANGUAGE_CODE_NOTSUPPORTED = 11102,
    ERR_AUDIO_FILE_SIZE_OVERFLOW = 11103,
    ERR_AUDIO_LENGTH_OVERFLOW = 11104,
    ERR_FILE_NOT_FOUND = 11105,
    ERR_ILLEGAL_PARAMETER = 11106,
    ERR_ENGINE_BUSY = 11107,
    ERR_NETCONNECT_FAILED = 11108,
    ERR_RESULT_WHEN_UPLOADING = 11109,
    ERR_TASK_NOT_EXISTED = 11110,
    ERR_AUDIO_TRANSCRIPT_FAILED = 11111,
    ERR_AUDIO_INIT_FAILED = 11112,
    ERR_AUDIO_UPLOAD_FAILED = 11113,
    ERR_TASK_ALREADY_INPROGRESS = 11114,
    ERR_NO_ENOUGH_STORAGE = 11115,
    ERR_AUTHORIZE_FAILED = 11119,
    ERR_SERVICE_CREDIT = 11122,
    ERR_INTERNAL = 11198,
    ERR_UNKNOWN = 11199
}
export interface MLAftEventResult {
    eventName: string;
    taskId: string;
    ext: string;
    eventId: string;
}
export declare enum MLAFTEventCodes {
    PAUSE_EVENT = 2,
    STOP_EVENT = 3,
    UPLOADED_EVENT = 1
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
export interface MLCustomBankCard {
    number: string;
    expire: string;
    issuer: string;
    type: string;
    organization: string;
    originalBitmap: any;
    numberBitmap: any;
}
export interface MLFace {
    Result?: (ResultEntity)[] | null;
}
export interface ResultEntity {
    opennessOfLeftEye: number;
    tracingIdentity: number;
    possibilityOfSmiling: number;
    opennessOfRightEye: number;
    rotationAngleX: number;
    rotationAngleY: number;
    rotationAngleZ: number;
    height: number;
    width: number;
    border: Border;
    features: Features;
    emotions: Emotions;
    allPoints?: (AllPointsEntity)[] | null;
    keyPoints?: (null)[] | null;
    faceShapeList?: (FaceShapeListEntity)[] | null;
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
export interface Features {
    sunGlassProbability: number;
    sexProbability: number;
    rightEyeOpenProbability: number;
    moustacheProbability: number;
    leftEyeOpenProbability: number;
    age: number;
    hatProbability: number;
}
export interface Emotions {
    surpriseProbability: number;
    smilingProbability: number;
    sadProbability: number;
    neutralProbability: number;
    fearProbability: number;
    disgustProbability: number;
    angryProbability: number;
}
export interface AllPointsEntity {
    X: number;
    Y: number;
}
export interface FaceShapeListEntity {
    points?: (PointsEntity)[] | null;
    faceShapeType: number;
}
export interface PointsEntity {
    X: number;
    Y: number;
    Z: number;
}
export interface MLImageClassification {
    result?: (ResultEntity)[] | null;
}
export interface ResultEntity {
    identity: string;
    name: string;
    possibility: number;
    hashCode: number;
}
export interface MLDocument {
    stringValue: string;
    blocks?: (Blocks)[];
}
export interface Blocks {
    stringValue: string;
    possibility: number;
    border: Border;
    interval: Interval;
    sections?: (Sections)[];
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
export interface Interval {
    intervalType: number;
    isTextFollowed: boolean;
}
export interface Sections {
    stringValue: string;
    border: Border;
    interval: Interval;
    possibility: number;
    languageList?: (LanguageList)[];
    lineList?: (LineList)[];
}
export interface LanguageList {
    language: string;
}
export interface LineList {
    stringValue: string;
    border: Border;
    possibility: number;
    languageList?: (LanguageList)[];
    wordList?: (WordList)[];
}
export interface WordList {
    stringValue: string;
    border: Border;
    characterList?: (CharacterList)[];
    languageList?: (LanguageList)[];
    possibility?: number;
    interval?: Interval;
}
export interface CharacterList {
    stringValue: string;
    possibility: number;
    border?: Border;
    languageList?: (LanguageList)[];
    interval?: Interval;
}
export interface MLDocumentSkewDetectResult {
    resultCode: number;
    bitmap: any;
}
export interface MLGcrCaptureResult {
    text: string;
    cardBitmap: any;
}
export interface MLHandKeypoints {
    handkeyPoints: handkeyPoints;
    rect: Rect;
    score: number;
}
export interface handkeyPoints {
    x: number;
    y: number;
    score: number;
    type: number;
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
export interface MLImageSegmentation {
    bitmapForeground: any;
    bitmapGrayscale: any;
    masks: number;
    bitmapOriginal: any;
}
export interface MLRemoteLandmark {
    landmark: string;
    landmarkIdentity: string;
    possibility: number;
    border: Border;
    positionInfo?: (PositionInfoEntity)[] | null;
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
export interface PositionInfoEntity {
    lng: number;
    lat: number;
}
export interface MLRemoteLangDetection {
    langCode: string;
    probability: number;
    hashCode: number;
}
export interface MLlangDetectionWithFirstDetect {
    langCode: string;
}
export interface MLLivenessCaptureResult {
    bitmap: Bitmap;
    isLive: boolean;
    pitch: number;
    roll: number;
    score: number;
    yaw: number;
}
export interface Bitmap {
    mGalleryCached: boolean;
    mHeight: number;
    mNativePtr: number;
    mWidth: number;
}
export interface MLObject {
    typeIdentity: number;
    typePossibility: number;
    border: Border;
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
export interface MLSkeleton {
    joints: joints;
}
export interface joints {
    x: number;
    y: number;
    score: number;
    type: number;
    hashCode: number;
}
export interface MLText {
    stringValue: string;
    blocks?: (Blocks)[];
}
export interface Blocks {
    contents?: (Contents)[];
}
export interface Contents {
    stringValue: string;
    rotatingDegree: number;
    isVertical: boolean;
    language: string;
    border: Border;
    contents?: (Contents)[];
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
export interface Contents {
    stringValue: string;
    border: Border;
    language: string;
    languageList?: (LanguageList)[];
    vertexes?: (Vertexes)[];
}
export interface LanguageList {
    language: string;
}
export interface Vertexes {
    x: number;
    y: number;
    describeContents: number;
}
export interface MLTtsResult {
    eventName: string;
    taskID: string;
    start: number;
    end: number;
}
export interface MLSceneDetectionResult {
    resultString: string;
    confidence: number;
}
export interface LiveScenAnalyser {
    analyseList: [AnalyseList];
    frameProperty: FrameProperty;
}
export interface AnalyseList {
    0: a;
}
export interface a {
    result: string;
    confidence: number;
}
export interface FrameProperty {
    ext: string;
    formatType: number;
    height: number;
    itemIdentity: number;
    quadrant: number;
    timestamp: number;
    width: number;
}
export interface MLSoundDectResult {
    soundType: MLSoundDectSoundTypeResult;
    eventName: string;
}
export declare enum MLSoundDectSoundTypeResult {
    SOUND_DECT_ERROR_NO_MEM = 12201,
    SOUND_DECT_ERROR_FATAL_ERROR = 12202,
    SOUND_DECT_ERROR_AUDIO = 12203,
    SOUND_DECT_ERROR_INTERNAL = 12298,
    SOUND_EVENT_TYPE_LAUGHTER = 0,
    SOUND_EVENT_TYPE_BABY_CRY = 1,
    SOUND_EVENT_TYPE_SNORING = 2,
    SOUND_EVENT_TYPE_SNEEZE = 3,
    SOUND_EVENT_TYPE_SCREAMING = 4,
    SOUND_EVENT_TYPE_MEOW = 5,
    SOUND_EVENT_TYPE_BARK = 6,
    SOUND_EVENT_TYPE_WATER = 7,
    SOUND_EVENT_TYPE_CAR_ALARM = 8,
    SOUND_EVENT_TYPE_DOOR_BELL = 9,
    SOUND_EVENT_TYPE_KNOCK = 10,
    SOUND_EVENT_TYPE_ALARM = 11,
    SOUND_EVENT_TYPE_STEAM_WHISTLE = 12
}
export interface MLVocabularyVersion {
    dictionaryDimension: string;
    dictionarySize: string;
    versionNo: string;
}
export interface MLWordtoVectorResult {
    result: Result;
}
export interface Result {
    wordText: string;
    vector: string;
}
export interface MlSentencetoVectorResult {
    sentence: string;
    vector: string;
}
export interface MLWordSimilarityResult {
    wordSimilarity: number;
}
export interface MLSentenceSimilarityResult {
    sentenceSimilarity: number;
}
export interface MLSimilarWordsResult {
    result?: (string)[] | null;
}
export interface MLFormRecogitionResult {
    retCode: number;
    tableContent: TableContent;
}
export interface TableContent {
    tableCount: number;
    tables?: (TablesEntity)[] | null;
}
export interface TablesEntity {
    tableID: number;
    headerInfo: string;
    footerInfo: string;
    tableBody?: (TableBodyEntity)[] | null;
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
export interface MLProductVisionResult {
    type: string;
    border: Border;
    list?: (ListEntity)[] | null;
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
export interface ListEntity {
    customcontent: string;
    imagelist?: (ImagelistEntity)[] | null;
    possibility: number;
    productURL: string;
}
export interface ImagelistEntity {
    imageId: string;
    possibility: number;
    productId: string;
}
export declare class HMSMLKit extends IonicNativePlugin {
    MLFaceSetting: typeof MLFaceSetting;
    MLLocalTextSetting: typeof MLLocalTextSetting;
    MLTextConfig: typeof MLTextConfig;
    MLRemoteTextSetting: typeof MLRemoteTextSetting;
    MLImageClassificationConfig: typeof MLImageClassificationConfig;
    MLImageSegmentationSetting: typeof MLImageSegmentationSetting;
    MLImageSegmentationScene: typeof MLImageSegmentationScene;
    MLRemoteLandmarkSetting: typeof MLRemoteLandmarkSetting;
    MLBcrCaptureConfig: typeof MLBcrCaptureConfig;
    MLGcrCaptureUIConfig: typeof MLGcrCaptureUIConfig;
    MLBcrResultConfig: typeof MLBcrResultConfig;
    HandkeyPointConfig: typeof HandkeyPointConfig;
    ImgSuperResolutionConfig: typeof ImgSuperResolutionConfig;
    MlObjectAnalyserConfig: typeof MlObjectAnalyserConfig;
    DownloadStrategyCustom: typeof DownloadStrategyCustom;
    FEATURE: typeof FEATURE;
    LANGUAGE: typeof LANGUAGE;
    MLTtsConstants: typeof MLTtsConstants;
    Colors: typeof Colors;
    RectStyle: typeof RectStyle;
    MLSkeletonConfig: typeof MLSkeletonConfig;
    MLFlashMode: typeof MLFlashMode;
    MLLensType: typeof MLLensType;
    MLAnalyzerName: typeof MLAnalyzerName;
    MLFrame: typeof MLFrame;
    MLFormRecogitionConfig: typeof MLFormRecogitionConfig;
    MLFaceConfigs: typeof MLFaceConfigs;
    MLProductConfig: typeof MLProductConfig;
    MLLivenessConfig: typeof MLLivenessConfig;
    MLRttLanguages: typeof MLRttLanguages;
    MLRttScenes: typeof MLRttScenes;
    gcrCaptureType: typeof gcrCaptureType;
    syncType: typeof syncType;
    /**
     * Adjusts the focal length of the camera based on the scaling coefficient (digital zoom).
     * @param  {doZoomReq} doZoomReq Reperesents the necessary parameters.
     * @returns Promise<any>
     */
    doZoom(doZoomReq: doZoomReq): Promise<any>;
    /**
     * Monitors photographing.
     * @returns Promise<any>
     */
    photograph(): Promise<any>;
    /**
     * Close lens engine.
     * @returns Promise<any>
     */
    destroy(): Promise<any>;
    /**
     * Obtains the size of the preview image of a camera.
     * @returns Promise<any>
     */
    getDisplayDimension(): Promise<any>;
    /**
     * Obtains the selected camera type.
     * @returns Promise<any>
     */
    getLensType(): Promise<any>;
    /**
     * It checks the permissions required to use this Kit.
     * @param  {CheckPermissionReq} permissionListInput Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    hasPermissions(permissionListReq: CheckPermissionReq): Promise<any>;
    /**
     * It gets the necessary permissions.
     * @param  {RequestPermissionReq} permissionListInput Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    requestPermissions(permissionListInput: RequestPermissionReq): Promise<any>;
    /**
     * It sets Api Key or access token for application.
     * @param  {configReq} params Represents your API_KEY.
     * @returns Promise<any>
     */
    serviceInitializer(params: configReq): Promise<any>;
    /**
     * This service recognize the image from the picture and return what the picture can be with the percentages. Use ML Libraries.
     * @param  {ownCustomModelReq | downloadModelReq} customModelReq Represents the parameter required for custom model analyser.
     * @returns Promise<any>
     */
    customModelAnalyser(customModelReq: ownCustomModelReq | downloadModelReq): Promise<any>;
    /**
     * Obtains Frame.
     * @param  {mlFrameReq} mlFrameReq Represents the parameter required.
     * @returns Promise<any>
     */
    mlFrame(mlFrameReq: mlFrameReq): Promise<any>;
    /**
     * An app information class used to store basic information about apps with the HMS Core ML SDK integrated and complete the initialization of ML Kit. When using cloud services of the ML Kit, you need to set the apiKey of your app.
     * @param  {appSettingReq} appSettingReq Represents the parameter required.
     * @returns Promise<any>
     */
    appSetting(appSettingReq: appSettingReq): Promise<any>;
    /**
     * Determines whether to collect statistics on the current app.
     * @param {any} any
     * @returns Promise<any>
     */
    setStatistic(any: any): Promise<any>;
    /**
     * Determines whether to collect statistics on the current app.
     ** @param {any} any
     *  @returns Promise<any>
     */
    getStatistic(any: any): Promise<any>;
    /**
     * This service enable logger service.
     * @returns Promise<any>
     */
    enableLogger(): Promise<any>;
    /**
     * This service disable logger service.
     * @returns Promise<any>
     */
    disableLogger(): Promise<any>;
}
export declare abstract class MLLive {
    private arScene;
    constructor(scene: string, divId: string);
    on(call: (value: any) => void): Promise<void>;
    startARScene(config?: MLconfig, bounds?: MLBounds): Promise<void>;
    destroy(): Promise<void>;
    setConfig(config: MLconfig): Promise<void>;
    scroll(): Promise<void>;
}
export declare class liveEngineAnalyser extends MLLive {
    constructor(divId: string);
}
export declare class HMSFaceBodyProvider extends IonicNativePlugin {
    MLFaceSetting: typeof MLFaceSetting;
    MLLocalTextSetting: typeof MLLocalTextSetting;
    MLTextConfig: typeof MLTextConfig;
    MLRemoteTextSetting: typeof MLRemoteTextSetting;
    MLImageClassificationConfig: typeof MLImageClassificationConfig;
    MLImageSegmentationSetting: typeof MLImageSegmentationSetting;
    MLImageSegmentationScene: typeof MLImageSegmentationScene;
    MLRemoteLandmarkSetting: typeof MLRemoteLandmarkSetting;
    MLBcrCaptureConfig: typeof MLBcrCaptureConfig;
    MLGcrCaptureUIConfig: typeof MLGcrCaptureUIConfig;
    MLBcrResultConfig: typeof MLBcrResultConfig;
    HandkeyPointConfig: typeof HandkeyPointConfig;
    ImgSuperResolutionConfig: typeof ImgSuperResolutionConfig;
    MlObjectAnalyserConfig: typeof MlObjectAnalyserConfig;
    DownloadStrategyCustom: typeof DownloadStrategyCustom;
    FEATURE: typeof FEATURE;
    LANGUAGE: typeof LANGUAGE;
    MLTtsConstants: typeof MLTtsConstants;
    Colors: typeof Colors;
    RectStyle: typeof RectStyle;
    MLSkeletonConfig: typeof MLSkeletonConfig;
    MLFlashMode: typeof MLFlashMode;
    MLLensType: typeof MLLensType;
    MLAnalyzerName: typeof MLAnalyzerName;
    MLFrame: typeof MLFrame;
    MLFormRecogitionConfig: typeof MLFormRecogitionConfig;
    MLFaceConfigs: typeof MLFaceConfigs;
    MLProductConfig: typeof MLProductConfig;
    MLLivenessConfig: typeof MLLivenessConfig;
    MLRttLanguages: typeof MLRttLanguages;
    MLRttScenes: typeof MLRttScenes;
    gcrCaptureType: typeof gcrCaptureType;
    syncType: typeof syncType;
    /**
     * The face detection service can detect the face contour, recognize facial features, and determine facial expressions for a person.
     * @param  {faceReq} faceReq Represents the parameter required for face detection.
     * @returns Promise<StillFaceAnalyser>
     */
    stillFaceAnalyser(faceReq: faceReq): Promise<MLFace>;
    /**
     * This method gives the information of the face recognition service.
     * @returns Promise<any>
     */
    stilFaceAnalyserInfo(): Promise<any>;
    /**
     * This method stop face recognition service.
     * @returns Promise<any>
     */
    stopStillFaceAnalyser(): Promise<any>;
    /**
     The skeleton detection service detects and locates key points of the human body, such as the top of the head, neck, shoulder, elbow, wrist, hip, knee, and ankle.
     * @param  {stillSkeletonReq |stillSkeletonSimilarityReq} stillSkeletonReq Represents the parameter required for still skeleton detection.
     * @returns Promise<StillSkeletonAnalyser>
     */
    stillSkeletonAnalyser(stillSkeletonReq: stillSkeletonReq | stillSkeletonSimilarityReq): Promise<MLSkeleton>;
    /**
     * The liveness detection service supports silent liveness detection and captures faces in real time. It can determine whether a face is of a real user or is a face attack
     * (for example, face recapture image, face recapture video, or face mask) without requiring the user to follow specific instructions.
     * @param  {livenessDetectionReq} livenessDetectionReq Represents the parameter required.
     * @returns Promise<LiveLivenessAnalyser>
     */
    liveLivenessAnalyser(livenessDetectionReq: livenessDetectionReq): Promise<MLLivenessCaptureResult>;
    /**
     * This service can detects 21 hand keypoints (including fingertips, knuckles, and wrists) and return positions of the keypoints.
     * @param  {stillHandKeypointReq } stillHandKeypointReq Represents the parameter required for still handkey analyser.
     * @returns Promise<StillHandKeyAnalyser>
     */
    stillHandkeyAnalyser(stillHandKeypointReq: stillHandKeypointReq): Promise<MLHandKeypoints>;
    /**
     * This method stop hand analyzer service.
     * @returns Promise<any>
     */
    stopStillHandKeyAnalyser(): Promise<any>;
    /**
     * This method returns face analyzer settings.
     * @returns Promise<any>
     */
    getFaceAnalyserSetting(): Promise<any>;
    /**
     * This method  returns hand analyzer settings.
     * @returns Promise<any>
     */
    getHandKeyAnalyserSetting(): Promise<any>;
    /**
     * This method stop skeleton analyzer service.
     * @returns Promise<any>
     */
    stopStillSkeletonAnalyser(): Promise<any>;
}
export declare class HMSImageServiceProvider extends IonicNativePlugin {
    MLFaceSetting: typeof MLFaceSetting;
    gcrCaptureType: typeof gcrCaptureType;
    syncType: typeof syncType;
    MLLocalTextSetting: typeof MLLocalTextSetting;
    MLTextConfig: typeof MLTextConfig;
    MLRemoteTextSetting: typeof MLRemoteTextSetting;
    MLImageClassificationConfig: typeof MLImageClassificationConfig;
    MLImageSegmentationSetting: typeof MLImageSegmentationSetting;
    MLImageSegmentationScene: typeof MLImageSegmentationScene;
    MLRemoteLandmarkSetting: typeof MLRemoteLandmarkSetting;
    MLBcrCaptureConfig: typeof MLBcrCaptureConfig;
    MLGcrCaptureUIConfig: typeof MLGcrCaptureUIConfig;
    MLBcrResultConfig: typeof MLBcrResultConfig;
    HandkeyPointConfig: typeof HandkeyPointConfig;
    ImgSuperResolutionConfig: typeof ImgSuperResolutionConfig;
    MlObjectAnalyserConfig: typeof MlObjectAnalyserConfig;
    DownloadStrategyCustom: typeof DownloadStrategyCustom;
    FEATURE: typeof FEATURE;
    LANGUAGE: typeof LANGUAGE;
    MLTtsConstants: typeof MLTtsConstants;
    Colors: typeof Colors;
    RectStyle: typeof RectStyle;
    MLSkeletonConfig: typeof MLSkeletonConfig;
    MLFlashMode: typeof MLFlashMode;
    MLLensType: typeof MLLensType;
    MLAnalyzerName: typeof MLAnalyzerName;
    MLFrame: typeof MLFrame;
    MLFormRecogitionConfig: typeof MLFormRecogitionConfig;
    MLFaceConfigs: typeof MLFaceConfigs;
    MLProductConfig: typeof MLProductConfig;
    MLLivenessConfig: typeof MLLivenessConfig;
    MLRttLanguages: typeof MLRttLanguages;
    MLRttScenes: typeof MLRttScenes;
    /**
     * This method represents the image classification SDK.
     * @param  {localImageClassificationReq|remoteImageClassificationReq} imageClassificationInput Represents the parameter required for classify objects.
     * @returns Promise<ImageClassificationAnalyser>
     */
    imageClassificationAnalyser(imageClassificationInput: localImageClassificationReq | remoteImageClassificationReq): Promise<MLImageClassification>;
    /**
     * This method stop image classification analyser.
     * @returns Promise<string>
     */
    stopImageClassificationAnalyser(): Promise<string>;
    /**
     * The image segmentation service segments same elements (such as human body, plant, and sky) from an image. The elements supported include human body, sky, plant, food and others.
     * @param  {imgSegmentationReq} imgSegmentationReq Represents the parameter required for image segmentation.
     * @returns Promise<SegmentationAnalyser>
     */
    imgSegmentation(imgSegmentationReq: imgSegmentationReq): Promise<MLImageSegmentation>;
    /**
     * This method stop image segmentation service.
     * @returns Promise<any>
     */
    stopImgSegmentation(): Promise<any>;
    /**
     * The landmark recognition service enables you to obtain the landmark name, landmark longitude and latitude, and confidence of the input image.
     * @param  {imgLandMarkReq} imgLandMarkReq Represents the parameter required for image landmark analyser.
     * @returns Promise<ImageLandmarkAnalyser>
     */
    imgLandMarkAnalyser(imgLandMarkReq: imgLandMarkReq): Promise<MLRemoteLandmark>;
    /**
     * This method stop image landmark analyser service.
     * @returns Promise<any>
     */
    imgLandMarkAnalyserStop(): Promise<any>;
    /**
     * The object detection service can detect and track multiple objects in an image.
     * @param  {objectReq} objectReq Represents the parameter required for object detection.
     * @returns Promise<ImageObjectAnalyser>
     */
    objectAnalyser(objectReq: objectReq): Promise<MLObject>;
    /**
     * The scene detection service can classify the scenario content of images and add labels, such as outdoor scenery, indoor places, and buildings, to help understand the image content.
     *   @param  {stillSceneReq} stillSceneReq Represents the parameter required for Scene analyser.
     *  @returns Promise <any>
     */
    stillSceneAnalyser(stillSceneReq: stillSceneReq): Promise<MLSceneDetectionResult>;
    /**
     This service can automatically identify the location of a document in an image and adjust the shooting angle to the angle facing the document, even if the document is tilted.
     * @param  {documentSkewCorrectionReq} documentSkewCorrectionReq Represents the parameter required for document skew correction.
     * @returns Promise<DocumentSkewAnalyser>
     */
    documentSkewCorrectionAnalyser(documentSkewCorrectionReq: documentSkewCorrectionReq): Promise<MLDocumentSkewDetectResult>;
    /**
     * This service can zoom in an image that contains text and significantly improve the definition of text in the image.
     * @param  {textImageSuperResolutionReq} textImageSuperResolutionReq Represents the parameter required for Text Image Super Resolution.
     * @returns Promise<any>
     */
    textImageSuperResolution(textImageSuperResolutionReq: textImageSuperResolutionReq): Promise<any>;
    /**
     * This service provides the 1x super-resolution capabilities. 1x super-resolution removes the compression noise.
     * @param  {imageSuperResolutionReq} imageSuperResolutionReq Represents the parameter required for Image Super Resolution.
     * @returns Promise<any>
     */
    imageSuperResolution(imageSuperResolutionReq: imageSuperResolutionReq): Promise<any>;
    /**
     * Represents the image-based product detection API of HUAWEI ML Kit.
     * @param  {productReq} productReq Represents the parameter required.
     * @returns Promise<any>
     */
    productVisionAnalyser(productReq: productReq): Promise<any>;
    /**
     * This method stop object analyser service.
     * @returns Promise<any>
     */
    objectAnalyserStop(): Promise<any>;
    /**
     * This method stop product analyser service.
     * @returns Promise<any>
     */
    productAnalyserStop(): Promise<any>;
    /**
     * This method stop document skew analyser service.
     * @returns Promise<any>
     */
    docSkewAnalyserStop(): Promise<any>;
    /**
     * This method stop TISR analyser service.
     * @returns Promise<any>
     */
    TISRAnalyserStop(): Promise<any>;
    /**
     * This method stop ISR analyser service.
     * @returns Promise<any>
     */
    ISRAnalyserStop(): Promise<any>;
    /**
     * This method stop scene analyser service.
     * @returns Promise<any>
     */
    stillSceneAnalyserStop(): Promise<any>;
    /**
     * This method returns image classification settings.
     * @returns Promise<any>
     */
    getImageClassificationAnalyserSetting(): Promise<any>;
    /**
     *  This method returns ISR settings.
     * @returns Promise<any>
     */
    getISRSetting(): Promise<any>;
    /**
     *  This method returns segmentation settings.
     * @returns Promise<any>
     */
    getSegmentationSetting(): Promise<any>;
    /**
     *  This method returns landmark settings.
     * @returns Promise<any>
     */
    getLandmarkSetting(): Promise<any>;
    /**
     *  This method returns object settings.
     * @returns Promise<any>
     */
    getObjectSetting(): Promise<any>;
}
export declare class HMSLanguageServiceProvider extends IonicNativePlugin {
    MLFaceSetting: typeof MLFaceSetting;
    gcrCaptureType: typeof gcrCaptureType;
    syncType: typeof syncType;
    MLLocalTextSetting: typeof MLLocalTextSetting;
    MLTextConfig: typeof MLTextConfig;
    MLRemoteTextSetting: typeof MLRemoteTextSetting;
    MLImageClassificationConfig: typeof MLImageClassificationConfig;
    MLImageSegmentationSetting: typeof MLImageSegmentationSetting;
    MLImageSegmentationScene: typeof MLImageSegmentationScene;
    MLRemoteLandmarkSetting: typeof MLRemoteLandmarkSetting;
    MLBcrCaptureConfig: typeof MLBcrCaptureConfig;
    MLGcrCaptureUIConfig: typeof MLGcrCaptureUIConfig;
    MLBcrResultConfig: typeof MLBcrResultConfig;
    HandkeyPointConfig: typeof HandkeyPointConfig;
    ImgSuperResolutionConfig: typeof ImgSuperResolutionConfig;
    MlObjectAnalyserConfig: typeof MlObjectAnalyserConfig;
    DownloadStrategyCustom: typeof DownloadStrategyCustom;
    FEATURE: typeof FEATURE;
    LANGUAGE: typeof LANGUAGE;
    MLTtsConstants: typeof MLTtsConstants;
    Colors: typeof Colors;
    RectStyle: typeof RectStyle;
    MLSkeletonConfig: typeof MLSkeletonConfig;
    MLFlashMode: typeof MLFlashMode;
    MLLensType: typeof MLLensType;
    MLAnalyzerName: typeof MLAnalyzerName;
    MLFrame: typeof MLFrame;
    MLFormRecogitionConfig: typeof MLFormRecogitionConfig;
    MLFaceConfigs: typeof MLFaceConfigs;
    MLProductConfig: typeof MLProductConfig;
    MLLivenessConfig: typeof MLLivenessConfig;
    MLRttLanguages: typeof MLRttLanguages;
    MLRttScenes: typeof MLRttScenes;
    /**
     * The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result.
     * @param  {textEmbeddingDicInfoReq} textEmbeddingDicInfoReq Represents the parameter required for Text Embedding.
     * @returns Promise<any>
     */
    textEmbeddingDictionaryInfo(textEmbeddingDicInfoReq: textEmbeddingDicInfoReq): Promise<MLVocabularyVersion>;
    /**
     * Asynchronously queries word vectors in batches. (The number of words ranges from 1 to 500.)
     * @param  {textEmbeddingWordBatchReq} textEmbeddingWordBatchReq Represents the parameter required for Text Embedding.
     * @returns Promise<any>
     */
    textEmbeddingWordBatchVector(textEmbeddingWordBatchReq: textEmbeddingWordBatchReq): Promise<any>;
    /**
   * The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result.
   * @param  {textEmbeddingWordtoVectorReq} textEmbeddingWordtoVectorReq Represents the parameter required for Text Embedding.
   * @returns Promise<any>
   */
    textEmbeddingWordtoVector(textEmbeddingWordtoVectorReq: textEmbeddingWordtoVectorReq): Promise<MLWordtoVectorResult>;
    /**
   * The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result.
   * @param  {textEmbeddingSentencetoVectorReq} textEmbeddingSentencetoVectorReq Represents the parameter required for Text Embedding.
   * @returns Promise<any>
   */
    textEmbeddingSentencetoVector(textEmbeddingSentencetoVectorReq: textEmbeddingSentencetoVectorReq): Promise<MlSentencetoVectorResult>;
    /**
   * The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result.
   * @param  {textEmbeddingWordSimilarityReq} textEmbeddingWordSimilarityReq Represents the parameter required for Text Embedding.
   * @returns Promise<any>
   */
    textEmbeddingWordSimilarty(textEmbeddingWordSimilarityReq: textEmbeddingWordSimilarityReq): Promise<MLWordSimilarityResult>;
    /**
   * The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result.
   * @param  {textEmbeddingSentenceSimilarityReq} textEmbeddingSentenceSimilarityReq Represents the parameter required for Text Embedding.
   * @returns Promise<any>
   */
    textEmbeddingSentenceSimilarty(textEmbeddingSentenceSimilarityReq: textEmbeddingSentenceSimilarityReq): Promise<MLSentenceSimilarityResult>;
    /**
   * The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result.
   * @param  {textEmbeddingSimilarWordsReq} textEmbeddingSimilarWordsReq Represents the parameter required for Text Embedding.
   * @returns Promise<any>
   */
    textEmbeddingSimilarWords(textEmbeddingSimilarWordsReq: textEmbeddingSimilarWordsReq): Promise<MLSimilarWordsResult>;
    /**
   * This method returns textembedding settings.
   * @returns Promise<any>
   */
    getTextEmbeddingSetting(): Promise<any>;
}
export declare class HMSTextServiceProvider extends IonicNativePlugin {
    MLFaceSetting: typeof MLFaceSetting;
    gcrCaptureType: typeof gcrCaptureType;
    syncType: typeof syncType;
    MLLocalTextSetting: typeof MLLocalTextSetting;
    MLTextConfig: typeof MLTextConfig;
    MLRemoteTextSetting: typeof MLRemoteTextSetting;
    MLImageClassificationConfig: typeof MLImageClassificationConfig;
    MLImageSegmentationSetting: typeof MLImageSegmentationSetting;
    MLImageSegmentationScene: typeof MLImageSegmentationScene;
    MLRemoteLandmarkSetting: typeof MLRemoteLandmarkSetting;
    MLBcrCaptureConfig: typeof MLBcrCaptureConfig;
    MLGcrCaptureUIConfig: typeof MLGcrCaptureUIConfig;
    MLBcrResultConfig: typeof MLBcrResultConfig;
    HandkeyPointConfig: typeof HandkeyPointConfig;
    ImgSuperResolutionConfig: typeof ImgSuperResolutionConfig;
    MlObjectAnalyserConfig: typeof MlObjectAnalyserConfig;
    DownloadStrategyCustom: typeof DownloadStrategyCustom;
    FEATURE: typeof FEATURE;
    LANGUAGE: typeof LANGUAGE;
    MLTtsConstants: typeof MLTtsConstants;
    Colors: typeof Colors;
    RectStyle: typeof RectStyle;
    MLSkeletonConfig: typeof MLSkeletonConfig;
    MLFlashMode: typeof MLFlashMode;
    MLLensType: typeof MLLensType;
    MLAnalyzerName: typeof MLAnalyzerName;
    MLFrame: typeof MLFrame;
    MLFormRecogitionConfig: typeof MLFormRecogitionConfig;
    MLFaceConfigs: typeof MLFaceConfigs;
    MLProductConfig: typeof MLProductConfig;
    MLLivenessConfig: typeof MLLivenessConfig;
    MLRttLanguages: typeof MLRttLanguages;
    MLRttScenes: typeof MLRttScenes;
    /**
     * This method start the Text analyzer.
     * @param  {localImageTextReq|remoteImageTextReq} ImageTextAnalyserInput Reperesents the necessary parameters to convert images to text format.
     * @returns Promise <TextAnalyser>
     */
    imageTextAnalyser(ImageTextAnalyserInput: localImageTextReq | remoteImageTextReq): Promise<MLText>;
    /**
     * This method stop the Text analyzer.
     * @returns Promise<any>
     */
    stopTextAnalyser(): Promise<any>;
    /**
     * This method gives Text Analyser information.
     * @returns Promise<any>
     */
    getTextAnalyserInfo(): Promise<any>;
    /**
     * This method provides a document recognition component that recognizes text from images of documents.
     * @param  {documentImageAnalyserReq} documentImageAnalyserReq Reperesents the necessary parameter to convert document images to text format.
     * @returns Promise<DocumentAnalyser>
     */
    documentImageAnalyser(documentImageAnalyserReq: documentImageAnalyserReq): Promise<MLDocument>;
    /**
     * This method stop the Document analyzer.
     * @returns Promise<any>
     */
    stopDocumentImageAnalyser(): Promise<any>;
    /**
     * This method close the Document analyzer.
     * @returns Promise<any>
     */
    closeDocumentImageAnalyser(): Promise<any>;
    /**
     * This method returns the Document analyzer setting.
     * @returns Promise<any>
     */
    getDocumentImageAnalyserSetting(): Promise<any>;
    /**
     * This method returns the Image analyzer setting.
     * @returns Promise<any>
     */
    getTextAnalyserSetting(): Promise<any>;
    /**
     * This method returns the GCR setting.
     * @returns Promise<any>
     */
    getGCRSetting(): Promise<any>;
    /**
     * This method stop the Form Recognition Analyzer.
     * @returns Promise<any>
     */
    stopFormRecognitionAnalyser(): Promise<any>;
    /**
     * The bank card recognition service recognizes bank cards in camera streams within angle offset of 15 degrees and extracts key information such as card number and validity period.
     * @param  {bankCardSDKDetectorReq|bankCardPluginDetectorReq} bankCardDetecterInput Represents the parameter required for bank card recognition.
     * @returns Promise<BankCardAnalyser> | Promise<BankCardAnalyser>
     */
    bankCardDetector(bankCardDetecterInput: bankCardSDKDetectorReq | bankCardPluginDetectorReq): Promise<MLBankCard>;
    /**
     * This method stop bankcard recognition service.
     * @returns Promise<any>
     */
    stopBankCardDetector(): Promise<any>;
    /**
     * This method returns the BCR setting.
     * @returns Promise<any>
     */
    getBankCardDetectorSetting(): Promise<any>;
    /**
     * The general card recognition service provides a universal development framework based on the text recognition technology.
     * @param  {generalCardDetectorReq} generalCardDetectorReq Represents the parameter required for general card recognition plug-in.
     * @returns Promise<GeneralCardAnalyser>
     */
    generalCardDetector(generalCardDetectorReq: generalCardDetectorReq): Promise<MLGcrCaptureResult>;
    /**
     * The form recognition service uses AI technologies to recognize and return form structure information (including rows, columns, and coordinates of cells) and form text in Chinese and English (including punctuation) from input images.
     * @param  {formRecognizerAnalyserReq} formRecognizerAnalyserReq Represents the parameter required for general card recognition plug-in.
     * @returns Promise<GeneralCardAnalyser>
     */
    formRecognitionAnalyser(formRecognizerAnalyserReq: formRecognizerAnalyserReq): Promise<MLGcrCaptureResult>;
}
export declare class HMSVoiceServiceProvider extends IonicNativePlugin {
    MLFaceSetting: typeof MLFaceSetting;
    MLLocalTextSetting: typeof MLLocalTextSetting;
    MLTextConfig: typeof MLTextConfig;
    MLRemoteTextSetting: typeof MLRemoteTextSetting;
    MLImageClassificationConfig: typeof MLImageClassificationConfig;
    MLImageSegmentationSetting: typeof MLImageSegmentationSetting;
    MLImageSegmentationScene: typeof MLImageSegmentationScene;
    MLRemoteLandmarkSetting: typeof MLRemoteLandmarkSetting;
    MLBcrCaptureConfig: typeof MLBcrCaptureConfig;
    MLGcrCaptureUIConfig: typeof MLGcrCaptureUIConfig;
    MLBcrResultConfig: typeof MLBcrResultConfig;
    HandkeyPointConfig: typeof HandkeyPointConfig;
    ImgSuperResolutionConfig: typeof ImgSuperResolutionConfig;
    MlObjectAnalyserConfig: typeof MlObjectAnalyserConfig;
    DownloadStrategyCustom: typeof DownloadStrategyCustom;
    FEATURE: typeof FEATURE;
    LANGUAGE: typeof LANGUAGE;
    MLTtsConstants: typeof MLTtsConstants;
    Colors: typeof Colors;
    RectStyle: typeof RectStyle;
    MLSkeletonConfig: typeof MLSkeletonConfig;
    MLFlashMode: typeof MLFlashMode;
    MLLensType: typeof MLLensType;
    MLAnalyzerName: typeof MLAnalyzerName;
    MLFrame: typeof MLFrame;
    MLFormRecogitionConfig: typeof MLFormRecogitionConfig;
    MLFaceConfigs: typeof MLFaceConfigs;
    MLProductConfig: typeof MLProductConfig;
    MLLivenessConfig: typeof MLLivenessConfig;
    MLRttLanguages: typeof MLRttLanguages;
    MLRttScenes: typeof MLRttScenes;
    gcrCaptureType: typeof gcrCaptureType;
    syncType: typeof syncType;
    /**
     * Implements on-cloud text translation.
     * @param  {remotetranslateReq} remotetranslateReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    remoteTranslator(remotetranslateReq: remotetranslateReq): Promise<any>;
    /**
     * Implements on-cloud text translation.
     * @param  {localtranslateReq} localtranslateReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    localTranslator(localtranslateReq: localtranslateReq): Promise<any>;
    /**
     * Obtains all languages supported for local translation.
     * @param  {localAllLangReq} localAllLangReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    translatorLocalAllLang(localAllLangReq: localAllLangReq): Promise<any>;
    /**
     * Obtains all languages supported for on-cloud translation.
     * @param  {remoteAllLangReq} remoteAllLangReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    translatorRemoteAllLang(remoteAllLangReq: remoteAllLangReq): Promise<any>;
    /**
     * Detects languages on the cloud.
     * @param  {remoteLangDetectionReq} remoteLangDetectionReq Represents the parameter required for lang detection.
     * @returns Promise<RemoteLangDetectionAnalyser> | Promise<langDetectionWithFirstDetect>
     */
    remoteLangDetection(remoteLangDetectionReq: remoteLangDetectionReq): Promise<MLRemoteLangDetection | MLlangDetectionWithFirstDetect>;
    /**
     * Detects languages on local.
     * @param  {localLangDetectionReq} localLangDetectionReq Represents the parameter required for lang detection.
     * @returns Promise<any> | Promise<any>
     */
    localLangDetection(localLangDetectionReq: localLangDetectionReq): Promise<any>;
    /**
     * Download language model.
     * @param  {downloadTranslateReq} downloadTranslateReq Represents the parameter required for download model.
     * @returns Promise<any>
     */
    translatorDownloadModel(downloadTranslateReq: downloadTranslateReq): Promise<any>;
    /**
     * For delete language model.
     * @param  {deleteTranslateReq} deleteTranslateReq Represents the parameter required for delete model.
     * @returns Promise<any>
     */
    translatorDeleteModel(deleteTranslateReq: deleteTranslateReq): Promise<any>;
    /**
     * This method stop translator service.
     * @returns Promise<any>
     */
    stopTranslatorService(): Promise<any>;
    /**
     * This method return RTT setting.
     * @returns Promise<any>
     */
    getRTTSetting(): Promise<any>;
    /**
     * This method returns TTS setting.
     * @returns Promise<any>
     */
    getTTSSetting(): Promise<any>;
    /**
     * This method returns AFT setting.
     * @returns Promise<any>
     */
    getAFTSetting(): Promise<any>;
    /**
     * This method returns Lang Detection setting.
     * @returns Promise<any>
     */
    getLangDetectionSetting(): Promise<any>;
    /**
     * This method stop lang detection service.
     * @returns Promise<any>
     */
    stopLangDetectionService(): Promise<any>;
    /**
     * The sound detection service can detect sound events in online (real-time recording) mode. The detected sound events can help you perform subsequent actions.
     * @param  {soundDectReq} soundDectReq Represents the parameter required for Sound Detection analyser.
     * @returns Promise<any>
     */
    soundDectAnalyser(soundDectReq: soundDectReq): Promise<MLSoundDectResult>;
    /**
     * TTS can convert text information into audio output. Rich timbres, and volume and speed options are supported to produce more natural sounds.
     * @param  {ttsReq} ttsReq Represents the parameter required for text to speech.
     * @returns Promise<TtsAnalyser>
     */
    ttsAnalyser(ttsReq: ttsReq): Promise<MLTtsResult>;
    /**
     * TTS can convert text information into audio output offline. Rich timbres, and volume and speed options are supported to produce more natural sounds.
     * @param  {ttsReq} ttsReq Represents the parameter required for text to speech.
     * @returns Promise<TtsAnalyser>
     */
    ttsOfflineAnalyser(ttsReq: ttsReq): Promise<MLTtsResult>;
    /**
     * This service stop text to speech (TTS) service.
     * @returns Promise<any>
     */
    ttsAnalyserStop(): Promise<any>;
    /**
     * This service pauses text to speech (TTS) analyser.
     * @returns Promise<any>
     */
    ttsAnalyserPause(): Promise<any>;
    /**
     * This service continues text to speech (TTS) analyser.
     * @returns Promise<any>
     */
    ttsAnalyserResume(): Promise<any>;
    /**
     * This service shutdown text to speech (TTS) analyser.
     * @returns Promise<any>
     */
    ttsAnalysershutDown(): Promise<any>;
    /**
     * This method returns TTS Download setting.
     * @returns Promise<any>
     */
    ttsAnalyserDownloadSetting(): Promise<any>;
    /**
     * This service close AFT analyser.
     * @returns Promise<any>
     */
    aftAnalyserClose(): Promise<any>;
    /**
     * This service stop AFT analyser.
     * @returns Promise<any>
     */
    asrAnalyserStop(): Promise<any>;
    /**
     * This service destroy AFT analyser.
     * @returns Promise<any>
     */
    aftAnalyserDestroy(): Promise<any>;
    /**
     * This service pause AFT analyser.
     * @returns Promise<any>
     */
    aftAnalyserPause(): Promise<any>;
    /**
     * This service destroy Sound Detection analyser.
     * @returns Promise<any>
     */
    soundDectAnalyserDestroy(): Promise<any>;
    /**
     * The audio file transcription service can convert an audio file less than or equal to 60 seconds into a text file. Currently, Chinese and English are supported.
     * @param  {aftReq} aftReq Represents the parameter required for aft analyser.
     * @returns Promise<AftAnalyser>
     */
    aftAnalyser(aftReq: aftReq): Promise<MLAftResult>;
    /**
    * ASR can recognize speech not longer than 60s and convert the input speech into text in real time.
    * @param  {asrReq} asrReq Represents the parameter required for asr analyser.
    * @param  {any} success A callback function. It is called when function is executed successfully. It returns the results of text.
    * @param  {any} error A callback function. It is called when function is failed.
    * @returns callback
    */
    asrAnalyser(asrReq: asrReq): Observable<any>;
    /**
     * Real-time transcription enables your app to convert long speech (no longer than 5 hours) into text in real time. The generated text contains punctuation marks and timestamps.
     * @param  {rttReq} rttReq Represents the parameter required for rtt analyser.
     * @param  {any} success A callback function. It is called when function is executed successfully. It returns the results of text.
     * @param  {any} error A callback function. It is called when function is failed.
     * @returns callback
     */
    rttAnalyserStart(rttReq: rttReq): Observable<any>;
    /**
     * This method stop RTT analyser
     * @param  {any} success A callback function. It is called when function is executed successfully. It returns the results of text.
     * @param  {any} error A callback function. It is called when function is failed.
     * @returns callback
     */
    rttAnalyserStop(): Observable<any>;
}
