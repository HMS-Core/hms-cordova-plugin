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
import { LatLng, PatternItem, JointType, Color, BitmapDescriptor } from "./interfaces";
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
export declare class PolylineImpl implements Polyline {
    private readonly mapDivId;
    private readonly mapCapsuleId;
    private readonly id;
    constructor(mapDivId: string, mapCapsuleId: number, componentId: string);
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
    private setComponentOptions;
    private getComponentOptions;
    private parseCap;
    private setCap;
}
export declare class Cap {
    static readonly TYPE_BUTT_CAP = 0;
    static readonly TYPE_SQUARE_CAP = 1;
    static readonly TYPE_ROUND_CAP = 2;
    static readonly TYPE_CUSTOM_CAP = 3;
    protected type: number;
    protected refWidth?: number;
    protected bitmapDescriptor?: BitmapDescriptor;
    getType(): number;
}
export declare class ButtCap extends Cap {
    constructor();
}
export declare class RoundCap extends Cap {
    constructor();
}
export declare class SquareCap extends Cap {
    constructor();
}
export declare class CustomCap extends Cap {
    constructor(bitmapDescriptor: BitmapDescriptor, refWidth?: number);
    getRefWidth(): number;
    getBitmapDescriptor(): BitmapDescriptor;
}
