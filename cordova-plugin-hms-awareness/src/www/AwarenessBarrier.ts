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
import { exec } from 'cordova';
import { asyncExec } from './util';
export { HeadsetStatus, BluetoothStatus, WifiStatus, ScreenStatus, BehaviorBarrierConstant, BluetoothDevice, TimeBarrierConstants } from './interfaces';

const AwarenessBarrierModule = "AwarenessBarriers";
const HMSAwarenessClass = "HMSAwareness";


export class AwarenessBarrier {
    protected type: string;
    private lastTriggeredMethod: string;
    public readonly parameters: any[];
    public readonly methodName: string;
    protected successCallback: () => void = () => { };
    protected errorCallback: () => void = () => { };
    protected constructor(type: string, method: string, parameters: any[]) {
        this.type = type;
        this.lastTriggeredMethod = method;
        this.parameters = parameters;
        this.methodName = `add${this.type}${this.lastTriggeredMethod[0].toUpperCase() + this.lastTriggeredMethod.substr(1)}`;
    }

    subscribe(callback: () => void): AwarenessBarrier {
        this.successCallback = callback;
        return this;
    }
    catch(callback: () => void): AwarenessBarrier {
        this.errorCallback = callback;
        return this;
    }

    runInBackground(barrierLabel: string): Promise<void> {
        // convert parameters to json object to not broke java code
        let json = {barrierLabel: barrierLabel};
        let paramArray = [this.methodName, json];
        this.parameters.forEach(val => paramArray.push(val));
        return asyncExec(HMSAwarenessClass, AwarenessBarrierModule, paramArray);
    }

    run(barrierLabel: string): void {
        const methodName = `add${this.type}${this.lastTriggeredMethod[0].toUpperCase() + this.lastTriggeredMethod.substr(1)}`;
        let paramArray = [methodName];
        paramArray.push(barrierLabel);
        this.parameters.forEach(val => {
            paramArray.push(val);
        });
        exec(this.successCallback, this.errorCallback, HMSAwarenessClass, AwarenessBarrierModule, paramArray)
    }

}

export class HeadsetBarrier extends AwarenessBarrier {
    static keeping(headsetStatus: number): AwarenessBarrier {
        return new HeadsetBarrier(HeadsetBarrier.name, "keeping", [headsetStatus]);
    }
    static connecting(): AwarenessBarrier {
        return new HeadsetBarrier(HeadsetBarrier.name, "connecting", []);
    }
    static disconnecting(): AwarenessBarrier {
        return new HeadsetBarrier(HeadsetBarrier.name, "disconnecting", []);
    }
}

export class AmbientLightBarrier extends AwarenessBarrier {
    static above(v: number): AwarenessBarrier {
        return new AmbientLightBarrier(AmbientLightBarrier.name, "above", [v]);
    }
    static below(v: number): AwarenessBarrier {
        return new AmbientLightBarrier(AmbientLightBarrier.name, "below", [v]);
    }
    static range(v1: number, v2: number): AwarenessBarrier {
        return new AmbientLightBarrier(AmbientLightBarrier.name, "range", [v1, v2]);
    }
}

export class WifiBarrier extends AwarenessBarrier {
    static connecting(s1?: string, s2?: string): AwarenessBarrier {
        return new WifiBarrier(WifiBarrier.name, "connecting", [s1, s2]);
    }
    static disabling(): AwarenessBarrier {
        return new WifiBarrier(WifiBarrier.name, "disabling", []);
    }
    static disconnecting(s1?: string, s2?: string): AwarenessBarrier {
        let arr: any[] = [];
        if (s1 != null) {
            arr.push(s1);
            arr.push(s2);
        }
        return new WifiBarrier(WifiBarrier.name, "disconnecting", arr);
    }
    static enabling(): AwarenessBarrier {
        return new WifiBarrier(WifiBarrier.name, "enabling", []);
    }
    static keeping(i: number, s1?: string, s2?: string): AwarenessBarrier {
        let arr: any[] = [i];
        if (s1 != null) {
            arr.push(s1);
            arr.push(s2);
        }
        return new WifiBarrier(WifiBarrier.name, "keeping", arr);
    }
}

