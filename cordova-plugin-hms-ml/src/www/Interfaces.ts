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
export interface RequestPermissionReq {
  permissionList: Array<string>;
}
export interface CheckPermissionReq {
  permissionList: Array<string>;
}
export interface statisticsnReq {
  isAllowed:boolean;
}
export interface MLBounds {
  marginTop?: number,
  marginBottom?: number,
  marginLeft?:number,
  marginRight?:number
}
export interface MLconfig{
  lensEngineReq: lensEngineReq;
  
}
export interface lensEngineReq{
  analyzerName: MLAnalyzerName;
  lensEngineSetting ?: MLLensEngineSetting;
  grapgicSetting?: FaceGraphicSetting | sceneSettings| HandkeyGraphicSetting | SkeletonGraphicSetting | ObjectGraphicSetting | null;
  analyzerSetting?: mlFaceAnalyzerSetting |mlHandKeypointSetting|mlImageSegmentationSetting|mlObjectAnalyserSetting |null;

}
export interface MLconfigComposite{
  lensEngineReq:compositeAnalyser
  
}
export interface compositeAnalyser{
  analyzerNames?: Array<MLAnalyzerName>;
  lensEngineSetting ?: MLLensEngineSetting;
  grapgicSetting?: FaceGraphicSetting | sceneSettings| HandkeyGraphicSetting | SkeletonGraphicSetting | ObjectGraphicSetting | null;
  analyzerSetting?: mlFaceAnalyzerSetting |mlHandKeypointSetting|mlImageSegmentationSetting|mlObjectAnalyserSetting |null;

}
export interface MLLensEngineSetting{
  fps?:number | null;
  displayDimensionI?:number | null;
  displayDimensionI1?:number | null;
  lensType?: MLLensType |null;
  enableFocus?:boolean|null;
  flashMode?:MLFlashMode|null;

}
export enum MLFlashMode{
  AUTO="auto",
  ON="on",
  OFF="off"

} 
export enum MLLensType{
  BACK_LENS=0,
  FRONT_LENS = 1

}
export enum MLStillCompositerName{
  FACE="FACE",
  HAND="HAND",
  SKELETON="SKELETON",
  OBJECT="OBJECT",
  TEXT="TEXT",
  CLASSIFICATION="classification"
}
export enum MLAnalyzerName{
  LIVEFACE="FACE",
  LIVEFACE3D="FACE3D",
  LIVEFACEMAX="FACEMAX",
  LIVEHAND="HAND",
  LIVESKELETON="SKELETON",
  LIVEOBJECT="OBJECT",
  LIVECLASSIFICATION="CLASSIFICATION",
  LIVESCENE="SCENE",
  LIVETEXT="TEXT"
}
export interface doZoomReq{
  scale?:number|null;
}
export interface mlFrameReq{
  actionName:MLFrame;
  filePath:any;
}
export enum MLFrame{
  getPreviewBitmap="getPreviewBitmap",
  readBitmap="readBitmap",
  rotate="rotate"

}
///////****/////////
// API KEY
///////****/////////

export interface configReq{
  apiKey: string;
}

export interface appSettingReq{
  apiKey?:string|null;
  applicationId?:string|null;
  certFingerprint?:string|null;
}


///////****/////////
// COMPOSITE
///////****/////////
export interface compositeAnalyserReq{
  compositeAnalyserConfig: compositeAnalyserConfig
}
export interface compositeAnalyserConfig{
  filePath : any;
  analyzerNames?: Array<MLStillCompositerName>;
  analyzerSetting?: mlFaceAnalyzerSetting |mlHandKeypointSetting|mlImageSegmentationSetting|mlObjectAnalyserSetting |null;

}

///////****/////////
// AFT ANALYSER
///////****/////////

export interface aftReq {
  audioPath: any;
  aftSetting?: (AftSetting);
}

export interface AftSetting{

