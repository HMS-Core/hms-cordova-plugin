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
export var HMSAppsCheckConstants;
(function (HMSAppsCheckConstants) {
    HMSAppsCheckConstants[HMSAppsCheckConstants["HMS_VIRUS_LEVEL_RISK"] = 1] = "HMS_VIRUS_LEVEL_RISK";
    HMSAppsCheckConstants[HMSAppsCheckConstants["HMS_VIRUS_LEVEL_VIRUS"] = 2] = "HMS_VIRUS_LEVEL_VIRUS";
})(HMSAppsCheckConstants || (HMSAppsCheckConstants = {}));
export var HMSUrlCheckThreatConstants;
(function (HMSUrlCheckThreatConstants) {
    HMSUrlCheckThreatConstants[HMSUrlCheckThreatConstants["HMS_MALWARE"] = 1] = "HMS_MALWARE";
    HMSUrlCheckThreatConstants[HMSUrlCheckThreatConstants["HMS_PHISHING"] = 3] = "HMS_PHISHING";
})(HMSUrlCheckThreatConstants || (HMSUrlCheckThreatConstants = {}));
export var HMSWifiDetectResponse;
(function (HMSWifiDetectResponse) {
    HMSWifiDetectResponse[HMSWifiDetectResponse["HMS_NO_WIFI"] = 0] = "HMS_NO_WIFI";
    HMSWifiDetectResponse[HMSWifiDetectResponse["HMS_SECURE_WIFI"] = 1] = "HMS_SECURE_WIFI";
    HMSWifiDetectResponse[HMSWifiDetectResponse["HMS_INSECURE_WIFI"] = 2] = "HMS_INSECURE_WIFI";
})(HMSWifiDetectResponse || (HMSWifiDetectResponse = {}));
var HMSSafetyDetect = /** @class */ (function (_super) {
    __extends(HMSSafetyDetect, _super);
    function HMSSafetyDetect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSSafetyDetect.prototype.enableAppsCheck = function () { return cordova(this, "enableAppsCheck", { "otherPromise": true }, arguments); };
    HMSSafetyDetect.prototype.isVerifyAppsCheck = function () { return cordova(this, "isVerifyAppsCheck", { "otherPromise": true }, arguments); };
    HMSSafetyDetect.prototype.getMaliciousAppsList = function () { return cordova(this, "getMaliciousAppsList", { "otherPromise": true }, arguments); };
    HMSSafetyDetect.prototype.sysIntegrity = function (nonce, appId) { return cordova(this, "sysIntegrity", { "otherPromise": true }, arguments); };
    HMSSafetyDetect.prototype.sysIntegrityWithRequest = function (nonce, appId, alg) { return cordova(this, "sysIntegrityWithRequest", { "otherPromise": true }, arguments); };
    HMSSafetyDetect.prototype.initUrlCheck = function () { return cordova(this, "initUrlCheck", { "otherPromise": true }, arguments); };
    HMSSafetyDetect.prototype.urlCheck = function (url, appId, urlCheckThreats) { return cordova(this, "urlCheck", { "otherPromise": true }, arguments); };
    HMSSafetyDetect.prototype.shutdownUrlCheck = function () { return cordova(this, "shutdownUrlCheck", { "otherPromise": true }, arguments); };
    HMSSafetyDetect.prototype.initUserDetect = function () { return cordova(this, "initUserDetect", { "otherPromise": true }, arguments); };
    HMSSafetyDetect.prototype.userDetection = function (appId) { return cordova(this, "userDetection", { "otherPromise": true }, arguments); };
    HMSSafetyDetect.prototype.shutdownUserDetect = function () { return cordova(this, "shutdownUserDetect", { "otherPromise": true }, arguments); };
    HMSSafetyDetect.prototype.initAntiFraud = function (appId) { return cordova(this, "initAntiFraud", { "otherPromise": true }, arguments); };
    HMSSafetyDetect.prototype.getRiskToken = function () { return cordova(this, "getRiskToken", { "otherPromise": true }, arguments); };
    HMSSafetyDetect.prototype.releaseAntiFraud = function () { return cordova(this, "releaseAntiFraud", { "otherPromise": true }, arguments); };
    HMSSafetyDetect.prototype.getWifiDetectStatus = function () { return cordova(this, "getWifiDetectStatus", { "otherPromise": true }, arguments); };
    HMSSafetyDetect.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSSafetyDetect.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HMSSafetyDetect.pluginName = "HMSSafetyDetect";
    HMSSafetyDetect.plugin = "cordova-plugin-hms-safetydetect";
    HMSSafetyDetect.pluginRef = "HMSSafetyDetect";
    HMSSafetyDetect.platforms = ["Android"];
    HMSSafetyDetect = __decorate([
        Injectable()
    ], HMSSafetyDetect);
    return HMSSafetyDetect;
}(IonicNativePlugin));
export { HMSSafetyDetect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1zYWZldHlkZXRlY3Qvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztFQWNFOztBQUVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RSxNQUFNLENBQU4sSUFBWSxxQkFHWDtBQUhELFdBQVkscUJBQXFCO0lBQy9CLGlHQUF3QixDQUFBO0lBQ3hCLG1HQUF5QixDQUFBO0FBQzNCLENBQUMsRUFIVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBR2hDO0FBRUQsTUFBTSxDQUFOLElBQVksMEJBR1g7QUFIRCxXQUFZLDBCQUEwQjtJQUNwQyx5RkFBZSxDQUFBO0lBQ2YsMkZBQWdCLENBQUE7QUFDbEIsQ0FBQyxFQUhXLDBCQUEwQixLQUExQiwwQkFBMEIsUUFHckM7QUFFRCxNQUFNLENBQU4sSUFBWSxxQkFJWDtBQUpELFdBQVkscUJBQXFCO0lBQy9CLCtFQUFlLENBQUE7SUFDZix1RkFBbUIsQ0FBQTtJQUNuQiwyRkFBcUIsQ0FBQTtBQUN2QixDQUFDLEVBSlcscUJBQXFCLEtBQXJCLHFCQUFxQixRQUloQzs7SUF1Qm9DLG1DQUFpQjs7OztJQUlwRCx5Q0FBZTtJQUtmLDJDQUFpQjtJQUtqQiw4Q0FBb0I7SUFNcEIsc0NBQVksYUFBQyxLQUFhLEVBQUUsS0FBYTtJQUt6QyxpREFBdUIsYUFBQyxLQUFhLEVBQUUsS0FBYSxFQUFFLEdBQVc7SUFNakUsc0NBQVk7SUFLWixrQ0FBUSxhQUFDLEdBQVcsRUFBRSxLQUFhLEVBQUUsZUFBNkM7SUFLbEYsMENBQWdCO0lBTWhCLHdDQUFjO0lBS2QsdUNBQWEsYUFBQyxLQUFhO0lBSzNCLDRDQUFrQjtJQUtsQix1Q0FBYSxhQUFDLEtBQWE7SUFLM0Isc0NBQVk7SUFLWiwwQ0FBZ0I7SUFNaEIsNkNBQW1CO0lBTW5CLHVDQUFhO0lBS2Isc0NBQVk7Ozs7O0lBekZELGVBQWU7UUFEM0IsVUFBVSxFQUFFO09BQ0EsZUFBZTswQkF4RDVCO0VBd0RxQyxpQkFBaUI7U0FBekMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgICBDb3B5cmlnaHQgMjAyMC0yMDIxLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5cclxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcclxuICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG5cclxuICAgICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAgICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5leHBvcnQgZW51bSBITVNBcHBzQ2hlY2tDb25zdGFudHMge1xyXG4gIEhNU19WSVJVU19MRVZFTF9SSVNLID0gMSxcclxuICBITVNfVklSVVNfTEVWRUxfVklSVVMgPSAyXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEhNU1VybENoZWNrVGhyZWF0Q29uc3RhbnRzIHtcclxuICBITVNfTUFMV0FSRSA9IDEsXHJcbiAgSE1TX1BISVNISU5HID0gM1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBITVNXaWZpRGV0ZWN0UmVzcG9uc2Uge1xyXG4gIEhNU19OT19XSUZJID0gMCxcclxuICBITVNfU0VDVVJFX1dJRkkgPSAxLFxyXG4gIEhNU19JTlNFQ1VSRV9XSUZJID0gMlxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFZlcmlmeUFwcHNDaGVja1Jlc3VsdCB7XHJcbiAgdmVyaWZ5QXBwc0NoZWNrOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVuYWJsZUFwcHNDaGVja1Jlc3VsdCB7XHJcbiAgZW5hYmxlQXBwc0NoZWNrOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhNU01hbGljaW91c0FwcHNEYXRhIHtcclxuICBhcGtQYWNrYWdlTmFtZTogc3RyaW5nO1xyXG4gIGFwa0NhdGVnb3J5OiBITVNBcHBzQ2hlY2tDb25zdGFudHM7XHJcbiAgYXBrU2hhMjU2OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNTYWZldHlEZXRlY3QnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1zYWZldHlkZXRlY3QnLFxyXG4gIHBsdWdpblJlZjogJ0hNU1NhZmV0eURldGVjdCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNTYWZldHlEZXRlY3QgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcblxyXG4gIC8vIEFwcHMgQ2hlY2tcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGVuYWJsZUFwcHNDaGVjaygpOiBQcm9taXNlPEVuYWJsZUFwcHNDaGVja1Jlc3VsdD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBpc1ZlcmlmeUFwcHNDaGVjaygpOiBQcm9taXNlPFZlcmlmeUFwcHNDaGVja1Jlc3VsdD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBnZXRNYWxpY2lvdXNBcHBzTGlzdCgpOiBQcm9taXNlPEhNU01hbGljaW91c0FwcHNEYXRhW10+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIFN5cyBJbnRlZ3JpdHlcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHN5c0ludGVncml0eShub25jZTogc3RyaW5nLCBhcHBJZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc3lzSW50ZWdyaXR5V2l0aFJlcXVlc3Qobm9uY2U6IHN0cmluZywgYXBwSWQ6IHN0cmluZywgYWxnOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gVXJsIENoZWNrXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBpbml0VXJsQ2hlY2soKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHVybENoZWNrKHVybDogc3RyaW5nLCBhcHBJZDogc3RyaW5nLCB1cmxDaGVja1RocmVhdHM6IEhNU1VybENoZWNrVGhyZWF0Q29uc3RhbnRzW10pOiBQcm9taXNlPEhNU1VybENoZWNrVGhyZWF0Q29uc3RhbnRzW10+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2h1dGRvd25VcmxDaGVjaygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIFVzZXIgRGV0ZWN0IFxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgaW5pdFVzZXJEZXRlY3QoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHVzZXJEZXRlY3Rpb24oYXBwSWQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNodXRkb3duVXNlckRldGVjdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgaW5pdEFudGlGcmF1ZChhcHBJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldFJpc2tUb2tlbigpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICByZWxlYXNlQW50aUZyYXVkKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gV2lmaSBEZXRlY3RcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldFdpZmlEZXRlY3RTdGF0dXMoKTogUHJvbWlzZTxITVNXaWZpRGV0ZWN0UmVzcG9uc2U+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIEhNUyBMb2dnZXJcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGRpc2FibGVMb2dnZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGVuYWJsZUxvZ2dlcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn0iXX0=