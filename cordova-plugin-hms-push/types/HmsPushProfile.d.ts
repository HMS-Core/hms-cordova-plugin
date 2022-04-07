/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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

export declare const HUAWEI_PROFILE = 1;
export declare const CUSTOM_PROFILE = 2;
export declare const UNDEFINED_PROFILE = -1;
export declare function isSupportProfile(): Promise<boolean>;
export declare function addProfile(
  type: number,
  profileId: string
): Promise<any>;
export declare function addProfileWithSubjectId(
  subjectId: string,
  type: number,
  profileId: string
): Promise<any>;
export declare function deleteProfile(profileId: string): Promise<any>;
export declare function deleteProfileWithSubjectId(
  subjectId: string,
  profileId: string
): Promise<any>;
