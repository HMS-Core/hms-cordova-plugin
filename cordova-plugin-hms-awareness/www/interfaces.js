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
exports.HMSPermission = exports.TimeBarrierConstants = exports.BluetoothDevice = exports.BehaviorBarrierConstant = exports.ScreenStatus = exports.BluetoothStatus = exports.WifiStatus = exports.HeadsetStatus = void 0;
//Enum value
var HeadsetStatus;
(function (HeadsetStatus) {
    HeadsetStatus[HeadsetStatus["CONNECTED"] = 1] = "CONNECTED";
    HeadsetStatus[HeadsetStatus["DISCONNECTED"] = 0] = "DISCONNECTED";
})(HeadsetStatus = exports.HeadsetStatus || (exports.HeadsetStatus = {}));
var WifiStatus;
(function (WifiStatus) {
    WifiStatus[WifiStatus["CONNECTED"] = 1] = "CONNECTED";
    WifiStatus[WifiStatus["DISCONNECTED"] = 4] = "DISCONNECTED";
    WifiStatus[WifiStatus["ENABLED"] = 3] = "ENABLED";
    WifiStatus[WifiStatus["DISABLED"] = -1] = "DISABLED";
})(WifiStatus = exports.WifiStatus || (exports.WifiStatus = {}));
var BluetoothStatus;
(function (BluetoothStatus) {
    BluetoothStatus[BluetoothStatus["CONNECTED"] = 1] = "CONNECTED";
    BluetoothStatus[BluetoothStatus["DISCONNECTED"] = 0] = "DISCONNECTED";
})(BluetoothStatus = exports.BluetoothStatus || (exports.BluetoothStatus = {}));
var ScreenStatus;
(function (ScreenStatus) {
    ScreenStatus[ScreenStatus["SCREENON"] = 1] = "SCREENON";
    ScreenStatus[ScreenStatus["SCREENOFF"] = 0] = "SCREENOFF";
    ScreenStatus[ScreenStatus["UNLOCK"] = 2] = "UNLOCK";
})(ScreenStatus = exports.ScreenStatus || (exports.ScreenStatus = {}));
var BehaviorBarrierConstant;
(function (BehaviorBarrierConstant) {
    BehaviorBarrierConstant[BehaviorBarrierConstant["BEHAVIOR_IN_VEHICLE"] = 0] = "BEHAVIOR_IN_VEHICLE";
    BehaviorBarrierConstant[BehaviorBarrierConstant["BEHAVIOR_ON_BICYCLE"] = 1] = "BEHAVIOR_ON_BICYCLE";
    BehaviorBarrierConstant[BehaviorBarrierConstant["BEHAVIOR_ON_FOOT"] = 2] = "BEHAVIOR_ON_FOOT";
    BehaviorBarrierConstant[BehaviorBarrierConstant["BEHAVIOR_STILL"] = 3] = "BEHAVIOR_STILL";
    BehaviorBarrierConstant[BehaviorBarrierConstant["BEHAVIOR_WALKING"] = 7] = "BEHAVIOR_WALKING";
    BehaviorBarrierConstant[BehaviorBarrierConstant["BEHAVIOR_RUNNING"] = 8] = "BEHAVIOR_RUNNING";
})(BehaviorBarrierConstant = exports.BehaviorBarrierConstant || (exports.BehaviorBarrierConstant = {}));
var BluetoothDevice;
(function (BluetoothDevice) {
    BluetoothDevice[BluetoothDevice["DEVICE_CAR"] = 0] = "DEVICE_CAR";
})(BluetoothDevice = exports.BluetoothDevice || (exports.BluetoothDevice = {}));
var TimeBarrierConstants;
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
})(TimeBarrierConstants = exports.TimeBarrierConstants || (exports.TimeBarrierConstants = {}));
var HMSPermission;
(function (HMSPermission) {
    HMSPermission["PERMISSION_ACCESS_FINE_LOCATION"] = "android.permission.ACCESS_FINE_LOCATION";
    HMSPermission["PERMISSION_HUAWEI_ACTIVITY_RECOGNITION"] = "com.huawei.hms.permission.ACTIVITY_RECOGNITION";
    HMSPermission["PERMISSION_ACTIVITY_RECOGNITION"] = "android.permission.ACTIVITY_RECOGNITION";
    HMSPermission["PERMISSION_BLUETOOTH"] = "android.permission.BLUETOOTH";
    HMSPermission["PERMISSION_CHANGE_WIFI_STATE"] = "android.permission.CHANGE_WIFI_STATE";
    HMSPermission["PERMISSION_ACCESS_COARSE_LOCATION"] = "android.permission.ACCESS_COARSE_LOCATION";
    HMSPermission["PERMISSION_ACCESS_BACKGROUND_LOCATION"] = "android.permission.ACCESS_BACKGROUND_LOCATION";
})(HMSPermission = exports.HMSPermission || (exports.HMSPermission = {}));
//# sourceMappingURL=interfaces.js.map