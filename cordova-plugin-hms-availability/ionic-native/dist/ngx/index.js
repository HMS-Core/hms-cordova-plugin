/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.

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
var HMSAvailability = /** @class */ (function (_super) {
    __extends(HMSAvailability, _super);
    function HMSAvailability() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSAvailability.prototype.isHuaweiMobileServicesAvailable = function (minApkVersion) { return cordova(this, "isHuaweiMobileServicesAvailable", { "otherPromise": true }, arguments); };
    HMSAvailability.prototype.isHuaweiMobileNoticeAvailable = function () { return cordova(this, "isHuaweiMobileNoticeAvailable", { "otherPromise": true }, arguments); };
    HMSAvailability.prototype.getApiMap = function () { return cordova(this, "getApiMap", { "otherPromise": true }, arguments); };
    HMSAvailability.prototype.getServicesVersionCode = function () { return cordova(this, "getServicesVersionCode", { "otherPromise": true }, arguments); };
    HMSAvailability.prototype.setServicesVersionCode = function (servicesVersionCode) { return cordova(this, "setServicesVersionCode", { "otherPromise": true }, arguments); };
    HMSAvailability.prototype.isUserResolvableError = function (errorCode) { return cordova(this, "isUserResolvableError", { "otherPromise": true }, arguments); };
    HMSAvailability.prototype.getErrorString = function (errorCode) { return cordova(this, "getErrorString", { "otherPromise": true }, arguments); };
    HMSAvailability.prototype.resolveError = function (errorCode, requestCode) { return cordova(this, "resolveError", { "otherPromise": true }, arguments); };
    HMSAvailability.prototype.showErrorDialogFragment = function (errorCode, requestCode, cancelListener) { return cordova(this, "showErrorDialogFragment", { "otherPromise": true }, arguments); };
    HMSAvailability.prototype.showErrorNotification = function (errorCode) { return cordova(this, "showErrorNotification", { "otherPromise": true }, arguments); };
    HMSAvailability.pluginName = "HMSAvailability";
    HMSAvailability.plugin = "cordova-plugin-hms-availability";
    HMSAvailability.pluginRef = "HMSAvailability";
    HMSAvailability.repo = "";
    HMSAvailability.platforms = ["Android", "iOS"];
    HMSAvailability.decorators = [
        { type: Injectable }
    ];
    return HMSAvailability;
}(IonicNativePlugin));
export { HMSAvailability };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7O0FBRUYsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLDhCQUFvQyxNQUFNLG9CQUFvQixDQUFDOztJQVVqQyxtQ0FBaUI7Ozs7SUFNbEQseURBQStCLGFBQUMsYUFBc0I7SUFLdEQsdURBQTZCO0lBSzdCLG1DQUFTO0lBS1QsZ0RBQXNCO0lBS3RCLGdEQUFzQixhQUFDLG1CQUEyQjtJQUtsRCwrQ0FBcUIsYUFBQyxTQUFpQjtJQUt2Qyx3Q0FBYyxhQUFDLFNBQWlCO0lBS2hDLHNDQUFZLGFBQUMsU0FBaUIsRUFBRSxXQUFtQjtJQUtuRCxpREFBdUIsYUFBQyxTQUFpQixFQUFFLFdBQW1CLEVBQUUsY0FBMkI7SUFLM0YsK0NBQXFCLGFBQUMsU0FBaUI7Ozs7Ozs7Z0JBcEQxQyxVQUFVOzswQkExQlg7RUEyQnFDLGlCQUFpQjtTQUF6QyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBDb3B5cmlnaHQgMjAyMC0yMDIzLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxuICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW59IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6ICdITVNBdmFpbGFiaWxpdHknLFxuICAgIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hdmFpbGFiaWxpdHknLFxuICAgIHBsdWdpblJlZjogJ0hNU0F2YWlsYWJpbGl0eScsXG4gICAgcmVwbzogJycsXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU0F2YWlsYWJpbGl0eSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgICAvKipcbiAgICAgKiBDaGVja3Mgd2hldGhlciBITVMgQ29yZSBpcyBpbnN0YWxsZWQuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxudW1iZXI+fVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxuICAgIGlzSHVhd2VpTW9iaWxlU2VydmljZXNBdmFpbGFibGUobWluQXBrVmVyc2lvbj86IG51bWJlcik6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7b3RoZXJQcm9taXNlOiB0cnVlfSlcbiAgICBpc0h1YXdlaU1vYmlsZU5vdGljZUF2YWlsYWJsZSgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXG4gICAgZ2V0QXBpTWFwKCk6IFByb21pc2U8QXBpTWFwPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7b3RoZXJQcm9taXNlOiB0cnVlfSlcbiAgICBnZXRTZXJ2aWNlc1ZlcnNpb25Db2RlKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7b3RoZXJQcm9taXNlOiB0cnVlfSlcbiAgICBzZXRTZXJ2aWNlc1ZlcnNpb25Db2RlKHNlcnZpY2VzVmVyc2lvbkNvZGU6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXG4gICAgaXNVc2VyUmVzb2x2YWJsZUVycm9yKGVycm9yQ29kZTogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7b3RoZXJQcm9taXNlOiB0cnVlfSlcbiAgICBnZXRFcnJvclN0cmluZyhlcnJvckNvZGU6IG51bWJlcik6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7b3RoZXJQcm9taXNlOiB0cnVlfSlcbiAgICByZXNvbHZlRXJyb3IoZXJyb3JDb2RlOiBudW1iZXIsIHJlcXVlc3RDb2RlOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxuICAgIHNob3dFcnJvckRpYWxvZ0ZyYWdtZW50KGVycm9yQ29kZTogbnVtYmVyLCByZXF1ZXN0Q29kZTogbnVtYmVyLCBjYW5jZWxMaXN0ZW5lcj86ICgpID0+IHZvaWQpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxuICAgIHNob3dFcnJvck5vdGlmaWNhdGlvbihlcnJvckNvZGU6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwaU1hcCB7XG4gICAgJ0h1YXdlaUlhcC5BUEknOiBudW1iZXIsXG4gICAgJ0h1YXdlaUlELkFQSSc6IG51bWJlcixcbiAgICAnSHVhd2VpR2FtZS5BUEknOiBudW1iZXIsXG4gICAgJ0h1YXdlaVBheS5BUEknOiBudW1iZXIsXG4gICAgJ0h1YXdlaVNucy5BUEknOiBudW1iZXIsXG4gICAgJ0h1YXdlaU9wZW5EZXZpY2UuQVBJJzogbnVtYmVyLFxuICAgICdIdWF3ZWlQUFNraXQuQVBJJzogbnVtYmVyLFxuICAgICdIdWF3ZWlQdXNoLkFQSSc6IG51bWJlclxufVxuIl19