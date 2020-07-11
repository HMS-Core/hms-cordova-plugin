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

const HMSHuaweiIdAuthManager = function () {
      console.log("HMSHuaweiIdAuthManager instanced");
};

const asyncExec = (clazz, func, args) => {
  return new Promise((resolve, reject) => {
    exec(resolve, reject, clazz, func, args);
  })
};


HMSHuaweiIdAuthManager.prototype.getAuthResult = function () {
  return asyncExec('HMSHuaweiIdAuthManager', 'getAuthResult', []);
};

HMSHuaweiIdAuthManager.prototype.getAuthResultWithScope = function (scopeList) {
  return asyncExec('HMSHuaweiIdAuthManager', 'getAuthResultWithScope', [scopeList]);
};

HMSHuaweiIdAuthManager.prototype.containScopes = function (authHuaweiId, scopeList) {
  return asyncExec('HMSHuaweiIdAuthManager', 'containScopes', [authHuaweiId, scopeList]);
};

HMSHuaweiIdAuthManager.prototype.addAuthScopes = function (requestCode, scopeList) {
  return asyncExec('HMSHuaweiIdAuthManager', 'addAuthScopes', [requestCode,scopeList]);
};



module.exports = new HMSHuaweiIdAuthManager();
