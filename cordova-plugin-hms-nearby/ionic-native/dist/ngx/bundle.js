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

'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var HMSNearby = /** @class */ (function (_super) {
    tslib.__extends(HMSNearby, _super);
    function HMSNearby() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Enables HMSLogger capability which is used for sending usage analytics of Nearby SDK's methods.
     * @returns Promise<void>
     */
    HMSNearby.prototype.enableLogger = function () { return core.cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    /**
     * Disables HMSLogger capability which is used for sending usage analytics of Nearby SDK's methods.
     * @returns Promise<void>
     */
    HMSNearby.prototype.disableLogger = function () { return core.cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    /**
     * Checks whether permission is granted to use the services.
     * @param {HMSPermission} permission Permission.
     * @returns Promise<boolean>
     */
    HMSNearby.prototype.hasPermission = function (permission) { return core.cordova(this, "hasPermission", { "otherPromise": true }, arguments); };
    /**
     * Obtains the necessary permissions to use the services.
     * @param {HMSPermission} permission Permission.
     * @returns Promise<void>
     */
    HMSNearby.prototype.requestPermission = function (permission) { return core.cordova(this, "requestPermission", { "otherPromise": true }, arguments); };
    /**
     * Obtains the necessary permissions to use the services.
     * @param {HMSPermission[]} permissions Permissions List.
     * @returns Promise<void>
     */
    HMSNearby.prototype.requestPermissions = function (permissions) { return core.cordova(this, "requestPermissions", { "otherPromise": true }, arguments); };
    /**
     * Subscribes to Nearby events. Pass a callback to run codes when the event triggered.
     * @param {HMSNearbyEvent} event Event name.
     * @param {(res: any) => void} callback Callback to be called when the event triggered.
     */
    HMSNearby.prototype.on = function (event, callback) { return core.cordova(this, "on", {}, arguments); };
    /**
     * Starts broadcasting.
     * @param {string} name Local endpoint name.
     * @param {string} serviceId Service ID. The app package name is recommended.
     * @param {Policy} policy Object of the Policy type.
     * @returns Promise<void>
     */
    HMSNearby.prototype.startBroadcasting = function (name, serviceId, policy) { return core.cordova(this, "startBroadcasting", { "otherPromise": true }, arguments); };
    /**
     * Stops broadcasting.
     * @returns Promise<void>
     */
    HMSNearby.prototype.stopBroadcasting = function () { return core.cordova(this, "stopBroadcasting", { "otherPromise": true }, arguments); };
    /**
     * Starts to scan for remote endpoints with the specified service ID.
     * @param {string} serviceId Service ID. The app package name is recommended.
     * @param {Policy} policy Object of the Policy type.
     * @returns Promise<void>
     */
    HMSNearby.prototype.startScan = function (serviceId, policy) { return core.cordova(this, "startScan", { "otherPromise": true }, arguments); };
    /**
     * Stops discovering devices.
     * @returns Promise<void>
     */
    HMSNearby.prototype.stopScan = function () { return core.cordova(this, "stopScan", { "otherPromise": true }, arguments); };
    /**
     * Sends a request to connect to a remote endpoint.
     * @param {string} name Local endpoint name.
     * @param {string} endpointId ID of the remote endpoint.
     * @returns Promise<void>
     */
    HMSNearby.prototype.requestConnect = function (name, endpointId) { return core.cordova(this, "requestConnect", { "otherPromise": true }, arguments); };
    /**
     * Sends a request to connect to a remote endpoint.
     * @param {string} name Local endpoint name.
     * @param {string} endpointId ID of the remote endpoint.
     * @param {ChannelPolicy} channelPolicy Channel policy, which is used to select the channel for establishing a connection.
     * @returns Promise<void>
     */
    HMSNearby.prototype.requestConnectEx = function (name, endpointId, channelPolicy) { return core.cordova(this, "requestConnectEx", { "otherPromise": true }, arguments); };
    /**
     * Accepts a connection. This API must be called before data transmission. If the connection request is not accepted within 8 seconds, the connection fails and needs to be re-initiated.
     * @param {string} endpointId ID of the remote endpoint.
     * @returns Promise<void>
     */
    HMSNearby.prototype.acceptConnect = function (endpointId) { return core.cordova(this, "acceptConnect", { "otherPromise": true }, arguments); };
    /**
     * Rejects a connection request from a remote endpoint.
     * @param {string} endpointId ID of the remote endpoint.
     * @returns Promise<void>
     */
    HMSNearby.prototype.rejectConnect = function (endpointId) { return core.cordova(this, "rejectConnect", { "otherPromise": true }, arguments); };
    /**
     * Disconnects from a remote endpoint. Then communication with the remote endpoint is no longer available.
     * @param {string} endpointId ID of the remote endpoint.
     * @returns Promise<void>
     */
    HMSNearby.prototype.disconnect = function (endpointId) { return core.cordova(this, "disconnect", { "otherPromise": true }, arguments); };
    /**
     * Disconnects all connections.
     * @returns Promise<void>
     */
    HMSNearby.prototype.disconnectAll = function () { return core.cordova(this, "disconnectAll", { "otherPromise": true }, arguments); };
    /**
     * Transfers given bytes to given endpoint ids.
     * @param {number[]} bytes number array that contains your data.
     * @param {string[]} endpointIds string array of remote endpoint IDs.
     * @returns Promise<void>
     */
    HMSNearby.prototype.sendBytes = function (bytes, endpointIds) { return core.cordova(this, "sendBytes", { "otherPromise": true }, arguments); };
    /**
     * Transfers file from given URI to given endpoint ids. Transferred file is saved in subscriber's device under Downloads/Nearby/ directory with name data id.
     * @param {string} fileUri File URI.
     * @param {string[]} endpointIds string array of remote endpoint IDs.
     * @returns Promise<void>
     */
    HMSNearby.prototype.sendFile = function (fileUri, endpointIds) { return core.cordova(this, "sendFile", { "otherPromise": true }, arguments); };
    /**
     * Transfers stream from given URL to given endpoint ids.
     * @param {string} streamUrl Stream URL.
     * @param {string[]} endpointIds string array of remote endpoint IDs.
     * @returns Promise<void>
     */
    HMSNearby.prototype.sendStream = function (streamUrl, endpointIds) { return core.cordova(this, "sendStream", { "otherPromise": true }, arguments); };
    /**
     * Cancels data transmission when sending or receiving data.
     * @param {string} dataId ID of the data whose transmission is to be canceled.
     * @returns Promise<void>
     */
    HMSNearby.prototype.cancelDataTransfer = function (dataId) { return core.cordova(this, "cancelDataTransfer", { "otherPromise": true }, arguments); };
    /**
     * Obtains the current API credential.
     * @returns Promise<string> Promise result of an execution that returns the current API credential.
     */
    HMSNearby.prototype.getApiKey = function () { return core.cordova(this, "getApiKey", { "otherPromise": true }, arguments); };
    /**
     * Sets the API credential for your app.
     * @param {string} apiKey API credential.
     * @returns Promise<void>
     */
    HMSNearby.prototype.setApiKey = function (apiKey) { return core.cordova(this, "setApiKey", { "otherPromise": true }, arguments); };
    HMSNearby.prototype.put = function (message, putOption) { return core.cordova(this, "put", { "otherPromise": true }, arguments); };
    HMSNearby.prototype.get = function (getOption) { return core.cordova(this, "get", { "otherPromise": true }, arguments); };
    HMSNearby.prototype.getInBackground = function (getOption) { return core.cordova(this, "getInBackground", { "otherPromise": true }, arguments); };
    /**
     * Cancels message publishing.
     * @param {Message} message Published message.
     * @returns Promise<void>
     */
    HMSNearby.prototype.unput = function (message) { return core.cordova(this, "unput", { "otherPromise": true }, arguments); };
    /**
     * Cancels a message subscription.
     * @returns Promise<void>
     */
    HMSNearby.prototype.unget = function () { return core.cordova(this, "unget", { "otherPromise": true }, arguments); };
    /**
     * Cancels the current message subscription.
     * @returns Promise<void>
     */
    HMSNearby.prototype.ungetInBackground = function () { return core.cordova(this, "ungetInBackground", { "otherPromise": true }, arguments); };
    HMSNearby.prototype.registerScanTask = function (beaconOption) { return core.cordova(this, "registerScanTask", { "otherPromise": true }, arguments); };
    HMSNearby.prototype.unRegisterScanTask = function () { return core.cordova(this, "unRegisterScanTask", { "otherPromise": true }, arguments); };
    HMSNearby.prototype.getBeaconMsgConditions = function () { return core.cordova(this, "getBeaconMsgConditions", { "otherPromise": true }, arguments); };
    HMSNearby.prototype.getRawBeaconConditions = function () { return core.cordova(this, "getRawBeaconConditions", { "otherPromise": true }, arguments); };
    HMSNearby.prototype.getRawBeaconConditionsWithBeaconType = function (beaconType) { return core.cordova(this, "getRawBeaconConditionsWithBeaconType", { "otherPromise": true }, arguments); };
    /**
     * Obtains the Nearby Service SDK version number.
     * @returns Promise<string> Version number of the Nearby Service SDK.
     */
    HMSNearby.prototype.getVersion = function () { return core.cordova(this, "getVersion", { "otherPromise": true }, arguments); };
    HMSNearby.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSNearby, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HMSNearby.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSNearby });
    HMSNearby.pluginName = "HMSNearby";
    HMSNearby.plugin = "cordova-plugin-hms-nearby";
    HMSNearby.pluginRef = "HMSNearby";
    HMSNearby.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSNearby.platforms = ["Android"];
    HMSNearby = tslib.__decorate([], HMSNearby);
    return HMSNearby;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSNearby, decorators: [{
            type: i0.Injectable
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
exports.HMSNearbyEvent = void 0;
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
})(exports.HMSNearbyEvent || (exports.HMSNearbyEvent = {}));
exports.HMSPermission = void 0;
(function (HMSPermission) {
    HMSPermission["PERMISSION_BLUETOOTH"] = "android.permission.BLUETOOTH";
    HMSPermission["PERMISSION_BLUETOOTH_ADMIN"] = "android.permission.BLUETOOTH_ADMIN";
    HMSPermission["PERMISSION_ACCESS_COARSE_LOCATION"] = "android.permission.ACCESS_COARSE_LOCATION";
    HMSPermission["PERMISSION_ACCESS_FINE_LOCATION"] = "android.permission.ACCESS_FINE_LOCATION";
    HMSPermission["PERMISSION_READ_EXTERNAL_STORAGE"] = "android.permission.READ_EXTERNAL_STORAGE";
    HMSPermission["PERMISSION_WRITE_EXTERNAL_STORAGE"] = "android.permission.WRITE_EXTERNAL_STORAGE";
    HMSPermission["PERMISSION_ACCESS_WIFI_STATE"] = "android.permission.ACCESS_WIFI_STATE";
    HMSPermission["PERMISSION_CHANGE_WIFI_STATE"] = "android.permission.CHANGE_WIFI_STATE";
})(exports.HMSPermission || (exports.HMSPermission = {}));
exports.Policy = void 0;
(function (Policy) {
    Policy[Policy["POLICY_MESH"] = 1] = "POLICY_MESH";
    Policy[Policy["POLICY_P2P"] = 2] = "POLICY_P2P";
    Policy[Policy["POLICY_STAR"] = 3] = "POLICY_STAR";
})(exports.Policy || (exports.Policy = {}));
exports.DataType = void 0;
(function (DataType) {
    DataType[DataType["DATA_FILE"] = 1] = "DATA_FILE";
    DataType[DataType["DATA_BYTES"] = 2] = "DATA_BYTES";
    DataType[DataType["DATA_STREAM"] = 3] = "DATA_STREAM";
})(exports.DataType || (exports.DataType = {}));
exports.TransferState = void 0;
(function (TransferState) {
    TransferState[TransferState["TRANSFER_STATE_SUCCESS"] = 1] = "TRANSFER_STATE_SUCCESS";
    TransferState[TransferState["TRANSFER_STATE_FAILURE"] = 2] = "TRANSFER_STATE_FAILURE";
    TransferState[TransferState["TRANSFER_STATE_IN_PROGRESS"] = 3] = "TRANSFER_STATE_IN_PROGRESS";
    TransferState[TransferState["TRANSFER_STATE_CANCELED"] = 4] = "TRANSFER_STATE_CANCELED";
})(exports.TransferState || (exports.TransferState = {}));
exports.MessagePolicyDistanceType = void 0;
(function (MessagePolicyDistanceType) {
    MessagePolicyDistanceType[MessagePolicyDistanceType["POLICY_DISTANCE_TYPE_DEFAULT"] = 0] = "POLICY_DISTANCE_TYPE_DEFAULT";
    MessagePolicyDistanceType[MessagePolicyDistanceType["POLICY_DISTANCE_TYPE_EARSHOT"] = 1] = "POLICY_DISTANCE_TYPE_EARSHOT";
})(exports.MessagePolicyDistanceType || (exports.MessagePolicyDistanceType = {}));
exports.MessagePolicyFindingMode = void 0;
(function (MessagePolicyFindingMode) {
    MessagePolicyFindingMode[MessagePolicyFindingMode["POLICY_FINDING_MODE_DEFAULT"] = 0] = "POLICY_FINDING_MODE_DEFAULT";
    MessagePolicyFindingMode[MessagePolicyFindingMode["POLICY_FINDING_MODE_BROADCAST"] = 1] = "POLICY_FINDING_MODE_BROADCAST";
    MessagePolicyFindingMode[MessagePolicyFindingMode["POLICY_FINDING_MODE_SCAN"] = 2] = "POLICY_FINDING_MODE_SCAN";
})(exports.MessagePolicyFindingMode || (exports.MessagePolicyFindingMode = {}));
exports.MessagePolicyTtlSeconds = void 0;
(function (MessagePolicyTtlSeconds) {
    MessagePolicyTtlSeconds[MessagePolicyTtlSeconds["POLICY_TTL_SECONDS_DEFAULT"] = 240] = "POLICY_TTL_SECONDS_DEFAULT";
    MessagePolicyTtlSeconds[MessagePolicyTtlSeconds["POLICY_TTL_SECONDS_MAX"] = 86400] = "POLICY_TTL_SECONDS_MAX";
    MessagePolicyTtlSeconds[MessagePolicyTtlSeconds["POLICY_TTL_SECONDS_INFINITE"] = 2147483647] = "POLICY_TTL_SECONDS_INFINITE";
})(exports.MessagePolicyTtlSeconds || (exports.MessagePolicyTtlSeconds = {}));
exports.ChannelPolicy = void 0;
(function (ChannelPolicy) {
    ChannelPolicy[ChannelPolicy["CHANNEL_AUTO"] = 1] = "CHANNEL_AUTO";
    ChannelPolicy[ChannelPolicy["CHANNEL_HIGH_THROUGHPUT"] = 2] = "CHANNEL_HIGH_THROUGHPUT";
    ChannelPolicy[ChannelPolicy["CHANNEL_INSTANCE"] = 3] = "CHANNEL_INSTANCE";
})(exports.ChannelPolicy || (exports.ChannelPolicy = {}));
exports.StatusCode = void 0;
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
})(exports.StatusCode || (exports.StatusCode = {}));
var BLE_UNKNOWN_TX_POWER = 0x80000000;
var PRECISION_LOW = 1;
var MAX_SIZE_DATA = 32768;
var MAX_CONTENT_SIZE = 65536;
var MAX_TYPE_LENGTH = 16;
var MESSAGE_NAMESPACE_RESERVED = "_reserved_namespace";
var MESSAGE_TYPE_EDDYSTONE_UID = "_eddystone_uid";
var MESSAGE_TYPE_I_BEACON_ID = "_ibeacon_id";
var DISTANCE_UNKNOWN = {
    precision: PRECISION_LOW,
    meters: NaN,
};
var MESSAGE_PICKER_INCLUDE_ALL_TYPES = {
    includeAllTypes: true,
};
var MESSAGE_POLICY_DEFAULT = {};
var MESSAGE_POLICY_BLE_ONLY = {
    ttlSeconds: exports.MessagePolicyTtlSeconds.POLICY_TTL_SECONDS_INFINITE,
    findingMode: exports.MessagePolicyFindingMode.POLICY_FINDING_MODE_SCAN,
};
var GET_OPTION_DEFAULT = {
    picker: MESSAGE_PICKER_INCLUDE_ALL_TYPES,
    policy: MESSAGE_POLICY_DEFAULT,
};
var PUT_OPTION_DEFAULT = {
    policy: MESSAGE_POLICY_DEFAULT,
};

