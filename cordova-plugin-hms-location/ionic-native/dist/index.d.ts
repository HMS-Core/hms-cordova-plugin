/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.

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
export declare class HMSLocationOriginal extends IonicNativePlugin {
    getGeofenceService(): GeofenceService;
    getGeocoderService(language: string, country?: string): GeocoderService;
    getFusedLocationProviderClient(): FusedLocationService;
    getActivityIdentificationService(): ActivityIdentificationService;
    getCoordinateConversionService(): CoordinateConversionService;
    addListener(event: Events, callback: (data: LocationResult | [] | ActivityConversionResponse | ActivityIdentificationResponse) => void): any;
    disableLogger(): Promise<void>;
    enableLogger(): Promise<void>;
}
export declare class BackgroundManager {
    private constructor();
    static notify(notificationId: number, notification: string): void;
    static makeToast(text: string, duration: number): void;
}
export interface FusedLocationService {
    disableBackgroundLocation(): Promise<void>;
    enableBackgroundLocation(notificationId: number, notification: string): Promise<void>;
    checkLocationSettings(request: LocationSettingsRequest): Promise<LocationSettingsStates>;
    flushLocations(): Promise<void>;
    getLastLocation(): Promise<Location>;
    getLastLocationWithAddress(request: LocationRequest): Promise<HWLocation>;
    getLocationAvailability(): Promise<boolean>;
    getNavigationContextState(requestType: NavigationRequestConstants): Promise<NavigationResult>;
    removeLocationUpdates(requestCode: number, type: RequestType): Promise<boolean>;
    requestLocationUpdates(requestCode: number, request: LocationRequest, callback?: (locationResult: LocationResult) => void): Promise<boolean>;
    requestLocationUpdatesEx(requestCode: number, request: LocationRequest): Promise<boolean>;
    setMockLocation(latLng: LatLng): Promise<void>;
    setMockMode(mode: boolean): Promise<void>;
    setLogConfig(logConfigSettings: LogConfigSettings): Promise<void>;
    getLogConfig(): Promise<LogConfigSettings>;
}
export interface GeofenceService {
    createGeofenceList(requestCode: number, geofences: Geofence[], initConversions: GeofenceInitConversionType, coordinateType: CoordinateType, callback?: (data: Location) => void): Promise<boolean>;
    deleteGeofenceList(requestCode: number): Promise<boolean>;
}
export interface GeocoderService {
    getFromLocation(getFromLocationRequest: GetFromLocationRequest): Promise<HWLocation[]>;
    getFromLocationName(getFromLocationNameRequest: GetFromLocationNameRequest): Promise<HWLocation[]>;
}
export interface CoordinateConversionService {
    convertCoord(latitude: number, longitude: number, coordType: number): Promise<LonLat>;
}
export interface GetFromLocationRequest {
    latitude: number;
    longitude: number;
    maxResults: number;
}
export interface GetFromLocationNameRequest {
    locationName: string;
    maxResults: number;
    corner?: Corner;
}
export interface Corner {
    lowerLeftLatitude: number;
    lowerLeftLongitude: number;
    upperRightLatitude: number;
    upperRightLongitude: number;
}
export interface LogConfigSettings {
    logConfigSettingsFile?: LogConfigSettingsFile;
    logPath: string;
}
export interface LogConfigSettingsFile {
    fileExpiredTime: number;
    fileNum: number;
    fileSize: number;
}
export interface ActivityIdentificationService {
    createActivityConversionUpdates(requestCode: number, activityConversionRequest: ActivityConversionInfo[], callback?: (data: ActivityConversionResponse) => void): Promise<boolean>;
    createActivityIdentificationUpdates(requestCode: number, intervalMillis: number, callback?: (data: ActivityIdentificationResponse) => void): Promise<boolean>;
    deleteActivityConversionUpdates(requestCode: number): Promise<boolean>;
    deleteActivityIdentificationUpdates(requestCode: number): Promise<boolean>;
}
export interface Location {
    latitude: number;
    longitude: number;
    altitude: number;
    speed: number;
    bearing: number;
    accuracy: number;
    time: number;
    fromMockProvider: boolean;
    verticalAccuracyMeters: number;
    bearingAccuracyDegrees: number;
    speedAccuracyMetersPerSecond: number;
}
export interface HWLocation {
    latitude: number;
    longitude: number;
    altitude: number;
    speed: number;
    bearing: number;
    accuracy: number;
    provider: string;
    time: number;
    elapsedRealtimeNanos: number;
    countryName: string;
    state: string;
    city: string;
    county: string;
    street: string;
    featureName: string;
    postalCode: string;
    phone: string;
    url: string;
    extraInfo: string;
    verticalAccuracyMeters: number;
    bearingAccuracyDegrees: number;
    speedAccuracyMetersPerSecond: number;
    coordinateType: number;
}
export interface LocationSettingsStates {
    isBlePresent: boolean;
    isBleUsable: boolean;
    isGnssPresent: boolean;
    isGnssUsable: boolean;
    isLocationPresent: boolean;
    isLocationUsable: boolean;
    isNetworkLocationPresent: boolean;
    isNetworkLocationUsable: boolean;
}
export interface LocationRequest {
    priority: PriorityConstants;
    interval?: number;
    numUpdates?: number;
    fastestInterval?: number;
    expirationTime?: number;
    expirationTimeDuration?: number;
    smallestDisplacement?: number;
    maxWaitTime?: number;
    needAddress?: boolean;
    language?: string;
    countryCode?: string;
    coordinateType?: number;
}
export interface LocationSettingsRequest {
    locationRequests: LocationRequest[];
    needBle: boolean;
    alwaysShow: boolean;
}
export interface LatLng {
    longitude: number;
    latitude: number;
}
export interface NavigationResult {
    state: number;
    possibility: number;
}
export interface ActivityConversionInfo {
    conversionType: ConversionType;
    activityType: ActivityType;
}
export interface Geofence {
    longitude: number;
    latitude: number;
    radius: number;
    uniqueId: string;
    conversions: GeofenceTriggerType;
    validContinueTime: number;
    dwellDelayTime: number;
    notificationInterval: number;
}
export interface Notification {
    contentTitle?: string;
    category: NotificationCategory;
    priority: NotificationImportance;
    channelName: string;
    color?: number;
    colorized?: boolean;
    contentInfo?: string;
    contentText?: string;
    largeIcon?: string;
    onGoing?: boolean;
    smallIcon: string;
    subText?: string;
    sound?: string;
    vibrate?: number[];
    visibility?: number;
}
export interface LocationResult {
    lastLocation: Location;
    hwLocations: HWLocation[];
    lastHWLocation: HWLocation;
    locations: Location[];
}
export interface ActivityConversionData {
    activityType: ActivityType;
    conversionType: ConversionType;
    elapsedTimeFromReboot: number;
}
export interface ActivityConversionResponse {
    activityConversionDataList: ActivityConversionData[];
}
export interface ActivityIdentificationData {
    identificationActivity: ActivityType;
    possibility: number;
}
export interface ActivityIdentificationResponse {
    elapsedTimeFromReboot: number;
    mostActivityIdentification: ActivityConversionInfo;
    time: number;
    activityIdentificationDatas: ActivityIdentificationData[];
}
export interface LonLat {
    longitude: number;
    latitude: number;
}
export declare enum Events {
    ON_LOCATION_RESULT = "onLocationResult",
    ACTIVITY_CONVERSION_RESULT = "onActivityConversionResult",
    ACTIVITY_IDENTIFICATION_RESULT = "onActivityIdentificationResult",
    GEOFENCE_RESULT = "onGeofenceResult"
}
export declare enum PriorityConstants {
    PRIORITY_HIGH_ACCURACY = 100,
    PRIORITY_BALANCED_POWER_ACCURACY = 102,
    PRIORITY_LOW_POWER = 104,
    PRIORITY_NO_POWER = 105,
    PRIORITY_HD_ACCURACY = 200,
    PRIORITY_INDOOR = 300,
    PRIORITY_HIGH_ACCURACY_AND_INDOOR = 400
}
export declare enum NavigationRequestConstants {
    OVERPASS = 1,
    IS_SUPPORT_EX = 2
}
export declare enum ActivityType {
    VEHICLE = 100,
    BIKE = 101,
    FOOT = 102,
    STILL = 103,
    OTHERS = 104,
    WALKING = 107,
    RUNNING = 108
}
export declare enum ConversionType {
    ENTER_ACTIVITY_CONVERSION = 0,
    EXIT_ACTIVITY_CONVERSION = 1
}
export declare enum CoordinateType {
    COORDINATE_TYPE_WGS_84 = 1,
    COORDINATE_TYPE_GCJ_02 = 0
}
export declare enum GeofenceInitConversionType {
    ENTER_INIT_CONVERSION = 1,
    EXIT_INIT_CONVERSION = 2,
    DWELL_INIT_CONVERSION = 4
}
export declare enum GeofenceTriggerType {
    ENTER_GEOFENCE_CONVERSION = 1,
    EXIT_GEOFENCE_CONVERSION = 2,
    DWELL_GEOFENCE_CONVERSION = 4,
    GEOFENCE_NEVER_EXPIRE = -1
}
export declare enum NotificationCategory {
    ALARM = "alarm",
    CALL = "call",
    EMAIL = "email",
    ERROR = "err",
    EVENT = "event",
    MESSAGE = "msg",
    NAVIGATION = "navigation",
    PROGRESS = "progress",
    PROMO = "promo",
    RECOMMENDATION = "recommendation",
    REMINDER = "reminder",
    SERVICE = "service",
    SOCIAL = "social",
    STATUS = "status",
    SYSTEM = "sys",
    TRANSPORT = "transport"
}
export declare enum NotificationImportance {
    DEFAULT = 3,
    HIGH = 4,
    LOW = 2,
    MAX = 5,
    MIN = 1,
    NONE = 0,
    UNSPECIFIED = -100
}
export declare enum RequestType {
    LOCATION_CALLBACK = "locationCallback",
    PENDING_INTENT = "pendingIntent"
}

export declare const HMSLocation: HMSLocationOriginal;