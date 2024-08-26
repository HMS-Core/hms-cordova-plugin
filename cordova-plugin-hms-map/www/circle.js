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
exports.CircleImpl = void 0;
const utils_1 = require("./utils");
const animationUtils_1 = require("./animationUtils");
class CircleImpl {
    constructor(mapDivId, mapCapsuleId, componentId) {
        this.mapDivId = mapDivId;
        this.mapCapsuleId = mapCapsuleId;
        this.id = componentId;
    }
    getCenter() {
        return (0, utils_1.getComponentOptions)("getCenter", this.mapDivId, this.id);
    }
    getStrokePattern() {
        return (0, utils_1.getComponentOptions)("getStrokePattern", this.mapDivId, this.id);
    }
    getFillColor() {
        return (0, utils_1.getComponentOptions)("getFillColor", this.mapDivId, this.id);
    }
    getId() {
        return this.id;
    }
    getStrokeWidth() {
        return (0, utils_1.getComponentOptions)("getStrokeWidth", this.mapDivId, this.id);
    }
    getRadius() {
        return (0, utils_1.getComponentOptions)("getRadius", this.mapDivId, this.id);
    }
    getTag() {
        return (0, utils_1.getComponentOptions)("getTag", this.mapDivId, this.id);
    }
    getStrokeColor() {
        return (0, utils_1.getComponentOptions)("getStrokeColor", this.mapDivId, this.id);
    }
    getZIndex() {
        return (0, utils_1.getComponentOptions)("getZIndex", this.mapDivId, this.id);
    }
    remove() {
        return (0, utils_1.asyncExec)("HMSMap", "removeComponent", [this.mapDivId, this.id]);
    }
    isVisible() {
        return (0, utils_1.getComponentOptions)("isVisible", this.mapDivId, this.id);
    }
    isClickable() {
        return (0, utils_1.getComponentOptions)("isClickable", this.mapDivId, this.id);
    }
    startAnimation() {
        return (0, utils_1.getComponentOptions)("startAnimation", this.mapDivId, this.id);
    }
    clearAnimation() {
        return (0, utils_1.getComponentOptions)("clearAnimation", this.mapDivId, this.id);
    }
    setCenter(center) {
        return (0, utils_1.setComponentOptions)("setCenter", { center: center }, this.mapDivId, this.id);
    }
    setFillColor(fillColor) {
        return (0, utils_1.setComponentOptions)("setFillColor", { fillColor: fillColor }, this.mapDivId, this.id);
    }
    setRadius(radius) {
        return (0, utils_1.setComponentOptions)("setRadius", { radius: radius }, this.mapDivId, this.id);
    }
    setStrokePattern(strokePattern) {
        return (0, utils_1.setComponentOptions)("setStrokePattern", { strokePattern: strokePattern }, this.mapDivId, this.id);
    }
    setStrokeColor(strokeColor) {
        return (0, utils_1.setComponentOptions)("setStrokeColor", { strokeColor: strokeColor }, this.mapDivId, this.id);
    }
    setStrokeWidth(strokeWidth) {
        return (0, utils_1.setComponentOptions)("setStrokeWidth", { strokeWidth: strokeWidth }, this.mapDivId, this.id);
    }
    setZIndex(zIndex) {
        return (0, utils_1.setComponentOptions)("setZIndex", { zIndex: zIndex }, this.mapDivId, this.id);
    }
    setTag(tag) {
        return (0, utils_1.setComponentOptions)("setTag", { tag: tag }, this.mapDivId, this.id);
    }
    setClickable(clickable) {
        return (0, utils_1.setComponentOptions)("setClickable", { clickable: clickable }, this.mapDivId, this.id);
    }
    setVisible(visible) {
        return (0, utils_1.setComponentOptions)("setVisible", { visible: visible }, this.mapDivId, this.id);
    }
    /// Only TranslateAnimation is supported.
    setAnimation(animation) {
        const _animations = (0, animationUtils_1.setAnimations)(animation, this.mapCapsuleId, this.id);
        return (0, utils_1.setComponentOptions)("setAnimation", { animation: _animations }, this.mapDivId, this.id);
    }
}
exports.CircleImpl = CircleImpl;
//# sourceMappingURL=circle.js.map