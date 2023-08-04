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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonImpl = void 0;
const utils_1 = require("./utils");
class PolygonImpl {
    constructor(mapDivId, mapCapsuleId, componentId) {
        this.mapDivId = mapDivId;
        this.mapCapsuleId = mapCapsuleId;
        this.id = componentId;
    }
    getFillColor() {
        return (0, utils_1.getComponentOptions)("getFillColor", this.mapDivId, this.id);
    }
    getHoles() {
        return (0, utils_1.getComponentOptions)("getHoles", this.mapDivId, this.id);
    }
    getId() {
        return this.id;
    }
    getPoints() {
        return (0, utils_1.getComponentOptions)("getPoints", this.mapDivId, this.id);
    }
    getStrokeColor() {
        return (0, utils_1.getComponentOptions)("getStrokeColor", this.mapDivId, this.id);
    }
    getStrokeJointType() {
        return (0, utils_1.getComponentOptions)("getStrokeJointType", this.mapDivId, this.id);
    }
    getStrokePattern() {
        return (0, utils_1.getComponentOptions)("getStrokePattern", this.mapDivId, this.id);
    }
    getStrokeWidth() {
        return (0, utils_1.getComponentOptions)("getStrokeWidth", this.mapDivId, this.id);
    }
    getTag() {
        return (0, utils_1.getComponentOptions)("getTag", this.mapDivId, this.id);
    }
    getZIndex() {
        return (0, utils_1.getComponentOptions)("getZIndex", this.mapDivId, this.id);
    }
    isClickable() {
        return (0, utils_1.getComponentOptions)("isClickable", this.mapDivId, this.id);
    }
    isVisible() {
        return (0, utils_1.getComponentOptions)("isVisible", this.mapDivId, this.id);
    }
    isGeodesic() {
        return (0, utils_1.getComponentOptions)("isGeodesic", this.mapDivId, this.id);
    }
    remove() {
        return (0, utils_1.asyncExec)("HMSMap", "removeComponent", [this.mapDivId, this.id]);
    }
    setTag(tag) {
        return (0, utils_1.setComponentOptions)("setTag", { tag: tag }, this.mapDivId, this.id);
    }
    setClickable(clickable) {
        return (0, utils_1.setComponentOptions)("setClickable", { clickable: clickable }, this.mapDivId, this.id);
    }
    setFillColor(fillColor) {
        return (0, utils_1.setComponentOptions)("setFillColor", { fillColor: fillColor }, this.mapDivId, this.id);
    }
    setGeodesic(geodesic) {
        return (0, utils_1.setComponentOptions)("setGeodesic", { geodesic: geodesic }, this.mapDivId, this.id);
    }
    setHoles(holes) {
        return (0, utils_1.setComponentOptions)("setHoles", { holes: holes }, this.mapDivId, this.id);
    }
    setVisible(visible) {
        return (0, utils_1.setComponentOptions)("setVisible", { visible: visible }, this.mapDivId, this.id);
    }
    setPoints(points) {
        return (0, utils_1.setComponentOptions)("setPoints", { points: points }, this.mapDivId, this.id);
    }
    setStrokeColor(strokeColor) {
        return (0, utils_1.setComponentOptions)("setStrokeColor", { strokeColor: strokeColor }, this.mapDivId, this.id);
    }
    setStrokeJointType(strokeJointType) {
        return (0, utils_1.setComponentOptions)("setStrokeJointType", { strokeJointType: strokeJointType }, this.mapDivId, this.id);
    }
    setStrokePattern(strokePattern) {
        return (0, utils_1.setComponentOptions)("setStrokePattern", { strokePattern: strokePattern }, this.mapDivId, this.id);
    }
    setStrokeWidth(strokeWidth) {
        return (0, utils_1.setComponentOptions)("setStrokeWidth", { strokeWidth: strokeWidth }, this.mapDivId, this.id);
    }
    setZIndex(zIndex) {
        return (0, utils_1.setComponentOptions)("setZIndex", { zIndex: zIndex }, this.mapDivId, this.id);
    }
}
exports.PolygonImpl = PolygonImpl;
//# sourceMappingURL=polygon.js.map