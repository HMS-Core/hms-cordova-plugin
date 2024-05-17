/*
 * Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from "@awesome-cordova-plugins/core";
var HMSNearbyOriginal = /** @class */ (function (_super) {
    __extends(HMSNearbyOriginal, _super);
    function HMSNearbyOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Enables HMSLogger capability which is used for sending usage analytics of Nearby SDK's methods.
     * @returns Promise<void>
     */
    HMSNearbyOriginal.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    /**
     * Disables HMSLogger capability which is used for sending usage analytics of Nearby SDK's methods.
     * @returns Promise<void>
     */
    HMSNearbyOriginal.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    /**
     * Checks whether permission is granted to use the services.
     * @param {HMSPermission} permission Permission.
     * @returns Promise<boolean>
     */
    HMSNearbyOriginal.prototype.hasPermission = function (permission) { return cordova(this, "hasPermission", { "otherPromise": true }, arguments); };
    /**
     * Obtains the necessary permissions to use the services.
     * @param {HMSPermission} permission Permission.
     * @returns Promise<void>
     */
    HMSNearbyOriginal.prototype.requestPermission = function (permission) { return cordova(this, "requestPermission", { "otherPromise": true }, arguments); };
    /**
     * Obtains the necessary permissions to use the services.
     * @param {HMSPermission[]} permissions Permissions List.
     * @returns Promise<void>
     */
    HMSNearbyOriginal.prototype.requestPermissions = function (permissions) { return cordova(this, "requestPermissions", { "otherPromise": true }, arguments); };
    /**
     * Subscribes to Nearby events. Pass a callback to run codes when the event triggered.
     * @param {HMSNearbyEvent} event Event name.
     * @param {(res: any) => void} callback Callback to be called when the event triggered.
     */
    HMSNearbyOriginal.prototype.on = function (event, callback) { return cordova(this, "on", {}, arguments); };
    /**
     * Starts broadcasting.
     * @param {string} name Local endpoint name.
     * @param {string} serviceId Service ID. The app package name is recommended.
     * @param {Policy} policy Object of the Policy type.
     * @returns Promise<void>
     */
    HMSNearbyOriginal.prototype.startBroadcasting = function (name, serviceId, policy) { return cordova(this, "startBroadcasting", { "otherPromise": true }, arguments); };
    /**
     * Stops broadcasting.
     * @returns Promise<void>
     */
    HMSNearbyOriginal.prototype.stopBroadcasting = function () { return cordova(this, "stopBroadcasting", { "otherPromise": true }, arguments); };
    /**
     * Starts to scan for remote endpoints with the specified service ID.
     * @param {string} serviceId Service ID. The app package name is recommended.
     * @param {Policy} policy Object of the Policy type.
     * @returns Promise<void>
     */
    HMSNearbyOriginal.prototype.startScan = function (serviceId, policy) { return cordova(this, "startScan", { "otherPromise": true }, arguments); };
    /**
     * Stops discovering devices.
     * @returns Promise<void>
     */
    HMSNearbyOriginal.prototype.stopScan = function () { return cordova(this, "stopScan", { "otherPromise": true }, arguments); };
    /**
     * Sends a request to connect to a remote endpoint.
     * @param {string} name Local endpoint name.
     * @param {string} endpointId ID of the remote endpoint.
     * @returns Promise<void>
     */
    HMSNearbyOriginal.prototype.requestConnect = function (name, endpointId) { return cordova(this, "requestConnect", { "otherPromise": true }, arguments); };
    /**
     * Sends a request to connect to a remote endpoint.
     * @param {string} name Local endpoint name.
     * @param {string} endpointId ID of the remote endpoint.
     * @param {ChannelPolicy} channelPolicy Channel policy, which is used to select the channel for establishing a connection.
     * @returns Promise<void>
     */
    HMSNearbyOriginal.prototype.requestConnectEx = function (name, endpointId, channelPolicy) { return cordova(this, "requestConnectEx", { "otherPromise": true }, arguments); };
    /**
     * Accepts a connection. This API must be called before data transmission. If the connection request is not accepted within 8 seconds, the connection fails and needs to be re-initiated.
     * @param {string} endpointId ID of the remote endpoint.
     * @returns Promise<void>
     */
    HMSNearbyOriginal.prototype.acceptConnect = function (endpointId) { return cordova(this, "acceptConnect", { "otherPromise": true }, arguments); };
    /**
     * Rejects a connection request from a remote endpoint.
     * @param {string} endpointId ID of the remote endpoint.
     * @returns Promise<void>
     */
    HMSNearbyOriginal.prototype.rejectConnect = function (endpointId) { return cordova(this, "rejectConnect", { "otherPromise": true }, arguments); };
    /**
     * Disconnects from a remote endpoint. Then communication with the remote endpoint is no longer available.
     * @param {string} endpointId ID of the remote endpoint.
     * @returns Promise<void>
     */
    HMSNearbyOriginal.prototype.disconnect = function (endpointId) { return cordova(this, "disconnect", { "otherPromise": true }, arguments); };
    /**
     * Disconnects all connections.
     * @returns Promise<void>
     */
    HMSNearbyOriginal.prototype.disconnectAll = function () { return cordova(this, "disconnectAll", { "otherPromise": true }, arguments); };
    /**
     * Transfers given bytes to given endpoint ids.
     * @param {number[]} bytes number array that contains your data.
     * @param {string[]} endpointIds string array of remote endpoint IDs.
     * @returns Promise<void>
     */
    HMSNearbyOriginal.prototype.sendBytes = function (bytes, endpointIds) { return cordova(this, "sendBytes", { "otherPromise": true }, arguments); };
    /**
     * Transfers file from given URI to given endpoint ids. Transferred file is saved in subscriber's device under Downloads/Nearby/ directory with name data id.
     * @param {string} fileUri File URI.
     * @param {string[]} endpointIds string array of remote endpoint IDs.
     * @returns Promise<void>
     */
    HMSNearbyOriginal.prototype.sendFile = function (fileUri, endpointIds) { return cordova(this, "sendFile", { "otherPromise": true }, arguments); };
    /**
     * Transfers stream from given URL to given endpoint ids.
     * @param {string} streamUrl Stream URL.
     * @param {string[]} endpointIds string array of remote endpoint IDs.
     * @returns Promise<void>
     */
    HMSNearbyOriginal.prototype.sendStream = function (streamUrl, endpointIds) { return cordova(this, "sendStream", { "otherPromise": true }, arguments); };
    /**
     * Cancels data transmission when sending or receiving data.
     * @param {string} dataId ID of the data whose transmission is to be canceled.
     * @returns Promise<void>
     */
    HMSNearbyOriginal.prototype.cancelDataTransfer = function (dataId) { return cordova(this, "cancelDataTransfer", { "otherPromise": true }, arguments); };
    /**
     * Obtains the current API credential.
     * @returns Promise<string> Promise result of an execution that returns the current API credential.
     */
    HMSNearbyOriginal.prototype.getApiKey = function () { return cordova(this, "getApiKey", { "otherPromise": true }, arguments); };
    /**
     * Sets the API credential for your app.
     * @param {string} apiKey API credential.
     * @returns Promise<void>
     */
    HMSNearbyOriginal.prototype.setApiKey = function (apiKey) { return cordova(this, "setApiKey", { "otherPromise": true }, arguments); };
    HMSNearbyOriginal.prototype.put = function (message, putOption) { return cordova(this, "put", { "otherPromise": true }, arguments); };
    HMSNearbyOriginal.prototype.get = function (getOption) { return cordova(this, "get", { "otherPromise": true }, arguments); };
    HMSNearbyOriginal.prototype.getInBackground = function (getOption) { return cordova(this, "getInBackground", { "otherPromise": true }, arguments); };
    /**
     * Cancels message publishing.
     * @param {Message} message Published message.
     * @returns Promise<void>
     */
    HMSNearbyOriginal.prototype.unput = function (message) { return cordova(this, "unput", { "otherPromise": true }, arguments); };
    /**
     * Cancels a message subscription.
     * @returns Promise<void>
     */
    HMSNearbyOriginal.prototype.unget = function () { return cordova(this, "unget", { "otherPromise": true }, arguments); };
    /**
     * Cancels the current message subscription.
     * @returns Promise<void>
     */
    HMSNearbyOriginal.prototype.ungetInBackground = function () { return cordova(this, "ungetInBackground", { "otherPromise": true }, arguments); };
    HMSNearbyOriginal.prototype.registerScanTask = function (beaconOption) { return cordova(this, "registerScanTask", { "otherPromise": true }, arguments); };
    HMSNearbyOriginal.prototype.unRegisterScanTask = function () { return cordova(this, "unRegisterScanTask", { "otherPromise": true }, arguments); };
    HMSNearbyOriginal.prototype.getBeaconMsgConditions = function () { return cordova(this, "getBeaconMsgConditions", { "otherPromise": true }, arguments); };
    HMSNearbyOriginal.prototype.getRawBeaconConditions = function () { return cordova(this, "getRawBeaconConditions", { "otherPromise": true }, arguments); };
    HMSNearbyOriginal.prototype.getRawBeaconConditionsWithBeaconType = function (beaconType) { return cordova(this, "getRawBeaconConditionsWithBeaconType", { "otherPromise": true }, arguments); };
    /**
     * Obtains the Nearby Service SDK version number.
     * @returns Promise<string> Version number of the Nearby Service SDK.
     */
    HMSNearbyOriginal.prototype.getVersion = function () { return cordova(this, "getVersion", { "otherPromise": true }, arguments); };
    HMSNearbyOriginal.pluginName = "HMSNearby";
    HMSNearbyOriginal.plugin = "cordova-plugin-hms-nearby";
    HMSNearbyOriginal.pluginRef = "HMSNearby";
    HMSNearbyOriginal.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSNearbyOriginal.platforms = ["Android"];
    return HMSNearbyOriginal;
}(AwesomeCordovaNativePlugin));
var HMSNearby = new HMSNearbyOriginal();
export { HMSNearby };
export var HMSNearbyEvent;
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
})(HMSNearbyEvent || (HMSNearbyEvent = {}));
export var HMSPermission;
(function (HMSPermission) {
    HMSPermission["PERMISSION_BLUETOOTH"] = "android.permission.BLUETOOTH";
    HMSPermission["PERMISSION_BLUETOOTH_ADMIN"] = "android.permission.BLUETOOTH_ADMIN";
    HMSPermission["PERMISSION_ACCESS_COARSE_LOCATION"] = "android.permission.ACCESS_COARSE_LOCATION";
    HMSPermission["PERMISSION_ACCESS_FINE_LOCATION"] = "android.permission.ACCESS_FINE_LOCATION";
    HMSPermission["PERMISSION_READ_EXTERNAL_STORAGE"] = "android.permission.READ_EXTERNAL_STORAGE";
    HMSPermission["PERMISSION_WRITE_EXTERNAL_STORAGE"] = "android.permission.WRITE_EXTERNAL_STORAGE";
    HMSPermission["PERMISSION_ACCESS_WIFI_STATE"] = "android.permission.ACCESS_WIFI_STATE";
    HMSPermission["PERMISSION_CHANGE_WIFI_STATE"] = "android.permission.CHANGE_WIFI_STATE";
})(HMSPermission || (HMSPermission = {}));
export var Policy;
(function (Policy) {
    Policy[Policy["POLICY_MESH"] = 1] = "POLICY_MESH";
    Policy[Policy["POLICY_P2P"] = 2] = "POLICY_P2P";
    Policy[Policy["POLICY_STAR"] = 3] = "POLICY_STAR";
})(Policy || (Policy = {}));
export var DataType;
(function (DataType) {
    DataType[DataType["DATA_FILE"] = 1] = "DATA_FILE";
    DataType[DataType["DATA_BYTES"] = 2] = "DATA_BYTES";
    DataType[DataType["DATA_STREAM"] = 3] = "DATA_STREAM";
})(DataType || (DataType = {}));
export var TransferState;
(function (TransferState) {
    TransferState[TransferState["TRANSFER_STATE_SUCCESS"] = 1] = "TRANSFER_STATE_SUCCESS";
    TransferState[TransferState["TRANSFER_STATE_FAILURE"] = 2] = "TRANSFER_STATE_FAILURE";
    TransferState[TransferState["TRANSFER_STATE_IN_PROGRESS"] = 3] = "TRANSFER_STATE_IN_PROGRESS";
    TransferState[TransferState["TRANSFER_STATE_CANCELED"] = 4] = "TRANSFER_STATE_CANCELED";
})(TransferState || (TransferState = {}));
export var MessagePolicyDistanceType;
(function (MessagePolicyDistanceType) {
    MessagePolicyDistanceType[MessagePolicyDistanceType["POLICY_DISTANCE_TYPE_DEFAULT"] = 0] = "POLICY_DISTANCE_TYPE_DEFAULT";
    MessagePolicyDistanceType[MessagePolicyDistanceType["POLICY_DISTANCE_TYPE_EARSHOT"] = 1] = "POLICY_DISTANCE_TYPE_EARSHOT";
})(MessagePolicyDistanceType || (MessagePolicyDistanceType = {}));
export var MessagePolicyFindingMode;
(function (MessagePolicyFindingMode) {
    MessagePolicyFindingMode[MessagePolicyFindingMode["POLICY_FINDING_MODE_DEFAULT"] = 0] = "POLICY_FINDING_MODE_DEFAULT";
    MessagePolicyFindingMode[MessagePolicyFindingMode["POLICY_FINDING_MODE_BROADCAST"] = 1] = "POLICY_FINDING_MODE_BROADCAST";
    MessagePolicyFindingMode[MessagePolicyFindingMode["POLICY_FINDING_MODE_SCAN"] = 2] = "POLICY_FINDING_MODE_SCAN";
})(MessagePolicyFindingMode || (MessagePolicyFindingMode = {}));
export var MessagePolicyTtlSeconds;
(function (MessagePolicyTtlSeconds) {
    MessagePolicyTtlSeconds[MessagePolicyTtlSeconds["POLICY_TTL_SECONDS_DEFAULT"] = 240] = "POLICY_TTL_SECONDS_DEFAULT";
    MessagePolicyTtlSeconds[MessagePolicyTtlSeconds["POLICY_TTL_SECONDS_MAX"] = 86400] = "POLICY_TTL_SECONDS_MAX";
    MessagePolicyTtlSeconds[MessagePolicyTtlSeconds["POLICY_TTL_SECONDS_INFINITE"] = 2147483647] = "POLICY_TTL_SECONDS_INFINITE";
})(MessagePolicyTtlSeconds || (MessagePolicyTtlSeconds = {}));
export var ChannelPolicy;
(function (ChannelPolicy) {
    ChannelPolicy[ChannelPolicy["CHANNEL_AUTO"] = 1] = "CHANNEL_AUTO";
    ChannelPolicy[ChannelPolicy["CHANNEL_HIGH_THROUGHPUT"] = 2] = "CHANNEL_HIGH_THROUGHPUT";
    ChannelPolicy[ChannelPolicy["CHANNEL_INSTANCE"] = 3] = "CHANNEL_INSTANCE";
})(ChannelPolicy || (ChannelPolicy = {}));
export var StatusCode;
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
    StatusCode[StatusCode["STATUS_MISSING_PERMISSION_BLUETOOTH"] = 8016] = "STATUS_MISSING_PERMISSION_BLUETOOTH";
    StatusCode[StatusCode["STATUS_MISSING_PERMISSION_BLUETOOTH_ADMIN"] = 8017] = "STATUS_MISSING_PERMISSION_BLUETOOTH_ADMIN";
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
})(StatusCode || (StatusCode = {}));
export var BLE_UNKNOWN_TX_POWER = 0x80000000;
export var PRECISION_LOW = 1;
export var MAX_SIZE_DATA = 32768;
export var MAX_CONTENT_SIZE = 65536;
export var MAX_TYPE_LENGTH = 16;
export var MESSAGE_NAMESPACE_RESERVED = "_reserved_namespace";
export var MESSAGE_TYPE_EDDYSTONE_UID = "_eddystone_uid";
export var MESSAGE_TYPE_I_BEACON_ID = "_ibeacon_id";
export var DISTANCE_UNKNOWN = {
    precision: PRECISION_LOW,
    meters: NaN,
};
export var MESSAGE_PICKER_INCLUDE_ALL_TYPES = {
    includeAllTypes: true,
};
export var MESSAGE_POLICY_DEFAULT = {};
export var MESSAGE_POLICY_BLE_ONLY = {
    ttlSeconds: MessagePolicyTtlSeconds.POLICY_TTL_SECONDS_INFINITE,
    findingMode: MessagePolicyFindingMode.POLICY_FINDING_MODE_SCAN,
};
export var GET_OPTION_DEFAULT = {
    picker: MESSAGE_PICKER_INCLUDE_ALL_TYPES,
    policy: MESSAGE_POLICY_DEFAULT,
};
export var PUT_OPTION_DEFAULT = {
    policy: MESSAGE_POLICY_DEFAULT,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmF0aXZlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQStCN0QsNkJBQTBCOzs7O0lBSXJEOzs7T0FHRztJQUNILGdDQUFZO0lBS1o7OztPQUdHO0lBQ0gsaUNBQWE7SUFPYjs7OztPQUlHO0lBQ0gsaUNBQWEsYUFBQyxVQUF5QjtJQUt2Qzs7OztPQUlHO0lBQ0gscUNBQWlCLGFBQUMsVUFBeUI7SUFLM0M7Ozs7T0FJRztJQUNILHNDQUFrQixhQUFDLFdBQTRCO0lBTy9DOzs7O09BSUc7SUFDSCxzQkFBRSxhQUFDLEtBQXFCLEVBQUUsUUFBNEI7SUFPdEQ7Ozs7OztPQU1HO0lBQ0gscUNBQWlCLGFBQ2IsSUFBWSxFQUNaLFNBQWlCLEVBQ2pCLE1BQWM7SUFNbEI7OztPQUdHO0lBQ0gsb0NBQWdCO0lBS2hCOzs7OztPQUtHO0lBQ0gsNkJBQVMsYUFBQyxTQUFpQixFQUFFLE1BQWM7SUFLM0M7OztPQUdHO0lBQ0gsNEJBQVE7SUFLUjs7Ozs7T0FLRztJQUNILGtDQUFjLGFBQUMsSUFBWSxFQUFFLFVBQWtCO0lBSy9DOzs7Ozs7T0FNRztJQUNILG9DQUFnQixhQUNaLElBQVksRUFDWixVQUFrQixFQUNsQixhQUE0QjtJQU1oQzs7OztPQUlHO0lBQ0gsaUNBQWEsYUFBQyxVQUFrQjtJQUtoQzs7OztPQUlHO0lBQ0gsaUNBQWEsYUFBQyxVQUFrQjtJQUtoQzs7OztPQUlHO0lBQ0gsOEJBQVUsYUFBQyxVQUFrQjtJQUs3Qjs7O09BR0c7SUFDSCxpQ0FBYTtJQU9iOzs7OztPQUtHO0lBQ0gsNkJBQVMsYUFBQyxLQUFlLEVBQUUsV0FBcUI7SUFLaEQ7Ozs7O09BS0c7SUFDSCw0QkFBUSxhQUFDLE9BQWUsRUFB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QW9CLEdBQVcsVUFBVSxDQUFDO0FBQ3ZELE1BQU0sQ0FBQyxJQUFNLGFBQWEsR0FBVyxDQUFDLENBQUM7QUFDdkMsTUFBTSxDQUFDLElBQU0sYUFBYSxHQUFXLEtBQUssQ0FBQztBQUMzQyxNQUFNLENBQUMsSUFBTSxnQkFBZ0IsR0FBVyxLQUFLLENBQUM7QUFDOUMsTUFBTSxDQUFDLElBQU0sZUFBZSxHQUFXLEVBQUUsQ0FBQztBQUMxQyxNQUFNLENBQUMsSUFBTSwwQkFBMEIsR0FBVyxxQkFBcUIsQ0FBQztBQUN4RSxNQUFNLENBQUMsSUFBTSwwQkFBMEIsR0FBVyxnQkFBZ0IsQ0FBQztBQUNuRSxNQUFNLENBQUMsSUFBTSx3QkFBd0IsR0FBVyxhQUFhLENBQUM7QUFDOUQsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQWE7SUFDdEMsU0FBUyxFQUFFLGFBQWE7SUFDeEIsTUFBTSxFQUFFLEdBQUc7Q0FDZCxDQUFDO0FBQ0YsTUFBTSxDQUFDLElBQU0sZ0NBQWdDLEdBQWtCO0lBQzNELGVBQWUsRUFBRSxJQUFJO0NBQ3hCLENBQUM7QUFDRixNQUFNLENBQUMsSUFBTSxzQkFBc0IsR0FBa0IsRUFBRSxDQUFDO0FBQ3hELE1BQU0sQ0FBQyxJQUFNLHVCQUF1QixHQUFrQjtJQUNsRCxVQUFVLEVBQUUsdUJBQXVCLENBQUMsMkJBQTJCO0lBQy9ELFdBQVcsRUFBRSx3QkFBd0IsQ0FBQyx3QkFBd0I7Q0FDakUsQ0FBQztBQUNGLE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUFjO0lBQ3pDLE1BQU0sRUFBRSxnQ0FBZ0M7SUFDeEMsTUFBTSxFQUFFLHNCQUFzQjtDQUNqQyxDQUFDO0FBQ0YsTUFBTSxDQUFDLElBQU0sa0JBQWtCLEdBQWM7SUFDekMsTUFBTSxFQUFFLHNCQUFzQjtDQUNqQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIENvcHlyaWdodCAyMDIwLTIwMjQuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxyXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tIFwiQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmVcIjtcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBITVNOZWFyYnlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoZSBDb3Jkb3ZhIE5lYXJieSBQbHVnaW4gZW5hYmxlcyBjb21tdW5pY2F0aW9uIGJldHdlZW4gSHVhd2VpIE5lYXJieSBLaXQgU0RLIGFuZCBDb3Jkb3ZhIHBsYXRmb3JtLiBUaGlzIHBsdWdpbiBleHBvc2VzIGFsbCBmdW5jdGlvbmFsaXR5IHByb3ZpZGVkIGJ5IEh1YXdlaSBOZWFyYnkgS2l0IFNESy5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgSE1TTmVhcmJ5IH0gZnJvbSAnQGhtc2NvcmUvaW9uaWMtbmF0aXZlLWhtcy1uZWFyYnknO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGhtc05lYXJieTogSE1TTmVhcmJ5KSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuaG1zTmVhcmJ5LmZ1bmN0aW9uTmFtZSgnSGVsbG8nLCAxMjMpXHJcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gICAgcGx1Z2luTmFtZTogXCJITVNOZWFyYnlcIixcclxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtbmVhcmJ5XCIsXHJcbiAgICBwbHVnaW5SZWY6IFwiSE1TTmVhcmJ5XCIsXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcclxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TTmVhcmJ5IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8gTE9HR0VSIC8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogRW5hYmxlcyBITVNMb2dnZXIgY2FwYWJpbGl0eSB3aGljaCBpcyB1c2VkIGZvciBzZW5kaW5nIHVzYWdlIGFuYWx5dGljcyBvZiBOZWFyYnkgU0RLJ3MgbWV0aG9kcy5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cclxuICAgICAqL1xyXG4gICAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNhYmxlcyBITVNMb2dnZXIgY2FwYWJpbGl0eSB3aGljaCBpcyB1c2VkIGZvciBzZW5kaW5nIHVzYWdlIGFuYWx5dGljcyBvZiBOZWFyYnkgU0RLJ3MgbWV0aG9kcy5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cclxuICAgICAqL1xyXG4gICAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8gUEVSTUlTU0lPTlMgLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciBwZXJtaXNzaW9uIGlzIGdyYW50ZWQgdG8gdXNlIHRoZSBzZXJ2aWNlcy5cclxuICAgICAqIEBwYXJhbSB7SE1TUGVybWlzc2lvbn0gcGVybWlzc2lvbiBQZXJtaXNzaW9uLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxib29sZWFuPlxyXG4gICAgICovXHJcbiAgICBoYXNQZXJtaXNzaW9uKHBlcm1pc3Npb246IEhNU1Blcm1pc3Npb24pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyB0aGUgbmVjZXNzYXJ5IHBlcm1pc3Npb25zIHRvIHVzZSB0aGUgc2VydmljZXMuXHJcbiAgICAgKiBAcGFyYW0ge0hNU1Blcm1pc3Npb259IHBlcm1pc3Npb24gUGVybWlzc2lvbi5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cclxuICAgICAqL1xyXG4gICAgcmVxdWVzdFBlcm1pc3Npb24ocGVybWlzc2lvbjogSE1TUGVybWlzc2lvbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRhaW5zIHRoZSBuZWNlc3NhcnkgcGVybWlzc2lvbnMgdG8gdXNlIHRoZSBzZXJ2aWNlcy5cclxuICAgICAqIEBwYXJhbSB7SE1TUGVybWlzc2lvbltdfSBwZXJtaXNzaW9ucyBQZXJtaXNzaW9ucyBMaXN0LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICAgICovXHJcbiAgICByZXF1ZXN0UGVybWlzc2lvbnMocGVybWlzc2lvbnM6IEhNU1Blcm1pc3Npb25bXSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLyBFVkVOVCBSRUdJU1RFUkFUSU9OIC8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgQENvcmRvdmEoKVxyXG4gICAgLyoqXHJcbiAgICAgKiBTdWJzY3JpYmVzIHRvIE5lYXJieSBldmVudHMuIFBhc3MgYSBjYWxsYmFjayB0byBydW4gY29kZXMgd2hlbiB0aGUgZXZlbnQgdHJpZ2dlcmVkLlxyXG4gICAgICogQHBhcmFtIHtITVNOZWFyYnlFdmVudH0gZXZlbnQgRXZlbnQgbmFtZS5cclxuICAgICAqIEBwYXJhbSB7KHJlczogYW55KSA9PiB2b2lkfSBjYWxsYmFjayBDYWxsYmFjayB0byBiZSBjYWxsZWQgd2hlbiB0aGUgZXZlbnQgdHJpZ2dlcmVkLlxyXG4gICAgICovXHJcbiAgICBvbihldmVudDogSE1TTmVhcmJ5RXZlbnQsIGNhbGxiYWNrOiAocmVzOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8gRElTQ09WRVJZIC8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRzIGJyb2FkY2FzdGluZy5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIExvY2FsIGVuZHBvaW50IG5hbWUuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VydmljZUlkIFNlcnZpY2UgSUQuIFRoZSBhcHAgcGFja2FnZSBuYW1lIGlzIHJlY29tbWVuZGVkLlxyXG4gICAgICogQHBhcmFtIHtQb2xpY3l9IHBvbGljeSBPYmplY3Qgb2YgdGhlIFBvbGljeSB0eXBlLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICAgICovXHJcbiAgICBzdGFydEJyb2FkY2FzdGluZyhcclxuICAgICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgc2VydmljZUlkOiBzdHJpbmcsXHJcbiAgICAgICAgcG9saWN5OiBQb2xpY3lcclxuICAgICk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wcyBicm9hZGNhc3RpbmcuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgICAgKi9cclxuICAgIHN0b3BCcm9hZGNhc3RpbmcoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0cyB0byBzY2FuIGZvciByZW1vdGUgZW5kcG9pbnRzIHdpdGggdGhlIHNwZWNpZmllZCBzZXJ2aWNlIElELlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlcnZpY2VJZCBTZXJ2aWNlIElELiBUaGUgYXBwIHBhY2thZ2UgbmFtZSBpcyByZWNvbW1lbmRlZC5cclxuICAgICAqIEBwYXJhbSB7UG9saWN5fSBwb2xpY3kgT2JqZWN0IG9mIHRoZSBQb2xpY3kgdHlwZS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cclxuICAgICAqL1xyXG4gICAgc3RhcnRTY2FuKHNlcnZpY2VJZDogc3RyaW5nLCBwb2xpY3k6IFBvbGljeSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wcyBkaXNjb3ZlcmluZyBkZXZpY2VzLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICAgICovXHJcbiAgICBzdG9wU2NhbigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogU2VuZHMgYSByZXF1ZXN0IHRvIGNvbm5lY3QgdG8gYSByZW1vdGUgZW5kcG9pbnQuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBMb2NhbCBlbmRwb2ludCBuYW1lLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVuZHBvaW50SWQgSUQgb2YgdGhlIHJlbW90ZSBlbmRwb2ludC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cclxuICAgICAqL1xyXG4gICAgcmVxdWVzdENvbm5lY3QobmFtZTogc3RyaW5nLCBlbmRwb2ludElkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogU2VuZHMgYSByZXF1ZXN0IHRvIGNvbm5lY3QgdG8gYSByZW1vdGUgZW5kcG9pbnQuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBMb2NhbCBlbmRwb2ludCBuYW1lLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVuZHBvaW50SWQgSUQgb2YgdGhlIHJlbW90ZSBlbmRwb2ludC5cclxuICAgICAqIEBwYXJhbSB7Q2hhbm5lbFBvbGljeX0gY2hhbm5lbFBvbGljeSBDaGFubmVsIHBvbGljeSwgd2hpY2ggaXMgdXNlZCB0byBzZWxlY3QgdGhlIGNoYW5uZWwgZm9yIGVzdGFibGlzaGluZyBhIGNvbm5lY3Rpb24uXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgICAgKi9cclxuICAgIHJlcXVlc3RDb25uZWN0RXgoXHJcbiAgICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIGVuZHBvaW50SWQ6IHN0cmluZyxcclxuICAgICAgICBjaGFubmVsUG9saWN5OiBDaGFubmVsUG9saWN5XHJcbiAgICApOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogQWNjZXB0cyBhIGNvbm5lY3Rpb24uIFRoaXMgQVBJIG11c3QgYmUgY2FsbGVkIGJlZm9yZSBkYXRhIHRyYW5zbWlzc2lvbi4gSWYgdGhlIGNvbm5lY3Rpb24gcmVxdWVzdCBpcyBub3QgYWNjZXB0ZWQgd2l0aGluIDggc2Vjb25kcywgdGhlIGNvbm5lY3Rpb24gZmFpbHMgYW5kIG5lZWRzIHRvIGJlIHJlLWluaXRpYXRlZC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbmRwb2ludElkIElEIG9mIHRoZSByZW1vdGUgZW5kcG9pbnQuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgICAgKi9cclxuICAgIGFjY2VwdENvbm5lY3QoZW5kcG9pbnRJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFJlamVjdHMgYSBjb25uZWN0aW9uIHJlcXVlc3QgZnJvbSBhIHJlbW90ZSBlbmRwb2ludC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbmRwb2ludElkIElEIG9mIHRoZSByZW1vdGUgZW5kcG9pbnQuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgICAgKi9cclxuICAgIHJlamVjdENvbm5lY3QoZW5kcG9pbnRJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIERpc2Nvbm5lY3RzIGZyb20gYSByZW1vdGUgZW5kcG9pbnQuIFRoZW4gY29tbXVuaWNhdGlvbiB3aXRoIHRoZSByZW1vdGUgZW5kcG9pbnQgaXMgbm8gbG9uZ2VyIGF2YWlsYWJsZS5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbmRwb2ludElkIElEIG9mIHRoZSByZW1vdGUgZW5kcG9pbnQuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgICAgKi9cclxuICAgIGRpc2Nvbm5lY3QoZW5kcG9pbnRJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIERpc2Nvbm5lY3RzIGFsbCBjb25uZWN0aW9ucy5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cclxuICAgICAqL1xyXG4gICAgZGlzY29ubmVjdEFsbCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8gVFJBTlNGRVIgLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFuc2ZlcnMgZ2l2ZW4gYnl0ZXMgdG8gZ2l2ZW4gZW5kcG9pbnQgaWRzLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJbXX0gYnl0ZXMgbnVtYmVyIGFycmF5IHRoYXQgY29udGFpbnMgeW91ciBkYXRhLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXX0gZW5kcG9pbnRJZHMgc3RyaW5nIGFycmF5IG9mIHJlbW90ZSBlbmRwb2ludCBJRHMuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgICAgKi9cclxuICAgIHNlbmRCeXRlcyhieXRlczogbnVtYmVyW10sIGVuZHBvaW50SWRzOiBzdHJpbmdbXSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFuc2ZlcnMgZmlsZSBmcm9tIGdpdmVuIFVSSSB0byBnaXZlbiBlbmRwb2ludCBpZHMuIFRyYW5zZmVycmVkIGZpbGUgaXMgc2F2ZWQgaW4gc3Vic2NyaWJlcidzIGRldmljZSB1bmRlciBEb3dubG9hZHMvTmVhcmJ5LyBkaXJlY3Rvcnkgd2l0aCBuYW1lIGRhdGEgaWQuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZVVyaSBGaWxlIFVSSS5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IGVuZHBvaW50SWRzIHN0cmluZyBhcnJheSBvZiByZW1vdGUgZW5kcG9pbnQgSURzLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICAgICovXHJcbiAgICBzZW5kRmlsZShmaWxlVXJpOiBzdHJpbmcsIGVuZHBvaW50SWRzOiBzdHJpbmdbXSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFuc2ZlcnMgc3RyZWFtIGZyb20gZ2l2ZW4gVVJMIHRvIGdpdmVuIGVuZHBvaW50IGlkcy5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJlYW1VcmwgU3RyZWFtIFVSTC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IGVuZHBvaW50SWRzIHN0cmluZyBhcnJheSBvZiByZW1vdGUgZW5kcG9pbnQgSURzLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICAgICovXHJcbiAgICBzZW5kU3RyZWFtKHN0cmVhbVVybDogc3RyaW5nLCBlbmRwb2ludElkczogc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogQ2FuY2VscyBkYXRhIHRyYW5zbWlzc2lvbiB3aGVuIHNlbmRpbmcgb3IgcmVjZWl2aW5nIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YUlkIElEIG9mIHRoZSBkYXRhIHdob3NlIHRyYW5zbWlzc2lvbiBpcyB0byBiZSBjYW5jZWxlZC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cclxuICAgICAqL1xyXG4gICAgY2FuY2VsRGF0YVRyYW5zZmVyKGRhdGFJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vIE1FU1NBR0UgLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRhaW5zIHRoZSBjdXJyZW50IEFQSSBjcmVkZW50aWFsLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+IFByb21pc2UgcmVzdWx0IG9mIGFuIGV4ZWN1dGlvbiB0aGF0IHJldHVybnMgdGhlIGN1cnJlbnQgQVBJIGNyZWRlbnRpYWwuXHJcbiAgICAgKi9cclxuICAgIGdldEFwaUtleSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBBUEkgY3JlZGVudGlhbCBmb3IgeW91ciBhcHAuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBpS2V5IEFQSSBjcmVkZW50aWFsLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICAgICovXHJcbiAgICBzZXRBcGlLZXkoYXBpS2V5OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQdWJsaXNoZXMgYSBtZXNzYWdlIGFuZCBicm9hZGNhc3RzIGEgdG9rZW4gZm9yIG5lYXJieSBkZXZpY2VzIHRvIHNjYW4uXHJcbiAgICAgKiBAcGFyYW0ge01lc3NhZ2V9IG1lc3NhZ2UgUHVibGlzaGVkIG1lc3NhZ2UuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgICAgKi9cclxuICAgIHB1dChtZXNzYWdlOiBNZXNzYWdlKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIC8qKlxyXG4gICAgICogUHVibGlzaGVzIGEgbWVzc2FnZSBhbmQgYnJvYWRjYXN0cyBhIHRva2VuIGZvciBuZWFyYnkgZGV2aWNlcyB0byBzY2FuLiBUaGlzIG1lc3NhZ2UgaXMgcHVibGlzaGVkIG9ubHkgdG8gYXBwcyB0aGF0IHVzZSB0aGUgc2FtZSBwcm9qZWN0IElEIGFuZCBoYXZlIHJlZ2lzdGVyZWQgdGhlIG1lc3NhZ2UgdHlwZSB3aXRoIHRoZSBjbG91ZCBmb3Igc3Vic2NyaXB0aW9uLlxyXG4gICAgICogQHBhcmFtIHtNZXNzYWdlfSBtZXNzYWdlIFB1Ymxpc2hlZCBtZXNzYWdlLlxyXG4gICAgICogQHBhcmFtIHtQdXRPcHRpb259IHB1dE9wdGlvbiBQdXRPcHRpb24gcGFyYW1ldGVycy5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cclxuICAgICAqL1xyXG4gICAgcHV0KG1lc3NhZ2U6IE1lc3NhZ2UsIHB1dE9wdGlvbjogUHV0T3B0aW9uKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBwdXQobWVzc2FnZTogTWVzc2FnZSwgcHV0T3B0aW9uPzogUHV0T3B0aW9uKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyBtZXNzYWdlcyBmcm9tIHRoZSBjbG91ZCB1c2luZyB0aGUgZGVmYXVsdCBvcHRpb24gKERFRkFVTFQpLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICAgICovXHJcbiAgICBnZXQoKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXJzIHRoZSBtZXNzYWdlcyB0byBiZSBvYnRhaW5lZCB3aXRoIHRoZSBjbG91ZC4gT25seSBtZXNzYWdlcyB3aXRoIHRoZSBzYW1lIHByb2plY3QgSUQgY2FuIGJlIG9idGFpbmVkLlxyXG4gICAgICogQHBhcmFtIHtHZXRPcHRpb259IGdldE9wdGlvblxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICAgICovXHJcbiAgICBnZXQoZ2V0T3B0aW9uOiBHZXRPcHRpb24pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldChnZXRPcHRpb24/OiBHZXRPcHRpb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZGVudGlmaWVzIG9ubHkgQkxFIGJlYWNvbiBtZXNzYWdlcy4gSXQgc3Vic2NyaWJlcyB0byBtZXNzYWdlcyBwdWJsaXNoZWQgYnkgbmVhcmJ5IGRldmljZXMgaW4gYSBwZXJzaXN0ZW50IGFuZCBsb3ctcG93ZXIgbWFubmVyIGFuZCB1c2VzIHRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gKERFRkFVTFQpLiBTY2FubmluZyBpcyBnb2luZyBvbiBubyBtYXR0ZXIgd2hldGhlciB5b3VyIGFwcCBydW5zIGluIHRoZSBiYWNrZ3JvdW5kIG9yIGZvcmVncm91bmQuIFRoZSBzY2FubmluZyBzdG9wcyB3aGVuIHRoZSBhcHAgcHJvY2VzcyBpcyBraWxsZWQuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgICAgKi9cclxuICAgIGdldEluQmFja2dyb3VuZCgpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJZGVudGlmaWVzIG9ubHkgQkxFIGJlYWNvbiBtZXNzYWdlcy4gU2Nhbm5pbmcgaXMgZ29pbmcgb24gbm8gbWF0dGVyIHdoZXRoZXIgeW91ciBhcHAgcnVucyBpbiB0aGUgYmFja2dyb3VuZCBvciBmb3JlZ3JvdW5kLiBUaGUgc2Nhbm5pbmcgc3RvcHMgd2hlbiB0aGUgYXBwIHByb2Nlc3MgaXMga2lsbGVkLlxyXG4gICAgICogQHBhcmFtIHtHZXRPcHRpb259IGdldE9wdGlvblxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICAgICovXHJcbiAgICBnZXRJbkJhY2tncm91bmQoZ2V0T3B0aW9uOiBHZXRPcHRpb24pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEluQmFja2dyb3VuZChnZXRPcHRpb24/OiBHZXRPcHRpb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogQ2FuY2VscyBtZXNzYWdlIHB1Ymxpc2hpbmcuXHJcbiAgICAgKiBAcGFyYW0ge01lc3NhZ2V9IG1lc3NhZ2UgUHVibGlzaGVkIG1lc3NhZ2UuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgICAgKi9cclxuICAgIHVucHV0KG1lc3NhZ2U6IE1lc3NhZ2UpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogQ2FuY2VscyBhIG1lc3NhZ2Ugc3Vic2NyaXB0aW9uLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICAgICovXHJcbiAgICB1bmdldCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogQ2FuY2VscyB0aGUgY3VycmVudCBtZXNzYWdlIHN1YnNjcmlwdGlvbi5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cclxuICAgICAqL1xyXG4gICAgdW5nZXRJbkJhY2tncm91bmQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vIEJlYWNvbiAvLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KSBcclxuICAgIHJlZ2lzdGVyU2NhblRhc2soYmVhY29uT3B0aW9uOiBCZWFjb25PcHRpb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSkgXHJcbiAgICB1blJlZ2lzdGVyU2NhblRhc2soKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KSBcclxuICAgIGdldEJlYWNvbk1zZ0NvbmRpdGlvbnMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KSBcclxuICAgIGdldFJhd0JlYWNvbkNvbmRpdGlvbnMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KSBcclxuICAgIGdldFJhd0JlYWNvbkNvbmRpdGlvbnNXaXRoQmVhY29uVHlwZShiZWFjb25UeXBlOiBCZWFjb25UeXBlKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vIFZFUlNJT04gLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRhaW5zIHRoZSBOZWFyYnkgU2VydmljZSBTREsgdmVyc2lvbiBudW1iZXIuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz4gVmVyc2lvbiBudW1iZXIgb2YgdGhlIE5lYXJieSBTZXJ2aWNlIFNESy5cclxuICAgICAqL1xyXG4gICAgZ2V0VmVyc2lvbigpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gSE1TTmVhcmJ5RXZlbnQge1xyXG4gICAgRVZFTlRfQ09OTkVDVElPTl9PTl9FU1RBQkxJU0ggPSBcImV2ZW50Q29ubmVjdGlvbk9uRXN0YWJsaXNoXCIsXHJcbiAgICBFVkVOVF9DT05ORUNUSU9OX09OX1JFU1VMVCA9IFwiZXZlbnRDb25uZWN0aW9uT25SZXN1bHRcIixcclxuICAgIEVWRU5UX0NPTk5FQ1RJT05fT05fRElTQ09OTkVDVCA9IFwiZXZlbnRDb25uZWN0aW9uT25EaXNjb25uZWN0XCIsXHJcbiAgICBFVkVOVF9TQ0FOX09OX0ZPVU5EID0gXCJldmVudFNjYW5PbkZvdW5kXCIsXHJcbiAgICBFVkVOVF9TQ0FOX09OX0xPU1QgPSBcImV2ZW50U2Nhbk9uTG9zdFwiLFxyXG4gICAgRVZFTlRfREFUQV9PTl9SRUNFSVZFRCA9IFwiZXZlbnREYXRhT25SZWNlaXZlZFwiLFxyXG4gICAgRVZFTlRfREFUQV9PTl9UUkFOU0ZFUl9VUERBVEUgPSBcImV2ZW50RGF0YU9uVHJhbnNmZXJVcGRhdGVcIixcclxuICAgIEVWRU5UX01FU1NBR0VfT05fQkxFX1NJR05BTF9DSEFOR0VEID0gXCJldmVudE1lc3NhZ2VPbkJsZVNpZ25hbENoYW5nZWRcIixcclxuICAgIEVWRU5UX01FU1NBR0VfT05fRElTVEFOQ0VfQ0hBTkdFRCA9IFwiZXZlbnRNZXNzYWdlT25EaXN0YW5jZUNoYW5nZWRcIixcclxuICAgIEVWRU5UX01FU1NBR0VfT05fRk9VTkQgPSBcImV2ZW50TWVzc2FnZU9uRm91bmRcIixcclxuICAgIEVWRU5UX01FU1NBR0VfT05fTE9TVCA9IFwiZXZlbnRNZXNzYWdlT25Mb3N0XCIsXHJcbiAgICBFVkVOVF9QVVRfT05fVElNRU9VVCA9IFwiZXZlbnRQdXRPblRpbWVvdXRcIixcclxuICAgIEVWRU5UX0dFVF9PTl9USU1FT1VUID0gXCJldmVudEdldE9uVGltZW91dFwiLFxyXG4gICAgRVZFTlRfU1RBVFVTX09OX1BFUk1JU1NJT05fQ0hBTkdFRCA9IFwiZXZlbnRTdGF0dXNPblBlcm1pc3Npb25DaGFuZ2VkXCIsIFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBITVNQZXJtaXNzaW9uIHtcclxuICAgIFBFUk1JU1NJT05fQkxVRVRPT1RIID0gXCJhbmRyb2lkLnBlcm1pc3Npb24uQkxVRVRPT1RIXCIsXHJcbiAgICBQRVJNSVNTSU9OX0JMVUVUT09USF9BRE1JTiA9IFwiYW5kcm9pZC5wZXJtaXNzaW9uLkJMVUVUT09USF9BRE1JTlwiLCBcclxuICAgIFBFUk1JU1NJT05fQUNDRVNTX0NPQVJTRV9MT0NBVElPTiA9IFwiYW5kcm9pZC5wZXJtaXNzaW9uLkFDQ0VTU19DT0FSU0VfTE9DQVRJT05cIixcclxuICAgIFBFUk1JU1NJT05fQUNDRVNTX0ZJTkVfTE9DQVRJT04gPSBcImFuZHJvaWQucGVybWlzc2lvbi5BQ0NFU1NfRklORV9MT0NBVElPTlwiLFxyXG4gICAgUEVSTUlTU0lPTl9SRUFEX0VYVEVSTkFMX1NUT1JBR0UgPSBcImFuZHJvaWQucGVybWlzc2lvbi5SRUFEX0VYVEVSTkFMX1NUT1JBR0VcIixcclxuICAgIFBFUk1JU1NJT05fV1JJVEVfRVhURVJOQUxfU1RPUkFHRSA9IFwiYW5kcm9pZC5wZXJtaXNzaW9uLldSSVRFX0VYVEVSTkFMX1NUT1JBR0VcIiwgXHJcbiAgICBQRVJNSVNTSU9OX0FDQ0VTU19XSUZJX1NUQVRFID0gXCJhbmRyb2lkLnBlcm1pc3Npb24uQUNDRVNTX1dJRklfU1RBVEVcIixcclxuICAgIFBFUk1JU1NJT05fQ0hBTkdFX1dJRklfU1RBVEUgPSBcImFuZHJvaWQucGVybWlzc2lvbi5DSEFOR0VfV0lGSV9TVEFURVwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBvbGljeSB7XHJcbiAgICBQT0xJQ1lfTUVTSCA9IDEsXHJcbiAgICBQT0xJQ1lfUDJQID0gMixcclxuICAgIFBPTElDWV9TVEFSID0gMyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGF0YVR5cGUge1xyXG4gICAgREFUQV9GSUxFID0gMSxcclxuICAgIERBVEFfQllURVMgPSAyLFxyXG4gICAgREFUQV9TVFJFQU0gPSAzLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBUcmFuc2ZlclN0YXRlIHtcclxuICAgIFRSQU5TRkVSX1NUQVRFX1NVQ0NFU1MgPSAxLFxyXG4gICAgVFJBTlNGRVJfU1RBVEVfRkFJTFVSRSA9IDIsXHJcbiAgICBUUkFOU0ZFUl9TVEFURV9JTl9QUk9HUkVTUyA9IDMsXHJcbiAgICBUUkFOU0ZFUl9TVEFURV9DQU5DRUxFRCA9IDQsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1lc3NhZ2VQb2xpY3lEaXN0YW5jZVR5cGUge1xyXG4gICAgUE9MSUNZX0RJU1RBTkNFX1RZUEVfREVGQVVMVCA9IDAsXHJcbiAgICBQT0xJQ1lfRElTVEFOQ0VfVFlQRV9FQVJTSE9UID0gMSxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTWVzc2FnZVBvbGljeUZpbmRpbmdNb2RlIHtcclxuICAgIFBPTElDWV9GSU5ESU5HX01PREVfREVGQVVMVCA9IDAsXHJcbiAgICBQT0xJQ1lfRklORElOR19NT0RFX0JST0FEQ0FTVCA9IDEsXHJcbiAgICBQT0xJQ1lfRklORElOR19NT0RFX1NDQU4gPSAyLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBNZXNzYWdlUG9saWN5VHRsU2Vjb25kcyB7XHJcbiAgICBQT0xJQ1lfVFRMX1NFQ09ORFNfREVGQVVMVCA9IDI0MCxcclxuICAgIFBPTElDWV9UVExfU0VDT05EU19NQVggPSA4NjQwMCxcclxuICAgIFBPTElDWV9UVExfU0VDT05EU19JTkZJTklURSA9IDIxNDc0ODM2NDcsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENoYW5uZWxQb2xpY3kge1xyXG4gICAgQ0hBTk5FTF9BVVRPID0gMSxcclxuICAgIENIQU5ORUxfSElHSF9USFJPVUdIUFVUID0gMixcclxuICAgIENIQU5ORUxfSU5TVEFOQ0UgPSAzLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBTdGF0dXNDb2RlIHtcclxuICAgIFNUQVRVU19TVUNDRVNTID0gMCxcclxuICAgIFNUQVRVU19GQUlMVVJFID0gLTEsXHJcbiAgICBTVEFUVVNfQVBJX0RJU09SREVSID0gODAwMSxcclxuICAgIFNUQVRVU19OT19ORVRXT1JLID0gODAwMixcclxuICAgIFNUQVRVU19OT1RfQ09OTkVDVEVEID0gODAwMyxcclxuICAgIFNUQVRVU19UUkFOU0ZFUl9JT19FUlJPUiA9IDgwMDQsXHJcbiAgICBTVEFUVVNfQUxSRUFEWV9CUk9BRENBU1RJTkcgPSA4MDA1LFxyXG4gICAgU1RBVFVTX0FMUkVBRFlfQ09OTkVDVEVEID0gODAwNixcclxuICAgIFNUQVRVU19BTFJFQURZX1NDQU5OSU5HID0gODAwNyxcclxuICAgIFNUQVRVU19QT0xJQ1lfQ09ORkxJQ1QgPSA4MDA4LFxyXG4gICAgU1RBVFVTX0JMVUVUT09USF9PUEVSQVRJT05fRkFJTEVEID0gODAwOSxcclxuICAgIFNUQVRVU19DT05ORUNUX1JFSkVDVEVEID0gODAxMCxcclxuICAgIFNUQVRVU19DT05ORUNUX0lPX0VSUk9SID0gODAxMSxcclxuICAgIFNUQVRVU19FTkRQT0lOVF9VTktOT1dOID0gODAxMixcclxuICAgIFNUQVRVU19BUElfT0NDVVBJRUQgPSA4MDEzLFxyXG4gICAgU1RBVFVTX01JU1NJTkdfUEVSTUlTU0lPTl9BQ0NFU1NfQ09BUlNFX0xPQ0FUSU9OID0gODAxNCwgXHJcbiAgICBTVEFUVVNfTUlTU0lOR19QRVJNSVNTSU9OX0JMVUVUT09USCA9IDgwMTYsXHJcbiAgICBTVEFUVVNfTUlTU0lOR19QRVJNSVNTSU9OX0JMVUVUT09USF9BRE1JTiA9IDgwMTcsXHJcbiAgICBTVEFUVVNfTUlTU0lOR19QRVJNSVNTSU9OX1JFQ09SRF9BVURJTyA9IDgwMTksXHJcbiAgICBTVEFUVVNfTUlTU0lOR19TRVRUSU5HX0xPQ0FUSU9OX09OID0gODAyMCxcclxuICAgIFNUQVRVU19BSVJQTEFORV9NT0RFX01VU1RfQkVfT0ZGID0gODAyMSxcclxuICAgIFNUQVRVU19NRVNTQUdFX0FQUF9VTlJFR0lTVEVSRUQgPSA4MDUwLFxyXG4gICAgU1RBVFVTX01FU1NBR0VfQVBQX1FVT1RBX0xJTUlURUQgPSA4MDUxLFxyXG4gICAgU1RBVFVTX01FU1NBR0VfQkxFX0JST0FEQ0FTVElOR19VTlNVUFBPUlRFRCA9IDgwNTIsXHJcbiAgICBTVEFUVVNfTUVTU0FHRV9CTEVfU0NBTk5JTkdfVU5TVVBQT1JURUQgPSA4MDUzLFxyXG4gICAgU1RBVFVTX01FU1NBR0VfQkxVRVRPT1RIX09GRiA9IDgwNTQsXHJcbiAgICBTVEFUVVNfTUVTU0FHRV9XUk9OR19DT05URVhUID0gODA1NSxcclxuICAgIFNUQVRVU19NRVNTQUdFX05PVF9BTExPVyA9IDgwNTYsXHJcbiAgICBTVEFUVVNfTUVTU0FHRV9NSVNTSU5HX1BFUk1JU1NJT05TID0gODA1NyxcclxuICAgIFNUQVRVU19NRVNTQUdFX0FVVEhfRkFJTEVEID0gODA1OCxcclxuICAgIFNUQVRVU19NRVNTQUdFX1BFTkRJTkdfSU5URU5UU19MSU1JVEVEID0gODA1OSxcclxuICAgIFNUQVRVU19JTlRFUk5BTF9FUlJPUiA9IDgwNjAsXHJcbiAgICBTVEFUVVNfRklORElOR19NT0RFX0VSUk9SID0gODA2MSxcclxuICAgIFNUQVRVU19NRVNTQUdFX1RBU0tfQUxSRUFEWV9JTl9QUk9DRVNTSU5HID0gODA2MixcclxuICAgIFNUQVRVU19NSVNTSU5HX1BFUk1JU1NJT05fRklMRV9SRUFEX1dSSVRFID0gODA2MyxcclxuICAgIFNUQVRVU19NSVNTSU5HX1BFUk1JU1NJT05fSU5URVJORVQgPSA4MDY0LCBcclxufVxyXG5cclxuLy9CRUFDT05cclxuZXhwb3J0IGludGVyZmFjZSBCZWFjb25PcHRpb24ge1xyXG4gICAgYmVhY29uSWQ/OiBzdHJpbmc7XHJcbiAgICBiZWFjb25UeXBlPzogbnVtYmVyO1xyXG4gICAgbmFtZXNwYWNlPzogc3RyaW5nO1xyXG4gICAgdHlwZT86IHN0cmluZztcclxufSBcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmVhY29uVHlwZSB7XHJcbiAgICBiZWFjb25UeXBlOiBudW1iZXI7IFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2Uge1xyXG4gICAgY29udGVudDogbnVtYmVyW107XHJcbiAgICBuYW1lc3BhY2U/OiBzdHJpbmc7XHJcbiAgICB0eXBlPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVkZHlzdG9uZVVpZCB7XHJcbiAgICBoZXhOYW1lc3BhY2U6IHN0cmluZztcclxuICAgIGhleEluc3RhbmNlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUJlYWNvbklkIHtcclxuICAgIGlCZWFjb25VdWlkOiBzdHJpbmc7XHJcbiAgICBtYWpvcjogbnVtYmVyO1xyXG4gICAgbWlub3I6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOYW1lc3BhY2VUeXBlIHtcclxuICAgIG5hbWVzcGFjZTogc3RyaW5nO1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2VQaWNrZXIge1xyXG4gICAgaW5jbHVkZUFsbFR5cGVzPzogYm9vbGVhbjtcclxuICAgIGVkZHlzdG9uZVVpZHM/OiBFZGR5c3RvbmVVaWRbXTtcclxuICAgIGlCZWFjb25JZHM/OiBJQmVhY29uSWRbXTtcclxuICAgIG5hbWVzcGFjZVR5cGVzPzogTmFtZXNwYWNlVHlwZVtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2VQb2xpY3kge1xyXG4gICAgZGlzdGFuY2VUeXBlPzogTWVzc2FnZVBvbGljeURpc3RhbmNlVHlwZTtcclxuICAgIGZpbmRpbmdNb2RlPzogTWVzc2FnZVBvbGljeUZpbmRpbmdNb2RlO1xyXG4gICAgdHRsU2Vjb25kcz86IE1lc3NhZ2VQb2xpY3lUdGxTZWNvbmRzO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFB1dE9wdGlvbiB7XHJcbiAgICBwb2xpY3k/OiBNZXNzYWdlUG9saWN5O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdldE9wdGlvbiB7XHJcbiAgICBwaWNrZXI/OiBNZXNzYWdlUGlja2VyO1xyXG4gICAgcG9saWN5PzogTWVzc2FnZVBvbGljeTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCbGVTaWduYWwge1xyXG4gICAgcnNzaTogbnVtYmVyO1xyXG4gICAgdHhQb3dlcjogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpc3RhbmNlIHtcclxuICAgIHByZWNpc2lvbjogbnVtYmVyO1xyXG4gICAgbWV0ZXJzOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBCTEVfVU5LTk9XTl9UWF9QT1dFUjogbnVtYmVyID0gMHg4MDAwMDAwMDtcclxuZXhwb3J0IGNvbnN0IFBSRUNJU0lPTl9MT1c6IG51bWJlciA9IDE7XHJcbmV4cG9ydCBjb25zdCBNQVhfU0laRV9EQVRBOiBudW1iZXIgPSAzMjc2ODtcclxuZXhwb3J0IGNvbnN0IE1BWF9DT05URU5UX1NJWkU6IG51bWJlciA9IDY1NTM2O1xyXG5leHBvcnQgY29uc3QgTUFYX1RZUEVfTEVOR1RIOiBudW1iZXIgPSAxNjtcclxuZXhwb3J0IGNvbnN0IE1FU1NBR0VfTkFNRVNQQUNFX1JFU0VSVkVEOiBzdHJpbmcgPSBcIl9yZXNlcnZlZF9uYW1lc3BhY2VcIjtcclxuZXhwb3J0IGNvbnN0IE1FU1NBR0VfVFlQRV9FRERZU1RPTkVfVUlEOiBzdHJpbmcgPSBcIl9lZGR5c3RvbmVfdWlkXCI7XHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFX1RZUEVfSV9CRUFDT05fSUQ6IHN0cmluZyA9IFwiX2liZWFjb25faWRcIjtcclxuZXhwb3J0IGNvbnN0IERJU1RBTkNFX1VOS05PV046IERpc3RhbmNlID0ge1xyXG4gICAgcHJlY2lzaW9uOiBQUkVDSVNJT05fTE9XLFxyXG4gICAgbWV0ZXJzOiBOYU4sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFX1BJQ0tFUl9JTkNMVURFX0FMTF9UWVBFUzogTWVzc2FnZVBpY2tlciA9IHtcclxuICAgIGluY2x1ZGVBbGxUeXBlczogdHJ1ZSxcclxufTtcclxuZXhwb3J0IGNvbnN0IE1FU1NBR0VfUE9MSUNZX0RFRkFVTFQ6IE1lc3NhZ2VQb2xpY3kgPSB7fTtcclxuZXhwb3J0IGNvbnN0IE1FU1NBR0VfUE9MSUNZX0JMRV9PTkxZOiBNZXNzYWdlUG9saWN5ID0ge1xyXG4gICAgdHRsU2Vjb25kczogTWVzc2FnZVBvbGljeVR0bFNlY29uZHMuUE9MSUNZX1RUTF9TRUNPTkRTX0lORklOSVRFLFxyXG4gICAgZmluZGluZ01vZGU6IE1lc3NhZ2VQb2xpY3lGaW5kaW5nTW9kZS5QT0xJQ1lfRklORElOR19NT0RFX1NDQU4sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBHRVRfT1BUSU9OX0RFRkFVTFQ6IEdldE9wdGlvbiA9IHtcclxuICAgIHBpY2tlcjogTUVTU0FHRV9QSUNLRVJfSU5DTFVERV9BTExfVFlQRVMsXHJcbiAgICBwb2xpY3k6IE1FU1NBR0VfUE9MSUNZX0RFRkFVTFQsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBQVVRfT1BUSU9OX0RFRkFVTFQ6IFB1dE9wdGlvbiA9IHtcclxuICAgIHBvbGljeTogTUVTU0FHRV9QT0xJQ1lfREVGQVVMVCxcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRW5kcG9pbnRJZCB7XHJcbiAgICBlbmRwb2ludElkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29ubmVjdEluZm8ge1xyXG4gICAgZW5kcG9pbnRJZDogc3RyaW5nO1xyXG4gICAgZW5kcG9pbnROYW1lOiBzdHJpbmc7XHJcbiAgICBhdXRoQ29kZTogc3RyaW5nO1xyXG4gICAgaXNSZW1vdGVDb25uZWN0OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbm5lY3RSZXN1bHQge1xyXG4gICAgZW5kcG9pbnRJZDogc3RyaW5nO1xyXG4gICAgc3RhdHVzQ29kZTogU3RhdHVzQ29kZTtcclxuICAgIHN0YXR1c01lc3NhZ2U6IHN0cmluZztcclxuICAgIGNoYW5uZWxQb2xpY3k6IENoYW5uZWxQb2xpY3k7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2NhbkVuZHBvaW50SW5mbyB7XHJcbiAgICBlbmRwb2ludElkOiBzdHJpbmc7XHJcbiAgICBzZXJ2aWNlSWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRhIHtcclxuICAgIGVuZHBvaW50SWQ6IHN0cmluZztcclxuICAgIGRhdGFUeXBlOiBEYXRhVHlwZTtcclxuICAgIGRhdGFJZDogc3RyaW5nO1xyXG4gICAgc2l6ZT86IG51bWJlcjtcclxuICAgIGRhdGE/OiBudW1iZXJbXTtcclxuICAgIGZpbGVVcmk/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNmZXJTdGF0ZVVwZGF0ZSB7XHJcbiAgICBlbmRwb2ludElkOiBzdHJpbmc7XHJcbiAgICBkYXRhSWQ6IHN0cmluZztcclxuICAgIHN0YXR1czogVHJhbnNmZXJTdGF0ZTtcclxuICAgIHRyYW5zZmVycmVkQnl0ZXM6IG51bWJlcjtcclxuICAgIHRvdGFsQnl0ZXM6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCbGVTaWduYWxVcGRhdGUge1xyXG4gICAgbWVzc2FnZTogTWVzc2FnZTtcclxuICAgIGJsZVNpZ25hbDogQmxlU2lnbmFsO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpc3RhbmNlVXBkYXRlIHtcclxuICAgIG1lc3NhZ2U6IE1lc3NhZ2U7XHJcbiAgICBkaXN0YW5jZTogRGlzdGFuY2U7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZVRpbWVvdXQge1xyXG4gICAgbWVzc2FnZTogTWVzc2FnZTtcclxuICAgIHN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb25VcGRhdGUge1xyXG4gICAgZ3JhbnRQZXJtaXNzaW9uOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhDb2RlVXBkYXRlIHtcclxuICAgIGVuZHBvaW50SWQ6IHN0cmluZztcclxuICAgIGF1dGhDb2RlOiBzdHJpbmc7XHJcbn1cclxuXHJcbiJdfQ==