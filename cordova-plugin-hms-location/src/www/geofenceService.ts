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
import { asyncExec } from './utils';
import { Geofence, GeofenceService, Location } from "./interfaces";
import { CoordinateType, GeofenceInitConversionType } from "./enums";

export class GeofenceServiceImpl implements GeofenceService {
    createGeofenceList(requestCode: number, geofences: Geofence[], initConversions: GeofenceInitConversionType, coordinateType: CoordinateType, callback?: (data: Location) => void): Promise<boolean> {
        if (typeof callback !== "undefined") {
            return this.run('createGeofenceList', [requestCode, [geofences, initConversions, coordinateType], callback.toString()]);
        } else {
            return this.run('createGeofenceList', [requestCode, [geofences, initConversions, coordinateType]]);
        }
    }

    deleteGeofenceList(requestCode: number): Promise<boolean> {
        return this.run('deleteGeofenceList', [requestCode]);
    }

    run(funcName: string, args: any[] = []) {
        args.unshift(funcName);
        return asyncExec('HMSLocation', 'GeofenceService', args);
    }
}
