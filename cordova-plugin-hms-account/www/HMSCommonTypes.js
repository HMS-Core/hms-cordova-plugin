"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthIdTokenSignAlg = exports.PackageName = exports.ErrorCodes = exports.AuthParams = exports.AuthRequestOption = exports.Gender = exports.AuthScopeList = void 0;
//
// Constants
//
var AuthScopeList;
(function (AuthScopeList) {
    AuthScopeList["GAME"] = "https://www.huawei.com/auth/games";
    AuthScopeList["OPENID"] = "openid";
    AuthScopeList["EMAIL"] = "email";
    AuthScopeList["PROFILE"] = "profile";
})(AuthScopeList = exports.AuthScopeList || (exports.AuthScopeList = {}));
var Gender;
(function (Gender) {
    Gender[Gender["UNKNOWN"] = -1] = "UNKNOWN";
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["CONFIDENTIAL"] = 2] = "CONFIDENTIAL";
})(Gender = exports.Gender || (exports.Gender = {}));
var AuthRequestOption;
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
})(AuthRequestOption = exports.AuthRequestOption || (exports.AuthRequestOption = {}));
var AuthParams;
(function (AuthParams) {
    AuthParams["DEFAULT_AUTH_REQUEST_PARAM"] = "DEFAULT_AUTH_REQUEST_PARAM";
    AuthParams["DEFAULT_AUTH_REQUEST_PARAM_GAME"] = "DEFAULT_AUTH_REQUEST_PARAM_GAME";
})(AuthParams = exports.AuthParams || (exports.AuthParams = {}));
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes["HuaweiIdAuthException"] = "503";
})(ErrorCodes = exports.ErrorCodes || (exports.ErrorCodes = {}));
var PackageName;
(function (PackageName) {
    PackageName["HWID"] = "HWID";
    PackageName["ACCOUNT"] = "ACCOUNT";
})(PackageName = exports.PackageName || (exports.PackageName = {}));
var AuthIdTokenSignAlg;
(function (AuthIdTokenSignAlg) {
    AuthIdTokenSignAlg[AuthIdTokenSignAlg["PS256"] = 1] = "PS256";
    AuthIdTokenSignAlg[AuthIdTokenSignAlg["RS256"] = 2] = "RS256";
})(AuthIdTokenSignAlg = exports.AuthIdTokenSignAlg || (exports.AuthIdTokenSignAlg = {}));
//# sourceMappingURL=HMSCommonTypes.js.map