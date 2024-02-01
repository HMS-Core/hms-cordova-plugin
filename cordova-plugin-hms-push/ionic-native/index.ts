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

import { Injectable } from "@angular/core";
import { Plugin, Cordova, IonicNativePlugin } from "@ionic-native/core";

@Plugin({
    pluginName: "HmsPush",
    plugin: "@hmscore/cordova-plugin-hms-push",
    pluginRef: "HmsPush",
    repo: "https://github.com/HMS-Core/hms-cordova-plugin",
    platforms: ["Android"],
})
@Injectable()
export class HmsPush extends IonicNativePlugin {
    HmsPushResultCode = HmsPushResultCode;
    CordovaRemoteMessage = CordovaRemoteMessage;
    RemoteMessageBuilder = RemoteMessageBuilder;
    DEFAULT_TOKEN_SCOPE = "HCM";
    @Cordova({ otherPromise: true })
    /**
     * This method  initialized HmsPush.
     * @returns Promise<void>
     */
    init(): Promise<void> {
        return;
    }

    @Cordova({ otherPromise: true })
    enableLogger(): Promise<boolean> {
        return;
    }

    @Cordova({ otherPromise: true })
    disableLogger(): Promise<boolean> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * This method is used to disable the display of notification messages. If you want to control the display of notification messages in an app, you can call this method. This method applies to notification messages but not data messages. It is the app that determines whether to enable or disable data messaging.
     * @returns Promise<string>
     */
    turnOnPush(): Promise<boolean> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * This method is used to enable the display of notification messages. If you want to control the display of notification messages in an app, you can call this method. This method applies to notification messages but not data messages. It is the app that determines whether to enable or disable data messaging.
     * @returns Promise<string>
     */
    turnOffPush(): Promise<boolean> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * This method is used to obtain an AAID in synchronous mode. Before applying for a token, an app calls this method to obtain its unique AAID. The HUAWEI Push server generates a token for the app based on the AAID. If the AAID of the app changes, a new token will be generated next time when the app applies for a token. If an app needs to report statistics events, it must carry the AAID as its unique ID.
     * @returns Promise<string>
     */
    getId(): Promise<string> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * This method is used to obtain an AAID in asynchronous mode.
     * @returns Promise<string>
     */
    getAAID(): Promise<string> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * This method is used to obtain a token required for accessing HUAWEI Push Kit. If there is no local AAID, this method will automatically generate an AAID when it is called because the HUAWEI Push Kit server needs to generate a token based on the AAID.
     * @returns Promise<string>
     * @params scope ? : String
     */
    getToken(scope?: string): Promise<string> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * Obtains a token that a target app developer applies for a sender to integrate Push Kit in the multi-sender scenario.
     * @returns Promise<string>
     * @params subjectId ? : String
     */
    getTokenWithSubjectId(subjectId: string): Promise<string> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * This method is used to obtain the generation timestamp of an AAID.
     * @returns Promise<string>
     */
    getCreationTime(): Promise<string> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * This method is used to delete a local AAID and its generation timestamp.
     * @returns Promise<string>
     */
    deleteAAID(): Promise<boolean> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * This method is used to delete a token. After a token is deleted, the corresponding AAID will not be deleted. This method is a synchronous method.
     * @returns Promise<string>
     * @params scope ? : String
     */
    deleteToken(scope?: string): Promise<boolean> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * Deletes a token that a target app developer applies for a sender to integrate Push Kit in the multi-sender scenario.
     * @returns Promise<string>
     * @params subjectId ? : String
     */
    deleteTokenWithSubjectId(subjectId: string): Promise<string> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * This method is used to subscribe to topics in asynchronous mode. The HUAWEI Push Kit topic messaging function allows you to send messages to multiple devices whose users have subscribed to a specific topic. You can write messages about the topic as required, and HUAWEI Push Kit determines the release path and sends messages to the correct devices in a reliable manner.
     * @param {string} topic Topic to be subscribed to.
     * @returns Promise<string>
     */
    subscribe(topic: string): Promise<boolean> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * This method is used to unsubscribe from topics that are subscribed to through the subscribe method.
     * @param {string} topic Topic to be unsubscribed to.
     * @returns Promise<string>
     */
    unsubscribe(topic: string): Promise<boolean> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * Sets whether to enable automatic initialization. If the enable parameter is set to true, the SDK automatically generates an AAID and applies for a token.
     * @returns Promise<boolean>
     * @param {boolean} enabled Indicates whether to enable automatic initialization.
     */
    setAutoInitEnabled(enabled: boolean): Promise<boolean> {
        return;
    }