  languageCode ?: string | null;
  punctuationEnabled ?: boolean | null;
  timeOffset ?: boolean | null;
  wordTimeOffsetEnabled ?: boolean | null;
  sentenceTimeOffsetEnabled ?: boolean | null ;
}


///////****/////////
// ASR ANALYSER
///////****/////////

export interface asrReq {
  language ?: LANGUAGE | null;
  feature ?: FEATURE | null;
}

export enum FEATURE {
  FEATURE_ALLINONE = 12,
  FEATURE_WORDFLUX = 11,
}

export enum LANGUAGE {
  LAN_EN_US = "en-US",
  LAN_FR_FR = "fr-FR",
  LAN_ZH = "zh",
  LAN_ZH_CN = "zh-CN",
  LAN_ES_ES="es-ES",
  LAN_DE_DE="de-DE"

}

///////****/////////
// SDK BANK CARD ANALYSER
///////****/////////


export interface bankCardSDKDetectorReq {
  filePath: any;
  detectType: 0;
  mLBcrAnalyzerSetting?: MLBcrAnalyzerSetting | null;
}

export interface MLBcrAnalyzerSetting {
  langType?: string | null;
  resultType?: MLBcrResultConfig | null;
}

///////****/////////
// PLUGIN BANK CARD ANALYSER
///////****/////////

export interface bankCardPluginDetectorReq {
  detectType: 1;
  mLBcrCaptureConfig?: mLBcrCaptureConfig | null;
}

export interface mLBcrCaptureConfig {
  orientation?: MLBcrCaptureConfig | null;
  resultType?: MLBcrResultConfig | null;
}

export enum MLBcrCaptureConfig {
  ORIENTATION_AUTO = 0,
  ORIENTATION_LANDSCAPE = 1,
  ORIENTATION_PORTRAIT = 2
}
export enum MLBcrResultConfig {
  RESULT_NUM_ONLY = 0,
  RESULT_SIMPLE = 1,
  RESULT_ALL = 2
}


///////****/////////
//Classify
///////****/////////


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
  isEnableFingerprintVerification?: boolean |null;
}

export enum MLImageClassificationConfig {
  TYPE_LOCAL = 0,
  TYPE_REMOTE = 1
}

///////****/////////
//Custom Model Download
///////****/////////

export interface downloadModelReq{
  detectType: 1;
  filePath: any;
  downloadStrategySetting ?:DownloadStrategySetting | null;
}

export interface DownloadStrategySetting {
  isChargingNeed:boolean | null;
  isWifiNeed:boolean | null ;
  isDeviceIdleNeed:boolean | null;
  setRegion?: DownloadStrategyCustom | null;

}
export enum DownloadStrategyCustom{
   
  REGION_DR_CHINA = 1002,
  REGION_DR_AFILA = 1003,
  REGION_DR_EUROPE = 1004,
  REGION_DR_RUSSIA = 1005
}

export interface ownCustomModelReq{
  detectType:number;
  filePath:any;
  modelFullName:string |null ;
  modelName:string |null;
  labelFileName:string |null;
  bitmapHeight:number |null;
  bitmapWidth:number |null;
  outPutSize:number |null;
}

///////****/////////
//Document Analyser
///////****/////////

export interface documentImageAnalyserReq {
  documentSetting?: DocumentSetting | null;
  filePath: any;
}
export interface DocumentSetting {
  borderType?: MLRemoteTextSetting | null;
  LanguageList?: Array<string> | null;
  enableFingerprintVerification :boolean | null;
}

export enum MLRemoteTextSetting {
  OCR_LOOSE_SCENE = 1,
  OCR_COMPACT_SCENE = 2,
  NGON = "NGON",
  ARC = "ARC"
}

///////****/////////
//Form Recognizer Analyser
///////****/////////

export interface formRecognizerAnalyserReq {
  filePath: any;
  syncType: MLFormRecogitionConfig;
}
export enum MLFormRecogitionConfig{
  SYNC_TYPE=1,
  ASYNC_TYPE=0
}

