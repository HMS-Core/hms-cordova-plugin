/**
 * Copyright 2020 Huawei Technologies Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var app = {
  // Application Constructor
  initialize: function () {
    document.addEventListener(
      "deviceready",
      this.onDeviceReady.bind(this),
      false
    );
  },

  onDeviceReady: function () {
    //this.receivedEvent('deviceready');
    document
      .getElementById("btn_getMaliciousAppsList")
      .addEventListener("click", getMaliciousAppsList);
    document.getElementById("btn_UrlCheck").addEventListener("click", urlCheck);
    document
      .getElementById("btn_getWifiDetectStatus")
      .addEventListener("click", getWifiDetectStatus);
    document
      .getElementById("btn_sysIntegrity")
      .addEventListener("click", sysIntegrity);
    document
      .getElementById("btn_userDetect")
      .addEventListener("click", userDetect);
    document
      .getElementById("btn_getRiskToken")
      .addEventListener("click", getRiskToken);

    HMSSafetyDetect.initUrlCheck();
    HMSSafetyDetect.initUserDetect();
  },
};

async function getMaliciousAppsList() {
  try {
    const res = await HMSSafetyDetect.getMaliciousAppsList();
    if (res.length === 0) {
      alert("getMaliciousAppsList => success! No app found ");
      console.log("getMaliciousAppsList => success! No app found");
    } else {
      alert("getMaliciousAppsList => " + JSON.stringify(res));
      console.log("getMaliciousAppsList => " + JSON.stringify(res));
    }
  } catch (error) {
    alert("getMaliciousAppsList => Error!" + error);
  }
}

async function urlCheck() {
  var appId = "102827061";
  // var url = "http://malware.wicar.org/"; //not malicious
  var url = "http://example.com/hms/safetydetect/malware";
  var threats = [
    HMSSafetyDetect.HMSUrlCheckThreatConstants.HMS_MALWARE,
    HMSSafetyDetect.HMSUrlCheckThreatConstants.HMS_PHISHING,
  ];
  try {
    const res = await HMSSafetyDetect.urlCheck(url, appId, threats);
    if (
      res.includes(HMSSafetyDetect.HMSUrlCheckThreatConstants.HMS_MALWARE) &&
      res.includes(HMSSafetyDetect.HMSUrlCheckThreatConstants.HMS_PHISHING)
    ) {
      alert(
        "urlCheck => success! => Phishing and Mallware detected " +
          "for url:" +
          url
      );
    } else if (
      res.includes(HMSSafetyDetect.HMSUrlCheckThreatConstants.HMS_MALWARE)
    ) {
      alert("urlCheck => success! => Malware detected " + "for url:" + url);
    } else if (
      res.includes(HMSSafetyDetect.HMSUrlCheckThreatConstants.HMS_PHISHING)
    ) {
      alert("urlCheck => success! => Phishing detected " + "for url:" + url);
    } else {
      alert("urlCheck => success! => No threats detected! " + "for url:" + url);
    }
  } catch (error) {
    alert("urlCheck => Error!" + error);
    console.log("urlCheck => Error!" + error);
  }
}

async function getWifiDetectStatus() {
  try {
    const res = await HMSSafetyDetect.getWifiDetectStatus();
    alert(
      "getWifiDetectStatus => " + HMSSafetyDetect.HMSWifiDetectResponse[res]
    );
  } catch (error) {
    alert("getWifiDetectStatus => Error! " + error);
  }
}

async function sysIntegrity() {
  const appId = "102827061";
  const nonce = "Sample" + Date.now();
  try {
    const jws = await HMSSafetyDetect.sysIntegrity(nonce, appId);
    var jwsPayloadStr = JSON.stringify(jws).split(".")[1];
    var jsonPayload = decodeURIComponent(
      atob(jwsPayloadStr.replace(/-/g, "+").replace(/_/g, "/"))
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    alert("sysIntegrity => success! " + jsonPayload);
  } catch (error) {
    alert("sysIntegrity => Error! " + error);
  }
}

async function userDetect() {
  const appId = "102827061";
  try {
    const res = await HMSSafetyDetect.userDetection(appId);
    alert("userDetect => success! " + JSON.stringify(res));
  } catch (error) {
    alert("userDetect => Error! " + error);
  }
}

async function getRiskToken() {
  try {
    const res = await HMSSafetyDetect.getRiskToken();
    alert("getRiskToken => success! " + JSON.stringify(res));
  } catch (error) {
    alert("getRiskToken => Error! " + error);
  }
}

app.initialize();
