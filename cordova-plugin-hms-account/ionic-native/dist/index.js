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
var HMSAccountOriginal = /** @class */ (function (_super) {
    __extends(HMSAccountOriginal, _super);
    function HMSAccountOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSAccountOriginal.prototype.signIn = function (signInData) { return cordova(this, "signIn", { "otherPromise": true }, arguments); };
    HMSAccountOriginal.prototype.signOut = function () { return cordova(this, "signOut", { "otherPromise": true }, arguments); };
    HMSAccountOriginal.prototype.cancelAuthorization = function () { return cordova(this, "cancelAuthorization", { "otherPromise": true }, arguments); };
    HMSAccountOriginal.prototype.silentSignIn = function (authParams) { return cordova(this, "silentSignIn", { "otherPromise": true }, arguments); };
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
    HMSAccountAuthServiceOriginal.prototype.signIn = function (signInData) { return cordova(this, "signIn", { "otherPromise": true }, arguments); };
    HMSAccountAuthServiceOriginal.prototype.signOut = function () { return cordova(this, "signOut", { "otherPromise": true }, arguments); };
    HMSAccountAuthServiceOriginal.prototype.cancelAuthorization = function () { return cordova(this, "cancelAuthorization", { "otherPromise": true }, arguments); };
    HMSAccountAuthServiceOriginal.prototype.silentSignIn = function (authParams) { return cordova(this, "silentSignIn", { "otherPromise": true }, arguments); };
    HMSAccountAuthServiceOriginal.prototype.getChannel = function () { return cordova(this, "getChannel", { "otherPromise": true }, arguments); };
    HMSAccountAuthServiceOriginal.prototype.getIndependentSignIn = function (accessToken) { return cordova(this, "getIndependentSignIn", { "otherPromise": true }, arguments); };
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
    HMSHuaweiIdAuthManagerOriginal.prototype.getAuthResult = function () { return cordova(this, "getAuthResult", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthManagerOriginal.prototype.getAuthResultWithScope = function (authHuaweiId) { return cordova(this, "getAuthResultWithScope", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthManagerOriginal.prototype.containScopes = function (authHuaweiId, authScopeList) { return cordova(this, "containScopes", { "otherPromise": true }, arguments); };
    HMSHuaweiIdAuthManagerOriginal.prototype.addAuthScopes = function (requestCode, authScopeList) { return cordova(this, "addAuthScopes", { "otherPromise": true }, arguments); };
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
    HMSAccountAuthManagerOriginal.prototype.getAuthResult = function () { return cordova(this, "getAuthResult", { "otherPromise": true }, arguments); };
    HMSAccountAuthManagerOriginal.prototype.getAuthResultWithScope = function (authAccount) { return cordova(this, "getAuthResultWithScope", { "otherPromise": true }, arguments); };
    HMSAccountAuthManagerOriginal.prototype.containScopes = function (authAccount, authScopeList) { return cordova(this, "containScopes", { "otherPromise": true }, arguments); };
    HMSAccountAuthManagerOriginal.prototype.addAuthScopes = function (requestCode, authScopeList) { return cordova(this, "addAuthScopes", { "otherPromise": true }, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1hY2NvdW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFpQkEsT0FBTyw4QkFBMEYsTUFBTSxvQkFBb0IsQ0FBQztBQUc1SCxNQUFNLENBQU4sSUFBWSxhQUtYO0FBTEQsV0FBWSxhQUFhO0lBQ3ZCLDJEQUEwQyxDQUFBO0lBQzFDLGtDQUFpQixDQUFBO0lBQ2pCLGdDQUFlLENBQUE7SUFDZixvQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBTFcsYUFBYSxLQUFiLGFBQWEsUUFLeEI7QUFDRCxNQUFNLENBQU4sSUFBWSxNQUtYO0FBTEQsV0FBWSxNQUFNO0lBQ2hCLDBDQUFZLENBQUE7SUFDWixtQ0FBUSxDQUFBO0lBQ1IsdUNBQVUsQ0FBQTtJQUNWLG1EQUFnQixDQUFBO0FBQ2xCLENBQUMsRUFMVyxNQUFNLEtBQU4sTUFBTSxRQUtqQjtBQUVELE1BQU0sQ0FBTixJQUFZLGlCQVlYO0FBWkQsV0FBWSxpQkFBaUI7SUFDM0IsMENBQXFCLENBQUE7SUFDckIsb0NBQWUsQ0FBQTtJQUNmLCtDQUEwQixDQUFBO0lBQzFCLDhDQUF5QixDQUFBO0lBQ3pCLHlEQUFvQyxDQUFBO0lBQ3BDLHNDQUFpQixDQUFBO0lBQ2pCLG1FQUE4QyxDQUFBO0lBQzlDLHVEQUFrQyxDQUFBO0lBQ2xDLHFEQUFnQyxDQUFBO0lBQ2hDLCtEQUEwQyxDQUFBO0lBQzFDLG1EQUE4QixDQUFBO0FBQ2hDLENBQUMsRUFaVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBWTVCO0FBRUQsTUFBTSxDQUFOLElBQVksVUFHWDtBQUhELFdBQVksVUFBVTtJQUNwQix1RUFBeUQsQ0FBQTtJQUN6RCxpRkFBbUUsQ0FBQTtBQUNyRSxDQUFDLEVBSFcsVUFBVSxLQUFWLFVBQVUsUUFHckI7O0lBZ0crQiw4QkFBaUI7Ozs7SUFFL0MsMkJBQU0sYUFBQyxVQUFzQjtJQUs3Qiw0QkFBTztJQUtQLHdDQUFtQjtJQUtuQixpQ0FBWSxhQUFDLFVBQXNCO0lBS25DLGlDQUFZO0lBS1osa0NBQWE7Ozs7O3FCQTdLZjtFQWtKZ0MsaUJBQWlCO1NBQXBDLFVBQVU7O0lBeUNvQix5Q0FBaUI7Ozs7SUFFMUQsc0NBQU0sYUFBQyxVQUFzQjtJQUs3Qix1Q0FBTztJQUtQLG1EQUFtQjtJQUtuQiw0Q0FBWSxhQUFDLFVBQXNCO0lBS25DLDBDQUFVO0lBS1Ysb0RBQW9CLGFBQUUsV0FBa0I7Ozs7O2dDQXROMUM7RUEyTDJDLGlCQUFpQjtTQUEvQyxxQkFBcUI7QUFnQ2xDLE1BQU0sQ0FBTixJQUFZLEtBR1g7QUFIRCxXQUFZLEtBQUs7SUFDZixxREFBa0IsQ0FBQTtJQUNsQix5REFBb0IsQ0FBQTtBQUN0QixDQUFDLEVBSFcsS0FBSyxLQUFMLEtBQUssUUFHaEI7QUFDRCxNQUFNLENBQU4sSUFBWSxXQU9YO0FBUEQsV0FBWSxXQUFXO0lBQ3JCLHVFQUFxQixDQUFBO0lBQ3JCLHFFQUFvQixDQUFBO0lBQ3BCLHlFQUFzQixDQUFBO0lBQ3RCLGlHQUFrQyxDQUFBO0lBQ2xDLHlFQUFzQixDQUFBO0lBQ3RCLHVFQUFxQixDQUFBO0FBQ3ZCLENBQUMsRUFQVyxXQUFXLEtBQVgsV0FBVyxRQU90QjtBQUNELE1BQU0sQ0FBTixJQUFZLFlBSVg7QUFKRCxXQUFZLFlBQVk7SUFDdEIsOEVBQXdCLENBQUE7SUFDeEIsZ0ZBQXlCLENBQUE7SUFDekIsOEVBQXdCLENBQUE7QUFDMUIsQ0FBQyxFQUpXLFlBQVksS0FBWixZQUFZLFFBSXZCOztJQVMwQyx5Q0FBaUI7Ozs7SUFFMUQscURBQXFCLGFBQUMsYUFBcUIsRUFBRSxLQUFZLEVBQUUsV0FBd0IsRUFBRSxZQUEwQjs7Ozs7Z0NBdFBqSDtFQW9QMkMsaUJBQWlCO1NBQS9DLHFCQUFxQjs7SUFjVSwwQ0FBaUI7Ozs7SUFFM0QsOENBQWE7SUFLYix1REFBc0IsYUFBQyxZQUE2QjtJQUtwRCw4Q0FBYSxhQUFDLFlBQXlCLEVBQUUsYUFBOEI7SUFLdkUsOENBQWEsYUFBQyxXQUFtQixFQUFFLGFBQThCOzs7OztpQ0FuUm5FO0VBa1E0QyxpQkFBaUI7U0FBaEQsc0JBQXNCOztJQThCUSx5Q0FBaUI7Ozs7SUFFMUQsNkNBQWE7SUFLYixzREFBc0IsYUFBQyxXQUE0QjtJQUtuRCw2Q0FBYSxhQUFDLFdBQXdCLEVBQUUsYUFBOEI7SUFLdEUsNkNBQWEsYUFBQyxXQUFtQixFQUFFLGFBQThCOzs7OztnQ0FqVG5FO0VBZ1MyQyxpQkFBaUI7U0FBL0MscUJBQXFCOztJQTZCTyx1Q0FBaUI7Ozs7SUFFeEQsNENBQWMsYUFBQyxXQUFtQjtJQUtsQyw0Q0FBYyxhQUFDLGlCQUF5QjtJQUt4QyxnREFBa0IsYUFBQyxPQUFnQixFQUFFLGFBQThCOzs7Ozs4QkF6VXJFO0VBNlR5QyxpQkFBaUI7U0FBN0MsbUJBQW1COztJQXdCSSxrQ0FBaUI7Ozs7SUFFbkQsd0NBQWUsYUFBQyxXQUF1QjtJQUt2QywyQ0FBa0IsYUFBQyxNQUFjOzs7Ozt5QkE1Vm5DO0VBcVZvQyxpQkFBaUI7U0FBeEMsY0FBYzs7SUFtQlkscUNBQWlCOzs7O0lBRXRELCtDQUFtQjtJQUtuQiwwQ0FBYztJQUtkLHdDQUFZLGFBQUMsV0FBbUI7Ozs7OzRCQXBYbEM7RUF3V3VDLGlCQUFpQjtTQUEzQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgQ29weXJpZ2h0IDIwMjAtMjAyMS4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuXHJcbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXHJcbiAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuXHJcbiAgICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGVudW0gQXV0aFNjb3BlTGlzdCB7XHJcbiAgR0FNRSA9IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9hdXRoL2dhbWVzXCIsXHJcbiAgT1BFTklEID0gXCJvcGVuaWRcIixcclxuICBFTUFJTCA9IFwiZW1haWxcIixcclxuICBQUk9GSUxFID0gXCJwcm9maWxlXCJcclxufVxyXG5leHBvcnQgZW51bSBHZW5kZXIge1xyXG4gIFVOS05PV04gPSAtMSxcclxuICBNQUxFID0gMCxcclxuICBGRU1BTEUgPSAxLFxyXG4gIENPTkZJREVOVElBTCA9IDJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQXV0aFJlcXVlc3RPcHRpb24ge1xyXG4gIFNDT1BFX0VNQUlMID0gXCJlbWFpbFwiLFxyXG4gIFNDT1BFX0lEID0gXCJpZFwiLFxyXG4gIFNDT1BFX0lEX1RPS0VOID0gXCJpZFRva2VuXCIsXHJcbiAgU0NPUEVfUFJPRklMRSA9IFwicHJvZmlsZVwiLFxyXG4gIFNDT1BFX01PQklMRV9OVU1CRVIgPSBcIm1vYmlsZU51bWJlclwiLFxyXG4gIFNDT1BFX1VJRCA9IFwidWlkXCIsXHJcbiAgU0NPUEVfQVVUSE9SSVpBVElPTl9DT0RFID0gXCJhdXRob3JpemF0aW9uQ29kZVwiLFxyXG4gIFNDT1BFX0FDQ0VTU19UT0tFTiA9IFwiYWNjZXNzVG9rZW5cIixcclxuICBTQ09QRV9ESUFMT0dfQVVUSCA9IFwiZGlhbG9nQXV0aFwiLFxyXG4gIFNDT1BFX1NISVBQSU5HX0FERFJFU1MgPSBcInNoaXBwaW5nQWRkcmVzc1wiLFxyXG4gIFNDT1BFX0NBUlJJRVJfSUQgPSBcImNhcnJpZXJJZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEF1dGhQYXJhbXMge1xyXG4gIERFRkFVTFRfQVVUSF9SRVFVRVNUX1BBUkFNID0gXCJERUZBVUxUX0FVVEhfUkVRVUVTVF9QQVJBTVwiLFxyXG4gIERFRkFVTFRfQVVUSF9SRVFVRVNUX1BBUkFNX0dBTUUgPSBcIkRFRkFVTFRfQVVUSF9SRVFVRVNUX1BBUkFNX0dBTUVcIlxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFic3RyYWN0QXV0aEFjY291bnQge1xyXG4gIHVpZD86IHN0cmluZztcclxuICBvcGVuSWQ6IHN0cmluZztcclxuICBkaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcbiAgc3RhdHVzOiBudW1iZXI7XHJcbiAgZ2VuZGVyOiBHZW5kZXI7XHJcbiAgc2VydmljZUNvdW50cnlDb2RlPzogc3RyaW5nO1xyXG4gIGNvdW50cnlDb2RlPzogc3RyaW5nO1xyXG4gIHVuaW9uSWQ6IHN0cmluZztcclxuICBlbWFpbD86IHN0cmluZztcclxuICBleHRlbnNpb25TY29wZXM6IHN0cmluZ1tdO1xyXG4gIGlkVG9rZW4/OiBzdHJpbmc7XHJcbiAgZXhwcmVzc2lvblRpbWVTZWNzOiBudW1iZXI7XHJcbiAgZ2l2ZW5OYW1lOiBzdHJpbmc7XHJcbiAgZmFtaWx5TmFtZTogc3RyaW5nO1xyXG4gIGNhcnJpZXJJZDpudW1iZXI7XHJcbiAgYWdlUmFuZ2U/OiBzdHJpbmc7XHJcbiAgaG9tZVpvbmU6IG51bWJlcjtcclxuICBhdXRob3JpemVkU2NvcGVzOiBzdHJpbmdbXTtcclxuICBhdmF0YXJVcmlTdHJpbmc6IHN0cmluZztcclxuICBhdXRob3JpemF0aW9uQ29kZT86IHN0cmluZztcclxuICByZXF1ZXN0ZWRTY29wZXM6IHN0cmluZ1tdO1xyXG4gIGFjY291bnQ/OiBBY2NvdW50O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhIdWF3ZWlJZCBleHRlbmRzIEFic3RyYWN0QXV0aEFjY291bnQge1xyXG4gIGFnZVJhbmdlRmxhZzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhBY2NvdW50IGV4dGVuZHMgQWJzdHJhY3RBdXRoQWNjb3VudCB7XHJcbiAgYWNjb3VudEZsYWc6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRoQnVpbGRlciB7XHJcbiAgb3BlbklkOiBzdHJpbmc7XHJcbiAgdWlkOiBzdHJpbmc7XHJcbiAgcGhvdG9VcmlTdHJpbmc6IHN0cmluZztcclxuICBkaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcbiAgc2VydmljZUNvdW50cnlDb2RlOiBzdHJpbmc7XHJcbiAgZ2VuZGVyOiBHZW5kZXI7XHJcbiAgc3RhdHVzOiBudW1iZXI7XHJcbiAgdW5pb25JZDogc3RyaW5nO1xyXG4gIHNlcnZlckF1dGhDb2RlOiBzdHJpbmc7XHJcbiAgY291bnRyeUNvZGU6IHN0cmluZztcclxuICBncmFudGVkU2NvcGVzOiBBdXRoU2NvcGVMaXN0W107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29udGFpblNjb3Blc1Jlc3VsdCB7XHJcbiAgY29udGFpblNjb3BlczogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIERvbWFpbkluZm8ge1xyXG4gIGRvbWFpbjogc3RyaW5nO1xyXG4gIGlzVXNlSHR0cHM6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDb29raWUge1xyXG4gIGNvb2tpZU5hbWU6IHN0cmluZztcclxuICBjb29raWVWYWx1ZTogc3RyaW5nO1xyXG4gIGRvbWFpbjogc3RyaW5nO1xyXG4gIHBhdGg6IHN0cmluZztcclxuICBpc0h0dHBPbmx5OiBib29sZWFuO1xyXG4gIGlzU2VjdXJlOiBib29sZWFuO1xyXG4gIG1heEFnZTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQWNjb3VudCB7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY2NvdW50SWNvbiB7XHJcbiAgaWNvbjogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lnbkluRGF0YSB7XHJcbiAgYXV0aFJlcXVlc3RPcHRpb246IEF1dGhSZXF1ZXN0T3B0aW9uW107XHJcbiAgYXV0aFBhcmFtPzogQXV0aFBhcmFtcztcclxuICBhdXRoU2NvcGVMaXN0PzogQXV0aFNjb3BlTGlzdFtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25JbkRhdGEge1xyXG4gIGF1dGhSZXF1ZXN0T3B0aW9uOiBBdXRoUmVxdWVzdE9wdGlvbltdLFxyXG4gIGF1dGhQYXJhbT86IEF1dGhQYXJhbXMsXHJcbiAgYXV0aFNjb3BlTGlzdD86IEF1dGhTY29wZUxpc3RbXVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSE1TQWNjb3VudCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFjY291bnQnLFxyXG4gIHBsdWdpblJlZjogJ0hNU0FjY291bnQnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TQWNjb3VudCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNpZ25JbihzaWduSW5EYXRhOiBTaWduSW5EYXRhKTogUHJvbWlzZTxBdXRoSHVhd2VpSWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2lnbk91dCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY2FuY2VsQXV0aG9yaXphdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2lsZW50U2lnbkluKGF1dGhQYXJhbXM6IEF1dGhQYXJhbXMpOiBQcm9taXNlPEF1dGhIdWF3ZWlJZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGRpc2FibGVMb2dnZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNBY2NvdW50QXV0aFNlcnZpY2UnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hY2NvdW50JyxcclxuICBwbHVnaW5SZWY6ICdITVNBY2NvdW50QXV0aFNlcnZpY2UnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TQWNjb3VudEF1dGhTZXJ2aWNlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2lnbkluKHNpZ25JbkRhdGE6IFNpZ25JbkRhdGEpOiBQcm9taXNlPEF1dGhBY2NvdW50PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNpZ25PdXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGNhbmNlbEF1dGhvcml6YXRpb24oKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNpbGVudFNpZ25JbihhdXRoUGFyYW1zOiBBdXRoUGFyYW1zKTogUHJvbWlzZTxBdXRoQWNjb3VudD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBnZXRDaGFubmVsKCk6IFByb21pc2U8QWNjb3VudEljb24+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0SW5kZXBlbmRlbnRTaWduSW4oIGFjY2Vzc1Rva2VuOnN0cmluZyApOiBQcm9taXNlPEF1dGhBY2NvdW50PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBUaGVtZSB7XHJcbiAgVEhFTUVfTk9fVElUTEUgPSAwLFxyXG4gIFRIRU1FX0ZVTExfVElUTEUgPSAxXHJcbn1cclxuZXhwb3J0IGVudW0gQ29sb3JQb2xpY3kge1xyXG4gIENPTE9SX1BPTElDWV9CTFVFID0gMCxcclxuICBDT0xPUl9QT0xJQ1lfUkVEID0gMSxcclxuICBDT0xPUl9QT0xJQ1lfV0hJVEUgPSAyLFxyXG4gIENPTE9SX1BPTElDWV9XSElURV9XSVRIX0JPUkRFUiA9IDMsXHJcbiAgQ09MT1JfUE9MSUNZX0JMQUNLID0gNCxcclxuICBDT0xPUl9QT0xJQ1lfR1JBWSA9IDVcclxufVxyXG5leHBvcnQgZW51bSBDb3JuZXJSYWRpdXMge1xyXG4gIENPUk5FUl9SQURJVVNfTEFSR0UgPSAtMSxcclxuICBDT1JORVJfUkFESVVTX01FRElVTSA9IC0yLFxyXG4gIENPUk5FUl9SQURJVVNfU01BTEwgPSAtM1xyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSE1TSHVhd2VpSWRBdXRoQnV0dG9uJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWNjb3VudCcsXHJcbiAgcGx1Z2luUmVmOiAnSE1TSHVhd2VpSWRBdXRoQnV0dG9uJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0h1YXdlaUlkQXV0aEJ1dHRvbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0SHVhd2VpSWRBdXRoQnV0dG9uKGVkaXR0ZWRCdXR0b246IHN0cmluZywgdGhlbWU6IFRoZW1lLCBjb2xvclBvbGljeTogQ29sb3JQb2xpY3ksIGNvcm5lclJhZGl1czogQ29ybmVyUmFkaXVzKTogdm9pZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSE1TSHVhd2VpSWRBdXRoTWFuYWdlcicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFjY291bnQnLFxyXG4gIHBsdWdpblJlZjogJ0hNU0h1YXdlaUlkQXV0aE1hbmFnZXInLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TSHVhd2VpSWRBdXRoTWFuYWdlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldEF1dGhSZXN1bHQoKTogUHJvbWlzZTxBdXRoSHVhd2VpSWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0QXV0aFJlc3VsdFdpdGhTY29wZShhdXRoSHVhd2VpSWQ6IEF1dGhTY29wZUxpc3RbXSk6IFByb21pc2U8QXV0aEh1YXdlaUlkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGNvbnRhaW5TY29wZXMoYXV0aEh1YXdlaUlkOiBBdXRoQnVpbGRlciwgYXV0aFNjb3BlTGlzdDogQXV0aFNjb3BlTGlzdFtdKTogUHJvbWlzZTxDb250YWluU2NvcGVzUmVzdWx0PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGFkZEF1dGhTY29wZXMocmVxdWVzdENvZGU6IG51bWJlciwgYXV0aFNjb3BlTGlzdDogQXV0aFNjb3BlTGlzdFtdKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSE1TQWNjb3VudEF1dGhNYW5hZ2VyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWNjb3VudCcsXHJcbiAgcGx1Z2luUmVmOiAnSE1TQWNjb3VudEF1dGhNYW5hZ2VyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNBY2NvdW50QXV0aE1hbmFnZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBnZXRBdXRoUmVzdWx0KCk6IFByb21pc2U8QXV0aEFjY291bnQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0QXV0aFJlc3VsdFdpdGhTY29wZShhdXRoQWNjb3VudDogQXV0aFNjb3BlTGlzdFtdKTogUHJvbWlzZTxBdXRoQWNjb3VudD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBjb250YWluU2NvcGVzKGF1dGhBY2NvdW50OiBBdXRoQnVpbGRlciwgYXV0aFNjb3BlTGlzdDogQXV0aFNjb3BlTGlzdFtdKTogUHJvbWlzZTxDb250YWluU2NvcGVzUmVzdWx0PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGFkZEF1dGhTY29wZXMocmVxdWVzdENvZGU6IG51bWJlciwgYXV0aFNjb3BlTGlzdDogQXV0aFNjb3BlTGlzdFtdKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSE1TSHVhd2VpSWRBdXRoVG9vbCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFjY291bnQnLFxyXG4gIHBsdWdpblJlZjogJ0hNU0h1YXdlaUlkQXV0aFRvb2wnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TSHVhd2VpSWRBdXRoVG9vbCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGRlbGV0ZUF1dGhJbmZvKGFjY2Vzc1Rva2VuOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgcmVxdWVzdFVuaW9uSWQoaHVhd2VpQWNjb3VudE5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHJlcXVlc3RBY2Nlc3NUb2tlbihhY2NvdW50OiBBY2NvdW50LCBhdXRoU2NvcGVMaXN0OiBBdXRoU2NvcGVMaXN0W10pOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU05ldHdvcmtUb29sJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWNjb3VudCcsXHJcbiAgcGx1Z2luUmVmOiAnSE1TTmV0d29ya1Rvb2wnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TTmV0d29ya1Rvb2wgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBidWlsZE5ldHdvcmtVUkwoZG9tYWluSHR0cHM6IERvbWFpbkluZm8pOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBidWlsZE5ldHdvcmtDb29raWUoY29va2llOiBDb29raWUpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU1JlYWRTTVNNYW5hZ2VyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWNjb3VudCcsXHJcbiAgcGx1Z2luUmVmOiAnSE1TUmVhZFNNU01hbmFnZXInLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TUmVhZFNNU01hbmFnZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzbXNWZXJpZmljYXRpb25Db2RlKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIG9idGFpbkhhc2hDb2RlKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHN0YXJ0Q29uc2VudChwaG9uZU51bWJlcjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn0iXX0=