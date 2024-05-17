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
exports.MarkerImpl = void 0;
const utils_1 = require("./utils");
const animationUtils_1 = require("./animationUtils");
class MarkerImpl {
    constructor(mapDivId, mapCapsuleId, componentId) {
        this.mapDivId = mapDivId;
        this.mapCapsuleId = mapCapsuleId;
        this.id = componentId;
    }
    getAlpha() {
        return (0, utils_1.getComponentOptions)("getAlpha", this.mapDivId, this.id);
    }
    getId() {
        return this.id;
    }
    getPosition() {
        return (0, utils_1.getComponentOptions)("getPosition", this.mapDivId, this.id);
    }
    getRotation() {
        return (0, utils_1.getComponentOptions)("getRotation", this.mapDivId, this.id);
    }
    getSnippet() {
        return (0, utils_1.getComponentOptions)("getSnippet", this.mapDivId, this.id);
    }
    getTag() {
        return (0, utils_1.getComponentOptions)("getTag", this.mapDivId, this.id);
    }
    getTitle() {
        return (0, utils_1.getComponentOptions)("getTitle", this.mapDivId, this.id);
    }
    getZIndex() {
        return (0, utils_1.getComponentOptions)("getZIndex", this.mapDivId, this.id);
    }
    isVisible() {
        return (0, utils_1.getComponentOptions)("isVisible", this.mapDivId, this.id);
    }
    isClusterable() {
        return (0, utils_1.getComponentOptions)("isClusterable", this.mapDivId, this.id);
    }
    isDraggable() {
        return (0, utils_1.getComponentOptions)("isDraggable", this.mapDivId, this.id);
    }
    isFlat() {
        return (0, utils_1.getComponentOptions)("isFlat", this.mapDivId, this.id);
    }
    isInfoWindowShown() {
        return (0, utils_1.getComponentOptions)("isInfoWindowShown", this.mapDivId, this.id);
    }
    isClickable() {
        return (0, utils_1.getComponentOptions)("isClickable", this.mapDivId, this.id);
    }
    startAnimation() {
        return (0, utils_1.getComponentOptions)("startAnimation", this.mapDivId, this.id);
    }
    remove() {
        return (0, utils_1.asyncExec)("HMSMap", "removeComponent", [this.mapDivId, this.id]);
    }
    hideInfoWindow() {
        return (0, utils_1.getComponentOptions)("hideInfoWindow", this.mapDivId, this.id);
    }
    showInfoWindow() {
        return (0, utils_1.getComponentOptions)("showInfoWindow", this.mapDivId, this.id);
    }
    setAlpha(alpha) {
        return (0, utils_1.setComponentOptions)("setAlpha", { alpha: alpha }, this.mapDivId, this.id);
    }
    setAnimation(animation) {
        const _animations = (0, animationUtils_1.setAnimations)(animation, this.mapCapsuleId, this.id);
        return (0, utils_1.setComponentOptions)("setAnimation", { animation: _animations }, this.mapDivId, this.id);
    }
    setDraggable(draggable) {
        return (0, utils_1.setComponentOptions)("setDraggable", { draggable: draggable }, this.mapDivId, this.id);
    }
    setFlat(flat) {
        return (0, utils_1.setComponentOptions)("setFlat", { flat: flat }, this.mapDivId, this.id);
    }
    setIcon(icon) {
        return (0, utils_1.setComponentOptions)("setIcon", { icon: icon }, this.mapDivId, this.id);
    }
    setInfoWindowAnchor(u, v) {
        return (0, utils_1.setComponentOptions)("setInfoWindowAnchor", { u: u, v: v }, this.mapDivId, this.id);
    }
    setMarkerAnchor(u, v) {
        return (0, utils_1.setComponentOptions)("setMarkerAnchor", { u: u, v: v }, this.mapDivId, this.id);
    }
    setPosition(latLng) {
        return (0, utils_1.setComponentOptions)("setPosition", { position: latLng }, this.mapDivId, this.id);
    }
    setRotation(rotation) {
        return (0, utils_1.setComponentOptions)("setRotation", { rotation: rotation }, this.mapDivId, this.id);
    }
    setSnippet(snippet) {
        return (0, utils_1.setComponentOptions)("setSnippet", { snippet: snippet }, this.mapDivId, this.id);
    }
    setTitle(title) {
        return (0, utils_1.setComponentOptions)("setTitle", { title: title }, this.mapDivId, this.id);
    }
    setTag(tag) {
        return (0, utils_1.setComponentOptions)("setTag", { tag: tag }, this.mapDivId, this.id);
    }
    setVisible(visible) {
        return (0, utils_1.setComponentOptions)("setVisible", { visible: visible }, this.mapDivId, this.id);
    }
    setZIndex(zIndex) {
        return (0, utils_1.setComponentOptions)("setZIndex", { zIndex: zIndex }, this.mapDivId, this.id);
    }
    setClickable(clickable) {
        return (0, utils_1.setComponentOptions)("setClickable", { clickable: clickable }, this.mapDivId, this.id);
    }
}
exports.MarkerImpl = MarkerImpl;
//# sourceMappingURL=marker.js.map