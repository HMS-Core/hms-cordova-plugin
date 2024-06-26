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

import { Injectable } from "@angular/core";
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from "@awesome-cordova-plugins/core";

/**
 * @name HMSNearby
 * @description
 * The Cordova Nearby Plugin enables communication between Huawei Nearby Kit SDK and Cordova platform. This plugin exposes all functionality provided by Huawei Nearby Kit SDK.
 *
 * @usage
 * ```typescript
 * import { HMSNearby } from '@hmscore/ionic-native-hms-nearby';
 *
 *
 * constructor(private hmsNearby: HMSNearby) { }
 *
 * ...
 *
 *
 * this.hmsNearby.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
    pluginName: "HMSNearby",
    plugin: "cordova-plugin-hms-nearby",
    pluginRef: "HMSNearby",
    repo: "https://github.com/HMS-Core/hms-cordova-plugin",
    platforms: ["Android"],
})
@Injectable()
export class HMSNearby extends AwesomeCordovaNativePlugin {
    //////////////////// LOGGER ////////////////////

    @Cordova({ otherPromise: true })
    /**
     * Enables HMSLogger capability which is used for sending usage analytics of Nearby SDK's methods.
     * @returns Promise<void>
     */
    enableLogger(): Promise<void> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * Disables HMSLogger capability which is used for sending usage analytics of Nearby SDK's methods.
     * @returns Promise<void>
     */
    disableLogger(): Promise<void> {
        return;
    }

    //////////////////// PERMISSIONS ////////////////////

    @Cordova({ otherPromise: true })
    /**
     * Checks whether permission is granted to use the services.
     * @param {HMSPermission} permission Permission.
     * @returns Promise<boolean>
     */
    hasPermission(permission: HMSPermission): Promise<boolean> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * Obtains the necessary permissions to use the services.
     * @param {HMSPermission} permission Permission.
     * @returns Promise<void>
     */
    requestPermission(permission: HMSPermission): Promise<void> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * Obtains the necessary permissions to use the services.
     * @param {HMSPermission[]} permissions Permissions List.
     * @returns Promise<void>
     */
    requestPermissions(permissions: HMSPermission[]): Promise<void> {
        return;
    }

    //////////////////// EVENT REGISTERATION ////////////////////

    @Cordova()
    /**
     * Subscribes to Nearby events. Pass a callback to run codes when the event triggered.
     * @param {HMSNearbyEvent} event Event name.
     * @param {(res: any) => void} callback Callback to be called when the event triggered.
     */
    on(event: HMSNearbyEvent, callback: (res: any) => void): void {
        return;
    }

    //////////////////// DISCOVERY ////////////////////

    @Cordova({ otherPromise: true })
    /**
     * Starts broadcasting.
     * @param {string} name Local endpoint name.
     * @param {string} serviceId Service ID. The app package name is recommended.
     * @param {Policy} policy Object of the Policy type.
     * @returns Promise<void>
     */
    startBroadcasting(
        name: string,
        serviceId: string,
        policy: Policy
    ): Promise<void> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * Stops broadcasting.
     * @returns Promise<void>
     */
    stopBroadcasting(): Promise<void> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * Starts to scan for remote endpoints with the specified service ID.
     * @param {string} serviceId Service ID. The app package name is recommended.
     * @param {Policy} policy Object of the Policy type.
     * @returns Promise<void>
     */
    startScan(serviceId: string, policy: Policy): Promise<void> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * Stops discovering devices.
     * @returns Promise<void>
     */
    stopScan(): Promise<void> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * Sends a request to connect to a remote endpoint.
     * @param {string} name Local endpoint name.
     * @param {string} endpointId ID of the remote endpoint.
     * @returns Promise<void>
     */
    requestConnect(name: string, endpointId: string): Promise<void> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * Sends a request to connect to a remote endpoint.
     * @param {string} name Local endpoint name.
     * @param {string} endpointId ID of the remote endpoint.
     * @param {ChannelPolicy} channelPolicy Channel policy, which is used to select the channel for establishing a connection.
     * @returns Promise<void>
     */
    requestConnectEx(
        name: string,
        endpointId: string,
        channelPolicy: ChannelPolicy
    ): Promise<void> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * Accepts a connection. This API must be called before data transmission. If the connection request is not accepted within 8 seconds, the connection fails and needs to be re-initiated.
     * @param {string} endpointId ID of the remote endpoint.
     * @returns Promise<void>
     */
    acceptConnect(endpointId: string): Promise<void> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * Rejects a connection request from a remote endpoint.
     * @param {string} endpointId ID of the remote endpoint.
     * @returns Promise<void>
     */
    rejectConnect(endpointId: string): Promise<void> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * Disconnects from a remote endpoint. Then communication with the remote endpoint is no longer available.
     * @param {string} endpointId ID of the remote endpoint.
     * @returns Promise<void>
     */
    disconnect(endpointId: string): Promise<void> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * Disconnects all connections.
     * @returns Promise<void>
     */
    disconnectAll(): Promise<void> {
        return;
    }

    //////////////////// TRANSFER ////////////////////

    @Cordova({ otherPromise: true })
    /**
     * Transfers given bytes to given endpoint ids.
     * @param {number[]} bytes number array that contains your data.
     * @param {string[]} endpointIds string array of remote endpoint IDs.
     * @returns Promise<void>
     */
    sendBytes(bytes: number[], endpointIds: string[]): Promise<void> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * Transfers file from given URI to given endpoint ids. Transferred file is saved in subscriber's device under Downloads/Nearby/ directory with name data id.
     * @param {string} fileUri File URI.
     * @param {string[]} endpointIds string array of remote endpoint IDs.
     * @returns Promise<void>
     */
    sendFile(fileUri: string, endpointIds: string[]): Promise<void> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * Transfers stream from given URL to given endpoint ids.
     * @param {string} streamUrl Stream URL.
     * @param {string[]} endpointIds string array of remote endpoint IDs.
     * @returns Promise<void>
     */
    sendStream(streamUrl: string, endpointIds: string[]): Promise<void> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * Cancels data transmission when sending or receiving data.
     * @param {string} dataId ID of the data whose transmission is to be canceled.
     * @returns Promise<void>
     */
    cancelDataTransfer(dataId: string): Promise<void> {
        return;
    }

    //////////////////// MESSAGE ////////////////////

    @Cordova({ otherPromise: true })
    /**
     * Obtains the current API credential.
     * @returns Promise<string> Promise result of an execution that returns the current API credential.
     */
    getApiKey(): Promise<string> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * Sets the API credential for your app.
     * @param {string} apiKey API credential.
     * @returns Promise<void>
     */
    setApiKey(apiKey: string): Promise<void> {
        return;
    }

    /**
     * Publishes a message and broadcasts a token for nearby devices to scan.
     * @param {Message} message Published message.
     * @returns Promise<void>
     */
    put(message: Message): Promise<void>;
    /**
     * Publishes a message and broadcasts a token for nearby devices to scan. This message is published only to apps that use the same project ID and have registered the message type with the cloud for subscription.
     * @param {Message} message Published message.
     * @param {PutOption} putOption PutOption parameters.
     * @returns Promise<void>
     */
    put(message: Message, putOption: PutOption): Promise<void>;
    @Cordova({ otherPromise: true })
    put(message: Message, putOption?: PutOption): Promise<void> {
        return;
    }

    /**
     * Obtains messages from the cloud using the default option (DEFAULT).
     * @returns Promise<void>
     */
    get(): Promise<void>;
    /**
     * Registers the messages to be obtained with the cloud. Only messages with the same project ID can be obtained.
     * @param {GetOption} getOption
     * @returns Promise<void>
     */
    get(getOption: GetOption): Promise<void>;
    @Cordova({ otherPromise: true })
    get(getOption?: GetOption): Promise<void> {
        return;
    }

    /**
     * Identifies only BLE beacon messages. It subscribes to messages published by nearby devices in a persistent and low-power manner and uses the default configuration (DEFAULT). Scanning is going on no matter whether your app runs in the background or foreground. The scanning stops when the app process is killed.
     * @returns Promise<void>
     */
    getInBackground(): Promise<void>;
    /**
     * Identifies only BLE beacon messages. Scanning is going on no matter whether your app runs in the background or foreground. The scanning stops when the app process is killed.
     * @param {GetOption} getOption
     * @returns Promise<void>
     */
    getInBackground(getOption: GetOption): Promise<void>;
    @Cordova({ otherPromise: true })
    getInBackground(getOption?: GetOption): Promise<void> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * Cancels message publishing.
     * @param {Message} message Published message.
     * @returns Promise<void>
     */
    unput(message: Message): Promise<void> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * Cancels a message subscription.
     * @returns Promise<void>
     */
    unget(): Promise<void> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * Cancels the current message subscription.
     * @returns Promise<void>
     */
    ungetInBackground(): Promise<void> {
        return;
    }

    //////////////////// Beacon ////////////////////


    @Cordova({ otherPromise: true }) 
    registerScanTask(beaconOption: BeaconOption): Promise<void> {
        return;
    }

    @Cordova({ otherPromise: true }) 
    unRegisterScanTask(): Promise<void> {
        return;
    }
     
    
    @Cordova({ otherPromise: true }) 
    getBeaconMsgConditions(): Promise<void> {
        return;
    }
    
    @Cordova({ otherPromise: true }) 
    getRawBeaconConditions(): Promise<void> {
        return;
    }
    
    @Cordova({ otherPromise: true }) 
    getRawBeaconConditionsWithBeaconType(beaconType: BeaconType): Promise<void> {
        return;
    }

    //////////////////// VERSION ////////////////////

    @Cordova({ otherPromise: true })
    /**
     * Obtains the Nearby Service SDK version number.
     * @returns Promise<string> Version number of the Nearby Service SDK.
     */
    getVersion(): Promise<string> {
        return;
    }
}

