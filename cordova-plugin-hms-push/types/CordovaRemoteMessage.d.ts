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

export declare class CordovaRemoteMessage {
    static INSTANCE_ID_SCOPE: string;
    static PRIORITY_UNKNOWN: number;
    static PRIORITY_HIGH: number;
    static PRIORITY_NORMAL: number;
    static COLLAPSEKEY: string;
    static DATA: string;
    static DATAOFMAP: string;
    static MESSAGEID: string;
    static MESSAGETYPE: string;
    static ORIGINALURGENCY: string;
    static URGENCY: string;
    static TTL: string;
    static SENTTIME: string;
    static TO: string;
    static FROM: string;
    static TOKEN: string;
    static NOTIFICATION: {
        TITLE: string;
        TITLELOCALIZATIONKEY: string;
        TITLELOCALIZATIONARGS: string;
        BODYLOCALIZATIONKEY: string;
        BODYLOCALIZATIONARGS: string;
        BODY: string;
        ICON: string;
        SOUND: string;
        TAG: string;
        COLOR: string;
        CLICKACTION: string;
        CHANNELID: string;
        IMAGEURL: string;
        LINK: string;
        NOTIFYID: string;
        WHEN: string;
        LIGHTSETTINGS: string;
        BADGENUMBER: string;
        IMPORTANCE: string;
        TICKER: string;
        VIBRATECONFIG: string;
        VISIBILITY: string;
        INTENTURI: string;
        ISAUTOCANCEL: string;
        ISLOCALONLY: string;
        ISDEFAULTLIGHT: string;
        ISDEFAULTSOUND: string;
        ISDEFAULTVIBRATE: string;
    };
    remoteMsg: any;
    constructor(options?: {});
    parseMsgAllAttribute(): string;
    getCollapseKey(): any;
    getData(): any;
    getDataOfMap(): any;
    getMessageId(): any;
    getMessageType(): any;
    getOriginalUrgency(): any;
    getUrgency(): any;
    getTtl(): any;
    getSentTime(): any;
    getTo(): any;
    getFrom(): any;
    getToken(): any;
    getNotificationTitle(): any;
    getTitleLocalizationKey(): any;
    getTitleLocalizationArgs(): any;
    getBodyLocalizationKey(): any;
    getBodyLocalizationArgs(): any;
    getBody(): any;
    getIcon(): any;
    getSound(): any;
    getTag(): any;
    getColor(): any;
    getClickAction(): any;
    getChannelId(): any;
    getImageUrl(): any;
    getLink(): any;
    getNotifyId(): any;
    getWhen(): any;
    getLightSettings(): any;
    getBadgeNumber(): any;
    getImportance(): any;
    getTicker(): any;
    getVibrateConfig(): any;
    getVisibility(): any;
    getIntentUri(): any;
    isAutoCancel(): any;
    isLocalOnly(): any;
    isDefaultLight(): any;
    isDefaultSound(): any;
    isDefaultVibrate(): any;
}
