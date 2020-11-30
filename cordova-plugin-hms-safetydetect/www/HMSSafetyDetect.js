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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HMSWifiDetectResponse = exports.HMSUrlCheckThreatConstants = exports.HMSAppsCheckConstants = exports.disableLogger = exports.enableLogger = exports.getWifiDetectStatus = exports.releaseAntiFraud = exports.getRiskToken = exports.initAntiFraud = exports.shutdownUserDetect = exports.userDetection = exports.initUserDetect = exports.shutdownUrlCheck = exports.urlCheck = exports.initUrlCheck = exports.sysIntegrity = exports.getMaliciousAppsList = exports.isVerifyAppsCheck = exports.enableAppsCheck = void 0;
const utils_1 = require("./utils");
// /////////////////////////////////////////////////////////////////////////////////////////////
// HMS Apps Check
// /////////////////////////////////////////////////////////////////////////////////////////////
function enableAppsCheck() {
  return utils_1.asyncExec("HMSSafetyDetect", "enableAppsCheck", []);
}
exports.enableAppsCheck = enableAppsCheck;
function isVerifyAppsCheck() {
  return utils_1.asyncExec("HMSSafetyDetect", "isVerifyAppsCheck", []);
}
exports.isVerifyAppsCheck = isVerifyAppsCheck;
function getMaliciousAppsList() {
  return utils_1.asyncExec("HMSSafetyDetect", "getMaliciousAppsList", []);
}
exports.getMaliciousAppsList = getMaliciousAppsList;
// /////////////////////////////////////////////////////////////////////////////////////////////
// HMS Sys Integrity
// /////////////////////////////////////////////////////////////////////////////////////////////
function sysIntegrity(nonce, appId) {
  return utils_1.asyncExec("HMSSafetyDetect", "sysIntegrity", [nonce, appId]);
}
exports.sysIntegrity = sysIntegrity;
// /////////////////////////////////////////////////////////////////////////////////////////////
// HMS Url Check
// /////////////////////////////////////////////////////////////////////////////////////////////
function initUrlCheck() {
  return utils_1.asyncExec("HMSSafetyDetect", "initUrlCheck", []);
}
exports.initUrlCheck = initUrlCheck;
function urlCheck(url, appId, urlCheckThreats) {
  return utils_1.asyncExec("HMSSafetyDetect", "urlCheck", [
    url,
    appId,
    urlCheckThreats,
  ]);
}
exports.urlCheck = urlCheck;
function shutdownUrlCheck() {
  return utils_1.asyncExec("HMSSafetyDetect", "shutdownUrlCheck", []);
}
exports.shutdownUrlCheck = shutdownUrlCheck;
// /////////////////////////////////////////////////////////////////////////////////////////////
// HMS User Detect
// /////////////////////////////////////////////////////////////////////////////////////////////
function initUserDetect() {
  return utils_1.asyncExec("HMSSafetyDetect", "initUserDetect", []);
}
exports.initUserDetect = initUserDetect;
function userDetection(appId) {
  return utils_1.asyncExec("HMSSafetyDetect", "userDetection", [appId]);
}
exports.userDetection = userDetection;
function shutdownUserDetect() {
  return utils_1.asyncExec("HMSSafetyDetect", "shutdownUserDetect", []);
}
exports.shutdownUserDetect = shutdownUserDetect;
function initAntiFraud(appId) {
  return utils_1.asyncExec("HMSSafetyDetect", "initAntiFraud", [appId]);
}
exports.initAntiFraud = initAntiFraud;
function getRiskToken() {
  return utils_1.asyncExec("HMSSafetyDetect", "getRiskToken", []);
}
exports.getRiskToken = getRiskToken;
function releaseAntiFraud() {
  return utils_1.asyncExec("HMSSafetyDetect", "releaseAntiFraud", []);
}
exports.releaseAntiFraud = releaseAntiFraud;
// /////////////////////////////////////////////////////////////////////////////////////////////
// HMS Wifi Detect
// /////////////////////////////////////////////////////////////////////////////////////////////
function getWifiDetectStatus() {
  return utils_1.asyncExec("HMSSafetyDetect", "getWifiDetectStatus", []);
}
exports.getWifiDetectStatus = getWifiDetectStatus;
// /////////////////////////////////////////////////////////////////////////////////////////////
// HMS Logger
// /////////////////////////////////////////////////////////////////////////////////////////////
function enableLogger() {
  return utils_1.asyncExec("HMSSafetyDetect", "enableLogger", []);
}
exports.enableLogger = enableLogger;
function disableLogger() {
  return utils_1.asyncExec("HMSSafetyDetect", "disableLogger", []);
}
exports.disableLogger = disableLogger;
// /////////////////////////////////////////////////////////////////////////////////////////////
// Constants
// /////////////////////////////////////////////////////////////////////////////////////////////
var HMSAppsCheckConstants;
(function (HMSAppsCheckConstants) {
  HMSAppsCheckConstants[(HMSAppsCheckConstants["HMS_VIRUS_LEVEL_RISK"] = 1)] =
    "HMS_VIRUS_LEVEL_RISK";
  HMSAppsCheckConstants[(HMSAppsCheckConstants["HMS_VIRUS_LEVEL_VIRUS"] = 2)] =
    "HMS_VIRUS_LEVEL_VIRUS";
})(
  (HMSAppsCheckConstants =
    exports.HMSAppsCheckConstants || (exports.HMSAppsCheckConstants = {}))
);
var HMSUrlCheckThreatConstants;
(function (HMSUrlCheckThreatConstants) {
  HMSUrlCheckThreatConstants[(HMSUrlCheckThreatConstants["HMS_MALWARE"] = 1)] =
    "HMS_MALWARE";
  HMSUrlCheckThreatConstants[(HMSUrlCheckThreatConstants["HMS_PHISHING"] = 3)] =
    "HMS_PHISHING";
})(
  (HMSUrlCheckThreatConstants =
    exports.HMSUrlCheckThreatConstants ||
    (exports.HMSUrlCheckThreatConstants = {}))
);
var HMSWifiDetectResponse;
(function (HMSWifiDetectResponse) {
  HMSWifiDetectResponse[(HMSWifiDetectResponse["HMS_NO_WIFI"] = 0)] =
    "HMS_NO_WIFI";
  HMSWifiDetectResponse[(HMSWifiDetectResponse["HMS_SECURE_WIFI"] = 1)] =
    "HMS_SECURE_WIFI";
  HMSWifiDetectResponse[(HMSWifiDetectResponse["HMS_INSECURE_WIFI"] = 2)] =
    "HMS_INSECURE_WIFI";
})(
  (HMSWifiDetectResponse =
    exports.HMSWifiDetectResponse || (exports.HMSWifiDetectResponse = {}))
);
//# sourceMappingURL=HMSSafetyDetect.js.map
