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
import { exec } from "cordova"
import { MLBounds,faceReq,MLFace,MLconfig,LANGUAGE,MLTtsConstants,Colors,MLFaceSetting,MLSkeletonConfig,RectStyle,DownloadStrategyCustom,FEATURE,MlObjectAnalyserConfig,ImgSuperResolutionConfig,MLBcrResultConfig,HandkeyPointConfig,MLGcrCaptureUIConfig,MLRemoteLandmarkSetting,MLBcrCaptureConfig,MLImageSegmentationScene,MLTextConfig,MLRemoteTextSetting,MLLocalTextSetting,MLImageClassificationConfig,MLImageSegmentationSetting} from './Interfaces';
import { asyncExec } from './util'
import * as MLKit from './Interfaces';
export{MLBounds,faceReq,MLFace,MLconfig,LANGUAGE,MLTtsConstants,Colors,MLFaceSetting,MLSkeletonConfig,RectStyle,DownloadStrategyCustom,FEATURE,MlObjectAnalyserConfig,ImgSuperResolutionConfig,MLBcrResultConfig,HandkeyPointConfig,MLGcrCaptureUIConfig,MLRemoteLandmarkSetting,MLBcrCaptureConfig,MLImageSegmentationScene,MLTextConfig,MLRemoteTextSetting,MLLocalTextSetting,MLImageClassificationConfig,MLImageSegmentationSetting} from './Interfaces';


//Voice Provider
export async function localTranslator(localTranslateReq: MLKit.localtranslateReq): Promise<any> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_LOCAL_TRANSLATOR', [localTranslateReq]);
     
  }
  export async function remoteTranslator(remotetranslateReq: MLKit.remotetranslateReq): Promise<any> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_REMOTE_TRANSLATOR', [remotetranslateReq]);
     
  }
  export async function remoteLangDetection(remoteLangDetectionReq: MLKit.remoteLangDetectionReq): Promise<MLKit.MLRemoteLangDetection | MLKit.MLlangDetectionWithFirstDetect> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_REMOTE_LANG_DETECTION', [remoteLangDetectionReq]);
     
  }
  export async function localLangDetection(localLangDetectionReq: MLKit.localLangDetectionReq): Promise<any> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_LOCAL_LANG_DETECTION', [localLangDetectionReq]);
     
  }
  export async function translatorDownloadModel(downloadTranslateReq: MLKit.downloadTranslateReq): Promise<any> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_DOWNLOAD_MODEL', [downloadTranslateReq]);
     
  }
  export async function translatorDeleteModel(deleteTranslateReq: MLKit.deleteTranslateReq): Promise<any> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_DELETE_MODEL', [deleteTranslateReq]);
     
  }
  export async function translatorLocalAllLang(localAllLangReq: MLKit.localAllLangReq): Promise<any> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_LOCAL_GETLANG', [localAllLangReq]);
     
  }
  export async function translatorRemoteAllLang(remoteAllLangReq: MLKit.remoteAllLangReq): Promise<any> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_REMOTE_GETLANG', [remoteAllLangReq]);
     
  }
  export async function stopTranslatorService(): Promise<any> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_STOP_TRANSLATOR_SERVICE', []);
     
  }
  export async function getRTTSetting(): Promise<any> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_RTT_ANALYSE_SETTING', []);
     
  }
  export async function getTTSSetting(): Promise<any> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_TTS_ANALYSE_SETTING', []);
     
  }
  export async function getAFTSetting(): Promise<any> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_AFT_ANALYSE_SETTING', []);
     
  }
  export async function getLangDetectionSetting(): Promise<any> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_LANG_ANALYSE_SETTING', []);
     
  }
  export async function stopLangDetectionService(): Promise<any> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_STOP_LANGDETECTION_SERVICE', []);
     
  }
  export async function soundDectAnalyser(soundDectReq: MLKit.soundDectReq): Promise<MLKit.MLSoundDectResult> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_SOUNDDECT_ANALYSE', [soundDectReq]);
     
  }
  export async function ttsAnalyser(ttsReq: MLKit.ttsReq): Promise<MLKit.MLTtsResult> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_TTS_ANALYSE', [ttsReq]);
     
  }
  export async function ttsAnalyserStop(): Promise<any> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_TTS_ANALYSE_STOP', []);
     
  }
  export async function ttsAnalyserPause(): Promise<any> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_TTS_ANALYSE_PAUSE', []);
     
  }
  export async function ttsAnalyserResume(): Promise<any> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_TTS_ANALYSE_RESUME', []);
     
  }
  export async function ttsAnalysershutDown(): Promise<any> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_TTS_ANALYSE_SHUTDOWN', []);
     
  }
  export async function ttsAnalyserEngineSetting(ttsEngineReq:MLKit.ttsEngineReq): Promise<any> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_TTS_ANALYSE_ENGINESETTING', [ttsEngineReq]);
     
  }
  export async function ttsAnalyserDownloadSetting(): Promise<any> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_TTS_ANALYSE_DSETTING', []);
     
  }
  export async function aftAnalyserClose(): Promise<any> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_AFT_ANALYSE_CLOSE', []);
     
  }
  export async function asrAnalyserStop(): Promise<any> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_ASR_ANALYSE_STOP', []);
     
  }
  export async function aftAnalyserDestroy(): Promise<any> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_AFT_ANALYSE_DESTROY', []);
     
  }
  export async function soundDectAnalyserDestroy(): Promise<any> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_SOUNDDECT_ANALYSE_DESTROY', []);
     
  }
  export async function aftAnalyserPause(): Promise<any> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_AFT_ANALYSE_PAUSE', []);
     
  }
  export async function ttsOfflineAnalyser(ttsReq: MLKit.ttsReq): Promise<MLKit.MLTtsResult> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_TTS_OFFLINE_ANALYSE', [ttsReq]);
     
  }
  export async function aftAnalyser(aftReq: MLKit.aftReq): Promise<MLKit.MLAftResult> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_AFT_ANALYSE', [aftReq]);
     
  }
  export async function getDownloadStrategy(): Promise<any> {
    return asyncExec('HMSVoiceServiceProvider', 'ACTION_GET_DSTRATEGY', []);
     
  }
 export function asrAnalyser(asrReq: MLKit.asrReq, success: any, error: any): any {
    exec(success, error, "HMSVoiceServiceProvider", "ACTION_ASR_ANALYSE", [asrReq]);
  };
  export function rttAnalyserStart(rttReq: MLKit.rttReq, success: any, error: any): any {
    exec(success, error, "HMSVoiceServiceProvider", "ACTION_RTT_ANALYSE", [rttReq]);
  };
  export function rttAnalyserStop(success: any, error: any): any {
    exec(success, error, "HMSVoiceServiceProvider", "ACTION_RTT_ANALYSE_STOP");
  };