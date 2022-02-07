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
export declare function asyncExec(clazz: string, func: string, args?: any[]): Promise<any>;
declare global {
    interface Window {
        hmsEvents: {
            [key: string]: (data: any) => void;
        };
        runHMSEvent: (eventName: string, data: any) => void;
        subscribeHMSEvent: (eventName: string, callback: (data: any) => void) => void;
        [key: string]: any;
    }
}
export declare function initalPropsOf(element: HTMLElement): any;
export declare class Rect {
    readonly bottom: number;
    readonly left: number;
    readonly right: number;
    readonly top: number;
    constructor(left: number, top: number, right: number, bottom: number);
    static fromDomRect(domRect: DOMRect): Rect;
    equals(rect: Rect): boolean;
    intersects(rect: Rect): boolean;
    contains(rect: Rect): boolean;
    hashCode(): string;
}
