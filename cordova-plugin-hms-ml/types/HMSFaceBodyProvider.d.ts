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
export { MLBounds, faceReq, MLFace, MLconfig, MLFaceConfigs, livenessDetectionReq, MLLivenessConfig, LANGUAGE, MLTtsConstants, Colors, MLFaceSetting, MLSkeletonConfig, RectStyle, DownloadStrategyCustom, FEATURE, MlObjectAnalyserConfig, ImgSuperResolutionConfig, MLBcrResultConfig, HandkeyPointConfig, MLGcrCaptureUIConfig, MLRemoteLandmarkSetting, MLBcrCaptureConfig, MLImageSegmentationScene, MLTextConfig, MLRemoteTextSetting, MLLocalTextSetting, MLImageClassificationConfig, MLImageSegmentationSetting } from './Interfaces';
export declare function stillFaceAnalyser(faceReq: MLKit.faceReq): Promise<MLKit.MLFace>;
export declare function stilFaceAnalyserInfo(): Promise<any>;
export declare function stopStillFaceAnalyser(): Promise<any>;
export declare function stillSkeletonAnalyser(stillSkeletonReq: MLKit.stillSkeletonReq | MLKit.stillSkeletonSimilarityReq): Promise<MLKit.MLSkeleton>;
export declare function liveLivenessAnalyser(livenessDetectionReq: MLKit.livenessDetectionReq): Promise<MLKit.MLLivenessCaptureResult>;
export declare function stillHandkeyAnalyser(stillHandKeypointReq: MLKit.stillHandKeypointReq): Promise<MLKit.MLHandKeypoints>;
export declare function stopStillHandKeyAnalyser(): Promise<any>;
export declare function getFaceAnalyserSetting(): Promise<any>;
export declare function getHandKeyAnalyserSetting(): Promise<any>;
export declare function stopStillSkeletonAnalyser(): Promise<any>;
