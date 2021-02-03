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
import { CameraPosition, CameraUpdate, ComputeDistanceResult, HuaweiMap, HuaweiMapOptions, LatLng, LatLngBounds } from './interfaces';
export { Polyline, ButtCap, CustomCap, RoundCap, SquareCap, Cap } from './polyline';
export { Polygon } from './polygon';
export { Circle } from './circle';
export { TileOverlay } from './tileOverlay';
export { GroundOverlay } from './groundOverlay';
export { Marker } from './marker';
export { AnimationSet, RotateAnimation, AlphaAnimation, ScaleAnimation, TranslateAnimation, InterpolatorType, ErrorCodes, CameraMoveStartedReason, Color, MapType, MapEvent, JointType, Hue, PatternItemType, HuaweiMap, CameraUpdate, Tile, URLTile, RepetitiveTile, TileType } from './interfaces';
export declare const maps: Map<number, HuaweiMap>;
export declare function sync(mapId: number, mapDiv: string, components: any): void;
export declare function getMap(divId: string, huaweiMapOptions: HuaweiMapOptions): Promise<HuaweiMap>;
export declare function showMap(divId: string): Promise<HuaweiMap>;
export declare function hasPermission(): Promise<boolean>;
export declare function requestPermission(): Promise<void>;
export declare function computeDistanceBetween(from: LatLng, to: LatLng): Promise<ComputeDistanceResult>;
export declare function setApiKey(apiKey: string): Promise<void>;
export declare function disableLogger(): Promise<void>;
export declare function enableLogger(): Promise<void>;
export declare class CameraUpdateFactory {
    private constructor();
    static newCameraPosition(cameraPosition: CameraPosition): CameraUpdate;
    static newLatLng(latLng: LatLng): CameraUpdate;
    static newLatLngBounds(latLngBounds: LatLngBounds, padding: number): CameraUpdate;
    static newLatLngZoom(latLng: LatLng, zoom: number): CameraUpdate;
    static scrollBy(xPixel: number, yPixel: number): CameraUpdate;
    static zoomBy(amount: number): CameraUpdate;
    static zoomIn(): CameraUpdate;
    static zoomOut(): CameraUpdate;
    static zoomTo(zoom: number): CameraUpdate;
    private static constructCameraUpdateImpl;
}
export declare class MapStyleOptions {
    private readonly resourceId;
    private constructor();
    static loadRawResourceStyle(resourceId: number): MapStyleOptions;
    getResourceId(): number;
}
