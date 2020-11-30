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

import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name HMSDtm
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { HMSDtm } from '@ionic-native/hms-dtm';
 *
 *
 * constructor(private hmsDtm: HMSDtm) { }
 *
 * ...
 *
 *
 * this.hmsDtm.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class HMSDtm extends IonicNativePlugin {
    /**
   * This method is used to listen CustomTag interface class. This listener returns CustomTag values if condition provided
   * @returns Promise<object>
   * @params callback() => {}
   */
    onCustomTag(callback: (data: any) => void): Promise<object>;
    setCustomVariable(customVariableObject: CustomVariableObject): Promise<boolean>;
    onEvent(eventName: string, bundleObject: BundleObject): Promise<any>;
    enableLogger(): Promise<boolean>;
    disableLogger(): Promise<boolean>;
}
interface BundleObject {
    [key: string]: string | number | boolean;
}
interface CustomVariableObject {
    varName: string;
    value: string | number | boolean;
}
export {};
