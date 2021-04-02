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
            ({ __proto__: [] }
                instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) {
                for (var p in b)
                    if (b.hasOwnProperty(p)) d[p] = b[p];
            };
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
    HMSReadSMSManagerOriginal.pluginName = "HMSReadSMSManager";
    HMSReadSMSManagerOriginal.plugin = "cordova-plugin-hms-account";
    HMSReadSMSManagerOriginal.pluginRef = "HMSReadSMSManager";
    HMSReadSMSManagerOriginal.platforms = ["Android"];
    return HMSReadSMSManagerOriginal;
}(IonicNativePlugin));
var HMSReadSMSManager = new HMSReadSMSManagerOriginal();
export { HMSReadSMSManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1yZW1vdGUtY29uZmlnL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFpQkEsT0FBTyw4QkFBMEYsTUFBTSxvQkFBb0IsQ0FBQztBQUc1SCxNQUFNLENBQU4sSUFBWSxhQUtYO0FBTEQsV0FBWSxhQUFhO0lBQ3ZCLDJEQUEwQyxDQUFBO0lBQzFDLGtDQUFpQixDQUFBO0lBQ2pCLGdDQUFlLENBQUE7SUFDZixvQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBTFcsYUFBYSxLQUFiLGFBQWEsUUFLeEI7QUFDRCxNQUFNLENBQU4sSUFBWSxNQUtYO0FBTEQsV0FBWSxNQUFNO0lBQ2hCLDBDQUFZLENBQUE7SUFDWixtQ0FBUSxDQUFBO0lBQ1IsdUNBQVUsQ0FBQTtJQUNWLG1EQUFnQixDQUFBO0FBQ2xCLENBQUMsRUFMVyxNQUFNLEtBQU4sTUFBTSxRQUtqQjtBQXlERCxNQUFNLENBQU4sSUFBWSxpQkFVWDtBQVZELFdBQVksaUJBQWlCO0lBQzNCLCtDQUEwQixDQUFBO0lBQzFCLHVEQUFrQyxDQUFBO0lBQ2xDLHlEQUFvQyxDQUFBO0lBQ3BDLDBDQUFxQixDQUFBO0lBQ3JCLCtEQUEwQyxDQUFBO0lBQzFDLHNDQUFpQixDQUFBO0lBQ2pCLG9DQUFlLENBQUE7SUFDZixtRUFBOEMsQ0FBQTtJQUM5Qyw4Q0FBeUIsQ0FBQTtBQUMzQixDQUFDLEVBVlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQVU1QjtBQUVELE1BQU0sQ0FBTixJQUFZLFVBRVg7QUFGRCxXQUFZLFVBQVU7SUFDcEIsMkNBQTZCLENBQUE7QUFDL0IsQ0FBQyxFQUZXLFVBQVUsS0FBVixVQUFVLFFBRXJCO0FBRUQsTUFBTSxDQUFOLElBQVksa0JBR1g7QUFIRCxXQUFZLGtCQUFrQjtJQUM1QiwrRUFBeUQsQ0FBQTtJQUN6RCx5RkFBbUUsQ0FBQTtBQUNyRSxDQUFDLEVBSFcsa0JBQWtCLEtBQWxCLGtCQUFrQixRQUc3Qjs7SUFlK0IsOEJBQWlCOzs7O0lBRS9DLDJCQUFNLGFBQUMsVUFBc0I7SUFLN0IsNEJBQU87SUFLUCx3Q0FBbUI7SUFLbkIsaUNBQVksYUFBQyxVQUE4QjtJQUszQyxpQ0FBWTtJQUtaLGtDQUFhOzs7OztxQkFySmY7RUEwSGdDLGlCQUFpQjtTQUFwQyxVQUFVO0FBaUN2QixNQUFNLENBQU4sSUFBWSxLQUdYO0FBSEQsV0FBWSxLQUFLO0lBQ2YscURBQWtCLENBQUE7SUFDbEIseURBQW9CLENBQUE7QUFDdEIsQ0FBQyxFQUhXLEtBQUssS0FBTCxLQUFLLFFBR2hCO0FBQ0QsTUFBTSxDQUFOLElBQVksV0FPWDtBQVBELFdBQVksV0FBVztJQUNyQix1RUFBcUIsQ0FBQTtJQUNyQixxRUFBb0IsQ0FBQTtJQUNwQix5RUFBc0IsQ0FBQTtJQUN0QixpR0FBa0MsQ0FBQTtJQUNsQyx5RUFBc0IsQ0FBQTtJQUN0Qix1RUFBcUIsQ0FBQTtBQUN2QixDQUFDLEVBUFcsV0FBVyxLQUFYLFdBQVcsUUFPdEI7QUFDRCxNQUFNLENBQU4sSUFBWSxZQUlYO0FBSkQsV0FBWSxZQUFZO0lBQ3RCLDhFQUF3QixDQUFBO0lBQ3hCLGdGQUF5QixDQUFBO0lBQ3pCLDhFQUF3QixDQUFBO0FBQzFCLENBQUMsRUFKVyxZQUFZLEtBQVosWUFBWSxRQUl2Qjs7SUFTMEMseUNBQWlCOzs7O0lBRTFELHFEQUFxQixhQUFDLGFBQXFCLEVBQUUsS0FBWSxFQUFFLFdBQXdCLEVBQUUsWUFBMEI7Ozs7O2dDQXRMakg7RUFvTDJDLGlCQUFpQjtTQUEvQyxxQkFBcUI7O0lBY1UsMENBQWlCOzs7O0lBRTNELDhDQUFhO0lBS2IsdURBQXNCLGFBQUMsWUFBNkI7SUFLcEQsOENBQWEsYUFBQyxZQUFpQyxFQUFFLGFBQThCO0lBSy9FLDhDQUFhLGFBQUMsV0FBbUIsRUFBRSxhQUE4Qjs7Ozs7aUNBbk5uRTtFQWtNNEMsaUJBQWlCO1NBQWhELHNCQUFzQjs7SUE2Qk0sdUNBQWlCOzs7O0lBRXhELDRDQUFjLGFBQUMsV0FBbUI7SUFLbEMsNENBQWMsYUFBQyxpQkFBeUI7SUFLeEMsZ0RBQWtCLGFBQUMsT0FBZ0IsRUFBRSxhQUE4Qjs7Ozs7OEJBM09yRTtFQStOeUMsaUJBQWlCO1NBQTdDLG1CQUFtQjs7SUF3Qkksa0NBQWlCOzs7O0lBRW5ELHdDQUFlLGFBQUMsV0FBdUI7SUFLdkMsMkNBQWtCLGFBQUMsTUFBYzs7Ozs7eUJBOVBuQztFQXVQb0MsaUJBQWlCO1NBQXhDLGNBQWM7O0lBbUJZLHFDQUFpQjs7OztJQUV0RCwrQ0FBbUI7SUFLbkIsMENBQWM7Ozs7OzRCQWpSaEI7RUEwUXVDLGlCQUFpQjtTQUEzQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgQ29weXJpZ2h0IDIwMjAuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxyXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBlbnVtIEF1dGhTY29wZUxpc3Qge1xyXG4gIEdBTUUgPSBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vYXV0aC9nYW1lc1wiLFxyXG4gIE9QRU5JRCA9IFwib3BlbmlkXCIsXHJcbiAgRU1BSUwgPSBcImVtYWlsXCIsXHJcbiAgUFJPRklMRSA9IFwicHJvZmlsZVwiXHJcbn1cclxuZXhwb3J0IGVudW0gR2VuZGVyIHtcclxuICBVTktOT1dOID0gLTEsXHJcbiAgTUFMRSA9IDAsXHJcbiAgRkVNQUxFID0gMSxcclxuICBDT05GSURFTlRJQUwgPSAyXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBdXRoSHVhd2VpSWQge1xyXG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICBlbWFpbD86IHN0cmluZztcclxuICBmYW1pbHlOYW1lOiBzdHJpbmc7XHJcbiAgZ2l2ZW5OYW1lOiBzdHJpbmc7XHJcbiAgaWRUb2tlbj86IHN0cmluZztcclxuICB1bmlvbklkOiBzdHJpbmc7XHJcbiAgYXZhdGFyVXJpU3RyaW5nOiBzdHJpbmc7XHJcbiAgZXhwcmVzc2lvblRpbWVTZWNzOiBudW1iZXI7XHJcbiAgb3BlbklkOiBzdHJpbmc7XHJcbiAgdWlkPzogc3RyaW5nO1xyXG4gIGNvdW50cnlDb2RlPzogc3RyaW5nO1xyXG4gIHNlcnZpY2VDb3VudHJ5Q29kZT86IHN0cmluZztcclxuICBzdGF0dXM6IG51bWJlcjtcclxuICBnZW5kZXI6IEdlbmRlcjtcclxuICBkZXNjcmliZUNvbnRlbnRzSW5BdXRoSHVhd2VpSWQ6IG51bWJlcjtcclxuICBhdXRob3JpemVkU2NvcGVzOiBzdHJpbmdbXTtcclxuICBleHRlbnNpb25TY29wZXM6IHN0cmluZ1tdO1xyXG4gIGF1dGhvcml6YXRpb25Db2RlPzogc3RyaW5nO1xyXG4gIGh1YXdlaUFjY291bnQ/OiBBY2NvdW50O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aEh1YXdlaUlkQnVpbGRlciB7XHJcbiAgb3BlbklkOiBzdHJpbmc7XHJcbiAgdWlkOiBzdHJpbmc7XHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICBwaG90b1VybDogc3RyaW5nO1xyXG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcbiAgc2VydmljZUNvdW50cnlDb2RlOiBzdHJpbmc7XHJcbiAgc3RhdHVzOiBudW1iZXI7XHJcbiAgZ2VuZGVyOiBHZW5kZXI7XHJcbiAgc2NvcGVzOiBBdXRoU2NvcGVMaXN0W107XHJcbiAgc2VydmVyQXV0aENvZGU6IHN0cmluZztcclxuICB1bmlvbklkOiBzdHJpbmc7XHJcbiAgY291bnRyeUNvZGU6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENvbnRhaW5TY29wZXNSZXN1bHQge1xyXG4gIGNvbnRhaW5TY29wZXM6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBEb21haW5JbmZvIHtcclxuICBkb21haW46IHN0cmluZztcclxuICBpc1VzZUh0dHBzOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29va2llIHtcclxuICBjb29raWVOYW1lOiBzdHJpbmc7XHJcbiAgY29va2llVmFsdWU6IHN0cmluZztcclxuICBkb21haW46IHN0cmluZztcclxuICBwYXRoOiBzdHJpbmc7XHJcbiAgaXNIdHRwT25seTogYm9vbGVhbjtcclxuICBpc1NlY3VyZTogYm9vbGVhbjtcclxuICBtYXhBZ2U6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEFjY291bnQge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGVudW0gQXV0aFJlcXVlc3RPcHRpb24ge1xyXG4gIFNDT1BFX0lEX1RPS0VOID0gXCJpZFRva2VuXCIsXHJcbiAgU0NPUEVfQUNDRVNTX1RPS0VOID0gXCJhY2Nlc3NUb2tlblwiLFxyXG4gIFNDT1BFX01PQklMRV9OVU1CRVIgPSBcIm1vYmlsZU51bWJlclwiLFxyXG4gIFNDT1BFX0VNQUlMID0gXCJlbWFpbFwiLFxyXG4gIFNDT1BFX1NISVBQSU5HX0FERFJFU1MgPSBcInNoaXBwaW5nQWRkcmVzc1wiLFxyXG4gIFNDT1BFX1VJRCA9IFwidWlkXCIsXHJcbiAgU0NPUEVfSUQgPSBcImlkXCIsXHJcbiAgU0NPUEVfQVVUSE9SSVpBVElPTl9DT0RFID0gXCJhdXRob3JpemF0aW9uQ29kZVwiLFxyXG4gIFNDT1BFX1BST0ZJTEUgPSBcInByb2ZpbGVcIixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRXJyb3JDb2RlcyB7XHJcbiAgSHVhd2VpSWRBdXRoRXhjZXB0aW9uID0gXCI1MDNcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBIdWF3ZWlJZEF1dGhQYXJhbXMge1xyXG4gIERFRkFVTFRfQVVUSF9SRVFVRVNUX1BBUkFNID0gXCJERUZBVUxUX0FVVEhfUkVRVUVTVF9QQVJBTVwiLFxyXG4gIERFRkFVTFRfQVVUSF9SRVFVRVNUX1BBUkFNX0dBTUUgPSBcIkRFRkFVTFRfQVVUSF9SRVFVRVNUX1BBUkFNX0dBTUVcIlxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25JbkRhdGEge1xyXG4gIGF1dGhSZXF1ZXN0T3B0aW9uOiBBdXRoUmVxdWVzdE9wdGlvbltdLFxyXG4gIGF1dGhQYXJhbT86IEh1YXdlaUlkQXV0aFBhcmFtcyxcclxuICBhdXRoU2NvcGVMaXN0PzogQXV0aFNjb3BlTGlzdFtdXHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNBY2NvdW50JyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWNjb3VudCcsXHJcbiAgcGx1Z2luUmVmOiAnSE1TQWNjb3VudCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNBY2NvdW50IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2lnbkluKHNpZ25JbkRhdGE6IFNpZ25JbkRhdGEpOiBQcm9taXNlPEF1dGhIdWF3ZWlJZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzaWduT3V0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBjYW5jZWxBdXRob3JpemF0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzaWxlbnRTaWduSW4oYXV0aFBhcmFtczogSHVhd2VpSWRBdXRoUGFyYW1zKTogUHJvbWlzZTxBdXRoSHVhd2VpSWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBkaXNhYmxlTG9nZ2VyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRoZW1lIHtcclxuICBUSEVNRV9OT19USVRMRSA9IDAsXHJcbiAgVEhFTUVfRlVMTF9USVRMRSA9IDFcclxufVxyXG5leHBvcnQgZW51bSBDb2xvclBvbGljeSB7XHJcbiAgQ09MT1JfUE9MSUNZX0JMVUUgPSAwLFxyXG4gIENPTE9SX1BPTElDWV9SRUQgPSAxLFxyXG4gIENPTE9SX1BPTElDWV9XSElURSA9IDIsXHJcbiAgQ09MT1JfUE9MSUNZX1dISVRFX1dJVEhfQk9SREVSID0gMyxcclxuICBDT0xPUl9QT0xJQ1lfQkxBQ0sgPSA0LFxyXG4gIENPTE9SX1BPTElDWV9HUkFZID0gNVxyXG59XHJcbmV4cG9ydCBlbnVtIENvcm5lclJhZGl1cyB7XHJcbiAgQ09STkVSX1JBRElVU19MQVJHRSA9IC0xLFxyXG4gIENPUk5FUl9SQURJVVNfTUVESVVNID0gLTIsXHJcbiAgQ09STkVSX1JBRElVU19TTUFMTCA9IC0zXHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNIdWF3ZWlJZEF1dGhCdXR0b24nLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hY2NvdW50JyxcclxuICBwbHVnaW5SZWY6ICdITVNIdWF3ZWlJZEF1dGhCdXR0b24nLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TSHVhd2VpSWRBdXRoQnV0dG9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRIdWF3ZWlJZEF1dGhCdXR0b24oZWRpdHRlZEJ1dHRvbjogc3RyaW5nLCB0aGVtZTogVGhlbWUsIGNvbG9yUG9saWN5OiBDb2xvclBvbGljeSwgY29ybmVyUmFkaXVzOiBDb3JuZXJSYWRpdXMpOiB2b2lkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNIdWF3ZWlJZEF1dGhNYW5hZ2VyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWNjb3VudCcsXHJcbiAgcGx1Z2luUmVmOiAnSE1TSHVhd2VpSWRBdXRoTWFuYWdlcicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNIdWF3ZWlJZEF1dGhNYW5hZ2VyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0QXV0aFJlc3VsdCgpOiBQcm9taXNlPEF1dGhIdWF3ZWlJZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBnZXRBdXRoUmVzdWx0V2l0aFNjb3BlKGF1dGhIdWF3ZWlJZDogQXV0aFNjb3BlTGlzdFtdKTogUHJvbWlzZTxBdXRoSHVhd2VpSWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY29udGFpblNjb3BlcyhhdXRoSHVhd2VpSWQ6IEF1dGhIdWF3ZWlJZEJ1aWxkZXIsIGF1dGhTY29wZUxpc3Q6IEF1dGhTY29wZUxpc3RbXSk6IFByb21pc2U8Q29udGFpblNjb3Blc1Jlc3VsdD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBhZGRBdXRoU2NvcGVzKHJlcXVlc3RDb2RlOiBudW1iZXIsIGF1dGhTY29wZUxpc3Q6IEF1dGhTY29wZUxpc3RbXSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU0h1YXdlaUlkQXV0aFRvb2wnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hY2NvdW50JyxcclxuICBwbHVnaW5SZWY6ICdITVNIdWF3ZWlJZEF1dGhUb29sJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0h1YXdlaUlkQXV0aFRvb2wgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBkZWxldGVBdXRoSW5mbyhhY2Nlc3NUb2tlbjogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHJlcXVlc3RVbmlvbklkKGh1YXdlaUFjY291bnROYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICByZXF1ZXN0QWNjZXNzVG9rZW4oYWNjb3VudDogQWNjb3VudCwgYXV0aFNjb3BlTGlzdDogQXV0aFNjb3BlTGlzdFtdKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNOZXR3b3JrVG9vbCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFjY291bnQnLFxyXG4gIHBsdWdpblJlZjogJ0hNU05ldHdvcmtUb29sJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU05ldHdvcmtUb29sIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYnVpbGROZXR3b3JrVVJMKGRvbWFpbkh0dHBzOiBEb21haW5JbmZvKTogUHJvbWlzZTxTdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYnVpbGROZXR3b3JrQ29va2llKGNvb2tpZTogQ29va2llKTogUHJvbWlzZTxTdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNSZWFkU01TTWFuYWdlcicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFjY291bnQnLFxyXG4gIHBsdWdpblJlZjogJ0hNU1JlYWRTTVNNYW5hZ2VyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU1JlYWRTTVNNYW5hZ2VyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc21zVmVyaWZpY2F0aW9uQ29kZSgpOiBQcm9taXNlPFN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBvYnRhaW5IYXNoQ29kZSgpOiBQcm9taXNlPFN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=