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

export { HeadsetStatus, BluetoothStatus, WifiStatus, ScreenStatus, BehaviorBarrierConstant, BluetoothDevice, TimeBarrierConstants } from './interfaces';
export declare class AwarenessBarrier {
    protected type: string;
    private lastTriggeredMethod;
    readonly parameters: any[];
    readonly methodName: string;
    protected successCallback: () => void;
    protected errorCallback: () => void;
    protected constructor(type: string, method: string, parameters: any[]);
    subscribe(callback: () => void): AwarenessBarrier;
    catch(callback: () => void): AwarenessBarrier;
    runInBackground(barrierLabel: string): Promise<void>;
    run(barrierLabel: string): void;
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
    static readonly BEHAVIOR_IN_VEHICLE = 0;
    static readonly BEHAVIOR_ON_BICYCLE = 1;
    static readonly BEHAVIOR_ON_FOOT = 2;
    static readonly BEHAVIOR_RUNNING = 8;
    static readonly BEHAVIOR_STILL = 3;
    static readonly BEHAVIOR_WALKING = 7;
    static readonly BEHAVIOR_UNKNOWN = 4;
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
    static readonly FRIDAY_CODE = 6;
    static readonly MONDAY_CODE = 2;
    static readonly SATURDAY_CODE = 7;
    static readonly SUNDAY_CODE = 1;
    static readonly THURSDAY_CODE = 5;
    static readonly WEDNESDAY_CODE = 4;
    static readonly SUNRISE_CODE = 0;
    static readonly SUNSET_CODE = 1;
    static readonly TIME_CATEGORY_AFTERNOON = 2;
    static readonly TIME_CATEGORY_EVENING = 3;
    static readonly TIME_CATEGORY_HOLIDAY = 5;
    static readonly TIME_CATEGORY_MORNING = 1;
    static readonly TIME_CATEGORY_NIGHT = 4;
    static readonly TIME_CATEGORY_NOT_HOLIDAY = 8;
    static readonly TIME_CATEGORY_WEEKDAY = 6;
    static readonly TIME_CATEGORY_WEEKEND = 7;
    static duringPeriodOfDay(timeZone: string, l: number, l1: number): AwarenessBarrier;
    static duringPeriodOfWeek(i: number, timeZone: string, l: number, l1: number): AwarenessBarrier;
    static duringTimePeriod(l: number, l1: number): AwarenessBarrier;
    static inSunriseOrSunsetPeriod(i: number, l: number, l1: number): AwarenessBarrier;
    static inTimeCategory(i: number): AwarenessBarrier;
}
export interface Filter {
    namespace: string;
    type?: string | null;
    content?: string[] | null;
}
export declare class BeaconBarrier extends AwarenessBarrier {
    static discover(...filters: Filter[]): AwarenessBarrier;
    static keep(...filters: Filter[]): AwarenessBarrier;
    static missed(...filters: Filter[]): AwarenessBarrier;
}
export declare function deleteAllBarriers(success: any, error: any): any;
export declare function deleteBarrierWithLabels(success: any, error: any, params: any): any;
export declare function unRegisterReceiver(success: any, error: any): any;
export declare function queryBarriersWithBarrierKeys(success: any, error: any, params: any): any;
export declare function queryBarriersWithAllBarriers(success: any, error: any): any;
export declare function stopBackgroundService(): Promise<void>;
export declare function setBackgroundFile(filename: string): Promise<void>;
export declare class CombinationBarrier extends AwarenessBarrier {
    readonly currentBarriers: AwarenessBarrier[];
    readonly combMethod: "or" | "and" | "not";
    private constructor();
    static or(...awareness: AwarenessBarrier[]): CombinationBarrier;
    static and(...awareness: AwarenessBarrier[]): CombinationBarrier;
    static not(awareness: AwarenessBarrier): CombinationBarrier;
    private fillBarriersRecursively;
    run(barrierLabel: string): void;
}
