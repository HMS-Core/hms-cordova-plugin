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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableLogger = exports.enableLogger = exports.getWifiDetectStatus = exports.releaseAntiFraud = exports.getRiskToken = exports.initAntiFraud = exports.shutdownUserDetect = exports.userDetection = exports.initUserDetect = exports.shutdownUrlCheck = exports.urlCheck = exports.initUrlCheck = exports.sysIntegrityWithRequest = exports.sysIntegrity = exports.getMaliciousAppsList = exports.isVerifyAppsCheck = exports.enableAppsCheck = exports.HMSWifiDetectResponse = exports.HMSUrlCheckThreatConstants = exports.HMSAppsCheckConstants = void 0;
const utils_1 = require("./utils");
var HMSAppsCheckConstants;
(function (HMSAppsCheckConstants) {
    HMSAppsCheckConstants[HMSAppsCheckConstants["HMS_VIRUS_LEVEL_RISK"] = 1] = "HMS_VIRUS_LEVEL_RISK";
    HMSAppsCheckConstants[HMSAppsCheckConstants["HMS_VIRUS_LEVEL_VIRUS"] = 2] = "HMS_VIRUS_LEVEL_VIRUS";
})(HMSAppsCheckConstants = exports.HMSAppsCheckConstants || (exports.HMSAppsCheckConstants = {}));
var HMSUrlCheckThreatConstants;
(function (HMSUrlCheckThreatConstants) {
    HMSUrlCheckThreatConstants[HMSUrlCheckThreatConstants["HMS_MALWARE"] = 1] = "HMS_MALWARE";
    HMSUrlCheckThreatConstants[HMSUrlCheckThreatConstants["HMS_PHISHING"] = 3] = "HMS_PHISHING";
})(HMSUrlCheckThreatConstants = exports.HMSUrlCheckThreatConstants || (exports.HMSUrlCheckThreatConstants = {}));
var HMSWifiDetectResponse;
(function (HMSWifiDetectResponse) {
    HMSWifiDetectResponse[HMSWifiDetectResponse["HMS_NO_WIFI"] = 0] = "HMS_NO_WIFI";
    HMSWifiDetectResponse[HMSWifiDetectResponse["HMS_SECURE_WIFI"] = 1] = "HMS_SECURE_WIFI";
    HMSWifiDetectResponse[HMSWifiDetectResponse["HMS_INSECURE_WIFI"] = 2] = "HMS_INSECURE_WIFI";
})(HMSWifiDetectResponse = exports.HMSWifiDetectResponse || (exports.HMSWifiDetectResponse = {}));
function enableAppsCheck() {
    return utils_1.asyncExec('HMSSafetyDetect', 'SafetyDetectModule', ['enableAppsCheck']);
}
exports.enableAppsCheck = enableAppsCheck;
function isVerifyAppsCheck() {
    return utils_1.asyncExec('HMSSafetyDetect', 'SafetyDetectModule', ['isVerifyAppsCheck']);
}
exports.isVerifyAppsCheck = isVerifyAppsCheck;
function getMaliciousAppsList() {
    return utils_1.asyncExec('HMSSafetyDetect', 'SafetyDetectModule', ['getMaliciousAppsList']);
}
exports.getMaliciousAppsList = getMaliciousAppsList;
function sysIntegrity(nonce, appId) {
    return utils_1.asyncExec('HMSSafetyDetect', 'SafetyDetectModule', ['sysIntegrity', nonce, appId]);
}
exports.sysIntegrity = sysIntegrity;
function sysIntegrityWithRequest(nonce, appId, alg) {
    return utils_1.asyncExec('HMSSafetyDetect', 'SafetyDetectModule', ['sysIntegrityWithRequest', nonce, appId, alg]);
}
exports.sysIntegrityWithRequest = sysIntegrityWithRequest;
function initUrlCheck() {
    return utils_1.asyncExec('HMSSafetyDetect', 'SafetyDetectModule', ['initUrlCheck']);
}
exports.initUrlCheck = initUrlCheck;
function urlCheck(url, appId, urlCheckThreats) {
    return utils_1.asyncExec('HMSSafetyDetect', 'SafetyDetectModule', ['urlCheck', url, appId, urlCheckThreats]);
}
exports.urlCheck = urlCheck;
function shutdownUrlCheck() {
    return utils_1.asyncExec('HMSSafetyDetect', 'SafetyDetectModule', ['shutdownUrlCheck']);
}
exports.shutdownUrlCheck = shutdownUrlCheck;
function initUserDetect() {
    return utils_1.asyncExec('HMSSafetyDetect', 'SafetyDetectModule', ['initUserDetect']);
}
exports.initUserDetect = initUserDetect;
function userDetection(appId) {
    return utils_1.asyncExec('HMSSafetyDetect', 'SafetyDetectModule', ['userDetection', appId]);
}
exports.userDetection = userDetection;
function shutdownUserDetect() {
    return utils_1.asyncExec('HMSSafetyDetect', 'SafetyDetectModule', ['shutdownUserDetect']);
}
exports.shutdownUserDetect = shutdownUserDetect;
function initAntiFraud(appId) {
    return utils_1.asyncExec('HMSSafetyDetect', 'SafetyDetectModule', ['initAntiFraud', appId]);
}
exports.initAntiFraud = initAntiFraud;
function getRiskToken() {
    return utils_1.asyncExec('HMSSafetyDetect', 'SafetyDetectModule', ['getRiskToken']);
}
exports.getRiskToken = getRiskToken;
function releaseAntiFraud() {
    return utils_1.asyncExec('HMSSafetyDetect', 'SafetyDetectModule', ['releaseAntiFraud']);
}
exports.releaseAntiFraud = releaseAntiFraud;
function getWifiDetectStatus() {
    return utils_1.asyncExec('HMSSafetyDetect', 'SafetyDetectModule', ['getWifiDetectStatus']);
}
exports.getWifiDetectStatus = getWifiDetectStatus;
function enableLogger() {
    return utils_1.asyncExec('HMSSafetyDetect', 'SafetyDetectModule', ['enableLogger']);
}
exports.enableLogger = enableLogger;
function disableLogger() {
    return utils_1.asyncExec('HMSSafetyDetect', 'SafetyDetectModule', ['disableLogger']);
}
exports.disableLogger = disableLogger;
//# sourceMappingURL=HMSSafetyDetect.js.map