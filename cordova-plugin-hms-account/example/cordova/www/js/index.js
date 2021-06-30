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

var app = {

    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        //this.receivedEvent('deviceready');
        document.getElementById('btn_sign_in_with_id_token').addEventListener('click', signInWithIdToken);
        document.getElementById('btn_sign_in_with_authorization_code').addEventListener('click', signInAuthorizationCode);
        document.getElementById('btn_sign_out').addEventListener('click', signOut);
        document.getElementById('btn_cancel_authorization').addEventListener('click', cancelAuthorization);
        document.getElementById('btn_silent_sign_in').addEventListener('click', silentSignIn);
        document.getElementById('btn_huawei_id_auth_button').addEventListener('click', getHuaweiIdAuthButton);
        document.getElementById('btn_account_sign_in_with_id_token').addEventListener('click', accountSignInWithIdToken);
        document.getElementById('btn_account_sign_out').addEventListener('click', accountSignOut);
        document.getElementById('btn_account_cancel_authorization').addEventListener('click', accountCancelAuthorization);
        document.getElementById('btn_account_silent_sign_in').addEventListener('click', accountSilentSignIn);
        document.getElementById('btn_get_channel').addEventListener('click', getChannel);
        document.getElementById('btn_account_contain_scopes').addEventListener('click', containScopes);
        document.getElementById('btn_auth_result').addEventListener('click', getAuthResult);
        document.getElementById('btn_auth_result_with_scopes').addEventListener('click', getAuthResultWithScopes);
        document.getElementById('btn_add_auth_scopes').addEventListener('click', addAuthScopes);

        document.getElementById('btn_hwid_contain_scopes').addEventListener('click', hwidContainScopes);
        document.getElementById('btn_hwid_auth_result').addEventListener('click', hwidGetAuthResult);
        document.getElementById('btn_hwid_auth_result_with_scopes').addEventListener('click', hwidGetAuthResultWithScopes);
        document.getElementById('btn_hwid_add_auth_scopes').addEventListener('click', hwidAddAuthScopes);

        document.getElementById('btn_request_union_id').addEventListener('click', requestUnionId);
        document.getElementById('btn_request_access_token').addEventListener('click', requestAccessToken);
        document.getElementById('btn_delete_auth_info').addEventListener('click', deleteAuthInfo);

        document.getElementById('btn_build_network_url').addEventListener('click', buildNetworkUrl);
        document.getElementById('btn_build_network_cookie').addEventListener('click', buildNetworkCookie);

        document.getElementById('btn_start_consent').addEventListener('click', startConsent);
        document.getElementById('btn_sms_verification_code').addEventListener('click', smsVerificationCode);
        document.getElementById('btn_obtain_hash_code').addEventListener('click', obtainHashCode);


    }

};

async function accountSignInWithIdToken() {
    const signInParameters = {
        authRequestOption: [HMSCommonTypes.AuthRequestOption.SCOPE_ID_TOKEN, HMSCommonTypes.AuthRequestOption.SCOPE_ACCESS_TOKEN],
        authParam: HMSCommonTypes.AuthParams.DEFAULT_AUTH_REQUEST_PARAM
    }

    try {
        const res = await HMSAccountAuthService.signIn(signInParameters);
        alert(JSON.stringify(res));
    } catch (ex) {
        alert(JSON.stringify(ex));
    }

}

async function accountSignOut() {
    try {
        await HMSAccountAuthService.signOut();
        alert("signOut -> success");
    } catch (ex) {
        alert('signOut -> Error : ' + JSON.stringify(ex));
    }
}

async function accountCancelAuthorization() {

    try {
        await HMSAccountAuthService.cancelAuthorization();
        alert("cancelAuthorization -> success");
    } catch (ex) {
        alert('cancelAuthorization -> Error : ' + JSON.stringify(ex));
    }
}

async function accountSilentSignIn() {
    try {
        const authParam = HMSCommonTypes.AuthParams.DEFAULT_AUTH_REQUEST_PARAM;
        const res = await HMSAccountAuthService.silentSignIn(authParam);
        alert("silentSignIn -> success :" + JSON.stringify(res));
    } catch (ex) {
        alert('silentSignIn -> Error : ' + JSON.stringify(ex));
    }
}

