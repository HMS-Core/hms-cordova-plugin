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

import {
    LatLng, BitmapDescriptor, AnimationSet, Animation,
    RotateAnimation, ScaleAnimation, TranslateAnimation, AlphaAnimation,
    _rotateAnimation, _scaleAnimation, _translateAnimation, _alphaAnimation
} from "./interfaces";
import {asyncExec} from "./utils";

export interface Marker {
    getAlpha(): Promise<number>;
    getId(): string;
    getPosition(): Promise<LatLng>;
    getRotation(): Promise<number>;
    getSnippet(): Promise<string>;
    getTag(): Promise<any>;
    getTitle(): Promise<string>;
    getZIndex(): Promise<number>;
    isVisible(): Promise<boolean>;
    isClusterable(): Promise<boolean>;
    isDraggable(): Promise<boolean>;
    isFlat(): Promise<boolean>;
    isInfoWindowShown(): Promise<boolean>;

    remove(): Promise<void>;
    hideInfoWindow(): Promise<void>;
    showInfoWindow(): Promise<void>;
    startAnimation(): Promise<void>;

    setAlpha(alpha: number): Promise<void>;
    setAnimation(animation: AnimationSet): Promise<void>;
    setDraggable(draggable: boolean): Promise<void>;
    setFlat(flat: boolean): Promise<void>;
    setIcon(icon: BitmapDescriptor): Promise<void>;
    setInfoWindowAnchor(u: number, v: number): Promise<void>;
    setMarkerAnchor(u: number, v: number): Promise<void>;
    setPosition(latLng: LatLng): Promise<void>;
    setRotation(rotation: number): Promise<void>;
    setSnippet(snippet: String): Promise<void>;
    setTitle(title: string): Promise<void>;
    setTag(tag: any): Promise<void>;
    setVisible(visible: boolean): Promise<void>;
    setZIndex(zIndex: number): Promise<void>;
}

export class MarkerImpl implements Marker {

    private readonly mapDivId: string;
    private readonly mapCapsuleId: number;
    private readonly id: string;

    constructor(mapDivId: string, mapCapsuleId: number, componentId: string) {
        this.mapDivId = mapDivId;
        this.mapCapsuleId = mapCapsuleId;

        this.id = componentId;
    }

    getAlpha(): Promise<number> {
        return this.getComponentOptions('getAlpha');
    }

    getId(): string {
        return this.id;
    }

    getPosition(): Promise<LatLng> {
        return this.getComponentOptions('getPosition');
    }

    getRotation(): Promise<number> {
        return this.getComponentOptions('getRotation');
    }

    getSnippet(): Promise<string> {
        return this.getComponentOptions('getSnippet');
    }

    getTag(): Promise<any> {
        return this.getComponentOptions('getTag');
    }

    getTitle(): Promise<string> {
        return this.getComponentOptions('getTitle');
    }

    getZIndex(): Promise<number> {
        return this.getComponentOptions('getZIndex');
    }

    isVisible(): Promise<boolean> {
        return this.getComponentOptions('isVisible');
    }

    isClusterable(): Promise<boolean> {
        return this.getComponentOptions('isClusterable');
    }

    isDraggable(): Promise<boolean> {
        return this.getComponentOptions('isDraggable');
    }

    isFlat(): Promise<boolean> {
        return this.getComponentOptions('isFlat');
    }

    isInfoWindowShown(): Promise<boolean> {
        return this.getComponentOptions('isInfoWindowShown');
    }

    startAnimation(): Promise<void> {
        return this.getComponentOptions('startAnimation');
    }

    remove(): Promise<void> {
        return asyncExec("HMSMap", "removeComponent", [this.mapDivId, this.id]);
    }

    hideInfoWindow(): Promise<void> {
        return this.getComponentOptions("hideInfoWindow");
    }

    showInfoWindow(): Promise<void> {
        return this.getComponentOptions("showInfoWindow");
    }

    setAlpha(alpha: number): Promise<void> {
        return this.setComponentOptions("setAlpha", {"alpha": alpha});
    }

