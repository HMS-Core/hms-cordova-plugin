/*
    Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.

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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestType = exports.NotificationImportance = exports.NotificationCategory = exports.GeofenceTriggerType = exports.GeofenceInitConversionType = exports.CoordinateType = exports.ConversionType = exports.ActivityType = exports.NavigationRequestConstants = exports.PriorityConstants = exports.Events = void 0;

var Events;
(function (Events) {
    Events["ON_LOCATION_RESULT"] = "onLocationResult";
    Events["ACTIVITY_CONVERSION_RESULT"] = "onActivityConversionResult";
    Events["ACTIVITY_IDENTIFICATION_RESULT"] = "onActivityIdentificationResult";
    Events["GEOFENCE_RESULT"] = "onGeofenceResult";
})(Events = exports.Events || (exports.Events = {}));
var PriorityConstants;
(function (PriorityConstants) {
    PriorityConstants[PriorityConstants["PRIORITY_HIGH_ACCURACY"] = 100] = "PRIORITY_HIGH_ACCURACY";
    PriorityConstants[PriorityConstants["PRIORITY_BALANCED_POWER_ACCURACY"] = 102] = "PRIORITY_BALANCED_POWER_ACCURACY";
    PriorityConstants[PriorityConstants["PRIORITY_LOW_POWER"] = 104] = "PRIORITY_LOW_POWER";
    PriorityConstants[PriorityConstants["PRIORITY_NO_POWER"] = 105] = "PRIORITY_NO_POWER";
    PriorityConstants[PriorityConstants["PRIORITY_HD_ACCURACY"] = 200] = "PRIORITY_HD_ACCURACY";
    PriorityConstants[PriorityConstants["PRIORITY_INDOOR"] = 300] = "PRIORITY_INDOOR";
    PriorityConstants[PriorityConstants["PRIORITY_HIGH_ACCURACY_AND_INDOOR"] = 400] = "PRIORITY_HIGH_ACCURACY_AND_INDOOR";
})(PriorityConstants = exports.PriorityConstants || (exports.PriorityConstants = {}));
var NavigationRequestConstants;
(function (NavigationRequestConstants) {
    NavigationRequestConstants[NavigationRequestConstants["OVERPASS"] = 1] = "OVERPASS";
    NavigationRequestConstants[NavigationRequestConstants["IS_SUPPORT_EX"] = 2] = "IS_SUPPORT_EX";
})(NavigationRequestConstants = exports.NavigationRequestConstants || (exports.NavigationRequestConstants = {}));
var ActivityType;
(function (ActivityType) {
    ActivityType[ActivityType["VEHICLE"] = 100] = "VEHICLE";
    ActivityType[ActivityType["BIKE"] = 101] = "BIKE";
    ActivityType[ActivityType["FOOT"] = 102] = "FOOT";
    ActivityType[ActivityType["STILL"] = 103] = "STILL";
    ActivityType[ActivityType["OTHERS"] = 104] = "OTHERS";
    ActivityType[ActivityType["WALKING"] = 107] = "WALKING";
    ActivityType[ActivityType["RUNNING"] = 108] = "RUNNING";
})(ActivityType = exports.ActivityType || (exports.ActivityType = {}));
var ConversionType;
(function (ConversionType) {
    ConversionType[ConversionType["ENTER_ACTIVITY_CONVERSION"] = 0] = "ENTER_ACTIVITY_CONVERSION";
    ConversionType[ConversionType["EXIT_ACTIVITY_CONVERSION"] = 1] = "EXIT_ACTIVITY_CONVERSION";
})(ConversionType = exports.ConversionType || (exports.ConversionType = {}));
var CoordinateType;
(function (CoordinateType) {
    CoordinateType[CoordinateType["COORDINATE_TYPE_WGS_84"] = 1] = "COORDINATE_TYPE_WGS_84";
    CoordinateType[CoordinateType["COORDINATE_TYPE_GCJ_02"] = 0] = "COORDINATE_TYPE_GCJ_02";
})(CoordinateType = exports.CoordinateType || (exports.CoordinateType = {}));
var GeofenceInitConversionType;
(function (GeofenceInitConversionType) {
    GeofenceInitConversionType[GeofenceInitConversionType["ENTER_INIT_CONVERSION"] = 1] = "ENTER_INIT_CONVERSION";
    GeofenceInitConversionType[GeofenceInitConversionType["EXIT_INIT_CONVERSION"] = 2] = "EXIT_INIT_CONVERSION";
    GeofenceInitConversionType[GeofenceInitConversionType["DWELL_INIT_CONVERSION"] = 4] = "DWELL_INIT_CONVERSION";
})(GeofenceInitConversionType = exports.GeofenceInitConversionType || (exports.GeofenceInitConversionType = {}));
var GeofenceTriggerType;
(function (GeofenceTriggerType) {
    GeofenceTriggerType[GeofenceTriggerType["ENTER_GEOFENCE_CONVERSION"] = 1] = "ENTER_GEOFENCE_CONVERSION";
    GeofenceTriggerType[GeofenceTriggerType["EXIT_GEOFENCE_CONVERSION"] = 2] = "EXIT_GEOFENCE_CONVERSION";
    GeofenceTriggerType[GeofenceTriggerType["DWELL_GEOFENCE_CONVERSION"] = 4] = "DWELL_GEOFENCE_CONVERSION";
    GeofenceTriggerType[GeofenceTriggerType["GEOFENCE_NEVER_EXPIRE"] = -1] = "GEOFENCE_NEVER_EXPIRE";
})(GeofenceTriggerType = exports.GeofenceTriggerType || (exports.GeofenceTriggerType = {}));
var NotificationCategory;
(function (NotificationCategory) {
    NotificationCategory["ALARM"] = "alarm";
    NotificationCategory["CALL"] = "call";
    NotificationCategory["EMAIL"] = "email";
    NotificationCategory["ERROR"] = "err";
    NotificationCategory["EVENT"] = "event";
    NotificationCategory["MESSAGE"] = "msg";
    NotificationCategory["NAVIGATION"] = "navigation";
    NotificationCategory["PROGRESS"] = "progress";
    NotificationCategory["PROMO"] = "promo";
    NotificationCategory["RECOMMENDATION"] = "recommendation";
    NotificationCategory["REMINDER"] = "reminder";
    NotificationCategory["SERVICE"] = "service";
    NotificationCategory["SOCIAL"] = "social";
    NotificationCategory["STATUS"] = "status";
    NotificationCategory["SYSTEM"] = "sys";
    NotificationCategory["TRANSPORT"] = "transport";
})(NotificationCategory = exports.NotificationCategory || (exports.NotificationCategory = {}));
var NotificationImportance;
(function (NotificationImportance) {
    NotificationImportance[NotificationImportance["DEFAULT"] = 3] = "DEFAULT";
    NotificationImportance[NotificationImportance["HIGH"] = 4] = "HIGH";
    NotificationImportance[NotificationImportance["LOW"] = 2] = "LOW";
    NotificationImportance[NotificationImportance["MAX"] = 5] = "MAX";
    NotificationImportance[NotificationImportance["MIN"] = 1] = "MIN";
    NotificationImportance[NotificationImportance["NONE"] = 0] = "NONE";
    NotificationImportance[NotificationImportance["UNSPECIFIED"] = -100] = "UNSPECIFIED";
})(NotificationImportance = exports.NotificationImportance || (exports.NotificationImportance = {}));
var RequestType;
(function (RequestType) {
    RequestType["LOCATION_CALLBACK"] = "locationCallback";
    RequestType["PENDING_INTENT"] = "pendingIntent";
})(RequestType = exports.RequestType || (exports.RequestType = {}));
//# sourceMappingURL=enums.js.map