async function getChannel() {
    try {
        const res = await HMSAccountAuthService.getChannel();
        alert("getChannel -> success :" + JSON.stringify(res.description));
        const bitmapData = "data:image/png;base64," + res.icon;
        document.getElementById('img_bitmap').setAttribute('src', bitmapData);

    } catch (ex) {
        alert('getChannel -> Error : ' + JSON.stringify(ex));
    }
}

async function signInWithIdToken() {
    const signInParameters = {
        authRequestOption: [HMSCommonTypes.AuthRequestOption.SCOPE_ID_TOKEN, HMSCommonTypes.AuthRequestOption.SCOPE_ACCESS_TOKEN],
        authParam: HMSCommonTypes.AuthParams.DEFAULT_AUTH_REQUEST_PARAM
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
        authParam: HMSCommonTypes.AuthParams.DEFAULT_AUTH_REQUEST_PARAM,
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
        const authParam = HMSCommonTypes.AuthParams.DEFAULT_AUTH_REQUEST_PARAM;
        const res = await HMSAccount.silentSignIn(authParam);
        alert("silentSignIn -> success :" + JSON.stringify(res));
    } catch (ex) {
        alert('silentSignIn -> Error : ' + JSON.stringify(ex));
    }
}

function getHuaweiIdAuthButton() {

    const edittedButton = "btn_auth_button";

    HMSHuaweiIdAuthButton.getHuaweiIdAuthButton(edittedButton,
        HMSHuaweiIdAuthButton.Theme.THEME_FULL_TITLE,
        HMSHuaweiIdAuthButton.ColorPolicy.COLOR_POLICY_RED,
        HMSHuaweiIdAuthButton.CornerRadius.CORNER_RADIUS_LARGE);
}

async function containScopes() {
    const authAccount = {
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
        grantedScopes: [HMSCommonTypes.AuthScopeList.OPENID, HMSCommonTypes.AuthScopeList.PROFILE, HMSCommonTypes.AuthScopeList.EMAIL],

    }

    const authScopeList = [HMSCommonTypes.AuthScopeList.OPENID, HMSCommonTypes.AuthScopeList.PROFILE];

    try {
        const res = await HMSAccountAuthManager.containScopes(authAccount, authScopeList);
        alert("containScopes-> success: " + JSON.stringify(res))
    } catch (ex) {
        alert('containScopes -> Error : ' + JSON.stringify(ex));
    }

}

async function getAuthResult() {
    try {
        const res = await HMSAccountAuthManager.getAuthResult();
        alert("getAuthResult-> success " + JSON.stringify(res));
    } catch (ex) {
        alert('getAuthResult -> Error : ' + JSON.stringify(ex));
    }
}

async function getAuthResultWithScopes() {
    const authScopeList = [HMSCommonTypes.AuthScopeList.OPENID, HMSCommonTypes.AuthScopeList.PROFILE];

    try {
        const res = await HMSAccountAuthManager.getAuthResultWithScope(authScopeList);
        alert("getAuthResultWithScope -> success: " + JSON.stringify(res))
    } catch (ex) {
        alert('getAuthResultWithScope -> Error : ' + JSON.stringify(ex));
    }
}

async function addAuthScopes() {

    const authScopeList = [HMSCommonTypes.AuthScopeList.EMAIL];
    try {
        await HMSAccountAuthManager.addAuthScopes(8888, authScopeList);
        alert("addAuthScopes -> success")
    } catch (ex) {
        alert('addAuthScopes -> Error : ' + JSON.stringify(ex));
    }
}

async function hwidContainScopes() {
    const authAccount = {
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
        grantedScopes: [HMSCommonTypes.AuthScopeList.OPENID, HMSCommonTypes.AuthScopeList.PROFILE, HMSCommonTypes.AuthScopeList.EMAIL],

    }

    const authScopeList = [HMSCommonTypes.AuthScopeList.OPENID, HMSCommonTypes.AuthScopeList.PROFILE];

    try {
        const res = await HMSHuaweiIdAuthManager.containScopes(authAccount, authScopeList);
        alert("containScopes-> success: " + JSON.stringify(res))
    } catch (ex) {
        alert('containScopes -> Error : ' + JSON.stringify(ex));
    }

}

