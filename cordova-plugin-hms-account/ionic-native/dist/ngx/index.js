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
var HMSAccount = /** @class */ (function (_super) {
    __extends(HMSAccount, _super);
    function HMSAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSAccount.prototype.signIn = function (signInData, packageName) { return cordova(this, "signIn", { "otherPromise": true }, arguments); };
    HMSAccount.prototype.signOut = function () { return cordova(this, "signOut", { "otherPromise": true }, arguments); };
    HMSAccount.prototype.cancelAuthorization = function () { return cordova(this, "cancelAuthorization", { "otherPromise": true }, arguments); };
    HMSAccount.prototype.silentSignIn = function (authParams, packageName) { return cordova(this, "silentSignIn", { "otherPromise": true }, arguments); };
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
    HMSAccountAuthService.prototype.signIn = function (signInData, packageName) { return cordova(this, "signIn", { "otherPromise": true }, arguments); };
    HMSAccountAuthService.prototype.getIndependentSignIn = function (accessToken) { return cordova(this, "getIndependentSignIn", { "otherPromise": true }, arguments); };
    HMSAccountAuthService.prototype.signOut = function () { return cordova(this, "signOut", { "otherPromise": true }, arguments); };
    HMSAccountAuthService.prototype.cancelAuthorization = function () { return cordova(this, "cancelAuthorization", { "otherPromise": true }, arguments); };
    HMSAccountAuthService.prototype.silentSignIn = function (authParams, packageName) { return cordova(this, "silentSignIn", { "otherPromise": true }, arguments); };
    HMSAccountAuthService.prototype.getChannel = function () { return cordova(this, "getChannel", { "otherPromise": true }, arguments); };
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
    HMSHuaweiIdAuthManager.prototype.getAuthResult = function (packageName) { return cordova(this, "getAuthResult", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthManager.prototype.getAuthResultWithScope = function (authHuaweiId, packageName) { return cordova(this, "getAuthResultWithScope", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthManager.prototype.containScopes = function (authHuaweiId, authScopeList, packageName) { return cordova(this, "containScopes", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthManager.prototype.addAuthScopes = function (requestCode, authScopeList, packageName) { return cordova(this, "addAuthScopes", { "otherPromise": true }, arguments); };
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
    HMSAccountAuthManager.prototype.getAuthResult = function (packageName) { return cordova(this, "getAuthResult", { "otherPromise": true }, arguments); };
    HMSAccountAuthManager.prototype.getAuthResultWithScope = function (authAccount, packageName) { return cordova(this, "getAuthResultWithScope", { "otherPromise": true }, arguments); };
    HMSAccountAuthManager.prototype.containScopes = function (authAccount, authScopeList, packageName) { return cordova(this, "containScopes", { "otherPromise": true }, arguments); };
    HMSAccountAuthManager.prototype.addAuthScopes = function (requestCode, authScopeList, packageName) { return cordova(this, "addAuthScopes", { "otherPromise": true }, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7O0FBRUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBRXhFLE1BQU0sQ0FBTixJQUFZLGFBS1g7QUFMRCxXQUFZLGFBQWE7SUFDdkIsMkRBQTBDLENBQUE7SUFDMUMsa0NBQWlCLENBQUE7SUFDakIsZ0NBQWUsQ0FBQTtJQUNmLG9DQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFMVyxhQUFhLEtBQWIsYUFBYSxRQUt4QjtBQUNELE1BQU0sQ0FBTixJQUFZLE1BS1g7QUFMRCxXQUFZLE1BQU07SUFDaEIsMENBQVksQ0FBQTtJQUNaLG1DQUFRLENBQUE7SUFDUix1Q0FBVSxDQUFBO0lBQ1YsbURBQWdCLENBQUE7QUFDbEIsQ0FBQyxFQUxXLE1BQU0sS0FBTixNQUFNLFFBS2pCO0FBRUQsTUFBTSxDQUFOLElBQVksaUJBWVg7QUFaRCxXQUFZLGlCQUFpQjtJQUMzQiwwQ0FBcUIsQ0FBQTtJQUNyQixvQ0FBZSxDQUFBO0lBQ2YsK0NBQTBCLENBQUE7SUFDMUIsOENBQXlCLENBQUE7SUFDekIseURBQW9DLENBQUE7SUFDcEMsc0NBQWlCLENBQUE7SUFDakIsbUVBQThDLENBQUE7SUFDOUMsdURBQWtDLENBQUE7SUFDbEMscURBQWdDLENBQUE7SUFDaEMsK0RBQTBDLENBQUE7SUFDMUMsbURBQThCLENBQUE7QUFDaEMsQ0FBQyxFQVpXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFZNUI7QUFFRCxNQUFNLENBQU4sSUFBWSxVQUdYO0FBSEQsV0FBWSxVQUFVO0lBQ3BCLHVFQUF5RCxDQUFBO0lBQ3pELGlGQUFtRSxDQUFBO0FBQ3JFLENB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O0lBS3ZDLDJDQUFrQixhQUFDLE1BQWM7Ozs7OztnQkFSbEMsVUFBVTs7eUJBM1ZYO0VBNFZvQyxpQkFBaUI7U0FBeEMsY0FBYzs7SUFtQlkscUNBQWlCOzs7O0lBRXRELCtDQUFtQjtJQUtuQiwwQ0FBYztJQUtkLHdDQUFZLGFBQUMsV0FBbUI7Ozs7OztnQkFiakMsVUFBVTs7NEJBOVdYO0VBK1d1QyxpQkFBaUI7U0FBM0MsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBDb3B5cmlnaHQgMjAyMC0yMDIyLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxuICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgZW51bSBBdXRoU2NvcGVMaXN0IHtcbiAgR0FNRSA9IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9hdXRoL2dhbWVzXCIsXG4gIE9QRU5JRCA9IFwib3BlbmlkXCIsXG4gIEVNQUlMID0gXCJlbWFpbFwiLFxuICBQUk9GSUxFID0gXCJwcm9maWxlXCJcbn1cbmV4cG9ydCBlbnVtIEdlbmRlciB7XG4gIFVOS05PV04gPSAtMSxcbiAgTUFMRSA9IDAsXG4gIEZFTUFMRSA9IDEsXG4gIENPTkZJREVOVElBTCA9IDJcbn1cblxuZXhwb3J0IGVudW0gQXV0aFJlcXVlc3RPcHRpb24ge1xuICBTQ09QRV9FTUFJTCA9IFwiZW1haWxcIixcbiAgU0NPUEVfSUQgPSBcImlkXCIsXG4gIFNDT1BFX0lEX1RPS0VOID0gXCJpZFRva2VuXCIsXG4gIFNDT1BFX1BST0ZJTEUgPSBcInByb2ZpbGVcIixcbiAgU0NPUEVfTU9CSUxFX05VTUJFUiA9IFwibW9iaWxlTnVtYmVyXCIsXG4gIFNDT1BFX1VJRCA9IFwidWlkXCIsXG4gIFNDT1BFX0FVVEhPUklaQVRJT05fQ09ERSA9IFwiYXV0aG9yaXphdGlvbkNvZGVcIixcbiAgU0NPUEVfQUNDRVNTX1RPS0VOID0gXCJhY2Nlc3NUb2tlblwiLFxuICBTQ09QRV9ESUFMT0dfQVVUSCA9IFwiZGlhbG9nQXV0aFwiLFxuICBTQ09QRV9TSElQUElOR19BRERSRVNTID0gXCJzaGlwcGluZ0FkZHJlc3NcIixcbiAgU0NPUEVfQ0FSUklFUl9JRCA9IFwiY2FycmllcklkXCJcbn1cblxuZXhwb3J0IGVudW0gQXV0aFBhcmFtcyB7XG4gIERFRkFVTFRfQVVUSF9SRVFVRVNUX1BBUkFNID0gXCJERUZBVUxUX0FVVEhfUkVRVUVTVF9QQVJBTVwiLFxuICBERUZBVUxUX0FVVEhfUkVRVUVTVF9QQVJBTV9HQU1FID0gXCJERUZBVUxUX0FVVEhfUkVRVUVTVF9QQVJBTV9HQU1FXCJcbn1cblxuZXhwb3J0IGVudW0gUGFja2FnZU5hbWUge1xuICBIV0lEID0gXCJIV0lEXCIsXG4gIEFDQ09VTlQgPSBcIkFDQ09VTlRcIlxufVxuXG5leHBvcnQgZW51bSBBdXRoSWRUb2tlblNpZ25BbGcge1xuICBQUzI1NiA9IDEsXG4gIFJTMjU2ID0gMlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFic3RyYWN0QXV0aEFjY291bnQge1xuICB1aWQ/OiBzdHJpbmc7XG4gIG9wZW5JZDogc3RyaW5nO1xuICBkaXNwbGF5TmFtZTogc3RyaW5nO1xuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuICBzdGF0dXM6IG51bWJlcjtcbiAgZ2VuZGVyOiBHZW5kZXI7XG4gIHNlcnZpY2VDb3VudHJ5Q29kZT86IHN0cmluZztcbiAgY291bnRyeUNvZGU/OiBzdHJpbmc7XG4gIHVuaW9uSWQ6IHN0cmluZztcbiAgZW1haWw/OiBzdHJpbmc7XG4gIGV4dGVuc2lvblNjb3Blczogc3RyaW5nW107XG4gIGlkVG9rZW4/OiBzdHJpbmc7XG4gIGV4cHJlc3Npb25UaW1lU2VjczogbnVtYmVyO1xuICBnaXZlbk5hbWU6IHN0cmluZztcbiAgZmFtaWx5TmFtZTogc3RyaW5nO1xuICBjYXJyaWVySWQ6IG51bWJlcjtcbiAgYWdlUmFuZ2U/OiBzdHJpbmc7XG4gIGhvbWVab25lOiBudW1iZXI7XG4gIGF1dGhvcml6ZWRTY29wZXM6IHN0cmluZ1tdO1xuICBhdmF0YXJVcmlTdHJpbmc6IHN0cmluZztcbiAgYXV0aG9yaXphdGlvbkNvZGU/OiBzdHJpbmc7XG4gIHJlcXVlc3RlZFNjb3Blczogc3RyaW5nW107XG4gIGFjY291bnQ/OiBBY2NvdW50O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhIdWF3ZWlJZCBleHRlbmRzIEFic3RyYWN0QXV0aEFjY291bnQge1xuICBhZ2VSYW5nZUZsYWc6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBdXRoQWNjb3VudCBleHRlbmRzIEFic3RyYWN0QXV0aEFjY291bnQge1xuICBhY2NvdW50RmxhZzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhCdWlsZGVyIHtcbiAgb3BlbklkOiBzdHJpbmc7XG4gIHVpZDogc3RyaW5nO1xuICBwaG90b1VyaVN0cmluZzogc3RyaW5nO1xuICBkaXNwbGF5TmFtZTogc3RyaW5nO1xuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuICBzZXJ2aWNlQ291bnRyeUNvZGU6IHN0cmluZztcbiAgZ2VuZGVyOiBHZW5kZXI7XG4gIHN0YXR1czogbnVtYmVyO1xuICB1bmlvbklkOiBzdHJpbmc7XG4gIHNlcnZlckF1dGhDb2RlOiBzdHJpbmc7XG4gIGNvdW50cnlDb2RlOiBzdHJpbmc7XG4gIGdyYW50ZWRTY29wZXM6IEF1dGhTY29wZUxpc3RbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb250YWluU2NvcGVzUmVzdWx0IHtcbiAgY29udGFpblNjb3BlczogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRG9tYWluSW5mbyB7XG4gIGRvbWFpbjogc3RyaW5nO1xuICBpc1VzZUh0dHBzOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBDb29raWUge1xuICBjb29raWVOYW1lOiBzdHJpbmc7XG4gIGNvb2tpZVZhbHVlOiBzdHJpbmc7XG4gIGRvbWFpbjogc3RyaW5nO1xuICBwYXRoOiBzdHJpbmc7XG4gIGlzSHR0cE9ubHk6IGJvb2xlYW47XG4gIGlzU2VjdXJlOiBib29sZWFuO1xuICBtYXhBZ2U6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQWNjb3VudCB7XG4gIHR5cGU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjY291bnRJY29uIHtcbiAgaWNvbjogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25JbkRhdGEge1xuICBhdXRoUmVxdWVzdE9wdGlvbjogQXV0aFJlcXVlc3RPcHRpb25bXTtcbiAgYXV0aFBhcmFtPzogQXV0aFBhcmFtcztcbiAgYXV0aFNjb3BlTGlzdD86IEF1dGhTY29wZUxpc3RbXTtcbiAgYXV0aElkVG9rZW5TaWduQWxnPzogQXV0aElkVG9rZW5TaWduQWxnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25JbkRhdGEge1xuICBhdXRoUmVxdWVzdE9wdGlvbjogQXV0aFJlcXVlc3RPcHRpb25bXSxcbiAgYXV0aFBhcmFtPzogQXV0aFBhcmFtcyxcbiAgYXV0aFNjb3BlTGlzdD86IEF1dGhTY29wZUxpc3RbXSxcbiAgYXV0aElkVG9rZW5TaWduQWxnPzogQXV0aElkVG9rZW5TaWduQWxnXG59XG5cblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdITVNBY2NvdW50JyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFjY291bnQnLFxuICBwbHVnaW5SZWY6ICdITVNBY2NvdW50JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNBY2NvdW50IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBzaWduSW4oc2lnbkluRGF0YTogU2lnbkluRGF0YSwgcGFja2FnZU5hbWU6c3RyaW5nKTogUHJvbWlzZTxBdXRoSHVhd2VpSWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBzaWduT3V0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGNhbmNlbEF1dGhvcml6YXRpb24oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgc2lsZW50U2lnbkluKGF1dGhQYXJhbXM6IEF1dGhQYXJhbXMscGFja2FnZU5hbWU6c3RyaW5nKTogUHJvbWlzZTxBdXRoSHVhd2VpSWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdITVNBY2NvdW50QXV0aFNlcnZpY2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWNjb3VudCcsXG4gIHBsdWdpblJlZjogJ0hNU0FjY291bnRBdXRoU2VydmljZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TQWNjb3VudEF1dGhTZXJ2aWNlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBzaWduSW4oc2lnbkluRGF0YTogU2lnbkluRGF0YSwgcGFja2FnZU5hbWU6c3RyaW5nKTogUHJvbWlzZTxBdXRoQWNjb3VudD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGdldEluZGVwZW5kZW50U2lnbkluKGFjY2Vzc1Rva2VuOnN0cmluZyk6IFByb21pc2U8QXV0aEFjY291bnQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBzaWduT3V0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGNhbmNlbEF1dGhvcml6YXRpb24oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgc2lsZW50U2lnbkluKGF1dGhQYXJhbXM6IEF1dGhQYXJhbXMsIHBhY2thZ2VOYW1lOnN0cmluZyk6IFByb21pc2U8QXV0aEFjY291bnQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBnZXRDaGFubmVsKCk6IFByb21pc2U8QWNjb3VudEljb24+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZXhwb3J0IGVudW0gVGhlbWUge1xuICBUSEVNRV9OT19USVRMRSA9IDAsXG4gIFRIRU1FX0ZVTExfVElUTEUgPSAxXG59XG5leHBvcnQgZW51bSBDb2xvclBvbGljeSB7XG4gIENPTE9SX1BPTElDWV9SRUQgPSAxLFxuICBDT0xPUl9QT0xJQ1lfV0hJVEUgPSAyLFxuICBDT0xPUl9QT0xJQ1lfV0hJVEVfV0lUSF9CT1JERVIgPSAzLFxuICBDT0xPUl9QT0xJQ1lfQkxBQ0sgPSA0LFxuICBDT0xPUl9QT0xJQ1lfR1JBWSA9IDVcbn1cbmV4cG9ydCBlbnVtIENvcm5lclJhZGl1cyB7XG4gIENPUk5FUl9SQURJVVNfTEFSR0UgPSAtMSxcbiAgQ09STkVSX1JBRElVU19NRURJVU0gPSAtMixcbiAgQ09STkVSX1JBRElVU19TTUFMTCA9IC0zXG59XG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0hNU0h1YXdlaUlkQXV0aEJ1dHRvbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hY2NvdW50JyxcbiAgcGx1Z2luUmVmOiAnSE1TSHVhd2VpSWRBdXRoQnV0dG9uJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNIdWF3ZWlJZEF1dGhCdXR0b24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhKClcbiAgZ2V0SHVhd2VpSWRBdXRoQnV0dG9uKGVkaXR0ZWRCdXR0b246IHN0cmluZywgdGhlbWU6IFRoZW1lLCBjb2xvclBvbGljeTogQ29sb3JQb2xpY3ksIGNvcm5lclJhZGl1czogQ29ybmVyUmFkaXVzKTogdm9pZCB7XG4gICAgcmV0dXJuO1xufVxufSBcblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdITVNIdWF3ZWlJZEF1dGhNYW5hZ2VyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFjY291bnQnLFxuICBwbHVnaW5SZWY6ICdITVNIdWF3ZWlJZEF1dGhNYW5hZ2VyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNIdWF3ZWlJZEF1dGhNYW5hZ2VyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBnZXRBdXRoUmVzdWx0KHBhY2thZ2VOYW1lOlN0cmluZyk6IFByb21pc2U8QXV0aEh1YXdlaUlkPiB7XG4gICAgcmV0dXJuO1xufVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGdldEF1dGhSZXN1bHRXaXRoU2NvcGUoYXV0aEh1YXdlaUlkOiBBdXRoU2NvcGVMaXN0W10scGFja2FnZU5hbWU6c3RyaW5nKTogUHJvbWlzZTxBdXRoSHVhd2VpSWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBjb250YWluU2NvcGVzKGF1dGhIdWF3ZWlJZDogQXV0aEJ1aWxkZXIsIGF1dGhTY29wZUxpc3Q6IEF1dGhTY29wZUxpc3RbXSwgcGFja2FnZU5hbWU6c3RyaW5nKTogUHJvbWlzZTxDb250YWluU2NvcGVzUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgYWRkQXV0aFNjb3BlcyhyZXF1ZXN0Q29kZTogbnVtYmVyLCBhdXRoU2NvcGVMaXN0OiBBdXRoU2NvcGVMaXN0W10sIHBhY2thZ2VOYW1lOnN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0hNU0FjY291bnRBdXRoTWFuYWdlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hY2NvdW50JyxcbiAgcGx1Z2luUmVmOiAnSE1TQWNjb3VudEF1dGhNYW5hZ2VyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNBY2NvdW50QXV0aE1hbmFnZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGdldEF1dGhSZXN1bHQocGFja2FnZU5hbWU6c3RyaW5nKTogUHJvbWlzZTxBdXRoQWNjb3VudD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGdldEF1dGhSZXN1bHRXaXRoU2NvcGUoYXV0aEFjY291bnQ6IEF1dGhTY29wZUxpc3RbXSwgcGFja2FnZU5hbWU6c3RyaW5nKTogUHJvbWlzZTxBdXRoQWNjb3VudD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGNvbnRhaW5TY29wZXMoYXV0aEFjY291bnQ6IEF1dGhCdWlsZGVyLCBhdXRoU2NvcGVMaXN0OiBBdXRoU2NvcGVMaXN0W10sIHBhY2thZ2VOYW1lOnN0cmluZyk6IFByb21pc2U8Q29udGFpblNjb3Blc1Jlc3VsdD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGFkZEF1dGhTY29wZXMocmVxdWVzdENvZGU6IG51bWJlciwgYXV0aFNjb3BlTGlzdDogQXV0aFNjb3BlTGlzdFtdLCBwYWNrYWdlTmFtZTpzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdITVNIdWF3ZWlJZEF1dGhUb29sJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFjY291bnQnLFxuICBwbHVnaW5SZWY6ICdITVNIdWF3ZWlJZEF1dGhUb29sJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNIdWF3ZWlJZEF1dGhUb29sIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBkZWxldGVBdXRoSW5mbyhhY2Nlc3NUb2tlbjogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xufVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIHJlcXVlc3RVbmlvbklkKGh1YXdlaUFjY291bnROYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIHJlcXVlc3RBY2Nlc3NUb2tlbihhY2NvdW50OiBBY2NvdW50LCBhdXRoU2NvcGVMaXN0OiBBdXRoU2NvcGVMaXN0W10pOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbn1cbn1cblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdITVNOZXR3b3JrVG9vbCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hY2NvdW50JyxcbiAgcGx1Z2luUmVmOiAnSE1TTmV0d29ya1Rvb2wnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU05ldHdvcmtUb29sIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBidWlsZE5ldHdvcmtVUkwoZG9tYWluSHR0cHM6IERvbWFpbkluZm8pOiBQcm9taXNlPHN0cmluZz4ge1xuICByZXR1cm47XG59XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgYnVpbGROZXR3b3JrQ29va2llKGNvb2tpZTogQ29va2llKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG59XG59XG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSE1TUmVhZFNNU01hbmFnZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWNjb3VudCcsXG4gIHBsdWdpblJlZjogJ0hNU1JlYWRTTVNNYW5hZ2VyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNSZWFkU01TTWFuYWdlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgc21zVmVyaWZpY2F0aW9uQ29kZSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICByZXR1cm47XG59XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgb2J0YWluSGFzaENvZGUoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBzdGFydENvbnNlbnQocGhvbmVOdW1iZXI6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xufVxufSJdfQ==