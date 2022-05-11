/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
}(IonicNativePlugin));
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
}(IonicNativePlugin));
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
}(IonicNativePlugin));
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
}(IonicNativePlugin));
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
}(IonicNativePlugin));
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
}(IonicNativePlugin));
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
}(IonicNativePlugin));
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
}(IonicNativePlugin));
var HMSReadSMSManager = new HMSReadSMSManagerOriginal();
export { HMSReadSMSManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBaUJBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFFeEUsTUFBTSxDQUFOLElBQVksYUFLWDtBQUxELFdBQVksYUFBYTtJQUN2QiwyREFBMEMsQ0FBQTtJQUMxQyxrQ0FBaUIsQ0FBQTtJQUNqQixnQ0FBZSxDQUFBO0lBQ2Ysb0NBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUxXLGFBQWEsS0FBYixhQUFhLFFBS3hCO0FBQ0QsTUFBTSxDQUFOLElBQVksTUFLWDtBQUxELFdBQVksTUFBTTtJQUNoQiwwQ0FBWSxDQUFBO0lBQ1osbUNBQVEsQ0FBQTtJQUNSLHVDQUFVLENBQUE7SUFDVixtREFBZ0IsQ0FBQTtBQUNsQixDQUFDLEVBTFcsTUFBTSxLQUFOLE1BQU0sUUFLakI7QUFFRCxNQUFNLENBQU4sSUFBWSxpQkFZWDtBQVpELFdBQVksaUJBQWlCO0lBQzNCLDBDQUFxQixDQUFBO0lBQ3JCLG9DQUFlLENBQUE7SUFDZiwrQ0FBMEIsQ0FBQTtJQUMxQiw4Q0FBeUIsQ0FBQTtJQUN6Qix5REFBb0MsQ0FBQTtJQUNwQyxzQ0FBaUIsQ0FBQTtJQUNqQixtRUFBOEMsQ0FBQTtJQUM5Qyx1REFBa0MsQ0FBQTtJQUNsQyxxREFBZ0MsQ0FBQTtJQUNoQywrREFBMEMsQ0FBQTtJQUMxQyxtREFBOEIsQ0FBQTtBQUNoQyxDQUFDLEVBWlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQVk1QjtBQUVELE1BQU0sQ0FBTixJQUFZLFVBR1g7QUFIRCxXQUFZLFVBQVU7SUFDcEIsdUVBQXlELENBQUE7SUFDekQsaUZBQW1FLENBQUE7QUFDckUsQ0FBQyxFQUhXLFVBQVUsS0FBVixVQUFVLFFBR3JCO0FBRUQsTUFBTSxDQUFOLElBQVksV0FHWDtBQUhELFdBQVksV0FBVztJQUNyQiw0QkFBYSxDQUFBO0lBQ2Isa0NBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUhXLFdBQVcsS0FBWCxXQUFXLFFBR3RCO0FBRUQsTUFBTSxDQUFOLElBQVksa0JBR1g7QUFIRCxXQUFZLGtCQUFrQjtJQUM1Qiw2REFBUyxDQUFBO0lBQ1QsNkRBQVMsQ0FBQTtBQUNYLENBQUMsRUFIVyxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBRzdCOztJQW1HK0IsOEJBQWlCOzs7O0lBRS9DLDJCQUFNLGFBQUMsVUFBc0IsRUFBRSxXQUFrQjtJQUtqRCw0QkFBTztJQUtQLHdDQUFtQjtJQUtuQixpQ0FBWSxhQUFDLFVBQXNCLEVBQUMsV0FBa0I7SUFLdEQsaUNBQVk7SUFLWixrQ0FBYTs7Ozs7cUJBekxmO0VBOEpnQyxpQkFBaUI7U0FBcEMsVUFBVTs7SUF1Q29CLHlDQUFpQjs7OztJQUUxRCxzQ0FBTSxhQUFDLFVBQXNCLEVBQUUsV0FBa0I7SUFLakQsb0RBQW9CLGFBQUMsV0FBa0I7SUFLdkMsdUNBQU87SUFLUCxtREFBbUI7SUFLbkIsNENBQVksYUFBQyxVQUFzQixFQUFFLFdBQWtCO0lBS3ZELDBDQUFVOzs7OztnQ0FoT1o7RUFxTTJDLGlCQUFpQjtTQUEvQyxxQkFBcUI7QUFnQ2xDLE1BQU0sQ0FBTixJQUFZLEtBR1g7QUFIRCxXQUFZLEtBQUs7SUFDZixxREFBa0IsQ0FBQTtJQUNsQix5REFBb0IsQ0FBQTtBQUN0QixDQUFDLEVBSFcsS0FBSyxLQUFMLEtBQUssUUFHaEI7QUFDRCxNQUFNLENBQU4sSUFBWSxXQU1YO0FBTkQsV0FBWSxXQUFXO0lBQ3JCLHFFQUFvQixDQUFBO0lBQ3BCLHlFQUFzQixDQUFBO0lBQ3RCLGlHQUFrQyxDQUFBO0lBQ2xDLHlFQUFzQixDQUFBO0lBQ3RCLHVFQUFxQixDQUFBO0FBQ3ZCLENBQUMsRUFOVyxXQUFXLEtBQVgsV0FBVyxRQU10QjtBQUNELE1BQU0sQ0FBTixJQUFZLFlBSVg7QUFKRCxXQUFZLFlBQVk7SUFDdEIsOEVBQXdCLENBQUE7SUFDeEIsZ0ZBQXlCLENBQUE7SUFDekIsOEVBQXdCLENBQUE7QUFDMUIsQ0FBQyxFQUpXLFlBQVksS0FBWixZQUFZLFFBSXZCOztJQVEwQyx5Q0FBaUI7Ozs7SUFFMUQscURBQXFCLGFBQUMsYUFBcUIsRUFBRSxLQUFZLEVBQUUsV0FBd0IsRUFBRSxZQUEwQjs7Ozs7Z0NBOVBqSDtFQTRQMkMsaUJBQWlCO1NBQS9DLHFCQUFxQjs7SUFjVSwwQ0FBaUI7Ozs7SUFFM0QsOENBQWEsYUFBQyxXQUFrQjtJQUtoQyx1REFBc0IsYUFBQyxZQUE2QixFQUFDLFdBQWtCO0lBS3ZFLDhDQUFhLGFBQUMsWUFBeUIsRUFBRSxhQUE4QixFQUFFLFdBQWtCO0lBSzNGLDhDQUFhLGFBQUMsV0FBbUIsRUFBRSxhQUE4QixFQUFFLFdBQWtCOzs7OztpQ0EzUnZGO0VBMFE0QyxpQkFBaUI7U0FBaEQsc0JBQXNCOztJQTZCUSx5Q0FBaUI7Ozs7SUFFMUQsNkNBQWEsYUFBQyxXQUFrQjtJQUtoQyxzREFBc0IsYUFBQyxXQUE0QixFQUFFLFdBQWtCO0lBS3ZFLDZDQUFhLGFBQUMsV0FBd0IsRUFBRSxhQUE4QixFQUFFLFdBQWtCO0lBSzFGLDZDQUFhLGFBQUMsV0FBbUIsRUFBRSxhQUE4QixFQUFFLFdBQWtCOzs7OztnQ0F4VHZGO0VBdVMyQyxpQkFBaUI7U0FBL0MscUJBQXFCOztJQTZCTyx1Q0FBaUI7Ozs7SUFFeEQsNENBQWMsYUFBQyxXQUFtQjtJQUtsQyw0Q0FBYyxhQUFDLGlCQUF5QjtJQUt4QyxnREFBa0IsYUFBQyxPQUFnQixFQUFFLGFBQThCOzs7Ozs4QkFoVnJFO0VBb1V5QyxpQkFBaUI7U0FBN0MsbUJBQW1COztJQXdCSSxrQ0FBaUI7Ozs7SUFFbkQsd0NBQWUsYUFBQyxXQUF1QjtJQUt2QywyQ0FBa0IsYUFBQyxNQUFjOzs7Ozt5QkFuV25DO0VBNFZvQyxpQkFBaUI7U0FBeEMsY0FBYzs7SUFtQlkscUNBQWlCOzs7O0lBRXRELCtDQUFtQjtJQUtuQiwwQ0FBYztJQUtkLHdDQUFZLGFBQUMsV0FBbUI7Ozs7OzRCQTNYbEM7RUErV3VDLGlCQUFpQjtTQUEzQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIENvcHlyaWdodCAyMDIwLTIwMjIuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5cbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBlbnVtIEF1dGhTY29wZUxpc3Qge1xuICBHQU1FID0gXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2F1dGgvZ2FtZXNcIixcbiAgT1BFTklEID0gXCJvcGVuaWRcIixcbiAgRU1BSUwgPSBcImVtYWlsXCIsXG4gIFBST0ZJTEUgPSBcInByb2ZpbGVcIlxufVxuZXhwb3J0IGVudW0gR2VuZGVyIHtcbiAgVU5LTk9XTiA9IC0xLFxuICBNQUxFID0gMCxcbiAgRkVNQUxFID0gMSxcbiAgQ09ORklERU5USUFMID0gMlxufVxuXG5leHBvcnQgZW51bSBBdXRoUmVxdWVzdE9wdGlvbiB7XG4gIFNDT1BFX0VNQUlMID0gXCJlbWFpbFwiLFxuICBTQ09QRV9JRCA9IFwiaWRcIixcbiAgU0NPUEVfSURfVE9LRU4gPSBcImlkVG9rZW5cIixcbiAgU0NPUEVfUFJPRklMRSA9IFwicHJvZmlsZVwiLFxuICBTQ09QRV9NT0JJTEVfTlVNQkVSID0gXCJtb2JpbGVOdW1iZXJcIixcbiAgU0NPUEVfVUlEID0gXCJ1aWRcIixcbiAgU0NPUEVfQVVUSE9SSVpBVElPTl9DT0RFID0gXCJhdXRob3JpemF0aW9uQ29kZVwiLFxuICBTQ09QRV9BQ0NFU1NfVE9LRU4gPSBcImFjY2Vzc1Rva2VuXCIsXG4gIFNDT1BFX0RJQUxPR19BVVRIID0gXCJkaWFsb2dBdXRoXCIsXG4gIFNDT1BFX1NISVBQSU5HX0FERFJFU1MgPSBcInNoaXBwaW5nQWRkcmVzc1wiLFxuICBTQ09QRV9DQVJSSUVSX0lEID0gXCJjYXJyaWVySWRcIlxufVxuXG5leHBvcnQgZW51bSBBdXRoUGFyYW1zIHtcbiAgREVGQVVMVF9BVVRIX1JFUVVFU1RfUEFSQU0gPSBcIkRFRkFVTFRfQVVUSF9SRVFVRVNUX1BBUkFNXCIsXG4gIERFRkFVTFRfQVVUSF9SRVFVRVNUX1BBUkFNX0dBTUUgPSBcIkRFRkFVTFRfQVVUSF9SRVFVRVNUX1BBUkFNX0dBTUVcIlxufVxuXG5leHBvcnQgZW51bSBQYWNrYWdlTmFtZSB7XG4gIEhXSUQgPSBcIkhXSURcIixcbiAgQUNDT1VOVCA9IFwiQUNDT1VOVFwiXG59XG5cbmV4cG9ydCBlbnVtIEF1dGhJZFRva2VuU2lnbkFsZyB7XG4gIFBTMjU2ID0gMSxcbiAgUlMyNTYgPSAyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWJzdHJhY3RBdXRoQWNjb3VudCB7XG4gIHVpZD86IHN0cmluZztcbiAgb3BlbklkOiBzdHJpbmc7XG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG4gIHN0YXR1czogbnVtYmVyO1xuICBnZW5kZXI6IEdlbmRlcjtcbiAgc2VydmljZUNvdW50cnlDb2RlPzogc3RyaW5nO1xuICBjb3VudHJ5Q29kZT86IHN0cmluZztcbiAgdW5pb25JZDogc3RyaW5nO1xuICBlbWFpbD86IHN0cmluZztcbiAgZXh0ZW5zaW9uU2NvcGVzOiBzdHJpbmdbXTtcbiAgaWRUb2tlbj86IHN0cmluZztcbiAgZXhwcmVzc2lvblRpbWVTZWNzOiBudW1iZXI7XG4gIGdpdmVuTmFtZTogc3RyaW5nO1xuICBmYW1pbHlOYW1lOiBzdHJpbmc7XG4gIGNhcnJpZXJJZDogbnVtYmVyO1xuICBhZ2VSYW5nZT86IHN0cmluZztcbiAgaG9tZVpvbmU6IG51bWJlcjtcbiAgYXV0aG9yaXplZFNjb3Blczogc3RyaW5nW107XG4gIGF2YXRhclVyaVN0cmluZzogc3RyaW5nO1xuICBhdXRob3JpemF0aW9uQ29kZT86IHN0cmluZztcbiAgcmVxdWVzdGVkU2NvcGVzOiBzdHJpbmdbXTtcbiAgYWNjb3VudD86IEFjY291bnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0aEh1YXdlaUlkIGV4dGVuZHMgQWJzdHJhY3RBdXRoQWNjb3VudCB7XG4gIGFnZVJhbmdlRmxhZzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhBY2NvdW50IGV4dGVuZHMgQWJzdHJhY3RBdXRoQWNjb3VudCB7XG4gIGFjY291bnRGbGFnOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0aEJ1aWxkZXIge1xuICBvcGVuSWQ6IHN0cmluZztcbiAgdWlkOiBzdHJpbmc7XG4gIHBob3RvVXJpU3RyaW5nOiBzdHJpbmc7XG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG4gIHNlcnZpY2VDb3VudHJ5Q29kZTogc3RyaW5nO1xuICBnZW5kZXI6IEdlbmRlcjtcbiAgc3RhdHVzOiBudW1iZXI7XG4gIHVuaW9uSWQ6IHN0cmluZztcbiAgc2VydmVyQXV0aENvZGU6IHN0cmluZztcbiAgY291bnRyeUNvZGU6IHN0cmluZztcbiAgZ3JhbnRlZFNjb3BlczogQXV0aFNjb3BlTGlzdFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnRhaW5TY29wZXNSZXN1bHQge1xuICBjb250YWluU2NvcGVzOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBEb21haW5JbmZvIHtcbiAgZG9tYWluOiBzdHJpbmc7XG4gIGlzVXNlSHR0cHM6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIENvb2tpZSB7XG4gIGNvb2tpZU5hbWU6IHN0cmluZztcbiAgY29va2llVmFsdWU6IHN0cmluZztcbiAgZG9tYWluOiBzdHJpbmc7XG4gIHBhdGg6IHN0cmluZztcbiAgaXNIdHRwT25seTogYm9vbGVhbjtcbiAgaXNTZWN1cmU6IGJvb2xlYW47XG4gIG1heEFnZTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBBY2NvdW50IHtcbiAgdHlwZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWNjb3VudEljb24ge1xuICBpY29uOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2lnbkluRGF0YSB7XG4gIGF1dGhSZXF1ZXN0T3B0aW9uOiBBdXRoUmVxdWVzdE9wdGlvbltdO1xuICBhdXRoUGFyYW0/OiBBdXRoUGFyYW1zO1xuICBhdXRoU2NvcGVMaXN0PzogQXV0aFNjb3BlTGlzdFtdO1xuICBhdXRoSWRUb2tlblNpZ25BbGc/OiBBdXRoSWRUb2tlblNpZ25BbGc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2lnbkluRGF0YSB7XG4gIGF1dGhSZXF1ZXN0T3B0aW9uOiBBdXRoUmVxdWVzdE9wdGlvbltdLFxuICBhdXRoUGFyYW0/OiBBdXRoUGFyYW1zLFxuICBhdXRoU2NvcGVMaXN0PzogQXV0aFNjb3BlTGlzdFtdLFxuICBhdXRoSWRUb2tlblNpZ25BbGc/OiBBdXRoSWRUb2tlblNpZ25BbGdcbn1cblxuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0hNU0FjY291bnQnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWNjb3VudCcsXG4gIHBsdWdpblJlZjogJ0hNU0FjY291bnQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU0FjY291bnQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIHNpZ25JbihzaWduSW5EYXRhOiBTaWduSW5EYXRhLCBwYWNrYWdlTmFtZTpzdHJpbmcpOiBQcm9taXNlPEF1dGhIdWF3ZWlJZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIHNpZ25PdXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgY2FuY2VsQXV0aG9yaXphdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBzaWxlbnRTaWduSW4oYXV0aFBhcmFtczogQXV0aFBhcmFtcyxwYWNrYWdlTmFtZTpzdHJpbmcpOiBQcm9taXNlPEF1dGhIdWF3ZWlJZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGVuYWJsZUxvZ2dlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBkaXNhYmxlTG9nZ2VyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0hNU0FjY291bnRBdXRoU2VydmljZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hY2NvdW50JyxcbiAgcGx1Z2luUmVmOiAnSE1TQWNjb3VudEF1dGhTZXJ2aWNlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNBY2NvdW50QXV0aFNlcnZpY2UgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIHNpZ25JbihzaWduSW5EYXRhOiBTaWduSW5EYXRhLCBwYWNrYWdlTmFtZTpzdHJpbmcpOiBQcm9taXNlPEF1dGhBY2NvdW50PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgZ2V0SW5kZXBlbmRlbnRTaWduSW4oYWNjZXNzVG9rZW46c3RyaW5nKTogUHJvbWlzZTxBdXRoQWNjb3VudD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIHNpZ25PdXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgY2FuY2VsQXV0aG9yaXphdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBzaWxlbnRTaWduSW4oYXV0aFBhcmFtczogQXV0aFBhcmFtcywgcGFja2FnZU5hbWU6c3RyaW5nKTogUHJvbWlzZTxBdXRoQWNjb3VudD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGdldENoYW5uZWwoKTogUHJvbWlzZTxBY2NvdW50SWNvbj4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgZW51bSBUaGVtZSB7XG4gIFRIRU1FX05PX1RJVExFID0gMCxcbiAgVEhFTUVfRlVMTF9USVRMRSA9IDFcbn1cbmV4cG9ydCBlbnVtIENvbG9yUG9saWN5IHtcbiAgQ09MT1JfUE9MSUNZX1JFRCA9IDEsXG4gIENPTE9SX1BPTElDWV9XSElURSA9IDIsXG4gIENPTE9SX1BPTElDWV9XSElURV9XSVRIX0JPUkRFUiA9IDMsXG4gIENPTE9SX1BPTElDWV9CTEFDSyA9IDQsXG4gIENPTE9SX1BPTElDWV9HUkFZID0gNVxufVxuZXhwb3J0IGVudW0gQ29ybmVyUmFkaXVzIHtcbiAgQ09STkVSX1JBRElVU19MQVJHRSA9IC0xLFxuICBDT1JORVJfUkFESVVTX01FRElVTSA9IC0yLFxuICBDT1JORVJfUkFESVVTX1NNQUxMID0gLTNcbn1cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSE1TSHVhd2VpSWRBdXRoQnV0dG9uJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFjY291bnQnLFxuICBwbHVnaW5SZWY6ICdITVNIdWF3ZWlJZEF1dGhCdXR0b24nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU0h1YXdlaUlkQXV0aEJ1dHRvbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgQENvcmRvdmEoKVxuICBnZXRIdWF3ZWlJZEF1dGhCdXR0b24oZWRpdHRlZEJ1dHRvbjogc3RyaW5nLCB0aGVtZTogVGhlbWUsIGNvbG9yUG9saWN5OiBDb2xvclBvbGljeSwgY29ybmVyUmFkaXVzOiBDb3JuZXJSYWRpdXMpOiB2b2lkIHtcbiAgICByZXR1cm47XG59XG59IFxuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0hNU0h1YXdlaUlkQXV0aE1hbmFnZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWNjb3VudCcsXG4gIHBsdWdpblJlZjogJ0hNU0h1YXdlaUlkQXV0aE1hbmFnZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU0h1YXdlaUlkQXV0aE1hbmFnZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGdldEF1dGhSZXN1bHQocGFja2FnZU5hbWU6U3RyaW5nKTogUHJvbWlzZTxBdXRoSHVhd2VpSWQ+IHtcbiAgICByZXR1cm47XG59XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgZ2V0QXV0aFJlc3VsdFdpdGhTY29wZShhdXRoSHVhd2VpSWQ6IEF1dGhTY29wZUxpc3RbXSxwYWNrYWdlTmFtZTpzdHJpbmcpOiBQcm9taXNlPEF1dGhIdWF3ZWlJZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGNvbnRhaW5TY29wZXMoYXV0aEh1YXdlaUlkOiBBdXRoQnVpbGRlciwgYXV0aFNjb3BlTGlzdDogQXV0aFNjb3BlTGlzdFtdLCBwYWNrYWdlTmFtZTpzdHJpbmcpOiBQcm9taXNlPENvbnRhaW5TY29wZXNSZXN1bHQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBhZGRBdXRoU2NvcGVzKHJlcXVlc3RDb2RlOiBudW1iZXIsIGF1dGhTY29wZUxpc3Q6IEF1dGhTY29wZUxpc3RbXSwgcGFja2FnZU5hbWU6c3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSE1TQWNjb3VudEF1dGhNYW5hZ2VyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFjY291bnQnLFxuICBwbHVnaW5SZWY6ICdITVNBY2NvdW50QXV0aE1hbmFnZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU0FjY291bnRBdXRoTWFuYWdlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgZ2V0QXV0aFJlc3VsdChwYWNrYWdlTmFtZTpzdHJpbmcpOiBQcm9taXNlPEF1dGhBY2NvdW50PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgZ2V0QXV0aFJlc3VsdFdpdGhTY29wZShhdXRoQWNjb3VudDogQXV0aFNjb3BlTGlzdFtdLCBwYWNrYWdlTmFtZTpzdHJpbmcpOiBQcm9taXNlPEF1dGhBY2NvdW50PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgY29udGFpblNjb3BlcyhhdXRoQWNjb3VudDogQXV0aEJ1aWxkZXIsIGF1dGhTY29wZUxpc3Q6IEF1dGhTY29wZUxpc3RbXSwgcGFja2FnZU5hbWU6c3RyaW5nKTogUHJvbWlzZTxDb250YWluU2NvcGVzUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgYWRkQXV0aFNjb3BlcyhyZXF1ZXN0Q29kZTogbnVtYmVyLCBhdXRoU2NvcGVMaXN0OiBBdXRoU2NvcGVMaXN0W10sIHBhY2thZ2VOYW1lOnN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0hNU0h1YXdlaUlkQXV0aFRvb2wnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWNjb3VudCcsXG4gIHBsdWdpblJlZjogJ0hNU0h1YXdlaUlkQXV0aFRvb2wnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU0h1YXdlaUlkQXV0aFRvb2wgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGRlbGV0ZUF1dGhJbmZvKGFjY2Vzc1Rva2VuOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG59XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgcmVxdWVzdFVuaW9uSWQoaHVhd2VpQWNjb3VudE5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgcmVxdWVzdEFjY2Vzc1Rva2VuKGFjY291bnQ6IEFjY291bnQsIGF1dGhTY29wZUxpc3Q6IEF1dGhTY29wZUxpc3RbXSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xufVxufVxuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0hNU05ldHdvcmtUb29sJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFjY291bnQnLFxuICBwbHVnaW5SZWY6ICdITVNOZXR3b3JrVG9vbCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TTmV0d29ya1Rvb2wgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGJ1aWxkTmV0d29ya1VSTChkb21haW5IdHRwczogRG9tYWluSW5mbyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIHJldHVybjtcbn1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBidWlsZE5ldHdvcmtDb29raWUoY29va2llOiBDb29raWUpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbn1cbn1cblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdITVNSZWFkU01TTWFuYWdlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hY2NvdW50JyxcbiAgcGx1Z2luUmVmOiAnSE1TUmVhZFNNU01hbmFnZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU1JlYWRTTVNNYW5hZ2VyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBzbXNWZXJpZmljYXRpb25Db2RlKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gIHJldHVybjtcbn1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBvYnRhaW5IYXNoQ29kZSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIHN0YXJ0Q29uc2VudChwaG9uZU51bWJlcjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG59XG59Il19