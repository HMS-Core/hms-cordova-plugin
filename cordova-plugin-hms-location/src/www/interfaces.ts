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
import {
    ActivityType,
    ConversionType,
    CoordinateType,
    GeofenceInitConversionType,
    GeofenceTriggerType,
    NavigationRequestConstants,
    NotificationCategory,
    NotificationImportance,
    PriorityConstants,
    RequestType
} from "./enums";

export interface Location {
    latitude: number,
    longitude: number,
    altitude: number,
    speed: number,
    bearing: number,
    accuracy: number,
    time: number,
    fromMockProvider: boolean,
    verticalAccuracyMeters: number,
    bearingAccuracyDegrees: number,
    speedAccuracyMetersPerSecond: number
}

export interface HWLocation {
    latitude: number,
    longitude: number,
    altitude: number,
    speed: number,
    bearing: number,
    accuracy: number,
    provider: string,
    time: number,
    elapsedRealtimeNanos: number,
    countryName: string,
    state: string,
    city: string,
    county: string,
    street: string,
    featureName: string,
    postalCode: string,
    phone: string,
    url: string,
    extraInfo: string,
    verticalAccuracyMeters: number,
    bearingAccuracyDegrees: number,
    speedAccuracyMetersPerSecond: number
}

export interface LocationSettingsStates {
    isBlePresent: boolean
    isBleUsable: boolean,
    isGnssPresent: boolean,
    isGnssUsable: boolean,
    isLocationPresent: boolean,
    isLocationUsable: boolean,
    isNetworkLocationPresent: boolean,
    isNetworkLocationUsable: boolean,
}

export interface LocationRequest {
    priority: PriorityConstants,
    interval?: number,
    numUpdates?: number,
    fastestInterval?: number,
    expirationTime?: number,
    expirationTimeDuration?: number,
    smallestDisplacement?: number,
    maxWaitTime?: number,
    needAddress?: boolean,
    language?: string,
    countryCode?: string,
}

export interface LocationSettingsRequest {
    locationRequests: LocationRequest[],
    needBle: boolean,
    alwaysShow: boolean,
}

export interface LatLng {
    longitude: number,
    latitude: number
}

export interface NavigationResult {
    state: number,
    possibility: number
}

export interface ActivityConversionInfo {
    conversionType: ConversionType,
    activityType: ActivityType
}

export interface Geofence {
    longitude: number,
    latitude: number,
    radius: number,
    uniqueId: string,
    conversions: GeofenceTriggerType,
    validContinueTime: number,
    dwellDelayTime: number,
    notificationInterval: number,
}

export interface Notification {
    contentTitle?: string,
    category: NotificationCategory,
    priority: NotificationImportance,
    channelName: string,
    color?: number,
    colorized?: boolean,
    contentInfo?: string,
    contentText?: string,
    largeIcon?: string,
    onGoing?: boolean,
    smallIcon: string,
    subText?: string,
    sound?: string,
    vibrate?: number[],
    visibility?: number
}

export interface LocationResult {
    lastLocation: Location,
    hwLocations: HWLocation[],
    lastHWLocation: HWLocation,
    locations: Location[]
}

export interface ActivityConversionData {
    activityType: ActivityType,
    conversionType: ConversionType,
    elapsedTimeFromReboot: number
}

export interface ActivityConversionResponse {
    activityConversionDataList: ActivityConversionData[]
}

export interface ActivityIdentificationData {
    identificationActivity: ActivityType,
    possibility: number
}

export interface ActivityIdentificationResponse {
    elapsedTimeFromReboot: number,
    mostActivityIdentification: ActivityConversionInfo,
    time: number,
    activityIdentificationDatas: ActivityIdentificationData[]
}

export interface FusedLocationService {
    checkLocationSettings(request: LocationSettingsRequest): Promise<LocationSettingsStates>;
    flushLocations(): Promise<void>
    getLastLocation(): Promise<Location>;
    getLastLocationWithAddress(request: LocationRequest): Promise<HWLocation>;
    getLocationAvailability(): Promise<boolean>;
    getNavigationContextState(requestType: NavigationRequestConstants): Promise<NavigationResult>;
    hasLocationPermission(): Promise<boolean>;
    removeLocationUpdates(requestCode: number, type: RequestType): Promise<boolean>;
    requestLocationUpdates(requestCode: number, request: LocationRequest, callback?: (locationResult: LocationResult) => void): Promise<boolean>;
    requestLocationUpdatesEx(requestCode: number, request: LocationRequest): Promise<boolean>;
    requestLocationPermission(): Promise<boolean>;
    setMockLocation(latLng: LatLng): Promise<void>;
    setMockMode(mode: boolean): Promise<void>;
}

export interface GeofenceService {
    createGeofenceList(requestCode: number, geofences: Geofence[], initConversions: GeofenceInitConversionType, coordinateType: CoordinateType, callback?: (data: Location) => void): Promise<boolean>;
    deleteGeofenceList(requestCode: number): Promise<boolean>;
}

export interface ActivityIdentificationService {
    createActivityConversionUpdates(requestCode: number, activityConversionRequest: ActivityConversionInfo[], callback?: (data: ActivityConversionResponse) => void): Promise<boolean>;
    createActivityIdentificationUpdates(requestCode: number, intervalMillis: number, callback?: (data: ActivityIdentificationResponse) => void): Promise<boolean>;
    deleteActivityConversionUpdates(requestCode: number): Promise<boolean>;
    deleteActivityIdentificationUpdates(requestCode: number): Promise<boolean>;
    hasActivityRecognitionPermission(): Promise<boolean>;
    requestActivityRecognitionPermission(): Promise<boolean>;
}
