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

import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';


// Constants

export enum HMSAppsCheckConstants {
  HMS_VIRUS_LEVEL_RISK = 1,
  HMS_VIRUS_LEVEL_VIRUS = 2
}
export enum HMSUrlCheckThreatConstants {
  HMS_MALWARE = 1,
  HMS_PHISHING = 3
}

export enum HMSWifiDetectResponse {
  HMS_NO_WIFI = 0,
  HMS_SECURE_WIFI = 1,
  HMS_INSECURE_WIFI = 2
}
// Data Types

export interface VerifyAppsCheckResult {
  verifyAppsCheck: boolean;
}
export interface EnableAppsCheckResult {
  enableAppsCheck: boolean;
}
export interface HMSMaliciousAppsData {
  apkPackageName: string;
  apkCategory: HMSAppsCheckConstants;
  apkSha256: string;
}

@Plugin({
  pluginName: 'HMSSafetyDetect',
  plugin: 'cordova-plugin-hms-safetydetect',
  pluginRef: 'HMSSafetyDetect',
  platforms: ['Android']
})
@Injectable()
export class HMSSafetyDetect extends IonicNativePlugin {

  // Apps Check
  @Cordova({ otherPromise: true })
  enableAppsCheck(): Promise<EnableAppsCheckResult> {
    return;
  }

  @Cordova({ otherPromise: true })
  isVerifyAppsCheck(): Promise<VerifyAppsCheckResult> {
    return;
  }

  @Cordova({ otherPromise: true })
  getMaliciousAppsList(): Promise<HMSMaliciousAppsData[]> {
    return;
  }

  // Sys Integrity
  @Cordova({ otherPromise: true })
  sysIntegrity(nonce: string, appId: string): Promise<string> {
    return;
  }

  // Url Check
  @Cordova({ otherPromise: true })
  initUrlCheck(): Promise<void> {
    return;
  }

  @Cordova({ otherPromise: true })
  urlCheck(url: string, appId: string, urlCheckThreats: HMSUrlCheckThreatConstants[]): Promise<HMSUrlCheckThreatConstants[]> {
    return;
  }

  @Cordova({ otherPromise: true })
  shutdownUrlCheck(): Promise<void> {
    return;
  }

  // User Detect 
  @Cordova({ otherPromise: true })
  initUserDetect(): Promise<void> {
    return;
  }

  @Cordova({ otherPromise: true })
  userDetection(appId: string): Promise<string> {
    return;
  }

  @Cordova({ otherPromise: true })
  shutdownUserDetect(): Promise<void> {
    return;
  }
  
  @Cordova({ otherPromise: true })
  initAntiFraud(appId: string): Promise<void> {
    return;
  }
  
  @Cordova({ otherPromise: true })
  getRiskToken(): Promise<string> {
    return;
  }
  
  @Cordova({ otherPromise: true })
  releaseAntiFraud(): Promise<void> {
    return;
  }

  // Wifi Detect
  @Cordova({ otherPromise: true })
  getWifiDetectStatus(): Promise<HMSWifiDetectResponse> {
    return;
  }

  // HMS Logger
  @Cordova({ otherPromise: true })
  disableLogger(): Promise<void> {
    return;
  }

  @Cordova({ otherPromise: true })
  enableLogger(): Promise<void> {
    return;
  }
}