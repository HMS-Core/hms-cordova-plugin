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

import { __decorate, __extends } from "tslib";
import { Injectable } from "@angular/core";
import { AwesomeCordovaNativePlugin, cordova } from "@awesome-cordova-plugins/core";
import * as i0 from "@angular/core";
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
    HMSNearby.prototype.registerScanTask = function (beaconOption) { return cordova(this, "registerScanTask", { "otherPromise": true }, arguments); };
    HMSNearby.prototype.unRegisterScanTask = function () { return cordova(this, "unRegisterScanTask", { "otherPromise": true }, arguments); };
    HMSNearby.prototype.getBeaconMsgConditions = function () { return cordova(this, "getBeaconMsgConditions", { "otherPromise": true }, arguments); };
    HMSNearby.prototype.getRawBeaconConditions = function () { return cordova(this, "getRawBeaconConditions", { "otherPromise": true }, arguments); };
    HMSNearby.prototype.getRawBeaconConditionsWithBeaconType = function (beaconType) { return cordova(this, "getRawBeaconConditionsWithBeaconType", { "otherPromise": true }, arguments); };
    /**
     * Obtains the Nearby Service SDK version number.
     * @returns Promise<string> Version number of the Nearby Service SDK.
     */
    HMSNearby.prototype.getVersion = function () { return cordova(this, "getVersion", { "otherPromise": true }, arguments); };
    HMSNearby.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSNearby, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HMSNearby.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSNearby });
    HMSNearby.pluginName = "HMSNearby";
    HMSNearby.plugin = "cordova-plugin-hms-nearby";
    HMSNearby.pluginRef = "HMSNearby";
    HMSNearby.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSNearby.platforms = ["Android"];
    HMSNearby = __decorate([], HMSNearby);
    return HMSNearby;
}(AwesomeCordovaNativePlugin));
export { HMSNearby };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSNearby, decorators: [{
            type: Injectable
        }], propDecorators: { 
        /**
         * Enables HMSLogger capability which is used for sending usage analytics of Nearby SDK's methods.
         * @returns Promise<void>
         */
        enableLogger: [], 
        /**
         * Disables HMSLogger capability which is used for sending usage analytics of Nearby SDK's methods.
         * @returns Promise<void>
         */
        disableLogger: [], 
        /**
         * Checks whether permission is granted to use the services.
         * @param {HMSPermission} permission Permission.
         * @returns Promise<boolean>
         */
        hasPermission: [], 
        /**
         * Obtains the necessary permissions to use the services.
         * @param {HMSPermission} permission Permission.
         * @returns Promise<void>
         */
        requestPermission: [], 
        /**
         * Obtains the necessary permissions to use the services.
         * @param {HMSPermission[]} permissions Permissions List.
         * @returns Promise<void>
         */
        requestPermissions: [], 
        /**
         * Subscribes to Nearby events. Pass a callback to run codes when the event triggered.
         * @param {HMSNearbyEvent} event Event name.
         * @param {(res: any) => void} callback Callback to be called when the event triggered.
         */
        on: [], 
        /**
         * Starts broadcasting.
         * @param {string} name Local endpoint name.
         * @param {string} serviceId Service ID. The app package name is recommended.
         * @param {Policy} policy Object of the Policy type.
         * @returns Promise<void>
         */
        startBroadcasting: [], 
        /**
         * Stops broadcasting.
         * @returns Promise<void>
         */
        stopBroadcasting: [], 
        /**
         * Starts to scan for remote endpoints with the specified service ID.
         * @param {string} serviceId Service ID. The app package name is recommended.
         * @param {Policy} policy Object of the Policy type.
         * @returns Promise<void>
         */
        startScan: [], 
        /**
         * Stops discovering devices.
         * @returns Promise<void>
         */
        stopScan: [], 
        /**
         * Sends a request to connect to a remote endpoint.
         * @param {string} name Local endpoint name.
         * @param {string} endpointId ID of the remote endpoint.
         * @returns Promise<void>
         */
        requestConnect: [], 
        /**
         * Sends a request to connect to a remote endpoint.
         * @param {string} name Local endpoint name.
         * @param {string} endpointId ID of the remote endpoint.
         * @param {ChannelPolicy} channelPolicy Channel policy, which is used to select the channel for establishing a connection.
         * @returns Promise<void>
         */
        requestConnectEx: [], 
        /**
         * Accepts a connection. This API must be called before data transmission. If the connection request is not accepted within 8 seconds, the connection fails and needs to be re-initiated.
         * @param {string} endpointId ID of the remote endpoint.
         * @returns Promise<void>
         */
        acceptConnect: [], 
        /**
         * Rejects a connection request from a remote endpoint.
         * @param {string} endpointId ID of the remote endpoint.
         * @returns Promise<void>
         */
        rejectConnect: [], 
        /**
         * Disconnects from a remote endpoint. Then communication with the remote endpoint is no longer available.
         * @param {string} endpointId ID of the remote endpoint.
         * @returns Promise<void>
         */
        disconnect: [], 
        /**
         * Disconnects all connections.
         * @returns Promise<void>
         */
        disconnectAll: [], 
        /**
         * Transfers given bytes to given endpoint ids.
         * @param {number[]} bytes number array that contains your data.
         * @param {string[]} endpointIds string array of remote endpoint IDs.
         * @returns Promise<void>
         */
        sendBytes: [], 
        /**
         * Transfers file from given URI to given endpoint ids. Transferred file is saved in subscriber's device under Downloads/Nearby/ directory with name data id.
         * @param {string} fileUri File URI.
         * @param {string[]} endpointIds string array of remote endpoint IDs.
         * @returns Promise<void>
         */
        sendFile: [], 
        /**
         * Transfers stream from given URL to given endpoint ids.
         * @param {string} streamUrl Stream URL.
         * @param {string[]} endpointIds string array of remote endpoint IDs.
         * @returns Promise<void>
         */
        sendStream: [], 
        /**
         * Cancels data transmission when sending or receiving data.
         * @param {string} dataId ID of the data whose transmission is to be canceled.
         * @returns Promise<void>
         */
        cancelDataTransfer: [], 
        /**
         * Obtains the current API credential.
         * @returns Promise<string> Promise result of an execution that returns the current API credential.
         */
        getApiKey: [], 
        /**
         * Sets the API credential for your app.
         * @param {string} apiKey API credential.
         * @returns Promise<void>
         */
        setApiKey: [], put: [], get: [], getInBackground: [], 
        /**
         * Cancels message publishing.
         * @param {Message} message Published message.
         * @returns Promise<void>
         */
        unput: [], 
        /**
         * Cancels a message subscription.
         * @returns Promise<void>
         */
        unget: [], 
        /**
         * Cancels the current message subscription.
         * @returns Promise<void>
         */
        ungetInBackground: [], registerScanTask: [], unRegisterScanTask: [], getBeaconMsgConditions: [], getRawBeaconConditions: [], getRawBeaconConditionsWithBeaconType: [], 
        /**
         * Obtains the Nearby Service SDK version number.
         * @returns Promise<string> Version number of the Nearby Service SDK.
         */
        getVersion: [] } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmF0aXZlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7QUFFRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7OztJQStCN0QsNkJBQTBCOzs7O0lBSXJEOzs7T0FHRztJQUNILGdDQUFZO0lBS1o7OztPQUdHO0lBQ0gsaUNBQWE7SUFPYjs7OztPQUlHO0lBQ0gsaUNBQWEsYUFBQyxVQUF5QjtJQUt2Qzs7OztPQUlHO0lBQ0gscUNBQWlCLGFBQUMsVUFBeUI7SUFLM0M7Ozs7T0FJRztJQUNILHNDQUFrQixhQUFDLFdBQTRCO0lBTy9DOzs7O09BSUc7SUFDSCxzQkFBRSxhQUFDLEtBQXFCLEVBQUUsUUFBNEI7SUFPdEQ7Ozs7OztPQU1HO0lBQ0gscUNBQWlCLGFBQ2IsSUFBWSxFQUNaLFNBQWlCLEVBQ2pCLE1BQWM7SUFNbEI7OztPQUdHO0lBQ0gsb0NBQWdCO0lBS2hCOzs7OztPQUtHO0lBQ0gsNkJBQVMsYUFBQyxTQUFpQixFQUFFLE1BQWM7SUFLM0M7OztPQUdHO0lBQ0gsNEJBQVE7SUFLUjs7Ozs7T0FLRztJQUNILGtDQUFjLGFBQUMsSUFBWSxFQUFFLFVBQWtCO0lBSy9DOzs7Ozs7T0FNRztJQUNILG9DQUFnQixhQUNaLElBQVksRUFDWixVQUFrQixFQUNsQixhQUE0QjtJQU1oQzs7OztPQUlHO0lBQ0gsaUNBQWEsYUFBQyxVQUFrQjtJQUtoQzs7OztPQUlHO0lBQ0gsaUNBQWEsYUFBQyxVQUFrQjtJQUtoQzs7OztPQUlHO0lBQ0gsOEJBQVUsYUFBQyxVQUFrQjtJQUs3Qjs7O09BR0c7SUFDSCxpQ0FBYTtJQU9iOzs7OztPQUtHO0lBQ0gsNkJBQVMsYUFB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O0FBQ3ZDLE1BQU0sQ0FBQyxJQUFNLGFBQWEsR0FBVyxLQUFLLENBQUM7QUFDM0MsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQVcsS0FBSyxDQUFDO0FBQzlDLE1BQU0sQ0FBQyxJQUFNLGVBQWUsR0FBVyxFQUFFLENBQUM7QUFDMUMsTUFBTSxDQUFDLElBQU0sMEJBQTBCLEdBQVcscUJBQXFCLENBQUM7QUFDeEUsTUFBTSxDQUFDLElBQU0sMEJBQTBCLEdBQVcsZ0JBQWdCLENBQUM7QUFDbkUsTUFBTSxDQUFDLElBQU0sd0JBQXdCLEdBQVcsYUFBYSxDQUFDO0FBQzlELE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUFhO0lBQ3RDLFNBQVMsRUFBRSxhQUFhO0lBQ3hCLE1BQU0sRUFBRSxHQUFHO0NBQ2QsQ0FBQztBQUNGLE1BQU0sQ0FBQyxJQUFNLGdDQUFnQyxHQUFrQjtJQUMzRCxlQUFlLEVBQUUsSUFBSTtDQUN4QixDQUFDO0FBQ0YsTUFBTSxDQUFDLElBQU0sc0JBQXNCLEdBQWtCLEVBQUUsQ0FBQztBQUN4RCxNQUFNLENBQUMsSUFBTSx1QkFBdUIsR0FBa0I7SUFDbEQsVUFBVSxFQUFFLHVCQUF1QixDQUFDLDJCQUEyQjtJQUMvRCxXQUFXLEVBQUUsd0JBQXdCLENBQUMsd0JBQXdCO0NBQ2pFLENBQUM7QUFDRixNQUFNLENBQUMsSUFBTSxrQkFBa0IsR0FBYztJQUN6QyxNQUFNLEVBQUUsZ0NBQWdDO0lBQ3hDLE1BQU0sRUFBRSxzQkFBc0I7Q0FDakMsQ0FBQztBQUNGLE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUFjO0lBQ3pDLE1BQU0sRUFBRSxzQkFBc0I7Q0FDakMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgICBDb3B5cmlnaHQgMjAyMC0yMDI0LiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5cclxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcclxuICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG5cclxuICAgICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAgICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSBcIkBhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlXCI7XHJcblxyXG4vKipcclxuICogQG5hbWUgSE1TTmVhcmJ5XHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGUgQ29yZG92YSBOZWFyYnkgUGx1Z2luIGVuYWJsZXMgY29tbXVuaWNhdGlvbiBiZXR3ZWVuIEh1YXdlaSBOZWFyYnkgS2l0IFNESyBhbmQgQ29yZG92YSBwbGF0Zm9ybS4gVGhpcyBwbHVnaW4gZXhwb3NlcyBhbGwgZnVuY3Rpb25hbGl0eSBwcm92aWRlZCBieSBIdWF3ZWkgTmVhcmJ5IEtpdCBTREsuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEhNU05lYXJieSB9IGZyb20gJ0BobXNjb3JlL2lvbmljLW5hdGl2ZS1obXMtbmVhcmJ5JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBobXNOZWFyYnk6IEhNU05lYXJieSkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLmhtc05lYXJieS5mdW5jdGlvbk5hbWUoJ0hlbGxvJywgMTIzKVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6IFwiSE1TTmVhcmJ5XCIsXHJcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLW5lYXJieVwiLFxyXG4gICAgcGx1Z2luUmVmOiBcIkhNU05lYXJieVwiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luXCIsXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU05lYXJieSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vIExPR0dFUiAvLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIEVuYWJsZXMgSE1TTG9nZ2VyIGNhcGFiaWxpdHkgd2hpY2ggaXMgdXNlZCBmb3Igc2VuZGluZyB1c2FnZSBhbmFseXRpY3Mgb2YgTmVhcmJ5IFNESydzIG1ldGhvZHMuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgICAgKi9cclxuICAgIGVuYWJsZUxvZ2dlcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogRGlzYWJsZXMgSE1TTG9nZ2VyIGNhcGFiaWxpdHkgd2hpY2ggaXMgdXNlZCBmb3Igc2VuZGluZyB1c2FnZSBhbmFseXRpY3Mgb2YgTmVhcmJ5IFNESydzIG1ldGhvZHMuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgICAgKi9cclxuICAgIGRpc2FibGVMb2dnZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vIFBFUk1JU1NJT05TIC8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgcGVybWlzc2lvbiBpcyBncmFudGVkIHRvIHVzZSB0aGUgc2VydmljZXMuXHJcbiAgICAgKiBAcGFyYW0ge0hNU1Blcm1pc3Npb259IHBlcm1pc3Npb24gUGVybWlzc2lvbi5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8Ym9vbGVhbj5cclxuICAgICAqL1xyXG4gICAgaGFzUGVybWlzc2lvbihwZXJtaXNzaW9uOiBITVNQZXJtaXNzaW9uKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbnMgdGhlIG5lY2Vzc2FyeSBwZXJtaXNzaW9ucyB0byB1c2UgdGhlIHNlcnZpY2VzLlxyXG4gICAgICogQHBhcmFtIHtITVNQZXJtaXNzaW9ufSBwZXJtaXNzaW9uIFBlcm1pc3Npb24uXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgICAgKi9cclxuICAgIHJlcXVlc3RQZXJtaXNzaW9uKHBlcm1pc3Npb246IEhNU1Blcm1pc3Npb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyB0aGUgbmVjZXNzYXJ5IHBlcm1pc3Npb25zIHRvIHVzZSB0aGUgc2VydmljZXMuXHJcbiAgICAgKiBAcGFyYW0ge0hNU1Blcm1pc3Npb25bXX0gcGVybWlzc2lvbnMgUGVybWlzc2lvbnMgTGlzdC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cclxuICAgICAqL1xyXG4gICAgcmVxdWVzdFBlcm1pc3Npb25zKHBlcm1pc3Npb25zOiBITVNQZXJtaXNzaW9uW10pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8gRVZFTlQgUkVHSVNURVJBVElPTiAvLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIEBDb3Jkb3ZhKClcclxuICAgIC8qKlxyXG4gICAgICogU3Vic2NyaWJlcyB0byBOZWFyYnkgZXZlbnRzLiBQYXNzIGEgY2FsbGJhY2sgdG8gcnVuIGNvZGVzIHdoZW4gdGhlIGV2ZW50IHRyaWdnZXJlZC5cclxuICAgICAqIEBwYXJhbSB7SE1TTmVhcmJ5RXZlbnR9IGV2ZW50IEV2ZW50IG5hbWUuXHJcbiAgICAgKiBAcGFyYW0geyhyZXM6IGFueSkgPT4gdm9pZH0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGV2ZW50IHRyaWdnZXJlZC5cclxuICAgICAqL1xyXG4gICAgb24oZXZlbnQ6IEhNU05lYXJieUV2ZW50LCBjYWxsYmFjazogKHJlczogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vIERJU0NPVkVSWSAvLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0cyBicm9hZGNhc3RpbmcuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBMb2NhbCBlbmRwb2ludCBuYW1lLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlcnZpY2VJZCBTZXJ2aWNlIElELiBUaGUgYXBwIHBhY2thZ2UgbmFtZSBpcyByZWNvbW1lbmRlZC5cclxuICAgICAqIEBwYXJhbSB7UG9saWN5fSBwb2xpY3kgT2JqZWN0IG9mIHRoZSBQb2xpY3kgdHlwZS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cclxuICAgICAqL1xyXG4gICAgc3RhcnRCcm9hZGNhc3RpbmcoXHJcbiAgICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHNlcnZpY2VJZDogc3RyaW5nLFxyXG4gICAgICAgIHBvbGljeTogUG9saWN5XHJcbiAgICApOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogU3RvcHMgYnJvYWRjYXN0aW5nLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICAgICovXHJcbiAgICBzdG9wQnJvYWRjYXN0aW5nKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydHMgdG8gc2NhbiBmb3IgcmVtb3RlIGVuZHBvaW50cyB3aXRoIHRoZSBzcGVjaWZpZWQgc2VydmljZSBJRC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZXJ2aWNlSWQgU2VydmljZSBJRC4gVGhlIGFwcCBwYWNrYWdlIG5hbWUgaXMgcmVjb21tZW5kZWQuXHJcbiAgICAgKiBAcGFyYW0ge1BvbGljeX0gcG9saWN5IE9iamVjdCBvZiB0aGUgUG9saWN5IHR5cGUuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgICAgKi9cclxuICAgIHN0YXJ0U2NhbihzZXJ2aWNlSWQ6IHN0cmluZywgcG9saWN5OiBQb2xpY3kpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogU3RvcHMgZGlzY292ZXJpbmcgZGV2aWNlcy5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cclxuICAgICAqL1xyXG4gICAgc3RvcFNjYW4oKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFNlbmRzIGEgcmVxdWVzdCB0byBjb25uZWN0IHRvIGEgcmVtb3RlIGVuZHBvaW50LlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgTG9jYWwgZW5kcG9pbnQgbmFtZS5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbmRwb2ludElkIElEIG9mIHRoZSByZW1vdGUgZW5kcG9pbnQuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgICAgKi9cclxuICAgIHJlcXVlc3RDb25uZWN0KG5hbWU6IHN0cmluZywgZW5kcG9pbnRJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFNlbmRzIGEgcmVxdWVzdCB0byBjb25uZWN0IHRvIGEgcmVtb3RlIGVuZHBvaW50LlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgTG9jYWwgZW5kcG9pbnQgbmFtZS5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbmRwb2ludElkIElEIG9mIHRoZSByZW1vdGUgZW5kcG9pbnQuXHJcbiAgICAgKiBAcGFyYW0ge0NoYW5uZWxQb2xpY3l9IGNoYW5uZWxQb2xpY3kgQ2hhbm5lbCBwb2xpY3ksIHdoaWNoIGlzIHVzZWQgdG8gc2VsZWN0IHRoZSBjaGFubmVsIGZvciBlc3RhYmxpc2hpbmcgYSBjb25uZWN0aW9uLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICAgICovXHJcbiAgICByZXF1ZXN0Q29ubmVjdEV4KFxyXG4gICAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgICBlbmRwb2ludElkOiBzdHJpbmcsXHJcbiAgICAgICAgY2hhbm5lbFBvbGljeTogQ2hhbm5lbFBvbGljeVxyXG4gICAgKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIEFjY2VwdHMgYSBjb25uZWN0aW9uLiBUaGlzIEFQSSBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgZGF0YSB0cmFuc21pc3Npb24uIElmIHRoZSBjb25uZWN0aW9uIHJlcXVlc3QgaXMgbm90IGFjY2VwdGVkIHdpdGhpbiA4IHNlY29uZHMsIHRoZSBjb25uZWN0aW9uIGZhaWxzIGFuZCBuZWVkcyB0byBiZSByZS1pbml0aWF0ZWQuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW5kcG9pbnRJZCBJRCBvZiB0aGUgcmVtb3RlIGVuZHBvaW50LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICAgICovXHJcbiAgICBhY2NlcHRDb25uZWN0KGVuZHBvaW50SWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWplY3RzIGEgY29ubmVjdGlvbiByZXF1ZXN0IGZyb20gYSByZW1vdGUgZW5kcG9pbnQuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW5kcG9pbnRJZCBJRCBvZiB0aGUgcmVtb3RlIGVuZHBvaW50LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICAgICovXHJcbiAgICByZWplY3RDb25uZWN0KGVuZHBvaW50SWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNjb25uZWN0cyBmcm9tIGEgcmVtb3RlIGVuZHBvaW50LiBUaGVuIGNvbW11bmljYXRpb24gd2l0aCB0aGUgcmVtb3RlIGVuZHBvaW50IGlzIG5vIGxvbmdlciBhdmFpbGFibGUuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW5kcG9pbnRJZCBJRCBvZiB0aGUgcmVtb3RlIGVuZHBvaW50LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICAgICovXHJcbiAgICBkaXNjb25uZWN0KGVuZHBvaW50SWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNjb25uZWN0cyBhbGwgY29ubmVjdGlvbnMuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgICAgKi9cclxuICAgIGRpc2Nvbm5lY3RBbGwoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vIFRSQU5TRkVSIC8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVHJhbnNmZXJzIGdpdmVuIGJ5dGVzIHRvIGdpdmVuIGVuZHBvaW50IGlkcy5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyW119IGJ5dGVzIG51bWJlciBhcnJheSB0aGF0IGNvbnRhaW5zIHlvdXIgZGF0YS5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IGVuZHBvaW50SWRzIHN0cmluZyBhcnJheSBvZiByZW1vdGUgZW5kcG9pbnQgSURzLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICAgICovXHJcbiAgICBzZW5kQnl0ZXMoYnl0ZXM6IG51bWJlcltdLCBlbmRwb2ludElkczogc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVHJhbnNmZXJzIGZpbGUgZnJvbSBnaXZlbiBVUkkgdG8gZ2l2ZW4gZW5kcG9pbnQgaWRzLiBUcmFuc2ZlcnJlZCBmaWxlIGlzIHNhdmVkIGluIHN1YnNjcmliZXIncyBkZXZpY2UgdW5kZXIgRG93bmxvYWRzL05lYXJieS8gZGlyZWN0b3J5IHdpdGggbmFtZSBkYXRhIGlkLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVVcmkgRmlsZSBVUkkuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBlbmRwb2ludElkcyBzdHJpbmcgYXJyYXkgb2YgcmVtb3RlIGVuZHBvaW50IElEcy5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cclxuICAgICAqL1xyXG4gICAgc2VuZEZpbGUoZmlsZVVyaTogc3RyaW5nLCBlbmRwb2ludElkczogc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVHJhbnNmZXJzIHN0cmVhbSBmcm9tIGdpdmVuIFVSTCB0byBnaXZlbiBlbmRwb2ludCBpZHMuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyZWFtVXJsIFN0cmVhbSBVUkwuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBlbmRwb2ludElkcyBzdHJpbmcgYXJyYXkgb2YgcmVtb3RlIGVuZHBvaW50IElEcy5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cclxuICAgICAqL1xyXG4gICAgc2VuZFN0cmVhbShzdHJlYW1Vcmw6IHN0cmluZywgZW5kcG9pbnRJZHM6IHN0cmluZ1tdKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIENhbmNlbHMgZGF0YSB0cmFuc21pc3Npb24gd2hlbiBzZW5kaW5nIG9yIHJlY2VpdmluZyBkYXRhLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFJZCBJRCBvZiB0aGUgZGF0YSB3aG9zZSB0cmFuc21pc3Npb24gaXMgdG8gYmUgY2FuY2VsZWQuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgICAgKi9cclxuICAgIGNhbmNlbERhdGFUcmFuc2ZlcihkYXRhSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLyBNRVNTQUdFIC8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyB0aGUgY3VycmVudCBBUEkgY3JlZGVudGlhbC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPiBQcm9taXNlIHJlc3VsdCBvZiBhbiBleGVjdXRpb24gdGhhdCByZXR1cm5zIHRoZSBjdXJyZW50IEFQSSBjcmVkZW50aWFsLlxyXG4gICAgICovXHJcbiAgICBnZXRBcGlLZXkoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgQVBJIGNyZWRlbnRpYWwgZm9yIHlvdXIgYXBwLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFwaUtleSBBUEkgY3JlZGVudGlhbC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cclxuICAgICAqL1xyXG4gICAgc2V0QXBpS2V5KGFwaUtleTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHVibGlzaGVzIGEgbWVzc2FnZSBhbmQgYnJvYWRjYXN0cyBhIHRva2VuIGZvciBuZWFyYnkgZGV2aWNlcyB0byBzY2FuLlxyXG4gICAgICogQHBhcmFtIHtNZXNzYWdlfSBtZXNzYWdlIFB1Ymxpc2hlZCBtZXNzYWdlLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICAgICovXHJcbiAgICBwdXQobWVzc2FnZTogTWVzc2FnZSk6IFByb21pc2U8dm9pZD47XHJcbiAgICAvKipcclxuICAgICAqIFB1Ymxpc2hlcyBhIG1lc3NhZ2UgYW5kIGJyb2FkY2FzdHMgYSB0b2tlbiBmb3IgbmVhcmJ5IGRldmljZXMgdG8gc2Nhbi4gVGhpcyBtZXNzYWdlIGlzIHB1Ymxpc2hlZCBvbmx5IHRvIGFwcHMgdGhhdCB1c2UgdGhlIHNhbWUgcHJvamVjdCBJRCBhbmQgaGF2ZSByZWdpc3RlcmVkIHRoZSBtZXNzYWdlIHR5cGUgd2l0aCB0aGUgY2xvdWQgZm9yIHN1YnNjcmlwdGlvbi5cclxuICAgICAqIEBwYXJhbSB7TWVzc2FnZX0gbWVzc2FnZSBQdWJsaXNoZWQgbWVzc2FnZS5cclxuICAgICAqIEBwYXJhbSB7UHV0T3B0aW9ufSBwdXRPcHRpb24gUHV0T3B0aW9uIHBhcmFtZXRlcnMuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgICAgKi9cclxuICAgIHB1dChtZXNzYWdlOiBNZXNzYWdlLCBwdXRPcHRpb246IFB1dE9wdGlvbik6IFByb21pc2U8dm9pZD47XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcHV0KG1lc3NhZ2U6IE1lc3NhZ2UsIHB1dE9wdGlvbj86IFB1dE9wdGlvbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbnMgbWVzc2FnZXMgZnJvbSB0aGUgY2xvdWQgdXNpbmcgdGhlIGRlZmF1bHQgb3B0aW9uIChERUZBVUxUKS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cclxuICAgICAqL1xyXG4gICAgZ2V0KCk6IFByb21pc2U8dm9pZD47XHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVycyB0aGUgbWVzc2FnZXMgdG8gYmUgb2J0YWluZWQgd2l0aCB0aGUgY2xvdWQuIE9ubHkgbWVzc2FnZXMgd2l0aCB0aGUgc2FtZSBwcm9qZWN0IElEIGNhbiBiZSBvYnRhaW5lZC5cclxuICAgICAqIEBwYXJhbSB7R2V0T3B0aW9ufSBnZXRPcHRpb25cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cclxuICAgICAqL1xyXG4gICAgZ2V0KGdldE9wdGlvbjogR2V0T3B0aW9uKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXQoZ2V0T3B0aW9uPzogR2V0T3B0aW9uKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWRlbnRpZmllcyBvbmx5IEJMRSBiZWFjb24gbWVzc2FnZXMuIEl0IHN1YnNjcmliZXMgdG8gbWVzc2FnZXMgcHVibGlzaGVkIGJ5IG5lYXJieSBkZXZpY2VzIGluIGEgcGVyc2lzdGVudCBhbmQgbG93LXBvd2VyIG1hbm5lciBhbmQgdXNlcyB0aGUgZGVmYXVsdCBjb25maWd1cmF0aW9uIChERUZBVUxUKS4gU2Nhbm5pbmcgaXMgZ29pbmcgb24gbm8gbWF0dGVyIHdoZXRoZXIgeW91ciBhcHAgcnVucyBpbiB0aGUgYmFja2dyb3VuZCBvciBmb3JlZ3JvdW5kLiBUaGUgc2Nhbm5pbmcgc3RvcHMgd2hlbiB0aGUgYXBwIHByb2Nlc3MgaXMga2lsbGVkLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICAgICovXHJcbiAgICBnZXRJbkJhY2tncm91bmQoKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIC8qKlxyXG4gICAgICogSWRlbnRpZmllcyBvbmx5IEJMRSBiZWFjb24gbWVzc2FnZXMuIFNjYW5uaW5nIGlzIGdvaW5nIG9uIG5vIG1hdHRlciB3aGV0aGVyIHlvdXIgYXBwIHJ1bnMgaW4gdGhlIGJhY2tncm91bmQgb3IgZm9yZWdyb3VuZC4gVGhlIHNjYW5uaW5nIHN0b3BzIHdoZW4gdGhlIGFwcCBwcm9jZXNzIGlzIGtpbGxlZC5cclxuICAgICAqIEBwYXJhbSB7R2V0T3B0aW9ufSBnZXRPcHRpb25cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cclxuICAgICAqL1xyXG4gICAgZ2V0SW5CYWNrZ3JvdW5kKGdldE9wdGlvbjogR2V0T3B0aW9uKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRJbkJhY2tncm91bmQoZ2V0T3B0aW9uPzogR2V0T3B0aW9uKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIENhbmNlbHMgbWVzc2FnZSBwdWJsaXNoaW5nLlxyXG4gICAgICogQHBhcmFtIHtNZXNzYWdlfSBtZXNzYWdlIFB1Ymxpc2hlZCBtZXNzYWdlLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxyXG4gICAgICovXHJcbiAgICB1bnB1dChtZXNzYWdlOiBNZXNzYWdlKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIENhbmNlbHMgYSBtZXNzYWdlIHN1YnNjcmlwdGlvbi5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cclxuICAgICAqL1xyXG4gICAgdW5nZXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIENhbmNlbHMgdGhlIGN1cnJlbnQgbWVzc2FnZSBzdWJzY3JpcHRpb24uXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XHJcbiAgICAgKi9cclxuICAgIHVuZ2V0SW5CYWNrZ3JvdW5kKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLyBCZWFjb24gLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSkgXHJcbiAgICByZWdpc3RlclNjYW5UYXNrKGJlYWNvbk9wdGlvbjogQmVhY29uT3B0aW9uKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pIFxyXG4gICAgdW5SZWdpc3RlclNjYW5UYXNrKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICBcclxuICAgIFxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSkgXHJcbiAgICBnZXRCZWFjb25Nc2dDb25kaXRpb25zKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSkgXHJcbiAgICBnZXRSYXdCZWFjb25Db25kaXRpb25zKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSkgXHJcbiAgICBnZXRSYXdCZWFjb25Db25kaXRpb25zV2l0aEJlYWNvblR5cGUoYmVhY29uVHlwZTogQmVhY29uVHlwZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLyBWRVJTSU9OIC8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyB0aGUgTmVhcmJ5IFNlcnZpY2UgU0RLIHZlcnNpb24gbnVtYmVyLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+IFZlcnNpb24gbnVtYmVyIG9mIHRoZSBOZWFyYnkgU2VydmljZSBTREsuXHJcbiAgICAgKi9cclxuICAgIGdldFZlcnNpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEhNU05lYXJieUV2ZW50IHtcclxuICAgIEVWRU5UX0NPTk5FQ1RJT05fT05fRVNUQUJMSVNIID0gXCJldmVudENvbm5lY3Rpb25PbkVzdGFibGlzaFwiLFxyXG4gICAgRVZFTlRfQ09OTkVDVElPTl9PTl9SRVNVTFQgPSBcImV2ZW50Q29ubmVjdGlvbk9uUmVzdWx0XCIsXHJcbiAgICBFVkVOVF9DT05ORUNUSU9OX09OX0RJU0NPTk5FQ1QgPSBcImV2ZW50Q29ubmVjdGlvbk9uRGlzY29ubmVjdFwiLFxyXG4gICAgRVZFTlRfU0NBTl9PTl9GT1VORCA9IFwiZXZlbnRTY2FuT25Gb3VuZFwiLFxyXG4gICAgRVZFTlRfU0NBTl9PTl9MT1NUID0gXCJldmVudFNjYW5Pbkxvc3RcIixcclxuICAgIEVWRU5UX0RBVEFfT05fUkVDRUlWRUQgPSBcImV2ZW50RGF0YU9uUmVjZWl2ZWRcIixcclxuICAgIEVWRU5UX0RBVEFfT05fVFJBTlNGRVJfVVBEQVRFID0gXCJldmVudERhdGFPblRyYW5zZmVyVXBkYXRlXCIsXHJcbiAgICBFVkVOVF9NRVNTQUdFX09OX0JMRV9TSUdOQUxfQ0hBTkdFRCA9IFwiZXZlbnRNZXNzYWdlT25CbGVTaWduYWxDaGFuZ2VkXCIsXHJcbiAgICBFVkVOVF9NRVNTQUdFX09OX0RJU1RBTkNFX0NIQU5HRUQgPSBcImV2ZW50TWVzc2FnZU9uRGlzdGFuY2VDaGFuZ2VkXCIsXHJcbiAgICBFVkVOVF9NRVNTQUdFX09OX0ZPVU5EID0gXCJldmVudE1lc3NhZ2VPbkZvdW5kXCIsXHJcbiAgICBFVkVOVF9NRVNTQUdFX09OX0xPU1QgPSBcImV2ZW50TWVzc2FnZU9uTG9zdFwiLFxyXG4gICAgRVZFTlRfUFVUX09OX1RJTUVPVVQgPSBcImV2ZW50UHV0T25UaW1lb3V0XCIsXHJcbiAgICBFVkVOVF9HRVRfT05fVElNRU9VVCA9IFwiZXZlbnRHZXRPblRpbWVvdXRcIixcclxuICAgIEVWRU5UX1NUQVRVU19PTl9QRVJNSVNTSU9OX0NIQU5HRUQgPSBcImV2ZW50U3RhdHVzT25QZXJtaXNzaW9uQ2hhbmdlZFwiLCBcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSE1TUGVybWlzc2lvbiB7XHJcbiAgICBQRVJNSVNTSU9OX0JMVUVUT09USCA9IFwiYW5kcm9pZC5wZXJtaXNzaW9uLkJMVUVUT09USFwiLFxyXG4gICAgUEVSTUlTU0lPTl9CTFVFVE9PVEhfQURNSU4gPSBcImFuZHJvaWQucGVybWlzc2lvbi5CTFVFVE9PVEhfQURNSU5cIiwgXHJcbiAgICBQRVJNSVNTSU9OX0FDQ0VTU19DT0FSU0VfTE9DQVRJT04gPSBcImFuZHJvaWQucGVybWlzc2lvbi5BQ0NFU1NfQ09BUlNFX0xPQ0FUSU9OXCIsXHJcbiAgICBQRVJNSVNTSU9OX0FDQ0VTU19GSU5FX0xPQ0FUSU9OID0gXCJhbmRyb2lkLnBlcm1pc3Npb24uQUNDRVNTX0ZJTkVfTE9DQVRJT05cIixcclxuICAgIFBFUk1JU1NJT05fUkVBRF9FWFRFUk5BTF9TVE9SQUdFID0gXCJhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9FWFRFUk5BTF9TVE9SQUdFXCIsXHJcbiAgICBQRVJNSVNTSU9OX1dSSVRFX0VYVEVSTkFMX1NUT1JBR0UgPSBcImFuZHJvaWQucGVybWlzc2lvbi5XUklURV9FWFRFUk5BTF9TVE9SQUdFXCIsIFxyXG4gICAgUEVSTUlTU0lPTl9BQ0NFU1NfV0lGSV9TVEFURSA9IFwiYW5kcm9pZC5wZXJtaXNzaW9uLkFDQ0VTU19XSUZJX1NUQVRFXCIsXHJcbiAgICBQRVJNSVNTSU9OX0NIQU5HRV9XSUZJX1NUQVRFID0gXCJhbmRyb2lkLnBlcm1pc3Npb24uQ0hBTkdFX1dJRklfU1RBVEVcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBQb2xpY3kge1xyXG4gICAgUE9MSUNZX01FU0ggPSAxLFxyXG4gICAgUE9MSUNZX1AyUCA9IDIsXHJcbiAgICBQT0xJQ1lfU1RBUiA9IDMsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERhdGFUeXBlIHtcclxuICAgIERBVEFfRklMRSA9IDEsXHJcbiAgICBEQVRBX0JZVEVTID0gMixcclxuICAgIERBVEFfU1RSRUFNID0gMyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVHJhbnNmZXJTdGF0ZSB7XHJcbiAgICBUUkFOU0ZFUl9TVEFURV9TVUNDRVNTID0gMSxcclxuICAgIFRSQU5TRkVSX1NUQVRFX0ZBSUxVUkUgPSAyLFxyXG4gICAgVFJBTlNGRVJfU1RBVEVfSU5fUFJPR1JFU1MgPSAzLFxyXG4gICAgVFJBTlNGRVJfU1RBVEVfQ0FOQ0VMRUQgPSA0LFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBNZXNzYWdlUG9saWN5RGlzdGFuY2VUeXBlIHtcclxuICAgIFBPTElDWV9ESVNUQU5DRV9UWVBFX0RFRkFVTFQgPSAwLFxyXG4gICAgUE9MSUNZX0RJU1RBTkNFX1RZUEVfRUFSU0hPVCA9IDEsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1lc3NhZ2VQb2xpY3lGaW5kaW5nTW9kZSB7XHJcbiAgICBQT0xJQ1lfRklORElOR19NT0RFX0RFRkFVTFQgPSAwLFxyXG4gICAgUE9MSUNZX0ZJTkRJTkdfTU9ERV9CUk9BRENBU1QgPSAxLFxyXG4gICAgUE9MSUNZX0ZJTkRJTkdfTU9ERV9TQ0FOID0gMixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTWVzc2FnZVBvbGljeVR0bFNlY29uZHMge1xyXG4gICAgUE9MSUNZX1RUTF9TRUNPTkRTX0RFRkFVTFQgPSAyNDAsXHJcbiAgICBQT0xJQ1lfVFRMX1NFQ09ORFNfTUFYID0gODY0MDAsXHJcbiAgICBQT0xJQ1lfVFRMX1NFQ09ORFNfSU5GSU5JVEUgPSAyMTQ3NDgzNjQ3LFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDaGFubmVsUG9saWN5IHtcclxuICAgIENIQU5ORUxfQVVUTyA9IDEsXHJcbiAgICBDSEFOTkVMX0hJR0hfVEhST1VHSFBVVCA9IDIsXHJcbiAgICBDSEFOTkVMX0lOU1RBTkNFID0gMyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU3RhdHVzQ29kZSB7XHJcbiAgICBTVEFUVVNfU1VDQ0VTUyA9IDAsXHJcbiAgICBTVEFUVVNfRkFJTFVSRSA9IC0xLFxyXG4gICAgU1RBVFVTX0FQSV9ESVNPUkRFUiA9IDgwMDEsXHJcbiAgICBTVEFUVVNfTk9fTkVUV09SSyA9IDgwMDIsXHJcbiAgICBTVEFUVVNfTk9UX0NPTk5FQ1RFRCA9IDgwMDMsXHJcbiAgICBTVEFUVVNfVFJBTlNGRVJfSU9fRVJST1IgPSA4MDA0LFxyXG4gICAgU1RBVFVTX0FMUkVBRFlfQlJPQURDQVNUSU5HID0gODAwNSxcclxuICAgIFNUQVRVU19BTFJFQURZX0NPTk5FQ1RFRCA9IDgwMDYsXHJcbiAgICBTVEFUVVNfQUxSRUFEWV9TQ0FOTklORyA9IDgwMDcsXHJcbiAgICBTVEFUVVNfUE9MSUNZX0NPTkZMSUNUID0gODAwOCxcclxuICAgIFNUQVRVU19CTFVFVE9PVEhfT1BFUkFUSU9OX0ZBSUxFRCA9IDgwMDksXHJcbiAgICBTVEFUVVNfQ09OTkVDVF9SRUpFQ1RFRCA9IDgwMTAsXHJcbiAgICBTVEFUVVNfQ09OTkVDVF9JT19FUlJPUiA9IDgwMTEsXHJcbiAgICBTVEFUVVNfRU5EUE9JTlRfVU5LTk9XTiA9IDgwMTIsXHJcbiAgICBTVEFUVVNfQVBJX09DQ1VQSUVEID0gODAxMyxcclxuICAgIFNUQVRVU19NSVNTSU5HX1BFUk1JU1NJT05fQUNDRVNTX0NPQVJTRV9MT0NBVElPTiA9IDgwMTQsIFxyXG4gICAgU1RBVFVTX01JU1NJTkdfUEVSTUlTU0lPTl9CTFVFVE9PVEggPSA4MDE2LFxyXG4gICAgU1RBVFVTX01JU1NJTkdfUEVSTUlTU0lPTl9CTFVFVE9PVEhfQURNSU4gPSA4MDE3LFxyXG4gICAgU1RBVFVTX01JU1NJTkdfUEVSTUlTU0lPTl9SRUNPUkRfQVVESU8gPSA4MDE5LFxyXG4gICAgU1RBVFVTX01JU1NJTkdfU0VUVElOR19MT0NBVElPTl9PTiA9IDgwMjAsXHJcbiAgICBTVEFUVVNfQUlSUExBTkVfTU9ERV9NVVNUX0JFX09GRiA9IDgwMjEsXHJcbiAgICBTVEFUVVNfTUVTU0FHRV9BUFBfVU5SRUdJU1RFUkVEID0gODA1MCxcclxuICAgIFNUQVRVU19NRVNTQUdFX0FQUF9RVU9UQV9MSU1JVEVEID0gODA1MSxcclxuICAgIFNUQVRVU19NRVNTQUdFX0JMRV9CUk9BRENBU1RJTkdfVU5TVVBQT1JURUQgPSA4MDUyLFxyXG4gICAgU1RBVFVTX01FU1NBR0VfQkxFX1NDQU5OSU5HX1VOU1VQUE9SVEVEID0gODA1MyxcclxuICAgIFNUQVRVU19NRVNTQUdFX0JMVUVUT09USF9PRkYgPSA4MDU0LFxyXG4gICAgU1RBVFVTX01FU1NBR0VfV1JPTkdfQ09OVEVYVCA9IDgwNTUsXHJcbiAgICBTVEFUVVNfTUVTU0FHRV9OT1RfQUxMT1cgPSA4MDU2LFxyXG4gICAgU1RBVFVTX01FU1NBR0VfTUlTU0lOR19QRVJNSVNTSU9OUyA9IDgwNTcsXHJcbiAgICBTVEFUVVNfTUVTU0FHRV9BVVRIX0ZBSUxFRCA9IDgwNTgsXHJcbiAgICBTVEFUVVNfTUVTU0FHRV9QRU5ESU5HX0lOVEVOVFNfTElNSVRFRCA9IDgwNTksXHJcbiAgICBTVEFUVVNfSU5URVJOQUxfRVJST1IgPSA4MDYwLFxyXG4gICAgU1RBVFVTX0ZJTkRJTkdfTU9ERV9FUlJPUiA9IDgwNjEsXHJcbiAgICBTVEFUVVNfTUVTU0FHRV9UQVNLX0FMUkVBRFlfSU5fUFJPQ0VTU0lORyA9IDgwNjIsXHJcbiAgICBTVEFUVVNfTUlTU0lOR19QRVJNSVNTSU9OX0ZJTEVfUkVBRF9XUklURSA9IDgwNjMsXHJcbiAgICBTVEFUVVNfTUlTU0lOR19QRVJNSVNTSU9OX0lOVEVSTkVUID0gODA2NCwgXHJcbn1cclxuXHJcbi8vQkVBQ09OXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmVhY29uT3B0aW9uIHtcclxuICAgIGJlYWNvbklkPzogc3RyaW5nO1xyXG4gICAgYmVhY29uVHlwZT86IG51bWJlcjtcclxuICAgIG5hbWVzcGFjZT86IHN0cmluZztcclxuICAgIHR5cGU/OiBzdHJpbmc7XHJcbn0gXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJlYWNvblR5cGUge1xyXG4gICAgYmVhY29uVHlwZTogbnVtYmVyOyBcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlIHtcclxuICAgIGNvbnRlbnQ6IG51bWJlcltdO1xyXG4gICAgbmFtZXNwYWNlPzogc3RyaW5nO1xyXG4gICAgdHlwZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFZGR5c3RvbmVVaWQge1xyXG4gICAgaGV4TmFtZXNwYWNlOiBzdHJpbmc7XHJcbiAgICBoZXhJbnN0YW5jZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElCZWFjb25JZCB7XHJcbiAgICBpQmVhY29uVXVpZDogc3RyaW5nO1xyXG4gICAgbWFqb3I6IG51bWJlcjtcclxuICAgIG1pbm9yOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmFtZXNwYWNlVHlwZSB7XHJcbiAgICBuYW1lc3BhY2U6IHN0cmluZztcclxuICAgIHR5cGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlUGlja2VyIHtcclxuICAgIGluY2x1ZGVBbGxUeXBlcz86IGJvb2xlYW47XHJcbiAgICBlZGR5c3RvbmVVaWRzPzogRWRkeXN0b25lVWlkW107XHJcbiAgICBpQmVhY29uSWRzPzogSUJlYWNvbklkW107XHJcbiAgICBuYW1lc3BhY2VUeXBlcz86IE5hbWVzcGFjZVR5cGVbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlUG9saWN5IHtcclxuICAgIGRpc3RhbmNlVHlwZT86IE1lc3NhZ2VQb2xpY3lEaXN0YW5jZVR5cGU7XHJcbiAgICBmaW5kaW5nTW9kZT86IE1lc3NhZ2VQb2xpY3lGaW5kaW5nTW9kZTtcclxuICAgIHR0bFNlY29uZHM/OiBNZXNzYWdlUG9saWN5VHRsU2Vjb25kcztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQdXRPcHRpb24ge1xyXG4gICAgcG9saWN5PzogTWVzc2FnZVBvbGljeTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHZXRPcHRpb24ge1xyXG4gICAgcGlja2VyPzogTWVzc2FnZVBpY2tlcjtcclxuICAgIHBvbGljeT86IE1lc3NhZ2VQb2xpY3k7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmxlU2lnbmFsIHtcclxuICAgIHJzc2k6IG51bWJlcjtcclxuICAgIHR4UG93ZXI6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaXN0YW5jZSB7XHJcbiAgICBwcmVjaXNpb246IG51bWJlcjtcclxuICAgIG1ldGVyczogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQkxFX1VOS05PV05fVFhfUE9XRVI6IG51bWJlciA9IDB4ODAwMDAwMDA7XHJcbmV4cG9ydCBjb25zdCBQUkVDSVNJT05fTE9XOiBudW1iZXIgPSAxO1xyXG5leHBvcnQgY29uc3QgTUFYX1NJWkVfREFUQTogbnVtYmVyID0gMzI3Njg7XHJcbmV4cG9ydCBjb25zdCBNQVhfQ09OVEVOVF9TSVpFOiBudW1iZXIgPSA2NTUzNjtcclxuZXhwb3J0IGNvbnN0IE1BWF9UWVBFX0xFTkdUSDogbnVtYmVyID0gMTY7XHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFX05BTUVTUEFDRV9SRVNFUlZFRDogc3RyaW5nID0gXCJfcmVzZXJ2ZWRfbmFtZXNwYWNlXCI7XHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFX1RZUEVfRUREWVNUT05FX1VJRDogc3RyaW5nID0gXCJfZWRkeXN0b25lX3VpZFwiO1xyXG5leHBvcnQgY29uc3QgTUVTU0FHRV9UWVBFX0lfQkVBQ09OX0lEOiBzdHJpbmcgPSBcIl9pYmVhY29uX2lkXCI7XHJcbmV4cG9ydCBjb25zdCBESVNUQU5DRV9VTktOT1dOOiBEaXN0YW5jZSA9IHtcclxuICAgIHByZWNpc2lvbjogUFJFQ0lTSU9OX0xPVyxcclxuICAgIG1ldGVyczogTmFOLFxyXG59O1xyXG5leHBvcnQgY29uc3QgTUVTU0FHRV9QSUNLRVJfSU5DTFVERV9BTExfVFlQRVM6IE1lc3NhZ2VQaWNrZXIgPSB7XHJcbiAgICBpbmNsdWRlQWxsVHlwZXM6IHRydWUsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFX1BPTElDWV9ERUZBVUxUOiBNZXNzYWdlUG9saWN5ID0ge307XHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFX1BPTElDWV9CTEVfT05MWTogTWVzc2FnZVBvbGljeSA9IHtcclxuICAgIHR0bFNlY29uZHM6IE1lc3NhZ2VQb2xpY3lUdGxTZWNvbmRzLlBPTElDWV9UVExfU0VDT05EU19JTkZJTklURSxcclxuICAgIGZpbmRpbmdNb2RlOiBNZXNzYWdlUG9saWN5RmluZGluZ01vZGUuUE9MSUNZX0ZJTkRJTkdfTU9ERV9TQ0FOLFxyXG59O1xyXG5leHBvcnQgY29uc3QgR0VUX09QVElPTl9ERUZBVUxUOiBHZXRPcHRpb24gPSB7XHJcbiAgICBwaWNrZXI6IE1FU1NBR0VfUElDS0VSX0lOQ0xVREVfQUxMX1RZUEVTLFxyXG4gICAgcG9saWN5OiBNRVNTQUdFX1BPTElDWV9ERUZBVUxULFxyXG59O1xyXG5leHBvcnQgY29uc3QgUFVUX09QVElPTl9ERUZBVUxUOiBQdXRPcHRpb24gPSB7XHJcbiAgICBwb2xpY3k6IE1FU1NBR0VfUE9MSUNZX0RFRkFVTFQsXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVuZHBvaW50SWQge1xyXG4gICAgZW5kcG9pbnRJZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbm5lY3RJbmZvIHtcclxuICAgIGVuZHBvaW50SWQ6IHN0cmluZztcclxuICAgIGVuZHBvaW50TmFtZTogc3RyaW5nO1xyXG4gICAgYXV0aENvZGU6IHN0cmluZztcclxuICAgIGlzUmVtb3RlQ29ubmVjdDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25uZWN0UmVzdWx0IHtcclxuICAgIGVuZHBvaW50SWQ6IHN0cmluZztcclxuICAgIHN0YXR1c0NvZGU6IFN0YXR1c0NvZGU7XHJcbiAgICBzdGF0dXNNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBjaGFubmVsUG9saWN5OiBDaGFubmVsUG9saWN5O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNjYW5FbmRwb2ludEluZm8ge1xyXG4gICAgZW5kcG9pbnRJZDogc3RyaW5nO1xyXG4gICAgc2VydmljZUlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YSB7XHJcbiAgICBlbmRwb2ludElkOiBzdHJpbmc7XHJcbiAgICBkYXRhVHlwZTogRGF0YVR5cGU7XHJcbiAgICBkYXRhSWQ6IHN0cmluZztcclxuICAgIHNpemU/OiBudW1iZXI7XHJcbiAgICBkYXRhPzogbnVtYmVyW107XHJcbiAgICBmaWxlVXJpPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zZmVyU3RhdGVVcGRhdGUge1xyXG4gICAgZW5kcG9pbnRJZDogc3RyaW5nO1xyXG4gICAgZGF0YUlkOiBzdHJpbmc7XHJcbiAgICBzdGF0dXM6IFRyYW5zZmVyU3RhdGU7XHJcbiAgICB0cmFuc2ZlcnJlZEJ5dGVzOiBudW1iZXI7XHJcbiAgICB0b3RhbEJ5dGVzOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmxlU2lnbmFsVXBkYXRlIHtcclxuICAgIG1lc3NhZ2U6IE1lc3NhZ2U7XHJcbiAgICBibGVTaWduYWw6IEJsZVNpZ25hbDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaXN0YW5jZVVwZGF0ZSB7XHJcbiAgICBtZXNzYWdlOiBNZXNzYWdlO1xyXG4gICAgZGlzdGFuY2U6IERpc3RhbmNlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2VUaW1lb3V0IHtcclxuICAgIG1lc3NhZ2U6IE1lc3NhZ2U7XHJcbiAgICBzdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uVXBkYXRlIHtcclxuICAgIGdyYW50UGVybWlzc2lvbjogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRoQ29kZVVwZGF0ZSB7XHJcbiAgICBlbmRwb2ludElkOiBzdHJpbmc7XHJcbiAgICBhdXRoQ29kZTogc3RyaW5nO1xyXG59XHJcblxyXG4iXX0=