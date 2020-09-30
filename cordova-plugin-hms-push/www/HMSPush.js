"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOdid = exports.disableLogger = exports.enableLogger = exports.getInitialNotification = exports.sendRemoteMessage = exports.isAutoInitEnabled = exports.setAutoInitEnabled = exports.unsubscribe = exports.subscribe = exports.deleteToken = exports.deleteAAID = exports.getCreationTime = exports.getToken = exports.getAAID = exports.getId = exports.turnOffPush = exports.turnOnPush = exports.init = exports.RemoteMessageBuilder = void 0;
/*
  Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
  */
const utils_1 = require("./utils");
const RemoteMessageBuilder_1 = require("./RemoteMessageBuilder");
Object.defineProperty(exports, "RemoteMessageBuilder", { enumerable: true, get: function () { return RemoteMessageBuilder_1.RemoteMessageBuilder; } });
var CordovaRemoteMessage_1 = require("./CordovaRemoteMessage");
Object.defineProperty(exports, "CordovaRemoteMessage", { enumerable: true, get: function () { return CordovaRemoteMessage_1.CordovaRemoteMessage; } });
let HMSPush = "HMSPush";
function init() {
    runHmsInstance("init");
}
exports.init = init;
function turnOnPush() {
    return runHmsMessaging("turnOnPush");
}
exports.turnOnPush = turnOnPush;
function turnOffPush() {
    return runHmsMessaging("turnOffPush");
}
exports.turnOffPush = turnOffPush;
function getId() {
    return runHmsInstance("getId");
}
exports.getId = getId;
function getAAID() {
    return runHmsInstance("getAAID");
}
exports.getAAID = getAAID;
function getToken() {
    return runHmsInstance("getToken");
}
exports.getToken = getToken;
function getCreationTime() {
    return runHmsInstance("getCreationTime");
}
exports.getCreationTime = getCreationTime;
function deleteAAID() {
    return runHmsInstance("deleteAAID");
}
exports.deleteAAID = deleteAAID;
function deleteToken() {
    return runHmsInstance("deleteToken");
}
exports.deleteToken = deleteToken;
function subscribe(args) {
    return runHmsMessaging("subscribe", args);
}
exports.subscribe = subscribe;
function unsubscribe(args) {
    return runHmsMessaging("unsubscribe", args);
}
exports.unsubscribe = unsubscribe;
function setAutoInitEnabled(args) {
    return runHmsMessaging("setAutoInitEnabled", args);
}
exports.setAutoInitEnabled = setAutoInitEnabled;
function isAutoInitEnabled(args) {
    return runHmsMessaging("isAutoInitEnabled");
}
exports.isAutoInitEnabled = isAutoInitEnabled;
function sendRemoteMessage(args) {
    return runHmsMessaging("sendRemoteMessage", args);
}
exports.sendRemoteMessage = sendRemoteMessage;
function getInitialNotification() {
    return runHmsMessaging("getInitialNotification");
}
exports.getInitialNotification = getInitialNotification;
function enableLogger() {
    return runHmsInstance("enableLogger");
}
exports.enableLogger = enableLogger;
function disableLogger() {
    return runHmsInstance("disableLogger");
}
exports.disableLogger = disableLogger;
function getOdid() {
    return runHmsInstance("getOdid");
}
exports.getOdid = getOdid;
function runHmsMessaging(funcName, args) {
    return utils_1.asyncExec(HMSPush, 'ACTION_HMS_PUSH_MESSAGING', [funcName, args]);
}
function runHmsInstance(funcName, args) {
    return utils_1.asyncExec(HMSPush, 'ACTION_HMS_PUSH_INSTANCE_ID', [funcName, args]);
}
//# sourceMappingURL=HMSPush.js.map