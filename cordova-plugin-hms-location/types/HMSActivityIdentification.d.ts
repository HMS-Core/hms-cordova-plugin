/**
 * Copyright 2020 Huawei Technologies Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { RequestCodeResult, HasPermissionResult } from './CommonTypes';
export declare function init(): Promise<void>;
export declare function createActivityConversionUpdates(activityConversionRequest: ActivityConversionInfo[]): Promise<RequestCodeResult>;
export declare function deleteActivityConversionUpdates(id: number): Promise<void>;
export declare function createActivityIdentificationUpdates(intervalMillis: number): Promise<RequestCodeResult>;
export declare function deleteActivityIdentificationUpdates(id: number): Promise<void>;
export declare function requestPermission(): Promise<ActivityPermissionResult>;
export declare function hasPermission(): Promise<HasPermissionResult>;
export interface ActivityConversionInfo {
    conversionType: number;
    activityType: number;
}
export interface ActivityPermissionResult {
    granted: boolean;
    activityRecognition: boolean;
}
export declare enum Activities {
    VEHICLE = 100,
    BIKE = 101,
    FOOT = 102,
    RUNNING = 108,
    STILL = 103,
    TILTING = 105,
    OTHERS = 104,
    WALKING = 107
}
export declare enum ActivityConversions {
    ENTER_ACTIVITY_CONVERSION = 0,
    EXIT_ACTIVITY_CONVERSION = 1
}
export declare enum Events {
    ACTIVITY_CONVERSION_RESULT = "onActivityConversionResult",
    ACTIVITY_IDENTIFICATION_RESULT = "onActivityIdentificationResult"
}
