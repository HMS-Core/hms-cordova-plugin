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
    BitmapDescriptor,
    AnimationSet,
    Animation,
    RotateAnimation,
    ScaleAnimation,
    TranslateAnimation,
    AlphaAnimation,
    _rotateAnimation,
    _scaleAnimation,
    _translateAnimation,
    _alphaAnimation,
} from "./interfaces";
import { asyncExec, setComponentOptions, getComponentOptions } from "./utils";
import { setAnimations } from "./animationUtils";

export interface Marker {
    getAlpha(): Promise<number>;
    getId(): string;
    getPosition(): Promise<LatLng>;
    getRotation(): Promise<number>;
    getSnippet(): Promise<string>;
    getTag(): Promise<any>;
    getTitle(): Promise<string>;
    getZIndex(): Promise<number>;
    isVisible(): Promise<boolean>;
    isClusterable(): Promise<boolean>;
    isDraggable(): Promise<boolean>;
    isFlat(): Promise<boolean>;
    isInfoWindowShown(): Promise<boolean>;
    isClickable(): Promise<boolean>;

    remove(): Promise<void>;
    hideInfoWindow(): Promise<void>;
    showInfoWindow(): Promise<void>;
    startAnimation(): Promise<void>;

    setAlpha(alpha: number): Promise<void>;
    setAnimation(animation: AnimationSet): Promise<void>;
    setDraggable(draggable: boolean): Promise<void>;
    setFlat(flat: boolean): Promise<void>;
    setIcon(icon: BitmapDescriptor): Promise<void>;
    setInfoWindowAnchor(u: number, v: number): Promise<void>;
    setMarkerAnchor(u: number, v: number): Promise<void>;
    setPosition(latLng: LatLng): Promise<void>;
    setRotation(rotation: number): Promise<void>;
    setSnippet(snippet: String): Promise<void>;
    setTitle(title: string): Promise<void>;
    setTag(tag: any): Promise<void>;
    setVisible(visible: boolean): Promise<void>;
    setZIndex(zIndex: number): Promise<void>;
    setClickable(clickable: boolean): Promise<void>;
}

export class MarkerImpl implements Marker {
    private readonly mapDivId: string;
    private readonly mapCapsuleId: number;
    private readonly id: string;

    constructor(mapDivId: string, mapCapsuleId: number, componentId: string) {
        this.mapDivId = mapDivId;
        this.mapCapsuleId = mapCapsuleId;

        this.id = componentId;
    }

    getAlpha(): Promise<number> {
        return getComponentOptions("getAlpha", this.mapDivId, this.id);
    }

    getId(): string {
        return this.id;
    }

    getPosition(): Promise<LatLng> {
        return getComponentOptions("getPosition", this.mapDivId, this.id);
    }

    getRotation(): Promise<number> {
        return getComponentOptions("getRotation", this.mapDivId, this.id);
    }

    getSnippet(): Promise<string> {
        return getComponentOptions("getSnippet", this.mapDivId, this.id);
    }

    getTag(): Promise<any> {
        return getComponentOptions("getTag", this.mapDivId, this.id);
    }

    getTitle(): Promise<string> {
        return getComponentOptions("getTitle", this.mapDivId, this.id);
    }

    getZIndex(): Promise<number> {
        return getComponentOptions("getZIndex", this.mapDivId, this.id);
    }

    isVisible(): Promise<boolean> {
        return getComponentOptions("isVisible", this.mapDivId, this.id);
    }

    isClusterable(): Promise<boolean> {
        return getComponentOptions("isClusterable", this.mapDivId, this.id);
    }

    isDraggable(): Promise<boolean> {
        return getComponentOptions("isDraggable", this.mapDivId, this.id);
    }

    isFlat(): Promise<boolean> {
        return getComponentOptions("isFlat", this.mapDivId, this.id);
    }

    isInfoWindowShown(): Promise<boolean> {
        return getComponentOptions("isInfoWindowShown", this.mapDivId, this.id);
    }

    isClickable(): Promise<boolean> {
        return getComponentOptions("isClickable", this.mapDivId, this.id);
    }

    startAnimation(): Promise<void> {
        return getComponentOptions("startAnimation", this.mapDivId, this.id);
    }

    remove(): Promise<void> {
        return asyncExec("HMSMap", "removeComponent", [this.mapDivId, this.id]);
    }

    hideInfoWindow(): Promise<void> {
        return getComponentOptions("hideInfoWindow", this.mapDivId, this.id);
    }

    showInfoWindow(): Promise<void> {
        return getComponentOptions("showInfoWindow", this.mapDivId, this.id);
    }

    setAlpha(alpha: number): Promise<void> {
        return setComponentOptions("setAlpha", { alpha: alpha }, this.mapDivId, this.id);
    }

    setAnimation(animation: AnimationSet): Promise<void> {
        const _animations = setAnimations(animation, this.mapCapsuleId, this.id)
        return setComponentOptions("setAnimation", { animation: _animations }, this.mapDivId, this.id);
    }

    setDraggable(draggable: boolean): Promise<void> {
        return setComponentOptions("setDraggable", { draggable: draggable }, this.mapDivId, this.id);
    }

    setFlat(flat: boolean): Promise<void> {
        return setComponentOptions("setFlat", { flat: flat }, this.mapDivId, this.id);
    }

    setIcon(icon: BitmapDescriptor): Promise<void> {
        return setComponentOptions("setIcon", { icon: icon }, this.mapDivId, this.id);
    }

    setInfoWindowAnchor(u: number, v: number): Promise<void> {
        return setComponentOptions("setInfoWindowAnchor", { u: u, v: v }, this.mapDivId, this.id);
    }

    setMarkerAnchor(u: number, v: number): Promise<void> {
        return setComponentOptions("setMarkerAnchor", { u: u, v: v }, this.mapDivId, this.id);
    }

    setPosition(latLng: LatLng): Promise<void> {
        return setComponentOptions("setPosition", { position: latLng }, this.mapDivId, this.id);
    }

    setRotation(rotation: number): Promise<void> {
        return setComponentOptions("setRotation", { rotation: rotation }, this.mapDivId, this.id);
    }

    setSnippet(snippet: String): Promise<void> {
        return setComponentOptions("setSnippet", { snippet: snippet }, this.mapDivId, this.id);
    }

    setTitle(title: string): Promise<void> {
        return setComponentOptions("setTitle", { title: title }, this.mapDivId, this.id);
    }

    setTag(tag: any): Promise<void> {
        return setComponentOptions("setTag", { tag: tag }, this.mapDivId, this.id);
    }

    setVisible(visible: boolean): Promise<void> {
        return setComponentOptions("setVisible", { visible: visible }, this.mapDivId, this.id);
    }

    setZIndex(zIndex: number): Promise<void> {
        return setComponentOptions("setZIndex", { zIndex: zIndex }, this.mapDivId, this.id);
    }

    setClickable(clickable: boolean): Promise<void> {
        return setComponentOptions("setClickable", { clickable: clickable }, this.mapDivId, this.id);
    }
}
