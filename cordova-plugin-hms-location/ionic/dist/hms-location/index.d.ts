/**
 * Copyright 2020 Huawei Technologies Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { IonicNativePlugin } from '@ionic-native/core';
export declare enum GeofenceRequestConstants {
    ENTER_INIT_CONVERSION = 1,
    EXIT_INIT_CONVERSION = 2,
    DWELL_INIT_CONVERSION = 4,
    COORDINATE_TYPE_WGS_84 = 1,
    COORDINATE_TYPE_GCJ_02 = 0
}
export declare enum GeofenceConstants {
    ENTER_GEOFENCE_CONVERSION = 1,
    EXIT_GEOFENCE_CONVERSION = 2,
    DWELL_GEOFENCE_CONVERSION = 4,
    GEOFENCE_NEVER_EXPIRE = -1
}
export declare enum ErrorCodes {
    GEOFENCE_UNAVAILABLE = 10200,
    GEOFENCE_NUMBER_OVER_LIMIT = 10201,
    GEOFENCE_PENDINGINTENT_OVER_LIMIT = 10202,
    GEOFENCE_INSUFFICIENT_PERMISSION = 10204,
    GEOFENCE_REQUEST_TOO_OFTEN = 10205
}
export declare enum Events {
    GEOFENCE_RESULT = "onGeofenceResult"
}
export declare enum PriorityConstants {
    PRIORITY_BALANCED_POWER_ACCURACY = 102,
    PRIORITY_HIGH_ACCURACY = 100,
    PRIORITY_LOW_POWER = 104,
    PRIORITY_NO_POWER = 105
}
export declare enum Events {
    SCANNING_RESULT = "onScanningResult"
}
export declare enum NavigationRequestConstants {
    OVERPASS = 1,
    IS_SUPPORT_EX = 2
}
export declare enum Activities {
    VEHICLE = 100,
    BIKE = 101,
    FOOT = 102,
    RUNNING = 108,
    STILL = 103,
    TILTING = 105,
    OTHERS = 104,
    WALKING = 107
}
export declare enum ActivityConversions {
    ENTER_ACTIVITY_CONVERSION = 0,
    EXIT_ACTIVITY_CONVERSION = 1
}
export declare enum Events {
    ACTIVITY_CONVERSION_RESULT = "onActivityConversionResult",
    ACTIVITY_IDENTIFICATION_RESULT = "onActivityIdentificationResult"
}
declare type Handler = (data: any) => void;
declare global {
    interface Window {
        hmsEventHandlers: {
            [key: string]: Handler[];
        };
        hmsEventHandler: (eventName: string, data: any) => void;
        registerHMSEvent: (eventName: string, handler: Handler) => void;
        unregisterHMSEvent: (eventName: string, handler: Handler) => void;
        hmsSetConstants: (objName: string, constans: any) => void;
    }
}
export declare class HMSLocationKitOriginal extends IonicNativePlugin {
    init(): Promise<void>;
    disableLogger(): Promise<void>;
    enableLogger(): Promise<void>;
}
export declare class HMSFusedLocationOriginal extends IonicNativePlugin {
    PriorityConstants: typeof PriorityConstants;
    Events: typeof Events;
    NavigationRequestConstants: typeof NavigationRequestConstants;
    init(): Promise<any>;
    getLastLocation(): Promise<Location>;
    flushLocations(): Promise<void>;
    checkLocationSettings(request: LocationSettingsRequest): Promise<LocationSettingsStates>;
    getNavigationContextState(requestType: number): Promise<NavigationResult>;
    getLastLocationWithAddress(request: LocationRequest): Promise<HWLocation>;
    getLocationAvailability(): Promise<LocationAvailability>;
    setMockLocation(latLng: LatLng): Promise<void>;
    setMockMode(mode: boolean): Promise<void>;
    requestLocationUpdates(request: LocationRequest): Promise<IdResult>;
    requestLocationUpdatesEx(request: LocationRequest): Promise<IdResult>;
    removeLocationUpdates(id: string): Promise<IdResult>;
    requestPermission(): Promise<LocationPermissionResult>;
    hasPermission(): Promise<HasPermissionResult>;
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
}
export interface LocationSettingsStates {
    isBlePresent: boolean;
    isBleUsable: boolean;
    isGpsPresent: boolean;
    isGpsUsable: boolean;
    isLocationPresent: boolean;
    isLocationUsable: boolean;
    isNetworkLocationPresent: boolean;
    isNetworkLocationUsable: boolean;
}
export interface LocationRequest {
    id: string;
    priority: number;
    interval: number;
    numUpdates: number;
    fastestInterval: number;
    expirationTime: number;
    expirationTimeDuration: number;
    smallestDisplacement: number;
    maxWaitTime: number;
    needAddress: boolean;
    language: string;
    countryCode: string;
}
export interface LocationAvailability {
    isLocationAvailable: boolean;
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
export interface IdResult {
    id: string;
}
export interface LocationPermissionResult {
    granted: boolean;
    fineLocation: boolean;
    coarseLocation: boolean;
    backgroundLocation?: boolean;
}
export interface HasPermissionResult {
    hasPermission: boolean;
}
export interface RequestCodeResult {
    requestCode: number;
}
export declare class HMSActivityIdentificationOriginal extends IonicNativePlugin {
    Activities: typeof Activities;
    ActivityConversions: typeof ActivityConversions;
    Events: typeof Events;
    init(): Promise<void>;
    createActivityConversionUpdates(activityConversionRequest: ActivityConversionInfo[]): Promise<RequestCodeResult>;
    deleteActivityConversionUpdates(id: number): Promise<void>;
    createActivityIdentificationUpdates(intervalMillis: number): Promise<RequestCodeResult>;
    deleteActivityIdentificationUpdates(id: number): Promise<void>;
    requestPermission(): Promise<ActivityPermissionResult>;
    hasPermission(): Promise<HasPermissionResult>;
}
export interface ActivityConversionInfo {
    conversionType: number;
    activityType: number;
}
export interface ActivityPermissionResult {
    granted: boolean;
    activityRecognition: boolean;
}
export declare class HMSGeofenceOriginal extends IonicNativePlugin {
    GeofenceRequestConstants: typeof GeofenceRequestConstants;
    GeofenceConstants: typeof GeofenceConstants;
    ErrorCodes: typeof ErrorCodes;
    Events: typeof Events;
    createGeofenceList(geofences: Geofence[], initConversions: number, coordinateType: number): Promise<RequestCodeResult>;
    deleteGeofenceList(id: number): Promise<void>;
}
export interface Geofence {
    longitude: number;
    latitude: number;
    radius: number;
    uniqueId: string;
    conversions: number;
    validContinueTime: number;
    dwellDelayTime: number;
    notificationInterval: number;
}
export interface NavigationResult {
    state: number;
    possibility: number;
}
export {};

export declare const HMSLocationKit: HMSLocationKitOriginal;
export declare const HMSFusedLocation: HMSFusedLocationOriginal;
export declare const HMSActivityIdentification: HMSActivityIdentificationOriginal;
export declare const HMSGeofence: HMSGeofenceOriginal;