"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.deleteChannel = exports.channelBlocked = exports.channelExists = exports.getChannels = exports.getScheduledNotifications = exports.getNotifications = exports.cancelNotificationsWithTag = exports.cancelNotificationsWithIdTag = exports.cancelNotificationsWithId = exports.cancelScheduledNotifications = exports.cancelNotifications = exports.cancelAllNotifications = exports.localNotificationSchedule = exports.localNotification = exports.Visibility = exports.RepeatType = exports.Priority = exports.Importance = exports.Attr = void 0;
const utils_1 = require("./utils");
const Interfaces_1 = require("./Interfaces");
Object.defineProperty(exports, "Attr", { enumerable: true, get: function () { return Interfaces_1.Attr; } });
Object.defineProperty(exports, "Importance", { enumerable: true, get: function () { return Interfaces_1.Importance; } });
Object.defineProperty(exports, "Priority", { enumerable: true, get: function () { return Interfaces_1.Priority; } });
Object.defineProperty(exports, "RepeatType", { enumerable: true, get: function () { return Interfaces_1.RepeatType; } });
Object.defineProperty(exports, "Visibility", { enumerable: true, get: function () { return Interfaces_1.Visibility; } });
function localNotification(args) {
    return run("localNotification", args);
}
exports.localNotification = localNotification;
function localNotificationSchedule(args) {
    return run("localNotificationSchedule", args);
}
exports.localNotificationSchedule = localNotificationSchedule;
function cancelAllNotifications(args) {
    return run("cancelAllNotifications", args);
}
exports.cancelAllNotifications = cancelAllNotifications;
function cancelNotifications(args) {
    return run("cancelNotifications", args);
}
exports.cancelNotifications = cancelNotifications;
function cancelScheduledNotifications(args) {
    return run("cancelScheduledNotifications", args);
}
exports.cancelScheduledNotifications = cancelScheduledNotifications;
function cancelNotificationsWithId(args) {
    return run("cancelNotificationsWithId", args);
}
exports.cancelNotificationsWithId = cancelNotificationsWithId;
function cancelNotificationsWithIdTag(args) {
    return run("cancelNotificationsWithIdTag", args);
}
exports.cancelNotificationsWithIdTag = cancelNotificationsWithIdTag;
function cancelNotificationsWithTag(args) {
    return run("cancelNotificationsWithTag", args);
}
exports.cancelNotificationsWithTag = cancelNotificationsWithTag;
function getNotifications(args) {
    return run("getNotifications", args);
}
exports.getNotifications = getNotifications;
function getScheduledNotifications(args) {
    return run("getScheduledNotifications", args);
}
exports.getScheduledNotifications = getScheduledNotifications;
function getChannels(args) {
    return run("getChannels", args);
}
exports.getChannels = getChannels;
function channelExists(args) {
    return run("channelExists", args);
}
exports.channelExists = channelExists;
function channelBlocked(args) {
    return run("channelBlocked", args);
}
exports.channelBlocked = channelBlocked;
function deleteChannel(args) {
    return run("deleteChannel", args);
}
exports.deleteChannel = deleteChannel;
function run(funcName, args) {
    return utils_1.asyncExec("HMSPush", "ACTION_HMS_LOCAL_NOTIFICATION", [funcName, args]);
}
exports.run = run;
//# sourceMappingURL=HmsLocalNotification.js.map