/*
Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

import { RemoteMessageBuilder } from './RemoteMessageBuilder';
export { CordovaRemoteMessage } from './CordovaRemoteMessage';
export { RemoteMessageBuilder };
export { HmsPushResultCode } from './HmsPushResultCode';
export declare function init(): void;
export declare function turnOnPush(): Promise<string>;
export declare function turnOffPush(): Promise<string>;
export declare function getId(): Promise<string>;
export declare function getAAID(): Promise<string>;
export declare function getToken(): Promise<string>;
export declare function getCreationTime(): Promise<string>;
export declare function deleteAAID(): Promise<string>;
export declare function deleteToken(): Promise<string>;
export declare function subscribe(args: string): Promise<string>;
export declare function unsubscribe(args: string): Promise<string>;
export declare function setAutoInitEnabled(args: string): Promise<string>;
export declare function isAutoInitEnabled(args: string): Promise<string>;
export declare function sendRemoteMessage(args: any): Promise<any>;
export declare function getInitialNotification(): Promise<any>;
export declare function enableLogger(): Promise<any>;
export declare function disableLogger(): Promise<any>;
export declare function getOdid(): Promise<any>;
