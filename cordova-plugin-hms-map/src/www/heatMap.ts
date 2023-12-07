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
import { asyncExec, setComponentOptions, getComponentOptions } from "./utils";

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

export class HeatMapImpl implements HeatMap {
    private readonly mapDivId: string;
    private readonly mapCapsuleId: number;
    private readonly id: string;

    constructor(mapDivId: string, mapCapsuleId: number, componentId: string) {
        this.mapDivId = mapDivId;
        this.mapCapsuleId = mapCapsuleId;
        this.id = componentId;
    }
    setRadiusUnit(radiusUnit: RadiusUnit): Promise<void> {
        return setComponentOptions("setRadiusUnit", { radiusUnit: radiusUnit }, this.mapDivId, this.id);
    }
    setColor(color: Map<number, Number[]>): Promise<void> {
        return setComponentOptions("setColor", { color: color }, this.mapDivId, this.id);
    }
    setIntensity(intensity: number): Promise<void> {
        return setComponentOptions("setIntensity", { intensity: intensity }, this.mapDivId, this.id);
    }
    setIntensities(intensities: Map<number, number>): Promise<void> {
        return setComponentOptions("setIntensities", { intensities: intensities }, this.mapDivId, this.id);
    }
    setOpacity(opacity: number): Promise<void> {
        return setComponentOptions("setOpacity", { opacity: opacity }, this.mapDivId, this.id);
    }
    setOpacities(opacities: Map<number, number>): Promise<void> {
        return setComponentOptions("setOpacities", { opacities: opacities }, this.mapDivId, this.id);
    }
    setRadius(radius: number): Promise<void> {
        return setComponentOptions("setRadius", { radius: radius }, this.mapDivId, this.id);
    }
    setRadiuses(radiuses: Map<number, number>): Promise<void> {
        return setComponentOptions("setRadiuses", { radiuses: radiuses }, this.mapDivId, this.id);
    }
    changeDataSetId(resourceId: number): Promise<void> {
        return setComponentOptions("changeDataSetId", { resourceId: resourceId }, this.mapDivId, this.id);
    }
    getRadiusUnit(): Promise<RadiusUnit> {
        return getComponentOptions("getRadiusUnit", this.mapDivId, this.id);
    }

    getId(): string {
        return this.id;
    }

    remove(): Promise<void> {
        return asyncExec("HMSMap", "removeComponent", [this.mapDivId, this.id]);
    }

    setVisible(visible: boolean): Promise<void> {
        return setComponentOptions("setVisible", { visible: visible }, this.mapDivId, this.id);
    }

    changeDataSet(jsonData: string): Promise<void> {
        return setComponentOptions("changeDataSet", { jsonData: jsonData }, this.mapDivId, this.id);
    }

}