exports.BLE_UNKNOWN_TX_POWER = BLE_UNKNOWN_TX_POWER;
exports.DISTANCE_UNKNOWN = DISTANCE_UNKNOWN;
exports.GET_OPTION_DEFAULT = GET_OPTION_DEFAULT;
exports.HMSNearby = HMSNearby;
exports.MAX_CONTENT_SIZE = MAX_CONTENT_SIZE;
exports.MAX_SIZE_DATA = MAX_SIZE_DATA;
exports.MAX_TYPE_LENGTH = MAX_TYPE_LENGTH;
exports.MESSAGE_NAMESPACE_RESERVED = MESSAGE_NAMESPACE_RESERVED;
exports.MESSAGE_PICKER_INCLUDE_ALL_TYPES = MESSAGE_PICKER_INCLUDE_ALL_TYPES;
exports.MESSAGE_POLICY_BLE_ONLY = MESSAGE_POLICY_BLE_ONLY;
exports.MESSAGE_POLICY_DEFAULT = MESSAGE_POLICY_DEFAULT;
exports.MESSAGE_TYPE_EDDYSTONE_UID = MESSAGE_TYPE_EDDYSTONE_UID;
exports.MESSAGE_TYPE_I_BEACON_ID = MESSAGE_TYPE_I_BEACON_ID;
exports.PRECISION_LOW = PRECISION_LOW;
exports.PUT_OPTION_DEFAULT = PUT_OPTION_DEFAULT;
