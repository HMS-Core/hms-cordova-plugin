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

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HmsPush, HmsPushEvent, HmsLocalNotification } from '@hmscore/ionic-native-hms-push/ngx'
import { Router } from '@angular/router';
@Component({
    selector: 'app-local',
    templateUrl: './local.page.html',
    styleUrls: ['./local.page.scss'],
})
export class LocalPage implements OnInit {
    titleText = "HMSPush"
    tagText = null;
    bigText = "This is a bigText"
    subText = "This is a subText"
    messageText = "This is Local Notification"
    message:string = "";
    constructor(
        private hmsLocalNotification: HmsLocalNotification,
        private hmsPushEvent: HmsPushEvent,
        private hmsPush:HmsPush,
        private router: Router,
        private cd:ChangeDetectorRef
    ){
        this.initListener();
    }
    initListener() {
        this.hmsPushEvent.onRemoteMessageReceived((result) => {
            this.addLog("REMOTE_DATA_MESSAGE_RECEIVED", JSON.stringify(result) + "\n");
            this.hmsLocalNotification.localNotification({
                [this.hmsLocalNotification.Attr.title]: "DataMessage Received",
                [this.hmsLocalNotification.Attr.message]: new this.hmsPush.CordovaRemoteMessage(
                    result.msg
                ).getDataOfMap(),
            });

        })
        // unregisterHMSEvent(HmsPushEvent.ON_TOKEN_ERROR_EVENT); //unRegistering process.
        this.hmsPushEvent.onTokenError((result) => {
            this.addLog("ON_TOKEN_ERROR_EVENT", JSON.stringify(result));
        })

        this.hmsPushEvent.onTokenReceived((result) => {
            this.addLog("TOKEN_RECEIVED_EVENT", JSON.stringify(result));
        })

        this.hmsPushEvent.onLocalNotificationAction((result) => {
            this.addLog("LOCAL_NOTIFICATION_ACTION_EVENT", JSON.stringify(result));
            const notification = JSON.parse(result.dataJSON)
            if (notification.action === "Yes") {
                this.hmsLocalNotification.cancelNotificationsWithId([notification.id]);
              }
              this.addLog("onLocalNotificationAction-Clicked", notification.action); 
        })

        this.hmsPushEvent.onNotificationOpenedApp((result) => {
            this.addLog("NOTIFICATION_OPENED_EVENT", JSON.stringify(result));
            if (result.uriPage !== null && result.uriPage === "app://app2")
            this.openCustomIntent();
        })

        this.hmsPushEvent.onPushMessageSentDelivered((result) => {
            this.addLog("ON_PUSH_MESSAGE_SENT_DELIVERED", JSON.stringify(result));
        })

        this.hmsPushEvent.onPushMessageSent((result) => {
            this.addLog("ON_PUSH_MESSAGE_SENT", JSON.stringify(result));
        })

        this.hmsPushEvent.onPushMessageSentError((result) => {
            this.addLog("ON_PUSH_MESSAGE_SENT_ERROR", JSON.stringify(result));
        })
    }
    

    defaultNotification = {
        [this.hmsLocalNotification.Attr.title]: 'Notification Title',
        [this.hmsLocalNotification.Attr.message]: 'Notification Message', // (required)
        [this.hmsLocalNotification.Attr.ticker]: 'Optional Ticker',
        [this.hmsLocalNotification.Attr.showWhen]: true,
        [this.hmsLocalNotification.Attr.largeIcon]: 'ic_launcher',
        [this.hmsLocalNotification.Attr.smallIcon]: 'ic_notification',
        [this.hmsLocalNotification.Attr.bigText]: 'This is a bigText',
        [this.hmsLocalNotification.Attr.subText]: 'This is a subText',
        [this.hmsLocalNotification.Attr.color]: 'white',
        [this.hmsLocalNotification.Attr.vibrate]: false,
        [this.hmsLocalNotification.Attr.vibrateDuration]: 1000,
        [this.hmsLocalNotification.Attr.tag]: 'hms_tag',
        [this.hmsLocalNotification.Attr.groupSummary]: false,
        [this.hmsLocalNotification.Attr.ongoing]: false,
        [this.hmsLocalNotification.Attr.importance]: this.hmsLocalNotification.Importance.MAX,
        [this.hmsLocalNotification.Attr.dontNotifyInForeground]: false,
        [this.hmsLocalNotification.Attr.autoCancel]: true,
        [this.hmsLocalNotification.Attr.actions]: '["Yes", "No"]',
        [this.hmsLocalNotification.Attr.invokeApp]: false,
        // [this.hmsLocalNotification.Attr.channelId]: 'huawei-hms-cordova-push-channel-id', // Please read the documentation before using this param
    }

