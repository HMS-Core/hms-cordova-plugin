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

import { asyncExec } from './utils';
import { RequestCodeResult, HasPermissionResult } from './CommonTypes';

export function init(): Promise<void> {
    return run('init');
}

export function createActivityConversionUpdates(activityConversionRequest: ActivityConversionInfo[]): Promise<RequestCodeResult> {
    return run('createActivityConversionUpdates', [activityConversionRequest]);
}

export function deleteActivityConversionUpdates(id: number): Promise<void> {
    return run('deleteActivityConversionUpdates', [id]);
}

export function createActivityIdentificationUpdates(intervalMillis: number): Promise<RequestCodeResult> {
    return run('createActivityIdentificationUpdates', [intervalMillis]);
}

export function deleteActivityIdentificationUpdates(id: number): Promise<void> {
    return run('deleteActivityIdentificationUpdates', [id]);
}

export function requestPermission(): Promise<ActivityPermissionResult> {
    return run('requestPermission');
}

export function hasPermission(): Promise<HasPermissionResult> {
    return run('hasPermission');
}

//
// Helpers
//

function run(funcName: string, args: any[]=[]) {
    return asyncExec('HMSActivityIdentification', funcName, args);
}

export interface ActivityConversionInfo {
    conversionType: number,
    activityType: number
}

export interface ActivityPermissionResult {
    granted: boolean,
    activityRecognition: boolean
}

//
// Constants
//

export enum Activities {
    VEHICLE = 100,
    BIKE = 101,
    FOOT = 102,
    RUNNING = 108,
    STILL = 103,
    TILTING = 105,
    OTHERS = 104,
    WALKING = 107,
}

export enum ActivityConversions {
    ENTER_ACTIVITY_CONVERSION = 0,
    EXIT_ACTIVITY_CONVERSION = 1,
}

export enum Events {
    ACTIVITY_CONVERSION_RESULT = "onActivityConversionResult",
    ACTIVITY_IDENTIFICATION_RESULT = "onActivityIdentificationResult",
}
