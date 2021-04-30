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
export declare enum ContactShieldSetting {
    DEFAULT_INCUBATION_PERIOD = 14
}
export declare enum ContactShieldEngine {
    TOKEN_A = "TOKEN_WINDOW_MODE"
}
export declare enum HMSPermission {
    ACCESS_NETWORK_STATE = "android.permission.ACCESS_NETWORK_STATE",
    BLUETOOTH = "android.permission.BLUETOOTH",
    BLUETOOTH_ADMIN = "android.permission.BLUETOOTH_ADMIN",
    ACCESS_COARSE_LOCATION = "android.permission.ACCESS_COARSE_LOCATION",
    ACCESS_FINE_LOCATION = "android.permission.ACCESS_FINE_LOCATION"
}
export declare enum RiskLevel {
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
export declare enum HMSStatusCode {
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
    fileList: string[];
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
    weightsOfReportType: number[];
    weightsOfContagiousness: number[];
    thresholdOfAttenuationInDb: number[];
    weightsOfAttenuationBucket: number[];
    thresholdOfDaysSinceHit: number;
    minWindowScore: number;
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
export declare function clearData(): Promise<void>;
export declare function getContactDetail(token: string): Promise<ContactDetail[]>;
export declare function startContactShield(incubationPeriod: number): Promise<void>;
export declare function startContactShieldOld(incubationPeriod: number): Promise<void>;
export declare function startContactShieldNoPersistent(incubationPeriod: number): Promise<void>;
export declare function stopContactShield(): Promise<void>;
export declare function getContactSketch(token: string): Promise<ContactSketch>;
export declare function getContactWindow(token: string): Promise<ContactWindow[]>;
export declare function getPeriodicKey(): Promise<PeriodicKey[]>;
export declare function isContactShieldRunning(): Promise<boolean>;
export declare function putSharedKeyFiles(sharedKeyData: SharedKeyData): Promise<void>;
export declare function putSharedKeyFilesOld(sharedKeyData: SharedKeyData): Promise<void>;
export declare function disableLogger(): Promise<void>;
export declare function enableLogger(): Promise<void>;
export declare function handleCallback(event: string, callback: (data: any) => void): void;
export declare function registerReceiver(): Promise<void>;
export declare function unregisterReceiver(): Promise<void>;
export declare function hasPermission(permission: HMSPermission): Promise<boolean>;
export declare function requestPermissions(permissions: HMSPermission[]): Promise<void>;
export declare function getStatus(): Promise<any>;
export declare function getContactShieldVersion(): Promise<number>;
export declare function getDeviceCalibrationConfidence(): Promise<number>;
export declare function isSupportScanningWithoutLocation(): Promise<boolean>;
export declare function setSharedKeysDataMapping(sharedKey: SharedKeyDataMapping): Promise<any>;
export declare function getSharedKeysDataMapping(): Promise<SharedKeyDataMapping>;
export declare function getDailySketch(dailySketch: DailySketchConfiguration): Promise<any>;
export declare function putSharedKeyFilesKeys(sharedKeyFiles: SharedKeyDataKeys): Promise<any>;
export declare function putSharedKeyFilesProvider(files: string[]): Promise<any>;
