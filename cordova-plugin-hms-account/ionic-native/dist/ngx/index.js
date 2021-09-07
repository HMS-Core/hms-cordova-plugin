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
import { __extends } from "tslib";
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
    AuthRequestOption["SCOPE_EMAIL"] = "email";
    AuthRequestOption["SCOPE_ID"] = "id";
    AuthRequestOption["SCOPE_ID_TOKEN"] = "idToken";
    AuthRequestOption["SCOPE_PROFILE"] = "profile";
    AuthRequestOption["SCOPE_MOBILE_NUMBER"] = "mobileNumber";
    AuthRequestOption["SCOPE_UID"] = "uid";
    AuthRequestOption["SCOPE_AUTHORIZATION_CODE"] = "authorizationCode";
    AuthRequestOption["SCOPE_ACCESS_TOKEN"] = "accessToken";
    AuthRequestOption["SCOPE_DIALOG_AUTH"] = "dialogAuth";
    AuthRequestOption["SCOPE_SHIPPING_ADDRESS"] = "shippingAddress";
    AuthRequestOption["SCOPE_CARRIER_ID"] = "carrierId";
})(AuthRequestOption || (AuthRequestOption = {}));
export var AuthParams;
(function (AuthParams) {
    AuthParams["DEFAULT_AUTH_REQUEST_PARAM"] = "DEFAULT_AUTH_REQUEST_PARAM";
    AuthParams["DEFAULT_AUTH_REQUEST_PARAM_GAME"] = "DEFAULT_AUTH_REQUEST_PARAM_GAME";
})(AuthParams || (AuthParams = {}));
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
    HMSAccount.decorators = [
        { type: Injectable }
    ];
    return HMSAccount;
}(IonicNativePlugin));
export { HMSAccount };
var HMSAccountAuthService = /** @class */ (function (_super) {
    __extends(HMSAccountAuthService, _super);
    function HMSAccountAuthService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSAccountAuthService.prototype.signIn = function (signInData) { return cordova(this, "signIn", { "otherPromise": true }, arguments); };
    HMSAccountAuthService.prototype.signOut = function () { return cordova(this, "signOut", { "otherPromise": true }, arguments); };
    HMSAccountAuthService.prototype.cancelAuthorization = function () { return cordova(this, "cancelAuthorization", { "otherPromise": true }, arguments); };
    HMSAccountAuthService.prototype.silentSignIn = function (authParams) { return cordova(this, "silentSignIn", { "otherPromise": true }, arguments); };
    HMSAccountAuthService.prototype.getChannel = function () { return cordova(this, "getChannel", { "otherPromise": true }, arguments); };
    HMSAccountAuthService.prototype.getIndependentSignIn = function (accessToken) { return cordova(this, "getIndependentSignIn", { "otherPromise": true }, arguments); };
    HMSAccountAuthService.pluginName = "HMSAccountAuthService";
    HMSAccountAuthService.plugin = "cordova-plugin-hms-account";
    HMSAccountAuthService.pluginRef = "HMSAccountAuthService";
    HMSAccountAuthService.platforms = ["Android"];
    HMSAccountAuthService.decorators = [
        { type: Injectable }
    ];
    return HMSAccountAuthService;
}(IonicNativePlugin));
export { HMSAccountAuthService };
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
    HMSHuaweiIdAuthButton.decorators = [
        { type: Injectable }
    ];
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
    HMSHuaweiIdAuthManager.decorators = [
        { type: Injectable }
    ];
    return HMSHuaweiIdAuthManager;
}(IonicNativePlugin));
export { HMSHuaweiIdAuthManager };
var HMSAccountAuthManager = /** @class */ (function (_super) {
    __extends(HMSAccountAuthManager, _super);
    function HMSAccountAuthManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSAccountAuthManager.prototype.getAuthResult = function () { return cordova(this, "getAuthResult", { "otherPromise": true }, arguments); };
    HMSAccountAuthManager.prototype.getAuthResultWithScope = function (authAccount) { return cordova(this, "getAuthResultWithScope", { "otherPromise": true }, arguments); };
    HMSAccountAuthManager.prototype.containScopes = function (authAccount, authScopeList) { return cordova(this, "containScopes", { "otherPromise": true }, arguments); };
    HMSAccountAuthManager.prototype.addAuthScopes = function (requestCode, authScopeList) { return cordova(this, "addAuthScopes", { "otherPromise": true }, arguments); };
    HMSAccountAuthManager.pluginName = "HMSAccountAuthManager";
    HMSAccountAuthManager.plugin = "cordova-plugin-hms-account";
    HMSAccountAuthManager.pluginRef = "HMSAccountAuthManager";
    HMSAccountAuthManager.platforms = ["Android"];
    HMSAccountAuthManager.decorators = [
        { type: Injectable }
    ];
    return HMSAccountAuthManager;
}(IonicNativePlugin));
export { HMSAccountAuthManager };
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
    HMSHuaweiIdAuthTool.decorators = [
        { type: Injectable }
    ];
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
    HMSNetworkTool.decorators = [
        { type: Injectable }
    ];
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
    HMSReadSMSManager.prototype.startConsent = function (phoneNumber) { return cordova(this, "startConsent", { "otherPromise": true }, arguments); };
    HMSReadSMSManager.pluginName = "HMSReadSMSManager";
    HMSReadSMSManager.plugin = "cordova-plugin-hms-account";
    HMSReadSMSManager.pluginRef = "HMSReadSMSManager";
    HMSReadSMSManager.platforms = ["Android"];
    HMSReadSMSManager.decorators = [
        { type: Injectable }
    ];
    return HMSReadSMSManager;
}(IonicNativePlugin));
export { HMSReadSMSManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1hY2NvdW50L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7RUFjRTs7QUFFRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQTBGLE1BQU0sb0JBQW9CLENBQUM7QUFHNUgsTUFBTSxDQUFOLElBQVksYUFLWDtBQUxELFdBQVksYUFBYTtJQUN2QiwyREFBMEMsQ0FBQTtJQUMxQyxrQ0FBaUIsQ0FBQTtJQUNqQixnQ0FBZSxDQUFBO0lBQ2Ysb0NBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUxXLGFBQWEsS0FBYixhQUFhLFFBS3hCO0FBQ0QsTUFBTSxDQUFOLElBQVksTUFLWDtBQUxELFdBQVksTUFBTTtJQUNoQiwwQ0FBWSxDQUFBO0lBQ1osbUNBQVEsQ0FBQTtJQUNSLHVDQUFVLENBQUE7SUFDVixtREFBZ0IsQ0FBQTtBQUNsQixDQUFDLEVBTFcsTUFBTSxLQUFOLE1BQU0sUUFLakI7QUFFRCxNQUFNLENBQU4sSUFBWSxpQkFZWDtBQVpELFdBQVksaUJBQWlCO0lBQzNCLDBDQUFxQixDQUFBO0lBQ3JCLG9DQUFlLENBQUE7SUFDZiwrQ0FBMEIsQ0FBQTtJQUMxQiw4Q0FBeUIsQ0FBQTtJQUN6Qix5REFBb0MsQ0FBQTtJQUNwQyxzQ0FBaUIsQ0FBQTtJQUNqQixtRUFBOEMsQ0FBQTtJQUM5Qyx1REFBa0MsQ0FBQTtJQUNsQyxxREFBZ0MsQ0FBQTtJQUNoQywrREFBMEMsQ0FBQTtJQUMxQyxtREFBOEIsQ0FBQTtBQUNoQyxDQUFDLEVBWlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQVk1QjtBQUVELE1BQU0sQ0FBTixJQUFZLFVBR1g7QUFIRCxXQUFZLFVBQVU7SUFDcEIsdUVBQXlELENBQUE7SUFDekQsaUZBQW1FLENBQUE7QUFDckUsQ0FBQyxFQUhXLFVBQVUsS0FBVixVQUFVLFFBR3JCOztJQWdHK0IsOEJBQWlCOzs7O0lBRS9DLDJCQUFNLGFBQUMsVUFBc0I7SUFLN0IsNEJBQU87SUFLUCx3Q0FBbUI7SUFLbkIsaUNBQVksYUFBQyxVQUFzQjtJQUtuQyxpQ0FBWTtJQUtaLGtDQUFhOzs7Ozs7Z0JBNUJkLFVBQVU7O3FCQWpKWDtFQWtKZ0MsaUJBQWlCO1NBQXBDLFVBQVU7O0lBeUNvQix5Q0FBaUI7Ozs7SUFFMUQsc0NBQU0sYUFBQyxVQUFzQjtJQUs3Qix1Q0FBTztJQUtQLG1EQUFtQjtJQUtuQiw0Q0FBWSxhQUFDLFVBQXNCO0lBS25DLDBDQUFVO0lBS1Ysb0RBQW9CLGFBQUUsV0FBa0I7Ozs7OztnQkE1QnpDLFVBQVU7O2dDQTFMWDtFQTJMMkMsaUJBQWlCO1NBQS9DLHFCQUFxQjtBQWdDbEMsTUFBTSxDQUFOLElBQVksS0FHWDtBQUhELFdBQVksS0FBSztJQUNmLHFEQUFrQixDQUFBO0lBQ2xCLHlEQUFvQixDQUFBO0FBQ3RCLENBQUMsRUFIVyxLQUFLLEtBQUwsS0FBSyxRQUdoQjtBQUNELE1BQU0sQ0FBTixJQUFZLFdBT1g7QUFQRCxXQUFZLFdBQVc7SUFDckIsdUVBQXFCLENBQUE7SUFDckIscUVBQW9CLENBQUE7SUFDcEIseUVBQXNCLENBQUE7SUFDdEIsaUdBQWtDLENBQUE7SUFDbEMseUVBQXNCLENBQUE7SUFDdEIsdUVBQXFCLENBQUE7QUFDdkIsQ0FBQyxFQVBXLFdBQVcsS0FBWCxXQUFXLFFBT3RCO0FBQ0QsTUFBTSxDQUFOLElBQVksWUFJWDtBQUpELFdBQVksWUFBWTtJQUN0Qiw4RUFBd0IsQ0FBQTtJQUN4QixnRkFBeUIsQ0FBQTtJQUN6Qiw4RUFBd0IsQ0FBQTtBQUMxQixDQUFDLEVBSlcsWUFBWSxLQUFaLFlBQVksUUFJdkI7O0lBUzBDLHlDQUFpQjs7OztJQUUxRCxxREFBcUIsYUFBQyxhQUFxQixFQUFFLEtBQVksRUFBRSxXQUF3QixFQUFFLFlBQTBCOzs7Ozs7Z0JBSGhILFVBQVU7O2dDQW5QWDtFQW9QMkMsaUJBQWlCO1NBQS9DLHFCQUFxQjs7SUFjVSwwQ0FBaUI7Ozs7SUFFM0QsOENBQWE7SUFLYix1REFBc0IsYUFBQyxZQUE2QjtJQUtwRCw4Q0FBYSxhQUFDLFlBQXlCLEVBQUUsYUFBOEI7SUFLdkUsOENBQWEsYUFBQyxXQUFtQixFQUFFLGFBQThCOzs7Ozs7Z0JBbEJsRSxVQUFVOztpQ0FqUVg7RUFrUTRDLGlCQUFpQjtTQUFoRCxzQkFBc0I7O0lBOEJRLHlDQUFpQjs7OztJQUUxRCw2Q0FBYTtJQUtiLHNEQUFzQixhQUFDLFdBQTRCO0lBS25ELDZDQUFhLGFBQUMsV0FBd0IsRUFBRSxhQUE4QjtJQUt0RSw2Q0FBYSxhQUFDLFdBQW1CLEVBQUUsYUFBOEI7Ozs7OztnQkFsQmxFLFVBQVU7O2dDQS9SWDtFQWdTMkMsaUJBQWlCO1NBQS9DLHFCQUFxQjs7SUE2Qk8sdUNBQWlCOzs7O0lBRXhELDRDQUFjLGFBQUMsV0FBbUI7SUFLbEMsNENBQWMsYUFBQyxpQkFBeUI7SUFLeEMsZ0RBQWtCLGFBQUMsT0FBZ0IsRUFBRSxhQUE4Qjs7Ozs7O2dCQWJwRSxVQUFVOzs4QkE1VFg7RUE2VHlDLGlCQUFpQjtTQUE3QyxtQkFBbUI7O0lBd0JJLGtDQUFpQjs7OztJQUVuRCx3Q0FBZSxhQUFDLFdBQXVCO0lBS3ZDLDJDQUFrQixhQUFDLE1BQWM7Ozs7OztnQkFSbEMsVUFBVTs7eUJBcFZYO0VBcVZvQyxpQkFBaUI7U0FBeEMsY0FBYzs7SUFtQlkscUNBQWlCOzs7O0lBRXRELCtDQUFtQjtJQUtuQiwwQ0FBYztJQUtkLHdDQUFZLGFBQUMsV0FBbUI7Ozs7OztnQkFiakMsVUFBVTs7NEJBdldYO0VBd1d1QyxpQkFBaUI7U0FBM0MsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIENvcHlyaWdodCAyMDIwLTIwMjEuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxyXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBlbnVtIEF1dGhTY29wZUxpc3Qge1xyXG4gIEdBTUUgPSBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vYXV0aC9nYW1lc1wiLFxyXG4gIE9QRU5JRCA9IFwib3BlbmlkXCIsXHJcbiAgRU1BSUwgPSBcImVtYWlsXCIsXHJcbiAgUFJPRklMRSA9IFwicHJvZmlsZVwiXHJcbn1cclxuZXhwb3J0IGVudW0gR2VuZGVyIHtcclxuICBVTktOT1dOID0gLTEsXHJcbiAgTUFMRSA9IDAsXHJcbiAgRkVNQUxFID0gMSxcclxuICBDT05GSURFTlRJQUwgPSAyXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEF1dGhSZXF1ZXN0T3B0aW9uIHtcclxuICBTQ09QRV9FTUFJTCA9IFwiZW1haWxcIixcclxuICBTQ09QRV9JRCA9IFwiaWRcIixcclxuICBTQ09QRV9JRF9UT0tFTiA9IFwiaWRUb2tlblwiLFxyXG4gIFNDT1BFX1BST0ZJTEUgPSBcInByb2ZpbGVcIixcclxuICBTQ09QRV9NT0JJTEVfTlVNQkVSID0gXCJtb2JpbGVOdW1iZXJcIixcclxuICBTQ09QRV9VSUQgPSBcInVpZFwiLFxyXG4gIFNDT1BFX0FVVEhPUklaQVRJT05fQ09ERSA9IFwiYXV0aG9yaXphdGlvbkNvZGVcIixcclxuICBTQ09QRV9BQ0NFU1NfVE9LRU4gPSBcImFjY2Vzc1Rva2VuXCIsXHJcbiAgU0NPUEVfRElBTE9HX0FVVEggPSBcImRpYWxvZ0F1dGhcIixcclxuICBTQ09QRV9TSElQUElOR19BRERSRVNTID0gXCJzaGlwcGluZ0FkZHJlc3NcIixcclxuICBTQ09QRV9DQVJSSUVSX0lEID0gXCJjYXJyaWVySWRcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBBdXRoUGFyYW1zIHtcclxuICBERUZBVUxUX0FVVEhfUkVRVUVTVF9QQVJBTSA9IFwiREVGQVVMVF9BVVRIX1JFUVVFU1RfUEFSQU1cIixcclxuICBERUZBVUxUX0FVVEhfUkVRVUVTVF9QQVJBTV9HQU1FID0gXCJERUZBVUxUX0FVVEhfUkVRVUVTVF9QQVJBTV9HQU1FXCJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBYnN0cmFjdEF1dGhBY2NvdW50IHtcclxuICB1aWQ/OiBzdHJpbmc7XHJcbiAgb3BlbklkOiBzdHJpbmc7XHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG4gIHN0YXR1czogbnVtYmVyO1xyXG4gIGdlbmRlcjogR2VuZGVyO1xyXG4gIHNlcnZpY2VDb3VudHJ5Q29kZT86IHN0cmluZztcclxuICBjb3VudHJ5Q29kZT86IHN0cmluZztcclxuICB1bmlvbklkOiBzdHJpbmc7XHJcbiAgZW1haWw/OiBzdHJpbmc7XHJcbiAgZXh0ZW5zaW9uU2NvcGVzOiBzdHJpbmdbXTtcclxuICBpZFRva2VuPzogc3RyaW5nO1xyXG4gIGV4cHJlc3Npb25UaW1lU2VjczogbnVtYmVyO1xyXG4gIGdpdmVuTmFtZTogc3RyaW5nO1xyXG4gIGZhbWlseU5hbWU6IHN0cmluZztcclxuICBjYXJyaWVySWQ6bnVtYmVyO1xyXG4gIGFnZVJhbmdlPzogc3RyaW5nO1xyXG4gIGhvbWVab25lOiBudW1iZXI7XHJcbiAgYXV0aG9yaXplZFNjb3Blczogc3RyaW5nW107XHJcbiAgYXZhdGFyVXJpU3RyaW5nOiBzdHJpbmc7XHJcbiAgYXV0aG9yaXphdGlvbkNvZGU/OiBzdHJpbmc7XHJcbiAgcmVxdWVzdGVkU2NvcGVzOiBzdHJpbmdbXTtcclxuICBhY2NvdW50PzogQWNjb3VudDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRoSHVhd2VpSWQgZXh0ZW5kcyBBYnN0cmFjdEF1dGhBY2NvdW50IHtcclxuICBhZ2VSYW5nZUZsYWc6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRoQWNjb3VudCBleHRlbmRzIEFic3RyYWN0QXV0aEFjY291bnQge1xyXG4gIGFjY291bnRGbGFnOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aEJ1aWxkZXIge1xyXG4gIG9wZW5JZDogc3RyaW5nO1xyXG4gIHVpZDogc3RyaW5nO1xyXG4gIHBob3RvVXJpU3RyaW5nOiBzdHJpbmc7XHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG4gIHNlcnZpY2VDb3VudHJ5Q29kZTogc3RyaW5nO1xyXG4gIGdlbmRlcjogR2VuZGVyO1xyXG4gIHN0YXR1czogbnVtYmVyO1xyXG4gIHVuaW9uSWQ6IHN0cmluZztcclxuICBzZXJ2ZXJBdXRoQ29kZTogc3RyaW5nO1xyXG4gIGNvdW50cnlDb2RlOiBzdHJpbmc7XHJcbiAgZ3JhbnRlZFNjb3BlczogQXV0aFNjb3BlTGlzdFtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbnRhaW5TY29wZXNSZXN1bHQge1xyXG4gIGNvbnRhaW5TY29wZXM6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBEb21haW5JbmZvIHtcclxuICBkb21haW46IHN0cmluZztcclxuICBpc1VzZUh0dHBzOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29va2llIHtcclxuICBjb29raWVOYW1lOiBzdHJpbmc7XHJcbiAgY29va2llVmFsdWU6IHN0cmluZztcclxuICBkb21haW46IHN0cmluZztcclxuICBwYXRoOiBzdHJpbmc7XHJcbiAgaXNIdHRwT25seTogYm9vbGVhbjtcclxuICBpc1NlY3VyZTogYm9vbGVhbjtcclxuICBtYXhBZ2U6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEFjY291bnQge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWNjb3VudEljb24ge1xyXG4gIGljb246IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25JbkRhdGEge1xyXG4gIGF1dGhSZXF1ZXN0T3B0aW9uOiBBdXRoUmVxdWVzdE9wdGlvbltdO1xyXG4gIGF1dGhQYXJhbT86IEF1dGhQYXJhbXM7XHJcbiAgYXV0aFNjb3BlTGlzdD86IEF1dGhTY29wZUxpc3RbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaWduSW5EYXRhIHtcclxuICBhdXRoUmVxdWVzdE9wdGlvbjogQXV0aFJlcXVlc3RPcHRpb25bXSxcclxuICBhdXRoUGFyYW0/OiBBdXRoUGFyYW1zLFxyXG4gIGF1dGhTY29wZUxpc3Q/OiBBdXRoU2NvcGVMaXN0W11cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU0FjY291bnQnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hY2NvdW50JyxcclxuICBwbHVnaW5SZWY6ICdITVNBY2NvdW50JyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0FjY291bnQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzaWduSW4oc2lnbkluRGF0YTogU2lnbkluRGF0YSk6IFByb21pc2U8QXV0aEh1YXdlaUlkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNpZ25PdXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGNhbmNlbEF1dGhvcml6YXRpb24oKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNpbGVudFNpZ25JbihhdXRoUGFyYW1zOiBBdXRoUGFyYW1zKTogUHJvbWlzZTxBdXRoSHVhd2VpSWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBkaXNhYmxlTG9nZ2VyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSE1TQWNjb3VudEF1dGhTZXJ2aWNlJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWNjb3VudCcsXHJcbiAgcGx1Z2luUmVmOiAnSE1TQWNjb3VudEF1dGhTZXJ2aWNlJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0FjY291bnRBdXRoU2VydmljZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNpZ25JbihzaWduSW5EYXRhOiBTaWduSW5EYXRhKTogUHJvbWlzZTxBdXRoQWNjb3VudD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzaWduT3V0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBjYW5jZWxBdXRob3JpemF0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzaWxlbnRTaWduSW4oYXV0aFBhcmFtczogQXV0aFBhcmFtcyk6IFByb21pc2U8QXV0aEFjY291bnQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0Q2hhbm5lbCgpOiBQcm9taXNlPEFjY291bnRJY29uPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldEluZGVwZW5kZW50U2lnbkluKCBhY2Nlc3NUb2tlbjpzdHJpbmcgKTogUHJvbWlzZTxBdXRoQWNjb3VudD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gVGhlbWUge1xyXG4gIFRIRU1FX05PX1RJVExFID0gMCxcclxuICBUSEVNRV9GVUxMX1RJVExFID0gMVxyXG59XHJcbmV4cG9ydCBlbnVtIENvbG9yUG9saWN5IHtcclxuICBDT0xPUl9QT0xJQ1lfQkxVRSA9IDAsXHJcbiAgQ09MT1JfUE9MSUNZX1JFRCA9IDEsXHJcbiAgQ09MT1JfUE9MSUNZX1dISVRFID0gMixcclxuICBDT0xPUl9QT0xJQ1lfV0hJVEVfV0lUSF9CT1JERVIgPSAzLFxyXG4gIENPTE9SX1BPTElDWV9CTEFDSyA9IDQsXHJcbiAgQ09MT1JfUE9MSUNZX0dSQVkgPSA1XHJcbn1cclxuZXhwb3J0IGVudW0gQ29ybmVyUmFkaXVzIHtcclxuICBDT1JORVJfUkFESVVTX0xBUkdFID0gLTEsXHJcbiAgQ09STkVSX1JBRElVU19NRURJVU0gPSAtMixcclxuICBDT1JORVJfUkFESVVTX1NNQUxMID0gLTNcclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU0h1YXdlaUlkQXV0aEJ1dHRvbicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFjY291bnQnLFxyXG4gIHBsdWdpblJlZjogJ0hNU0h1YXdlaUlkQXV0aEJ1dHRvbicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNIdWF3ZWlJZEF1dGhCdXR0b24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEh1YXdlaUlkQXV0aEJ1dHRvbihlZGl0dGVkQnV0dG9uOiBzdHJpbmcsIHRoZW1lOiBUaGVtZSwgY29sb3JQb2xpY3k6IENvbG9yUG9saWN5LCBjb3JuZXJSYWRpdXM6IENvcm5lclJhZGl1cyk6IHZvaWQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU0h1YXdlaUlkQXV0aE1hbmFnZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hY2NvdW50JyxcclxuICBwbHVnaW5SZWY6ICdITVNIdWF3ZWlJZEF1dGhNYW5hZ2VyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0h1YXdlaUlkQXV0aE1hbmFnZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBnZXRBdXRoUmVzdWx0KCk6IFByb21pc2U8QXV0aEh1YXdlaUlkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldEF1dGhSZXN1bHRXaXRoU2NvcGUoYXV0aEh1YXdlaUlkOiBBdXRoU2NvcGVMaXN0W10pOiBQcm9taXNlPEF1dGhIdWF3ZWlJZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBjb250YWluU2NvcGVzKGF1dGhIdWF3ZWlJZDogQXV0aEJ1aWxkZXIsIGF1dGhTY29wZUxpc3Q6IEF1dGhTY29wZUxpc3RbXSk6IFByb21pc2U8Q29udGFpblNjb3Blc1Jlc3VsdD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBhZGRBdXRoU2NvcGVzKHJlcXVlc3RDb2RlOiBudW1iZXIsIGF1dGhTY29wZUxpc3Q6IEF1dGhTY29wZUxpc3RbXSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU0FjY291bnRBdXRoTWFuYWdlcicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFjY291bnQnLFxyXG4gIHBsdWdpblJlZjogJ0hNU0FjY291bnRBdXRoTWFuYWdlcicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxyXG59KVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TQWNjb3VudEF1dGhNYW5hZ2VyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0QXV0aFJlc3VsdCgpOiBQcm9taXNlPEF1dGhBY2NvdW50PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldEF1dGhSZXN1bHRXaXRoU2NvcGUoYXV0aEFjY291bnQ6IEF1dGhTY29wZUxpc3RbXSk6IFByb21pc2U8QXV0aEFjY291bnQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY29udGFpblNjb3BlcyhhdXRoQWNjb3VudDogQXV0aEJ1aWxkZXIsIGF1dGhTY29wZUxpc3Q6IEF1dGhTY29wZUxpc3RbXSk6IFByb21pc2U8Q29udGFpblNjb3Blc1Jlc3VsdD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBhZGRBdXRoU2NvcGVzKHJlcXVlc3RDb2RlOiBudW1iZXIsIGF1dGhTY29wZUxpc3Q6IEF1dGhTY29wZUxpc3RbXSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU0h1YXdlaUlkQXV0aFRvb2wnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hY2NvdW50JyxcclxuICBwbHVnaW5SZWY6ICdITVNIdWF3ZWlJZEF1dGhUb29sJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0h1YXdlaUlkQXV0aFRvb2wgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBkZWxldGVBdXRoSW5mbyhhY2Nlc3NUb2tlbjogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHJlcXVlc3RVbmlvbklkKGh1YXdlaUFjY291bnROYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICByZXF1ZXN0QWNjZXNzVG9rZW4oYWNjb3VudDogQWNjb3VudCwgYXV0aFNjb3BlTGlzdDogQXV0aFNjb3BlTGlzdFtdKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNOZXR3b3JrVG9vbCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFjY291bnQnLFxyXG4gIHBsdWdpblJlZjogJ0hNU05ldHdvcmtUb29sJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU05ldHdvcmtUb29sIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYnVpbGROZXR3b3JrVVJMKGRvbWFpbkh0dHBzOiBEb21haW5JbmZvKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYnVpbGROZXR3b3JrQ29va2llKGNvb2tpZTogQ29va2llKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNSZWFkU01TTWFuYWdlcicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFjY291bnQnLFxyXG4gIHBsdWdpblJlZjogJ0hNU1JlYWRTTVNNYW5hZ2VyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU1JlYWRTTVNNYW5hZ2VyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc21zVmVyaWZpY2F0aW9uQ29kZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBvYnRhaW5IYXNoQ29kZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzdGFydENvbnNlbnQocGhvbmVOdW1iZXI6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59Il19