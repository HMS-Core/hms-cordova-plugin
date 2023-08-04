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

import { exec } from "cordova";

import { asyncExec } from "./util";
import * as MLLanguagePlugin from "./interfaces";

export {
    appSettingReq,
    LANGUAGE,
    MLTtsConstants,
    MLAftConstants,
    Colors,
    RectStyle,
    FEATURE,
    CordovaErrors,
    MLTtsAudioFragmentConstant,
    MLTtsAudioFragment,
    MLTtsSpeaker,
    MLTtsError,
    MLSpeechRealTimeTranscriptionConstants,
    syncRequestLocalLangDetect,
} from "./interfaces";

// AFT

export async function aftAnalyser(
    aftReq: MLLanguagePlugin.aftReq
): Promise<MLLanguagePlugin.MLAftResult> {
    return asyncExec("HMSMLLanguage", "MLAftAnalyser", [
        "aftAnalyser", 
        aftReq
    ]);
}

export async function getShortAftLanguages(): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLAftAnalyser",[
        "getShortAftLanguages"
    ]);
}

export async function getLongAftLanguages(): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLAftAnalyser", [
        "getLongAftLanguages"
    ]);
}

export async function aftAnalyserClose(): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLAftAnalyser", [
        "aftAnalyserClose"
    ]);
}

export async function getAFTSetting(): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLAftAnalyser",[
        "getAFTSetting"
    ]);
}

export async function aftAnalyserPause(): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLAftAnalyser", [
        "aftAnalyserPause"
    ]);
}

export async function aftAnalyserDestroy(): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLAftAnalyser", [
        "aftAnalyserDestroy"
    ]);
}

// ASR

export function asrAnalyser(
    asrReq: MLLanguagePlugin.asrReq,
    success: any,
    error: any
): any {
    exec(success, error, "HMSMLLanguage", "MLAsrAnalyser", [
        "asrAnalyser",
        asrReq,
    ]);
}

export async function asrAnalyserGetLanguages(): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLAsrAnalyser", [
        "asrAnalyserGetLanguages"
    ]);
}

export async function asrAnalyserStop(): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLAsrAnalyser", [
        "asrAnalyserStop"
    ]);
}

// LangDetection

export async function remoteLangDetection(
    remoteLangDetectionReq: MLLanguagePlugin.remoteLangDetectionReq
): Promise<MLLanguagePlugin.MLRemoteLangDetection | MLLanguagePlugin.MLlangDetectionWithFirstDetect> {
    return asyncExec("HMSMLLanguage", "MLLangDetectionAnalyser",[
        "remoteLangDetection",
        remoteLangDetectionReq
    ]);
}

export async function localLangDetection(
    localLangDetectionReq: MLLanguagePlugin.localLangDetectionReq
): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLLangDetectionAnalyser", [
        "localLangDetection",
        localLangDetectionReq,
    ]);
}

export async function stopLangDetectionService(): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLLangDetectionAnalyser", [
        "stopLangDetectionService"
    ]);
}

export async function getLangDetectionSetting(): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLLangDetectionAnalyser", [
        "getLangDetectionSetting"
    ]
    );
}

export async function syncFirstBestDetect(
    syncRequest: MLLanguagePlugin.syncRequestLocalLangDetect
): Promise<String> {
    return asyncExec("HMSMLLanguage", "MLLangDetectionAnalyser", [
        "syncFirstBestDetect",
        syncRequest,
    ]);
}

export async function syncProbabilityDetect(
    syncRequest: MLLanguagePlugin.syncRequestLocalLangDetect
): Promise<MLLanguagePlugin.MLRemoteLangDetection> {
    return asyncExec("HMSMLLanguage", "MLLangDetectionAnalyser", [
        "syncProbabilityDetect",
        syncRequest
    ]);
}

// RTT

export function rttAnalyserStart(
    rttReq: MLLanguagePlugin.rttReq,
    success: any,
    error: any
): any {
    exec(success, error, "HMSMLLanguage", "MLRttAnalyser", [
        "rttAnalyserStart",
        rttReq,
    ]);
}

export function rttAnalyserStop(
    success: any, 
    error: any
): any {
    exec(success, error, "HMSMLLanguage", "MLRttAnalyser" , [
        "rttAnalyserStop"
    ]);
}

export async function getRTTSetting(): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLRttAnalyser", [
        "getRTTSetting"
    ]);
}

