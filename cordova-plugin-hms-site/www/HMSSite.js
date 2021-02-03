"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
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
exports.SearchServiceFactory = exports.gotoSearchActivity = exports.disableLogger = exports.enableLogger = void 0;
const utils_1 = require("./utils");
__exportStar(require("./interfaces"), exports);
const className = 'HMSSite';
const moduleName = 'HMSSiteModule';
function enableLogger() {
    return utils_1.asyncExec(className, moduleName, ['enableLogger']);
}
exports.enableLogger = enableLogger;
function disableLogger() {
    return utils_1.asyncExec(className, moduleName, ['disableLogger']);
}
exports.disableLogger = disableLogger;
function gotoSearchActivity(apiKey, searchFilter, hint) {
    return utils_1.asyncExec(className, moduleName, ['gotoSearchActivity', apiKey, searchFilter, hint]);
}
exports.gotoSearchActivity = gotoSearchActivity;
class SearchServiceFactory {
    constructor() { }
    static create(apiKey) {
        return __awaiter(this, void 0, void 0, function* () {
            return utils_1.asyncExec(className, moduleName, ['init', apiKey])
                .then(val => new SearchServiceImpl())
                .catch(err => { throw new ApiKeyException('api key is wrong.'); });
        });
    }
}
exports.SearchServiceFactory = SearchServiceFactory;
class ApiKeyException extends Error {
}
class SearchServiceImpl {
    detailSearch(detailSearchReq) {
        return this.exec(['detailSearch', detailSearchReq]);
    }
    nearbySearch(nearbySearchReq) {
        return this.exec(['nearbySearch', nearbySearchReq]);
    }
    queryAutocomplete(autocompleteReq) {
        return this.exec(['queryAutocomplete', autocompleteReq]);
    }
    querySuggestion(querySuggestionReq) {
        return this.exec(['querySuggestion', querySuggestionReq]);
    }
    textSearch(textSearchReq) {
        return this.exec(['textSearch', textSearchReq]);
    }
    exec(args) {
        return utils_1.asyncExec(className, moduleName, args);
    }
}
//# sourceMappingURL=HMSSite.js.map