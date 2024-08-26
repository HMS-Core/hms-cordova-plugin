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

import { __decorate, __extends } from "tslib";
import { Injectable } from "@angular/core";
import { AwesomeCordovaNativePlugin, cordova } from "@awesome-cordova-plugins/core";
import * as i0 from "@angular/core";
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
    HmsPush.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HmsPush, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HmsPush.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HmsPush });
    HmsPush.pluginName = "HmsPush";
    HmsPush.plugin = "@hmscore/cordova-plugin-hms-push";
    HmsPush.pluginRef = "HmsPush";
    HmsPush.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HmsPush.platforms = ["Android"];
    HmsPush = __decorate([], HmsPush);
    return HmsPush;
}(AwesomeCordovaNativePlugin));
export { HmsPush };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HmsPush, decorators: [{
            type: Injectable
        }], propDecorators: { 
        /**
         * This method  initialized HmsPush.
         * @returns Promise<void>
         */
        init: [], enableLogger: [], disableLogger: [], 
        /**
         * This method is used to disable the display of notification messages. If you want to control the display of notification messages in an app, you can call this method. This method applies to notification messages but not data messages. It is the app that determines whether to enable or disable data messaging.
         * @returns Promise<string>
         */
        turnOnPush: [], 
        /**
         * This method is used to enable the display of notification messages. If you want to control the display of notification messages in an app, you can call this method. This method applies to notification messages but not data messages. It is the app that determines whether to enable or disable data messaging.
         * @returns Promise<string>
         */
        turnOffPush: [], 
        /**
         * This method is used to obtain an AAID in synchronous mode. Before applying for a token, an app calls this method to obtain its unique AAID. The HUAWEI Push server generates a token for the app based on the AAID. If the AAID of the app changes, a new token will be generated next time when the app applies for a token. If an app needs to report statistics events, it must carry the AAID as its unique ID.
         * @returns Promise<string>
         */
        getId: [], 
        /**
         * This method is used to obtain an AAID in asynchronous mode.
         * @returns Promise<string>
         */
        getAAID: [], 
        /**
         * This method is used to obtain a token required for accessing HUAWEI Push Kit. If there is no local AAID, this method will automatically generate an AAID when it is called because the HUAWEI Push Kit server needs to generate a token based on the AAID.
         * @returns Promise<string>
         * @params scope ? : String
         */
        getToken: [], 
        /**
         * Obtains a token that a target app developer applies for a sender to integrate Push Kit in the multi-sender scenario.
         * @returns Promise<string>
         * @params subjectId ? : String
         */
        getTokenWithSubjectId: [], 
        /**
         * This method is used to obtain the generation timestamp of an AAID.
         * @returns Promise<string>
         */
        getCreationTime: [], 
        /**
         * This method is used to delete a local AAID and its generation timestamp.
         * @returns Promise<string>
         */
        deleteAAID: [], 
        /**
         * This method is used to delete a token. After a token is deleted, the corresponding AAID will not be deleted. This method is a synchronous method.
         * @returns Promise<string>
         * @params scope ? : String
         */
        deleteToken: [], 
        /**
         * Deletes a token that a target app developer applies for a sender to integrate Push Kit in the multi-sender scenario.
         * @returns Promise<string>
         * @params subjectId ? : String
         */
        deleteTokenWithSubjectId: [], 
        /**
         * This method is used to subscribe to topics in asynchronous mode. The HUAWEI Push Kit topic messaging function allows you to send messages to multiple devices whose users have subscribed to a specific topic. You can write messages about the topic as required, and HUAWEI Push Kit determines the release path and sends messages to the correct devices in a reliable manner.
         * @param {string} topic Topic to be subscribed to.
         * @returns Promise<string>
         */
        subscribe: [], 
        /**
         * This method is used to unsubscribe from topics that are subscribed to through the subscribe method.
         * @param {string} topic Topic to be unsubscribed to.
         * @returns Promise<string>
         */
        unsubscribe: [], 
        /**
         * Sets whether to enable automatic initialization. If the enable parameter is set to true, the SDK automatically generates an AAID and applies for a token.
         * @returns Promise<boolean>
         * @param {boolean} enabled Indicates whether to enable automatic initialization.
         */
        setAutoInitEnabled: [], getOdid: [], 
        /**
         * This method is used to check whether automatic initialization is enabled.
         * @returns Promise<string>
         */
        isAutoInitEnabled: [], getInitialNotification: [], sendRemoteMessage: [], setBackgroundFile: [], setItem: [], getItem: [], removeItem: [], removeBackgroundFile: [] } });
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
    HmsLocalNotification.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HmsLocalNotification, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HmsLocalNotification.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HmsLocalNotification });
    HmsLocalNotification.pluginName = "HmsLocalNotification";
    HmsLocalNotification.plugin = "@hmscore/cordova-plugin-hms-push";
    HmsLocalNotification.pluginRef = "HmsLocalNotification";
    HmsLocalNotification.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HmsLocalNotification.platforms = ["Android"];
    HmsLocalNotification = __decorate([], HmsLocalNotification);
    return HmsLocalNotification;
}(AwesomeCordovaNativePlugin));
export { HmsLocalNotification };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HmsLocalNotification, decorators: [{
            type: Injectable
        }], propDecorators: { localNotification: [], localNotificationSchedule: [], cancelAllNotifications: [], cancelNotifications: [], cancelScheduledNotifications: [], cancelNotificationsWithId: [], cancelNotificationsWithIdTag: [], cancelNotificationsWithTag: [], getNotifications: [], getScheduledNotifications: [], getChannels: [], channelExists: [], channelBlocked: [], deleteChannel: [] } });
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
    HmsPushEvent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HmsPushEvent, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HmsPushEvent.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HmsPushEvent });
    HmsPushEvent.pluginName = "HmsPushEvent";
    HmsPushEvent.plugin = "@hmscore/cordova-plugin-hms-push";
    HmsPushEvent.pluginRef = "HmsPushEvent";
    HmsPushEvent.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HmsPushEvent.platforms = ["Android"];
    HmsPushEvent = __decorate([], HmsPushEvent);
    return HmsPushEvent;
}(AwesomeCordovaNativePlugin));
export { HmsPushEvent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HmsPushEvent, decorators: [{
            type: Injectable
        }], propDecorators: { onRemoteMessageReceived: [], onTokenReceived: [], onTokenError: [], onPushMessageSent: [], onPushMessageSentError: [], onPushMessageSentDelivered: [], onLocalNotificationAction: [], onNotificationOpenedApp: [], onMultiSenderTokenReceivedEvent: [], onMultiSenderTokenErrorEvent: [] } });
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
    HmsPushProfile.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HmsPushProfile, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HmsPushProfile.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HmsPushProfile });
    HmsPushProfile.pluginName = "HmsPushProfile";
    HmsPushProfile.plugin = "@hmscore/cordova-plugin-hms-push";
    HmsPushProfile.pluginRef = "HmsPushProfile";
    HmsPushProfile.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HmsPushProfile.platforms = ["Android"];
    HmsPushProfile = __decorate([], HmsPushProfile);
    return HmsPushProfile;
}(AwesomeCordovaNativePlugin));
export { HmsPushProfile };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HmsPushProfile, decorators: [{
            type: Injectable
        }], propDecorators: { 
        /**
         *
         */
        isSupportProfile: [], addProfile: [], addProfileWithSubjectId: [], deleteProfile: [], deleteProfileWithSubjectId: [] } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmF0aXZlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7QUFFRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7OztJQVUvRCwyQkFBMEI7OztRQUNuRCx1QkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUN0QywwQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztRQUM1QywwQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztRQUM1Qyx5QkFBbUIsR0FBRyxLQUFLLENBQUM7OztJQUU1Qjs7O09BR0c7SUFDSCxzQkFBSTtJQUtKLDhCQUFZO0lBS1osK0JBQWE7SUFLYjs7O09BR0c7SUFDSCw0QkFBVTtJQUtWOzs7T0FHRztJQUNILDZCQUFXO0lBS1g7OztPQUdHO0lBQ0gsdUJBQUs7SUFLTDs7O09BR0c7SUFDSCx5QkFBTztJQUtQOzs7O09BSUc7SUFDSCwwQkFBUSxhQUFDLEtBQWM7SUFLdkI7Ozs7T0FJRztJQUNILHVDQUFxQixhQUFDLFNBQWlCO0lBS3ZDOzs7T0FHRztJQUNILGlDQUFlO0lBS2Y7OztPQUdHO0lBQ0gsNEJBQVU7SUFLVjs7OztPQUlHO0lBQ0gsNkJBQVcsYUFBQyxLQUFjO0lBSzFCOzs7O09BSUc7SUFDSCwwQ0FBd0IsYUFBQyxTQUFpQjtJQUsxQzs7OztPQUlHO0lBQ0gsMkJBQVMsYUFBQyxLQUFhO0lBS3ZCOzs7O09BSUc7SUFDSCw2QkFBVyxhQUFDLEtBQWE7SUFLekI7Ozs7T0FJRztJQUNILG9DQUFrQixhQUFDLE9BQWdCO0lBS25DLHlCQUFPO0lBS1A7OztPQUdHO0lBQ0gsbUNBQWlCO0lBS2pCLHdDQUFzQjtJQUt0QixtQ0FBaUIsYUFBQyxhQUFrQztJ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O1FBQzFDLG9CQUFvQixFQUFFLHNCQUFzQjtRQUM1QyxJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxNQUFNO1FBQ1osS0FBSyxFQUFFLE9BQU87UUFDZCxHQUFHLEVBQUUsS0FBSztRQUNWLEtBQUssRUFBRSxPQUFPO1FBQ2QsV0FBVyxFQUFFLGFBQWE7UUFDMUIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsVUFBVTtRQUNwQixJQUFJLEVBQUUsTUFBTTtRQUNaLGFBQWEsRUFBRSxlQUFlO1FBQzlCLFdBQVcsRUFBRSxhQUFhO1FBQzFCLFVBQVUsRUFBRSxZQUFZO1FBQ3hCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLGFBQWEsRUFBRSxlQUFlO1FBQzlCLFVBQVUsRUFBRSxZQUFZO1FBQ3hCLFNBQVMsRUFBRSxXQUFXO1FBQ3RCLFlBQVksRUFBRSxjQUFjO1FBQzVCLFdBQVcsRUFBRSxhQUFhO1FBQzFCLGNBQWMsRUFBRSxnQkFBZ0I7UUFDaEMsY0FBYyxFQUFFLGdCQUFnQjtRQUNoQyxnQkFBZ0IsRUFBRSxrQkFBa0I7S0FDdkMsQ0FBQzsrQkFyc0JOOztTQWtwQk0sb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIENvcHlyaWdodCAyMDIwLTIwMjQuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxyXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tIFwiQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmVcIjtcclxuXHJcbkBQbHVnaW4oe1xyXG4gICAgcGx1Z2luTmFtZTogXCJIbXNQdXNoXCIsXHJcbiAgICBwbHVnaW46IFwiQGhtc2NvcmUvY29yZG92YS1wbHVnaW4taG1zLXB1c2hcIixcclxuICAgIHBsdWdpblJlZjogXCJIbXNQdXNoXCIsXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcclxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSG1zUHVzaCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAgIEhtc1B1c2hSZXN1bHRDb2RlID0gSG1zUHVzaFJlc3VsdENvZGU7XHJcbiAgICBDb3Jkb3ZhUmVtb3RlTWVzc2FnZSA9IENvcmRvdmFSZW1vdGVNZXNzYWdlO1xyXG4gICAgUmVtb3RlTWVzc2FnZUJ1aWxkZXIgPSBSZW1vdGVNZXNzYWdlQnVpbGRlcjtcclxuICAgIERFRkFVTFRfVE9LRU5fU0NPUEUgPSBcIkhDTVwiO1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgIGluaXRpYWxpemVkIEhtc1B1c2guXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgICAgKi9cclxuICAgIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBkaXNhYmxlTG9nZ2VyKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGRpc2FibGUgdGhlIGRpc3BsYXkgb2Ygbm90aWZpY2F0aW9uIG1lc3NhZ2VzLiBJZiB5b3Ugd2FudCB0byBjb250cm9sIHRoZSBkaXNwbGF5IG9mIG5vdGlmaWNhdGlvbiBtZXNzYWdlcyBpbiBhbiBhcHAsIHlvdSBjYW4gY2FsbCB0aGlzIG1ldGhvZC4gVGhpcyBtZXRob2QgYXBwbGllcyB0byBub3RpZmljYXRpb24gbWVzc2FnZXMgYnV0IG5vdCBkYXRhIG1lc3NhZ2VzLiBJdCBpcyB0aGUgYXBwIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGVuYWJsZSBvciBkaXNhYmxlIGRhdGEgbWVzc2FnaW5nLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICAgKi9cclxuICAgIHR1cm5PblB1c2goKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gZW5hYmxlIHRoZSBkaXNwbGF5IG9mIG5vdGlmaWNhdGlvbiBtZXNzYWdlcy4gSWYgeW91IHdhbnQgdG8gY29udHJvbCB0aGUgZGlzcGxheSBvZiBub3RpZmljYXRpb24gbWVzc2FnZXMgaW4gYW4gYXBwLCB5b3UgY2FuIGNhbGwgdGhpcyBtZXRob2QuIFRoaXMgbWV0aG9kIGFwcGxpZXMgdG8gbm90aWZpY2F0aW9uIG1lc3NhZ2VzIGJ1dCBub3QgZGF0YSBtZXNzYWdlcy4gSXQgaXMgdGhlIGFwcCB0aGF0IGRldGVybWluZXMgd2hldGhlciB0byBlbmFibGUgb3IgZGlzYWJsZSBkYXRhIG1lc3NhZ2luZy5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAgICovXHJcbiAgICB0dXJuT2ZmUHVzaCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBvYnRhaW4gYW4gQUFJRCBpbiBzeW5jaHJvbm91cyBtb2RlLiBCZWZvcmUgYXBwbHlpbmcgZm9yIGEgdG9rZW4sIGFuIGFwcCBjYWxscyB0aGlzIG1ldGhvZCB0byBvYnRhaW4gaXRzIHVuaXF1ZSBBQUlELiBUaGUgSFVBV0VJIFB1c2ggc2VydmVyIGdlbmVyYXRlcyBhIHRva2VuIGZvciB0aGUgYXBwIGJhc2VkIG9uIHRoZSBBQUlELiBJZiB0aGUgQUFJRCBvZiB0aGUgYXBwIGNoYW5nZXMsIGEgbmV3IHRva2VuIHdpbGwgYmUgZ2VuZXJhdGVkIG5leHQgdGltZSB3aGVuIHRoZSBhcHAgYXBwbGllcyBmb3IgYSB0b2tlbi4gSWYgYW4gYXBwIG5lZWRzIHRvIHJlcG9ydCBzdGF0aXN0aWNzIGV2ZW50cywgaXQgbXVzdCBjYXJyeSB0aGUgQUFJRCBhcyBpdHMgdW5pcXVlIElELlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICAgKi9cclxuICAgIGdldElkKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gb2J0YWluIGFuIEFBSUQgaW4gYXN5bmNocm9ub3VzIG1vZGUuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgICAqL1xyXG4gICAgZ2V0QUFJRCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIG9idGFpbiBhIHRva2VuIHJlcXVpcmVkIGZvciBhY2Nlc3NpbmcgSFVBV0VJIFB1c2ggS2l0LiBJZiB0aGVyZSBpcyBubyBsb2NhbCBBQUlELCB0aGlzIG1ldGhvZCB3aWxsIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGUgYW4gQUFJRCB3aGVuIGl0IGlzIGNhbGxlZCBiZWNhdXNlIHRoZSBIVUFXRUkgUHVzaCBLaXQgc2VydmVyIG5lZWRzIHRvIGdlbmVyYXRlIGEgdG9rZW4gYmFzZWQgb24gdGhlIEFBSUQuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgICAqIEBwYXJhbXMgc2NvcGUgPyA6IFN0cmluZ1xyXG4gICAgICovXHJcbiAgICBnZXRUb2tlbihzY29wZT86IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbnMgYSB0b2tlbiB0aGF0IGEgdGFyZ2V0IGFwcCBkZXZlbG9wZXIgYXBwbGllcyBmb3IgYSBzZW5kZXIgdG8gaW50ZWdyYXRlIFB1c2ggS2l0IGluIHRoZSBtdWx0aS1zZW5kZXIgc2NlbmFyaW8uXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgICAqIEBwYXJhbXMgc3ViamVjdElkID8gOiBTdHJpbmdcclxuICAgICAqL1xyXG4gICAgZ2V0VG9rZW5XaXRoU3ViamVjdElkKHN1YmplY3RJZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBvYnRhaW4gdGhlIGdlbmVyYXRpb24gdGltZXN0YW1wIG9mIGFuIEFBSUQuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgICAqL1xyXG4gICAgZ2V0Q3JlYXRpb25UaW1lKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gZGVsZXRlIGEgbG9jYWwgQUFJRCBhbmQgaXRzIGdlbmVyYXRpb24gdGltZXN0YW1wLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZUFBSUQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gZGVsZXRlIGEgdG9rZW4uIEFmdGVyIGEgdG9rZW4gaXMgZGVsZXRlZCwgdGhlIGNvcnJlc3BvbmRpbmcgQUFJRCB3aWxsIG5vdCBiZSBkZWxldGVkLiBUaGlzIG1ldGhvZCBpcyBhIHN5bmNocm9ub3VzIG1ldGhvZC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAgICogQHBhcmFtcyBzY29wZSA/IDogU3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZVRva2VuKHNjb3BlPzogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZXMgYSB0b2tlbiB0aGF0IGEgdGFyZ2V0IGFwcCBkZXZlbG9wZXIgYXBwbGllcyBmb3IgYSBzZW5kZXIgdG8gaW50ZWdyYXRlIFB1c2ggS2l0IGluIHRoZSBtdWx0aS1zZW5kZXIgc2NlbmFyaW8uXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgICAqIEBwYXJhbXMgc3ViamVjdElkID8gOiBTdHJpbmdcclxuICAgICAqL1xyXG4gICAgZGVsZXRlVG9rZW5XaXRoU3ViamVjdElkKHN1YmplY3RJZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBzdWJzY3JpYmUgdG8gdG9waWNzIGluIGFzeW5jaHJvbm91cyBtb2RlLiBUaGUgSFVBV0VJIFB1c2ggS2l0IHRvcGljIG1lc3NhZ2luZyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHNlbmQgbWVzc2FnZXMgdG8gbXVsdGlwbGUgZGV2aWNlcyB3aG9zZSB1c2VycyBoYXZlIHN1YnNjcmliZWQgdG8gYSBzcGVjaWZpYyB0b3BpYy4gWW91IGNhbiB3cml0ZSBtZXNzYWdlcyBhYm91dCB0aGUgdG9waWMgYXMgcmVxdWlyZWQsIGFuZCBIVUFXRUkgUHVzaCBLaXQgZGV0ZXJtaW5lcyB0aGUgcmVsZWFzZSBwYXRoIGFuZCBzZW5kcyBtZXNzYWdlcyB0byB0aGUgY29ycmVjdCBkZXZpY2VzIGluIGEgcmVsaWFibGUgbWFubmVyLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRvcGljIFRvcGljIHRvIGJlIHN1YnNjcmliZWQgdG8uXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgICAqL1xyXG4gICAgc3Vic2NyaWJlKHRvcGljOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byB1bnN1YnNjcmliZSBmcm9tIHRvcGljcyB0aGF0IGFyZSBzdWJzY3JpYmVkIHRvIHRocm91Z2ggdGhlIHN1YnNjcmliZSBtZXRob2QuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdG9waWMgVG9waWMgdG8gYmUgdW5zdWJzY3JpYmVkIHRvLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICAgKi9cclxuICAgIHVuc3Vic2NyaWJlKHRvcGljOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB3aGV0aGVyIHRvIGVuYWJsZSBhdXRvbWF0aWMgaW5pdGlhbGl6YXRpb24uIElmIHRoZSBlbmFibGUgcGFyYW1ldGVyIGlzIHNldCB0byB0cnVlLCB0aGUgU0RLIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVzIGFuIEFBSUQgYW5kIGFwcGxpZXMgZm9yIGEgdG9rZW4uXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGJvb2xlYW4+XHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWQgSW5kaWNhdGVzIHdoZXRoZXIgdG8gZW5hYmxlIGF1dG9tYXRpYyBpbml0aWFsaXphdGlvbi5cclxuICAgICAqL1xyXG4gICAgc2V0QXV0b0luaXRFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldE9kaWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBjaGVjayB3aGV0aGVyIGF1dG9tYXRpYyBpbml0aWFsaXphdGlvbiBpcyBlbmFibGVkLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICAgKi9cclxuICAgIGlzQXV0b0luaXRFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0SW5pdGlhbE5vdGlmaWNhdGlvbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2VuZFJlbW90ZU1lc3NhZ2UocmVtb3RlTWVzc2FnZTogUmVtb3RlTWVzc2FnZU9iamVjdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0QmFja2dyb3VuZEZpbGUoZmlsZVBhdGg6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0SXRlbShrZXk6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZW1vdmVCYWNrZ3JvdW5kRmlsZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gICAgcGx1Z2luTmFtZTogXCJIbXNMb2NhbE5vdGlmaWNhdGlvblwiLFxyXG4gICAgcGx1Z2luOiBcIkBobXNjb3JlL2NvcmRvdmEtcGx1Z2luLWhtcy1wdXNoXCIsXHJcbiAgICBwbHVnaW5SZWY6IFwiSG1zTG9jYWxOb3RpZmljYXRpb25cIixcclxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxyXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIbXNMb2NhbE5vdGlmaWNhdGlvbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAgIEF0dHIgPSBBdHRyO1xyXG4gICAgSW1wb3J0YW5jZSA9IEltcG9ydGFuY2U7XHJcbiAgICBQcmlvcml0eSA9IFByaW9yaXR5O1xyXG4gICAgUmVwZWF0VHlwZSA9IFJlcGVhdFR5cGU7XHJcbiAgICBWaXNpYmlsaXR5ID0gVmlzaWJpbGl0eTtcclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgbG9jYWxOb3RpZmljYXRpb24oXHJcbiAgICAgICAgbG9jYWxOb3RpZmljYXRpb246IExvY2FsTm90aWZpY2F0aW9uT2JqZWN0XHJcbiAgICApOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgbG9jYWxOb3RpZmljYXRpb25TY2hlZHVsZShcclxuICAgICAgICBsb2NhbE5vdGlmaWNhdGlvbjogTG9jYWxOb3RpZmljYXRpb25PYmplY3RcclxuICAgICk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBjYW5jZWxBbGxOb3RpZmljYXRpb25zKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgY2FuY2VsTm90aWZpY2F0aW9ucygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGNhbmNlbFNjaGVkdWxlZE5vdGlmaWNhdGlvbnMoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBjYW5jZWxOb3RpZmljYXRpb25zV2l0aElkKGlkOiBudW1iZXJbXSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgY2FuY2VsTm90aWZpY2F0aW9uc1dpdGhJZFRhZyhpZFRhZzogSWRUYWdbXSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgY2FuY2VsTm90aWZpY2F0aW9uc1dpdGhUYWcodGFnOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldE5vdGlmaWNhdGlvbnMoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldFNjaGVkdWxlZE5vdGlmaWNhdGlvbnMoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldENoYW5uZWxzKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBjaGFubmVsRXhpc3RzKGNoYW5uZWxJZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBjaGFubmVsQmxvY2tlZChjaGFubmVsSWQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZGVsZXRlQ2hhbm5lbChjaGFubmVsSWQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiBcIkhtc1B1c2hFdmVudFwiLFxyXG4gICAgcGx1Z2luOiBcIkBobXNjb3JlL2NvcmRvdmEtcGx1Z2luLWhtcy1wdXNoXCIsXHJcbiAgICBwbHVnaW5SZWY6IFwiSG1zUHVzaEV2ZW50XCIsXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcclxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSG1zUHVzaEV2ZW50IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIG9uUmVtb3RlTWVzc2FnZVJlY2VpdmVkKGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBvblRva2VuUmVjZWl2ZWQoY2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIG9uVG9rZW5FcnJvcihjYWxsYmFjazogKGRhdGE6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgb25QdXNoTWVzc2FnZVNlbnQoY2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIG9uUHVzaE1lc3NhZ2VTZW50RXJyb3IoY2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIG9uUHVzaE1lc3NhZ2VTZW50RGVsaXZlcmVkKGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBvbkxvY2FsTm90aWZpY2F0aW9uQWN0aW9uKGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBvbk5vdGlmaWNhdGlvbk9wZW5lZEFwcChjYWxsYmFjazogKGRhdGE6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgb25NdWx0aVNlbmRlclRva2VuUmVjZWl2ZWRFdmVudChjYWxsYmFjazogKGRhdGE6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgb25NdWx0aVNlbmRlclRva2VuRXJyb3JFdmVudChjYWxsYmFjazogKGRhdGE6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBSRU1PVEVfREFUQV9NRVNTQUdFX1JFQ0VJVkVEID0gXCJSRU1PVEVfREFUQV9NRVNTQUdFX1JFQ0VJVkVEXCI7XHJcbiAgICBUT0tFTl9SRUNFSVZFRF9FVkVOVCA9IFwiVE9LRU5fUkVDRUlWRURfRVZFTlRcIjtcclxuICAgIE9OX1RPS0VOX0VSUk9SX0VWRU5UID0gXCJPTl9UT0tFTl9FUlJPUl9FVkVOVFwiO1xyXG4gICAgTk9USUZJQ0FUSU9OX09QRU5FRF9FVkVOVCA9IFwiTk9USUZJQ0FUSU9OX09QRU5FRF9FVkVOVFwiO1xyXG4gICAgTE9DQUxfTk9USUZJQ0FUSU9OX0FDVElPTl9FVkVOVCA9IFwiTE9DQUxfTk9USUZJQ0FUSU9OX0FDVElPTl9FVkVOVFwiO1xyXG4gICAgT05fUFVTSF9NRVNTQUdFX1NFTlQgPSBcIk9OX1BVU0hfTUVTU0FHRV9TRU5UXCI7XHJcbiAgICBPTl9QVVNIX01FU1NBR0VfU0VOVF9FUlJPUiA9IFwiT05fUFVTSF9NRVNTQUdFX1NFTlRfRVJST1JcIjtcclxuICAgIE9OX1BVU0hfTUVTU0FHRV9TRU5UX0RFTElWRVJFRCA9IFwiT05fUFVTSF9NRVNTQUdFX1NFTlRfREVMSVZFUkVEXCI7XHJcbiAgICBPTl9NVUxUSV9TRU5ERVJfVE9LRU5fRVJST1JfRVZFTlQgPSBcIk9OX01VTFRJX1NFTkRFUl9UT0tFTl9FUlJPUl9FVkVOVFwiO1xyXG4gICAgT05fTVVMVElfU0VOREVSX1RPS0VOX1JFQ0VJVkVEX0VWRU5UID0gXCJPTl9NVUxUSV9TRU5ERVJfVE9LRU5fUkVDRUlWRURfRVZFTlRcIjtcclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiBcIkhtc1B1c2hQcm9maWxlXCIsXHJcbiAgICBwbHVnaW46IFwiQGhtc2NvcmUvY29yZG92YS1wbHVnaW4taG1zLXB1c2hcIixcclxuICAgIHBsdWdpblJlZjogXCJIbXNQdXNoUHJvZmlsZVwiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhtc1B1c2hQcm9maWxlIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gICAgSFVBV0VJX1BST0ZJTEUgPSAxO1xyXG4gICAgQ1VTVE9NX1BST0ZJTEUgPSAyO1xyXG4gICAgVU5ERUZJTkVEX1BST0ZJTEUgPSAtMTtcclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBpc1N1cHBvcnRQcm9maWxlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgYWRkUHJvZmlsZSh0eXBlOiBudW1iZXIsIHByb2ZpbGVJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGFkZFByb2ZpbGVXaXRoU3ViamVjdElkKFxyXG4gICAgICAgIHN1YmplY3RJZDogc3RyaW5nLFxyXG4gICAgICAgIHR5cGU6IG51bWJlcixcclxuICAgICAgICBwcm9maWxlSWQ6IHN0cmluZ1xyXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGRlbGV0ZVByb2ZpbGUocHJvZmlsZUlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZGVsZXRlUHJvZmlsZVdpdGhTdWJqZWN0SWQoXHJcbiAgICAgICAgc3ViamVjdElkOiBzdHJpbmcsXHJcbiAgICAgICAgcHJvZmlsZUlkOiBzdHJpbmdcclxuICAgICk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBIbXNQdXNoUmVzdWx0Q29kZSB7XHJcbiAgICAvLyBTdWNjZXNzXHJcbiAgICBTVUNDRVNTID0gXCIwXCIsXHJcblxyXG4gICAgLy8gRXJyb3JcclxuICAgIEVSUk9SID0gXCItMVwiLFxyXG5cclxuICAgIC8vIEJ1bmRsZSBpcyBudWxsLCBleGNlcHRpb25cclxuICAgIE5VTExfQlVORExFID0gXCIzMzNcIixcclxuXHJcbiAgICAvLyBZb3UgZG8gbm90IGhhdmUgYSB0b2tlbi4gQXBwbHkgZm9yIGEgdG9rZW4uXHJcbiAgICBFUlJPUl9OT19UT0tFTiA9IFwiOTA3MTIyMDMwXCIsXHJcblxyXG4gICAgLy8gVGhlIGN1cnJlbnQgbmV0d29yayBpcyB1bmF2YWlsYWJsZS4gQ2hlY2sgdGhlIG5ldHdvcmsgY29ubmVjdGlvbi5cclxuICAgIEVSUk9SX05PX05FVFdPUksgPSBcIjkwNzEyMjAzMVwiLFxyXG5cclxuICAgIC8vIFRoZSB0b2tlbiBoYXMgZXhwaXJlZC4gRGVsZXRlIHRoZSB0b2tlbiBhbmQgYXBwbHkgZm9yIGEgbmV3IG9uZS5cclxuICAgIEVSUk9SX1RPS0VOX0lOVkFMSUQgPSBcIjkwNzEyMjAzMlwiLFxyXG5cclxuICAgIC8vIElmIHRoZSBQdXNoIHNlcnZpY2UgaXMgdW5hdmFpbGFibGUsIGNvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gICAgRVJST1JfU0VSVklDRV9OT1RfQVZBSUxBQkxFID0gXCI5MDcxMjIwNDZcIixcclxuXHJcbiAgICAvLyBJZiB0aGUgUHVzaCBzZXJ2ZXIgcmV0dXJucyBhbiBlcnJvciwgY29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXHJcbiAgICBFUlJPUl9QVVNIX1NFUlZFUiA9IFwiOTA3MTIyMDQ3XCIsXHJcblxyXG4gICAgLy8gVW5rbm93biBlcnJvci4gQ29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXHJcbiAgICBFUlJPUl9VTktOT1dOID0gXCI5MDcxMjIwNDVcIixcclxuXHJcbiAgICAvLyBUaGUgbnVtYmVyIG9mIHN1YnNjcmliZWQgdG9waWNzIGV4Y2VlZHMgMjAwMC5cclxuICAgIEVSUk9SX1RPUElDX0VYQ0VFRCA9IFwiOTA3MTIyMDM0XCIsXHJcblxyXG4gICAgLy8gRmFpbGVkIHRvIHNlbmQgdGhlIHN1YnNjcmlwdGlvbiB0b3BpYy4gQ29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXHJcbiAgICBFUlJPUl9UT1BJQ19TRU5EID0gXCI5MDcxMjIwMzVcIixcclxuXHJcbiAgICAvLyBQdXNoIHJpZ2h0cyBhcmUgbm90IGVuYWJsZWQuIEVuYWJsZSB0aGUgc2VydmljZSBhbmQgc2V0IHB1c2ggc2VydmljZSBwYXJhbWV0ZXJzIGF0IEFwcEdhbGxlcnkgQ29ubmVjdC5cclxuICAgIEVSUk9SX05PX1JJR0hUID0gXCI5MDcxMjIwMzZcIixcclxuXHJcbiAgICAvLyBGYWlsZWQgdG8gYXBwbHkgZm9yIHRoZSB0b2tlbi4gQ29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXHJcbiAgICBFUlJPUl9HRVRfVE9LRU5fRVJSID0gXCI5MDcxMjIwMzdcIixcclxuXHJcbiAgICAvLyBObyBzdG9yYWdlIGxvY2F0aW9uIGlzIHNlbGVjdGVkIGZvciB0aGUgYXBwbGljYXRpb24gb3IgdGhlIHN0b3JhZ2UgbG9jYXRpb24gaXMgaW52YWxpZC5cclxuICAgIEVSUk9SX1NUT1JBR0VfTE9DQVRJT05fRU1QVFkgPSBcIjkwNzEyMjAzOFwiLFxyXG5cclxuICAgIC8vIEZhaWxlZCB0byBhcHBseSBmb3IgYSB0b2tlbi4gQ3Jvc3MtcmVnaW9uIHRva2VuIGFwcGxpY2F0aW9uIGlzIG5vdCBhbGxvd2VkLlxyXG4gICAgRVJST1JfTk9UX0FMTE9XX0NST1NTX0FQUExZID0gXCI5MDcxMjIwNTNcIixcclxuXHJcbiAgICAvLyBUaGUgbWVzc2FnZSBib2R5IHNpemUgZXhjZWVkcyB0aGUgbWF4aW11bS5cclxuICAgIEVSUk9SX1NJWkUgPSBcIjkwNzEyMjA0MVwiLFxyXG5cclxuICAgIC8vIFRoZSBtZXNzYWdlIGNvbnRhaW5zIGludmFsaWQgcGFyYW1ldGVycy5cclxuICAgIEVSUk9SX0lOVkFMSURfUEFSQU1FVEVSUyA9IFwiOTA3MTIyMDQyXCIsXHJcblxyXG4gICAgLy8gVGhlIG51bWJlciBvZiBzZW50IG1lc3NhZ2VzIHJlYWNoZXMgdGhlIHVwcGVyIGxpbWl0LiBUaGUgbWVzc2FnZXMgd2lsbCBiZSBkaXNjYXJkZWQuXHJcbiAgICBFUlJPUl9UT09fTUFOWV9NRVNTQUdFUyA9IFwiOTA3MTIyMDQzXCIsXHJcblxyXG4gICAgLy8gVGhlIG1lc3NhZ2UgbGlmZXRpbWUgZXhwaXJlcyBiZWZvcmUgdGhlIG1lc3NhZ2UgaXMgc3VjY2Vzc2Z1bGx5IHNlbnQgdG8gdGhlIEFQUCBzZXJ2ZXIuXHJcbiAgICBFUlJPUl9UVExfRVhDRUVERUQgPSBcIjkwNzEyMjA0NFwiLFxyXG5cclxuICAgIC8vICBIdWF3ZWkgTW9iaWxlIFNlcnZpY2VzIChBUEspIGNhbid0IGNvbm5lY3QgIEh1YXdlaSBQdXNoICBLaXQuXHJcbiAgICBFUlJPUl9ITVNfQ0xJRU5UX0FQSSA9IFwiOTA3MTIyMDQ4XCIsXHJcblxyXG4gICAgLy8gVGhlIGN1cnJlbnQgRU1VSSB2ZXJzaW9uIGlzIHRvbyBlYXJseSB0byB1c2UgdGhlIGNhcGFiaWxpdHkuXHJcbiAgICBFUlJPUl9PUEVSQVRJT05fTk9UX1NVUFBPUlRFRCA9IFwiOTA3MTIyMDQ5XCIsXHJcblxyXG4gICAgLy8gVGhlIG9wZXJhdGlvbiBjYW5ub3QgYmUgcGVyZm9ybWVkIGluIHRoZSBtYWluIHRocmVhZC5cclxuICAgIEVSUk9SX01BSU5fVEhSRUFEID0gXCI5MDcxMjIwNTBcIixcclxuXHJcbiAgICAvLyBUaGUgZGV2aWNlIGNlcnRpZmljYXRlIGF1dGhlbnRpY2F0aW9uIGZhaWxzLlxyXG4gICAgRVJST1JfSE1TX0RFVklDRV9BVVRIX0ZBSUxFRF9TRUxGX01BUFBJTkcgPSBcIjkwNzEyMjA1MVwiLFxyXG5cclxuICAgIC8vIEZhaWxlZCB0byBiaW5kIHRoZSBzZXJ2aWNlLlxyXG4gICAgRVJST1JfQklORF9TRVJWSUNFX1NFTEZfTUFQUElORyA9IFwiOTA3MTIyMDUyXCIsXHJcblxyXG4gICAgLy8gVGhlIFNESyBpcyBiZWluZyBhdXRvbWF0aWNhbGx5IGluaXRpYWxpemVkLiBUcnkgYWdhaW4gbGF0ZXIuXHJcbiAgICBFUlJPUl9BVVRPX0lOSVRJQUxJWklORyA9IFwiOTA3MTIyMDU0XCIsXHJcblxyXG4gICAgLypUaGUgaW5wdXQgcGFyYW1ldGVyIGlzIGluY29ycmVjdC4gQ2hlY2sgd2hldGhlciB0aGUgcmVsYXRlZCBjb25maWd1cmF0aW9uIGluZm9ybWF0aW9uIGlzIGNvcnJlY3QuXHJcbiAgICAgKiBFeGFtcGxlOiBhcHBfaWQgaW4gdGhlIGFnY29ubmVjdCAtIHNlcnZpY2VzLmpzb24gZmlsZTtcclxuICAgICAqIENoZWNrIHdoZXRoZXIgdGhlIGJ1aWxkLmdyYWRsZSBmaWxlIGlzIGNvbmZpZ3VyZWQgd2l0aCB0aGUgY2VydGlmaWNhdGUgc2lnbmF0dXJlLlxyXG4gICAgICovXHJcbiAgICBFUlJPUl9BUkdVTUVOVFNfSU5WQUxJRCA9IFwiOTA3MTM1MDAwXCIsXHJcblxyXG4gICAgLy8gSW50ZXJuYWwgUHVzaCBlcnJvci4gQ29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQgZW5naW5lZXJzLlxyXG4gICAgRVJST1JfSU5URVJOQUxfRVJST1IgPSBcIjkwNzEzNTAwMVwiLFxyXG5cclxuICAgIC8vIFRoZSBzZXJ2aWNlIGRvZXMgbm90IGV4aXN0LiBUaGUgaW52b2tlZCBpbnRlcmZhY2UgZG9lcyBub3QgZXhpc3QuXHJcbiAgICBFUlJPUl9OQU1JTkdfSU5WQUxJRCA9IFwiOTA3MTM1MDAyXCIsXHJcblxyXG4gICAgLy8gVGhlIEFwaUNsaWVudCBvYmplY3QgaXMgaW52YWxpZC5cclxuICAgIEVSUk9SX0NMSUVOVF9BUElfSU5WQUxJRCA9IFwiOTA3MTM1MDAzXCIsXHJcblxyXG4gICAgLy8gSW52b2tpbmcgQUlETCB0aW1lcyBvdXQuIENvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gICAgRVJST1JfRVhFQ1VURV9USU1FT1VUID0gXCI5MDcxMzUwMDRcIixcclxuXHJcbiAgICAvLyBUaGUgY3VycmVudCBhcmVhIGRvZXMgbm90IHN1cHBvcnQgdGhpcyBzZXJ2aWNlLlxyXG4gICAgRVJST1JfTk9UX0lOX1NFUlZJQ0UgPSBcIjkwNzEzNTAwNVwiLFxyXG5cclxuICAgIC8vIElmIHRoZSBBSURMIGNvbm5lY3Rpb24gc2Vzc2lvbiBpcyBpbnZhbGlkLCBjb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICAgIEVSUk9SX1NFU1NJT05fSU5WQUxJRCA9IFwiOTA3MTM1MDA2XCIsXHJcblxyXG4gICAgLy8gQW4gZXJyb3Igb2NjdXJyZWQgd2hlbiBpbnZva2luZyBhbiB1bnNwZWNpZmllZCBBUEkuXHJcbiAgICBFUlJPUl9BUElfTk9UX1NQRUNJRklFRCA9IFwiMTAwMlwiLFxyXG5cclxuICAgIC8qIEZhaWxlZCB0byBpbnZva2UgdGhlIGdhdGV3YXkgdG8gcXVlcnkgdGhlIGFwcGxpY2F0aW9uIHNjb3BlLlxyXG4gICAgICogQ2hlY2sgd2hldGhlciB0aGUgY3VycmVudCBhcHAgaGFzIGJlZW4gY3JlYXRlZCBhbmQgZW5hYmxlZCBpbiBBcHBHYWxsZXJ5IENvbm5lY3QuXHJcbiAgICAgKiBJZiB5ZXMsIGNvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gICAgICovXHJcbiAgICBFUlJPUl9HRVRfU0NPUEVfRVJST1IgPSBcIjkwNzEzNTcwMFwiLFxyXG4gICAgLyogU2NvcGUgaXMgbm90IGNvbmZpZ3VyZWQgb24gdGhlIEFwcEdhbGxlcnkgQ29ubmVjdC5cclxuICAgICAqIENoZWNrIHdoZXRoZXIgdGhlIGN1cnJlbnQgYXBwIGhhcyBiZWVuIGNyZWF0ZWQgYW5kIGVuYWJsZWQgaW4gQXBwR2FsbGVyeSBDb25uZWN0LlxyXG4gICAgICogSWYgeWVzLCBjb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICAgICAqL1xyXG4gICAgRVJST1JfU0NPUEVfTElTVF9FTVBUWSA9IFwiOTA3MTM1NzAxXCIsXHJcblxyXG4gICAgLyogVGhlIGNlcnRpZmljYXRlIGZpbmdlcnByaW50IGlzIG5vdCBjb25maWd1cmVkIG9uIHRoZSBBcHBHYWxsZXJ5IENvbm5lY3QuXHJcbiAgICAgKiAxLiBDaGVjayB3aGV0aGVyIHlvdXIgcGhvbmUgY2FuIGFjY2VzcyB0aGUgSW50ZXJuZXQuXHJcbiAgICAgKiAyLiBDaGVjayB3aGV0aGVyIHRoZSBjb3JyZWN0IGNlcnRpZmljYXRlIGZpbmdlcnByaW50IGlzIGNvbmZpZ3VyZWQgaW4gQXBwR2FsbGVyeSBDb25uZWN0LiBGb3IgZGV0YWlscywgc2VlIEFwcEdhbGxlcnkgQ29ubmVjdCBjb25maWd1cmF0aW9uIGluIERldmVsb3BtZW50IFByZXBhcmF0aW9ucy5cclxuICAgICAqIDMuIElmIHRoZSBjaGVjayByZXN1bHQgaXMgY29ycmVjdCwgY29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXHJcbiAgICAgKi9cclxuICAgIEVSUk9SX0NFUlRfRklOR0VSUFJJTlRfRU1QVFkgPSBcIjkwNzEzNTcwMlwiLFxyXG5cclxuICAgIC8vIFBlcm1pc3Npb24gaXMgbm90IGNvbmZpZ3VyZWQgb24gdGhlIEFwcEdhbGxlcnkgQ29ubmVjdC5cclxuICAgIEVSUk9SX1BFUk1JU1NJT05fTElTVF9FTVBUWSA9IFwiOTA3MTM1NzAzXCIsXHJcblxyXG4gICAgLy8gVGhlIGF1dGhlbnRpY2F0aW9uIGluZm9ybWF0aW9uIG9mIHRoZSBhcHBsaWNhdGlvbiBkb2VzIG5vdCBleGlzdC5cclxuICAgIEVSUk9SX0FVVEhfSU5GT19OT1RfRVhJU1QgPSBcIjYwMDJcIixcclxuXHJcbiAgICAvLyBBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgY2VydGlmaWNhdGUgZmluZ2VycHJpbnQgdmVyaWZpY2F0aW9uLiBDaGVjayB3aGV0aGVyIHRoZSBjb3JyZWN0IGNlcnRpZmljYXRlIGZpbmdlcnByaW50IGlzIGNvbmZpZ3VyZWQgaW4gQXBwR2FsbGVyeSBDb25uZWN0LiBGb3IgZGV0YWlscywgc2VlIEFwcEdhbGxlcnkgQ29ubmVjdCBjb25maWd1cmF0aW9uIGluIERldmVsb3BtZW50IFByZXBhcmF0aW9ucy5cclxuICAgIEVSUk9SX0NFUlRfRklOR0VSUFJJTlRfRVJST1IgPSBcIjYwMDNcIixcclxuXHJcbiAgICAvLyBJbnRlcmZhY2UgYXV0aGVudGljYXRpb246IFRoZSBwZXJtaXNzaW9uIGRvZXMgbm90IGV4aXN0IGFuZCBpcyBub3QgYXBwbGllZCBmb3IgaW4gQXBwR2FsbGVyeSBDb25uZWN0LlxyXG4gICAgRVJST1JfUEVSTUlTU0lPTl9OT1RfRVhJU1QgPSBcIjYwMDRcIixcclxuXHJcbiAgICAvLyBJbnRlcmZhY2UgYXV0aGVudGljYXRpb246IHVuYXV0aG9yaXplZC5cclxuICAgIEVSUk9SX1BFUk1JU1NJT05fTk9UX0FVVEhPUklaRUQgPSBcIjYwMDVcIixcclxuXHJcbiAgICAvLyBJbnRlcmZhY2UgYXV0aGVudGljYXRpb246IFRoZSBhdXRob3JpemF0aW9uIGV4cGlyZXMuXHJcbiAgICBFUlJPUl9QRVJNSVNTSU9OX0VYUElSRUQgPSBcIjYwMDZcIixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQXR0ciB7XHJcbiAgICBpZCA9IFwiaWRcIixcclxuICAgIG1lc3NhZ2UgPSBcIm1lc3NhZ2VcIixcclxuICAgIGZpcmVEYXRlID0gXCJmaXJlRGF0ZVwiLFxyXG4gICAgdGl0bGUgPSBcInRpdGxlXCIsXHJcbiAgICB0aWNrZXIgPSBcInRpY2tlclwiLFxyXG4gICAgc2hvd1doZW4gPSBcInNob3dXaGVuXCIsXHJcbiAgICBhdXRvQ2FuY2VsID0gXCJhdXRvQ2FuY2VsXCIsXHJcbiAgICBsYXJnZUljb24gPSBcImxhcmdlSWNvblwiLFxyXG4gICAgbGFyZ2VJY29uVXJsID0gXCJsYXJnZUljb25VcmxcIixcclxuICAgIHNtYWxsSWNvbiA9IFwic21hbGxJY29uXCIsXHJcbiAgICBiaWdUZXh0ID0gXCJiaWdUZXh0XCIsXHJcbiAgICBzdWJUZXh0ID0gXCJzdWJUZXh0XCIsXHJcbiAgICBiaWdQaWN0dXJlVXJsID0gXCJiaWdQaWN0dXJlVXJsXCIsXHJcbiAgICBzaG9ydGN1dElkID0gXCJzaG9ydGN1dElkXCIsXHJcbiAgICBudW1iZXIgPSBcIm51bWJlclwiLFxyXG4gICAgY2hhbm5lbElkID0gXCJjaGFubmVsSWRcIixcclxuICAgIGNoYW5uZWxOYW1lID0gXCJjaGFubmVsTmFtZVwiLFxyXG4gICAgY2hhbm5lbERlc2NyaXB0aW9uID0gXCJjaGFubmVsRGVzY3JpcHRpb25cIixcclxuICAgIGNvbG9yID0gXCJjb2xvclwiLFxyXG4gICAgZ3JvdXAgPSBcImdyb3VwXCIsXHJcbiAgICBncm91cFN1bW1hcnkgPSBcImdyb3VwU3VtbWFyeVwiLFxyXG4gICAgcGxheVNvdW5kID0gXCJwbGF5U291bmRcIixcclxuICAgIHNvdW5kTmFtZSA9IFwic291bmROYW1lXCIsXHJcbiAgICB2aWJyYXRlID0gXCJ2aWJyYXRlXCIsXHJcbiAgICB2aWJyYXRlRHVyYXRpb24gPSBcInZpYnJhdGVEdXJhdGlvblwiLFxyXG4gICAgYWN0aW9ucyA9IFwiYWN0aW9uc1wiLFxyXG4gICAgaW52b2tlQXBwID0gXCJpbnZva2VBcHBcIixcclxuICAgIHRhZyA9IFwidGFnXCIsXHJcbiAgICByZXBlYXRUeXBlID0gXCJyZXBlYXRUeXBlXCIsXHJcbiAgICByZXBlYXRUaW1lID0gXCJyZXBlYXRUaW1lXCIsXHJcbiAgICBvbmdvaW5nID0gXCJvbmdvaW5nXCIsXHJcbiAgICBhbGxvd1doaWxlSWRsZSA9IFwiYWxsb3dXaGlsZUlkbGVcIixcclxuICAgIGRvbnROb3RpZnlJbkZvcmVncm91bmQgPSBcImRvbnROb3RpZnlJbkZvcmVncm91bmRcIixcclxuICAgIHByaW9yaXR5ID0gXCJwcmlvcml0eVwiLFxyXG4gICAgaW1wb3J0YW5jZSA9IFwiaW1wb3J0YW5jZVwiLFxyXG4gICAgdmlzaWJpbGl0eSA9IFwidmlzaWJpbGl0eVwiLFxyXG4gICAgZGF0YSA9IFwiZGF0YVwiLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBJbXBvcnRhbmNlIHtcclxuICAgIE1BWCA9IFwibWF4XCIsXHJcbiAgICBISUdIID0gXCJoaWdoXCIsXHJcbiAgICBERUZBVUxUID0gXCJkZWZhdWx0XCIsXHJcbiAgICBMT1cgPSBcImxvd1wiLFxyXG4gICAgTUlOID0gXCJtaW5cIixcclxuICAgIE5PTkUgPSBcIm5vbmVcIixcclxuICAgIFVOU1BFQ0lGSUVEID0gXCJ1bnNwZWNpZmllZFwiLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBQcmlvcml0eSB7XHJcbiAgICBNQVggPSBcIm1heFwiLFxyXG4gICAgSElHSCA9IFwiaGlnaFwiLFxyXG4gICAgREVGQVVMVCA9IFwiZGVmYXVsdFwiLFxyXG4gICAgTE9XID0gXCJsb3dcIixcclxuICAgIE1JTiA9IFwibWluXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFJlcGVhdFR5cGUge1xyXG4gICAgSE9VUiA9IFwiaG91clwiLFxyXG4gICAgTUlOVVRFID0gXCJtaW51dGVcIixcclxuICAgIERBWSA9IFwiZGF5XCIsXHJcbiAgICBXRUVLID0gXCJ3ZWVrXCIsXHJcbiAgICBDVVNUT01fVElNRSA9IFwiY3VzdG9tX3RpbWVcIixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVmlzaWJpbGl0eSB7XHJcbiAgICBQVUJMSUMgPSBcInB1YmxpY1wiLFxyXG4gICAgU0VDUkVUID0gXCJzZWNyZXRcIixcclxuICAgIFBSSVZBVEUgPSBcInByaXZhdGVcIixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUmVtb3RlTWVzc2FnZUJ1aWxkZXIge1xyXG4gICAgVE8gPSBcInRvXCIsXHJcbiAgICBNRVNTQUdFX0lEID0gXCJtZXNzYWdlSWRcIixcclxuICAgIE1FU1NBR0VfVFlQRSA9IFwibWVzc2FnZVR5cGVcIixcclxuICAgIFRUTCA9IFwidHRsXCIsXHJcbiAgICBDT0xMQVBTRV9LRVkgPSBcImNvbGxhcHNlS2V5XCIsXHJcbiAgICBSRUNFSVBUX01PREUgPSBcInJlY2VpcHRNb2RlXCIsXHJcbiAgICBTRU5EX01PREUgPSBcInNlbmRNb2RlXCIsXHJcbiAgICBEQVRBID0gXCJkYXRhXCIsXHJcbn1cclxuXHJcbmNsYXNzIENvcmRvdmFSZW1vdGVNZXNzYWdlIHtcclxuICAgIHN0YXRpYyBJTlNUQU5DRV9JRF9TQ09QRSA9IFwiSENNXCI7XHJcblxyXG4gICAgc3RhdGljIFBSSU9SSVRZX1VOS05PV04gPSAwO1xyXG4gICAgc3RhdGljIFBSSU9SSVRZX0hJR0ggPSAxO1xyXG4gICAgc3RhdGljIFBSSU9SSVRZX05PUk1BTCA9IDI7XHJcblxyXG4gICAgc3RhdGljIENPTExBUFNFS0VZID0gXCJjb2xsYXBzZUtleVwiO1xyXG4gICAgc3RhdGljIERBVEEgPSBcImRhdGFcIjtcclxuICAgIHN0YXRpYyBEQVRBT0ZNQVAgPSBcImRhdGFPZk1hcFwiO1xyXG4gICAgc3RhdGljIE1FU1NBR0VJRCA9IFwibWVzc2FnZUlkXCI7XHJcbiAgICBzdGF0aWMgTUVTU0FHRVRZUEUgPSBcIm1lc3NhZ2VUeXBlXCI7XHJcbiAgICBzdGF0aWMgT1JJR0lOQUxVUkdFTkNZID0gXCJvcmlnaW5hbFVyZ2VuY3lcIjtcclxuICAgIHN0YXRpYyBVUkdFTkNZID0gXCJ1cmdlbmN5XCI7XHJcbiAgICBzdGF0aWMgVFRMID0gXCJ0dGxcIjtcclxuICAgIHN0YXRpYyBTRU5UVElNRSA9IFwic2VudFRpbWVcIjtcclxuICAgIHN0YXRpYyBUTyA9IFwidG9cIjtcclxuICAgIHN0YXRpYyBGUk9NID0gXCJmcm9tXCI7XHJcbiAgICBzdGF0aWMgVE9LRU4gPSBcInRva2VuXCI7XHJcbiAgICBzdGF0aWMgQU5BTFlUSUNJTkZPID0gXCJhbmFseXRpY0luZm9cIjtcclxuICAgIHN0YXRpYyBBTkFMWVRJQ0lORk9NQVAgPSBcImFuYWx5dGljSW5mb01hcFwiO1xyXG5cclxuICAgIHN0YXRpYyBOT1RJRklDQVRJT04gPSB7XHJcbiAgICAgICAgVElUTEU6IFwidGl0bGVcIixcclxuICAgICAgICBUSVRMRUxPQ0FMSVpBVElPTktFWTogXCJ0aXRsZUxvY2FsaXphdGlvbktleVwiLFxyXG4gICAgICAgIFRJVExFTE9DQUxJWkFUSU9OQVJHUzogXCJ0aXRsZUxvY2FsaXphdGlvbkFyZ3NcIixcclxuICAgICAgICBCT0RZTE9DQUxJWkFUSU9OS0VZOiBcImJvZHlMb2NhbGl6YXRpb25LZXlcIixcclxuICAgICAgICBCT0RZTE9DQUxJWkFUSU9OQVJHUzogXCJib2R5TG9jYWxpemF0aW9uQXJnc1wiLFxyXG4gICAgICAgIEJPRFk6IFwiYm9keVwiLFxyXG4gICAgICAgIElDT046IFwiaWNvblwiLFxyXG4gICAgICAgIFNPVU5EOiBcIlNvdW5kXCIsXHJcbiAgICAgICAgVEFHOiBcIlRhZ1wiLFxyXG4gICAgICAgIENPTE9SOiBcIkNvbG9yXCIsXHJcbiAgICAgICAgQ0xJQ0tBQ1RJT046IFwiQ2xpY2tBY3Rpb25cIixcclxuICAgICAgICBDSEFOTkVMSUQ6IFwiQ2hhbm5lbElkXCIsXHJcbiAgICAgICAgSU1BR0VVUkw6IFwiSW1hZ2VVcmxcIixcclxuICAgICAgICBMSU5LOiBcIkxpbmtcIixcclxuICAgICAgICBOT1RJRllJRDogXCJOb3RpZnlJZFwiLFxyXG4gICAgICAgIFdIRU46IFwiV2hlblwiLFxyXG4gICAgICAgIExJR0hUU0VUVElOR1M6IFwiTGlnaHRTZXR0aW5nc1wiLFxyXG4gICAgICAgIEJBREdFTlVNQkVSOiBcIkJhZGdlTnVtYmVyXCIsXHJcbiAgICAgICAgSU1QT1JUQU5DRTogXCJJbXBvcnRhbmNlXCIsXHJcbiAgICAgICAgVElDS0VSOiBcIlRpY2tlclwiLFxyXG4gICAgICAgIFZJQlJBVEVDT05GSUc6IFwidmlicmF0ZUNvbmZpZ1wiLFxyXG4gICAgICAgIFZJU0lCSUxJVFk6IFwidmlzaWJpbGl0eVwiLFxyXG4gICAgICAgIElOVEVOVFVSSTogXCJpbnRlbnRVcmlcIixcclxuICAgICAgICBJU0FVVE9DQU5DRUw6IFwiaXNBdXRvQ2FuY2VsXCIsXHJcbiAgICAgICAgSVNMT0NBTE9OTFk6IFwiaXNMb2NhbE9ubHlcIixcclxuICAgICAgICBJU0RFRkFVTFRMSUdIVDogXCJpc0RlZmF1bHRMaWdodFwiLFxyXG4gICAgICAgIElTREVGQVVMVFNPVU5EOiBcImlzRGVmYXVsdFNvdW5kXCIsXHJcbiAgICAgICAgSVNERUZBVUxUVklCUkFURTogXCJpc0RlZmF1bHRWaWJyYXRlXCIsXHJcbiAgICB9O1xyXG4gICAgcmVtb3RlTXNnOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdGVNc2cgPSBvcHRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBwYXJzZSBhbGwgZWxlbWVudCx1bm9yZGVyZWRcclxuICAgICAqL1xyXG4gICAgcGFyc2VNc2dBbGxBdHRyaWJ1dGUoKSB7XHJcbiAgICAgICAgbGV0IHB1c2hSZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMucmVtb3RlTXNnKSB7XHJcbiAgICAgICAgICAgIHB1c2hSZXN1bHQgPSBwdXNoUmVzdWx0ICsga2V5ICsgXCIgOiBcIiArIHRoaXMucmVtb3RlTXNnW2tleV0gKyBcIlxcblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHVzaFJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogZ2V0Q29sbGFwc2VLZXkoKSBPYnRhaW5zIHRoZSBjbGFzc2lmaWNhdGlvbiBpZGVudGlmaWVyIChjb2xsYXBzZSBrZXkpIG9mIGEgbWVzc2FnZS5cclxuICAgICAqL1xyXG4gICAgZ2V0Q29sbGFwc2VLZXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLkNPTExBUFNFS0VZXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogZ2V0RGF0YSgpIE9idGFpbnMgdmFsaWQgY29udGVudCBkYXRhIG9mIGEgbWVzc2FnZS5cclxuICAgICAqL1xyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuREFUQV07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIGdldERhdGFPZk1hcCgpIGEgbWVzc2FnZSBtYXAuXHJcbiAgICAgKi9cclxuICAgIGdldERhdGFPZk1hcCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuREFUQU9GTUFQXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogZ2V0TWVzc2FnZUlkKCkgT2J0YWlucyB0aGUgSUQgb2YgYSBtZXNzYWdlLlxyXG4gICAgICovXHJcbiAgICBnZXRNZXNzYWdlSWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk1FU1NBR0VJRF07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIGdldE1lc3NhZ2VUeXBlKCkgT2J0YWlucyB0aGUgdHlwZSBvZiBhIG1lc3NhZ2UuXHJcbiAgICAgKi9cclxuICAgIGdldE1lc3NhZ2VUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5NRVNTQUdFVFlQRV07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIGdldE9yaWdpbmFsVXJnZW5jeSgpIE9idGFpbnMgdGhlIG9yaWdpbmFsIHByaW9yaXR5IG9mIGEgbWVzc2FnZS5cclxuICAgICAqL1xyXG4gICAgZ2V0T3JpZ2luYWxVcmdlbmN5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5PUklHSU5BTFVSR0VOQ1ldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBnZXRVcmdlbmN5KCkgT2J0YWlucyBwcmlvcml0eSBvZiBhIG1lc3NhZ2UuXHJcbiAgICAgKi9cclxuICAgIGdldFVyZ2VuY3koKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLlVSR0VOQ1ldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBnZXRUdGwoKSBPYnRhaW5zIHZhbGlkIGdldFR0bCBvZiBhIG1lc3NhZ2UuXHJcbiAgICAgKi9cclxuICAgIGdldFR0bCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuVFRMXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogZ2V0U2VudFRpbWUoKSBPYnRhaW5zIHRoZSB0aW1lIHdoZW4gYSBtZXNzYWdlIGlzIHNlbnQgZnJvbSB0aGUgc2VydmVyLlxyXG4gICAgICovXHJcbiAgICBnZXRTZW50VGltZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuU0VOVFRJTUVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBnZXRUbygpIE9idGFpbnMgdGhlIHJlY2lwaWVudCBvZiBhIG1lc3NhZ2UuXHJcbiAgICAgKi9cclxuICAgIGdldFRvKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5UT107XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIGdldEZyb20oKSBPYnRhaW5zIHRoZSBzZW5kZXIgb2YgYSBtZXNzYWdlLlxyXG4gICAgICovXHJcbiAgICBnZXRGcm9tKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5GUk9NXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogZ2V0VG9rZW4oKSBPYnRhaW5zIHZhbGlkIHRva2VuXHJcbiAgICAgKi9cclxuICAgIGdldFRva2VuKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5UT0tFTl07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QW5hbHl0aWNJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5BTkFMWVRJQ0lORk9dO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFuYWx5dGljSW5mb01hcCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuQU5BTFlUSUNJTkZPTUFQXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldFRpdGxlKCkgT2J0YWlucyB0aGUgdGl0bGUgb2YgYSBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIGdldE5vdGlmaWNhdGlvblRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVElUTEVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0VGl0bGVMb2NhbGl6YXRpb25LZXkoKSBPYnRhaW5zIHRoZSBrZXkgb2YgdGhlIGRpc3BsYXllZCB0aXRsZSBvZiBhIG5vdGlmaWNhdGlvbiBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIGdldFRpdGxlTG9jYWxpemF0aW9uS2V5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tcclxuICAgICAgICAgICAgQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLlRJVExFTE9DQUxJWkFUSU9OS0VZXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldFRpdGxlTG9jYWxpemF0aW9uQXJncygpIE9idGFpbnMgdmFyaWFibGUgcGFyYW1ldGVycyBvZiB0aGUgZGlzcGxheWVkIHRpdGxlIG9mIGEgbWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBnZXRUaXRsZUxvY2FsaXphdGlvbkFyZ3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW1xyXG4gICAgICAgICAgICBDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVElUTEVMT0NBTElaQVRJT05BUkdTXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldEJvZHlMb2NhbGl6YXRpb25LZXkoKSBPYnRhaW5zIHRoZSBrZXkgb2YgdGhlIGRpc3BsYXllZCBjb250ZW50IG9mIGEgbWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBnZXRCb2R5TG9jYWxpemF0aW9uS2V5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tcclxuICAgICAgICAgICAgQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkJPRFlMT0NBTElaQVRJT05LRVlcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0Qm9keUxvY2FsaXphdGlvbkFyZ3MoKSBPYnRhaW5zIHZhcmlhYmxlIHBhcmFtZXRlcnMgb2YgdGhlIGRpc3BsYXllZCBjb250ZW50IG9mIGEgbWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBnZXRCb2R5TG9jYWxpemF0aW9uQXJncygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbXHJcbiAgICAgICAgICAgIENvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5CT0RZTE9DQUxJWkFUSU9OQVJHU1xyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRCb2R5KCkgT2J0YWlucyB0aGUgYm9keSBvZiBhIG1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgZ2V0Qm9keSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkJPRFldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0SWNvbigpIE9idGFpbnMgdGhlIGljb24gb2YgYSBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIGdldEljb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JQ09OXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldFNvdW5kKCkgT2J0YWlucyB0aGUgc291bmQgZnJvbSBhIG1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgZ2V0U291bmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5TT1VORF07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRUYWcoKSBPYnRhaW5zIHRoZSB0YWcgZnJvbSBhIG1lc3NhZ2UgZm9yIG1lc3NhZ2Ugb3ZlcndyaXRpbmdcclxuICAgICAqL1xyXG4gICAgZ2V0VGFnKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVEFHXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldENvbG9yKCkgT2J0YWlucyB0aGUgY29sb3JzIG9mIGljb25zIGluIGEgbWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBnZXRDb2xvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkNPTE9SXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldENsaWNrQWN0aW9uKCkgT2J0YWlucyBhY3Rpb25zIHRyaWdnZXJlZCBieSBtZXNzYWdlIHRhcHBpbmdcclxuICAgICAqL1xyXG4gICAgZ2V0Q2xpY2tBY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5DTElDS0FDVElPTl07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRDaGFubmVsSWQoKSBPYnRhaW5zIElEcyBvZiBjaGFubmVscyB0aGF0IHN1cHBvcnQgdGhlIGRpc3BsYXkgb2YgbWVzc2FnZXNcclxuICAgICAqL1xyXG4gICAgZ2V0Q2hhbm5lbElkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uQ0hBTk5FTElEXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldEltYWdlVXJsKCkgT2J0YWlucyB0aGUgaW1hZ2UgVVJMIGZyb20gYSBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIGdldEltYWdlVXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSU1BR0VVUkxdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0TGluaygpIE9idGFpbnMgdGhlIFVSTCB0byBiZSBhY2Nlc3NlZCBmcm9tIGEgbWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBnZXRMaW5rKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uTElOS107XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXROb3RpZnlJZCgpIE9idGFpbnMgdGhlIHVuaXF1ZSBJRCBvZiBhIG1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgZ2V0Tm90aWZ5SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5OT1RJRllJRF07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRXaGVuKClcclxuICAgICAqL1xyXG4gICAgZ2V0V2hlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLldIRU5dO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0TGlnaHRTZXR0aW5ncygpXHJcbiAgICAgKi9cclxuICAgIGdldExpZ2h0U2V0dGluZ3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5MSUdIVFNFVFRJTkdTXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldEJhZGdlTnVtYmVyKClcclxuICAgICAqL1xyXG4gICAgZ2V0QmFkZ2VOdW1iZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5CQURHRU5VTUJFUl07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRJbXBvcnRhbmNlKClcclxuICAgICAqL1xyXG4gICAgZ2V0SW1wb3J0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklNUE9SVEFOQ0VdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0VGlja2VyKClcclxuICAgICAqL1xyXG4gICAgZ2V0VGlja2VyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVElDS0VSXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmdldFZpYnJhdGVDb25maWcoKVxyXG4gICAgICovXHJcbiAgICBnZXRWaWJyYXRlQ29uZmlnKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVklCUkFURUNPTkZJR107XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRWaXNpYmlsaXR5KClcclxuICAgICAqL1xyXG4gICAgZ2V0VmlzaWJpbGl0eSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLlZJU0lCSUxJVFldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246Z2V0SW50ZW50VXJpKClcclxuICAgICAqL1xyXG4gICAgZ2V0SW50ZW50VXJpKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSU5URU5UVVJJXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmlzQXV0b0NhbmNlbCgpXHJcbiAgICAgKi9cclxuICAgIGlzQXV0b0NhbmNlbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklTQVVUT0NBTkNFTF07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjpnZXRJbnRlbnRVcmkoKVxyXG4gICAgICovXHJcbiAgICBpc0xvY2FsT25seSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklTTE9DQUxPTkxZXTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90aWZpY2F0aW9uOmlzRGVmYXVsdExpZ2h0KClcclxuICAgICAqL1xyXG4gICAgaXNEZWZhdWx0TGlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JU0RFRkFVTFRMSUdIVF07XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE5vdGlmaWNhdGlvbjppc0RlZmF1bHRTb3VuZCgpXHJcbiAgICAgKi9cclxuICAgIGlzRGVmYXVsdFNvdW5kKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSVNERUZBVUxUU09VTkRdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RpZmljYXRpb246aXNEZWZhdWx0VmlicmF0ZSgpXHJcbiAgICAgKi9cclxuICAgIGlzRGVmYXVsdFZpYnJhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW1xyXG4gICAgICAgICAgICBDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSVNERUZBVUxUVklCUkFURVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn1cclxuXHJcbnR5cGUgTG9jYWxOb3RpZmljYXRpb25PYmplY3QgPSB7XHJcbiAgICBba2V5IGluIEF0dHJdPzogYW55O1xyXG59O1xyXG5cclxudHlwZSBSZW1vdGVNZXNzYWdlT2JqZWN0ID0ge1xyXG4gICAgW2tleSBpbiBSZW1vdGVNZXNzYWdlQnVpbGRlcl0/OiBhbnk7XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgSWRUYWcge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIHRhZzogc3RyaW5nO1xyXG59XHJcbiJdfQ==