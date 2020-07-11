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

const HMSHuaweiIdAuthTool = function () {
      console.log("HMSHuaweiIdAuthTool instanced");
};

const asyncExec = (clazz, func, args) => {
  return new Promise((resolve, reject) => {
    exec(resolve, reject, clazz, func, args);
  })
};

HMSHuaweiIdAuthTool.prototype.deleteAuthInfo = function (accessToken) {
  return asyncExec('HMSHuaweiIdAuthTool', 'deleteAuthInfo', [accessToken]);
};

HMSHuaweiIdAuthTool.prototype.requestUnionId = function (huaweiAccountName) {
  return asyncExec('HMSHuaweiIdAuthTool', 'requestUnionId', [huaweiAccountName]);
};

HMSHuaweiIdAuthTool.prototype.requestAccessToken = function (account, scopeList) {
  return asyncExec('HMSHuaweiIdAuthTool', 'requestAccessToken', [account,scopeList]);
};


module.exports = new HMSHuaweiIdAuthTool();