export enum HMSNearbyEvent {
    EVENT_CONNECTION_ON_ESTABLISH = "eventConnectionOnEstablish",
    EVENT_CONNECTION_ON_RESULT = "eventConnectionOnResult",
    EVENT_CONNECTION_ON_DISCONNECT = "eventConnectionOnDisconnect",
    EVENT_SCAN_ON_FOUND = "eventScanOnFound",
    EVENT_SCAN_ON_LOST = "eventScanOnLost",
    EVENT_DATA_ON_RECEIVED = "eventDataOnReceived",
    EVENT_DATA_ON_TRANSFER_UPDATE = "eventDataOnTransferUpdate",
    EVENT_MESSAGE_ON_BLE_SIGNAL_CHANGED = "eventMessageOnBleSignalChanged",
    EVENT_MESSAGE_ON_DISTANCE_CHANGED = "eventMessageOnDistanceChanged",
    EVENT_MESSAGE_ON_FOUND = "eventMessageOnFound",
    EVENT_MESSAGE_ON_LOST = "eventMessageOnLost",
    EVENT_PUT_ON_TIMEOUT = "eventPutOnTimeout",
    EVENT_GET_ON_TIMEOUT = "eventGetOnTimeout",
    EVENT_STATUS_ON_PERMISSION_CHANGED = "eventStatusOnPermissionChanged", 
}