    @Cordova({ otherPromise: true })
    getOdid(): Promise<string> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * This method is used to check whether automatic initialization is enabled.
     * @returns Promise<string>
     */
    isAutoInitEnabled(): Promise<boolean> {
        return;
    }

    @Cordova({ otherPromise: true })
    getInitialNotification(): Promise<any> {
        return;
    }

    @Cordova({ otherPromise: true })
    sendRemoteMessage(remoteMessage: RemoteMessageObject): Promise<boolean> {
        return;
    }

    @Cordova({ otherPromise: true })
    setBackgroundFile(filePath: string): Promise<void> {
        return;
    }

    @Cordova({ otherPromise: true })
    setItem(key: string, value: string): Promise<void> {
        return;
    }

    @Cordova({ otherPromise: true })
    getItem(key: string): Promise<object> {
        return;
    }

    @Cordova({ otherPromise: true })
    removeItem(key: string): Promise<void> {
        return;
    }

    @Cordova({ otherPromise: true })
    removeBackgroundFile(): Promise<void> {
        return;
    }
}

@Plugin({
    pluginName: "HmsLocalNotification",
    plugin: "@hmscore/cordova-plugin-hms-push",
    pluginRef: "HmsLocalNotification",
    repo: "https://github.com/HMS-Core/hms-cordova-plugin",
    platforms: ["Android"],
})
@Injectable()
export class HmsLocalNotification extends IonicNativePlugin {
    Attr = Attr;
    Importance = Importance;
    Priority = Priority;
    RepeatType = RepeatType;
    Visibility = Visibility;

    @Cordova({ otherPromise: true })
    localNotification(
        localNotification: LocalNotificationObject
    ): Promise<any> {
        return;
    }

    @Cordova({ otherPromise: true })
    localNotificationSchedule(
        localNotification: LocalNotificationObject
    ): Promise<any> {
        return;
    }

    @Cordova({ otherPromise: true })
    cancelAllNotifications(): Promise<boolean> {
        return;
    }

    @Cordova({ otherPromise: true })
    cancelNotifications(): Promise<boolean> {
        return;
    }

    @Cordova({ otherPromise: true })
    cancelScheduledNotifications(): Promise<boolean> {
        return;
    }

    @Cordova({ otherPromise: true })
    cancelNotificationsWithId(id: number[]): Promise<boolean> {
        return;
    }

    @Cordova({ otherPromise: true })
    cancelNotificationsWithIdTag(idTag: IdTag[]): Promise<boolean> {
        return;
    }

    @Cordova({ otherPromise: true })
    cancelNotificationsWithTag(tag: string): Promise<boolean> {
        return;
    }

    @Cordova({ otherPromise: true })
    getNotifications(): Promise<any> {
        return;
    }

    @Cordova({ otherPromise: true })
    getScheduledNotifications(): Promise<any> {
        return;
    }

    @Cordova({ otherPromise: true })
    getChannels(): Promise<any> {
        return;
    }

    @Cordova({ otherPromise: true })
    channelExists(channelId: string): Promise<boolean> {
        return;
    }

    @Cordova({ otherPromise: true })
    channelBlocked(channelId: string): Promise<boolean> {
        return;
    }

    @Cordova({ otherPromise: true })
    deleteChannel(channelId: string): Promise<boolean> {
        return;
    }
}

