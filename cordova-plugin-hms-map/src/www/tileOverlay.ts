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

import {asyncExec} from "./utils";

export interface TileOverlay {
    getFadeIn(): Promise<boolean>;
    getId(): string;
    getTransparency(): Promise<number>;
    getZIndex(): Promise<number>;
    isVisible(): Promise<boolean>;

    remove(): Promise<void>;
    clearTileCache(): Promise<void>;

    setFadeIn(fadeIn: boolean): Promise<void>;
    setTransparency(transparency: number): Promise<void>;
    setZIndex(zIndex: number): Promise<void>;
    setVisible(visible: boolean): Promise<void>;
}

export class TileOverlayImpl implements TileOverlay {

    private readonly mapDivId: string;
    private readonly mapCapsuleId: number;
    private readonly id: string;

    constructor(mapDivId: string, mapCapsuleId: number, componentId: string) {
        this.mapDivId = mapDivId;
        this.mapCapsuleId = mapCapsuleId;
        this.id = componentId;
    }

    getFadeIn(): Promise<boolean> {
        return this.getComponentOptions('getFadeIn');
    }

    getId(): string {
        return this.id;
    }

    getTransparency(): Promise<number> {
        return this.getComponentOptions('getTransparency');
    }

    getZIndex(): Promise<number> {
        return this.getComponentOptions('getZIndex');
    }

    isVisible(): Promise<boolean> {
        return this.getComponentOptions('isVisible');
    }

    remove(): Promise<void> {
        return asyncExec("HMSMap", "removeComponent", [this.mapDivId, this.id]);
    }

    clearTileCache(): Promise<void> {
        return this.getComponentOptions("clearTileCache");
    }

    setFadeIn(fadeIn: boolean): Promise<void> {
        return this.setComponentOptions("setFadeIn", {"fadeIn": fadeIn});
    }

    setTransparency(transparency: number): Promise<void> {
        return this.setComponentOptions("setTransparency", {"transparency": transparency});
    }

    setZIndex(zIndex: number): Promise<void> {
        return this.setComponentOptions("setZIndex", {"zIndex": zIndex});
    }

    setVisible(visible: boolean): Promise<void> {
        return this.setComponentOptions("setVisible", {"visible": visible});
    }

    private setComponentOptions(func: string, params: any): Promise<any> {
        return asyncExec('HMSMap', 'componentOptions', [this.mapDivId, this.id, 'set', func, params]);
    }

    private async getComponentOptions(func: string): Promise<any> {
        const result = await asyncExec("HMSMap", "componentOptions", [this.mapDivId, this.id, 'get', func, {}]);
        return result.value;
    }

}
