"use strict";
/*
Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncExec = void 0;
/* @ts-ignore */
const cordova_1 = require("cordova");
// /////////////////////////////////////////////////////////
// INIT
// /////////////////////////////////////////////////////////
initHms();
// /////////////////////////////////////////////////////////
// EXPORTS
// /////////////////////////////////////////////////////////
function asyncExec(clazz, func, args = []) {
    return new Promise((resolve, reject) => {
        cordova_1.exec(resolve, reject, clazz, func, args);
    });
}
exports.asyncExec = asyncExec;
function initHms() {
    console.log('hms :: init called.');
    initEventHandler();
    initConstantSetter();
}
;
function initEventHandler() {
    if (window.hmsEventHandler != null) {
        return;
    }
    console.log('hms-iap :: window.hmsEventHandler');
    window.hmsEventHandlers = {};
    window.hmsEventHandler = (eventName, data) => {
        console.log('eventReceived: ' + eventName + ' with data: ', data);
        if (window.hmsEventHandlers.hasOwnProperty(eventName)) {
            window.hmsEventHandlers[eventName].forEach(handler => {
                handler(data);
            });
        }
    };
    window.registerHMSEvent = (eventName, handler) => {
        if (window.hmsEventHandlers.hasOwnProperty(eventName)) {
            window.hmsEventHandlers[eventName].push(handler);
        }
        else {
            window.hmsEventHandlers[eventName] = [handler];
        }
    };
    window.unregisterHMSEvent = (eventName, handler) => {
        if (window.hmsEventHandlers.hasOwnProperty(eventName)) {
            const idx = window.hmsEventHandlers[eventName].indexOf(handler);
            if (idx > -1) {
                window.hmsEventHandlers[eventName].splice(idx, 1);
            }
        }
    };
}
;
function initConstantSetter() {
    if (window.hmsSetConstants != null) {
        return;
    }
    console.log('hms-iap :: window.hmsSetConstants');
    window.hmsSetConstants = (objName, constants) => {
        console.log('hms-iap :: initializing constants for', objName, 'with', constants);
        if (window[objName] == null) {
            console.log('hms-iap :: uninitialized obj');
            return;
        }
        Object.keys(constants).forEach(key => {
            Object.defineProperty(window[objName], key, {
                value: constants[key]
            });
        });
    };
}
;
//# sourceMappingURL=utils.js.map