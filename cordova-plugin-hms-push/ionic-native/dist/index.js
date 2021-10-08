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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1wdXNoL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFpQkEsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFVM0MsMkJBQWlCOzs7UUFDMUMsdUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDdEMsMEJBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFDNUMsMEJBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFDNUMseUJBQW1CLEdBQUcsS0FBSyxDQUFBOzs7SUFFM0I7OztPQUdHO0lBQ0gsc0JBQUk7SUFLSiw4QkFBWTtJQUtaLCtCQUFhO0lBS2I7OztPQUdHO0lBQ0gsNEJBQVU7SUFLVjs7O09BR0c7SUFDSCw2QkFBVztJQUtYOzs7T0FHRztJQUNILHVCQUFLO0lBS0w7OztPQUdHO0lBQ0gseUJBQU87SUFLUDs7OztPQUlHO0lBQ0gsMEJBQVEsYUFBQyxLQUFjO0lBS3ZCOzs7O09BSUc7SUFDSCx1Q0FBcUIsYUFBQyxTQUFpQjtJQUt2Qzs7O09BR0c7SUFDSCxpQ0FBZTtJQUtmOzs7T0FHRztJQUNILDRCQUFVO0lBS1Y7Ozs7T0FJRztJQUNILDZCQUFXLGFBQUMsS0FBYztJQUsxQjs7OztPQUlHO0lBQ0gsMENBQXdCLGFBQUMsU0FBaUI7SUFLMUM7Ozs7T0FJRztJQUNILDJCQUFTLGFBQUMsS0FBYTtJQUt2Qjs7OztPQUlHO0lBQ0gsNkJBQVcsYUFBQyxLQUFhO0lBS3pCOzs7O09BSUc7SUFDSCxvQ0FBa0IsYUFBQyxPQUFnQjtJQUtuQyx5QkFBTztJQUtQOzs7T0FHRztJQUNILG1DQUFpQjtJQUtqQix3Q0FBc0I7SUFLdEIsbUNBQWlCLGFBQUMsYUFBa0M7SUFLcEQsbUNBQWlCLGFBQUMsUUFBZTtJQUtqQyx5QkFBTyxhQUFDLEdBQVUsRUFBQyxLQUFZO0lBSy9CLHlCQUFPLGFB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cEIsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsVUFBVTtRQUNwQixJQUFJLEVBQUUsTUFBTTtRQUNaLGFBQWEsRUFBRSxlQUFlO1FBQzlCLFdBQVcsRUFBRSxhQUFhO1FBQzFCLFVBQVUsRUFBRSxZQUFZO1FBQ3hCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLGFBQWEsRUFBRSxlQUFlO1FBQzlCLFVBQVUsRUFBRSxZQUFZO1FBQ3hCLFNBQVMsRUFBRSxXQUFXO1FBQ3RCLFlBQVksRUFBRSxjQUFjO1FBQzVCLFdBQVcsRUFBRSxhQUFhO1FBQzFCLGNBQWMsRUFBRSxnQkFBZ0I7UUFDaEMsY0FBYyxFQUFFLGdCQUFnQjtRQUNoQyxnQkFBZ0IsRUFBRSxrQkFBa0I7S0FDdkMsQ0FBQzsrQkEzc0JOOztTQXdwQk0sb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIENvcHlyaWdodCAyMDIwLTIwMjEuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxyXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tIFwiQGlvbmljLW5hdGl2ZS9jb3JlXCI7XHJcblxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6IFwiSG1zUHVzaFwiLFxyXG4gICAgcGx1Z2luOiBcIkBobXNjb3JlL2NvcmRvdmEtcGx1Z2luLWhtcy1wdXNoXCIsXHJcbiAgICBwbHVnaW5SZWY6IFwiSG1zUHVzaFwiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhtc1B1c2ggZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgICBIbXNQdXNoUmVzdWx0Q29kZSA9IEhtc1B1c2hSZXN1bHRDb2RlO1xyXG4gICAgQ29yZG92YVJlbW90ZU1lc3NhZ2UgPSBDb3Jkb3ZhUmVtb3RlTWVzc2FnZTtcclxuICAgIFJlbW90ZU1lc3NhZ2VCdWlsZGVyID0gUmVtb3RlTWVzc2FnZUJ1aWxkZXI7XHJcbiAgICBERUZBVUxUX1RPS0VOX1NDT1BFID0gXCJIQ01cIlxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgIGluaXRpYWxpemVkIEhtc1B1c2guXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgICAgKi9cclxuICAgIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBkaXNhYmxlTG9nZ2VyKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGRpc2FibGUgdGhlIGRpc3BsYXkgb2Ygbm90aWZpY2F0aW9uIG1lc3NhZ2VzLiBJZiB5b3Ugd2FudCB0byBjb250cm9sIHRoZSBkaXNwbGF5IG9mIG5vdGlmaWNhdGlvbiBtZXNzYWdlcyBpbiBhbiBhcHAsIHlvdSBjYW4gY2FsbCB0aGlzIG1ldGhvZC4gVGhpcyBtZXRob2QgYXBwbGllcyB0byBub3RpZmljYXRpb24gbWVzc2FnZXMgYnV0IG5vdCBkYXRhIG1lc3NhZ2VzLiBJdCBpcyB0aGUgYXBwIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGVuYWJsZSBvciBkaXNhYmxlIGRhdGEgbWVzc2FnaW5nLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICAgKi9cclxuICAgIHR1cm5PblB1c2goKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gZW5hYmxlIHRoZSBkaXNwbGF5IG9mIG5vdGlmaWNhdGlvbiBtZXNzYWdlcy4gSWYgeW91IHdhbnQgdG8gY29udHJvbCB0aGUgZGlzcGxheSBvZiBub3RpZmljYXRpb24gbWVzc2FnZXMgaW4gYW4gYXBwLCB5b3UgY2FuIGNhbGwgdGhpcyBtZXRob2QuIFRoaXMgbWV0aG9kIGFwcGxpZXMgdG8gbm90aWZpY2F0aW9uIG1lc3NhZ2VzIGJ1dCBub3QgZGF0YSBtZXNzYWdlcy4gSXQgaXMgdGhlIGFwcCB0aGF0IGRldGVybWluZXMgd2hldGhlciB0byBlbmFibGUgb3IgZGlzYWJsZSBkYXRhIG1lc3NhZ2luZy5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAgICovXHJcbiAgICB0dXJuT2ZmUHVzaCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBvYnRhaW4gYW4gQUFJRCBpbiBzeW5jaHJvbm91cyBtb2RlLiBCZWZvcmUgYXBwbHlpbmcgZm9yIGEgdG9rZW4sIGFuIGFwcCBjYWxscyB0aGlzIG1ldGhvZCB0byBvYnRhaW4gaXRzIHVuaXF1ZSBBQUlELiBUaGUgSFVBV0VJIFB1c2ggc2VydmVyIGdlbmVyYXRlcyBhIHRva2VuIGZvciB0aGUgYXBwIGJhc2VkIG9uIHRoZSBBQUlELiBJZiB0aGUgQUFJRCBvZiB0aGUgYXBwIGNoYW5nZXMsIGEgbmV3IHRva2VuIHdpbGwgYmUgZ2VuZXJhdGVkIG5leHQgdGltZSB3aGVuIHRoZSBhcHAgYXBwbGllcyBmb3IgYSB0b2tlbi4gSWYgYW4gYXBwIG5lZWRzIHRvIHJlcG9ydCBzdGF0aXN0aWNzIGV2ZW50cywgaXQgbXVzdCBjYXJyeSB0aGUgQUFJRCBhcyBpdHMgdW5pcXVlIElELlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICAgKi9cclxuICAgIGdldElkKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gb2J0YWluIGFuIEFBSUQgaW4gYXN5bmNocm9ub3VzIG1vZGUuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgICAqL1xyXG4gICAgZ2V0QUFJRCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIG9idGFpbiBhIHRva2VuIHJlcXVpcmVkIGZvciBhY2Nlc3NpbmcgSFVBV0VJIFB1c2ggS2l0LiBJZiB0aGVyZSBpcyBubyBsb2NhbCBBQUlELCB0aGlzIG1ldGhvZCB3aWxsIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGUgYW4gQUFJRCB3aGVuIGl0IGlzIGNhbGxlZCBiZWNhdXNlIHRoZSBIVUFXRUkgUHVzaCBLaXQgc2VydmVyIG5lZWRzIHRvIGdlbmVyYXRlIGEgdG9rZW4gYmFzZWQgb24gdGhlIEFBSUQuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgICAqIEBwYXJhbXMgc2NvcGUgPyA6IFN0cmluZ1xyXG4gICAgICovXHJcbiAgICBnZXRUb2tlbihzY29wZT86IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbnMgYSB0b2tlbiB0aGF0IGEgdGFyZ2V0IGFwcCBkZXZlbG9wZXIgYXBwbGllcyBmb3IgYSBzZW5kZXIgdG8gaW50ZWdyYXRlIFB1c2ggS2l0IGluIHRoZSBtdWx0aS1zZW5kZXIgc2NlbmFyaW8uXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgICAqIEBwYXJhbXMgc3ViamVjdElkID8gOiBTdHJpbmdcclxuICAgICAqL1xyXG4gICAgZ2V0VG9rZW5XaXRoU3ViamVjdElkKHN1YmplY3RJZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBvYnRhaW4gdGhlIGdlbmVyYXRpb24gdGltZXN0YW1wIG9mIGFuIEFBSUQuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgICAqL1xyXG4gICAgZ2V0Q3JlYXRpb25UaW1lKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gZGVsZXRlIGEgbG9jYWwgQUFJRCBhbmQgaXRzIGdlbmVyYXRpb24gdGltZXN0YW1wLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZUFBSUQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gZGVsZXRlIGEgdG9rZW4uIEFmdGVyIGEgdG9rZW4gaXMgZGVsZXRlZCwgdGhlIGNvcnJlc3BvbmRpbmcgQUFJRCB3aWxsIG5vdCBiZSBkZWxldGVkLiBUaGlzIG1ldGhvZCBpcyBhIHN5bmNocm9ub3VzIG1ldGhvZC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAgICogQHBhcmFtcyBzY29wZSA/IDogU3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZVRva2VuKHNjb3BlPzogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZXMgYSB0b2tlbiB0aGF0IGEgdGFyZ2V0IGFwcCBkZXZlbG9wZXIgYXBwbGllcyBmb3IgYSBzZW5kZXIgdG8gaW50ZWdyYXRlIFB1c2ggS2l0IGluIHRoZSBtdWx0aS1zZW5kZXIgc2NlbmFyaW8uXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgICAqIEBwYXJhbXMgc3ViamVjdElkID8gOiBTdHJpbmdcclxuICAgICAqL1xyXG4gICAgZGVsZXRlVG9rZW5XaXRoU3ViamVjdElkKHN1YmplY3RJZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBzdWJzY3JpYmUgdG8gdG9waWNzIGluIGFzeW5jaHJvbm91cyBtb2RlLiBUaGUgSFVBV0VJIFB1c2ggS2l0IHRvcGljIG1lc3NhZ2luZyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHNlbmQgbWVzc2FnZXMgdG8gbXVsdGlwbGUgZGV2aWNlcyB3aG9zZSB1c2VycyBoYXZlIHN1YnNjcmliZWQgdG8gYSBzcGVjaWZpYyB0b3BpYy4gWW91IGNhbiB3cml0ZSBtZXNzYWdlcyBhYm91dCB0aGUgdG9waWMgYXMgcmVxdWlyZWQsIGFuZCBIVUFXRUkgUHVzaCBLaXQgZGV0ZXJtaW5lcyB0aGUgcmVsZWFzZSBwYXRoIGFuZCBzZW5kcyBtZXNzYWdlcyB0byB0aGUgY29ycmVjdCBkZXZpY2VzIGluIGEgcmVsaWFibGUgbWFubmVyLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRvcGljIFRvcGljIHRvIGJlIHN1YnNjcmliZWQgdG8uXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgICAqL1xyXG4gICAgc3Vic2NyaWJlKHRvcGljOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byB1bnN1YnNjcmliZSBmcm9tIHRvcGljcyB0aGF0IGFyZSBzdWJzY3JpYmVkIHRvIHRocm91Z2ggdGhlIHN1YnNjcmliZSBtZXRob2QuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdG9waWMgVG9waWMgdG8gYmUgdW5zdWJzY3JpYmVkIHRvLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICAgKi9cclxuICAgIHVuc3Vic2NyaWJlKHRvcGljOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB3aGV0aGVyIHRvIGVuYWJsZSBhdXRvbWF0aWMgaW5pdGlhbGl6YXRpb24uIElmIHRoZSBlbmFibGUgcGFyYW1ldGVyIGlzIHNldCB0byB0cnVlLCB0aGUgU0RLIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVzIGFuIEFBSUQgYW5kIGFwcGxpZXMgZm9yIGEgdG9rZW4uXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGJvb2xlYW4+XHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWQgSW5kaWNhdGVzIHdoZXRoZXIgdG8gZW5hYmxlIGF1dG9tYXRpYyBpbml0aWFsaXphdGlvbi5cclxuICAgICAqL1xyXG4gICAgc2V0QXV0b0luaXRFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldE9kaWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBjaGVjayB3aGV0aGVyIGF1dG9tYXRpYyBpbml0aWFsaXphdGlvbiBpcyBlbmFibGVkLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICAgKi9cclxuICAgIGlzQXV0b0luaXRFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0SW5pdGlhbE5vdGlmaWNhdGlvbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2VuZFJlbW90ZU1lc3NhZ2UocmVtb3RlTWVzc2FnZTogUmVtb3RlTWVzc2FnZU9iamVjdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QmFja2dyb3VuZEZpbGUoZmlsZVBhdGg6c3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBzZXRJdGVtKGtleTpzdHJpbmcsdmFsdWU6c3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRJdGVtKGtleTpzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVtb3ZlSXRlbShrZXk6c3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZW1vdmVCYWNrZ3JvdW5kRmlsZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6IFwiSG1zTG9jYWxOb3RpZmljYXRpb25cIixcclxuICAgIHBsdWdpbjogXCJAaG1zY29yZS9jb3Jkb3ZhLXBsdWdpbi1obXMtcHVzaFwiLFxyXG4gICAgcGx1Z2luUmVmOiBcIkhtc0xvY2FsTm90aWZpY2F0aW9uXCIsXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcclxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSG1zTG9jYWxOb3RpZmljYXRpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgICBBdHRyID0gQXR0cjtcclxuICAgIEltcG9ydGFuY2UgPSBJbXBvcnRhbmNlO1xyXG4gICAgUHJpb3JpdHkgPSBQcmlvcml0eTtcclxuICAgIFJlcGVhdFR5cGUgPSBSZXBlYXRUeXBlO1xyXG4gICAgVmlzaWJpbGl0eSA9IFZpc2liaWxpdHk7XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGxvY2FsTm90aWZpY2F0aW9uKGxvY2FsTm90aWZpY2F0aW9uOiBMb2NhbE5vdGlmaWNhdGlvbk9iamVjdCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBsb2NhbE5vdGlmaWNhdGlvblNjaGVkdWxlKGxvY2FsTm90aWZpY2F0aW9uOiBMb2NhbE5vdGlmaWNhdGlvbk9iamVjdCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBjYW5jZWxBbGxOb3RpZmljYXRpb25zKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgY2FuY2VsTm90aWZpY2F0aW9ucygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGNhbmNlbFNjaGVkdWxlZE5vdGlmaWNhdGlvbnMoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBjYW5jZWxOb3RpZmljYXRpb25zV2l0aElkKGlkOiBudW1iZXJbXSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgY2FuY2VsTm90aWZpY2F0aW9uc1dpdGhJZFRhZyhpZFRhZzogSWRUYWdbXSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgY2FuY2VsTm90aWZpY2F0aW9uc1dpdGhUYWcodGFnOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldE5vdGlmaWNhdGlvbnMoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldFNjaGVkdWxlZE5vdGlmaWNhdGlvbnMoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldENoYW5uZWxzKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBjaGFubmVsRXhpc3RzKGNoYW5uZWxJZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBjaGFubmVsQmxvY2tlZChjaGFubmVsSWQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZGVsZXRlQ2hhbm5lbChjaGFubmVsSWQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiBcIkhtc1B1c2hFdmVudFwiLFxyXG4gICAgcGx1Z2luOiBcIkBobXNjb3JlL2NvcmRvdmEtcGx1Z2luLWhtcy1wdXNoXCIsXHJcbiAgICBwbHVnaW5SZWY6IFwiSG1zUHVzaEV2ZW50XCIsXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcclxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSG1zUHVzaEV2ZW50IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIG9uUmVtb3RlTWVzc2FnZVJlY2VpdmVkIChjYWxsYmFjazooZGF0YTphbnkpPT52b2lkKTp2b2lkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBvblRva2VuUmVjZWl2ZWQgKGNhbGxiYWNrOihkYXRhOmFueSk9PnZvaWQpOnZvaWQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIG9uVG9rZW5FcnJvciAoY2FsbGJhY2s6KGRhdGE6YW55KT0+dm9pZCk6dm9pZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIFxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgb25QdXNoTWVzc2FnZVNlbnQgKGNhbGxiYWNrOihkYXRhOmFueSk9PnZvaWQpOnZvaWQge1xyXG4gICAgcmV0dXJuO1xyXG4gICB9XHJcbiAgXHJcbiAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgIG9uUHVzaE1lc3NhZ2VTZW50RXJyb3IgKGNhbGxiYWNrOihkYXRhOmFueSk9PnZvaWQpOnZvaWQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIG9uUHVzaE1lc3NhZ2VTZW50RGVsaXZlcmVkIChjYWxsYmFjazooZGF0YTphbnkpPT52b2lkKTp2b2lkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBvbkxvY2FsTm90aWZpY2F0aW9uQWN0aW9uIChjYWxsYmFjazooZGF0YTphbnkpPT52b2lkKTp2b2lkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBvbk5vdGlmaWNhdGlvbk9wZW5lZEFwcCAoY2FsbGJhY2s6KGRhdGE6YW55KT0+dm9pZCk6dm9pZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIFxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgb25NdWx0aVNlbmRlclRva2VuUmVjZWl2ZWRFdmVudChjYWxsYmFjazooZGF0YTphbnkpPT52b2lkKTp2b2lke1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIG9uTXVsdGlTZW5kZXJUb2tlbkVycm9yRXZlbnQoY2FsbGJhY2s6KGRhdGE6YW55KT0+dm9pZCk6dm9pZHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgXHJcbiAgUkVNT1RFX0RBVEFfTUVTU0FHRV9SRUNFSVZFRCA9IFwiUkVNT1RFX0RBVEFfTUVTU0FHRV9SRUNFSVZFRFwiXHJcbiAgVE9LRU5fUkVDRUlWRURfRVZFTlQgPSBcIlRPS0VOX1JFQ0VJVkVEX0VWRU5UXCJcclxuICBPTl9UT0tFTl9FUlJPUl9FVkVOVCA9IFwiT05fVE9LRU5fRVJST1JfRVZFTlRcIlxyXG4gIE5PVElGSUNBVElPTl9PUEVORURfRVZFTlQgPSBcIk5PVElGSUNBVElPTl9PUEVORURfRVZFTlRcIlxyXG4gIExPQ0FMX05PVElGSUNBVElPTl9BQ1RJT05fRVZFTlQgPSBcIkxPQ0FMX05PVElGSUNBVElPTl9BQ1RJT05fRVZFTlRcIlxyXG4gIE9OX1BVU0hfTUVTU0FHRV9TRU5UID0gXCJPTl9QVVNIX01FU1NBR0VfU0VOVFwiXHJcbiAgT05fUFVTSF9NRVNTQUdFX1NFTlRfRVJST1IgPSBcIk9OX1BVU0hfTUVTU0FHRV9TRU5UX0VSUk9SXCJcclxuICBPTl9QVVNIX01FU1NBR0VfU0VOVF9ERUxJVkVSRUQgPSBcIk9OX1BVU0hfTUVTU0FHRV9TRU5UX0RFTElWRVJFRFwiXHJcbiAgT05fTVVMVElfU0VOREVSX1RPS0VOX0VSUk9SX0VWRU5UID0gXCJPTl9NVUxUSV9TRU5ERVJfVE9LRU5fRVJST1JfRVZFTlRcIlxyXG4gIE9OX01VTFRJX1NFTkRFUl9UT0tFTl9SRUNFSVZFRF9FVkVOVCA9IFwiT05fTVVMVElfU0VOREVSX1RPS0VOX1JFQ0VJVkVEX0VWRU5UXCJcclxuICB9XHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiBcIkhtc1B1c2hQcm9maWxlXCIsXHJcbiAgcGx1Z2luOiBcIkBobXNjb3JlL2NvcmRvdmEtcGx1Z2luLWhtcy1wdXNoXCIsXHJcbiAgcGx1Z2luUmVmOiBcIkhtc1B1c2hQcm9maWxlXCIsXHJcbiAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXHJcbiAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIbXNQdXNoUHJvZmlsZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICBcclxuICBIVUFXRUlfUFJPRklMRT0xO1xyXG4gIENVU1RPTV9QUk9GSUxFPTI7XHJcbiAgVU5ERUZJTkVEX1BST0ZJTEU9LTE7XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgaXNTdXBwb3J0UHJvZmlsZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBhZGRQcm9maWxlKHR5cGU6bnVtYmVyLCBwcm9maWxlSWQ6c3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBhZGRQcm9maWxlV2l0aFN1YmplY3RJZChzdWJqZWN0SWQ6c3RyaW5nLCB0eXBlOm51bWJlciwgcHJvZmlsZUlkOnN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZGVsZXRlUHJvZmlsZShwcm9maWxlSWQ6c3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBkZWxldGVQcm9maWxlV2l0aFN1YmplY3RJZChzdWJqZWN0SWQ6c3RyaW5nLCBwcm9maWxlSWQ6c3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiBcIkZjbVB1c2hQcm94eVwiLFxyXG4gICAgcGx1Z2luOiBcIkBobXNjb3JlL2NvcmRvdmEtcGx1Z2luLWhtcy1wdXNoXCIsXHJcbiAgICBwbHVnaW5SZWY6IFwiRmNtUHVzaFByb3h5XCIsXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcclxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcclxuICB9KVxyXG4gIEBJbmplY3RhYmxlKClcclxuICBleHBvcnQgY2xhc3MgRmNtUHVzaFByb3h5IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gICAgaW5pdCgpOiBQcm9taXNlPGJvb2xlYW4+e1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG5leHBvcnQgZW51bSBIbXNQdXNoUmVzdWx0Q29kZSB7XHJcbiAgICAvLyBTdWNjZXNzXHJcbiAgICBTVUNDRVNTID0gXCIwXCIsXHJcblxyXG4gICAgLy8gRXJyb3JcclxuICAgIEVSUk9SID0gXCItMVwiLFxyXG5cclxuICAgIC8vIEJ1bmRsZSBpcyBudWxsLCBleGNlcHRpb25cclxuICAgIE5VTExfQlVORExFID0gXCIzMzNcIixcclxuXHJcbiAgICAvLyBZb3UgZG8gbm90IGhhdmUgYSB0b2tlbi4gQXBwbHkgZm9yIGEgdG9rZW4uXHJcbiAgICBFUlJPUl9OT19UT0tFTiA9IFwiOTA3MTIyMDMwXCIsXHJcblxyXG4gICAgLy8gVGhlIGN1cnJlbnQgbmV0d29yayBpcyB1bmF2YWlsYWJsZS4gQ2hlY2sgdGhlIG5ldHdvcmsgY29ubmVjdGlvbi5cclxuICAgIEVSUk9SX05PX05FVFdPUksgPSBcIjkwNzEyMjAzMVwiLFxyXG5cclxuICAgIC8vIFRoZSB0b2tlbiBoYXMgZXhwaXJlZC4gRGVsZXRlIHRoZSB0b2tlbiBhbmQgYXBwbHkgZm9yIGEgbmV3IG9uZS5cclxuICAgIEVSUk9SX1RPS0VOX0lOVkFMSUQgPSBcIjkwNzEyMjAzMlwiLFxyXG5cclxuICAgIC8vIElmIHRoZSBQdXNoIHNlcnZpY2UgaXMgdW5hdmFpbGFibGUsIGNvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gICAgRVJST1JfU0VSVklDRV9OT1RfQVZBSUxBQkxFID0gXCI5MDcxMjIwNDZcIixcclxuXHJcbiAgICAvLyBJZiB0aGUgUHVzaCBzZXJ2ZXIgcmV0dXJucyBhbiBlcnJvciwgY29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXHJcbiAgICBFUlJPUl9QVVNIX1NFUlZFUiA9IFwiOTA3MTIyMDQ3XCIsXHJcblxyXG4gICAgLy8gVW5rbm93biBlcnJvci4gQ29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXHJcbiAgICBFUlJPUl9VTktOT1dOID0gXCI5MDcxMjIwNDVcIixcclxuXHJcbiAgICAvLyBUaGUgbnVtYmVyIG9mIHN1YnNjcmliZWQgdG9waWNzIGV4Y2VlZHMgMjAwMC5cclxuICAgIEVSUk9SX1RPUElDX0VYQ0VFRCA9IFwiOTA3MTIyMDM0XCIsXHJcblxyXG4gICAgLy8gRmFpbGVkIHRvIHNlbmQgdGhlIHN1YnNjcmlwdGlvbiB0b3BpYy4gQ29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXHJcbiAgICBFUlJPUl9UT1BJQ19TRU5EID0gXCI5MDcxMjIwMzVcIixcclxuXHJcbiAgICAvLyBQdXNoIHJpZ2h0cyBhcmUgbm90IGVuYWJsZWQuIEVuYWJsZSB0aGUgc2VydmljZSBhbmQgc2V0IHB1c2ggc2VydmljZSBwYXJhbWV0ZXJzIGF0IEFwcEdhbGxlcnkgQ29ubmVjdC5cclxuICAgIEVSUk9SX05PX1JJR0hUID0gXCI5MDcxMjIwMzZcIixcclxuXHJcbiAgICAvLyBGYWlsZWQgdG8gYXBwbHkgZm9yIHRoZSB0b2tlbi4gQ29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXHJcbiAgICBFUlJPUl9HRVRfVE9LRU5fRVJSID0gXCI5MDcxMjIwMzdcIixcclxuXHJcbiAgICAvLyBObyBzdG9yYWdlIGxvY2F0aW9uIGlzIHNlbGVjdGVkIGZvciB0aGUgYXBwbGljYXRpb24gb3IgdGhlIHN0b3JhZ2UgbG9jYXRpb24gaXMgaW52YWxpZC5cclxuICAgIEVSUk9SX1NUT1JBR0VfTE9DQVRJT05fRU1QVFkgPSBcIjkwNzEyMjAzOFwiLFxyXG5cclxuICAgIC8vIEZhaWxlZCB0byBhcHBseSBmb3IgYSB0b2tlbi4gQ3Jvc3MtcmVnaW9uIHRva2VuIGFwcGxpY2F0aW9uIGlzIG5vdCBhbGxvd2VkLlxyXG4gICAgRVJST1JfTk9UX0FMTE9XX0NST1NTX0FQUExZID0gXCI5MDcxMjIwNTNcIixcclxuXHJcbiAgICAvLyBUaGUgbWVzc2FnZSBib2R5IHNpemUgZXhjZWVkcyB0aGUgbWF4aW11bS5cclxuICAgIEVSUk9SX1NJWkUgPSBcIjkwNzEyMjA0MVwiLFxyXG5cclxuICAgIC8vIFRoZSBtZXNzYWdlIGNvbnRhaW5zIGludmFsaWQgcGFyYW1ldGVycy5cclxuICAgIEVSUk9SX0lOVkFMSURfUEFSQU1FVEVSUyA9IFwiOTA3MTIyMDQyXCIsXHJcblxyXG4gICAgLy8gVGhlIG51bWJlciBvZiBzZW50IG1lc3NhZ2VzIHJlYWNoZXMgdGhlIHVwcGVyIGxpbWl0LiBUaGUgbWVzc2FnZXMgd2lsbCBiZSBkaXNjYXJkZWQuXHJcbiAgICBFUlJPUl9UT09fTUFOWV9NRVNTQUdFUyA9IFwiOTA3MTIyMDQzXCIsXHJcblxyXG4gICAgLy8gVGhlIG1lc3NhZ2UgbGlmZXRpbWUgZXhwaXJlcyBiZWZvcmUgdGhlIG1lc3NhZ2UgaXMgc3VjY2Vzc2Z1bGx5IHNlbnQgdG8gdGhlIEFQUCBzZXJ2ZXIuXHJcbiAgICBFUlJPUl9UVExfRVhDRUVERUQgPSBcIjkwNzEyMjA0NFwiLFxyXG5cclxuICAgIC8vICBIdWF3ZWkgTW9iaWxlIFNlcnZpY2VzIChBUEspIGNhbid0IGNvbm5lY3QgIEh1YXdlaSBQdXNoICBLaXQuXHJcbiAgICBFUlJPUl9ITVNfQ0xJRU5UX0FQSSA9IFwiOTA3MTIyMDQ4XCIsXHJcblxyXG4gICAgLy8gVGhlIGN1cnJlbnQgRU1VSSB2ZXJzaW9uIGlzIHRvbyBlYXJseSB0byB1c2UgdGhlIGNhcGFiaWxpdHkuXHJcbiAgICBFUlJPUl9PUEVSQVRJT05fTk9UX1NVUFBPUlRFRCA9IFwiOTA3MTIyMDQ5XCIsXHJcblxyXG4gICAgLy8gVGhlIG9wZXJhdGlvbiBjYW5ub3QgYmUgcGVyZm9ybWVkIGluIHRoZSBtYWluIHRocmVhZC5cclxuICAgIEVSUk9SX01BSU5fVEhSRUFEID0gXCI5MDcxMjIwNTBcIixcclxuXHJcbiAgICAvLyBUaGUgZGV2aWNlIGNlcnRpZmljYXRlIGF1dGhlbnRpY2F0aW9uIGZhaWxzLlxyXG4gICAgRVJST1JfSE1TX0RFVklDRV9BVVRIX0ZBSUxFRF9TRUxGX01BUFBJTkcgPSBcIjkwNzEyMjA1MVwiLFxyXG5cclxuICAgIC8vIEZhaWxlZCB0byBiaW5kIHRoZSBzZXJ2aWNlLlxyXG4gICAgRVJST1JfQklORF9TRVJWSUNFX1NFTEZfTUFQUElORyA9IFwiOTA3MTIyMDUyXCIsXHJcblxyXG4gICAgLy8gVGhlIFNESyBpcyBiZWluZyBhdXRvbWF0aWNhbGx5IGluaXRpYWxpemVkLiBUcnkgYWdhaW4gbGF0ZXIuXHJcbiAgICBFUlJPUl9BVVRPX0lOSVRJQUxJWklORyA9IFwiOTA3MTIyMDU0XCIsXHJcblxyXG4gICAgLypUaGUgaW5wdXQgcGFyYW1ldGVyIGlzIGluY29ycmVjdC4gQ2hlY2sgd2hldGhlciB0aGUgcmVsYXRlZCBjb25maWd1cmF0aW9uIGluZm9ybWF0aW9uIGlzIGNvcnJlY3QuXHJcbiAgICAgKiBFeGFtcGxlOiBhcHBfaWQgaW4gdGhlIGFnY29ubmVjdCAtIHNlcnZpY2VzLmpzb24gZmlsZTtcclxuICAgICAqIENoZWNrIHdoZXRoZXIgdGhlIGJ1aWxkLmdyYWRsZSBmaWxlIGlzIGNvbmZpZ3VyZWQgd2l0aCB0aGUgY2VydGlmaWNhdGUgc2lnbmF0dXJlLlxyXG4gICAgICovXHJcbiAgICBFUlJPUl9BUkdVTUVOVFNfSU5WQUxJRCA9IFwiOTA3MTM1MDAwXCIsXHJcblxyXG4gICAgLy8gSW50ZXJuYWwgUHVzaCBlcnJvci4gQ29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQgZW5naW5lZXJzLlxyXG4gICAgRVJST1JfSU5URVJOQUxfRVJST1IgPSBcIjkwNzEzNTAwMVwiLFxyXG5cclxuICAgIC8vIFRoZSBzZXJ2aWNlIGRvZXMgbm90IGV4aXN0LiBUaGUgaW52b2tlZCBpbnRlcmZhY2UgZG9lcyBub3QgZXhpc3QuXHJcbiAgICBFUlJPUl9OQU1JTkdfSU5WQUxJRCA9IFwiOTA3MTM1MDAyXCIsXHJcblxyXG4gICAgLy8gVGhlIEFwaUNsaWVudCBvYmplY3QgaXMgaW52YWxpZC5cclxuICAgIEVSUk9SX0NMSUVOVF9BUElfSU5WQUxJRCA9IFwiOTA3MTM1MDAzXCIsXHJcblxyXG4gICAgLy8gSW52b2tpbmcgQUlETCB0aW1lcyBvdXQuIENvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gICAgRVJST1JfRVhFQ1VURV9USU1FT1VUID0gXCI5MDcxMzUwMDRcIixcclxuXHJcbiAgICAvLyBUaGUgY3VycmVudCBhcmVhIGRvZXMgbm90IHN1cHBvcnQgdGhpcyBzZXJ2aWNlLlxyXG4gICAgRVJST1JfTk9UX0lOX1NFUlZJQ0UgPSBcIjkwNzEzNTAwNVwiLFxyXG5cclxuICAgIC8vIElmIHRoZSBBSURMIGNvbm5lY3Rpb24gc2Vzc2lvbiBpcyBpbnZhbGlkLCBjb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICAgIEVSUk9SX1NFU1NJT05fSU5WQUxJRCA9IFwiOTA3MTM1MDA2XCIsXHJcblxyXG4gICAgLy8gQW4gZXJyb3Igb2NjdXJyZWQgd2hlbiBpbnZva2luZyBhbiB1bnNwZWNpZmllZCBBUEkuXHJcbiAgICBFUlJPUl9BUElfTk9UX1NQRUNJRklFRCA9IFwiMTAwMlwiLFxyXG5cclxuICAgIC8qIEZhaWxlZCB0byBpbnZva2UgdGhlIGdhdGV3YXkgdG8gcXVlcnkgdGhlIGFwcGxpY2F0aW9uIHNjb3BlLlxyXG4gICAgICogQ2hlY2sgd2hldGhlciB0aGUgY3VycmVudCBhcHAgaGFzIGJlZW4gY3JlYXRlZCBhbmQgZW5hYmxlZCBpbiBBcHBHYWxsZXJ5IENvbm5lY3QuXHJcbiAgICAgKiBJZiB5ZXMsIGNvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gICAgICovXHJcbiAgICBFUlJPUl9HRVRfU0NPUEVfRVJST1IgPSBcIjkwNzEzNTcwMFwiLFxyXG4gICAgLyogU2NvcGUgaXMgbm90IGNvbmZpZ3VyZWQgb24gdGhlIEFwcEdhbGxlcnkgQ29ubmVjdC5cclxuICAgICAqIENoZWNrIHdoZXRoZXIgdGhlIGN1cnJlbnQgYXBwIGhhcyBiZWVuIGNyZWF0ZWQgYW5kIGVuYWJsZWQgaW4gQXBwR2FsbGVyeSBDb25uZWN0LlxyXG4gICAgICogSWYgeWVzLCBjb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICAgICAqL1xyXG4gICAgRVJST1JfU0NPUEVfTElTVF9FTVBUWSA9IFwiOTA3MTM1NzAxXCIsXHJcblxyXG4gICAgLyogVGhlIGNlcnRpZmljYXRlIGZpbmdlcnByaW50IGlzIG5vdCBjb25maWd1cmVkIG9uIHRoZSBBcHBHYWxsZXJ5IENvbm5lY3QuXHJcbiAgICAgKiAxLiBDaGVjayB3aGV0aGVyIHlvdXIgcGhvbmUgY2FuIGFjY2VzcyB0aGUgSW50ZXJuZXQuXHJcbiAgICAgKiAyLiBDaGVjayB3aGV0aGVyIHRoZSBjb3JyZWN0IGNlcnRpZmljYXRlIGZpbmdlcnByaW50IGlzIGNvbmZpZ3VyZWQgaW4gQXBwR2FsbGVyeSBDb25uZWN0LiBGb3IgZGV0YWlscywgc2VlIEFwcEdhbGxlcnkgQ29ubmVjdCBjb25maWd1cmF0aW9uIGluIERldmVsb3BtZW50IFByZXBhcmF0aW9ucy5cclxuICAgICAqIDMuIElmIHRoZSBjaGVjayByZXN1bHQgaXMgY29ycmVjdCwgY29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXHJcbiAgICAgKi9cclxuICAgIEVSUk9SX0NFUlRfRklOR0VSUFJJTlRfRU1QVFkgPSBcIjkwNzEzNTcwMlwiLFxyXG5cclxuICAgIC8vIFBlcm1pc3Npb24gaXMgbm90IGNvbmZpZ3VyZWQgb24gdGhlIEFwcEdhbGxlcnkgQ29ubmVjdC5cclxuICAgIEVSUk9SX1BFUk1JU1NJT05fTElTVF9FTVBUWSA9IFwiOTA3MTM1NzAzXCIsXHJcblxyXG4gICAgLy8gVGhlIGF1dGhlbnRpY2F0aW9uIGluZm9ybWF0aW9uIG9mIHRoZSBhcHBsaWNhdGlvbiBkb2VzIG5vdCBleGlzdC5cclxuICAgIEVSUk9SX0FVVEhfSU5GT19OT1RfRVhJU1QgPSBcIjYwMDJcIixcclxuXHJcbiAgICAvLyBBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgY2VydGlmaWNhdGUgZmluZ2VycHJpbnQgdmVyaWZpY2F0aW9uLiBDaGVjayB3aGV0aGVyIHRoZSBjb3JyZWN0IGNlcnRpZmljYXRlIGZpbmdlcnByaW50IGlzIGNvbmZpZ3VyZWQgaW4gQXBwR2FsbGVyeSBDb25uZWN0LiBGb3IgZGV0YWlscywgc2VlIEFwcEdhbGxlcnkgQ29ubmVjdCBjb25maWd1cmF0aW9uIGluIERldmVsb3BtZW50IFByZXBhcmF0aW9ucy5cclxuICAgIEVSUk9SX0NFUlRfRklOR0VSUFJJTlRfRVJST1IgPSBcIjYwMDNcIixcclxuXHJcbiAgICAvLyBJbnRlcmZhY2UgYXV0aGVudGljYXRpb246IFRoZSBwZXJtaXNzaW9uIGRvZXMgbm90IGV4aXN0IGFuZCBpcyBub3QgYXBwbGllZCBmb3IgaW4gQXBwR2FsbGVyeSBDb25uZWN0LlxyXG4gICAgRVJST1JfUEVSTUlTU0lPTl9OT1RfRVhJU1QgPSBcIjYwMDRcIixcclxuXHJcbiAgICAvLyBJbnRlcmZhY2UgYXV0aGVudGljYXRpb246IHVuYXV0aG9yaXplZC5cclxuICAgIEVSUk9SX1BFUk1JU1NJT05fTk9UX0FVVEhPUklaRUQgPSBcIjYwMDVcIixcclxuXHJcbiAgICAvLyBJbnRlcmZhY2UgYXV0aGVudGljYXRpb246IFRoZSBhdXRob3JpemF0aW9uIGV4cGlyZXMuXHJcbiAgICBFUlJPUl9QRVJNSVNTSU9OX0VYUElSRUQgPSBcIjYwMDZcIixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQXR0ciB7XHJcbiAgICBpZCA9IFwiaWRcIixcclxuICAgIG1lc3NhZ2UgPSBcIm1lc3NhZ2VcIixcclxuICAgIGZpcmVEYXRlID0gXCJmaXJlRGF0ZVwiLFxyXG4gICAgdGl0bGUgPSBcInRpdGxlXCIsXHJcbiAgICB0aWNrZXIgPSBcInRpY2tlclwiLFxyXG4gICAgc2hvd1doZW4gPSBcInNob3dXaGVuXCIsXHJcbiAgICBhdXRvQ2FuY2VsID0gXCJhdXRvQ2FuY2VsXCIsXHJcbiAgICBsYXJnZUljb24gPSBcImxhcmdlSWNvblwiLFxyXG4gICAgbGFyZ2VJY29uVXJsID0gXCJsYXJnZUljb25VcmxcIixcclxuICAgIHNtYWxsSWNvbiA9IFwic21hbGxJY29uXCIsXHJcbiAgICBiaWdUZXh0ID0gXCJiaWdUZXh0XCIsXHJcbiAgICBzdWJUZXh0ID0gXCJzdWJUZXh0XCIsXHJcbiAgICBiaWdQaWN0dXJlVXJsID0gXCJiaWdQaWN0dXJlVXJsXCIsXHJcbiAgICBzaG9ydGN1dElkID0gXCJzaG9ydGN1dElkXCIsXHJcbiAgICBudW1iZXIgPSBcIm51bWJlclwiLFxyXG4gICAgY2hhbm5lbElkID0gXCJjaGFubmVsSWRcIixcclxuICAgIGNoYW5uZWxOYW1lID0gXCJjaGFubmVsTmFtZVwiLFxyXG4gICAgY2hhbm5lbERlc2NyaXB0aW9uID0gXCJjaGFubmVsRGVzY3JpcHRpb25cIixcclxuICAgIGNvbG9yID0gXCJjb2xvclwiLFxyXG4gICAgZ3JvdXAgPSBcImdyb3VwXCIsXHJcbiAgICBncm91cFN1bW1hcnkgPSBcImdyb3VwU3VtbWFyeVwiLFxyXG4gICAgcGxheVNvdW5kID0gXCJwbGF5U291bmRcIixcclxuICAgIHNvdW5kTmFtZSA9IFwic291bmROYW1lXCIsXHJcbiAgICB2aWJyYXRlID0gXCJ2aWJyYXRlXCIsXHJcbiAgICB2aWJyYXRlRHVyYXRpb24gPSBcInZpYnJhdGVEdXJhdGlvblwiLFxyXG4gICAgYWN0aW9ucyA9IFwiYWN0aW9uc1wiLFxyXG4gICAgaW52b2tlQXBwID0gXCJpbnZva2VBcHBcIixcclxuICAgIHRhZyA9IFwidGFnXCIsXHJcbiAgICByZXBlYXRUeXBlID0gXCJyZXBlYXRUeXBlXCIsXHJcbiAgICByZXBlYXRUaW1lID0gXCJyZXBlYXRUaW1lXCIsXHJcbiAgICBvbmdvaW5nID0gXCJvbmdvaW5nXCIsXHJcbiAgICBhbGxvd1doaWxlSWRsZSA9IFwiYWxsb3dXaGlsZUlkbGVcIixcclxuICAgIGRvbnROb3RpZnlJbkZvcmVncm91bmQgPSBcImRvbnROb3RpZnlJbkZvcmVncm91bmRcIixcclxuICAgIHByaW9yaXR5ID0gXCJwcmlvcml0eVwiLFxyXG4gICAgaW1wb3J0YW5jZSA9IFwiaW1wb3J0YW5jZVwiLFxyXG4gICAgdmlzaWJpbGl0eSA9IFwidmlzaWJpbGl0eVwiLFxyXG4gICAgZGF0YSA9IFwiZGF0YVwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEltcG9ydGFuY2Uge1xyXG4gICAgTUFYID0gXCJtYXhcIixcclxuICAgIEhJR0ggPSBcImhpZ2hcIixcclxuICAgIERFRkFVTFQgPSBcImRlZmF1bHRcIixcclxuICAgIExPVyA9IFwibG93XCIsXHJcbiAgICBNSU4gPSBcIm1pblwiLFxyXG4gICAgTk9ORSA9IFwibm9uZVwiLFxyXG4gICAgVU5TUEVDSUZJRUQgPSBcInVuc3BlY2lmaWVkXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFByaW9yaXR5IHtcclxuICAgIE1BWCA9IFwibWF4XCIsXHJcbiAgICBISUdIID0gXCJoaWdoXCIsXHJcbiAgICBERUZBVUxUID0gXCJkZWZhdWx0XCIsXHJcbiAgICBMT1cgPSBcImxvd1wiLFxyXG4gICAgTUlOID0gXCJtaW5cIixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUmVwZWF0VHlwZSB7XHJcbiAgICBIT1VSID0gXCJob3VyXCIsXHJcbiAgICBNSU5VVEUgPSBcIm1pbnV0ZVwiLFxyXG4gICAgREFZID0gXCJkYXlcIixcclxuICAgIFdFRUsgPSBcIndlZWtcIixcclxuICAgIENVU1RPTV9USU1FID0gXCJjdXN0b21fdGltZVwiLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBWaXNpYmlsaXR5IHtcclxuICAgIFBVQkxJQyA9IFwicHVibGljXCIsXHJcbiAgICBTRUNSRVQgPSBcInNlY3JldFwiLFxyXG4gICAgUFJJVkFURSA9IFwicHJpdmF0ZVwiLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBSZW1vdGVNZXNzYWdlQnVpbGRlciB7XHJcbiAgICBUTyA9IFwidG9cIixcclxuICAgIE1FU1NBR0VfSUQgPSBcIm1lc3NhZ2VJZFwiLFxyXG4gICAgTUVTU0FHRV9UWVBFID0gXCJtZXNzYWdlVHlwZVwiLFxyXG4gICAgVFRMID0gXCJ0dGxcIixcclxuICAgIENPTExBUFNFX0tFWSA9IFwiY29sbGFwc2VLZXlcIixcclxuICAgIFJFQ0VJUFRfTU9ERSA9IFwicmVjZWlwdE1vZGVcIixcclxuICAgIFNFTkRfTU9ERSA9IFwic2VuZE1vZGVcIixcclxuICAgIERBVEEgPSBcImRhdGFcIixcclxufVxyXG5cclxuY2xhc3MgQ29yZG92YVJlbW90ZU1lc3NhZ2Uge1xyXG4gICAgc3RhdGljIElOU1RBTkNFX0lEX1NDT1BFID0gXCJIQ01cIjtcclxuXHJcbiAgICBzdGF0aWMgUFJJT1JJVFlfVU5LTk9XTiA9IDA7XHJcbiAgICBzdGF0aWMgUFJJT1JJVFlfSElHSCA9IDE7XHJcbiAgICBzdGF0aWMgUFJJT1JJVFlfTk9STUFMID0gMjtcclxuXHJcbiAgICBzdGF0aWMgQ09MTEFQU0VLRVkgPSBcImNvbGxhcHNlS2V5XCI7XHJcbiAgICBzdGF0aWMgREFUQSA9IFwiZGF0YVwiO1xyXG4gICAgc3RhdGljIERBVEFPRk1BUCA9IFwiZGF0YU9mTWFwXCI7XHJcbiAgICBzdGF0aWMgTUVTU0FHRUlEID0gXCJtZXNzYWdlSWRcIjtcclxuICAgIHN0YXRpYyBNRVNTQUdFVFlQRSA9IFwibWVzc2FnZVR5cGVcIjtcclxuICAgIHN0YXRpYyBPUklHSU5BTFVSR0VOQ1kgPSBcIm9yaWdpbmFsVXJnZW5jeVwiO1xyXG4gICAgc3RhdGljIFVSR0VOQ1kgPSBcInVyZ2VuY3lcIjtcclxuICAgIHN0YXRpYyBUVEwgPSBcInR0bFwiO1xyXG4gICAgc3RhdGljIFNFTlRUSU1FID0gXCJzZW50VGltZVwiO1xyXG4gICAgc3RhdGljIFRPID0gXCJ0b1wiO1xyXG4gICAgc3RhdGljIEZST00gPSBcImZyb21cIjtcclxuICAgIHN0YXRpYyBUT0tFTiA9IFwidG9rZW5cIjtcclxuICAgIHN0YXRpYyBBTkFMWVRJQ0lORk8gPSBcImFuYWx5dGljSW5mb1wiO1xyXG4gICAgc3RhdGljIEFOQUxZVElDSU5GT01BUCA9IFwiYW5hbHl0aWNJbmZvTWFwXCI7XHJcblxyXG4gICAgc3RhdGljIE5PVElGSUNBVElPTiA9IHtcclxuICAgICAgICBUSVRMRTogXCJ0aXRsZVwiLFxyXG4gICAgICAgIFRJVExFTE9DQUxJWkFUSU9OS0VZOiBcInRpdGxlTG9jYWxpemF0aW9uS2V5XCIsXHJcbiAgICAgICAgVElUTEVMT0NBTElaQVRJT05BUkdTOiBcInRpdGxlTG9jYWxpemF0aW9uQXJnc1wiLFxyXG4gICAgICAgIEJPRFlMT0NBTElaQVRJT05LRVk6IFwiYm9keUxvY2FsaXphdGlvbktleVwiLFxyXG4gICAgICAgIEJPRFlMT0NBTElaQVRJT05BUkdTOiBcImJvZHlMb2NhbGl6YXRpb25BcmdzXCIsXHJcbiAgICAgICAgQk9EWTogXCJib2R5XCIsXHJcbiAgICAgICAgSUNPTjogXCJpY29uXCIsXHJcbiAgICAgICAgU09VTkQ6IFwiU291bmRcIixcclxuICAgICAgICBUQUc6IFwiVGFnXCIsXHJcbiAgICAgICAgQ09MT1I6IFwiQ29sb3JcIixcclxuICAgICAgICBDTElDS0FDVElPTjogXCJDbGlja0FjdGlvblwiLFxyXG4gICAgICAgIENIQU5ORUxJRDogXCJDaGFubmVsSWRcIixcclxuICAgICAgICBJTUFHRVVSTDogXCJJbWFnZVVybFwiLFxyXG4gICAgICAgIExJTks6IFwiTGlua1wiLFxyXG4gICAgICAgIE5PVElGWUlEOiBcIk5vdGlmeUlkXCIsXHJcbiAgICAgICAgV0hFTjogXCJXaGVuXCIsXHJcbiAgICAgICAgTElHSFRTRVRUSU5HUzogXCJMaWdodFNldHRpbmdzXCIsXHJcbiAgICAgICAgQkFER0VOVU1CRVI6IFwiQmFkZ2VOdW1iZXJcIixcclxuICAgICAgICBJTVBPUlRBTkNFOiBcIkltcG9ydGFuY2VcIixcclxuICAgICAgICBUSUNLRVI6IFwiVGlja2VyXCIsXHJcbiAgICAgICAgVklCUkFURUNPTkZJRzogXCJ2aWJyYXRlQ29uZmlnXCIsXHJcbiAgICAgICAgVklTSUJJTElUWTogXCJ2aXNpYmlsaXR5XCIsXHJcbiAgICAgICAgSU5URU5UVVJJOiBcImludGVudFVyaVwiLFxyXG4gICAgICAgIElTQVVUT0NBTkNFTDogXCJpc0F1dG9DYW5jZWxcIixcclxuICAgICAgICBJU0xPQ0FMT05MWTogXCJpc0xvY2FsT25seVwiLFxyXG4gICAgICAgIElTREVGQVVMVExJR0hUOiBcImlzRGVmYXVsdExpZ2h0XCIsXHJcbiAgICAgICAgSVNERUZBVUxUU09VTkQ6IFwiaXNEZWZhdWx0U291bmRcIixcclxuICAgICAgICBJU0RFRkFVTFRWSUJSQVRFOiBcImlzRGVmYXVsdFZpYnJhdGVcIixcclxuICAgIH07XHJcbiAgICByZW1vdGVNc2c6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcclxuICAgICAgICB0aGlzLnJlbW90ZU1zZyA9IG9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIHBhcnNlIGFsbCBlbGVtZW50LHVub3JkZXJlZFxyXG4gICAgICovXHJcbiAgICBwYXJzZU1zZ0FsbEF0dHJpYnV0ZSgpIHtcclxuICAgICAgICBsZXQgcHVzaFJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5yZW1vdGVNc2cpIHtcclxuICAgICAgICAgICAgcHVzaFJlc3VsdCA9IHB1c2hSZXN1bHQgKyBrZXkgKyBcIiA6IFwiICsgdGhpcy5yZW1vdGVNc2dba2V5XSArIFwiXFxuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwdXNoUmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBnZXRDb2xsYXBzZUtleSgpIE9idGFpbnMgdGhlIGNsYXNzaWZpY2F0aW9uIGlkZW50aWZpZXIgKGNvbGxhcHNlIGtleSkgb2YgYSBtZXNzYWdlLlxyXG4gICAgICovXHJcbiAgICBnZXRDb2xsYXBzZUtleSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuQ09MTEFQU0VLRVldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBnZXREYXRhKCkgT2J0YWlucyB2YWxpZCBjb250ZW50IGRhdGEgb2YgYSBtZXNzYWdlLlxyXG4gICAgICovXHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5EQVRBXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogZ2V0RGF0YU9mTWFwKCkgYSBtZXNzYWdlIG1hcC5cclxuICAgICAqL1xyXG4gICAgZ2V0RGF0YU9mTWFwKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5EQVRBT0ZNQVBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBnZXRNZXNzYWdlSWQoKSBPYnRhaW5zIHRoZSBJRCBvZiBhIG1lc3NhZ2UuXHJcbiAgICAgKi9cclxuICAgIGdldE1lc3NhZ2VJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTUVTU0FHRUlEXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogZ2V0TWVzc2FnZVR5cGUoKSBPYnRhaW5zIHRoZSB0eXBlIG9mIGEgbWVzc2FnZS5cclxuICAgICAqL1xyXG4gICAgZ2V0TWVzc2FnZVR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk1FU1NBR0VUWVBFXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogZ2V0T3JpZ2luYWxVcmdlbmN5KCkgT2J0YWlucyB0aGUgb3JpZ2luYWwgcHJpb3JpdHkgb2YgYSBtZXNzYWdlLlxyXG4gICAgICovXHJcbiAgICBnZXRPcmlnaW5hbFVyZ2VuY3koKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk9SSUdJTkFMVVJHRU5DWV07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIGdldFVyZ2VuY3koKSBPYnRhaW5zIHByaW9yaXR5IG9mIGEgbWVzc2FnZS5cclxuICAgICAqL1xyXG4gICAgZ2V0VXJnZW5jeSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuVVJHRU5DWV07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIGdldFR0bCgpIE9idGFpbnMgdmFsaWQgZ2V0VHRsIG9mIGEgbWVzc2FnZS5cclxuICAgICAqL1xyXG4gICAgZ2V0VHRsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5UVExdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBnZXRTZW50VGltZSgpIE9idGFpbnMgdGhlIHRpbWUgd2hlbiBhIG1lc3NhZ2UgaXMgc2VudCBmcm9tIHRoZSBzZXJ2ZXIuXHJcbiAgICAgKi9cclxuICAgIGdldFNlbnRUaW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5TRU5UVElNRV07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIGdldFRvKCkgT2J0YWlucyB0aGUgcmVjaXBpZW50IG9mIGEgbWVzc2FnZS5cclxuICAgICAqL1xyXG4gICAgZ2V0VG8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLlRPXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogZ2V0RnJvbSgpIE9idGFpbnMgdGhlIHNlbmRlciBvZiBhIG1lc3NhZ2UuXHJcbiAgICAgKi9cclxuICAgIGdldEZyb20oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLkZST01dO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBnZXRUb2tlbigpIE9idGFpbnMgdmFsaWQgdG9rZW5cclxuICAgICAqL1xyXG4gICAgZ2V0VG9rZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLlRPS0VOXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbmFseXRpY0luZm8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLkFOQUxZVElDSU5GT107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QW5hbHl0aWNJbmZvTWFwKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5BTkFMWVRJQ0lORk9NQVBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0VGl0bGUoKSBPYnRhaW5zIHRoZSB0aXRsZSBvZiBhIG1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgZ2V0Tm90aWZpY2F0aW9uVGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5USVRMRV07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRUaXRsZUxvY2FsaXphdGlvbktleSgpIE9idGFpbnMgdGhlIGtleSBvZiB0aGUgZGlzcGxheWVkIHRpdGxlIG9mIGEgbm90aWZpY2F0aW9uIG1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgZ2V0VGl0bGVMb2NhbGl6YXRpb25LZXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW1xyXG4gICAgICAgICAgICBDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVElUTEVMT0NBTElaQVRJT05LRVlcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0VGl0bGVMb2NhbGl6YXRpb25BcmdzKCkgT2J0YWlucyB2YXJpYWJsZSBwYXJhbWV0ZXJzIG9mIHRoZSBkaXNwbGF5ZWQgdGl0bGUgb2YgYSBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIGdldFRpdGxlTG9jYWxpemF0aW9uQXJncygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbXHJcbiAgICAgICAgICAgIENvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5USVRMRUxPQ0FMSVpBVElPTkFSR1NcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0Qm9keUxvY2FsaXphdGlvbktleSgpIE9idGFpbnMgdGhlIGtleSBvZiB0aGUgZGlzcGxheWVkIGNvbnRlbnQgb2YgYSBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIGdldEJvZHlMb2NhbGl6YXRpb25LZXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW1xyXG4gICAgICAgICAgICBDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uQk9EWUxPQ0FMSVpBVElPTktFWVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRCb2R5TG9jYWxpemF0aW9uQXJncygpIE9idGFpbnMgdmFyaWFibGUgcGFyYW1ldGVycyBvZiB0aGUgZGlzcGxheWVkIGNvbnRlbnQgb2YgYSBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIGdldEJvZHlMb2NhbGl6YXRpb25BcmdzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tcclxuICAgICAgICAgICAgQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkJPRFlMT0NBTElaQVRJT05BUkdTXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldEJvZHkoKSBPYnRhaW5zIHRoZSBib2R5IG9mIGEgbWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBnZXRCb2R5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uQk9EWV07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRJY29uKCkgT2J0YWlucyB0aGUgaWNvbiBvZiBhIG1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgZ2V0SWNvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklDT05dO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0U291bmQoKSBPYnRhaW5zIHRoZSBzb3VuZCBmcm9tIGEgbWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBnZXRTb3VuZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLlNPVU5EXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldFRhZygpIE9idGFpbnMgdGhlIHRhZyBmcm9tIGEgbWVzc2FnZSBmb3IgbWVzc2FnZSBvdmVyd3JpdGluZ1xyXG4gICAgICovXHJcbiAgICBnZXRUYWcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5UQUddO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0Q29sb3IoKSBPYnRhaW5zIHRoZSBjb2xvcnMgb2YgaWNvbnMgaW4gYSBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIGdldENvbG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uQ09MT1JdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0Q2xpY2tBY3Rpb24oKSBPYnRhaW5zIGFjdGlvbnMgdHJpZ2dlcmVkIGJ5IG1lc3NhZ2UgdGFwcGluZ1xyXG4gICAgICovXHJcbiAgICBnZXRDbGlja0FjdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkNMSUNLQUNUSU9OXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldENoYW5uZWxJZCgpIE9idGFpbnMgSURzIG9mIGNoYW5uZWxzIHRoYXQgc3VwcG9ydCB0aGUgZGlzcGxheSBvZiBtZXNzYWdlc1xyXG4gICAgICovXHJcbiAgICBnZXRDaGFubmVsSWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5DSEFOTkVMSURdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0SW1hZ2VVcmwoKSBPYnRhaW5zIHRoZSBpbWFnZSBVUkwgZnJvbSBhIG1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgZ2V0SW1hZ2VVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JTUFHRVVSTF07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRMaW5rKCkgT2J0YWlucyB0aGUgVVJMIHRvIGJlIGFjY2Vzc2VkIGZyb20gYSBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIGdldExpbmsoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5MSU5LXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldE5vdGlmeUlkKCkgT2J0YWlucyB0aGUgdW5pcXVlIElEIG9mIGEgbWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBnZXROb3RpZnlJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLk5PVElGWUlEXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldFdoZW4oKVxyXG4gICAgICovXHJcbiAgICBnZXRXaGVuKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uV0hFTl07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRMaWdodFNldHRpbmdzKClcclxuICAgICAqL1xyXG4gICAgZ2V0TGlnaHRTZXR0aW5ncygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkxJR0hUU0VUVElOR1NdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0QmFkZ2VOdW1iZXIoKVxyXG4gICAgICovXHJcbiAgICBnZXRCYWRnZU51bWJlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkJBREdFTlVNQkVSXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldEltcG9ydGFuY2UoKVxyXG4gICAgICovXHJcbiAgICBnZXRJbXBvcnRhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSU1QT1JUQU5DRV07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRUaWNrZXIoKVxyXG4gICAgICovXHJcbiAgICBnZXRUaWNrZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5USUNLRVJdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0VmlicmF0ZUNvbmZpZygpXHJcbiAgICAgKi9cclxuICAgIGdldFZpYnJhdGVDb25maWcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5WSUJSQVRFQ09ORklHXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldFZpc2liaWxpdHkoKVxyXG4gICAgICovXHJcbiAgICBnZXRWaXNpYmlsaXR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVklTSUJJTElUWV07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRJbnRlbnRVcmkoKVxyXG4gICAgICovXHJcbiAgICBnZXRJbnRlbnRVcmkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JTlRFTlRVUkldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246aXNBdXRvQ2FuY2VsKClcclxuICAgICAqL1xyXG4gICAgaXNBdXRvQ2FuY2VsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSVNBVVRPQ0FOQ0VMXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldEludGVudFVyaSgpXHJcbiAgICAgKi9cclxuICAgIGlzTG9jYWxPbmx5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSVNMT0NBTE9OTFldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246aXNEZWZhdWx0TGlnaHQoKVxyXG4gICAgICovXHJcbiAgICBpc0RlZmF1bHRMaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklTREVGQVVMVExJR0hUXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmlzRGVmYXVsdFNvdW5kKClcclxuICAgICAqL1xyXG4gICAgaXNEZWZhdWx0U291bmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JU0RFRkFVTFRTT1VORF07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjppc0RlZmF1bHRWaWJyYXRlKClcclxuICAgICAqL1xyXG4gICAgaXNEZWZhdWx0VmlicmF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbXHJcbiAgICAgICAgICAgIENvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JU0RFRkFVTFRWSUJSQVRFXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxufVxyXG5cclxudHlwZSBMb2NhbE5vdGlmaWNhdGlvbk9iamVjdCA9IHtcclxuICAgIFtrZXkgaW4gQXR0cl0/OiBhbnk7XHJcbn07XHJcblxyXG50eXBlIFJlbW90ZU1lc3NhZ2VPYmplY3QgPSB7XHJcbiAgICBba2V5IGluIFJlbW90ZU1lc3NhZ2VCdWlsZGVyXT86IGFueTtcclxufTtcclxuXHJcbmludGVyZmFjZSBJZFRhZyB7XHJcblx0aWQ6bnVtYmVyLFxyXG5cdHRhZzpzdHJpbmdcclxufSJdfQ==