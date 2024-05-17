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

import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
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
    HMSAccount.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSAccount, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HMSAccount.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSAccount });
    HMSAccount.pluginName = "HMSAccount";
    HMSAccount.plugin = "cordova-plugin-hms-account";
    HMSAccount.pluginRef = "HMSAccount";
    HMSAccount.platforms = ["Android"];
    HMSAccount = __decorate([], HMSAccount);
    return HMSAccount;
}(AwesomeCordovaNativePlugin));
export { HMSAccount };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSAccount, decorators: [{
            type: Injectable
        }], propDecorators: { signIn: [], signOut: [], cancelAuthorization: [], silentSignIn: [], enableLogger: [], disableLogger: [] } });
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
    HMSAccountAuthService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSAccountAuthService, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HMSAccountAuthService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSAccountAuthService });
    HMSAccountAuthService.pluginName = "HMSAccountAuthService";
    HMSAccountAuthService.plugin = "cordova-plugin-hms-account";
    HMSAccountAuthService.pluginRef = "HMSAccountAuthService";
    HMSAccountAuthService.platforms = ["Android"];
    HMSAccountAuthService = __decorate([], HMSAccountAuthService);
    return HMSAccountAuthService;
}(AwesomeCordovaNativePlugin));
export { HMSAccountAuthService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSAccountAuthService, decorators: [{
            type: Injectable
        }], propDecorators: { signIn: [], getIndependentSignIn: [], signOut: [], cancelAuthorization: [], silentSignIn: [], getChannel: [] } });
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
    HMSHuaweiIdAuthButton.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSHuaweiIdAuthButton, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HMSHuaweiIdAuthButton.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSHuaweiIdAuthButton });
    HMSHuaweiIdAuthButton.pluginName = "HMSHuaweiIdAuthButton";
    HMSHuaweiIdAuthButton.plugin = "cordova-plugin-hms-account";
    HMSHuaweiIdAuthButton.pluginRef = "HMSHuaweiIdAuthButton";
    HMSHuaweiIdAuthButton.platforms = ["Android"];
    HMSHuaweiIdAuthButton = __decorate([], HMSHuaweiIdAuthButton);
    return HMSHuaweiIdAuthButton;
}(AwesomeCordovaNativePlugin));
export { HMSHuaweiIdAuthButton };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSHuaweiIdAuthButton, decorators: [{
            type: Injectable
        }], propDecorators: { getHuaweiIdAuthButton: [] } });
var HMSHuaweiIdAuthManager = /** @class */ (function (_super) {
    __extends(HMSHuaweiIdAuthManager, _super);
    function HMSHuaweiIdAuthManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSHuaweiIdAuthManager.prototype.getAuthResult = function (packageName) { return cordova(this, "getAuthResult", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthManager.prototype.getAuthResultWithScope = function (authHuaweiId, packageName) { return cordova(this, "getAuthResultWithScope", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthManager.prototype.containScopes = function (authHuaweiId, authScopeList, packageName) { return cordova(this, "containScopes", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthManager.prototype.addAuthScopes = function (requestCode, authScopeList, packageName) { return cordova(this, "addAuthScopes", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthManager.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSHuaweiIdAuthManager, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HMSHuaweiIdAuthManager.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSHuaweiIdAuthManager });
    HMSHuaweiIdAuthManager.pluginName = "HMSHuaweiIdAuthManager";
    HMSHuaweiIdAuthManager.plugin = "cordova-plugin-hms-account";
    HMSHuaweiIdAuthManager.pluginRef = "HMSHuaweiIdAuthManager";
    HMSHuaweiIdAuthManager.platforms = ["Android"];
    HMSHuaweiIdAuthManager = __decorate([], HMSHuaweiIdAuthManager);
    return HMSHuaweiIdAuthManager;
}(AwesomeCordovaNativePlugin));
export { HMSHuaweiIdAuthManager };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSHuaweiIdAuthManager, decorators: [{
            type: Injectable
        }], propDecorators: { getAuthResult: [], getAuthResultWithScope: [], containScopes: [], addAuthScopes: [] } });
var HMSAccountAuthManager = /** @class */ (function (_super) {
    __extends(HMSAccountAuthManager, _super);
    function HMSAccountAuthManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSAccountAuthManager.prototype.getAuthResult = function (packageName) { return cordova(this, "getAuthResult", { "otherPromise": true }, arguments); };
    HMSAccountAuthManager.prototype.getAuthResultWithScope = function (authAccount, packageName) { return cordova(this, "getAuthResultWithScope", { "otherPromise": true }, arguments); };
    HMSAccountAuthManager.prototype.containScopes = function (authAccount, authScopeList, packageName) { return cordova(this, "containScopes", { "otherPromise": true }, arguments); };
    HMSAccountAuthManager.prototype.addAuthScopes = function (requestCode, authScopeList, packageName) { return cordova(this, "addAuthScopes", { "otherPromise": true }, arguments); };
    HMSAccountAuthManager.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSAccountAuthManager, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HMSAccountAuthManager.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSAccountAuthManager });
    HMSAccountAuthManager.pluginName = "HMSAccountAuthManager";
    HMSAccountAuthManager.plugin = "cordova-plugin-hms-account";
    HMSAccountAuthManager.pluginRef = "HMSAccountAuthManager";
    HMSAccountAuthManager.platforms = ["Android"];
    HMSAccountAuthManager = __decorate([], HMSAccountAuthManager);
    return HMSAccountAuthManager;
}(AwesomeCordovaNativePlugin));
export { HMSAccountAuthManager };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSAccountAuthManager, decorators: [{
            type: Injectable
        }], propDecorators: { getAuthResult: [], getAuthResultWithScope: [], containScopes: [], addAuthScopes: [] } });
var HMSHuaweiIdAuthTool = /** @class */ (function (_super) {
    __extends(HMSHuaweiIdAuthTool, _super);
    function HMSHuaweiIdAuthTool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSHuaweiIdAuthTool.prototype.deleteAuthInfo = function (accessToken) { return cordova(this, "deleteAuthInfo", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthTool.prototype.requestUnionId = function (huaweiAccountName) { return cordova(this, "requestUnionId", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthTool.prototype.requestAccessToken = function (account, authScopeList) { return cordova(this, "requestAccessToken", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthTool.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSHuaweiIdAuthTool, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HMSHuaweiIdAuthTool.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSHuaweiIdAuthTool });
    HMSHuaweiIdAuthTool.pluginName = "HMSHuaweiIdAuthTool";
    HMSHuaweiIdAuthTool.plugin = "cordova-plugin-hms-account";
    HMSHuaweiIdAuthTool.pluginRef = "HMSHuaweiIdAuthTool";
    HMSHuaweiIdAuthTool.platforms = ["Android"];
    HMSHuaweiIdAuthTool = __decorate([], HMSHuaweiIdAuthTool);
    return HMSHuaweiIdAuthTool;
}(AwesomeCordovaNativePlugin));
export { HMSHuaweiIdAuthTool };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSHuaweiIdAuthTool, decorators: [{
            type: Injectable
        }], propDecorators: { deleteAuthInfo: [], requestUnionId: [], requestAccessToken: [] } });
var HMSNetworkTool = /** @class */ (function (_super) {
    __extends(HMSNetworkTool, _super);
    function HMSNetworkTool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSNetworkTool.prototype.buildNetworkURL = function (domainHttps) { return cordova(this, "buildNetworkURL", { "otherPromise": true }, arguments); };
    HMSNetworkTool.prototype.buildNetworkCookie = function (cookie) { return cordova(this, "buildNetworkCookie", { "otherPromise": true }, arguments); };
    HMSNetworkTool.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSNetworkTool, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HMSNetworkTool.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSNetworkTool });
    HMSNetworkTool.pluginName = "HMSNetworkTool";
    HMSNetworkTool.plugin = "cordova-plugin-hms-account";
    HMSNetworkTool.pluginRef = "HMSNetworkTool";
    HMSNetworkTool.platforms = ["Android"];
    HMSNetworkTool = __decorate([], HMSNetworkTool);
    return HMSNetworkTool;
}(AwesomeCordovaNativePlugin));
export { HMSNetworkTool };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSNetworkTool, decorators: [{
            type: Injectable
        }], propDecorators: { buildNetworkURL: [], buildNetworkCookie: [] } });
