/*
Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

var exec = cordova.require("cordova/exec");

if (typeof module != "undefined" && module.exports) {

  exports.turnOffPush = function(arg0, success, error) {
    exec(success, error, "HMSPush", "turnOffPush", [arg0]);
  };

  exports.turnOnPush = function(arg0, success, error) {
    exec(success, error, "HMSPush", "turnOnPush", [arg0]);
  };

  exports.getID = function(arg0, success, error) {
    exec(success, error, "HMSPush", "getID", [arg0]);
  };

  exports.getAAID = function(arg0, success, error) {
    exec(success, error, "HMSPush", "getAAID", [arg0]);
  };

  exports.getToken = function(arg0, success, error) {
    exec(success, error, "HMSPush", "getToken", [arg0]);
  };

  exports.getCreationTime = function(arg0, success, error) {
    exec(success, error, "HMSPush", "getCreationTime", [arg0]);
  };

  exports.deleteAAID = function(arg0, success, error) {
    exec(success, error, "HMSPush", "deleteAAID", [arg0]);
  };

  exports.deleteToken = function(arg0, success, error) {
    exec(success, error, "HMSPush", "deleteToken", [arg0]);
  };

  exports.subscribe = function(arg0, success, error) {
    exec(success, error, "HMSPush", "subscribe", [arg0]);
  };

  exports.unsubscribe = function(arg0, success, error) {
    exec(success, error, "HMSPush", "unsubscribe", [arg0]);
  };

  exports.disableAutoInit = function(arg0, success, error) {
    exec(success, error, "HMSPush", "disableAutoInit", [arg0]);
  };

  exports.enableAutoInit = function(arg0, success, error) {
    exec(success, error, "HMSPush", "enableAutoInit", [arg0]);
  };

  exports.isAutoInitEnabled = function(arg0, success, error) {
    exec(success, error, "HMSPush", "isAutoInitEnabled", [arg0]);
  };

  exports.test = function(arg0, success, error) {
    exec(success, error, "HMSPush", "test", [arg0]);
  };

  exports.onMessageReceived = function(arg0, success, error) {
    exec(success, error, "HMSPush", "onMessageReceived", [arg0]);
  };

  
}
