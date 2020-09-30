"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationRequestConstants = exports.Events = exports.PriorityConstants = exports.hasPermission = exports.requestPermission = exports.removeLocationUpdates = exports.requestLocationUpdatesEx = exports.requestLocationUpdates = exports.setMockMode = exports.setMockLocation = exports.getLocationAvailability = exports.getLastLocationWithAddress = exports.getNavigationContextState = exports.checkLocationSettings = exports.flushLocations = exports.getLastLocation = exports.init = void 0;
const utils_1 = require("./utils");
function init() {
    return run('init');
}
exports.init = init;
function getLastLocation() {
    return run('getLastLocation');
}
exports.getLastLocation = getLastLocation;
function flushLocations() {
    return run('flushLocations');
}
exports.flushLocations = flushLocations;
function checkLocationSettings(request) {
    return run('checkLocationSettings', [request]);
}
exports.checkLocationSettings = checkLocationSettings;
function getNavigationContextState(requestType) {
    return run('getNavigationContextState', [requestType]);
}
exports.getNavigationContextState = getNavigationContextState;
function getLastLocationWithAddress(request) {
    return run('getLastLocationWithAddress', [request]);
}
exports.getLastLocationWithAddress = getLastLocationWithAddress;
function getLocationAvailability() {
    return run('getLocationAvailability');
}
exports.getLocationAvailability = getLocationAvailability;
function setMockLocation(latLng) {
    return run('setMockLocation', [latLng]);
}
exports.setMockLocation = setMockLocation;
function setMockMode(mode) {
    return run('setMockMode', [mode]);
}
exports.setMockMode = setMockMode;
function requestLocationUpdates(request) {
    return run('requestLocationUpdates', [request]);
}
exports.requestLocationUpdates = requestLocationUpdates;
function requestLocationUpdatesEx(request) {
    return run('requestLocationUpdatesEx', [request]);
}
exports.requestLocationUpdatesEx = requestLocationUpdatesEx;
function removeLocationUpdates(id) {
    return run('removeLocationUpdates', [id]);
}
exports.removeLocationUpdates = removeLocationUpdates;
function requestPermission() {
    return run('requestPermission');
}
exports.requestPermission = requestPermission;
function hasPermission() {
    return run('hasPermission');
}
exports.hasPermission = hasPermission;
//
// Helpers
//
function run(funcName, args = []) {
    return utils_1.asyncExec('HMSFusedLocation', funcName, args);
}
//
// Constants
//
var PriorityConstants;
(function (PriorityConstants) {
    PriorityConstants[PriorityConstants["PRIORITY_BALANCED_POWER_ACCURACY"] = 102] = "PRIORITY_BALANCED_POWER_ACCURACY";
    PriorityConstants[PriorityConstants["PRIORITY_HIGH_ACCURACY"] = 100] = "PRIORITY_HIGH_ACCURACY";
    PriorityConstants[PriorityConstants["PRIORITY_LOW_POWER"] = 104] = "PRIORITY_LOW_POWER";
    PriorityConstants[PriorityConstants["PRIORITY_NO_POWER"] = 105] = "PRIORITY_NO_POWER";
})(PriorityConstants = exports.PriorityConstants || (exports.PriorityConstants = {}));
var Events;
(function (Events) {
    Events["SCANNING_RESULT"] = "onScanningResult";
})(Events = exports.Events || (exports.Events = {}));
var NavigationRequestConstants;
(function (NavigationRequestConstants) {
    NavigationRequestConstants[NavigationRequestConstants["OVERPASS"] = 1] = "OVERPASS";
    NavigationRequestConstants[NavigationRequestConstants["IS_SUPPORT_EX"] = 2] = "IS_SUPPORT_EX";
})(NavigationRequestConstants = exports.NavigationRequestConstants || (exports.NavigationRequestConstants = {}));
//# sourceMappingURL=HMSFusedLocation.js.map