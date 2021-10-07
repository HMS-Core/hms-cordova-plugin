"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addListener = exports.enableLogger = exports.disableLogger = exports.getActivityIdentificationService = exports.getFusedLocationProviderClient = exports.getGeofenceService = void 0;
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
const geofenceService_1 = require("./geofenceService");
const fusedLocationService_1 = require("./fusedLocationService");
const activityIdentificationService_1 = require("./activityIdentificationService");
__exportStar(require("./enums"), exports);
__exportStar(require("./interfaces"), exports);
let geofenceServiceInstance;
let fusedLocationProviderClientInstance;
let activityIdentificationServiceInstance;
function getGeofenceService() {
    if (geofenceServiceInstance == null) {
        geofenceServiceInstance = new geofenceService_1.GeofenceServiceImpl();
    }
    return geofenceServiceInstance;
}
exports.getGeofenceService = getGeofenceService;
function getFusedLocationProviderClient() {
    if (fusedLocationProviderClientInstance == null) {
        fusedLocationProviderClientInstance = new fusedLocationService_1.FusedLocationServiceImpl();
    }
    return fusedLocationProviderClientInstance;
}
exports.getFusedLocationProviderClient = getFusedLocationProviderClient;
function getActivityIdentificationService() {
    if (activityIdentificationServiceInstance == null) {
        activityIdentificationServiceInstance = new activityIdentificationService_1.ActivityIdentificationServiceImpl();
    }
    return activityIdentificationServiceInstance;
}
exports.getActivityIdentificationService = getActivityIdentificationService;
function disableLogger() {
    return utils_1.asyncExec('HMSLocation', 'PluginService', ['disableLogger']);
}
exports.disableLogger = disableLogger;
function enableLogger() {
    return utils_1.asyncExec('HMSLocation', 'PluginService', ['enableLogger']);
}
exports.enableLogger = enableLogger;
function addListener(event, callback) {
    window.subscribeHMSEvent(event, callback);
}
exports.addListener = addListener;
function initialize() {
    return utils_1.asyncExec('HMSLocation', 'PluginService', ['initialize']);
}
initialize().then(value => console.log("Plugin is active.")).catch(reason => console.log("Error occurred while initializing plugin."));
//# sourceMappingURL=HMSLocation.js.map