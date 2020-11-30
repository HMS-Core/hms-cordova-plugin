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
import { IonicNativePlugin } from '@ionic-native/core';
export declare enum HMSAppsCheckConstants {
    HMS_VIRUS_LEVEL_RISK = 1,
    HMS_VIRUS_LEVEL_VIRUS = 2
}
export declare enum HMSUrlCheckThreatConstants {
    HMS_MALWARE = 1,
    HMS_PHISHING = 3
}
export declare enum HMSWifiDetectResponse {
    HMS_NO_WIFI = 0,
    HMS_SECURE_WIFI = 1,
    HMS_INSECURE_WIFI = 2
}
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
export declare class HMSSafetyDetectOriginal extends IonicNativePlugin {
    enableAppsCheck(): Promise<EnableAppsCheckResult>;
    isVerifyAppsCheck(): Promise<VerifyAppsCheckResult>;
    getMaliciousAppsList(): Promise<HMSMaliciousAppsData[]>;
    sysIntegrity(nonce: string, appId: string): Promise<string>;
    initUrlCheck(): Promise<void>;
    urlCheck(url: string, appId: string, urlCheckThreats: HMSUrlCheckThreatConstants[]): Promise<HMSUrlCheckThreatConstants[]>;
    shutdownUrlCheck(): Promise<void>;
    initUserDetect(): Promise<void>;
    userDetection(appId: string): Promise<string>;
    shutdownUserDetect(): Promise<void>;
    initAntiFraud(appId: string): Promise<void>;
    getRiskToken(): Promise<string>;
    releaseAntiFraud(): Promise<void>;
    getWifiDetectStatus(): Promise<HMSWifiDetectResponse>;
    disableLogger(): Promise<void>;
    enableLogger(): Promise<void>;
}

export declare const HMSSafetyDetect: HMSSafetyDetectOriginal;