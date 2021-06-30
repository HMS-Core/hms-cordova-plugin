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
    HMSAccount = __decorate([
        Injectable()
    ], HMSAccount);
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
    HMSAccountAuthService.pluginName = "HMSAccountAuthService";
    HMSAccountAuthService.plugin = "cordova-plugin-hms-account";
    HMSAccountAuthService.pluginRef = "HMSAccountAuthService";
    HMSAccountAuthService.platforms = ["Android"];
    HMSAccountAuthService = __decorate([
        Injectable()
    ], HMSAccountAuthService);
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
    HMSAccountAuthManager = __decorate([
        Injectable()
    ], HMSAccountAuthManager);
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
    HMSReadSMSManager.prototype.startConsent = function (phoneNumber) { return cordova(this, "startConsent", { "otherPromise": true }, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1hY2NvdW50L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7RUFjRTs7QUFFRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQTBGLE1BQU0sb0JBQW9CLENBQUM7QUFHNUgsTUFBTSxDQUFOLElBQVksYUFLWDtBQUxELFdBQVksYUFBYTtJQUN2QiwyREFBMEMsQ0FBQTtJQUMxQyxrQ0FBaUIsQ0FBQTtJQUNqQixnQ0FBZSxDQUFBO0lBQ2Ysb0NBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUxXLGFBQWEsS0FBYixhQUFhLFFBS3hCO0FBQ0QsTUFBTSxDQUFOLElBQVksTUFLWDtBQUxELFdBQVksTUFBTTtJQUNoQiwwQ0FBWSxDQUFBO0lBQ1osbUNBQVEsQ0FBQTtJQUNSLHVDQUFVLENBQUE7SUFDVixtREFBZ0IsQ0FBQTtBQUNsQixDQUFDLEVBTFcsTUFBTSxLQUFOLE1BQU0sUUFLakI7QUFFRCxNQUFNLENBQU4sSUFBWSxpQkFXWDtBQVhELFdBQVksaUJBQWlCO0lBQzNCLDBDQUFxQixDQUFBO0lBQ3JCLG9DQUFlLENBQUE7SUFDZiwrQ0FBMEIsQ0FBQTtJQUMxQiw4Q0FBeUIsQ0FBQTtJQUN6Qix5REFBb0MsQ0FBQTtJQUNwQyxzQ0FBaUIsQ0FBQTtJQUNqQixtRUFBOEMsQ0FBQTtJQUM5Qyx1REFBa0MsQ0FBQTtJQUNsQyxxREFBZ0MsQ0FBQTtJQUNoQywrREFBMEMsQ0FBQTtBQUM1QyxDQUFDLEVBWFcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQVc1QjtBQUVELE1BQU0sQ0FBTixJQUFZLFVBR1g7QUFIRCxXQUFZLFVBQVU7SUFDcEIsdUVBQXlELENBQUE7SUFDekQsaUZBQW1FLENBQUE7QUFDckUsQ0FBQyxFQUhXLFVBQVUsS0FBVixVQUFVLFFBR3JCOztJQStGK0IsOEJBQWlCOzs7O0lBRS9DLDJCQUFNLGFBQUMsVUFBc0I7SUFLN0IsNEJBQU87SUFLUCx3Q0FBbUI7SUFLbkIsaUNBQVksYUFBQyxVQUFzQjtJQUtuQyxpQ0FBWTtJQUtaLGtDQUFhOzs7OztJQTNCRixVQUFVO1FBRHRCLFVBQVUsRUFBRTtPQUNBLFVBQVU7cUJBaEp2QjtFQWdKZ0MsaUJBQWlCO1NBQXBDLFVBQVU7O0lBeUNvQix5Q0FBaUI7Ozs7SUFFMUQsc0NBQU0sYUFBQyxVQUFzQjtJQUs3Qix1Q0FBTztJQUtQLG1EQUFtQjtJQUtuQiw0Q0FBWSxhQUFDLFVBQXNCO0lBS25DLDBDQUFVOzs7OztJQXRCQyxxQkFBcUI7UUFEakMsVUFBVSxFQUFFO09BQ0EscUJBQXFCO2dDQXpMbEM7RUF5TDJDLGlCQUFpQjtTQUEvQyxxQkFBcUI7QUE0QmxDLE1BQU0sQ0FBTixJQUFZLEtBR1g7QUFIRCxXQUFZLEtBQUs7SUFDZixxREFBa0IsQ0FBQTtJQUNsQix5REFBb0IsQ0FBQTtBQUN0QixDQUFDLEVBSFcsS0FBSyxLQUFMLEtBQUssUUFHaEI7QUFDRCxNQUFNLENBQU4sSUFBWSxXQU9YO0FBUEQsV0FBWSxXQUFXO0lBQ3JCLHVFQUFxQixDQUFBO0lBQ3JCLHFFQUFvQixDQUFBO0lBQ3BCLHlFQUFzQixDQUFBO0lBQ3RCLGlHQUFrQyxDQUFBO0lBQ2xDLHlFQUFzQixDQUFBO0lBQ3RCLHVFQUFxQixDQUFBO0FBQ3ZCLENBQUMsRUFQVyxXQUFXLEtBQVgsV0FBVyxRQU90QjtBQUNELE1BQU0sQ0FBTixJQUFZLFlBSVg7QUFKRCxXQUFZLFlBQVk7SUFDdEIsOEVBQXdCLENBQUE7SUFDeEIsZ0ZBQXlCLENBQUE7SUFDekIsOEVBQXdCLENBQUE7QUFDMUIsQ0FBQyxFQUpXLFlBQVksS0FBWixZQUFZLFFBSXZCOztJQVMwQyx5Q0FBaUI7Ozs7SUFFMUQscURBQXFCLGFBQUMsYUFBcUIsRUFBRSxLQUFZLEVBQUUsV0FBd0IsRUFBRSxZQUEwQjs7Ozs7SUFGcEcscUJBQXFCO1FBRGpDLFVBQVUsRUFBRTtPQUNBLHFCQUFxQjtnQ0E5T2xDO0VBOE8yQyxpQkFBaUI7U0FBL0MscUJBQXFCOztJQWNVLDBDQUFpQjs7OztJQUUzRCw4Q0FBYTtJQUtiLHVEQUFzQixhQUFDLFlBQTZCO0lBS3BELDhDQUFhLGFBQUMsWUFBeUIsRUFBRSxhQUE4QjtJQUt2RSw4Q0FBYSxhQUFDLFdBQW1CLEVBQUUsYUFBOEI7Ozs7O0lBakJ0RCxzQkFBc0I7UUFEbEMsVUFBVSxFQUFFO09BQ0Esc0JBQXNCO2lDQTVQbkM7RUE0UDRDLGlCQUFpQjtTQUFoRCxzQkFBc0I7O0lBOEJRLHlDQUFpQjs7OztJQUUxRCw2Q0FBYTtJQUtiLHNEQUFzQixhQUFDLFdBQTRCO0lBS25ELDZDQUFhLGFBQUMsV0FBd0IsRUFBRSxhQUE4QjtJQUt0RSw2Q0FBYSxhQUFDLFdBQW1CLEVBQUUsYUFBOEI7Ozs7O0lBakJ0RCxxQkFBcUI7UUFEakMsVUFBVSxFQUFFO09BQ0EscUJBQXFCO2dDQTFSbEM7RUEwUjJDLGlCQUFpQjtTQUEvQyxxQkFBcUI7O0lBNkJPLHVDQUFpQjs7OztJQUV4RCw0Q0FBYyxhQUFDLFdBQW1CO0lBS2xDLDRDQUFjLGFBQUMsaUJBQXlCO0lBS3hDLGdEQUFrQixhQUFDLE9BQWdCLEVBQUUsYUFBOEI7Ozs7O0lBWnhELG1CQUFtQjtRQUQvQixVQUFVLEVBQUU7T0FDQSxtQkFBbUI7OEJBdlRoQztFQXVUeUMsaUJBQWlCO1NBQTdDLG1CQUFtQjs7SUF3Qkksa0NBQWlCOzs7O0lBRW5ELHdDQUFlLGFBQUMsV0FBdUI7SUFLdkMsMkNBQWtCLGFBQUMsTUFBYzs7Ozs7SUFQdEIsY0FBYztRQUQxQixVQUFVLEVBQUU7T0FDQSxjQUFjO3lCQS9VM0I7RUErVW9DLGlCQUFpQjtTQUF4QyxjQUFjOztJQW1CWSxxQ0FBaUI7Ozs7SUFFdEQsK0NBQW1CO0lBS25CLDBDQUFjO0lBS2Qsd0NBQVksYUFBQyxXQUFtQjs7Ozs7SUFackIsaUJBQWlCO1FBRDdCLFVBQVUsRUFBRTtPQUNBLGlCQUFpQjs0QkFsVzlCO0VBa1d1QyxpQkFBaUI7U0FBM0MsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIENvcHlyaWdodCAyMDIwLTIwMjEuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxyXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBlbnVtIEF1dGhTY29wZUxpc3Qge1xyXG4gIEdBTUUgPSBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vYXV0aC9nYW1lc1wiLFxyXG4gIE9QRU5JRCA9IFwib3BlbmlkXCIsXHJcbiAgRU1BSUwgPSBcImVtYWlsXCIsXHJcbiAgUFJPRklMRSA9IFwicHJvZmlsZVwiXHJcbn1cclxuZXhwb3J0IGVudW0gR2VuZGVyIHtcclxuICBVTktOT1dOID0gLTEsXHJcbiAgTUFMRSA9IDAsXHJcbiAgRkVNQUxFID0gMSxcclxuICBDT05GSURFTlRJQUwgPSAyXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEF1dGhSZXF1ZXN0T3B0aW9uIHtcclxuICBTQ09QRV9FTUFJTCA9IFwiZW1haWxcIixcclxuICBTQ09QRV9JRCA9IFwiaWRcIixcclxuICBTQ09QRV9JRF9UT0tFTiA9IFwiaWRUb2tlblwiLFxyXG4gIFNDT1BFX1BST0ZJTEUgPSBcInByb2ZpbGVcIixcclxuICBTQ09QRV9NT0JJTEVfTlVNQkVSID0gXCJtb2JpbGVOdW1iZXJcIixcclxuICBTQ09QRV9VSUQgPSBcInVpZFwiLFxyXG4gIFNDT1BFX0FVVEhPUklaQVRJT05fQ09ERSA9IFwiYXV0aG9yaXphdGlvbkNvZGVcIixcclxuICBTQ09QRV9BQ0NFU1NfVE9LRU4gPSBcImFjY2Vzc1Rva2VuXCIsXHJcbiAgU0NPUEVfRElBTE9HX0FVVEggPSBcImRpYWxvZ0F1dGhcIixcclxuICBTQ09QRV9TSElQUElOR19BRERSRVNTID0gXCJzaGlwcGluZ0FkZHJlc3NcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBBdXRoUGFyYW1zIHtcclxuICBERUZBVUxUX0FVVEhfUkVRVUVTVF9QQVJBTSA9IFwiREVGQVVMVF9BVVRIX1JFUVVFU1RfUEFSQU1cIixcclxuICBERUZBVUxUX0FVVEhfUkVRVUVTVF9QQVJBTV9HQU1FID0gXCJERUZBVUxUX0FVVEhfUkVRVUVTVF9QQVJBTV9HQU1FXCJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBYnN0cmFjdEF1dGhBY2NvdW50IHtcclxuICB1aWQ/OiBzdHJpbmc7XHJcbiAgb3BlbklkOiBzdHJpbmc7XHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG4gIHN0YXR1czogbnVtYmVyO1xyXG4gIGdlbmRlcjogR2VuZGVyO1xyXG4gIHNlcnZpY2VDb3VudHJ5Q29kZT86IHN0cmluZztcclxuICBjb3VudHJ5Q29kZT86IHN0cmluZztcclxuICB1bmlvbklkOiBzdHJpbmc7XHJcbiAgZW1haWw/OiBzdHJpbmc7XHJcbiAgZXh0ZW5zaW9uU2NvcGVzOiBzdHJpbmdbXTtcclxuICBpZFRva2VuPzogc3RyaW5nO1xyXG4gIGV4cHJlc3Npb25UaW1lU2VjczogbnVtYmVyO1xyXG4gIGdpdmVuTmFtZTogc3RyaW5nO1xyXG4gIGZhbWlseU5hbWU6IHN0cmluZztcclxuICBhZ2VSYW5nZT86IHN0cmluZztcclxuICBob21lWm9uZTogbnVtYmVyO1xyXG4gIGF1dGhvcml6ZWRTY29wZXM6IHN0cmluZ1tdO1xyXG4gIGF2YXRhclVyaVN0cmluZzogc3RyaW5nO1xyXG4gIGF1dGhvcml6YXRpb25Db2RlPzogc3RyaW5nO1xyXG4gIHJlcXVlc3RlZFNjb3Blczogc3RyaW5nW107XHJcbiAgYWNjb3VudD86IEFjY291bnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aEh1YXdlaUlkIGV4dGVuZHMgQWJzdHJhY3RBdXRoQWNjb3VudCB7XHJcbiAgYWdlUmFuZ2VGbGFnOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aEFjY291bnQgZXh0ZW5kcyBBYnN0cmFjdEF1dGhBY2NvdW50IHtcclxuICBhY2NvdW50RmxhZzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhCdWlsZGVyIHtcclxuICBvcGVuSWQ6IHN0cmluZztcclxuICB1aWQ6IHN0cmluZztcclxuICBwaG90b1VyaVN0cmluZzogc3RyaW5nO1xyXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgYWNjZXNzVG9rZW46IHN0cmluZztcclxuICBzZXJ2aWNlQ291bnRyeUNvZGU6IHN0cmluZztcclxuICBnZW5kZXI6IEdlbmRlcjtcclxuICBzdGF0dXM6IG51bWJlcjtcclxuICB1bmlvbklkOiBzdHJpbmc7XHJcbiAgc2VydmVyQXV0aENvZGU6IHN0cmluZztcclxuICBjb3VudHJ5Q29kZTogc3RyaW5nO1xyXG4gIGdyYW50ZWRTY29wZXM6IEF1dGhTY29wZUxpc3RbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb250YWluU2NvcGVzUmVzdWx0IHtcclxuICBjb250YWluU2NvcGVzOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRG9tYWluSW5mbyB7XHJcbiAgZG9tYWluOiBzdHJpbmc7XHJcbiAgaXNVc2VIdHRwczogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENvb2tpZSB7XHJcbiAgY29va2llTmFtZTogc3RyaW5nO1xyXG4gIGNvb2tpZVZhbHVlOiBzdHJpbmc7XHJcbiAgZG9tYWluOiBzdHJpbmc7XHJcbiAgcGF0aDogc3RyaW5nO1xyXG4gIGlzSHR0cE9ubHk6IGJvb2xlYW47XHJcbiAgaXNTZWN1cmU6IGJvb2xlYW47XHJcbiAgbWF4QWdlOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBY2NvdW50IHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFjY291bnRJY29uIHtcclxuICBpY29uOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaWduSW5EYXRhIHtcclxuICBhdXRoUmVxdWVzdE9wdGlvbjogQXV0aFJlcXVlc3RPcHRpb25bXTtcclxuICBhdXRoUGFyYW0/OiBBdXRoUGFyYW1zO1xyXG4gIGF1dGhTY29wZUxpc3Q/OiBBdXRoU2NvcGVMaXN0W107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lnbkluRGF0YSB7XHJcbiAgYXV0aFJlcXVlc3RPcHRpb246IEF1dGhSZXF1ZXN0T3B0aW9uW10sXHJcbiAgYXV0aFBhcmFtPzogQXV0aFBhcmFtcyxcclxuICBhdXRoU2NvcGVMaXN0PzogQXV0aFNjb3BlTGlzdFtdXHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNBY2NvdW50JyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWNjb3VudCcsXHJcbiAgcGx1Z2luUmVmOiAnSE1TQWNjb3VudCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNBY2NvdW50IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2lnbkluKHNpZ25JbkRhdGE6IFNpZ25JbkRhdGEpOiBQcm9taXNlPEF1dGhIdWF3ZWlJZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzaWduT3V0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBjYW5jZWxBdXRob3JpemF0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzaWxlbnRTaWduSW4oYXV0aFBhcmFtczogQXV0aFBhcmFtcyk6IFByb21pc2U8QXV0aEh1YXdlaUlkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGVuYWJsZUxvZ2dlcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU0FjY291bnRBdXRoU2VydmljZScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFjY291bnQnLFxyXG4gIHBsdWdpblJlZjogJ0hNU0FjY291bnRBdXRoU2VydmljZScsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNBY2NvdW50QXV0aFNlcnZpY2UgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzaWduSW4oc2lnbkluRGF0YTogU2lnbkluRGF0YSk6IFByb21pc2U8QXV0aEFjY291bnQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2lnbk91dCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY2FuY2VsQXV0aG9yaXphdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2lsZW50U2lnbkluKGF1dGhQYXJhbXM6IEF1dGhQYXJhbXMpOiBQcm9taXNlPEF1dGhBY2NvdW50PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldENoYW5uZWwoKTogUHJvbWlzZTxBY2NvdW50SWNvbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRoZW1lIHtcclxuICBUSEVNRV9OT19USVRMRSA9IDAsXHJcbiAgVEhFTUVfRlVMTF9USVRMRSA9IDFcclxufVxyXG5leHBvcnQgZW51bSBDb2xvclBvbGljeSB7XHJcbiAgQ09MT1JfUE9MSUNZX0JMVUUgPSAwLFxyXG4gIENPTE9SX1BPTElDWV9SRUQgPSAxLFxyXG4gIENPTE9SX1BPTElDWV9XSElURSA9IDIsXHJcbiAgQ09MT1JfUE9MSUNZX1dISVRFX1dJVEhfQk9SREVSID0gMyxcclxuICBDT0xPUl9QT0xJQ1lfQkxBQ0sgPSA0LFxyXG4gIENPTE9SX1BPTElDWV9HUkFZID0gNVxyXG59XHJcbmV4cG9ydCBlbnVtIENvcm5lclJhZGl1cyB7XHJcbiAgQ09STkVSX1JBRElVU19MQVJHRSA9IC0xLFxyXG4gIENPUk5FUl9SQURJVVNfTUVESVVNID0gLTIsXHJcbiAgQ09STkVSX1JBRElVU19TTUFMTCA9IC0zXHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNIdWF3ZWlJZEF1dGhCdXR0b24nLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hY2NvdW50JyxcclxuICBwbHVnaW5SZWY6ICdITVNIdWF3ZWlJZEF1dGhCdXR0b24nLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TSHVhd2VpSWRBdXRoQnV0dG9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRIdWF3ZWlJZEF1dGhCdXR0b24oZWRpdHRlZEJ1dHRvbjogc3RyaW5nLCB0aGVtZTogVGhlbWUsIGNvbG9yUG9saWN5OiBDb2xvclBvbGljeSwgY29ybmVyUmFkaXVzOiBDb3JuZXJSYWRpdXMpOiB2b2lkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNIdWF3ZWlJZEF1dGhNYW5hZ2VyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWNjb3VudCcsXHJcbiAgcGx1Z2luUmVmOiAnSE1TSHVhd2VpSWRBdXRoTWFuYWdlcicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNIdWF3ZWlJZEF1dGhNYW5hZ2VyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0QXV0aFJlc3VsdCgpOiBQcm9taXNlPEF1dGhIdWF3ZWlJZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBnZXRBdXRoUmVzdWx0V2l0aFNjb3BlKGF1dGhIdWF3ZWlJZDogQXV0aFNjb3BlTGlzdFtdKTogUHJvbWlzZTxBdXRoSHVhd2VpSWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY29udGFpblNjb3BlcyhhdXRoSHVhd2VpSWQ6IEF1dGhCdWlsZGVyLCBhdXRoU2NvcGVMaXN0OiBBdXRoU2NvcGVMaXN0W10pOiBQcm9taXNlPENvbnRhaW5TY29wZXNSZXN1bHQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYWRkQXV0aFNjb3BlcyhyZXF1ZXN0Q29kZTogbnVtYmVyLCBhdXRoU2NvcGVMaXN0OiBBdXRoU2NvcGVMaXN0W10pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNBY2NvdW50QXV0aE1hbmFnZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hY2NvdW50JyxcclxuICBwbHVnaW5SZWY6ICdITVNBY2NvdW50QXV0aE1hbmFnZXInLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cclxufSlcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0FjY291bnRBdXRoTWFuYWdlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldEF1dGhSZXN1bHQoKTogUHJvbWlzZTxBdXRoQWNjb3VudD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBnZXRBdXRoUmVzdWx0V2l0aFNjb3BlKGF1dGhBY2NvdW50OiBBdXRoU2NvcGVMaXN0W10pOiBQcm9taXNlPEF1dGhBY2NvdW50PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGNvbnRhaW5TY29wZXMoYXV0aEFjY291bnQ6IEF1dGhCdWlsZGVyLCBhdXRoU2NvcGVMaXN0OiBBdXRoU2NvcGVMaXN0W10pOiBQcm9taXNlPENvbnRhaW5TY29wZXNSZXN1bHQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYWRkQXV0aFNjb3BlcyhyZXF1ZXN0Q29kZTogbnVtYmVyLCBhdXRoU2NvcGVMaXN0OiBBdXRoU2NvcGVMaXN0W10pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNIdWF3ZWlJZEF1dGhUb29sJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWNjb3VudCcsXHJcbiAgcGx1Z2luUmVmOiAnSE1TSHVhd2VpSWRBdXRoVG9vbCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNIdWF3ZWlJZEF1dGhUb29sIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZGVsZXRlQXV0aEluZm8oYWNjZXNzVG9rZW46IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICByZXF1ZXN0VW5pb25JZChodWF3ZWlBY2NvdW50TmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgcmVxdWVzdEFjY2Vzc1Rva2VuKGFjY291bnQ6IEFjY291bnQsIGF1dGhTY29wZUxpc3Q6IEF1dGhTY29wZUxpc3RbXSk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSE1TTmV0d29ya1Rvb2wnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hY2NvdW50JyxcclxuICBwbHVnaW5SZWY6ICdITVNOZXR3b3JrVG9vbCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNOZXR3b3JrVG9vbCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGJ1aWxkTmV0d29ya1VSTChkb21haW5IdHRwczogRG9tYWluSW5mbyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGJ1aWxkTmV0d29ya0Nvb2tpZShjb29raWU6IENvb2tpZSk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSE1TUmVhZFNNU01hbmFnZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hY2NvdW50JyxcclxuICBwbHVnaW5SZWY6ICdITVNSZWFkU01TTWFuYWdlcicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNSZWFkU01TTWFuYWdlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNtc1ZlcmlmaWNhdGlvbkNvZGUoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgb2J0YWluSGFzaENvZGUoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc3RhcnRDb25zZW50KHBob25lTnVtYmVyOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufSJdfQ==