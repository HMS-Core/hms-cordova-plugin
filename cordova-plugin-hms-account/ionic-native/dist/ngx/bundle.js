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

'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

exports.AuthScopeList = void 0;
(function (AuthScopeList) {
    AuthScopeList["GAME"] = "https://www.huawei.com/auth/games";
    AuthScopeList["OPENID"] = "openid";
    AuthScopeList["EMAIL"] = "email";
    AuthScopeList["PROFILE"] = "profile";
})(exports.AuthScopeList || (exports.AuthScopeList = {}));
exports.Gender = void 0;
(function (Gender) {
    Gender[Gender["UNKNOWN"] = -1] = "UNKNOWN";
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["CONFIDENTIAL"] = 2] = "CONFIDENTIAL";
})(exports.Gender || (exports.Gender = {}));
exports.AuthRequestOption = void 0;
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
})(exports.AuthRequestOption || (exports.AuthRequestOption = {}));
exports.AuthParams = void 0;
(function (AuthParams) {
    AuthParams["DEFAULT_AUTH_REQUEST_PARAM"] = "DEFAULT_AUTH_REQUEST_PARAM";
    AuthParams["DEFAULT_AUTH_REQUEST_PARAM_GAME"] = "DEFAULT_AUTH_REQUEST_PARAM_GAME";
})(exports.AuthParams || (exports.AuthParams = {}));
exports.PackageName = void 0;
(function (PackageName) {
    PackageName["HWID"] = "HWID";
    PackageName["ACCOUNT"] = "ACCOUNT";
})(exports.PackageName || (exports.PackageName = {}));
exports.AuthIdTokenSignAlg = void 0;
(function (AuthIdTokenSignAlg) {
    AuthIdTokenSignAlg[AuthIdTokenSignAlg["PS256"] = 1] = "PS256";
    AuthIdTokenSignAlg[AuthIdTokenSignAlg["RS256"] = 2] = "RS256";
})(exports.AuthIdTokenSignAlg || (exports.AuthIdTokenSignAlg = {}));
var HMSAccount = /** @class */ (function (_super) {
    tslib.__extends(HMSAccount, _super);
    function HMSAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSAccount.prototype.signIn = function (signInData, packageName) { return core.cordova(this, "signIn", { "otherPromise": true }, arguments); };
    HMSAccount.prototype.signOut = function () { return core.cordova(this, "signOut", { "otherPromise": true }, arguments); };
    HMSAccount.prototype.cancelAuthorization = function () { return core.cordova(this, "cancelAuthorization", { "otherPromise": true }, arguments); };
    HMSAccount.prototype.silentSignIn = function (authParams, packageName) { return core.cordova(this, "silentSignIn", { "otherPromise": true }, arguments); };
    HMSAccount.prototype.enableLogger = function () { return core.cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HMSAccount.prototype.disableLogger = function () { return core.cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSAccount.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSAccount, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HMSAccount.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSAccount });
    HMSAccount.pluginName = "HMSAccount";
    HMSAccount.plugin = "cordova-plugin-hms-account";
    HMSAccount.pluginRef = "HMSAccount";
    HMSAccount.platforms = ["Android"];
    HMSAccount = tslib.__decorate([], HMSAccount);
    return HMSAccount;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSAccount, decorators: [{
            type: i0.Injectable
        }], propDecorators: { signIn: [], signOut: [], cancelAuthorization: [], silentSignIn: [], enableLogger: [], disableLogger: [] } });
var HMSAccountAuthService = /** @class */ (function (_super) {
    tslib.__extends(HMSAccountAuthService, _super);
    function HMSAccountAuthService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSAccountAuthService.prototype.signIn = function (signInData, packageName) { return core.cordova(this, "signIn", { "otherPromise": true }, arguments); };
    HMSAccountAuthService.prototype.getIndependentSignIn = function (accessToken) { return core.cordova(this, "getIndependentSignIn", { "otherPromise": true }, arguments); };
    HMSAccountAuthService.prototype.signOut = function () { return core.cordova(this, "signOut", { "otherPromise": true }, arguments); };
    HMSAccountAuthService.prototype.cancelAuthorization = function () { return core.cordova(this, "cancelAuthorization", { "otherPromise": true }, arguments); };
    HMSAccountAuthService.prototype.silentSignIn = function (authParams, packageName) { return core.cordova(this, "silentSignIn", { "otherPromise": true }, arguments); };
    HMSAccountAuthService.prototype.getChannel = function () { return core.cordova(this, "getChannel", { "otherPromise": true }, arguments); };
    HMSAccountAuthService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSAccountAuthService, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HMSAccountAuthService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSAccountAuthService });
    HMSAccountAuthService.pluginName = "HMSAccountAuthService";
    HMSAccountAuthService.plugin = "cordova-plugin-hms-account";
    HMSAccountAuthService.pluginRef = "HMSAccountAuthService";
    HMSAccountAuthService.platforms = ["Android"];
    HMSAccountAuthService = tslib.__decorate([], HMSAccountAuthService);
    return HMSAccountAuthService;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSAccountAuthService, decorators: [{
            type: i0.Injectable
        }], propDecorators: { signIn: [], getIndependentSignIn: [], signOut: [], cancelAuthorization: [], silentSignIn: [], getChannel: [] } });
exports.Theme = void 0;
(function (Theme) {
    Theme[Theme["THEME_NO_TITLE"] = 0] = "THEME_NO_TITLE";
    Theme[Theme["THEME_FULL_TITLE"] = 1] = "THEME_FULL_TITLE";
})(exports.Theme || (exports.Theme = {}));
exports.ColorPolicy = void 0;
(function (ColorPolicy) {
    ColorPolicy[ColorPolicy["COLOR_POLICY_RED"] = 1] = "COLOR_POLICY_RED";
    ColorPolicy[ColorPolicy["COLOR_POLICY_WHITE"] = 2] = "COLOR_POLICY_WHITE";
    ColorPolicy[ColorPolicy["COLOR_POLICY_WHITE_WITH_BORDER"] = 3] = "COLOR_POLICY_WHITE_WITH_BORDER";
    ColorPolicy[ColorPolicy["COLOR_POLICY_BLACK"] = 4] = "COLOR_POLICY_BLACK";
    ColorPolicy[ColorPolicy["COLOR_POLICY_GRAY"] = 5] = "COLOR_POLICY_GRAY";
})(exports.ColorPolicy || (exports.ColorPolicy = {}));
exports.CornerRadius = void 0;
(function (CornerRadius) {
    CornerRadius[CornerRadius["CORNER_RADIUS_LARGE"] = -1] = "CORNER_RADIUS_LARGE";
    CornerRadius[CornerRadius["CORNER_RADIUS_MEDIUM"] = -2] = "CORNER_RADIUS_MEDIUM";
    CornerRadius[CornerRadius["CORNER_RADIUS_SMALL"] = -3] = "CORNER_RADIUS_SMALL";
})(exports.CornerRadius || (exports.CornerRadius = {}));
var HMSHuaweiIdAuthButton = /** @class */ (function (_super) {
    tslib.__extends(HMSHuaweiIdAuthButton, _super);
    function HMSHuaweiIdAuthButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSHuaweiIdAuthButton.prototype.getHuaweiIdAuthButton = function (edittedButton, theme, colorPolicy, cornerRadius) { return core.cordova(this, "getHuaweiIdAuthButton", {}, arguments); };
    HMSHuaweiIdAuthButton.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSHuaweiIdAuthButton, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HMSHuaweiIdAuthButton.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSHuaweiIdAuthButton });
    HMSHuaweiIdAuthButton.pluginName = "HMSHuaweiIdAuthButton";
    HMSHuaweiIdAuthButton.plugin = "cordova-plugin-hms-account";
    HMSHuaweiIdAuthButton.pluginRef = "HMSHuaweiIdAuthButton";
    HMSHuaweiIdAuthButton.platforms = ["Android"];
    HMSHuaweiIdAuthButton = tslib.__decorate([], HMSHuaweiIdAuthButton);
    return HMSHuaweiIdAuthButton;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSHuaweiIdAuthButton, decorators: [{
            type: i0.Injectable
        }], propDecorators: { getHuaweiIdAuthButton: [] } });
