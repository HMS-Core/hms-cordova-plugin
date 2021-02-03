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
    function MapStyleOptions(resourceId) {
        this.resourceId = resourceId;
    }
    MapStyleOptions.loadRawResourceStyle = function (resourceId) {
        return new MapStyleOptions(resourceId);
    };
    MapStyleOptions.prototype.getResourceId = function () {
        return this.resourceId;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1tYXAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLDhCQUFvQyxNQUFNLG9CQUFvQixDQUFDOztJQVUxQywwQkFBaUI7Ozs7SUFHekMsdUJBQU0sYUFBQyxLQUFhLEVBQUUsZ0JBQWtDLEVBQUUsTUFBa0I7SUFLNUUsd0JBQU8sYUFBQyxLQUFhO0lBS3JCLDhCQUFhO0lBS2Isa0NBQWlCO0lBS2pCLHVDQUFzQixhQUFDLElBQVksRUFBRSxFQUFVO0lBSy9DLDBCQUFTLGFBQUMsTUFBYztJQUt4Qiw4QkFBYTtJQUtiLDZCQUFZOzs7Ozs7aUJBakVoQjtFQTJCNEIsaUJBQWlCO1NBQWhDLE1BQU07O0lBb0RmO0lBQ0EsQ0FBQztJQUVNLHFDQUFpQixHQUF4QixVQUF5QixjQUE4QjtRQUNuRCxPQUFPLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRU0sNkJBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUMzQixPQUFPLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUlNLG1DQUFlLEdBQXRCLFVBQXVCLFlBQTBCLEVBQUUsT0FBZSxFQUFFLEtBQWMsRUFBRSxNQUFlO1FBQy9GLE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBRU0saUNBQWEsR0FBcEIsVUFBcUIsTUFBYyxFQUFFLElBQVk7UUFDN0MsT0FBTyxNQUFNLENBQUMsU0FBUyxFQUFFLENB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akIsMkNBQWdCLENBQUE7SUFDaEIsMENBQWUsQ0FBQTtJQUNmLHVDQUFjLENBQUE7SUFDZCxtQ0FBVyxDQUFBO0FBRWYsQ0FBQyxFQVpXLEdBQUcsS0FBSCxHQUFHLFFBWWQ7QUFFRCxNQUFNLENBQU4sSUFBWSxlQUlYO0FBSkQsV0FBWSxlQUFlO0lBQ3ZCLDZEQUFZLENBQUE7SUFDWiw2REFBWSxDQUFBO0lBQ1osK0RBQWEsQ0FBQTtBQUNqQixDQUFDLEVBSlcsZUFBZSxLQUFmLGVBQWUsUUFJMUI7QUFFRCxNQUFNLENBQU4sSUFBWSx1QkFJWDtBQUpELFdBQVksdUJBQXVCO0lBQy9CLHFHQUF3QixDQUFBO0lBQ3hCLGlIQUE4QixDQUFBO0lBQzlCLHlGQUFrQixDQUFBO0FBQ3RCLENBQUMsRUFKVyx1QkFBdUIsS0FBdkIsdUJBQXVCLFFBSWxDO0FBRUQsTUFBTSxDQUFOLElBQVksZ0JBV1g7QUFYRCxXQUFZLGdCQUFnQjtJQUN4QiwyREFBTSxDQUFBO0lBQ04seUZBQXFCLENBQUE7SUFDckIsbUVBQVUsQ0FBQTtJQUNWLG1FQUFVLENBQUE7SUFDVix1RkFBb0IsQ0FBQTtJQUNwQiwyREFBTSxDQUFBO0lBQ04seURBQUssQ0FBQTtJQUNMLG1FQUFVLENBQUE7SUFDVixpRUFBUyxDQUFBO0lBQ1QsdURBQUksQ0FBQTtBQUNSLENBQUMsRUFYVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBVzNCIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIENvcHlyaWdodCAyMDIwLTIwMjEuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxyXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2lufSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiAnSE1TTWFwJyxcclxuICAgIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1tYXAnLFxyXG4gICAgcGx1Z2luUmVmOiAnSE1TTWFwJyxcclxuICAgIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luJyxcclxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU01hcCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuXHJcbiAgICBAQ29yZG92YSh7b3RoZXJQcm9taXNlOiB0cnVlfSlcclxuICAgIGdldE1hcChkaXZJZDogc3RyaW5nLCBodWF3ZWlNYXBPcHRpb25zOiBIdWF3ZWlNYXBPcHRpb25zLCBib3VuZHM/OiBNYXBCb3VuZHMpOiBQcm9taXNlPEh1YXdlaU1hcD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7b3RoZXJQcm9taXNlOiB0cnVlfSlcclxuICAgIHNob3dNYXAoZGl2SWQ6IHN0cmluZyk6IFByb21pc2U8SHVhd2VpTWFwPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxyXG4gICAgaGFzUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXHJcbiAgICByZXF1ZXN0UGVybWlzc2lvbigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXHJcbiAgICBjb21wdXRlRGlzdGFuY2VCZXR3ZWVuKGZyb206IExhdExuZywgdG86IExhdExuZyk6IFByb21pc2U8Q29tcHV0ZURpc3RhbmNlUmVzdWx0PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxyXG4gICAgc2V0QXBpS2V5KGFwaUtleTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxyXG4gICAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXHJcbiAgICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6ICdITVNNYXAnLFxyXG4gICAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLW1hcCcsXHJcbiAgICBwbHVnaW5SZWY6ICdITVNNYXAuQ2FtZXJhVXBkYXRlRmFjdG9yeScsXHJcbiAgICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpbicsXHJcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FtZXJhVXBkYXRlRmFjdG9yeSB7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbmV3Q2FtZXJhUG9zaXRpb24oY2FtZXJhUG9zaXRpb246IENhbWVyYVBvc2l0aW9uKTogQ2FtZXJhVXBkYXRlIHtcclxuICAgICAgICByZXR1cm4gSE1TTWFwLmdldFBsdWdpbigpLkNhbWVyYVVwZGF0ZUZhY3RvcnkubmV3Q2FtZXJhUG9zaXRpb24oY2FtZXJhUG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBuZXdMYXRMbmcobGF0TG5nOiBMYXRMbmcpOiBDYW1lcmFVcGRhdGUge1xyXG4gICAgICAgIHJldHVybiBITVNNYXAuZ2V0UGx1Z2luKCkuQ2FtZXJhVXBkYXRlRmFjdG9yeS5uZXdMYXRMbmcobGF0TG5nKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbmV3TGF0TG5nQm91bmRzKGxhdExuZ0JvdW5kczogTGF0TG5nQm91bmRzLCBwYWRkaW5nOiBudW1iZXIpOiBDYW1lcmFVcGRhdGU7XHJcblxyXG4gICAgc3RhdGljIG5ld0xhdExuZ0JvdW5kcyhsYXRMbmdCb3VuZHM6IExhdExuZ0JvdW5kcywgcGFkZGluZzogbnVtYmVyLCB3aWR0aD86IG51bWJlciwgaGVpZ2h0PzogbnVtYmVyKTogQ2FtZXJhVXBkYXRlIHtcclxuICAgICAgICByZXR1cm4gSE1TTWFwLmdldFBsdWdpbigpLkNhbWVyYVVwZGF0ZUZhY3RvcnkubmV3TGF0TG5nQm91bmRzKGxhdExuZ0JvdW5kcywgcGFkZGluZywgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5ld0xhdExuZ1pvb20obGF0TG5nOiBMYXRMbmcsIHpvb206IG51bWJlcik6IENhbWVyYVVwZGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIEhNU01hcC5nZXRQbHVnaW4oKS5DYW1lcmFVcGRhdGVGYWN0b3J5Lm5ld0xhdExuZ1pvb20obGF0TG5nLCB6b29tKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2Nyb2xsQnkoeFBpeGVsOiBudW1iZXIsIHlQaXhlbDogbnVtYmVyKTogQ2FtZXJhVXBkYXRlIHtcclxuICAgICAgICByZXR1cm4gSE1TTWFwLmdldFBsdWdpbigpLkNhbWVyYVVwZGF0ZUZhY3Rvcnkuc2Nyb2xsQnkoeFBpeGVsLCB5UGl4ZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB6b29tQnkoYW1vdW50OiBudW1iZXIpOiBDYW1lcmFVcGRhdGU7XHJcblxyXG4gICAgc3RhdGljIHpvb21CeShhbW91bnQ6IG51bWJlciwgZm9jdXM/OiBQb2ludCk6IENhbWVyYVVwZGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIEhNU01hcC5nZXRQbHVnaW4oKS5DYW1lcmFVcGRhdGVGYWN0b3J5Lnpvb21CeShhbW91bnQsIGZvY3VzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgem9vbUluKCk6IENhbWVyYVVwZGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIEhNU01hcC5nZXRQbHVnaW4oKS5DYW1lcmFVcGRhdGVGYWN0b3J5Lnpvb21JbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB6b29tT3V0KCk6IENhbWVyYVVwZGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIEhNU01hcC5nZXRQbHVnaW4oKS5DYW1lcmFVcGRhdGVGYWN0b3J5Lnpvb21PdXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgem9vbVRvKHpvb206IG51bWJlcik6IENhbWVyYVVwZGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIEhNU01hcC5nZXRQbHVnaW4oKS5DYW1lcmFVcGRhdGVGYWN0b3J5Lnpvb21Ubyh6b29tKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1hcFN0eWxlT3B0aW9ucyB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlc291cmNlSWQ6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKHJlc291cmNlSWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucmVzb3VyY2VJZCA9IHJlc291cmNlSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkUmF3UmVzb3VyY2VTdHlsZShyZXNvdXJjZUlkOiBudW1iZXIpOiBNYXBTdHlsZU9wdGlvbnMge1xyXG4gICAgICAgIHJldHVybiBuZXcgTWFwU3R5bGVPcHRpb25zKHJlc291cmNlSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJlc291cmNlSWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZUlkO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FwIHtcclxuICAgIHN0YXRpYyByZWFkb25seSBUWVBFX0JVVFRfQ0FQID0gMDtcclxuICAgIHN0YXRpYyByZWFkb25seSBUWVBFX1NRVUFSRV9DQVAgPSAxO1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IFRZUEVfUk9VTkRfQ0FQID0gMjtcclxuICAgIHN0YXRpYyByZWFkb25seSBUWVBFX0NVU1RPTV9DQVAgPSAzO1xyXG4gICAgcHJvdGVjdGVkIHR5cGU6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCByZWZXaWR0aD86IG51bWJlciA9IG51bGw7XHJcbiAgICBwcm90ZWN0ZWQgYml0bWFwRGVzY3JpcHRvcj86IEJpdG1hcERlc2NyaXB0b3IgPSBudWxsO1xyXG5cclxuICAgIGdldFR5cGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dENhcCBleHRlbmRzIENhcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSb3VuZENhcCBleHRlbmRzIENhcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IDI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcXVhcmVDYXAgZXh0ZW5kcyBDYXAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnR5cGUgPSAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tQ2FwIGV4dGVuZHMgQ2FwIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihiaXRtYXBEZXNjcmlwdG9yOiBCaXRtYXBEZXNjcmlwdG9yLCByZWZXaWR0aD86IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy50eXBlID0gMztcclxuICAgICAgICB0aGlzLmJpdG1hcERlc2NyaXB0b3IgPSBiaXRtYXBEZXNjcmlwdG9yO1xyXG4gICAgICAgIHRoaXMucmVmV2lkdGggPSByZWZXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZWZXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlZldpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJpdG1hcERlc2NyaXB0b3IoKTogQml0bWFwRGVzY3JpcHRvciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYml0bWFwRGVzY3JpcHRvcjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvblNldCB7XHJcblxyXG4gICAgcmVhZG9ubHkgYW5pbWF0aW9uczogTWFwPHN0cmluZywgQW5pbWF0aW9uPiA9IG5ldyBNYXA8c3RyaW5nLCBBbmltYXRpb24+KCk7XHJcblxyXG4gICAgYWRkUm90YXRlQW5pbWF0aW9uKGFuaW1hdGlvbjogUm90YXRlQW5pbWF0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25zLnNldCgnUm90YXRlJywgYW5pbWF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTY2FsZUFuaW1hdGlvbihhbmltYXRpb246IFNjYWxlQW5pbWF0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25zLnNldCgnU2NhbGUnLCBhbmltYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRyYW5zbGF0ZUFuaW1hdGlvbihhbmltYXRpb246IFRyYW5zbGF0ZUFuaW1hdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5zZXQoJ1RyYW5zbGF0ZScsIGFuaW1hdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQWxwaGFBbmltYXRpb24oYW5pbWF0aW9uOiBBbHBoYUFuaW1hdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5zZXQoJ0FscGhhJywgYW5pbWF0aW9uKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0lOVEVSRkFDRVMvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVpU2V0dGluZ3Mge1xyXG4gICAgaXNDb21wYXNzRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgaXNJbmRvb3JMZXZlbFBpY2tlckVuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIGlzTWFwVG9vbGJhckVuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIGlzTXlMb2NhdGlvbkJ1dHRvbkVuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIGlzUm90YXRlR2VzdHVyZXNFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICBpc1Njcm9sbEdlc3R1cmVzRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgaXNTY3JvbGxHZXN0dXJlc0VuYWJsZWREdXJpbmdSb3RhdGVPclpvb20oKTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIGlzVGlsdEdlc3R1cmVzRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgaXNab29tQ29udHJvbHNFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICBpc1pvb21HZXN0dXJlc0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIHNldEFsbEdlc3R1cmVzRW5hYmxlZChhbGxHZXN0dXJlc0VuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0Q29tcGFzc0VuYWJsZWQoY29tcGFzc0VuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0SW5kb29yTGV2ZWxQaWNrZXJFbmFibGVkKGluZG9vckxldmVsUGlja2VyRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRNYXBUb29sYmFyRW5hYmxlZChtYXBUb29sYmFyRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRNeUxvY2F0aW9uQnV0dG9uRW5hYmxlZChteUxvY2F0aW9uQnV0dG9uRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRSb3RhdGVHZXN0dXJlc0VuYWJsZWQocm90YXRlR2VzdHVyZXNFbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFNjcm9sbEdlc3R1cmVzRW5hYmxlZChzY3JvbGxHZXN0dXJlc0VuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0U2Nyb2xsR2VzdHVyZXNFbmFibGVkRHVyaW5nUm90YXRlT3Jab29tKHNjcm9sbEdlc3R1cmVzRW5hYmxlZER1cmluZ1JvdGF0ZU9yWm9vbTogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRUaWx0R2VzdHVyZXNFbmFibGVkKHRpbHRHZXN0dXJlc0VuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0Wm9vbUNvbnRyb2xzRW5hYmxlZCh6b29tQ29udHJvbHNFbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFpvb21HZXN0dXJlc0VuYWJsZWQoem9vbUdlc3R1cmVzRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRHZXN0dXJlU2NhbGVCeU1hcENlbnRlcihnZXN0dXJlU2NhbGVCeU1hcENlbnRlckVuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEh1YXdlaU1hcCB7XHJcbiAgICBvbihldmVudDogTWFwRXZlbnQsIGNhbGxiYWNrOiAodmFsOiBhbnkpID0+IHZvaWQpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgZGVzdHJveU1hcCgpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgaGlkZU1hcCgpOiBQcm9taXNlPHZvaWQ+XHJcbiAgICBnZXRDb21wb25lbnQoa2V5OiBzdHJpbmcpOiBhbnk7XHJcbiAgICByZW1vdmVDb21wb25lbnQoa2V5OiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgZ2V0SWQoKTogbnVtYmVyO1xyXG4gICAgc2Nyb2xsKCk6IHZvaWQ7XHJcbiAgICBhZGRDaXJjbGUoY2lyY2xlT3B0aW9uczogQ2lyY2xlT3B0aW9ucyk6IFByb21pc2U8Q2lyY2xlPjtcclxuICAgIGFkZE1hcmtlcihtYXJrZXJPcHRpb25zOiBNYXJrZXJPcHRpb25zKTogUHJvbWlzZTxNYXJrZXI+O1xyXG4gICAgYWRkR3JvdW5kT3ZlcmxheShncm91bmRPdmVybGF5T3B0aW9uczogR3JvdW5kT3ZlcmxheU9wdGlvbnMpOiBQcm9taXNlPEdyb3VuZE92ZXJsYXk+O1xyXG4gICAgYWRkVGlsZU92ZXJsYXkodGlsZU92ZXJsYXlPcHRpb25zOiBUaWxlT3ZlcmxheU9wdGlvbnMpOiBQcm9taXNlPFRpbGVPdmVybGF5PjtcclxuICAgIGFkZFBvbHlnb24ocG9seWdvbk9wdGlvbnM6IFBvbHlnb25PcHRpb25zKTogUHJvbWlzZTxQb2x5Z29uPjtcclxuICAgIGFkZFBvbHlsaW5lKHBvbHlsaW5lT3B0aW9uczogUG9seWxpbmVPcHRpb25zKTogUHJvbWlzZTxQb2x5bGluZT47XHJcbiAgICBhbmltYXRlQ2FtZXJhKGNhbWVyYVVwZGF0ZTogQ2FtZXJhVXBkYXRlKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIGFuaW1hdGVDYW1lcmEoY2FtZXJhVXBkYXRlOiBDYW1lcmFVcGRhdGUsIGNhbmNlbGFibGVDYWxsYmFjazogQ2FuY2VsYWJsZUNhbGxiYWNrKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIGFuaW1hdGVDYW1lcmEoY2FtZXJhVXBkYXRlOiBDYW1lcmFVcGRhdGUsIGNhbmNlbGFibGVDYWxsYmFjaz86IENhbmNlbGFibGVDYWxsYmFjaywgZHVyYXRpb25Ncz86IG51bWJlcik6IFByb21pc2U8dm9pZD47XHJcbiAgICBtb3ZlQ2FtZXJhKGNhbWVyYVVwZGF0ZTogQ2FtZXJhVXBkYXRlKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIGNsZWFyKCk6IFByb21pc2U8dm9pZD47XHJcbiAgICByZXNldE1pbk1heFpvb21QcmVmZXJlbmNlKCk6IFByb21pc2U8dm9pZD47XHJcbiAgICBzdG9wQW5pbWF0aW9uKCk6IFByb21pc2U8dm9pZD47XHJcbiAgICBnZXRDYW1lcmFQb3NpdGlvbigpOiBQcm9taXNlPENhbWVyYVBvc2l0aW9uPjtcclxuICAgIGdldE1hcFR5cGUoKTogUHJvbWlzZTxNYXBUeXBlPjtcclxuICAgIGdldE1heFpvb21MZXZlbCgpOiBQcm9taXNlPG51bWJlcj47XHJcbiAgICBnZXRNaW5ab29tTGV2ZWwoKTogUHJvbWlzZTxudW1iZXI+O1xyXG4gICAgZ2V0UHJvamVjdGlvbigpOiBQcm9qZWN0aW9uO1xyXG4gICAgZ2V0VWlTZXR0aW5ncygpOiBVaVNldHRpbmdzO1xyXG4gICAgaXNCdWlsZGluZ3NFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICBpc015TG9jYXRpb25FbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICBpc1RyYWZmaWNFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICBpc0luZG9vckVuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIHNldEJ1aWxkaW5nc0VuYWJsZWQoYnVpbGRpbmdzRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRDb250ZW50RGVzY3JpcHRpb24oY29udGVudERlc2NyaXB0aW9uOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0SW5mb1dpbmRvd0FkYXB0ZXIoaW5mb1dpbmRvd0FkYXB0ZXI6IEluZm9XaW5kb3dBZGFwdGVyKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldExhdExuZ0JvdW5kc0ZvckNhbWVyYVRhcmdldChsYXRMbmdCb3VuZHNGb3JDYW1lcmFUYXJnZXQ6IExhdExuZ0JvdW5kcyk6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRMb2NhdGlvblNvdXJjZShsb2NhdGlvblNvdXJjZTogTG9jYXRpb25Tb3VyY2UpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0TWFwU3R5bGUobWFwU3R5bGU6IE1hcFN0eWxlT3B0aW9ucyk6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRNYXBUeXBlKG1hcFR5cGU6IE1hcFR5cGUpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0TWFya2Vyc0NsdXN0ZXJpbmcobWFya2Vyc0NsdXN0ZXJpbmc6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0TWF4Wm9vbVByZWZlcmVuY2UobWF4Wm9vbVByZWZlcmVuY2U6IG51bWJlcik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRNaW5ab29tUHJlZmVyZW5jZShtaW5ab29tUHJlZmVyZW5jZTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldE15TG9jYXRpb25FbmFibGVkKG15TG9jYXRpb25FbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFBhZGRpbmcobGVmdDogbnVtYmVyLCB0b3A6IG51bWJlciwgcmlnaHQ6IG51bWJlciwgYm90dG9tOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0VHJhZmZpY0VuYWJsZWQodHJhZmZpY0VuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc25hcHNob3Qob25SZWFkeUNhbGxiYWNrOiAoc25hcHNob3Q6IFNuYXBzaG90UmVzdWx0KSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldE1hcFBvaW50ZXJzRW5hYmxlZChtYXBQb2ludGVyc0VuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgaXNNYXBQb2ludGVyc0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIHNldFBvaW50VG9DZW50ZXIoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVVwZGF0ZSB7XHJcbiAgICBtb3ZlQ2FtZXJhKG1hcElkOiBzdHJpbmcpOiBQcm9taXNlPGFueT47XHJcbiAgICBhbmltYXRlQ2FtZXJhKG1hcElkOiBzdHJpbmcsIHByb3BzOiBhbnkpOiBQcm9taXNlPGFueT47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2lyY2xlIHtcclxuICAgIGdldENlbnRlcigpOiBQcm9taXNlPExhdExuZz47XHJcbiAgICBnZXRGaWxsQ29sb3IoKTogUHJvbWlzZTxDb2xvcj47XHJcbiAgICBnZXRJZCgpOiBzdHJpbmc7XHJcbiAgICBnZXRSYWRpdXMoKTogUHJvbWlzZTxudW1iZXI+O1xyXG4gICAgZ2V0U3Ryb2tlQ29sb3IoKTogUHJvbWlzZTxDb2xvcj47XHJcbiAgICBnZXRTdHJva2VQYXR0ZXJuKCk6IFByb21pc2U8UGF0dGVybkl0ZW1bXT47XHJcbiAgICBnZXRTdHJva2VXaWR0aCgpOiBQcm9taXNlPG51bWJlcj47XHJcbiAgICBnZXRUYWcoKTogUHJvbWlzZTxhbnk+O1xyXG4gICAgZ2V0WkluZGV4KCk6IFByb21pc2U8bnVtYmVyPjtcclxuICAgIGlzQ2xpY2thYmxlKCk6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICBpc1Zpc2libGUoKTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIHJlbW92ZSgpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0Q2VudGVyKGNlbnRlcjogTGF0TG5nKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldEZpbGxDb2xvcihmaWxsQ29sb3I6IENvbG9yKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFJhZGl1cyhyYWRpdXM6IG51bWJlcik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRTdHJva2VDb2xvcihzdHJva2VDb2xvcjogQ29sb3IpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0U3Ryb2tlUGF0dGVybihzdHJva2VQYXR0ZXJuOiBQYXR0ZXJuSXRlbVtdKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFN0cm9rZVdpZHRoKHN0cm9rZVdpZHRoOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0VGFnKHRhZzogYW55KTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFpJbmRleCh6SW5kZXg6IG51bWJlcik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRDbGlja2FibGUoY2xpY2thYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR3JvdW5kT3ZlcmxheSB7XHJcbiAgICBnZXRCZWFyaW5nKCk6IFByb21pc2U8bnVtYmVyPjtcclxuICAgIGdldEJvdW5kcygpOiBQcm9taXNlPExhdExuZ0JvdW5kcz47XHJcbiAgICBnZXRIZWlnaHQoKTogUHJvbWlzZTxudW1iZXI+O1xyXG4gICAgZ2V0SWQoKTogc3RyaW5nO1xyXG4gICAgZ2V0UG9zaXRpb24oKTogUHJvbWlzZTxMYXRMbmc+O1xyXG4gICAgZ2V0VGFnKCk6IFByb21pc2U8YW55PjtcclxuICAgIGdldFRyYW5zcGFyZW5jeSgpOiBQcm9taXNlPG51bWJlcj47XHJcbiAgICBnZXRXaWR0aCgpOiBQcm9taXNlPG51bWJlcj47XHJcbiAgICBnZXRaSW5kZXgoKTogUHJvbWlzZTxudW1iZXI+O1xyXG4gICAgaXNDbGlja2FibGUoKTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIGlzVmlzaWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG5cclxuICAgIHJlbW92ZSgpOiBQcm9taXNlPHZvaWQ+O1xyXG5cclxuICAgIHNldEJlYXJpbmcoYmVhcmluZzogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldENsaWNrYWJsZShjbGlja2FibGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0RGltZW5zaW9ucyh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXREaW1lbnNpb25zKHdpZHRoOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0SW1hZ2UoaW1hZ2VEZXNjcmlwdG9yOiBCaXRtYXBEZXNjcmlwdG9yKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFBvc2l0aW9uKHBvc2l0aW9uOiBMYXRMbmcpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0UG9zaXRpb25Gcm9tQm91bmRzKHBvc2l0aW9uTGF0TG5nQm91bmRzOiBMYXRMbmdCb3VuZHMpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0VGFnKHRhZzogYW55KTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFRyYW5zcGFyZW5jeSh0cmFuc3BhcmVuY3k6IG51bWJlcik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0WkluZGV4KHpJbmRleDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNYXJrZXIge1xyXG4gICAgZ2V0QWxwaGEoKTogUHJvbWlzZTxudW1iZXI+O1xyXG4gICAgZ2V0SWQoKTogc3RyaW5nO1xyXG4gICAgZ2V0UG9zaXRpb24oKTogUHJvbWlzZTxMYXRMbmc+O1xyXG4gICAgZ2V0Um90YXRpb24oKTogUHJvbWlzZTxudW1iZXI+O1xyXG4gICAgZ2V0U25pcHBldCgpOiBQcm9taXNlPHN0cmluZz47XHJcbiAgICBnZXRUYWcoKTogUHJvbWlzZTxhbnk+O1xyXG4gICAgZ2V0VGl0bGUoKTogUHJvbWlzZTxzdHJpbmc+O1xyXG4gICAgZ2V0WkluZGV4KCk6IFByb21pc2U8bnVtYmVyPjtcclxuICAgIGlzVmlzaWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgaXNDbHVzdGVyYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgaXNEcmFnZ2FibGUoKTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIGlzRmxhdCgpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgaXNJbmZvV2luZG93U2hvd24oKTogUHJvbWlzZTxib29sZWFuPjtcclxuXHJcbiAgICByZW1vdmUoKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIGhpZGVJbmZvV2luZG93KCk6IFByb21pc2U8dm9pZD47XHJcbiAgICBzaG93SW5mb1dpbmRvdygpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc3RhcnRBbmltYXRpb24oKTogUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgICBzZXRBbHBoYShhbHBoYTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldEFuaW1hdGlvbihhbmltYXRpb246IEFuaW1hdGlvblNldCk6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXREcmFnZ2FibGUoZHJhZ2dhYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldEZsYXQoZmxhdDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRJY29uKGljb246IEJpdG1hcERlc2NyaXB0b3IpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0SW5mb1dpbmRvd0FuY2hvcih1OiBudW1iZXIsIHY6IG51bWJlcik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRNYXJrZXJBbmNob3IodTogbnVtYmVyLCB2OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0UG9zaXRpb24obGF0TG5nOiBMYXRMbmcpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0Um90YXRpb24ocm90YXRpb246IG51bWJlcik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRTbmlwcGV0KHNuaXBwZXQ6IFN0cmluZyk6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRUaXRsZSh0aXRsZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFRhZyh0YWc6IGFueSk6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0WkluZGV4KHpJbmRleDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2x5Z29uIHtcclxuXHJcbiAgICBnZXRGaWxsQ29sb3IoKTogUHJvbWlzZTxDb2xvcj47XHJcbiAgICBnZXRIb2xlcygpOiBQcm9taXNlPExhdExuZ1tdW10+O1xyXG4gICAgZ2V0SWQoKTogc3RyaW5nO1xyXG4gICAgZ2V0UG9pbnRzKCk6IFByb21pc2U8TGF0TG5nW10+O1xyXG4gICAgZ2V0U3Ryb2tlQ29sb3IoKTogUHJvbWlzZTxDb2xvcj47XHJcbiAgICBnZXRTdHJva2VKb2ludFR5cGUoKTogUHJvbWlzZTxKb2ludFR5cGU+O1xyXG4gICAgZ2V0U3Ryb2tlUGF0dGVybigpOiBQcm9taXNlPFBhdHRlcm5JdGVtW10+O1xyXG4gICAgZ2V0U3Ryb2tlV2lkdGgoKTogUHJvbWlzZTxudW1iZXI+O1xyXG4gICAgZ2V0VGFnKCk6IFByb21pc2U8YW55PjtcclxuICAgIGdldFpJbmRleCgpOiBQcm9taXNlPG51bWJlcj47XHJcbiAgICBpc0NsaWNrYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgaXNWaXNpYmxlKCk6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICBpc0dlb2Rlc2ljKCk6IFByb21pc2U8Ym9vbGVhbj47XHJcblxyXG4gICAgcmVtb3ZlKCk6IFByb21pc2U8dm9pZD47XHJcblxyXG4gICAgc2V0Q2xpY2thYmxlKGNsaWNrYWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRGaWxsQ29sb3IoY29sb3I6IENvbG9yKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldEdlb2Rlc2ljKGdlb2Rlc2ljOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldEhvbGVzKGhvbGVzOiBMYXRMbmdbXVtdKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFBvaW50cyhwb2ludHM6IExhdExuZ1tdKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFN0cm9rZUNvbG9yKGNvbG9yOiBDb2xvcik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRTdHJva2VKb2ludFR5cGUoam9pbnRUeXBlOiBKb2ludFR5cGUpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0U3Ryb2tlUGF0dGVybihwYXR0ZXJuSXRlbTogUGF0dGVybkl0ZW1bXSk6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRTdHJva2VXaWR0aCh3aWR0aDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFRhZyh0YWc6IGFueSk6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0WkluZGV4KHpJbmRleDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2x5bGluZSB7XHJcbiAgICBnZXRDb2xvcigpOiBQcm9taXNlPENvbG9yPjtcclxuICAgIGdldEVuZENhcCgpOiBQcm9taXNlPENhcD47XHJcbiAgICBnZXRTdGFydENhcCgpOiBQcm9taXNlPENhcD47XHJcbiAgICBnZXRJZCgpOiBzdHJpbmc7XHJcbiAgICBnZXRKb2ludFR5cGUoKTogUHJvbWlzZTxKb2ludFR5cGU+O1xyXG4gICAgZ2V0UGF0dGVybigpOiBQcm9taXNlPFBhdHRlcm5JdGVtW10+O1xyXG4gICAgZ2V0UG9pbnRzKCk6IFByb21pc2U8TGF0TG5nW10+O1xyXG4gICAgZ2V0VGFnKCk6IFByb21pc2U8YW55PjtcclxuICAgIGdldFdpZHRoKCk6IFByb21pc2U8bnVtYmVyPjtcclxuICAgIGdldFpJbmRleCgpOiBQcm9taXNlPG51bWJlcj47XHJcbiAgICBpc0NsaWNrYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgaXNHZW9kZXNpYygpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgaXNWaXNpYmxlKCk6IFByb21pc2U8Ym9vbGVhbj47XHJcblxyXG4gICAgcmVtb3ZlKCk6IFByb21pc2U8dm9pZD47XHJcblxyXG4gICAgc2V0Q2xpY2thYmxlKGNsaWNrYWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRDb2xvcihjb2xvcjogQ29sb3IpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0U3RhcnRDYXAoc3RhcnRDYXA6IENhcCk6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRFbmRDYXAoZW5kQ2FwOiBDYXApOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0R2VvZGVzaWMoZ2VvZGVzaWM6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0Sm9pbnRUeXBlKGpvaW50VHlwZTogSm9pbnRUeXBlKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFBhdHRlcm4ocGF0dGVybjogUGF0dGVybkl0ZW1bXSk6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRQb2ludHMocG9pbnRzOiBMYXRMbmdbXSk6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRUYWcodGFnOiBhbnkpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFdpZHRoKHdpZHRoOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0WkluZGV4KHpJbmRleDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlT3ZlcmxheSB7XHJcbiAgICBnZXRGYWRlSW4oKTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIGdldElkKCk6IHN0cmluZztcclxuICAgIGdldFRyYW5zcGFyZW5jeSgpOiBQcm9taXNlPG51bWJlcj47XHJcbiAgICBnZXRaSW5kZXgoKTogUHJvbWlzZTxudW1iZXI+O1xyXG4gICAgaXNWaXNpYmxlKCk6IFByb21pc2U8Ym9vbGVhbj47XHJcblxyXG4gICAgcmVtb3ZlKCk6IFByb21pc2U8dm9pZD47XHJcbiAgICBjbGVhclRpbGVDYWNoZSgpOiBQcm9taXNlPHZvaWQ+O1xyXG5cclxuICAgIHNldEZhZGVJbihmYWRlSW46IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0VHJhbnNwYXJlbmN5KHRyYW5zcGFyZW5jeTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldFpJbmRleCh6SW5kZXg6IG51bWJlcik6IFByb21pc2U8dm9pZD47XHJcbiAgICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb2plY3Rpb24ge1xyXG4gICAgZnJvbVNjcmVlbkxvY2F0aW9uKHBvaW50OiBQb2ludCk6IFByb21pc2U8TGF0TG5nPjtcclxuICAgIGdldFZpc2libGVSZWdpb24oKTogUHJvbWlzZTxWaXNpYmxlUmVnaW9uPjtcclxuICAgIHRvU2NyZWVuTG9jYXRpb24obGF0TG5nOiBMYXRMbmcpOiBQcm9taXNlPFBvaW50PjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNYXBCb3VuZHMge1xyXG4gICAgbWFyZ2luVG9wPzogbnVtYmVyLFxyXG4gICAgbWFyZ2luQm90dG9tPzogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSHVhd2VpTWFwT3B0aW9ucyB7XHJcbiAgICBtYXBUeXBlPzogTWFwVHlwZSxcclxuICAgIHpvb21Db250cm9sc0VuYWJsZWQ/OiBib29sZWFuLFxyXG4gICAgY29tcGFzc0VuYWJsZWQ/OiBib29sZWFuLFxyXG4gICAgem9vbUdlc3R1cmVzRW5hYmxlZD86IGJvb2xlYW4sXHJcbiAgICBzY3JvbGxHZXN0dXJlc0VuYWJsZWQ/OiBib29sZWFuLFxyXG4gICAgcm90YXRlR2VzdHVyZXNFbmFibGVkPzogYm9vbGVhbixcclxuICAgIHRpbHRHZXN0dXJlc0VuYWJsZWQ/OiBib29sZWFuLFxyXG4gICAgek9yZGVyT25Ub3A/OiBib29sZWFuLFxyXG4gICAgbGl0ZU1vZGU/OiBib29sZWFuLFxyXG4gICAgYW1iaWVudEVuYWJsZWQ/OiBib29sZWFuLFxyXG4gICAgbWluWm9vbVByZWZlcmVuY2U/OiBudW1iZXIsXHJcbiAgICBtYXhab29tUHJlZmVyZW5jZT86IG51bWJlcixcclxuICAgIGNhbWVyYVBvc2l0aW9uPzogQ2FtZXJhUG9zaXRpb24sXHJcbiAgICBsYXRMbmdCb3VuZHM/OiBMYXRMbmdCb3VuZHNcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvbiB7XHJcbiAgICBhY2N1cmFjeTogbnVtYmVyLFxyXG4gICAgYWx0aXR1ZGU6IG51bWJlcixcclxuICAgIGJlYXJpbmc6IG51bWJlcixcclxuICAgIGVsYXBzZWRSZWFsdGltZU5hbm9zOiBudW1iZXIsXHJcbiAgICBsYXRpdHVkZTogbnVtYmVyLFxyXG4gICAgbG9uZ2l0dWRlOiBudW1iZXIsXHJcbiAgICBwcm92aWRlcjogc3RyaW5nLFxyXG4gICAgc3BlZWQ6IG51bWJlcixcclxuICAgIHRpbWU6IG51bWJlcixcclxuICAgIGZyb21Nb2NrUHJvdmlkZXI6IGJvb2xlYW4sXHJcbiAgICBjb250ZW50czogbnVtYmVyLFxyXG4gICAgYmVhcmluZ0FjY3VyYWN5RGVncmVlcz86IG51bWJlcixcclxuICAgIHNwZWVkQWNjdXJhY3lNZXRlcnNQZXJTZWNvbmQ/OiBudW1iZXIsXHJcbiAgICB2ZXJ0aWNhbEFjY3VyYWN5TWV0ZXJzPzogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF0TG5nQm91bmRzIHtcclxuICAgIHNvdXRod2VzdDogTGF0TG5nLFxyXG4gICAgbm9ydGhlYXN0OiBMYXRMbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYW1lcmFQb3NpdGlvbiB7XHJcbiAgICB0YXJnZXQ6IExhdExuZyxcclxuICAgIHpvb20/OiBudW1iZXIsXHJcbiAgICBiZWFyaW5nPzogbnVtYmVyLFxyXG4gICAgdGlsdD86IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExhdExuZyB7XHJcbiAgICBsYXQ6IG51bWJlcixcclxuICAgIGxuZzogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2lyY2xlT3B0aW9ucyB7XHJcbiAgICBjZW50ZXI6IExhdExuZyxcclxuICAgIGNsaWNrYWJsZT86IGJvb2xlYW4sXHJcbiAgICBmaWxsQ29sb3I/OiBDb2xvcixcclxuICAgIHJhZGl1czogbnVtYmVyLFxyXG4gICAgc3Ryb2tlQ29sb3I/OiBDb2xvcixcclxuICAgIHN0cm9rZVdpZHRoPzogbnVtYmVyLFxyXG4gICAgc3Ryb2tlUGF0dGVybj86IFBhdHRlcm5JdGVtW10sXHJcbiAgICB2aXNpYmxlPzogYm9vbGVhbixcclxuICAgIHpJbmRleD86IG51bWJlclxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQT0kge1xyXG4gICAgbGF0TG5nOiBMYXRMbmcsXHJcbiAgICBuYW1lPzogc3RyaW5nLFxyXG4gICAgcGxhY2VJZD86IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhdHRlcm5JdGVtIHtcclxuICAgIHR5cGU6IFBhdHRlcm5JdGVtVHlwZSxcclxuICAgIGxlbmd0aDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFya2VyT3B0aW9ucyB7XHJcbiAgICBhbmNob3JNYXJrZXI/OiBBbmNob3IsXHJcbiAgICBpbmZvV2luZG93QW5jaG9yPzogQW5jaG9yLFxyXG4gICAgaW5mb1dpbmRvd1Nob3duPzogYm9vbGVhbixcclxuICAgIGFscGhhPzogbnVtYmVyLFxyXG4gICAgY2x1c3RlcmFibGU/OiBib29sZWFuLFxyXG4gICAgZHJhZ2dhYmxlPzogYm9vbGVhbixcclxuICAgIGljb24/OiBCaXRtYXBEZXNjcmlwdG9yLFxyXG4gICAgZmxhdD86IGJvb2xlYW4sXHJcbiAgICBwb3NpdGlvbjogTGF0TG5nLFxyXG4gICAgcm90YXRpb24/OiBudW1iZXIsXHJcbiAgICBzbmlwcGV0Pzogc3RyaW5nLFxyXG4gICAgdGl0bGU/OiBzdHJpbmcsXHJcbiAgICB2aXNpYmxlPzogYm9vbGVhbixcclxuICAgIHpJbmRleD86IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNjYWxlZFNpemUge1xyXG4gICAgd2lkdGg6IG51bWJlcixcclxuICAgIGhlaWdodDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXNzZXQge1xyXG4gICAgZmlsZU5hbWU6IHN0cmluZyxcclxuICAgIHNjYWxlZFNpemU/OiBTY2FsZWRTaXplXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVzb3VyY2Uge1xyXG4gICAgZmlsZU5hbWU6IHN0cmluZyxcclxuICAgIHJlc291cmNlVHlwZTogc3RyaW5nLFxyXG4gICAgc2NhbGVkU2l6ZT86IFNjYWxlZFNpemVcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCaXRtYXBEZXNjcmlwdG9yIHtcclxuICAgIGh1ZT86IEh1ZSxcclxuICAgIGFzc2V0PzogQXNzZXQsXHJcbiAgICByZXNvdXJjZT86IFJlc291cmNlLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFuY2hvciB7XHJcbiAgICB1PzogbnVtYmVyLFxyXG4gICAgdj86IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvbHlnb25PcHRpb25zIHtcclxuICAgIHBvaW50czogTGF0TG5nW10sXHJcbiAgICBob2xlcz86IExhdExuZ1tdW107XHJcbiAgICBjbGlja2FibGU/OiBib29sZWFuLFxyXG4gICAgZ2VvZGVzaWM/OiBib29sZWFuLFxyXG4gICAgZmlsbENvbG9yPzogQ29sb3IsXHJcbiAgICBzdHJva2VDb2xvcj86IENvbG9yLFxyXG4gICAgc3Ryb2tlSm9pbnRUeXBlPzogSm9pbnRUeXBlLFxyXG4gICAgc3Ryb2tlUGF0dGVybj86IFBhdHRlcm5JdGVtW10sXHJcbiAgICBzdHJva2VXaWR0aD86IG51bWJlcixcclxuICAgIHZpc2libGU/OiB0cnVlLFxyXG4gICAgekluZGV4PzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvbHlsaW5lT3B0aW9ucyB7XHJcbiAgICBwb2ludHM6IExhdExuZ1tdLFxyXG4gICAgY2xpY2thYmxlPzogYm9vbGVhbixcclxuICAgIGNvbG9yPzogQ29sb3IsXHJcbiAgICBzdGFydENhcD86IENhcCxcclxuICAgIHBhdHRlcm4/OiBQYXR0ZXJuSXRlbVtdLFxyXG4gICAgZW5kQ2FwPzogQ2FwLFxyXG4gICAgZ2VvZGVzaWM/OiBib29sZWFuLFxyXG4gICAgam9pbnRUeXBlPzogSm9pbnRUeXBlLFxyXG4gICAgdmlzaWJsZT86IGJvb2xlYW4sXHJcbiAgICB3aWR0aD86IG51bWJlcixcclxuICAgIHpJbmRleD86IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdyb3VuZE92ZXJsYXlPcHRpb25zIHtcclxuICAgIHdpZHRoPzogbnVtYmVyLFxyXG4gICAgaGVpZ2h0PzogbnVtYmVyLFxyXG4gICAgYW5jaG9yPzogQW5jaG9yLFxyXG4gICAgYmVhcmluZz86IG51bWJlcixcclxuICAgIGNsaWNrYWJsZT86IGJvb2xlYW4sXHJcbiAgICBpbWFnZT86IEJpdG1hcERlc2NyaXB0b3IsXHJcbiAgICB2aXNpYmxlPzogYm9vbGVhbixcclxuICAgIHRyYW5zcGFyZW5jeT86IG51bWJlcixcclxuICAgIHpJbmRleD86IG51bWJlcixcclxuICAgIHBvc2l0aW9uOiBQb3NpdGlvbixcclxuICAgIGJvdW5kcz86IExhdExuZ0JvdW5kc1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvc2l0aW9uIHtcclxuICAgIGxhdExuZzogTGF0TG5nLFxyXG4gICAgd2lkdGg6IG51bWJlcixcclxuICAgIGhlaWdodD86IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVSTFRpbGUge1xyXG4gICAgVVJMOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGlsZSB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICB6b29tOiBudW1iZXI7XHJcbiAgICBwYXRoOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVwZXRpdGl2ZVRpbGUge1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgem9vbTogbnVtYmVyW107XHJcbiAgICBwYXRoOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGlsZVByb3ZpZGVyIHtcclxuICAgIHR5cGU6IFRpbGVUeXBlLFxyXG4gICAgZGF0YTogVGlsZVtdIHwgVVJMVGlsZSB8IFJlcGV0aXRpdmVUaWxlXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGlsZU92ZXJsYXlPcHRpb25zIHtcclxuICAgIHRpbGVQcm92aWRlcjogVGlsZVByb3ZpZGVyLFxyXG4gICAgZmFkZUluPzogYm9vbGVhbixcclxuICAgIHRyYW5zcGFyZW5jeT86IG51bWJlcixcclxuICAgIHZpc2libGU/OiBib29sZWFuLFxyXG4gICAgekluZGV4PzogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQW5pbWF0aW9uIHtcclxuICAgIGR1cmF0aW9uPzogbnVtYmVyLFxyXG4gICAgcmVwZWF0Q291bnQ/OiBudW1iZXIsXHJcbiAgICByZXBlYXRNb2RlPzogbnVtYmVyLFxyXG4gICAgaW50ZXJwb2xhdG9yPzogSW50ZXJwb2xhdG9yLFxyXG4gICAgYW5pbWF0aW9uU3RhcnQ/OiAoKSA9PiB2b2lkLFxyXG4gICAgYW5pbWF0aW9uRW5kPzogKCkgPT4gdm9pZFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJvdGF0ZUFuaW1hdGlvbiBleHRlbmRzIEFuaW1hdGlvbiB7XHJcbiAgICBmcm9tRGVncmVlOiBudW1iZXI7XHJcbiAgICB0b0RlZ3JlZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNjYWxlQW5pbWF0aW9uIGV4dGVuZHMgQW5pbWF0aW9uIHtcclxuICAgIGZyb21YOiBudW1iZXI7XHJcbiAgICB0b1g6IG51bWJlcjtcclxuICAgIGZyb21ZOiBudW1iZXI7XHJcbiAgICB0b1k6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2xhdGVBbmltYXRpb24gZXh0ZW5kcyBBbmltYXRpb24ge1xyXG4gICAgdGFyZ2V0OiBMYXRMbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWxwaGFBbmltYXRpb24gZXh0ZW5kcyBBbmltYXRpb24ge1xyXG4gICAgZnJvbUFscGhhOiBudW1iZXI7XHJcbiAgICB0b0FscGhhOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FuY2VsYWJsZUNhbGxiYWNrIHtcclxuICAgIG9uRmluaXNoOiAoKSA9PiB2b2lkLFxyXG4gICAgb25DYW5jZWw6ICgpID0+IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbmZvV2luZG93QWRhcHRlciB7XHJcbiAgICBmaWxlOiBzdHJpbmcsXHJcbiAgICB3aWR0aDogbnVtYmVyLFxyXG4gICAgaGVpZ2h0OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvblNvdXJjZSB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbXB1dGVEaXN0YW5jZVJlc3VsdCB7XHJcbiAgICByZXN1bHQ6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50IHtcclxuICAgIHg6IG51bWJlcixcclxuICAgIHk6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNuYXBzaG90UmVzdWx0IHtcclxuICAgIGRhdGE6IHN0cmluZyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWaXNpYmxlUmVnaW9uIHtcclxuICAgIGZhckxlZnQ6IExhdExuZyxcclxuICAgIGZhclJpZ2h0OiBMYXRMbmcsXHJcbiAgICBsYXRMbmdCb3VuZHM6IExhdExuZ0JvdW5kcyxcclxuICAgIG5lYXJMZWZ0OiBMYXRMbmcsXHJcbiAgICBuZWFyUmlnaHQ6IExhdExuZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEludGVycG9sYXRvciB7XHJcbiAgICB0eXBlOiBJbnRlcnBvbGF0b3JUeXBlLFxyXG4gICAgYXJncz86IGFueVxyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1FTlVNUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5leHBvcnQgZW51bSBUaWxlVHlwZSB7XHJcbiAgICBVUkxfVElMRSxcclxuICAgIFJFUEVUSVRJVkVfVElMRSxcclxuICAgIExPQ0FMX1RJTEVcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ29sb3Ige1xyXG4gICAgUkVEID0gLTY1NTM2LFxyXG4gICAgREFSS19HUkFZID0gLTEyMzAzMjkyLFxyXG4gICAgR1JBWSA9IC03ODI5MzY4LFxyXG4gICAgV0hJVEUgPSAtMSxcclxuICAgIEJMVUUgPSAtMTY3NzY5NjEsXHJcbiAgICBCTEFDSyA9IC0xNjc3NzIxNixcclxuICAgIExJVEVfR1JBWSA9IC0zMzU1NDQ0LFxyXG4gICAgTUFHRU5UQSA9IC02NTI4MSxcclxuICAgIFlFTExPVyA9IC0yNTYsXHJcbiAgICBDWUFOID0gLTE2NzExNjgxLFxyXG4gICAgR1JFRU4gPSAtMTY3MTE5MzYsXHJcbiAgICBUUkFOU1BBUkVOVCA9IDBcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSm9pbnRUeXBlIHtcclxuICAgIFJPVU5EID0gMixcclxuICAgIEJFVkVMID0gMSxcclxuICAgIERFRkFVTFQgPSAwXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1hcEV2ZW50IHtcclxuICAgIE9OX0lORE9PUl9CVUlMRElOR1NfRk9DVVNFRCA9ICdvbkluZG9vckJ1aWxkaW5nc0ZvY3VzZWQnLFxyXG4gICAgT05fSU5ET09SX0xFVkVMX0FDVElWQVRFRCA9ICdvbkluZG9vckxldmVsQWN0aXZhdGVkJyxcclxuICAgIE9OX01BUF9MT0FERUQgPSAnb25NYXBMb2FkZWQnLFxyXG4gICAgT05fQ0FNRVJBX0lETEUgPSAnb25DYW1lcmFJZGxlJyxcclxuICAgIE9OX0NBTUVSQV9NT1ZFX0NBTkNFTEVEID0gJ29uQ2FtZXJhTW92ZUNhbmNlbGVkJyxcclxuICAgIE9OX0NBTUVSQV9NT1ZFID0gJ29uQ2FtZXJhTW92ZScsXHJcbiAgICBPTl9DQU1FUkFfTU9WRV9TVEFSVEVEID0gJ29uQ2FtZXJhTW92ZVN0YXJ0ZWQnLFxyXG4gICAgT05fQ0lSQ0xFX0NMSUNLID0gJ29uQ2lyY2xlQ2xpY2snLFxyXG4gICAgT05fR1JPVU5EX09WRVJMQVlfQ0xJQ0sgPSAnb25Hcm91bmRPdmVybGF5Q2xpY2snLFxyXG4gICAgT05fSU5GT19XSU5ET1dfQ0xJQ0sgPSAnb25JbmZvV2luZG93Q2xpY2snLFxyXG4gICAgT05fSU5GT19XSU5ET1dfQ0xPU0UgPSAnb25JbmZvV2luZG93Q2xvc2UnLFxyXG4gICAgT05fSU5GT19XSU5ET1dfTE9OR19DTElDSyA9ICdvbkluZm9XaW5kb3dMb25nQ2xpY2snLFxyXG4gICAgT05fTUFQX0NMSUNLID0gJ29uTWFwQ2xpY2snLFxyXG4gICAgT05fTUFQX0xPTkdfQ0xJQ0sgPSAnb25NYXBMb25nQ2xpY2snLFxyXG4gICAgT05fTUFSS0VSX0NMSUNLID0gJ29uTWFya2VyQ2xpY2snLFxyXG4gICAgT05fTUFSS0VSX0RSQUdfU1RBUlQgPSAnb25NYXJrZXJEcmFnU3RhcnQnLFxyXG4gICAgT05fTUFSS0VSX0RSQUcgPSAnb25NYXJrZXJEcmFnJyxcclxuICAgIE9OX01BUktFUl9EUkFHX0VORCA9ICdvbk1hcmtlckRyYWdFbmQnLFxyXG4gICAgT05fTVlfTE9DQVRJT05fQlVUVE9OX0NMSUNLID0gJ29uTXlMb2NhdGlvbkJ1dHRvbkNsaWNrJyxcclxuICAgIE9OX01ZX0xPQ0FUSU9OX0NMSUNLID0gJ29uTXlMb2NhdGlvbkNsaWNrJyxcclxuICAgIE9OX1BPSV9DTElDSyA9ICdvblBvaUNsaWNrJyxcclxuICAgIE9OX1BPTFlHT05fQ0xJQ0sgPSAnb25Qb2x5Z29uQ2xpY2snLFxyXG4gICAgT05fUE9MWUxJTkVfQ0xJQ0sgPSAnb25Qb2x5bGluZUNsaWNrJyxcclxuICAgIE9OX0NBTkNFTEFCTEVfQ0FMTEJBQ0tfRklOSVNIID0gJ29uQ2FuY2VsYWJsZUNhbGxiYWNrRmluaXNoJyxcclxuICAgIE9OX0NBTkNFTEFCTEVfQ0FMTEJBQ0tfQ0FOQ0VMID0gJ29uQ2FuY2VsYWJsZUNhbGxiYWNrQ2FuY2VsJyxcclxuICAgIE9OX1NOQVBTSE9UX1JFQURZX0NBTExCQUNLID0gJ29uU25hcHNob3RSZWFkeUNhbGxiYWNrJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBNYXBUeXBlIHtcclxuICAgIE1BUF9UWVBFX05PTkUgPSAwLFxyXG4gICAgTUFQX1RZUEVfU0FURUxMSVRFID0gMixcclxuICAgIE1BUF9UWVBFX05PUk1BTCA9IDEsXHJcbiAgICBNQVBfVFlQRV9IWUJSSUQgPSA0LFxyXG4gICAgTUFQX1RZUEVfVEVSUkFJTiA9IDMsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEh1ZSB7XHJcbiAgICBIVUVfR1JFRU4gPSAxMjAsXHJcbiAgICBIVUVfQVpVUkUgPSAyMTAsXHJcbiAgICBIVUVfUk9TRSA9IDMzMCxcclxuICAgIEhVRV9DWUFOID0gMTgwLFxyXG4gICAgSFVFX09SQU5HRSA9IDMwLFxyXG4gICAgSFVFX01BR0VOVEEgPSAzMDAsXHJcbiAgICBIVUVfVklPTEVUID0gMjcwLFxyXG4gICAgSFVFX1lFTExPVyA9IDYwLFxyXG4gICAgSFVFX0JMVUUgPSAyNDAsXHJcbiAgICBIVUVfUkVEID0gMCxcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBhdHRlcm5JdGVtVHlwZSB7XHJcbiAgICBUWVBFX0dBUCA9IDIsXHJcbiAgICBUWVBFX0RPVCA9IDEsXHJcbiAgICBUWVBFX0RBU0ggPSAwXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENhbWVyYU1vdmVTdGFydGVkUmVhc29uIHtcclxuICAgIFJFQVNPTl9BUElfQU5JTUFUSU9OID0gMixcclxuICAgIFJFQVNPTl9ERVZFTE9QRVJfQU5JTUFUSU9OID0gMyxcclxuICAgIFJFQVNPTl9HRVNUVVJFID0gMVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBJbnRlcnBvbGF0b3JUeXBlIHtcclxuICAgIExJTkVBUixcclxuICAgIEFDQ0VMRVJBVEVfREVDRUxFUkFURSxcclxuICAgIEFDQ0VMRVJBVEUsXHJcbiAgICBBTlRJQ0lQQVRFLFxyXG4gICAgQU5USUNJUEFURV9PVkVSU0hPT1QsXHJcbiAgICBCT1VOQ0UsXHJcbiAgICBDWUNMRSxcclxuICAgIERFQ0VMRVJBVEUsXHJcbiAgICBPVkVSU0hPT1QsXHJcbiAgICBQQVRIXHJcbn1cclxuIl19