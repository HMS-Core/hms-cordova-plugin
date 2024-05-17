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

'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var HMSLocation = /** @class */ (function (_super) {
    tslib.__extends(HMSLocation, _super);
    function HMSLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSLocation.prototype.getGeofenceService = function () {
        return HMSLocation.getPlugin().getGeofenceService();
    };
    HMSLocation.prototype.getGeocoderService = function (language, country) {
        return HMSLocation.getPlugin().getGeocoderService(language, country);
    };
    HMSLocation.prototype.getFusedLocationProviderClient = function () {
        return HMSLocation.getPlugin().getFusedLocationProviderClient();
    };
    HMSLocation.prototype.getActivityIdentificationService = function () {
        return HMSLocation.getPlugin().getActivityIdentificationService();
    };
    HMSLocation.prototype.getCoordinateConversionService = function () {
        return HMSLocation.getPlugin().getCoordinateConversionService();
    };
    HMSLocation.prototype.addListener = function (event, callback) {
        return HMSLocation.getPlugin().addListener(event, callback);
    };
    HMSLocation.prototype.disableLogger = function () { return core.cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSLocation.prototype.enableLogger = function () { return core.cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HMSLocation.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSLocation, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HMSLocation.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSLocation });
    HMSLocation.pluginName = "HMSLocation";
    HMSLocation.plugin = "cordova-plugin-hms-location";
    HMSLocation.pluginRef = "HMSLocation";
    HMSLocation.repo = "";
    HMSLocation.install = "";
    HMSLocation.installVariables = [];
    HMSLocation.platforms = ["Android"];
    HMSLocation = tslib.__decorate([], HMSLocation);
    return HMSLocation;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSLocation, decorators: [{
            type: i0.Injectable
        }], propDecorators: { disableLogger: [], enableLogger: [] } });
