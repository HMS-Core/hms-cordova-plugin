/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.

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
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from "@ionic-native/core";
var HMSMapOriginal = /** @class */ (function (_super) {
    __extends(HMSMapOriginal, _super);
    function HMSMapOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSMapOriginal.prototype.getMap = function (divId, huaweiMapOptions, bounds) { return cordova(this, "getMap", { "otherPromise": true }, arguments); };
    HMSMapOriginal.prototype.showMap = function (divId) { return cordova(this, "showMap", { "otherPromise": true }, arguments); };
    HMSMapOriginal.prototype.hasPermission = function () { return cordova(this, "hasPermission", { "otherPromise": true }, arguments); };
    HMSMapOriginal.prototype.convertCoordinate = function (LatLngObj) { return cordova(this, "convertCoordinate", { "otherPromise": true }, arguments); };
    HMSMapOriginal.prototype.convertCoordinates = function (LatLngListObj) { return cordova(this, "convertCoordinates", { "otherPromise": true }, arguments); };
    HMSMapOriginal.prototype.requestPermission = function () { return cordova(this, "requestPermission", { "otherPromise": true }, arguments); };
    HMSMapOriginal.prototype.computeDistanceBetween = function (from, to) { return cordova(this, "computeDistanceBetween", { "otherPromise": true }, arguments); };
    HMSMapOriginal.prototype.setApiKey = function (apiKey) { return cordova(this, "setApiKey", { "otherPromise": true }, arguments); };
    HMSMapOriginal.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSMapOriginal.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HMSMapOriginal.prototype.initialize = function (routePolicy) { return cordova(this, "initialize", { "otherPromise": true }, arguments); };
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
        this.animations.set("Rotate", animation);
    };
    AnimationSet.prototype.addScaleAnimation = function (animation) {
        this.animations.set("Scale", animation);
    };
    AnimationSet.prototype.addTranslateAnimation = function (animation) {
        this.animations.set("Translate", animation);
    };
    AnimationSet.prototype.addAlphaAnimation = function (animation) {
        this.animations.set("Alpha", animation);
    };
    return AnimationSet;
}());
export { AnimationSet };
export var RadiusUnit;
(function (RadiusUnit) {
    RadiusUnit["PIXEL"] = "pixel";
    RadiusUnit["METER"] = "meter";
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
export var Gravity;
(function (Gravity) {
    Gravity[Gravity["TOP"] = 48] = "TOP";
    Gravity[Gravity["BOTTOM"] = 80] = "BOTTOM";
    Gravity[Gravity["START"] = 8388611] = "START";
    Gravity[Gravity["END"] = 8388613] = "END";
})(Gravity || (Gravity = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBaUJBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBVTVDLDBCQUFpQjs7OztJQUV6Qyx1QkFBTSxhQUNGLEtBQWEsRUFDYixnQkFBa0MsRUFDbEMsTUFBa0I7SUFNdEIsd0JBQU8sYUFBQyxLQUFhO0lBS3JCLDhCQUFhO0lBS2Isa0NBQWlCLGFBQUMsU0FBb0I7SUFLdEMsbUNBQWtCLGFBQUMsYUFBNEI7SUFLL0Msa0NBQWlCO0lBS2pCLHVDQUFzQixhQUNsQixJQUFZLEVBQ1osRUFBVTtJQU1kLDBCQUFTLGFBQUMsTUFBYztJQUt4Qiw4QkFBYTtJQUtiLDZCQUFZO0lBS1osMkJBQVUsYUFBQyxXQUFvQjs7Ozs7O2lCQXRGbkM7RUEyQjRCLGlCQUFpQjtTQUFoQyxNQUFNOztJQXdFZjtJQUF3QixDQUFDO0lBRWxCLHFDQUFpQixHQUF4QixVQUF5QixjQUE4QjtRQUNuRCxPQUFPLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FDM0QsY0FBYyxDQUNqQixDQUFDO0lBQ04sQ0FBQztJQUVNLDZCQUFTLEdBQWhCLFVBQWlCLE1BQWM7UUFDM0IsT0FBTyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFPTSxtQ0FBZSxHQUF0QixVQUNJLFlBQTBCLEVBQzFCLE9BQWUsRUFDZixLQUFjLEVBQ2QsTUFBZTtRQUVmLE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FDekQsWUFBWSxFQUNaLE9BQU8sRUFDUCxLQUFLLEVBQ0wsTUFBTSxDQUNULENBQUM7SUFDTixDQUFD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QVcsQ0FBQTtJQUNYLCtEQUFXLENBQUE7QUFDZixDQUFDLEVBTlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQU01QjtBQUVELE1BQU0sQ0FBTixJQUFZLE9BS1g7QUFMRCxXQUFZLE9BQU87SUFDZixvQ0FBUSxDQUFBO0lBQ1IsMENBQVcsQ0FBQTtJQUNYLDZDQUFlLENBQUE7SUFDZix5Q0FBYSxDQUFBO0FBQ2pCLENBQUMsRUFMVyxPQUFPLEtBQVAsT0FBTyxRQUtsQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQ29weXJpZ2h0IDIwMjAtMjAyMy4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcbiAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tIFwiQGlvbmljLW5hdGl2ZS9jb3JlXCI7XG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6IFwiSE1TTWFwXCIsXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1tYXBcIixcbiAgICBwbHVnaW5SZWY6IFwiSE1TTWFwXCIsXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNNYXAgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRNYXAoXG4gICAgICAgIGRpdklkOiBzdHJpbmcsXG4gICAgICAgIGh1YXdlaU1hcE9wdGlvbnM6IEh1YXdlaU1hcE9wdGlvbnMsXG4gICAgICAgIGJvdW5kcz86IE1hcEJvdW5kc1xuICAgICk6IFByb21pc2U8SHVhd2VpTWFwPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNob3dNYXAoZGl2SWQ6IHN0cmluZyk6IFByb21pc2U8SHVhd2VpTWFwPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGNvbnZlcnRDb29yZGluYXRlKExhdExuZ09iajogTGF0TG5nT2JqKTogUHJvbWlzZTxMYXRMbmdPYmo+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgY29udmVydENvb3JkaW5hdGVzKExhdExuZ0xpc3RPYmo6IExhdExuZ0xpc3RPYmopOiBQcm9taXNlPExhdExuZ0xpc3RPYmpbXT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICByZXF1ZXN0UGVybWlzc2lvbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgY29tcHV0ZURpc3RhbmNlQmV0d2VlbihcbiAgICAgICAgZnJvbTogTGF0TG5nLFxuICAgICAgICB0bzogTGF0TG5nXG4gICAgKTogUHJvbWlzZTxDb21wdXRlRGlzdGFuY2VSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QXBpS2V5KGFwaUtleTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGRpc2FibGVMb2dnZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGVuYWJsZUxvZ2dlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgaW5pdGlhbGl6ZShyb3V0ZVBvbGljeT86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiBcIkhNU01hcFwiLFxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtbWFwXCIsXG4gICAgcGx1Z2luUmVmOiBcIkhNU01hcC5DYW1lcmFVcGRhdGVGYWN0b3J5XCIsXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBDYW1lcmFVcGRhdGVGYWN0b3J5IHtcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBzdGF0aWMgbmV3Q2FtZXJhUG9zaXRpb24oY2FtZXJhUG9zaXRpb246IENhbWVyYVBvc2l0aW9uKTogQ2FtZXJhVXBkYXRlIHtcbiAgICAgICAgcmV0dXJuIEhNU01hcC5nZXRQbHVnaW4oKS5DYW1lcmFVcGRhdGVGYWN0b3J5Lm5ld0NhbWVyYVBvc2l0aW9uKFxuICAgICAgICAgICAgY2FtZXJhUG9zaXRpb25cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbmV3TGF0TG5nKGxhdExuZzogTGF0TG5nKTogQ2FtZXJhVXBkYXRlIHtcbiAgICAgICAgcmV0dXJuIEhNU01hcC5nZXRQbHVnaW4oKS5DYW1lcmFVcGRhdGVGYWN0b3J5Lm5ld0xhdExuZyhsYXRMbmcpO1xuICAgIH1cblxuICAgIHN0YXRpYyBuZXdMYXRMbmdCb3VuZHMoXG4gICAgICAgIGxhdExuZ0JvdW5kczogTGF0TG5nQm91bmRzLFxuICAgICAgICBwYWRkaW5nOiBudW1iZXJcbiAgICApOiBDYW1lcmFVcGRhdGU7XG5cbiAgICBzdGF0aWMgbmV3TGF0TG5nQm91bmRzKFxuICAgICAgICBsYXRMbmdCb3VuZHM6IExhdExuZ0JvdW5kcyxcbiAgICAgICAgcGFkZGluZzogbnVtYmVyLFxuICAgICAgICB3aWR0aD86IG51bWJlcixcbiAgICAgICAgaGVpZ2h0PzogbnVtYmVyXG4gICAgKTogQ2FtZXJhVXBkYXRlIHtcbiAgICAgICAgcmV0dXJuIEhNU01hcC5nZXRQbHVnaW4oKS5DYW1lcmFVcGRhdGVGYWN0b3J5Lm5ld0xhdExuZ0JvdW5kcyhcbiAgICAgICAgICAgIGxhdExuZ0JvdW5kcyxcbiAgICAgICAgICAgIHBhZGRpbmcsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBuZXdMYXRMbmdab29tKGxhdExuZzogTGF0TG5nLCB6b29tOiBudW1iZXIpOiBDYW1lcmFVcGRhdGUge1xuICAgICAgICByZXR1cm4gSE1TTWFwLmdldFBsdWdpbigpLkNhbWVyYVVwZGF0ZUZhY3RvcnkubmV3TGF0TG5nWm9vbShcbiAgICAgICAgICAgIGxhdExuZyxcbiAgICAgICAgICAgIHpvb21cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2Nyb2xsQnkoeFBpeGVsOiBudW1iZXIsIHlQaXhlbDogbnVtYmVyKTogQ2FtZXJhVXBkYXRlIHtcbiAgICAgICAgcmV0dXJuIEhNU01hcC5nZXRQbHVnaW4oKS5DYW1lcmFVcGRhdGVGYWN0b3J5LnNjcm9sbEJ5KHhQaXhlbCwgeVBpeGVsKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgem9vbUJ5KGFtb3VudDogbnVtYmVyKTogQ2FtZXJhVXBkYXRlO1xuXG4gICAgc3RhdGljIHpvb21CeShhbW91bnQ6IG51bWJlciwgZm9jdXM/OiBQb2ludCk6IENhbWVyYVVwZGF0ZSB7XG4gICAgICAgIHJldHVybiBITVNNYXAuZ2V0UGx1Z2luKCkuQ2FtZXJhVXBkYXRlRmFjdG9yeS56b29tQnkoYW1vdW50LCBmb2N1cyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHpvb21JbigpOiBDYW1lcmFVcGRhdGUge1xuICAgICAgICByZXR1cm4gSE1TTWFwLmdldFBsdWdpbigpLkNhbWVyYVVwZGF0ZUZhY3Rvcnkuem9vbUluKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHpvb21PdXQoKTogQ2FtZXJhVXBkYXRlIHtcbiAgICAgICAgcmV0dXJuIEhNU01hcC5nZXRQbHVnaW4oKS5DYW1lcmFVcGRhdGVGYWN0b3J5Lnpvb21PdXQoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgem9vbVRvKHpvb206IG51bWJlcik6IENhbWVyYVVwZGF0ZSB7XG4gICAgICAgIHJldHVybiBITVNNYXAuZ2V0UGx1Z2luKCkuQ2FtZXJhVXBkYXRlRmFjdG9yeS56b29tVG8oem9vbSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWFwU3R5bGVPcHRpb25zIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlc291cmNlTmFtZTogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihyZXNvdXJjZU5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnJlc291cmNlTmFtZSA9IHJlc291cmNlTmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGxvYWRSYXdSZXNvdXJjZVN0eWxlKHJlc291cmNlTmFtZTogc3RyaW5nKTogTWFwU3R5bGVPcHRpb25zIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNYXBTdHlsZU9wdGlvbnMocmVzb3VyY2VOYW1lKTtcbiAgICB9XG5cbiAgICBnZXRSZXNvdXJjZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb3VyY2VOYW1lO1xuICAgIH1cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENhcCB7XG4gICAgc3RhdGljIHJlYWRvbmx5IFRZUEVfQlVUVF9DQVAgPSAwO1xuICAgIHN0YXRpYyByZWFkb25seSBUWVBFX1NRVUFSRV9DQVAgPSAxO1xuICAgIHN0YXRpYyByZWFkb25seSBUWVBFX1JPVU5EX0NBUCA9IDI7XG4gICAgc3RhdGljIHJlYWRvbmx5IFRZUEVfQ1VTVE9NX0NBUCA9IDM7XG4gICAgcHJvdGVjdGVkIHR5cGU6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgcmVmV2lkdGg/OiBudW1iZXIgPSBudWxsO1xuICAgIHByb3RlY3RlZCBiaXRtYXBEZXNjcmlwdG9yPzogQml0bWFwRGVzY3JpcHRvciA9IG51bGw7XG5cbiAgICBnZXRUeXBlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQnV0dENhcCBleHRlbmRzIENhcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9IDA7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUm91bmRDYXAgZXh0ZW5kcyBDYXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAyO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNxdWFyZUNhcCBleHRlbmRzIENhcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9IDE7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3VzdG9tQ2FwIGV4dGVuZHMgQ2FwIHtcbiAgICBjb25zdHJ1Y3RvcihiaXRtYXBEZXNjcmlwdG9yOiBCaXRtYXBEZXNjcmlwdG9yLCByZWZXaWR0aD86IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAzO1xuICAgICAgICB0aGlzLmJpdG1hcERlc2NyaXB0b3IgPSBiaXRtYXBEZXNjcmlwdG9yO1xuICAgICAgICB0aGlzLnJlZldpZHRoID0gcmVmV2lkdGg7XG4gICAgfVxuXG4gICAgZ2V0UmVmV2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmV2lkdGg7XG4gICAgfVxuXG4gICAgZ2V0Qml0bWFwRGVzY3JpcHRvcigpOiBCaXRtYXBEZXNjcmlwdG9yIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYml0bWFwRGVzY3JpcHRvcjtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBbmltYXRpb25TZXQge1xuICAgIHJlYWRvbmx5IGFuaW1hdGlvbnM6IE1hcDxzdHJpbmcsIEFuaW1hdGlvbj4gPSBuZXcgTWFwPHN0cmluZywgQW5pbWF0aW9uPigpO1xuXG4gICAgYWRkUm90YXRlQW5pbWF0aW9uKGFuaW1hdGlvbjogUm90YXRlQW5pbWF0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5zZXQoXCJSb3RhdGVcIiwgYW5pbWF0aW9uKTtcbiAgICB9XG5cbiAgICBhZGRTY2FsZUFuaW1hdGlvbihhbmltYXRpb246IFNjYWxlQW5pbWF0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5zZXQoXCJTY2FsZVwiLCBhbmltYXRpb24pO1xuICAgIH1cblxuICAgIGFkZFRyYW5zbGF0ZUFuaW1hdGlvbihhbmltYXRpb246IFRyYW5zbGF0ZUFuaW1hdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMuc2V0KFwiVHJhbnNsYXRlXCIsIGFuaW1hdGlvbik7XG4gICAgfVxuXG4gICAgYWRkQWxwaGFBbmltYXRpb24oYW5pbWF0aW9uOiBBbHBoYUFuaW1hdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMuc2V0KFwiQWxwaGFcIiwgYW5pbWF0aW9uKTtcbiAgICB9XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0lOVEVSRkFDRVMvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBpbnRlcmZhY2UgVWlTZXR0aW5ncyB7XG4gICAgaXNDb21wYXNzRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIGlzSW5kb29yTGV2ZWxQaWNrZXJFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgaXNNYXBUb29sYmFyRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIGlzTXlMb2NhdGlvbkJ1dHRvbkVuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBpc1JvdGF0ZUdlc3R1cmVzRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIGlzU2Nyb2xsR2VzdHVyZXNFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgaXNTY3JvbGxHZXN0dXJlc0VuYWJsZWREdXJpbmdSb3RhdGVPclpvb20oKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBpc1RpbHRHZXN0dXJlc0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBpc1pvb21Db250cm9sc0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBpc1pvb21HZXN0dXJlc0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBzZXRBbGxHZXN0dXJlc0VuYWJsZWQoYWxsR2VzdHVyZXNFbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRDb21wYXNzRW5hYmxlZChjb21wYXNzRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0SW5kb29yTGV2ZWxQaWNrZXJFbmFibGVkKFxuICAgICAgICBpbmRvb3JMZXZlbFBpY2tlckVuYWJsZWQ6IGJvb2xlYW5cbiAgICApOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldE1hcFRvb2xiYXJFbmFibGVkKG1hcFRvb2xiYXJFbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRNeUxvY2F0aW9uQnV0dG9uRW5hYmxlZChteUxvY2F0aW9uQnV0dG9uRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0Um90YXRlR2VzdHVyZXNFbmFibGVkKHJvdGF0ZUdlc3R1cmVzRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0U2Nyb2xsR2VzdHVyZXNFbmFibGVkKHNjcm9sbEdlc3R1cmVzRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0U2Nyb2xsR2VzdHVyZXNFbmFibGVkRHVyaW5nUm90YXRlT3Jab29tKFxuICAgICAgICBzY3JvbGxHZXN0dXJlc0VuYWJsZWREdXJpbmdSb3RhdGVPclpvb206IGJvb2xlYW5cbiAgICApOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFRpbHRHZXN0dXJlc0VuYWJsZWQodGlsdEdlc3R1cmVzRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0Wm9vbUNvbnRyb2xzRW5hYmxlZCh6b29tQ29udHJvbHNFbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRab29tR2VzdHVyZXNFbmFibGVkKHpvb21HZXN0dXJlc0VuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldEdlc3R1cmVTY2FsZUJ5TWFwQ2VudGVyKFxuICAgICAgICBnZXN0dXJlU2NhbGVCeU1hcENlbnRlckVuYWJsZWQ6IGJvb2xlYW5cbiAgICApOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldE1hcmtlckNsdXN0ZXJDb2xvcihtYXJrZXJDbHVzdGVyQ29sb3I6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0TWFya2VyQ2x1c3Rlckljb24obWFya2VyQ2x1c3Rlckljb246IEJpdG1hcERlc2NyaXB0b3IpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldE1hcmtlckNsdXN0ZXJUZXh0Q29sb3IobWFya2VyQ2x1c3RlclRleHRDb2xvcjogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRMb2dvUG9zaXRpb24obG9nb1Bvc2l0aW9uOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldExvZ29QYWRkaW5nKFxuICAgICAgICBwYWRkaW5nU3RhcnQ6IG51bWJlcixcbiAgICAgICAgcGFkZGluZ1RvcDogbnVtYmVyLFxuICAgICAgICBwYWRkaW5nRW5kOiBudW1iZXIsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IG51bWJlclxuICAgICk6IFByb21pc2U8dm9pZD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSHVhd2VpTWFwIHtcbiAgICBvbihldmVudDogTWFwRXZlbnQsIGNhbGxiYWNrOiAodmFsOiBhbnkpID0+IHZvaWQpOiBQcm9taXNlPHZvaWQ+O1xuICAgIGRlc3Ryb3lNYXAoKTogUHJvbWlzZTx2b2lkPjtcbiAgICBoaWRlTWFwKCk6IFByb21pc2U8dm9pZD47XG4gICAgZ2V0Q29tcG9uZW50KGtleTogc3RyaW5nKTogYW55O1xuICAgIHJlbW92ZUNvbXBvbmVudChrZXk6IHN0cmluZyk6IHZvaWQ7XG4gICAgZ2V0SWQoKTogbnVtYmVyO1xuICAgIHNjcm9sbCgpOiB2b2lkO1xuICAgIHN5bmNEaW1lbnNpb25zKCk6IHZvaWQ7XG4gICAgYWRkQ2lyY2xlKGNpcmNsZU9wdGlvbnM6IENpcmNsZU9wdGlvbnMpOiBQcm9taXNlPENpcmNsZT47XG4gICAgYWRkSGVhdE1hcChoZWF0TWFwT3B0aW9uczogSGVhdE1hcE9wdGlvbnMpOiBQcm9taXNlPEhlYXRNYXA+XG4gICAgYWRkTWFya2VyKG1hcmtlck9wdGlvbnM6IE1hcmtlck9wdGlvbnMpOiBQcm9taXNlPE1hcmtlcj47XG4gICAgYWRkR3JvdW5kT3ZlcmxheShcbiAgICAgICAgZ3JvdW5kT3ZlcmxheU9wdGlvbnM6IEdyb3VuZE92ZXJsYXlPcHRpb25zXG4gICAgKTogUHJvbWlzZTxHcm91bmRPdmVybGF5PjtcbiAgICBhZGRUaWxlT3ZlcmxheShcbiAgICAgICAgdGlsZU92ZXJsYXlPcHRpb25zOiBUaWxlT3ZlcmxheU9wdGlvbnNcbiAgICApOiBQcm9taXNlPFRpbGVPdmVybGF5PjtcbiAgICBhZGRQb2x5Z29uKHBvbHlnb25PcHRpb25zOiBQb2x5Z29uT3B0aW9ucyk6IFByb21pc2U8UG9seWdvbj47XG4gICAgYWRkUG9seWxpbmUocG9seWxpbmVPcHRpb25zOiBQb2x5bGluZU9wdGlvbnMpOiBQcm9taXNlPFBvbHlsaW5lPjtcbiAgICBhbmltYXRlQ2FtZXJhKGNhbWVyYVVwZGF0ZTogQ2FtZXJhVXBkYXRlKTogUHJvbWlzZTx2b2lkPjtcbiAgICBhbmltYXRlQ2FtZXJhKFxuICAgICAgICBjYW1lcmFVcGRhdGU6IENhbWVyYVVwZGF0ZSxcbiAgICAgICAgY2FuY2VsYWJsZUNhbGxiYWNrOiBDYW5jZWxhYmxlQ2FsbGJhY2tcbiAgICApOiBQcm9taXNlPHZvaWQ+O1xuICAgIGFuaW1hdGVDYW1lcmEoXG4gICAgICAgIGNhbWVyYVVwZGF0ZTogQ2FtZXJhVXBkYXRlLFxuICAgICAgICBjYW5jZWxhYmxlQ2FsbGJhY2s/OiBDYW5jZWxhYmxlQ2FsbGJhY2ssXG4gICAgICAgIGR1cmF0aW9uTXM/OiBudW1iZXJcbiAgICApOiBQcm9taXNlPHZvaWQ+O1xuICAgIG1vdmVDYW1lcmEoY2FtZXJhVXBkYXRlOiBDYW1lcmFVcGRhdGUpOiBQcm9taXNlPHZvaWQ+O1xuICAgIGNsZWFyKCk6IFByb21pc2U8dm9pZD47XG4gICAgcmVzZXRNaW5NYXhab29tUHJlZmVyZW5jZSgpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHN0b3BBbmltYXRpb24oKTogUHJvbWlzZTx2b2lkPjtcbiAgICBnZXRDYW1lcmFQb3NpdGlvbigpOiBQcm9taXNlPENhbWVyYVBvc2l0aW9uPjtcbiAgICBnZXRNYXBUeXBlKCk6IFByb21pc2U8TWFwVHlwZT47XG4gICAgZ2V0TWF4Wm9vbUxldmVsKCk6IFByb21pc2U8bnVtYmVyPjtcbiAgICBnZXRNaW5ab29tTGV2ZWwoKTogUHJvbWlzZTxudW1iZXI+O1xuICAgIGdldFByb2plY3Rpb24oKTogUHJvamVjdGlvbjtcbiAgICBnZXRVaVNldHRpbmdzKCk6IFVpU2V0dGluZ3M7XG4gICAgaXNCdWlsZGluZ3NFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgaXNEYXJrKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgaXNNeUxvY2F0aW9uRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIGlzVHJhZmZpY0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBpc0luZG9vckVuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBzZXRCdWlsZGluZ3NFbmFibGVkKGJ1aWxkaW5nc0VuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldERhcmtFbmFibGVkKGRhcmtFbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRDb250ZW50RGVzY3JpcHRpb24oY29udGVudERlc2NyaXB0aW9uOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldEluZm9XaW5kb3dBZGFwdGVyKGluZm9XaW5kb3dBZGFwdGVyOiBJbmZvV2luZG93QWRhcHRlcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0TGF0TG5nQm91bmRzRm9yQ2FtZXJhVGFyZ2V0KFxuICAgICAgICBsYXRMbmdCb3VuZHNGb3JDYW1lcmFUYXJnZXQ6IExhdExuZ0JvdW5kc1xuICAgICk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0TG9jYXRpb25Tb3VyY2UobG9jYXRpb25Tb3VyY2U6IExvY2F0aW9uU291cmNlKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRNYXBTdHlsZShtYXBTdHlsZTogTWFwU3R5bGVPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRNYXBUeXBlKG1hcFR5cGU6IE1hcFR5cGUpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldE1hcmtlcnNDbHVzdGVyaW5nKG1hcmtlcnNDbHVzdGVyaW5nOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRNYXhab29tUHJlZmVyZW5jZShtYXhab29tUHJlZmVyZW5jZTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRNaW5ab29tUHJlZmVyZW5jZShtaW5ab29tUHJlZmVyZW5jZTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRNeUxvY2F0aW9uRW5hYmxlZChteUxvY2F0aW9uRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0UGFkZGluZyhcbiAgICAgICAgbGVmdDogbnVtYmVyLFxuICAgICAgICB0b3A6IG51bWJlcixcbiAgICAgICAgcmlnaHQ6IG51bWJlcixcbiAgICAgICAgYm90dG9tOiBudW1iZXJcbiAgICApOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFRyYWZmaWNFbmFibGVkKHRyYWZmaWNFbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzbmFwc2hvdChcbiAgICAgICAgb25SZWFkeUNhbGxiYWNrOiAoc25hcHNob3Q6IFNuYXBzaG90UmVzdWx0KSA9PiB2b2lkXG4gICAgKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRNYXBQb2ludGVyc0VuYWJsZWQobWFwUG9pbnRlcnNFbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBpc01hcFBvaW50ZXJzRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIHNldFBvaW50VG9DZW50ZXIoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFN0eWxlSWQoc3R5bGVJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcbiAgICBwcmV2aWV3SWQocHJldmlld0lkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVVwZGF0ZSB7XG4gICAgbW92ZUNhbWVyYShtYXBJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+O1xuICAgIGFuaW1hdGVDYW1lcmEobWFwSWQ6IHN0cmluZywgcHJvcHM6IGFueSk6IFByb21pc2U8YW55Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaXJjbGUge1xuICAgIGdldENlbnRlcigpOiBQcm9taXNlPExhdExuZz47XG4gICAgZ2V0RmlsbENvbG9yKCk6IFByb21pc2U8Q29sb3I+O1xuICAgIGdldElkKCk6IHN0cmluZztcbiAgICBnZXRSYWRpdXMoKTogUHJvbWlzZTxudW1iZXI+O1xuICAgIGdldFN0cm9rZUNvbG9yKCk6IFByb21pc2U8Q29sb3I+O1xuICAgIGdldFN0cm9rZVBhdHRlcm4oKTogUHJvbWlzZTxQYXR0ZXJuSXRlbVtdPjtcbiAgICBnZXRTdHJva2VXaWR0aCgpOiBQcm9taXNlPG51bWJlcj47XG4gICAgZ2V0VGFnKCk6IFByb21pc2U8YW55PjtcbiAgICBnZXRaSW5kZXgoKTogUHJvbWlzZTxudW1iZXI+O1xuICAgIGlzQ2xpY2thYmxlKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgaXNWaXNpYmxlKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgcmVtb3ZlKCk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0Q2VudGVyKGNlbnRlcjogTGF0TG5nKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRGaWxsQ29sb3IoZmlsbENvbG9yOiBDb2xvcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0UmFkaXVzKHJhZGl1czogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRTdHJva2VDb2xvcihzdHJva2VDb2xvcjogQ29sb3IpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFN0cm9rZVBhdHRlcm4oc3Ryb2tlUGF0dGVybjogUGF0dGVybkl0ZW1bXSk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0U3Ryb2tlV2lkdGgoc3Ryb2tlV2lkdGg6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0VGFnKHRhZzogYW55KTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRaSW5kZXgoekluZGV4OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldENsaWNrYWJsZShjbGlja2FibGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVhdE1hcCB7XG5cbiAgICBnZXRJZCgpOiBzdHJpbmc7XG4gICAgcmVtb3ZlKCk6IFByb21pc2U8dm9pZD47XG4gICAgY2hhbmdlRGF0YVNldChqc29uRGF0YTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcbiAgICBjaGFuZ2VEYXRhU2V0SWQocmVzb3VyY2VJZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBnZXRSYWRpdXNVbml0KCk6IFByb21pc2U8UmFkaXVzVW5pdD47XG4gICAgc2V0UmFkaXVzVW5pdChyYWRpdXNVbml0OiBSYWRpdXNVbml0KTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRDb2xvcihjb2xvcjogTWFwPG51bWJlciwgTnVtYmVyW10+KTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRJbnRlbnNpdHkoaW50ZW5zaXR5OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldEludGVuc2l0aWVzKGludGVuc2l0aWVzOiBNYXA8bnVtYmVyLCBudW1iZXI+KTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRPcGFjaXR5KG9wYWNpdHk6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0T3BhY2l0aWVzKE9wYWNpdGllczogTWFwPG51bWJlciwgbnVtYmVyPik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0UmFkaXVzKHJhZGl1czogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRSYWRpdXNlcyhyYWRpdXNlczogTWFwPG51bWJlciwgbnVtYmVyPik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcblxufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JvdW5kT3ZlcmxheSB7XG4gICAgZ2V0QmVhcmluZygpOiBQcm9taXNlPG51bWJlcj47XG4gICAgZ2V0Qm91bmRzKCk6IFByb21pc2U8TGF0TG5nQm91bmRzPjtcbiAgICBnZXRIZWlnaHQoKTogUHJvbWlzZTxudW1iZXI+O1xuICAgIGdldElkKCk6IHN0cmluZztcbiAgICBnZXRQb3NpdGlvbigpOiBQcm9taXNlPExhdExuZz47XG4gICAgZ2V0VGFnKCk6IFByb21pc2U8YW55PjtcbiAgICBnZXRUcmFuc3BhcmVuY3koKTogUHJvbWlzZTxudW1iZXI+O1xuICAgIGdldFdpZHRoKCk6IFByb21pc2U8bnVtYmVyPjtcbiAgICBnZXRaSW5kZXgoKTogUHJvbWlzZTxudW1iZXI+O1xuICAgIGlzQ2xpY2thYmxlKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgaXNWaXNpYmxlKCk6IFByb21pc2U8Ym9vbGVhbj47XG5cbiAgICByZW1vdmUoKTogUHJvbWlzZTx2b2lkPjtcblxuICAgIHNldEJlYXJpbmcoYmVhcmluZzogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRDbGlja2FibGUoY2xpY2thYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXREaW1lbnNpb25zKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXREaW1lbnNpb25zKHdpZHRoOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldEltYWdlKGltYWdlRGVzY3JpcHRvcjogQml0bWFwRGVzY3JpcHRvcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0UG9zaXRpb24ocG9zaXRpb246IExhdExuZyk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0UG9zaXRpb25Gcm9tQm91bmRzKHBvc2l0aW9uTGF0TG5nQm91bmRzOiBMYXRMbmdCb3VuZHMpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFRhZyh0YWc6IGFueSk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0VHJhbnNwYXJlbmN5KHRyYW5zcGFyZW5jeTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFpJbmRleCh6SW5kZXg6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFya2VyIHtcbiAgICBnZXRBbHBoYSgpOiBQcm9taXNlPG51bWJlcj47XG4gICAgZ2V0SWQoKTogc3RyaW5nO1xuICAgIGdldFBvc2l0aW9uKCk6IFByb21pc2U8TGF0TG5nPjtcbiAgICBnZXRSb3RhdGlvbigpOiBQcm9taXNlPG51bWJlcj47XG4gICAgZ2V0U25pcHBldCgpOiBQcm9taXNlPHN0cmluZz47XG4gICAgZ2V0VGFnKCk6IFByb21pc2U8YW55PjtcbiAgICBnZXRUaXRsZSgpOiBQcm9taXNlPHN0cmluZz47XG4gICAgZ2V0WkluZGV4KCk6IFByb21pc2U8bnVtYmVyPjtcbiAgICBpc1Zpc2libGUoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBpc0NsdXN0ZXJhYmxlKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgaXNEcmFnZ2FibGUoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBpc0ZsYXQoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBpc0luZm9XaW5kb3dTaG93bigpOiBQcm9taXNlPGJvb2xlYW4+O1xuXG4gICAgcmVtb3ZlKCk6IFByb21pc2U8dm9pZD47XG4gICAgaGlkZUluZm9XaW5kb3coKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzaG93SW5mb1dpbmRvdygpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHN0YXJ0QW5pbWF0aW9uKCk6IFByb21pc2U8dm9pZD47XG5cbiAgICBzZXRBbHBoYShhbHBoYTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRBbmltYXRpb24oYW5pbWF0aW9uOiBBbmltYXRpb25TZXQpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldERyYWdnYWJsZShkcmFnZ2FibGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldEZsYXQoZmxhdDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0SWNvbihpY29uOiBCaXRtYXBEZXNjcmlwdG9yKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRJbmZvV2luZG93QW5jaG9yKHU6IG51bWJlciwgdjogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRNYXJrZXJBbmNob3IodTogbnVtYmVyLCB2OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFBvc2l0aW9uKGxhdExuZzogTGF0TG5nKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRSb3RhdGlvbihyb3RhdGlvbjogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRTbmlwcGV0KHNuaXBwZXQ6IFN0cmluZyk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0VGl0bGUodGl0bGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0VGFnKHRhZzogYW55KTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFpJbmRleCh6SW5kZXg6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9seWdvbiB7XG4gICAgZ2V0RmlsbENvbG9yKCk6IFByb21pc2U8Q29sb3I+O1xuICAgIGdldEhvbGVzKCk6IFByb21pc2U8TGF0TG5nW11bXT47XG4gICAgZ2V0SWQoKTogc3RyaW5nO1xuICAgIGdldFBvaW50cygpOiBQcm9taXNlPExhdExuZ1tdPjtcbiAgICBnZXRTdHJva2VDb2xvcigpOiBQcm9taXNlPENvbG9yPjtcbiAgICBnZXRTdHJva2VKb2ludFR5cGUoKTogUHJvbWlzZTxKb2ludFR5cGU+O1xuICAgIGdldFN0cm9rZVBhdHRlcm4oKTogUHJvbWlzZTxQYXR0ZXJuSXRlbVtdPjtcbiAgICBnZXRTdHJva2VXaWR0aCgpOiBQcm9taXNlPG51bWJlcj47XG4gICAgZ2V0VGFnKCk6IFByb21pc2U8YW55PjtcbiAgICBnZXRaSW5kZXgoKTogUHJvbWlzZTxudW1iZXI+O1xuICAgIGlzQ2xpY2thYmxlKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgaXNWaXNpYmxlKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgaXNHZW9kZXNpYygpOiBQcm9taXNlPGJvb2xlYW4+O1xuXG4gICAgcmVtb3ZlKCk6IFByb21pc2U8dm9pZD47XG5cbiAgICBzZXRDbGlja2FibGUoY2xpY2thYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRGaWxsQ29sb3IoY29sb3I6IENvbG9yKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRHZW9kZXNpYyhnZW9kZXNpYzogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0SG9sZXMoaG9sZXM6IExhdExuZ1tdW10pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFBvaW50cyhwb2ludHM6IExhdExuZ1tdKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRTdHJva2VDb2xvcihjb2xvcjogQ29sb3IpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFN0cm9rZUpvaW50VHlwZShqb2ludFR5cGU6IEpvaW50VHlwZSk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0U3Ryb2tlUGF0dGVybihwYXR0ZXJuSXRlbTogUGF0dGVybkl0ZW1bXSk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0U3Ryb2tlV2lkdGgod2lkdGg6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0VGFnKHRhZzogYW55KTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFpJbmRleCh6SW5kZXg6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9seWxpbmUge1xuICAgIGdldENvbG9yKCk6IFByb21pc2U8Q29sb3I+O1xuICAgIGdldEVuZENhcCgpOiBQcm9taXNlPENhcD47XG4gICAgZ2V0U3RhcnRDYXAoKTogUHJvbWlzZTxDYXA+O1xuICAgIGdldElkKCk6IHN0cmluZztcbiAgICBnZXRKb2ludFR5cGUoKTogUHJvbWlzZTxKb2ludFR5cGU+O1xuICAgIGdldFBhdHRlcm4oKTogUHJvbWlzZTxQYXR0ZXJuSXRlbVtdPjtcbiAgICBnZXRQb2ludHMoKTogUHJvbWlzZTxMYXRMbmdbXT47XG4gICAgZ2V0VGFnKCk6IFByb21pc2U8YW55PjtcbiAgICBnZXRXaWR0aCgpOiBQcm9taXNlPG51bWJlcj47XG4gICAgZ2V0WkluZGV4KCk6IFByb21pc2U8bnVtYmVyPjtcbiAgICBpc0NsaWNrYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIGlzR2VvZGVzaWMoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBpc1Zpc2libGUoKTogUHJvbWlzZTxib29sZWFuPjtcblxuICAgIHJlbW92ZSgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgc2V0Q2xpY2thYmxlKGNsaWNrYWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0Q29sb3IoY29sb3I6IENvbG9yKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRTdGFydENhcChzdGFydENhcDogQ2FwKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRFbmRDYXAoZW5kQ2FwOiBDYXApOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldEdlb2Rlc2ljKGdlb2Rlc2ljOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRKb2ludFR5cGUoam9pbnRUeXBlOiBKb2ludFR5cGUpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFBhdHRlcm4ocGF0dGVybjogUGF0dGVybkl0ZW1bXSk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0UG9pbnRzKHBvaW50czogTGF0TG5nW10pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFRhZyh0YWc6IGFueSk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRXaWR0aCh3aWR0aDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRaSW5kZXgoekluZGV4OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVPdmVybGF5IHtcbiAgICBnZXRGYWRlSW4oKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBnZXRJZCgpOiBzdHJpbmc7XG4gICAgZ2V0VHJhbnNwYXJlbmN5KCk6IFByb21pc2U8bnVtYmVyPjtcbiAgICBnZXRaSW5kZXgoKTogUHJvbWlzZTxudW1iZXI+O1xuICAgIGlzVmlzaWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+O1xuXG4gICAgcmVtb3ZlKCk6IFByb21pc2U8dm9pZD47XG4gICAgY2xlYXJUaWxlQ2FjaGUoKTogUHJvbWlzZTx2b2lkPjtcblxuICAgIHNldEZhZGVJbihmYWRlSW46IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFRyYW5zcGFyZW5jeSh0cmFuc3BhcmVuY3k6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0WkluZGV4KHpJbmRleDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2plY3Rpb24ge1xuICAgIGZyb21TY3JlZW5Mb2NhdGlvbihwb2ludDogUG9pbnQpOiBQcm9taXNlPExhdExuZz47XG4gICAgZ2V0VmlzaWJsZVJlZ2lvbigpOiBQcm9taXNlPFZpc2libGVSZWdpb24+O1xuICAgIHRvU2NyZWVuTG9jYXRpb24obGF0TG5nOiBMYXRMbmcpOiBQcm9taXNlPFBvaW50Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXBCb3VuZHMge1xuICAgIG1hcmdpblRvcD86IG51bWJlcjtcbiAgICBtYXJnaW5Cb3R0b20/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSHVhd2VpTWFwT3B0aW9ucyB7XG4gICAgbWFwVHlwZT86IE1hcFR5cGU7XG4gICAgem9vbUNvbnRyb2xzRW5hYmxlZD86IGJvb2xlYW47XG4gICAgY29tcGFzc0VuYWJsZWQ/OiBib29sZWFuO1xuICAgIHpvb21HZXN0dXJlc0VuYWJsZWQ/OiBib29sZWFuO1xuICAgIHNjcm9sbEdlc3R1cmVzRW5hYmxlZD86IGJvb2xlYW47XG4gICAgcm90YXRlR2VzdHVyZXNFbmFibGVkPzogYm9vbGVhbjtcbiAgICB0aWx0R2VzdHVyZXNFbmFibGVkPzogYm9vbGVhbjtcbiAgICB6T3JkZXJPblRvcD86IGJvb2xlYW47XG4gICAgbGl0ZU1vZGU/OiBib29sZWFuO1xuICAgIGlzRGFyaz86IGJvb2xlYW47XG4gICAgYW1iaWVudEVuYWJsZWQ/OiBib29sZWFuO1xuICAgIG1pblpvb21QcmVmZXJlbmNlPzogbnVtYmVyO1xuICAgIG1heFpvb21QcmVmZXJlbmNlPzogbnVtYmVyO1xuICAgIGNhbWVyYVBvc2l0aW9uPzogQ2FtZXJhUG9zaXRpb247XG4gICAgbGF0TG5nQm91bmRzPzogTGF0TG5nQm91bmRzO1xuICAgIHN0eWxlSWQ/OiBzdHJpbmc7XG4gICAgcHJldmlld0lkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uIHtcbiAgICBhY2N1cmFjeTogbnVtYmVyO1xuICAgIGFsdGl0dWRlOiBudW1iZXI7XG4gICAgYmVhcmluZzogbnVtYmVyO1xuICAgIGVsYXBzZWRSZWFsdGltZU5hbm9zOiBudW1iZXI7XG4gICAgbGF0aXR1ZGU6IG51bWJlcjtcbiAgICBsb25naXR1ZGU6IG51bWJlcjtcbiAgICBwcm92aWRlcjogc3RyaW5nO1xuICAgIHNwZWVkOiBudW1iZXI7XG4gICAgdGltZTogbnVtYmVyO1xuICAgIGZyb21Nb2NrUHJvdmlkZXI6IGJvb2xlYW47XG4gICAgY29udGVudHM6IG51bWJlcjtcbiAgICBiZWFyaW5nQWNjdXJhY3lEZWdyZWVzPzogbnVtYmVyO1xuICAgIHNwZWVkQWNjdXJhY3lNZXRlcnNQZXJTZWNvbmQ/OiBudW1iZXI7XG4gICAgdmVydGljYWxBY2N1cmFjeU1ldGVycz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYXRMbmdCb3VuZHMge1xuICAgIHNvdXRod2VzdDogTGF0TG5nO1xuICAgIG5vcnRoZWFzdDogTGF0TG5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVBvc2l0aW9uIHtcbiAgICB0YXJnZXQ6IExhdExuZztcbiAgICB6b29tPzogbnVtYmVyO1xuICAgIGJlYXJpbmc/OiBudW1iZXI7XG4gICAgdGlsdD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYXRMbmcge1xuICAgIGxhdDogbnVtYmVyO1xuICAgIGxuZzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhdExuZ09iaiB7XG4gICAgbGF0TG5nOiBMYXRMbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF0TG5nTGlzdE9iaiB7XG4gICAgbGF0TG5nTGlzdDogTGF0TG5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2lyY2xlT3B0aW9ucyB7XG4gICAgY2VudGVyOiBMYXRMbmc7XG4gICAgY2xpY2thYmxlPzogYm9vbGVhbjtcbiAgICBmaWxsQ29sb3I/OiBDb2xvcjtcbiAgICByYWRpdXM6IG51bWJlcjtcbiAgICBzdHJva2VDb2xvcj86IENvbG9yO1xuICAgIHN0cm9rZVdpZHRoPzogbnVtYmVyO1xuICAgIHN0cm9rZVBhdHRlcm4/OiBQYXR0ZXJuSXRlbVtdO1xuICAgIHZpc2libGU/OiBib29sZWFuO1xuICAgIHpJbmRleD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIZWF0TWFwT3B0aW9ucyB7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgY29sb3I/OiBNYXA8bnVtYmVyLCBOdW1iZXJbXT47XG4gICAgZGF0YXNldDogU3RyaW5nO1xuICAgIHJlc291cmNlSWQ/OiBudW1iZXI7XG4gICAganNvbkRhdGE/OiBTdHJpbmc7XG4gICAgaW50ZW5zaXR5PzogbnVtYmVyO1xuICAgIGludGVuc2l0aWVzPzogTWFwPG51bWJlciwgbnVtYmVyPiB8IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH07XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICBvcGFjaXRpZXM/OiBNYXA8bnVtYmVyLCBudW1iZXI+IHwgeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfTtcbiAgICByYWRpdXM/OiBudW1iZXI7XG4gICAgcmFkaXVzZXM/OiBNYXA8bnVtYmVyLCBudW1iZXI+IHwgeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfTtcbiAgICByYWRpdXNVbml0PzogUmFkaXVzVW5pdDtcbn1cblxuZXhwb3J0IGVudW0gUmFkaXVzVW5pdCB7XG4gICAgUElYRUwgPSBcInBpeGVsXCIsXG4gICAgTUVURVIgPSBcIm1ldGVyXCIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUE9JIHtcbiAgICBsYXRMbmc6IExhdExuZztcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHBsYWNlSWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGF0dGVybkl0ZW0ge1xuICAgIHR5cGU6IFBhdHRlcm5JdGVtVHlwZTtcbiAgICBsZW5ndGg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXJrZXJPcHRpb25zIHtcbiAgICBhbmNob3JNYXJrZXI/OiBBbmNob3I7XG4gICAgaW5mb1dpbmRvd0FuY2hvcj86IEFuY2hvcjtcbiAgICBpbmZvV2luZG93U2hvd24/OiBib29sZWFuO1xuICAgIGFscGhhPzogbnVtYmVyO1xuICAgIGNsdXN0ZXJhYmxlPzogYm9vbGVhbjtcbiAgICBkcmFnZ2FibGU/OiBib29sZWFuO1xuICAgIGljb24/OiBCaXRtYXBEZXNjcmlwdG9yO1xuICAgIGZsYXQ/OiBib29sZWFuO1xuICAgIHBvc2l0aW9uOiBMYXRMbmc7XG4gICAgcm90YXRpb24/OiBudW1iZXI7XG4gICAgc25pcHBldD86IHN0cmluZztcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICB2aXNpYmxlPzogYm9vbGVhbjtcbiAgICB6SW5kZXg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NhbGVkU2l6ZSB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBc3NldCB7XG4gICAgZmlsZU5hbWU6IHN0cmluZztcbiAgICBzY2FsZWRTaXplPzogU2NhbGVkU2l6ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNvdXJjZSB7XG4gICAgZmlsZU5hbWU6IHN0cmluZztcbiAgICByZXNvdXJjZVR5cGU6IHN0cmluZztcbiAgICBzY2FsZWRTaXplPzogU2NhbGVkU2l6ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCaXRtYXBEZXNjcmlwdG9yIHtcbiAgICBodWU/OiBIdWU7XG4gICAgYXNzZXQ/OiBBc3NldDtcbiAgICByZXNvdXJjZT86IFJlc291cmNlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFuY2hvciB7XG4gICAgdT86IG51bWJlcjtcbiAgICB2PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvbHlnb25PcHRpb25zIHtcbiAgICBwb2ludHM6IExhdExuZ1tdO1xuICAgIGhvbGVzPzogTGF0TG5nW11bXTtcbiAgICBjbGlja2FibGU/OiBib29sZWFuO1xuICAgIGdlb2Rlc2ljPzogYm9vbGVhbjtcbiAgICBmaWxsQ29sb3I/OiBDb2xvcjtcbiAgICBzdHJva2VDb2xvcj86IENvbG9yO1xuICAgIHN0cm9rZUpvaW50VHlwZT86IEpvaW50VHlwZTtcbiAgICBzdHJva2VQYXR0ZXJuPzogUGF0dGVybkl0ZW1bXTtcbiAgICBzdHJva2VXaWR0aD86IG51bWJlcjtcbiAgICB2aXNpYmxlPzogdHJ1ZTtcbiAgICB6SW5kZXg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9seWxpbmVPcHRpb25zIHtcbiAgICBwb2ludHM6IExhdExuZ1tdO1xuICAgIGNsaWNrYWJsZT86IGJvb2xlYW47XG4gICAgY29sb3I/OiBDb2xvcjtcbiAgICBzdGFydENhcD86IENhcDtcbiAgICBwYXR0ZXJuPzogUGF0dGVybkl0ZW1bXTtcbiAgICBlbmRDYXA/OiBDYXA7XG4gICAgZ2VvZGVzaWM/OiBib29sZWFuO1xuICAgIGpvaW50VHlwZT86IEpvaW50VHlwZTtcbiAgICB2aXNpYmxlPzogYm9vbGVhbjtcbiAgICB3aWR0aD86IG51bWJlcjtcbiAgICB6SW5kZXg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JvdW5kT3ZlcmxheU9wdGlvbnMge1xuICAgIGFuY2hvcj86IEFuY2hvcjtcbiAgICBiZWFyaW5nPzogbnVtYmVyO1xuICAgIGNsaWNrYWJsZT86IGJvb2xlYW47XG4gICAgaW1hZ2U/OiBCaXRtYXBEZXNjcmlwdG9yO1xuICAgIHZpc2libGU/OiBib29sZWFuO1xuICAgIHRyYW5zcGFyZW5jeT86IG51bWJlcjtcbiAgICB6SW5kZXg/OiBudW1iZXI7XG4gICAgcG9zaXRpb246IFBvc2l0aW9uO1xuICAgIGJvdW5kcz86IExhdExuZ0JvdW5kcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb3NpdGlvbiB7XG4gICAgbGF0TG5nOiBMYXRMbmc7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVVJMVGlsZSB7XG4gICAgVVJMOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGlsZSB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIHpvb206IG51bWJlcjtcbiAgICBwYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVwZXRpdGl2ZVRpbGUge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgem9vbTogbnVtYmVyW107XG4gICAgcGF0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVQcm92aWRlciB7XG4gICAgdHlwZTogVGlsZVR5cGU7XG4gICAgZGF0YTogVGlsZVtdIHwgVVJMVGlsZSB8IFJlcGV0aXRpdmVUaWxlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVPdmVybGF5T3B0aW9ucyB7XG4gICAgdGlsZVByb3ZpZGVyOiBUaWxlUHJvdmlkZXI7XG4gICAgZmFkZUluPzogYm9vbGVhbjtcbiAgICB0cmFuc3BhcmVuY3k/OiBudW1iZXI7XG4gICAgdmlzaWJsZT86IGJvb2xlYW47XG4gICAgekluZGV4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFuaW1hdGlvbiB7XG4gICAgZmlsbE1vZGU/OiBudW1iZXI7XG4gICAgZHVyYXRpb24/OiBudW1iZXI7XG4gICAgcmVwZWF0Q291bnQ/OiBudW1iZXI7XG4gICAgcmVwZWF0TW9kZT86IG51bWJlcjtcbiAgICBpbnRlcnBvbGF0b3I/OiBJbnRlcnBvbGF0b3I7XG4gICAgYW5pbWF0aW9uU3RhcnQ/OiAoKSA9PiB2b2lkO1xuICAgIGFuaW1hdGlvbkVuZD86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm90YXRlQW5pbWF0aW9uIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgICBmcm9tRGVncmVlOiBudW1iZXI7XG4gICAgdG9EZWdyZWU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY2FsZUFuaW1hdGlvbiBleHRlbmRzIEFuaW1hdGlvbiB7XG4gICAgZnJvbVg6IG51bWJlcjtcbiAgICB0b1g6IG51bWJlcjtcbiAgICBmcm9tWTogbnVtYmVyO1xuICAgIHRvWTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0ZUFuaW1hdGlvbiBleHRlbmRzIEFuaW1hdGlvbiB7XG4gICAgdGFyZ2V0OiBMYXRMbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxwaGFBbmltYXRpb24gZXh0ZW5kcyBBbmltYXRpb24ge1xuICAgIGZyb21BbHBoYTogbnVtYmVyO1xuICAgIHRvQWxwaGE6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYW5jZWxhYmxlQ2FsbGJhY2sge1xuICAgIG9uRmluaXNoOiAoKSA9PiB2b2lkO1xuICAgIG9uQ2FuY2VsOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZm9XaW5kb3dBZGFwdGVyIHtcbiAgICBmaWxlOiBzdHJpbmc7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvblNvdXJjZSB7IH1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wdXRlRGlzdGFuY2VSZXN1bHQge1xuICAgIHJlc3VsdDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50IHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNuYXBzaG90UmVzdWx0IHtcbiAgICBkYXRhOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlzaWJsZVJlZ2lvbiB7XG4gICAgZmFyTGVmdDogTGF0TG5nO1xuICAgIGZhclJpZ2h0OiBMYXRMbmc7XG4gICAgbGF0TG5nQm91bmRzOiBMYXRMbmdCb3VuZHM7XG4gICAgbmVhckxlZnQ6IExhdExuZztcbiAgICBuZWFyUmlnaHQ6IExhdExuZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcnBvbGF0b3Ige1xuICAgIHR5cGU6IEludGVycG9sYXRvclR5cGU7XG4gICAgYXJncz86IGFueTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRU5VTVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCBlbnVtIFRpbGVUeXBlIHtcbiAgICBVUkxfVElMRSxcbiAgICBSRVBFVElUSVZFX1RJTEUsXG4gICAgTE9DQUxfVElMRSxcbn1cblxuZXhwb3J0IGVudW0gQ29sb3Ige1xuICAgIFJFRCA9IC02NTUzNixcbiAgICBEQVJLX0dSQVkgPSAtMTIzMDMyOTIsXG4gICAgR1JBWSA9IC03ODI5MzY4LFxuICAgIFdISVRFID0gLTEsXG4gICAgQkxVRSA9IC0xNjc3Njk2MSxcbiAgICBCTEFDSyA9IC0xNjc3NzIxNixcbiAgICBMSVRFX0dSQVkgPSAtMzM1NTQ0NCxcbiAgICBNQUdFTlRBID0gLTY1MjgxLFxuICAgIFlFTExPVyA9IC0yNTYsXG4gICAgQ1lBTiA9IC0xNjcxMTY4MSxcbiAgICBHUkVFTiA9IC0xNjcxMTkzNixcbiAgICBUUkFOU1BBUkVOVCA9IDAsXG59XG5cbmV4cG9ydCBlbnVtIEpvaW50VHlwZSB7XG4gICAgUk9VTkQgPSAyLFxuICAgIEJFVkVMID0gMSxcbiAgICBERUZBVUxUID0gMCxcbn1cblxuZXhwb3J0IGVudW0gTWFwRXZlbnQge1xuICAgIE9OX0lORE9PUl9CVUlMRElOR1NfRk9DVVNFRCA9IFwib25JbmRvb3JCdWlsZGluZ3NGb2N1c2VkXCIsXG4gICAgT05fSU5ET09SX0xFVkVMX0FDVElWQVRFRCA9IFwib25JbmRvb3JMZXZlbEFjdGl2YXRlZFwiLFxuICAgIE9OX01BUF9MT0FERUQgPSBcIm9uTWFwTG9hZGVkXCIsXG4gICAgT05fQ0FNRVJBX0lETEUgPSBcIm9uQ2FtZXJhSWRsZVwiLFxuICAgIE9OX0NBTUVSQV9NT1ZFX0NBTkNFTEVEID0gXCJvbkNhbWVyYU1vdmVDYW5jZWxlZFwiLFxuICAgIE9OX0NBTUVSQV9NT1ZFID0gXCJvbkNhbWVyYU1vdmVcIixcbiAgICBPTl9DQU1FUkFfTU9WRV9TVEFSVEVEID0gXCJvbkNhbWVyYU1vdmVTdGFydGVkXCIsXG4gICAgT05fQ0lSQ0xFX0NMSUNLID0gXCJvbkNpcmNsZUNsaWNrXCIsXG4gICAgT05fR1JPVU5EX09WRVJMQVlfQ0xJQ0sgPSBcIm9uR3JvdW5kT3ZlcmxheUNsaWNrXCIsXG4gICAgT05fSU5GT19XSU5ET1dfQ0xJQ0sgPSBcIm9uSW5mb1dpbmRvd0NsaWNrXCIsXG4gICAgT05fSU5GT19XSU5ET1dfQ0xPU0UgPSBcIm9uSW5mb1dpbmRvd0Nsb3NlXCIsXG4gICAgT05fSU5GT19XSU5ET1dfTE9OR19DTElDSyA9IFwib25JbmZvV2luZG93TG9uZ0NsaWNrXCIsXG4gICAgT05fTUFQX0NMSUNLID0gXCJvbk1hcENsaWNrXCIsXG4gICAgT05fTUFQX0xPTkdfQ0xJQ0sgPSBcIm9uTWFwTG9uZ0NsaWNrXCIsXG4gICAgT05fTUFSS0VSX0NMSUNLID0gXCJvbk1hcmtlckNsaWNrXCIsXG4gICAgT05fTUFSS0VSX0RSQUdfU1RBUlQgPSBcIm9uTWFya2VyRHJhZ1N0YXJ0XCIsXG4gICAgT05fTUFSS0VSX0RSQUcgPSBcIm9uTWFya2VyRHJhZ1wiLFxuICAgIE9OX01BUktFUl9EUkFHX0VORCA9IFwib25NYXJrZXJEcmFnRW5kXCIsXG4gICAgT05fTVlfTE9DQVRJT05fQlVUVE9OX0NMSUNLID0gXCJvbk15TG9jYXRpb25CdXR0b25DbGlja1wiLFxuICAgIE9OX01ZX0xPQ0FUSU9OX0NMSUNLID0gXCJvbk15TG9jYXRpb25DbGlja1wiLFxuICAgIE9OX1BPSV9DTElDSyA9IFwib25Qb2lDbGlja1wiLFxuICAgIE9OX1BPTFlHT05fQ0xJQ0sgPSBcIm9uUG9seWdvbkNsaWNrXCIsXG4gICAgT05fUE9MWUxJTkVfQ0xJQ0sgPSBcIm9uUG9seWxpbmVDbGlja1wiLFxuICAgIE9OX0NBTkNFTEFCTEVfQ0FMTEJBQ0tfRklOSVNIID0gXCJvbkNhbmNlbGFibGVDYWxsYmFja0ZpbmlzaFwiLFxuICAgIE9OX0NBTkNFTEFCTEVfQ0FMTEJBQ0tfQ0FOQ0VMID0gXCJvbkNhbmNlbGFibGVDYWxsYmFja0NhbmNlbFwiLFxuICAgIE9OX1NOQVBTSE9UX1JFQURZX0NBTExCQUNLID0gXCJvblNuYXBzaG90UmVhZHlDYWxsYmFja1wiLFxufVxuXG5leHBvcnQgZW51bSBNYXBUeXBlIHtcbiAgICBNQVBfVFlQRV9OT05FID0gMCxcbiAgICBNQVBfVFlQRV9TQVRFTExJVEUgPSAyLFxuICAgIE1BUF9UWVBFX05PUk1BTCA9IDEsXG4gICAgTUFQX1RZUEVfSFlCUklEID0gNCxcbiAgICBNQVBfVFlQRV9URVJSQUlOID0gMyxcbn1cblxuZXhwb3J0IGVudW0gSHVlIHtcbiAgICBIVUVfR1JFRU4gPSAxMjAsXG4gICAgSFVFX0FaVVJFID0gMjEwLFxuICAgIEhVRV9ST1NFID0gMzMwLFxuICAgIEhVRV9DWUFOID0gMTgwLFxuICAgIEhVRV9PUkFOR0UgPSAzMCxcbiAgICBIVUVfTUFHRU5UQSA9IDMwMCxcbiAgICBIVUVfVklPTEVUID0gMjcwLFxuICAgIEhVRV9ZRUxMT1cgPSA2MCxcbiAgICBIVUVfQkxVRSA9IDI0MCxcbiAgICBIVUVfUkVEID0gMCxcbn1cblxuZXhwb3J0IGVudW0gUGF0dGVybkl0ZW1UeXBlIHtcbiAgICBUWVBFX0dBUCA9IDIsXG4gICAgVFlQRV9ET1QgPSAxLFxuICAgIFRZUEVfREFTSCA9IDAsXG59XG5cbmV4cG9ydCBlbnVtIENhbWVyYU1vdmVTdGFydGVkUmVhc29uIHtcbiAgICBSRUFTT05fQVBJX0FOSU1BVElPTiA9IDIsXG4gICAgUkVBU09OX0RFVkVMT1BFUl9BTklNQVRJT04gPSAzLFxuICAgIFJFQVNPTl9HRVNUVVJFID0gMSxcbn1cblxuZXhwb3J0IGVudW0gSW50ZXJwb2xhdG9yVHlwZSB7XG4gICAgTElORUFSLFxuICAgIEFDQ0VMRVJBVEVfREVDRUxFUkFURSxcbiAgICBBQ0NFTEVSQVRFLFxuICAgIEFOVElDSVBBVEUsXG4gICAgQU5USUNJUEFURV9PVkVSU0hPT1QsXG4gICAgQk9VTkNFLFxuICAgIENZQ0xFLFxuICAgIERFQ0VMRVJBVEUsXG4gICAgT1ZFUlNIT09ULFxuICAgIFBBVEgsXG59XG5cbmV4cG9ydCBlbnVtIEFuaW1hdGlvbkNvbnN0YW50IHtcbiAgICBGSUxMX01PREVfRk9SV0FSRFMgPSAwLFxuICAgIEZJTExfTU9ERV9CQUNLV0FSRFMgPSAxLFxuICAgIElORklOSVRFID0gLTEsXG4gICAgUkVTVEFSVCA9IDEsXG4gICAgUkVWRVJTRSA9IDIsXG59XG5cbmV4cG9ydCBlbnVtIEdyYXZpdHkge1xuICAgIFRPUCA9IDQ4LFxuICAgIEJPVFRPTSA9IDgwLFxuICAgIFNUQVJUID0gODM4ODYxMSxcbiAgICBFTkQgPSA4Mzg4NjEzLFxufVxuIl19