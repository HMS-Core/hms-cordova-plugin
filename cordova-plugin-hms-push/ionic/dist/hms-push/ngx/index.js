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
import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HmsPush = /** @class */ (function (_super) {
    __extends(HmsPush, _super);
    function HmsPush() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
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
     */
    HmsPush.prototype.getToken = function () { return cordova(this, "getToken", { "otherPromise": true }, arguments); };
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
     */
    HmsPush.prototype.deleteToken = function () { return cordova(this, "deleteToken", { "otherPromise": true }, arguments); };
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
    /** This method is used to test.
     * @returns Promise<string>
     */
    HmsPush.prototype.test = function () { return cordova(this, "test", { "otherPromise": true }, arguments); };
    HmsPush.prototype.getInitialNotification = function () { return cordova(this, "getInitialNotification", { "otherPromise": true }, arguments); };
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
        _this.CUSTOM_INTENT_EVENT = "CUSTOM_INTENT_EVENT";
        _this.ON_PUSH_MESSAGE_SENT_DELIVERED = "ON_PUSH_MESSAGE_SENT_DELIVERED";
        _this.PUSH_ON_START_COMMAND_EVENT = "PUSH_ON_START_COMMAND_EVENT";
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
    HmsPushEvent.prototype.onCustomIntent = function (result) {
        window.registerHMSEvent("CUSTOM_INTENT_EVENT", result);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1wdXNoL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7RUFjRTs7QUFFRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQTBGLE1BQU0sb0JBQW9CLENBQUM7O0lBK0IvRiwyQkFBaUI7OztRQUc1QywwQkFBb0IsR0FBQyxvQkFBb0IsQ0FBQzs7O0lBRzFDOzs7O09BSUc7SUFDSCxzQkFBSTtJQUtKLDhCQUFZO0lBS1osK0JBQWE7SUFLYjs7OztPQUlHO0lBQ0gsNEJBQVU7SUFLVjs7O09BR0c7SUFDSCw2QkFBVztJQUtYOzs7T0FHRztJQUNILHVCQUFLO0lBS0w7OztPQUdHO0lBQ0gseUJBQU87SUFLUDs7O09BR0c7SUFDSCwwQkFBUTtJQUtSOzs7T0FHRztJQUNILGlDQUFlO0lBS2Y7OztPQUdHO0lBQ0gsNEJBQVU7SUFLVjs7O09BR0c7SUFDSCw2QkFBVztJQUtYOzs7O09BSUc7SUFDSCwyQkFBUyxhQUFDLEdBQVc7SUFLckI7Ozs7T0FJRztJQUNILDZCQUFXLGFBQUMsR0FBVztJQUt2QixvQ0FBa0IsYUFBQyxJQUFZO0lBSy9CLHlCQUFPO0lBS1A7OztPQUdHO0lBQ0gsbUNBQWlCO0lBS2pCOztPQUVHO0lBQ0gsc0JBQUk7SUFLSix3Q0FBc0I7SUFLdEIsbUNBQWlCLGFBQUMsSUFBeUI7Ozs7O0lBdkpoQyxPQUFPO1FBRG5CLFVBQVUsRUFBRTtPQUNBLE9BQU87a0JBaERwQjtFQWdENkIsaUJBQWlCO1NBQWpDLE9BQU87O0lBa0xzQix3Q0FBaUI7OztRQUV2RCwwQkFBb0IsR0FBQyxvQkFBb0IsQ0FBQztRQUMxQyxVQUFJLEdBQUMsSUFBSSxDQUFDO1FBQ1YsZ0JBQVUsR0FBQyxVQUFVLENBQUM7UUFDdEIsY0FBUSxH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QyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsc0NBQU8sR0FBUDtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsdUNBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVEOztPQUVHO0lBQ0gscUNBQU0sR0FBTjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsdUNBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsNkNBQWMsR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsMkNBQVksR0FBWjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsMENBQVcsR0FBWDtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsc0NBQU8sR0FBUDtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsMENBQVcs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QUFVLENBQUM7SUFDdEIsdUJBQUUsR0FBRSxJQUFJLENBQUM7SUFDVCx5QkFBSSxHQUFFLE1BQU0sQ0FBQztJQUNiLDBCQUFLLEdBQUcsT0FBTyxDQUFDO0lBRWhCLGlDQUFZLEdBQUc7UUFDbEIsS0FBSyxFQUFFLE9BQU87UUFDZCxvQkFBb0IsRUFBRSxzQkFBc0I7UUFDNUMscUJBQXFCLEVBQUUsdUJBQXVCO1FBQzlDLG1CQUFtQixFQUFFLHFCQUFxQjtRQUMxQyxvQkFBb0IsRUFBRSxzQkFBc0I7UUFDNUMsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsTUFBTTtRQUNaLEtBQUssRUFBRSxPQUFPO1FBQ2QsR0FBRyxFQUFFLEtBQUs7UUFDVixLQUFLLEVBQUUsT0FBTztRQUNkLFdBQVcsRUFBRSxhQUFhO1FBQzFCLFNBQVMsRUFBRSxXQUFXO1FBQ3RCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLFVBQVU7UUFDcEIsSUFBSSxFQUFFLE1BQU07UUFDWixhQUFhLEVBQUUsZUFBZTtRQUM5QixXQUFXLEVBQUUsYUFBYTtRQUMxQixVQUFVLEVBQUUsWUFBWTtRQUN4QixNQUFNLEVBQUUsUUFBUTtRQUNoQixhQUFhLEVBQUUsZUFBZTtRQUM5QixVQUFVLEVBQUUsWUFBWTtRQUN4QixTQUFTLEVBQUUsV0FBVztRQUN0QixZQUFZLEVBQUUsY0FBYztRQUM1QixXQUFXLEVBQUUsYUFBYTtRQUMxQixjQUFjLEVBQUUsZ0JBQWdCO1FBQ2hDLGNBQWMsRUFBRSxnQkFBZ0I7UUFDaEMsZ0JBQWdCLEVBQUUsa0JBQWtCO0tBQ3ZDLENBQUM7K0JBNW5CSjs7U0Ewa0JhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbkNvcHlyaWdodCAyMDIwLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5cclxuICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuXHJcbiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEhtc1B1c2hcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoZSBDb3Jkb3ZhIFB1c2ggUGx1Z2luIGVuYWJsZXMgY29tbXVuaWNhdGlvbiBiZXR3ZWVuIEh1YXdlaSBQdXNoIEtpdCBTREsgYW5kIENvcmRvdmEgcGxhdGZvcm0uIFRoaXMgcGx1Z2luIGV4cG9zZXMgYWxsIGZ1bmN0aW9uYWxpdHkgcHJvdmlkZWQgYnkgSHVhd2VpIFB1c2ggS2l0IFNESy5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgSG1zUHVzaCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaG1zLXB1c2gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGhtc1B1c2g6IEhtc1B1c2gpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5oTVNQdXNoLnR1cm5PblB1c2goKVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSG1zUHVzaCcsXHJcbiAgcGx1Z2luOiAnY29tLXBsdWdpbi1obXMtcHVzaCcsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gIHBsdWdpblJlZjogJ0htc1B1c2gnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSG1zUHVzaCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuXHJcbiAgSG1zUHVzaFJlc3VsdENvZGU6SG1zUHVzaFJlc3VsdENvZGVcclxuICBDb3Jkb3ZhUmVtb3RlTWVzc2FnZT1Db3Jkb3ZhUmVtb3RlTWVzc2FnZTtcclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCAgaW5pdGlhbGl6ZWQgSG1zUHVzaC4gXHJcbiAgICBcclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+IFxyXG4gICAqL1xyXG4gIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGVuYWJsZUxvZ2dlcigpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGRpc2FibGVMb2dnZXIoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGRpc2FibGUgdGhlIGRpc3BsYXkgb2Ygbm90aWZpY2F0aW9uIG1lc3NhZ2VzLiBJZiB5b3Ugd2FudCB0byBjb250cm9sIHRoZSBkaXNwbGF5IG9mIG5vdGlmaWNhdGlvbiBtZXNzYWdlcyBpbiBhbiBhcHAsIHlvdSBjYW4gY2FsbCB0aGlzIG1ldGhvZC4gVGhpcyBtZXRob2QgYXBwbGllcyB0byBub3RpZmljYXRpb24gbWVzc2FnZXMgYnV0IG5vdCBkYXRhIG1lc3NhZ2VzLiBJdCBpcyB0aGUgYXBwIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGVuYWJsZSBvciBkaXNhYmxlIGRhdGEgbWVzc2FnaW5nLlxyXG4gICAgXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+IFxyXG4gICAqL1xyXG4gIHR1cm5PblB1c2goKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBlbmFibGUgdGhlIGRpc3BsYXkgb2Ygbm90aWZpY2F0aW9uIG1lc3NhZ2VzLiBJZiB5b3Ugd2FudCB0byBjb250cm9sIHRoZSBkaXNwbGF5IG9mIG5vdGlmaWNhdGlvbiBtZXNzYWdlcyBpbiBhbiBhcHAsIHlvdSBjYW4gY2FsbCB0aGlzIG1ldGhvZC4gVGhpcyBtZXRob2QgYXBwbGllcyB0byBub3RpZmljYXRpb24gbWVzc2FnZXMgYnV0IG5vdCBkYXRhIG1lc3NhZ2VzLiBJdCBpcyB0aGUgYXBwIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGVuYWJsZSBvciBkaXNhYmxlIGRhdGEgbWVzc2FnaW5nLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAqL1xyXG4gIHR1cm5PZmZQdXNoKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gb2J0YWluIGFuIEFBSUQgaW4gc3luY2hyb25vdXMgbW9kZS4gQmVmb3JlIGFwcGx5aW5nIGZvciBhIHRva2VuLCBhbiBhcHAgY2FsbHMgdGhpcyBtZXRob2QgdG8gb2J0YWluIGl0cyB1bmlxdWUgQUFJRC4gVGhlIEhVQVdFSSBQdXNoIHNlcnZlciBnZW5lcmF0ZXMgYSB0b2tlbiBmb3IgdGhlIGFwcCBiYXNlZCBvbiB0aGUgQUFJRC4gSWYgdGhlIEFBSUQgb2YgdGhlIGFwcCBjaGFuZ2VzLCBhIG5ldyB0b2tlbiB3aWxsIGJlIGdlbmVyYXRlZCBuZXh0IHRpbWUgd2hlbiB0aGUgYXBwIGFwcGxpZXMgZm9yIGEgdG9rZW4uIElmIGFuIGFwcCBuZWVkcyB0byByZXBvcnQgc3RhdGlzdGljcyBldmVudHMsIGl0IG11c3QgY2FycnkgdGhlIEFBSUQgYXMgaXRzIHVuaXF1ZSBJRC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgKi9cclxuICBnZXRJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIG9idGFpbiBhbiBBQUlEIGluIGFzeW5jaHJvbm91cyBtb2RlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAqL1xyXG4gIGdldEFBSUQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBvYnRhaW4gYSB0b2tlbiByZXF1aXJlZCBmb3IgYWNjZXNzaW5nIEhVQVdFSSBQdXNoIEtpdC4gSWYgdGhlcmUgaXMgbm8gbG9jYWwgQUFJRCwgdGhpcyBtZXRob2Qgd2lsbCBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlIGFuIEFBSUQgd2hlbiBpdCBpcyBjYWxsZWQgYmVjYXVzZSB0aGUgSFVBV0VJIFB1c2ggS2l0IHNlcnZlciBuZWVkcyB0byBnZW5lcmF0ZSBhIHRva2VuIGJhc2VkIG9uIHRoZSBBQUlELlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAqL1xyXG4gIGdldFRva2VuKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gb2J0YWluIHRoZSBnZW5lcmF0aW9uIHRpbWVzdGFtcCBvZiBhbiBBQUlELlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAqL1xyXG4gIGdldENyZWF0aW9uVGltZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGRlbGV0ZSBhIGxvY2FsIEFBSUQgYW5kIGl0cyBnZW5lcmF0aW9uIHRpbWVzdGFtcC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgKi9cclxuICBkZWxldGVBQUlEKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gZGVsZXRlIGEgdG9rZW4uIEFmdGVyIGEgdG9rZW4gaXMgZGVsZXRlZCwgdGhlIGNvcnJlc3BvbmRpbmcgQUFJRCB3aWxsIG5vdCBiZSBkZWxldGVkLiBUaGlzIG1ldGhvZCBpcyBhIHN5bmNocm9ub3VzIG1ldGhvZC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgKi9cclxuICBkZWxldGVUb2tlbigpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIHN1YnNjcmliZSB0byB0b3BpY3MgaW4gYXN5bmNocm9ub3VzIG1vZGUuIFRoZSBIVUFXRUkgUHVzaCBLaXQgdG9waWMgbWVzc2FnaW5nIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gc2VuZCBtZXNzYWdlcyB0byBtdWx0aXBsZSBkZXZpY2VzIHdob3NlIHVzZXJzIGhhdmUgc3Vic2NyaWJlZCB0byBhIHNwZWNpZmljIHRvcGljLiBZb3UgY2FuIHdyaXRlIG1lc3NhZ2VzIGFib3V0IHRoZSB0b3BpYyBhcyByZXF1aXJlZCwgYW5kIEhVQVdFSSBQdXNoIEtpdCBkZXRlcm1pbmVzIHRoZSByZWxlYXNlIHBhdGggYW5kIHNlbmRzIG1lc3NhZ2VzIHRvIHRoZSBjb3JyZWN0IGRldmljZXMgaW4gYSByZWxpYWJsZSBtYW5uZXIuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFyZyBUb3BpYyB0byBiZSBzdWJzY3JpYmVkIHRvLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAqL1xyXG4gIHN1YnNjcmliZShhcmc6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gdW5zdWJzY3JpYmUgZnJvbSB0b3BpY3MgdGhhdCBhcmUgc3Vic2NyaWJlZCB0byB0aHJvdWdoIHRoZSBzdWJzY3JpYmUgbWV0aG9kLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhcmcgVG9waWMgdG8gYmUgdW5zdWJzY3JpYmVkIHRvLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAqL1xyXG4gIHVuc3Vic2NyaWJlKGFyZzogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2V0QXV0b0luaXRFbmFibGVkKGFyZ3M6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldE9kaWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBjaGVjayB3aGV0aGVyIGF1dG9tYXRpYyBpbml0aWFsaXphdGlvbiBpcyBlbmFibGVkLiAgXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICovXHJcbiAgaXNBdXRvSW5pdEVuYWJsZWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gdGVzdC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgKi9cclxuICB0ZXN0KCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldEluaXRpYWxOb3RpZmljYXRpb24oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2VuZFJlbW90ZU1lc3NhZ2UoYXJnczogUmVtb3RlTWVzc2FnZU9iamVjdCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxufVxyXG5cclxudHlwZSBIYW5kbGVyID0gKGRhdGE6IGFueSkgPT4gdm9pZDtcclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICAgICAgaG1zRXZlbnRIYW5kbGVyczoge1xyXG4gICAgICAgICAgICBba2V5OiBzdHJpbmddOiBIYW5kbGVyW11cclxuICAgICAgICB9LFxyXG4gICAgICAgIGhtc0V2ZW50SGFuZGxlcjogKGV2ZW50TmFtZTogc3RyaW5nLCBkYXRhOiBhbnkpID0+IHZvaWQsXHJcbiAgICAgICAgcmVnaXN0ZXJITVNFdmVudDogKGV2ZW50TmFtZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSA9PiB2b2lkXHJcbiAgICAgICAgdW5yZWdpc3RlckhNU0V2ZW50OiAoZXZlbnROYW1lOiBzdHJpbmcsIGhhbmRsZXI/OiBIYW5kbGVyKSA9PiB2b2lkXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0htc0xvY2FsTm90aWZpY2F0aW9uJyxcclxuICBwbHVnaW46ICdjb20tcGx1Z2luLWhtcy1wdXNoJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnSG1zTG9jYWxOb3RpZmljYXRpb24nLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSG1zTG9jYWxOb3RpZmljYXRpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcblxyXG4gICAgQ29yZG92YVJlbW90ZU1lc3NhZ2U9Q29yZG92YVJlbW90ZU1lc3NhZ2U7XHJcbiAgICBBdHRyPUF0dHI7XHJcbiAgICBJbXBvcnRhbmNlPUltcG9ydGFuY2U7XHJcbiAgICBQcmlvcml0eT1Qcmlvcml0eVxyXG4gICAgUmVtb3RlTWVzc2FnZUJ1aWxkZXI9UmVtb3RlTWVzc2FnZUJ1aWxkZXJcclxuICAgIFJlcGVhdFR5cGU9UmVwZWF0VHlwZVxyXG4gICAgVmlzaWJpbGl0eT1WaXNpYmlsaXR5XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgbG9jYWxOb3RpZmljYXRpb24oYXJnczogTG9jYWxOb3RpZmljYXRpb25PYmplY3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBsb2NhbE5vdGlmaWNhdGlvblNjaGVkdWxlKGFyZ3M6IExvY2FsTm90aWZpY2F0aW9uT2JqZWN0KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY2FuY2VsQWxsTm90aWZpY2F0aW9ucygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY2FuY2VsTm90aWZpY2F0aW9ucygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY2FuY2VsU2NoZWR1bGVkTm90aWZpY2F0aW9ucygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY2FuY2VsTm90aWZpY2F0aW9uc1dpdGhJZChhcmdzOiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY2FuY2VsTm90aWZpY2F0aW9uc1dpdGhJZFRhZyhhcmdzOiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY2FuY2VsTm90aWZpY2F0aW9uc1dpdGhUYWcoYXJnczogYW55KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldE5vdGlmaWNhdGlvbnMoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0U2NoZWR1bGVkTm90aWZpY2F0aW9ucygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBnZXRDaGFubmVscygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBjaGFubmVsRXhpc3RzKGFyZ3M6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGNoYW5uZWxCbG9ja2VkKGFyZ3M6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGRlbGV0ZUNoYW5uZWwoYXJnczogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0htc1B1c2hFdmVudCcsXHJcbiAgcGx1Z2luOiAnY29tLXBsdWdpbi1obXMtcHVzaCcsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gIHBsdWdpblJlZjogJ0htc1B1c2hFdmVudCcsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIbXNQdXNoRXZlbnQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcblxyXG5vblJlbW90ZU1lc3NhZ2VSZWNlaXZlZCAocmVzdWx0OmFueSkge1xyXG4gIHdpbmRvdy5yZWdpc3RlckhNU0V2ZW50KFwiUkVNT1RFX0RBVEFfTUVTU0FHRV9SRUNFSVZFRFwiLHJlc3VsdClcclxufVxyXG5vblRva2VuUmVjZWl2ZWQgKHJlc3VsdDphbnkpIHtcclxuICB3aW5kb3cucmVnaXN0ZXJITVNFdmVudChcIlRPS0VOX1JFQ0VJVkVEX0VWRU5UXCIscmVzdWx0KVxyXG59XHJcbm9uVG9rZW5FcnJvciAocmVzdWx0OmFueSkge1xyXG4gIHdpbmRvdy5yZWdpc3RlckhNU0V2ZW50KFwiT05fVE9LRU5fRVJST1JfRVZFTlRcIixyZXN1bHQpXHJcbn1cclxuIG9uUHVzaE1lc3NhZ2VTZW50IChyZXN1bHQ6YW55KSB7XHJcbiAgd2luZG93LnJlZ2lzdGVySE1TRXZlbnQoXCJPTl9QVVNIX01FU1NBR0VfU0VOVFwiLHJlc3VsdClcclxuIH1cclxub25QdXNoTWVzc2FnZVNlbnRFcnJvciAocmVzdWx0OmFueSkge1xyXG4gIHdpbmRvdy5yZWdpc3RlckhNU0V2ZW50KFwiT05fUFVTSF9NRVNTQUdFX1NFTlRfRVJST1JcIixyZXN1bHQpXHJcbn1cclxub25QdXNoTWVzc2FnZVNlbnREZWxpdmVyZWQgKHJlc3VsdDphbnkpIHtcclxuICB3aW5kb3cucmVnaXN0ZXJITVNFdmVudChcIk9OX1BVU0hfTUVTU0FHRV9TRU5UX0RFTElWRVJFRFwiLHJlc3VsdClcclxufVxyXG5vbkxvY2FsTm90aWZpY2F0aW9uQWN0aW9uIChyZXN1bHQ6YW55KSB7XHJcbiAgd2luZG93LnJlZ2lzdGVySE1TRXZlbnQoXCJMT0NBTF9OT1RJRklDQVRJT05fQUNUSU9OX0VWRU5UXCIscmVzdWx0KVxyXG59XHJcbm9uTm90aWZpY2F0aW9uT3BlbmVkQXBwIChyZXN1bHQ6YW55KSB7XHJcbiAgd2luZG93LnJlZ2lzdGVySE1TRXZlbnQoXCJOT1RJRklDQVRJT05fT1BFTkVEX0VWRU5UXCIscmVzdWx0KVxyXG59XHJcbm9uQ3VzdG9tSW50ZW50IChyZXN1bHQ6YW55KSB7XHJcbiAgd2luZG93LnJlZ2lzdGVySE1TRXZlbnQoXCJDVVNUT01fSU5URU5UX0VWRU5UXCIscmVzdWx0KVxyXG59XHJcblxyXG5SRU1PVEVfREFUQV9NRVNTQUdFX1JFQ0VJVkVEID0gXCJSRU1PVEVfREFUQV9NRVNTQUdFX1JFQ0VJVkVEXCJcclxuVE9LRU5fUkVDRUlWRURfRVZFTlQgPSBcIlRPS0VOX1JFQ0VJVkVEX0VWRU5UXCJcclxuT05fVE9LRU5fRVJST1JfRVZFTlQgPSBcIk9OX1RPS0VOX0VSUk9SX0VWRU5UXCJcclxuTk9USUZJQ0FUSU9OX09QRU5FRF9FVkVOVCA9IFwiTk9USUZJQ0FUSU9OX09QRU5FRF9FVkVOVFwiXHJcbkxPQ0FMX05PVElGSUNBVElPTl9BQ1RJT05fRVZFTlQgPSBcIkxPQ0FMX05PVElGSUNBVElPTl9BQ1RJT05fRVZFTlRcIlxyXG5PTl9QVVNIX01FU1NBR0VfU0VOVCA9IFwiT05fUFVTSF9NRVNTQUdFX1NFTlRcIlxyXG5PTl9QVVNIX01FU1NBR0VfU0VOVF9FUlJPUiA9IFwiT05fUFVTSF9NRVNTQUdFX1NFTlRfRVJST1JcIlxyXG5DVVNUT01fSU5URU5UX0VWRU5UPVwiQ1VTVE9NX0lOVEVOVF9FVkVOVFwiXHJcbk9OX1BVU0hfTUVTU0FHRV9TRU5UX0RFTElWRVJFRCA9IFwiT05fUFVTSF9NRVNTQUdFX1NFTlRfREVMSVZFUkVEXCJcclxuUFVTSF9PTl9TVEFSVF9DT01NQU5EX0VWRU5UID0gXCJQVVNIX09OX1NUQVJUX0NPTU1BTkRfRVZFTlRcIlxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSG1zUHVzaFJlc3VsdENvZGUge1xyXG4gIC8vIFN1Y2Nlc3NcclxuICBTVUNDRVNTOiAwLFxyXG5cclxuICAvLyBFcnJvclxyXG4gIEVSUk9SOiAtMSxcclxuXHJcbiAgLy8gQnVuZGxlIGlzIG51bGwsIGV4Y2VwdGlvblxyXG4gIE5VTExfQlVORExFOiAzMzMsXHJcblxyXG4gIC8vIFlvdSBkbyBub3QgaGF2ZSBhIHRva2VuLiBBcHBseSBmb3IgYSB0b2tlbi5cclxuICBFUlJPUl9OT19UT0tFTjogOTA3MTIyMDMwLFxyXG5cclxuICAvLyBUaGUgY3VycmVudCBuZXR3b3JrIGlzIHVuYXZhaWxhYmxlLiBDaGVjayB0aGUgbmV0d29yayBjb25uZWN0aW9uLlxyXG4gIEVSUk9SX05PX05FVFdPUks6IDkwNzEyMjAzMSxcclxuXHJcbiAgLy8gVGhlIHRva2VuIGhhcyBleHBpcmVkLiBEZWxldGUgdGhlIHRva2VuIGFuZCBhcHBseSBmb3IgYSBuZXcgb25lLlxyXG4gIEVSUk9SX1RPS0VOX0lOVkFMSUQ6IDkwNzEyMjAzMixcclxuXHJcbiAgLy8gSWYgdGhlIFB1c2ggc2VydmljZSBpcyB1bmF2YWlsYWJsZSwgY29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXHJcbiAgRVJST1JfU0VSVklDRV9OT1RfQVZBSUxBQkxFOiA5MDcxMjIwNDYsXHJcblxyXG4gIC8vIElmIHRoZSBQdXNoIHNlcnZlciByZXR1cm5zIGFuIGVycm9yLCBjb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICBFUlJPUl9QVVNIX1NFUlZFUjogOTA3MTIyMDQ3LFxyXG5cclxuICAvLyBVbmtub3duIGVycm9yLiBDb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICBFUlJPUl9VTktOT1dOOiA5MDcxMjIwNDUsXHJcblxyXG4gIC8vIFRoZSBudW1iZXIgb2Ygc3Vic2NyaWJlZCB0b3BpY3MgZXhjZWVkcyAyMDAwLlxyXG4gIEVSUk9SX1RPUElDX0VYQ0VFRDogOTA3MTIyMDM0LFxyXG5cclxuICAvLyBGYWlsZWQgdG8gc2VuZCB0aGUgc3Vic2NyaXB0aW9uIHRvcGljLiBDb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICBFUlJPUl9UT1BJQ19TRU5EOiA5MDcxMjIwMzUsXHJcblxyXG4gIC8vIFB1c2ggcmlnaHRzIGFyZSBub3QgZW5hYmxlZC4gRW5hYmxlIHRoZSBzZXJ2aWNlIGFuZCBzZXQgcHVzaCBzZXJ2aWNlIHBhcmFtZXRlcnMgYXQgQXBwR2FsbGVyeSBDb25uZWN0LlxyXG4gIEVSUk9SX05PX1JJR0hUOiA5MDcxMjIwMzYsXHJcblxyXG4gIC8vIEZhaWxlZCB0byBhcHBseSBmb3IgdGhlIHRva2VuLiBDb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICBFUlJPUl9HRVRfVE9LRU5fRVJSOiA5MDcxMjIwMzcsXHJcblxyXG4gIC8vIE5vIHN0b3JhZ2UgbG9jYXRpb24gaXMgc2VsZWN0ZWQgZm9yIHRoZSBhcHBsaWNhdGlvbiBvciB0aGUgc3RvcmFnZSBsb2NhdGlvbiBpcyBpbnZhbGlkLlxyXG4gIEVSUk9SX1NUT1JBR0VfTE9DQVRJT05fRU1QVFk6IDkwNzEyMjAzOCxcclxuXHJcbiAgLy8gRmFpbGVkIHRvIGFwcGx5IGZvciBhIHRva2VuLiBDcm9zcy1yZWdpb24gdG9rZW4gYXBwbGljYXRpb24gaXMgbm90IGFsbG93ZWQuXHJcbiAgRVJST1JfTk9UX0FMTE9XX0NST1NTX0FQUExZOiA5MDcxMjIwNTMsXHJcblxyXG4gIC8vIFRoZSBtZXNzYWdlIGJvZHkgc2l6ZSBleGNlZWRzIHRoZSBtYXhpbXVtLlxyXG4gIEVSUk9SX1NJWkU6IDkwNzEyMjA0MSxcclxuXHJcbiAgLy8gVGhlIG1lc3NhZ2UgY29udGFpbnMgaW52YWxpZCBwYXJhbWV0ZXJzLlxyXG4gIEVSUk9SX0lOVkFMSURfUEFSQU1FVEVSUzogOTA3MTIyMDQyLFxyXG5cclxuICAvLyBUaGUgbnVtYmVyIG9mIHNlbnQgbWVzc2FnZXMgcmVhY2hlcyB0aGUgdXBwZXIgbGltaXQuIFRoZSBtZXNzYWdlcyB3aWxsIGJlIGRpc2NhcmRlZC5cclxuICBFUlJPUl9UT09fTUFOWV9NRVNTQUdFUzogOTA3MTIyMDQzLFxyXG5cclxuICAvLyBUaGUgbWVzc2FnZSBsaWZldGltZSBleHBpcmVzIGJlZm9yZSB0aGUgbWVzc2FnZSBpcyBzdWNjZXNzZnVsbHkgc2VudCB0byB0aGUgQVBQIHNlcnZlci5cclxuICBFUlJPUl9UVExfRVhDRUVERUQ6IDkwNzEyMjA0NCxcclxuXHJcbiAgLy8gIEh1YXdlaSBNb2JpbGUgU2VydmljZXMgKEFQSykgY2FuJ3QgY29ubmVjdCAgSHVhd2VpIFB1c2ggIEtpdC5cclxuICBFUlJPUl9ITVNfQ0xJRU5UX0FQSTogOTA3MTIyMDQ4LFxyXG5cclxuICAvLyBUaGUgY3VycmVudCBFTVVJIHZlcnNpb24gaXMgdG9vIGVhcmx5IHRvIHVzZSB0aGUgY2FwYWJpbGl0eS5cclxuICBFUlJPUl9PUEVSQVRJT05fTk9UX1NVUFBPUlRFRDogOTA3MTIyMDQ5LFxyXG5cclxuICAvLyBUaGUgb3BlcmF0aW9uIGNhbm5vdCBiZSBwZXJmb3JtZWQgaW4gdGhlIG1haW4gdGhyZWFkLlxyXG4gIEVSUk9SX01BSU5fVEhSRUFEOiA5MDcxMjIwNTAsXHJcblxyXG4gIC8vIFRoZSBkZXZpY2UgY2VydGlmaWNhdGUgYXV0aGVudGljYXRpb24gZmFpbHMuXHJcbiAgRVJST1JfSE1TX0RFVklDRV9BVVRIX0ZBSUxFRF9TRUxGX01BUFBJTkc6IDkwNzEyMjA1MSxcclxuXHJcbiAgLy8gRmFpbGVkIHRvIGJpbmQgdGhlIHNlcnZpY2UuXHJcbiAgRVJST1JfQklORF9TRVJWSUNFX1NFTEZfTUFQUElORzogOTA3MTIyMDUyLFxyXG5cclxuICAvLyBUaGUgU0RLIGlzIGJlaW5nIGF1dG9tYXRpY2FsbHkgaW5pdGlhbGl6ZWQuIFRyeSBhZ2FpbiBsYXRlci5cclxuICBFUlJPUl9BVVRPX0lOSVRJQUxJWklORzogOTA3MTIyMDU0LFxyXG5cclxuICAvKlRoZSBpbnB1dCBwYXJhbWV0ZXIgaXMgaW5jb3JyZWN0LiBDaGVjayB3aGV0aGVyIHRoZSByZWxhdGVkIGNvbmZpZ3VyYXRpb24gaW5mb3JtYXRpb24gaXMgY29ycmVjdC5cclxuICAgKiBFeGFtcGxlOiBhcHBfaWQgaW4gdGhlIGFnY29ubmVjdCAtIHNlcnZpY2VzLmpzb24gZmlsZTtcclxuICAgKiBDaGVjayB3aGV0aGVyIHRoZSBidWlsZC5ncmFkbGUgZmlsZSBpcyBjb25maWd1cmVkIHdpdGggdGhlIGNlcnRpZmljYXRlIHNpZ25hdHVyZS5cclxuICAgKi9cclxuICBFUlJPUl9BUkdVTUVOVFNfSU5WQUxJRDogOTA3MTM1MDAwLFxyXG5cclxuICAvLyBJbnRlcm5hbCBQdXNoIGVycm9yLiBDb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydCBlbmdpbmVlcnMuXHJcbiAgRVJST1JfSU5URVJOQUxfRVJST1I6IDkwNzEzNTAwMSxcclxuXHJcbiAgLy8gVGhlIHNlcnZpY2UgZG9lcyBub3QgZXhpc3QuIFRoZSBpbnZva2VkIGludGVyZmFjZSBkb2VzIG5vdCBleGlzdC5cclxuICBFUlJPUl9OQU1JTkdfSU5WQUxJRDogOTA3MTM1MDAyLFxyXG5cclxuICAvLyBUaGUgQXBpQ2xpZW50IG9iamVjdCBpcyBpbnZhbGlkLlxyXG4gIEVSUk9SX0NMSUVOVF9BUElfSU5WQUxJRDogOTA3MTM1MDAzLFxyXG5cclxuICAvLyBJbnZva2luZyBBSURMIHRpbWVzIG91dC4gQ29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXHJcbiAgRVJST1JfRVhFQ1VURV9USU1FT1VUOiA5MDcxMzUwMDQsXHJcblxyXG4gIC8vIFRoZSBjdXJyZW50IGFyZWEgZG9lcyBub3Qgc3VwcG9ydCB0aGlzIHNlcnZpY2UuXHJcbiAgRVJST1JfTk9UX0lOX1NFUlZJQ0U6IDkwNzEzNTAwNSxcclxuXHJcbiAgLy8gSWYgdGhlIEFJREwgY29ubmVjdGlvbiBzZXNzaW9uIGlzIGludmFsaWQsIGNvbnRhY3QgSHVhd2VpIHRlY2huaWNhbCBzdXBwb3J0LlxyXG4gIEVSUk9SX1NFU1NJT05fSU5WQUxJRDogOTA3MTM1MDA2LFxyXG5cclxuICAvLyBBbiBlcnJvciBvY2N1cnJlZCB3aGVuIGludm9raW5nIGFuIHVuc3BlY2lmaWVkIEFQSS5cclxuICBFUlJPUl9BUElfTk9UX1NQRUNJRklFRDogMTAwMixcclxuXHJcbiAgLyogRmFpbGVkIHRvIGludm9rZSB0aGUgZ2F0ZXdheSB0byBxdWVyeSB0aGUgYXBwbGljYXRpb24gc2NvcGUuXHJcbiAgICogQ2hlY2sgd2hldGhlciB0aGUgY3VycmVudCBhcHAgaGFzIGJlZW4gY3JlYXRlZCBhbmQgZW5hYmxlZCBpbiBBcHBHYWxsZXJ5IENvbm5lY3QuXHJcbiAgICogSWYgeWVzLCBjb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICAgKi9cclxuICBFUlJPUl9HRVRfU0NPUEVfRVJST1I6IDkwNzEzNTcwMCxcclxuICAvKiBTY29wZSBpcyBub3QgY29uZmlndXJlZCBvbiB0aGUgQXBwR2FsbGVyeSBDb25uZWN0LlxyXG4gICAqIENoZWNrIHdoZXRoZXIgdGhlIGN1cnJlbnQgYXBwIGhhcyBiZWVuIGNyZWF0ZWQgYW5kIGVuYWJsZWQgaW4gQXBwR2FsbGVyeSBDb25uZWN0LlxyXG4gICAqIElmIHllcywgY29udGFjdCBIdWF3ZWkgdGVjaG5pY2FsIHN1cHBvcnQuXHJcbiAgICovXHJcbiAgRVJST1JfU0NPUEVfTElTVF9FTVBUWTogOTA3MTM1NzAxLFxyXG5cclxuICAvKiBUaGUgY2VydGlmaWNhdGUgZmluZ2VycHJpbnQgaXMgbm90IGNvbmZpZ3VyZWQgb24gdGhlIEFwcEdhbGxlcnkgQ29ubmVjdC5cclxuICAgKiAxLiBDaGVjayB3aGV0aGVyIHlvdXIgcGhvbmUgY2FuIGFjY2VzcyB0aGUgSW50ZXJuZXQuXHJcbiAgICogMi4gQ2hlY2sgd2hldGhlciB0aGUgY29ycmVjdCBjZXJ0aWZpY2F0ZSBmaW5nZXJwcmludCBpcyBjb25maWd1cmVkIGluIEFwcEdhbGxlcnkgQ29ubmVjdC4gRm9yIGRldGFpbHMsIHNlZSBBcHBHYWxsZXJ5IENvbm5lY3QgY29uZmlndXJhdGlvbiBpbiBEZXZlbG9wbWVudCBQcmVwYXJhdGlvbnMuXHJcbiAgICogMy4gSWYgdGhlIGNoZWNrIHJlc3VsdCBpcyBjb3JyZWN0LCBjb250YWN0IEh1YXdlaSB0ZWNobmljYWwgc3VwcG9ydC5cclxuICAgKi9cclxuICBFUlJPUl9DRVJUX0ZJTkdFUlBSSU5UX0VNUFRZOiA5MDcxMzU3MDIsXHJcblxyXG4gIC8vUGVybWlzc2lvbiBpcyBub3QgY29uZmlndXJlZCBvbiB0aGUgQXBwR2FsbGVyeSBDb25uZWN0LlxyXG4gIEVSUk9SX1BFUk1JU1NJT05fTElTVF9FTVBUWTogOTA3MTM1NzAzLFxyXG5cclxuICAvLyBUaGUgYXV0aGVudGljYXRpb24gaW5mb3JtYXRpb24gb2YgdGhlIGFwcGxpY2F0aW9uIGRvZXMgbm90IGV4aXN0LlxyXG4gIEVSUk9SX0FVVEhfSU5GT19OT1RfRVhJU1Q6IDYwMDIsXHJcblxyXG4gIC8vIEFuIGVycm9yIG9jY3VycmVkIGR1cmluZyBjZXJ0aWZpY2F0ZSBmaW5nZXJwcmludCB2ZXJpZmljYXRpb24uIENoZWNrIHdoZXRoZXIgdGhlIGNvcnJlY3QgY2VydGlmaWNhdGUgZmluZ2VycHJpbnQgaXMgY29uZmlndXJlZCBpbiBBcHBHYWxsZXJ5IENvbm5lY3QuIEZvciBkZXRhaWxzLCBzZWUgQXBwR2FsbGVyeSBDb25uZWN0IGNvbmZpZ3VyYXRpb24gaW4gRGV2ZWxvcG1lbnQgUHJlcGFyYXRpb25zLlxyXG4gIEVSUk9SX0NFUlRfRklOR0VSUFJJTlRfRVJST1I6IDYwMDMsXHJcblxyXG4gIC8vIEludGVyZmFjZSBhdXRoZW50aWNhdGlvbjogVGhlIHBlcm1pc3Npb24gZG9lcyBub3QgZXhpc3QgYW5kIGlzIG5vdCBhcHBsaWVkIGZvciBpbiBBcHBHYWxsZXJ5IENvbm5lY3QuXHJcbiAgRVJST1JfUEVSTUlTU0lPTl9OT1RfRVhJU1Q6IDYwMDQsXHJcblxyXG4gIC8vIEludGVyZmFjZSBhdXRoZW50aWNhdGlvbjogdW5hdXRob3JpemVkLlxyXG4gIEVSUk9SX1BFUk1JU1NJT05fTk9UX0FVVEhPUklaRUQ6IDYwMDUsXHJcblxyXG4gIC8vIEludGVyZmFjZSBhdXRoZW50aWNhdGlvbjogVGhlIGF1dGhvcml6YXRpb24gZXhwaXJlcy5cclxuICBFUlJPUl9QRVJNSVNTSU9OX0VYUElSRUQ6IDYwMDYsXHJcbn07XHJcblxyXG5leHBvcnQgZW51bSBBdHRyIHtcclxuICBpZCA9IFwiaWRcIixcclxuICBtZXNzYWdlID0gXCJtZXNzYWdlXCIsXHJcbiAgZmlyZURhdGUgPSBcImZpcmVEYXRlXCIsXHJcbiAgdGl0bGUgPSBcInRpdGxlXCIsXHJcbiAgdGlja2VyID0gXCJ0aWNrZXJcIixcclxuICBzaG93V2hlbiA9IFwic2hvd1doZW5cIixcclxuICBhdXRvQ2FuY2VsID0gXCJhdXRvQ2FuY2VsXCIsXHJcbiAgbGFyZ2VJY29uID0gXCJsYXJnZUljb25cIixcclxuICBsYXJnZUljb25VcmwgPSBcImxhcmdlSWNvblVybFwiLFxyXG4gIHNtYWxsSWNvbiA9IFwic21hbGxJY29uXCIsXHJcbiAgYmlnVGV4dCA9IFwiYmlnVGV4dFwiLFxyXG4gIHN1YlRleHQgPSBcInN1YlRleHRcIixcclxuICBiaWdQaWN0dXJlVXJsID0gXCJiaWdQaWN0dXJlVXJsXCIsXHJcbiAgc2hvcnRjdXRJZCA9IFwic2hvcnRjdXRJZFwiLFxyXG4gIG51bWJlciA9IFwibnVtYmVyXCIsXHJcbiAgY2hhbm5lbElkID0gXCJjaGFubmVsSWRcIixcclxuICBjaGFubmVsTmFtZSA9IFwiY2hhbm5lbE5hbWVcIixcclxuICBjaGFubmVsRGVzY3JpcHRpb24gPSBcImNoYW5uZWxEZXNjcmlwdGlvblwiLFxyXG4gIGNvbG9yID0gXCJjb2xvclwiLFxyXG4gIGdyb3VwID0gXCJncm91cFwiLFxyXG4gIGdyb3VwU3VtbWFyeSA9IFwiZ3JvdXBTdW1tYXJ5XCIsXHJcbiAgcGxheVNvdW5kID0gXCJwbGF5U291bmRcIixcclxuICBzb3VuZE5hbWUgPSBcInNvdW5kTmFtZVwiLFxyXG4gIHZpYnJhdGUgPSBcInZpYnJhdGVcIixcclxuICB2aWJyYXRlRHVyYXRpb24gPSBcInZpYnJhdGVEdXJhdGlvblwiLFxyXG4gIGFjdGlvbnMgPSBcImFjdGlvbnNcIixcclxuICBpbnZva2VBcHAgPSBcImludm9rZUFwcFwiLFxyXG4gIHRhZyA9IFwidGFnXCIsXHJcbiAgcmVwZWF0VHlwZSA9IFwicmVwZWF0VHlwZVwiLFxyXG4gIHJlcGVhdFRpbWUgPSBcInJlcGVhdFRpbWVcIixcclxuICBvbmdvaW5nID0gXCJvbmdvaW5nXCIsXHJcbiAgYWxsb3dXaGlsZUlkbGUgPSBcImFsbG93V2hpbGVJZGxlXCIsXHJcbiAgZG9udE5vdGlmeUluRm9yZWdyb3VuZCA9IFwiZG9udE5vdGlmeUluRm9yZWdyb3VuZFwiLFxyXG4gIHByaW9yaXR5ID0gXCJwcmlvcml0eVwiLFxyXG4gIGltcG9ydGFuY2UgPSBcImltcG9ydGFuY2VcIixcclxuICB2aXNpYmlsaXR5ID0gXCJ2aXNpYmlsaXR5XCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSW1wb3J0YW5jZSB7XHJcbiAgTUFYID0gXCJtYXhcIixcclxuICBISUdIID0gXCJoaWdoXCIsXHJcbiAgREVGQVVMVCA9IFwiZGVmYXVsdFwiLFxyXG4gIExPVyA9IFwibG93XCIsXHJcbiAgTUlOID0gXCJtaW5cIixcclxuICBOT05FID0gXCJub25lXCIsXHJcbiAgVU5TUEVDSUZJRUQgPSBcInVuc3BlY2lmaWVkXCJcclxufTtcclxuXHJcblxyXG5leHBvcnQgZW51bSBQcmlvcml0eSB7XHJcbiAgTUFYID0gXCJtYXhcIixcclxuICBISUdIID0gXCJoaWdoXCIsXHJcbiAgREVGQVVMVCA9IFwiZGVmYXVsdFwiLFxyXG4gIExPVyA9IFwibG93XCIsXHJcbiAgTUlOID0gXCJtaW5cIlxyXG59O1xyXG5cclxuZXhwb3J0IGVudW0gUmVwZWF0VHlwZSB7XHJcbiAgSE9VUiA9IFwiaG91clwiLFxyXG4gIE1JTlVURSA9IFwibWludXRlXCIsXHJcbiAgREFZID0gXCJkYXlcIixcclxuICBXRUVLID0gXCJ3ZWVrXCIsXHJcbiAgQ1VTVE9NX1RJTUUgPSBcImN1c3RvbV90aW1lXCJcclxufTtcclxuXHJcbmV4cG9ydCBlbnVtIFZpc2liaWxpdHkge1xyXG4gIHB1YmxpYyA9IFwicHVibGljXCIsXHJcbiAgc2VjcmV0ID0gXCJzZWNyZXRcIixcclxuICBwcml2YXRlID0gXCJwcml2YXRlXCJcclxufTtcclxuXHJcbmV4cG9ydCBlbnVtIFJlbW90ZU1lc3NhZ2VCdWlsZGVyIHtcclxuICBUTyA9IFwidG9cIixcclxuICBNRVNTQUdFX0lEID0gXCJtZXNzYWdlSWRcIixcclxuICBNRVNTQUdFX1RZUEUgPSBcIm1lc3NhZ2VUeXBlXCIsXHJcbiAgVFRMID0gXCJ0dGxcIixcclxuICBDT0xMQVBTRV9LRVkgPSBcImNvbGxhcHNlS2V5XCIsXHJcbiAgUkVDRUlQVF9NT0RFID0gXCJyZWNlaXB0TW9kZVwiLFxyXG4gIFNFTkRfTU9ERSA9IFwic2VuZE1vZGVcIixcclxuICBEQVRBID0gXCJkYXRhXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgQ29yZG92YVJlbW90ZU1lc3NhZ2Uge1xyXG5cclxuICBzdGF0aWMgSU5TVEFOQ0VfSURfU0NPUEUgPSAnSENNJztcclxuXHJcbiAgc3RhdGljIFBSSU9SSVRZX1VOS05PV04gPSAwO1xyXG4gIHN0YXRpYyBQUklPUklUWV9ISUdIID0gMTtcclxuICBzdGF0aWMgUFJJT1JJVFlfTk9STUFMID0gMjtcclxuXHJcbiAgc3RhdGljIENPTExBUFNFS0VZPSAnY29sbGFwc2VLZXknO1xyXG4gIHN0YXRpYyBEQVRBPSAnZGF0YSc7XHJcbiAgc3RhdGljIERBVEFPRk1BUD0gJ2RhdGFPZk1hcCc7XHJcbiAgc3RhdGljIE1FU1NBR0VJRD0gJ21lc3NhZ2VJZCc7XHJcbiAgc3RhdGljIE1FU1NBR0VUWVBFPSAnbWVzc2FnZVR5cGUnO1xyXG4gIHN0YXRpYyBPUklHSU5BTFVSR0VOQ1k9ICdvcmlnaW5hbFVyZ2VuY3knO1xyXG4gIHN0YXRpYyBVUkdFTkNZPSAgJ3VyZ2VuY3knO1xyXG4gIHN0YXRpYyBUVEw9ICd0dGwnO1xyXG4gIHN0YXRpYyBTRU5UVElNRT0gICdzZW50VGltZSc7XHJcbiAgc3RhdGljIFRPPSAndG8nO1xyXG4gIHN0YXRpYyBGUk9NPSAnZnJvbSc7XHJcbiAgc3RhdGljIFRPS0VOPSAgJ3Rva2VuJztcclxuXHJcbiAgc3RhdGljIE5PVElGSUNBVElPTiA9IHtcclxuICAgICAgVElUTEU6ICd0aXRsZScsXHJcbiAgICAgIFRJVExFTE9DQUxJWkFUSU9OS0VZOiAndGl0bGVMb2NhbGl6YXRpb25LZXknLFxyXG4gICAgICBUSVRMRUxPQ0FMSVpBVElPTkFSR1M6ICd0aXRsZUxvY2FsaXphdGlvbkFyZ3MnLFxyXG4gICAgICBCT0RZTE9DQUxJWkFUSU9OS0VZOiAnYm9keUxvY2FsaXphdGlvbktleScsXHJcbiAgICAgIEJPRFlMT0NBTElaQVRJT05BUkdTOiAnYm9keUxvY2FsaXphdGlvbkFyZ3MnLFxyXG4gICAgICBCT0RZOiAnYm9keScsXHJcbiAgICAgIElDT046ICdpY29uJyxcclxuICAgICAgU09VTkQ6ICdTb3VuZCcsXHJcbiAgICAgIFRBRzogJ1RhZycsXHJcbiAgICAgIENPTE9SOiAnQ29sb3InLFxyXG4gICAgICBDTElDS0FDVElPTjogJ0NsaWNrQWN0aW9uJyxcclxuICAgICAgQ0hBTk5FTElEOiAnQ2hhbm5lbElkJyxcclxuICAgICAgSU1BR0VVUkw6ICdJbWFnZVVybCcsXHJcbiAgICAgIExJTks6ICdMaW5rJyxcclxuICAgICAgTk9USUZZSUQ6ICdOb3RpZnlJZCcsXHJcbiAgICAgIFdIRU46ICdXaGVuJyxcclxuICAgICAgTElHSFRTRVRUSU5HUzogJ0xpZ2h0U2V0dGluZ3MnLFxyXG4gICAgICBCQURHRU5VTUJFUjogJ0JhZGdlTnVtYmVyJyxcclxuICAgICAgSU1QT1JUQU5DRTogJ0ltcG9ydGFuY2UnLFxyXG4gICAgICBUSUNLRVI6ICdUaWNrZXInLFxyXG4gICAgICBWSUJSQVRFQ09ORklHOiAndmlicmF0ZUNvbmZpZycsXHJcbiAgICAgIFZJU0lCSUxJVFk6ICd2aXNpYmlsaXR5JyxcclxuICAgICAgSU5URU5UVVJJOiAnaW50ZW50VXJpJyxcclxuICAgICAgSVNBVVRPQ0FOQ0VMOiAnaXNBdXRvQ2FuY2VsJyxcclxuICAgICAgSVNMT0NBTE9OTFk6ICdpc0xvY2FsT25seScsXHJcbiAgICAgIElTREVGQVVMVExJR0hUOiAnaXNEZWZhdWx0TGlnaHQnLFxyXG4gICAgICBJU0RFRkFVTFRTT1VORDogJ2lzRGVmYXVsdFNvdW5kJyxcclxuICAgICAgSVNERUZBVUxUVklCUkFURTogJ2lzRGVmYXVsdFZpYnJhdGUnLFxyXG4gIH07XHJcbiAgcmVtb3RlTXNnOmFueTtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgIHRoaXMucmVtb3RlTXNnID0gb3B0aW9ucztcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogcGFyc2UgYWxsIGVsZW1lbnQsdW5vcmRlcmVkXHJcbiAgICovXHJcbiAgcGFyc2VNc2dBbGxBdHRyaWJ1dGUoKSB7XHJcbiAgICAgIGxldCBwdXNoUmVzdWx0ID0gJyc7XHJcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMucmVtb3RlTXNnKSB7XHJcbiAgICAgICAgICBwdXNoUmVzdWx0ID0gcHVzaFJlc3VsdCArIGtleSArICcgOiAnICsgdGhpcy5yZW1vdGVNc2dba2V5XSArICdcXG4nO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwdXNoUmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBnZXRDb2xsYXBzZUtleSgpIE9idGFpbnMgdGhlIGNsYXNzaWZpY2F0aW9uIGlkZW50aWZpZXIgKGNvbGxhcHNlIGtleSkgb2YgYSBtZXNzYWdlLlxyXG4gICAqL1xyXG4gIGdldENvbGxhcHNlS2V5KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuQ09MTEFQU0VLRVldO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBnZXREYXRhKCkgT2J0YWlucyB2YWxpZCBjb250ZW50IGRhdGEgb2YgYSBtZXNzYWdlLlxyXG4gICAqL1xyXG4gIGdldERhdGEoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5EQVRBXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogZ2V0RGF0YU9mTWFwKCkgYSBtZXNzYWdlIG1hcC5cclxuICAgKi9cclxuICBnZXREYXRhT2ZNYXAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5EQVRBT0ZNQVBdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBnZXRNZXNzYWdlSWQoKSBPYnRhaW5zIHRoZSBJRCBvZiBhIG1lc3NhZ2UuXHJcbiAgICovXHJcbiAgZ2V0TWVzc2FnZUlkKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTUVTU0FHRUlEXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogZ2V0TWVzc2FnZVR5cGUoKSBPYnRhaW5zIHRoZSB0eXBlIG9mIGEgbWVzc2FnZS5cclxuICAgKi9cclxuICBnZXRNZXNzYWdlVHlwZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk1FU1NBR0VUWVBFXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogZ2V0T3JpZ2luYWxVcmdlbmN5KCkgT2J0YWlucyB0aGUgb3JpZ2luYWwgcHJpb3JpdHkgb2YgYSBtZXNzYWdlLlxyXG4gICAqL1xyXG4gIGdldE9yaWdpbmFsVXJnZW5jeSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk9SSUdJTkFMVVJHRU5DWV07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIGdldFVyZ2VuY3koKSBPYnRhaW5zIHByaW9yaXR5IG9mIGEgbWVzc2FnZS5cclxuICAgKi9cclxuICBnZXRVcmdlbmN5KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuVVJHRU5DWV07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIGdldFR0bCgpIE9idGFpbnMgdmFsaWQgZ2V0VHRsIG9mIGEgbWVzc2FnZS5cclxuICAgKi9cclxuICBnZXRUdGwoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5UVExdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBnZXRTZW50VGltZSgpIE9idGFpbnMgdGhlIHRpbWUgd2hlbiBhIG1lc3NhZ2UgaXMgc2VudCBmcm9tIHRoZSBzZXJ2ZXIuXHJcbiAgICovXHJcbiAgZ2V0U2VudFRpbWUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5TRU5UVElNRV07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIGdldFRvKCkgT2J0YWlucyB0aGUgcmVjaXBpZW50IG9mIGEgbWVzc2FnZS5cclxuICAgKi9cclxuICBnZXRUbygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLlRPXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogZ2V0RnJvbSgpIE9idGFpbnMgdGhlIHNlbmRlciBvZiBhIG1lc3NhZ2UuXHJcbiAgICovXHJcbiAgZ2V0RnJvbSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLkZST01dO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBnZXRUb2tlbigpIE9idGFpbnMgdmFsaWQgdG9rZW5cclxuICAgKi9cclxuICBnZXRUb2tlbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLlRPS0VOXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldFRpdGxlKCkgT2J0YWlucyB0aGUgdGl0bGUgb2YgYSBtZXNzYWdlXHJcbiAgICovXHJcbiAgZ2V0Tm90aWZpY2F0aW9uVGl0bGUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVElUTEVdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0VGl0bGVMb2NhbGl6YXRpb25LZXkoKSBPYnRhaW5zIHRoZSBrZXkgb2YgdGhlIGRpc3BsYXllZCB0aXRsZSBvZiBhIG5vdGlmaWNhdGlvbiBtZXNzYWdlXHJcbiAgICovXHJcbiAgZ2V0VGl0bGVMb2NhbGl6YXRpb25LZXkoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVElUTEVMT0NBTElaQVRJT05LRVldO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0VGl0bGVMb2NhbGl6YXRpb25BcmdzKCkgT2J0YWlucyB2YXJpYWJsZSBwYXJhbWV0ZXJzIG9mIHRoZSBkaXNwbGF5ZWQgdGl0bGUgb2YgYSBtZXNzYWdlXHJcbiAgICovXHJcbiAgZ2V0VGl0bGVMb2NhbGl6YXRpb25BcmdzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbXHJcbiAgICAgICAgICBDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVElUTEVMT0NBTElaQVRJT05BUkdTXHJcbiAgICAgICAgICBdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0Qm9keUxvY2FsaXphdGlvbktleSgpIE9idGFpbnMgdGhlIGtleSBvZiB0aGUgZGlzcGxheWVkIGNvbnRlbnQgb2YgYSBtZXNzYWdlXHJcbiAgICovXHJcbiAgZ2V0Qm9keUxvY2FsaXphdGlvbktleSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5CT0RZTE9DQUxJWkFUSU9OS0VZXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldEJvZHlMb2NhbGl6YXRpb25BcmdzKCkgT2J0YWlucyB2YXJpYWJsZSBwYXJhbWV0ZXJzIG9mIHRoZSBkaXNwbGF5ZWQgY29udGVudCBvZiBhIG1lc3NhZ2VcclxuICAgKi9cclxuICBnZXRCb2R5TG9jYWxpemF0aW9uQXJncygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5CT0RZTE9DQUxJWkFUSU9OQVJHU107XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRCb2R5KCkgT2J0YWlucyB0aGUgYm9keSBvZiBhIG1lc3NhZ2VcclxuICAgKi9cclxuICBnZXRCb2R5KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkJPRFldO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0SWNvbigpIE9idGFpbnMgdGhlIGljb24gb2YgYSBtZXNzYWdlXHJcbiAgICovXHJcbiAgZ2V0SWNvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JQ09OXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldFNvdW5kKCkgT2J0YWlucyB0aGUgc291bmQgZnJvbSBhIG1lc3NhZ2VcclxuICAgKi9cclxuICBnZXRTb3VuZCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5TT1VORF07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRUYWcoKSBPYnRhaW5zIHRoZSB0YWcgZnJvbSBhIG1lc3NhZ2UgZm9yIG1lc3NhZ2Ugb3ZlcndyaXRpbmdcclxuICAgKi9cclxuICBnZXRUYWcoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVEFHXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldENvbG9yKCkgT2J0YWlucyB0aGUgY29sb3JzIG9mIGljb25zIGluIGEgbWVzc2FnZVxyXG4gICAqL1xyXG4gIGdldENvbG9yKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLkNPTE9SXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldENsaWNrQWN0aW9uKCkgT2J0YWlucyBhY3Rpb25zIHRyaWdnZXJlZCBieSBtZXNzYWdlIHRhcHBpbmdcclxuICAgKi9cclxuICBnZXRDbGlja0FjdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5DTElDS0FDVElPTl07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRDaGFubmVsSWQoKSBPYnRhaW5zIElEcyBvZiBjaGFubmVscyB0aGF0IHN1cHBvcnQgdGhlIGRpc3BsYXkgb2YgbWVzc2FnZXNcclxuICAgKi9cclxuICBnZXRDaGFubmVsSWQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uQ0hBTk5FTElEXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldEltYWdlVXJsKCkgT2J0YWlucyB0aGUgaW1hZ2UgVVJMIGZyb20gYSBtZXNzYWdlXHJcbiAgICovXHJcbiAgZ2V0SW1hZ2VVcmwoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSU1BR0VVUkxdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0TGluaygpIE9idGFpbnMgdGhlIFVSTCB0byBiZSBhY2Nlc3NlZCBmcm9tIGEgbWVzc2FnZVxyXG4gICAqL1xyXG4gIGdldExpbmsoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uTElOS107XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXROb3RpZnlJZCgpIE9idGFpbnMgdGhlIHVuaXF1ZSBJRCBvZiBhIG1lc3NhZ2VcclxuICAgKi9cclxuICBnZXROb3RpZnlJZCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5OT1RJRllJRF07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRXaGVuKClcclxuICAgKi9cclxuICBnZXRXaGVuKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLldIRU5dO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0TGlnaHRTZXR0aW5ncygpXHJcbiAgICovXHJcbiAgZ2V0TGlnaHRTZXR0aW5ncygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5MSUdIVFNFVFRJTkdTXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldEJhZGdlTnVtYmVyKClcclxuICAgKi9cclxuICBnZXRCYWRnZU51bWJlcigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5CQURHRU5VTUJFUl07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRJbXBvcnRhbmNlKClcclxuICAgKi9cclxuICBnZXRJbXBvcnRhbmNlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklNUE9SVEFOQ0VdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0VGlja2VyKClcclxuICAgKi9cclxuICBnZXRUaWNrZXIoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVElDS0VSXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmdldFZpYnJhdGVDb25maWcoKVxyXG4gICAqL1xyXG4gIGdldFZpYnJhdGVDb25maWcoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uVklCUkFURUNPTkZJR107XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRWaXNpYmlsaXR5KClcclxuICAgKi9cclxuICBnZXRWaXNpYmlsaXR5KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLlZJU0lCSUxJVFldO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246Z2V0SW50ZW50VXJpKClcclxuICAgKi9cclxuICBnZXRJbnRlbnRVcmkoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSU5URU5UVVJJXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmlzQXV0b0NhbmNlbCgpXHJcbiAgICovXHJcbiAgaXNBdXRvQ2FuY2VsKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklTQVVUT0NBTkNFTF07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjpnZXRJbnRlbnRVcmkoKVxyXG4gICAqL1xyXG4gIGlzTG9jYWxPbmx5KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGVNc2dbQ29yZG92YVJlbW90ZU1lc3NhZ2UuTk9USUZJQ0FUSU9OLklTTE9DQUxPTkxZXTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogTm90aWZpY2F0aW9uOmlzRGVmYXVsdExpZ2h0KClcclxuICAgKi9cclxuICBpc0RlZmF1bHRMaWdodCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JU0RFRkFVTFRMSUdIVF07XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIE5vdGlmaWNhdGlvbjppc0RlZmF1bHRTb3VuZCgpXHJcbiAgICovXHJcbiAgaXNEZWZhdWx0U291bmQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZU1zZ1tDb3Jkb3ZhUmVtb3RlTWVzc2FnZS5OT1RJRklDQVRJT04uSVNERUZBVUxUU09VTkRdO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBOb3RpZmljYXRpb246aXNEZWZhdWx0VmlicmF0ZSgpXHJcbiAgICovXHJcbiAgaXNEZWZhdWx0VmlicmF0ZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVtb3RlTXNnW0NvcmRvdmFSZW1vdGVNZXNzYWdlLk5PVElGSUNBVElPTi5JU0RFRkFVTFRWSUJSQVRFXTtcclxuICB9XHJcbn1cclxuXHJcbnR5cGUgTG9jYWxOb3RpZmljYXRpb25PYmplY3QgPSB7XHJcbiAgW2tleSBpbiBBdHRyXT86IGFueTtcclxufTtcclxuXHJcbnR5cGUgUmVtb3RlTWVzc2FnZU9iamVjdD17XHJcbiAgW2tleSBpbiBSZW1vdGVNZXNzYWdlQnVpbGRlcl0/OmFueTtcclxufVxyXG5cclxuIl19