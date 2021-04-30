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

import {exec} from 'cordova';

export function asyncExec(clazz: string, func: string, args: any[] = []): Promise<any> {
    return new Promise((resolve, reject) => {
        exec(resolve, reject, clazz, func, args);
    });
}

declare global {
    interface Window {
        hmsEvents: {
            [key: string]: (data: any) => void
        },
        runHMSEvent: (eventName: string, data: any) => void,
        subscribeHMSEvent: (eventName: string, callback: (data: any) => void) => void
        [key: string]: any
    }
}

function initEventHandler() {
    if (window.hmsEvents != null) return;
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

initEventHandler()
initPlugin()

export function initalPropsOf(element: HTMLElement) {
    const clientRect = element.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(element, null);
    let props: any = {};
    props['x'] = clientRect.x;
    props['y'] = clientRect.y;
    props['width'] = parseInt(computedStyle.getPropertyValue('width'));
    props['height'] = parseInt(computedStyle.getPropertyValue('height'));
    return props;
}


export class Rect {
    readonly bottom: number;
    readonly left: number;
    readonly right: number;
    readonly top: number;

    constructor(left: number, top: number, right: number, bottom: number) {
        this.bottom = bottom;
        this.left = left;
        this.right = right;
        this.top = top;
    }

    static fromDomRect(domRect: DOMRect): Rect {
        return new Rect(domRect.left, domRect.top, domRect.right, domRect.bottom);
    }

    equals(rect: Rect): boolean {
        return rect.left == this.left
            && rect.right == this.right
            && rect.bottom == this.bottom
            && rect.top == this.top;
    }

    intersects(rect: Rect): boolean {
        const notIntersects: boolean = this.left > rect.right
            || this.top > rect.bottom
            || rect.left > this.right
            || rect.top > this.bottom;
        return !notIntersects;
    }

    contains(rect: Rect): boolean {
        return this.left <= rect.left
            && this.right >= rect.right
            && this.top <= rect.top
            && this.bottom >= rect.bottom;
    }

    hashCode(): string {
        return `${this.left}-${this.top}-${this.right}-${this.bottom}`;
    }
}
