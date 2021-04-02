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
import {asyncExec} from './utils';

interface ApiMap {
    'HuaweiIap.API': number,
    'HuaweiID.API': number,
    'HuaweiGame.API': number,
    'HuaweiPay.API': number,
    'HuaweiSns.API': number,
    'HuaweiOpenDevice.API': number,
    'HuaweiPPSkit.API': number,
    'HuaweiPush.API': number
}

export function getApiMap(): Promise<ApiMap> {
    return asyncExec('HMSAvailability', 'HMSAvailabilityImpl', ['getApiMap']);
}

export function getServicesVersionCode(): Promise<number> {
    return asyncExec('HMSAvailability', 'HMSAvailabilityImpl', ['getServicesVersionCode']);
}

export function getErrorString(errorCode: number): Promise<string> {
    return asyncExec('HMSAvailability', 'HMSAvailabilityImpl', ['getErrorString', errorCode]);
}

export function isHuaweiMobileServicesAvailable(minApkVersion?: number): Promise<number> {
    if (minApkVersion) {
        return asyncExec('HMSAvailability', 'HMSAvailabilityImpl', ['isHuaweiMobileServicesAvailable', minApkVersion]);
    } else {
        return asyncExec('HMSAvailability', 'HMSAvailabilityImpl', ['isHuaweiMobileServicesAvailable']);
    }
}

export function isHuaweiMobileNoticeAvailable(): Promise<number> {
    return asyncExec('HMSAvailability', 'HMSAvailabilityImpl', ['isHuaweiMobileNoticeAvailable']);
}

export function isUserResolvableError(errorCode: number): Promise<boolean> {
    return asyncExec('HMSAvailability', 'HMSAvailabilityImpl', ['isUserResolvableError', errorCode]);
}

export function resolveError(errorCode: number, requestCode: number): Promise<void> {
    return asyncExec('HMSAvailability', 'HMSAvailabilityImpl', ['resolveError', errorCode, requestCode]);
}

export function setServicesVersionCode(servicesVersionCode: number): Promise<void> {
    return asyncExec('HMSAvailability', 'HMSAvailabilityImpl', ['setServicesVersionCode', servicesVersionCode]);
}

export function showErrorDialogFragment(errorCode: number, requestCode: number, cancelListener?: () => void): Promise<boolean> {
    if (cancelListener) {
        window.subscribeHMSEvent("onCancel", cancelListener);
        return asyncExec('HMSAvailability', 'HMSAvailabilityImpl', ['showErrorDialogFragment', errorCode, requestCode, cancelListener]);
    } else {
        return asyncExec('HMSAvailability', 'HMSAvailabilityImpl', ['showErrorDialogFragment', errorCode, requestCode]);
    }
}

export function showErrorNotification(errorCode: number): Promise<void> {
    return asyncExec('HMSAvailability', 'HMSAvailabilityImpl', ['showErrorNotification', errorCode]);
}


