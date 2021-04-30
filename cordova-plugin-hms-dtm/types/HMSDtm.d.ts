/*
    Copyright 2020-2021. Huawei Technologies Co., Ltd. All rights reserved.

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
export declare function onEvent(eventName: string, bundleObject: BundleObject): Promise<unknown>;
export declare function asyncExec(className: string, funcName: string, args?: any[]): Promise<unknown>;
export declare function setCustomVariable(customVariableObject: CustomVariableObject): Promise<any>;
export declare function onCustomTag(callback: (val: any) => void): Promise<any>;
export declare function disableLogger(): Promise<any>;
export declare function enableLogger(): Promise<any>;
interface BundleObject {
    [key: string]: string | number | boolean;
}
interface CustomVariableObject {
    varName: string;
    value: string;
}
export {};
