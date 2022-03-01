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
import { FusedLocationService, HWLocation, LatLng, Location, LocationRequest, LocationResult, LocationSettingsRequest, LocationSettingsStates, LogConfigSettings, NavigationResult } from "./interfaces";
import { NavigationRequestConstants, RequestType } from "./enums";
export declare class FusedLocationServiceImpl implements FusedLocationService {
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
    run(funcName: string, args?: any[]): Promise<any>;
    setMockLocation(latLng: LatLng): Promise<void>;
    setMockMode(mode: boolean): Promise<void>;
    setLogConfig(logConfigSettings: LogConfigSettings): Promise<void>;
    getLogConfig(): Promise<LogConfigSettings>;
}
