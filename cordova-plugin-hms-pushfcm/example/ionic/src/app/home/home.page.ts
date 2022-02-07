/*
    Copyright 2021-2021. Huawei Technologies Co., Ltd. All rights reserved.

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
import { HmsPush, HmsPushEvent } from '@hmscore/ionic-native-hms-push/ngx';
import { HMSPushFcmProxy } from '@hmscore/ionic-native-hms-pushfcm/ngx';
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
    private hmsPushFcmProxy: HMSPushFcmProxy,
    private hmsPush: HmsPush,
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

    // unregisterHMSEvent(HmsPushEvent.ON_TOKEN_ERROR_EVENT); //unRegistering process.
    this.hmsPushEvent.onTokenError((result) => {
      this.addLog("ON_TOKEN_ERROR_EVENT", JSON.stringify(result));
    })

    this.hmsPushEvent.onTokenReceived((result) => {
      this.addLog("TOKEN_RECEIVED_EVENT", JSON.stringify(result));
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
    
    this.hmsPushEvent.onMultiSenderTokenReceivedEvent((result) => {
      this.addLog("ON_MULTI_SENDER_TOKEN_RECEIVED_EVENT", JSON.stringify(result));
    })

    this.hmsPushEvent.onMultiSenderTokenErrorEvent((result) => {
      this.addLog("ON_MULTI_SENDER_TOKEN_ERROR_EVENT", JSON.stringify(result));
    })
  }

  pushFcmInit() {
    this.hmsPushFcmProxy.init()
      .then((result: any) => { this.defaultSuccessHandler("hmsPushFcmProxy.init", result) })
      .catch((result: any) => { this.defaultExceptionHandler("hmsPushFcmProxy.init", result) })
  }

  pushFcmIsProxyInitEnabled() {
    this.hmsPushFcmProxy.isProxyInitEnabled()
      .then((result: any) => { this.defaultSuccessHandler("hmsPushFcmProxy.isProxyInitEnabled", result) })
      .catch((result: any) => { this.defaultExceptionHandler("hmsPushFcmProxy.isProxyInitEnabled", result) })
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
