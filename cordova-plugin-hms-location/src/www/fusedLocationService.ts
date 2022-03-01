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
import { asyncExec } from './utils';
import {
    FusedLocationService,
    HWLocation,
    LatLng,
    Location,
    LocationRequest,
    LocationResult,
    LocationSettingsRequest,
    LocationSettingsStates,
    LogConfigSettings,
    NavigationResult
} from "./interfaces";
import { NavigationRequestConstants, RequestType } from "./enums";

export class FusedLocationServiceImpl implements FusedLocationService {

    disableBackgroundLocation(): Promise<void> {
        return this.run('disableBackgroundLocation');
    }

    enableBackgroundLocation(notificationId: number, notification: string): Promise<void> {
        return this.run('enableBackgroundLocation', [notificationId, notification]);
    }

    checkLocationSettings(request: LocationSettingsRequest): Promise<LocationSettingsStates> {
        return this.run('checkLocationSettings', [request]);
    }

    flushLocations(): Promise<void> {
        return this.run('flushLocations');
    }

    getLastLocation(): Promise<Location> {
        return this.run('getLastLocation');
    }

    getLastLocationWithAddress(request: LocationRequest): Promise<HWLocation> {
        return this.run('getLastLocationWithAddress', [request]);
    }

    getLocationAvailability(): Promise<boolean> {
        return this.run('getLocationAvailability');
    }

    getNavigationContextState(requestType: NavigationRequestConstants): Promise<NavigationResult> {
        return this.run('getNavigationContextState', [requestType]);
    }

    removeLocationUpdates(requestCode: number, type: RequestType): Promise<boolean> {
        return this.run('removeLocationUpdates', [requestCode, type]);
    }

    requestLocationUpdates(requestCode: number, request: LocationRequest, callback?: (locationResult: LocationResult) => void): Promise<boolean> {
        if (typeof callback !== "undefined") {
            return this.run('requestLocationUpdates', [requestCode, request, callback.toString()]);
        } else {
            return this.run('requestLocationUpdates', [requestCode, request]);
        }
    }

    requestLocationUpdatesEx(requestCode: number, request: LocationRequest): Promise<boolean> {
        return this.run('requestLocationUpdatesEx', [requestCode, request]);
    }

    run(funcName: string, args: any[] = []) {
        args.unshift(funcName);
        return asyncExec('HMSLocation', "FusedLocationService", args);
    }

    setMockLocation(latLng: LatLng): Promise<void> {
        return this.run('setMockLocation', [latLng]);
    }

    setMockMode(mode: boolean): Promise<void> {
        return this.run('setMockMode', [mode]);
    }

    setLogConfig(logConfigSettings: LogConfigSettings): Promise<void> {
        return this.run('setLogConfig', [logConfigSettings]);
    }

    getLogConfig(): Promise<LogConfigSettings> {
        return this.run('getLogConfig');
    }
}
