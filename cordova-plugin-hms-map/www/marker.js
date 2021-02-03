/*
    Copyright 2020-2021. Huawei Technologies Co., Ltd. All rights reserved.

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
exports.MarkerImpl = void 0;
const utils_1 = require("./utils");
class MarkerImpl {
    constructor(mapDivId, mapCapsuleId, componentId) {
        this.mapDivId = mapDivId;
        this.mapCapsuleId = mapCapsuleId;
        this.id = componentId;
    }
    getAlpha() {
        return this.getComponentOptions('getAlpha');
    }
    getId() {
        return this.id;
    }
    getPosition() {
        return this.getComponentOptions('getPosition');
    }
    getRotation() {
        return this.getComponentOptions('getRotation');
    }
    getSnippet() {
        return this.getComponentOptions('getSnippet');
    }
    getTag() {
        return this.getComponentOptions('getTag');
    }
    getTitle() {
        return this.getComponentOptions('getTitle');
    }
    getZIndex() {
        return this.getComponentOptions('getZIndex');
    }
    isVisible() {
        return this.getComponentOptions('isVisible');
    }
    isClusterable() {
        return this.getComponentOptions('isClusterable');
    }
    isDraggable() {
        return this.getComponentOptions('isDraggable');
    }
    isFlat() {
        return this.getComponentOptions('isFlat');
    }
    isInfoWindowShown() {
        return this.getComponentOptions('isInfoWindowShown');
    }
    startAnimation() {
        return this.getComponentOptions('startAnimation');
    }
    remove() {
        return utils_1.asyncExec("HMSMap", "removeComponent", [this.mapDivId, this.id]);
    }
    hideInfoWindow() {
        return this.getComponentOptions("hideInfoWindow");
    }
    showInfoWindow() {
        return this.getComponentOptions("showInfoWindow");
    }
    setAlpha(alpha) {
        return this.setComponentOptions("setAlpha", { "alpha": alpha });
    }
    setAnimation(animation) {
        const _animations = {};
        if (animation.animations.has('Rotate'))
            _animations['rotateAnimation'] = {};
        if (animation.animations.has('Scale'))
            _animations['scaleAnimation'] = {};
        if (animation.animations.has('Translate'))
            _animations['translateAnimation'] = {};
        if (animation.animations.has('Alpha'))
            _animations['alphaAnimation'] = {};
        animation.animations.forEach((value, key) => {
            if (key === "Rotate" && _animations.rotateAnimation != undefined) {
                _animations.rotateAnimation.fromDegree = value.fromDegree;
                _animations.rotateAnimation.toDegree = value.toDegree;
                _animations.rotateAnimation.duration = value.duration;
                _animations.rotateAnimation.repeatCount = value.repeatCount;
                _animations.rotateAnimation.repeatMode = value.repeatMode;
                _animations.rotateAnimation.interpolator = value.interpolator;
                if (value.animationEnd)
                    _animations.rotateAnimation.isAnimationEnd = true;
                if (value.animationStart)
                    _animations.rotateAnimation.isAnimationStart = true;
            }
            else if (key === "Scale" && _animations.scaleAnimation != undefined) {
                _animations.scaleAnimation.fromX = value.fromX;
                _animations.scaleAnimation.toX = value.toX;
                _animations.scaleAnimation.fromY = value.fromY;
                _animations.scaleAnimation.toY = value.toY;
                _animations.scaleAnimation.duration = value.duration;
                _animations.scaleAnimation.repeatCount = value.repeatCount;
                _animations.scaleAnimation.repeatMode = value.repeatMode;
                _animations.scaleAnimation.interpolator = value.interpolator;
                if (value.animationEnd)
                    _animations.scaleAnimation.isAnimationEnd = true;
                if (value.animationStart)
                    _animations.scaleAnimation.isAnimationStart = true;
            }
            else if (key === "Translate" && _animations.translateAnimation != undefined) {
                _animations.translateAnimation.target = value.target;
                _animations.translateAnimation.duration = value.duration;
                _animations.translateAnimation.repeatCount = value.repeatCount;
                _animations.translateAnimation.repeatMode = value.repeatMode;
                _animations.translateAnimation.interpolator = value.interpolator;
                if (value.animationEnd)
                    _animations.translateAnimation.isAnimationEnd = true;
                if (value.animationStart)
                    _animations.translateAnimation.isAnimationStart = true;
            }
            else if (key === "Alpha" && _animations.alphaAnimation != undefined) {
                _animations.alphaAnimation.fromAlpha = value.fromAlpha;
                _animations.alphaAnimation.toAlpha = value.toAlpha;
                _animations.alphaAnimation.duration = value.duration;
                _animations.alphaAnimation.repeatCount = value.repeatCount;
                _animations.alphaAnimation.repeatMode = value.repeatMode;
                _animations.alphaAnimation.interpolator = value.interpolator;
                if (value.animationEnd)
                    _animations.alphaAnimation.isAnimationEnd = true;
                if (value.animationStart)
                    _animations.alphaAnimation.isAnimationStart = true;
            }
            let eventName = "";
            if (value.animationEnd) {
                eventName = `on${key}AnimationEnd_${this.mapCapsuleId}_${this.id}`;
                window.subscribeHMSEvent(eventName, value.animationEnd);
            }
            if (value.animationStart) {
                eventName = `on${key}AnimationStart_${this.mapCapsuleId}_${this.id}`;
                window.subscribeHMSEvent(eventName, value.animationStart);
            }
        });
        return this.setComponentOptions("setAnimation", { "animation": _animations });
    }
    setDraggable(draggable) {
        return this.setComponentOptions("setDraggable", { "draggable": draggable });
    }
    setFlat(flat) {
        return this.setComponentOptions("setFlat", { "flat": flat });
    }
    setIcon(icon) {
        return this.setComponentOptions("setIcon", { "icon": icon });
    }
    setInfoWindowAnchor(u, v) {
        return this.setComponentOptions("setInfoWindowAnchor", { "u": u, "v": v });
    }
    setMarkerAnchor(u, v) {
        return this.setComponentOptions("setMarkerAnchor", { "u": u, "v": v });
    }
    setPosition(latLng) {
        return this.setComponentOptions("setPosition", { "position": latLng });
    }
    setRotation(rotation) {
        return this.setComponentOptions("setRotation", { "rotation": rotation });
    }
    setSnippet(snippet) {
        return this.setComponentOptions("setSnippet", { "snippet": snippet });
    }
    setTitle(title) {
        return this.setComponentOptions("setTitle", { "title": title });
    }
    setTag(tag) {
        return this.setComponentOptions("setTag", { "tag": tag });
    }
    setVisible(visible) {
        return this.setComponentOptions("setVisible", { "visible": visible });
    }
    setZIndex(zIndex) {
        return this.setComponentOptions("setZIndex", { "zIndex": zIndex });
    }
    setComponentOptions(func, params) {
        return utils_1.asyncExec('HMSMap', 'componentOptions', [this.mapDivId, this.id, 'set', func, params]);
    }
    getComponentOptions(func) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield utils_1.asyncExec("HMSMap", "componentOptions", [this.mapDivId, this.id, 'get', func, {}]);
            return result.value;
        });
    }
}
exports.MarkerImpl = MarkerImpl;
//# sourceMappingURL=marker.js.map