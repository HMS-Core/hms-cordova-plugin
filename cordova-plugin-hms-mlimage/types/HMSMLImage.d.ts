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

import * as MLKit from "./interfaces";
export * from './interfaces';
export declare function imageClassificationAnalyser(imageClassificationReq: MLKit.localImageClassificationReq | MLKit.remoteImageClassificationReq): Promise<MLKit.MLImageClassification>;
export declare function stopImageClassificationAnalyser(): Promise<string>;
export declare function getImageClassificationAnalyserSetting(): Promise<any>;
export declare function documentSkewCorrectionAnalyser(documentSkewCorrectionReq: MLKit.documentSkewCorrectionReq): Promise<MLKit.MLDocumentSkewDetectResult>;
export declare function docSkewAnalyserStop(): Promise<any>;
export declare function imageSuperResolution(imageSuperResolutionReq: MLKit.imageSuperResolutionReq): Promise<any>;
export declare function getISRSetting(): Promise<any>;
export declare function ISRAnalyserStop(): Promise<any>;
export declare function imgSegmentation(imgSegmentationReq: MLKit.imgSegmentationReq): Promise<MLKit.MLImageSegmentation>;
export declare function stopImgSegmentation(): Promise<any>;
export declare function getSegmentationSetting(): Promise<any>;
export declare function imgLandMarkAnalyser(imgLandMarkReq: MLKit.imgLandMarkReq): Promise<MLKit.MLRemoteLandmark>;
export declare function imgLandMarkAnalyserStop(): Promise<any>;
export declare function getLandmarkSetting(): Promise<any>;
export declare function objectAnalyser(objectReq: MLKit.objectReq): Promise<MLKit.MLObject>;
export declare function objectAnalyserStop(): Promise<any>;
export declare function getObjectSetting(): Promise<any>;
export declare function productVisionAnalyser(productReq: MLKit.productReq): Promise<any>;
export declare function productAnalyserStop(): Promise<any>;
export declare function stillSceneAnalyser(stillSceneReq: MLKit.stillSceneReq): Promise<MLKit.MLSceneDetectionResult>;
export declare function stillSceneAnalyserStop(): Promise<any>;
export declare function textImageSuperResolution(textImageSuperResolutionReq: MLKit.textImageSuperResolutionReq): Promise<any>;
export declare function TISRAnalyserStop(): Promise<any>;
