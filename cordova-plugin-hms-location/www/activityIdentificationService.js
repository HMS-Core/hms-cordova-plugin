"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityIdentificationServiceImpl = void 0;
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
const utils_1 = require("./utils");
class ActivityIdentificationServiceImpl {
    createActivityConversionUpdates(requestCode, activityConversionRequest, callback) {
        if (typeof callback !== "undefined") {
            return this.run('createActivityConversionUpdates', [requestCode, activityConversionRequest, callback.toString()]);
        }
        else {
            return this.run('createActivityConversionUpdates', [requestCode, activityConversionRequest]);
        }
    }
    createActivityIdentificationUpdates(requestCode, intervalMillis, callback) {
        if (typeof callback !== "undefined") {
            return this.run('createActivityIdentificationUpdates', [requestCode, intervalMillis, callback.toString()]);
        }
        else {
            return this.run('createActivityIdentificationUpdates', [requestCode, intervalMillis]);
        }
    }
    deleteActivityConversionUpdates(requestCode) {
        return this.run('deleteActivityConversionUpdates', [requestCode]);
    }
    deleteActivityIdentificationUpdates(requestCode) {
        return this.run('deleteActivityIdentificationUpdates', [requestCode]);
    }
    hasActivityRecognitionPermission() {
        return this.run('hasActivityRecognitionPermission');
    }
    requestActivityRecognitionPermission() {
        return this.run('requestActivityRecognitionPermission');
    }
    run(funcName, args = []) {
        args.unshift(funcName);
        return utils_1.asyncExec('HMSLocation', "ActivityIdentificationService", args);
    }
}
exports.ActivityIdentificationServiceImpl = ActivityIdentificationServiceImpl;
//# sourceMappingURL=activityIdentificationService.js.map