export enum HMSPermission {
    PERMISSION_BLUETOOTH = "android.permission.BLUETOOTH",
    PERMISSION_BLUETOOTH_ADMIN = "android.permission.BLUETOOTH_ADMIN", 
    PERMISSION_ACCESS_COARSE_LOCATION = "android.permission.ACCESS_COARSE_LOCATION",
    PERMISSION_ACCESS_FINE_LOCATION = "android.permission.ACCESS_FINE_LOCATION",
    PERMISSION_READ_EXTERNAL_STORAGE = "android.permission.READ_EXTERNAL_STORAGE",
    PERMISSION_WRITE_EXTERNAL_STORAGE = "android.permission.WRITE_EXTERNAL_STORAGE", 
    PERMISSION_ACCESS_WIFI_STATE = "android.permission.ACCESS_WIFI_STATE",
    PERMISSION_CHANGE_WIFI_STATE = "android.permission.CHANGE_WIFI_STATE"
}

export enum Policy {
    POLICY_MESH = 1,
    POLICY_P2P = 2,
    POLICY_STAR = 3,
}

export enum DataType {
    DATA_FILE = 1,
    DATA_BYTES = 2,
    DATA_STREAM = 3,
}

export enum TransferState {
    TRANSFER_STATE_SUCCESS = 1,
    TRANSFER_STATE_FAILURE = 2,
    TRANSFER_STATE_IN_PROGRESS = 3,
    TRANSFER_STATE_CANCELED = 4,
}

