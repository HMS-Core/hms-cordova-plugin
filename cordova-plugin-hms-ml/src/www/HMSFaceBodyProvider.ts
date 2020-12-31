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
import { MLBounds,faceReq,MLFace,MLconfig,LANGUAGE,MLFaceConfigs,livenessDetectionReq,MLLivenessConfig,MLTtsConstants,Colors,MLFaceSetting,MLSkeletonConfig,RectStyle,DownloadStrategyCustom,FEATURE,MlObjectAnalyserConfig,ImgSuperResolutionConfig,MLBcrResultConfig,HandkeyPointConfig,MLGcrCaptureUIConfig,MLRemoteLandmarkSetting,MLBcrCaptureConfig,MLImageSegmentationScene,MLTextConfig,MLRemoteTextSetting,MLLocalTextSetting,MLImageClassificationConfig,MLImageSegmentationSetting} from './Interfaces';
import { asyncExec } from './util'
import * as MLKit from './Interfaces';
export{MLBounds,faceReq,MLFace,MLconfig,MLFaceConfigs,livenessDetectionReq,MLLivenessConfig,LANGUAGE,MLTtsConstants,Colors,MLFaceSetting,MLSkeletonConfig,RectStyle,DownloadStrategyCustom,FEATURE,MlObjectAnalyserConfig,ImgSuperResolutionConfig,MLBcrResultConfig,HandkeyPointConfig,MLGcrCaptureUIConfig,MLRemoteLandmarkSetting,MLBcrCaptureConfig,MLImageSegmentationScene,MLTextConfig,MLRemoteTextSetting,MLLocalTextSetting,MLImageClassificationConfig,MLImageSegmentationSetting} from './Interfaces';


export async function stillFaceAnalyser(faceReq:MLKit.faceReq): Promise<MLKit.MLFace> {
    return asyncExec('HMSFaceBodyProvider', 'ACTION_STILL_FACE_ANALYSER', [faceReq]);
     
  }
export async function stilFaceAnalyserInfo(): Promise<any> {
    return asyncExec('HMSFaceBodyProvider', 'ACTION_STILL_FACE_INFO', []);
     
  }
export  function stopStillFaceAnalyser(): Promise<any> {
   return asyncExec('HMSFaceBodyProvider', 'ACTION_STOP_STILL_FACE_ANALYSER', []);
  }
export async function stillSkeletonAnalyser(stillSkeletonReq:MLKit.stillSkeletonReq|MLKit.stillSkeletonSimilarityReq): Promise<MLKit.MLSkeleton> {
    return asyncExec('HMSFaceBodyProvider', 'ACTION_STILL_SKELETON_ANALYSE', [stillSkeletonReq]);
     
  }
export async function liveLivenessAnalyser(livenessDetectionReq:MLKit.livenessDetectionReq): Promise<MLKit.MLLivenessCaptureResult> {
    return asyncExec('HMSFaceBodyProvider', 'ACTION_LIVENESS_DETECTION', [livenessDetectionReq]);
     
  }
export async function stillHandkeyAnalyser(stillHandKeypointReq: MLKit.stillHandKeypointReq): Promise<MLKit.MLHandKeypoints> {
    return asyncExec('HMSFaceBodyProvider', 'ACTION_STILL_HANDKEYPOINT_ANALYSE', [stillHandKeypointReq]);
     
  }
export  function stopStillHandKeyAnalyser(): Promise<any> {
    return asyncExec('HMSFaceBodyProvider', 'ACTION_STILL_HANDKEYPOINT_ANALYSE_STOP', []);
}
export  function getFaceAnalyserSetting(): Promise<any> {
  return asyncExec('HMSFaceBodyProvider', 'ACTION_STILL_FACE_ANALYSER_SETTING', []);
}
export  function getHandKeyAnalyserSetting(): Promise<any> {
  return asyncExec('HMSFaceBodyProvider', 'ACTION_STILL_HANDKEYPOINT_ANALYSE_SETTING', []);
}
export  function stopStillSkeletonAnalyser(): Promise<any> {
  return asyncExec('HMSFaceBodyProvider', 'ACTION_STILL_SKELETON_ANALYSE_STOP', []);
}