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

export interface ColorRGBA {
    red: number;
    green: number;
    blue: number;
    alpha: number;
}

export interface SceneBounds {
    marginTop?: number,
    marginBottom?: number
}

export interface ARSceneConfig {

}

export interface ARHandConfig extends ARSceneConfig {
    drawBox: boolean;
    boxColor: ColorRGBA;
    lineWidth: number;
    drawLine?: boolean;
    drawPoint?: boolean;
    lineWidthSkeleton?: number;
    pointSize?: number;
    lineColor?: ColorRGBA;
    pointColor?: ColorRGBA;
    cameraLensFacing?: CameraLensFacing;       
    lightMode?: LightMode;
    semantic?: Semantic;
    powerMode?: PowerMode;
    focusMode?: FocusMode;
    updateMode?: UpdateMode;
}

export interface ARWorldConfig extends ARSceneConfig {
    objPath: string;
    texturePath: string;
    labelDraw: boolean;
    imageOther: string;
    imageWall: string;
    imageFloor: string;
    imageSeat: string;
    imageTable: string;
    imageCeiling: string;
    imageDoor: string;
    imageWindow: string;
    imageBed: string;
    textOther: string;
    textWall: string;
    textFloor: string;
    textSeat: string;
    textTable: string;
    textCeiling: string;
    textDoor: string;
    textWindow: string;
    textBed: string;
    colorOther: ColorRGBA;
    colorWall: ColorRGBA;
    colorFloor: ColorRGBA;
    colorSeat: ColorRGBA;
    colorTable: ColorRGBA;
    colorCeiling: ColorRGBA;
    colorDoor: ColorRGBA;
    colorWindow: ColorRGBA;
    colorBed: ColorRGBA;
    maxMapSize: number;
    augmentedImages: AugmentedImage[];
    planeFindingMode: PlaneFindingMode;
    drawLine: boolean;
    drawPoint: boolean;
    lineWidth: number;
    pointSize: number;
    lineColor: ColorRGBA;
    pointColor: ColorRGBA;
    semantic: Semantic;
    lightMode: LightMode;
    focusMode: FocusMode;
    powerMode: PowerMode;
    updateMode: UpdateMode;

}

export interface ARFaceConfig extends ARSceneConfig {
    pointSize: number;
    depthColor: ColorRGBA;
    texturePath: string;
    drawFace: boolean;
    cameraLensFacing: CameraLensFacing;
    enableHealthDevice: boolean;
    multiFace: boolean;
    semantic: Semantic;
    lightMode: LightMode;
    focusMode: FocusMode;
    powerMode: PowerMode;
    updateMode: UpdateMode;
}

export interface ARBodyConfig extends ARSceneConfig {
    drawLine: boolean;
    drawPoint: boolean;
    lineWidth: number;
    pointSize: number;
    lineColor: ColorRGBA;
    pointColor: ColorRGBA;
    semantic: Semantic;
    lightMode: LightMode;
    focusMode: FocusMode;
    powerMode: PowerMode;
    updateMode: UpdateMode;
}

export interface ARAugmentedImageConfig extends ARSceneConfig {
    augmentedImages: AugmentedImage[];
    drawLine: boolean;
    drawPoint: boolean;
    lineWidth: number;
    pointSize: number;
    lineColor: ColorRGBA;
    pointColor: ColorRGBA;
    semantic: Semantic;
    lightMode: LightMode;
    focusMode: FocusMode;
    powerMode: PowerMode;
    updateMode: UpdateMode;
}

export interface ARWorldBodyConfig extends ARWorldConfig {
  
}

export interface ARSceneMeshConfig extends ARSceneConfig {
    objPath: string;
    texturePath: string;
    semantic: Semantic;
    lightMode: LightMode;
    focusMode: FocusMode;
    powerMode: PowerMode;
    updateMode: UpdateMode;
}