export enum MessagePolicyDistanceType {
    POLICY_DISTANCE_TYPE_DEFAULT = 0,
    POLICY_DISTANCE_TYPE_EARSHOT = 1,
}

export enum MessagePolicyFindingMode {
    POLICY_FINDING_MODE_DEFAULT = 0,
    POLICY_FINDING_MODE_BROADCAST = 1,
    POLICY_FINDING_MODE_SCAN = 2,
}

export enum MessagePolicyTtlSeconds {
    POLICY_TTL_SECONDS_DEFAULT = 240,
    POLICY_TTL_SECONDS_MAX = 86400,
    POLICY_TTL_SECONDS_INFINITE = 2147483647,
}

export enum ChannelPolicy {
    CHANNEL_AUTO = 1,
    CHANNEL_HIGH_THROUGHPUT = 2,
    CHANNEL_INSTANCE = 3,
}

export enum StatusCode {
    STATUS_SUCCESS = 0,
    STATUS_FAILURE = -1,
    STATUS_API_DISORDER = 8001,
    STATUS_NO_NETWORK = 8002,
    STATUS_NOT_CONNECTED = 8003,
    STATUS_TRANSFER_IO_ERROR = 8004,
    STATUS_ALREADY_BROADCASTING = 8005,
    STATUS_ALREADY_CONNECTED = 8006,
    STATUS_ALREADY_SCANNING = 8007,
    STATUS_POLICY_CONFLICT = 8008,
    STATUS_BLUETOOTH_OPERATION_FAILED = 8009,
    STATUS_CONNECT_REJECTED = 8010,
    STATUS_CONNECT_IO_ERROR = 8011,
    STATUS_ENDPOINT_UNKNOWN = 8012,
    STATUS_API_OCCUPIED = 8013,
    STATUS_MISSING_PERMISSION_ACCESS_COARSE_LOCATION = 8014, 
    STATUS_MISSING_PERMISSION_BLUETOOTH = 8016,
    STATUS_MISSING_PERMISSION_BLUETOOTH_ADMIN = 8017,
    STATUS_MISSING_PERMISSION_RECORD_AUDIO = 8019,
    STATUS_MISSING_SETTING_LOCATION_ON = 8020,
    STATUS_AIRPLANE_MODE_MUST_BE_OFF = 8021,
    STATUS_MESSAGE_APP_UNREGISTERED = 8050,
    STATUS_MESSAGE_APP_QUOTA_LIMITED = 8051,
    STATUS_MESSAGE_BLE_BROADCASTING_UNSUPPORTED = 8052,
    STATUS_MESSAGE_BLE_SCANNING_UNSUPPORTED = 8053,
    STATUS_MESSAGE_BLUETOOTH_OFF = 8054,
    STATUS_MESSAGE_WRONG_CONTEXT = 8055,
    STATUS_MESSAGE_NOT_ALLOW = 8056,
    STATUS_MESSAGE_MISSING_PERMISSIONS = 8057,
    STATUS_MESSAGE_AUTH_FAILED = 8058,
    STATUS_MESSAGE_PENDING_INTENTS_LIMITED = 8059,
    STATUS_INTERNAL_ERROR = 8060,
    STATUS_FINDING_MODE_ERROR = 8061,
    STATUS_MESSAGE_TASK_ALREADY_IN_PROCESSING = 8062,
    STATUS_MISSING_PERMISSION_FILE_READ_WRITE = 8063,
    STATUS_MISSING_PERMISSION_INTERNET = 8064, 
}

