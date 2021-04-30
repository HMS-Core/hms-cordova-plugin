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
     * @param  {HMSPermission[]} permission Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    HMSAwarenessOriginal.prototype.requestPermissions = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1hd2FyZW5lc3MvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWN0QyxnQ0FBaUI7Ozs7SUFHL0M7Ozs7T0FJRztJQUNILG9DQUFhLGFBQUMsVUFBeUI7SUFFdEMsQ0FBQztJQUdGOzs7O09BSUc7SUFDSCx3Q0FBaUIsYUFBQyxVQUF5QjtJQUUxQyxDQUFDO0lBRUY7Ozs7T0FJRztJQUNILHlDQUFrQjtRQUFDLG9CQUE4QjthQUE5QixVQUE4QixFQUE5QixxQkFBOEIsRUFBOUIsSUFBOEI7WUFBOUIsK0JBQThCOzs7O0lBRWhELENBQUM7SUFHRjs7O09BR0c7SUFDSCxtQ0FBWTtJQUtaOzs7T0FHRztJQUNILG9DQUFhOzs7Ozs7dUJBNUVqQjtFQStCa0MsaUJBQWlCO1NBQXRDLFlBQVk7O0lBeURhLG9DQUFpQjs7OztJQUduRDs7O09BR0c7SUFDSCwyQ0FBZ0I7SUFFZixDQUFDO0lBRUY7OztPQUdHO0lBQ0gsc0NBQVc7SUFFVixDQUFDO0lBRUY7OztPQUdHO0lBQ0gsNENBQWlCO0lBRWhCLENBQUM7SUFFRjs7OztPQUlHO0lBQ0gsNkNBQWtCLGFBQUMsY0FBK0I7SUFFakQsQ0FBQztJQUVGOzs7O09BSUc7SUFDSCwwQ0FBZSxhQUFDLG1CQUF1QztJQUV0RCxDQUFDO0lBRUY7OztPQUdHO0lBQ0gsK0NBQW9CO0lBRW5CLENBQUM7SUFFRjs7O09BR0c7SUFDSCw0Q0FBaUI7SUFFaEIsQ0FBQztJQUVGOzs7T0FHRztJQUNILDBDQUFlO0lBRWQsQ0FBQztJQUVGOzs7T0FHRztJQUNILDZDQUFrQjtJQUVqQixDQUFDO0lBRUY7OztPQUdHO0lBQ0gsNENBQWlCO0lBRWhCLENBQUM7SUFFRjs7O09BR0c7SUFDSCx3Q0FBYTtJ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QyxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ00sc0JBQUcsR0FBVjtRQUFXLG1CQUFnQzthQUFoQyxVQUFnQyxFQUFoQyxxQkFBZ0MsRUFBaEMsSUFBZ0M7WUFBaEMsOEJBQWdDOztRQUN2QyxJQUFNLE9BQU8sR0FBRyxJQUFVLE1BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDdkUsT0FBTyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7UUFDcEMsT0FBTyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDM0IsT0FBTyxJQUFJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSxzQkFBRyxHQUFWLFVBQVcsU0FBMkI7UUFDbEMsSUFBTSxPQUFPLEdBQUcsSUFBVSxNQUFPLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN6RSxPQUFPLENBQUMsZUFBZSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDM0IsT0FBTyxJQUFJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7NkJBcnZCTDtFQWl1QndDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgICBDb3B5cmlnaHQgMjAyMC4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuXHJcbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXHJcbiAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuXHJcbiAgICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG4vKipcclxuICogQG5hbWUgSE1TQXdhcmVuZXNzXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDb3Jkb3ZhIEF3YXJlbmVzcyBQbHVnaW4gZW5hYmxlcyBjb21tdW5pY2F0aW9uIGJldHdlZW4gdGhlIEhNUyBDb3JlIEF3YXJlbmVzcyBTREsgYW5kIENvcmRvdmEgcGxhdGZvcm0uIFRoaXMgcGx1Z2luIGRlbW9uc3RyYXRlcyB3aWRlLXJhbmdpbmcgZnVuY3Rpb25hbGl0eSBvZiB0aGUgSE1TIENvcmUgQXdhcmVuZXNzIFNESy5cclxuICovXHJcbkBQbHVnaW4oe1xyXG4gICAgcGx1Z2luTmFtZTogJ0hNU0F3YXJlbmVzcycsXHJcbiAgICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYXdhcmVuZXNzJyxcclxuICAgIHBsdWdpblJlZjogJ0hNU0F3YXJlbmVzcycsXHJcbiAgICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpbicsXHJcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0F3YXJlbmVzcyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBJdCBjaGVja3MgdGhlIHBlcm1pc3Npb25zIHJlcXVpcmVkIHRvIHVzZSB0aGlzIEtpdC5cclxuICAgICAqIEBwYXJhbSAge0hNU1Blcm1pc3Npb259IHBlcm1pc3Npb24gUmVwcmVzZW50cyB0aGUgbGlzdCBpbiB3aGljaCBwZXJtaXNzaW9uIG5hbWVzIGFyZSBrZXB0LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxyXG4gICAgICovXHJcbiAgICBoYXNQZXJtaXNzaW9uKHBlcm1pc3Npb246IEhNU1Blcm1pc3Npb24pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyB0aGUgbmVjZXNzYXJ5IHBlcm1pc3Npb25zIHRvIHVzZSB0aGUgc2VydmljZXMuXHJcbiAgICAgKiBAcGFyYW0gIHtITVNQZXJtaXNzaW9ufSBwZXJtaXNzaW9uIFJlcHJlc2VudHMgdGhlIGxpc3QgaW4gd2hpY2ggcGVybWlzc2lvbiBuYW1lcyBhcmUga2VwdC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICByZXF1ZXN0UGVybWlzc2lvbihwZXJtaXNzaW9uOiBITVNQZXJtaXNzaW9uKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyB0aGUgbmVjZXNzYXJ5IHBlcm1pc3Npb25zIHRvIHVzZSB0aGUgc2VydmljZXMuXHJcbiAgICAgKiBAcGFyYW0gIHtITVNQZXJtaXNzaW9uW119IHBlcm1pc3Npb24gUmVwcmVzZW50cyB0aGUgbGlzdCBpbiB3aGljaCBwZXJtaXNzaW9uIG5hbWVzIGFyZSBrZXB0LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIHJlcXVlc3RQZXJtaXNzaW9ucyguLi5wZXJtaXNzaW9uOiBITVNQZXJtaXNzaW9uW10pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgZW5hYmxlcyBITVNMb2dnZXIgY2FwYWJpbGl0eSB3aGljaCBpcyB1c2VkIGZvciBzZW5kaW5nIHVzYWdlIGFuYWx5dGljcyBvZiBBd2FyZW5lc3MgU0RLJ3MgbWV0aG9kcyB0byBpbXByb3ZlIHRoZSBzZXJ2aWNlIHF1YWxpdHkuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGRpc2FibGVzIHRoZSBITVNMb2dnZXIgY2FwYWJpbGl0eSB3aGljaCBpcyB1c2VkIGZvciBzZW5kaW5nIHVzYWdlIGFuYWx5dGljcyBvZiBBd2FyZW5lc3MgU0RLJ3MgbWV0aG9kcyB0byBpbXByb3ZlIHRoZSBzZXJ2aWNlIHF1YWxpdHkuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiAnSE1TQXdhcmVuZXNzJyxcclxuICAgIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hd2FyZW5lc3MnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICAgIHBsdWdpblJlZjogJ0F3YXJlbmVzc0NhcHR1cmUnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBd2FyZW5lc3NDYXB0dXJlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbnMgdGhlIHN0YXR1cyBvZiBhbiBhdWRpbyBkZXZpY2UgKGNvbm5lY3RlZCBvciBkaXNjb25uZWN0ZWQpLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxyXG4gICAgICovXHJcbiAgICBnZXRIZWFkc2V0U3RhdHVzKCk6IFByb21pc2U8SGVhZHNldFN0YXR1c1Jlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbnMgdGhlIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgb2YgdGhlIGxvY2F0aW9uLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxyXG4gICAgICovXHJcbiAgICBnZXRMb2NhdGlvbigpOiBQcm9taXNlPExvY2F0aW9uUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyB1c2VyIGJlaGF2aW9yLCBzdWNoIGFzIHdhbGtpbmcsIHJ1bm5pbmcsIGN5Y2xpbmcsIGRyaXZpbmcsIG9yIHN0YXlpbmcgc3RpbGwuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXHJcbiAgICAgKi9cclxuICAgIGdldEJlaGF2aW9yU3RhdHVzKCk6IFByb21pc2U8QmVoYXZpb3JSZXNwb25zZT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gIHtCbHVldG9vdGhEZXZpY2V9IGJsdWVvb3RoRGV2aWNlIEluZGljYXRlcyBibHVldG9vdGggZGV2aWNlLlxyXG4gICAgICogT2J0YWluIHRoZSBzdGF0dXMgb2YgdGhlIHBob25lLCBmb3IgZXhhbXBsZSwgd2hldGhlciBCbHVldG9vdGggaXMgY29ubmVjdGVkIG9yIG5vdC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcclxuICAgICAqL1xyXG4gICAgZ2V0Qmx1ZXRvb3RoU3RhdHVzKGJsdWVvb3RoRGV2aWNlOiBCbHVldG9vdGhEZXZpY2UpOiBQcm9taXNlPEJsdWV0b290aFN0YXR1c1Jlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBkZXZpY2UgaGFzIGFwcHJvYWNoZWQsIGNvbm5lY3RlZCB0bywgb3IgZGlzY29ubmVjdGVkIGZyb20gYSByZWdpc3RlcmVkIGJlYWNvbi5cclxuICAgICAqIEBwYXJhbSAge0JlYWNvblN0YXR1c0ZpbHRlcn0gYmVhY29uU3RhdHVzUmVxdWVzdCBCZWFjb24gU3RhdHVzLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIGdldEJlYWNvblN0YXR1cyhiZWFjb25TdGF0dXNSZXF1ZXN0OiBCZWFjb25TdGF0dXNGaWx0ZXIpOiBQcm9taXNlPEJlYWNvblN0YXR1c1Jlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwaG9uZSBzdGF0dXMgYXdhcmVuZXNzIGNhcGFiaWxpdHkgaXMgc3VwcG9ydGVkLCBpbmNsdWRpbmcgdGhlIGF3YXJlbmVzcyBvZiB0aGUgYXBwIHN0YXR1cy5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcclxuICAgICAqL1xyXG4gICAgZ2V0QXBwbGljYXRpb25TdGF0dXMoKTogUHJvbWlzZTxBcHBsaWNhdGlvblN0YXR1c1Jlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbnMgdGhlIGlsbHVtaW5hbmNlIG9mIHRoZSBlbnZpcm9ubWVudCB3aGVyZSB0aGUgZGV2aWNlIGlzIGxvY2F0ZWQuIFRoZSB1bml0IGlzIGx1eC4gVGhlIGlsbHVtaW5hbmNlIGlzIHRoZSBpbnRlbnNpdHkgcmVjZWl2ZWQgYnkgdGhlIGxpZ2h0IHNlbnNvciBvZiB0aGUgZGV2aWNlLiBXaGVuIHRoZSBsaWdodCBzZW5zb3IgaXMgYmxvY2tlZCBvciBpbGx1bWluYXRlZCBieSBzdHJvbmcgbGlnaHQsIHRoZSBvYnRhaW5lZCBpbGx1bWluYW5jZSBjaGFuZ2VzIGFjY29yZGluZ2x5LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxyXG4gICAgICovXHJcbiAgICBnZXRMaWdodEludGVuc2l0eSgpOiBQcm9taXNlPEFtYmllbnRMaWdodFJlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbiB0aGUgc3RhdHVzIG9mIHRoZSBwaG9uZSwgZm9yIGV4YW1wbGUsIHdoZXRoZXIgdGhlIHNjcmVlbiBpcyBvbiBvciBvZmYuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXHJcbiAgICAgKi9cclxuICAgIGdldFNjcmVlblN0YXR1cygpOiBQcm9taXNlPFNjcmVlblN0YXR1c1Jlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbnMgdGhlIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgb2YgdGhlIGN1cnJlbnQgbG9jYXRpb24uXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXHJcbiAgICAgKi9cclxuICAgIGdldEN1cnJlbnRMb2NhdGlvbigpOiBQcm9taXNlPExvY2F0aW9uUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWluIHRoZSBzdGF0dXMgb2YgdGhlIHBob25lLCBmb3IgZXhhbXBsZSwgd2hldGhlciB0aGUgc3lzdGVtIGlzIGluIGRhcmsgbW9kZS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcclxuICAgICAqL1xyXG4gICAgZ2V0RGFya01vZGVTdGF0dXMoKTogUHJvbWlzZTxEYXJrbW9kZVN0YXR1c1Jlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbiB0aGUgc3RhdHVzIG9mIHRoZSBwaG9uZSwgZm9yIGV4YW1wbGUsIHdoZXRoZXIgdGhlIGFwcCBpcyBzdGFydGVkIG9yIGNsb3NlZCwgd2hldGhlciBXaS1GaSBpcyBjb25uZWN0ZWQgb3Igbm90LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxyXG4gICAgICovXHJcbiAgICBnZXRXaWZpU3RhdHVzKCk6IFByb21pc2U8V2lmaVN0YXR1c1Jlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFF1ZXJpZXMgdGhlIHdlYXRoZXIgaW5mb3JtYXRpb24gb2YgdGhlIGRldmljZSBsb2NhdGlvbiBvciBhIHNwZWNpZmllZCBsb2NhdGlvbi4gV2VhdGhlciBvZiB0aGUgY3VycmVudCBkYXkgKDI0IGhvdXJzKSBhbmQgdGhlIG5leHQgc2V2ZW4gZGF5cyAoaW5jbHVkaW5nIHRoZSBjdXJyZW50IGRheSkgY2FuIGJlIHF1ZXJpZWQuIFxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxyXG4gICAgICovXHJcbiAgICBnZXRXZWF0aGVyQnlEZXZpY2UoKTogUHJvbWlzZTxXZWF0aGVyU3RhdHVzUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogUXVlcmllcyB0aGUgd2VhdGhlciBpbmZvcm1hdGlvbiBvZiB0aGUgZGV2aWNlIGxvY2F0aW9uIG9yIGEgc3BlY2lmaWVkIGxvY2F0aW9uLiBXZWF0aGVyIG9mIHRoZSBjdXJyZW50IGRheSAoMjQgaG91cnMpIGFuZCB0aGUgbmV4dCBzZXZlbiBkYXlzIChpbmNsdWRpbmcgdGhlIGN1cnJlbnQgZGF5KSBjYW4gYmUgcXVlcmllZC4gXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXHJcbiAgICAgKi9cclxuICAgIGdldFdlYXRoZXJCeUlQKCk6IFByb21pc2U8V2VhdGhlclN0YXR1c1Jlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFF1ZXJpZXMgdGhlIHdlYXRoZXIgaW5mb3JtYXRpb24gb2YgdGhlIGRldmljZSBsb2NhdGlvbiBvciBhIHNwZWNpZmllZCBsb2NhdGlvbi4gV2VhdGhlciBvZiB0aGUgY3VycmVudCBkYXkgKDI0IGhvdXJzKSBhbmQgdGhlIG5leHQgc2V2ZW4gZGF5cyAoaW5jbHVkaW5nIHRoZSBjdXJyZW50IGRheSkgY2FuIGJlIHF1ZXJpZWQuIFxyXG4gICAgICogQHBhcmFtICB7V2VhdGhlclBvc2l0aW9ufSB3ZWF0aGVyQnlQb3NpdGlvblJlcXVlc3QgV2VhdGhlciBieSBQb3NpdGlvbi5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcclxuICAgICAqL1xyXG4gICAgZ2V0V2VhdGhlckJ5UG9zaXRpb24od2VhdGhlckJ5UG9zaXRpb25SZXF1ZXN0OiBXZWF0aGVyUG9zaXRpb24pOiBQcm9taXNlPFdlYXRoZXJTdGF0dXNSZXNwb25zZT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyB0aGUgY3VycmVudCBsb2NhbCB0aW1lIG9yIHRpbWUgb2YgYSBzcGVjaWZpZWQgbG9jYXRpb24sIHN1Y2ggYXMgd29ya2luZyBkYXksIHdlZWtlbmQsIGhvbGlkYXksIG1vcm5pbmcsIGFmdGVybm9vbiwgZXZlbmluZywgb3IgbGF0ZSBuaWdodC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcclxuICAgICAqL1xyXG4gICAgZ2V0VGltZUNhdGVnb3JpZXMoKTogUHJvbWlzZTxUaW1lQ2F0ZWdvcmllc1Jlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbnMgdGhlIGN1cnJlbnQgbG9jYWwgdGltZSBvciB0aW1lIG9mIGEgc3BlY2lmaWVkIGxvY2F0aW9uLCBzdWNoIGFzIHdvcmtpbmcgZGF5LCB3ZWVrZW5kLCBob2xpZGF5LCBtb3JuaW5nLCBhZnRlcm5vb24sIGV2ZW5pbmcsIG9yIGxhdGUgbmlnaHQuXHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNvdW50cnlDb2RlIFRpbWUgQ2F0ZWdvcmllcyBCeSBDb250cnljb2RlIHJlcXVlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXHJcbiAgICAgKi9cclxuICAgIGdldFRpbWVDYXRlZ29yaWVzQnlDb3VudHJ5Q29kZShjb3VudHJ5Q29kZTogc3RyaW5nKTogUHJvbWlzZTxUaW1lQ2F0ZWdvcmllc1Jlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbnMgdGhlIGN1cnJlbnQgbG9jYWwgdGltZSBvciB0aW1lIG9mIGEgc3BlY2lmaWVkIGxvY2F0aW9uLCBzdWNoIGFzIHdvcmtpbmcgZGF5LCB3ZWVrZW5kLCBob2xpZGF5LCBtb3JuaW5nLCBhZnRlcm5vb24sIGV2ZW5pbmcsIG9yIGxhdGUgbmlnaHQuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXHJcbiAgICAgKi9cclxuICAgIGdldFRpbWVDYXRlZ29yaWVzQnlJUCgpOiBQcm9taXNlPFRpbWVDYXRlZ29yaWVzUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyB0aGUgY3VycmVudCBsb2NhbCB0aW1lIG9yIHRpbWUgb2YgYSBzcGVjaWZpZWQgbG9jYXRpb24sIHN1Y2ggYXMgd29ya2luZyBkYXksIHdlZWtlbmQsIGhvbGlkYXksIG1vcm5pbmcsIGFmdGVybm9vbiwgZXZlbmluZywgb3IgbGF0ZSBuaWdodC5cclxuICAgICAqIEBwYXJhbSAge1RpbWVDYXRlZ29yaWVzQnlVc2VyUmVxdWVzdH0gdGltZUNhdGVnb3JpZXNCeVVzZXJSZXF1ZXN0IFRpbWUgQ2F0ZWdvcmllcyBCeSBVc2VyIHJlcXVlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXHJcbiAgICAgKi9cclxuICAgIGdldFRpbWVDYXRlZ29yaWVzQnlVc2VyKHRpbWVDYXRlZ29yaWVzQnlVc2VyUmVxdWVzdDogVGltZUNhdGVnb3JpZXNCeVVzZXJSZXF1ZXN0KTogUHJvbWlzZTxUaW1lQ2F0ZWdvcmllc1Jlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbnMgdGhlIGN1cnJlbnQgbG9jYWwgdGltZSBvciB0aW1lIG9mIGEgc3BlY2lmaWVkIGxvY2F0aW9uLCBzdWNoIGFzIHdvcmtpbmcgZGF5LCB3ZWVrZW5kLCBob2xpZGF5LCBtb3JuaW5nLCBhZnRlcm5vb24sIGV2ZW5pbmcsIG9yIGxhdGUgbmlnaHQuXHJcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IGZ1dHVyZVRpbWVzdGFtcCBUaW1lIENhdGVnb3JpZXMgQnkgRnV0dXJlIHJlcXVlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXHJcbiAgICAgKi9cclxuICAgIGdldFRpbWVDYXRlZ29yaWVzRm9yRnV0dXJlKGZ1dHVyZVRpbWVzdGFtcDogbnVtYmVyKTogUHJvbWlzZTxUaW1lQ2F0ZWdvcmllc1Jlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIEl0IGVuYWJsZXMgdGhlIHVwZGF0ZSB3aW5kb3cuXHJcbiAgICAgKiBAcGFyYW0gIHtib29sZWFufSBpc0VuYWJsZSBib29sZWFuIGVuYWJsZVVwZGF0ZVdpbmRvdy5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcclxuICAgICAqL1xyXG4gICAgZW5hYmxlVXBkYXRlV2luZG93KGlzRW5hYmxlOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gKiBJdCBlbmFibGVzIHRoZSB1cGRhdGUgd2luZG93LlxyXG4gKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXHJcbiAqL1xyXG4gICAgcXVlcnlTdXBwb3J0aW5nQ2FwYWJpbGl0aWVzKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxufVxyXG4vLyBBd2FyZW5lc3NDYXB0dXJlIEludGVyZmFjZXMgLy9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2VhdGhlckJ5UG9zaXRpb25SZXF1ZXN0IHtcclxuICAgIHdlYXRoZXJQb3NpdGlvbjogV2VhdGhlclBvc2l0aW9uO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgV2VhdGhlclBvc2l0aW9uIHtcclxuICAgIG1Db3VudHJ5Pzogc3RyaW5nIHwgbnVsbCxcclxuICAgIG1Qcm92aW5jZT86IHN0cmluZyB8IG51bGwsXHJcbiAgICBtQ2l0eTogc3RyaW5nLFxyXG4gICAgbURpc3RyaWN0Pzogc3RyaW5nIHwgbnVsbCxcclxuICAgIG1Db3VudHk/OiBzdHJpbmcgfCBudWxsLFxyXG4gICAgbUxvY2FsZTogc3RyaW5nLFxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRW5hYmxlVXBkYXRlV2luZG93UmVxdWVzdCB7XHJcbiAgICBpc0VuYWJsZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaW1lQ2F0ZWdvcmllc0J5VXNlclJlcXVlc3Qge1xyXG4gICAgbG9jYXRpb246IENvb3JkaW5hdGU7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDb29yZGluYXRlIHtcclxuICAgIGxhdGl0dWRlOiBudW1iZXI7XHJcbiAgICBsb25naXR1ZGU6IG51bWJlclxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVGltZUNhdGVnb3JpZXNCeUNvdW50cnlSZXF1ZXN0IHtcclxuICAgIGNvdW50cnlDb2RlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBUaW1lQ2F0ZWdvcmllc0ZvckZ1dHVyZVJlcXVlc3Qge1xyXG4gICAgZnV0dXJlVGltZXN0YW1wOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBCZWFjb25TdGF0dXNSZXF1ZXN0IHtcclxuICAgIGJlYWNvblN0YXR1c0ZpbHRlcjogQmVhY29uU3RhdHVzRmlsdGVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQmVhY29uU3RhdHVzRmlsdGVyIHtcclxuICAgIG5hbWVzcGFjZTogc3RyaW5nO1xyXG4gICAgdHlwZT86IHN0cmluZyB8IG51bGw7XHJcbiAgICBjb250ZW50PzogQXJyYXk8YW55PiB8IG51bGw7XHJcbn1cclxuXHJcbi8vIEF3YXJlbmVzc0JhcnJpZXIgSW50ZXJmYWNlcyAvL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIZWFkc2V0U3RhdHVzUmVzcG9uc2Uge1xyXG4gICAgaGVhZHNldFN0YXR1czogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQmx1ZXRvb3RoU3RhdHVzUmVzcG9uc2Uge1xyXG4gICAgYmx1ZXRvb3RoU3RhdHVzOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBXaWZpU3RhdHVzUmVzcG9uc2Uge1xyXG4gICAgd2lmaVN0YXR1czogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2NyZWVuU3RhdHVzUmVzcG9uc2Uge1xyXG4gICAgc2NyZWVuU3RhdHVzOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBEYXJrbW9kZVN0YXR1c1Jlc3BvbnNlIHtcclxuICAgIGRhcmttb2RlU3RhdHVzOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvblN0YXR1c1Jlc3BvbnNlIHtcclxuICAgIGFwcGxpY2F0aW9uU3RhdHVzOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBbWJpZW50TGlnaHRSZXNwb25zZSB7XHJcbiAgICBsaWdodEludGVuc2l0eTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9jYXRpb25SZXNwb25zZSB7XHJcbiAgICBsYXRpdHVkZTogbnVtYmVyO1xyXG4gICAgbG9uZ2l0dWRlOiBudW1iZXI7XHJcbiAgICBhbHRpdHVkZTogbnVtYmVyO1xyXG4gICAgc3BlZWQ6IG51bWJlcjtcclxuICAgIGJlYXJpbmc6IG51bWJlcjtcclxuICAgIGFjY3VyYWN5OiBudW1iZXI7XHJcbiAgICB2ZXJ0aWNhbEFjY3VyYWN5TWV0ZXJzPzogbnVtYmVyIHwgbnVsbDtcclxuICAgIGJlYXJpbmdBY2N1cmFjeURlZ3JlZXM/OiBudW1iZXIgfCBudWxsO1xyXG4gICAgc3BlZWRBY2N1cmFjeU1ldGVyc1BlclNlY29uZD86IG51bWJlciB8IG51bGw7XHJcbiAgICB0aW1lOiBudW1iZXI7XHJcbiAgICBmcm9tTW9ja1Byb3ZpZGVyOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBCZWhhdmlvclJlc3BvbnNlIHtcclxuICAgIGVsYXBzZWRSZWFsdGltZU1pbGxpczogbnVtYmVyO1xyXG4gICAgdGltZTogbnVtYmVyO1xyXG4gICAgbW9zdExpa2VseUJlaGF2aW9yOiBNb3N0TGlrZWx5QmVoYXZpb3I7XHJcbiAgICBwcm9iYWJsZUJlaGF2aW9yOiBBcnJheTxNb3N0TGlrZWx5QmVoYXZpb3I+O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTW9zdExpa2VseUJlaGF2aW9yIHtcclxuICAgIGNvbmZpZGVuY2U6IG51bWJlcjtcclxuICAgIHR5cGU6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFdlYXRoZXJTdGF0dXNSZXNwb25zZSB7XHJcbiAgICBkYWlseVdlYXRoZXI/OiAoRGFpbHlXZWF0aGVyKVtdIHwgbnVsbDtcclxuICAgIGhvdXJseVdlYXRoZXI/OiAoSG91cmx5V2VhdGhlcilbXSB8IG51bGw7XHJcbiAgICBsaXZlSW5mbz86IChudWxsKVtdIHwgbnVsbDtcclxuICAgIGFxaT86IEFxaSB8IG51bGw7XHJcbiAgICB3ZWF0aGVyU2l0dWF0aW9uOiBXZWF0aGVyU2l0dWF0aW9uO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRGFpbHlXZWF0aGVyIHtcclxuICAgIGFxaVZhbHVlOiBudW1iZXI7XHJcbiAgICBkYXRlVGltZVN0YW1wOiBudW1iZXI7XHJcbiAgICBtYXhUZW1wQzogbnVtYmVyO1xyXG4gICAgbWF4VGVtcEY6IG51bWJlcjtcclxuICAgIG1pblRlbXBDOiBudW1iZXI7XHJcbiAgICBtaW5UZW1wRjogbnVtYmVyO1xyXG4gICAgbW9vblBoYXNlOiBzdHJpbmc7XHJcbiAgICBtb29uUmlzZTogbnVtYmVyO1xyXG4gICAgbW9vblNldDogbnVtYmVyO1xyXG4gICAgc3VuUmlzZTogbnVtYmVyO1xyXG4gICAgc3VuU2V0OiBudW1iZXI7XHJcbiAgICBzaXR1YXRpb25EYXk6IFNpdHVhdGlvbkRheU9yU2l0dWF0aW9uTmlnaHQ7XHJcbiAgICBzaXR1YXRpb25OaWdodDogU2l0dWF0aW9uRGF5T3JTaXR1YXRpb25OaWdodDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNpdHVhdGlvbkRheU9yU2l0dWF0aW9uTmlnaHQge1xyXG4gICAgY25XZWF0aGVySWQ6IG51bWJlcjtcclxuICAgIHdlYXRoZXJJZDogbnVtYmVyO1xyXG4gICAgd2luZERpcjogc3RyaW5nO1xyXG4gICAgd2luZExldmVsOiBudW1iZXI7XHJcbiAgICB3aW5kU3BlZWQ6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEhvdXJseVdlYXRoZXIge1xyXG4gICAgY25XZWF0aGVySWQ6IG51bWJlcjtcclxuICAgIGRhdGVUaW1lU3RhbXA6IG51bWJlcjtcclxuICAgIHJhaW5Qcm9iYWJpbGl0eTogbnVtYmVyO1xyXG4gICAgdGVtcEM6IG51bWJlcjtcclxuICAgIHRlbXBGOiBudW1iZXI7XHJcbiAgICB3ZWF0aGVySWQ6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEFxaSB7XHJcbiAgICBhcWlWYWx1ZTogbnVtYmVyO1xyXG4gICAgQ286IG51bWJlcjtcclxuICAgIE5vMjogbnVtYmVyO1xyXG4gICAgTzM6IG51bWJlcjtcclxuICAgIFBtMTA6IG51bWJlcjtcclxuICAgIFBtMjU6IG51bWJlcjtcclxuICAgIFNvMjogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgV2VhdGhlclNpdHVhdGlvbiB7XHJcbiAgICBjaXR5OiBDaXR5O1xyXG4gICAgc2l0dWF0aW9uOiBTaXR1YXRpb247XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDaXR5IHtcclxuICAgIGNpdHlDb2RlOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBwcm92aW5jZU5hbWU6IHN0cmluZztcclxuICAgIHRpbWVab25lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTaXR1YXRpb24ge1xyXG4gICAgY25XZWF0aGVySWQ6IG51bWJlcjtcclxuICAgIGh1bWlkaXR5OiBzdHJpbmc7XHJcbiAgICBwcmVzc3VyZTogbnVtYmVyO1xyXG4gICAgcmVhbEZlZWxDOiBudW1iZXI7XHJcbiAgICByZWFsRmVlbEY6IG51bWJlcjtcclxuICAgIHRlbXBlcmF0dXJlQzogbnVtYmVyO1xyXG4gICAgdGVtcGVyYXR1cmVGOiBudW1iZXI7XHJcbiAgICB1cGRhdGVUaW1lOiBudW1iZXI7XHJcbiAgICB1dkluZGV4OiBudW1iZXI7XHJcbiAgICB3ZWF0aGVySWQ6IG51bWJlcjtcclxuICAgIHdpbmREaXI6IHN0cmluZztcclxuICAgIHdpbmRTcGVlZDogbnVtYmVyO1xyXG4gICAgd2luZExldmVsOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FwYWJpbGl0eVJlc3BvbnNlIHtcclxuICAgIGRldmljZVN1cHBvcnRDYXBhYmlsaXRpZXM/OiBEZXZpY2VTdXBwb3J0Q2FwYWJpbGl0aWVzW10gfCBudWxsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlU3VwcG9ydENhcGFiaWxpdGllcyB7XHJcbiAgICBjYXBhYmlsaXR5U3RhdHVzOiBudW1iZXI7XHJcbiAgICBjYXBhYmlsaXR5U3RhdHVzTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVDYXRlZ29yaWVzUmVzcG9uc2Uge1xyXG4gICAgdGltZUNhdGVnb3JpZXM/OiBUaW1lQ2F0ZWdvcmllc1tdIHwgbnVsbDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVDYXRlZ29yaWVzIHtcclxuICAgIFRpbWVCYXJyaWVyOiBudW1iZXI7XHJcbiAgICBUaW1lQmFycmllck5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCZWFjb25TdGF0dXNSZXNwb25zZSB7XHJcbiAgICBiZWFjb25EYXRhPzogQmVhY29uRGF0YVtdIHwgbnVsbDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEJlYWNvbkRhdGEge1xyXG4gICAgQmVoYXZpb3JCYXJyaWVyOiBudW1iZXI7XHJcbiAgICBCZWhhdmlvckJhcnJpZXJOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG4vLyBBd2FyZW5lc3NCYXJyaWVyIFJldHVybiBcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFycmllclN0YXR1cyB7XHJcbiAgICBiYXJyaWVyTGFiZWw6IHN0cmluZztcclxuICAgIHByZXNlbnRTdGF0dXM6IG51bWJlcjtcclxuICAgIGxhc3RTdGF0dXM6IG51bWJlcjtcclxuICAgIGxhc3RCYXJyaWVyVXBkYXRlVGltZTogbnVtYmVyO1xyXG59XHJcblxyXG4vL0VudW0gdmFsdWVcclxuZXhwb3J0IGVudW0gSGVhZHNldFN0YXR1cyB7XHJcbiAgICBDT05ORUNURUQgPSAxLFxyXG4gICAgRElTQ09OTkVDVEVEID0gMCxcclxufVxyXG5leHBvcnQgZW51bSBXaWZpU3RhdHVzIHtcclxuICAgIENPTk5FQ1RFRCA9IDEsXHJcbiAgICBESVNDT05ORUNURUQgPSA0LFxyXG4gICAgRU5BQkxFRCA9IDMsXHJcbiAgICBESVNBQkxFRCA9IC0xLFxyXG59XHJcbmV4cG9ydCBlbnVtIEJsdWV0b290aFN0YXR1cyB7XHJcbiAgICBDT05ORUNURUQgPSAxLFxyXG4gICAgRElTQ09OTkVDVEVEID0gMCxcclxufVxyXG5leHBvcnQgZW51bSBTY3JlZW5TdGF0dXMge1xyXG4gICAgU0NSRUVOT04gPSAxLFxyXG4gICAgU0NSRUVOT0ZGID0gMCxcclxuICAgIFVOTE9DSyA9IDIsXHJcbn1cclxuZXhwb3J0IGVudW0gQmVoYXZpb3JCYXJyaWVyQ29uc3RhbnQge1xyXG4gICAgQkVIQVZJT1JfSU5fVkVISUNMRSA9IDAsXHJcbiAgICBCRUhBVklPUl9PTl9CSUNZQ0xFID0gMSxcclxuICAgIEJFSEFWSU9SX09OX0ZPT1QgPSAyLFxyXG4gICAgQkVIQVZJT1JfU1RJTEwgPSAzLFxyXG4gICAgQkVIQVZJT1JfV0FMS0lORyA9IDcsXHJcbiAgICBCRUhBVklPUl9SVU5OSU5HID0gOCxcclxufVxyXG5leHBvcnQgZW51bSBCbHVldG9vdGhEZXZpY2Uge1xyXG4gICAgREVWSUNFX0NBUiA9IDBcclxufVxyXG5leHBvcnQgZW51bSBUaW1lQmFycmllckNvbnN0YW50cyB7XHJcbiAgICBTVU5SSVNFX0NPREUgPSAwLFxyXG4gICAgU1VOU0VUX0NPREUgPSAxLFxyXG4gICAgVElNRV9DQVRFR09SWV9NT1JOSU5HID0gMSxcclxuICAgIFRJTUVfQ0FURUdPUllfQUZURVJOT09OID0gMixcclxuICAgIFRJTUVfQ0FURUdPUllfRVZFTklORyA9IDMsXHJcbiAgICBUSU1FX0NBVEVHT1JZX05JR0hUID0gNCxcclxuICAgIFRJTUVfQ0FURUdPUllfSE9MSURBWSA9IDUsXHJcbiAgICBUSU1FX0NBVEVHT1JZX1dFRUtEQVkgPSA2LFxyXG4gICAgVElNRV9DQVRFR09SWV9XRUVLRU5EID0gNyxcclxuICAgIFRJTUVfQ0FURUdPUllfTk9UX0hPTElEQVkgPSA4LFxyXG4gICAgU1VOREFZX0NPREUgPSAxLFxyXG4gICAgTU9OREFZX0NPREUgPSAyLFxyXG4gICAgVFVFU0RBWV9DT0RFID0gMyxcclxuICAgIFdFRE5FU0RBWV9DT0RFID0gNCxcclxuICAgIFRIVVJTREFZX0NPREUgPSA1LFxyXG4gICAgRlJJREFZX0NPREUgPSA2LFxyXG4gICAgU0FUVVJEQVlfQ09ERSA9IDcsXHJcbn1cclxuZXhwb3J0IGVudW0gSE1TUGVybWlzc2lvbiB7XHJcbiAgICBQRVJNSVNTSU9OX0FDQ0VTU19GSU5FX0xPQ0FUSU9OID0gXCJhbmRyb2lkLnBlcm1pc3Npb24uQUNDRVNTX0ZJTkVfTE9DQVRJT05cIixcclxuICAgIFBFUk1JU1NJT05fSFVBV0VJX0FDVElWSVRZX1JFQ09HTklUSU9OID0gXCJjb20uaHVhd2VpLmhtcy5wZXJtaXNzaW9uLkFDVElWSVRZX1JFQ09HTklUSU9OXCIsXHJcbiAgICBQRVJNSVNTSU9OX0FDVElWSVRZX1JFQ09HTklUSU9OID0gXCJhbmRyb2lkLnBlcm1pc3Npb24uQUNUSVZJVFlfUkVDT0dOSVRJT05cIixcclxuICAgIFBFUk1JU1NJT05fQkxVRVRPT1RIID0gXCJhbmRyb2lkLnBlcm1pc3Npb24uQkxVRVRPT1RIXCIsXHJcbiAgICBQRVJNSVNTSU9OX0NIQU5HRV9XSUZJX1NUQVRFID0gXCJhbmRyb2lkLnBlcm1pc3Npb24uQ0hBTkdFX1dJRklfU1RBVEVcIixcclxuICAgIFBFUk1JU1NJT05fQUNDRVNTX0NPQVJTRV9MT0NBVElPTiA9IFwiYW5kcm9pZC5wZXJtaXNzaW9uLkFDQ0VTU19DT0FSU0VfTE9DQVRJT05cIixcclxuICAgIFBFUk1JU1NJT05fQUNDRVNTX0JBQ0tHUk9VTkRfTE9DQVRJT04gPSBcImFuZHJvaWQucGVybWlzc2lvbi5BQ0NFU1NfQkFDS0dST1VORF9MT0NBVElPTlwiXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICBwcml2YXRlIGNvcmRvdmFCYXJyaWVyOiBhbnk7XHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoY29yZG92YUJhcnJpZXI6IGFueSkge1xyXG4gICAgICAgIHRoaXMuY29yZG92YUJhcnJpZXIgPSBjb3Jkb3ZhQmFycmllcjtcclxuICAgIH1cclxuICAgIHN1YnNjcmliZShjYWxsYmFjazogKGRhdGE6IGFueSkgPT4gdm9pZCk6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIHRoaXMuY29yZG92YUJhcnJpZXIuc3Vic2NyaWJlKGNhbGxiYWNrKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGNhdGNoKGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgdGhpcy5jb3Jkb3ZhQmFycmllci5jYXRjaChjYWxsYmFjayk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBydW4oYmFycmllckxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvcmRvdmFCYXJyaWVyLnJ1bihiYXJyaWVyTGFiZWwpO1xyXG4gICAgfVxyXG4gICAgcnVuSW5CYWNrZ3JvdW5kKGJhcnJpZXJMYWJlbDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29yZG92YUJhcnJpZXIucnVuSW5CYWNrZ3JvdW5kKGJhcnJpZXJMYWJlbCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmFycmllck1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlbGV0ZUFsbEJhcnJpZXJzKHN1Y2Nlc3M6IGFueSwgZXJyb3I6IGFueSk6IGFueSB7XHJcbiAgICAgICAgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLmRlbGV0ZUFsbEJhcnJpZXJzKHN1Y2Nlc3MsIGVycm9yKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBkZWxldGVCYXJyaWVyV2l0aExhYmVscyhzdWNjZXNzOiBhbnksIGVycm9yOiBhbnksIHBhcmFtczogYW55KTogYW55IHtcclxuICAgICAgICAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuZGVsZXRlQmFycmllcldpdGhMYWJlbHMoc3VjY2VzcywgZXJyb3IsIHBhcmFtcyk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgdW5SZWdpc3RlclJlY2VpdmVyKHN1Y2Nlc3M6IGFueSwgZXJyb3I6IGFueSk6IGFueSB7XHJcbiAgICAgICAgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLnVuUmVnaXN0ZXJSZWNlaXZlcihzdWNjZXNzLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcXVlcnlCYXJyaWVyc1dpdGhCYXJyaWVyS2V5cyhzdWNjZXNzOiBhbnksIGVycm9yOiBhbnksIHBhcmFtczogYW55KTogYW55IHtcclxuICAgICAgICAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIucXVlcnlCYXJyaWVyc1dpdGhCYXJyaWVyS2V5cyhzdWNjZXNzLCBlcnJvciwgcGFyYW1zKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBxdWVyeUJhcnJpZXJzV2l0aEFsbEJhcnJpZXJzKHN1Y2Nlc3M6IGFueSwgZXJyb3I6IGFueSk6IGFueSB7XHJcbiAgICAgICAgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLnF1ZXJ5QmFycmllcnNXaXRoQWxsQmFycmllcnMoc3VjY2VzcywgZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHN0b3BCYWNrZ3JvdW5kU2VydmljZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLnN0b3BCYWNrZ3JvdW5kU2VydmljZSgpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNldEJhY2tncm91bmRGaWxlKGZpbGVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLnNldEJhY2tncm91bmRGaWxlKGZpbGVOYW1lKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWRzZXRCYXJyaWVyIGV4dGVuZHMgQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICBzdGF0aWMga2VlcGluZyhoZWFkc2V0U3RhdHVzOiBudW1iZXIpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBiYXJyaWVyID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5IZWFkc2V0QmFycmllcihIZWFkc2V0QmFycmllci5uYW1lLCBcImtlZXBpbmdcIiwgW2hlYWRzZXRTdGF0dXNdKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoYmFycmllcik7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY29ubmVjdGluZygpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBiYXJyaWVyID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5IZWFkc2V0QmFycmllcihIZWFkc2V0QmFycmllci5uYW1lLCBcImNvbm5lY3RpbmdcIiwgW10pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihiYXJyaWVyKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBkaXNjb25uZWN0aW5nKCk6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGJhcnJpZXIgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkhlYWRzZXRCYXJyaWVyKEhlYWRzZXRCYXJyaWVyLm5hbWUsIFwiZGlzY29ubmVjdGluZ1wiLCBbXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGJhcnJpZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFtYmllbnRMaWdodEJhcnJpZXIgZXh0ZW5kcyBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgIHN0YXRpYyBhYm92ZSh2OiBudW1iZXIpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5BbWJpZW50TGlnaHRCYXJyaWVyKEFtYmllbnRMaWdodEJhcnJpZXIubmFtZSwgXCJhYm92ZVwiLCBbdl0pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBiZWxvdyh2OiBudW1iZXIpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5BbWJpZW50TGlnaHRCYXJyaWVyKEFtYmllbnRMaWdodEJhcnJpZXIubmFtZSwgXCJiZWxvd1wiLCBbdl0pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyByYW5nZSh2MTogbnVtYmVyLCB2MjogbnVtYmVyKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuQW1iaWVudExpZ2h0QmFycmllcihBbWJpZW50TGlnaHRCYXJyaWVyLm5hbWUsIFwicmFuZ2VcIiwgW3YxLCB2Ml0pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdpZmlCYXJyaWVyIGV4dGVuZHMgQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICBzdGF0aWMgY29ubmVjdGluZyhzMT86IHN0cmluZywgczI/OiBzdHJpbmcpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5XaWZpQmFycmllcihXaWZpQmFycmllci5uYW1lLCBcImNvbm5lY3RpbmdcIiwgW3MxLCBzMl0pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBkaXNhYmxpbmcoKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuV2lmaUJhcnJpZXIoV2lmaUJhcnJpZXIubmFtZSwgXCJkaXNhYmxpbmdcIiwgW10pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBkaXNjb25uZWN0aW5nKHMxPzogc3RyaW5nLCBzMj86IHN0cmluZyk6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGxldCBhcnI6IGFueVtdID0gW107XHJcbiAgICAgICAgaWYgKHMxICE9IG51bGwpIGFyciA9IFtzMSwgczJdO1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLldpZmlCYXJyaWVyKFdpZmlCYXJyaWVyLm5hbWUsIFwiZGlzY29ubmVjdGluZ1wiLCBhcnIpO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBlbmFibGluZygpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5XaWZpQmFycmllcihXaWZpQmFycmllci5uYW1lLCBcImVuYWJsaW5nXCIsIFtdKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMga2VlcGluZyhpOiBudW1iZXIsIHMxPzogc3RyaW5nLCBzMj86IHN0cmluZyk6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGxldCBhcnI6IGFueVtdID0gW2ldO1xyXG4gICAgICAgIGlmIChzMSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKHMxKTtcclxuICAgICAgICAgICAgYXJyLnB1c2goczIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5XaWZpQmFycmllcihXaWZpQmFycmllci5uYW1lLCBcImtlZXBpbmdcIiwgYXJyKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCbHVldG9vdGhCYXJyaWVyIGV4dGVuZHMgQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICBzdGF0aWMgY29ubmVjdGluZyhpOiBudW1iZXIpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CbHVldG9vdGhCYXJyaWVyKEJsdWV0b290aEJhcnJpZXIubmFtZSwgXCJjb25uZWN0aW5nXCIsIFtpXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGRpc2Nvbm5lY3RpbmcoaTogbnVtYmVyKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuQmx1ZXRvb3RoQmFycmllcihCbHVldG9vdGhCYXJyaWVyLm5hbWUsIFwiZGlzY29ubmVjdGluZ1wiLCBbaV0pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBrZWVwKGk6IG51bWJlciwgaTE6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkJsdWV0b290aEJhcnJpZXIoQmx1ZXRvb3RoQmFycmllci5uYW1lLCBcImtlZXBcIiwgW2ksIGkxXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmVoYXZpb3JCYXJyaWVyIGV4dGVuZHMgQXdhcmVuZXNzQmFycmllciB7XHJcblxyXG4gICAgc3RhdGljIGJlZ2lubmluZyguLi5pbnRzOiBudW1iZXJbXSk6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkJlaGF2aW9yQmFycmllcihCZWhhdmlvckJhcnJpZXIubmFtZSwgXCJiZWdpbm5pbmdcIiwgW2ludHNdKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZW5kaW5nKC4uLmludHM6IG51bWJlcltdKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuQmVoYXZpb3JCYXJyaWVyKEJlaGF2aW9yQmFycmllci5uYW1lLCBcImVuZGluZ1wiLCBbaW50c10pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBrZWVwaW5nKC4uLmludHM6IG51bWJlcltdKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuQmVoYXZpb3JCYXJyaWVyKEJlaGF2aW9yQmFycmllci5uYW1lLCBcImtlZXBpbmdcIiwgW2ludHNdKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2NhdGlvbkJhcnJpZXIgZXh0ZW5kcyBBd2FyZW5lc3NCYXJyaWVyIHtcclxuXHJcbiAgICBzdGF0aWMgZW50ZXIodjogbnVtYmVyLCB2MTogbnVtYmVyLCB2MjogbnVtYmVyKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuQmVoYXZpb3JCYXJyaWVyKExvY2F0aW9uQmFycmllci5uYW1lLCBcImVudGVyXCIsIFt2LCB2MSwgdjJdKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZXhpdCh2OiBudW1iZXIsIHYxOiBudW1iZXIsIHYyOiBudW1iZXIpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CZWhhdmlvckJhcnJpZXIoTG9jYXRpb25CYXJyaWVyLm5hbWUsIFwiZXhpdFwiLCBbdiwgdjEsIHYyXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHN0YXkodjogbnVtYmVyLCB2MTogbnVtYmVyLCB2MjogbnVtYmVyLCBsOiBudW1iZXIpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CZWhhdmlvckJhcnJpZXIoTG9jYXRpb25CYXJyaWVyLm5hbWUsIFwic3RheVwiLCBbdiwgdjEsIHYyLCBsXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2NyZWVuQmFycmllciBleHRlbmRzIEF3YXJlbmVzc0JhcnJpZXIge1xyXG5cclxuICAgIHN0YXRpYyBzY3JlZW5PbigpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CZWhhdmlvckJhcnJpZXIoU2NyZWVuQmFycmllci5uYW1lLCBcInNjcmVlbk9uXCIsIFtdKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2NyZWVuT2ZmKCk6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkJlaGF2aW9yQmFycmllcihTY3JlZW5CYXJyaWVyLm5hbWUsIFwic2NyZWVuT2ZmXCIsIFtdKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2NyZWVuVW5sb2NrKCk6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLkJlaGF2aW9yQmFycmllcihTY3JlZW5CYXJyaWVyLm5hbWUsIFwic2NyZWVuVW5sb2NrXCIsIFtdKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMga2VlcGluZyhpOiBudW1iZXIpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CZWhhdmlvckJhcnJpZXIoU2NyZWVuQmFycmllci5uYW1lLCBcImtlZXBpbmdcIiwgW2ldKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lQmFycmllciBleHRlbmRzIEF3YXJlbmVzc0JhcnJpZXIge1xyXG5cclxuICAgIHN0YXRpYyBkdXJpbmdQZXJpb2RPZkRheSh0aW1lWm9uZTogc3RyaW5nLCBsOiBudW1iZXIsIGwxOiBudW1iZXIpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5UaW1lQmFycmllcihUaW1lQmFycmllci5uYW1lLCBcImR1cmluZ1BlcmlvZE9mRGF5XCIsIFt0aW1lWm9uZSwgbCwgbDFdKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZHVyaW5nUGVyaW9kT2ZXZWVrKGk6IG51bWJlciwgdGltZVpvbmU6IHN0cmluZywgbDogbnVtYmVyLCBsMTogbnVtYmVyKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuVGltZUJhcnJpZXIoVGltZUJhcnJpZXIubmFtZSwgXCJkdXJpbmdQZXJpb2RPZldlZWtcIiwgW2ksIHRpbWVab25lLCBsLCBsMV0pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBkdXJpbmdUaW1lUGVyaW9kKGw6IG51bWJlciwgbDE6IG51bWJlcik6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSBuZXcgKDxhbnk+d2luZG93KS5Bd2FyZW5lc3NCYXJyaWVyLlRpbWVCYXJyaWVyKFRpbWVCYXJyaWVyLm5hbWUsIFwiZHVyaW5nVGltZVBlcmlvZFwiLCBbbCwgbDFdKTtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoY2Fwc3VsZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgaW5TdW5yaXNlT3JTdW5zZXRQZXJpb2QoaTogbnVtYmVyLCBsOiBudW1iZXIsIGwxOiBudW1iZXIpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5UaW1lQmFycmllcihUaW1lQmFycmllci5uYW1lLCBcImluU3VucmlzZU9yU3Vuc2V0UGVyaW9kXCIsIFtpLCBsLCBsMV0pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBpblRpbWVDYXRlZ29yeShpOiBudW1iZXIpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5UaW1lQmFycmllcihUaW1lQmFycmllci5uYW1lLCBcImluVGltZUNhdGVnb3J5XCIsIFtpXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmVhY29uQmFycmllciBleHRlbmRzIEF3YXJlbmVzc0JhcnJpZXIge1xyXG5cclxuICAgIHN0YXRpYyBkaXNjb3ZlcihuYW1lc3BhY2U6IHN0cmluZywgdHlwZT86IHN0cmluZyB8IG51bGwsIGNvbnRlbnQ/OiBzdHJpbmdbXSB8IG51bGwpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CZWFjb25CYXJyaWVyKEJlYWNvbkJhcnJpZXIubmFtZSwgXCJkaXNjb3ZlclwiLCBbbmFtZXNwYWNlLCB0eXBlLCBjb250ZW50XSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGtlZXAobmFtZXNwYWNlOiBzdHJpbmcsIHR5cGU/OiBzdHJpbmcgfCBudWxsLCBjb250ZW50Pzogc3RyaW5nW10gfCBudWxsKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IG5ldyAoPGFueT53aW5kb3cpLkF3YXJlbmVzc0JhcnJpZXIuQmVhY29uQmFycmllcihCZWFjb25CYXJyaWVyLm5hbWUsIFwia2VlcFwiLCBbbmFtZXNwYWNlLCB0eXBlLCBjb250ZW50XSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGNhcHN1bGUpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIG1pc3NlZChuYW1lc3BhY2U6IHN0cmluZywgdHlwZT86IHN0cmluZyB8IG51bGwsIGNvbnRlbnQ/OiBzdHJpbmdbXSB8IG51bGwpOiBBd2FyZW5lc3NCYXJyaWVyIHtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gbmV3ICg8YW55PndpbmRvdykuQXdhcmVuZXNzQmFycmllci5CZWFjb25CYXJyaWVyKEJlYWNvbkJhcnJpZXIubmFtZSwgXCJtaXNzZWRcIiwgW25hbWVzcGFjZSwgdHlwZSwgY29udGVudF0pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihjYXBzdWxlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbWJpbmF0aW9uQmFycmllciBleHRlbmRzIEF3YXJlbmVzc0JhcnJpZXIge1xyXG5cclxuICAgIHN0YXRpYyBvciguLi5hd2FyZW5lc3M6IEF3YXJlbmVzc0JhcnJpZXJbXSk6IEF3YXJlbmVzc0JhcnJpZXIge1xyXG4gICAgICAgIGNvbnN0IGJhcnJpZXIgPSBuZXcgKDxhbnk+d2luZG93KS5Db21iaW5hdGlvbkJhcnJpZXIoXCJvclwiLCBhd2FyZW5lc3MpO1xyXG4gICAgICAgIGJhcnJpZXIuY3VycmVudEJhcnJpZXJzID0gYXdhcmVuZXNzO1xyXG4gICAgICAgIGJhcnJpZXIuY29tYk1ldGhvZCA9IFwib3JcIjtcclxuICAgICAgICByZXR1cm4gbmV3IEF3YXJlbmVzc0JhcnJpZXIoYmFycmllcik7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYW5kKC4uLmF3YXJlbmVzczogQXdhcmVuZXNzQmFycmllcltdKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgYmFycmllciA9IG5ldyAoPGFueT53aW5kb3cpLkNvbWJpbmF0aW9uQmFycmllcihcImFuZFwiLCBhd2FyZW5lc3MpO1xyXG4gICAgICAgIGJhcnJpZXIuY3VycmVudEJhcnJpZXJzID0gYXdhcmVuZXNzO1xyXG4gICAgICAgIGJhcnJpZXIuY29tYk1ldGhvZCA9IFwiYW5kXCI7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FyZW5lc3NCYXJyaWVyKGJhcnJpZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBub3QoYXdhcmVuZXNzOiBBd2FyZW5lc3NCYXJyaWVyKTogQXdhcmVuZXNzQmFycmllciB7XHJcbiAgICAgICAgY29uc3QgYmFycmllciA9IG5ldyAoPGFueT53aW5kb3cpLkNvbWJpbmF0aW9uQmFycmllcihcIm5vdFwiLCBbYXdhcmVuZXNzXSk7XHJcbiAgICAgICAgYmFycmllci5jdXJyZW50QmFycmllcnMgPSBbYXdhcmVuZXNzXTtcclxuICAgICAgICBiYXJyaWVyLmNvbWJNZXRob2QgPSBcIm5vdFwiO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXdhcmVuZXNzQmFycmllcihiYXJyaWVyKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19