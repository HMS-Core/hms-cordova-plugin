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

import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name HMSAwareness
 * @description
 * Cordova Awareness Plugin enables communication between the HMS Core Awareness SDK and Cordova platform. This plugin demonstrates wide-ranging functionality of the HMS Core Awareness SDK.
 */
@Plugin({
    pluginName: 'HMSAwareness',
    plugin: 'cordova-plugin-hms-awareness',
    pluginRef: 'HMSAwareness',
    repo: 'https://github.com/HMS-Core/hms-cordova-plugin',
    platforms: ['Android']
})
@Injectable()
export class HMSAwareness extends IonicNativePlugin {

    @Cordova({ otherPromise: true })
    /**
     * It checks the permissions required to use this Kit.
     * @param  {HMSPermission} permission Represents the list in which permission names are kept.
     * @returns Promise<any> 
     */
    hasPermission(permission: HMSPermission): Promise<any> {
        return;
    };

    @Cordova({ otherPromise: true })
    /**
     * Obtains the necessary permissions to use the services.
     * @param  {HMSPermission} permission Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    requestPermission(permission: HMSPermission): Promise<any> {
        return;
    };
    @Cordova({ otherPromise: true })
    /**
     * Obtains the necessary permissions to use the services.
     * @param  {HMSPermission[]} permission Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    requestPermissions(...permission: HMSPermission[]): Promise<any> {
        return;
    };

    @Cordova({ otherPromise: true })
    /**
     * This method enables HMSLogger capability which is used for sending usage analytics of Awareness SDK's methods to improve the service quality.
     * @returns Promise<any>
     */
    enableLogger(): Promise<any> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * This method disables the HMSLogger capability which is used for sending usage analytics of Awareness SDK's methods to improve the service quality.
     * @returns Promise<any>
     */
    disableLogger(): Promise<any> {
        return;
    }
}

