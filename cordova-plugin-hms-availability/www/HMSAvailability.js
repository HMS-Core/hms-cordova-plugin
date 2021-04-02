"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showErrorNotification = exports.showErrorDialogFragment = exports.setServicesVersionCode = exports.resolveError = exports.isUserResolvableError = exports.isHuaweiMobileNoticeAvailable = exports.isHuaweiMobileServicesAvailable = exports.getErrorString = exports.getServicesVersionCode = exports.getApiMap = void 0;
/*
    Copyright 2020-2021. Huawei Technologies Co., Ltd. All rights reserved.

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
const utils_1 = require("./utils");
function getApiMap() {
    return utils_1.asyncExec('HMSAvailability', 'HMSAvailabilityImpl', ['getApiMap']);
}
exports.getApiMap = getApiMap;
function getServicesVersionCode() {
    return utils_1.asyncExec('HMSAvailability', 'HMSAvailabilityImpl', ['getServicesVersionCode']);
}
exports.getServicesVersionCode = getServicesVersionCode;
function getErrorString(errorCode) {
    return utils_1.asyncExec('HMSAvailability', 'HMSAvailabilityImpl', ['getErrorString', errorCode]);
}
exports.getErrorString = getErrorString;
function isHuaweiMobileServicesAvailable(minApkVersion) {
    if (minApkVersion) {
        return utils_1.asyncExec('HMSAvailability', 'HMSAvailabilityImpl', ['isHuaweiMobileServicesAvailable', minApkVersion]);
    }
    else {
        return utils_1.asyncExec('HMSAvailability', 'HMSAvailabilityImpl', ['isHuaweiMobileServicesAvailable']);
    }
}
exports.isHuaweiMobileServicesAvailable = isHuaweiMobileServicesAvailable;
function isHuaweiMobileNoticeAvailable() {
    return utils_1.asyncExec('HMSAvailability', 'HMSAvailabilityImpl', ['isHuaweiMobileNoticeAvailable']);
}
exports.isHuaweiMobileNoticeAvailable = isHuaweiMobileNoticeAvailable;
function isUserResolvableError(errorCode) {
    return utils_1.asyncExec('HMSAvailability', 'HMSAvailabilityImpl', ['isUserResolvableError', errorCode]);
}
exports.isUserResolvableError = isUserResolvableError;
function resolveError(errorCode, requestCode) {
    return utils_1.asyncExec('HMSAvailability', 'HMSAvailabilityImpl', ['resolveError', errorCode, requestCode]);
}
exports.resolveError = resolveError;
function setServicesVersionCode(servicesVersionCode) {
    return utils_1.asyncExec('HMSAvailability', 'HMSAvailabilityImpl', ['setServicesVersionCode', servicesVersionCode]);
}
exports.setServicesVersionCode = setServicesVersionCode;
function showErrorDialogFragment(errorCode, requestCode, cancelListener) {
    if (cancelListener) {
        window.subscribeHMSEvent("onCancel", cancelListener);
        return utils_1.asyncExec('HMSAvailability', 'HMSAvailabilityImpl', ['showErrorDialogFragment', errorCode, requestCode, cancelListener]);
    }
    else {
        return utils_1.asyncExec('HMSAvailability', 'HMSAvailabilityImpl', ['showErrorDialogFragment', errorCode, requestCode]);
    }
}
exports.showErrorDialogFragment = showErrorDialogFragment;
function showErrorNotification(errorCode) {
    return utils_1.asyncExec('HMSAvailability', 'HMSAvailabilityImpl', ['showErrorNotification', errorCode]);
}
exports.showErrorNotification = showErrorNotification;
//# sourceMappingURL=HMSAvailability.js.map
