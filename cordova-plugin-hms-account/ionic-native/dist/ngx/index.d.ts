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
export interface SignInData {
    authRequestOption: AuthRequestOption[];
    authParam?: AuthParams;
    authScopeList?: AuthScopeList[];
    authIdTokenSignAlg?: AuthIdTokenSignAlg;
}
export declare class HMSAccount extends IonicNativePlugin {
    signIn(signInData: SignInData, packageName: string): Promise<AuthHuaweiId>;
    signOut(): Promise<void>;
    cancelAuthorization(): Promise<void>;
    silentSignIn(authParams: AuthParams, packageName: string): Promise<AuthHuaweiId>;
    enableLogger(): Promise<void>;
    disableLogger(): Promise<void>;
}
export declare class HMSAccountAuthService extends IonicNativePlugin {
    signIn(signInData: SignInData, packageName: string): Promise<AuthAccount>;
    getIndependentSignIn(accessToken: string): Promise<AuthAccount>;
    signOut(): Promise<void>;
    cancelAuthorization(): Promise<void>;
    silentSignIn(authParams: AuthParams, packageName: string): Promise<AuthAccount>;
    getChannel(): Promise<AccountIcon>;
}
export declare enum Theme {
    THEME_NO_TITLE = 0,
    THEME_FULL_TITLE = 1
}
export declare enum ColorPolicy {
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
export declare class HMSHuaweiIdAuthButton extends IonicNativePlugin {
    getHuaweiIdAuthButton(edittedButton: string, theme: Theme, colorPolicy: ColorPolicy, cornerRadius: CornerRadius): void;
}
export declare class HMSHuaweiIdAuthManager extends IonicNativePlugin {
    getAuthResult(packageName: String): Promise<AuthHuaweiId>;
    getAuthResultWithScope(authHuaweiId: AuthScopeList[], packageName: string): Promise<AuthHuaweiId>;
    containScopes(authHuaweiId: AuthBuilder, authScopeList: AuthScopeList[], packageName: string): Promise<ContainScopesResult>;
    addAuthScopes(requestCode: number, authScopeList: AuthScopeList[], packageName: string): Promise<void>;
}
export declare class HMSAccountAuthManager extends IonicNativePlugin {
    getAuthResult(packageName: string): Promise<AuthAccount>;
    getAuthResultWithScope(authAccount: AuthScopeList[], packageName: string): Promise<AuthAccount>;
    containScopes(authAccount: AuthBuilder, authScopeList: AuthScopeList[], packageName: string): Promise<ContainScopesResult>;
    addAuthScopes(requestCode: number, authScopeList: AuthScopeList[], packageName: string): Promise<void>;
}
export declare class HMSHuaweiIdAuthTool extends IonicNativePlugin {
    deleteAuthInfo(accessToken: string): Promise<void>;
    requestUnionId(huaweiAccountName: string): Promise<string>;
    requestAccessToken(account: Account, authScopeList: AuthScopeList[]): Promise<string>;
}
export declare class HMSNetworkTool extends IonicNativePlugin {
    buildNetworkURL(domainHttps: DomainInfo): Promise<string>;
    buildNetworkCookie(cookie: Cookie): Promise<string>;
}
export declare class HMSReadSMSManager extends IonicNativePlugin {
    smsVerificationCode(): Promise<string>;
    obtainHashCode(): Promise<string>;
    startConsent(phoneNumber: string): Promise<string>;
}
