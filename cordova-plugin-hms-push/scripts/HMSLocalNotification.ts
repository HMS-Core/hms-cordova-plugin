/*
    Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

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

import { asyncExec as exec } from './utils'
import { Attr, Importance, Priority, RepeatType, Visibility } from './Interfaces'

export { Attr, Importance, Priority, RepeatType, Visibility }

export function localNotification(args: any): Promise<any> {
    return run("localNotification", args);
}

export function localNotificationSchedule(args: any): Promise<any> {
    return run("localNotificationSchedule", args);
}

export function cancelAllNotifications(args: any): Promise<any> {
    return run("cancelAllNotifications", args);
}

export function cancelNotifications(args: any): Promise<any> {
    return run("cancelNotifications", args);
}

export function cancelScheduledNotifications(args: any): Promise<any> {
    return run("cancelScheduledNotifications", args);
}

export function cancelNotificationsWithId(args: any): Promise<any> {
    return run("cancelNotificationsWithId", args);
}

export function cancelNotificationsWithIdTag(args: any): Promise<any> {
    return run("cancelNotificationsWithIdTag", args);
}

export function cancelNotificationsWithTag(args: any): Promise<any> {
    return run("cancelNotificationsWithTag", args);
}

export function getNotifications(args: any): Promise<any> {
    return run("getNotifications", args);
}

export function getScheduledNotifications(args: any): Promise<any> {
    return run("getScheduledNotifications", args);
}

export function getChannels(args: any): Promise<any> {
    return run("getChannels", args);
}

export function channelExists(args: any): Promise<any> {
    return run("channelExists", args);
}

export function channelBlocked(args: any): Promise<any> {
    return run("channelBlocked", args);
}

export function deleteChannel(args: any): Promise<any> {
    return run("deleteChannel", args);
}

export function run(funcName: string, args: any): Promise<any> {
    return exec("HMSPush", "ACTION_HMS_LOCAL_NOTIFICATION", [funcName, args])
}
