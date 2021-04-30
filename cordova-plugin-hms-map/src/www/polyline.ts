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

import {LatLng, PatternItem, JointType, Color, BitmapDescriptor} from "./interfaces";
import {asyncExec} from "./utils";

export interface Polyline {
    getColor(): Promise<Color>;
    getEndCap(): Promise<Cap>;
    getStartCap(): Promise<Cap>;
    getId(): string;
    getJointType(): Promise<JointType>;
    getPattern(): Promise<PatternItem[]>;
    getPoints(): Promise<LatLng[]>;
    getTag(): Promise<any>;
    getWidth(): Promise<number>;
    getZIndex(): Promise<number>;
    isClickable(): Promise<boolean>;
    isGeodesic(): Promise<boolean>;
    isVisible(): Promise<boolean>;

    remove(): Promise<void>;

    setClickable(clickable: boolean): Promise<void>;
    setColor(color: Color): Promise<void>;
    setStartCap(startCap: Cap): Promise<void>;
    setEndCap(endCap: Cap): Promise<void>;
    setGeodesic(geodesic: boolean): Promise<void>;
    setJointType(jointType: JointType): Promise<void>;
    setPattern(pattern: PatternItem[]): Promise<void>;
    setPoints(points: LatLng[]): Promise<void>;
    setTag(tag: any): Promise<void>;
    setVisible(visible: boolean): Promise<void>;
    setWidth(width: number): Promise<void>;
    setZIndex(zIndex: number): Promise<void>;
}

export class PolylineImpl implements Polyline {

    private readonly mapDivId: string;
    private readonly mapCapsuleId: number;
    private readonly id: string;

    constructor(mapDivId: string, mapCapsuleId: number, componentId: string) {
        this.mapDivId = mapDivId;
        this.mapCapsuleId = mapCapsuleId;
        this.id = componentId;
    }

    getColor(): Promise<Color> {
        return this.getComponentOptions('getColor');
    }

    getEndCap(): Promise<Cap> {
        return this.parseCap(this.getComponentOptions('getEndCap'));
    }

    getStartCap(): Promise<Cap> {
        return this.parseCap(this.getComponentOptions('getStartCap'));
    }

    getId(): string {
        return this.id;
    }

    getJointType(): Promise<JointType> {
        return this.getComponentOptions('getJointType');
    }

    getPattern(): Promise<PatternItem[]> {
        return this.getComponentOptions('getPattern');
    }

    getPoints(): Promise<LatLng[]> {
        return this.getComponentOptions('getPoints');
    }

    getTag(): Promise<any> {
        return this.getComponentOptions('getTag');
    }

    getWidth(): Promise<number> {
        return this.getComponentOptions('getWidth');
    }

    getZIndex(): Promise<number> {
        return this.getComponentOptions('getZIndex');
    }

    isClickable(): Promise<boolean> {
        return this.getComponentOptions('isClickable');
    }

    isGeodesic(): Promise<boolean> {
        return this.getComponentOptions('isGeodesic');
    }

    isVisible(): Promise<boolean> {
        return this.getComponentOptions('isVisible');
    }

    remove(): Promise<void> {
        return asyncExec("HMSMap", "removeComponent", [this.mapDivId, this.id]);
    }

    setClickable(clickable: boolean): Promise<void> {
        return this.setComponentOptions("setClickable", {"clickable": clickable});
    }

    setColor(color: Color): Promise<void> {
        return this.setComponentOptions("setColor", {"color": color});
    }

    setStartCap(startCap: Cap): Promise<void> {
        return this.setCap(startCap, 'setStartCap');
    }

    setEndCap(endCap: Cap): Promise<void> {
        return this.setCap(endCap, 'setEndCap');
    }

    setGeodesic(geodesic: boolean): Promise<void> {
        return this.setComponentOptions("setGeodesic", {"geodesic": geodesic});
    }

    setJointType(jointType: JointType): Promise<void> {
        return this.setComponentOptions("setJointType", {"jointType": jointType});
    }

    setPattern(pattern: PatternItem[]): Promise<void> {
        return this.setComponentOptions("setPattern", {"pattern": pattern});
    }

    setPoints(points: LatLng[]): Promise<void> {
        return this.setComponentOptions("setPoints", {"points": points});
    }

    setTag(tag: any): Promise<void> {
        return this.setComponentOptions("setTag", {"tag": tag});
    }

    setVisible(visible: boolean): Promise<void> {
        return this.setComponentOptions("setVisible", {"visible": visible});
    }

    setWidth(width: number): Promise<void> {
        return this.setComponentOptions("setWidth", {"width": width});
    }

    setZIndex(zIndex: number): Promise<void> {
        return this.setComponentOptions("setZIndex", {"zIndex": zIndex});
    }

    private setComponentOptions(func: string, params: any): Promise<any> {
        return asyncExec('HMSMap', 'componentOptions', [this.mapDivId, this.id, 'set', func, params]);
    }

    private async getComponentOptions(func: string): Promise<any> {
        const result = await asyncExec("HMSMap", "componentOptions", [this.mapDivId, this.id, 'get', func, {}]);
        return result.value;
    }

    // TODO: Don't forget to parse cap when get method triggered.
    private async parseCap(promise: Promise<any>): Promise<Cap> {
        const value = await promise;
        if (value.type === Cap.TYPE_BUTT_CAP) return new ButtCap();
        else if (value.type === Cap.TYPE_SQUARE_CAP) return new SquareCap();
        else if (value.type === Cap.TYPE_ROUND_CAP) return new RoundCap();
        return new CustomCap(value.bitmapDescriptor, value.refWidth);
    }

    private setCap(cap: Cap, methodName: string): Promise<void> {
        let props: any = {};
        props['type'] = cap.getType();
        if (cap.getType() === Cap.TYPE_CUSTOM_CAP) { // Let's say custom cap
            props['bitmapDescriptor'] = (<CustomCap>cap).getBitmapDescriptor();
            if ((<CustomCap>cap).getRefWidth() !== null) props['refWidth'] = (<CustomCap>cap).getRefWidth();
        }
        return this.setComponentOptions(methodName, {'cap': props});
    }
}

export class Cap {
    static readonly TYPE_BUTT_CAP = 0;
    static readonly TYPE_SQUARE_CAP = 1;
    static readonly TYPE_ROUND_CAP = 2;
    static readonly TYPE_CUSTOM_CAP = 3;
    protected type: number = -1;
    protected refWidth?: number = -1;
    protected bitmapDescriptor?: BitmapDescriptor = {};

    getType(): number {
        return this.type;
    }
}

export class ButtCap extends Cap {
    constructor() {
        super();
        this.type = 0;
    }
}

export class RoundCap extends Cap {
    constructor() {
        super()
        this.type = 2;
    }
}

export class SquareCap extends Cap {
    constructor() {
        super();
        this.type = 1;
    }
}

export class CustomCap extends Cap {

    constructor(bitmapDescriptor: BitmapDescriptor, refWidth?: number) {
        super();
        this.type = 3;
        this.bitmapDescriptor = bitmapDescriptor;
        this.refWidth = refWidth;
    }

    getRefWidth(): number {
        return this.refWidth == null?-1:this.refWidth;
    }

    getBitmapDescriptor(): BitmapDescriptor {
        return this.bitmapDescriptor==undefined?{}:this.bitmapDescriptor;
    }
}
