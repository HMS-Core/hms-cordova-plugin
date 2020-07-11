/**
 * Copyright 2020 Huawei Technologies Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const argscheck = require('cordova/argscheck');
const exec = require('cordova/exec');
const cordova = require('cordova');

const HMSAccount = function () {
      console.log("HMSAccount instanced");
};

const asyncExec = (clazz, func, args) => {
  return new Promise((resolve, reject) => {
    exec(resolve, reject, clazz, func, args);
  })
};

HMSAccount.prototype.signIn = function (authParams) {
    return asyncExec('HMSAccount', 'signIn', [authParams]);
};

HMSAccount.prototype.signOut = function () {
  return asyncExec('HMSAccount', 'signOut', []);
};

HMSAccount.prototype.cancelAuthorization = function () {
  return asyncExec('HMSAccount', 'cancelAuthorization', []);
};

HMSAccount.prototype.silentSignIn = function () {
  return asyncExec('HMSAccount', 'silentSignIn', []);
};

HMSAccount.prototype.SCOPE_PROFILE = "profile";
HMSAccount.prototype.SCOPE_ID_TOKEN = "idToken";
HMSAccount.prototype.SCOPE_ACCESS_TOKEN = "accessToken";
HMSAccount.prototype.SCOPE_MOBILE_NUMBER = "mobileNumber";
HMSAccount.prototype.SCOPE_EMAIL = "email";
HMSAccount.prototype.SCOPE_SHIPPING_ADDRESS = "shippingAddress";
HMSAccount.prototype.SCOPE_UID = "uId";
HMSAccount.prototype.SCOPE_ID = "id";
HMSAccount.prototype.SCOPE_AUTHORIZATION_CODE = "authorizationCode";


module.exports = new HMSAccount();
