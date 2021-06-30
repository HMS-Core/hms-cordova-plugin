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

import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

export enum AuthScopeList {
  GAME = "https://www.huawei.com/auth/games",
  OPENID = "openid",
  EMAIL = "email",
  PROFILE = "profile"
}
export enum Gender {
  UNKNOWN = -1,
  MALE = 0,
  FEMALE = 1,
  CONFIDENTIAL = 2
}

export enum AuthRequestOption {
  SCOPE_EMAIL = "email",
  SCOPE_ID = "id",
  SCOPE_ID_TOKEN = "idToken",
  SCOPE_PROFILE = "profile",
  SCOPE_MOBILE_NUMBER = "mobileNumber",
  SCOPE_UID = "uid",
  SCOPE_AUTHORIZATION_CODE = "authorizationCode",
  SCOPE_ACCESS_TOKEN = "accessToken",
  SCOPE_DIALOG_AUTH = "dialogAuth",
  SCOPE_SHIPPING_ADDRESS = "shippingAddress"
}

export enum AuthParams {
  DEFAULT_AUTH_REQUEST_PARAM = "DEFAULT_AUTH_REQUEST_PARAM",
  DEFAULT_AUTH_REQUEST_PARAM_GAME = "DEFAULT_AUTH_REQUEST_PARAM_GAME"
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
}

export interface SignInData {
  authRequestOption: AuthRequestOption[],
  authParam?: AuthParams,
  authScopeList?: AuthScopeList[]
}

@Plugin({
  pluginName: 'HMSAccount',
  plugin: 'cordova-plugin-hms-account',
  pluginRef: 'HMSAccount',
  platforms: ['Android']
})
@Injectable()
export class HMSAccount extends IonicNativePlugin {
  @Cordova({ otherPromise: true })
  signIn(signInData: SignInData): Promise<AuthHuaweiId> {
    return;
  }

  @Cordova({ otherPromise: true })
  signOut(): Promise<void> {
    return;
  }

  @Cordova({ otherPromise: true })
  cancelAuthorization(): Promise<void> {
    return;
  }

  @Cordova({ otherPromise: true })
  silentSignIn(authParams: AuthParams): Promise<AuthHuaweiId> {
    return;
  }

  @Cordova({ otherPromise: true })
  enableLogger(): Promise<void> {
    return;
  }

  @Cordova({ otherPromise: true })
  disableLogger(): Promise<void> {
    return;
  }

}


@Plugin({
  pluginName: 'HMSAccountAuthService',
  plugin: 'cordova-plugin-hms-account',
  pluginRef: 'HMSAccountAuthService',
  platforms: ['Android']
})
@Injectable()
export class HMSAccountAuthService extends IonicNativePlugin {
  @Cordova({ otherPromise: true })
  signIn(signInData: SignInData): Promise<AuthAccount> {
    return;
  }

  @Cordova({ otherPromise: true })
  signOut(): Promise<void> {
    return;
  }

  @Cordova({ otherPromise: true })
  cancelAuthorization(): Promise<void> {
    return;
  }

  @Cordova({ otherPromise: true })
  silentSignIn(authParams: AuthParams): Promise<AuthAccount> {
    return;
  }

  @Cordova({ otherPromise: true })
  getChannel(): Promise<AccountIcon> {
    return;
  }

}

export enum Theme {
  THEME_NO_TITLE = 0,
  THEME_FULL_TITLE = 1
}
export enum ColorPolicy {
  COLOR_POLICY_BLUE = 0,
  COLOR_POLICY_RED = 1,
  COLOR_POLICY_WHITE = 2,
  COLOR_POLICY_WHITE_WITH_BORDER = 3,
  COLOR_POLICY_BLACK = 4,
  COLOR_POLICY_GRAY = 5
}
export enum CornerRadius {
  CORNER_RADIUS_LARGE = -1,
  CORNER_RADIUS_MEDIUM = -2,
  CORNER_RADIUS_SMALL = -3
}