var HMSReadSMSManager = /** @class */ (function (_super) {
    __extends(HMSReadSMSManager, _super);
    function HMSReadSMSManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSReadSMSManager.prototype.smsVerificationCode = function () { return cordova(this, "smsVerificationCode", { "otherPromise": true }, arguments); };
    HMSReadSMSManager.prototype.obtainHashCode = function () { return cordova(this, "obtainHashCode", { "otherPromise": true }, arguments); };
    HMSReadSMSManager.prototype.startConsent = function (phoneNumber) { return cordova(this, "startConsent", { "otherPromise": true }, arguments); };
    HMSReadSMSManager.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSReadSMSManager, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HMSReadSMSManager.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSReadSMSManager });
    HMSReadSMSManager.pluginName = "HMSReadSMSManager";
    HMSReadSMSManager.plugin = "cordova-plugin-hms-account";
    HMSReadSMSManager.pluginRef = "HMSReadSMSManager";
    HMSReadSMSManager.platforms = ["Android"];
    HMSReadSMSManager = __decorate([], HMSReadSMSManager);
    return HMSReadSMSManager;
}(AwesomeCordovaNativePlugin));
export { HMSReadSMSManager };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSReadSMSManager, decorators: [{
            type: Injectable
        }], propDecorators: { smsVerificationCode: [], obtainHashCode: [], startConsent: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmF0aXZlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7QUFFRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0FBRTVGLE1BQU0sQ0FBTixJQUFZLGFBS1g7QUFMRCxXQUFZLGFBQWE7SUFDdkIsMkRBQTBDLENBQUE7SUFDMUMsa0NBQWlCLENBQUE7SUFDakIsZ0NBQWUsQ0FBQTtJQUNmLG9DQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFMVyxhQUFhLEtBQWIsYUFBYSxRQUt4QjtBQUNELE1BQU0sQ0FBTixJQUFZLE1BS1g7QUFMRCxXQUFZLE1BQU07SUFDaEIsMENBQVksQ0FBQTtJQUNaLG1DQUFRLENBQUE7SUFDUix1Q0FBVSxDQUFBO0lBQ1YsbURBQWdCLENBQUE7QUFDbEIsQ0FBQyxFQUxXLE1BQU0sS0FBTixNQUFNLFFBS2pCO0FBRUQsTUFBTSxDQUFOLElBQVksaUJBWVg7QUFaRCxXQUFZLGlCQUFpQjtJQUMzQiwwQ0FBcUIsQ0FBQTtJQUNyQixvQ0FBZSxDQUFBO0lBQ2YsK0NBQTBCLENBQUE7SUFDMUIsOENBQXlCLENBQUE7SUFDekIseURBQW9DLENBQUE7SUFDcEMsc0NBQWlCLENBQUE7SUFDakIsbUVBQThDLENBQUE7SUFDOUMsdURBQWtDLENBQUE7SUFDbEMscURBQWdDLENBQUE7SUFDaEMsK0RBQTBDLENBQUE7SUFDMUMsbURBQThCLENBQUE7QUFDaEMsQ0FBQyxFQVpXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFZNUI7QUFFRCxNQUFNLENBQU4sSUFBWSxVQUdYO0FBSEQsV0FBWSxVQUFVO0lBQ3BCLHVFQUF5RCxDQUFBO0lBQ3pELGlGQUFtRSxD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QUFqQixpQkFBaUI7Ozs7O0lBQWpCLGlCQUFpQixrQkFBakIsaUJBQWlCOzRCQWhYOUI7RUFnWHVDLDBCQUEwQjtTQUFwRCxpQkFBaUI7NEZBQWpCLGlCQUFpQjtrQkFEN0IsVUFBVTs4QkFHVCxtQkFBbUIsTUFLbkIsY0FBYyxNQUtkLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgQ29weXJpZ2h0IDIwMjAtMjAyMy4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuXHJcbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXHJcbiAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuXHJcbiAgICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG5leHBvcnQgZW51bSBBdXRoU2NvcGVMaXN0IHtcclxuICBHQU1FID0gXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2F1dGgvZ2FtZXNcIixcclxuICBPUEVOSUQgPSBcIm9wZW5pZFwiLFxyXG4gIEVNQUlMID0gXCJlbWFpbFwiLFxyXG4gIFBST0ZJTEUgPSBcInByb2ZpbGVcIlxyXG59XHJcbmV4cG9ydCBlbnVtIEdlbmRlciB7XHJcbiAgVU5LTk9XTiA9IC0xLFxyXG4gIE1BTEUgPSAwLFxyXG4gIEZFTUFMRSA9IDEsXHJcbiAgQ09ORklERU5USUFMID0gMlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBBdXRoUmVxdWVzdE9wdGlvbiB7XHJcbiAgU0NPUEVfRU1BSUwgPSBcImVtYWlsXCIsXHJcbiAgU0NPUEVfSUQgPSBcImlkXCIsXHJcbiAgU0NPUEVfSURfVE9LRU4gPSBcImlkVG9rZW5cIixcclxuICBTQ09QRV9QUk9GSUxFID0gXCJwcm9maWxlXCIsXHJcbiAgU0NPUEVfTU9CSUxFX05VTUJFUiA9IFwibW9iaWxlTnVtYmVyXCIsXHJcbiAgU0NPUEVfVUlEID0gXCJ1aWRcIixcclxuICBTQ09QRV9BVVRIT1JJWkFUSU9OX0NPREUgPSBcImF1dGhvcml6YXRpb25Db2RlXCIsXHJcbiAgU0NPUEVfQUNDRVNTX1RPS0VOID0gXCJhY2Nlc3NUb2tlblwiLFxyXG4gIFNDT1BFX0RJQUxPR19BVVRIID0gXCJkaWFsb2dBdXRoXCIsXHJcbiAgU0NPUEVfU0hJUFBJTkdfQUREUkVTUyA9IFwic2hpcHBpbmdBZGRyZXNzXCIsXHJcbiAgU0NPUEVfQ0FSUklFUl9JRCA9IFwiY2FycmllcklkXCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQXV0aFBhcmFtcyB7XHJcbiAgREVGQVVMVF9BVVRIX1JFUVVFU1RfUEFSQU0gPSBcIkRFRkFVTFRfQVVUSF9SRVFVRVNUX1BBUkFNXCIsXHJcbiAgREVGQVVMVF9BVVRIX1JFUVVFU1RfUEFSQU1fR0FNRSA9IFwiREVGQVVMVF9BVVRIX1JFUVVFU1RfUEFSQU1fR0FNRVwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBhY2thZ2VOYW1lIHtcclxuICBIV0lEID0gXCJIV0lEXCIsXHJcbiAgQUNDT1VOVCA9IFwiQUNDT1VOVFwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEF1dGhJZFRva2VuU2lnbkFsZyB7XHJcbiAgUFMyNTYgPSAxLFxyXG4gIFJTMjU2ID0gMlxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFic3RyYWN0QXV0aEFjY291bnQge1xyXG4gIHVpZD86IHN0cmluZztcclxuICBvcGVuSWQ6IHN0cmluZztcclxuICBkaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcbiAgc3RhdHVzOiBudW1iZXI7XHJcbiAgZ2VuZGVyOiBHZW5kZXI7XHJcbiAgc2VydmljZUNvdW50cnlDb2RlPzogc3RyaW5nO1xyXG4gIGNvdW50cnlDb2RlPzogc3RyaW5nO1xyXG4gIHVuaW9uSWQ6IHN0cmluZztcclxuICBlbWFpbD86IHN0cmluZztcclxuICBleHRlbnNpb25TY29wZXM6IHN0cmluZ1tdO1xyXG4gIGlkVG9rZW4/OiBzdHJpbmc7XHJcbiAgZXhwcmVzc2lvblRpbWVTZWNzOiBudW1iZXI7XHJcbiAgZ2l2ZW5OYW1lOiBzdHJpbmc7XHJcbiAgZmFtaWx5TmFtZTogc3RyaW5nO1xyXG4gIGNhcnJpZXJJZDogbnVtYmVyO1xyXG4gIGFnZVJhbmdlPzogc3RyaW5nO1xyXG4gIGhvbWVab25lOiBudW1iZXI7XHJcbiAgYXV0aG9yaXplZFNjb3Blczogc3RyaW5nW107XHJcbiAgYXZhdGFyVXJpU3RyaW5nOiBzdHJpbmc7XHJcbiAgYXV0aG9yaXphdGlvbkNvZGU/OiBzdHJpbmc7XHJcbiAgcmVxdWVzdGVkU2NvcGVzOiBzdHJpbmdbXTtcclxuICBhY2NvdW50PzogQWNjb3VudDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRoSHVhd2VpSWQgZXh0ZW5kcyBBYnN0cmFjdEF1dGhBY2NvdW50IHtcclxuICBhZ2VSYW5nZUZsYWc6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRoQWNjb3VudCBleHRlbmRzIEFic3RyYWN0QXV0aEFjY291bnQge1xyXG4gIGFjY291bnRGbGFnOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aEJ1aWxkZXIge1xyXG4gIG9wZW5JZDogc3RyaW5nO1xyXG4gIHVpZDogc3RyaW5nO1xyXG4gIHBob3RvVXJpU3RyaW5nOiBzdHJpbmc7XHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG4gIHNlcnZpY2VDb3VudHJ5Q29kZTogc3RyaW5nO1xyXG4gIGdlbmRlcjogR2VuZGVyO1xyXG4gIHN0YXR1czogbnVtYmVyO1xyXG4gIHVuaW9uSWQ6IHN0cmluZztcclxuICBzZXJ2ZXJBdXRoQ29kZTogc3RyaW5nO1xyXG4gIGNvdW50cnlDb2RlOiBzdHJpbmc7XHJcbiAgZ3JhbnRlZFNjb3BlczogQXV0aFNjb3BlTGlzdFtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbnRhaW5TY29wZXNSZXN1bHQge1xyXG4gIGNvbnRhaW5TY29wZXM6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBEb21haW5JbmZvIHtcclxuICBkb21haW46IHN0cmluZztcclxuICBpc1VzZUh0dHBzOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29va2llIHtcclxuICBjb29raWVOYW1lOiBzdHJpbmc7XHJcbiAgY29va2llVmFsdWU6IHN0cmluZztcclxuICBkb21haW46IHN0cmluZztcclxuICBwYXRoOiBzdHJpbmc7XHJcbiAgaXNIdHRwT25seTogYm9vbGVhbjtcclxuICBpc1NlY3VyZTogYm9vbGVhbjtcclxuICBtYXhBZ2U6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEFjY291bnQge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWNjb3VudEljb24ge1xyXG4gIGljb246IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25JbkRhdGEge1xyXG4gIGF1dGhSZXF1ZXN0T3B0aW9uOiBBdXRoUmVxdWVzdE9wdGlvbltdO1xyXG4gIGF1dGhQYXJhbT86IEF1dGhQYXJhbXM7XHJcbiAgYXV0aFNjb3BlTGlzdD86IEF1dGhTY29wZUxpc3RbXTtcclxuICBhdXRoSWRUb2tlblNpZ25BbGc/OiBBdXRoSWRUb2tlblNpZ25BbGc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lnbkluRGF0YSB7XHJcbiAgYXV0aFJlcXVlc3RPcHRpb246IEF1dGhSZXF1ZXN0T3B0aW9uW10sXHJcbiAgYXV0aFBhcmFtPzogQXV0aFBhcmFtcyxcclxuICBhdXRoU2NvcGVMaXN0PzogQXV0aFNjb3BlTGlzdFtdLFxyXG4gIGF1dGhJZFRva2VuU2lnbkFsZz86IEF1dGhJZFRva2VuU2lnbkFsZ1xyXG59XHJcblxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU0FjY291bnQnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hY2NvdW50JyxcclxuICBwbHVnaW5SZWY6ICdITVNBY2NvdW50JyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0FjY291bnQgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzaWduSW4oc2lnbkluRGF0YTogU2lnbkluRGF0YSwgcGFja2FnZU5hbWU6c3RyaW5nKTogUHJvbWlzZTxBdXRoSHVhd2VpSWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2lnbk91dCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY2FuY2VsQXV0aG9yaXphdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2lsZW50U2lnbkluKGF1dGhQYXJhbXM6IEF1dGhQYXJhbXMscGFja2FnZU5hbWU6c3RyaW5nKTogUHJvbWlzZTxBdXRoSHVhd2VpSWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBkaXNhYmxlTG9nZ2VyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU0FjY291bnRBdXRoU2VydmljZScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFjY291bnQnLFxyXG4gIHBsdWdpblJlZjogJ0hNU0FjY291bnRBdXRoU2VydmljZScsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNBY2NvdW50QXV0aFNlcnZpY2UgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzaWduSW4oc2lnbkluRGF0YTogU2lnbkluRGF0YSwgcGFja2FnZU5hbWU6c3RyaW5nKTogUHJvbWlzZTxBdXRoQWNjb3VudD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBnZXRJbmRlcGVuZGVudFNpZ25JbihhY2Nlc3NUb2tlbjpzdHJpbmcpOiBQcm9taXNlPEF1dGhBY2NvdW50PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNpZ25PdXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGNhbmNlbEF1dGhvcml6YXRpb24oKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNpbGVudFNpZ25JbihhdXRoUGFyYW1zOiBBdXRoUGFyYW1zLCBwYWNrYWdlTmFtZTpzdHJpbmcpOiBQcm9taXNlPEF1dGhBY2NvdW50PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldENoYW5uZWwoKTogUHJvbWlzZTxBY2NvdW50SWNvbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gVGhlbWUge1xyXG4gIFRIRU1FX05PX1RJVExFID0gMCxcclxuICBUSEVNRV9GVUxMX1RJVExFID0gMVxyXG59XHJcbmV4cG9ydCBlbnVtIENvbG9yUG9saWN5IHtcclxuICBDT0xPUl9QT0xJQ1lfUkVEID0gMSxcclxuICBDT0xPUl9QT0xJQ1lfV0hJVEUgPSAyLFxyXG4gIENPTE9SX1BPTElDWV9XSElURV9XSVRIX0JPUkRFUiA9IDMsXHJcbiAgQ09MT1JfUE9MSUNZX0JMQUNLID0gNCxcclxuICBDT0xPUl9QT0xJQ1lfR1JBWSA9IDVcclxufVxyXG5leHBvcnQgZW51bSBDb3JuZXJSYWRpdXMge1xyXG4gIENPUk5FUl9SQURJVVNfTEFSR0UgPSAtMSxcclxuICBDT1JORVJfUkFESVVTX01FRElVTSA9IC0yLFxyXG4gIENPUk5FUl9SQURJVVNfU01BTEwgPSAtM1xyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSE1TSHVhd2VpSWRBdXRoQnV0dG9uJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWNjb3VudCcsXHJcbiAgcGx1Z2luUmVmOiAnSE1TSHVhd2VpSWRBdXRoQnV0dG9uJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0h1YXdlaUlkQXV0aEJ1dHRvbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0SHVhd2VpSWRBdXRoQnV0dG9uKGVkaXR0ZWRCdXR0b246IHN0cmluZywgdGhlbWU6IFRoZW1lLCBjb2xvclBvbGljeTogQ29sb3JQb2xpY3ksIGNvcm5lclJhZGl1czogQ29ybmVyUmFkaXVzKTogdm9pZCB7XHJcbiAgICByZXR1cm47XHJcbn1cclxufSBcclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNIdWF3ZWlJZEF1dGhNYW5hZ2VyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWNjb3VudCcsXHJcbiAgcGx1Z2luUmVmOiAnSE1TSHVhd2VpSWRBdXRoTWFuYWdlcicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNIdWF3ZWlJZEF1dGhNYW5hZ2VyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0QXV0aFJlc3VsdChwYWNrYWdlTmFtZTpTdHJpbmcpOiBQcm9taXNlPEF1dGhIdWF3ZWlJZD4ge1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0QXV0aFJlc3VsdFdpdGhTY29wZShhdXRoSHVhd2VpSWQ6IEF1dGhTY29wZUxpc3RbXSxwYWNrYWdlTmFtZTpzdHJpbmcpOiBQcm9taXNlPEF1dGhIdWF3ZWlJZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBjb250YWluU2NvcGVzKGF1dGhIdWF3ZWlJZDogQXV0aEJ1aWxkZXIsIGF1dGhTY29wZUxpc3Q6IEF1dGhTY29wZUxpc3RbXSwgcGFja2FnZU5hbWU6c3RyaW5nKTogUHJvbWlzZTxDb250YWluU2NvcGVzUmVzdWx0PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGFkZEF1dGhTY29wZXMocmVxdWVzdENvZGU6IG51bWJlciwgYXV0aFNjb3BlTGlzdDogQXV0aFNjb3BlTGlzdFtdLCBwYWNrYWdlTmFtZTpzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNBY2NvdW50QXV0aE1hbmFnZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hY2NvdW50JyxcclxuICBwbHVnaW5SZWY6ICdITVNBY2NvdW50QXV0aE1hbmFnZXInLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TQWNjb3VudEF1dGhNYW5hZ2VyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0QXV0aFJlc3VsdChwYWNrYWdlTmFtZTpzdHJpbmcpOiBQcm9taXNlPEF1dGhBY2NvdW50PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldEF1dGhSZXN1bHRXaXRoU2NvcGUoYXV0aEFjY291bnQ6IEF1dGhTY29wZUxpc3RbXSwgcGFja2FnZU5hbWU6c3RyaW5nKTogUHJvbWlzZTxBdXRoQWNjb3VudD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBjb250YWluU2NvcGVzKGF1dGhBY2NvdW50OiBBdXRoQnVpbGRlciwgYXV0aFNjb3BlTGlzdDogQXV0aFNjb3BlTGlzdFtdLCBwYWNrYWdlTmFtZTpzdHJpbmcpOiBQcm9taXNlPENvbnRhaW5TY29wZXNSZXN1bHQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYWRkQXV0aFNjb3BlcyhyZXF1ZXN0Q29kZTogbnVtYmVyLCBhdXRoU2NvcGVMaXN0OiBBdXRoU2NvcGVMaXN0W10sIHBhY2thZ2VOYW1lOnN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU0h1YXdlaUlkQXV0aFRvb2wnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hY2NvdW50JyxcclxuICBwbHVnaW5SZWY6ICdITVNIdWF3ZWlJZEF1dGhUb29sJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0h1YXdlaUlkQXV0aFRvb2wgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBkZWxldGVBdXRoSW5mbyhhY2Nlc3NUb2tlbjogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbn1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICByZXF1ZXN0VW5pb25JZChodWF3ZWlBY2NvdW50TmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgcmVxdWVzdEFjY2Vzc1Rva2VuKGFjY291bnQ6IEFjY291bnQsIGF1dGhTY29wZUxpc3Q6IEF1dGhTY29wZUxpc3RbXSk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbn1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU05ldHdvcmtUb29sJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWNjb3VudCcsXHJcbiAgcGx1Z2luUmVmOiAnSE1TTmV0d29ya1Rvb2wnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TTmV0d29ya1Rvb2wgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBidWlsZE5ldHdvcmtVUkwoZG9tYWluSHR0cHM6IERvbWFpbkluZm8pOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gIHJldHVybjtcclxufVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGJ1aWxkTmV0d29ya0Nvb2tpZShjb29raWU6IENvb2tpZSk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbn1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU1JlYWRTTVNNYW5hZ2VyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWNjb3VudCcsXHJcbiAgcGx1Z2luUmVmOiAnSE1TUmVhZFNNU01hbmFnZXInLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TUmVhZFNNU01hbmFnZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzbXNWZXJpZmljYXRpb25Db2RlKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgcmV0dXJuO1xyXG59XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgb2J0YWluSGFzaENvZGUoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc3RhcnRDb25zZW50KHBob25lTnVtYmVyOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbn0iXX0=