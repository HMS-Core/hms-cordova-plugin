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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombinationBarrier = exports.setBackgroundFile = exports.stopBackgroundService = exports.queryBarriersWithAllBarriers = exports.queryBarriersWithBarrierKeys = exports.unRegisterReceiver = exports.deleteBarrierWithLabels = exports.deleteAllBarriers = exports.BeaconBarrier = exports.TimeBarrier = exports.ScreenBarrier = exports.LocationBarrier = exports.BehaviorBarrier = exports.BluetoothBarrier = exports.WifiBarrier = exports.AmbientLightBarrier = exports.HeadsetBarrier = exports.AwarenessBarrier = void 0;
const cordova_1 = require("cordova");
const util_1 = require("./util");
var interfaces_1 = require("./interfaces");
Object.defineProperty(exports, "HeadsetStatus", { enumerable: true, get: function () { return interfaces_1.HeadsetStatus; } });
Object.defineProperty(exports, "BluetoothStatus", { enumerable: true, get: function () { return interfaces_1.BluetoothStatus; } });
Object.defineProperty(exports, "WifiStatus", { enumerable: true, get: function () { return interfaces_1.WifiStatus; } });
Object.defineProperty(exports, "ScreenStatus", { enumerable: true, get: function () { return interfaces_1.ScreenStatus; } });
Object.defineProperty(exports, "BehaviorBarrierConstant", { enumerable: true, get: function () { return interfaces_1.BehaviorBarrierConstant; } });
Object.defineProperty(exports, "BluetoothDevice", { enumerable: true, get: function () { return interfaces_1.BluetoothDevice; } });
Object.defineProperty(exports, "TimeBarrierConstants", { enumerable: true, get: function () { return interfaces_1.TimeBarrierConstants; } });
const AwarenessBarrierModule = "AwarenessBarriers";
const HMSAwarenessClass = "HMSAwareness";
class AwarenessBarrier {
    constructor(type, method, parameters) {
        this.successCallback = () => { };
        this.errorCallback = () => { };
        this.type = type;
        this.lastTriggeredMethod = method;
        this.parameters = parameters;
        this.methodName = `add${this.type}${this.lastTriggeredMethod[0].toUpperCase() + this.lastTriggeredMethod.substr(1)}`;
    }
    subscribe(callback) {
        this.successCallback = callback;
        return this;
    }
    catch(callback) {
        this.errorCallback = callback;
        return this;
    }
    runInBackground(barrierLabel) {
        // convert parameters to json object to not broke java code
        let json = { barrierLabel: barrierLabel };
        let paramArray = [this.methodName, json];
        this.parameters.forEach(val => paramArray.push(val));
        return util_1.asyncExec(HMSAwarenessClass, AwarenessBarrierModule, paramArray);
    }
    run(barrierLabel) {
        const methodName = `add${this.type}${this.lastTriggeredMethod[0].toUpperCase() + this.lastTriggeredMethod.substr(1)}`;
        let paramArray = [methodName];
        paramArray.push(barrierLabel);
        this.parameters.forEach(val => {
            paramArray.push(val);
        });
        cordova_1.exec(this.successCallback, this.errorCallback, HMSAwarenessClass, AwarenessBarrierModule, paramArray);
    }
}
exports.AwarenessBarrier = AwarenessBarrier;
class HeadsetBarrier extends AwarenessBarrier {
    static keeping(headsetStatus) {
        return new HeadsetBarrier(HeadsetBarrier.name, "keeping", [headsetStatus]);
    }
    static connecting() {
        return new HeadsetBarrier(HeadsetBarrier.name, "connecting", []);
    }
    static disconnecting() {
        return new HeadsetBarrier(HeadsetBarrier.name, "disconnecting", []);
    }
}
exports.HeadsetBarrier = HeadsetBarrier;
class AmbientLightBarrier extends AwarenessBarrier {
    static above(v) {
        return new AmbientLightBarrier(AmbientLightBarrier.name, "above", [v]);
    }
    static below(v) {
        return new AmbientLightBarrier(AmbientLightBarrier.name, "below", [v]);
    }
    static range(v1, v2) {
        return new AmbientLightBarrier(AmbientLightBarrier.name, "range", [v1, v2]);
    }
}
exports.AmbientLightBarrier = AmbientLightBarrier;
class WifiBarrier extends AwarenessBarrier {
    static connecting(s1, s2) {
        return new WifiBarrier(WifiBarrier.name, "connecting", [s1, s2]);
    }
    static disabling() {
        return new WifiBarrier(WifiBarrier.name, "disabling", []);
    }
    static disconnecting(s1, s2) {
        let arr = [];
        if (s1 != null) {
            arr.push(s1);
            arr.push(s2);
        }
        return new WifiBarrier(WifiBarrier.name, "disconnecting", arr);
    }
    static enabling() {
        return new WifiBarrier(WifiBarrier.name, "enabling", []);
    }
    static keeping(i, s1, s2) {
        let arr = [i];
        if (s1 != null) {
            arr.push(s1);
            arr.push(s2);
        }
        return new WifiBarrier(WifiBarrier.name, "keeping", arr);
    }
}
exports.WifiBarrier = WifiBarrier;
class BluetoothBarrier extends AwarenessBarrier {
    static connecting(i) {
        return new BluetoothBarrier(BluetoothBarrier.name, "connecting", [i]);
    }
    static disconnecting(i) {
        return new BluetoothBarrier(BluetoothBarrier.name, "disconnecting", [i]);
    }
    static keep(i, i1) {
        return new BluetoothBarrier(BluetoothBarrier.name, "keep", [i, i1]);
    }
}
exports.BluetoothBarrier = BluetoothBarrier;
class BehaviorBarrier extends AwarenessBarrier {
    static beginning(...ints) {
        return new BehaviorBarrier(BehaviorBarrier.name, "beginning", [ints]);
    }
    static ending(...ints) {
        return new BehaviorBarrier(BehaviorBarrier.name, "ending", [ints]);
    }
    static keeping(...ints) {
        return new BehaviorBarrier(BehaviorBarrier.name, "keeping", [ints]);
    }
}
exports.BehaviorBarrier = BehaviorBarrier;
BehaviorBarrier.BEHAVIOR_IN_VEHICLE = 0;
BehaviorBarrier.BEHAVIOR_ON_BICYCLE = 1;
BehaviorBarrier.BEHAVIOR_ON_FOOT = 2;
BehaviorBarrier.BEHAVIOR_RUNNING = 8;
BehaviorBarrier.BEHAVIOR_STILL = 3;
BehaviorBarrier.BEHAVIOR_WALKING = 7;
BehaviorBarrier.BEHAVIOR_UNKNOWN = 4;
class LocationBarrier extends AwarenessBarrier {
    static enter(v, v1, v2) {
        return new LocationBarrier(LocationBarrier.name, "enter", [v, v1, v2]);
    }
    static exit(v, v1, v2) {
        return new LocationBarrier(LocationBarrier.name, "exit", [v, v1, v2]);
    }
    static stay(v, v1, v2, l) {
        return new LocationBarrier(LocationBarrier.name, "stay", [v, v1, v2, l]);
    }
}
exports.LocationBarrier = LocationBarrier;
class ScreenBarrier extends AwarenessBarrier {
    static screenOn() {
        return new ScreenBarrier(ScreenBarrier.name, "screenOn", []);
    }
    static screenOff() {
        return new ScreenBarrier(ScreenBarrier.name, "screenOff", []);
    }
    static screenUnlock() {
        return new ScreenBarrier(ScreenBarrier.name, "screenUnlock", []);
    }
    static keeping(i) {
        return new ScreenBarrier(ScreenBarrier.name, "keeping", [i]);
    }
}
exports.ScreenBarrier = ScreenBarrier;
class TimeBarrier extends AwarenessBarrier {
    static duringPeriodOfDay(timeZone, l, l1) {
        return new TimeBarrier(TimeBarrier.name, "duringPeriodOfDay", [timeZone, l, l1]);
    }
    static duringPeriodOfWeek(i, timeZone, l, l1) {
        return new TimeBarrier(TimeBarrier.name, "duringPeriodOfWeek", [i, timeZone, l, l1]);
    }
    static duringTimePeriod(l, l1) {
        return new TimeBarrier(TimeBarrier.name, "duringTimePeriod", [l, l1]);
    }
    static inSunriseOrSunsetPeriod(i, l, l1) {
        return new TimeBarrier(TimeBarrier.name, "inSunriseOrSunsetPeriod", [i, l, l1]);
    }
    static inTimeCategory(i) {
        return new TimeBarrier(TimeBarrier.name, "inTimeCategory", [i]);
    }
}
exports.TimeBarrier = TimeBarrier;
TimeBarrier.FRIDAY_CODE = 6;
TimeBarrier.MONDAY_CODE = 2;
TimeBarrier.SATURDAY_CODE = 7;
TimeBarrier.SUNDAY_CODE = 1;
TimeBarrier.THURSDAY_CODE = 5;
TimeBarrier.WEDNESDAY_CODE = 4;
TimeBarrier.SUNRISE_CODE = 0;
TimeBarrier.SUNSET_CODE = 1;
TimeBarrier.TIME_CATEGORY_AFTERNOON = 2;
TimeBarrier.TIME_CATEGORY_EVENING = 3;
TimeBarrier.TIME_CATEGORY_HOLIDAY = 5;
TimeBarrier.TIME_CATEGORY_MORNING = 1;
TimeBarrier.TIME_CATEGORY_NIGHT = 4;
TimeBarrier.TIME_CATEGORY_NOT_HOLIDAY = 8;
TimeBarrier.TIME_CATEGORY_WEEKDAY = 6;
TimeBarrier.TIME_CATEGORY_WEEKEND = 7;
class BeaconBarrier extends AwarenessBarrier {
    static discover(...filters) {
        return new BeaconBarrier(BeaconBarrier.name, "discover", filters);
    }
    static keep(...filters) {
        return new BeaconBarrier(BeaconBarrier.name, "keep", filters);
    }
    static missed(...filters) {
        return new BeaconBarrier(BeaconBarrier.name, "missed", filters);
    }
}
exports.BeaconBarrier = BeaconBarrier;
function deleteAllBarriers(success, error) {
    cordova_1.exec(success, error, HMSAwarenessClass, AwarenessBarrierModule, ["deleteAllBarriers"]);
}
exports.deleteAllBarriers = deleteAllBarriers;
;
function deleteBarrierWithLabels(success, error, params) {
    cordova_1.exec(success, error, HMSAwarenessClass, AwarenessBarrierModule, ["deleteBarrierWithLabels", params]);
}
exports.deleteBarrierWithLabels = deleteBarrierWithLabels;
;
function unRegisterReceiver(success, error) {
    cordova_1.exec(success, error, HMSAwarenessClass, AwarenessBarrierModule, ["unRegisterReceiver"]);
}
exports.unRegisterReceiver = unRegisterReceiver;
;
function queryBarriersWithBarrierKeys(success, error, params) {
    cordova_1.exec(success, error, HMSAwarenessClass, AwarenessBarrierModule, ["queryBarriersWithBarrierKeys", params]);
}
exports.queryBarriersWithBarrierKeys = queryBarriersWithBarrierKeys;
;
function queryBarriersWithAllBarriers(success, error) {
    cordova_1.exec(success, error, HMSAwarenessClass, AwarenessBarrierModule, ["queryBarriersWithAllBarriers"]);
}
exports.queryBarriersWithAllBarriers = queryBarriersWithAllBarriers;
;
function stopBackgroundService() {
    return util_1.asyncExec(HMSAwarenessClass, AwarenessBarrierModule, ['stopBackgroundService']);
}
exports.stopBackgroundService = stopBackgroundService;
;
function setBackgroundFile(filename) {
    return util_1.asyncExec(HMSAwarenessClass, AwarenessBarrierModule, ['setBackgroundFile', filename]);
}
exports.setBackgroundFile = setBackgroundFile;
;
class CombinationBarrier extends AwarenessBarrier {
    constructor(combMethod, currentBarriers) {
        super(CombinationBarrier.name, "CombinationBarrier", []);
        this.combMethod = combMethod;
        this.currentBarriers = currentBarriers;
    }
    static or(...awareness) {
        return new CombinationBarrier("or", awareness);
    }
    static and(...awareness) {
        return new CombinationBarrier("and", awareness);
    }
    static not(awareness) {
        return new CombinationBarrier("not", [awareness]);
    }
    fillBarriersRecursively(n, barriers) {
        barriers.forEach(barrier => {
            if (barrier instanceof CombinationBarrier) {
                const child = new node(barrier.combMethod);
                const childrenArr = this.fillBarriersRecursively(child, barrier.currentBarriers);
                n.children.push(childrenArr);
            }
            else {
                n.children.push({ "method": barrier.methodName, "params": barrier.parameters });
            }
        });
        return n;
    }
    run(barrierLabel) {
        const methodName = `add${this.type}`;
        let root = new node(this.combMethod);
        this.fillBarriersRecursively(root, this.currentBarriers);
        console.log(JSON.stringify(root));
        cordova_1.exec(this.successCallback, this.errorCallback, HMSAwarenessClass, AwarenessBarrierModule, [methodName, root, barrierLabel]);
    }
}
exports.CombinationBarrier = CombinationBarrier;
class node {
    constructor(type) {
        this.type = type;
        this.children = [];
    }
}
//# sourceMappingURL=AwarenessBarrier.js.map