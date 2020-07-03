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

function test() {
  try {
    HMSPush.test(
      "arg0",
      defaultSuccessCallback,
      defaultErrorCallback
    );
  } catch (e) {
    defaultExceptionCallback(e);
  }
}

function turnOffPush() {
  try {
    HMSPush.turnOffPush(
      "turnOffPush",
      defaultSuccessCallback,
      defaultErrorCallback
    );
  } catch (e) {
    defaultExceptionCallback(e);
  }
}

function turnOnPush() {
  try {
    HMSPush.turnOnPush(
      "turnOnPush",
      defaultSuccessCallback,
      defaultErrorCallback
    );
  } catch (e) {
    defaultExceptionCallback(e);
  }
}

function getID() {
  try {
    HMSPush.getID(
      "getID",
      defaultSuccessCallback,
      defaultErrorCallback
    );
  } catch (e) {
    defaultExceptionCallback(e);
  }
}

function getAAID() {
  try {
    HMSPush.getAAID(
      "getAAID",
      defaultSuccessCallback,
      defaultErrorCallback
    );
  } catch (e) {
    defaultExceptionCallback(e);
  }
}

function getToken() {
  try {
    HMSPush.getToken(
      "getToken",
      defaultSuccessCallback,
      defaultErrorCallback
    );
  } catch (e) {
    defaultExceptionCallback(e);
  }
}

function getCreationTime() {
  try {
    HMSPush.getCreationTime(
      "getCreationTime",
      defaultSuccessCallback,
      defaultErrorCallback
    );
  } catch (e) {
    defaultExceptionCallback(e);
  }
}

function deleteAAID() {
  try {
    HMSPush.deleteAAID(
      "deleteAAID",
      defaultSuccessCallback,
      defaultErrorCallback
    );
  } catch (e) {
    defaultExceptionCallback(e);
  }
}

function deleteToken() {
  try {
    HMSPush.deleteToken(
      "deleteToken",
      defaultSuccessCallback,
      defaultErrorCallback
    );
  } catch (e) {
    defaultExceptionCallback(e);
  }
}

function subscribe(topic) {
  try {
    HMSPush.subscribe(
      topic,
      defaultSuccessCallback,
      defaultErrorCallback
    );
  } catch (e) {
    defaultExceptionCallback(e);
  }
}

function unsubscribe(topic) {
  try {
    HMSPush.unsubscribe(
      topic,
      defaultSuccessCallback,
      defaultErrorCallback
    );
  } catch (e) {
    defaultExceptionCallback(e);
  }
}

function disableAutoInit() {
  try {
    HMSPush.disableAutoInit(
      "disableAutoInit",
      defaultSuccessCallback,
      defaultErrorCallback
    );
  } catch (e) {
    defaultExceptionCallback(e);
  }
}

function enableAutoInit() {
  try {
    HMSPush.enableAutoInit(
      "enableAutoInit",
      defaultSuccessCallback,
      defaultErrorCallback
    );
  } catch (e) {
    defaultExceptionCallback(e);
  }
}

function isAutoInitEnabled() {
  try {
    HMSPush.isAutoInitEnabled(
      "isAutoInitEnabled",
      defaultSuccessCallback,
      defaultErrorCallback
    );
  } catch (e) {
    defaultExceptionCallback(e);
  }
}

function onMessageReceived() {
  try {
    HMSPush.onMessageReceived(
      "",
      (message)=>{
        addLog("Success: ", JSON.stringify(message));
        console.log(message);
        alert("Success: " + JSON.stringify(message));
      },
      defaultErrorCallback
    );
  } catch (e) {
    defaultExceptionCallback(e);
  }
}