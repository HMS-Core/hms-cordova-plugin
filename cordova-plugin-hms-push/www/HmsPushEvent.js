"use strict";
/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.

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
exports.ON_MULTI_SENDER_TOKEN_RECEIVED_EVENT = exports.ON_MULTI_SENDER_TOKEN_ERROR_EVENT = exports.ON_PUSH_MESSAGE_SENT_DELIVERED = exports.ON_PUSH_MESSAGE_SENT_ERROR = exports.ON_PUSH_MESSAGE_SENT = exports.LOCAL_NOTIFICATION_ACTION_EVENT = exports.NOTIFICATION_OPENED_EVENT = exports.ON_TOKEN_ERROR_EVENT = exports.TOKEN_RECEIVED_EVENT = exports.REMOTE_DATA_MESSAGE_RECEIVED = exports.onMultiSenderTokenErrorEvent = exports.onMultiSenderTokenReceivedEvent = exports.onNotificationOpenedApp = exports.onLocalNotificationAction = exports.onPushMessageSentDelivered = exports.onPushMessageSentError = exports.onPushMessageSent = exports.onTokenError = exports.onTokenReceived = exports.onRemoteMessageReceived = void 0;
function onRemoteMessageReceived(callback) {
    window.registerHMSEvent(exports.REMOTE_DATA_MESSAGE_RECEIVED, callback);
}
exports.onRemoteMessageReceived = onRemoteMessageReceived;
function onTokenReceived(callback) {
    window.registerHMSEvent(exports.TOKEN_RECEIVED_EVENT, callback);
}
exports.onTokenReceived = onTokenReceived;
function onTokenError(callback) {
    window.registerHMSEvent(exports.ON_TOKEN_ERROR_EVENT, callback);
}
exports.onTokenError = onTokenError;
function onPushMessageSent(callback) {
    window.registerHMSEvent(exports.ON_PUSH_MESSAGE_SENT, callback);
}
exports.onPushMessageSent = onPushMessageSent;
function onPushMessageSentError(callback) {
    window.registerHMSEvent(exports.ON_PUSH_MESSAGE_SENT_ERROR, callback);
}
exports.onPushMessageSentError = onPushMessageSentError;
function onPushMessageSentDelivered(callback) {
    window.registerHMSEvent(exports.ON_PUSH_MESSAGE_SENT_DELIVERED, callback);
}
exports.onPushMessageSentDelivered = onPushMessageSentDelivered;
function onLocalNotificationAction(callback) {
    window.registerHMSEvent(exports.LOCAL_NOTIFICATION_ACTION_EVENT, callback);
}
exports.onLocalNotificationAction = onLocalNotificationAction;
function onNotificationOpenedApp(callback) {
    window.registerHMSEvent(exports.NOTIFICATION_OPENED_EVENT, callback);
}
exports.onNotificationOpenedApp = onNotificationOpenedApp;
function onMultiSenderTokenReceivedEvent(callback) {
    window.registerHMSEvent(exports.ON_MULTI_SENDER_TOKEN_RECEIVED_EVENT, callback);
}
exports.onMultiSenderTokenReceivedEvent = onMultiSenderTokenReceivedEvent;
function onMultiSenderTokenErrorEvent(callback) {
    window.registerHMSEvent(exports.ON_MULTI_SENDER_TOKEN_ERROR_EVENT, callback);
}
exports.onMultiSenderTokenErrorEvent = onMultiSenderTokenErrorEvent;
exports.REMOTE_DATA_MESSAGE_RECEIVED = "REMOTE_DATA_MESSAGE_RECEIVED";
exports.TOKEN_RECEIVED_EVENT = "TOKEN_RECEIVED_EVENT";
exports.ON_TOKEN_ERROR_EVENT = "ON_TOKEN_ERROR_EVENT";
exports.NOTIFICATION_OPENED_EVENT = "NOTIFICATION_OPENED_EVENT";
exports.LOCAL_NOTIFICATION_ACTION_EVENT = "LOCAL_NOTIFICATION_ACTION_EVENT";
exports.ON_PUSH_MESSAGE_SENT = "ON_PUSH_MESSAGE_SENT";
exports.ON_PUSH_MESSAGE_SENT_ERROR = "ON_PUSH_MESSAGE_SENT_ERROR";
exports.ON_PUSH_MESSAGE_SENT_DELIVERED = "ON_PUSH_MESSAGE_SENT_DELIVERED";
exports.ON_MULTI_SENDER_TOKEN_ERROR_EVENT = "ON_MULTI_SENDER_TOKEN_ERROR_EVENT";
exports.ON_MULTI_SENDER_TOKEN_RECEIVED_EVENT = "ON_MULTI_SENDER_TOKEN_RECEIVED_EVENT";
//# sourceMappingURL=HmsPushEvent.js.map