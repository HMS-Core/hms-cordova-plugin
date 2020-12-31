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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVersion = exports.shareWifiConfig = exports.stopWifiShare = exports.startWifiShare = exports.ungetInBackground = exports.unget = exports.unput = exports.getInBackground = exports.get = exports.put = exports.setApiKey = exports.getApiKey = exports.cancelDataTransfer = exports.sendStream = exports.sendFile = exports.sendBytes = exports.disconnectAll = exports.disconnect = exports.rejectConnect = exports.acceptConnect = exports.requestConnect = exports.stopScan = exports.startScan = exports.stopBroadcasting = exports.startBroadcasting = exports.on = exports.requestPermissions = exports.requestPermission = exports.hasPermission = exports.disableLogger = exports.enableLogger = exports.PUT_OPTION_DEFAULT = exports.GET_OPTION_DEFAULT = exports.MESSAGE_POLICY_BLE_ONLY = exports.MESSAGE_POLICY_DEFAULT = exports.MESSAGE_PICKER_INCLUDE_ALL_TYPES = exports.DISTANCE_UNKNOWN = exports.MESSAGE_TYPE_I_BEACON_ID = exports.MESSAGE_TYPE_EDDYSTONE_UID = exports.MESSAGE_NAMESPACE_RESERVED = exports.MAX_TYPE_LENGTH = exports.MAX_CONTENT_SIZE = exports.MAX_SIZE_DATA = exports.PRECISION_LOW = exports.BLE_UNKNOWN_TX_POWER = exports.StatusCode = exports.WifiSharePolicy = exports.MessagePolicyTtlSeconds = exports.MessagePolicyFindingMode = exports.MessagePolicyDistanceType = exports.TransferState = exports.DataType = exports.Policy = exports.HMSPermission = exports.HMSNearbyEvent = void 0;
const utils_1 = require("./utils");
var enums_1 = require("./enums");
Object.defineProperty(exports, "HMSNearbyEvent", { enumerable: true, get: function () { return enums_1.HMSNearbyEvent; } });
Object.defineProperty(exports, "HMSPermission", { enumerable: true, get: function () { return enums_1.HMSPermission; } });
Object.defineProperty(exports, "Policy", { enumerable: true, get: function () { return enums_1.Policy; } });
Object.defineProperty(exports, "DataType", { enumerable: true, get: function () { return enums_1.DataType; } });
Object.defineProperty(exports, "TransferState", { enumerable: true, get: function () { return enums_1.TransferState; } });
Object.defineProperty(exports, "MessagePolicyDistanceType", { enumerable: true, get: function () { return enums_1.MessagePolicyDistanceType; } });
Object.defineProperty(exports, "MessagePolicyFindingMode", { enumerable: true, get: function () { return enums_1.MessagePolicyFindingMode; } });
Object.defineProperty(exports, "MessagePolicyTtlSeconds", { enumerable: true, get: function () { return enums_1.MessagePolicyTtlSeconds; } });
Object.defineProperty(exports, "WifiSharePolicy", { enumerable: true, get: function () { return enums_1.WifiSharePolicy; } });
Object.defineProperty(exports, "StatusCode", { enumerable: true, get: function () { return enums_1.StatusCode; } });
var interfaces_1 = require("./interfaces");
Object.defineProperty(exports, "BLE_UNKNOWN_TX_POWER", { enumerable: true, get: function () { return interfaces_1.BLE_UNKNOWN_TX_POWER; } });
Object.defineProperty(exports, "PRECISION_LOW", { enumerable: true, get: function () { return interfaces_1.PRECISION_LOW; } });
Object.defineProperty(exports, "MAX_SIZE_DATA", { enumerable: true, get: function () { return interfaces_1.MAX_SIZE_DATA; } });
Object.defineProperty(exports, "MAX_CONTENT_SIZE", { enumerable: true, get: function () { return interfaces_1.MAX_CONTENT_SIZE; } });
Object.defineProperty(exports, "MAX_TYPE_LENGTH", { enumerable: true, get: function () { return interfaces_1.MAX_TYPE_LENGTH; } });
Object.defineProperty(exports, "MESSAGE_NAMESPACE_RESERVED", { enumerable: true, get: function () { return interfaces_1.MESSAGE_NAMESPACE_RESERVED; } });
Object.defineProperty(exports, "MESSAGE_TYPE_EDDYSTONE_UID", { enumerable: true, get: function () { return interfaces_1.MESSAGE_TYPE_EDDYSTONE_UID; } });
Object.defineProperty(exports, "MESSAGE_TYPE_I_BEACON_ID", { enumerable: true, get: function () { return interfaces_1.MESSAGE_TYPE_I_BEACON_ID; } });
Object.defineProperty(exports, "DISTANCE_UNKNOWN", { enumerable: true, get: function () { return interfaces_1.DISTANCE_UNKNOWN; } });
Object.defineProperty(exports, "MESSAGE_PICKER_INCLUDE_ALL_TYPES", { enumerable: true, get: function () { return interfaces_1.MESSAGE_PICKER_INCLUDE_ALL_TYPES; } });
Object.defineProperty(exports, "MESSAGE_POLICY_DEFAULT", { enumerable: true, get: function () { return interfaces_1.MESSAGE_POLICY_DEFAULT; } });
Object.defineProperty(exports, "MESSAGE_POLICY_BLE_ONLY", { enumerable: true, get: function () { return interfaces_1.MESSAGE_POLICY_BLE_ONLY; } });
Object.defineProperty(exports, "GET_OPTION_DEFAULT", { enumerable: true, get: function () { return interfaces_1.GET_OPTION_DEFAULT; } });
Object.defineProperty(exports, "PUT_OPTION_DEFAULT", { enumerable: true, get: function () { return interfaces_1.PUT_OPTION_DEFAULT; } });
const CLASS_NAME = 'HMSNearby';
//////////////////// LOGGER ////////////////////
/**
 * Enables HMSLogger capability which is used for sending usage analytics of Nearby SDK's methods.
 * @returns Promise<void>
 */
