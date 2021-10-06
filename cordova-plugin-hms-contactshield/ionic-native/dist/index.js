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
export var ContactShieldSetting;
(function (ContactShieldSetting) {
    ContactShieldSetting[ContactShieldSetting["DEFAULT_INCUBATION_PERIOD"] = 14] = "DEFAULT_INCUBATION_PERIOD";
})(ContactShieldSetting || (ContactShieldSetting = {}));
export var ContactShieldEngine;
(function (ContactShieldEngine) {
    ContactShieldEngine["TOKEN_A"] = "TOKEN_WINDOW_MODE";
})(ContactShieldEngine || (ContactShieldEngine = {}));
export var HMSPermission;
(function (HMSPermission) {
    HMSPermission["ACCESS_NETWORK_STATE"] = "android.permission.ACCESS_NETWORK_STATE";
    HMSPermission["BLUETOOTH"] = "android.permission.BLUETOOTH";
    HMSPermission["BLUETOOTH_ADMIN"] = "android.permission.BLUETOOTH_ADMIN";
    HMSPermission["ACCESS_COARSE_LOCATION"] = "android.permission.ACCESS_COARSE_LOCATION";
    HMSPermission["ACCESS_FINE_LOCATION"] = "android.permission.ACCESS_FINE_LOCATION";
})(HMSPermission || (HMSPermission = {}));
export var RiskLevel;
(function (RiskLevel) {
    RiskLevel[RiskLevel["RISK_LEVEL_INVALID"] = 0] = "RISK_LEVEL_INVALID";
    RiskLevel[RiskLevel["RISK_LEVEL_LOWEST"] = 1] = "RISK_LEVEL_LOWEST";
    RiskLevel[RiskLevel["RISK_LEVEL_LOW"] = 2] = "RISK_LEVEL_LOW";
    RiskLevel[RiskLevel["RISK_LEVEL_MEDIUM_LOW"] = 3] = "RISK_LEVEL_MEDIUM_LOW";
    RiskLevel[RiskLevel["RISK_LEVEL_MEDIUM"] = 4] = "RISK_LEVEL_MEDIUM";
    RiskLevel[RiskLevel["RISK_LEVEL_MEDIUM_HIGH"] = 5] = "RISK_LEVEL_MEDIUM_HIGH";
    RiskLevel[RiskLevel["RISK_LEVEL_HIGH"] = 6] = "RISK_LEVEL_HIGH";
    RiskLevel[RiskLevel["RISK_LEVEL_EXT_HIGH"] = 7] = "RISK_LEVEL_EXT_HIGH";
    RiskLevel[RiskLevel["RISK_LEVEL_HIGHEST"] = 8] = "RISK_LEVEL_HIGHEST";
})(RiskLevel || (RiskLevel = {}));
export var HMSStatusCode;
(function (HMSStatusCode) {
    HMSStatusCode[HMSStatusCode["STATUS_SUCCESS"] = 0] = "STATUS_SUCCESS";
    HMSStatusCode[HMSStatusCode["STATUS_FAILURE"] = -1] = "STATUS_FAILURE";
    HMSStatusCode[HMSStatusCode["STATUS_API_DISORDER"] = 8001] = "STATUS_API_DISORDER";
    HMSStatusCode[HMSStatusCode["STATUS_APP_QUOTA_LIMITED"] = 8100] = "STATUS_APP_QUOTA_LIMITED";
    HMSStatusCode[HMSStatusCode["STATUS_DISK_FULL"] = 8101] = "STATUS_DISK_FULL";
    HMSStatusCode[HMSStatusCode["STATUS_BLUETOOTH_OPERATION_ERROR"] = 8102] = "STATUS_BLUETOOTH_OPERATION_ERROR";
    HMSStatusCode[HMSStatusCode["STATUS_MISSING_PERMISSION_BLUETOOTH"] = 8016] = "STATUS_MISSING_PERMISSION_BLUETOOTH";
    HMSStatusCode[HMSStatusCode["STATUS_MISSING_SETTING_LOCATION_ON"] = 8020] = "STATUS_MISSING_SETTING_LOCATION_ON";
    HMSStatusCode[HMSStatusCode["STATUS_INTERNAL_ERROR"] = 8060] = "STATUS_INTERNAL_ERROR";
    HMSStatusCode[HMSStatusCode["STATUS_MISSING_PERMISSION_INTERNET"] = 8064] = "STATUS_MISSING_PERMISSION_INTERNET";
})(HMSStatusCode || (HMSStatusCode = {}));
var HmsContactShieldOriginal = /** @class */ (function (_super) {
    __extends(HmsContactShieldOriginal, _super);
    function HmsContactShieldOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HmsContactShieldOriginal.prototype.clearData = function () { return cordova(this, "clearData", { "otherPromise": true }, arguments); };
    HmsContactShieldOriginal.prototype.getContactDetail = function (token) { return cordova(this, "getContactDetail", { "otherPromise": true }, arguments); };
    HmsContactShieldOriginal.prototype.startContactShield = function (incubationPeriod) { return cordova(this, "startContactShield", { "otherPromise": true }, arguments); };
    HmsContactShieldOriginal.prototype.startContactShieldOld = function (incubationPeriod) { return cordova(this, "startContactShieldOld", { "otherPromise": true }, arguments); };
    HmsContactShieldOriginal.prototype.startContactShieldNoPersistent = function (incubationPeriod) { return cordova(this, "startContactShieldNoPersistent", { "otherPromise": true }, arguments); };
    HmsContactShieldOriginal.prototype.stopContactShield = function () { return cordova(this, "stopContactShield", { "otherPromise": true }, arguments); };
    HmsContactShieldOriginal.prototype.getContactSketch = function (token) { return cordova(this, "getContactSketch", { "otherPromise": true }, arguments); };
    HmsContactShieldOriginal.prototype.getContactWindow = function (token) { return cordova(this, "getContactWindow", { "otherPromise": true }, arguments); };
    HmsContactShieldOriginal.prototype.getPeriodicKey = function () { return cordova(this, "getPeriodicKey", { "otherPromise": true }, arguments); };
    HmsContactShieldOriginal.prototype.isContactShieldRunning = function () { return cordova(this, "isContactShieldRunning", { "otherPromise": true }, arguments); };
    HmsContactShieldOriginal.prototype.putSharedKeyFiles = function (sharedKeyData) { return cordova(this, "putSharedKeyFiles", { "otherPromise": true }, arguments); };
    HmsContactShieldOriginal.prototype.putSharedKeyFilesOld = function (sharedKeyData) { return cordova(this, "putSharedKeyFilesOld", { "otherPromise": true }, arguments); };
    HmsContactShieldOriginal.prototype.putSharedKeyFilesKeys = function (sharedKeyData) { return cordova(this, "putSharedKeyFilesKeys", { "otherPromise": true }, arguments); };
    HmsContactShieldOriginal.prototype.putSharedKeyFilesProvider = function (files) { return cordova(this, "putSharedKeyFilesProvider", { "otherPromise": true }, arguments); };
    HmsContactShieldOriginal.prototype.getDailySketch = function (dailySketch) { return cordova(this, "getDailySketch", { "otherPromise": true }, arguments); };
    HmsContactShieldOriginal.prototype.setSharedKeysDataMapping = function (sharedKey) { return cordova(this, "setSharedKeysDataMapping", { "otherPromise": true }, arguments); };
    HmsContactShieldOriginal.prototype.getSharedKeysDataMapping = function () { return cordova(this, "getSharedKeysDataMapping", { "otherPromise": true }, arguments); };
    HmsContactShieldOriginal.prototype.getStatus = function () { return cordova(this, "getStatus", { "otherPromise": true }, arguments); };
    HmsContactShieldOriginal.prototype.getContactShieldVersion = function () { return cordova(this, "getContactShieldVersion", { "otherPromise": true }, arguments); };
    HmsContactShieldOriginal.prototype.getDeviceCalibrationConfidence = function () { return cordova(this, "getDeviceCalibrationConfidence", { "otherPromise": true }, arguments); };
    HmsContactShieldOriginal.prototype.isSupportScanningWithoutLocation = function () { return cordova(this, "isSupportScanningWithoutLocation", { "otherPromise": true }, arguments); };
    HmsContactShieldOriginal.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HmsContactShieldOriginal.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HmsContactShieldOriginal.prototype.handleCallback = function (event, callback) { return cordova(this, "handleCallback", { "sync": true }, arguments); };
    HmsContactShieldOriginal.prototype.registerReceiver = function () { return cordova(this, "registerReceiver", { "otherPromise": true }, arguments); };
    HmsContactShieldOriginal.prototype.unregisterReceiver = function () { return cordova(this, "unregisterReceiver", { "otherPromise": true }, arguments); };
    HmsContactShieldOriginal.prototype.hasPermission = function (permission) { return cordova(this, "hasPermission", { "otherPromise": true }, arguments); };
    HmsContactShieldOriginal.prototype.requestPermissions = function (permissions) { return cordova(this, "requestPermissions", { "otherPromise": true }, arguments); };
    HmsContactShieldOriginal.pluginName = "HmsContactShield";
    HmsContactShieldOriginal.plugin = "cordova-plugin-hms-contactshield";
    HmsContactShieldOriginal.pluginRef = "HMSContactShield";
    HmsContactShieldOriginal.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HmsContactShieldOriginal.platforms = ["Android"];
    return HmsContactShieldOriginal;
}(IonicNativePlugin));
var HmsContactShield = new HmsContactShieldOriginal();
export { HmsContactShield };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1jb250YWN0c2hpZWxkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFnQkEsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RSxNQUFNLENBQU4sSUFBWSxvQkFFWDtBQUZELFdBQVksb0JBQW9CO0lBQzlCLDBHQUE4QixDQUFBO0FBQ2hDLENBQUMsRUFGVyxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBRS9CO0FBRUQsTUFBTSxDQUFOLElBQVksbUJBRVg7QUFGRCxXQUFZLG1CQUFtQjtJQUM3QixvREFBNkIsQ0FBQTtBQUMvQixDQUFDLEVBRlcsbUJBQW1CLEtBQW5CLG1CQUFtQixRQUU5QjtBQUVELE1BQU0sQ0FBTixJQUFZLGFBTVg7QUFORCxXQUFZLGFBQWE7SUFDdkIsaUZBQWdFLENBQUE7SUFDaEUsMkRBQTBDLENBQUE7SUFDMUMsdUVBQXNELENBQUE7SUFDdEQscUZBQW9FLENBQUE7SUFDcEUsaUZBQWdFLENBQUE7QUFDbEUsQ0FBQyxFQU5XLGFBQWEsS0FBYixhQUFhLFFBTXhCO0FBRUQsTUFBTSxDQUFOLElBQVksU0FVWDtBQVZELFdBQVksU0FBUztJQUNuQixxRUFBc0IsQ0FBQTtJQUN0QixtRUFBcUIsQ0FBQTtJQUNyQiw2REFBa0IsQ0FBQTtJQUNsQiwyRUFBeUIsQ0FBQTtJQUN6QixtRUFBcUIsQ0FBQTtJQUNyQiw2RUFBMEIsQ0FBQTtJQUMxQiwrREFBbUIsQ0FBQTtJQUNuQix1RUFBdUIsQ0FBQTtJQUN2QixxRUFBc0IsQ0FBQTtBQUN4QixDQUFDLEVBVlcsU0FBUyxLQUFULFNBQVMsUUFVcEI7QUFFRCxNQUFNLENBQU4sSUFBWSxhQVdYO0FBWEQsV0FBWSxhQUFhO0lBQ3ZCLHFFQUFrQixDQUFBO0lBQ2xCLHNFQUFtQixDQUFBO0lBQ25CLGtGQUEwQixDQUFBO0lBQzFCLDRGQUErQixDQUFBO0lBQy9CLDRFQUF1QixDQUFBO0lBQ3ZCLDRHQUF1QyxDQUFBO0lBQ3ZDLGtIQUEwQyxDQUFBO0lBQzFDLGdIQUF5QyxDQUFBO0lBQ3pDLHNGQUE0QixDQUFBO0lBQzVCLGdIQUF5QyxDQUFBO0FBQzNDLENBQUMsRUFYVyxhQUFhLEtBQWIsYUFBYSxRQVd4Qjs7SUE0RnFDLG9DQUFpQjs7OztJQUdyRCxvQ0FBUztJQUtULDJDQUFnQixhQUFDLEtBQWE7SUFLOUIsNkNBQWtCLGFBQUMsZ0JBQXdCO0lBSzNDLGdEQUFxQixhQUFDLGdCQUF3QjtJQUs5Qyx5REFBOEIsYUFBQyxnQkFBd0I7SUFLdkQsNENBQWlCO0lBS2pCLDJDQUFnQixhQUFDLEtBQWE7SUFLOUIsMkNBQWdCLGFBQUMsS0FBYTtJQUs5Qix5Q0FBYztJQUtkLGlEQUFzQjtJQUt0Qiw0Q0FBaUIsYUFBQyxhQUE0QjtJQUs5QywrQ0FBb0IsYUFBQyxhQUE0QjtJQUtqRCxnREFBcUIsYUFBQyxhQUFnQztJQUt0RCxvREFBeUIsYUFBQyxLQUFlO0lBS3pDLHlDQUFjLGFBQUMsV0FBcUM7SUFLcEQsbURBQXdCLGFBQUMsU0FBK0I7SUFLeEQsbURBQXdCO0lBS3hCLG9DQUFTO0lBS1Qsa0RBQXVCO0lBS3ZCLHlEQUE4QjtJQUs5QiwyREFBZ0M7SUFLaEMsd0NBQWE7SUFLYix1Q0FBWTtJQUtaLHlDQUFjLGFBQUMsS0FBYSxFQUFFLFFBQTZCO0lBSzNELDJDQUFnQjtJQUtoQiw2Q0FBa0I7SUFLbEIsd0NBQWEsYUFBQyxVQUF5QjtJQUt2Qyw2Q0FBa0IsYUFBQyxXQUE0Qjs7Ozs7OzJCQS9SakQ7RUFxSnNDLGlCQUFpQjtTQUExQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgQ29weXJpZ2h0IDIwMjAtMjAyMS4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuXHJcbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXHJcbiAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuXHJcbiAgICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5leHBvcnQgZW51bSBDb250YWN0U2hpZWxkU2V0dGluZyB7XHJcbiAgREVGQVVMVF9JTkNVQkFUSU9OX1BFUklPRCA9IDE0XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENvbnRhY3RTaGllbGRFbmdpbmUge1xyXG4gIFRPS0VOX0EgPSBcIlRPS0VOX1dJTkRPV19NT0RFXCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSE1TUGVybWlzc2lvbiB7XHJcbiAgQUNDRVNTX05FVFdPUktfU1RBVEUgPSBcImFuZHJvaWQucGVybWlzc2lvbi5BQ0NFU1NfTkVUV09SS19TVEFURVwiLFxyXG4gIEJMVUVUT09USCA9IFwiYW5kcm9pZC5wZXJtaXNzaW9uLkJMVUVUT09USFwiLFxyXG4gIEJMVUVUT09USF9BRE1JTiA9IFwiYW5kcm9pZC5wZXJtaXNzaW9uLkJMVUVUT09USF9BRE1JTlwiLFxyXG4gIEFDQ0VTU19DT0FSU0VfTE9DQVRJT04gPSBcImFuZHJvaWQucGVybWlzc2lvbi5BQ0NFU1NfQ09BUlNFX0xPQ0FUSU9OXCIsXHJcbiAgQUNDRVNTX0ZJTkVfTE9DQVRJT04gPSBcImFuZHJvaWQucGVybWlzc2lvbi5BQ0NFU1NfRklORV9MT0NBVElPTlwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFJpc2tMZXZlbCB7XHJcbiAgUklTS19MRVZFTF9JTlZBTElEID0gMCxcclxuICBSSVNLX0xFVkVMX0xPV0VTVCA9IDEsXHJcbiAgUklTS19MRVZFTF9MT1cgPSAyLFxyXG4gIFJJU0tfTEVWRUxfTUVESVVNX0xPVyA9IDMsXHJcbiAgUklTS19MRVZFTF9NRURJVU0gPSA0LFxyXG4gIFJJU0tfTEVWRUxfTUVESVVNX0hJR0ggPSA1LFxyXG4gIFJJU0tfTEVWRUxfSElHSCA9IDYsXHJcbiAgUklTS19MRVZFTF9FWFRfSElHSCA9IDcsXHJcbiAgUklTS19MRVZFTF9ISUdIRVNUID0gOFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBITVNTdGF0dXNDb2RlIHtcclxuICBTVEFUVVNfU1VDQ0VTUyA9IDAsXHJcbiAgU1RBVFVTX0ZBSUxVUkUgPSAtMSxcclxuICBTVEFUVVNfQVBJX0RJU09SREVSID0gODAwMSxcclxuICBTVEFUVVNfQVBQX1FVT1RBX0xJTUlURUQgPSA4MTAwLFxyXG4gIFNUQVRVU19ESVNLX0ZVTEwgPSA4MTAxLFxyXG4gIFNUQVRVU19CTFVFVE9PVEhfT1BFUkFUSU9OX0VSUk9SID0gODEwMixcclxuICBTVEFUVVNfTUlTU0lOR19QRVJNSVNTSU9OX0JMVUVUT09USCA9IDgwMTYsXHJcbiAgU1RBVFVTX01JU1NJTkdfU0VUVElOR19MT0NBVElPTl9PTiA9IDgwMjAsXHJcbiAgU1RBVFVTX0lOVEVSTkFMX0VSUk9SID0gODA2MCxcclxuICBTVEFUVVNfTUlTU0lOR19QRVJNSVNTSU9OX0lOVEVSTkVUID0gODA2NFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljS2V5IHtcclxuICBjb250ZW50OiBJbnQ4QXJyYXk7XHJcbiAgaW5pdGlhbFJpc2tMZXZlbDogbnVtYmVyO1xyXG4gIHBlcmlvZGljS2V5TGlmZVRpbWU6IG51bWJlcjtcclxuICBwZXJpb2RpY0tleVZhbGlkVGltZTogbnVtYmVyO1xyXG4gIHJlcG9ydFR5cGU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaGFyZWRLZXlEYXRhIHtcclxuICB0b2tlbjogc3RyaW5nO1xyXG4gIGRpYWdub3Npc0NvbmZpZ3VyYXRpb246IERpYWdub3Npc0NvbmZpZ3VyYXRpb247XHJcbiAgZmlsZUxpc3Q6IHN0cmluZ1tdXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2hhcmVkS2V5RGF0YUtleXMge1xyXG4gIHRva2VuOiBzdHJpbmc7XHJcbiAgZGlhZ25vc2lzQ29uZmlndXJhdGlvbjogRGlhZ25vc2lzQ29uZmlndXJhdGlvbjtcclxuICBmaWxlTGlzdDogc3RyaW5nW107XHJcbiAgcHVibGljS2V5czogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2hhcmVkS2V5RGF0YU1hcHBpbmcge1xyXG4gIGRheXNTaW5jZUNyZWF0aW9uVG9Db250YWdpb3VzbmVzczogYW55O1xyXG4gIGRlZmF1bHRSZXBvcnRUeXBlOiBudW1iZXI7XHJcbiAgZGVmYXVsdENvbnRhZ2lvdXNuZXNzOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGFpbHlTa2V0Y2hDb25maWd1cmF0aW9uIHtcclxuICB3ZWlnaHRzT2ZSZXBvcnRUeXBlOiBudW1iZXJbXSxcclxuICB3ZWlnaHRzT2ZDb250YWdpb3VzbmVzczogbnVtYmVyW10sXHJcbiAgdGhyZXNob2xkT2ZBdHRlbnVhdGlvbkluRGI6IG51bWJlcltdLFxyXG4gIHdlaWdodHNPZkF0dGVudWF0aW9uQnVja2V0OiBudW1iZXJbXSxcclxuICB0aHJlc2hvbGRPZkRheXNTaW5jZUhpdDogbnVtYmVyLFxyXG4gIG1pbldpbmRvd1Njb3JlOiBudW1iZXIsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlhZ25vc2lzQ29uZmlndXJhdGlvbiB7XHJcbiAgYXR0ZW51YXRpb25EdXJhdGlvblRocmVzaG9sZHM/OiBudW1iZXJbXTtcclxuICBhdHRlbnVhdGlvblJpc2tWYWx1ZXM/OiBudW1iZXJbXTtcclxuICBhdHRlbnVhdGlvbldlaWdodD86IG51bWJlcjtcclxuICBkYXlzQWZ0ZXJDb250YWN0ZWRSaXNrVmFsdWVzPzogbnVtYmVyW107XHJcbiAgZGF5c0FmdGVyQ29udGFjdGVkV2VpZ2h0PzogbnVtYmVyO1xyXG4gIGR1cmF0aW9uUmlza1ZhbHVlcz86IG51bWJlcltdO1xyXG4gIGR1cmF0aW9uV2VpZ2h0PzogbnVtYmVyO1xyXG4gIGluaXRpYWxSaXNrTGV2ZWxSaXNrVmFsdWVzPzogbnVtYmVyW107XHJcbiAgaW5pdGlhbFJpc2tMZXZlbFdlaWdodD86IG51bWJlcjtcclxuICBtaW5pbXVtUmlza1ZhbHVlVGhyZXNob2xkPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbnRhY3RTa2V0Y2gge1xyXG4gIGF0dGVudWF0aW9uRHVyYXRpb25zOiBudW1iZXJbXTtcclxuICBkYXlzU2luY2VMYXN0SGl0OiBudW1iZXI7XHJcbiAgbWF4Umlza1ZhbHVlOiBudW1iZXI7XHJcbiAgbnVtYmVyT2ZIaXRzOiBudW1iZXI7XHJcbiAgc3VtbWF0aW9uUmlza1ZhbHVlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29udGFjdERldGFpbCB7XHJcbiAgYXR0ZW51YXRpb25EdXJhdGlvbnM6IG51bWJlcltdO1xyXG4gIGF0dGVudWF0aW9uUmlza1ZhbHVlOiBudW1iZXI7XHJcbiAgZGF5TnVtYmVyOiBudW1iZXI7XHJcbiAgZHVyYXRpb25NaW51dGVzOiBudW1iZXI7XHJcbiAgaW5pdGlhbFJpc2tMZXZlbDogbnVtYmVyO1xyXG4gIHRvdGFsUmlza1ZhbHVlOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDb250YWN0V2luZG93IHtcclxuICBkYXRlTWlsbGlzOiBudW1iZXI7XHJcbiAgcmVwb3J0VHlwZTogbnVtYmVyO1xyXG4gIHNjYW5JbmZvczogU2NhbkluZm9bXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTY2FuSW5mbyB7XHJcbiAgYXZlcmFnZUF0dGVudWF0aW9uOiBudW1iZXI7XHJcbiAgbWluaW11bUF0dGVudWF0aW9uOiBudW1iZXI7XHJcbiAgc2Vjb25kc1NpbmNlTGFzdFNjYW46IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0dXNDb2RlIHtcclxuICBzdGF0dXNDb2RlOiBudW1iZXI7XHJcbiAgc3RhdHVzTWVzc2FnZTogc3RyaW5nO1xyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSG1zQ29udGFjdFNoaWVsZCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWNvbnRhY3RzaGllbGQnLFxyXG4gIHBsdWdpblJlZjogJ0hNU0NvbnRhY3RTaGllbGQnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhtc0NvbnRhY3RTaGllbGQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY2xlYXJEYXRhKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBnZXRDb250YWN0RGV0YWlsKHRva2VuOiBzdHJpbmcpOiBQcm9taXNlPENvbnRhY3REZXRhaWxbXT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzdGFydENvbnRhY3RTaGllbGQoaW5jdWJhdGlvblBlcmlvZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHN0YXJ0Q29udGFjdFNoaWVsZE9sZChpbmN1YmF0aW9uUGVyaW9kOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc3RhcnRDb250YWN0U2hpZWxkTm9QZXJzaXN0ZW50KGluY3ViYXRpb25QZXJpb2Q6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzdG9wQ29udGFjdFNoaWVsZCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0Q29udGFjdFNrZXRjaCh0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxDb250YWN0U2tldGNoPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldENvbnRhY3RXaW5kb3codG9rZW46IHN0cmluZyk6IFByb21pc2U8Q29udGFjdFdpbmRvd1tdPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldFBlcmlvZGljS2V5KCk6IFByb21pc2U8UGVyaW9kaWNLZXlbXT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBpc0NvbnRhY3RTaGllbGRSdW5uaW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBwdXRTaGFyZWRLZXlGaWxlcyhzaGFyZWRLZXlEYXRhOiBTaGFyZWRLZXlEYXRhKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHB1dFNoYXJlZEtleUZpbGVzT2xkKHNoYXJlZEtleURhdGE6IFNoYXJlZEtleURhdGEpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgcHV0U2hhcmVkS2V5RmlsZXNLZXlzKHNoYXJlZEtleURhdGE6IFNoYXJlZEtleURhdGFLZXlzKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHB1dFNoYXJlZEtleUZpbGVzUHJvdmlkZXIoZmlsZXM6IHN0cmluZ1tdKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldERhaWx5U2tldGNoKGRhaWx5U2tldGNoOiBEYWlseVNrZXRjaENvbmZpZ3VyYXRpb24pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzZXRTaGFyZWRLZXlzRGF0YU1hcHBpbmcoc2hhcmVkS2V5OiBTaGFyZWRLZXlEYXRhTWFwcGluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBnZXRTaGFyZWRLZXlzRGF0YU1hcHBpbmcoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0U3RhdHVzKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldENvbnRhY3RTaGllbGRWZXJzaW9uKCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldERldmljZUNhbGlicmF0aW9uQ29uZmlkZW5jZSgpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBpc1N1cHBvcnRTY2FubmluZ1dpdGhvdXRMb2NhdGlvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgaGFuZGxlQ2FsbGJhY2soZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgcmVnaXN0ZXJSZWNlaXZlcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgdW5yZWdpc3RlclJlY2VpdmVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBoYXNQZXJtaXNzaW9uKHBlcm1pc3Npb246IEhNU1Blcm1pc3Npb24pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgcmVxdWVzdFBlcm1pc3Npb25zKHBlcm1pc3Npb25zOiBITVNQZXJtaXNzaW9uW10pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19