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

import {asyncExec} from './utils';
import {HasPermissionResult} from './CommonTypes';

export function init() {
    return run('init');
}

export function getLastLocation(): Promise<Location> {
    return run('getLastLocation');
}

export function flushLocations(): Promise<void> {
    return run('flushLocations');
}

export function checkLocationSettings(request: LocationSettingsRequest): Promise<LocationSettingsStates> {
    return run('checkLocationSettings', [request]);
}

export function getNavigationContextState(requestType: number): Promise<NavigationResult> {
    return run('getNavigationContextState', [requestType]);
}

export function getLastLocationWithAddress(request: LocationRequest): Promise<HWLocation> {
    return run('getLastLocationWithAddress', [request]);
}

export function getLocationAvailability(): Promise<LocationAvailability> {
    return run('getLocationAvailability');
}

export function setMockLocation(latLng: LatLng): Promise<void> {
    return run('setMockLocation', [latLng]);
}

export function setMockMode(mode: boolean): Promise<void> {
    return run('setMockMode', [mode]);
}

export function requestLocationUpdates(request: LocationRequest): Promise<IdResult> {
    return run('requestLocationUpdates', [request]);
}

export function requestLocationUpdatesEx(request: LocationRequest): Promise<IdResult> {
    return run('requestLocationUpdatesEx', [request]);
}

export function removeLocationUpdates(id: string): Promise<IdResult> {
    return run('removeLocationUpdates', [id]);
}

export function requestPermission(): Promise<LocationPermissionResult> {
    return run('requestPermission');
}

export function hasPermission(): Promise<HasPermissionResult> {
    return run('hasPermission');
}

//
// Helpers
//

function run(funcName: string, args: any[]=[]) {
    return asyncExec('HMSFusedLocation', funcName, args);
}

interface Location {
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

interface HWLocation {
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
}

interface LocationSettingsStates {
    isBlePresent: boolean
    isBleUsable: boolean,
    isGpsPresent: boolean,
    isGpsUsable: boolean,
    isLocationPresent: boolean,
    isLocationUsable: boolean,
    isNetworkLocationPresent: boolean,
    isNetworkLocationUsable: boolean,
}

interface LocationRequest {
    priority: number,
    interval: number,
    numUpdates: number,
    fastestInterval: number,
    expirationTime: number,
    expirationTimeDuration: number,
    smallestDisplacement: number,
    maxWaitTime: number,
    needAddress: boolean,
    language: string,
    countryCode: string,
}

interface LocationAvailability {
    isLocationAvailable: boolean
}

interface LocationSettingsRequest {
    locationRequests: LocationRequest[],
    needBle: boolean,
    alwaysShow: boolean,
}

interface LatLng {
    longitude: number,
    latitude: number
}

interface IdResult {
    id: string
}

interface LocationPermissionResult {
    granted: boolean,
    fineLocation: boolean,
    coarseLocation: boolean,
    backgroundLocation?: boolean
}

interface NavigationResult {
    state: number,
    possibility: number
}

//
// Constants
//
export enum PriorityConstants {
    PRIORITY_BALANCED_POWER_ACCURACY = 102,
    PRIORITY_HIGH_ACCURACY = 100,
    PRIORITY_LOW_POWER = 104,
    PRIORITY_NO_POWER = 105,
}

export enum Events {
    SCANNING_RESULT = "onScanningResult"
}

export enum NavigationRequestConstants {
    OVERPASS = 1,
    IS_SUPPORT_EX = 2,
}
