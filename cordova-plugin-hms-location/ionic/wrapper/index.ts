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

import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

export enum GeofenceRequestConstants {
    ENTER_INIT_CONVERSION = 1,
    EXIT_INIT_CONVERSION = 2,
    DWELL_INIT_CONVERSION = 4,
    COORDINATE_TYPE_WGS_84 = 1,
    COORDINATE_TYPE_GCJ_02 = 0,
}

export enum GeofenceConstants {
    ENTER_GEOFENCE_CONVERSION = 1,
    EXIT_GEOFENCE_CONVERSION = 2,
    DWELL_GEOFENCE_CONVERSION = 4,
    GEOFENCE_NEVER_EXPIRE = -1,
}

export enum ErrorCodes {
    GEOFENCE_UNAVAILABLE = 10200,
    GEOFENCE_NUMBER_OVER_LIMIT = 10201,
    GEOFENCE_PENDINGINTENT_OVER_LIMIT = 10202,
    GEOFENCE_INSUFFICIENT_PERMISSION = 10204,
    GEOFENCE_REQUEST_TOO_OFTEN = 10205,
}

export enum Events {
    GEOFENCE_RESULT = "onGeofenceResult",
}

export enum PriorityConstants {
    PRIORITY_BALANCED_POWER_ACCURACY = 102,
    PRIORITY_HIGH_ACCURACY = 100,
    PRIORITY_LOW_POWER = 104,
    PRIORITY_NO_POWER = 105,
}

export enum Events {
    SCANNING_RESULT = "onScanningResult",
}

export enum NavigationRequestConstants {
    OVERPASS = 1,
    IS_SUPPORT_EX = 2,
}

export enum Activities {
    VEHICLE = 100,
    BIKE = 101,
    FOOT = 102,
    RUNNING = 108,
    STILL = 103,
    TILTING = 105,
    OTHERS = 104,
    WALKING = 107,
}

export enum ActivityConversions {
    ENTER_ACTIVITY_CONVERSION = 0,
    EXIT_ACTIVITY_CONVERSION = 1,
}

export enum Events {
    ACTIVITY_CONVERSION_RESULT = "onActivityConversionResult",
    ACTIVITY_IDENTIFICATION_RESULT = "onActivityIdentificationResult",
}


type Handler = (data: any) => void;
declare global {
    interface Window {
        hmsEventHandlers: {
            [key: string]: Handler[]
        },
        hmsEventHandler: (eventName: string, data: any) => void,
        registerHMSEvent: (eventName: string, handler: Handler) => void
        unregisterHMSEvent: (eventName: string, handler: Handler) => void
        hmsSetConstants: (objName: string, constans: any) => void
    }
}

@Plugin({
    pluginName: 'HMSLocationKit',
    plugin: 'cordova-plugin-hms-location',
    pluginRef: 'HMSLocationKit',
    platforms: ['Android']
})
@Injectable()
export class HMSLocationKit extends IonicNativePlugin {
    @Cordova({otherPromise: true})
    init(): Promise<void> {
        return;
    }
    disableLogger(): Promise<void> {
        return;
    }
    
    enableLogger(): Promise<void> {
        return;
    }
}

@Plugin({
    pluginName: 'HMSFusedLocation',
    plugin: 'cordova-plugin-hms-location',
    pluginRef: 'HMSFusedLocation',
    platforms: ['Android']
})
@Injectable()
export class HMSFusedLocation extends IonicNativePlugin {
    PriorityConstants = PriorityConstants;
    Events = Events;
    NavigationRequestConstants = NavigationRequestConstants;

    @Cordova({otherPromise: true})
    init(): Promise<any> {
        return;
    }

    @Cordova({otherPromise: true})
    getLastLocation(): Promise<Location> {
        return;
    }

    @Cordova({otherPromise: true})
    flushLocations(): Promise<void> {
        return;
    }

    @Cordova({otherPromise: true})
    checkLocationSettings(request: LocationSettingsRequest): Promise<LocationSettingsStates> {
        return;
    }
    
