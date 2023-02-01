/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.

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

import { asyncExec } from "./utils";

export const HUAWEI_PROFILE = 1;
export const CUSTOM_PROFILE = 2;
export const UNDEFINED_PROFILE = -1;

export function isSupportProfile(): Promise<boolean> {
    return asyncExec("HMSPush", "HmsPushProfile", ["isSupportProfile"]);
}
export function addProfile(type: number, profileId: string): Promise<any> {
    return asyncExec("HMSPush", "HmsPushProfile", [
        "addProfile",
        type,
        profileId,
    ]);
}
export function addProfileWithSubjectId(
    subjectId: string,
    type: number,
    profileId: string
): Promise<any> {
    return asyncExec("HMSPush", "HmsPushProfile", [
        "addProfileWithSubjectId",
        subjectId,
        type,
        profileId,
    ]);
}
export function deleteProfile(profileId: string): Promise<any> {
    return asyncExec("HMSPush", "HmsPushProfile", ["deleteProfile", profileId]);
}
export function deleteProfileWithSubjectId(
    subjectId: string,
    profileId: string
): Promise<any> {
    return asyncExec("HMSPush", "HmsPushProfile", [
        "deleteProfileWithSubjectId",
        subjectId,
        profileId,
    ]);
}
