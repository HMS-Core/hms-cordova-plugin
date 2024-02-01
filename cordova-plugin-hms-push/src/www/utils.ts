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

import { exec } from "cordova";

export function asyncExec(
    clazz: string,
    reference: string,
    args: any[] = []
): Promise<any> {
    return new Promise((resolve, reject) => {
        exec(resolve, reject, clazz, reference, args);
    });
}

type Handler = (data: any) => void;

declare global {
    interface Window {
        hmsEventHandlers: {
            [key: string]: Handler[];
        };
        hmsEventHandler: (eventName: string, data: any) => void;
        registerHMSEvent: (eventName: string, handler: Handler) => void;
        unregisterHMSEvent: (eventName: string, handler?: Handler) => void;
    }
}

function initEventHandler() {
    if (window.hmsEventHandler != null) {
        return;
    }

    if (window.hmsEventHandlers === undefined) window.hmsEventHandlers = {};

    window.hmsEventHandler = (eventName, data) => {
        if (window.hmsEventHandlers.hasOwnProperty(eventName)) {
            window.hmsEventHandlers[eventName].forEach((handler: Handler) => {
                handler(data);
            });
        }
    };

    window.registerHMSEvent = (eventName, handler) => {
        if (window.hmsEventHandlers.hasOwnProperty(eventName)) {
            window.hmsEventHandlers[eventName].push(handler);
        } else {
            window.hmsEventHandlers[eventName] = [handler];
        }
    };

    window.unregisterHMSEvent = (eventName, handler) => {
        if (window.hmsEventHandlers.hasOwnProperty(eventName)) {
            if (handler) {
                const idx = window.hmsEventHandlers[eventName].indexOf(handler);
                if (idx > -1) {
                    window.hmsEventHandlers[eventName].splice(idx, 1);
                }
            } else {
                window.hmsEventHandlers[eventName] = [];
            }
        }
    };
}
initEventHandler();
