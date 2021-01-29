/*
    Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

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
import { Component } from '@angular/core';
import { from } from 'rxjs';
import {
  HMSSafetyDetect,
  HMSUrlCheckThreatConstants,
  HMSWifiDetectResponse,
} from '@ionic-native/hms-safety-detect/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private hmsSafetyDetect: HMSSafetyDetect) {
    // Initilize url check
    this.hmsSafetyDetect.initUrlCheck();
    // Initilize user detect
    this.hmsSafetyDetect.initUserDetect();
   }

  async getMaliciousAppsList() {
    try {
      const res = await this.hmsSafetyDetect.getMaliciousAppsList();
      if (res.length === 0) {
        alert('getMaliciousAppsList => success! No app found ');
        console.log('getMaliciousAppsList => success! No app found');
      } else {
        alert('getMaliciousAppsList => ' + JSON.stringify(res));
        console.log('getMaliciousAppsList => ' + JSON.stringify(res));
      }
    } catch (error) {
      alert('getMaliciousAppsList => Error!' + error);
    }
  }

  async urlCheckFunc() {
  const appId = '102827061';
  // const url = 'http://malware.wicar.org/'; // not malicious
  const url = 'http://example.com/hms/safetydetect/malware';
  const threats = [
    HMSUrlCheckThreatConstants.HMS_MALWARE,
    HMSUrlCheckThreatConstants.HMS_PHISHING,
  ];
  try {
    const res = await this.hmsSafetyDetect.urlCheck(url, appId, threats);
    if (res.includes(HMSUrlCheckThreatConstants.HMS_MALWARE) && res.includes(HMSUrlCheckThreatConstants.HMS_PHISHING) ) {
      alert('urlCheck => success! => Phishing and Mallware detected ' + 'for url:' + url);
    } else if (res.includes(HMSUrlCheckThreatConstants.HMS_MALWARE))  {
      alert('urlCheck => success! => Malware detected ' + 'for url:' + url);
    }else if (res.includes(HMSUrlCheckThreatConstants.HMS_PHISHING))  {
      alert('urlCheck => success! => Phishing detected ' + 'for url:' + url);
    } else {
      alert('urlCheck => success! => No threats detected! ' + 'for url:' + url);
    }
  } catch (error) {
    alert('urlCheck => Error!' + error);
    console.log('urlCheck => Error!' + error);
  }
  this.hmsSafetyDetect.shutdownUrlCheck();
  }

  async getWifiDetectStatus() {
    try {
      const res = await this.hmsSafetyDetect.getWifiDetectStatus();
      alert('getWifiDetectStatus => success! ' + HMSWifiDetectResponse[res]);
    } catch (error) {
      alert('getWifiDetectStatus => Error! ' + error);
    }
  }

  async sysIntegrity() {
    const appId = '102827061';
    const nonce = 'Sample' + Date.now();
    try {
      const jws = await this.hmsSafetyDetect.sysIntegrity(nonce, appId);
      const jwsPayloadStr = JSON.stringify(jws).split('.')[1];
      const jsonPayload = decodeURIComponent(
        atob(jwsPayloadStr.replace(/-/g, '+').replace(/_/g, '/'))
          .split('').map(c => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );

      alert('sysIntegrity => success! ' + jsonPayload);
    } catch (error) {
      alert('sysIntegrity => Error! ' + error);
    }
  }

  async userDetect() {
    const appId = '102827061';
    try {
      const res = await this.hmsSafetyDetect.userDetection(appId);
      alert('userDetect => success! ' + JSON.stringify(res));
    } catch (error) {
      alert('userDetect => Error! ' + error);
    }
  }

  async getRiskToken() {
    try {
      const res = await this.hmsSafetyDetect.getRiskToken();
      alert('getRiskToken => success! ' + JSON.stringify(res));
    } catch (error) {
      alert('getRiskToken => Error! ' + error);
    }
  }
}
