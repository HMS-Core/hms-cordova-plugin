"use strict";
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
const utils_1 = require("./utils");
const Interfaces_1 = require("./Interfaces");
let HMSSite = "cordova-plugin-hms-site";
class HMSSiteAPI {
    constructor() {
        this.LocationType = Interfaces_1.LocationType;
        this.HwLocationType = Interfaces_1.HwLocationType;
    }
    initializeService(config) {
        return run("ACTION_INITIALIZE_SERVICE", config);
    }
    textSearch(textSearchRequest) {
        return run("ACTION_TEXT_SEARCH", textSearchRequest);
    }
    detailSearch(detailSearch) {
        return run("ACTION_DETAILED_SEARCH", detailSearch);
    }
    querySuggestion(querySuggestionRequest) {
        return run("ACTION_QUERY_SUGGESTION", querySuggestionRequest);
    }
    nearbySearch(nearbySearchRequest) {
        return run("ACTION_NEARBY_SEARCH", nearbySearchRequest);
    }
    widgetSearch(widgetSearchRequest) {
        return run("ACTION_WIDGET_SEARCH", widgetSearchRequest);
    }
    enableLogger() {
        return run("enableLogger");
    }
    disableLogger() {
        return run("disableLogger");
    }
}
function run(funcName, args) {
    return utils_1.asyncExec(HMSSite, funcName, [args]);
}
module.exports = new HMSSiteAPI();
//# sourceMappingURL=HMSSite.js.map