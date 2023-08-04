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

export async function serviceInitializer(
    params: MLLanguagePlugin.configReq
): Promise<any> {
    return asyncExec("HMSMLPlugin", "HMSMLApplication", [
        "serviceInitializer",
        params
    ]);
}

export async function appSetting(
    appSettingReq: MLLanguagePlugin.appSettingReq
): Promise<any> {
    return asyncExec("HMSMLPlugin", "HMSMLApplication", [
        "appSetting",
        appSettingReq
    ]);
}

/// Sets a data processing location when you choose to manually manage and specify such a location.
///
/// REGION_DR_UNKNOWN = 1001,
/// REGION_DR_CHINA = 1002,
/// REGION_DR_RUSSIA = 1005,
/// REGION_DR_GERMAN = 1006,
/// REGION_DR_SINGAPORE = 1007
export async function setUserRegion(
    region: number
): Promise<void> {
    return asyncExec("HMSMLPlugin", "HMSMLApplication", [
        "setUserRegion",
        region
    ]);
}

export async function getCountryCode(): Promise<String> {
    return asyncExec("HMSMLPlugin", "HMSMLApplication", [
        "getCountryCode"
    ]);
}

export function enableLogger(): Promise<void> {
    return asyncExec("HMSMLPlugin", "HMSMLApplication", [
        "enableLogger"
    ]);
}

export function disableLogger(): Promise<void> {
    return asyncExec("HMSMLPlugin", "HMSMLApplication", [
        "disableLogger"
    ]);
}
