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

import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HMSAwareness = /** @class */ (function (_super) {
    __extends(HMSAwareness, _super);
    function HMSAwareness() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This method enables HMSLogger capability which is used for sending usage analytics of Awareness SDK's methods to improve the service quality.
     * @returns Promise<any>
     */
    HMSAwareness.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    /**
     * This method disables the HMSLogger capability which is used for sending usage analytics of Awareness SDK's methods to improve the service quality.
     * @returns Promise<any>
     */
    HMSAwareness.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSAwareness.pluginName = "HMSAwareness";
    HMSAwareness.plugin = "cordova-plugin-hms-awareness";
    HMSAwareness.pluginRef = "HMSAwareness";
    HMSAwareness.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSAwareness.platforms = ["Android"];
    HMSAwareness.decorators = [
        { type: Injectable }
    ];
    return HMSAwareness;
}(IonicNativePlugin));
export { HMSAwareness };
var AwarenessCapture = /** @class */ (function (_super) {
    __extends(AwarenessCapture, _super);
    function AwarenessCapture() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Obtains the status of an audio device (connected or disconnected).
     * @returns Promise<any>
     */
    AwarenessCapture.prototype.getHeadsetStatus = function () { return cordova(this, "getHeadsetStatus", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains the latitude and longitude of the location.
     * @returns Promise<any>
     */
    AwarenessCapture.prototype.getLocation = function () { return cordova(this, "getLocation", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains user behavior, such as walking, running, cycling, driving, or staying still.
     * @returns Promise<any>
     */
    AwarenessCapture.prototype.getBehaviorStatus = function () { return cordova(this, "getBehaviorStatus", { "otherPromise": true }, arguments); };
    ;
    /**
     * @param  {BluetoothDevice} bluetoothDevice Indicates bluetooth device.
     * Obtain the status of the phone, for example, whether Bluetooth is connected or not.
     * @returns Promise<any>
     */
    AwarenessCapture.prototype.getBluetoothStatus = function (blueoothDevice) { return cordova(this, "getBluetoothStatus", { "otherPromise": true }, arguments); };
    ;
    /**
     * Indicates whether the device has approached, connected to, or disconnected from a registered beacon.
     * @param  {BeaconStatusFilter} beaconStatusRequest Beacon Status.
     * @returns Promise<any>
     */
    AwarenessCapture.prototype.getBeaconStatus = function (beaconStatusRequest) { return cordova(this, "getBeaconStatus", { "otherPromise": true }, arguments); };
    ;
    /**
     * The phone status awareness capability is supported, including the awareness of the app status.
     * @returns Promise<any>
     */
    AwarenessCapture.prototype.getApplicationStatus = function () { return cordova(this, "getApplicationStatus", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains the illuminance of the environment where the device is located. The unit is lux. The illuminance is the intensity received by the light sensor of the device. When the light sensor is blocked or illuminated by strong light, the obtained illuminance changes accordingly.
     * @returns Promise<any>
     */
    AwarenessCapture.prototype.getLightIntensity = function () { return cordova(this, "getLightIntensity", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtain the status of the phone, for example, whether the screen is on or off.
     * @returns Promise<any>
     */
    AwarenessCapture.prototype.getScreenStatus = function () { return cordova(this, "getScreenStatus", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains the latitude and longitude of the current location.
     * @returns Promise<any>
     */
    AwarenessCapture.prototype.getCurrentLocation = function () { return cordova(this, "getCurrentLocation", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtain the status of the phone, for example, whether the system is in dark mode.
     * @returns Promise<any>
     */
    AwarenessCapture.prototype.getDarkModeStatus = function () { return cordova(this, "getDarkModeStatus", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtain the status of the phone, for example, whether the app is started or closed, whether Wi-Fi is connected or not.
     * @returns Promise<any>
     */
    AwarenessCapture.prototype.getWifiStatus = function () { return cordova(this, "getWifiStatus", { "otherPromise": true }, arguments); };
    ;
    /**
     * Queries the weather information of the device location or a specified location. Weather of the current day (24 hours) and the next seven days (including the current day) can be queried.
     * @returns Promise<any>
     */
    AwarenessCapture.prototype.getWeatherByDevice = function () { return cordova(this, "getWeatherByDevice", { "otherPromise": true }, arguments); };
    ;
    /**
     * Queries the weather information of the device location or a specified location. Weather of the current day (24 hours) and the next seven days (including the current day) can be queried.
     * @param  {WeatherPosition} weatherByPositionRequest Weather by Position.
     * @returns Promise<any>
     */
    AwarenessCapture.prototype.getWeatherByPosition = function (weatherByPositionRequest) { return cordova(this, "getWeatherByPosition", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night.
     * @returns Promise<any>
     */
    AwarenessCapture.prototype.getTimeCategories = function () { return cordova(this, "getTimeCategories", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night.
     * @param  {string} countryCode Time Categories By Contrycode request.
     * @returns Promise<any>
     */
    AwarenessCapture.prototype.getTimeCategoriesByCountryCode = function (countryCode) { return cordova(this, "getTimeCategoriesByCountryCode", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night.
     * @returns Promise<any>
     */
    AwarenessCapture.prototype.getTimeCategoriesByIP = function () { return cordova(this, "getTimeCategoriesByIP", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night.
     * @param  {TimeCategoriesByUserRequest} timeCategoriesByUserRequest Time Categories By User request.
     * @returns Promise<any>
     */
    AwarenessCapture.prototype.getTimeCategoriesByUser = function (timeCategoriesByUserRequest) { return cordova(this, "getTimeCategoriesByUser", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night.
     * @param  {number} futureTimestamp Time Categories By Future request.
     * @returns Promise<any>
     */
    AwarenessCapture.prototype.getTimeCategoriesForFuture = function (futureTimestamp) { return cordova(this, "getTimeCategoriesForFuture", { "otherPromise": true }, arguments); };
    ;
    /**
     * It enables the update window.
     * @param  {boolean} isEnable boolean enableUpdateWindow.
     * @returns Promise<any>
     */
    AwarenessCapture.prototype.enableUpdateWindow = function (isEnable) { return cordova(this, "enableUpdateWindow", { "otherPromise": true }, arguments); };
    ;
    /**
 * It enables the update window.
 * @returns Promise<any>
 */
    AwarenessCapture.prototype.querySupportingCapabilities = function () { return cordova(this, "querySupportingCapabilities", { "otherPromise": true }, arguments); };
    ;
    AwarenessCapture.pluginName = "HMSAwareness";
    AwarenessCapture.plugin = "cordova-plugin-hms-awareness";
    AwarenessCapture.pluginRef = "AwarenessCapture";
    AwarenessCapture.platforms = ["Android"];
    AwarenessCapture.decorators = [
        { type: Injectable }
    ];
    return AwarenessCapture;
}(IonicNativePlugin));
export { AwarenessCapture };
//Enum value
export var HeadsetStatus;
(function (HeadsetStatus) {
    HeadsetStatus[HeadsetStatus["CONNECTED"] = 1] = "CONNECTED";
    HeadsetStatus[HeadsetStatus["DISCONNECTED"] = 0] = "DISCONNECTED";
})(HeadsetStatus || (HeadsetStatus = {}));
export var WifiStatus;
(function (WifiStatus) {
    WifiStatus[WifiStatus["CONNECTED"] = 1] = "CONNECTED";
    WifiStatus[WifiStatus["DISCONNECTED"] = 4] = "DISCONNECTED";
    WifiStatus[WifiStatus["ENABLED"] = 3] = "ENABLED";
    WifiStatus[WifiStatus["DISABLED"] = -1] = "DISABLED";
})(WifiStatus || (WifiStatus = {}));
export var BluetoothStatus;
(function (BluetoothStatus) {
    BluetoothStatus[BluetoothStatus["CONNECTED"] = 1] = "CONNECTED";
    BluetoothStatus[BluetoothStatus["DISCONNECTED"] = 0] = "DISCONNECTED";
})(BluetoothStatus || (BluetoothStatus = {}));
export var ScreenStatus;
(function (ScreenStatus) {
    ScreenStatus[ScreenStatus["SCREENON"] = 1] = "SCREENON";
    ScreenStatus[ScreenStatus["SCREENOFF"] = 0] = "SCREENOFF";
    ScreenStatus[ScreenStatus["UNLOCK"] = 2] = "UNLOCK";
})(ScreenStatus || (ScreenStatus = {}));
export var BehaviorBarrierConstant;
(function (BehaviorBarrierConstant) {
    BehaviorBarrierConstant[BehaviorBarrierConstant["BEHAVIOR_IN_VEHICLE"] = 0] = "BEHAVIOR_IN_VEHICLE";
    BehaviorBarrierConstant[BehaviorBarrierConstant["BEHAVIOR_ON_BICYCLE"] = 1] = "BEHAVIOR_ON_BICYCLE";
    BehaviorBarrierConstant[BehaviorBarrierConstant["BEHAVIOR_ON_FOOT"] = 2] = "BEHAVIOR_ON_FOOT";
    BehaviorBarrierConstant[BehaviorBarrierConstant["BEHAVIOR_STILL"] = 3] = "BEHAVIOR_STILL";
    BehaviorBarrierConstant[BehaviorBarrierConstant["BEHAVIOR_WALKING"] = 7] = "BEHAVIOR_WALKING";
    BehaviorBarrierConstant[BehaviorBarrierConstant["BEHAVIOR_RUNNING"] = 8] = "BEHAVIOR_RUNNING";
})(BehaviorBarrierConstant || (BehaviorBarrierConstant = {}));
export var BluetoothDevice;
(function (BluetoothDevice) {
    BluetoothDevice[BluetoothDevice["DEVICE_CAR"] = 0] = "DEVICE_CAR";
})(BluetoothDevice || (BluetoothDevice = {}));
export var TimeBarrierConstants;
(function (TimeBarrierConstants) {
    TimeBarrierConstants[TimeBarrierConstants["SUNRISE_CODE"] = 0] = "SUNRISE_CODE";
    TimeBarrierConstants[TimeBarrierConstants["SUNSET_CODE"] = 1] = "SUNSET_CODE";
    TimeBarrierConstants[TimeBarrierConstants["TIME_CATEGORY_MORNING"] = 1] = "TIME_CATEGORY_MORNING";
    TimeBarrierConstants[TimeBarrierConstants["TIME_CATEGORY_AFTERNOON"] = 2] = "TIME_CATEGORY_AFTERNOON";
    TimeBarrierConstants[TimeBarrierConstants["TIME_CATEGORY_EVENING"] = 3] = "TIME_CATEGORY_EVENING";
    TimeBarrierConstants[TimeBarrierConstants["TIME_CATEGORY_NIGHT"] = 4] = "TIME_CATEGORY_NIGHT";
    TimeBarrierConstants[TimeBarrierConstants["TIME_CATEGORY_HOLIDAY"] = 5] = "TIME_CATEGORY_HOLIDAY";
    TimeBarrierConstants[TimeBarrierConstants["TIME_CATEGORY_WEEKDAY"] = 6] = "TIME_CATEGORY_WEEKDAY";
    TimeBarrierConstants[TimeBarrierConstants["TIME_CATEGORY_WEEKEND"] = 7] = "TIME_CATEGORY_WEEKEND";
    TimeBarrierConstants[TimeBarrierConstants["TIME_CATEGORY_NOT_HOLIDAY"] = 8] = "TIME_CATEGORY_NOT_HOLIDAY";
    TimeBarrierConstants[TimeBarrierConstants["SUNDAY_CODE"] = 1] = "SUNDAY_CODE";
    TimeBarrierConstants[TimeBarrierConstants["MONDAY_CODE"] = 2] = "MONDAY_CODE";
    TimeBarrierConstants[TimeBarrierConstants["TUESDAY_CODE"] = 3] = "TUESDAY_CODE";
    TimeBarrierConstants[TimeBarrierConstants["WEDNESDAY_CODE"] = 4] = "WEDNESDAY_CODE";
    TimeBarrierConstants[TimeBarrierConstants["THURSDAY_CODE"] = 5] = "THURSDAY_CODE";
    TimeBarrierConstants[TimeBarrierConstants["FRIDAY_CODE"] = 6] = "FRIDAY_CODE";
    TimeBarrierConstants[TimeBarrierConstants["SATURDAY_CODE"] = 7] = "SATURDAY_CODE";
})(TimeBarrierConstants || (TimeBarrierConstants = {}));
var AwarenessBarrier = /** @class */ (function () {
    function AwarenessBarrier(cordovaBarrier) {
        this.cordovaBarrier = cordovaBarrier;
    }
    AwarenessBarrier.prototype.subscribe = function (callback) {
        this.cordovaBarrier.subscribe(callback);
        return this;
    };
    AwarenessBarrier.prototype.catch = function (callback) {
        this.cordovaBarrier.catch(callback);
        return this;
    };
    AwarenessBarrier.prototype.run = function (barrierLabel) {
        this.cordovaBarrier.run(barrierLabel);
    };
    AwarenessBarrier.prototype.runInBackground = function (barrierLabel) {
        return this.cordovaBarrier.runInBackground(barrierLabel);
    };
    return AwarenessBarrier;
}());
export { AwarenessBarrier };
var BarrierManager = /** @class */ (function () {
    function BarrierManager() {
    }
    BarrierManager.deleteAllBarriers = function (success, error) {
        window.AwarenessBarrier.deleteAllBarriers(success, error);
    };
    BarrierManager.deleteBarrierWithLabels = function (success, error, params) {
        window.AwarenessBarrier.deleteBarrierWithLabels(success, error, params);
    };
    BarrierManager.unRegisterReceiver = function (success, error) {
        window.AwarenessBarrier.unRegisterReceiver(success, error);
    };
    BarrierManager.queryBarriersWithBarrierKeys = function (success, error, params) {
        window.AwarenessBarrier.queryBarriersWithBarrierKeys(success, error, params);
    };
    BarrierManager.queryBarriersWithAllBarriers = function (success, error) {
        window.AwarenessBarrier.queryBarriersWithAllBarriers(success, error);
    };
    BarrierManager.stopBackgroundService = function () {
        return window.AwarenessBarrier.stopBackgroundService();
    };
    BarrierManager.setBackgroundFile = function (fileName) {
        return window.AwarenessBarrier.setBackgroundFile(fileName);
    };
    return BarrierManager;
}());
export { BarrierManager };
var HeadsetBarrier = /** @class */ (function (_super) {
    __extends(HeadsetBarrier, _super);
    function HeadsetBarrier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeadsetBarrier.keeping = function (headsetStatus) {
        var barrier = new window.AwarenessBarrier.HeadsetBarrier(HeadsetBarrier.name, "keeping", [headsetStatus]);
        return new AwarenessBarrier(barrier);
    };
    HeadsetBarrier.connecting = function () {
        var barrier = new window.AwarenessBarrier.HeadsetBarrier(HeadsetBarrier.name, "connecting", []);
        return new AwarenessBarrier(barrier);
    };
    HeadsetBarrier.disconnecting = function () {
        var barrier = new window.AwarenessBarrier.HeadsetBarrier(HeadsetBarrier.name, "disconnecting", []);
        return new AwarenessBarrier(barrier);
    };
    return HeadsetBarrier;
}(AwarenessBarrier));
export { HeadsetBarrier };
var AmbientLightBarrier = /** @class */ (function (_super) {
    __extends(AmbientLightBarrier, _super);
    function AmbientLightBarrier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AmbientLightBarrier.above = function (v) {
        var capsule = new window.AwarenessBarrier.AmbientLightBarrier(AmbientLightBarrier.name, "above", [v]);
        return new AwarenessBarrier(capsule);
    };
    AmbientLightBarrier.below = function (v) {
        var capsule = new window.AwarenessBarrier.AmbientLightBarrier(AmbientLightBarrier.name, "below", [v]);
        return new AwarenessBarrier(capsule);
    };
    AmbientLightBarrier.range = function (v1, v2) {
        var capsule = new window.AwarenessBarrier.AmbientLightBarrier(AmbientLightBarrier.name, "range", [v1, v2]);
        return new AwarenessBarrier(capsule);
    };
    return AmbientLightBarrier;
}(AwarenessBarrier));
export { AmbientLightBarrier };
var WifiBarrier = /** @class */ (function (_super) {
    __extends(WifiBarrier, _super);
    function WifiBarrier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WifiBarrier.connecting = function (s1, s2) {
        var capsule = new window.AwarenessBarrier.WifiBarrier(WifiBarrier.name, "connecting", [s1, s2]);
        return new AwarenessBarrier(capsule);
    };
    WifiBarrier.disabling = function () {
        var capsule = new window.AwarenessBarrier.WifiBarrier(WifiBarrier.name, "disabling", []);
        return new AwarenessBarrier(capsule);
    };
    WifiBarrier.disconnecting = function (s1, s2) {
        var arr = [];
        if (s1 != null)
            arr = [s1, s2];
        var capsule = new window.AwarenessBarrier.WifiBarrier(WifiBarrier.name, "disconnecting", arr);
        return new AwarenessBarrier(capsule);
    };
    WifiBarrier.enabling = function () {
        var capsule = new window.AwarenessBarrier.WifiBarrier(WifiBarrier.name, "enabling", []);
        return new AwarenessBarrier(capsule);
    };
    WifiBarrier.keeping = function (i, s1, s2) {
        var arr = [i];
        if (s1 != null) {
            arr.push(s1);
            arr.push(s2);
        }
        var capsule = new window.AwarenessBarrier.WifiBarrier(WifiBarrier.name, "keeping", arr);
        return new AwarenessBarrier(capsule);
    };
    return WifiBarrier;
}(AwarenessBarrier));
export { WifiBarrier };
var BluetoothBarrier = /** @class */ (function (_super) {
    __extends(BluetoothBarrier, _super);
    function BluetoothBarrier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BluetoothBarrier.connecting = function (i) {
        var capsule = new window.AwarenessBarrier.BluetoothBarrier(BluetoothBarrier.name, "connecting", [i]);
        return new AwarenessBarrier(capsule);
    };
    BluetoothBarrier.disconnecting = function (i) {
        var capsule = new window.AwarenessBarrier.BluetoothBarrier(BluetoothBarrier.name, "disconnecting", [i]);
        return new AwarenessBarrier(capsule);
    };
    BluetoothBarrier.keep = function (i, i1) {
        var capsule = new window.AwarenessBarrier.BluetoothBarrier(BluetoothBarrier.name, "keep", [i, i1]);
        return new AwarenessBarrier(capsule);
    };
    return BluetoothBarrier;
}(AwarenessBarrier));
export { BluetoothBarrier };
var BehaviorBarrier = /** @class */ (function (_super) {
    __extends(BehaviorBarrier, _super);
    function BehaviorBarrier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BehaviorBarrier.beginning = function () {
        var ints = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ints[_i] = arguments[_i];
        }
        var capsule = new window.AwarenessBarrier.BehaviorBarrier(BehaviorBarrier.name, "beginning", [ints]);
        return new AwarenessBarrier(capsule);
    };
    BehaviorBarrier.ending = function () {
        var ints = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ints[_i] = arguments[_i];
        }
        var capsule = new window.AwarenessBarrier.BehaviorBarrier(BehaviorBarrier.name, "ending", [ints]);
        return new AwarenessBarrier(capsule);
    };
    BehaviorBarrier.keeping = function () {
        var ints = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ints[_i] = arguments[_i];
        }
        var capsule = new window.AwarenessBarrier.BehaviorBarrier(BehaviorBarrier.name, "keeping", [ints]);
        return new AwarenessBarrier(capsule);
    };
    return BehaviorBarrier;
}(AwarenessBarrier));
export { BehaviorBarrier };
var LocationBarrier = /** @class */ (function (_super) {
    __extends(LocationBarrier, _super);
    function LocationBarrier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocationBarrier.enter = function (v, v1, v2) {
        var capsule = new window.AwarenessBarrier.LocationBarrier(LocationBarrier.name, "enter", [v, v1, v2]);
        return new AwarenessBarrier(capsule);
    };
    LocationBarrier.exit = function (v, v1, v2) {
        var capsule = new window.AwarenessBarrier.LocationBarrier(LocationBarrier.name, "exit", [v, v1, v2]);
        return new AwarenessBarrier(capsule);
    };
    LocationBarrier.stay = function (v, v1, v2, l) {
        var capsule = new window.AwarenessBarrier.LocationBarrier(LocationBarrier.name, "stay", [v, v1, v2, l]);
        return new AwarenessBarrier(capsule);
    };
    return LocationBarrier;
}(AwarenessBarrier));
export { LocationBarrier };
var ScreenBarrier = /** @class */ (function (_super) {
    __extends(ScreenBarrier, _super);
    function ScreenBarrier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScreenBarrier.screenOn = function () {
        var capsule = new window.AwarenessBarrier.ScreenBarrier(ScreenBarrier.name, "screenOn", []);
        return new AwarenessBarrier(capsule);
    };
    ScreenBarrier.screenOff = function () {
        var capsule = new window.AwarenessBarrier.ScreenBarrier(ScreenBarrier.name, "screenOff", []);
        return new AwarenessBarrier(capsule);
    };
    ScreenBarrier.screenUnlock = function () {
        var capsule = new window.AwarenessBarrier.ScreenBarrier(ScreenBarrier.name, "screenUnlock", []);
        return new AwarenessBarrier(capsule);
    };
    ScreenBarrier.keeping = function (i) {
        var capsule = new window.AwarenessBarrier.ScreenBarrier(ScreenBarrier.name, "keeping", [i]);
        return new AwarenessBarrier(capsule);
    };
    return ScreenBarrier;
}(AwarenessBarrier));
export { ScreenBarrier };
var TimeBarrier = /** @class */ (function (_super) {
    __extends(TimeBarrier, _super);
    function TimeBarrier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeBarrier.duringPeriodOfDay = function (timeZone, l, l1) {
        var capsule = new window.AwarenessBarrier.TimeBarrier(TimeBarrier.name, "duringPeriodOfDay", [timeZone, l, l1]);
        return new AwarenessBarrier(capsule);
    };
    TimeBarrier.duringPeriodOfWeek = function (i, timeZone, l, l1) {
        var capsule = new window.AwarenessBarrier.TimeBarrier(TimeBarrier.name, "duringPeriodOfWeek", [i, timeZone, l, l1]);
        return new AwarenessBarrier(capsule);
    };
    TimeBarrier.duringTimePeriod = function (l, l1) {
        var capsule = new window.AwarenessBarrier.TimeBarrier(TimeBarrier.name, "duringTimePeriod", [l, l1]);
        return new AwarenessBarrier(capsule);
    };
    TimeBarrier.inSunriseOrSunsetPeriod = function (i, l, l1) {
        var capsule = new window.AwarenessBarrier.TimeBarrier(TimeBarrier.name, "inSunriseOrSunsetPeriod", [i, l, l1]);
        return new AwarenessBarrier(capsule);
    };
    TimeBarrier.inTimeCategory = function (i) {
        var capsule = new window.AwarenessBarrier.TimeBarrier(TimeBarrier.name, "inTimeCategory", [i]);
        return new AwarenessBarrier(capsule);
    };
    return TimeBarrier;
}(AwarenessBarrier));
export { TimeBarrier };
var BeaconBarrier = /** @class */ (function (_super) {
    __extends(BeaconBarrier, _super);
    function BeaconBarrier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BeaconBarrier.discover = function (namespace, type, content) {
        var capsule = new window.AwarenessBarrier.BeaconBarrier(BeaconBarrier.name, "discover", [namespace, type, content]);
        return new AwarenessBarrier(capsule);
    };
    BeaconBarrier.keep = function (namespace, type, content) {
        var capsule = new window.AwarenessBarrier.BeaconBarrier(BeaconBarrier.name, "keep", [namespace, type, content]);
        return new AwarenessBarrier(capsule);
    };
    BeaconBarrier.missed = function (namespace, type, content) {
        var capsule = new window.AwarenessBarrier.BeaconBarrier(BeaconBarrier.name, "missed", [namespace, type, content]);
        return new AwarenessBarrier(capsule);
    };
    return BeaconBarrier;
}(AwarenessBarrier));
export { BeaconBarrier };
var CombinationBarrier = /** @class */ (function (_super) {
    __extends(CombinationBarrier, _super);
    function CombinationBarrier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CombinationBarrier.or = function () {
        var awareness = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            awareness[_i] = arguments[_i];
        }
        var barrier = new window.CombinationBarrier("or", awareness);
        barrier.currentBarriers = awareness;
        barrier.combMethod = "or";
        return new AwarenessBarrier(barrier);
    };
    CombinationBarrier.and = function () {
        var awareness = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            awareness[_i] = arguments[_i];
        }
        var barrier = new window.CombinationBarrier("and", awareness);
        barrier.currentBarriers = awareness;
        barrier.combMethod = "and";
        return new AwarenessBarrier(barrier);
    };
    CombinationBarrier.not = function (awareness) {
        var barrier = new window.CombinationBarrier("not", [awareness]);
        barrier.currentBarriers = [awareness];
        barrier.combMethod = "not";
        return new AwarenessBarrier(barrier);
    };
    return CombinationBarrier;
}(AwarenessBarrier));
export { CombinationBarrier };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7O0FBRUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWN0QyxnQ0FBaUI7Ozs7SUFHL0M7OztPQUdHO0lBQ0gsbUNBQVk7SUFLWjs7O09BR0c7SUFDSCxvQ0FBYTs7Ozs7OztnQkFqQmhCLFVBQVU7O3VCQTlCWDtFQStCa0MsaUJBQWlCO1NBQXRDLFlBQVk7O0lBNEJhLG9DQUFpQjs7OztJQUduRDs7O09BR0c7SUFDSCwyQ0FBZ0I7SUFFZixDQUFDO0lBRUY7OztPQUdHO0lBQ0gsc0NBQVc7SUFFVixDQUFDO0lBRUY7OztPQUdHO0lBQ0gsNENBQWlCO0lBRWhCLENBQUM7SUFFRjs7OztPQUlHO0lBQ0gsNkNBQWtCLGFBQUMsY0FBK0I7SUFFakQsQ0FBQztJQUVGOzs7O09BSUc7SUFDSCwwQ0FBZSxhQUFDLG1CQUF1QztJQUV0RCxDQUFDO0lBRUY7OztPQUdHO0lBQ0gsK0NBQW9CO0lBRW5CLENBQUM7SUFFRjs7O09BR0c7SUFDSCw0Q0FBaUI7SUFFaEIsQ0FBQztJQUVGOzs7T0FHRztJQUNILDBDQUFlO0lBRWQsQ0FBQztJQUVGOzs7T0FHRztJQUNILDZDQUFrQjtJQUVqQixDQUFDO0lBRUY7OztPQUdHO0lBQ0gsNENBQWlCO0lBRWhCLENBQUM7SUFFRjs7O09BR0c7SUFDSCx3Q0FBYTtJQUVaLENBQUM7SUFFRjs7O09BR0c7SUFDSCw2Q0FBa0I7SUFFakIsQ0FBQztJQUVGOzs7O09BSUc7SUFDSCwrQ0FBb0IsYUFBQyx3QkFBeUM7SUFFN0QsQ0FBQztJQUdGOzs7T0FHRztJQUNILDRDQUFpQjtJQUVoQixDQUFDO0lB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LElBQVUsTUFBTyxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDekUsT0FBTyxDQUFDLGVBQWUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDOzZCQXRzQkw7RUFrckJ3QyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgQ29weXJpZ2h0IDIwMjAtMjAyNC4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuXHJcbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXHJcbiAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuXHJcbiAgICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG4vKipcclxuICogQG5hbWUgSE1TQXdhcmVuZXNzXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDb3Jkb3ZhIEF3YXJlbmVzcyBQbHVnaW4gZW5hYmxlcyBjb21tdW5pY2F0aW9uIGJldHdlZW4gdGhlIEhNUyBDb3JlIEF3YXJlbmVzcyBTREsgYW5kIENvcmRvdmEgcGxhdGZvcm0uIFRoaXMgcGx1Z2luIGRlbW9uc3RyYXRlcyB3aWRlLXJhbmdpbmcgZnVuY3Rpb25hbGl0eSBvZiB0aGUgSE1TIENvcmUgQXdhcmVuZXNzIFNESy5cclxuICovXHJcbkBQbHVnaW4oe1xyXG4gICAgcGx1Z2luTmFtZTogJ0hNU0F3YXJlbmVzcycsXHJcbiAgICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYXdhcmVuZXNzJyxcclxuICAgIHBsdWdpblJlZjogJ0hNU0F3YXJlbmVzcycsXHJcbiAgICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpbicsXHJcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0F3YXJlbmVzcyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBlbmFibGVzIEhNU0xvZ2dlciBjYXBhYmlsaXR5IHdoaWNoIGlzIHVzZWQgZm9yIHNlbmRpbmcgdXNhZ2UgYW5hbHl0aWNzIG9mIEF3YXJlbmVzcyBTREsncyBtZXRob2RzIHRvIGltcHJvdmUgdGhlIHNlcnZpY2UgcXVhbGl0eS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgZGlzYWJsZXMgdGhlIEhNU0xvZ2dlciBjYXBhYmlsaXR5IHdoaWNoIGlzIHVzZWQgZm9yIHNlbmRpbmcgdXNhZ2UgYW5hbHl0aWNzIG9mIEF3YXJlbmVzcyBTREsncyBtZXRob2RzIHRvIGltcHJvdmUgdGhlIHNlcnZpY2UgcXVhbGl0eS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBkaXNhYmxlTG9nZ2VyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6ICdITVNBd2FyZW5lc3MnLFxyXG4gICAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWF3YXJlbmVzcycsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gICAgcGx1Z2luUmVmOiAnQXdhcmVuZXNzQ2FwdHVyZScsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF3YXJlbmVzc0NhcHR1cmUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyB0aGUgc3RhdHVzIG9mIGFuIGF1ZGlvIGRldmljZSAoY29ubmVjdGVkIG9yIGRpc2Nvbm5lY3RlZCkuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXHJcbiAgICAgKi9cclxuICAgIGdldEhlYWRzZXRTdGF0dXMoKTogUHJvbWlzZTxIZWFkc2V0U3RhdHVzUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyB0aGUgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBvZiB0aGUgbG9jYXRpb24uXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXHJcbiAgICAgKi9cclxuICAgIGdldExvY2F0aW9uKCk6IFByb21pc2U8TG9jYXRpb25SZXNwb25zZT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRhaW5zIHVzZXIgYmVoYXZpb3IsIHN1Y2ggYXMgd2Fsa2luZywgcnVubmluZywgY3ljbGluZywgZHJpdmluZywgb3Igc3RheWluZyBzdGlsbC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcclxuICAgICAqL1xyXG4gICAgZ2V0QmVoYXZpb3JTdGF0dXMoKTogUHJvbWlzZTxCZWhhdmlvclJlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSAge0JsdWV0b290aERldmljZX0gYmx1ZXRvb3RoRGV2aWNlIEluZGljYXRlcyBibHVldG9vdGggZGV2aWNlLlxyXG4gICAgICogT2J0YWluIHRoZSBzdGF0dXMgb2YgdGhlIHBob25lLCBmb3IgZXhhbXBsZSwgd2hldGhlciBCbHVldG9vdGggaXMgY29ubmVjdGVkIG9yIG5vdC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcclxuICAgICAqL1xyXG4gICAgZ2V0Qmx1ZXRvb3RoU3RhdHVzKGJsdWVvb3RoRGV2aWNlOiBCbHVldG9vdGhEZXZpY2UpOiBQcm9taXNlPEJsdWV0b290aFN0YXR1c1Jlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBkZXZpY2UgaGFzIGFwcHJvYWNoZWQsIGNvbm5lY3RlZCB0bywgb3IgZGlzY29ubmVjdGVkIGZyb20gYSByZWdpc3RlcmVkIGJlYWNvbi5cclxuICAgICAqIEBwYXJhbSAge0JlYWNvblN0YXR1c0ZpbHRlcn0gYmVhY29uU3RhdHVzUmVxdWVzdCBCZWFjb24gU3RhdHVzLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIGdldEJlYWNvblN0YXR1cyhiZWFjb25TdGF0dXNSZXF1ZXN0OiBCZWFjb25TdGF0dXNGaWx0ZXIpOiBQcm9taXNlPEJlYWNvblN0YXR1c1Jlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwaG9uZSBzdGF0dXMgYXdhcmVuZXNzIGNhcGFiaWxpdHkgaXMgc3VwcG9ydGVkLCBpbmNsdWRpbmcgdGhlIGF3YXJlbmVzcyBvZiB0aGUgYXBwIHN0YXR1cy5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcclxuICAgICAqL1xyXG4gICAgZ2V0QXBwbGljYXRpb25TdGF0dXMoKTogUHJvbWlzZTxBcHBsaWNhdGlvblN0YXR1c1Jlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbnMgdGhlIGlsbHVtaW5hbmNlIG9mIHRoZSBlbnZpcm9ubWVudCB3aGVyZSB0aGUgZGV2aWNlIGlzIGxvY2F0ZWQuIFRoZSB1bml0IGlzIGx1eC4gVGhlIGlsbHVtaW5hbmNlIGlzIHRoZSBpbnRlbnNpdHkgcmVjZWl2ZWQgYnkgdGhlIGxpZ2h0IHNlbnNvciBvZiB0aGUgZGV2aWNlLiBXaGVuIHRoZSBsaWdodCBzZW5zb3IgaXMgYmxvY2tlZCBvciBpbGx1bWluYXRlZCBieSBzdHJvbmcgbGlnaHQsIHRoZSBvYnRhaW5lZCBpbGx1bWluYW5jZSBjaGFuZ2VzIGFjY29yZGluZ2x5LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxyXG4gICAgICovXHJcbiAgICBnZXRMaWdodEludGVuc2l0eSgpOiBQcm9taXNlPEFtYmllbnRMaWdodFJlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbiB0aGUgc3RhdHVzIG9mIHRoZSBwaG9uZSwgZm9yIGV4YW1wbGUsIHdoZXRoZXIgdGhlIHNjcmVlbiBpcyBvbiBvciBvZmYuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXHJcbiAgICAgKi9cclxuICAgIGdldFNjcmVlblN0YXR1cygpOiBQcm9taXNlPFNjcmVlblN0YXR1c1Jlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbnMgdGhlIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgb2YgdGhlIGN1cnJlbnQgbG9jYXRpb24uXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXHJcbiAgICAgKi9cclxuICAgIGdldEN1cnJlbnRMb2NhdGlvbigpOiBQcm9taXNlPExvY2F0aW9uUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWluIHRoZSBzdGF0dXMgb2YgdGhlIHBob25lLCBmb3IgZXhhbXBsZSwgd2hldGhlciB0aGUgc3lzdGVtIGlzIGluIGRhcmsgbW9kZS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcclxuICAgICAqL1xyXG4gICAgZ2V0RGFya01vZGVTdGF0dXMoKTogUHJvbWlzZTxEYXJrbW9kZVN0YXR1c1Jlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbiB0aGUgc3RhdHVzIG9mIHRoZSBwaG9uZSwgZm9yIGV4YW1wbGUsIHdoZXRoZXIgdGhlIGFwcCBpcyBzdGFydGVkIG9yIGNsb3NlZCwgd2hldGhlciBXaS1GaSBpcyBjb25uZWN0ZWQgb3Igbm90LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxyXG4gICAgICovXHJcbiAgICBnZXRXaWZpU3RhdHVzKCk6IFByb21pc2U8V2lmaVN0YXR1c1Jlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFF1ZXJpZXMgdGhlIHdlYXRoZXIgaW5mb3JtYXRpb24gb2YgdGhlIGRldmljZSBsb2NhdGlvbiBvciBhIHNwZWNpZmllZCBsb2NhdGlvbi4gV2VhdGhlciBvZiB0aGUgY3VycmVudCBkYXkgKDI0IGhvdXJzKSBhbmQgdGhlIG5leHQgc2V2ZW4gZGF5cyAoaW5jbHVkaW5nIHRoZSBjdXJyZW50IGRheSkgY2FuIGJlIHF1ZXJpZWQuIFxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxyXG4gICAgICovXHJcbiAgICBnZXRXZWF0aGVyQnlEZXZpY2UoKTogUHJvbWlzZTxXZWF0aGVyU3RhdHVzUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogUXVlcmllcyB0aGUgd2VhdGhlciBpbmZvcm1hdGlvbiBvZiB0aGUgZGV2aWNlIGxvY2F0aW9uIG9yIGEgc3BlY2lmaWVkIGxvY2F0aW9uLiBXZWF0aGVyIG9mIHRoZSBjdXJyZW50IGRheSAoMjQgaG91cnMpIGFuZCB0aGUgbmV4dCBzZXZlbiBkYXlzIChpbmNsdWRpbmcgdGhlIGN1cnJlbnQgZGF5KSBjYW4gYmUgcXVlcmllZC4gXHJcbiAgICAgKiBAcGFyYW0gIHtXZWF0aGVyUG9zaXRpb259IHdlYXRoZXJCeVBvc2l0aW9uUmVxdWVzdCBXZWF0aGVyIGJ5IFBvc2l0aW9uLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxyXG4gICAgICovXHJcbiAgICBnZXRXZWF0aGVyQnlQb3NpdGlvbih3ZWF0aGVyQnlQb3NpdGlvblJlcXVlc3Q6IFdlYXRoZXJQb3NpdGlvbik6IFByb21pc2U8V2VhdGhlclN0YXR1c1Jlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRhaW5zIHRoZSBjdXJyZW50IGxvY2FsIHRpbWUgb3IgdGltZSBvZiBhIHNwZWNpZmllZCBsb2NhdGlvbiwgc3VjaCBhcyB3b3JraW5nIGRheSwgd2Vla2VuZCwgaG9saWRheSwgbW9ybmluZywgYWZ0ZXJub29uLCBldmVuaW5nLCBvciBsYXRlIG5pZ2h0LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxyXG4gICAgICovXHJcbiAgICBnZXRUaW1lQ2F0ZWdvcmllcygpOiBQcm9taXNlPFRpbWVDYXRlZ29yaWVzUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyB0aGUgY3VycmVudCBsb2NhbCB0aW1lIG9yIHRpbWUgb2YgYSBzcGVjaWZpZWQgbG9jYXRpb24sIHN1Y2ggYXMgd29ya2luZyBkYXksIHdlZWtlbmQsIGhvbGlkYXksIG1vcm5pbmcsIGFmdGVybm9vbiwgZXZlbmluZywgb3IgbGF0ZSBuaWdodC5cclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gY291bnRyeUNvZGUgVGltZSBDYXRlZ29yaWVzIEJ5IENvbnRyeWNvZGUgcmVxdWVzdC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcclxuICAgICAqL1xyXG4gICAgZ2V0VGltZUNhdGVnb3JpZXNCeUNvdW50cnlDb2RlKGNvdW50cnlDb2RlOiBzdHJpbmcpOiBQcm9taXNlPFRpbWVDYXRlZ29yaWVzUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyB0aGUgY3VycmVudCBsb2NhbCB0aW1lIG9yIHRpbWUgb2YgYSBzcGVjaWZpZWQgbG9jYXRpb24sIHN1Y2ggYXMgd29ya2luZyBkYXksIHdlZWtlbmQsIGhvbGlkYXksIG1vcm5pbmcsIGFmdGVybm9vbiwgZXZlbmluZywgb3IgbGF0ZSBuaWdodC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcclxuICAgICAqL1xyXG4gICAgZ2V0VGltZUNhdGVnb3JpZXNCeUlQKCk6IFByb21pc2U8VGltZUNhdGVnb3JpZXNSZXNwb25zZT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRhaW5zIHRoZSBjdXJyZW50IGxvY2FsIHRpbWUgb3IgdGltZSBvZiBhIHNwZWNpZmllZCBsb2NhdGlvbiwgc3VjaCBhcyB3b3JraW5nIGRheSwgd2Vla2VuZCwgaG9saWRheSwgbW9ybmluZywgYWZ0ZXJub29uLCBldmVuaW5nLCBvciBsYXRlIG5pZ2h0LlxyXG4gICAgICogQHBhcmFtICB7VGltZUNhdGVnb3JpZXNCeVVzZXJSZXF1ZXN0fSB0aW1lQ2F0ZWdvcmllc0J5VXNlclJlcXVlc3QgVGltZSBDYXRlZ29yaWVzIEJ5IFVzZXIgcmVxdWVzdC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcclxuICAgICAqL1xyXG4gICAgZ2V0VGltZUNhdGVnb3JpZXNCeVVzZXIodGltZUNhdGVnb3JpZXNCeVVzZXJSZXF1ZXN0OiBUaW1lQ2F0ZWdvcmllc0J5VXNlclJlcXVlc3QpOiBQcm9taXNlPFRpbWVDYXRlZ29yaWVzUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyB0aGUgY3VycmVudCBsb2NhbCB0aW1lIG9yIHRpbWUgb2YgYSBzcGVjaWZpZWQgbG9jYXRpb24sIHN1Y2ggYXMgd29ya2luZyBkYXksIHdlZWtlbmQsIGhvbGlkYXksIG1vcm5pbmcsIGFmdGVybm9vbiwgZXZlbmluZywgb3IgbGF0ZSBuaWdodC5cclxuICAgICAqIEBwYXJhbSAge251bWJlcn0gZnV0dXJlVGltZXN0YW1wIFRpbWUgQ2F0ZWdvcmllcyBCeSBGdXR1cmUgcmVxdWVzdC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcclxuICAgICAqL1xyXG4gICAgZ2V0VGltZUNhdGVnb3JpZXNGb3JGdXR1cmUoZnV0dXJlVGltZXN0YW1wOiBudW1iZXIpOiBQcm9taXNlPFRpbWVDYXRlZ29yaWVzUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogSXQgZW5hYmxlcyB0aGUgdXBkYXRlIHdpbmRvdy5cclxuICAgICAqIEBwYXJhbSAge2Jvb2xlYW59IGlzRW5hYmxlIGJvb2xlYW4gZW5hYmxlVXBkYXRlV2luZG93LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxyXG4gICAgICovXHJcbiAgICBlbmFibGVVcGRhdGVXaW5kb3coaXNFbmFibGU6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAqIEl0IGVuYWJsZXMgdGhlIHVwZGF0ZSB3aW5kb3cuXHJcbiAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcclxuICovXHJcbiAgICBxdWVyeVN1cHBvcnRpbmdDYXBhYmlsaXRpZXMoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG59XHJcbi8vIEF3YXJlbmVzc0NhcHR1cmUgSW50ZXJmYWNlcyAvL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXZWF0aGVyQnlQb3NpdGlvblJlcXVlc3Qge1xyXG4gICAgd2VhdGhlclBvc2l0aW9uOiBXZWF0aGVyUG9zaXRpb247XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBXZWF0aGVyUG9zaXRpb24ge1xyXG4gICAgbUNvdW50cnk/OiBzdHJpbmcgfCBudWxsLFxyXG4gICAgbVByb3ZpbmNlPzogc3RyaW5nIHwgbnVsbCxcclxuICAgIG1DaXR5OiBzdHJpbmcsXHJcbiAgICBtRGlzdHJpY3Q/OiBzdHJpbmcgfCBudWxsLFxyXG4gICAgbUNvdW50eT86IHN0cmluZyB8IG51bGwsXHJcbiAgICBtTG9jYWxlOiBzdHJpbmcsXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBFbmFibGVVcGRhdGVXaW5kb3dSZXF1ZXN0IHtcclxuICAgIGlzRW5hYmxlOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVDYXRlZ29yaWVzQnlVc2VyUmVxdWVzdCB7XHJcbiAgICBsb2NhdGlvbjogQ29vcmRpbmF0ZTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENvb3JkaW5hdGUge1xyXG4gICAgbGF0aXR1ZGU6IG51bWJlcjtcclxuICAgIGxvbmdpdHVkZTogbnVtYmVyXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBUaW1lQ2F0ZWdvcmllc0J5Q291bnRyeVJlcXVlc3Qge1xyXG4gICAgY291bnRyeUNvZGU6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVDYXRlZ29yaWVzRm9yRnV0dXJlUmVxdWVzdCB7XHJcbiAgICBmdXR1cmVUaW1lc3RhbXA6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEJlYWNvblN0YXR1c1JlcXVlc3Qge1xyXG4gICAgYmVhY29uU3RhdHVzRmlsdGVyOiBCZWFjb25TdGF0dXNGaWx0ZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBCZWFjb25TdGF0dXNGaWx0ZXIge1xyXG4gICAgbmFtZXNwYWNlOiBzdHJpbmc7XHJcbiAgICB0eXBlPzogc3RyaW5nIHwgbnVsbDtcclxuICAgIGNvbnRlbnQ/OiBBcnJheTxhbnk+IHwgbnVsbDtcclxufVxyXG5cclxuLy8gQXdhcmVuZXNzQmFycmllciBJbnRlcmZhY2VzIC8vXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhlYWRzZXRTdGF0dXNSZXNwb25zZSB7XHJcbiAgICBoZWFkc2V0U3RhdHVzOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBCbHVldG9vdGhTdGF0dXNSZXNwb25zZSB7XHJcbiAgICBibHVldG9vdGhTdGF0dXM6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFdpZmlTdGF0dXNSZXNwb25zZSB7XHJcbiAgICB3aWZpU3RhdHVzOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTY3JlZW5TdGF0dXNSZXNwb25zZSB7XHJcbiAgICBzY3JlZW5TdGF0dXM6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIERhcmttb2RlU3RhdHVzUmVzcG9uc2Uge1xyXG4gICAgZGFya21vZGVTdGF0dXM6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uU3RhdHVzUmVzcG9uc2Uge1xyXG4gICAgYXBwbGljYXRpb25TdGF0dXM6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEFtYmllbnRMaWdodFJlc3BvbnNlIHtcclxuICAgIGxpZ2h0SW50ZW5zaXR5OiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvblJlc3BvbnNlIHtcclxuICAgIGxhdGl0dWRlOiBudW1iZXI7XHJcbiAgICBsb25naXR1ZGU6IG51bWJlcjtcclxuICAgIGFsdGl0dWRlOiBudW1iZXI7XHJcbiAgICBzcGVlZDogbnVtYmVyO1xyXG4gICAgYmVhcmluZzogbnVtYmVyO1xyXG4gICAgYWNjdXJhY3k6IG51bWJlcjtcclxuICAgIHZlcnRpY2FsQWNjdXJhY3lNZXRlcnM/OiBudW1iZXIgfCBudWxsO1xyXG4gICAgYmVhcmluZ0FjY3VyYWN5RGVncmVlcz86IG51bWJlciB8IG51bGw7XHJcbiAgICBzcGVlZEFjY3VyYWN5TWV0ZXJzUGVyU2Vjb25kPzogbnVtYmVyIHwgbnVsbDtcclxuICAgIHRpbWU6IG51bWJlcjtcclxuICAgIGZyb21Nb2NrUHJvdmlkZXI6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEJlaGF2aW9yUmVzcG9uc2Uge1xyXG4gICAgZWxhcHNlZFJlYWx0aW1lTWlsbGlzOiBudW1iZXI7XHJcbiAgICB0aW1lOiBudW1iZXI7XHJcbiAgICBtb3N0TGlrZWx5QmVoYXZpb3I6IE1vc3RMaWtlbHlCZWhhdmlvcjtcclxuICAgIHByb2JhYmxlQmVoYXZpb3I6IEFycmF5PE1vc3RMaWtlbHlCZWhhdmlvcj47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNb3N0TGlrZWx5QmVoYXZpb3Ige1xyXG4gICAgY29uZmlkZW5jZTogbnVtYmVyO1xyXG4gICAgdHlwZTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgV2VhdGhlclN0YXR1c1Jlc3BvbnNlIHtcclxuICAgIGRhaWx5V2VhdGhlcj86IChEYWlseVdlYXRoZXIpW10gfCBudWxsO1xyXG4gICAgaG91cmx5V2VhdGhlcj86IChIb3VybHlXZWF0aGVyKVtdIHwgbnVsbDtcclxuICAgIGxpdmVJbmZvPzogKG51bGwpW10gfCBudWxsO1xyXG4gICAgYXFpPzogQXFpIHwgbnVsbDtcclxuICAgIHdlYXRoZXJTaXR1YXRpb246IFdlYXRoZXJTaXR1YXRpb247XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBEYWlseVdlYXRoZXIge1xyXG4gICAgYXFpVmFsdWU6IG51bWJlcjtcclxuICAgIGRhdGVUaW1lU3RhbXA6IG51bWJlcjtcclxuICAgIG1heFRlbXBDOiBudW1iZXI7XHJcbiAgICBtYXhUZW1wRjogbnVtYmVyO1xyXG4gICAgbWluVGVtcEM6IG51bWJlcjtcclxuICAgIG1pblRlbXBGOiBudW1iZXI7XHJcbiAgICBtb29uUGhhc2U6IHN0cmluZztcclxuICAgIG1vb25SaXNlOiBudW1iZXI7XHJcbiAgICBtb29uU2V0OiBudW1iZXI7XHJcbiAgICBzdW5SaXNlOiBudW1iZXI7XHJcbiAgICBzdW5TZXQ6IG51bWJlcjtcclxuICAgIHNpdHVhdGlvbkRheTogU2l0dWF0aW9uRGF5T3JTaXR1YXRpb25OaWdodDtcclxuICAgIHNpdHVhdGlvbk5pZ2h0OiBTaXR1YXRpb25EYXlPclNpdHVhdGlvbk5pZ2h0O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2l0dWF0aW9uRGF5T3JTaXR1YXRpb25OaWdodCB7XHJcbiAgICBjbldlYXRoZXJJZDogbnVtYmVyO1xyXG4gICAgd2VhdGhlcklkOiBudW1iZXI7XHJcbiAgICB3aW5kRGlyOiBzdHJpbmc7XHJcbiAgICB3aW5kTGV2ZWw6IG51bWJlcjtcclxuICAgIHdpbmRTcGVlZDogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSG91cmx5V2VhdGhlciB7XHJcbiAgICBjbldlYXRoZXJJZDogbnVtYmVyO1xyXG4gICAgZGF0ZVRpbWVTdGFtcDogbnVtYmVyO1xyXG4gICAgcmFpblByb2JhYmlsaXR5OiBudW1iZXI7XHJcbiAgICB0ZW1wQzogbnVtYmVyO1xyXG4gICAgdGVtcEY6IG51bWJlcjtcclxuICAgIHdlYXRoZXJJZDogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQXFpIHtcclxuICAgIGFxaVZhbHVlOiBudW1iZXI7XHJcbiAgICBDbzogbnVtYmVyO1xyXG4gICAgTm8yOiBudW1iZXI7XHJcbiAgICBPMzogbnVtYmVyO1xyXG4gICAgUG0xMDogbnVtYmVyO1xyXG4gICAgUG0yNTogbnVtYmVyO1xyXG4gICAgU28yOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBXZWF0aGVyU2l0dWF0aW9uIHtcclxuICAgIGNpdHk6IENpdHk7XHJcbiAgICBzaXR1YXRpb246IFNpdHVhdGlvbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENpdHkge1xyXG4gICAgY2l0eUNvZGU6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHByb3ZpbmNlTmFtZTogc3RyaW5nO1xyXG4gICAgdGltZVpvbmU6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNpdHVhdGlvbiB7XHJcbiAgICBjbldlYXRoZXJJZDogbnVtYmVyO1xyXG4gICAgaHVtaWRpdHk6IHN0cmluZztcclxuICAgIHByZXNzdXJlOiBudW1iZXI7XHJcbiAgICByZWFsRmVlbEM6IG51bWJlcjtcclxuICAgIHJlYWxGZWVsRjogbnVtYmVyO1xyXG4gICAgdGVtcGVyYXR1cmVDOiBudW1iZXI7XHJcbiAgICB0ZW1wZXJhdHVyZUY6IG51bWJlcjtcclxuICAgIHVwZGF0ZVRpbWU6IG51bWJlcjtcclxuICAgIHV2SW5kZXg6IG51bWJlcjtcclxuICAgIHdlYXRoZXJJZDogbnVtYmVyO1xyXG4gICAgd2luZERpcjogc3RyaW5nO1xyXG4gICAgd2luZFNwZWVkOiBudW1iZXI7XHJcbiAgICB3aW5kTGV2ZWw6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYXBhYmlsaXR5UmVzcG9uc2Uge1xyXG4gICAgZGV2aWNlU3VwcG9ydENhcGFiaWxpdGllcz86IERldmljZVN1cHBvcnRDYXBhYmlsaXRpZXNbXSB8IG51bGw7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VTdXBwb3J0Q2FwYWJpbGl0aWVzIHtcclxuICAgIGNhcGFiaWxpdHlTdGF0dXM6IG51bWJlcjtcclxuICAgIGNhcGFiaWxpdHlTdGF0dXNOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGltZUNhdGVnb3JpZXNSZXNwb25zZSB7XHJcbiAgICB0aW1lQ2F0ZWdvcmllcz86IFRpbWVDYXRlZ29yaWVzW10gfCBudWxsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVGltZUNhdGVnb3JpZXMge1xyXG4gICAgVGltZUJhcnJpZXI6IG51bWJlcjtcclxuICAgIFRpbWVCYXJyaWVyTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJlYWNvblN0YXR1c1Jlc3BvbnNlIHtcclxuICAgIGJlYWNvbkRhdGE/OiBCZWFjb25EYXRhW10gfCBudWxsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQmVhY29uRGF0YSB7XHJcbiAgICBCZWhhdmlvckJhcnJpZXI6IG51bWJlcjtcclxuICAgIEJlaGF2aW9yQmFycmllck5hbWU6IHN0cmluZztcclxufVxyXG5cclxuXHJcbi8vIEF3YXJlbmVzc0JhcnJpZXIgUmV0dXJuIFxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXJyaWVyU3RhdHVzIHtcclxuICAgIGJhcnJpZXJMYWJlbDogc3RyaW5nO1xyXG4gICAgcHJlc2VudFN0YXR1czogbnVtYmVyO1xyXG4gICAgbGFzdFN0YXR1czogbnVtYmVyO1xyXG4gICAgbGFzdEJhcnJpZXJVcGRhdGVUaW1lOiBudW1iZXI7XHJcbn1cclxuXHJcbi8vRW51bSB2YWx1ZVxyXG5leHBvcnQgZW51bSBIZWFkc2V0U3RhdHVzIHtcclxuICAgIENPTk5FQ1RFRCA9IDEsXHJcbiAgICBESVNDT05ORUNURUQgPSAwLFxyXG59XHJcbmV4cG9ydCBlbnVtIFdpZmlTdGF0dXMge1xyXG4gICAgQ09OTkVDVEVEID0gMSxcclxuICAgIERJU0NPTk5FQ1RFRCA9IDQsXHJcbiAgICBFTkFCTEVEID0gMyxcclxuICAgIERJU0FCTEVEID0gLTEsXHJcbn1cclxuZXhwb3J0IGVudW0gQmx1ZXRvb3RoU3RhdHVzIHtcclxuICAgIENPTk5FQ1RFRCA9IDEsXHJcbiAgICBESVNDT05ORUNURUQgPSAwLFxyXG59XHJcbmV4cG9ydCBlbnVtIFNjcmVlblN0YXR1cyB7XHJcbiAgICBTQ1JFRU5PTiA9IDEsXHJcbiAgICBTQ1JFRU5PRkYgPSAwLFxyXG4gICAgVU5MT0NLID0gMixcclxufVxyXG5leHBvcnQgZW51bSBCZWhhdmlvckJhcnJpZXJDb25zdGFudCB7XHJcbiAgICBCRUhBVklPUl9JTl9WRUhJQ0xFID0gMCxcclxuICAgIEJFSEFWSU9SX09OX0JJQ1lDTEUgPSAxLFxyXG4gICAgQkVIQVZJT1JfT05fRk9PVCA9IDIsXHJcbiAgICBCRUhBVklPUl9TVElMTCA9IDMsXHJcbiAgICBCRUhBVklPUl9XQUxLSU5HID0gNyxcclxuICAgIEJFSEFWSU9SX1JVTk5JTkcgPSA4LFxyXG59XHJcbmV4cG9ydCBlbnVtIEJsdWV0b290aERldmljZSB7XHJcbiAgICBERVZJQ0VfQ0FSID0gMFxyXG59XHJcbmV4cG9ydCBlbnVtIFRpbWVCYXJyaWVyQ29uc3RhbnRzIHtcclxuICAgIFNVTlJJU0VfQ09ERSA9IDAsXHJcbiAgICBTVU5TRVRfQ09ERSA9IDEsXHJcbiAgICBUSU1FX0NBVEVHT1JZX01PUk5JTkcgPSAxLFxyXG4gICAgVElNRV9DQVRFR09SWV9BRlRFUk5PT04gPSAyLFxyXG4gICAgVElNRV9DQVRFR09SWV9FVkVOSU5HID0gMyxcclxuICAgIFRJTUVfQ0FURUdPUllfTklHSFQgPSA0LFxyXG4gICAgVElNRV9DQVRFR09SWV9IT0xJREFZID0gNSxcclxuICAgIFRJTUVfQ0FURUdPUllfV0VFS0RBWSA9IDYsXHJcbiAgICBUSU1FX0NBVEVHT1JZX1dFRUtFTkQgPSA3LFxyXG4gICAgVElNRV9DQVRFR09SWV9OT1RfSE9MSURBWSA9IDgsXHJcbiAgICBTVU5EQVlfQ09ERSA9IDEsXHJcbiAgICBNT05EQVlfQ09ERSA9IDIsXHJcbiAgICBUVUVTREFZX0NPREUgPSAzLFxyXG4gICAgV0VETkVTREFZX0NPREUgPSA0LFxyXG4gICAgVEhVUlNEQVlfQ09ERSA9IDUsXHJcbiAgICBGUklEQVlfQ09ERSA9IDYsXHJcbiAgICBTQVRVUkRBWV9DT0RFID0gNyxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgcHJpdmF0ZSBjb3Jkb3ZhQmFycmllcjogYW55O1xyXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGNvcmRvdmFCYXJyaWVyOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmNvcmRvdmFCYXJyaWVyID0gY29yZG92YUJhcnJpZXI7XHJcbiAgICB9XHJcbiAgICBzdWJzY3JpYmUoY2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWQpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICB0aGlzLmNvcmRvdmFCYXJyaWVyLnN1YnNjcmliZShjYWxsYmFjayk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBjYXRjaChjYWxsYmFjazogKGRhdGE6IGFueSkgPT4gdm9pZCk6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIHRoaXMuY29yZG92YUJhcnJpZXIuY2F0Y2goY2FsbGJhY2spO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcnVuKGJhcnJpZXJMYWJlbDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jb3Jkb3ZhQmFycmllci5ydW4oYmFycmllckxhYmVsKTtcclxuICAgIH1cclxuICAgIHJ1bkluQmFja2dyb3VuZChiYXJyaWVyTGFiZWw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvcmRvdmFCYXJyaWVyLnJ1bkluQmFja2dyb3VuZChiYXJyaWVyTGFiZWwpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJhcnJpZXJNYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWxldGVBbGxCYXJyaWVycyhzdWNjZXNzOiBhbnksIGVycm9yOiBhbnkpOiBhbnkge1xyXG4gICAgICAgICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5kZWxldGVBbGxCYXJyaWVycyhzdWNjZXNzLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZGVsZXRlQmFycmllcldpdGhMYWJlbHMoc3VjY2VzczogYW55LCBlcnJvcjogYW55LCBwYXJhbXM6IGFueSk6IGFueSB7XHJcbiAgICAgICAgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLmRlbGV0ZUJhcnJpZXJXaXRoTGFiZWxzKHN1Y2Nlc3MsIGVycm9yLCBwYXJhbXMpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHVuUmVnaXN0ZXJSZWNlaXZlcihzdWNjZXNzOiBhbnksIGVycm9yOiBhbnkpOiBhbnkge1xyXG4gICAgICAgICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci51blJlZ2lzdGVyUmVjZWl2ZXIoc3VjY2VzcywgZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHF1ZXJ5QmFycmllcnNXaXRoQmFycmllcktleXMoc3VjY2VzczogYW55LCBlcnJvcjogYW55LCBwYXJhbXM6IGFueSk6IGFueSB7XHJcbiAgICAgICAgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLnF1ZXJ5QmFycmllcnNXaXRoQmFycmllcktleXMoc3VjY2VzcywgZXJyb3IsIHBhcmFtcyk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcXVlcnlCYXJyaWVyc1dpdGhBbGxCYXJyaWVycyhzdWNjZXNzOiBhbnksIGVycm9yOiBhbnkpOiBhbnkge1xyXG4gICAgICAgICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5xdWVyeUJhcnJpZXJzV2l0aEFsbEJhcnJpZXJzKHN1Y2Nlc3MsIGVycm9yKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzdG9wQmFja2dyb3VuZFNlcnZpY2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5zdG9wQmFja2dyb3VuZFNlcnZpY2UoKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzZXRCYWNrZ3JvdW5kRmlsZShmaWxlTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5zZXRCYWNrZ3JvdW5kRmlsZShmaWxlTmFtZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFkc2V0QmFycmllciBleHRlbmRzIEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgc3RhdGljIGtlZXBpbmcoaGVhZHNldFN0YXR1czogbnVtYmVyKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgYmFycmllciA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuSGVhZHNldEJhcnJpZXIoSGVhZHNldEJhcnJpZXIubmFtZSwgXCJrZWVwaW5nXCIsIFtoZWFkc2V0U3RhdHVzXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGJhcnJpZXIpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNvbm5lY3RpbmcoKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgYmFycmllciA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuSGVhZHNldEJhcnJpZXIoSGVhZHNldEJhcnJpZXIubmFtZSwgXCJjb25uZWN0aW5nXCIsIFtdKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoYmFycmllcik7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZGlzY29ubmVjdGluZygpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBiYXJyaWVyID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5IZWFkc2V0QmFycmllcihIZWFkc2V0QmFycmllci5uYW1lLCBcImRpc2Nvbm5lY3RpbmdcIiwgW10pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihiYXJyaWVyKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBbWJpZW50TGlnaHRCYXJyaWVyIGV4dGVuZHMgQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICBzdGF0aWMgYWJvdmUodjogbnVtYmVyKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuQW1iaWVudExpZ2h0QmFycmllcihBbWJpZW50TGlnaHRCYXJyaWVyLm5hbWUsIFwiYWJvdmVcIiwgW3ZdKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYmVsb3codjogbnVtYmVyKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuQW1iaWVudExpZ2h0QmFycmllcihBbWJpZW50TGlnaHRCYXJyaWVyLm5hbWUsIFwiYmVsb3dcIiwgW3ZdKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcmFuZ2UodjE6IG51bWJlciwgdjI6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkFtYmllbnRMaWdodEJhcnJpZXIoQW1iaWVudExpZ2h0QmFycmllci5uYW1lLCBcInJhbmdlXCIsIFt2MSwgdjJdKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXaWZpQmFycmllciBleHRlbmRzIEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgc3RhdGljIGNvbm5lY3RpbmcoczE/OiBzdHJpbmcsIHMyPzogc3RyaW5nKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuV2lmaUJhcnJpZXIoV2lmaUJhcnJpZXIubmFtZSwgXCJjb25uZWN0aW5nXCIsIFtzMSwgczJdKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZGlzYWJsaW5nKCk6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLldpZmlCYXJyaWVyKFdpZmlCYXJyaWVyLm5hbWUsIFwiZGlzYWJsaW5nXCIsIFtdKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZGlzY29ubmVjdGluZyhzMT86IHN0cmluZywgczI/OiBzdHJpbmcpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBsZXQgYXJyOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIGlmIChzMSAhPSBudWxsKSBhcnIgPSBbczEsIHMyXTtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5XaWZpQmFycmllcihXaWZpQmFycmllci5uYW1lLCBcImRpc2Nvbm5lY3RpbmdcIiwgYXJyKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZW5hYmxpbmcoKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuV2lmaUJhcnJpZXIoV2lmaUJhcnJpZXIubmFtZSwgXCJlbmFibGluZ1wiLCBbXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGtlZXBpbmcoaTogbnVtYmVyLCBzMT86IHN0cmluZywgczI/OiBzdHJpbmcpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBsZXQgYXJyOiBhbnlbXSA9IFtpXTtcclxuICAgICAgICBpZiAoczEgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBhcnIucHVzaChzMSk7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKHMyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuV2lmaUJhcnJpZXIoV2lmaUJhcnJpZXIubmFtZSwgXCJrZWVwaW5nXCIsIGFycik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmx1ZXRvb3RoQmFycmllciBleHRlbmRzIEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgc3RhdGljIGNvbm5lY3RpbmcoaTogbnVtYmVyKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuQmx1ZXRvb3RoQmFycmllcihCbHVldG9vdGhCYXJyaWVyLm5hbWUsIFwiY29ubmVjdGluZ1wiLCBbaV0pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBkaXNjb25uZWN0aW5nKGk6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkJsdWV0b290aEJhcnJpZXIoQmx1ZXRvb3RoQmFycmllci5uYW1lLCBcImRpc2Nvbm5lY3RpbmdcIiwgW2ldKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMga2VlcChpOiBudW1iZXIsIGkxOiBudW1iZXIpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CbHVldG9vdGhCYXJyaWVyKEJsdWV0b290aEJhcnJpZXIubmFtZSwgXCJrZWVwXCIsIFtpLCBpMV0pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJlaGF2aW9yQmFycmllciBleHRlbmRzIEF3YXJlbmVzc0JhcnJpZXIge1xyXG5cclxuICAgIHN0YXRpYyBiZWdpbm5pbmcoLi4uaW50czogbnVtYmVyW10pOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CZWhhdmlvckJhcnJpZXIoQmVoYXZpb3JCYXJyaWVyLm5hbWUsIFwiYmVnaW5uaW5nXCIsIFtpbnRzXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGVuZGluZyguLi5pbnRzOiBudW1iZXJbXSk6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkJlaGF2aW9yQmFycmllcihCZWhhdmlvckJhcnJpZXIubmFtZSwgXCJlbmRpbmdcIiwgW2ludHNdKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMga2VlcGluZyguLi5pbnRzOiBudW1iZXJbXSk6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkJlaGF2aW9yQmFycmllcihCZWhhdmlvckJhcnJpZXIubmFtZSwgXCJrZWVwaW5nXCIsIFtpbnRzXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTG9jYXRpb25CYXJyaWVyIGV4dGVuZHMgQXdhcmVuZXNzQmFycmllciB7XHJcblxyXG4gICAgc3RhdGljIGVudGVyKHY6IG51bWJlciwgdjE6IG51bWJlciwgdjI6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkxvY2F0aW9uQmFycmllcihMb2NhdGlvbkJhcnJpZXIubmFtZSwgXCJlbnRlclwiLCBbdiwgdjEsIHYyXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGV4aXQodjogbnVtYmVyLCB2MTogbnVtYmVyLCB2MjogbnVtYmVyKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuTG9jYXRpb25CYXJyaWVyKExvY2F0aW9uQmFycmllci5uYW1lLCBcImV4aXRcIiwgW3YsIHYxLCB2Ml0pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzdGF5KHY6IG51bWJlciwgdjE6IG51bWJlciwgdjI6IG51bWJlciwgbDogbnVtYmVyKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuTG9jYXRpb25CYXJyaWVyKExvY2F0aW9uQmFycmllci5uYW1lLCBcInN0YXlcIiwgW3YsIHYxLCB2MiwgbF0pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNjcmVlbkJhcnJpZXIgZXh0ZW5kcyBBd2FyZW5lc3NCYXJyaWVyIHtcclxuXHJcbiAgICBzdGF0aWMgc2NyZWVuT24oKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuU2NyZWVuQmFycmllcihTY3JlZW5CYXJyaWVyLm5hbWUsIFwic2NyZWVuT25cIiwgW10pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzY3JlZW5PZmYoKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuU2NyZWVuQmFycmllcihTY3JlZW5CYXJyaWVyLm5hbWUsIFwic2NyZWVuT2ZmXCIsIFtdKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2NyZWVuVW5sb2NrKCk6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLlNjcmVlbkJhcnJpZXIoU2NyZWVuQmFycmllci5uYW1lLCBcInNjcmVlblVubG9ja1wiLCBbXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGtlZXBpbmcoaTogbnVtYmVyKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuU2NyZWVuQmFycmllcihTY3JlZW5CYXJyaWVyLm5hbWUsIFwia2VlcGluZ1wiLCBbaV0pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVCYXJyaWVyIGV4dGVuZHMgQXdhcmVuZXNzQmFycmllciB7XHJcblxyXG4gICAgc3RhdGljIGR1cmluZ1BlcmlvZE9mRGF5KHRpbWVab25lOiBzdHJpbmcsIGw6IG51bWJlciwgbDE6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLlRpbWVCYXJyaWVyKFRpbWVCYXJyaWVyLm5hbWUsIFwiZHVyaW5nUGVyaW9kT2ZEYXlcIiwgW3RpbWVab25lLCBsLCBsMV0pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBkdXJpbmdQZXJpb2RPZldlZWsoaTogbnVtYmVyLCB0aW1lWm9uZTogc3RyaW5nLCBsOiBudW1iZXIsIGwxOiBudW1iZXIpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5UaW1lQmFycmllcihUaW1lQmFycmllci5uYW1lLCBcImR1cmluZ1BlcmlvZE9mV2Vla1wiLCBbaSwgdGltZVpvbmUsIGwsIGwxXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGR1cmluZ1RpbWVQZXJpb2QobDogbnVtYmVyLCBsMTogbnVtYmVyKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuVGltZUJhcnJpZXIoVGltZUJhcnJpZXIubmFtZSwgXCJkdXJpbmdUaW1lUGVyaW9kXCIsIFtsLCBsMV0pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBpblN1bnJpc2VPclN1bnNldFBlcmlvZChpOiBudW1iZXIsIGw6IG51bWJlciwgbDE6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLlRpbWVCYXJyaWVyKFRpbWVCYXJyaWVyLm5hbWUsIFwiaW5TdW5yaXNlT3JTdW5zZXRQZXJpb2RcIiwgW2ksIGwsIGwxXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGluVGltZUNhdGVnb3J5KGk6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLlRpbWVCYXJyaWVyKFRpbWVCYXJyaWVyLm5hbWUsIFwiaW5UaW1lQ2F0ZWdvcnlcIiwgW2ldKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCZWFjb25CYXJyaWVyIGV4dGVuZHMgQXdhcmVuZXNzQmFycmllciB7XHJcblxyXG4gICAgc3RhdGljIGRpc2NvdmVyKG5hbWVzcGFjZTogc3RyaW5nLCB0eXBlPzogc3RyaW5nIHwgbnVsbCwgY29udGVudD86IHN0cmluZ1tdIHwgbnVsbCk6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkJlYWNvbkJhcnJpZXIoQmVhY29uQmFycmllci5uYW1lLCBcImRpc2NvdmVyXCIsIFtuYW1lc3BhY2UsIHR5cGUsIGNvbnRlbnRdKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMga2VlcChuYW1lc3BhY2U6IHN0cmluZywgdHlwZT86IHN0cmluZyB8IG51bGwsIGNvbnRlbnQ/OiBzdHJpbmdbXSB8IG51bGwpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CZWFjb25CYXJyaWVyKEJlYWNvbkJhcnJpZXIubmFtZSwgXCJrZWVwXCIsIFtuYW1lc3BhY2UsIHR5cGUsIGNvbnRlbnRdKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgbWlzc2VkKG5hbWVzcGFjZTogc3RyaW5nLCB0eXBlPzogc3RyaW5nIHwgbnVsbCwgY29udGVudD86IHN0cmluZ1tdIHwgbnVsbCk6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkJlYWNvbkJhcnJpZXIoQmVhY29uQmFycmllci5uYW1lLCBcIm1pc3NlZFwiLCBbbmFtZXNwYWNlLCB0eXBlLCBjb250ZW50XSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tYmluYXRpb25CYXJyaWVyIGV4dGVuZHMgQXdhcmVuZXNzQmFycmllciB7XHJcblxyXG4gICAgc3RhdGljIG9yKC4uLmF3YXJlbmVzczogQXdhcmVuZXNzQmFycmllcltdKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgYmFycmllciA9IG5ldyAoPGFueT53aW5kb3cpLkNvbWJpbmF0aW9uQmFycmllcihcIm9yXCIsIGF3YXJlbmVzcyk7XHJcbiAgICAgICAgYmFycmllci5jdXJyZW50QmFycmllcnMgPSBhd2FyZW5lc3M7XHJcbiAgICAgICAgYmFycmllci5jb21iTWV0aG9kID0gXCJvclwiO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihiYXJyaWVyKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBhbmQoLi4uYXdhcmVuZXNzOiBBd2FyZW5lc3NCYXJyaWVyW10pOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBiYXJyaWVyID0gbmV3ICg8YW55PndpbmRvdykuQ29tYmluYXRpb25CYXJyaWVyKFwiYW5kXCIsIGF3YXJlbmVzcyk7XHJcbiAgICAgICAgYmFycmllci5jdXJyZW50QmFycmllcnMgPSBhd2FyZW5lc3M7XHJcbiAgICAgICAgYmFycmllci5jb21iTWV0aG9kID0gXCJhbmRcIjtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoYmFycmllcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5vdChhd2FyZW5lc3M6IEF3YXJlbmVzc0JhcnJpZXIpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBiYXJyaWVyID0gbmV3ICg8YW55PndpbmRvdykuQ29tYmluYXRpb25CYXJyaWVyKFwibm90XCIsIFthd2FyZW5lc3NdKTtcclxuICAgICAgICBiYXJyaWVyLmN1cnJlbnRCYXJyaWVycyA9IFthd2FyZW5lc3NdO1xyXG4gICAgICAgIGJhcnJpZXIuY29tYk1ldGhvZCA9IFwibm90XCI7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGJhcnJpZXIpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=