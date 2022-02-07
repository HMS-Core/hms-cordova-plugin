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
import { LatLng, PatternItem, Color } from "./interfaces";
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
export declare class CircleImpl implements Circle {
    private readonly id;
    private readonly mapDivId;
    private readonly mapCapsuleId;
    constructor(mapDivId: string, mapCapsuleId: number, componentId: string);
    getCenter(): Promise<LatLng>;
    getFillColor(): Promise<Color>;
    getId(): string;
    getRadius(): Promise<number>;
    getStrokeColor(): Promise<number>;
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
    setStrokeColor(strokeColor: number): Promise<void>;
    setStrokePattern(strokePattern: PatternItem[]): Promise<void>;
    setStrokeWidth(strokeWidth: number): Promise<void>;
    setTag(tag: any): Promise<void>;
    setZIndex(zIndex: number): Promise<void>;
    setClickable(clickable: boolean): Promise<void>;
    setVisible(visible: boolean): Promise<void>;
    private setComponentOptions;
    private getComponentOptions;
}
