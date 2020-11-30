/*
    Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

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
    HMSMapOriginal.repo = "";
    HMSMapOriginal.install = "";
    HMSMapOriginal.installVariables = [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1tYXAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWdCQSxPQUFPLDhCQUFvQyxNQUFNLG9CQUFvQixDQUFDOztJQVkxQywwQkFBaUI7Ozs7SUFHekMsdUJBQU0sYUFBQyxLQUFhLEVBQUUsZ0JBQWtDLEVBQUUsTUFBa0I7SUFLNUUsd0JBQU8sYUFBQyxLQUFhO0lBS3JCLDhCQUFhO0lBS2Isa0NBQWlCO0lBS2pCLHVDQUFzQixhQUFDLElBQVksRUFBRSxFQUFVO0lBSy9DLDBCQUFTLGFBQUMsTUFBYztJQUt4Qiw4QkFBYTtJQUtiLDZCQUFZOzs7Ozs7OztpQkFsRWhCO0VBNEI0QixpQkFBaUI7U0FBaEMsTUFBTTs7SUFtRGY7SUFDQSxDQUFDO0lBRU0scUNBQWlCLEdBQXhCLFVBQXlCLGNBQThCO1FBQ25ELE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFTSw2QkFBUyxHQUFoQixVQUFpQixNQUFjO1FBQzNCLE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBSU0sbUNBQWUsR0FBdEIsVUFBdUIsWUFBMEIsRUFBRSxPQUFlLEVBQUUsS0FBYyxFQUFFLE1BQWU7UUFDL0YsT0FBTyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3hHLENBQUM7SUFFTSxpQ0FBYSxHQUFwQixVQUFxQixNQUFjLEVBQUUsSUFBWTtRQUM3QyxPQUFPLE1BQU0sQ0FBQyxTQUFTLEVBQUUs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Q2pCLDJDQUFnQixDQUFBO0lBQ2hCLDBDQUFlLENBQUE7SUFDZix1Q0FBYyxDQUFBO0lBQ2QsbUNBQVcsQ0FBQTtBQUVmLENBQUMsRUFaVyxHQUFHLEtBQUgsR0FBRyxRQVlkO0FBRUQsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN2Qiw2REFBWSxDQUFBO0lBQ1osNkRBQVksQ0FBQTtJQUNaLCtEQUFhLENBQUE7QUFDakIsQ0FBQyxFQUpXLGVBQWUsS0FBZixlQUFlLFFBSTFCO0FBRUQsTUFBTSxDQUFOLElBQVksdUJBSVg7QUFKRCxXQUFZLHVCQUF1QjtJQUMvQixxR0FBd0IsQ0FBQTtJQUN4QixpSEFBOEIsQ0FBQTtJQUM5Qix5RkFBa0IsQ0FBQTtBQUN0QixDQUFDLEVBSlcsdUJBQXVCLEtBQXZCLHVCQUF1QixRQUlsQztBQUVELE1BQU0sQ0FBTixJQUFZLGdCQVdYO0FBWEQsV0FBWSxnQkFBZ0I7SUFDeEIsMkRBQU0sQ0FBQTtJQUNOLHlGQUFxQixDQUFBO0lBQ3JCLG1FQUFVLENBQUE7SUFDVixtRUFBVSxDQUFBO0lBQ1YsdUZBQW9CLENBQUE7SUFDcEIsMkRBQU0sQ0FBQTtJQUNOLHlEQUFLLENBQUE7SUFDTCxtRUFBVSxDQUFBO0lBQ1YsaUVBQVMsQ0FBQTtJQUNULHVEQUFJLENBQUE7QUFDUixDQUFDLEVBWFcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQVczQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQ29weXJpZ2h0IDIwMjAuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5cbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW59IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6ICdITVNNYXAnLFxuICAgIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1tYXAnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgICBwbHVnaW5SZWY6ICdITVNNYXAnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gICAgcmVwbzogJycsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gICAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU01hcCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxuICAgIGdldE1hcChkaXZJZDogc3RyaW5nLCBodWF3ZWlNYXBPcHRpb25zOiBIdWF3ZWlNYXBPcHRpb25zLCBib3VuZHM/OiBNYXBCb3VuZHMpOiBQcm9taXNlPEh1YXdlaU1hcD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXG4gICAgc2hvd01hcChkaXZJZDogc3RyaW5nKTogUHJvbWlzZTxIdWF3ZWlNYXA+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxuICAgIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7b3RoZXJQcm9taXNlOiB0cnVlfSlcbiAgICByZXF1ZXN0UGVybWlzc2lvbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxuICAgIGNvbXB1dGVEaXN0YW5jZUJldHdlZW4oZnJvbTogTGF0TG5nLCB0bzogTGF0TG5nKTogUHJvbWlzZTxDb21wdXRlRGlzdGFuY2VSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxuICAgIHNldEFwaUtleShhcGlLZXk6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXG4gICAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxuICAgIGVuYWJsZUxvZ2dlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogJ0hNU01hcCcsXG4gICAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLW1hcCcsXG4gICAgcGx1Z2luUmVmOiAnSE1TTWFwLkNhbWVyYVVwZGF0ZUZhY3RvcnknLFxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuZXhwb3J0IGNsYXNzIENhbWVyYVVwZGF0ZUZhY3Rvcnkge1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBzdGF0aWMgbmV3Q2FtZXJhUG9zaXRpb24oY2FtZXJhUG9zaXRpb246IENhbWVyYVBvc2l0aW9uKTogQ2FtZXJhVXBkYXRlIHtcbiAgICAgICAgcmV0dXJuIEhNU01hcC5nZXRQbHVnaW4oKS5DYW1lcmFVcGRhdGVGYWN0b3J5Lm5ld0NhbWVyYVBvc2l0aW9uKGNhbWVyYVBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbmV3TGF0TG5nKGxhdExuZzogTGF0TG5nKTogQ2FtZXJhVXBkYXRlIHtcbiAgICAgICAgcmV0dXJuIEhNU01hcC5nZXRQbHVnaW4oKS5DYW1lcmFVcGRhdGVGYWN0b3J5Lm5ld0xhdExuZyhsYXRMbmcpO1xuICAgIH1cblxuICAgIHN0YXRpYyBuZXdMYXRMbmdCb3VuZHMobGF0TG5nQm91bmRzOiBMYXRMbmdCb3VuZHMsIHBhZGRpbmc6IG51bWJlcik6IENhbWVyYVVwZGF0ZTtcblxuICAgIHN0YXRpYyBuZXdMYXRMbmdCb3VuZHMobGF0TG5nQm91bmRzOiBMYXRMbmdCb3VuZHMsIHBhZGRpbmc6IG51bWJlciwgd2lkdGg/OiBudW1iZXIsIGhlaWdodD86IG51bWJlcik6IENhbWVyYVVwZGF0ZSB7XG4gICAgICAgIHJldHVybiBITVNNYXAuZ2V0UGx1Z2luKCkuQ2FtZXJhVXBkYXRlRmFjdG9yeS5uZXdMYXRMbmdCb3VuZHMobGF0TG5nQm91bmRzLCBwYWRkaW5nLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbmV3TGF0TG5nWm9vbShsYXRMbmc6IExhdExuZywgem9vbTogbnVtYmVyKTogQ2FtZXJhVXBkYXRlIHtcbiAgICAgICAgcmV0dXJuIEhNU01hcC5nZXRQbHVnaW4oKS5DYW1lcmFVcGRhdGVGYWN0b3J5Lm5ld0xhdExuZ1pvb20obGF0TG5nLCB6b29tKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2Nyb2xsQnkoeFBpeGVsOiBudW1iZXIsIHlQaXhlbDogbnVtYmVyKTogQ2FtZXJhVXBkYXRlIHtcbiAgICAgICAgcmV0dXJuIEhNU01hcC5nZXRQbHVnaW4oKS5DYW1lcmFVcGRhdGVGYWN0b3J5LnNjcm9sbEJ5KHhQaXhlbCwgeVBpeGVsKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgem9vbUJ5KGFtb3VudDogbnVtYmVyKTogQ2FtZXJhVXBkYXRlO1xuXG4gICAgc3RhdGljIHpvb21CeShhbW91bnQ6IG51bWJlciwgZm9jdXM/OiBQb2ludCk6IENhbWVyYVVwZGF0ZSB7XG4gICAgICAgIHJldHVybiBITVNNYXAuZ2V0UGx1Z2luKCkuQ2FtZXJhVXBkYXRlRmFjdG9yeS56b29tQnkoYW1vdW50LCBmb2N1cyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHpvb21JbigpOiBDYW1lcmFVcGRhdGUge1xuICAgICAgICByZXR1cm4gSE1TTWFwLmdldFBsdWdpbigpLkNhbWVyYVVwZGF0ZUZhY3Rvcnkuem9vbUluKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHpvb21PdXQoKTogQ2FtZXJhVXBkYXRlIHtcbiAgICAgICAgcmV0dXJuIEhNU01hcC5nZXRQbHVnaW4oKS5DYW1lcmFVcGRhdGVGYWN0b3J5Lnpvb21PdXQoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgem9vbVRvKHpvb206IG51bWJlcik6IENhbWVyYVVwZGF0ZSB7XG4gICAgICAgIHJldHVybiBITVNNYXAuZ2V0UGx1Z2luKCkuQ2FtZXJhVXBkYXRlRmFjdG9yeS56b29tVG8oem9vbSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWFwU3R5bGVPcHRpb25zIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlc291cmNlSWQ6IG51bWJlcjtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IocmVzb3VyY2VJZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VJZCA9IHJlc291cmNlSWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBsb2FkUmF3UmVzb3VyY2VTdHlsZShyZXNvdXJjZUlkOiBudW1iZXIpOiBNYXBTdHlsZU9wdGlvbnMge1xuICAgICAgICByZXR1cm4gbmV3IE1hcFN0eWxlT3B0aW9ucyhyZXNvdXJjZUlkKTtcbiAgICB9XG5cbiAgICBnZXRSZXNvdXJjZUlkKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc291cmNlSWQ7XG4gICAgfVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FwIHtcbiAgICBzdGF0aWMgcmVhZG9ubHkgVFlQRV9CVVRUX0NBUCA9IDA7XG4gICAgc3RhdGljIHJlYWRvbmx5IFRZUEVfU1FVQVJFX0NBUCA9IDE7XG4gICAgc3RhdGljIHJlYWRvbmx5IFRZUEVfUk9VTkRfQ0FQID0gMjtcbiAgICBzdGF0aWMgcmVhZG9ubHkgVFlQRV9DVVNUT01fQ0FQID0gMztcbiAgICBwcm90ZWN0ZWQgdHlwZTogbnVtYmVyO1xuICAgIHByb3RlY3RlZCByZWZXaWR0aD86IG51bWJlciA9IG51bGw7XG4gICAgcHJvdGVjdGVkIGJpdG1hcERlc2NyaXB0b3I/OiBCaXRtYXBEZXNjcmlwdG9yID0gbnVsbDtcblxuICAgIGdldFR5cGUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCdXR0Q2FwIGV4dGVuZHMgQ2FwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gMDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSb3VuZENhcCBleHRlbmRzIENhcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9IDI7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3F1YXJlQ2FwIGV4dGVuZHMgQ2FwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gMTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21DYXAgZXh0ZW5kcyBDYXAge1xuXG4gICAgY29uc3RydWN0b3IoYml0bWFwRGVzY3JpcHRvcjogQml0bWFwRGVzY3JpcHRvciwgcmVmV2lkdGg/OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gMztcbiAgICAgICAgdGhpcy5iaXRtYXBEZXNjcmlwdG9yID0gYml0bWFwRGVzY3JpcHRvcjtcbiAgICAgICAgdGhpcy5yZWZXaWR0aCA9IHJlZldpZHRoO1xuICAgIH1cblxuICAgIGdldFJlZldpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZldpZHRoO1xuICAgIH1cblxuICAgIGdldEJpdG1hcERlc2NyaXB0b3IoKTogQml0bWFwRGVzY3JpcHRvciB7XG4gICAgICAgIHJldHVybiB0aGlzLmJpdG1hcERlc2NyaXB0b3I7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uU2V0IHtcblxuICAgIHJlYWRvbmx5IGFuaW1hdGlvbnM6IE1hcDxzdHJpbmcsIEFuaW1hdGlvbj4gPSBuZXcgTWFwPHN0cmluZywgQW5pbWF0aW9uPigpO1xuXG4gICAgYWRkUm90YXRlQW5pbWF0aW9uKGFuaW1hdGlvbjogUm90YXRlQW5pbWF0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5zZXQoJ1JvdGF0ZScsIGFuaW1hdGlvbik7XG4gICAgfVxuXG4gICAgYWRkU2NhbGVBbmltYXRpb24oYW5pbWF0aW9uOiBTY2FsZUFuaW1hdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMuc2V0KCdTY2FsZScsIGFuaW1hdGlvbik7XG4gICAgfVxuXG4gICAgYWRkVHJhbnNsYXRlQW5pbWF0aW9uKGFuaW1hdGlvbjogVHJhbnNsYXRlQW5pbWF0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5zZXQoJ1RyYW5zbGF0ZScsIGFuaW1hdGlvbik7XG4gICAgfVxuXG4gICAgYWRkQWxwaGFBbmltYXRpb24oYW5pbWF0aW9uOiBBbHBoYUFuaW1hdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMuc2V0KCdBbHBoYScsIGFuaW1hdGlvbik7XG4gICAgfVxuXG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0lOVEVSRkFDRVMvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBpbnRlcmZhY2UgVWlTZXR0aW5ncyB7XG4gICAgaXNDb21wYXNzRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIGlzSW5kb29yTGV2ZWxQaWNrZXJFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgaXNNYXBUb29sYmFyRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIGlzTXlMb2NhdGlvbkJ1dHRvbkVuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBpc1JvdGF0ZUdlc3R1cmVzRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIGlzU2Nyb2xsR2VzdHVyZXNFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgaXNTY3JvbGxHZXN0dXJlc0VuYWJsZWREdXJpbmdSb3RhdGVPclpvb20oKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBpc1RpbHRHZXN0dXJlc0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBpc1pvb21Db250cm9sc0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBpc1pvb21HZXN0dXJlc0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBzZXRBbGxHZXN0dXJlc0VuYWJsZWQoYWxsR2VzdHVyZXNFbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRDb21wYXNzRW5hYmxlZChjb21wYXNzRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0SW5kb29yTGV2ZWxQaWNrZXJFbmFibGVkKGluZG9vckxldmVsUGlja2VyRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0TWFwVG9vbGJhckVuYWJsZWQobWFwVG9vbGJhckVuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldE15TG9jYXRpb25CdXR0b25FbmFibGVkKG15TG9jYXRpb25CdXR0b25FbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRSb3RhdGVHZXN0dXJlc0VuYWJsZWQocm90YXRlR2VzdHVyZXNFbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRTY3JvbGxHZXN0dXJlc0VuYWJsZWQoc2Nyb2xsR2VzdHVyZXNFbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRTY3JvbGxHZXN0dXJlc0VuYWJsZWREdXJpbmdSb3RhdGVPclpvb20oc2Nyb2xsR2VzdHVyZXNFbmFibGVkRHVyaW5nUm90YXRlT3Jab29tOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRUaWx0R2VzdHVyZXNFbmFibGVkKHRpbHRHZXN0dXJlc0VuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFpvb21Db250cm9sc0VuYWJsZWQoem9vbUNvbnRyb2xzRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0Wm9vbUdlc3R1cmVzRW5hYmxlZCh6b29tR2VzdHVyZXNFbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIdWF3ZWlNYXAge1xuICAgIG9uKGV2ZW50OiBNYXBFdmVudCwgY2FsbGJhY2s6ICh2YWw6IGFueSkgPT4gdm9pZCk6IFByb21pc2U8dm9pZD47XG4gICAgZGVzdHJveU1hcCgpOiBQcm9taXNlPHZvaWQ+O1xuICAgIGhpZGVNYXAoKTogUHJvbWlzZTx2b2lkPlxuICAgIGdldENvbXBvbmVudChrZXk6IHN0cmluZyk6IGFueTtcbiAgICByZW1vdmVDb21wb25lbnQoa2V5OiBzdHJpbmcpOiB2b2lkO1xuICAgIGdldElkKCk6IG51bWJlcjtcbiAgICBzY3JvbGwoKTogdm9pZDtcbiAgICBhZGRDaXJjbGUoY2lyY2xlT3B0aW9uczogQ2lyY2xlT3B0aW9ucyk6IFByb21pc2U8Q2lyY2xlPjtcbiAgICBhZGRNYXJrZXIobWFya2VyT3B0aW9uczogTWFya2VyT3B0aW9ucyk6IFByb21pc2U8TWFya2VyPjtcbiAgICBhZGRHcm91bmRPdmVybGF5KGdyb3VuZE92ZXJsYXlPcHRpb25zOiBHcm91bmRPdmVybGF5T3B0aW9ucyk6IFByb21pc2U8R3JvdW5kT3ZlcmxheT47XG4gICAgYWRkVGlsZU92ZXJsYXkodGlsZU92ZXJsYXlPcHRpb25zOiBUaWxlT3ZlcmxheU9wdGlvbnMpOiBQcm9taXNlPFRpbGVPdmVybGF5PjtcbiAgICBhZGRQb2x5Z29uKHBvbHlnb25PcHRpb25zOiBQb2x5Z29uT3B0aW9ucyk6IFByb21pc2U8UG9seWdvbj47XG4gICAgYWRkUG9seWxpbmUocG9seWxpbmVPcHRpb25zOiBQb2x5bGluZU9wdGlvbnMpOiBQcm9taXNlPFBvbHlsaW5lPjtcbiAgICBhbmltYXRlQ2FtZXJhKGNhbWVyYVVwZGF0ZTogQ2FtZXJhVXBkYXRlKTogUHJvbWlzZTx2b2lkPjtcbiAgICBhbmltYXRlQ2FtZXJhKGNhbWVyYVVwZGF0ZTogQ2FtZXJhVXBkYXRlLCBjYW5jZWxhYmxlQ2FsbGJhY2s6IENhbmNlbGFibGVDYWxsYmFjayk6IFByb21pc2U8dm9pZD47XG4gICAgYW5pbWF0ZUNhbWVyYShjYW1lcmFVcGRhdGU6IENhbWVyYVVwZGF0ZSwgY2FuY2VsYWJsZUNhbGxiYWNrPzogQ2FuY2VsYWJsZUNhbGxiYWNrLCBkdXJhdGlvbk1zPzogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBtb3ZlQ2FtZXJhKGNhbWVyYVVwZGF0ZTogQ2FtZXJhVXBkYXRlKTogUHJvbWlzZTx2b2lkPjtcbiAgICBjbGVhcigpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHJlc2V0TWluTWF4Wm9vbVByZWZlcmVuY2UoKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzdG9wQW5pbWF0aW9uKCk6IFByb21pc2U8dm9pZD47XG4gICAgZ2V0Q2FtZXJhUG9zaXRpb24oKTogUHJvbWlzZTxDYW1lcmFQb3NpdGlvbj47XG4gICAgZ2V0TWFwVHlwZSgpOiBQcm9taXNlPE1hcFR5cGU+O1xuICAgIGdldE1heFpvb21MZXZlbCgpOiBQcm9taXNlPG51bWJlcj47XG4gICAgZ2V0TWluWm9vbUxldmVsKCk6IFByb21pc2U8bnVtYmVyPjtcbiAgICBnZXRQcm9qZWN0aW9uKCk6IFByb2plY3Rpb247XG4gICAgZ2V0VWlTZXR0aW5ncygpOiBVaVNldHRpbmdzO1xuICAgIGlzQnVpbGRpbmdzRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIGlzTXlMb2NhdGlvbkVuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBpc1RyYWZmaWNFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgaXNJbmRvb3JFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgc2V0QnVpbGRpbmdzRW5hYmxlZChidWlsZGluZ3NFbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRDb250ZW50RGVzY3JpcHRpb24oY29udGVudERlc2NyaXB0aW9uOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldEluZm9XaW5kb3dBZGFwdGVyKGluZm9XaW5kb3dBZGFwdGVyOiBJbmZvV2luZG93QWRhcHRlcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0TGF0TG5nQm91bmRzRm9yQ2FtZXJhVGFyZ2V0KGxhdExuZ0JvdW5kc0ZvckNhbWVyYVRhcmdldDogTGF0TG5nQm91bmRzKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRMb2NhdGlvblNvdXJjZShsb2NhdGlvblNvdXJjZTogTG9jYXRpb25Tb3VyY2UpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldE1hcFN0eWxlKG1hcFN0eWxlOiBNYXBTdHlsZU9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldE1hcFR5cGUobWFwVHlwZTogTWFwVHlwZSk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0TWFya2Vyc0NsdXN0ZXJpbmcobWFya2Vyc0NsdXN0ZXJpbmc6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldE1heFpvb21QcmVmZXJlbmNlKG1heFpvb21QcmVmZXJlbmNlOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldE1pblpvb21QcmVmZXJlbmNlKG1pblpvb21QcmVmZXJlbmNlOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldE15TG9jYXRpb25FbmFibGVkKG15TG9jYXRpb25FbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRQYWRkaW5nKGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRUcmFmZmljRW5hYmxlZCh0cmFmZmljRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc25hcHNob3Qob25SZWFkeUNhbGxiYWNrOiAoc25hcHNob3Q6IFNuYXBzaG90UmVzdWx0KSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYW1lcmFVcGRhdGUge1xuICAgIG1vdmVDYW1lcmEobWFwSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PjtcbiAgICBhbmltYXRlQ2FtZXJhKG1hcElkOiBzdHJpbmcsIHByb3BzOiBhbnkpOiBQcm9taXNlPGFueT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2lyY2xlIHtcbiAgICBnZXRDZW50ZXIoKTogUHJvbWlzZTxMYXRMbmc+O1xuICAgIGdldEZpbGxDb2xvcigpOiBQcm9taXNlPENvbG9yPjtcbiAgICBnZXRJZCgpOiBzdHJpbmc7XG4gICAgZ2V0UmFkaXVzKCk6IFByb21pc2U8bnVtYmVyPjtcbiAgICBnZXRTdHJva2VDb2xvcigpOiBQcm9taXNlPENvbG9yPjtcbiAgICBnZXRTdHJva2VQYXR0ZXJuKCk6IFByb21pc2U8UGF0dGVybkl0ZW1bXT47XG4gICAgZ2V0U3Ryb2tlV2lkdGgoKTogUHJvbWlzZTxudW1iZXI+O1xuICAgIGdldFRhZygpOiBQcm9taXNlPGFueT47XG4gICAgZ2V0WkluZGV4KCk6IFByb21pc2U8bnVtYmVyPjtcbiAgICBpc0NsaWNrYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIGlzVmlzaWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIHJlbW92ZSgpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldENlbnRlcihjZW50ZXI6IExhdExuZyk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0RmlsbENvbG9yKGZpbGxDb2xvcjogQ29sb3IpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFJhZGl1cyhyYWRpdXM6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0U3Ryb2tlQ29sb3Ioc3Ryb2tlQ29sb3I6IENvbG9yKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRTdHJva2VQYXR0ZXJuKHN0cm9rZVBhdHRlcm46IFBhdHRlcm5JdGVtW10pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFN0cm9rZVdpZHRoKHN0cm9rZVdpZHRoOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFRhZyh0YWc6IGFueSk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0WkluZGV4KHpJbmRleDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRDbGlja2FibGUoY2xpY2thYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyb3VuZE92ZXJsYXkge1xuICAgIGdldEJlYXJpbmcoKTogUHJvbWlzZTxudW1iZXI+O1xuICAgIGdldEJvdW5kcygpOiBQcm9taXNlPExhdExuZ0JvdW5kcz47XG4gICAgZ2V0SGVpZ2h0KCk6IFByb21pc2U8bnVtYmVyPjtcbiAgICBnZXRJZCgpOiBzdHJpbmc7XG4gICAgZ2V0UG9zaXRpb24oKTogUHJvbWlzZTxMYXRMbmc+O1xuICAgIGdldFRhZygpOiBQcm9taXNlPGFueT47XG4gICAgZ2V0VHJhbnNwYXJlbmN5KCk6IFByb21pc2U8bnVtYmVyPjtcbiAgICBnZXRXaWR0aCgpOiBQcm9taXNlPG51bWJlcj47XG4gICAgZ2V0WkluZGV4KCk6IFByb21pc2U8bnVtYmVyPjtcbiAgICBpc0NsaWNrYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIGlzVmlzaWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+O1xuXG4gICAgcmVtb3ZlKCk6IFByb21pc2U8dm9pZD47XG5cbiAgICBzZXRCZWFyaW5nKGJlYXJpbmc6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0Q2xpY2thYmxlKGNsaWNrYWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0RGltZW5zaW9ucyh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0RGltZW5zaW9ucyh3aWR0aDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRJbWFnZShpbWFnZURlc2NyaXB0b3I6IEJpdG1hcERlc2NyaXB0b3IpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFBvc2l0aW9uKHBvc2l0aW9uOiBMYXRMbmcpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFBvc2l0aW9uRnJvbUJvdW5kcyhwb3NpdGlvbkxhdExuZ0JvdW5kczogTGF0TG5nQm91bmRzKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRUYWcodGFnOiBhbnkpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFRyYW5zcGFyZW5jeSh0cmFuc3BhcmVuY3k6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRaSW5kZXgoekluZGV4OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlciB7XG4gICAgZ2V0QWxwaGEoKTogUHJvbWlzZTxudW1iZXI+O1xuICAgIGdldElkKCk6IHN0cmluZztcbiAgICBnZXRQb3NpdGlvbigpOiBQcm9taXNlPExhdExuZz47XG4gICAgZ2V0Um90YXRpb24oKTogUHJvbWlzZTxudW1iZXI+O1xuICAgIGdldFNuaXBwZXQoKTogUHJvbWlzZTxzdHJpbmc+O1xuICAgIGdldFRhZygpOiBQcm9taXNlPGFueT47XG4gICAgZ2V0VGl0bGUoKTogUHJvbWlzZTxzdHJpbmc+O1xuICAgIGdldFpJbmRleCgpOiBQcm9taXNlPG51bWJlcj47XG4gICAgaXNWaXNpYmxlKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgaXNDbHVzdGVyYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIGlzRHJhZ2dhYmxlKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgaXNGbGF0KCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgaXNJbmZvV2luZG93U2hvd24oKTogUHJvbWlzZTxib29sZWFuPjtcblxuICAgIHJlbW92ZSgpOiBQcm9taXNlPHZvaWQ+O1xuICAgIGhpZGVJbmZvV2luZG93KCk6IFByb21pc2U8dm9pZD47XG4gICAgc2hvd0luZm9XaW5kb3coKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzdGFydEFuaW1hdGlvbigpOiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgc2V0QWxwaGEoYWxwaGE6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0QW5pbWF0aW9uKGFuaW1hdGlvbjogQW5pbWF0aW9uU2V0KTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXREcmFnZ2FibGUoZHJhZ2dhYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRGbGF0KGZsYXQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldEljb24oaWNvbjogQml0bWFwRGVzY3JpcHRvcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0SW5mb1dpbmRvd0FuY2hvcih1OiBudW1iZXIsIHY6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0TWFya2VyQW5jaG9yKHU6IG51bWJlciwgdjogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRQb3NpdGlvbihsYXRMbmc6IExhdExuZyk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0Um90YXRpb24ocm90YXRpb246IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0U25pcHBldChzbmlwcGV0OiBTdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFRhZyh0YWc6IGFueSk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRaSW5kZXgoekluZGV4OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvbHlnb24ge1xuXG4gICAgZ2V0RmlsbENvbG9yKCk6IFByb21pc2U8Q29sb3I+O1xuICAgIGdldEhvbGVzKCk6IFByb21pc2U8TGF0TG5nW11bXT47XG4gICAgZ2V0SWQoKTogc3RyaW5nO1xuICAgIGdldFBvaW50cygpOiBQcm9taXNlPExhdExuZ1tdPjtcbiAgICBnZXRTdHJva2VDb2xvcigpOiBQcm9taXNlPENvbG9yPjtcbiAgICBnZXRTdHJva2VKb2ludFR5cGUoKTogUHJvbWlzZTxKb2ludFR5cGU+O1xuICAgIGdldFN0cm9rZVBhdHRlcm4oKTogUHJvbWlzZTxQYXR0ZXJuSXRlbVtdPjtcbiAgICBnZXRTdHJva2VXaWR0aCgpOiBQcm9taXNlPG51bWJlcj47XG4gICAgZ2V0VGFnKCk6IFByb21pc2U8YW55PjtcbiAgICBnZXRaSW5kZXgoKTogUHJvbWlzZTxudW1iZXI+O1xuICAgIGlzQ2xpY2thYmxlKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgaXNWaXNpYmxlKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgaXNHZW9kZXNpYygpOiBQcm9taXNlPGJvb2xlYW4+O1xuXG4gICAgcmVtb3ZlKCk6IFByb21pc2U8dm9pZD47XG5cbiAgICBzZXRDbGlja2FibGUoY2xpY2thYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRGaWxsQ29sb3IoY29sb3I6IENvbG9yKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRHZW9kZXNpYyhnZW9kZXNpYzogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0SG9sZXMoaG9sZXM6IExhdExuZ1tdW10pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFBvaW50cyhwb2ludHM6IExhdExuZ1tdKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRTdHJva2VDb2xvcihjb2xvcjogQ29sb3IpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFN0cm9rZUpvaW50VHlwZShqb2ludFR5cGU6IEpvaW50VHlwZSk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0U3Ryb2tlUGF0dGVybihwYXR0ZXJuSXRlbTogUGF0dGVybkl0ZW1bXSk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0U3Ryb2tlV2lkdGgod2lkdGg6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0VGFnKHRhZzogYW55KTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFpJbmRleCh6SW5kZXg6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9seWxpbmUge1xuICAgIGdldENvbG9yKCk6IFByb21pc2U8Q29sb3I+O1xuICAgIGdldEVuZENhcCgpOiBQcm9taXNlPENhcD47XG4gICAgZ2V0U3RhcnRDYXAoKTogUHJvbWlzZTxDYXA+O1xuICAgIGdldElkKCk6IHN0cmluZztcbiAgICBnZXRKb2ludFR5cGUoKTogUHJvbWlzZTxKb2ludFR5cGU+O1xuICAgIGdldFBhdHRlcm4oKTogUHJvbWlzZTxQYXR0ZXJuSXRlbVtdPjtcbiAgICBnZXRQb2ludHMoKTogUHJvbWlzZTxMYXRMbmdbXT47XG4gICAgZ2V0VGFnKCk6IFByb21pc2U8YW55PjtcbiAgICBnZXRXaWR0aCgpOiBQcm9taXNlPG51bWJlcj47XG4gICAgZ2V0WkluZGV4KCk6IFByb21pc2U8bnVtYmVyPjtcbiAgICBpc0NsaWNrYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIGlzR2VvZGVzaWMoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBpc1Zpc2libGUoKTogUHJvbWlzZTxib29sZWFuPjtcblxuICAgIHJlbW92ZSgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgc2V0Q2xpY2thYmxlKGNsaWNrYWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0Q29sb3IoY29sb3I6IENvbG9yKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRTdGFydENhcChzdGFydENhcDogQ2FwKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRFbmRDYXAoZW5kQ2FwOiBDYXApOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldEdlb2Rlc2ljKGdlb2Rlc2ljOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRKb2ludFR5cGUoam9pbnRUeXBlOiBKb2ludFR5cGUpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFBhdHRlcm4ocGF0dGVybjogUGF0dGVybkl0ZW1bXSk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0UG9pbnRzKHBvaW50czogTGF0TG5nW10pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFRhZyh0YWc6IGFueSk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRXaWR0aCh3aWR0aDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRaSW5kZXgoekluZGV4OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVPdmVybGF5IHtcbiAgICBnZXRGYWRlSW4oKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBnZXRJZCgpOiBzdHJpbmc7XG4gICAgZ2V0VHJhbnNwYXJlbmN5KCk6IFByb21pc2U8bnVtYmVyPjtcbiAgICBnZXRaSW5kZXgoKTogUHJvbWlzZTxudW1iZXI+O1xuICAgIGlzVmlzaWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+O1xuXG4gICAgcmVtb3ZlKCk6IFByb21pc2U8dm9pZD47XG4gICAgY2xlYXJUaWxlQ2FjaGUoKTogUHJvbWlzZTx2b2lkPjtcblxuICAgIHNldEZhZGVJbihmYWRlSW46IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFRyYW5zcGFyZW5jeSh0cmFuc3BhcmVuY3k6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgc2V0WkluZGV4KHpJbmRleDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2plY3Rpb24ge1xuICAgIGZyb21TY3JlZW5Mb2NhdGlvbihwb2ludDogUG9pbnQpOiBQcm9taXNlPExhdExuZz47XG4gICAgZ2V0VmlzaWJsZVJlZ2lvbigpOiBQcm9taXNlPFZpc2libGVSZWdpb24+O1xuICAgIHRvU2NyZWVuTG9jYXRpb24obGF0TG5nOiBMYXRMbmcpOiBQcm9taXNlPFBvaW50Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXBCb3VuZHMge1xuICAgIG1hcmdpblRvcD86IG51bWJlcixcbiAgICBtYXJnaW5Cb3R0b20/OiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIdWF3ZWlNYXBPcHRpb25zIHtcbiAgICBtYXBUeXBlPzogTWFwVHlwZSxcbiAgICB6b29tQ29udHJvbHNFbmFibGVkPzogYm9vbGVhbixcbiAgICBjb21wYXNzRW5hYmxlZD86IGJvb2xlYW4sXG4gICAgem9vbUdlc3R1cmVzRW5hYmxlZD86IGJvb2xlYW4sXG4gICAgc2Nyb2xsR2VzdHVyZXNFbmFibGVkPzogYm9vbGVhbixcbiAgICByb3RhdGVHZXN0dXJlc0VuYWJsZWQ/OiBib29sZWFuLFxuICAgIHRpbHRHZXN0dXJlc0VuYWJsZWQ/OiBib29sZWFuLFxuICAgIHpPcmRlck9uVG9wPzogYm9vbGVhbixcbiAgICBsaXRlTW9kZT86IGJvb2xlYW4sXG4gICAgYW1iaWVudEVuYWJsZWQ/OiBib29sZWFuLFxuICAgIG1pblpvb21QcmVmZXJlbmNlPzogbnVtYmVyLFxuICAgIG1heFpvb21QcmVmZXJlbmNlPzogbnVtYmVyLFxuICAgIGNhbWVyYVBvc2l0aW9uPzogQ2FtZXJhUG9zaXRpb24sXG4gICAgbGF0TG5nQm91bmRzPzogTGF0TG5nQm91bmRzXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYXRpb24ge1xuICAgIGFjY3VyYWN5OiBudW1iZXIsXG4gICAgYWx0aXR1ZGU6IG51bWJlcixcbiAgICBiZWFyaW5nOiBudW1iZXIsXG4gICAgZWxhcHNlZFJlYWx0aW1lTmFub3M6IG51bWJlcixcbiAgICBsYXRpdHVkZTogbnVtYmVyLFxuICAgIGxvbmdpdHVkZTogbnVtYmVyLFxuICAgIHByb3ZpZGVyOiBzdHJpbmcsXG4gICAgc3BlZWQ6IG51bWJlcixcbiAgICB0aW1lOiBudW1iZXIsXG4gICAgZnJvbU1vY2tQcm92aWRlcjogYm9vbGVhbixcbiAgICBjb250ZW50czogbnVtYmVyLFxuICAgIGJlYXJpbmdBY2N1cmFjeURlZ3JlZXM/OiBudW1iZXIsXG4gICAgc3BlZWRBY2N1cmFjeU1ldGVyc1BlclNlY29uZD86IG51bWJlcixcbiAgICB2ZXJ0aWNhbEFjY3VyYWN5TWV0ZXJzPzogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF0TG5nQm91bmRzIHtcbiAgICBzb3V0aHdlc3Q6IExhdExuZyxcbiAgICBub3J0aGVhc3Q6IExhdExuZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVBvc2l0aW9uIHtcbiAgICB0YXJnZXQ6IExhdExuZyxcbiAgICB6b29tPzogbnVtYmVyLFxuICAgIGJlYXJpbmc/OiBudW1iZXIsXG4gICAgdGlsdD86IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhdExuZyB7XG4gICAgbGF0OiBudW1iZXIsXG4gICAgbG5nOiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaXJjbGVPcHRpb25zIHtcbiAgICBjZW50ZXI6IExhdExuZyxcbiAgICBjbGlja2FibGU/OiBib29sZWFuLFxuICAgIGZpbGxDb2xvcj86IENvbG9yLFxuICAgIHJhZGl1czogbnVtYmVyLFxuICAgIHN0cm9rZUNvbG9yPzogQ29sb3IsXG4gICAgc3Ryb2tlV2lkdGg/OiBudW1iZXIsXG4gICAgc3Ryb2tlUGF0dGVybj86IFBhdHRlcm5JdGVtW10sXG4gICAgdmlzaWJsZT86IGJvb2xlYW4sXG4gICAgekluZGV4PzogbnVtYmVyXG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQT0kge1xuICAgIGxhdExuZzogTGF0TG5nLFxuICAgIG5hbWU/OiBzdHJpbmcsXG4gICAgcGxhY2VJZD86IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhdHRlcm5JdGVtIHtcbiAgICB0eXBlOiBQYXR0ZXJuSXRlbVR5cGUsXG4gICAgbGVuZ3RoOiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXJrZXJPcHRpb25zIHtcbiAgICBhbmNob3JNYXJrZXI/OiBBbmNob3IsXG4gICAgaW5mb1dpbmRvd0FuY2hvcj86IEFuY2hvcixcbiAgICBpbmZvV2luZG93U2hvd24/OiBib29sZWFuLFxuICAgIGFscGhhPzogbnVtYmVyLFxuICAgIGNsdXN0ZXJhYmxlPzogYm9vbGVhbixcbiAgICBkcmFnZ2FibGU/OiBib29sZWFuLFxuICAgIGljb24/OiBCaXRtYXBEZXNjcmlwdG9yLFxuICAgIGZsYXQ/OiBib29sZWFuLFxuICAgIHBvc2l0aW9uOiBMYXRMbmcsXG4gICAgcm90YXRpb24/OiBudW1iZXIsXG4gICAgc25pcHBldD86IHN0cmluZyxcbiAgICB0aXRsZT86IHN0cmluZyxcbiAgICB2aXNpYmxlPzogYm9vbGVhbixcbiAgICB6SW5kZXg/OiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY2FsZWRTaXplIHtcbiAgICB3aWR0aDogbnVtYmVyLFxuICAgIGhlaWdodDogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXNzZXQge1xuICAgIGZpbGVOYW1lOiBzdHJpbmcsXG4gICAgc2NhbGVkU2l6ZT86IFNjYWxlZFNpemVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNvdXJjZSB7XG4gICAgZmlsZU5hbWU6IHN0cmluZyxcbiAgICByZXNvdXJjZVR5cGU6IHN0cmluZyxcbiAgICBzY2FsZWRTaXplPzogU2NhbGVkU2l6ZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJpdG1hcERlc2NyaXB0b3Ige1xuICAgIGh1ZT86IEh1ZSxcbiAgICBhc3NldD86IEFzc2V0LFxuICAgIHJlc291cmNlPzogUmVzb3VyY2UsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5jaG9yIHtcbiAgICB1PzogbnVtYmVyLFxuICAgIHY/OiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb2x5Z29uT3B0aW9ucyB7XG4gICAgcG9pbnRzOiBMYXRMbmdbXSxcbiAgICBob2xlcz86IExhdExuZ1tdW107XG4gICAgY2xpY2thYmxlPzogYm9vbGVhbixcbiAgICBnZW9kZXNpYz86IGJvb2xlYW4sXG4gICAgZmlsbENvbG9yPzogQ29sb3IsXG4gICAgc3Ryb2tlQ29sb3I/OiBDb2xvcixcbiAgICBzdHJva2VKb2ludFR5cGU/OiBKb2ludFR5cGUsXG4gICAgc3Ryb2tlUGF0dGVybj86IFBhdHRlcm5JdGVtW10sXG4gICAgc3Ryb2tlV2lkdGg/OiBudW1iZXIsXG4gICAgdmlzaWJsZT86IHRydWUsXG4gICAgekluZGV4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvbHlsaW5lT3B0aW9ucyB7XG4gICAgcG9pbnRzOiBMYXRMbmdbXSxcbiAgICBjbGlja2FibGU/OiBib29sZWFuLFxuICAgIGNvbG9yPzogQ29sb3IsXG4gICAgc3RhcnRDYXA/OiBDYXAsXG4gICAgcGF0dGVybj86IFBhdHRlcm5JdGVtW10sXG4gICAgZW5kQ2FwPzogQ2FwLFxuICAgIGdlb2Rlc2ljPzogYm9vbGVhbixcbiAgICBqb2ludFR5cGU/OiBKb2ludFR5cGUsXG4gICAgdmlzaWJsZT86IGJvb2xlYW4sXG4gICAgd2lkdGg/OiBudW1iZXIsXG4gICAgekluZGV4PzogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JvdW5kT3ZlcmxheU9wdGlvbnMge1xuICAgIHdpZHRoPzogbnVtYmVyLFxuICAgIGhlaWdodD86IG51bWJlcixcbiAgICBhbmNob3I/OiBBbmNob3IsXG4gICAgYmVhcmluZz86IG51bWJlcixcbiAgICBjbGlja2FibGU/OiBib29sZWFuLFxuICAgIGltYWdlPzogQml0bWFwRGVzY3JpcHRvcixcbiAgICB2aXNpYmxlPzogYm9vbGVhbixcbiAgICB0cmFuc3BhcmVuY3k/OiBudW1iZXIsXG4gICAgekluZGV4PzogbnVtYmVyLFxuICAgIHBvc2l0aW9uOiBQb3NpdGlvbixcbiAgICBib3VuZHM/OiBMYXRMbmdCb3VuZHNcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb3NpdGlvbiB7XG4gICAgbGF0TG5nOiBMYXRMbmcsXG4gICAgd2lkdGg6IG51bWJlcixcbiAgICBoZWlnaHQ/OiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVUkxUaWxlIHtcbiAgICBVUkw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaWxlIHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgem9vbTogbnVtYmVyO1xuICAgIHBhdGg6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXBldGl0aXZlVGlsZSB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICB6b29tOiBudW1iZXJbXTtcbiAgICBwYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGlsZVByb3ZpZGVyIHtcbiAgICB0eXBlOiBUaWxlVHlwZSxcbiAgICBkYXRhOiBUaWxlW10gfCBVUkxUaWxlIHwgUmVwZXRpdGl2ZVRpbGVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaWxlT3ZlcmxheU9wdGlvbnMge1xuICAgIHRpbGVQcm92aWRlcjogVGlsZVByb3ZpZGVyLFxuICAgIGZhZGVJbj86IGJvb2xlYW4sXG4gICAgdHJhbnNwYXJlbmN5PzogbnVtYmVyLFxuICAgIHZpc2libGU/OiBib29sZWFuLFxuICAgIHpJbmRleD86IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFuaW1hdGlvbiB7XG4gICAgZHVyYXRpb24/OiBudW1iZXIsXG4gICAgcmVwZWF0Q291bnQ/OiBudW1iZXIsXG4gICAgcmVwZWF0TW9kZT86IG51bWJlcixcbiAgICBpbnRlcnBvbGF0b3I/OiBJbnRlcnBvbGF0b3IsXG4gICAgYW5pbWF0aW9uU3RhcnQ/OiAoKSA9PiB2b2lkLFxuICAgIGFuaW1hdGlvbkVuZD86ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3RhdGVBbmltYXRpb24gZXh0ZW5kcyBBbmltYXRpb24ge1xuICAgIGZyb21EZWdyZWU6IG51bWJlcjtcbiAgICB0b0RlZ3JlZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjYWxlQW5pbWF0aW9uIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgICBmcm9tWDogbnVtYmVyO1xuICAgIHRvWDogbnVtYmVyO1xuICAgIGZyb21ZOiBudW1iZXI7XG4gICAgdG9ZOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNsYXRlQW5pbWF0aW9uIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgICB0YXJnZXQ6IExhdExuZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbHBoYUFuaW1hdGlvbiBleHRlbmRzIEFuaW1hdGlvbiB7XG4gICAgZnJvbUFscGhhOiBudW1iZXI7XG4gICAgdG9BbHBoYTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbmNlbGFibGVDYWxsYmFjayB7XG4gICAgb25GaW5pc2g6ICgpID0+IHZvaWQsXG4gICAgb25DYW5jZWw6ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbmZvV2luZG93QWRhcHRlciB7XG4gICAgZmlsZTogc3RyaW5nLFxuICAgIHdpZHRoOiBudW1iZXIsXG4gICAgaGVpZ2h0OiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvblNvdXJjZSB7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wdXRlRGlzdGFuY2VSZXN1bHQge1xuICAgIHJlc3VsdDogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xuICAgIHg6IG51bWJlcixcbiAgICB5OiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTbmFwc2hvdFJlc3VsdCB7XG4gICAgZGF0YTogc3RyaW5nLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZpc2libGVSZWdpb24ge1xuICAgIGZhckxlZnQ6IExhdExuZyxcbiAgICBmYXJSaWdodDogTGF0TG5nLFxuICAgIGxhdExuZ0JvdW5kczogTGF0TG5nQm91bmRzLFxuICAgIG5lYXJMZWZ0OiBMYXRMbmcsXG4gICAgbmVhclJpZ2h0OiBMYXRMbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcnBvbGF0b3Ige1xuICAgIHR5cGU6IEludGVycG9sYXRvclR5cGUsXG4gICAgYXJncz86IGFueVxufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1FTlVNUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IGVudW0gVGlsZVR5cGUge1xuICAgIFVSTF9USUxFLFxuICAgIFJFUEVUSVRJVkVfVElMRSxcbiAgICBMT0NBTF9USUxFXG59XG5cbmV4cG9ydCBlbnVtIENvbG9yIHtcbiAgICBSRUQgPSAtNjU1MzYsXG4gICAgREFSS19HUkFZID0gLTEyMzAzMjkyLFxuICAgIEdSQVkgPSAtNzgyOTM2OCxcbiAgICBXSElURSA9IC0xLFxuICAgIEJMVUUgPSAtMTY3NzY5NjEsXG4gICAgQkxBQ0sgPSAtMTY3NzcyMTYsXG4gICAgTElURV9HUkFZID0gLTMzNTU0NDQsXG4gICAgTUFHRU5UQSA9IC02NTI4MSxcbiAgICBZRUxMT1cgPSAtMjU2LFxuICAgIENZQU4gPSAtMTY3MTE2ODEsXG4gICAgR1JFRU4gPSAtMTY3MTE5MzYsXG4gICAgVFJBTlNQQVJFTlQgPSAwXG59XG5cbmV4cG9ydCBlbnVtIEpvaW50VHlwZSB7XG4gICAgUk9VTkQgPSAyLFxuICAgIEJFVkVMID0gMSxcbiAgICBERUZBVUxUID0gMFxufVxuXG5leHBvcnQgZW51bSBNYXBFdmVudCB7XG4gICAgT05fSU5ET09SX0JVSUxESU5HU19GT0NVU0VEID0gJ29uSW5kb29yQnVpbGRpbmdzRm9jdXNlZCcsXG4gICAgT05fSU5ET09SX0xFVkVMX0FDVElWQVRFRCA9ICdvbkluZG9vckxldmVsQWN0aXZhdGVkJyxcbiAgICBPTl9NQVBfTE9BREVEID0gJ29uTWFwTG9hZGVkJyxcbiAgICBPTl9DQU1FUkFfSURMRSA9ICdvbkNhbWVyYUlkbGUnLFxuICAgIE9OX0NBTUVSQV9NT1ZFX0NBTkNFTEVEID0gJ29uQ2FtZXJhTW92ZUNhbmNlbGVkJyxcbiAgICBPTl9DQU1FUkFfTU9WRSA9ICdvbkNhbWVyYU1vdmUnLFxuICAgIE9OX0NBTUVSQV9NT1ZFX1NUQVJURUQgPSAnb25DYW1lcmFNb3ZlU3RhcnRlZCcsXG4gICAgT05fQ0lSQ0xFX0NMSUNLID0gJ29uQ2lyY2xlQ2xpY2snLFxuICAgIE9OX0dST1VORF9PVkVSTEFZX0NMSUNLID0gJ29uR3JvdW5kT3ZlcmxheUNsaWNrJyxcbiAgICBPTl9JTkZPX1dJTkRPV19DTElDSyA9ICdvbkluZm9XaW5kb3dDbGljaycsXG4gICAgT05fSU5GT19XSU5ET1dfQ0xPU0UgPSAnb25JbmZvV2luZG93Q2xvc2UnLFxuICAgIE9OX0lORk9fV0lORE9XX0xPTkdfQ0xJQ0sgPSAnb25JbmZvV2luZG93TG9uZ0NsaWNrJyxcbiAgICBPTl9NQVBfQ0xJQ0sgPSAnb25NYXBDbGljaycsXG4gICAgT05fTUFQX0xPTkdfQ0xJQ0sgPSAnb25NYXBMb25nQ2xpY2snLFxuICAgIE9OX01BUktFUl9DTElDSyA9ICdvbk1hcmtlckNsaWNrJyxcbiAgICBPTl9NQVJLRVJfRFJBR19TVEFSVCA9ICdvbk1hcmtlckRyYWdTdGFydCcsXG4gICAgT05fTUFSS0VSX0RSQUcgPSAnb25NYXJrZXJEcmFnJyxcbiAgICBPTl9NQVJLRVJfRFJBR19FTkQgPSAnb25NYXJrZXJEcmFnRW5kJyxcbiAgICBPTl9NWV9MT0NBVElPTl9CVVRUT05fQ0xJQ0sgPSAnb25NeUxvY2F0aW9uQnV0dG9uQ2xpY2snLFxuICAgIE9OX01ZX0xPQ0FUSU9OX0NMSUNLID0gJ29uTXlMb2NhdGlvbkNsaWNrJyxcbiAgICBPTl9QT0lfQ0xJQ0sgPSAnb25Qb2lDbGljaycsXG4gICAgT05fUE9MWUdPTl9DTElDSyA9ICdvblBvbHlnb25DbGljaycsXG4gICAgT05fUE9MWUxJTkVfQ0xJQ0sgPSAnb25Qb2x5bGluZUNsaWNrJyxcbiAgICBPTl9DQU5DRUxBQkxFX0NBTExCQUNLX0ZJTklTSCA9ICdvbkNhbmNlbGFibGVDYWxsYmFja0ZpbmlzaCcsXG4gICAgT05fQ0FOQ0VMQUJMRV9DQUxMQkFDS19DQU5DRUwgPSAnb25DYW5jZWxhYmxlQ2FsbGJhY2tDYW5jZWwnLFxuICAgIE9OX1NOQVBTSE9UX1JFQURZX0NBTExCQUNLID0gJ29uU25hcHNob3RSZWFkeUNhbGxiYWNrJ1xufVxuXG5leHBvcnQgZW51bSBNYXBUeXBlIHtcbiAgICBNQVBfVFlQRV9OT05FID0gMCxcbiAgICBNQVBfVFlQRV9TQVRFTExJVEUgPSAyLFxuICAgIE1BUF9UWVBFX05PUk1BTCA9IDEsXG4gICAgTUFQX1RZUEVfSFlCUklEID0gNCxcbiAgICBNQVBfVFlQRV9URVJSQUlOID0gMyxcbn1cblxuZXhwb3J0IGVudW0gSHVlIHtcbiAgICBIVUVfR1JFRU4gPSAxMjAsXG4gICAgSFVFX0FaVVJFID0gMjEwLFxuICAgIEhVRV9ST1NFID0gMzMwLFxuICAgIEhVRV9DWUFOID0gMTgwLFxuICAgIEhVRV9PUkFOR0UgPSAzMCxcbiAgICBIVUVfTUFHRU5UQSA9IDMwMCxcbiAgICBIVUVfVklPTEVUID0gMjcwLFxuICAgIEhVRV9ZRUxMT1cgPSA2MCxcbiAgICBIVUVfQkxVRSA9IDI0MCxcbiAgICBIVUVfUkVEID0gMCxcblxufVxuXG5leHBvcnQgZW51bSBQYXR0ZXJuSXRlbVR5cGUge1xuICAgIFRZUEVfR0FQID0gMixcbiAgICBUWVBFX0RPVCA9IDEsXG4gICAgVFlQRV9EQVNIID0gMFxufVxuXG5leHBvcnQgZW51bSBDYW1lcmFNb3ZlU3RhcnRlZFJlYXNvbiB7XG4gICAgUkVBU09OX0FQSV9BTklNQVRJT04gPSAyLFxuICAgIFJFQVNPTl9ERVZFTE9QRVJfQU5JTUFUSU9OID0gMyxcbiAgICBSRUFTT05fR0VTVFVSRSA9IDFcbn1cblxuZXhwb3J0IGVudW0gSW50ZXJwb2xhdG9yVHlwZSB7XG4gICAgTElORUFSLFxuICAgIEFDQ0VMRVJBVEVfREVDRUxFUkFURSxcbiAgICBBQ0NFTEVSQVRFLFxuICAgIEFOVElDSVBBVEUsXG4gICAgQU5USUNJUEFURV9PVkVSU0hPT1QsXG4gICAgQk9VTkNFLFxuICAgIENZQ0xFLFxuICAgIERFQ0VMRVJBVEUsXG4gICAgT1ZFUlNIT09ULFxuICAgIFBBVEhcbn1cbiJdfQ==