///////****/////////
//Document Skew Correction
///////****/////////

export interface documentSkewCorrectionReq{
  filePath: any;
  syncMode?: MLFormRecogitionConfig|null;
}

///////****/////////
// STILL && LIVE FACE ANALYSER 
///////****/////////

export interface faceReq {
  mlFaceAnalyserSetting?: mlFaceAnalyzerSetting | null;
  analyseMode?: MLFaceConfigs |null;
  filePath: any;
}
export enum MLFaceConfigs{
  TYPE_2D_SYNC=0,
  TYPE_2D_ASYNC=1,
  TYPE_3D_SYNC=2,
  TYPE_3D_ASYNC=3
}

export interface FaceGraphicSetting{
  facePositionPaintSetting ?: FacePositionPaintSetting | null;
  textPaintSetting ?:TextPaintSettingFace | null;
  faceFeaturePaintTextSetting ?:FaceFeaturePaintTextSetting | null;
  keypointPaintSetting ?:  KeypointPaintSetting | null;
  boxPaintSetting ?: BoxPaintSettingFace | null;
  facePaintSetting ?: FacePaintSetting | null;
  eyePaintSetting ?:EyePaintSetting | null;
  eyebrowPaintSetting ?:EyebrowPaintSetting | null;
  nosePaintSetting ?:NosePaintSetting | null;
  noseBasePaintSetting ?:NoseBasePaintSetting | null;
  lipPaintSetting ?:LipPaintSetting | null;
}
export interface LipPaintSetting{
  color?:String | Colors|null;
  style?:RectStyle | null;
  strokeWidth:Number | null;
}
export interface NosePaintSetting{
  color?:String | Colors |null;
  style?:RectStyle | null;
  strokeWidth ?:Number;
}
export interface NoseBasePaintSetting{
  color ?:String |Colors | null;
  style ?:RectStyle | null;
  strokeWidth ?:Number;
}
export interface EyebrowPaintSetting{
  color?:String |Colors | null;
  style?:RectStyle;
  strokeWidth?:Number;
}
export interface EyePaintSetting{
  color?:String |Colors;
  style?:RectStyle |Colors;
  strokeWidth:Number | null;
}
export interface FacePaintSetting{
  color ?:String | Colors | null ;
  style ?: RectStyle | null;
  strokeWidth:Number | null;


}
export interface BoxPaintSettingFace{
  color ?:String |Colors | null;
  style ?:RectStyle | null;
  strokeWidth ?:Number | null;
}
export interface KeypointPaintSetting{
  color?: Colors | Colors | null;
  style?:RectStyle | null;
  textSize:Number | null ;
}

export interface FaceFeaturePaintTextSetting{
  color?:Colors | null;
  textSize:Number | null;

}
export interface FacePositionPaintSetting{
  color ?: Colors | null;
}
export interface TextPaintSettingFace{
  color ?: Colors | null;
  textSize ?: Number | null;

}

export interface mlFaceAnalyzerSetting {
  featureType?: MLFaceSetting | null;
  keyPointType?: MLFaceSetting | null;
  maxSizeFaceOnly?: boolean | null;
  minFaceProportion?: number | null;
  performanceType?: MLFaceSetting | null;
  poseDisabled?:boolean | null;
  shapeType?: MLFaceSetting | null;
  tracingAllowed?: boolean | null;
}