export class BluetoothBarrier extends AwarenessBarrier {
    static connecting(i: number): AwarenessBarrier {
        return new BluetoothBarrier(BluetoothBarrier.name, "connecting", [i]);
    }
    static disconnecting(i: number): AwarenessBarrier {
        return new BluetoothBarrier(BluetoothBarrier.name, "disconnecting", [i]);
    }
    static keep(i: number, i1: number): AwarenessBarrier {
        return new BluetoothBarrier(BluetoothBarrier.name, "keep", [i, i1]);
    }
}

export class BehaviorBarrier extends AwarenessBarrier {
    public static readonly BEHAVIOR_IN_VEHICLE = 0;
    public static readonly BEHAVIOR_ON_BICYCLE = 1;
    public static readonly BEHAVIOR_ON_FOOT = 2;
    public static readonly BEHAVIOR_RUNNING = 8;
    public static readonly BEHAVIOR_STILL = 3;
    public static readonly BEHAVIOR_WALKING = 7;
    public static readonly BEHAVIOR_UNKNOWN = 4;

    static beginning(...ints: number[]): AwarenessBarrier {
        return new BehaviorBarrier(BehaviorBarrier.name, "beginning", [ints]);
    }
    static ending(...ints: number[]): AwarenessBarrier {
        return new BehaviorBarrier(BehaviorBarrier.name, "ending", [ints]);
    }
    static keeping(...ints: number[]): AwarenessBarrier {
        return new BehaviorBarrier(BehaviorBarrier.name, "keeping", [ints]);
    }
}

export class LocationBarrier extends AwarenessBarrier {

    static enter(v: number, v1: number, v2: number): AwarenessBarrier {
        return new LocationBarrier(LocationBarrier.name, "enter", [v, v1, v2]);
    }
    static exit(v: number, v1: number, v2: number): AwarenessBarrier {
        return new LocationBarrier(LocationBarrier.name, "exit", [v, v1, v2]);
    }
    static stay(v: number, v1: number, v2: number, l: number): AwarenessBarrier {
        return new LocationBarrier(LocationBarrier.name, "stay", [v, v1, v2, l]);
    }
}

export class ScreenBarrier extends AwarenessBarrier {

    static screenOn(): AwarenessBarrier {
        return new ScreenBarrier(ScreenBarrier.name, "screenOn", []);
    }
    static screenOff(): AwarenessBarrier {
        return new ScreenBarrier(ScreenBarrier.name, "screenOff", []);
    }
    static screenUnlock(): AwarenessBarrier {
        return new ScreenBarrier(ScreenBarrier.name, "screenUnlock", []);
    }
    static keeping(i: number): AwarenessBarrier {
        return new ScreenBarrier(ScreenBarrier.name, "keeping", [i]);
    }
}

export class TimeBarrier extends AwarenessBarrier {
    public static readonly FRIDAY_CODE = 6;
    public static readonly MONDAY_CODE = 2;
    public static readonly SATURDAY_CODE = 7;
    public static readonly SUNDAY_CODE = 1;
    public static readonly THURSDAY_CODE = 5;
    public static readonly WEDNESDAY_CODE = 4;
    public static readonly SUNRISE_CODE = 0;
    public static readonly SUNSET_CODE = 1;
    public static readonly TIME_CATEGORY_AFTERNOON = 2;
    public static readonly TIME_CATEGORY_EVENING = 3;
    public static readonly TIME_CATEGORY_HOLIDAY = 5;
    public static readonly TIME_CATEGORY_MORNING = 1;
    public static readonly TIME_CATEGORY_NIGHT = 4;
    public static readonly TIME_CATEGORY_NOT_HOLIDAY = 8;
    public static readonly TIME_CATEGORY_WEEKDAY = 6;
    public static readonly TIME_CATEGORY_WEEKEND = 7;

    static duringPeriodOfDay(timeZone: string, l: number, l1: number): AwarenessBarrier {
        return new TimeBarrier(TimeBarrier.name, "duringPeriodOfDay", [timeZone, l, l1]);
    }
    static duringPeriodOfWeek(i: number, timeZone: string, l: number, l1: number): AwarenessBarrier {
        return new TimeBarrier(TimeBarrier.name, "duringPeriodOfWeek", [i, timeZone, l, l1]);
    }
    static duringTimePeriod(l: number, l1: number): AwarenessBarrier {
        return new TimeBarrier(TimeBarrier.name, "duringTimePeriod", [l, l1]);
    }
    static inSunriseOrSunsetPeriod(i: number, l: number, l1: number): AwarenessBarrier {
        return new TimeBarrier(TimeBarrier.name, "inSunriseOrSunsetPeriod", [i, l, l1]);
    }
    static inTimeCategory(i: number): AwarenessBarrier {
        return new TimeBarrier(TimeBarrier.name, "inTimeCategory", [i]);
    }
}