export async function getRttLanguages(): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLRttAnalyser", [
        "getRttLanguages"
    ]);
}

// SoundDetect

export async function soundDectAnalyser(
    soundDectReq: MLLanguagePlugin.soundDectReq
): Promise<MLLanguagePlugin.MLSoundDectResult> {
    return asyncExec("HMSMLLanguage", "MLSoundDetectionAnalyser", [
        "soundDectAnalyser",
        soundDectReq,
    ]);
}

export async function soundDectAnalyserDestroy(): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLSoundDetectionAnalyser", [
        "soundDectAnalyserDestroy"
    ]);
}


// Translate

export async function remoteTranslator(
    remotetranslateReq: MLLanguagePlugin.remotetranslateReq
): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLTranslatorAnalyser", [
        "remoteTranslator",
        remotetranslateReq,
    ]);
}

export async function localTranslator(
    localTranslateReq: MLLanguagePlugin.localtranslateReq
): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLTranslatorAnalyser", [
        "localTranslator",
        localTranslateReq,
    ]);
}

export async function translatorDownloadModel(
    downloadTranslateReq: MLLanguagePlugin.downloadTranslateReq
): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLTranslatorAnalyser", [
        "translatorDownloadModel",
        downloadTranslateReq,
    ]);
}

export async function translatorDeleteModel(
    deleteTranslateReq: MLLanguagePlugin.deleteTranslateReq
): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLTranslatorAnalyser", [
        "translatorDeleteModel",
        deleteTranslateReq,
    ]);
}

export async function translatorLocalAllLang(
    localAllLangReq: MLLanguagePlugin.localAllLangReq
): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLTranslatorAnalyser", [
        "translatorLocalAllLang",
        localAllLangReq,
    ]);
}

export async function translatorRemoteAllLang(
    remoteAllLangReq: MLLanguagePlugin.remoteAllLangReq
): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLTranslatorAnalyser", [
        "translatorRemoteAllLang",
        remoteAllLangReq,
    ]);
}

export async function getDownloadStrategy(): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLTranslatorAnalyser", [
        "getDownloadStrategy"
    ]);
}

export async function stopTranslatorService(): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLTranslatorAnalyser", [
        "stopTranslatorService"
    ]);
}

// TSS

export async function ttsAnalyser(
    ttsReq: MLLanguagePlugin.ttsReq
): Promise<MLLanguagePlugin.MLTtsResult> {
    return asyncExec("HMSMLLanguage", "MLTtsAnalyser", [
        "ttsAnalyser",
        ttsReq
    ]);
}

export async function ttsAnalyserStop(): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLTtsAnalyser", [
        "ttsAnalyserStop"
    ]);
}

export async function ttsAnalyserSetPLayerVolume(
    ttsEngineReq: MLLanguagePlugin.ttsEngineReq
): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLTtsAnalyser", [
        "ttsAnalyserSetPLayerVolume",
        ttsEngineReq
    ]);
}

export async function ttsAnalyserDownloadSetting(): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLTtsAnalyser", [
        "ttsAnalyserDownloadSetting"
    ]);
}

export async function ttsAnalyserEngineSetting(
    ttsEngineReq: MLLanguagePlugin.ttsEngineReq
): Promise<MLLanguagePlugin.ttsAnalyserSettingsResults> {
    return asyncExec("HMSMLLanguage", "MLTtsAnalyser", [
        "ttsAnalyserEngineSetting",
        ttsEngineReq
    ]);
}

export async function ttsAnalyserShutDown(): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLTtsAnalyser", [
        "ttsAnalyserShutDown"
    ]);
}

export async function ttsAnalyserPause(): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLTtsAnalyser", [
        "ttsAnalyserPause"
    ]);
}

export async function ttsAnalyserResume(): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLTtsAnalyser", [
        "ttsAnalyserResume"
    ]);
}

export async function ttsOfflineAnalyser(
    ttsReq: MLLanguagePlugin.ttsReq
): Promise<MLLanguagePlugin.MLTtsResult> {
    return asyncExec("HMSMLLanguage", "MLTtsAnalyser", [
        "ttsOfflineAnalyser",
        ttsReq
    ]);
}

export async function getTTSSetting(): Promise<any> {
    return asyncExec("HMSMLLanguage", "MLTtsAnalyser", [
        "getTTSSetting"
    ]);
}