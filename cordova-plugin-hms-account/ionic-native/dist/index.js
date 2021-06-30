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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1hY2NvdW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFpQkEsT0FBTyw4QkFBMEYsTUFBTSxvQkFBb0IsQ0FBQztBQUc1SCxNQUFNLENBQU4sSUFBWSxhQUtYO0FBTEQsV0FBWSxhQUFhO0lBQ3ZCLDJEQUEwQyxDQUFBO0lBQzFDLGtDQUFpQixDQUFBO0lBQ2pCLGdDQUFlLENBQUE7SUFDZixvQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBTFcsYUFBYSxLQUFiLGFBQWEsUUFLeEI7QUFDRCxNQUFNLENBQU4sSUFBWSxNQUtYO0FBTEQsV0FBWSxNQUFNO0lBQ2hCLDBDQUFZLENBQUE7SUFDWixtQ0FBUSxDQUFBO0lBQ1IsdUNBQVUsQ0FBQTtJQUNWLG1EQUFnQixDQUFBO0FBQ2xCLENBQUMsRUFMVyxNQUFNLEtBQU4sTUFBTSxRQUtqQjtBQUVELE1BQU0sQ0FBTixJQUFZLGlCQVdYO0FBWEQsV0FBWSxpQkFBaUI7SUFDM0IsMENBQXFCLENBQUE7SUFDckIsb0NBQWUsQ0FBQTtJQUNmLCtDQUEwQixDQUFBO0lBQzFCLDhDQUF5QixDQUFBO0lBQ3pCLHlEQUFvQyxDQUFBO0lBQ3BDLHNDQUFpQixDQUFBO0lBQ2pCLG1FQUE4QyxDQUFBO0lBQzlDLHVEQUFrQyxDQUFBO0lBQ2xDLHFEQUFnQyxDQUFBO0lBQ2hDLCtEQUEwQyxDQUFBO0FBQzVDLENBQUMsRUFYVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBVzVCO0FBRUQsTUFBTSxDQUFOLElBQVksVUFHWDtBQUhELFdBQVksVUFBVTtJQUNwQix1RUFBeUQsQ0FBQTtJQUN6RCxpRkFBbUUsQ0FBQTtBQUNyRSxDQUFDLEVBSFcsVUFBVSxLQUFWLFVBQVUsUUFHckI7O0lBK0YrQiw4QkFBaUI7Ozs7SUFFL0MsMkJBQU0sYUFBQyxVQUFzQjtJQUs3Qiw0QkFBTztJQUtQLHdDQUFtQjtJQUtuQixpQ0FBWSxhQUFDLFVBQXNCO0lBS25DLGlDQUFZO0lBS1osa0NBQWE7Ozs7O3FCQTNLZjtFQWdKZ0MsaUJBQWlCO1NBQXBDLFVBQVU7O0lBeUNvQix5Q0FBaUI7Ozs7SUFFMUQsc0NBQU0sYUFBQyxVQUFzQjtJQUs3Qix1Q0FBTztJQUtQLG1EQUFtQjtJQUtuQiw0Q0FBWSxhQUFDLFVBQXNCO0lBS25DLDBDQUFVOzs7OztnQ0EvTVo7RUF5TDJDLGlCQUFpQjtTQUEvQyxxQkFBcUI7QUE0QmxDLE1BQU0sQ0FBTixJQUFZLEtBR1g7QUFIRCxXQUFZLEtBQUs7SUFDZixxREFBa0IsQ0FBQTtJQUNsQix5REFBb0IsQ0FBQTtBQUN0QixDQUFDLEVBSFcsS0FBSyxLQUFMLEtBQUssUUFHaEI7QUFDRCxNQUFNLENBQU4sSUFBWSxXQU9YO0FBUEQsV0FBWSxXQUFXO0lBQ3JCLHVFQUFxQixDQUFBO0lBQ3JCLHFFQUFvQixDQUFBO0lBQ3BCLHlFQUFzQixDQUFBO0lBQ3RCLGlHQUFrQyxDQUFBO0lBQ2xDLHlFQUFzQixDQUFBO0lBQ3RCLHVFQUFxQixDQUFBO0FBQ3ZCLENBQUMsRUFQVyxXQUFXLEtBQVgsV0FBVyxRQU90QjtBQUNELE1BQU0sQ0FBTixJQUFZLFlBSVg7QUFKRCxXQUFZLFlBQVk7SUFDdEIsOEVBQXdCLENBQUE7SUFDeEIsZ0ZBQXlCLENBQUE7SUFDekIsOEVBQXdCLENBQUE7QUFDMUIsQ0FBQyxFQUpXLFlBQVksS0FBWixZQUFZLFFBSXZCOztJQVMwQyx5Q0FBaUI7Ozs7SUFFMUQscURBQXFCLGFBQUMsYUFBcUIsRUFBRSxLQUFZLEVBQUUsV0FBd0IsRUFBRSxZQUEwQjs7Ozs7Z0NBaFBqSDtFQThPMkMsaUJBQWlCO1NBQS9DLHFCQUFxQjs7SUFjVSwwQ0FBaUI7Ozs7SUFFM0QsOENBQWE7SUFLYix1REFBc0IsYUFBQyxZQUE2QjtJQUtwRCw4Q0FBYSxhQUFDLFlBQXlCLEVBQUUsYUFBOEI7SUFLdkUsOENBQWEsYUFBQyxXQUFtQixFQUFFLGFBQThCOzs7OztpQ0E3UW5FO0VBNFA0QyxpQkFBaUI7U0FBaEQsc0JBQXNCOztJQThCUSx5Q0FBaUI7Ozs7SUFFMUQsNkNBQWE7SUFLYixzREFBc0IsYUFBQyxXQUE0QjtJQUtuRCw2Q0FBYSxhQUFDLFdBQXdCLEVBQUUsYUFBOEI7SUFLdEUsNkNBQWEsYUFBQyxXQUFtQixFQUFFLGFBQThCOzs7OztnQ0EzU25FO0VBMFIyQyxpQkFBaUI7U0FBL0MscUJBQXFCOztJQTZCTyx1Q0FBaUI7Ozs7SUFFeEQsNENBQWMsYUFBQyxXQUFtQjtJQUtsQyw0Q0FBYyxhQUFDLGlCQUF5QjtJQUt4QyxnREFBa0IsYUFBQyxPQUFnQixFQUFFLGFBQThCOzs7Ozs4QkFuVXJFO0VBdVR5QyxpQkFBaUI7U0FBN0MsbUJBQW1COztJQXdCSSxrQ0FBaUI7Ozs7SUFFbkQsd0NBQWUsYUFBQyxXQUF1QjtJQUt2QywyQ0FBa0IsYUFBQyxNQUFjOzs7Ozt5QkF0Vm5DO0VBK1VvQyxpQkFBaUI7U0FBeEMsY0FBYzs7SUFtQlkscUNBQWlCOzs7O0lBRXRELCtDQUFtQjtJQUtuQiwwQ0FBYztJQUtkLHdDQUFZLGFBQUMsV0FBbUI7Ozs7OzRCQTlXbEM7RUFrV3VDLGlCQUFpQjtTQUEzQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgQ29weXJpZ2h0IDIwMjAtMjAyMS4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuXHJcbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXHJcbiAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuXHJcbiAgICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGVudW0gQXV0aFNjb3BlTGlzdCB7XHJcbiAgR0FNRSA9IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9hdXRoL2dhbWVzXCIsXHJcbiAgT1BFTklEID0gXCJvcGVuaWRcIixcclxuICBFTUFJTCA9IFwiZW1haWxcIixcclxuICBQUk9GSUxFID0gXCJwcm9maWxlXCJcclxufVxyXG5leHBvcnQgZW51bSBHZW5kZXIge1xyXG4gIFVOS05PV04gPSAtMSxcclxuICBNQUxFID0gMCxcclxuICBGRU1BTEUgPSAxLFxyXG4gIENPTkZJREVOVElBTCA9IDJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQXV0aFJlcXVlc3RPcHRpb24ge1xyXG4gIFNDT1BFX0VNQUlMID0gXCJlbWFpbFwiLFxyXG4gIFNDT1BFX0lEID0gXCJpZFwiLFxyXG4gIFNDT1BFX0lEX1RPS0VOID0gXCJpZFRva2VuXCIsXHJcbiAgU0NPUEVfUFJPRklMRSA9IFwicHJvZmlsZVwiLFxyXG4gIFNDT1BFX01PQklMRV9OVU1CRVIgPSBcIm1vYmlsZU51bWJlclwiLFxyXG4gIFNDT1BFX1VJRCA9IFwidWlkXCIsXHJcbiAgU0NPUEVfQVVUSE9SSVpBVElPTl9DT0RFID0gXCJhdXRob3JpemF0aW9uQ29kZVwiLFxyXG4gIFNDT1BFX0FDQ0VTU19UT0tFTiA9IFwiYWNjZXNzVG9rZW5cIixcclxuICBTQ09QRV9ESUFMT0dfQVVUSCA9IFwiZGlhbG9nQXV0aFwiLFxyXG4gIFNDT1BFX1NISVBQSU5HX0FERFJFU1MgPSBcInNoaXBwaW5nQWRkcmVzc1wiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEF1dGhQYXJhbXMge1xyXG4gIERFRkFVTFRfQVVUSF9SRVFVRVNUX1BBUkFNID0gXCJERUZBVUxUX0FVVEhfUkVRVUVTVF9QQVJBTVwiLFxyXG4gIERFRkFVTFRfQVVUSF9SRVFVRVNUX1BBUkFNX0dBTUUgPSBcIkRFRkFVTFRfQVVUSF9SRVFVRVNUX1BBUkFNX0dBTUVcIlxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFic3RyYWN0QXV0aEFjY291bnQge1xyXG4gIHVpZD86IHN0cmluZztcclxuICBvcGVuSWQ6IHN0cmluZztcclxuICBkaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcbiAgc3RhdHVzOiBudW1iZXI7XHJcbiAgZ2VuZGVyOiBHZW5kZXI7XHJcbiAgc2VydmljZUNvdW50cnlDb2RlPzogc3RyaW5nO1xyXG4gIGNvdW50cnlDb2RlPzogc3RyaW5nO1xyXG4gIHVuaW9uSWQ6IHN0cmluZztcclxuICBlbWFpbD86IHN0cmluZztcclxuICBleHRlbnNpb25TY29wZXM6IHN0cmluZ1tdO1xyXG4gIGlkVG9rZW4/OiBzdHJpbmc7XHJcbiAgZXhwcmVzc2lvblRpbWVTZWNzOiBudW1iZXI7XHJcbiAgZ2l2ZW5OYW1lOiBzdHJpbmc7XHJcbiAgZmFtaWx5TmFtZTogc3RyaW5nO1xyXG4gIGFnZVJhbmdlPzogc3RyaW5nO1xyXG4gIGhvbWVab25lOiBudW1iZXI7XHJcbiAgYXV0aG9yaXplZFNjb3Blczogc3RyaW5nW107XHJcbiAgYXZhdGFyVXJpU3RyaW5nOiBzdHJpbmc7XHJcbiAgYXV0aG9yaXphdGlvbkNvZGU/OiBzdHJpbmc7XHJcbiAgcmVxdWVzdGVkU2NvcGVzOiBzdHJpbmdbXTtcclxuICBhY2NvdW50PzogQWNjb3VudDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRoSHVhd2VpSWQgZXh0ZW5kcyBBYnN0cmFjdEF1dGhBY2NvdW50IHtcclxuICBhZ2VSYW5nZUZsYWc6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRoQWNjb3VudCBleHRlbmRzIEFic3RyYWN0QXV0aEFjY291bnQge1xyXG4gIGFjY291bnRGbGFnOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aEJ1aWxkZXIge1xyXG4gIG9wZW5JZDogc3RyaW5nO1xyXG4gIHVpZDogc3RyaW5nO1xyXG4gIHBob3RvVXJpU3RyaW5nOiBzdHJpbmc7XHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG4gIHNlcnZpY2VDb3VudHJ5Q29kZTogc3RyaW5nO1xyXG4gIGdlbmRlcjogR2VuZGVyO1xyXG4gIHN0YXR1czogbnVtYmVyO1xyXG4gIHVuaW9uSWQ6IHN0cmluZztcclxuICBzZXJ2ZXJBdXRoQ29kZTogc3RyaW5nO1xyXG4gIGNvdW50cnlDb2RlOiBzdHJpbmc7XHJcbiAgZ3JhbnRlZFNjb3BlczogQXV0aFNjb3BlTGlzdFtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbnRhaW5TY29wZXNSZXN1bHQge1xyXG4gIGNvbnRhaW5TY29wZXM6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBEb21haW5JbmZvIHtcclxuICBkb21haW46IHN0cmluZztcclxuICBpc1VzZUh0dHBzOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29va2llIHtcclxuICBjb29raWVOYW1lOiBzdHJpbmc7XHJcbiAgY29va2llVmFsdWU6IHN0cmluZztcclxuICBkb21haW46IHN0cmluZztcclxuICBwYXRoOiBzdHJpbmc7XHJcbiAgaXNIdHRwT25seTogYm9vbGVhbjtcclxuICBpc1NlY3VyZTogYm9vbGVhbjtcclxuICBtYXhBZ2U6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEFjY291bnQge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWNjb3VudEljb24ge1xyXG4gIGljb246IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25JbkRhdGEge1xyXG4gIGF1dGhSZXF1ZXN0T3B0aW9uOiBBdXRoUmVxdWVzdE9wdGlvbltdO1xyXG4gIGF1dGhQYXJhbT86IEF1dGhQYXJhbXM7XHJcbiAgYXV0aFNjb3BlTGlzdD86IEF1dGhTY29wZUxpc3RbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaWduSW5EYXRhIHtcclxuICBhdXRoUmVxdWVzdE9wdGlvbjogQXV0aFJlcXVlc3RPcHRpb25bXSxcclxuICBhdXRoUGFyYW0/OiBBdXRoUGFyYW1zLFxyXG4gIGF1dGhTY29wZUxpc3Q/OiBBdXRoU2NvcGVMaXN0W11cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU0FjY291bnQnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hY2NvdW50JyxcclxuICBwbHVnaW5SZWY6ICdITVNBY2NvdW50JyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0FjY291bnQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzaWduSW4oc2lnbkluRGF0YTogU2lnbkluRGF0YSk6IFByb21pc2U8QXV0aEh1YXdlaUlkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNpZ25PdXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGNhbmNlbEF1dGhvcml6YXRpb24oKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNpbGVudFNpZ25JbihhdXRoUGFyYW1zOiBBdXRoUGFyYW1zKTogUHJvbWlzZTxBdXRoSHVhd2VpSWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBkaXNhYmxlTG9nZ2VyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSE1TQWNjb3VudEF1dGhTZXJ2aWNlJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWNjb3VudCcsXHJcbiAgcGx1Z2luUmVmOiAnSE1TQWNjb3VudEF1dGhTZXJ2aWNlJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0FjY291bnRBdXRoU2VydmljZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNpZ25JbihzaWduSW5EYXRhOiBTaWduSW5EYXRhKTogUHJvbWlzZTxBdXRoQWNjb3VudD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzaWduT3V0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBjYW5jZWxBdXRob3JpemF0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzaWxlbnRTaWduSW4oYXV0aFBhcmFtczogQXV0aFBhcmFtcyk6IFByb21pc2U8QXV0aEFjY291bnQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0Q2hhbm5lbCgpOiBQcm9taXNlPEFjY291bnRJY29uPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGVudW0gVGhlbWUge1xyXG4gIFRIRU1FX05PX1RJVExFID0gMCxcclxuICBUSEVNRV9GVUxMX1RJVExFID0gMVxyXG59XHJcbmV4cG9ydCBlbnVtIENvbG9yUG9saWN5IHtcclxuICBDT0xPUl9QT0xJQ1lfQkxVRSA9IDAsXHJcbiAgQ09MT1JfUE9MSUNZX1JFRCA9IDEsXHJcbiAgQ09MT1JfUE9MSUNZX1dISVRFID0gMixcclxuICBDT0xPUl9QT0xJQ1lfV0hJVEVfV0lUSF9CT1JERVIgPSAzLFxyXG4gIENPTE9SX1BPTElDWV9CTEFDSyA9IDQsXHJcbiAgQ09MT1JfUE9MSUNZX0dSQVkgPSA1XHJcbn1cclxuZXhwb3J0IGVudW0gQ29ybmVyUmFkaXVzIHtcclxuICBDT1JORVJfUkFESVVTX0xBUkdFID0gLTEsXHJcbiAgQ09STkVSX1JBRElVU19NRURJVU0gPSAtMixcclxuICBDT1JORVJfUkFESVVTX1NNQUxMID0gLTNcclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU0h1YXdlaUlkQXV0aEJ1dHRvbicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFjY291bnQnLFxyXG4gIHBsdWdpblJlZjogJ0hNU0h1YXdlaUlkQXV0aEJ1dHRvbicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNIdWF3ZWlJZEF1dGhCdXR0b24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEh1YXdlaUlkQXV0aEJ1dHRvbihlZGl0dGVkQnV0dG9uOiBzdHJpbmcsIHRoZW1lOiBUaGVtZSwgY29sb3JQb2xpY3k6IENvbG9yUG9saWN5LCBjb3JuZXJSYWRpdXM6IENvcm5lclJhZGl1cyk6IHZvaWQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU0h1YXdlaUlkQXV0aE1hbmFnZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hY2NvdW50JyxcclxuICBwbHVnaW5SZWY6ICdITVNIdWF3ZWlJZEF1dGhNYW5hZ2VyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0h1YXdlaUlkQXV0aE1hbmFnZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBnZXRBdXRoUmVzdWx0KCk6IFByb21pc2U8QXV0aEh1YXdlaUlkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldEF1dGhSZXN1bHRXaXRoU2NvcGUoYXV0aEh1YXdlaUlkOiBBdXRoU2NvcGVMaXN0W10pOiBQcm9taXNlPEF1dGhIdWF3ZWlJZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBjb250YWluU2NvcGVzKGF1dGhIdWF3ZWlJZDogQXV0aEJ1aWxkZXIsIGF1dGhTY29wZUxpc3Q6IEF1dGhTY29wZUxpc3RbXSk6IFByb21pc2U8Q29udGFpblNjb3Blc1Jlc3VsdD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBhZGRBdXRoU2NvcGVzKHJlcXVlc3RDb2RlOiBudW1iZXIsIGF1dGhTY29wZUxpc3Q6IEF1dGhTY29wZUxpc3RbXSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU0FjY291bnRBdXRoTWFuYWdlcicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFjY291bnQnLFxyXG4gIHBsdWdpblJlZjogJ0hNU0FjY291bnRBdXRoTWFuYWdlcicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxyXG59KVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TQWNjb3VudEF1dGhNYW5hZ2VyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0QXV0aFJlc3VsdCgpOiBQcm9taXNlPEF1dGhBY2NvdW50PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldEF1dGhSZXN1bHRXaXRoU2NvcGUoYXV0aEFjY291bnQ6IEF1dGhTY29wZUxpc3RbXSk6IFByb21pc2U8QXV0aEFjY291bnQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY29udGFpblNjb3BlcyhhdXRoQWNjb3VudDogQXV0aEJ1aWxkZXIsIGF1dGhTY29wZUxpc3Q6IEF1dGhTY29wZUxpc3RbXSk6IFByb21pc2U8Q29udGFpblNjb3Blc1Jlc3VsdD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBhZGRBdXRoU2NvcGVzKHJlcXVlc3RDb2RlOiBudW1iZXIsIGF1dGhTY29wZUxpc3Q6IEF1dGhTY29wZUxpc3RbXSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU0h1YXdlaUlkQXV0aFRvb2wnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hY2NvdW50JyxcclxuICBwbHVnaW5SZWY6ICdITVNIdWF3ZWlJZEF1dGhUb29sJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0h1YXdlaUlkQXV0aFRvb2wgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBkZWxldGVBdXRoSW5mbyhhY2Nlc3NUb2tlbjogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHJlcXVlc3RVbmlvbklkKGh1YXdlaUFjY291bnROYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICByZXF1ZXN0QWNjZXNzVG9rZW4oYWNjb3VudDogQWNjb3VudCwgYXV0aFNjb3BlTGlzdDogQXV0aFNjb3BlTGlzdFtdKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNOZXR3b3JrVG9vbCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFjY291bnQnLFxyXG4gIHBsdWdpblJlZjogJ0hNU05ldHdvcmtUb29sJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU05ldHdvcmtUb29sIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYnVpbGROZXR3b3JrVVJMKGRvbWFpbkh0dHBzOiBEb21haW5JbmZvKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYnVpbGROZXR3b3JrQ29va2llKGNvb2tpZTogQ29va2llKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNSZWFkU01TTWFuYWdlcicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFjY291bnQnLFxyXG4gIHBsdWdpblJlZjogJ0hNU1JlYWRTTVNNYW5hZ2VyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU1JlYWRTTVNNYW5hZ2VyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc21zVmVyaWZpY2F0aW9uQ29kZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBvYnRhaW5IYXNoQ29kZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzdGFydENvbnNlbnQocGhvbmVOdW1iZXI6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59Il19