    @Cordova({otherPromise: true})
    getNavigationContextState(requestType: number): Promise<NavigationResult> {
        return;
    }

    @Cordova({otherPromise: true})
    getLastLocationWithAddress(request: LocationRequest): Promise<HWLocation> {
        return;
    }

    @Cordova({otherPromise: true})
    getLocationAvailability(): Promise<LocationAvailability> {
        return;
    }

    @Cordova({otherPromise: true})
    setMockLocation(latLng: LatLng): Promise<void> {
        return;
    }

    @Cordova({otherPromise: true})
    setMockMode(mode: boolean): Promise<void> {
        return;
    }

    // FIXME: observable?
    @Cordova({otherPromise: true})
    requestLocationUpdates(request: LocationRequest): Promise<IdResult> {
        return;
    }

    @Cordova({otherPromise: true})
    requestLocationUpdatesEx(request: LocationRequest): Promise<IdResult> {
        return;
    }

    @Cordova({otherPromise: true})
    removeLocationUpdates(id: string): Promise<IdResult> {
        return;
    }

    @Cordova({otherPromise: true})
    requestPermission(): Promise<LocationPermissionResult> {
        return;
    }

    @Cordova({otherPromise: true})
    hasPermission(): Promise<HasPermissionResult> {
        return;
    }
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
    id: string,
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
    requestCode: number
}

// ActivityIdentification {{{

@Plugin({
    pluginName: 'HMSActivityIdentification',
    plugin: 'cordova-plugin-hms-location',
    pluginRef: 'HMSActivityIdentification',
    platforms: ['Android']
})
@Injectable()
export class HMSActivityIdentification extends IonicNativePlugin {
    Activities = Activities;
    ActivityConversions = ActivityConversions;
    Events = Events;

    @Cordova({otherPromise: true})
    init(): Promise<void> {
        return;
    }

    @Cordova({otherPromise: true})
    createActivityConversionUpdates(activityConversionRequest: ActivityConversionInfo[]): Promise<RequestCodeResult> {
        return;
    }

    @Cordova({otherPromise: true})
    deleteActivityConversionUpdates(id: number): Promise<void> {
        return;
    }

    @Cordova({otherPromise: true})
    createActivityIdentificationUpdates(intervalMillis: number): Promise<RequestCodeResult> {
        return;
    }

    @Cordova({otherPromise: true})
    deleteActivityIdentificationUpdates(id: number): Promise<void> {
        return;
    }

    @Cordova({otherPromise: true})
    requestPermission(): Promise<ActivityPermissionResult> {
        return;
    }

    @Cordova({otherPromise: true})
    hasPermission(): Promise<HasPermissionResult> {
        return;
    }
}

export interface ActivityConversionInfo {
    conversionType: number,
    activityType: number
}

export interface ActivityPermissionResult {
    granted: boolean,
    activityRecognition: boolean
}

// Geofence

@Plugin({
    pluginName: 'HMSGeofence',
    plugin: 'cordova-plugin-hms-location',
    pluginRef: 'HMSGeofence',
    platforms: ['Android']
})
@Injectable()
export class HMSGeofence extends IonicNativePlugin {
    public GeofenceRequestConstants = GeofenceRequestConstants;
    GeofenceConstants = GeofenceConstants;
    ErrorCodes = ErrorCodes;
    Events = Events;

    @Cordova({otherPromise: true})
    createGeofenceList(geofences: Geofence[], initConversions: number, coordinateType: number): Promise<RequestCodeResult> {
        return;
    }

    @Cordova({otherPromise: true})
    deleteGeofenceList(id: number): Promise<void> {
        return;
    }
}

export interface Geofence {
    longitude: number,
    latitude: number,
    radius: number,
    uniqueId: string,
    conversions: number,
    validContinueTime: number,
    dwellDelayTime: number,
    notificationInterval: number,
}

export interface NavigationResult {
    state: number;
    possibility: number;
}