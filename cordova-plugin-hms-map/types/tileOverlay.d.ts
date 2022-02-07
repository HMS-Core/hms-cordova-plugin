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
export declare class TileOverlayImpl implements TileOverlay {
    private readonly mapDivId;
    private readonly mapCapsuleId;
    private readonly id;
    constructor(mapDivId: string, mapCapsuleId: number, componentId: string);
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
    private setComponentOptions;
    private getComponentOptions;
}
