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
exports.setAnimations = void 0;
function setAnimations(animation, mapCapsuleId, id) {
    const animations = {};
    if (animation.animations.has("Rotate"))
        animations["rotateAnimation"] = {};
    if (animation.animations.has("Scale"))
        animations["scaleAnimation"] = {};
    if (animation.animations.has("Translate"))
        animations["translateAnimation"] = {};
    if (animation.animations.has("Alpha"))
        animations["alphaAnimation"] = {};
    animation.animations.forEach((value, key) => {
        if (key === "Rotate" && animations.rotateAnimation != undefined) {
            animations.rotateAnimation.fromDegree = (value).fromDegree;
            animations.rotateAnimation.toDegree = (value).toDegree;
            animations.rotateAnimation.fillMode = value.fillMode;
            animations.rotateAnimation.duration = value.duration;
            animations.rotateAnimation.repeatCount = value.repeatCount;
            animations.rotateAnimation.repeatMode = value.repeatMode;
            animations.rotateAnimation.interpolator = value.interpolator;
            if (value.animationEnd)
                animations.rotateAnimation.isAnimationEnd = true;
            if (value.animationStart)
                animations.rotateAnimation.isAnimationStart = true;
        }
        else if (key === "Scale" &&
            animations.scaleAnimation != undefined) {
            animations.scaleAnimation.fromX = (value).fromX;
            animations.scaleAnimation.toX = value.toX;
            animations.scaleAnimation.fromY = (value).fromY;
            animations.scaleAnimation.toY = value.toY;
            animations.scaleAnimation.fillMode = value.fillMode;
            animations.scaleAnimation.duration = value.duration;
            animations.scaleAnimation.repeatCount = value.repeatCount;
            animations.scaleAnimation.repeatMode = value.repeatMode;
            animations.scaleAnimation.interpolator = value.interpolator;
            if (value.animationEnd)
                animations.scaleAnimation.isAnimationEnd = true;
            if (value.animationStart)
                animations.scaleAnimation.isAnimationStart = true;
        }
        else if (key === "Translate" &&
            animations.translateAnimation != undefined) {
            animations.translateAnimation.target = (value).target;
            animations.translateAnimation.fillMode = value.fillMode;
            animations.translateAnimation.duration = value.duration;
            animations.translateAnimation.repeatCount = value.repeatCount;
            animations.translateAnimation.repeatMode = value.repeatMode;
            animations.translateAnimation.interpolator =
                value.interpolator;
            if (value.animationEnd)
                animations.translateAnimation.isAnimationEnd = true;
            if (value.animationStart)
                animations.translateAnimation.isAnimationStart = true;
        }
        else if (key === "Alpha" &&
            animations.alphaAnimation != undefined) {
            animations.alphaAnimation.fromAlpha = (value).fromAlpha;
            animations.alphaAnimation.toAlpha = (value).toAlpha;
            animations.alphaAnimation.fillMode = value.fillMode;
            animations.alphaAnimation.duration = value.duration;
            animations.alphaAnimation.repeatCount = value.repeatCount;
            animations.alphaAnimation.repeatMode = value.repeatMode;
            animations.alphaAnimation.interpolator = value.interpolator;
            if (value.animationEnd)
                animations.alphaAnimation.isAnimationEnd = true;
            if (value.animationStart)
                animations.alphaAnimation.isAnimationStart = true;
        }
        let eventName = "";
        if (value.animationEnd) {
            eventName = `on${key}AnimationEnd_${mapCapsuleId}_${id}`;
            window.subscribeHMSEvent(eventName, value.animationEnd);
        }
        if (value.animationStart) {
            eventName = `on${key}AnimationStart_${mapCapsuleId}_${id}`;
            window.subscribeHMSEvent(eventName, value.animationStart);
        }
    });
    return animations;
}
exports.setAnimations = setAnimations;
//# sourceMappingURL=animationUtils.js.map