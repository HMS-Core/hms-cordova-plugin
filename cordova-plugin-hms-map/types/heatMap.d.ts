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

import { RadiusUnit } from "./interfaces";
export interface HeatMap {
    getId(): string;
    remove(): Promise<void>;
    changeDataSet(jsonData: string): Promise<void>;
    changeDataSetId(resourceId: number): Promise<void>;
    getRadiusUnit(): Promise<RadiusUnit>;
    setRadiusUnit(radiusUnit: RadiusUnit): Promise<void>;
    setColor(color: Map<number, Number[]>): Promise<void>;
    setIntensity(intensity: number): Promise<void>;
    setIntensities(intensities: Map<number, number>): Promise<void>;
    setOpacity(opacity: number): Promise<void>;
    setOpacities(Opacities: Map<number, number>): Promise<void>;
    setRadius(radius: number): Promise<void>;
    setRadiuses(radiuses: Map<number, number>): Promise<void>;
    setVisible(visible: boolean): Promise<void>;
}
export declare class HeatMapImpl implements HeatMap {
    private readonly mapDivId;
    private readonly mapCapsuleId;
    private readonly id;
    constructor(mapDivId: string, mapCapsuleId: number, componentId: string);
    setRadiusUnit(radiusUnit: RadiusUnit): Promise<void>;
    setColor(color: Map<number, Number[]>): Promise<void>;
    setIntensity(intensity: number): Promise<void>;
    setIntensities(intensities: Map<number, number>): Promise<void>;
    setOpacity(opacity: number): Promise<void>;
    setOpacities(opacities: Map<number, number>): Promise<void>;
    setRadius(radius: number): Promise<void>;
    setRadiuses(radiuses: Map<number, number>): Promise<void>;
    changeDataSetId(resourceId: number): Promise<void>;
    getRadiusUnit(): Promise<RadiusUnit>;
    getId(): string;
    remove(): Promise<void>;
    setVisible(visible: boolean): Promise<void>;
    changeDataSet(jsonData: string): Promise<void>;
}
