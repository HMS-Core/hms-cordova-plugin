"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARCoordinateSystemType = exports.PlaneType = exports.SemanticPlaneLabel = exports.ARHandType = exports.TrackingState = void 0;
var TrackingState;
(function (TrackingState) {
    TrackingState[TrackingState["UNKNOWN_STATE"] = -1] = "UNKNOWN_STATE";
    TrackingState[TrackingState["TRACKING"] = 0] = "TRACKING";
    TrackingState[TrackingState["PAUSED"] = 1] = "PAUSED";
    TrackingState[TrackingState["STOPPED"] = 2] = "STOPPED";
})(TrackingState = exports.TrackingState || (exports.TrackingState = {}));
var ARHandType;
(function (ARHandType) {
    ARHandType[ARHandType["AR_HAND_UNKNOWN"] = -1] = "AR_HAND_UNKNOWN";
    ARHandType[ARHandType["AR_HAND_RIGHT"] = 0] = "AR_HAND_RIGHT";
    ARHandType[ARHandType["AR_HAND_LEFT"] = 1] = "AR_HAND_LEFT";
})(ARHandType = exports.ARHandType || (exports.ARHandType = {}));
var SemanticPlaneLabel;
(function (SemanticPlaneLabel) {
    SemanticPlaneLabel[SemanticPlaneLabel["PLANE_OTHER"] = 0] = "PLANE_OTHER";
    SemanticPlaneLabel[SemanticPlaneLabel["PLANE_WALL"] = 1] = "PLANE_WALL";
    SemanticPlaneLabel[SemanticPlaneLabel["PLANE_FLOOR"] = 2] = "PLANE_FLOOR";
    SemanticPlaneLabel[SemanticPlaneLabel["PLANE_SEAT"] = 3] = "PLANE_SEAT";
    SemanticPlaneLabel[SemanticPlaneLabel["PLANE_TABLE"] = 4] = "PLANE_TABLE";
    SemanticPlaneLabel[SemanticPlaneLabel["PLANE_CEILING"] = 5] = "PLANE_CEILING";
})(SemanticPlaneLabel = exports.SemanticPlaneLabel || (exports.SemanticPlaneLabel = {}));
var PlaneType;
(function (PlaneType) {
    PlaneType[PlaneType["HORIZONTAL_UPWARD_FACING"] = 0] = "HORIZONTAL_UPWARD_FACING";
    PlaneType[PlaneType["HORIZONTAL_DOWNWARD_FACING"] = 1] = "HORIZONTAL_DOWNWARD_FACING";
    PlaneType[PlaneType["VERTICAL_FACING"] = 2] = "VERTICAL_FACING";
    PlaneType[PlaneType["UNKNOWN_FACING"] = 3] = "UNKNOWN_FACING";
})(PlaneType = exports.PlaneType || (exports.PlaneType = {}));
var ARCoordinateSystemType;
(function (ARCoordinateSystemType) {
    ARCoordinateSystemType[ARCoordinateSystemType["COORDINATE_SYSTEM_TYPE_UNKNOWN"] = -1] = "COORDINATE_SYSTEM_TYPE_UNKNOWN";
    ARCoordinateSystemType[ARCoordinateSystemType["COORDINATE_SYSTEM_TYPE_3D_WORLD"] = 0] = "COORDINATE_SYSTEM_TYPE_3D_WORLD";
    ARCoordinateSystemType[ARCoordinateSystemType["COORDINATE_SYSTEM_TYPE_3D_SELF"] = 1] = "COORDINATE_SYSTEM_TYPE_3D_SELF";
    ARCoordinateSystemType[ARCoordinateSystemType["COORDINATE_SYSTEM_TYPE_2D_IMAGE"] = 2] = "COORDINATE_SYSTEM_TYPE_2D_IMAGE";
    ARCoordinateSystemType[ARCoordinateSystemType["COORDINATE_SYSTEM_TYPE_3D_CAMERA"] = 3] = "COORDINATE_SYSTEM_TYPE_3D_CAMERA";
})(ARCoordinateSystemType = exports.ARCoordinateSystemType || (exports.ARCoordinateSystemType = {}));
//# sourceMappingURL=interfaces.js.map