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

var __extends =
    (this && this.__extends) ||
    (function () {
        var extendStatics = function (d, b) {
            extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (d, b) {
                        d.__proto__ = b;
                    }) ||
                function (d, b) {
                    for (var p in b)
                        if (Object.prototype.hasOwnProperty.call(b, p))
                            d[p] = b[p];
                };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype =
                b === null
                    ? Object.create(b)
                    : ((__.prototype = b.prototype), new __());
        };
    })();
import { IonicNativePlugin, cordova } from "@ionic-native/core";
var HmsPushOriginal = /** @class */ (function (_super) {
    __extends(HmsPushOriginal, _super);
    function HmsPushOriginal() {
        var _this = (_super !== null && _super.apply(this, arguments)) || this;
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
    HmsPushOriginal.prototype.init = function () {
        return cordova(this, "init", { otherPromise: true }, arguments);
    };
    HmsPushOriginal.prototype.enableLogger = function () {
        return cordova(this, "enableLogger", { otherPromise: true }, arguments);
    };
    HmsPushOriginal.prototype.disableLogger = function () {
        return cordova(
            this,
            "disableLogger",
            { otherPromise: true },
            arguments
        );
    };
    /**
     * This method is used to disable the display of notification messages. If you want to control the display of notification messages in an app, you can call this method. This method applies to notification messages but not data messages. It is the app that determines whether to enable or disable data messaging.
     * @returns Promise<string>
     */
    HmsPushOriginal.prototype.turnOnPush = function () {
        return cordova(this, "turnOnPush", { otherPromise: true }, arguments);
    };
    /**
     * This method is used to enable the display of notification messages. If you want to control the display of notification messages in an app, you can call this method. This method applies to notification messages but not data messages. It is the app that determines whether to enable or disable data messaging.
     * @returns Promise<string>
     */
    HmsPushOriginal.prototype.turnOffPush = function () {
        return cordova(this, "turnOffPush", { otherPromise: true }, arguments);
    };
    /**
     * This method is used to obtain an AAID in synchronous mode. Before applying for a token, an app calls this method to obtain its unique AAID. The HUAWEI Push server generates a token for the app based on the AAID. If the AAID of the app changes, a new token will be generated next time when the app applies for a token. If an app needs to report statistics events, it must carry the AAID as its unique ID.
     * @returns Promise<string>
     */
    HmsPushOriginal.prototype.getId = function () {
        return cordova(this, "getId", { otherPromise: true }, arguments);
    };
    /**
     * This method is used to obtain an AAID in asynchronous mode.
     * @returns Promise<string>
     */
    HmsPushOriginal.prototype.getAAID = function () {
        return cordova(this, "getAAID", { otherPromise: true }, arguments);
    };
    /**
     * This method is used to obtain a token required for accessing HUAWEI Push Kit. If there is no local AAID, this method will automatically generate an AAID when it is called because the HUAWEI Push Kit server needs to generate a token based on the AAID.
     * @returns Promise<string>
     * @params scope ? : String
     */
    HmsPushOriginal.prototype.getToken = function (scope) {
        return cordova(this, "getToken", { otherPromise: true }, arguments);
    };
    /**
     * Obtains a token that a target app developer applies for a sender to integrate Push Kit in the multi-sender scenario.
     * @returns Promise<string>
     * @params subjectId ? : String
     */
    HmsPushOriginal.prototype.getTokenWithSubjectId = function (subjectId) {
        return cordova(
            this,
            "getTokenWithSubjectId",
            { otherPromise: true },
            arguments
        );
    };
    /**
     * This method is used to obtain the generation timestamp of an AAID.
     * @returns Promise<string>
     */
    HmsPushOriginal.prototype.getCreationTime = function () {
        return cordova(
            this,
            "getCreationTime",
            { otherPromise: true },
            arguments
        );
    };
    /**
     * This method is used to delete a local AAID and its generation timestamp.
     * @returns Promise<string>
     */
    HmsPushOriginal.prototype.deleteAAID = function () {
        return cordova(this, "deleteAAID", { otherPromise: true }, arguments);
    };
    /**
     * This method is used to delete a token. After a token is deleted, the corresponding AAID will not be deleted. This method is a synchronous method.
     * @returns Promise<string>
     * @params scope ? : String
     */
    HmsPushOriginal.prototype.deleteToken = function (scope) {
        return cordova(this, "deleteToken", { otherPromise: true }, arguments);
    };
    /**
     * Deletes a token that a target app developer applies for a sender to integrate Push Kit in the multi-sender scenario.
     * @returns Promise<string>
     * @params subjectId ? : String
     */
    HmsPushOriginal.prototype.deleteTokenWithSubjectId = function (subjectId) {
        return cordova(
            this,
            "deleteTokenWithSubjectId",
            { otherPromise: true },
            arguments
        );
    };
    /**
     * This method is used to subscribe to topics in asynchronous mode. The HUAWEI Push Kit topic messaging function allows you to send messages to multiple devices whose users have subscribed to a specific topic. You can write messages about the topic as required, and HUAWEI Push Kit determines the release path and sends messages to the correct devices in a reliable manner.
     * @param {string} topic Topic to be subscribed to.
     * @returns Promise<string>
     */
    HmsPushOriginal.prototype.subscribe = function (topic) {
        return cordova(this, "subscribe", { otherPromise: true }, arguments);
    };
    /**
     * This method is used to unsubscribe from topics that are subscribed to through the subscribe method.
     * @param {string} topic Topic to be unsubscribed to.
     * @returns Promise<string>
     */
    HmsPushOriginal.prototype.unsubscribe = function (topic) {
        return cordova(this, "unsubscribe", { otherPromise: true }, arguments);
    };
    /**
     * Sets whether to enable automatic initialization. If the enable parameter is set to true, the SDK automatically generates an AAID and applies for a token.
     * @returns Promise<boolean>
     * @param {boolean} enabled Indicates whether to enable automatic initialization.
     */
    HmsPushOriginal.prototype.setAutoInitEnabled = function (enabled) {
        return cordova(
            this,
            "setAutoInitEnabled",
            { otherPromise: true },
            arguments
        );
    };
    HmsPushOriginal.prototype.getOdid = function () {
        return cordova(this, "getOdid", { otherPromise: true }, arguments);
    };
    /**
     * This method is used to check whether automatic initialization is enabled.
     * @returns Promise<string>
     */
    HmsPushOriginal.prototype.isAutoInitEnabled = function () {
        return cordova(
            this,
            "isAutoInitEnabled",
            { otherPromise: true },
            arguments
        );
    };
    HmsPushOriginal.prototype.getInitialNotification = function () {
        return cordova(
            this,
            "getInitialNotification",
            { otherPromise: true },
            arguments
        );
    };
    HmsPushOriginal.prototype.sendRemoteMessage = function (remoteMessage) {
        return cordova(
            this,
            "sendRemoteMessage",
            { otherPromise: true },
            arguments
        );
    };
    HmsPushOriginal.prototype.setBackgroundFile = function (filePath) {
        return cordova(
            this,
            "setBackgroundFile",
            { otherPromise: true },
            arguments
        );
    };
    HmsPushOriginal.prototype.setItem = function (key, value) {
        return cordova(this, "setItem", { otherPromise: true }, arguments);
    };
    HmsPushOriginal.prototype.getItem = function (key) {
        return cordova(this, "getItem", { otherPromise: true }, arguments);
    };
    HmsPushOriginal.prototype.removeItem = function (key) {
        return cordova(this, "removeItem", { otherPromise: true }, arguments);
    };
    HmsPushOriginal.prototype.removeBackgroundFile = function () {
        return cordova(
            this,
            "removeBackgroundFile",
            { otherPromise: true },
            arguments
        );
    };
    HmsPushOriginal.pluginName = "HmsPush";
    HmsPushOriginal.plugin = "@hmscore/cordova-plugin-hms-push";
    HmsPushOriginal.pluginRef = "HmsPush";
    HmsPushOriginal.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HmsPushOriginal.platforms = ["Android"];
    return HmsPushOriginal;
})(IonicNativePlugin);
var HmsPush = new HmsPushOriginal();
export { HmsPush };
var HmsLocalNotificationOriginal = /** @class */ (function (_super) {
    __extends(HmsLocalNotificationOriginal, _super);
    function HmsLocalNotificationOriginal() {
        var _this = (_super !== null && _super.apply(this, arguments)) || this;
        _this.Attr = Attr;
        _this.Importance = Importance;
        _this.Priority = Priority;
        _this.RepeatType = RepeatType;
        _this.Visibility = Visibility;
        return _this;
    }
    HmsLocalNotificationOriginal.prototype.localNotification = function (
        localNotification
    ) {
        return cordova(
            this,
            "localNotification",
            { otherPromise: true },
            arguments
        );
    };
    HmsLocalNotificationOriginal.prototype.localNotificationSchedule =
        function (localNotification) {
            return cordova(
                this,
                "localNotificationSchedule",
                { otherPromise: true },
                arguments
            );
        };
    HmsLocalNotificationOriginal.prototype.cancelAllNotifications =
        function () {
            return cordova(
                this,
                "cancelAllNotifications",
                { otherPromise: true },
                arguments
            );
        };
    HmsLocalNotificationOriginal.prototype.cancelNotifications = function () {
        return cordova(
            this,
            "cancelNotifications",
            { otherPromise: true },
            arguments
        );
    };
    HmsLocalNotificationOriginal.prototype.cancelScheduledNotifications =
        function () {
            return cordova(
                this,
                "cancelScheduledNotifications",
                { otherPromise: true },
                arguments
            );
        };
    HmsLocalNotificationOriginal.prototype.cancelNotificationsWithId =
        function (id) {
            return cordova(
                this,
                "cancelNotificationsWithId",
                { otherPromise: true },
                arguments
            );
        };
    HmsLocalNotificationOriginal.prototype.cancelNotificationsWithIdTag =
        function (idTag) {
            return cordova(
                this,
                "cancelNotificationsWithIdTag",
                { otherPromise: true },
                arguments
            );
        };
    HmsLocalNotificationOriginal.prototype.cancelNotificationsWithTag =
        function (tag) {
            return cordova(
                this,
                "cancelNotificationsWithTag",
                { otherPromise: true },
                arguments
            );
        };
    HmsLocalNotificationOriginal.prototype.getNotifications = function () {
        return cordova(
            this,
            "getNotifications",
            { otherPromise: true },
            arguments
        );
    };
    HmsLocalNotificationOriginal.prototype.getScheduledNotifications =
        function () {
            return cordova(
                this,
                "getScheduledNotifications",
                { otherPromise: true },
                arguments
            );
        };
    HmsLocalNotificationOriginal.prototype.getChannels = function () {
        return cordova(this, "getChannels", { otherPromise: true }, arguments);
    };
    HmsLocalNotificationOriginal.prototype.channelExists = function (
        channelId
    ) {
        return cordova(
            this,
            "channelExists",
            { otherPromise: true },
            arguments
        );
    };
    HmsLocalNotificationOriginal.prototype.channelBlocked = function (
        channelId
    ) {
        return cordova(
            this,
            "channelBlocked",
            { otherPromise: true },
            arguments
        );
    };
    HmsLocalNotificationOriginal.prototype.deleteChannel = function (
        channelId
    ) {
        return cordova(
            this,
            "deleteChannel",
            { otherPromise: true },
            arguments
        );
    };
    HmsLocalNotificationOriginal.pluginName = "HmsLocalNotification";
    HmsLocalNotificationOriginal.plugin = "@hmscore/cordova-plugin-hms-push";
    HmsLocalNotificationOriginal.pluginRef = "HmsLocalNotification";
    HmsLocalNotificationOriginal.repo =
        "https://github.com/HMS-Core/hms-cordova-plugin";
    HmsLocalNotificationOriginal.platforms = ["Android"];
    return HmsLocalNotificationOriginal;
})(IonicNativePlugin);
var HmsLocalNotification = new HmsLocalNotificationOriginal();
export { HmsLocalNotification };
var HmsPushEventOriginal = /** @class */ (function (_super) {
    __extends(HmsPushEventOriginal, _super);
    function HmsPushEventOriginal() {
        var _this = (_super !== null && _super.apply(this, arguments)) || this;
        _this.REMOTE_DATA_MESSAGE_RECEIVED = "REMOTE_DATA_MESSAGE_RECEIVED";
        _this.TOKEN_RECEIVED_EVENT = "TOKEN_RECEIVED_EVENT";
        _this.ON_TOKEN_ERROR_EVENT = "ON_TOKEN_ERROR_EVENT";
        _this.NOTIFICATION_OPENED_EVENT = "NOTIFICATION_OPENED_EVENT";
        _this.LOCAL_NOTIFICATION_ACTION_EVENT =
            "LOCAL_NOTIFICATION_ACTION_EVENT";
        _this.ON_PUSH_MESSAGE_SENT = "ON_PUSH_MESSAGE_SENT";
        _this.ON_PUSH_MESSAGE_SENT_ERROR = "ON_PUSH_MESSAGE_SENT_ERROR";
        _this.ON_PUSH_MESSAGE_SENT_DELIVERED = "ON_PUSH_MESSAGE_SENT_DELIVERED";
        _this.ON_MULTI_SENDER_TOKEN_ERROR_EVENT =
            "ON_MULTI_SENDER_TOKEN_ERROR_EVENT";
        _this.ON_MULTI_SENDER_TOKEN_RECEIVED_EVENT =
            "ON_MULTI_SENDER_TOKEN_RECEIVED_EVENT";
        return _this;
    }
    HmsPushEventOriginal.prototype.onRemoteMessageReceived = function (
        callback
    ) {
        return cordova(
            this,
            "onRemoteMessageReceived",
            { otherPromise: true },
            arguments
        );
    };
    HmsPushEventOriginal.prototype.onTokenReceived = function (callback) {
        return cordova(
            this,
            "onTokenReceived",
            { otherPromise: true },
            arguments
        );
    };
    HmsPushEventOriginal.prototype.onTokenError = function (callback) {
        return cordova(this, "onTokenError", { otherPromise: true }, arguments);
    };
    HmsPushEventOriginal.prototype.onPushMessageSent = function (callback) {
        return cordova(
            this,
            "onPushMessageSent",
            { otherPromise: true },
            arguments
        );
    };
    HmsPushEventOriginal.prototype.onPushMessageSentError = function (
        callback
    ) {
        return cordova(
            this,
            "onPushMessageSentError",
            { otherPromise: true },
            arguments
        );
    };
    HmsPushEventOriginal.prototype.onPushMessageSentDelivered = function (
        callback
    ) {
        return cordova(
            this,
            "onPushMessageSentDelivered",
            { otherPromise: true },
            arguments
        );
    };
    HmsPushEventOriginal.prototype.onLocalNotificationAction = function (
        callback
    ) {
        return cordova(
            this,
            "onLocalNotificationAction",
            { otherPromise: true },
            arguments
        );
    };
    HmsPushEventOriginal.prototype.onNotificationOpenedApp = function (
        callback
    ) {
        return cordova(
            this,
            "onNotificationOpenedApp",
            { otherPromise: true },
            arguments
        );
    };
    HmsPushEventOriginal.prototype.onMultiSenderTokenReceivedEvent = function (
        callback
    ) {
        return cordova(
            this,
            "onMultiSenderTokenReceivedEvent",
            { otherPromise: true },
            arguments
        );
    };
    HmsPushEventOriginal.prototype.onMultiSenderTokenErrorEvent = function (
        callback
    ) {
        return cordova(
            this,
            "onMultiSenderTokenErrorEvent",
            { otherPromise: true },
            arguments
        );
    };
    HmsPushEventOriginal.pluginName = "HmsPushEvent";
    HmsPushEventOriginal.plugin = "@hmscore/cordova-plugin-hms-push";
    HmsPushEventOriginal.pluginRef = "HmsPushEvent";
    HmsPushEventOriginal.repo =
        "https://github.com/HMS-Core/hms-cordova-plugin";
    HmsPushEventOriginal.platforms = ["Android"];
    return HmsPushEventOriginal;
})(IonicNativePlugin);
var HmsPushEvent = new HmsPushEventOriginal();
export { HmsPushEvent };
var HmsPushProfileOriginal = /** @class */ (function (_super) {
    __extends(HmsPushProfileOriginal, _super);
    function HmsPushProfileOriginal() {
        var _this = (_super !== null && _super.apply(this, arguments)) || this;
        _this.HUAWEI_PROFILE = 1;
        _this.CUSTOM_PROFILE = 2;
        _this.UNDEFINED_PROFILE = -1;
        return _this;
    }
    /**
     *
     */
    HmsPushProfileOriginal.prototype.isSupportProfile = function () {
        return cordova(
            this,
            "isSupportProfile",
            { otherPromise: true },
            arguments
        );
    };
    HmsPushProfileOriginal.prototype.addProfile = function (type, profileId) {
        return cordova(this, "addProfile", { otherPromise: true }, arguments);
    };
    HmsPushProfileOriginal.prototype.addProfileWithSubjectId = function (
        subjectId,
        type,
        profileId
    ) {
        return cordova(
            this,
            "addProfileWithSubjectId",
            { otherPromise: true },
            arguments
        );
    };
    HmsPushProfileOriginal.prototype.deleteProfile = function (profileId) {
        return cordova(
            this,
            "deleteProfile",
            { otherPromise: true },
            arguments
        );
    };
    HmsPushProfileOriginal.prototype.deleteProfileWithSubjectId = function (
        subjectId,
        profileId
    ) {
        return cordova(
            this,
            "deleteProfileWithSubjectId",
            { otherPromise: true },
            arguments
        );
    };
    HmsPushProfileOriginal.pluginName = "HmsPushProfile";
    HmsPushProfileOriginal.plugin = "@hmscore/cordova-plugin-hms-push";
    HmsPushProfileOriginal.pluginRef = "HmsPushProfile";
    HmsPushProfileOriginal.repo =
        "https://github.com/HMS-Core/hms-cordova-plugin";
    HmsPushProfileOriginal.platforms = ["Android"];
    return HmsPushProfileOriginal;
})(IonicNativePlugin);
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
    HmsPushResultCode["ERROR_HMS_DEVICE_AUTH_FAILED_SELF_MAPPING"] =
        "907122051";
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
        if (options === void 0) {
            options = {};
        }
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
        return this.remoteMsg[
            CordovaRemoteMessage.NOTIFICATION.TITLELOCALIZATIONKEY
        ];
    };
    /*
     * Notification:getTitleLocalizationArgs() Obtains variable parameters of the displayed title of a message
     */
    CordovaRemoteMessage.prototype.getTitleLocalizationArgs = function () {
        return this.remoteMsg[
            CordovaRemoteMessage.NOTIFICATION.TITLELOCALIZATIONARGS
        ];
    };
    /*
     * Notification:getBodyLocalizationKey() Obtains the key of the displayed content of a message
     */
    CordovaRemoteMessage.prototype.getBodyLocalizationKey = function () {
        return this.remoteMsg[
            CordovaRemoteMessage.NOTIFICATION.BODYLOCALIZATIONKEY
        ];
    };
    /*
     * Notification:getBodyLocalizationArgs() Obtains variable parameters of the displayed content of a message
     */
    CordovaRemoteMessage.prototype.getBodyLocalizationArgs = function () {
        return this.remoteMsg[
            CordovaRemoteMessage.NOTIFICATION.BODYLOCALIZATIONARGS
        ];
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
        return this.remoteMsg[
            CordovaRemoteMessage.NOTIFICATION.ISDEFAULTVIBRATE
        ];
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
})();
export { CordovaRemoteMessage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBaUJBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBVTNDLDJCQUFpQjs7O1FBQzFDLHVCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQ3RDLDBCQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQzVDLDBCQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQzVDLHlCQUFtQixHQUFHLEtBQUssQ0FBQTs7O0lBRTNCOzs7T0FHRztJQUNILHNCQUFJO0lBS0osOEJBQVk7SUFLWiwrQkFBYTtJQUtiOzs7T0FHRztJQUNILDRCQUFVO0lBS1Y7OztPQUdHO0lBQ0gsNkJBQVc7SUFLWDs7O09BR0c7SUFDSCx1QkFBSztJQUtMOzs7T0FHRztJQUNILHlCQUFPO0lBS1A7Ozs7T0FJRztJQUNILDBCQUFRLGFBQUMsS0FBYztJQUt2Qjs7OztPQUlHO0lBQ0gsdUNBQXFCLGFBQUMsU0FBaUI7SUFLdkM7OztPQUdHO0lBQ0gsaUNBQWU7SUFLZjs7O09BR0c7SUFDSCw0QkFBVTtJQUtWOzs7O09BSUc7SUFDSCw2QkFBVyxhQUFDLEtBQWM7SUFLMUI7Ozs7T0FJRztJQUNILDBDQUF3QixhQUFDLFNBQWlCO0lBSzFDOzs7O09BSUc7SUFDSCwyQkFBUyxhQUFDLEtBQWE7SUFLdkI7Ozs7T0FJRztJQUNILDZCQUFXLGFBQUMsS0FBYTtJQUt6Qjs7OztPQUlHO0lBQ0gsb0NBQWtCLGFBQUMsT0FBZ0I7SUFLbkMseUJBQU87SUFLUDs7O09BR0c7SUFDSCxtQ0FBaUI7SUFLakIsd0NBQXNCO0lBS3RCLG1DQUFpQixhQUFDLGFBQWtDO0lBS3BELG1DQUFpQixhQUFDLFFBQWU7SUFLakMseUJBQU8sYUFBQyxHQUFVLEVBQUMsS0FBWTtJQUsvQix5QkFBTyxhQUFD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QUUsYUFBYTtRQUMxQixVQUFVLEVBQUUsWUFBWTtRQUN4QixNQUFNLEVBQUUsUUFBUTtRQUNoQixhQUFhLEVBQUUsZUFBZTtRQUM5QixVQUFVLEVBQUUsWUFBWTtRQUN4QixTQUFTLEVBQUUsV0FBVztRQUN0QixZQUFZLEVBQUUsY0FBYztRQUM1QixXQUFXLEVBQUUsYUFBYTtRQUMxQixjQUFjLEVBQUUsZ0JBQWdCO1FBQ2hDLGNBQWMsRUFBRSxnQkFBZ0I7UUFDaEMsZ0JBQWdCLEVBQUUsa0JBQWtCO0tBQ3ZDLENBQUM7K0JBN3JCTjs7U0Ewb0JNLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQ29weXJpZ2h0IDIwMjAtMjAyMS4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcbiAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tIFwiQGlvbmljLW5hdGl2ZS9jb3JlXCI7XG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6IFwiSG1zUHVzaFwiLFxuICAgIHBsdWdpbjogXCJAaG1zY29yZS9jb3Jkb3ZhLXBsdWdpbi1obXMtcHVzaFwiLFxuICAgIHBsdWdpblJlZjogXCJIbXNQdXNoXCIsXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIbXNQdXNoIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIEhtc1B1c2hSZXN1bHRDb2RlID0gSG1zUHVzaFJlc3VsdENvZGU7XG4gICAgQ29yZG92YVJlbW90ZU1lc3NhZ2UgPSBDb3Jkb3ZhUmVtb3RlTWVzc2FnZTtcbiAgICBSZW1vdGVNZXNzYWdlQnVpbGRlciA9IFJlbW90ZU1lc3NhZ2VCdWlsZGVyO1xuICAgIERFRkFVTFRfVE9LRU5fU0NPUEUgPSBcIkhDTVwiXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCAgaW5pdGlhbGl6ZWQgSG1zUHVzaC5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XG4gICAgICovXG4gICAgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBkaXNhYmxlTG9nZ2VyKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGRpc2FibGUgdGhlIGRpc3BsYXkgb2Ygbm90aWZpY2F0aW9uIG1lc3NhZ2VzLiBJZiB5b3Ugd2FudCB0byBjb250cm9sIHRoZSBkaXNwbGF5IG9mIG5vdGlmaWNhdGlvbiBtZXNzYWdlcyBpbiBhbiBhcHAsIHlvdSBjYW4gY2FsbCB0aGlzIG1ldGhvZC4gVGhpcyBtZXRob2QgYXBwbGllcyB0byBub3RpZmljYXRpb24gbWVzc2FnZXMgYnV0IG5vdCBkYXRhIG1lc3NhZ2VzLiBJdCBpcyB0aGUgYXBwIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGVuYWJsZSBvciBkaXNhYmxlIGRhdGEgbWVzc2FnaW5nLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxuICAgICAqL1xuICAgIHR1cm5PblB1c2goKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gZW5hYmxlIHRoZSBkaXNwbGF5IG9mIG5vdGlmaWNhdGlvbiBtZXNzYWdlcy4gSWYgeW91IHdhbnQgdG8gY29udHJvbCB0aGUgZGlzcGxheSBvZiBub3RpZmljYXRpb24gbWVzc2FnZXMgaW4gYW4gYXBwLCB5b3UgY2FuIGNhbGwgdGhpcyBtZXRob2QuIFRoaXMgbWV0aG9kIGFwcGxpZXMgdG8gbm90aWZpY2F0aW9uIG1lc3NhZ2VzIGJ1dCBub3QgZGF0YSBtZXNzYWdlcy4gSXQgaXMgdGhlIGFwcCB0aGF0IGRldGVybWluZXMgd2hldGhlciB0byBlbmFibGUgb3IgZGlzYWJsZSBkYXRhIG1lc3NhZ2luZy5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cbiAgICAgKi9cbiAgICB0dXJuT2ZmUHVzaCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBvYnRhaW4gYW4gQUFJRCBpbiBzeW5jaHJvbm91cyBtb2RlLiBCZWZvcmUgYXBwbHlpbmcgZm9yIGEgdG9rZW4sIGFuIGFwcCBjYWxscyB0aGlzIG1ldGhvZCB0byBvYnRhaW4gaXRzIHVuaXF1ZSBBQUlELiBUaGUgSFVBV0VJIFB1c2ggc2VydmVyIGdlbmVyYXRlcyBhIHRva2VuIGZvciB0aGUgYXBwIGJhc2VkIG9uIHRoZSBBQUlELiBJZiB0aGUgQUFJRCBvZiB0aGUgYXBwIGNoYW5nZXMsIGEgbmV3IHRva2VuIHdpbGwgYmUgZ2VuZXJhdGVkIG5leHQgdGltZSB3aGVuIHRoZSBhcHAgYXBwbGllcyBmb3IgYSB0b2tlbi4gSWYgYW4gYXBwIG5lZWRzIHRvIHJlcG9ydCBzdGF0aXN0aWNzIGV2ZW50cywgaXQgbXVzdCBjYXJyeSB0aGUgQUFJRCBhcyBpdHMgdW5pcXVlIElELlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxuICAgICAqL1xuICAgIGdldElkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gb2J0YWluIGFuIEFBSUQgaW4gYXN5bmNocm9ub3VzIG1vZGUuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XG4gICAgICovXG4gICAgZ2V0QUFJRCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIG9idGFpbiBhIHRva2VuIHJlcXVpcmVkIGZvciBhY2Nlc3NpbmcgSFVBV0VJIFB1c2ggS2l0LiBJZiB0aGVyZSBpcyBubyBsb2NhbCBBQUlELCB0aGlzIG1ldGhvZCB3aWxsIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGUgYW4gQUFJRCB3aGVuIGl0IGlzIGNhbGxlZCBiZWNhdXNlIHRoZSBIVUFXRUkgUHVzaCBLaXQgc2VydmVyIG5lZWRzIHRvIGdlbmVyYXRlIGEgdG9rZW4gYmFzZWQgb24gdGhlIEFBSUQuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XG4gICAgICogQHBhcmFtcyBzY29wZSA/IDogU3RyaW5nXG4gICAgICovXG4gICAgZ2V0VG9rZW4oc2NvcGU/OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBPYnRhaW5zIGEgdG9rZW4gdGhhdCBhIHRhcmdldCBhcHAgZGV2ZWxvcGVyIGFwcGxpZXMgZm9yIGEgc2VuZGVyIHRvIGludGVncmF0ZSBQdXNoIEtpdCBpbiB0aGUgbXVsdGktc2VuZGVyIHNjZW5hcmlvLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxuICAgICAqIEBwYXJhbXMgc3ViamVjdElkID8gOiBTdHJpbmdcbiAgICAgKi9cbiAgICBnZXRUb2tlbldpdGhTdWJqZWN0SWQoc3ViamVjdElkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIG9idGFpbiB0aGUgZ2VuZXJhdGlvbiB0aW1lc3RhbXAgb2YgYW4gQUFJRC5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cbiAgICAgKi9cbiAgICBnZXRDcmVhdGlvblRpbWUoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBkZWxldGUgYSBsb2NhbCBBQUlEIGFuZCBpdHMgZ2VuZXJhdGlvbiB0aW1lc3RhbXAuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XG4gICAgICovXG4gICAgZGVsZXRlQUFJRCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBkZWxldGUgYSB0b2tlbi4gQWZ0ZXIgYSB0b2tlbiBpcyBkZWxldGVkLCB0aGUgY29ycmVzcG9uZGluZyBBQUlEIHdpbGwgbm90IGJlIGRlbGV0ZWQuIFRoaXMgbWV0aG9kIGlzIGEgc3luY2hyb25vdXMgbWV0aG9kLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxuICAgICAqIEBwYXJhbXMgc2NvcGUgPyA6IFN0cmluZ1xuICAgICAqL1xuICAgIGRlbGV0ZVRva2VuKHNjb3BlPzogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgYSB0b2tlbiB0aGF0IGEgdGFyZ2V0IGFwcCBkZXZlbG9wZXIgYXBwbGllcyBmb3IgYSBzZW5kZXIgdG8gaW50ZWdyYXRlIFB1c2ggS2l0IGluIHRoZSBtdWx0aS1zZW5kZXIgc2NlbmFyaW8uXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XG4gICAgICogQHBhcmFtcyBzdWJqZWN0SWQgPyA6IFN0cmluZ1xuICAgICAqL1xuICAgIGRlbGV0ZVRva2VuV2l0aFN1YmplY3RJZChzdWJqZWN0SWQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gc3Vic2NyaWJlIHRvIHRvcGljcyBpbiBhc3luY2hyb25vdXMgbW9kZS4gVGhlIEhVQVdFSSBQdXNoIEtpdCB0b3BpYyBtZXNzYWdpbmcgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBzZW5kIG1lc3NhZ2VzIHRvIG11bHRpcGxlIGRldmljZXMgd2hvc2UgdXNlcnMgaGF2ZSBzdWJzY3JpYmVkIHRvIGEgc3BlY2lmaWMgdG9waWMuIFlvdSBjYW4gd3JpdGUgbWVzc2FnZXMgYWJvdXQgdGhlIHRvcGljIGFzIHJlcXVpcmVkLCBhbmQgSFVBV0VJIFB1c2ggS2l0IGRldGVybWluZXMgdGhlIHJlbGVhc2UgcGF0aCBhbmQgc2VuZHMgbWVzc2FnZXMgdG8gdGhlIGNvcnJlY3QgZGV2aWNlcyBpbiBhIHJlbGlhYmxlIG1hbm5lci5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdG9waWMgVG9waWMgdG8gYmUgc3Vic2NyaWJlZCB0by5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cbiAgICAgKi9cbiAgICBzdWJzY3JpYmUodG9waWM6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIHVuc3Vic2NyaWJlIGZyb20gdG9waWNzIHRoYXQgYXJlIHN1YnNjcmliZWQgdG8gdGhyb3VnaCB0aGUgc3Vic2NyaWJlIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdG9waWMgVG9waWMgdG8gYmUgdW5zdWJzY3JpYmVkIHRvLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxuICAgICAqL1xuICAgIHVuc3Vic2NyaWJlKHRvcGljOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogU2V0cyB3aGV0aGVyIHRvIGVuYWJsZSBhdXRvbWF0aWMgaW5pdGlhbGl6YXRpb24uIElmIHRoZSBlbmFibGUgcGFyYW1ldGVyIGlzIHNldCB0byB0cnVlLCB0aGUgU0RLIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVzIGFuIEFBSUQgYW5kIGFwcGxpZXMgZm9yIGEgdG9rZW4uXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxib29sZWFuPlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZCBJbmRpY2F0ZXMgd2hldGhlciB0byBlbmFibGUgYXV0b21hdGljIGluaXRpYWxpemF0aW9uLlxuICAgICAqL1xuICAgIHNldEF1dG9Jbml0RW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldE9kaWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBjaGVjayB3aGV0aGVyIGF1dG9tYXRpYyBpbml0aWFsaXphdGlvbiBpcyBlbmFibGVkLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxuICAgICAqL1xuICAgIGlzQXV0b0luaXRFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRJbml0aWFsTm90aWZpY2F0aW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNlbmRSZW1vdGVNZXNzYWdlKHJlbW90ZU1lc3NhZ2U6IFJlbW90ZU1lc3NhZ2VPYmplY3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QmFja2dyb3VuZEZpbGUoZmlsZVBhdGg6c3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEl0ZW0oa2V5OnN0cmluZyx2YWx1ZTpzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0SXRlbShrZXk6c3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgcmVtb3ZlSXRlbShrZXk6c3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHJlbW92ZUJhY2tncm91bmRGaWxlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG59XG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6IFwiSG1zTG9jYWxOb3RpZmljYXRpb25cIixcbiAgICBwbHVnaW46IFwiQGhtc2NvcmUvY29yZG92YS1wbHVnaW4taG1zLXB1c2hcIixcbiAgICBwbHVnaW5SZWY6IFwiSG1zTG9jYWxOb3RpZmljYXRpb25cIixcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhtc0xvY2FsTm90aWZpY2F0aW9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIEF0dHIgPSBBdHRyO1xuICAgIEltcG9ydGFuY2UgPSBJbXBvcnRhbmNlO1xuICAgIFByaW9yaXR5ID0gUHJpb3JpdHk7XG4gICAgUmVwZWF0VHlwZSA9IFJlcGVhdFR5cGU7XG4gICAgVmlzaWJpbGl0eSA9IFZpc2liaWxpdHk7XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGxvY2FsTm90aWZpY2F0aW9uKGxvY2FsTm90aWZpY2F0aW9uOiBMb2NhbE5vdGlmaWNhdGlvbk9iamVjdCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGxvY2FsTm90aWZpY2F0aW9uU2NoZWR1bGUobG9jYWxOb3RpZmljYXRpb246IExvY2FsTm90aWZpY2F0aW9uT2JqZWN0KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgY2FuY2VsQWxsTm90aWZpY2F0aW9ucygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgY2FuY2VsTm90aWZpY2F0aW9ucygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgY2FuY2VsU2NoZWR1bGVkTm90aWZpY2F0aW9ucygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgY2FuY2VsTm90aWZpY2F0aW9uc1dpdGhJZChpZDogbnVtYmVyW10pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgY2FuY2VsTm90aWZpY2F0aW9uc1dpdGhJZFRhZyhpZFRhZzogSWRUYWdbXSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBjYW5jZWxOb3RpZmljYXRpb25zV2l0aFRhZyh0YWc6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXROb3RpZmljYXRpb25zKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldFNjaGVkdWxlZE5vdGlmaWNhdGlvbnMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0Q2hhbm5lbHMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgY2hhbm5lbEV4aXN0cyhjaGFubmVsSWQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBjaGFubmVsQmxvY2tlZChjaGFubmVsSWQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBkZWxldGVDaGFubmVsKGNoYW5uZWxJZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6IFwiSG1zUHVzaEV2ZW50XCIsXG4gICAgcGx1Z2luOiBcIkBobXNjb3JlL2NvcmRvdmEtcGx1Z2luLWhtcy1wdXNoXCIsXG4gICAgcGx1Z2luUmVmOiBcIkhtc1B1c2hFdmVudFwiLFxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSG1zUHVzaEV2ZW50IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIG9uUmVtb3RlTWVzc2FnZVJlY2VpdmVkIChjYWxsYmFjazooZGF0YTphbnkpPT52b2lkKTp2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIG9uVG9rZW5SZWNlaXZlZCAoY2FsbGJhY2s6KGRhdGE6YW55KT0+dm9pZCk6dm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBvblRva2VuRXJyb3IgKGNhbGxiYWNrOihkYXRhOmFueSk9PnZvaWQpOnZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgb25QdXNoTWVzc2FnZVNlbnQgKGNhbGxiYWNrOihkYXRhOmFueSk9PnZvaWQpOnZvaWQge1xuICAgIHJldHVybjtcbiAgIH1cbiAgXG4gICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgb25QdXNoTWVzc2FnZVNlbnRFcnJvciAoY2FsbGJhY2s6KGRhdGE6YW55KT0+dm9pZCk6dm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBvblB1c2hNZXNzYWdlU2VudERlbGl2ZXJlZCAoY2FsbGJhY2s6KGRhdGE6YW55KT0+dm9pZCk6dm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBvbkxvY2FsTm90aWZpY2F0aW9uQWN0aW9uIChjYWxsYmFjazooZGF0YTphbnkpPT52b2lkKTp2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIG9uTm90aWZpY2F0aW9uT3BlbmVkQXBwIChjYWxsYmFjazooZGF0YTphbnkpPT52b2lkKTp2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIG9uTXVsdGlTZW5kZXJUb2tlblJlY2VpdmVkRXZlbnQoY2FsbGJhY2s6KGRhdGE6YW55KT0+dm9pZCk6dm9pZHtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIG9uTXVsdGlTZW5kZXJUb2tlbkVycm9yRXZlbnQoY2FsbGJhY2s6KGRhdGE6YW55KT0+dm9pZCk6dm9pZHtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIFJFTU9URV9EQVRBX01FU1NBR0VfUkVDRUlWRUQgPSBcIlJFTU9URV9EQVRBX01FU1NBR0VfUkVDRUlWRURcIlxuICBUT0tFTl9SRUNFSVZFRF9FVkVOVCA9IFwiVE9LRU5fUkVDRUlWRURfRVZFTlRcIlxuICBPTl9UT0tFTl9FUlJPUl9FVkVOVCA9IFwiT05fVE9LRU5fRVJST1JfRVZFTlRcIlxuICBOT1RJRklDQVRJT05fT1BFTkVEX0VWRU5UID0gXCJOT1RJRklDQVRJT05fT1BFTkVEX0VWRU5UXCJcbiAgTE9DQUxfTk9USUZJQ0FUSU9OX0FDVElPTl9FVkVOVCA9IFwiTE9DQUxfTk9USUZJQ0FUSU9OX0FDVElPTl9FVkVOVFwiXG4gIE9OX1BVU0hfTUVTU0FHRV9TRU5UID0gXCJPTl9QVVNIX01FU1NBR0VfU0VOVFwiXG4gIE9OX1BVU0hfTUVTU0FHRV9TRU5UX0VSUk9SID0gXCJPTl9QVVNIX01FU1NBR0VfU0VOVF9FUlJPUlwiXG4gIE9OX1BVU0hfTUVTU0FHRV9TRU5UX0RFTElWRVJFRCA9IFwiT05fUFVTSF9NRVNTQUdFX1NFTlRfREVMSVZFUkVEXCJcbiAgT05fTVVMVElfU0VOREVSX1RPS0VOX0VSUk9SX0VWRU5UID0gXCJPTl9NVUxUSV9TRU5ERVJfVE9LRU5fRVJST1JfRVZFTlRcIlxuICBPTl9NVUxUSV9TRU5ERVJfVE9LRU5fUkVDRUlWRURfRVZFTlQgPSBcIk9OX01VTFRJX1NFTkRFUl9UT0tFTl9SRUNFSVZFRF9FVkVOVFwiXG4gIH1cblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6IFwiSG1zUHVzaFByb2ZpbGVcIixcbiAgcGx1Z2luOiBcIkBobXNjb3JlL2NvcmRvdmEtcGx1Z2luLWhtcy1wdXNoXCIsXG4gIHBsdWdpblJlZjogXCJIbXNQdXNoUHJvZmlsZVwiLFxuICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcbiAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIbXNQdXNoUHJvZmlsZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgXG4gIEhVQVdFSV9QUk9GSUxFPTE7XG4gIENVU1RPTV9QUk9GSUxFPTI7XG4gIFVOREVGSU5FRF9QUk9GSUxFPS0xO1xuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIGlzU3VwcG9ydFByb2ZpbGUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBhZGRQcm9maWxlKHR5cGU6bnVtYmVyLCBwcm9maWxlSWQ6c3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGFkZFByb2ZpbGVXaXRoU3ViamVjdElkKHN1YmplY3RJZDpzdHJpbmcsIHR5cGU6bnVtYmVyLCBwcm9maWxlSWQ6c3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGRlbGV0ZVByb2ZpbGUocHJvZmlsZUlkOnN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBkZWxldGVQcm9maWxlV2l0aFN1YmplY3RJZChzdWJqZWN0SWQ6c3RyaW5nLCBwcm9maWxlSWQ6c3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgZW51bSBIbXNQdXNoUmVzdWx0Q29kZSB7XG4gICAgLy8gU3VjY2Vzc1xuICAgIFNVQ0NFU1MgPSBcIjBcIixcblxuICAgIC8vIEVycm9yXG4gICAgRVJST1IgPSBcIi0xXCIsXG5cbiAgICAvLyBCdW5kbGUgaXMgbnVsbCwgZXhjZXB0aW9uXG4gICAgTlVMTF9CVU5ETEUgPSBcIjMzM1wiLFxuXG4gICAgLy8gWW91IGRvIG5vdCBoYXZlIGEgdG9rZW4uIEFwcGx5IGZvciBhIHRva2VuLlxuICAgIEVSUk9SX05PX1RPS0VOID0gXCI5MDcxMjIwMzBcIixcblxuICAgIC8vIFRoZSBjdXJyZW50IG5ldHdvcmsgaXMgdW5hdmFpbGFibGUuIENoZWNrIHRoZSBuZXR3b3JrIGNvbm5lY3Rpb24uXG4gICAgRVJST1JfTk9fTkVUV09SSyA9IFwiOTA3MTIyMDMxXCIsXG5cbiAgICAvLyBUaGUgdG9rZW4gaGFzIGV4cGlyZWQuIERlbGV0ZSB0aGUgdG9rZW4gYW5kIGFwcGx5IGZvciBhIG5ldyBvbmUuXG4gICAgRVJST1JfVE9LRU5fSU5WQUxJRCA9IFwiOTA3MTIyMDMyXCIsXG5cbiAgICAvLyBJZiB0aGUgUHVzaCBzZXJ2aWNlIGlzIHVuYXZhaWxhYmxlLCBjb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cbiAgICBFUlJPUl9TRVJWSUNFX05PVF9BVkFJTEFCTEUgPSBcIjkwNzEyMjA0NlwiLFxuXG4gICAgLy8gSWYgdGhlIFB1c2ggc2VydmVyIHJldHVybnMgYW4gZXJyb3IsIGNvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxuICAgIEVSUk9SX1BVU0hfU0VSVkVSID0gXCI5MDcxMjIwNDdcIixcblxuICAgIC8vIFVua25vd24gZXJyb3IuIENvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxuICAgIEVSUk9SX1VOS05PV04gPSBcIjkwNzEyMjA0NVwiLFxuXG4gICAgLy8gVGhlIG51bWJlciBvZiBzdWJzY3JpYmVkIHRvcGljcyBleGNlZWRzIDIwMDAuXG4gICAgRVJST1JfVE9QSUNfRVhDRUVEID0gXCI5MDcxMjIwMzRcIixcblxuICAgIC8vIEZhaWxlZCB0byBzZW5kIHRoZSBzdWJzY3JpcHRpb24gdG9waWMuIENvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxuICAgIEVSUk9SX1RPUElDX1NFTkQgPSBcIjkwNzEyMjAzNVwiLFxuXG4gICAgLy8gUHVzaCByaWdodHMgYXJlIG5vdCBlbmFibGVkLiBFbmFibGUgdGhlIHNlcnZpY2UgYW5kIHNldCBwdXNoIHNlcnZpY2UgcGFyYW1ldGVycyBhdCBBcHBHYWxsZXJ5IENvbm5lY3QuXG4gICAgRVJST1JfTk9fUklHSFQgPSBcIjkwNzEyMjAzNlwiLFxuXG4gICAgLy8gRmFpbGVkIHRvIGFwcGx5IGZvciB0aGUgdG9rZW4uIENvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxuICAgIEVSUk9SX0dFVF9UT0tFTl9FUlIgPSBcIjkwNzEyMjAzN1wiLFxuXG4gICAgLy8gTm8gc3RvcmFnZSBsb2NhdGlvbiBpcyBzZWxlY3RlZCBmb3IgdGhlIGFwcGxpY2F0aW9uIG9yIHRoZSBzdG9yYWdlIGxvY2F0aW9uIGlzIGludmFsaWQuXG4gICAgRVJST1JfU1RPUkFHRV9MT0NBVElPTl9FTVBUWSA9IFwiOTA3MTIyMDM4XCIsXG5cbiAgICAvLyBGYWlsZWQgdG8gYXBwbHkgZm9yIGEgdG9rZW4uIENyb3NzLXJlZ2lvbiB0b2tlbiBhcHBsaWNhdGlvbiBpcyBub3QgYWxsb3dlZC5cbiAgICBFUlJPUl9OT1RfQUxMT1dfQ1JPU1NfQVBQTFkgPSBcIjkwNzEyMjA1M1wiLFxuXG4gICAgLy8gVGhlIG1lc3NhZ2UgYm9keSBzaXplIGV4Y2VlZHMgdGhlIG1heGltdW0uXG4gICAgRVJST1JfU0laRSA9IFwiOTA3MTIyMDQxXCIsXG5cbiAgICAvLyBUaGUgbWVzc2FnZSBjb250YWlucyBpbnZhbGlkIHBhcmFtZXRlcnMuXG4gICAgRVJST1JfSU5WQUxJRF9QQVJBTUVURVJTID0gXCI5MDcxMjIwNDJcIixcblxuICAgIC8vIFRoZSBudW1iZXIgb2Ygc2VudCBtZXNzYWdlcyByZWFjaGVzIHRoZSB1cHBlciBsaW1pdC4gVGhlIG1lc3NhZ2VzIHdpbGwgYmUgZGlzY2FyZGVkLlxuICAgIEVSUk9SX1RPT19NQU5ZX01FU1NBR0VTID0gXCI5MDcxMjIwNDNcIixcblxuICAgIC8vIFRoZSBtZXNzYWdlIGxpZmV0aW1lIGV4cGlyZXMgYmVmb3JlIHRoZSBtZXNzYWdlIGlzIHN1Y2Nlc3NmdWxseSBzZW50IHRvIHRoZSBBUFAgc2VydmVyLlxuICAgIEVSUk9SX1RUTF9FWENFRURFRCA9IFwiOTA3MTIyMDQ0XCIsXG5cbiAgICAvLyAgSHVhd2VpIE1vYmlsZSBTZXJ2aWNlcyAoQVBLKSBjYW4ndCBjb25uZWN0ICBIdWF3ZWkgUHVzaCAgS2l0LlxuICAgIEVSUk9SX0hNU19DTElFTlRfQVBJID0gXCI5MDcxMjIwNDhcIixcblxuICAgIC8vIFRoZSBjdXJyZW50IEVNVUkgdmVyc2lvbiBpcyB0b28gZWFybHkgdG8gdXNlIHRoZSBjYXBhYmlsaXR5LlxuICAgIEVSUk9SX09QRVJBVElPTl9OT1RfU1VQUE9SVEVEID0gXCI5MDcxMjIwNDlcIixcblxuICAgIC8vIFRoZSBvcGVyYXRpb24gY2Fubm90IGJlIHBlcmZvcm1lZCBpbiB0aGUgbWFpbiB0aHJlYWQuXG4gICAgRVJST1JfTUFJTl9USFJFQUQgPSBcIjkwNzEyMjA1MFwiLFxuXG4gICAgLy8gVGhlIGRldmljZSBjZXJ0aWZpY2F0ZSBhdXRoZW50aWNhdGlvbiBmYWlscy5cbiAgICBFUlJPUl9ITVNfREVWSUNFX0FVVEhfRkFJTEVEX1NFTEZfTUFQUElORyA9IFwiOTA3MTIyMDUxXCIsXG5cbiAgICAvLyBGYWlsZWQgdG8gYmluZCB0aGUgc2VydmljZS5cbiAgICBFUlJPUl9CSU5EX1NFUlZJQ0VfU0VMRl9NQVBQSU5HID0gXCI5MDcxMjIwNTJcIixcblxuICAgIC8vIFRoZSBTREsgaXMgYmVpbmcgYXV0b21hdGljYWxseSBpbml0aWFsaXplZC4gVHJ5IGFnYWluIGxhdGVyLlxuICAgIEVSUk9SX0FVVE9fSU5JVElBTElaSU5HID0gXCI5MDcxMjIwNTRcIixcblxuICAgIC8qVGhlIGlucHV0IHBhcmFtZXRlciBpcyBpbmNvcnJlY3QuIENoZWNrIHdoZXRoZXIgdGhlIHJlbGF0ZWQgY29uZmlndXJhdGlvbiBpbmZvcm1hdGlvbiBpcyBjb3JyZWN0LlxuICAgICAqIEV4YW1wbGU6IGFwcF9pZCBpbiB0aGUgYWdjb25uZWN0IC0gc2VydmljZXMuanNvbiBmaWxlO1xuICAgICAqIENoZWNrIHdoZXRoZXIgdGhlIGJ1aWxkLmdyYWRsZSBmaWxlIGlzIGNvbmZpZ3VyZWQgd2l0aCB0aGUgY2VydGlmaWNhdGUgc2lnbmF0dXJlLlxuICAgICAqL1xuICAgIEVSUk9SX0FSR1VNRU5UU19JTlZBTElEID0gXCI5MDcxMzUwMDBcIixcblxuICAgIC8vIEludGVybmFsIFB1c2ggZXJyb3IuIENvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0IGVuZ2luZWVycy5cbiAgICBFUlJPUl9JTlRFUk5BTF9FUlJPUiA9IFwiOTA3MTM1MDAxXCIsXG5cbiAgICAvLyBUaGUgc2VydmljZSBkb2VzIG5vdCBleGlzdC4gVGhlIGludm9rZWQgaW50ZXJmYWNlIGRvZXMgbm90IGV4aXN0LlxuICAgIEVSUk9SX05BTUlOR19JTlZBTElEID0gXCI5MDcxMzUwMDJcIixcblxuICAgIC8vIFRoZSBBcGlDbGllbnQgb2JqZWN0IGlzIGludmFsaWQuXG4gICAgRVJST1JfQ0xJRU5UX0FQSV9JTlZBTElEID0gXCI5MDcxMzUwMDNcIixcblxuICAgIC8vIEludm9raW5nIEFJREwgdGltZXMgb3V0LiBDb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cbiAgICBFUlJPUl9FWEVDVVRFX1RJTUVPVVQgPSBcIjkwNzEzNTAwNFwiLFxuXG4gICAgLy8gVGhlIGN1cnJlbnQgYXJlYSBkb2VzIG5vdCBzdXBwb3J0IHRoaXMgc2VydmljZS5cbiAgICBFUlJPUl9OT1RfSU5fU0VSVklDRSA9IFwiOTA3MTM1MDA1XCIsXG5cbiAgICAvLyBJZiB0aGUgQUlETCBjb25uZWN0aW9uIHNlc3Npb24gaXMgaW52YWxpZCwgY29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXG4gICAgRVJST1JfU0VTU0lPTl9JTlZBTElEID0gXCI5MDcxMzUwMDZcIixcblxuICAgIC8vIEFuIGVycm9yIG9jY3VycmVkIHdoZW4gaW52b2tpbmcgYW4gdW5zcGVjaWZpZWQgQVBJLlxuICAgIEVSUk9SX0FQSV9OT1RfU1BFQ0lGSUVEID0gXCIxMDAyXCIsXG5cbiAgICAvKiBGYWlsZWQgdG8gaW52b2tlIHRoZSBnYXRld2F5IHRvIHF1ZXJ5IHRoZSBhcHBsaWNhdGlvbiBzY29wZS5cbiAgICAgKiBDaGVjayB3aGV0aGVyIHRoZSBjdXJyZW50IGFwcCBoYXMgYmVlbiBjcmVhdGVkIGFuZCBlbmFibGVkIGluIEFwcEdhbGxlcnkgQ29ubmVjdC5cbiAgICAgKiBJZiB5ZXMsIGNvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxuICAgICAqL1xuICAgIEVSUk9SX0dFVF9TQ09QRV9FUlJPUiA9IFwiOTA3MTM1NzAwXCIsXG4gICAgLyogU2NvcGUgaXMgbm90IGNvbmZpZ3VyZWQgb24gdGhlIEFwcEdhbGxlcnkgQ29ubmVjdC5cbiAgICAgKiBDaGVjayB3aGV0aGVyIHRoZSBjdXJyZW50IGFwcCBoYXMgYmVlbiBjcmVhdGVkIGFuZCBlbmFibGVkIGluIEFwcEdhbGxlcnkgQ29ubmVjdC5cbiAgICAgKiBJZiB5ZXMsIGNvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxuICAgICAqL1xuICAgIEVSUk9SX1NDT1BFX0xJU1RfRU1QVFkgPSBcIjkwNzEzNTcwMVwiLFxuXG4gICAgLyogVGhlIGNlcnRpZmljYXRlIGZpbmdlcnByaW50IGlzIG5vdCBjb25maWd1cmVkIG9uIHRoZSBBcHBHYWxsZXJ5IENvbm5lY3QuXG4gICAgICogMS4gQ2hlY2sgd2hldGhlciB5b3VyIHBob25lIGNhbiBhY2Nlc3MgdGhlIEludGVybmV0LlxuICAgICAqIDIuIENoZWNrIHdoZXRoZXIgdGhlIGNvcnJlY3QgY2VydGlmaWNhdGUgZmluZ2VycHJpbnQgaXMgY29uZmlndXJlZCBpbiBBcHBHYWxsZXJ5IENvbm5lY3QuIEZvciBkZXRhaWxzLCBzZWUgQXBwR2FsbGVyeSBDb25uZWN0IGNvbmZpZ3VyYXRpb24gaW4gRGV2ZWxvcG1lbnQgUHJlcGFyYXRpb25zLlxuICAgICAqIDMuIElmIHRoZSBjaGVjayByZXN1bHQgaXMgY29ycmVjdCwgY29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXG4gICAgICovXG4gICAgRVJST1JfQ0VSVF9GSU5HRVJQUklOVF9FTVBUWSA9IFwiOTA3MTM1NzAyXCIsXG5cbiAgICAvLyBQZXJtaXNzaW9uIGlzIG5vdCBjb25maWd1cmVkIG9uIHRoZSBBcHBHYWxsZXJ5IENvbm5lY3QuXG4gICAgRVJST1JfUEVSTUlTU0lPTl9MSVNUX0VNUFRZID0gXCI5MDcxMzU3MDNcIixcblxuICAgIC8vIFRoZSBhdXRoZW50aWNhdGlvbiBpbmZvcm1hdGlvbiBvZiB0aGUgYXBwbGljYXRpb24gZG9lcyBub3QgZXhpc3QuXG4gICAgRVJST1JfQVVUSF9JTkZPX05PVF9FWElTVCA9IFwiNjAwMlwiLFxuXG4gICAgLy8gQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIGNlcnRpZmljYXRlIGZpbmdlcnByaW50IHZlcmlmaWNhdGlvbi4gQ2hlY2sgd2hldGhlciB0aGUgY29ycmVjdCBjZXJ0aWZpY2F0ZSBmaW5nZXJwcmludCBpcyBjb25maWd1cmVkIGluIEFwcEdhbGxlcnkgQ29ubmVjdC4gRm9yIGRldGFpbHMsIHNlZSBBcHBHYWxsZXJ5IENvbm5lY3QgY29uZmlndXJhdGlvbiBpbiBEZXZlbG9wbWVudCBQcmVwYXJhdGlvbnMuXG4gICAgRVJST1JfQ0VSVF9GSU5HRVJQUklOVF9FUlJPUiA9IFwiNjAwM1wiLFxuXG4gICAgLy8gSW50ZXJmYWNlIGF1dGhlbnRpY2F0aW9uOiBUaGUgcGVybWlzc2lvbiBkb2VzIG5vdCBleGlzdCBhbmQgaXMgbm90IGFwcGxpZWQgZm9yIGluIEFwcEdhbGxlcnkgQ29ubmVjdC5cbiAgICBFUlJPUl9QRVJNSVNTSU9OX05PVF9FWElTVCA9IFwiNjAwNFwiLFxuXG4gICAgLy8gSW50ZXJmYWNlIGF1dGhlbnRpY2F0aW9uOiB1bmF1dGhvcml6ZWQuXG4gICAgRVJST1JfUEVSTUlTU0lPTl9OT1RfQVVUSE9SSVpFRCA9IFwiNjAwNVwiLFxuXG4gICAgLy8gSW50ZXJmYWNlIGF1dGhlbnRpY2F0aW9uOiBUaGUgYXV0aG9yaXphdGlvbiBleHBpcmVzLlxuICAgIEVSUk9SX1BFUk1JU1NJT05fRVhQSVJFRCA9IFwiNjAwNlwiLFxufVxuXG5leHBvcnQgZW51bSBBdHRyIHtcbiAgICBpZCA9IFwiaWRcIixcbiAgICBtZXNzYWdlID0gXCJtZXNzYWdlXCIsXG4gICAgZmlyZURhdGUgPSBcImZpcmVEYXRlXCIsXG4gICAgdGl0bGUgPSBcInRpdGxlXCIsXG4gICAgdGlja2VyID0gXCJ0aWNrZXJcIixcbiAgICBzaG93V2hlbiA9IFwic2hvd1doZW5cIixcbiAgICBhdXRvQ2FuY2VsID0gXCJhdXRvQ2FuY2VsXCIsXG4gICAgbGFyZ2VJY29uID0gXCJsYXJnZUljb25cIixcbiAgICBsYXJnZUljb25VcmwgPSBcImxhcmdlSWNvblVybFwiLFxuICAgIHNtYWxsSWNvbiA9IFwic21hbGxJY29uXCIsXG4gICAgYmlnVGV4dCA9IFwiYmlnVGV4dFwiLFxuICAgIHN1YlRleHQgPSBcInN1YlRleHRcIixcbiAgICBiaWdQaWN0dXJlVXJsID0gXCJiaWdQaWN0dXJlVXJsXCIsXG4gICAgc2hvcnRjdXRJZCA9IFwic2hvcnRjdXRJZFwiLFxuICAgIG51bWJlciA9IFwibnVtYmVyXCIsXG4gICAgY2hhbm5lbElkID0gXCJjaGFubmVsSWRcIixcbiAgICBjaGFubmVsTmFtZSA9IFwiY2hhbm5lbE5hbWVcIixcbiAgICBjaGFubmVsRGVzY3JpcHRpb24gPSBcImNoYW5uZWxEZXNjcmlwdGlvblwiLFxuICAgIGNvbG9yID0gXCJjb2xvclwiLFxuICAgIGdyb3VwID0gXCJncm91cFwiLFxuICAgIGdyb3VwU3VtbWFyeSA9IFwiZ3JvdXBTdW1tYXJ5XCIsXG4gICAgcGxheVNvdW5kID0gXCJwbGF5U291bmRcIixcbiAgICBzb3VuZE5hbWUgPSBcInNvdW5kTmFtZVwiLFxuICAgIHZpYnJhdGUgPSBcInZpYnJhdGVcIixcbiAgICB2aWJyYXRlRHVyYXRpb24gPSBcInZpYnJhdGVEdXJhdGlvblwiLFxuICAgIGFjdGlvbnMgPSBcImFjdGlvbnNcIixcbiAgICBpbnZva2VBcHAgPSBcImludm9rZUFwcFwiLFxuICAgIHRhZyA9IFwidGFnXCIsXG4gICAgcmVwZWF0VHlwZSA9IFwicmVwZWF0VHlwZVwiLFxuICAgIHJlcGVhdFRpbWUgPSBcInJlcGVhdFRpbWVcIixcbiAgICBvbmdvaW5nID0gXCJvbmdvaW5nXCIsXG4gICAgYWxsb3dXaGlsZUlkbGUgPSBcImFsbG93V2hpbGVJZGxlXCIsXG4gICAgZG9udE5vdGlmeUluRm9yZWdyb3VuZCA9IFwiZG9udE5vdGlmeUluRm9yZWdyb3VuZFwiLFxuICAgIHByaW9yaXR5ID0gXCJwcmlvcml0eVwiLFxuICAgIGltcG9ydGFuY2UgPSBcImltcG9ydGFuY2VcIixcbiAgICB2aXNpYmlsaXR5ID0gXCJ2aXNpYmlsaXR5XCIsXG4gICAgZGF0YSA9IFwiZGF0YVwiXG59XG5cbmV4cG9ydCBlbnVtIEltcG9ydGFuY2Uge1xuICAgIE1BWCA9IFwibWF4XCIsXG4gICAgSElHSCA9IFwiaGlnaFwiLFxuICAgIERFRkFVTFQgPSBcImRlZmF1bHRcIixcbiAgICBMT1cgPSBcImxvd1wiLFxuICAgIE1JTiA9IFwibWluXCIsXG4gICAgTk9ORSA9IFwibm9uZVwiLFxuICAgIFVOU1BFQ0lGSUVEID0gXCJ1bnNwZWNpZmllZFwiLFxufVxuXG5leHBvcnQgZW51bSBQcmlvcml0eSB7XG4gICAgTUFYID0gXCJtYXhcIixcbiAgICBISUdIID0gXCJoaWdoXCIsXG4gICAgREVGQVVMVCA9IFwiZGVmYXVsdFwiLFxuICAgIExPVyA9IFwibG93XCIsXG4gICAgTUlOID0gXCJtaW5cIixcbn1cblxuZXhwb3J0IGVudW0gUmVwZWF0VHlwZSB7XG4gICAgSE9VUiA9IFwiaG91clwiLFxuICAgIE1JTlVURSA9IFwibWludXRlXCIsXG4gICAgREFZID0gXCJkYXlcIixcbiAgICBXRUVLID0gXCJ3ZWVrXCIsXG4gICAgQ1VTVE9NX1RJTUUgPSBcImN1c3RvbV90aW1lXCIsXG59XG5cbmV4cG9ydCBlbnVtIFZpc2liaWxpdHkge1xuICAgIFBVQkxJQyA9IFwicHVibGljXCIsXG4gICAgU0VDUkVUID0gXCJzZWNyZXRcIixcbiAgICBQUklWQVRFID0gXCJwcml2YXRlXCIsXG59XG5cbmV4cG9ydCBlbnVtIFJlbW90ZU1lc3NhZ2VCdWlsZGVyIHtcbiAgICBUTyA9IFwidG9cIixcbiAgICBNRVNTQUdFX0lEID0gXCJtZXNzYWdlSWRcIixcbiAgICBNRVNTQUdFX1RZUEUgPSBcIm1lc3NhZ2VUeXBlXCIsXG4gICAgVFRMID0gXCJ0dGxcIixcbiAgICBDT0xMQVBTRV9LRVkgPSBcImNvbGxhcHNlS2V5XCIsXG4gICAgUkVDRUlQVF9NT0RFID0gXCJyZWNlaXB0TW9kZVwiLFxuICAgIFNFTkRfTU9ERSA9IFwic2VuZE1vZGVcIixcbiAgICBEQVRBID0gXCJkYXRhXCIsXG59XG5cbmNsYXNzIENvcmRvdmFSZW1vdGVNZXNzYWdlIHtcbiAgICBzdGF0aWMgSU5TVEFOQ0VfSURfU0NPUEUgPSBcIkhDTVwiO1xuXG4gICAgc3RhdGljIFBSSU9SSVRZX1VOS05PV04gPSAwO1xuICAgIHN0YXRpYyBQUklPUklUWV9ISUdIID0gMTtcbiAgICBzdGF0aWMgUFJJT1JJVFlfTk9STUFMID0gMjtcblxuICAgIHN0YXRpYyBDT0xMQVBTRUtFWSA9IFwiY29sbGFwc2VLZXlcIjtcbiAgICBzdGF0aWMgREFUQSA9IFwiZGF0YVwiO1xuICAgIHN0YXRpYyBEQVRBT0ZNQVAgPSBcImRhdGFPZk1hcFwiO1xuICAgIHN0YXRpYyBNRVNTQUdFSUQgPSBcIm1lc3NhZ2VJZFwiO1xuICAgIHN0YXRpYyBNRVNTQUdFVFlQRSA9IFwibWVzc2FnZVR5cGVcIjtcbiAgICBzdGF0aWMgT1JJR0lOQUxVUkdFTkNZID0gXCJvcmlnaW5hbFVyZ2VuY3lcIjtcbiAgICBzdGF0aWMgVVJHRU5DWSA9IFwidXJnZW5jeVwiO1xuICAgIHN0YXRpYyBUVEwgPSBcInR0bFwiO1xuICAgIHN0YXRpYyBTRU5UVElNRSA9IFwic2VudFRpbWVcIjtcbiAgICBzdGF0aWMgVE8gPSBcInRvXCI7XG4gICAgc3RhdGljIEZST00gPSBcImZyb21cIjtcbiAgICBzdGF0aWMgVE9LRU4gPSBcInRva2VuXCI7XG4gICAgc3RhdGljIEFOQUxZVElDSU5GTyA9IFwiYW5hbHl0aWNJbmZvXCI7XG4gICAgc3RhdGljIEFOQUxZVElDSU5GT01BUCA9IFwiYW5hbHl0aWNJbmZvTWFwXCI7XG5cbiAgICBzdGF0aWMgTk9USUZJQ0FUSU9OID0ge1xuICAgICAgICBUSVRMRTogXCJ0aXRsZVwiLFxuICAgICAgICBUSVRMRUxPQ0FMSVpBVElPTktFWTogXCJ0aXRsZUxvY2FsaXphdGlvbktleVwiLFxuICAgICAgICBUSVRMRUxPQ0FMSVpBVElPTkFSR1M6IFwidGl0bGVMb2NhbGl6YXRpb25BcmdzXCIsXG4gICAgICAgIEJPRFlMT0NBTElaQVRJT05LRVk6IFwiYm9keUxvY2FsaXphdGlvbktleVwiLFxuICAgICAgICBCT0RZTE9DQUxJWkFUSU9OQVJHUzogXCJib2R5TG9jYWxpemF0aW9uQXJnc1wiLFxuICAgICAgICBCT0RZOiBcImJvZHlcIixcbiAgICAgICAgSUNPTjogXCJpY29uXCIsXG4gICAgICAgIFNPVU5EOiBcIlNvdW5kXCIsXG4gICAgICAgIFRBRzogXCJUYWdcIixcbiAgICAgICAgQ09MT1I6IFwiQ29sb3JcIixcbiAgICAgICAgQ0xJQ0tBQ1RJT046IFwiQ2xpY2tBY3Rpb25cIixcbiAgICAgICAgQ0hBTk5FTElEOiBcIkNoYW5uZWxJZFwiLFxuICAgICAgICBJTUFHRVVSTDogXCJJbWFnZVVybFwiLFxuICAgICAgICBMSU5LOiBcIkxpbmtcIixcbiAgICAgICAgTk9USUZZSUQ6IFwiTm90aWZ5SWRcIixcbiAgICAgICAgV0hFTjogXCJXaGVuXCIsXG4gICAgICAgIExJR0hUU0VUVElOR1M6IFwiTGlnaHRTZXR0aW5nc1wiLFxuICAgICAgICBCQURHRU5VTUJFUjogXCJCYWRnZU51bWJlclwiLFxuICAgICAgICBJTVBPUlRBTkNFOiBcIkltcG9ydGFuY2VcIixcbiAgICAgICAgVElDS0VSOiBcIlRpY2tlclwiLFxuICAgICAgICBWSUJSQVRFQ09ORklHOiBcInZpYnJhdGVDb25maWdcIixcbiAgICAgICAgVklTSUJJTElUWTogXCJ2aXNpYmlsaXR5XCIsXG4gICAgICAgIElOVEVOVFVSSTogXCJpbnRlbnRVcmlcIixcbiAgICAgICAgSVNBVVRPQ0FOQ0VMOiBcImlzQXV0b0NhbmNlbFwiLFxuICAgICAgICBJU0xPQ0FMT05MWTogXCJpc0xvY2FsT25seVwiLFxuICAgICAgICBJU0RFRkFVTFRMSUdIVDogXCJpc0RlZmF1bHRMaWdodFwiLFxuICAgICAgICBJU0RFRkFVTFRTT1VORDogXCJpc0RlZmF1bHRTb3VuZFwiLFxuICAgICAgICBJU0RFRkFVTFRWSUJSQVRFOiBcImlzRGVmYXVsdFZpYnJhdGVcIixcbiAgICB9O1xuICAgIHJlbW90ZU1zZzogYW55O1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMucmVtb3RlTXNnID0gb3B0aW9ucztcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIHBhcnNlIGFsbCBlbGVtZW50LHVub3JkZXJlZFxuICAgICAqL1xuICAgIHBhcnNlTXNnQWxsQXR0cmlidXRlKCkge1xuICAgICAgICBsZXQgcHVzaFJlc3VsdCA9IFwiXCI7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMucmVtb3RlTXNnKSB7XG4gICAgICAgICAgICBwdXNoUmVzdWx0ID0gcHVzaFJlc3VsdCArIGtleSArIFwiIDogXCIgKyB0aGlzLnJlbW90ZU1zZ1trZXldICsgXCJcXG5cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHVzaFJlc3VsdDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIGdldENvbGxhcHNlS2V5KCkgT2J0YWlucyB0aGUgY2xhc3NpZmljYXRpb24gaWRlbnRpZmllciAoY29sbGFwc2Uga2V5KSBvZiBhIG1lc3NhZ2UuXG4gICAgICovXG4gICAgZ2V0Q29sbGFwc2VLZXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5DT0xMQVBTRUtFWV07XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBnZXREYXRhKCkgT2J0YWlucyB2YWxpZCBjb250ZW50IGRhdGEgb2YgYSBtZXNzYWdlLlxuICAgICAqL1xuICAgIGdldERhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5EQVRBXTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIGdldERhdGFPZk1hcCgpIGEgbWVzc2FnZSBtYXAuXG4gICAgICovXG4gICAgZ2V0RGF0YU9mTWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuREFUQU9GTUFQXTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIGdldE1lc3NhZ2VJZCgpIE9idGFpbnMgdGhlIElEIG9mIGEgbWVzc2FnZS5cbiAgICAgKi9cbiAgICBnZXRNZXNzYWdlSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5NRVNTQUdFSURdO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogZ2V0TWVzc2FnZVR5cGUoKSBPYnRhaW5zIHRoZSB0eXBlIG9mIGEgbWVzc2FnZS5cbiAgICAgKi9cbiAgICBnZXRNZXNzYWdlVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk1FU1NBR0VUWVBFXTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIGdldE9yaWdpbmFsVXJnZW5jeSgpIE9idGFpbnMgdGhlIG9yaWdpbmFsIHByaW9yaXR5IG9mIGEgbWVzc2FnZS5cbiAgICAgKi9cbiAgICBnZXRPcmlnaW5hbFVyZ2VuY3koKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5PUklHSU5BTFVSR0VOQ1ldO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogZ2V0VXJnZW5jeSgpIE9idGFpbnMgcHJpb3JpdHkgb2YgYSBtZXNzYWdlLlxuICAgICAqL1xuICAgIGdldFVyZ2VuY3koKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5VUkdFTkNZXTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIGdldFR0bCgpIE9idGFpbnMgdmFsaWQgZ2V0VHRsIG9mIGEgbWVzc2FnZS5cbiAgICAgKi9cbiAgICBnZXRUdGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5UVExdO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogZ2V0U2VudFRpbWUoKSBPYnRhaW5zIHRoZSB0aW1lIHdoZW4gYSBtZXNzYWdlIGlzIHNlbnQgZnJvbSB0aGUgc2VydmVyLlxuICAgICAqL1xuICAgIGdldFNlbnRUaW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuU0VOVFRJTUVdO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogZ2V0VG8oKSBPYnRhaW5zIHRoZSByZWNpcGllbnQgb2YgYSBtZXNzYWdlLlxuICAgICAqL1xuICAgIGdldFRvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuVE9dO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogZ2V0RnJvbSgpIE9idGFpbnMgdGhlIHNlbmRlciBvZiBhIG1lc3NhZ2UuXG4gICAgICovXG4gICAgZ2V0RnJvbSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLkZST01dO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogZ2V0VG9rZW4oKSBPYnRhaW5zIHZhbGlkIHRva2VuXG4gICAgICovXG4gICAgZ2V0VG9rZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5UT0tFTl07XG4gICAgfVxuXG4gICAgZ2V0QW5hbHl0aWNJbmZvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuQU5BTFlUSUNJTkZPXTtcbiAgICB9XG5cbiAgICBnZXRBbmFseXRpY0luZm9NYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5BTkFMWVRJQ0lORk9NQVBdO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogTm90aWZpY2F0aW9uOmdldFRpdGxlKCkgT2J0YWlucyB0aGUgdGl0bGUgb2YgYSBtZXNzYWdlXG4gICAgICovXG4gICAgZ2V0Tm90aWZpY2F0aW9uVGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVElUTEVdO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogTm90aWZpY2F0aW9uOmdldFRpdGxlTG9jYWxpemF0aW9uS2V5KCkgT2J0YWlucyB0aGUga2V5IG9mIHRoZSBkaXNwbGF5ZWQgdGl0bGUgb2YgYSBub3RpZmljYXRpb24gbWVzc2FnZVxuICAgICAqL1xuICAgIGdldFRpdGxlTG9jYWxpemF0aW9uS2V5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbXG4gICAgICAgICAgICBDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVElUTEVMT0NBTElaQVRJT05LRVlcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRUaXRsZUxvY2FsaXphdGlvbkFyZ3MoKSBPYnRhaW5zIHZhcmlhYmxlIHBhcmFtZXRlcnMgb2YgdGhlIGRpc3BsYXllZCB0aXRsZSBvZiBhIG1lc3NhZ2VcbiAgICAgKi9cbiAgICBnZXRUaXRsZUxvY2FsaXphdGlvbkFyZ3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tcbiAgICAgICAgICAgIENvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5USVRMRUxPQ0FMSVpBVElPTkFSR1NcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRCb2R5TG9jYWxpemF0aW9uS2V5KCkgT2J0YWlucyB0aGUga2V5IG9mIHRoZSBkaXNwbGF5ZWQgY29udGVudCBvZiBhIG1lc3NhZ2VcbiAgICAgKi9cbiAgICBnZXRCb2R5TG9jYWxpemF0aW9uS2V5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbXG4gICAgICAgICAgICBDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uQk9EWUxPQ0FMSVpBVElPTktFWVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogTm90aWZpY2F0aW9uOmdldEJvZHlMb2NhbGl6YXRpb25BcmdzKCkgT2J0YWlucyB2YXJpYWJsZSBwYXJhbWV0ZXJzIG9mIHRoZSBkaXNwbGF5ZWQgY29udGVudCBvZiBhIG1lc3NhZ2VcbiAgICAgKi9cbiAgICBnZXRCb2R5TG9jYWxpemF0aW9uQXJncygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW1xuICAgICAgICAgICAgQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkJPRFlMT0NBTElaQVRJT05BUkdTXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0Qm9keSgpIE9idGFpbnMgdGhlIGJvZHkgb2YgYSBtZXNzYWdlXG4gICAgICovXG4gICAgZ2V0Qm9keSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5CT0RZXTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRJY29uKCkgT2J0YWlucyB0aGUgaWNvbiBvZiBhIG1lc3NhZ2VcbiAgICAgKi9cbiAgICBnZXRJY29uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklDT05dO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogTm90aWZpY2F0aW9uOmdldFNvdW5kKCkgT2J0YWlucyB0aGUgc291bmQgZnJvbSBhIG1lc3NhZ2VcbiAgICAgKi9cbiAgICBnZXRTb3VuZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5TT1VORF07XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0VGFnKCkgT2J0YWlucyB0aGUgdGFnIGZyb20gYSBtZXNzYWdlIGZvciBtZXNzYWdlIG92ZXJ3cml0aW5nXG4gICAgICovXG4gICAgZ2V0VGFnKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLlRBR107XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0Q29sb3IoKSBPYnRhaW5zIHRoZSBjb2xvcnMgb2YgaWNvbnMgaW4gYSBtZXNzYWdlXG4gICAgICovXG4gICAgZ2V0Q29sb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uQ09MT1JdO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogTm90aWZpY2F0aW9uOmdldENsaWNrQWN0aW9uKCkgT2J0YWlucyBhY3Rpb25zIHRyaWdnZXJlZCBieSBtZXNzYWdlIHRhcHBpbmdcbiAgICAgKi9cbiAgICBnZXRDbGlja0FjdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5DTElDS0FDVElPTl07XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0Q2hhbm5lbElkKCkgT2J0YWlucyBJRHMgb2YgY2hhbm5lbHMgdGhhdCBzdXBwb3J0IHRoZSBkaXNwbGF5IG9mIG1lc3NhZ2VzXG4gICAgICovXG4gICAgZ2V0Q2hhbm5lbElkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkNIQU5ORUxJRF07XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0SW1hZ2VVcmwoKSBPYnRhaW5zIHRoZSBpbWFnZSBVUkwgZnJvbSBhIG1lc3NhZ2VcbiAgICAgKi9cbiAgICBnZXRJbWFnZVVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JTUFHRVVSTF07XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0TGluaygpIE9idGFpbnMgdGhlIFVSTCB0byBiZSBhY2Nlc3NlZCBmcm9tIGEgbWVzc2FnZVxuICAgICAqL1xuICAgIGdldExpbmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uTElOS107XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0Tm90aWZ5SWQoKSBPYnRhaW5zIHRoZSB1bmlxdWUgSUQgb2YgYSBtZXNzYWdlXG4gICAgICovXG4gICAgZ2V0Tm90aWZ5SWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uTk9USUZZSURdO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogTm90aWZpY2F0aW9uOmdldFdoZW4oKVxuICAgICAqL1xuICAgIGdldFdoZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uV0hFTl07XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0TGlnaHRTZXR0aW5ncygpXG4gICAgICovXG4gICAgZ2V0TGlnaHRTZXR0aW5ncygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5MSUdIVFNFVFRJTkdTXTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRCYWRnZU51bWJlcigpXG4gICAgICovXG4gICAgZ2V0QmFkZ2VOdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uQkFER0VOVU1CRVJdO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogTm90aWZpY2F0aW9uOmdldEltcG9ydGFuY2UoKVxuICAgICAqL1xuICAgIGdldEltcG9ydGFuY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSU1QT1JUQU5DRV07XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0VGlja2VyKClcbiAgICAgKi9cbiAgICBnZXRUaWNrZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVElDS0VSXTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRWaWJyYXRlQ29uZmlnKClcbiAgICAgKi9cbiAgICBnZXRWaWJyYXRlQ29uZmlnKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLlZJQlJBVEVDT05GSUddO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogTm90aWZpY2F0aW9uOmdldFZpc2liaWxpdHkoKVxuICAgICAqL1xuICAgIGdldFZpc2liaWxpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVklTSUJJTElUWV07XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0SW50ZW50VXJpKClcbiAgICAgKi9cbiAgICBnZXRJbnRlbnRVcmkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSU5URU5UVVJJXTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIE5vdGlmaWNhdGlvbjppc0F1dG9DYW5jZWwoKVxuICAgICAqL1xuICAgIGlzQXV0b0NhbmNlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JU0FVVE9DQU5DRUxdO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogTm90aWZpY2F0aW9uOmdldEludGVudFVyaSgpXG4gICAgICovXG4gICAgaXNMb2NhbE9ubHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSVNMT0NBTE9OTFldO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogTm90aWZpY2F0aW9uOmlzRGVmYXVsdExpZ2h0KClcbiAgICAgKi9cbiAgICBpc0RlZmF1bHRMaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JU0RFRkFVTFRMSUdIVF07XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBOb3RpZmljYXRpb246aXNEZWZhdWx0U291bmQoKVxuICAgICAqL1xuICAgIGlzRGVmYXVsdFNvdW5kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklTREVGQVVMVFNPVU5EXTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIE5vdGlmaWNhdGlvbjppc0RlZmF1bHRWaWJyYXRlKClcbiAgICAgKi9cbiAgICBpc0RlZmF1bHRWaWJyYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbXG4gICAgICAgICAgICBDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSVNERUZBVUxUVklCUkFURVxuICAgICAgICBdO1xuICAgIH1cbn1cblxudHlwZSBMb2NhbE5vdGlmaWNhdGlvbk9iamVjdCA9IHtcbiAgICBba2V5IGluIEF0dHJdPzogYW55O1xufTtcblxudHlwZSBSZW1vdGVNZXNzYWdlT2JqZWN0ID0ge1xuICAgIFtrZXkgaW4gUmVtb3RlTWVzc2FnZUJ1aWxkZXJdPzogYW55O1xufTtcblxuaW50ZXJmYWNlIElkVGFnIHtcblx0aWQ6bnVtYmVyLFxuXHR0YWc6c3RyaW5nXG59Il19
