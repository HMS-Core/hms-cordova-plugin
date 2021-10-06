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
import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HMSAwareness = /** @class */ (function (_super) {
    __extends(HMSAwareness, _super);
    function HMSAwareness() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * It checks the permissions required to use this Kit.
     * @param  {HMSPermission} permission Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    HMSAwareness.prototype.hasPermission = function (permission) { return cordova(this, "hasPermission", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains the necessary permissions to use the services.
     * @param  {HMSPermission} permission Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    HMSAwareness.prototype.requestPermission = function (permission) { return cordova(this, "requestPermission", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains the necessary permissions to use the services.
     * @param  {HMSPermission[]} permissions Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    HMSAwareness.prototype.requestPermissions = function (permissions) { return cordova(this, "requestPermissions", { "otherPromise": true }, arguments); };
    ;
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
    HMSAwareness = __decorate([
        Injectable()
    ], HMSAwareness);
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
     * @param  {BluetoothDevice} blueoothDevice Indicates bluetooth device.
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
     * @returns Promise<any>
     */
    AwarenessCapture.prototype.getWeatherByIP = function () { return cordova(this, "getWeatherByIP", { "otherPromise": true }, arguments); };
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
    AwarenessCapture = __decorate([
        Injectable()
    ], AwarenessCapture);
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
export var HMSPermission;
(function (HMSPermission) {
    HMSPermission["PERMISSION_ACCESS_FINE_LOCATION"] = "android.permission.ACCESS_FINE_LOCATION";
    HMSPermission["PERMISSION_HUAWEI_ACTIVITY_RECOGNITION"] = "com.huawei.hms.permission.ACTIVITY_RECOGNITION";
    HMSPermission["PERMISSION_ACTIVITY_RECOGNITION"] = "android.permission.ACTIVITY_RECOGNITION";
    HMSPermission["PERMISSION_BLUETOOTH"] = "android.permission.BLUETOOTH";
    HMSPermission["PERMISSION_CHANGE_WIFI_STATE"] = "android.permission.CHANGE_WIFI_STATE";
    HMSPermission["PERMISSION_ACCESS_COARSE_LOCATION"] = "android.permission.ACCESS_COARSE_LOCATION";
    HMSPermission["PERMISSION_ACCESS_BACKGROUND_LOCATION"] = "android.permission.ACCESS_BACKGROUND_LOCATION";
})(HMSPermission || (HMSPermission = {}));
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
        var capsule = new window.AwarenessBarrier.BehaviorBarrier(LocationBarrier.name, "enter", [v, v1, v2]);
        return new AwarenessBarrier(capsule);
    };
    LocationBarrier.exit = function (v, v1, v2) {
        var capsule = new window.AwarenessBarrier.BehaviorBarrier(LocationBarrier.name, "exit", [v, v1, v2]);
        return new AwarenessBarrier(capsule);
    };
    LocationBarrier.stay = function (v, v1, v2, l) {
        var capsule = new window.AwarenessBarrier.BehaviorBarrier(LocationBarrier.name, "stay", [v, v1, v2, l]);
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
        var capsule = new window.AwarenessBarrier.BehaviorBarrier(ScreenBarrier.name, "screenOn", []);
        return new AwarenessBarrier(capsule);
    };
    ScreenBarrier.screenOff = function () {
        var capsule = new window.AwarenessBarrier.BehaviorBarrier(ScreenBarrier.name, "screenOff", []);
        return new AwarenessBarrier(capsule);
    };
    ScreenBarrier.screenUnlock = function () {
        var capsule = new window.AwarenessBarrier.BehaviorBarrier(ScreenBarrier.name, "screenUnlock", []);
        return new AwarenessBarrier(capsule);
    };
    ScreenBarrier.keeping = function (i) {
        var capsule = new window.AwarenessBarrier.BehaviorBarrier(ScreenBarrier.name, "keeping", [i]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1hd2FyZW5lc3Mvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztFQWNFOztBQUVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFjdEMsZ0NBQWlCOzs7O0lBRy9DOzs7O09BSUc7SUFDSCxvQ0FBYSxhQUFDLFVBQXlCO0lBRXRDLENBQUM7SUFHRjs7OztPQUlHO0lBQ0gsd0NBQWlCLGFBQUMsVUFBeUI7SUFFMUMsQ0FBQztJQUVGOzs7O09BSUc7SUFDSCx5Q0FBa0IsYUFBQyxXQUE0QjtJQUU5QyxDQUFDO0lBR0Y7OztPQUdHO0lBQ0gsbUNBQVk7SUFLWjs7O09BR0c7SUFDSCxvQ0FBYTs7Ozs7O0lBN0NKLFlBQVk7UUFEeEIsVUFBVSxFQUFFO09BQ0EsWUFBWTt1QkEvQnpCO0VBK0JrQyxpQkFBaUI7U0FBdEMsWUFBWTs7SUF5RGEsb0NBQWlCOzs7O0lBR25EOzs7T0FHRztJQUNILDJDQUFnQjtJQUVmLENBQUM7SUFFRjs7O09BR0c7SUFDSCxzQ0FBVztJQUVWLENBQUM7SUFFRjs7O09BR0c7SUFDSCw0Q0FBaUI7SUFFaEIsQ0FBQztJQUVGOzs7O09BSUc7SUFDSCw2Q0FBa0IsYUFBQyxjQUErQjtJQUVqRCxDQUFDO0lBRUY7Ozs7T0FJRztJQUNILDBDQUFlLGFBQUMsbUJBQXVDO0lBRXRELENBQUM7SUFFRjs7O09BR0c7SUFDSCwrQ0FBb0I7SUFFbkIsQ0FBQztJQUVGOzs7T0FHRztJQUNILDRDQUFpQjtJQUVoQixDQUFDO0lBRUY7OztPQUdHO0lBQ0gsMENBQWU7SUFFZCxDQUFDO0lBRUY7OztPQUdHO0lBQ0gsNkNBQWtCO0lBRWpCLENBQUM7SUFFRjs7O09BR0c7SUFDSCw0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LGVBQWUsR0FBRyxTQUFTLENBQUM7UUFDcEMsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDMUIsT0FBTyxJQUFJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDTSxzQkFBRyxHQUFWO1FBQVcsbUJBQWdDO2FBQWhDLFVBQWdDLEVBQWhDLHFCQUFnQyxFQUFoQyxJQUFnQztZQUFoQyw4QkFBZ0M7O1FBQ3ZDLElBQU0sT0FBTyxHQUFHLElBQVUsTUFBTyxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN2RSxPQUFPLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztRQUNwQyxPQUFPLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUMzQixPQUFPLElBQUksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLHNCQUFHLEdBQVYsVUFBVyxTQUEyQjtRQUNsQyxJQUFNLE9BQU8sR0FBRyxJQUFVLE1BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sQ0FBQyxlQUFlLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QyxPQUFPLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUMzQixPQUFPLElBQUksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQzs2QkFydkJMO0VBaXVCd0MsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBDb3B5cmlnaHQgMjAyMC0yMDIxLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxuICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuLyoqXG4gKiBAbmFtZSBITVNBd2FyZW5lc3NcbiAqIEBkZXNjcmlwdGlvblxuICogQ29yZG92YSBBd2FyZW5lc3MgUGx1Z2luIGVuYWJsZXMgY29tbXVuaWNhdGlvbiBiZXR3ZWVuIHRoZSBITVMgQ29yZSBBd2FyZW5lc3MgU0RLIGFuZCBDb3Jkb3ZhIHBsYXRmb3JtLiBUaGlzIHBsdWdpbiBkZW1vbnN0cmF0ZXMgd2lkZS1yYW5naW5nIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIEhNUyBDb3JlIEF3YXJlbmVzcyBTREsuXG4gKi9cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6ICdITVNBd2FyZW5lc3MnLFxuICAgIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hd2FyZW5lc3MnLFxuICAgIHBsdWdpblJlZjogJ0hNU0F3YXJlbmVzcycsXG4gICAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW4nLFxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TQXdhcmVuZXNzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBJdCBjaGVja3MgdGhlIHBlcm1pc3Npb25zIHJlcXVpcmVkIHRvIHVzZSB0aGlzIEtpdC5cbiAgICAgKiBAcGFyYW0gIHtITVNQZXJtaXNzaW9ufSBwZXJtaXNzaW9uIFJlcHJlc2VudHMgdGhlIGxpc3QgaW4gd2hpY2ggcGVybWlzc2lvbiBuYW1lcyBhcmUga2VwdC5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXG4gICAgICovXG4gICAgaGFzUGVybWlzc2lvbihwZXJtaXNzaW9uOiBITVNQZXJtaXNzaW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIE9idGFpbnMgdGhlIG5lY2Vzc2FyeSBwZXJtaXNzaW9ucyB0byB1c2UgdGhlIHNlcnZpY2VzLlxuICAgICAqIEBwYXJhbSAge0hNU1Blcm1pc3Npb259IHBlcm1pc3Npb24gUmVwcmVzZW50cyB0aGUgbGlzdCBpbiB3aGljaCBwZXJtaXNzaW9uIG5hbWVzIGFyZSBrZXB0LlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHJlcXVlc3RQZXJtaXNzaW9uKHBlcm1pc3Npb246IEhNU1Blcm1pc3Npb24pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIE9idGFpbnMgdGhlIG5lY2Vzc2FyeSBwZXJtaXNzaW9ucyB0byB1c2UgdGhlIHNlcnZpY2VzLlxuICAgICAqIEBwYXJhbSAge0hNU1Blcm1pc3Npb25bXX0gcGVybWlzc2lvbnMgUmVwcmVzZW50cyB0aGUgbGlzdCBpbiB3aGljaCBwZXJtaXNzaW9uIG5hbWVzIGFyZSBrZXB0LlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHJlcXVlc3RQZXJtaXNzaW9ucyhwZXJtaXNzaW9uczogSE1TUGVybWlzc2lvbltdKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGVuYWJsZXMgSE1TTG9nZ2VyIGNhcGFiaWxpdHkgd2hpY2ggaXMgdXNlZCBmb3Igc2VuZGluZyB1c2FnZSBhbmFseXRpY3Mgb2YgQXdhcmVuZXNzIFNESydzIG1ldGhvZHMgdG8gaW1wcm92ZSB0aGUgc2VydmljZSBxdWFsaXR5LlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGVuYWJsZUxvZ2dlcigpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBkaXNhYmxlcyB0aGUgSE1TTG9nZ2VyIGNhcGFiaWxpdHkgd2hpY2ggaXMgdXNlZCBmb3Igc2VuZGluZyB1c2FnZSBhbmFseXRpY3Mgb2YgQXdhcmVuZXNzIFNESydzIG1ldGhvZHMgdG8gaW1wcm92ZSB0aGUgc2VydmljZSBxdWFsaXR5LlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGRpc2FibGVMb2dnZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogJ0hNU0F3YXJlbmVzcycsXG4gICAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWF3YXJlbmVzcycsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICAgIHBsdWdpblJlZjogJ0F3YXJlbmVzc0NhcHR1cmUnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXdhcmVuZXNzQ2FwdHVyZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogT2J0YWlucyB0aGUgc3RhdHVzIG9mIGFuIGF1ZGlvIGRldmljZSAoY29ubmVjdGVkIG9yIGRpc2Nvbm5lY3RlZCkuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxuICAgICAqL1xuICAgIGdldEhlYWRzZXRTdGF0dXMoKTogUHJvbWlzZTxIZWFkc2V0U3RhdHVzUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBPYnRhaW5zIHRoZSBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIG9mIHRoZSBsb2NhdGlvbi5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXG4gICAgICovXG4gICAgZ2V0TG9jYXRpb24oKTogUHJvbWlzZTxMb2NhdGlvblJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogT2J0YWlucyB1c2VyIGJlaGF2aW9yLCBzdWNoIGFzIHdhbGtpbmcsIHJ1bm5pbmcsIGN5Y2xpbmcsIGRyaXZpbmcsIG9yIHN0YXlpbmcgc3RpbGwuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxuICAgICAqL1xuICAgIGdldEJlaGF2aW9yU3RhdHVzKCk6IFByb21pc2U8QmVoYXZpb3JSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSAge0JsdWV0b290aERldmljZX0gYmx1ZW9vdGhEZXZpY2UgSW5kaWNhdGVzIGJsdWV0b290aCBkZXZpY2UuXG4gICAgICogT2J0YWluIHRoZSBzdGF0dXMgb2YgdGhlIHBob25lLCBmb3IgZXhhbXBsZSwgd2hldGhlciBCbHVldG9vdGggaXMgY29ubmVjdGVkIG9yIG5vdC5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXG4gICAgICovXG4gICAgZ2V0Qmx1ZXRvb3RoU3RhdHVzKGJsdWVvb3RoRGV2aWNlOiBCbHVldG9vdGhEZXZpY2UpOiBQcm9taXNlPEJsdWV0b290aFN0YXR1c1Jlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGRldmljZSBoYXMgYXBwcm9hY2hlZCwgY29ubmVjdGVkIHRvLCBvciBkaXNjb25uZWN0ZWQgZnJvbSBhIHJlZ2lzdGVyZWQgYmVhY29uLlxuICAgICAqIEBwYXJhbSAge0JlYWNvblN0YXR1c0ZpbHRlcn0gYmVhY29uU3RhdHVzUmVxdWVzdCBCZWFjb24gU3RhdHVzLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGdldEJlYWNvblN0YXR1cyhiZWFjb25TdGF0dXNSZXF1ZXN0OiBCZWFjb25TdGF0dXNGaWx0ZXIpOiBQcm9taXNlPEJlYWNvblN0YXR1c1Jlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhlIHBob25lIHN0YXR1cyBhd2FyZW5lc3MgY2FwYWJpbGl0eSBpcyBzdXBwb3J0ZWQsIGluY2x1ZGluZyB0aGUgYXdhcmVuZXNzIG9mIHRoZSBhcHAgc3RhdHVzLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcbiAgICAgKi9cbiAgICBnZXRBcHBsaWNhdGlvblN0YXR1cygpOiBQcm9taXNlPEFwcGxpY2F0aW9uU3RhdHVzUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBPYnRhaW5zIHRoZSBpbGx1bWluYW5jZSBvZiB0aGUgZW52aXJvbm1lbnQgd2hlcmUgdGhlIGRldmljZSBpcyBsb2NhdGVkLiBUaGUgdW5pdCBpcyBsdXguIFRoZSBpbGx1bWluYW5jZSBpcyB0aGUgaW50ZW5zaXR5IHJlY2VpdmVkIGJ5IHRoZSBsaWdodCBzZW5zb3Igb2YgdGhlIGRldmljZS4gV2hlbiB0aGUgbGlnaHQgc2Vuc29yIGlzIGJsb2NrZWQgb3IgaWxsdW1pbmF0ZWQgYnkgc3Ryb25nIGxpZ2h0LCB0aGUgb2J0YWluZWQgaWxsdW1pbmFuY2UgY2hhbmdlcyBhY2NvcmRpbmdseS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXG4gICAgICovXG4gICAgZ2V0TGlnaHRJbnRlbnNpdHkoKTogUHJvbWlzZTxBbWJpZW50TGlnaHRSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIE9idGFpbiB0aGUgc3RhdHVzIG9mIHRoZSBwaG9uZSwgZm9yIGV4YW1wbGUsIHdoZXRoZXIgdGhlIHNjcmVlbiBpcyBvbiBvciBvZmYuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxuICAgICAqL1xuICAgIGdldFNjcmVlblN0YXR1cygpOiBQcm9taXNlPFNjcmVlblN0YXR1c1Jlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogT2J0YWlucyB0aGUgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBvZiB0aGUgY3VycmVudCBsb2NhdGlvbi5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXG4gICAgICovXG4gICAgZ2V0Q3VycmVudExvY2F0aW9uKCk6IFByb21pc2U8TG9jYXRpb25SZXNwb25zZT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIE9idGFpbiB0aGUgc3RhdHVzIG9mIHRoZSBwaG9uZSwgZm9yIGV4YW1wbGUsIHdoZXRoZXIgdGhlIHN5c3RlbSBpcyBpbiBkYXJrIG1vZGUuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxuICAgICAqL1xuICAgIGdldERhcmtNb2RlU3RhdHVzKCk6IFByb21pc2U8RGFya21vZGVTdGF0dXNSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIE9idGFpbiB0aGUgc3RhdHVzIG9mIHRoZSBwaG9uZSwgZm9yIGV4YW1wbGUsIHdoZXRoZXIgdGhlIGFwcCBpcyBzdGFydGVkIG9yIGNsb3NlZCwgd2hldGhlciBXaS1GaSBpcyBjb25uZWN0ZWQgb3Igbm90LlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcbiAgICAgKi9cbiAgICBnZXRXaWZpU3RhdHVzKCk6IFByb21pc2U8V2lmaVN0YXR1c1Jlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogUXVlcmllcyB0aGUgd2VhdGhlciBpbmZvcm1hdGlvbiBvZiB0aGUgZGV2aWNlIGxvY2F0aW9uIG9yIGEgc3BlY2lmaWVkIGxvY2F0aW9uLiBXZWF0aGVyIG9mIHRoZSBjdXJyZW50IGRheSAoMjQgaG91cnMpIGFuZCB0aGUgbmV4dCBzZXZlbiBkYXlzIChpbmNsdWRpbmcgdGhlIGN1cnJlbnQgZGF5KSBjYW4gYmUgcXVlcmllZC4gXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxuICAgICAqL1xuICAgIGdldFdlYXRoZXJCeURldmljZSgpOiBQcm9taXNlPFdlYXRoZXJTdGF0dXNSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFF1ZXJpZXMgdGhlIHdlYXRoZXIgaW5mb3JtYXRpb24gb2YgdGhlIGRldmljZSBsb2NhdGlvbiBvciBhIHNwZWNpZmllZCBsb2NhdGlvbi4gV2VhdGhlciBvZiB0aGUgY3VycmVudCBkYXkgKDI0IGhvdXJzKSBhbmQgdGhlIG5leHQgc2V2ZW4gZGF5cyAoaW5jbHVkaW5nIHRoZSBjdXJyZW50IGRheSkgY2FuIGJlIHF1ZXJpZWQuIFxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcbiAgICAgKi9cbiAgICBnZXRXZWF0aGVyQnlJUCgpOiBQcm9taXNlPFdlYXRoZXJTdGF0dXNSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFF1ZXJpZXMgdGhlIHdlYXRoZXIgaW5mb3JtYXRpb24gb2YgdGhlIGRldmljZSBsb2NhdGlvbiBvciBhIHNwZWNpZmllZCBsb2NhdGlvbi4gV2VhdGhlciBvZiB0aGUgY3VycmVudCBkYXkgKDI0IGhvdXJzKSBhbmQgdGhlIG5leHQgc2V2ZW4gZGF5cyAoaW5jbHVkaW5nIHRoZSBjdXJyZW50IGRheSkgY2FuIGJlIHF1ZXJpZWQuIFxuICAgICAqIEBwYXJhbSAge1dlYXRoZXJQb3NpdGlvbn0gd2VhdGhlckJ5UG9zaXRpb25SZXF1ZXN0IFdlYXRoZXIgYnkgUG9zaXRpb24uXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxuICAgICAqL1xuICAgIGdldFdlYXRoZXJCeVBvc2l0aW9uKHdlYXRoZXJCeVBvc2l0aW9uUmVxdWVzdDogV2VhdGhlclBvc2l0aW9uKTogUHJvbWlzZTxXZWF0aGVyU3RhdHVzUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIE9idGFpbnMgdGhlIGN1cnJlbnQgbG9jYWwgdGltZSBvciB0aW1lIG9mIGEgc3BlY2lmaWVkIGxvY2F0aW9uLCBzdWNoIGFzIHdvcmtpbmcgZGF5LCB3ZWVrZW5kLCBob2xpZGF5LCBtb3JuaW5nLCBhZnRlcm5vb24sIGV2ZW5pbmcsIG9yIGxhdGUgbmlnaHQuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxuICAgICAqL1xuICAgIGdldFRpbWVDYXRlZ29yaWVzKCk6IFByb21pc2U8VGltZUNhdGVnb3JpZXNSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIE9idGFpbnMgdGhlIGN1cnJlbnQgbG9jYWwgdGltZSBvciB0aW1lIG9mIGEgc3BlY2lmaWVkIGxvY2F0aW9uLCBzdWNoIGFzIHdvcmtpbmcgZGF5LCB3ZWVrZW5kLCBob2xpZGF5LCBtb3JuaW5nLCBhZnRlcm5vb24sIGV2ZW5pbmcsIG9yIGxhdGUgbmlnaHQuXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBjb3VudHJ5Q29kZSBUaW1lIENhdGVnb3JpZXMgQnkgQ29udHJ5Y29kZSByZXF1ZXN0LlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcbiAgICAgKi9cbiAgICBnZXRUaW1lQ2F0ZWdvcmllc0J5Q291bnRyeUNvZGUoY291bnRyeUNvZGU6IHN0cmluZyk6IFByb21pc2U8VGltZUNhdGVnb3JpZXNSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIE9idGFpbnMgdGhlIGN1cnJlbnQgbG9jYWwgdGltZSBvciB0aW1lIG9mIGEgc3BlY2lmaWVkIGxvY2F0aW9uLCBzdWNoIGFzIHdvcmtpbmcgZGF5LCB3ZWVrZW5kLCBob2xpZGF5LCBtb3JuaW5nLCBhZnRlcm5vb24sIGV2ZW5pbmcsIG9yIGxhdGUgbmlnaHQuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxuICAgICAqL1xuICAgIGdldFRpbWVDYXRlZ29yaWVzQnlJUCgpOiBQcm9taXNlPFRpbWVDYXRlZ29yaWVzUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBPYnRhaW5zIHRoZSBjdXJyZW50IGxvY2FsIHRpbWUgb3IgdGltZSBvZiBhIHNwZWNpZmllZCBsb2NhdGlvbiwgc3VjaCBhcyB3b3JraW5nIGRheSwgd2Vla2VuZCwgaG9saWRheSwgbW9ybmluZywgYWZ0ZXJub29uLCBldmVuaW5nLCBvciBsYXRlIG5pZ2h0LlxuICAgICAqIEBwYXJhbSAge1RpbWVDYXRlZ29yaWVzQnlVc2VyUmVxdWVzdH0gdGltZUNhdGVnb3JpZXNCeVVzZXJSZXF1ZXN0IFRpbWUgQ2F0ZWdvcmllcyBCeSBVc2VyIHJlcXVlc3QuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxuICAgICAqL1xuICAgIGdldFRpbWVDYXRlZ29yaWVzQnlVc2VyKHRpbWVDYXRlZ29yaWVzQnlVc2VyUmVxdWVzdDogVGltZUNhdGVnb3JpZXNCeVVzZXJSZXF1ZXN0KTogUHJvbWlzZTxUaW1lQ2F0ZWdvcmllc1Jlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogT2J0YWlucyB0aGUgY3VycmVudCBsb2NhbCB0aW1lIG9yIHRpbWUgb2YgYSBzcGVjaWZpZWQgbG9jYXRpb24sIHN1Y2ggYXMgd29ya2luZyBkYXksIHdlZWtlbmQsIGhvbGlkYXksIG1vcm5pbmcsIGFmdGVybm9vbiwgZXZlbmluZywgb3IgbGF0ZSBuaWdodC5cbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IGZ1dHVyZVRpbWVzdGFtcCBUaW1lIENhdGVnb3JpZXMgQnkgRnV0dXJlIHJlcXVlc3QuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxuICAgICAqL1xuICAgIGdldFRpbWVDYXRlZ29yaWVzRm9yRnV0dXJlKGZ1dHVyZVRpbWVzdGFtcDogbnVtYmVyKTogUHJvbWlzZTxUaW1lQ2F0ZWdvcmllc1Jlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogSXQgZW5hYmxlcyB0aGUgdXBkYXRlIHdpbmRvdy5cbiAgICAgKiBAcGFyYW0gIHtib29sZWFufSBpc0VuYWJsZSBib29sZWFuIGVuYWJsZVVwZGF0ZVdpbmRvdy5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXG4gICAgICovXG4gICAgZW5hYmxlVXBkYXRlV2luZG93KGlzRW5hYmxlOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAqIEl0IGVuYWJsZXMgdGhlIHVwZGF0ZSB3aW5kb3cuXG4gKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXG4gKi9cbiAgICBxdWVyeVN1cHBvcnRpbmdDYXBhYmlsaXRpZXMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG59XG4vLyBBd2FyZW5lc3NDYXB0dXJlIEludGVyZmFjZXMgLy9cblxuZXhwb3J0IGludGVyZmFjZSBXZWF0aGVyQnlQb3NpdGlvblJlcXVlc3Qge1xuICAgIHdlYXRoZXJQb3NpdGlvbjogV2VhdGhlclBvc2l0aW9uO1xufVxuZXhwb3J0IGludGVyZmFjZSBXZWF0aGVyUG9zaXRpb24ge1xuICAgIG1Db3VudHJ5Pzogc3RyaW5nIHwgbnVsbCxcbiAgICBtUHJvdmluY2U/OiBzdHJpbmcgfCBudWxsLFxuICAgIG1DaXR5OiBzdHJpbmcsXG4gICAgbURpc3RyaWN0Pzogc3RyaW5nIHwgbnVsbCxcbiAgICBtQ291bnR5Pzogc3RyaW5nIHwgbnVsbCxcbiAgICBtTG9jYWxlOiBzdHJpbmcsXG59XG5leHBvcnQgaW50ZXJmYWNlIEVuYWJsZVVwZGF0ZVdpbmRvd1JlcXVlc3Qge1xuICAgIGlzRW5hYmxlOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVDYXRlZ29yaWVzQnlVc2VyUmVxdWVzdCB7XG4gICAgbG9jYXRpb246IENvb3JkaW5hdGU7XG59XG5leHBvcnQgaW50ZXJmYWNlIENvb3JkaW5hdGUge1xuICAgIGxhdGl0dWRlOiBudW1iZXI7XG4gICAgbG9uZ2l0dWRlOiBudW1iZXJcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVGltZUNhdGVnb3JpZXNCeUNvdW50cnlSZXF1ZXN0IHtcbiAgICBjb3VudHJ5Q29kZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBUaW1lQ2F0ZWdvcmllc0ZvckZ1dHVyZVJlcXVlc3Qge1xuICAgIGZ1dHVyZVRpbWVzdGFtcDogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBCZWFjb25TdGF0dXNSZXF1ZXN0IHtcbiAgICBiZWFjb25TdGF0dXNGaWx0ZXI6IEJlYWNvblN0YXR1c0ZpbHRlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQmVhY29uU3RhdHVzRmlsdGVyIHtcbiAgICBuYW1lc3BhY2U6IHN0cmluZztcbiAgICB0eXBlPzogc3RyaW5nIHwgbnVsbDtcbiAgICBjb250ZW50PzogQXJyYXk8YW55PiB8IG51bGw7XG59XG5cbi8vIEF3YXJlbmVzc0JhcnJpZXIgSW50ZXJmYWNlcyAvL1xuXG5leHBvcnQgaW50ZXJmYWNlIEhlYWRzZXRTdGF0dXNSZXNwb25zZSB7XG4gICAgaGVhZHNldFN0YXR1czogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBCbHVldG9vdGhTdGF0dXNSZXNwb25zZSB7XG4gICAgYmx1ZXRvb3RoU3RhdHVzOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFdpZmlTdGF0dXNSZXNwb25zZSB7XG4gICAgd2lmaVN0YXR1czogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBTY3JlZW5TdGF0dXNSZXNwb25zZSB7XG4gICAgc2NyZWVuU3RhdHVzOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIERhcmttb2RlU3RhdHVzUmVzcG9uc2Uge1xuICAgIGRhcmttb2RlU3RhdHVzOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uU3RhdHVzUmVzcG9uc2Uge1xuICAgIGFwcGxpY2F0aW9uU3RhdHVzOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIEFtYmllbnRMaWdodFJlc3BvbnNlIHtcbiAgICBsaWdodEludGVuc2l0eTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvblJlc3BvbnNlIHtcbiAgICBsYXRpdHVkZTogbnVtYmVyO1xuICAgIGxvbmdpdHVkZTogbnVtYmVyO1xuICAgIGFsdGl0dWRlOiBudW1iZXI7XG4gICAgc3BlZWQ6IG51bWJlcjtcbiAgICBiZWFyaW5nOiBudW1iZXI7XG4gICAgYWNjdXJhY3k6IG51bWJlcjtcbiAgICB2ZXJ0aWNhbEFjY3VyYWN5TWV0ZXJzPzogbnVtYmVyIHwgbnVsbDtcbiAgICBiZWFyaW5nQWNjdXJhY3lEZWdyZWVzPzogbnVtYmVyIHwgbnVsbDtcbiAgICBzcGVlZEFjY3VyYWN5TWV0ZXJzUGVyU2Vjb25kPzogbnVtYmVyIHwgbnVsbDtcbiAgICB0aW1lOiBudW1iZXI7XG4gICAgZnJvbU1vY2tQcm92aWRlcjogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBCZWhhdmlvclJlc3BvbnNlIHtcbiAgICBlbGFwc2VkUmVhbHRpbWVNaWxsaXM6IG51bWJlcjtcbiAgICB0aW1lOiBudW1iZXI7XG4gICAgbW9zdExpa2VseUJlaGF2aW9yOiBNb3N0TGlrZWx5QmVoYXZpb3I7XG4gICAgcHJvYmFibGVCZWhhdmlvcjogQXJyYXk8TW9zdExpa2VseUJlaGF2aW9yPjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTW9zdExpa2VseUJlaGF2aW9yIHtcbiAgICBjb25maWRlbmNlOiBudW1iZXI7XG4gICAgdHlwZTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBXZWF0aGVyU3RhdHVzUmVzcG9uc2Uge1xuICAgIGRhaWx5V2VhdGhlcj86IChEYWlseVdlYXRoZXIpW10gfCBudWxsO1xuICAgIGhvdXJseVdlYXRoZXI/OiAoSG91cmx5V2VhdGhlcilbXSB8IG51bGw7XG4gICAgbGl2ZUluZm8/OiAobnVsbClbXSB8IG51bGw7XG4gICAgYXFpPzogQXFpIHwgbnVsbDtcbiAgICB3ZWF0aGVyU2l0dWF0aW9uOiBXZWF0aGVyU2l0dWF0aW9uO1xufVxuZXhwb3J0IGludGVyZmFjZSBEYWlseVdlYXRoZXIge1xuICAgIGFxaVZhbHVlOiBudW1iZXI7XG4gICAgZGF0ZVRpbWVTdGFtcDogbnVtYmVyO1xuICAgIG1heFRlbXBDOiBudW1iZXI7XG4gICAgbWF4VGVtcEY6IG51bWJlcjtcbiAgICBtaW5UZW1wQzogbnVtYmVyO1xuICAgIG1pblRlbXBGOiBudW1iZXI7XG4gICAgbW9vblBoYXNlOiBzdHJpbmc7XG4gICAgbW9vblJpc2U6IG51bWJlcjtcbiAgICBtb29uU2V0OiBudW1iZXI7XG4gICAgc3VuUmlzZTogbnVtYmVyO1xuICAgIHN1blNldDogbnVtYmVyO1xuICAgIHNpdHVhdGlvbkRheTogU2l0dWF0aW9uRGF5T3JTaXR1YXRpb25OaWdodDtcbiAgICBzaXR1YXRpb25OaWdodDogU2l0dWF0aW9uRGF5T3JTaXR1YXRpb25OaWdodDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2l0dWF0aW9uRGF5T3JTaXR1YXRpb25OaWdodCB7XG4gICAgY25XZWF0aGVySWQ6IG51bWJlcjtcbiAgICB3ZWF0aGVySWQ6IG51bWJlcjtcbiAgICB3aW5kRGlyOiBzdHJpbmc7XG4gICAgd2luZExldmVsOiBudW1iZXI7XG4gICAgd2luZFNwZWVkOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIEhvdXJseVdlYXRoZXIge1xuICAgIGNuV2VhdGhlcklkOiBudW1iZXI7XG4gICAgZGF0ZVRpbWVTdGFtcDogbnVtYmVyO1xuICAgIHJhaW5Qcm9iYWJpbGl0eTogbnVtYmVyO1xuICAgIHRlbXBDOiBudW1iZXI7XG4gICAgdGVtcEY6IG51bWJlcjtcbiAgICB3ZWF0aGVySWQ6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXFpIHtcbiAgICBhcWlWYWx1ZTogbnVtYmVyO1xuICAgIENvOiBudW1iZXI7XG4gICAgTm8yOiBudW1iZXI7XG4gICAgTzM6IG51bWJlcjtcbiAgICBQbTEwOiBudW1iZXI7XG4gICAgUG0yNTogbnVtYmVyO1xuICAgIFNvMjogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBXZWF0aGVyU2l0dWF0aW9uIHtcbiAgICBjaXR5OiBDaXR5O1xuICAgIHNpdHVhdGlvbjogU2l0dWF0aW9uO1xufVxuZXhwb3J0IGludGVyZmFjZSBDaXR5IHtcbiAgICBjaXR5Q29kZTogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBwcm92aW5jZU5hbWU6IHN0cmluZztcbiAgICB0aW1lWm9uZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBTaXR1YXRpb24ge1xuICAgIGNuV2VhdGhlcklkOiBudW1iZXI7XG4gICAgaHVtaWRpdHk6IHN0cmluZztcbiAgICBwcmVzc3VyZTogbnVtYmVyO1xuICAgIHJlYWxGZWVsQzogbnVtYmVyO1xuICAgIHJlYWxGZWVsRjogbnVtYmVyO1xuICAgIHRlbXBlcmF0dXJlQzogbnVtYmVyO1xuICAgIHRlbXBlcmF0dXJlRjogbnVtYmVyO1xuICAgIHVwZGF0ZVRpbWU6IG51bWJlcjtcbiAgICB1dkluZGV4OiBudW1iZXI7XG4gICAgd2VhdGhlcklkOiBudW1iZXI7XG4gICAgd2luZERpcjogc3RyaW5nO1xuICAgIHdpbmRTcGVlZDogbnVtYmVyO1xuICAgIHdpbmRMZXZlbDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhcGFiaWxpdHlSZXNwb25zZSB7XG4gICAgZGV2aWNlU3VwcG9ydENhcGFiaWxpdGllcz86IERldmljZVN1cHBvcnRDYXBhYmlsaXRpZXNbXSB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIERldmljZVN1cHBvcnRDYXBhYmlsaXRpZXMge1xuICAgIGNhcGFiaWxpdHlTdGF0dXM6IG51bWJlcjtcbiAgICBjYXBhYmlsaXR5U3RhdHVzTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVDYXRlZ29yaWVzUmVzcG9uc2Uge1xuICAgIHRpbWVDYXRlZ29yaWVzPzogVGltZUNhdGVnb3JpZXNbXSB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIFRpbWVDYXRlZ29yaWVzIHtcbiAgICBUaW1lQmFycmllcjogbnVtYmVyO1xuICAgIFRpbWVCYXJyaWVyTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJlYWNvblN0YXR1c1Jlc3BvbnNlIHtcbiAgICBiZWFjb25EYXRhPzogQmVhY29uRGF0YVtdIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQmVhY29uRGF0YSB7XG4gICAgQmVoYXZpb3JCYXJyaWVyOiBudW1iZXI7XG4gICAgQmVoYXZpb3JCYXJyaWVyTmFtZTogc3RyaW5nO1xufVxuXG5cbi8vIEF3YXJlbmVzc0JhcnJpZXIgUmV0dXJuIFxuXG5leHBvcnQgaW50ZXJmYWNlIEJhcnJpZXJTdGF0dXMge1xuICAgIGJhcnJpZXJMYWJlbDogc3RyaW5nO1xuICAgIHByZXNlbnRTdGF0dXM6IG51bWJlcjtcbiAgICBsYXN0U3RhdHVzOiBudW1iZXI7XG4gICAgbGFzdEJhcnJpZXJVcGRhdGVUaW1lOiBudW1iZXI7XG59XG5cbi8vRW51bSB2YWx1ZVxuZXhwb3J0IGVudW0gSGVhZHNldFN0YXR1cyB7XG4gICAgQ09OTkVDVEVEID0gMSxcbiAgICBESVNDT05ORUNURUQgPSAwLFxufVxuZXhwb3J0IGVudW0gV2lmaVN0YXR1cyB7XG4gICAgQ09OTkVDVEVEID0gMSxcbiAgICBESVNDT05ORUNURUQgPSA0LFxuICAgIEVOQUJMRUQgPSAzLFxuICAgIERJU0FCTEVEID0gLTEsXG59XG5leHBvcnQgZW51bSBCbHVldG9vdGhTdGF0dXMge1xuICAgIENPTk5FQ1RFRCA9IDEsXG4gICAgRElTQ09OTkVDVEVEID0gMCxcbn1cbmV4cG9ydCBlbnVtIFNjcmVlblN0YXR1cyB7XG4gICAgU0NSRUVOT04gPSAxLFxuICAgIFNDUkVFTk9GRiA9IDAsXG4gICAgVU5MT0NLID0gMixcbn1cbmV4cG9ydCBlbnVtIEJlaGF2aW9yQmFycmllckNvbnN0YW50IHtcbiAgICBCRUhBVklPUl9JTl9WRUhJQ0xFID0gMCxcbiAgICBCRUhBVklPUl9PTl9CSUNZQ0xFID0gMSxcbiAgICBCRUhBVklPUl9PTl9GT09UID0gMixcbiAgICBCRUhBVklPUl9TVElMTCA9IDMsXG4gICAgQkVIQVZJT1JfV0FMS0lORyA9IDcsXG4gICAgQkVIQVZJT1JfUlVOTklORyA9IDgsXG59XG5leHBvcnQgZW51bSBCbHVldG9vdGhEZXZpY2Uge1xuICAgIERFVklDRV9DQVIgPSAwXG59XG5leHBvcnQgZW51bSBUaW1lQmFycmllckNvbnN0YW50cyB7XG4gICAgU1VOUklTRV9DT0RFID0gMCxcbiAgICBTVU5TRVRfQ09ERSA9IDEsXG4gICAgVElNRV9DQVRFR09SWV9NT1JOSU5HID0gMSxcbiAgICBUSU1FX0NBVEVHT1JZX0FGVEVSTk9PTiA9IDIsXG4gICAgVElNRV9DQVRFR09SWV9FVkVOSU5HID0gMyxcbiAgICBUSU1FX0NBVEVHT1JZX05JR0hUID0gNCxcbiAgICBUSU1FX0NBVEVHT1JZX0hPTElEQVkgPSA1LFxuICAgIFRJTUVfQ0FURUdPUllfV0VFS0RBWSA9IDYsXG4gICAgVElNRV9DQVRFR09SWV9XRUVLRU5EID0gNyxcbiAgICBUSU1FX0NBVEVHT1JZX05PVF9IT0xJREFZID0gOCxcbiAgICBTVU5EQVlfQ09ERSA9IDEsXG4gICAgTU9OREFZX0NPREUgPSAyLFxuICAgIFRVRVNEQVlfQ09ERSA9IDMsXG4gICAgV0VETkVTREFZX0NPREUgPSA0LFxuICAgIFRIVVJTREFZX0NPREUgPSA1LFxuICAgIEZSSURBWV9DT0RFID0gNixcbiAgICBTQVRVUkRBWV9DT0RFID0gNyxcbn1cbmV4cG9ydCBlbnVtIEhNU1Blcm1pc3Npb24ge1xuICAgIFBFUk1JU1NJT05fQUNDRVNTX0ZJTkVfTE9DQVRJT04gPSBcImFuZHJvaWQucGVybWlzc2lvbi5BQ0NFU1NfRklORV9MT0NBVElPTlwiLFxuICAgIFBFUk1JU1NJT05fSFVBV0VJX0FDVElWSVRZX1JFQ09HTklUSU9OID0gXCJjb20uaHVhd2VpLmhtcy5wZXJtaXNzaW9uLkFDVElWSVRZX1JFQ09HTklUSU9OXCIsXG4gICAgUEVSTUlTU0lPTl9BQ1RJVklUWV9SRUNPR05JVElPTiA9IFwiYW5kcm9pZC5wZXJtaXNzaW9uLkFDVElWSVRZX1JFQ09HTklUSU9OXCIsXG4gICAgUEVSTUlTU0lPTl9CTFVFVE9PVEggPSBcImFuZHJvaWQucGVybWlzc2lvbi5CTFVFVE9PVEhcIixcbiAgICBQRVJNSVNTSU9OX0NIQU5HRV9XSUZJX1NUQVRFID0gXCJhbmRyb2lkLnBlcm1pc3Npb24uQ0hBTkdFX1dJRklfU1RBVEVcIixcbiAgICBQRVJNSVNTSU9OX0FDQ0VTU19DT0FSU0VfTE9DQVRJT04gPSBcImFuZHJvaWQucGVybWlzc2lvbi5BQ0NFU1NfQ09BUlNFX0xPQ0FUSU9OXCIsXG4gICAgUEVSTUlTU0lPTl9BQ0NFU1NfQkFDS0dST1VORF9MT0NBVElPTiA9IFwiYW5kcm9pZC5wZXJtaXNzaW9uLkFDQ0VTU19CQUNLR1JPVU5EX0xPQ0FUSU9OXCJcbn1cblxuXG5leHBvcnQgY2xhc3MgQXdhcmVuZXNzQmFycmllciB7XG4gICAgcHJpdmF0ZSBjb3Jkb3ZhQmFycmllcjogYW55O1xuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihjb3Jkb3ZhQmFycmllcjogYW55KSB7XG4gICAgICAgIHRoaXMuY29yZG92YUJhcnJpZXIgPSBjb3Jkb3ZhQmFycmllcjtcbiAgICB9XG4gICAgc3Vic2NyaWJlKGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkKTogQXdhcmVuZXNzQmFycmllciB7XG4gICAgICAgIHRoaXMuY29yZG92YUJhcnJpZXIuc3Vic2NyaWJlKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNhdGNoKGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkKTogQXdhcmVuZXNzQmFycmllciB7XG4gICAgICAgIHRoaXMuY29yZG92YUJhcnJpZXIuY2F0Y2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcnVuKGJhcnJpZXJMYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29yZG92YUJhcnJpZXIucnVuKGJhcnJpZXJMYWJlbCk7XG4gICAgfVxuICAgIHJ1bkluQmFja2dyb3VuZChiYXJyaWVyTGFiZWw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb3Jkb3ZhQmFycmllci5ydW5JbkJhY2tncm91bmQoYmFycmllckxhYmVsKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIEJhcnJpZXJNYW5hZ2VyIHtcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgc3RhdGljIGRlbGV0ZUFsbEJhcnJpZXJzKHN1Y2Nlc3M6IGFueSwgZXJyb3I6IGFueSk6IGFueSB7XG4gICAgICAgICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5kZWxldGVBbGxCYXJyaWVycyhzdWNjZXNzLCBlcnJvcik7XG4gICAgfVxuICAgIHN0YXRpYyBkZWxldGVCYXJyaWVyV2l0aExhYmVscyhzdWNjZXNzOiBhbnksIGVycm9yOiBhbnksIHBhcmFtczogYW55KTogYW55IHtcbiAgICAgICAgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLmRlbGV0ZUJhcnJpZXJXaXRoTGFiZWxzKHN1Y2Nlc3MsIGVycm9yLCBwYXJhbXMpO1xuICAgIH1cbiAgICBzdGF0aWMgdW5SZWdpc3RlclJlY2VpdmVyKHN1Y2Nlc3M6IGFueSwgZXJyb3I6IGFueSk6IGFueSB7XG4gICAgICAgICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci51blJlZ2lzdGVyUmVjZWl2ZXIoc3VjY2VzcywgZXJyb3IpO1xuICAgIH1cbiAgICBzdGF0aWMgcXVlcnlCYXJyaWVyc1dpdGhCYXJyaWVyS2V5cyhzdWNjZXNzOiBhbnksIGVycm9yOiBhbnksIHBhcmFtczogYW55KTogYW55IHtcbiAgICAgICAgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLnF1ZXJ5QmFycmllcnNXaXRoQmFycmllcktleXMoc3VjY2VzcywgZXJyb3IsIHBhcmFtcyk7XG4gICAgfVxuICAgIHN0YXRpYyBxdWVyeUJhcnJpZXJzV2l0aEFsbEJhcnJpZXJzKHN1Y2Nlc3M6IGFueSwgZXJyb3I6IGFueSk6IGFueSB7XG4gICAgICAgICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5xdWVyeUJhcnJpZXJzV2l0aEFsbEJhcnJpZXJzKHN1Y2Nlc3MsIGVycm9yKTtcbiAgICB9XG4gICAgc3RhdGljIHN0b3BCYWNrZ3JvdW5kU2VydmljZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5zdG9wQmFja2dyb3VuZFNlcnZpY2UoKTtcbiAgICB9XG4gICAgc3RhdGljIHNldEJhY2tncm91bmRGaWxlKGZpbGVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5zZXRCYWNrZ3JvdW5kRmlsZShmaWxlTmFtZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSGVhZHNldEJhcnJpZXIgZXh0ZW5kcyBBd2FyZW5lc3NCYXJyaWVyIHtcbiAgICBzdGF0aWMga2VlcGluZyhoZWFkc2V0U3RhdHVzOiBudW1iZXIpOiBBd2FyZW5lc3NCYXJyaWVyIHtcbiAgICAgICAgY29uc3QgYmFycmllciA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuSGVhZHNldEJhcnJpZXIoSGVhZHNldEJhcnJpZXIubmFtZSwgXCJrZWVwaW5nXCIsIFtoZWFkc2V0U3RhdHVzXSk7XG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihiYXJyaWVyKTtcbiAgICB9XG4gICAgc3RhdGljIGNvbm5lY3RpbmcoKTogQXdhcmVuZXNzQmFycmllciB7XG4gICAgICAgIGNvbnN0IGJhcnJpZXIgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkhlYWRzZXRCYXJyaWVyKEhlYWRzZXRCYXJyaWVyLm5hbWUsIFwiY29ubmVjdGluZ1wiLCBbXSk7XG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihiYXJyaWVyKTtcbiAgICB9XG4gICAgc3RhdGljIGRpc2Nvbm5lY3RpbmcoKTogQXdhcmVuZXNzQmFycmllciB7XG4gICAgICAgIGNvbnN0IGJhcnJpZXIgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkhlYWRzZXRCYXJyaWVyKEhlYWRzZXRCYXJyaWVyLm5hbWUsIFwiZGlzY29ubmVjdGluZ1wiLCBbXSk7XG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihiYXJyaWVyKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIEFtYmllbnRMaWdodEJhcnJpZXIgZXh0ZW5kcyBBd2FyZW5lc3NCYXJyaWVyIHtcbiAgICBzdGF0aWMgYWJvdmUodjogbnVtYmVyKTogQXdhcmVuZXNzQmFycmllciB7XG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkFtYmllbnRMaWdodEJhcnJpZXIoQW1iaWVudExpZ2h0QmFycmllci5uYW1lLCBcImFib3ZlXCIsIFt2XSk7XG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcbiAgICB9XG4gICAgc3RhdGljIGJlbG93KHY6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5BbWJpZW50TGlnaHRCYXJyaWVyKEFtYmllbnRMaWdodEJhcnJpZXIubmFtZSwgXCJiZWxvd1wiLCBbdl0pO1xuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XG4gICAgfVxuICAgIHN0YXRpYyByYW5nZSh2MTogbnVtYmVyLCB2MjogbnVtYmVyKTogQXdhcmVuZXNzQmFycmllciB7XG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkFtYmllbnRMaWdodEJhcnJpZXIoQW1iaWVudExpZ2h0QmFycmllci5uYW1lLCBcInJhbmdlXCIsIFt2MSwgdjJdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdpZmlCYXJyaWVyIGV4dGVuZHMgQXdhcmVuZXNzQmFycmllciB7XG4gICAgc3RhdGljIGNvbm5lY3RpbmcoczE/OiBzdHJpbmcsIHMyPzogc3RyaW5nKTogQXdhcmVuZXNzQmFycmllciB7XG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLldpZmlCYXJyaWVyKFdpZmlCYXJyaWVyLm5hbWUsIFwiY29ubmVjdGluZ1wiLCBbczEsIHMyXSk7XG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcbiAgICB9XG4gICAgc3RhdGljIGRpc2FibGluZygpOiBBd2FyZW5lc3NCYXJyaWVyIHtcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuV2lmaUJhcnJpZXIoV2lmaUJhcnJpZXIubmFtZSwgXCJkaXNhYmxpbmdcIiwgW10pO1xuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XG4gICAgfVxuICAgIHN0YXRpYyBkaXNjb25uZWN0aW5nKHMxPzogc3RyaW5nLCBzMj86IHN0cmluZyk6IEF3YXJlbmVzc0JhcnJpZXIge1xuICAgICAgICBsZXQgYXJyOiBhbnlbXSA9IFtdO1xuICAgICAgICBpZiAoczEgIT0gbnVsbCkgYXJyID0gW3MxLCBzMl07XG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLldpZmlCYXJyaWVyKFdpZmlCYXJyaWVyLm5hbWUsIFwiZGlzY29ubmVjdGluZ1wiLCBhcnIpO1xuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XG4gICAgfVxuICAgIHN0YXRpYyBlbmFibGluZygpOiBBd2FyZW5lc3NCYXJyaWVyIHtcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuV2lmaUJhcnJpZXIoV2lmaUJhcnJpZXIubmFtZSwgXCJlbmFibGluZ1wiLCBbXSk7XG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcbiAgICB9XG4gICAgc3RhdGljIGtlZXBpbmcoaTogbnVtYmVyLCBzMT86IHN0cmluZywgczI/OiBzdHJpbmcpOiBBd2FyZW5lc3NCYXJyaWVyIHtcbiAgICAgICAgbGV0IGFycjogYW55W10gPSBbaV07XG4gICAgICAgIGlmIChzMSAhPSBudWxsKSB7XG4gICAgICAgICAgICBhcnIucHVzaChzMSk7XG4gICAgICAgICAgICBhcnIucHVzaChzMik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuV2lmaUJhcnJpZXIoV2lmaUJhcnJpZXIubmFtZSwgXCJrZWVwaW5nXCIsIGFycik7XG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCbHVldG9vdGhCYXJyaWVyIGV4dGVuZHMgQXdhcmVuZXNzQmFycmllciB7XG4gICAgc3RhdGljIGNvbm5lY3RpbmcoaTogbnVtYmVyKTogQXdhcmVuZXNzQmFycmllciB7XG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkJsdWV0b290aEJhcnJpZXIoQmx1ZXRvb3RoQmFycmllci5uYW1lLCBcImNvbm5lY3RpbmdcIiwgW2ldKTtcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xuICAgIH1cbiAgICBzdGF0aWMgZGlzY29ubmVjdGluZyhpOiBudW1iZXIpOiBBd2FyZW5lc3NCYXJyaWVyIHtcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuQmx1ZXRvb3RoQmFycmllcihCbHVldG9vdGhCYXJyaWVyLm5hbWUsIFwiZGlzY29ubmVjdGluZ1wiLCBbaV0pO1xuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XG4gICAgfVxuICAgIHN0YXRpYyBrZWVwKGk6IG51bWJlciwgaTE6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CbHVldG9vdGhCYXJyaWVyKEJsdWV0b290aEJhcnJpZXIubmFtZSwgXCJrZWVwXCIsIFtpLCBpMV0pO1xuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmVoYXZpb3JCYXJyaWVyIGV4dGVuZHMgQXdhcmVuZXNzQmFycmllciB7XG5cbiAgICBzdGF0aWMgYmVnaW5uaW5nKC4uLmludHM6IG51bWJlcltdKTogQXdhcmVuZXNzQmFycmllciB7XG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkJlaGF2aW9yQmFycmllcihCZWhhdmlvckJhcnJpZXIubmFtZSwgXCJiZWdpbm5pbmdcIiwgW2ludHNdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xuICAgIH1cbiAgICBzdGF0aWMgZW5kaW5nKC4uLmludHM6IG51bWJlcltdKTogQXdhcmVuZXNzQmFycmllciB7XG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkJlaGF2aW9yQmFycmllcihCZWhhdmlvckJhcnJpZXIubmFtZSwgXCJlbmRpbmdcIiwgW2ludHNdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xuICAgIH1cbiAgICBzdGF0aWMga2VlcGluZyguLi5pbnRzOiBudW1iZXJbXSk6IEF3YXJlbmVzc0JhcnJpZXIge1xuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CZWhhdmlvckJhcnJpZXIoQmVoYXZpb3JCYXJyaWVyLm5hbWUsIFwia2VlcGluZ1wiLCBbaW50c10pO1xuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9jYXRpb25CYXJyaWVyIGV4dGVuZHMgQXdhcmVuZXNzQmFycmllciB7XG5cbiAgICBzdGF0aWMgZW50ZXIodjogbnVtYmVyLCB2MTogbnVtYmVyLCB2MjogbnVtYmVyKTogQXdhcmVuZXNzQmFycmllciB7XG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkJlaGF2aW9yQmFycmllcihMb2NhdGlvbkJhcnJpZXIubmFtZSwgXCJlbnRlclwiLCBbdiwgdjEsIHYyXSk7XG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcbiAgICB9XG4gICAgc3RhdGljIGV4aXQodjogbnVtYmVyLCB2MTogbnVtYmVyLCB2MjogbnVtYmVyKTogQXdhcmVuZXNzQmFycmllciB7XG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkJlaGF2aW9yQmFycmllcihMb2NhdGlvbkJhcnJpZXIubmFtZSwgXCJleGl0XCIsIFt2LCB2MSwgdjJdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xuICAgIH1cbiAgICBzdGF0aWMgc3RheSh2OiBudW1iZXIsIHYxOiBudW1iZXIsIHYyOiBudW1iZXIsIGw6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CZWhhdmlvckJhcnJpZXIoTG9jYXRpb25CYXJyaWVyLm5hbWUsIFwic3RheVwiLCBbdiwgdjEsIHYyLCBsXSk7XG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTY3JlZW5CYXJyaWVyIGV4dGVuZHMgQXdhcmVuZXNzQmFycmllciB7XG5cbiAgICBzdGF0aWMgc2NyZWVuT24oKTogQXdhcmVuZXNzQmFycmllciB7XG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkJlaGF2aW9yQmFycmllcihTY3JlZW5CYXJyaWVyLm5hbWUsIFwic2NyZWVuT25cIiwgW10pO1xuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XG4gICAgfVxuICAgIHN0YXRpYyBzY3JlZW5PZmYoKTogQXdhcmVuZXNzQmFycmllciB7XG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkJlaGF2aW9yQmFycmllcihTY3JlZW5CYXJyaWVyLm5hbWUsIFwic2NyZWVuT2ZmXCIsIFtdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xuICAgIH1cbiAgICBzdGF0aWMgc2NyZWVuVW5sb2NrKCk6IEF3YXJlbmVzc0JhcnJpZXIge1xuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CZWhhdmlvckJhcnJpZXIoU2NyZWVuQmFycmllci5uYW1lLCBcInNjcmVlblVubG9ja1wiLCBbXSk7XG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcbiAgICB9XG4gICAgc3RhdGljIGtlZXBpbmcoaTogbnVtYmVyKTogQXdhcmVuZXNzQmFycmllciB7XG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkJlaGF2aW9yQmFycmllcihTY3JlZW5CYXJyaWVyLm5hbWUsIFwia2VlcGluZ1wiLCBbaV0pO1xuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGltZUJhcnJpZXIgZXh0ZW5kcyBBd2FyZW5lc3NCYXJyaWVyIHtcblxuICAgIHN0YXRpYyBkdXJpbmdQZXJpb2RPZkRheSh0aW1lWm9uZTogc3RyaW5nLCBsOiBudW1iZXIsIGwxOiBudW1iZXIpOiBBd2FyZW5lc3NCYXJyaWVyIHtcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuVGltZUJhcnJpZXIoVGltZUJhcnJpZXIubmFtZSwgXCJkdXJpbmdQZXJpb2RPZkRheVwiLCBbdGltZVpvbmUsIGwsIGwxXSk7XG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcbiAgICB9XG4gICAgc3RhdGljIGR1cmluZ1BlcmlvZE9mV2VlayhpOiBudW1iZXIsIHRpbWVab25lOiBzdHJpbmcsIGw6IG51bWJlciwgbDE6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5UaW1lQmFycmllcihUaW1lQmFycmllci5uYW1lLCBcImR1cmluZ1BlcmlvZE9mV2Vla1wiLCBbaSwgdGltZVpvbmUsIGwsIGwxXSk7XG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcbiAgICB9XG4gICAgc3RhdGljIGR1cmluZ1RpbWVQZXJpb2QobDogbnVtYmVyLCBsMTogbnVtYmVyKTogQXdhcmVuZXNzQmFycmllciB7XG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLlRpbWVCYXJyaWVyKFRpbWVCYXJyaWVyLm5hbWUsIFwiZHVyaW5nVGltZVBlcmlvZFwiLCBbbCwgbDFdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xuICAgIH1cbiAgICBzdGF0aWMgaW5TdW5yaXNlT3JTdW5zZXRQZXJpb2QoaTogbnVtYmVyLCBsOiBudW1iZXIsIGwxOiBudW1iZXIpOiBBd2FyZW5lc3NCYXJyaWVyIHtcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuVGltZUJhcnJpZXIoVGltZUJhcnJpZXIubmFtZSwgXCJpblN1bnJpc2VPclN1bnNldFBlcmlvZFwiLCBbaSwgbCwgbDFdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xuICAgIH1cbiAgICBzdGF0aWMgaW5UaW1lQ2F0ZWdvcnkoaTogbnVtYmVyKTogQXdhcmVuZXNzQmFycmllciB7XG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLlRpbWVCYXJyaWVyKFRpbWVCYXJyaWVyLm5hbWUsIFwiaW5UaW1lQ2F0ZWdvcnlcIiwgW2ldKTtcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJlYWNvbkJhcnJpZXIgZXh0ZW5kcyBBd2FyZW5lc3NCYXJyaWVyIHtcblxuICAgIHN0YXRpYyBkaXNjb3ZlcihuYW1lc3BhY2U6IHN0cmluZywgdHlwZT86IHN0cmluZyB8IG51bGwsIGNvbnRlbnQ/OiBzdHJpbmdbXSB8IG51bGwpOiBBd2FyZW5lc3NCYXJyaWVyIHtcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuQmVhY29uQmFycmllcihCZWFjb25CYXJyaWVyLm5hbWUsIFwiZGlzY292ZXJcIiwgW25hbWVzcGFjZSwgdHlwZSwgY29udGVudF0pO1xuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XG4gICAgfVxuICAgIHN0YXRpYyBrZWVwKG5hbWVzcGFjZTogc3RyaW5nLCB0eXBlPzogc3RyaW5nIHwgbnVsbCwgY29udGVudD86IHN0cmluZ1tdIHwgbnVsbCk6IEF3YXJlbmVzc0JhcnJpZXIge1xuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CZWFjb25CYXJyaWVyKEJlYWNvbkJhcnJpZXIubmFtZSwgXCJrZWVwXCIsIFtuYW1lc3BhY2UsIHR5cGUsIGNvbnRlbnRdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xuICAgIH1cbiAgICBzdGF0aWMgbWlzc2VkKG5hbWVzcGFjZTogc3RyaW5nLCB0eXBlPzogc3RyaW5nIHwgbnVsbCwgY29udGVudD86IHN0cmluZ1tdIHwgbnVsbCk6IEF3YXJlbmVzc0JhcnJpZXIge1xuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CZWFjb25CYXJyaWVyKEJlYWNvbkJhcnJpZXIubmFtZSwgXCJtaXNzZWRcIiwgW25hbWVzcGFjZSwgdHlwZSwgY29udGVudF0pO1xuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29tYmluYXRpb25CYXJyaWVyIGV4dGVuZHMgQXdhcmVuZXNzQmFycmllciB7XG5cbiAgICBzdGF0aWMgb3IoLi4uYXdhcmVuZXNzOiBBd2FyZW5lc3NCYXJyaWVyW10pOiBBd2FyZW5lc3NCYXJyaWVyIHtcbiAgICAgICAgY29uc3QgYmFycmllciA9IG5ldyAoPGFueT53aW5kb3cpLkNvbWJpbmF0aW9uQmFycmllcihcIm9yXCIsIGF3YXJlbmVzcyk7XG4gICAgICAgIGJhcnJpZXIuY3VycmVudEJhcnJpZXJzID0gYXdhcmVuZXNzO1xuICAgICAgICBiYXJyaWVyLmNvbWJNZXRob2QgPSBcIm9yXCI7XG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihiYXJyaWVyKTtcbiAgICB9XG4gICAgc3RhdGljIGFuZCguLi5hd2FyZW5lc3M6IEF3YXJlbmVzc0JhcnJpZXJbXSk6IEF3YXJlbmVzc0JhcnJpZXIge1xuICAgICAgICBjb25zdCBiYXJyaWVyID0gbmV3ICg8YW55PndpbmRvdykuQ29tYmluYXRpb25CYXJyaWVyKFwiYW5kXCIsIGF3YXJlbmVzcyk7XG4gICAgICAgIGJhcnJpZXIuY3VycmVudEJhcnJpZXJzID0gYXdhcmVuZXNzO1xuICAgICAgICBiYXJyaWVyLmNvbWJNZXRob2QgPSBcImFuZFwiO1xuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoYmFycmllcik7XG4gICAgfVxuXG4gICAgc3RhdGljIG5vdChhd2FyZW5lc3M6IEF3YXJlbmVzc0JhcnJpZXIpOiBBd2FyZW5lc3NCYXJyaWVyIHtcbiAgICAgICAgY29uc3QgYmFycmllciA9IG5ldyAoPGFueT53aW5kb3cpLkNvbWJpbmF0aW9uQmFycmllcihcIm5vdFwiLCBbYXdhcmVuZXNzXSk7XG4gICAgICAgIGJhcnJpZXIuY3VycmVudEJhcnJpZXJzID0gW2F3YXJlbmVzc107XG4gICAgICAgIGJhcnJpZXIuY29tYk1ldGhvZCA9IFwibm90XCI7XG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihiYXJyaWVyKTtcbiAgICB9XG5cbn1cbiJdfQ==