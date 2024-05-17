/*
    Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.

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

import { 
    LatLng, 
    PatternItem, 
    Color,  
    AnimationSet,
    Animation,
    RotateAnimation,
    ScaleAnimation,
    TranslateAnimation,
    AlphaAnimation,
    _rotateAnimation,
    _scaleAnimation,
    _translateAnimation,
    _alphaAnimation, } from "./interfaces";
import { asyncExec, setComponentOptions, getComponentOptions } from "./utils";
import { setAnimations } from "./animationUtils";

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
    startAnimation(): Promise<void>;
    clearAnimation(): Promise<boolean>;

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
    setAnimation(animation: AnimationSet): Promise<void>;
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
        return getComponentOptions("getCenter", this.mapDivId, this.id);
    }

    getStrokePattern(): Promise<PatternItem[]> {
        return getComponentOptions("getStrokePattern", this.mapDivId, this.id);
    }

    getFillColor(): Promise<Color> {
        return getComponentOptions("getFillColor", this.mapDivId, this.id);
    }

    getId(): string {
        return this.id;
    }

    getStrokeWidth(): Promise<number> {
        return getComponentOptions("getStrokeWidth", this.mapDivId, this.id);
    }

    getRadius(): Promise<number> {
        return getComponentOptions("getRadius", this.mapDivId, this.id);
    }

    getTag(): Promise<any> {
        return getComponentOptions("getTag", this.mapDivId, this.id);
    }

    getStrokeColor(): Promise<number> {
        return getComponentOptions("getStrokeColor", this.mapDivId, this.id);
    }

    getZIndex(): Promise<number> {
        return getComponentOptions("getZIndex", this.mapDivId, this.id);
    }

    remove(): Promise<void> {
        return asyncExec("HMSMap", "removeComponent", [this.mapDivId, this.id]);
    }

    isVisible(): Promise<boolean> {
        return getComponentOptions("isVisible", this.mapDivId, this.id);
    }

    isClickable(): Promise<boolean> {
        return getComponentOptions("isClickable", this.mapDivId, this.id);
    }

    startAnimation(): Promise<void> {
        return getComponentOptions("startAnimation", this.mapDivId, this.id);
    }

    clearAnimation(): Promise<boolean> {
        return getComponentOptions("clearAnimation", this.mapDivId, this.id);
    }

    setCenter(center: LatLng): Promise<void> {
        return setComponentOptions("setCenter", { center: center }, this.mapDivId, this.id);
    }

    setFillColor(fillColor: Color): Promise<void> {
        return setComponentOptions("setFillColor", { fillColor: fillColor }, this.mapDivId, this.id);
    }

    setRadius(radius: number): Promise<void> {
        return setComponentOptions("setRadius", { radius: radius }, this.mapDivId, this.id);
    }

    setStrokePattern(strokePattern: PatternItem[]): Promise<void> {
        return setComponentOptions("setStrokePattern", { strokePattern: strokePattern }, this.mapDivId, this.id);
    }

    setStrokeColor(strokeColor: number): Promise<void> {
        return setComponentOptions("setStrokeColor", { strokeColor: strokeColor }, this.mapDivId, this.id);
    }

    setStrokeWidth(strokeWidth: number): Promise<void> {
        return setComponentOptions("setStrokeWidth", { strokeWidth: strokeWidth }, this.mapDivId, this.id);
    }

    setZIndex(zIndex: number): Promise<void> {
        return setComponentOptions("setZIndex", { zIndex: zIndex }, this.mapDivId, this.id);
    }

    setTag(tag: any): Promise<void> {
        return setComponentOptions("setTag", { tag: tag }, this.mapDivId, this.id);
    }

    setClickable(clickable: boolean): Promise<void> {
        return setComponentOptions("setClickable", { clickable: clickable }, this.mapDivId, this.id);
    }

    setVisible(visible: boolean): Promise<void> {
        return setComponentOptions("setVisible", { visible: visible }, this.mapDivId, this.id);
    }

    /// Only TranslateAnimation is supported.
    setAnimation(animation: AnimationSet): Promise<void> {  
        const _animations = setAnimations(animation, this.mapCapsuleId, this.id)
        return setComponentOptions("setAnimation", { animation: _animations }, this.mapDivId, this.id);
    }
}
