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
var HMSAvailabilityOriginal = /** @class */ (function (_super) {
    __extends(HMSAvailabilityOriginal, _super);
    function HMSAvailabilityOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSAvailabilityOriginal.prototype.isHuaweiMobileServicesAvailable = function (minApkVersion) { return cordova(this, "isHuaweiMobileServicesAvailable", { "otherPromise": true }, arguments); };
    HMSAvailabilityOriginal.prototype.isHuaweiMobileNoticeAvailable = function () { return cordova(this, "isHuaweiMobileNoticeAvailable", { "otherPromise": true }, arguments); };
    HMSAvailabilityOriginal.prototype.getApiMap = function () { return cordova(this, "getApiMap", { "otherPromise": true }, arguments); };
    HMSAvailabilityOriginal.prototype.getServicesVersionCode = function () { return cordova(this, "getServicesVersionCode", { "otherPromise": true }, arguments); };
    HMSAvailabilityOriginal.prototype.setServicesVersionCode = function (servicesVersionCode) { return cordova(this, "setServicesVersionCode", { "otherPromise": true }, arguments); };
    HMSAvailabilityOriginal.prototype.isUserResolvableError = function (errorCode) { return cordova(this, "isUserResolvableError", { "otherPromise": true }, arguments); };
    HMSAvailabilityOriginal.prototype.getErrorString = function (errorCode) { return cordova(this, "getErrorString", { "otherPromise": true }, arguments); };
    HMSAvailabilityOriginal.prototype.resolveError = function (errorCode, requestCode) { return cordova(this, "resolveError", { "otherPromise": true }, arguments); };
    HMSAvailabilityOriginal.prototype.showErrorDialogFragment = function (errorCode, requestCode, cancelListener) { return cordova(this, "showErrorDialogFragment", { "otherPromise": true }, arguments); };
    HMSAvailabilityOriginal.prototype.showErrorNotification = function (errorCode) { return cordova(this, "showErrorNotification", { "otherPromise": true }, arguments); };
    HMSAvailabilityOriginal.pluginName = "HMSAvailability";
    HMSAvailabilityOriginal.plugin = "cordova-plugin-hms-availability";
    HMSAvailabilityOriginal.pluginRef = "HMSAvailability";
    HMSAvailabilityOriginal.repo = "";
    HMSAvailabilityOriginal.platforms = ["Android", "iOS"];
    return HMSAvailabilityOriginal;
}(IonicNativePlugin));
var HMSAvailability = new HMSAvailabilityOriginal();
export { HMSAvailability };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBaUJBLE9BQU8sOEJBQW9DLE1BQU0sb0JBQW9CLENBQUM7O0lBVWpDLG1DQUFpQjs7OztJQU1sRCx5REFBK0IsYUFBQyxhQUFzQjtJQUt0RCx1REFBNkI7SUFLN0IsbUNBQVM7SUFLVCxnREFBc0I7SUFLdEIsZ0RBQXNCLGFBQUMsbUJBQTJCO0lBS2xELCtDQUFxQixhQUFDLFNBQWlCO0lBS3ZDLHdDQUFjLGFBQUMsU0FBaUI7SUFLaEMsc0NBQVksYUFBQyxTQUFpQixFQUFFLFdBQW1CO0lBS25ELGlEQUF1QixhQUFDLFNBQWlCLEVBQUUsV0FBbUIsRUFBRSxjQUEyQjtJQUszRiwrQ0FBcUIsYUFBQyxTQUFpQjs7Ozs7OzBCQTlFM0M7RUEyQnFDLGlCQUFpQjtTQUF6QyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIENvcHlyaWdodCAyMDIwLTIwMjQuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxyXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2lufSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiAnSE1TQXZhaWxhYmlsaXR5JyxcclxuICAgIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hdmFpbGFiaWxpdHknLFxyXG4gICAgcGx1Z2luUmVmOiAnSE1TQXZhaWxhYmlsaXR5JyxcclxuICAgIHJlcG86ICcnLFxyXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0F2YWlsYWJpbGl0eSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgSE1TIENvcmUgaXMgaW5zdGFsbGVkLlxyXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxudW1iZXI+fVxyXG4gICAgICovXHJcbiAgICBAQ29yZG92YSh7b3RoZXJQcm9taXNlOiB0cnVlfSlcclxuICAgIGlzSHVhd2VpTW9iaWxlU2VydmljZXNBdmFpbGFibGUobWluQXBrVmVyc2lvbj86IG51bWJlcik6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxyXG4gICAgaXNIdWF3ZWlNb2JpbGVOb3RpY2VBdmFpbGFibGUoKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXHJcbiAgICBnZXRBcGlNYXAoKTogUHJvbWlzZTxBcGlNYXA+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXHJcbiAgICBnZXRTZXJ2aWNlc1ZlcnNpb25Db2RlKCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxyXG4gICAgc2V0U2VydmljZXNWZXJzaW9uQ29kZShzZXJ2aWNlc1ZlcnNpb25Db2RlOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXHJcbiAgICBpc1VzZXJSZXNvbHZhYmxlRXJyb3IoZXJyb3JDb2RlOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXHJcbiAgICBnZXRFcnJvclN0cmluZyhlcnJvckNvZGU6IG51bWJlcik6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxyXG4gICAgcmVzb2x2ZUVycm9yKGVycm9yQ29kZTogbnVtYmVyLCByZXF1ZXN0Q29kZTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxyXG4gICAgc2hvd0Vycm9yRGlhbG9nRnJhZ21lbnQoZXJyb3JDb2RlOiBudW1iZXIsIHJlcXVlc3RDb2RlOiBudW1iZXIsIGNhbmNlbExpc3RlbmVyPzogKCkgPT4gdm9pZCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7b3RoZXJQcm9taXNlOiB0cnVlfSlcclxuICAgIHNob3dFcnJvck5vdGlmaWNhdGlvbihlcnJvckNvZGU6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcGlNYXAge1xyXG4gICAgJ0h1YXdlaUlhcC5BUEknOiBudW1iZXIsXHJcbiAgICAnSHVhd2VpSUQuQVBJJzogbnVtYmVyLFxyXG4gICAgJ0h1YXdlaUdhbWUuQVBJJzogbnVtYmVyLFxyXG4gICAgJ0h1YXdlaVBheS5BUEknOiBudW1iZXIsXHJcbiAgICAnSHVhd2VpU25zLkFQSSc6IG51bWJlcixcclxuICAgICdIdWF3ZWlPcGVuRGV2aWNlLkFQSSc6IG51bWJlcixcclxuICAgICdIdWF3ZWlQUFNraXQuQVBJJzogbnVtYmVyLFxyXG4gICAgJ0h1YXdlaVB1c2guQVBJJzogbnVtYmVyXHJcbn1cclxuIl19