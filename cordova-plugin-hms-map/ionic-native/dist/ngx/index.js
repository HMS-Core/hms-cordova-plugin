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

import { __extends } from "tslib";
import { Injectable } from "@angular/core";
import { IonicNativePlugin, cordova } from "@ionic-native/core";
var HMSMap = /** @class */ (function (_super) {
    __extends(HMSMap, _super);
    function HMSMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSMap.prototype.getMap = function (divId, huaweiMapOptions, bounds) { return cordova(this, "getMap", { "otherPromise": true }, arguments); };
    HMSMap.prototype.showMap = function (divId) { return cordova(this, "showMap", { "otherPromise": true }, arguments); };
    HMSMap.prototype.hasPermission = function () { return cordova(this, "hasPermission", { "otherPromise": true }, arguments); };
    HMSMap.prototype.convertCoordinate = function (LatLngObj) { return cordova(this, "convertCoordinate", { "otherPromise": true }, arguments); };
    HMSMap.prototype.convertCoordinates = function (LatLngListObj) { return cordova(this, "convertCoordinates", { "otherPromise": true }, arguments); };
    HMSMap.prototype.requestPermission = function () { return cordova(this, "requestPermission", { "otherPromise": true }, arguments); };
    HMSMap.prototype.computeDistanceBetween = function (from, to) { return cordova(this, "computeDistanceBetween", { "otherPromise": true }, arguments); };
    HMSMap.prototype.setApiKey = function (apiKey) { return cordova(this, "setApiKey", { "otherPromise": true }, arguments); };
    HMSMap.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSMap.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HMSMap.prototype.initialize = function (routePolicy) { return cordova(this, "initialize", { "otherPromise": true }, arguments); };
    HMSMap.pluginName = "HMSMap";
    HMSMap.plugin = "cordova-plugin-hms-map";
    HMSMap.pluginRef = "HMSMap";
    HMSMap.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSMap.platforms = ["Android"];
    HMSMap.decorators = [
        { type: Injectable }
    ];
    return HMSMap;
}(IonicNativePlugin));
export { HMSMap };
var CameraUpdateFactory = /** @class */ (function () {
    function CameraUpdateFactory() {
    }
    CameraUpdateFactory.newCameraPosition = function (cameraPosition) {
        return HMSMap.getPlugin().CameraUpdateFactory.newCameraPosition(cameraPosition);
    };
    CameraUpdateFactory.newLatLng = function (latLng) {
        return HMSMap.getPlugin().CameraUpdateFactory.newLatLng(latLng);
    };
    CameraUpdateFactory.newLatLngBounds = function (latLngBounds, padding, width, height) {
        return HMSMap.getPlugin().CameraUpdateFactory.newLatLngBounds(latLngBounds, padding, width, height);
    };
    CameraUpdateFactory.newLatLngZoom = function (latLng, zoom) {
        return HMSMap.getPlugin().CameraUpdateFactory.newLatLngZoom(latLng, zoom);
    };
    CameraUpdateFactory.scrollBy = function (xPixel, yPixel) {
        return HMSMap.getPlugin().CameraUpdateFactory.scrollBy(xPixel, yPixel);
    };
    CameraUpdateFactory.zoomBy = function (amount, focus) {
        return HMSMap.getPlugin().CameraUpdateFactory.zoomBy(amount, focus);
    };
    CameraUpdateFactory.zoomIn = function () {
        return HMSMap.getPlugin().CameraUpdateFactory.zoomIn();
    };
    CameraUpdateFactory.zoomOut = function () {
        return HMSMap.getPlugin().CameraUpdateFactory.zoomOut();
    };
    CameraUpdateFactory.zoomTo = function (zoom) {
        return HMSMap.getPlugin().CameraUpdateFactory.zoomTo(zoom);
    };
    CameraUpdateFactory.pluginName = "HMSMap";
    CameraUpdateFactory.plugin = "cordova-plugin-hms-map";
    CameraUpdateFactory.pluginRef = "HMSMap.CameraUpdateFactory";
    CameraUpdateFactory.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    CameraUpdateFactory.platforms = ["Android"];
    return CameraUpdateFactory;
}());
export { CameraUpdateFactory };
var MapStyleOptions = /** @class */ (function () {
    function MapStyleOptions(resourceName) {
        this.resourceName = resourceName;
    }
    MapStyleOptions.prototype.getResourceName = function () {
        return this.resourceName;
    };
    MapStyleOptions.loadRawResourceStyle = function (resourceName) {
        return new MapStyleOptions(resourceName);
    };

    return MapStyleOptions;
}());
export { MapStyleOptions };
var Cap = /** @class */ (function () {
    function Cap() {
        this.bitmapDescriptor = null;
        this.refWidth = null;
    }
    Cap.prototype.getType = function () {
        return this.type;
    };
    Cap.TYPE_BUTT_CAP = 0;
    Cap.TYPE_SQUARE_CAP = 1;
    Cap.TYPE_ROUND_CAP = 2;
    Cap.TYPE_CUSTOM_CAP = 3;
    return Cap;
}());
export { Cap };
var ButtCap = /** @class */ (function (_super) {
    __extends(ButtCap, _super);
    function ButtCap() {
        var _this = _super.call(this) || this;
        _this.type = 0;
        return _this;
    }
    return ButtCap;
}(Cap));
export { ButtCap };
var RoundCap = /** @class */ (function (_super) {
    __extends(RoundCap, _super);
    function RoundCap() {
        var _this = _super.call(this) || this;
        _this.type = 2;
        return _this;
    }
    return RoundCap;
}(Cap));
export { RoundCap };
var SquareCap = /** @class */ (function (_super) {
    __extends(SquareCap, _super);
    function SquareCap() {
        var _this = _super.call(this) || this;
        _this.type = 1;
        return _this;
    }
    return SquareCap;
}(Cap));
export { SquareCap };
var CustomCap = /** @class */ (function (_super) {
    __extends(CustomCap, _super);
    function CustomCap(bitmapDescriptor, refWidth) {
        var _this = _super.call(this) || this;
        _this.type = 3;
        _this.refWidth = refWidth;
        _this.bitmapDescriptor = bitmapDescriptor;
        return _this;
    }
    CustomCap.prototype.getBitmapDescriptor = function () {
        return this.bitmapDescriptor;
    };
    CustomCap.prototype.getRefWidth = function () {
        return this.refWidth;
    };

    return CustomCap;
}(Cap));
export { CustomCap };
var AnimationSet = /** @class */ (function () {
    function AnimationSet() {
        this.animations = new Map();
    }
    AnimationSet.prototype.addScaleAnimation = function (animation) {
        this.animations.set("Scale", animation);
    };
    AnimationSet.prototype.addRotateAnimation = function (animation) {
        this.animations.set("Rotate", animation);
    };
    AnimationSet.prototype.addAlphaAnimation = function (animation) {
        this.animations.set("Alpha", animation);
    };
    AnimationSet.prototype.addTranslateAnimation = function (animation) {
        this.animations.set("Translate", animation);
    };
    return AnimationSet;
}());
export { AnimationSet };
export var RadiusUnit;
(function (RadiusUnit) {
    RadiusUnit["METER"] = "meter";
    RadiusUnit["PIXEL"] = "pixel";
})(RadiusUnit || (RadiusUnit = {}));
/*-------------------------------------------------------------ENUMS----------------------------------------------------------*/
export var TileType;
(function (TileType) {
    TileType[TileType["URL_TILE"] = 0] = "URL_TILE";
    TileType[TileType["REPETITIVE_TILE"] = 1] = "REPETITIVE_TILE";
    TileType[TileType["LOCAL_TILE"] = 2] = "LOCAL_TILE";
})(TileType || (TileType = {}));
export var Color;
(function (Color) {
    Color[Color["RED"] = -65536] = "RED";
    Color[Color["GREEN"] = -16711936] = "GREEN";
    Color[Color["TRANSPARENT"] = 0] = "TRANSPARENT";
    Color[Color["DARK_GRAY"] = -12303292] = "DARK_GRAY";
    Color[Color["YELLOW"] = -256] = "YELLOW";
    Color[Color["GRAY"] = -7829368] = "GRAY";
    Color[Color["WHITE"] = -1] = "WHITE";
    Color[Color["LITE_GRAY"] = -3355444] = "LITE_GRAY";
    Color[Color["BLUE"] = -16776961] = "BLUE";
    Color[Color["BLACK"] = -16777216] = "BLACK";
    Color[Color["MAGENTA"] = -65281] = "MAGENTA";
    Color[Color["CYAN"] = -16711681] = "CYAN";
})(Color || (Color = {}));
export var JointType;
(function (JointType) {

    JointType[JointType["DEFAULT"] = 0] = "DEFAULT";
    JointType[JointType["BEVEL"] = 1] = "BEVEL";
    JointType[JointType["ROUND"] = 2] = "ROUND";
})(JointType || (JointType = {}));
export var MapEvent;
(function (MapEvent) {
    MapEvent["ON_INDOOR_BUILDINGS_FOCUSED"] = "onIndoorBuildingsFocused";
    MapEvent["ON_INDOOR_LEVEL_ACTIVATED"] = "onIndoorLevelActivated";
    MapEvent["ON_MAP_LOADED"] = "onMapLoaded";
     MapEvent["ON_MARKER_DRAG"] = "onMarkerDrag";
    MapEvent["ON_CAMERA_IDLE"] = "onCameraIdle";
    MapEvent["ON_CAMERA_MOVE_CANCELED"] = "onCameraMoveCanceled";
    MapEvent["ON_CAMERA_MOVE"] = "onCameraMove";
    MapEvent["ON_CIRCLE_CLICK"] = "onCircleClick";
    MapEvent["ON_GROUND_OVERLAY_CLICK"] = "onGroundOverlayClick";
    MapEvent["ON_INFO_WINDOW_CLICK"] = "onInfoWindowClick";
    MapEvent["ON_INFO_WINDOW_CLOSE"] = "onInfoWindowClose";
    MapEvent["ON_INFO_WINDOW_LONG_CLICK"] = "onInfoWindowLongClick";
    MapEvent["ON_MAP_CLICK"] = "onMapClick";
    MapEvent["ON_MAP_LONG_CLICK"] = "onMapLongClick";
    MapEvent["ON_MARKER_CLICK"] = "onMarkerClick";
    MapEvent["ON_POI_CLICK"] = "onPoiClick";
    MapEvent["ON_MARKER_DRAG_START"] = "onMarkerDragStart";
    MapEvent["ON_MARKER_DRAG_END"] = "onMarkerDragEnd";
    MapEvent["ON_MY_LOCATION_BUTTON_CLICK"] = "onMyLocationButtonClick";
    MapEvent["ON_MY_LOCATION_CLICK"] = "onMyLocationClick"; 
    MapEvent["ON_POLYGON_CLICK"] = "onPolygonClick";
    MapEvent["ON_POLYLINE_CLICK"] = "onPolylineClick";
    MapEvent["ON_CANCELABLE_CALLBACK_FINISH"] = "onCancelableCallbackFinish";
    MapEvent["ON_CANCELABLE_CALLBACK_CANCEL"] = "onCancelableCallbackCancel";
    MapEvent["ON_SNAPSHOT_READY_CALLBACK"] = "onSnapshotReadyCallback";
    MapEvent["ON_CAMERA_MOVE_STARTED"] = "onCameraMoveStarted";
})(MapEvent || (MapEvent = {}));
export var MapType;
(function (MapType) {
    MapType[MapType["MAP_TYPE_NONE"] = 0] = "MAP_TYPE_NONE";
    MapType[MapType["MAP_TYPE_SATELLITE"] = 2] = "MAP_TYPE_SATELLITE";
    MapType[MapType["MAP_TYPE_NORMAL"] = 1] = "MAP_TYPE_NORMAL";
    MapType[MapType["MAP_TYPE_TERRAIN"] = 3] = "MAP_TYPE_TERRAIN";
    MapType[MapType["MAP_TYPE_HYBRID"] = 4] = "MAP_TYPE_HYBRID";  
})(MapType || (MapType = {}));
export var Hue;
(function (Hue) {
    Hue[Hue["HUE_RED"] = 0] = "HUE_RED";
    Hue[Hue["HUE_ORANGE"] = 30] = "HUE_ORANGE";
    Hue[Hue["HUE_YELLOW"] = 60] = "HUE_YELLOW";
    Hue[Hue["HUE_GREEN"] = 120] = "HUE_GREEN";
    Hue[Hue["HUE_CYAN"] = 180] = "HUE_CYAN";
    Hue[Hue["HUE_AZURE"] = 210] = "HUE_AZURE";
    Hue[Hue["HUE_BLUE"] = 240] = "HUE_BLUE";
    Hue[Hue["HUE_VIOLET"] = 270] = "HUE_VIOLET";
    Hue[Hue["HUE_MAGENTA"] = 300] = "HUE_MAGENTA";
    Hue[Hue["HUE_ROSE"] = 330] = "HUE_ROSE";   
})(Hue || (Hue = {}));
export var PatternItemType;
(function (PatternItemType) {
    PatternItemType[PatternItemType["TYPE_DASH"] = 0] = "TYPE_DASH";
    PatternItemType[PatternItemType["TYPE_DOT"] = 1] = "TYPE_DOT";
    PatternItemType[PatternItemType["TYPE_GAP"] = 2] = "TYPE_GAP";
    
})(PatternItemType || (PatternItemType = {}));
export var CameraMoveStartedReason;
(function (CameraMoveStartedReason) {
    CameraMoveStartedReason[CameraMoveStartedReason["REASON_API_ANIMATION"] = 2] = "REASON_API_ANIMATION";
    CameraMoveStartedReason[CameraMoveStartedReason["REASON_DEVELOPER_ANIMATION"] = 3] = "REASON_DEVELOPER_ANIMATION";
    CameraMoveStartedReason[CameraMoveStartedReason["REASON_GESTURE"] = 1] = "REASON_GESTURE";
})(CameraMoveStartedReason || (CameraMoveStartedReason = {}));
export var InterpolatorType;
(function (InterpolatorType) {
    InterpolatorType[InterpolatorType["LINEAR"] = 0] = "LINEAR";
    InterpolatorType[InterpolatorType["ACCELERATE_DECELERATE"] = 1] = "ACCELERATE_DECELERATE";
    InterpolatorType[InterpolatorType["ACCELERATE"] = 2] = "ACCELERATE";
    InterpolatorType[InterpolatorType["ANTICIPATE"] = 3] = "ANTICIPATE";
    InterpolatorType[InterpolatorType["ANTICIPATE_OVERSHOOT"] = 4] = "ANTICIPATE_OVERSHOOT";
    InterpolatorType[InterpolatorType["BOUNCE"] = 5] = "BOUNCE";
    InterpolatorType[InterpolatorType["CYCLE"] = 6] = "CYCLE";
    InterpolatorType[InterpolatorType["DECELERATE"] = 7] = "DECELERATE";
    InterpolatorType[InterpolatorType["OVERSHOOT"] = 8] = "OVERSHOOT";
    InterpolatorType[InterpolatorType["PATH"] = 9] = "PATH";
})(InterpolatorType || (InterpolatorType = {}));
export var AnimationConstant;
(function (AnimationConstant) {
    AnimationConstant[AnimationConstant["FILL_MODE_FORWARDS"] = 0] = "FILL_MODE_FORWARDS";
    AnimationConstant[AnimationConstant["FILL_MODE_BACKWARDS"] = 1] = "FILL_MODE_BACKWARDS";
    AnimationConstant[AnimationConstant["INFINITE"] = -1] = "INFINITE";
    AnimationConstant[AnimationConstant["RESTART"] = 1] = "RESTART";
    AnimationConstant[AnimationConstant["REVERSE"] = 2] = "REVERSE";
})(AnimationConstant || (AnimationConstant = {}));
export var Gravity;
(function (Gravity) {
    Gravity[Gravity["TOP"] = 48] = "TOP";
    Gravity[Gravity["BOTTOM"] = 80] = "BOTTOM";
    Gravity[Gravity["START"] = 8388611] = "START";
    Gravity[Gravity["END"] = 8388613] = "END";
})(Gravity || (Gravity = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7O0FBRUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQVU1QywwQkFBaUI7Ozs7SUFFekMsdUJBQU0sYUFDRixLQUFhLEVBQ2IsZ0JBQWtDLEVBQ2xDLE1BQWtCO0lBTXRCLHdCQUFPLGFBQUMsS0FBYTtJQUtyQiw4QkFBYTtJQUtiLGtDQUFpQixhQUFDLFNBQW9CO0lBS3RDLG1DQUFrQixhQUFDLGFBQTRCO0lBSy9DLGtDQUFpQjtJQUtqQix1Q0FBc0IsYUFDbEIsSUFBWSxFQUNaLEVBQVU7SUFNZCwwQkFBUyxhQUFDLE1BQWM7SUFLeEIsOEJBQWE7SUFLYiw2QkFBWTtJQUtaLDJCQUFVLGFBQUMsV0FBb0I7Ozs7Ozs7Z0JBNURsQyxVQUFVOztpQkExQlg7RUEyQjRCLGlCQUFpQjtTQUFoQyxNQUFNOztJQXdFZjtJQUF3QixDQUFDO0lBRWxCLHFDQUFpQixHQUF4QixVQUF5QixjQUE4QjtRQUNuRCxPQUFPLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FDM0QsY0FBYyxDQUNqQixDQUFDO0lBQ04sQ0FBQztJQUVNLDZCQUFTLEdBQWhCLFVBQWlCLE1BQWM7UUFDM0IsT0FBTyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFPTSxtQ0FBZSxHQUF0QixVQUNJLFlBQTBCLEVBQzFCLE9BQWUsRUFDZixLQUFjLEVBQ2QsTUFBZTtRQUVmLE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLG1CQUFt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QUFZLGlCQUFpQjtJQUN6QixxRkFBc0IsQ0FBQTtJQUN0Qix1RkFBdUIsQ0FBQTtJQUN2QixrRUFBYSxDQUFBO0lBQ2IsK0RBQVcsQ0FBQTtJQUNYLCtEQUFXLENBQUE7QUFDZixDQUFDLEVBTlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQU01QjtBQUVELE1BQU0sQ0FBTixJQUFZLE9BS1g7QUFMRCxXQUFZLE9BQU87SUFDZixvQ0FBUSxDQUFBO0lBQ1IsMENBQVcsQ0FBQTtJQUNYLDZDQUFlLENBQUE7SUFDZix5Q0FBYSxDQUFBO0FBQ2pCLENBQUMsRUFMVyxPQUFPLEtBQVAsT0FBTyxRQUtsQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQ29weXJpZ2h0IDIwMjAtMjAyMy4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcbiAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tIFwiQGlvbmljLW5hdGl2ZS9jb3JlXCI7XG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6IFwiSE1TTWFwXCIsXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1tYXBcIixcbiAgICBwbHVnaW5SZWY6IFwiSE1TTWFwXCIsXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNNYXAgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRNYXAoXG4gICAgICAgIGRpdklkOiBzdHJpbmcsXG4gICAgICAgIGh1YXdlaU1hcE9wdGlvbnM6IEh1YXdlaU1hcE9wdGlvbnMsXG4gICAgICAgIGJvdW5kcz86IE1hcEJvdW5kc1xuICAgICk6IFByb21pc2U8SHVhd2VpTWFwPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNob3dNYXAoZGl2SWQ6IHN0cmluZyk6IFByb21pc2U8SHVhd2VpTWFwPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGNvbnZlcnRDb29yZGluYXRlKExhdExuZ09iajogTGF0TG5nT2JqKTogUHJvbWlzZTxMYXRMbmdPYmo+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgY29udmVydENvb3JkaW5hdGVzKExhdExuZ0xpc3RPYmo6IExhdExuZ0xpc3RPYmopOiBQcm9taXNlPExhdExuZ0xpc3RPYmpbXT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZXF1ZXN0UGVybWlzc2lvbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgY29tcHV0ZURpc3RhbmNlQmV0d2VlbihcbiAgICAgICAgZnJvbTogTGF0TG5nLFxuICAgICAgICB0bzogTGF0TG5nXG4gICAgKTogUHJvbWlzZTxDb21wdXRlRGlzdGFuY2VSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QXBpS2V5KGFwaUtleTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGRpc2FibGVMb2dnZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGVuYWJsZUxvZ2dlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaW5pdGlhbGl6ZShyb3V0ZVBvbGljeT86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiBcIkhNU01hcFwiLFxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtbWFwXCIsXG4gICAgcGx1Z2luUmVmOiBcIkhNU01hcC5DYW1lcmFVcGRhdGVGYWN0b3J5XCIsXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBDYW1lcmFVcGRhdGVGYWN0b3J5IHtcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBzdGF0aWMgbmV3Q2FtZXJhUG9zaXRpb24oY2FtZXJhUG9zaXRpb246IENhbWVyYVBvc2l0aW9uKTogQ2FtZXJhVXBkYXRlIHtcbiAgICAgICAgcmV0dXJuIEhNU01hcC5nZXRQbHVnaW4oKS5DYW1lcmFVcGRhdGVGYWN0b3J5Lm5ld0NhbWVyYVBvc2l0aW9uKFxuICAgICAgICAgICAgY2FtZXJhUG9zaXRpb25cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbmV3TGF0TG5nKGxhdExuZzogTGF0TG5nKTogQ2FtZXJhVXBkYXRlIHtcbiAgICAgICAgcmV0dXJuIEhNU01hcC5nZXRQbHVnaW4oKS5DYW1lcmFVcGRhdGVGYWN0b3J5Lm5ld0xhdExuZyhsYXRMbmcpO1xuICAgIH1cblxuICAgIHN0YXRpYyBuZXdMYXRMbmdCb3VuZHMoXG4gICAgICAgIGxhdExuZ0JvdW5kczogTGF0TG5nQm91bmRzLFxuICAgICAgICBwYWRkaW5nOiBudW1iZXJcbiAgICApOiBDYW1lcmFVcGRhdGU7XG5cbiAgICBzdGF0aWMgbmV3TGF0TG5nQm91bmRzKFxuICAgICAgICBsYXRMbmdCb3VuZHM6IExhdExuZ0JvdW5kcyxcbiAgICAgICAgcGFkZGluZzogbnVtYmVyLFxuICAgICAgICB3aWR0aD86IG51bWJlcixcbiAgICAgICAgaGVpZ2h0PzogbnVtYmVyXG4gICAgKTogQ2FtZXJhVXBkYXRlIHtcbiAgICAgICAgcmV0dXJuIEhNU01hcC5nZXRQbHVnaW4oKS5DYW1lcmFVcGRhdGVGYWN0b3J5Lm5ld0xhdExuZ0JvdW5kcyhcbiAgICAgICAgICAgIGxhdExuZ0JvdW5kcyxcbiAgICAgICAgICAgIHBhZGRpbmcsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBuZXdMYXRMbmdab29tKGxhdExuZzogTGF0TG5nLCB6b29tOiBudW1iZXIpOiBDYW1lcmFVcGRhdGUge1xuICAgICAgICByZXR1cm4gSE1TTWFwLmdldFBsdWdpbigpLkNhbWVyYVVwZGF0ZUZhY3RvcnkubmV3TGF0TG5nWm9vbShcbiAgICAgICAgICAgIGxhdExuZyxcbiAgICAgICAgICAgIHpvb21cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2Nyb2xsQnkoeFBpeGVsOiBudW1iZXIsIHlQaXhlbDogbnVtYmVyKTogQ2FtZXJhVXBkYXRlIHtcbiAgICAgICAgcmV0dXJuIEhNU01hcC5nZXRQbHVnaW4oKS5DYW1lcmFVcGRhdGVGYWN0b3J5LnNjcm9sbEJ5KHhQaXhlbCwgeVBpeGVsKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgem9vbUJ5KGFtb3VudDogbnVtYmVyKTogQ2FtZXJhVXBkYXRlO1xuXG4gICAgc3RhdGljIHpvb21CeShhbW91bnQ6IG51bWJlciwgZm9jdXM/OiBQb2ludCk6IENhbWVyYVVwZGF0ZSB7XG4gICAgICAgIHJldHVybiBITVNNYXAuZ2V0UGx1Z2luKCkuQ2FtZXJhVXBkYXRlRmFjdG9yeS56b29tQnkoYW1vdW50LCBmb2N1cyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHpvb21JbigpOiBDYW1lcmFVcGRhdGUge1xuICAgICAgICByZXR1cm4gSE1TTWFwLmdldFBsdWdpbigpLkNhbWVyYVVwZGF0ZUZhY3Rvcnkuem9vbUluKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHpvb21PdXQoKTogQ2FtZXJhVXBkYXRlIHtcbiAgICAgICAgcmV0dXJuIEhNU01hcC5nZXRQbHVnaW4oKS5DYW1lcmFVcGRhdGVGYWN0b3J5Lnpvb21PdXQoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgem9vbVRvKHpvb206IG51bWJlcik6IENhbWVyYVVwZGF0ZSB7XG4gICAgICAgIHJldHVybiBITVNNYXAuZ2V0UGx1Z2luKCkuQ2FtZXJhVXBkYXRlRmFjdG9yeS56b29tVG8oem9vbSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWFwU3R5bGVPcHRpb25zIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlc291cmNlTmFtZTogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihyZXNvdXJjZU5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnJlc291cmNlTmFtZSA9IHJlc291cmNlTmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGxvYWRSYXdSZXNvdXJjZVN0eWxlKHJlc291cmNlTmFtZTogc3RyaW5nKTogTWFwU3R5bGVPcHRpb25zIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNYXBTdHlsZU9wdGlvbnMocmVzb3VyY2VOYW1lKTtcbiAgICB9XG5cbiAgICBnZXRSZXNvdXJjZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb3VyY2VOYW1lO1xuICAgIH1cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENhcCB7XG4gICAgc3RhdGljIHJlYWRvbmx5IFRZUEVfQlVUVF9DQVAgPSAwO1xuICAgIHN0YXRpYyByZWFkb25seSBUWVBFX1NRVUFSRV9DQVAgPSAxO1xuICAgIHN0YXRpYyByZWFkb25seSBUWVBFX1JPVU5EX0NBUCA9IDI7XG4gICAgc3RhdGljIHJlYWRvbmx5IFRZUEVfQ1VTVE9NX0NBUCA9IDM7XG4gICAgcHJvdGVjdGVkIHR5cGU6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgcmVmV2lkdGg/OiBudW1iZXIgPSBudWxsO1xuICAgIHByb3RlY3RlZCBiaXRtYXBEZXNjcmlwdG9yPzogQml0bWFwRGVzY3JpcHRvciA9IG51bGw7XG5cbiAgICBnZXRUeXBlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQnV0dENhcCBleHRlbmRzIENhcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9IDA7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUm91bmRDYXAgZXh0ZW5kcyBDYXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAyO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNxdWFyZUNhcCBleHRlbmRzIENhcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9IDE7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3VzdG9tQ2FwIGV4dGVuZHMgQ2FwIHtcbiAgICBjb25zdHJ1Y3RvcihiaXRtYXBEZXNjcmlwdG9yOiBCaXRtYXBEZXNjcmlwdG9yLCByZWZXaWR0aD86IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAzO1xuICAgICAgICB0aGlzLmJpdG1hcERlc2NyaXB0b3IgPSBiaXRtYXBEZXNjcmlwdG9yO1xuICAgICAgICB0aGlzLnJlZldpZHRoID0gcmVmV2lkdGg7XG4gICAgfVxuXG4gICAgZ2V0UmVmV2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmV2lkdGg7XG4gICAgfVxuXG4gICAgZ2V0Qml0bWFwRGVzY3JpcHRvcigpOiBCaXRtYXBEZXNjcmlwdG9yIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYml0bWFwRGVzY3JpcHRvcjtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBbmltYXRpb25TZXQge1xuICAgIHJlYWRvbmx5IGFuaW1hdGlvbnM6IE1hcDxzdHJpbmcsIEFuaW1hdGlvbj4gPSBuZXcgTWFwPHN0cmluZywgQW5pbWF0aW9uPigpO1xuXG4gICAgYWRkUm90YXRlQW5pbWF0aW9uKGFuaW1hdGlvbjogUm90YXRlQW5pbWF0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5zZXQoXCJSb3RhdGVcIiwgYW5pbWF0aW9uKTtcbiAgICB9XG5cbiAgICBhZGRTY2FsZUFuaW1hdGlvbihhbmltYXRpb246IFNjYWxlQW5pbWF0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5zZXQoXCJTY2FsZVwiLCBhbmltYXRpb24pO1xuICAgIH1cblxuICAgIGFkZFRyYW5zbGF0ZUFuaW1hdGlvbihhbmltYXRpb246IFRyYW5zbGF0ZUFuaW1hdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMuc2V0KFwiVHJhbnNsYXRlXCIsIGFuaW1hdGlvbik7XG4gICAgfVxuXG4gICAgYWRkQWxwaGFBbmltYXRpb24oYW5pbWF0aW9uOiBBbHBoYUFuaW1hdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMuc2V0KFwiQWxwaGFcIiwgYW5pbWF0aW9uKTtcbiAgICB9XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0lOVEVSRkFDRVMvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBpbnRlcmZhY2UgVWlTZXR0aW5ncyB7XG4gICAgaXNDb21wYXNzRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIGlzSW5kb29yTGV2ZWxQaWNrZXJFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgaXNNYXBUb29sYmFyRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIGlzTXlMb2NhdGlvbkJ1dHRvbkVuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBpc1JvdGF0ZUdlc3R1cmVzRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIGlzU2Nyb2xsR2VzdHVyZXNFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgaXNTY3JvbGxHZXN0dXJlc0VuYWJsZWREdXJpbmdSb3RhdGVPclpvb20oKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBpc1RpbHRHZXN0dXJlc0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBpc1pvb21Db250cm9sc0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBpc1pvb21HZXN0dXJlc0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBzZXRBbGxHZXN0dXJlc0VuYWJsZWQoYWxsR2VzdHVyZXNFbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRDb21wYXNzRW5hYmxlZChjb21wYXNzRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0SW5kb29yTGV2ZWxQaWNrZXJFbmFibGVkKFxuICAgICAgICBpbmRvb3JMZXZlbFBpY2tlckVuYWJsZWQ6IGJvb2xlYW5cbiAgICApOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldE1hcFRvb2xiYXJFbmFibGVkKG1hcFRvb2xiYXJFbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRNeUxvY2F0aW9uQnV0dG9uRW5hYmxlZChteUxvY2F0aW9uQnV0dG9uRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0Um90YXRlR2VzdHVyZXNFbmFibGVkKHJvdGF0ZUdlc3R1cmVzRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0U2Nyb2xsR2VzdHVyZXNFbmFibGVkKHNjcm9sbEdlc3R1cmVzRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0U2Nyb2xsR2VzdHVyZXNFbmFibGVkRHVyaW5nUm90YXRlT3Jab29tKFxuICAgICAgICBzY3JvbGxHZXN0dXJlc0VuYWJsZWREdXJpbmdSb3RhdGVPclpvb206IGJvb2xlYW5cbiAgICApOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFRpbHRHZXN0dXJlc0VuYWJsZWQodGlsdEdlc3R1cmVzRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0Wm9vbUNvbnRyb2xzRW5hYmxlZCh6b29tQ29udHJvbHNFbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRab29tR2VzdHVyZXNFbmFibGVkKHpvb21HZXN0dXJlc0VuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldEdlc3R1cmVTY2FsZUJ5TWFwQ2VudGVyKFxuICAgICAgICBnZXN0dXJlU2NhbGVCeU1hcENlbnRlckVuYWJsZWQ6IGJvb2xlYW5cbiAgICApOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldE1hcmtlckNsdXN0ZXJDb2xvcihtYXJrZXJDbHVzdGVyQ29sb3I6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0TWFya2VyQ2x1c3Rlckljb24obWFya2VyQ2x1c3Rlckljb246IEJpdG1hcERlc2NyaXB0b3IpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldE1hcmtlckNsdXN0ZXJUZXh0Q29sb3IobWFya2VyQ2x1c3RlclRleHRDb2xvcjogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRMb2dvUG9zaXRpb24obG9nb1Bvc2l0aW9uOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldExvZ29QYWRkaW5nKFxuICAgICAgICBwYWRkaW5nU3RhcnQ6IG51bWJlcixcbiAgICAgICAgcGFkZGluZ1RvcDogbnVtYmVyLFxuICAgICAgICBwYWRkaW5nRW5kOiBudW1iZXIsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IG51bWJlclxuICAgICk6IFByb21pc2U8dm9pZD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSHVhd2VpTWFwIHtcbiAgICBvbihldmVudDogTWFwRXZlbnQsIGNhbGxiYWNrOiAodmFsOiBhbnkpID0+IHZvaWQpOiBQcm9taXNlPHZvaWQ+O1xuICAgIGRlc3Ryb3lNYXAoKTogUHJvbWlzZTx2b2lkPjtcbiAgICBoaWRlTWFwKCk6IFByb21pc2U8dm9pZD47XG4gICAgZ2V0Q29tcG9uZW50KGtleTogc3RyaW5nKTogYW55O1xuICAgIHJlbW92ZUNvbXBvbmVudChrZXk6IHN0cmluZyk6IHZvaWQ7XG4gICAgZ2V0SWQoKTogbnVtYmVyO1xuICAgIHNjcm9sbCgpOiB2b2lkO1xuICAgIHN5bmNEaW1lbnNpb25zKCk6IHZvaWQ7XG4gICAgYWRkQ2lyY2xlKGNpcmNsZU9wdGlvbnM6IENpcmNsZU9wdGlvbnMpOiBQcm9taXNlPENpcmNsZT47XG4gICAgYWRkSGVhdE1hcChoZWF0TWFwT3B0aW9uczogSGVhdE1hcE9wdGlvbnMpOiBQcm9taXNlPEhlYXRNYXA+XG4gICAgYWRkTWFya2VyKG1hcmtlck9wdGlvbnM6IE1hcmtlck9wdGlvbnMpOiBQcm9taXNlPE1hcmtlcj47XG4gICAgYWRkR3JvdW5kT3ZlcmxheShcbiAgICAgICAgZ3JvdW5kT3ZlcmxheU9wdGlvbnM6IEdyb3VuZE92ZXJsYXlPcHRpb25zXG4gICAgKTogUHJvbWlzZTxHcm91bmRPdmVybGF5PjtcbiAgICBhZGRUaWxlT3ZlcmxheShcbiAgICAgICAgdGlsZU92ZXJsYXlPcHRpb25zOiBUaWxlT3ZlcmxheU9wdGlvbnNcbiAgICApOiBQcm9taXNlPFRpbGVPdmVybGF5PjtcbiAgICBhZGRQb2x5Z29uKHBvbHlnb25PcHRpb25zOiBQb2x5Z29uT3B0aW9ucyk6IFByb21pc2U8UG9seWdvbj47XG4gICAgYWRkUG9seWxpbmUocG9seWxpbmVPcHRpb25zOiBQb2x5bGluZU9wdGlvbnMpOiBQcm9taXNlPFBvbHlsaW5lPjtcbiAgICBhbmltYXRlQ2FtZXJhKGNhbWVyYVVwZGF0ZTogQ2FtZXJhVXBkYXRlKTogUHJvbWlzZTx2b2lkPjtcbiAgICBhbmltYXRlQ2FtZXJhKFxuICAgICAgICBjYW1lcmFVcGRhdGU6IENhbWVyYVVwZGF0ZSxcbiAgICAgICAgY2FuY2VsYWJsZUNhbGxiYWNrOiBDYW5jZWxhYmxlQ2FsbGJhY2tcbiAgICApOiBQcm9taXNlPHZvaWQ+O1xuICAgIGFuaW1hdGVDYW1lcmEoXG4gICAgICAgIGNhbWVyYVVwZGF0ZTogQ2FtZXJhVXBkYXRlLFxuICAgICAgICBjYW5jZWxhYmxlQ2FsbGJhY2s/OiBDYW5jZWxhYmxlQ2FsbGJhY2ssXG4gICAgICAgIGR1cmF0aW9uTXM/OiBudW1iZXJcbiAgICApOiBQcm9taXNlPHZvaWQ+O1xuICAgIG1vdmVDYW1lcmEoY2FtZXJhVXBkYXRlOiBDYW1lcmFVcGRhdGUpOiBQcm9taXNlPHZvaWQ+O1xuICAgIGNsZWFyKCk6IFByb21pc2U8dm9pZD47XG4gICAgcmVzZXRNaW5NYXhab29tUHJlZmVyZW5jZSgpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHN0b3BBbmltYXRpb24oKTogUHJvbWlzZTx2b2lkPjtcbiAgICBnZXRDYW1lcmFQb3NpdGlvbigpOiBQcm9taXNlPENhbWVyYVBvc2l0aW9uPjtcbiAgICBnZXRNYXBUeXBlKCk6IFByb21pc2U8TWFwVHlwZT47XG4gICAgZ2V0TWF4Wm9vbUxldmVsKCk6IFByb21pc2U8bnVtYmVyPjtcbiAgICBnZXRNaW5ab29tTGV2ZWwoKTogUHJvbWlzZTxudW1iZXI+O1xuICAgIGdldFByb2plY3Rpb24oKTogUHJvamVjdGlvbjtcbiAgICBnZXRVaVNldHRpbmdzKCk6IFVpU2V0dGluZ3M7XG4gICAgZ2V0U2NhbGVQZXJQaXhlbCgpOiBQcm9taXNlPG51bWJlcj47XG4gICAgZ2V0TXlMb2NhdGlvblN0eWxlKCk6IFByb21pc2U8TXlMb2NhdGlvblN0eWxlPjtcbiAgICBpc0J1aWxkaW5nc0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBpc0RhcmsoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBpc015TG9jYXRpb25FbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgaXNUcmFmZmljRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIGlzSW5kb29yRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIFxuICAgIHNldEJ1aWxkaW5nc0VuYWJsZWQoYnVpbGRpbmdzRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0RGFya0VuYWJsZWQoZGFya0VuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldENvbnRlbnREZXNjcmlwdGlvbihjb250ZW50RGVzY3JpcHRpb246IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0SW5mb1dpbmRvd0FkYXB0ZXIoaW5mb1dpbmRvd0FkYXB0ZXI6IEluZm9XaW5kb3dBZGFwdGVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRMYXRMbmdCb3VuZHNGb3JDYW1lcmFUYXJnZXQoXG4gICAgICAgIGxhdExuZ0JvdW5kc0ZvckNhbWVyYVRhcmdldDogTGF0TG5nQm91bmRzXG4gICAgKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRMb2NhdGlvblNvdXJjZShsb2NhdGlvblNvdXJjZTogTG9jYXRpb25Tb3VyY2UpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldE1hcFN0eWxlKG1hcFN0eWxlOiBNYXBTdHlsZU9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldE1hcFR5cGUobWFwVHlwZTogTWFwVHlwZSk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0TWFya2Vyc0NsdXN0ZXJpbmcobWFya2Vyc0NsdXN0ZXJpbmc6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldE1heFpvb21QcmVmZXJlbmNlKG1heFpvb21QcmVmZXJlbmNlOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldE1pblpvb21QcmVmZXJlbmNlKG1pblpvb21QcmVmZXJlbmNlOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldE15TG9jYXRpb25FbmFibGVkKG15TG9jYXRpb25FbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRQYWRkaW5nKFxuICAgICAgICBsZWZ0OiBudW1iZXIsXG4gICAgICAgIHRvcDogbnVtYmVyLFxuICAgICAgICByaWdodDogbnVtYmVyLFxuICAgICAgICBib3R0b206IG51bWJlclxuICAgICk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0VHJhZmZpY0VuYWJsZWQodHJhZmZpY0VuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNuYXBzaG90KFxuICAgICAgICBvblJlYWR5Q2FsbGJhY2s6IChzbmFwc2hvdDogU25hcHNob3RSZXN1bHQpID0+IHZvaWRcbiAgICApOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldE1hcFBvaW50ZXJzRW5hYmxlZChtYXBQb2ludGVyc0VuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuICAgIGlzTWFwUG9pbnRlcnNFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgc2V0UG9pbnRUb0NlbnRlcih4OiBudW1iZXIsIHk6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0U3R5bGVJZChzdHlsZUlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHByZXZpZXdJZChwcmV2aWV3SWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0TXlMb2NhdGlvblN0eWxlKHN0eWxlOiBNeUxvY2F0aW9uU3R5bGUpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVVwZGF0ZSB7XG4gICAgbW92ZUNhbWVyYShtYXBJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+O1xuICAgIGFuaW1hdGVDYW1lcmEobWFwSWQ6IHN0cmluZywgcHJvcHM6IGFueSk6IFByb21pc2U8YW55Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaXJjbGUge1xuICAgIGdldENlbnRlcigpOiBQcm9taXNlPExhdExuZz47XG4gICAgZ2V0RmlsbENvbG9yKCk6IFByb21pc2U8Q29sb3I+O1xuICAgIGdldElkKCk6IHN0cmluZztcbiAgICBnZXRSYWRpdXMoKTogUHJvbWlzZTxudW1iZXI+O1xuICAgIGdldFN0cm9rZUNvbG9yKCk6IFByb21pc2U8Q29sb3I+O1xuICAgIGdldFN0cm9rZVBhdHRlcm4oKTogUHJvbWlzZTxQYXR0ZXJuSXRlbVtdPjtcbiAgICBnZXRTdHJva2VXaWR0aCgpOiBQcm9taXNlPG51bWJlcj47XG4gICAgZ2V0VGFnKCk6IFByb21pc2U8YW55PjtcbiAgICBnZXRaSW5kZXgoKTogUHJvbWlzZTxudW1iZXI+O1xuICAgIGlzQ2xpY2thYmxlKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgaXNWaXNpYmxlKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgcmVtb3ZlKCk6IFByb21pc2U8dm9pZD47XG4gICAgc3RhcnRBbmltYXRpb24oKTogUHJvbWlzZTx2b2lkPjtcbiAgICBjbGVhckFuaW1hdGlvbigpOiBQcm9taXNlPGJvb2xlYW4+OyBcbiAgICBzZXRDZW50ZXIoY2VudGVyOiBMYXRMbmcpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldEZpbGxDb2xvcihmaWxsQ29sb3I6IENvbG9yKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRSYWRpdXMocmFkaXVzOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFN0cm9rZUNvbG9yKHN0cm9rZUNvbG9yOiBDb2xvcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0U3Ryb2tlUGF0dGVybihzdHJva2VQYXR0ZXJuOiBQYXR0ZXJuSXRlbVtdKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRTdHJva2VXaWR0aChzdHJva2VXaWR0aDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRUYWcodGFnOiBhbnkpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFpJbmRleCh6SW5kZXg6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0Q2xpY2thYmxlKGNsaWNrYWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRBbmltYXRpb24oYW5pbWF0aW9uOiBBbmltYXRpb25TZXQpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhlYXRNYXAge1xuXG4gICAgZ2V0SWQoKTogc3RyaW5nO1xuICAgIHJlbW92ZSgpOiBQcm9taXNlPHZvaWQ+O1xuICAgIGNoYW5nZURhdGFTZXQoanNvbkRhdGE6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG4gICAgY2hhbmdlRGF0YVNldElkKHJlc291cmNlSWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgZ2V0UmFkaXVzVW5pdCgpOiBQcm9taXNlPFJhZGl1c1VuaXQ+O1xuICAgIHNldFJhZGl1c1VuaXQocmFkaXVzVW5pdDogUmFkaXVzVW5pdCk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0Q29sb3IoY29sb3I6IE1hcDxudW1iZXIsIE51bWJlcltdPik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0SW50ZW5zaXR5KGludGVuc2l0eTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRJbnRlbnNpdGllcyhpbnRlbnNpdGllczogTWFwPG51bWJlciwgbnVtYmVyPik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0T3BhY2l0eShvcGFjaXR5OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldE9wYWNpdGllcyhPcGFjaXRpZXM6IE1hcDxudW1iZXIsIG51bWJlcj4pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFJhZGl1cyhyYWRpdXM6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0UmFkaXVzZXMocmFkaXVzZXM6IE1hcDxudW1iZXIsIG51bWJlcj4pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHcm91bmRPdmVybGF5IHtcbiAgICBnZXRCZWFyaW5nKCk6IFByb21pc2U8bnVtYmVyPjtcbiAgICBnZXRCb3VuZHMoKTogUHJvbWlzZTxMYXRMbmdCb3VuZHM+O1xuICAgIGdldEhlaWdodCgpOiBQcm9taXNlPG51bWJlcj47XG4gICAgZ2V0SWQoKTogc3RyaW5nO1xuICAgIGdldFBvc2l0aW9uKCk6IFByb21pc2U8TGF0TG5nPjtcbiAgICBnZXRUYWcoKTogUHJvbWlzZTxhbnk+O1xuICAgIGdldFRyYW5zcGFyZW5jeSgpOiBQcm9taXNlPG51bWJlcj47XG4gICAgZ2V0V2lkdGgoKTogUHJvbWlzZTxudW1iZXI+O1xuICAgIGdldFpJbmRleCgpOiBQcm9taXNlPG51bWJlcj47XG4gICAgaXNDbGlja2FibGUoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBpc1Zpc2libGUoKTogUHJvbWlzZTxib29sZWFuPjtcblxuICAgIHJlbW92ZSgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgc2V0QmVhcmluZyhiZWFyaW5nOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldENsaWNrYWJsZShjbGlja2FibGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldERpbWVuc2lvbnMod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldERpbWVuc2lvbnMod2lkdGg6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0SW1hZ2UoaW1hZ2VEZXNjcmlwdG9yOiBCaXRtYXBEZXNjcmlwdG9yKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRQb3NpdGlvbihwb3NpdGlvbjogTGF0TG5nKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRQb3NpdGlvbkZyb21Cb3VuZHMocG9zaXRpb25MYXRMbmdCb3VuZHM6IExhdExuZ0JvdW5kcyk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0VGFnKHRhZzogYW55KTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRUcmFuc3BhcmVuY3kodHJhbnNwYXJlbmN5OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0WkluZGV4KHpJbmRleDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXJrZXIge1xuICAgIGdldEFscGhhKCk6IFByb21pc2U8bnVtYmVyPjtcbiAgICBnZXRJZCgpOiBzdHJpbmc7XG4gICAgZ2V0UG9zaXRpb24oKTogUHJvbWlzZTxMYXRMbmc+O1xuICAgIGdldFJvdGF0aW9uKCk6IFByb21pc2U8bnVtYmVyPjtcbiAgICBnZXRTbmlwcGV0KCk6IFByb21pc2U8c3RyaW5nPjtcbiAgICBnZXRUYWcoKTogUHJvbWlzZTxhbnk+O1xuICAgIGdldFRpdGxlKCk6IFByb21pc2U8c3RyaW5nPjtcbiAgICBnZXRaSW5kZXgoKTogUHJvbWlzZTxudW1iZXI+O1xuICAgIGlzVmlzaWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIGlzQ2x1c3RlcmFibGUoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBpc0RyYWdnYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIGlzRmxhdCgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIGlzSW5mb1dpbmRvd1Nob3duKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgaXNDbGlja2FibGUoKTogUHJvbWlzZTxib29sZWFuPjtcblxuICAgIHJlbW92ZSgpOiBQcm9taXNlPHZvaWQ+O1xuICAgIGhpZGVJbmZvV2luZG93KCk6IFByb21pc2U8dm9pZD47XG4gICAgc2hvd0luZm9XaW5kb3coKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzdGFydEFuaW1hdGlvbigpOiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgc2V0QWxwaGEoYWxwaGE6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0QW5pbWF0aW9uKGFuaW1hdGlvbjogQW5pbWF0aW9uU2V0KTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXREcmFnZ2FibGUoZHJhZ2dhYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRGbGF0KGZsYXQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldEljb24oaWNvbjogQml0bWFwRGVzY3JpcHRvcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0SW5mb1dpbmRvd0FuY2hvcih1OiBudW1iZXIsIHY6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0TWFya2VyQW5jaG9yKHU6IG51bWJlciwgdjogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRQb3NpdGlvbihsYXRMbmc6IExhdExuZyk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0Um90YXRpb24ocm90YXRpb246IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0U25pcHBldChzbmlwcGV0OiBTdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFRhZyh0YWc6IGFueSk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRaSW5kZXgoekluZGV4OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldENsaWNrYWJsZShjbGlja2FibGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvbHlnb24ge1xuICAgIGdldEZpbGxDb2xvcigpOiBQcm9taXNlPENvbG9yPjtcbiAgICBnZXRIb2xlcygpOiBQcm9taXNlPExhdExuZ1tdW10+O1xuICAgIGdldElkKCk6IHN0cmluZztcbiAgICBnZXRQb2ludHMoKTogUHJvbWlzZTxMYXRMbmdbXT47XG4gICAgZ2V0U3Ryb2tlQ29sb3IoKTogUHJvbWlzZTxDb2xvcj47XG4gICAgZ2V0U3Ryb2tlSm9pbnRUeXBlKCk6IFByb21pc2U8Sm9pbnRUeXBlPjtcbiAgICBnZXRTdHJva2VQYXR0ZXJuKCk6IFByb21pc2U8UGF0dGVybkl0ZW1bXT47XG4gICAgZ2V0U3Ryb2tlV2lkdGgoKTogUHJvbWlzZTxudW1iZXI+O1xuICAgIGdldFRhZygpOiBQcm9taXNlPGFueT47XG4gICAgZ2V0WkluZGV4KCk6IFByb21pc2U8bnVtYmVyPjtcbiAgICBpc0NsaWNrYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIGlzVmlzaWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIGlzR2VvZGVzaWMoKTogUHJvbWlzZTxib29sZWFuPjtcblxuICAgIHJlbW92ZSgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgc2V0Q2xpY2thYmxlKGNsaWNrYWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0RmlsbENvbG9yKGNvbG9yOiBDb2xvcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0R2VvZGVzaWMoZ2VvZGVzaWM6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldEhvbGVzKGhvbGVzOiBMYXRMbmdbXVtdKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRQb2ludHMocG9pbnRzOiBMYXRMbmdbXSk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0U3Ryb2tlQ29sb3IoY29sb3I6IENvbG9yKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRTdHJva2VKb2ludFR5cGUoam9pbnRUeXBlOiBKb2ludFR5cGUpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFN0cm9rZVBhdHRlcm4ocGF0dGVybkl0ZW06IFBhdHRlcm5JdGVtW10pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFN0cm9rZVdpZHRoKHdpZHRoOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFRhZyh0YWc6IGFueSk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRaSW5kZXgoekluZGV4OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvbHlsaW5lIHtcbiAgICBnZXRDb2xvcigpOiBQcm9taXNlPENvbG9yPjtcbiAgICBnZXRFbmRDYXAoKTogUHJvbWlzZTxDYXA+O1xuICAgIGdldFN0YXJ0Q2FwKCk6IFByb21pc2U8Q2FwPjtcbiAgICBnZXRJZCgpOiBzdHJpbmc7XG4gICAgZ2V0Sm9pbnRUeXBlKCk6IFByb21pc2U8Sm9pbnRUeXBlPjtcbiAgICBnZXRQYXR0ZXJuKCk6IFByb21pc2U8UGF0dGVybkl0ZW1bXT47XG4gICAgZ2V0UG9pbnRzKCk6IFByb21pc2U8TGF0TG5nW10+O1xuICAgIGdldFRhZygpOiBQcm9taXNlPGFueT47XG4gICAgZ2V0V2lkdGgoKTogUHJvbWlzZTxudW1iZXI+O1xuICAgIGdldFpJbmRleCgpOiBQcm9taXNlPG51bWJlcj47XG4gICAgaXNDbGlja2FibGUoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBpc0dlb2Rlc2ljKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgaXNWaXNpYmxlKCk6IFByb21pc2U8Ym9vbGVhbj47XG5cbiAgICByZW1vdmUoKTogUHJvbWlzZTx2b2lkPjtcblxuICAgIHNldENsaWNrYWJsZShjbGlja2FibGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldENvbG9yKGNvbG9yOiBDb2xvcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0U3RhcnRDYXAoc3RhcnRDYXA6IENhcCk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0RW5kQ2FwKGVuZENhcDogQ2FwKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRHZW9kZXNpYyhnZW9kZXNpYzogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0Sm9pbnRUeXBlKGpvaW50VHlwZTogSm9pbnRUeXBlKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRQYXR0ZXJuKHBhdHRlcm46IFBhdHRlcm5JdGVtW10pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFBvaW50cyhwb2ludHM6IExhdExuZ1tdKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRUYWcodGFnOiBhbnkpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0V2lkdGgod2lkdGg6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0WkluZGV4KHpJbmRleDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRHcmFkaWVudChvbjogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0Q29sb3JWYWx1ZXMoY29sb3JzOiBDb2xvcltdKTogUHJvbWlzZTx2b2lkPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaWxlT3ZlcmxheSB7XG4gICAgZ2V0RmFkZUluKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgZ2V0SWQoKTogc3RyaW5nO1xuICAgIGdldFRyYW5zcGFyZW5jeSgpOiBQcm9taXNlPG51bWJlcj47XG4gICAgZ2V0WkluZGV4KCk6IFByb21pc2U8bnVtYmVyPjtcbiAgICBpc1Zpc2libGUoKTogUHJvbWlzZTxib29sZWFuPjtcblxuICAgIHJlbW92ZSgpOiBQcm9taXNlPHZvaWQ+O1xuICAgIGNsZWFyVGlsZUNhY2hlKCk6IFByb21pc2U8dm9pZD47XG5cbiAgICBzZXRGYWRlSW4oZmFkZUluOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRUcmFuc3BhcmVuY3kodHJhbnNwYXJlbmN5OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFpJbmRleCh6SW5kZXg6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0aW9uIHtcbiAgICBmcm9tU2NyZWVuTG9jYXRpb24ocG9pbnQ6IFBvaW50KTogUHJvbWlzZTxMYXRMbmc+O1xuICAgIGdldFZpc2libGVSZWdpb24oKTogUHJvbWlzZTxWaXNpYmxlUmVnaW9uPjtcbiAgICB0b1NjcmVlbkxvY2F0aW9uKGxhdExuZzogTGF0TG5nKTogUHJvbWlzZTxQb2ludD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFwQm91bmRzIHtcbiAgICBtYXJnaW5Ub3A/OiBudW1iZXI7XG4gICAgbWFyZ2luQm90dG9tPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEh1YXdlaU1hcE9wdGlvbnMge1xuICAgIG1hcFR5cGU/OiBNYXBUeXBlO1xuICAgIHpvb21Db250cm9sc0VuYWJsZWQ/OiBib29sZWFuO1xuICAgIGNvbXBhc3NFbmFibGVkPzogYm9vbGVhbjtcbiAgICB6b29tR2VzdHVyZXNFbmFibGVkPzogYm9vbGVhbjtcbiAgICBzY3JvbGxHZXN0dXJlc0VuYWJsZWQ/OiBib29sZWFuO1xuICAgIHJvdGF0ZUdlc3R1cmVzRW5hYmxlZD86IGJvb2xlYW47XG4gICAgdGlsdEdlc3R1cmVzRW5hYmxlZD86IGJvb2xlYW47XG4gICAgek9yZGVyT25Ub3A/OiBib29sZWFuO1xuICAgIGxpdGVNb2RlPzogYm9vbGVhbjtcbiAgICBpc0Rhcms/OiBib29sZWFuO1xuICAgIGFtYmllbnRFbmFibGVkPzogYm9vbGVhbjtcbiAgICBtaW5ab29tUHJlZmVyZW5jZT86IG51bWJlcjtcbiAgICBtYXhab29tUHJlZmVyZW5jZT86IG51bWJlcjtcbiAgICBjYW1lcmFQb3NpdGlvbj86IENhbWVyYVBvc2l0aW9uO1xuICAgIGxhdExuZ0JvdW5kcz86IExhdExuZ0JvdW5kcztcbiAgICBzdHlsZUlkPzogc3RyaW5nO1xuICAgIHByZXZpZXdJZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvbiB7XG4gICAgYWNjdXJhY3k6IG51bWJlcjtcbiAgICBhbHRpdHVkZTogbnVtYmVyO1xuICAgIGJlYXJpbmc6IG51bWJlcjtcbiAgICBlbGFwc2VkUmVhbHRpbWVOYW5vczogbnVtYmVyO1xuICAgIGxhdGl0dWRlOiBudW1iZXI7XG4gICAgbG9uZ2l0dWRlOiBudW1iZXI7XG4gICAgcHJvdmlkZXI6IHN0cmluZztcbiAgICBzcGVlZDogbnVtYmVyO1xuICAgIHRpbWU6IG51bWJlcjtcbiAgICBmcm9tTW9ja1Byb3ZpZGVyOiBib29sZWFuO1xuICAgIGNvbnRlbnRzOiBudW1iZXI7XG4gICAgYmVhcmluZ0FjY3VyYWN5RGVncmVlcz86IG51bWJlcjtcbiAgICBzcGVlZEFjY3VyYWN5TWV0ZXJzUGVyU2Vjb25kPzogbnVtYmVyO1xuICAgIHZlcnRpY2FsQWNjdXJhY3lNZXRlcnM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF0TG5nQm91bmRzIHtcbiAgICBzb3V0aHdlc3Q6IExhdExuZztcbiAgICBub3J0aGVhc3Q6IExhdExuZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYW1lcmFQb3NpdGlvbiB7XG4gICAgdGFyZ2V0OiBMYXRMbmc7XG4gICAgem9vbT86IG51bWJlcjtcbiAgICBiZWFyaW5nPzogbnVtYmVyO1xuICAgIHRpbHQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF0TG5nIHtcbiAgICBsYXQ6IG51bWJlcjtcbiAgICBsbmc6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYXRMbmdPYmoge1xuICAgIGxhdExuZzogTGF0TG5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhdExuZ0xpc3RPYmoge1xuICAgIGxhdExuZ0xpc3Q6IExhdExuZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENpcmNsZU9wdGlvbnMge1xuICAgIGNlbnRlcjogTGF0TG5nO1xuICAgIGNsaWNrYWJsZT86IGJvb2xlYW47XG4gICAgZmlsbENvbG9yPzogQ29sb3I7XG4gICAgcmFkaXVzOiBudW1iZXI7XG4gICAgc3Ryb2tlQ29sb3I/OiBDb2xvcjtcbiAgICBzdHJva2VXaWR0aD86IG51bWJlcjtcbiAgICBzdHJva2VQYXR0ZXJuPzogUGF0dGVybkl0ZW1bXTtcbiAgICB2aXNpYmxlPzogYm9vbGVhbjtcbiAgICB6SW5kZXg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVhdE1hcE9wdGlvbnMge1xuICAgIGlkPzogc3RyaW5nO1xuICAgIGNvbG9yPzogTWFwPG51bWJlciwgTnVtYmVyW10+O1xuICAgIGRhdGFzZXQ6IFN0cmluZztcbiAgICByZXNvdXJjZUlkPzogbnVtYmVyO1xuICAgIGpzb25EYXRhPzogU3RyaW5nO1xuICAgIGludGVuc2l0eT86IG51bWJlcjtcbiAgICBpbnRlbnNpdGllcz86IE1hcDxudW1iZXIsIG51bWJlcj4gfCB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9O1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gICAgb3BhY2l0aWVzPzogTWFwPG51bWJlciwgbnVtYmVyPiB8IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH07XG4gICAgcmFkaXVzPzogbnVtYmVyO1xuICAgIHJhZGl1c2VzPzogTWFwPG51bWJlciwgbnVtYmVyPiB8IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH07XG4gICAgcmFkaXVzVW5pdD86IFJhZGl1c1VuaXQ7XG59XG5cbmV4cG9ydCBlbnVtIFJhZGl1c1VuaXQge1xuICAgIFBJWEVMID0gXCJwaXhlbFwiLFxuICAgIE1FVEVSID0gXCJtZXRlclwiLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBPSSB7XG4gICAgbGF0TG5nOiBMYXRMbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBwbGFjZUlkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhdHRlcm5JdGVtIHtcbiAgICB0eXBlOiBQYXR0ZXJuSXRlbVR5cGU7XG4gICAgbGVuZ3RoOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFya2VyT3B0aW9ucyB7XG4gICAgYW5jaG9yTWFya2VyPzogQW5jaG9yO1xuICAgIGluZm9XaW5kb3dBbmNob3I/OiBBbmNob3I7XG4gICAgaW5mb1dpbmRvd1Nob3duPzogYm9vbGVhbjtcbiAgICBhbHBoYT86IG51bWJlcjtcbiAgICBjbHVzdGVyYWJsZT86IGJvb2xlYW47XG4gICAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcbiAgICBpY29uPzogQml0bWFwRGVzY3JpcHRvcjtcbiAgICBmbGF0PzogYm9vbGVhbjtcbiAgICBwb3NpdGlvbjogTGF0TG5nO1xuICAgIHJvdGF0aW9uPzogbnVtYmVyO1xuICAgIHNuaXBwZXQ/OiBzdHJpbmc7XG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgdmlzaWJsZT86IGJvb2xlYW47XG4gICAgekluZGV4PzogbnVtYmVyO1xuICAgIGNsaWNrYWJsZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NhbGVkU2l6ZSB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBc3NldCB7XG4gICAgZmlsZU5hbWU6IHN0cmluZztcbiAgICBzY2FsZWRTaXplPzogU2NhbGVkU2l6ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNvdXJjZSB7XG4gICAgZmlsZU5hbWU6IHN0cmluZztcbiAgICByZXNvdXJjZVR5cGU6IHN0cmluZztcbiAgICBzY2FsZWRTaXplPzogU2NhbGVkU2l6ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCaXRtYXBEZXNjcmlwdG9yIHtcbiAgICBodWU/OiBIdWU7XG4gICAgYXNzZXQ/OiBBc3NldDtcbiAgICByZXNvdXJjZT86IFJlc291cmNlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFuY2hvciB7XG4gICAgdT86IG51bWJlcjtcbiAgICB2PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvbHlnb25PcHRpb25zIHtcbiAgICBwb2ludHM6IExhdExuZ1tdO1xuICAgIGhvbGVzPzogTGF0TG5nW11bXTtcbiAgICBjbGlja2FibGU/OiBib29sZWFuO1xuICAgIGdlb2Rlc2ljPzogYm9vbGVhbjtcbiAgICBmaWxsQ29sb3I/OiBDb2xvcjtcbiAgICBzdHJva2VDb2xvcj86IENvbG9yO1xuICAgIHN0cm9rZUpvaW50VHlwZT86IEpvaW50VHlwZTtcbiAgICBzdHJva2VQYXR0ZXJuPzogUGF0dGVybkl0ZW1bXTtcbiAgICBzdHJva2VXaWR0aD86IG51bWJlcjtcbiAgICB2aXNpYmxlPzogdHJ1ZTtcbiAgICB6SW5kZXg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9seWxpbmVPcHRpb25zIHtcbiAgICBwb2ludHM6IExhdExuZ1tdO1xuICAgIGNsaWNrYWJsZT86IGJvb2xlYW47XG4gICAgY29sb3I/OiBDb2xvcjtcbiAgICBzdGFydENhcD86IENhcDtcbiAgICBwYXR0ZXJuPzogUGF0dGVybkl0ZW1bXTtcbiAgICBlbmRDYXA/OiBDYXA7XG4gICAgZ2VvZGVzaWM/OiBib29sZWFuO1xuICAgIGpvaW50VHlwZT86IEpvaW50VHlwZTtcbiAgICB2aXNpYmxlPzogYm9vbGVhbjtcbiAgICB3aWR0aD86IG51bWJlcjtcbiAgICB6SW5kZXg/OiBudW1iZXI7XG4gICAgZ3JhZGllbnQ/OiBib29sZWFuO1xuICAgIGNvbG9yVmFsdWVzPzogQ29sb3JbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHcm91bmRPdmVybGF5T3B0aW9ucyB7XG4gICAgYW5jaG9yPzogQW5jaG9yO1xuICAgIGJlYXJpbmc/OiBudW1iZXI7XG4gICAgY2xpY2thYmxlPzogYm9vbGVhbjtcbiAgICBpbWFnZT86IEJpdG1hcERlc2NyaXB0b3I7XG4gICAgdmlzaWJsZT86IGJvb2xlYW47XG4gICAgdHJhbnNwYXJlbmN5PzogbnVtYmVyO1xuICAgIHpJbmRleD86IG51bWJlcjtcbiAgICBwb3NpdGlvbjogUG9zaXRpb247XG4gICAgYm91bmRzPzogTGF0TG5nQm91bmRzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvc2l0aW9uIHtcbiAgICBsYXRMbmc6IExhdExuZztcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVUkxUaWxlIHtcbiAgICBVUkw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaWxlIHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgem9vbTogbnVtYmVyO1xuICAgIHBhdGg6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXBldGl0aXZlVGlsZSB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICB6b29tOiBudW1iZXJbXTtcbiAgICBwYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGlsZVByb3ZpZGVyIHtcbiAgICB0eXBlOiBUaWxlVHlwZTtcbiAgICBkYXRhOiBUaWxlW10gfCBVUkxUaWxlIHwgUmVwZXRpdGl2ZVRpbGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGlsZU92ZXJsYXlPcHRpb25zIHtcbiAgICB0aWxlUHJvdmlkZXI6IFRpbGVQcm92aWRlcjtcbiAgICBmYWRlSW4/OiBib29sZWFuO1xuICAgIHRyYW5zcGFyZW5jeT86IG51bWJlcjtcbiAgICB2aXNpYmxlPzogYm9vbGVhbjtcbiAgICB6SW5kZXg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5pbWF0aW9uIHtcbiAgICBmaWxsTW9kZT86IG51bWJlcjtcbiAgICBkdXJhdGlvbj86IG51bWJlcjtcbiAgICByZXBlYXRDb3VudD86IG51bWJlcjtcbiAgICByZXBlYXRNb2RlPzogbnVtYmVyO1xuICAgIGludGVycG9sYXRvcj86IEludGVycG9sYXRvcjtcbiAgICBhbmltYXRpb25TdGFydD86ICgpID0+IHZvaWQ7XG4gICAgYW5pbWF0aW9uRW5kPzogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3RhdGVBbmltYXRpb24gZXh0ZW5kcyBBbmltYXRpb24ge1xuICAgIGZyb21EZWdyZWU6IG51bWJlcjtcbiAgICB0b0RlZ3JlZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjYWxlQW5pbWF0aW9uIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgICBmcm9tWDogbnVtYmVyO1xuICAgIHRvWDogbnVtYmVyO1xuICAgIGZyb21ZOiBudW1iZXI7XG4gICAgdG9ZOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNsYXRlQW5pbWF0aW9uIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgICB0YXJnZXQ6IExhdExuZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbHBoYUFuaW1hdGlvbiBleHRlbmRzIEFuaW1hdGlvbiB7XG4gICAgZnJvbUFscGhhOiBudW1iZXI7XG4gICAgdG9BbHBoYTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbmNlbGFibGVDYWxsYmFjayB7XG4gICAgb25GaW5pc2g6ICgpID0+IHZvaWQ7XG4gICAgb25DYW5jZWw6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5mb1dpbmRvd0FkYXB0ZXIge1xuICAgIGZpbGU6IHN0cmluZztcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uU291cmNlIHsgfVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXB1dGVEaXN0YW5jZVJlc3VsdCB7XG4gICAgcmVzdWx0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU25hcHNob3RSZXN1bHQge1xuICAgIGRhdGE6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWaXNpYmxlUmVnaW9uIHtcbiAgICBmYXJMZWZ0OiBMYXRMbmc7XG4gICAgZmFyUmlnaHQ6IExhdExuZztcbiAgICBsYXRMbmdCb3VuZHM6IExhdExuZ0JvdW5kcztcbiAgICBuZWFyTGVmdDogTGF0TG5nO1xuICAgIG5lYXJSaWdodDogTGF0TG5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEludGVycG9sYXRvciB7XG4gICAgdHlwZTogSW50ZXJwb2xhdG9yVHlwZTtcbiAgICBhcmdzPzogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE15TG9jYXRpb25TdHlsZSB7XG4gICAgYW5jaG9yOiBBbmNob3I7XG4gICAgbXlMb2NhdGlvbkljb246IEJpdG1hcERlc2NyaXB0b3I7XG4gICAgcmFkaXVzRmlsbENvbG9yOiBudW1iZXI7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUVOVU1TLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgZW51bSBUaWxlVHlwZSB7XG4gICAgVVJMX1RJTEUsXG4gICAgUkVQRVRJVElWRV9USUxFLFxuICAgIExPQ0FMX1RJTEUsXG59XG5cbmV4cG9ydCBlbnVtIENvbG9yIHtcbiAgICBSRUQgPSAtNjU1MzYsXG4gICAgREFSS19HUkFZID0gLTEyMzAzMjkyLFxuICAgIEdSQVkgPSAtNzgyOTM2OCxcbiAgICBXSElURSA9IC0xLFxuICAgIEJMVUUgPSAtMTY3NzY5NjEsXG4gICAgQkxBQ0sgPSAtMTY3NzcyMTYsXG4gICAgTElURV9HUkFZID0gLTMzNTU0NDQsXG4gICAgTUFHRU5UQSA9IC02NTI4MSxcbiAgICBZRUxMT1cgPSAtMjU2LFxuICAgIENZQU4gPSAtMTY3MTE2ODEsXG4gICAgR1JFRU4gPSAtMTY3MTE5MzYsXG4gICAgVFJBTlNQQVJFTlQgPSAwLFxufVxuXG5leHBvcnQgZW51bSBKb2ludFR5cGUge1xuICAgIFJPVU5EID0gMixcbiAgICBCRVZFTCA9IDEsXG4gICAgREVGQVVMVCA9IDAsXG59XG5cbmV4cG9ydCBlbnVtIE1hcEV2ZW50IHtcbiAgICBPTl9JTkRPT1JfQlVJTERJTkdTX0ZPQ1VTRUQgPSBcIm9uSW5kb29yQnVpbGRpbmdzRm9jdXNlZFwiLFxuICAgIE9OX0lORE9PUl9MRVZFTF9BQ1RJVkFURUQgPSBcIm9uSW5kb29yTGV2ZWxBY3RpdmF0ZWRcIixcbiAgICBPTl9NQVBfTE9BREVEID0gXCJvbk1hcExvYWRlZFwiLFxuICAgIE9OX0NBTUVSQV9JRExFID0gXCJvbkNhbWVyYUlkbGVcIixcbiAgICBPTl9DQU1FUkFfTU9WRV9DQU5DRUxFRCA9IFwib25DYW1lcmFNb3ZlQ2FuY2VsZWRcIixcbiAgICBPTl9DQU1FUkFfTU9WRSA9IFwib25DYW1lcmFNb3ZlXCIsXG4gICAgT05fQ0FNRVJBX01PVkVfU1RBUlRFRCA9IFwib25DYW1lcmFNb3ZlU3RhcnRlZFwiLFxuICAgIE9OX0NJUkNMRV9DTElDSyA9IFwib25DaXJjbGVDbGlja1wiLFxuICAgIE9OX0dST1VORF9PVkVSTEFZX0NMSUNLID0gXCJvbkdyb3VuZE92ZXJsYXlDbGlja1wiLFxuICAgIE9OX0lORk9fV0lORE9XX0NMSUNLID0gXCJvbkluZm9XaW5kb3dDbGlja1wiLFxuICAgIE9OX0lORk9fV0lORE9XX0NMT1NFID0gXCJvbkluZm9XaW5kb3dDbG9zZVwiLFxuICAgIE9OX0lORk9fV0lORE9XX0xPTkdfQ0xJQ0sgPSBcIm9uSW5mb1dpbmRvd0xvbmdDbGlja1wiLFxuICAgIE9OX01BUF9DTElDSyA9IFwib25NYXBDbGlja1wiLFxuICAgIE9OX01BUF9MT05HX0NMSUNLID0gXCJvbk1hcExvbmdDbGlja1wiLFxuICAgIE9OX01BUktFUl9DTElDSyA9IFwib25NYXJrZXJDbGlja1wiLFxuICAgIE9OX01BUktFUl9EUkFHX1NUQVJUID0gXCJvbk1hcmtlckRyYWdTdGFydFwiLFxuICAgIE9OX01BUktFUl9EUkFHID0gXCJvbk1hcmtlckRyYWdcIixcbiAgICBPTl9NQVJLRVJfRFJBR19FTkQgPSBcIm9uTWFya2VyRHJhZ0VuZFwiLFxuICAgIE9OX01ZX0xPQ0FUSU9OX0JVVFRPTl9DTElDSyA9IFwib25NeUxvY2F0aW9uQnV0dG9uQ2xpY2tcIixcbiAgICBPTl9NWV9MT0NBVElPTl9DTElDSyA9IFwib25NeUxvY2F0aW9uQ2xpY2tcIixcbiAgICBPTl9QT0lfQ0xJQ0sgPSBcIm9uUG9pQ2xpY2tcIixcbiAgICBPTl9QT0xZR09OX0NMSUNLID0gXCJvblBvbHlnb25DbGlja1wiLFxuICAgIE9OX1BPTFlMSU5FX0NMSUNLID0gXCJvblBvbHlsaW5lQ2xpY2tcIixcbiAgICBPTl9DQU5DRUxBQkxFX0NBTExCQUNLX0ZJTklTSCA9IFwib25DYW5jZWxhYmxlQ2FsbGJhY2tGaW5pc2hcIixcbiAgICBPTl9DQU5DRUxBQkxFX0NBTExCQUNLX0NBTkNFTCA9IFwib25DYW5jZWxhYmxlQ2FsbGJhY2tDYW5jZWxcIixcbiAgICBPTl9TTkFQU0hPVF9SRUFEWV9DQUxMQkFDSyA9IFwib25TbmFwc2hvdFJlYWR5Q2FsbGJhY2tcIixcbn1cblxuZXhwb3J0IGVudW0gTWFwVHlwZSB7XG4gICAgTUFQX1RZUEVfTk9ORSA9IDAsXG4gICAgTUFQX1RZUEVfU0FURUxMSVRFID0gMixcbiAgICBNQVBfVFlQRV9OT1JNQUwgPSAxLFxuICAgIE1BUF9UWVBFX0hZQlJJRCA9IDQsXG4gICAgTUFQX1RZUEVfVEVSUkFJTiA9IDMsXG59XG5cbmV4cG9ydCBlbnVtIEh1ZSB7XG4gICAgSFVFX0dSRUVOID0gMTIwLFxuICAgIEhVRV9BWlVSRSA9IDIxMCxcbiAgICBIVUVfUk9TRSA9IDMzMCxcbiAgICBIVUVfQ1lBTiA9IDE4MCxcbiAgICBIVUVfT1JBTkdFID0gMzAsXG4gICAgSFVFX01BR0VOVEEgPSAzMDAsXG4gICAgSFVFX1ZJT0xFVCA9IDI3MCxcbiAgICBIVUVfWUVMTE9XID0gNjAsXG4gICAgSFVFX0JMVUUgPSAyNDAsXG4gICAgSFVFX1JFRCA9IDAsXG59XG5cbmV4cG9ydCBlbnVtIFBhdHRlcm5JdGVtVHlwZSB7XG4gICAgVFlQRV9HQVAgPSAyLFxuICAgIFRZUEVfRE9UID0gMSxcbiAgICBUWVBFX0RBU0ggPSAwLFxufVxuXG5leHBvcnQgZW51bSBDYW1lcmFNb3ZlU3RhcnRlZFJlYXNvbiB7XG4gICAgUkVBU09OX0FQSV9BTklNQVRJT04gPSAyLFxuICAgIFJFQVNPTl9ERVZFTE9QRVJfQU5JTUFUSU9OID0gMyxcbiAgICBSRUFTT05fR0VTVFVSRSA9IDEsXG59XG5cbmV4cG9ydCBlbnVtIEludGVycG9sYXRvclR5cGUge1xuICAgIExJTkVBUixcbiAgICBBQ0NFTEVSQVRFX0RFQ0VMRVJBVEUsXG4gICAgQUNDRUxFUkFURSxcbiAgICBBTlRJQ0lQQVRFLFxuICAgIEFOVElDSVBBVEVfT1ZFUlNIT09ULFxuICAgIEJPVU5DRSxcbiAgICBDWUNMRSxcbiAgICBERUNFTEVSQVRFLFxuICAgIE9WRVJTSE9PVCxcbiAgICBQQVRILFxufVxuXG5leHBvcnQgZW51bSBBbmltYXRpb25Db25zdGFudCB7XG4gICAgRklMTF9NT0RFX0ZPUldBUkRTID0gMCxcbiAgICBGSUxMX01PREVfQkFDS1dBUkRTID0gMSxcbiAgICBJTkZJTklURSA9IC0xLFxuICAgIFJFU1RBUlQgPSAxLFxuICAgIFJFVkVSU0UgPSAyLFxufVxuXG5leHBvcnQgZW51bSBHcmF2aXR5IHtcbiAgICBUT1AgPSA0OCxcbiAgICBCT1RUT00gPSA4MCxcbiAgICBTVEFSVCA9IDgzODg2MTEsXG4gICAgRU5EID0gODM4ODYxMyxcbn0iXX0=