export interface ARCloud3DObjectConfig extends ARSceneConfig {
    fileName: string;
}

export interface Anchor {
    pose: ARPose;
    trackingState: TrackingState;
}

export interface ARFaceBlendShapes {
    blendShapeCount: number;
    blendShapeData: number[];
    blendShapeType: string[];
    blendShapeDataMap: any;
}

export interface ARPose {
    translation: number[];
    rotation: number[];
}

export interface ARHand {
    gestureType: number;
    handType: ARHandType;
    anchors: Anchor[];
    gestureHandBox: number[];
    gestureCenter: number[];
    handSkeletonArray: number[];
    handSkeletonConnection: number[];
    handSkeletonTypes: number[];
    gestureCoordinateSystem: ARCoordinateSystemType;
    skeletonCoordinateSystem: ARCoordinateSystemType;
    trackingState: TrackingState;
}

export interface ARPlane {
    centerPose: ARPose;
    extentX: number;
    extentZ: number;
    planePolygon: number[];
    label: SemanticPlaneLabel;
    type: PlaneType;
    trackingState: TrackingState;
    anchors: Anchor[];
}

export interface ARFace {
    anchors: Anchor[];
    faceBlendShapes: ARFaceBlendShapes;
    pose: ARPose[];
    trackingState: TrackingState;
    healthParameterCount: number,
    healthParameters: Map<HealthParameter, number>
}

export interface ARBody {
    bodyAction: number;
    anchors: Anchor[];
    bodySkeletonTypes: number[];
    skeletonPoint2D: number[];
    skeletonPoint3D: number[];
    skeletonConfidence: number[];
    bodySkeletonConnection: number[];
    skeletonPointIsExist2D: number[];
    skeletonPointIsExist3D: number[];
    coordinateSystemType: ARCoordinateSystemType;
    trackingState: TrackingState;
}

export interface ARAugmentedImage {
    anchors: Anchor[];
    centerPose: ARPose;
    extentX: number;
    extentZ: number;
    index: number;
    name: string;
    trackingState: TrackingState;
}

export interface ARSceneMesh {
    sceneDepth: ArrayBuffer;  
    sceneDepthHeight: number;
    sceneDepthWidth: number;
    triangleIndices: ArrayBuffer;
    vertexNormals: ArrayBuffer;
    vertices: ArrayBuffer;
}

export interface Semantic {
    mode?: SemanticMode;
    showSemanticModeSupportedInfo?: boolean;
}

export interface AugmentedImage {
    imgFileFromAsset: string;
    widthInMeters: number;
    imgName: string;
}

export interface ARTarget {
    anchors: Anchor[];
    axisAlignBoundingBox: number[];
    centerPose: ARPose;
    label: number;
    radius: number;
    shapeType: number;
    trackingState: TrackingState;
}

export enum HealthParameter {
    UNKNOWN_TYPE = -1,
    PARAMETER_INVALID = 0,
    PARAMETER_HEART_RATE = 1,
    PARAMETER_HEART_RATE_SNR = 2,
    PARAMETER_HEART_RATE_CONFIDENCE = 3,
    PARAMETER_BREATH_RATE = 4,
    PARAMETER_BREATH_RATE_SNR = 5,
    PARAMETER_BREATH_RATE_CONFIDENCE = 6,
    PARAMETER_FACE_AGE = 7,
    PARAMETER_GENDER_MALE_WEIGHT = 8,
    PARAMETER_GENDER_FEMALE_WEIGHT = 9,
    PARAMETER_HEART_WAVE = 15
}

export enum Events {
    ON_DRAW_FRAME = "onDrawFrame",
    HANDLE_CAMERA_CONFIG_DATA = "handleCameraConfigData",
    HANDLE_CAMERA_INTRINSICS_DATA = "handleCameraIntrinsicsData",
    HANDLE_EVENT = "handleEvent",
    HANDLE_RESULT ="handleResult",
    HANDLE_PROCESS_PROGRESS_EVENT = "handleProcessProgressEvent",
    HANDLE_MESSAGE_DATA = "handleMessageData"
}

