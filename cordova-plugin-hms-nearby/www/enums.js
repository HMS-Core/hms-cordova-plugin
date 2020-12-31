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
exports.StatusCode = exports.WifiSharePolicy = exports.MessagePolicyTtlSeconds = exports.MessagePolicyFindingMode = exports.MessagePolicyDistanceType = exports.TransferState = exports.DataType = exports.Policy = exports.HMSPermission = exports.HMSNearbyEvent = void 0;
var HMSNearbyEvent;
(function (HMSNearbyEvent) {
    HMSNearbyEvent["EVENT_CONNECTION_ON_ESTABLISH"] = "eventConnectionOnEstablish";
    HMSNearbyEvent["EVENT_CONNECTION_ON_RESULT"] = "eventConnectionOnResult";
    HMSNearbyEvent["EVENT_CONNECTION_ON_DISCONNECT"] = "eventConnectionOnDisconnect";
    HMSNearbyEvent["EVENT_SCAN_ON_FOUND"] = "eventScanOnFound";
    HMSNearbyEvent["EVENT_SCAN_ON_LOST"] = "eventScanOnLost";
    HMSNearbyEvent["EVENT_DATA_ON_RECEIVED"] = "eventDataOnReceived";
    HMSNearbyEvent["EVENT_DATA_ON_TRANSFER_UPDATE"] = "eventDataOnTransferUpdate";
    HMSNearbyEvent["EVENT_MESSAGE_ON_BLE_SIGNAL_CHANGED"] = "eventMessageOnBleSignalChanged";
    HMSNearbyEvent["EVENT_MESSAGE_ON_DISTANCE_CHANGED"] = "eventMessageOnDistanceChanged";
    HMSNearbyEvent["EVENT_MESSAGE_ON_FOUND"] = "eventMessageOnFound";
    HMSNearbyEvent["EVENT_MESSAGE_ON_LOST"] = "eventMessageOnLost";
    HMSNearbyEvent["EVENT_PUT_ON_TIMEOUT"] = "eventPutOnTimeout";
    HMSNearbyEvent["EVENT_GET_ON_TIMEOUT"] = "eventGetOnTimeout";
    HMSNearbyEvent["EVENT_STATUS_ON_PERMISSION_CHANGED"] = "eventStatusOnPermissionChanged";
    HMSNearbyEvent["EVENT_WIFI_ON_FOUND"] = "eventWifiOnFound";
    HMSNearbyEvent["EVENT_WIFI_ON_LOST"] = "eventWifiOnLost";
    HMSNearbyEvent["EVENT_WIFI_ON_FETCH_AUTH_CODE"] = "eventWifiOnFetchAuthCode";
    HMSNearbyEvent["EVENT_WIFI_ON_SHARE_RESULT"] = "eventWifiOnShareResult";
})(HMSNearbyEvent = exports.HMSNearbyEvent || (exports.HMSNearbyEvent = {}));
var HMSPermission;
(function (HMSPermission) {
    HMSPermission["PERMISSION_BLUETOOTH"] = "android.permission.BLUETOOTH";
    HMSPermission["PERMISSION_BLUETOOTH_ADMIN"] = "android.permission.BLUETOOTH_ADMIN";
    HMSPermission["PERMISSION_ACCESS_WIFI_STATE"] = "android.permission.ACCESS_WIFI_STATE";
    HMSPermission["PERMISSION_CHANGE_WIFI_STATE"] = "android.permission.CHANGE_WIFI_STATE";
    HMSPermission["PERMISSION_ACCESS_COARSE_LOCATION"] = "android.permission.ACCESS_COARSE_LOCATION";
    HMSPermission["PERMISSION_ACCESS_FINE_LOCATION"] = "android.permission.ACCESS_FINE_LOCATION";
    HMSPermission["PERMISSION_READ_EXTERNAL_STORAGE"] = "android.permission.READ_EXTERNAL_STORAGE";
    HMSPermission["PERMISSION_WRITE_EXTERNAL_STORAGE"] = "android.permission.WRITE_EXTERNAL_STORAGE";
})(HMSPermission = exports.HMSPermission || (exports.HMSPermission = {}));
var Policy;
(function (Policy) {
    Policy[Policy["POLICY_MESH"] = 1] = "POLICY_MESH";
    Policy[Policy["POLICY_P2P"] = 2] = "POLICY_P2P";
    Policy[Policy["POLICY_STAR"] = 3] = "POLICY_STAR";
})(Policy = exports.Policy || (exports.Policy = {}));
var DataType;
(function (DataType) {
    DataType[DataType["DATA_FILE"] = 1] = "DATA_FILE";
    DataType[DataType["DATA_BYTES"] = 2] = "DATA_BYTES";
    DataType[DataType["DATA_STREAM"] = 3] = "DATA_STREAM";
})(DataType = exports.DataType || (exports.DataType = {}));
var TransferState;
(function (TransferState) {
    TransferState[TransferState["TRANSFER_STATE_SUCCESS"] = 1] = "TRANSFER_STATE_SUCCESS";
    TransferState[TransferState["TRANSFER_STATE_FAILURE"] = 2] = "TRANSFER_STATE_FAILURE";
    TransferState[TransferState["TRANSFER_STATE_IN_PROGRESS"] = 3] = "TRANSFER_STATE_IN_PROGRESS";
    TransferState[TransferState["TRANSFER_STATE_CANCELED"] = 4] = "TRANSFER_STATE_CANCELED";
})(TransferState = exports.TransferState || (exports.TransferState = {}));
var MessagePolicyDistanceType;
(function (MessagePolicyDistanceType) {
    MessagePolicyDistanceType[MessagePolicyDistanceType["POLICY_DISTANCE_TYPE_DEFAULT"] = 0] = "POLICY_DISTANCE_TYPE_DEFAULT";
    MessagePolicyDistanceType[MessagePolicyDistanceType["POLICY_DISTANCE_TYPE_EARSHOT"] = 1] = "POLICY_DISTANCE_TYPE_EARSHOT";
})(MessagePolicyDistanceType = exports.MessagePolicyDistanceType || (exports.MessagePolicyDistanceType = {}));
var MessagePolicyFindingMode;
(function (MessagePolicyFindingMode) {
    MessagePolicyFindingMode[MessagePolicyFindingMode["POLICY_FINDING_MODE_DEFAULT"] = 0] = "POLICY_FINDING_MODE_DEFAULT";
    MessagePolicyFindingMode[MessagePolicyFindingMode["POLICY_FINDING_MODE_BROADCAST"] = 1] = "POLICY_FINDING_MODE_BROADCAST";
    MessagePolicyFindingMode[MessagePolicyFindingMode["POLICY_FINDING_MODE_SCAN"] = 2] = "POLICY_FINDING_MODE_SCAN";
})(MessagePolicyFindingMode = exports.MessagePolicyFindingMode || (exports.MessagePolicyFindingMode = {}));
var MessagePolicyTtlSeconds;
(function (MessagePolicyTtlSeconds) {
    MessagePolicyTtlSeconds[MessagePolicyTtlSeconds["POLICY_TTL_SECONDS_DEFAULT"] = 240] = "POLICY_TTL_SECONDS_DEFAULT";
    MessagePolicyTtlSeconds[MessagePolicyTtlSeconds["POLICY_TTL_SECONDS_MAX"] = 86400] = "POLICY_TTL_SECONDS_MAX";
    MessagePolicyTtlSeconds[MessagePolicyTtlSeconds["POLICY_TTL_SECONDS_INFINITE"] = 2147483647] = "POLICY_TTL_SECONDS_INFINITE";
})(MessagePolicyTtlSeconds = exports.MessagePolicyTtlSeconds || (exports.MessagePolicyTtlSeconds = {}));
var WifiSharePolicy;
(function (WifiSharePolicy) {
    WifiSharePolicy[WifiSharePolicy["POLICY_SHARE"] = 1] = "POLICY_SHARE";
    WifiSharePolicy[WifiSharePolicy["POLICY_SET"] = 2] = "POLICY_SET";
})(WifiSharePolicy = exports.WifiSharePolicy || (exports.WifiSharePolicy = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["STATUS_SUCCESS"] = 0] = "STATUS_SUCCESS";
    StatusCode[StatusCode["STATUS_FAILURE"] = -1] = "STATUS_FAILURE";
    StatusCode[StatusCode["STATUS_API_DISORDER"] = 8001] = "STATUS_API_DISORDER";
    StatusCode[StatusCode["STATUS_NO_NETWORK"] = 8002] = "STATUS_NO_NETWORK";
    StatusCode[StatusCode["STATUS_NOT_CONNECTED"] = 8003] = "STATUS_NOT_CONNECTED";
    StatusCode[StatusCode["STATUS_TRANSFER_IO_ERROR"] = 8004] = "STATUS_TRANSFER_IO_ERROR";
    StatusCode[StatusCode["STATUS_ALREADY_BROADCASTING"] = 8005] = "STATUS_ALREADY_BROADCASTING";
    StatusCode[StatusCode["STATUS_ALREADY_CONNECTED"] = 8006] = "STATUS_ALREADY_CONNECTED";
    StatusCode[StatusCode["STATUS_ALREADY_SCANNING"] = 8007] = "STATUS_ALREADY_SCANNING";
    StatusCode[StatusCode["STATUS_POLICY_CONFLICT"] = 8008] = "STATUS_POLICY_CONFLICT";
    StatusCode[StatusCode["STATUS_BLUETOOTH_OPERATION_FAILED"] = 8009] = "STATUS_BLUETOOTH_OPERATION_FAILED";
    StatusCode[StatusCode["STATUS_CONNECT_REJECTED"] = 8010] = "STATUS_CONNECT_REJECTED";
    StatusCode[StatusCode["STATUS_CONNECT_IO_ERROR"] = 8011] = "STATUS_CONNECT_IO_ERROR";
    StatusCode[StatusCode["STATUS_ENDPOINT_UNKNOWN"] = 8012] = "STATUS_ENDPOINT_UNKNOWN";
    StatusCode[StatusCode["STATUS_API_OCCUPIED"] = 8013] = "STATUS_API_OCCUPIED";
    StatusCode[StatusCode["STATUS_MISSING_PERMISSION_ACCESS_COARSE_LOCATION"] = 8014] = "STATUS_MISSING_PERMISSION_ACCESS_COARSE_LOCATION";
    StatusCode[StatusCode["STATUS_MISSING_PERMISSION_ACCESS_WIFI_STATE"] = 8015] = "STATUS_MISSING_PERMISSION_ACCESS_WIFI_STATE";
    StatusCode[StatusCode["STATUS_MISSING_PERMISSION_BLUETOOTH"] = 8016] = "STATUS_MISSING_PERMISSION_BLUETOOTH";
    StatusCode[StatusCode["STATUS_MISSING_PERMISSION_BLUETOOTH_ADMIN"] = 8017] = "STATUS_MISSING_PERMISSION_BLUETOOTH_ADMIN";
    StatusCode[StatusCode["STATUS_MISSING_PERMISSION_CHANGE_WIFI_STATE"] = 8018] = "STATUS_MISSING_PERMISSION_CHANGE_WIFI_STATE";
    StatusCode[StatusCode["STATUS_MISSING_PERMISSION_RECORD_AUDIO"] = 8019] = "STATUS_MISSING_PERMISSION_RECORD_AUDIO";
    StatusCode[StatusCode["STATUS_MISSING_SETTING_LOCATION_ON"] = 8020] = "STATUS_MISSING_SETTING_LOCATION_ON";
    StatusCode[StatusCode["STATUS_AIRPLANE_MODE_MUST_BE_OFF"] = 8021] = "STATUS_AIRPLANE_MODE_MUST_BE_OFF";
    StatusCode[StatusCode["STATUS_MESSAGE_APP_UNREGISTERED"] = 8050] = "STATUS_MESSAGE_APP_UNREGISTERED";
    StatusCode[StatusCode["STATUS_MESSAGE_APP_QUOTA_LIMITED"] = 8051] = "STATUS_MESSAGE_APP_QUOTA_LIMITED";
    StatusCode[StatusCode["STATUS_MESSAGE_BLE_BROADCASTING_UNSUPPORTED"] = 8052] = "STATUS_MESSAGE_BLE_BROADCASTING_UNSUPPORTED";
    StatusCode[StatusCode["STATUS_MESSAGE_BLE_SCANNING_UNSUPPORTED"] = 8053] = "STATUS_MESSAGE_BLE_SCANNING_UNSUPPORTED";
    StatusCode[StatusCode["STATUS_MESSAGE_BLUETOOTH_OFF"] = 8054] = "STATUS_MESSAGE_BLUETOOTH_OFF";
    StatusCode[StatusCode["STATUS_MESSAGE_WRONG_CONTEXT"] = 8055] = "STATUS_MESSAGE_WRONG_CONTEXT";
    StatusCode[StatusCode["STATUS_MESSAGE_NOT_ALLOW"] = 8056] = "STATUS_MESSAGE_NOT_ALLOW";
    StatusCode[StatusCode["STATUS_MESSAGE_MISSING_PERMISSIONS"] = 8057] = "STATUS_MESSAGE_MISSING_PERMISSIONS";
    StatusCode[StatusCode["STATUS_MESSAGE_AUTH_FAILED"] = 8058] = "STATUS_MESSAGE_AUTH_FAILED";
    StatusCode[StatusCode["STATUS_MESSAGE_PENDING_INTENTS_LIMITED"] = 8059] = "STATUS_MESSAGE_PENDING_INTENTS_LIMITED";
    StatusCode[StatusCode["STATUS_INTERNAL_ERROR"] = 8060] = "STATUS_INTERNAL_ERROR";
    StatusCode[StatusCode["STATUS_FINDING_MODE_ERROR"] = 8061] = "STATUS_FINDING_MODE_ERROR";
    StatusCode[StatusCode["STATUS_MESSAGE_TASK_ALREADY_IN_PROCESSING"] = 8062] = "STATUS_MESSAGE_TASK_ALREADY_IN_PROCESSING";
    StatusCode[StatusCode["STATUS_MISSING_PERMISSION_FILE_READ_WRITE"] = 8063] = "STATUS_MISSING_PERMISSION_FILE_READ_WRITE";
    StatusCode[StatusCode["STATUS_MISSING_PERMISSION_INTERNET"] = 8064] = "STATUS_MISSING_PERMISSION_INTERNET";
    StatusCode[StatusCode["STATUS_WIFI_SHARE_USER_AUTH_FAIL"] = 8065] = "STATUS_WIFI_SHARE_USER_AUTH_FAIL";
    StatusCode[StatusCode["STATUS_WIFI_SHARE_WIFI_CLOSED"] = 8066] = "STATUS_WIFI_SHARE_WIFI_CLOSED";
    StatusCode[StatusCode["STATUS_WIFI_CONNECT_FAIL"] = 8067] = "STATUS_WIFI_CONNECT_FAIL";
})(StatusCode = exports.StatusCode || (exports.StatusCode = {}));
//# sourceMappingURL=enums.js.map