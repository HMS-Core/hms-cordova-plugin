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

import { IonicNativePlugin } from "@ionic-native/core";
export declare class HmsPushOriginal extends IonicNativePlugin {
    HmsPushResultCode: typeof HmsPushResultCode;
    CordovaRemoteMessage: typeof CordovaRemoteMessage;
    RemoteMessageBuilder: typeof RemoteMessageBuilder;
    DEFAULT_TOKEN_SCOPE: string;
    /**
     * This method  initialized HmsPush.
     * @returns Promise<void>
     */
    init(): Promise<void>;
    enableLogger(): Promise<boolean>;
    disableLogger(): Promise<boolean>;
    /**
     * This method is used to disable the display of notification messages. If you want to control the display of notification messages in an app, you can call this method. This method applies to notification messages but not data messages. It is the app that determines whether to enable or disable data messaging.
     * @returns Promise<string>
     */
    turnOnPush(): Promise<boolean>;
    /**
     * This method is used to enable the display of notification messages. If you want to control the display of notification messages in an app, you can call this method. This method applies to notification messages but not data messages. It is the app that determines whether to enable or disable data messaging.
     * @returns Promise<string>
     */
    turnOffPush(): Promise<boolean>;
    /**
     * This method is used to obtain an AAID in synchronous mode. Before applying for a token, an app calls this method to obtain its unique AAID. The HUAWEI Push server generates a token for the app based on the AAID. If the AAID of the app changes, a new token will be generated next time when the app applies for a token. If an app needs to report statistics events, it must carry the AAID as its unique ID.
     * @returns Promise<string>
     */
    getId(): Promise<string>;
    /**
     * This method is used to obtain an AAID in asynchronous mode.
     * @returns Promise<string>
     */
    getAAID(): Promise<string>;
    /**
     * This method is used to obtain a token required for accessing HUAWEI Push Kit. If there is no local AAID, this method will automatically generate an AAID when it is called because the HUAWEI Push Kit server needs to generate a token based on the AAID.
     * @returns Promise<string>
     * @params scope ? : String
     */
    getToken(scope?: string): Promise<string>;
    /**
     * Obtains a token that a target app developer applies for a sender to integrate Push Kit in the multi-sender scenario.
     * @returns Promise<string>
     * @params subjectId ? : String
     */
    getTokenWithSubjectId(subjectId: string): Promise<string>;
    /**
     * This method is used to obtain the generation timestamp of an AAID.
     * @returns Promise<string>
     */
    getCreationTime(): Promise<string>;
    /**
     * This method is used to delete a local AAID and its generation timestamp.
     * @returns Promise<string>
     */
    deleteAAID(): Promise<boolean>;
    /**
     * This method is used to delete a token. After a token is deleted, the corresponding AAID will not be deleted. This method is a synchronous method.
     * @returns Promise<string>
     * @params scope ? : String
     */
    deleteToken(scope?: string): Promise<boolean>;
    /**
     * Deletes a token that a target app developer applies for a sender to integrate Push Kit in the multi-sender scenario.
     * @returns Promise<string>
     * @params subjectId ? : String
     */
    deleteTokenWithSubjectId(subjectId: string): Promise<string>;
    /**
     * This method is used to subscribe to topics in asynchronous mode. The HUAWEI Push Kit topic messaging function allows you to send messages to multiple devices whose users have subscribed to a specific topic. You can write messages about the topic as required, and HUAWEI Push Kit determines the release path and sends messages to the correct devices in a reliable manner.
     * @param {string} topic Topic to be subscribed to.
     * @returns Promise<string>
     */
    subscribe(topic: string): Promise<boolean>;
    /**
     * This method is used to unsubscribe from topics that are subscribed to through the subscribe method.
     * @param {string} topic Topic to be unsubscribed to.
     * @returns Promise<string>
     */
    unsubscribe(topic: string): Promise<boolean>;
    /**
     * Sets whether to enable automatic initialization. If the enable parameter is set to true, the SDK automatically generates an AAID and applies for a token.
     * @returns Promise<boolean>
     * @param {boolean} enabled Indicates whether to enable automatic initialization.
     */
    setAutoInitEnabled(enabled: boolean): Promise<boolean>;
    getOdid(): Promise<string>;
    /**
     * This method is used to check whether automatic initialization is enabled.
     * @returns Promise<string>
     */
    isAutoInitEnabled(): Promise<boolean>;
    getInitialNotification(): Promise<any>;
    sendRemoteMessage(remoteMessage: RemoteMessageObject): Promise<boolean>;
    setBackgroundFile(filePath: string): Promise<void>;
    setItem(key: string, value: string): Promise<void>;
    getItem(key: string): Promise<object>;
    removeItem(key: string): Promise<void>;
    removeBackgroundFile(): Promise<void>;
}
export declare class HmsLocalNotificationOriginal extends IonicNativePlugin {
    Attr: typeof Attr;
    Importance: typeof Importance;
    Priority: typeof Priority;
    RepeatType: typeof RepeatType;
    Visibility: typeof Visibility;
    localNotification(localNotification: LocalNotificationObject): Promise<any>;
    localNotificationSchedule(localNotification: LocalNotificationObject): Promise<any>;
    cancelAllNotifications(): Promise<boolean>;
    cancelNotifications(): Promise<boolean>;
    cancelScheduledNotifications(): Promise<boolean>;
    cancelNotificationsWithId(id: number[]): Promise<boolean>;
    cancelNotificationsWithIdTag(idTag: IdTag[]): Promise<boolean>;
    cancelNotificationsWithTag(tag: string): Promise<boolean>;
    getNotifications(): Promise<any>;
    getScheduledNotifications(): Promise<any>;
    getChannels(): Promise<any>;
    channelExists(channelId: string): Promise<boolean>;
    channelBlocked(channelId: string): Promise<boolean>;
    deleteChannel(channelId: string): Promise<boolean>;
}
export declare class HmsPushEventOriginal extends IonicNativePlugin {
    onRemoteMessageReceived(callback: (data: any) => void): void;
    onTokenReceived(callback: (data: any) => void): void;
    onTokenError(callback: (data: any) => void): void;
    onPushMessageSent(callback: (data: any) => void): void;
    onPushMessageSentError(callback: (data: any) => void): void;
    onPushMessageSentDelivered(callback: (data: any) => void): void;
    onLocalNotificationAction(callback: (data: any) => void): void;
    onNotificationOpenedApp(callback: (data: any) => void): void;
    onMultiSenderTokenReceivedEvent(callback: (data: any) => void): void;
    onMultiSenderTokenErrorEvent(callback: (data: any) => void): void;
    REMOTE_DATA_MESSAGE_RECEIVED: string;
    TOKEN_RECEIVED_EVENT: string;
    ON_TOKEN_ERROR_EVENT: string;
    NOTIFICATION_OPENED_EVENT: string;
    LOCAL_NOTIFICATION_ACTION_EVENT: string;
    ON_PUSH_MESSAGE_SENT: string;
    ON_PUSH_MESSAGE_SENT_ERROR: string;
    ON_PUSH_MESSAGE_SENT_DELIVERED: string;
    ON_MULTI_SENDER_TOKEN_ERROR_EVENT: string;
    ON_MULTI_SENDER_TOKEN_RECEIVED_EVENT: string;
}
export declare class HmsPushProfileOriginal extends IonicNativePlugin {
    HUAWEI_PROFILE: number;
    CUSTOM_PROFILE: number;
    UNDEFINED_PROFILE: number;
    /**
     *
     */
    isSupportProfile(): Promise<boolean>;
    addProfile(type: number, profileId: string): Promise<any>;
    addProfileWithSubjectId(subjectId: string, type: number, profileId: string): Promise<any>;
    deleteProfile(profileId: string): Promise<any>;
    deleteProfileWithSubjectId(subjectId: string, profileId: string): Promise<any>;
}
export declare enum HmsPushResultCode {
    SUCCESS = "0",
    ERROR = "-1",
    NULL_BUNDLE = "333",
    ERROR_NO_TOKEN = "907122030",
    ERROR_NO_NETWORK = "907122031",
    ERROR_TOKEN_INVALID = "907122032",
    ERROR_SERVICE_NOT_AVAILABLE = "907122046",
    ERROR_PUSH_SERVER = "907122047",
    ERROR_UNKNOWN = "907122045",
    ERROR_TOPIC_EXCEED = "907122034",
    ERROR_TOPIC_SEND = "907122035",
    ERROR_NO_RIGHT = "907122036",
    ERROR_GET_TOKEN_ERR = "907122037",
    ERROR_STORAGE_LOCATION_EMPTY = "907122038",
    ERROR_NOT_ALLOW_CROSS_APPLY = "907122053",
    ERROR_SIZE = "907122041",
    ERROR_INVALID_PARAMETERS = "907122042",
    ERROR_TOO_MANY_MESSAGES = "907122043",
    ERROR_TTL_EXCEEDED = "907122044",
    ERROR_HMS_CLIENT_API = "907122048",
    ERROR_OPERATION_NOT_SUPPORTED = "907122049",
    ERROR_MAIN_THREAD = "907122050",
    ERROR_HMS_DEVICE_AUTH_FAILED_SELF_MAPPING = "907122051",
    ERROR_BIND_SERVICE_SELF_MAPPING = "907122052",
    ERROR_AUTO_INITIALIZING = "907122054",
    ERROR_ARGUMENTS_INVALID = "907135000",
    ERROR_INTERNAL_ERROR = "907135001",
    ERROR_NAMING_INVALID = "907135002",
    ERROR_CLIENT_API_INVALID = "907135003",
    ERROR_EXECUTE_TIMEOUT = "907135004",
    ERROR_NOT_IN_SERVICE = "907135005",
    ERROR_SESSION_INVALID = "907135006",
    ERROR_API_NOT_SPECIFIED = "1002",
    ERROR_GET_SCOPE_ERROR = "907135700",
    ERROR_SCOPE_LIST_EMPTY = "907135701",
    ERROR_CERT_FINGERPRINT_EMPTY = "907135702",
    ERROR_PERMISSION_LIST_EMPTY = "907135703",
    ERROR_AUTH_INFO_NOT_EXIST = "6002",
    ERROR_CERT_FINGERPRINT_ERROR = "6003",
    ERROR_PERMISSION_NOT_EXIST = "6004",
    ERROR_PERMISSION_NOT_AUTHORIZED = "6005",
    ERROR_PERMISSION_EXPIRED = "6006"
}
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
    visibility = "visibility"
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
declare class CordovaRemoteMessage {
    static INSTANCE_ID_SCOPE: string;
    static PRIORITY_UNKNOWN: number;
    static PRIORITY_HIGH: number;
    static PRIORITY_NORMAL: number;
    static COLLAPSEKEY: string;
    static DATA: string;
    static DATAOFMAP: string;
    static MESSAGEID: string;
    static MESSAGETYPE: string;
    static ORIGINALURGENCY: string;
    static URGENCY: string;
    static TTL: string;
    static SENTTIME: string;
    static TO: string;
    static FROM: string;
    static TOKEN: string;
    static NOTIFICATION: {
        TITLE: string;
        TITLELOCALIZATIONKEY: string;
        TITLELOCALIZATIONARGS: string;
        BODYLOCALIZATIONKEY: string;
        BODYLOCALIZATIONARGS: string;
        BODY: string;
        ICON: string;
        SOUND: string;
        TAG: string;
        COLOR: string;
        CLICKACTION: string;
        CHANNELID: string;
        IMAGEURL: string;
        LINK: string;
        NOTIFYID: string;
        WHEN: string;
        LIGHTSETTINGS: string;
        BADGENUMBER: string;
        IMPORTANCE: string;
        TICKER: string;
        VIBRATECONFIG: string;
        VISIBILITY: string;
        INTENTURI: string;
        ISAUTOCANCEL: string;
        ISLOCALONLY: string;
        ISDEFAULTLIGHT: string;
        ISDEFAULTSOUND: string;
        ISDEFAULTVIBRATE: string;
    };
    remoteMsg: any;
    constructor(options?: {});
    parseMsgAllAttribute(): string;
    getCollapseKey(): any;
    getData(): any;
    getDataOfMap(): any;
    getMessageId(): any;
    getMessageType(): any;
    getOriginalUrgency(): any;
    getUrgency(): any;
    getTtl(): any;
    getSentTime(): any;
    getTo(): any;
    getFrom(): any;
    getToken(): any;
    getNotificationTitle(): any;
    getTitleLocalizationKey(): any;
    getTitleLocalizationArgs(): any;
    getBodyLocalizationKey(): any;
    getBodyLocalizationArgs(): any;
    getBody(): any;
    getIcon(): any;
    getSound(): any;
    getTag(): any;
    getColor(): any;
    getClickAction(): any;
    getChannelId(): any;
    getImageUrl(): any;
    getLink(): any;
    getNotifyId(): any;
    getWhen(): any;
    getLightSettings(): any;
    getBadgeNumber(): any;
    getImportance(): any;
    getTicker(): any;
    getVibrateConfig(): any;
    getVisibility(): any;
    getIntentUri(): any;
    isAutoCancel(): any;
    isLocalOnly(): any;
    isDefaultLight(): any;
    isDefaultSound(): any;
    isDefaultVibrate(): any;
}
declare type LocalNotificationObject = {
    [key in Attr]?: any;
};
declare type RemoteMessageObject = {
    [key in RemoteMessageBuilder]?: any;
};
interface IdTag {
    id: number;
    tag: string;
}
export {};

export declare const HmsPush: HmsPushOriginal;
export declare const HmsLocalNotification: HmsLocalNotificationOriginal;
export declare const HmsPushEvent: HmsPushEventOriginal;
export declare const HmsPushProfile: HmsPushProfileOriginal;