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
    textOther: string;
    textWall: string;
    textFloor: string;
    textSeat: string;
    textTable: string;
    textCeiling: string;
    colorOther: ColorRGBA;
    colorWall: ColorRGBA;
    colorFloor: ColorRGBA;
    colorSeat: ColorRGBA;
    colorTable: ColorRGBA;
    colorCeiling: ColorRGBA;
}

export interface ARFaceConfig extends ARSceneConfig {
    pointSize: number;
    depthColor: ColorRGBA;
    texturePath: string;
}

export interface ARBodyConfig extends ARSceneConfig {
    drawLine: boolean;
    drawPoint: boolean;
    lineWidth: number;
    pointSize: number;
    lineColor: ColorRGBA;
    pointColor: ColorRGBA;
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
}

export interface ARBody {
    bodyAction: number;
    anchors: Anchor[];
    bodySkeletonTypes: number[];
    skeletonPoint2D: number[];
    skeletonPoint3D: number[];
    skeletonConfidince: number[];
    bodySkeletonConnection: number[];
    skeletonPointIsExist2D: number[];
    skeletonPointIsExist3D: number[];
    coordinateSystemType: ARCoordinateSystemType;
    trackingState: TrackingState;
}

export enum TrackingState{
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
    PLANE_CEILING = 5
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