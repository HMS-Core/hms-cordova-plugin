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

export declare enum Attr {
    id = "id",
    message = "message",
    fireDate = "fireDate",
    title = "title",
    ticker = "ticker",
    showWhen = "showWhen",
    autoCancel = "autoCancel",
    largeIcon = "largeIcon",
    largeIconUrl = "largeIconUrl",
    smallIcon = "smallIcon",
    bigText = "bigText",
    subText = "subText",
    bigPictureUrl = "bigPictureUrl",
    shortcutId = "shortcutId",
    number = "number",
    channelId = "channelId",
    channelName = "channelName",
    channelDescription = "channelDescription",
    color = "color",
    group = "group",
    groupSummary = "groupSummary",
    playSound = "playSound",
    soundName = "soundName",
    vibrate = "vibrate",
    vibrateDuration = "vibrateDuration",
    actions = "actions",
    invokeApp = "invokeApp",
    tag = "tag",
    repeatType = "repeatType",
    repeatTime = "repeatTime",
    ongoing = "ongoing",
    allowWhileIdle = "allowWhileIdle",
    dontNotifyInForeground = "dontNotifyInForeground",
    priority = "priority",
    importance = "importance",
    visibility = "visibility",
    data = "data"
}
export declare enum RemoteMessageBuilder {
    TO = "to",
    MESSAGE_ID = "messageId",
    MESSAGE_TYPE = "messageType",
    TTL = "ttl",
    COLLAPSE_KEY = "collapseKey",
    RECEIPT_MODE = "receiptMode",
    SEND_MODE = "sendMode",
    DATA = "data"
}
export declare enum Importance {
    MAX = "max",
    HIGH = "high",
    DEFAULT = "default",
    LOW = "low",
    MIN = "min",
    NONE = "none",
    UNSPECIFIED = "unspecified"
}
export declare enum Priority {
    MAX = "max",
    HIGH = "high",
    DEFAULT = "default",
    LOW = "low",
    MIN = "min"
}
export declare enum RepeatType {
    HOUR = "hour",
    MINUTE = "minute",
    DAY = "day",
    WEEK = "week",
    CUSTOM_TIME = "custom_time"
}
export declare enum Visibility {
    PUBLIC = "public",
    SECRET = "secret",
    PRIVATE = "private"
}
