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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HmsPushOriginal = /** @class */ (function (_super) {
    __extends(HmsPushOriginal, _super);
    function HmsPushOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.HmsPushResultCode = HmsPushResultCode;
        _this.CordovaRemoteMessage = CordovaRemoteMessage;
        return _this;
    }
    /**
     * This method  initialized HmsPushOriginal.
      
     * @returns Promise<void>
     */
    HmsPushOriginal.prototype.init = function () { return cordova(this, "init", { "otherPromise": true }, arguments); };
    HmsPushOriginal.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HmsPushOriginal.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    /**
     * This method is used to disable the display of notification messages. If you want to control the display of notification messages in an app, you can call this method. This method applies to notification messages but not data messages. It is the app that determines whether to enable or disable data messaging.
      
     * @returns Promise<string>
     */
    HmsPushOriginal.prototype.turnOnPush = function () { return cordova(this, "turnOnPush", { "otherPromise": true }, arguments); };
    /**
     * This method is used to enable the display of notification messages. If you want to control the display of notification messages in an app, you can call this method. This method applies to notification messages but not data messages. It is the app that determines whether to enable or disable data messaging.
     * @returns Promise<string>
     */
    HmsPushOriginal.prototype.turnOffPush = function () { return cordova(this, "turnOffPush", { "otherPromise": true }, arguments); };
    /**
     * This method is used to obtain an AAID in synchronous mode. Before applying for a token, an app calls this method to obtain its unique AAID. The HUAWEI Push server generates a token for the app based on the AAID. If the AAID of the app changes, a new token will be generated next time when the app applies for a token. If an app needs to report statistics events, it must carry the AAID as its unique ID.
     * @returns Promise<string>
     */
    HmsPushOriginal.prototype.getId = function () { return cordova(this, "getId", { "otherPromise": true }, arguments); };
    /**
     * This method is used to obtain an AAID in asynchronous mode.
     * @returns Promise<string>
     */
    HmsPushOriginal.prototype.getAAID = function () { return cordova(this, "getAAID", { "otherPromise": true }, arguments); };
    /**
     * This method is used to obtain a token required for accessing HUAWEI Push Kit. If there is no local AAID, this method will automatically generate an AAID when it is called because the HUAWEI Push Kit server needs to generate a token based on the AAID.
     * @returns Promise<string>
     * @params scope ? : String
     */
    HmsPushOriginal.prototype.getToken = function (args) { return cordova(this, "getToken", { "otherPromise": true }, arguments); };
    /**
     * This method is used to obtain the generation timestamp of an AAID.
     * @returns Promise<string>
     */
    HmsPushOriginal.prototype.getCreationTime = function () { return cordova(this, "getCreationTime", { "otherPromise": true }, arguments); };
    /**
     * This method is used to delete a local AAID and its generation timestamp.
     * @returns Promise<string>
     */
    HmsPushOriginal.prototype.deleteAAID = function () { return cordova(this, "deleteAAID", { "otherPromise": true }, arguments); };
    /**
     * This method is used to delete a token. After a token is deleted, the corresponding AAID will not be deleted. This method is a synchronous method.
     * @returns Promise<string>
     * @params scope ? : String
     */
    HmsPushOriginal.prototype.deleteToken = function (args) { return cordova(this, "deleteToken", { "otherPromise": true }, arguments); };
    /**
     * This method is used to subscribe to topics in asynchronous mode. The HUAWEI Push Kit topic messaging function allows you to send messages to multiple devices whose users have subscribed to a specific topic. You can write messages about the topic as required, and HUAWEI Push Kit determines the release path and sends messages to the correct devices in a reliable manner.
     * @param {string} arg Topic to be subscribed to.
     * @returns Promise<string>
     */
    HmsPushOriginal.prototype.subscribe = function (arg) { return cordova(this, "subscribe", { "otherPromise": true }, arguments); };
    /**
     * This method is used to unsubscribe from topics that are subscribed to through the subscribe method.
     * @param {string} arg Topic to be unsubscribed to.
     * @returns Promise<string>
     */
    HmsPushOriginal.prototype.unsubscribe = function (arg) { return cordova(this, "unsubscribe", { "otherPromise": true }, arguments); };
    HmsPushOriginal.prototype.setAutoInitEnabled = function (args) { return cordova(this, "setAutoInitEnabled", { "otherPromise": true }, arguments); };
    HmsPushOriginal.prototype.getOdid = function () { return cordova(this, "getOdid", { "otherPromise": true }, arguments); };
    /**
     * This method is used to check whether automatic initialization is enabled.
     * @returns Promise<string>
     */
    HmsPushOriginal.prototype.isAutoInitEnabled = function () { return cordova(this, "isAutoInitEnabled", { "otherPromise": true }, arguments); };
    HmsPushOriginal.prototype.getInitialNotification = function () { return cordova(this, "getInitialNotification", { "otherPromise": true }, arguments); };
    HmsPushOriginal.prototype.setBackgroundAction = function (callback) { return cordova(this, "setBackgroundAction", { "otherPromise": true }, arguments); };
    HmsPushOriginal.prototype.removeBackgroundAction = function () { return cordova(this, "removeBackgroundAction", { "otherPromise": true }, arguments); };
    HmsPushOriginal.prototype.sendRemoteMessage = function (args) { return cordova(this, "sendRemoteMessage", { "otherPromise": true }, arguments); };
    HmsPushOriginal.pluginName = "HmsPush";
    HmsPushOriginal.plugin = "com-plugin-hms-push";
    HmsPushOriginal.pluginRef = "HmsPush";
    HmsPushOriginal.platforms = ["Android"];
    return HmsPushOriginal;
}(IonicNativePlugin));
var HmsPush = new HmsPushOriginal();
export { HmsPush };
var HmsLocalNotificationOriginal = /** @class */ (function (_super) {
    __extends(HmsLocalNotificationOriginal, _super);
    function HmsLocalNotificationOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CordovaRemoteMessage = CordovaRemoteMessage;
        _this.Attr = Attr;
        _this.Importance = Importance;
        _this.Priority = Priority;
        _this.RemoteMessageBuilder = RemoteMessageBuilder;
        _this.RepeatType = RepeatType;
        _this.Visibility = Visibility;
        return _this;
    }
    HmsLocalNotificationOriginal.prototype.localNotification = function (args) { return cordova(this, "localNotification", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.prototype.localNotificationSchedule = function (args) { return cordova(this, "localNotificationSchedule", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.prototype.cancelAllNotifications = function () { return cordova(this, "cancelAllNotifications", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.prototype.cancelNotifications = function () { return cordova(this, "cancelNotifications", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.prototype.cancelScheduledNotifications = function () { return cordova(this, "cancelScheduledNotifications", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.prototype.cancelNotificationsWithId = function (args) { return cordova(this, "cancelNotificationsWithId", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.prototype.cancelNotificationsWithIdTag = function (args) { return cordova(this, "cancelNotificationsWithIdTag", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.prototype.cancelNotificationsWithTag = function (args) { return cordova(this, "cancelNotificationsWithTag", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.prototype.getNotifications = function () { return cordova(this, "getNotifications", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.prototype.getScheduledNotifications = function () { return cordova(this, "getScheduledNotifications", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.prototype.getChannels = function () { return cordova(this, "getChannels", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.prototype.channelExists = function (args) { return cordova(this, "channelExists", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.prototype.channelBlocked = function (args) { return cordova(this, "channelBlocked", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.prototype.deleteChannel = function (args) { return cordova(this, "deleteChannel", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.backgroundLocalNotification = function (args) {
        return;
    };
    HmsLocalNotificationOriginal.pluginName = "HmsLocalNotification";
    HmsLocalNotificationOriginal.plugin = "com-plugin-hms-push";
    HmsLocalNotificationOriginal.pluginRef = "HmsLocalNotification";
    HmsLocalNotificationOriginal.platforms = ["Android"];
    return HmsLocalNotificationOriginal;
}(IonicNativePlugin));
var HmsLocalNotification = new HmsLocalNotificationOriginal();
export { HmsLocalNotification };
var HmsPushEventOriginal = /** @class */ (function (_super) {
    __extends(HmsPushEventOriginal, _super);
    function HmsPushEventOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.REMOTE_DATA_MESSAGE_RECEIVED = "REMOTE_DATA_MESSAGE_RECEIVED";
        _this.TOKEN_RECEIVED_EVENT = "TOKEN_RECEIVED_EVENT";
        _this.ON_TOKEN_ERROR_EVENT = "ON_TOKEN_ERROR_EVENT";
        _this.NOTIFICATION_OPENED_EVENT = "NOTIFICATION_OPENED_EVENT";
        _this.LOCAL_NOTIFICATION_ACTION_EVENT = "LOCAL_NOTIFICATION_ACTION_EVENT";
        _this.ON_PUSH_MESSAGE_SENT = "ON_PUSH_MESSAGE_SENT";
        _this.ON_PUSH_MESSAGE_SENT_ERROR = "ON_PUSH_MESSAGE_SENT_ERROR";
        _this.ON_PUSH_MESSAGE_SENT_DELIVERED = "ON_PUSH_MESSAGE_SENT_DELIVERED";
        return _this;
    }
    HmsPushEventOriginal.prototype.onRemoteMessageReceived = function (result) {
        window.registerHMSEvent("REMOTE_DATA_MESSAGE_RECEIVED", result);
    };
    HmsPushEventOriginal.prototype.onTokenReceived = function (result) {
        window.registerHMSEvent("TOKEN_RECEIVED_EVENT", result);
    };
    HmsPushEventOriginal.prototype.onTokenError = function (result) {
        window.registerHMSEvent("ON_TOKEN_ERROR_EVENT", result);
    };
    HmsPushEventOriginal.prototype.onPushMessageSent = function (result) {
        window.registerHMSEvent("ON_PUSH_MESSAGE_SENT", result);
    };
    HmsPushEventOriginal.prototype.onPushMessageSentError = function (result) {
        window.registerHMSEvent("ON_PUSH_MESSAGE_SENT_ERROR", result);
    };
    HmsPushEventOriginal.prototype.onPushMessageSentDelivered = function (result) {
        window.registerHMSEvent("ON_PUSH_MESSAGE_SENT_DELIVERED", result);
    };
    HmsPushEventOriginal.prototype.onLocalNotificationAction = function (result) {
        window.registerHMSEvent("LOCAL_NOTIFICATION_ACTION_EVENT", result);
    };
    HmsPushEventOriginal.prototype.onNotificationOpenedApp = function (result) {
        window.registerHMSEvent("NOTIFICATION_OPENED_EVENT", result);
    };
    HmsPushEventOriginal.pluginName = "HmsPushEvent";
    HmsPushEventOriginal.plugin = "com-plugin-hms-push";
    HmsPushEventOriginal.pluginRef = "HmsPushEvent";
    HmsPushEventOriginal.platforms = ["Android"];
    return HmsPushEventOriginal;
}(IonicNativePlugin));
var HmsPushEvent = new HmsPushEventOriginal();
export { HmsPushEvent };
export var HmsPushResultCode;
(function (HmsPushResultCode) {
    // Success
    HmsPushResultCode["SUCCESS"] = "0";
    // Error
    HmsPushResultCode["ERROR"] = "-1";
    // Bundle is null, exception
    HmsPushResultCode["NULL_BUNDLE"] = "333";
    // You do not have a token. Apply for a token.
    HmsPushResultCode["ERROR_NO_TOKEN"] = "907122030";
    // The current network is unavailable. Check the network connection.
    HmsPushResultCode["ERROR_NO_NETWORK"] = "907122031";
    // The token has expired. Delete the token and apply for a new one.
    HmsPushResultCode["ERROR_TOKEN_INVALID"] = "907122032";
    // If the Push service is unavailable, contact Huawei technical support.
    HmsPushResultCode["ERROR_SERVICE_NOT_AVAILABLE"] = "907122046";
    // If the Push server returns an error, contact Huawei technical support.
    HmsPushResultCode["ERROR_PUSH_SERVER"] = "907122047";
    // Unknown error. Contact Huawei technical support.
    HmsPushResultCode["ERROR_UNKNOWN"] = "907122045";
    // The number of subscribed topics exceeds 2000.
    HmsPushResultCode["ERROR_TOPIC_EXCEED"] = "907122034";
    // Failed to send the subscription topic. Contact Huawei technical support.
    HmsPushResultCode["ERROR_TOPIC_SEND"] = "907122035";
    // Push rights are not enabled. Enable the service and set push service parameters at AppGallery Connect.
    HmsPushResultCode["ERROR_NO_RIGHT"] = "907122036";
    // Failed to apply for the token. Contact Huawei technical support.
    HmsPushResultCode["ERROR_GET_TOKEN_ERR"] = "907122037";
    // No storage location is selected for the application or the storage location is invalid.
    HmsPushResultCode["ERROR_STORAGE_LOCATION_EMPTY"] = "907122038";
    // Failed to apply for a token. Cross-region token application is not allowed.
    HmsPushResultCode["ERROR_NOT_ALLOW_CROSS_APPLY"] = "907122053";
    // The message body size exceeds the maximum.
    HmsPushResultCode["ERROR_SIZE"] = "907122041";
    // The message contains invalid parameters.
    HmsPushResultCode["ERROR_INVALID_PARAMETERS"] = "907122042";
    // The number of sent messages reaches the upper limit. The messages will be discarded.
    HmsPushResultCode["ERROR_TOO_MANY_MESSAGES"] = "907122043";
    // The message lifetime expires before the message is successfully sent to the APP server.
    HmsPushResultCode["ERROR_TTL_EXCEEDED"] = "907122044";
    //  Huawei Mobile Services (APK) can't connect  Huawei Push  Kit.
    HmsPushResultCode["ERROR_HMS_CLIENT_API"] = "907122048";
    // The current EMUI version is too early to use the capability.
    HmsPushResultCode["ERROR_OPERATION_NOT_SUPPORTED"] = "907122049";
    // The operation cannot be performed in the main thread.
    HmsPushResultCode["ERROR_MAIN_THREAD"] = "907122050";
    // The device certificate authentication fails.
    HmsPushResultCode["ERROR_HMS_DEVICE_AUTH_FAILED_SELF_MAPPING"] = "907122051";
    // Failed to bind the service.
    HmsPushResultCode["ERROR_BIND_SERVICE_SELF_MAPPING"] = "907122052";
    // The SDK is being automatically initialized. Try again later.
    HmsPushResultCode["ERROR_AUTO_INITIALIZING"] = "907122054";
    /*The input parameter is incorrect. Check whether the related configuration information is correct.
     * Example: app_id in the agconnect - services.json file;
     * Check whether the build.gradle file is configured with the certificate signature.
     */
    HmsPushResultCode["ERROR_ARGUMENTS_INVALID"] = "907135000";
    // Internal Push error. Contact Huawei technical support engineers.
    HmsPushResultCode["ERROR_INTERNAL_ERROR"] = "907135001";
    // The service does not exist. The invoked interface does not exist.
    HmsPushResultCode["ERROR_NAMING_INVALID"] = "907135002";
    // The ApiClient object is invalid.
    HmsPushResultCode["ERROR_CLIENT_API_INVALID"] = "907135003";
    // Invoking AIDL times out. Contact Huawei technical support.
    HmsPushResultCode["ERROR_EXECUTE_TIMEOUT"] = "907135004";
    // The current area does not support this service.
    HmsPushResultCode["ERROR_NOT_IN_SERVICE"] = "907135005";
    // If the AIDL connection session is invalid, contact Huawei technical support.
    HmsPushResultCode["ERROR_SESSION_INVALID"] = "907135006";
    // An error occurred when invoking an unspecified API.
    HmsPushResultCode["ERROR_API_NOT_SPECIFIED"] = "1002";
    /* Failed to invoke the gateway to query the application scope.
     * Check whether the current app has been created and enabled in AppGallery Connect.
     * If yes, contact Huawei technical support.
     */
    HmsPushResultCode["ERROR_GET_SCOPE_ERROR"] = "907135700";
    /* Scope is not configured on the AppGallery Connect.
     * Check whether the current app has been created and enabled in AppGallery Connect.
     * If yes, contact Huawei technical support.
     */
    HmsPushResultCode["ERROR_SCOPE_LIST_EMPTY"] = "907135701";
    /* The certificate fingerprint is not configured on the AppGallery Connect.
     * 1. Check whether your phone can access the Internet.
     * 2. Check whether the correct certificate fingerprint is configured in AppGallery Connect. For details, see AppGallery Connect configuration in Development Preparations.
     * 3. If the check result is correct, contact Huawei technical support.
     */
    HmsPushResultCode["ERROR_CERT_FINGERPRINT_EMPTY"] = "907135702";
    //Permission is not configured on the AppGallery Connect.
    HmsPushResultCode["ERROR_PERMISSION_LIST_EMPTY"] = "907135703";
    // The authentication information of the application does not exist.
    HmsPushResultCode["ERROR_AUTH_INFO_NOT_EXIST"] = "6002";
    // An error occurred during certificate fingerprint verification. Check whether the correct certificate fingerprint is configured in AppGallery Connect. For details, see AppGallery Connect configuration in Development Preparations.
    HmsPushResultCode["ERROR_CERT_FINGERPRINT_ERROR"] = "6003";
    // Interface authentication: The permission does not exist and is not applied for in AppGallery Connect.
    HmsPushResultCode["ERROR_PERMISSION_NOT_EXIST"] = "6004";
    // Interface authentication: unauthorized.
    HmsPushResultCode["ERROR_PERMISSION_NOT_AUTHORIZED"] = "6005";
    // Interface authentication: The authorization expires.
    HmsPushResultCode["ERROR_PERMISSION_EXPIRED"] = "6006";
})(HmsPushResultCode || (HmsPushResultCode = {}));
;
export var Attr;
(function (Attr) {
    Attr["id"] = "id";
    Attr["message"] = "message";
    Attr["fireDate"] = "fireDate";
    Attr["title"] = "title";
    Attr["ticker"] = "ticker";
    Attr["showWhen"] = "showWhen";
    Attr["autoCancel"] = "autoCancel";
    Attr["largeIcon"] = "largeIcon";
    Attr["largeIconUrl"] = "largeIconUrl";
    Attr["smallIcon"] = "smallIcon";
    Attr["bigText"] = "bigText";
    Attr["subText"] = "subText";
    Attr["bigPictureUrl"] = "bigPictureUrl";
    Attr["shortcutId"] = "shortcutId";
    Attr["number"] = "number";
    Attr["channelId"] = "channelId";
    Attr["channelName"] = "channelName";
    Attr["channelDescription"] = "channelDescription";
    Attr["color"] = "color";
    Attr["group"] = "group";
    Attr["groupSummary"] = "groupSummary";
    Attr["playSound"] = "playSound";
    Attr["soundName"] = "soundName";
    Attr["vibrate"] = "vibrate";
    Attr["vibrateDuration"] = "vibrateDuration";
    Attr["actions"] = "actions";
    Attr["invokeApp"] = "invokeApp";
    Attr["tag"] = "tag";
    Attr["repeatType"] = "repeatType";
    Attr["repeatTime"] = "repeatTime";
    Attr["ongoing"] = "ongoing";
    Attr["allowWhileIdle"] = "allowWhileIdle";
    Attr["dontNotifyInForeground"] = "dontNotifyInForeground";
    Attr["priority"] = "priority";
    Attr["importance"] = "importance";
    Attr["visibility"] = "visibility";
})(Attr || (Attr = {}));
export var Importance;
(function (Importance) {
    Importance["MAX"] = "max";
    Importance["HIGH"] = "high";
    Importance["DEFAULT"] = "default";
    Importance["LOW"] = "low";
    Importance["MIN"] = "min";
    Importance["NONE"] = "none";
    Importance["UNSPECIFIED"] = "unspecified";
})(Importance || (Importance = {}));
;
export var Priority;
(function (Priority) {
    Priority["MAX"] = "max";
    Priority["HIGH"] = "high";
    Priority["DEFAULT"] = "default";
    Priority["LOW"] = "low";
    Priority["MIN"] = "min";
})(Priority || (Priority = {}));
;
export var RepeatType;
(function (RepeatType) {
    RepeatType["HOUR"] = "hour";
    RepeatType["MINUTE"] = "minute";
    RepeatType["DAY"] = "day";
    RepeatType["WEEK"] = "week";
    RepeatType["CUSTOM_TIME"] = "custom_time";
})(RepeatType || (RepeatType = {}));
;
export var Visibility;
(function (Visibility) {
    Visibility["PUBLIC"] = "public";
    Visibility["SECRET"] = "secret";
    Visibility["PRIVATE"] = "private";
})(Visibility || (Visibility = {}));
;
export var RemoteMessageBuilder;
(function (RemoteMessageBuilder) {
    RemoteMessageBuilder["TO"] = "to";
    RemoteMessageBuilder["MESSAGE_ID"] = "messageId";
    RemoteMessageBuilder["MESSAGE_TYPE"] = "messageType";
    RemoteMessageBuilder["TTL"] = "ttl";
    RemoteMessageBuilder["COLLAPSE_KEY"] = "collapseKey";
    RemoteMessageBuilder["RECEIPT_MODE"] = "receiptMode";
    RemoteMessageBuilder["SEND_MODE"] = "sendMode";
    RemoteMessageBuilder["DATA"] = "data";
})(RemoteMessageBuilder || (RemoteMessageBuilder = {}));
;
var CordovaRemoteMessage = /** @class */ (function () {
    function CordovaRemoteMessage(options) {
        if (options === void 0) { options = {}; }
        this.remoteMsg = options;
    }
    /*
     * parse all element,unordered
     */
    CordovaRemoteMessage.prototype.parseMsgAllAttribute = function () {
        var pushResult = '';
        for (var key in this.remoteMsg) {
            pushResult = pushResult + key + ' : ' + this.remoteMsg[key] + '\n';
        }
        return pushResult;
    };
    /*
     * getCollapseKey() Obtains the classification identifier (collapse key) of a message.
     */
    CordovaRemoteMessage.prototype.getCollapseKey = function () {
        return this.remoteMsg[CordovaRemoteMessage.COLLAPSEKEY];
    };
    /*
     * getData() Obtains valid content data of a message.
     */
    CordovaRemoteMessage.prototype.getData = function () {
        return this.remoteMsg[CordovaRemoteMessage.DATA];
    };
    /*
     * getDataOfMap() a message map.
     */
    CordovaRemoteMessage.prototype.getDataOfMap = function () {
        return this.remoteMsg[CordovaRemoteMessage.DATAOFMAP];
    };
    /*
     * getMessageId() Obtains the ID of a message.
     */
    CordovaRemoteMessage.prototype.getMessageId = function () {
        return this.remoteMsg[CordovaRemoteMessage.MESSAGEID];
    };
    /*
     * getMessageType() Obtains the type of a message.
     */
    CordovaRemoteMessage.prototype.getMessageType = function () {
        return this.remoteMsg[CordovaRemoteMessage.MESSAGETYPE];
    };
    /*
     * getOriginalUrgency() Obtains the original priority of a message.
     */
    CordovaRemoteMessage.prototype.getOriginalUrgency = function () {
        return this.remoteMsg[CordovaRemoteMessage.ORIGINALURGENCY];
    };
    /*
     * getUrgency() Obtains priority of a message.
     */
    CordovaRemoteMessage.prototype.getUrgency = function () {
        return this.remoteMsg[CordovaRemoteMessage.URGENCY];
    };
    /*
     * getTtl() Obtains valid getTtl of a message.
     */
    CordovaRemoteMessage.prototype.getTtl = function () {
        return this.remoteMsg[CordovaRemoteMessage.TTL];
    };
    /*
     * getSentTime() Obtains the time when a message is sent from the server.
     */
    CordovaRemoteMessage.prototype.getSentTime = function () {
        return this.remoteMsg[CordovaRemoteMessage.SENTTIME];
    };
    /*
     * getTo() Obtains the recipient of a message.
     */
    CordovaRemoteMessage.prototype.getTo = function () {
        return this.remoteMsg[CordovaRemoteMessage.TO];
    };
    /*
     * getFrom() Obtains the sender of a message.
     */
    CordovaRemoteMessage.prototype.getFrom = function () {
        return this.remoteMsg[CordovaRemoteMessage.FROM];
    };
    /*
     * getToken() Obtains valid token
     */
    CordovaRemoteMessage.prototype.getToken = function () {
        return this.remoteMsg[CordovaRemoteMessage.TOKEN];
    };
    /*
     * Notification:getTitle() Obtains the title of a message
     */
    CordovaRemoteMessage.prototype.getNotificationTitle = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.TITLE];
    };
    /*
     * Notification:getTitleLocalizationKey() Obtains the key of the displayed title of a notification message
     */
    CordovaRemoteMessage.prototype.getTitleLocalizationKey = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.TITLELOCALIZATIONKEY];
    };
    /*
     * Notification:getTitleLocalizationArgs() Obtains variable parameters of the displayed title of a message
     */
    CordovaRemoteMessage.prototype.getTitleLocalizationArgs = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.TITLELOCALIZATIONARGS];
    };
    /*
     * Notification:getBodyLocalizationKey() Obtains the key of the displayed content of a message
     */
    CordovaRemoteMessage.prototype.getBodyLocalizationKey = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.BODYLOCALIZATIONKEY];
    };
    /*
     * Notification:getBodyLocalizationArgs() Obtains variable parameters of the displayed content of a message
     */
    CordovaRemoteMessage.prototype.getBodyLocalizationArgs = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.BODYLOCALIZATIONARGS];
    };
    /*
     * Notification:getBody() Obtains the body of a message
     */
    CordovaRemoteMessage.prototype.getBody = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.BODY];
    };
    /*
     * Notification:getIcon() Obtains the icon of a message
     */
    CordovaRemoteMessage.prototype.getIcon = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.ICON];
    };
    /*
     * Notification:getSound() Obtains the sound from a message
     */
    CordovaRemoteMessage.prototype.getSound = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.SOUND];
    };
    /*
     * Notification:getTag() Obtains the tag from a message for message overwriting
     */
    CordovaRemoteMessage.prototype.getTag = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.TAG];
    };
    /*
     * Notification:getColor() Obtains the colors of icons in a message
     */
    CordovaRemoteMessage.prototype.getColor = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.COLOR];
    };
    /*
     * Notification:getClickAction() Obtains actions triggered by message tapping
     */
    CordovaRemoteMessage.prototype.getClickAction = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.CLICKACTION];
    };
    /*
     * Notification:getChannelId() Obtains IDs of channels that support the display of messages
     */
    CordovaRemoteMessage.prototype.getChannelId = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.CHANNELID];
    };
    /*
     * Notification:getImageUrl() Obtains the image URL from a message
     */
    CordovaRemoteMessage.prototype.getImageUrl = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.IMAGEURL];
    };
    /*
     * Notification:getLink() Obtains the URL to be accessed from a message
     */
    CordovaRemoteMessage.prototype.getLink = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.LINK];
    };
    /*
     * Notification:getNotifyId() Obtains the unique ID of a message
     */
    CordovaRemoteMessage.prototype.getNotifyId = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.NOTIFYID];
    };
    /*
     * Notification:getWhen()
     */
    CordovaRemoteMessage.prototype.getWhen = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.WHEN];
    };
    /*
     * Notification:getLightSettings()
     */
    CordovaRemoteMessage.prototype.getLightSettings = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.LIGHTSETTINGS];
    };
    /*
     * Notification:getBadgeNumber()
     */
    CordovaRemoteMessage.prototype.getBadgeNumber = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.BADGENUMBER];
    };
    /*
     * Notification:getImportance()
     */
    CordovaRemoteMessage.prototype.getImportance = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.IMPORTANCE];
    };
    /*
     * Notification:getTicker()
     */
    CordovaRemoteMessage.prototype.getTicker = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.TICKER];
    };
    /*
     * Notification:getVibrateConfig()
     */
    CordovaRemoteMessage.prototype.getVibrateConfig = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.VIBRATECONFIG];
    };
    /*
     * Notification:getVisibility()
     */
    CordovaRemoteMessage.prototype.getVisibility = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.VISIBILITY];
    };
    /*
     * Notification:getIntentUri()
     */
    CordovaRemoteMessage.prototype.getIntentUri = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.INTENTURI];
    };
    /*
     * Notification:isAutoCancel()
     */
    CordovaRemoteMessage.prototype.isAutoCancel = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.ISAUTOCANCEL];
    };
    /*
     * Notification:getIntentUri()
     */
    CordovaRemoteMessage.prototype.isLocalOnly = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.ISLOCALONLY];
    };
    /*
     * Notification:isDefaultLight()
     */
    CordovaRemoteMessage.prototype.isDefaultLight = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.ISDEFAULTLIGHT];
    };
    /*
     * Notification:isDefaultSound()
     */
    CordovaRemoteMessage.prototype.isDefaultSound = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.ISDEFAULTSOUND];
    };
    /*
     * Notification:isDefaultVibrate()
     */
    CordovaRemoteMessage.prototype.isDefaultVibrate = function () {
        return this.remoteMsg[CordovaRemoteMessage.NOTIFICATION.ISDEFAULTVIBRATE];
    };
    CordovaRemoteMessage.INSTANCE_ID_SCOPE = 'HCM';
    CordovaRemoteMessage.PRIORITY_UNKNOWN = 0;
    CordovaRemoteMessage.PRIORITY_HIGH = 1;
    CordovaRemoteMessage.PRIORITY_NORMAL = 2;
    CordovaRemoteMessage.COLLAPSEKEY = 'collapseKey';
    CordovaRemoteMessage.DATA = 'data';
    CordovaRemoteMessage.DATAOFMAP = 'dataOfMap';
    CordovaRemoteMessage.MESSAGEID = 'messageId';
    CordovaRemoteMessage.MESSAGETYPE = 'messageType';
    CordovaRemoteMessage.ORIGINALURGENCY = 'originalUrgency';
    CordovaRemoteMessage.URGENCY = 'urgency';
    CordovaRemoteMessage.TTL = 'ttl';
    CordovaRemoteMessage.SENTTIME = 'sentTime';
    CordovaRemoteMessage.TO = 'to';
    CordovaRemoteMessage.FROM = 'from';
    CordovaRemoteMessage.TOKEN = 'token';
    CordovaRemoteMessage.NOTIFICATION = {
        TITLE: 'title',
        TITLELOCALIZATIONKEY: 'titleLocalizationKey',
        TITLELOCALIZATIONARGS: 'titleLocalizationArgs',
        BODYLOCALIZATIONKEY: 'bodyLocalizationKey',
        BODYLOCALIZATIONARGS: 'bodyLocalizationArgs',
        BODY: 'body',
        ICON: 'icon',
        SOUND: 'Sound',
        TAG: 'Tag',
        COLOR: 'Color',
        CLICKACTION: 'ClickAction',
        CHANNELID: 'ChannelId',
        IMAGEURL: 'ImageUrl',
        LINK: 'Link',
        NOTIFYID: 'NotifyId',
        WHEN: 'When',
        LIGHTSETTINGS: 'LightSettings',
        BADGENUMBER: 'BadgeNumber',
        IMPORTANCE: 'Importance',
        TICKER: 'Ticker',
        VIBRATECONFIG: 'vibrateConfig',
        VISIBILITY: 'visibility',
        INTENTURI: 'intentUri',
        ISAUTOCANCEL: 'isAutoCancel',
        ISLOCALONLY: 'isLocalOnly',
        ISDEFAULTLIGHT: 'isDefaultLight',
        ISDEFAULTSOUND: 'isDefaultSound',
        ISDEFAULTVIBRATE: 'isDefaultVibrate',
    };
    return CordovaRemoteMessage;
}());
export { CordovaRemoteMessage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1wdXNoL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFpQkEsT0FBTyw4QkFBMEYsTUFBTSxvQkFBb0IsQ0FBQzs7SUErQi9GLDJCQUFpQjs7O1FBRTVDLHVCQUFpQixHQUFDLGlCQUFpQixDQUFBO1FBQ25DLDBCQUFvQixHQUFDLG9CQUFvQixDQUFDOzs7SUFHMUM7Ozs7T0FJRztJQUNILHNCQUFJO0lBS0osOEJBQVk7SUFLWiwrQkFBYTtJQUtiOzs7O09BSUc7SUFDSCw0QkFBVTtJQUtWOzs7T0FHRztJQUNILDZCQUFXO0lBS1g7OztPQUdHO0lBQ0gsdUJBQUs7SUFLTDs7O09BR0c7SUFDSCx5QkFBTztJQUtQOzs7O09BSUc7SUFDSCwwQkFBUSxhQUFDLElBQVk7SUFLckI7OztPQUdHO0lBQ0gsaUNBQWU7SUFLZjs7O09BR0c7SUFDSCw0QkFBVTtJQUtWOzs7O09BSUc7SUFDSCw2QkFBVyxhQUFDLElBQVk7SUFLeEI7Ozs7T0FJRztJQUNILDJCQUFTLGFBQUMsR0FBVztJQUtyQjs7OztPQUlHO0lBQ0gsNkJBQVcsYUFBQyxHQUFXO0lBS3ZCLG9DQUFrQixhQUFDLElBQWE7SUFLaEMseUJBQU87SUFLUDs7O09BR0c7SUFDSCxtQ0FBaUI7SUFLakIsd0NBQXNCO0lBS3RCLHFDQUFtQixhQUFDLFFBQTRCO0lBS2hELHdDQUFzQjtJQUt0QixtQ0FBaUIsYUFBQyxJQUF5Qjs7Ozs7a0JBM003QztFQWdENkIsaUJBQWlCO1NBQWpDLE9BQU87O0lBc0xzQix3Q0FBaUI7OztRQUV2RCwwQkFBb0IsR0FBQyxvQkFBb0IsQ0FBQztRQUMxQyxVQUFJLEdBQUMsSUFBSSxDQUFDO1FBQ1YsZ0JBQVUsR0FBQyxVQUFVLENBQUM7UUFDdEIsY0FBUSxHQUFDLFFBQVEsQ0FBQTtRQUNqQiwwQkFBb0Is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RSxhQUFhO1FBQzFCLGNBQWMsRUFBRSxnQkFBZ0I7UUFDaEMsY0FBYyxFQUFFLGdCQUFnQjtRQUNoQyxnQkFBZ0IsRUFBRSxrQkFBa0I7S0FDdkMsQ0FBQzsrQkEzbkJKOztTQXlrQmEsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIENvcHlyaWdodCAyMDIwLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5cclxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcclxuICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG5cclxuICAgICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAgICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG4vKipcclxuICogQG5hbWUgSG1zUHVzaFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhlIENvcmRvdmEgUHVzaCBQbHVnaW4gZW5hYmxlcyBjb21tdW5pY2F0aW9uIGJldHdlZW4gSHVhd2VpIFB1c2ggS2l0IFNESyBhbmQgQ29yZG92YSBwbGF0Zm9ybS4gVGhpcyBwbHVnaW4gZXhwb3NlcyBhbGwgZnVuY3Rpb25hbGl0eSBwcm92aWRlZCBieSBIdWF3ZWkgUHVzaCBLaXQgU0RLLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBIbXNQdXNoIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9obXMtcHVzaCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaG1zUHVzaDogSG1zUHVzaCkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLmhNU1B1c2gudHVybk9uUHVzaCgpXHJcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdIbXNQdXNoJyxcclxuICBwbHVnaW46ICdjb20tcGx1Z2luLWhtcy1wdXNoJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnSG1zUHVzaCcsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIbXNQdXNoIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG5cclxuICBIbXNQdXNoUmVzdWx0Q29kZT1IbXNQdXNoUmVzdWx0Q29kZVxyXG4gIENvcmRvdmFSZW1vdGVNZXNzYWdlPUNvcmRvdmFSZW1vdGVNZXNzYWdlO1xyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kICBpbml0aWFsaXplZCBIbXNQdXNoLiBcclxuICAgIFxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD4gXHJcbiAgICovXHJcbiAgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGRpc2FibGVMb2dnZXIoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIFxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBkaXNhYmxlIHRoZSBkaXNwbGF5IG9mIG5vdGlmaWNhdGlvbiBtZXNzYWdlcy4gSWYgeW91IHdhbnQgdG8gY29udHJvbCB0aGUgZGlzcGxheSBvZiBub3RpZmljYXRpb24gbWVzc2FnZXMgaW4gYW4gYXBwLCB5b3UgY2FuIGNhbGwgdGhpcyBtZXRob2QuIFRoaXMgbWV0aG9kIGFwcGxpZXMgdG8gbm90aWZpY2F0aW9uIG1lc3NhZ2VzIGJ1dCBub3QgZGF0YSBtZXNzYWdlcy4gSXQgaXMgdGhlIGFwcCB0aGF0IGRldGVybWluZXMgd2hldGhlciB0byBlbmFibGUgb3IgZGlzYWJsZSBkYXRhIG1lc3NhZ2luZy5cclxuICAgIFxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPiBcclxuICAgKi9cclxuICB0dXJuT25QdXNoKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGVuYWJsZSB0aGUgZGlzcGxheSBvZiBub3RpZmljYXRpb24gbWVzc2FnZXMuIElmIHlvdSB3YW50IHRvIGNvbnRyb2wgdGhlIGRpc3BsYXkgb2Ygbm90aWZpY2F0aW9uIG1lc3NhZ2VzIGluIGFuIGFwcCwgeW91IGNhbiBjYWxsIHRoaXMgbWV0aG9kLiBUaGlzIG1ldGhvZCBhcHBsaWVzIHRvIG5vdGlmaWNhdGlvbiBtZXNzYWdlcyBidXQgbm90IGRhdGEgbWVzc2FnZXMuIEl0IGlzIHRoZSBhcHAgdGhhdCBkZXRlcm1pbmVzIHdoZXRoZXIgdG8gZW5hYmxlIG9yIGRpc2FibGUgZGF0YSBtZXNzYWdpbmcuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICovXHJcbiAgdHVybk9mZlB1c2goKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gb2J0YWluIGFuIEFBSUQgaW4gc3luY2hyb25vdXMgbW9kZS4gQmVmb3JlIGFwcGx5aW5nIGZvciBhIHRva2VuLCBhbiBhcHAgY2FsbHMgdGhpcyBtZXRob2QgdG8gb2J0YWluIGl0cyB1bmlxdWUgQUFJRC4gVGhlIEhVQVdFSSBQdXNoIHNlcnZlciBnZW5lcmF0ZXMgYSB0b2tlbiBmb3IgdGhlIGFwcCBiYXNlZCBvbiB0aGUgQUFJRC4gSWYgdGhlIEFBSUQgb2YgdGhlIGFwcCBjaGFuZ2VzLCBhIG5ldyB0b2tlbiB3aWxsIGJlIGdlbmVyYXRlZCBuZXh0IHRpbWUgd2hlbiB0aGUgYXBwIGFwcGxpZXMgZm9yIGEgdG9rZW4uIElmIGFuIGFwcCBuZWVkcyB0byByZXBvcnQgc3RhdGlzdGljcyBldmVudHMsIGl0IG11c3QgY2FycnkgdGhlIEFBSUQgYXMgaXRzIHVuaXF1ZSBJRC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgKi9cclxuICBnZXRJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIG9idGFpbiBhbiBBQUlEIGluIGFzeW5jaHJvbm91cyBtb2RlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAqL1xyXG4gIGdldEFBSUQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBvYnRhaW4gYSB0b2tlbiByZXF1aXJlZCBmb3IgYWNjZXNzaW5nIEhVQVdFSSBQdXNoIEtpdC4gSWYgdGhlcmUgaXMgbm8gbG9jYWwgQUFJRCwgdGhpcyBtZXRob2Qgd2lsbCBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlIGFuIEFBSUQgd2hlbiBpdCBpcyBjYWxsZWQgYmVjYXVzZSB0aGUgSFVBV0VJIFB1c2ggS2l0IHNlcnZlciBuZWVkcyB0byBnZW5lcmF0ZSBhIHRva2VuIGJhc2VkIG9uIHRoZSBBQUlELlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAqIEBwYXJhbXMgc2NvcGUgPyA6IFN0cmluZ1xyXG4gICAqL1xyXG4gIGdldFRva2VuKGFyZ3M/OnN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gb2J0YWluIHRoZSBnZW5lcmF0aW9uIHRpbWVzdGFtcCBvZiBhbiBBQUlELlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAqL1xyXG4gIGdldENyZWF0aW9uVGltZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGRlbGV0ZSBhIGxvY2FsIEFBSUQgYW5kIGl0cyBnZW5lcmF0aW9uIHRpbWVzdGFtcC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgKi9cclxuICBkZWxldGVBQUlEKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGRlbGV0ZSBhIHRva2VuLiBBZnRlciBhIHRva2VuIGlzIGRlbGV0ZWQsIHRoZSBjb3JyZXNwb25kaW5nIEFBSUQgd2lsbCBub3QgYmUgZGVsZXRlZC4gVGhpcyBtZXRob2QgaXMgYSBzeW5jaHJvbm91cyBtZXRob2QuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICogQHBhcmFtcyBzY29wZSA/IDogU3RyaW5nXHJcbiAgICovXHJcbiAgZGVsZXRlVG9rZW4oYXJncz86c3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gc3Vic2NyaWJlIHRvIHRvcGljcyBpbiBhc3luY2hyb25vdXMgbW9kZS4gVGhlIEhVQVdFSSBQdXNoIEtpdCB0b3BpYyBtZXNzYWdpbmcgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBzZW5kIG1lc3NhZ2VzIHRvIG11bHRpcGxlIGRldmljZXMgd2hvc2UgdXNlcnMgaGF2ZSBzdWJzY3JpYmVkIHRvIGEgc3BlY2lmaWMgdG9waWMuIFlvdSBjYW4gd3JpdGUgbWVzc2FnZXMgYWJvdXQgdGhlIHRvcGljIGFzIHJlcXVpcmVkLCBhbmQgSFVBV0VJIFB1c2ggS2l0IGRldGVybWluZXMgdGhlIHJlbGVhc2UgcGF0aCBhbmQgc2VuZHMgbWVzc2FnZXMgdG8gdGhlIGNvcnJlY3QgZGV2aWNlcyBpbiBhIHJlbGlhYmxlIG1hbm5lci5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXJnIFRvcGljIHRvIGJlIHN1YnNjcmliZWQgdG8uXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICovXHJcbiAgc3Vic2NyaWJlKGFyZzogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gdW5zdWJzY3JpYmUgZnJvbSB0b3BpY3MgdGhhdCBhcmUgc3Vic2NyaWJlZCB0byB0aHJvdWdoIHRoZSBzdWJzY3JpYmUgbWV0aG9kLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhcmcgVG9waWMgdG8gYmUgdW5zdWJzY3JpYmVkIHRvLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAqL1xyXG4gIHVuc3Vic2NyaWJlKGFyZzogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNldEF1dG9Jbml0RW5hYmxlZChhcmdzOiBib29sZWFuKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldE9kaWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBjaGVjayB3aGV0aGVyIGF1dG9tYXRpYyBpbml0aWFsaXphdGlvbiBpcyBlbmFibGVkLiAgXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICovXHJcbiAgaXNBdXRvSW5pdEVuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldEluaXRpYWxOb3RpZmljYXRpb24oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2V0QmFja2dyb3VuZEFjdGlvbihjYWxsYmFjazogKGRhdGE6YW55KSA9PiB2b2lkKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgcmVtb3ZlQmFja2dyb3VuZEFjdGlvbigpIDogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2VuZFJlbW90ZU1lc3NhZ2UoYXJnczogUmVtb3RlTWVzc2FnZU9iamVjdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbnR5cGUgSGFuZGxlciA9IChkYXRhOiBhbnkpID0+IHZvaWQ7XHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgICAgIGhtc0V2ZW50SGFuZGxlcnM6IHtcclxuICAgICAgICAgICAgW2tleTogc3RyaW5nXTogSGFuZGxlcltdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBobXNFdmVudEhhbmRsZXI6IChldmVudE5hbWU6IHN0cmluZywgZGF0YTogYW55KSA9PiB2b2lkLFxyXG4gICAgICAgIHJlZ2lzdGVySE1TRXZlbnQ6IChldmVudE5hbWU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikgPT4gdm9pZFxyXG4gICAgICAgIHVucmVnaXN0ZXJITVNFdmVudDogKGV2ZW50TmFtZTogc3RyaW5nLCBoYW5kbGVyPzogSGFuZGxlcikgPT4gdm9pZFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdIbXNMb2NhbE5vdGlmaWNhdGlvbicsXHJcbiAgcGx1Z2luOiAnY29tLXBsdWdpbi1obXMtcHVzaCcsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gIHBsdWdpblJlZjogJ0htc0xvY2FsTm90aWZpY2F0aW9uJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhtc0xvY2FsTm90aWZpY2F0aW9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG5cclxuICAgIENvcmRvdmFSZW1vdGVNZXNzYWdlPUNvcmRvdmFSZW1vdGVNZXNzYWdlO1xyXG4gICAgQXR0cj1BdHRyO1xyXG4gICAgSW1wb3J0YW5jZT1JbXBvcnRhbmNlO1xyXG4gICAgUHJpb3JpdHk9UHJpb3JpdHlcclxuICAgIFJlbW90ZU1lc3NhZ2VCdWlsZGVyPVJlbW90ZU1lc3NhZ2VCdWlsZGVyXHJcbiAgICBSZXBlYXRUeXBlPVJlcGVhdFR5cGVcclxuICAgIFZpc2liaWxpdHk9VmlzaWJpbGl0eVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGxvY2FsTm90aWZpY2F0aW9uKGFyZ3M6IExvY2FsTm90aWZpY2F0aW9uT2JqZWN0KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgbG9jYWxOb3RpZmljYXRpb25TY2hlZHVsZShhcmdzOiBMb2NhbE5vdGlmaWNhdGlvbk9iamVjdCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGNhbmNlbEFsbE5vdGlmaWNhdGlvbnMoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGNhbmNlbE5vdGlmaWNhdGlvbnMoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGNhbmNlbFNjaGVkdWxlZE5vdGlmaWNhdGlvbnMoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGNhbmNlbE5vdGlmaWNhdGlvbnNXaXRoSWQoYXJnczogYW55KTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGNhbmNlbE5vdGlmaWNhdGlvbnNXaXRoSWRUYWcoYXJnczogYW55KTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGNhbmNlbE5vdGlmaWNhdGlvbnNXaXRoVGFnKGFyZ3M6IGFueSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBnZXROb3RpZmljYXRpb25zKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldFNjaGVkdWxlZE5vdGlmaWNhdGlvbnMoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0Q2hhbm5lbHMoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY2hhbm5lbEV4aXN0cyhhcmdzOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY2hhbm5lbEJsb2NrZWQoYXJnczogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGRlbGV0ZUNoYW5uZWwoYXJnczogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYmFja2dyb3VuZExvY2FsTm90aWZpY2F0aW9uKGFyZ3M6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgXHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdIbXNQdXNoRXZlbnQnLFxyXG4gIHBsdWdpbjogJ2NvbS1wbHVnaW4taG1zLXB1c2gnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICBwbHVnaW5SZWY6ICdIbXNQdXNoRXZlbnQnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSG1zUHVzaEV2ZW50IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG5cclxub25SZW1vdGVNZXNzYWdlUmVjZWl2ZWQgKHJlc3VsdDphbnkpIHtcclxuICB3aW5kb3cucmVnaXN0ZXJITVNFdmVudChcIlJFTU9URV9EQVRBX01FU1NBR0VfUkVDRUlWRURcIixyZXN1bHQpXHJcbn1cclxub25Ub2tlblJlY2VpdmVkIChyZXN1bHQ6YW55KSB7XHJcbiAgd2luZG93LnJlZ2lzdGVySE1TRXZlbnQoXCJUT0tFTl9SRUNFSVZFRF9FVkVOVFwiLHJlc3VsdClcclxufVxyXG5vblRva2VuRXJyb3IgKHJlc3VsdDphbnkpIHtcclxuICB3aW5kb3cucmVnaXN0ZXJITVNFdmVudChcIk9OX1RPS0VOX0VSUk9SX0VWRU5UXCIscmVzdWx0KVxyXG59XHJcbiBvblB1c2hNZXNzYWdlU2VudCAocmVzdWx0OmFueSkge1xyXG4gIHdpbmRvdy5yZWdpc3RlckhNU0V2ZW50KFwiT05fUFVTSF9NRVNTQUdFX1NFTlRcIixyZXN1bHQpXHJcbiB9XHJcbm9uUHVzaE1lc3NhZ2VTZW50RXJyb3IgKHJlc3VsdDphbnkpIHtcclxuICB3aW5kb3cucmVnaXN0ZXJITVNFdmVudChcIk9OX1BVU0hfTUVTU0FHRV9TRU5UX0VSUk9SXCIscmVzdWx0KVxyXG59XHJcbm9uUHVzaE1lc3NhZ2VTZW50RGVsaXZlcmVkIChyZXN1bHQ6YW55KSB7XHJcbiAgd2luZG93LnJlZ2lzdGVySE1TRXZlbnQoXCJPTl9QVVNIX01FU1NBR0VfU0VOVF9ERUxJVkVSRURcIixyZXN1bHQpXHJcbn1cclxub25Mb2NhbE5vdGlmaWNhdGlvbkFjdGlvbiAocmVzdWx0OmFueSkge1xyXG4gIHdpbmRvdy5yZWdpc3RlckhNU0V2ZW50KFwiTE9DQUxfTk9USUZJQ0FUSU9OX0FDVElPTl9FVkVOVFwiLHJlc3VsdClcclxufVxyXG5vbk5vdGlmaWNhdGlvbk9wZW5lZEFwcCAocmVzdWx0OmFueSkge1xyXG4gIHdpbmRvdy5yZWdpc3RlckhNU0V2ZW50KFwiTk9USUZJQ0FUSU9OX09QRU5FRF9FVkVOVFwiLHJlc3VsdClcclxufVxyXG5cclxuUkVNT1RFX0RBVEFfTUVTU0FHRV9SRUNFSVZFRCA9IFwiUkVNT1RFX0RBVEFfTUVTU0FHRV9SRUNFSVZFRFwiXHJcblRPS0VOX1JFQ0VJVkVEX0VWRU5UID0gXCJUT0tFTl9SRUNFSVZFRF9FVkVOVFwiXHJcbk9OX1RPS0VOX0VSUk9SX0VWRU5UID0gXCJPTl9UT0tFTl9FUlJPUl9FVkVOVFwiXHJcbk5PVElGSUNBVElPTl9PUEVORURfRVZFTlQgPSBcIk5PVElGSUNBVElPTl9PUEVORURfRVZFTlRcIlxyXG5MT0NBTF9OT1RJRklDQVRJT05fQUNUSU9OX0VWRU5UID0gXCJMT0NBTF9OT1RJRklDQVRJT05fQUNUSU9OX0VWRU5UXCJcclxuT05fUFVTSF9NRVNTQUdFX1NFTlQgPSBcIk9OX1BVU0hfTUVTU0FHRV9TRU5UXCJcclxuT05fUFVTSF9NRVNTQUdFX1NFTlRfRVJST1IgPSBcIk9OX1BVU0hfTUVTU0FHRV9TRU5UX0VSUk9SXCJcclxuT05fUFVTSF9NRVNTQUdFX1NFTlRfREVMSVZFUkVEID0gXCJPTl9QVVNIX01FU1NBR0VfU0VOVF9ERUxJVkVSRURcIlxyXG5cclxufVxyXG5cclxuZXhwb3J0IGVudW0gSG1zUHVzaFJlc3VsdENvZGUge1xyXG4gIC8vIFN1Y2Nlc3NcclxuICBTVUNDRVNTPSBcIjBcIixcclxuXHJcbiAgLy8gRXJyb3JcclxuICBFUlJPUj0gXCItMVwiLFxyXG5cclxuICAvLyBCdW5kbGUgaXMgbnVsbCwgZXhjZXB0aW9uXHJcbiAgTlVMTF9CVU5ETEU9IFwiMzMzXCIsXHJcblxyXG4gIC8vIFlvdSBkbyBub3QgaGF2ZSBhIHRva2VuLiBBcHBseSBmb3IgYSB0b2tlbi5cclxuICBFUlJPUl9OT19UT0tFTj0gXCI5MDcxMjIwMzBcIixcclxuXHJcbiAgLy8gVGhlIGN1cnJlbnQgbmV0d29yayBpcyB1bmF2YWlsYWJsZS4gQ2hlY2sgdGhlIG5ldHdvcmsgY29ubmVjdGlvbi5cclxuICBFUlJPUl9OT19ORVRXT1JLPSBcIjkwNzEyMjAzMVwiLFxyXG5cclxuICAvLyBUaGUgdG9rZW4gaGFzIGV4cGlyZWQuIERlbGV0ZSB0aGUgdG9rZW4gYW5kIGFwcGx5IGZvciBhIG5ldyBvbmUuXHJcbiAgRVJST1JfVE9LRU5fSU5WQUxJRD0gXCI5MDcxMjIwMzJcIixcclxuXHJcbiAgLy8gSWYgdGhlIFB1c2ggc2VydmljZSBpcyB1bmF2YWlsYWJsZSwgY29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXHJcbiAgRVJST1JfU0VSVklDRV9OT1RfQVZBSUxBQkxFPSBcIjkwNzEyMjA0NlwiLFxyXG5cclxuICAvLyBJZiB0aGUgUHVzaCBzZXJ2ZXIgcmV0dXJucyBhbiBlcnJvciwgY29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXHJcbiAgRVJST1JfUFVTSF9TRVJWRVI9IFwiOTA3MTIyMDQ3XCIsXHJcblxyXG4gIC8vIFVua25vd24gZXJyb3IuIENvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gIEVSUk9SX1VOS05PV049IFwiOTA3MTIyMDQ1XCIsXHJcblxyXG4gIC8vIFRoZSBudW1iZXIgb2Ygc3Vic2NyaWJlZCB0b3BpY3MgZXhjZWVkcyAyMDAwLlxyXG4gIEVSUk9SX1RPUElDX0VYQ0VFRD0gXCI5MDcxMjIwMzRcIixcclxuXHJcbiAgLy8gRmFpbGVkIHRvIHNlbmQgdGhlIHN1YnNjcmlwdGlvbiB0b3BpYy4gQ29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXHJcbiAgRVJST1JfVE9QSUNfU0VORD0gXCI5MDcxMjIwMzVcIixcclxuXHJcbiAgLy8gUHVzaCByaWdodHMgYXJlIG5vdCBlbmFibGVkLiBFbmFibGUgdGhlIHNlcnZpY2UgYW5kIHNldCBwdXNoIHNlcnZpY2UgcGFyYW1ldGVycyBhdCBBcHBHYWxsZXJ5IENvbm5lY3QuXHJcbiAgRVJST1JfTk9fUklHSFQ9IFwiOTA3MTIyMDM2XCIsXHJcblxyXG4gIC8vIEZhaWxlZCB0byBhcHBseSBmb3IgdGhlIHRva2VuLiBDb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICBFUlJPUl9HRVRfVE9LRU5fRVJSPSBcIjkwNzEyMjAzN1wiLFxyXG5cclxuICAvLyBObyBzdG9yYWdlIGxvY2F0aW9uIGlzIHNlbGVjdGVkIGZvciB0aGUgYXBwbGljYXRpb24gb3IgdGhlIHN0b3JhZ2UgbG9jYXRpb24gaXMgaW52YWxpZC5cclxuICBFUlJPUl9TVE9SQUdFX0xPQ0FUSU9OX0VNUFRZPSBcIjkwNzEyMjAzOFwiLFxyXG5cclxuICAvLyBGYWlsZWQgdG8gYXBwbHkgZm9yIGEgdG9rZW4uIENyb3NzLXJlZ2lvbiB0b2tlbiBhcHBsaWNhdGlvbiBpcyBub3QgYWxsb3dlZC5cclxuICBFUlJPUl9OT1RfQUxMT1dfQ1JPU1NfQVBQTFk9IFwiOTA3MTIyMDUzXCIsXHJcblxyXG4gIC8vIFRoZSBtZXNzYWdlIGJvZHkgc2l6ZSBleGNlZWRzIHRoZSBtYXhpbXVtLlxyXG4gIEVSUk9SX1NJWkU9IFwiOTA3MTIyMDQxXCIsXHJcblxyXG4gIC8vIFRoZSBtZXNzYWdlIGNvbnRhaW5zIGludmFsaWQgcGFyYW1ldGVycy5cclxuICBFUlJPUl9JTlZBTElEX1BBUkFNRVRFUlM9IFwiOTA3MTIyMDQyXCIsXHJcblxyXG4gIC8vIFRoZSBudW1iZXIgb2Ygc2VudCBtZXNzYWdlcyByZWFjaGVzIHRoZSB1cHBlciBsaW1pdC4gVGhlIG1lc3NhZ2VzIHdpbGwgYmUgZGlzY2FyZGVkLlxyXG4gIEVSUk9SX1RPT19NQU5ZX01FU1NBR0VTPSBcIjkwNzEyMjA0M1wiLFxyXG5cclxuICAvLyBUaGUgbWVzc2FnZSBsaWZldGltZSBleHBpcmVzIGJlZm9yZSB0aGUgbWVzc2FnZSBpcyBzdWNjZXNzZnVsbHkgc2VudCB0byB0aGUgQVBQIHNlcnZlci5cclxuICBFUlJPUl9UVExfRVhDRUVERUQ9IFwiOTA3MTIyMDQ0XCIsXHJcblxyXG4gIC8vICBIdWF3ZWkgTW9iaWxlIFNlcnZpY2VzIChBUEspIGNhbid0IGNvbm5lY3QgIEh1YXdlaSBQdXNoICBLaXQuXHJcbiAgRVJST1JfSE1TX0NMSUVOVF9BUEk9IFwiOTA3MTIyMDQ4XCIsXHJcblxyXG4gIC8vIFRoZSBjdXJyZW50IEVNVUkgdmVyc2lvbiBpcyB0b28gZWFybHkgdG8gdXNlIHRoZSBjYXBhYmlsaXR5LlxyXG4gIEVSUk9SX09QRVJBVElPTl9OT1RfU1VQUE9SVEVEPSBcIjkwNzEyMjA0OVwiLFxyXG5cclxuICAvLyBUaGUgb3BlcmF0aW9uIGNhbm5vdCBiZSBwZXJmb3JtZWQgaW4gdGhlIG1haW4gdGhyZWFkLlxyXG4gIEVSUk9SX01BSU5fVEhSRUFEPSBcIjkwNzEyMjA1MFwiLFxyXG5cclxuICAvLyBUaGUgZGV2aWNlIGNlcnRpZmljYXRlIGF1dGhlbnRpY2F0aW9uIGZhaWxzLlxyXG4gIEVSUk9SX0hNU19ERVZJQ0VfQVVUSF9GQUlMRURfU0VMRl9NQVBQSU5HPSBcIjkwNzEyMjA1MVwiLFxyXG5cclxuICAvLyBGYWlsZWQgdG8gYmluZCB0aGUgc2VydmljZS5cclxuICBFUlJPUl9CSU5EX1NFUlZJQ0VfU0VMRl9NQVBQSU5HPSBcIjkwNzEyMjA1MlwiLFxyXG5cclxuICAvLyBUaGUgU0RLIGlzIGJlaW5nIGF1dG9tYXRpY2FsbHkgaW5pdGlhbGl6ZWQuIFRyeSBhZ2FpbiBsYXRlci5cclxuICBFUlJPUl9BVVRPX0lOSVRJQUxJWklORz0gXCI5MDcxMjIwNTRcIixcclxuXHJcbiAgLypUaGUgaW5wdXQgcGFyYW1ldGVyIGlzIGluY29ycmVjdC4gQ2hlY2sgd2hldGhlciB0aGUgcmVsYXRlZCBjb25maWd1cmF0aW9uIGluZm9ybWF0aW9uIGlzIGNvcnJlY3QuXHJcbiAgICogRXhhbXBsZTogYXBwX2lkIGluIHRoZSBhZ2Nvbm5lY3QgLSBzZXJ2aWNlcy5qc29uIGZpbGU7XHJcbiAgICogQ2hlY2sgd2hldGhlciB0aGUgYnVpbGQuZ3JhZGxlIGZpbGUgaXMgY29uZmlndXJlZCB3aXRoIHRoZSBjZXJ0aWZpY2F0ZSBzaWduYXR1cmUuXHJcbiAgICovXHJcbiAgRVJST1JfQVJHVU1FTlRTX0lOVkFMSUQ9IFwiOTA3MTM1MDAwXCIsXHJcblxyXG4gIC8vIEludGVybmFsIFB1c2ggZXJyb3IuIENvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0IGVuZ2luZWVycy5cclxuICBFUlJPUl9JTlRFUk5BTF9FUlJPUj0gXCI5MDcxMzUwMDFcIixcclxuXHJcbiAgLy8gVGhlIHNlcnZpY2UgZG9lcyBub3QgZXhpc3QuIFRoZSBpbnZva2VkIGludGVyZmFjZSBkb2VzIG5vdCBleGlzdC5cclxuICBFUlJPUl9OQU1JTkdfSU5WQUxJRD0gXCI5MDcxMzUwMDJcIixcclxuXHJcbiAgLy8gVGhlIEFwaUNsaWVudCBvYmplY3QgaXMgaW52YWxpZC5cclxuICBFUlJPUl9DTElFTlRfQVBJX0lOVkFMSUQ9IFwiOTA3MTM1MDAzXCIsXHJcblxyXG4gIC8vIEludm9raW5nIEFJREwgdGltZXMgb3V0LiBDb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICBFUlJPUl9FWEVDVVRFX1RJTUVPVVQ9IFwiOTA3MTM1MDA0XCIsXHJcblxyXG4gIC8vIFRoZSBjdXJyZW50IGFyZWEgZG9lcyBub3Qgc3VwcG9ydCB0aGlzIHNlcnZpY2UuXHJcbiAgRVJST1JfTk9UX0lOX1NFUlZJQ0U9IFwiOTA3MTM1MDA1XCIsXHJcblxyXG4gIC8vIElmIHRoZSBBSURMIGNvbm5lY3Rpb24gc2Vzc2lvbiBpcyBpbnZhbGlkLCBjb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICBFUlJPUl9TRVNTSU9OX0lOVkFMSUQ9IFwiOTA3MTM1MDA2XCIsXHJcblxyXG4gIC8vIEFuIGVycm9yIG9jY3VycmVkIHdoZW4gaW52b2tpbmcgYW4gdW5zcGVjaWZpZWQgQVBJLlxyXG4gIEVSUk9SX0FQSV9OT1RfU1BFQ0lGSUVEPSBcIjEwMDJcIixcclxuXHJcbiAgLyogRmFpbGVkIHRvIGludm9rZSB0aGUgZ2F0ZXdheSB0byBxdWVyeSB0aGUgYXBwbGljYXRpb24gc2NvcGUuXHJcbiAgICogQ2hlY2sgd2hldGhlciB0aGUgY3VycmVudCBhcHAgaGFzIGJlZW4gY3JlYXRlZCBhbmQgZW5hYmxlZCBpbiBBcHBHYWxsZXJ5IENvbm5lY3QuXHJcbiAgICogSWYgeWVzLCBjb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICAgKi9cclxuICBFUlJPUl9HRVRfU0NPUEVfRVJST1I9IFwiOTA3MTM1NzAwXCIsXHJcbiAgLyogU2NvcGUgaXMgbm90IGNvbmZpZ3VyZWQgb24gdGhlIEFwcEdhbGxlcnkgQ29ubmVjdC5cclxuICAgKiBDaGVjayB3aGV0aGVyIHRoZSBjdXJyZW50IGFwcCBoYXMgYmVlbiBjcmVhdGVkIGFuZCBlbmFibGVkIGluIEFwcEdhbGxlcnkgQ29ubmVjdC5cclxuICAgKiBJZiB5ZXMsIGNvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gICAqL1xyXG4gIEVSUk9SX1NDT1BFX0xJU1RfRU1QVFk9IFwiOTA3MTM1NzAxXCIsXHJcblxyXG4gIC8qIFRoZSBjZXJ0aWZpY2F0ZSBmaW5nZXJwcmludCBpcyBub3QgY29uZmlndXJlZCBvbiB0aGUgQXBwR2FsbGVyeSBDb25uZWN0LlxyXG4gICAqIDEuIENoZWNrIHdoZXRoZXIgeW91ciBwaG9uZSBjYW4gYWNjZXNzIHRoZSBJbnRlcm5ldC5cclxuICAgKiAyLiBDaGVjayB3aGV0aGVyIHRoZSBjb3JyZWN0IGNlcnRpZmljYXRlIGZpbmdlcnByaW50IGlzIGNvbmZpZ3VyZWQgaW4gQXBwR2FsbGVyeSBDb25uZWN0LiBGb3IgZGV0YWlscywgc2VlIEFwcEdhbGxlcnkgQ29ubmVjdCBjb25maWd1cmF0aW9uIGluIERldmVsb3BtZW50IFByZXBhcmF0aW9ucy5cclxuICAgKiAzLiBJZiB0aGUgY2hlY2sgcmVzdWx0IGlzIGNvcnJlY3QsIGNvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gICAqL1xyXG4gIEVSUk9SX0NFUlRfRklOR0VSUFJJTlRfRU1QVFk9IFwiOTA3MTM1NzAyXCIsXHJcblxyXG4gIC8vUGVybWlzc2lvbiBpcyBub3QgY29uZmlndXJlZCBvbiB0aGUgQXBwR2FsbGVyeSBDb25uZWN0LlxyXG4gIEVSUk9SX1BFUk1JU1NJT05fTElTVF9FTVBUWT0gXCI5MDcxMzU3MDNcIixcclxuXHJcbiAgLy8gVGhlIGF1dGhlbnRpY2F0aW9uIGluZm9ybWF0aW9uIG9mIHRoZSBhcHBsaWNhdGlvbiBkb2VzIG5vdCBleGlzdC5cclxuICBFUlJPUl9BVVRIX0lORk9fTk9UX0VYSVNUPSBcIjYwMDJcIixcclxuXHJcbiAgLy8gQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIGNlcnRpZmljYXRlIGZpbmdlcnByaW50IHZlcmlmaWNhdGlvbi4gQ2hlY2sgd2hldGhlciB0aGUgY29ycmVjdCBjZXJ0aWZpY2F0ZSBmaW5nZXJwcmludCBpcyBjb25maWd1cmVkIGluIEFwcEdhbGxlcnkgQ29ubmVjdC4gRm9yIGRldGFpbHMsIHNlZSBBcHBHYWxsZXJ5IENvbm5lY3QgY29uZmlndXJhdGlvbiBpbiBEZXZlbG9wbWVudCBQcmVwYXJhdGlvbnMuXHJcbiAgRVJST1JfQ0VSVF9GSU5HRVJQUklOVF9FUlJPUj0gXCI2MDAzXCIsXHJcblxyXG4gIC8vIEludGVyZmFjZSBhdXRoZW50aWNhdGlvbjogVGhlIHBlcm1pc3Npb24gZG9lcyBub3QgZXhpc3QgYW5kIGlzIG5vdCBhcHBsaWVkIGZvciBpbiBBcHBHYWxsZXJ5IENvbm5lY3QuXHJcbiAgRVJST1JfUEVSTUlTU0lPTl9OT1RfRVhJU1Q9IFwiNjAwNFwiLFxyXG5cclxuICAvLyBJbnRlcmZhY2UgYXV0aGVudGljYXRpb246IHVuYXV0aG9yaXplZC5cclxuICBFUlJPUl9QRVJNSVNTSU9OX05PVF9BVVRIT1JJWkVEPSBcIjYwMDVcIixcclxuXHJcbiAgLy8gSW50ZXJmYWNlIGF1dGhlbnRpY2F0aW9uOiBUaGUgYXV0aG9yaXphdGlvbiBleHBpcmVzLlxyXG4gIEVSUk9SX1BFUk1JU1NJT05fRVhQSVJFRD0gXCI2MDA2XCIsXHJcbn07XHJcblxyXG5leHBvcnQgZW51bSBBdHRyIHtcclxuICBpZCA9IFwiaWRcIixcclxuICBtZXNzYWdlID0gXCJtZXNzYWdlXCIsXHJcbiAgZmlyZURhdGUgPSBcImZpcmVEYXRlXCIsXHJcbiAgdGl0bGUgPSBcInRpdGxlXCIsXHJcbiAgdGlja2VyID0gXCJ0aWNrZXJcIixcclxuICBzaG93V2hlbiA9IFwic2hvd1doZW5cIixcclxuICBhdXRvQ2FuY2VsID0gXCJhdXRvQ2FuY2VsXCIsXHJcbiAgbGFyZ2VJY29uID0gXCJsYXJnZUljb25cIixcclxuICBsYXJnZUljb25VcmwgPSBcImxhcmdlSWNvblVybFwiLFxyXG4gIHNtYWxsSWNvbiA9IFwic21hbGxJY29uXCIsXHJcbiAgYmlnVGV4dCA9IFwiYmlnVGV4dFwiLFxyXG4gIHN1YlRleHQgPSBcInN1YlRleHRcIixcclxuICBiaWdQaWN0dXJlVXJsID0gXCJiaWdQaWN0dXJlVXJsXCIsXHJcbiAgc2hvcnRjdXRJZCA9IFwic2hvcnRjdXRJZFwiLFxyXG4gIG51bWJlciA9IFwibnVtYmVyXCIsXHJcbiAgY2hhbm5lbElkID0gXCJjaGFubmVsSWRcIixcclxuICBjaGFubmVsTmFtZSA9IFwiY2hhbm5lbE5hbWVcIixcclxuICBjaGFubmVsRGVzY3JpcHRpb24gPSBcImNoYW5uZWxEZXNjcmlwdGlvblwiLFxyXG4gIGNvbG9yID0gXCJjb2xvclwiLFxyXG4gIGdyb3VwID0gXCJncm91cFwiLFxyXG4gIGdyb3VwU3VtbWFyeSA9IFwiZ3JvdXBTdW1tYXJ5XCIsXHJcbiAgcGxheVNvdW5kID0gXCJwbGF5U291bmRcIixcclxuICBzb3VuZE5hbWUgPSBcInNvdW5kTmFtZVwiLFxyXG4gIHZpYnJhdGUgPSBcInZpYnJhdGVcIixcclxuICB2aWJyYXRlRHVyYXRpb24gPSBcInZpYnJhdGVEdXJhdGlvblwiLFxyXG4gIGFjdGlvbnMgPSBcImFjdGlvbnNcIixcclxuICBpbnZva2VBcHAgPSBcImludm9rZUFwcFwiLFxyXG4gIHRhZyA9IFwidGFnXCIsXHJcbiAgcmVwZWF0VHlwZSA9IFwicmVwZWF0VHlwZVwiLFxyXG4gIHJlcGVhdFRpbWUgPSBcInJlcGVhdFRpbWVcIixcclxuICBvbmdvaW5nID0gXCJvbmdvaW5nXCIsXHJcbiAgYWxsb3dXaGlsZUlkbGUgPSBcImFsbG93V2hpbGVJZGxlXCIsXHJcbiAgZG9udE5vdGlmeUluRm9yZWdyb3VuZCA9IFwiZG9udE5vdGlmeUluRm9yZWdyb3VuZFwiLFxyXG4gIHByaW9yaXR5ID0gXCJwcmlvcml0eVwiLFxyXG4gIGltcG9ydGFuY2UgPSBcImltcG9ydGFuY2VcIixcclxuICB2aXNpYmlsaXR5ID0gXCJ2aXNpYmlsaXR5XCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSW1wb3J0YW5jZSB7XHJcbiAgTUFYID0gXCJtYXhcIixcclxuICBISUdIID0gXCJoaWdoXCIsXHJcbiAgREVGQVVMVCA9IFwiZGVmYXVsdFwiLFxyXG4gIExPVyA9IFwibG93XCIsXHJcbiAgTUlOID0gXCJtaW5cIixcclxuICBOT05FID0gXCJub25lXCIsXHJcbiAgVU5TUEVDSUZJRUQgPSBcInVuc3BlY2lmaWVkXCJcclxufTtcclxuXHJcblxyXG5leHBvcnQgZW51bSBQcmlvcml0eSB7XHJcbiAgTUFYID0gXCJtYXhcIixcclxuICBISUdIID0gXCJoaWdoXCIsXHJcbiAgREVGQVVMVCA9IFwiZGVmYXVsdFwiLFxyXG4gIExPVyA9IFwibG93XCIsXHJcbiAgTUlOID0gXCJtaW5cIlxyXG59O1xyXG5cclxuZXhwb3J0IGVudW0gUmVwZWF0VHlwZSB7XHJcbiAgSE9VUiA9IFwiaG91clwiLFxyXG4gIE1JTlVURSA9IFwibWludXRlXCIsXHJcbiAgREFZID0gXCJkYXlcIixcclxuICBXRUVLID0gXCJ3ZWVrXCIsXHJcbiAgQ1VTVE9NX1RJTUUgPSBcImN1c3RvbV90aW1lXCJcclxufTtcclxuXHJcbmV4cG9ydCBlbnVtIFZpc2liaWxpdHkge1xyXG4gIFBVQkxJQyA9IFwicHVibGljXCIsXHJcbiAgU0VDUkVUID0gXCJzZWNyZXRcIixcclxuICBQUklWQVRFID0gXCJwcml2YXRlXCJcclxufTtcclxuXHJcbmV4cG9ydCBlbnVtIFJlbW90ZU1lc3NhZ2VCdWlsZGVyIHtcclxuICBUTyA9IFwidG9cIixcclxuICBNRVNTQUdFX0lEID0gXCJtZXNzYWdlSWRcIixcclxuICBNRVNTQUdFX1RZUEUgPSBcIm1lc3NhZ2VUeXBlXCIsXHJcbiAgVFRMID0gXCJ0dGxcIixcclxuICBDT0xMQVBTRV9LRVkgPSBcImNvbGxhcHNlS2V5XCIsXHJcbiAgUkVDRUlQVF9NT0RFID0gXCJyZWNlaXB0TW9kZVwiLFxyXG4gIFNFTkRfTU9ERSA9IFwic2VuZE1vZGVcIixcclxuICBEQVRBID0gXCJkYXRhXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgQ29yZG92YVJlbW90ZU1lc3NhZ2Uge1xyXG5cclxuICBzdGF0aWMgSU5TVEFOQ0VfSURfU0NPUEUgPSAnSENNJztcclxuXHJcbiAgc3RhdGljIFBSSU9SSVRZX1VOS05PV04gPSAwO1xyXG4gIHN0YXRpYyBQUklPUklUWV9ISUdIID0gMTtcclxuICBzdGF0aWMgUFJJT1JJVFlfTk9STUFMID0gMjtcclxuXHJcbiAgc3RhdGljIENPTExBUFNFS0VZPSAnY29sbGFwc2VLZXknO1xyXG4gIHN0YXRpYyBEQVRBPSAnZGF0YSc7XHJcbiAgc3RhdGljIERBVEFPRk1BUD0gJ2RhdGFPZk1hcCc7XHJcbiAgc3RhdGljIE1FU1NBR0VJRD0gJ21lc3NhZ2VJZCc7XHJcbiAgc3RhdGljIE1FU1NBR0VUWVBFPSAnbWVzc2FnZVR5cGUnO1xyXG4gIHN0YXRpYyBPUklHSU5BTFVSR0VOQ1k9ICdvcmlnaW5hbFVyZ2VuY3knO1xyXG4gIHN0YXRpYyBVUkdFTkNZPSAgJ3VyZ2VuY3knO1xyXG4gIHN0YXRpYyBUVEw9ICd0dGwnO1xyXG4gIHN0YXRpYyBTRU5UVElNRT0gICdzZW50VGltZSc7XHJcbiAgc3RhdGljIFRPPSAndG8nO1xyXG4gIHN0YXRpYyBGUk9NPSAnZnJvbSc7XHJcbiAgc3RhdGljIFRPS0VOPSAgJ3Rva2VuJztcclxuXHJcbiAgc3RhdGljIE5PVElGSUNBVElPTiA9IHtcclxuICAgICAgVElUTEU6ICd0aXRsZScsXHJcbiAgICAgIFRJVExFTE9DQUxJWkFUSU9OS0VZOiAndGl0bGVMb2NhbGl6YXRpb25LZXknLFxyXG4gICAgICBUSVRMRUxPQ0FMSVpBVElPTkFSR1M6ICd0aXRsZUxvY2FsaXphdGlvbkFyZ3MnLFxyXG4gICAgICBCT0RZTE9DQUxJWkFUSU9OS0VZOiAnYm9keUxvY2FsaXphdGlvbktleScsXHJcbiAgICAgIEJPRFlMT0NBTElaQVRJT05BUkdTOiAnYm9keUxvY2FsaXphdGlvbkFyZ3MnLFxyXG4gICAgICBCT0RZOiAnYm9keScsXHJcbiAgICAgIElDT046ICdpY29uJyxcclxuICAgICAgU09VTkQ6ICdTb3VuZCcsXHJcbiAgICAgIFRBRzogJ1RhZycsXHJcbiAgICAgIENPTE9SOiAnQ29sb3InLFxyXG4gICAgICBDTElDS0FDVElPTjogJ0NsaWNrQWN0aW9uJyxcclxuICAgICAgQ0hBTk5FTElEOiAnQ2hhbm5lbElkJyxcclxuICAgICAgSU1BR0VVUkw6ICdJbWFnZVVybCcsXHJcbiAgICAgIExJTks6ICdMaW5rJyxcclxuICAgICAgTk9USUZZSUQ6ICdOb3RpZnlJZCcsXHJcbiAgICAgIFdIRU46ICdXaGVuJyxcclxuICAgICAgTElHSFRTRVRUSU5HUzogJ0xpZ2h0U2V0dGluZ3MnLFxyXG4gICAgICBCQURHRU5VTUJFUjogJ0JhZGdlTnVtYmVyJyxcclxuICAgICAgSU1QT1JUQU5DRTogJ0ltcG9ydGFuY2UnLFxyXG4gICAgICBUSUNLRVI6ICdUaWNrZXInLFxyXG4gICAgICBWSUJSQVRFQ09ORklHOiAndmlicmF0ZUNvbmZpZycsXHJcbiAgICAgIFZJU0lCSUxJVFk6ICd2aXNpYmlsaXR5JyxcclxuICAgICAgSU5URU5UVVJJOiAnaW50ZW50VXJpJyxcclxuICAgICAgSVNBVVRPQ0FOQ0VMOiAnaXNBdXRvQ2FuY2VsJyxcclxuICAgICAgSVNMT0NBTE9OTFk6ICdpc0xvY2FsT25seScsXHJcbiAgICAgIElTREVGQVVMVExJR0hUOiAnaXNEZWZhdWx0TGlnaHQnLFxyXG4gICAgICBJU0RFRkFVTFRTT1VORDogJ2lzRGVmYXVsdFNvdW5kJyxcclxuICAgICAgSVNERUZBVUxUVklCUkFURTogJ2lzRGVmYXVsdFZpYnJhdGUnLFxyXG4gIH07XHJcbiAgcmVtb3RlTXNnOmFueTtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgIHRoaXMucmVtb3RlTXNnID0gb3B0aW9ucztcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogcGFyc2UgYWxsIGVsZW1lbnQsdW5vcmRlcmVkXHJcbiAgICovXHJcbiAgcGFyc2VNc2dBbGxBdHRyaWJ1dGUoKSB7XHJcbiAgICAgIGxldCBwdXNoUmVzdWx0ID0gJyc7XHJcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMucmVtb3RlTXNnKSB7XHJcbiAgICAgICAgICBwdXNoUmVzdWx0ID0gcHVzaFJlc3VsdCArIGtleSArICcgOiAnICsgdGhpcy5yZW1vdGVNc2dba2V5XSArICdcXG4nO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwdXNoUmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBnZXRDb2xsYXBzZUtleSgpIE9idGFpbnMgdGhlIGNsYXNzaWZpY2F0aW9uIGlkZW50aWZpZXIgKGNvbGxhcHNlIGtleSkgb2YgYSBtZXNzYWdlLlxyXG4gICAqL1xyXG4gIGdldENvbGxhcHNlS2V5KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuQ09MTEFQU0VLRVldO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBnZXREYXRhKCkgT2J0YWlucyB2YWxpZCBjb250ZW50IGRhdGEgb2YgYSBtZXNzYWdlLlxyXG4gICAqL1xyXG4gIGdldERhdGEoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5EQVRBXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogZ2V0RGF0YU9mTWFwKCkgYSBtZXNzYWdlIG1hcC5cclxuICAgKi9cclxuICBnZXREYXRhT2ZNYXAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5EQVRBT0ZNQVBdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBnZXRNZXNzYWdlSWQoKSBPYnRhaW5zIHRoZSBJRCBvZiBhIG1lc3NhZ2UuXHJcbiAgICovXHJcbiAgZ2V0TWVzc2FnZUlkKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTUVTU0FHRUlEXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogZ2V0TWVzc2FnZVR5cGUoKSBPYnRhaW5zIHRoZSB0eXBlIG9mIGEgbWVzc2FnZS5cclxuICAgKi9cclxuICBnZXRNZXNzYWdlVHlwZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk1FU1NBR0VUWVBFXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogZ2V0T3JpZ2luYWxVcmdlbmN5KCkgT2J0YWlucyB0aGUgb3JpZ2luYWwgcHJpb3JpdHkgb2YgYSBtZXNzYWdlLlxyXG4gICAqL1xyXG4gIGdldE9yaWdpbmFsVXJnZW5jeSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk9SSUdJTkFMVVJHRU5DWV07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIGdldFVyZ2VuY3koKSBPYnRhaW5zIHByaW9yaXR5IG9mIGEgbWVzc2FnZS5cclxuICAgKi9cclxuICBnZXRVcmdlbmN5KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuVVJHRU5DWV07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIGdldFR0bCgpIE9idGFpbnMgdmFsaWQgZ2V0VHRsIG9mIGEgbWVzc2FnZS5cclxuICAgKi9cclxuICBnZXRUdGwoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5UVExdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBnZXRTZW50VGltZSgpIE9idGFpbnMgdGhlIHRpbWUgd2hlbiBhIG1lc3NhZ2UgaXMgc2VudCBmcm9tIHRoZSBzZXJ2ZXIuXHJcbiAgICovXHJcbiAgZ2V0U2VudFRpbWUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5TRU5UVElNRV07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIGdldFRvKCkgT2J0YWlucyB0aGUgcmVjaXBpZW50IG9mIGEgbWVzc2FnZS5cclxuICAgKi9cclxuICBnZXRUbygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLlRPXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogZ2V0RnJvbSgpIE9idGFpbnMgdGhlIHNlbmRlciBvZiBhIG1lc3NhZ2UuXHJcbiAgICovXHJcbiAgZ2V0RnJvbSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLkZST01dO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBnZXRUb2tlbigpIE9idGFpbnMgdmFsaWQgdG9rZW5cclxuICAgKi9cclxuICBnZXRUb2tlbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLlRPS0VOXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldFRpdGxlKCkgT2J0YWlucyB0aGUgdGl0bGUgb2YgYSBtZXNzYWdlXHJcbiAgICovXHJcbiAgZ2V0Tm90aWZpY2F0aW9uVGl0bGUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVElUTEVdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0VGl0bGVMb2NhbGl6YXRpb25LZXkoKSBPYnRhaW5zIHRoZSBrZXkgb2YgdGhlIGRpc3BsYXllZCB0aXRsZSBvZiBhIG5vdGlmaWNhdGlvbiBtZXNzYWdlXHJcbiAgICovXHJcbiAgZ2V0VGl0bGVMb2NhbGl6YXRpb25LZXkoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVElUTEVMT0NBTElaQVRJT05LRVldO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0VGl0bGVMb2NhbGl6YXRpb25BcmdzKCkgT2J0YWlucyB2YXJpYWJsZSBwYXJhbWV0ZXJzIG9mIHRoZSBkaXNwbGF5ZWQgdGl0bGUgb2YgYSBtZXNzYWdlXHJcbiAgICovXHJcbiAgZ2V0VGl0bGVMb2NhbGl6YXRpb25BcmdzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbXHJcbiAgICAgICAgICBDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVElUTEVMT0NBTElaQVRJT05BUkdTXHJcbiAgICAgICAgICBdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0Qm9keUxvY2FsaXphdGlvbktleSgpIE9idGFpbnMgdGhlIGtleSBvZiB0aGUgZGlzcGxheWVkIGNvbnRlbnQgb2YgYSBtZXNzYWdlXHJcbiAgICovXHJcbiAgZ2V0Qm9keUxvY2FsaXphdGlvbktleSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5CT0RZTE9DQUxJWkFUSU9OS0VZXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldEJvZHlMb2NhbGl6YXRpb25BcmdzKCkgT2J0YWlucyB2YXJpYWJsZSBwYXJhbWV0ZXJzIG9mIHRoZSBkaXNwbGF5ZWQgY29udGVudCBvZiBhIG1lc3NhZ2VcclxuICAgKi9cclxuICBnZXRCb2R5TG9jYWxpemF0aW9uQXJncygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5CT0RZTE9DQUxJWkFUSU9OQVJHU107XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRCb2R5KCkgT2J0YWlucyB0aGUgYm9keSBvZiBhIG1lc3NhZ2VcclxuICAgKi9cclxuICBnZXRCb2R5KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkJPRFldO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0SWNvbigpIE9idGFpbnMgdGhlIGljb24gb2YgYSBtZXNzYWdlXHJcbiAgICovXHJcbiAgZ2V0SWNvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JQ09OXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldFNvdW5kKCkgT2J0YWlucyB0aGUgc291bmQgZnJvbSBhIG1lc3NhZ2VcclxuICAgKi9cclxuICBnZXRTb3VuZCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5TT1VORF07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRUYWcoKSBPYnRhaW5zIHRoZSB0YWcgZnJvbSBhIG1lc3NhZ2UgZm9yIG1lc3NhZ2Ugb3ZlcndyaXRpbmdcclxuICAgKi9cclxuICBnZXRUYWcoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVEFHXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldENvbG9yKCkgT2J0YWlucyB0aGUgY29sb3JzIG9mIGljb25zIGluIGEgbWVzc2FnZVxyXG4gICAqL1xyXG4gIGdldENvbG9yKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkNPTE9SXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldENsaWNrQWN0aW9uKCkgT2J0YWlucyBhY3Rpb25zIHRyaWdnZXJlZCBieSBtZXNzYWdlIHRhcHBpbmdcclxuICAgKi9cclxuICBnZXRDbGlja0FjdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5DTElDS0FDVElPTl07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRDaGFubmVsSWQoKSBPYnRhaW5zIElEcyBvZiBjaGFubmVscyB0aGF0IHN1cHBvcnQgdGhlIGRpc3BsYXkgb2YgbWVzc2FnZXNcclxuICAgKi9cclxuICBnZXRDaGFubmVsSWQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uQ0hBTk5FTElEXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldEltYWdlVXJsKCkgT2J0YWlucyB0aGUgaW1hZ2UgVVJMIGZyb20gYSBtZXNzYWdlXHJcbiAgICovXHJcbiAgZ2V0SW1hZ2VVcmwoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSU1BR0VVUkxdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0TGluaygpIE9idGFpbnMgdGhlIFVSTCB0byBiZSBhY2Nlc3NlZCBmcm9tIGEgbWVzc2FnZVxyXG4gICAqL1xyXG4gIGdldExpbmsoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uTElOS107XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXROb3RpZnlJZCgpIE9idGFpbnMgdGhlIHVuaXF1ZSBJRCBvZiBhIG1lc3NhZ2VcclxuICAgKi9cclxuICBnZXROb3RpZnlJZCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5OT1RJRllJRF07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRXaGVuKClcclxuICAgKi9cclxuICBnZXRXaGVuKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLldIRU5dO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0TGlnaHRTZXR0aW5ncygpXHJcbiAgICovXHJcbiAgZ2V0TGlnaHRTZXR0aW5ncygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5MSUdIVFNFVFRJTkdTXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldEJhZGdlTnVtYmVyKClcclxuICAgKi9cclxuICBnZXRCYWRnZU51bWJlcigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5CQURHRU5VTUJFUl07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRJbXBvcnRhbmNlKClcclxuICAgKi9cclxuICBnZXRJbXBvcnRhbmNlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklNUE9SVEFOQ0VdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0VGlja2VyKClcclxuICAgKi9cclxuICBnZXRUaWNrZXIoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVElDS0VSXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldFZpYnJhdGVDb25maWcoKVxyXG4gICAqL1xyXG4gIGdldFZpYnJhdGVDb25maWcoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVklCUkFURUNPTkZJR107XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRWaXNpYmlsaXR5KClcclxuICAgKi9cclxuICBnZXRWaXNpYmlsaXR5KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLlZJU0lCSUxJVFldO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0SW50ZW50VXJpKClcclxuICAgKi9cclxuICBnZXRJbnRlbnRVcmkoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSU5URU5UVVJJXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmlzQXV0b0NhbmNlbCgpXHJcbiAgICovXHJcbiAgaXNBdXRvQ2FuY2VsKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklTQVVUT0NBTkNFTF07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRJbnRlbnRVcmkoKVxyXG4gICAqL1xyXG4gIGlzTG9jYWxPbmx5KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklTTE9DQUxPTkxZXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmlzRGVmYXVsdExpZ2h0KClcclxuICAgKi9cclxuICBpc0RlZmF1bHRMaWdodCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JU0RFRkFVTFRMSUdIVF07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjppc0RlZmF1bHRTb3VuZCgpXHJcbiAgICovXHJcbiAgaXNEZWZhdWx0U291bmQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSVNERUZBVUxUU09VTkRdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246aXNEZWZhdWx0VmlicmF0ZSgpXHJcbiAgICovXHJcbiAgaXNEZWZhdWx0VmlicmF0ZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JU0RFRkFVTFRWSUJSQVRFXTtcclxuICB9XHJcbn1cclxuXHJcbnR5cGUgTG9jYWxOb3RpZmljYXRpb25PYmplY3QgPSB7XHJcbiAgW2tleSBpbiBBdHRyXT86IGFueTtcclxufTtcclxuXHJcbnR5cGUgUmVtb3RlTWVzc2FnZU9iamVjdD17XHJcbiAgW2tleSBpbiBSZW1vdGVNZXNzYWdlQnVpbGRlcl0/OmFueTtcclxufVxyXG5cclxuIl19