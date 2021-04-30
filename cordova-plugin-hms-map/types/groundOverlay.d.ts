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
import { LatLngBounds, LatLng, BitmapDescriptor } from "./interfaces";
export interface GroundOverlay {
    getBearing(): Promise<number>;
    getBounds(): Promise<LatLngBounds>;
    getHeight(): Promise<number>;
    getId(): string;
    getPosition(): Promise<LatLng>;
    getTag(): Promise<any>;
    getTransparency(): Promise<number>;
    getWidth(): Promise<number>;
    getZIndex(): Promise<number>;
    isClickable(): Promise<boolean>;
    isVisible(): Promise<boolean>;
    remove(): Promise<void>;
    setBearing(bearing: number): Promise<void>;
    setClickable(clickable: boolean): Promise<void>;
    setDimensions(width: number, height: number): Promise<void>;
    setDimensions(width: number): Promise<void>;
    setImage(imageDescriptor: BitmapDescriptor): Promise<void>;
    setPosition(position: LatLng): Promise<void>;
    setPositionFromBounds(positionLatLngBounds: LatLngBounds): Promise<void>;
    setTag(tag: any): Promise<void>;
    setTransparency(transparency: number): Promise<void>;
    setVisible(visible: boolean): Promise<void>;
    setZIndex(zIndex: number): Promise<void>;
}
export declare class GroundOverlayImpl implements GroundOverlay {
    private readonly mapDivId;
    private readonly mapCapsuleId;
    private readonly id;
    constructor(mapDivId: string, mapCapsuleId: number, componentId: string);
    getBearing(): Promise<number>;
    getBounds(): Promise<LatLngBounds>;
    getHeight(): Promise<number>;
    getId(): string;
    getPosition(): Promise<LatLng>;
    getTag(): Promise<any>;
    getTransparency(): Promise<number>;
    getWidth(): Promise<number>;
    getZIndex(): Promise<number>;
    isClickable(): Promise<boolean>;
    isVisible(): Promise<boolean>;
    remove(): Promise<void>;
    setBearing(bearing: number): Promise<void>;
    setClickable(clickable: boolean): Promise<void>;
    setDimensions(width: number, height?: number): Promise<void>;
    setDimensions(width: number): Promise<void>;
    setImage(imageDescriptor: BitmapDescriptor): Promise<void>;
    setPosition(position: LatLng): Promise<void>;
    setPositionFromBounds(positionLatLngBounds: LatLngBounds): Promise<void>;
    setTag(tag: any): Promise<void>;
    setTransparency(transparency: number): Promise<void>;
    setVisible(visible: boolean): Promise<void>;
    setZIndex(zIndex: number): Promise<void>;
    private setComponentOptions;
    private getComponentOptions;
}
