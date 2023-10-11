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
import {
    ImgSuperResolutionConfig,
    MLBcrResultConfig,
    MLGcrCaptureUIConfig,
    MLBcrCaptureConfig,
    MLTextConfig,
    MLRemoteTextSetting,
    MLLocalTextSetting,
    MLBcrCaptureResult,
    CordovaErrors,
    MLBcrCaptureErrorCode,
    Colors,
    Region,
} from "./interfaces";
import { asyncExec } from "./util";
import * as MLKit from "./interfaces";
export {
    ImgSuperResolutionConfig,
    MLBcrResultConfig,
    MLGcrCaptureUIConfig,
    MLBcrCaptureConfig,
    MLTextConfig,
    MLRemoteTextSetting,
    MLLocalTextSetting,
    MLBcrCaptureResult,
    CordovaErrors,
    MLBcrCaptureErrorCode,
    Colors,
} from "./interfaces";


export async function serviceInitializer(
    params: MLKit.configReq
): Promise<any> {
    return asyncExec("HMSMLTextPlugin", "HMSMLKIT_INITILALIZER", [params]);
}
export async function appSetting(
    appSettingReq: MLKit.appSettingReq
): Promise<any> {
    return asyncExec("HMSMLTextPlugin", "ACTION_APP_SETTING", [appSettingReq]);
}
export function enableLogger(): Promise<void> {
    return asyncExec("HMSMLTextPlugin", "enableLogger", []);
}
export function disableLogger(): Promise<void> {
    return asyncExec("HMSMLTextPlugin", "disableLogger", []);
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
    return asyncExec("HMSMLTextPlugin", "setUserRegion", [region]);
}
export async function getCountryCode(): Promise<String> {
    return asyncExec("HMSMLTextPlugin", "getCountryCode", []);
}
