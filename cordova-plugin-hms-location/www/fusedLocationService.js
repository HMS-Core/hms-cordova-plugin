"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FusedLocationServiceImpl = void 0;
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
const utils_1 = require("./utils");
class FusedLocationServiceImpl {
    checkLocationSettings(request) {
        return this.run('checkLocationSettings', [request]);
    }
    flushLocations() {
        return this.run('flushLocations');
    }
    getLastLocation() {
        return this.run('getLastLocation');
    }
    getLastLocationWithAddress(request) {
        return this.run('getLastLocationWithAddress', [request]);
    }
    getLocationAvailability() {
        return this.run('getLocationAvailability');
    }
    getNavigationContextState(requestType) {
        return this.run('getNavigationContextState', [requestType]);
    }
    hasLocationPermission() {
        return this.run('hasLocationPermission');
    }
    removeLocationUpdates(requestCode, type) {
        return this.run('removeLocationUpdates', [requestCode, type]);
    }
    requestLocationUpdates(requestCode, request, callback) {
        if (typeof callback !== "undefined") {
            return this.run('requestLocationUpdates', [requestCode, request, callback.toString()]);
        }
        else {
            return this.run('requestLocationUpdates', [requestCode, request]);
        }
    }
    requestLocationUpdatesEx(requestCode, request) {
        return this.run('requestLocationUpdatesEx', [requestCode, request]);
    }
    requestLocationPermission() {
        return this.run('requestLocationPermission');
    }
    run(funcName, args = []) {
        args.unshift(funcName);
        return utils_1.asyncExec('HMSLocation', "FusedLocationService", args);
    }
    setMockLocation(latLng) {
        return this.run('setMockLocation', [latLng]);
    }
    setMockMode(mode) {
        return this.run('setMockMode', [mode]);
    }
}
exports.FusedLocationServiceImpl = FusedLocationServiceImpl;
//# sourceMappingURL=fusedLocationService.js.map