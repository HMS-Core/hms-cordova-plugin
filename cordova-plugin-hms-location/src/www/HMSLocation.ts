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
import {asyncExec} from './utils';
import {
    ActivityConversionResponse,
    ActivityIdentificationResponse,
    ActivityIdentificationService,
    FusedLocationService,
    GeofenceService,
    LocationResult
} from "./interfaces";
import {GeofenceServiceImpl} from "./geofenceService";
import {FusedLocationServiceImpl} from "./fusedLocationService";
import {ActivityIdentificationServiceImpl} from "./activityIdentificationService";
import {Events} from './enums';

export * from './enums'
export * from './interfaces'

let geofenceServiceInstance: GeofenceService;
let fusedLocationProviderClientInstance: FusedLocationService;
let activityIdentificationServiceInstance: ActivityIdentificationService;

export function getGeofenceService(): GeofenceService {
    if (geofenceServiceInstance == null) {
        geofenceServiceInstance = new GeofenceServiceImpl();
    }
    return geofenceServiceInstance;
}

export function getFusedLocationProviderClient(): FusedLocationService {
    if (fusedLocationProviderClientInstance == null) {
        fusedLocationProviderClientInstance = new FusedLocationServiceImpl();
    }
    return fusedLocationProviderClientInstance;
}

export function getActivityIdentificationService(): ActivityIdentificationService {
    if (activityIdentificationServiceInstance == null) {
        activityIdentificationServiceInstance = new ActivityIdentificationServiceImpl();
    }
    return activityIdentificationServiceInstance;
}

export function disableLogger(): Promise<void> {
    return asyncExec('HMSLocation', 'PluginService', ['disableLogger']);
}

export function enableLogger(): Promise<void> {
    return asyncExec('HMSLocation', 'PluginService', ['enableLogger']);
}

export function addListener(event: Events, callback: (data: LocationResult | [] | ActivityConversionResponse | ActivityIdentificationResponse) => void) {
    window.subscribeHMSEvent(event, callback);
}

function initialize() {
    return asyncExec('HMSLocation', 'PluginService', ['initialize']);
}

initialize().then(value => console.log("Plugin is active.")).catch(reason => console.log("Error occurred while initializing plugin."));
