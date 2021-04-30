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
import { asyncExec } from './utils'

export enum ContactShieldSetting {
    DEFAULT_INCUBATION_PERIOD = 14
}

export enum ContactShieldEngine {
    TOKEN_A = "TOKEN_WINDOW_MODE"
}

export enum HMSPermission {
    ACCESS_NETWORK_STATE = "android.permission.ACCESS_NETWORK_STATE",
    BLUETOOTH = "android.permission.BLUETOOTH",
    BLUETOOTH_ADMIN = "android.permission.BLUETOOTH_ADMIN",
    ACCESS_COARSE_LOCATION = "android.permission.ACCESS_COARSE_LOCATION",
    ACCESS_FINE_LOCATION = "android.permission.ACCESS_FINE_LOCATION"
}

export enum RiskLevel {
    RISK_LEVEL_INVALID = 0,
    RISK_LEVEL_LOWEST = 1,
    RISK_LEVEL_LOW = 2,
    RISK_LEVEL_MEDIUM_LOW = 3,
    RISK_LEVEL_MEDIUM = 4,
    RISK_LEVEL_MEDIUM_HIGH = 5,
    RISK_LEVEL_HIGH = 6,
    RISK_LEVEL_EXT_HIGH = 7,
    RISK_LEVEL_HIGHEST = 8
}

export enum HMSStatusCode {
    STATUS_SUCCESS = 0,
    STATUS_FAILURE = -1,
    STATUS_API_DISORDER = 8001,
    STATUS_APP_QUOTA_LIMITED = 8100,
    STATUS_DISK_FULL = 8101,
    STATUS_BLUETOOTH_OPERATION_ERROR = 8102,
    STATUS_MISSING_PERMISSION_BLUETOOTH = 8016,
    STATUS_MISSING_SETTING_LOCATION_ON = 8020,
    STATUS_INTERNAL_ERROR = 8060,
    STATUS_MISSING_PERMISSION_INTERNET = 8064
}

export interface PeriodicKey {
    content: Int8Array;
    initialRiskLevel: number;
    periodicKeyLifeTime: number;
    periodicKeyValidTime: number;
    reportType: number;
}

export interface SharedKeyData {
    token: string;
    diagnosisConfiguration: DiagnosisConfiguration;
    fileList: string[]
}

export interface SharedKeyDataKeys {
    token: string;
    diagnosisConfiguration: DiagnosisConfiguration;
    fileList: string[];
    publicKeys: string[];
}

export interface SharedKeyDataMapping {
    daysSinceCreationToContagiousness: any;
    defaultReportType: number;
    defaultContagiousness: number;
}

export interface DailySketchConfiguration {
    weightsOfReportType: number[],
    weightsOfContagiousness: number[],
    thresholdOfAttenuationInDb: number[],
    weightsOfAttenuationBucket: number[],
    thresholdOfDaysSinceHit: number,
    minWindowScore: number,
}

export interface DiagnosisConfiguration {
    attenuationDurationThresholds?: number[];
    attenuationRiskValues?: number[];
    attenuationWeight?: number;
    daysAfterContactedRiskValues?: number[];
    daysAfterContactedWeight?: number;
    durationRiskValues?: number[];
    durationWeight?: number;
    initialRiskLevelRiskValues?: number[];
    initialRiskLevelWeight?: number;
    minimumRiskValueThreshold?: number;
}

export interface ContactSketch {
    attenuationDurations: number[];
    daysSinceLastHit: number;
    maxRiskValue: number;
    numberOfHits: number;
    summationRiskValue: number;
}

export interface ContactDetail {
    attenuationDurations: number[];
    attenuationRiskValue: number;
    dayNumber: number;
    durationMinutes: number;
    initialRiskLevel: number;
    totalRiskValue: number;
}
export interface ContactWindow {
    dateMillis: number;
    reportType: number;
    scanInfos: ScanInfo[];
}

export interface ScanInfo {
    averageAttenuation: number;
    minimumAttenuation: number;
    secondsSinceLastScan: number;
}

