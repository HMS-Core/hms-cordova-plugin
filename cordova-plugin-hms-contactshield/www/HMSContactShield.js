"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestPermission = exports.hasPermission = exports.unregisterReceiver = exports.registerReceiver = exports.handleCallback = exports.enableLogger = exports.disableLogger = exports.putSharedKeyFilesOld = exports.putSharedKeyFiles = exports.isContactShieldRunning = exports.getPeriodicKey = exports.getContactWindow = exports.getContactSketch = exports.stopContactShield = exports.startContactShieldNoPersistent = exports.startContactShieldOld = exports.startContactShield = exports.getContactDetail = exports.clearData = exports.HMSStatusCode = exports.RiskLevel = exports.Permission = exports.ContactShieldEngine = exports.ContactShieldSetting = void 0;
const utils_1 = require("./utils");
var ContactShieldSetting;
(function (ContactShieldSetting) {
    ContactShieldSetting[ContactShieldSetting["DEFAULT_INCUBATION_PERIOD"] = 14] = "DEFAULT_INCUBATION_PERIOD";
})(ContactShieldSetting = exports.ContactShieldSetting || (exports.ContactShieldSetting = {}));
var ContactShieldEngine;
(function (ContactShieldEngine) {
    ContactShieldEngine["TOKEN_A"] = "TOKEN_WINDOW_MODE";
})(ContactShieldEngine = exports.ContactShieldEngine || (exports.ContactShieldEngine = {}));
var Permission;
(function (Permission) {
    Permission[Permission["INTERNET"] = 1] = "INTERNET";
    Permission[Permission["ACCESS_NETWORK_STATE"] = 2] = "ACCESS_NETWORK_STATE";
    Permission[Permission["BLUETOOTH"] = 3] = "BLUETOOTH";
    Permission[Permission["BLUETOOTH_ADMIN"] = 4] = "BLUETOOTH_ADMIN";
    Permission[Permission["ACCESS_COARSE_LOCATION"] = 5] = "ACCESS_COARSE_LOCATION";
    Permission[Permission["ACCESS_FINE_LOCATION"] = 6] = "ACCESS_FINE_LOCATION";
})(Permission = exports.Permission || (exports.Permission = {}));
var RiskLevel;
(function (RiskLevel) {
    RiskLevel[RiskLevel["RISK_LEVEL_INVALID"] = 0] = "RISK_LEVEL_INVALID";
    RiskLevel[RiskLevel["RISK_LEVEL_LOWEST"] = 1] = "RISK_LEVEL_LOWEST";
    RiskLevel[RiskLevel["RISK_LEVEL_LOW"] = 2] = "RISK_LEVEL_LOW";
    RiskLevel[RiskLevel["RISK_LEVEL_MEDIUM_LOW"] = 3] = "RISK_LEVEL_MEDIUM_LOW";
    RiskLevel[RiskLevel["RISK_LEVEL_MEDIUM"] = 4] = "RISK_LEVEL_MEDIUM";
    RiskLevel[RiskLevel["RISK_LEVEL_MEDIUM_HIGH"] = 5] = "RISK_LEVEL_MEDIUM_HIGH";
    RiskLevel[RiskLevel["RISK_LEVEL_HIGH"] = 6] = "RISK_LEVEL_HIGH";
    RiskLevel[RiskLevel["RISK_LEVEL_EXT_HIGH"] = 7] = "RISK_LEVEL_EXT_HIGH";
    RiskLevel[RiskLevel["RISK_LEVEL_HIGHEST"] = 8] = "RISK_LEVEL_HIGHEST";
})(RiskLevel = exports.RiskLevel || (exports.RiskLevel = {}));
var HMSStatusCode;
(function (HMSStatusCode) {
    HMSStatusCode[HMSStatusCode["STATUS_SUCCESS"] = 0] = "STATUS_SUCCESS";
    HMSStatusCode[HMSStatusCode["STATUS_FAILURE"] = -1] = "STATUS_FAILURE";
    HMSStatusCode[HMSStatusCode["STATUS_API_DISORDER"] = 8001] = "STATUS_API_DISORDER";
    HMSStatusCode[HMSStatusCode["STATUS_APP_QUOTA_LIMITED"] = 8100] = "STATUS_APP_QUOTA_LIMITED";
    HMSStatusCode[HMSStatusCode["STATUS_DISK_FULL"] = 8101] = "STATUS_DISK_FULL";
    HMSStatusCode[HMSStatusCode["STATUS_BLUETOOTH_OPERATION_ERROR"] = 8102] = "STATUS_BLUETOOTH_OPERATION_ERROR";
    HMSStatusCode[HMSStatusCode["STATUS_MISSING_PERMISSION_BLUETOOTH"] = 8016] = "STATUS_MISSING_PERMISSION_BLUETOOTH";
    HMSStatusCode[HMSStatusCode["STATUS_MISSING_SETTING_LOCATION_ON"] = 8020] = "STATUS_MISSING_SETTING_LOCATION_ON";
    HMSStatusCode[HMSStatusCode["STATUS_INTERNAL_ERROR"] = 8060] = "STATUS_INTERNAL_ERROR";
    HMSStatusCode[HMSStatusCode["STATUS_MISSING_PERMISSION_INTERNET"] = 8064] = "STATUS_MISSING_PERMISSION_INTERNET";
})(HMSStatusCode = exports.HMSStatusCode || (exports.HMSStatusCode = {}));
function clearData() {
    return utils_1.asyncExec('HMSContactShield', 'ContactShieldModule', ["clearData"]);
}
exports.clearData = clearData;
function getContactDetail(token) {
    return utils_1.asyncExec('HMSContactShield', 'ContactShieldModule', ['getContactDetail', token ? token : ""]);
}
exports.getContactDetail = getContactDetail;
function startContactShield(incubationPeriod) {
    return utils_1.asyncExec('HMSContactShield', 'ContactShieldModule', ['startContactShield', incubationPeriod ? incubationPeriod : ContactShieldSetting.DEFAULT_INCUBATION_PERIOD]);
}
exports.startContactShield = startContactShield;
function startContactShieldOld(incubationPeriod) {
    return utils_1.asyncExec('HMSContactShield', 'ContactShieldModule', ['startContactShieldOld', incubationPeriod ? incubationPeriod : ContactShieldSetting.DEFAULT_INCUBATION_PERIOD]);
}
exports.startContactShieldOld = startContactShieldOld;
function startContactShieldNoPersistent(incubationPeriod) {
    return utils_1.asyncExec('HMSContactShield', 'ContactShieldModule', ['startContactShieldNoPersistent', incubationPeriod ? incubationPeriod : ContactShieldSetting.DEFAULT_INCUBATION_PERIOD]);
}
exports.startContactShieldNoPersistent = startContactShieldNoPersistent;
function stopContactShield() {
    return utils_1.asyncExec('HMSContactShield', 'ContactShieldModule', ['stopContactShield']);
}
exports.stopContactShield = stopContactShield;
function getContactSketch(token) {
    return utils_1.asyncExec('HMSContactShield', 'ContactShieldModule', ['getContactSketch', token ? token : ""]);
}
exports.getContactSketch = getContactSketch;
function getContactWindow(token) {
    return utils_1.asyncExec('HMSContactShield', 'ContactShieldModule', ['getContactWindow', token ? token : ""]);
}
exports.getContactWindow = getContactWindow;
function getPeriodicKey() {
    return utils_1.asyncExec('HMSContactShield', 'ContactShieldModule', ['getPeriodicKey']);
}
exports.getPeriodicKey = getPeriodicKey;
function isContactShieldRunning() {
    return __awaiter(this, void 0, void 0, function* () {
        const { result } = yield utils_1.asyncExec('HMSContactShield', 'ContactShieldModule', ['isContactShieldRunning']);
        return result;
    });
}
exports.isContactShieldRunning = isContactShieldRunning;
function putSharedKeyFiles(sharedKeyData) {
    // Set defaults
    sharedKeyData.diagnosisConfiguration = Object.assign({
        attenuationDurationThresholds: [50, 74],
        attenuationRiskValues: [4, 4, 4, 4, 4, 4, 4, 4],
        attenuationWeight: 50,
        daysAfterContactedRiskValues: [4, 4, 4, 4, 4, 4, 4, 4],
        daysAfterContactedWeight: 50,
        durationRiskValues: [4, 4, 4, 4, 4, 4, 4, 4],
        durationWeight: 50,
        initialRiskLevelRiskValues: [4, 4, 4, 4, 4, 4, 4, 4],
        initialRiskLevelWeight: 50,
        minimumRiskValueThreshold: 1
    }, sharedKeyData.diagnosisConfiguration);
    return utils_1.asyncExec('HMSContactShield', 'ContactShieldModule', ['putSharedKeyFiles', sharedKeyData]);
}
exports.putSharedKeyFiles = putSharedKeyFiles;
function putSharedKeyFilesOld(sharedKeyData) {
    // Set defaults
    sharedKeyData.diagnosisConfiguration = Object.assign({
        attenuationDurationThresholds: [50, 74],
        attenuationRiskValues: [4, 4, 4, 4, 4, 4, 4, 4],
        attenuationWeight: 50,
        daysAfterContactedRiskValues: [4, 4, 4, 4, 4, 4, 4, 4],
        daysAfterContactedWeight: 50,
        durationRiskValues: [4, 4, 4, 4, 4, 4, 4, 4],
        durationWeight: 50,
        initialRiskLevelRiskValues: [4, 4, 4, 4, 4, 4, 4, 4],
        initialRiskLevelWeight: 50,
        minimumRiskValueThreshold: 1
    }, sharedKeyData.diagnosisConfiguration);
    return utils_1.asyncExec('HMSContactShield', 'ContactShieldModule', ['putSharedKeyFilesOld', sharedKeyData]);
}
exports.putSharedKeyFilesOld = putSharedKeyFilesOld;
function disableLogger() {
    return utils_1.asyncExec('HMSContactShield', 'ContactShieldModule', ['disableLogger']);
}
exports.disableLogger = disableLogger;
function enableLogger() {
    return utils_1.asyncExec('HMSContactShield', 'ContactShieldModule', ['enableLogger']);
}
exports.enableLogger = enableLogger;
function handleCallback(event, callback) {
    window.subscribeHMSEvent(event, callback);
}
exports.handleCallback = handleCallback;
function registerReceiver() {
    return utils_1.asyncExec('HMSContactShield', 'ContactShieldModule', ['registerReceiver']);
}
exports.registerReceiver = registerReceiver;
function unregisterReceiver() {
    return utils_1.asyncExec('HMSContactShield', 'ContactShieldModule', ['unregisterReceiver']);
}
exports.unregisterReceiver = unregisterReceiver;
function hasPermission(permission) {
    return utils_1.asyncExec('HMSContactShield', 'ContactShieldModule', ['hasPermission', permission]);
}
exports.hasPermission = hasPermission;
function requestPermission(permission) {
    return utils_1.asyncExec('HMSContactShield', 'ContactShieldModule', ['requestPermission', permission]);
}
exports.requestPermission = requestPermission;
//# sourceMappingURL=HMSContactShield.js.map