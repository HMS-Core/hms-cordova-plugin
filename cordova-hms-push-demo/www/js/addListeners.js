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

addLog("Running addListeners...");

document.querySelector("#test").addEventListener(
  "click",
  () => {
    addLog("test", "-button clicked");
    test();
  },
  false
);

document.querySelector("#turnOffPush").addEventListener(
  "click",
  () => {
    addLog("turnOffPush", "-button clicked");
    turnOffPush();
  },
  false
);

document.querySelector("#turnOnPush").addEventListener(
  "click",
  () => {
    addLog("turnOnPush", "-button clicked");
    turnOnPush();
  },
  false
);

document.querySelector("#getID").addEventListener(
  "click",
  () => {
    addLog("getID", "-button clicked");
    getID();
  },
  false
);

document.querySelector("#getAAID").addEventListener(
  "click",
  () => {
    addLog("getAAID", "-button clicked");
    getAAID();
  },
  false
);

document.querySelector("#getToken").addEventListener(
  "click",
  () => {
    addLog("getToken", "-button clicked");
    getToken();
  },
  false
);

document.querySelector("#getCreationTime").addEventListener(
  "click",
  () => {
    addLog("getCreationTime", "-button clicked");
    getCreationTime();
  },
  false
);

document.querySelector("#deleteAAID").addEventListener(
  "click",
  () => {
    addLog("deleteAAID", "-button clicked");
    deleteAAID();
  },
  false
);

document.querySelector("#deleteToken").addEventListener(
  "click",
  () => {
    addLog("deleteToken", "-button clicked");
    deleteToken();
  },
  false
);

document.querySelector("#subscribe").addEventListener(
  "click",
  () => {
    addLog("subscribe", "-button clicked");
    let topic = document.querySelector("#topic").value;
    subscribe(topic);
  },
  false
);

document.querySelector("#unsubscribe").addEventListener(
  "click",
  () => {
    addLog("unsubscribe", "-button clicked");
    let topic = document.querySelector("#topic").value;
    unsubscribe(topic);
  },
  false
);

document.querySelector("#disableAutoInit").addEventListener(
  "click",
  () => {
    addLog("disableAutoInit", "-button clicked");
    disableAutoInit();
  },
  false
);

document.querySelector("#enableAutoInit").addEventListener(
  "click",
  () => {
    addLog("enableAutoInit", "-button clicked");
    enableAutoInit();
  },
  false
);

document.querySelector("#isAutoInitEnabled").addEventListener(
  "click",
  () => {
    addLog("isAutoInitEnabled", "-button clicked");
    isAutoInitEnabled();
  },
  false
);

document.querySelector("#clearLog").addEventListener(
  "click",
  () => {
    clearLog();
  },
  false
);

document.querySelector("#onMessageReceived").addEventListener(
  "click",
  () => {
    onMessageReceived();
  },
  false
);

addLog("addListeners Done !");
