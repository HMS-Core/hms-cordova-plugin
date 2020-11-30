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
import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
// Constants
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1zYWZldHktZGV0ZWN0L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7RUFjRTs7QUFFRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQTBGLE1BQU0sb0JBQW9CLENBQUM7QUFJNUgsWUFBWTtBQUVaLE1BQU0sQ0FBTixJQUFZLHFCQUdYO0FBSEQsV0FBWSxxQkFBcUI7SUFDL0IsaUdBQXdCLENBQUE7SUFDeEIsbUdBQXlCLENBQUE7QUFDM0IsQ0FBQyxFQUhXLHFCQUFxQixLQUFyQixxQkFBcUIsUUFHaEM7QUFDRCxNQUFNLENBQU4sSUFBWSwwQkFHWDtBQUhELFdBQVksMEJBQTBCO0lBQ3BDLHlGQUFlLENBQUE7SUFDZiwyRkFBZ0IsQ0FBQTtBQUNsQixDQUFDLEVBSFcsMEJBQTBCLEtBQTFCLDBCQUEwQixRQUdyQztBQUVELE1BQU0sQ0FBTixJQUFZLHFCQUlYO0FBSkQsV0FBWSxxQkFBcUI7SUFDL0IsK0VBQWUsQ0FBQTtJQUNmLHVGQUFtQixDQUFBO0lBQ25CLDJGQUFxQixDQUFBO0FBQ3ZCLENBQUMsRUFKVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBSWhDOztJQXNCb0MsbUNBQWlCOzs7O0lBSXBELHlDQUFlO0lBS2YsMkNBQWlCO0lBS2pCLDhDQUFvQjtJQU1wQixzQ0FBWSxhQUFDLEtBQWEsRUFBRSxLQUFhO0lBTXpDLHNDQUFZO0lBS1osa0NBQVEsYUFBQyxHQUFXLEVBQUUsS0FBYSxFQUFFLGVBQTZDO0lBS2xGLDBDQUFnQjtJQU1oQix3Q0FBYztJQUtkLHVDQUFhLGFBQUMsS0FBYTtJQUszQiw0Q0FBa0I7SUFLbEIsdUNBQWEsYUFBQyxLQUFhO0lBSzNCLHNDQUFZO0lBS1osMENBQWdCO0lBTWhCLDZDQUFtQjtJQU1uQix1Q0FBYTtJQUtiLHNDQUFZOzs7OztJQXBGRCxlQUFlO1FBRDNCLFVBQVUsRUFBRTtPQUNBLGVBQWU7MEJBMUQ1QjtFQTBEcUMsaUJBQWlCO1NBQXpDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgQ29weXJpZ2h0IDIwMjAuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxyXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcblxyXG4vLyBDb25zdGFudHNcclxuXHJcbmV4cG9ydCBlbnVtIEhNU0FwcHNDaGVja0NvbnN0YW50cyB7XHJcbiAgSE1TX1ZJUlVTX0xFVkVMX1JJU0sgPSAxLFxyXG4gIEhNU19WSVJVU19MRVZFTF9WSVJVUyA9IDJcclxufVxyXG5leHBvcnQgZW51bSBITVNVcmxDaGVja1RocmVhdENvbnN0YW50cyB7XHJcbiAgSE1TX01BTFdBUkUgPSAxLFxyXG4gIEhNU19QSElTSElORyA9IDNcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSE1TV2lmaURldGVjdFJlc3BvbnNlIHtcclxuICBITVNfTk9fV0lGSSA9IDAsXHJcbiAgSE1TX1NFQ1VSRV9XSUZJID0gMSxcclxuICBITVNfSU5TRUNVUkVfV0lGSSA9IDJcclxufVxyXG4vLyBEYXRhIFR5cGVzXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFZlcmlmeUFwcHNDaGVja1Jlc3VsdCB7XHJcbiAgdmVyaWZ5QXBwc0NoZWNrOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRW5hYmxlQXBwc0NoZWNrUmVzdWx0IHtcclxuICBlbmFibGVBcHBzQ2hlY2s6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBITVNNYWxpY2lvdXNBcHBzRGF0YSB7XHJcbiAgYXBrUGFja2FnZU5hbWU6IHN0cmluZztcclxuICBhcGtDYXRlZ29yeTogSE1TQXBwc0NoZWNrQ29uc3RhbnRzO1xyXG4gIGFwa1NoYTI1Njogc3RyaW5nO1xyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSE1TU2FmZXR5RGV0ZWN0JyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtc2FmZXR5ZGV0ZWN0JyxcclxuICBwbHVnaW5SZWY6ICdITVNTYWZldHlEZXRlY3QnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TU2FmZXR5RGV0ZWN0IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG5cclxuICAvLyBBcHBzIENoZWNrXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBlbmFibGVBcHBzQ2hlY2soKTogUHJvbWlzZTxFbmFibGVBcHBzQ2hlY2tSZXN1bHQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgaXNWZXJpZnlBcHBzQ2hlY2soKTogUHJvbWlzZTxWZXJpZnlBcHBzQ2hlY2tSZXN1bHQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0TWFsaWNpb3VzQXBwc0xpc3QoKTogUHJvbWlzZTxITVNNYWxpY2lvdXNBcHBzRGF0YVtdPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBTeXMgSW50ZWdyaXR5XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzeXNJbnRlZ3JpdHkobm9uY2U6IHN0cmluZywgYXBwSWQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBVcmwgQ2hlY2tcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGluaXRVcmxDaGVjaygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgdXJsQ2hlY2sodXJsOiBzdHJpbmcsIGFwcElkOiBzdHJpbmcsIHVybENoZWNrVGhyZWF0czogSE1TVXJsQ2hlY2tUaHJlYXRDb25zdGFudHNbXSk6IFByb21pc2U8SE1TVXJsQ2hlY2tUaHJlYXRDb25zdGFudHNbXT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzaHV0ZG93blVybENoZWNrKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gVXNlciBEZXRlY3QgXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBpbml0VXNlckRldGVjdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgdXNlckRldGVjdGlvbihhcHBJZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2h1dGRvd25Vc2VyRGV0ZWN0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGluaXRBbnRpRnJhdWQoYXBwSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldFJpc2tUb2tlbigpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHJlbGVhc2VBbnRpRnJhdWQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBXaWZpIERldGVjdFxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0V2lmaURldGVjdFN0YXR1cygpOiBQcm9taXNlPEhNU1dpZmlEZXRlY3RSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gSE1TIExvZ2dlclxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufSJdfQ==