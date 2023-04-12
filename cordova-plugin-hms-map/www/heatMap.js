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

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeatMapImpl = void 0;
const utils_1 = require("./utils");
class HeatMapImpl {
    constructor(mapDivId, mapCapsuleId, componentId) {
        this.mapDivId = mapDivId;
        this.mapCapsuleId = mapCapsuleId;
        this.id = componentId;
    }
    setRadiusUnit(radiusUnit) {
        return this.setComponentOptions("setRadiusUnit", { radiusUnit: radiusUnit });
    }
    setColor(color) {
        return this.setComponentOptions("setColor", { color: color });
    }
    setIntensity(intensity) {
        return this.setComponentOptions("setIntensity", { intensity: intensity });
    }
    setIntensities(intensities) {
        return this.setComponentOptions("setIntensities", { intensities: intensities });
    }
    setOpacity(opacity) {
        return this.setComponentOptions("setOpacity", { opacity: opacity });
    }
    setOpacities(opacities) {
        return this.setComponentOptions("setOpacities", { opacities: opacities });
    }
    setRadius(radius) {
        return this.setComponentOptions("setRadius", { radius: radius });
    }
    setRadiuses(radiuses) {
        return this.setComponentOptions("setRadiuses", { radiuses: radiuses });
    }
    changeDataSetId(resourceId) {
        return this.setComponentOptions("changeDataSetId", { resourceId: resourceId });
    }
    getRadiusUnit() {
        return this.getComponentOptions("getRadiusUnit");
    }
    getId() {
        return this.id;
    }
    remove() {
        return (0, utils_1.asyncExec)("HMSMap", "removeComponent", [this.mapDivId, this.id]);
    }
    setVisible(visible) {
        return this.setComponentOptions("setVisible", { visible: visible });
    }
    changeDataSet(jsonData) {
        return this.setComponentOptions("changeDataSet", { jsonData: jsonData });
    }
    setComponentOptions(func, params) {
        return (0, utils_1.asyncExec)("HMSMap", "componentOptions", [
            this.mapDivId,
            this.id,
            "set",
            func,
            params,
        ]);
    }
    getComponentOptions(func) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, utils_1.asyncExec)("HMSMap", "componentOptions", [
                this.mapDivId,
                this.id,
                "get",
                func,
                {},
            ]);
            return result.value;
        });
    }
}
exports.HeatMapImpl = HeatMapImpl;
//# sourceMappingURL=heatMap.js.map