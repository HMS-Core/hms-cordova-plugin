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

import { asyncExec, setComponentOptions, getComponentOptions } from "./utils";

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
        return getComponentOptions("getFadeIn", this.mapDivId, this.id);
    }

    getId(): string {
        return this.id;
    }

    getTransparency(): Promise<number> {
        return getComponentOptions("getTransparency", this.mapDivId, this.id);
    }

    getZIndex(): Promise<number> {
        return getComponentOptions("getZIndex", this.mapDivId, this.id);
    }

    isVisible(): Promise<boolean> {
        return getComponentOptions("isVisible", this.mapDivId, this.id);
    }

    remove(): Promise<void> {
        return asyncExec("HMSMap", "removeComponent", [this.mapDivId, this.id]);
    }

    clearTileCache(): Promise<void> {
        return getComponentOptions("clearTileCache", this.mapDivId, this.id);
    }

    setFadeIn(fadeIn: boolean): Promise<void> {
        return setComponentOptions("setFadeIn", { fadeIn: fadeIn }, this.mapDivId, this.id);
    }

    setTransparency(transparency: number): Promise<void> {
        return setComponentOptions("setTransparency", { transparency: transparency }, this.mapDivId, this.id);
    }

    setZIndex(zIndex: number): Promise<void> {
        return setComponentOptions("setZIndex", { zIndex: zIndex }, this.mapDivId, this.id);
    }

    setVisible(visible: boolean): Promise<void> {
        return setComponentOptions("setVisible", { visible: visible }, this.mapDivId, this.id);
    }
}
