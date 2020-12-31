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
export { MLBounds, faceReq, MLFace, MLconfig, MLProductConfig, LANGUAGE, MLFormRecogitionConfig, MLTtsConstants, Colors, MLFaceSetting, MLSkeletonConfig, RectStyle, DownloadStrategyCustom, FEATURE, MlObjectAnalyserConfig, ImgSuperResolutionConfig, MLBcrResultConfig, HandkeyPointConfig, MLGcrCaptureUIConfig, MLRemoteLandmarkSetting, MLBcrCaptureConfig, MLImageSegmentationScene, MLTextConfig, MLRemoteTextSetting, MLLocalTextSetting, MLImageClassificationConfig, MLImageSegmentationSetting } from './Interfaces';
export declare function imageTextAnalyser(ImageTextReq: MLKit.localImageTextReq | MLKit.remoteImageTextReq): Promise<MLKit.MLText>;
export declare function stopTextAnalyser(): Promise<any>;
export declare function getTextAnalyserInfo(): Promise<any>;
export declare function documentImageAnalyser(documentImageReq: MLKit.documentImageAnalyserReq): Promise<MLKit.MLDocument>;
export declare function closeDocumentImageAnalyser(): Promise<any>;
export declare function stopDocumentImageAnalyser(): Promise<any>;
export declare function getDocumentImageAnalyserSetting(): Promise<any>;
export declare function getTextAnalyserSetting(): Promise<any>;
export declare function getGCRSetting(): Promise<any>;
export declare function stopFormRecognitionAnalyser(): Promise<any>;
export declare function bankCardDetector(bankCardDetecterReq: MLKit.bankCardSDKDetectorReq | MLKit.bankCardPluginDetectorReq): Promise<MLKit.MLBankCard>;
export declare function stopBankCardDetector(): Promise<any>;
export declare function getBankCardDetectorSetting(): Promise<any>;
export declare function generalCardDetector(generalCardDetectorReq: MLKit.generalCardDetectorReq): Promise<MLKit.MLGcrCaptureResult>;
export declare function formRecognitionAnalyser(formRecognizerAnalyserReq: MLKit.formRecognizerAnalyserReq): Promise<MLKit.MLFormRecogitionResult>;
