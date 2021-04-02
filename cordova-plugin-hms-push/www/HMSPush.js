"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CordovaRemoteMessage = exports.RemoteMessageBuilder = exports.removeBackgroundFile = exports.getItem = exports.removeItem = exports.setItem = exports.setBackgroundFile = exports.getInitialNotification = exports.sendRemoteMessage = exports.unsubscribe = exports.subscribe = exports.turnOffPush = exports.turnOnPush = exports.setAutoInitEnabled = exports.isAutoInitEnabled = exports.getOdid = exports.deleteTokenWithSubjectId = exports.deleteToken = exports.deleteAAID = exports.getId = exports.getCreationTime = exports.getAAID = exports.getTokenWithSubjectId = exports.getToken = exports.disableLogger = exports.enableLogger = exports.init = exports.DEFAULT_TOKEN_SCOPE = void 0;
const utils_1 = require("./utils");
const Interfaces_1 = require("./Interfaces");
Object.defineProperty(exports, "RemoteMessageBuilder", { enumerable: true, get: function () { return Interfaces_1.RemoteMessageBuilder; } });
exports.DEFAULT_TOKEN_SCOPE = "HCM";
function init() {
    return utils_1.asyncExec('HMSPush', 'HmsPushInstanceId', ['init']);
}
exports.init = init;
function enableLogger() {
    return utils_1.asyncExec('HMSPush', 'HmsPushInstanceId', ['enableLogger']);
}
exports.enableLogger = enableLogger;
function disableLogger() {
    return utils_1.asyncExec('HMSPush', 'HmsPushInstanceId', ['disableLogger']);
}
exports.disableLogger = disableLogger;
function getToken(scope) {
    return utils_1.asyncExec('HMSPush', 'HmsPushInstanceId', ['getToken', scope]);
}
exports.getToken = getToken;
function getTokenWithSubjectId(subjectId) {
    return utils_1.asyncExec('HMSPush', 'HmsPushInstanceId', ['getTokenWithSubjectId', subjectId]);
}
exports.getTokenWithSubjectId = getTokenWithSubjectId;
function getAAID() {
    return utils_1.asyncExec('HMSPush', 'HmsPushInstanceId', ['getAAID']);
}
exports.getAAID = getAAID;
function getCreationTime() {
    return utils_1.asyncExec('HMSPush', 'HmsPushInstanceId', ['getCreationTime']);
}
exports.getCreationTime = getCreationTime;
function getId() {
    return utils_1.asyncExec('HMSPush', 'HmsPushInstanceId', ['getId']);
}
exports.getId = getId;
function deleteAAID() {
    return utils_1.asyncExec('HMSPush', 'HmsPushInstanceId', ['deleteAAID']);
}
exports.deleteAAID = deleteAAID;
function deleteToken(scope) {
    return utils_1.asyncExec('HMSPush', 'HmsPushInstanceId', ['deleteToken', scope]);
}
exports.deleteToken = deleteToken;
function deleteTokenWithSubjectId(subjectId) {
    return utils_1.asyncExec('HMSPush', 'HmsPushInstanceId', ['deleteTokenWithSubjectId', subjectId]);
}
exports.deleteTokenWithSubjectId = deleteTokenWithSubjectId;
function getOdid() {
    return utils_1.asyncExec('HMSPush', 'HmsPushInstanceId', ['getOdid']);
}
exports.getOdid = getOdid;
function isAutoInitEnabled() {
    return utils_1.asyncExec('HMSPush', 'HmsPushMessaging', ['isAutoInitEnabled']);
}
exports.isAutoInitEnabled = isAutoInitEnabled;
function setAutoInitEnabled(enabled) {
    return utils_1.asyncExec('HMSPush', 'HmsPushMessaging', ['setAutoInitEnabled', enabled]);
}
exports.setAutoInitEnabled = setAutoInitEnabled;
function turnOnPush() {
    return utils_1.asyncExec('HMSPush', 'HmsPushMessaging', ['turnOnPush']);
}
exports.turnOnPush = turnOnPush;
function turnOffPush() {
    return utils_1.asyncExec('HMSPush', 'HmsPushMessaging', ['turnOffPush']);
}
exports.turnOffPush = turnOffPush;
function subscribe(topic) {
    return utils_1.asyncExec('HMSPush', 'HmsPushMessaging', ['subscribe', topic]);
}
exports.subscribe = subscribe;
function unsubscribe(topic) {
    return utils_1.asyncExec('HMSPush', 'HmsPushMessaging', ['unsubscribe', topic]);
}
exports.unsubscribe = unsubscribe;
function sendRemoteMessage(remoteMessage) {
    return utils_1.asyncExec('HMSPush', 'HmsPushMessaging', ['sendRemoteMessage', remoteMessage]);
}
exports.sendRemoteMessage = sendRemoteMessage;
function getInitialNotification() {
    return utils_1.asyncExec('HMSPush', 'HmsPushMessaging', ['getInitialNotification']);
}
exports.getInitialNotification = getInitialNotification;
function setBackgroundFile(filePath) {
    return utils_1.asyncExec('HMSPush', 'HmsPushMessaging', ['setBackgroundFile', filePath]);
}
exports.setBackgroundFile = setBackgroundFile;
function setItem(key, value) {
    return utils_1.asyncExec('HMSPush', 'HmsPushMessaging', ['setItem', key, value]);
}
exports.setItem = setItem;
function removeItem(key) {
    return utils_1.asyncExec('HMSPush', 'HmsPushMessaging', ['removeItem', key]);
}
exports.removeItem = removeItem;
function getItem(key) {
    return utils_1.asyncExec('HMSPush', 'HmsPushMessaging', ['getItem', key]);
}
exports.getItem = getItem;
function removeBackgroundFile() {
    return utils_1.asyncExec('HMSPush', 'HmsPushMessaging', ['setBackgroundFile']);
}
exports.removeBackgroundFile = removeBackgroundFile;
var CordovaRemoteMessage_1 = require("./CordovaRemoteMessage");
Object.defineProperty(exports, "CordovaRemoteMessage", { enumerable: true, get: function () { return CordovaRemoteMessage_1.CordovaRemoteMessage; } });
//# sourceMappingURL=HmsPush.js.map