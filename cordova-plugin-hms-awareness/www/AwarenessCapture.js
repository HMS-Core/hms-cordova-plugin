/*
    Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

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
exports.querySupportingCapabilities = exports.enableUpdateWindow = exports.getTimeCategoriesForFuture = exports.getTimeCategoriesByUser = exports.getTimeCategoriesByIP = exports.getTimeCategoriesByCountryCode = exports.getTimeCategories = exports.getWeatherByPosition = exports.getWeatherByDevice = exports.getWifiStatus = exports.getDarkModeStatus = exports.getCurrentLocation = exports.getScreenStatus = exports.getLightIntensity = exports.getApplicationStatus = exports.getBeaconStatus = exports.getBluetoothStatus = exports.getBehaviorStatus = exports.getLocation = exports.getHeadsetStatus = void 0;
var interfaces_1 = require("./interfaces");
Object.defineProperty(exports, "BluetoothDevice", { enumerable: true, get: function () { return interfaces_1.BluetoothDevice; } });
const util_1 = require("./util");
let HMSAwarenessClass = 'HMSAwareness';
function getHeadsetStatus() {
    return util_1.asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getHeadsetStatus']);
}
exports.getHeadsetStatus = getHeadsetStatus;
;
function getLocation() {
    return util_1.asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getLocation']);
}
exports.getLocation = getLocation;
;
function getBehaviorStatus() {
    return util_1.asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getBehaviorStatus']);
}
exports.getBehaviorStatus = getBehaviorStatus;
;
function getBluetoothStatus(bluetoothDevice) {
    return util_1.asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getBluetoothStatus', bluetoothDevice]);
}
exports.getBluetoothStatus = getBluetoothStatus;
;
function getBeaconStatus(params) {
    return util_1.asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getBeaconStatus', params]);
}
exports.getBeaconStatus = getBeaconStatus;
;
function getApplicationStatus() {
    return util_1.asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getApplicationStatus']);
}
exports.getApplicationStatus = getApplicationStatus;
;
function getLightIntensity() {
    return util_1.asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getLightIntensity']);
}
exports.getLightIntensity = getLightIntensity;
;
function getScreenStatus() {
    return util_1.asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getScreenStatus']);
}
exports.getScreenStatus = getScreenStatus;
;
function getCurrentLocation() {
    return util_1.asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getCurrentLocation']);
}
exports.getCurrentLocation = getCurrentLocation;
;
function getDarkModeStatus() {
    return util_1.asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getDarkModeStatus']);
}
exports.getDarkModeStatus = getDarkModeStatus;
;
function getWifiStatus() {
    return util_1.asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getWifiStatus']);
}
exports.getWifiStatus = getWifiStatus;
;
function getWeatherByDevice() {
    return util_1.asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getWeatherByDevice']);
}
exports.getWeatherByDevice = getWeatherByDevice;
;
function getWeatherByPosition(params) {
    return util_1.asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getWeatherByPosition', params]);
}
exports.getWeatherByPosition = getWeatherByPosition;
;
function getTimeCategories() {
    return util_1.asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getTimeCategories']);
}
exports.getTimeCategories = getTimeCategories;
;
function getTimeCategoriesByCountryCode(countryCode) {
    return util_1.asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getTimeCategoriesByCountryCode', countryCode]);
}
exports.getTimeCategoriesByCountryCode = getTimeCategoriesByCountryCode;
;
function getTimeCategoriesByIP() {
    return util_1.asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getTimeCategoriesByIP']);
}
exports.getTimeCategoriesByIP = getTimeCategoriesByIP;
;
function getTimeCategoriesByUser(params) {
    return util_1.asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getTimeCategoriesByUser', params]);
}
exports.getTimeCategoriesByUser = getTimeCategoriesByUser;
;
function getTimeCategoriesForFuture(params) {
    return util_1.asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getTimeCategoriesForFuture', params]);
}
exports.getTimeCategoriesForFuture = getTimeCategoriesForFuture;
;
function enableUpdateWindow(params) {
    return util_1.asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['enableUpdateWindow', params]);
}
exports.enableUpdateWindow = enableUpdateWindow;
;
function querySupportingCapabilities() {
    return util_1.asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['querySupportingCapabilities']);
}
exports.querySupportingCapabilities = querySupportingCapabilities;
;
//# sourceMappingURL=AwarenessCapture.js.map