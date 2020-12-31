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
import * as MLKit from './Interfaces';
export { MLBounds, faceReq, MLFace, MLconfig, LANGUAGE, MLTtsConstants, Colors, MLFaceSetting, MLSkeletonConfig, RectStyle, DownloadStrategyCustom, FEATURE, MlObjectAnalyserConfig, ImgSuperResolutionConfig, MLBcrResultConfig, HandkeyPointConfig, MLGcrCaptureUIConfig, MLRemoteLandmarkSetting, MLBcrCaptureConfig, MLImageSegmentationScene, MLTextConfig, MLRemoteTextSetting, MLLocalTextSetting, MLImageClassificationConfig, MLImageSegmentationSetting } from './Interfaces';
export declare function localTranslator(localTranslateReq: MLKit.localtranslateReq): Promise<any>;
export declare function remoteTranslator(remotetranslateReq: MLKit.remotetranslateReq): Promise<any>;
export declare function remoteLangDetection(remoteLangDetectionReq: MLKit.remoteLangDetectionReq): Promise<MLKit.MLRemoteLangDetection | MLKit.MLlangDetectionWithFirstDetect>;
export declare function localLangDetection(localLangDetectionReq: MLKit.localLangDetectionReq): Promise<any>;
export declare function translatorDownloadModel(downloadTranslateReq: MLKit.downloadTranslateReq): Promise<any>;
export declare function translatorDeleteModel(deleteTranslateReq: MLKit.deleteTranslateReq): Promise<any>;
export declare function translatorLocalAllLang(localAllLangReq: MLKit.localAllLangReq): Promise<any>;
export declare function translatorRemoteAllLang(remoteAllLangReq: MLKit.remoteAllLangReq): Promise<any>;
export declare function stopTranslatorService(): Promise<any>;
export declare function getRTTSetting(): Promise<any>;
export declare function getTTSSetting(): Promise<any>;
export declare function getAFTSetting(): Promise<any>;
export declare function getLangDetectionSetting(): Promise<any>;
export declare function stopLangDetectionService(): Promise<any>;
export declare function soundDectAnalyser(soundDectReq: MLKit.soundDectReq): Promise<MLKit.MLSoundDectResult>;
export declare function ttsAnalyser(ttsReq: MLKit.ttsReq): Promise<MLKit.MLTtsResult>;
export declare function ttsAnalyserStop(): Promise<any>;
export declare function ttsAnalyserPause(): Promise<any>;
export declare function ttsAnalyserResume(): Promise<any>;
export declare function ttsAnalysershutDown(): Promise<any>;
export declare function ttsAnalyserEngineSetting(ttsEngineReq: MLKit.ttsEngineReq): Promise<any>;
export declare function ttsAnalyserDownloadSetting(): Promise<any>;
export declare function aftAnalyserClose(): Promise<any>;
export declare function asrAnalyserStop(): Promise<any>;
export declare function aftAnalyserDestroy(): Promise<any>;
export declare function soundDectAnalyserDestroy(): Promise<any>;
export declare function aftAnalyserPause(): Promise<any>;
export declare function ttsOfflineAnalyser(ttsReq: MLKit.ttsReq): Promise<MLKit.MLTtsResult>;
export declare function aftAnalyser(aftReq: MLKit.aftReq): Promise<MLKit.MLAftResult>;
export declare function getDownloadStrategy(): Promise<any>;
export declare function asrAnalyser(asrReq: MLKit.asrReq, success: any, error: any): any;
export declare function rttAnalyserStart(rttReq: MLKit.rttReq, success: any, error: any): any;
export declare function rttAnalyserStop(success: any, error: any): any;
