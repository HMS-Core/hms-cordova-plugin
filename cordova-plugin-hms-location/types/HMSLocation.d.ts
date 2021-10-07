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
import { ActivityConversionResponse, ActivityIdentificationResponse, ActivityIdentificationService, FusedLocationService, GeofenceService, LocationResult } from "./interfaces";
import { Events } from './enums';
export * from './enums';
export * from './interfaces';
export declare function getGeofenceService(): GeofenceService;
export declare function getFusedLocationProviderClient(): FusedLocationService;
export declare function getActivityIdentificationService(): ActivityIdentificationService;
export declare function disableLogger(): Promise<void>;
export declare function enableLogger(): Promise<void>;
export declare function addListener(event: Events, callback: (data: LocationResult | [] | ActivityConversionResponse | ActivityIdentificationResponse) => void): void;
