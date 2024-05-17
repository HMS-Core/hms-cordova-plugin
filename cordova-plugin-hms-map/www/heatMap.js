/*
    Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.

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
        return (0, utils_1.setComponentOptions)("setRadiusUnit", { radiusUnit: radiusUnit }, this.mapDivId, this.id);
    }
    setColor(color) {
        return (0, utils_1.setComponentOptions)("setColor", { color: color }, this.mapDivId, this.id);
    }
    setIntensity(intensity) {
        return (0, utils_1.setComponentOptions)("setIntensity", { intensity: intensity }, this.mapDivId, this.id);
    }
    setIntensities(intensities) {
        return (0, utils_1.setComponentOptions)("setIntensities", { intensities: intensities }, this.mapDivId, this.id);
    }
    setOpacity(opacity) {
        return (0, utils_1.setComponentOptions)("setOpacity", { opacity: opacity }, this.mapDivId, this.id);
    }
    setOpacities(opacities) {
        return (0, utils_1.setComponentOptions)("setOpacities", { opacities: opacities }, this.mapDivId, this.id);
    }
    setRadius(radius) {
        return (0, utils_1.setComponentOptions)("setRadius", { radius: radius }, this.mapDivId, this.id);
    }
    setRadiuses(radiuses) {
        return (0, utils_1.setComponentOptions)("setRadiuses", { radiuses: radiuses }, this.mapDivId, this.id);
    }
    changeDataSetId(resourceId) {
        return (0, utils_1.setComponentOptions)("changeDataSetId", { resourceId: resourceId }, this.mapDivId, this.id);
    }
    getRadiusUnit() {
        return (0, utils_1.getComponentOptions)("getRadiusUnit", this.mapDivId, this.id);
    }
    getId() {
        return this.id;
    }
    remove() {
        return (0, utils_1.asyncExec)("HMSMap", "removeComponent", [this.mapDivId, this.id]);
    }
    setVisible(visible) {
        return (0, utils_1.setComponentOptions)("setVisible", { visible: visible }, this.mapDivId, this.id);
    }
    changeDataSet(jsonData) {
        return (0, utils_1.setComponentOptions)("changeDataSet", { jsonData: jsonData }, this.mapDivId, this.id);
    }
}
exports.HeatMapImpl = HeatMapImpl;
//# sourceMappingURL=heatMap.js.map