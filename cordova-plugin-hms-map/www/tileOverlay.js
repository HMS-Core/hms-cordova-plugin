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
exports.TileOverlayImpl = void 0;
const utils_1 = require("./utils");
class TileOverlayImpl {
    constructor(mapDivId, mapCapsuleId, componentId) {
        this.mapDivId = mapDivId;
        this.mapCapsuleId = mapCapsuleId;
        this.id = componentId;
    }
    getFadeIn() {
        return (0, utils_1.getComponentOptions)("getFadeIn", this.mapDivId, this.id);
    }
    getId() {
        return this.id;
    }
    getTransparency() {
        return (0, utils_1.getComponentOptions)("getTransparency", this.mapDivId, this.id);
    }
    getZIndex() {
        return (0, utils_1.getComponentOptions)("getZIndex", this.mapDivId, this.id);
    }
    isVisible() {
        return (0, utils_1.getComponentOptions)("isVisible", this.mapDivId, this.id);
    }
    remove() {
        return (0, utils_1.asyncExec)("HMSMap", "removeComponent", [this.mapDivId, this.id]);
    }
    clearTileCache() {
        return (0, utils_1.getComponentOptions)("clearTileCache", this.mapDivId, this.id);
    }
    setFadeIn(fadeIn) {
        return (0, utils_1.setComponentOptions)("setFadeIn", { fadeIn: fadeIn }, this.mapDivId, this.id);
    }
    setTransparency(transparency) {
        return (0, utils_1.setComponentOptions)("setTransparency", { transparency: transparency }, this.mapDivId, this.id);
    }
    setZIndex(zIndex) {
        return (0, utils_1.setComponentOptions)("setZIndex", { zIndex: zIndex }, this.mapDivId, this.id);
    }
    setVisible(visible) {
        return (0, utils_1.setComponentOptions)("setVisible", { visible: visible }, this.mapDivId, this.id);
    }
}
exports.TileOverlayImpl = TileOverlayImpl;
//# sourceMappingURL=tileOverlay.js.map