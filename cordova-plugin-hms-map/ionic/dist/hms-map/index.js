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
import { IonicNativePlugin, cordovaPropertyGet, cordovaPropertySet, cordova } from '@ionic-native/core';
var HmsMapOriginal = /** @class */ (function (_super) {
    __extends(HmsMapOriginal, _super);
    function HmsMapOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HmsMapOriginal.prototype.init = function () { return cordova(this, "init", { "otherPromise": true }, arguments); };
    HmsMapOriginal.prototype.setApiKey = function (apiKey) { return cordova(this, "setApiKey", { "otherPromise": true }, arguments); };
    HmsMapOriginal.prototype.create = function (divId, huaweiMapOptions) { return cordova(this, "create", { "otherPromise": true }, arguments); };
    HmsMapOriginal.prototype.computeDistanceBetween = function (arg) { return cordova(this, "computeDistanceBetween", { "otherPromise": true }, arguments); };
    HmsMapOriginal.prototype.hasLocationPermission = function () { return cordova(this, "hasLocationPermission", { "otherPromise": true }, arguments); };
    HmsMapOriginal.prototype.requestLocationPermission = function () { return cordova(this, "requestLocationPermission", { "otherPromise": true }, arguments); };
    HmsMapOriginal.prototype.loadMap = function (jsonMap) { return cordova(this, "loadMap", { "otherPromise": true }, arguments); };
    HmsMapOriginal.pluginName = "HmsMap";
    HmsMapOriginal.plugin = "cordova-plugin-hms-map";
    HmsMapOriginal.pluginRef = "HMSMap";
    HmsMapOriginal.repo = "";
    HmsMapOriginal.install = "";
    HmsMapOriginal.installVariables = [];
    HmsMapOriginal.platforms = ["Android"];
    return HmsMapOriginal;
}(IonicNativePlugin));
var HmsMap = new HmsMapOriginal();
export { HmsMap };
var HuaweiMap = /** @class */ (function () {
    function HuaweiMap() {
    }
    HuaweiMap.prototype.init = function (id, options) { return cordova(this, "init", { "otherPromise": true }, arguments); };
    HuaweiMap.prototype.set = function (propName, value) { return cordova(this, "set", { "otherPromise": true }, arguments); };
    HuaweiMap.prototype.get = function (propName) { return cordova(this, "get", { "otherPromise": true }, arguments); };
    HuaweiMap.prototype.on = function (eventName, handler) { return cordova(this, "on", { "otherPromise": true }, arguments); };
    HuaweiMap.prototype.scroll = function () { return cordova(this, "scroll", { "otherPromise": true }, arguments); };
    HuaweiMap.prototype.reInitializeMap = function () { return cordova(this, "reInitializeMap", { "otherPromise": true }, arguments); };
    HuaweiMap.prototype.destroy = function () { return cordova(this, "destroy", { "otherPromise": true }, arguments); };
    HuaweiMap.prototype.hide = function () { return cordova(this, "hide", { "otherPromise": true }, arguments); };
    HuaweiMap.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    HuaweiMap.prototype.clear = function () { return cordova(this, "clear", { "otherPromise": true }, arguments); };
    HuaweiMap.prototype.resetMinMaxZoomPreference = function () { return cordova(this, "resetMinMaxZoomPreference", { "otherPromise": true }, arguments); };
    HuaweiMap.prototype.moveCamera = function (opts) { return cordova(this, "moveCamera", { "otherPromise": true }, arguments); };
    HuaweiMap.prototype.animateCamera = function (opts) { return cordova(this, "animateCamera", { "otherPromise": true }, arguments); };
    HuaweiMap.prototype.addPolyline = function (opts) { return cordova(this, "addPolyline", { "otherPromise": true }, arguments); };
    HuaweiMap.prototype.addPolygon = function (opts) { return cordova(this, "addPolygon", { "otherPromise": true }, arguments); };
    HuaweiMap.prototype.addMarker = function (opts) { return cordova(this, "addMarker", { "otherPromise": true }, arguments); };
    HuaweiMap.prototype.addGroundOverlay = function (opts) { return cordova(this, "addGroundOverlay", { "otherPromise": true }, arguments); };
    HuaweiMap.prototype.addCircle = function (opts) { return cordova(this, "addCircle", { "otherPromise": true }, arguments); };
    Object.defineProperty(HuaweiMap.prototype, "props", {
        get: function () { return cordovaPropertyGet(this, "props"); },
        set: function (value) { cordovaPropertySet(this, "props", value); },
        enumerable: true,
        configurable: true
    });
    HuaweiMap.pluginName = "HmsMap";
    HuaweiMap.plugin = "cordova-plugin-hms-map";
    HuaweiMap.pluginRef = "HMSMap";
    HuaweiMap.platforms = ["Android"];
    return HuaweiMap;
}());
export { HuaweiMap };
;
;
;
;
;
export var PatternItemType;
(function (PatternItemType) {
    PatternItemType[PatternItemType["TYPE_GAP"] = 2] = "TYPE_GAP";
    PatternItemType[PatternItemType["TYPE_DOT"] = 1] = "TYPE_DOT";
    PatternItemType[PatternItemType["TYPE_DASH"] = 0] = "TYPE_DASH";
})(PatternItemType || (PatternItemType = {}));
export var JointType;
(function (JointType) {
    JointType[JointType["ROUND"] = 2] = "ROUND";
    JointType[JointType["BEVEL"] = 1] = "BEVEL";
    JointType[JointType["DEFAULT"] = 0] = "DEFAULT";
})(JointType || (JointType = {}));
export var CapType;
(function (CapType) {
    CapType[CapType["TYPE_BUTT_CAP"] = 0] = "TYPE_BUTT_CAP";
    CapType[CapType["TYPE_SQUARE_CAP"] = 1] = "TYPE_SQUARE_CAP";
    CapType[CapType["TYPE_ROUND_CAP"] = 2] = "TYPE_ROUND_CAP";
    CapType[CapType["TYPE_CUSTOM_CAP"] = 3] = "TYPE_CUSTOM_CAP";
})(CapType || (CapType = {}));
export var CameraMoveReason;
(function (CameraMoveReason) {
    CameraMoveReason[CameraMoveReason["REASON_DEVELOPER_ANIMATION"] = 3] = "REASON_DEVELOPER_ANIMATION";
    CameraMoveReason[CameraMoveReason["REASON_API_ANIMATION"] = 2] = "REASON_API_ANIMATION";
    CameraMoveReason[CameraMoveReason["REASON_GESTURE"] = 1] = "REASON_GESTURE";
})(CameraMoveReason || (CameraMoveReason = {}));
export var Color;
(function (Color) {
    Color[Color["RED"] = -65536] = "RED";
    Color[Color["DKGRAY"] = -12303292] = "DKGRAY";
    Color[Color["GRAY"] = -7829368] = "GRAY";
    Color[Color["WHITE"] = -1] = "WHITE";
    Color[Color["BLUE"] = -16776961] = "BLUE";
    Color[Color["BLACK"] = -16777216] = "BLACK";
    Color[Color["LTGRAY"] = -3355444] = "LTGRAY";
    Color[Color["MAGENTA"] = -65281] = "MAGENTA";
    Color[Color["YELLOW"] = -256] = "YELLOW";
    Color[Color["CYAN"] = -16711681] = "CYAN";
    Color[Color["GREEN"] = -16711936] = "GREEN";
    Color[Color["TRANSPARENT"] = 0] = "TRANSPARENT";
})(Color || (Color = {}));
export var MapType;
(function (MapType) {
    MapType[MapType["MAP_TYPE_NONE"] = 0] = "MAP_TYPE_NONE";
    MapType[MapType["MAP_TYPE_SATELLITE"] = 2] = "MAP_TYPE_SATELLITE";
    MapType[MapType["MAP_TYPE_NORMAL"] = 1] = "MAP_TYPE_NORMAL";
    MapType[MapType["MAP_TYPE_HYBRID"] = 4] = "MAP_TYPE_HYBRID";
    MapType[MapType["MAP_TYPE_TERRAIN"] = 3] = "MAP_TYPE_TERRAIN";
})(MapType || (MapType = {}));
export var MarkerEvent;
(function (MarkerEvent) {
    MarkerEvent[MarkerEvent["MARKER_DRAG"] = 2] = "MARKER_DRAG";
    MarkerEvent[MarkerEvent["MARKER_DRAG_END"] = 3] = "MARKER_DRAG_END";
    MarkerEvent[MarkerEvent["MARKER_DRAG_START"] = 1] = "MARKER_DRAG_START";
})(MarkerEvent || (MarkerEvent = {}));
export var Hue;
(function (Hue) {
    Hue[Hue["HUE_GREEN"] = 120] = "HUE_GREEN";
    Hue[Hue["HUE_AZURE"] = 210] = "HUE_AZURE";
    Hue[Hue["HUE_ROSE"] = 330] = "HUE_ROSE";
    Hue[Hue["HUE_CYAN"] = 180] = "HUE_CYAN";
    Hue[Hue["HUE_ORANGE"] = 30] = "HUE_ORANGE";
    Hue[Hue["HUE_MAGENTA"] = 300] = "HUE_MAGENTA";
    Hue[Hue["HUE_VIOLET"] = 270] = "HUE_VIOLET";
    Hue[Hue["HUE_YELLOW"] = 60] = "HUE_YELLOW";
    Hue[Hue["HUE_BLUE"] = 240] = "HUE_BLUE";
    Hue[Hue["HUE_RED"] = 0] = "HUE_RED";
})(Hue || (Hue = {}));
export var MapEvent;
(function (MapEvent) {
    MapEvent["CIRCLE_CLICK"] = "circleClick";
    MapEvent["MAP_CLICK"] = "mapClick";
    MapEvent["MAP_LONG_CLICK"] = "mapLongClick";
    MapEvent["INFO_WINDOW_CLICK"] = "infoWindowClick";
    MapEvent["CAMERA_MOVE_STARTED"] = "cameraMoveStarted";
    MapEvent["POLYGON_CLICK"] = "polygonClick";
    MapEvent["POLYLINE_CLICK"] = "polylineClick";
    MapEvent["GROUND_OVERLAY_CLICK"] = "groundOverlayClick";
    MapEvent["CAMERA_MOVE"] = "cameraMove";
    MapEvent["CAMERA_IDLE"] = "cameraIdle";
    MapEvent["MAP_LOADED"] = "mapLoaded";
    MapEvent["MARKER_CLICK"] = "markerClick";
    MapEvent["MY_LOCATION_BUTTON_CLICK"] = "myLocationButtonClick";
    MapEvent["MY_LOCATION_CLICK"] = "myLocationClick";
    MapEvent["MARKER_DRAG"] = "markerDrag";
})(MapEvent || (MapEvent = {}));
export var CameraUpdateMethod;
(function (CameraUpdateMethod) {
    CameraUpdateMethod["CAMERA_POSITION"] = "newCameraPosition";
    CameraUpdateMethod["LATLNG"] = "newLatLng";
    CameraUpdateMethod["LATLNG_BOUNDS"] = "newLatLngBounds";
    CameraUpdateMethod["LATLNG_ZOOM"] = "newLatLngZoom";
    CameraUpdateMethod["SCROLL_BY"] = "scrollBy";
    CameraUpdateMethod["ZOOM_BY"] = "zoomBy";
    CameraUpdateMethod["ZOOM_IN"] = "zoomIn";
    CameraUpdateMethod["ZOOM_OUT"] = "zoomOut";
    CameraUpdateMethod["ZOOM_TO"] = "zoomTo";
})(CameraUpdateMethod || (CameraUpdateMethod = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1tYXAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLHNFQUF1RCxNQUFNLG9CQUFvQixDQUFDOztJQWM3RCwwQkFBaUI7Ozs7SUFLM0MscUJBQUk7SUFNSiwwQkFBUyxhQUFDLE1BQWM7SUFLbEIsdUJBQU0sYUFBQyxLQUFhLEVBQUUsZ0JBQWtDO0lBSzlELHVDQUFzQixhQUFDLEdBQW9CO0lBSzNDLHNDQUFxQjtJQUtyQiwwQ0FBeUI7SUFLbkIsd0JBQU8sYUFBQyxPQUFlOzs7Ozs7OztpQkFuRS9CO0VBK0I0QixpQkFBaUI7U0FBaEMsTUFBTTs7OztJQXNEakIsd0JBQUksYUFBQyxFQUFVLEVBQUUsT0FBeUI7SUFTMUMsdUJBQUcsYUFBQyxRQUF5QixFQUFFLEtBQVc7SUFLcEMsdUJBQUcsYUFBQyxRQUFpQjtJQUszQixzQkFBRSxhQUFDLFNBQW1CLEVBQUUsT0FBeUM7SUFLakUsMEJBQU07SUFLTixtQ0FBZTtJQUtmLDJCQUFPO0lBS1Asd0JBQUk7SUFLSix3QkFBSTtJQUtKLHlCQUFLO0lBS0wsNkNBQXlCO0lBS3pCLDhCQUFVLGFBQUMsSUFBa0I7SUFLN0IsaUNBQWEsYUFBQyxJQUFrQjtJQUtoQywrQkFBVyxhQUFDLElBQXFCO0lBS2pDLDhCQUFVLGFBQUMsSUFBb0I7SUFLL0IsNkJBQVMsYUFBQyxJQUFtQjtJQUs3QixvQ0FBZ0IsYUFBQyxJQUEwQjtJQUszQyw2QkFBUyxhQUFDLElBQW1COzBCQTVGSCw0QkFBSzs7Ozs7Ozs7OztvQkFsRmpDOztTQWdGYSxTQUFTO0FBd0dyQixDQUFDO0FBS0QsQ0FBQztBQUtELENBQUM7QUFPRCxDQUFDO0FBTUQsQ0FBQztBQTJLRixNQUFNLENBQU4sSUFBWSxlQUlYO0FBSkQsV0FBWSxlQUFlO0lBQ3pCLDZEQUFZLENB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QUFBO0lBQ2xCLHdDQUFrQixDQUFBO0lBQ2xCLDBDQUFvQixDQUFBO0lBQ3BCLHdDQUFrQixDQUFBO0FBQ3BCLENBQUMsRUFWVyxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBVTdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENvcHlyaWdodCAyMDIwIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdIbXNNYXAnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1tYXAnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICBwbHVnaW5SZWY6ICdITVNNYXAnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcmVwbzogJycsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cclxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXHJcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSG1zTWFwIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG5cclxuXHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNldEFwaUtleShhcGlLZXk6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBhc3luYyBjcmVhdGUoZGl2SWQ6IHN0cmluZywgaHVhd2VpTWFwT3B0aW9uczogSHVhd2VpTWFwT3B0aW9ucyk6IFByb21pc2U8SHVhd2VpTWFwPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGNvbXB1dGVEaXN0YW5jZUJldHdlZW4oYXJnOiBDb21wdXRlRGlzdGFuY2UpOiBQcm9taXNlPENvbXB1dGVEaXN0YW5jZVJlc3VsdD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBoYXNMb2NhdGlvblBlcm1pc3Npb24oKTogUHJvbWlzZTxMb2NhdGlvblBlcm1pc3Npb25SZXN1bHQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgcmVxdWVzdExvY2F0aW9uUGVybWlzc2lvbigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYXN5bmMgbG9hZE1hcChqc29uTWFwOiBzdHJpbmcpOiBQcm9taXNlPEh1YXdlaU1hcD57XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdIbXNNYXAnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1tYXAnLFxyXG4gIHBsdWdpblJlZjogJ0hNU01hcCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSHVhd2VpTWFwIHtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIHB1YmxpYyBwcm9wczogSHVhd2VpTWFwUHJvcHM7XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgaW5pdChpZDogc3RyaW5nLCBvcHRpb25zOiBIdWF3ZWlNYXBPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBzZXQocHJvcE5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8dm9pZD47XHJcbiAgc2V0KHByb3BOYW1lOiBvYmplY3QpOiBQcm9taXNlPHZvaWQ+O1xyXG5cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzZXQocHJvcE5hbWU6IHN0cmluZyB8IG9iamVjdCwgdmFsdWU/OiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYXN5bmMgZ2V0KHByb3BOYW1lPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIG9uKGV2ZW50TmFtZTogTWFwRXZlbnQsIGhhbmRsZXI6IChkYXRhOiBhbnksIGRhdGEyPzogYW55KSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNjcm9sbCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgcmVJbml0aWFsaXplTWFwKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBoaWRlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzaG93KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBjbGVhcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgcmVzZXRNaW5NYXhab29tUHJlZmVyZW5jZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgbW92ZUNhbWVyYShvcHRzOiBDYW1lcmFVcGRhdGUpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYW5pbWF0ZUNhbWVyYShvcHRzOiBDYW1lcmFVcGRhdGUpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYWRkUG9seWxpbmUob3B0czogUG9seWxpbmVPcHRpb25zKTogUHJvbWlzZTxQb2x5bGluZT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBhZGRQb2x5Z29uKG9wdHM6IFBvbHlnb25PcHRpb25zKTogUHJvbWlzZTxQb2x5Z29uPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGFkZE1hcmtlcihvcHRzOiBNYXJrZXJPcHRpb25zKTogUHJvbWlzZTxNYXJrZXI+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYWRkR3JvdW5kT3ZlcmxheShvcHRzOiBHcm91bmRPdmVybGF5T3B0aW9ucyk6IFByb21pc2U8R3JvdW5kT3ZlcmxheT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBhZGRDaXJjbGUob3B0czogQ2lyY2xlT3B0aW9ucyk6IFByb21pc2U8Q2lyY2xlPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF0TG5nIHtcclxuICBsYXQ6IG51bWJlcixcclxuICBsbmc6IG51bWJlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYXR0ZXJuSXRlbSB7XHJcbiAgdHlwZT86IFBhdHRlcm5JdGVtVHlwZSxcclxuICBsZW5ndGg/OiBudW1iZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQW5jaG9yIHtcclxuICB1OiBudW1iZXIsXHJcbiAgdjogbnVtYmVyXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJpdG1hcCB7XHJcbiAgaHVlPzogSHVlLFxyXG4gIGFzc2V0Pzogc3RyaW5nLFxyXG4gIGZpbGVOYW1lPzogc3RyaW5nLFxyXG4gIHBhdGg/OiBzdHJpbmdcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF0TG5nQm91bmRzIHtcclxuICBzb3V0aHdlc3Q6IExhdExuZyxcclxuICBub3J0aGVhc3Q6IExhdExuZ1xyXG4gIGNlbnRlcj86IExhdExuZyxcclxufTtcclxuXHJcbi8vIFBvc3NpYmxlIGNvbWJpbmF0aW9ucyBhcmU6XHJcbi8vIC0gd2lkdGggaGVpZ2h0IGxhdExuZ1xyXG4vLyAtIHdpZHRoIGxhdExuZ1xyXG4vLyAtIGxhdExuZ0JvdW5kc1xyXG4vLyBObyB3YXkgdG8gY2hlY2sgZm9yIHRoaXMgZm9yIG5vdy5cclxuZXhwb3J0IGludGVyZmFjZSBHcm91bmRPdmVybGF5UG9zaXRpb24ge1xyXG4gIHdpZHRoPzogbnVtYmVyLFxyXG4gIGhlaWdodD86IG51bWJlcixcclxuICBsYXRMbmc/OiBMYXRMbmcsXHJcbiAgbGF0TG5nQm91bmRzPzogTGF0TG5nQm91bmRzXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FwIHtcclxuICB0eXBlPzogQ2FwVHlwZSxcclxuICAvLyBJZiBjdXN0b20gdGFwIHRoZXNlIHBhcmFtZXRlcnMgbmVlZGVkLlxyXG4gIHJlZldpZHRoPzogbnVtYmVyLFxyXG4gIGJpdG1hcERlc2NyaXB0b3I/OiBCaXRtYXBcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDaXJjbGVPcHRpb25zIHtcclxuICBjZW50ZXI/OiBMYXRMbmcsXHJcbiAgY2xpY2thYmxlPzogYm9vbGVhbixcclxuICBmaWxsQ29sb3I/OiBDb2xvcixcclxuICByYWRpdXM/OiBudW1iZXIsXHJcbiAgc3Ryb2tlQ29sb3I/OiBDb2xvcixcclxuICBzdHJva2VXaWR0aD86IG51bWJlcixcclxuICBzdHJva2VQYXR0ZXJuPzogUGF0dGVybkl0ZW0sXHJcbiAgdmlzaWJsZT86IGJvb2xlYW4sXHJcbiAgekluZGV4PzogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR3JvdW5kT3ZlcmxheU9wdGlvbnMge1xyXG4gIGFuY2hvcj86IEFuY2hvcixcclxuICBiZWFyaW5nPzogbnVtYmVyLFxyXG4gIGNsaWNrYWJsZT86IGJvb2xlYW4sXHJcbiAgaW1hZ2U/OiBCaXRtYXAsXHJcbiAgdmlzaWJsZT86IGJvb2xlYW4sXHJcbiAgdHJhbnNwYXJlbmN5PzogbnVtYmVyLFxyXG4gIHpJbmRleD86IG51bWJlcixcclxuICBwb3NpdGlvbj86IEdyb3VuZE92ZXJsYXlQb3NpdGlvblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlck9wdGlvbnMge1xyXG4gIGFuY2hvck1hcmtlcj86IEFuY2hvcixcclxuICBpbmZvV2luZG93QW5jaG9yPzogQW5jaG9yLFxyXG4gIGFscGhhPzogbnVtYmVyLFxyXG4gIGNsdXN0ZXJhYmxlPzogYm9vbGVhbixcclxuICBkcmFnZ2FibGU/OiBib29sZWFuLFxyXG4gIGljb24/OiBCaXRtYXAsXHJcbiAgZmxhdD86IGJvb2xlYW4sXHJcbiAgcG9zaXRpb24/OiBMYXRMbmcsXHJcbiAgcm90YXRpb24/OiBudW1iZXIsXHJcbiAgc25pcHBldD86IHN0cmluZyxcclxuICB0aXRsZT86IHN0cmluZyxcclxuICB2aXNpYmxlPzogYm9vbGVhbixcclxuICB6SW5kZXg/OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2x5Z29uT3B0aW9ucyB7XHJcbiAgcG9pbnRzPzogTGF0TG5nW10sXHJcbiAgaG9sZXM/OiBMYXRMbmdbXVtdLFxyXG4gIGNsaWNrYWJsZT86IGJvb2xlYW4sXHJcbiAgZ2VvZGVzaWM/OiBib29sZWFuLFxyXG4gIGZpbGxDb2xvcj86IENvbG9yLFxyXG4gIHN0cm9rZUNvbG9yPzogQ29sb3IsXHJcbiAgc3Ryb2tlSm9pbnRUeXBlPzogSm9pbnRUeXBlLFxyXG4gIHN0cm9rZVBhdHRlcm4/OiBQYXR0ZXJuSXRlbSxcclxuICBzdHJva2VXaWR0aD86IG51bWJlcixcclxuICB2aXNpYmxlPzogYm9vbGVhbixcclxuICB6SW5kZXg/OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2x5bGluZU9wdGlvbnMge1xyXG4gIHBvaW50cz86IExhdExuZ1tdLFxyXG4gIGNsaWNrYWJsZT86IGJvb2xlYW4sXHJcbiAgY29sb3I/OiBDb2xvcixcclxuICBlbmRDYXA/OiBDYXAsXHJcbiAgc3RhcnRDYXA/OiBDYXAsXHJcbiAgZ2VvZGVzaWM/OiBib29sZWFuLFxyXG4gIGpvaW50VHlwZT86IEpvaW50VHlwZSxcclxuICB2aXNpYmxlPzogYm9vbGVhbixcclxuICB6SW5kZXg/OiBudW1iZXIsXHJcbiAgd2lkdGg/OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIdWF3ZWlNYXBQcm9wcyB7XHJcbiAgeD86IG51bWJlcjtcclxuICB5PzogbnVtYmVyO1xyXG4gIHdpZHRoPzogbnVtYmVyO1xyXG4gIGhlaWdodD86IG51bWJlcjtcclxuICBwYWRkaW5nTGVmdD86IG51bWJlcjtcclxuICBwYWRkaW5nVG9wPzogbnVtYmVyO1xyXG4gIGJvcmRlckxlZnQ/OiBudW1iZXI7XHJcbiAgYm9yZGVyVG9wPzogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIdWF3ZWlNYXBPcHRpb25zIHtcclxuICBtYXBUeXBlPzogTWFwVHlwZTtcclxuICB6b29tQ29udHJvbHNFbmFibGVkPzogYm9vbGVhbjtcclxuICBjb21wYXNzRW5hYmxlZD86IGJvb2xlYW47XHJcbiAgem9vbUdlc3R1cmVzRW5hYmxlZD86IGJvb2xlYW47XHJcbiAgc2Nyb2xsR2VzdHVyZXNFbmFibGVkPzogYm9vbGVhbjtcclxuICByb3RhdGVHZXN0dXJlc0VuYWJsZWQ/OiBib29sZWFuO1xyXG4gIHRpbHRHZXN0dXJlc0VuYWJsZWQ/OiBib29sZWFuO1xyXG4gIHpPcmRlck9uVG9wPzogYm9vbGVhbjtcclxuICBsaXRlTW9kZT86IGJvb2xlYW47XHJcbiAgYW1iaWVudEVuYWJsZWQ/OiBib29sZWFuO1xyXG4gIG1pblpvb21QcmVmZXJlbmNlPzogbnVtYmVyO1xyXG4gIG1heFpvb21QcmVmZXJlbmNlPzogbnVtYmVyO1xyXG4gIGNhbWVyYVBvc2l0aW9uPzogQ2FtZXJhUG9zaXRpb247XHJcbiAgbGF0TG5nQm91bmRzPzogTGF0TG5nQm91bmRzXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhUG9zaXRpb24ge1xyXG4gIHRhcmdldD86IExhdExuZztcclxuICB6b29tPzogbnVtYmVyO1xyXG4gIGJlYXJpbmc/OiBudW1iZXI7XHJcbiAgdGlsdD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvblBlcm1pc3Npb25SZXN1bHQge1xyXG4gIGhhc0xvY2F0aW9uUGVybWlzc2lvbjogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb21wdXRlRGlzdGFuY2VSZXN1bHQge1xyXG4gIHJlc3VsdDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbXB1dGVEaXN0YW5jZSB7XHJcbiAgZnJvbT86IExhdExuZyxcclxuICB0bz86IExhdExuZyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYW1lcmFVcGRhdGUge1xyXG4gIG1ldGhvZD86IENhbWVyYVVwZGF0ZU1ldGhvZCxcclxuICBbb3RoZXI6IHN0cmluZ106IGFueSwgLy8gLi4uIE90aGVyIHN0dWZmIGRlcGVuZHMgb24gdGhlIG1ldGhvZFxyXG59XHJcblxyXG5cclxuaW50ZXJmYWNlIEJhc2VNYXBPYmplY3Q8VD4ge1xyXG4gIHNldChwcm9wTmFtZTogc3RyaW5nLCBwcm9wVmFsdWU6IGFueSk6IFByb21pc2U8YW55PjtcclxuICBzZXQoa2V5VmFsczogYW55KTogUHJvbWlzZTxhbnk+O1xyXG4gIHVwZGF0ZSgpOiBQcm9taXNlPFQ+O1xyXG4gIHJlbW92ZSgpOiBQcm9taXNlPGFueT47XHJcblxyXG4gIFtvdGhlcjogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvbHlsaW5lIGV4dGVuZHMgQmFzZU1hcE9iamVjdDxQb2x5bGluZT4ge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvbHlnb24gZXh0ZW5kcyBCYXNlTWFwT2JqZWN0PFBvbHlnb24+IHtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDaXJjbGUgZXh0ZW5kcyBCYXNlTWFwT2JqZWN0PENpcmNsZT4ge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdyb3VuZE92ZXJsYXkgZXh0ZW5kcyBCYXNlTWFwT2JqZWN0PEdyb3VuZE92ZXJsYXk+IHtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNYXJrZXIgZXh0ZW5kcyBCYXNlTWFwT2JqZWN0PE1hcmtlcj4ge1xyXG4gIHNob3dJbmZvV2luZG93KCk6IFByb21pc2U8dm9pZD47XHJcbiAgaGlkZUluZm9XaW5kb3coKTogUHJvbWlzZTx2b2lkPjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGVudW0gUGF0dGVybkl0ZW1UeXBlIHtcclxuICBUWVBFX0dBUCA9IDIsXHJcbiAgVFlQRV9ET1QgPSAxLFxyXG4gIFRZUEVfREFTSCA9IDBcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSm9pbnRUeXBlIHtcclxuICBST1VORCA9IDIsXHJcbiAgQkVWRUwgPSAxLFxyXG4gIERFRkFVTFQgPSAwXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENhcFR5cGUge1xyXG4gIFRZUEVfQlVUVF9DQVAgPSAwLFxyXG4gIFRZUEVfU1FVQVJFX0NBUCA9IDEsXHJcbiAgVFlQRV9ST1VORF9DQVAgPSAyLFxyXG4gIFRZUEVfQ1VTVE9NX0NBUCA9IDNcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ2FtZXJhTW92ZVJlYXNvbiB7XHJcbiAgUkVBU09OX0RFVkVMT1BFUl9BTklNQVRJT04gPSAzLFxyXG4gIFJFQVNPTl9BUElfQU5JTUFUSU9OID0gMixcclxuICBSRUFTT05fR0VTVFVSRSA9IDFcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ29sb3Ige1xyXG4gIFJFRCA9IC02NTUzNixcclxuICBES0dSQVkgPSAtMTIzMDMyOTIsXHJcbiAgR1JBWSA9IC03ODI5MzY4LFxyXG4gIFdISVRFID0gLTEsXHJcbiAgQkxVRSA9IC0xNjc3Njk2MSxcclxuICBCTEFDSyA9IC0xNjc3NzIxNixcclxuICBMVEdSQVkgPSAtMzM1NTQ0NCxcclxuICBNQUdFTlRBID0gLTY1MjgxLFxyXG4gIFlFTExPVyA9IC0yNTYsXHJcbiAgQ1lBTiA9IC0xNjcxMTY4MSxcclxuICBHUkVFTiA9IC0xNjcxMTkzNixcclxuICBUUkFOU1BBUkVOVCA9IDBcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTWFwVHlwZSB7XHJcbiAgTUFQX1RZUEVfTk9ORSA9IDAsXHJcbiAgTUFQX1RZUEVfU0FURUxMSVRFID0gMixcclxuICBNQVBfVFlQRV9OT1JNQUwgPSAxLFxyXG4gIE1BUF9UWVBFX0hZQlJJRCA9IDQsXHJcbiAgTUFQX1RZUEVfVEVSUkFJTiA9IDMsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1hcmtlckV2ZW50IHtcclxuICBNQVJLRVJfRFJBRyA9IDIsXHJcbiAgTUFSS0VSX0RSQUdfRU5EID0gMyxcclxuICBNQVJLRVJfRFJBR19TVEFSVCA9IDFcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSHVlIHtcclxuICBIVUVfR1JFRU4gPSAxMjAsXHJcbiAgSFVFX0FaVVJFID0gMjEwLFxyXG4gIEhVRV9ST1NFID0gMzMwLFxyXG4gIEhVRV9DWUFOID0gMTgwLFxyXG4gIEhVRV9PUkFOR0UgPSAzMCxcclxuICBIVUVfTUFHRU5UQSA9IDMwMCxcclxuICBIVUVfVklPTEVUID0gMjcwLFxyXG4gIEhVRV9ZRUxMT1cgPSA2MCxcclxuICBIVUVfQkxVRSA9IDI0MCxcclxuICBIVUVfUkVEID0gMCxcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1hcEV2ZW50IHtcclxuICBDSVJDTEVfQ0xJQ0sgPSBcImNpcmNsZUNsaWNrXCIsXHJcbiAgTUFQX0NMSUNLID0gXCJtYXBDbGlja1wiLFxyXG4gIE1BUF9MT05HX0NMSUNLID0gXCJtYXBMb25nQ2xpY2tcIixcclxuICBJTkZPX1dJTkRPV19DTElDSyA9IFwiaW5mb1dpbmRvd0NsaWNrXCIsXHJcbiAgQ0FNRVJBX01PVkVfU1RBUlRFRCA9IFwiY2FtZXJhTW92ZVN0YXJ0ZWRcIixcclxuICBQT0xZR09OX0NMSUNLID0gXCJwb2x5Z29uQ2xpY2tcIixcclxuICBQT0xZTElORV9DTElDSyA9IFwicG9seWxpbmVDbGlja1wiLFxyXG4gIEdST1VORF9PVkVSTEFZX0NMSUNLID0gXCJncm91bmRPdmVybGF5Q2xpY2tcIixcclxuICBDQU1FUkFfTU9WRSA9IFwiY2FtZXJhTW92ZVwiLFxyXG4gIENBTUVSQV9JRExFID0gXCJjYW1lcmFJZGxlXCIsXHJcbiAgTUFQX0xPQURFRCA9IFwibWFwTG9hZGVkXCIsXHJcbiAgTUFSS0VSX0NMSUNLID0gXCJtYXJrZXJDbGlja1wiLFxyXG4gIE1ZX0xPQ0FUSU9OX0JVVFRPTl9DTElDSyA9IFwibXlMb2NhdGlvbkJ1dHRvbkNsaWNrXCIsXHJcbiAgTVlfTE9DQVRJT05fQ0xJQ0sgPSBcIm15TG9jYXRpb25DbGlja1wiLFxyXG4gIE1BUktFUl9EUkFHID0gXCJtYXJrZXJEcmFnXCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ2FtZXJhVXBkYXRlTWV0aG9kIHtcclxuICBDQU1FUkFfUE9TSVRJT04gPSBcIm5ld0NhbWVyYVBvc2l0aW9uXCIsXHJcbiAgTEFUTE5HID0gXCJuZXdMYXRMbmdcIixcclxuICBMQVRMTkdfQk9VTkRTID0gXCJuZXdMYXRMbmdCb3VuZHNcIixcclxuICBMQVRMTkdfWk9PTSA9IFwibmV3TGF0TG5nWm9vbVwiLFxyXG4gIFNDUk9MTF9CWSA9IFwic2Nyb2xsQnlcIixcclxuICBaT09NX0JZID0gXCJ6b29tQnlcIixcclxuICBaT09NX0lOID0gXCJ6b29tSW5cIixcclxuICBaT09NX09VVCA9IFwiem9vbU91dFwiLFxyXG4gIFpPT01fVE8gPSBcInpvb21Ub1wiXHJcbn1cclxuIl19