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

export declare enum AuthScopeList {
    GAME = "https://www.huawei.com/auth/games",
    OPENID = "openid",
    EMAIL = "email",
    PROFILE = "profile"
}
export declare enum Gender {
    UNKNOWN = -1,
    MALE = 0,
    FEMALE = 1,
    CONFIDENTIAL = 2
}
export declare enum AuthRequestOption {
    SCOPE_EMAIL = "email",
    SCOPE_ID = "id",
    SCOPE_ID_TOKEN = "idToken",
    SCOPE_PROFILE = "profile",
    SCOPE_MOBILE_NUMBER = "mobileNumber",
    SCOPE_UID = "uid",
    SCOPE_AUTHORIZATION_CODE = "authorizationCode",
    SCOPE_ACCESS_TOKEN = "accessToken",
    SCOPE_DIALOG_AUTH = "dialogAuth",
    SCOPE_SHIPPING_ADDRESS = "shippingAddress",
    SCOPE_CARRIER_ID = "carrierId"
}
export declare enum AuthParams {
    DEFAULT_AUTH_REQUEST_PARAM = "DEFAULT_AUTH_REQUEST_PARAM",
    DEFAULT_AUTH_REQUEST_PARAM_GAME = "DEFAULT_AUTH_REQUEST_PARAM_GAME"
}
export declare enum ErrorCodes {
    HuaweiIdAuthException = "503"
}
export declare enum PackageName {
    HWID = "HWID",
    ACCOUNT = "ACCOUNT"
}
export declare enum AuthIdTokenSignAlg {
    PS256 = 1,
    RS256 = 2
}
export interface AbstractAuthAccount {
    uid?: string;
    openId: string;
    displayName: string;
    accessToken: string;
    status: number;
    gender: Gender;
    serviceCountryCode?: string;
    countryCode?: string;
    unionId: string;
    email?: string;
    extensionScopes: string[];
    idToken?: string;
    expressionTimeSecs: number;
    givenName: string;
    familyName: string;
    carrierId: number;
    ageRange?: string;
    homeZone: number;
    authorizedScopes: string[];
    avatarUriString: string;
    authorizationCode?: string;
    requestedScopes: string[];
    account?: Account;
}
export interface AuthHuaweiId extends AbstractAuthAccount {
    ageRangeFlag: number;
}
export interface AuthAccount extends AbstractAuthAccount {
    accountFlag: number;
}
export interface AuthBuilder {
    openId: string;
    uid: string;
    photoUriString: string;
    displayName: string;
    accessToken: string;
    serviceCountryCode: string;
    gender: Gender;
    status: number;
    unionId: string;
    serverAuthCode: string;
    countryCode: string;
    grantedScopes: AuthScopeList[];
}
export interface ContainScopesResult {
    containScopes: boolean;
}
export interface DomainInfo {
    domain: string;
    isUseHttps: boolean;
}
export interface Cookie {
    cookieName: string;
    cookieValue: string;
    domain: string;
    path: string;
    isHttpOnly: boolean;
    isSecure: boolean;
    maxAge: number;
}
export interface Account {
    type: string;
    name: string;
}
export interface AccountIcon {
    icon: string;
    description: string;
}
export interface SignInData {
    authRequestOption: AuthRequestOption[];
    authParam?: AuthParams;
    authScopeList?: AuthScopeList[];
    authIdTokenSignAlg?: AuthIdTokenSignAlg;
}
