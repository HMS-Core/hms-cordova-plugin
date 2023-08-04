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

import { LatLngBounds, LatLng, BitmapDescriptor } from "./interfaces";
import { asyncExec, setComponentOptions, getComponentOptions } from "./utils";

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

export class GroundOverlayImpl implements GroundOverlay {
    private readonly mapDivId: string;
    private readonly mapCapsuleId: number;
    private readonly id: string;

    constructor(mapDivId: string, mapCapsuleId: number, componentId: string) {
        this.mapDivId = mapDivId;
        this.mapCapsuleId = mapCapsuleId;
        this.id = componentId;
    }

    getBearing(): Promise<number> {
        return getComponentOptions("getBearing", this.mapDivId, this.id);
    }

    getBounds(): Promise<LatLngBounds> {
        return getComponentOptions("getBounds", this.mapDivId, this.id);
    }

    getHeight(): Promise<number> {
        return getComponentOptions("getHeight", this.mapDivId, this.id);
    }

    getId(): string {
        return this.id;
    }

    getPosition(): Promise<LatLng> {
        return getComponentOptions("getPosition", this.mapDivId, this.id);
    }

    getTag(): Promise<any> {
        return getComponentOptions("getTag", this.mapDivId, this.id);
    }

    getTransparency(): Promise<number> {
        return getComponentOptions("getTransparency", this.mapDivId, this.id);
    }

    getWidth(): Promise<number> {
        return getComponentOptions("getWidth", this.mapDivId, this.id);
    }

    isClickable(): Promise<boolean> {
        return getComponentOptions("isClickable", this.mapDivId, this.id);
    }

    isVisible(): Promise<boolean> {
        return getComponentOptions("isVisible", this.mapDivId, this.id);
    }

    getZIndex(): Promise<number> {
        return getComponentOptions("getZIndex", this.mapDivId, this.id);
    }

    remove(): Promise<void> {
        return asyncExec("HMSMap", "removeComponent", [this.mapDivId, this.id]);
    }

    setBearing(bearing: number): Promise<void> {
        return setComponentOptions("setBearing", { bearing: bearing }, this.mapDivId, this.id);
    }

    setClickable(clickable: boolean): Promise<void> {
        return setComponentOptions("setClickable", { clickable: clickable }, this.mapDivId, this.id);
    }

    setDimensions(width: number, height?: number): Promise<void>;

    setDimensions(width: number): Promise<void>;

    setDimensions(width: any, height?: any): Promise<void> {
        return setComponentOptions("setDimensions", { width: width, height: height }, this.mapDivId, this.id);
    }

    setImage(imageDescriptor: BitmapDescriptor): Promise<void> {
        return setComponentOptions("setImage", { image: imageDescriptor }, this.mapDivId, this.id);
    }

    setPosition(position: LatLng): Promise<void> {
        return setComponentOptions("setPosition", { position: position }, this.mapDivId, this.id);
    }

    setPositionFromBounds(positionLatLngBounds: LatLngBounds): Promise<void> {
        return setComponentOptions("setPositionFromBounds", { bounds: positionLatLngBounds }, this.mapDivId, this.id);
    }

    setTag(tag: any): Promise<void> {
        return setComponentOptions("setTag", { tag: tag }, this.mapDivId, this.id);
    }

    setTransparency(transparency: number): Promise<void> {
        return setComponentOptions("setTransparency", { transparency: transparency }, this.mapDivId, this.id);
    }

    setVisible(visible: boolean): Promise<void> {
        return setComponentOptions("setVisible", { visible: visible }, this.mapDivId, this.id);
    }

    setZIndex(zIndex: number): Promise<void> {
        return setComponentOptions("setZIndex", { zIndex: zIndex }, this.mapDivId, this.id);
    }
}
