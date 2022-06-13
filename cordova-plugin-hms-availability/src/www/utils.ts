/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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

export function asyncExec(clazz: string, reference: string, args: any[] = []): Promise<any> {
    return new Promise((resolve, reject) => {
        exec(resolve, reject, clazz, reference, args);
    });
}

declare global {
    interface Window {
        HMSEvents: {
            [key: string]: (data?: any) => void
        },
        runHMSEvent: (eventName: string, data?: any) => void,
        subscribeHMSEvent: (eventName: string, callback: (data: any) => void) => void

        [key: string]: any
    }
}

function initEventHandler() {
    if (window.HMSEvents != null) return;
    window.HMSEvents = {};
    window.runHMSEvent = (eventName, data) => {
        if (Object.prototype.hasOwnProperty.call(window.HMSEvents, eventName)) {
            if (data)
                window.HMSEvents[eventName](data);
            else
                window.HMSEvents[eventName]();
        }
    };
    window.subscribeHMSEvent = (eventName, handler) => {
        window.HMSEvents[eventName] = handler;
    };
}

initEventHandler()
