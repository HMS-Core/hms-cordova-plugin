/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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
import { __decorate, __extends } from "tslib";

import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HMSNearby = /** @class */ (function (_super) {
    __extends(HMSNearby, _super);
    function HMSNearby() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Enables HMSLogger capability which is used for sending usage analytics of Nearby SDK's methods.
    * @returns Promise<void>
    */
    HMSNearby.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    /**
    * Disables HMSLogger capability which is used for sending usage analytics of Nearby SDK's methods.
    * @returns Promise<void>
    */
    HMSNearby.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    /**
    * Checks whether permission is granted to use the services.
    * @param {HMSPermission} permission Permission.
    * @returns Promise<boolean>
    */
    HMSNearby.prototype.hasPermission = function (permission) { return cordova(this, "hasPermission", { "otherPromise": true }, arguments); };
    /**
    * Obtains the necessary permissions to use the services.
    * @param {HMSPermission} permission Permission.
    * @returns Promise<void>
    */
    HMSNearby.prototype.requestPermission = function (permission) { return cordova(this, "requestPermission", { "otherPromise": true }, arguments); };
    /**
    * Obtains the necessary permissions to use the services.
    * @param {HMSPermission[]} permissions Permissions List.
    * @returns Promise<void>
    */
    HMSNearby.prototype.requestPermissions = function (permissions) { return cordova(this, "requestPermissions", { "otherPromise": true }, arguments); };
    /**
     * Subscribes to Nearby events. Pass a callback to run codes when the event triggered.
     * @param {HMSNearbyEvent} event Event name.
     * @param {(res: any) => void} callback Callback to be called when the event triggered.
     */
    HMSNearby.prototype.on = function (event, callback) { return cordova(this, "on", {}, arguments); };
    /**
    * Starts broadcasting.
    * @param {string} name Local endpoint name.
    * @param {string} serviceId Service ID. The app package name is recommended.
    * @param {Policy} policy Object of the Policy type.
    * @returns Promise<void>
    */
    HMSNearby.prototype.startBroadcasting = function (name, serviceId, policy) { return cordova(this, "startBroadcasting", { "otherPromise": true }, arguments); };
    /**
    * Stops broadcasting.
    * @returns Promise<void>
    */
    HMSNearby.prototype.stopBroadcasting = function () { return cordova(this, "stopBroadcasting", { "otherPromise": true }, arguments); };
    /**
    * Starts to scan for remote endpoints with the specified service ID.
    * @param {string} serviceId Service ID. The app package name is recommended.
    * @param {Policy} policy Object of the Policy type.
    * @returns Promise<void>
    */
    HMSNearby.prototype.startScan = function (serviceId, policy) { return cordova(this, "startScan", { "otherPromise": true }, arguments); };
    /**
    * Stops discovering devices.
    * @returns Promise<void>
    */
    HMSNearby.prototype.stopScan = function () { return cordova(this, "stopScan", { "otherPromise": true }, arguments); };
    /**
    * Sends a request to connect to a remote endpoint.
    * @param {string} name Local endpoint name.
    * @param {string} endpointId ID of the remote endpoint.
    * @returns Promise<void>
    */
    HMSNearby.prototype.requestConnect = function (name, endpointId) { return cordova(this, "requestConnect", { "otherPromise": true }, arguments); };
    /**
     * Sends a request to connect to a remote endpoint.
     * @param {string} name Local endpoint name.
     * @param {string} endpointId ID of the remote endpoint.
     * @param {ChannelPolicy} channelPolicy Channel policy, which is used to select the channel for establishing a connection.
     * @returns Promise<void>
     */
    HMSNearby.prototype.requestConnectEx = function (name, endpointId, channelPolicy) { return cordova(this, "requestConnectEx", { "otherPromise": true }, arguments); };
    /**
    * Accepts a connection. This API must be called before data transmission. If the connection request is not accepted within 8 seconds, the connection fails and needs to be re-initiated.
    * @param {string} endpointId ID of the remote endpoint.
    * @returns Promise<void>
    */
    HMSNearby.prototype.acceptConnect = function (endpointId) { return cordova(this, "acceptConnect", { "otherPromise": true }, arguments); };
    /**
    * Rejects a connection request from a remote endpoint.
    * @param {string} endpointId ID of the remote endpoint.
    * @returns Promise<void>
    */
    HMSNearby.prototype.rejectConnect = function (endpointId) { return cordova(this, "rejectConnect", { "otherPromise": true }, arguments); };
    /**
    * Disconnects from a remote endpoint. Then communication with the remote endpoint is no longer available.
    * @param {string} endpointId ID of the remote endpoint.
    * @returns Promise<void>
    */
    HMSNearby.prototype.disconnect = function (endpointId) { return cordova(this, "disconnect", { "otherPromise": true }, arguments); };
    /**
    * Disconnects all connections.
    * @returns Promise<void>
    */
    HMSNearby.prototype.disconnectAll = function () { return cordova(this, "disconnectAll", { "otherPromise": true }, arguments); };
    /**
    * Transfers given bytes to given endpoint ids.
    * @param {number[]} bytes number array that contains your data.
    * @param {string[]} endpointIds string array of remote endpoint IDs.
    * @returns Promise<void>
    */
    HMSNearby.prototype.sendBytes = function (bytes, endpointIds) { return cordova(this, "sendBytes", { "otherPromise": true }, arguments); };
    /**
    * Transfers file from given URI to given endpoint ids. Transferred file is saved in subscriber's device under Downloads/Nearby/ directory with name data id.
    * @param {string} fileUri File URI.
    * @param {string[]} endpointIds string array of remote endpoint IDs.
    * @returns Promise<void>
    */
    HMSNearby.prototype.sendFile = function (fileUri, endpointIds) { return cordova(this, "sendFile", { "otherPromise": true }, arguments); };
    /**
    * Transfers stream from given URL to given endpoint ids.
    * @param {string} streamUrl Stream URL.
    * @param {string[]} endpointIds string array of remote endpoint IDs.
    * @returns Promise<void>
    */
    HMSNearby.prototype.sendStream = function (streamUrl, endpointIds) { return cordova(this, "sendStream", { "otherPromise": true }, arguments); };
    /**
    * Cancels data transmission when sending or receiving data.
    * @param {string} dataId ID of the data whose transmission is to be canceled.
    * @returns Promise<void>
    */
    HMSNearby.prototype.cancelDataTransfer = function (dataId) { return cordova(this, "cancelDataTransfer", { "otherPromise": true }, arguments); };
    /**
    * Obtains the current API credential.
    * @returns Promise<string> Promise result of an execution that returns the current API credential.
    */
    HMSNearby.prototype.getApiKey = function () { return cordova(this, "getApiKey", { "otherPromise": true }, arguments); };
    /**
    * Sets the API credential for your app.
    * @param {string} apiKey API credential.
    * @returns Promise<void>
    */
    HMSNearby.prototype.setApiKey = function (apiKey) { return cordova(this, "setApiKey", { "otherPromise": true }, arguments); };
    HMSNearby.prototype.put = function (message, putOption) { return cordova(this, "put", { "otherPromise": true }, arguments); };
    HMSNearby.prototype.get = function (getOption) { return cordova(this, "get", { "otherPromise": true }, arguments); };
    HMSNearby.prototype.getInBackground = function (getOption) { return cordova(this, "getInBackground", { "otherPromise": true }, arguments); };
    /**
    * Cancels message publishing.
    * @param {Message} message Published message.
    * @returns Promise<void>
    */
    HMSNearby.prototype.unput = function (message) { return cordova(this, "unput", { "otherPromise": true }, arguments); };
    /**
    * Cancels a message subscription.
    * @returns Promise<void>
    */
    HMSNearby.prototype.unget = function () { return cordova(this, "unget", { "otherPromise": true }, arguments); };
    /**
    * Cancels the current message subscription.
    * @returns Promise<void>
    */
    HMSNearby.prototype.ungetInBackground = function () { return cordova(this, "ungetInBackground", { "otherPromise": true }, arguments); };
    /**
    * Enable the Wi-Fi sharing function. Set WifiSharePolicy based on function requirements.
    * @param {WifiSharePolicy} wifiSharePolicy Wi-Fi sharing policy. Enable the Wi-Fi sharing mode or configuration mode as required.
    * @returns Promise<void>
    */
    HMSNearby.prototype.startWifiShare = function (wifiSharePolicy) { return cordova(this, "startWifiShare", { "otherPromise": true }, arguments); };
    /**
    * Disables the Wi-Fi sharing function.
    * @returns Promise<void>
    */
    HMSNearby.prototype.stopWifiShare = function () { return cordova(this, "stopWifiShare", { "otherPromise": true }, arguments); };
    /**
    * Shares Wi-Fi with a remote device.
    * @param {string} endpointId ID of the remote endpoint.
    * @returns Promise<void>
    */
    HMSNearby.prototype.shareWifiConfig = function (endpointId) { return cordova(this, "shareWifiConfig", { "otherPromise": true }, arguments); };
    /**
     * Obtains the Nearby Service SDK version number.
     * @returns Promise<string> Version number of the Nearby Service SDK.
     */
    HMSNearby.prototype.getVersion = function () { return cordova(this, "getVersion", { "otherPromise": true }, arguments); };
    HMSNearby.pluginName = "HMSNearby";
    HMSNearby.plugin = "cordova-plugin-hms-nearby";
    HMSNearby.pluginRef = "HMSNearby";
    HMSNearby.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSNearby.platforms = ["Android"];
    HMSNearby = __decorate([
        Injectable()
    ], HMSNearby);
    return HMSNearby;
}(IonicNativePlugin));
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
    HMSNearbyEvent["EVENT_WIFI_ON_FOUND"] = "eventWifiOnFound";
    HMSNearbyEvent["EVENT_WIFI_ON_LOST"] = "eventWifiOnLost";
    HMSNearbyEvent["EVENT_WIFI_ON_FETCH_AUTH_CODE"] = "eventWifiOnFetchAuthCode";
    HMSNearbyEvent["EVENT_WIFI_ON_SHARE_RESULT"] = "eventWifiOnShareResult";
})(HMSNearbyEvent || (HMSNearbyEvent = {}));
export var HMSPermission;
(function (HMSPermission) {
    HMSPermission["PERMISSION_BLUETOOTH"] = "android.permission.BLUETOOTH";
    HMSPermission["PERMISSION_BLUETOOTH_ADMIN"] = "android.permission.BLUETOOTH_ADMIN";
    HMSPermission["PERMISSION_ACCESS_WIFI_STATE"] = "android.permission.ACCESS_WIFI_STATE";
    HMSPermission["PERMISSION_CHANGE_WIFI_STATE"] = "android.permission.CHANGE_WIFI_STATE";
    HMSPermission["PERMISSION_ACCESS_COARSE_LOCATION"] = "android.permission.ACCESS_COARSE_LOCATION";
    HMSPermission["PERMISSION_ACCESS_FINE_LOCATION"] = "android.permission.ACCESS_FINE_LOCATION";
    HMSPermission["PERMISSION_READ_EXTERNAL_STORAGE"] = "android.permission.READ_EXTERNAL_STORAGE";
    HMSPermission["PERMISSION_WRITE_EXTERNAL_STORAGE"] = "android.permission.WRITE_EXTERNAL_STORAGE";
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
export var WifiSharePolicy;
(function (WifiSharePolicy) {
    WifiSharePolicy[WifiSharePolicy["POLICY_SHARE"] = 1] = "POLICY_SHARE";
    WifiSharePolicy[WifiSharePolicy["POLICY_SET"] = 2] = "POLICY_SET";
})(WifiSharePolicy || (WifiSharePolicy = {}));
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
    meters: NaN
};
export var MESSAGE_PICKER_INCLUDE_ALL_TYPES = {
    includeAllTypes: true
};
export var MESSAGE_POLICY_DEFAULT = {};
export var MESSAGE_POLICY_BLE_ONLY = {
    ttlSeconds: MessagePolicyTtlSeconds.POLICY_TTL_SECONDS_INFINITE,
    findingMode: MessagePolicyFindingMode.POLICY_FINDING_MODE_SCAN
};
export var GET_OPTION_DEFAULT = {
    picker: MESSAGE_PICKER_INCLUDE_ALL_TYPES,
    policy: MESSAGE_POLICY_DEFAULT
};
export var PUT_OPTION_DEFAULT = {
    policy: MESSAGE_POLICY_DEFAULT
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1uZWFyYnkvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7RUFjRTtBQUNGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUErQnpDLDZCQUFpQjs7OztJQUs5Qzs7O01BR0U7SUFDRixnQ0FBWTtJQU1aOzs7TUFHRTtJQUNGLGlDQUFhO0lBT2I7Ozs7TUFJRTtJQUNGLGlDQUFhLGFBQUMsVUFBeUI7SUFLdkM7Ozs7TUFJRTtJQUNGLHFDQUFpQixhQUFDLFVBQXlCO0lBSzNDOzs7O01BSUU7SUFDRixzQ0FBa0IsYUFBQyxXQUE0QjtJQU8vQzs7OztPQUlHO0lBQ0gsc0JBQUUsYUFBQyxLQUFxQixFQUFFLFFBQTBCO0lBT3BEOzs7Ozs7TUFNRTtJQUNGLHFDQUFpQixhQUFDLElBQVksRUFBRSxTQUFpQixFQUFFLE1BQWM7SUFLakU7OztNQUdFO0lBQ0Ysb0NBQWdCO0lBS2hCOzs7OztNQUtFO0lBQ0YsNkJBQVMsYUFBQyxTQUFpQixFQUFFLE1BQWM7SUFLM0M7OztNQUdFO0lBQ0YsNEJBQVE7SUFLUjs7Ozs7TUFLRTtJQUNGLGtDQUFjLGFBQUMsSUFBWSxFQUFFLFVBQWtCO0lBSy9DOzs7Ozs7T0FNRztJQUNILG9DQUFnQixhQUFDLElBQVksRUFBRSxVQUFrQixFQUFFLGFBQTRCO0lBSy9FOzs7O01BSUU7SUFDRixpQ0FBYSxhQUFDLFVBQWtCO0lBS2hDOzs7O01BSUU7SUFDRixpQ0FBYSxhQUFDLFVBQWtCO0lBS2hDOzs7O01BSUU7SUFDRiw4QkFBVSxhQUFDLFVBQWtCO0lBSzdCOzs7TUFHRTtJQUNGLGlDQUFhO0lBUWI7Ozs7O01BS0U7SUFDRiw2QkFBUyxhQUFDLEtBQWUsRUFB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QUFNLHVCQUF1QixHQUFrQjtJQUNsRCxVQUFVLEVBQUUsdUJBQXVCLENBQUMsMkJBQTJCO0lBQy9ELFdBQVcsRUFBRSx3QkFBd0IsQ0FBQyx3QkFBd0I7Q0FDakUsQ0FBQTtBQUNELE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUFjO0lBQ3pDLE1BQU0sRUFBRSxnQ0FBZ0M7SUFDeEMsTUFBTSxFQUFFLHNCQUFzQjtDQUNqQyxDQUFBO0FBQ0QsTUFBTSxDQUFDLElBQU0sa0JBQWtCLEdBQWM7SUFDekMsTUFBTSxFQUFFLHNCQUFzQjtDQUNqQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIENvcHlyaWdodCAyMDIwLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5cclxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcclxuICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG5cclxuICAgICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAgICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBITVNOZWFyYnlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoZSBDb3Jkb3ZhIE5lYXJieSBQbHVnaW4gZW5hYmxlcyBjb21tdW5pY2F0aW9uIGJldHdlZW4gSHVhd2VpIE5lYXJieSBLaXQgU0RLIGFuZCBDb3Jkb3ZhIHBsYXRmb3JtLiBUaGlzIHBsdWdpbiBleHBvc2VzIGFsbCBmdW5jdGlvbmFsaXR5IHByb3ZpZGVkIGJ5IEh1YXdlaSBOZWFyYnkgS2l0IFNESy5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgSE1TTmVhcmJ5IH0gZnJvbSAnQGhtc2NvcmUvaW9uaWMtbmF0aXZlLWhtcy1uZWFyYnknO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGhtc05lYXJieTogSE1TTmVhcmJ5KSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuaG1zTmVhcmJ5LmZ1bmN0aW9uTmFtZSgnSGVsbG8nLCAxMjMpXHJcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNOZWFyYnknLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1uZWFyYnknLFxyXG4gIHBsdWdpblJlZjogJ0hNU05lYXJieScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW4nLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TTmVhcmJ5IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLyBMT0dHRVIgLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAqIEVuYWJsZXMgSE1TTG9nZ2VyIGNhcGFiaWxpdHkgd2hpY2ggaXMgdXNlZCBmb3Igc2VuZGluZyB1c2FnZSBhbmFseXRpY3Mgb2YgTmVhcmJ5IFNESydzIG1ldGhvZHMuXHJcbiAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgKi9cclxuICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAqIERpc2FibGVzIEhNU0xvZ2dlciBjYXBhYmlsaXR5IHdoaWNoIGlzIHVzZWQgZm9yIHNlbmRpbmcgdXNhZ2UgYW5hbHl0aWNzIG9mIE5lYXJieSBTREsncyBtZXRob2RzLlxyXG4gICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICovXHJcbiAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vIFBFUk1JU1NJT05TIC8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgKiBDaGVja3Mgd2hldGhlciBwZXJtaXNzaW9uIGlzIGdyYW50ZWQgdG8gdXNlIHRoZSBzZXJ2aWNlcy5cclxuICAqIEBwYXJhbSB7SE1TUGVybWlzc2lvbn0gcGVybWlzc2lvbiBQZXJtaXNzaW9uLlxyXG4gICogQHJldHVybnMgUHJvbWlzZTxib29sZWFuPlxyXG4gICovXHJcbiAgaGFzUGVybWlzc2lvbihwZXJtaXNzaW9uOiBITVNQZXJtaXNzaW9uKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICogT2J0YWlucyB0aGUgbmVjZXNzYXJ5IHBlcm1pc3Npb25zIHRvIHVzZSB0aGUgc2VydmljZXMuXHJcbiAgKiBAcGFyYW0ge0hNU1Blcm1pc3Npb259IHBlcm1pc3Npb24gUGVybWlzc2lvbi5cclxuICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cclxuICAqL1xyXG4gIHJlcXVlc3RQZXJtaXNzaW9uKHBlcm1pc3Npb246IEhNU1Blcm1pc3Npb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgKiBPYnRhaW5zIHRoZSBuZWNlc3NhcnkgcGVybWlzc2lvbnMgdG8gdXNlIHRoZSBzZXJ2aWNlcy5cclxuICAqIEBwYXJhbSB7SE1TUGVybWlzc2lvbltdfSBwZXJtaXNzaW9ucyBQZXJtaXNzaW9ucyBMaXN0LlxyXG4gICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICovXHJcbiAgcmVxdWVzdFBlcm1pc3Npb25zKHBlcm1pc3Npb25zOiBITVNQZXJtaXNzaW9uW10pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vIEVWRU5UIFJFR0lTVEVSQVRJT04gLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIC8qKlxyXG4gICAqIFN1YnNjcmliZXMgdG8gTmVhcmJ5IGV2ZW50cy4gUGFzcyBhIGNhbGxiYWNrIHRvIHJ1biBjb2RlcyB3aGVuIHRoZSBldmVudCB0cmlnZ2VyZWQuXHJcbiAgICogQHBhcmFtIHtITVNOZWFyYnlFdmVudH0gZXZlbnQgRXZlbnQgbmFtZS5cclxuICAgKiBAcGFyYW0geyhyZXM6IGFueSkgPT4gdm9pZH0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGV2ZW50IHRyaWdnZXJlZC5cclxuICAgKi9cclxuICBvbihldmVudDogSE1TTmVhcmJ5RXZlbnQsIGNhbGxiYWNrOiAocmVzOiBhbnkpPT52b2lkKTogdm9pZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLyBESVNDT1ZFUlkgLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAqIFN0YXJ0cyBicm9hZGNhc3RpbmcuXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBMb2NhbCBlbmRwb2ludCBuYW1lLlxyXG4gICogQHBhcmFtIHtzdHJpbmd9IHNlcnZpY2VJZCBTZXJ2aWNlIElELiBUaGUgYXBwIHBhY2thZ2UgbmFtZSBpcyByZWNvbW1lbmRlZC5cclxuICAqIEBwYXJhbSB7UG9saWN5fSBwb2xpY3kgT2JqZWN0IG9mIHRoZSBQb2xpY3kgdHlwZS5cclxuICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cclxuICAqL1xyXG4gIHN0YXJ0QnJvYWRjYXN0aW5nKG5hbWU6IHN0cmluZywgc2VydmljZUlkOiBzdHJpbmcsIHBvbGljeTogUG9saWN5KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICogU3RvcHMgYnJvYWRjYXN0aW5nLlxyXG4gICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICovXHJcbiAgc3RvcEJyb2FkY2FzdGluZygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgKiBTdGFydHMgdG8gc2NhbiBmb3IgcmVtb3RlIGVuZHBvaW50cyB3aXRoIHRoZSBzcGVjaWZpZWQgc2VydmljZSBJRC5cclxuICAqIEBwYXJhbSB7c3RyaW5nfSBzZXJ2aWNlSWQgU2VydmljZSBJRC4gVGhlIGFwcCBwYWNrYWdlIG5hbWUgaXMgcmVjb21tZW5kZWQuXHJcbiAgKiBAcGFyYW0ge1BvbGljeX0gcG9saWN5IE9iamVjdCBvZiB0aGUgUG9saWN5IHR5cGUuXHJcbiAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgKi9cclxuICBzdGFydFNjYW4oc2VydmljZUlkOiBzdHJpbmcsIHBvbGljeTogUG9saWN5KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICogU3RvcHMgZGlzY292ZXJpbmcgZGV2aWNlcy5cclxuICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cclxuICAqL1xyXG4gIHN0b3BTY2FuKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAqIFNlbmRzIGEgcmVxdWVzdCB0byBjb25uZWN0IHRvIGEgcmVtb3RlIGVuZHBvaW50LlxyXG4gICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgTG9jYWwgZW5kcG9pbnQgbmFtZS5cclxuICAqIEBwYXJhbSB7c3RyaW5nfSBlbmRwb2ludElkIElEIG9mIHRoZSByZW1vdGUgZW5kcG9pbnQuXHJcbiAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgKi9cclxuICByZXF1ZXN0Q29ubmVjdChuYW1lOiBzdHJpbmcsIGVuZHBvaW50SWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBTZW5kcyBhIHJlcXVlc3QgdG8gY29ubmVjdCB0byBhIHJlbW90ZSBlbmRwb2ludC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBMb2NhbCBlbmRwb2ludCBuYW1lLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbmRwb2ludElkIElEIG9mIHRoZSByZW1vdGUgZW5kcG9pbnQuXHJcbiAgICogQHBhcmFtIHtDaGFubmVsUG9saWN5fSBjaGFubmVsUG9saWN5IENoYW5uZWwgcG9saWN5LCB3aGljaCBpcyB1c2VkIHRvIHNlbGVjdCB0aGUgY2hhbm5lbCBmb3IgZXN0YWJsaXNoaW5nIGEgY29ubmVjdGlvbi5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgICovXHJcbiAgcmVxdWVzdENvbm5lY3RFeChuYW1lOiBzdHJpbmcsIGVuZHBvaW50SWQ6IHN0cmluZywgY2hhbm5lbFBvbGljeTogQ2hhbm5lbFBvbGljeSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAqIEFjY2VwdHMgYSBjb25uZWN0aW9uLiBUaGlzIEFQSSBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgZGF0YSB0cmFuc21pc3Npb24uIElmIHRoZSBjb25uZWN0aW9uIHJlcXVlc3QgaXMgbm90IGFjY2VwdGVkIHdpdGhpbiA4IHNlY29uZHMsIHRoZSBjb25uZWN0aW9uIGZhaWxzIGFuZCBuZWVkcyB0byBiZSByZS1pbml0aWF0ZWQuXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gZW5kcG9pbnRJZCBJRCBvZiB0aGUgcmVtb3RlIGVuZHBvaW50LlxyXG4gICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICovXHJcbiAgYWNjZXB0Q29ubmVjdChlbmRwb2ludElkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgKiBSZWplY3RzIGEgY29ubmVjdGlvbiByZXF1ZXN0IGZyb20gYSByZW1vdGUgZW5kcG9pbnQuXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gZW5kcG9pbnRJZCBJRCBvZiB0aGUgcmVtb3RlIGVuZHBvaW50LlxyXG4gICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICovXHJcbiAgcmVqZWN0Q29ubmVjdChlbmRwb2ludElkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgKiBEaXNjb25uZWN0cyBmcm9tIGEgcmVtb3RlIGVuZHBvaW50LiBUaGVuIGNvbW11bmljYXRpb24gd2l0aCB0aGUgcmVtb3RlIGVuZHBvaW50IGlzIG5vIGxvbmdlciBhdmFpbGFibGUuXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gZW5kcG9pbnRJZCBJRCBvZiB0aGUgcmVtb3RlIGVuZHBvaW50LlxyXG4gICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICovXHJcbiAgZGlzY29ubmVjdChlbmRwb2ludElkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgKiBEaXNjb25uZWN0cyBhbGwgY29ubmVjdGlvbnMuXHJcbiAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgKi9cclxuICBkaXNjb25uZWN0QWxsKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vIFRSQU5TRkVSIC8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgKiBUcmFuc2ZlcnMgZ2l2ZW4gYnl0ZXMgdG8gZ2l2ZW4gZW5kcG9pbnQgaWRzLlxyXG4gICogQHBhcmFtIHtudW1iZXJbXX0gYnl0ZXMgbnVtYmVyIGFycmF5IHRoYXQgY29udGFpbnMgeW91ciBkYXRhLlxyXG4gICogQHBhcmFtIHtzdHJpbmdbXX0gZW5kcG9pbnRJZHMgc3RyaW5nIGFycmF5IG9mIHJlbW90ZSBlbmRwb2ludCBJRHMuXHJcbiAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgKi9cclxuICBzZW5kQnl0ZXMoYnl0ZXM6IG51bWJlcltdLCBlbmRwb2ludElkczogc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgKiBUcmFuc2ZlcnMgZmlsZSBmcm9tIGdpdmVuIFVSSSB0byBnaXZlbiBlbmRwb2ludCBpZHMuIFRyYW5zZmVycmVkIGZpbGUgaXMgc2F2ZWQgaW4gc3Vic2NyaWJlcidzIGRldmljZSB1bmRlciBEb3dubG9hZHMvTmVhcmJ5LyBkaXJlY3Rvcnkgd2l0aCBuYW1lIGRhdGEgaWQuXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZVVyaSBGaWxlIFVSSS5cclxuICAqIEBwYXJhbSB7c3RyaW5nW119IGVuZHBvaW50SWRzIHN0cmluZyBhcnJheSBvZiByZW1vdGUgZW5kcG9pbnQgSURzLlxyXG4gICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICovXHJcbiAgc2VuZEZpbGUoZmlsZVVyaTogc3RyaW5nLCBlbmRwb2ludElkczogc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgKiBUcmFuc2ZlcnMgc3RyZWFtIGZyb20gZ2l2ZW4gVVJMIHRvIGdpdmVuIGVuZHBvaW50IGlkcy5cclxuICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJlYW1VcmwgU3RyZWFtIFVSTC5cclxuICAqIEBwYXJhbSB7c3RyaW5nW119IGVuZHBvaW50SWRzIHN0cmluZyBhcnJheSBvZiByZW1vdGUgZW5kcG9pbnQgSURzLlxyXG4gICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICovXHJcbiAgc2VuZFN0cmVhbShzdHJlYW1Vcmw6IHN0cmluZywgZW5kcG9pbnRJZHM6IHN0cmluZ1tdKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICogQ2FuY2VscyBkYXRhIHRyYW5zbWlzc2lvbiB3aGVuIHNlbmRpbmcgb3IgcmVjZWl2aW5nIGRhdGEuXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YUlkIElEIG9mIHRoZSBkYXRhIHdob3NlIHRyYW5zbWlzc2lvbiBpcyB0byBiZSBjYW5jZWxlZC5cclxuICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cclxuICAqL1xyXG4gIGNhbmNlbERhdGFUcmFuc2ZlcihkYXRhSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8gTUVTU0FHRSAvLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICogT2J0YWlucyB0aGUgY3VycmVudCBBUEkgY3JlZGVudGlhbC5cclxuICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPiBQcm9taXNlIHJlc3VsdCBvZiBhbiBleGVjdXRpb24gdGhhdCByZXR1cm5zIHRoZSBjdXJyZW50IEFQSSBjcmVkZW50aWFsLlxyXG4gICovXHJcbiAgZ2V0QXBpS2V5KCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICogU2V0cyB0aGUgQVBJIGNyZWRlbnRpYWwgZm9yIHlvdXIgYXBwLlxyXG4gICogQHBhcmFtIHtzdHJpbmd9IGFwaUtleSBBUEkgY3JlZGVudGlhbC5cclxuICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cclxuICAqL1xyXG4gIHNldEFwaUtleShhcGlLZXk6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBQdWJsaXNoZXMgYSBtZXNzYWdlIGFuZCBicm9hZGNhc3RzIGEgdG9rZW4gZm9yIG5lYXJieSBkZXZpY2VzIHRvIHNjYW4uXHJcbiAgKiBAcGFyYW0ge01lc3NhZ2V9IG1lc3NhZ2UgUHVibGlzaGVkIG1lc3NhZ2UuXHJcbiAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgKi9cclxuICBwdXQobWVzc2FnZTogTWVzc2FnZSk6IFByb21pc2U8dm9pZD47XHJcbiAgLyoqXHJcbiAgKiBQdWJsaXNoZXMgYSBtZXNzYWdlIGFuZCBicm9hZGNhc3RzIGEgdG9rZW4gZm9yIG5lYXJieSBkZXZpY2VzIHRvIHNjYW4uIFRoaXMgbWVzc2FnZSBpcyBwdWJsaXNoZWQgb25seSB0byBhcHBzIHRoYXQgdXNlIHRoZSBzYW1lIHByb2plY3QgSUQgYW5kIGhhdmUgcmVnaXN0ZXJlZCB0aGUgbWVzc2FnZSB0eXBlIHdpdGggdGhlIGNsb3VkIGZvciBzdWJzY3JpcHRpb24uXHJcbiAgKiBAcGFyYW0ge01lc3NhZ2V9IG1lc3NhZ2UgUHVibGlzaGVkIG1lc3NhZ2UuXHJcbiAgKiBAcGFyYW0ge1B1dE9wdGlvbn0gcHV0T3B0aW9uIFB1dE9wdGlvbiBwYXJhbWV0ZXJzLlxyXG4gICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICovXHJcbiAgcHV0KG1lc3NhZ2U6IE1lc3NhZ2UsIHB1dE9wdGlvbjogUHV0T3B0aW9uKTogUHJvbWlzZTx2b2lkPjtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHB1dChtZXNzYWdlOiBNZXNzYWdlLCBwdXRPcHRpb24/OiBQdXRPcHRpb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogT2J0YWlucyBtZXNzYWdlcyBmcm9tIHRoZSBjbG91ZCB1c2luZyB0aGUgZGVmYXVsdCBvcHRpb24gKERFRkFVTFQpLlxyXG4gICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICovXHJcbiAgZ2V0KCk6IFByb21pc2U8dm9pZD47XHJcbiAgLyoqXHJcbiAgKiBSZWdpc3RlcnMgdGhlIG1lc3NhZ2VzIHRvIGJlIG9idGFpbmVkIHdpdGggdGhlIGNsb3VkLiBPbmx5IG1lc3NhZ2VzIHdpdGggdGhlIHNhbWUgcHJvamVjdCBJRCBjYW4gYmUgb2J0YWluZWQuXHJcbiAgKiBAcGFyYW0ge0dldE9wdGlvbn0gZ2V0T3B0aW9uXHJcbiAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgKi9cclxuICBnZXQoZ2V0T3B0aW9uOiBHZXRPcHRpb24pOiBQcm9taXNlPHZvaWQ+O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0KGdldE9wdGlvbj86IEdldE9wdGlvbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBJZGVudGlmaWVzIG9ubHkgQkxFIGJlYWNvbiBtZXNzYWdlcy4gSXQgc3Vic2NyaWJlcyB0byBtZXNzYWdlcyBwdWJsaXNoZWQgYnkgbmVhcmJ5IGRldmljZXMgaW4gYSBwZXJzaXN0ZW50IGFuZCBsb3ctcG93ZXIgbWFubmVyIGFuZCB1c2VzIHRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gKERFRkFVTFQpLiBTY2FubmluZyBpcyBnb2luZyBvbiBubyBtYXR0ZXIgd2hldGhlciB5b3VyIGFwcCBydW5zIGluIHRoZSBiYWNrZ3JvdW5kIG9yIGZvcmVncm91bmQuIFRoZSBzY2FubmluZyBzdG9wcyB3aGVuIHRoZSBhcHAgcHJvY2VzcyBpcyBraWxsZWQuXHJcbiAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgKi9cclxuICBnZXRJbkJhY2tncm91bmQoKTogUHJvbWlzZTx2b2lkPjtcclxuICAvKipcclxuICAqIElkZW50aWZpZXMgb25seSBCTEUgYmVhY29uIG1lc3NhZ2VzLiBTY2FubmluZyBpcyBnb2luZyBvbiBubyBtYXR0ZXIgd2hldGhlciB5b3VyIGFwcCBydW5zIGluIHRoZSBiYWNrZ3JvdW5kIG9yIGZvcmVncm91bmQuIFRoZSBzY2FubmluZyBzdG9wcyB3aGVuIHRoZSBhcHAgcHJvY2VzcyBpcyBraWxsZWQuXHJcbiAgKiBAcGFyYW0ge0dldE9wdGlvbn0gZ2V0T3B0aW9uXHJcbiAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgKi9cclxuICBnZXRJbkJhY2tncm91bmQoZ2V0T3B0aW9uOiBHZXRPcHRpb24pOiBQcm9taXNlPHZvaWQ+O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0SW5CYWNrZ3JvdW5kKGdldE9wdGlvbj86IEdldE9wdGlvbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAqIENhbmNlbHMgbWVzc2FnZSBwdWJsaXNoaW5nLlxyXG4gICogQHBhcmFtIHtNZXNzYWdlfSBtZXNzYWdlIFB1Ymxpc2hlZCBtZXNzYWdlLlxyXG4gICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICovXHJcbiAgdW5wdXQobWVzc2FnZTogTWVzc2FnZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAqIENhbmNlbHMgYSBtZXNzYWdlIHN1YnNjcmlwdGlvbi5cclxuICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cclxuICAqL1xyXG4gIHVuZ2V0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAqIENhbmNlbHMgdGhlIGN1cnJlbnQgbWVzc2FnZSBzdWJzY3JpcHRpb24uXHJcbiAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgKi9cclxuICB1bmdldEluQmFja2dyb3VuZCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vIFdJRkkgLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAqIEVuYWJsZSB0aGUgV2ktRmkgc2hhcmluZyBmdW5jdGlvbi4gU2V0IFdpZmlTaGFyZVBvbGljeSBiYXNlZCBvbiBmdW5jdGlvbiByZXF1aXJlbWVudHMuXHJcbiAgKiBAcGFyYW0ge1dpZmlTaGFyZVBvbGljeX0gd2lmaVNoYXJlUG9saWN5IFdpLUZpIHNoYXJpbmcgcG9saWN5LiBFbmFibGUgdGhlIFdpLUZpIHNoYXJpbmcgbW9kZSBvciBjb25maWd1cmF0aW9uIG1vZGUgYXMgcmVxdWlyZWQuXHJcbiAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgKi9cclxuICBzdGFydFdpZmlTaGFyZSh3aWZpU2hhcmVQb2xpY3k6IFdpZmlTaGFyZVBvbGljeSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAqIERpc2FibGVzIHRoZSBXaS1GaSBzaGFyaW5nIGZ1bmN0aW9uLlxyXG4gICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICovXHJcbiAgc3RvcFdpZmlTaGFyZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgKiBTaGFyZXMgV2ktRmkgd2l0aCBhIHJlbW90ZSBkZXZpY2UuXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gZW5kcG9pbnRJZCBJRCBvZiB0aGUgcmVtb3RlIGVuZHBvaW50LlxyXG4gICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICovXHJcbiAgc2hhcmVXaWZpQ29uZmlnKGVuZHBvaW50SWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8gVkVSU0lPTiAvLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIE9idGFpbnMgdGhlIE5lYXJieSBTZXJ2aWNlIFNESyB2ZXJzaW9uIG51bWJlci5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz4gVmVyc2lvbiBudW1iZXIgb2YgdGhlIE5lYXJieSBTZXJ2aWNlIFNESy5cclxuICAgKi9cclxuICBnZXRWZXJzaW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGVudW0gSE1TTmVhcmJ5RXZlbnQge1xyXG4gIEVWRU5UX0NPTk5FQ1RJT05fT05fRVNUQUJMSVNIID0gXCJldmVudENvbm5lY3Rpb25PbkVzdGFibGlzaFwiLFxyXG4gIEVWRU5UX0NPTk5FQ1RJT05fT05fUkVTVUxUID0gXCJldmVudENvbm5lY3Rpb25PblJlc3VsdFwiLFxyXG4gIEVWRU5UX0NPTk5FQ1RJT05fT05fRElTQ09OTkVDVCA9IFwiZXZlbnRDb25uZWN0aW9uT25EaXNjb25uZWN0XCIsXHJcbiAgRVZFTlRfU0NBTl9PTl9GT1VORCA9IFwiZXZlbnRTY2FuT25Gb3VuZFwiLFxyXG4gIEVWRU5UX1NDQU5fT05fTE9TVCA9IFwiZXZlbnRTY2FuT25Mb3N0XCIsXHJcbiAgRVZFTlRfREFUQV9PTl9SRUNFSVZFRCA9IFwiZXZlbnREYXRhT25SZWNlaXZlZFwiLFxyXG4gIEVWRU5UX0RBVEFfT05fVFJBTlNGRVJfVVBEQVRFID0gXCJldmVudERhdGFPblRyYW5zZmVyVXBkYXRlXCIsXHJcbiAgRVZFTlRfTUVTU0FHRV9PTl9CTEVfU0lHTkFMX0NIQU5HRUQgPSBcImV2ZW50TWVzc2FnZU9uQmxlU2lnbmFsQ2hhbmdlZFwiLFxyXG4gIEVWRU5UX01FU1NBR0VfT05fRElTVEFOQ0VfQ0hBTkdFRCA9IFwiZXZlbnRNZXNzYWdlT25EaXN0YW5jZUNoYW5nZWRcIixcclxuICBFVkVOVF9NRVNTQUdFX09OX0ZPVU5EID0gXCJldmVudE1lc3NhZ2VPbkZvdW5kXCIsXHJcbiAgRVZFTlRfTUVTU0FHRV9PTl9MT1NUID0gXCJldmVudE1lc3NhZ2VPbkxvc3RcIixcclxuICBFVkVOVF9QVVRfT05fVElNRU9VVCA9IFwiZXZlbnRQdXRPblRpbWVvdXRcIixcclxuICBFVkVOVF9HRVRfT05fVElNRU9VVCA9IFwiZXZlbnRHZXRPblRpbWVvdXRcIixcclxuICBFVkVOVF9TVEFUVVNfT05fUEVSTUlTU0lPTl9DSEFOR0VEID0gXCJldmVudFN0YXR1c09uUGVybWlzc2lvbkNoYW5nZWRcIixcclxuICBFVkVOVF9XSUZJX09OX0ZPVU5EID0gXCJldmVudFdpZmlPbkZvdW5kXCIsXHJcbiAgRVZFTlRfV0lGSV9PTl9MT1NUID0gXCJldmVudFdpZmlPbkxvc3RcIixcclxuICBFVkVOVF9XSUZJX09OX0ZFVENIX0FVVEhfQ09ERSA9IFwiZXZlbnRXaWZpT25GZXRjaEF1dGhDb2RlXCIsXHJcbiAgRVZFTlRfV0lGSV9PTl9TSEFSRV9SRVNVTFQgPSBcImV2ZW50V2lmaU9uU2hhcmVSZXN1bHRcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBITVNQZXJtaXNzaW9uIHtcclxuICBQRVJNSVNTSU9OX0JMVUVUT09USCA9IFwiYW5kcm9pZC5wZXJtaXNzaW9uLkJMVUVUT09USFwiLFxyXG4gIFBFUk1JU1NJT05fQkxVRVRPT1RIX0FETUlOID0gXCJhbmRyb2lkLnBlcm1pc3Npb24uQkxVRVRPT1RIX0FETUlOXCIsXHJcbiAgUEVSTUlTU0lPTl9BQ0NFU1NfV0lGSV9TVEFURSA9IFwiYW5kcm9pZC5wZXJtaXNzaW9uLkFDQ0VTU19XSUZJX1NUQVRFXCIsXHJcbiAgUEVSTUlTU0lPTl9DSEFOR0VfV0lGSV9TVEFURSA9IFwiYW5kcm9pZC5wZXJtaXNzaW9uLkNIQU5HRV9XSUZJX1NUQVRFXCIsXHJcbiAgUEVSTUlTU0lPTl9BQ0NFU1NfQ09BUlNFX0xPQ0FUSU9OID0gXCJhbmRyb2lkLnBlcm1pc3Npb24uQUNDRVNTX0NPQVJTRV9MT0NBVElPTlwiLFxyXG4gIFBFUk1JU1NJT05fQUNDRVNTX0ZJTkVfTE9DQVRJT04gPSBcImFuZHJvaWQucGVybWlzc2lvbi5BQ0NFU1NfRklORV9MT0NBVElPTlwiLFxyXG4gIFBFUk1JU1NJT05fUkVBRF9FWFRFUk5BTF9TVE9SQUdFID0gXCJhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9FWFRFUk5BTF9TVE9SQUdFXCIsXHJcbiAgUEVSTUlTU0lPTl9XUklURV9FWFRFUk5BTF9TVE9SQUdFID0gXCJhbmRyb2lkLnBlcm1pc3Npb24uV1JJVEVfRVhURVJOQUxfU1RPUkFHRVwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBvbGljeSB7XHJcbiAgUE9MSUNZX01FU0ggPSAxLFxyXG4gIFBPTElDWV9QMlAgPSAyLFxyXG4gIFBPTElDWV9TVEFSID0gM1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBEYXRhVHlwZSB7XHJcbiAgREFUQV9GSUxFID0gMSxcclxuICBEQVRBX0JZVEVTID0gMixcclxuICBEQVRBX1NUUkVBTSA9IDNcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVHJhbnNmZXJTdGF0ZSB7XHJcbiAgVFJBTlNGRVJfU1RBVEVfU1VDQ0VTUyA9IDEsXHJcbiAgVFJBTlNGRVJfU1RBVEVfRkFJTFVSRSA9IDIsXHJcbiAgVFJBTlNGRVJfU1RBVEVfSU5fUFJPR1JFU1MgPSAzLFxyXG4gIFRSQU5TRkVSX1NUQVRFX0NBTkNFTEVEID0gNFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBNZXNzYWdlUG9saWN5RGlzdGFuY2VUeXBlIHtcclxuICBQT0xJQ1lfRElTVEFOQ0VfVFlQRV9ERUZBVUxUID0gMCxcclxuICBQT0xJQ1lfRElTVEFOQ0VfVFlQRV9FQVJTSE9UID0gMVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBNZXNzYWdlUG9saWN5RmluZGluZ01vZGUge1xyXG4gIFBPTElDWV9GSU5ESU5HX01PREVfREVGQVVMVCA9IDAsXHJcbiAgUE9MSUNZX0ZJTkRJTkdfTU9ERV9CUk9BRENBU1QgPSAxLFxyXG4gIFBPTElDWV9GSU5ESU5HX01PREVfU0NBTiA9IDJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTWVzc2FnZVBvbGljeVR0bFNlY29uZHMge1xyXG4gIFBPTElDWV9UVExfU0VDT05EU19ERUZBVUxUID0gMjQwLFxyXG4gIFBPTElDWV9UVExfU0VDT05EU19NQVggPSA4NjQwMCxcclxuICBQT0xJQ1lfVFRMX1NFQ09ORFNfSU5GSU5JVEUgPSAyMTQ3NDgzNjQ3XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFdpZmlTaGFyZVBvbGljeSB7XHJcbiAgUE9MSUNZX1NIQVJFID0gMSxcclxuICBQT0xJQ1lfU0VUID0gMlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDaGFubmVsUG9saWN5IHtcclxuICBDSEFOTkVMX0FVVE8gPSAxLFxyXG4gIENIQU5ORUxfSElHSF9USFJPVUdIUFVUID0gMixcclxuICBDSEFOTkVMX0lOU1RBTkNFID0gM1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBTdGF0dXNDb2RlIHtcclxuICBTVEFUVVNfU1VDQ0VTUyA9IDAsXHJcbiAgU1RBVFVTX0ZBSUxVUkUgPSAtMSxcclxuICBTVEFUVVNfQVBJX0RJU09SREVSID0gODAwMSxcclxuICBTVEFUVVNfTk9fTkVUV09SSyA9IDgwMDIsXHJcbiAgU1RBVFVTX05PVF9DT05ORUNURUQgPSA4MDAzLFxyXG4gIFNUQVRVU19UUkFOU0ZFUl9JT19FUlJPUiA9IDgwMDQsXHJcbiAgU1RBVFVTX0FMUkVBRFlfQlJPQURDQVNUSU5HID0gODAwNSxcclxuICBTVEFUVVNfQUxSRUFEWV9DT05ORUNURUQgPSA4MDA2LFxyXG4gIFNUQVRVU19BTFJFQURZX1NDQU5OSU5HID0gODAwNyxcclxuICBTVEFUVVNfUE9MSUNZX0NPTkZMSUNUID0gODAwOCxcclxuICBTVEFUVVNfQkxVRVRPT1RIX09QRVJBVElPTl9GQUlMRUQgPSA4MDA5LFxyXG4gIFNUQVRVU19DT05ORUNUX1JFSkVDVEVEID0gODAxMCxcclxuICBTVEFUVVNfQ09OTkVDVF9JT19FUlJPUiA9IDgwMTEsXHJcbiAgU1RBVFVTX0VORFBPSU5UX1VOS05PV04gPSA4MDEyLFxyXG4gIFNUQVRVU19BUElfT0NDVVBJRUQgPSA4MDEzLFxyXG4gIFNUQVRVU19NSVNTSU5HX1BFUk1JU1NJT05fQUNDRVNTX0NPQVJTRV9MT0NBVElPTiA9IDgwMTQsXHJcbiAgU1RBVFVTX01JU1NJTkdfUEVSTUlTU0lPTl9BQ0NFU1NfV0lGSV9TVEFURSA9IDgwMTUsXHJcbiAgU1RBVFVTX01JU1NJTkdfUEVSTUlTU0lPTl9CTFVFVE9PVEggPSA4MDE2LFxyXG4gIFNUQVRVU19NSVNTSU5HX1BFUk1JU1NJT05fQkxVRVRPT1RIX0FETUlOID0gODAxNyxcclxuICBTVEFUVVNfTUlTU0lOR19QRVJNSVNTSU9OX0NIQU5HRV9XSUZJX1NUQVRFID0gODAxOCxcclxuICBTVEFUVVNfTUlTU0lOR19QRVJNSVNTSU9OX1JFQ09SRF9BVURJTyA9IDgwMTksXHJcbiAgU1RBVFVTX01JU1NJTkdfU0VUVElOR19MT0NBVElPTl9PTiA9IDgwMjAsXHJcbiAgU1RBVFVTX0FJUlBMQU5FX01PREVfTVVTVF9CRV9PRkYgPSA4MDIxLFxyXG4gIFNUQVRVU19NRVNTQUdFX0FQUF9VTlJFR0lTVEVSRUQgPSA4MDUwLFxyXG4gIFNUQVRVU19NRVNTQUdFX0FQUF9RVU9UQV9MSU1JVEVEID0gODA1MSxcclxuICBTVEFUVVNfTUVTU0FHRV9CTEVfQlJPQURDQVNUSU5HX1VOU1VQUE9SVEVEID0gODA1MixcclxuICBTVEFUVVNfTUVTU0FHRV9CTEVfU0NBTk5JTkdfVU5TVVBQT1JURUQgPSA4MDUzLFxyXG4gIFNUQVRVU19NRVNTQUdFX0JMVUVUT09USF9PRkYgPSA4MDU0LFxyXG4gIFNUQVRVU19NRVNTQUdFX1dST05HX0NPTlRFWFQgPSA4MDU1LFxyXG4gIFNUQVRVU19NRVNTQUdFX05PVF9BTExPVyA9IDgwNTYsXHJcbiAgU1RBVFVTX01FU1NBR0VfTUlTU0lOR19QRVJNSVNTSU9OUyA9IDgwNTcsXHJcbiAgU1RBVFVTX01FU1NBR0VfQVVUSF9GQUlMRUQgPSA4MDU4LFxyXG4gIFNUQVRVU19NRVNTQUdFX1BFTkRJTkdfSU5URU5UU19MSU1JVEVEID0gODA1OSxcclxuICBTVEFUVVNfSU5URVJOQUxfRVJST1IgPSA4MDYwLFxyXG4gIFNUQVRVU19GSU5ESU5HX01PREVfRVJST1IgPSA4MDYxLFxyXG4gIFNUQVRVU19NRVNTQUdFX1RBU0tfQUxSRUFEWV9JTl9QUk9DRVNTSU5HID0gODA2MixcclxuICBTVEFUVVNfTUlTU0lOR19QRVJNSVNTSU9OX0ZJTEVfUkVBRF9XUklURSA9IDgwNjMsXHJcbiAgU1RBVFVTX01JU1NJTkdfUEVSTUlTU0lPTl9JTlRFUk5FVCA9IDgwNjQsXHJcbiAgU1RBVFVTX1dJRklfU0hBUkVfVVNFUl9BVVRIX0ZBSUwgPSA4MDY1LFxyXG4gIFNUQVRVU19XSUZJX1NIQVJFX1dJRklfQ0xPU0VEID0gODA2NixcclxuICBTVEFUVVNfV0lGSV9DT05ORUNUX0ZBSUwgPSA4MDY3XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZSB7XHJcbiAgY29udGVudDogbnVtYmVyW10sXHJcbiAgbmFtZXNwYWNlPzogc3RyaW5nLFxyXG4gIHR5cGU/OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFZGR5c3RvbmVVaWQge1xyXG4gIGhleE5hbWVzcGFjZTogc3RyaW5nLFxyXG4gIGhleEluc3RhbmNlOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQmVhY29uSWQge1xyXG4gIGlCZWFjb25VdWlkOiBzdHJpbmcsXHJcbiAgbWFqb3I6IG51bWJlcixcclxuICBtaW5vcjogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmFtZXNwYWNlVHlwZSB7XHJcbiAgbmFtZXNwYWNlOiBzdHJpbmcsXHJcbiAgdHlwZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZVBpY2tlciB7XHJcbiAgaW5jbHVkZUFsbFR5cGVzPzogYm9vbGVhbixcclxuICBlZGR5c3RvbmVVaWRzPzogRWRkeXN0b25lVWlkW10sXHJcbiAgaUJlYWNvbklkcz86IElCZWFjb25JZFtdLFxyXG4gIG5hbWVzcGFjZVR5cGVzPzogTmFtZXNwYWNlVHlwZVtdXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZVBvbGljeSB7XHJcbiAgZGlzdGFuY2VUeXBlPzogTWVzc2FnZVBvbGljeURpc3RhbmNlVHlwZSxcclxuICBmaW5kaW5nTW9kZT86IE1lc3NhZ2VQb2xpY3lGaW5kaW5nTW9kZSxcclxuICB0dGxTZWNvbmRzPzogTWVzc2FnZVBvbGljeVR0bFNlY29uZHNcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQdXRPcHRpb24ge1xyXG4gIHBvbGljeT86IE1lc3NhZ2VQb2xpY3lcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHZXRPcHRpb24ge1xyXG4gIHBpY2tlcj86IE1lc3NhZ2VQaWNrZXIsXHJcbiAgcG9saWN5PzogTWVzc2FnZVBvbGljeVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJsZVNpZ25hbCB7XHJcbiAgcnNzaTogbnVtYmVyLFxyXG4gIHR4UG93ZXI6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpc3RhbmNlIHtcclxuICBwcmVjaXNpb246IG51bWJlcixcclxuICBtZXRlcnM6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQkxFX1VOS05PV05fVFhfUE9XRVI6IG51bWJlciA9IDB4ODAwMDAwMDA7XHJcbmV4cG9ydCBjb25zdCBQUkVDSVNJT05fTE9XOiBudW1iZXIgPSAxO1xyXG5leHBvcnQgY29uc3QgTUFYX1NJWkVfREFUQTogbnVtYmVyID0gMzI3Njg7XHJcbmV4cG9ydCBjb25zdCBNQVhfQ09OVEVOVF9TSVpFOiBudW1iZXIgPSA2NTUzNjtcclxuZXhwb3J0IGNvbnN0IE1BWF9UWVBFX0xFTkdUSDogbnVtYmVyID0gMTY7XHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFX05BTUVTUEFDRV9SRVNFUlZFRDogc3RyaW5nID0gXCJfcmVzZXJ2ZWRfbmFtZXNwYWNlXCI7XHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFX1RZUEVfRUREWVNUT05FX1VJRDogc3RyaW5nID0gXCJfZWRkeXN0b25lX3VpZFwiO1xyXG5leHBvcnQgY29uc3QgTUVTU0FHRV9UWVBFX0lfQkVBQ09OX0lEOiBzdHJpbmcgPSBcIl9pYmVhY29uX2lkXCI7XHJcbmV4cG9ydCBjb25zdCBESVNUQU5DRV9VTktOT1dOOiBEaXN0YW5jZSA9IHtcclxuICAgIHByZWNpc2lvbjogUFJFQ0lTSU9OX0xPVyxcclxuICAgIG1ldGVyczogTmFOXHJcbn1cclxuZXhwb3J0IGNvbnN0IE1FU1NBR0VfUElDS0VSX0lOQ0xVREVfQUxMX1RZUEVTOiBNZXNzYWdlUGlja2VyID0ge1xyXG4gICAgaW5jbHVkZUFsbFR5cGVzOiB0cnVlXHJcbn1cclxuZXhwb3J0IGNvbnN0IE1FU1NBR0VfUE9MSUNZX0RFRkFVTFQ6IE1lc3NhZ2VQb2xpY3kgPSB7fVxyXG5leHBvcnQgY29uc3QgTUVTU0FHRV9QT0xJQ1lfQkxFX09OTFk6IE1lc3NhZ2VQb2xpY3kgPSB7XHJcbiAgICB0dGxTZWNvbmRzOiBNZXNzYWdlUG9saWN5VHRsU2Vjb25kcy5QT0xJQ1lfVFRMX1NFQ09ORFNfSU5GSU5JVEUsXHJcbiAgICBmaW5kaW5nTW9kZTogTWVzc2FnZVBvbGljeUZpbmRpbmdNb2RlLlBPTElDWV9GSU5ESU5HX01PREVfU0NBTlxyXG59XHJcbmV4cG9ydCBjb25zdCBHRVRfT1BUSU9OX0RFRkFVTFQ6IEdldE9wdGlvbiA9IHtcclxuICAgIHBpY2tlcjogTUVTU0FHRV9QSUNLRVJfSU5DTFVERV9BTExfVFlQRVMsXHJcbiAgICBwb2xpY3k6IE1FU1NBR0VfUE9MSUNZX0RFRkFVTFRcclxufVxyXG5leHBvcnQgY29uc3QgUFVUX09QVElPTl9ERUZBVUxUOiBQdXRPcHRpb24gPSB7XHJcbiAgICBwb2xpY3k6IE1FU1NBR0VfUE9MSUNZX0RFRkFVTFRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFbmRwb2ludElkIHtcclxuICBlbmRwb2ludElkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25uZWN0SW5mbyB7XHJcbiAgZW5kcG9pbnRJZDogc3RyaW5nLFxyXG4gIGVuZHBvaW50TmFtZTogc3RyaW5nLFxyXG4gIGF1dGhDb2RlOiBzdHJpbmcsXHJcbiAgaXNSZW1vdGVDb25uZWN0OiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29ubmVjdFJlc3VsdCB7XHJcbiAgZW5kcG9pbnRJZDogc3RyaW5nLFxyXG4gIHN0YXR1c0NvZGU6IFN0YXR1c0NvZGUsXHJcbiAgc3RhdHVzTWVzc2FnZTogc3RyaW5nLFxyXG4gIGNoYW5uZWxQb2xpY3k6IENoYW5uZWxQb2xpY3lcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTY2FuRW5kcG9pbnRJbmZvIHtcclxuICBlbmRwb2ludElkOiBzdHJpbmcsXHJcbiAgc2VydmljZUlkOiBzdHJpbmcsXHJcbiAgbmFtZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YSB7XHJcbiAgZW5kcG9pbnRJZDogc3RyaW5nLFxyXG4gIGRhdGFUeXBlOiBEYXRhVHlwZSxcclxuICBkYXRhSWQ6IHN0cmluZyxcclxuICBzaXplPzogbnVtYmVyLFxyXG4gIGRhdGE/OiBudW1iZXJbXSxcclxuICBmaWxlVXJpPzogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNmZXJTdGF0ZVVwZGF0ZSB7XHJcbiAgZW5kcG9pbnRJZDogc3RyaW5nLFxyXG4gIGRhdGFJZDogc3RyaW5nLFxyXG4gIHN0YXR1czogVHJhbnNmZXJTdGF0ZSxcclxuICB0cmFuc2ZlcnJlZEJ5dGVzOiBudW1iZXIsXHJcbiAgdG90YWxCeXRlczogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmxlU2lnbmFsVXBkYXRlIHtcclxuICBtZXNzYWdlOiBNZXNzYWdlLFxyXG4gIGJsZVNpZ25hbDogQmxlU2lnbmFsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlzdGFuY2VVcGRhdGUge1xyXG4gIG1lc3NhZ2U6IE1lc3NhZ2UsXHJcbiAgZGlzdGFuY2U6IERpc3RhbmNlXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZVRpbWVvdXQge1xyXG4gIG1lc3NhZ2U6IE1lc3NhZ2UsXHJcbiAgc3RhdHVzOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uVXBkYXRlIHtcclxuICBncmFudFBlcm1pc3Npb246IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRoQ29kZVVwZGF0ZSB7XHJcbiAgZW5kcG9pbnRJZDogc3RyaW5nLFxyXG4gIGF1dGhDb2RlOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaWZpU2hhcmVSZXN1bHQge1xyXG4gIGVuZHBvaW50SWQ6IHN0cmluZyxcclxuICBzdGF0dXNDb2RlOiBTdGF0dXNDb2RlXHJcbn1cclxuIl19