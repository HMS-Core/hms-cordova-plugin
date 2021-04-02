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
import { IonicNativePlugin } from '@ionic-native/core';
export declare class HMSAvailabilityOriginal extends IonicNativePlugin {
    /**
     * Checks whether HMS Core is installed.
     * @return {Promise<number>}
     */
    isHuaweiMobileServicesAvailable(minApkVersion?: number): Promise<number>;
    isHuaweiMobileNoticeAvailable(): Promise<number>;
    getApiMap(): Promise<ApiMap>;
    getServicesVersionCode(): Promise<number>;
    setServicesVersionCode(servicesVersionCode: number): Promise<void>;
    isUserResolvableError(errorCode: number): Promise<boolean>;
    getErrorString(errorCode: number): Promise<string>;
    resolveError(errorCode: number, requestCode: number): Promise<void>;
    showErrorDialogFragment(errorCode: number, requestCode: number, cancelListener?: () => void): Promise<boolean>;
    showErrorNotification(errorCode: number): Promise<void>;
}
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
export {};

export declare const HMSAvailability: HMSAvailabilityOriginal;
