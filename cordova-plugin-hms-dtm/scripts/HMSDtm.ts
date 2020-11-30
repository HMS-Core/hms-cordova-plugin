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

export function onEvent(eventName:string,bundleObject:BundleObject) {
    return asyncExec("HMSDtm","onEvent",[eventName,bundleObject]);
}

export function asyncExec(className:string, funcName:string, args: any[] = []) {
    return new Promise((resolve, reject) => {
        cordova.exec(resolve, reject, className, funcName, args);
    });
}

export function setCustomVariable(customVariableObject:CustomVariableObject):Promise<any>{
    return asyncExec("HMSDtm","setCustomVariable",[customVariableObject])
}

export async function onCustomTag(callback: (val: any) => void): Promise<any> {
    (<any>window)["CUSTOM_TAG_EVENT"] = callback;
}

export function enableLogger(): Promise<any>{
    return asyncExec("HMSDtm","enableLogger");
}

export function disableLogger(): Promise<any>{
    return asyncExec("HMSDtm","disableLogger");
}

interface BundleObject {
    [key:string]:string | number | boolean;
  }

interface CustomVariableObject{
    varName:string,
    value:string
  }