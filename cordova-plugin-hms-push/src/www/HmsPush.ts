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

import { asyncExec } from "./utils";
import { RemoteMessageBuilder } from "./Interfaces";

export const DEFAULT_TOKEN_SCOPE = "HCM";

export function init(): Promise<void> {
    return asyncExec("HMSPush", "HmsPushInstanceId", ["init"]);
}
export function enableLogger(): Promise<boolean> {
    return asyncExec("HMSPush", "HmsPushInstanceId", ["enableLogger"]);
}
export function disableLogger(): Promise<boolean> {
    return asyncExec("HMSPush", "HmsPushInstanceId", ["disableLogger"]);
}
export function getToken(scope?: string): Promise<string> {
    return asyncExec("HMSPush", "HmsPushInstanceId", ["getToken", scope]);
}
export function getTokenWithSubjectId(subjectId: string): Promise<any> {
    return asyncExec("HMSPush", "HmsPushInstanceId", [
        "getTokenWithSubjectId",
        subjectId,
    ]);
}
export function getAAID(): Promise<string> {
    return asyncExec("HMSPush", "HmsPushInstanceId", ["getAAID"]);
}
export function getCreationTime(): Promise<string> {
    return asyncExec("HMSPush", "HmsPushInstanceId", ["getCreationTime"]);
}
export function getId(): Promise<string> {
    return asyncExec("HMSPush", "HmsPushInstanceId", ["getId"]);
}
export function deleteAAID(): Promise<boolean> {
    return asyncExec("HMSPush", "HmsPushInstanceId", ["deleteAAID"]);
}
export function deleteToken(scope?: string): Promise<boolean> {
    return asyncExec("HMSPush", "HmsPushInstanceId", ["deleteToken", scope]);
}
export function deleteTokenWithSubjectId(subjectId: string): Promise<boolean> {
    return asyncExec("HMSPush", "HmsPushInstanceId", [
        "deleteTokenWithSubjectId",
        subjectId,
    ]);
}
export function getOdid(): Promise<string> {
    return asyncExec("HMSPush", "HmsPushInstanceId", ["getOdid"]);
}
export function isAutoInitEnabled(): Promise<boolean> {
    return asyncExec("HMSPush", "HmsPushMessaging", ["isAutoInitEnabled"]);
}
export function setAutoInitEnabled(enabled: boolean): Promise<boolean> {
    return asyncExec("HMSPush", "HmsPushMessaging", [
        "setAutoInitEnabled",
        enabled,
    ]);
}
export function turnOnPush(): Promise<boolean> {
    return asyncExec("HMSPush", "HmsPushMessaging", ["turnOnPush"]);
}
export function turnOffPush(): Promise<boolean> {
    return asyncExec("HMSPush", "HmsPushMessaging", ["turnOffPush"]);
}
export function subscribe(topic: string): Promise<boolean> {
    return asyncExec("HMSPush", "HmsPushMessaging", ["subscribe", topic]);
}
export function unsubscribe(topic: string): Promise<boolean> {
    return asyncExec("HMSPush", "HmsPushMessaging", ["unsubscribe", topic]);
}
export function sendRemoteMessage(
    remoteMessage: RemoteMessageObject
): Promise<boolean> {
    return asyncExec("HMSPush", "HmsPushMessaging", [
        "sendRemoteMessage",
        remoteMessage,
    ]);
}
export function getInitialNotification(): Promise<any> {
    return asyncExec("HMSPush", "HmsPushMessaging", ["getInitialNotification"]);
}
export function setBackgroundFile(filePath: string): Promise<void> {
    return asyncExec("HMSPush", "HmsPushMessaging", [
        "setBackgroundFile",
        filePath,
    ]);
}
export function setItem(key: string, value: string): Promise<void> {
    return asyncExec("HMSPush", "HmsPushMessaging", ["setItem", key, value]);
}
export function removeItem(key: string): Promise<void> {
    return asyncExec("HMSPush", "HmsPushMessaging", ["removeItem", key]);
}
export function getItem(key: string): Promise<object> {
    return asyncExec("HMSPush", "HmsPushMessaging", ["getItem", key]);
}
export function removeBackgroundFile(): Promise<void> {
    return asyncExec("HMSPush", "HmsPushMessaging", ["setBackgroundFile"]);
}

type RemoteMessageObject = {
    [key in RemoteMessageBuilder]?: any;
};

export { RemoteMessageBuilder };
export { CordovaRemoteMessage } from "./CordovaRemoteMessage";
