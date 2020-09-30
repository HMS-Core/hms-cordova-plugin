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

export declare function onRemoteMessageReceived(result: any): void;
export declare function onTokenReceived(result: any): void;
export declare function onTokenError(result: any): void;
export declare function onPushMessageSent(result: any): void;
export declare function onPushMessageSentError(result: any): void;
export declare function onPushMessageSentDelivered(result: any): void;
export declare function onLocalNotificationAction(result: any): void;
export declare function onNotificationOpenedApp(result: any): void;
export declare function onCustomIntent(result: any): void;
export declare enum HmsPushEvent {
    REMOTE_DATA_MESSAGE_RECEIVED = "REMOTE_DATA_MESSAGE_RECEIVED",
    TOKEN_RECEIVED_EVENT = "TOKEN_RECEIVED_EVENT",
    ON_TOKEN_ERROR_EVENT = "ON_TOKEN_ERROR_EVENT",
    NOTIFICATION_OPENED_EVENT = "NOTIFICATION_OPENED_EVENT",
    LOCAL_NOTIFICATION_ACTION_EVENT = "LOCAL_NOTIFICATION_ACTION_EVENT",
    ON_PUSH_MESSAGE_SENT = "ON_PUSH_MESSAGE_SENT",
    ON_PUSH_MESSAGE_SENT_ERROR = "ON_PUSH_MESSAGE_SENT_ERROR",
    ON_PUSH_MESSAGE_SENT_DELIVERED = "ON_PUSH_MESSAGE_SENT_DELIVERED",
    CUSTOM_INTENT_EVENT = "CUSTOM_INTENT_EVENT",
    PUSH_ON_START_COMMAND_EVENT = "PUSH_ON_START_COMMAND_EVENT"
}
declare type Handler = (data: any) => void;
declare global {
    interface Window {
        hmsEventHandlers: {
            [key: string]: Handler[];
        };
        hmsEventHandler: (eventName: string, data: any) => void;
        registerHMSEvent: (eventName: string, handler: Handler) => void;
        unregisterHMSEvent: (eventName: string, handler: Handler) => void;
    }
}
export {};
