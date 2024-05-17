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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeocoderServiceImpl = void 0;

const utils_1 = require("./utils");
class GeocoderServiceImpl {
    constructor(language, country) {
        this.language = language;
        this.country = country;
    }
    getFromLocation(getFromLocationRequest) {
        return this.run('getFromLocation', [getFromLocationRequest.latitude, getFromLocationRequest.longitude, getFromLocationRequest.maxResults, this.language, this.country]);
    }
    getFromLocationName(getFromLocationNameRequest) {
        return this.run('getFromLocationName', [getFromLocationNameRequest.locationName, getFromLocationNameRequest.maxResults, getFromLocationNameRequest.corner, this.language, this.country]);
    }
    run(funcName, args = []) {
        args.unshift(funcName);
        return (0, utils_1.asyncExec)('HMSLocation', 'GeocoderService', args);
    }
}
exports.GeocoderServiceImpl = GeocoderServiceImpl;
//# sourceMappingURL=geocoderService.js.map