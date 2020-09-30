"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = exports.ActivityConversions = exports.Activities = exports.hasPermission = exports.requestPermission = exports.deleteActivityIdentificationUpdates = exports.createActivityIdentificationUpdates = exports.deleteActivityConversionUpdates = exports.createActivityConversionUpdates = exports.init = void 0;
const utils_1 = require("./utils");
function init() {
    return run('init');
}
exports.init = init;
function createActivityConversionUpdates(activityConversionRequest) {
    return run('createActivityConversionUpdates', [activityConversionRequest]);
}
exports.createActivityConversionUpdates = createActivityConversionUpdates;
function deleteActivityConversionUpdates(id) {
    return run('deleteActivityConversionUpdates', [id]);
}
exports.deleteActivityConversionUpdates = deleteActivityConversionUpdates;
function createActivityIdentificationUpdates(intervalMillis) {
    return run('createActivityIdentificationUpdates', [intervalMillis]);
}
exports.createActivityIdentificationUpdates = createActivityIdentificationUpdates;
function deleteActivityIdentificationUpdates(id) {
    return run('deleteActivityIdentificationUpdates', [id]);
}
exports.deleteActivityIdentificationUpdates = deleteActivityIdentificationUpdates;
function requestPermission() {
    return run('requestPermission');
}
exports.requestPermission = requestPermission;
function hasPermission() {
    return run('hasPermission');
}
exports.hasPermission = hasPermission;
//
// Helpers
//
function run(funcName, args = []) {
    return utils_1.asyncExec('HMSActivityIdentification', funcName, args);
}
//
// Constants
//
var Activities;
(function (Activities) {
    Activities[Activities["VEHICLE"] = 100] = "VEHICLE";
    Activities[Activities["BIKE"] = 101] = "BIKE";
    Activities[Activities["FOOT"] = 102] = "FOOT";
    Activities[Activities["RUNNING"] = 108] = "RUNNING";
    Activities[Activities["STILL"] = 103] = "STILL";
    Activities[Activities["TILTING"] = 105] = "TILTING";
    Activities[Activities["OTHERS"] = 104] = "OTHERS";
    Activities[Activities["WALKING"] = 107] = "WALKING";
})(Activities = exports.Activities || (exports.Activities = {}));
var ActivityConversions;
(function (ActivityConversions) {
    ActivityConversions[ActivityConversions["ENTER_ACTIVITY_CONVERSION"] = 0] = "ENTER_ACTIVITY_CONVERSION";
    ActivityConversions[ActivityConversions["EXIT_ACTIVITY_CONVERSION"] = 1] = "EXIT_ACTIVITY_CONVERSION";
})(ActivityConversions = exports.ActivityConversions || (exports.ActivityConversions = {}));
var Events;
(function (Events) {
    Events["ACTIVITY_CONVERSION_RESULT"] = "onActivityConversionResult";
    Events["ACTIVITY_IDENTIFICATION_RESULT"] = "onActivityIdentificationResult";
})(Events = exports.Events || (exports.Events = {}));
//# sourceMappingURL=HMSActivityIdentification.js.map