@Plugin({
    pluginName: 'HMSAwareness',
    plugin: 'cordova-plugin-hms-awareness', // npm package name, example: cordova-plugin-camera
    pluginRef: 'AwarenessCapture', // the variable reference to call the plugin, example: navigator.geolocation
    platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class AwarenessCapture extends IonicNativePlugin {

    @Cordova({ otherPromise: true })
    /**
     * Obtains the status of an audio device (connected or disconnected).
     * @returns Promise<any> 
     */
    getHeadsetStatus(): Promise<HeadsetStatusResponse> {
        return;
    };
    @Cordova({ otherPromise: true })
    /**
     * Obtains the latitude and longitude of the location.
     * @returns Promise<any> 
     */
    getLocation(): Promise<LocationResponse> {
        return;
    };
    @Cordova({ otherPromise: true })
    /**
     * Obtains user behavior, such as walking, running, cycling, driving, or staying still.
     * @returns Promise<any> 
     */
    getBehaviorStatus(): Promise<BehaviorResponse> {
        return;
    };
    @Cordova({ otherPromise: true })
    /**
     * @param  {BluetoothDevice} blueoothDevice Indicates bluetooth device.
     * Obtain the status of the phone, for example, whether Bluetooth is connected or not.
     * @returns Promise<any> 
     */
    getBluetoothStatus(blueoothDevice: BluetoothDevice): Promise<BluetoothStatusResponse> {
        return;
    };
    @Cordova({ otherPromise: true })
    /**
     * Indicates whether the device has approached, connected to, or disconnected from a registered beacon.
     * @param  {BeaconStatusFilter} beaconStatusRequest Beacon Status.
     * @returns Promise<any>
     */
    getBeaconStatus(beaconStatusRequest: BeaconStatusFilter): Promise<BeaconStatusResponse> {
        return;
    };
    @Cordova({ otherPromise: true })
    /**
     * The phone status awareness capability is supported, including the awareness of the app status.
     * @returns Promise<any> 
     */
    getApplicationStatus(): Promise<ApplicationStatusResponse> {
        return;
    };
    @Cordova({ otherPromise: true })
    /**
     * Obtains the illuminance of the environment where the device is located. The unit is lux. The illuminance is the intensity received by the light sensor of the device. When the light sensor is blocked or illuminated by strong light, the obtained illuminance changes accordingly.
     * @returns Promise<any> 
     */
    getLightIntensity(): Promise<AmbientLightResponse> {
        return;
    };
    @Cordova({ otherPromise: true })
    /**
     * Obtain the status of the phone, for example, whether the screen is on or off.
     * @returns Promise<any> 
     */
    getScreenStatus(): Promise<ScreenStatusResponse> {
        return;
    };
    @Cordova({ otherPromise: true })
    /**
     * Obtains the latitude and longitude of the current location.
     * @returns Promise<any> 
     */
    getCurrentLocation(): Promise<LocationResponse> {
        return;
    };
    @Cordova({ otherPromise: true })
    /**
     * Obtain the status of the phone, for example, whether the system is in dark mode.
     * @returns Promise<any> 
     */
    getDarkModeStatus(): Promise<DarkmodeStatusResponse> {
        return;
    };
    @Cordova({ otherPromise: true })
    /**
     * Obtain the status of the phone, for example, whether the app is started or closed, whether Wi-Fi is connected or not.
     * @returns Promise<any> 
     */
    getWifiStatus(): Promise<WifiStatusResponse> {
        return;
    };
    @Cordova({ otherPromise: true })
    /**
     * Queries the weather information of the device location or a specified location. Weather of the current day (24 hours) and the next seven days (including the current day) can be queried. 
     * @returns Promise<any> 
     */
    getWeatherByDevice(): Promise<WeatherStatusResponse> {
        return;
    };
    @Cordova({ otherPromise: true })
    /**
     * Queries the weather information of the device location or a specified location. Weather of the current day (24 hours) and the next seven days (including the current day) can be queried. 
     * @returns Promise<any> 
     */
    getWeatherByIP(): Promise<WeatherStatusResponse> {
        return;
    };
    @Cordova({ otherPromise: true })
    /**
     * Queries the weather information of the device location or a specified location. Weather of the current day (24 hours) and the next seven days (including the current day) can be queried. 
     * @param  {WeatherPosition} weatherByPositionRequest Weather by Position.
     * @returns Promise<any> 
     */
    getWeatherByPosition(weatherByPositionRequest: WeatherPosition): Promise<WeatherStatusResponse> {
        return;
    };

    @Cordova({ otherPromise: true })
    /**
     * Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night.
     * @returns Promise<any> 
     */
    getTimeCategories(): Promise<TimeCategoriesResponse> {
        return;
    };
    @Cordova({ otherPromise: true })
    /**
     * Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night.
     * @param  {string} countryCode Time Categories By Contrycode request.
     * @returns Promise<any> 
     */
    getTimeCategoriesByCountryCode(countryCode: string): Promise<TimeCategoriesResponse> {
        return;
    };
    @Cordova({ otherPromise: true })
    /**
     * Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night.
     * @returns Promise<any> 
     */
    getTimeCategoriesByIP(): Promise<TimeCategoriesResponse> {
        return;
    };
    @Cordova({ otherPromise: true })
    /**
     * Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night.
     * @param  {TimeCategoriesByUserRequest} timeCategoriesByUserRequest Time Categories By User request.
     * @returns Promise<any> 
     */
    getTimeCategoriesByUser(timeCategoriesByUserRequest: TimeCategoriesByUserRequest): Promise<TimeCategoriesResponse> {
        return;
    };
    @Cordova({ otherPromise: true })
    /**
     * Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night.
     * @param  {number} futureTimestamp Time Categories By Future request.
     * @returns Promise<any> 
     */
    getTimeCategoriesForFuture(futureTimestamp: number): Promise<TimeCategoriesResponse> {
        return;
    };
    @Cordova({ otherPromise: true })
    /**
     * It enables the update window.
     * @param  {boolean} isEnable boolean enableUpdateWindow.
     * @returns Promise<any> 
     */
    enableUpdateWindow(isEnable: boolean): Promise<any> {
        return;
    };
    @Cordova({ otherPromise: true })
    /**
 * It enables the update window.
 * @returns Promise<any> 
 */
    querySupportingCapabilities(): Promise<any> {
        return;
    };
}
// AwarenessCapture Interfaces //

export interface WeatherByPositionRequest {
    weatherPosition: WeatherPosition;
}
export interface WeatherPosition {
    mCountry?: string | null,
    mProvince?: string | null,
    mCity: string,
    mDistrict?: string | null,
    mCounty?: string | null,
    mLocale: string,
}
export interface EnableUpdateWindowRequest {
    isEnable: boolean;
}

export interface TimeCategoriesByUserRequest {
    location: Coordinate;
}
export interface Coordinate {
    latitude: number;
    longitude: number
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

// AwarenessBarrier Interfaces //

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


// AwarenessBarrier Return 

export interface BarrierStatus {
    barrierLabel: string;
    presentStatus: number;
    lastStatus: number;
    lastBarrierUpdateTime: number;
}

//Enum value
export enum HeadsetStatus {
    CONNECTED = 1,
    DISCONNECTED = 0,
}
export enum WifiStatus {
    CONNECTED = 1,
    DISCONNECTED = 4,
    ENABLED = 3,
    DISABLED = -1,
}
export enum BluetoothStatus {
    CONNECTED = 1,
    DISCONNECTED = 0,
}
export enum ScreenStatus {
    SCREENON = 1,
    SCREENOFF = 0,
    UNLOCK = 2,
}
export enum BehaviorBarrierConstant {
    BEHAVIOR_IN_VEHICLE = 0,
    BEHAVIOR_ON_BICYCLE = 1,
    BEHAVIOR_ON_FOOT = 2,
    BEHAVIOR_STILL = 3,
    BEHAVIOR_WALKING = 7,
    BEHAVIOR_RUNNING = 8,
}
export enum BluetoothDevice {
    DEVICE_CAR = 0
}
export enum TimeBarrierConstants {
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
    SATURDAY_CODE = 7,
}
export enum HMSPermission {
    PERMISSION_ACCESS_FINE_LOCATION = "android.permission.ACCESS_FINE_LOCATION",
    PERMISSION_HUAWEI_ACTIVITY_RECOGNITION = "com.huawei.hms.permission.ACTIVITY_RECOGNITION",
    PERMISSION_ACTIVITY_RECOGNITION = "android.permission.ACTIVITY_RECOGNITION",
    PERMISSION_BLUETOOTH = "android.permission.BLUETOOTH",
    PERMISSION_CHANGE_WIFI_STATE = "android.permission.CHANGE_WIFI_STATE",
    PERMISSION_ACCESS_COARSE_LOCATION = "android.permission.ACCESS_COARSE_LOCATION",
    PERMISSION_ACCESS_BACKGROUND_LOCATION = "android.permission.ACCESS_BACKGROUND_LOCATION"
}


export class AwarenessBarrier {
    private cordovaBarrier: any;
    protected constructor(cordovaBarrier: any) {
        this.cordovaBarrier = cordovaBarrier;
    }
    subscribe(callback: (data: any) => void): AwarenessBarrier {
        this.cordovaBarrier.subscribe(callback);
        return this;
    }
    catch(callback: (data: any) => void): AwarenessBarrier {
        this.cordovaBarrier.catch(callback);
        return this;
    }
    run(barrierLabel: string): void {
        this.cordovaBarrier.run(barrierLabel);
    }
    runInBackground(barrierLabel: string): Promise<void> {
        return this.cordovaBarrier.runInBackground(barrierLabel);
    }

}

export class BarrierManager {
    private constructor() {

    }

    static deleteAllBarriers(success: any, error: any): any {
        (<any>window).AwarenessBarrier.deleteAllBarriers(success, error);
    }
    static deleteBarrierWithLabels(success: any, error: any, params: any): any {
        (<any>window).AwarenessBarrier.deleteBarrierWithLabels(success, error, params);
    }
    static unRegisterReceiver(success: any, error: any): any {
        (<any>window).AwarenessBarrier.unRegisterReceiver(success, error);
    }
    static queryBarriersWithBarrierKeys(success: any, error: any, params: any): any {
        (<any>window).AwarenessBarrier.queryBarriersWithBarrierKeys(success, error, params);
    }
    static queryBarriersWithAllBarriers(success: any, error: any): any {
        (<any>window).AwarenessBarrier.queryBarriersWithAllBarriers(success, error);
    }
    static stopBackgroundService(): Promise<void> {
        return (<any>window).AwarenessBarrier.stopBackgroundService();
    }
    static setBackgroundFile(fileName: string): Promise<void> {
        return (<any>window).AwarenessBarrier.setBackgroundFile(fileName);
    }
}

export class HeadsetBarrier extends AwarenessBarrier {
    static keeping(headsetStatus: number): AwarenessBarrier {
        const barrier = new (<any>window).AwarenessBarrier.HeadsetBarrier(HeadsetBarrier.name, "keeping", [headsetStatus]);
        return new AwarenessBarrier(barrier);
    }
    static connecting(): AwarenessBarrier {
        const barrier = new (<any>window).AwarenessBarrier.HeadsetBarrier(HeadsetBarrier.name, "connecting", []);
        return new AwarenessBarrier(barrier);
    }
    static disconnecting(): AwarenessBarrier {
        const barrier = new (<any>window).AwarenessBarrier.HeadsetBarrier(HeadsetBarrier.name, "disconnecting", []);
        return new AwarenessBarrier(barrier);
    }
}


export class AmbientLightBarrier extends AwarenessBarrier {
    static above(v: number): AwarenessBarrier {
        const capsule = new (<any>window).AwarenessBarrier.AmbientLightBarrier(AmbientLightBarrier.name, "above", [v]);
        return new AwarenessBarrier(capsule);
    }
    static below(v: number): AwarenessBarrier {
        const capsule = new (<any>window).AwarenessBarrier.AmbientLightBarrier(AmbientLightBarrier.name, "below", [v]);
        return new AwarenessBarrier(capsule);
    }
    static range(v1: number, v2: number): AwarenessBarrier {
        const capsule = new (<any>window).AwarenessBarrier.AmbientLightBarrier(AmbientLightBarrier.name, "range", [v1, v2]);
        return new AwarenessBarrier(capsule);
    }
}

export class WifiBarrier extends AwarenessBarrier {
    static connecting(s1?: string, s2?: string): AwarenessBarrier {
        const capsule = new (<any>window).AwarenessBarrier.WifiBarrier(WifiBarrier.name, "connecting", [s1, s2]);
        return new AwarenessBarrier(capsule);
    }
    static disabling(): AwarenessBarrier {
        const capsule = new (<any>window).AwarenessBarrier.WifiBarrier(WifiBarrier.name, "disabling", []);
        return new AwarenessBarrier(capsule);
    }
    static disconnecting(s1?: string, s2?: string): AwarenessBarrier {
        let arr: any[] = [];
        if (s1 != null) arr = [s1, s2];
        const capsule = new (<any>window).AwarenessBarrier.WifiBarrier(WifiBarrier.name, "disconnecting", arr);
        return new AwarenessBarrier(capsule);
    }
    static enabling(): AwarenessBarrier {
        const capsule = new (<any>window).AwarenessBarrier.WifiBarrier(WifiBarrier.name, "enabling", []);
        return new AwarenessBarrier(capsule);
    }
    static keeping(i: number, s1?: string, s2?: string): AwarenessBarrier {
        let arr: any[] = [i];
        if (s1 != null) {
            arr.push(s1);
            arr.push(s2);
        }
        const capsule = new (<any>window).AwarenessBarrier.WifiBarrier(WifiBarrier.name, "keeping", arr);
        return new AwarenessBarrier(capsule);
    }
}

export class BluetoothBarrier extends AwarenessBarrier {
    static connecting(i: number): AwarenessBarrier {
        const capsule = new (<any>window).AwarenessBarrier.BluetoothBarrier(BluetoothBarrier.name, "connecting", [i]);
        return new AwarenessBarrier(capsule);
    }
    static disconnecting(i: number): AwarenessBarrier {
        const capsule = new (<any>window).AwarenessBarrier.BluetoothBarrier(BluetoothBarrier.name, "disconnecting", [i]);
        return new AwarenessBarrier(capsule);
    }
    static keep(i: number, i1: number): AwarenessBarrier {
        const capsule = new (<any>window).AwarenessBarrier.BluetoothBarrier(BluetoothBarrier.name, "keep", [i, i1]);
        return new AwarenessBarrier(capsule);
    }
}

export class BehaviorBarrier extends AwarenessBarrier {

    static beginning(...ints: number[]): AwarenessBarrier {
        const capsule = new (<any>window).AwarenessBarrier.BehaviorBarrier(BehaviorBarrier.name, "beginning", [ints]);
        return new AwarenessBarrier(capsule);
    }
    static ending(...ints: number[]): AwarenessBarrier {
        const capsule = new (<any>window).AwarenessBarrier.BehaviorBarrier(BehaviorBarrier.name, "ending", [ints]);
        return new AwarenessBarrier(capsule);
    }
    static keeping(...ints: number[]): AwarenessBarrier {
        const capsule = new (<any>window).AwarenessBarrier.BehaviorBarrier(BehaviorBarrier.name, "keeping", [ints]);
        return new AwarenessBarrier(capsule);
    }
}

export class LocationBarrier extends AwarenessBarrier {

    static enter(v: number, v1: number, v2: number): AwarenessBarrier {
        const capsule = new (<any>window).AwarenessBarrier.BehaviorBarrier(LocationBarrier.name, "enter", [v, v1, v2]);
        return new AwarenessBarrier(capsule);
    }
    static exit(v: number, v1: number, v2: number): AwarenessBarrier {
        const capsule = new (<any>window).AwarenessBarrier.BehaviorBarrier(LocationBarrier.name, "exit", [v, v1, v2]);
        return new AwarenessBarrier(capsule);
    }
    static stay(v: number, v1: number, v2: number, l: number): AwarenessBarrier {
        const capsule = new (<any>window).AwarenessBarrier.BehaviorBarrier(LocationBarrier.name, "stay", [v, v1, v2, l]);
        return new AwarenessBarrier(capsule);
    }
}

export class ScreenBarrier extends AwarenessBarrier {

    static screenOn(): AwarenessBarrier {
        const capsule = new (<any>window).AwarenessBarrier.BehaviorBarrier(ScreenBarrier.name, "screenOn", []);
        return new AwarenessBarrier(capsule);
    }
    static screenOff(): AwarenessBarrier {
        const capsule = new (<any>window).AwarenessBarrier.BehaviorBarrier(ScreenBarrier.name, "screenOff", []);
        return new AwarenessBarrier(capsule);
    }
    static screenUnlock(): AwarenessBarrier {
        const capsule = new (<any>window).AwarenessBarrier.BehaviorBarrier(ScreenBarrier.name, "screenUnlock", []);
        return new AwarenessBarrier(capsule);
    }
    static keeping(i: number): AwarenessBarrier {
        const capsule = new (<any>window).AwarenessBarrier.BehaviorBarrier(ScreenBarrier.name, "keeping", [i]);
        return new AwarenessBarrier(capsule);
    }
}

export class TimeBarrier extends AwarenessBarrier {

    static duringPeriodOfDay(timeZone: string, l: number, l1: number): AwarenessBarrier {
        const capsule = new (<any>window).AwarenessBarrier.TimeBarrier(TimeBarrier.name, "duringPeriodOfDay", [timeZone, l, l1]);
        return new AwarenessBarrier(capsule);
    }
    static duringPeriodOfWeek(i: number, timeZone: string, l: number, l1: number): AwarenessBarrier {
        const capsule = new (<any>window).AwarenessBarrier.TimeBarrier(TimeBarrier.name, "duringPeriodOfWeek", [i, timeZone, l, l1]);
        return new AwarenessBarrier(capsule);
    }
    static duringTimePeriod(l: number, l1: number): AwarenessBarrier {
        const capsule = new (<any>window).AwarenessBarrier.TimeBarrier(TimeBarrier.name, "duringTimePeriod", [l, l1]);
        return new AwarenessBarrier(capsule);
    }
    static inSunriseOrSunsetPeriod(i: number, l: number, l1: number): AwarenessBarrier {
        const capsule = new (<any>window).AwarenessBarrier.TimeBarrier(TimeBarrier.name, "inSunriseOrSunsetPeriod", [i, l, l1]);
        return new AwarenessBarrier(capsule);
    }
    static inTimeCategory(i: number): AwarenessBarrier {
        const capsule = new (<any>window).AwarenessBarrier.TimeBarrier(TimeBarrier.name, "inTimeCategory", [i]);
        return new AwarenessBarrier(capsule);
    }
}

export class BeaconBarrier extends AwarenessBarrier {

    static discover(namespace: string, type?: string | null, content?: string[] | null): AwarenessBarrier {
        const capsule = new (<any>window).AwarenessBarrier.BeaconBarrier(BeaconBarrier.name, "discover", [namespace, type, content]);
        return new AwarenessBarrier(capsule);
    }
    static keep(namespace: string, type?: string | null, content?: string[] | null): AwarenessBarrier {
        const capsule = new (<any>window).AwarenessBarrier.BeaconBarrier(BeaconBarrier.name, "keep", [namespace, type, content]);
        return new AwarenessBarrier(capsule);
    }
    static missed(namespace: string, type?: string | null, content?: string[] | null): AwarenessBarrier {
        const capsule = new (<any>window).AwarenessBarrier.BeaconBarrier(BeaconBarrier.name, "missed", [namespace, type, content]);
        return new AwarenessBarrier(capsule);
    }
}

export class CombinationBarrier extends AwarenessBarrier {

    static or(...awareness: AwarenessBarrier[]): AwarenessBarrier {
        const barrier = new (<any>window).CombinationBarrier("or", awareness);
        barrier.currentBarriers = awareness;
        barrier.combMethod = "or";
        return new AwarenessBarrier(barrier);
    }
    static and(...awareness: AwarenessBarrier[]): AwarenessBarrier {
        const barrier = new (<any>window).CombinationBarrier("and", awareness);
        barrier.currentBarriers = awareness;
        barrier.combMethod = "and";
        return new AwarenessBarrier(barrier);
    }

    static not(awareness: AwarenessBarrier): AwarenessBarrier {
        const barrier = new (<any>window).CombinationBarrier("not", [awareness]);
        barrier.currentBarriers = [awareness];
        barrier.combMethod = "not";
        return new AwarenessBarrier(barrier);
    }

}
