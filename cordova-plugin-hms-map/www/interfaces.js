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
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TileType = exports.CameraMoveStartedReason = exports.PatternItemType = exports.Hue = exports.MapType = exports.ErrorCodes = exports.InterpolatorType = exports.MapEvent = exports.JointType = exports.Color = exports.AnimationSet = void 0;
class AnimationSet {
    constructor() {
        this.animations = new Map();
    }
    addRotateAnimation(animation) {
        this.animations.set("Rotate", animation);
    }
    addScaleAnimation(animation) {
        this.animations.set("Scale", animation);
    }
    addTranslateAnimation(animation) {
        this.animations.set("Translate", animation);
    }
    addAlphaAnimation(animation) {
        this.animations.set("Alpha", animation);
    }
}
exports.AnimationSet = AnimationSet;
/*-------------------------------------------------------------ENUMS----------------------------------------------------------*/
var Color;
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
})(Color = exports.Color || (exports.Color = {}));
var JointType;
(function (JointType) {
    JointType[JointType["ROUND"] = 2] = "ROUND";
    JointType[JointType["BEVEL"] = 1] = "BEVEL";
    JointType[JointType["DEFAULT"] = 0] = "DEFAULT";
})(JointType = exports.JointType || (exports.JointType = {}));
var MapEvent;
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
})(MapEvent = exports.MapEvent || (exports.MapEvent = {}));
var InterpolatorType;
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
})(InterpolatorType = exports.InterpolatorType || (exports.InterpolatorType = {}));
class ErrorCodes {
    static toString(error) {
        return `Error Code: ${error.code} - Message: ${error.message}`;
    }
}
exports.ErrorCodes = ErrorCodes;
ErrorCodes.NO_DOM_ELEMENT_FOUND = {
    code: 5000,
    message: "No DOM element found with given divId."
};
ErrorCodes.POINTS_PROPERTY_MUST_DEFINED = {
    code: 5100,
    message: "Points property must be defined."
};
ErrorCodes.CENTER_PROPERTY_MUST_DEFINED = {
    code: 5101,
    message: "Center property must be defined."
};
ErrorCodes.POSITION_PROPERTY_MUST_DEFINED = {
    code: 5102,
    message: "Position property must be defined."
};
ErrorCodes.NO_COMPONENT_EXISTS_GIVEN_ID = {
    code: 5102,
    message: "No component is found with given id"
};
var MapType;
(function (MapType) {
    MapType[MapType["MAP_TYPE_NONE"] = 0] = "MAP_TYPE_NONE";
    MapType[MapType["MAP_TYPE_SATELLITE"] = 2] = "MAP_TYPE_SATELLITE";
    MapType[MapType["MAP_TYPE_NORMAL"] = 1] = "MAP_TYPE_NORMAL";
    MapType[MapType["MAP_TYPE_HYBRID"] = 4] = "MAP_TYPE_HYBRID";
    MapType[MapType["MAP_TYPE_TERRAIN"] = 3] = "MAP_TYPE_TERRAIN";
})(MapType = exports.MapType || (exports.MapType = {}));
var Hue;
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
})(Hue = exports.Hue || (exports.Hue = {}));
var PatternItemType;
(function (PatternItemType) {
    PatternItemType[PatternItemType["TYPE_GAP"] = 2] = "TYPE_GAP";
    PatternItemType[PatternItemType["TYPE_DOT"] = 1] = "TYPE_DOT";
    PatternItemType[PatternItemType["TYPE_DASH"] = 0] = "TYPE_DASH";
})(PatternItemType = exports.PatternItemType || (exports.PatternItemType = {}));
var CameraMoveStartedReason;
(function (CameraMoveStartedReason) {
    CameraMoveStartedReason[CameraMoveStartedReason["REASON_API_ANIMATION"] = 2] = "REASON_API_ANIMATION";
    CameraMoveStartedReason[CameraMoveStartedReason["REASON_DEVELOPER_ANIMATION"] = 3] = "REASON_DEVELOPER_ANIMATION";
    CameraMoveStartedReason[CameraMoveStartedReason["REASON_GESTURE"] = 1] = "REASON_GESTURE";
})(CameraMoveStartedReason = exports.CameraMoveStartedReason || (exports.CameraMoveStartedReason = {}));
var TileType;
(function (TileType) {
    TileType[TileType["URL_TILE"] = 0] = "URL_TILE";
    TileType[TileType["REPETITIVE_TILE"] = 1] = "REPETITIVE_TILE";
    TileType[TileType["LOCAL_TILE"] = 2] = "LOCAL_TILE";
})(TileType = exports.TileType || (exports.TileType = {}));
//# sourceMappingURL=interfaces.js.map