var HMSHuaweiIdAuthManager = /** @class */ (function (_super) {
    tslib.__extends(HMSHuaweiIdAuthManager, _super);
    function HMSHuaweiIdAuthManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSHuaweiIdAuthManager.prototype.getAuthResult = function (packageName) { return core.cordova(this, "getAuthResult", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthManager.prototype.getAuthResultWithScope = function (authHuaweiId, packageName) { return core.cordova(this, "getAuthResultWithScope", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthManager.prototype.containScopes = function (authHuaweiId, authScopeList, packageName) { return core.cordova(this, "containScopes", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthManager.prototype.addAuthScopes = function (requestCode, authScopeList, packageName) { return core.cordova(this, "addAuthScopes", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthManager.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSHuaweiIdAuthManager, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HMSHuaweiIdAuthManager.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSHuaweiIdAuthManager });
    HMSHuaweiIdAuthManager.pluginName = "HMSHuaweiIdAuthManager";
    HMSHuaweiIdAuthManager.plugin = "cordova-plugin-hms-account";
    HMSHuaweiIdAuthManager.pluginRef = "HMSHuaweiIdAuthManager";
    HMSHuaweiIdAuthManager.platforms = ["Android"];
    HMSHuaweiIdAuthManager = tslib.__decorate([], HMSHuaweiIdAuthManager);
    return HMSHuaweiIdAuthManager;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSHuaweiIdAuthManager, decorators: [{
            type: i0.Injectable
        }], propDecorators: { getAuthResult: [], getAuthResultWithScope: [], containScopes: [], addAuthScopes: [] } });
var HMSAccountAuthManager = /** @class */ (function (_super) {
    tslib.__extends(HMSAccountAuthManager, _super);
    function HMSAccountAuthManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSAccountAuthManager.prototype.getAuthResult = function (packageName) { return core.cordova(this, "getAuthResult", { "otherPromise": true }, arguments); };
    HMSAccountAuthManager.prototype.getAuthResultWithScope = function (authAccount, packageName) { return core.cordova(this, "getAuthResultWithScope", { "otherPromise": true }, arguments); };
    HMSAccountAuthManager.prototype.containScopes = function (authAccount, authScopeList, packageName) { return core.cordova(this, "containScopes", { "otherPromise": true }, arguments); };
    HMSAccountAuthManager.prototype.addAuthScopes = function (requestCode, authScopeList, packageName) { return core.cordova(this, "addAuthScopes", { "otherPromise": true }, arguments); };
    HMSAccountAuthManager.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSAccountAuthManager, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HMSAccountAuthManager.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSAccountAuthManager });
    HMSAccountAuthManager.pluginName = "HMSAccountAuthManager";
    HMSAccountAuthManager.plugin = "cordova-plugin-hms-account";
    HMSAccountAuthManager.pluginRef = "HMSAccountAuthManager";
    HMSAccountAuthManager.platforms = ["Android"];
    HMSAccountAuthManager = tslib.__decorate([], HMSAccountAuthManager);
    return HMSAccountAuthManager;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSAccountAuthManager, decorators: [{
            type: i0.Injectable
        }], propDecorators: { getAuthResult: [], getAuthResultWithScope: [], containScopes: [], addAuthScopes: [] } });
var HMSHuaweiIdAuthTool = /** @class */ (function (_super) {
    tslib.__extends(HMSHuaweiIdAuthTool, _super);
    function HMSHuaweiIdAuthTool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSHuaweiIdAuthTool.prototype.deleteAuthInfo = function (accessToken) { return core.cordova(this, "deleteAuthInfo", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthTool.prototype.requestUnionId = function (huaweiAccountName) { return core.cordova(this, "requestUnionId", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthTool.prototype.requestAccessToken = function (account, authScopeList) { return core.cordova(this, "requestAccessToken", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthTool.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSHuaweiIdAuthTool, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HMSHuaweiIdAuthTool.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSHuaweiIdAuthTool });
    HMSHuaweiIdAuthTool.pluginName = "HMSHuaweiIdAuthTool";
    HMSHuaweiIdAuthTool.plugin = "cordova-plugin-hms-account";
    HMSHuaweiIdAuthTool.pluginRef = "HMSHuaweiIdAuthTool";
    HMSHuaweiIdAuthTool.platforms = ["Android"];
    HMSHuaweiIdAuthTool = tslib.__decorate([], HMSHuaweiIdAuthTool);
    return HMSHuaweiIdAuthTool;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSHuaweiIdAuthTool, decorators: [{
            type: i0.Injectable
        }], propDecorators: { deleteAuthInfo: [], requestUnionId: [], requestAccessToken: [] } });
var HMSNetworkTool = /** @class */ (function (_super) {
    tslib.__extends(HMSNetworkTool, _super);
    function HMSNetworkTool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSNetworkTool.prototype.buildNetworkURL = function (domainHttps) { return core.cordova(this, "buildNetworkURL", { "otherPromise": true }, arguments); };
    HMSNetworkTool.prototype.buildNetworkCookie = function (cookie) { return core.cordova(this, "buildNetworkCookie", { "otherPromise": true }, arguments); };
    HMSNetworkTool.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSNetworkTool, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HMSNetworkTool.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSNetworkTool });
    HMSNetworkTool.pluginName = "HMSNetworkTool";
    HMSNetworkTool.plugin = "cordova-plugin-hms-account";
    HMSNetworkTool.pluginRef = "HMSNetworkTool";
    HMSNetworkTool.platforms = ["Android"];
    HMSNetworkTool = tslib.__decorate([], HMSNetworkTool);
    return HMSNetworkTool;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSNetworkTool, decorators: [{
            type: i0.Injectable
        }], propDecorators: { buildNetworkURL: [], buildNetworkCookie: [] } });
var HMSReadSMSManager = /** @class */ (function (_super) {
    tslib.__extends(HMSReadSMSManager, _super);
    function HMSReadSMSManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSReadSMSManager.prototype.smsVerificationCode = function () { return core.cordova(this, "smsVerificationCode", { "otherPromise": true }, arguments); };
    HMSReadSMSManager.prototype.obtainHashCode = function () { return core.cordova(this, "obtainHashCode", { "otherPromise": true }, arguments); };
    HMSReadSMSManager.prototype.startConsent = function (phoneNumber) { return core.cordova(this, "startConsent", { "otherPromise": true }, arguments); };
    HMSReadSMSManager.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSReadSMSManager, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HMSReadSMSManager.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSReadSMSManager });
    HMSReadSMSManager.pluginName = "HMSReadSMSManager";
    HMSReadSMSManager.plugin = "cordova-plugin-hms-account";
    HMSReadSMSManager.pluginRef = "HMSReadSMSManager";
    HMSReadSMSManager.platforms = ["Android"];
    HMSReadSMSManager = tslib.__decorate([], HMSReadSMSManager);
    return HMSReadSMSManager;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSReadSMSManager, decorators: [{
            type: i0.Injectable
        }], propDecorators: { smsVerificationCode: [], obtainHashCode: [], startConsent: [] } });

exports.HMSAccount = HMSAccount;
exports.HMSAccountAuthManager = HMSAccountAuthManager;
exports.HMSAccountAuthService = HMSAccountAuthService;
exports.HMSHuaweiIdAuthButton = HMSHuaweiIdAuthButton;
exports.HMSHuaweiIdAuthManager = HMSHuaweiIdAuthManager;
exports.HMSHuaweiIdAuthTool = HMSHuaweiIdAuthTool;
exports.HMSNetworkTool = HMSNetworkTool;
exports.HMSReadSMSManager = HMSReadSMSManager;
