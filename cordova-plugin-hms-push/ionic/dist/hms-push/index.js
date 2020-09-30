/*
Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

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
     */
    HmsPushOriginal.prototype.getToken = function () { return cordova(this, "getToken", { "otherPromise": true }, arguments); };
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
     */
    HmsPushOriginal.prototype.deleteToken = function () { return cordova(this, "deleteToken", { "otherPromise": true }, arguments); };
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
    /** This method is used to test.
     * @returns Promise<string>
     */
    HmsPushOriginal.prototype.test = function () { return cordova(this, "test", { "otherPromise": true }, arguments); };
    HmsPushOriginal.prototype.getInitialNotification = function () { return cordova(this, "getInitialNotification", { "otherPromise": true }, arguments); };
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
        _this.CUSTOM_INTENT_EVENT = "CUSTOM_INTENT_EVENT";
        _this.ON_PUSH_MESSAGE_SENT_DELIVERED = "ON_PUSH_MESSAGE_SENT_DELIVERED";
        _this.PUSH_ON_START_COMMAND_EVENT = "PUSH_ON_START_COMMAND_EVENT";
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
    HmsPushEventOriginal.prototype.onCustomIntent = function (result) {
        window.registerHMSEvent("CUSTOM_INTENT_EVENT", result);
    };
    HmsPushEventOriginal.pluginName = "HmsPushEvent";
    HmsPushEventOriginal.plugin = "com-plugin-hms-push";
    HmsPushEventOriginal.pluginRef = "HmsPushEvent";
    HmsPushEventOriginal.platforms = ["Android"];
    return HmsPushEventOriginal;
}(IonicNativePlugin));
var HmsPushEvent = new HmsPushEventOriginal();
export { HmsPushEvent };
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
    Visibility["public"] = "public";
    Visibility["secret"] = "secret";
    Visibility["private"] = "private";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1wdXNoL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFpQkEsT0FBTyw4QkFBMEYsTUFBTSxvQkFBb0IsQ0FBQzs7SUErQi9GLDJCQUFpQjs7O1FBRzVDLDBCQUFvQixHQUFDLG9CQUFvQixDQUFDOzs7SUFHMUM7Ozs7T0FJRztJQUNILHNCQUFJO0lBS0osOEJBQVk7SUFLWiwrQkFBYTtJQUtiOzs7O09BSUc7SUFDSCw0QkFBVTtJQUtWOzs7T0FHRztJQUNILDZCQUFXO0lBS1g7OztPQUdHO0lBQ0gsdUJBQUs7SUFLTDs7O09BR0c7SUFDSCx5QkFBTztJQUtQOzs7T0FHRztJQUNILDBCQUFRO0lBS1I7OztPQUdHO0lBQ0gsaUNBQWU7SUFLZjs7O09BR0c7SUFDSCw0QkFBVTtJQUtWOzs7T0FHRztJQUNILDZCQUFXO0lBS1g7Ozs7T0FJRztJQUNILDJCQUFTLGFBQUMsR0FBVztJQUtyQjs7OztPQUlHO0lBQ0gsNkJBQVcsYUFBQyxHQUFXO0lBS3ZCLG9DQUFrQixhQUFDLElBQVk7SUFLL0IseUJBQU87SUFLUDs7O09BR0c7SUFDSCxtQ0FBaUI7SUFLakI7O09BRUc7SUFDSCxzQkFBSTtJQUtKLHdDQUFzQjtJQUt0QixtQ0FBaUIsYUFBQyxJQUF5Qjs7Ozs7a0JBdk03QztFQWdENkIsaUJBQWlCO1NBQWpDLE9BQU87O0lBa0xzQix3Q0FBaUI7OztRQUV2RCwwQkFBb0IsR0FBQyxvQkFBb0IsQ0FBQztRQUMxQyxVQUFJLEdBQUMsSUFBSSxDQUFDO1FBQ1YsZ0JBQVUsR0FBQyxVQUFVLENBQUM7UUFDdEIsY0FBUSxHQUFDLFFBQVEsQ0FBQTtRQUNqQiwwQkFBb0IsR0FBQyxvQkFBb0IsQ0FBQTtRQUN6QyxnQkFBVSxHQUFDLFVBQVUsQ0FBQTtRQUNyQixnQkFBVSxHQUFDLFVBQVUsQ0FB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UUFDOUMsbUJBQW1CLEVBQUUscUJBQXFCO1FBQzFDLG9CQUFvQixFQUFFLHNCQUFzQjtRQUM1QyxJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxNQUFNO1FBQ1osS0FBSyxFQUFFLE9BQU87UUFDZCxHQUFHLEVBQUUsS0FBSztRQUNWLEtBQUssRUFBRSxPQUFPO1FBQ2QsV0FBVyxFQUFFLGFBQWE7UUFDMUIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsVUFBVTtRQUNwQixJQUFJLEVBQUUsTUFBTTtRQUNaLGFBQWEsRUFBRSxlQUFlO1FBQzlCLFdBQVcsRUFBRSxhQUFhO1FBQzFCLFVBQVUsRUFBRSxZQUFZO1FBQ3hCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLGFBQWEsRUFBRSxlQUFlO1FBQzlCLFVBQVUsRUFBRSxZQUFZO1FBQ3hCLFNBQVMsRUFBRSxXQUFXO1FBQ3RCLFlBQVksRUFBRSxjQUFjO1FBQzVCLFdBQVcsRUFBRSxhQUFhO1FBQzFCLGNBQWMsRUFBRSxnQkFBZ0I7UUFDaEMsY0FBYyxFQUFFLGdCQUFnQjtRQUNoQyxnQkFBZ0IsRUFBRSxrQkFBa0I7S0FDdkMsQ0FBQzsrQkE1bkJKOztTQTBrQmEsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuQ29weXJpZ2h0IDIwMjAuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG5cclxuICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG4vKipcclxuICogQG5hbWUgSG1zUHVzaFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhlIENvcmRvdmEgUHVzaCBQbHVnaW4gZW5hYmxlcyBjb21tdW5pY2F0aW9uIGJldHdlZW4gSHVhd2VpIFB1c2ggS2l0IFNESyBhbmQgQ29yZG92YSBwbGF0Zm9ybS4gVGhpcyBwbHVnaW4gZXhwb3NlcyBhbGwgZnVuY3Rpb25hbGl0eSBwcm92aWRlZCBieSBIdWF3ZWkgUHVzaCBLaXQgU0RLLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBIbXNQdXNoIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9obXMtcHVzaCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaG1zUHVzaDogSG1zUHVzaCkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLmhNU1B1c2gudHVybk9uUHVzaCgpXHJcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdIbXNQdXNoJyxcclxuICBwbHVnaW46ICdjb20tcGx1Z2luLWhtcy1wdXNoJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnSG1zUHVzaCcsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIbXNQdXNoIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG5cclxuICBIbXNQdXNoUmVzdWx0Q29kZTpIbXNQdXNoUmVzdWx0Q29kZVxyXG4gIENvcmRvdmFSZW1vdGVNZXNzYWdlPUNvcmRvdmFSZW1vdGVNZXNzYWdlO1xyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kICBpbml0aWFsaXplZCBIbXNQdXNoLiBcclxuICAgIFxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD4gXHJcbiAgICovXHJcbiAgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIFxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gZGlzYWJsZSB0aGUgZGlzcGxheSBvZiBub3RpZmljYXRpb24gbWVzc2FnZXMuIElmIHlvdSB3YW50IHRvIGNvbnRyb2wgdGhlIGRpc3BsYXkgb2Ygbm90aWZpY2F0aW9uIG1lc3NhZ2VzIGluIGFuIGFwcCwgeW91IGNhbiBjYWxsIHRoaXMgbWV0aG9kLiBUaGlzIG1ldGhvZCBhcHBsaWVzIHRvIG5vdGlmaWNhdGlvbiBtZXNzYWdlcyBidXQgbm90IGRhdGEgbWVzc2FnZXMuIEl0IGlzIHRoZSBhcHAgdGhhdCBkZXRlcm1pbmVzIHdoZXRoZXIgdG8gZW5hYmxlIG9yIGRpc2FibGUgZGF0YSBtZXNzYWdpbmcuXHJcbiAgICBcclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz4gXHJcbiAgICovXHJcbiAgdHVybk9uUHVzaCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGVuYWJsZSB0aGUgZGlzcGxheSBvZiBub3RpZmljYXRpb24gbWVzc2FnZXMuIElmIHlvdSB3YW50IHRvIGNvbnRyb2wgdGhlIGRpc3BsYXkgb2Ygbm90aWZpY2F0aW9uIG1lc3NhZ2VzIGluIGFuIGFwcCwgeW91IGNhbiBjYWxsIHRoaXMgbWV0aG9kLiBUaGlzIG1ldGhvZCBhcHBsaWVzIHRvIG5vdGlmaWNhdGlvbiBtZXNzYWdlcyBidXQgbm90IGRhdGEgbWVzc2FnZXMuIEl0IGlzIHRoZSBhcHAgdGhhdCBkZXRlcm1pbmVzIHdoZXRoZXIgdG8gZW5hYmxlIG9yIGRpc2FibGUgZGF0YSBtZXNzYWdpbmcuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICovXHJcbiAgdHVybk9mZlB1c2goKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBvYnRhaW4gYW4gQUFJRCBpbiBzeW5jaHJvbm91cyBtb2RlLiBCZWZvcmUgYXBwbHlpbmcgZm9yIGEgdG9rZW4sIGFuIGFwcCBjYWxscyB0aGlzIG1ldGhvZCB0byBvYnRhaW4gaXRzIHVuaXF1ZSBBQUlELiBUaGUgSFVBV0VJIFB1c2ggc2VydmVyIGdlbmVyYXRlcyBhIHRva2VuIGZvciB0aGUgYXBwIGJhc2VkIG9uIHRoZSBBQUlELiBJZiB0aGUgQUFJRCBvZiB0aGUgYXBwIGNoYW5nZXMsIGEgbmV3IHRva2VuIHdpbGwgYmUgZ2VuZXJhdGVkIG5leHQgdGltZSB3aGVuIHRoZSBhcHAgYXBwbGllcyBmb3IgYSB0b2tlbi4gSWYgYW4gYXBwIG5lZWRzIHRvIHJlcG9ydCBzdGF0aXN0aWNzIGV2ZW50cywgaXQgbXVzdCBjYXJyeSB0aGUgQUFJRCBhcyBpdHMgdW5pcXVlIElELlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAqL1xyXG4gIGdldElkKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gb2J0YWluIGFuIEFBSUQgaW4gYXN5bmNocm9ub3VzIG1vZGUuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICovXHJcbiAgZ2V0QUFJRCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIG9idGFpbiBhIHRva2VuIHJlcXVpcmVkIGZvciBhY2Nlc3NpbmcgSFVBV0VJIFB1c2ggS2l0LiBJZiB0aGVyZSBpcyBubyBsb2NhbCBBQUlELCB0aGlzIG1ldGhvZCB3aWxsIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGUgYW4gQUFJRCB3aGVuIGl0IGlzIGNhbGxlZCBiZWNhdXNlIHRoZSBIVUFXRUkgUHVzaCBLaXQgc2VydmVyIG5lZWRzIHRvIGdlbmVyYXRlIGEgdG9rZW4gYmFzZWQgb24gdGhlIEFBSUQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICovXHJcbiAgZ2V0VG9rZW4oKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBvYnRhaW4gdGhlIGdlbmVyYXRpb24gdGltZXN0YW1wIG9mIGFuIEFBSUQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICovXHJcbiAgZ2V0Q3JlYXRpb25UaW1lKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gZGVsZXRlIGEgbG9jYWwgQUFJRCBhbmQgaXRzIGdlbmVyYXRpb24gdGltZXN0YW1wLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAqL1xyXG4gIGRlbGV0ZUFBSUQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBkZWxldGUgYSB0b2tlbi4gQWZ0ZXIgYSB0b2tlbiBpcyBkZWxldGVkLCB0aGUgY29ycmVzcG9uZGluZyBBQUlEIHdpbGwgbm90IGJlIGRlbGV0ZWQuIFRoaXMgbWV0aG9kIGlzIGEgc3luY2hyb25vdXMgbWV0aG9kLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAqL1xyXG4gIGRlbGV0ZVRva2VuKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gc3Vic2NyaWJlIHRvIHRvcGljcyBpbiBhc3luY2hyb25vdXMgbW9kZS4gVGhlIEhVQVdFSSBQdXNoIEtpdCB0b3BpYyBtZXNzYWdpbmcgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBzZW5kIG1lc3NhZ2VzIHRvIG11bHRpcGxlIGRldmljZXMgd2hvc2UgdXNlcnMgaGF2ZSBzdWJzY3JpYmVkIHRvIGEgc3BlY2lmaWMgdG9waWMuIFlvdSBjYW4gd3JpdGUgbWVzc2FnZXMgYWJvdXQgdGhlIHRvcGljIGFzIHJlcXVpcmVkLCBhbmQgSFVBV0VJIFB1c2ggS2l0IGRldGVybWluZXMgdGhlIHJlbGVhc2UgcGF0aCBhbmQgc2VuZHMgbWVzc2FnZXMgdG8gdGhlIGNvcnJlY3QgZGV2aWNlcyBpbiBhIHJlbGlhYmxlIG1hbm5lci5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXJnIFRvcGljIHRvIGJlIHN1YnNjcmliZWQgdG8uXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICovXHJcbiAgc3Vic2NyaWJlKGFyZzogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byB1bnN1YnNjcmliZSBmcm9tIHRvcGljcyB0aGF0IGFyZSBzdWJzY3JpYmVkIHRvIHRocm91Z2ggdGhlIHN1YnNjcmliZSBtZXRob2QuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFyZyBUb3BpYyB0byBiZSB1bnN1YnNjcmliZWQgdG8uXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICovXHJcbiAgdW5zdWJzY3JpYmUoYXJnOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzZXRBdXRvSW5pdEVuYWJsZWQoYXJnczogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0T2RpZCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGNoZWNrIHdoZXRoZXIgYXV0b21hdGljIGluaXRpYWxpemF0aW9uIGlzIGVuYWJsZWQuICBcclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgKi9cclxuICBpc0F1dG9Jbml0RW5hYmxlZCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKiogVGhpcyBtZXRob2QgaXMgdXNlZCB0byB0ZXN0LlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAqL1xyXG4gIHRlc3QoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0SW5pdGlhbE5vdGlmaWNhdGlvbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzZW5kUmVtb3RlTWVzc2FnZShhcmdzOiBSZW1vdGVNZXNzYWdlT2JqZWN0KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG59XHJcblxyXG50eXBlIEhhbmRsZXIgPSAoZGF0YTogYW55KSA9PiB2b2lkO1xyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgICAgICBobXNFdmVudEhhbmRsZXJzOiB7XHJcbiAgICAgICAgICAgIFtrZXk6IHN0cmluZ106IEhhbmRsZXJbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaG1zRXZlbnRIYW5kbGVyOiAoZXZlbnROYW1lOiBzdHJpbmcsIGRhdGE6IGFueSkgPT4gdm9pZCxcclxuICAgICAgICByZWdpc3RlckhNU0V2ZW50OiAoZXZlbnROYW1lOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpID0+IHZvaWRcclxuICAgICAgICB1bnJlZ2lzdGVySE1TRXZlbnQ6IChldmVudE5hbWU6IHN0cmluZywgaGFuZGxlcj86IEhhbmRsZXIpID0+IHZvaWRcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSG1zTG9jYWxOb3RpZmljYXRpb24nLFxyXG4gIHBsdWdpbjogJ2NvbS1wbHVnaW4taG1zLXB1c2gnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICBwbHVnaW5SZWY6ICdIbXNMb2NhbE5vdGlmaWNhdGlvbicsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIbXNMb2NhbE5vdGlmaWNhdGlvbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuXHJcbiAgICBDb3Jkb3ZhUmVtb3RlTWVzc2FnZT1Db3Jkb3ZhUmVtb3RlTWVzc2FnZTtcclxuICAgIEF0dHI9QXR0cjtcclxuICAgIEltcG9ydGFuY2U9SW1wb3J0YW5jZTtcclxuICAgIFByaW9yaXR5PVByaW9yaXR5XHJcbiAgICBSZW1vdGVNZXNzYWdlQnVpbGRlcj1SZW1vdGVNZXNzYWdlQnVpbGRlclxyXG4gICAgUmVwZWF0VHlwZT1SZXBlYXRUeXBlXHJcbiAgICBWaXNpYmlsaXR5PVZpc2liaWxpdHlcclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBsb2NhbE5vdGlmaWNhdGlvbihhcmdzOiBMb2NhbE5vdGlmaWNhdGlvbk9iamVjdCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGxvY2FsTm90aWZpY2F0aW9uU2NoZWR1bGUoYXJnczogTG9jYWxOb3RpZmljYXRpb25PYmplY3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBjYW5jZWxBbGxOb3RpZmljYXRpb25zKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBjYW5jZWxOb3RpZmljYXRpb25zKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBjYW5jZWxTY2hlZHVsZWROb3RpZmljYXRpb25zKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBjYW5jZWxOb3RpZmljYXRpb25zV2l0aElkKGFyZ3M6IGFueSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBjYW5jZWxOb3RpZmljYXRpb25zV2l0aElkVGFnKGFyZ3M6IGFueSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBjYW5jZWxOb3RpZmljYXRpb25zV2l0aFRhZyhhcmdzOiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0Tm90aWZpY2F0aW9ucygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBnZXRTY2hlZHVsZWROb3RpZmljYXRpb25zKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldENoYW5uZWxzKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGNoYW5uZWxFeGlzdHMoYXJnczogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY2hhbm5lbEJsb2NrZWQoYXJnczogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZGVsZXRlQ2hhbm5lbChhcmdzOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSG1zUHVzaEV2ZW50JyxcclxuICBwbHVnaW46ICdjb20tcGx1Z2luLWhtcy1wdXNoJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnSG1zUHVzaEV2ZW50JywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhtc1B1c2hFdmVudCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuXHJcbm9uUmVtb3RlTWVzc2FnZVJlY2VpdmVkIChyZXN1bHQ6YW55KSB7XHJcbiAgd2luZG93LnJlZ2lzdGVySE1TRXZlbnQoXCJSRU1PVEVfREFUQV9NRVNTQUdFX1JFQ0VJVkVEXCIscmVzdWx0KVxyXG59XHJcbm9uVG9rZW5SZWNlaXZlZCAocmVzdWx0OmFueSkge1xyXG4gIHdpbmRvdy5yZWdpc3RlckhNU0V2ZW50KFwiVE9LRU5fUkVDRUlWRURfRVZFTlRcIixyZXN1bHQpXHJcbn1cclxub25Ub2tlbkVycm9yIChyZXN1bHQ6YW55KSB7XHJcbiAgd2luZG93LnJlZ2lzdGVySE1TRXZlbnQoXCJPTl9UT0tFTl9FUlJPUl9FVkVOVFwiLHJlc3VsdClcclxufVxyXG4gb25QdXNoTWVzc2FnZVNlbnQgKHJlc3VsdDphbnkpIHtcclxuICB3aW5kb3cucmVnaXN0ZXJITVNFdmVudChcIk9OX1BVU0hfTUVTU0FHRV9TRU5UXCIscmVzdWx0KVxyXG4gfVxyXG5vblB1c2hNZXNzYWdlU2VudEVycm9yIChyZXN1bHQ6YW55KSB7XHJcbiAgd2luZG93LnJlZ2lzdGVySE1TRXZlbnQoXCJPTl9QVVNIX01FU1NBR0VfU0VOVF9FUlJPUlwiLHJlc3VsdClcclxufVxyXG5vblB1c2hNZXNzYWdlU2VudERlbGl2ZXJlZCAocmVzdWx0OmFueSkge1xyXG4gIHdpbmRvdy5yZWdpc3RlckhNU0V2ZW50KFwiT05fUFVTSF9NRVNTQUdFX1NFTlRfREVMSVZFUkVEXCIscmVzdWx0KVxyXG59XHJcbm9uTG9jYWxOb3RpZmljYXRpb25BY3Rpb24gKHJlc3VsdDphbnkpIHtcclxuICB3aW5kb3cucmVnaXN0ZXJITVNFdmVudChcIkxPQ0FMX05PVElGSUNBVElPTl9BQ1RJT05fRVZFTlRcIixyZXN1bHQpXHJcbn1cclxub25Ob3RpZmljYXRpb25PcGVuZWRBcHAgKHJlc3VsdDphbnkpIHtcclxuICB3aW5kb3cucmVnaXN0ZXJITVNFdmVudChcIk5PVElGSUNBVElPTl9PUEVORURfRVZFTlRcIixyZXN1bHQpXHJcbn1cclxub25DdXN0b21JbnRlbnQgKHJlc3VsdDphbnkpIHtcclxuICB3aW5kb3cucmVnaXN0ZXJITVNFdmVudChcIkNVU1RPTV9JTlRFTlRfRVZFTlRcIixyZXN1bHQpXHJcbn1cclxuXHJcblJFTU9URV9EQVRBX01FU1NBR0VfUkVDRUlWRUQgPSBcIlJFTU9URV9EQVRBX01FU1NBR0VfUkVDRUlWRURcIlxyXG5UT0tFTl9SRUNFSVZFRF9FVkVOVCA9IFwiVE9LRU5fUkVDRUlWRURfRVZFTlRcIlxyXG5PTl9UT0tFTl9FUlJPUl9FVkVOVCA9IFwiT05fVE9LRU5fRVJST1JfRVZFTlRcIlxyXG5OT1RJRklDQVRJT05fT1BFTkVEX0VWRU5UID0gXCJOT1RJRklDQVRJT05fT1BFTkVEX0VWRU5UXCJcclxuTE9DQUxfTk9USUZJQ0FUSU9OX0FDVElPTl9FVkVOVCA9IFwiTE9DQUxfTk9USUZJQ0FUSU9OX0FDVElPTl9FVkVOVFwiXHJcbk9OX1BVU0hfTUVTU0FHRV9TRU5UID0gXCJPTl9QVVNIX01FU1NBR0VfU0VOVFwiXHJcbk9OX1BVU0hfTUVTU0FHRV9TRU5UX0VSUk9SID0gXCJPTl9QVVNIX01FU1NBR0VfU0VOVF9FUlJPUlwiXHJcbkNVU1RPTV9JTlRFTlRfRVZFTlQ9XCJDVVNUT01fSU5URU5UX0VWRU5UXCJcclxuT05fUFVTSF9NRVNTQUdFX1NFTlRfREVMSVZFUkVEID0gXCJPTl9QVVNIX01FU1NBR0VfU0VOVF9ERUxJVkVSRURcIlxyXG5QVVNIX09OX1NUQVJUX0NPTU1BTkRfRVZFTlQgPSBcIlBVU0hfT05fU1RBUlRfQ09NTUFORF9FVkVOVFwiXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIbXNQdXNoUmVzdWx0Q29kZSB7XHJcbiAgLy8gU3VjY2Vzc1xyXG4gIFNVQ0NFU1M6IDAsXHJcblxyXG4gIC8vIEVycm9yXHJcbiAgRVJST1I6IC0xLFxyXG5cclxuICAvLyBCdW5kbGUgaXMgbnVsbCwgZXhjZXB0aW9uXHJcbiAgTlVMTF9CVU5ETEU6IDMzMyxcclxuXHJcbiAgLy8gWW91IGRvIG5vdCBoYXZlIGEgdG9rZW4uIEFwcGx5IGZvciBhIHRva2VuLlxyXG4gIEVSUk9SX05PX1RPS0VOOiA5MDcxMjIwMzAsXHJcblxyXG4gIC8vIFRoZSBjdXJyZW50IG5ldHdvcmsgaXMgdW5hdmFpbGFibGUuIENoZWNrIHRoZSBuZXR3b3JrIGNvbm5lY3Rpb24uXHJcbiAgRVJST1JfTk9fTkVUV09SSzogOTA3MTIyMDMxLFxyXG5cclxuICAvLyBUaGUgdG9rZW4gaGFzIGV4cGlyZWQuIERlbGV0ZSB0aGUgdG9rZW4gYW5kIGFwcGx5IGZvciBhIG5ldyBvbmUuXHJcbiAgRVJST1JfVE9LRU5fSU5WQUxJRDogOTA3MTIyMDMyLFxyXG5cclxuICAvLyBJZiB0aGUgUHVzaCBzZXJ2aWNlIGlzIHVuYXZhaWxhYmxlLCBjb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICBFUlJPUl9TRVJWSUNFX05PVF9BVkFJTEFCTEU6IDkwNzEyMjA0NixcclxuXHJcbiAgLy8gSWYgdGhlIFB1c2ggc2VydmVyIHJldHVybnMgYW4gZXJyb3IsIGNvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gIEVSUk9SX1BVU0hfU0VSVkVSOiA5MDcxMjIwNDcsXHJcblxyXG4gIC8vIFVua25vd24gZXJyb3IuIENvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gIEVSUk9SX1VOS05PV046IDkwNzEyMjA0NSxcclxuXHJcbiAgLy8gVGhlIG51bWJlciBvZiBzdWJzY3JpYmVkIHRvcGljcyBleGNlZWRzIDIwMDAuXHJcbiAgRVJST1JfVE9QSUNfRVhDRUVEOiA5MDcxMjIwMzQsXHJcblxyXG4gIC8vIEZhaWxlZCB0byBzZW5kIHRoZSBzdWJzY3JpcHRpb24gdG9waWMuIENvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gIEVSUk9SX1RPUElDX1NFTkQ6IDkwNzEyMjAzNSxcclxuXHJcbiAgLy8gUHVzaCByaWdodHMgYXJlIG5vdCBlbmFibGVkLiBFbmFibGUgdGhlIHNlcnZpY2UgYW5kIHNldCBwdXNoIHNlcnZpY2UgcGFyYW1ldGVycyBhdCBBcHBHYWxsZXJ5IENvbm5lY3QuXHJcbiAgRVJST1JfTk9fUklHSFQ6IDkwNzEyMjAzNixcclxuXHJcbiAgLy8gRmFpbGVkIHRvIGFwcGx5IGZvciB0aGUgdG9rZW4uIENvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gIEVSUk9SX0dFVF9UT0tFTl9FUlI6IDkwNzEyMjAzNyxcclxuXHJcbiAgLy8gTm8gc3RvcmFnZSBsb2NhdGlvbiBpcyBzZWxlY3RlZCBmb3IgdGhlIGFwcGxpY2F0aW9uIG9yIHRoZSBzdG9yYWdlIGxvY2F0aW9uIGlzIGludmFsaWQuXHJcbiAgRVJST1JfU1RPUkFHRV9MT0NBVElPTl9FTVBUWTogOTA3MTIyMDM4LFxyXG5cclxuICAvLyBGYWlsZWQgdG8gYXBwbHkgZm9yIGEgdG9rZW4uIENyb3NzLXJlZ2lvbiB0b2tlbiBhcHBsaWNhdGlvbiBpcyBub3QgYWxsb3dlZC5cclxuICBFUlJPUl9OT1RfQUxMT1dfQ1JPU1NfQVBQTFk6IDkwNzEyMjA1MyxcclxuXHJcbiAgLy8gVGhlIG1lc3NhZ2UgYm9keSBzaXplIGV4Y2VlZHMgdGhlIG1heGltdW0uXHJcbiAgRVJST1JfU0laRTogOTA3MTIyMDQxLFxyXG5cclxuICAvLyBUaGUgbWVzc2FnZSBjb250YWlucyBpbnZhbGlkIHBhcmFtZXRlcnMuXHJcbiAgRVJST1JfSU5WQUxJRF9QQVJBTUVURVJTOiA5MDcxMjIwNDIsXHJcblxyXG4gIC8vIFRoZSBudW1iZXIgb2Ygc2VudCBtZXNzYWdlcyByZWFjaGVzIHRoZSB1cHBlciBsaW1pdC4gVGhlIG1lc3NhZ2VzIHdpbGwgYmUgZGlzY2FyZGVkLlxyXG4gIEVSUk9SX1RPT19NQU5ZX01FU1NBR0VTOiA5MDcxMjIwNDMsXHJcblxyXG4gIC8vIFRoZSBtZXNzYWdlIGxpZmV0aW1lIGV4cGlyZXMgYmVmb3JlIHRoZSBtZXNzYWdlIGlzIHN1Y2Nlc3NmdWxseSBzZW50IHRvIHRoZSBBUFAgc2VydmVyLlxyXG4gIEVSUk9SX1RUTF9FWENFRURFRDogOTA3MTIyMDQ0LFxyXG5cclxuICAvLyAgSHVhd2VpIE1vYmlsZSBTZXJ2aWNlcyAoQVBLKSBjYW4ndCBjb25uZWN0ICBIdWF3ZWkgUHVzaCAgS2l0LlxyXG4gIEVSUk9SX0hNU19DTElFTlRfQVBJOiA5MDcxMjIwNDgsXHJcblxyXG4gIC8vIFRoZSBjdXJyZW50IEVNVUkgdmVyc2lvbiBpcyB0b28gZWFybHkgdG8gdXNlIHRoZSBjYXBhYmlsaXR5LlxyXG4gIEVSUk9SX09QRVJBVElPTl9OT1RfU1VQUE9SVEVEOiA5MDcxMjIwNDksXHJcblxyXG4gIC8vIFRoZSBvcGVyYXRpb24gY2Fubm90IGJlIHBlcmZvcm1lZCBpbiB0aGUgbWFpbiB0aHJlYWQuXHJcbiAgRVJST1JfTUFJTl9USFJFQUQ6IDkwNzEyMjA1MCxcclxuXHJcbiAgLy8gVGhlIGRldmljZSBjZXJ0aWZpY2F0ZSBhdXRoZW50aWNhdGlvbiBmYWlscy5cclxuICBFUlJPUl9ITVNfREVWSUNFX0FVVEhfRkFJTEVEX1NFTEZfTUFQUElORzogOTA3MTIyMDUxLFxyXG5cclxuICAvLyBGYWlsZWQgdG8gYmluZCB0aGUgc2VydmljZS5cclxuICBFUlJPUl9CSU5EX1NFUlZJQ0VfU0VMRl9NQVBQSU5HOiA5MDcxMjIwNTIsXHJcblxyXG4gIC8vIFRoZSBTREsgaXMgYmVpbmcgYXV0b21hdGljYWxseSBpbml0aWFsaXplZC4gVHJ5IGFnYWluIGxhdGVyLlxyXG4gIEVSUk9SX0FVVE9fSU5JVElBTElaSU5HOiA5MDcxMjIwNTQsXHJcblxyXG4gIC8qVGhlIGlucHV0IHBhcmFtZXRlciBpcyBpbmNvcnJlY3QuIENoZWNrIHdoZXRoZXIgdGhlIHJlbGF0ZWQgY29uZmlndXJhdGlvbiBpbmZvcm1hdGlvbiBpcyBjb3JyZWN0LlxyXG4gICAqIEV4YW1wbGU6IGFwcF9pZCBpbiB0aGUgYWdjb25uZWN0IC0gc2VydmljZXMuanNvbiBmaWxlO1xyXG4gICAqIENoZWNrIHdoZXRoZXIgdGhlIGJ1aWxkLmdyYWRsZSBmaWxlIGlzIGNvbmZpZ3VyZWQgd2l0aCB0aGUgY2VydGlmaWNhdGUgc2lnbmF0dXJlLlxyXG4gICAqL1xyXG4gIEVSUk9SX0FSR1VNRU5UU19JTlZBTElEOiA5MDcxMzUwMDAsXHJcblxyXG4gIC8vIEludGVybmFsIFB1c2ggZXJyb3IuIENvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0IGVuZ2luZWVycy5cclxuICBFUlJPUl9JTlRFUk5BTF9FUlJPUjogOTA3MTM1MDAxLFxyXG5cclxuICAvLyBUaGUgc2VydmljZSBkb2VzIG5vdCBleGlzdC4gVGhlIGludm9rZWQgaW50ZXJmYWNlIGRvZXMgbm90IGV4aXN0LlxyXG4gIEVSUk9SX05BTUlOR19JTlZBTElEOiA5MDcxMzUwMDIsXHJcblxyXG4gIC8vIFRoZSBBcGlDbGllbnQgb2JqZWN0IGlzIGludmFsaWQuXHJcbiAgRVJST1JfQ0xJRU5UX0FQSV9JTlZBTElEOiA5MDcxMzUwMDMsXHJcblxyXG4gIC8vIEludm9raW5nIEFJREwgdGltZXMgb3V0LiBDb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICBFUlJPUl9FWEVDVVRFX1RJTUVPVVQ6IDkwNzEzNTAwNCxcclxuXHJcbiAgLy8gVGhlIGN1cnJlbnQgYXJlYSBkb2VzIG5vdCBzdXBwb3J0IHRoaXMgc2VydmljZS5cclxuICBFUlJPUl9OT1RfSU5fU0VSVklDRTogOTA3MTM1MDA1LFxyXG5cclxuICAvLyBJZiB0aGUgQUlETCBjb25uZWN0aW9uIHNlc3Npb24gaXMgaW52YWxpZCwgY29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXHJcbiAgRVJST1JfU0VTU0lPTl9JTlZBTElEOiA5MDcxMzUwMDYsXHJcblxyXG4gIC8vIEFuIGVycm9yIG9jY3VycmVkIHdoZW4gaW52b2tpbmcgYW4gdW5zcGVjaWZpZWQgQVBJLlxyXG4gIEVSUk9SX0FQSV9OT1RfU1BFQ0lGSUVEOiAxMDAyLFxyXG5cclxuICAvKiBGYWlsZWQgdG8gaW52b2tlIHRoZSBnYXRld2F5IHRvIHF1ZXJ5IHRoZSBhcHBsaWNhdGlvbiBzY29wZS5cclxuICAgKiBDaGVjayB3aGV0aGVyIHRoZSBjdXJyZW50IGFwcCBoYXMgYmVlbiBjcmVhdGVkIGFuZCBlbmFibGVkIGluIEFwcEdhbGxlcnkgQ29ubmVjdC5cclxuICAgKiBJZiB5ZXMsIGNvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gICAqL1xyXG4gIEVSUk9SX0dFVF9TQ09QRV9FUlJPUjogOTA3MTM1NzAwLFxyXG4gIC8qIFNjb3BlIGlzIG5vdCBjb25maWd1cmVkIG9uIHRoZSBBcHBHYWxsZXJ5IENvbm5lY3QuXHJcbiAgICogQ2hlY2sgd2hldGhlciB0aGUgY3VycmVudCBhcHAgaGFzIGJlZW4gY3JlYXRlZCBhbmQgZW5hYmxlZCBpbiBBcHBHYWxsZXJ5IENvbm5lY3QuXHJcbiAgICogSWYgeWVzLCBjb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICAgKi9cclxuICBFUlJPUl9TQ09QRV9MSVNUX0VNUFRZOiA5MDcxMzU3MDEsXHJcblxyXG4gIC8qIFRoZSBjZXJ0aWZpY2F0ZSBmaW5nZXJwcmludCBpcyBub3QgY29uZmlndXJlZCBvbiB0aGUgQXBwR2FsbGVyeSBDb25uZWN0LlxyXG4gICAqIDEuIENoZWNrIHdoZXRoZXIgeW91ciBwaG9uZSBjYW4gYWNjZXNzIHRoZSBJbnRlcm5ldC5cclxuICAgKiAyLiBDaGVjayB3aGV0aGVyIHRoZSBjb3JyZWN0IGNlcnRpZmljYXRlIGZpbmdlcnByaW50IGlzIGNvbmZpZ3VyZWQgaW4gQXBwR2FsbGVyeSBDb25uZWN0LiBGb3IgZGV0YWlscywgc2VlIEFwcEdhbGxlcnkgQ29ubmVjdCBjb25maWd1cmF0aW9uIGluIERldmVsb3BtZW50IFByZXBhcmF0aW9ucy5cclxuICAgKiAzLiBJZiB0aGUgY2hlY2sgcmVzdWx0IGlzIGNvcnJlY3QsIGNvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gICAqL1xyXG4gIEVSUk9SX0NFUlRfRklOR0VSUFJJTlRfRU1QVFk6IDkwNzEzNTcwMixcclxuXHJcbiAgLy9QZXJtaXNzaW9uIGlzIG5vdCBjb25maWd1cmVkIG9uIHRoZSBBcHBHYWxsZXJ5IENvbm5lY3QuXHJcbiAgRVJST1JfUEVSTUlTU0lPTl9MSVNUX0VNUFRZOiA5MDcxMzU3MDMsXHJcblxyXG4gIC8vIFRoZSBhdXRoZW50aWNhdGlvbiBpbmZvcm1hdGlvbiBvZiB0aGUgYXBwbGljYXRpb24gZG9lcyBub3QgZXhpc3QuXHJcbiAgRVJST1JfQVVUSF9JTkZPX05PVF9FWElTVDogNjAwMixcclxuXHJcbiAgLy8gQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIGNlcnRpZmljYXRlIGZpbmdlcnByaW50IHZlcmlmaWNhdGlvbi4gQ2hlY2sgd2hldGhlciB0aGUgY29ycmVjdCBjZXJ0aWZpY2F0ZSBmaW5nZXJwcmludCBpcyBjb25maWd1cmVkIGluIEFwcEdhbGxlcnkgQ29ubmVjdC4gRm9yIGRldGFpbHMsIHNlZSBBcHBHYWxsZXJ5IENvbm5lY3QgY29uZmlndXJhdGlvbiBpbiBEZXZlbG9wbWVudCBQcmVwYXJhdGlvbnMuXHJcbiAgRVJST1JfQ0VSVF9GSU5HRVJQUklOVF9FUlJPUjogNjAwMyxcclxuXHJcbiAgLy8gSW50ZXJmYWNlIGF1dGhlbnRpY2F0aW9uOiBUaGUgcGVybWlzc2lvbiBkb2VzIG5vdCBleGlzdCBhbmQgaXMgbm90IGFwcGxpZWQgZm9yIGluIEFwcEdhbGxlcnkgQ29ubmVjdC5cclxuICBFUlJPUl9QRVJNSVNTSU9OX05PVF9FWElTVDogNjAwNCxcclxuXHJcbiAgLy8gSW50ZXJmYWNlIGF1dGhlbnRpY2F0aW9uOiB1bmF1dGhvcml6ZWQuXHJcbiAgRVJST1JfUEVSTUlTU0lPTl9OT1RfQVVUSE9SSVpFRDogNjAwNSxcclxuXHJcbiAgLy8gSW50ZXJmYWNlIGF1dGhlbnRpY2F0aW9uOiBUaGUgYXV0aG9yaXphdGlvbiBleHBpcmVzLlxyXG4gIEVSUk9SX1BFUk1JU1NJT05fRVhQSVJFRDogNjAwNixcclxufTtcclxuXHJcbmV4cG9ydCBlbnVtIEF0dHIge1xyXG4gIGlkID0gXCJpZFwiLFxyXG4gIG1lc3NhZ2UgPSBcIm1lc3NhZ2VcIixcclxuICBmaXJlRGF0ZSA9IFwiZmlyZURhdGVcIixcclxuICB0aXRsZSA9IFwidGl0bGVcIixcclxuICB0aWNrZXIgPSBcInRpY2tlclwiLFxyXG4gIHNob3dXaGVuID0gXCJzaG93V2hlblwiLFxyXG4gIGF1dG9DYW5jZWwgPSBcImF1dG9DYW5jZWxcIixcclxuICBsYXJnZUljb24gPSBcImxhcmdlSWNvblwiLFxyXG4gIGxhcmdlSWNvblVybCA9IFwibGFyZ2VJY29uVXJsXCIsXHJcbiAgc21hbGxJY29uID0gXCJzbWFsbEljb25cIixcclxuICBiaWdUZXh0ID0gXCJiaWdUZXh0XCIsXHJcbiAgc3ViVGV4dCA9IFwic3ViVGV4dFwiLFxyXG4gIGJpZ1BpY3R1cmVVcmwgPSBcImJpZ1BpY3R1cmVVcmxcIixcclxuICBzaG9ydGN1dElkID0gXCJzaG9ydGN1dElkXCIsXHJcbiAgbnVtYmVyID0gXCJudW1iZXJcIixcclxuICBjaGFubmVsSWQgPSBcImNoYW5uZWxJZFwiLFxyXG4gIGNoYW5uZWxOYW1lID0gXCJjaGFubmVsTmFtZVwiLFxyXG4gIGNoYW5uZWxEZXNjcmlwdGlvbiA9IFwiY2hhbm5lbERlc2NyaXB0aW9uXCIsXHJcbiAgY29sb3IgPSBcImNvbG9yXCIsXHJcbiAgZ3JvdXAgPSBcImdyb3VwXCIsXHJcbiAgZ3JvdXBTdW1tYXJ5ID0gXCJncm91cFN1bW1hcnlcIixcclxuICBwbGF5U291bmQgPSBcInBsYXlTb3VuZFwiLFxyXG4gIHNvdW5kTmFtZSA9IFwic291bmROYW1lXCIsXHJcbiAgdmlicmF0ZSA9IFwidmlicmF0ZVwiLFxyXG4gIHZpYnJhdGVEdXJhdGlvbiA9IFwidmlicmF0ZUR1cmF0aW9uXCIsXHJcbiAgYWN0aW9ucyA9IFwiYWN0aW9uc1wiLFxyXG4gIGludm9rZUFwcCA9IFwiaW52b2tlQXBwXCIsXHJcbiAgdGFnID0gXCJ0YWdcIixcclxuICByZXBlYXRUeXBlID0gXCJyZXBlYXRUeXBlXCIsXHJcbiAgcmVwZWF0VGltZSA9IFwicmVwZWF0VGltZVwiLFxyXG4gIG9uZ29pbmcgPSBcIm9uZ29pbmdcIixcclxuICBhbGxvd1doaWxlSWRsZSA9IFwiYWxsb3dXaGlsZUlkbGVcIixcclxuICBkb250Tm90aWZ5SW5Gb3JlZ3JvdW5kID0gXCJkb250Tm90aWZ5SW5Gb3JlZ3JvdW5kXCIsXHJcbiAgcHJpb3JpdHkgPSBcInByaW9yaXR5XCIsXHJcbiAgaW1wb3J0YW5jZSA9IFwiaW1wb3J0YW5jZVwiLFxyXG4gIHZpc2liaWxpdHkgPSBcInZpc2liaWxpdHlcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBJbXBvcnRhbmNlIHtcclxuICBNQVggPSBcIm1heFwiLFxyXG4gIEhJR0ggPSBcImhpZ2hcIixcclxuICBERUZBVUxUID0gXCJkZWZhdWx0XCIsXHJcbiAgTE9XID0gXCJsb3dcIixcclxuICBNSU4gPSBcIm1pblwiLFxyXG4gIE5PTkUgPSBcIm5vbmVcIixcclxuICBVTlNQRUNJRklFRCA9IFwidW5zcGVjaWZpZWRcIlxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBlbnVtIFByaW9yaXR5IHtcclxuICBNQVggPSBcIm1heFwiLFxyXG4gIEhJR0ggPSBcImhpZ2hcIixcclxuICBERUZBVUxUID0gXCJkZWZhdWx0XCIsXHJcbiAgTE9XID0gXCJsb3dcIixcclxuICBNSU4gPSBcIm1pblwiXHJcbn07XHJcblxyXG5leHBvcnQgZW51bSBSZXBlYXRUeXBlIHtcclxuICBIT1VSID0gXCJob3VyXCIsXHJcbiAgTUlOVVRFID0gXCJtaW51dGVcIixcclxuICBEQVkgPSBcImRheVwiLFxyXG4gIFdFRUsgPSBcIndlZWtcIixcclxuICBDVVNUT01fVElNRSA9IFwiY3VzdG9tX3RpbWVcIlxyXG59O1xyXG5cclxuZXhwb3J0IGVudW0gVmlzaWJpbGl0eSB7XHJcbiAgcHVibGljID0gXCJwdWJsaWNcIixcclxuICBzZWNyZXQgPSBcInNlY3JldFwiLFxyXG4gIHByaXZhdGUgPSBcInByaXZhdGVcIlxyXG59O1xyXG5cclxuZXhwb3J0IGVudW0gUmVtb3RlTWVzc2FnZUJ1aWxkZXIge1xyXG4gIFRPID0gXCJ0b1wiLFxyXG4gIE1FU1NBR0VfSUQgPSBcIm1lc3NhZ2VJZFwiLFxyXG4gIE1FU1NBR0VfVFlQRSA9IFwibWVzc2FnZVR5cGVcIixcclxuICBUVEwgPSBcInR0bFwiLFxyXG4gIENPTExBUFNFX0tFWSA9IFwiY29sbGFwc2VLZXlcIixcclxuICBSRUNFSVBUX01PREUgPSBcInJlY2VpcHRNb2RlXCIsXHJcbiAgU0VORF9NT0RFID0gXCJzZW5kTW9kZVwiLFxyXG4gIERBVEEgPSBcImRhdGFcIixcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb3Jkb3ZhUmVtb3RlTWVzc2FnZSB7XHJcblxyXG4gIHN0YXRpYyBJTlNUQU5DRV9JRF9TQ09QRSA9ICdIQ00nO1xyXG5cclxuICBzdGF0aWMgUFJJT1JJVFlfVU5LTk9XTiA9IDA7XHJcbiAgc3RhdGljIFBSSU9SSVRZX0hJR0ggPSAxO1xyXG4gIHN0YXRpYyBQUklPUklUWV9OT1JNQUwgPSAyO1xyXG5cclxuICBzdGF0aWMgQ09MTEFQU0VLRVk9ICdjb2xsYXBzZUtleSc7XHJcbiAgc3RhdGljIERBVEE9ICdkYXRhJztcclxuICBzdGF0aWMgREFUQU9GTUFQPSAnZGF0YU9mTWFwJztcclxuICBzdGF0aWMgTUVTU0FHRUlEPSAnbWVzc2FnZUlkJztcclxuICBzdGF0aWMgTUVTU0FHRVRZUEU9ICdtZXNzYWdlVHlwZSc7XHJcbiAgc3RhdGljIE9SSUdJTkFMVVJHRU5DWT0gJ29yaWdpbmFsVXJnZW5jeSc7XHJcbiAgc3RhdGljIFVSR0VOQ1k9ICAndXJnZW5jeSc7XHJcbiAgc3RhdGljIFRUTD0gJ3R0bCc7XHJcbiAgc3RhdGljIFNFTlRUSU1FPSAgJ3NlbnRUaW1lJztcclxuICBzdGF0aWMgVE89ICd0byc7XHJcbiAgc3RhdGljIEZST009ICdmcm9tJztcclxuICBzdGF0aWMgVE9LRU49ICAndG9rZW4nO1xyXG5cclxuICBzdGF0aWMgTk9USUZJQ0FUSU9OID0ge1xyXG4gICAgICBUSVRMRTogJ3RpdGxlJyxcclxuICAgICAgVElUTEVMT0NBTElaQVRJT05LRVk6ICd0aXRsZUxvY2FsaXphdGlvbktleScsXHJcbiAgICAgIFRJVExFTE9DQUxJWkFUSU9OQVJHUzogJ3RpdGxlTG9jYWxpemF0aW9uQXJncycsXHJcbiAgICAgIEJPRFlMT0NBTElaQVRJT05LRVk6ICdib2R5TG9jYWxpemF0aW9uS2V5JyxcclxuICAgICAgQk9EWUxPQ0FMSVpBVElPTkFSR1M6ICdib2R5TG9jYWxpemF0aW9uQXJncycsXHJcbiAgICAgIEJPRFk6ICdib2R5JyxcclxuICAgICAgSUNPTjogJ2ljb24nLFxyXG4gICAgICBTT1VORDogJ1NvdW5kJyxcclxuICAgICAgVEFHOiAnVGFnJyxcclxuICAgICAgQ09MT1I6ICdDb2xvcicsXHJcbiAgICAgIENMSUNLQUNUSU9OOiAnQ2xpY2tBY3Rpb24nLFxyXG4gICAgICBDSEFOTkVMSUQ6ICdDaGFubmVsSWQnLFxyXG4gICAgICBJTUFHRVVSTDogJ0ltYWdlVXJsJyxcclxuICAgICAgTElOSzogJ0xpbmsnLFxyXG4gICAgICBOT1RJRllJRDogJ05vdGlmeUlkJyxcclxuICAgICAgV0hFTjogJ1doZW4nLFxyXG4gICAgICBMSUdIVFNFVFRJTkdTOiAnTGlnaHRTZXR0aW5ncycsXHJcbiAgICAgIEJBREdFTlVNQkVSOiAnQmFkZ2VOdW1iZXInLFxyXG4gICAgICBJTVBPUlRBTkNFOiAnSW1wb3J0YW5jZScsXHJcbiAgICAgIFRJQ0tFUjogJ1RpY2tlcicsXHJcbiAgICAgIFZJQlJBVEVDT05GSUc6ICd2aWJyYXRlQ29uZmlnJyxcclxuICAgICAgVklTSUJJTElUWTogJ3Zpc2liaWxpdHknLFxyXG4gICAgICBJTlRFTlRVUkk6ICdpbnRlbnRVcmknLFxyXG4gICAgICBJU0FVVE9DQU5DRUw6ICdpc0F1dG9DYW5jZWwnLFxyXG4gICAgICBJU0xPQ0FMT05MWTogJ2lzTG9jYWxPbmx5JyxcclxuICAgICAgSVNERUZBVUxUTElHSFQ6ICdpc0RlZmF1bHRMaWdodCcsXHJcbiAgICAgIElTREVGQVVMVFNPVU5EOiAnaXNEZWZhdWx0U291bmQnLFxyXG4gICAgICBJU0RFRkFVTFRWSUJSQVRFOiAnaXNEZWZhdWx0VmlicmF0ZScsXHJcbiAgfTtcclxuICByZW1vdGVNc2c6YW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcclxuICAgICAgdGhpcy5yZW1vdGVNc2cgPSBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBwYXJzZSBhbGwgZWxlbWVudCx1bm9yZGVyZWRcclxuICAgKi9cclxuICBwYXJzZU1zZ0FsbEF0dHJpYnV0ZSgpIHtcclxuICAgICAgbGV0IHB1c2hSZXN1bHQgPSAnJztcclxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5yZW1vdGVNc2cpIHtcclxuICAgICAgICAgIHB1c2hSZXN1bHQgPSBwdXNoUmVzdWx0ICsga2V5ICsgJyA6ICcgKyB0aGlzLnJlbW90ZU1zZ1trZXldICsgJ1xcbic7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHB1c2hSZXN1bHQ7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIGdldENvbGxhcHNlS2V5KCkgT2J0YWlucyB0aGUgY2xhc3NpZmljYXRpb24gaWRlbnRpZmllciAoY29sbGFwc2Uga2V5KSBvZiBhIG1lc3NhZ2UuXHJcbiAgICovXHJcbiAgZ2V0Q29sbGFwc2VLZXkoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5DT0xMQVBTRUtFWV07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIGdldERhdGEoKSBPYnRhaW5zIHZhbGlkIGNvbnRlbnQgZGF0YSBvZiBhIG1lc3NhZ2UuXHJcbiAgICovXHJcbiAgZ2V0RGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLkRBVEFdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBnZXREYXRhT2ZNYXAoKSBhIG1lc3NhZ2UgbWFwLlxyXG4gICAqL1xyXG4gIGdldERhdGFPZk1hcCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLkRBVEFPRk1BUF07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIGdldE1lc3NhZ2VJZCgpIE9idGFpbnMgdGhlIElEIG9mIGEgbWVzc2FnZS5cclxuICAgKi9cclxuICBnZXRNZXNzYWdlSWQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5NRVNTQUdFSURdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBnZXRNZXNzYWdlVHlwZSgpIE9idGFpbnMgdGhlIHR5cGUgb2YgYSBtZXNzYWdlLlxyXG4gICAqL1xyXG4gIGdldE1lc3NhZ2VUeXBlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTUVTU0FHRVRZUEVdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBnZXRPcmlnaW5hbFVyZ2VuY3koKSBPYnRhaW5zIHRoZSBvcmlnaW5hbCBwcmlvcml0eSBvZiBhIG1lc3NhZ2UuXHJcbiAgICovXHJcbiAgZ2V0T3JpZ2luYWxVcmdlbmN5KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuT1JJR0lOQUxVUkdFTkNZXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogZ2V0VXJnZW5jeSgpIE9idGFpbnMgcHJpb3JpdHkgb2YgYSBtZXNzYWdlLlxyXG4gICAqL1xyXG4gIGdldFVyZ2VuY3koKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5VUkdFTkNZXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogZ2V0VHRsKCkgT2J0YWlucyB2YWxpZCBnZXRUdGwgb2YgYSBtZXNzYWdlLlxyXG4gICAqL1xyXG4gIGdldFR0bCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLlRUTF07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIGdldFNlbnRUaW1lKCkgT2J0YWlucyB0aGUgdGltZSB3aGVuIGEgbWVzc2FnZSBpcyBzZW50IGZyb20gdGhlIHNlcnZlci5cclxuICAgKi9cclxuICBnZXRTZW50VGltZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLlNFTlRUSU1FXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogZ2V0VG8oKSBPYnRhaW5zIHRoZSByZWNpcGllbnQgb2YgYSBtZXNzYWdlLlxyXG4gICAqL1xyXG4gIGdldFRvKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuVE9dO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBnZXRGcm9tKCkgT2J0YWlucyB0aGUgc2VuZGVyIG9mIGEgbWVzc2FnZS5cclxuICAgKi9cclxuICBnZXRGcm9tKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuRlJPTV07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIGdldFRva2VuKCkgT2J0YWlucyB2YWxpZCB0b2tlblxyXG4gICAqL1xyXG4gIGdldFRva2VuKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuVE9LRU5dO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0VGl0bGUoKSBPYnRhaW5zIHRoZSB0aXRsZSBvZiBhIG1lc3NhZ2VcclxuICAgKi9cclxuICBnZXROb3RpZmljYXRpb25UaXRsZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5USVRMRV07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRUaXRsZUxvY2FsaXphdGlvbktleSgpIE9idGFpbnMgdGhlIGtleSBvZiB0aGUgZGlzcGxheWVkIHRpdGxlIG9mIGEgbm90aWZpY2F0aW9uIG1lc3NhZ2VcclxuICAgKi9cclxuICBnZXRUaXRsZUxvY2FsaXphdGlvbktleSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5USVRMRUxPQ0FMSVpBVElPTktFWV07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRUaXRsZUxvY2FsaXphdGlvbkFyZ3MoKSBPYnRhaW5zIHZhcmlhYmxlIHBhcmFtZXRlcnMgb2YgdGhlIGRpc3BsYXllZCB0aXRsZSBvZiBhIG1lc3NhZ2VcclxuICAgKi9cclxuICBnZXRUaXRsZUxvY2FsaXphdGlvbkFyZ3MoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tcclxuICAgICAgICAgIENvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5USVRMRUxPQ0FMSVpBVElPTkFSR1NcclxuICAgICAgICAgIF07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRCb2R5TG9jYWxpemF0aW9uS2V5KCkgT2J0YWlucyB0aGUga2V5IG9mIHRoZSBkaXNwbGF5ZWQgY29udGVudCBvZiBhIG1lc3NhZ2VcclxuICAgKi9cclxuICBnZXRCb2R5TG9jYWxpemF0aW9uS2V5KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkJPRFlMT0NBTElaQVRJT05LRVldO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0Qm9keUxvY2FsaXphdGlvbkFyZ3MoKSBPYnRhaW5zIHZhcmlhYmxlIHBhcmFtZXRlcnMgb2YgdGhlIGRpc3BsYXllZCBjb250ZW50IG9mIGEgbWVzc2FnZVxyXG4gICAqL1xyXG4gIGdldEJvZHlMb2NhbGl6YXRpb25BcmdzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkJPRFlMT0NBTElaQVRJT05BUkdTXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldEJvZHkoKSBPYnRhaW5zIHRoZSBib2R5IG9mIGEgbWVzc2FnZVxyXG4gICAqL1xyXG4gIGdldEJvZHkoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uQk9EWV07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRJY29uKCkgT2J0YWlucyB0aGUgaWNvbiBvZiBhIG1lc3NhZ2VcclxuICAgKi9cclxuICBnZXRJY29uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklDT05dO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0U291bmQoKSBPYnRhaW5zIHRoZSBzb3VuZCBmcm9tIGEgbWVzc2FnZVxyXG4gICAqL1xyXG4gIGdldFNvdW5kKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLlNPVU5EXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldFRhZygpIE9idGFpbnMgdGhlIHRhZyBmcm9tIGEgbWVzc2FnZSBmb3IgbWVzc2FnZSBvdmVyd3JpdGluZ1xyXG4gICAqL1xyXG4gIGdldFRhZygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5UQUddO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0Q29sb3IoKSBPYnRhaW5zIHRoZSBjb2xvcnMgb2YgaWNvbnMgaW4gYSBtZXNzYWdlXHJcbiAgICovXHJcbiAgZ2V0Q29sb3IoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uQ09MT1JdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0Q2xpY2tBY3Rpb24oKSBPYnRhaW5zIGFjdGlvbnMgdHJpZ2dlcmVkIGJ5IG1lc3NhZ2UgdGFwcGluZ1xyXG4gICAqL1xyXG4gIGdldENsaWNrQWN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkNMSUNLQUNUSU9OXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldENoYW5uZWxJZCgpIE9idGFpbnMgSURzIG9mIGNoYW5uZWxzIHRoYXQgc3VwcG9ydCB0aGUgZGlzcGxheSBvZiBtZXNzYWdlc1xyXG4gICAqL1xyXG4gIGdldENoYW5uZWxJZCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5DSEFOTkVMSURdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0SW1hZ2VVcmwoKSBPYnRhaW5zIHRoZSBpbWFnZSBVUkwgZnJvbSBhIG1lc3NhZ2VcclxuICAgKi9cclxuICBnZXRJbWFnZVVybCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JTUFHRVVSTF07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRMaW5rKCkgT2J0YWlucyB0aGUgVVJMIHRvIGJlIGFjY2Vzc2VkIGZyb20gYSBtZXNzYWdlXHJcbiAgICovXHJcbiAgZ2V0TGluaygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5MSU5LXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldE5vdGlmeUlkKCkgT2J0YWlucyB0aGUgdW5pcXVlIElEIG9mIGEgbWVzc2FnZVxyXG4gICAqL1xyXG4gIGdldE5vdGlmeUlkKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLk5PVElGWUlEXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldFdoZW4oKVxyXG4gICAqL1xyXG4gIGdldFdoZW4oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uV0hFTl07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRMaWdodFNldHRpbmdzKClcclxuICAgKi9cclxuICBnZXRMaWdodFNldHRpbmdzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkxJR0hUU0VUVElOR1NdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0QmFkZ2VOdW1iZXIoKVxyXG4gICAqL1xyXG4gIGdldEJhZGdlTnVtYmVyKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkJBREdFTlVNQkVSXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldEltcG9ydGFuY2UoKVxyXG4gICAqL1xyXG4gIGdldEltcG9ydGFuY2UoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSU1QT1JUQU5DRV07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRUaWNrZXIoKVxyXG4gICAqL1xyXG4gIGdldFRpY2tlcigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5USUNLRVJdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0VmlicmF0ZUNvbmZpZygpXHJcbiAgICovXHJcbiAgZ2V0VmlicmF0ZUNvbmZpZygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5WSUJSQVRFQ09ORklHXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldFZpc2liaWxpdHkoKVxyXG4gICAqL1xyXG4gIGdldFZpc2liaWxpdHkoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVklTSUJJTElUWV07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRJbnRlbnRVcmkoKVxyXG4gICAqL1xyXG4gIGdldEludGVudFVyaSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JTlRFTlRVUkldO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246aXNBdXRvQ2FuY2VsKClcclxuICAgKi9cclxuICBpc0F1dG9DYW5jZWwoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSVNBVVRPQ0FOQ0VMXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldEludGVudFVyaSgpXHJcbiAgICovXHJcbiAgaXNMb2NhbE9ubHkoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSVNMT0NBTE9OTFldO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246aXNEZWZhdWx0TGlnaHQoKVxyXG4gICAqL1xyXG4gIGlzRGVmYXVsdExpZ2h0KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklTREVGQVVMVExJR0hUXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmlzRGVmYXVsdFNvdW5kKClcclxuICAgKi9cclxuICBpc0RlZmF1bHRTb3VuZCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JU0RFRkFVTFRTT1VORF07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjppc0RlZmF1bHRWaWJyYXRlKClcclxuICAgKi9cclxuICBpc0RlZmF1bHRWaWJyYXRlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklTREVGQVVMVFZJQlJBVEVdO1xyXG4gIH1cclxufVxyXG5cclxudHlwZSBMb2NhbE5vdGlmaWNhdGlvbk9iamVjdCA9IHtcclxuICBba2V5IGluIEF0dHJdPzogYW55O1xyXG59O1xyXG5cclxudHlwZSBSZW1vdGVNZXNzYWdlT2JqZWN0PXtcclxuICBba2V5IGluIFJlbW90ZU1lc3NhZ2VCdWlsZGVyXT86YW55O1xyXG59XHJcblxyXG4iXX0=