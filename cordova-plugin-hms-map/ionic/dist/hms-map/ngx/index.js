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
import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordovaPropertyGet, cordovaPropertySet, cordova } from '@ionic-native/core';
var HmsMap = /** @class */ (function (_super) {
    __extends(HmsMap, _super);
    function HmsMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HmsMap.prototype.init = function () { return cordova(this, "init", { "otherPromise": true }, arguments); };
    HmsMap.prototype.setApiKey = function (apiKey) { return cordova(this, "setApiKey", { "otherPromise": true }, arguments); };
    HmsMap.prototype.create = function (divId, huaweiMapOptions) { return cordova(this, "create", { "otherPromise": true }, arguments); };
    HmsMap.prototype.computeDistanceBetween = function (arg) { return cordova(this, "computeDistanceBetween", { "otherPromise": true }, arguments); };
    HmsMap.prototype.hasLocationPermission = function () { return cordova(this, "hasLocationPermission", { "otherPromise": true }, arguments); };
    HmsMap.prototype.requestLocationPermission = function () { return cordova(this, "requestLocationPermission", { "otherPromise": true }, arguments); };
    HmsMap.prototype.loadMap = function (jsonMap) { return cordova(this, "loadMap", { "otherPromise": true }, arguments); };
    HmsMap.pluginName = "HmsMap";
    HmsMap.plugin = "cordova-plugin-hms-map";
    HmsMap.pluginRef = "HMSMap";
    HmsMap.repo = "";
    HmsMap.install = "";
    HmsMap.installVariables = [];
    HmsMap.platforms = ["Android"];
    HmsMap = __decorate([
        Injectable()
    ], HmsMap);
    return HmsMap;
}(IonicNativePlugin));
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
    HuaweiMap = __decorate([], HuaweiMap);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1tYXAvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztHQWNHOztBQUVILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxzRUFBdUQsTUFBTSxvQkFBb0IsQ0FBQzs7SUFjN0QsMEJBQWlCOzs7O0lBSzNDLHFCQUFJO0lBTUosMEJBQVMsYUFBQyxNQUFjO0lBS2xCLHVCQUFNLGFBQUMsS0FBYSxFQUFFLGdCQUFrQztJQUs5RCx1Q0FBc0IsYUFBQyxHQUFvQjtJQUszQyxzQ0FBcUI7SUFLckIsMENBQXlCO0lBS25CLHdCQUFPLGFBQUMsT0FBZTs7Ozs7Ozs7SUFwQ2xCLE1BQU07UUFEbEIsVUFBVSxFQUFFO09BQ0EsTUFBTTtpQkEvQm5CO0VBK0I0QixpQkFBaUI7U0FBaEMsTUFBTTs7OztJQXNEakIsd0JBQUksYUFBQyxFQUFVLEVBQUUsT0FBeUI7SUFTMUMsdUJBQUcsYUFBQyxRQUF5QixFQUFFLEtBQVc7SUFLcEMsdUJBQUcsYUFBQyxRQUFpQjtJQUszQixzQkFBRSxhQUFDLFNBQW1CLEVBQUUsT0FBeUM7SUFLakUsMEJBQU07SUFLTixtQ0FBZTtJQUtmLDJCQUFPO0lBS1Asd0JBQUk7SUFLSix3QkFBSTtJQUtKLHlCQUFLO0lBS0wsNkNBQXlCO0lBS3pCLDhCQUFVLGFBQUMsSUFBa0I7SUFLN0IsaUNBQWEsYUFBQyxJQUFrQjtJQUtoQywrQkFBVyxhQUFDLElBQXFCO0lBS2pDLDhCQUFVLGFBQUMsSUFBb0I7SUFLL0IsNkJBQVMsYUFBQyxJQUFtQjtJQUs3QixvQ0FBZ0IsYUFBQyxJQUEwQjtJQUszQyw2QkFBUyxhQUFDLElBQW1COzBCQTVGSCw0QkFBSzs7Ozs7Ozs7OztJQUZwQixTQUFTLGtCQUFULFNBQVM7b0JBaEZ0Qjs7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RCxXQUFZLGtCQUFrQjtJQUM1QiwyREFBcUMsQ0FBQTtJQUNyQywwQ0FBb0IsQ0FBQTtJQUNwQix1REFBaUMsQ0FBQTtJQUNqQyxtREFBNkIsQ0FBQTtJQUM3Qiw0Q0FBc0IsQ0FBQTtJQUN0Qix3Q0FBa0IsQ0FBQTtJQUNsQix3Q0FBa0IsQ0FBQTtJQUNsQiwwQ0FBb0IsQ0FBQTtJQUNwQix3Q0FBa0IsQ0FBQTtBQUNwQixDQUFDLEVBVlcsa0JBQWtCLEtBQWxCLGtCQUFrQixRQVU3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDb3B5cmlnaHQgMjAyMCBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuXHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSG1zTWFwJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtbWFwJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnSE1TTWFwJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxyXG4gIHJlcG86ICcnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXHJcbiAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhtc01hcCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuXHJcblxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzZXRBcGlLZXkoYXBpS2V5OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYXN5bmMgY3JlYXRlKGRpdklkOiBzdHJpbmcsIGh1YXdlaU1hcE9wdGlvbnM6IEh1YXdlaU1hcE9wdGlvbnMpOiBQcm9taXNlPEh1YXdlaU1hcD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBjb21wdXRlRGlzdGFuY2VCZXR3ZWVuKGFyZzogQ29tcHV0ZURpc3RhbmNlKTogUHJvbWlzZTxDb21wdXRlRGlzdGFuY2VSZXN1bHQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgaGFzTG9jYXRpb25QZXJtaXNzaW9uKCk6IFByb21pc2U8TG9jYXRpb25QZXJtaXNzaW9uUmVzdWx0PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHJlcXVlc3RMb2NhdGlvblBlcm1pc3Npb24oKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGFzeW5jIGxvYWRNYXAoanNvbk1hcDogc3RyaW5nKTogUHJvbWlzZTxIdWF3ZWlNYXA+e1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSG1zTWFwJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtbWFwJyxcclxuICBwbHVnaW5SZWY6ICdITVNNYXAnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEh1YXdlaU1hcCB7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBwdWJsaWMgcHJvcHM6IEh1YXdlaU1hcFByb3BzO1xyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGluaXQoaWQ6IHN0cmluZywgb3B0aW9uczogSHVhd2VpTWFwT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgc2V0KHByb3BOYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPHZvaWQ+O1xyXG4gIHNldChwcm9wTmFtZTogb2JqZWN0KTogUHJvbWlzZTx2b2lkPjtcclxuXHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2V0KHByb3BOYW1lOiBzdHJpbmcgfCBvYmplY3QsIHZhbHVlPzogYW55KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGFzeW5jIGdldChwcm9wTmFtZT86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBvbihldmVudE5hbWU6IE1hcEV2ZW50LCBoYW5kbGVyOiAoZGF0YTogYW55LCBkYXRhMj86IGFueSkgPT4gdm9pZCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzY3JvbGwoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHJlSW5pdGlhbGl6ZU1hcCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgaGlkZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2hvdygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY2xlYXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHJlc2V0TWluTWF4Wm9vbVByZWZlcmVuY2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIG1vdmVDYW1lcmEob3B0czogQ2FtZXJhVXBkYXRlKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGFuaW1hdGVDYW1lcmEob3B0czogQ2FtZXJhVXBkYXRlKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGFkZFBvbHlsaW5lKG9wdHM6IFBvbHlsaW5lT3B0aW9ucyk6IFByb21pc2U8UG9seWxpbmU+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYWRkUG9seWdvbihvcHRzOiBQb2x5Z29uT3B0aW9ucyk6IFByb21pc2U8UG9seWdvbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBhZGRNYXJrZXIob3B0czogTWFya2VyT3B0aW9ucyk6IFByb21pc2U8TWFya2VyPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGFkZEdyb3VuZE92ZXJsYXkob3B0czogR3JvdW5kT3ZlcmxheU9wdGlvbnMpOiBQcm9taXNlPEdyb3VuZE92ZXJsYXk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYWRkQ2lyY2xlKG9wdHM6IENpcmNsZU9wdGlvbnMpOiBQcm9taXNlPENpcmNsZT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExhdExuZyB7XHJcbiAgbGF0OiBudW1iZXIsXHJcbiAgbG5nOiBudW1iZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGF0dGVybkl0ZW0ge1xyXG4gIHR5cGU/OiBQYXR0ZXJuSXRlbVR5cGUsXHJcbiAgbGVuZ3RoPzogbnVtYmVyXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFuY2hvciB7XHJcbiAgdTogbnVtYmVyLFxyXG4gIHY6IG51bWJlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCaXRtYXAge1xyXG4gIGh1ZT86IEh1ZSxcclxuICBhc3NldD86IHN0cmluZyxcclxuICBmaWxlTmFtZT86IHN0cmluZyxcclxuICBwYXRoPzogc3RyaW5nXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExhdExuZ0JvdW5kcyB7XHJcbiAgc291dGh3ZXN0OiBMYXRMbmcsXHJcbiAgbm9ydGhlYXN0OiBMYXRMbmdcclxuICBjZW50ZXI/OiBMYXRMbmcsXHJcbn07XHJcblxyXG4vLyBQb3NzaWJsZSBjb21iaW5hdGlvbnMgYXJlOlxyXG4vLyAtIHdpZHRoIGhlaWdodCBsYXRMbmdcclxuLy8gLSB3aWR0aCBsYXRMbmdcclxuLy8gLSBsYXRMbmdCb3VuZHNcclxuLy8gTm8gd2F5IHRvIGNoZWNrIGZvciB0aGlzIGZvciBub3cuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR3JvdW5kT3ZlcmxheVBvc2l0aW9uIHtcclxuICB3aWR0aD86IG51bWJlcixcclxuICBoZWlnaHQ/OiBudW1iZXIsXHJcbiAgbGF0TG5nPzogTGF0TG5nLFxyXG4gIGxhdExuZ0JvdW5kcz86IExhdExuZ0JvdW5kc1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhcCB7XHJcbiAgdHlwZT86IENhcFR5cGUsXHJcbiAgLy8gSWYgY3VzdG9tIHRhcCB0aGVzZSBwYXJhbWV0ZXJzIG5lZWRlZC5cclxuICByZWZXaWR0aD86IG51bWJlcixcclxuICBiaXRtYXBEZXNjcmlwdG9yPzogQml0bWFwXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2lyY2xlT3B0aW9ucyB7XHJcbiAgY2VudGVyPzogTGF0TG5nLFxyXG4gIGNsaWNrYWJsZT86IGJvb2xlYW4sXHJcbiAgZmlsbENvbG9yPzogQ29sb3IsXHJcbiAgcmFkaXVzPzogbnVtYmVyLFxyXG4gIHN0cm9rZUNvbG9yPzogQ29sb3IsXHJcbiAgc3Ryb2tlV2lkdGg/OiBudW1iZXIsXHJcbiAgc3Ryb2tlUGF0dGVybj86IFBhdHRlcm5JdGVtLFxyXG4gIHZpc2libGU/OiBib29sZWFuLFxyXG4gIHpJbmRleD86IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdyb3VuZE92ZXJsYXlPcHRpb25zIHtcclxuICBhbmNob3I/OiBBbmNob3IsXHJcbiAgYmVhcmluZz86IG51bWJlcixcclxuICBjbGlja2FibGU/OiBib29sZWFuLFxyXG4gIGltYWdlPzogQml0bWFwLFxyXG4gIHZpc2libGU/OiBib29sZWFuLFxyXG4gIHRyYW5zcGFyZW5jeT86IG51bWJlcixcclxuICB6SW5kZXg/OiBudW1iZXIsXHJcbiAgcG9zaXRpb24/OiBHcm91bmRPdmVybGF5UG9zaXRpb25cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNYXJrZXJPcHRpb25zIHtcclxuICBhbmNob3JNYXJrZXI/OiBBbmNob3IsXHJcbiAgaW5mb1dpbmRvd0FuY2hvcj86IEFuY2hvcixcclxuICBhbHBoYT86IG51bWJlcixcclxuICBjbHVzdGVyYWJsZT86IGJvb2xlYW4sXHJcbiAgZHJhZ2dhYmxlPzogYm9vbGVhbixcclxuICBpY29uPzogQml0bWFwLFxyXG4gIGZsYXQ/OiBib29sZWFuLFxyXG4gIHBvc2l0aW9uPzogTGF0TG5nLFxyXG4gIHJvdGF0aW9uPzogbnVtYmVyLFxyXG4gIHNuaXBwZXQ/OiBzdHJpbmcsXHJcbiAgdGl0bGU/OiBzdHJpbmcsXHJcbiAgdmlzaWJsZT86IGJvb2xlYW4sXHJcbiAgekluZGV4PzogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9seWdvbk9wdGlvbnMge1xyXG4gIHBvaW50cz86IExhdExuZ1tdLFxyXG4gIGhvbGVzPzogTGF0TG5nW11bXSxcclxuICBjbGlja2FibGU/OiBib29sZWFuLFxyXG4gIGdlb2Rlc2ljPzogYm9vbGVhbixcclxuICBmaWxsQ29sb3I/OiBDb2xvcixcclxuICBzdHJva2VDb2xvcj86IENvbG9yLFxyXG4gIHN0cm9rZUpvaW50VHlwZT86IEpvaW50VHlwZSxcclxuICBzdHJva2VQYXR0ZXJuPzogUGF0dGVybkl0ZW0sXHJcbiAgc3Ryb2tlV2lkdGg/OiBudW1iZXIsXHJcbiAgdmlzaWJsZT86IGJvb2xlYW4sXHJcbiAgekluZGV4PzogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9seWxpbmVPcHRpb25zIHtcclxuICBwb2ludHM/OiBMYXRMbmdbXSxcclxuICBjbGlja2FibGU/OiBib29sZWFuLFxyXG4gIGNvbG9yPzogQ29sb3IsXHJcbiAgZW5kQ2FwPzogQ2FwLFxyXG4gIHN0YXJ0Q2FwPzogQ2FwLFxyXG4gIGdlb2Rlc2ljPzogYm9vbGVhbixcclxuICBqb2ludFR5cGU/OiBKb2ludFR5cGUsXHJcbiAgdmlzaWJsZT86IGJvb2xlYW4sXHJcbiAgekluZGV4PzogbnVtYmVyLFxyXG4gIHdpZHRoPzogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSHVhd2VpTWFwUHJvcHMge1xyXG4gIHg/OiBudW1iZXI7XHJcbiAgeT86IG51bWJlcjtcclxuICB3aWR0aD86IG51bWJlcjtcclxuICBoZWlnaHQ/OiBudW1iZXI7XHJcbiAgcGFkZGluZ0xlZnQ/OiBudW1iZXI7XHJcbiAgcGFkZGluZ1RvcD86IG51bWJlcjtcclxuICBib3JkZXJMZWZ0PzogbnVtYmVyO1xyXG4gIGJvcmRlclRvcD86IG51bWJlcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSHVhd2VpTWFwT3B0aW9ucyB7XHJcbiAgbWFwVHlwZT86IE1hcFR5cGU7XHJcbiAgem9vbUNvbnRyb2xzRW5hYmxlZD86IGJvb2xlYW47XHJcbiAgY29tcGFzc0VuYWJsZWQ/OiBib29sZWFuO1xyXG4gIHpvb21HZXN0dXJlc0VuYWJsZWQ/OiBib29sZWFuO1xyXG4gIHNjcm9sbEdlc3R1cmVzRW5hYmxlZD86IGJvb2xlYW47XHJcbiAgcm90YXRlR2VzdHVyZXNFbmFibGVkPzogYm9vbGVhbjtcclxuICB0aWx0R2VzdHVyZXNFbmFibGVkPzogYm9vbGVhbjtcclxuICB6T3JkZXJPblRvcD86IGJvb2xlYW47XHJcbiAgbGl0ZU1vZGU/OiBib29sZWFuO1xyXG4gIGFtYmllbnRFbmFibGVkPzogYm9vbGVhbjtcclxuICBtaW5ab29tUHJlZmVyZW5jZT86IG51bWJlcjtcclxuICBtYXhab29tUHJlZmVyZW5jZT86IG51bWJlcjtcclxuICBjYW1lcmFQb3NpdGlvbj86IENhbWVyYVBvc2l0aW9uO1xyXG4gIGxhdExuZ0JvdW5kcz86IExhdExuZ0JvdW5kc1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVBvc2l0aW9uIHtcclxuICB0YXJnZXQ/OiBMYXRMbmc7XHJcbiAgem9vbT86IG51bWJlcjtcclxuICBiZWFyaW5nPzogbnVtYmVyO1xyXG4gIHRpbHQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9jYXRpb25QZXJtaXNzaW9uUmVzdWx0IHtcclxuICBoYXNMb2NhdGlvblBlcm1pc3Npb246IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tcHV0ZURpc3RhbmNlUmVzdWx0IHtcclxuICByZXN1bHQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb21wdXRlRGlzdGFuY2Uge1xyXG4gIGZyb20/OiBMYXRMbmcsXHJcbiAgdG8/OiBMYXRMbmcsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhVXBkYXRlIHtcclxuICBtZXRob2Q/OiBDYW1lcmFVcGRhdGVNZXRob2QsXHJcbiAgW290aGVyOiBzdHJpbmddOiBhbnksIC8vIC4uLiBPdGhlciBzdHVmZiBkZXBlbmRzIG9uIHRoZSBtZXRob2RcclxufVxyXG5cclxuXHJcbmludGVyZmFjZSBCYXNlTWFwT2JqZWN0PFQ+IHtcclxuICBzZXQocHJvcE5hbWU6IHN0cmluZywgcHJvcFZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT47XHJcbiAgc2V0KGtleVZhbHM6IGFueSk6IFByb21pc2U8YW55PjtcclxuICB1cGRhdGUoKTogUHJvbWlzZTxUPjtcclxuICByZW1vdmUoKTogUHJvbWlzZTxhbnk+O1xyXG5cclxuICBbb3RoZXI6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2x5bGluZSBleHRlbmRzIEJhc2VNYXBPYmplY3Q8UG9seWxpbmU+IHtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2x5Z29uIGV4dGVuZHMgQmFzZU1hcE9iamVjdDxQb2x5Z29uPiB7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2lyY2xlIGV4dGVuZHMgQmFzZU1hcE9iamVjdDxDaXJjbGU+IHtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHcm91bmRPdmVybGF5IGV4dGVuZHMgQmFzZU1hcE9iamVjdDxHcm91bmRPdmVybGF5PiB7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFya2VyIGV4dGVuZHMgQmFzZU1hcE9iamVjdDxNYXJrZXI+IHtcclxuICBzaG93SW5mb1dpbmRvdygpOiBQcm9taXNlPHZvaWQ+O1xyXG4gIGhpZGVJbmZvV2luZG93KCk6IFByb21pc2U8dm9pZD47XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBlbnVtIFBhdHRlcm5JdGVtVHlwZSB7XHJcbiAgVFlQRV9HQVAgPSAyLFxyXG4gIFRZUEVfRE9UID0gMSxcclxuICBUWVBFX0RBU0ggPSAwXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEpvaW50VHlwZSB7XHJcbiAgUk9VTkQgPSAyLFxyXG4gIEJFVkVMID0gMSxcclxuICBERUZBVUxUID0gMFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDYXBUeXBlIHtcclxuICBUWVBFX0JVVFRfQ0FQID0gMCxcclxuICBUWVBFX1NRVUFSRV9DQVAgPSAxLFxyXG4gIFRZUEVfUk9VTkRfQ0FQID0gMixcclxuICBUWVBFX0NVU1RPTV9DQVAgPSAzXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENhbWVyYU1vdmVSZWFzb24ge1xyXG4gIFJFQVNPTl9ERVZFTE9QRVJfQU5JTUFUSU9OID0gMyxcclxuICBSRUFTT05fQVBJX0FOSU1BVElPTiA9IDIsXHJcbiAgUkVBU09OX0dFU1RVUkUgPSAxXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENvbG9yIHtcclxuICBSRUQgPSAtNjU1MzYsXHJcbiAgREtHUkFZID0gLTEyMzAzMjkyLFxyXG4gIEdSQVkgPSAtNzgyOTM2OCxcclxuICBXSElURSA9IC0xLFxyXG4gIEJMVUUgPSAtMTY3NzY5NjEsXHJcbiAgQkxBQ0sgPSAtMTY3NzcyMTYsXHJcbiAgTFRHUkFZID0gLTMzNTU0NDQsXHJcbiAgTUFHRU5UQSA9IC02NTI4MSxcclxuICBZRUxMT1cgPSAtMjU2LFxyXG4gIENZQU4gPSAtMTY3MTE2ODEsXHJcbiAgR1JFRU4gPSAtMTY3MTE5MzYsXHJcbiAgVFJBTlNQQVJFTlQgPSAwXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1hcFR5cGUge1xyXG4gIE1BUF9UWVBFX05PTkUgPSAwLFxyXG4gIE1BUF9UWVBFX1NBVEVMTElURSA9IDIsXHJcbiAgTUFQX1RZUEVfTk9STUFMID0gMSxcclxuICBNQVBfVFlQRV9IWUJSSUQgPSA0LFxyXG4gIE1BUF9UWVBFX1RFUlJBSU4gPSAzLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBNYXJrZXJFdmVudCB7XHJcbiAgTUFSS0VSX0RSQUcgPSAyLFxyXG4gIE1BUktFUl9EUkFHX0VORCA9IDMsXHJcbiAgTUFSS0VSX0RSQUdfU1RBUlQgPSAxXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEh1ZSB7XHJcbiAgSFVFX0dSRUVOID0gMTIwLFxyXG4gIEhVRV9BWlVSRSA9IDIxMCxcclxuICBIVUVfUk9TRSA9IDMzMCxcclxuICBIVUVfQ1lBTiA9IDE4MCxcclxuICBIVUVfT1JBTkdFID0gMzAsXHJcbiAgSFVFX01BR0VOVEEgPSAzMDAsXHJcbiAgSFVFX1ZJT0xFVCA9IDI3MCxcclxuICBIVUVfWUVMTE9XID0gNjAsXHJcbiAgSFVFX0JMVUUgPSAyNDAsXHJcbiAgSFVFX1JFRCA9IDAsXHJcblxyXG59XHJcblxyXG5leHBvcnQgZW51bSBNYXBFdmVudCB7XHJcbiAgQ0lSQ0xFX0NMSUNLID0gXCJjaXJjbGVDbGlja1wiLFxyXG4gIE1BUF9DTElDSyA9IFwibWFwQ2xpY2tcIixcclxuICBNQVBfTE9OR19DTElDSyA9IFwibWFwTG9uZ0NsaWNrXCIsXHJcbiAgSU5GT19XSU5ET1dfQ0xJQ0sgPSBcImluZm9XaW5kb3dDbGlja1wiLFxyXG4gIENBTUVSQV9NT1ZFX1NUQVJURUQgPSBcImNhbWVyYU1vdmVTdGFydGVkXCIsXHJcbiAgUE9MWUdPTl9DTElDSyA9IFwicG9seWdvbkNsaWNrXCIsXHJcbiAgUE9MWUxJTkVfQ0xJQ0sgPSBcInBvbHlsaW5lQ2xpY2tcIixcclxuICBHUk9VTkRfT1ZFUkxBWV9DTElDSyA9IFwiZ3JvdW5kT3ZlcmxheUNsaWNrXCIsXHJcbiAgQ0FNRVJBX01PVkUgPSBcImNhbWVyYU1vdmVcIixcclxuICBDQU1FUkFfSURMRSA9IFwiY2FtZXJhSWRsZVwiLFxyXG4gIE1BUF9MT0FERUQgPSBcIm1hcExvYWRlZFwiLFxyXG4gIE1BUktFUl9DTElDSyA9IFwibWFya2VyQ2xpY2tcIixcclxuICBNWV9MT0NBVElPTl9CVVRUT05fQ0xJQ0sgPSBcIm15TG9jYXRpb25CdXR0b25DbGlja1wiLFxyXG4gIE1ZX0xPQ0FUSU9OX0NMSUNLID0gXCJteUxvY2F0aW9uQ2xpY2tcIixcclxuICBNQVJLRVJfRFJBRyA9IFwibWFya2VyRHJhZ1wiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENhbWVyYVVwZGF0ZU1ldGhvZCB7XHJcbiAgQ0FNRVJBX1BPU0lUSU9OID0gXCJuZXdDYW1lcmFQb3NpdGlvblwiLFxyXG4gIExBVExORyA9IFwibmV3TGF0TG5nXCIsXHJcbiAgTEFUTE5HX0JPVU5EUyA9IFwibmV3TGF0TG5nQm91bmRzXCIsXHJcbiAgTEFUTE5HX1pPT00gPSBcIm5ld0xhdExuZ1pvb21cIixcclxuICBTQ1JPTExfQlkgPSBcInNjcm9sbEJ5XCIsXHJcbiAgWk9PTV9CWSA9IFwiem9vbUJ5XCIsXHJcbiAgWk9PTV9JTiA9IFwiem9vbUluXCIsXHJcbiAgWk9PTV9PVVQgPSBcInpvb21PdXRcIixcclxuICBaT09NX1RPID0gXCJ6b29tVG9cIlxyXG59XHJcbiJdfQ==