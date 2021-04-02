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
*/Object.defineProperty(exports, "__esModule", { value: true });
exports.onMultiSenderTokenErrorEvent = exports.onMultiSenderTokenReceivedEvent = exports.onNotificationOpenedApp = exports.onLocalNotificationAction = exports.onPushMessageSentDelivered = exports.onPushMessageSentError = exports.onPushMessageSent = exports.onTokenError = exports.onTokenReceived = exports.onRemoteMessageReceived = void 0;
function onRemoteMessageReceived(callback) {
    window.registerHMSEvent(REMOTE_DATA_MESSAGE_RECEIVED, callback);
}
exports.onRemoteMessageReceived = onRemoteMessageReceived;
function onTokenReceived(callback) {
    window.registerHMSEvent(TOKEN_RECEIVED_EVENT, callback);
}
exports.onTokenReceived = onTokenReceived;
function onTokenError(callback) {
    window.registerHMSEvent(ON_TOKEN_ERROR_EVENT, callback);
}
exports.onTokenError = onTokenError;
function onPushMessageSent(callback) {
    window.registerHMSEvent(ON_PUSH_MESSAGE_SENT, callback);
}
exports.onPushMessageSent = onPushMessageSent;
function onPushMessageSentError(callback) {
    window.registerHMSEvent(ON_PUSH_MESSAGE_SENT_ERROR, callback);
}
exports.onPushMessageSentError = onPushMessageSentError;
function onPushMessageSentDelivered(callback) {
    window.registerHMSEvent(ON_PUSH_MESSAGE_SENT_DELIVERED, callback);
}
exports.onPushMessageSentDelivered = onPushMessageSentDelivered;
function onLocalNotificationAction(callback) {
    window.registerHMSEvent(LOCAL_NOTIFICATION_ACTION_EVENT, callback);
}
exports.onLocalNotificationAction = onLocalNotificationAction;
function onNotificationOpenedApp(callback) {
    window.registerHMSEvent(NOTIFICATION_OPENED_EVENT, callback);
}
exports.onNotificationOpenedApp = onNotificationOpenedApp;
function onMultiSenderTokenReceivedEvent(callback) {
    window.registerHMSEvent(ON_MULTI_SENDER_TOKEN_RECEIVED_EVENT, callback);
}
exports.onMultiSenderTokenReceivedEvent = onMultiSenderTokenReceivedEvent;
function onMultiSenderTokenErrorEvent(callback) {
    window.registerHMSEvent(ON_MULTI_SENDER_TOKEN_ERROR_EVENT, callback);
}
exports.onMultiSenderTokenErrorEvent = onMultiSenderTokenErrorEvent;
const REMOTE_DATA_MESSAGE_RECEIVED = "REMOTE_DATA_MESSAGE_RECEIVED";
const TOKEN_RECEIVED_EVENT = "TOKEN_RECEIVED_EVENT";
const ON_TOKEN_ERROR_EVENT = "ON_TOKEN_ERROR_EVENT";
const NOTIFICATION_OPENED_EVENT = "NOTIFICATION_OPENED_EVENT";
const LOCAL_NOTIFICATION_ACTION_EVENT = "LOCAL_NOTIFICATION_ACTION_EVENT";
const ON_PUSH_MESSAGE_SENT = "ON_PUSH_MESSAGE_SENT";
const ON_PUSH_MESSAGE_SENT_ERROR = "ON_PUSH_MESSAGE_SENT_ERROR";
const ON_PUSH_MESSAGE_SENT_DELIVERED = "ON_PUSH_MESSAGE_SENT_DELIVERED";
const ON_MULTI_SENDER_TOKEN_ERROR_EVENT = "ON_MULTI_SENDER_TOKEN_ERROR_EVENT";
const ON_MULTI_SENDER_TOKEN_RECEIVED_EVENT = "ON_MULTI_SENDER_TOKEN_RECEIVED_EVENT";
//# sourceMappingURL=HmsPushEvent.js.map