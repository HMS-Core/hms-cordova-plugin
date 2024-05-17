/*
    Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.

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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addListener = exports.enableLogger = exports.disableLogger = exports.getCoordinateConversionService = exports.getGeocoderService = exports.getActivityIdentificationService = exports.getFusedLocationProviderClient = exports.getGeofenceService = void 0;

const utils_1 = require("./utils");
const geofenceService_1 = require("./geofenceService");
const fusedLocationService_1 = require("./fusedLocationService");
const activityIdentificationService_1 = require("./activityIdentificationService");
const geocoderService_1 = require("./geocoderService");
const coordinateConversionService_1 = require("./coordinateConversionService");
__exportStar(require("./enums"), exports);
__exportStar(require("./interfaces"), exports);
let geofenceServiceInstance;
let geocoderServiceInstance;
let fusedLocationProviderClientInstance;
let activityIdentificationServiceInstance;
let coordinateConversionServiceInstance;
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
function getGeocoderService(language, country) {
    if (geocoderServiceInstance == null) {
        geocoderServiceInstance = new geocoderService_1.GeocoderServiceImpl(language, country);
    }
    return geocoderServiceInstance;
}
exports.getGeocoderService = getGeocoderService;
function getCoordinateConversionService() {
    if (coordinateConversionServiceInstance == null) {
        coordinateConversionServiceInstance = new coordinateConversionService_1.CoordinateConversionServiceImpl();
    }
    return coordinateConversionServiceInstance;
}
exports.getCoordinateConversionService = getCoordinateConversionService;
function disableLogger() {
    return (0, utils_1.asyncExec)('HMSLocation', 'PluginService', ['disableLogger']);
}
exports.disableLogger = disableLogger;
function enableLogger() {
    return (0, utils_1.asyncExec)('HMSLocation', 'PluginService', ['enableLogger']);
}
exports.enableLogger = enableLogger;
function addListener(event, callback) {
    window.subscribeHMSEvent(event, callback);
}
exports.addListener = addListener;
function initialize() {
    return (0, utils_1.asyncExec)('HMSLocation', 'PluginService', ['initialize']);
}
initialize().then(value => console.log("Plugin is active.")).catch(reason => console.log("Error occurred while initializing plugin."));
//# sourceMappingURL=HMSLocation.js.map