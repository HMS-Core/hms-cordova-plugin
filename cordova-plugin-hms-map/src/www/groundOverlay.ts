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

import {LatLngBounds, LatLng, BitmapDescriptor} from "./interfaces";
import {asyncExec} from "./utils";

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
        return this.getComponentOptions('getBearing');
    }

    getBounds(): Promise<LatLngBounds> {
        return this.getComponentOptions('getBounds');
    }

    getHeight(): Promise<number> {
        return this.getComponentOptions('getHeight');
    }

    getId(): string {
        return this.id;
    }

    getPosition(): Promise<LatLng> {
        return this.getComponentOptions('getPosition');
    }

    getTag(): Promise<any> {
        return this.getComponentOptions('getTag');
    }

    getTransparency(): Promise<number> {
        return this.getComponentOptions('getTransparency');
    }

    getWidth(): Promise<number> {
        return this.getComponentOptions('getWidth');
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

    setBearing(bearing: number): Promise<void> {
        return this.setComponentOptions('setBearing', {'bearing': bearing});
    }

    setClickable(clickable: boolean): Promise<void> {
        return this.setComponentOptions('setClickable', {'clickable': clickable});
    }

    setDimensions(width: number, height?: number): Promise<void>;

    setDimensions(width: number): Promise<void>;

    setDimensions(width: any, height?: any): Promise<void> {
        return this.setComponentOptions("setDimensions", {"width": width, "height": height});
    }

    setImage(imageDescriptor: BitmapDescriptor): Promise<void> {
        return this.setComponentOptions("setImage", {"image": imageDescriptor});
    }

    setPosition(position: LatLng): Promise<void> {
        return this.setComponentOptions("setPosition", {"position": position});
    }

    setPositionFromBounds(positionLatLngBounds: LatLngBounds): Promise<void> {
        return this.setComponentOptions("setPositionFromBounds", {"bounds": positionLatLngBounds});
    }

    setTag(tag: any): Promise<void> {
        return this.setComponentOptions("setTag", {"tag": tag});
    }

    setTransparency(transparency: number): Promise<void> {
        return this.setComponentOptions('setTransparency', {"transparency": transparency});
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