@Plugin({
    pluginName: "HmsPushEvent",
    plugin: "@hmscore/cordova-plugin-hms-push",
    pluginRef: "HmsPushEvent",
    repo: "https://github.com/HMS-Core/hms-cordova-plugin",
    platforms: ["Android"],
})
@Injectable()
export class HmsPushEvent extends IonicNativePlugin {
    @Cordova({ otherPromise: true })
    onRemoteMessageReceived(callback: (data: any) => void): void {
        return;
    }

    @Cordova({ otherPromise: true })
    onTokenReceived(callback: (data: any) => void): void {
        return;
    }

    @Cordova({ otherPromise: true })
    onTokenError(callback: (data: any) => void): void {
        return;
    }

    @Cordova({ otherPromise: true })
    onPushMessageSent(callback: (data: any) => void): void {
        return;
    }

    @Cordova({ otherPromise: true })
    onPushMessageSentError(callback: (data: any) => void): void {
        return;
    }

    @Cordova({ otherPromise: true })
    onPushMessageSentDelivered(callback: (data: any) => void): void {
        return;
    }

    @Cordova({ otherPromise: true })
    onLocalNotificationAction(callback: (data: any) => void): void {
        return;
    }

    @Cordova({ otherPromise: true })
    onNotificationOpenedApp(callback: (data: any) => void): void {
        return;
    }

    @Cordova({ otherPromise: true })
    onMultiSenderTokenReceivedEvent(callback: (data: any) => void): void {
        return;
    }

    @Cordova({ otherPromise: true })
    onMultiSenderTokenErrorEvent(callback: (data: any) => void): void {
        return;
    }

    REMOTE_DATA_MESSAGE_RECEIVED = "REMOTE_DATA_MESSAGE_RECEIVED";
    TOKEN_RECEIVED_EVENT = "TOKEN_RECEIVED_EVENT";
    ON_TOKEN_ERROR_EVENT = "ON_TOKEN_ERROR_EVENT";
    NOTIFICATION_OPENED_EVENT = "NOTIFICATION_OPENED_EVENT";
    LOCAL_NOTIFICATION_ACTION_EVENT = "LOCAL_NOTIFICATION_ACTION_EVENT";
    ON_PUSH_MESSAGE_SENT = "ON_PUSH_MESSAGE_SENT";
    ON_PUSH_MESSAGE_SENT_ERROR = "ON_PUSH_MESSAGE_SENT_ERROR";
    ON_PUSH_MESSAGE_SENT_DELIVERED = "ON_PUSH_MESSAGE_SENT_DELIVERED";
    ON_MULTI_SENDER_TOKEN_ERROR_EVENT = "ON_MULTI_SENDER_TOKEN_ERROR_EVENT";
    ON_MULTI_SENDER_TOKEN_RECEIVED_EVENT = "ON_MULTI_SENDER_TOKEN_RECEIVED_EVENT";
}

@Plugin({
    pluginName: "HmsPushProfile",
    plugin: "@hmscore/cordova-plugin-hms-push",
    pluginRef: "HmsPushProfile",
    repo: "https://github.com/HMS-Core/hms-cordova-plugin",
    platforms: ["Android"],
})
@Injectable()
export class HmsPushProfile extends IonicNativePlugin {
    HUAWEI_PROFILE = 1;
    CUSTOM_PROFILE = 2;
    UNDEFINED_PROFILE = -1;

    @Cordova({ otherPromise: true })
    /**
     *
     */
    isSupportProfile(): Promise<boolean> {
        return;
    }

    @Cordova({ otherPromise: true })
    addProfile(type: number, profileId: string): Promise<any> {
        return;
    }

    @Cordova({ otherPromise: true })
    addProfileWithSubjectId(
        subjectId: string,
        type: number,
        profileId: string
    ): Promise<any> {
        return;
    }

    @Cordova({ otherPromise: true })
    deleteProfile(profileId: string): Promise<any> {
        return;
    }

    @Cordova({ otherPromise: true })
    deleteProfileWithSubjectId(
        subjectId: string,
        profileId: string
    ): Promise<any> {
        return;
    }
}