export enum MLFaceSetting {
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


///////****/////////
// GENERAL CARD ANALYSER
///////****/////////

export interface generalCardDetectorReq {
  gcrCaptureConfig?: gcrCaptureConfig;
  gcrCaptureUIConfig?: gcrCaptureUIConfig;
  captureType?: gcrCaptureType|null;
}

export interface gcrCaptureConfig {
  language: string;
}
export enum gcrCaptureType{
  CAPTURE_ACTIVITY=0,
  CAPTURE_PHOTO=1,
  CAPTURE_IMAGE=2
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

export enum MLGcrCaptureUIConfig {
  ORIENTATION_AUTO = 0,
  ORIENTATION_LANDSCAPE = 1,
  ORIENTATION_PORTRAIT = 2,
}


///////****/////////
// ID CARD ANALYSER
///////****/////////

export interface idCardAnalyserReqWithSDK {
  detectType: number;
  isRemote?: boolean | null;
  isFront?: boolean | null ;
  countryCode?: string;
  filePath: any;
}

export interface idCardAnalyserReqWithPlugin {
  detectType: number;
  isRemote?: boolean | null;
  isFront?: boolean | null;
  countryCode?: string;
}

///////****/////////
//Live && Stil HandkeyPoint
///////****/////////

export interface stillHandKeypointReq{
  syncType?: syncType |null;
  filePath: any;
  handkeySetting ?: mlHandKeypointSetting | null;
}
export enum syncType{
  SYNC_MODE=0,
  ASYNC_MODE=1
}

export interface HandkeyGraphicSetting{
  idPaintnewSetting ?: IdPaintnewSetting | null;
  rectPaintSetting ?: RectPaintSetting | null;
}
export interface IdPaintnewSetting{
  color ?: Colors | null;
  textSize ?: Number | null;
}
export interface RectPaintSetting{
  color ?: Colors | null;
  style ?: RectStyle | null;
  boxStrokeWidth ?: Number | null;
}
export interface mlHandKeypointSetting{
  sceneType ?: HandkeyPointConfig | null;
  maxHandResults ?: number | null;

}
export enum HandkeyPointConfig{
  TYPE_ALL = 0,
  TYPE_KEYPOINT_ONLY = 1,
  TYPE_RECT_ONLY = 2
}

///////****/////////
//Image Super Resolution
///////****/////////

export interface imageSuperResolutionReq{
  filePath:any;
  imgSuperResolutionSetting ?: (ImgSuperResolutionSetting) | null;
  syncType?: MLFormRecogitionConfig | null;
}
export interface ImgSuperResolutionSetting{
  scaleType ?: ImgSuperResolutionConfig;
}
export enum ImgSuperResolutionConfig{
  ISR_SCALE_1X = 1.0,
  ISR_SCALE_3X = 3.0
}
///////****/////////
//Product Vision Analyser
///////****/////////

export interface productReq{
  filePath?:any |null;
  detectType?:number;
  mlProductSetting ?: (mlProductSetting) | null;
}
export interface mlProductSetting{
  largestNumOfReturns ?: number|null;
  productSetId?:string|null;
  region?:MLProductConfig|null;
}
export enum MLProductConfig{
  REGION_DR_CHINA = 1002,
  REGION_DR_AFILA = 1003,
  REGION_DR_EUROPE = 1004,
  REGION_DR_RUSSIA = 1005,
  REGION_DR_GERMAN = 1006,
  REGION_DR_SIANGAPORE = 1007
}