export interface Filter {
    namespace: string;
    type?: string | null;
    content?: string[] | null;
}
export class BeaconBarrier extends AwarenessBarrier {

    static discover(...filters: Filter[]): AwarenessBarrier {
        return new BeaconBarrier(BeaconBarrier.name, "discover", filters);
    }
    static keep(...filters: Filter[]): AwarenessBarrier {
        return new BeaconBarrier(BeaconBarrier.name, "keep", filters);
    }
    static missed(...filters: Filter[]): AwarenessBarrier {
        return new BeaconBarrier(BeaconBarrier.name, "missed", filters);
    }
}


export function deleteAllBarriers(success: any, error: any): any {
    exec(success, error, HMSAwarenessClass, AwarenessBarrierModule, ["deleteAllBarriers"]);
};
export function deleteBarrierWithLabels(success: any, error: any, params: any): any {
    exec(success, error, HMSAwarenessClass, AwarenessBarrierModule, ["deleteBarrierWithLabels", params]);
};
export function unRegisterReceiver(success: any, error: any): any {
    exec(success, error, HMSAwarenessClass, AwarenessBarrierModule, ["unRegisterReceiver"]);
};
export function queryBarriersWithBarrierKeys(success: any, error: any, params: any): any {
    exec(success, error, HMSAwarenessClass, AwarenessBarrierModule, ["queryBarriersWithBarrierKeys", params]);
};
export function queryBarriersWithAllBarriers(success: any, error: any): any {
    exec(success, error, HMSAwarenessClass, AwarenessBarrierModule, ["queryBarriersWithAllBarriers"]);
};
export function stopBackgroundService(): Promise<void> {
    return asyncExec(HMSAwarenessClass, AwarenessBarrierModule, ['stopBackgroundService']);
};
export function setBackgroundFile(filename: string): Promise<void> {
    return asyncExec(HMSAwarenessClass, AwarenessBarrierModule, ['setBackgroundFile', filename]);
};




export class CombinationBarrier extends AwarenessBarrier {

    public readonly currentBarriers: AwarenessBarrier[];
    public readonly combMethod: "or" | "and" | "not";
    private constructor(combMethod: "or" | "and" | "not", currentBarriers: AwarenessBarrier[]) {
        super(CombinationBarrier.name, "CombinationBarrier", []);
        this.combMethod = combMethod;
        this.currentBarriers = currentBarriers;
    }

    static or(...awareness: AwarenessBarrier[]): CombinationBarrier {
        return new CombinationBarrier("or", awareness);
    }
    static and(...awareness: AwarenessBarrier[]): CombinationBarrier {
        return new CombinationBarrier("and", awareness);
    }
    static not(awareness: AwarenessBarrier): CombinationBarrier {
        return new CombinationBarrier("not", [awareness]);
    }

    private fillBarriersRecursively(n: node, barriers: AwarenessBarrier[]): any {
        barriers.forEach(barrier => {
            if (barrier instanceof CombinationBarrier) {
                const child = new node(barrier.combMethod);
                const childrenArr = this.fillBarriersRecursively(child, barrier.currentBarriers);
                n.children.push(childrenArr);
            } else {
                n.children.push({ "method": barrier.methodName, "params": barrier.parameters });
            }
        });
        return n;
    }

    run(barrierLabel: string): void {

        const methodName = `add${this.type}`;
        let root = new node(this.combMethod);
        this.fillBarriersRecursively(root, this.currentBarriers);
        console.log(JSON.stringify(root));
        exec(this.successCallback, this.errorCallback, HMSAwarenessClass, AwarenessBarrierModule, [methodName, root, barrierLabel]);
    }

}

class node {
    type: string;
    children: any[];

    constructor(type: string) {
        this.type = type;
        this.children = [];
    }
}