    ngOnInit() {

    }
    openCustomIntent() {
        this.router.navigate(['home'])
    }

    async localNotification() {
        this.hmsLocalNotification.localNotification({
            ...this.defaultNotification,
            [this.hmsLocalNotification.Attr.title]: this.titleText,
            [this.hmsLocalNotification.Attr.message]: this.messageText,
            [this.hmsLocalNotification.Attr.bigText]: this.bigText,
            [this.hmsLocalNotification.Attr.subText]: this.subText,
            [this.hmsLocalNotification.Attr.tag]: this.tagText,
        })
            .then((result: any) => { this.defaultSuccessHandler("localNotification", result) })
            .catch((result: any) => { this.defaultExceptionHandler("localNotification", result) })
    }

    async localNotificationSchedule() {
        this.hmsLocalNotification.localNotificationSchedule({
            ...this.defaultNotification,
            [this.hmsLocalNotification.Attr.title]: this.titleText,
            [this.hmsLocalNotification.Attr.message]: this.messageText,
            [this.hmsLocalNotification.Attr.bigText]: this.bigText,
            [this.hmsLocalNotification.Attr.subText]: this.subText,
            [this.hmsLocalNotification.Attr.tag]: this.tagText,
            [this.hmsLocalNotification.Attr.fireDate]: new Date(
                Date.now() + 60 * 1000,
            ).getTime(), // in 1 min
            [this.hmsLocalNotification.Attr.allowWhileIdle]: true,
        })
            .then((result: any) => { this.defaultSuccessHandler("localNotificationSchedule", result) })
            .catch((result: any) => { this.defaultExceptionHandler("localNotificationSchedule", result) })

    }

    async localNotificationVibrate() {
        this.hmsLocalNotification.localNotification({
            ...this.defaultNotification,
            [this.hmsLocalNotification.Attr.title]: this.titleText,
            [this.hmsLocalNotification.Attr.message]: this.messageText,
            [this.hmsLocalNotification.Attr.bigText]: this.bigText,
            [this.hmsLocalNotification.Attr.subText]: this.subText,
            [this.hmsLocalNotification.Attr.tag]: this.tagText,
            [this.hmsLocalNotification.Attr.vibrate]: true,
            [this.hmsLocalNotification.Attr.vibrateDuration]: 5000,
        })
            .then((result: any) => { this.defaultSuccessHandler("localNotificationVibrate", result) })
            .catch((result: any) => { this.defaultExceptionHandler("localNotificationVibrate", result) })
    }

    async localNotificationRepeat() {
        this.hmsLocalNotification.localNotification({
            ...this.defaultNotification,
            [this.hmsLocalNotification.Attr.title]: this.titleText,
            [this.hmsLocalNotification.Attr.message]: this.messageText,
            [this.hmsLocalNotification.Attr.bigText]: this.bigText,
            [this.hmsLocalNotification.Attr.subText]: this.subText,
            [this.hmsLocalNotification.Attr.tag]: this.tagText,
            [this.hmsLocalNotification.Attr.repeatType]: this.hmsLocalNotification.RepeatType.MINUTE,
        })
            .then((result: any) => { this.defaultSuccessHandler("localNotificationRepeat", result) })
            .catch((result: any) => { this.defaultExceptionHandler("localNotificationRepeat", result) })
    }

    async localNotificationSound() {
        this.hmsLocalNotification.localNotification({
            ...this.defaultNotification,
            [this.hmsLocalNotification.Attr.title]: this.titleText,
            [this.hmsLocalNotification.Attr.message]: this.messageText,
            [this.hmsLocalNotification.Attr.bigText]: this.bigText,
            [this.hmsLocalNotification.Attr.subText]: this.subText,
            [this.hmsLocalNotification.Attr.tag]: this.tagText,
            [this.hmsLocalNotification.Attr.playSound]: true,
            [this.hmsLocalNotification.Attr.soundName]: 'huawei_bounce.mp3',
        })
            .then((result: any) => { this.defaultSuccessHandler("localNotificationSound", result) })
            .catch((result: any) => { this.defaultExceptionHandler("localNotificationSound", result) })
    }


    async localNotificationOngoing() {
        this.hmsLocalNotification.localNotification({
            ...this.defaultNotification,
            [this.hmsLocalNotification.Attr.title]: this.titleText,
            [this.hmsLocalNotification.Attr.message]: this.messageText,
            [this.hmsLocalNotification.Attr.bigText]: this.bigText,
            [this.hmsLocalNotification.Attr.subText]: this.subText,
            [this.hmsLocalNotification.Attr.tag]: this.tagText,
            [this.hmsLocalNotification.Attr.ongoing]: true,
        })
            .then((result: any) => { this.defaultSuccessHandler("localNotificationOngoing", result) })
            .catch((result: any) => { this.defaultExceptionHandler("localNotificationOngoing", result) })
    }