function enableLogger() {
    return utils_1.asyncExec(CLASS_NAME, 'HMSNearbyBase', ['enableLogger']);
}
exports.enableLogger = enableLogger;
/**
 * Disables HMSLogger capability which is used for sending usage analytics of Nearby SDK's methods.
 * @returns Promise<void>
 */
function disableLogger() {
    return utils_1.asyncExec(CLASS_NAME, 'HMSNearbyBase', ['disableLogger']);
}
exports.disableLogger = disableLogger;
//////////////////// PERMISSIONS ////////////////////
/**
 * Checks whether permission is granted to use the services.
 * @param {HMSPermission} permission Permission.
 * @returns Promise<boolean>
 */
function hasPermission(permission) {
    return utils_1.asyncExec(CLASS_NAME, 'HMSNearbyBase', ['hasPermission', permission]);
}
exports.hasPermission = hasPermission;
/**
 * Obtains the necessary permissions to use the services.
 * @param {HMSPermission} permission Permission.
 * @returns Promise<void>
 */
function requestPermission(permission) {
    return utils_1.asyncExec(CLASS_NAME, 'HMSNearbyBase', ['requestPermission', permission]);
}
exports.requestPermission = requestPermission;
/**
 * Obtains the necessary permissions to use the services.
 * @param {HMSPermission[]} permissions Permissions List.
 * @returns Promise<void>
 */
function requestPermissions(permissions) {
    return utils_1.asyncExec(CLASS_NAME, 'HMSNearbyBase', ['requestPermissions', permissions]);
}
exports.requestPermissions = requestPermissions;
//////////////////// EVENT REGISTERATION ////////////////////
/**
 * Subscribes to Nearby events. Pass a callback to run codes when the event triggered.
 * @param {HMSNearbyEvent} event Event name.
 * @param {(res: any) => void} callback Callback to be called when the event triggered.
 */
function on(event, callback) {
    window.subscribeHMSEvent(event, callback);
}
exports.on = on;
//////////////////// DISCOVERY ////////////////////
/**
 * Starts broadcasting.
 * @param {string} name Local endpoint name.
 * @param {string} serviceId Service ID. The app package name is recommended.
 * @param {Policy} policy Object of the Policy type.
 * @returns Promise<void>
 */
