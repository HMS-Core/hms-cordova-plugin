/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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
import { IonicNativePlugin } from "@ionic-native/core";
export declare enum ContactShieldSetting {
    DEFAULT_INCUBATION_PERIOD = 14,
}
export declare enum ContactShieldEngine {
    TOKEN_A = "TOKEN_WINDOW_MODE",
}
export declare enum HMSPermission {
    ACCESS_NETWORK_STATE = "android.permission.ACCESS_NETWORK_STATE",
    BLUETOOTH = "android.permission.BLUETOOTH",
    BLUETOOTH_ADMIN = "android.permission.BLUETOOTH_ADMIN",
    ACCESS_COARSE_LOCATION = "android.permission.ACCESS_COARSE_LOCATION",
    ACCESS_FINE_LOCATION = "android.permission.ACCESS_FINE_LOCATION",
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
    RISK_LEVEL_HIGHEST = 8,
}
export declare enum HMSStatusCode {
    STATUS_SUCCESS = 0,
    STATUS_FAILURE = -1,
    STATUS_API_DISORDER = 8001,
    STATUS_APP_QUOTA_LIMITED = 8100,
    STATUS_DISK_FULL = 8101,
    STATUS_BLUETOOTHW_OPERATION_ERROR = 8102,
    STATUS_MISSING_PERMISSION_LOCATION = 8103,
    STATUS_SIGNATURE_VERIFY_FAILED = 8104,
    STATUS_UNAUTHORIZED = 8105,
    STATUS_EMUI_RESTRICTED = 8106,
    STATUS_MISSING_PERMISSION_BLUETOOTH = 8016,
    STATUS_MISSING_SETTING_LOCATION_ON = 8020,
    STATUS_INTERNAL_ERROR = 8060,
    STATUS_MISSING_PERMISSION_INTERNET = 8064,
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
export interface SharedKeyDataKeysProvider {
    token: string;
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
export declare enum ContactShieldStatus {
    RUNNING = 1,
    NOT_RUNNING = 2,
    BLUETOOTH_OFF = 4,
    LOCATION_OFF = 8,
    NO_LOCATION_PERMISSION = 16,
    HARDWARE_NOT_SUPPORT = 32,
    STORAGE_LIMITED = 64,
    RUNNING_FOR_ANOTHER_APP = 128,
    UNKNOWN = 1024,
}
export declare enum CalibrationConfidence {
    LOWEST = 0,
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
}
export declare class HmsContactShield extends IonicNativePlugin {
    clearData(): Promise<void>;
    getContactDetail(token: string): Promise<ContactDetail[]>;
    startContactShield(incubationPeriod: number): Promise<void>;
    startContactShieldOld(incubationPeriod: number): Promise<void>;
    startContactShieldNoPersistent(incubationPeriod: number): Promise<void>;
    stopContactShield(): Promise<void>;
    getContactSketch(token: string): Promise<ContactSketch>;
    getContactWindow(token: string): Promise<ContactWindow[]>;
    getPeriodicKey(): Promise<PeriodicKey[]>;
    isContactShieldRunning(): Promise<boolean>;
    putSharedKeyFiles(sharedKeyData: SharedKeyData): Promise<void>;
    putSharedKeyFilesOld(sharedKeyData: SharedKeyData): Promise<void>;
    putSharedKeyFilesKeys(sharedKeyData: SharedKeyDataKeys): Promise<void>;
    putSharedKeyFilesProvider(files: string[]): Promise<void>;
    putSharedKeyFilesKeysProvider(
        sharedKeyFilesProvider: SharedKeyDataKeysProvider
    ): Promise<void>;
    getDailySketch(dailySketch: DailySketchConfiguration): Promise<any>;
    setSharedKeysDataMapping(sharedKey: SharedKeyDataMapping): Promise<void>;
    getSharedKeysDataMapping(): Promise<any>;
    getStatus(): Promise<ContactShieldStatus>;
    getContactShieldVersion(): Promise<number>;
    getDeviceCalibrationConfidence(): Promise<number>;
    isSupportScanningWithoutLocation(): Promise<boolean>;
    disableLogger(): Promise<void>;
    enableLogger(): Promise<void>;
    handleCallback(event: string, callback: (data: any) => void): void;
    registerReceiver(): Promise<void>;
    unregisterReceiver(): Promise<void>;
    hasPermission(permission: HMSPermission): Promise<boolean>;
    requestPermissions(permissions: HMSPermission[]): Promise<void>;
}
