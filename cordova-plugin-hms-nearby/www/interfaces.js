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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PUT_OPTION_DEFAULT = exports.GET_OPTION_DEFAULT = exports.MESSAGE_POLICY_BLE_ONLY = exports.MESSAGE_POLICY_DEFAULT = exports.MESSAGE_PICKER_INCLUDE_ALL_TYPES = exports.DISTANCE_UNKNOWN = exports.MESSAGE_TYPE_I_BEACON_ID = exports.MESSAGE_TYPE_EDDYSTONE_UID = exports.MESSAGE_NAMESPACE_RESERVED = exports.MAX_TYPE_LENGTH = exports.MAX_CONTENT_SIZE = exports.MAX_SIZE_DATA = exports.PRECISION_LOW = exports.BLE_UNKNOWN_TX_POWER = void 0;
const enums_1 = require("./enums");
exports.BLE_UNKNOWN_TX_POWER = 0x80000000;
exports.PRECISION_LOW = 1;
exports.MAX_SIZE_DATA = 32768;
exports.MAX_CONTENT_SIZE = 65536;
exports.MAX_TYPE_LENGTH = 16;
exports.MESSAGE_NAMESPACE_RESERVED = "_reserved_namespace";
exports.MESSAGE_TYPE_EDDYSTONE_UID = "_eddystone_uid";
exports.MESSAGE_TYPE_I_BEACON_ID = "_ibeacon_id";
exports.DISTANCE_UNKNOWN = {
    precision: exports.PRECISION_LOW,
    meters: NaN
};
exports.MESSAGE_PICKER_INCLUDE_ALL_TYPES = {
    includeAllTypes: true
};
exports.MESSAGE_POLICY_DEFAULT = {};
exports.MESSAGE_POLICY_BLE_ONLY = {
    ttlSeconds: enums_1.MessagePolicyTtlSeconds.POLICY_TTL_SECONDS_INFINITE,
    findingMode: enums_1.MessagePolicyFindingMode.POLICY_FINDING_MODE_SCAN
};
exports.GET_OPTION_DEFAULT = {
    picker: exports.MESSAGE_PICKER_INCLUDE_ALL_TYPES,
    policy: exports.MESSAGE_POLICY_DEFAULT
};
exports.PUT_OPTION_DEFAULT = {
    policy: exports.MESSAGE_POLICY_DEFAULT
};
//# sourceMappingURL=interfaces.js.map