//BEACON
export interface BeaconOption {
    beaconId?: string;
    beaconType?: number;
    namespace?: string;
    type?: string;
} 

export interface BeaconType {
    beaconType: number; 
}

export interface Message {
    content: number[];
    namespace?: string;
    type?: string;
}

export interface EddystoneUid {
    hexNamespace: string;
    hexInstance: string;
}

export interface IBeaconId {
    iBeaconUuid: string;
    major: number;
    minor: number;
}

export interface NamespaceType {
    namespace: string;
    type: string;
}

export interface MessagePicker {
    includeAllTypes?: boolean;
    eddystoneUids?: EddystoneUid[];
    iBeaconIds?: IBeaconId[];
    namespaceTypes?: NamespaceType[];
}

export interface MessagePolicy {
    distanceType?: MessagePolicyDistanceType;
    findingMode?: MessagePolicyFindingMode;
    ttlSeconds?: MessagePolicyTtlSeconds;
}

export interface PutOption {
    policy?: MessagePolicy;
}

export interface GetOption {
    picker?: MessagePicker;
    policy?: MessagePolicy;
}

export interface BleSignal {
    rssi: number;
    txPower: number;
}

export interface Distance {
    precision: number;
    meters: number;
}

export const BLE_UNKNOWN_TX_POWER: number = 0x80000000;
export const PRECISION_LOW: number = 1;
export const MAX_SIZE_DATA: number = 32768;
export const MAX_CONTENT_SIZE: number = 65536;
export const MAX_TYPE_LENGTH: number = 16;
export const MESSAGE_NAMESPACE_RESERVED: string = "_reserved_namespace";
export const MESSAGE_TYPE_EDDYSTONE_UID: string = "_eddystone_uid";
export const MESSAGE_TYPE_I_BEACON_ID: string = "_ibeacon_id";
export const DISTANCE_UNKNOWN: Distance = {
    precision: PRECISION_LOW,
    meters: NaN,
};
export const MESSAGE_PICKER_INCLUDE_ALL_TYPES: MessagePicker = {
    includeAllTypes: true,
};
export const MESSAGE_POLICY_DEFAULT: MessagePolicy = {};
export const MESSAGE_POLICY_BLE_ONLY: MessagePolicy = {
    ttlSeconds: MessagePolicyTtlSeconds.POLICY_TTL_SECONDS_INFINITE,
    findingMode: MessagePolicyFindingMode.POLICY_FINDING_MODE_SCAN,
};
export const GET_OPTION_DEFAULT: GetOption = {
    picker: MESSAGE_PICKER_INCLUDE_ALL_TYPES,
    policy: MESSAGE_POLICY_DEFAULT,
};
export const PUT_OPTION_DEFAULT: PutOption = {
    policy: MESSAGE_POLICY_DEFAULT,
};

export interface EndpointId {
    endpointId: string;
}

export interface ConnectInfo {
    endpointId: string;
    endpointName: string;
    authCode: string;
    isRemoteConnect: boolean;
}

export interface ConnectResult {
    endpointId: string;
    statusCode: StatusCode;
    statusMessage: string;
    channelPolicy: ChannelPolicy;
}

export interface ScanEndpointInfo {
    endpointId: string;
    serviceId: string;
    name: string;
}

export interface Data {
    endpointId: string;
    dataType: DataType;
    dataId: string;
    size?: number;
    data?: number[];
    fileUri?: string;
}

export interface TransferStateUpdate {
    endpointId: string;
    dataId: string;
    status: TransferState;
    transferredBytes: number;
    totalBytes: number;
}

export interface BleSignalUpdate {
    message: Message;
    bleSignal: BleSignal;
}

export interface DistanceUpdate {
    message: Message;
    distance: Distance;
}

export interface MessageTimeout {
    message: Message;
    status: string;
}

export interface PermissionUpdate {
    grantPermission: boolean;
}

export interface AuthCodeUpdate {
    endpointId: string;
    authCode: string;
}

