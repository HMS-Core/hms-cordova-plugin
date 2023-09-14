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

// API KEY

export interface configReq {
    apiKey: string;
    accessToken: string;
}

export interface appSettingReq {
    apiKey?: string | null;
    applicationId?: string | null;
    certFingerprint?: string | null;
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
    graphicSetting?:
        | sceneSettings
        | ObjectGraphicSetting
        | null;
    analyzerSetting?:
        | mlImageSegmentationSetting
        | mlObjectAnalyserSetting
        | null;
}

export interface MLconfigComposite {
    lensEngineReq: compositeAnalyser;
}
export interface compositeAnalyser {
    analyzerNames?: Array<MLCompositeAnalyzerName>;
    lensEngineSetting?: MLLensEngineSetting;
    graphicSetting?:
        | CompositeFaceGraphicSetting
        | CompositeSceneSettings
        | CompositeHandkeyGraphicSetting
        | CompositeSkeletonGraphicSetting
        | CompositeObjectGraphicSetting
        | null;
    analyzerSetting?:
        | CompositeFaceAnalyzerSetting
        | CompositeFaceVerificationAnalyzerSetting
        | CompositeHandKeypointSetting
        | CompositeImageSegmentationSetting
        | CompositeObjectAnalyserSetting
        | null;
}

export interface CompositeHandKeypointSetting {
    sceneType?: HandkeyPointConfig | null;
    maxHandResults?: number | null;
}
export enum HandkeyPointConfig {
    TYPE_ALL = 0,
    TYPE_KEYPOINT_ONLY = 1,
    TYPE_RECT_ONLY = 2,
    MAX_HANDS_NUM = 10,
}

export interface CompositeFaceVerificationAnalyzerSetting {
    maxFaceDetcted: number | null;
}

