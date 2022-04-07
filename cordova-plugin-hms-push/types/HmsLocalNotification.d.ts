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

import {
  Attr,
  Importance,
  Priority,
  RepeatType,
  Visibility,
} from "./Interfaces";
export declare function localNotification(
  localNotification: LocalNotificationObject
): Promise<any>;
export declare function localNotificationSchedule(
  localNotificationSchedule: LocalNotificationObject
): Promise<any>;
export declare function cancelAllNotifications(): Promise<boolean>;
export declare function cancelNotifications(): Promise<boolean>;
export declare function cancelScheduledNotifications(): Promise<boolean>;
export declare function cancelNotificationsWithId(
  id: number[]
): Promise<boolean>;
export declare function cancelNotificationsWithIdTag(
  idTag: IdTag[]
): Promise<boolean>;
export declare function cancelNotificationsWithTag(
  tag: string
): Promise<boolean>;
export declare function getNotifications(): Promise<any>;
export declare function getScheduledNotifications(): Promise<any>;
export declare function getChannels(): Promise<any>;
export declare function channelExists(channelId: string): Promise<boolean>;
export declare function channelBlocked(channelId: string): Promise<boolean>;
export declare function deleteChannel(channelId: string): Promise<boolean>;
declare type LocalNotificationObject = {
  [key in Attr]?: any;
};
interface IdTag {
  id: number;
  tag: string;
}
export { Attr, Importance, Priority, RepeatType, Visibility };
