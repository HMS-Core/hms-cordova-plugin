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
export declare function getHeadsetStatus(): Promise<HMSAwarenessCapture.HeadsetStatusResponse>;
export declare function getLocation(): Promise<HMSAwarenessCapture.LocationResponse>;
export declare function getBehaviorStatus(): Promise<HMSAwarenessCapture.BehaviorResponse>;
export declare function getBluetoothStatus(bluetoothDevice: HMSAwarenessCapture.BluetoothDevice): Promise<HMSAwarenessCapture.BluetoothStatusResponse>;
export declare function getBeaconStatus(params: HMSAwarenessCapture.BeaconStatusRequest): Promise<HMSAwarenessCapture.BeaconStatusResponse>;
export declare function getApplicationStatus(): Promise<HMSAwarenessCapture.ApplicationStatusResponse>;
export declare function getLightIntensity(): Promise<HMSAwarenessCapture.AmbientLightResponse>;
export declare function getScreenStatus(): Promise<HMSAwarenessCapture.ScreenStatusResponse>;
export declare function getCurrentLocation(): Promise<HMSAwarenessCapture.LocationResponse>;
export declare function getDarkModeStatus(): Promise<HMSAwarenessCapture.DarkmodeStatusResponse>;
export declare function getWifiStatus(): Promise<HMSAwarenessCapture.WifiStatusResponse>;
export declare function getWeatherByDevice(): Promise<HMSAwarenessCapture.WeatherStatusResponse>;
export declare function getWeatherByPosition(params: HMSAwarenessCapture.WeatherPosition): Promise<HMSAwarenessCapture.WeatherStatusResponse>;
export declare function getTimeCategories(): Promise<HMSAwarenessCapture.TimeCategoriesResponse>;
export declare function getTimeCategoriesByCountryCode(countryCode: string): Promise<HMSAwarenessCapture.TimeCategoriesResponse>;
export declare function getTimeCategoriesByIP(): Promise<HMSAwarenessCapture.TimeCategoriesResponse>;
export declare function getTimeCategoriesByUser(params: HMSAwarenessCapture.TimeCategoriesByUserRequest): Promise<HMSAwarenessCapture.TimeCategoriesResponse>;
export declare function getTimeCategoriesForFuture(params: HMSAwarenessCapture.TimeCategoriesForFutureRequest): Promise<HMSAwarenessCapture.TimeCategoriesResponse>;
export declare function enableUpdateWindow(params: HMSAwarenessCapture.EnableUpdateWindowRequest): Promise<any>;
export declare function querySupportingCapabilities(): Promise<any>;