    setAnimation(animation: AnimationSet): Promise<void> {

        interface _animationSet {
            rotateAnimation?: _rotateAnimation,
            scaleAnimation?: _scaleAnimation,
            translateAnimation?: _translateAnimation,
            alphaAnimation?: _alphaAnimation
        }

        const _animations = {} as _animationSet;

        if (animation.animations.has('Rotate'))
            _animations['rotateAnimation'] = {} as _rotateAnimation;
        if (animation.animations.has('Scale'))
            _animations['scaleAnimation'] = {} as _scaleAnimation;
        if (animation.animations.has('Translate'))
            _animations['translateAnimation'] = {} as _translateAnimation;
        if (animation.animations.has('Alpha'))
            _animations['alphaAnimation'] = {} as _alphaAnimation;

        animation.animations.forEach((value: Animation, key: string) => {
            if (key === "Rotate"  && _animations.rotateAnimation != undefined) {
                _animations.rotateAnimation.fromDegree = (<RotateAnimation>value).fromDegree;
                _animations.rotateAnimation.toDegree = (<RotateAnimation>value).toDegree;
                _animations.rotateAnimation.duration = value.duration;
                _animations.rotateAnimation.repeatCount = value.repeatCount;
                _animations.rotateAnimation.repeatMode = value.repeatMode;
                _animations.rotateAnimation.interpolator = value.interpolator;
                if (value.animationEnd) _animations.rotateAnimation.isAnimationEnd = true;
                if (value.animationStart) _animations.rotateAnimation.isAnimationStart = true;
            } else if (key === "Scale" && _animations.scaleAnimation != undefined) {
                _animations.scaleAnimation.fromX = (<ScaleAnimation>value).fromX;
                _animations.scaleAnimation.toX = (<ScaleAnimation>value).toX;
                _animations.scaleAnimation.fromY = (<ScaleAnimation>value).fromY;
                _animations.scaleAnimation.toY = (<ScaleAnimation>value).toY;
                _animations.scaleAnimation.duration = value.duration;
                _animations.scaleAnimation.repeatCount = value.repeatCount;
                _animations.scaleAnimation.repeatMode = value.repeatMode;
                _animations.scaleAnimation.interpolator = value.interpolator;
                if (value.animationEnd) _animations.scaleAnimation.isAnimationEnd = true;
                if (value.animationStart) _animations.scaleAnimation.isAnimationStart = true;
            } else if (key === "Translate" && _animations.translateAnimation != undefined) {
                _animations.translateAnimation.target = (<TranslateAnimation>value).target;
                _animations.translateAnimation.duration = value.duration;
                _animations.translateAnimation.repeatCount = value.repeatCount;
                _animations.translateAnimation.repeatMode = value.repeatMode;
                _animations.translateAnimation.interpolator = value.interpolator;
                if (value.animationEnd) _animations.translateAnimation.isAnimationEnd = true;
                if (value.animationStart) _animations.translateAnimation.isAnimationStart = true;
            } else if (key === "Alpha" && _animations.alphaAnimation != undefined) {
                _animations.alphaAnimation.fromAlpha = (<AlphaAnimation>value).fromAlpha;
                _animations.alphaAnimation.toAlpha = (<AlphaAnimation>value).toAlpha;
                _animations.alphaAnimation.duration = value.duration;
                _animations.alphaAnimation.repeatCount = value.repeatCount;
                _animations.alphaAnimation.repeatMode = value.repeatMode;
                _animations.alphaAnimation.interpolator = value.interpolator;
                if (value.animationEnd) _animations.alphaAnimation.isAnimationEnd = true;
                if (value.animationStart) _animations.alphaAnimation.isAnimationStart = true;
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

        return this.setComponentOptions("setAnimation", {"animation": _animations});
    }

    setDraggable(draggable: boolean): Promise<void> {
        return this.setComponentOptions("setDraggable", {"draggable": draggable});
    }

    setFlat(flat: boolean): Promise<void> {
        return this.setComponentOptions("setFlat", {"flat": flat});
    }

    setIcon(icon: BitmapDescriptor): Promise<void> {
        return this.setComponentOptions("setIcon", {"icon": icon});
    }

    setInfoWindowAnchor(u: number, v: number): Promise<void> {
        return this.setComponentOptions("setInfoWindowAnchor", {"u": u, "v": v});
    }

    setMarkerAnchor(u: number, v: number): Promise<void> {
        return this.setComponentOptions("setMarkerAnchor", {"u": u, "v": v});
    }

    setPosition(latLng: LatLng): Promise<void> {
        return this.setComponentOptions("setPosition", {"position": latLng});
    }

    setRotation(rotation: number): Promise<void> {
        return this.setComponentOptions("setRotation", {"rotation": rotation});
    }

    setSnippet(snippet: String): Promise<void> {
        return this.setComponentOptions("setSnippet", {"snippet": snippet});
    }

    setTitle(title: string): Promise<void> {
        return this.setComponentOptions("setTitle", {"title": title});
    }

    setTag(tag: any): Promise<void> {
        return this.setComponentOptions("setTag", {"tag": tag});
    }

    setVisible(visible: boolean): Promise<void> {
        return this.setComponentOptions("setVisible", {"visible": visible});
    }

    setZIndex(zIndex: number): Promise<void> {
        return this.setComponentOptions("setZIndex", {"zIndex": zIndex});
    }

    private setComponentOptions(func: string, params: any): Promise<any> {
        return asyncExec('HMSMap', 'componentOptions', [this.mapDivId, this.id, 'set', func, params]);
    }

    private async getComponentOptions(func: string): Promise<any> {
        const result = await asyncExec("HMSMap", "componentOptions", [this.mapDivId, this.id, 'get', func, {}]);
        return result.value;
    }

}