export interface StatusCode {
    statusCode: number;
    statusMessage: string;
}

export function clearData(): Promise<void> {
    return asyncExec('HMSContactShield', 'ContactShieldModule', ["clearData"]);
}
export function getContactDetail(token: string): Promise<ContactDetail[]> {
    return asyncExec('HMSContactShield', 'ContactShieldModule', ['getContactDetail', token ? token : ""]);
}
export function startContactShield(incubationPeriod: number): Promise<void> {
    return asyncExec('HMSContactShield', 'ContactShieldModule', ['startContactShield', incubationPeriod ? incubationPeriod : ContactShieldSetting.DEFAULT_INCUBATION_PERIOD]);
}
export function startContactShieldOld(incubationPeriod: number): Promise<void> {
    return asyncExec('HMSContactShield', 'ContactShieldModule', ['startContactShieldOld', incubationPeriod ? incubationPeriod : ContactShieldSetting.DEFAULT_INCUBATION_PERIOD]);
}
export function startContactShieldNoPersistent(incubationPeriod: number): Promise<void> {
    return asyncExec('HMSContactShield', 'ContactShieldModule', ['startContactShieldNoPersistent', incubationPeriod ? incubationPeriod : ContactShieldSetting.DEFAULT_INCUBATION_PERIOD]);
}
export function stopContactShield(): Promise<void> {
    return asyncExec('HMSContactShield', 'ContactShieldModule', ['stopContactShield']);
}
export function getContactSketch(token: string): Promise<ContactSketch> {
    return asyncExec('HMSContactShield', 'ContactShieldModule', ['getContactSketch', token ? token : ""]);
}
export function getContactWindow(token: string): Promise<ContactWindow[]> {
    return asyncExec('HMSContactShield', 'ContactShieldModule', ['getContactWindow', token ? token : ""]);
}
export function getPeriodicKey(): Promise<PeriodicKey[]> {
    return asyncExec('HMSContactShield', 'ContactShieldModule', ['getPeriodicKey']);
}
export async function isContactShieldRunning(): Promise<boolean> {
    const { result } = await asyncExec('HMSContactShield', 'ContactShieldModule', ['isContactShieldRunning']);
    return result;
}
export function putSharedKeyFiles(sharedKeyData: SharedKeyData): Promise<void> {
    // Set defaults
    sharedKeyData.diagnosisConfiguration = Object.assign({
        attenuationDurationThresholds: [50, 74],
        attenuationRiskValues: [4, 4, 4, 4, 4, 4, 4, 4],
        attenuationWeight: 50,
        daysAfterContactedRiskValues: [4, 4, 4, 4, 4, 4, 4, 4],
        daysAfterContactedWeight: 50,
        durationRiskValues: [4, 4, 4, 4, 4, 4, 4, 4],
        durationWeight: 50,
        initialRiskLevelRiskValues: [4, 4, 4, 4, 4, 4, 4, 4],
        initialRiskLevelWeight: 50,
        minimumRiskValueThreshold: 1
    }, sharedKeyData.diagnosisConfiguration)
    return asyncExec('HMSContactShield', 'ContactShieldModule', ['putSharedKeyFiles', sharedKeyData]);
}
export function putSharedKeyFilesOld(sharedKeyData: SharedKeyData): Promise<void> {
    // Set defaults
    sharedKeyData.diagnosisConfiguration = Object.assign({
        attenuationDurationThresholds: [50, 74],
        attenuationRiskValues: [4, 4, 4, 4, 4, 4, 4, 4],
        attenuationWeight: 50,
        daysAfterContactedRiskValues: [4, 4, 4, 4, 4, 4, 4, 4],
        daysAfterContactedWeight: 50,
        durationRiskValues: [4, 4, 4, 4, 4, 4, 4, 4],
        durationWeight: 50,
        initialRiskLevelRiskValues: [4, 4, 4, 4, 4, 4, 4, 4],
        initialRiskLevelWeight: 50,
        minimumRiskValueThreshold: 1
    }, sharedKeyData.diagnosisConfiguration)
    return asyncExec('HMSContactShield', 'ContactShieldModule', ['putSharedKeyFilesOld', sharedKeyData]);
}
export function disableLogger(): Promise<void> {
    return asyncExec('HMSContactShield', 'ContactShieldModule', ['disableLogger']);
}
export function enableLogger(): Promise<void> {
    return asyncExec('HMSContactShield', 'ContactShieldModule', ['enableLogger']);
}
export function handleCallback(event: string, callback: (data: any) => void): void {
    window.subscribeHMSEvent(event, callback);
}
export function registerReceiver(): Promise<void> {
    return asyncExec('HMSContactShield', 'ContactShieldModule', ['registerReceiver']);
}
export function unregisterReceiver(): Promise<void> {
    return asyncExec('HMSContactShield', 'ContactShieldModule', ['unregisterReceiver']);
}
export function hasPermission(permission: HMSPermission): Promise<boolean> {
    return asyncExec('HMSContactShield', 'ContactShieldModule', ['hasPermission', permission]);
}
export function requestPermissions(permissions: HMSPermission[]): Promise<void> {
    return asyncExec('HMSContactShield', 'ContactShieldModule', ['requestPermissions', permissions]);
}
export function getStatus(): Promise<any> {
    return asyncExec('HMSContactShield', 'ContactShieldModule', ['getStatus']);
}
export function getContactShieldVersion(): Promise<number> {
    return asyncExec('HMSContactShield', 'ContactShieldModule', ['getContactShieldVersion']);
}
export function getDeviceCalibrationConfidence(): Promise<number> {
    return asyncExec('HMSContactShield', 'ContactShieldModule', ['getDeviceCalibrationConfidence']);
}
export function isSupportScanningWithoutLocation(): Promise<boolean> {
    return asyncExec('HMSContactShield', 'ContactShieldModule', ['isSupportScanningWithoutLocation']);
}
export function setSharedKeysDataMapping(sharedKey: SharedKeyDataMapping): Promise<any> {
    return asyncExec('HMSContactShield', 'ContactShieldModule', ['setSharedKeysDataMapping', sharedKey]);
}
export function getSharedKeysDataMapping(): Promise<SharedKeyDataMapping> {
    return asyncExec('HMSContactShield', 'ContactShieldModule', ['getSharedKeysDataMapping']);
}
export function getDailySketch(dailySketch: DailySketchConfiguration): Promise<any> {
    // Set defaults
    dailySketch = Object.assign({
        weightsOfReportType: [0],
        weightsOfContagiousness: [0],
        thresholdOfAttenuationInDb: [0],
        weightsOfAttenuationBucket: [0],
        thresholdOfDaysSinceHit: 0,
        minWindowScore: 0,
    }, dailySketch)
    return asyncExec('HMSContactShield', 'ContactShieldModule', ['getDailySketch', dailySketch]);
}
export function putSharedKeyFilesKeys(sharedKeyFiles: SharedKeyDataKeys): Promise<any> {
    // Set defaults
    sharedKeyFiles.diagnosisConfiguration = Object.assign({
        attenuationDurationThresholds: [50, 74],
        attenuationRiskValues: [4, 4, 4, 4, 4, 4, 4, 4],
        attenuationWeight: 50,
        daysAfterContactedRiskValues: [4, 4, 4, 4, 4, 4, 4, 4],
        daysAfterContactedWeight: 50,
        durationRiskValues: [4, 4, 4, 4, 4, 4, 4, 4],
        durationWeight: 50,
        initialRiskLevelRiskValues: [4, 4, 4, 4, 4, 4, 4, 4],
        initialRiskLevelWeight: 50,
        minimumRiskValueThreshold: 1
    }, sharedKeyFiles.diagnosisConfiguration)
    return asyncExec('HMSContactShield', 'ContactShieldModule', ['putSharedKeyFilesKeys', sharedKeyFiles]);
}
export function putSharedKeyFilesProvider(files: string[]): Promise<any> {
    return asyncExec('HMSContactShield', 'ContactShieldModule', ['putSharedKeyFilesProvider', files]);
}
