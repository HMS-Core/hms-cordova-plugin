"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProfileWithSubjectId =
  exports.deleteProfile =
  exports.addProfileWithSubjectId =
  exports.addProfile =
  exports.isSupportProfile =
  exports.UNDEFINED_PROFILE =
  exports.CUSTOM_PROFILE =
  exports.HUAWEI_PROFILE =
    void 0;
const utils_1 = require("./utils");
exports.HUAWEI_PROFILE = 1;
exports.CUSTOM_PROFILE = 2;
exports.UNDEFINED_PROFILE = -1;
function isSupportProfile() {
  return utils_1.asyncExec("HMSPush", "HmsPushProfile", ["isSupportProfile"]);
}
exports.isSupportProfile = isSupportProfile;
function addProfile(type, profileId) {
  return utils_1.asyncExec("HMSPush", "HmsPushProfile", [
    "addProfile",
    type,
    profileId,
  ]);
}
exports.addProfile = addProfile;
function addProfileWithSubjectId(subjectId, type, profileId) {
  return utils_1.asyncExec("HMSPush", "HmsPushProfile", [
    "addProfileWithSubjectId",
    subjectId,
    type,
    profileId,
  ]);
}
exports.addProfileWithSubjectId = addProfileWithSubjectId;
function deleteProfile(profileId) {
  return utils_1.asyncExec("HMSPush", "HmsPushProfile", [
    "deleteProfile",
    profileId,
  ]);
}
exports.deleteProfile = deleteProfile;
function deleteProfileWithSubjectId(subjectId, profileId) {
  return utils_1.asyncExec("HMSPush", "HmsPushProfile", [
    "deleteProfileWithSubjectId",
    subjectId,
    profileId,
  ]);
}
exports.deleteProfileWithSubjectId = deleteProfileWithSubjectId;
//# sourceMappingURL=HmsPushProfile.js.map