export enum HmsPushResultCode {
    // Success
    SUCCESS = "0",

    // Error
    ERROR = "-1",

    // Bundle is null, exception
    NULL_BUNDLE = "333",

    // You do not have a token. Apply for a token.
    ERROR_NO_TOKEN = "907122030",

    // The current network is unavailable. Check the network connection.
    ERROR_NO_NETWORK = "907122031",

    // The token has expired. Delete the token and apply for a new one.
    ERROR_TOKEN_INVALID = "907122032",

    // If the Push service is unavailable, contact Huawei technical support.
    ERROR_SERVICE_NOT_AVAILABLE = "907122046",

    // If the Push server returns an error, contact Huawei technical support.
    ERROR_PUSH_SERVER = "907122047",

    // Unknown error. Contact Huawei technical support.
    ERROR_UNKNOWN = "907122045",

    // The number of subscribed topics exceeds 2000.
    ERROR_TOPIC_EXCEED = "907122034",

    // Failed to send the subscription topic. Contact Huawei technical support.
    ERROR_TOPIC_SEND = "907122035",

    // Push rights are not enabled. Enable the service and set push service parameters at AppGallery Connect.
    ERROR_NO_RIGHT = "907122036",

    // Failed to apply for the token. Contact Huawei technical support.
    ERROR_GET_TOKEN_ERR = "907122037",

    // No storage location is selected for the application or the storage location is invalid.
    ERROR_STORAGE_LOCATION_EMPTY = "907122038",

    // Failed to apply for a token. Cross-region token application is not allowed.
    ERROR_NOT_ALLOW_CROSS_APPLY = "907122053",

    // The message body size exceeds the maximum.
    ERROR_SIZE = "907122041",

    // The message contains invalid parameters.
    ERROR_INVALID_PARAMETERS = "907122042",

    // The number of sent messages reaches the upper limit. The messages will be discarded.
    ERROR_TOO_MANY_MESSAGES = "907122043",

    // The message lifetime expires before the message is successfully sent to the APP server.
    ERROR_TTL_EXCEEDED = "907122044",

    //  Huawei Mobile Services (APK) can't connect  Huawei Push  Kit.
    ERROR_HMS_CLIENT_API = "907122048",

    // The current EMUI version is too early to use the capability.
    ERROR_OPERATION_NOT_SUPPORTED = "907122049",

    // The operation cannot be performed in the main thread.
    ERROR_MAIN_THREAD = "907122050",

    // The device certificate authentication fails.
    ERROR_HMS_DEVICE_AUTH_FAILED_SELF_MAPPING = "907122051",

    // Failed to bind the service.
    ERROR_BIND_SERVICE_SELF_MAPPING = "907122052",

    // The SDK is being automatically initialized. Try again later.
    ERROR_AUTO_INITIALIZING = "907122054",

    /*The input parameter is incorrect. Check whether the related configuration information is correct.
     * Example: app_id in the agconnect - services.json file;
     * Check whether the build.gradle file is configured with the certificate signature.
     */
    ERROR_ARGUMENTS_INVALID = "907135000",

    // Internal Push error. Contact Huawei technical support engineers.
    ERROR_INTERNAL_ERROR = "907135001",

    // The service does not exist. The invoked interface does not exist.
    ERROR_NAMING_INVALID = "907135002",

    // The ApiClient object is invalid.
    ERROR_CLIENT_API_INVALID = "907135003",

    // Invoking AIDL times out. Contact Huawei technical support.
    ERROR_EXECUTE_TIMEOUT = "907135004",

    // The current area does not support this service.
    ERROR_NOT_IN_SERVICE = "907135005",

    // If the AIDL connection session is invalid, contact Huawei technical support.
    ERROR_SESSION_INVALID = "907135006",

    // An error occurred when invoking an unspecified API.
    ERROR_API_NOT_SPECIFIED = "1002",

