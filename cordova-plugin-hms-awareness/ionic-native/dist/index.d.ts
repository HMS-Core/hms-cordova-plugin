/*
    Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.

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
 * @name HMSAwareness
 * @description
 * Cordova Awareness Plugin enables communication between the HMS Core Awareness SDK and Cordova platform. This plugin demonstrates wide-ranging functionality of the HMS Core Awareness SDK.
 */
export declare class HMSAwarenessOriginal extends IonicNativePlugin {
    /**
     * This method enables HMSLogger capability which is used for sending usage analytics of Awareness SDK's methods to improve the service quality.
     * @returns Promise<any>
     */
    enableLogger(): Promise<any>;
    /**
     * This method disables the HMSLogger capability which is used for sending usage analytics of Awareness SDK's methods to improve the service quality.
     * @returns Promise<any>
     */
    disableLogger(): Promise<any>;
}
export declare class AwarenessCaptureOriginal extends IonicNativePlugin {
    /**
     * Obtains the status of an audio device (connected or disconnected).
     * @returns Promise<any>
     */
    getHeadsetStatus(): Promise<HeadsetStatusResponse>;
    /**
     * Obtains the latitude and longitude of the location.
     * @returns Promise<any>
     */
    getLocation(): Promise<LocationResponse>;
    /**
     * Obtains user behavior, such as walking, running, cycling, driving, or staying still.
     * @returns Promise<any>
     */
    getBehaviorStatus(): Promise<BehaviorResponse>;
    /**
     * @param  {BluetoothDevice} bluetoothDevice Indicates bluetooth device.
     * Obtain the status of the phone, for example, whether Bluetooth is connected or not.
     * @returns Promise<any>
     */
    getBluetoothStatus(blueoothDevice: BluetoothDevice): Promise<BluetoothStatusResponse>;
    /**
     * Indicates whether the device has approached, connected to, or disconnected from a registered beacon.
     * @param  {BeaconStatusFilter} beaconStatusRequest Beacon Status.
     * @returns Promise<any>
     */
    getBeaconStatus(beaconStatusRequest: BeaconStatusFilter): Promise<BeaconStatusResponse>;
    /**
     * The phone status awareness capability is supported, including the awareness of the app status.
     * @returns Promise<any>
     */
    getApplicationStatus(): Promise<ApplicationStatusResponse>;
    /**
     * Obtains the illuminance of the environment where the device is located. The unit is lux. The illuminance is the intensity received by the light sensor of the device. When the light sensor is blocked or illuminated by strong light, the obtained illuminance changes accordingly.
     * @returns Promise<any>
     */
    getLightIntensity(): Promise<AmbientLightResponse>;
    /**
     * Obtain the status of the phone, for example, whether the screen is on or off.
     * @returns Promise<any>
     */
    getScreenStatus(): Promise<ScreenStatusResponse>;
    /**
     * Obtains the latitude and longitude of the current location.
     * @returns Promise<any>
     */
    getCurrentLocation(): Promise<LocationResponse>;
    /**
     * Obtain the status of the phone, for example, whether the system is in dark mode.
     * @returns Promise<any>
     */
    getDarkModeStatus(): Promise<DarkmodeStatusResponse>;
    /**
     * Obtain the status of the phone, for example, whether the app is started or closed, whether Wi-Fi is connected or not.
     * @returns Promise<any>
     */
    getWifiStatus(): Promise<WifiStatusResponse>;
    /**
     * Queries the weather information of the device location or a specified location. Weather of the current day (24 hours) and the next seven days (including the current day) can be queried.
     * @returns Promise<any>
     */
    getWeatherByDevice(): Promise<WeatherStatusResponse>;
    /**
     * Queries the weather information of the device location or a specified location. Weather of the current day (24 hours) and the next seven days (including the current day) can be queried.
     * @param  {WeatherPosition} weatherByPositionRequest Weather by Position.
     * @returns Promise<any>
     */
    getWeatherByPosition(weatherByPositionRequest: WeatherPosition): Promise<WeatherStatusResponse>;
    /**
     * Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night.
     * @returns Promise<any>
     */
    getTimeCategories(): Promise<TimeCategoriesResponse>;
    /**
     * Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night.
     * @param  {string} countryCode Time Categories By Contrycode request.
     * @returns Promise<any>
     */
    getTimeCategoriesByCountryCode(countryCode: string): Promise<TimeCategoriesResponse>;
    /**
     * Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night.
     * @returns Promise<any>
     */
    getTimeCategoriesByIP(): Promise<TimeCategoriesResponse>;
    /**
     * Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night.
     * @param  {TimeCategoriesByUserRequest} timeCategoriesByUserRequest Time Categories By User request.
     * @returns Promise<any>
     */
    getTimeCategoriesByUser(timeCategoriesByUserRequest: TimeCategoriesByUserRequest): Promise<TimeCategoriesResponse>;
    /**
     * Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night.
     * @param  {number} futureTimestamp Time Categories By Future request.
     * @returns Promise<any>
     */
    getTimeCategoriesForFuture(futureTimestamp: number): Promise<TimeCategoriesResponse>;
    /**
     * It enables the update window.
     * @param  {boolean} isEnable boolean enableUpdateWindow.
     * @returns Promise<any>
     */
    enableUpdateWindow(isEnable: boolean): Promise<any>;
    /**
 * It enables the update window.
 * @returns Promise<any>
 */
    querySupportingCapabilities(): Promise<any>;
}
export interface WeatherByPositionRequest {
    weatherPosition: WeatherPosition;
}
export interface WeatherPosition {
    mCountry?: string | null;
    mProvince?: string | null;
    mCity: string;
    mDistrict?: string | null;
    mCounty?: string | null;
    mLocale: string;
}
export interface EnableUpdateWindowRequest {
    isEnable: boolean;
}
export interface TimeCategoriesByUserRequest {
    location: Coordinate;
}
export interface Coordinate {
    latitude: number;
    longitude: number;
}
export interface TimeCategoriesByCountryRequest {
    countryCode: string;
}
export interface TimeCategoriesForFutureRequest {
    futureTimestamp: number;
}
export interface BeaconStatusRequest {
    beaconStatusFilter: BeaconStatusFilter;
}
export interface BeaconStatusFilter {
    namespace: string;
    type?: string | null;
    content?: Array<any> | null;
}
export interface HeadsetStatusResponse {
    headsetStatus: number;
}
export interface BluetoothStatusResponse {
    bluetoothStatus: number;
}
export interface WifiStatusResponse {
    wifiStatus: number;
}
export interface ScreenStatusResponse {
    screenStatus: number;
}
export interface DarkmodeStatusResponse {
    darkmodeStatus: number;
}
export interface ApplicationStatusResponse {
    applicationStatus: number;
}
export interface AmbientLightResponse {
    lightIntensity: number;
}
export interface LocationResponse {
    latitude: number;
    longitude: number;
    altitude: number;
    speed: number;
    bearing: number;
    accuracy: number;
    verticalAccuracyMeters?: number | null;
    bearingAccuracyDegrees?: number | null;
    speedAccuracyMetersPerSecond?: number | null;
    time: number;
    fromMockProvider: number;
}
export interface BehaviorResponse {
    elapsedRealtimeMillis: number;
    time: number;
    mostLikelyBehavior: MostLikelyBehavior;
    probableBehavior: Array<MostLikelyBehavior>;
}
export interface MostLikelyBehavior {
    confidence: number;
    type: number;
}
export interface WeatherStatusResponse {
    dailyWeather?: (DailyWeather)[] | null;
    hourlyWeather?: (HourlyWeather)[] | null;
    liveInfo?: (null)[] | null;
    aqi?: Aqi | null;
    weatherSituation: WeatherSituation;
}
export interface DailyWeather {
    aqiValue: number;
    dateTimeStamp: number;
    maxTempC: number;
    maxTempF: number;
    minTempC: number;
    minTempF: number;
    moonPhase: string;
    moonRise: number;
    moonSet: number;
    sunRise: number;
    sunSet: number;
    situationDay: SituationDayOrSituationNight;
    situationNight: SituationDayOrSituationNight;
}
export interface SituationDayOrSituationNight {
    cnWeatherId: number;
    weatherId: number;
    windDir: string;
    windLevel: number;
    windSpeed: number;
}
export interface HourlyWeather {
    cnWeatherId: number;
    dateTimeStamp: number;
    rainProbability: number;
    tempC: number;
    tempF: number;
    weatherId: number;
}
export interface Aqi {
    aqiValue: number;
    Co: number;
    No2: number;
    O3: number;
    Pm10: number;
    Pm25: number;
    So2: string;
}
export interface WeatherSituation {
    city: City;
    situation: Situation;
}
export interface City {
    cityCode: string;
    name: string;
    provinceName: string;
    timeZone: string;
}
export interface Situation {
    cnWeatherId: number;
    humidity: string;
    pressure: number;
    realFeelC: number;
    realFeelF: number;
    temperatureC: number;
    temperatureF: number;
    updateTime: number;
    uvIndex: number;
    weatherId: number;
    windDir: string;
    windSpeed: number;
    windLevel: number;
}
export interface CapabilityResponse {
    deviceSupportCapabilities?: DeviceSupportCapabilities[] | null;
}
export interface DeviceSupportCapabilities {
    capabilityStatus: number;
    capabilityStatusName: string;
}
export interface TimeCategoriesResponse {
    timeCategories?: TimeCategories[] | null;
}
export interface TimeCategories {
    TimeBarrier: number;
    TimeBarrierName: string;
}
export interface BeaconStatusResponse {
    beaconData?: BeaconData[] | null;
}
export interface BeaconData {
    BehaviorBarrier: number;
    BehaviorBarrierName: string;
}
export interface BarrierStatus {
    barrierLabel: string;
    presentStatus: number;
    lastStatus: number;
    lastBarrierUpdateTime: number;
}
export declare enum HeadsetStatus {
    CONNECTED = 1,
    DISCONNECTED = 0
}
export declare enum WifiStatus {
    CONNECTED = 1,
    DISCONNECTED = 4,
    ENABLED = 3,
    DISABLED = -1
}
export declare enum BluetoothStatus {
    CONNECTED = 1,
    DISCONNECTED = 0
}
export declare enum ScreenStatus {
    SCREENON = 1,
    SCREENOFF = 0,
    UNLOCK = 2
}
export declare enum BehaviorBarrierConstant {
    BEHAVIOR_IN_VEHICLE = 0,
    BEHAVIOR_ON_BICYCLE = 1,
    BEHAVIOR_ON_FOOT = 2,
    BEHAVIOR_STILL = 3,
    BEHAVIOR_WALKING = 7,
    BEHAVIOR_RUNNING = 8
}
export declare enum BluetoothDevice {
    DEVICE_CAR = 0
}
export declare enum TimeBarrierConstants {
    SUNRISE_CODE = 0,
    SUNSET_CODE = 1,
    TIME_CATEGORY_MORNING = 1,
    TIME_CATEGORY_AFTERNOON = 2,
    TIME_CATEGORY_EVENING = 3,
    TIME_CATEGORY_NIGHT = 4,
    TIME_CATEGORY_HOLIDAY = 5,
    TIME_CATEGORY_WEEKDAY = 6,
    TIME_CATEGORY_WEEKEND = 7,
    TIME_CATEGORY_NOT_HOLIDAY = 8,
    SUNDAY_CODE = 1,
    MONDAY_CODE = 2,
    TUESDAY_CODE = 3,
    WEDNESDAY_CODE = 4,
    THURSDAY_CODE = 5,
    FRIDAY_CODE = 6,
    SATURDAY_CODE = 7
}
export declare class AwarenessBarrier {
    private cordovaBarrier;
    protected constructor(cordovaBarrier: any);
    subscribe(callback: (data: any) => void): AwarenessBarrier;
    catch(callback: (data: any) => void): AwarenessBarrier;
    run(barrierLabel: string): void;
    runInBackground(barrierLabel: string): Promise<void>;
}
export declare class BarrierManager {
    private constructor();
    static deleteAllBarriers(success: any, error: any): any;
    static deleteBarrierWithLabels(success: any, error: any, params: any): any;
    static unRegisterReceiver(success: any, error: any): any;
    static queryBarriersWithBarrierKeys(success: any, error: any, params: any): any;
    static queryBarriersWithAllBarriers(success: any, error: any): any;
    static stopBackgroundService(): Promise<void>;
    static setBackgroundFile(fileName: string): Promise<void>;
}
export declare class HeadsetBarrier extends AwarenessBarrier {
    static keeping(headsetStatus: number): AwarenessBarrier;
    static connecting(): AwarenessBarrier;
    static disconnecting(): AwarenessBarrier;
}
export declare class AmbientLightBarrier extends AwarenessBarrier {
    static above(v: number): AwarenessBarrier;
    static below(v: number): AwarenessBarrier;
    static range(v1: number, v2: number): AwarenessBarrier;
}
export declare class WifiBarrier extends AwarenessBarrier {
    static connecting(s1?: string, s2?: string): AwarenessBarrier;
    static disabling(): AwarenessBarrier;
    static disconnecting(s1?: string, s2?: string): AwarenessBarrier;
    static enabling(): AwarenessBarrier;
    static keeping(i: number, s1?: string, s2?: string): AwarenessBarrier;
}
export declare class BluetoothBarrier extends AwarenessBarrier {
    static connecting(i: number): AwarenessBarrier;
    static disconnecting(i: number): AwarenessBarrier;
    static keep(i: number, i1: number): AwarenessBarrier;
}
export declare class BehaviorBarrier extends AwarenessBarrier {
    static beginning(...ints: number[]): AwarenessBarrier;
    static ending(...ints: number[]): AwarenessBarrier;
    static keeping(...ints: number[]): AwarenessBarrier;
}
export declare class LocationBarrier extends AwarenessBarrier {
    static enter(v: number, v1: number, v2: number): AwarenessBarrier;
    static exit(v: number, v1: number, v2: number): AwarenessBarrier;
    static stay(v: number, v1: number, v2: number, l: number): AwarenessBarrier;
}
export declare class ScreenBarrier extends AwarenessBarrier {
    static screenOn(): AwarenessBarrier;
    static screenOff(): AwarenessBarrier;
    static screenUnlock(): AwarenessBarrier;
    static keeping(i: number): AwarenessBarrier;
}
export declare class TimeBarrier extends AwarenessBarrier {
    static duringPeriodOfDay(timeZone: string, l: number, l1: number): AwarenessBarrier;
    static duringPeriodOfWeek(i: number, timeZone: string, l: number, l1: number): AwarenessBarrier;
    static duringTimePeriod(l: number, l1: number): AwarenessBarrier;
    static inSunriseOrSunsetPeriod(i: number, l: number, l1: number): AwarenessBarrier;
    static inTimeCategory(i: number): AwarenessBarrier;
}
export declare class BeaconBarrier extends AwarenessBarrier {
    static discover(namespace: string, type?: string | null, content?: string[] | null): AwarenessBarrier;
    static keep(namespace: string, type?: string | null, content?: string[] | null): AwarenessBarrier;
    static missed(namespace: string, type?: string | null, content?: string[] | null): AwarenessBarrier;
}
export declare class CombinationBarrier extends AwarenessBarrier {
    static or(...awareness: AwarenessBarrier[]): AwarenessBarrier;
    static and(...awareness: AwarenessBarrier[]): AwarenessBarrier;
    static not(awareness: AwarenessBarrier): AwarenessBarrier;
}

export declare const HMSAwareness: HMSAwarenessOriginal;
export declare const AwarenessCapture: AwarenessCaptureOriginal;