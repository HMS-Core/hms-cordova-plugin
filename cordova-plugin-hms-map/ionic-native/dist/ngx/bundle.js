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

var HMSMap = /** @class */ (function (_super) {
    tslib.__extends(HMSMap, _super);
    function HMSMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSMap.prototype.getMap = function (divId, huaweiMapOptions, bounds) { return core.cordova(this, "getMap", { "otherPromise": true }, arguments); };
    HMSMap.prototype.showMap = function (divId) { return core.cordova(this, "showMap", { "otherPromise": true }, arguments); };
    HMSMap.prototype.hasPermission = function () { return core.cordova(this, "hasPermission", { "otherPromise": true }, arguments); };
    HMSMap.prototype.convertCoordinate = function (LatLngObj) { return core.cordova(this, "convertCoordinate", { "otherPromise": true }, arguments); };
    HMSMap.prototype.convertCoordinates = function (LatLngListObj) { return core.cordova(this, "convertCoordinates", { "otherPromise": true }, arguments); };
    HMSMap.prototype.requestPermission = function () { return core.cordova(this, "requestPermission", { "otherPromise": true }, arguments); };
    HMSMap.prototype.computeDistanceBetween = function (from, to) { return core.cordova(this, "computeDistanceBetween", { "otherPromise": true }, arguments); };
    HMSMap.prototype.setApiKey = function (apiKey) { return core.cordova(this, "setApiKey", { "otherPromise": true }, arguments); };
    HMSMap.prototype.disableLogger = function () { return core.cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSMap.prototype.enableLogger = function () { return core.cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HMSMap.prototype.initialize = function (routePolicy) { return core.cordova(this, "initialize", { "otherPromise": true }, arguments); };
    HMSMap.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSMap, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HMSMap.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSMap });
    HMSMap.pluginName = "HMSMap";
    HMSMap.plugin = "cordova-plugin-hms-map";
    HMSMap.pluginRef = "HMSMap";
    HMSMap.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSMap.platforms = ["Android"];
    HMSMap = tslib.__decorate([], HMSMap);
    return HMSMap;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSMap, decorators: [{
            type: i0.Injectable
        }], propDecorators: { getMap: [], showMap: [], hasPermission: [], convertCoordinate: [], convertCoordinates: [], requestPermission: [], computeDistanceBetween: [], setApiKey: [], disableLogger: [], enableLogger: [], initialize: [] } });
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
    CameraUpdateFactory = tslib.__decorate([
        tslib.__metadata("design:paramtypes", [])
    ], CameraUpdateFactory);
    return CameraUpdateFactory;
}());
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
var ButtCap = /** @class */ (function (_super) {
    tslib.__extends(ButtCap, _super);
    function ButtCap() {
        var _this = _super.call(this) || this;
        _this.type = 0;
        return _this;
    }
    return ButtCap;
}(Cap));
var RoundCap = /** @class */ (function (_super) {
    tslib.__extends(RoundCap, _super);
    function RoundCap() {
        var _this = _super.call(this) || this;
        _this.type = 2;
        return _this;
    }
    return RoundCap;
}(Cap));
var SquareCap = /** @class */ (function (_super) {
    tslib.__extends(SquareCap, _super);
    function SquareCap() {
        var _this = _super.call(this) || this;
        _this.type = 1;
        return _this;
    }
    return SquareCap;
}(Cap));
var CustomCap = /** @class */ (function (_super) {
    tslib.__extends(CustomCap, _super);
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
exports.RadiusUnit = void 0;
(function (RadiusUnit) {
    RadiusUnit["PIXEL"] = "pixel";
    RadiusUnit["METER"] = "meter";
})(exports.RadiusUnit || (exports.RadiusUnit = {}));
/*-------------------------------------------------------------ENUMS----------------------------------------------------------*/
exports.TileType = void 0;
(function (TileType) {
    TileType[TileType["URL_TILE"] = 0] = "URL_TILE";
    TileType[TileType["REPETITIVE_TILE"] = 1] = "REPETITIVE_TILE";
    TileType[TileType["LOCAL_TILE"] = 2] = "LOCAL_TILE";
})(exports.TileType || (exports.TileType = {}));
exports.Color = void 0;
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
})(exports.Color || (exports.Color = {}));
exports.JointType = void 0;
(function (JointType) {
    JointType[JointType["ROUND"] = 2] = "ROUND";
    JointType[JointType["BEVEL"] = 1] = "BEVEL";
    JointType[JointType["DEFAULT"] = 0] = "DEFAULT";
})(exports.JointType || (exports.JointType = {}));
exports.MapEvent = void 0;
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
})(exports.MapEvent || (exports.MapEvent = {}));
exports.MapType = void 0;
(function (MapType) {
    MapType[MapType["MAP_TYPE_NONE"] = 0] = "MAP_TYPE_NONE";
    MapType[MapType["MAP_TYPE_SATELLITE"] = 2] = "MAP_TYPE_SATELLITE";
    MapType[MapType["MAP_TYPE_NORMAL"] = 1] = "MAP_TYPE_NORMAL";
    MapType[MapType["MAP_TYPE_HYBRID"] = 4] = "MAP_TYPE_HYBRID";
    MapType[MapType["MAP_TYPE_TERRAIN"] = 3] = "MAP_TYPE_TERRAIN";
})(exports.MapType || (exports.MapType = {}));
exports.Hue = void 0;
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
})(exports.Hue || (exports.Hue = {}));
exports.PatternItemType = void 0;
(function (PatternItemType) {
    PatternItemType[PatternItemType["TYPE_GAP"] = 2] = "TYPE_GAP";
    PatternItemType[PatternItemType["TYPE_DOT"] = 1] = "TYPE_DOT";
    PatternItemType[PatternItemType["TYPE_DASH"] = 0] = "TYPE_DASH";
})(exports.PatternItemType || (exports.PatternItemType = {}));
exports.CameraMoveStartedReason = void 0;
(function (CameraMoveStartedReason) {
    CameraMoveStartedReason[CameraMoveStartedReason["REASON_API_ANIMATION"] = 2] = "REASON_API_ANIMATION";
    CameraMoveStartedReason[CameraMoveStartedReason["REASON_DEVELOPER_ANIMATION"] = 3] = "REASON_DEVELOPER_ANIMATION";
    CameraMoveStartedReason[CameraMoveStartedReason["REASON_GESTURE"] = 1] = "REASON_GESTURE";
})(exports.CameraMoveStartedReason || (exports.CameraMoveStartedReason = {}));
exports.InterpolatorType = void 0;
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
})(exports.InterpolatorType || (exports.InterpolatorType = {}));
exports.AnimationConstant = void 0;
(function (AnimationConstant) {
    AnimationConstant[AnimationConstant["FILL_MODE_FORWARDS"] = 0] = "FILL_MODE_FORWARDS";
    AnimationConstant[AnimationConstant["FILL_MODE_BACKWARDS"] = 1] = "FILL_MODE_BACKWARDS";
    AnimationConstant[AnimationConstant["INFINITE"] = -1] = "INFINITE";
    AnimationConstant[AnimationConstant["RESTART"] = 1] = "RESTART";
    AnimationConstant[AnimationConstant["REVERSE"] = 2] = "REVERSE";
})(exports.AnimationConstant || (exports.AnimationConstant = {}));
exports.Gravity = void 0;
(function (Gravity) {
    Gravity[Gravity["TOP"] = 48] = "TOP";
    Gravity[Gravity["BOTTOM"] = 80] = "BOTTOM";
    Gravity[Gravity["START"] = 8388611] = "START";
    Gravity[Gravity["END"] = 8388613] = "END";
})(exports.Gravity || (exports.Gravity = {}));

exports.AnimationSet = AnimationSet;
exports.ButtCap = ButtCap;
exports.CameraUpdateFactory = CameraUpdateFactory;
exports.Cap = Cap;
exports.CustomCap = CustomCap;
exports.HMSMap = HMSMap;
exports.MapStyleOptions = MapStyleOptions;
exports.RoundCap = RoundCap;
exports.SquareCap = SquareCap;