  ///////****/////////
//Text Image Super Resolution
///////****/////////

export interface textImageSuperResolutionReq{
  filePath:any;
  analyseMode?: MLFormRecogitionConfig |null;
}

///////****/////////
//IMAGE STILL && LIVESEGMENTATION
///////****/////////

export interface imgSegmentationReq {
  imageSegmentationSetting?: (mlImageSegmentationSetting);
  filePath: any;
  analyseMode?: MLFormRecogitionConfig | null;
}

export interface mlImageSegmentationSetting {
  isExact:boolean | null;
  analyserType?: MLImageSegmentationSetting | null ;
  scene?: MLImageSegmentationScene;

}

export enum MLImageSegmentationSetting {
  BODY_SEG = 0,
  IMAGE_SEG = 1,
}

export enum MLImageSegmentationScene {
  ALL = 0,
  MASK_ONLY = 1,
  FOREGROUND_ONLY = 2,
  GRAYSCALE_ONLY = 3,
}

///////****/////////
//LAND MARK 
///////****/////////


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

///////****/////////
//Lang Detect 
///////****/////////

export interface remoteLangDetectionReq {
  sourceText: string;
  taskMode?: number;
  trustedThreshold?: number;
}
export interface localLangDetectionReq{
  sourceText:string;
  trustedThreshold?:number;
}

///////****/////////
//Liveness Detection
///////****/////////

export interface livenessDetectionReq{
  analyserMode?: MLLivenessCaptureResult | null;
}
export enum MLLivenessConfig{
  DEFAULT=0,
  CUSTOM=1
}
///////****/////////
// STILL && LIVEOBJECT  ANALYSER
///////****/////////

export interface objectReq {
  filePath: any;
  mlObjectAnalyserSetting?: mlObjectAnalyserSetting;
  syncType?: MLFormRecogitionConfig |null;
}
export interface ObjectGraphicSetting{
  boxPaintSetting?: BoxPaintSetting| null;
  textPaintSetting?: TextPaintSetting| null;
}
export interface BoxPaintSetting{
  color?:Colors | null;
  style?: RectStyle | null;
  boxStrokeWidth?: Number | null;

}
export interface TextPaintSetting{
  color ?:Colors | null;
  textSize ?: Number | null;
}
export interface mlObjectAnalyserSetting {
  isClassificationAllowed?: boolean | null;
  isMultipleResultsAllowed?: boolean | null;
  analyzerType: MlObjectAnalyserConfig;
}
export enum MlObjectAnalyserConfig{
  TYPE_VIDEO = 1,
  TYPE_PICTURE = 0
}

///////****/////////
//RTT 
///////****/////////

export interface rttReq{
mLSpeechRealTimeTranscriptionConfig : MLSpeechRealTimeTranscriptionConfig;

}
export interface MLSpeechRealTimeTranscriptionConfig {
language: MLRttLanguages | null ;
punctuationEnable: boolean | null ;
wordTimeOffsetEnable: boolean | null;
sentenceTimeOffsetEnable: boolean | null ;
scenes?: MLRttScenes |null;

}
export enum MLRttLanguages{
  LAN_ZH_CN = "zh-CN",
  LAN_EN_US = "en-US",
  LAN_FR_FR = "fr-FR",
  LAN_ES_ES = "es-ES",
  LAN_EN_IN = "en-IN",
  LAN_DE_DE = "de-DE"
}
export enum MLRttScenes{
  SCENES_SHOPPING="shopping"
}

///////****/////////
//STILL && LIVE SCENE ANALYSER 
///////****/////////

export interface stillSceneReq{
  filePath: any;
  analyseMode?: syncType | null;
}

export interface sceneSettings{
  color ?: Colors | null;
  textSize ?: Number | null;
}

///////****/////////
//STILL && LIVE SKELETON ANALYSER 
///////****/////////

export interface stillSkeletonReq{
  filePath: any;
  syncType: MLSkeletonConfig;
  analyzerType: MLSkeletonConfig;
}
export interface stillSkeletonSimilarityReq{
  filePath: any;
  filepath2: any;
  syncType: MLSkeletonConfig;
  analyzerType: MLSkeletonConfig;
}
export enum MLSkeletonConfig{
  SYNC_MODE=0,
  ASYNC_MODE=1,
  SIMILARITTY_MODE=2,
  TYPE_YOGA=1,
  TYPE_NORMAL=0,
}

export interface SkeletonGraphicSetting{
  circlePaintSetting ?: circlePaintSetting | null;
  linePaintSetting ?: linePaintSetting | null;
}
export interface circlePaintSetting{
   color?: Colors| null;
   style?: RectStyle | null;
   antiAlias?:boolean| null;
}
export interface linePaintSetting{
  color?:Colors| null;
  style?: RectStyle | null;
  strokeWidth?:Number| null;
  antiAlias?:boolean| null;

}

///////****/////////
//Text Analyser
///////****/////////
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

export enum MLLocalTextSetting {
  OCR_DETECT_MODE = 1,
  OCR_TRACKING_MODE = 2
}
export enum MLTextConfig {
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


///////****/////////
//TRANSLATE
///////****/////////

export interface remotetranslateReq {
  USE_SYNC: boolean,
  targetLangCode: string;
  sourceLangCode?: string;
  sourceText: string;
}
export interface localtranslateReq {
  USE_SYNC: boolean,
  targetLangCode: string;
  sourceLangCode: string;
  sourceText: string;

}
export interface deleteTranslateReq{
  USE_SYNC: boolean,
  langcode:string;
}
export interface downloadTranslateReq{
  USE_SYNC: boolean,
  langcode:string;
}
export interface localAllLangReq{
  USE_SYNC: boolean,
}
export interface remoteAllLangReq{
  USE_SYNC: boolean,
}

