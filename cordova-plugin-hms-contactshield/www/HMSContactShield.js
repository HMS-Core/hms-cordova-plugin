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
"use strict";
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
exports.putSharedKeyFilesKeysProvider = exports.putSharedKeyFilesProvider = exports.putSharedKeyFilesKeys = exports.getDailySketch = exports.getSharedKeysDataMapping = exports.setSharedKeysDataMapping = exports.isSupportScanningWithoutLocation = exports.getDeviceCalibrationConfidence = exports.getContactShieldVersion = exports.getStatus = exports.requestPermissions = exports.hasPermission = exports.unregisterReceiver = exports.registerReceiver = exports.handleCallback = exports.enableLogger = exports.disableLogger = exports.putSharedKeyFilesOld = exports.putSharedKeyFiles = exports.isContactShieldRunning = exports.getPeriodicKey = exports.getContactWindow = exports.getContactSketch = exports.stopContactShield = exports.startContactShieldNoPersistent = exports.startContactShieldOld = exports.startContactShield = exports.getContactDetail = exports.clearData = exports.HMSStatusCode = exports.RiskLevel = exports.HMSPermission = exports.ContactShieldEngine = exports.ContactShieldSetting = void 0;

const utils_1 = require("./utils");
var ContactShieldSetting;
(function (ContactShieldSetting) {
    ContactShieldSetting[ContactShieldSetting["DEFAULT_INCUBATION_PERIOD"] = 14] = "DEFAULT_INCUBATION_PERIOD";
})(ContactShieldSetting = exports.ContactShieldSetting || (exports.ContactShieldSetting = {}));
var ContactShieldEngine;
(function (ContactShieldEngine) {
    ContactShieldEngine["TOKEN_A"] = "TOKEN_WINDOW_MODE";
})(ContactShieldEngine = exports.ContactShieldEngine || (exports.ContactShieldEngine = {}));
var HMSPermission;
(function (HMSPermission) {
    HMSPermission["ACCESS_NETWORK_STATE"] = "android.permission.ACCESS_NETWORK_STATE";
    HMSPermission["BLUETOOTH"] = "android.permission.BLUETOOTH";
    HMSPermission["BLUETOOTH_ADMIN"] = "android.permission.BLUETOOTH_ADMIN";
    HMSPermission["ACCESS_COARSE_LOCATION"] = "android.permission.ACCESS_COARSE_LOCATION";
    HMSPermission["ACCESS_FINE_LOCATION"] = "android.permission.ACCESS_FINE_LOCATION";
})(HMSPermission = exports.HMSPermission || (exports.HMSPermission = {}));
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
    HMSStatusCode[HMSStatusCode["STATUS_BLUETOOTHW_OPERATION_ERROR"] = 8102] = "STATUS_BLUETOOTHW_OPERATION_ERROR";
    HMSStatusCode[HMSStatusCode["STATUS_MISSING_PERMISSION_LOCATION"] = 8103] = "STATUS_MISSING_PERMISSION_LOCATION";
    HMSStatusCode[HMSStatusCode["STATUS_SIGNATURE_VERIFY_FAILED"] = 8104] = "STATUS_SIGNATURE_VERIFY_FAILED";
    HMSStatusCode[HMSStatusCode["STATUS_UNAUTHORIZED"] = 8105] = "STATUS_UNAUTHORIZED";
    HMSStatusCode[HMSStatusCode["STATUS_EMUI_RESTRICTED"] = 8106] = "STATUS_EMUI_RESTRICTED";
    HMSStatusCode[HMSStatusCode["STATUS_MISSING_PERMISSION_BLUETOOTH"] = 8016] = "STATUS_MISSING_PERMISSION_BLUETOOTH";
    HMSStatusCode[HMSStatusCode["STATUS_MISSING_SETTING_LOCATION_ON"] = 8020] = "STATUS_MISSING_SETTING_LOCATION_ON";
    HMSStatusCode[HMSStatusCode["STATUS_INTERNAL_ERROR"] = 8060] = "STATUS_INTERNAL_ERROR";
    HMSStatusCode[HMSStatusCode["STATUS_MISSING_PERMISSION_INTERNET"] = 8064] = "STATUS_MISSING_PERMISSION_INTERNET";
})(HMSStatusCode = exports.HMSStatusCode || (exports.HMSStatusCode = {}));
function clearData() {
    return (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", ["clearData"]);
}
exports.clearData = clearData;
function getContactDetail(token) {
    return (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", [
        "getContactDetail",
        token ? token : "",
    ]);
}
exports.getContactDetail = getContactDetail;
function startContactShield(incubationPeriod) {
    return (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", [
        "startContactShield",
        incubationPeriod
            ? incubationPeriod
            : ContactShieldSetting.DEFAULT_INCUBATION_PERIOD,
    ]);
}
exports.startContactShield = startContactShield;
function startContactShieldOld(incubationPeriod) {
    return (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", [
        "startContactShieldOld",
        incubationPeriod
            ? incubationPeriod
            : ContactShieldSetting.DEFAULT_INCUBATION_PERIOD,
    ]);
}
exports.startContactShieldOld = startContactShieldOld;
function startContactShieldNoPersistent(incubationPeriod) {
    return (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", [
        "startContactShieldNoPersistent",
        incubationPeriod
            ? incubationPeriod
            : ContactShieldSetting.DEFAULT_INCUBATION_PERIOD,
    ]);
}
exports.startContactShieldNoPersistent = startContactShieldNoPersistent;
function stopContactShield() {
    return (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", [
        "stopContactShield",
    ]);
}
exports.stopContactShield = stopContactShield;
function getContactSketch(token) {
    return (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", [
        "getContactSketch",
        token ? token : "",
    ]);
}
exports.getContactSketch = getContactSketch;
function getContactWindow(token) {
    return (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", [
        "getContactWindow",
        token ? token : "",
    ]);
}
exports.getContactWindow = getContactWindow;
function getPeriodicKey() {
    return (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", [
        "getPeriodicKey",
    ]);
}
exports.getPeriodicKey = getPeriodicKey;
function isContactShieldRunning() {
    return __awaiter(this, void 0, void 0, function* () {
        const { result } = yield (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", ["isContactShieldRunning"]);
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
        minimumRiskValueThreshold: 1,
    }, sharedKeyData.diagnosisConfiguration);
    return (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", [
        "putSharedKeyFiles",
        sharedKeyData,
    ]);
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
        minimumRiskValueThreshold: 1,
    }, sharedKeyData.diagnosisConfiguration);
    return (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", [
        "putSharedKeyFilesOld",
        sharedKeyData,
    ]);
}
exports.putSharedKeyFilesOld = putSharedKeyFilesOld;
function disableLogger() {
    return (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", [
        "disableLogger",
    ]);
}
exports.disableLogger = disableLogger;
function enableLogger() {
    return (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", [
        "enableLogger",
    ]);
}
exports.enableLogger = enableLogger;
function handleCallback(event, callback) {
    window.subscribeHMSEvent(event, callback);
}
exports.handleCallback = handleCallback;
function registerReceiver() {
    return (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", [
        "registerReceiver",
    ]);
}
exports.registerReceiver = registerReceiver;
function unregisterReceiver() {
    return (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", [
        "unregisterReceiver",
    ]);
}
exports.unregisterReceiver = unregisterReceiver;
function hasPermission(permission) {
    return (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", [
        "hasPermission",
        permission,
    ]);
}
exports.hasPermission = hasPermission;
function requestPermissions(permissions) {
    return (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", [
        "requestPermissions",
        permissions,
    ]);
}
exports.requestPermissions = requestPermissions;
function getStatus() {
    return (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", ["getStatus"]);
}
exports.getStatus = getStatus;
function getContactShieldVersion() {
    return (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", [
        "getContactShieldVersion",
    ]);
}
exports.getContactShieldVersion = getContactShieldVersion;
function getDeviceCalibrationConfidence() {
    return (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", [
        "getDeviceCalibrationConfidence",
    ]);
}
exports.getDeviceCalibrationConfidence = getDeviceCalibrationConfidence;
function isSupportScanningWithoutLocation() {
    return (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", [
        "isSupportScanningWithoutLocation",
    ]);
}
exports.isSupportScanningWithoutLocation = isSupportScanningWithoutLocation;
function setSharedKeysDataMapping(sharedKey) {
    return (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", [
        "setSharedKeysDataMapping",
        sharedKey,
    ]);
}
exports.setSharedKeysDataMapping = setSharedKeysDataMapping;
function getSharedKeysDataMapping() {
    return (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", [
        "getSharedKeysDataMapping",
    ]);
}
exports.getSharedKeysDataMapping = getSharedKeysDataMapping;
function getDailySketch(dailySketch) {
    // Set defaults
    dailySketch = Object.assign({
        weightsOfReportType: [0],
        weightsOfContagiousness: [0],
        thresholdOfAttenuationInDb: [0],
        weightsOfAttenuationBucket: [0],
        thresholdOfDaysSinceHit: 0,
        minWindowScore: 0,
    }, dailySketch);
    return (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", [
        "getDailySketch",
        dailySketch,
    ]);
}
exports.getDailySketch = getDailySketch;
function putSharedKeyFilesKeys(sharedKeyFiles) {
    // Set defaults
    sharedKeyFiles.diagnosisConfiguration = Object.assign({
        attenuationDurationThresholds: [50, 74],
        attenuationRiskValues: [4, 4, 4, 4, 4, 4, 4, 4],
        attenuationWeight: 50,
        daysAfterContactedRiskValues: [4, 4, 4, 4, 4, 4, 4, 4],
        daysAfterContactedWeight: 50,
        durationRiskValues: [4, 4, 4, 4, 4, 4, 4, 4],
        durationWeight: 50,
        initialRiskLevelRiskValues: [4, 4, 4, 4, 4, 4, 4, 4],
        initialRiskLevelWeight: 50,
        minimumRiskValueThreshold: 1,
    }, sharedKeyFiles.diagnosisConfiguration);
    return (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", [
        "putSharedKeyFilesKeys",
        sharedKeyFiles,
    ]);
}
exports.putSharedKeyFilesKeys = putSharedKeyFilesKeys;
function putSharedKeyFilesProvider(files) {
    return (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", [
        "putSharedKeyFilesProvider",
        files,
    ]);
}
exports.putSharedKeyFilesProvider = putSharedKeyFilesProvider;
function putSharedKeyFilesKeysProvider(sharedKeyFilesProvider) {
    return (0, utils_1.asyncExec)("HMSContactShield", "ContactShieldModule", [
        "putSharedKeyFilesKeysProvider",
        sharedKeyFilesProvider,
    ]);
}
exports.putSharedKeyFilesKeysProvider = putSharedKeyFilesKeysProvider;
//# sourceMappingURL=HMSContactShield.js.map
