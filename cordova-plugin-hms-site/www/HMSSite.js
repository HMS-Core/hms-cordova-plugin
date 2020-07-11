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

var exec = require("cordova/exec");

var HMSSiteAPI = function () {
  init();
};

var init = async () => {
  //set constants
  HMSSiteAPI.prototype.LocationType = await asyncExecute("ACTION_GET_LOCATION_TYPE");
};

var asyncExecute = (action, param) => {
  return new Promise((resolve, reject) => {
    exec(resolve, reject, "cordova-plugin-hms-site", action, param === undefined || param === null ? [{}] : [param]);
  });
};  

var execute = (success, error, action, param) => {
  exec(success, error, "cordova-plugin-hms-site", action, param === undefined || param === null ? [{}] : [param]);
};

HMSSiteAPI.prototype.initializeService = (config, success, error) => {
  execute(success, error, "ACTION_INITIALIZE_SERVICE", config);
};

HMSSiteAPI.prototype.textSearch = (textSearchRequest, success, error) => {
  execute(success, error, "ACTION_TEXT_SEARCH", textSearchRequest);
};

HMSSiteAPI.prototype.detailSearch = (detailSearchRequest, success, error) => {
  execute(success, error, "ACTION_DETAILED_SEARCH", detailSearchRequest);
};

HMSSiteAPI.prototype.querySuggestion = (querySuggestionRequest, success, error) => {
  execute(success, error, "ACTION_QUERY_SUGGESTION", querySuggestionRequest);
};

HMSSiteAPI.prototype.nearbySearch = (nearbySearchRequest, success, error) => {
  execute(success, error, "ACTION_NEARBY_SEARCH", nearbySearchRequest);
};

module.exports = new HMSSiteAPI();
