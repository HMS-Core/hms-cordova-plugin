/*
    Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.

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
import {
    Attr,
    Importance,
    Priority,
    RepeatType,
    Visibility,
} from "./Interfaces";

export function localNotification(
    localNotification: LocalNotificationObject
): Promise<any> {
    return asyncExec("HMSPush", "HmsLocalNotification", [
        "localNotification",
        localNotification,
    ]);
}
export function localNotificationSchedule(
    localNotificationSchedule: LocalNotificationObject
): Promise<any> {
    return asyncExec("HMSPush", "HmsLocalNotification", [
        "localNotificationSchedule",
        localNotificationSchedule,
    ]);
}
export function cancelAllNotifications(): Promise<boolean> {
    return asyncExec("HMSPush", "HmsLocalNotification", [
        "cancelAllNotifications",
    ]);
}
export function cancelNotifications(): Promise<boolean> {
    return asyncExec("HMSPush", "HmsLocalNotification", [
        "cancelNotifications",
    ]);
}
export function cancelScheduledNotifications(): Promise<boolean> {
    return asyncExec("HMSPush", "HmsLocalNotification", [
        "cancelScheduledNotifications",
    ]);
}
export function cancelNotificationsWithId(id: number[]): Promise<boolean> {
    return asyncExec("HMSPush", "HmsLocalNotification", [
        "cancelNotificationsWithId",
        id,
    ]);
}
export function cancelNotificationsWithIdTag(idTag: IdTag[]): Promise<boolean> {
    return asyncExec("HMSPush", "HmsLocalNotification", [
        "cancelNotificationsWithIdTag",
        idTag,
    ]);
}
export function cancelNotificationsWithTag(tag: string): Promise<boolean> {
    return asyncExec("HMSPush", "HmsLocalNotification", [
        "cancelNotificationsWithTag",
        tag,
    ]);
}
export function getNotifications(): Promise<any> {
    return asyncExec("HMSPush", "HmsLocalNotification", ["getNotifications"]);
}
export function getScheduledNotifications(): Promise<any> {
    return asyncExec("HMSPush", "HmsLocalNotification", [
        "getScheduledNotifications",
    ]);
}
export function getChannels(): Promise<any> {
    return asyncExec("HMSPush", "HmsLocalNotification", ["getChannels"]);
}
export function channelExists(channelId: string): Promise<boolean> {
    return asyncExec("HMSPush", "HmsLocalNotification", [
        "channelExists",
        channelId,
    ]);
}
export function channelBlocked(channelId: string): Promise<boolean> {
    return asyncExec("HMSPush", "HmsLocalNotification", [
        "channelBlocked",
        channelId,
    ]);
}
export function deleteChannel(channelId: string): Promise<boolean> {
    return asyncExec("HMSPush", "HmsLocalNotification", [
        "deleteChannel",
        channelId,
    ]);
}

type LocalNotificationObject = {
    [key in Attr]?: any;
};

interface IdTag {
    id: number;
    tag: string;
}

export { Attr, Importance, Priority, RepeatType, Visibility };
