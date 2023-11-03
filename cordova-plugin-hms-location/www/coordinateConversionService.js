/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.

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
exports.CoordinateConversionServiceImpl = void 0;

const utils_1 = require("./utils");
class CoordinateConversionServiceImpl {
    convertCoord(latitude, longitude, coordType) {
        return this.run('convertCoord', [latitude, longitude, coordType]);
    }
    run(funcName, args = []) {
        args.unshift(funcName);
        return (0, utils_1.asyncExec)('HMSLocation', "CoordinateConversionService", args);
    }
}
exports.CoordinateConversionServiceImpl = CoordinateConversionServiceImpl;
//# sourceMappingURL=coordinateConversionService.js.map