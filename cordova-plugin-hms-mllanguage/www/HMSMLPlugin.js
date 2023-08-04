"use strict";
/*
    Copyright 2023. Huawei Technologies Co., Ltd. All rights reserved.

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
exports.disableLogger = exports.enableLogger = exports.getCountryCode = exports.setUserRegion = exports.appSetting = exports.serviceInitializer = exports.MLSpeechRealTimeTranscriptionConstants = exports.MLTtsError = exports.MLTtsAudioFragmentConstant = exports.CordovaErrors = exports.FEATURE = exports.RectStyle = exports.Colors = exports.MLAftConstants = exports.MLTtsConstants = exports.LANGUAGE = void 0;
const util_1 = require("./util");
var interfaces_1 = require("./interfaces");
Object.defineProperty(exports, "LANGUAGE", { enumerable: true, get: function () { return interfaces_1.LANGUAGE; } });
Object.defineProperty(exports, "MLTtsConstants", { enumerable: true, get: function () { return interfaces_1.MLTtsConstants; } });
Object.defineProperty(exports, "MLAftConstants", { enumerable: true, get: function () { return interfaces_1.MLAftConstants; } });
Object.defineProperty(exports, "Colors", { enumerable: true, get: function () { return interfaces_1.Colors; } });
Object.defineProperty(exports, "RectStyle", { enumerable: true, get: function () { return interfaces_1.RectStyle; } });
Object.defineProperty(exports, "FEATURE", { enumerable: true, get: function () { return interfaces_1.FEATURE; } });
Object.defineProperty(exports, "CordovaErrors", { enumerable: true, get: function () { return interfaces_1.CordovaErrors; } });
Object.defineProperty(exports, "MLTtsAudioFragmentConstant", { enumerable: true, get: function () { return interfaces_1.MLTtsAudioFragmentConstant; } });
Object.defineProperty(exports, "MLTtsError", { enumerable: true, get: function () { return interfaces_1.MLTtsError; } });
Object.defineProperty(exports, "MLSpeechRealTimeTranscriptionConstants", { enumerable: true, get: function () { return interfaces_1.MLSpeechRealTimeTranscriptionConstants; } });
function serviceInitializer(params) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLPlugin", "HMSMLApplication", [
            "serviceInitializer",
            params
        ]);
    });
}
exports.serviceInitializer = serviceInitializer;
function appSetting(appSettingReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLPlugin", "HMSMLApplication", [
            "appSetting",
            appSettingReq
        ]);
    });
}
exports.appSetting = appSetting;
/// Sets a data processing location when you choose to manually manage and specify such a location.
///
/// REGION_DR_UNKNOWN = 1001,
/// REGION_DR_CHINA = 1002,
/// REGION_DR_RUSSIA = 1005,
/// REGION_DR_GERMAN = 1006,
/// REGION_DR_SINGAPORE = 1007
function setUserRegion(region) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLPlugin", "HMSMLApplication", [
            "setUserRegion",
            region
        ]);
    });
}
exports.setUserRegion = setUserRegion;
function getCountryCode() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSMLPlugin", "HMSMLApplication", [
            "getCountryCode"
        ]);
    });
}
exports.getCountryCode = getCountryCode;
function enableLogger() {
    return (0, util_1.asyncExec)("HMSMLPlugin", "HMSMLApplication", [
        "enableLogger"
    ]);
}
exports.enableLogger = enableLogger;
function disableLogger() {
    return (0, util_1.asyncExec)("HMSMLPlugin", "HMSMLApplication", [
        "disableLogger"
    ]);
}
exports.disableLogger = disableLogger;
//# sourceMappingURL=HMSMLPlugin.js.map