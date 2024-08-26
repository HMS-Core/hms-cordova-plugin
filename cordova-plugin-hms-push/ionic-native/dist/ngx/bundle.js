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

'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var HmsPush = /** @class */ (function (_super) {
    tslib.__extends(HmsPush, _super);
    function HmsPush() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.HmsPushResultCode = exports.HmsPushResultCode;
        _this.CordovaRemoteMessage = CordovaRemoteMessage;
        _this.RemoteMessageBuilder = exports.RemoteMessageBuilder;
        _this.DEFAULT_TOKEN_SCOPE = "HCM";
        return _this;
    }
    /**
     * This method  initialized HmsPush.
     * @returns Promise<void>
     */
    HmsPush.prototype.init = function () { return core.cordova(this, "init", { "otherPromise": true }, arguments); };
    HmsPush.prototype.enableLogger = function () { return core.cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HmsPush.prototype.disableLogger = function () { return core.cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    /**
     * This method is used to disable the display of notification messages. If you want to control the display of notification messages in an app, you can call this method. This method applies to notification messages but not data messages. It is the app that determines whether to enable or disable data messaging.
     * @returns Promise<string>
     */
    HmsPush.prototype.turnOnPush = function () { return core.cordova(this, "turnOnPush", { "otherPromise": true }, arguments); };
    /**
     * This method is used to enable the display of notification messages. If you want to control the display of notification messages in an app, you can call this method. This method applies to notification messages but not data messages. It is the app that determines whether to enable or disable data messaging.
     * @returns Promise<string>
     */
    HmsPush.prototype.turnOffPush = function () { return core.cordova(this, "turnOffPush", { "otherPromise": true }, arguments); };
    /**
     * This method is used to obtain an AAID in synchronous mode. Before applying for a token, an app calls this method to obtain its unique AAID. The HUAWEI Push server generates a token for the app based on the AAID. If the AAID of the app changes, a new token will be generated next time when the app applies for a token. If an app needs to report statistics events, it must carry the AAID as its unique ID.
     * @returns Promise<string>
     */
    HmsPush.prototype.getId = function () { return core.cordova(this, "getId", { "otherPromise": true }, arguments); };
    /**
     * This method is used to obtain an AAID in asynchronous mode.
     * @returns Promise<string>
     */
    HmsPush.prototype.getAAID = function () { return core.cordova(this, "getAAID", { "otherPromise": true }, arguments); };
    /**
     * This method is used to obtain a token required for accessing HUAWEI Push Kit. If there is no local AAID, this method will automatically generate an AAID when it is called because the HUAWEI Push Kit server needs to generate a token based on the AAID.
     * @returns Promise<string>
     * @params scope ? : String
     */
    HmsPush.prototype.getToken = function (scope) { return core.cordova(this, "getToken", { "otherPromise": true }, arguments); };
    /**
     * Obtains a token that a target app developer applies for a sender to integrate Push Kit in the multi-sender scenario.
     * @returns Promise<string>
     * @params subjectId ? : String
     */
    HmsPush.prototype.getTokenWithSubjectId = function (subjectId) { return core.cordova(this, "getTokenWithSubjectId", { "otherPromise": true }, arguments); };
    /**
     * This method is used to obtain the generation timestamp of an AAID.
     * @returns Promise<string>
     */
    HmsPush.prototype.getCreationTime = function () { return core.cordova(this, "getCreationTime", { "otherPromise": true }, arguments); };
    /**
     * This method is used to delete a local AAID and its generation timestamp.
     * @returns Promise<string>
     */
    HmsPush.prototype.deleteAAID = function () { return core.cordova(this, "deleteAAID", { "otherPromise": true }, arguments); };
    /**
     * This method is used to delete a token. After a token is deleted, the corresponding AAID will not be deleted. This method is a synchronous method.
     * @returns Promise<string>
     * @params scope ? : String
     */
    HmsPush.prototype.deleteToken = function (scope) { return core.cordova(this, "deleteToken", { "otherPromise": true }, arguments); };
    /**
     * Deletes a token that a target app developer applies for a sender to integrate Push Kit in the multi-sender scenario.
     * @returns Promise<string>
     * @params subjectId ? : String
     */
    HmsPush.prototype.deleteTokenWithSubjectId = function (subjectId) { return core.cordova(this, "deleteTokenWithSubjectId", { "otherPromise": true }, arguments); };
    /**
     * This method is used to subscribe to topics in asynchronous mode. The HUAWEI Push Kit topic messaging function allows you to send messages to multiple devices whose users have subscribed to a specific topic. You can write messages about the topic as required, and HUAWEI Push Kit determines the release path and sends messages to the correct devices in a reliable manner.
     * @param {string} topic Topic to be subscribed to.
     * @returns Promise<string>
     */
    HmsPush.prototype.subscribe = function (topic) { return core.cordova(this, "subscribe", { "otherPromise": true }, arguments); };
    /**
     * This method is used to unsubscribe from topics that are subscribed to through the subscribe method.
     * @param {string} topic Topic to be unsubscribed to.
     * @returns Promise<string>
     */
    HmsPush.prototype.unsubscribe = function (topic) { return core.cordova(this, "unsubscribe", { "otherPromise": true }, arguments); };
    /**
     * Sets whether to enable automatic initialization. If the enable parameter is set to true, the SDK automatically generates an AAID and applies for a token.
     * @returns Promise<boolean>
     * @param {boolean} enabled Indicates whether to enable automatic initialization.
     */
    HmsPush.prototype.setAutoInitEnabled = function (enabled) { return core.cordova(this, "setAutoInitEnabled", { "otherPromise": true }, arguments); };
    HmsPush.prototype.getOdid = function () { return core.cordova(this, "getOdid", { "otherPromise": true }, arguments); };
    /**
     * This method is used to check whether automatic initialization is enabled.
     * @returns Promise<string>
     */
    HmsPush.prototype.isAutoInitEnabled = function () { return core.cordova(this, "isAutoInitEnabled", { "otherPromise": true }, arguments); };
    HmsPush.prototype.getInitialNotification = function () { return core.cordova(this, "getInitialNotification", { "otherPromise": true }, arguments); };
    HmsPush.prototype.sendRemoteMessage = function (remoteMessage) { return core.cordova(this, "sendRemoteMessage", { "otherPromise": true }, arguments); };
    HmsPush.prototype.setBackgroundFile = function (filePath) { return core.cordova(this, "setBackgroundFile", { "otherPromise": true }, arguments); };
    HmsPush.prototype.setItem = function (key, value) { return core.cordova(this, "setItem", { "otherPromise": true }, arguments); };
    HmsPush.prototype.getItem = function (key) { return core.cordova(this, "getItem", { "otherPromise": true }, arguments); };
    HmsPush.prototype.removeItem = function (key) { return core.cordova(this, "removeItem", { "otherPromise": true }, arguments); };
    HmsPush.prototype.removeBackgroundFile = function () { return core.cordova(this, "removeBackgroundFile", { "otherPromise": true }, arguments); };
    HmsPush.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HmsPush, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HmsPush.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HmsPush });
    HmsPush.pluginName = "HmsPush";
    HmsPush.plugin = "@hmscore/cordova-plugin-hms-push";
    HmsPush.pluginRef = "HmsPush";
    HmsPush.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HmsPush.platforms = ["Android"];
    HmsPush = tslib.__decorate([], HmsPush);
    return HmsPush;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HmsPush, decorators: [{
            type: i0.Injectable
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
    tslib.__extends(HmsLocalNotification, _super);
    function HmsLocalNotification() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Attr = exports.Attr;
        _this.Importance = exports.Importance;
        _this.Priority = exports.Priority;
        _this.RepeatType = exports.RepeatType;
        _this.Visibility = exports.Visibility;
        return _this;
    }
    HmsLocalNotification.prototype.localNotification = function (localNotification) { return core.cordova(this, "localNotification", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.localNotificationSchedule = function (localNotification) { return core.cordova(this, "localNotificationSchedule", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.cancelAllNotifications = function () { return core.cordova(this, "cancelAllNotifications", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.cancelNotifications = function () { return core.cordova(this, "cancelNotifications", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.cancelScheduledNotifications = function () { return core.cordova(this, "cancelScheduledNotifications", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.cancelNotificationsWithId = function (id) { return core.cordova(this, "cancelNotificationsWithId", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.cancelNotificationsWithIdTag = function (idTag) { return core.cordova(this, "cancelNotificationsWithIdTag", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.cancelNotificationsWithTag = function (tag) { return core.cordova(this, "cancelNotificationsWithTag", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.getNotifications = function () { return core.cordova(this, "getNotifications", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.getScheduledNotifications = function () { return core.cordova(this, "getScheduledNotifications", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.getChannels = function () { return core.cordova(this, "getChannels", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.channelExists = function (channelId) { return core.cordova(this, "channelExists", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.channelBlocked = function (channelId) { return core.cordova(this, "channelBlocked", { "otherPromise": true }, arguments); };
    HmsLocalNotification.prototype.deleteChannel = function (channelId) { return core.cordova(this, "deleteChannel", { "otherPromise": true }, arguments); };
    HmsLocalNotification.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HmsLocalNotification, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HmsLocalNotification.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HmsLocalNotification });
    HmsLocalNotification.pluginName = "HmsLocalNotification";
    HmsLocalNotification.plugin = "@hmscore/cordova-plugin-hms-push";
    HmsLocalNotification.pluginRef = "HmsLocalNotification";
    HmsLocalNotification.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HmsLocalNotification.platforms = ["Android"];
    HmsLocalNotification = tslib.__decorate([], HmsLocalNotification);
    return HmsLocalNotification;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HmsLocalNotification, decorators: [{
            type: i0.Injectable
        }], propDecorators: { localNotification: [], localNotificationSchedule: [], cancelAllNotifications: [], cancelNotifications: [], cancelScheduledNotifications: [], cancelNotificationsWithId: [], cancelNotificationsWithIdTag: [], cancelNotificationsWithTag: [], getNotifications: [], getScheduledNotifications: [], getChannels: [], channelExists: [], channelBlocked: [], deleteChannel: [] } });
var HmsPushEvent = /** @class */ (function (_super) {
    tslib.__extends(HmsPushEvent, _super);
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
    HmsPushEvent.prototype.onRemoteMessageReceived = function (callback) { return core.cordova(this, "onRemoteMessageReceived", { "otherPromise": true }, arguments); };
    HmsPushEvent.prototype.onTokenReceived = function (callback) { return core.cordova(this, "onTokenReceived", { "otherPromise": true }, arguments); };
    HmsPushEvent.prototype.onTokenError = function (callback) { return core.cordova(this, "onTokenError", { "otherPromise": true }, arguments); };
    HmsPushEvent.prototype.onPushMessageSent = function (callback) { return core.cordova(this, "onPushMessageSent", { "otherPromise": true }, arguments); };
    HmsPushEvent.prototype.onPushMessageSentError = function (callback) { return core.cordova(this, "onPushMessageSentError", { "otherPromise": true }, arguments); };
    HmsPushEvent.prototype.onPushMessageSentDelivered = function (callback) { return core.cordova(this, "onPushMessageSentDelivered", { "otherPromise": true }, arguments); };
    HmsPushEvent.prototype.onLocalNotificationAction = function (callback) { return core.cordova(this, "onLocalNotificationAction", { "otherPromise": true }, arguments); };
    HmsPushEvent.prototype.onNotificationOpenedApp = function (callback) { return core.cordova(this, "onNotificationOpenedApp", { "otherPromise": true }, arguments); };
    HmsPushEvent.prototype.onMultiSenderTokenReceivedEvent = function (callback) { return core.cordova(this, "onMultiSenderTokenReceivedEvent", { "otherPromise": true }, arguments); };
    HmsPushEvent.prototype.onMultiSenderTokenErrorEvent = function (callback) { return core.cordova(this, "onMultiSenderTokenErrorEvent", { "otherPromise": true }, arguments); };
    HmsPushEvent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HmsPushEvent, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HmsPushEvent.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HmsPushEvent });
    HmsPushEvent.pluginName = "HmsPushEvent";
    HmsPushEvent.plugin = "@hmscore/cordova-plugin-hms-push";
    HmsPushEvent.pluginRef = "HmsPushEvent";
    HmsPushEvent.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HmsPushEvent.platforms = ["Android"];
    HmsPushEvent = tslib.__decorate([], HmsPushEvent);
    return HmsPushEvent;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HmsPushEvent, decorators: [{
            type: i0.Injectable
        }], propDecorators: { onRemoteMessageReceived: [], onTokenReceived: [], onTokenError: [], onPushMessageSent: [], onPushMessageSentError: [], onPushMessageSentDelivered: [], onLocalNotificationAction: [], onNotificationOpenedApp: [], onMultiSenderTokenReceivedEvent: [], onMultiSenderTokenErrorEvent: [] } });
var HmsPushProfile = /** @class */ (function (_super) {
    tslib.__extends(HmsPushProfile, _super);
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
    HmsPushProfile.prototype.isSupportProfile = function () { return core.cordova(this, "isSupportProfile", { "otherPromise": true }, arguments); };
    HmsPushProfile.prototype.addProfile = function (type, profileId) { return core.cordova(this, "addProfile", { "otherPromise": true }, arguments); };
    HmsPushProfile.prototype.addProfileWithSubjectId = function (subjectId, type, profileId) { return core.cordova(this, "addProfileWithSubjectId", { "otherPromise": true }, arguments); };
    HmsPushProfile.prototype.deleteProfile = function (profileId) { return core.cordova(this, "deleteProfile", { "otherPromise": true }, arguments); };
    HmsPushProfile.prototype.deleteProfileWithSubjectId = function (subjectId, profileId) { return core.cordova(this, "deleteProfileWithSubjectId", { "otherPromise": true }, arguments); };
    HmsPushProfile.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HmsPushProfile, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HmsPushProfile.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HmsPushProfile });
    HmsPushProfile.pluginName = "HmsPushProfile";
    HmsPushProfile.plugin = "@hmscore/cordova-plugin-hms-push";
    HmsPushProfile.pluginRef = "HmsPushProfile";
    HmsPushProfile.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HmsPushProfile.platforms = ["Android"];
    HmsPushProfile = tslib.__decorate([], HmsPushProfile);
    return HmsPushProfile;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HmsPushProfile, decorators: [{
            type: i0.Injectable
        }], propDecorators: { 
        /**
         *
         */
        isSupportProfile: [], addProfile: [], addProfileWithSubjectId: [], deleteProfile: [], deleteProfileWithSubjectId: [] } });
exports.HmsPushResultCode = void 0;
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
})(exports.HmsPushResultCode || (exports.HmsPushResultCode = {}));
exports.Attr = void 0;
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
})(exports.Attr || (exports.Attr = {}));
exports.Importance = void 0;
(function (Importance) {
    Importance["MAX"] = "max";
    Importance["HIGH"] = "high";
    Importance["DEFAULT"] = "default";
    Importance["LOW"] = "low";
    Importance["MIN"] = "min";
    Importance["NONE"] = "none";
    Importance["UNSPECIFIED"] = "unspecified";
})(exports.Importance || (exports.Importance = {}));
exports.Priority = void 0;
(function (Priority) {
    Priority["MAX"] = "max";
    Priority["HIGH"] = "high";
    Priority["DEFAULT"] = "default";
    Priority["LOW"] = "low";
    Priority["MIN"] = "min";
})(exports.Priority || (exports.Priority = {}));
exports.RepeatType = void 0;
(function (RepeatType) {
    RepeatType["HOUR"] = "hour";
    RepeatType["MINUTE"] = "minute";
    RepeatType["DAY"] = "day";
    RepeatType["WEEK"] = "week";
    RepeatType["CUSTOM_TIME"] = "custom_time";
})(exports.RepeatType || (exports.RepeatType = {}));
exports.Visibility = void 0;
(function (Visibility) {
    Visibility["PUBLIC"] = "public";
    Visibility["SECRET"] = "secret";
    Visibility["PRIVATE"] = "private";
})(exports.Visibility || (exports.Visibility = {}));
exports.RemoteMessageBuilder = void 0;
(function (RemoteMessageBuilder) {
    RemoteMessageBuilder["TO"] = "to";
    RemoteMessageBuilder["MESSAGE_ID"] = "messageId";
    RemoteMessageBuilder["MESSAGE_TYPE"] = "messageType";
    RemoteMessageBuilder["TTL"] = "ttl";
    RemoteMessageBuilder["COLLAPSE_KEY"] = "collapseKey";
    RemoteMessageBuilder["RECEIPT_MODE"] = "receiptMode";
    RemoteMessageBuilder["SEND_MODE"] = "sendMode";
    RemoteMessageBuilder["DATA"] = "data";
})(exports.RemoteMessageBuilder || (exports.RemoteMessageBuilder = {}));
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

exports.CordovaRemoteMessage = CordovaRemoteMessage;
exports.HmsLocalNotification = HmsLocalNotification;
exports.HmsPush = HmsPush;
exports.HmsPushEvent = HmsPushEvent;
exports.HmsPushProfile = HmsPushProfile;
