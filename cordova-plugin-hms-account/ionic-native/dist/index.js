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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
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
export var PackageName;
(function (PackageName) {
    PackageName["HWID"] = "HWID";
    PackageName["ACCOUNT"] = "ACCOUNT";
})(PackageName || (PackageName = {}));
export var AuthIdTokenSignAlg;
(function (AuthIdTokenSignAlg) {
    AuthIdTokenSignAlg[AuthIdTokenSignAlg["PS256"] = 1] = "PS256";
    AuthIdTokenSignAlg[AuthIdTokenSignAlg["RS256"] = 2] = "RS256";
})(AuthIdTokenSignAlg || (AuthIdTokenSignAlg = {}));
var HMSAccountOriginal = /** @class */ (function (_super) {
    __extends(HMSAccountOriginal, _super);
    function HMSAccountOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSAccountOriginal.prototype.signIn = function (signInData, packageName) { return cordova(this, "signIn", { "otherPromise": true }, arguments); };
    HMSAccountOriginal.prototype.signOut = function () { return cordova(this, "signOut", { "otherPromise": true }, arguments); };
    HMSAccountOriginal.prototype.cancelAuthorization = function () { return cordova(this, "cancelAuthorization", { "otherPromise": true }, arguments); };
    HMSAccountOriginal.prototype.silentSignIn = function (authParams, packageName) { return cordova(this, "silentSignIn", { "otherPromise": true }, arguments); };
    HMSAccountOriginal.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HMSAccountOriginal.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSAccountOriginal.pluginName = "HMSAccount";
    HMSAccountOriginal.plugin = "cordova-plugin-hms-account";
    HMSAccountOriginal.pluginRef = "HMSAccount";
    HMSAccountOriginal.platforms = ["Android"];
    return HMSAccountOriginal;
}(AwesomeCordovaNativePlugin));
var HMSAccount = new HMSAccountOriginal();
export { HMSAccount };
var HMSAccountAuthServiceOriginal = /** @class */ (function (_super) {
    __extends(HMSAccountAuthServiceOriginal, _super);
    function HMSAccountAuthServiceOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSAccountAuthServiceOriginal.prototype.signIn = function (signInData, packageName) { return cordova(this, "signIn", { "otherPromise": true }, arguments); };
    HMSAccountAuthServiceOriginal.prototype.getIndependentSignIn = function (accessToken) { return cordova(this, "getIndependentSignIn", { "otherPromise": true }, arguments); };
    HMSAccountAuthServiceOriginal.prototype.signOut = function () { return cordova(this, "signOut", { "otherPromise": true }, arguments); };
    HMSAccountAuthServiceOriginal.prototype.cancelAuthorization = function () { return cordova(this, "cancelAuthorization", { "otherPromise": true }, arguments); };
    HMSAccountAuthServiceOriginal.prototype.silentSignIn = function (authParams, packageName) { return cordova(this, "silentSignIn", { "otherPromise": true }, arguments); };
    HMSAccountAuthServiceOriginal.prototype.getChannel = function () { return cordova(this, "getChannel", { "otherPromise": true }, arguments); };
    HMSAccountAuthServiceOriginal.pluginName = "HMSAccountAuthService";
    HMSAccountAuthServiceOriginal.plugin = "cordova-plugin-hms-account";
    HMSAccountAuthServiceOriginal.pluginRef = "HMSAccountAuthService";
    HMSAccountAuthServiceOriginal.platforms = ["Android"];
    return HMSAccountAuthServiceOriginal;
}(AwesomeCordovaNativePlugin));
var HMSAccountAuthService = new HMSAccountAuthServiceOriginal();
export { HMSAccountAuthService };
export var Theme;
(function (Theme) {
    Theme[Theme["THEME_NO_TITLE"] = 0] = "THEME_NO_TITLE";
    Theme[Theme["THEME_FULL_TITLE"] = 1] = "THEME_FULL_TITLE";
})(Theme || (Theme = {}));
export var ColorPolicy;
(function (ColorPolicy) {
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
var HMSHuaweiIdAuthButtonOriginal = /** @class */ (function (_super) {
    __extends(HMSHuaweiIdAuthButtonOriginal, _super);
    function HMSHuaweiIdAuthButtonOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSHuaweiIdAuthButtonOriginal.prototype.getHuaweiIdAuthButton = function (edittedButton, theme, colorPolicy, cornerRadius) { return cordova(this, "getHuaweiIdAuthButton", {}, arguments); };
    HMSHuaweiIdAuthButtonOriginal.pluginName = "HMSHuaweiIdAuthButton";
    HMSHuaweiIdAuthButtonOriginal.plugin = "cordova-plugin-hms-account";
    HMSHuaweiIdAuthButtonOriginal.pluginRef = "HMSHuaweiIdAuthButton";
    HMSHuaweiIdAuthButtonOriginal.platforms = ["Android"];
    return HMSHuaweiIdAuthButtonOriginal;
}(AwesomeCordovaNativePlugin));
var HMSHuaweiIdAuthButton = new HMSHuaweiIdAuthButtonOriginal();
export { HMSHuaweiIdAuthButton };
var HMSHuaweiIdAuthManagerOriginal = /** @class */ (function (_super) {
    __extends(HMSHuaweiIdAuthManagerOriginal, _super);
    function HMSHuaweiIdAuthManagerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSHuaweiIdAuthManagerOriginal.prototype.getAuthResult = function (packageName) { return cordova(this, "getAuthResult", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthManagerOriginal.prototype.getAuthResultWithScope = function (authHuaweiId, packageName) { return cordova(this, "getAuthResultWithScope", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthManagerOriginal.prototype.containScopes = function (authHuaweiId, authScopeList, packageName) { return cordova(this, "containScopes", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthManagerOriginal.prototype.addAuthScopes = function (requestCode, authScopeList, packageName) { return cordova(this, "addAuthScopes", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthManagerOriginal.pluginName = "HMSHuaweiIdAuthManager";
    HMSHuaweiIdAuthManagerOriginal.plugin = "cordova-plugin-hms-account";
    HMSHuaweiIdAuthManagerOriginal.pluginRef = "HMSHuaweiIdAuthManager";
    HMSHuaweiIdAuthManagerOriginal.platforms = ["Android"];
    return HMSHuaweiIdAuthManagerOriginal;
}(AwesomeCordovaNativePlugin));
var HMSHuaweiIdAuthManager = new HMSHuaweiIdAuthManagerOriginal();
export { HMSHuaweiIdAuthManager };
var HMSAccountAuthManagerOriginal = /** @class */ (function (_super) {
    __extends(HMSAccountAuthManagerOriginal, _super);
    function HMSAccountAuthManagerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSAccountAuthManagerOriginal.prototype.getAuthResult = function (packageName) { return cordova(this, "getAuthResult", { "otherPromise": true }, arguments); };
    HMSAccountAuthManagerOriginal.prototype.getAuthResultWithScope = function (authAccount, packageName) { return cordova(this, "getAuthResultWithScope", { "otherPromise": true }, arguments); };
    HMSAccountAuthManagerOriginal.prototype.containScopes = function (authAccount, authScopeList, packageName) { return cordova(this, "containScopes", { "otherPromise": true }, arguments); };
    HMSAccountAuthManagerOriginal.prototype.addAuthScopes = function (requestCode, authScopeList, packageName) { return cordova(this, "addAuthScopes", { "otherPromise": true }, arguments); };
    HMSAccountAuthManagerOriginal.pluginName = "HMSAccountAuthManager";
    HMSAccountAuthManagerOriginal.plugin = "cordova-plugin-hms-account";
    HMSAccountAuthManagerOriginal.pluginRef = "HMSAccountAuthManager";
    HMSAccountAuthManagerOriginal.platforms = ["Android"];
    return HMSAccountAuthManagerOriginal;
}(AwesomeCordovaNativePlugin));
var HMSAccountAuthManager = new HMSAccountAuthManagerOriginal();
export { HMSAccountAuthManager };
var HMSHuaweiIdAuthToolOriginal = /** @class */ (function (_super) {
    __extends(HMSHuaweiIdAuthToolOriginal, _super);
    function HMSHuaweiIdAuthToolOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSHuaweiIdAuthToolOriginal.prototype.deleteAuthInfo = function (accessToken) { return cordova(this, "deleteAuthInfo", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthToolOriginal.prototype.requestUnionId = function (huaweiAccountName) { return cordova(this, "requestUnionId", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthToolOriginal.prototype.requestAccessToken = function (account, authScopeList) { return cordova(this, "requestAccessToken", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthToolOriginal.pluginName = "HMSHuaweiIdAuthTool";
    HMSHuaweiIdAuthToolOriginal.plugin = "cordova-plugin-hms-account";
    HMSHuaweiIdAuthToolOriginal.pluginRef = "HMSHuaweiIdAuthTool";
    HMSHuaweiIdAuthToolOriginal.platforms = ["Android"];
    return HMSHuaweiIdAuthToolOriginal;
}(AwesomeCordovaNativePlugin));
var HMSHuaweiIdAuthTool = new HMSHuaweiIdAuthToolOriginal();
export { HMSHuaweiIdAuthTool };
var HMSNetworkToolOriginal = /** @class */ (function (_super) {
    __extends(HMSNetworkToolOriginal, _super);
    function HMSNetworkToolOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSNetworkToolOriginal.prototype.buildNetworkURL = function (domainHttps) { return cordova(this, "buildNetworkURL", { "otherPromise": true }, arguments); };
    HMSNetworkToolOriginal.prototype.buildNetworkCookie = function (cookie) { return cordova(this, "buildNetworkCookie", { "otherPromise": true }, arguments); };
    HMSNetworkToolOriginal.pluginName = "HMSNetworkTool";
    HMSNetworkToolOriginal.plugin = "cordova-plugin-hms-account";
    HMSNetworkToolOriginal.pluginRef = "HMSNetworkTool";
    HMSNetworkToolOriginal.platforms = ["Android"];
    return HMSNetworkToolOriginal;
}(AwesomeCordovaNativePlugin));
var HMSNetworkTool = new HMSNetworkToolOriginal();
export { HMSNetworkTool };
var HMSReadSMSManagerOriginal = /** @class */ (function (_super) {
    __extends(HMSReadSMSManagerOriginal, _super);
    function HMSReadSMSManagerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSReadSMSManagerOriginal.prototype.smsVerificationCode = function () { return cordova(this, "smsVerificationCode", { "otherPromise": true }, arguments); };
    HMSReadSMSManagerOriginal.prototype.obtainHashCode = function () { return cordova(this, "obtainHashCode", { "otherPromise": true }, arguments); };
    HMSReadSMSManagerOriginal.prototype.startConsent = function (phoneNumber) { return cordova(this, "startConsent", { "otherPromise": true }, arguments); };
    HMSReadSMSManagerOriginal.pluginName = "HMSReadSMSManager";
    HMSReadSMSManagerOriginal.plugin = "cordova-plugin-hms-account";
    HMSReadSMSManagerOriginal.pluginRef = "HMSReadSMSManager";
    HMSReadSMSManagerOriginal.platforms = ["Android"];
    return HMSReadSMSManagerOriginal;
}(AwesomeCordovaNativePlugin));
var HMSReadSMSManager = new HMSReadSMSManagerOriginal();
export { HMSReadSMSManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmF0aXZlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBRTVGLE1BQU0sQ0FBTixJQUFZLGFBS1g7QUFMRCxXQUFZLGFBQWE7SUFDdkIsMkRBQTBDLENBQUE7SUFDMUMsa0NBQWlCLENBQUE7SUFDakIsZ0NBQWUsQ0FBQTtJQUNmLG9DQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFMVyxhQUFhLEtBQWIsYUFBYSxRQUt4QjtBQUNELE1BQU0sQ0FBTixJQUFZLE1BS1g7QUFMRCxXQUFZLE1BQU07SUFDaEIsMENBQVksQ0FBQTtJQUNaLG1DQUFRLENBQUE7SUFDUix1Q0FBVSxDQUFBO0lBQ1YsbURBQWdCLENBQUE7QUFDbEIsQ0FBQyxFQUxXLE1BQU0sS0FBTixNQUFNLFFBS2pCO0FBRUQsTUFBTSxDQUFOLElBQVksaUJBWVg7QUFaRCxXQUFZLGlCQUFpQjtJQUMzQiwwQ0FBcUIsQ0FBQTtJQUNyQixvQ0FBZSxDQUFBO0lBQ2YsK0NBQTBCLENBQUE7SUFDMUIsOENBQXlCLENBQUE7SUFDekIseURBQW9DLENBQUE7SUFDcEMsc0NBQWlCLENBQUE7SUFDakIsbUVBQThDLENBQUE7SUFDOUMsdURBQWtDLENBQUE7SUFDbEMscURBQWdDLENBQUE7SUFDaEMsK0RBQTBDLENBQUE7SUFDMUMsbURBQThCLENBQUE7QUFDaEMsQ0FBQyxFQVpXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFZNUI7QUFFRCxNQUFNLENBQU4sSUFBWSxVQUdYO0FBSEQsV0FBWSxVQUFVO0lBQ3BCLHVFQUF5RCxDQUFBO0lBQ3pELGlGQUFtRSxDQUFBO0FBQ3JFLENBQUMsRUFIVyxVQUFVLEtBQVYsVUFBVSxRQUdyQjtBQUVELE1BQU0sQ0FBTixJ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Ozs0QkE1WGxDO0VBZ1h1QywwQkFBMEI7U0FBcEQsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIENvcHlyaWdodCAyMDIwLTIwMjMuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxyXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuZXhwb3J0IGVudW0gQXV0aFNjb3BlTGlzdCB7XHJcbiAgR0FNRSA9IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9hdXRoL2dhbWVzXCIsXHJcbiAgT1BFTklEID0gXCJvcGVuaWRcIixcclxuICBFTUFJTCA9IFwiZW1haWxcIixcclxuICBQUk9GSUxFID0gXCJwcm9maWxlXCJcclxufVxyXG5leHBvcnQgZW51bSBHZW5kZXIge1xyXG4gIFVOS05PV04gPSAtMSxcclxuICBNQUxFID0gMCxcclxuICBGRU1BTEUgPSAxLFxyXG4gIENPTkZJREVOVElBTCA9IDJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQXV0aFJlcXVlc3RPcHRpb24ge1xyXG4gIFNDT1BFX0VNQUlMID0gXCJlbWFpbFwiLFxyXG4gIFNDT1BFX0lEID0gXCJpZFwiLFxyXG4gIFNDT1BFX0lEX1RPS0VOID0gXCJpZFRva2VuXCIsXHJcbiAgU0NPUEVfUFJPRklMRSA9IFwicHJvZmlsZVwiLFxyXG4gIFNDT1BFX01PQklMRV9OVU1CRVIgPSBcIm1vYmlsZU51bWJlclwiLFxyXG4gIFNDT1BFX1VJRCA9IFwidWlkXCIsXHJcbiAgU0NPUEVfQVVUSE9SSVpBVElPTl9DT0RFID0gXCJhdXRob3JpemF0aW9uQ29kZVwiLFxyXG4gIFNDT1BFX0FDQ0VTU19UT0tFTiA9IFwiYWNjZXNzVG9rZW5cIixcclxuICBTQ09QRV9ESUFMT0dfQVVUSCA9IFwiZGlhbG9nQXV0aFwiLFxyXG4gIFNDT1BFX1NISVBQSU5HX0FERFJFU1MgPSBcInNoaXBwaW5nQWRkcmVzc1wiLFxyXG4gIFNDT1BFX0NBUlJJRVJfSUQgPSBcImNhcnJpZXJJZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEF1dGhQYXJhbXMge1xyXG4gIERFRkFVTFRfQVVUSF9SRVFVRVNUX1BBUkFNID0gXCJERUZBVUxUX0FVVEhfUkVRVUVTVF9QQVJBTVwiLFxyXG4gIERFRkFVTFRfQVVUSF9SRVFVRVNUX1BBUkFNX0dBTUUgPSBcIkRFRkFVTFRfQVVUSF9SRVFVRVNUX1BBUkFNX0dBTUVcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBQYWNrYWdlTmFtZSB7XHJcbiAgSFdJRCA9IFwiSFdJRFwiLFxyXG4gIEFDQ09VTlQgPSBcIkFDQ09VTlRcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBBdXRoSWRUb2tlblNpZ25BbGcge1xyXG4gIFBTMjU2ID0gMSxcclxuICBSUzI1NiA9IDJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBYnN0cmFjdEF1dGhBY2NvdW50IHtcclxuICB1aWQ/OiBzdHJpbmc7XHJcbiAgb3BlbklkOiBzdHJpbmc7XHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG4gIHN0YXR1czogbnVtYmVyO1xyXG4gIGdlbmRlcjogR2VuZGVyO1xyXG4gIHNlcnZpY2VDb3VudHJ5Q29kZT86IHN0cmluZztcclxuICBjb3VudHJ5Q29kZT86IHN0cmluZztcclxuICB1bmlvbklkOiBzdHJpbmc7XHJcbiAgZW1haWw/OiBzdHJpbmc7XHJcbiAgZXh0ZW5zaW9uU2NvcGVzOiBzdHJpbmdbXTtcclxuICBpZFRva2VuPzogc3RyaW5nO1xyXG4gIGV4cHJlc3Npb25UaW1lU2VjczogbnVtYmVyO1xyXG4gIGdpdmVuTmFtZTogc3RyaW5nO1xyXG4gIGZhbWlseU5hbWU6IHN0cmluZztcclxuICBjYXJyaWVySWQ6IG51bWJlcjtcclxuICBhZ2VSYW5nZT86IHN0cmluZztcclxuICBob21lWm9uZTogbnVtYmVyO1xyXG4gIGF1dGhvcml6ZWRTY29wZXM6IHN0cmluZ1tdO1xyXG4gIGF2YXRhclVyaVN0cmluZzogc3RyaW5nO1xyXG4gIGF1dGhvcml6YXRpb25Db2RlPzogc3RyaW5nO1xyXG4gIHJlcXVlc3RlZFNjb3Blczogc3RyaW5nW107XHJcbiAgYWNjb3VudD86IEFjY291bnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aEh1YXdlaUlkIGV4dGVuZHMgQWJzdHJhY3RBdXRoQWNjb3VudCB7XHJcbiAgYWdlUmFuZ2VGbGFnOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aEFjY291bnQgZXh0ZW5kcyBBYnN0cmFjdEF1dGhBY2NvdW50IHtcclxuICBhY2NvdW50RmxhZzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhCdWlsZGVyIHtcclxuICBvcGVuSWQ6IHN0cmluZztcclxuICB1aWQ6IHN0cmluZztcclxuICBwaG90b1VyaVN0cmluZzogc3RyaW5nO1xyXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgYWNjZXNzVG9rZW46IHN0cmluZztcclxuICBzZXJ2aWNlQ291bnRyeUNvZGU6IHN0cmluZztcclxuICBnZW5kZXI6IEdlbmRlcjtcclxuICBzdGF0dXM6IG51bWJlcjtcclxuICB1bmlvbklkOiBzdHJpbmc7XHJcbiAgc2VydmVyQXV0aENvZGU6IHN0cmluZztcclxuICBjb3VudHJ5Q29kZTogc3RyaW5nO1xyXG4gIGdyYW50ZWRTY29wZXM6IEF1dGhTY29wZUxpc3RbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb250YWluU2NvcGVzUmVzdWx0IHtcclxuICBjb250YWluU2NvcGVzOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRG9tYWluSW5mbyB7XHJcbiAgZG9tYWluOiBzdHJpbmc7XHJcbiAgaXNVc2VIdHRwczogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENvb2tpZSB7XHJcbiAgY29va2llTmFtZTogc3RyaW5nO1xyXG4gIGNvb2tpZVZhbHVlOiBzdHJpbmc7XHJcbiAgZG9tYWluOiBzdHJpbmc7XHJcbiAgcGF0aDogc3RyaW5nO1xyXG4gIGlzSHR0cE9ubHk6IGJvb2xlYW47XHJcbiAgaXNTZWN1cmU6IGJvb2xlYW47XHJcbiAgbWF4QWdlOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBY2NvdW50IHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFjY291bnRJY29uIHtcclxuICBpY29uOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaWduSW5EYXRhIHtcclxuICBhdXRoUmVxdWVzdE9wdGlvbjogQXV0aFJlcXVlc3RPcHRpb25bXTtcclxuICBhdXRoUGFyYW0/OiBBdXRoUGFyYW1zO1xyXG4gIGF1dGhTY29wZUxpc3Q/OiBBdXRoU2NvcGVMaXN0W107XHJcbiAgYXV0aElkVG9rZW5TaWduQWxnPzogQXV0aElkVG9rZW5TaWduQWxnO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25JbkRhdGEge1xyXG4gIGF1dGhSZXF1ZXN0T3B0aW9uOiBBdXRoUmVxdWVzdE9wdGlvbltdLFxyXG4gIGF1dGhQYXJhbT86IEF1dGhQYXJhbXMsXHJcbiAgYXV0aFNjb3BlTGlzdD86IEF1dGhTY29wZUxpc3RbXSxcclxuICBhdXRoSWRUb2tlblNpZ25BbGc/OiBBdXRoSWRUb2tlblNpZ25BbGdcclxufVxyXG5cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNBY2NvdW50JyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWNjb3VudCcsXHJcbiAgcGx1Z2luUmVmOiAnSE1TQWNjb3VudCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNBY2NvdW50IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2lnbkluKHNpZ25JbkRhdGE6IFNpZ25JbkRhdGEsIHBhY2thZ2VOYW1lOnN0cmluZyk6IFByb21pc2U8QXV0aEh1YXdlaUlkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNpZ25PdXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGNhbmNlbEF1dGhvcml6YXRpb24oKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNpbGVudFNpZ25JbihhdXRoUGFyYW1zOiBBdXRoUGFyYW1zLHBhY2thZ2VOYW1lOnN0cmluZyk6IFByb21pc2U8QXV0aEh1YXdlaUlkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGVuYWJsZUxvZ2dlcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNBY2NvdW50QXV0aFNlcnZpY2UnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hY2NvdW50JyxcclxuICBwbHVnaW5SZWY6ICdITVNBY2NvdW50QXV0aFNlcnZpY2UnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TQWNjb3VudEF1dGhTZXJ2aWNlIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2lnbkluKHNpZ25JbkRhdGE6IFNpZ25JbkRhdGEsIHBhY2thZ2VOYW1lOnN0cmluZyk6IFByb21pc2U8QXV0aEFjY291bnQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0SW5kZXBlbmRlbnRTaWduSW4oYWNjZXNzVG9rZW46c3RyaW5nKTogUHJvbWlzZTxBdXRoQWNjb3VudD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzaWduT3V0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBjYW5jZWxBdXRob3JpemF0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzaWxlbnRTaWduSW4oYXV0aFBhcmFtczogQXV0aFBhcmFtcywgcGFja2FnZU5hbWU6c3RyaW5nKTogUHJvbWlzZTxBdXRoQWNjb3VudD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBnZXRDaGFubmVsKCk6IFByb21pc2U8QWNjb3VudEljb24+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRoZW1lIHtcclxuICBUSEVNRV9OT19USVRMRSA9IDAsXHJcbiAgVEhFTUVfRlVMTF9USVRMRSA9IDFcclxufVxyXG5leHBvcnQgZW51bSBDb2xvclBvbGljeSB7XHJcbiAgQ09MT1JfUE9MSUNZX1JFRCA9IDEsXHJcbiAgQ09MT1JfUE9MSUNZX1dISVRFID0gMixcclxuICBDT0xPUl9QT0xJQ1lfV0hJVEVfV0lUSF9CT1JERVIgPSAzLFxyXG4gIENPTE9SX1BPTElDWV9CTEFDSyA9IDQsXHJcbiAgQ09MT1JfUE9MSUNZX0dSQVkgPSA1XHJcbn1cclxuZXhwb3J0IGVudW0gQ29ybmVyUmFkaXVzIHtcclxuICBDT1JORVJfUkFESVVTX0xBUkdFID0gLTEsXHJcbiAgQ09STkVSX1JBRElVU19NRURJVU0gPSAtMixcclxuICBDT1JORVJfUkFESVVTX1NNQUxMID0gLTNcclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU0h1YXdlaUlkQXV0aEJ1dHRvbicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFjY291bnQnLFxyXG4gIHBsdWdpblJlZjogJ0hNU0h1YXdlaUlkQXV0aEJ1dHRvbicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNIdWF3ZWlJZEF1dGhCdXR0b24gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEh1YXdlaUlkQXV0aEJ1dHRvbihlZGl0dGVkQnV0dG9uOiBzdHJpbmcsIHRoZW1lOiBUaGVtZSwgY29sb3JQb2xpY3k6IENvbG9yUG9saWN5LCBjb3JuZXJSYWRpdXM6IENvcm5lclJhZGl1cyk6IHZvaWQge1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbn0gXHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSE1TSHVhd2VpSWRBdXRoTWFuYWdlcicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFjY291bnQnLFxyXG4gIHBsdWdpblJlZjogJ0hNU0h1YXdlaUlkQXV0aE1hbmFnZXInLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TSHVhd2VpSWRBdXRoTWFuYWdlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldEF1dGhSZXN1bHQocGFja2FnZU5hbWU6U3RyaW5nKTogUHJvbWlzZTxBdXRoSHVhd2VpSWQ+IHtcclxuICAgIHJldHVybjtcclxufVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldEF1dGhSZXN1bHRXaXRoU2NvcGUoYXV0aEh1YXdlaUlkOiBBdXRoU2NvcGVMaXN0W10scGFja2FnZU5hbWU6c3RyaW5nKTogUHJvbWlzZTxBdXRoSHVhd2VpSWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY29udGFpblNjb3BlcyhhdXRoSHVhd2VpSWQ6IEF1dGhCdWlsZGVyLCBhdXRoU2NvcGVMaXN0OiBBdXRoU2NvcGVMaXN0W10sIHBhY2thZ2VOYW1lOnN0cmluZyk6IFByb21pc2U8Q29udGFpblNjb3Blc1Jlc3VsdD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBhZGRBdXRoU2NvcGVzKHJlcXVlc3RDb2RlOiBudW1iZXIsIGF1dGhTY29wZUxpc3Q6IEF1dGhTY29wZUxpc3RbXSwgcGFja2FnZU5hbWU6c3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSE1TQWNjb3VudEF1dGhNYW5hZ2VyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWNjb3VudCcsXHJcbiAgcGx1Z2luUmVmOiAnSE1TQWNjb3VudEF1dGhNYW5hZ2VyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0FjY291bnRBdXRoTWFuYWdlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldEF1dGhSZXN1bHQocGFja2FnZU5hbWU6c3RyaW5nKTogUHJvbWlzZTxBdXRoQWNjb3VudD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBnZXRBdXRoUmVzdWx0V2l0aFNjb3BlKGF1dGhBY2NvdW50OiBBdXRoU2NvcGVMaXN0W10sIHBhY2thZ2VOYW1lOnN0cmluZyk6IFByb21pc2U8QXV0aEFjY291bnQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY29udGFpblNjb3BlcyhhdXRoQWNjb3VudDogQXV0aEJ1aWxkZXIsIGF1dGhTY29wZUxpc3Q6IEF1dGhTY29wZUxpc3RbXSwgcGFja2FnZU5hbWU6c3RyaW5nKTogUHJvbWlzZTxDb250YWluU2NvcGVzUmVzdWx0PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGFkZEF1dGhTY29wZXMocmVxdWVzdENvZGU6IG51bWJlciwgYXV0aFNjb3BlTGlzdDogQXV0aFNjb3BlTGlzdFtdLCBwYWNrYWdlTmFtZTpzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNIdWF3ZWlJZEF1dGhUb29sJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWNjb3VudCcsXHJcbiAgcGx1Z2luUmVmOiAnSE1TSHVhd2VpSWRBdXRoVG9vbCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNIdWF3ZWlJZEF1dGhUb29sIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZGVsZXRlQXV0aEluZm8oYWNjZXNzVG9rZW46IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgcmVxdWVzdFVuaW9uSWQoaHVhd2VpQWNjb3VudE5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHJlcXVlc3RBY2Nlc3NUb2tlbihhY2NvdW50OiBBY2NvdW50LCBhdXRoU2NvcGVMaXN0OiBBdXRoU2NvcGVMaXN0W10pOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNOZXR3b3JrVG9vbCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFjY291bnQnLFxyXG4gIHBsdWdpblJlZjogJ0hNU05ldHdvcmtUb29sJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU05ldHdvcmtUb29sIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYnVpbGROZXR3b3JrVVJMKGRvbWFpbkh0dHBzOiBEb21haW5JbmZvKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICByZXR1cm47XHJcbn1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBidWlsZE5ldHdvcmtDb29raWUoY29va2llOiBDb29raWUpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNSZWFkU01TTWFuYWdlcicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFjY291bnQnLFxyXG4gIHBsdWdpblJlZjogJ0hNU1JlYWRTTVNNYW5hZ2VyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU1JlYWRTTVNNYW5hZ2VyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc21zVmVyaWZpY2F0aW9uQ29kZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gIHJldHVybjtcclxufVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIG9idGFpbkhhc2hDb2RlKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHN0YXJ0Q29uc2VudChwaG9uZU51bWJlcjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxufVxyXG59Il19