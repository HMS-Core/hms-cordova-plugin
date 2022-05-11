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
exports.Visibility =
  exports.RepeatType =
  exports.Priority =
  exports.Importance =
  exports.Attr =
  exports.deleteChannel =
  exports.channelBlocked =
  exports.channelExists =
  exports.getChannels =
  exports.getScheduledNotifications =
  exports.getNotifications =
  exports.cancelNotificationsWithTag =
  exports.cancelNotificationsWithIdTag =
  exports.cancelNotificationsWithId =
  exports.cancelScheduledNotifications =
  exports.cancelNotifications =
  exports.cancelAllNotifications =
  exports.localNotificationSchedule =
  exports.localNotification =
    void 0;
const utils_1 = require("./utils");
const Interfaces_1 = require("./Interfaces");
Object.defineProperty(exports, "Attr", {
  enumerable: true,
  get: function () {
    return Interfaces_1.Attr;
  },
});
Object.defineProperty(exports, "Importance", {
  enumerable: true,
  get: function () {
    return Interfaces_1.Importance;
  },
});
Object.defineProperty(exports, "Priority", {
  enumerable: true,
  get: function () {
    return Interfaces_1.Priority;
  },
});
Object.defineProperty(exports, "RepeatType", {
  enumerable: true,
  get: function () {
    return Interfaces_1.RepeatType;
  },
});
Object.defineProperty(exports, "Visibility", {
  enumerable: true,
  get: function () {
    return Interfaces_1.Visibility;
  },
});
function localNotification(localNotification) {
  return utils_1.asyncExec("HMSPush", "HmsLocalNotification", [
    "localNotification",
    localNotification,
  ]);
}
exports.localNotification = localNotification;
function localNotificationSchedule(localNotificationSchedule) {
  return utils_1.asyncExec("HMSPush", "HmsLocalNotification", [
    "localNotificationSchedule",
    localNotificationSchedule,
  ]);
}
exports.localNotificationSchedule = localNotificationSchedule;
function cancelAllNotifications() {
  return utils_1.asyncExec("HMSPush", "HmsLocalNotification", [
    "cancelAllNotifications",
  ]);
}
exports.cancelAllNotifications = cancelAllNotifications;
function cancelNotifications() {
  return utils_1.asyncExec("HMSPush", "HmsLocalNotification", [
    "cancelNotifications",
  ]);
}
exports.cancelNotifications = cancelNotifications;
function cancelScheduledNotifications() {
  return utils_1.asyncExec("HMSPush", "HmsLocalNotification", [
    "cancelScheduledNotifications",
  ]);
}
exports.cancelScheduledNotifications = cancelScheduledNotifications;
function cancelNotificationsWithId(id) {
  return utils_1.asyncExec("HMSPush", "HmsLocalNotification", [
    "cancelNotificationsWithId",
    id,
  ]);
}
exports.cancelNotificationsWithId = cancelNotificationsWithId;
function cancelNotificationsWithIdTag(idTag) {
  return utils_1.asyncExec("HMSPush", "HmsLocalNotification", [
    "cancelNotificationsWithIdTag",
    idTag,
  ]);
}
exports.cancelNotificationsWithIdTag = cancelNotificationsWithIdTag;
function cancelNotificationsWithTag(tag) {
  return utils_1.asyncExec("HMSPush", "HmsLocalNotification", [
    "cancelNotificationsWithTag",
    tag,
  ]);
}
exports.cancelNotificationsWithTag = cancelNotificationsWithTag;
function getNotifications() {
  return utils_1.asyncExec("HMSPush", "HmsLocalNotification", [
    "getNotifications",
  ]);
}
exports.getNotifications = getNotifications;
function getScheduledNotifications() {
  return utils_1.asyncExec("HMSPush", "HmsLocalNotification", [
    "getScheduledNotifications",
  ]);
}
exports.getScheduledNotifications = getScheduledNotifications;
function getChannels() {
  return utils_1.asyncExec("HMSPush", "HmsLocalNotification", ["getChannels"]);
}
exports.getChannels = getChannels;
function channelExists(channelId) {
  return utils_1.asyncExec("HMSPush", "HmsLocalNotification", [
    "channelExists",
    channelId,
  ]);
}
exports.channelExists = channelExists;
function channelBlocked(channelId) {
  return utils_1.asyncExec("HMSPush", "HmsLocalNotification", [
    "channelBlocked",
    channelId,
  ]);
}
exports.channelBlocked = channelBlocked;
function deleteChannel(channelId) {
  return utils_1.asyncExec("HMSPush", "HmsLocalNotification", [
    "deleteChannel",
    channelId,
  ]);
}
exports.deleteChannel = deleteChannel;
//# sourceMappingURL=HmsLocalNotification.js.map
