/*
    Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

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
  HMSReadSMSManager,
  AuthScopeList,
  Theme,
  ColorPolicy,
  CornerRadius,
  AuthRequestOption,
  HuaweiIdAuthParams,
  SignInData
} from '@ionic-native/hms-account/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private account: HMSAccount, private smsManager: HMSReadSMSManager, private authButton: HMSHuaweiIdAuthButton) {
  }

  async signInWithIdToken() {
    console.log('signInWithIdToken clicked!');

    const signInParam: SignInData = {
      "authRequestOption": [AuthRequestOption.SCOPE_ID_TOKEN],
      "authParam": HuaweiIdAuthParams.DEFAULT_AUTH_REQUEST_PARAM,
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
      "authParam": HuaweiIdAuthParams.DEFAULT_AUTH_REQUEST_PARAM_GAME
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
    const huaweiIdAuthParam: HuaweiIdAuthParams = HuaweiIdAuthParams.DEFAULT_AUTH_REQUEST_PARAM;
    try {
      const res = await this.account.silentSignIn(huaweiIdAuthParam);
      console.log(JSON.stringify(res));
      alert('silentSignIn -> success :' + JSON.stringify(res));
    } catch (ex) {
      alert('silentSignIn -> Error : ' + JSON.stringify(ex));
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

  async smsVerificationCode() {
    console.log('smsVerificationCode clicked!');
    try {
      const res = await this.smsManager.smsVerificationCode();
      alert('smsVerificationCode -> success :' + JSON.stringify(res));
    } catch (ex) {
      alert('smsVerificationCode -> Error : ' + JSON.stringify(ex));
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
}
