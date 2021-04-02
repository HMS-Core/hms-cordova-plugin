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

export function onRemoteMessageReceived(callback:()=>void) {
    window.registerHMSEvent(REMOTE_DATA_MESSAGE_RECEIVED, callback);
}
export function onTokenReceived(callback:()=>void) {
    window.registerHMSEvent(TOKEN_RECEIVED_EVENT, callback);
}
export function onTokenError(callback:()=>void) {
    window.registerHMSEvent(ON_TOKEN_ERROR_EVENT, callback);
}
export function onPushMessageSent(callback:()=>void) {
    window.registerHMSEvent(ON_PUSH_MESSAGE_SENT, callback);
}
export function onPushMessageSentError(callback:()=>void) {
    window.registerHMSEvent(ON_PUSH_MESSAGE_SENT_ERROR, callback);
}
export function onPushMessageSentDelivered(callback:()=>void) {
    window.registerHMSEvent(ON_PUSH_MESSAGE_SENT_DELIVERED, callback);
}
export function onLocalNotificationAction(callback:()=>void) {
    window.registerHMSEvent(LOCAL_NOTIFICATION_ACTION_EVENT, callback);
}
export function onNotificationOpenedApp(callback:()=>void) {
    window.registerHMSEvent(NOTIFICATION_OPENED_EVENT, callback);
}
export function onMultiSenderTokenReceivedEvent(callback:()=>void){
    window.registerHMSEvent(ON_MULTI_SENDER_TOKEN_RECEIVED_EVENT,callback);
}
export function onMultiSenderTokenErrorEvent(callback:()=>void){
    window.registerHMSEvent(ON_MULTI_SENDER_TOKEN_ERROR_EVENT,callback);
}

const REMOTE_DATA_MESSAGE_RECEIVED = "REMOTE_DATA_MESSAGE_RECEIVED";
const TOKEN_RECEIVED_EVENT = "TOKEN_RECEIVED_EVENT";
const ON_TOKEN_ERROR_EVENT = "ON_TOKEN_ERROR_EVENT";
const NOTIFICATION_OPENED_EVENT = "NOTIFICATION_OPENED_EVENT";
const LOCAL_NOTIFICATION_ACTION_EVENT ="LOCAL_NOTIFICATION_ACTION_EVENT";
const ON_PUSH_MESSAGE_SENT = "ON_PUSH_MESSAGE_SENT";
const ON_PUSH_MESSAGE_SENT_ERROR = "ON_PUSH_MESSAGE_SENT_ERROR";
const ON_PUSH_MESSAGE_SENT_DELIVERED = "ON_PUSH_MESSAGE_SENT_DELIVERED";
const ON_MULTI_SENDER_TOKEN_ERROR_EVENT = "ON_MULTI_SENDER_TOKEN_ERROR_EVENT"
const ON_MULTI_SENDER_TOKEN_RECEIVED_EVENT = "ON_MULTI_SENDER_TOKEN_RECEIVED_EVENT"

type Handler = (data: any) => void;
declare global {
    interface Window {
        hmsEventHandlers: {
            [key: string]: Handler[];
        };
        hmsEventHandler: (eventName: string, data: any) => void;
        registerHMSEvent: (eventName: string, handler: Handler) => void;
        unregisterHMSEvent: (eventName: string, handler?: Handler) => void;
    }
}
