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

import { IonicNativePlugin } from '@ionic-native/core';
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
export interface AuthHuaweiId {
    accessToken: string;
    displayName: string;
    email?: string;
    familyName: string;
    givenName: string;
    idToken?: string;
    unionId: string;
    avatarUriString: string;
    expressionTimeSecs: number;
    openId: string;
    uid?: string;
    countryCode?: string;
    serviceCountryCode?: string;
    status: number;
    gender: Gender;
    describeContentsInAuthHuaweiId: number;
    authorizedScopes: string[];
    extensionScopes: string[];
    authorizationCode?: string;
    huaweiAccount?: Account;
}
export interface AuthHuaweiIdBuilder {
    openId: string;
    uid: string;
    displayName: string;
    photoUrl: string;
    accessToken: string;
    serviceCountryCode: string;
    status: number;
    gender: Gender;
    scopes: AuthScopeList[];
    serverAuthCode: string;
    unionId: string;
    countryCode: string;
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
export declare enum AuthRequestOption {
    SCOPE_ID_TOKEN = "idToken",
    SCOPE_ACCESS_TOKEN = "accessToken",
    SCOPE_MOBILE_NUMBER = "mobileNumber",
    SCOPE_EMAIL = "email",
    SCOPE_SHIPPING_ADDRESS = "shippingAddress",
    SCOPE_UID = "uid",
    SCOPE_ID = "id",
    SCOPE_AUTHORIZATION_CODE = "authorizationCode",
    SCOPE_PROFILE = "profile"
}
export declare enum ErrorCodes {
    HuaweiIdAuthException = "503"
}
export declare enum HuaweiIdAuthParams {
    DEFAULT_AUTH_REQUEST_PARAM = "DEFAULT_AUTH_REQUEST_PARAM",
    DEFAULT_AUTH_REQUEST_PARAM_GAME = "DEFAULT_AUTH_REQUEST_PARAM_GAME"
}
export interface SignInData {
    authRequestOption: AuthRequestOption[];
    authParam?: HuaweiIdAuthParams;
    authScopeList?: AuthScopeList[];
}
export declare class HMSAccountOriginal extends IonicNativePlugin {
    signIn(signInData: SignInData): Promise<AuthHuaweiId>;
    signOut(): Promise<void>;
    cancelAuthorization(): Promise<void>;
    silentSignIn(authParams: HuaweiIdAuthParams): Promise<AuthHuaweiId>;
    enableLogger(): Promise<void>;
    disableLogger(): Promise<void>;
}
export declare enum Theme {
    THEME_NO_TITLE = 0,
    THEME_FULL_TITLE = 1
}
export declare enum ColorPolicy {
    COLOR_POLICY_BLUE = 0,
    COLOR_POLICY_RED = 1,
    COLOR_POLICY_WHITE = 2,
    COLOR_POLICY_WHITE_WITH_BORDER = 3,
    COLOR_POLICY_BLACK = 4,
    COLOR_POLICY_GRAY = 5
}
export declare enum CornerRadius {
    CORNER_RADIUS_LARGE = -1,
    CORNER_RADIUS_MEDIUM = -2,
    CORNER_RADIUS_SMALL = -3
}
export declare class HMSHuaweiIdAuthButtonOriginal extends IonicNativePlugin {
    getHuaweiIdAuthButton(edittedButton: string, theme: Theme, colorPolicy: ColorPolicy, cornerRadius: CornerRadius): void;
}
export declare class HMSHuaweiIdAuthManagerOriginal extends IonicNativePlugin {
    getAuthResult(): Promise<AuthHuaweiId>;
    getAuthResultWithScope(authHuaweiId: AuthScopeList[]): Promise<AuthHuaweiId>;
    containScopes(authHuaweiId: AuthHuaweiIdBuilder, authScopeList: AuthScopeList[]): Promise<ContainScopesResult>;
    addAuthScopes(requestCode: number, authScopeList: AuthScopeList[]): Promise<void>;
}
export declare class HMSHuaweiIdAuthToolOriginal extends IonicNativePlugin {
    deleteAuthInfo(accessToken: string): Promise<void>;
    requestUnionId(huaweiAccountName: string): Promise<string>;
    requestAccessToken(account: Account, authScopeList: AuthScopeList[]): Promise<string>;
}
export declare class HMSNetworkToolOriginal extends IonicNativePlugin {
    buildNetworkURL(domainHttps: DomainInfo): Promise<String>;
    buildNetworkCookie(cookie: Cookie): Promise<String>;
}
export declare class HMSReadSMSManagerOriginal extends IonicNativePlugin {
    smsVerificationCode(): Promise<String>;
    obtainHashCode(): Promise<String>;
}

export declare const HMSAccount: HMSAccountOriginal;
export declare const HMSHuaweiIdAuthButton: HMSHuaweiIdAuthButtonOriginal;
export declare const HMSHuaweiIdAuthManager: HMSHuaweiIdAuthManagerOriginal;
export declare const HMSHuaweiIdAuthTool: HMSHuaweiIdAuthToolOriginal;
export declare const HMSNetworkTool: HMSNetworkToolOriginal;
export declare const HMSReadSMSManager: HMSReadSMSManagerOriginal;