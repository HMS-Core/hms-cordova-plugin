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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from "@awesome-cordova-plugins/core";
var HmsPushOriginal = /** @class */ (function (_super) {
    __extends(HmsPushOriginal, _super);
    function HmsPushOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.HmsPushResultCode = HmsPushResultCode;
        _this.CordovaRemoteMessage = CordovaRemoteMessage;
        _this.RemoteMessageBuilder = RemoteMessageBuilder;
        _this.DEFAULT_TOKEN_SCOPE = "HCM";
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
    HmsPushOriginal.prototype.getToken = function (scope) { return cordova(this, "getToken", { "otherPromise": true }, arguments); };
    /**
     * Obtains a token that a target app developer applies for a sender to integrate Push Kit in the multi-sender scenario.
     * @returns Promise<string>
     * @params subjectId ? : String
     */
    HmsPushOriginal.prototype.getTokenWithSubjectId = function (subjectId) { return cordova(this, "getTokenWithSubjectId", { "otherPromise": true }, arguments); };
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
    HmsPushOriginal.prototype.deleteToken = function (scope) { return cordova(this, "deleteToken", { "otherPromise": true }, arguments); };
    /**
     * Deletes a token that a target app developer applies for a sender to integrate Push Kit in the multi-sender scenario.
     * @returns Promise<string>
     * @params subjectId ? : String
     */
    HmsPushOriginal.prototype.deleteTokenWithSubjectId = function (subjectId) { return cordova(this, "deleteTokenWithSubjectId", { "otherPromise": true }, arguments); };
    /**
     * This method is used to subscribe to topics in asynchronous mode. The HUAWEI Push Kit topic messaging function allows you to send messages to multiple devices whose users have subscribed to a specific topic. You can write messages about the topic as required, and HUAWEI Push Kit determines the release path and sends messages to the correct devices in a reliable manner.
     * @param {string} topic Topic to be subscribed to.
     * @returns Promise<string>
     */
    HmsPushOriginal.prototype.subscribe = function (topic) { return cordova(this, "subscribe", { "otherPromise": true }, arguments); };
    /**
     * This method is used to unsubscribe from topics that are subscribed to through the subscribe method.
     * @param {string} topic Topic to be unsubscribed to.
     * @returns Promise<string>
     */
    HmsPushOriginal.prototype.unsubscribe = function (topic) { return cordova(this, "unsubscribe", { "otherPromise": true }, arguments); };
    /**
     * Sets whether to enable automatic initialization. If the enable parameter is set to true, the SDK automatically generates an AAID and applies for a token.
     * @returns Promise<boolean>
     * @param {boolean} enabled Indicates whether to enable automatic initialization.
     */
    HmsPushOriginal.prototype.setAutoInitEnabled = function (enabled) { return cordova(this, "setAutoInitEnabled", { "otherPromise": true }, arguments); };
    HmsPushOriginal.prototype.getOdid = function () { return cordova(this, "getOdid", { "otherPromise": true }, arguments); };
    /**
     * This method is used to check whether automatic initialization is enabled.
     * @returns Promise<string>
     */
    HmsPushOriginal.prototype.isAutoInitEnabled = function () { return cordova(this, "isAutoInitEnabled", { "otherPromise": true }, arguments); };
    HmsPushOriginal.prototype.getInitialNotification = function () { return cordova(this, "getInitialNotification", { "otherPromise": true }, arguments); };
    HmsPushOriginal.prototype.sendRemoteMessage = function (remoteMessage) { return cordova(this, "sendRemoteMessage", { "otherPromise": true }, arguments); };
    HmsPushOriginal.prototype.setBackgroundFile = function (filePath) { return cordova(this, "setBackgroundFile", { "otherPromise": true }, arguments); };
    HmsPushOriginal.prototype.setItem = function (key, value) { return cordova(this, "setItem", { "otherPromise": true }, arguments); };
    HmsPushOriginal.prototype.getItem = function (key) { return cordova(this, "getItem", { "otherPromise": true }, arguments); };
    HmsPushOriginal.prototype.removeItem = function (key) { return cordova(this, "removeItem", { "otherPromise": true }, arguments); };
    HmsPushOriginal.prototype.removeBackgroundFile = function () { return cordova(this, "removeBackgroundFile", { "otherPromise": true }, arguments); };
    HmsPushOriginal.pluginName = "HmsPush";
    HmsPushOriginal.plugin = "@hmscore/cordova-plugin-hms-push";
    HmsPushOriginal.pluginRef = "HmsPush";
    HmsPushOriginal.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HmsPushOriginal.platforms = ["Android"];
    return HmsPushOriginal;
}(AwesomeCordovaNativePlugin));
var HmsPush = new HmsPushOriginal();
export { HmsPush };
var HmsLocalNotificationOriginal = /** @class */ (function (_super) {
    __extends(HmsLocalNotificationOriginal, _super);
    function HmsLocalNotificationOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Attr = Attr;
        _this.Importance = Importance;
        _this.Priority = Priority;
        _this.RepeatType = RepeatType;
        _this.Visibility = Visibility;
        return _this;
    }
    HmsLocalNotificationOriginal.prototype.localNotification = function (localNotification) { return cordova(this, "localNotification", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.prototype.localNotificationSchedule = function (localNotification) { return cordova(this, "localNotificationSchedule", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.prototype.cancelAllNotifications = function () { return cordova(this, "cancelAllNotifications", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.prototype.cancelNotifications = function () { return cordova(this, "cancelNotifications", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.prototype.cancelScheduledNotifications = function () { return cordova(this, "cancelScheduledNotifications", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.prototype.cancelNotificationsWithId = function (id) { return cordova(this, "cancelNotificationsWithId", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.prototype.cancelNotificationsWithIdTag = function (idTag) { return cordova(this, "cancelNotificationsWithIdTag", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.prototype.cancelNotificationsWithTag = function (tag) { return cordova(this, "cancelNotificationsWithTag", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.prototype.getNotifications = function () { return cordova(this, "getNotifications", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.prototype.getScheduledNotifications = function () { return cordova(this, "getScheduledNotifications", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.prototype.getChannels = function () { return cordova(this, "getChannels", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.prototype.channelExists = function (channelId) { return cordova(this, "channelExists", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.prototype.channelBlocked = function (channelId) { return cordova(this, "channelBlocked", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.prototype.deleteChannel = function (channelId) { return cordova(this, "deleteChannel", { "otherPromise": true }, arguments); };
    HmsLocalNotificationOriginal.pluginName = "HmsLocalNotification";
    HmsLocalNotificationOriginal.plugin = "@hmscore/cordova-plugin-hms-push";
    HmsLocalNotificationOriginal.pluginRef = "HmsLocalNotification";
    HmsLocalNotificationOriginal.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HmsLocalNotificationOriginal.platforms = ["Android"];
    return HmsLocalNotificationOriginal;
}(AwesomeCordovaNativePlugin));
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
        _this.ON_MULTI_SENDER_TOKEN_ERROR_EVENT = "ON_MULTI_SENDER_TOKEN_ERROR_EVENT";
        _this.ON_MULTI_SENDER_TOKEN_RECEIVED_EVENT = "ON_MULTI_SENDER_TOKEN_RECEIVED_EVENT";
        return _this;
    }
    HmsPushEventOriginal.prototype.onRemoteMessageReceived = function (callback) { return cordova(this, "onRemoteMessageReceived", { "otherPromise": true }, arguments); };
    HmsPushEventOriginal.prototype.onTokenReceived = function (callback) { return cordova(this, "onTokenReceived", { "otherPromise": true }, arguments); };
    HmsPushEventOriginal.prototype.onTokenError = function (callback) { return cordova(this, "onTokenError", { "otherPromise": true }, arguments); };
    HmsPushEventOriginal.prototype.onPushMessageSent = function (callback) { return cordova(this, "onPushMessageSent", { "otherPromise": true }, arguments); };
    HmsPushEventOriginal.prototype.onPushMessageSentError = function (callback) { return cordova(this, "onPushMessageSentError", { "otherPromise": true }, arguments); };
    HmsPushEventOriginal.prototype.onPushMessageSentDelivered = function (callback) { return cordova(this, "onPushMessageSentDelivered", { "otherPromise": true }, arguments); };
    HmsPushEventOriginal.prototype.onLocalNotificationAction = function (callback) { return cordova(this, "onLocalNotificationAction", { "otherPromise": true }, arguments); };
    HmsPushEventOriginal.prototype.onNotificationOpenedApp = function (callback) { return cordova(this, "onNotificationOpenedApp", { "otherPromise": true }, arguments); };
    HmsPushEventOriginal.prototype.onMultiSenderTokenReceivedEvent = function (callback) { return cordova(this, "onMultiSenderTokenReceivedEvent", { "otherPromise": true }, arguments); };
    HmsPushEventOriginal.prototype.onMultiSenderTokenErrorEvent = function (callback) { return cordova(this, "onMultiSenderTokenErrorEvent", { "otherPromise": true }, arguments); };
    HmsPushEventOriginal.pluginName = "HmsPushEvent";
    HmsPushEventOriginal.plugin = "@hmscore/cordova-plugin-hms-push";
    HmsPushEventOriginal.pluginRef = "HmsPushEvent";
    HmsPushEventOriginal.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HmsPushEventOriginal.platforms = ["Android"];
    return HmsPushEventOriginal;
}(AwesomeCordovaNativePlugin));
var HmsPushEvent = new HmsPushEventOriginal();
export { HmsPushEvent };
var HmsPushProfileOriginal = /** @class */ (function (_super) {
    __extends(HmsPushProfileOriginal, _super);
    function HmsPushProfileOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.HUAWEI_PROFILE = 1;
        _this.CUSTOM_PROFILE = 2;
        _this.UNDEFINED_PROFILE = -1;
        return _this;
    }
    /**
     *
     */
    HmsPushProfileOriginal.prototype.isSupportProfile = function () { return cordova(this, "isSupportProfile", { "otherPromise": true }, arguments); };
    HmsPushProfileOriginal.prototype.addProfile = function (type, profileId) { return cordova(this, "addProfile", { "otherPromise": true }, arguments); };
    HmsPushProfileOriginal.prototype.addProfileWithSubjectId = function (subjectId, type, profileId) { return cordova(this, "addProfileWithSubjectId", { "otherPromise": true }, arguments); };
    HmsPushProfileOriginal.prototype.deleteProfile = function (profileId) { return cordova(this, "deleteProfile", { "otherPromise": true }, arguments); };
    HmsPushProfileOriginal.prototype.deleteProfileWithSubjectId = function (subjectId, profileId) { return cordova(this, "deleteProfileWithSubjectId", { "otherPromise": true }, arguments); };
    HmsPushProfileOriginal.pluginName = "HmsPushProfile";
    HmsPushProfileOriginal.plugin = "@hmscore/cordova-plugin-hms-push";
    HmsPushProfileOriginal.pluginRef = "HmsPushProfile";
    HmsPushProfileOriginal.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HmsPushProfileOriginal.platforms = ["Android"];
    return HmsPushProfileOriginal;
}(AwesomeCordovaNativePlugin));
var HmsPushProfile = new HmsPushProfileOriginal();
export { HmsPushProfile };
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
    // Permission is not configured on the AppGallery Connect.
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
    Attr["data"] = "data";
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
export var Priority;
(function (Priority) {
    Priority["MAX"] = "max";
    Priority["HIGH"] = "high";
    Priority["DEFAULT"] = "default";
    Priority["LOW"] = "low";
    Priority["MIN"] = "min";
})(Priority || (Priority = {}));
export var RepeatType;
(function (RepeatType) {
    RepeatType["HOUR"] = "hour";
    RepeatType["MINUTE"] = "minute";
    RepeatType["DAY"] = "day";
    RepeatType["WEEK"] = "week";
    RepeatType["CUSTOM_TIME"] = "custom_time";
})(RepeatType || (RepeatType = {}));
export var Visibility;
(function (Visibility) {
    Visibility["PUBLIC"] = "public";
    Visibility["SECRET"] = "secret";
    Visibility["PRIVATE"] = "private";
})(Visibility || (Visibility = {}));
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
var CordovaRemoteMessage = /** @class */ (function () {
    function CordovaRemoteMessage(options) {
        if (options === void 0) { options = {}; }
        this.remoteMsg = options;
    }
    /*
     * parse all element,unordered
     */
    CordovaRemoteMessage.prototype.parseMsgAllAttribute = function () {
        var pushResult = "";
        for (var key in this.remoteMsg) {
            pushResult = pushResult + key + " : " + this.remoteMsg[key] + "\n";
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
    CordovaRemoteMessage.prototype.getAnalyticInfo = function () {
        return this.remoteMsg[CordovaRemoteMessage.ANALYTICINFO];
    };
    CordovaRemoteMessage.prototype.getAnalyticInfoMap = function () {
        return this.remoteMsg[CordovaRemoteMessage.ANALYTICINFOMAP];
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
    CordovaRemoteMessage.INSTANCE_ID_SCOPE = "HCM";
    CordovaRemoteMessage.PRIORITY_UNKNOWN = 0;
    CordovaRemoteMessage.PRIORITY_HIGH = 1;
    CordovaRemoteMessage.PRIORITY_NORMAL = 2;
    CordovaRemoteMessage.COLLAPSEKEY = "collapseKey";
    CordovaRemoteMessage.DATA = "data";
    CordovaRemoteMessage.DATAOFMAP = "dataOfMap";
    CordovaRemoteMessage.MESSAGEID = "messageId";
    CordovaRemoteMessage.MESSAGETYPE = "messageType";
    CordovaRemoteMessage.ORIGINALURGENCY = "originalUrgency";
    CordovaRemoteMessage.URGENCY = "urgency";
    CordovaRemoteMessage.TTL = "ttl";
    CordovaRemoteMessage.SENTTIME = "sentTime";
    CordovaRemoteMessage.TO = "to";
    CordovaRemoteMessage.FROM = "from";
    CordovaRemoteMessage.TOKEN = "token";
    CordovaRemoteMessage.ANALYTICINFO = "analyticInfo";
    CordovaRemoteMessage.ANALYTICINFOMAP = "analyticInfoMap";
    CordovaRemoteMessage.NOTIFICATION = {
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
    return CordovaRemoteMessage;
}());
export { CordovaRemoteMessage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmF0aXZlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQVUvRCwyQkFBMEI7OztRQUNuRCx1QkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUN0QywwQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztRQUM1QywwQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztRQUM1Qyx5QkFBbUIsR0FBRyxLQUFLLENBQUM7OztJQUU1Qjs7O09BR0c7SUFDSCxzQkFBSTtJQUtKLDhCQUFZO0lBS1osK0JBQWE7SUFLYjs7O09BR0c7SUFDSCw0QkFBVTtJQUtWOzs7T0FHRztJQUNILDZCQUFXO0lBS1g7OztPQUdHO0lBQ0gsdUJBQUs7SUFLTDs7O09BR0c7SUFDSCx5QkFBTztJQUtQOzs7O09BSUc7SUFDSCwwQkFBUSxhQUFDLEtBQWM7SUFLdkI7Ozs7T0FJRztJQUNILHVDQUFxQixhQUFDLFNBQWlCO0lBS3ZDOzs7T0FHRztJQUNILGlDQUFlO0lBS2Y7OztPQUdHO0lBQ0gsNEJBQVU7SUFLVjs7OztPQUlHO0lBQ0gsNkJBQVcsYUFBQyxLQUFjO0lBSzFCOzs7O09BSUc7SUFDSCwwQ0FBd0IsYUFBQyxTQUFpQjtJQUsxQzs7OztPQUlHO0lBQ0gsMkJBQVMsYUFBQyxLQUFhO0lBS3ZCOzs7O09BSUc7SUFDSCw2QkFBVyxhQUFDLEtBQWE7SUFLekI7Ozs7T0FJRztJQUNILG9DQUFrQixhQUFDLE9BQWdCO0lBS25DLHlCQUFPO0lBS1A7OztPQUdHO0lBQ0gsbUNBQWlCO0lBS2pCLHdDQUFzQjtJQUt0QixtQ0FBaUIsYUFBQyxhQUFrQztJQUtwRCxtQ0FBaUIsYUFBQyxRQUFnQjtJQUtsQyx5QkFBTyxhQUFDLEdBQVcsRUFBRSxLQUFhO0lB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LGVBQWU7UUFDOUIsV0FBVyxFQUFFLGFBQWE7UUFDMUIsVUFBVSxFQUFFLFlBQVk7UUFDeEIsTUFBTSxFQUFFLFFBQVE7UUFDaEIsYUFBYSxFQUFFLGVBQWU7UUFDOUIsVUFBVSxFQUFFLFlBQVk7UUFDeEIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsWUFBWSxFQUFFLGNBQWM7UUFDNUIsV0FBVyxFQUFFLGFBQWE7UUFDMUIsY0FBYyxFQUFFLGdCQUFnQjtRQUNoQyxjQUFjLEVBQUUsZ0JBQWdCO1FBQ2hDLGdCQUFnQixFQUFFLGtCQUFrQjtLQUN2QyxDQUFDOytCQXJzQk47O1NBa3BCTSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgQ29weXJpZ2h0IDIwMjAtMjAyNC4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuXHJcbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXHJcbiAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuXHJcbiAgICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gXCJAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZVwiO1xyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiBcIkhtc1B1c2hcIixcclxuICAgIHBsdWdpbjogXCJAaG1zY29yZS9jb3Jkb3ZhLXBsdWdpbi1obXMtcHVzaFwiLFxyXG4gICAgcGx1Z2luUmVmOiBcIkhtc1B1c2hcIixcclxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxyXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIbXNQdXNoIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gICAgSG1zUHVzaFJlc3VsdENvZGUgPSBIbXNQdXNoUmVzdWx0Q29kZTtcclxuICAgIENvcmRvdmFSZW1vdGVNZXNzYWdlID0gQ29yZG92YVJlbW90ZU1lc3NhZ2U7XHJcbiAgICBSZW1vdGVNZXNzYWdlQnVpbGRlciA9IFJlbW90ZU1lc3NhZ2VCdWlsZGVyO1xyXG4gICAgREVGQVVMVF9UT0tFTl9TQ09QRSA9IFwiSENNXCI7XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCAgaW5pdGlhbGl6ZWQgSG1zUHVzaC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cclxuICAgICAqL1xyXG4gICAgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGVuYWJsZUxvZ2dlcigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGRpc2FibGVMb2dnZXIoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gZGlzYWJsZSB0aGUgZGlzcGxheSBvZiBub3RpZmljYXRpb24gbWVzc2FnZXMuIElmIHlvdSB3YW50IHRvIGNvbnRyb2wgdGhlIGRpc3BsYXkgb2Ygbm90aWZpY2F0aW9uIG1lc3NhZ2VzIGluIGFuIGFwcCwgeW91IGNhbiBjYWxsIHRoaXMgbWV0aG9kLiBUaGlzIG1ldGhvZCBhcHBsaWVzIHRvIG5vdGlmaWNhdGlvbiBtZXNzYWdlcyBidXQgbm90IGRhdGEgbWVzc2FnZXMuIEl0IGlzIHRoZSBhcHAgdGhhdCBkZXRlcm1pbmVzIHdoZXRoZXIgdG8gZW5hYmxlIG9yIGRpc2FibGUgZGF0YSBtZXNzYWdpbmcuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgICAqL1xyXG4gICAgdHVybk9uUHVzaCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBlbmFibGUgdGhlIGRpc3BsYXkgb2Ygbm90aWZpY2F0aW9uIG1lc3NhZ2VzLiBJZiB5b3Ugd2FudCB0byBjb250cm9sIHRoZSBkaXNwbGF5IG9mIG5vdGlmaWNhdGlvbiBtZXNzYWdlcyBpbiBhbiBhcHAsIHlvdSBjYW4gY2FsbCB0aGlzIG1ldGhvZC4gVGhpcyBtZXRob2QgYXBwbGllcyB0byBub3RpZmljYXRpb24gbWVzc2FnZXMgYnV0IG5vdCBkYXRhIG1lc3NhZ2VzLiBJdCBpcyB0aGUgYXBwIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGVuYWJsZSBvciBkaXNhYmxlIGRhdGEgbWVzc2FnaW5nLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICAgKi9cclxuICAgIHR1cm5PZmZQdXNoKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIG9idGFpbiBhbiBBQUlEIGluIHN5bmNocm9ub3VzIG1vZGUuIEJlZm9yZSBhcHBseWluZyBmb3IgYSB0b2tlbiwgYW4gYXBwIGNhbGxzIHRoaXMgbWV0aG9kIHRvIG9idGFpbiBpdHMgdW5pcXVlIEFBSUQuIFRoZSBIVUFXRUkgUHVzaCBzZXJ2ZXIgZ2VuZXJhdGVzIGEgdG9rZW4gZm9yIHRoZSBhcHAgYmFzZWQgb24gdGhlIEFBSUQuIElmIHRoZSBBQUlEIG9mIHRoZSBhcHAgY2hhbmdlcywgYSBuZXcgdG9rZW4gd2lsbCBiZSBnZW5lcmF0ZWQgbmV4dCB0aW1lIHdoZW4gdGhlIGFwcCBhcHBsaWVzIGZvciBhIHRva2VuLiBJZiBhbiBhcHAgbmVlZHMgdG8gcmVwb3J0IHN0YXRpc3RpY3MgZXZlbnRzLCBpdCBtdXN0IGNhcnJ5IHRoZSBBQUlEIGFzIGl0cyB1bmlxdWUgSUQuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgICAqL1xyXG4gICAgZ2V0SWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBvYnRhaW4gYW4gQUFJRCBpbiBhc3luY2hyb25vdXMgbW9kZS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAgICovXHJcbiAgICBnZXRBQUlEKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gb2J0YWluIGEgdG9rZW4gcmVxdWlyZWQgZm9yIGFjY2Vzc2luZyBIVUFXRUkgUHVzaCBLaXQuIElmIHRoZXJlIGlzIG5vIGxvY2FsIEFBSUQsIHRoaXMgbWV0aG9kIHdpbGwgYXV0b21hdGljYWxseSBnZW5lcmF0ZSBhbiBBQUlEIHdoZW4gaXQgaXMgY2FsbGVkIGJlY2F1c2UgdGhlIEhVQVdFSSBQdXNoIEtpdCBzZXJ2ZXIgbmVlZHMgdG8gZ2VuZXJhdGUgYSB0b2tlbiBiYXNlZCBvbiB0aGUgQUFJRC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAgICogQHBhcmFtcyBzY29wZSA/IDogU3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGdldFRva2VuKHNjb3BlPzogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyBhIHRva2VuIHRoYXQgYSB0YXJnZXQgYXBwIGRldmVsb3BlciBhcHBsaWVzIGZvciBhIHNlbmRlciB0byBpbnRlZ3JhdGUgUHVzaCBLaXQgaW4gdGhlIG11bHRpLXNlbmRlciBzY2VuYXJpby5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAgICogQHBhcmFtcyBzdWJqZWN0SWQgPyA6IFN0cmluZ1xyXG4gICAgICovXHJcbiAgICBnZXRUb2tlbldpdGhTdWJqZWN0SWQoc3ViamVjdElkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIG9idGFpbiB0aGUgZ2VuZXJhdGlvbiB0aW1lc3RhbXAgb2YgYW4gQUFJRC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAgICovXHJcbiAgICBnZXRDcmVhdGlvblRpbWUoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBkZWxldGUgYSBsb2NhbCBBQUlEIGFuZCBpdHMgZ2VuZXJhdGlvbiB0aW1lc3RhbXAuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgICAqL1xyXG4gICAgZGVsZXRlQUFJRCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBkZWxldGUgYSB0b2tlbi4gQWZ0ZXIgYSB0b2tlbiBpcyBkZWxldGVkLCB0aGUgY29ycmVzcG9uZGluZyBBQUlEIHdpbGwgbm90IGJlIGRlbGV0ZWQuIFRoaXMgbWV0aG9kIGlzIGEgc3luY2hyb25vdXMgbWV0aG9kLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICAgKiBAcGFyYW1zIHNjb3BlID8gOiBTdHJpbmdcclxuICAgICAqL1xyXG4gICAgZGVsZXRlVG9rZW4oc2NvcGU/OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogRGVsZXRlcyBhIHRva2VuIHRoYXQgYSB0YXJnZXQgYXBwIGRldmVsb3BlciBhcHBsaWVzIGZvciBhIHNlbmRlciB0byBpbnRlZ3JhdGUgUHVzaCBLaXQgaW4gdGhlIG11bHRpLXNlbmRlciBzY2VuYXJpby5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAgICogQHBhcmFtcyBzdWJqZWN0SWQgPyA6IFN0cmluZ1xyXG4gICAgICovXHJcbiAgICBkZWxldGVUb2tlbldpdGhTdWJqZWN0SWQoc3ViamVjdElkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIHN1YnNjcmliZSB0byB0b3BpY3MgaW4gYXN5bmNocm9ub3VzIG1vZGUuIFRoZSBIVUFXRUkgUHVzaCBLaXQgdG9waWMgbWVzc2FnaW5nIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gc2VuZCBtZXNzYWdlcyB0byBtdWx0aXBsZSBkZXZpY2VzIHdob3NlIHVzZXJzIGhhdmUgc3Vic2NyaWJlZCB0byBhIHNwZWNpZmljIHRvcGljLiBZb3UgY2FuIHdyaXRlIG1lc3NhZ2VzIGFib3V0IHRoZSB0b3BpYyBhcyByZXF1aXJlZCwgYW5kIEhVQVdFSSBQdXNoIEtpdCBkZXRlcm1pbmVzIHRoZSByZWxlYXNlIHBhdGggYW5kIHNlbmRzIG1lc3NhZ2VzIHRvIHRoZSBjb3JyZWN0IGRldmljZXMgaW4gYSByZWxpYWJsZSBtYW5uZXIuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdG9waWMgVG9waWMgdG8gYmUgc3Vic2NyaWJlZCB0by5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAgICovXHJcbiAgICBzdWJzY3JpYmUodG9waWM6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIHVuc3Vic2NyaWJlIGZyb20gdG9waWNzIHRoYXQgYXJlIHN1YnNjcmliZWQgdG8gdGhyb3VnaCB0aGUgc3Vic2NyaWJlIG1ldGhvZC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0b3BpYyBUb3BpYyB0byBiZSB1bnN1YnNjcmliZWQgdG8uXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgICAqL1xyXG4gICAgdW5zdWJzY3JpYmUodG9waWM6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHdoZXRoZXIgdG8gZW5hYmxlIGF1dG9tYXRpYyBpbml0aWFsaXphdGlvbi4gSWYgdGhlIGVuYWJsZSBwYXJhbWV0ZXIgaXMgc2V0IHRvIHRydWUsIHRoZSBTREsgYXV0b21hdGljYWxseSBnZW5lcmF0ZXMgYW4gQUFJRCBhbmQgYXBwbGllcyBmb3IgYSB0b2tlbi5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8Ym9vbGVhbj5cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZCBJbmRpY2F0ZXMgd2hldGhlciB0byBlbmFibGUgYXV0b21hdGljIGluaXRpYWxpemF0aW9uLlxyXG4gICAgICovXHJcbiAgICBzZXRBdXRvSW5pdEVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0T2RpZCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGNoZWNrIHdoZXRoZXIgYXV0b21hdGljIGluaXRpYWxpemF0aW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgICAqL1xyXG4gICAgaXNBdXRvSW5pdEVuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRJbml0aWFsTm90aWZpY2F0aW9uKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZW5kUmVtb3RlTWVzc2FnZShyZW1vdGVNZXNzYWdlOiBSZW1vdGVNZXNzYWdlT2JqZWN0KTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRCYWNrZ3JvdW5kRmlsZShmaWxlUGF0aDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRJdGVtKGtleTogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHJlbW92ZUJhY2tncm91bmRGaWxlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiBcIkhtc0xvY2FsTm90aWZpY2F0aW9uXCIsXHJcbiAgICBwbHVnaW46IFwiQGhtc2NvcmUvY29yZG92YS1wbHVnaW4taG1zLXB1c2hcIixcclxuICAgIHBsdWdpblJlZjogXCJIbXNMb2NhbE5vdGlmaWNhdGlvblwiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhtc0xvY2FsTm90aWZpY2F0aW9uIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gICAgQXR0ciA9IEF0dHI7XHJcbiAgICBJbXBvcnRhbmNlID0gSW1wb3J0YW5jZTtcclxuICAgIFByaW9yaXR5ID0gUHJpb3JpdHk7XHJcbiAgICBSZXBlYXRUeXBlID0gUmVwZWF0VHlwZTtcclxuICAgIFZpc2liaWxpdHkgPSBWaXNpYmlsaXR5O1xyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBsb2NhbE5vdGlmaWNhdGlvbihcclxuICAgICAgICBsb2NhbE5vdGlmaWNhdGlvbjogTG9jYWxOb3RpZmljYXRpb25PYmplY3RcclxuICAgICk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBsb2NhbE5vdGlmaWNhdGlvblNjaGVkdWxlKFxyXG4gICAgICAgIGxvY2FsTm90aWZpY2F0aW9uOiBMb2NhbE5vdGlmaWNhdGlvbk9iamVjdFxyXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGNhbmNlbEFsbE5vdGlmaWNhdGlvbnMoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBjYW5jZWxOb3RpZmljYXRpb25zKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgY2FuY2VsU2NoZWR1bGVkTm90aWZpY2F0aW9ucygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGNhbmNlbE5vdGlmaWNhdGlvbnNXaXRoSWQoaWQ6IG51bWJlcltdKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBjYW5jZWxOb3RpZmljYXRpb25zV2l0aElkVGFnKGlkVGFnOiBJZFRhZ1tdKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBjYW5jZWxOb3RpZmljYXRpb25zV2l0aFRhZyh0YWc6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0Tm90aWZpY2F0aW9ucygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0U2NoZWR1bGVkTm90aWZpY2F0aW9ucygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0Q2hhbm5lbHMoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGNoYW5uZWxFeGlzdHMoY2hhbm5lbElkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGNoYW5uZWxCbG9ja2VkKGNoYW5uZWxJZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBkZWxldGVDaGFubmVsKGNoYW5uZWxJZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6IFwiSG1zUHVzaEV2ZW50XCIsXHJcbiAgICBwbHVnaW46IFwiQGhtc2NvcmUvY29yZG92YS1wbHVnaW4taG1zLXB1c2hcIixcclxuICAgIHBsdWdpblJlZjogXCJIbXNQdXNoRXZlbnRcIixcclxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxyXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIbXNQdXNoRXZlbnQgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgb25SZW1vdGVNZXNzYWdlUmVjZWl2ZWQoY2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIG9uVG9rZW5SZWNlaXZlZChjYWxsYmFjazogKGRhdGE6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgb25Ub2tlbkVycm9yKGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBvblB1c2hNZXNzYWdlU2VudChjYWxsYmFjazogKGRhdGE6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgb25QdXNoTWVzc2FnZVNlbnRFcnJvcihjYWxsYmFjazogKGRhdGE6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgb25QdXNoTWVzc2FnZVNlbnREZWxpdmVyZWQoY2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIG9uTG9jYWxOb3RpZmljYXRpb25BY3Rpb24oY2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIG9uTm90aWZpY2F0aW9uT3BlbmVkQXBwKGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBvbk11bHRpU2VuZGVyVG9rZW5SZWNlaXZlZEV2ZW50KGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBvbk11bHRpU2VuZGVyVG9rZW5FcnJvckV2ZW50KGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIFJFTU9URV9EQVRBX01FU1NBR0VfUkVDRUlWRUQgPSBcIlJFTU9URV9EQVRBX01FU1NBR0VfUkVDRUlWRURcIjtcclxuICAgIFRPS0VOX1JFQ0VJVkVEX0VWRU5UID0gXCJUT0tFTl9SRUNFSVZFRF9FVkVOVFwiO1xyXG4gICAgT05fVE9LRU5fRVJST1JfRVZFTlQgPSBcIk9OX1RPS0VOX0VSUk9SX0VWRU5UXCI7XHJcbiAgICBOT1RJRklDQVRJT05fT1BFTkVEX0VWRU5UID0gXCJOT1RJRklDQVRJT05fT1BFTkVEX0VWRU5UXCI7XHJcbiAgICBMT0NBTF9OT1RJRklDQVRJT05fQUNUSU9OX0VWRU5UID0gXCJMT0NBTF9OT1RJRklDQVRJT05fQUNUSU9OX0VWRU5UXCI7XHJcbiAgICBPTl9QVVNIX01FU1NBR0VfU0VOVCA9IFwiT05fUFVTSF9NRVNTQUdFX1NFTlRcIjtcclxuICAgIE9OX1BVU0hfTUVTU0FHRV9TRU5UX0VSUk9SID0gXCJPTl9QVVNIX01FU1NBR0VfU0VOVF9FUlJPUlwiO1xyXG4gICAgT05fUFVTSF9NRVNTQUdFX1NFTlRfREVMSVZFUkVEID0gXCJPTl9QVVNIX01FU1NBR0VfU0VOVF9ERUxJVkVSRURcIjtcclxuICAgIE9OX01VTFRJX1NFTkRFUl9UT0tFTl9FUlJPUl9FVkVOVCA9IFwiT05fTVVMVElfU0VOREVSX1RPS0VOX0VSUk9SX0VWRU5UXCI7XHJcbiAgICBPTl9NVUxUSV9TRU5ERVJfVE9LRU5fUkVDRUlWRURfRVZFTlQgPSBcIk9OX01VTFRJX1NFTkRFUl9UT0tFTl9SRUNFSVZFRF9FVkVOVFwiO1xyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6IFwiSG1zUHVzaFByb2ZpbGVcIixcclxuICAgIHBsdWdpbjogXCJAaG1zY29yZS9jb3Jkb3ZhLXBsdWdpbi1obXMtcHVzaFwiLFxyXG4gICAgcGx1Z2luUmVmOiBcIkhtc1B1c2hQcm9maWxlXCIsXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcclxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSG1zUHVzaFByb2ZpbGUgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgICBIVUFXRUlfUFJPRklMRSA9IDE7XHJcbiAgICBDVVNUT01fUFJPRklMRSA9IDI7XHJcbiAgICBVTkRFRklORURfUFJPRklMRSA9IC0xO1xyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGlzU3VwcG9ydFByb2ZpbGUoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBhZGRQcm9maWxlKHR5cGU6IG51bWJlciwgcHJvZmlsZUlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgYWRkUHJvZmlsZVdpdGhTdWJqZWN0SWQoXHJcbiAgICAgICAgc3ViamVjdElkOiBzdHJpbmcsXHJcbiAgICAgICAgdHlwZTogbnVtYmVyLFxyXG4gICAgICAgIHByb2ZpbGVJZDogc3RyaW5nXHJcbiAgICApOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZGVsZXRlUHJvZmlsZShwcm9maWxlSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBkZWxldGVQcm9maWxlV2l0aFN1YmplY3RJZChcclxuICAgICAgICBzdWJqZWN0SWQ6IHN0cmluZyxcclxuICAgICAgICBwcm9maWxlSWQ6IHN0cmluZ1xyXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEhtc1B1c2hSZXN1bHRDb2RlIHtcclxuICAgIC8vIFN1Y2Nlc3NcclxuICAgIFNVQ0NFU1MgPSBcIjBcIixcclxuXHJcbiAgICAvLyBFcnJvclxyXG4gICAgRVJST1IgPSBcIi0xXCIsXHJcblxyXG4gICAgLy8gQnVuZGxlIGlzIG51bGwsIGV4Y2VwdGlvblxyXG4gICAgTlVMTF9CVU5ETEUgPSBcIjMzM1wiLFxyXG5cclxuICAgIC8vIFlvdSBkbyBub3QgaGF2ZSBhIHRva2VuLiBBcHBseSBmb3IgYSB0b2tlbi5cclxuICAgIEVSUk9SX05PX1RPS0VOID0gXCI5MDcxMjIwMzBcIixcclxuXHJcbiAgICAvLyBUaGUgY3VycmVudCBuZXR3b3JrIGlzIHVuYXZhaWxhYmxlLiBDaGVjayB0aGUgbmV0d29yayBjb25uZWN0aW9uLlxyXG4gICAgRVJST1JfTk9fTkVUV09SSyA9IFwiOTA3MTIyMDMxXCIsXHJcblxyXG4gICAgLy8gVGhlIHRva2VuIGhhcyBleHBpcmVkLiBEZWxldGUgdGhlIHRva2VuIGFuZCBhcHBseSBmb3IgYSBuZXcgb25lLlxyXG4gICAgRVJST1JfVE9LRU5fSU5WQUxJRCA9IFwiOTA3MTIyMDMyXCIsXHJcblxyXG4gICAgLy8gSWYgdGhlIFB1c2ggc2VydmljZSBpcyB1bmF2YWlsYWJsZSwgY29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXHJcbiAgICBFUlJPUl9TRVJWSUNFX05PVF9BVkFJTEFCTEUgPSBcIjkwNzEyMjA0NlwiLFxyXG5cclxuICAgIC8vIElmIHRoZSBQdXNoIHNlcnZlciByZXR1cm5zIGFuIGVycm9yLCBjb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICAgIEVSUk9SX1BVU0hfU0VSVkVSID0gXCI5MDcxMjIwNDdcIixcclxuXHJcbiAgICAvLyBVbmtub3duIGVycm9yLiBDb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICAgIEVSUk9SX1VOS05PV04gPSBcIjkwNzEyMjA0NVwiLFxyXG5cclxuICAgIC8vIFRoZSBudW1iZXIgb2Ygc3Vic2NyaWJlZCB0b3BpY3MgZXhjZWVkcyAyMDAwLlxyXG4gICAgRVJST1JfVE9QSUNfRVhDRUVEID0gXCI5MDcxMjIwMzRcIixcclxuXHJcbiAgICAvLyBGYWlsZWQgdG8gc2VuZCB0aGUgc3Vic2NyaXB0aW9uIHRvcGljLiBDb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICAgIEVSUk9SX1RPUElDX1NFTkQgPSBcIjkwNzEyMjAzNVwiLFxyXG5cclxuICAgIC8vIFB1c2ggcmlnaHRzIGFyZSBub3QgZW5hYmxlZC4gRW5hYmxlIHRoZSBzZXJ2aWNlIGFuZCBzZXQgcHVzaCBzZXJ2aWNlIHBhcmFtZXRlcnMgYXQgQXBwR2FsbGVyeSBDb25uZWN0LlxyXG4gICAgRVJST1JfTk9fUklHSFQgPSBcIjkwNzEyMjAzNlwiLFxyXG5cclxuICAgIC8vIEZhaWxlZCB0byBhcHBseSBmb3IgdGhlIHRva2VuLiBDb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICAgIEVSUk9SX0dFVF9UT0tFTl9FUlIgPSBcIjkwNzEyMjAzN1wiLFxyXG5cclxuICAgIC8vIE5vIHN0b3JhZ2UgbG9jYXRpb24gaXMgc2VsZWN0ZWQgZm9yIHRoZSBhcHBsaWNhdGlvbiBvciB0aGUgc3RvcmFnZSBsb2NhdGlvbiBpcyBpbnZhbGlkLlxyXG4gICAgRVJST1JfU1RPUkFHRV9MT0NBVElPTl9FTVBUWSA9IFwiOTA3MTIyMDM4XCIsXHJcblxyXG4gICAgLy8gRmFpbGVkIHRvIGFwcGx5IGZvciBhIHRva2VuLiBDcm9zcy1yZWdpb24gdG9rZW4gYXBwbGljYXRpb24gaXMgbm90IGFsbG93ZWQuXHJcbiAgICBFUlJPUl9OT1RfQUxMT1dfQ1JPU1NfQVBQTFkgPSBcIjkwNzEyMjA1M1wiLFxyXG5cclxuICAgIC8vIFRoZSBtZXNzYWdlIGJvZHkgc2l6ZSBleGNlZWRzIHRoZSBtYXhpbXVtLlxyXG4gICAgRVJST1JfU0laRSA9IFwiOTA3MTIyMDQxXCIsXHJcblxyXG4gICAgLy8gVGhlIG1lc3NhZ2UgY29udGFpbnMgaW52YWxpZCBwYXJhbWV0ZXJzLlxyXG4gICAgRVJST1JfSU5WQUxJRF9QQVJBTUVURVJTID0gXCI5MDcxMjIwNDJcIixcclxuXHJcbiAgICAvLyBUaGUgbnVtYmVyIG9mIHNlbnQgbWVzc2FnZXMgcmVhY2hlcyB0aGUgdXBwZXIgbGltaXQuIFRoZSBtZXNzYWdlcyB3aWxsIGJlIGRpc2NhcmRlZC5cclxuICAgIEVSUk9SX1RPT19NQU5ZX01FU1NBR0VTID0gXCI5MDcxMjIwNDNcIixcclxuXHJcbiAgICAvLyBUaGUgbWVzc2FnZSBsaWZldGltZSBleHBpcmVzIGJlZm9yZSB0aGUgbWVzc2FnZSBpcyBzdWNjZXNzZnVsbHkgc2VudCB0byB0aGUgQVBQIHNlcnZlci5cclxuICAgIEVSUk9SX1RUTF9FWENFRURFRCA9IFwiOTA3MTIyMDQ0XCIsXHJcblxyXG4gICAgLy8gIEh1YXdlaSBNb2JpbGUgU2VydmljZXMgKEFQSykgY2FuJ3QgY29ubmVjdCAgSHVhd2VpIFB1c2ggIEtpdC5cclxuICAgIEVSUk9SX0hNU19DTElFTlRfQVBJID0gXCI5MDcxMjIwNDhcIixcclxuXHJcbiAgICAvLyBUaGUgY3VycmVudCBFTVVJIHZlcnNpb24gaXMgdG9vIGVhcmx5IHRvIHVzZSB0aGUgY2FwYWJpbGl0eS5cclxuICAgIEVSUk9SX09QRVJBVElPTl9OT1RfU1VQUE9SVEVEID0gXCI5MDcxMjIwNDlcIixcclxuXHJcbiAgICAvLyBUaGUgb3BlcmF0aW9uIGNhbm5vdCBiZSBwZXJmb3JtZWQgaW4gdGhlIG1haW4gdGhyZWFkLlxyXG4gICAgRVJST1JfTUFJTl9USFJFQUQgPSBcIjkwNzEyMjA1MFwiLFxyXG5cclxuICAgIC8vIFRoZSBkZXZpY2UgY2VydGlmaWNhdGUgYXV0aGVudGljYXRpb24gZmFpbHMuXHJcbiAgICBFUlJPUl9ITVNfREVWSUNFX0FVVEhfRkFJTEVEX1NFTEZfTUFQUElORyA9IFwiOTA3MTIyMDUxXCIsXHJcblxyXG4gICAgLy8gRmFpbGVkIHRvIGJpbmQgdGhlIHNlcnZpY2UuXHJcbiAgICBFUlJPUl9CSU5EX1NFUlZJQ0VfU0VMRl9NQVBQSU5HID0gXCI5MDcxMjIwNTJcIixcclxuXHJcbiAgICAvLyBUaGUgU0RLIGlzIGJlaW5nIGF1dG9tYXRpY2FsbHkgaW5pdGlhbGl6ZWQuIFRyeSBhZ2FpbiBsYXRlci5cclxuICAgIEVSUk9SX0FVVE9fSU5JVElBTElaSU5HID0gXCI5MDcxMjIwNTRcIixcclxuXHJcbiAgICAvKlRoZSBpbnB1dCBwYXJhbWV0ZXIgaXMgaW5jb3JyZWN0LiBDaGVjayB3aGV0aGVyIHRoZSByZWxhdGVkIGNvbmZpZ3VyYXRpb24gaW5mb3JtYXRpb24gaXMgY29ycmVjdC5cclxuICAgICAqIEV4YW1wbGU6IGFwcF9pZCBpbiB0aGUgYWdjb25uZWN0IC0gc2VydmljZXMuanNvbiBmaWxlO1xyXG4gICAgICogQ2hlY2sgd2hldGhlciB0aGUgYnVpbGQuZ3JhZGxlIGZpbGUgaXMgY29uZmlndXJlZCB3aXRoIHRoZSBjZXJ0aWZpY2F0ZSBzaWduYXR1cmUuXHJcbiAgICAgKi9cclxuICAgIEVSUk9SX0FSR1VNRU5UU19JTlZBTElEID0gXCI5MDcxMzUwMDBcIixcclxuXHJcbiAgICAvLyBJbnRlcm5hbCBQdXNoIGVycm9yLiBDb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydCBlbmdpbmVlcnMuXHJcbiAgICBFUlJPUl9JTlRFUk5BTF9FUlJPUiA9IFwiOTA3MTM1MDAxXCIsXHJcblxyXG4gICAgLy8gVGhlIHNlcnZpY2UgZG9lcyBub3QgZXhpc3QuIFRoZSBpbnZva2VkIGludGVyZmFjZSBkb2VzIG5vdCBleGlzdC5cclxuICAgIEVSUk9SX05BTUlOR19JTlZBTElEID0gXCI5MDcxMzUwMDJcIixcclxuXHJcbiAgICAvLyBUaGUgQXBpQ2xpZW50IG9iamVjdCBpcyBpbnZhbGlkLlxyXG4gICAgRVJST1JfQ0xJRU5UX0FQSV9JTlZBTElEID0gXCI5MDcxMzUwMDNcIixcclxuXHJcbiAgICAvLyBJbnZva2luZyBBSURMIHRpbWVzIG91dC4gQ29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXHJcbiAgICBFUlJPUl9FWEVDVVRFX1RJTUVPVVQgPSBcIjkwNzEzNTAwNFwiLFxyXG5cclxuICAgIC8vIFRoZSBjdXJyZW50IGFyZWEgZG9lcyBub3Qgc3VwcG9ydCB0aGlzIHNlcnZpY2UuXHJcbiAgICBFUlJPUl9OT1RfSU5fU0VSVklDRSA9IFwiOTA3MTM1MDA1XCIsXHJcblxyXG4gICAgLy8gSWYgdGhlIEFJREwgY29ubmVjdGlvbiBzZXNzaW9uIGlzIGludmFsaWQsIGNvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gICAgRVJST1JfU0VTU0lPTl9JTlZBTElEID0gXCI5MDcxMzUwMDZcIixcclxuXHJcbiAgICAvLyBBbiBlcnJvciBvY2N1cnJlZCB3aGVuIGludm9raW5nIGFuIHVuc3BlY2lmaWVkIEFQSS5cclxuICAgIEVSUk9SX0FQSV9OT1RfU1BFQ0lGSUVEID0gXCIxMDAyXCIsXHJcblxyXG4gICAgLyogRmFpbGVkIHRvIGludm9rZSB0aGUgZ2F0ZXdheSB0byBxdWVyeSB0aGUgYXBwbGljYXRpb24gc2NvcGUuXHJcbiAgICAgKiBDaGVjayB3aGV0aGVyIHRoZSBjdXJyZW50IGFwcCBoYXMgYmVlbiBjcmVhdGVkIGFuZCBlbmFibGVkIGluIEFwcEdhbGxlcnkgQ29ubmVjdC5cclxuICAgICAqIElmIHllcywgY29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXHJcbiAgICAgKi9cclxuICAgIEVSUk9SX0dFVF9TQ09QRV9FUlJPUiA9IFwiOTA3MTM1NzAwXCIsXHJcbiAgICAvKiBTY29wZSBpcyBub3QgY29uZmlndXJlZCBvbiB0aGUgQXBwR2FsbGVyeSBDb25uZWN0LlxyXG4gICAgICogQ2hlY2sgd2hldGhlciB0aGUgY3VycmVudCBhcHAgaGFzIGJlZW4gY3JlYXRlZCBhbmQgZW5hYmxlZCBpbiBBcHBHYWxsZXJ5IENvbm5lY3QuXHJcbiAgICAgKiBJZiB5ZXMsIGNvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gICAgICovXHJcbiAgICBFUlJPUl9TQ09QRV9MSVNUX0VNUFRZID0gXCI5MDcxMzU3MDFcIixcclxuXHJcbiAgICAvKiBUaGUgY2VydGlmaWNhdGUgZmluZ2VycHJpbnQgaXMgbm90IGNvbmZpZ3VyZWQgb24gdGhlIEFwcEdhbGxlcnkgQ29ubmVjdC5cclxuICAgICAqIDEuIENoZWNrIHdoZXRoZXIgeW91ciBwaG9uZSBjYW4gYWNjZXNzIHRoZSBJbnRlcm5ldC5cclxuICAgICAqIDIuIENoZWNrIHdoZXRoZXIgdGhlIGNvcnJlY3QgY2VydGlmaWNhdGUgZmluZ2VycHJpbnQgaXMgY29uZmlndXJlZCBpbiBBcHBHYWxsZXJ5IENvbm5lY3QuIEZvciBkZXRhaWxzLCBzZWUgQXBwR2FsbGVyeSBDb25uZWN0IGNvbmZpZ3VyYXRpb24gaW4gRGV2ZWxvcG1lbnQgUHJlcGFyYXRpb25zLlxyXG4gICAgICogMy4gSWYgdGhlIGNoZWNrIHJlc3VsdCBpcyBjb3JyZWN0LCBjb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICAgICAqL1xyXG4gICAgRVJST1JfQ0VSVF9GSU5HRVJQUklOVF9FTVBUWSA9IFwiOTA3MTM1NzAyXCIsXHJcblxyXG4gICAgLy8gUGVybWlzc2lvbiBpcyBub3QgY29uZmlndXJlZCBvbiB0aGUgQXBwR2FsbGVyeSBDb25uZWN0LlxyXG4gICAgRVJST1JfUEVSTUlTU0lPTl9MSVNUX0VNUFRZID0gXCI5MDcxMzU3MDNcIixcclxuXHJcbiAgICAvLyBUaGUgYXV0aGVudGljYXRpb24gaW5mb3JtYXRpb24gb2YgdGhlIGFwcGxpY2F0aW9uIGRvZXMgbm90IGV4aXN0LlxyXG4gICAgRVJST1JfQVVUSF9JTkZPX05PVF9FWElTVCA9IFwiNjAwMlwiLFxyXG5cclxuICAgIC8vIEFuIGVycm9yIG9jY3VycmVkIGR1cmluZyBjZXJ0aWZpY2F0ZSBmaW5nZXJwcmludCB2ZXJpZmljYXRpb24uIENoZWNrIHdoZXRoZXIgdGhlIGNvcnJlY3QgY2VydGlmaWNhdGUgZmluZ2VycHJpbnQgaXMgY29uZmlndXJlZCBpbiBBcHBHYWxsZXJ5IENvbm5lY3QuIEZvciBkZXRhaWxzLCBzZWUgQXBwR2FsbGVyeSBDb25uZWN0IGNvbmZpZ3VyYXRpb24gaW4gRGV2ZWxvcG1lbnQgUHJlcGFyYXRpb25zLlxyXG4gICAgRVJST1JfQ0VSVF9GSU5HRVJQUklOVF9FUlJPUiA9IFwiNjAwM1wiLFxyXG5cclxuICAgIC8vIEludGVyZmFjZSBhdXRoZW50aWNhdGlvbjogVGhlIHBlcm1pc3Npb24gZG9lcyBub3QgZXhpc3QgYW5kIGlzIG5vdCBhcHBsaWVkIGZvciBpbiBBcHBHYWxsZXJ5IENvbm5lY3QuXHJcbiAgICBFUlJPUl9QRVJNSVNTSU9OX05PVF9FWElTVCA9IFwiNjAwNFwiLFxyXG5cclxuICAgIC8vIEludGVyZmFjZSBhdXRoZW50aWNhdGlvbjogdW5hdXRob3JpemVkLlxyXG4gICAgRVJST1JfUEVSTUlTU0lPTl9OT1RfQVVUSE9SSVpFRCA9IFwiNjAwNVwiLFxyXG5cclxuICAgIC8vIEludGVyZmFjZSBhdXRoZW50aWNhdGlvbjogVGhlIGF1dGhvcml6YXRpb24gZXhwaXJlcy5cclxuICAgIEVSUk9SX1BFUk1JU1NJT05fRVhQSVJFRCA9IFwiNjAwNlwiLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBBdHRyIHtcclxuICAgIGlkID0gXCJpZFwiLFxyXG4gICAgbWVzc2FnZSA9IFwibWVzc2FnZVwiLFxyXG4gICAgZmlyZURhdGUgPSBcImZpcmVEYXRlXCIsXHJcbiAgICB0aXRsZSA9IFwidGl0bGVcIixcclxuICAgIHRpY2tlciA9IFwidGlja2VyXCIsXHJcbiAgICBzaG93V2hlbiA9IFwic2hvd1doZW5cIixcclxuICAgIGF1dG9DYW5jZWwgPSBcImF1dG9DYW5jZWxcIixcclxuICAgIGxhcmdlSWNvbiA9IFwibGFyZ2VJY29uXCIsXHJcbiAgICBsYXJnZUljb25VcmwgPSBcImxhcmdlSWNvblVybFwiLFxyXG4gICAgc21hbGxJY29uID0gXCJzbWFsbEljb25cIixcclxuICAgIGJpZ1RleHQgPSBcImJpZ1RleHRcIixcclxuICAgIHN1YlRleHQgPSBcInN1YlRleHRcIixcclxuICAgIGJpZ1BpY3R1cmVVcmwgPSBcImJpZ1BpY3R1cmVVcmxcIixcclxuICAgIHNob3J0Y3V0SWQgPSBcInNob3J0Y3V0SWRcIixcclxuICAgIG51bWJlciA9IFwibnVtYmVyXCIsXHJcbiAgICBjaGFubmVsSWQgPSBcImNoYW5uZWxJZFwiLFxyXG4gICAgY2hhbm5lbE5hbWUgPSBcImNoYW5uZWxOYW1lXCIsXHJcbiAgICBjaGFubmVsRGVzY3JpcHRpb24gPSBcImNoYW5uZWxEZXNjcmlwdGlvblwiLFxyXG4gICAgY29sb3IgPSBcImNvbG9yXCIsXHJcbiAgICBncm91cCA9IFwiZ3JvdXBcIixcclxuICAgIGdyb3VwU3VtbWFyeSA9IFwiZ3JvdXBTdW1tYXJ5XCIsXHJcbiAgICBwbGF5U291bmQgPSBcInBsYXlTb3VuZFwiLFxyXG4gICAgc291bmROYW1lID0gXCJzb3VuZE5hbWVcIixcclxuICAgIHZpYnJhdGUgPSBcInZpYnJhdGVcIixcclxuICAgIHZpYnJhdGVEdXJhdGlvbiA9IFwidmlicmF0ZUR1cmF0aW9uXCIsXHJcbiAgICBhY3Rpb25zID0gXCJhY3Rpb25zXCIsXHJcbiAgICBpbnZva2VBcHAgPSBcImludm9rZUFwcFwiLFxyXG4gICAgdGFnID0gXCJ0YWdcIixcclxuICAgIHJlcGVhdFR5cGUgPSBcInJlcGVhdFR5cGVcIixcclxuICAgIHJlcGVhdFRpbWUgPSBcInJlcGVhdFRpbWVcIixcclxuICAgIG9uZ29pbmcgPSBcIm9uZ29pbmdcIixcclxuICAgIGFsbG93V2hpbGVJZGxlID0gXCJhbGxvd1doaWxlSWRsZVwiLFxyXG4gICAgZG9udE5vdGlmeUluRm9yZWdyb3VuZCA9IFwiZG9udE5vdGlmeUluRm9yZWdyb3VuZFwiLFxyXG4gICAgcHJpb3JpdHkgPSBcInByaW9yaXR5XCIsXHJcbiAgICBpbXBvcnRhbmNlID0gXCJpbXBvcnRhbmNlXCIsXHJcbiAgICB2aXNpYmlsaXR5ID0gXCJ2aXNpYmlsaXR5XCIsXHJcbiAgICBkYXRhID0gXCJkYXRhXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEltcG9ydGFuY2Uge1xyXG4gICAgTUFYID0gXCJtYXhcIixcclxuICAgIEhJR0ggPSBcImhpZ2hcIixcclxuICAgIERFRkFVTFQgPSBcImRlZmF1bHRcIixcclxuICAgIExPVyA9IFwibG93XCIsXHJcbiAgICBNSU4gPSBcIm1pblwiLFxyXG4gICAgTk9ORSA9IFwibm9uZVwiLFxyXG4gICAgVU5TUEVDSUZJRUQgPSBcInVuc3BlY2lmaWVkXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFByaW9yaXR5IHtcclxuICAgIE1BWCA9IFwibWF4XCIsXHJcbiAgICBISUdIID0gXCJoaWdoXCIsXHJcbiAgICBERUZBVUxUID0gXCJkZWZhdWx0XCIsXHJcbiAgICBMT1cgPSBcImxvd1wiLFxyXG4gICAgTUlOID0gXCJtaW5cIixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUmVwZWF0VHlwZSB7XHJcbiAgICBIT1VSID0gXCJob3VyXCIsXHJcbiAgICBNSU5VVEUgPSBcIm1pbnV0ZVwiLFxyXG4gICAgREFZID0gXCJkYXlcIixcclxuICAgIFdFRUsgPSBcIndlZWtcIixcclxuICAgIENVU1RPTV9USU1FID0gXCJjdXN0b21fdGltZVwiLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBWaXNpYmlsaXR5IHtcclxuICAgIFBVQkxJQyA9IFwicHVibGljXCIsXHJcbiAgICBTRUNSRVQgPSBcInNlY3JldFwiLFxyXG4gICAgUFJJVkFURSA9IFwicHJpdmF0ZVwiLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBSZW1vdGVNZXNzYWdlQnVpbGRlciB7XHJcbiAgICBUTyA9IFwidG9cIixcclxuICAgIE1FU1NBR0VfSUQgPSBcIm1lc3NhZ2VJZFwiLFxyXG4gICAgTUVTU0FHRV9UWVBFID0gXCJtZXNzYWdlVHlwZVwiLFxyXG4gICAgVFRMID0gXCJ0dGxcIixcclxuICAgIENPTExBUFNFX0tFWSA9IFwiY29sbGFwc2VLZXlcIixcclxuICAgIFJFQ0VJUFRfTU9ERSA9IFwicmVjZWlwdE1vZGVcIixcclxuICAgIFNFTkRfTU9ERSA9IFwic2VuZE1vZGVcIixcclxuICAgIERBVEEgPSBcImRhdGFcIixcclxufVxyXG5cclxuY2xhc3MgQ29yZG92YVJlbW90ZU1lc3NhZ2Uge1xyXG4gICAgc3RhdGljIElOU1RBTkNFX0lEX1NDT1BFID0gXCJIQ01cIjtcclxuXHJcbiAgICBzdGF0aWMgUFJJT1JJVFlfVU5LTk9XTiA9IDA7XHJcbiAgICBzdGF0aWMgUFJJT1JJVFlfSElHSCA9IDE7XHJcbiAgICBzdGF0aWMgUFJJT1JJVFlfTk9STUFMID0gMjtcclxuXHJcbiAgICBzdGF0aWMgQ09MTEFQU0VLRVkgPSBcImNvbGxhcHNlS2V5XCI7XHJcbiAgICBzdGF0aWMgREFUQSA9IFwiZGF0YVwiO1xyXG4gICAgc3RhdGljIERBVEFPRk1BUCA9IFwiZGF0YU9mTWFwXCI7XHJcbiAgICBzdGF0aWMgTUVTU0FHRUlEID0gXCJtZXNzYWdlSWRcIjtcclxuICAgIHN0YXRpYyBNRVNTQUdFVFlQRSA9IFwibWVzc2FnZVR5cGVcIjtcclxuICAgIHN0YXRpYyBPUklHSU5BTFVSR0VOQ1kgPSBcIm9yaWdpbmFsVXJnZW5jeVwiO1xyXG4gICAgc3RhdGljIFVSR0VOQ1kgPSBcInVyZ2VuY3lcIjtcclxuICAgIHN0YXRpYyBUVEwgPSBcInR0bFwiO1xyXG4gICAgc3RhdGljIFNFTlRUSU1FID0gXCJzZW50VGltZVwiO1xyXG4gICAgc3RhdGljIFRPID0gXCJ0b1wiO1xyXG4gICAgc3RhdGljIEZST00gPSBcImZyb21cIjtcclxuICAgIHN0YXRpYyBUT0tFTiA9IFwidG9rZW5cIjtcclxuICAgIHN0YXRpYyBBTkFMWVRJQ0lORk8gPSBcImFuYWx5dGljSW5mb1wiO1xyXG4gICAgc3RhdGljIEFOQUxZVElDSU5GT01BUCA9IFwiYW5hbHl0aWNJbmZvTWFwXCI7XHJcblxyXG4gICAgc3RhdGljIE5PVElGSUNBVElPTiA9IHtcclxuICAgICAgICBUSVRMRTogXCJ0aXRsZVwiLFxyXG4gICAgICAgIFRJVExFTE9DQUxJWkFUSU9OS0VZOiBcInRpdGxlTG9jYWxpemF0aW9uS2V5XCIsXHJcbiAgICAgICAgVElUTEVMT0NBTElaQVRJT05BUkdTOiBcInRpdGxlTG9jYWxpemF0aW9uQXJnc1wiLFxyXG4gICAgICAgIEJPRFlMT0NBTElaQVRJT05LRVk6IFwiYm9keUxvY2FsaXphdGlvbktleVwiLFxyXG4gICAgICAgIEJPRFlMT0NBTElaQVRJT05BUkdTOiBcImJvZHlMb2NhbGl6YXRpb25BcmdzXCIsXHJcbiAgICAgICAgQk9EWTogXCJib2R5XCIsXHJcbiAgICAgICAgSUNPTjogXCJpY29uXCIsXHJcbiAgICAgICAgU09VTkQ6IFwiU291bmRcIixcclxuICAgICAgICBUQUc6IFwiVGFnXCIsXHJcbiAgICAgICAgQ09MT1I6IFwiQ29sb3JcIixcclxuICAgICAgICBDTElDS0FDVElPTjogXCJDbGlja0FjdGlvblwiLFxyXG4gICAgICAgIENIQU5ORUxJRDogXCJDaGFubmVsSWRcIixcclxuICAgICAgICBJTUFHRVVSTDogXCJJbWFnZVVybFwiLFxyXG4gICAgICAgIExJTks6IFwiTGlua1wiLFxyXG4gICAgICAgIE5PVElGWUlEOiBcIk5vdGlmeUlkXCIsXHJcbiAgICAgICAgV0hFTjogXCJXaGVuXCIsXHJcbiAgICAgICAgTElHSFRTRVRUSU5HUzogXCJMaWdodFNldHRpbmdzXCIsXHJcbiAgICAgICAgQkFER0VOVU1CRVI6IFwiQmFkZ2VOdW1iZXJcIixcclxuICAgICAgICBJTVBPUlRBTkNFOiBcIkltcG9ydGFuY2VcIixcclxuICAgICAgICBUSUNLRVI6IFwiVGlja2VyXCIsXHJcbiAgICAgICAgVklCUkFURUNPTkZJRzogXCJ2aWJyYXRlQ29uZmlnXCIsXHJcbiAgICAgICAgVklTSUJJTElUWTogXCJ2aXNpYmlsaXR5XCIsXHJcbiAgICAgICAgSU5URU5UVVJJOiBcImludGVudFVyaVwiLFxyXG4gICAgICAgIElTQVVUT0NBTkNFTDogXCJpc0F1dG9DYW5jZWxcIixcclxuICAgICAgICBJU0xPQ0FMT05MWTogXCJpc0xvY2FsT25seVwiLFxyXG4gICAgICAgIElTREVGQVVMVExJR0hUOiBcImlzRGVmYXVsdExpZ2h0XCIsXHJcbiAgICAgICAgSVNERUZBVUxUU09VTkQ6IFwiaXNEZWZhdWx0U291bmRcIixcclxuICAgICAgICBJU0RFRkFVTFRWSUJSQVRFOiBcImlzRGVmYXVsdFZpYnJhdGVcIixcclxuICAgIH07XHJcbiAgICByZW1vdGVNc2c6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcclxuICAgICAgICB0aGlzLnJlbW90ZU1zZyA9IG9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIHBhcnNlIGFsbCBlbGVtZW50LHVub3JkZXJlZFxyXG4gICAgICovXHJcbiAgICBwYXJzZU1zZ0FsbEF0dHJpYnV0ZSgpIHtcclxuICAgICAgICBsZXQgcHVzaFJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5yZW1vdGVNc2cpIHtcclxuICAgICAgICAgICAgcHVzaFJlc3VsdCA9IHB1c2hSZXN1bHQgKyBrZXkgKyBcIiA6IFwiICsgdGhpcy5yZW1vdGVNc2dba2V5XSArIFwiXFxuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwdXNoUmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBnZXRDb2xsYXBzZUtleSgpIE9idGFpbnMgdGhlIGNsYXNzaWZpY2F0aW9uIGlkZW50aWZpZXIgKGNvbGxhcHNlIGtleSkgb2YgYSBtZXNzYWdlLlxyXG4gICAgICovXHJcbiAgICBnZXRDb2xsYXBzZUtleSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuQ09MTEFQU0VLRVldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBnZXREYXRhKCkgT2J0YWlucyB2YWxpZCBjb250ZW50IGRhdGEgb2YgYSBtZXNzYWdlLlxyXG4gICAgICovXHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5EQVRBXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogZ2V0RGF0YU9mTWFwKCkgYSBtZXNzYWdlIG1hcC5cclxuICAgICAqL1xyXG4gICAgZ2V0RGF0YU9mTWFwKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5EQVRBT0ZNQVBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBnZXRNZXNzYWdlSWQoKSBPYnRhaW5zIHRoZSBJRCBvZiBhIG1lc3NhZ2UuXHJcbiAgICAgKi9cclxuICAgIGdldE1lc3NhZ2VJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTUVTU0FHRUlEXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogZ2V0TWVzc2FnZVR5cGUoKSBPYnRhaW5zIHRoZSB0eXBlIG9mIGEgbWVzc2FnZS5cclxuICAgICAqL1xyXG4gICAgZ2V0TWVzc2FnZVR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk1FU1NBR0VUWVBFXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogZ2V0T3JpZ2luYWxVcmdlbmN5KCkgT2J0YWlucyB0aGUgb3JpZ2luYWwgcHJpb3JpdHkgb2YgYSBtZXNzYWdlLlxyXG4gICAgICovXHJcbiAgICBnZXRPcmlnaW5hbFVyZ2VuY3koKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk9SSUdJTkFMVVJHRU5DWV07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIGdldFVyZ2VuY3koKSBPYnRhaW5zIHByaW9yaXR5IG9mIGEgbWVzc2FnZS5cclxuICAgICAqL1xyXG4gICAgZ2V0VXJnZW5jeSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuVVJHRU5DWV07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIGdldFR0bCgpIE9idGFpbnMgdmFsaWQgZ2V0VHRsIG9mIGEgbWVzc2FnZS5cclxuICAgICAqL1xyXG4gICAgZ2V0VHRsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5UVExdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBnZXRTZW50VGltZSgpIE9idGFpbnMgdGhlIHRpbWUgd2hlbiBhIG1lc3NhZ2UgaXMgc2VudCBmcm9tIHRoZSBzZXJ2ZXIuXHJcbiAgICAgKi9cclxuICAgIGdldFNlbnRUaW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5TRU5UVElNRV07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIGdldFRvKCkgT2J0YWlucyB0aGUgcmVjaXBpZW50IG9mIGEgbWVzc2FnZS5cclxuICAgICAqL1xyXG4gICAgZ2V0VG8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLlRPXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogZ2V0RnJvbSgpIE9idGFpbnMgdGhlIHNlbmRlciBvZiBhIG1lc3NhZ2UuXHJcbiAgICAgKi9cclxuICAgIGdldEZyb20oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLkZST01dO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBnZXRUb2tlbigpIE9idGFpbnMgdmFsaWQgdG9rZW5cclxuICAgICAqL1xyXG4gICAgZ2V0VG9rZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLlRPS0VOXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbmFseXRpY0luZm8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLkFOQUxZVElDSU5GT107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QW5hbHl0aWNJbmZvTWFwKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5BTkFMWVRJQ0lORk9NQVBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0VGl0bGUoKSBPYnRhaW5zIHRoZSB0aXRsZSBvZiBhIG1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgZ2V0Tm90aWZpY2F0aW9uVGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5USVRMRV07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRUaXRsZUxvY2FsaXphdGlvbktleSgpIE9idGFpbnMgdGhlIGtleSBvZiB0aGUgZGlzcGxheWVkIHRpdGxlIG9mIGEgbm90aWZpY2F0aW9uIG1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgZ2V0VGl0bGVMb2NhbGl6YXRpb25LZXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW1xyXG4gICAgICAgICAgICBDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVElUTEVMT0NBTElaQVRJT05LRVlcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0VGl0bGVMb2NhbGl6YXRpb25BcmdzKCkgT2J0YWlucyB2YXJpYWJsZSBwYXJhbWV0ZXJzIG9mIHRoZSBkaXNwbGF5ZWQgdGl0bGUgb2YgYSBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIGdldFRpdGxlTG9jYWxpemF0aW9uQXJncygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbXHJcbiAgICAgICAgICAgIENvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5USVRMRUxPQ0FMSVpBVElPTkFSR1NcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0Qm9keUxvY2FsaXphdGlvbktleSgpIE9idGFpbnMgdGhlIGtleSBvZiB0aGUgZGlzcGxheWVkIGNvbnRlbnQgb2YgYSBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIGdldEJvZHlMb2NhbGl6YXRpb25LZXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW1xyXG4gICAgICAgICAgICBDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uQk9EWUxPQ0FMSVpBVElPTktFWVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRCb2R5TG9jYWxpemF0aW9uQXJncygpIE9idGFpbnMgdmFyaWFibGUgcGFyYW1ldGVycyBvZiB0aGUgZGlzcGxheWVkIGNvbnRlbnQgb2YgYSBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIGdldEJvZHlMb2NhbGl6YXRpb25BcmdzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tcclxuICAgICAgICAgICAgQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkJPRFlMT0NBTElaQVRJT05BUkdTXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldEJvZHkoKSBPYnRhaW5zIHRoZSBib2R5IG9mIGEgbWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBnZXRCb2R5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uQk9EWV07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRJY29uKCkgT2J0YWlucyB0aGUgaWNvbiBvZiBhIG1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgZ2V0SWNvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklDT05dO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0U291bmQoKSBPYnRhaW5zIHRoZSBzb3VuZCBmcm9tIGEgbWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBnZXRTb3VuZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLlNPVU5EXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldFRhZygpIE9idGFpbnMgdGhlIHRhZyBmcm9tIGEgbWVzc2FnZSBmb3IgbWVzc2FnZSBvdmVyd3JpdGluZ1xyXG4gICAgICovXHJcbiAgICBnZXRUYWcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5UQUddO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0Q29sb3IoKSBPYnRhaW5zIHRoZSBjb2xvcnMgb2YgaWNvbnMgaW4gYSBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIGdldENvbG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uQ09MT1JdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0Q2xpY2tBY3Rpb24oKSBPYnRhaW5zIGFjdGlvbnMgdHJpZ2dlcmVkIGJ5IG1lc3NhZ2UgdGFwcGluZ1xyXG4gICAgICovXHJcbiAgICBnZXRDbGlja0FjdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkNMSUNLQUNUSU9OXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldENoYW5uZWxJZCgpIE9idGFpbnMgSURzIG9mIGNoYW5uZWxzIHRoYXQgc3VwcG9ydCB0aGUgZGlzcGxheSBvZiBtZXNzYWdlc1xyXG4gICAgICovXHJcbiAgICBnZXRDaGFubmVsSWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5DSEFOTkVMSURdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0SW1hZ2VVcmwoKSBPYnRhaW5zIHRoZSBpbWFnZSBVUkwgZnJvbSBhIG1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgZ2V0SW1hZ2VVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JTUFHRVVSTF07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRMaW5rKCkgT2J0YWlucyB0aGUgVVJMIHRvIGJlIGFjY2Vzc2VkIGZyb20gYSBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIGdldExpbmsoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5MSU5LXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldE5vdGlmeUlkKCkgT2J0YWlucyB0aGUgdW5pcXVlIElEIG9mIGEgbWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBnZXROb3RpZnlJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLk5PVElGWUlEXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldFdoZW4oKVxyXG4gICAgICovXHJcbiAgICBnZXRXaGVuKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uV0hFTl07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRMaWdodFNldHRpbmdzKClcclxuICAgICAqL1xyXG4gICAgZ2V0TGlnaHRTZXR0aW5ncygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkxJR0hUU0VUVElOR1NdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0QmFkZ2VOdW1iZXIoKVxyXG4gICAgICovXHJcbiAgICBnZXRCYWRnZU51bWJlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkJBREdFTlVNQkVSXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldEltcG9ydGFuY2UoKVxyXG4gICAgICovXHJcbiAgICBnZXRJbXBvcnRhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSU1QT1JUQU5DRV07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRUaWNrZXIoKVxyXG4gICAgICovXHJcbiAgICBnZXRUaWNrZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5USUNLRVJdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0VmlicmF0ZUNvbmZpZygpXHJcbiAgICAgKi9cclxuICAgIGdldFZpYnJhdGVDb25maWcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5WSUJSQVRFQ09ORklHXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldFZpc2liaWxpdHkoKVxyXG4gICAgICovXHJcbiAgICBnZXRWaXNpYmlsaXR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVklTSUJJTElUWV07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRJbnRlbnRVcmkoKVxyXG4gICAgICovXHJcbiAgICBnZXRJbnRlbnRVcmkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JTlRFTlRVUkldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246aXNBdXRvQ2FuY2VsKClcclxuICAgICAqL1xyXG4gICAgaXNBdXRvQ2FuY2VsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSVNBVVRPQ0FOQ0VMXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldEludGVudFVyaSgpXHJcbiAgICAgKi9cclxuICAgIGlzTG9jYWxPbmx5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSVNMT0NBTE9OTFldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246aXNEZWZhdWx0TGlnaHQoKVxyXG4gICAgICovXHJcbiAgICBpc0RlZmF1bHRMaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklTREVGQVVMVExJR0hUXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmlzRGVmYXVsdFNvdW5kKClcclxuICAgICAqL1xyXG4gICAgaXNEZWZhdWx0U291bmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JU0RFRkFVTFRTT1VORF07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjppc0RlZmF1bHRWaWJyYXRlKClcclxuICAgICAqL1xyXG4gICAgaXNEZWZhdWx0VmlicmF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbXHJcbiAgICAgICAgICAgIENvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JU0RFRkFVTFRWSUJSQVRFXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxufVxyXG5cclxudHlwZSBMb2NhbE5vdGlmaWNhdGlvbk9iamVjdCA9IHtcclxuICAgIFtrZXkgaW4gQXR0cl0/OiBhbnk7XHJcbn07XHJcblxyXG50eXBlIFJlbW90ZU1lc3NhZ2VPYmplY3QgPSB7XHJcbiAgICBba2V5IGluIFJlbW90ZU1lc3NhZ2VCdWlsZGVyXT86IGFueTtcclxufTtcclxuXHJcbmludGVyZmFjZSBJZFRhZyB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgdGFnOiBzdHJpbmc7XHJcbn1cclxuIl19