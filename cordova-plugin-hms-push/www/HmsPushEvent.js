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
exports.HmsPushEvent = exports.onCustomIntent = exports.onNotificationOpenedApp = exports.onLocalNotificationAction = exports.onPushMessageSentDelivered = exports.onPushMessageSentError = exports.onPushMessageSent = exports.onTokenError = exports.onTokenReceived = exports.onRemoteMessageReceived = void 0;
function onRemoteMessageReceived(result) {
    window.registerHMSEvent(HmsPushEvent.REMOTE_DATA_MESSAGE_RECEIVED, result);
}
exports.onRemoteMessageReceived = onRemoteMessageReceived;
function onTokenReceived(result) {
    window.registerHMSEvent(HmsPushEvent.TOKEN_RECEIVED_EVENT, result);
}
exports.onTokenReceived = onTokenReceived;
function onTokenError(result) {
    window.registerHMSEvent(HmsPushEvent.ON_TOKEN_ERROR_EVENT, result);
}
exports.onTokenError = onTokenError;
function onPushMessageSent(result) {
    window.registerHMSEvent(HmsPushEvent.ON_PUSH_MESSAGE_SENT, result);
}
exports.onPushMessageSent = onPushMessageSent;
function onPushMessageSentError(result) {
    window.registerHMSEvent(HmsPushEvent.ON_PUSH_MESSAGE_SENT_ERROR, result);
}
exports.onPushMessageSentError = onPushMessageSentError;
function onPushMessageSentDelivered(result) {
    window.registerHMSEvent(HmsPushEvent.ON_PUSH_MESSAGE_SENT_DELIVERED, result);
}
exports.onPushMessageSentDelivered = onPushMessageSentDelivered;
function onLocalNotificationAction(result) {
    window.registerHMSEvent(HmsPushEvent.LOCAL_NOTIFICATION_ACTION_EVENT, result);
}
exports.onLocalNotificationAction = onLocalNotificationAction;
function onNotificationOpenedApp(result) {
    window.registerHMSEvent(HmsPushEvent.NOTIFICATION_OPENED_EVENT, result);
}
exports.onNotificationOpenedApp = onNotificationOpenedApp;
function onCustomIntent(result) {
    window.registerHMSEvent(HmsPushEvent.CUSTOM_INTENT_EVENT, result);
}
exports.onCustomIntent = onCustomIntent;
var HmsPushEvent;
(function (HmsPushEvent) {
    HmsPushEvent["REMOTE_DATA_MESSAGE_RECEIVED"] = "REMOTE_DATA_MESSAGE_RECEIVED";
    HmsPushEvent["TOKEN_RECEIVED_EVENT"] = "TOKEN_RECEIVED_EVENT";
    HmsPushEvent["ON_TOKEN_ERROR_EVENT"] = "ON_TOKEN_ERROR_EVENT";
    HmsPushEvent["NOTIFICATION_OPENED_EVENT"] = "NOTIFICATION_OPENED_EVENT";
    HmsPushEvent["LOCAL_NOTIFICATION_ACTION_EVENT"] = "LOCAL_NOTIFICATION_ACTION_EVENT";
    HmsPushEvent["ON_PUSH_MESSAGE_SENT"] = "ON_PUSH_MESSAGE_SENT";
    HmsPushEvent["ON_PUSH_MESSAGE_SENT_ERROR"] = "ON_PUSH_MESSAGE_SENT_ERROR";
    HmsPushEvent["ON_PUSH_MESSAGE_SENT_DELIVERED"] = "ON_PUSH_MESSAGE_SENT_DELIVERED";
    HmsPushEvent["CUSTOM_INTENT_EVENT"] = "CUSTOM_INTENT_EVENT";
    HmsPushEvent["PUSH_ON_START_COMMAND_EVENT"] = "PUSH_ON_START_COMMAND_EVENT";
})(HmsPushEvent = exports.HmsPushEvent || (exports.HmsPushEvent = {}));
;
//# sourceMappingURL=HmsPushEvent.js.map