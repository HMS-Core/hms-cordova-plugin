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
import { asyncExec } from "./util";
import * as MLKit from "./interfaces";
export * from './interfaces'

// Classification

export async function imageClassificationAnalyser(
    imageClassificationReq:
        | MLKit.localImageClassificationReq
        | MLKit.remoteImageClassificationReq
): Promise<MLKit.MLImageClassification> {
    return asyncExec("HMSMLImage", "MLImageClassificationAnalyser", [
        "imageClassificationAnalyser",
        imageClassificationReq,
    ]);
}
export async function stopImageClassificationAnalyser(): Promise<string> {
    return asyncExec("HMSMLImage", "MLImageClassificationAnalyser", [
        "stopImageClassificationAnalyser"
    ]);
}
export async function getImageClassificationAnalyserSetting(): Promise<any> {
    return asyncExec("HMSMLImage", "MLImageClassificationAnalyser", [
        "getImageClassificationAnalyserSetting"
    ]);
}

// Document Skew Correction

export async function documentSkewCorrectionAnalyser(
    documentSkewCorrectionReq: MLKit.documentSkewCorrectionReq
): Promise<MLKit.MLDocumentSkewDetectResult> {
    return asyncExec("HMSMLImage", "MLDocumentSkewCorrectionAnalyser", [
        "documentSkewCorrectionAnalyser",
        documentSkewCorrectionReq,
    ]);
}
export async function docSkewAnalyserStop(): Promise<any> {
    return asyncExec("HMSMLImage", "MLDocumentSkewCorrectionAnalyser", [
        "docSkewAnalyserStop"
    ]);
}

// Image Super Resolution

export async function imageSuperResolution(
    imageSuperResolutionReq: MLKit.imageSuperResolutionReq
): Promise<any> {
    return asyncExec("HMSMLImage", "MLImageSuperResolutionAnalyser", [
        "imageSuperResolution",
        imageSuperResolutionReq
    ]);
}
export async function getISRSetting(): Promise<any> {
    return asyncExec("HMSMLImage", "MLImageSuperResolutionAnalyser", [
        "getISRSetting"
    ]);
}
export async function ISRAnalyserStop(): Promise<any> {
    return asyncExec("HMSMLImage", "MLImageSuperResolutionAnalyser", [
        "ISRAnalyserStop"
    ]);
}

// Image Segmentation

export async function imgSegmentation(
    imgSegmentationReq: MLKit.imgSegmentationReq
): Promise<MLKit.MLImageSegmentation> {
    return asyncExec("HMSMLImage", "MLImageSegmentationAnalyser", [
        "imgSegmentation",
        imgSegmentationReq,
    ]);
}
export async function stopImgSegmentation(): Promise<any> {
    return asyncExec("HMSMLImage", "MLImageSegmentationAnalyser", [
        "stopImgSegmentation"
    ]);
}
export async function getSegmentationSetting(): Promise<any> {
    return asyncExec("HMSMLImage", "MLImageSegmentationAnalyser", [
        "getSegmentationSetting"
    ]);
}

// Landmark

export async function imgLandMarkAnalyser(
    imgLandMarkReq: MLKit.imgLandMarkReq
): Promise<MLKit.MLRemoteLandmark> {
    return asyncExec("HMSMLImage", "MLImageLandMarkAnalyser", [
        "imgLandMarkAnalyser",
        imgLandMarkReq
    ]);
}
export async function imgLandMarkAnalyserStop(): Promise<any> {
    return asyncExec("HMSMLImage", "MLImageLandMarkAnalyser", [
        "imgLandMarkAnalyserStop"
    ]);
}
export async function getLandmarkSetting(): Promise<any> {
    return asyncExec("HMSMLImage", "MLImageLandMarkAnalyser", [
        "getLandmarkSetting"
    ]);
}

// Object

export async function objectAnalyser(
    objectReq: MLKit.objectReq
): Promise<MLKit.MLObject> {
    return asyncExec("HMSMLImage", "MLImageObjectAnalyser", [
        "objectAnalyser",
        objectReq,
    ]);
}
export async function objectAnalyserStop(): Promise<any> {
    return asyncExec("HMSMLImage",  "MLImageObjectAnalyser", [
        "objectAnalyserStop"
    ]);
}
export async function getObjectSetting(): Promise<any> {
    return asyncExec("HMSMLImage", "MLImageObjectAnalyser",[
        "getObjectSetting"
    ]);
}


// Product

export async function productVisionAnalyser(
    productReq: MLKit.productReq
): Promise<any> {
    return asyncExec("HMSMLImage", "MLProductVisionAnalyser", [
        "productVisionAnalyser",
        productReq
    ]);
}

export async function productAnalyserStop(): Promise<any> {
    return asyncExec("HMSMLImage", "MLProductVisionAnalyser", [
        "productAnalyserStop"
    ]);
}

// Scene Detection

export async function stillSceneAnalyser(
    stillSceneReq: MLKit.stillSceneReq
): Promise<MLKit.MLSceneDetectionResult> {
    return asyncExec("HMSMLImage", "MLStillSceneDetectionAnalyser", [
        "stillSceneAnalyser",
        stillSceneReq,
    ]);
}
export async function stillSceneAnalyserStop(): Promise<any> {
    return asyncExec("HMSMLImage", "MLStillSceneDetectionAnalyser", [
        "stillSceneAnalyserStop"
    ]);
}

// Text Image Super Resolution

export async function textImageSuperResolution(
    textImageSuperResolutionReq: MLKit.textImageSuperResolutionReq
): Promise<any> {
    return asyncExec("HMSMLImage", "MLTextImageSuperResolutionAnalyser", [
        "textImageSuperResolution",
        textImageSuperResolutionReq
    ]);
}
export async function TISRAnalyserStop(): Promise<any> {
    return asyncExec("HMSMLImage", "MLTextImageSuperResolutionAnalyser", [
        "TISRAnalyserStop"
    ]);
}