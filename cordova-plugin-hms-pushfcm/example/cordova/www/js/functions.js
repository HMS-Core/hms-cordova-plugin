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

function pushFcmInit() {
  HMSPushFcmProxy.init()
    .then((result) => defaultSuccessHandler("HMSPushFcmProxy.init", result))
    .catch((error) => defaultExceptionHandler("HMSPushFcmProxy.init", error));
}

function pushFcmIsProxyInitEnabled() {
  HMSPushFcmProxy.isProxyInitEnabled()
    .then((result) => defaultSuccessHandler("HMSPushFcmProxy.isProxyInitEnabled", result))
    .catch((error) => defaultExceptionHandler("HMSPushFcmProxy.isProxyInitEnabled", error));
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