    /* Failed to invoke the gateway to query the application scope.
     * Check whether the current app has been created and enabled in AppGallery Connect.
     * If yes, contact Huawei technical support.
     */
    ERROR_GET_SCOPE_ERROR = "907135700",
    /* Scope is not configured on the AppGallery Connect.
     * Check whether the current app has been created and enabled in AppGallery Connect.
     * If yes, contact Huawei technical support.
     */
    ERROR_SCOPE_LIST_EMPTY = "907135701",

    /* The certificate fingerprint is not configured on the AppGallery Connect.
     * 1. Check whether your phone can access the Internet.
     * 2. Check whether the correct certificate fingerprint is configured in AppGallery Connect. For details, see AppGallery Connect configuration in Development Preparations.
     * 3. If the check result is correct, contact Huawei technical support.
     */
    ERROR_CERT_FINGERPRINT_EMPTY = "907135702",

    // Permission is not configured on the AppGallery Connect.
    ERROR_PERMISSION_LIST_EMPTY = "907135703",

    // The authentication information of the application does not exist.
    ERROR_AUTH_INFO_NOT_EXIST = "6002",

    // An error occurred during certificate fingerprint verification. Check whether the correct certificate fingerprint is configured in AppGallery Connect. For details, see AppGallery Connect configuration in Development Preparations.
    ERROR_CERT_FINGERPRINT_ERROR = "6003",

    // Interface authentication: The permission does not exist and is not applied for in AppGallery Connect.
    ERROR_PERMISSION_NOT_EXIST = "6004",

    // Interface authentication: unauthorized.
    ERROR_PERMISSION_NOT_AUTHORIZED = "6005",

    // Interface authentication: The authorization expires.
    ERROR_PERMISSION_EXPIRED = "6006",
}

export enum Attr {
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
    data = "data",
}

export enum Importance {
    MAX = "max",
    HIGH = "high",
    DEFAULT = "default",
    LOW = "low",
    MIN = "min",
    NONE = "none",
    UNSPECIFIED = "unspecified",
}

export enum Priority {
    MAX = "max",
    HIGH = "high",
    DEFAULT = "default",
    LOW = "low",
    MIN = "min",
}

export enum RepeatType {
    HOUR = "hour",
    MINUTE = "minute",
    DAY = "day",
    WEEK = "week",
    CUSTOM_TIME = "custom_time",
}

export enum Visibility {
    PUBLIC = "public",
    SECRET = "secret",
    PRIVATE = "private",
}

export enum RemoteMessageBuilder {
    TO = "to",
    MESSAGE_ID = "messageId",
    MESSAGE_TYPE = "messageType",
    TTL = "ttl",
    COLLAPSE_KEY = "collapseKey",
    RECEIPT_MODE = "receiptMode",
    SEND_MODE = "sendMode",
    DATA = "data",
}

class CordovaRemoteMessage {
    static INSTANCE_ID_SCOPE = "HCM";

    static PRIORITY_UNKNOWN = 0;
    static PRIORITY_HIGH = 1;
    static PRIORITY_NORMAL = 2;

    static COLLAPSEKEY = "collapseKey";
    static DATA = "data";
    static DATAOFMAP = "dataOfMap";
    static MESSAGEID = "messageId";
    static MESSAGETYPE = "messageType";
    static ORIGINALURGENCY = "originalUrgency";
    static URGENCY = "urgency";
    static TTL = "ttl";
    static SENTTIME = "sentTime";
    static TO = "to";
    static FROM = "from";
    static TOKEN = "token";
    static ANALYTICINFO = "analyticInfo";
    static ANALYTICINFOMAP = "analyticInfoMap";

