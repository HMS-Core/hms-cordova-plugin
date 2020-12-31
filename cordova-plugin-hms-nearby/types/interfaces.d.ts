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
import { MessagePolicyDistanceType, MessagePolicyFindingMode, MessagePolicyTtlSeconds } from "./enums";
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
export declare const BLE_UNKNOWN_TX_POWER: number;
export declare const PRECISION_LOW: number;
export declare const MAX_SIZE_DATA: number;
export declare const MAX_CONTENT_SIZE: number;
export declare const MAX_TYPE_LENGTH: number;
export declare const MESSAGE_NAMESPACE_RESERVED: string;
export declare const MESSAGE_TYPE_EDDYSTONE_UID: string;
export declare const MESSAGE_TYPE_I_BEACON_ID: string;
export declare const DISTANCE_UNKNOWN: Distance;
export declare const MESSAGE_PICKER_INCLUDE_ALL_TYPES: MessagePicker;
export declare const MESSAGE_POLICY_DEFAULT: MessagePolicy;
export declare const MESSAGE_POLICY_BLE_ONLY: MessagePolicy;
export declare const GET_OPTION_DEFAULT: GetOption;
export declare const PUT_OPTION_DEFAULT: PutOption;
