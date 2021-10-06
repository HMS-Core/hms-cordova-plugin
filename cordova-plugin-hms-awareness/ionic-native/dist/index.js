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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HMSAwarenessOriginal = /** @class */ (function (_super) {
    __extends(HMSAwarenessOriginal, _super);
    function HMSAwarenessOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * It checks the permissions required to use this Kit.
     * @param  {HMSPermission} permission Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    HMSAwarenessOriginal.prototype.hasPermission = function (permission) { return cordova(this, "hasPermission", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains the necessary permissions to use the services.
     * @param  {HMSPermission} permission Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    HMSAwarenessOriginal.prototype.requestPermission = function (permission) { return cordova(this, "requestPermission", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains the necessary permissions to use the services.
     * @param  {HMSPermission[]} permissions Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    HMSAwarenessOriginal.prototype.requestPermissions = function (permissions) { return cordova(this, "requestPermissions", { "otherPromise": true }, arguments); };
    ;
    /**
     * This method enables HMSLogger capability which is used for sending usage analytics of Awareness SDK's methods to improve the service quality.
     * @returns Promise<any>
     */
    HMSAwarenessOriginal.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    /**
     * This method disables the HMSLogger capability which is used for sending usage analytics of Awareness SDK's methods to improve the service quality.
     * @returns Promise<any>
     */
    HMSAwarenessOriginal.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSAwarenessOriginal.pluginName = "HMSAwareness";
    HMSAwarenessOriginal.plugin = "cordova-plugin-hms-awareness";
    HMSAwarenessOriginal.pluginRef = "HMSAwareness";
    HMSAwarenessOriginal.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSAwarenessOriginal.platforms = ["Android"];
    return HMSAwarenessOriginal;
}(IonicNativePlugin));
var HMSAwareness = new HMSAwarenessOriginal();
export { HMSAwareness };
var AwarenessCaptureOriginal = /** @class */ (function (_super) {
    __extends(AwarenessCaptureOriginal, _super);
    function AwarenessCaptureOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Obtains the status of an audio device (connected or disconnected).
     * @returns Promise<any>
     */
    AwarenessCaptureOriginal.prototype.getHeadsetStatus = function () { return cordova(this, "getHeadsetStatus", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains the latitude and longitude of the location.
     * @returns Promise<any>
     */
    AwarenessCaptureOriginal.prototype.getLocation = function () { return cordova(this, "getLocation", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains user behavior, such as walking, running, cycling, driving, or staying still.
     * @returns Promise<any>
     */
    AwarenessCaptureOriginal.prototype.getBehaviorStatus = function () { return cordova(this, "getBehaviorStatus", { "otherPromise": true }, arguments); };
    ;
    /**
     * @param  {BluetoothDevice} blueoothDevice Indicates bluetooth device.
     * Obtain the status of the phone, for example, whether Bluetooth is connected or not.
     * @returns Promise<any>
     */
    AwarenessCaptureOriginal.prototype.getBluetoothStatus = function (blueoothDevice) { return cordova(this, "getBluetoothStatus", { "otherPromise": true }, arguments); };
    ;
    /**
     * Indicates whether the device has approached, connected to, or disconnected from a registered beacon.
     * @param  {BeaconStatusFilter} beaconStatusRequest Beacon Status.
     * @returns Promise<any>
     */
    AwarenessCaptureOriginal.prototype.getBeaconStatus = function (beaconStatusRequest) { return cordova(this, "getBeaconStatus", { "otherPromise": true }, arguments); };
    ;
    /**
     * The phone status awareness capability is supported, including the awareness of the app status.
     * @returns Promise<any>
     */
    AwarenessCaptureOriginal.prototype.getApplicationStatus = function () { return cordova(this, "getApplicationStatus", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains the illuminance of the environment where the device is located. The unit is lux. The illuminance is the intensity received by the light sensor of the device. When the light sensor is blocked or illuminated by strong light, the obtained illuminance changes accordingly.
     * @returns Promise<any>
     */
    AwarenessCaptureOriginal.prototype.getLightIntensity = function () { return cordova(this, "getLightIntensity", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtain the status of the phone, for example, whether the screen is on or off.
     * @returns Promise<any>
     */
    AwarenessCaptureOriginal.prototype.getScreenStatus = function () { return cordova(this, "getScreenStatus", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains the latitude and longitude of the current location.
     * @returns Promise<any>
     */
    AwarenessCaptureOriginal.prototype.getCurrentLocation = function () { return cordova(this, "getCurrentLocation", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtain the status of the phone, for example, whether the system is in dark mode.
     * @returns Promise<any>
     */
    AwarenessCaptureOriginal.prototype.getDarkModeStatus = function () { return cordova(this, "getDarkModeStatus", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtain the status of the phone, for example, whether the app is started or closed, whether Wi-Fi is connected or not.
     * @returns Promise<any>
     */
    AwarenessCaptureOriginal.prototype.getWifiStatus = function () { return cordova(this, "getWifiStatus", { "otherPromise": true }, arguments); };
    ;
    /**
     * Queries the weather information of the device location or a specified location. Weather of the current day (24 hours) and the next seven days (including the current day) can be queried.
     * @returns Promise<any>
     */
    AwarenessCaptureOriginal.prototype.getWeatherByDevice = function () { return cordova(this, "getWeatherByDevice", { "otherPromise": true }, arguments); };
    ;
    /**
     * Queries the weather information of the device location or a specified location. Weather of the current day (24 hours) and the next seven days (including the current day) can be queried.
     * @returns Promise<any>
     */
    AwarenessCaptureOriginal.prototype.getWeatherByIP = function () { return cordova(this, "getWeatherByIP", { "otherPromise": true }, arguments); };
    ;
    /**
     * Queries the weather information of the device location or a specified location. Weather of the current day (24 hours) and the next seven days (including the current day) can be queried.
     * @param  {WeatherPosition} weatherByPositionRequest Weather by Position.
     * @returns Promise<any>
     */
    AwarenessCaptureOriginal.prototype.getWeatherByPosition = function (weatherByPositionRequest) { return cordova(this, "getWeatherByPosition", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night.
     * @returns Promise<any>
     */
    AwarenessCaptureOriginal.prototype.getTimeCategories = function () { return cordova(this, "getTimeCategories", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night.
     * @param  {string} countryCode Time Categories By Contrycode request.
     * @returns Promise<any>
     */
    AwarenessCaptureOriginal.prototype.getTimeCategoriesByCountryCode = function (countryCode) { return cordova(this, "getTimeCategoriesByCountryCode", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night.
     * @returns Promise<any>
     */
    AwarenessCaptureOriginal.prototype.getTimeCategoriesByIP = function () { return cordova(this, "getTimeCategoriesByIP", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night.
     * @param  {TimeCategoriesByUserRequest} timeCategoriesByUserRequest Time Categories By User request.
     * @returns Promise<any>
     */
    AwarenessCaptureOriginal.prototype.getTimeCategoriesByUser = function (timeCategoriesByUserRequest) { return cordova(this, "getTimeCategoriesByUser", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night.
     * @param  {number} futureTimestamp Time Categories By Future request.
     * @returns Promise<any>
     */
    AwarenessCaptureOriginal.prototype.getTimeCategoriesForFuture = function (futureTimestamp) { return cordova(this, "getTimeCategoriesForFuture", { "otherPromise": true }, arguments); };
    ;
    /**
     * It enables the update window.
     * @param  {boolean} isEnable boolean enableUpdateWindow.
     * @returns Promise<any>
     */
    AwarenessCaptureOriginal.prototype.enableUpdateWindow = function (isEnable) { return cordova(this, "enableUpdateWindow", { "otherPromise": true }, arguments); };
    ;
    /**
 * It enables the update window.
 * @returns Promise<any>
 */
    AwarenessCaptureOriginal.prototype.querySupportingCapabilities = function () { return cordova(this, "querySupportingCapabilities", { "otherPromise": true }, arguments); };
    ;
    AwarenessCaptureOriginal.pluginName = "HMSAwareness";
    AwarenessCaptureOriginal.plugin = "cordova-plugin-hms-awareness";
    AwarenessCaptureOriginal.pluginRef = "AwarenessCapture";
    AwarenessCaptureOriginal.platforms = ["Android"];
    return AwarenessCaptureOriginal;
}(IonicNativePlugin));
var AwarenessCapture = new AwarenessCaptureOriginal();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1hd2FyZW5lc3MvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWN0QyxnQ0FBaUI7Ozs7SUFHL0M7Ozs7T0FJRztJQUNILG9DQUFhLGFBQUMsVUFBeUI7SUFFdEMsQ0FBQztJQUdGOzs7O09BSUc7SUFDSCx3Q0FBaUIsYUFBQyxVQUF5QjtJQUUxQyxDQUFDO0lBRUY7Ozs7T0FJRztJQUNILHlDQUFrQixhQUFDLFdBQTRCO0lBRTlDLENBQUM7SUFHRjs7O09BR0c7SUFDSCxtQ0FBWTtJQUtaOzs7T0FHRztJQUNILG9DQUFhOzs7Ozs7dUJBNUVqQjtFQStCa0MsaUJBQWlCO1NBQXRDLFlBQVk7O0lBeURhLG9DQUFpQjs7OztJQUduRDs7O09BR0c7SUFDSCwyQ0FBZ0I7SUFFZixDQUFDO0lBRUY7OztPQUdHO0lBQ0gsc0NBQVc7SUFFVixDQUFDO0lBRUY7OztPQUdHO0lBQ0gsNENBQWlCO0lBRWhCLENBQUM7SUFFRjs7OztPQUlHO0lBQ0gsNkNBQWtCLGFBQUMsY0FBK0I7SUFFakQsQ0FBQztJQUVGOzs7O09BSUc7SUFDSCwwQ0FBZSxhQUFDLG1CQUF1QztJQUV0RCxDQUFDO0lBRUY7OztPQUdHO0lBQ0gsK0NBQW9CO0lBRW5CLENBQUM7SUFFRjs7O09BR0c7SUFDSCw0Q0FBaUI7SUFFaEIsQ0FBQztJQUVGOzs7T0FHRztJQUNILDBDQUFlO0lBRWQsQ0FBQztJQUVGOzs7T0FHRztJQUNILDZDQUFrQjtJQUVqQixDQUFDO0lBRUY7OztPQUdHO0lBQ0gsNENBQWlCO0lBRWhCLENBQUM7SUFFRjs7O09BR0c7SUFDSCx3Q0FBYTtJQUVaLENBQUM7SUFFRjs7O09BR0c7SUFDSCw2Q0FBa0I7SUFFakIsQ0FBQztJQUVGOzs7T0FH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QzthQUFoQyxVQUFnQyxFQUFoQyxxQkFBZ0MsRUFBaEMsSUFBZ0M7WUFBaEMsOEJBQWdDOztRQUN2QyxJQUFNLE9BQU8sR0FBRyxJQUFVLE1BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDdkUsT0FBTyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7UUFDcEMsT0FBTyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDM0IsT0FBTyxJQUFJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSxzQkFBRyxHQUFWLFVBQVcsU0FBMkI7UUFDbEMsSUFBTSxPQUFPLEdBQUcsSUFBVSxNQUFPLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN6RSxPQUFPLENBQUMsZUFBZSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDM0IsT0FBTyxJQUFJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7NkJBcnZCTDtFQWl1QndDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQ29weXJpZ2h0IDIwMjAtMjAyMS4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcbiAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbi8qKlxuICogQG5hbWUgSE1TQXdhcmVuZXNzXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgQXdhcmVuZXNzIFBsdWdpbiBlbmFibGVzIGNvbW11bmljYXRpb24gYmV0d2VlbiB0aGUgSE1TIENvcmUgQXdhcmVuZXNzIFNESyBhbmQgQ29yZG92YSBwbGF0Zm9ybS4gVGhpcyBwbHVnaW4gZGVtb25zdHJhdGVzIHdpZGUtcmFuZ2luZyBmdW5jdGlvbmFsaXR5IG9mIHRoZSBITVMgQ29yZSBBd2FyZW5lc3MgU0RLLlxuICovXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiAnSE1TQXdhcmVuZXNzJyxcbiAgICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYXdhcmVuZXNzJyxcbiAgICBwbHVnaW5SZWY6ICdITVNBd2FyZW5lc3MnLFxuICAgIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luJyxcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU0F3YXJlbmVzcyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogSXQgY2hlY2tzIHRoZSBwZXJtaXNzaW9ucyByZXF1aXJlZCB0byB1c2UgdGhpcyBLaXQuXG4gICAgICogQHBhcmFtICB7SE1TUGVybWlzc2lvbn0gcGVybWlzc2lvbiBSZXByZXNlbnRzIHRoZSBsaXN0IGluIHdoaWNoIHBlcm1pc3Npb24gbmFtZXMgYXJlIGtlcHQuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxuICAgICAqL1xuICAgIGhhc1Blcm1pc3Npb24ocGVybWlzc2lvbjogSE1TUGVybWlzc2lvbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBPYnRhaW5zIHRoZSBuZWNlc3NhcnkgcGVybWlzc2lvbnMgdG8gdXNlIHRoZSBzZXJ2aWNlcy5cbiAgICAgKiBAcGFyYW0gIHtITVNQZXJtaXNzaW9ufSBwZXJtaXNzaW9uIFJlcHJlc2VudHMgdGhlIGxpc3QgaW4gd2hpY2ggcGVybWlzc2lvbiBuYW1lcyBhcmUga2VwdC5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICByZXF1ZXN0UGVybWlzc2lvbihwZXJtaXNzaW9uOiBITVNQZXJtaXNzaW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBPYnRhaW5zIHRoZSBuZWNlc3NhcnkgcGVybWlzc2lvbnMgdG8gdXNlIHRoZSBzZXJ2aWNlcy5cbiAgICAgKiBAcGFyYW0gIHtITVNQZXJtaXNzaW9uW119IHBlcm1pc3Npb25zIFJlcHJlc2VudHMgdGhlIGxpc3QgaW4gd2hpY2ggcGVybWlzc2lvbiBuYW1lcyBhcmUga2VwdC5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICByZXF1ZXN0UGVybWlzc2lvbnMocGVybWlzc2lvbnM6IEhNU1Blcm1pc3Npb25bXSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBlbmFibGVzIEhNU0xvZ2dlciBjYXBhYmlsaXR5IHdoaWNoIGlzIHVzZWQgZm9yIHNlbmRpbmcgdXNhZ2UgYW5hbHl0aWNzIG9mIEF3YXJlbmVzcyBTREsncyBtZXRob2RzIHRvIGltcHJvdmUgdGhlIHNlcnZpY2UgcXVhbGl0eS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgZGlzYWJsZXMgdGhlIEhNU0xvZ2dlciBjYXBhYmlsaXR5IHdoaWNoIGlzIHVzZWQgZm9yIHNlbmRpbmcgdXNhZ2UgYW5hbHl0aWNzIG9mIEF3YXJlbmVzcyBTREsncyBtZXRob2RzIHRvIGltcHJvdmUgdGhlIHNlcnZpY2UgcXVhbGl0eS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBkaXNhYmxlTG9nZ2VyKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6ICdITVNBd2FyZW5lc3MnLFxuICAgIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hd2FyZW5lc3MnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgICBwbHVnaW5SZWY6ICdBd2FyZW5lc3NDYXB0dXJlJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF3YXJlbmVzc0NhcHR1cmUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIE9idGFpbnMgdGhlIHN0YXR1cyBvZiBhbiBhdWRpbyBkZXZpY2UgKGNvbm5lY3RlZCBvciBkaXNjb25uZWN0ZWQpLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcbiAgICAgKi9cbiAgICBnZXRIZWFkc2V0U3RhdHVzKCk6IFByb21pc2U8SGVhZHNldFN0YXR1c1Jlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogT2J0YWlucyB0aGUgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBvZiB0aGUgbG9jYXRpb24uXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxuICAgICAqL1xuICAgIGdldExvY2F0aW9uKCk6IFByb21pc2U8TG9jYXRpb25SZXNwb25zZT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIE9idGFpbnMgdXNlciBiZWhhdmlvciwgc3VjaCBhcyB3YWxraW5nLCBydW5uaW5nLCBjeWNsaW5nLCBkcml2aW5nLCBvciBzdGF5aW5nIHN0aWxsLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcbiAgICAgKi9cbiAgICBnZXRCZWhhdmlvclN0YXR1cygpOiBQcm9taXNlPEJlaGF2aW9yUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gIHtCbHVldG9vdGhEZXZpY2V9IGJsdWVvb3RoRGV2aWNlIEluZGljYXRlcyBibHVldG9vdGggZGV2aWNlLlxuICAgICAqIE9idGFpbiB0aGUgc3RhdHVzIG9mIHRoZSBwaG9uZSwgZm9yIGV4YW1wbGUsIHdoZXRoZXIgQmx1ZXRvb3RoIGlzIGNvbm5lY3RlZCBvciBub3QuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxuICAgICAqL1xuICAgIGdldEJsdWV0b290aFN0YXR1cyhibHVlb290aERldmljZTogQmx1ZXRvb3RoRGV2aWNlKTogUHJvbWlzZTxCbHVldG9vdGhTdGF0dXNSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBkZXZpY2UgaGFzIGFwcHJvYWNoZWQsIGNvbm5lY3RlZCB0bywgb3IgZGlzY29ubmVjdGVkIGZyb20gYSByZWdpc3RlcmVkIGJlYWNvbi5cbiAgICAgKiBAcGFyYW0gIHtCZWFjb25TdGF0dXNGaWx0ZXJ9IGJlYWNvblN0YXR1c1JlcXVlc3QgQmVhY29uIFN0YXR1cy5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBnZXRCZWFjb25TdGF0dXMoYmVhY29uU3RhdHVzUmVxdWVzdDogQmVhY29uU3RhdHVzRmlsdGVyKTogUHJvbWlzZTxCZWFjb25TdGF0dXNSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoZSBwaG9uZSBzdGF0dXMgYXdhcmVuZXNzIGNhcGFiaWxpdHkgaXMgc3VwcG9ydGVkLCBpbmNsdWRpbmcgdGhlIGF3YXJlbmVzcyBvZiB0aGUgYXBwIHN0YXR1cy5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXG4gICAgICovXG4gICAgZ2V0QXBwbGljYXRpb25TdGF0dXMoKTogUHJvbWlzZTxBcHBsaWNhdGlvblN0YXR1c1Jlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogT2J0YWlucyB0aGUgaWxsdW1pbmFuY2Ugb2YgdGhlIGVudmlyb25tZW50IHdoZXJlIHRoZSBkZXZpY2UgaXMgbG9jYXRlZC4gVGhlIHVuaXQgaXMgbHV4LiBUaGUgaWxsdW1pbmFuY2UgaXMgdGhlIGludGVuc2l0eSByZWNlaXZlZCBieSB0aGUgbGlnaHQgc2Vuc29yIG9mIHRoZSBkZXZpY2UuIFdoZW4gdGhlIGxpZ2h0IHNlbnNvciBpcyBibG9ja2VkIG9yIGlsbHVtaW5hdGVkIGJ5IHN0cm9uZyBsaWdodCwgdGhlIG9idGFpbmVkIGlsbHVtaW5hbmNlIGNoYW5nZXMgYWNjb3JkaW5nbHkuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxuICAgICAqL1xuICAgIGdldExpZ2h0SW50ZW5zaXR5KCk6IFByb21pc2U8QW1iaWVudExpZ2h0UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBPYnRhaW4gdGhlIHN0YXR1cyBvZiB0aGUgcGhvbmUsIGZvciBleGFtcGxlLCB3aGV0aGVyIHRoZSBzY3JlZW4gaXMgb24gb3Igb2ZmLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcbiAgICAgKi9cbiAgICBnZXRTY3JlZW5TdGF0dXMoKTogUHJvbWlzZTxTY3JlZW5TdGF0dXNSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIE9idGFpbnMgdGhlIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgb2YgdGhlIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxuICAgICAqL1xuICAgIGdldEN1cnJlbnRMb2NhdGlvbigpOiBQcm9taXNlPExvY2F0aW9uUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBPYnRhaW4gdGhlIHN0YXR1cyBvZiB0aGUgcGhvbmUsIGZvciBleGFtcGxlLCB3aGV0aGVyIHRoZSBzeXN0ZW0gaXMgaW4gZGFyayBtb2RlLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcbiAgICAgKi9cbiAgICBnZXREYXJrTW9kZVN0YXR1cygpOiBQcm9taXNlPERhcmttb2RlU3RhdHVzUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBPYnRhaW4gdGhlIHN0YXR1cyBvZiB0aGUgcGhvbmUsIGZvciBleGFtcGxlLCB3aGV0aGVyIHRoZSBhcHAgaXMgc3RhcnRlZCBvciBjbG9zZWQsIHdoZXRoZXIgV2ktRmkgaXMgY29ubmVjdGVkIG9yIG5vdC5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXG4gICAgICovXG4gICAgZ2V0V2lmaVN0YXR1cygpOiBQcm9taXNlPFdpZmlTdGF0dXNSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFF1ZXJpZXMgdGhlIHdlYXRoZXIgaW5mb3JtYXRpb24gb2YgdGhlIGRldmljZSBsb2NhdGlvbiBvciBhIHNwZWNpZmllZCBsb2NhdGlvbi4gV2VhdGhlciBvZiB0aGUgY3VycmVudCBkYXkgKDI0IGhvdXJzKSBhbmQgdGhlIG5leHQgc2V2ZW4gZGF5cyAoaW5jbHVkaW5nIHRoZSBjdXJyZW50IGRheSkgY2FuIGJlIHF1ZXJpZWQuIFxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcbiAgICAgKi9cbiAgICBnZXRXZWF0aGVyQnlEZXZpY2UoKTogUHJvbWlzZTxXZWF0aGVyU3RhdHVzUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBRdWVyaWVzIHRoZSB3ZWF0aGVyIGluZm9ybWF0aW9uIG9mIHRoZSBkZXZpY2UgbG9jYXRpb24gb3IgYSBzcGVjaWZpZWQgbG9jYXRpb24uIFdlYXRoZXIgb2YgdGhlIGN1cnJlbnQgZGF5ICgyNCBob3VycykgYW5kIHRoZSBuZXh0IHNldmVuIGRheXMgKGluY2x1ZGluZyB0aGUgY3VycmVudCBkYXkpIGNhbiBiZSBxdWVyaWVkLiBcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXG4gICAgICovXG4gICAgZ2V0V2VhdGhlckJ5SVAoKTogUHJvbWlzZTxXZWF0aGVyU3RhdHVzUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBRdWVyaWVzIHRoZSB3ZWF0aGVyIGluZm9ybWF0aW9uIG9mIHRoZSBkZXZpY2UgbG9jYXRpb24gb3IgYSBzcGVjaWZpZWQgbG9jYXRpb24uIFdlYXRoZXIgb2YgdGhlIGN1cnJlbnQgZGF5ICgyNCBob3VycykgYW5kIHRoZSBuZXh0IHNldmVuIGRheXMgKGluY2x1ZGluZyB0aGUgY3VycmVudCBkYXkpIGNhbiBiZSBxdWVyaWVkLiBcbiAgICAgKiBAcGFyYW0gIHtXZWF0aGVyUG9zaXRpb259IHdlYXRoZXJCeVBvc2l0aW9uUmVxdWVzdCBXZWF0aGVyIGJ5IFBvc2l0aW9uLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcbiAgICAgKi9cbiAgICBnZXRXZWF0aGVyQnlQb3NpdGlvbih3ZWF0aGVyQnlQb3NpdGlvblJlcXVlc3Q6IFdlYXRoZXJQb3NpdGlvbik6IFByb21pc2U8V2VhdGhlclN0YXR1c1Jlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBPYnRhaW5zIHRoZSBjdXJyZW50IGxvY2FsIHRpbWUgb3IgdGltZSBvZiBhIHNwZWNpZmllZCBsb2NhdGlvbiwgc3VjaCBhcyB3b3JraW5nIGRheSwgd2Vla2VuZCwgaG9saWRheSwgbW9ybmluZywgYWZ0ZXJub29uLCBldmVuaW5nLCBvciBsYXRlIG5pZ2h0LlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcbiAgICAgKi9cbiAgICBnZXRUaW1lQ2F0ZWdvcmllcygpOiBQcm9taXNlPFRpbWVDYXRlZ29yaWVzUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBPYnRhaW5zIHRoZSBjdXJyZW50IGxvY2FsIHRpbWUgb3IgdGltZSBvZiBhIHNwZWNpZmllZCBsb2NhdGlvbiwgc3VjaCBhcyB3b3JraW5nIGRheSwgd2Vla2VuZCwgaG9saWRheSwgbW9ybmluZywgYWZ0ZXJub29uLCBldmVuaW5nLCBvciBsYXRlIG5pZ2h0LlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gY291bnRyeUNvZGUgVGltZSBDYXRlZ29yaWVzIEJ5IENvbnRyeWNvZGUgcmVxdWVzdC5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXG4gICAgICovXG4gICAgZ2V0VGltZUNhdGVnb3JpZXNCeUNvdW50cnlDb2RlKGNvdW50cnlDb2RlOiBzdHJpbmcpOiBQcm9taXNlPFRpbWVDYXRlZ29yaWVzUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBPYnRhaW5zIHRoZSBjdXJyZW50IGxvY2FsIHRpbWUgb3IgdGltZSBvZiBhIHNwZWNpZmllZCBsb2NhdGlvbiwgc3VjaCBhcyB3b3JraW5nIGRheSwgd2Vla2VuZCwgaG9saWRheSwgbW9ybmluZywgYWZ0ZXJub29uLCBldmVuaW5nLCBvciBsYXRlIG5pZ2h0LlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcbiAgICAgKi9cbiAgICBnZXRUaW1lQ2F0ZWdvcmllc0J5SVAoKTogUHJvbWlzZTxUaW1lQ2F0ZWdvcmllc1Jlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogT2J0YWlucyB0aGUgY3VycmVudCBsb2NhbCB0aW1lIG9yIHRpbWUgb2YgYSBzcGVjaWZpZWQgbG9jYXRpb24sIHN1Y2ggYXMgd29ya2luZyBkYXksIHdlZWtlbmQsIGhvbGlkYXksIG1vcm5pbmcsIGFmdGVybm9vbiwgZXZlbmluZywgb3IgbGF0ZSBuaWdodC5cbiAgICAgKiBAcGFyYW0gIHtUaW1lQ2F0ZWdvcmllc0J5VXNlclJlcXVlc3R9IHRpbWVDYXRlZ29yaWVzQnlVc2VyUmVxdWVzdCBUaW1lIENhdGVnb3JpZXMgQnkgVXNlciByZXF1ZXN0LlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcbiAgICAgKi9cbiAgICBnZXRUaW1lQ2F0ZWdvcmllc0J5VXNlcih0aW1lQ2F0ZWdvcmllc0J5VXNlclJlcXVlc3Q6IFRpbWVDYXRlZ29yaWVzQnlVc2VyUmVxdWVzdCk6IFByb21pc2U8VGltZUNhdGVnb3JpZXNSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIE9idGFpbnMgdGhlIGN1cnJlbnQgbG9jYWwgdGltZSBvciB0aW1lIG9mIGEgc3BlY2lmaWVkIGxvY2F0aW9uLCBzdWNoIGFzIHdvcmtpbmcgZGF5LCB3ZWVrZW5kLCBob2xpZGF5LCBtb3JuaW5nLCBhZnRlcm5vb24sIGV2ZW5pbmcsIG9yIGxhdGUgbmlnaHQuXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSBmdXR1cmVUaW1lc3RhbXAgVGltZSBDYXRlZ29yaWVzIEJ5IEZ1dHVyZSByZXF1ZXN0LlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcbiAgICAgKi9cbiAgICBnZXRUaW1lQ2F0ZWdvcmllc0ZvckZ1dHVyZShmdXR1cmVUaW1lc3RhbXA6IG51bWJlcik6IFByb21pc2U8VGltZUNhdGVnb3JpZXNSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIEl0IGVuYWJsZXMgdGhlIHVwZGF0ZSB3aW5kb3cuXG4gICAgICogQHBhcmFtICB7Ym9vbGVhbn0gaXNFbmFibGUgYm9vbGVhbiBlbmFibGVVcGRhdGVXaW5kb3cuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxuICAgICAqL1xuICAgIGVuYWJsZVVwZGF0ZVdpbmRvdyhpc0VuYWJsZTogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gKiBJdCBlbmFibGVzIHRoZSB1cGRhdGUgd2luZG93LlxuICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxuICovXG4gICAgcXVlcnlTdXBwb3J0aW5nQ2FwYWJpbGl0aWVzKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xufVxuLy8gQXdhcmVuZXNzQ2FwdHVyZSBJbnRlcmZhY2VzIC8vXG5cbmV4cG9ydCBpbnRlcmZhY2UgV2VhdGhlckJ5UG9zaXRpb25SZXF1ZXN0IHtcbiAgICB3ZWF0aGVyUG9zaXRpb246IFdlYXRoZXJQb3NpdGlvbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgV2VhdGhlclBvc2l0aW9uIHtcbiAgICBtQ291bnRyeT86IHN0cmluZyB8IG51bGwsXG4gICAgbVByb3ZpbmNlPzogc3RyaW5nIHwgbnVsbCxcbiAgICBtQ2l0eTogc3RyaW5nLFxuICAgIG1EaXN0cmljdD86IHN0cmluZyB8IG51bGwsXG4gICAgbUNvdW50eT86IHN0cmluZyB8IG51bGwsXG4gICAgbUxvY2FsZTogc3RyaW5nLFxufVxuZXhwb3J0IGludGVyZmFjZSBFbmFibGVVcGRhdGVXaW5kb3dSZXF1ZXN0IHtcbiAgICBpc0VuYWJsZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaW1lQ2F0ZWdvcmllc0J5VXNlclJlcXVlc3Qge1xuICAgIGxvY2F0aW9uOiBDb29yZGluYXRlO1xufVxuZXhwb3J0IGludGVyZmFjZSBDb29yZGluYXRlIHtcbiAgICBsYXRpdHVkZTogbnVtYmVyO1xuICAgIGxvbmdpdHVkZTogbnVtYmVyXG59XG5leHBvcnQgaW50ZXJmYWNlIFRpbWVDYXRlZ29yaWVzQnlDb3VudHJ5UmVxdWVzdCB7XG4gICAgY291bnRyeUNvZGU6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVGltZUNhdGVnb3JpZXNGb3JGdXR1cmVSZXF1ZXN0IHtcbiAgICBmdXR1cmVUaW1lc3RhbXA6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQmVhY29uU3RhdHVzUmVxdWVzdCB7XG4gICAgYmVhY29uU3RhdHVzRmlsdGVyOiBCZWFjb25TdGF0dXNGaWx0ZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIEJlYWNvblN0YXR1c0ZpbHRlciB7XG4gICAgbmFtZXNwYWNlOiBzdHJpbmc7XG4gICAgdHlwZT86IHN0cmluZyB8IG51bGw7XG4gICAgY29udGVudD86IEFycmF5PGFueT4gfCBudWxsO1xufVxuXG4vLyBBd2FyZW5lc3NCYXJyaWVyIEludGVyZmFjZXMgLy9cblxuZXhwb3J0IGludGVyZmFjZSBIZWFkc2V0U3RhdHVzUmVzcG9uc2Uge1xuICAgIGhlYWRzZXRTdGF0dXM6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQmx1ZXRvb3RoU3RhdHVzUmVzcG9uc2Uge1xuICAgIGJsdWV0b290aFN0YXR1czogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBXaWZpU3RhdHVzUmVzcG9uc2Uge1xuICAgIHdpZmlTdGF0dXM6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2NyZWVuU3RhdHVzUmVzcG9uc2Uge1xuICAgIHNjcmVlblN0YXR1czogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBEYXJrbW9kZVN0YXR1c1Jlc3BvbnNlIHtcbiAgICBkYXJrbW9kZVN0YXR1czogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvblN0YXR1c1Jlc3BvbnNlIHtcbiAgICBhcHBsaWNhdGlvblN0YXR1czogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBBbWJpZW50TGlnaHRSZXNwb25zZSB7XG4gICAgbGlnaHRJbnRlbnNpdHk6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYXRpb25SZXNwb25zZSB7XG4gICAgbGF0aXR1ZGU6IG51bWJlcjtcbiAgICBsb25naXR1ZGU6IG51bWJlcjtcbiAgICBhbHRpdHVkZTogbnVtYmVyO1xuICAgIHNwZWVkOiBudW1iZXI7XG4gICAgYmVhcmluZzogbnVtYmVyO1xuICAgIGFjY3VyYWN5OiBudW1iZXI7XG4gICAgdmVydGljYWxBY2N1cmFjeU1ldGVycz86IG51bWJlciB8IG51bGw7XG4gICAgYmVhcmluZ0FjY3VyYWN5RGVncmVlcz86IG51bWJlciB8IG51bGw7XG4gICAgc3BlZWRBY2N1cmFjeU1ldGVyc1BlclNlY29uZD86IG51bWJlciB8IG51bGw7XG4gICAgdGltZTogbnVtYmVyO1xuICAgIGZyb21Nb2NrUHJvdmlkZXI6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQmVoYXZpb3JSZXNwb25zZSB7XG4gICAgZWxhcHNlZFJlYWx0aW1lTWlsbGlzOiBudW1iZXI7XG4gICAgdGltZTogbnVtYmVyO1xuICAgIG1vc3RMaWtlbHlCZWhhdmlvcjogTW9zdExpa2VseUJlaGF2aW9yO1xuICAgIHByb2JhYmxlQmVoYXZpb3I6IEFycmF5PE1vc3RMaWtlbHlCZWhhdmlvcj47XG59XG5leHBvcnQgaW50ZXJmYWNlIE1vc3RMaWtlbHlCZWhhdmlvciB7XG4gICAgY29uZmlkZW5jZTogbnVtYmVyO1xuICAgIHR5cGU6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgV2VhdGhlclN0YXR1c1Jlc3BvbnNlIHtcbiAgICBkYWlseVdlYXRoZXI/OiAoRGFpbHlXZWF0aGVyKVtdIHwgbnVsbDtcbiAgICBob3VybHlXZWF0aGVyPzogKEhvdXJseVdlYXRoZXIpW10gfCBudWxsO1xuICAgIGxpdmVJbmZvPzogKG51bGwpW10gfCBudWxsO1xuICAgIGFxaT86IEFxaSB8IG51bGw7XG4gICAgd2VhdGhlclNpdHVhdGlvbjogV2VhdGhlclNpdHVhdGlvbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRGFpbHlXZWF0aGVyIHtcbiAgICBhcWlWYWx1ZTogbnVtYmVyO1xuICAgIGRhdGVUaW1lU3RhbXA6IG51bWJlcjtcbiAgICBtYXhUZW1wQzogbnVtYmVyO1xuICAgIG1heFRlbXBGOiBudW1iZXI7XG4gICAgbWluVGVtcEM6IG51bWJlcjtcbiAgICBtaW5UZW1wRjogbnVtYmVyO1xuICAgIG1vb25QaGFzZTogc3RyaW5nO1xuICAgIG1vb25SaXNlOiBudW1iZXI7XG4gICAgbW9vblNldDogbnVtYmVyO1xuICAgIHN1blJpc2U6IG51bWJlcjtcbiAgICBzdW5TZXQ6IG51bWJlcjtcbiAgICBzaXR1YXRpb25EYXk6IFNpdHVhdGlvbkRheU9yU2l0dWF0aW9uTmlnaHQ7XG4gICAgc2l0dWF0aW9uTmlnaHQ6IFNpdHVhdGlvbkRheU9yU2l0dWF0aW9uTmlnaHQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIFNpdHVhdGlvbkRheU9yU2l0dWF0aW9uTmlnaHQge1xuICAgIGNuV2VhdGhlcklkOiBudW1iZXI7XG4gICAgd2VhdGhlcklkOiBudW1iZXI7XG4gICAgd2luZERpcjogc3RyaW5nO1xuICAgIHdpbmRMZXZlbDogbnVtYmVyO1xuICAgIHdpbmRTcGVlZDogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBIb3VybHlXZWF0aGVyIHtcbiAgICBjbldlYXRoZXJJZDogbnVtYmVyO1xuICAgIGRhdGVUaW1lU3RhbXA6IG51bWJlcjtcbiAgICByYWluUHJvYmFiaWxpdHk6IG51bWJlcjtcbiAgICB0ZW1wQzogbnVtYmVyO1xuICAgIHRlbXBGOiBudW1iZXI7XG4gICAgd2VhdGhlcklkOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIEFxaSB7XG4gICAgYXFpVmFsdWU6IG51bWJlcjtcbiAgICBDbzogbnVtYmVyO1xuICAgIE5vMjogbnVtYmVyO1xuICAgIE8zOiBudW1iZXI7XG4gICAgUG0xMDogbnVtYmVyO1xuICAgIFBtMjU6IG51bWJlcjtcbiAgICBTbzI6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgV2VhdGhlclNpdHVhdGlvbiB7XG4gICAgY2l0eTogQ2l0eTtcbiAgICBzaXR1YXRpb246IFNpdHVhdGlvbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2l0eSB7XG4gICAgY2l0eUNvZGU6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgcHJvdmluY2VOYW1lOiBzdHJpbmc7XG4gICAgdGltZVpvbmU6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2l0dWF0aW9uIHtcbiAgICBjbldlYXRoZXJJZDogbnVtYmVyO1xuICAgIGh1bWlkaXR5OiBzdHJpbmc7XG4gICAgcHJlc3N1cmU6IG51bWJlcjtcbiAgICByZWFsRmVlbEM6IG51bWJlcjtcbiAgICByZWFsRmVlbEY6IG51bWJlcjtcbiAgICB0ZW1wZXJhdHVyZUM6IG51bWJlcjtcbiAgICB0ZW1wZXJhdHVyZUY6IG51bWJlcjtcbiAgICB1cGRhdGVUaW1lOiBudW1iZXI7XG4gICAgdXZJbmRleDogbnVtYmVyO1xuICAgIHdlYXRoZXJJZDogbnVtYmVyO1xuICAgIHdpbmREaXI6IHN0cmluZztcbiAgICB3aW5kU3BlZWQ6IG51bWJlcjtcbiAgICB3aW5kTGV2ZWw6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXBhYmlsaXR5UmVzcG9uc2Uge1xuICAgIGRldmljZVN1cHBvcnRDYXBhYmlsaXRpZXM/OiBEZXZpY2VTdXBwb3J0Q2FwYWJpbGl0aWVzW10gfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VTdXBwb3J0Q2FwYWJpbGl0aWVzIHtcbiAgICBjYXBhYmlsaXR5U3RhdHVzOiBudW1iZXI7XG4gICAgY2FwYWJpbGl0eVN0YXR1c05hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaW1lQ2F0ZWdvcmllc1Jlc3BvbnNlIHtcbiAgICB0aW1lQ2F0ZWdvcmllcz86IFRpbWVDYXRlZ29yaWVzW10gfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBUaW1lQ2F0ZWdvcmllcyB7XG4gICAgVGltZUJhcnJpZXI6IG51bWJlcjtcbiAgICBUaW1lQmFycmllck5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCZWFjb25TdGF0dXNSZXNwb25zZSB7XG4gICAgYmVhY29uRGF0YT86IEJlYWNvbkRhdGFbXSB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIEJlYWNvbkRhdGEge1xuICAgIEJlaGF2aW9yQmFycmllcjogbnVtYmVyO1xuICAgIEJlaGF2aW9yQmFycmllck5hbWU6IHN0cmluZztcbn1cblxuXG4vLyBBd2FyZW5lc3NCYXJyaWVyIFJldHVybiBcblxuZXhwb3J0IGludGVyZmFjZSBCYXJyaWVyU3RhdHVzIHtcbiAgICBiYXJyaWVyTGFiZWw6IHN0cmluZztcbiAgICBwcmVzZW50U3RhdHVzOiBudW1iZXI7XG4gICAgbGFzdFN0YXR1czogbnVtYmVyO1xuICAgIGxhc3RCYXJyaWVyVXBkYXRlVGltZTogbnVtYmVyO1xufVxuXG4vL0VudW0gdmFsdWVcbmV4cG9ydCBlbnVtIEhlYWRzZXRTdGF0dXMge1xuICAgIENPTk5FQ1RFRCA9IDEsXG4gICAgRElTQ09OTkVDVEVEID0gMCxcbn1cbmV4cG9ydCBlbnVtIFdpZmlTdGF0dXMge1xuICAgIENPTk5FQ1RFRCA9IDEsXG4gICAgRElTQ09OTkVDVEVEID0gNCxcbiAgICBFTkFCTEVEID0gMyxcbiAgICBESVNBQkxFRCA9IC0xLFxufVxuZXhwb3J0IGVudW0gQmx1ZXRvb3RoU3RhdHVzIHtcbiAgICBDT05ORUNURUQgPSAxLFxuICAgIERJU0NPTk5FQ1RFRCA9IDAsXG59XG5leHBvcnQgZW51bSBTY3JlZW5TdGF0dXMge1xuICAgIFNDUkVFTk9OID0gMSxcbiAgICBTQ1JFRU5PRkYgPSAwLFxuICAgIFVOTE9DSyA9IDIsXG59XG5leHBvcnQgZW51bSBCZWhhdmlvckJhcnJpZXJDb25zdGFudCB7XG4gICAgQkVIQVZJT1JfSU5fVkVISUNMRSA9IDAsXG4gICAgQkVIQVZJT1JfT05fQklDWUNMRSA9IDEsXG4gICAgQkVIQVZJT1JfT05fRk9PVCA9IDIsXG4gICAgQkVIQVZJT1JfU1RJTEwgPSAzLFxuICAgIEJFSEFWSU9SX1dBTEtJTkcgPSA3LFxuICAgIEJFSEFWSU9SX1JVTk5JTkcgPSA4LFxufVxuZXhwb3J0IGVudW0gQmx1ZXRvb3RoRGV2aWNlIHtcbiAgICBERVZJQ0VfQ0FSID0gMFxufVxuZXhwb3J0IGVudW0gVGltZUJhcnJpZXJDb25zdGFudHMge1xuICAgIFNVTlJJU0VfQ09ERSA9IDAsXG4gICAgU1VOU0VUX0NPREUgPSAxLFxuICAgIFRJTUVfQ0FURUdPUllfTU9STklORyA9IDEsXG4gICAgVElNRV9DQVRFR09SWV9BRlRFUk5PT04gPSAyLFxuICAgIFRJTUVfQ0FURUdPUllfRVZFTklORyA9IDMsXG4gICAgVElNRV9DQVRFR09SWV9OSUdIVCA9IDQsXG4gICAgVElNRV9DQVRFR09SWV9IT0xJREFZID0gNSxcbiAgICBUSU1FX0NBVEVHT1JZX1dFRUtEQVkgPSA2LFxuICAgIFRJTUVfQ0FURUdPUllfV0VFS0VORCA9IDcsXG4gICAgVElNRV9DQVRFR09SWV9OT1RfSE9MSURBWSA9IDgsXG4gICAgU1VOREFZX0NPREUgPSAxLFxuICAgIE1PTkRBWV9DT0RFID0gMixcbiAgICBUVUVTREFZX0NPREUgPSAzLFxuICAgIFdFRE5FU0RBWV9DT0RFID0gNCxcbiAgICBUSFVSU0RBWV9DT0RFID0gNSxcbiAgICBGUklEQVlfQ09ERSA9IDYsXG4gICAgU0FUVVJEQVlfQ09ERSA9IDcsXG59XG5leHBvcnQgZW51bSBITVNQZXJtaXNzaW9uIHtcbiAgICBQRVJNSVNTSU9OX0FDQ0VTU19GSU5FX0xPQ0FUSU9OID0gXCJhbmRyb2lkLnBlcm1pc3Npb24uQUNDRVNTX0ZJTkVfTE9DQVRJT05cIixcbiAgICBQRVJNSVNTSU9OX0hVQVdFSV9BQ1RJVklUWV9SRUNPR05JVElPTiA9IFwiY29tLmh1YXdlaS5obXMucGVybWlzc2lvbi5BQ1RJVklUWV9SRUNPR05JVElPTlwiLFxuICAgIFBFUk1JU1NJT05fQUNUSVZJVFlfUkVDT0dOSVRJT04gPSBcImFuZHJvaWQucGVybWlzc2lvbi5BQ1RJVklUWV9SRUNPR05JVElPTlwiLFxuICAgIFBFUk1JU1NJT05fQkxVRVRPT1RIID0gXCJhbmRyb2lkLnBlcm1pc3Npb24uQkxVRVRPT1RIXCIsXG4gICAgUEVSTUlTU0lPTl9DSEFOR0VfV0lGSV9TVEFURSA9IFwiYW5kcm9pZC5wZXJtaXNzaW9uLkNIQU5HRV9XSUZJX1NUQVRFXCIsXG4gICAgUEVSTUlTU0lPTl9BQ0NFU1NfQ09BUlNFX0xPQ0FUSU9OID0gXCJhbmRyb2lkLnBlcm1pc3Npb24uQUNDRVNTX0NPQVJTRV9MT0NBVElPTlwiLFxuICAgIFBFUk1JU1NJT05fQUNDRVNTX0JBQ0tHUk9VTkRfTE9DQVRJT04gPSBcImFuZHJvaWQucGVybWlzc2lvbi5BQ0NFU1NfQkFDS0dST1VORF9MT0NBVElPTlwiXG59XG5cblxuZXhwb3J0IGNsYXNzIEF3YXJlbmVzc0JhcnJpZXIge1xuICAgIHByaXZhdGUgY29yZG92YUJhcnJpZXI6IGFueTtcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoY29yZG92YUJhcnJpZXI6IGFueSkge1xuICAgICAgICB0aGlzLmNvcmRvdmFCYXJyaWVyID0gY29yZG92YUJhcnJpZXI7XG4gICAgfVxuICAgIHN1YnNjcmliZShjYWxsYmFjazogKGRhdGE6IGFueSkgPT4gdm9pZCk6IEF3YXJlbmVzc0JhcnJpZXIge1xuICAgICAgICB0aGlzLmNvcmRvdmFCYXJyaWVyLnN1YnNjcmliZShjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjYXRjaChjYWxsYmFjazogKGRhdGE6IGFueSkgPT4gdm9pZCk6IEF3YXJlbmVzc0JhcnJpZXIge1xuICAgICAgICB0aGlzLmNvcmRvdmFCYXJyaWVyLmNhdGNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJ1bihiYXJyaWVyTGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvcmRvdmFCYXJyaWVyLnJ1bihiYXJyaWVyTGFiZWwpO1xuICAgIH1cbiAgICBydW5JbkJhY2tncm91bmQoYmFycmllckxhYmVsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29yZG92YUJhcnJpZXIucnVuSW5CYWNrZ3JvdW5kKGJhcnJpZXJMYWJlbCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBCYXJyaWVyTWFuYWdlciB7XG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIHN0YXRpYyBkZWxldGVBbGxCYXJyaWVycyhzdWNjZXNzOiBhbnksIGVycm9yOiBhbnkpOiBhbnkge1xuICAgICAgICAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuZGVsZXRlQWxsQmFycmllcnMoc3VjY2VzcywgZXJyb3IpO1xuICAgIH1cbiAgICBzdGF0aWMgZGVsZXRlQmFycmllcldpdGhMYWJlbHMoc3VjY2VzczogYW55LCBlcnJvcjogYW55LCBwYXJhbXM6IGFueSk6IGFueSB7XG4gICAgICAgICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5kZWxldGVCYXJyaWVyV2l0aExhYmVscyhzdWNjZXNzLCBlcnJvciwgcGFyYW1zKTtcbiAgICB9XG4gICAgc3RhdGljIHVuUmVnaXN0ZXJSZWNlaXZlcihzdWNjZXNzOiBhbnksIGVycm9yOiBhbnkpOiBhbnkge1xuICAgICAgICAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIudW5SZWdpc3RlclJlY2VpdmVyKHN1Y2Nlc3MsIGVycm9yKTtcbiAgICB9XG4gICAgc3RhdGljIHF1ZXJ5QmFycmllcnNXaXRoQmFycmllcktleXMoc3VjY2VzczogYW55LCBlcnJvcjogYW55LCBwYXJhbXM6IGFueSk6IGFueSB7XG4gICAgICAgICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5xdWVyeUJhcnJpZXJzV2l0aEJhcnJpZXJLZXlzKHN1Y2Nlc3MsIGVycm9yLCBwYXJhbXMpO1xuICAgIH1cbiAgICBzdGF0aWMgcXVlcnlCYXJyaWVyc1dpdGhBbGxCYXJyaWVycyhzdWNjZXNzOiBhbnksIGVycm9yOiBhbnkpOiBhbnkge1xuICAgICAgICAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIucXVlcnlCYXJyaWVyc1dpdGhBbGxCYXJyaWVycyhzdWNjZXNzLCBlcnJvcik7XG4gICAgfVxuICAgIHN0YXRpYyBzdG9wQmFja2dyb3VuZFNlcnZpY2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuc3RvcEJhY2tncm91bmRTZXJ2aWNlKCk7XG4gICAgfVxuICAgIHN0YXRpYyBzZXRCYWNrZ3JvdW5kRmlsZShmaWxlTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuc2V0QmFja2dyb3VuZEZpbGUoZmlsZU5hbWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEhlYWRzZXRCYXJyaWVyIGV4dGVuZHMgQXdhcmVuZXNzQmFycmllciB7XG4gICAgc3RhdGljIGtlZXBpbmcoaGVhZHNldFN0YXR1czogbnVtYmVyKTogQXdhcmVuZXNzQmFycmllciB7XG4gICAgICAgIGNvbnN0IGJhcnJpZXIgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkhlYWRzZXRCYXJyaWVyKEhlYWRzZXRCYXJyaWVyLm5hbWUsIFwia2VlcGluZ1wiLCBbaGVhZHNldFN0YXR1c10pO1xuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoYmFycmllcik7XG4gICAgfVxuICAgIHN0YXRpYyBjb25uZWN0aW5nKCk6IEF3YXJlbmVzc0JhcnJpZXIge1xuICAgICAgICBjb25zdCBiYXJyaWVyID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5IZWFkc2V0QmFycmllcihIZWFkc2V0QmFycmllci5uYW1lLCBcImNvbm5lY3RpbmdcIiwgW10pO1xuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoYmFycmllcik7XG4gICAgfVxuICAgIHN0YXRpYyBkaXNjb25uZWN0aW5nKCk6IEF3YXJlbmVzc0JhcnJpZXIge1xuICAgICAgICBjb25zdCBiYXJyaWVyID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5IZWFkc2V0QmFycmllcihIZWFkc2V0QmFycmllci5uYW1lLCBcImRpc2Nvbm5lY3RpbmdcIiwgW10pO1xuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoYmFycmllcik7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBBbWJpZW50TGlnaHRCYXJyaWVyIGV4dGVuZHMgQXdhcmVuZXNzQmFycmllciB7XG4gICAgc3RhdGljIGFib3ZlKHY6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5BbWJpZW50TGlnaHRCYXJyaWVyKEFtYmllbnRMaWdodEJhcnJpZXIubmFtZSwgXCJhYm92ZVwiLCBbdl0pO1xuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XG4gICAgfVxuICAgIHN0YXRpYyBiZWxvdyh2OiBudW1iZXIpOiBBd2FyZW5lc3NCYXJyaWVyIHtcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuQW1iaWVudExpZ2h0QmFycmllcihBbWJpZW50TGlnaHRCYXJyaWVyLm5hbWUsIFwiYmVsb3dcIiwgW3ZdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xuICAgIH1cbiAgICBzdGF0aWMgcmFuZ2UodjE6IG51bWJlciwgdjI6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5BbWJpZW50TGlnaHRCYXJyaWVyKEFtYmllbnRMaWdodEJhcnJpZXIubmFtZSwgXCJyYW5nZVwiLCBbdjEsIHYyXSk7XG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXaWZpQmFycmllciBleHRlbmRzIEF3YXJlbmVzc0JhcnJpZXIge1xuICAgIHN0YXRpYyBjb25uZWN0aW5nKHMxPzogc3RyaW5nLCBzMj86IHN0cmluZyk6IEF3YXJlbmVzc0JhcnJpZXIge1xuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5XaWZpQmFycmllcihXaWZpQmFycmllci5uYW1lLCBcImNvbm5lY3RpbmdcIiwgW3MxLCBzMl0pO1xuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XG4gICAgfVxuICAgIHN0YXRpYyBkaXNhYmxpbmcoKTogQXdhcmVuZXNzQmFycmllciB7XG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLldpZmlCYXJyaWVyKFdpZmlCYXJyaWVyLm5hbWUsIFwiZGlzYWJsaW5nXCIsIFtdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xuICAgIH1cbiAgICBzdGF0aWMgZGlzY29ubmVjdGluZyhzMT86IHN0cmluZywgczI/OiBzdHJpbmcpOiBBd2FyZW5lc3NCYXJyaWVyIHtcbiAgICAgICAgbGV0IGFycjogYW55W10gPSBbXTtcbiAgICAgICAgaWYgKHMxICE9IG51bGwpIGFyciA9IFtzMSwgczJdO1xuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5XaWZpQmFycmllcihXaWZpQmFycmllci5uYW1lLCBcImRpc2Nvbm5lY3RpbmdcIiwgYXJyKTtcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xuICAgIH1cbiAgICBzdGF0aWMgZW5hYmxpbmcoKTogQXdhcmVuZXNzQmFycmllciB7XG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLldpZmlCYXJyaWVyKFdpZmlCYXJyaWVyLm5hbWUsIFwiZW5hYmxpbmdcIiwgW10pO1xuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XG4gICAgfVxuICAgIHN0YXRpYyBrZWVwaW5nKGk6IG51bWJlciwgczE/OiBzdHJpbmcsIHMyPzogc3RyaW5nKTogQXdhcmVuZXNzQmFycmllciB7XG4gICAgICAgIGxldCBhcnI6IGFueVtdID0gW2ldO1xuICAgICAgICBpZiAoczEgIT0gbnVsbCkge1xuICAgICAgICAgICAgYXJyLnB1c2goczEpO1xuICAgICAgICAgICAgYXJyLnB1c2goczIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLldpZmlCYXJyaWVyKFdpZmlCYXJyaWVyLm5hbWUsIFwia2VlcGluZ1wiLCBhcnIpO1xuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmx1ZXRvb3RoQmFycmllciBleHRlbmRzIEF3YXJlbmVzc0JhcnJpZXIge1xuICAgIHN0YXRpYyBjb25uZWN0aW5nKGk6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CbHVldG9vdGhCYXJyaWVyKEJsdWV0b290aEJhcnJpZXIubmFtZSwgXCJjb25uZWN0aW5nXCIsIFtpXSk7XG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcbiAgICB9XG4gICAgc3RhdGljIGRpc2Nvbm5lY3RpbmcoaTogbnVtYmVyKTogQXdhcmVuZXNzQmFycmllciB7XG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkJsdWV0b290aEJhcnJpZXIoQmx1ZXRvb3RoQmFycmllci5uYW1lLCBcImRpc2Nvbm5lY3RpbmdcIiwgW2ldKTtcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xuICAgIH1cbiAgICBzdGF0aWMga2VlcChpOiBudW1iZXIsIGkxOiBudW1iZXIpOiBBd2FyZW5lc3NCYXJyaWVyIHtcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuQmx1ZXRvb3RoQmFycmllcihCbHVldG9vdGhCYXJyaWVyLm5hbWUsIFwia2VlcFwiLCBbaSwgaTFdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJlaGF2aW9yQmFycmllciBleHRlbmRzIEF3YXJlbmVzc0JhcnJpZXIge1xuXG4gICAgc3RhdGljIGJlZ2lubmluZyguLi5pbnRzOiBudW1iZXJbXSk6IEF3YXJlbmVzc0JhcnJpZXIge1xuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CZWhhdmlvckJhcnJpZXIoQmVoYXZpb3JCYXJyaWVyLm5hbWUsIFwiYmVnaW5uaW5nXCIsIFtpbnRzXSk7XG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcbiAgICB9XG4gICAgc3RhdGljIGVuZGluZyguLi5pbnRzOiBudW1iZXJbXSk6IEF3YXJlbmVzc0JhcnJpZXIge1xuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CZWhhdmlvckJhcnJpZXIoQmVoYXZpb3JCYXJyaWVyLm5hbWUsIFwiZW5kaW5nXCIsIFtpbnRzXSk7XG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcbiAgICB9XG4gICAgc3RhdGljIGtlZXBpbmcoLi4uaW50czogbnVtYmVyW10pOiBBd2FyZW5lc3NCYXJyaWVyIHtcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuQmVoYXZpb3JCYXJyaWVyKEJlaGF2aW9yQmFycmllci5uYW1lLCBcImtlZXBpbmdcIiwgW2ludHNdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvY2F0aW9uQmFycmllciBleHRlbmRzIEF3YXJlbmVzc0JhcnJpZXIge1xuXG4gICAgc3RhdGljIGVudGVyKHY6IG51bWJlciwgdjE6IG51bWJlciwgdjI6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CZWhhdmlvckJhcnJpZXIoTG9jYXRpb25CYXJyaWVyLm5hbWUsIFwiZW50ZXJcIiwgW3YsIHYxLCB2Ml0pO1xuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XG4gICAgfVxuICAgIHN0YXRpYyBleGl0KHY6IG51bWJlciwgdjE6IG51bWJlciwgdjI6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CZWhhdmlvckJhcnJpZXIoTG9jYXRpb25CYXJyaWVyLm5hbWUsIFwiZXhpdFwiLCBbdiwgdjEsIHYyXSk7XG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcbiAgICB9XG4gICAgc3RhdGljIHN0YXkodjogbnVtYmVyLCB2MTogbnVtYmVyLCB2MjogbnVtYmVyLCBsOiBudW1iZXIpOiBBd2FyZW5lc3NCYXJyaWVyIHtcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuQmVoYXZpb3JCYXJyaWVyKExvY2F0aW9uQmFycmllci5uYW1lLCBcInN0YXlcIiwgW3YsIHYxLCB2MiwgbF0pO1xuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2NyZWVuQmFycmllciBleHRlbmRzIEF3YXJlbmVzc0JhcnJpZXIge1xuXG4gICAgc3RhdGljIHNjcmVlbk9uKCk6IEF3YXJlbmVzc0JhcnJpZXIge1xuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CZWhhdmlvckJhcnJpZXIoU2NyZWVuQmFycmllci5uYW1lLCBcInNjcmVlbk9uXCIsIFtdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xuICAgIH1cbiAgICBzdGF0aWMgc2NyZWVuT2ZmKCk6IEF3YXJlbmVzc0JhcnJpZXIge1xuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CZWhhdmlvckJhcnJpZXIoU2NyZWVuQmFycmllci5uYW1lLCBcInNjcmVlbk9mZlwiLCBbXSk7XG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcbiAgICB9XG4gICAgc3RhdGljIHNjcmVlblVubG9jaygpOiBBd2FyZW5lc3NCYXJyaWVyIHtcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuQmVoYXZpb3JCYXJyaWVyKFNjcmVlbkJhcnJpZXIubmFtZSwgXCJzY3JlZW5VbmxvY2tcIiwgW10pO1xuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XG4gICAgfVxuICAgIHN0YXRpYyBrZWVwaW5nKGk6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CZWhhdmlvckJhcnJpZXIoU2NyZWVuQmFycmllci5uYW1lLCBcImtlZXBpbmdcIiwgW2ldKTtcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRpbWVCYXJyaWVyIGV4dGVuZHMgQXdhcmVuZXNzQmFycmllciB7XG5cbiAgICBzdGF0aWMgZHVyaW5nUGVyaW9kT2ZEYXkodGltZVpvbmU6IHN0cmluZywgbDogbnVtYmVyLCBsMTogbnVtYmVyKTogQXdhcmVuZXNzQmFycmllciB7XG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLlRpbWVCYXJyaWVyKFRpbWVCYXJyaWVyLm5hbWUsIFwiZHVyaW5nUGVyaW9kT2ZEYXlcIiwgW3RpbWVab25lLCBsLCBsMV0pO1xuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XG4gICAgfVxuICAgIHN0YXRpYyBkdXJpbmdQZXJpb2RPZldlZWsoaTogbnVtYmVyLCB0aW1lWm9uZTogc3RyaW5nLCBsOiBudW1iZXIsIGwxOiBudW1iZXIpOiBBd2FyZW5lc3NCYXJyaWVyIHtcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuVGltZUJhcnJpZXIoVGltZUJhcnJpZXIubmFtZSwgXCJkdXJpbmdQZXJpb2RPZldlZWtcIiwgW2ksIHRpbWVab25lLCBsLCBsMV0pO1xuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XG4gICAgfVxuICAgIHN0YXRpYyBkdXJpbmdUaW1lUGVyaW9kKGw6IG51bWJlciwgbDE6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5UaW1lQmFycmllcihUaW1lQmFycmllci5uYW1lLCBcImR1cmluZ1RpbWVQZXJpb2RcIiwgW2wsIGwxXSk7XG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcbiAgICB9XG4gICAgc3RhdGljIGluU3VucmlzZU9yU3Vuc2V0UGVyaW9kKGk6IG51bWJlciwgbDogbnVtYmVyLCBsMTogbnVtYmVyKTogQXdhcmVuZXNzQmFycmllciB7XG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLlRpbWVCYXJyaWVyKFRpbWVCYXJyaWVyLm5hbWUsIFwiaW5TdW5yaXNlT3JTdW5zZXRQZXJpb2RcIiwgW2ksIGwsIGwxXSk7XG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcbiAgICB9XG4gICAgc3RhdGljIGluVGltZUNhdGVnb3J5KGk6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5UaW1lQmFycmllcihUaW1lQmFycmllci5uYW1lLCBcImluVGltZUNhdGVnb3J5XCIsIFtpXSk7XG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCZWFjb25CYXJyaWVyIGV4dGVuZHMgQXdhcmVuZXNzQmFycmllciB7XG5cbiAgICBzdGF0aWMgZGlzY292ZXIobmFtZXNwYWNlOiBzdHJpbmcsIHR5cGU/OiBzdHJpbmcgfCBudWxsLCBjb250ZW50Pzogc3RyaW5nW10gfCBudWxsKTogQXdhcmVuZXNzQmFycmllciB7XG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkJlYWNvbkJhcnJpZXIoQmVhY29uQmFycmllci5uYW1lLCBcImRpc2NvdmVyXCIsIFtuYW1lc3BhY2UsIHR5cGUsIGNvbnRlbnRdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xuICAgIH1cbiAgICBzdGF0aWMga2VlcChuYW1lc3BhY2U6IHN0cmluZywgdHlwZT86IHN0cmluZyB8IG51bGwsIGNvbnRlbnQ/OiBzdHJpbmdbXSB8IG51bGwpOiBBd2FyZW5lc3NCYXJyaWVyIHtcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuQmVhY29uQmFycmllcihCZWFjb25CYXJyaWVyLm5hbWUsIFwia2VlcFwiLCBbbmFtZXNwYWNlLCB0eXBlLCBjb250ZW50XSk7XG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcbiAgICB9XG4gICAgc3RhdGljIG1pc3NlZChuYW1lc3BhY2U6IHN0cmluZywgdHlwZT86IHN0cmluZyB8IG51bGwsIGNvbnRlbnQ/OiBzdHJpbmdbXSB8IG51bGwpOiBBd2FyZW5lc3NCYXJyaWVyIHtcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuQmVhY29uQmFycmllcihCZWFjb25CYXJyaWVyLm5hbWUsIFwibWlzc2VkXCIsIFtuYW1lc3BhY2UsIHR5cGUsIGNvbnRlbnRdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbWJpbmF0aW9uQmFycmllciBleHRlbmRzIEF3YXJlbmVzc0JhcnJpZXIge1xuXG4gICAgc3RhdGljIG9yKC4uLmF3YXJlbmVzczogQXdhcmVuZXNzQmFycmllcltdKTogQXdhcmVuZXNzQmFycmllciB7XG4gICAgICAgIGNvbnN0IGJhcnJpZXIgPSBuZXcgKDxhbnk+d2luZG93KS5Db21iaW5hdGlvbkJhcnJpZXIoXCJvclwiLCBhd2FyZW5lc3MpO1xuICAgICAgICBiYXJyaWVyLmN1cnJlbnRCYXJyaWVycyA9IGF3YXJlbmVzcztcbiAgICAgICAgYmFycmllci5jb21iTWV0aG9kID0gXCJvclwiO1xuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoYmFycmllcik7XG4gICAgfVxuICAgIHN0YXRpYyBhbmQoLi4uYXdhcmVuZXNzOiBBd2FyZW5lc3NCYXJyaWVyW10pOiBBd2FyZW5lc3NCYXJyaWVyIHtcbiAgICAgICAgY29uc3QgYmFycmllciA9IG5ldyAoPGFueT53aW5kb3cpLkNvbWJpbmF0aW9uQmFycmllcihcImFuZFwiLCBhd2FyZW5lc3MpO1xuICAgICAgICBiYXJyaWVyLmN1cnJlbnRCYXJyaWVycyA9IGF3YXJlbmVzcztcbiAgICAgICAgYmFycmllci5jb21iTWV0aG9kID0gXCJhbmRcIjtcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGJhcnJpZXIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBub3QoYXdhcmVuZXNzOiBBd2FyZW5lc3NCYXJyaWVyKTogQXdhcmVuZXNzQmFycmllciB7XG4gICAgICAgIGNvbnN0IGJhcnJpZXIgPSBuZXcgKDxhbnk+d2luZG93KS5Db21iaW5hdGlvbkJhcnJpZXIoXCJub3RcIiwgW2F3YXJlbmVzc10pO1xuICAgICAgICBiYXJyaWVyLmN1cnJlbnRCYXJyaWVycyA9IFthd2FyZW5lc3NdO1xuICAgICAgICBiYXJyaWVyLmNvbWJNZXRob2QgPSBcIm5vdFwiO1xuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoYmFycmllcik7XG4gICAgfVxuXG59XG4iXX0=