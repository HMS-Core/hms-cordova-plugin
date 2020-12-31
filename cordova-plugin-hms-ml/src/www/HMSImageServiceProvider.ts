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
import { MLBounds,faceReq,MLFace,MLconfig,LANGUAGE,MLProductConfig,MLFormRecogitionConfig,MLTtsConstants,Colors,MLFaceSetting,MLSkeletonConfig,RectStyle,DownloadStrategyCustom,FEATURE,MlObjectAnalyserConfig,ImgSuperResolutionConfig,MLBcrResultConfig,HandkeyPointConfig,MLGcrCaptureUIConfig,MLRemoteLandmarkSetting,MLBcrCaptureConfig,MLImageSegmentationScene,MLTextConfig,MLRemoteTextSetting,MLLocalTextSetting,MLImageClassificationConfig,MLImageSegmentationSetting} from './Interfaces';
import { asyncExec } from './util'
import * as MLKit from './Interfaces';
export{MLBounds,faceReq,MLFace,MLconfig,MLProductConfig,LANGUAGE,MLFormRecogitionConfig,MLTtsConstants,Colors,MLFaceSetting,MLSkeletonConfig,RectStyle,DownloadStrategyCustom,FEATURE,MlObjectAnalyserConfig,ImgSuperResolutionConfig,MLBcrResultConfig,HandkeyPointConfig,MLGcrCaptureUIConfig,MLRemoteLandmarkSetting,MLBcrCaptureConfig,MLImageSegmentationScene,MLTextConfig,MLRemoteTextSetting,MLLocalTextSetting,MLImageClassificationConfig,MLImageSegmentationSetting} from './Interfaces';


  export async function  imageClassificationAnalyser(imageClassificationReq: MLKit.localImageClassificationReq | MLKit.remoteImageClassificationReq): Promise<MLKit.MLImageClassification> {
    return asyncExec('HMSImageServiceProvider', 'ACTION_IMAGE_CLASSIFICATION_ANALYSER', [imageClassificationReq]);
     
  }
  export async function stopImageClassificationAnalyser(): Promise<string> {
    return asyncExec('HMSImageServiceProvider', 'ACTION_CLOSE_IMAGE_CLASSIFICATION_ANALYSER', []);
     
  }
  export async function imgSegmentation(imgSegmentationReq:MLKit.imgSegmentationReq): Promise<MLKit.MLImageSegmentation> {
    return asyncExec('HMSImageServiceProvider', 'ACTION_IMAGE_SEGMENTATION', [imgSegmentationReq]);
     
  }
  export async function stopImgSegmentation(): Promise<any> {
    return asyncExec('HMSImageServiceProvider', 'STOP_IMAGE_SEGMENTATION', []);
     
  }
  export async function  imgLandMarkAnalyser(imgLandMarkReq: MLKit.imgLandMarkReq): Promise<MLKit.MLRemoteLandmark> {
    return asyncExec('HMSImageServiceProvider', 'ACTION_IMAGE_LANDMARK_ANALYSE', [imgLandMarkReq]);
     
  }
  export async function  imgLandMarkAnalyserStop(): Promise<any> {
    return asyncExec('HMSImageServiceProvider', 'ACTION_IMAGE_LANDMARK_STOP', []);
     
  }
  export async function  objectAnalyser(objectReq: MLKit.objectReq): Promise<MLKit.MLObject> {
    return asyncExec('HMSImageServiceProvider', 'ACTION_OBJECT_ANALYSER', [objectReq]);
     
  }
  export async function  stillSceneAnalyser(stillSceneReq: MLKit.stillSceneReq): Promise<MLKit.MLSceneDetectionResult> {
    return asyncExec('HMSImageServiceProvider', 'ACTION_STILL_SCENE_ANALYSE', [stillSceneReq]);
     
  }
  export async function documentSkewCorrectionAnalyser(documentSkewCorrectionReq: MLKit.documentSkewCorrectionReq): Promise<MLKit.MLDocumentSkewDetectResult> {
    return asyncExec('HMSImageServiceProvider', 'ACTION_DOCUMENT_SKEW_ANALYSE', [documentSkewCorrectionReq]);
     
  }
  export async function  textImageSuperResolution(textImageSuperResolutionReq: MLKit.textImageSuperResolutionReq): Promise<any> {
    return asyncExec('HMSImageServiceProvider', 'ACTION_TEXTIMAGE_SUPER_RESOLUTION_ANALYSE', [textImageSuperResolutionReq]);
     
  }
  export async function imageSuperResolution(imageSuperResolutionReq: MLKit.imageSuperResolutionReq): Promise<any> {
    return asyncExec('HMSImageServiceProvider', 'ACTION_IMAGE_SUPER_RESOLUTION_ANALYSE', [imageSuperResolutionReq]);
     
  }
  export async function productVisionAnalyser(productReq: MLKit.productReq): Promise<any> {
    return asyncExec('HMSImageServiceProvider', 'ACTION_PRODUCT_VISION_ANALYSE', [productReq]);
     
  }
  export async function  objectAnalyserStop(): Promise<any> {
    return asyncExec('HMSImageServiceProvider', 'ACTION_OBJECT_ANALYSER_CLOSE', []);
     
  }
  export async function  productAnalyserStop(): Promise<any> {
    return asyncExec('HMSImageServiceProvider', 'ACTION_PRODUCT_VISION_ANALYSE_STOP', []);
     
  }
  export async function  docSkewAnalyserStop(): Promise<any> {
    return asyncExec('HMSImageServiceProvider', 'ACTION_DOCUMENT_SKEW_ANALYSE_STOP', []);
     
  }
  export async function  ISRAnalyserStop(): Promise<any> {
    return asyncExec('HMSImageServiceProvider', 'ACTION_IMAGE_SUPER_RESOLUTION_ANALYSE_STOP', []);
     
  }
  export async function  TISRAnalyserStop(): Promise<any> {
    return asyncExec('HMSImageServiceProvider', 'ACTION_TEXTIMAGE_SUPER_RESOLUTION_ANALYSE_STOP', []);
     
  }
  export async function  stillSceneAnalyserStop(): Promise<any> {
    return asyncExec('HMSImageServiceProvider', 'ACTION_STILL_SCENE_ANALYSE_STOP', []);
     
  }
  export async function  getImageClassificationAnalyserSetting(): Promise<any> {
    return asyncExec('HMSImageServiceProvider', 'ACTION_GET_IMAGE_CLASSIFICATION_ANALYSER_SETTING', []);
     
  }
  export async function  getISRSetting(): Promise<any> {
    return asyncExec('HMSImageServiceProvider', 'ACTION_IMAGE_SUPER_RESOLUTION_ANALYSE_SETTING', []);
     
  }
  export async function  getSegmentationSetting(): Promise<any> {
    return asyncExec('HMSImageServiceProvider', 'ACTION_GET_IMAGE_SEGMENTATION_SETTING', []);
     
  }
  export async function  getLandmarkSetting(): Promise<any> {
    return asyncExec('HMSImageServiceProvider', 'ACTION_IMAGE_LANDMARK_ANALYSE_SETTING', []);
     
  }
  export async function  getObjectSetting(): Promise<any> {
    return asyncExec('HMSImageServiceProvider', 'ACTION_OBJECT_ANALYSER_SETTING', []);
     
  }