function startBroadcasting(name, serviceId, policy) {
    return utils_1.asyncExec(CLASS_NAME, 'HMSDiscovery', ['startBroadcasting', name, serviceId, policy]);
}
exports.startBroadcasting = startBroadcasting;
/**
 * Stops broadcasting.
 * @returns Promise<void>
 */
function stopBroadcasting() {
    return utils_1.asyncExec(CLASS_NAME, 'HMSDiscovery', ['stopBroadcasting']);
}
exports.stopBroadcasting = stopBroadcasting;
/**
 * Starts to scan for remote endpoints with the specified service ID.
 * @param {string} serviceId Service ID. The app package name is recommended.
 * @param {Policy} policy Object of the Policy type.
 * @returns Promise<void>
 */
function startScan(serviceId, policy) {
    return utils_1.asyncExec(CLASS_NAME, 'HMSDiscovery', ['startScan', serviceId, policy]);
}
exports.startScan = startScan;
/**
 * Stops discovering devices.
 * @returns Promise<void>
 */
function stopScan() {
    return utils_1.asyncExec(CLASS_NAME, 'HMSDiscovery', ['stopScan']);
}
exports.stopScan = stopScan;
/**
 * Sends a request to connect to a remote endpoint.
 * @param {string} name Local endpoint name.
 * @param {string} endpointId ID of the remote endpoint.
 * @returns Promise<void>
 */
function requestConnect(name, endpointId) {
    return utils_1.asyncExec(CLASS_NAME, 'HMSDiscovery', ['requestConnect', name, endpointId]);
}
exports.requestConnect = requestConnect;
/**
 * Accepts a connection. This API must be called before data transmission. If the connection request is not accepted within 8 seconds, the connection fails and needs to be re-initiated.
 * @param {string} endpointId ID of the remote endpoint.
 * @returns Promise<void>
 */
function acceptConnect(endpointId) {
    return utils_1.asyncExec(CLASS_NAME, 'HMSDiscovery', ['acceptConnect', endpointId]);
}
exports.acceptConnect = acceptConnect;
/**
 * Rejects a connection request from a remote endpoint.
 * @param {string} endpointId ID of the remote endpoint.
 * @returns Promise<void>
 */
function rejectConnect(endpointId) {
    return utils_1.asyncExec(CLASS_NAME, 'HMSDiscovery', ['rejectConnect', endpointId]);
}
exports.rejectConnect = rejectConnect;
/**
 * Disconnects from a remote endpoint. Then communication with the remote endpoint is no longer available.
 * @param {string} endpointId ID of the remote endpoint.
 * @returns Promise<void>
 */
function disconnect(endpointId) {
    return utils_1.asyncExec(CLASS_NAME, 'HMSDiscovery', ['disconnect', endpointId]);
}
exports.disconnect = disconnect;
/**
 * Disconnects all connections.
 * @returns Promise<void>
 */
function disconnectAll() {
    return utils_1.asyncExec(CLASS_NAME, 'HMSDiscovery', ['disconnectAll']);
}
exports.disconnectAll = disconnectAll;
//////////////////// TRANSFER ////////////////////
/**
 * Transfers given bytes to given endpoint ids.
 * @param {number[]} bytes number array that contains your data.
 * @param {string[]} endpointIds string array of remote endpoint IDs.
 * @returns Promise<void>
 */
function sendBytes(bytes, endpointIds) {
    return utils_1.asyncExec(CLASS_NAME, 'HMSTransfer', ['sendBytes', bytes, endpointIds]);
}
exports.sendBytes = sendBytes;
/**
 * Transfers file from given URI to given endpoint ids. Transferred file is saved in subscriber's device under Downloads/Nearby/ directory with name data id.
 * @param {string} fileUri File URI.
 * @param {string[]} endpointIds string array of remote endpoint IDs.
 * @returns Promise<void>
 */
function sendFile(fileUri, endpointIds) {
    return utils_1.asyncExec(CLASS_NAME, 'HMSTransfer', ['sendFile', fileUri, endpointIds]);
}
exports.sendFile = sendFile;
/**
 * Transfers stream from given URL to given endpoint ids.
 * @param {string} streamUrl Stream URL.
 * @param {string[]} endpointIds string array of remote endpoint IDs.
 * @returns Promise<void>
 */
