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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FusedLocationServiceImpl = void 0;

const utils_1 = require("./utils");
class FusedLocationServiceImpl {
    disableBackgroundLocation() {
        return this.run('disableBackgroundLocation');
    }
    enableBackgroundLocation(notificationId, notification) {
        return this.run('enableBackgroundLocation', [notificationId, notification]);
    }
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
    run(funcName, args = []) {
        args.unshift(funcName);
        return (0, utils_1.asyncExec)('HMSLocation', "FusedLocationService", args);
    }
    setMockLocation(latLng) {
        return this.run('setMockLocation', [latLng]);
    }
    setMockMode(mode) {
        return this.run('setMockMode', [mode]);
    }
    setLogConfig(logConfigSettings) {
        return this.run('setLogConfig', [logConfigSettings]);
    }
    getLogConfig() {
        return this.run('getLogConfig');
    }
}
exports.FusedLocationServiceImpl = FusedLocationServiceImpl;
//# sourceMappingURL=fusedLocationService.js.map