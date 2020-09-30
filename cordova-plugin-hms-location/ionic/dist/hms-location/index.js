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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
export var GeofenceRequestConstants;
(function (GeofenceRequestConstants) {
    GeofenceRequestConstants[GeofenceRequestConstants["ENTER_INIT_CONVERSION"] = 1] = "ENTER_INIT_CONVERSION";
    GeofenceRequestConstants[GeofenceRequestConstants["EXIT_INIT_CONVERSION"] = 2] = "EXIT_INIT_CONVERSION";
    GeofenceRequestConstants[GeofenceRequestConstants["DWELL_INIT_CONVERSION"] = 4] = "DWELL_INIT_CONVERSION";
    GeofenceRequestConstants[GeofenceRequestConstants["COORDINATE_TYPE_WGS_84"] = 1] = "COORDINATE_TYPE_WGS_84";
    GeofenceRequestConstants[GeofenceRequestConstants["COORDINATE_TYPE_GCJ_02"] = 0] = "COORDINATE_TYPE_GCJ_02";
})(GeofenceRequestConstants || (GeofenceRequestConstants = {}));
export var GeofenceConstants;
(function (GeofenceConstants) {
    GeofenceConstants[GeofenceConstants["ENTER_GEOFENCE_CONVERSION"] = 1] = "ENTER_GEOFENCE_CONVERSION";
    GeofenceConstants[GeofenceConstants["EXIT_GEOFENCE_CONVERSION"] = 2] = "EXIT_GEOFENCE_CONVERSION";
    GeofenceConstants[GeofenceConstants["DWELL_GEOFENCE_CONVERSION"] = 4] = "DWELL_GEOFENCE_CONVERSION";
    GeofenceConstants[GeofenceConstants["GEOFENCE_NEVER_EXPIRE"] = -1] = "GEOFENCE_NEVER_EXPIRE";
})(GeofenceConstants || (GeofenceConstants = {}));
export var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["GEOFENCE_UNAVAILABLE"] = 10200] = "GEOFENCE_UNAVAILABLE";
    ErrorCodes[ErrorCodes["GEOFENCE_NUMBER_OVER_LIMIT"] = 10201] = "GEOFENCE_NUMBER_OVER_LIMIT";
    ErrorCodes[ErrorCodes["GEOFENCE_PENDINGINTENT_OVER_LIMIT"] = 10202] = "GEOFENCE_PENDINGINTENT_OVER_LIMIT";
    ErrorCodes[ErrorCodes["GEOFENCE_INSUFFICIENT_PERMISSION"] = 10204] = "GEOFENCE_INSUFFICIENT_PERMISSION";
    ErrorCodes[ErrorCodes["GEOFENCE_REQUEST_TOO_OFTEN"] = 10205] = "GEOFENCE_REQUEST_TOO_OFTEN";
})(ErrorCodes || (ErrorCodes = {}));
export var Events;
(function (Events) {
    Events["GEOFENCE_RESULT"] = "onGeofenceResult";
})(Events || (Events = {}));
export var PriorityConstants;
(function (PriorityConstants) {
    PriorityConstants[PriorityConstants["PRIORITY_BALANCED_POWER_ACCURACY"] = 102] = "PRIORITY_BALANCED_POWER_ACCURACY";
    PriorityConstants[PriorityConstants["PRIORITY_HIGH_ACCURACY"] = 100] = "PRIORITY_HIGH_ACCURACY";
    PriorityConstants[PriorityConstants["PRIORITY_LOW_POWER"] = 104] = "PRIORITY_LOW_POWER";
    PriorityConstants[PriorityConstants["PRIORITY_NO_POWER"] = 105] = "PRIORITY_NO_POWER";
})(PriorityConstants || (PriorityConstants = {}));
(function (Events) {
    Events["SCANNING_RESULT"] = "onScanningResult";
})(Events || (Events = {}));
export var NavigationRequestConstants;
(function (NavigationRequestConstants) {
    NavigationRequestConstants[NavigationRequestConstants["OVERPASS"] = 1] = "OVERPASS";
    NavigationRequestConstants[NavigationRequestConstants["IS_SUPPORT_EX"] = 2] = "IS_SUPPORT_EX";
})(NavigationRequestConstants || (NavigationRequestConstants = {}));
export var Activities;
(function (Activities) {
    Activities[Activities["VEHICLE"] = 100] = "VEHICLE";
    Activities[Activities["BIKE"] = 101] = "BIKE";
    Activities[Activities["FOOT"] = 102] = "FOOT";
    Activities[Activities["RUNNING"] = 108] = "RUNNING";
    Activities[Activities["STILL"] = 103] = "STILL";
    Activities[Activities["TILTING"] = 105] = "TILTING";
    Activities[Activities["OTHERS"] = 104] = "OTHERS";
    Activities[Activities["WALKING"] = 107] = "WALKING";
})(Activities || (Activities = {}));
export var ActivityConversions;
(function (ActivityConversions) {
    ActivityConversions[ActivityConversions["ENTER_ACTIVITY_CONVERSION"] = 0] = "ENTER_ACTIVITY_CONVERSION";
    ActivityConversions[ActivityConversions["EXIT_ACTIVITY_CONVERSION"] = 1] = "EXIT_ACTIVITY_CONVERSION";
})(ActivityConversions || (ActivityConversions = {}));
(function (Events) {
    Events["ACTIVITY_CONVERSION_RESULT"] = "onActivityConversionResult";
    Events["ACTIVITY_IDENTIFICATION_RESULT"] = "onActivityIdentificationResult";
})(Events || (Events = {}));
var HMSLocationKitOriginal = /** @class */ (function (_super) {
    __extends(HMSLocationKitOriginal, _super);
    function HMSLocationKitOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSLocationKitOriginal.prototype.init = function () { return cordova(this, "init", { "otherPromise": true }, arguments); };
    HMSLocationKitOriginal.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSLocationKitOriginal.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HMSLocationKitOriginal.pluginName = "HMSLocationKit";
    HMSLocationKitOriginal.plugin = "cordova-plugin-hms-location";
    HMSLocationKitOriginal.pluginRef = "HMSLocationKit";
    HMSLocationKitOriginal.platforms = ["Android"];
    return HMSLocationKitOriginal;
}(IonicNativePlugin));
var HMSLocationKit = new HMSLocationKitOriginal();
export { HMSLocationKit };
var HMSFusedLocationOriginal = /** @class */ (function (_super) {
    __extends(HMSFusedLocationOriginal, _super);
    function HMSFusedLocationOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PriorityConstants = PriorityConstants;
        _this.Events = Events;
        _this.NavigationRequestConstants = NavigationRequestConstants;
        return _this;
    }
    HMSFusedLocationOriginal.prototype.init = function () { return cordova(this, "init", { "otherPromise": true }, arguments); };
    HMSFusedLocationOriginal.prototype.getLastLocation = function () { return cordova(this, "getLastLocation", { "otherPromise": true }, arguments); };
    HMSFusedLocationOriginal.prototype.flushLocations = function () { return cordova(this, "flushLocations", { "otherPromise": true }, arguments); };
    HMSFusedLocationOriginal.prototype.checkLocationSettings = function (request) { return cordova(this, "checkLocationSettings", { "otherPromise": true }, arguments); };
    HMSFusedLocationOriginal.prototype.getNavigationContextState = function (requestType) { return cordova(this, "getNavigationContextState", { "otherPromise": true }, arguments); };
    HMSFusedLocationOriginal.prototype.getLastLocationWithAddress = function (request) { return cordova(this, "getLastLocationWithAddress", { "otherPromise": true }, arguments); };
    HMSFusedLocationOriginal.prototype.getLocationAvailability = function () { return cordova(this, "getLocationAvailability", { "otherPromise": true }, arguments); };
    HMSFusedLocationOriginal.prototype.setMockLocation = function (latLng) { return cordova(this, "setMockLocation", { "otherPromise": true }, arguments); };
    HMSFusedLocationOriginal.prototype.setMockMode = function (mode) { return cordova(this, "setMockMode", { "otherPromise": true }, arguments); };
    HMSFusedLocationOriginal.prototype.requestLocationUpdates = function (request) { return cordova(this, "requestLocationUpdates", { "otherPromise": true }, arguments); };
    HMSFusedLocationOriginal.prototype.requestLocationUpdatesEx = function (request) { return cordova(this, "requestLocationUpdatesEx", { "otherPromise": true }, arguments); };
    HMSFusedLocationOriginal.prototype.removeLocationUpdates = function (id) { return cordova(this, "removeLocationUpdates", { "otherPromise": true }, arguments); };
    HMSFusedLocationOriginal.prototype.requestPermission = function () { return cordova(this, "requestPermission", { "otherPromise": true }, arguments); };
    HMSFusedLocationOriginal.prototype.hasPermission = function () { return cordova(this, "hasPermission", { "otherPromise": true }, arguments); };
    HMSFusedLocationOriginal.pluginName = "HMSFusedLocation";
    HMSFusedLocationOriginal.plugin = "cordova-plugin-hms-location";
    HMSFusedLocationOriginal.pluginRef = "HMSFusedLocation";
    HMSFusedLocationOriginal.platforms = ["Android"];
    return HMSFusedLocationOriginal;
}(IonicNativePlugin));
var HMSFusedLocation = new HMSFusedLocationOriginal();
export { HMSFusedLocation };
var HMSActivityIdentificationOriginal = /** @class */ (function (_super) {
    __extends(HMSActivityIdentificationOriginal, _super);
    function HMSActivityIdentificationOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Activities = Activities;
        _this.ActivityConversions = ActivityConversions;
        _this.Events = Events;
        return _this;
    }
    HMSActivityIdentificationOriginal.prototype.init = function () { return cordova(this, "init", { "otherPromise": true }, arguments); };
    HMSActivityIdentificationOriginal.prototype.createActivityConversionUpdates = function (activityConversionRequest) { return cordova(this, "createActivityConversionUpdates", { "otherPromise": true }, arguments); };
    HMSActivityIdentificationOriginal.prototype.deleteActivityConversionUpdates = function (id) { return cordova(this, "deleteActivityConversionUpdates", { "otherPromise": true }, arguments); };
    HMSActivityIdentificationOriginal.prototype.createActivityIdentificationUpdates = function (intervalMillis) { return cordova(this, "createActivityIdentificationUpdates", { "otherPromise": true }, arguments); };
    HMSActivityIdentificationOriginal.prototype.deleteActivityIdentificationUpdates = function (id) { return cordova(this, "deleteActivityIdentificationUpdates", { "otherPromise": true }, arguments); };
    HMSActivityIdentificationOriginal.prototype.requestPermission = function () { return cordova(this, "requestPermission", { "otherPromise": true }, arguments); };
    HMSActivityIdentificationOriginal.prototype.hasPermission = function () { return cordova(this, "hasPermission", { "otherPromise": true }, arguments); };
    HMSActivityIdentificationOriginal.pluginName = "HMSActivityIdentification";
    HMSActivityIdentificationOriginal.plugin = "cordova-plugin-hms-location";
    HMSActivityIdentificationOriginal.pluginRef = "HMSActivityIdentification";
    HMSActivityIdentificationOriginal.platforms = ["Android"];
    return HMSActivityIdentificationOriginal;
}(IonicNativePlugin));
var HMSActivityIdentification = new HMSActivityIdentificationOriginal();
export { HMSActivityIdentification };
var HMSGeofenceOriginal = /** @class */ (function (_super) {
    __extends(HMSGeofenceOriginal, _super);
    function HMSGeofenceOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GeofenceRequestConstants = GeofenceRequestConstants;
        _this.GeofenceConstants = GeofenceConstants;
        _this.ErrorCodes = ErrorCodes;
        _this.Events = Events;
        return _this;
    }
    HMSGeofenceOriginal.prototype.createGeofenceList = function (geofences, initConversions, coordinateType) { return cordova(this, "createGeofenceList", { "otherPromise": true }, arguments); };
    HMSGeofenceOriginal.prototype.deleteGeofenceList = function (id) { return cordova(this, "deleteGeofenceList", { "otherPromise": true }, arguments); };
    HMSGeofenceOriginal.pluginName = "HMSGeofence";
    HMSGeofenceOriginal.plugin = "cordova-plugin-hms-location";
    HMSGeofenceOriginal.pluginRef = "HMSGeofence";
    HMSGeofenceOriginal.platforms = ["Android"];
    return HMSGeofenceOriginal;
}(IonicNativePlugin));
var HMSGeofence = new HMSGeofenceOriginal();
export { HMSGeofence };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1sb2NhdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBMEYsTUFBTSxvQkFBb0IsQ0FBQztBQUc1SCxNQUFNLENBQU4sSUFBWSx3QkFNWDtBQU5ELFdBQVksd0JBQXdCO0lBQ2hDLHlHQUF5QixDQUFBO0lBQ3pCLHVHQUF3QixDQUFBO0lBQ3hCLHlHQUF5QixDQUFBO0lBQ3pCLDJHQUEwQixDQUFBO0lBQzFCLDJHQUEwQixDQUFBO0FBQzlCLENBQUMsRUFOVyx3QkFBd0IsS0FBeEIsd0JBQXdCLFFBTW5DO0FBRUQsTUFBTSxDQUFOLElBQVksaUJBS1g7QUFMRCxXQUFZLGlCQUFpQjtJQUN6QixtR0FBNkIsQ0FBQTtJQUM3QixpR0FBNEIsQ0FBQTtJQUM1QixtR0FBNkIsQ0FBQTtJQUM3Qiw0RkFBMEIsQ0FBQTtBQUM5QixDQUFDLEVBTFcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQUs1QjtBQUVELE1BQU0sQ0FBTixJQUFZLFVBTVg7QUFORCxXQUFZLFVBQVU7SUFDbEIsK0VBQTRCLENBQUE7SUFDNUIsMkZBQWtDLENBQUE7SUFDbEMseUdBQXlDLENBQUE7SUFDekMsdUdBQXdDLENBQUE7SUFDeEMsMkZBQWtDLENBQUE7QUFDdEMsQ0FBQyxFQU5XLFVBQVUsS0FBVixVQUFVLFFBTXJCO0FBRUQsTUFBTSxDQUFOLElBQVksTUFFWDtBQUZELFdBQVksTUFBTTtJQUNkLDhDQUFvQyxDQUFBO0FBQ3hDLENBQUMsRUFGVyxNQUFNLEtBQU4sTUFBTSxRQUVqQjtBQUVELE1BQU0sQ0FBTixJQUFZLGlCQUtYO0FBTEQsV0FBWSxpQkFBaUI7SUFDekIsbUhBQXNDLENBQUE7SUFDdEMsK0ZBQTRCLENBQUE7SUFDNUIsdUZBQXdCLENBQUE7SUFDeEIscUZBQXVCLENBQUE7QUFDM0IsQ0FBQyxFQUxXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFLNUI7QUFFRCxXQUFZLE1BQU07SUFDZCw4Q0FBb0MsQ0FBQTtBQUN4QyxDQUFDLEVBRlcsTUFBTSxLQUFOLE1BQU0sUUFFakI7QUFFRCxNQUFNLENBQU4sSUFBWSxVQVNYO0FBVEQsV0FBWSxVQUFVO0lBQ2xCLG1EQUFhLENBQUE7SUFDYiw2Q0FBVSxDQUFBO0lBQ1YsNkNBQVUsQ0FBQTtJQUNWLG1EQUFhLENBQUE7SUFDYiwrQ0FBVyxDQUFBO0lBQ1gsbURBQWEsQ0FBQTtJQUNiLGlEQUFZLENBQUE7SUFDWixtREFBYSxDQUFBO0FBQ2pCLENBQUMsRUFUVyxVQUFVLEtBQVYsVUFBVSxRQVNyQjtBQUVELE1BQU0sQ0FBTixJQUFZLG1CQUdYO0FBSEQsV0FBWSxtQkFBbUI7SUFDM0IsdUdBQTZCLENBQUE7SUFDN0IscUdBQTRCLENBQUE7QUFDaEMsQ0FBQyxFQUhXLG1CQUFtQixLQUFuQixtQkFBbUIsUUFHOUI7QUFFRCxXQUFZLE1BQU07SUFDZCxtRUFBeUQsQ0FBQTtJQUN6RCwyRUFBaUUsQ0FBQTtBQUNyRSxDQUFDLEVBSFcsTUFBTSxLQUFOLE1BQU0sUUFHakI7O0lBdUJtQyxrQ0FBaUI7Ozs7SUFFakQsNkJBQUk7Ozs7O3lCQXRGUjtFQW9Gb0MsaUJBQWlCO1NBQXhDLGNBQWM7O0lBY1csb0NBQWlCOzs7UUFDbkQsdUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDdEMsWUFBTSxHQUFHLE1BQU0sQ0FBQzs7O0lBR2hCLCtCQUFJO0lBS0osMENBQWU7SUFLZix5Q0FBYztJQUtkLGdEQUFxQixhQUFDLE9BQWdDO0lBS3RELHFEQUEwQixhQUFDLE9BQXdCO0lBS25ELGtEQUF1QjtJQUt2QiwwQ0FBZSxhQUFDLE1BQWM7SUFLOUIsc0NBQVcsYUFBQyxJQUFhO0lBTXpCLGlEQUFzQixhQUFDLE9BQXdCO0lBSy9DLGdEQUFxQixhQUFDLEVBQVU7SUFLaEMsNENBQWlCO0lBS2pCLHdDQUFhOzs7OzsyQkEvSmpCO0VBa0dzQyxpQkFBaUI7U0FBMUMsZ0JBQWdCOztJQTZLa0IsNkNBQWlCOzs7UUFDNUQsZ0JBQVUsR0FBRyxVQUFVLENBQUM7UUFDeEIseUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7UUFDMUMsWUFBTSxHQUFHLE1BQU0sQ0FBQzs7O0lBR2hCLHdDQUFJO0lBS0osbUVBQStCLGFBQUMseUJBQW1EO0lBS25GLG1FQUErQixhQUFDLEVBQVU7SUFLMUMsdUVBQW1DLGFBQUMsY0FBc0I7SUFLMUQsdUVBQW1DLGFBQUMsRUFBVTtJQUs5QyxxREFBaUI7SUFLakIsaURBQWE7Ozs7O29DQW5UakI7RUErUStDLGlCQUFpQjtTQUFuRCx5QkFBeUI7O0lBNERMLCtCQUFpQjs7O1FBQ3ZDLDhCQUF3QixHQUFHLHdCQUF3QixDQUFDO1FBQzNELHVCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQ3RDLGdCQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLFlBQU0sR0FBRyxNQUFNLENBQUM7OztJQUdoQix3Q0FBa0IsYUFBQyxTQUFxQixFQUFFLGVBQXVCLEVBQUUsY0FBc0I7SUFLekYsd0NBQWtCLGFBQUMsRUFBVTs7Ozs7c0JBdlZqQztFQTJVaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBlbnVtIEdlb2ZlbmNlUmVxdWVzdENvbnN0YW50cyB7XG4gICAgRU5URVJfSU5JVF9DT05WRVJTSU9OID0gMSxcbiAgICBFWElUX0lOSVRfQ09OVkVSU0lPTiA9IDIsXG4gICAgRFdFTExfSU5JVF9DT05WRVJTSU9OID0gNCxcbiAgICBDT09SRElOQVRFX1RZUEVfV0dTXzg0ID0gMSxcbiAgICBDT09SRElOQVRFX1RZUEVfR0NKXzAyID0gMCxcbn1cblxuZXhwb3J0IGVudW0gR2VvZmVuY2VDb25zdGFudHMge1xuICAgIEVOVEVSX0dFT0ZFTkNFX0NPTlZFUlNJT04gPSAxLFxuICAgIEVYSVRfR0VPRkVOQ0VfQ09OVkVSU0lPTiA9IDIsXG4gICAgRFdFTExfR0VPRkVOQ0VfQ09OVkVSU0lPTiA9IDQsXG4gICAgR0VPRkVOQ0VfTkVWRVJfRVhQSVJFID0gLTEsXG59XG5cbmV4cG9ydCBlbnVtIEVycm9yQ29kZXMge1xuICAgIEdFT0ZFTkNFX1VOQVZBSUxBQkxFID0gMTAyMDAsXG4gICAgR0VPRkVOQ0VfTlVNQkVSX09WRVJfTElNSVQgPSAxMDIwMSxcbiAgICBHRU9GRU5DRV9QRU5ESU5HSU5URU5UX09WRVJfTElNSVQgPSAxMDIwMixcbiAgICBHRU9GRU5DRV9JTlNVRkZJQ0lFTlRfUEVSTUlTU0lPTiA9IDEwMjA0LFxuICAgIEdFT0ZFTkNFX1JFUVVFU1RfVE9PX09GVEVOID0gMTAyMDUsXG59XG5cbmV4cG9ydCBlbnVtIEV2ZW50cyB7XG4gICAgR0VPRkVOQ0VfUkVTVUxUID0gXCJvbkdlb2ZlbmNlUmVzdWx0XCJcbn1cblxuZXhwb3J0IGVudW0gUHJpb3JpdHlDb25zdGFudHMge1xuICAgIFBSSU9SSVRZX0JBTEFOQ0VEX1BPV0VSX0FDQ1VSQUNZID0gMTAyLFxuICAgIFBSSU9SSVRZX0hJR0hfQUNDVVJBQ1kgPSAxMDAsXG4gICAgUFJJT1JJVFlfTE9XX1BPV0VSID0gMTA0LFxuICAgIFBSSU9SSVRZX05PX1BPV0VSID0gMTA1LFxufVxuXG5leHBvcnQgZW51bSBFdmVudHMge1xuICAgIFNDQU5OSU5HX1JFU1VMVCA9IFwib25TY2FubmluZ1Jlc3VsdFwiXG59XG5cbmV4cG9ydCBlbnVtIEFjdGl2aXRpZXMge1xuICAgIFZFSElDTEUgPSAxMDAsXG4gICAgQklLRSA9IDEwMSxcbiAgICBGT09UID0gMTAyLFxuICAgIFJVTk5JTkcgPSAxMDgsXG4gICAgU1RJTEwgPSAxMDMsXG4gICAgVElMVElORyA9IDEwNSxcbiAgICBPVEhFUlMgPSAxMDQsXG4gICAgV0FMS0lORyA9IDEwNyxcbn1cblxuZXhwb3J0IGVudW0gQWN0aXZpdHlDb252ZXJzaW9ucyB7XG4gICAgRU5URVJfQUNUSVZJVFlfQ09OVkVSU0lPTiA9IDAsXG4gICAgRVhJVF9BQ1RJVklUWV9DT05WRVJTSU9OID0gMSxcbn1cblxuZXhwb3J0IGVudW0gRXZlbnRzIHtcbiAgICBBQ1RJVklUWV9DT05WRVJTSU9OX1JFU1VMVCA9IFwib25BY3Rpdml0eUNvbnZlcnNpb25SZXN1bHRcIixcbiAgICBBQ1RJVklUWV9JREVOVElGSUNBVElPTl9SRVNVTFQgPSBcIm9uQWN0aXZpdHlJZGVudGlmaWNhdGlvblJlc3VsdFwiLFxufVxuXG5cbnR5cGUgSGFuZGxlciA9IChkYXRhOiBhbnkpID0+IHZvaWQ7XG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgICAgIGhtc0V2ZW50SGFuZGxlcnM6IHtcbiAgICAgICAgICAgIFtrZXk6IHN0cmluZ106IEhhbmRsZXJbXVxuICAgICAgICB9LFxuICAgICAgICBobXNFdmVudEhhbmRsZXI6IChldmVudE5hbWU6IHN0cmluZywgZGF0YTogYW55KSA9PiB2b2lkLFxuICAgICAgICByZWdpc3RlckhNU0V2ZW50OiAoZXZlbnROYW1lOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpID0+IHZvaWRcbiAgICAgICAgdW5yZWdpc3RlckhNU0V2ZW50OiAoZXZlbnROYW1lOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpID0+IHZvaWRcbiAgICAgICAgaG1zU2V0Q29uc3RhbnRzOiAob2JqTmFtZTogc3RyaW5nLCBjb25zdGFuczogYW55KSA9PiB2b2lkXG4gICAgfVxufVxuXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiAnSE1TTG9jYXRpb25LaXQnLFxuICAgIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1sb2NhdGlvbicsXG4gICAgcGx1Z2luUmVmOiAnSE1TTG9jYXRpb25LaXQnLFxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TTG9jYXRpb25LaXQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXG4gICAgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogJ0hNU0Z1c2VkTG9jYXRpb24nLFxuICAgIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1sb2NhdGlvbicsXG4gICAgcGx1Z2luUmVmOiAnSE1TRnVzZWRMb2NhdGlvbicsXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNGdXNlZExvY2F0aW9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIFByaW9yaXR5Q29uc3RhbnRzID0gUHJpb3JpdHlDb25zdGFudHM7XG4gICAgRXZlbnRzID0gRXZlbnRzO1xuXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXG4gICAgaW5pdCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXG4gICAgZ2V0TGFzdExvY2F0aW9uKCk6IFByb21pc2U8TG9jYXRpb24+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxuICAgIGZsdXNoTG9jYXRpb25zKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXG4gICAgY2hlY2tMb2NhdGlvblNldHRpbmdzKHJlcXVlc3Q6IExvY2F0aW9uU2V0dGluZ3NSZXF1ZXN0KTogUHJvbWlzZTxMb2NhdGlvblNldHRpbmdzU3RhdGVzPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7b3RoZXJQcm9taXNlOiB0cnVlfSlcbiAgICBnZXRMYXN0TG9jYXRpb25XaXRoQWRkcmVzcyhyZXF1ZXN0OiBMb2NhdGlvblJlcXVlc3QpOiBQcm9taXNlPEhXTG9jYXRpb24+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxuICAgIGdldExvY2F0aW9uQXZhaWxhYmlsaXR5KCk6IFByb21pc2U8TG9jYXRpb25BdmFpbGFiaWxpdHk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxuICAgIHNldE1vY2tMb2NhdGlvbihsYXRMbmc6IExhdExuZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXG4gICAgc2V0TW9ja01vZGUobW9kZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRklYTUU6IG9ic2VydmFibGU/XG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXG4gICAgcmVxdWVzdExvY2F0aW9uVXBkYXRlcyhyZXF1ZXN0OiBMb2NhdGlvblJlcXVlc3QpOiBQcm9taXNlPElkUmVzdWx0PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7b3RoZXJQcm9taXNlOiB0cnVlfSlcbiAgICByZW1vdmVMb2NhdGlvblVwZGF0ZXMoaWQ6IHN0cmluZyk6IFByb21pc2U8SWRSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxuICAgIHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8TG9jYXRpb25QZXJtaXNzaW9uUmVzdWx0PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7b3RoZXJQcm9taXNlOiB0cnVlfSlcbiAgICBoYXNQZXJtaXNzaW9uKCk6IFByb21pc2U8SGFzUGVybWlzc2lvblJlc3VsdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uIHtcbiAgICBsYXRpdHVkZTogbnVtYmVyO1xuICAgIGxvbmdpdHVkZTogbnVtYmVyO1xuICAgIGFsdGl0dWRlOiBudW1iZXI7XG4gICAgc3BlZWQ6IG51bWJlcjtcbiAgICBiZWFyaW5nOiBudW1iZXI7XG4gICAgYWNjdXJhY3k6IG51bWJlcjtcbiAgICB0aW1lOiBudW1iZXI7XG4gICAgZnJvbU1vY2tQcm92aWRlcjogYm9vbGVhbjtcbiAgICB2ZXJ0aWNhbEFjY3VyYWN5TWV0ZXJzOiBudW1iZXI7XG4gICAgYmVhcmluZ0FjY3VyYWN5RGVncmVlczogbnVtYmVyO1xuICAgIHNwZWVkQWNjdXJhY3lNZXRlcnNQZXJTZWNvbmQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIV0xvY2F0aW9uIHtcbiAgICBsYXRpdHVkZTogbnVtYmVyO1xuICAgIGxvbmdpdHVkZTogbnVtYmVyO1xuICAgIGFsdGl0dWRlOiBudW1iZXI7XG4gICAgc3BlZWQ6IG51bWJlcjtcbiAgICBiZWFyaW5nOiBudW1iZXI7XG4gICAgYWNjdXJhY3k6IG51bWJlcjtcbiAgICBwcm92aWRlcjogc3RyaW5nO1xuICAgIHRpbWU6IG51bWJlcjtcbiAgICBlbGFwc2VkUmVhbHRpbWVOYW5vczogbnVtYmVyO1xuICAgIGNvdW50cnlOYW1lOiBzdHJpbmc7XG4gICAgc3RhdGU6IHN0cmluZztcbiAgICBjaXR5OiBzdHJpbmc7XG4gICAgY291bnR5OiBzdHJpbmc7XG4gICAgc3RyZWV0OiBzdHJpbmc7XG4gICAgZmVhdHVyZU5hbWU6IHN0cmluZztcbiAgICBwb3N0YWxDb2RlOiBzdHJpbmc7XG4gICAgcGhvbmU6IHN0cmluZztcbiAgICB1cmw6IHN0cmluZztcbiAgICBleHRyYUluZm86IHN0cmluZztcbiAgICB2ZXJ0aWNhbEFjY3VyYWN5TWV0ZXJzOiBudW1iZXI7XG4gICAgYmVhcmluZ0FjY3VyYWN5RGVncmVlczogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uU2V0dGluZ3NTdGF0ZXMge1xuICAgIGlzQmxlUHJlc2VudDogYm9vbGVhbjtcbiAgICBpc0JsZVVzYWJsZTogYm9vbGVhbjtcbiAgICBpc0dwc1ByZXNlbnQ6IGJvb2xlYW47XG4gICAgaXNHcHNVc2FibGU6IGJvb2xlYW47XG4gICAgaXNMb2NhdGlvblByZXNlbnQ6IGJvb2xlYW47XG4gICAgaXNMb2NhdGlvblVzYWJsZTogYm9vbGVhbjtcbiAgICBpc05ldHdvcmtMb2NhdGlvblByZXNlbnQ6IGJvb2xlYW47XG4gICAgaXNOZXR3b3JrTG9jYXRpb25Vc2FibGU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYXRpb25SZXF1ZXN0IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIHByaW9yaXR5OiBudW1iZXI7XG4gICAgaW50ZXJ2YWw6IG51bWJlcjtcbiAgICBudW1VcGRhdGVzOiBudW1iZXI7XG4gICAgZmFzdGVzdEludGVydmFsOiBudW1iZXI7XG4gICAgZXhwaXJhdGlvblRpbWU6IG51bWJlcjtcbiAgICBleHBpcmF0aW9uVGltZUR1cmF0aW9uOiBudW1iZXI7XG4gICAgc21hbGxlc3REaXNwbGFjZW1lbnQ6IG51bWJlcjtcbiAgICBtYXhXYWl0VGltZTogbnVtYmVyO1xuICAgIG5lZWRBZGRyZXNzOiBib29sZWFuO1xuICAgIGxhbmd1YWdlOiBzdHJpbmc7XG4gICAgY291bnRyeUNvZGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvbkF2YWlsYWJpbGl0eSB7XG4gICAgaXNMb2NhdGlvbkF2YWlsYWJsZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvblNldHRpbmdzUmVxdWVzdCB7XG4gICAgbG9jYXRpb25SZXF1ZXN0czogTG9jYXRpb25SZXF1ZXN0W107XG4gICAgbmVlZEJsZTogYm9vbGVhbjtcbiAgICBhbHdheXNTaG93OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhdExuZyB7XG4gICAgbG9uZ2l0dWRlOiBudW1iZXI7XG4gICAgbGF0aXR1ZGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJZFJlc3VsdCB7XG4gICAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvblBlcm1pc3Npb25SZXN1bHQge1xuICAgIGdyYW50ZWQ6IGJvb2xlYW47XG4gICAgZmluZUxvY2F0aW9uOiBib29sZWFuO1xuICAgIGNvYXJzZUxvY2F0aW9uOiBib29sZWFuO1xuICAgIGJhY2tncm91bmRMb2NhdGlvbj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGFzUGVybWlzc2lvblJlc3VsdCB7XG4gICAgaGFzUGVybWlzc2lvbjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0Q29kZVJlc3VsdCB7XG4gICAgcmVxdWVzdENvZGU6IG51bWJlclxufVxuXG4vLyBBY3Rpdml0eUlkZW50aWZpY2F0aW9uIHt7e1xuXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiAnSE1TQWN0aXZpdHlJZGVudGlmaWNhdGlvbicsXG4gICAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWxvY2F0aW9uJyxcbiAgICBwbHVnaW5SZWY6ICdITVNBY3Rpdml0eUlkZW50aWZpY2F0aW9uJyxcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU0FjdGl2aXR5SWRlbnRpZmljYXRpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgQWN0aXZpdGllcyA9IEFjdGl2aXRpZXM7XG4gICAgQWN0aXZpdHlDb252ZXJzaW9ucyA9IEFjdGl2aXR5Q29udmVyc2lvbnM7XG4gICAgRXZlbnRzID0gRXZlbnRzO1xuXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXG4gICAgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxuICAgIGNyZWF0ZUFjdGl2aXR5Q29udmVyc2lvblVwZGF0ZXMoYWN0aXZpdHlDb252ZXJzaW9uUmVxdWVzdDogQWN0aXZpdHlDb252ZXJzaW9uSW5mb1tdKTogUHJvbWlzZTxSZXF1ZXN0Q29kZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXG4gICAgZGVsZXRlQWN0aXZpdHlDb252ZXJzaW9uVXBkYXRlcyhpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7b3RoZXJQcm9taXNlOiB0cnVlfSlcbiAgICBjcmVhdGVBY3Rpdml0eUlkZW50aWZpY2F0aW9uVXBkYXRlcyhpbnRlcnZhbE1pbGxpczogbnVtYmVyKTogUHJvbWlzZTxSZXF1ZXN0Q29kZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXG4gICAgZGVsZXRlQWN0aXZpdHlJZGVudGlmaWNhdGlvblVwZGF0ZXMoaWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXG4gICAgcmVxdWVzdFBlcm1pc3Npb24oKTogUHJvbWlzZTxBY3Rpdml0eVBlcm1pc3Npb25SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxuICAgIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTxIYXNQZXJtaXNzaW9uUmVzdWx0PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZpdHlDb252ZXJzaW9uSW5mbyB7XG4gICAgY29udmVyc2lvblR5cGU6IG51bWJlcixcbiAgICBhY3Rpdml0eVR5cGU6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2aXR5UGVybWlzc2lvblJlc3VsdCB7XG4gICAgZ3JhbnRlZDogYm9vbGVhbixcbiAgICBhY3Rpdml0eVJlY29nbml0aW9uOiBib29sZWFuXG59XG5cbi8vIEdlb2ZlbmNlXG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6ICdITVNHZW9mZW5jZScsXG4gICAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWxvY2F0aW9uJyxcbiAgICBwbHVnaW5SZWY6ICdITVNHZW9mZW5jZScsXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNHZW9mZW5jZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgICBwdWJsaWMgR2VvZmVuY2VSZXF1ZXN0Q29uc3RhbnRzID0gR2VvZmVuY2VSZXF1ZXN0Q29uc3RhbnRzO1xuICAgIEdlb2ZlbmNlQ29uc3RhbnRzID0gR2VvZmVuY2VDb25zdGFudHM7XG4gICAgRXJyb3JDb2RlcyA9IEVycm9yQ29kZXM7XG4gICAgRXZlbnRzID0gRXZlbnRzO1xuXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXG4gICAgY3JlYXRlR2VvZmVuY2VMaXN0KGdlb2ZlbmNlczogR2VvZmVuY2VbXSwgaW5pdENvbnZlcnNpb25zOiBudW1iZXIsIGNvb3JkaW5hdGVUeXBlOiBudW1iZXIpOiBQcm9taXNlPFJlcXVlc3RDb2RlUmVzdWx0PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7b3RoZXJQcm9taXNlOiB0cnVlfSlcbiAgICBkZWxldGVHZW9mZW5jZUxpc3QoaWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlb2ZlbmNlIHtcbiAgICBsb25naXR1ZGU6IG51bWJlcixcbiAgICBsYXRpdHVkZTogbnVtYmVyLFxuICAgIHJhZGl1czogbnVtYmVyLFxuICAgIHVuaXF1ZUlkOiBzdHJpbmcsXG4gICAgY29udmVyc2lvbnM6IG51bWJlcixcbiAgICB2YWxpZENvbnRpbnVlVGltZTogbnVtYmVyLFxuICAgIGR3ZWxsRGVsYXlUaW1lOiBudW1iZXIsXG4gICAgbm90aWZpY2F0aW9uSW50ZXJ2YWw6IG51bWJlcixcbn1cbiJdfQ==