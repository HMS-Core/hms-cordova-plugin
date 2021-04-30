/*
    Copyright 2020-2021. Huawei Technologies Co., Ltd. All rights reserved.

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
var HMSMapOriginal = /** @class */ (function (_super) {
    __extends(HMSMapOriginal, _super);
    function HMSMapOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSMapOriginal.prototype.getMap = function (divId, huaweiMapOptions, bounds) { return cordova(this, "getMap", { "otherPromise": true }, arguments); };
    HMSMapOriginal.prototype.showMap = function (divId) { return cordova(this, "showMap", { "otherPromise": true }, arguments); };
    HMSMapOriginal.prototype.hasPermission = function () { return cordova(this, "hasPermission", { "otherPromise": true }, arguments); };
    HMSMapOriginal.prototype.requestPermission = function () { return cordova(this, "requestPermission", { "otherPromise": true }, arguments); };
    HMSMapOriginal.prototype.computeDistanceBetween = function (from, to) { return cordova(this, "computeDistanceBetween", { "otherPromise": true }, arguments); };
    HMSMapOriginal.prototype.setApiKey = function (apiKey) { return cordova(this, "setApiKey", { "otherPromise": true }, arguments); };
    HMSMapOriginal.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSMapOriginal.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HMSMapOriginal.pluginName = "HMSMap";
    HMSMapOriginal.plugin = "cordova-plugin-hms-map";
    HMSMapOriginal.pluginRef = "HMSMap";
    HMSMapOriginal.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSMapOriginal.platforms = ["Android"];
    return HMSMapOriginal;
}(IonicNativePlugin));
var HMSMap = new HMSMapOriginal();
export { HMSMap };
var CameraUpdateFactory = /** @class */ (function () {
    function CameraUpdateFactory() {
    }
    CameraUpdateFactory.newCameraPosition = function (cameraPosition) {
        return HMSMapOriginal.getPlugin().CameraUpdateFactory.newCameraPosition(cameraPosition);
    };
    CameraUpdateFactory.newLatLng = function (latLng) {
        return HMSMapOriginal.getPlugin().CameraUpdateFactory.newLatLng(latLng);
    };
    CameraUpdateFactory.newLatLngBounds = function (latLngBounds, padding, width, height) {
        return HMSMapOriginal.getPlugin().CameraUpdateFactory.newLatLngBounds(latLngBounds, padding, width, height);
    };
    CameraUpdateFactory.newLatLngZoom = function (latLng, zoom) {
        return HMSMapOriginal.getPlugin().CameraUpdateFactory.newLatLngZoom(latLng, zoom);
    };
    CameraUpdateFactory.scrollBy = function (xPixel, yPixel) {
        return HMSMapOriginal.getPlugin().CameraUpdateFactory.scrollBy(xPixel, yPixel);
    };
    CameraUpdateFactory.zoomBy = function (amount, focus) {
        return HMSMapOriginal.getPlugin().CameraUpdateFactory.zoomBy(amount, focus);
    };
    CameraUpdateFactory.zoomIn = function () {
        return HMSMapOriginal.getPlugin().CameraUpdateFactory.zoomIn();
    };
    CameraUpdateFactory.zoomOut = function () {
        return HMSMapOriginal.getPlugin().CameraUpdateFactory.zoomOut();
    };
    CameraUpdateFactory.zoomTo = function (zoom) {
        return HMSMapOriginal.getPlugin().CameraUpdateFactory.zoomTo(zoom);
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
    MapStyleOptions.loadRawResourceStyle = function (resourceName) {
        return new MapStyleOptions(resourceName);
    };
    MapStyleOptions.prototype.getResourceName = function () {
        return this.resourceName;
    };
    return MapStyleOptions;
}());
export { MapStyleOptions };
var Cap = /** @class */ (function () {
    function Cap() {
        this.refWidth = null;
        this.bitmapDescriptor = null;
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
        _this.bitmapDescriptor = bitmapDescriptor;
        _this.refWidth = refWidth;
        return _this;
    }
    CustomCap.prototype.getRefWidth = function () {
        return this.refWidth;
    };
    CustomCap.prototype.getBitmapDescriptor = function () {
        return this.bitmapDescriptor;
    };
    return CustomCap;
}(Cap));
export { CustomCap };
var AnimationSet = /** @class */ (function () {
    function AnimationSet() {
        this.animations = new Map();
    }
    AnimationSet.prototype.addRotateAnimation = function (animation) {
        this.animations.set('Rotate', animation);
    };
    AnimationSet.prototype.addScaleAnimation = function (animation) {
        this.animations.set('Scale', animation);
    };
    AnimationSet.prototype.addTranslateAnimation = function (animation) {
        this.animations.set('Translate', animation);
    };
    AnimationSet.prototype.addAlphaAnimation = function (animation) {
        this.animations.set('Alpha', animation);
    };
    return AnimationSet;
}());
export { AnimationSet };
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
    Color[Color["DARK_GRAY"] = -12303292] = "DARK_GRAY";
    Color[Color["GRAY"] = -7829368] = "GRAY";
    Color[Color["WHITE"] = -1] = "WHITE";
    Color[Color["BLUE"] = -16776961] = "BLUE";
    Color[Color["BLACK"] = -16777216] = "BLACK";
    Color[Color["LITE_GRAY"] = -3355444] = "LITE_GRAY";
    Color[Color["MAGENTA"] = -65281] = "MAGENTA";
    Color[Color["YELLOW"] = -256] = "YELLOW";
    Color[Color["CYAN"] = -16711681] = "CYAN";
    Color[Color["GREEN"] = -16711936] = "GREEN";
    Color[Color["TRANSPARENT"] = 0] = "TRANSPARENT";
})(Color || (Color = {}));
export var JointType;
(function (JointType) {
    JointType[JointType["ROUND"] = 2] = "ROUND";
    JointType[JointType["BEVEL"] = 1] = "BEVEL";
    JointType[JointType["DEFAULT"] = 0] = "DEFAULT";
})(JointType || (JointType = {}));
export var MapEvent;
(function (MapEvent) {
    MapEvent["ON_INDOOR_BUILDINGS_FOCUSED"] = "onIndoorBuildingsFocused";
    MapEvent["ON_INDOOR_LEVEL_ACTIVATED"] = "onIndoorLevelActivated";
    MapEvent["ON_MAP_LOADED"] = "onMapLoaded";
    MapEvent["ON_CAMERA_IDLE"] = "onCameraIdle";
    MapEvent["ON_CAMERA_MOVE_CANCELED"] = "onCameraMoveCanceled";
    MapEvent["ON_CAMERA_MOVE"] = "onCameraMove";
    MapEvent["ON_CAMERA_MOVE_STARTED"] = "onCameraMoveStarted";
    MapEvent["ON_CIRCLE_CLICK"] = "onCircleClick";
    MapEvent["ON_GROUND_OVERLAY_CLICK"] = "onGroundOverlayClick";
    MapEvent["ON_INFO_WINDOW_CLICK"] = "onInfoWindowClick";
    MapEvent["ON_INFO_WINDOW_CLOSE"] = "onInfoWindowClose";
    MapEvent["ON_INFO_WINDOW_LONG_CLICK"] = "onInfoWindowLongClick";
    MapEvent["ON_MAP_CLICK"] = "onMapClick";
    MapEvent["ON_MAP_LONG_CLICK"] = "onMapLongClick";
    MapEvent["ON_MARKER_CLICK"] = "onMarkerClick";
    MapEvent["ON_MARKER_DRAG_START"] = "onMarkerDragStart";
    MapEvent["ON_MARKER_DRAG"] = "onMarkerDrag";
    MapEvent["ON_MARKER_DRAG_END"] = "onMarkerDragEnd";
    MapEvent["ON_MY_LOCATION_BUTTON_CLICK"] = "onMyLocationButtonClick";
    MapEvent["ON_MY_LOCATION_CLICK"] = "onMyLocationClick";
    MapEvent["ON_POI_CLICK"] = "onPoiClick";
    MapEvent["ON_POLYGON_CLICK"] = "onPolygonClick";
    MapEvent["ON_POLYLINE_CLICK"] = "onPolylineClick";
    MapEvent["ON_CANCELABLE_CALLBACK_FINISH"] = "onCancelableCallbackFinish";
    MapEvent["ON_CANCELABLE_CALLBACK_CANCEL"] = "onCancelableCallbackCancel";
    MapEvent["ON_SNAPSHOT_READY_CALLBACK"] = "onSnapshotReadyCallback";
})(MapEvent || (MapEvent = {}));
export var MapType;
(function (MapType) {
    MapType[MapType["MAP_TYPE_NONE"] = 0] = "MAP_TYPE_NONE";
    MapType[MapType["MAP_TYPE_SATELLITE"] = 2] = "MAP_TYPE_SATELLITE";
    MapType[MapType["MAP_TYPE_NORMAL"] = 1] = "MAP_TYPE_NORMAL";
    MapType[MapType["MAP_TYPE_HYBRID"] = 4] = "MAP_TYPE_HYBRID";
    MapType[MapType["MAP_TYPE_TERRAIN"] = 3] = "MAP_TYPE_TERRAIN";
})(MapType || (MapType = {}));
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
export var PatternItemType;
(function (PatternItemType) {
    PatternItemType[PatternItemType["TYPE_GAP"] = 2] = "TYPE_GAP";
    PatternItemType[PatternItemType["TYPE_DOT"] = 1] = "TYPE_DOT";
    PatternItemType[PatternItemType["TYPE_DASH"] = 0] = "TYPE_DASH";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1tYXAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQW9CQSxPQUFPLDhCQUFvQyxNQUFNLG9CQUFvQixDQUFDOztJQVUxQywwQkFBaUI7Ozs7SUFHekMsdUJBQU0sYUFBQyxLQUFhLEVBQUUsZ0JBQWtDLEVBQUUsTUFBa0I7SUFLNUUsd0JBQU8sYUFBQyxLQUFhO0lBS3JCLDhCQUFhO0lBS2Isa0NBQWlCO0lBS2pCLHVDQUFzQixhQUFDLElBQVksRUFBRSxFQUFVO0lBSy9DLDBCQUFTLGFBQUMsTUFBYztJQUt4Qiw4QkFBYTtJQUtiLDZCQUFZOzs7Ozs7aUJBcEVoQjtFQThCNEIsaUJBQWlCO1NBQWhDLE1BQU07O0lBb0RmO0lBQ0EsQ0FBQztJQUVNLHFDQUFpQixHQUF4QixVQUF5QixjQUE4QjtRQUNuRCxPQUFPLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRU0sNkJBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUMzQixPQUFPLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUlNLG1DQUFlLEdBQXRCLFVBQXVCLFlBQTBCLEVBQUUsT0FBZSxFQUFFLEtBQWMsRUFBRSxNQUFlO1FBQy9GLE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBRU0saUNBQWEsR0FBcEIsVUFBcUIsTUFBYyxFQUFFLElBQVk7UUFDN0MsT0FBTyxNQUFNLENBQUMsU0FBUyxFQUFFLENB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akIsMkNBQWdCLENBQUE7SUFDaEIsMENBQWUsQ0FBQTtJQUNmLHVDQUFjLENBQUE7SUFDZCxtQ0FBVyxDQUFBO0FBRWYsQ0FBQyxFQVpXLEdBQUcsS0FBSCxHQUFHLFFBWWQ7QUFFRCxNQUFNLENBQU4sSUFBWSxlQUlYO0FBSkQsV0FBWSxlQUFlO0lBQ3ZCLDZEQUFZLENBQUE7SUFDWiw2REFBWSxDQUFBO0lBQ1osK0RBQWEsQ0FBQTtBQUNqQixDQUFDLEVBSlcsZUFBZSxLQUFmLGVBQWUsUUFJMUI7QUFFRCxNQUFNLENBQU4sSUFBWSx1QkFJWDtBQUpELFdBQVksdUJBQXVCO0lBQy9CLHFHQUF3QixDQUFBO0lBQ3hCLGlIQUE4QixDQUFBO0lBQzlCLHlGQUFrQixDQUFBO0FBQ3RCLENBQUMsRUFKVyx1QkFBdUIsS0FBdkIsdUJBQXVCLFFBSWxDO0FBRUQsTUFBTSxDQUFOLElBQVksZ0JBV1g7QUFYRCxXQUFZLGdCQUFnQjtJQUN4QiwyREFBTSxDQUFBO0lBQ04seUZBQXFCLENBQUE7SUFDckIsbUVBQVUsQ0FBQTtJQUNWLG1FQUFVLENBQUE7SUFDVix1RkFBb0IsQ0FBQTtJQUNwQiwyREFBTSxDQUFBO0lBQ04seURBQUssQ0FBQTtJQUNMLG1FQUFVLENBQUE7SUFDVixpRUFBUyxDQUFBO0lBQ1QsdURBQUksQ0FBQTtBQUNSLENBQUMsRUFYVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBVzNCO0FBRUQsTUFBTSxDQUFOLElBQVksaUJBTVg7QUFORCxXQUFZLGlCQUFpQjtJQUN6QixxRkFBc0IsQ0FBQTtJQUN0Qix1RkFBdUIsQ0FBQTtJQUN2QixrRUFBYSxDQUFBO0lBQ2IsK0RBQVcsQ0FBQTtJQUNYLCtEQUFXLENBQUE7QUFDZixDQUFDLEVBTlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQU01QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgICBDb3B5cmlnaHQgMjAyMC0yMDIxLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5cclxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcclxuICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG5cclxuICAgICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAgICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbkBQbHVnaW4oe1xyXG4gICAgcGx1Z2luTmFtZTogJ0hNU01hcCcsXHJcbiAgICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtbWFwJyxcclxuICAgIHBsdWdpblJlZjogJ0hNU01hcCcsXHJcbiAgICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpbicsXHJcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNNYXAgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcblxyXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXHJcbiAgICBnZXRNYXAoZGl2SWQ6IHN0cmluZywgaHVhd2VpTWFwT3B0aW9uczogSHVhd2VpTWFwT3B0aW9ucywgYm91bmRzPzogTWFwQm91bmRzKTogUHJvbWlzZTxIdWF3ZWlNYXA+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXHJcbiAgICBzaG93TWFwKGRpdklkOiBzdHJpbmcpOiBQcm9taXNlPEh1YXdlaU1hcD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7b3RoZXJQcm9taXNlOiB0cnVlfSlcclxuICAgIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxyXG4gICAgcmVxdWVzdFBlcm1pc3Npb24oKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxyXG4gICAgY29tcHV0ZURpc3RhbmNlQmV0d2Vlbihmcm9tOiBMYXRMbmcsIHRvOiBMYXRMbmcpOiBQcm9taXNlPENvbXB1dGVEaXN0YW5jZVJlc3VsdD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7b3RoZXJQcm9taXNlOiB0cnVlfSlcclxuICAgIHNldEFwaUtleShhcGlLZXk6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7b3RoZXJQcm9taXNlOiB0cnVlfSlcclxuICAgIGRpc2FibGVMb2dnZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxyXG4gICAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiAnSE1TTWFwJyxcclxuICAgIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1tYXAnLFxyXG4gICAgcGx1Z2luUmVmOiAnSE1TTWFwLkNhbWVyYVVwZGF0ZUZhY3RvcnknLFxyXG4gICAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW4nLFxyXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENhbWVyYVVwZGF0ZUZhY3Rvcnkge1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5ld0NhbWVyYVBvc2l0aW9uKGNhbWVyYVBvc2l0aW9uOiBDYW1lcmFQb3NpdGlvbik6IENhbWVyYVVwZGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIEhNU01hcC5nZXRQbHVnaW4oKS5DYW1lcmFVcGRhdGVGYWN0b3J5Lm5ld0NhbWVyYVBvc2l0aW9uKGNhbWVyYVBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbmV3TGF0TG5nKGxhdExuZzogTGF0TG5nKTogQ2FtZXJhVXBkYXRlIHtcclxuICAgICAgICByZXR1cm4gSE1TTWFwLmdldFBsdWdpbigpLkNhbWVyYVVwZGF0ZUZhY3RvcnkubmV3TGF0TG5nKGxhdExuZyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5ld0xhdExuZ0JvdW5kcyhsYXRMbmdCb3VuZHM6IExhdExuZ0JvdW5kcywgcGFkZGluZzogbnVtYmVyKTogQ2FtZXJhVXBkYXRlO1xyXG5cclxuICAgIHN0YXRpYyBuZXdMYXRMbmdCb3VuZHMobGF0TG5nQm91bmRzOiBMYXRMbmdCb3VuZHMsIHBhZGRpbmc6IG51bWJlciwgd2lkdGg/OiBudW1iZXIsIGhlaWdodD86IG51bWJlcik6IENhbWVyYVVwZGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIEhNU01hcC5nZXRQbHVnaW4oKS5DYW1lcmFVcGRhdGVGYWN0b3J5Lm5ld0xhdExuZ0JvdW5kcyhsYXRMbmdCb3VuZHMsIHBhZGRpbmcsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBuZXdMYXRMbmdab29tKGxhdExuZzogTGF0TG5nLCB6b29tOiBudW1iZXIpOiBDYW1lcmFVcGRhdGUge1xyXG4gICAgICAgIHJldHVybiBITVNNYXAuZ2V0UGx1Z2luKCkuQ2FtZXJhVXBkYXRlRmFjdG9yeS5uZXdMYXRMbmdab29tKGxhdExuZywgem9vbSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNjcm9sbEJ5KHhQaXhlbDogbnVtYmVyLCB5UGl4ZWw6IG51bWJlcik6IENhbWVyYVVwZGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIEhNU01hcC5nZXRQbHVnaW4oKS5DYW1lcmFVcGRhdGVGYWN0b3J5LnNjcm9sbEJ5KHhQaXhlbCwgeVBpeGVsKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgem9vbUJ5KGFtb3VudDogbnVtYmVyKTogQ2FtZXJhVXBkYXRlO1xyXG5cclxuICAgIHN0YXRpYyB6b29tQnkoYW1vdW50OiBudW1iZXIsIGZvY3VzPzogUG9pbnQpOiBDYW1lcmFVcGRhdGUge1xyXG4gICAgICAgIHJldHVybiBITVNNYXAuZ2V0UGx1Z2luKCkuQ2FtZXJhVXBkYXRlRmFjdG9yeS56b29tQnkoYW1vdW50LCBmb2N1cyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHpvb21JbigpOiBDYW1lcmFVcGRhdGUge1xyXG4gICAgICAgIHJldHVybiBITVNNYXAuZ2V0UGx1Z2luKCkuQ2FtZXJhVXBkYXRlRmFjdG9yeS56b29tSW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgem9vbU91dCgpOiBDYW1lcmFVcGRhdGUge1xyXG4gICAgICAgIHJldHVybiBITVNNYXAuZ2V0UGx1Z2luKCkuQ2FtZXJhVXBkYXRlRmFjdG9yeS56b29tT3V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHpvb21Ubyh6b29tOiBudW1iZXIpOiBDYW1lcmFVcGRhdGUge1xyXG4gICAgICAgIHJldHVybiBITVNNYXAuZ2V0UGx1Z2luKCkuQ2FtZXJhVXBkYXRlRmFjdG9yeS56b29tVG8oem9vbSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNYXBTdHlsZU9wdGlvbnMge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSByZXNvdXJjZU5hbWU6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKHJlc291cmNlTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZU5hbWUgPSByZXNvdXJjZU5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkUmF3UmVzb3VyY2VTdHlsZShyZXNvdXJjZU5hbWU6IHN0cmluZyk6IE1hcFN0eWxlT3B0aW9ucyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXBTdHlsZU9wdGlvbnMocmVzb3VyY2VOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZXNvdXJjZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZU5hbWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDYXAge1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IFRZUEVfQlVUVF9DQVAgPSAwO1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IFRZUEVfU1FVQVJFX0NBUCA9IDE7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgVFlQRV9ST1VORF9DQVAgPSAyO1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IFRZUEVfQ1VTVE9NX0NBUCA9IDM7XHJcbiAgICBwcm90ZWN0ZWQgdHlwZTogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIHJlZldpZHRoPzogbnVtYmVyID0gbnVsbDtcclxuICAgIHByb3RlY3RlZCBiaXRtYXBEZXNjcmlwdG9yPzogQml0bWFwRGVzY3JpcHRvciA9IG51bGw7XHJcblxyXG4gICAgZ2V0VHlwZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCdXR0Q2FwIGV4dGVuZHMgQ2FwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy50eXBlID0gMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvdW5kQ2FwIGV4dGVuZHMgQ2FwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy50eXBlID0gMjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNxdWFyZUNhcCBleHRlbmRzIENhcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21DYXAgZXh0ZW5kcyBDYXAge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGJpdG1hcERlc2NyaXB0b3I6IEJpdG1hcERlc2NyaXB0b3IsIHJlZldpZHRoPzogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnR5cGUgPSAzO1xyXG4gICAgICAgIHRoaXMuYml0bWFwRGVzY3JpcHRvciA9IGJpdG1hcERlc2NyaXB0b3I7XHJcbiAgICAgICAgdGhpcy5yZWZXaWR0aCA9IHJlZldpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJlZldpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Qml0bWFwRGVzY3JpcHRvcigpOiBCaXRtYXBEZXNjcmlwdG9yIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iaXRtYXBEZXNjcmlwdG9yO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uU2V0IHtcclxuXHJcbiAgICByZWFkb25seSBhbmltYXRpb25zOiBNYXA8c3RyaW5nLCBBbmltYXRpb24+ID0gbmV3IE1hcDxzdHJpbmcsIEFuaW1hdGlvbj4oKTtcclxuXHJcbiAgICBhZGRSb3RhdGVBbmltYXRpb24oYW5pbWF0aW9uOiBSb3RhdGVBbmltYXRpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbnMuc2V0KCdSb3RhdGUnLCBhbmltYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFNjYWxlQW5pbWF0aW9uKGFuaW1hdGlvbjogU2NhbGVBbmltYXRpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbnMuc2V0KCdTY2FsZScsIGFuaW1hdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVHJhbnNsYXRlQW5pbWF0aW9uKGFuaW1hdGlvbjogVHJhbnNsYXRlQW5pbWF0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25zLnNldCgnVHJhbnNsYXRlJywgYW5pbWF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRBbHBoYUFuaW1hdGlvbihhbmltYXRpb246IEFscGhhQW5pbWF0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25zLnNldCgnQWxwaGEnLCBhbmltYXRpb24pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vSU5URVJGQUNFUy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVWlTZXR0aW5ncyB7XHJcbiAgICBpc0NvbXBhc3NFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICBpc0luZG9vckxldmVsUGlja2VyRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgaXNNYXBUb29sYmFyRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgaXNNeUxvY2F0aW9uQnV0dG9uRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgaXNSb3RhdGVHZXN0dXJlc0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIGlzU2Nyb2xsR2VzdHVyZXNFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICBpc1Njcm9sbEdlc3R1cmVzRW5hYmxlZER1cmluZ1JvdGF0ZU9yWm9vbSgpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgaXNUaWx0R2VzdHVyZXNFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICBpc1pvb21Db250cm9sc0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIGlzWm9vbUdlc3R1cmVzRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgc2V0QWxsR2VzdHVyZXNFbmFibGVkKGFsbEdlc3R1cmVzRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRDb21wYXNzRW5hYmxlZChjb21wYXNzRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRJbmRvb3JMZXZlbFBpY2tlckVuYWJsZWQoaW5kb29yTGV2ZWxQaWNrZXJFbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldE1hcFRvb2xiYXJFbmFibGVkKG1hcFRvb2xiYXJFbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldE15TG9jYXRpb25CdXR0b25FbmFibGVkKG15TG9jYXRpb25CdXR0b25FbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFJvdGF0ZUdlc3R1cmVzRW5hYmxlZChyb3RhdGVHZXN0dXJlc0VuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0U2Nyb2xsR2VzdHVyZXNFbmFibGVkKHNjcm9sbEdlc3R1cmVzRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRTY3JvbGxHZXN0dXJlc0VuYWJsZWREdXJpbmdSb3RhdGVPclpvb20oc2Nyb2xsR2VzdHVyZXNFbmFibGVkRHVyaW5nUm90YXRlT3Jab29tOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFRpbHRHZXN0dXJlc0VuYWJsZWQodGlsdEdlc3R1cmVzRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRab29tQ29udHJvbHNFbmFibGVkKHpvb21Db250cm9sc0VuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0Wm9vbUdlc3R1cmVzRW5hYmxlZCh6b29tR2VzdHVyZXNFbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldEdlc3R1cmVTY2FsZUJ5TWFwQ2VudGVyKGdlc3R1cmVTY2FsZUJ5TWFwQ2VudGVyRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRNYXJrZXJDbHVzdGVyQ29sb3IobWFya2VyQ2x1c3RlckNvbG9yOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0TWFya2VyQ2x1c3Rlckljb24obWFya2VyQ2x1c3Rlckljb246IEJpdG1hcERlc2NyaXB0b3IpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0TWFya2VyQ2x1c3RlclRleHRDb2xvcihtYXJrZXJDbHVzdGVyVGV4dENvbG9yOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEh1YXdlaU1hcCB7XHJcbiAgICBvbihldmVudDogTWFwRXZlbnQsIGNhbGxiYWNrOiAodmFsOiBhbnkpID0+IHZvaWQpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgZGVzdHJveU1hcCgpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgaGlkZU1hcCgpOiBQcm9taXNlPHZvaWQ+XHJcbiAgICBnZXRDb21wb25lbnQoa2V5OiBzdHJpbmcpOiBhbnk7XHJcbiAgICByZW1vdmVDb21wb25lbnQoa2V5OiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgZ2V0SWQoKTogbnVtYmVyO1xyXG4gICAgc2Nyb2xsKCk6IHZvaWQ7XHJcbiAgICBzeW5jRGltZW5zaW9ucygpOiB2b2lkO1xyXG4gICAgYWRkQ2lyY2xlKGNpcmNsZU9wdGlvbnM6IENpcmNsZU9wdGlvbnMpOiBQcm9taXNlPENpcmNsZT47XHJcbiAgICBhZGRNYXJrZXIobWFya2VyT3B0aW9uczogTWFya2VyT3B0aW9ucyk6IFByb21pc2U8TWFya2VyPjtcclxuICAgIGFkZEdyb3VuZE92ZXJsYXkoZ3JvdW5kT3ZlcmxheU9wdGlvbnM6IEdyb3VuZE92ZXJsYXlPcHRpb25zKTogUHJvbWlzZTxHcm91bmRPdmVybGF5PjtcclxuICAgIGFkZFRpbGVPdmVybGF5KHRpbGVPdmVybGF5T3B0aW9uczogVGlsZU92ZXJsYXlPcHRpb25zKTogUHJvbWlzZTxUaWxlT3ZlcmxheT47XHJcbiAgICBhZGRQb2x5Z29uKHBvbHlnb25PcHRpb25zOiBQb2x5Z29uT3B0aW9ucyk6IFByb21pc2U8UG9seWdvbj47XHJcbiAgICBhZGRQb2x5bGluZShwb2x5bGluZU9wdGlvbnM6IFBvbHlsaW5lT3B0aW9ucyk6IFByb21pc2U8UG9seWxpbmU+O1xyXG4gICAgYW5pbWF0ZUNhbWVyYShjYW1lcmFVcGRhdGU6IENhbWVyYVVwZGF0ZSk6IFByb21pc2U8dm9pZD47XHJcbiAgICBhbmltYXRlQ2FtZXJhKGNhbWVyYVVwZGF0ZTogQ2FtZXJhVXBkYXRlLCBjYW5jZWxhYmxlQ2FsbGJhY2s6IENhbmNlbGFibGVDYWxsYmFjayk6IFByb21pc2U8dm9pZD47XHJcbiAgICBhbmltYXRlQ2FtZXJhKGNhbWVyYVVwZGF0ZTogQ2FtZXJhVXBkYXRlLCBjYW5jZWxhYmxlQ2FsbGJhY2s/OiBDYW5jZWxhYmxlQ2FsbGJhY2ssIGR1cmF0aW9uTXM/OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgbW92ZUNhbWVyYShjYW1lcmFVcGRhdGU6IENhbWVyYVVwZGF0ZSk6IFByb21pc2U8dm9pZD47XHJcbiAgICBjbGVhcigpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgcmVzZXRNaW5NYXhab29tUHJlZmVyZW5jZSgpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc3RvcEFuaW1hdGlvbigpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgZ2V0Q2FtZXJhUG9zaXRpb24oKTogUHJvbWlzZTxDYW1lcmFQb3NpdGlvbj47XHJcbiAgICBnZXRNYXBUeXBlKCk6IFByb21pc2U8TWFwVHlwZT47XHJcbiAgICBnZXRNYXhab29tTGV2ZWwoKTogUHJvbWlzZTxudW1iZXI+O1xyXG4gICAgZ2V0TWluWm9vbUxldmVsKCk6IFByb21pc2U8bnVtYmVyPjtcclxuICAgIGdldFByb2plY3Rpb24oKTogUHJvamVjdGlvbjtcclxuICAgIGdldFVpU2V0dGluZ3MoKTogVWlTZXR0aW5ncztcclxuICAgIGlzQnVpbGRpbmdzRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgaXNNeUxvY2F0aW9uRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgaXNUcmFmZmljRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgaXNJbmRvb3JFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICBzZXRCdWlsZGluZ3NFbmFibGVkKGJ1aWxkaW5nc0VuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0Q29udGVudERlc2NyaXB0aW9uKGNvbnRlbnREZXNjcmlwdGlvbjogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldEluZm9XaW5kb3dBZGFwdGVyKGluZm9XaW5kb3dBZGFwdGVyOiBJbmZvV2luZG93QWRhcHRlcik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRMYXRMbmdCb3VuZHNGb3JDYW1lcmFUYXJnZXQobGF0TG5nQm91bmRzRm9yQ2FtZXJhVGFyZ2V0OiBMYXRMbmdCb3VuZHMpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0TG9jYXRpb25Tb3VyY2UobG9jYXRpb25Tb3VyY2U6IExvY2F0aW9uU291cmNlKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldE1hcFN0eWxlKG1hcFN0eWxlOiBNYXBTdHlsZU9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0TWFwVHlwZShtYXBUeXBlOiBNYXBUeXBlKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldE1hcmtlcnNDbHVzdGVyaW5nKG1hcmtlcnNDbHVzdGVyaW5nOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldE1heFpvb21QcmVmZXJlbmNlKG1heFpvb21QcmVmZXJlbmNlOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0TWluWm9vbVByZWZlcmVuY2UobWluWm9vbVByZWZlcmVuY2U6IG51bWJlcik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRNeUxvY2F0aW9uRW5hYmxlZChteUxvY2F0aW9uRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRQYWRkaW5nKGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFRyYWZmaWNFbmFibGVkKHRyYWZmaWNFbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNuYXBzaG90KG9uUmVhZHlDYWxsYmFjazogKHNuYXBzaG90OiBTbmFwc2hvdFJlc3VsdCkgPT4gdm9pZCk6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRNYXBQb2ludGVyc0VuYWJsZWQobWFwUG9pbnRlcnNFbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIGlzTWFwUG9pbnRlcnNFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICBzZXRQb2ludFRvQ2VudGVyKHg6IG51bWJlciwgeTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYW1lcmFVcGRhdGUge1xyXG4gICAgbW92ZUNhbWVyYShtYXBJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+O1xyXG4gICAgYW5pbWF0ZUNhbWVyYShtYXBJZDogc3RyaW5nLCBwcm9wczogYW55KTogUHJvbWlzZTxhbnk+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENpcmNsZSB7XHJcbiAgICBnZXRDZW50ZXIoKTogUHJvbWlzZTxMYXRMbmc+O1xyXG4gICAgZ2V0RmlsbENvbG9yKCk6IFByb21pc2U8Q29sb3I+O1xyXG4gICAgZ2V0SWQoKTogc3RyaW5nO1xyXG4gICAgZ2V0UmFkaXVzKCk6IFByb21pc2U8bnVtYmVyPjtcclxuICAgIGdldFN0cm9rZUNvbG9yKCk6IFByb21pc2U8Q29sb3I+O1xyXG4gICAgZ2V0U3Ryb2tlUGF0dGVybigpOiBQcm9taXNlPFBhdHRlcm5JdGVtW10+O1xyXG4gICAgZ2V0U3Ryb2tlV2lkdGgoKTogUHJvbWlzZTxudW1iZXI+O1xyXG4gICAgZ2V0VGFnKCk6IFByb21pc2U8YW55PjtcclxuICAgIGdldFpJbmRleCgpOiBQcm9taXNlPG51bWJlcj47XHJcbiAgICBpc0NsaWNrYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgaXNWaXNpYmxlKCk6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICByZW1vdmUoKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldENlbnRlcihjZW50ZXI6IExhdExuZyk6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRGaWxsQ29sb3IoZmlsbENvbG9yOiBDb2xvcik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRSYWRpdXMocmFkaXVzOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0U3Ryb2tlQ29sb3Ioc3Ryb2tlQ29sb3I6IENvbG9yKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFN0cm9rZVBhdHRlcm4oc3Ryb2tlUGF0dGVybjogUGF0dGVybkl0ZW1bXSk6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRTdHJva2VXaWR0aChzdHJva2VXaWR0aDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFRhZyh0YWc6IGFueSk6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRaSW5kZXgoekluZGV4OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0Q2xpY2thYmxlKGNsaWNrYWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdyb3VuZE92ZXJsYXkge1xyXG4gICAgZ2V0QmVhcmluZygpOiBQcm9taXNlPG51bWJlcj47XHJcbiAgICBnZXRCb3VuZHMoKTogUHJvbWlzZTxMYXRMbmdCb3VuZHM+O1xyXG4gICAgZ2V0SGVpZ2h0KCk6IFByb21pc2U8bnVtYmVyPjtcclxuICAgIGdldElkKCk6IHN0cmluZztcclxuICAgIGdldFBvc2l0aW9uKCk6IFByb21pc2U8TGF0TG5nPjtcclxuICAgIGdldFRhZygpOiBQcm9taXNlPGFueT47XHJcbiAgICBnZXRUcmFuc3BhcmVuY3koKTogUHJvbWlzZTxudW1iZXI+O1xyXG4gICAgZ2V0V2lkdGgoKTogUHJvbWlzZTxudW1iZXI+O1xyXG4gICAgZ2V0WkluZGV4KCk6IFByb21pc2U8bnVtYmVyPjtcclxuICAgIGlzQ2xpY2thYmxlKCk6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICBpc1Zpc2libGUoKTogUHJvbWlzZTxib29sZWFuPjtcclxuXHJcbiAgICByZW1vdmUoKTogUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgICBzZXRCZWFyaW5nKGJlYXJpbmc6IG51bWJlcik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRDbGlja2FibGUoY2xpY2thYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldERpbWVuc2lvbnMod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0RGltZW5zaW9ucyh3aWR0aDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldEltYWdlKGltYWdlRGVzY3JpcHRvcjogQml0bWFwRGVzY3JpcHRvcik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRQb3NpdGlvbihwb3NpdGlvbjogTGF0TG5nKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFBvc2l0aW9uRnJvbUJvdW5kcyhwb3NpdGlvbkxhdExuZ0JvdW5kczogTGF0TG5nQm91bmRzKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFRhZyh0YWc6IGFueSk6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRUcmFuc3BhcmVuY3kodHJhbnNwYXJlbmN5OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFpJbmRleCh6SW5kZXg6IG51bWJlcik6IFByb21pc2U8dm9pZD47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFya2VyIHtcclxuICAgIGdldEFscGhhKCk6IFByb21pc2U8bnVtYmVyPjtcclxuICAgIGdldElkKCk6IHN0cmluZztcclxuICAgIGdldFBvc2l0aW9uKCk6IFByb21pc2U8TGF0TG5nPjtcclxuICAgIGdldFJvdGF0aW9uKCk6IFByb21pc2U8bnVtYmVyPjtcclxuICAgIGdldFNuaXBwZXQoKTogUHJvbWlzZTxzdHJpbmc+O1xyXG4gICAgZ2V0VGFnKCk6IFByb21pc2U8YW55PjtcclxuICAgIGdldFRpdGxlKCk6IFByb21pc2U8c3RyaW5nPjtcclxuICAgIGdldFpJbmRleCgpOiBQcm9taXNlPG51bWJlcj47XHJcbiAgICBpc1Zpc2libGUoKTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIGlzQ2x1c3RlcmFibGUoKTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIGlzRHJhZ2dhYmxlKCk6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICBpc0ZsYXQoKTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIGlzSW5mb1dpbmRvd1Nob3duKCk6IFByb21pc2U8Ym9vbGVhbj47XHJcblxyXG4gICAgcmVtb3ZlKCk6IFByb21pc2U8dm9pZD47XHJcbiAgICBoaWRlSW5mb1dpbmRvdygpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2hvd0luZm9XaW5kb3coKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHN0YXJ0QW5pbWF0aW9uKCk6IFByb21pc2U8dm9pZD47XHJcblxyXG4gICAgc2V0QWxwaGEoYWxwaGE6IG51bWJlcik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRBbmltYXRpb24oYW5pbWF0aW9uOiBBbmltYXRpb25TZXQpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0RHJhZ2dhYmxlKGRyYWdnYWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRGbGF0KGZsYXQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0SWNvbihpY29uOiBCaXRtYXBEZXNjcmlwdG9yKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldEluZm9XaW5kb3dBbmNob3IodTogbnVtYmVyLCB2OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0TWFya2VyQW5jaG9yKHU6IG51bWJlciwgdjogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFBvc2l0aW9uKGxhdExuZzogTGF0TG5nKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFJvdGF0aW9uKHJvdGF0aW9uOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0U25pcHBldChzbmlwcGV0OiBTdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0VGl0bGUodGl0bGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRUYWcodGFnOiBhbnkpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFpJbmRleCh6SW5kZXg6IG51bWJlcik6IFByb21pc2U8dm9pZD47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9seWdvbiB7XHJcblxyXG4gICAgZ2V0RmlsbENvbG9yKCk6IFByb21pc2U8Q29sb3I+O1xyXG4gICAgZ2V0SG9sZXMoKTogUHJvbWlzZTxMYXRMbmdbXVtdPjtcclxuICAgIGdldElkKCk6IHN0cmluZztcclxuICAgIGdldFBvaW50cygpOiBQcm9taXNlPExhdExuZ1tdPjtcclxuICAgIGdldFN0cm9rZUNvbG9yKCk6IFByb21pc2U8Q29sb3I+O1xyXG4gICAgZ2V0U3Ryb2tlSm9pbnRUeXBlKCk6IFByb21pc2U8Sm9pbnRUeXBlPjtcclxuICAgIGdldFN0cm9rZVBhdHRlcm4oKTogUHJvbWlzZTxQYXR0ZXJuSXRlbVtdPjtcclxuICAgIGdldFN0cm9rZVdpZHRoKCk6IFByb21pc2U8bnVtYmVyPjtcclxuICAgIGdldFRhZygpOiBQcm9taXNlPGFueT47XHJcbiAgICBnZXRaSW5kZXgoKTogUHJvbWlzZTxudW1iZXI+O1xyXG4gICAgaXNDbGlja2FibGUoKTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIGlzVmlzaWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgaXNHZW9kZXNpYygpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG5cclxuICAgIHJlbW92ZSgpOiBQcm9taXNlPHZvaWQ+O1xyXG5cclxuICAgIHNldENsaWNrYWJsZShjbGlja2FibGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0RmlsbENvbG9yKGNvbG9yOiBDb2xvcik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRHZW9kZXNpYyhnZW9kZXNpYzogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRIb2xlcyhob2xlczogTGF0TG5nW11bXSk6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRQb2ludHMocG9pbnRzOiBMYXRMbmdbXSk6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRTdHJva2VDb2xvcihjb2xvcjogQ29sb3IpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0U3Ryb2tlSm9pbnRUeXBlKGpvaW50VHlwZTogSm9pbnRUeXBlKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFN0cm9rZVBhdHRlcm4ocGF0dGVybkl0ZW06IFBhdHRlcm5JdGVtW10pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0U3Ryb2tlV2lkdGgod2lkdGg6IG51bWJlcik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRUYWcodGFnOiBhbnkpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFpJbmRleCh6SW5kZXg6IG51bWJlcik6IFByb21pc2U8dm9pZD47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9seWxpbmUge1xyXG4gICAgZ2V0Q29sb3IoKTogUHJvbWlzZTxDb2xvcj47XHJcbiAgICBnZXRFbmRDYXAoKTogUHJvbWlzZTxDYXA+O1xyXG4gICAgZ2V0U3RhcnRDYXAoKTogUHJvbWlzZTxDYXA+O1xyXG4gICAgZ2V0SWQoKTogc3RyaW5nO1xyXG4gICAgZ2V0Sm9pbnRUeXBlKCk6IFByb21pc2U8Sm9pbnRUeXBlPjtcclxuICAgIGdldFBhdHRlcm4oKTogUHJvbWlzZTxQYXR0ZXJuSXRlbVtdPjtcclxuICAgIGdldFBvaW50cygpOiBQcm9taXNlPExhdExuZ1tdPjtcclxuICAgIGdldFRhZygpOiBQcm9taXNlPGFueT47XHJcbiAgICBnZXRXaWR0aCgpOiBQcm9taXNlPG51bWJlcj47XHJcbiAgICBnZXRaSW5kZXgoKTogUHJvbWlzZTxudW1iZXI+O1xyXG4gICAgaXNDbGlja2FibGUoKTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIGlzR2VvZGVzaWMoKTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIGlzVmlzaWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG5cclxuICAgIHJlbW92ZSgpOiBQcm9taXNlPHZvaWQ+O1xyXG5cclxuICAgIHNldENsaWNrYWJsZShjbGlja2FibGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0Q29sb3IoY29sb3I6IENvbG9yKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFN0YXJ0Q2FwKHN0YXJ0Q2FwOiBDYXApOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0RW5kQ2FwKGVuZENhcDogQ2FwKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldEdlb2Rlc2ljKGdlb2Rlc2ljOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldEpvaW50VHlwZShqb2ludFR5cGU6IEpvaW50VHlwZSk6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRQYXR0ZXJuKHBhdHRlcm46IFBhdHRlcm5JdGVtW10pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0UG9pbnRzKHBvaW50czogTGF0TG5nW10pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0VGFnKHRhZzogYW55KTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRXaWR0aCh3aWR0aDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFpJbmRleCh6SW5kZXg6IG51bWJlcik6IFByb21pc2U8dm9pZD47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGlsZU92ZXJsYXkge1xyXG4gICAgZ2V0RmFkZUluKCk6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICBnZXRJZCgpOiBzdHJpbmc7XHJcbiAgICBnZXRUcmFuc3BhcmVuY3koKTogUHJvbWlzZTxudW1iZXI+O1xyXG4gICAgZ2V0WkluZGV4KCk6IFByb21pc2U8bnVtYmVyPjtcclxuICAgIGlzVmlzaWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG5cclxuICAgIHJlbW92ZSgpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgY2xlYXJUaWxlQ2FjaGUoKTogUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgICBzZXRGYWRlSW4oZmFkZUluOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFRyYW5zcGFyZW5jeSh0cmFuc3BhcmVuY3k6IG51bWJlcik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRaSW5kZXgoekluZGV4OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0aW9uIHtcclxuICAgIGZyb21TY3JlZW5Mb2NhdGlvbihwb2ludDogUG9pbnQpOiBQcm9taXNlPExhdExuZz47XHJcbiAgICBnZXRWaXNpYmxlUmVnaW9uKCk6IFByb21pc2U8VmlzaWJsZVJlZ2lvbj47XHJcbiAgICB0b1NjcmVlbkxvY2F0aW9uKGxhdExuZzogTGF0TG5nKTogUHJvbWlzZTxQb2ludD47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFwQm91bmRzIHtcclxuICAgIG1hcmdpblRvcD86IG51bWJlcixcclxuICAgIG1hcmdpbkJvdHRvbT86IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEh1YXdlaU1hcE9wdGlvbnMge1xyXG4gICAgbWFwVHlwZT86IE1hcFR5cGUsXHJcbiAgICB6b29tQ29udHJvbHNFbmFibGVkPzogYm9vbGVhbixcclxuICAgIGNvbXBhc3NFbmFibGVkPzogYm9vbGVhbixcclxuICAgIHpvb21HZXN0dXJlc0VuYWJsZWQ/OiBib29sZWFuLFxyXG4gICAgc2Nyb2xsR2VzdHVyZXNFbmFibGVkPzogYm9vbGVhbixcclxuICAgIHJvdGF0ZUdlc3R1cmVzRW5hYmxlZD86IGJvb2xlYW4sXHJcbiAgICB0aWx0R2VzdHVyZXNFbmFibGVkPzogYm9vbGVhbixcclxuICAgIHpPcmRlck9uVG9wPzogYm9vbGVhbixcclxuICAgIGxpdGVNb2RlPzogYm9vbGVhbixcclxuICAgIGFtYmllbnRFbmFibGVkPzogYm9vbGVhbixcclxuICAgIG1pblpvb21QcmVmZXJlbmNlPzogbnVtYmVyLFxyXG4gICAgbWF4Wm9vbVByZWZlcmVuY2U/OiBudW1iZXIsXHJcbiAgICBjYW1lcmFQb3NpdGlvbj86IENhbWVyYVBvc2l0aW9uLFxyXG4gICAgbGF0TG5nQm91bmRzPzogTGF0TG5nQm91bmRzXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9jYXRpb24ge1xyXG4gICAgYWNjdXJhY3k6IG51bWJlcixcclxuICAgIGFsdGl0dWRlOiBudW1iZXIsXHJcbiAgICBiZWFyaW5nOiBudW1iZXIsXHJcbiAgICBlbGFwc2VkUmVhbHRpbWVOYW5vczogbnVtYmVyLFxyXG4gICAgbGF0aXR1ZGU6IG51bWJlcixcclxuICAgIGxvbmdpdHVkZTogbnVtYmVyLFxyXG4gICAgcHJvdmlkZXI6IHN0cmluZyxcclxuICAgIHNwZWVkOiBudW1iZXIsXHJcbiAgICB0aW1lOiBudW1iZXIsXHJcbiAgICBmcm9tTW9ja1Byb3ZpZGVyOiBib29sZWFuLFxyXG4gICAgY29udGVudHM6IG51bWJlcixcclxuICAgIGJlYXJpbmdBY2N1cmFjeURlZ3JlZXM/OiBudW1iZXIsXHJcbiAgICBzcGVlZEFjY3VyYWN5TWV0ZXJzUGVyU2Vjb25kPzogbnVtYmVyLFxyXG4gICAgdmVydGljYWxBY2N1cmFjeU1ldGVycz86IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExhdExuZ0JvdW5kcyB7XHJcbiAgICBzb3V0aHdlc3Q6IExhdExuZyxcclxuICAgIG5vcnRoZWFzdDogTGF0TG5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhUG9zaXRpb24ge1xyXG4gICAgdGFyZ2V0OiBMYXRMbmcsXHJcbiAgICB6b29tPzogbnVtYmVyLFxyXG4gICAgYmVhcmluZz86IG51bWJlcixcclxuICAgIHRpbHQ/OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYXRMbmcge1xyXG4gICAgbGF0OiBudW1iZXIsXHJcbiAgICBsbmc6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENpcmNsZU9wdGlvbnMge1xyXG4gICAgY2VudGVyOiBMYXRMbmcsXHJcbiAgICBjbGlja2FibGU/OiBib29sZWFuLFxyXG4gICAgZmlsbENvbG9yPzogQ29sb3IsXHJcbiAgICByYWRpdXM6IG51bWJlcixcclxuICAgIHN0cm9rZUNvbG9yPzogQ29sb3IsXHJcbiAgICBzdHJva2VXaWR0aD86IG51bWJlcixcclxuICAgIHN0cm9rZVBhdHRlcm4/OiBQYXR0ZXJuSXRlbVtdLFxyXG4gICAgdmlzaWJsZT86IGJvb2xlYW4sXHJcbiAgICB6SW5kZXg/OiBudW1iZXJcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUE9JIHtcclxuICAgIGxhdExuZzogTGF0TG5nLFxyXG4gICAgbmFtZT86IHN0cmluZyxcclxuICAgIHBsYWNlSWQ/OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYXR0ZXJuSXRlbSB7XHJcbiAgICB0eXBlOiBQYXR0ZXJuSXRlbVR5cGUsXHJcbiAgICBsZW5ndGg6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlck9wdGlvbnMge1xyXG4gICAgYW5jaG9yTWFya2VyPzogQW5jaG9yLFxyXG4gICAgaW5mb1dpbmRvd0FuY2hvcj86IEFuY2hvcixcclxuICAgIGluZm9XaW5kb3dTaG93bj86IGJvb2xlYW4sXHJcbiAgICBhbHBoYT86IG51bWJlcixcclxuICAgIGNsdXN0ZXJhYmxlPzogYm9vbGVhbixcclxuICAgIGRyYWdnYWJsZT86IGJvb2xlYW4sXHJcbiAgICBpY29uPzogQml0bWFwRGVzY3JpcHRvcixcclxuICAgIGZsYXQ/OiBib29sZWFuLFxyXG4gICAgcG9zaXRpb246IExhdExuZyxcclxuICAgIHJvdGF0aW9uPzogbnVtYmVyLFxyXG4gICAgc25pcHBldD86IHN0cmluZyxcclxuICAgIHRpdGxlPzogc3RyaW5nLFxyXG4gICAgdmlzaWJsZT86IGJvb2xlYW4sXHJcbiAgICB6SW5kZXg/OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTY2FsZWRTaXplIHtcclxuICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICBoZWlnaHQ6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFzc2V0IHtcclxuICAgIGZpbGVOYW1lOiBzdHJpbmcsXHJcbiAgICBzY2FsZWRTaXplPzogU2NhbGVkU2l6ZVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlc291cmNlIHtcclxuICAgIGZpbGVOYW1lOiBzdHJpbmcsXHJcbiAgICByZXNvdXJjZVR5cGU6IHN0cmluZyxcclxuICAgIHNjYWxlZFNpemU/OiBTY2FsZWRTaXplXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQml0bWFwRGVzY3JpcHRvciB7XHJcbiAgICBodWU/OiBIdWUsXHJcbiAgICBhc3NldD86IEFzc2V0LFxyXG4gICAgcmVzb3VyY2U/OiBSZXNvdXJjZSxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBbmNob3Ige1xyXG4gICAgdT86IG51bWJlcixcclxuICAgIHY/OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2x5Z29uT3B0aW9ucyB7XHJcbiAgICBwb2ludHM6IExhdExuZ1tdLFxyXG4gICAgaG9sZXM/OiBMYXRMbmdbXVtdO1xyXG4gICAgY2xpY2thYmxlPzogYm9vbGVhbixcclxuICAgIGdlb2Rlc2ljPzogYm9vbGVhbixcclxuICAgIGZpbGxDb2xvcj86IENvbG9yLFxyXG4gICAgc3Ryb2tlQ29sb3I/OiBDb2xvcixcclxuICAgIHN0cm9rZUpvaW50VHlwZT86IEpvaW50VHlwZSxcclxuICAgIHN0cm9rZVBhdHRlcm4/OiBQYXR0ZXJuSXRlbVtdLFxyXG4gICAgc3Ryb2tlV2lkdGg/OiBudW1iZXIsXHJcbiAgICB2aXNpYmxlPzogdHJ1ZSxcclxuICAgIHpJbmRleD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2x5bGluZU9wdGlvbnMge1xyXG4gICAgcG9pbnRzOiBMYXRMbmdbXSxcclxuICAgIGNsaWNrYWJsZT86IGJvb2xlYW4sXHJcbiAgICBjb2xvcj86IENvbG9yLFxyXG4gICAgc3RhcnRDYXA/OiBDYXAsXHJcbiAgICBwYXR0ZXJuPzogUGF0dGVybkl0ZW1bXSxcclxuICAgIGVuZENhcD86IENhcCxcclxuICAgIGdlb2Rlc2ljPzogYm9vbGVhbixcclxuICAgIGpvaW50VHlwZT86IEpvaW50VHlwZSxcclxuICAgIHZpc2libGU/OiBib29sZWFuLFxyXG4gICAgd2lkdGg/OiBudW1iZXIsXHJcbiAgICB6SW5kZXg/OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHcm91bmRPdmVybGF5T3B0aW9ucyB7XHJcbiAgICBhbmNob3I/OiBBbmNob3IsXHJcbiAgICBiZWFyaW5nPzogbnVtYmVyLFxyXG4gICAgY2xpY2thYmxlPzogYm9vbGVhbixcclxuICAgIGltYWdlPzogQml0bWFwRGVzY3JpcHRvcixcclxuICAgIHZpc2libGU/OiBib29sZWFuLFxyXG4gICAgdHJhbnNwYXJlbmN5PzogbnVtYmVyLFxyXG4gICAgekluZGV4PzogbnVtYmVyLFxyXG4gICAgcG9zaXRpb246IFBvc2l0aW9uLFxyXG4gICAgYm91bmRzPzogTGF0TG5nQm91bmRzXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9zaXRpb24ge1xyXG4gICAgbGF0TG5nOiBMYXRMbmcsXHJcbiAgICB3aWR0aDogbnVtYmVyLFxyXG4gICAgaGVpZ2h0PzogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVVJMVGlsZSB7XHJcbiAgICBVUkw6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHpvb206IG51bWJlcjtcclxuICAgIHBhdGg6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXBldGl0aXZlVGlsZSB7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICB6b29tOiBudW1iZXJbXTtcclxuICAgIHBhdGg6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlUHJvdmlkZXIge1xyXG4gICAgdHlwZTogVGlsZVR5cGUsXHJcbiAgICBkYXRhOiBUaWxlW10gfCBVUkxUaWxlIHwgUmVwZXRpdGl2ZVRpbGVcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlT3ZlcmxheU9wdGlvbnMge1xyXG4gICAgdGlsZVByb3ZpZGVyOiBUaWxlUHJvdmlkZXIsXHJcbiAgICBmYWRlSW4/OiBib29sZWFuLFxyXG4gICAgdHJhbnNwYXJlbmN5PzogbnVtYmVyLFxyXG4gICAgdmlzaWJsZT86IGJvb2xlYW4sXHJcbiAgICB6SW5kZXg/OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBbmltYXRpb24ge1xyXG4gICAgZmlsbE1vZGU/OiBudW1iZXIsXHJcbiAgICBkdXJhdGlvbj86IG51bWJlcixcclxuICAgIHJlcGVhdENvdW50PzogbnVtYmVyLFxyXG4gICAgcmVwZWF0TW9kZT86IG51bWJlcixcclxuICAgIGludGVycG9sYXRvcj86IEludGVycG9sYXRvcixcclxuICAgIGFuaW1hdGlvblN0YXJ0PzogKCkgPT4gdm9pZCxcclxuICAgIGFuaW1hdGlvbkVuZD86ICgpID0+IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSb3RhdGVBbmltYXRpb24gZXh0ZW5kcyBBbmltYXRpb24ge1xyXG4gICAgZnJvbURlZ3JlZTogbnVtYmVyO1xyXG4gICAgdG9EZWdyZWU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTY2FsZUFuaW1hdGlvbiBleHRlbmRzIEFuaW1hdGlvbiB7XHJcbiAgICBmcm9tWDogbnVtYmVyO1xyXG4gICAgdG9YOiBudW1iZXI7XHJcbiAgICBmcm9tWTogbnVtYmVyO1xyXG4gICAgdG9ZOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNsYXRlQW5pbWF0aW9uIGV4dGVuZHMgQW5pbWF0aW9uIHtcclxuICAgIHRhcmdldDogTGF0TG5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFscGhhQW5pbWF0aW9uIGV4dGVuZHMgQW5pbWF0aW9uIHtcclxuICAgIGZyb21BbHBoYTogbnVtYmVyO1xyXG4gICAgdG9BbHBoYTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhbmNlbGFibGVDYWxsYmFjayB7XHJcbiAgICBvbkZpbmlzaDogKCkgPT4gdm9pZCxcclxuICAgIG9uQ2FuY2VsOiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5mb1dpbmRvd0FkYXB0ZXIge1xyXG4gICAgZmlsZTogc3RyaW5nLFxyXG4gICAgd2lkdGg6IG51bWJlcixcclxuICAgIGhlaWdodDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9jYXRpb25Tb3VyY2Uge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb21wdXRlRGlzdGFuY2VSZXN1bHQge1xyXG4gICAgcmVzdWx0OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XHJcbiAgICB4OiBudW1iZXIsXHJcbiAgICB5OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbmFwc2hvdFJlc3VsdCB7XHJcbiAgICBkYXRhOiBzdHJpbmcsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmlzaWJsZVJlZ2lvbiB7XHJcbiAgICBmYXJMZWZ0OiBMYXRMbmcsXHJcbiAgICBmYXJSaWdodDogTGF0TG5nLFxyXG4gICAgbGF0TG5nQm91bmRzOiBMYXRMbmdCb3VuZHMsXHJcbiAgICBuZWFyTGVmdDogTGF0TG5nLFxyXG4gICAgbmVhclJpZ2h0OiBMYXRMbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnRlcnBvbGF0b3Ige1xyXG4gICAgdHlwZTogSW50ZXJwb2xhdG9yVHlwZSxcclxuICAgIGFyZ3M/OiBhbnlcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRU5VTVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuZXhwb3J0IGVudW0gVGlsZVR5cGUge1xyXG4gICAgVVJMX1RJTEUsXHJcbiAgICBSRVBFVElUSVZFX1RJTEUsXHJcbiAgICBMT0NBTF9USUxFXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENvbG9yIHtcclxuICAgIFJFRCA9IC02NTUzNixcclxuICAgIERBUktfR1JBWSA9IC0xMjMwMzI5MixcclxuICAgIEdSQVkgPSAtNzgyOTM2OCxcclxuICAgIFdISVRFID0gLTEsXHJcbiAgICBCTFVFID0gLTE2Nzc2OTYxLFxyXG4gICAgQkxBQ0sgPSAtMTY3NzcyMTYsXHJcbiAgICBMSVRFX0dSQVkgPSAtMzM1NTQ0NCxcclxuICAgIE1BR0VOVEEgPSAtNjUyODEsXHJcbiAgICBZRUxMT1cgPSAtMjU2LFxyXG4gICAgQ1lBTiA9IC0xNjcxMTY4MSxcclxuICAgIEdSRUVOID0gLTE2NzExOTM2LFxyXG4gICAgVFJBTlNQQVJFTlQgPSAwXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEpvaW50VHlwZSB7XHJcbiAgICBST1VORCA9IDIsXHJcbiAgICBCRVZFTCA9IDEsXHJcbiAgICBERUZBVUxUID0gMFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBNYXBFdmVudCB7XHJcbiAgICBPTl9JTkRPT1JfQlVJTERJTkdTX0ZPQ1VTRUQgPSAnb25JbmRvb3JCdWlsZGluZ3NGb2N1c2VkJyxcclxuICAgIE9OX0lORE9PUl9MRVZFTF9BQ1RJVkFURUQgPSAnb25JbmRvb3JMZXZlbEFjdGl2YXRlZCcsXHJcbiAgICBPTl9NQVBfTE9BREVEID0gJ29uTWFwTG9hZGVkJyxcclxuICAgIE9OX0NBTUVSQV9JRExFID0gJ29uQ2FtZXJhSWRsZScsXHJcbiAgICBPTl9DQU1FUkFfTU9WRV9DQU5DRUxFRCA9ICdvbkNhbWVyYU1vdmVDYW5jZWxlZCcsXHJcbiAgICBPTl9DQU1FUkFfTU9WRSA9ICdvbkNhbWVyYU1vdmUnLFxyXG4gICAgT05fQ0FNRVJBX01PVkVfU1RBUlRFRCA9ICdvbkNhbWVyYU1vdmVTdGFydGVkJyxcclxuICAgIE9OX0NJUkNMRV9DTElDSyA9ICdvbkNpcmNsZUNsaWNrJyxcclxuICAgIE9OX0dST1VORF9PVkVSTEFZX0NMSUNLID0gJ29uR3JvdW5kT3ZlcmxheUNsaWNrJyxcclxuICAgIE9OX0lORk9fV0lORE9XX0NMSUNLID0gJ29uSW5mb1dpbmRvd0NsaWNrJyxcclxuICAgIE9OX0lORk9fV0lORE9XX0NMT1NFID0gJ29uSW5mb1dpbmRvd0Nsb3NlJyxcclxuICAgIE9OX0lORk9fV0lORE9XX0xPTkdfQ0xJQ0sgPSAnb25JbmZvV2luZG93TG9uZ0NsaWNrJyxcclxuICAgIE9OX01BUF9DTElDSyA9ICdvbk1hcENsaWNrJyxcclxuICAgIE9OX01BUF9MT05HX0NMSUNLID0gJ29uTWFwTG9uZ0NsaWNrJyxcclxuICAgIE9OX01BUktFUl9DTElDSyA9ICdvbk1hcmtlckNsaWNrJyxcclxuICAgIE9OX01BUktFUl9EUkFHX1NUQVJUID0gJ29uTWFya2VyRHJhZ1N0YXJ0JyxcclxuICAgIE9OX01BUktFUl9EUkFHID0gJ29uTWFya2VyRHJhZycsXHJcbiAgICBPTl9NQVJLRVJfRFJBR19FTkQgPSAnb25NYXJrZXJEcmFnRW5kJyxcclxuICAgIE9OX01ZX0xPQ0FUSU9OX0JVVFRPTl9DTElDSyA9ICdvbk15TG9jYXRpb25CdXR0b25DbGljaycsXHJcbiAgICBPTl9NWV9MT0NBVElPTl9DTElDSyA9ICdvbk15TG9jYXRpb25DbGljaycsXHJcbiAgICBPTl9QT0lfQ0xJQ0sgPSAnb25Qb2lDbGljaycsXHJcbiAgICBPTl9QT0xZR09OX0NMSUNLID0gJ29uUG9seWdvbkNsaWNrJyxcclxuICAgIE9OX1BPTFlMSU5FX0NMSUNLID0gJ29uUG9seWxpbmVDbGljaycsXHJcbiAgICBPTl9DQU5DRUxBQkxFX0NBTExCQUNLX0ZJTklTSCA9ICdvbkNhbmNlbGFibGVDYWxsYmFja0ZpbmlzaCcsXHJcbiAgICBPTl9DQU5DRUxBQkxFX0NBTExCQUNLX0NBTkNFTCA9ICdvbkNhbmNlbGFibGVDYWxsYmFja0NhbmNlbCcsXHJcbiAgICBPTl9TTkFQU0hPVF9SRUFEWV9DQUxMQkFDSyA9ICdvblNuYXBzaG90UmVhZHlDYWxsYmFjaydcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTWFwVHlwZSB7XHJcbiAgICBNQVBfVFlQRV9OT05FID0gMCxcclxuICAgIE1BUF9UWVBFX1NBVEVMTElURSA9IDIsXHJcbiAgICBNQVBfVFlQRV9OT1JNQUwgPSAxLFxyXG4gICAgTUFQX1RZUEVfSFlCUklEID0gNCxcclxuICAgIE1BUF9UWVBFX1RFUlJBSU4gPSAzLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBIdWUge1xyXG4gICAgSFVFX0dSRUVOID0gMTIwLFxyXG4gICAgSFVFX0FaVVJFID0gMjEwLFxyXG4gICAgSFVFX1JPU0UgPSAzMzAsXHJcbiAgICBIVUVfQ1lBTiA9IDE4MCxcclxuICAgIEhVRV9PUkFOR0UgPSAzMCxcclxuICAgIEhVRV9NQUdFTlRBID0gMzAwLFxyXG4gICAgSFVFX1ZJT0xFVCA9IDI3MCxcclxuICAgIEhVRV9ZRUxMT1cgPSA2MCxcclxuICAgIEhVRV9CTFVFID0gMjQwLFxyXG4gICAgSFVFX1JFRCA9IDAsXHJcblxyXG59XHJcblxyXG5leHBvcnQgZW51bSBQYXR0ZXJuSXRlbVR5cGUge1xyXG4gICAgVFlQRV9HQVAgPSAyLFxyXG4gICAgVFlQRV9ET1QgPSAxLFxyXG4gICAgVFlQRV9EQVNIID0gMFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDYW1lcmFNb3ZlU3RhcnRlZFJlYXNvbiB7XHJcbiAgICBSRUFTT05fQVBJX0FOSU1BVElPTiA9IDIsXHJcbiAgICBSRUFTT05fREVWRUxPUEVSX0FOSU1BVElPTiA9IDMsXHJcbiAgICBSRUFTT05fR0VTVFVSRSA9IDFcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSW50ZXJwb2xhdG9yVHlwZSB7XHJcbiAgICBMSU5FQVIsXHJcbiAgICBBQ0NFTEVSQVRFX0RFQ0VMRVJBVEUsXHJcbiAgICBBQ0NFTEVSQVRFLFxyXG4gICAgQU5USUNJUEFURSxcclxuICAgIEFOVElDSVBBVEVfT1ZFUlNIT09ULFxyXG4gICAgQk9VTkNFLFxyXG4gICAgQ1lDTEUsXHJcbiAgICBERUNFTEVSQVRFLFxyXG4gICAgT1ZFUlNIT09ULFxyXG4gICAgUEFUSFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBBbmltYXRpb25Db25zdGFudCB7XHJcbiAgICBGSUxMX01PREVfRk9SV0FSRFMgPSAwLFxyXG4gICAgRklMTF9NT0RFX0JBQ0tXQVJEUyA9IDEsXHJcbiAgICBJTkZJTklURSA9IC0xLFxyXG4gICAgUkVTVEFSVCA9IDEsXHJcbiAgICBSRVZFUlNFID0gMlxyXG59XHJcbiJdfQ==