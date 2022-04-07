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

import { RemoteMessageBuilder } from "./Interfaces";
export declare const DEFAULT_TOKEN_SCOPE = "HCM";
export declare function init(): Promise<void>;
export declare function enableLogger(): Promise<boolean>;
export declare function disableLogger(): Promise<boolean>;
export declare function getToken(scope?: string): Promise<string>;
export declare function getTokenWithSubjectId(subjectId: string): Promise<any>;
export declare function getAAID(): Promise<string>;
export declare function getCreationTime(): Promise<string>;
export declare function getId(): Promise<string>;
export declare function deleteAAID(): Promise<boolean>;
export declare function deleteToken(scope?: string): Promise<boolean>;
export declare function deleteTokenWithSubjectId(
  subjectId: string
): Promise<boolean>;
export declare function getOdid(): Promise<string>;
export declare function isAutoInitEnabled(): Promise<boolean>;
export declare function setAutoInitEnabled(enabled: boolean): Promise<boolean>;
export declare function turnOnPush(): Promise<boolean>;
export declare function turnOffPush(): Promise<boolean>;
export declare function subscribe(topic: string): Promise<boolean>;
export declare function unsubscribe(topic: string): Promise<boolean>;
export declare function sendRemoteMessage(
  remoteMessage: RemoteMessageObject
): Promise<boolean>;
export declare function getInitialNotification(): Promise<any>;
export declare function setBackgroundFile(filePath: string): Promise<void>;
export declare function setItem(key: string, value: string): Promise<void>;
export declare function removeItem(key: string): Promise<void>;
export declare function getItem(key: string): Promise<object>;
export declare function removeBackgroundFile(): Promise<void>;
declare type RemoteMessageObject = {
  [key in RemoteMessageBuilder]?: any;
};
export { RemoteMessageBuilder };
export { CordovaRemoteMessage } from "./CordovaRemoteMessage";
