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
import { asyncExec } from "./utils";

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
        return this.setComponentOptions("setRadiusUnit", { radiusUnit: radiusUnit });
    }
    setColor(color: Map<number, Number[]>): Promise<void> {
        return this.setComponentOptions("setColor", { color: color });
    }
    setIntensity(intensity: number): Promise<void> {
        return this.setComponentOptions("setIntensity", { intensity: intensity });
    }
    setIntensities(intensities: Map<number, number>): Promise<void> {
        return this.setComponentOptions("setIntensities", { intensities: intensities });
    }
    setOpacity(opacity: number): Promise<void> {
        return this.setComponentOptions("setOpacity", { opacity: opacity });
    }
    setOpacities(opacities: Map<number, number>): Promise<void> {
        return this.setComponentOptions("setOpacities", { opacities: opacities });
    }
    setRadius(radius: number): Promise<void> {
        return this.setComponentOptions("setRadius", { radius: radius });
    }
    setRadiuses(radiuses: Map<number, number>): Promise<void> {
        return this.setComponentOptions("setRadiuses", { radiuses: radiuses });
    }
    changeDataSetId(resourceId: number): Promise<void> {
        return this.setComponentOptions("changeDataSetId", { resourceId: resourceId });
    }
    getRadiusUnit(): Promise<RadiusUnit> {
        return this.getComponentOptions("getRadiusUnit");
    }

    getId(): string {
        return this.id;
    }

    remove(): Promise<void> {
        return asyncExec("HMSMap", "removeComponent", [this.mapDivId, this.id]);
    }

    setVisible(visible: boolean): Promise<void> {
        return this.setComponentOptions("setVisible", { visible: visible });
    }

    changeDataSet(jsonData: string): Promise<void> {
        return this.setComponentOptions("changeDataSet", { jsonData: jsonData });
    }


    private setComponentOptions(func: string, params: any): Promise<any> {
        return asyncExec("HMSMap", "componentOptions", [
            this.mapDivId,
            this.id,
            "set",
            func,
            params,
        ]);
    }

    private async getComponentOptions(func: string): Promise<any> {
        const result = await asyncExec("HMSMap", "componentOptions", [
            this.mapDivId,
            this.id,
            "get",
            func,
            {},
        ]);
        return result.value;
    }

}
