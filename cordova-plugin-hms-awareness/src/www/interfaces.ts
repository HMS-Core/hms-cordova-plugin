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
    PERMISSION_ACCESS_BACKGROUND_LOCATION = "android.permission.ACCESS_BACKGROUND_LOCATION",
}