 ///////****/////////
// Sound Dect
///////****/////////

export interface soundDectReq {
  startType: boolean | null;
  
}
///////****/////////
// Text Embedding
///////****/////////

export interface textEmbeddingDicInfoReq {
  textEmbeddingSetting: textEmbeddingSetting;
  
}
export interface textEmbeddingWordtoVectorReq {
  textEmbeddingSetting?: textEmbeddingSetting;
  wordText:string;
  
}
export interface textEmbeddingSentencetoVectorReq {
  textEmbeddingSetting?: textEmbeddingSetting;
  sentenceText:string;

  
}
export interface textEmbeddingWordSimilarityReq {
  textEmbeddingSetting?: textEmbeddingSetting;
  wordText1 : string;
  wordText2 : string;
  
}
export interface textEmbeddingSentenceSimilarityReq {
  textEmbeddingSetting?: textEmbeddingSetting;
  sentenceText1 : string;
  sentenceText2 : string;
  
}
export interface textEmbeddingSimilarWordsReq {
  textEmbeddingSetting?: textEmbeddingSetting;
  multipleText:string;
  similarityNumber:number;

  
}
export interface textEmbeddingWordBatchReq{
  textEmbeddingSetting?: textEmbeddingSetting;
  batchText:string;
}

export interface textEmbeddingSetting{
  language:string
}


///////****/////////
// TTS ANALYSER
///////****/////////

export interface ttsEngineReq {
  language?: string |null;
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
export enum MLTtsConstants {
  TTS_EN_US = "en-US",
  TTS_LAN_ES_ES = "es-ES",
  TTS_LAN_FR_FR = "fr-FR",
  TTS_LAN_DE_DE ="de-DE",
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
  EXTERNAL_PLAYBACK =2,
  OPEN_STREAM = 4
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
export enum RectStyle {
  STROKE = 1,
  FILL = 2,
  FILL_AND_STROKE = 3,
  } 

/*
----------------- return
*/

export interface MLAftResult {
  eventName: string;
  text: string;
  taskId: string;
  complete: boolean;
}
export interface MLAftErrorResult{
  eventName: string;
  taskId:string;
  errorCode:MLAftErrorCodes;
  message:string;
}
export enum MLAftErrorCodes{
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
export interface MLAftEventResult{
  eventName: string;
  taskId:string;
  ext:string;
  eventId:string;
}
export enum MLAFTEventCodes{
  PAUSE_EVENT=2,
  STOP_EVENT=3,
  UPLOADED_EVENT=1

}

export interface MLBankCard {
  number: string;
  expire: string;
  issuer: string;
  type: string;
  organization:string;
  originalBitmap:any;
  numberBitmap:any;
}

export interface MLCustomBankCard {
  number: string;
  expire: string;
  issuer: string;
  type: string;
  organization:string;
  originalBitmap:any;
  numberBitmap:any;
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
export interface handkeyPoints{
  x:number;
  y:number;
  score:number;
  type:number;
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
export interface joints{
  x:number;
  y:number;
  score:number;
  type:number;
  hashCode:number;
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
export interface a{
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
export enum MLSoundDectSoundTypeResult{
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
