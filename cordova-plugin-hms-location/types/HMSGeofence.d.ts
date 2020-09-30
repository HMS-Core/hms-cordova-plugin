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
import { RequestCodeResult } from './CommonTypes';
export declare function init(): Promise<any>;
export declare function createGeofenceList(geofences: Geofence[], initConversions: number, coordinateType: number): Promise<RequestCodeResult>;
export declare function deleteGeofenceList(id: number): Promise<void>;
interface Geofence {
    longitude: number;
    latitude: number;
    radius: number;
    uniqueId: string;
    conversions: number;
    validContinueTime: number;
    dwellDelayTime: number;
    notificationInterval: number;
}
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
export {};
