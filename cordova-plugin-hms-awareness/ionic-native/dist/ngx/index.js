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
     * @param  {HMSPermission[]} permission Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    HMSAwareness.prototype.requestPermissions = function () {
        var permission = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            permission[_i] = arguments[_i];
        }
        return cordova(this, "requestPermissions", { "otherPromise": true }, arguments);
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1hd2FyZW5lc3Mvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztFQWNFOztBQUVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFjdEMsZ0NBQWlCOzs7O0lBRy9DOzs7O09BSUc7SUFDSCxvQ0FBYSxhQUFDLFVBQXlCO0lBRXRDLENBQUM7SUFHRjs7OztPQUlHO0lBQ0gsd0NBQWlCLGFBQUMsVUFBeUI7SUFFMUMsQ0FBQztJQUVGOzs7O09BSUc7SUFDSCx5Q0FBa0I7UUFBQyxvQkFBOEI7YUFBOUIsVUFBOEIsRUFBOUIscUJBQThCLEVBQTlCLElBQThCO1lBQTlCLCtCQUE4Qjs7OztJQUVoRCxDQUFDO0lBR0Y7OztPQUdHO0lBQ0gsbUNBQVk7SUFLWjs7O09BR0c7SUFDSCxvQ0FBYTs7Ozs7O0lBN0NKLFlBQVk7UUFEeEIsVUFBVSxFQUFFO09BQ0EsWUFBWTt1QkEvQnpCO0VBK0JrQyxpQkFBaUI7U0FBdEMsWUFBWTs7SUF5RGEsb0NBQWlCOzs7O0lBR25EOzs7T0FHRztJQUNILDJDQUFnQjtJQUVmLENBQUM7SUFFRjs7O09BR0c7SUFDSCxzQ0FBVztJQUVWLENBQUM7SUFFRjs7O09BR0c7SUFDSCw0Q0FBaUI7SUFFaEIsQ0FBQztJQUVGOzs7O09BSUc7SUFDSCw2Q0FBa0IsYUFBQyxjQUErQjtJQUVqRCxDQUFDO0lBRUY7Ozs7T0FJRztJQUNILDBDQUFlLGFBQUMsbUJBQXVDO0lBRXRELENBQUM7SUFFRjs7O09BR0c7SUFDSCwrQ0FBb0I7SUFFbkIsQ0FBQztJQUVGOzs7T0FHRztJQUNILDRDQUFpQjtJQUVoQixDQUFDO0lBRUY7OztPQUdHO0lBQ0gsMENBQWU7SUFFZCxDQUFD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QyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDdEUsT0FBTyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7UUFDcEMsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDMUIsT0FBTyxJQUFJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDTSxzQkFBRyxHQUFWO1FBQVcsbUJBQWdDO2FBQWhDLFVBQWdDLEVBQWhDLHFCQUFnQyxFQUFoQyxJQUFnQztZQUFoQyw4QkFBZ0M7O1FBQ3ZDLElBQU0sT0FBTyxHQUFHLElBQVUsTUFBTyxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN2RSxPQUFPLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztRQUNwQyxPQUFPLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUMzQixPQUFPLElBQUksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLHNCQUFHLEdBQVYsVUFBVyxTQUEyQjtRQUNsQyxJQUFNLE9BQU8sR0FBRyxJQUFVLE1BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sQ0FBQyxlQUFlLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QyxPQUFPLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUMzQixPQUFPLElBQUksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQzs2QkFydkJMO0VBaXVCd0MsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIENvcHlyaWdodCAyMDIwLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5cclxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcclxuICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG5cclxuICAgICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAgICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbi8qKlxyXG4gKiBAbmFtZSBITVNBd2FyZW5lc3NcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENvcmRvdmEgQXdhcmVuZXNzIFBsdWdpbiBlbmFibGVzIGNvbW11bmljYXRpb24gYmV0d2VlbiB0aGUgSE1TIENvcmUgQXdhcmVuZXNzIFNESyBhbmQgQ29yZG92YSBwbGF0Zm9ybS4gVGhpcyBwbHVnaW4gZGVtb25zdHJhdGVzIHdpZGUtcmFuZ2luZyBmdW5jdGlvbmFsaXR5IG9mIHRoZSBITVMgQ29yZSBBd2FyZW5lc3MgU0RLLlxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiAnSE1TQXdhcmVuZXNzJyxcclxuICAgIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hd2FyZW5lc3MnLFxyXG4gICAgcGx1Z2luUmVmOiAnSE1TQXdhcmVuZXNzJyxcclxuICAgIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luJyxcclxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TQXdhcmVuZXNzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIEl0IGNoZWNrcyB0aGUgcGVybWlzc2lvbnMgcmVxdWlyZWQgdG8gdXNlIHRoaXMgS2l0LlxyXG4gICAgICogQHBhcmFtICB7SE1TUGVybWlzc2lvbn0gcGVybWlzc2lvbiBSZXByZXNlbnRzIHRoZSBsaXN0IGluIHdoaWNoIHBlcm1pc3Npb24gbmFtZXMgYXJlIGtlcHQuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXHJcbiAgICAgKi9cclxuICAgIGhhc1Blcm1pc3Npb24ocGVybWlzc2lvbjogSE1TUGVybWlzc2lvbik6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRhaW5zIHRoZSBuZWNlc3NhcnkgcGVybWlzc2lvbnMgdG8gdXNlIHRoZSBzZXJ2aWNlcy5cclxuICAgICAqIEBwYXJhbSAge0hNU1Blcm1pc3Npb259IHBlcm1pc3Npb24gUmVwcmVzZW50cyB0aGUgbGlzdCBpbiB3aGljaCBwZXJtaXNzaW9uIG5hbWVzIGFyZSBrZXB0LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIHJlcXVlc3RQZXJtaXNzaW9uKHBlcm1pc3Npb246IEhNU1Blcm1pc3Npb24pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRhaW5zIHRoZSBuZWNlc3NhcnkgcGVybWlzc2lvbnMgdG8gdXNlIHRoZSBzZXJ2aWNlcy5cclxuICAgICAqIEBwYXJhbSAge0hNU1Blcm1pc3Npb25bXX0gcGVybWlzc2lvbiBSZXByZXNlbnRzIHRoZSBsaXN0IGluIHdoaWNoIHBlcm1pc3Npb24gbmFtZXMgYXJlIGtlcHQuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgcmVxdWVzdFBlcm1pc3Npb25zKC4uLnBlcm1pc3Npb246IEhNU1Blcm1pc3Npb25bXSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBlbmFibGVzIEhNU0xvZ2dlciBjYXBhYmlsaXR5IHdoaWNoIGlzIHVzZWQgZm9yIHNlbmRpbmcgdXNhZ2UgYW5hbHl0aWNzIG9mIEF3YXJlbmVzcyBTREsncyBtZXRob2RzIHRvIGltcHJvdmUgdGhlIHNlcnZpY2UgcXVhbGl0eS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgZGlzYWJsZXMgdGhlIEhNU0xvZ2dlciBjYXBhYmlsaXR5IHdoaWNoIGlzIHVzZWQgZm9yIHNlbmRpbmcgdXNhZ2UgYW5hbHl0aWNzIG9mIEF3YXJlbmVzcyBTREsncyBtZXRob2RzIHRvIGltcHJvdmUgdGhlIHNlcnZpY2UgcXVhbGl0eS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBkaXNhYmxlTG9nZ2VyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6ICdITVNBd2FyZW5lc3MnLFxyXG4gICAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWF3YXJlbmVzcycsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gICAgcGx1Z2luUmVmOiAnQXdhcmVuZXNzQ2FwdHVyZScsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF3YXJlbmVzc0NhcHR1cmUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyB0aGUgc3RhdHVzIG9mIGFuIGF1ZGlvIGRldmljZSAoY29ubmVjdGVkIG9yIGRpc2Nvbm5lY3RlZCkuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXHJcbiAgICAgKi9cclxuICAgIGdldEhlYWRzZXRTdGF0dXMoKTogUHJvbWlzZTxIZWFkc2V0U3RhdHVzUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyB0aGUgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBvZiB0aGUgbG9jYXRpb24uXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXHJcbiAgICAgKi9cclxuICAgIGdldExvY2F0aW9uKCk6IFByb21pc2U8TG9jYXRpb25SZXNwb25zZT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRhaW5zIHVzZXIgYmVoYXZpb3IsIHN1Y2ggYXMgd2Fsa2luZywgcnVubmluZywgY3ljbGluZywgZHJpdmluZywgb3Igc3RheWluZyBzdGlsbC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcclxuICAgICAqL1xyXG4gICAgZ2V0QmVoYXZpb3JTdGF0dXMoKTogUHJvbWlzZTxCZWhhdmlvclJlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSAge0JsdWV0b290aERldmljZX0gYmx1ZW9vdGhEZXZpY2UgSW5kaWNhdGVzIGJsdWV0b290aCBkZXZpY2UuXHJcbiAgICAgKiBPYnRhaW4gdGhlIHN0YXR1cyBvZiB0aGUgcGhvbmUsIGZvciBleGFtcGxlLCB3aGV0aGVyIEJsdWV0b290aCBpcyBjb25uZWN0ZWQgb3Igbm90LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxyXG4gICAgICovXHJcbiAgICBnZXRCbHVldG9vdGhTdGF0dXMoYmx1ZW9vdGhEZXZpY2U6IEJsdWV0b290aERldmljZSk6IFByb21pc2U8Qmx1ZXRvb3RoU3RhdHVzUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGRldmljZSBoYXMgYXBwcm9hY2hlZCwgY29ubmVjdGVkIHRvLCBvciBkaXNjb25uZWN0ZWQgZnJvbSBhIHJlZ2lzdGVyZWQgYmVhY29uLlxyXG4gICAgICogQHBhcmFtICB7QmVhY29uU3RhdHVzRmlsdGVyfSBiZWFjb25TdGF0dXNSZXF1ZXN0IEJlYWNvbiBTdGF0dXMuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgZ2V0QmVhY29uU3RhdHVzKGJlYWNvblN0YXR1c1JlcXVlc3Q6IEJlYWNvblN0YXR1c0ZpbHRlcik6IFByb21pc2U8QmVhY29uU3RhdHVzUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHBob25lIHN0YXR1cyBhd2FyZW5lc3MgY2FwYWJpbGl0eSBpcyBzdXBwb3J0ZWQsIGluY2x1ZGluZyB0aGUgYXdhcmVuZXNzIG9mIHRoZSBhcHAgc3RhdHVzLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxyXG4gICAgICovXHJcbiAgICBnZXRBcHBsaWNhdGlvblN0YXR1cygpOiBQcm9taXNlPEFwcGxpY2F0aW9uU3RhdHVzUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyB0aGUgaWxsdW1pbmFuY2Ugb2YgdGhlIGVudmlyb25tZW50IHdoZXJlIHRoZSBkZXZpY2UgaXMgbG9jYXRlZC4gVGhlIHVuaXQgaXMgbHV4LiBUaGUgaWxsdW1pbmFuY2UgaXMgdGhlIGludGVuc2l0eSByZWNlaXZlZCBieSB0aGUgbGlnaHQgc2Vuc29yIG9mIHRoZSBkZXZpY2UuIFdoZW4gdGhlIGxpZ2h0IHNlbnNvciBpcyBibG9ja2VkIG9yIGlsbHVtaW5hdGVkIGJ5IHN0cm9uZyBsaWdodCwgdGhlIG9idGFpbmVkIGlsbHVtaW5hbmNlIGNoYW5nZXMgYWNjb3JkaW5nbHkuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXHJcbiAgICAgKi9cclxuICAgIGdldExpZ2h0SW50ZW5zaXR5KCk6IFByb21pc2U8QW1iaWVudExpZ2h0UmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWluIHRoZSBzdGF0dXMgb2YgdGhlIHBob25lLCBmb3IgZXhhbXBsZSwgd2hldGhlciB0aGUgc2NyZWVuIGlzIG9uIG9yIG9mZi5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcclxuICAgICAqL1xyXG4gICAgZ2V0U2NyZWVuU3RhdHVzKCk6IFByb21pc2U8U2NyZWVuU3RhdHVzUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyB0aGUgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBvZiB0aGUgY3VycmVudCBsb2NhdGlvbi5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcclxuICAgICAqL1xyXG4gICAgZ2V0Q3VycmVudExvY2F0aW9uKCk6IFByb21pc2U8TG9jYXRpb25SZXNwb25zZT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRhaW4gdGhlIHN0YXR1cyBvZiB0aGUgcGhvbmUsIGZvciBleGFtcGxlLCB3aGV0aGVyIHRoZSBzeXN0ZW0gaXMgaW4gZGFyayBtb2RlLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxyXG4gICAgICovXHJcbiAgICBnZXREYXJrTW9kZVN0YXR1cygpOiBQcm9taXNlPERhcmttb2RlU3RhdHVzUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWluIHRoZSBzdGF0dXMgb2YgdGhlIHBob25lLCBmb3IgZXhhbXBsZSwgd2hldGhlciB0aGUgYXBwIGlzIHN0YXJ0ZWQgb3IgY2xvc2VkLCB3aGV0aGVyIFdpLUZpIGlzIGNvbm5lY3RlZCBvciBub3QuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXHJcbiAgICAgKi9cclxuICAgIGdldFdpZmlTdGF0dXMoKTogUHJvbWlzZTxXaWZpU3RhdHVzUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogUXVlcmllcyB0aGUgd2VhdGhlciBpbmZvcm1hdGlvbiBvZiB0aGUgZGV2aWNlIGxvY2F0aW9uIG9yIGEgc3BlY2lmaWVkIGxvY2F0aW9uLiBXZWF0aGVyIG9mIHRoZSBjdXJyZW50IGRheSAoMjQgaG91cnMpIGFuZCB0aGUgbmV4dCBzZXZlbiBkYXlzIChpbmNsdWRpbmcgdGhlIGN1cnJlbnQgZGF5KSBjYW4gYmUgcXVlcmllZC4gXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXHJcbiAgICAgKi9cclxuICAgIGdldFdlYXRoZXJCeURldmljZSgpOiBQcm9taXNlPFdlYXRoZXJTdGF0dXNSZXNwb25zZT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBRdWVyaWVzIHRoZSB3ZWF0aGVyIGluZm9ybWF0aW9uIG9mIHRoZSBkZXZpY2UgbG9jYXRpb24gb3IgYSBzcGVjaWZpZWQgbG9jYXRpb24uIFdlYXRoZXIgb2YgdGhlIGN1cnJlbnQgZGF5ICgyNCBob3VycykgYW5kIHRoZSBuZXh0IHNldmVuIGRheXMgKGluY2x1ZGluZyB0aGUgY3VycmVudCBkYXkpIGNhbiBiZSBxdWVyaWVkLiBcclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcclxuICAgICAqL1xyXG4gICAgZ2V0V2VhdGhlckJ5SVAoKTogUHJvbWlzZTxXZWF0aGVyU3RhdHVzUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogUXVlcmllcyB0aGUgd2VhdGhlciBpbmZvcm1hdGlvbiBvZiB0aGUgZGV2aWNlIGxvY2F0aW9uIG9yIGEgc3BlY2lmaWVkIGxvY2F0aW9uLiBXZWF0aGVyIG9mIHRoZSBjdXJyZW50IGRheSAoMjQgaG91cnMpIGFuZCB0aGUgbmV4dCBzZXZlbiBkYXlzIChpbmNsdWRpbmcgdGhlIGN1cnJlbnQgZGF5KSBjYW4gYmUgcXVlcmllZC4gXHJcbiAgICAgKiBAcGFyYW0gIHtXZWF0aGVyUG9zaXRpb259IHdlYXRoZXJCeVBvc2l0aW9uUmVxdWVzdCBXZWF0aGVyIGJ5IFBvc2l0aW9uLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxyXG4gICAgICovXHJcbiAgICBnZXRXZWF0aGVyQnlQb3NpdGlvbih3ZWF0aGVyQnlQb3NpdGlvblJlcXVlc3Q6IFdlYXRoZXJQb3NpdGlvbik6IFByb21pc2U8V2VhdGhlclN0YXR1c1Jlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRhaW5zIHRoZSBjdXJyZW50IGxvY2FsIHRpbWUgb3IgdGltZSBvZiBhIHNwZWNpZmllZCBsb2NhdGlvbiwgc3VjaCBhcyB3b3JraW5nIGRheSwgd2Vla2VuZCwgaG9saWRheSwgbW9ybmluZywgYWZ0ZXJub29uLCBldmVuaW5nLCBvciBsYXRlIG5pZ2h0LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxyXG4gICAgICovXHJcbiAgICBnZXRUaW1lQ2F0ZWdvcmllcygpOiBQcm9taXNlPFRpbWVDYXRlZ29yaWVzUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyB0aGUgY3VycmVudCBsb2NhbCB0aW1lIG9yIHRpbWUgb2YgYSBzcGVjaWZpZWQgbG9jYXRpb24sIHN1Y2ggYXMgd29ya2luZyBkYXksIHdlZWtlbmQsIGhvbGlkYXksIG1vcm5pbmcsIGFmdGVybm9vbiwgZXZlbmluZywgb3IgbGF0ZSBuaWdodC5cclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gY291bnRyeUNvZGUgVGltZSBDYXRlZ29yaWVzIEJ5IENvbnRyeWNvZGUgcmVxdWVzdC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcclxuICAgICAqL1xyXG4gICAgZ2V0VGltZUNhdGVnb3JpZXNCeUNvdW50cnlDb2RlKGNvdW50cnlDb2RlOiBzdHJpbmcpOiBQcm9taXNlPFRpbWVDYXRlZ29yaWVzUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyB0aGUgY3VycmVudCBsb2NhbCB0aW1lIG9yIHRpbWUgb2YgYSBzcGVjaWZpZWQgbG9jYXRpb24sIHN1Y2ggYXMgd29ya2luZyBkYXksIHdlZWtlbmQsIGhvbGlkYXksIG1vcm5pbmcsIGFmdGVybm9vbiwgZXZlbmluZywgb3IgbGF0ZSBuaWdodC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcclxuICAgICAqL1xyXG4gICAgZ2V0VGltZUNhdGVnb3JpZXNCeUlQKCk6IFByb21pc2U8VGltZUNhdGVnb3JpZXNSZXNwb25zZT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRhaW5zIHRoZSBjdXJyZW50IGxvY2FsIHRpbWUgb3IgdGltZSBvZiBhIHNwZWNpZmllZCBsb2NhdGlvbiwgc3VjaCBhcyB3b3JraW5nIGRheSwgd2Vla2VuZCwgaG9saWRheSwgbW9ybmluZywgYWZ0ZXJub29uLCBldmVuaW5nLCBvciBsYXRlIG5pZ2h0LlxyXG4gICAgICogQHBhcmFtICB7VGltZUNhdGVnb3JpZXNCeVVzZXJSZXF1ZXN0fSB0aW1lQ2F0ZWdvcmllc0J5VXNlclJlcXVlc3QgVGltZSBDYXRlZ29yaWVzIEJ5IFVzZXIgcmVxdWVzdC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcclxuICAgICAqL1xyXG4gICAgZ2V0VGltZUNhdGVnb3JpZXNCeVVzZXIodGltZUNhdGVnb3JpZXNCeVVzZXJSZXF1ZXN0OiBUaW1lQ2F0ZWdvcmllc0J5VXNlclJlcXVlc3QpOiBQcm9taXNlPFRpbWVDYXRlZ29yaWVzUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyB0aGUgY3VycmVudCBsb2NhbCB0aW1lIG9yIHRpbWUgb2YgYSBzcGVjaWZpZWQgbG9jYXRpb24sIHN1Y2ggYXMgd29ya2luZyBkYXksIHdlZWtlbmQsIGhvbGlkYXksIG1vcm5pbmcsIGFmdGVybm9vbiwgZXZlbmluZywgb3IgbGF0ZSBuaWdodC5cclxuICAgICAqIEBwYXJhbSAge251bWJlcn0gZnV0dXJlVGltZXN0YW1wIFRpbWUgQ2F0ZWdvcmllcyBCeSBGdXR1cmUgcmVxdWVzdC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcclxuICAgICAqL1xyXG4gICAgZ2V0VGltZUNhdGVnb3JpZXNGb3JGdXR1cmUoZnV0dXJlVGltZXN0YW1wOiBudW1iZXIpOiBQcm9taXNlPFRpbWVDYXRlZ29yaWVzUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogSXQgZW5hYmxlcyB0aGUgdXBkYXRlIHdpbmRvdy5cclxuICAgICAqIEBwYXJhbSAge2Jvb2xlYW59IGlzRW5hYmxlIGJvb2xlYW4gZW5hYmxlVXBkYXRlV2luZG93LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxyXG4gICAgICovXHJcbiAgICBlbmFibGVVcGRhdGVXaW5kb3coaXNFbmFibGU6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAqIEl0IGVuYWJsZXMgdGhlIHVwZGF0ZSB3aW5kb3cuXHJcbiAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcclxuICovXHJcbiAgICBxdWVyeVN1cHBvcnRpbmdDYXBhYmlsaXRpZXMoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG59XHJcbi8vIEF3YXJlbmVzc0NhcHR1cmUgSW50ZXJmYWNlcyAvL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXZWF0aGVyQnlQb3NpdGlvblJlcXVlc3Qge1xyXG4gICAgd2VhdGhlclBvc2l0aW9uOiBXZWF0aGVyUG9zaXRpb247XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBXZWF0aGVyUG9zaXRpb24ge1xyXG4gICAgbUNvdW50cnk/OiBzdHJpbmcgfCBudWxsLFxyXG4gICAgbVByb3ZpbmNlPzogc3RyaW5nIHwgbnVsbCxcclxuICAgIG1DaXR5OiBzdHJpbmcsXHJcbiAgICBtRGlzdHJpY3Q/OiBzdHJpbmcgfCBudWxsLFxyXG4gICAgbUNvdW50eT86IHN0cmluZyB8IG51bGwsXHJcbiAgICBtTG9jYWxlOiBzdHJpbmcsXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBFbmFibGVVcGRhdGVXaW5kb3dSZXF1ZXN0IHtcclxuICAgIGlzRW5hYmxlOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVDYXRlZ29yaWVzQnlVc2VyUmVxdWVzdCB7XHJcbiAgICBsb2NhdGlvbjogQ29vcmRpbmF0ZTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENvb3JkaW5hdGUge1xyXG4gICAgbGF0aXR1ZGU6IG51bWJlcjtcclxuICAgIGxvbmdpdHVkZTogbnVtYmVyXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBUaW1lQ2F0ZWdvcmllc0J5Q291bnRyeVJlcXVlc3Qge1xyXG4gICAgY291bnRyeUNvZGU6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVDYXRlZ29yaWVzRm9yRnV0dXJlUmVxdWVzdCB7XHJcbiAgICBmdXR1cmVUaW1lc3RhbXA6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEJlYWNvblN0YXR1c1JlcXVlc3Qge1xyXG4gICAgYmVhY29uU3RhdHVzRmlsdGVyOiBCZWFjb25TdGF0dXNGaWx0ZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBCZWFjb25TdGF0dXNGaWx0ZXIge1xyXG4gICAgbmFtZXNwYWNlOiBzdHJpbmc7XHJcbiAgICB0eXBlPzogc3RyaW5nIHwgbnVsbDtcclxuICAgIGNvbnRlbnQ/OiBBcnJheTxhbnk+IHwgbnVsbDtcclxufVxyXG5cclxuLy8gQXdhcmVuZXNzQmFycmllciBJbnRlcmZhY2VzIC8vXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhlYWRzZXRTdGF0dXNSZXNwb25zZSB7XHJcbiAgICBoZWFkc2V0U3RhdHVzOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBCbHVldG9vdGhTdGF0dXNSZXNwb25zZSB7XHJcbiAgICBibHVldG9vdGhTdGF0dXM6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFdpZmlTdGF0dXNSZXNwb25zZSB7XHJcbiAgICB3aWZpU3RhdHVzOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTY3JlZW5TdGF0dXNSZXNwb25zZSB7XHJcbiAgICBzY3JlZW5TdGF0dXM6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIERhcmttb2RlU3RhdHVzUmVzcG9uc2Uge1xyXG4gICAgZGFya21vZGVTdGF0dXM6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uU3RhdHVzUmVzcG9uc2Uge1xyXG4gICAgYXBwbGljYXRpb25TdGF0dXM6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEFtYmllbnRMaWdodFJlc3BvbnNlIHtcclxuICAgIGxpZ2h0SW50ZW5zaXR5OiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvblJlc3BvbnNlIHtcclxuICAgIGxhdGl0dWRlOiBudW1iZXI7XHJcbiAgICBsb25naXR1ZGU6IG51bWJlcjtcclxuICAgIGFsdGl0dWRlOiBudW1iZXI7XHJcbiAgICBzcGVlZDogbnVtYmVyO1xyXG4gICAgYmVhcmluZzogbnVtYmVyO1xyXG4gICAgYWNjdXJhY3k6IG51bWJlcjtcclxuICAgIHZlcnRpY2FsQWNjdXJhY3lNZXRlcnM/OiBudW1iZXIgfCBudWxsO1xyXG4gICAgYmVhcmluZ0FjY3VyYWN5RGVncmVlcz86IG51bWJlciB8IG51bGw7XHJcbiAgICBzcGVlZEFjY3VyYWN5TWV0ZXJzUGVyU2Vjb25kPzogbnVtYmVyIHwgbnVsbDtcclxuICAgIHRpbWU6IG51bWJlcjtcclxuICAgIGZyb21Nb2NrUHJvdmlkZXI6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEJlaGF2aW9yUmVzcG9uc2Uge1xyXG4gICAgZWxhcHNlZFJlYWx0aW1lTWlsbGlzOiBudW1iZXI7XHJcbiAgICB0aW1lOiBudW1iZXI7XHJcbiAgICBtb3N0TGlrZWx5QmVoYXZpb3I6IE1vc3RMaWtlbHlCZWhhdmlvcjtcclxuICAgIHByb2JhYmxlQmVoYXZpb3I6IEFycmF5PE1vc3RMaWtlbHlCZWhhdmlvcj47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNb3N0TGlrZWx5QmVoYXZpb3Ige1xyXG4gICAgY29uZmlkZW5jZTogbnVtYmVyO1xyXG4gICAgdHlwZTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgV2VhdGhlclN0YXR1c1Jlc3BvbnNlIHtcclxuICAgIGRhaWx5V2VhdGhlcj86IChEYWlseVdlYXRoZXIpW10gfCBudWxsO1xyXG4gICAgaG91cmx5V2VhdGhlcj86IChIb3VybHlXZWF0aGVyKVtdIHwgbnVsbDtcclxuICAgIGxpdmVJbmZvPzogKG51bGwpW10gfCBudWxsO1xyXG4gICAgYXFpPzogQXFpIHwgbnVsbDtcclxuICAgIHdlYXRoZXJTaXR1YXRpb246IFdlYXRoZXJTaXR1YXRpb247XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBEYWlseVdlYXRoZXIge1xyXG4gICAgYXFpVmFsdWU6IG51bWJlcjtcclxuICAgIGRhdGVUaW1lU3RhbXA6IG51bWJlcjtcclxuICAgIG1heFRlbXBDOiBudW1iZXI7XHJcbiAgICBtYXhUZW1wRjogbnVtYmVyO1xyXG4gICAgbWluVGVtcEM6IG51bWJlcjtcclxuICAgIG1pblRlbXBGOiBudW1iZXI7XHJcbiAgICBtb29uUGhhc2U6IHN0cmluZztcclxuICAgIG1vb25SaXNlOiBudW1iZXI7XHJcbiAgICBtb29uU2V0OiBudW1iZXI7XHJcbiAgICBzdW5SaXNlOiBudW1iZXI7XHJcbiAgICBzdW5TZXQ6IG51bWJlcjtcclxuICAgIHNpdHVhdGlvbkRheTogU2l0dWF0aW9uRGF5T3JTaXR1YXRpb25OaWdodDtcclxuICAgIHNpdHVhdGlvbk5pZ2h0OiBTaXR1YXRpb25EYXlPclNpdHVhdGlvbk5pZ2h0O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2l0dWF0aW9uRGF5T3JTaXR1YXRpb25OaWdodCB7XHJcbiAgICBjbldlYXRoZXJJZDogbnVtYmVyO1xyXG4gICAgd2VhdGhlcklkOiBudW1iZXI7XHJcbiAgICB3aW5kRGlyOiBzdHJpbmc7XHJcbiAgICB3aW5kTGV2ZWw6IG51bWJlcjtcclxuICAgIHdpbmRTcGVlZDogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSG91cmx5V2VhdGhlciB7XHJcbiAgICBjbldlYXRoZXJJZDogbnVtYmVyO1xyXG4gICAgZGF0ZVRpbWVTdGFtcDogbnVtYmVyO1xyXG4gICAgcmFpblByb2JhYmlsaXR5OiBudW1iZXI7XHJcbiAgICB0ZW1wQzogbnVtYmVyO1xyXG4gICAgdGVtcEY6IG51bWJlcjtcclxuICAgIHdlYXRoZXJJZDogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQXFpIHtcclxuICAgIGFxaVZhbHVlOiBudW1iZXI7XHJcbiAgICBDbzogbnVtYmVyO1xyXG4gICAgTm8yOiBudW1iZXI7XHJcbiAgICBPMzogbnVtYmVyO1xyXG4gICAgUG0xMDogbnVtYmVyO1xyXG4gICAgUG0yNTogbnVtYmVyO1xyXG4gICAgU28yOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBXZWF0aGVyU2l0dWF0aW9uIHtcclxuICAgIGNpdHk6IENpdHk7XHJcbiAgICBzaXR1YXRpb246IFNpdHVhdGlvbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENpdHkge1xyXG4gICAgY2l0eUNvZGU6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHByb3ZpbmNlTmFtZTogc3RyaW5nO1xyXG4gICAgdGltZVpvbmU6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNpdHVhdGlvbiB7XHJcbiAgICBjbldlYXRoZXJJZDogbnVtYmVyO1xyXG4gICAgaHVtaWRpdHk6IHN0cmluZztcclxuICAgIHByZXNzdXJlOiBudW1iZXI7XHJcbiAgICByZWFsRmVlbEM6IG51bWJlcjtcclxuICAgIHJlYWxGZWVsRjogbnVtYmVyO1xyXG4gICAgdGVtcGVyYXR1cmVDOiBudW1iZXI7XHJcbiAgICB0ZW1wZXJhdHVyZUY6IG51bWJlcjtcclxuICAgIHVwZGF0ZVRpbWU6IG51bWJlcjtcclxuICAgIHV2SW5kZXg6IG51bWJlcjtcclxuICAgIHdlYXRoZXJJZDogbnVtYmVyO1xyXG4gICAgd2luZERpcjogc3RyaW5nO1xyXG4gICAgd2luZFNwZWVkOiBudW1iZXI7XHJcbiAgICB3aW5kTGV2ZWw6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYXBhYmlsaXR5UmVzcG9uc2Uge1xyXG4gICAgZGV2aWNlU3VwcG9ydENhcGFiaWxpdGllcz86IERldmljZVN1cHBvcnRDYXBhYmlsaXRpZXNbXSB8IG51bGw7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VTdXBwb3J0Q2FwYWJpbGl0aWVzIHtcclxuICAgIGNhcGFiaWxpdHlTdGF0dXM6IG51bWJlcjtcclxuICAgIGNhcGFiaWxpdHlTdGF0dXNOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGltZUNhdGVnb3JpZXNSZXNwb25zZSB7XHJcbiAgICB0aW1lQ2F0ZWdvcmllcz86IFRpbWVDYXRlZ29yaWVzW10gfCBudWxsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVGltZUNhdGVnb3JpZXMge1xyXG4gICAgVGltZUJhcnJpZXI6IG51bWJlcjtcclxuICAgIFRpbWVCYXJyaWVyTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJlYWNvblN0YXR1c1Jlc3BvbnNlIHtcclxuICAgIGJlYWNvbkRhdGE/OiBCZWFjb25EYXRhW10gfCBudWxsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQmVhY29uRGF0YSB7XHJcbiAgICBCZWhhdmlvckJhcnJpZXI6IG51bWJlcjtcclxuICAgIEJlaGF2aW9yQmFycmllck5hbWU6IHN0cmluZztcclxufVxyXG5cclxuXHJcbi8vIEF3YXJlbmVzc0JhcnJpZXIgUmV0dXJuIFxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXJyaWVyU3RhdHVzIHtcclxuICAgIGJhcnJpZXJMYWJlbDogc3RyaW5nO1xyXG4gICAgcHJlc2VudFN0YXR1czogbnVtYmVyO1xyXG4gICAgbGFzdFN0YXR1czogbnVtYmVyO1xyXG4gICAgbGFzdEJhcnJpZXJVcGRhdGVUaW1lOiBudW1iZXI7XHJcbn1cclxuXHJcbi8vRW51bSB2YWx1ZVxyXG5leHBvcnQgZW51bSBIZWFkc2V0U3RhdHVzIHtcclxuICAgIENPTk5FQ1RFRCA9IDEsXHJcbiAgICBESVNDT05ORUNURUQgPSAwLFxyXG59XHJcbmV4cG9ydCBlbnVtIFdpZmlTdGF0dXMge1xyXG4gICAgQ09OTkVDVEVEID0gMSxcclxuICAgIERJU0NPTk5FQ1RFRCA9IDQsXHJcbiAgICBFTkFCTEVEID0gMyxcclxuICAgIERJU0FCTEVEID0gLTEsXHJcbn1cclxuZXhwb3J0IGVudW0gQmx1ZXRvb3RoU3RhdHVzIHtcclxuICAgIENPTk5FQ1RFRCA9IDEsXHJcbiAgICBESVNDT05ORUNURUQgPSAwLFxyXG59XHJcbmV4cG9ydCBlbnVtIFNjcmVlblN0YXR1cyB7XHJcbiAgICBTQ1JFRU5PTiA9IDEsXHJcbiAgICBTQ1JFRU5PRkYgPSAwLFxyXG4gICAgVU5MT0NLID0gMixcclxufVxyXG5leHBvcnQgZW51bSBCZWhhdmlvckJhcnJpZXJDb25zdGFudCB7XHJcbiAgICBCRUhBVklPUl9JTl9WRUhJQ0xFID0gMCxcclxuICAgIEJFSEFWSU9SX09OX0JJQ1lDTEUgPSAxLFxyXG4gICAgQkVIQVZJT1JfT05fRk9PVCA9IDIsXHJcbiAgICBCRUhBVklPUl9TVElMTCA9IDMsXHJcbiAgICBCRUhBVklPUl9XQUxLSU5HID0gNyxcclxuICAgIEJFSEFWSU9SX1JVTk5JTkcgPSA4LFxyXG59XHJcbmV4cG9ydCBlbnVtIEJsdWV0b290aERldmljZSB7XHJcbiAgICBERVZJQ0VfQ0FSID0gMFxyXG59XHJcbmV4cG9ydCBlbnVtIFRpbWVCYXJyaWVyQ29uc3RhbnRzIHtcclxuICAgIFNVTlJJU0VfQ09ERSA9IDAsXHJcbiAgICBTVU5TRVRfQ09ERSA9IDEsXHJcbiAgICBUSU1FX0NBVEVHT1JZX01PUk5JTkcgPSAxLFxyXG4gICAgVElNRV9DQVRFR09SWV9BRlRFUk5PT04gPSAyLFxyXG4gICAgVElNRV9DQVRFR09SWV9FVkVOSU5HID0gMyxcclxuICAgIFRJTUVfQ0FURUdPUllfTklHSFQgPSA0LFxyXG4gICAgVElNRV9DQVRFR09SWV9IT0xJREFZID0gNSxcclxuICAgIFRJTUVfQ0FURUdPUllfV0VFS0RBWSA9IDYsXHJcbiAgICBUSU1FX0NBVEVHT1JZX1dFRUtFTkQgPSA3LFxyXG4gICAgVElNRV9DQVRFR09SWV9OT1RfSE9MSURBWSA9IDgsXHJcbiAgICBTVU5EQVlfQ09ERSA9IDEsXHJcbiAgICBNT05EQVlfQ09ERSA9IDIsXHJcbiAgICBUVUVTREFZX0NPREUgPSAzLFxyXG4gICAgV0VETkVTREFZX0NPREUgPSA0LFxyXG4gICAgVEhVUlNEQVlfQ09ERSA9IDUsXHJcbiAgICBGUklEQVlfQ09ERSA9IDYsXHJcbiAgICBTQVRVUkRBWV9DT0RFID0gNyxcclxufVxyXG5leHBvcnQgZW51bSBITVNQZXJtaXNzaW9uIHtcclxuICAgIFBFUk1JU1NJT05fQUNDRVNTX0ZJTkVfTE9DQVRJT04gPSBcImFuZHJvaWQucGVybWlzc2lvbi5BQ0NFU1NfRklORV9MT0NBVElPTlwiLFxyXG4gICAgUEVSTUlTU0lPTl9IVUFXRUlfQUNUSVZJVFlfUkVDT0dOSVRJT04gPSBcImNvbS5odWF3ZWkuaG1zLnBlcm1pc3Npb24uQUNUSVZJVFlfUkVDT0dOSVRJT05cIixcclxuICAgIFBFUk1JU1NJT05fQUNUSVZJVFlfUkVDT0dOSVRJT04gPSBcImFuZHJvaWQucGVybWlzc2lvbi5BQ1RJVklUWV9SRUNPR05JVElPTlwiLFxyXG4gICAgUEVSTUlTU0lPTl9CTFVFVE9PVEggPSBcImFuZHJvaWQucGVybWlzc2lvbi5CTFVFVE9PVEhcIixcclxuICAgIFBFUk1JU1NJT05fQ0hBTkdFX1dJRklfU1RBVEUgPSBcImFuZHJvaWQucGVybWlzc2lvbi5DSEFOR0VfV0lGSV9TVEFURVwiLFxyXG4gICAgUEVSTUlTU0lPTl9BQ0NFU1NfQ09BUlNFX0xPQ0FUSU9OID0gXCJhbmRyb2lkLnBlcm1pc3Npb24uQUNDRVNTX0NPQVJTRV9MT0NBVElPTlwiLFxyXG4gICAgUEVSTUlTU0lPTl9BQ0NFU1NfQkFDS0dST1VORF9MT0NBVElPTiA9IFwiYW5kcm9pZC5wZXJtaXNzaW9uLkFDQ0VTU19CQUNLR1JPVU5EX0xPQ0FUSU9OXCJcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgIHByaXZhdGUgY29yZG92YUJhcnJpZXI6IGFueTtcclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihjb3Jkb3ZhQmFycmllcjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5jb3Jkb3ZhQmFycmllciA9IGNvcmRvdmFCYXJyaWVyO1xyXG4gICAgfVxyXG4gICAgc3Vic2NyaWJlKGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgdGhpcy5jb3Jkb3ZhQmFycmllci5zdWJzY3JpYmUoY2FsbGJhY2spO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgY2F0Y2goY2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWQpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICB0aGlzLmNvcmRvdmFCYXJyaWVyLmNhdGNoKGNhbGxiYWNrKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHJ1bihiYXJyaWVyTGFiZWw6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY29yZG92YUJhcnJpZXIucnVuKGJhcnJpZXJMYWJlbCk7XHJcbiAgICB9XHJcbiAgICBydW5JbkJhY2tncm91bmQoYmFycmllckxhYmVsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3Jkb3ZhQmFycmllci5ydW5JbkJhY2tncm91bmQoYmFycmllckxhYmVsKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCYXJyaWVyTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVsZXRlQWxsQmFycmllcnMoc3VjY2VzczogYW55LCBlcnJvcjogYW55KTogYW55IHtcclxuICAgICAgICAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuZGVsZXRlQWxsQmFycmllcnMoc3VjY2VzcywgZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGRlbGV0ZUJhcnJpZXJXaXRoTGFiZWxzKHN1Y2Nlc3M6IGFueSwgZXJyb3I6IGFueSwgcGFyYW1zOiBhbnkpOiBhbnkge1xyXG4gICAgICAgICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5kZWxldGVCYXJyaWVyV2l0aExhYmVscyhzdWNjZXNzLCBlcnJvciwgcGFyYW1zKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyB1blJlZ2lzdGVyUmVjZWl2ZXIoc3VjY2VzczogYW55LCBlcnJvcjogYW55KTogYW55IHtcclxuICAgICAgICAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIudW5SZWdpc3RlclJlY2VpdmVyKHN1Y2Nlc3MsIGVycm9yKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBxdWVyeUJhcnJpZXJzV2l0aEJhcnJpZXJLZXlzKHN1Y2Nlc3M6IGFueSwgZXJyb3I6IGFueSwgcGFyYW1zOiBhbnkpOiBhbnkge1xyXG4gICAgICAgICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5xdWVyeUJhcnJpZXJzV2l0aEJhcnJpZXJLZXlzKHN1Y2Nlc3MsIGVycm9yLCBwYXJhbXMpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHF1ZXJ5QmFycmllcnNXaXRoQWxsQmFycmllcnMoc3VjY2VzczogYW55LCBlcnJvcjogYW55KTogYW55IHtcclxuICAgICAgICAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIucXVlcnlCYXJyaWVyc1dpdGhBbGxCYXJyaWVycyhzdWNjZXNzLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc3RvcEJhY2tncm91bmRTZXJ2aWNlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuc3RvcEJhY2tncm91bmRTZXJ2aWNlKCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2V0QmFja2dyb3VuZEZpbGUoZmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuc2V0QmFja2dyb3VuZEZpbGUoZmlsZU5hbWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZHNldEJhcnJpZXIgZXh0ZW5kcyBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgIHN0YXRpYyBrZWVwaW5nKGhlYWRzZXRTdGF0dXM6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGJhcnJpZXIgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkhlYWRzZXRCYXJyaWVyKEhlYWRzZXRCYXJyaWVyLm5hbWUsIFwia2VlcGluZ1wiLCBbaGVhZHNldFN0YXR1c10pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihiYXJyaWVyKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjb25uZWN0aW5nKCk6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGJhcnJpZXIgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkhlYWRzZXRCYXJyaWVyKEhlYWRzZXRCYXJyaWVyLm5hbWUsIFwiY29ubmVjdGluZ1wiLCBbXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGJhcnJpZXIpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGRpc2Nvbm5lY3RpbmcoKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgYmFycmllciA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuSGVhZHNldEJhcnJpZXIoSGVhZHNldEJhcnJpZXIubmFtZSwgXCJkaXNjb25uZWN0aW5nXCIsIFtdKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoYmFycmllcik7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQW1iaWVudExpZ2h0QmFycmllciBleHRlbmRzIEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgc3RhdGljIGFib3ZlKHY6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkFtYmllbnRMaWdodEJhcnJpZXIoQW1iaWVudExpZ2h0QmFycmllci5uYW1lLCBcImFib3ZlXCIsIFt2XSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGJlbG93KHY6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkFtYmllbnRMaWdodEJhcnJpZXIoQW1iaWVudExpZ2h0QmFycmllci5uYW1lLCBcImJlbG93XCIsIFt2XSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHJhbmdlKHYxOiBudW1iZXIsIHYyOiBudW1iZXIpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5BbWJpZW50TGlnaHRCYXJyaWVyKEFtYmllbnRMaWdodEJhcnJpZXIubmFtZSwgXCJyYW5nZVwiLCBbdjEsIHYyXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV2lmaUJhcnJpZXIgZXh0ZW5kcyBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgIHN0YXRpYyBjb25uZWN0aW5nKHMxPzogc3RyaW5nLCBzMj86IHN0cmluZyk6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLldpZmlCYXJyaWVyKFdpZmlCYXJyaWVyLm5hbWUsIFwiY29ubmVjdGluZ1wiLCBbczEsIHMyXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGRpc2FibGluZygpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5XaWZpQmFycmllcihXaWZpQmFycmllci5uYW1lLCBcImRpc2FibGluZ1wiLCBbXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGRpc2Nvbm5lY3RpbmcoczE/OiBzdHJpbmcsIHMyPzogc3RyaW5nKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgbGV0IGFycjogYW55W10gPSBbXTtcclxuICAgICAgICBpZiAoczEgIT0gbnVsbCkgYXJyID0gW3MxLCBzMl07XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuV2lmaUJhcnJpZXIoV2lmaUJhcnJpZXIubmFtZSwgXCJkaXNjb25uZWN0aW5nXCIsIGFycik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGVuYWJsaW5nKCk6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLldpZmlCYXJyaWVyKFdpZmlCYXJyaWVyLm5hbWUsIFwiZW5hYmxpbmdcIiwgW10pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBrZWVwaW5nKGk6IG51bWJlciwgczE/OiBzdHJpbmcsIHMyPzogc3RyaW5nKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgbGV0IGFycjogYW55W10gPSBbaV07XHJcbiAgICAgICAgaWYgKHMxICE9IG51bGwpIHtcclxuICAgICAgICAgICAgYXJyLnB1c2goczEpO1xyXG4gICAgICAgICAgICBhcnIucHVzaChzMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLldpZmlCYXJyaWVyKFdpZmlCYXJyaWVyLm5hbWUsIFwia2VlcGluZ1wiLCBhcnIpO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJsdWV0b290aEJhcnJpZXIgZXh0ZW5kcyBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgIHN0YXRpYyBjb25uZWN0aW5nKGk6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkJsdWV0b290aEJhcnJpZXIoQmx1ZXRvb3RoQmFycmllci5uYW1lLCBcImNvbm5lY3RpbmdcIiwgW2ldKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZGlzY29ubmVjdGluZyhpOiBudW1iZXIpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CbHVldG9vdGhCYXJyaWVyKEJsdWV0b290aEJhcnJpZXIubmFtZSwgXCJkaXNjb25uZWN0aW5nXCIsIFtpXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGtlZXAoaTogbnVtYmVyLCBpMTogbnVtYmVyKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuQmx1ZXRvb3RoQmFycmllcihCbHVldG9vdGhCYXJyaWVyLm5hbWUsIFwia2VlcFwiLCBbaSwgaTFdKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCZWhhdmlvckJhcnJpZXIgZXh0ZW5kcyBBd2FyZW5lc3NCYXJyaWVyIHtcclxuXHJcbiAgICBzdGF0aWMgYmVnaW5uaW5nKC4uLmludHM6IG51bWJlcltdKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuQmVoYXZpb3JCYXJyaWVyKEJlaGF2aW9yQmFycmllci5uYW1lLCBcImJlZ2lubmluZ1wiLCBbaW50c10pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBlbmRpbmcoLi4uaW50czogbnVtYmVyW10pOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CZWhhdmlvckJhcnJpZXIoQmVoYXZpb3JCYXJyaWVyLm5hbWUsIFwiZW5kaW5nXCIsIFtpbnRzXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGtlZXBpbmcoLi4uaW50czogbnVtYmVyW10pOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CZWhhdmlvckJhcnJpZXIoQmVoYXZpb3JCYXJyaWVyLm5hbWUsIFwia2VlcGluZ1wiLCBbaW50c10pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExvY2F0aW9uQmFycmllciBleHRlbmRzIEF3YXJlbmVzc0JhcnJpZXIge1xyXG5cclxuICAgIHN0YXRpYyBlbnRlcih2OiBudW1iZXIsIHYxOiBudW1iZXIsIHYyOiBudW1iZXIpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CZWhhdmlvckJhcnJpZXIoTG9jYXRpb25CYXJyaWVyLm5hbWUsIFwiZW50ZXJcIiwgW3YsIHYxLCB2Ml0pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBleGl0KHY6IG51bWJlciwgdjE6IG51bWJlciwgdjI6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkJlaGF2aW9yQmFycmllcihMb2NhdGlvbkJhcnJpZXIubmFtZSwgXCJleGl0XCIsIFt2LCB2MSwgdjJdKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc3RheSh2OiBudW1iZXIsIHYxOiBudW1iZXIsIHYyOiBudW1iZXIsIGw6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkJlaGF2aW9yQmFycmllcihMb2NhdGlvbkJhcnJpZXIubmFtZSwgXCJzdGF5XCIsIFt2LCB2MSwgdjIsIGxdKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JlZW5CYXJyaWVyIGV4dGVuZHMgQXdhcmVuZXNzQmFycmllciB7XHJcblxyXG4gICAgc3RhdGljIHNjcmVlbk9uKCk6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkJlaGF2aW9yQmFycmllcihTY3JlZW5CYXJyaWVyLm5hbWUsIFwic2NyZWVuT25cIiwgW10pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzY3JlZW5PZmYoKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuQmVoYXZpb3JCYXJyaWVyKFNjcmVlbkJhcnJpZXIubmFtZSwgXCJzY3JlZW5PZmZcIiwgW10pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzY3JlZW5VbmxvY2soKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuQmVoYXZpb3JCYXJyaWVyKFNjcmVlbkJhcnJpZXIubmFtZSwgXCJzY3JlZW5VbmxvY2tcIiwgW10pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBrZWVwaW5nKGk6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkJlaGF2aW9yQmFycmllcihTY3JlZW5CYXJyaWVyLm5hbWUsIFwia2VlcGluZ1wiLCBbaV0pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVCYXJyaWVyIGV4dGVuZHMgQXdhcmVuZXNzQmFycmllciB7XHJcblxyXG4gICAgc3RhdGljIGR1cmluZ1BlcmlvZE9mRGF5KHRpbWVab25lOiBzdHJpbmcsIGw6IG51bWJlciwgbDE6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLlRpbWVCYXJyaWVyKFRpbWVCYXJyaWVyLm5hbWUsIFwiZHVyaW5nUGVyaW9kT2ZEYXlcIiwgW3RpbWVab25lLCBsLCBsMV0pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBkdXJpbmdQZXJpb2RPZldlZWsoaTogbnVtYmVyLCB0aW1lWm9uZTogc3RyaW5nLCBsOiBudW1iZXIsIGwxOiBudW1iZXIpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5UaW1lQmFycmllcihUaW1lQmFycmllci5uYW1lLCBcImR1cmluZ1BlcmlvZE9mV2Vla1wiLCBbaSwgdGltZVpvbmUsIGwsIGwxXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGR1cmluZ1RpbWVQZXJpb2QobDogbnVtYmVyLCBsMTogbnVtYmVyKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuVGltZUJhcnJpZXIoVGltZUJhcnJpZXIubmFtZSwgXCJkdXJpbmdUaW1lUGVyaW9kXCIsIFtsLCBsMV0pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBpblN1bnJpc2VPclN1bnNldFBlcmlvZChpOiBudW1iZXIsIGw6IG51bWJlciwgbDE6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLlRpbWVCYXJyaWVyKFRpbWVCYXJyaWVyLm5hbWUsIFwiaW5TdW5yaXNlT3JTdW5zZXRQZXJpb2RcIiwgW2ksIGwsIGwxXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGluVGltZUNhdGVnb3J5KGk6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLlRpbWVCYXJyaWVyKFRpbWVCYXJyaWVyLm5hbWUsIFwiaW5UaW1lQ2F0ZWdvcnlcIiwgW2ldKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCZWFjb25CYXJyaWVyIGV4dGVuZHMgQXdhcmVuZXNzQmFycmllciB7XHJcblxyXG4gICAgc3RhdGljIGRpc2NvdmVyKG5hbWVzcGFjZTogc3RyaW5nLCB0eXBlPzogc3RyaW5nIHwgbnVsbCwgY29udGVudD86IHN0cmluZ1tdIHwgbnVsbCk6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkJlYWNvbkJhcnJpZXIoQmVhY29uQmFycmllci5uYW1lLCBcImRpc2NvdmVyXCIsIFtuYW1lc3BhY2UsIHR5cGUsIGNvbnRlbnRdKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMga2VlcChuYW1lc3BhY2U6IHN0cmluZywgdHlwZT86IHN0cmluZyB8IG51bGwsIGNvbnRlbnQ/OiBzdHJpbmdbXSB8IG51bGwpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CZWFjb25CYXJyaWVyKEJlYWNvbkJhcnJpZXIubmFtZSwgXCJrZWVwXCIsIFtuYW1lc3BhY2UsIHR5cGUsIGNvbnRlbnRdKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgbWlzc2VkKG5hbWVzcGFjZTogc3RyaW5nLCB0eXBlPzogc3RyaW5nIHwgbnVsbCwgY29udGVudD86IHN0cmluZ1tdIHwgbnVsbCk6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkJlYWNvbkJhcnJpZXIoQmVhY29uQmFycmllci5uYW1lLCBcIm1pc3NlZFwiLCBbbmFtZXNwYWNlLCB0eXBlLCBjb250ZW50XSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tYmluYXRpb25CYXJyaWVyIGV4dGVuZHMgQXdhcmVuZXNzQmFycmllciB7XHJcblxyXG4gICAgc3RhdGljIG9yKC4uLmF3YXJlbmVzczogQXdhcmVuZXNzQmFycmllcltdKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgYmFycmllciA9IG5ldyAoPGFueT53aW5kb3cpLkNvbWJpbmF0aW9uQmFycmllcihcIm9yXCIsIGF3YXJlbmVzcyk7XHJcbiAgICAgICAgYmFycmllci5jdXJyZW50QmFycmllcnMgPSBhd2FyZW5lc3M7XHJcbiAgICAgICAgYmFycmllci5jb21iTWV0aG9kID0gXCJvclwiO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihiYXJyaWVyKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBhbmQoLi4uYXdhcmVuZXNzOiBBd2FyZW5lc3NCYXJyaWVyW10pOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBiYXJyaWVyID0gbmV3ICg8YW55PndpbmRvdykuQ29tYmluYXRpb25CYXJyaWVyKFwiYW5kXCIsIGF3YXJlbmVzcyk7XHJcbiAgICAgICAgYmFycmllci5jdXJyZW50QmFycmllcnMgPSBhd2FyZW5lc3M7XHJcbiAgICAgICAgYmFycmllci5jb21iTWV0aG9kID0gXCJhbmRcIjtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoYmFycmllcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5vdChhd2FyZW5lc3M6IEF3YXJlbmVzc0JhcnJpZXIpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBiYXJyaWVyID0gbmV3ICg8YW55PndpbmRvdykuQ29tYmluYXRpb25CYXJyaWVyKFwibm90XCIsIFthd2FyZW5lc3NdKTtcclxuICAgICAgICBiYXJyaWVyLmN1cnJlbnRCYXJyaWVycyA9IFthd2FyZW5lc3NdO1xyXG4gICAgICAgIGJhcnJpZXIuY29tYk1ldGhvZCA9IFwibm90XCI7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGJhcnJpZXIpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=