async function hwidGetAuthResult() {
    try {
        const res = await HMSHuaweiIdAuthManager.getAuthResult();
        alert("getAuthResult-> success " + JSON.stringify(res));
    } catch (ex) {
        alert('getAuthResult -> Error : ' + JSON.stringify(ex));
    }
}

async function hwidGetAuthResultWithScopes() {
    const authScopeList = [HMSCommonTypes.AuthScopeList.OPENID, HMSCommonTypes.AuthScopeList.PROFILE];

    try {
        const res = await HMSHuaweiIdAuthManager.getAuthResultWithScope(authScopeList);
        alert("getAuthResultWithScope -> success: " + JSON.stringify(res))
    } catch (ex) {
        alert('getAuthResultWithScope -> Error : ' + JSON.stringify(ex));
    }
}

async function hwidAddAuthScopes() {

    const authScopeList = [HMSCommonTypes.AuthScopeList.EMAIL];
    try {
        await HMSHuaweiIdAuthManager.addAuthScopes(8888, authScopeList);
        alert("addAuthScopes -> success")
    } catch (ex) {
        alert('addAuthScopes -> Error : ' + JSON.stringify(ex));
    }
}

async function deleteAuthInfo() {
    try {
        const res = await HMSHuaweiIdAuthTool.deleteAuthInfo("accessTokenData");
        alert("deleteAuthInfo -> success " + JSON.stringify(res));
    } catch (ex) {
        alert('deleteAuthInfo -> Error : ' + JSON.stringify(ex));
    }
}

async function requestUnionId() {
    try {
        const res = await HMSHuaweiIdAuthTool.requestUnionId("test@test.com");
        alert("requestUnionId -> success " + JSON.stringify(res));
    } catch (ex) {
        alert('requestUnionId -> Error : ' + JSON.stringify(ex));
    }
}

async function requestAccessToken() {

    const account =
    {
        "type": "com.huawei.hwid",
        "name": "test@test.com"
    }

    const scopeList = [HMSCommonTypes.AuthScopeList.EMAIL];

    try {
        const res = await HMSHuaweiIdAuthTool.requestAccessToken(account, scopeList);
        alert("requestAccessToken -> success " + JSON.stringify(res));
    } catch (ex) {
        alert('requestAccessToken -> Error : ' + JSON.stringify(ex));
    }
}

async function buildNetworkUrl() {

    const domainInfo = {
        "domain": "www.demo.com",
        "isUseHttps": true
    }

    try {
        const res = await HMSNetworkTool.buildNetworkURL(domainInfo);
        console.log(JSON.stringify(res));
        alert('buildNetworkURL -> success :' + JSON.stringify(res));
    } catch (ex) {
        alert('buildNetworkURL -> Error : ' + JSON.stringify(ex));
    }
}


async function buildNetworkCookie() {

    const cookieInfo = {
        "cookieName": "hello",
        "cookieValue": "world",
        "domain": "www.demo.com",
        "path": "/demo",
        "isHttpOnly": true,
        "isSecure": true,
        "maxAge": 10
    };

    try {
        const res = await HMSNetworkTool.buildNetworkCookie(cookieInfo);
        console.log(JSON.stringify(res));
        alert('buildNetworkCookie -> success :' + JSON.stringify(res));
    } catch (ex) {
        alert('buildNetworkCookie -> Error : ' + JSON.stringify(ex));
    }
}

async function obtainHashCode() {
    try {
        const res = await HMSReadSMSManager.obtainHashCode();
        alert('hashCode -> success :' + JSON.stringify(res));
    } catch (ex) {
        alert('hashCode -> Error : ' + JSON.stringify(ex));
    }
}

async function startConsent() {
    try {
        const res = await HMSReadSMSManager.startConsent("+90...");
        alert("startConsent -> success :" + JSON.stringify(res));
    } catch (ex) {
        alert('startConsent -> Error : ' + JSON.stringify(ex));
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


app.initialize();