function sendStream(streamUrl, endpointIds) {
    return utils_1.asyncExec(CLASS_NAME, 'HMSTransfer', ['sendStream', streamUrl, endpointIds]);
}
exports.sendStream = sendStream;
/**
 * Cancels data transmission when sending or receiving data.
 * @param {string} dataId ID of the data whose transmission is to be canceled.
 * @returns Promise<void>
 */
function cancelDataTransfer(dataId) {
    return utils_1.asyncExec(CLASS_NAME, 'HMSTransfer', ['cancelDataTransfer', dataId]);
}
exports.cancelDataTransfer = cancelDataTransfer;
//////////////////// MESSAGE ////////////////////
/**
 * Obtains the current API credential.
 * @returns Promise<string> Promise result of an execution that returns the current API credential.
 */
function getApiKey() {
    return utils_1.asyncExec(CLASS_NAME, 'HMSNearbyBase', ['getApiKey']);
}
exports.getApiKey = getApiKey;
/**
 * Sets the API credential for your app.
 * @param {string} apiKey API credential.
 * @returns Promise<void>
 */
function setApiKey(apiKey) {
    return utils_1.asyncExec(CLASS_NAME, 'HMSNearbyBase', ['setApiKey', apiKey]);
}
exports.setApiKey = setApiKey;
function put(message, putOption) {
    return utils_1.asyncExec(CLASS_NAME, 'HMSMessage', ['put', message, putOption]);
}
exports.put = put;
function get(getOption) {
    return utils_1.asyncExec(CLASS_NAME, 'HMSMessage', ['get', getOption]);
}
exports.get = get;
function getInBackground(getOption) {
    return utils_1.asyncExec(CLASS_NAME, 'HMSMessage', ['getInBackground', getOption]);
}
exports.getInBackground = getInBackground;
/**
 * Cancels message publishing.
 * @param {Message} message Published message.
 * @returns Promise<void>
 */
function unput(message) {
    return utils_1.asyncExec(CLASS_NAME, 'HMSMessage', ['unput', message]);
}
exports.unput = unput;
/**
 * Cancels a message subscription.
 * @returns Promise<void>
 */
function unget() {
    return utils_1.asyncExec(CLASS_NAME, 'HMSMessage', ['unget']);
}
exports.unget = unget;
/**
 * Cancels the current message subscription.
 * @returns Promise<void>
 */
function ungetInBackground() {
    return utils_1.asyncExec(CLASS_NAME, 'HMSMessage', ['ungetInBackground']);
}
exports.ungetInBackground = ungetInBackground;
//////////////////// WIFI ////////////////////
/**
 * Enable the Wi-Fi sharing function. Set WifiSharePolicy based on function requirements.
 * @param {WifiSharePolicy} wifiSharePolicy Wi-Fi sharing policy. Enable the Wi-Fi sharing mode or configuration mode as required.
 * @returns Promise<void>
 */
function startWifiShare(wifiSharePolicy) {
    return utils_1.asyncExec(CLASS_NAME, 'HMSWifi', ['startWifiShare', wifiSharePolicy]);
}
exports.startWifiShare = startWifiShare;
/**
 * Disables the Wi-Fi sharing function.
 * @returns Promise<void>
 */
function stopWifiShare() {
    return utils_1.asyncExec(CLASS_NAME, 'HMSWifi', ['stopWifiShare']);
}
exports.stopWifiShare = stopWifiShare;
/**
 * Shares Wi-Fi with a remote device.
 * @param {string} endpointId ID of the remote endpoint.
 * @returns Promise<void>
 */
function shareWifiConfig(endpointId) {
    return utils_1.asyncExec(CLASS_NAME, 'HMSWifi', ['shareWifiConfig', endpointId]);
}
exports.shareWifiConfig = shareWifiConfig;
//////////////////// VERSION ////////////////////
/**
 * Obtains the Nearby Service SDK version number.
 * @returns Promise<string> Version number of the Nearby Service SDK.
 */
function getVersion() {
    return utils_1.asyncExec(CLASS_NAME, 'HMSNearbyBase', ['getVersion']);
}
exports.getVersion = getVersion;
//# sourceMappingURL=HMSNearby.js.map