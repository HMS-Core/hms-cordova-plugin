/*
    Copyright 2021-2021. Huawei Technologies Co., Ltd. All rights reserved.

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

import { asyncExec } from './utils'

export function init(): Promise<boolean> {
    return asyncExec('HMSPushFcmProxy', 'FcmProxy', ['init']);
}
export function isProxyInitEnabled(): Promise<boolean> {
    return asyncExec('HMSPushFcmProxy', 'FcmProxy', ['isProxyInitEnabled']);
}
export function setCountryCode(countryCode: string): Promise<void> {
    return asyncExec('HMSPushFcmProxy', 'FcmProxy', ['setCountryCode', countryCode]);
}
export function  enableLogger(): Promise<boolean> {
	return asyncExec('HMSPushFcmProxy', 'FcmProxy', ['enableLogger']);
}
export function  disableLogger(): Promise<boolean> {
	return asyncExec('HMSPushFcmProxy', 'FcmProxy', ['disableLogger']);
}