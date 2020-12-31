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
import { HMSNearbyEvent, HMSPermission, Policy, WifiSharePolicy } from './enums';
import { GetOption, Message, PutOption } from './interfaces';
export { HMSNearbyEvent, HMSPermission, Policy, DataType, TransferState, MessagePolicyDistanceType, MessagePolicyFindingMode, MessagePolicyTtlSeconds, WifiSharePolicy, StatusCode } from "./enums";
export { Message, EddystoneUid, IBeaconId, NamespaceType, MessagePicker, MessagePolicy, PutOption, GetOption, BleSignal, Distance } from "./interfaces";
export { BLE_UNKNOWN_TX_POWER, PRECISION_LOW, MAX_SIZE_DATA, MAX_CONTENT_SIZE, MAX_TYPE_LENGTH, MESSAGE_NAMESPACE_RESERVED, MESSAGE_TYPE_EDDYSTONE_UID, MESSAGE_TYPE_I_BEACON_ID, DISTANCE_UNKNOWN, MESSAGE_PICKER_INCLUDE_ALL_TYPES, MESSAGE_POLICY_DEFAULT, MESSAGE_POLICY_BLE_ONLY, GET_OPTION_DEFAULT, PUT_OPTION_DEFAULT } from './interfaces';
/**
 * Enables HMSLogger capability which is used for sending usage analytics of Nearby SDK's methods.
 * @returns Promise<void>
 */
export declare function enableLogger(): Promise<void>;
/**
 * Disables HMSLogger capability which is used for sending usage analytics of Nearby SDK's methods.
 * @returns Promise<void>
 */
export declare function disableLogger(): Promise<void>;
/**
 * Checks whether permission is granted to use the services.
 * @param {HMSPermission} permission Permission.
 * @returns Promise<boolean>
 */
export declare function hasPermission(permission: HMSPermission): Promise<boolean>;
/**
 * Obtains the necessary permissions to use the services.
 * @param {HMSPermission} permission Permission.
 * @returns Promise<void>
 */
export declare function requestPermission(permission: HMSPermission): Promise<void>;
/**
 * Obtains the necessary permissions to use the services.
 * @param {HMSPermission[]} permissions Permissions List.
 * @returns Promise<void>
 */
export declare function requestPermissions(permissions: HMSPermission[]): Promise<void>;
/**
 * Subscribes to Nearby events. Pass a callback to run codes when the event triggered.
 * @param {HMSNearbyEvent} event Event name.
 * @param {(res: any) => void} callback Callback to be called when the event triggered.
 */
export declare function on(event: HMSNearbyEvent, callback: (res: any) => void): void;
/**
 * Starts broadcasting.
 * @param {string} name Local endpoint name.
 * @param {string} serviceId Service ID. The app package name is recommended.
 * @param {Policy} policy Object of the Policy type.
 * @returns Promise<void>
 */
export declare function startBroadcasting(name: string, serviceId: string, policy: Policy): Promise<void>;
/**
 * Stops broadcasting.
 * @returns Promise<void>
 */
export declare function stopBroadcasting(): Promise<void>;
/**
 * Starts to scan for remote endpoints with the specified service ID.
 * @param {string} serviceId Service ID. The app package name is recommended.
 * @param {Policy} policy Object of the Policy type.
 * @returns Promise<void>
 */
export declare function startScan(serviceId: string, policy: Policy): Promise<void>;
/**
 * Stops discovering devices.
 * @returns Promise<void>
 */
export declare function stopScan(): Promise<void>;
/**
 * Sends a request to connect to a remote endpoint.
 * @param {string} name Local endpoint name.
 * @param {string} endpointId ID of the remote endpoint.
 * @returns Promise<void>
 */
export declare function requestConnect(name: string, endpointId: string): Promise<void>;
/**
 * Accepts a connection. This API must be called before data transmission. If the connection request is not accepted within 8 seconds, the connection fails and needs to be re-initiated.
 * @param {string} endpointId ID of the remote endpoint.
 * @returns Promise<void>
 */
export declare function acceptConnect(endpointId: string): Promise<void>;
/**
 * Rejects a connection request from a remote endpoint.
 * @param {string} endpointId ID of the remote endpoint.
 * @returns Promise<void>
 */
export declare function rejectConnect(endpointId: string): Promise<void>;
/**
 * Disconnects from a remote endpoint. Then communication with the remote endpoint is no longer available.
 * @param {string} endpointId ID of the remote endpoint.
 * @returns Promise<void>
 */
export declare function disconnect(endpointId: string): Promise<void>;
/**
 * Disconnects all connections.
 * @returns Promise<void>
 */
