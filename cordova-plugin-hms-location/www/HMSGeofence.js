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
exports.Events = exports.ErrorCodes = exports.GeofenceConstants = exports.GeofenceRequestConstants = exports.deleteGeofenceList = exports.createGeofenceList = exports.init = void 0;
const utils_1 = require("./utils");
function init() {
    return run('init');
}
exports.init = init;
function createGeofenceList(geofences, initConversions, coordinateType) {
    return run('createGeofenceList', [geofences, initConversions, coordinateType]);
}
exports.createGeofenceList = createGeofenceList;
function deleteGeofenceList(id) {
    return run('deleteGeofenceList', [id]);
}
exports.deleteGeofenceList = deleteGeofenceList;
//
// Helpers
//
function run(funcName, args = []) {
    return utils_1.asyncExec('HMSGeofence', funcName, args);
}
//
// Constants
//
var GeofenceRequestConstants;
(function (GeofenceRequestConstants) {
    GeofenceRequestConstants[GeofenceRequestConstants["ENTER_INIT_CONVERSION"] = 1] = "ENTER_INIT_CONVERSION";
    GeofenceRequestConstants[GeofenceRequestConstants["EXIT_INIT_CONVERSION"] = 2] = "EXIT_INIT_CONVERSION";
    GeofenceRequestConstants[GeofenceRequestConstants["DWELL_INIT_CONVERSION"] = 4] = "DWELL_INIT_CONVERSION";
    GeofenceRequestConstants[GeofenceRequestConstants["COORDINATE_TYPE_WGS_84"] = 1] = "COORDINATE_TYPE_WGS_84";
    GeofenceRequestConstants[GeofenceRequestConstants["COORDINATE_TYPE_GCJ_02"] = 0] = "COORDINATE_TYPE_GCJ_02";
})(GeofenceRequestConstants = exports.GeofenceRequestConstants || (exports.GeofenceRequestConstants = {}));
var GeofenceConstants;
(function (GeofenceConstants) {
    GeofenceConstants[GeofenceConstants["ENTER_GEOFENCE_CONVERSION"] = 1] = "ENTER_GEOFENCE_CONVERSION";
    GeofenceConstants[GeofenceConstants["EXIT_GEOFENCE_CONVERSION"] = 2] = "EXIT_GEOFENCE_CONVERSION";
    GeofenceConstants[GeofenceConstants["DWELL_GEOFENCE_CONVERSION"] = 4] = "DWELL_GEOFENCE_CONVERSION";
    GeofenceConstants[GeofenceConstants["GEOFENCE_NEVER_EXPIRE"] = -1] = "GEOFENCE_NEVER_EXPIRE";
})(GeofenceConstants = exports.GeofenceConstants || (exports.GeofenceConstants = {}));
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["GEOFENCE_UNAVAILABLE"] = 10200] = "GEOFENCE_UNAVAILABLE";
    ErrorCodes[ErrorCodes["GEOFENCE_NUMBER_OVER_LIMIT"] = 10201] = "GEOFENCE_NUMBER_OVER_LIMIT";
    ErrorCodes[ErrorCodes["GEOFENCE_PENDINGINTENT_OVER_LIMIT"] = 10202] = "GEOFENCE_PENDINGINTENT_OVER_LIMIT";
    ErrorCodes[ErrorCodes["GEOFENCE_INSUFFICIENT_PERMISSION"] = 10204] = "GEOFENCE_INSUFFICIENT_PERMISSION";
    ErrorCodes[ErrorCodes["GEOFENCE_REQUEST_TOO_OFTEN"] = 10205] = "GEOFENCE_REQUEST_TOO_OFTEN";
})(ErrorCodes = exports.ErrorCodes || (exports.ErrorCodes = {}));
var Events;
(function (Events) {
    Events["GEOFENCE_RESULT"] = "onGeofenceResult";
})(Events = exports.Events || (exports.Events = {}));
//# sourceMappingURL=HMSGeofence.js.map