export enum TrackingState {
    UNKNOWN_STATE = -1,
    TRACKING = 0,
    PAUSED = 1,
    STOPPED = 2
}

export enum ARHandType {
    AR_HAND_UNKNOWN = -1,
    AR_HAND_RIGHT = 0,
    AR_HAND_LEFT = 1
}

export enum SemanticPlaneLabel {
    PLANE_OTHER = 0,
    PLANE_WALL = 1,
    PLANE_FLOOR = 2,
    PLANE_SEAT = 3,
    PLANE_TABLE = 4,
    PLANE_CEILING = 5,
    PLANE_DOOR = 6,
    PLANE_WINDOW =7,
    PLANE_BED = 8
}

export enum PlaneType {
    HORIZONTAL_UPWARD_FACING = 0,
    HORIZONTAL_DOWNWARD_FACING = 1,
    VERTICAL_FACING = 2,
    UNKNOWN_FACING = 3
}

export enum ARCoordinateSystemType {
    COORDINATE_SYSTEM_TYPE_UNKNOWN = -1,
    COORDINATE_SYSTEM_TYPE_3D_WORLD = 0,
    COORDINATE_SYSTEM_TYPE_3D_SELF = 1,
    COORDINATE_SYSTEM_TYPE_2D_IMAGE = 2,
    COORDINATE_SYSTEM_TYPE_3D_CAMERA = 3
}

export enum FaceHealthCheckState {
    DETECT_FAILED = -1,
    DETECT_SUCCESS = 0,
    NO_AVAILABLE_HEALTH_DATA = 1,
    FACE_WITH_EXPRESSION = 10,
    IMAGE_SIZE_WRONG = 20,
    FACE_NOT_IN_ELLIPSE = 21,
    FACE_MOTION_TOO_MUCH = 22,
    EFFECTIVE_PIXEEL_TOO_LOW = 23,
    LIGHT_TOO_DARK = 24,
    LIGHT_NOT_UNIFORM = 25,
    POSE_TOO_LARGE = 26,
    SIGNAL_CAPTURE_FAILED = 27,
    SIGNAL_NAN = 28,
    FINGER_OUTSIDE_CAMERA = 29
}

export enum LightMode {    
    NONE = 0,
    AMBIENT_INTENSITY = 1,
    ENVIRONMENT_LIGHTING = 2,
    ENVIRONMENT_TEXTURE = 4,
    ALL = 65535
}

export enum CameraLensFacing {
    REAR = 1,
    FRONT = 2
}

export enum SemanticMode {
    NONE = 0,
    PLANE = 1,
    TARGET = 2,
    ALL = 3
}

export enum PowerMode {
    NORMAL = 1,
    POWER_SAVING = 2,
    ULTRA_POWER_SAVING = 3,
    PERFORMANCE_FIRST = 4
}

export enum FocusMode {
    FIXED_FOCUS = 1,
    AUTO_FOCUS = 2
}

export enum UpdateMode {
    BLOCKING = 1,
    LATEST_CAMERA_IMAGE = 2
}

export enum TargetLabel {
    TARGET_INVALID = -1,
    TARGET_OTHER = 0,
    TARGET_SEAT = 1,
    TARGET_TABLE = 2
}

export enum TargetShapeType {
    TARGET_SHAPE_INVALID = -1,
    TARGET_SHAPE_OTHER = 0,
    TARGET_SHAPE_CUBE = 1,
    TARGET_SHAPE_CIRCLE = 2,
    TARGET_SHAPE_RECT = 3
}

export enum PlaneFindingMode {
    DISABLED = 0,
    HORIZONTAL_ONLY = 1,
    VERTICAL_ONLY = 2,
    ENABLE = 3,
}
    
    
