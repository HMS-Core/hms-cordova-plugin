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

import { asyncExec } from './util'
import * as HMSAwarenessAPI from './interfaces';
export {HMSPermission} from './interfaces';
let HMSAwarenessClass = 'HMSAwareness';

export function hasPermission(permission: HMSAwarenessAPI.HMSPermission): Promise<any> {
    return asyncExec(HMSAwarenessClass, 'HMSAwarenessModule', ['hasPermission', permission]);
};
export function requestPermission(permission: HMSAwarenessAPI.HMSPermission): Promise<any> {
    return asyncExec(HMSAwarenessClass, 'HMSAwarenessModule', ['requestPermission', permission]);
};
export function requestPermissions(permissions: HMSAwarenessAPI.HMSPermission[]): Promise<any> {
    return asyncExec(HMSAwarenessClass, 'HMSAwarenessModule', ['requestPermissions', permissions]);
};
export function enableLogger(): Promise<void> {
    return asyncExec(HMSAwarenessClass, 'HMSAwarenessModule', ['enableLogger']);
};
export function disableLogger(): Promise<void> {
    return asyncExec(HMSAwarenessClass, 'HMSAwarenessModule', ['disableLogger']);
};
