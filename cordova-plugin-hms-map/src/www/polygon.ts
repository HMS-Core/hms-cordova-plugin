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

import {PatternItem, LatLng, Color, JointType} from "./interfaces";
import {asyncExec} from "./utils";

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
        return this.getComponentOptions('getFillColor');
    }

    getHoles(): Promise<LatLng[][]> {
        return this.getComponentOptions('getHoles');
    }

    getId(): string {
        return this.id;
    }

    getPoints(): Promise<LatLng[]> {
        return this.getComponentOptions('getPoints');
    }

    getStrokeColor(): Promise<Color> {
        return this.getComponentOptions('getStrokeColor');
    }

    getStrokeJointType(): Promise<JointType> {
        return this.getComponentOptions('getStrokeJointType');
    }

    getStrokePattern(): Promise<PatternItem[]> {
        return this.getComponentOptions('getStrokePattern');
    }

    getStrokeWidth(): Promise<number> {
        return this.getComponentOptions('getStrokeWidth');
    }

    getTag(): Promise<any> {
        return this.getComponentOptions('getTag');
    }

    getZIndex(): Promise<number> {
        return this.getComponentOptions('getZIndex');
    }

    isClickable(): Promise<boolean> {
        return this.getComponentOptions('isClickable');
    }

    isVisible(): Promise<boolean> {
        return this.getComponentOptions('isVisible');
    }

    isGeodesic(): Promise<boolean> {
        return this.getComponentOptions('isGeodesic');
    }

    remove(): Promise<void> {
        return asyncExec("HMSMap", "removeComponent", [this.mapDivId, this.id]);
    }

    setClickable(clickable: boolean): Promise<void> {
        return this.setComponentOptions("setClickable", {"clickable": clickable});
    }

    setFillColor(fillColor: Color): Promise<void> {
        return this.setComponentOptions("setFillColor", {"fillColor": fillColor});
    }

    setGeodesic(geodesic: boolean): Promise<void> {
        return this.setComponentOptions("setGeodesic", {"geodesic": geodesic});
    }

    setHoles(holes: LatLng[][]): Promise<void> {
        return this.setComponentOptions("setHoles", {"holes": holes});
    }

    setPoints(points: LatLng[]): Promise<void> {
        return this.setComponentOptions("setPoints", {"points": points});
    }

    setStrokeColor(strokeColor: Color): Promise<void> {
        return this.setComponentOptions("setStrokeColor", {"strokeColor": strokeColor});
    }

    setStrokeJointType(strokeJointType: JointType): Promise<void> {
        return this.setComponentOptions("setStrokeJointType", {"strokeJointType": strokeJointType});
    }

    setStrokePattern(strokePattern: PatternItem[]): Promise<void> {
        return this.setComponentOptions("setStrokePattern", {"strokePattern": strokePattern});
    }

    setStrokeWidth(strokeWidth: number): Promise<void> {
        return this.setComponentOptions("setStrokeWidth", {"strokeWidth": strokeWidth});
    }

    setTag(tag: any): Promise<void> {
        return this.setComponentOptions("setTag", {"tag": tag});
    }

    setVisible(visible: boolean): Promise<void> {
        return this.setComponentOptions("setVisible", {"visible": visible});
    }

    setZIndex(zIndex: number): Promise<void> {
        return this.setComponentOptions("setZIndex", {"zIndex": zIndex});
    }

    private setComponentOptions(func: string, params: any): Promise<any> {
        return asyncExec('HMSMap', 'componentOptions', [this.mapDivId, this.id, 'set', func, params]);
    }

    private async getComponentOptions(func: string): Promise<any> {
        const result = await asyncExec("HMSMap", "componentOptions", [this.mapDivId, this.id, 'get', func, {}]);
        return result.value;
    }

}
