"use strict";
/*
    Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

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
const cordova_1 = require("cordova");
const ScanKit = require("./Interfaces");
let HMSScan = "HMSScan";
class HMSScanAPI {
    constructor() {
        this.Colors = ScanKit.Colors;
        this.ScanTypes = ScanKit.ScanTypes;
        this.RectStyle = ScanKit.RectStyle;
    }
    requestPermissions(params) {
        return run("requestPermissions", params);
    }
    ;
    checkPermissions(params) {
        return run("checkPermissions", params);
    }
    ;
    defaultViewMode(params) {
        return run("defaultViewMode", params);
    }
    ;
    asynModeWithImage(params) {
        return run("asynModeWithImage", params);
    }
    ;
    synModeWithImage(params) {
        return run("synModeWithImage", params);
    }
    ;
    customViewMode(params) {
        return run("customViewMode", params);
    }
    ;
    decodeWithBitmap(params) {
        return run("decodeWithBitmap", params);
    }
    ;
    generateBarcode(params) {
        return run("generateBarcode", params);
    }
    ;
    bitmapMode(params) {
        return run("bitmapMode", params);
    }
    ;
    enableLogger() {
        return run("enableLogger");
    }
    ;
    disableLogger() {
        return run("disableLogger");
    }
    ;
    multiProcessorSynMode(params, success, error) {
        cordova_1.exec(success, error, "HMSScan", "multiProcessorSynMode", [params]);
    }
    ;
    multiProcessorAsynMode(params, success, error) {
        cordova_1.exec(success, error, "HMSScan", "multiProcessorAsynMode", [params]);
    }
    ;
}
function run(funcName, args) {
    return asyncExec(HMSScan, funcName, [args]);
}
function asyncExec(clasName, funcName, args = []) {
    return new Promise((resolve, reject) => {
        cordova_1.exec(resolve, reject, clasName, funcName, args);
    });
}
module.exports = new HMSScanAPI();
//# sourceMappingURL=HMSScan.js.map