export declare function disconnectAll(): Promise<void>;
/**
 * Transfers given bytes to given endpoint ids.
 * @param {number[]} bytes number array that contains your data.
 * @param {string[]} endpointIds string array of remote endpoint IDs.
 * @returns Promise<void>
 */
export declare function sendBytes(bytes: number[], endpointIds: string[]): Promise<void>;
/**
 * Transfers file from given URI to given endpoint ids. Transferred file is saved in subscriber's device under Downloads/Nearby/ directory with name data id.
 * @param {string} fileUri File URI.
 * @param {string[]} endpointIds string array of remote endpoint IDs.
 * @returns Promise<void>
 */
export declare function sendFile(fileUri: string, endpointIds: string[]): Promise<void>;
/**
 * Transfers stream from given URL to given endpoint ids.
 * @param {string} streamUrl Stream URL.
 * @param {string[]} endpointIds string array of remote endpoint IDs.
 * @returns Promise<void>
 */
export declare function sendStream(streamUrl: string, endpointIds: string[]): Promise<void>;
/**
 * Cancels data transmission when sending or receiving data.
 * @param {string} dataId ID of the data whose transmission is to be canceled.
 * @returns Promise<void>
 */
export declare function cancelDataTransfer(dataId: string): Promise<void>;
/**
 * Obtains the current API credential.
 * @returns Promise<string> Promise result of an execution that returns the current API credential.
 */
export declare function getApiKey(): Promise<string>;
/**
 * Sets the API credential for your app.
 * @param {string} apiKey API credential.
 * @returns Promise<void>
 */
export declare function setApiKey(apiKey: string): Promise<void>;
/**
 * Publishes a message and broadcasts a token for nearby devices to scan.
 * @param {Message} message Published message.
 * @returns Promise<void>
 */
export declare function put(message: Message): Promise<void>;
/**
 * Publishes a message and broadcasts a token for nearby devices to scan. This message is published only to apps that use the same project ID and have registered the message type with the cloud for subscription.
 * @param {Message} message Published message.
 * @param {PutOption} putOption PutOption parameters.
 * @returns Promise<void>
 */
export declare function put(message: Message, putOption: PutOption): Promise<void>;
/**
 * Obtains messages from the cloud using the default option (DEFAULT).
 * @returns Promise<void>
 */
export declare function get(): Promise<void>;
/**
 * Registers the messages to be obtained with the cloud. Only messages with the same project ID can be obtained.
 * @param {GetOption} getOption
 * @returns Promise<void>
 */
export declare function get(getOption: GetOption): Promise<void>;
/**
 * Identifies only BLE beacon messages. It subscribes to messages published by nearby devices in a persistent and low-power manner and uses the default configuration (DEFAULT). Scanning is going on no matter whether your app runs in the background or foreground. The scanning stops when the app process is killed.
 * @returns Promise<void>
 */
export declare function getInBackground(): Promise<void>;
/**
 * Identifies only BLE beacon messages. Scanning is going on no matter whether your app runs in the background or foreground. The scanning stops when the app process is killed.
 * @param {GetOption} getOption
 * @returns Promise<void>
 */
export declare function getInBackground(getOption: GetOption): Promise<void>;
/**
 * Cancels message publishing.
 * @param {Message} message Published message.
 * @returns Promise<void>
 */
export declare function unput(message: Message): Promise<void>;
/**
 * Cancels a message subscription.
 * @returns Promise<void>
 */
export declare function unget(): Promise<void>;
/**
 * Cancels the current message subscription.
 * @returns Promise<void>
 */
export declare function ungetInBackground(): Promise<void>;
/**
 * Enable the Wi-Fi sharing function. Set WifiSharePolicy based on function requirements.
 * @param {WifiSharePolicy} wifiSharePolicy Wi-Fi sharing policy. Enable the Wi-Fi sharing mode or configuration mode as required.
 * @returns Promise<void>
 */
export declare function startWifiShare(wifiSharePolicy: WifiSharePolicy): Promise<void>;
/**
 * Disables the Wi-Fi sharing function.
 * @returns Promise<void>
 */
export declare function stopWifiShare(): Promise<void>;
/**
 * Shares Wi-Fi with a remote device.
 * @param {string} endpointId ID of the remote endpoint.
 * @returns Promise<void>
 */
export declare function shareWifiConfig(endpointId: string): Promise<void>;
/**
 * Obtains the Nearby Service SDK version number.
 * @returns Promise<string> Version number of the Nearby Service SDK.
 */
export declare function getVersion(): Promise<string>;
