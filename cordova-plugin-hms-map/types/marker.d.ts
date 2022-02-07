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
import { LatLng, BitmapDescriptor, AnimationSet } from "./interfaces";
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
}
export declare class MarkerImpl implements Marker {
    private readonly mapDivId;
    private readonly mapCapsuleId;
    private readonly id;
    constructor(mapDivId: string, mapCapsuleId: number, componentId: string);
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
    startAnimation(): Promise<void>;
    remove(): Promise<void>;
    hideInfoWindow(): Promise<void>;
    showInfoWindow(): Promise<void>;
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
    private setComponentOptions;
    private getComponentOptions;
}
