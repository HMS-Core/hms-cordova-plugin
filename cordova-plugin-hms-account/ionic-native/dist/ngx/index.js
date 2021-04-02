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
export var AuthScopeList;
(function (AuthScopeList) {
    AuthScopeList["GAME"] = "https://www.huawei.com/auth/games";
    AuthScopeList["OPENID"] = "openid";
    AuthScopeList["EMAIL"] = "email";
    AuthScopeList["PROFILE"] = "profile";
})(AuthScopeList || (AuthScopeList = {}));
export var Gender;
(function (Gender) {
    Gender[Gender["UNKNOWN"] = -1] = "UNKNOWN";
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["CONFIDENTIAL"] = 2] = "CONFIDENTIAL";
})(Gender || (Gender = {}));
export var AuthRequestOption;
(function (AuthRequestOption) {
    AuthRequestOption["SCOPE_ID_TOKEN"] = "idToken";
    AuthRequestOption["SCOPE_ACCESS_TOKEN"] = "accessToken";
    AuthRequestOption["SCOPE_MOBILE_NUMBER"] = "mobileNumber";
    AuthRequestOption["SCOPE_EMAIL"] = "email";
    AuthRequestOption["SCOPE_SHIPPING_ADDRESS"] = "shippingAddress";
    AuthRequestOption["SCOPE_UID"] = "uid";
    AuthRequestOption["SCOPE_ID"] = "id";
    AuthRequestOption["SCOPE_AUTHORIZATION_CODE"] = "authorizationCode";
    AuthRequestOption["SCOPE_PROFILE"] = "profile";
})(AuthRequestOption || (AuthRequestOption = {}));
export var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes["HuaweiIdAuthException"] = "503";
})(ErrorCodes || (ErrorCodes = {}));
export var HuaweiIdAuthParams;
(function (HuaweiIdAuthParams) {
    HuaweiIdAuthParams["DEFAULT_AUTH_REQUEST_PARAM"] = "DEFAULT_AUTH_REQUEST_PARAM";
    HuaweiIdAuthParams["DEFAULT_AUTH_REQUEST_PARAM_GAME"] = "DEFAULT_AUTH_REQUEST_PARAM_GAME";
})(HuaweiIdAuthParams || (HuaweiIdAuthParams = {}));
var HMSAccount = /** @class */ (function (_super) {
    __extends(HMSAccount, _super);

    function HMSAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSAccount.prototype.signIn = function (signInData) { return cordova(this, "signIn", { "otherPromise": true }, arguments); };
    HMSAccount.prototype.signOut = function () { return cordova(this, "signOut", { "otherPromise": true }, arguments); };
    HMSAccount.prototype.cancelAuthorization = function () { return cordova(this, "cancelAuthorization", { "otherPromise": true }, arguments); };
    HMSAccount.prototype.silentSignIn = function (authParams) { return cordova(this, "silentSignIn", { "otherPromise": true }, arguments); };
    HMSAccount.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HMSAccount.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSAccount.pluginName = "HMSAccount";
    HMSAccount.plugin = "cordova-plugin-hms-account";
    HMSAccount.pluginRef = "HMSAccount";
    HMSAccount.platforms = ["Android"];
    HMSAccount = __decorate([
        Injectable()
    ], HMSAccount);
    return HMSAccount;
}(IonicNativePlugin));
export { HMSAccount };
export var Theme;
(function (Theme) {
    Theme[Theme["THEME_NO_TITLE"] = 0] = "THEME_NO_TITLE";
    Theme[Theme["THEME_FULL_TITLE"] = 1] = "THEME_FULL_TITLE";
})(Theme || (Theme = {}));
export var ColorPolicy;
(function (ColorPolicy) {
    ColorPolicy[ColorPolicy["COLOR_POLICY_BLUE"] = 0] = "COLOR_POLICY_BLUE";
    ColorPolicy[ColorPolicy["COLOR_POLICY_RED"] = 1] = "COLOR_POLICY_RED";
    ColorPolicy[ColorPolicy["COLOR_POLICY_WHITE"] = 2] = "COLOR_POLICY_WHITE";
    ColorPolicy[ColorPolicy["COLOR_POLICY_WHITE_WITH_BORDER"] = 3] = "COLOR_POLICY_WHITE_WITH_BORDER";
    ColorPolicy[ColorPolicy["COLOR_POLICY_BLACK"] = 4] = "COLOR_POLICY_BLACK";
    ColorPolicy[ColorPolicy["COLOR_POLICY_GRAY"] = 5] = "COLOR_POLICY_GRAY";
})(ColorPolicy || (ColorPolicy = {}));
export var CornerRadius;
(function (CornerRadius) {
    CornerRadius[CornerRadius["CORNER_RADIUS_LARGE"] = -1] = "CORNER_RADIUS_LARGE";
    CornerRadius[CornerRadius["CORNER_RADIUS_MEDIUM"] = -2] = "CORNER_RADIUS_MEDIUM";
    CornerRadius[CornerRadius["CORNER_RADIUS_SMALL"] = -3] = "CORNER_RADIUS_SMALL";
})(CornerRadius || (CornerRadius = {}));
var HMSHuaweiIdAuthButton = /** @class */ (function (_super) {
    __extends(HMSHuaweiIdAuthButton, _super);

    function HMSHuaweiIdAuthButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSHuaweiIdAuthButton.prototype.getHuaweiIdAuthButton = function (edittedButton, theme, colorPolicy, cornerRadius) { return cordova(this, "getHuaweiIdAuthButton", {}, arguments); };
    HMSHuaweiIdAuthButton.pluginName = "HMSHuaweiIdAuthButton";
    HMSHuaweiIdAuthButton.plugin = "cordova-plugin-hms-account";
    HMSHuaweiIdAuthButton.pluginRef = "HMSHuaweiIdAuthButton";
    HMSHuaweiIdAuthButton.platforms = ["Android"];
    HMSHuaweiIdAuthButton = __decorate([
        Injectable()
    ], HMSHuaweiIdAuthButton);
    return HMSHuaweiIdAuthButton;
}(IonicNativePlugin));
export { HMSHuaweiIdAuthButton };
var HMSHuaweiIdAuthManager = /** @class */ (function (_super) {
    __extends(HMSHuaweiIdAuthManager, _super);

    function HMSHuaweiIdAuthManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSHuaweiIdAuthManager.prototype.getAuthResult = function () { return cordova(this, "getAuthResult", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthManager.prototype.getAuthResultWithScope = function (authHuaweiId) { return cordova(this, "getAuthResultWithScope", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthManager.prototype.containScopes = function (authHuaweiId, authScopeList) { return cordova(this, "containScopes", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthManager.prototype.addAuthScopes = function (requestCode, authScopeList) { return cordova(this, "addAuthScopes", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthManager.pluginName = "HMSHuaweiIdAuthManager";
    HMSHuaweiIdAuthManager.plugin = "cordova-plugin-hms-account";
    HMSHuaweiIdAuthManager.pluginRef = "HMSHuaweiIdAuthManager";
    HMSHuaweiIdAuthManager.platforms = ["Android"];
    HMSHuaweiIdAuthManager = __decorate([
        Injectable()
    ], HMSHuaweiIdAuthManager);
    return HMSHuaweiIdAuthManager;
}(IonicNativePlugin));
export { HMSHuaweiIdAuthManager };
var HMSHuaweiIdAuthTool = /** @class */ (function (_super) {
    __extends(HMSHuaweiIdAuthTool, _super);

    function HMSHuaweiIdAuthTool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSHuaweiIdAuthTool.prototype.deleteAuthInfo = function (accessToken) { return cordova(this, "deleteAuthInfo", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthTool.prototype.requestUnionId = function (huaweiAccountName) { return cordova(this, "requestUnionId", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthTool.prototype.requestAccessToken = function (account, authScopeList) { return cordova(this, "requestAccessToken", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthTool.pluginName = "HMSHuaweiIdAuthTool";
    HMSHuaweiIdAuthTool.plugin = "cordova-plugin-hms-account";
    HMSHuaweiIdAuthTool.pluginRef = "HMSHuaweiIdAuthTool";
    HMSHuaweiIdAuthTool.platforms = ["Android"];
    HMSHuaweiIdAuthTool = __decorate([
        Injectable()
    ], HMSHuaweiIdAuthTool);
    return HMSHuaweiIdAuthTool;
}(IonicNativePlugin));
export { HMSHuaweiIdAuthTool };
var HMSNetworkTool = /** @class */ (function (_super) {
    __extends(HMSNetworkTool, _super);

    function HMSNetworkTool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSNetworkTool.prototype.buildNetworkURL = function (domainHttps) { return cordova(this, "buildNetworkURL", { "otherPromise": true }, arguments); };
    HMSNetworkTool.prototype.buildNetworkCookie = function (cookie) { return cordova(this, "buildNetworkCookie", { "otherPromise": true }, arguments); };
    HMSNetworkTool.pluginName = "HMSNetworkTool";
    HMSNetworkTool.plugin = "cordova-plugin-hms-account";
    HMSNetworkTool.pluginRef = "HMSNetworkTool";
    HMSNetworkTool.platforms = ["Android"];
    HMSNetworkTool = __decorate([
        Injectable()
    ], HMSNetworkTool);
    return HMSNetworkTool;
}(IonicNativePlugin));
export { HMSNetworkTool };
var HMSReadSMSManager = /** @class */ (function (_super) {
    __extends(HMSReadSMSManager, _super);

    function HMSReadSMSManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSReadSMSManager.prototype.smsVerificationCode = function () { return cordova(this, "smsVerificationCode", { "otherPromise": true }, arguments); };
    HMSReadSMSManager.prototype.obtainHashCode = function () { return cordova(this, "obtainHashCode", { "otherPromise": true }, arguments); };
    HMSReadSMSManager.pluginName = "HMSReadSMSManager";
    HMSReadSMSManager.plugin = "cordova-plugin-hms-account";
    HMSReadSMSManager.pluginRef = "HMSReadSMSManager";
    HMSReadSMSManager.platforms = ["Android"];
    HMSReadSMSManager = __decorate([
        Injectable()
    ], HMSReadSMSManager);
    return HMSReadSMSManager;
}(IonicNativePlugin));
export { HMSReadSMSManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1yZW1vdGUtY29uZmlnL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7RUFjRTs7QUFFRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQTBGLE1BQU0sb0JBQW9CLENBQUM7QUFHNUgsTUFBTSxDQUFOLElBQVksYUFLWDtBQUxELFdBQVksYUFBYTtJQUN2QiwyREFBMEMsQ0FBQTtJQUMxQyxrQ0FBaUIsQ0FBQTtJQUNqQixnQ0FBZSxDQUFBO0lBQ2Ysb0NBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUxXLGFBQWEsS0FBYixhQUFhLFFBS3hCO0FBQ0QsTUFBTSxDQUFOLElBQVksTUFLWDtBQUxELFdBQVksTUFBTTtJQUNoQiwwQ0FBWSxDQUFBO0lBQ1osbUNBQVEsQ0FBQTtJQUNSLHVDQUFVLENBQUE7SUFDVixtREFBZ0IsQ0FBQTtBQUNsQixDQUFDLEVBTFcsTUFBTSxLQUFOLE1BQU0sUUFLakI7QUF5REQsTUFBTSxDQUFOLElBQVksaUJBVVg7QUFWRCxXQUFZLGlCQUFpQjtJQUMzQiwrQ0FBMEIsQ0FBQTtJQUMxQix1REFBa0MsQ0FBQTtJQUNsQyx5REFBb0MsQ0FBQTtJQUNwQywwQ0FBcUIsQ0FBQTtJQUNyQiwrREFBMEMsQ0FBQTtJQUMxQyxzQ0FBaUIsQ0FBQTtJQUNqQixvQ0FBZSxDQUFBO0lBQ2YsbUVBQThDLENBQUE7SUFDOUMsOENBQXlCLENBQUE7QUFDM0IsQ0FBQyxFQVZXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFVNUI7QUFFRCxNQUFNLENBQU4sSUFBWSxVQUVYO0FBRkQsV0FBWSxVQUFVO0lBQ3BCLDJDQUE2QixDQUFBO0FBQy9CLENBQUMsRUFGVyxVQUFVLEtBQVYsVUFBVSxRQUVyQjtBQUVELE1BQU0sQ0FBTixJQUFZLGtCQUdYO0FBSEQsV0FBWSxrQkFBa0I7SUFDNUIsK0VBQXlELENBQUE7SUFDekQseUZBQW1FLENBQUE7QUFDckUsQ0FBQyxFQUhXLGtCQUFrQixLQUFsQixrQkFBa0IsUUFHN0I7O0lBZStCLDhCQUFpQjs7OztJQUUvQywyQkFBTSxhQUFDLFVBQXNCO0lBSzdCLDRCQUFPO0lBS1Asd0NBQW1CO0lBS25CLGlDQUFZLGFBQUMsVUFBOEI7SUFLM0MsaUNBQVk7SUFLWixrQ0FBYTs7Ozs7SUEzQkYsVUFBVTtRQUR0QixVQUFVLEVBQUU7T0FDQSxVQUFVO3FCQTFIdkI7RUEwSGdDLGlCQUFpQjtTQUFwQyxVQUFVO0FBaUN2QixNQUFNLENBQU4sSUFBWSxLQUdYO0FBSEQsV0FBWSxLQUFLO0lBQ2YscURBQWtCLENBQUE7SUFDbEIseURBQW9CLENBQUE7QUFDdEIsQ0FBQyxFQUhXLEtBQUssS0FBTCxLQUFLLFFBR2hCO0FBQ0QsTUFBTSxDQUFOLElBQVksV0FPWDtBQVBELFdBQVksV0FBVztJQUNyQix1RUFBcUIsQ0FBQTtJQUNyQixxRUFBb0IsQ0FBQTtJQUNwQix5RUFBc0IsQ0FBQTtJQUN0QixpR0FBa0MsQ0FBQTtJQUNsQyx5RUFBc0IsQ0FBQTtJQUN0Qix1RUFBcUIsQ0FBQTtBQUN2QixDQUFDLEVBUFcsV0FBVyxLQUFYLFdBQVcsUUFPdEI7QUFDRCxNQUFNLENBQU4sSUFBWSxZQUlYO0FBSkQsV0FBWSxZQUFZO0lBQ3RCLDhFQUF3QixDQUFBO0lBQ3hCLGdGQUF5QixDQUFBO0lBQ3pCLDhFQUF3QixDQUFBO0FBQzFCLENBQUMsRUFKVyxZQUFZLEtBQVosWUFBWSxRQUl2Qjs7SUFTMEMseUNBQWlCOzs7O0lBRTFELHFEQUFxQixhQUFDLGFBQXFCLEVBQUUsS0FBWSxFQUFFLFdBQXdCLEVBQUUsWUFBMEI7Ozs7O0lBRnBHLHFCQUFxQjtRQURqQyxVQUFVLEVBQUU7T0FDQSxxQkFBcUI7Z0NBcExsQztFQW9MMkMsaUJBQWlCO1NBQS9DLHFCQUFxQjs7SUFjVSwwQ0FBaUI7Ozs7SUFFM0QsOENBQWE7SUFLYix1REFBc0IsYUFBQyxZQUE2QjtJQUtwRCw4Q0FBYSxhQUFDLFlBQWlDLEVBQUUsYUFBOEI7SUFLL0UsOENBQWEsYUFBQyxXQUFtQixFQUFFLGFBQThCOzs7OztJQWpCdEQsc0JBQXNCO1FBRGxDLFVBQVUsRUFBRTtPQUNBLHNCQUFzQjtpQ0FsTW5DO0VBa000QyxpQkFBaUI7U0FBaEQsc0JBQXNCOztJQTZCTSx1Q0FBaUI7Ozs7SUFFeEQsNENBQWMsYUFBQyxXQUFtQjtJQUtsQyw0Q0FBYyxhQUFDLGlCQUF5QjtJQUt4QyxnREFBa0IsYUFBQyxPQUFnQixFQUFFLGFBQThCOzs7OztJQVp4RCxtQkFBbUI7UUFEL0IsVUFBVSxFQUFFO09BQ0EsbUJBQW1COzhCQS9OaEM7RUErTnlDLGlCQUFpQjtTQUE3QyxtQkFBbUI7O0lBd0JJLGtDQUFpQjs7OztJQUVuRCx3Q0FBZSxhQUFDLFdBQXVCO0lBS3ZDLDJDQUFrQixhQUFDLE1BQWM7Ozs7O0lBUHRCLGNBQWM7UUFEMUIsVUFBVSxFQUFFO09BQ0EsY0FBYzt5QkF2UDNCO0VBdVBvQyxpQkFBaUI7U0FBeEMsY0FBYzs7SUFtQlkscUNBQWlCOzs7O0lBRXRELCtDQUFtQjtJQUtuQiwwQ0FBYzs7Ozs7SUFQSCxpQkFBaUI7UUFEN0IsVUFBVSxFQUFFO09BQ0EsaUJBQWlCOzRCQTFROUI7RUEwUXVDLGlCQUFpQjtTQUEzQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgQ29weXJpZ2h0IDIwMjAuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxyXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBlbnVtIEF1dGhTY29wZUxpc3Qge1xyXG4gIEdBTUUgPSBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vYXV0aC9nYW1lc1wiLFxyXG4gIE9QRU5JRCA9IFwib3BlbmlkXCIsXHJcbiAgRU1BSUwgPSBcImVtYWlsXCIsXHJcbiAgUFJPRklMRSA9IFwicHJvZmlsZVwiXHJcbn1cclxuZXhwb3J0IGVudW0gR2VuZGVyIHtcclxuICBVTktOT1dOID0gLTEsXHJcbiAgTUFMRSA9IDAsXHJcbiAgRkVNQUxFID0gMSxcclxuICBDT05GSURFTlRJQUwgPSAyXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBdXRoSHVhd2VpSWQge1xyXG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICBlbWFpbD86IHN0cmluZztcclxuICBmYW1pbHlOYW1lOiBzdHJpbmc7XHJcbiAgZ2l2ZW5OYW1lOiBzdHJpbmc7XHJcbiAgaWRUb2tlbj86IHN0cmluZztcclxuICB1bmlvbklkOiBzdHJpbmc7XHJcbiAgYXZhdGFyVXJpU3RyaW5nOiBzdHJpbmc7XHJcbiAgZXhwcmVzc2lvblRpbWVTZWNzOiBudW1iZXI7XHJcbiAgb3BlbklkOiBzdHJpbmc7XHJcbiAgdWlkPzogc3RyaW5nO1xyXG4gIGNvdW50cnlDb2RlPzogc3RyaW5nO1xyXG4gIHNlcnZpY2VDb3VudHJ5Q29kZT86IHN0cmluZztcclxuICBzdGF0dXM6IG51bWJlcjtcclxuICBnZW5kZXI6IEdlbmRlcjtcclxuICBkZXNjcmliZUNvbnRlbnRzSW5BdXRoSHVhd2VpSWQ6IG51bWJlcjtcclxuICBhdXRob3JpemVkU2NvcGVzOiBzdHJpbmdbXTtcclxuICBleHRlbnNpb25TY29wZXM6IHN0cmluZ1tdO1xyXG4gIGF1dGhvcml6YXRpb25Db2RlPzogc3RyaW5nO1xyXG4gIGh1YXdlaUFjY291bnQ/OiBBY2NvdW50O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aEh1YXdlaUlkQnVpbGRlciB7XHJcbiAgb3BlbklkOiBzdHJpbmc7XHJcbiAgdWlkOiBzdHJpbmc7XHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICBwaG90b1VybDogc3RyaW5nO1xyXG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcbiAgc2VydmljZUNvdW50cnlDb2RlOiBzdHJpbmc7XHJcbiAgc3RhdHVzOiBudW1iZXI7XHJcbiAgZ2VuZGVyOiBHZW5kZXI7XHJcbiAgc2NvcGVzOiBBdXRoU2NvcGVMaXN0W107XHJcbiAgc2VydmVyQXV0aENvZGU6IHN0cmluZztcclxuICB1bmlvbklkOiBzdHJpbmc7XHJcbiAgY291bnRyeUNvZGU6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENvbnRhaW5TY29wZXNSZXN1bHQge1xyXG4gIGNvbnRhaW5TY29wZXM6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBEb21haW5JbmZvIHtcclxuICBkb21haW46IHN0cmluZztcclxuICBpc1VzZUh0dHBzOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29va2llIHtcclxuICBjb29raWVOYW1lOiBzdHJpbmc7XHJcbiAgY29va2llVmFsdWU6IHN0cmluZztcclxuICBkb21haW46IHN0cmluZztcclxuICBwYXRoOiBzdHJpbmc7XHJcbiAgaXNIdHRwT25seTogYm9vbGVhbjtcclxuICBpc1NlY3VyZTogYm9vbGVhbjtcclxuICBtYXhBZ2U6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEFjY291bnQge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGVudW0gQXV0aFJlcXVlc3RPcHRpb24ge1xyXG4gIFNDT1BFX0lEX1RPS0VOID0gXCJpZFRva2VuXCIsXHJcbiAgU0NPUEVfQUNDRVNTX1RPS0VOID0gXCJhY2Nlc3NUb2tlblwiLFxyXG4gIFNDT1BFX01PQklMRV9OVU1CRVIgPSBcIm1vYmlsZU51bWJlclwiLFxyXG4gIFNDT1BFX0VNQUlMID0gXCJlbWFpbFwiLFxyXG4gIFNDT1BFX1NISVBQSU5HX0FERFJFU1MgPSBcInNoaXBwaW5nQWRkcmVzc1wiLFxyXG4gIFNDT1BFX1VJRCA9IFwidWlkXCIsXHJcbiAgU0NPUEVfSUQgPSBcImlkXCIsXHJcbiAgU0NPUEVfQVVUSE9SSVpBVElPTl9DT0RFID0gXCJhdXRob3JpemF0aW9uQ29kZVwiLFxyXG4gIFNDT1BFX1BST0ZJTEUgPSBcInByb2ZpbGVcIixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRXJyb3JDb2RlcyB7XHJcbiAgSHVhd2VpSWRBdXRoRXhjZXB0aW9uID0gXCI1MDNcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBIdWF3ZWlJZEF1dGhQYXJhbXMge1xyXG4gIERFRkFVTFRfQVVUSF9SRVFVRVNUX1BBUkFNID0gXCJERUZBVUxUX0FVVEhfUkVRVUVTVF9QQVJBTVwiLFxyXG4gIERFRkFVTFRfQVVUSF9SRVFVRVNUX1BBUkFNX0dBTUUgPSBcIkRFRkFVTFRfQVVUSF9SRVFVRVNUX1BBUkFNX0dBTUVcIlxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25JbkRhdGEge1xyXG4gIGF1dGhSZXF1ZXN0T3B0aW9uOiBBdXRoUmVxdWVzdE9wdGlvbltdLFxyXG4gIGF1dGhQYXJhbT86IEh1YXdlaUlkQXV0aFBhcmFtcyxcclxuICBhdXRoU2NvcGVMaXN0PzogQXV0aFNjb3BlTGlzdFtdXHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNBY2NvdW50JyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWNjb3VudCcsXHJcbiAgcGx1Z2luUmVmOiAnSE1TQWNjb3VudCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNBY2NvdW50IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2lnbkluKHNpZ25JbkRhdGE6IFNpZ25JbkRhdGEpOiBQcm9taXNlPEF1dGhIdWF3ZWlJZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzaWduT3V0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBjYW5jZWxBdXRob3JpemF0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzaWxlbnRTaWduSW4oYXV0aFBhcmFtczogSHVhd2VpSWRBdXRoUGFyYW1zKTogUHJvbWlzZTxBdXRoSHVhd2VpSWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBkaXNhYmxlTG9nZ2VyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRoZW1lIHtcclxuICBUSEVNRV9OT19USVRMRSA9IDAsXHJcbiAgVEhFTUVfRlVMTF9USVRMRSA9IDFcclxufVxyXG5leHBvcnQgZW51bSBDb2xvclBvbGljeSB7XHJcbiAgQ09MT1JfUE9MSUNZX0JMVUUgPSAwLFxyXG4gIENPTE9SX1BPTElDWV9SRUQgPSAxLFxyXG4gIENPTE9SX1BPTElDWV9XSElURSA9IDIsXHJcbiAgQ09MT1JfUE9MSUNZX1dISVRFX1dJVEhfQk9SREVSID0gMyxcclxuICBDT0xPUl9QT0xJQ1lfQkxBQ0sgPSA0LFxyXG4gIENPTE9SX1BPTElDWV9HUkFZID0gNVxyXG59XHJcbmV4cG9ydCBlbnVtIENvcm5lclJhZGl1cyB7XHJcbiAgQ09STkVSX1JBRElVU19MQVJHRSA9IC0xLFxyXG4gIENPUk5FUl9SQURJVVNfTUVESVVNID0gLTIsXHJcbiAgQ09STkVSX1JBRElVU19TTUFMTCA9IC0zXHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNIdWF3ZWlJZEF1dGhCdXR0b24nLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hY2NvdW50JyxcclxuICBwbHVnaW5SZWY6ICdITVNIdWF3ZWlJZEF1dGhCdXR0b24nLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TSHVhd2VpSWRBdXRoQnV0dG9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRIdWF3ZWlJZEF1dGhCdXR0b24oZWRpdHRlZEJ1dHRvbjogc3RyaW5nLCB0aGVtZTogVGhlbWUsIGNvbG9yUG9saWN5OiBDb2xvclBvbGljeSwgY29ybmVyUmFkaXVzOiBDb3JuZXJSYWRpdXMpOiB2b2lkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNIdWF3ZWlJZEF1dGhNYW5hZ2VyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWNjb3VudCcsXHJcbiAgcGx1Z2luUmVmOiAnSE1TSHVhd2VpSWRBdXRoTWFuYWdlcicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNIdWF3ZWlJZEF1dGhNYW5hZ2VyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0QXV0aFJlc3VsdCgpOiBQcm9taXNlPEF1dGhIdWF3ZWlJZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBnZXRBdXRoUmVzdWx0V2l0aFNjb3BlKGF1dGhIdWF3ZWlJZDogQXV0aFNjb3BlTGlzdFtdKTogUHJvbWlzZTxBdXRoSHVhd2VpSWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY29udGFpblNjb3BlcyhhdXRoSHVhd2VpSWQ6IEF1dGhIdWF3ZWlJZEJ1aWxkZXIsIGF1dGhTY29wZUxpc3Q6IEF1dGhTY29wZUxpc3RbXSk6IFByb21pc2U8Q29udGFpblNjb3Blc1Jlc3VsdD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBhZGRBdXRoU2NvcGVzKHJlcXVlc3RDb2RlOiBudW1iZXIsIGF1dGhTY29wZUxpc3Q6IEF1dGhTY29wZUxpc3RbXSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU0h1YXdlaUlkQXV0aFRvb2wnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hY2NvdW50JyxcclxuICBwbHVnaW5SZWY6ICdITVNIdWF3ZWlJZEF1dGhUb29sJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0h1YXdlaUlkQXV0aFRvb2wgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBkZWxldGVBdXRoSW5mbyhhY2Nlc3NUb2tlbjogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHJlcXVlc3RVbmlvbklkKGh1YXdlaUFjY291bnROYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICByZXF1ZXN0QWNjZXNzVG9rZW4oYWNjb3VudDogQWNjb3VudCwgYXV0aFNjb3BlTGlzdDogQXV0aFNjb3BlTGlzdFtdKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNOZXR3b3JrVG9vbCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFjY291bnQnLFxyXG4gIHBsdWdpblJlZjogJ0hNU05ldHdvcmtUb29sJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU05ldHdvcmtUb29sIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYnVpbGROZXR3b3JrVVJMKGRvbWFpbkh0dHBzOiBEb21haW5JbmZvKTogUHJvbWlzZTxTdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYnVpbGROZXR3b3JrQ29va2llKGNvb2tpZTogQ29va2llKTogUHJvbWlzZTxTdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNSZWFkU01TTWFuYWdlcicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFjY291bnQnLFxyXG4gIHBsdWdpblJlZjogJ0hNU1JlYWRTTVNNYW5hZ2VyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU1JlYWRTTVNNYW5hZ2VyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc21zVmVyaWZpY2F0aW9uQ29kZSgpOiBQcm9taXNlPFN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBvYnRhaW5IYXNoQ29kZSgpOiBQcm9taXNlPFN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=