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
export declare function enableAppsCheck(): Promise<EnableAppsCheckResult>;
export declare function isVerifyAppsCheck(): Promise<VerifyAppsCheckResult>;
export declare function getMaliciousAppsList(): Promise<HMSMaliciousAppsData>;
export declare function sysIntegrity(nonce: string, appId: string): Promise<string>;
export declare function sysIntegrityWithRequest(nonce: string, appId: string, alg: string): Promise<string>;
export declare function initUrlCheck(): Promise<void>;
export declare function urlCheck(url: string, appId: string, urlCheckThreats: HMSUrlCheckThreatConstants[]): Promise<HMSUrlCheckThreatConstants[]>;
export declare function shutdownUrlCheck(): Promise<void>;
export declare function initUserDetect(): Promise<void>;
export declare function userDetection(appId: string): Promise<string>;
export declare function shutdownUserDetect(): Promise<void>;
export declare function initAntiFraud(appId: string): Promise<void>;
export declare function getRiskToken(): Promise<string>;
export declare function releaseAntiFraud(): Promise<void>;
export declare function getWifiDetectStatus(): Promise<HMSWifiDetectResponse>;
export declare function enableLogger(): Promise<void>;
export declare function disableLogger(): Promise<void>;
