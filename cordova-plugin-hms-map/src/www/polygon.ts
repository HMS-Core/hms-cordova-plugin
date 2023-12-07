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

import { PatternItem, LatLng, Color, JointType } from "./interfaces";
import { asyncExec, setComponentOptions, getComponentOptions } from "./utils";

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

export class PolygonImpl implements Polygon {
    private readonly mapDivId: string;
    private readonly mapCapsuleId: number;
    private readonly id: string;

    constructor(mapDivId: string, mapCapsuleId: number, componentId: string) {
        this.mapDivId = mapDivId;
        this.mapCapsuleId = mapCapsuleId;
        this.id = componentId;
    }

    getFillColor(): Promise<Color> {
        return getComponentOptions("getFillColor", this.mapDivId, this.id);
    }

    getHoles(): Promise<LatLng[][]> {
        return getComponentOptions("getHoles", this.mapDivId, this.id);
    }

    getId(): string {
        return this.id;
    }

    getPoints(): Promise<LatLng[]> {
        return getComponentOptions("getPoints", this.mapDivId, this.id);
    }

    getStrokeColor(): Promise<Color> {
        return getComponentOptions("getStrokeColor", this.mapDivId, this.id);
    }

    getStrokeJointType(): Promise<JointType> {
        return getComponentOptions("getStrokeJointType", this.mapDivId, this.id);
    }

    getStrokePattern(): Promise<PatternItem[]> {
        return getComponentOptions("getStrokePattern", this.mapDivId, this.id);
    }

    getStrokeWidth(): Promise<number> {
        return getComponentOptions("getStrokeWidth", this.mapDivId, this.id);
    }

    getTag(): Promise<any> {
        return getComponentOptions("getTag", this.mapDivId, this.id);
    }

    getZIndex(): Promise<number> {
        return getComponentOptions("getZIndex", this.mapDivId, this.id);
    }

    isClickable(): Promise<boolean> {
        return getComponentOptions("isClickable", this.mapDivId, this.id);
    }

    isVisible(): Promise<boolean> {
        return getComponentOptions("isVisible", this.mapDivId, this.id);
    }

    isGeodesic(): Promise<boolean> {
        return getComponentOptions("isGeodesic", this.mapDivId, this.id);
    }

    remove(): Promise<void> {
        return asyncExec("HMSMap", "removeComponent", [this.mapDivId, this.id]);
    }

    setTag(tag: any): Promise<void> {
        return setComponentOptions("setTag", { tag: tag }, this.mapDivId, this.id);
    }

    setClickable(clickable: boolean): Promise<void> {
        return setComponentOptions("setClickable", { clickable: clickable }, this.mapDivId, this.id);
    }

    setFillColor(fillColor: Color): Promise<void> {
        return setComponentOptions("setFillColor", { fillColor: fillColor }, this.mapDivId, this.id);
    }

    setGeodesic(geodesic: boolean): Promise<void> {
        return setComponentOptions("setGeodesic", { geodesic: geodesic }, this.mapDivId, this.id);
    }

    setHoles(holes: LatLng[][]): Promise<void> {
        return setComponentOptions("setHoles", { holes: holes }, this.mapDivId, this.id);
    }

    setVisible(visible: boolean): Promise<void> {
        return setComponentOptions("setVisible", { visible: visible }, this.mapDivId, this.id);
    }

    setPoints(points: LatLng[]): Promise<void> {
        return setComponentOptions("setPoints", { points: points }, this.mapDivId, this.id);
    }

    setStrokeColor(strokeColor: Color): Promise<void> {
        return setComponentOptions("setStrokeColor", { strokeColor: strokeColor }, this.mapDivId, this.id);
    }

    setStrokeJointType(strokeJointType: JointType): Promise<void> {
        return setComponentOptions("setStrokeJointType", { strokeJointType: strokeJointType }, this.mapDivId, this.id);
    }

    setStrokePattern(strokePattern: PatternItem[]): Promise<void> {
        return setComponentOptions("setStrokePattern", { strokePattern: strokePattern }, this.mapDivId, this.id);
    }

    setStrokeWidth(strokeWidth: number): Promise<void> {
        return setComponentOptions("setStrokeWidth", { strokeWidth: strokeWidth }, this.mapDivId, this.id);
    }

    setZIndex(zIndex: number): Promise<void> {
        return setComponentOptions("setZIndex", { zIndex: zIndex }, this.mapDivId, this.id);
    }
}
