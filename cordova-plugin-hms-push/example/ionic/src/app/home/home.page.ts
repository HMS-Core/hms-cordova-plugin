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

import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { HmsPush, HmsPushEvent, HmsLocalNotification} from '@hmscore/ionic-native-hms-push/ngx'
import { Router, RouterOutlet } from '@angular/router';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  @ViewChild(RouterOutlet) outlet: RouterOutlet;

  constructor(
    private platform: Platform,
    private hmsPush: HmsPush,
    private hmsLocalNotification: HmsLocalNotification,
    private hmsPushEvent: HmsPushEvent,
    private router: Router,
    private cd:ChangeDetectorRef
  ) {
    this.platform.ready().then(()=>{
      this.hmsPush.init()
      this.initListener()
      this.hmsPush.setBackgroundFile("public/assets/background.js")
    })
    
  }
  message: string = "";
  topic: string = "topic"

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

  openCustomIntent() {
    this.router.navigate(['custom-uri'])
  }

  localNotificationPress() {
    this.router.navigate(['local'])
  }

  async turnOnPush() {
    this.hmsPush.turnOnPush()
      .then((result: any) => { this.defaultSuccessHandler("turnOnPush", result) })
      .catch((result: any) => { this.defaultExceptionHandler("turnOnPush", result) })

  }

  async turnOffPush() {
    this.hmsPush.turnOffPush()
      .then((result: any) => { this.defaultSuccessHandler("turnOffPush", result) })
      .catch((result: any) => { this.defaultExceptionHandler("turnOffPush", result) })
  }

  async getID() {
    this.hmsPush.getId()
      .then((result: any) => { this.defaultSuccessHandler("getId", result) })
      .catch((result: any) => { this.defaultExceptionHandler("getId", result) })
  }

  async getAAID() {
    this.hmsPush.getAAID()
      .then((result: any) => { this.defaultSuccessHandler("getAAID", result) })
      .catch((result: any) => { this.defaultExceptionHandler("getAAID", result) })
  }

  async getToken() {
    this.hmsPush.getToken()
      .then((result: any) => { this.defaultSuccessHandler("getToken", result) })
      .catch((result: any) => { this.defaultExceptionHandler("getToken", result) })

  }

  async getCreationTime() {
    this.hmsPush.getCreationTime()
      .then((result: any) => { this.defaultSuccessHandler("getCreationTime", result) })
      .catch((result: any) => { this.defaultExceptionHandler("getCreationTime", result) })
  }

  async deleteAAID() {
    this.hmsPush.deleteAAID()
      .then((result: any) => { this.defaultSuccessHandler("deleteAAID", result) })
      .catch((result: any) => { this.defaultExceptionHandler("deleteAAID", result) })
  }

  async deleteToken() {
    this.hmsPush.deleteToken()
      .then((result: any) => { this.defaultSuccessHandler("deleteToken", result) })
      .catch((result: any) => { this.defaultExceptionHandler("deleteToken", result) })
  }

  async subscribe() {
    this.hmsPush.subscribe(this.topic)
      .then((result: any) => { this.defaultSuccessHandler("subscribe", result) })
      .catch((result: any) => { this.defaultExceptionHandler("subscribe", result) })
  }

  async unsubscribe() {
    this.hmsPush.unsubscribe(this.topic)
      .then((result: any) => { this.defaultSuccessHandler("unsubscribe", result) })
      .catch((result: any) => { this.defaultExceptionHandler("unsubscribe", result) })
  }

  async disableAutoInit() {
    this.hmsPush.setAutoInitEnabled(false)
      .then((result: any) => { this.defaultSuccessHandler("disableAutoInit", result) })
      .catch((result: any) => { this.defaultExceptionHandler("disableAutoInit", result) })
  }

  async enableAutoInit() {
    this.hmsPush.setAutoInitEnabled(true)
      .then((result: any) => { this.defaultSuccessHandler("enableAutoInit", result) })
      .catch((result: any) => { this.defaultExceptionHandler("enableAutoInit", result) })
  }

  async isAutoInitEnabled() {
    this.hmsPush.isAutoInitEnabled()
      .then((result: any) => { this.defaultSuccessHandler("isAutoInitEnabled", result) })
      .catch((result: any) => { this.defaultExceptionHandler("isAutoInitEnabled", result) })
  }

  async sendRemoteMessage() {
    this.hmsPush.sendRemoteMessage({
      [this.hmsPush.RemoteMessageBuilder.TO]: '',
      //[RemoteMessageBuilder.MESSAGE_ID]: '', // Auto generated
      [this.hmsPush.RemoteMessageBuilder.MESSAGE_TYPE]: 'hms',
      [this.hmsPush.RemoteMessageBuilder.COLLAPSE_KEY]: '-1',
      [this.hmsPush.RemoteMessageBuilder.TTL]: 120,
      [this.hmsPush.RemoteMessageBuilder.RECEIPT_MODE]: 1,
      [this.hmsPush.RemoteMessageBuilder.SEND_MODE]: 1,
      [this.hmsPush.RemoteMessageBuilder.DATA]: { key1: 'test', message: 'huawei-test' }
    })
      .then((result: any) => { this.defaultSuccessHandler("sendRemoteMessage", result) })
      .catch((result: any) => { this.defaultExceptionHandler("sendRemoteMessage", result) })
  }
  
  async getOdid() {
    this.hmsPush.getOdid()
      .then((result: any) => { this.defaultSuccessHandler("getOdid", result) })
      .catch((result: any) => { this.defaultExceptionHandler("getOdid", result) })
  }

  async getInitialNotification() {
    this.hmsPush.getInitialNotification()
      .then((result: any) => { this.defaultSuccessHandler("getInitialNotification", result) })
      .catch((result: any) => { this.defaultExceptionHandler("getInitialNotification", result) })
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
