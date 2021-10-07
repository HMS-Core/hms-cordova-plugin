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

import {LatLng, PatternItem, Color} from "./interfaces";
import {asyncExec} from "./utils";

export interface Circle {
    getCenter(): Promise<LatLng>;
    getFillColor(): Promise<Color>;
    getId(): string;
    getRadius(): Promise<number>;
    getStrokeColor(): Promise<Color>;
    getStrokePattern(): Promise<PatternItem[]>;
    getStrokeWidth(): Promise<number>;
    getTag(): Promise<any>;
    getZIndex(): Promise<number>;
    isClickable(): Promise<boolean>;
    isVisible(): Promise<boolean>;

    remove(): Promise<void>;

    setCenter(center: LatLng): Promise<void>;
    setFillColor(fillColor: Color): Promise<void>;
    setRadius(radius: number): Promise<void>;
    setStrokeColor(strokeColor: Color): Promise<void>;
    setStrokePattern(strokePattern: PatternItem[]): Promise<void>;
    setStrokeWidth(strokeWidth: number): Promise<void>;
    setTag(tag: any): Promise<void>;
    setZIndex(zIndex: number): Promise<void>;
    setClickable(clickable: boolean): Promise<void>;
    setVisible(visible: boolean): Promise<void>;
}

export class CircleImpl implements Circle {

    private readonly id: string;
    private readonly mapDivId: string;
    private readonly mapCapsuleId: number;

    constructor(mapDivId: string, mapCapsuleId: number, componentId: string) {
        this.mapDivId = mapDivId;
        this.mapCapsuleId = mapCapsuleId;
        this.id = componentId;
    }

    getCenter(): Promise<LatLng> {
        return this.getComponentOptions('getCenter');
    }

    getFillColor(): Promise<Color> {
        return this.getComponentOptions('getFillColor');
    }

    getId(): string {
        return this.id;
    }

    getRadius(): Promise<number> {
        return this.getComponentOptions('getRadius');
    }

    getStrokeColor(): Promise<number> {
        return this.getComponentOptions('getStrokeColor');
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

    remove(): Promise<void> {
        return asyncExec("HMSMap", "removeComponent", [this.mapDivId, this.id]);
    }

    setCenter(center: LatLng): Promise<void> {
        return this.setComponentOptions('setCenter', {'center': center});
    }

    setFillColor(fillColor: Color): Promise<void> {
        return this.setComponentOptions('setFillColor', {'fillColor': fillColor});
    }

    setRadius(radius: number): Promise<void> {
        return this.setComponentOptions('setRadius', {'radius': radius});
    }

    setStrokeColor(strokeColor: number): Promise<void> {
        return this.setComponentOptions('setStrokeColor', {'strokeColor': strokeColor});
    }

    setStrokePattern(strokePattern: PatternItem[]): Promise<void> {
        return this.setComponentOptions('setStrokePattern', {'strokePattern': strokePattern});
    }

    setStrokeWidth(strokeWidth: number): Promise<void> {
        return this.setComponentOptions('setStrokeWidth', {'strokeWidth': strokeWidth});
    }

    setTag(tag: any): Promise<void> {
        return this.setComponentOptions('setTag', {'tag': tag});
    }

    setZIndex(zIndex: number): Promise<void> {
        return this.setComponentOptions('setZIndex', {'zIndex': zIndex});
    }

    setClickable(clickable: boolean): Promise<void> {
        return this.setComponentOptions('setClickable', {'clickable': clickable});
    }

    setVisible(visible: boolean): Promise<void> {
        return this.setComponentOptions('setVisible', {'visible': visible});
    }

    private setComponentOptions(func: string, params: any): Promise<any> {
        return asyncExec('HMSMap', 'componentOptions', [this.mapDivId, this.id, 'set', func, params]);
    }

    private async getComponentOptions(func: string): Promise<any> {
        const result = await asyncExec("HMSMap", "componentOptions", [this.mapDivId, this.id, 'get', func, {}]);
        return result.value;
    }
}
