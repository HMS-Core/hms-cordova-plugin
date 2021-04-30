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

Object.defineProperty(exports, "__esModule", { value: true });
exports.Rect = exports.initalPropsOf = exports.asyncExec = void 0;
const cordova_1 = require("cordova");
function asyncExec(clazz, func, args = []) {
    return new Promise((resolve, reject) => {
        cordova_1.exec(resolve, reject, clazz, func, args);
    });
}
exports.asyncExec = asyncExec;
function initEventHandler() {
    if (window.hmsEvents != null)
        return;
    window.hmsEvents = {};
    window.runHMSEvent = (eventName, data) => {
        if (window.hmsEvents.hasOwnProperty(eventName))
            window.hmsEvents[eventName](data);
    };
    window.subscribeHMSEvent = (eventName, handler) => {
        window.hmsEvents[eventName] = handler;
    };
}
function initPlugin() {
    asyncExec("HMSMap", "initPlugin", []);
}
initEventHandler();
initPlugin();
function initalPropsOf(element) {
    const clientRect = element.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(element, null);
    let props = {};
    props['x'] = clientRect.x;
    props['y'] = clientRect.y;
    props['width'] = parseInt(computedStyle.getPropertyValue('width'));
    props['height'] = parseInt(computedStyle.getPropertyValue('height'));
    return props;
}
exports.initalPropsOf = initalPropsOf;
class Rect {
    constructor(left, top, right, bottom) {
        this.bottom = bottom;
        this.left = left;
        this.right = right;
        this.top = top;
    }
    static fromDomRect(domRect) {
        return new Rect(domRect.left, domRect.top, domRect.right, domRect.bottom);
    }
    equals(rect) {
        return rect.left == this.left
            && rect.right == this.right
            && rect.bottom == this.bottom
            && rect.top == this.top;
    }
    intersects(rect) {
        const notIntersects = this.left > rect.right
            || this.top > rect.bottom
            || rect.left > this.right
            || rect.top > this.bottom;
        return !notIntersects;
    }
    contains(rect) {
        return this.left <= rect.left
            && this.right >= rect.right
            && this.top <= rect.top
            && this.bottom >= rect.bottom;
    }
    hashCode() {
        return `${this.left}-${this.top}-${this.right}-${this.bottom}`;
    }
}
exports.Rect = Rect;
//# sourceMappingURL=utils.js.map