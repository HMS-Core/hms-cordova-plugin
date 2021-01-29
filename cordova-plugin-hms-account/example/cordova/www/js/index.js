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

var app = {

    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        //this.receivedEvent('deviceready');
        document.getElementById('btn_sign_in_with_id_token').addEventListener('click', signInWithIdToken);
        document.getElementById('btn_sign_in_with_authorization_code').addEventListener('click', signInAuthorizationCode);
        document.getElementById('btn_sign_out').addEventListener('click', signOut);
        document.getElementById('btn_cancel_authorization').addEventListener('click', cancelAuthorization);
        document.getElementById('btn_silent_sign_in').addEventListener('click', silentSignIn);
        document.getElementById('btn_sms_verification_code').addEventListener('click', smsVerificationCode);
        document.getElementById('btn_huawei_id_auth_button').addEventListener('click', getHuaweiIdAuthButton);
    }

};

async function signInWithIdToken() {
    const signInParameters = {
        authRequestOption: [HMSCommonTypes.AuthRequestOption.SCOPE_ID_TOKEN, HMSCommonTypes.AuthRequestOption.SCOPE_ACCESS_TOKEN],
        authParam: HMSCommonTypes.HuaweiIdAuthParams.DEFAULT_AUTH_REQUEST_PARAM
    }


    try {
        const res = await HMSAccount.signIn(signInParameters);
        alert(JSON.stringify(res));
    } catch (ex) {
        alert(JSON.stringify(ex));
    }

}

async function signInAuthorizationCode() {
    const signInWithAuthCode = {
        authRequestOption: [HMSCommonTypes.AuthRequestOption.SCOPE_AUTHORIZATION_CODE],
        authParam: HMSCommonTypes.HuaweiIdAuthParams.DEFAULT_AUTH_REQUEST_PARAM,
        authScopeList: [HMSCommonTypes.AuthScopeList.EMAIL, HMSCommonTypes.AuthScopeList.PROFILE]
    }

    try {
        const res = await HMSAccount.signIn(signInWithAuthCode);
        alert(JSON.stringify(res));
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}

async function signOut() {
    try {
        await HMSAccount.signOut();
        alert("signOut -> success");
    } catch (ex) {
        alert('signOut -> Error : ' + JSON.stringify(ex));
    }
}

async function cancelAuthorization() {

    try {
        await HMSAccount.cancelAuthorization();
        alert("cancelAuthorization -> success");
    } catch (ex) {
        alert('cancelAuthorization -> Error : ' + JSON.stringify(ex));
    }
}

async function silentSignIn() {
    try {
        const authParam = HMSCommonTypes.HuaweiIdAuthParams.DEFAULT_AUTH_REQUEST_PARAM;
        const res = await HMSAccount.silentSignIn(authParam);
        alert("silentSignIn -> success :" + JSON.stringify(res));
    } catch (ex) {
        alert('silentSignIn -> Error : ' + JSON.stringify(ex));
    }
}

async function smsVerificationCode() {
    try {
        const res = await HMSReadSMSManager.smsVerificationCode();
        alert("smsVerificationCode -> success :" + JSON.stringify(res));
    } catch (ex) {
        alert('smsVerificationCode -> Error : ' + JSON.stringify(ex));
    }
}

function getHuaweiIdAuthButton() {

    const edittedButton = "btn_auth_button";

    HMSHuaweiIdAuthButton.getHuaweiIdAuthButton(edittedButton,
        HMSHuaweiIdAuthButton.Theme.THEME_FULL_TITLE,
        HMSHuaweiIdAuthButton.ColorPolicy.COLOR_POLICY_RED,
        HMSHuaweiIdAuthButton.CornerRadius.CORNER_RADIUS_LARGE);
}

app.initialize();