export interface CompositeFaceGraphicSetting {
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

export interface CompositeHandkeyGraphicSetting {
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

export interface CompositeSkeletonGraphicSetting {
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

export interface CompositeFaceAnalyzerSetting {
    featureType?: MLFaceSetting | null;
    keyPointType?: MLFaceSetting | null;
    maxSizeFaceOnly?: boolean | null;
    minFaceProportion?: number | null;
    performanceType?: MLFaceSetting | null;
    poseDisabled?: boolean | null;
    shapeType?: MLFaceSetting | null;
    tracingAllowed?: boolean | null;
    tracingMode?: number | null;
}

export enum MLFaceSetting {
    MODE_TRACING_FAST = 1,
    MODE_TRACING_ROBUST = 2,
    TYPE_FEATURES = 1,
    TYPE_FEATURE_AGE = 256,
    TYPE_FEATURE_BEARD = 32,
    TYPE_FEATURE_EMOTION = 4,
    TYPE_FEATURE_EYEGLASS = 8,
    TYPE_FEATURE_GENDAR = 128,
    TYPE_FEATURE_HAT = 16,
    TYPE_FEATURE_OPENCLOSEEYE = 64,
    TYPE_KEYPOINTS = 1,
    TYPE_PRECISION = 1,
    TYPE_SHAPES = 2,
    TYPE_SPEED = 2,
    TYPE_UNSUPPORT_FEATURES = 2,
    TYPE_UNSUPPORT_KEYPOINTS = 0,
    TYPE_UNSUPPORT_SHAPES = 3,
    TYPE_BOTTOM_OF_MOUTH = 1,
    TYPE_LEFT_CHEEK = 2,
    TYPE_LEFT_EAR = 3,
    TYPE_LEFT_SIDE_OF_MOUTH = 6,
    TYPE_RIGHT_CHEEK = 8,
    TYPE_RIGHT_EAR = 9,
    TYPE_RIGHT_SIDE_OF_MOUTH = 12,
    TYPE_TIP_OF_LEFT_EAR = 4,
    TYPE_TIP_OF_NOSE = 7,
    TYPE_TIP_OF_RIGHT_EAR = 10,
    TYPE_ALL = 0,
    TYPE_BOTTOM_OF_LEFT_EYEBROW = 4,
    TYPE_BOTTOM_OF_LOWER_LIP = 8,
    TYPE_BOTTOM_OF_NOSE = 12,
    TYPE_BOTTOM_OF_RIGHT_EYEBROW = 5,
    TYPE_BOTTOM_OF_UPPER_LIP = 10,
    TYPE_BRIDGE_OF_NOSE = 13,
    TYPE_FACE = 1,
    TYPE_TOP_OF_LEFT_EYEBROW = 6,
    TYPE_TOP_OF_LOWER_LIP = 9,
    TYPE_TOP_OF_RIGHT_EYEBROW = 7,
    TYPE_TOP_OF_UPPER_LIP = 11,
}

export interface MLLensEngineSetting {
    fps?: number | null;
    displayDimensionI?: number | null;
    displayDimensionI1?: number | null;
    lensType?: MLLensType | null;
    enableFocus?: boolean | null;
    flashMode?: MLFlashMode | null;
}
export enum MLFlashMode {
    AUTO = "auto",
    ON = "on",
    OFF = "off",
}
export enum MLLensType {
    BACK_LENS = 0,
    FRONT_LENS = 1,
}

export enum MLStillCompositerName {
    FACE = "FACE",
    HAND = "HAND",
    SKELETON = "SKELETON",
    TEXT = "TEXT",
    OBJECT = "OBJECT",
    CLASSIFICATION = "CLASSIFICATION",
}
export enum MLAnalyzerName {
    LIVEOBJECT = "OBJECT",
    LIVECLASSIFICATION = "CLASSIFICATION",
    LIVESCENE = "SCENE",
    LIVESEGMENTATION = "SEGMENTATION"
}
export enum MLCompositeAnalyzerName {
    LIVEFACE = "FACE",
    LIVEFACE3D = "FACE3D",
    LIVEFACEMAX = "FACEMAX",
    LIVEHAND = "HAND",
    LIVESKELETON = "SKELETON",
    LIVEOBJECT = "OBJECT",
    LIVECLASSIFICATION = "CLASSIFICATION",
    LIVESCENE = "SCENE",
    LIVESEGMENTATION = "SEGMENTATION",
    LIVETEXT = "TEXT",
    LIVEGESTURE = "GESTURE",
}
export interface doZoomReq {
    scale?: number | null;
}
export interface mlFrameReq {
    actionName: MLFrame;
    filePath: any;
}
export enum MLFrame {
    getPreviewBitmap = "getPreviewBitmap",
    readBitmap = "readBitmap",
    rotate = "rotate",
    SCREEN_FIRST_QUADRANT = 0,
    SCREEN_SECOND_QUADRANT = 1,
    SCREEN_THIRD_QUADRANT = 2,
    SCREEN_FOURTH_QUADRANT = 3,
}

// COMPOSITE

export interface compositeAnalyserReq {
    compositeAnalyserConfig: compositeAnalyserConfig;
}
export interface compositeAnalyserConfig {
    filePath: any;
    analyzerNames?: Array<MLStillCompositerName>;
    analyzerSetting?:
        | CompositeFaceAnalyzerSetting
        | CompositeFaceVerificationAnalyzerSetting
        | CompositeHandKeypointSetting
        | CompositeImageSegmentationSetting
        | CompositeObjectAnalyserSetting
        | null;
}

//Classify

export interface localImageClassificationReq {
    ocrType: MLImageClassificationConfig | null;
    analyseMode?: number | null;
    localClassificationAnalyzerSetting?: LocalClassificationAnalyzerSetting | null;
    filePath: any;
}
export interface LocalClassificationAnalyzerSetting {
    possibility?: number | null;
}

export interface remoteImageClassificationReq {
    ocrType: MLImageClassificationConfig;
    analyseMode?: number;
    remoteClassificationAnalyzerSetting?: RemoteClassificationAnalyzerSetting | null;
    filePath: any;
}

export interface RemoteClassificationAnalyzerSetting {
    maxResults?: number | null;
    possibility?: number | null;
    isEnableFingerprintVerification?: boolean | null;
}

export enum MLImageClassificationConfig {
    TYPE_LOCAL = 0,
    TYPE_REMOTE = 1,
}

//Custom Model Download

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
export enum DownloadStrategyCustom {
    REGION_DR_CHINA = 1002,
    REGION_DR_AFILA = 1003,
    REGION_DR_EUROPE = 1004,
    REGION_DR_RUSSIA = 1005,
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

//Document Skew Correction

export interface documentSkewCorrectionReq {
    filePath: any;
    syncMode?: syncMode | null;
}

export enum syncMode {
    SYNC_TYPE = 1,
    ASYNC_TYPE = 0,
}

//Image Super Resolution

export interface imageSuperResolutionReq {
    filePath: any;
    imgSuperResolutionSetting?: ImgSuperResolutionSetting | null;
    syncType?: syncMode | null;
}
export interface ImgSuperResolutionSetting {
    scaleType?: ImgSuperResolutionConfig;
}
export enum ImgSuperResolutionConfig {
    ISR_SCALE_1X = 1.0,
    ISR_SCALE_3X = 3.0,
}

//Product Vision Analyser

export interface productReq {
    filePath?: any | null;
    detectType?: number;
    mlProductSetting?: mlProductSetting | null;
}
export interface mlProductSetting {
    largestNumOfReturns?: number | null;
    productSetId?: string | null;
    region?: MLProductConfig | null;
}
export enum MLProductConfig {
    REGION_DR_CHINA = 1002,
    REGION_DR_AFILA = 1003,
    REGION_DR_EUROPE = 1004,
    REGION_DR_RUSSIA = 1005,
    REGION_DR_GERMAN = 1006,
    REGION_DR_SIANGAPORE = 1007,
}

//Text Image Super Resolution

export interface textImageSuperResolutionReq {
    filePath: any;
    analyseMode?: syncMode | null;
}

//IMAGE STILL && LIVESEGMENTATION

export interface imgSegmentationReq {
    imageSegmentationSetting?: mlImageSegmentationSetting;
    filePath: any;
    analyseMode?: syncMode | null;
}

export interface mlImageSegmentationSetting {
    isExact: boolean | null;
    analyserType?: MLImageSegmentationSetting | null;
    scene?: MLImageSegmentationScene;
    hashCode?: number | null;
}

export interface CompositeImageSegmentationSetting {
    isExact: boolean | null;
    analyserType?: MLImageSegmentationSetting | null;
    scene?: MLImageSegmentationScene;
    hashCode?: number | null;
}

export interface CompositeImageSegmentationSetting {
    isExact: boolean | null;
    analyserType?: MLImageSegmentationSetting | null;
    scene?: MLImageSegmentationScene;
    hashCode?: number | null;
}

export enum MLImageSegmentationSetting {
    BODY_SEG = 0,
    IMAGE_SEG = 1,
    HAIR_SEG = 2,
}

export enum MLImageSegmentationClassification {
    TYPE_BACKGOURND = 0,
    TYPE_HUMAN = 1,
    TYPE_SKY = 2,
    TYPE_GRASS = 3,
    TYPE_FOOD = 4,
    TYPE_CAT = 5,
    TYPE_BUILD = 6,
    TYPE_FLOWER = 7,
    TYPE_WATER = 8,
    TYPE_SAND = 9,
    TYPE_MOUNTAIN = 10,
}
export enum MLImageSegmentationScene {
    ALL = 0,
    MASK_ONLY = 1,
    FOREGROUND_ONLY = 2,
    GRAYSCALE_ONLY = 3,
}

//LAND MARK

export interface imgLandMarkReq {
    landmarkAnalyzerSetting?: landmarkAnalyzerSetting;
    filePath: any;
}

export interface landmarkAnalyzerSetting {
    maxResults?: number | null;
    modelType?: MLRemoteLandmarkSetting | null;
}

export enum MLRemoteLandmarkSetting {
    STEADY_PATTERN = 1,
    NEWEST_PATTERN = 2,
}

// STILL && LIVEOBJECT  ANALYSER

export interface objectReq {
    filePath: any;
    mlObjectAnalyserSetting?: mlObjectAnalyserSetting;
    syncType?: syncMode | null;
}
export interface ObjectGraphicSetting {
    boxPaintSetting?: BoxPaintSetting | null;
    textPaintSetting?: TextPaintSetting | null;
}

export interface CompositeObjectGraphicSetting {
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

export interface CompositeObjectAnalyserSetting {
    isClassificationAllowed?: boolean | null;
    isMultipleResultsAllowed?: boolean | null;
    analyzerType: MlObjectAnalyserConfig;
}
export enum MlObjectAnalyserConfig {
    TYPE_PICTURE = 0,
    TYPE_VIDEO = 1,
    TYPE_OTHER = 0,
    TYPE_GOODS = 1,
    TYPE_FOOD = 2,
    TYPE_FURNITURE = 3,
    TYPE_PLANT = 4,
    TYPE_PLACE = 5,
    TYPE_FACE = 6,
}

export enum RectStyle {
    STROKE = 1,
    FILL = 2,
    FILL_AND_STROKE = 3,
}

//STILL && LIVE SCENE ANALYSER

export interface stillSceneReq {
    filePath: any;
    analyseMode?: syncMode | null;
}

export interface sceneSettings {
    color?: Colors | null;
    textSize?: Number | null;
}

export interface CompositeSceneSettings {
    color?: Colors | null;
    textSize?: Number | null;
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
    TRANSPARENT = 0,
}
/*
----------------- return
*/

export interface MLImageClassification {
    result?: ResultEntity[] | null;
}
export interface ResultEntity {
    identity: string;
    name: string;
    possibility: number;
    hashCode: number;
}

export interface MLDocumentSkewDetectResult {
    resultCode: number;
    bitmap: any;
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
    positionInfo?: PositionInfoEntity[] | null;
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

export interface MLObject {
    typeIdentity: number;
    typePossibility: number;
    border: Border;
}

export interface MLSceneDetectionResult {
    resultString: string;
    confidence: number;
}

export interface LiveSceneAnalyser {
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

export interface MLProductVisionResult {
    type: string;
    border: Border;
    list?: ListEntity[] | null;
}
export interface ListEntity {
    customcontent: string;
    imagelist?: ImagelistEntity[] | null;
    possibility: number;
    productURL: string;
}
export interface ImagelistEntity {
    imageId: string;
    possibility: number;
    productId: string;
}

export enum Events {
    TEXT_TRANSACTOR_ON_DESTROY = "textTransactorOnDestroy",
    TEXT_TRANSACTOR_ON_RESULT = "textTransactorOnResult",
    FACE_TRANSACTOR_ON_DESTROY = "faceTransactorOnDestroy",
    FACE_TRANSACTOR_ON_RESULT = "faceTransactorOnResult",
    FACE_3D_TRANSACTOR_ON_DESTROY = "face3dTransactorOnDestroy",
    FACE_3D_TRANSACTOR_ON_RESULT = "face3dTransactorOnResult",
    CLASSIFICATION_TRANSACTOR_ON_DESTROY = "classificationTransactorOnDestroy",
    CLASSIFICATION_TRANSACTOR_ON_RESULT = "classificationTransactorOnResult",
    OBJECT_TRANSACTOR_ON_DESTROY = "objectTransactorOnDestroy",
    OBJECT_TRANSACTOR_ON_RESULT = "objectTransactorOnResult",
    SCENE_TRANSACTOR_ON_DESTROY = "sceneTransactorOnDestroy",
    SCENE_TRANSACTOR_ON_RESULT = "sceneTransactorOnResult",
    SKELETON_TRANSACTOR_ON_DESTROY = "skeletonTransactorOnDestroy",
    SKELETON_TRANSACTOR_ON_RESULT = "skeletonTransactorOnResult",
    HAND_TRANSACTOR_ON_DESTROY = "handTransactorOnDestroy",
    HAND_TRANSACTOR_ON_RESULT = "handTransactorOnResult",
    GESTURE_TRANSACTOR_ON_DESTROY = "gestureTransactorOnDestroy",
    GESTURE_TRANSACTOR_ON_RESULT = "gestureTransactorOnResult",
    SEGMENTATION_TRANSACTOR_ON_DESTROY = "segmentationTransactorOnDestroy",
    SEGMENTATION_TRANSACTOR_ON_RESULT = "segmentationTransactorOnResult",
}

export enum CordovaErrors {
    UNKNOWN = -1,
    SUCCESS = 0,
    DISCARDED = 1,
    INNER = 2,
    INACTIVE = 3,
    NOT_SUPPORTED = 4,
    ILLEGAL_PARAMETER = 5,
    OVERDUE = 6,
    NO_FOUND = 7,
    DUPLICATE_FOUND = 8,
    NO_PERMISSION = 9,
    INSUFFICIENT_RESOURCE = 10,
    ANALYSIS_FAILURE = 11,
    INTERRUPTED = 12,
    EXCEED_RANGE = 13,
    DATA_MISSING = 14,
    AUTHENTICATION_REQUIRED = 15,
    TFLITE_NOT_COMPATIBLE = 16,
    INSUFFICIENT_SPACE = 17,
    HASH_MISS = 18,
    TOKEN_INVALID = 19,
    SERVICE_FAILURE = 20,
    ANALYSIS_NULL = 21,
}