    async localNotificationBigImage() {
        this.hmsLocalNotification.localNotification({
            ...this.defaultNotification,
            [this.hmsLocalNotification.Attr.title]: this.titleText,
            [this.hmsLocalNotification.Attr.message]: this.messageText,
            [this.hmsLocalNotification.Attr.bigText]: this.bigText,
            [this.hmsLocalNotification.Attr.subText]: this.subText,
            [this.hmsLocalNotification.Attr.tag]: this.tagText,
            [this.hmsLocalNotification.Attr.bigPictureUrl]: 'https://www-file.huawei.com/-/media/corp/home/image/logo_400x200.png'
        })
            .then((result: any) => { this.defaultSuccessHandler("localNotificationBigImage", result) })
            .catch((result: any) => { this.defaultExceptionHandler("localNotificationBigImage", result) })
    }

    async cancelAllNotifications() {

        this.hmsLocalNotification.cancelAllNotifications()
            .then((result: any) => { this.defaultSuccessHandler("cancelAllNotifications", result) })
            .catch((result: any) => { this.defaultExceptionHandler("cancelAllNotifications", result) })
    }

    async cancelNotifications() {
        this.hmsLocalNotification.cancelNotifications()
            .then((result: any) => { this.defaultSuccessHandler("cancelNotifications", result) })
            .catch((result: any) => { this.defaultExceptionHandler("cancelNotifications", result) })

    }

    async cancelScheduledNotifications() {
        this.hmsLocalNotification.cancelScheduledNotifications()
            .then((result: any) => { this.defaultSuccessHandler("cancelScheduledNotifications", result) })
            .catch((result: any) => { this.defaultExceptionHandler("cancelScheduledNotifications", result) })
    }


    async cancelNotificationsWithTag() {
        // const result=  await this.hmsLocalNotification.cancelNotificationsWithIdTag();
        // const result=  await this.hmsLocalNotification.cancelNotificationsWithId();
        this.hmsLocalNotification.cancelNotificationsWithTag('tag')
            .then((result: any) => { this.defaultSuccessHandler("cancelNotificationsWithTag", result) })
            .catch((result: any) => { this.defaultExceptionHandler("cancelNotificationsWithTag", result) })
    }

    async getNotifications() {
        this.hmsLocalNotification.getNotifications()
            .then((result: any) => { this.defaultSuccessHandler("getNotifications", result) })
            .catch((result: any) => { this.defaultExceptionHandler("getNotifications", result) })
    }

    async getScheduledNotifications() {
        this.hmsLocalNotification.getScheduledNotifications()
            .then((result: any) => { this.defaultSuccessHandler("getScheduledNotifications", result) })
            .catch((result: any) => { this.defaultExceptionHandler("getScheduledNotifications", result) })
    }

    async getChannels() {
        this.hmsLocalNotification.getChannels()
            .then((result: any) => { this.defaultSuccessHandler("getChannels", result) })
            .catch((result: any) => { this.defaultExceptionHandler("getChannels", result) })
    }

    async channelExists() {
        this.hmsLocalNotification.channelExists('huawei-hms-cordova-push-channel-id-4')
            .then((result: any) => { this.defaultSuccessHandler("channelExists", result) })
            .catch((result: any) => { this.defaultExceptionHandler("channelExists", result) })
    }

    async channelBlocked() {
        this.hmsLocalNotification.channelBlocked('huawei-hms-cordova-push-channel-id-4')
            .then((result: any) => { this.defaultSuccessHandler("channelBlocked", result) })
            .catch((result: any) => { this.defaultExceptionHandler("channelBlocked", result) })
    }

    async deleteChannel() {
        this.hmsLocalNotification.deleteChannel('huawei-hms-cordova-push-channel-id-4')
            .then((result: any) => { this.defaultSuccessHandler("deleteChannel", result) })
            .catch((result: any) => { this.defaultExceptionHandler("deleteChannel", result) })
    }

    addLog(tag: string, message: string) {
        let obj: string = this.message
        let sendedMessage: string = message === undefined ? "" : message;
        this.message = `[${tag}] :  ${sendedMessage} \n  ${obj}`;
        this.cd.detectChanges();  
    }

    defaultSuccessHandler(tag: string, message: any) {
        message = message === undefined ? "" : message;
        this.addLog(tag, JSON.stringify(message));
    }

    defaultExceptionHandler(tag: string, err: any) {
        const message = "Error/Exception: " + JSON.stringify(err) + "\n";
        this.addLog(tag, JSON.stringify(message));
        alert(`${tag} : ${message}`);
    }

}
