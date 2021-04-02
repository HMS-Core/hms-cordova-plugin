"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCodes = exports.HuaweiIdAuthParams = exports.AuthRequestOption = exports.Gender = exports.AuthScopeList = void 0;
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
    AuthRequestOption["SCOPE_ID_TOKEN"] = "idToken";
    AuthRequestOption["SCOPE_ACCESS_TOKEN"] = "accessToken";
    AuthRequestOption["SCOPE_MOBILE_NUMBER"] = "mobileNumber";
    AuthRequestOption["SCOPE_EMAIL"] = "email";
    AuthRequestOption["SCOPE_SHIPPING_ADDRESS"] = "shippingAddress";
    AuthRequestOption["SCOPE_UID"] = "uid";
    AuthRequestOption["SCOPE_ID"] = "id";
    AuthRequestOption["SCOPE_AUTHORIZATION_CODE"] = "authorizationCode";
    AuthRequestOption["SCOPE_PROFILE"] = "profile";
})(AuthRequestOption = exports.AuthRequestOption || (exports.AuthRequestOption = {}));
var HuaweiIdAuthParams;
(function (HuaweiIdAuthParams) {
    HuaweiIdAuthParams["DEFAULT_AUTH_REQUEST_PARAM"] = "DEFAULT_AUTH_REQUEST_PARAM";
    HuaweiIdAuthParams["DEFAULT_AUTH_REQUEST_PARAM_GAME"] = "DEFAULT_AUTH_REQUEST_PARAM_GAME";
})(HuaweiIdAuthParams = exports.HuaweiIdAuthParams || (exports.HuaweiIdAuthParams = {}));
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes["HuaweiIdAuthException"] = "503";
})(ErrorCodes = exports.ErrorCodes || (exports.ErrorCodes = {}));
//# sourceMappingURL=HMSCommonTypes.js.map