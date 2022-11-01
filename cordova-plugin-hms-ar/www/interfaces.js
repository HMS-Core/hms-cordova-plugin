"use strict";
/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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
exports.PlaneFindingMode = exports.TargetShapeType = exports.TargetLabel = exports.UpdateMode = exports.FocusMode = exports.PowerMode = exports.SemanticMode = exports.CameraLensFacing = exports.LightMode = exports.FaceHealthCheckState = exports.ARCoordinateSystemType = exports.PlaneType = exports.SemanticPlaneLabel = exports.ARHandType = exports.TrackingState = exports.Events = exports.HealthParameter = void 0;
var HealthParameter;
(function (HealthParameter) {
    HealthParameter[HealthParameter["UNKNOWN_TYPE"] = -1] = "UNKNOWN_TYPE";
    HealthParameter[HealthParameter["PARAMETER_INVALID"] = 0] = "PARAMETER_INVALID";
    HealthParameter[HealthParameter["PARAMETER_HEART_RATE"] = 1] = "PARAMETER_HEART_RATE";
    HealthParameter[HealthParameter["PARAMETER_HEART_RATE_SNR"] = 2] = "PARAMETER_HEART_RATE_SNR";
    HealthParameter[HealthParameter["PARAMETER_HEART_RATE_CONFIDENCE"] = 3] = "PARAMETER_HEART_RATE_CONFIDENCE";
    HealthParameter[HealthParameter["PARAMETER_BREATH_RATE"] = 4] = "PARAMETER_BREATH_RATE";
    HealthParameter[HealthParameter["PARAMETER_BREATH_RATE_SNR"] = 5] = "PARAMETER_BREATH_RATE_SNR";
    HealthParameter[HealthParameter["PARAMETER_BREATH_RATE_CONFIDENCE"] = 6] = "PARAMETER_BREATH_RATE_CONFIDENCE";
    HealthParameter[HealthParameter["PARAMETER_FACE_AGE"] = 7] = "PARAMETER_FACE_AGE";
    HealthParameter[HealthParameter["PARAMETER_GENDER_MALE_WEIGHT"] = 8] = "PARAMETER_GENDER_MALE_WEIGHT";
    HealthParameter[HealthParameter["PARAMETER_GENDER_FEMALE_WEIGHT"] = 9] = "PARAMETER_GENDER_FEMALE_WEIGHT";
    HealthParameter[HealthParameter["PARAMETER_HEART_WAVE"] = 15] = "PARAMETER_HEART_WAVE";
})(HealthParameter = exports.HealthParameter || (exports.HealthParameter = {}));
var Events;
(function (Events) {
    Events["ON_DRAW_FRAME"] = "onDrawFrame";
    Events["HANDLE_CAMERA_CONFIG_DATA"] = "handleCameraConfigData";
    Events["HANDLE_CAMERA_INTRINSICS_DATA"] = "handleCameraIntrinsicsData";
    Events["HANDLE_EVENT"] = "handleEvent";
    Events["HANDLE_RESULT"] = "handleResult";
    Events["HANDLE_PROCESS_PROGRESS_EVENT"] = "handleProcessProgressEvent";
    Events["HANDLE_MESSAGE_DATA"] = "handleMessageData";
})(Events = exports.Events || (exports.Events = {}));
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
    SemanticPlaneLabel[SemanticPlaneLabel["PLANE_DOOR"] = 6] = "PLANE_DOOR";
    SemanticPlaneLabel[SemanticPlaneLabel["PLANE_WINDOW"] = 7] = "PLANE_WINDOW";
    SemanticPlaneLabel[SemanticPlaneLabel["PLANE_BED"] = 8] = "PLANE_BED";
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
var FaceHealthCheckState;
(function (FaceHealthCheckState) {
    FaceHealthCheckState[FaceHealthCheckState["DETECT_FAILED"] = -1] = "DETECT_FAILED";
    FaceHealthCheckState[FaceHealthCheckState["DETECT_SUCCESS"] = 0] = "DETECT_SUCCESS";
    FaceHealthCheckState[FaceHealthCheckState["NO_AVAILABLE_HEALTH_DATA"] = 1] = "NO_AVAILABLE_HEALTH_DATA";
    FaceHealthCheckState[FaceHealthCheckState["FACE_WITH_EXPRESSION"] = 10] = "FACE_WITH_EXPRESSION";
    FaceHealthCheckState[FaceHealthCheckState["IMAGE_SIZE_WRONG"] = 20] = "IMAGE_SIZE_WRONG";
    FaceHealthCheckState[FaceHealthCheckState["FACE_NOT_IN_ELLIPSE"] = 21] = "FACE_NOT_IN_ELLIPSE";
    FaceHealthCheckState[FaceHealthCheckState["FACE_MOTION_TOO_MUCH"] = 22] = "FACE_MOTION_TOO_MUCH";
    FaceHealthCheckState[FaceHealthCheckState["EFFECTIVE_PIXEEL_TOO_LOW"] = 23] = "EFFECTIVE_PIXEEL_TOO_LOW";
    FaceHealthCheckState[FaceHealthCheckState["LIGHT_TOO_DARK"] = 24] = "LIGHT_TOO_DARK";
    FaceHealthCheckState[FaceHealthCheckState["LIGHT_NOT_UNIFORM"] = 25] = "LIGHT_NOT_UNIFORM";
    FaceHealthCheckState[FaceHealthCheckState["POSE_TOO_LARGE"] = 26] = "POSE_TOO_LARGE";
    FaceHealthCheckState[FaceHealthCheckState["SIGNAL_CAPTURE_FAILED"] = 27] = "SIGNAL_CAPTURE_FAILED";
    FaceHealthCheckState[FaceHealthCheckState["SIGNAL_NAN"] = 28] = "SIGNAL_NAN";
    FaceHealthCheckState[FaceHealthCheckState["FINGER_OUTSIDE_CAMERA"] = 29] = "FINGER_OUTSIDE_CAMERA";
})(FaceHealthCheckState = exports.FaceHealthCheckState || (exports.FaceHealthCheckState = {}));
var LightMode;
(function (LightMode) {
    LightMode[LightMode["NONE"] = 0] = "NONE";
    LightMode[LightMode["AMBIENT_INTENSITY"] = 1] = "AMBIENT_INTENSITY";
    LightMode[LightMode["ENVIRONMENT_LIGHTING"] = 2] = "ENVIRONMENT_LIGHTING";
    LightMode[LightMode["ENVIRONMENT_TEXTURE"] = 4] = "ENVIRONMENT_TEXTURE";
    LightMode[LightMode["ALL"] = 65535] = "ALL";
})(LightMode = exports.LightMode || (exports.LightMode = {}));
var CameraLensFacing;
(function (CameraLensFacing) {
    CameraLensFacing[CameraLensFacing["REAR"] = 1] = "REAR";
    CameraLensFacing[CameraLensFacing["FRONT"] = 2] = "FRONT";
})(CameraLensFacing = exports.CameraLensFacing || (exports.CameraLensFacing = {}));
var SemanticMode;
(function (SemanticMode) {
    SemanticMode[SemanticMode["NONE"] = 0] = "NONE";
    SemanticMode[SemanticMode["PLANE"] = 1] = "PLANE";
    SemanticMode[SemanticMode["TARGET"] = 2] = "TARGET";
    SemanticMode[SemanticMode["ALL"] = 3] = "ALL";
})(SemanticMode = exports.SemanticMode || (exports.SemanticMode = {}));
var PowerMode;
(function (PowerMode) {
    PowerMode[PowerMode["NORMAL"] = 1] = "NORMAL";
    PowerMode[PowerMode["POWER_SAVING"] = 2] = "POWER_SAVING";
    PowerMode[PowerMode["ULTRA_POWER_SAVING"] = 3] = "ULTRA_POWER_SAVING";
    PowerMode[PowerMode["PERFORMANCE_FIRST"] = 4] = "PERFORMANCE_FIRST";
})(PowerMode = exports.PowerMode || (exports.PowerMode = {}));
var FocusMode;
(function (FocusMode) {
    FocusMode[FocusMode["FIXED_FOCUS"] = 1] = "FIXED_FOCUS";
    FocusMode[FocusMode["AUTO_FOCUS"] = 2] = "AUTO_FOCUS";
})(FocusMode = exports.FocusMode || (exports.FocusMode = {}));
var UpdateMode;
(function (UpdateMode) {
    UpdateMode[UpdateMode["BLOCKING"] = 1] = "BLOCKING";
    UpdateMode[UpdateMode["LATEST_CAMERA_IMAGE"] = 2] = "LATEST_CAMERA_IMAGE";
})(UpdateMode = exports.UpdateMode || (exports.UpdateMode = {}));
var TargetLabel;
(function (TargetLabel) {
    TargetLabel[TargetLabel["TARGET_INVALID"] = -1] = "TARGET_INVALID";
    TargetLabel[TargetLabel["TARGET_OTHER"] = 0] = "TARGET_OTHER";
    TargetLabel[TargetLabel["TARGET_SEAT"] = 1] = "TARGET_SEAT";
    TargetLabel[TargetLabel["TARGET_TABLE"] = 2] = "TARGET_TABLE";
})(TargetLabel = exports.TargetLabel || (exports.TargetLabel = {}));
var TargetShapeType;
(function (TargetShapeType) {
    TargetShapeType[TargetShapeType["TARGET_SHAPE_INVALID"] = -1] = "TARGET_SHAPE_INVALID";
    TargetShapeType[TargetShapeType["TARGET_SHAPE_OTHER"] = 0] = "TARGET_SHAPE_OTHER";
    TargetShapeType[TargetShapeType["TARGET_SHAPE_CUBE"] = 1] = "TARGET_SHAPE_CUBE";
    TargetShapeType[TargetShapeType["TARGET_SHAPE_CIRCLE"] = 2] = "TARGET_SHAPE_CIRCLE";
    TargetShapeType[TargetShapeType["TARGET_SHAPE_RECT"] = 3] = "TARGET_SHAPE_RECT";
})(TargetShapeType = exports.TargetShapeType || (exports.TargetShapeType = {}));
var PlaneFindingMode;
(function (PlaneFindingMode) {
    PlaneFindingMode[PlaneFindingMode["DISABLED"] = 0] = "DISABLED";
    PlaneFindingMode[PlaneFindingMode["HORIZONTAL_ONLY"] = 1] = "HORIZONTAL_ONLY";
    PlaneFindingMode[PlaneFindingMode["VERTICAL_ONLY"] = 2] = "VERTICAL_ONLY";
    PlaneFindingMode[PlaneFindingMode["ENABLE"] = 3] = "ENABLE";
})(PlaneFindingMode = exports.PlaneFindingMode || (exports.PlaneFindingMode = {}));
//# sourceMappingURL=interfaces.js.map