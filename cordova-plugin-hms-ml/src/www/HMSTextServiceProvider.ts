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

//Text Provider

export async function imageTextAnalyser(ImageTextReq: MLKit.localImageTextReq | MLKit.remoteImageTextReq): Promise<MLKit.MLText> {
    return asyncExec('HMSTextServiceProvider', 'ACTION_IMAGE_TEXT_ANALYSER', [ImageTextReq]);
     
  }
  export async function stopTextAnalyser(): Promise<any> {
    return asyncExec('HMSTextServiceProvider', 'ACTION_STOP_TEXT_ANALYSER', []);
     
  }
  export async function getTextAnalyserInfo(): Promise<any> {
    return asyncExec('HMSTextServiceProvider', 'ACTION_GET_IMAGE_TEXT_INFO', []);
     
  }
  export async function  documentImageAnalyser(documentImageReq: MLKit.documentImageAnalyserReq): Promise<MLKit.MLDocument> {
    return asyncExec('HMSTextServiceProvider', 'ACTION_DOCUMENT_IMAGE_ANALYSER', [documentImageReq]);
     
  }
  export async function  closeDocumentImageAnalyser(): Promise<any> {
    return asyncExec('HMSTextServiceProvider', 'ACTION_CLOSE_DOCUMENT_IMAGE_ANALYSER', []);
     
  }
  export async function  stopDocumentImageAnalyser(): Promise<any> {
    return asyncExec('HMSTextServiceProvider', 'ACTION_STOP_DOCUMENT_IMAGE_ANALYSER', []);
     
  }
  export async function  getDocumentImageAnalyserSetting(): Promise<any> {
    return asyncExec('HMSTextServiceProvider', 'ACTION_GET_DOCUMENT_IMAGE_ANALYSER_SETTING', []);
     
  }
  export async function  getTextAnalyserSetting(): Promise<any> {
    return asyncExec('HMSTextServiceProvider', 'ACTION_GET_IMAGE_TEXT_SETTING', []);
     
  }
  export async function  getGCRSetting(): Promise<any> {
    return asyncExec('HMSTextServiceProvider', 'ACTION_GET_GCR_SETTING', []);
     
  }
  export async function  stopFormRecognitionAnalyser(): Promise<any> {
    return asyncExec('HMSTextServiceProvider', 'ACTION_FORM_RECOGNITION_STOP', []);
     
  }
  export async function bankCardDetector(bankCardDetecterReq: MLKit.bankCardSDKDetectorReq | MLKit.bankCardPluginDetectorReq): Promise<MLKit.MLBankCard> {
    return asyncExec('HMSTextServiceProvider', 'ACTION_BANK_CARD_DETECTOR', [bankCardDetecterReq]);
     
  }
  export async function stopBankCardDetector(): Promise<any> {
    return asyncExec('HMSTextServiceProvider', 'ACTION_STOP_BANK_CARD_DETECTOR', []);
     
  }
  export async function getBankCardDetectorSetting(): Promise<any> {
    return asyncExec('HMSTextServiceProvider', 'ACTION_GET_BANK_CARD_SETTING', []);
     
  }
  export async function generalCardDetector(generalCardDetectorReq: MLKit.generalCardDetectorReq): Promise<MLKit.MLGcrCaptureResult> {
    return asyncExec('HMSTextServiceProvider', 'ACTION_GENERALCARD_PLUGIN_DETECTOR', [generalCardDetectorReq]);
     
  }
  export async function formRecognitionAnalyser(formRecognizerAnalyserReq:MLKit.formRecognizerAnalyserReq) :Promise<MLKit.MLFormRecogitionResult>{
    return asyncExec('HMSTextServiceProvider', 'ACTION_FORM_RECOGNITION', [formRecognizerAnalyserReq]);
     
  }