var BackgroundManager = /** @class */ (function () {
    function BackgroundManager() {
    }
    BackgroundManager.notify = function (notificationId, notification) {
    };
    BackgroundManager.makeToast = function (text, duration) {
    };
    return BackgroundManager;
}());
exports.Events = void 0;
(function (Events) {
    Events["ON_LOCATION_RESULT"] = "onLocationResult";
    Events["ACTIVITY_CONVERSION_RESULT"] = "onActivityConversionResult";
    Events["ACTIVITY_IDENTIFICATION_RESULT"] = "onActivityIdentificationResult";
    Events["GEOFENCE_RESULT"] = "onGeofenceResult";
})(exports.Events || (exports.Events = {}));
exports.PriorityConstants = void 0;
(function (PriorityConstants) {
    PriorityConstants[PriorityConstants["PRIORITY_HIGH_ACCURACY"] = 100] = "PRIORITY_HIGH_ACCURACY";
    PriorityConstants[PriorityConstants["PRIORITY_BALANCED_POWER_ACCURACY"] = 102] = "PRIORITY_BALANCED_POWER_ACCURACY";
    PriorityConstants[PriorityConstants["PRIORITY_LOW_POWER"] = 104] = "PRIORITY_LOW_POWER";
    PriorityConstants[PriorityConstants["PRIORITY_NO_POWER"] = 105] = "PRIORITY_NO_POWER";
    PriorityConstants[PriorityConstants["PRIORITY_HD_ACCURACY"] = 200] = "PRIORITY_HD_ACCURACY";
    PriorityConstants[PriorityConstants["PRIORITY_INDOOR"] = 300] = "PRIORITY_INDOOR";
    PriorityConstants[PriorityConstants["PRIORITY_HIGH_ACCURACY_AND_INDOOR"] = 400] = "PRIORITY_HIGH_ACCURACY_AND_INDOOR";
})(exports.PriorityConstants || (exports.PriorityConstants = {}));
exports.NavigationRequestConstants = void 0;
(function (NavigationRequestConstants) {
    NavigationRequestConstants[NavigationRequestConstants["OVERPASS"] = 1] = "OVERPASS";
    NavigationRequestConstants[NavigationRequestConstants["IS_SUPPORT_EX"] = 2] = "IS_SUPPORT_EX";
})(exports.NavigationRequestConstants || (exports.NavigationRequestConstants = {}));
exports.ActivityType = void 0;
(function (ActivityType) {
    ActivityType[ActivityType["VEHICLE"] = 100] = "VEHICLE";
    ActivityType[ActivityType["BIKE"] = 101] = "BIKE";
    ActivityType[ActivityType["FOOT"] = 102] = "FOOT";
    ActivityType[ActivityType["STILL"] = 103] = "STILL";
    ActivityType[ActivityType["OTHERS"] = 104] = "OTHERS";
    ActivityType[ActivityType["WALKING"] = 107] = "WALKING";
    ActivityType[ActivityType["RUNNING"] = 108] = "RUNNING";
})(exports.ActivityType || (exports.ActivityType = {}));
exports.ConversionType = void 0;
(function (ConversionType) {
    ConversionType[ConversionType["ENTER_ACTIVITY_CONVERSION"] = 0] = "ENTER_ACTIVITY_CONVERSION";
    ConversionType[ConversionType["EXIT_ACTIVITY_CONVERSION"] = 1] = "EXIT_ACTIVITY_CONVERSION";
})(exports.ConversionType || (exports.ConversionType = {}));
exports.CoordinateType = void 0;
(function (CoordinateType) {
    CoordinateType[CoordinateType["COORDINATE_TYPE_WGS_84"] = 1] = "COORDINATE_TYPE_WGS_84";
    CoordinateType[CoordinateType["COORDINATE_TYPE_GCJ_02"] = 0] = "COORDINATE_TYPE_GCJ_02";
})(exports.CoordinateType || (exports.CoordinateType = {}));
exports.GeofenceInitConversionType = void 0;
(function (GeofenceInitConversionType) {
    GeofenceInitConversionType[GeofenceInitConversionType["ENTER_INIT_CONVERSION"] = 1] = "ENTER_INIT_CONVERSION";
    GeofenceInitConversionType[GeofenceInitConversionType["EXIT_INIT_CONVERSION"] = 2] = "EXIT_INIT_CONVERSION";
    GeofenceInitConversionType[GeofenceInitConversionType["DWELL_INIT_CONVERSION"] = 4] = "DWELL_INIT_CONVERSION";
})(exports.GeofenceInitConversionType || (exports.GeofenceInitConversionType = {}));
exports.GeofenceTriggerType = void 0;
(function (GeofenceTriggerType) {
    GeofenceTriggerType[GeofenceTriggerType["ENTER_GEOFENCE_CONVERSION"] = 1] = "ENTER_GEOFENCE_CONVERSION";
    GeofenceTriggerType[GeofenceTriggerType["EXIT_GEOFENCE_CONVERSION"] = 2] = "EXIT_GEOFENCE_CONVERSION";
    GeofenceTriggerType[GeofenceTriggerType["DWELL_GEOFENCE_CONVERSION"] = 4] = "DWELL_GEOFENCE_CONVERSION";
    GeofenceTriggerType[GeofenceTriggerType["GEOFENCE_NEVER_EXPIRE"] = -1] = "GEOFENCE_NEVER_EXPIRE";
})(exports.GeofenceTriggerType || (exports.GeofenceTriggerType = {}));
exports.NotificationCategory = void 0;
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
})(exports.NotificationCategory || (exports.NotificationCategory = {}));
exports.NotificationImportance = void 0;
(function (NotificationImportance) {
    NotificationImportance[NotificationImportance["DEFAULT"] = 3] = "DEFAULT";
    NotificationImportance[NotificationImportance["HIGH"] = 4] = "HIGH";
    NotificationImportance[NotificationImportance["LOW"] = 2] = "LOW";
    NotificationImportance[NotificationImportance["MAX"] = 5] = "MAX";
    NotificationImportance[NotificationImportance["MIN"] = 1] = "MIN";
    NotificationImportance[NotificationImportance["NONE"] = 0] = "NONE";
    NotificationImportance[NotificationImportance["UNSPECIFIED"] = -100] = "UNSPECIFIED";
})(exports.NotificationImportance || (exports.NotificationImportance = {}));
exports.RequestType = void 0;
(function (RequestType) {
    RequestType["LOCATION_CALLBACK"] = "locationCallback";
    RequestType["PENDING_INTENT"] = "pendingIntent";
})(exports.RequestType || (exports.RequestType = {}));

exports.BackgroundManager = BackgroundManager;
exports.HMSLocation = HMSLocation;