    static NOTIFICATION = {
        TITLE: "title",
        TITLELOCALIZATIONKEY: "titleLocalizationKey",
        TITLELOCALIZATIONARGS: "titleLocalizationArgs",
        BODYLOCALIZATIONKEY: "bodyLocalizationKey",
        BODYLOCALIZATIONARGS: "bodyLocalizationArgs",
        BODY: "body",
        ICON: "icon",
        SOUND: "Sound",
        TAG: "Tag",
        COLOR: "Color",
        CLICKACTION: "ClickAction",
        CHANNELID: "ChannelId",
        IMAGEURL: "ImageUrl",
        LINK: "Link",
        NOTIFYID: "NotifyId",
        WHEN: "When",
        LIGHTSETTINGS: "LightSettings",
        BADGENUMBER: "BadgeNumber",
        IMPORTANCE: "Importance",
        TICKER: "Ticker",
        VIBRATECONFIG: "vibrateConfig",
        VISIBILITY: "visibility",
        INTENTURI: "intentUri",
        ISAUTOCANCEL: "isAutoCancel",
        ISLOCALONLY: "isLocalOnly",
        ISDEFAULTLIGHT: "isDefaultLight",
        ISDEFAULTSOUND: "isDefaultSound",
        ISDEFAULTVIBRATE: "isDefaultVibrate",
    };
    remoteMsg: any;

    constructor(options = {}) {
        this.remoteMsg = options;
    }

    /*
     * parse all element,unordered
     */
    parseMsgAllAttribute() {
        let pushResult = "";
        for (const key in this.remoteMsg) {
            pushResult = pushResult + key + " : " + this.remoteMsg[key] + "\n";
        }
        return pushResult;
    }

    /*
     * getCollapseKey() Obtains the classification identifier (collapse key) of a message.
     */
    getCollapseKey() {
        return this.remoteMsg[CordovaRemoteMessage.COLLAPSEKEY];
    }

    /*
     * getData() Obtains valid content data of a message.
     */
    getData() {
        return this.remoteMsg[CordovaRemoteMessage.DATA];
    }

    /*
     * getDataOfMap() a message map.
     */
    getDataOfMap() {
        return this.remoteMsg[CordovaRemoteMessage.DATAOFMAP];
    }

    /*
     * getMessageId() Obtains the ID of a message.
     */
    getMessageId() {
        return this.remoteMsg[CordovaRemoteMessage.MESSAGEID];
    }

    /*
     * getMessageType() Obtains the type of a message.
     */
    getMessageType() {
        return this.remoteMsg[CordovaRemoteMessage.MESSAGETYPE];
    }

    /*
     * getOriginalUrgency() Obtains the original priority of a message.
     */
    getOriginalUrgency() {
        return this.remoteMsg[CordovaRemoteMessage.ORIGINALURGENCY];
    }

    /*
     * getUrgency() Obtains priority of a message.
     */
    getUrgency() {
        return this.remoteMsg[CordovaRemoteMessage.URGENCY];
    }

    /*
     * getTtl() Obtains valid getTtl of a message.
     */
    getTtl() {
        return this.remoteMsg[CordovaRemoteMessage.TTL];
    }

    /*
     * getSentTime() Obtains the time when a message is sent from the server.
     */
    getSentTime() {
        return this.remoteMsg[CordovaRemoteMessage.SENTTIME];
    }

    /*
     * getTo() Obtains the recipient of a message.
     */
    getTo() {
        return this.remoteMsg[CordovaRemoteMessage.TO];
    }

    /*
     * getFrom() Obtains the sender of a message.
     */
    getFrom() {
        return this.remoteMsg[CordovaRemoteMessage.FROM];
    }

    /*
     * getToken() Obtains valid token
     */
    getToken() {
        return this.remoteMsg[CordovaRemoteMessage.TOKEN];
    }

    getAnalyticInfo() {
        return this.remoteMsg[CordovaRemoteMessage.ANALYTICINFO];
    }

    getAnalyticInfoMap() {
        return this.remoteMsg[CordovaRemoteMessage.ANALYTICINFOMAP];
    }

