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
interface ApiMap {
    'HuaweiIap.API': number;
    'HuaweiID.API': number;
    'HuaweiGame.API': number;
    'HuaweiPay.API': number;
    'HuaweiSns.API': number;
    'HuaweiOpenDevice.API': number;
    'HuaweiPPSkit.API': number;
    'HuaweiPush.API': number;
}
export declare function getApiMap(): Promise<ApiMap>;
export declare function getServicesVersionCode(): Promise<number>;
export declare function getErrorString(errorCode: number): Promise<string>;
export declare function isHuaweiMobileServicesAvailable(minApkVersion?: number): Promise<number>;
export declare function isHuaweiMobileNoticeAvailable(): Promise<number>;
export declare function isUserResolvableError(errorCode: number): Promise<boolean>;
export declare function resolveError(errorCode: number, requestCode: number): Promise<void>;
export declare function setServicesVersionCode(servicesVersionCode: number): Promise<void>;
export declare function showErrorDialogFragment(errorCode: number, requestCode: number, cancelListener?: () => void): Promise<boolean>;
export declare function showErrorNotification(errorCode: number): Promise<void>;
export {};
