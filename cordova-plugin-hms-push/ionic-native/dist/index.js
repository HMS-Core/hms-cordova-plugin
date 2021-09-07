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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from "@ionic-native/core";
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
}(IonicNativePlugin));
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
}(IonicNativePlugin));
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
}(IonicNativePlugin));
var HmsPushProfile = new HmsPushProfileOriginal();
export { HmsPushProfile };
var FcmPushProxyOriginal = /** @class */ (function (_super) {
    __extends(FcmPushProxyOriginal, _super);
    function FcmPushProxyOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FcmPushProxyOriginal.prototype.init = function () {
        return;
    };
    FcmPushProxyOriginal.pluginName = "FcmPushProxy";
    FcmPushProxyOriginal.plugin = "@hmscore/cordova-plugin-hms-push";
    FcmPushProxyOriginal.pluginRef = "FcmPushProxy";
    FcmPushProxyOriginal.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    FcmPushProxyOriginal.platforms = ["Android"];
    return FcmPushProxyOriginal;
}(IonicNativePlugin));
var FcmPushProxy = new FcmPushProxyOriginal();
export { FcmPushProxy };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1wdXNoL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFpQkEsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFVM0MsMkJBQWlCOzs7UUFDMUMsdUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDdEMsMEJBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFDNUMsMEJBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFDNUMseUJBQW1CLEdBQUcsS0FBSyxDQUFBOzs7SUFFM0I7OztPQUdHO0lBQ0gsc0JBQUk7SUFLSiw4QkFBWTtJQUtaLCtCQUFhO0lBS2I7OztPQUdHO0lBQ0gsNEJBQVU7SUFLVjs7O09BR0c7SUFDSCw2QkFBVztJQUtYOzs7T0FHRztJQUNILHVCQUFLO0lBS0w7OztPQUdHO0lBQ0gseUJBQU87SUFLUDs7OztPQUlHO0lBQ0gsMEJBQVEsYUFBQyxLQUFjO0lBS3ZCOzs7O09BSUc7SUFDSCx1Q0FBcUIsYUFBQyxTQUFpQjtJQUt2Qzs7O09BR0c7SUFDSCxpQ0FBZTtJQUtmOzs7T0FHRztJQUNILDRCQUFVO0lBS1Y7Ozs7T0FJRztJQUNILDZCQUFXLGFBQUMsS0FBYztJQUsxQjs7OztPQUlHO0lBQ0gsMENBQXdCLGFBQUMsU0FBaUI7SUFLMUM7Ozs7T0FJRztJQUNILDJCQUFTLGFBQUMsS0FBYTtJQUt2Qjs7OztPQUlHO0lBQ0gsNkJBQVcsYUFBQyxLQUFhO0lBS3pCOzs7O09BSUc7SUFDSCxvQ0FBa0IsYUFBQyxPQUFnQjtJQUtuQyx5QkFBTztJQUtQOzs7T0FHRztJQUNILG1DQUFpQjtJQUtqQix3Q0FBc0I7SUFLdEIsbUNBQWlCLGFBQUMsYUFBa0M7SUFLcEQsbUNBQWlCLGFBQUMsUUFBZTtJQUtqQyx5QkFBTyxhQUFDLEdBQVUsRUFBQyxLQUFZO0lBSy9CLHlCQUFPLGFB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O1FBQ1osUUFBUSxFQUFFLFVBQVU7UUFDcEIsSUFBSSxFQUFFLE1BQU07UUFDWixhQUFhLEVBQUUsZUFBZTtRQUM5QixXQUFXLEVBQUUsYUFBYTtRQUMxQixVQUFVLEVBQUUsWUFBWTtRQUN4QixNQUFNLEVBQUUsUUFBUTtRQUNoQixhQUFhLEVBQUUsZUFBZTtRQUM5QixVQUFVLEVBQUUsWUFBWTtRQUN4QixTQUFTLEVBQUUsV0FBVztRQUN0QixZQUFZLEVBQUUsY0FBYztRQUM1QixXQUFXLEVBQUUsYUFBYTtRQUMxQixjQUFjLEVBQUUsZ0JBQWdCO1FBQ2hDLGNBQWMsRUFBRSxnQkFBZ0I7UUFDaEMsZ0JBQWdCLEVBQUUsa0JBQWtCO0tBQ3ZDLENBQUM7K0JBMXNCTjs7U0F1cEJNLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgICBDb3B5cmlnaHQgMjAyMC0yMDIxLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5cclxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcclxuICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG5cclxuICAgICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAgICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSBcIkBpb25pYy1uYXRpdmUvY29yZVwiO1xyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiBcIkhtc1B1c2hcIixcclxuICAgIHBsdWdpbjogXCJAaG1zY29yZS9jb3Jkb3ZhLXBsdWdpbi1obXMtcHVzaFwiLFxyXG4gICAgcGx1Z2luUmVmOiBcIkhtc1B1c2hcIixcclxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxyXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIbXNQdXNoIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gICAgSG1zUHVzaFJlc3VsdENvZGUgPSBIbXNQdXNoUmVzdWx0Q29kZTtcclxuICAgIENvcmRvdmFSZW1vdGVNZXNzYWdlID0gQ29yZG92YVJlbW90ZU1lc3NhZ2U7XHJcbiAgICBSZW1vdGVNZXNzYWdlQnVpbGRlciA9IFJlbW90ZU1lc3NhZ2VCdWlsZGVyO1xyXG4gICAgREVGQVVMVF9UT0tFTl9TQ09QRSA9IFwiSENNXCJcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kICBpbml0aWFsaXplZCBIbXNQdXNoLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICAgICovXHJcbiAgICBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBkaXNhYmxlIHRoZSBkaXNwbGF5IG9mIG5vdGlmaWNhdGlvbiBtZXNzYWdlcy4gSWYgeW91IHdhbnQgdG8gY29udHJvbCB0aGUgZGlzcGxheSBvZiBub3RpZmljYXRpb24gbWVzc2FnZXMgaW4gYW4gYXBwLCB5b3UgY2FuIGNhbGwgdGhpcyBtZXRob2QuIFRoaXMgbWV0aG9kIGFwcGxpZXMgdG8gbm90aWZpY2F0aW9uIG1lc3NhZ2VzIGJ1dCBub3QgZGF0YSBtZXNzYWdlcy4gSXQgaXMgdGhlIGFwcCB0aGF0IGRldGVybWluZXMgd2hldGhlciB0byBlbmFibGUgb3IgZGlzYWJsZSBkYXRhIG1lc3NhZ2luZy5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAgICovXHJcbiAgICB0dXJuT25QdXNoKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGVuYWJsZSB0aGUgZGlzcGxheSBvZiBub3RpZmljYXRpb24gbWVzc2FnZXMuIElmIHlvdSB3YW50IHRvIGNvbnRyb2wgdGhlIGRpc3BsYXkgb2Ygbm90aWZpY2F0aW9uIG1lc3NhZ2VzIGluIGFuIGFwcCwgeW91IGNhbiBjYWxsIHRoaXMgbWV0aG9kLiBUaGlzIG1ldGhvZCBhcHBsaWVzIHRvIG5vdGlmaWNhdGlvbiBtZXNzYWdlcyBidXQgbm90IGRhdGEgbWVzc2FnZXMuIEl0IGlzIHRoZSBhcHAgdGhhdCBkZXRlcm1pbmVzIHdoZXRoZXIgdG8gZW5hYmxlIG9yIGRpc2FibGUgZGF0YSBtZXNzYWdpbmcuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgICAqL1xyXG4gICAgdHVybk9mZlB1c2goKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gb2J0YWluIGFuIEFBSUQgaW4gc3luY2hyb25vdXMgbW9kZS4gQmVmb3JlIGFwcGx5aW5nIGZvciBhIHRva2VuLCBhbiBhcHAgY2FsbHMgdGhpcyBtZXRob2QgdG8gb2J0YWluIGl0cyB1bmlxdWUgQUFJRC4gVGhlIEhVQVdFSSBQdXNoIHNlcnZlciBnZW5lcmF0ZXMgYSB0b2tlbiBmb3IgdGhlIGFwcCBiYXNlZCBvbiB0aGUgQUFJRC4gSWYgdGhlIEFBSUQgb2YgdGhlIGFwcCBjaGFuZ2VzLCBhIG5ldyB0b2tlbiB3aWxsIGJlIGdlbmVyYXRlZCBuZXh0IHRpbWUgd2hlbiB0aGUgYXBwIGFwcGxpZXMgZm9yIGEgdG9rZW4uIElmIGFuIGFwcCBuZWVkcyB0byByZXBvcnQgc3RhdGlzdGljcyBldmVudHMsIGl0IG11c3QgY2FycnkgdGhlIEFBSUQgYXMgaXRzIHVuaXF1ZSBJRC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAgICovXHJcbiAgICBnZXRJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIG9idGFpbiBhbiBBQUlEIGluIGFzeW5jaHJvbm91cyBtb2RlLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICAgKi9cclxuICAgIGdldEFBSUQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBvYnRhaW4gYSB0b2tlbiByZXF1aXJlZCBmb3IgYWNjZXNzaW5nIEhVQVdFSSBQdXNoIEtpdC4gSWYgdGhlcmUgaXMgbm8gbG9jYWwgQUFJRCwgdGhpcyBtZXRob2Qgd2lsbCBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlIGFuIEFBSUQgd2hlbiBpdCBpcyBjYWxsZWQgYmVjYXVzZSB0aGUgSFVBV0VJIFB1c2ggS2l0IHNlcnZlciBuZWVkcyB0byBnZW5lcmF0ZSBhIHRva2VuIGJhc2VkIG9uIHRoZSBBQUlELlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICAgKiBAcGFyYW1zIHNjb3BlID8gOiBTdHJpbmdcclxuICAgICAqL1xyXG4gICAgZ2V0VG9rZW4oc2NvcGU/OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRhaW5zIGEgdG9rZW4gdGhhdCBhIHRhcmdldCBhcHAgZGV2ZWxvcGVyIGFwcGxpZXMgZm9yIGEgc2VuZGVyIHRvIGludGVncmF0ZSBQdXNoIEtpdCBpbiB0aGUgbXVsdGktc2VuZGVyIHNjZW5hcmlvLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICAgKiBAcGFyYW1zIHN1YmplY3RJZCA/IDogU3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGdldFRva2VuV2l0aFN1YmplY3RJZChzdWJqZWN0SWQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gb2J0YWluIHRoZSBnZW5lcmF0aW9uIHRpbWVzdGFtcCBvZiBhbiBBQUlELlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICAgKi9cclxuICAgIGdldENyZWF0aW9uVGltZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGRlbGV0ZSBhIGxvY2FsIEFBSUQgYW5kIGl0cyBnZW5lcmF0aW9uIHRpbWVzdGFtcC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAgICovXHJcbiAgICBkZWxldGVBQUlEKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGRlbGV0ZSBhIHRva2VuLiBBZnRlciBhIHRva2VuIGlzIGRlbGV0ZWQsIHRoZSBjb3JyZXNwb25kaW5nIEFBSUQgd2lsbCBub3QgYmUgZGVsZXRlZC4gVGhpcyBtZXRob2QgaXMgYSBzeW5jaHJvbm91cyBtZXRob2QuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgICAqIEBwYXJhbXMgc2NvcGUgPyA6IFN0cmluZ1xyXG4gICAgICovXHJcbiAgICBkZWxldGVUb2tlbihzY29wZT86IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGVzIGEgdG9rZW4gdGhhdCBhIHRhcmdldCBhcHAgZGV2ZWxvcGVyIGFwcGxpZXMgZm9yIGEgc2VuZGVyIHRvIGludGVncmF0ZSBQdXNoIEtpdCBpbiB0aGUgbXVsdGktc2VuZGVyIHNjZW5hcmlvLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICAgKiBAcGFyYW1zIHN1YmplY3RJZCA/IDogU3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZVRva2VuV2l0aFN1YmplY3RJZChzdWJqZWN0SWQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gc3Vic2NyaWJlIHRvIHRvcGljcyBpbiBhc3luY2hyb25vdXMgbW9kZS4gVGhlIEhVQVdFSSBQdXNoIEtpdCB0b3BpYyBtZXNzYWdpbmcgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBzZW5kIG1lc3NhZ2VzIHRvIG11bHRpcGxlIGRldmljZXMgd2hvc2UgdXNlcnMgaGF2ZSBzdWJzY3JpYmVkIHRvIGEgc3BlY2lmaWMgdG9waWMuIFlvdSBjYW4gd3JpdGUgbWVzc2FnZXMgYWJvdXQgdGhlIHRvcGljIGFzIHJlcXVpcmVkLCBhbmQgSFVBV0VJIFB1c2ggS2l0IGRldGVybWluZXMgdGhlIHJlbGVhc2UgcGF0aCBhbmQgc2VuZHMgbWVzc2FnZXMgdG8gdGhlIGNvcnJlY3QgZGV2aWNlcyBpbiBhIHJlbGlhYmxlIG1hbm5lci5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0b3BpYyBUb3BpYyB0byBiZSBzdWJzY3JpYmVkIHRvLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICAgKi9cclxuICAgIHN1YnNjcmliZSh0b3BpYzogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gdW5zdWJzY3JpYmUgZnJvbSB0b3BpY3MgdGhhdCBhcmUgc3Vic2NyaWJlZCB0byB0aHJvdWdoIHRoZSBzdWJzY3JpYmUgbWV0aG9kLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRvcGljIFRvcGljIHRvIGJlIHVuc3Vic2NyaWJlZCB0by5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAgICovXHJcbiAgICB1bnN1YnNjcmliZSh0b3BpYzogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgd2hldGhlciB0byBlbmFibGUgYXV0b21hdGljIGluaXRpYWxpemF0aW9uLiBJZiB0aGUgZW5hYmxlIHBhcmFtZXRlciBpcyBzZXQgdG8gdHJ1ZSwgdGhlIFNESyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlcyBhbiBBQUlEIGFuZCBhcHBsaWVzIGZvciBhIHRva2VuLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxib29sZWFuPlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBlbmFibGVkIEluZGljYXRlcyB3aGV0aGVyIHRvIGVuYWJsZSBhdXRvbWF0aWMgaW5pdGlhbGl6YXRpb24uXHJcbiAgICAgKi9cclxuICAgIHNldEF1dG9Jbml0RW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRPZGlkKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gY2hlY2sgd2hldGhlciBhdXRvbWF0aWMgaW5pdGlhbGl6YXRpb24gaXMgZW5hYmxlZC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAgICovXHJcbiAgICBpc0F1dG9Jbml0RW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEluaXRpYWxOb3RpZmljYXRpb24oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNlbmRSZW1vdGVNZXNzYWdlKHJlbW90ZU1lc3NhZ2U6IFJlbW90ZU1lc3NhZ2VPYmplY3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldEJhY2tncm91bmRGaWxlKGZpbGVQYXRoOnN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0SXRlbShrZXk6c3RyaW5nLHZhbHVlOnN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0SXRlbShrZXk6c3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHJlbW92ZUl0ZW0oa2V5OnN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVtb3ZlQmFja2dyb3VuZEZpbGUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiBcIkhtc0xvY2FsTm90aWZpY2F0aW9uXCIsXHJcbiAgICBwbHVnaW46IFwiQGhtc2NvcmUvY29yZG92YS1wbHVnaW4taG1zLXB1c2hcIixcclxuICAgIHBsdWdpblJlZjogXCJIbXNMb2NhbE5vdGlmaWNhdGlvblwiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhtc0xvY2FsTm90aWZpY2F0aW9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gICAgQXR0ciA9IEF0dHI7XHJcbiAgICBJbXBvcnRhbmNlID0gSW1wb3J0YW5jZTtcclxuICAgIFByaW9yaXR5ID0gUHJpb3JpdHk7XHJcbiAgICBSZXBlYXRUeXBlID0gUmVwZWF0VHlwZTtcclxuICAgIFZpc2liaWxpdHkgPSBWaXNpYmlsaXR5O1xyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBsb2NhbE5vdGlmaWNhdGlvbihsb2NhbE5vdGlmaWNhdGlvbjogTG9jYWxOb3RpZmljYXRpb25PYmplY3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgbG9jYWxOb3RpZmljYXRpb25TY2hlZHVsZShsb2NhbE5vdGlmaWNhdGlvbjogTG9jYWxOb3RpZmljYXRpb25PYmplY3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgY2FuY2VsQWxsTm90aWZpY2F0aW9ucygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGNhbmNlbE5vdGlmaWNhdGlvbnMoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBjYW5jZWxTY2hlZHVsZWROb3RpZmljYXRpb25zKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgY2FuY2VsTm90aWZpY2F0aW9uc1dpdGhJZChpZDogbnVtYmVyW10pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGNhbmNlbE5vdGlmaWNhdGlvbnNXaXRoSWRUYWcoaWRUYWc6IElkVGFnW10pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGNhbmNlbE5vdGlmaWNhdGlvbnNXaXRoVGFnKHRhZzogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXROb3RpZmljYXRpb25zKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRTY2hlZHVsZWROb3RpZmljYXRpb25zKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRDaGFubmVscygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgY2hhbm5lbEV4aXN0cyhjaGFubmVsSWQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgY2hhbm5lbEJsb2NrZWQoY2hhbm5lbElkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGRlbGV0ZUNoYW5uZWwoY2hhbm5lbElkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gICAgcGx1Z2luTmFtZTogXCJIbXNQdXNoRXZlbnRcIixcclxuICAgIHBsdWdpbjogXCJAaG1zY29yZS9jb3Jkb3ZhLXBsdWdpbi1obXMtcHVzaFwiLFxyXG4gICAgcGx1Z2luUmVmOiBcIkhtc1B1c2hFdmVudFwiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhtc1B1c2hFdmVudCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBvblJlbW90ZU1lc3NhZ2VSZWNlaXZlZCAoY2FsbGJhY2s6KGRhdGE6YW55KT0+dm9pZCk6dm9pZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIFxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgb25Ub2tlblJlY2VpdmVkIChjYWxsYmFjazooZGF0YTphbnkpPT52b2lkKTp2b2lkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBvblRva2VuRXJyb3IgKGNhbGxiYWNrOihkYXRhOmFueSk9PnZvaWQpOnZvaWQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIG9uUHVzaE1lc3NhZ2VTZW50IChjYWxsYmFjazooZGF0YTphbnkpPT52b2lkKTp2b2lkIHtcclxuICAgIHJldHVybjtcclxuICAgfVxyXG4gIFxyXG4gICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICBvblB1c2hNZXNzYWdlU2VudEVycm9yIChjYWxsYmFjazooZGF0YTphbnkpPT52b2lkKTp2b2lkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBvblB1c2hNZXNzYWdlU2VudERlbGl2ZXJlZCAoY2FsbGJhY2s6KGRhdGE6YW55KT0+dm9pZCk6dm9pZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIFxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgb25Mb2NhbE5vdGlmaWNhdGlvbkFjdGlvbiAoY2FsbGJhY2s6KGRhdGE6YW55KT0+dm9pZCk6dm9pZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIFxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgb25Ob3RpZmljYXRpb25PcGVuZWRBcHAgKGNhbGxiYWNrOihkYXRhOmFueSk9PnZvaWQpOnZvaWQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIG9uTXVsdGlTZW5kZXJUb2tlblJlY2VpdmVkRXZlbnQoY2FsbGJhY2s6KGRhdGE6YW55KT0+dm9pZCk6dm9pZHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBvbk11bHRpU2VuZGVyVG9rZW5FcnJvckV2ZW50KGNhbGxiYWNrOihkYXRhOmFueSk9PnZvaWQpOnZvaWR7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIFxyXG4gIFJFTU9URV9EQVRBX01FU1NBR0VfUkVDRUlWRUQgPSBcIlJFTU9URV9EQVRBX01FU1NBR0VfUkVDRUlWRURcIlxyXG4gIFRPS0VOX1JFQ0VJVkVEX0VWRU5UID0gXCJUT0tFTl9SRUNFSVZFRF9FVkVOVFwiXHJcbiAgT05fVE9LRU5fRVJST1JfRVZFTlQgPSBcIk9OX1RPS0VOX0VSUk9SX0VWRU5UXCJcclxuICBOT1RJRklDQVRJT05fT1BFTkVEX0VWRU5UID0gXCJOT1RJRklDQVRJT05fT1BFTkVEX0VWRU5UXCJcclxuICBMT0NBTF9OT1RJRklDQVRJT05fQUNUSU9OX0VWRU5UID0gXCJMT0NBTF9OT1RJRklDQVRJT05fQUNUSU9OX0VWRU5UXCJcclxuICBPTl9QVVNIX01FU1NBR0VfU0VOVCA9IFwiT05fUFVTSF9NRVNTQUdFX1NFTlRcIlxyXG4gIE9OX1BVU0hfTUVTU0FHRV9TRU5UX0VSUk9SID0gXCJPTl9QVVNIX01FU1NBR0VfU0VOVF9FUlJPUlwiXHJcbiAgT05fUFVTSF9NRVNTQUdFX1NFTlRfREVMSVZFUkVEID0gXCJPTl9QVVNIX01FU1NBR0VfU0VOVF9ERUxJVkVSRURcIlxyXG4gIE9OX01VTFRJX1NFTkRFUl9UT0tFTl9FUlJPUl9FVkVOVCA9IFwiT05fTVVMVElfU0VOREVSX1RPS0VOX0VSUk9SX0VWRU5UXCJcclxuICBPTl9NVUxUSV9TRU5ERVJfVE9LRU5fUkVDRUlWRURfRVZFTlQgPSBcIk9OX01VTFRJX1NFTkRFUl9UT0tFTl9SRUNFSVZFRF9FVkVOVFwiXHJcbiAgfVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogXCJIbXNQdXNoUHJvZmlsZVwiLFxyXG4gIHBsdWdpbjogXCJAaG1zY29yZS9jb3Jkb3ZhLXBsdWdpbi1obXMtcHVzaFwiLFxyXG4gIHBsdWdpblJlZjogXCJIbXNQdXNoUHJvZmlsZVwiLFxyXG4gIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxyXG4gIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSG1zUHVzaFByb2ZpbGUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgXHJcbiAgSFVBV0VJX1BST0ZJTEU9MTtcclxuICBDVVNUT01fUFJPRklMRT0yO1xyXG4gIFVOREVGSU5FRF9QUk9GSUxFPS0xO1xyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGlzU3VwcG9ydFByb2ZpbGUoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYWRkUHJvZmlsZSh0eXBlOm51bWJlciwgcHJvZmlsZUlkOnN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYWRkUHJvZmlsZVdpdGhTdWJqZWN0SWQoc3ViamVjdElkOnN0cmluZywgdHlwZTpudW1iZXIsIHByb2ZpbGVJZDpzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGRlbGV0ZVByb2ZpbGUocHJvZmlsZUlkOnN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZGVsZXRlUHJvZmlsZVdpdGhTdWJqZWN0SWQoc3ViamVjdElkOnN0cmluZywgcHJvZmlsZUlkOnN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gICAgcGx1Z2luTmFtZTogXCJGY21QdXNoUHJveHlcIixcclxuICAgIHBsdWdpbjogXCJAaG1zY29yZS9jb3Jkb3ZhLXBsdWdpbi1obXMtcHVzaFwiLFxyXG4gICAgcGx1Z2luUmVmOiBcIkZjbVB1c2hQcm94eVwiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXHJcbiAgfSlcclxuICBASW5qZWN0YWJsZSgpXHJcbiAgZXhwb3J0IGNsYXNzIEZjbVB1c2hQcm94eSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAgIGluaXQoKTogUHJvbWlzZTxib29sZWFuPntcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGVudW0gSG1zUHVzaFJlc3VsdENvZGUge1xyXG4gICAgLy8gU3VjY2Vzc1xyXG4gICAgU1VDQ0VTUyA9IFwiMFwiLFxyXG5cclxuICAgIC8vIEVycm9yXHJcbiAgICBFUlJPUiA9IFwiLTFcIixcclxuXHJcbiAgICAvLyBCdW5kbGUgaXMgbnVsbCwgZXhjZXB0aW9uXHJcbiAgICBOVUxMX0JVTkRMRSA9IFwiMzMzXCIsXHJcblxyXG4gICAgLy8gWW91IGRvIG5vdCBoYXZlIGEgdG9rZW4uIEFwcGx5IGZvciBhIHRva2VuLlxyXG4gICAgRVJST1JfTk9fVE9LRU4gPSBcIjkwNzEyMjAzMFwiLFxyXG5cclxuICAgIC8vIFRoZSBjdXJyZW50IG5ldHdvcmsgaXMgdW5hdmFpbGFibGUuIENoZWNrIHRoZSBuZXR3b3JrIGNvbm5lY3Rpb24uXHJcbiAgICBFUlJPUl9OT19ORVRXT1JLID0gXCI5MDcxMjIwMzFcIixcclxuXHJcbiAgICAvLyBUaGUgdG9rZW4gaGFzIGV4cGlyZWQuIERlbGV0ZSB0aGUgdG9rZW4gYW5kIGFwcGx5IGZvciBhIG5ldyBvbmUuXHJcbiAgICBFUlJPUl9UT0tFTl9JTlZBTElEID0gXCI5MDcxMjIwMzJcIixcclxuXHJcbiAgICAvLyBJZiB0aGUgUHVzaCBzZXJ2aWNlIGlzIHVuYXZhaWxhYmxlLCBjb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICAgIEVSUk9SX1NFUlZJQ0VfTk9UX0FWQUlMQUJMRSA9IFwiOTA3MTIyMDQ2XCIsXHJcblxyXG4gICAgLy8gSWYgdGhlIFB1c2ggc2VydmVyIHJldHVybnMgYW4gZXJyb3IsIGNvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gICAgRVJST1JfUFVTSF9TRVJWRVIgPSBcIjkwNzEyMjA0N1wiLFxyXG5cclxuICAgIC8vIFVua25vd24gZXJyb3IuIENvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gICAgRVJST1JfVU5LTk9XTiA9IFwiOTA3MTIyMDQ1XCIsXHJcblxyXG4gICAgLy8gVGhlIG51bWJlciBvZiBzdWJzY3JpYmVkIHRvcGljcyBleGNlZWRzIDIwMDAuXHJcbiAgICBFUlJPUl9UT1BJQ19FWENFRUQgPSBcIjkwNzEyMjAzNFwiLFxyXG5cclxuICAgIC8vIEZhaWxlZCB0byBzZW5kIHRoZSBzdWJzY3JpcHRpb24gdG9waWMuIENvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gICAgRVJST1JfVE9QSUNfU0VORCA9IFwiOTA3MTIyMDM1XCIsXHJcblxyXG4gICAgLy8gUHVzaCByaWdodHMgYXJlIG5vdCBlbmFibGVkLiBFbmFibGUgdGhlIHNlcnZpY2UgYW5kIHNldCBwdXNoIHNlcnZpY2UgcGFyYW1ldGVycyBhdCBBcHBHYWxsZXJ5IENvbm5lY3QuXHJcbiAgICBFUlJPUl9OT19SSUdIVCA9IFwiOTA3MTIyMDM2XCIsXHJcblxyXG4gICAgLy8gRmFpbGVkIHRvIGFwcGx5IGZvciB0aGUgdG9rZW4uIENvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gICAgRVJST1JfR0VUX1RPS0VOX0VSUiA9IFwiOTA3MTIyMDM3XCIsXHJcblxyXG4gICAgLy8gTm8gc3RvcmFnZSBsb2NhdGlvbiBpcyBzZWxlY3RlZCBmb3IgdGhlIGFwcGxpY2F0aW9uIG9yIHRoZSBzdG9yYWdlIGxvY2F0aW9uIGlzIGludmFsaWQuXHJcbiAgICBFUlJPUl9TVE9SQUdFX0xPQ0FUSU9OX0VNUFRZID0gXCI5MDcxMjIwMzhcIixcclxuXHJcbiAgICAvLyBGYWlsZWQgdG8gYXBwbHkgZm9yIGEgdG9rZW4uIENyb3NzLXJlZ2lvbiB0b2tlbiBhcHBsaWNhdGlvbiBpcyBub3QgYWxsb3dlZC5cclxuICAgIEVSUk9SX05PVF9BTExPV19DUk9TU19BUFBMWSA9IFwiOTA3MTIyMDUzXCIsXHJcblxyXG4gICAgLy8gVGhlIG1lc3NhZ2UgYm9keSBzaXplIGV4Y2VlZHMgdGhlIG1heGltdW0uXHJcbiAgICBFUlJPUl9TSVpFID0gXCI5MDcxMjIwNDFcIixcclxuXHJcbiAgICAvLyBUaGUgbWVzc2FnZSBjb250YWlucyBpbnZhbGlkIHBhcmFtZXRlcnMuXHJcbiAgICBFUlJPUl9JTlZBTElEX1BBUkFNRVRFUlMgPSBcIjkwNzEyMjA0MlwiLFxyXG5cclxuICAgIC8vIFRoZSBudW1iZXIgb2Ygc2VudCBtZXNzYWdlcyByZWFjaGVzIHRoZSB1cHBlciBsaW1pdC4gVGhlIG1lc3NhZ2VzIHdpbGwgYmUgZGlzY2FyZGVkLlxyXG4gICAgRVJST1JfVE9PX01BTllfTUVTU0FHRVMgPSBcIjkwNzEyMjA0M1wiLFxyXG5cclxuICAgIC8vIFRoZSBtZXNzYWdlIGxpZmV0aW1lIGV4cGlyZXMgYmVmb3JlIHRoZSBtZXNzYWdlIGlzIHN1Y2Nlc3NmdWxseSBzZW50IHRvIHRoZSBBUFAgc2VydmVyLlxyXG4gICAgRVJST1JfVFRMX0VYQ0VFREVEID0gXCI5MDcxMjIwNDRcIixcclxuXHJcbiAgICAvLyAgSHVhd2VpIE1vYmlsZSBTZXJ2aWNlcyAoQVBLKSBjYW4ndCBjb25uZWN0ICBIdWF3ZWkgUHVzaCAgS2l0LlxyXG4gICAgRVJST1JfSE1TX0NMSUVOVF9BUEkgPSBcIjkwNzEyMjA0OFwiLFxyXG5cclxuICAgIC8vIFRoZSBjdXJyZW50IEVNVUkgdmVyc2lvbiBpcyB0b28gZWFybHkgdG8gdXNlIHRoZSBjYXBhYmlsaXR5LlxyXG4gICAgRVJST1JfT1BFUkFUSU9OX05PVF9TVVBQT1JURUQgPSBcIjkwNzEyMjA0OVwiLFxyXG5cclxuICAgIC8vIFRoZSBvcGVyYXRpb24gY2Fubm90IGJlIHBlcmZvcm1lZCBpbiB0aGUgbWFpbiB0aHJlYWQuXHJcbiAgICBFUlJPUl9NQUlOX1RIUkVBRCA9IFwiOTA3MTIyMDUwXCIsXHJcblxyXG4gICAgLy8gVGhlIGRldmljZSBjZXJ0aWZpY2F0ZSBhdXRoZW50aWNhdGlvbiBmYWlscy5cclxuICAgIEVSUk9SX0hNU19ERVZJQ0VfQVVUSF9GQUlMRURfU0VMRl9NQVBQSU5HID0gXCI5MDcxMjIwNTFcIixcclxuXHJcbiAgICAvLyBGYWlsZWQgdG8gYmluZCB0aGUgc2VydmljZS5cclxuICAgIEVSUk9SX0JJTkRfU0VSVklDRV9TRUxGX01BUFBJTkcgPSBcIjkwNzEyMjA1MlwiLFxyXG5cclxuICAgIC8vIFRoZSBTREsgaXMgYmVpbmcgYXV0b21hdGljYWxseSBpbml0aWFsaXplZC4gVHJ5IGFnYWluIGxhdGVyLlxyXG4gICAgRVJST1JfQVVUT19JTklUSUFMSVpJTkcgPSBcIjkwNzEyMjA1NFwiLFxyXG5cclxuICAgIC8qVGhlIGlucHV0IHBhcmFtZXRlciBpcyBpbmNvcnJlY3QuIENoZWNrIHdoZXRoZXIgdGhlIHJlbGF0ZWQgY29uZmlndXJhdGlvbiBpbmZvcm1hdGlvbiBpcyBjb3JyZWN0LlxyXG4gICAgICogRXhhbXBsZTogYXBwX2lkIGluIHRoZSBhZ2Nvbm5lY3QgLSBzZXJ2aWNlcy5qc29uIGZpbGU7XHJcbiAgICAgKiBDaGVjayB3aGV0aGVyIHRoZSBidWlsZC5ncmFkbGUgZmlsZSBpcyBjb25maWd1cmVkIHdpdGggdGhlIGNlcnRpZmljYXRlIHNpZ25hdHVyZS5cclxuICAgICAqL1xyXG4gICAgRVJST1JfQVJHVU1FTlRTX0lOVkFMSUQgPSBcIjkwNzEzNTAwMFwiLFxyXG5cclxuICAgIC8vIEludGVybmFsIFB1c2ggZXJyb3IuIENvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0IGVuZ2luZWVycy5cclxuICAgIEVSUk9SX0lOVEVSTkFMX0VSUk9SID0gXCI5MDcxMzUwMDFcIixcclxuXHJcbiAgICAvLyBUaGUgc2VydmljZSBkb2VzIG5vdCBleGlzdC4gVGhlIGludm9rZWQgaW50ZXJmYWNlIGRvZXMgbm90IGV4aXN0LlxyXG4gICAgRVJST1JfTkFNSU5HX0lOVkFMSUQgPSBcIjkwNzEzNTAwMlwiLFxyXG5cclxuICAgIC8vIFRoZSBBcGlDbGllbnQgb2JqZWN0IGlzIGludmFsaWQuXHJcbiAgICBFUlJPUl9DTElFTlRfQVBJX0lOVkFMSUQgPSBcIjkwNzEzNTAwM1wiLFxyXG5cclxuICAgIC8vIEludm9raW5nIEFJREwgdGltZXMgb3V0LiBDb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICAgIEVSUk9SX0VYRUNVVEVfVElNRU9VVCA9IFwiOTA3MTM1MDA0XCIsXHJcblxyXG4gICAgLy8gVGhlIGN1cnJlbnQgYXJlYSBkb2VzIG5vdCBzdXBwb3J0IHRoaXMgc2VydmljZS5cclxuICAgIEVSUk9SX05PVF9JTl9TRVJWSUNFID0gXCI5MDcxMzUwMDVcIixcclxuXHJcbiAgICAvLyBJZiB0aGUgQUlETCBjb25uZWN0aW9uIHNlc3Npb24gaXMgaW52YWxpZCwgY29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXHJcbiAgICBFUlJPUl9TRVNTSU9OX0lOVkFMSUQgPSBcIjkwNzEzNTAwNlwiLFxyXG5cclxuICAgIC8vIEFuIGVycm9yIG9jY3VycmVkIHdoZW4gaW52b2tpbmcgYW4gdW5zcGVjaWZpZWQgQVBJLlxyXG4gICAgRVJST1JfQVBJX05PVF9TUEVDSUZJRUQgPSBcIjEwMDJcIixcclxuXHJcbiAgICAvKiBGYWlsZWQgdG8gaW52b2tlIHRoZSBnYXRld2F5IHRvIHF1ZXJ5IHRoZSBhcHBsaWNhdGlvbiBzY29wZS5cclxuICAgICAqIENoZWNrIHdoZXRoZXIgdGhlIGN1cnJlbnQgYXBwIGhhcyBiZWVuIGNyZWF0ZWQgYW5kIGVuYWJsZWQgaW4gQXBwR2FsbGVyeSBDb25uZWN0LlxyXG4gICAgICogSWYgeWVzLCBjb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICAgICAqL1xyXG4gICAgRVJST1JfR0VUX1NDT1BFX0VSUk9SID0gXCI5MDcxMzU3MDBcIixcclxuICAgIC8qIFNjb3BlIGlzIG5vdCBjb25maWd1cmVkIG9uIHRoZSBBcHBHYWxsZXJ5IENvbm5lY3QuXHJcbiAgICAgKiBDaGVjayB3aGV0aGVyIHRoZSBjdXJyZW50IGFwcCBoYXMgYmVlbiBjcmVhdGVkIGFuZCBlbmFibGVkIGluIEFwcEdhbGxlcnkgQ29ubmVjdC5cclxuICAgICAqIElmIHllcywgY29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXHJcbiAgICAgKi9cclxuICAgIEVSUk9SX1NDT1BFX0xJU1RfRU1QVFkgPSBcIjkwNzEzNTcwMVwiLFxyXG5cclxuICAgIC8qIFRoZSBjZXJ0aWZpY2F0ZSBmaW5nZXJwcmludCBpcyBub3QgY29uZmlndXJlZCBvbiB0aGUgQXBwR2FsbGVyeSBDb25uZWN0LlxyXG4gICAgICogMS4gQ2hlY2sgd2hldGhlciB5b3VyIHBob25lIGNhbiBhY2Nlc3MgdGhlIEludGVybmV0LlxyXG4gICAgICogMi4gQ2hlY2sgd2hldGhlciB0aGUgY29ycmVjdCBjZXJ0aWZpY2F0ZSBmaW5nZXJwcmludCBpcyBjb25maWd1cmVkIGluIEFwcEdhbGxlcnkgQ29ubmVjdC4gRm9yIGRldGFpbHMsIHNlZSBBcHBHYWxsZXJ5IENvbm5lY3QgY29uZmlndXJhdGlvbiBpbiBEZXZlbG9wbWVudCBQcmVwYXJhdGlvbnMuXHJcbiAgICAgKiAzLiBJZiB0aGUgY2hlY2sgcmVzdWx0IGlzIGNvcnJlY3QsIGNvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gICAgICovXHJcbiAgICBFUlJPUl9DRVJUX0ZJTkdFUlBSSU5UX0VNUFRZID0gXCI5MDcxMzU3MDJcIixcclxuXHJcbiAgICAvLyBQZXJtaXNzaW9uIGlzIG5vdCBjb25maWd1cmVkIG9uIHRoZSBBcHBHYWxsZXJ5IENvbm5lY3QuXHJcbiAgICBFUlJPUl9QRVJNSVNTSU9OX0xJU1RfRU1QVFkgPSBcIjkwNzEzNTcwM1wiLFxyXG5cclxuICAgIC8vIFRoZSBhdXRoZW50aWNhdGlvbiBpbmZvcm1hdGlvbiBvZiB0aGUgYXBwbGljYXRpb24gZG9lcyBub3QgZXhpc3QuXHJcbiAgICBFUlJPUl9BVVRIX0lORk9fTk9UX0VYSVNUID0gXCI2MDAyXCIsXHJcblxyXG4gICAgLy8gQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIGNlcnRpZmljYXRlIGZpbmdlcnByaW50IHZlcmlmaWNhdGlvbi4gQ2hlY2sgd2hldGhlciB0aGUgY29ycmVjdCBjZXJ0aWZpY2F0ZSBmaW5nZXJwcmludCBpcyBjb25maWd1cmVkIGluIEFwcEdhbGxlcnkgQ29ubmVjdC4gRm9yIGRldGFpbHMsIHNlZSBBcHBHYWxsZXJ5IENvbm5lY3QgY29uZmlndXJhdGlvbiBpbiBEZXZlbG9wbWVudCBQcmVwYXJhdGlvbnMuXHJcbiAgICBFUlJPUl9DRVJUX0ZJTkdFUlBSSU5UX0VSUk9SID0gXCI2MDAzXCIsXHJcblxyXG4gICAgLy8gSW50ZXJmYWNlIGF1dGhlbnRpY2F0aW9uOiBUaGUgcGVybWlzc2lvbiBkb2VzIG5vdCBleGlzdCBhbmQgaXMgbm90IGFwcGxpZWQgZm9yIGluIEFwcEdhbGxlcnkgQ29ubmVjdC5cclxuICAgIEVSUk9SX1BFUk1JU1NJT05fTk9UX0VYSVNUID0gXCI2MDA0XCIsXHJcblxyXG4gICAgLy8gSW50ZXJmYWNlIGF1dGhlbnRpY2F0aW9uOiB1bmF1dGhvcml6ZWQuXHJcbiAgICBFUlJPUl9QRVJNSVNTSU9OX05PVF9BVVRIT1JJWkVEID0gXCI2MDA1XCIsXHJcblxyXG4gICAgLy8gSW50ZXJmYWNlIGF1dGhlbnRpY2F0aW9uOiBUaGUgYXV0aG9yaXphdGlvbiBleHBpcmVzLlxyXG4gICAgRVJST1JfUEVSTUlTU0lPTl9FWFBJUkVEID0gXCI2MDA2XCIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEF0dHIge1xyXG4gICAgaWQgPSBcImlkXCIsXHJcbiAgICBtZXNzYWdlID0gXCJtZXNzYWdlXCIsXHJcbiAgICBmaXJlRGF0ZSA9IFwiZmlyZURhdGVcIixcclxuICAgIHRpdGxlID0gXCJ0aXRsZVwiLFxyXG4gICAgdGlja2VyID0gXCJ0aWNrZXJcIixcclxuICAgIHNob3dXaGVuID0gXCJzaG93V2hlblwiLFxyXG4gICAgYXV0b0NhbmNlbCA9IFwiYXV0b0NhbmNlbFwiLFxyXG4gICAgbGFyZ2VJY29uID0gXCJsYXJnZUljb25cIixcclxuICAgIGxhcmdlSWNvblVybCA9IFwibGFyZ2VJY29uVXJsXCIsXHJcbiAgICBzbWFsbEljb24gPSBcInNtYWxsSWNvblwiLFxyXG4gICAgYmlnVGV4dCA9IFwiYmlnVGV4dFwiLFxyXG4gICAgc3ViVGV4dCA9IFwic3ViVGV4dFwiLFxyXG4gICAgYmlnUGljdHVyZVVybCA9IFwiYmlnUGljdHVyZVVybFwiLFxyXG4gICAgc2hvcnRjdXRJZCA9IFwic2hvcnRjdXRJZFwiLFxyXG4gICAgbnVtYmVyID0gXCJudW1iZXJcIixcclxuICAgIGNoYW5uZWxJZCA9IFwiY2hhbm5lbElkXCIsXHJcbiAgICBjaGFubmVsTmFtZSA9IFwiY2hhbm5lbE5hbWVcIixcclxuICAgIGNoYW5uZWxEZXNjcmlwdGlvbiA9IFwiY2hhbm5lbERlc2NyaXB0aW9uXCIsXHJcbiAgICBjb2xvciA9IFwiY29sb3JcIixcclxuICAgIGdyb3VwID0gXCJncm91cFwiLFxyXG4gICAgZ3JvdXBTdW1tYXJ5ID0gXCJncm91cFN1bW1hcnlcIixcclxuICAgIHBsYXlTb3VuZCA9IFwicGxheVNvdW5kXCIsXHJcbiAgICBzb3VuZE5hbWUgPSBcInNvdW5kTmFtZVwiLFxyXG4gICAgdmlicmF0ZSA9IFwidmlicmF0ZVwiLFxyXG4gICAgdmlicmF0ZUR1cmF0aW9uID0gXCJ2aWJyYXRlRHVyYXRpb25cIixcclxuICAgIGFjdGlvbnMgPSBcImFjdGlvbnNcIixcclxuICAgIGludm9rZUFwcCA9IFwiaW52b2tlQXBwXCIsXHJcbiAgICB0YWcgPSBcInRhZ1wiLFxyXG4gICAgcmVwZWF0VHlwZSA9IFwicmVwZWF0VHlwZVwiLFxyXG4gICAgcmVwZWF0VGltZSA9IFwicmVwZWF0VGltZVwiLFxyXG4gICAgb25nb2luZyA9IFwib25nb2luZ1wiLFxyXG4gICAgYWxsb3dXaGlsZUlkbGUgPSBcImFsbG93V2hpbGVJZGxlXCIsXHJcbiAgICBkb250Tm90aWZ5SW5Gb3JlZ3JvdW5kID0gXCJkb250Tm90aWZ5SW5Gb3JlZ3JvdW5kXCIsXHJcbiAgICBwcmlvcml0eSA9IFwicHJpb3JpdHlcIixcclxuICAgIGltcG9ydGFuY2UgPSBcImltcG9ydGFuY2VcIixcclxuICAgIHZpc2liaWxpdHkgPSBcInZpc2liaWxpdHlcIixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSW1wb3J0YW5jZSB7XHJcbiAgICBNQVggPSBcIm1heFwiLFxyXG4gICAgSElHSCA9IFwiaGlnaFwiLFxyXG4gICAgREVGQVVMVCA9IFwiZGVmYXVsdFwiLFxyXG4gICAgTE9XID0gXCJsb3dcIixcclxuICAgIE1JTiA9IFwibWluXCIsXHJcbiAgICBOT05FID0gXCJub25lXCIsXHJcbiAgICBVTlNQRUNJRklFRCA9IFwidW5zcGVjaWZpZWRcIixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUHJpb3JpdHkge1xyXG4gICAgTUFYID0gXCJtYXhcIixcclxuICAgIEhJR0ggPSBcImhpZ2hcIixcclxuICAgIERFRkFVTFQgPSBcImRlZmF1bHRcIixcclxuICAgIExPVyA9IFwibG93XCIsXHJcbiAgICBNSU4gPSBcIm1pblwiLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBSZXBlYXRUeXBlIHtcclxuICAgIEhPVVIgPSBcImhvdXJcIixcclxuICAgIE1JTlVURSA9IFwibWludXRlXCIsXHJcbiAgICBEQVkgPSBcImRheVwiLFxyXG4gICAgV0VFSyA9IFwid2Vla1wiLFxyXG4gICAgQ1VTVE9NX1RJTUUgPSBcImN1c3RvbV90aW1lXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFZpc2liaWxpdHkge1xyXG4gICAgUFVCTElDID0gXCJwdWJsaWNcIixcclxuICAgIFNFQ1JFVCA9IFwic2VjcmV0XCIsXHJcbiAgICBQUklWQVRFID0gXCJwcml2YXRlXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFJlbW90ZU1lc3NhZ2VCdWlsZGVyIHtcclxuICAgIFRPID0gXCJ0b1wiLFxyXG4gICAgTUVTU0FHRV9JRCA9IFwibWVzc2FnZUlkXCIsXHJcbiAgICBNRVNTQUdFX1RZUEUgPSBcIm1lc3NhZ2VUeXBlXCIsXHJcbiAgICBUVEwgPSBcInR0bFwiLFxyXG4gICAgQ09MTEFQU0VfS0VZID0gXCJjb2xsYXBzZUtleVwiLFxyXG4gICAgUkVDRUlQVF9NT0RFID0gXCJyZWNlaXB0TW9kZVwiLFxyXG4gICAgU0VORF9NT0RFID0gXCJzZW5kTW9kZVwiLFxyXG4gICAgREFUQSA9IFwiZGF0YVwiLFxyXG59XHJcblxyXG5jbGFzcyBDb3Jkb3ZhUmVtb3RlTWVzc2FnZSB7XHJcbiAgICBzdGF0aWMgSU5TVEFOQ0VfSURfU0NPUEUgPSBcIkhDTVwiO1xyXG5cclxuICAgIHN0YXRpYyBQUklPUklUWV9VTktOT1dOID0gMDtcclxuICAgIHN0YXRpYyBQUklPUklUWV9ISUdIID0gMTtcclxuICAgIHN0YXRpYyBQUklPUklUWV9OT1JNQUwgPSAyO1xyXG5cclxuICAgIHN0YXRpYyBDT0xMQVBTRUtFWSA9IFwiY29sbGFwc2VLZXlcIjtcclxuICAgIHN0YXRpYyBEQVRBID0gXCJkYXRhXCI7XHJcbiAgICBzdGF0aWMgREFUQU9GTUFQID0gXCJkYXRhT2ZNYXBcIjtcclxuICAgIHN0YXRpYyBNRVNTQUdFSUQgPSBcIm1lc3NhZ2VJZFwiO1xyXG4gICAgc3RhdGljIE1FU1NBR0VUWVBFID0gXCJtZXNzYWdlVHlwZVwiO1xyXG4gICAgc3RhdGljIE9SSUdJTkFMVVJHRU5DWSA9IFwib3JpZ2luYWxVcmdlbmN5XCI7XHJcbiAgICBzdGF0aWMgVVJHRU5DWSA9IFwidXJnZW5jeVwiO1xyXG4gICAgc3RhdGljIFRUTCA9IFwidHRsXCI7XHJcbiAgICBzdGF0aWMgU0VOVFRJTUUgPSBcInNlbnRUaW1lXCI7XHJcbiAgICBzdGF0aWMgVE8gPSBcInRvXCI7XHJcbiAgICBzdGF0aWMgRlJPTSA9IFwiZnJvbVwiO1xyXG4gICAgc3RhdGljIFRPS0VOID0gXCJ0b2tlblwiO1xyXG4gICAgc3RhdGljIEFOQUxZVElDSU5GTyA9IFwiYW5hbHl0aWNJbmZvXCI7XHJcbiAgICBzdGF0aWMgQU5BTFlUSUNJTkZPTUFQID0gXCJhbmFseXRpY0luZm9NYXBcIjtcclxuXHJcbiAgICBzdGF0aWMgTk9USUZJQ0FUSU9OID0ge1xyXG4gICAgICAgIFRJVExFOiBcInRpdGxlXCIsXHJcbiAgICAgICAgVElUTEVMT0NBTElaQVRJT05LRVk6IFwidGl0bGVMb2NhbGl6YXRpb25LZXlcIixcclxuICAgICAgICBUSVRMRUxPQ0FMSVpBVElPTkFSR1M6IFwidGl0bGVMb2NhbGl6YXRpb25BcmdzXCIsXHJcbiAgICAgICAgQk9EWUxPQ0FMSVpBVElPTktFWTogXCJib2R5TG9jYWxpemF0aW9uS2V5XCIsXHJcbiAgICAgICAgQk9EWUxPQ0FMSVpBVElPTkFSR1M6IFwiYm9keUxvY2FsaXphdGlvbkFyZ3NcIixcclxuICAgICAgICBCT0RZOiBcImJvZHlcIixcclxuICAgICAgICBJQ09OOiBcImljb25cIixcclxuICAgICAgICBTT1VORDogXCJTb3VuZFwiLFxyXG4gICAgICAgIFRBRzogXCJUYWdcIixcclxuICAgICAgICBDT0xPUjogXCJDb2xvclwiLFxyXG4gICAgICAgIENMSUNLQUNUSU9OOiBcIkNsaWNrQWN0aW9uXCIsXHJcbiAgICAgICAgQ0hBTk5FTElEOiBcIkNoYW5uZWxJZFwiLFxyXG4gICAgICAgIElNQUdFVVJMOiBcIkltYWdlVXJsXCIsXHJcbiAgICAgICAgTElOSzogXCJMaW5rXCIsXHJcbiAgICAgICAgTk9USUZZSUQ6IFwiTm90aWZ5SWRcIixcclxuICAgICAgICBXSEVOOiBcIldoZW5cIixcclxuICAgICAgICBMSUdIVFNFVFRJTkdTOiBcIkxpZ2h0U2V0dGluZ3NcIixcclxuICAgICAgICBCQURHRU5VTUJFUjogXCJCYWRnZU51bWJlclwiLFxyXG4gICAgICAgIElNUE9SVEFOQ0U6IFwiSW1wb3J0YW5jZVwiLFxyXG4gICAgICAgIFRJQ0tFUjogXCJUaWNrZXJcIixcclxuICAgICAgICBWSUJSQVRFQ09ORklHOiBcInZpYnJhdGVDb25maWdcIixcclxuICAgICAgICBWSVNJQklMSVRZOiBcInZpc2liaWxpdHlcIixcclxuICAgICAgICBJTlRFTlRVUkk6IFwiaW50ZW50VXJpXCIsXHJcbiAgICAgICAgSVNBVVRPQ0FOQ0VMOiBcImlzQXV0b0NhbmNlbFwiLFxyXG4gICAgICAgIElTTE9DQUxPTkxZOiBcImlzTG9jYWxPbmx5XCIsXHJcbiAgICAgICAgSVNERUZBVUxUTElHSFQ6IFwiaXNEZWZhdWx0TGlnaHRcIixcclxuICAgICAgICBJU0RFRkFVTFRTT1VORDogXCJpc0RlZmF1bHRTb3VuZFwiLFxyXG4gICAgICAgIElTREVGQVVMVFZJQlJBVEU6IFwiaXNEZWZhdWx0VmlicmF0ZVwiLFxyXG4gICAgfTtcclxuICAgIHJlbW90ZU1zZzogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIHRoaXMucmVtb3RlTXNnID0gb3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogcGFyc2UgYWxsIGVsZW1lbnQsdW5vcmRlcmVkXHJcbiAgICAgKi9cclxuICAgIHBhcnNlTXNnQWxsQXR0cmlidXRlKCkge1xyXG4gICAgICAgIGxldCBwdXNoUmVzdWx0ID0gXCJcIjtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnJlbW90ZU1zZykge1xyXG4gICAgICAgICAgICBwdXNoUmVzdWx0ID0gcHVzaFJlc3VsdCArIGtleSArIFwiIDogXCIgKyB0aGlzLnJlbW90ZU1zZ1trZXldICsgXCJcXG5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHB1c2hSZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIGdldENvbGxhcHNlS2V5KCkgT2J0YWlucyB0aGUgY2xhc3NpZmljYXRpb24gaWRlbnRpZmllciAoY29sbGFwc2Uga2V5KSBvZiBhIG1lc3NhZ2UuXHJcbiAgICAgKi9cclxuICAgIGdldENvbGxhcHNlS2V5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5DT0xMQVBTRUtFWV07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIGdldERhdGEoKSBPYnRhaW5zIHZhbGlkIGNvbnRlbnQgZGF0YSBvZiBhIG1lc3NhZ2UuXHJcbiAgICAgKi9cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLkRBVEFdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBnZXREYXRhT2ZNYXAoKSBhIG1lc3NhZ2UgbWFwLlxyXG4gICAgICovXHJcbiAgICBnZXREYXRhT2ZNYXAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLkRBVEFPRk1BUF07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIGdldE1lc3NhZ2VJZCgpIE9idGFpbnMgdGhlIElEIG9mIGEgbWVzc2FnZS5cclxuICAgICAqL1xyXG4gICAgZ2V0TWVzc2FnZUlkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5NRVNTQUdFSURdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBnZXRNZXNzYWdlVHlwZSgpIE9idGFpbnMgdGhlIHR5cGUgb2YgYSBtZXNzYWdlLlxyXG4gICAgICovXHJcbiAgICBnZXRNZXNzYWdlVHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTUVTU0FHRVRZUEVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBnZXRPcmlnaW5hbFVyZ2VuY3koKSBPYnRhaW5zIHRoZSBvcmlnaW5hbCBwcmlvcml0eSBvZiBhIG1lc3NhZ2UuXHJcbiAgICAgKi9cclxuICAgIGdldE9yaWdpbmFsVXJnZW5jeSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuT1JJR0lOQUxVUkdFTkNZXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogZ2V0VXJnZW5jeSgpIE9idGFpbnMgcHJpb3JpdHkgb2YgYSBtZXNzYWdlLlxyXG4gICAgICovXHJcbiAgICBnZXRVcmdlbmN5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5VUkdFTkNZXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogZ2V0VHRsKCkgT2J0YWlucyB2YWxpZCBnZXRUdGwgb2YgYSBtZXNzYWdlLlxyXG4gICAgICovXHJcbiAgICBnZXRUdGwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLlRUTF07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIGdldFNlbnRUaW1lKCkgT2J0YWlucyB0aGUgdGltZSB3aGVuIGEgbWVzc2FnZSBpcyBzZW50IGZyb20gdGhlIHNlcnZlci5cclxuICAgICAqL1xyXG4gICAgZ2V0U2VudFRpbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLlNFTlRUSU1FXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogZ2V0VG8oKSBPYnRhaW5zIHRoZSByZWNpcGllbnQgb2YgYSBtZXNzYWdlLlxyXG4gICAgICovXHJcbiAgICBnZXRUbygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuVE9dO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBnZXRGcm9tKCkgT2J0YWlucyB0aGUgc2VuZGVyIG9mIGEgbWVzc2FnZS5cclxuICAgICAqL1xyXG4gICAgZ2V0RnJvbSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuRlJPTV07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIGdldFRva2VuKCkgT2J0YWlucyB2YWxpZCB0b2tlblxyXG4gICAgICovXHJcbiAgICBnZXRUb2tlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuVE9LRU5dO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFuYWx5dGljSW5mbygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuQU5BTFlUSUNJTkZPXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbmFseXRpY0luZm9NYXAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLkFOQUxZVElDSU5GT01BUF07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRUaXRsZSgpIE9idGFpbnMgdGhlIHRpdGxlIG9mIGEgbWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBnZXROb3RpZmljYXRpb25UaXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLlRJVExFXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldFRpdGxlTG9jYWxpemF0aW9uS2V5KCkgT2J0YWlucyB0aGUga2V5IG9mIHRoZSBkaXNwbGF5ZWQgdGl0bGUgb2YgYSBub3RpZmljYXRpb24gbWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBnZXRUaXRsZUxvY2FsaXphdGlvbktleSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbXHJcbiAgICAgICAgICAgIENvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5USVRMRUxPQ0FMSVpBVElPTktFWVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRUaXRsZUxvY2FsaXphdGlvbkFyZ3MoKSBPYnRhaW5zIHZhcmlhYmxlIHBhcmFtZXRlcnMgb2YgdGhlIGRpc3BsYXllZCB0aXRsZSBvZiBhIG1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgZ2V0VGl0bGVMb2NhbGl6YXRpb25BcmdzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tcclxuICAgICAgICAgICAgQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLlRJVExFTE9DQUxJWkFUSU9OQVJHU1xyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRCb2R5TG9jYWxpemF0aW9uS2V5KCkgT2J0YWlucyB0aGUga2V5IG9mIHRoZSBkaXNwbGF5ZWQgY29udGVudCBvZiBhIG1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgZ2V0Qm9keUxvY2FsaXphdGlvbktleSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbXHJcbiAgICAgICAgICAgIENvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5CT0RZTE9DQUxJWkFUSU9OS0VZXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldEJvZHlMb2NhbGl6YXRpb25BcmdzKCkgT2J0YWlucyB2YXJpYWJsZSBwYXJhbWV0ZXJzIG9mIHRoZSBkaXNwbGF5ZWQgY29udGVudCBvZiBhIG1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgZ2V0Qm9keUxvY2FsaXphdGlvbkFyZ3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW1xyXG4gICAgICAgICAgICBDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uQk9EWUxPQ0FMSVpBVElPTkFSR1NcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0Qm9keSgpIE9idGFpbnMgdGhlIGJvZHkgb2YgYSBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIGdldEJvZHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5CT0RZXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldEljb24oKSBPYnRhaW5zIHRoZSBpY29uIG9mIGEgbWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBnZXRJY29uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSUNPTl07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRTb3VuZCgpIE9idGFpbnMgdGhlIHNvdW5kIGZyb20gYSBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIGdldFNvdW5kKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uU09VTkRdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0VGFnKCkgT2J0YWlucyB0aGUgdGFnIGZyb20gYSBtZXNzYWdlIGZvciBtZXNzYWdlIG92ZXJ3cml0aW5nXHJcbiAgICAgKi9cclxuICAgIGdldFRhZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLlRBR107XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRDb2xvcigpIE9idGFpbnMgdGhlIGNvbG9ycyBvZiBpY29ucyBpbiBhIG1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgZ2V0Q29sb3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5DT0xPUl07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRDbGlja0FjdGlvbigpIE9idGFpbnMgYWN0aW9ucyB0cmlnZ2VyZWQgYnkgbWVzc2FnZSB0YXBwaW5nXHJcbiAgICAgKi9cclxuICAgIGdldENsaWNrQWN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uQ0xJQ0tBQ1RJT05dO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0Q2hhbm5lbElkKCkgT2J0YWlucyBJRHMgb2YgY2hhbm5lbHMgdGhhdCBzdXBwb3J0IHRoZSBkaXNwbGF5IG9mIG1lc3NhZ2VzXHJcbiAgICAgKi9cclxuICAgIGdldENoYW5uZWxJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkNIQU5ORUxJRF07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRJbWFnZVVybCgpIE9idGFpbnMgdGhlIGltYWdlIFVSTCBmcm9tIGEgbWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBnZXRJbWFnZVVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklNQUdFVVJMXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldExpbmsoKSBPYnRhaW5zIHRoZSBVUkwgdG8gYmUgYWNjZXNzZWQgZnJvbSBhIG1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgZ2V0TGluaygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkxJTktdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0Tm90aWZ5SWQoKSBPYnRhaW5zIHRoZSB1bmlxdWUgSUQgb2YgYSBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIGdldE5vdGlmeUlkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uTk9USUZZSURdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0V2hlbigpXHJcbiAgICAgKi9cclxuICAgIGdldFdoZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5XSEVOXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldExpZ2h0U2V0dGluZ3MoKVxyXG4gICAgICovXHJcbiAgICBnZXRMaWdodFNldHRpbmdzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uTElHSFRTRVRUSU5HU107XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRCYWRnZU51bWJlcigpXHJcbiAgICAgKi9cclxuICAgIGdldEJhZGdlTnVtYmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uQkFER0VOVU1CRVJdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0SW1wb3J0YW5jZSgpXHJcbiAgICAgKi9cclxuICAgIGdldEltcG9ydGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JTVBPUlRBTkNFXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldFRpY2tlcigpXHJcbiAgICAgKi9cclxuICAgIGdldFRpY2tlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLlRJQ0tFUl07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRWaWJyYXRlQ29uZmlnKClcclxuICAgICAqL1xyXG4gICAgZ2V0VmlicmF0ZUNvbmZpZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLlZJQlJBVEVDT05GSUddO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0VmlzaWJpbGl0eSgpXHJcbiAgICAgKi9cclxuICAgIGdldFZpc2liaWxpdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5WSVNJQklMSVRZXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldEludGVudFVyaSgpXHJcbiAgICAgKi9cclxuICAgIGdldEludGVudFVyaSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklOVEVOVFVSSV07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjppc0F1dG9DYW5jZWwoKVxyXG4gICAgICovXHJcbiAgICBpc0F1dG9DYW5jZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JU0FVVE9DQU5DRUxdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0SW50ZW50VXJpKClcclxuICAgICAqL1xyXG4gICAgaXNMb2NhbE9ubHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JU0xPQ0FMT05MWV07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjppc0RlZmF1bHRMaWdodCgpXHJcbiAgICAgKi9cclxuICAgIGlzRGVmYXVsdExpZ2h0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSVNERUZBVUxUTElHSFRdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246aXNEZWZhdWx0U291bmQoKVxyXG4gICAgICovXHJcbiAgICBpc0RlZmF1bHRTb3VuZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklTREVGQVVMVFNPVU5EXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmlzRGVmYXVsdFZpYnJhdGUoKVxyXG4gICAgICovXHJcbiAgICBpc0RlZmF1bHRWaWJyYXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tcclxuICAgICAgICAgICAgQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklTREVGQVVMVFZJQlJBVEVcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59XHJcblxyXG50eXBlIExvY2FsTm90aWZpY2F0aW9uT2JqZWN0ID0ge1xyXG4gICAgW2tleSBpbiBBdHRyXT86IGFueTtcclxufTtcclxuXHJcbnR5cGUgUmVtb3RlTWVzc2FnZU9iamVjdCA9IHtcclxuICAgIFtrZXkgaW4gUmVtb3RlTWVzc2FnZUJ1aWxkZXJdPzogYW55O1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIElkVGFnIHtcclxuXHRpZDpudW1iZXIsXHJcblx0dGFnOnN0cmluZ1xyXG59Il19