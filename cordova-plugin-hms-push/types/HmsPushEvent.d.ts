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

export declare function onRemoteMessageReceived(callback: () => void): void;
export declare function onTokenReceived(callback: () => void): void;
export declare function onTokenError(callback: () => void): void;
export declare function onPushMessageSent(callback: () => void): void;
export declare function onPushMessageSentError(callback: () => void): void;
export declare function onPushMessageSentDelivered(callback: () => void): void;
export declare function onLocalNotificationAction(callback: () => void): void;
export declare function onNotificationOpenedApp(callback: () => void): void;
export declare function onMultiSenderTokenReceivedEvent(callback: () => void): void;
export declare function onMultiSenderTokenErrorEvent(callback: () => void): void;
declare type Handler = (data: any) => void;
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
export {};
