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

import { Component } from '@angular/core';
import { from } from 'rxjs';
import {
  HMSAccount,
  HMSHuaweiIdAuthButton,
  HMSAccountAuthManager,
  HMSReadSMSManager,
  HMSAccountAuthService,
  HMSHuaweiIdAuthManager,
  HMSHuaweiIdAuthTool,
  HMSNetworkTool,
  AuthScopeList,
  Theme,
  ColorPolicy,
  CornerRadius,
  AuthRequestOption,
  AuthParams,
  SignInData,
  Account,
  Cookie,
  DomainInfo
} from '@hmscore/ionic-native-hms-account/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private account: HMSAccount,
    private smsManager: HMSReadSMSManager,
    private authButton: HMSHuaweiIdAuthButton,
    private accountAuthService: HMSAccountAuthService,
    private authManager: HMSHuaweiIdAuthManager,
    private accountAuthManager: HMSAccountAuthManager,
    private authTool: HMSHuaweiIdAuthTool,
    private tool: HMSNetworkTool) {
  }

  async signInWithIdToken() {
    console.log('signInWithIdToken clicked!');

    const signInParam: SignInData = {
      "authRequestOption": [AuthRequestOption.SCOPE_ID_TOKEN],
      "authParam": AuthParams.DEFAULT_AUTH_REQUEST_PARAM,
      "authScopeList": [AuthScopeList.EMAIL, AuthScopeList.PROFILE]
    }

    try {
      const res = await this.account.signIn(signInParam);
      console.log(JSON.stringify(res));
      alert('signIn -> success' + JSON.stringify(res));
    } catch (ex) {
      alert('signIn -> Error : ' + JSON.stringify(ex));
    }
  }

  async signInAuthorizationCode() {
    console.log('signInAuthorizationCode clicked!');

    const signInParam: SignInData = {
      "authRequestOption": [AuthRequestOption.SCOPE_AUTHORIZATION_CODE],
      "authParam": AuthParams.DEFAULT_AUTH_REQUEST_PARAM_GAME
    }

    try {
      const res = await this.account.signIn(signInParam);
      console.log(JSON.stringify(res));
      alert('signInAuthorizationCode -> success' + JSON.stringify(res));
    } catch (ex) {
      alert('signInAuthorizationCode -> Error : ' + JSON.stringify(ex));
    }
  }

  async signOut() {
    console.log('signOut clicked!');

    try {
      await this.account.signOut();
      alert('signOut -> success');
    } catch (ex) {
      alert('signOut -> Error : ' + JSON.stringify(ex));
    }
  }

  async cancelAuthorization() {
    console.log('cancelAuthorization clicked!');

    try {
      await this.account.cancelAuthorization();
      alert('cancelAuthorization -> success');
    } catch (ex) {
      alert('cancelAuthorization -> Error : ' + JSON.stringify(ex));
    }
  }


  async silentSignIn() {
    console.log('silentSignIn clicked!');
    const huaweiIdAuthParam: AuthParams = AuthParams.DEFAULT_AUTH_REQUEST_PARAM;
    try {
      const res = await this.account.silentSignIn(huaweiIdAuthParam);
      console.log(JSON.stringify(res));
      alert('silentSignIn -> success :' + JSON.stringify(res));
    } catch (ex) {
      alert('silentSignIn -> Error : ' + JSON.stringify(ex));
    }
  }


  async smsVerificationCode() {
    console.log('smsVerificationCode clicked!');
    try {
      const res = await this.smsManager.smsVerificationCode();
      alert('smsVerificationCode -> success :' + JSON.stringify(res));
    } catch (ex) {
      alert('smsVerificationCode -> Error : ' + JSON.stringify(ex));
    }
  }

  async getHashCode() {
    console.log('getHashCode clicked!');
    try {
      const res = await this.smsManager.obtainHashCode();
      alert('hashCode -> success :' + JSON.stringify(res));
    } catch (ex) {
      alert('hashCode -> Error : ' + JSON.stringify(ex));
    }
  }

  async startConsent() {
    console.log('startConsent clicked!');
    try {
      const res = await this.smsManager.startConsent("phoneNumber");
      alert('startConsent -> success :' + JSON.stringify(res));
    } catch (ex) {
      alert('startConsent -> Error : ' + JSON.stringify(ex));
    }
  }

  async getHuaweiIdAuthButton() {
    console.log('getHuaweiIdAuthButton clicked!');

    const edittedButton = 'btn_auth_button';

    this.authButton.getHuaweiIdAuthButton(edittedButton,
      Theme.THEME_FULL_TITLE,
      ColorPolicy.COLOR_POLICY_RED,
      CornerRadius.CORNER_RADIUS_LARGE);

  }

  async accountSignInWithIdToken() {
    console.log('accountSignInWithIdToken clicked!');

    const signInParam: SignInData = {
      "authRequestOption": [AuthRequestOption.SCOPE_ID_TOKEN],
      "authParam": AuthParams.DEFAULT_AUTH_REQUEST_PARAM,
      "authScopeList": [AuthScopeList.EMAIL, AuthScopeList.PROFILE]
    }

    try {
      const res = await this.accountAuthService.signIn(signInParam);
      console.log(JSON.stringify(res));
      alert('signIn -> success' + JSON.stringify(res));
    } catch (ex) {
      alert('signIn -> Error : ' + JSON.stringify(ex));
    }
  }

  async accountSignOut() {
    console.log('signOut clicked!');

    try {
      await this.accountAuthService.signOut();
      alert('signOut -> success');
    } catch (ex) {
      alert('signOut -> Error : ' + JSON.stringify(ex));
    }
  }

  async accountSilentSignIn() {
    console.log('silentSignIn clicked!');
    const authParam: AuthParams = AuthParams.DEFAULT_AUTH_REQUEST_PARAM;
    try {
      const res = await this.accountAuthService.silentSignIn(authParam);
      console.log(JSON.stringify(res));
      alert('silentSignIn -> success :' + JSON.stringify(res));
    } catch (ex) {
      alert('silentSignIn -> Error : ' + JSON.stringify(ex));
    }
  }


  async accountCancelAuthorization() {
    console.log('cancelAuthorization clicked!');

    try {
      await this.accountAuthService.cancelAuthorization();
      alert('cancelAuthorization -> success');
    } catch (ex) {
      alert('cancelAuthorization -> Error : ' + JSON.stringify(ex));
    }
  }

  async accountGetChannel() {
    console.log('getChannel clicked!');

    try {
      const res = await this.accountAuthService.getChannel();
      alert('getChannel -> success' + JSON.stringify(res.description));
      const bitmapData = "data:image/png;base64," + res.icon;
      document.getElementById('img_bitmap').setAttribute('src', bitmapData);
    } catch (ex) {
      alert('getChannel -> Error : ' + JSON.stringify(ex));
    }
  }

  async containScopes() {
    console.log('containScopes clicked!');
    const authHuaweiId = {
      openId: "myOpenId",
      uid: "myUid",
      photoUriString: "myPhotoUrl",
      displayName: "myDisplayName",
      accessToken: "myAccessToken",
      serviceCountryCode: "myServiceCountryCode",
      gender: 0,
      status: 2,
      unionId: "myUnionId",
      serverAuthCode: "myServerAuthCode",
      countryCode: "myCountryCode",
      grantedScopes: [AuthScopeList.OPENID, AuthScopeList.PROFILE, AuthScopeList.EMAIL],

    }

    const authScopeList = [AuthScopeList.OPENID, AuthScopeList.PROFILE];

    try {
      const containScopeRes = await this.authManager.containScopes(authHuaweiId, authScopeList);
      alert('containScopes -> success: ' + JSON.stringify(containScopeRes));
    } catch (ex) {
      alert('containScopes -> Error : ' + JSON.stringify(ex));
    }
  }

  async getAuthResult() {
    console.log('getAuthResult clicked!');

    try {
      const lastAuthResult = await this.authManager.getAuthResult();
      alert('getAuthResult -> success: ' + JSON.stringify(lastAuthResult));
    } catch (ex) {
      alert('getAuthResult -> Error : ' + JSON.stringify(ex));
    }
  }

  async getAuthResultWithScopes() {
    console.log('getAuthResultWithScopes clicked!');
    const authScopeList = [AuthScopeList.OPENID, AuthScopeList.PROFILE];

    try {
      const authResultWithScope = await this.authManager.getAuthResultWithScope(authScopeList);
      alert('getAuthResultWithScopes -> success: ' + JSON.stringify(authResultWithScope));
    } catch (ex) {
      alert('getAuthResultWithScopes -> Error : ' + JSON.stringify(ex));
    }
  }

  async addAuthScopes() {
    console.log('addAuthScopes clicked!');
    const authScopeList = [AuthScopeList.EMAIL];

    try {
      const authScope = await this.authManager.addAuthScopes(8888, authScopeList);
      alert('addAuthScopes -> success: ' + JSON.stringify(authScope));
    } catch (ex) {
      alert('addAuthScopes -> Error : ' + JSON.stringify(ex));
    }
  }



  async accountContainScopes() {
    console.log('containScopes clicked!');
    const authHuaweiId = {
      openId: "myOpenId",
      uid: "myUid",
      photoUriString: "myPhotoUrl",
      displayName: "myDisplayName",
      accessToken: "myAccessToken",
      serviceCountryCode: "myServiceCountryCode",
      gender: 0,
      status: 2,
      unionId: "myUnionId",
      serverAuthCode: "myServerAuthCode",
      countryCode: "myCountryCode",
      grantedScopes: [AuthScopeList.OPENID, AuthScopeList.PROFILE, AuthScopeList.EMAIL],

    }

    const authScopeList = [AuthScopeList.OPENID, AuthScopeList.PROFILE];

    try {
      const containScopeRes = await this.accountAuthManager.containScopes(authHuaweiId, authScopeList);
      alert('containScopes -> success: ' + JSON.stringify(containScopeRes));
    } catch (ex) {
      alert('containScopes -> Error : ' + JSON.stringify(ex));
    }
  }

  async accountGetAuthResult() {
    console.log('getAuthResult clicked!');

    try {
      const lastAuthResult = await this.accountAuthManager.getAuthResult();
      alert('getAuthResult -> success: ' + JSON.stringify(lastAuthResult));
    } catch (ex) {
      alert('getAuthResult -> Error : ' + JSON.stringify(ex));
    }
  }

  async accountGetAuthResultWithScopes() {
    console.log('getAuthResultWithScopes clicked!');
    const authScopeList = [AuthScopeList.OPENID, AuthScopeList.PROFILE];

    try {
      const authResultWithScope = await this.accountAuthManager.getAuthResultWithScope(authScopeList);
      alert('getAuthResultWithScopes -> success: ' + JSON.stringify(authResultWithScope));
    } catch (ex) {
      alert('getAuthResultWithScopes -> Error : ' + JSON.stringify(ex));
    }
  }

  async accountAddAuthScopes() {
    console.log('addAuthScopes clicked!');
    const authScopeList = [AuthScopeList.EMAIL];

    try {
      const authScope = await this.accountAuthManager.addAuthScopes(8888, authScopeList);
      alert('addAuthScopes -> success: ' + JSON.stringify(authScope));
    } catch (ex) {
      alert('addAuthScopes -> Error : ' + JSON.stringify(ex));
    }
  }

  async deleteAuthInfo() {
    try {
      const res = await this.authTool.deleteAuthInfo("accessTokenData");
      alert("deleteAuthInfo -> success " + JSON.stringify(res));
    } catch (ex) {
      alert('deleteAuthInfo -> Error : ' + JSON.stringify(ex));
    }
  }

  async requestUnionId() {
    try {
      const res = await this.authTool.requestUnionId("test@test.com");
      alert("requestUnionId -> success " + JSON.stringify(res));
    } catch (ex) {
      alert('requestUnionId -> Error : ' + JSON.stringify(ex));
    }
  }

  async requestAccessToken() {
    const account: Account =
    {
      "type": "com.huawei.hwid",
      "name": "test@test.com"
    }

    const scopeList = [AuthScopeList.EMAIL];

    try {
      const res = await this.authTool.requestAccessToken(account, scopeList);
      alert("requestAccessToken -> success " + JSON.stringify(res));
    } catch (ex) {
      alert('requestAccessToken -> Error : ' + JSON.stringify(ex));
    }
  }

  async buildNetworkURL() {
    let domainInfo: DomainInfo = {
      "domain": "www.demo.com",
      "isUseHttps": true
    }

    try {
      const res = await this.tool.buildNetworkURL(domainInfo);
      console.log(JSON.stringify(res));
      alert('buildNetworkURL -> success :' + JSON.stringify(res));
    } catch (ex) {
      alert('buildNetworkURL -> Error : ' + JSON.stringify(ex));
    }
  }

  async buildNetworkCookie() {
    const cookieInfo: Cookie = {
      "cookieName": "hello",
      "cookieValue": "world",
      "domain": "www.demo.com",
      "path": "/demo",
      "isHttpOnly": true,
      "isSecure": true,
      "maxAge": 10
    };

    try {
      const res = await this.tool.buildNetworkCookie(cookieInfo);
      console.log(JSON.stringify(res));
      alert('buildNetworkCookie -> success :' + JSON.stringify(res));
    } catch (ex) {
      alert('buildNetworkCookie -> Error : ' + JSON.stringify(ex));
    }
  }

}
