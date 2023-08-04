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
exports.GroundOverlayImpl = void 0;
const utils_1 = require("./utils");
class GroundOverlayImpl {
    constructor(mapDivId, mapCapsuleId, componentId) {
        this.mapDivId = mapDivId;
        this.mapCapsuleId = mapCapsuleId;
        this.id = componentId;
    }
    getBearing() {
        return (0, utils_1.getComponentOptions)("getBearing", this.mapDivId, this.id);
    }
    getBounds() {
        return (0, utils_1.getComponentOptions)("getBounds", this.mapDivId, this.id);
    }
    getHeight() {
        return (0, utils_1.getComponentOptions)("getHeight", this.mapDivId, this.id);
    }
    getId() {
        return this.id;
    }
    getPosition() {
        return (0, utils_1.getComponentOptions)("getPosition", this.mapDivId, this.id);
    }
    getTag() {
        return (0, utils_1.getComponentOptions)("getTag", this.mapDivId, this.id);
    }
    getTransparency() {
        return (0, utils_1.getComponentOptions)("getTransparency", this.mapDivId, this.id);
    }
    getWidth() {
        return (0, utils_1.getComponentOptions)("getWidth", this.mapDivId, this.id);
    }
    isClickable() {
        return (0, utils_1.getComponentOptions)("isClickable", this.mapDivId, this.id);
    }
    isVisible() {
        return (0, utils_1.getComponentOptions)("isVisible", this.mapDivId, this.id);
    }
    getZIndex() {
        return (0, utils_1.getComponentOptions)("getZIndex", this.mapDivId, this.id);
    }
    remove() {
        return (0, utils_1.asyncExec)("HMSMap", "removeComponent", [this.mapDivId, this.id]);
    }
    setBearing(bearing) {
        return (0, utils_1.setComponentOptions)("setBearing", { bearing: bearing }, this.mapDivId, this.id);
    }
    setClickable(clickable) {
        return (0, utils_1.setComponentOptions)("setClickable", { clickable: clickable }, this.mapDivId, this.id);
    }
    setDimensions(width, height) {
        return (0, utils_1.setComponentOptions)("setDimensions", { width: width, height: height }, this.mapDivId, this.id);
    }
    setImage(imageDescriptor) {
        return (0, utils_1.setComponentOptions)("setImage", { image: imageDescriptor }, this.mapDivId, this.id);
    }
    setPosition(position) {
        return (0, utils_1.setComponentOptions)("setPosition", { position: position }, this.mapDivId, this.id);
    }
    setPositionFromBounds(positionLatLngBounds) {
        return (0, utils_1.setComponentOptions)("setPositionFromBounds", { bounds: positionLatLngBounds }, this.mapDivId, this.id);
    }
    setTag(tag) {
        return (0, utils_1.setComponentOptions)("setTag", { tag: tag }, this.mapDivId, this.id);
    }
    setTransparency(transparency) {
        return (0, utils_1.setComponentOptions)("setTransparency", { transparency: transparency }, this.mapDivId, this.id);
    }
    setVisible(visible) {
        return (0, utils_1.setComponentOptions)("setVisible", { visible: visible }, this.mapDivId, this.id);
    }
    setZIndex(zIndex) {
        return (0, utils_1.setComponentOptions)("setZIndex", { zIndex: zIndex }, this.mapDivId, this.id);
    }
}
exports.GroundOverlayImpl = GroundOverlayImpl;
//# sourceMappingURL=groundOverlay.js.map