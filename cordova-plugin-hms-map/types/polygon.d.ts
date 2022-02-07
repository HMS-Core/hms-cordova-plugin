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
import { PatternItem, LatLng, Color, JointType } from "./interfaces";
export interface Polygon {
    getFillColor(): Promise<Color>;
    getHoles(): Promise<LatLng[][]>;
    getId(): string;
    getPoints(): Promise<LatLng[]>;
    getStrokeColor(): Promise<Color>;
    getStrokeJointType(): Promise<JointType>;
    getStrokePattern(): Promise<PatternItem[]>;
    getStrokeWidth(): Promise<number>;
    getTag(): Promise<any>;
    getZIndex(): Promise<number>;
    isClickable(): Promise<boolean>;
    isVisible(): Promise<boolean>;
    isGeodesic(): Promise<boolean>;
    remove(): Promise<void>;
    setClickable(clickable: boolean): Promise<void>;
    setFillColor(color: Color): Promise<void>;
    setGeodesic(geodesic: boolean): Promise<void>;
    setHoles(holes: LatLng[][]): Promise<void>;
    setPoints(points: LatLng[]): Promise<void>;
    setStrokeColor(color: Color): Promise<void>;
    setStrokeJointType(jointType: JointType): Promise<void>;
    setStrokePattern(patternItem: PatternItem[]): Promise<void>;
    setStrokeWidth(width: number): Promise<void>;
    setTag(tag: any): Promise<void>;
    setVisible(visible: boolean): Promise<void>;
    setZIndex(zIndex: number): Promise<void>;
}
export declare class PolygonImpl implements Polygon {
    private readonly mapDivId;
    private readonly mapCapsuleId;
    private readonly id;
    constructor(mapDivId: string, mapCapsuleId: number, componentId: string);
    getFillColor(): Promise<Color>;
    getHoles(): Promise<LatLng[][]>;
    getId(): string;
    getPoints(): Promise<LatLng[]>;
    getStrokeColor(): Promise<Color>;
    getStrokeJointType(): Promise<JointType>;
    getStrokePattern(): Promise<PatternItem[]>;
    getStrokeWidth(): Promise<number>;
    getTag(): Promise<any>;
    getZIndex(): Promise<number>;
    isClickable(): Promise<boolean>;
    isVisible(): Promise<boolean>;
    isGeodesic(): Promise<boolean>;
    remove(): Promise<void>;
    setClickable(clickable: boolean): Promise<void>;
    setFillColor(fillColor: Color): Promise<void>;
    setGeodesic(geodesic: boolean): Promise<void>;
    setHoles(holes: LatLng[][]): Promise<void>;
    setPoints(points: LatLng[]): Promise<void>;
    setStrokeColor(strokeColor: Color): Promise<void>;
    setStrokeJointType(strokeJointType: JointType): Promise<void>;
    setStrokePattern(strokePattern: PatternItem[]): Promise<void>;
    setStrokeWidth(strokeWidth: number): Promise<void>;
    setTag(tag: any): Promise<void>;
    setVisible(visible: boolean): Promise<void>;
    setZIndex(zIndex: number): Promise<void>;
    private setComponentOptions;
    private getComponentOptions;
}