@Plugin({
  pluginName: 'HMSHuaweiIdAuthButton',
  plugin: 'cordova-plugin-hms-account',
  pluginRef: 'HMSHuaweiIdAuthButton',
  platforms: ['Android']
})
@Injectable()
export class HMSHuaweiIdAuthButton extends IonicNativePlugin {
  @Cordova()
  getHuaweiIdAuthButton(edittedButton: string, theme: Theme, colorPolicy: ColorPolicy, cornerRadius: CornerRadius): void {
    return;
  }
}

@Plugin({
  pluginName: 'HMSHuaweiIdAuthManager',
  plugin: 'cordova-plugin-hms-account',
  pluginRef: 'HMSHuaweiIdAuthManager',
  platforms: ['Android']
})
@Injectable()
export class HMSHuaweiIdAuthManager extends IonicNativePlugin {
  @Cordova({ otherPromise: true })
  getAuthResult(): Promise<AuthHuaweiId> {
    return;
  }

  @Cordova({ otherPromise: true })
  getAuthResultWithScope(authHuaweiId: AuthScopeList[]): Promise<AuthHuaweiId> {
    return;
  }

  @Cordova({ otherPromise: true })
  containScopes(authHuaweiId: AuthBuilder, authScopeList: AuthScopeList[]): Promise<ContainScopesResult> {
    return;
  }

  @Cordova({ otherPromise: true })
  addAuthScopes(requestCode: number, authScopeList: AuthScopeList[]): Promise<void> {
    return;
  }
}

@Plugin({
  pluginName: 'HMSAccountAuthManager',
  plugin: 'cordova-plugin-hms-account',
  pluginRef: 'HMSAccountAuthManager',
  platforms: ['Android']
})

@Injectable()
export class HMSAccountAuthManager extends IonicNativePlugin {
  @Cordova({ otherPromise: true })
  getAuthResult(): Promise<AuthAccount> {
    return;
  }

  @Cordova({ otherPromise: true })
  getAuthResultWithScope(authAccount: AuthScopeList[]): Promise<AuthAccount> {
    return;
  }

  @Cordova({ otherPromise: true })
  containScopes(authAccount: AuthBuilder, authScopeList: AuthScopeList[]): Promise<ContainScopesResult> {
    return;
  }

  @Cordova({ otherPromise: true })
  addAuthScopes(requestCode: number, authScopeList: AuthScopeList[]): Promise<void> {
    return;
  }
}

@Plugin({
  pluginName: 'HMSHuaweiIdAuthTool',
  plugin: 'cordova-plugin-hms-account',
  pluginRef: 'HMSHuaweiIdAuthTool',
  platforms: ['Android']
})
@Injectable()
export class HMSHuaweiIdAuthTool extends IonicNativePlugin {
  @Cordova({ otherPromise: true })
  deleteAuthInfo(accessToken: string): Promise<void> {
    return;
  }

  @Cordova({ otherPromise: true })
  requestUnionId(huaweiAccountName: string): Promise<string> {
    return;
  }

  @Cordova({ otherPromise: true })
  requestAccessToken(account: Account, authScopeList: AuthScopeList[]): Promise<string> {
    return;
  }
}

@Plugin({
  pluginName: 'HMSNetworkTool',
  plugin: 'cordova-plugin-hms-account',
  pluginRef: 'HMSNetworkTool',
  platforms: ['Android']
})
@Injectable()
export class HMSNetworkTool extends IonicNativePlugin {
  @Cordova({ otherPromise: true })
  buildNetworkURL(domainHttps: DomainInfo): Promise<string> {
    return;
  }

  @Cordova({ otherPromise: true })
  buildNetworkCookie(cookie: Cookie): Promise<string> {
    return;
  }
}

@Plugin({
  pluginName: 'HMSReadSMSManager',
  plugin: 'cordova-plugin-hms-account',
  pluginRef: 'HMSReadSMSManager',
  platforms: ['Android']
})
@Injectable()
export class HMSReadSMSManager extends IonicNativePlugin {
  @Cordova({ otherPromise: true })
  smsVerificationCode(): Promise<string> {
    return;
  }

  @Cordova({ otherPromise: true })
  obtainHashCode(): Promise<string> {
    return;
  }

  @Cordova({ otherPromise: true })
  startConsent(phoneNumber: string): Promise<string> {
    return;
  }
}