    /*
     * Notification:getTitle() Obtains the title of a message
     */
    getNotificationTitle() {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.TITLE];
    }

    /*
     * Notification:getTitleLocalizationKey() Obtains the key of the displayed title of a notification message
     */
    getTitleLocalizationKey() {
        return this.remoteMsg[
            CordovaRemoteMessage.NOTIFICATION.TITLELOCALIZATIONKEY
        ];
    }

    /*
     * Notification:getTitleLocalizationArgs() Obtains variable parameters of the displayed title of a message
     */
    getTitleLocalizationArgs() {
        return this.remoteMsg[
            CordovaRemoteMessage.NOTIFICATION.TITLELOCALIZATIONARGS
        ];
    }

    /*
     * Notification:getBodyLocalizationKey() Obtains the key of the displayed content of a message
     */
    getBodyLocalizationKey() {
        return this.remoteMsg[
            CordovaRemoteMessage.NOTIFICATION.BODYLOCALIZATIONKEY
        ];
    }

    /*
     * Notification:getBodyLocalizationArgs() Obtains variable parameters of the displayed content of a message
     */
    getBodyLocalizationArgs() {
        return this.remoteMsg[
            CordovaRemoteMessage.NOTIFICATION.BODYLOCALIZATIONARGS
        ];
    }

    /*
     * Notification:getBody() Obtains the body of a message
     */
    getBody() {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.BODY];
    }

    /*
     * Notification:getIcon() Obtains the icon of a message
     */
    getIcon() {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.ICON];
    }

    /*
     * Notification:getSound() Obtains the sound from a message
     */
    getSound() {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.SOUND];
    }

    /*
     * Notification:getTag() Obtains the tag from a message for message overwriting
     */
    getTag() {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.TAG];
    }

    /*
     * Notification:getColor() Obtains the colors of icons in a message
     */
    getColor() {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.COLOR];
    }

    /*
     * Notification:getClickAction() Obtains actions triggered by message tapping
     */
    getClickAction() {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.CLICKACTION];
    }

    /*
     * Notification:getChannelId() Obtains IDs of channels that support the display of messages
     */
    getChannelId() {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.CHANNELID];
    }

    /*
     * Notification:getImageUrl() Obtains the image URL from a message
     */
    getImageUrl() {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.IMAGEURL];
    }

    /*
     * Notification:getLink() Obtains the URL to be accessed from a message
     */
    getLink() {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.LINK];
    }

    /*
     * Notification:getNotifyId() Obtains the unique ID of a message
     */
    getNotifyId() {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.NOTIFYID];
    }

    /*
     * Notification:getWhen()
     */
    getWhen() {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.WHEN];
    }

    /*
     * Notification:getLightSettings()
     */
    getLightSettings() {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.LIGHTSETTINGS];
    }

    /*
     * Notification:getBadgeNumber()
     */
    getBadgeNumber() {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.BADGENUMBER];
    }

    /*
     * Notification:getImportance()
     */
    getImportance() {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.IMPORTANCE];
    }

    /*
     * Notification:getTicker()
     */
    getTicker() {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.TICKER];
    }

    /*
     * Notification:getVibrateConfig()
     */
    getVibrateConfig() {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.VIBRATECONFIG];
    }

    /*
     * Notification:getVisibility()
     */
    getVisibility() {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.VISIBILITY];
    }

    /*
     * Notification:getIntentUri()
     */
    getIntentUri() {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.INTENTURI];
    }

    /*
     * Notification:isAutoCancel()
     */
    isAutoCancel() {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.ISAUTOCANCEL];
    }

    /*
     * Notification:getIntentUri()
     */
    isLocalOnly() {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.ISLOCALONLY];
    }

    /*
     * Notification:isDefaultLight()
     */
    isDefaultLight() {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.ISDEFAULTLIGHT];
    }

    /*
     * Notification:isDefaultSound()
     */
    isDefaultSound() {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.ISDEFAULTSOUND];
    }

    /*
     * Notification:isDefaultVibrate()
     */
    isDefaultVibrate() {
        return this.remoteMsg[
            CordovaRemoteMessage.NOTIFICATION.ISDEFAULTVIBRATE
        ];
    }
}

type LocalNotificationObject = {
    [key in Attr]?: any;
};

type RemoteMessageObject = {
    [key in RemoteMessageBuilder]?: any;
};

interface IdTag {
    id: number;
    tag: string;
}
