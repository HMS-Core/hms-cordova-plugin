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

import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HmsPush = /** @class */ (function (_super) {
    __extends(HmsPush, _super);
    function HmsPush() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.HmsPushResultCode = HmsPushResultCode;
        _this.CordovaRemoteMessage = CordovaRemoteMessage;
        return _this;
    }
    /**
     * This method  initialized HmsPush.
      
     * @returns Promise<void>
     */
    HmsPush.prototype.init = function () { return cordova(this, "init", { "otherPromise": true }, arguments); };
    HmsPush.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HmsPush.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    /**
     * This method is used to disable the display of notification messages. If you want to control the display of notification messages in an app, you can call this method. This method applies to notification messages but not data messages. It is the app that determines whether to enable or disable data messaging.
      
     * @returns Promise<string>
     */
    HmsPush.prototype.turnOnPush = function () { return cordova(this, "turnOnPush", { "otherPromise": true }, arguments); };
    /**
     * This method is used to enable the display of notification messages. If you want to control the display of notification messages in an app, you can call this method. This method applies to notification messages but not data messages. It is the app that determines whether to enable or disable data messaging.
     * @returns Promise<string>
     */
    HmsPush.prototype.turnOffPush = function () { return cordova(this, "turnOffPush", { "otherPromise": true }, arguments); };
    /**
     * This method is used to obtain an AAID in synchronous mode. Before applying for a token, an app calls this method to obtain its unique AAID. The HUAWEI Push server generates a token for the app based on the AAID. If the AAID of the app changes, a new token will be generated next time when the app applies for a token. If an app needs to report statistics events, it must carry the AAID as its unique ID.
     * @returns Promise<string>
     */
    HmsPush.prototype.getId = function () { return cordova(this, "getId", { "otherPromise": true }, arguments); };
    /**
     * This method is used to obtain an AAID in asynchronous mode.
     * @returns Promise<string>
     */
    HmsPush.prototype.getAAID = function () { return cordova(this, "getAAID", { "otherPromise": true }, arguments); };
    /**
     * This method is used to obtain a token required for accessing HUAWEI Push Kit. If there is no local AAID, this method will automatically generate an AAID when it is called because the HUAWEI Push Kit server needs to generate a token based on the AAID.
     * @returns Promise<string>
     * @params scope ? : String
     */
    HmsPush.prototype.getToken = function (args) { return cordova(this, "getToken", { "otherPromise": true }, arguments); };
    /**
     * This method is used to obtain the generation timestamp of an AAID.
     * @returns Promise<string>
     */
    HmsPush.prototype.getCreationTime = function () { return cordova(this, "getCreationTime", { "otherPromise": true }, arguments); };
    /**
     * This method is used to delete a local AAID and its generation timestamp.
     * @returns Promise<string>
     */
    HmsPush.prototype.deleteAAID = function () { return cordova(this, "deleteAAID", { "otherPromise": true }, arguments); };
    /**
     * This method is used to delete a token. After a token is deleted, the corresponding AAID will not be deleted. This method is a synchronous method.
     * @returns Promise<string>
     * @params scope ? : String
     */
    HmsPush.prototype.deleteToken = function (args) { return cordova(this, "deleteToken", { "otherPromise": true }, arguments); };
    /**
     * This method is used to subscribe to topics in asynchronous mode. The HUAWEI Push Kit topic messaging function allows you to send messages to multiple devices whose users have subscribed to a specific topic. You can write messages about the topic as required, and HUAWEI Push Kit determines the release path and sends messages to the correct devices in a reliable manner.
     * @param {string} arg Topic to be subscribed to.
     * @returns Promise<string>
     */
    HmsPush.prototype.subscribe = function (arg) { return cordova(this, "subscribe", { "otherPromise": true }, arguments); };
    /**
     * This method is used to unsubscribe from topics that are subscribed to through the subscribe method.
     * @param {string} arg Topic to be unsubscribed to.
     * @returns Promise<string>
     */
    HmsPush.prototype.unsubscribe = function (arg) { return cordova(this, "unsubscribe", { "otherPromise": true }, arguments); };
    HmsPush.prototype.setAutoInitEnabled = function (args) { return cordova(this, "setAutoInitEnabled", { "otherPromise": true }, arguments); };
    HmsPush.prototype.getOdid = function () { return cordova(this, "getOdid", { "otherPromise": true }, arguments); };
    /**
     * This method is used to check whether automatic initialization is enabled.
     * @returns Promise<string>
     */
    HmsPush.prototype.isAutoInitEnabled = function () { return cordova(this, "isAutoInitEnabled", { "otherPromise": true }, arguments); };
    HmsPush.prototype.getInitialNotification = function () { return cordova(this, "getInitialNotification", { "otherPromise": true }, arguments); };
    HmsPush.prototype.setBackgroundAction = function (callback) { return cordova(this, "setBackgroundAction", { "otherPromise": true }, arguments); };
    HmsPush.prototype.removeBackgroundAction = function () { return cordova(this, "removeBackgroundAction", { "otherPromise": true }, arguments); };
    HmsPush.prototype.sendRemoteMessage = function (args) { return cordova(this, "sendRemoteMessage", { "otherPromise": true }, arguments); };
    HmsPush.pluginName = "HmsPush";
    HmsPush.plugin = "com-plugin-hms-push";
    HmsPush.pluginRef = "HmsPush";
    HmsPush.platforms = ["Android"];
    HmsPush = __decorate([
        Injectable()
    ], HmsPush);
    return HmsPush;
}(IonicNativePlugin));
export { HmsPush };
var HmsLocalNotification = /** @class */ (function (_super) {
    __extends(HmsLocalNotification, _super);
    function HmsLocalNotification() {
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
    HmsLocalNotification.prototype.localNotification = function (args) { return cordova(this, "localNotification", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.localNotificationSchedule = function (args) { return cordova(this, "localNotificationSchedule", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.cancelAllNotifications = function () { return cordova(this, "cancelAllNotifications", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.cancelNotifications = function () { return cordova(this, "cancelNotifications", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.cancelScheduledNotifications = function () { return cordova(this, "cancelScheduledNotifications", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.cancelNotificationsWithId = function (args) { return cordova(this, "cancelNotificationsWithId", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.cancelNotificationsWithIdTag = function (args) { return cordova(this, "cancelNotificationsWithIdTag", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.cancelNotificationsWithTag = function (args) { return cordova(this, "cancelNotificationsWithTag", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.getNotifications = function () { return cordova(this, "getNotifications", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.getScheduledNotifications = function () { return cordova(this, "getScheduledNotifications", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.getChannels = function () { return cordova(this, "getChannels", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.channelExists = function (args) { return cordova(this, "channelExists", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.channelBlocked = function (args) { return cordova(this, "channelBlocked", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.deleteChannel = function (args) { return cordova(this, "deleteChannel", { "otherPromise": true }, arguments); };
    HmsLocalNotification.backgroundLocalNotification = function (args) {
        return;
    };
    HmsLocalNotification.pluginName = "HmsLocalNotification";
    HmsLocalNotification.plugin = "com-plugin-hms-push";
    HmsLocalNotification.pluginRef = "HmsLocalNotification";
    HmsLocalNotification.platforms = ["Android"];
    HmsLocalNotification = __decorate([
        Injectable()
    ], HmsLocalNotification);
    return HmsLocalNotification;
}(IonicNativePlugin));
export { HmsLocalNotification };
var HmsPushEvent = /** @class */ (function (_super) {
    __extends(HmsPushEvent, _super);
    function HmsPushEvent() {
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
    HmsPushEvent.prototype.onRemoteMessageReceived = function (result) {
        window.registerHMSEvent("REMOTE_DATA_MESSAGE_RECEIVED", result);
    };
    HmsPushEvent.prototype.onTokenReceived = function (result) {
        window.registerHMSEvent("TOKEN_RECEIVED_EVENT", result);
    };
    HmsPushEvent.prototype.onTokenError = function (result) {
        window.registerHMSEvent("ON_TOKEN_ERROR_EVENT", result);
    };
    HmsPushEvent.prototype.onPushMessageSent = function (result) {
        window.registerHMSEvent("ON_PUSH_MESSAGE_SENT", result);
    };
    HmsPushEvent.prototype.onPushMessageSentError = function (result) {
        window.registerHMSEvent("ON_PUSH_MESSAGE_SENT_ERROR", result);
    };
    HmsPushEvent.prototype.onPushMessageSentDelivered = function (result) {
        window.registerHMSEvent("ON_PUSH_MESSAGE_SENT_DELIVERED", result);
    };
    HmsPushEvent.prototype.onLocalNotificationAction = function (result) {
        window.registerHMSEvent("LOCAL_NOTIFICATION_ACTION_EVENT", result);
    };
    HmsPushEvent.prototype.onNotificationOpenedApp = function (result) {
        window.registerHMSEvent("NOTIFICATION_OPENED_EVENT", result);
    };
    HmsPushEvent.pluginName = "HmsPushEvent";
    HmsPushEvent.plugin = "com-plugin-hms-push";
    HmsPushEvent.pluginRef = "HmsPushEvent";
    HmsPushEvent.platforms = ["Android"];
    HmsPushEvent = __decorate([
        Injectable()
    ], HmsPushEvent);
    return HmsPushEvent;
}(IonicNativePlugin));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1wdXNoL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7RUFjRTs7QUFFRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQTBGLE1BQU0sb0JBQW9CLENBQUM7O0lBK0IvRiwyQkFBaUI7OztRQUU1Qyx1QkFBaUIsR0FBQyxpQkFBaUIsQ0FBQTtRQUNuQywwQkFBb0IsR0FBQyxvQkFBb0IsQ0FBQzs7O0lBRzFDOzs7O09BSUc7SUFDSCxzQkFBSTtJQUtKLDhCQUFZO0lBS1osK0JBQWE7SUFLYjs7OztPQUlHO0lBQ0gsNEJBQVU7SUFLVjs7O09BR0c7SUFDSCw2QkFBVztJQUtYOzs7T0FHRztJQUNILHVCQUFLO0lBS0w7OztPQUdHO0lBQ0gseUJBQU87SUFLUDs7OztPQUlHO0lBQ0gsMEJBQVEsYUFBQyxJQUFZO0lBS3JCOzs7T0FHRztJQUNILGlDQUFlO0lBS2Y7OztPQUdHO0lBQ0gsNEJBQVU7SUFLVjs7OztPQUlHO0lBQ0gsNkJBQVcsYUFBQyxJQUFZO0lBS3hCOzs7O09BSUc7SUFDSCwyQkFBUyxhQUFDLEdBQVc7SUFLckI7Ozs7T0FJRztJQUNILDZCQUFXLGFBQUMsR0FBVztJQUt2QixvQ0FBa0IsYUFBQyxJQUFhO0lBS2hDLHlCQUFPO0lBS1A7OztPQUdHO0lBQ0gsbUNBQWlCO0lBS2pCLHdDQUFzQjtJQUt0QixxQ0FBbUIsYUFBQyxRQUE0QjtJQUtoRCx3Q0FBc0I7SUFLdEIsbUNBQWlCLGFBQUMsSUFBeUI7Ozs7O0lBM0poQyxPQUFPO1FBRG5CLFVBQVUsRUFBRTtPQUNBLE9BQU87a0JBaERwQjtFQWdENkIsaUJBQWlCO1NBQWpDLE9BQU87O0lBc0xzQix3Q0FBaUI7OztRQUV2RCwwQkFBb0IsR0FBQyxvQkFBb0Is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YUFBYSxFQUFFLGVBQWU7UUFDOUIsV0FBVyxFQUFFLGFBQWE7UUFDMUIsVUFBVSxFQUFFLFlBQVk7UUFDeEIsTUFBTSxFQUFFLFFBQVE7UUFDaEIsYUFBYSxFQUFFLGVBQWU7UUFDOUIsVUFBVSxFQUFFLFlBQVk7UUFDeEIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsWUFBWSxFQUFFLGNBQWM7UUFDNUIsV0FBVyxFQUFFLGFBQWE7UUFDMUIsY0FBYyxFQUFFLGdCQUFnQjtRQUNoQyxjQUFjLEVBQUUsZ0JBQWdCO1FBQ2hDLGdCQUFnQixFQUFFLGtCQUFrQjtLQUN2QyxDQUFDOytCQTNuQko7O1NBeWtCYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgQ29weXJpZ2h0IDIwMjAuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxyXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBIbXNQdXNoXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGUgQ29yZG92YSBQdXNoIFBsdWdpbiBlbmFibGVzIGNvbW11bmljYXRpb24gYmV0d2VlbiBIdWF3ZWkgUHVzaCBLaXQgU0RLIGFuZCBDb3Jkb3ZhIHBsYXRmb3JtLiBUaGlzIHBsdWdpbiBleHBvc2VzIGFsbCBmdW5jdGlvbmFsaXR5IHByb3ZpZGVkIGJ5IEh1YXdlaSBQdXNoIEtpdCBTREsuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEhtc1B1c2ggfSBmcm9tICdAaW9uaWMtbmF0aXZlL2htcy1wdXNoJztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBobXNQdXNoOiBIbXNQdXNoKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuaE1TUHVzaC50dXJuT25QdXNoKClcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0htc1B1c2gnLFxyXG4gIHBsdWdpbjogJ2NvbS1wbHVnaW4taG1zLXB1c2gnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICBwbHVnaW5SZWY6ICdIbXNQdXNoJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhtc1B1c2ggZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcblxyXG4gIEhtc1B1c2hSZXN1bHRDb2RlPUhtc1B1c2hSZXN1bHRDb2RlXHJcbiAgQ29yZG92YVJlbW90ZU1lc3NhZ2U9Q29yZG92YVJlbW90ZU1lc3NhZ2U7XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgIGluaXRpYWxpemVkIEhtc1B1c2guIFxyXG4gICAgXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTx2b2lkPiBcclxuICAgKi9cclxuICBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIFxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGRpc2FibGUgdGhlIGRpc3BsYXkgb2Ygbm90aWZpY2F0aW9uIG1lc3NhZ2VzLiBJZiB5b3Ugd2FudCB0byBjb250cm9sIHRoZSBkaXNwbGF5IG9mIG5vdGlmaWNhdGlvbiBtZXNzYWdlcyBpbiBhbiBhcHAsIHlvdSBjYW4gY2FsbCB0aGlzIG1ldGhvZC4gVGhpcyBtZXRob2QgYXBwbGllcyB0byBub3RpZmljYXRpb24gbWVzc2FnZXMgYnV0IG5vdCBkYXRhIG1lc3NhZ2VzLiBJdCBpcyB0aGUgYXBwIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGVuYWJsZSBvciBkaXNhYmxlIGRhdGEgbWVzc2FnaW5nLlxyXG4gICAgXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+IFxyXG4gICAqL1xyXG4gIHR1cm5PblB1c2goKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gZW5hYmxlIHRoZSBkaXNwbGF5IG9mIG5vdGlmaWNhdGlvbiBtZXNzYWdlcy4gSWYgeW91IHdhbnQgdG8gY29udHJvbCB0aGUgZGlzcGxheSBvZiBub3RpZmljYXRpb24gbWVzc2FnZXMgaW4gYW4gYXBwLCB5b3UgY2FuIGNhbGwgdGhpcyBtZXRob2QuIFRoaXMgbWV0aG9kIGFwcGxpZXMgdG8gbm90aWZpY2F0aW9uIG1lc3NhZ2VzIGJ1dCBub3QgZGF0YSBtZXNzYWdlcy4gSXQgaXMgdGhlIGFwcCB0aGF0IGRldGVybWluZXMgd2hldGhlciB0byBlbmFibGUgb3IgZGlzYWJsZSBkYXRhIG1lc3NhZ2luZy5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgKi9cclxuICB0dXJuT2ZmUHVzaCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBvYnRhaW4gYW4gQUFJRCBpbiBzeW5jaHJvbm91cyBtb2RlLiBCZWZvcmUgYXBwbHlpbmcgZm9yIGEgdG9rZW4sIGFuIGFwcCBjYWxscyB0aGlzIG1ldGhvZCB0byBvYnRhaW4gaXRzIHVuaXF1ZSBBQUlELiBUaGUgSFVBV0VJIFB1c2ggc2VydmVyIGdlbmVyYXRlcyBhIHRva2VuIGZvciB0aGUgYXBwIGJhc2VkIG9uIHRoZSBBQUlELiBJZiB0aGUgQUFJRCBvZiB0aGUgYXBwIGNoYW5nZXMsIGEgbmV3IHRva2VuIHdpbGwgYmUgZ2VuZXJhdGVkIG5leHQgdGltZSB3aGVuIHRoZSBhcHAgYXBwbGllcyBmb3IgYSB0b2tlbi4gSWYgYW4gYXBwIG5lZWRzIHRvIHJlcG9ydCBzdGF0aXN0aWNzIGV2ZW50cywgaXQgbXVzdCBjYXJyeSB0aGUgQUFJRCBhcyBpdHMgdW5pcXVlIElELlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAqL1xyXG4gIGdldElkKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gb2J0YWluIGFuIEFBSUQgaW4gYXN5bmNocm9ub3VzIG1vZGUuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICovXHJcbiAgZ2V0QUFJRCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIG9idGFpbiBhIHRva2VuIHJlcXVpcmVkIGZvciBhY2Nlc3NpbmcgSFVBV0VJIFB1c2ggS2l0LiBJZiB0aGVyZSBpcyBubyBsb2NhbCBBQUlELCB0aGlzIG1ldGhvZCB3aWxsIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGUgYW4gQUFJRCB3aGVuIGl0IGlzIGNhbGxlZCBiZWNhdXNlIHRoZSBIVUFXRUkgUHVzaCBLaXQgc2VydmVyIG5lZWRzIHRvIGdlbmVyYXRlIGEgdG9rZW4gYmFzZWQgb24gdGhlIEFBSUQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICogQHBhcmFtcyBzY29wZSA/IDogU3RyaW5nXHJcbiAgICovXHJcbiAgZ2V0VG9rZW4oYXJncz86c3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBvYnRhaW4gdGhlIGdlbmVyYXRpb24gdGltZXN0YW1wIG9mIGFuIEFBSUQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICovXHJcbiAgZ2V0Q3JlYXRpb25UaW1lKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gZGVsZXRlIGEgbG9jYWwgQUFJRCBhbmQgaXRzIGdlbmVyYXRpb24gdGltZXN0YW1wLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAqL1xyXG4gIGRlbGV0ZUFBSUQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gZGVsZXRlIGEgdG9rZW4uIEFmdGVyIGEgdG9rZW4gaXMgZGVsZXRlZCwgdGhlIGNvcnJlc3BvbmRpbmcgQUFJRCB3aWxsIG5vdCBiZSBkZWxldGVkLiBUaGlzIG1ldGhvZCBpcyBhIHN5bmNocm9ub3VzIG1ldGhvZC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgKiBAcGFyYW1zIHNjb3BlID8gOiBTdHJpbmdcclxuICAgKi9cclxuICBkZWxldGVUb2tlbihhcmdzPzpzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBzdWJzY3JpYmUgdG8gdG9waWNzIGluIGFzeW5jaHJvbm91cyBtb2RlLiBUaGUgSFVBV0VJIFB1c2ggS2l0IHRvcGljIG1lc3NhZ2luZyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHNlbmQgbWVzc2FnZXMgdG8gbXVsdGlwbGUgZGV2aWNlcyB3aG9zZSB1c2VycyBoYXZlIHN1YnNjcmliZWQgdG8gYSBzcGVjaWZpYyB0b3BpYy4gWW91IGNhbiB3cml0ZSBtZXNzYWdlcyBhYm91dCB0aGUgdG9waWMgYXMgcmVxdWlyZWQsIGFuZCBIVUFXRUkgUHVzaCBLaXQgZGV0ZXJtaW5lcyB0aGUgcmVsZWFzZSBwYXRoIGFuZCBzZW5kcyBtZXNzYWdlcyB0byB0aGUgY29ycmVjdCBkZXZpY2VzIGluIGEgcmVsaWFibGUgbWFubmVyLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhcmcgVG9waWMgdG8gYmUgc3Vic2NyaWJlZCB0by5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgKi9cclxuICBzdWJzY3JpYmUoYXJnOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byB1bnN1YnNjcmliZSBmcm9tIHRvcGljcyB0aGF0IGFyZSBzdWJzY3JpYmVkIHRvIHRocm91Z2ggdGhlIHN1YnNjcmliZSBtZXRob2QuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFyZyBUb3BpYyB0byBiZSB1bnN1YnNjcmliZWQgdG8uXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICovXHJcbiAgdW5zdWJzY3JpYmUoYXJnOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2V0QXV0b0luaXRFbmFibGVkKGFyZ3M6IGJvb2xlYW4pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0T2RpZCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGNoZWNrIHdoZXRoZXIgYXV0b21hdGljIGluaXRpYWxpemF0aW9uIGlzIGVuYWJsZWQuICBcclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgKi9cclxuICBpc0F1dG9Jbml0RW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0SW5pdGlhbE5vdGlmaWNhdGlvbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzZXRCYWNrZ3JvdW5kQWN0aW9uKGNhbGxiYWNrOiAoZGF0YTphbnkpID0+IHZvaWQpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICByZW1vdmVCYWNrZ3JvdW5kQWN0aW9uKCkgOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzZW5kUmVtb3RlTWVzc2FnZShhcmdzOiBSZW1vdGVNZXNzYWdlT2JqZWN0KTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxufVxyXG5cclxudHlwZSBIYW5kbGVyID0gKGRhdGE6IGFueSkgPT4gdm9pZDtcclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICAgICAgaG1zRXZlbnRIYW5kbGVyczoge1xyXG4gICAgICAgICAgICBba2V5OiBzdHJpbmddOiBIYW5kbGVyW11cclxuICAgICAgICB9LFxyXG4gICAgICAgIGhtc0V2ZW50SGFuZGxlcjogKGV2ZW50TmFtZTogc3RyaW5nLCBkYXRhOiBhbnkpID0+IHZvaWQsXHJcbiAgICAgICAgcmVnaXN0ZXJITVNFdmVudDogKGV2ZW50TmFtZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSA9PiB2b2lkXHJcbiAgICAgICAgdW5yZWdpc3RlckhNU0V2ZW50OiAoZXZlbnROYW1lOiBzdHJpbmcsIGhhbmRsZXI/OiBIYW5kbGVyKSA9PiB2b2lkXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0htc0xvY2FsTm90aWZpY2F0aW9uJyxcclxuICBwbHVnaW46ICdjb20tcGx1Z2luLWhtcy1wdXNoJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnSG1zTG9jYWxOb3RpZmljYXRpb24nLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSG1zTG9jYWxOb3RpZmljYXRpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcblxyXG4gICAgQ29yZG92YVJlbW90ZU1lc3NhZ2U9Q29yZG92YVJlbW90ZU1lc3NhZ2U7XHJcbiAgICBBdHRyPUF0dHI7XHJcbiAgICBJbXBvcnRhbmNlPUltcG9ydGFuY2U7XHJcbiAgICBQcmlvcml0eT1Qcmlvcml0eVxyXG4gICAgUmVtb3RlTWVzc2FnZUJ1aWxkZXI9UmVtb3RlTWVzc2FnZUJ1aWxkZXJcclxuICAgIFJlcGVhdFR5cGU9UmVwZWF0VHlwZVxyXG4gICAgVmlzaWJpbGl0eT1WaXNpYmlsaXR5XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgbG9jYWxOb3RpZmljYXRpb24oYXJnczogTG9jYWxOb3RpZmljYXRpb25PYmplY3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBsb2NhbE5vdGlmaWNhdGlvblNjaGVkdWxlKGFyZ3M6IExvY2FsTm90aWZpY2F0aW9uT2JqZWN0KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY2FuY2VsQWxsTm90aWZpY2F0aW9ucygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY2FuY2VsTm90aWZpY2F0aW9ucygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY2FuY2VsU2NoZWR1bGVkTm90aWZpY2F0aW9ucygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY2FuY2VsTm90aWZpY2F0aW9uc1dpdGhJZChhcmdzOiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY2FuY2VsTm90aWZpY2F0aW9uc1dpdGhJZFRhZyhhcmdzOiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY2FuY2VsTm90aWZpY2F0aW9uc1dpdGhUYWcoYXJnczogYW55KTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldE5vdGlmaWNhdGlvbnMoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0U2NoZWR1bGVkTm90aWZpY2F0aW9ucygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBnZXRDaGFubmVscygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBjaGFubmVsRXhpc3RzKGFyZ3M6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBjaGFubmVsQmxvY2tlZChhcmdzOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZGVsZXRlQ2hhbm5lbChhcmdzOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBiYWNrZ3JvdW5kTG9jYWxOb3RpZmljYXRpb24oYXJnczogc3RyaW5nKTogdm9pZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBcclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0htc1B1c2hFdmVudCcsXHJcbiAgcGx1Z2luOiAnY29tLXBsdWdpbi1obXMtcHVzaCcsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gIHBsdWdpblJlZjogJ0htc1B1c2hFdmVudCcsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIbXNQdXNoRXZlbnQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcblxyXG5vblJlbW90ZU1lc3NhZ2VSZWNlaXZlZCAocmVzdWx0OmFueSkge1xyXG4gIHdpbmRvdy5yZWdpc3RlckhNU0V2ZW50KFwiUkVNT1RFX0RBVEFfTUVTU0FHRV9SRUNFSVZFRFwiLHJlc3VsdClcclxufVxyXG5vblRva2VuUmVjZWl2ZWQgKHJlc3VsdDphbnkpIHtcclxuICB3aW5kb3cucmVnaXN0ZXJITVNFdmVudChcIlRPS0VOX1JFQ0VJVkVEX0VWRU5UXCIscmVzdWx0KVxyXG59XHJcbm9uVG9rZW5FcnJvciAocmVzdWx0OmFueSkge1xyXG4gIHdpbmRvdy5yZWdpc3RlckhNU0V2ZW50KFwiT05fVE9LRU5fRVJST1JfRVZFTlRcIixyZXN1bHQpXHJcbn1cclxuIG9uUHVzaE1lc3NhZ2VTZW50IChyZXN1bHQ6YW55KSB7XHJcbiAgd2luZG93LnJlZ2lzdGVySE1TRXZlbnQoXCJPTl9QVVNIX01FU1NBR0VfU0VOVFwiLHJlc3VsdClcclxuIH1cclxub25QdXNoTWVzc2FnZVNlbnRFcnJvciAocmVzdWx0OmFueSkge1xyXG4gIHdpbmRvdy5yZWdpc3RlckhNU0V2ZW50KFwiT05fUFVTSF9NRVNTQUdFX1NFTlRfRVJST1JcIixyZXN1bHQpXHJcbn1cclxub25QdXNoTWVzc2FnZVNlbnREZWxpdmVyZWQgKHJlc3VsdDphbnkpIHtcclxuICB3aW5kb3cucmVnaXN0ZXJITVNFdmVudChcIk9OX1BVU0hfTUVTU0FHRV9TRU5UX0RFTElWRVJFRFwiLHJlc3VsdClcclxufVxyXG5vbkxvY2FsTm90aWZpY2F0aW9uQWN0aW9uIChyZXN1bHQ6YW55KSB7XHJcbiAgd2luZG93LnJlZ2lzdGVySE1TRXZlbnQoXCJMT0NBTF9OT1RJRklDQVRJT05fQUNUSU9OX0VWRU5UXCIscmVzdWx0KVxyXG59XHJcbm9uTm90aWZpY2F0aW9uT3BlbmVkQXBwIChyZXN1bHQ6YW55KSB7XHJcbiAgd2luZG93LnJlZ2lzdGVySE1TRXZlbnQoXCJOT1RJRklDQVRJT05fT1BFTkVEX0VWRU5UXCIscmVzdWx0KVxyXG59XHJcblxyXG5SRU1PVEVfREFUQV9NRVNTQUdFX1JFQ0VJVkVEID0gXCJSRU1PVEVfREFUQV9NRVNTQUdFX1JFQ0VJVkVEXCJcclxuVE9LRU5fUkVDRUlWRURfRVZFTlQgPSBcIlRPS0VOX1JFQ0VJVkVEX0VWRU5UXCJcclxuT05fVE9LRU5fRVJST1JfRVZFTlQgPSBcIk9OX1RPS0VOX0VSUk9SX0VWRU5UXCJcclxuTk9USUZJQ0FUSU9OX09QRU5FRF9FVkVOVCA9IFwiTk9USUZJQ0FUSU9OX09QRU5FRF9FVkVOVFwiXHJcbkxPQ0FMX05PVElGSUNBVElPTl9BQ1RJT05fRVZFTlQgPSBcIkxPQ0FMX05PVElGSUNBVElPTl9BQ1RJT05fRVZFTlRcIlxyXG5PTl9QVVNIX01FU1NBR0VfU0VOVCA9IFwiT05fUFVTSF9NRVNTQUdFX1NFTlRcIlxyXG5PTl9QVVNIX01FU1NBR0VfU0VOVF9FUlJPUiA9IFwiT05fUFVTSF9NRVNTQUdFX1NFTlRfRVJST1JcIlxyXG5PTl9QVVNIX01FU1NBR0VfU0VOVF9ERUxJVkVSRUQgPSBcIk9OX1BVU0hfTUVTU0FHRV9TRU5UX0RFTElWRVJFRFwiXHJcblxyXG59XHJcblxyXG5leHBvcnQgZW51bSBIbXNQdXNoUmVzdWx0Q29kZSB7XHJcbiAgLy8gU3VjY2Vzc1xyXG4gIFNVQ0NFU1M9IFwiMFwiLFxyXG5cclxuICAvLyBFcnJvclxyXG4gIEVSUk9SPSBcIi0xXCIsXHJcblxyXG4gIC8vIEJ1bmRsZSBpcyBudWxsLCBleGNlcHRpb25cclxuICBOVUxMX0JVTkRMRT0gXCIzMzNcIixcclxuXHJcbiAgLy8gWW91IGRvIG5vdCBoYXZlIGEgdG9rZW4uIEFwcGx5IGZvciBhIHRva2VuLlxyXG4gIEVSUk9SX05PX1RPS0VOPSBcIjkwNzEyMjAzMFwiLFxyXG5cclxuICAvLyBUaGUgY3VycmVudCBuZXR3b3JrIGlzIHVuYXZhaWxhYmxlLiBDaGVjayB0aGUgbmV0d29yayBjb25uZWN0aW9uLlxyXG4gIEVSUk9SX05PX05FVFdPUks9IFwiOTA3MTIyMDMxXCIsXHJcblxyXG4gIC8vIFRoZSB0b2tlbiBoYXMgZXhwaXJlZC4gRGVsZXRlIHRoZSB0b2tlbiBhbmQgYXBwbHkgZm9yIGEgbmV3IG9uZS5cclxuICBFUlJPUl9UT0tFTl9JTlZBTElEPSBcIjkwNzEyMjAzMlwiLFxyXG5cclxuICAvLyBJZiB0aGUgUHVzaCBzZXJ2aWNlIGlzIHVuYXZhaWxhYmxlLCBjb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICBFUlJPUl9TRVJWSUNFX05PVF9BVkFJTEFCTEU9IFwiOTA3MTIyMDQ2XCIsXHJcblxyXG4gIC8vIElmIHRoZSBQdXNoIHNlcnZlciByZXR1cm5zIGFuIGVycm9yLCBjb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICBFUlJPUl9QVVNIX1NFUlZFUj0gXCI5MDcxMjIwNDdcIixcclxuXHJcbiAgLy8gVW5rbm93biBlcnJvci4gQ29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXHJcbiAgRVJST1JfVU5LTk9XTj0gXCI5MDcxMjIwNDVcIixcclxuXHJcbiAgLy8gVGhlIG51bWJlciBvZiBzdWJzY3JpYmVkIHRvcGljcyBleGNlZWRzIDIwMDAuXHJcbiAgRVJST1JfVE9QSUNfRVhDRUVEPSBcIjkwNzEyMjAzNFwiLFxyXG5cclxuICAvLyBGYWlsZWQgdG8gc2VuZCB0aGUgc3Vic2NyaXB0aW9uIHRvcGljLiBDb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICBFUlJPUl9UT1BJQ19TRU5EPSBcIjkwNzEyMjAzNVwiLFxyXG5cclxuICAvLyBQdXNoIHJpZ2h0cyBhcmUgbm90IGVuYWJsZWQuIEVuYWJsZSB0aGUgc2VydmljZSBhbmQgc2V0IHB1c2ggc2VydmljZSBwYXJhbWV0ZXJzIGF0IEFwcEdhbGxlcnkgQ29ubmVjdC5cclxuICBFUlJPUl9OT19SSUdIVD0gXCI5MDcxMjIwMzZcIixcclxuXHJcbiAgLy8gRmFpbGVkIHRvIGFwcGx5IGZvciB0aGUgdG9rZW4uIENvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gIEVSUk9SX0dFVF9UT0tFTl9FUlI9IFwiOTA3MTIyMDM3XCIsXHJcblxyXG4gIC8vIE5vIHN0b3JhZ2UgbG9jYXRpb24gaXMgc2VsZWN0ZWQgZm9yIHRoZSBhcHBsaWNhdGlvbiBvciB0aGUgc3RvcmFnZSBsb2NhdGlvbiBpcyBpbnZhbGlkLlxyXG4gIEVSUk9SX1NUT1JBR0VfTE9DQVRJT05fRU1QVFk9IFwiOTA3MTIyMDM4XCIsXHJcblxyXG4gIC8vIEZhaWxlZCB0byBhcHBseSBmb3IgYSB0b2tlbi4gQ3Jvc3MtcmVnaW9uIHRva2VuIGFwcGxpY2F0aW9uIGlzIG5vdCBhbGxvd2VkLlxyXG4gIEVSUk9SX05PVF9BTExPV19DUk9TU19BUFBMWT0gXCI5MDcxMjIwNTNcIixcclxuXHJcbiAgLy8gVGhlIG1lc3NhZ2UgYm9keSBzaXplIGV4Y2VlZHMgdGhlIG1heGltdW0uXHJcbiAgRVJST1JfU0laRT0gXCI5MDcxMjIwNDFcIixcclxuXHJcbiAgLy8gVGhlIG1lc3NhZ2UgY29udGFpbnMgaW52YWxpZCBwYXJhbWV0ZXJzLlxyXG4gIEVSUk9SX0lOVkFMSURfUEFSQU1FVEVSUz0gXCI5MDcxMjIwNDJcIixcclxuXHJcbiAgLy8gVGhlIG51bWJlciBvZiBzZW50IG1lc3NhZ2VzIHJlYWNoZXMgdGhlIHVwcGVyIGxpbWl0LiBUaGUgbWVzc2FnZXMgd2lsbCBiZSBkaXNjYXJkZWQuXHJcbiAgRVJST1JfVE9PX01BTllfTUVTU0FHRVM9IFwiOTA3MTIyMDQzXCIsXHJcblxyXG4gIC8vIFRoZSBtZXNzYWdlIGxpZmV0aW1lIGV4cGlyZXMgYmVmb3JlIHRoZSBtZXNzYWdlIGlzIHN1Y2Nlc3NmdWxseSBzZW50IHRvIHRoZSBBUFAgc2VydmVyLlxyXG4gIEVSUk9SX1RUTF9FWENFRURFRD0gXCI5MDcxMjIwNDRcIixcclxuXHJcbiAgLy8gIEh1YXdlaSBNb2JpbGUgU2VydmljZXMgKEFQSykgY2FuJ3QgY29ubmVjdCAgSHVhd2VpIFB1c2ggIEtpdC5cclxuICBFUlJPUl9ITVNfQ0xJRU5UX0FQST0gXCI5MDcxMjIwNDhcIixcclxuXHJcbiAgLy8gVGhlIGN1cnJlbnQgRU1VSSB2ZXJzaW9uIGlzIHRvbyBlYXJseSB0byB1c2UgdGhlIGNhcGFiaWxpdHkuXHJcbiAgRVJST1JfT1BFUkFUSU9OX05PVF9TVVBQT1JURUQ9IFwiOTA3MTIyMDQ5XCIsXHJcblxyXG4gIC8vIFRoZSBvcGVyYXRpb24gY2Fubm90IGJlIHBlcmZvcm1lZCBpbiB0aGUgbWFpbiB0aHJlYWQuXHJcbiAgRVJST1JfTUFJTl9USFJFQUQ9IFwiOTA3MTIyMDUwXCIsXHJcblxyXG4gIC8vIFRoZSBkZXZpY2UgY2VydGlmaWNhdGUgYXV0aGVudGljYXRpb24gZmFpbHMuXHJcbiAgRVJST1JfSE1TX0RFVklDRV9BVVRIX0ZBSUxFRF9TRUxGX01BUFBJTkc9IFwiOTA3MTIyMDUxXCIsXHJcblxyXG4gIC8vIEZhaWxlZCB0byBiaW5kIHRoZSBzZXJ2aWNlLlxyXG4gIEVSUk9SX0JJTkRfU0VSVklDRV9TRUxGX01BUFBJTkc9IFwiOTA3MTIyMDUyXCIsXHJcblxyXG4gIC8vIFRoZSBTREsgaXMgYmVpbmcgYXV0b21hdGljYWxseSBpbml0aWFsaXplZC4gVHJ5IGFnYWluIGxhdGVyLlxyXG4gIEVSUk9SX0FVVE9fSU5JVElBTElaSU5HPSBcIjkwNzEyMjA1NFwiLFxyXG5cclxuICAvKlRoZSBpbnB1dCBwYXJhbWV0ZXIgaXMgaW5jb3JyZWN0LiBDaGVjayB3aGV0aGVyIHRoZSByZWxhdGVkIGNvbmZpZ3VyYXRpb24gaW5mb3JtYXRpb24gaXMgY29ycmVjdC5cclxuICAgKiBFeGFtcGxlOiBhcHBfaWQgaW4gdGhlIGFnY29ubmVjdCAtIHNlcnZpY2VzLmpzb24gZmlsZTtcclxuICAgKiBDaGVjayB3aGV0aGVyIHRoZSBidWlsZC5ncmFkbGUgZmlsZSBpcyBjb25maWd1cmVkIHdpdGggdGhlIGNlcnRpZmljYXRlIHNpZ25hdHVyZS5cclxuICAgKi9cclxuICBFUlJPUl9BUkdVTUVOVFNfSU5WQUxJRD0gXCI5MDcxMzUwMDBcIixcclxuXHJcbiAgLy8gSW50ZXJuYWwgUHVzaCBlcnJvci4gQ29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQgZW5naW5lZXJzLlxyXG4gIEVSUk9SX0lOVEVSTkFMX0VSUk9SPSBcIjkwNzEzNTAwMVwiLFxyXG5cclxuICAvLyBUaGUgc2VydmljZSBkb2VzIG5vdCBleGlzdC4gVGhlIGludm9rZWQgaW50ZXJmYWNlIGRvZXMgbm90IGV4aXN0LlxyXG4gIEVSUk9SX05BTUlOR19JTlZBTElEPSBcIjkwNzEzNTAwMlwiLFxyXG5cclxuICAvLyBUaGUgQXBpQ2xpZW50IG9iamVjdCBpcyBpbnZhbGlkLlxyXG4gIEVSUk9SX0NMSUVOVF9BUElfSU5WQUxJRD0gXCI5MDcxMzUwMDNcIixcclxuXHJcbiAgLy8gSW52b2tpbmcgQUlETCB0aW1lcyBvdXQuIENvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gIEVSUk9SX0VYRUNVVEVfVElNRU9VVD0gXCI5MDcxMzUwMDRcIixcclxuXHJcbiAgLy8gVGhlIGN1cnJlbnQgYXJlYSBkb2VzIG5vdCBzdXBwb3J0IHRoaXMgc2VydmljZS5cclxuICBFUlJPUl9OT1RfSU5fU0VSVklDRT0gXCI5MDcxMzUwMDVcIixcclxuXHJcbiAgLy8gSWYgdGhlIEFJREwgY29ubmVjdGlvbiBzZXNzaW9uIGlzIGludmFsaWQsIGNvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gIEVSUk9SX1NFU1NJT05fSU5WQUxJRD0gXCI5MDcxMzUwMDZcIixcclxuXHJcbiAgLy8gQW4gZXJyb3Igb2NjdXJyZWQgd2hlbiBpbnZva2luZyBhbiB1bnNwZWNpZmllZCBBUEkuXHJcbiAgRVJST1JfQVBJX05PVF9TUEVDSUZJRUQ9IFwiMTAwMlwiLFxyXG5cclxuICAvKiBGYWlsZWQgdG8gaW52b2tlIHRoZSBnYXRld2F5IHRvIHF1ZXJ5IHRoZSBhcHBsaWNhdGlvbiBzY29wZS5cclxuICAgKiBDaGVjayB3aGV0aGVyIHRoZSBjdXJyZW50IGFwcCBoYXMgYmVlbiBjcmVhdGVkIGFuZCBlbmFibGVkIGluIEFwcEdhbGxlcnkgQ29ubmVjdC5cclxuICAgKiBJZiB5ZXMsIGNvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gICAqL1xyXG4gIEVSUk9SX0dFVF9TQ09QRV9FUlJPUj0gXCI5MDcxMzU3MDBcIixcclxuICAvKiBTY29wZSBpcyBub3QgY29uZmlndXJlZCBvbiB0aGUgQXBwR2FsbGVyeSBDb25uZWN0LlxyXG4gICAqIENoZWNrIHdoZXRoZXIgdGhlIGN1cnJlbnQgYXBwIGhhcyBiZWVuIGNyZWF0ZWQgYW5kIGVuYWJsZWQgaW4gQXBwR2FsbGVyeSBDb25uZWN0LlxyXG4gICAqIElmIHllcywgY29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXHJcbiAgICovXHJcbiAgRVJST1JfU0NPUEVfTElTVF9FTVBUWT0gXCI5MDcxMzU3MDFcIixcclxuXHJcbiAgLyogVGhlIGNlcnRpZmljYXRlIGZpbmdlcnByaW50IGlzIG5vdCBjb25maWd1cmVkIG9uIHRoZSBBcHBHYWxsZXJ5IENvbm5lY3QuXHJcbiAgICogMS4gQ2hlY2sgd2hldGhlciB5b3VyIHBob25lIGNhbiBhY2Nlc3MgdGhlIEludGVybmV0LlxyXG4gICAqIDIuIENoZWNrIHdoZXRoZXIgdGhlIGNvcnJlY3QgY2VydGlmaWNhdGUgZmluZ2VycHJpbnQgaXMgY29uZmlndXJlZCBpbiBBcHBHYWxsZXJ5IENvbm5lY3QuIEZvciBkZXRhaWxzLCBzZWUgQXBwR2FsbGVyeSBDb25uZWN0IGNvbmZpZ3VyYXRpb24gaW4gRGV2ZWxvcG1lbnQgUHJlcGFyYXRpb25zLlxyXG4gICAqIDMuIElmIHRoZSBjaGVjayByZXN1bHQgaXMgY29ycmVjdCwgY29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXHJcbiAgICovXHJcbiAgRVJST1JfQ0VSVF9GSU5HRVJQUklOVF9FTVBUWT0gXCI5MDcxMzU3MDJcIixcclxuXHJcbiAgLy9QZXJtaXNzaW9uIGlzIG5vdCBjb25maWd1cmVkIG9uIHRoZSBBcHBHYWxsZXJ5IENvbm5lY3QuXHJcbiAgRVJST1JfUEVSTUlTU0lPTl9MSVNUX0VNUFRZPSBcIjkwNzEzNTcwM1wiLFxyXG5cclxuICAvLyBUaGUgYXV0aGVudGljYXRpb24gaW5mb3JtYXRpb24gb2YgdGhlIGFwcGxpY2F0aW9uIGRvZXMgbm90IGV4aXN0LlxyXG4gIEVSUk9SX0FVVEhfSU5GT19OT1RfRVhJU1Q9IFwiNjAwMlwiLFxyXG5cclxuICAvLyBBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgY2VydGlmaWNhdGUgZmluZ2VycHJpbnQgdmVyaWZpY2F0aW9uLiBDaGVjayB3aGV0aGVyIHRoZSBjb3JyZWN0IGNlcnRpZmljYXRlIGZpbmdlcnByaW50IGlzIGNvbmZpZ3VyZWQgaW4gQXBwR2FsbGVyeSBDb25uZWN0LiBGb3IgZGV0YWlscywgc2VlIEFwcEdhbGxlcnkgQ29ubmVjdCBjb25maWd1cmF0aW9uIGluIERldmVsb3BtZW50IFByZXBhcmF0aW9ucy5cclxuICBFUlJPUl9DRVJUX0ZJTkdFUlBSSU5UX0VSUk9SPSBcIjYwMDNcIixcclxuXHJcbiAgLy8gSW50ZXJmYWNlIGF1dGhlbnRpY2F0aW9uOiBUaGUgcGVybWlzc2lvbiBkb2VzIG5vdCBleGlzdCBhbmQgaXMgbm90IGFwcGxpZWQgZm9yIGluIEFwcEdhbGxlcnkgQ29ubmVjdC5cclxuICBFUlJPUl9QRVJNSVNTSU9OX05PVF9FWElTVD0gXCI2MDA0XCIsXHJcblxyXG4gIC8vIEludGVyZmFjZSBhdXRoZW50aWNhdGlvbjogdW5hdXRob3JpemVkLlxyXG4gIEVSUk9SX1BFUk1JU1NJT05fTk9UX0FVVEhPUklaRUQ9IFwiNjAwNVwiLFxyXG5cclxuICAvLyBJbnRlcmZhY2UgYXV0aGVudGljYXRpb246IFRoZSBhdXRob3JpemF0aW9uIGV4cGlyZXMuXHJcbiAgRVJST1JfUEVSTUlTU0lPTl9FWFBJUkVEPSBcIjYwMDZcIixcclxufTtcclxuXHJcbmV4cG9ydCBlbnVtIEF0dHIge1xyXG4gIGlkID0gXCJpZFwiLFxyXG4gIG1lc3NhZ2UgPSBcIm1lc3NhZ2VcIixcclxuICBmaXJlRGF0ZSA9IFwiZmlyZURhdGVcIixcclxuICB0aXRsZSA9IFwidGl0bGVcIixcclxuICB0aWNrZXIgPSBcInRpY2tlclwiLFxyXG4gIHNob3dXaGVuID0gXCJzaG93V2hlblwiLFxyXG4gIGF1dG9DYW5jZWwgPSBcImF1dG9DYW5jZWxcIixcclxuICBsYXJnZUljb24gPSBcImxhcmdlSWNvblwiLFxyXG4gIGxhcmdlSWNvblVybCA9IFwibGFyZ2VJY29uVXJsXCIsXHJcbiAgc21hbGxJY29uID0gXCJzbWFsbEljb25cIixcclxuICBiaWdUZXh0ID0gXCJiaWdUZXh0XCIsXHJcbiAgc3ViVGV4dCA9IFwic3ViVGV4dFwiLFxyXG4gIGJpZ1BpY3R1cmVVcmwgPSBcImJpZ1BpY3R1cmVVcmxcIixcclxuICBzaG9ydGN1dElkID0gXCJzaG9ydGN1dElkXCIsXHJcbiAgbnVtYmVyID0gXCJudW1iZXJcIixcclxuICBjaGFubmVsSWQgPSBcImNoYW5uZWxJZFwiLFxyXG4gIGNoYW5uZWxOYW1lID0gXCJjaGFubmVsTmFtZVwiLFxyXG4gIGNoYW5uZWxEZXNjcmlwdGlvbiA9IFwiY2hhbm5lbERlc2NyaXB0aW9uXCIsXHJcbiAgY29sb3IgPSBcImNvbG9yXCIsXHJcbiAgZ3JvdXAgPSBcImdyb3VwXCIsXHJcbiAgZ3JvdXBTdW1tYXJ5ID0gXCJncm91cFN1bW1hcnlcIixcclxuICBwbGF5U291bmQgPSBcInBsYXlTb3VuZFwiLFxyXG4gIHNvdW5kTmFtZSA9IFwic291bmROYW1lXCIsXHJcbiAgdmlicmF0ZSA9IFwidmlicmF0ZVwiLFxyXG4gIHZpYnJhdGVEdXJhdGlvbiA9IFwidmlicmF0ZUR1cmF0aW9uXCIsXHJcbiAgYWN0aW9ucyA9IFwiYWN0aW9uc1wiLFxyXG4gIGludm9rZUFwcCA9IFwiaW52b2tlQXBwXCIsXHJcbiAgdGFnID0gXCJ0YWdcIixcclxuICByZXBlYXRUeXBlID0gXCJyZXBlYXRUeXBlXCIsXHJcbiAgcmVwZWF0VGltZSA9IFwicmVwZWF0VGltZVwiLFxyXG4gIG9uZ29pbmcgPSBcIm9uZ29pbmdcIixcclxuICBhbGxvd1doaWxlSWRsZSA9IFwiYWxsb3dXaGlsZUlkbGVcIixcclxuICBkb250Tm90aWZ5SW5Gb3JlZ3JvdW5kID0gXCJkb250Tm90aWZ5SW5Gb3JlZ3JvdW5kXCIsXHJcbiAgcHJpb3JpdHkgPSBcInByaW9yaXR5XCIsXHJcbiAgaW1wb3J0YW5jZSA9IFwiaW1wb3J0YW5jZVwiLFxyXG4gIHZpc2liaWxpdHkgPSBcInZpc2liaWxpdHlcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBJbXBvcnRhbmNlIHtcclxuICBNQVggPSBcIm1heFwiLFxyXG4gIEhJR0ggPSBcImhpZ2hcIixcclxuICBERUZBVUxUID0gXCJkZWZhdWx0XCIsXHJcbiAgTE9XID0gXCJsb3dcIixcclxuICBNSU4gPSBcIm1pblwiLFxyXG4gIE5PTkUgPSBcIm5vbmVcIixcclxuICBVTlNQRUNJRklFRCA9IFwidW5zcGVjaWZpZWRcIlxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBlbnVtIFByaW9yaXR5IHtcclxuICBNQVggPSBcIm1heFwiLFxyXG4gIEhJR0ggPSBcImhpZ2hcIixcclxuICBERUZBVUxUID0gXCJkZWZhdWx0XCIsXHJcbiAgTE9XID0gXCJsb3dcIixcclxuICBNSU4gPSBcIm1pblwiXHJcbn07XHJcblxyXG5leHBvcnQgZW51bSBSZXBlYXRUeXBlIHtcclxuICBIT1VSID0gXCJob3VyXCIsXHJcbiAgTUlOVVRFID0gXCJtaW51dGVcIixcclxuICBEQVkgPSBcImRheVwiLFxyXG4gIFdFRUsgPSBcIndlZWtcIixcclxuICBDVVNUT01fVElNRSA9IFwiY3VzdG9tX3RpbWVcIlxyXG59O1xyXG5cclxuZXhwb3J0IGVudW0gVmlzaWJpbGl0eSB7XHJcbiAgUFVCTElDID0gXCJwdWJsaWNcIixcclxuICBTRUNSRVQgPSBcInNlY3JldFwiLFxyXG4gIFBSSVZBVEUgPSBcInByaXZhdGVcIlxyXG59O1xyXG5cclxuZXhwb3J0IGVudW0gUmVtb3RlTWVzc2FnZUJ1aWxkZXIge1xyXG4gIFRPID0gXCJ0b1wiLFxyXG4gIE1FU1NBR0VfSUQgPSBcIm1lc3NhZ2VJZFwiLFxyXG4gIE1FU1NBR0VfVFlQRSA9IFwibWVzc2FnZVR5cGVcIixcclxuICBUVEwgPSBcInR0bFwiLFxyXG4gIENPTExBUFNFX0tFWSA9IFwiY29sbGFwc2VLZXlcIixcclxuICBSRUNFSVBUX01PREUgPSBcInJlY2VpcHRNb2RlXCIsXHJcbiAgU0VORF9NT0RFID0gXCJzZW5kTW9kZVwiLFxyXG4gIERBVEEgPSBcImRhdGFcIixcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb3Jkb3ZhUmVtb3RlTWVzc2FnZSB7XHJcblxyXG4gIHN0YXRpYyBJTlNUQU5DRV9JRF9TQ09QRSA9ICdIQ00nO1xyXG5cclxuICBzdGF0aWMgUFJJT1JJVFlfVU5LTk9XTiA9IDA7XHJcbiAgc3RhdGljIFBSSU9SSVRZX0hJR0ggPSAxO1xyXG4gIHN0YXRpYyBQUklPUklUWV9OT1JNQUwgPSAyO1xyXG5cclxuICBzdGF0aWMgQ09MTEFQU0VLRVk9ICdjb2xsYXBzZUtleSc7XHJcbiAgc3RhdGljIERBVEE9ICdkYXRhJztcclxuICBzdGF0aWMgREFUQU9GTUFQPSAnZGF0YU9mTWFwJztcclxuICBzdGF0aWMgTUVTU0FHRUlEPSAnbWVzc2FnZUlkJztcclxuICBzdGF0aWMgTUVTU0FHRVRZUEU9ICdtZXNzYWdlVHlwZSc7XHJcbiAgc3RhdGljIE9SSUdJTkFMVVJHRU5DWT0gJ29yaWdpbmFsVXJnZW5jeSc7XHJcbiAgc3RhdGljIFVSR0VOQ1k9ICAndXJnZW5jeSc7XHJcbiAgc3RhdGljIFRUTD0gJ3R0bCc7XHJcbiAgc3RhdGljIFNFTlRUSU1FPSAgJ3NlbnRUaW1lJztcclxuICBzdGF0aWMgVE89ICd0byc7XHJcbiAgc3RhdGljIEZST009ICdmcm9tJztcclxuICBzdGF0aWMgVE9LRU49ICAndG9rZW4nO1xyXG5cclxuICBzdGF0aWMgTk9USUZJQ0FUSU9OID0ge1xyXG4gICAgICBUSVRMRTogJ3RpdGxlJyxcclxuICAgICAgVElUTEVMT0NBTElaQVRJT05LRVk6ICd0aXRsZUxvY2FsaXphdGlvbktleScsXHJcbiAgICAgIFRJVExFTE9DQUxJWkFUSU9OQVJHUzogJ3RpdGxlTG9jYWxpemF0aW9uQXJncycsXHJcbiAgICAgIEJPRFlMT0NBTElaQVRJT05LRVk6ICdib2R5TG9jYWxpemF0aW9uS2V5JyxcclxuICAgICAgQk9EWUxPQ0FMSVpBVElPTkFSR1M6ICdib2R5TG9jYWxpemF0aW9uQXJncycsXHJcbiAgICAgIEJPRFk6ICdib2R5JyxcclxuICAgICAgSUNPTjogJ2ljb24nLFxyXG4gICAgICBTT1VORDogJ1NvdW5kJyxcclxuICAgICAgVEFHOiAnVGFnJyxcclxuICAgICAgQ09MT1I6ICdDb2xvcicsXHJcbiAgICAgIENMSUNLQUNUSU9OOiAnQ2xpY2tBY3Rpb24nLFxyXG4gICAgICBDSEFOTkVMSUQ6ICdDaGFubmVsSWQnLFxyXG4gICAgICBJTUFHRVVSTDogJ0ltYWdlVXJsJyxcclxuICAgICAgTElOSzogJ0xpbmsnLFxyXG4gICAgICBOT1RJRllJRDogJ05vdGlmeUlkJyxcclxuICAgICAgV0hFTjogJ1doZW4nLFxyXG4gICAgICBMSUdIVFNFVFRJTkdTOiAnTGlnaHRTZXR0aW5ncycsXHJcbiAgICAgIEJBREdFTlVNQkVSOiAnQmFkZ2VOdW1iZXInLFxyXG4gICAgICBJTVBPUlRBTkNFOiAnSW1wb3J0YW5jZScsXHJcbiAgICAgIFRJQ0tFUjogJ1RpY2tlcicsXHJcbiAgICAgIFZJQlJBVEVDT05GSUc6ICd2aWJyYXRlQ29uZmlnJyxcclxuICAgICAgVklTSUJJTElUWTogJ3Zpc2liaWxpdHknLFxyXG4gICAgICBJTlRFTlRVUkk6ICdpbnRlbnRVcmknLFxyXG4gICAgICBJU0FVVE9DQU5DRUw6ICdpc0F1dG9DYW5jZWwnLFxyXG4gICAgICBJU0xPQ0FMT05MWTogJ2lzTG9jYWxPbmx5JyxcclxuICAgICAgSVNERUZBVUxUTElHSFQ6ICdpc0RlZmF1bHRMaWdodCcsXHJcbiAgICAgIElTREVGQVVMVFNPVU5EOiAnaXNEZWZhdWx0U291bmQnLFxyXG4gICAgICBJU0RFRkFVTFRWSUJSQVRFOiAnaXNEZWZhdWx0VmlicmF0ZScsXHJcbiAgfTtcclxuICByZW1vdGVNc2c6YW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcclxuICAgICAgdGhpcy5yZW1vdGVNc2cgPSBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBwYXJzZSBhbGwgZWxlbWVudCx1bm9yZGVyZWRcclxuICAgKi9cclxuICBwYXJzZU1zZ0FsbEF0dHJpYnV0ZSgpIHtcclxuICAgICAgbGV0IHB1c2hSZXN1bHQgPSAnJztcclxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5yZW1vdGVNc2cpIHtcclxuICAgICAgICAgIHB1c2hSZXN1bHQgPSBwdXNoUmVzdWx0ICsga2V5ICsgJyA6ICcgKyB0aGlzLnJlbW90ZU1zZ1trZXldICsgJ1xcbic7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHB1c2hSZXN1bHQ7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIGdldENvbGxhcHNlS2V5KCkgT2J0YWlucyB0aGUgY2xhc3NpZmljYXRpb24gaWRlbnRpZmllciAoY29sbGFwc2Uga2V5KSBvZiBhIG1lc3NhZ2UuXHJcbiAgICovXHJcbiAgZ2V0Q29sbGFwc2VLZXkoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5DT0xMQVBTRUtFWV07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIGdldERhdGEoKSBPYnRhaW5zIHZhbGlkIGNvbnRlbnQgZGF0YSBvZiBhIG1lc3NhZ2UuXHJcbiAgICovXHJcbiAgZ2V0RGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLkRBVEFdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBnZXREYXRhT2ZNYXAoKSBhIG1lc3NhZ2UgbWFwLlxyXG4gICAqL1xyXG4gIGdldERhdGFPZk1hcCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLkRBVEFPRk1BUF07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIGdldE1lc3NhZ2VJZCgpIE9idGFpbnMgdGhlIElEIG9mIGEgbWVzc2FnZS5cclxuICAgKi9cclxuICBnZXRNZXNzYWdlSWQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5NRVNTQUdFSURdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBnZXRNZXNzYWdlVHlwZSgpIE9idGFpbnMgdGhlIHR5cGUgb2YgYSBtZXNzYWdlLlxyXG4gICAqL1xyXG4gIGdldE1lc3NhZ2VUeXBlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTUVTU0FHRVRZUEVdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBnZXRPcmlnaW5hbFVyZ2VuY3koKSBPYnRhaW5zIHRoZSBvcmlnaW5hbCBwcmlvcml0eSBvZiBhIG1lc3NhZ2UuXHJcbiAgICovXHJcbiAgZ2V0T3JpZ2luYWxVcmdlbmN5KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuT1JJR0lOQUxVUkdFTkNZXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogZ2V0VXJnZW5jeSgpIE9idGFpbnMgcHJpb3JpdHkgb2YgYSBtZXNzYWdlLlxyXG4gICAqL1xyXG4gIGdldFVyZ2VuY3koKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5VUkdFTkNZXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogZ2V0VHRsKCkgT2J0YWlucyB2YWxpZCBnZXRUdGwgb2YgYSBtZXNzYWdlLlxyXG4gICAqL1xyXG4gIGdldFR0bCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLlRUTF07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIGdldFNlbnRUaW1lKCkgT2J0YWlucyB0aGUgdGltZSB3aGVuIGEgbWVzc2FnZSBpcyBzZW50IGZyb20gdGhlIHNlcnZlci5cclxuICAgKi9cclxuICBnZXRTZW50VGltZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLlNFTlRUSU1FXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogZ2V0VG8oKSBPYnRhaW5zIHRoZSByZWNpcGllbnQgb2YgYSBtZXNzYWdlLlxyXG4gICAqL1xyXG4gIGdldFRvKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuVE9dO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBnZXRGcm9tKCkgT2J0YWlucyB0aGUgc2VuZGVyIG9mIGEgbWVzc2FnZS5cclxuICAgKi9cclxuICBnZXRGcm9tKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuRlJPTV07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIGdldFRva2VuKCkgT2J0YWlucyB2YWxpZCB0b2tlblxyXG4gICAqL1xyXG4gIGdldFRva2VuKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuVE9LRU5dO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0VGl0bGUoKSBPYnRhaW5zIHRoZSB0aXRsZSBvZiBhIG1lc3NhZ2VcclxuICAgKi9cclxuICBnZXROb3RpZmljYXRpb25UaXRsZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5USVRMRV07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRUaXRsZUxvY2FsaXphdGlvbktleSgpIE9idGFpbnMgdGhlIGtleSBvZiB0aGUgZGlzcGxheWVkIHRpdGxlIG9mIGEgbm90aWZpY2F0aW9uIG1lc3NhZ2VcclxuICAgKi9cclxuICBnZXRUaXRsZUxvY2FsaXphdGlvbktleSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5USVRMRUxPQ0FMSVpBVElPTktFWV07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRUaXRsZUxvY2FsaXphdGlvbkFyZ3MoKSBPYnRhaW5zIHZhcmlhYmxlIHBhcmFtZXRlcnMgb2YgdGhlIGRpc3BsYXllZCB0aXRsZSBvZiBhIG1lc3NhZ2VcclxuICAgKi9cclxuICBnZXRUaXRsZUxvY2FsaXphdGlvbkFyZ3MoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tcclxuICAgICAgICAgIENvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5USVRMRUxPQ0FMSVpBVElPTkFSR1NcclxuICAgICAgICAgIF07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRCb2R5TG9jYWxpemF0aW9uS2V5KCkgT2J0YWlucyB0aGUga2V5IG9mIHRoZSBkaXNwbGF5ZWQgY29udGVudCBvZiBhIG1lc3NhZ2VcclxuICAgKi9cclxuICBnZXRCb2R5TG9jYWxpemF0aW9uS2V5KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkJPRFlMT0NBTElaQVRJT05LRVldO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0Qm9keUxvY2FsaXphdGlvbkFyZ3MoKSBPYnRhaW5zIHZhcmlhYmxlIHBhcmFtZXRlcnMgb2YgdGhlIGRpc3BsYXllZCBjb250ZW50IG9mIGEgbWVzc2FnZVxyXG4gICAqL1xyXG4gIGdldEJvZHlMb2NhbGl6YXRpb25BcmdzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkJPRFlMT0NBTElaQVRJT05BUkdTXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldEJvZHkoKSBPYnRhaW5zIHRoZSBib2R5IG9mIGEgbWVzc2FnZVxyXG4gICAqL1xyXG4gIGdldEJvZHkoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uQk9EWV07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRJY29uKCkgT2J0YWlucyB0aGUgaWNvbiBvZiBhIG1lc3NhZ2VcclxuICAgKi9cclxuICBnZXRJY29uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklDT05dO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0U291bmQoKSBPYnRhaW5zIHRoZSBzb3VuZCBmcm9tIGEgbWVzc2FnZVxyXG4gICAqL1xyXG4gIGdldFNvdW5kKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLlNPVU5EXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldFRhZygpIE9idGFpbnMgdGhlIHRhZyBmcm9tIGEgbWVzc2FnZSBmb3IgbWVzc2FnZSBvdmVyd3JpdGluZ1xyXG4gICAqL1xyXG4gIGdldFRhZygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5UQUddO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0Q29sb3IoKSBPYnRhaW5zIHRoZSBjb2xvcnMgb2YgaWNvbnMgaW4gYSBtZXNzYWdlXHJcbiAgICovXHJcbiAgZ2V0Q29sb3IoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uQ09MT1JdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0Q2xpY2tBY3Rpb24oKSBPYnRhaW5zIGFjdGlvbnMgdHJpZ2dlcmVkIGJ5IG1lc3NhZ2UgdGFwcGluZ1xyXG4gICAqL1xyXG4gIGdldENsaWNrQWN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkNMSUNLQUNUSU9OXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldENoYW5uZWxJZCgpIE9idGFpbnMgSURzIG9mIGNoYW5uZWxzIHRoYXQgc3VwcG9ydCB0aGUgZGlzcGxheSBvZiBtZXNzYWdlc1xyXG4gICAqL1xyXG4gIGdldENoYW5uZWxJZCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5DSEFOTkVMSURdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0SW1hZ2VVcmwoKSBPYnRhaW5zIHRoZSBpbWFnZSBVUkwgZnJvbSBhIG1lc3NhZ2VcclxuICAgKi9cclxuICBnZXRJbWFnZVVybCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JTUFHRVVSTF07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRMaW5rKCkgT2J0YWlucyB0aGUgVVJMIHRvIGJlIGFjY2Vzc2VkIGZyb20gYSBtZXNzYWdlXHJcbiAgICovXHJcbiAgZ2V0TGluaygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5MSU5LXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldE5vdGlmeUlkKCkgT2J0YWlucyB0aGUgdW5pcXVlIElEIG9mIGEgbWVzc2FnZVxyXG4gICAqL1xyXG4gIGdldE5vdGlmeUlkKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLk5PVElGWUlEXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldFdoZW4oKVxyXG4gICAqL1xyXG4gIGdldFdoZW4oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uV0hFTl07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRMaWdodFNldHRpbmdzKClcclxuICAgKi9cclxuICBnZXRMaWdodFNldHRpbmdzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkxJR0hUU0VUVElOR1NdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0QmFkZ2VOdW1iZXIoKVxyXG4gICAqL1xyXG4gIGdldEJhZGdlTnVtYmVyKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkJBREdFTlVNQkVSXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldEltcG9ydGFuY2UoKVxyXG4gICAqL1xyXG4gIGdldEltcG9ydGFuY2UoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSU1QT1JUQU5DRV07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRUaWNrZXIoKVxyXG4gICAqL1xyXG4gIGdldFRpY2tlcigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5USUNLRVJdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0VmlicmF0ZUNvbmZpZygpXHJcbiAgICovXHJcbiAgZ2V0VmlicmF0ZUNvbmZpZygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5WSUJSQVRFQ09ORklHXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldFZpc2liaWxpdHkoKVxyXG4gICAqL1xyXG4gIGdldFZpc2liaWxpdHkoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVklTSUJJTElUWV07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRJbnRlbnRVcmkoKVxyXG4gICAqL1xyXG4gIGdldEludGVudFVyaSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JTlRFTlRVUkldO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246aXNBdXRvQ2FuY2VsKClcclxuICAgKi9cclxuICBpc0F1dG9DYW5jZWwoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSVNBVVRPQ0FOQ0VMXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldEludGVudFVyaSgpXHJcbiAgICovXHJcbiAgaXNMb2NhbE9ubHkoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSVNMT0NBTE9OTFldO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246aXNEZWZhdWx0TGlnaHQoKVxyXG4gICAqL1xyXG4gIGlzRGVmYXVsdExpZ2h0KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklTREVGQVVMVExJR0hUXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmlzRGVmYXVsdFNvdW5kKClcclxuICAgKi9cclxuICBpc0RlZmF1bHRTb3VuZCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JU0RFRkFVTFRTT1VORF07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjppc0RlZmF1bHRWaWJyYXRlKClcclxuICAgKi9cclxuICBpc0RlZmF1bHRWaWJyYXRlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklTREVGQVVMVFZJQlJBVEVdO1xyXG4gIH1cclxufVxyXG5cclxudHlwZSBMb2NhbE5vdGlmaWNhdGlvbk9iamVjdCA9IHtcclxuICBba2V5IGluIEF0dHJdPzogYW55O1xyXG59O1xyXG5cclxudHlwZSBSZW1vdGVNZXNzYWdlT2JqZWN0PXtcclxuICBba2V5IGluIFJlbW90ZU1lc3NhZ2VCdWlsZGVyXT86YW55O1xyXG59XHJcblxyXG4iXX0=