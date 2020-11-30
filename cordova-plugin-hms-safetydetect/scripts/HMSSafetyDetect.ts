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


import { asyncExec } from './utils';

// /////////////////////////////////////////////////////////////////////////////////////////////
// HMS Apps Check
// /////////////////////////////////////////////////////////////////////////////////////////////

export function enableAppsCheck(): Promise<EnableAppsCheckResult> {
    return asyncExec('HMSSafetyDetect', 'enableAppsCheck', []);
}

export function isVerifyAppsCheck(): Promise<VerifyAppsCheckResult> {
    return asyncExec('HMSSafetyDetect', 'isVerifyAppsCheck', []);
}

export function getMaliciousAppsList(): Promise<HMSMaliciousAppsData[]> {
    return asyncExec('HMSSafetyDetect', 'getMaliciousAppsList', []);
}

// /////////////////////////////////////////////////////////////////////////////////////////////
// HMS Sys Integrity
// /////////////////////////////////////////////////////////////////////////////////////////////

export function sysIntegrity(nonce: string, appId: string): Promise<string> {
    return asyncExec('HMSSafetyDetect', 'sysIntegrity', [nonce, appId]);
}

// /////////////////////////////////////////////////////////////////////////////////////////////
// HMS Url Check
// /////////////////////////////////////////////////////////////////////////////////////////////

export function initUrlCheck(): Promise<void> {
    return asyncExec('HMSSafetyDetect', 'initUrlCheck', []);
}

export function urlCheck(url: string, appId: string, urlCheckThreats: HMSUrlCheckThreatConstants[]): Promise<HMSUrlCheckThreatConstants[]> {
    return asyncExec('HMSSafetyDetect', 'urlCheck', [url, appId, urlCheckThreats]);
}

export function shutdownUrlCheck(): Promise<void> {
    return asyncExec('HMSSafetyDetect', 'shutdownUrlCheck', []);
}

// /////////////////////////////////////////////////////////////////////////////////////////////
// HMS User Detect
// /////////////////////////////////////////////////////////////////////////////////////////////

export function initUserDetect(): Promise<void> {
    return asyncExec('HMSSafetyDetect', 'initUserDetect', []);
}

export function userDetection(appId: string): Promise<string> {
    return asyncExec('HMSSafetyDetect', 'userDetection', [appId]);
}

export function shutdownUserDetect(): Promise<void> {
    return asyncExec('HMSSafetyDetect', 'shutdownUserDetect', []);
}

export function initAntiFraud(appId: string): Promise<void> {
    return asyncExec('HMSSafetyDetect', 'initAntiFraud', [appId]);
}

export function getRiskToken(): Promise<string> {
    return asyncExec('HMSSafetyDetect', 'getRiskToken', []);
}

export function releaseAntiFraud(): Promise<void> {
    return asyncExec('HMSSafetyDetect', 'releaseAntiFraud', []);
}

// /////////////////////////////////////////////////////////////////////////////////////////////
// HMS Wifi Detect
// /////////////////////////////////////////////////////////////////////////////////////////////

export function getWifiDetectStatus(): Promise<HMSWifiDetectResponse> {
    return asyncExec('HMSSafetyDetect', 'getWifiDetectStatus', []);
}


// /////////////////////////////////////////////////////////////////////////////////////////////
// HMS Logger
// /////////////////////////////////////////////////////////////////////////////////////////////

export function enableLogger(): Promise<void> {
    return asyncExec('HMSSafetyDetect', 'enableLogger', []);
}

export function disableLogger(): Promise<void> {
    return asyncExec('HMSSafetyDetect', 'disableLogger', []);
}

// /////////////////////////////////////////////////////////////////////////////////////////////
// Constants
// /////////////////////////////////////////////////////////////////////////////////////////////

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

// /////////////////////////////////////////////////////////////////////////////////////////////
// Data Types
// /////////////////////////////////////////////////////////////////////////////////////////////

export interface VerifyAppsCheckResult {
    verifyAppsCheck: boolean
}

export interface EnableAppsCheckResult {
    enableAppsCheck: boolean
}

export interface HMSMaliciousAppsData {
    apkPackageName: string;
    apkCategory: HMSAppsCheckConstants;
    apkSha256: string;
}
