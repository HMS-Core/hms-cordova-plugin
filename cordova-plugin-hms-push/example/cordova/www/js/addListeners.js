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

function addListeners() {
  initListener();
  init();

  document
    .querySelector("#openCustomIntent")
    .addEventListener("click", () => openCustomIntent(), false);

  document
    .querySelector("#localNotification")
    .addEventListener("click", () => localNotificationButton(), false);

  document
    .querySelector("#turnOffPush")
    .addEventListener("click", () => turnOffPush(), false);

  document
    .querySelector("#turnOnPush")
    .addEventListener("click", () => turnOnPush(), false);

  document
    .querySelector("#getId")
    .addEventListener("click", () => getId(), false);

  document
    .querySelector("#getAAID")
    .addEventListener("click", () => getAAID(), false);

  document
    .querySelector("#getOdid")
    .addEventListener("click", () => getOdid(), false);

  document
    .querySelector("#getToken")
    .addEventListener("click", () => getToken(), false);

  document
    .querySelector("#getCreationTime")
    .addEventListener("click", () => getCreationTime(), false);

  document
    .querySelector("#deleteAAID")
    .addEventListener("click", () => deleteAAID(), false);

  document
    .querySelector("#deleteToken")
    .addEventListener("click", () => deleteToken(), false);

  document.querySelector("#subscribe").addEventListener(
    "click",
    () => {
      let topic = document.querySelector("#topic").value;
      subscribe(topic);
    },
    false
  );

  document.querySelector("#unsubscribe").addEventListener(
    "click",
    () => {
      let topic = document.querySelector("#topic").value;
      unsubscribe(topic);
    },
    false
  );

  document
    .querySelector("#disableAutoInit")
    .addEventListener("click", () => disableAutoInit(), false);

  document
    .querySelector("#enableAutoInit")
    .addEventListener("click", () => enableAutoInit(), false);

  document
    .querySelector("#isAutoInitEnabled")
    .addEventListener("click", () => isAutoInitEnabled(), false);

  document
    .querySelector("#logs")
    .addEventListener("click", () => clearLog(), false);

  document
    .querySelector("#sendRemoteMessage")
    .addEventListener("click", () => sendRemoteMessage(), false);

  document
    .querySelector("#getInitialNotification")
    .addEventListener("click", () => getInitialNotification(), false);
}
