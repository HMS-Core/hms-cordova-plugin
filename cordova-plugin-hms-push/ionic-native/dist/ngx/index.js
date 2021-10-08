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
import { __extends } from "tslib";
import { Injectable } from "@angular/core";
import { IonicNativePlugin, cordova } from "@ionic-native/core";
var HmsPush = /** @class */ (function (_super) {
    __extends(HmsPush, _super);
    function HmsPush() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.HmsPushResultCode = HmsPushResultCode;
        _this.CordovaRemoteMessage = CordovaRemoteMessage;
        _this.RemoteMessageBuilder = RemoteMessageBuilder;
        _this.DEFAULT_TOKEN_SCOPE = "HCM";
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
    HmsPush.prototype.getToken = function (scope) { return cordova(this, "getToken", { "otherPromise": true }, arguments); };
    /**
     * Obtains a token that a target app developer applies for a sender to integrate Push Kit in the multi-sender scenario.
     * @returns Promise<string>
     * @params subjectId ? : String
     */
    HmsPush.prototype.getTokenWithSubjectId = function (subjectId) { return cordova(this, "getTokenWithSubjectId", { "otherPromise": true }, arguments); };
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
    HmsPush.prototype.deleteToken = function (scope) { return cordova(this, "deleteToken", { "otherPromise": true }, arguments); };
    /**
     * Deletes a token that a target app developer applies for a sender to integrate Push Kit in the multi-sender scenario.
     * @returns Promise<string>
     * @params subjectId ? : String
     */
    HmsPush.prototype.deleteTokenWithSubjectId = function (subjectId) { return cordova(this, "deleteTokenWithSubjectId", { "otherPromise": true }, arguments); };
    /**
     * This method is used to subscribe to topics in asynchronous mode. The HUAWEI Push Kit topic messaging function allows you to send messages to multiple devices whose users have subscribed to a specific topic. You can write messages about the topic as required, and HUAWEI Push Kit determines the release path and sends messages to the correct devices in a reliable manner.
     * @param {string} topic Topic to be subscribed to.
     * @returns Promise<string>
     */
    HmsPush.prototype.subscribe = function (topic) { return cordova(this, "subscribe", { "otherPromise": true }, arguments); };
    /**
     * This method is used to unsubscribe from topics that are subscribed to through the subscribe method.
     * @param {string} topic Topic to be unsubscribed to.
     * @returns Promise<string>
     */
    HmsPush.prototype.unsubscribe = function (topic) { return cordova(this, "unsubscribe", { "otherPromise": true }, arguments); };
    /**
     * Sets whether to enable automatic initialization. If the enable parameter is set to true, the SDK automatically generates an AAID and applies for a token.
     * @returns Promise<boolean>
     * @param {boolean} enabled Indicates whether to enable automatic initialization.
     */
    HmsPush.prototype.setAutoInitEnabled = function (enabled) { return cordova(this, "setAutoInitEnabled", { "otherPromise": true }, arguments); };
    HmsPush.prototype.getOdid = function () { return cordova(this, "getOdid", { "otherPromise": true }, arguments); };
    /**
     * This method is used to check whether automatic initialization is enabled.
     * @returns Promise<string>
     */
    HmsPush.prototype.isAutoInitEnabled = function () { return cordova(this, "isAutoInitEnabled", { "otherPromise": true }, arguments); };
    HmsPush.prototype.getInitialNotification = function () { return cordova(this, "getInitialNotification", { "otherPromise": true }, arguments); };
    HmsPush.prototype.sendRemoteMessage = function (remoteMessage) { return cordova(this, "sendRemoteMessage", { "otherPromise": true }, arguments); };
    HmsPush.prototype.setBackgroundFile = function (filePath) { return cordova(this, "setBackgroundFile", { "otherPromise": true }, arguments); };
    HmsPush.prototype.setItem = function (key, value) { return cordova(this, "setItem", { "otherPromise": true }, arguments); };
    HmsPush.prototype.getItem = function (key) { return cordova(this, "getItem", { "otherPromise": true }, arguments); };
    HmsPush.prototype.removeItem = function (key) { return cordova(this, "removeItem", { "otherPromise": true }, arguments); };
    HmsPush.prototype.removeBackgroundFile = function () { return cordova(this, "removeBackgroundFile", { "otherPromise": true }, arguments); };
    HmsPush.pluginName = "HmsPush";
    HmsPush.plugin = "@hmscore/cordova-plugin-hms-push";
    HmsPush.pluginRef = "HmsPush";
    HmsPush.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HmsPush.platforms = ["Android"];
    HmsPush.decorators = [
        { type: Injectable }
    ];
    return HmsPush;
}(IonicNativePlugin));
export { HmsPush };
var HmsLocalNotification = /** @class */ (function (_super) {
    __extends(HmsLocalNotification, _super);
    function HmsLocalNotification() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Attr = Attr;
        _this.Importance = Importance;
        _this.Priority = Priority;
        _this.RepeatType = RepeatType;
        _this.Visibility = Visibility;
        return _this;
    }
    HmsLocalNotification.prototype.localNotification = function (localNotification) { return cordova(this, "localNotification", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.localNotificationSchedule = function (localNotification) { return cordova(this, "localNotificationSchedule", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.cancelAllNotifications = function () { return cordova(this, "cancelAllNotifications", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.cancelNotifications = function () { return cordova(this, "cancelNotifications", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.cancelScheduledNotifications = function () { return cordova(this, "cancelScheduledNotifications", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.cancelNotificationsWithId = function (id) { return cordova(this, "cancelNotificationsWithId", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.cancelNotificationsWithIdTag = function (idTag) { return cordova(this, "cancelNotificationsWithIdTag", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.cancelNotificationsWithTag = function (tag) { return cordova(this, "cancelNotificationsWithTag", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.getNotifications = function () { return cordova(this, "getNotifications", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.getScheduledNotifications = function () { return cordova(this, "getScheduledNotifications", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.getChannels = function () { return cordova(this, "getChannels", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.channelExists = function (channelId) { return cordova(this, "channelExists", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.channelBlocked = function (channelId) { return cordova(this, "channelBlocked", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.deleteChannel = function (channelId) { return cordova(this, "deleteChannel", { "otherPromise": true }, arguments); };
    HmsLocalNotification.pluginName = "HmsLocalNotification";
    HmsLocalNotification.plugin = "@hmscore/cordova-plugin-hms-push";
    HmsLocalNotification.pluginRef = "HmsLocalNotification";
    HmsLocalNotification.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HmsLocalNotification.platforms = ["Android"];
    HmsLocalNotification.decorators = [
        { type: Injectable }
    ];
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
        _this.ON_MULTI_SENDER_TOKEN_ERROR_EVENT = "ON_MULTI_SENDER_TOKEN_ERROR_EVENT";
        _this.ON_MULTI_SENDER_TOKEN_RECEIVED_EVENT = "ON_MULTI_SENDER_TOKEN_RECEIVED_EVENT";
        return _this;
    }
    HmsPushEvent.prototype.onRemoteMessageReceived = function (callback) { return cordova(this, "onRemoteMessageReceived", { "otherPromise": true }, arguments); };
    HmsPushEvent.prototype.onTokenReceived = function (callback) { return cordova(this, "onTokenReceived", { "otherPromise": true }, arguments); };
    HmsPushEvent.prototype.onTokenError = function (callback) { return cordova(this, "onTokenError", { "otherPromise": true }, arguments); };
    HmsPushEvent.prototype.onPushMessageSent = function (callback) { return cordova(this, "onPushMessageSent", { "otherPromise": true }, arguments); };
    HmsPushEvent.prototype.onPushMessageSentError = function (callback) { return cordova(this, "onPushMessageSentError", { "otherPromise": true }, arguments); };
    HmsPushEvent.prototype.onPushMessageSentDelivered = function (callback) { return cordova(this, "onPushMessageSentDelivered", { "otherPromise": true }, arguments); };
    HmsPushEvent.prototype.onLocalNotificationAction = function (callback) { return cordova(this, "onLocalNotificationAction", { "otherPromise": true }, arguments); };
    HmsPushEvent.prototype.onNotificationOpenedApp = function (callback) { return cordova(this, "onNotificationOpenedApp", { "otherPromise": true }, arguments); };
    HmsPushEvent.prototype.onMultiSenderTokenReceivedEvent = function (callback) { return cordova(this, "onMultiSenderTokenReceivedEvent", { "otherPromise": true }, arguments); };
    HmsPushEvent.prototype.onMultiSenderTokenErrorEvent = function (callback) { return cordova(this, "onMultiSenderTokenErrorEvent", { "otherPromise": true }, arguments); };
    HmsPushEvent.pluginName = "HmsPushEvent";
    HmsPushEvent.plugin = "@hmscore/cordova-plugin-hms-push";
    HmsPushEvent.pluginRef = "HmsPushEvent";
    HmsPushEvent.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HmsPushEvent.platforms = ["Android"];
    HmsPushEvent.decorators = [
        { type: Injectable }
    ];
    return HmsPushEvent;
}(IonicNativePlugin));
export { HmsPushEvent };
var HmsPushProfile = /** @class */ (function (_super) {
    __extends(HmsPushProfile, _super);
    function HmsPushProfile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.HUAWEI_PROFILE = 1;
        _this.CUSTOM_PROFILE = 2;
        _this.UNDEFINED_PROFILE = -1;
        return _this;
    }
    /**
     *
     */
    HmsPushProfile.prototype.isSupportProfile = function () { return cordova(this, "isSupportProfile", { "otherPromise": true }, arguments); };
    HmsPushProfile.prototype.addProfile = function (type, profileId) { return cordova(this, "addProfile", { "otherPromise": true }, arguments); };
    HmsPushProfile.prototype.addProfileWithSubjectId = function (subjectId, type, profileId) { return cordova(this, "addProfileWithSubjectId", { "otherPromise": true }, arguments); };
    HmsPushProfile.prototype.deleteProfile = function (profileId) { return cordova(this, "deleteProfile", { "otherPromise": true }, arguments); };
    HmsPushProfile.prototype.deleteProfileWithSubjectId = function (subjectId, profileId) { return cordova(this, "deleteProfileWithSubjectId", { "otherPromise": true }, arguments); };
    HmsPushProfile.pluginName = "HmsPushProfile";
    HmsPushProfile.plugin = "@hmscore/cordova-plugin-hms-push";
    HmsPushProfile.pluginRef = "HmsPushProfile";
    HmsPushProfile.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HmsPushProfile.platforms = ["Android"];
    HmsPushProfile.decorators = [
        { type: Injectable }
    ];
    return HmsPushProfile;
}(IonicNativePlugin));
export { HmsPushProfile };
var FcmPushProxy = /** @class */ (function (_super) {
    __extends(FcmPushProxy, _super);
    function FcmPushProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FcmPushProxy.prototype.init = function () {
        return;
    };
    FcmPushProxy.pluginName = "FcmPushProxy";
    FcmPushProxy.plugin = "@hmscore/cordova-plugin-hms-push";
    FcmPushProxy.pluginRef = "FcmPushProxy";
    FcmPushProxy.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    FcmPushProxy.platforms = ["Android"];
    FcmPushProxy.decorators = [
        { type: Injectable }
    ];
    return FcmPushProxy;
}(IonicNativePlugin));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1wdXNoL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7RUFjRTs7QUFFRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBVTNDLDJCQUFpQjs7O1FBQzFDLHVCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQ3RDLDBCQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQzVDLDBCQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQzVDLHlCQUFtQixHQUFHLEtBQUssQ0FBQTs7O0lBRTNCOzs7T0FHRztJQUNILHNCQUFJO0lBS0osOEJBQVk7SUFLWiwrQkFBYTtJQUtiOzs7T0FHRztJQUNILDRCQUFVO0lBS1Y7OztPQUdHO0lBQ0gsNkJBQVc7SUFLWDs7O09BR0c7SUFDSCx1QkFBSztJQUtMOzs7T0FHRztJQUNILHlCQUFPO0lBS1A7Ozs7T0FJRztJQUNILDBCQUFRLGFBQUMsS0FBYztJQUt2Qjs7OztPQUlHO0lBQ0gsdUNBQXFCLGFBQUMsU0FBaUI7SUFLdkM7OztPQUdHO0lBQ0gsaUNBQWU7SUFLZjs7O09BR0c7SUFDSCw0QkFBVTtJQUtWOzs7O09BSUc7SUFDSCw2QkFBVyxhQUFDLEtBQWM7SUFLMUI7Ozs7T0FJRztJQUNILDBDQUF3QixhQUFDLFNBQWlCO0lBSzFDOzs7O09BSUc7SUFDSCwyQkFBUyxhQUFDLEtBQWE7SUFLdkI7Ozs7T0FJRztJQUNILDZCQUFXLGFBQUMsS0FBYTtJQUt6Qjs7OztPQUlHO0lBQ0gsb0NBQWtCLGFBQUMsT0FBZ0I7SUFLbkMseUJBQU87SUFLUDs7O09BR0c7SUFDSCxtQ0FBaUI7SUFLakIsd0NBQXNCO0lBS3RCLG1DQUFpQixhQUFDLGFBQWtDO0lBS3BELG1DQUFp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TTtRQUNaLEtBQUssRUFBRSxPQUFPO1FBQ2QsR0FBRyxFQUFFLEtBQUs7UUFDVixLQUFLLEVBQUUsT0FBTztRQUNkLFdBQVcsRUFBRSxhQUFhO1FBQzFCLFNBQVMsRUFBRSxXQUFXO1FBQ3RCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLFVBQVU7UUFDcEIsSUFBSSxFQUFFLE1BQU07UUFDWixhQUFhLEVBQUUsZUFBZTtRQUM5QixXQUFXLEVBQUUsYUFBYTtRQUMxQixVQUFVLEVBQUUsWUFBWTtRQUN4QixNQUFNLEVBQUUsUUFBUTtRQUNoQixhQUFhLEVBQUUsZUFBZTtRQUM5QixVQUFVLEVBQUUsWUFBWTtRQUN4QixTQUFTLEVBQUUsV0FBVztRQUN0QixZQUFZLEVBQUUsY0FBYztRQUM1QixXQUFXLEVBQUUsYUFBYTtRQUMxQixjQUFjLEVBQUUsZ0JBQWdCO1FBQ2hDLGNBQWMsRUFBRSxnQkFBZ0I7UUFDaEMsZ0JBQWdCLEVBQUUsa0JBQWtCO0tBQ3ZDLENBQUM7K0JBM3NCTjs7U0F3cEJNLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgICBDb3B5cmlnaHQgMjAyMC0yMDIxLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5cclxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcclxuICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG5cclxuICAgICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAgICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSBcIkBpb25pYy1uYXRpdmUvY29yZVwiO1xyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiBcIkhtc1B1c2hcIixcclxuICAgIHBsdWdpbjogXCJAaG1zY29yZS9jb3Jkb3ZhLXBsdWdpbi1obXMtcHVzaFwiLFxyXG4gICAgcGx1Z2luUmVmOiBcIkhtc1B1c2hcIixcclxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxyXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIbXNQdXNoIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gICAgSG1zUHVzaFJlc3VsdENvZGUgPSBIbXNQdXNoUmVzdWx0Q29kZTtcclxuICAgIENvcmRvdmFSZW1vdGVNZXNzYWdlID0gQ29yZG92YVJlbW90ZU1lc3NhZ2U7XHJcbiAgICBSZW1vdGVNZXNzYWdlQnVpbGRlciA9IFJlbW90ZU1lc3NhZ2VCdWlsZGVyO1xyXG4gICAgREVGQVVMVF9UT0tFTl9TQ09QRSA9IFwiSENNXCJcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kICBpbml0aWFsaXplZCBIbXNQdXNoLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICAgICovXHJcbiAgICBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBkaXNhYmxlIHRoZSBkaXNwbGF5IG9mIG5vdGlmaWNhdGlvbiBtZXNzYWdlcy4gSWYgeW91IHdhbnQgdG8gY29udHJvbCB0aGUgZGlzcGxheSBvZiBub3RpZmljYXRpb24gbWVzc2FnZXMgaW4gYW4gYXBwLCB5b3UgY2FuIGNhbGwgdGhpcyBtZXRob2QuIFRoaXMgbWV0aG9kIGFwcGxpZXMgdG8gbm90aWZpY2F0aW9uIG1lc3NhZ2VzIGJ1dCBub3QgZGF0YSBtZXNzYWdlcy4gSXQgaXMgdGhlIGFwcCB0aGF0IGRldGVybWluZXMgd2hldGhlciB0byBlbmFibGUgb3IgZGlzYWJsZSBkYXRhIG1lc3NhZ2luZy5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAgICovXHJcbiAgICB0dXJuT25QdXNoKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGVuYWJsZSB0aGUgZGlzcGxheSBvZiBub3RpZmljYXRpb24gbWVzc2FnZXMuIElmIHlvdSB3YW50IHRvIGNvbnRyb2wgdGhlIGRpc3BsYXkgb2Ygbm90aWZpY2F0aW9uIG1lc3NhZ2VzIGluIGFuIGFwcCwgeW91IGNhbiBjYWxsIHRoaXMgbWV0aG9kLiBUaGlzIG1ldGhvZCBhcHBsaWVzIHRvIG5vdGlmaWNhdGlvbiBtZXNzYWdlcyBidXQgbm90IGRhdGEgbWVzc2FnZXMuIEl0IGlzIHRoZSBhcHAgdGhhdCBkZXRlcm1pbmVzIHdoZXRoZXIgdG8gZW5hYmxlIG9yIGRpc2FibGUgZGF0YSBtZXNzYWdpbmcuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgICAqL1xyXG4gICAgdHVybk9mZlB1c2goKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gb2J0YWluIGFuIEFBSUQgaW4gc3luY2hyb25vdXMgbW9kZS4gQmVmb3JlIGFwcGx5aW5nIGZvciBhIHRva2VuLCBhbiBhcHAgY2FsbHMgdGhpcyBtZXRob2QgdG8gb2J0YWluIGl0cyB1bmlxdWUgQUFJRC4gVGhlIEhVQVdFSSBQdXNoIHNlcnZlciBnZW5lcmF0ZXMgYSB0b2tlbiBmb3IgdGhlIGFwcCBiYXNlZCBvbiB0aGUgQUFJRC4gSWYgdGhlIEFBSUQgb2YgdGhlIGFwcCBjaGFuZ2VzLCBhIG5ldyB0b2tlbiB3aWxsIGJlIGdlbmVyYXRlZCBuZXh0IHRpbWUgd2hlbiB0aGUgYXBwIGFwcGxpZXMgZm9yIGEgdG9rZW4uIElmIGFuIGFwcCBuZWVkcyB0byByZXBvcnQgc3RhdGlzdGljcyBldmVudHMsIGl0IG11c3QgY2FycnkgdGhlIEFBSUQgYXMgaXRzIHVuaXF1ZSBJRC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAgICovXHJcbiAgICBnZXRJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIG9idGFpbiBhbiBBQUlEIGluIGFzeW5jaHJvbm91cyBtb2RlLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICAgKi9cclxuICAgIGdldEFBSUQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBvYnRhaW4gYSB0b2tlbiByZXF1aXJlZCBmb3IgYWNjZXNzaW5nIEhVQVdFSSBQdXNoIEtpdC4gSWYgdGhlcmUgaXMgbm8gbG9jYWwgQUFJRCwgdGhpcyBtZXRob2Qgd2lsbCBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlIGFuIEFBSUQgd2hlbiBpdCBpcyBjYWxsZWQgYmVjYXVzZSB0aGUgSFVBV0VJIFB1c2ggS2l0IHNlcnZlciBuZWVkcyB0byBnZW5lcmF0ZSBhIHRva2VuIGJhc2VkIG9uIHRoZSBBQUlELlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICAgKiBAcGFyYW1zIHNjb3BlID8gOiBTdHJpbmdcclxuICAgICAqL1xyXG4gICAgZ2V0VG9rZW4oc2NvcGU/OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRhaW5zIGEgdG9rZW4gdGhhdCBhIHRhcmdldCBhcHAgZGV2ZWxvcGVyIGFwcGxpZXMgZm9yIGEgc2VuZGVyIHRvIGludGVncmF0ZSBQdXNoIEtpdCBpbiB0aGUgbXVsdGktc2VuZGVyIHNjZW5hcmlvLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICAgKiBAcGFyYW1zIHN1YmplY3RJZCA/IDogU3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGdldFRva2VuV2l0aFN1YmplY3RJZChzdWJqZWN0SWQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gb2J0YWluIHRoZSBnZW5lcmF0aW9uIHRpbWVzdGFtcCBvZiBhbiBBQUlELlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICAgKi9cclxuICAgIGdldENyZWF0aW9uVGltZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGRlbGV0ZSBhIGxvY2FsIEFBSUQgYW5kIGl0cyBnZW5lcmF0aW9uIHRpbWVzdGFtcC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAgICovXHJcbiAgICBkZWxldGVBQUlEKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGRlbGV0ZSBhIHRva2VuLiBBZnRlciBhIHRva2VuIGlzIGRlbGV0ZWQsIHRoZSBjb3JyZXNwb25kaW5nIEFBSUQgd2lsbCBub3QgYmUgZGVsZXRlZC4gVGhpcyBtZXRob2QgaXMgYSBzeW5jaHJvbm91cyBtZXRob2QuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgICAqIEBwYXJhbXMgc2NvcGUgPyA6IFN0cmluZ1xyXG4gICAgICovXHJcbiAgICBkZWxldGVUb2tlbihzY29wZT86IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGVzIGEgdG9rZW4gdGhhdCBhIHRhcmdldCBhcHAgZGV2ZWxvcGVyIGFwcGxpZXMgZm9yIGEgc2VuZGVyIHRvIGludGVncmF0ZSBQdXNoIEtpdCBpbiB0aGUgbXVsdGktc2VuZGVyIHNjZW5hcmlvLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICAgKiBAcGFyYW1zIHN1YmplY3RJZCA/IDogU3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZVRva2VuV2l0aFN1YmplY3RJZChzdWJqZWN0SWQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gc3Vic2NyaWJlIHRvIHRvcGljcyBpbiBhc3luY2hyb25vdXMgbW9kZS4gVGhlIEhVQVdFSSBQdXNoIEtpdCB0b3BpYyBtZXNzYWdpbmcgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBzZW5kIG1lc3NhZ2VzIHRvIG11bHRpcGxlIGRldmljZXMgd2hvc2UgdXNlcnMgaGF2ZSBzdWJzY3JpYmVkIHRvIGEgc3BlY2lmaWMgdG9waWMuIFlvdSBjYW4gd3JpdGUgbWVzc2FnZXMgYWJvdXQgdGhlIHRvcGljIGFzIHJlcXVpcmVkLCBhbmQgSFVBV0VJIFB1c2ggS2l0IGRldGVybWluZXMgdGhlIHJlbGVhc2UgcGF0aCBhbmQgc2VuZHMgbWVzc2FnZXMgdG8gdGhlIGNvcnJlY3QgZGV2aWNlcyBpbiBhIHJlbGlhYmxlIG1hbm5lci5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0b3BpYyBUb3BpYyB0byBiZSBzdWJzY3JpYmVkIHRvLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICAgKi9cclxuICAgIHN1YnNjcmliZSh0b3BpYzogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gdW5zdWJzY3JpYmUgZnJvbSB0b3BpY3MgdGhhdCBhcmUgc3Vic2NyaWJlZCB0byB0aHJvdWdoIHRoZSBzdWJzY3JpYmUgbWV0aG9kLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRvcGljIFRvcGljIHRvIGJlIHVuc3Vic2NyaWJlZCB0by5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAgICovXHJcbiAgICB1bnN1YnNjcmliZSh0b3BpYzogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgd2hldGhlciB0byBlbmFibGUgYXV0b21hdGljIGluaXRpYWxpemF0aW9uLiBJZiB0aGUgZW5hYmxlIHBhcmFtZXRlciBpcyBzZXQgdG8gdHJ1ZSwgdGhlIFNESyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlcyBhbiBBQUlEIGFuZCBhcHBsaWVzIGZvciBhIHRva2VuLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxib29sZWFuPlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBlbmFibGVkIEluZGljYXRlcyB3aGV0aGVyIHRvIGVuYWJsZSBhdXRvbWF0aWMgaW5pdGlhbGl6YXRpb24uXHJcbiAgICAgKi9cclxuICAgIHNldEF1dG9Jbml0RW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRPZGlkKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gY2hlY2sgd2hldGhlciBhdXRvbWF0aWMgaW5pdGlhbGl6YXRpb24gaXMgZW5hYmxlZC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAgICovXHJcbiAgICBpc0F1dG9Jbml0RW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEluaXRpYWxOb3RpZmljYXRpb24oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNlbmRSZW1vdGVNZXNzYWdlKHJlbW90ZU1lc3NhZ2U6IFJlbW90ZU1lc3NhZ2VPYmplY3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldEJhY2tncm91bmRGaWxlKGZpbGVQYXRoOnN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0SXRlbShrZXk6c3RyaW5nLHZhbHVlOnN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0SXRlbShrZXk6c3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHJlbW92ZUl0ZW0oa2V5OnN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVtb3ZlQmFja2dyb3VuZEZpbGUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiBcIkhtc0xvY2FsTm90aWZpY2F0aW9uXCIsXHJcbiAgICBwbHVnaW46IFwiQGhtc2NvcmUvY29yZG92YS1wbHVnaW4taG1zLXB1c2hcIixcclxuICAgIHBsdWdpblJlZjogXCJIbXNMb2NhbE5vdGlmaWNhdGlvblwiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhtc0xvY2FsTm90aWZpY2F0aW9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gICAgQXR0ciA9IEF0dHI7XHJcbiAgICBJbXBvcnRhbmNlID0gSW1wb3J0YW5jZTtcclxuICAgIFByaW9yaXR5ID0gUHJpb3JpdHk7XHJcbiAgICBSZXBlYXRUeXBlID0gUmVwZWF0VHlwZTtcclxuICAgIFZpc2liaWxpdHkgPSBWaXNpYmlsaXR5O1xyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBsb2NhbE5vdGlmaWNhdGlvbihsb2NhbE5vdGlmaWNhdGlvbjogTG9jYWxOb3RpZmljYXRpb25PYmplY3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgbG9jYWxOb3RpZmljYXRpb25TY2hlZHVsZShsb2NhbE5vdGlmaWNhdGlvbjogTG9jYWxOb3RpZmljYXRpb25PYmplY3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgY2FuY2VsQWxsTm90aWZpY2F0aW9ucygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGNhbmNlbE5vdGlmaWNhdGlvbnMoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBjYW5jZWxTY2hlZHVsZWROb3RpZmljYXRpb25zKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgY2FuY2VsTm90aWZpY2F0aW9uc1dpdGhJZChpZDogbnVtYmVyW10pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGNhbmNlbE5vdGlmaWNhdGlvbnNXaXRoSWRUYWcoaWRUYWc6IElkVGFnW10pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGNhbmNlbE5vdGlmaWNhdGlvbnNXaXRoVGFnKHRhZzogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXROb3RpZmljYXRpb25zKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRTY2hlZHVsZWROb3RpZmljYXRpb25zKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRDaGFubmVscygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgY2hhbm5lbEV4aXN0cyhjaGFubmVsSWQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgY2hhbm5lbEJsb2NrZWQoY2hhbm5lbElkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGRlbGV0ZUNoYW5uZWwoY2hhbm5lbElkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gICAgcGx1Z2luTmFtZTogXCJIbXNQdXNoRXZlbnRcIixcclxuICAgIHBsdWdpbjogXCJAaG1zY29yZS9jb3Jkb3ZhLXBsdWdpbi1obXMtcHVzaFwiLFxyXG4gICAgcGx1Z2luUmVmOiBcIkhtc1B1c2hFdmVudFwiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhtc1B1c2hFdmVudCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBvblJlbW90ZU1lc3NhZ2VSZWNlaXZlZCAoY2FsbGJhY2s6KGRhdGE6YW55KT0+dm9pZCk6dm9pZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIFxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgb25Ub2tlblJlY2VpdmVkIChjYWxsYmFjazooZGF0YTphbnkpPT52b2lkKTp2b2lkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBvblRva2VuRXJyb3IgKGNhbGxiYWNrOihkYXRhOmFueSk9PnZvaWQpOnZvaWQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIG9uUHVzaE1lc3NhZ2VTZW50IChjYWxsYmFjazooZGF0YTphbnkpPT52b2lkKTp2b2lkIHtcclxuICAgIHJldHVybjtcclxuICAgfVxyXG4gIFxyXG4gICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICBvblB1c2hNZXNzYWdlU2VudEVycm9yIChjYWxsYmFjazooZGF0YTphbnkpPT52b2lkKTp2b2lkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBvblB1c2hNZXNzYWdlU2VudERlbGl2ZXJlZCAoY2FsbGJhY2s6KGRhdGE6YW55KT0+dm9pZCk6dm9pZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIFxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgb25Mb2NhbE5vdGlmaWNhdGlvbkFjdGlvbiAoY2FsbGJhY2s6KGRhdGE6YW55KT0+dm9pZCk6dm9pZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIFxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgb25Ob3RpZmljYXRpb25PcGVuZWRBcHAgKGNhbGxiYWNrOihkYXRhOmFueSk9PnZvaWQpOnZvaWQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIG9uTXVsdGlTZW5kZXJUb2tlblJlY2VpdmVkRXZlbnQoY2FsbGJhY2s6KGRhdGE6YW55KT0+dm9pZCk6dm9pZHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBvbk11bHRpU2VuZGVyVG9rZW5FcnJvckV2ZW50KGNhbGxiYWNrOihkYXRhOmFueSk9PnZvaWQpOnZvaWR7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIFxyXG4gIFJFTU9URV9EQVRBX01FU1NBR0VfUkVDRUlWRUQgPSBcIlJFTU9URV9EQVRBX01FU1NBR0VfUkVDRUlWRURcIlxyXG4gIFRPS0VOX1JFQ0VJVkVEX0VWRU5UID0gXCJUT0tFTl9SRUNFSVZFRF9FVkVOVFwiXHJcbiAgT05fVE9LRU5fRVJST1JfRVZFTlQgPSBcIk9OX1RPS0VOX0VSUk9SX0VWRU5UXCJcclxuICBOT1RJRklDQVRJT05fT1BFTkVEX0VWRU5UID0gXCJOT1RJRklDQVRJT05fT1BFTkVEX0VWRU5UXCJcclxuICBMT0NBTF9OT1RJRklDQVRJT05fQUNUSU9OX0VWRU5UID0gXCJMT0NBTF9OT1RJRklDQVRJT05fQUNUSU9OX0VWRU5UXCJcclxuICBPTl9QVVNIX01FU1NBR0VfU0VOVCA9IFwiT05fUFVTSF9NRVNTQUdFX1NFTlRcIlxyXG4gIE9OX1BVU0hfTUVTU0FHRV9TRU5UX0VSUk9SID0gXCJPTl9QVVNIX01FU1NBR0VfU0VOVF9FUlJPUlwiXHJcbiAgT05fUFVTSF9NRVNTQUdFX1NFTlRfREVMSVZFUkVEID0gXCJPTl9QVVNIX01FU1NBR0VfU0VOVF9ERUxJVkVSRURcIlxyXG4gIE9OX01VTFRJX1NFTkRFUl9UT0tFTl9FUlJPUl9FVkVOVCA9IFwiT05fTVVMVElfU0VOREVSX1RPS0VOX0VSUk9SX0VWRU5UXCJcclxuICBPTl9NVUxUSV9TRU5ERVJfVE9LRU5fUkVDRUlWRURfRVZFTlQgPSBcIk9OX01VTFRJX1NFTkRFUl9UT0tFTl9SRUNFSVZFRF9FVkVOVFwiXHJcbiAgfVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogXCJIbXNQdXNoUHJvZmlsZVwiLFxyXG4gIHBsdWdpbjogXCJAaG1zY29yZS9jb3Jkb3ZhLXBsdWdpbi1obXMtcHVzaFwiLFxyXG4gIHBsdWdpblJlZjogXCJIbXNQdXNoUHJvZmlsZVwiLFxyXG4gIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxyXG4gIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSG1zUHVzaFByb2ZpbGUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgXHJcbiAgSFVBV0VJX1BST0ZJTEU9MTtcclxuICBDVVNUT01fUFJPRklMRT0yO1xyXG4gIFVOREVGSU5FRF9QUk9GSUxFPS0xO1xyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGlzU3VwcG9ydFByb2ZpbGUoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYWRkUHJvZmlsZSh0eXBlOm51bWJlciwgcHJvZmlsZUlkOnN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYWRkUHJvZmlsZVdpdGhTdWJqZWN0SWQoc3ViamVjdElkOnN0cmluZywgdHlwZTpudW1iZXIsIHByb2ZpbGVJZDpzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGRlbGV0ZVByb2ZpbGUocHJvZmlsZUlkOnN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZGVsZXRlUHJvZmlsZVdpdGhTdWJqZWN0SWQoc3ViamVjdElkOnN0cmluZywgcHJvZmlsZUlkOnN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gICAgcGx1Z2luTmFtZTogXCJGY21QdXNoUHJveHlcIixcclxuICAgIHBsdWdpbjogXCJAaG1zY29yZS9jb3Jkb3ZhLXBsdWdpbi1obXMtcHVzaFwiLFxyXG4gICAgcGx1Z2luUmVmOiBcIkZjbVB1c2hQcm94eVwiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXHJcbiAgfSlcclxuICBASW5qZWN0YWJsZSgpXHJcbiAgZXhwb3J0IGNsYXNzIEZjbVB1c2hQcm94eSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAgIGluaXQoKTogUHJvbWlzZTxib29sZWFuPntcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGVudW0gSG1zUHVzaFJlc3VsdENvZGUge1xyXG4gICAgLy8gU3VjY2Vzc1xyXG4gICAgU1VDQ0VTUyA9IFwiMFwiLFxyXG5cclxuICAgIC8vIEVycm9yXHJcbiAgICBFUlJPUiA9IFwiLTFcIixcclxuXHJcbiAgICAvLyBCdW5kbGUgaXMgbnVsbCwgZXhjZXB0aW9uXHJcbiAgICBOVUxMX0JVTkRMRSA9IFwiMzMzXCIsXHJcblxyXG4gICAgLy8gWW91IGRvIG5vdCBoYXZlIGEgdG9rZW4uIEFwcGx5IGZvciBhIHRva2VuLlxyXG4gICAgRVJST1JfTk9fVE9LRU4gPSBcIjkwNzEyMjAzMFwiLFxyXG5cclxuICAgIC8vIFRoZSBjdXJyZW50IG5ldHdvcmsgaXMgdW5hdmFpbGFibGUuIENoZWNrIHRoZSBuZXR3b3JrIGNvbm5lY3Rpb24uXHJcbiAgICBFUlJPUl9OT19ORVRXT1JLID0gXCI5MDcxMjIwMzFcIixcclxuXHJcbiAgICAvLyBUaGUgdG9rZW4gaGFzIGV4cGlyZWQuIERlbGV0ZSB0aGUgdG9rZW4gYW5kIGFwcGx5IGZvciBhIG5ldyBvbmUuXHJcbiAgICBFUlJPUl9UT0tFTl9JTlZBTElEID0gXCI5MDcxMjIwMzJcIixcclxuXHJcbiAgICAvLyBJZiB0aGUgUHVzaCBzZXJ2aWNlIGlzIHVuYXZhaWxhYmxlLCBjb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICAgIEVSUk9SX1NFUlZJQ0VfTk9UX0FWQUlMQUJMRSA9IFwiOTA3MTIyMDQ2XCIsXHJcblxyXG4gICAgLy8gSWYgdGhlIFB1c2ggc2VydmVyIHJldHVybnMgYW4gZXJyb3IsIGNvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gICAgRVJST1JfUFVTSF9TRVJWRVIgPSBcIjkwNzEyMjA0N1wiLFxyXG5cclxuICAgIC8vIFVua25vd24gZXJyb3IuIENvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gICAgRVJST1JfVU5LTk9XTiA9IFwiOTA3MTIyMDQ1XCIsXHJcblxyXG4gICAgLy8gVGhlIG51bWJlciBvZiBzdWJzY3JpYmVkIHRvcGljcyBleGNlZWRzIDIwMDAuXHJcbiAgICBFUlJPUl9UT1BJQ19FWENFRUQgPSBcIjkwNzEyMjAzNFwiLFxyXG5cclxuICAgIC8vIEZhaWxlZCB0byBzZW5kIHRoZSBzdWJzY3JpcHRpb24gdG9waWMuIENvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gICAgRVJST1JfVE9QSUNfU0VORCA9IFwiOTA3MTIyMDM1XCIsXHJcblxyXG4gICAgLy8gUHVzaCByaWdodHMgYXJlIG5vdCBlbmFibGVkLiBFbmFibGUgdGhlIHNlcnZpY2UgYW5kIHNldCBwdXNoIHNlcnZpY2UgcGFyYW1ldGVycyBhdCBBcHBHYWxsZXJ5IENvbm5lY3QuXHJcbiAgICBFUlJPUl9OT19SSUdIVCA9IFwiOTA3MTIyMDM2XCIsXHJcblxyXG4gICAgLy8gRmFpbGVkIHRvIGFwcGx5IGZvciB0aGUgdG9rZW4uIENvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gICAgRVJST1JfR0VUX1RPS0VOX0VSUiA9IFwiOTA3MTIyMDM3XCIsXHJcblxyXG4gICAgLy8gTm8gc3RvcmFnZSBsb2NhdGlvbiBpcyBzZWxlY3RlZCBmb3IgdGhlIGFwcGxpY2F0aW9uIG9yIHRoZSBzdG9yYWdlIGxvY2F0aW9uIGlzIGludmFsaWQuXHJcbiAgICBFUlJPUl9TVE9SQUdFX0xPQ0FUSU9OX0VNUFRZID0gXCI5MDcxMjIwMzhcIixcclxuXHJcbiAgICAvLyBGYWlsZWQgdG8gYXBwbHkgZm9yIGEgdG9rZW4uIENyb3NzLXJlZ2lvbiB0b2tlbiBhcHBsaWNhdGlvbiBpcyBub3QgYWxsb3dlZC5cclxuICAgIEVSUk9SX05PVF9BTExPV19DUk9TU19BUFBMWSA9IFwiOTA3MTIyMDUzXCIsXHJcblxyXG4gICAgLy8gVGhlIG1lc3NhZ2UgYm9keSBzaXplIGV4Y2VlZHMgdGhlIG1heGltdW0uXHJcbiAgICBFUlJPUl9TSVpFID0gXCI5MDcxMjIwNDFcIixcclxuXHJcbiAgICAvLyBUaGUgbWVzc2FnZSBjb250YWlucyBpbnZhbGlkIHBhcmFtZXRlcnMuXHJcbiAgICBFUlJPUl9JTlZBTElEX1BBUkFNRVRFUlMgPSBcIjkwNzEyMjA0MlwiLFxyXG5cclxuICAgIC8vIFRoZSBudW1iZXIgb2Ygc2VudCBtZXNzYWdlcyByZWFjaGVzIHRoZSB1cHBlciBsaW1pdC4gVGhlIG1lc3NhZ2VzIHdpbGwgYmUgZGlzY2FyZGVkLlxyXG4gICAgRVJST1JfVE9PX01BTllfTUVTU0FHRVMgPSBcIjkwNzEyMjA0M1wiLFxyXG5cclxuICAgIC8vIFRoZSBtZXNzYWdlIGxpZmV0aW1lIGV4cGlyZXMgYmVmb3JlIHRoZSBtZXNzYWdlIGlzIHN1Y2Nlc3NmdWxseSBzZW50IHRvIHRoZSBBUFAgc2VydmVyLlxyXG4gICAgRVJST1JfVFRMX0VYQ0VFREVEID0gXCI5MDcxMjIwNDRcIixcclxuXHJcbiAgICAvLyAgSHVhd2VpIE1vYmlsZSBTZXJ2aWNlcyAoQVBLKSBjYW4ndCBjb25uZWN0ICBIdWF3ZWkgUHVzaCAgS2l0LlxyXG4gICAgRVJST1JfSE1TX0NMSUVOVF9BUEkgPSBcIjkwNzEyMjA0OFwiLFxyXG5cclxuICAgIC8vIFRoZSBjdXJyZW50IEVNVUkgdmVyc2lvbiBpcyB0b28gZWFybHkgdG8gdXNlIHRoZSBjYXBhYmlsaXR5LlxyXG4gICAgRVJST1JfT1BFUkFUSU9OX05PVF9TVVBQT1JURUQgPSBcIjkwNzEyMjA0OVwiLFxyXG5cclxuICAgIC8vIFRoZSBvcGVyYXRpb24gY2Fubm90IGJlIHBlcmZvcm1lZCBpbiB0aGUgbWFpbiB0aHJlYWQuXHJcbiAgICBFUlJPUl9NQUlOX1RIUkVBRCA9IFwiOTA3MTIyMDUwXCIsXHJcblxyXG4gICAgLy8gVGhlIGRldmljZSBjZXJ0aWZpY2F0ZSBhdXRoZW50aWNhdGlvbiBmYWlscy5cclxuICAgIEVSUk9SX0hNU19ERVZJQ0VfQVVUSF9GQUlMRURfU0VMRl9NQVBQSU5HID0gXCI5MDcxMjIwNTFcIixcclxuXHJcbiAgICAvLyBGYWlsZWQgdG8gYmluZCB0aGUgc2VydmljZS5cclxuICAgIEVSUk9SX0JJTkRfU0VSVklDRV9TRUxGX01BUFBJTkcgPSBcIjkwNzEyMjA1MlwiLFxyXG5cclxuICAgIC8vIFRoZSBTREsgaXMgYmVpbmcgYXV0b21hdGljYWxseSBpbml0aWFsaXplZC4gVHJ5IGFnYWluIGxhdGVyLlxyXG4gICAgRVJST1JfQVVUT19JTklUSUFMSVpJTkcgPSBcIjkwNzEyMjA1NFwiLFxyXG5cclxuICAgIC8qVGhlIGlucHV0IHBhcmFtZXRlciBpcyBpbmNvcnJlY3QuIENoZWNrIHdoZXRoZXIgdGhlIHJlbGF0ZWQgY29uZmlndXJhdGlvbiBpbmZvcm1hdGlvbiBpcyBjb3JyZWN0LlxyXG4gICAgICogRXhhbXBsZTogYXBwX2lkIGluIHRoZSBhZ2Nvbm5lY3QgLSBzZXJ2aWNlcy5qc29uIGZpbGU7XHJcbiAgICAgKiBDaGVjayB3aGV0aGVyIHRoZSBidWlsZC5ncmFkbGUgZmlsZSBpcyBjb25maWd1cmVkIHdpdGggdGhlIGNlcnRpZmljYXRlIHNpZ25hdHVyZS5cclxuICAgICAqL1xyXG4gICAgRVJST1JfQVJHVU1FTlRTX0lOVkFMSUQgPSBcIjkwNzEzNTAwMFwiLFxyXG5cclxuICAgIC8vIEludGVybmFsIFB1c2ggZXJyb3IuIENvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0IGVuZ2luZWVycy5cclxuICAgIEVSUk9SX0lOVEVSTkFMX0VSUk9SID0gXCI5MDcxMzUwMDFcIixcclxuXHJcbiAgICAvLyBUaGUgc2VydmljZSBkb2VzIG5vdCBleGlzdC4gVGhlIGludm9rZWQgaW50ZXJmYWNlIGRvZXMgbm90IGV4aXN0LlxyXG4gICAgRVJST1JfTkFNSU5HX0lOVkFMSUQgPSBcIjkwNzEzNTAwMlwiLFxyXG5cclxuICAgIC8vIFRoZSBBcGlDbGllbnQgb2JqZWN0IGlzIGludmFsaWQuXHJcbiAgICBFUlJPUl9DTElFTlRfQVBJX0lOVkFMSUQgPSBcIjkwNzEzNTAwM1wiLFxyXG5cclxuICAgIC8vIEludm9raW5nIEFJREwgdGltZXMgb3V0LiBDb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICAgIEVSUk9SX0VYRUNVVEVfVElNRU9VVCA9IFwiOTA3MTM1MDA0XCIsXHJcblxyXG4gICAgLy8gVGhlIGN1cnJlbnQgYXJlYSBkb2VzIG5vdCBzdXBwb3J0IHRoaXMgc2VydmljZS5cclxuICAgIEVSUk9SX05PVF9JTl9TRVJWSUNFID0gXCI5MDcxMzUwMDVcIixcclxuXHJcbiAgICAvLyBJZiB0aGUgQUlETCBjb25uZWN0aW9uIHNlc3Npb24gaXMgaW52YWxpZCwgY29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXHJcbiAgICBFUlJPUl9TRVNTSU9OX0lOVkFMSUQgPSBcIjkwNzEzNTAwNlwiLFxyXG5cclxuICAgIC8vIEFuIGVycm9yIG9jY3VycmVkIHdoZW4gaW52b2tpbmcgYW4gdW5zcGVjaWZpZWQgQVBJLlxyXG4gICAgRVJST1JfQVBJX05PVF9TUEVDSUZJRUQgPSBcIjEwMDJcIixcclxuXHJcbiAgICAvKiBGYWlsZWQgdG8gaW52b2tlIHRoZSBnYXRld2F5IHRvIHF1ZXJ5IHRoZSBhcHBsaWNhdGlvbiBzY29wZS5cclxuICAgICAqIENoZWNrIHdoZXRoZXIgdGhlIGN1cnJlbnQgYXBwIGhhcyBiZWVuIGNyZWF0ZWQgYW5kIGVuYWJsZWQgaW4gQXBwR2FsbGVyeSBDb25uZWN0LlxyXG4gICAgICogSWYgeWVzLCBjb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICAgICAqL1xyXG4gICAgRVJST1JfR0VUX1NDT1BFX0VSUk9SID0gXCI5MDcxMzU3MDBcIixcclxuICAgIC8qIFNjb3BlIGlzIG5vdCBjb25maWd1cmVkIG9uIHRoZSBBcHBHYWxsZXJ5IENvbm5lY3QuXHJcbiAgICAgKiBDaGVjayB3aGV0aGVyIHRoZSBjdXJyZW50IGFwcCBoYXMgYmVlbiBjcmVhdGVkIGFuZCBlbmFibGVkIGluIEFwcEdhbGxlcnkgQ29ubmVjdC5cclxuICAgICAqIElmIHllcywgY29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXHJcbiAgICAgKi9cclxuICAgIEVSUk9SX1NDT1BFX0xJU1RfRU1QVFkgPSBcIjkwNzEzNTcwMVwiLFxyXG5cclxuICAgIC8qIFRoZSBjZXJ0aWZpY2F0ZSBmaW5nZXJwcmludCBpcyBub3QgY29uZmlndXJlZCBvbiB0aGUgQXBwR2FsbGVyeSBDb25uZWN0LlxyXG4gICAgICogMS4gQ2hlY2sgd2hldGhlciB5b3VyIHBob25lIGNhbiBhY2Nlc3MgdGhlIEludGVybmV0LlxyXG4gICAgICogMi4gQ2hlY2sgd2hldGhlciB0aGUgY29ycmVjdCBjZXJ0aWZpY2F0ZSBmaW5nZXJwcmludCBpcyBjb25maWd1cmVkIGluIEFwcEdhbGxlcnkgQ29ubmVjdC4gRm9yIGRldGFpbHMsIHNlZSBBcHBHYWxsZXJ5IENvbm5lY3QgY29uZmlndXJhdGlvbiBpbiBEZXZlbG9wbWVudCBQcmVwYXJhdGlvbnMuXHJcbiAgICAgKiAzLiBJZiB0aGUgY2hlY2sgcmVzdWx0IGlzIGNvcnJlY3QsIGNvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gICAgICovXHJcbiAgICBFUlJPUl9DRVJUX0ZJTkdFUlBSSU5UX0VNUFRZID0gXCI5MDcxMzU3MDJcIixcclxuXHJcbiAgICAvLyBQZXJtaXNzaW9uIGlzIG5vdCBjb25maWd1cmVkIG9uIHRoZSBBcHBHYWxsZXJ5IENvbm5lY3QuXHJcbiAgICBFUlJPUl9QRVJNSVNTSU9OX0xJU1RfRU1QVFkgPSBcIjkwNzEzNTcwM1wiLFxyXG5cclxuICAgIC8vIFRoZSBhdXRoZW50aWNhdGlvbiBpbmZvcm1hdGlvbiBvZiB0aGUgYXBwbGljYXRpb24gZG9lcyBub3QgZXhpc3QuXHJcbiAgICBFUlJPUl9BVVRIX0lORk9fTk9UX0VYSVNUID0gXCI2MDAyXCIsXHJcblxyXG4gICAgLy8gQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIGNlcnRpZmljYXRlIGZpbmdlcnByaW50IHZlcmlmaWNhdGlvbi4gQ2hlY2sgd2hldGhlciB0aGUgY29ycmVjdCBjZXJ0aWZpY2F0ZSBmaW5nZXJwcmludCBpcyBjb25maWd1cmVkIGluIEFwcEdhbGxlcnkgQ29ubmVjdC4gRm9yIGRldGFpbHMsIHNlZSBBcHBHYWxsZXJ5IENvbm5lY3QgY29uZmlndXJhdGlvbiBpbiBEZXZlbG9wbWVudCBQcmVwYXJhdGlvbnMuXHJcbiAgICBFUlJPUl9DRVJUX0ZJTkdFUlBSSU5UX0VSUk9SID0gXCI2MDAzXCIsXHJcblxyXG4gICAgLy8gSW50ZXJmYWNlIGF1dGhlbnRpY2F0aW9uOiBUaGUgcGVybWlzc2lvbiBkb2VzIG5vdCBleGlzdCBhbmQgaXMgbm90IGFwcGxpZWQgZm9yIGluIEFwcEdhbGxlcnkgQ29ubmVjdC5cclxuICAgIEVSUk9SX1BFUk1JU1NJT05fTk9UX0VYSVNUID0gXCI2MDA0XCIsXHJcblxyXG4gICAgLy8gSW50ZXJmYWNlIGF1dGhlbnRpY2F0aW9uOiB1bmF1dGhvcml6ZWQuXHJcbiAgICBFUlJPUl9QRVJNSVNTSU9OX05PVF9BVVRIT1JJWkVEID0gXCI2MDA1XCIsXHJcblxyXG4gICAgLy8gSW50ZXJmYWNlIGF1dGhlbnRpY2F0aW9uOiBUaGUgYXV0aG9yaXphdGlvbiBleHBpcmVzLlxyXG4gICAgRVJST1JfUEVSTUlTU0lPTl9FWFBJUkVEID0gXCI2MDA2XCIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEF0dHIge1xyXG4gICAgaWQgPSBcImlkXCIsXHJcbiAgICBtZXNzYWdlID0gXCJtZXNzYWdlXCIsXHJcbiAgICBmaXJlRGF0ZSA9IFwiZmlyZURhdGVcIixcclxuICAgIHRpdGxlID0gXCJ0aXRsZVwiLFxyXG4gICAgdGlja2VyID0gXCJ0aWNrZXJcIixcclxuICAgIHNob3dXaGVuID0gXCJzaG93V2hlblwiLFxyXG4gICAgYXV0b0NhbmNlbCA9IFwiYXV0b0NhbmNlbFwiLFxyXG4gICAgbGFyZ2VJY29uID0gXCJsYXJnZUljb25cIixcclxuICAgIGxhcmdlSWNvblVybCA9IFwibGFyZ2VJY29uVXJsXCIsXHJcbiAgICBzbWFsbEljb24gPSBcInNtYWxsSWNvblwiLFxyXG4gICAgYmlnVGV4dCA9IFwiYmlnVGV4dFwiLFxyXG4gICAgc3ViVGV4dCA9IFwic3ViVGV4dFwiLFxyXG4gICAgYmlnUGljdHVyZVVybCA9IFwiYmlnUGljdHVyZVVybFwiLFxyXG4gICAgc2hvcnRjdXRJZCA9IFwic2hvcnRjdXRJZFwiLFxyXG4gICAgbnVtYmVyID0gXCJudW1iZXJcIixcclxuICAgIGNoYW5uZWxJZCA9IFwiY2hhbm5lbElkXCIsXHJcbiAgICBjaGFubmVsTmFtZSA9IFwiY2hhbm5lbE5hbWVcIixcclxuICAgIGNoYW5uZWxEZXNjcmlwdGlvbiA9IFwiY2hhbm5lbERlc2NyaXB0aW9uXCIsXHJcbiAgICBjb2xvciA9IFwiY29sb3JcIixcclxuICAgIGdyb3VwID0gXCJncm91cFwiLFxyXG4gICAgZ3JvdXBTdW1tYXJ5ID0gXCJncm91cFN1bW1hcnlcIixcclxuICAgIHBsYXlTb3VuZCA9IFwicGxheVNvdW5kXCIsXHJcbiAgICBzb3VuZE5hbWUgPSBcInNvdW5kTmFtZVwiLFxyXG4gICAgdmlicmF0ZSA9IFwidmlicmF0ZVwiLFxyXG4gICAgdmlicmF0ZUR1cmF0aW9uID0gXCJ2aWJyYXRlRHVyYXRpb25cIixcclxuICAgIGFjdGlvbnMgPSBcImFjdGlvbnNcIixcclxuICAgIGludm9rZUFwcCA9IFwiaW52b2tlQXBwXCIsXHJcbiAgICB0YWcgPSBcInRhZ1wiLFxyXG4gICAgcmVwZWF0VHlwZSA9IFwicmVwZWF0VHlwZVwiLFxyXG4gICAgcmVwZWF0VGltZSA9IFwicmVwZWF0VGltZVwiLFxyXG4gICAgb25nb2luZyA9IFwib25nb2luZ1wiLFxyXG4gICAgYWxsb3dXaGlsZUlkbGUgPSBcImFsbG93V2hpbGVJZGxlXCIsXHJcbiAgICBkb250Tm90aWZ5SW5Gb3JlZ3JvdW5kID0gXCJkb250Tm90aWZ5SW5Gb3JlZ3JvdW5kXCIsXHJcbiAgICBwcmlvcml0eSA9IFwicHJpb3JpdHlcIixcclxuICAgIGltcG9ydGFuY2UgPSBcImltcG9ydGFuY2VcIixcclxuICAgIHZpc2liaWxpdHkgPSBcInZpc2liaWxpdHlcIixcclxuICAgIGRhdGEgPSBcImRhdGFcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBJbXBvcnRhbmNlIHtcclxuICAgIE1BWCA9IFwibWF4XCIsXHJcbiAgICBISUdIID0gXCJoaWdoXCIsXHJcbiAgICBERUZBVUxUID0gXCJkZWZhdWx0XCIsXHJcbiAgICBMT1cgPSBcImxvd1wiLFxyXG4gICAgTUlOID0gXCJtaW5cIixcclxuICAgIE5PTkUgPSBcIm5vbmVcIixcclxuICAgIFVOU1BFQ0lGSUVEID0gXCJ1bnNwZWNpZmllZFwiLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBQcmlvcml0eSB7XHJcbiAgICBNQVggPSBcIm1heFwiLFxyXG4gICAgSElHSCA9IFwiaGlnaFwiLFxyXG4gICAgREVGQVVMVCA9IFwiZGVmYXVsdFwiLFxyXG4gICAgTE9XID0gXCJsb3dcIixcclxuICAgIE1JTiA9IFwibWluXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFJlcGVhdFR5cGUge1xyXG4gICAgSE9VUiA9IFwiaG91clwiLFxyXG4gICAgTUlOVVRFID0gXCJtaW51dGVcIixcclxuICAgIERBWSA9IFwiZGF5XCIsXHJcbiAgICBXRUVLID0gXCJ3ZWVrXCIsXHJcbiAgICBDVVNUT01fVElNRSA9IFwiY3VzdG9tX3RpbWVcIixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVmlzaWJpbGl0eSB7XHJcbiAgICBQVUJMSUMgPSBcInB1YmxpY1wiLFxyXG4gICAgU0VDUkVUID0gXCJzZWNyZXRcIixcclxuICAgIFBSSVZBVEUgPSBcInByaXZhdGVcIixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUmVtb3RlTWVzc2FnZUJ1aWxkZXIge1xyXG4gICAgVE8gPSBcInRvXCIsXHJcbiAgICBNRVNTQUdFX0lEID0gXCJtZXNzYWdlSWRcIixcclxuICAgIE1FU1NBR0VfVFlQRSA9IFwibWVzc2FnZVR5cGVcIixcclxuICAgIFRUTCA9IFwidHRsXCIsXHJcbiAgICBDT0xMQVBTRV9LRVkgPSBcImNvbGxhcHNlS2V5XCIsXHJcbiAgICBSRUNFSVBUX01PREUgPSBcInJlY2VpcHRNb2RlXCIsXHJcbiAgICBTRU5EX01PREUgPSBcInNlbmRNb2RlXCIsXHJcbiAgICBEQVRBID0gXCJkYXRhXCIsXHJcbn1cclxuXHJcbmNsYXNzIENvcmRvdmFSZW1vdGVNZXNzYWdlIHtcclxuICAgIHN0YXRpYyBJTlNUQU5DRV9JRF9TQ09QRSA9IFwiSENNXCI7XHJcblxyXG4gICAgc3RhdGljIFBSSU9SSVRZX1VOS05PV04gPSAwO1xyXG4gICAgc3RhdGljIFBSSU9SSVRZX0hJR0ggPSAxO1xyXG4gICAgc3RhdGljIFBSSU9SSVRZX05PUk1BTCA9IDI7XHJcblxyXG4gICAgc3RhdGljIENPTExBUFNFS0VZID0gXCJjb2xsYXBzZUtleVwiO1xyXG4gICAgc3RhdGljIERBVEEgPSBcImRhdGFcIjtcclxuICAgIHN0YXRpYyBEQVRBT0ZNQVAgPSBcImRhdGFPZk1hcFwiO1xyXG4gICAgc3RhdGljIE1FU1NBR0VJRCA9IFwibWVzc2FnZUlkXCI7XHJcbiAgICBzdGF0aWMgTUVTU0FHRVRZUEUgPSBcIm1lc3NhZ2VUeXBlXCI7XHJcbiAgICBzdGF0aWMgT1JJR0lOQUxVUkdFTkNZID0gXCJvcmlnaW5hbFVyZ2VuY3lcIjtcclxuICAgIHN0YXRpYyBVUkdFTkNZID0gXCJ1cmdlbmN5XCI7XHJcbiAgICBzdGF0aWMgVFRMID0gXCJ0dGxcIjtcclxuICAgIHN0YXRpYyBTRU5UVElNRSA9IFwic2VudFRpbWVcIjtcclxuICAgIHN0YXRpYyBUTyA9IFwidG9cIjtcclxuICAgIHN0YXRpYyBGUk9NID0gXCJmcm9tXCI7XHJcbiAgICBzdGF0aWMgVE9LRU4gPSBcInRva2VuXCI7XHJcbiAgICBzdGF0aWMgQU5BTFlUSUNJTkZPID0gXCJhbmFseXRpY0luZm9cIjtcclxuICAgIHN0YXRpYyBBTkFMWVRJQ0lORk9NQVAgPSBcImFuYWx5dGljSW5mb01hcFwiO1xyXG5cclxuICAgIHN0YXRpYyBOT1RJRklDQVRJT04gPSB7XHJcbiAgICAgICAgVElUTEU6IFwidGl0bGVcIixcclxuICAgICAgICBUSVRMRUxPQ0FMSVpBVElPTktFWTogXCJ0aXRsZUxvY2FsaXphdGlvbktleVwiLFxyXG4gICAgICAgIFRJVExFTE9DQUxJWkFUSU9OQVJHUzogXCJ0aXRsZUxvY2FsaXphdGlvbkFyZ3NcIixcclxuICAgICAgICBCT0RZTE9DQUxJWkFUSU9OS0VZOiBcImJvZHlMb2NhbGl6YXRpb25LZXlcIixcclxuICAgICAgICBCT0RZTE9DQUxJWkFUSU9OQVJHUzogXCJib2R5TG9jYWxpemF0aW9uQXJnc1wiLFxyXG4gICAgICAgIEJPRFk6IFwiYm9keVwiLFxyXG4gICAgICAgIElDT046IFwiaWNvblwiLFxyXG4gICAgICAgIFNPVU5EOiBcIlNvdW5kXCIsXHJcbiAgICAgICAgVEFHOiBcIlRhZ1wiLFxyXG4gICAgICAgIENPTE9SOiBcIkNvbG9yXCIsXHJcbiAgICAgICAgQ0xJQ0tBQ1RJT046IFwiQ2xpY2tBY3Rpb25cIixcclxuICAgICAgICBDSEFOTkVMSUQ6IFwiQ2hhbm5lbElkXCIsXHJcbiAgICAgICAgSU1BR0VVUkw6IFwiSW1hZ2VVcmxcIixcclxuICAgICAgICBMSU5LOiBcIkxpbmtcIixcclxuICAgICAgICBOT1RJRllJRDogXCJOb3RpZnlJZFwiLFxyXG4gICAgICAgIFdIRU46IFwiV2hlblwiLFxyXG4gICAgICAgIExJR0hUU0VUVElOR1M6IFwiTGlnaHRTZXR0aW5nc1wiLFxyXG4gICAgICAgIEJBREdFTlVNQkVSOiBcIkJhZGdlTnVtYmVyXCIsXHJcbiAgICAgICAgSU1QT1JUQU5DRTogXCJJbXBvcnRhbmNlXCIsXHJcbiAgICAgICAgVElDS0VSOiBcIlRpY2tlclwiLFxyXG4gICAgICAgIFZJQlJBVEVDT05GSUc6IFwidmlicmF0ZUNvbmZpZ1wiLFxyXG4gICAgICAgIFZJU0lCSUxJVFk6IFwidmlzaWJpbGl0eVwiLFxyXG4gICAgICAgIElOVEVOVFVSSTogXCJpbnRlbnRVcmlcIixcclxuICAgICAgICBJU0FVVE9DQU5DRUw6IFwiaXNBdXRvQ2FuY2VsXCIsXHJcbiAgICAgICAgSVNMT0NBTE9OTFk6IFwiaXNMb2NhbE9ubHlcIixcclxuICAgICAgICBJU0RFRkFVTFRMSUdIVDogXCJpc0RlZmF1bHRMaWdodFwiLFxyXG4gICAgICAgIElTREVGQVVMVFNPVU5EOiBcImlzRGVmYXVsdFNvdW5kXCIsXHJcbiAgICAgICAgSVNERUZBVUxUVklCUkFURTogXCJpc0RlZmF1bHRWaWJyYXRlXCIsXHJcbiAgICB9O1xyXG4gICAgcmVtb3RlTXNnOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdGVNc2cgPSBvcHRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBwYXJzZSBhbGwgZWxlbWVudCx1bm9yZGVyZWRcclxuICAgICAqL1xyXG4gICAgcGFyc2VNc2dBbGxBdHRyaWJ1dGUoKSB7XHJcbiAgICAgICAgbGV0IHB1c2hSZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMucmVtb3RlTXNnKSB7XHJcbiAgICAgICAgICAgIHB1c2hSZXN1bHQgPSBwdXNoUmVzdWx0ICsga2V5ICsgXCIgOiBcIiArIHRoaXMucmVtb3RlTXNnW2tleV0gKyBcIlxcblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHVzaFJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogZ2V0Q29sbGFwc2VLZXkoKSBPYnRhaW5zIHRoZSBjbGFzc2lmaWNhdGlvbiBpZGVudGlmaWVyIChjb2xsYXBzZSBrZXkpIG9mIGEgbWVzc2FnZS5cclxuICAgICAqL1xyXG4gICAgZ2V0Q29sbGFwc2VLZXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLkNPTExBUFNFS0VZXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogZ2V0RGF0YSgpIE9idGFpbnMgdmFsaWQgY29udGVudCBkYXRhIG9mIGEgbWVzc2FnZS5cclxuICAgICAqL1xyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuREFUQV07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIGdldERhdGFPZk1hcCgpIGEgbWVzc2FnZSBtYXAuXHJcbiAgICAgKi9cclxuICAgIGdldERhdGFPZk1hcCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuREFUQU9GTUFQXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogZ2V0TWVzc2FnZUlkKCkgT2J0YWlucyB0aGUgSUQgb2YgYSBtZXNzYWdlLlxyXG4gICAgICovXHJcbiAgICBnZXRNZXNzYWdlSWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk1FU1NBR0VJRF07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIGdldE1lc3NhZ2VUeXBlKCkgT2J0YWlucyB0aGUgdHlwZSBvZiBhIG1lc3NhZ2UuXHJcbiAgICAgKi9cclxuICAgIGdldE1lc3NhZ2VUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5NRVNTQUdFVFlQRV07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIGdldE9yaWdpbmFsVXJnZW5jeSgpIE9idGFpbnMgdGhlIG9yaWdpbmFsIHByaW9yaXR5IG9mIGEgbWVzc2FnZS5cclxuICAgICAqL1xyXG4gICAgZ2V0T3JpZ2luYWxVcmdlbmN5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5PUklHSU5BTFVSR0VOQ1ldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBnZXRVcmdlbmN5KCkgT2J0YWlucyBwcmlvcml0eSBvZiBhIG1lc3NhZ2UuXHJcbiAgICAgKi9cclxuICAgIGdldFVyZ2VuY3koKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLlVSR0VOQ1ldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBnZXRUdGwoKSBPYnRhaW5zIHZhbGlkIGdldFR0bCBvZiBhIG1lc3NhZ2UuXHJcbiAgICAgKi9cclxuICAgIGdldFR0bCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuVFRMXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogZ2V0U2VudFRpbWUoKSBPYnRhaW5zIHRoZSB0aW1lIHdoZW4gYSBtZXNzYWdlIGlzIHNlbnQgZnJvbSB0aGUgc2VydmVyLlxyXG4gICAgICovXHJcbiAgICBnZXRTZW50VGltZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuU0VOVFRJTUVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBnZXRUbygpIE9idGFpbnMgdGhlIHJlY2lwaWVudCBvZiBhIG1lc3NhZ2UuXHJcbiAgICAgKi9cclxuICAgIGdldFRvKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5UT107XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIGdldEZyb20oKSBPYnRhaW5zIHRoZSBzZW5kZXIgb2YgYSBtZXNzYWdlLlxyXG4gICAgICovXHJcbiAgICBnZXRGcm9tKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5GUk9NXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogZ2V0VG9rZW4oKSBPYnRhaW5zIHZhbGlkIHRva2VuXHJcbiAgICAgKi9cclxuICAgIGdldFRva2VuKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5UT0tFTl07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QW5hbHl0aWNJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5BTkFMWVRJQ0lORk9dO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFuYWx5dGljSW5mb01hcCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuQU5BTFlUSUNJTkZPTUFQXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldFRpdGxlKCkgT2J0YWlucyB0aGUgdGl0bGUgb2YgYSBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIGdldE5vdGlmaWNhdGlvblRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVElUTEVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0VGl0bGVMb2NhbGl6YXRpb25LZXkoKSBPYnRhaW5zIHRoZSBrZXkgb2YgdGhlIGRpc3BsYXllZCB0aXRsZSBvZiBhIG5vdGlmaWNhdGlvbiBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIGdldFRpdGxlTG9jYWxpemF0aW9uS2V5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tcclxuICAgICAgICAgICAgQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLlRJVExFTE9DQUxJWkFUSU9OS0VZXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldFRpdGxlTG9jYWxpemF0aW9uQXJncygpIE9idGFpbnMgdmFyaWFibGUgcGFyYW1ldGVycyBvZiB0aGUgZGlzcGxheWVkIHRpdGxlIG9mIGEgbWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBnZXRUaXRsZUxvY2FsaXphdGlvbkFyZ3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW1xyXG4gICAgICAgICAgICBDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVElUTEVMT0NBTElaQVRJT05BUkdTXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldEJvZHlMb2NhbGl6YXRpb25LZXkoKSBPYnRhaW5zIHRoZSBrZXkgb2YgdGhlIGRpc3BsYXllZCBjb250ZW50IG9mIGEgbWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBnZXRCb2R5TG9jYWxpemF0aW9uS2V5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tcclxuICAgICAgICAgICAgQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkJPRFlMT0NBTElaQVRJT05LRVlcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0Qm9keUxvY2FsaXphdGlvbkFyZ3MoKSBPYnRhaW5zIHZhcmlhYmxlIHBhcmFtZXRlcnMgb2YgdGhlIGRpc3BsYXllZCBjb250ZW50IG9mIGEgbWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBnZXRCb2R5TG9jYWxpemF0aW9uQXJncygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbXHJcbiAgICAgICAgICAgIENvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5CT0RZTE9DQUxJWkFUSU9OQVJHU1xyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRCb2R5KCkgT2J0YWlucyB0aGUgYm9keSBvZiBhIG1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgZ2V0Qm9keSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkJPRFldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0SWNvbigpIE9idGFpbnMgdGhlIGljb24gb2YgYSBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIGdldEljb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JQ09OXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldFNvdW5kKCkgT2J0YWlucyB0aGUgc291bmQgZnJvbSBhIG1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgZ2V0U291bmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5TT1VORF07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRUYWcoKSBPYnRhaW5zIHRoZSB0YWcgZnJvbSBhIG1lc3NhZ2UgZm9yIG1lc3NhZ2Ugb3ZlcndyaXRpbmdcclxuICAgICAqL1xyXG4gICAgZ2V0VGFnKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVEFHXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldENvbG9yKCkgT2J0YWlucyB0aGUgY29sb3JzIG9mIGljb25zIGluIGEgbWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBnZXRDb2xvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkNPTE9SXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldENsaWNrQWN0aW9uKCkgT2J0YWlucyBhY3Rpb25zIHRyaWdnZXJlZCBieSBtZXNzYWdlIHRhcHBpbmdcclxuICAgICAqL1xyXG4gICAgZ2V0Q2xpY2tBY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5DTElDS0FDVElPTl07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRDaGFubmVsSWQoKSBPYnRhaW5zIElEcyBvZiBjaGFubmVscyB0aGF0IHN1cHBvcnQgdGhlIGRpc3BsYXkgb2YgbWVzc2FnZXNcclxuICAgICAqL1xyXG4gICAgZ2V0Q2hhbm5lbElkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uQ0hBTk5FTElEXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldEltYWdlVXJsKCkgT2J0YWlucyB0aGUgaW1hZ2UgVVJMIGZyb20gYSBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIGdldEltYWdlVXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSU1BR0VVUkxdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0TGluaygpIE9idGFpbnMgdGhlIFVSTCB0byBiZSBhY2Nlc3NlZCBmcm9tIGEgbWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBnZXRMaW5rKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uTElOS107XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXROb3RpZnlJZCgpIE9idGFpbnMgdGhlIHVuaXF1ZSBJRCBvZiBhIG1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgZ2V0Tm90aWZ5SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5OT1RJRllJRF07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRXaGVuKClcclxuICAgICAqL1xyXG4gICAgZ2V0V2hlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLldIRU5dO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0TGlnaHRTZXR0aW5ncygpXHJcbiAgICAgKi9cclxuICAgIGdldExpZ2h0U2V0dGluZ3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5MSUdIVFNFVFRJTkdTXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldEJhZGdlTnVtYmVyKClcclxuICAgICAqL1xyXG4gICAgZ2V0QmFkZ2VOdW1iZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5CQURHRU5VTUJFUl07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRJbXBvcnRhbmNlKClcclxuICAgICAqL1xyXG4gICAgZ2V0SW1wb3J0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklNUE9SVEFOQ0VdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0VGlja2VyKClcclxuICAgICAqL1xyXG4gICAgZ2V0VGlja2VyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVElDS0VSXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldFZpYnJhdGVDb25maWcoKVxyXG4gICAgICovXHJcbiAgICBnZXRWaWJyYXRlQ29uZmlnKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVklCUkFURUNPTkZJR107XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRWaXNpYmlsaXR5KClcclxuICAgICAqL1xyXG4gICAgZ2V0VmlzaWJpbGl0eSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLlZJU0lCSUxJVFldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0SW50ZW50VXJpKClcclxuICAgICAqL1xyXG4gICAgZ2V0SW50ZW50VXJpKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSU5URU5UVVJJXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmlzQXV0b0NhbmNlbCgpXHJcbiAgICAgKi9cclxuICAgIGlzQXV0b0NhbmNlbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklTQVVUT0NBTkNFTF07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRJbnRlbnRVcmkoKVxyXG4gICAgICovXHJcbiAgICBpc0xvY2FsT25seSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklTTE9DQUxPTkxZXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmlzRGVmYXVsdExpZ2h0KClcclxuICAgICAqL1xyXG4gICAgaXNEZWZhdWx0TGlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JU0RFRkFVTFRMSUdIVF07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjppc0RlZmF1bHRTb3VuZCgpXHJcbiAgICAgKi9cclxuICAgIGlzRGVmYXVsdFNvdW5kKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSVNERUZBVUxUU09VTkRdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246aXNEZWZhdWx0VmlicmF0ZSgpXHJcbiAgICAgKi9cclxuICAgIGlzRGVmYXVsdFZpYnJhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW1xyXG4gICAgICAgICAgICBDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSVNERUZBVUxUVklCUkFURVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn1cclxuXHJcbnR5cGUgTG9jYWxOb3RpZmljYXRpb25PYmplY3QgPSB7XHJcbiAgICBba2V5IGluIEF0dHJdPzogYW55O1xyXG59O1xyXG5cclxudHlwZSBSZW1vdGVNZXNzYWdlT2JqZWN0ID0ge1xyXG4gICAgW2tleSBpbiBSZW1vdGVNZXNzYWdlQnVpbGRlcl0/OiBhbnk7XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgSWRUYWcge1xyXG5cdGlkOm51bWJlcixcclxuXHR0YWc6c3RyaW5nXHJcbn0iXX0=