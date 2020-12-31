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
import * as HMSAwarenessCapture from './interfaces';
export { BluetoothDevice } from './interfaces';
import { asyncExec } from './util'
let HMSAwarenessClass = 'HMSAwareness';


export function getHeadsetStatus(): Promise<HMSAwarenessCapture.HeadsetStatusResponse> {
    return asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getHeadsetStatus']);
};
export function getLocation(): Promise<HMSAwarenessCapture.LocationResponse> {
    return asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getLocation']);
};
export function getBehaviorStatus(): Promise<HMSAwarenessCapture.BehaviorResponse> {
    return asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getBehaviorStatus']);
};
export function getBluetoothStatus(bluetoothDevice: HMSAwarenessCapture.BluetoothDevice): Promise<HMSAwarenessCapture.BluetoothStatusResponse> {
    return asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getBluetoothStatus', bluetoothDevice]);
};
export function getBeaconStatus(params: HMSAwarenessCapture.BeaconStatusRequest): Promise<HMSAwarenessCapture.BeaconStatusResponse> {
    return asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getBeaconStatus', params]);
};
export function getApplicationStatus(): Promise<HMSAwarenessCapture.ApplicationStatusResponse> {
    return asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getApplicationStatus']);
};
export function getLightIntensity(): Promise<HMSAwarenessCapture.AmbientLightResponse> {
    return asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getLightIntensity']);
};
export function getScreenStatus(): Promise<HMSAwarenessCapture.ScreenStatusResponse> {
    return asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getScreenStatus']);
};
export function getCurrentLocation(): Promise<HMSAwarenessCapture.LocationResponse> {
    return asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getCurrentLocation']);
};
export function getDarkModeStatus(): Promise<HMSAwarenessCapture.DarkmodeStatusResponse> {
    return asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getDarkModeStatus']);
};
export function getWifiStatus(): Promise<HMSAwarenessCapture.WifiStatusResponse> {
    return asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getWifiStatus']);
};
export function getWeatherByDevice(): Promise<HMSAwarenessCapture.WeatherStatusResponse> {
    return asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getWeatherByDevice']);
};
export function getWeatherByPosition(params: HMSAwarenessCapture.WeatherPosition): Promise<HMSAwarenessCapture.WeatherStatusResponse> {
    return asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getWeatherByPosition', params]);
};
export function getTimeCategories(): Promise<HMSAwarenessCapture.TimeCategoriesResponse> {
    return asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getTimeCategories']);
};
export function getTimeCategoriesByCountryCode(countryCode: string): Promise<HMSAwarenessCapture.TimeCategoriesResponse> {
    return asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getTimeCategoriesByCountryCode', countryCode]);
};
export function getTimeCategoriesByIP(): Promise<HMSAwarenessCapture.TimeCategoriesResponse> {
    return asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getTimeCategoriesByIP']);
};
export function getTimeCategoriesByUser(params: HMSAwarenessCapture.TimeCategoriesByUserRequest): Promise<HMSAwarenessCapture.TimeCategoriesResponse> {
    return asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getTimeCategoriesByUser', params]);
};
export function getTimeCategoriesForFuture(params: HMSAwarenessCapture.TimeCategoriesForFutureRequest): Promise<HMSAwarenessCapture.TimeCategoriesResponse> {
    return asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['getTimeCategoriesForFuture', params]);
};
export function enableUpdateWindow(params: HMSAwarenessCapture.EnableUpdateWindowRequest): Promise<any> {
    return asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['enableUpdateWindow', params]);
};
export function querySupportingCapabilities(): Promise<any> {
    return asyncExec(HMSAwarenessClass, 'AwarenessCapture', ['querySupportingCapabilities']);
};
