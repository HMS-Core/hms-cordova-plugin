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

function localNotificationButton() {
  window.location.href = "localNotification.html";
}

function openCustomIntent() {
  window.location.href = "customIntent.html";
}

function init() {

  HmsPush.init();
  HmsPush.setBackgroundFile("www/background.js");

}

function turnOffPush() {
  HmsPush.turnOffPush()
    .then((result) => defaultSuccessHandler("turnOffPush", result))
    .catch((error) => defaultExceptionHandler("turnOffPush", error));
}

function turnOnPush() {
  HmsPush.turnOnPush()
    .then((result) => defaultSuccessHandler("turnOnPush", result))
    .catch((error) => defaultExceptionHandler("turnOnPush", error));
}

function getId() {
  HmsPush.getId()
    .then((result) => defaultSuccessHandler("getId", result))
    .catch((error) => defaultExceptionHandler("getId", error));
}

function getOdid() {
  HmsPush.getOdid()
    .then((result) => defaultSuccessHandler("getOdid", result))
    .catch((error) => defaultExceptionHandler("getOdid", error));
}

function getAAID() {
  HmsPush.getAAID()
    .then((result) => defaultSuccessHandler("getAAID", result))
    .catch((error) => defaultExceptionHandler("getAAID", error));
}

function getToken() {
  HmsPush.getToken(HmsPush.DEFAULT_TOKEN_SCOPE)
    .then((result) => {defaultSuccessHandler("getToken", result); console.log(JSON.stringify(result))})
    .catch((error) => defaultExceptionHandler("getToken", error));
}

function getCreationTime() {
  HmsPush.getCreationTime()
    .then((result) => defaultSuccessHandler("getCreationTime", result))
    .catch((error) => defaultExceptionHandler("getCreationTime", error));
}

function deleteAAID() {
  HmsPush.deleteAAID()
    .then((result) => defaultSuccessHandler("deleteAAID", result))
    .catch((error) => defaultExceptionHandler("deleteAAID", error));
}

function deleteToken() {
  HmsPush.deleteToken(HmsPush.DEFAULT_TOKEN_SCOPE)
    .then((result) => defaultSuccessHandler("deleteToken", result))
    .catch((error) => defaultExceptionHandler("deleteToken", error));
}

function subscribe(topic) {
  HmsPush.subscribe(topic)
    .then((result) => defaultSuccessHandler("subscribe", result))
    .catch((error) => defaultExceptionHandler("subscribe", error));
}

function unsubscribe(topic) {
  HmsPush.unsubscribe(topic)
    .then((result) => defaultSuccessHandler("unsubscribe", result))
    .catch((error) => defaultExceptionHandler("unsubscribe", error));
}

function disableAutoInit() {
  HmsPush.setAutoInitEnabled(false)
    .then((result) => defaultSuccessHandler("disableAutoInit", result))
    .catch((error) => defaultExceptionHandler("disableAutoInit", error));
}

function enableAutoInit() {
  HmsPush.setAutoInitEnabled(true)
    .then((result) => defaultSuccessHandler("enableAutoInit", result))
    .catch((error) => defaultExceptionHandler("enableAutoInit", error));
}

function isAutoInitEnabled() {
  HmsPush.isAutoInitEnabled()
    .then((result) => defaultSuccessHandler("isAutoInitEnabled", result))
    .catch((error) => defaultExceptionHandler("isAutoInitEnabled", error));
}

function sendRemoteMessage() {
  HmsPush.sendRemoteMessage({
    [HmsPush.RemoteMessageBuilder.TO]: "",
    //[HmsPush.RemoteMessageBuilder.MESSAGE_ID]: '', // Auto generated
    [HmsPush.RemoteMessageBuilder.MESSAGE_TYPE]: "hms",
    [HmsPush.RemoteMessageBuilder.COLLAPSE_KEY]: "-1",
    [HmsPush.RemoteMessageBuilder.TTL]: 120,
    [HmsPush.RemoteMessageBuilder.RECEIPT_MODE]: 1,
    [HmsPush.RemoteMessageBuilder.SEND_MODE]: 1,
    [HmsPush.RemoteMessageBuilder.DATA]: {
      key1: "test",
      message: "huawei-test",
    },
  })
    .then((result) => defaultSuccessHandler("sendRemoteMessage", result))
    .catch((error) => defaultExceptionHandler("sendRemoteMessage", error));
}

function getInitialNotification() {
  HmsPush.getInitialNotification()
    .then((result) =>
      defaultSuccessHandler("getInitialNotification",result)
    )
    .catch((error) =>
    defaultExceptionHandler("getInitialNotification", error)
    );
}
