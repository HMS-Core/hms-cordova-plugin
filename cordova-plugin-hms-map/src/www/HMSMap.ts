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

import { asyncExec, Rect, initalPropsOf } from './utils';
import {
    CameraPosition,
    CameraUpdate,
    CancelableCallback,
    CircleOptions,
    ComputeDistanceResult,
    ErrorCodes,
    GroundOverlayOptions,
    HuaweiMap,
    HuaweiMapOptions,
    InfoWindowAdapter,
    LatLng,
    LatLngBounds,
    LocationSource,
    MapEvent,
    MapType,
    MarkerOptions,
    Point,
    PolygonOptions,
    PolylineOptions,
    Projection,
    RepetitiveTile,
    SnapshotResult,
    TileOverlayOptions,
    TileType,
    UiSettings,
    URLTile,
    VisibleRegion
} from './interfaces';
import { Circle, CircleImpl } from './circle';
import { Marker, MarkerImpl } from './marker';
import { GroundOverlay, GroundOverlayImpl } from './groundOverlay';
import { TileOverlay, TileOverlayImpl } from './tileOverlay';
import { Polygon, PolygonImpl } from './polygon';
import { Polyline, PolylineImpl } from './polyline';

export { Polyline, ButtCap, CustomCap, RoundCap, SquareCap, Cap } from './polyline';
export { Polygon } from './polygon';
export { Circle } from './circle';
export { TileOverlay } from './tileOverlay';
export { GroundOverlay } from './groundOverlay';
export { Marker } from './marker';
export {
    AnimationSet,
    RotateAnimation,
    AlphaAnimation,
    ScaleAnimation,
    TranslateAnimation,
    InterpolatorType,
    ErrorCodes,
    CameraMoveStartedReason,
    Color,
    MapType,
    MapEvent,
    JointType,
    Hue,
    PatternItemType,
    HuaweiMap,
    CameraUpdate,
    Tile,
    URLTile,
    RepetitiveTile,
    TileType
} from './interfaces';

export const maps: Map<number, HuaweiMap> = new Map<number, HuaweiMapImpl>();

export function sync(mapId: number, mapDiv: string, components: any) {

    if (!maps.has(mapId)) {
        const huaweiMap: HuaweiMap = new HuaweiMapImpl(mapDiv, mapId);
        maps.set(mapId, huaweiMap);
    }

    const map = maps.get(mapId);
    const hashMap = (<HuaweiMapImpl>map).components;

    for (let i = 0; i < components.length; i++) {

        if (hashMap.has(components[i]['_id'])) continue;

        let obj = null;
        let id: string = components[i]['_id'];

        if (components[i]['_type'] === "circle")
            obj = new CircleImpl(mapDiv, mapId, id);
        else if (components[i]['_type'] === 'marker')
            obj = new MarkerImpl(mapDiv, mapId, id);
        else if (components[i]['_type'] === 'polygon')
            obj = new PolygonImpl(mapDiv, mapId, id);
        else if (components[i]['_type'] === 'polyline')
            obj = new PolylineImpl(mapDiv, mapId, id);
        else if (components[i]['_type'] === 'groundOverlay')
            obj = new GroundOverlayImpl(mapDiv, mapId, id);
        else if (components[i]['_type'] === 'tileOverlay')
            obj = new TileOverlayImpl(mapDiv, mapId, id);

        hashMap.set(components[i]['_id'], obj);
    }
}


export async function getMap(divId: string, huaweiMapOptions: HuaweiMapOptions): Promise<HuaweiMap> {
    const mapElement = document.getElementById(divId);
    if (!mapElement) return Promise.reject(ErrorCodes.toString(ErrorCodes.NO_DOM_ELEMENT_FOUND));

    const initialProps = initalPropsOf(mapElement);

    const mapId = await asyncExec('HMSMap', 'initMap', [divId, { 'mapOptions': huaweiMapOptions, 'initialProps': initialProps }]);
    const huaweiMap: HuaweiMap = new HuaweiMapImpl(divId, mapId);
    maps.set(huaweiMap.getId(), huaweiMap);
    return huaweiMap;
}

export async function showMap(divId: string): Promise<HuaweiMap> {
    if (!document.getElementById(divId)) return Promise.reject(ErrorCodes.toString(ErrorCodes.NO_DOM_ELEMENT_FOUND));
    const mapId = await asyncExec("HMSMap", "showMap", [divId]);
    const currentMap: HuaweiMap | undefined = maps.get(mapId);
    if (currentMap == undefined) return Promise.reject(ErrorCodes.toString(ErrorCodes.NO_DOM_ELEMENT_FOUND));
    currentMap.startOverlayInterval();
    currentMap.startObserver();
    return currentMap;
}

export async function hasPermission(): Promise<boolean> {
    const json = await asyncExec("HMSMap", "hasPermission", []);
    return json.result;
}

export async function requestPermission(): Promise<void> {
    return asyncExec("HMSMap", "requestPermission", []);
}

export async function computeDistanceBetween(from: LatLng, to: LatLng): Promise<ComputeDistanceResult> {
    return asyncExec("HMSMap", "computeDistanceBetween", [{ "from": from, "to": to }]);
}

export async function setApiKey(apiKey: string): Promise<void> {
    return asyncExec("HMSMap", "setApiKey", [{ "apiKey": apiKey }]);
}

export function disableLogger(): Promise<void> {
    return asyncExec('HMSMap', 'disableLogger', []);
}

export function enableLogger(): Promise<void> {
    return asyncExec('HMSMap', 'enableLogger', []);
}

interface OverlapState {
    rect: Rect;
    visited: boolean;
    count: number;
}

class MapOverlayCache {
    private readonly mapDivId: string;
    private readonly mapElement: HTMLElement;
    private lastRectsRecord: Map<string, OverlapState> = new Map();
    private rects: Map<string, OverlapState> = new Map();
    private interval: number = -1;

    constructor(mapDivId: string, mapElement: HTMLElement) {
        this.mapDivId = mapDivId;
        this.mapElement = mapElement;
    }

    private syncWithJava() {
        /**
         * Find and send the Rect information of added/updated/deleted HTML Elements which intersects with map.
         */
        let diffToAdd = [];
        let diffToDelete = [];
        for (let [key, value] of this.rects) {
            if(!this.lastRectsRecord.has(key)) {
                diffToAdd.push(value.rect);
            } else {
                this.lastRectsRecord.delete(key);
            }
        }

        for (let [key, value] of this.lastRectsRecord) {
            diffToDelete.push(value.rect);
        }

        if(diffToAdd.length>0 || diffToDelete.length>0){
            asyncExec("HMSMap", "updateOverlappingHTMLElements", [this.mapDivId, diffToAdd, diffToDelete]);
        }

        this.lastRectsRecord.clear();
        this.lastRectsRecord = new Map(this.rects);
    }

    private mapOverlayInterval() {
        this.fillCacheRecursively(document.body);
        this.refreshCache();
        this.syncWithJava();
    }
    private refreshCache() {
        for(let [key, value] of this.rects) {
            if(!value.visited) {
                this.removeRect(key, value);
            } else {
                value.visited = false;
                this.rects.set(key, value);
            }
        }
    }

    private removeRect(key: string, value: OverlapState) {
        if(value.count > 1) {
            value.count--;
            this.rects.set(key, value);
        } else {
            this.rects.delete(key);
        }
    }


    private fillCacheRecursively(element: HTMLElement) {
        for(let i=0; i < element.children.length; i++) {
            this.fillCacheRecursively(<HTMLElement>element.children[i]);
        }

        if(element.id === this.mapDivId) return;
        const curr: Rect = Rect.fromDomRect(element.getBoundingClientRect());
        const map: Rect = Rect.fromDomRect(this.mapElement.getBoundingClientRect());

        if(map.intersects(curr) && this.isAboveMap(element)) {

            let val = this.rects.get(curr.hashCode());

            if (val == undefined) {
                this.rects.set(curr.hashCode(), {rect: curr, visited: true, count: 1});
            } else {
                val.count = val.visited ? val.count+1 : 1;
                val.visited = true;
                this.rects.set(curr.hashCode(), val);
            }
        }
    }

    private isAboveMap(element: HTMLElement): boolean {
        const isParentOfMap = element.compareDocumentPosition(this.mapElement) & Node.DOCUMENT_POSITION_CONTAINED_BY;
        const elemZIndex = window.getComputedStyle(element).zIndex;

        if( !Boolean(isParentOfMap) && !isNaN(parseInt(elemZIndex)) && parseInt(elemZIndex) > 0)
            return true;

        const isMapCreatedBefore = element.compareDocumentPosition(this.mapElement) & Node.DOCUMENT_POSITION_PRECEDING;
        return Boolean(isMapCreatedBefore);
    }

    startInterval(){
        this.interval = setInterval(() => this.mapOverlayInterval(), 100);
    }

    stopInterval(){
        if(this.interval !== -1)
            clearInterval(this.interval);
    }
}

class MapDomChangeListener {
    private readonly mapDivId: string;
    private readonly mapElement: HTMLElement;
    private mapDomChangeObserver: MutationObserver;
    private mapDivRectCache: DOMRect;

    constructor(mapDivId: string, mapElement: HTMLElement) {
        this.mapDivId = mapDivId;
        this.mapElement = mapElement;
        this.mapDivRectCache = this.mapElement.getBoundingClientRect();
        this.mapDomChangeObserver = this.createObserver();
    }

    private addWindowResizeListener() {
        window.onresize = () => {this.updateWidthAndHeight()};        
    }

    private removeWindowResizeListener() {
        window.onresize = null;
    }

    private createObserver(): MutationObserver {
        return new MutationObserver(mutations => {
            this.updateXAndY();
            this.updateWidthAndHeight();
        });
    }

    startListener() {
        this.mapDomChangeObserver.observe(document.body, { attributes: true, childList: true, subtree: true });
        this.addWindowResizeListener();
    }

    stopListener() {
        this.mapDomChangeObserver.disconnect();
        this.removeWindowResizeListener();
    }

    private updateWidthAndHeight() {
        const width = parseInt(window.getComputedStyle(this.mapElement, null).getPropertyValue('width'));
        const height = parseInt(window.getComputedStyle(this.mapElement, null).getPropertyValue('height'));
        if(this.mapDivRectCache.width != width || this.mapDivRectCache.height != height) {
            this.forceUpdateWidthAndHeight(width, height).then(() => {
                this.mapDivRectCache.width = width;
                this.mapDivRectCache.height = height;
            });
        }
    }

    private updateXAndY() {
        const mapRect = this.mapElement.getBoundingClientRect();
        const x = mapRect.x;
        const y = mapRect.y;
        if(this.mapDivRectCache.x != x || this.mapDivRectCache.y != y) {
            this.forceUpdateXAndY(x, y).then(() => {
                this.mapDivRectCache.x = x;
                this.mapDivRectCache.y = y;
            });
        }
    }

    private forceUpdateXAndY(x: number, y: number): Promise<void> {
        return asyncExec("HMSMap", "forceUpdateXAndY", [this.mapDivId, x, y]);
    }

    private forceUpdateWidthAndHeight(width: number, height: number): Promise<void> {
        return asyncExec("HMSMap", "forceUpdateWidthAndHeight", [this.mapDivId, width, height]);
    }
}

class HuaweiMapImpl implements HuaweiMap {

    public readonly components: Map<string, any> = new Map<string, any>();
    private readonly id: number;
    private readonly divId: string;
    private readonly uiSettings: UiSettings;
    private readonly projection: Projection;
    private readonly mapElement: HTMLElement;
    private readonly overlay: MapOverlayCache;
    private readonly mapListener: MapDomChangeListener;

    constructor(divId: string, mapId: number) {
        console.log(`Huawei map constructed with the div id ${divId} :: and the props ${mapId}`);
        this.id = mapId;
        this.divId = divId;
        this.projection = new ProjectionImpl(divId);
        this.uiSettings = new UiSettingsImpl(divId);

        const tempElement: HTMLElement | null = document.getElementById(this.divId);
        if (tempElement == null) throw Error(`Specified map div could not find: ${divId}`);
        this.mapElement = tempElement;
        this.overlay = new MapOverlayCache(divId, this.mapElement);
        this.mapListener = new MapDomChangeListener(divId, this.mapElement);
        this.startOverlayInterval();
        this.startObserver();
    }

    startOverlayInterval(): void {
        this.overlay.startInterval();
    }

    startObserver(): void {
        this.mapListener.startListener();
    }

    // IONIC FRAMEWORK SCROLL EVENT
    scroll(): void {
        if (this.mapElement == null) return;
        const mapRect = this.mapElement.getBoundingClientRect();
        this.forceUpdateXAndY(mapRect.x, mapRect.y);
    }

    async destroyMap(): Promise<void> {
        this.components.clear();
        maps.delete(this.id);
        this.overlay.stopInterval();
        this.mapListener.stopListener();
        return asyncExec("HMSMap", "destroyMap", [this.divId]);
    }

    async hideMap(): Promise<void> {
        this.overlay.stopInterval();
        this.mapListener.startListener();
        return asyncExec("HMSMap", "hideMap", [this.divId]);
    }

    async on(event: MapEvent, callback: (val: any) => void): Promise<void> {
        const fixedFunctionNameForJavaScript: string = `${event}_${this.id}`;
        const fixedFunctionNameForJava: string = `set${event[0].toUpperCase()}${event.substr(1)}Listener`;
        return asyncExec('HMSMap', 'mapOptions', [this.divId, 'setListener', fixedFunctionNameForJava, { 'content': callback.toString() }])
            .then(value => {
                window.subscribeHMSEvent(fixedFunctionNameForJavaScript, callback);
            }).catch(err => console.log(err));
    }

    async setMapPointersEnabled(mapPointersEnabled: boolean): Promise<void> {
        return asyncExec('HMSMap', 'setMapPointersEnabled', [this.divId, mapPointersEnabled]);
    }

    async isMapPointersEnabled(): Promise<boolean> {
        const json = await asyncExec('HMSMap', 'isMapPointersEnabled', [this.divId]);
        return json.result;
    }

    async addCircle(circleOptions: CircleOptions): Promise<Circle> {
        if (!circleOptions["center"]) return Promise.reject(ErrorCodes.toString(ErrorCodes.CENTER_PROPERTY_MUST_DEFINED));
        const componentId = await asyncExec('HMSMap', 'addComponent', [this.divId, "CIRCLE", circleOptions]);
        const circle: Circle = new CircleImpl(this.divId, this.id, componentId);
        this.components.set(circle.getId(), circle);
        return circle;
    }

    async addMarker(markerOptions: MarkerOptions): Promise<Marker> {
        if (!markerOptions["position"]) return Promise.reject(ErrorCodes.toString(ErrorCodes.POSITION_PROPERTY_MUST_DEFINED));
        const componentId = await asyncExec('HMSMap', 'addComponent', [this.divId, "MARKER", markerOptions]);
        const marker: Marker = new MarkerImpl(this.divId, this.id, componentId);
        this.components.set(marker.getId(), marker);
        return marker;
    }

    async addGroundOverlay(groundOverlayOptions: GroundOverlayOptions): Promise<GroundOverlay> {
        if (!groundOverlayOptions["position"]) return Promise.reject(ErrorCodes.toString(ErrorCodes.POSITION_PROPERTY_MUST_DEFINED));
        const componentId = await asyncExec('HMSMap', 'addComponent', [this.divId, "GROUND_OVERLAY", groundOverlayOptions]);
        const groundOverlay: GroundOverlay = new GroundOverlayImpl(this.divId, this.id, componentId);
        this.components.set(groundOverlay.getId(), groundOverlay);
        return groundOverlay;
    }

    async addTileOverlay(tileOverlayOptions: TileOverlayOptions): Promise<TileOverlay> {
        const componentId = await asyncExec('HMSMap', 'addComponent', [this.divId, "TILE_OVERLAY", tileOverlayOptions]);
        const tileOverlay: TileOverlay = new TileOverlayImpl(this.divId, this.id, componentId);
        this.components.set(tileOverlay.getId(), tileOverlay);
        return tileOverlay;
    }

    async addPolygon(polygonOptions: PolygonOptions): Promise<Polygon> {
        if (!polygonOptions["points"]) return Promise.reject(ErrorCodes.toString(ErrorCodes.POINTS_PROPERTY_MUST_DEFINED));
        const componentId = await asyncExec('HMSMap', 'addComponent', [this.divId, "POLYGON", polygonOptions]);
        const polygon: Polygon = new PolygonImpl(this.divId, this.id, componentId);
        this.components.set(polygon.getId(), polygon);
        return polygon;
    }

    async addPolyline(polylineOptions: PolylineOptions): Promise<Polyline> {
        if (!polylineOptions["points"]) return Promise.reject(ErrorCodes.toString(ErrorCodes.POINTS_PROPERTY_MUST_DEFINED));
        const componentId = await asyncExec('HMSMap', 'addComponent', [this.divId, "POLYLINE", polylineOptions]);
        const polyline: Polyline = new PolylineImpl(this.divId, this.id, componentId);
        this.components.set(polyline.getId(), polyline);
        return polyline;
    }

    animateCamera(cameraUpdate: CameraUpdate): Promise<void>;
    animateCamera(cameraUpdate: CameraUpdate, cancelableCallback: CancelableCallback): Promise<void>;
    animateCamera(cameraUpdate: CameraUpdate, cancelableCallback?: CancelableCallback, durationMs?: number): Promise<void> {
        const onFinishEventForJavascript = `${MapEvent.ON_CANCELABLE_CALLBACK_FINISH}_${this.id}`;
        const onCancelEventForJavascript = `${MapEvent.ON_CANCELABLE_CALLBACK_CANCEL}_${this.id}`;
        const props: any = {};
        if (cancelableCallback != undefined) {
            window.subscribeHMSEvent(onFinishEventForJavascript, cancelableCallback.onFinish);
            window.subscribeHMSEvent(onCancelEventForJavascript, cancelableCallback.onCancel);
            if (cancelableCallback.onFinish != undefined) props["isOnFinish"] = true;
            if (cancelableCallback.onCancel != undefined) props["isOnCancel"] = true;
            if (durationMs) props["duration"] = durationMs;
        }
        return (<CameraUpdateImpl>cameraUpdate).animateCamera(this.divId, props);
    }

    moveCamera(cameraUpdate: CameraUpdate): Promise<void> {
        return (<CameraUpdateImpl>cameraUpdate).moveCamera(this.divId);
    }

    clear(): Promise<void> {
        this.components.clear();
        return this.getHuaweiMapOptions('clear');
    }

    resetMinMaxZoomPreference(): Promise<void> {
        return this.getHuaweiMapOptions('resetMinMaxZoomPreference');
    }

    stopAnimation(): Promise<void> {
        return this.getHuaweiMapOptions('stopAnimation');
    }

    getCameraPosition(): Promise<CameraPosition> {
        return this.getHuaweiMapOptions('getCameraPosition');
    }

    getMapType(): Promise<MapType> {
        return this.getHuaweiMapOptions('getMapType');
    }

    getMaxZoomLevel(): Promise<number> {
        return this.getHuaweiMapOptions('getMaxZoomLevel');
    }

    getMinZoomLevel(): Promise<number> {
        return this.getHuaweiMapOptions('getMinZoomLevel');
    }

    getProjection() {
        return this.projection;
    }

    getUiSettings(): UiSettings {
        return this.uiSettings;
    }

    isBuildingsEnabled(): Promise<boolean> {
        return this.getHuaweiMapOptions('isBuildingsEnabled');
    }

    isMyLocationEnabled(): Promise<boolean> {
        return this.getHuaweiMapOptions('isMyLocationEnabled');
    }

    isTrafficEnabled(): Promise<boolean> {
        return this.getHuaweiMapOptions('isTrafficEnabled');
    }

    isIndoorEnabled(): Promise<boolean> {
        return this.getHuaweiMapOptions('isIndoorEnabled');
    }

    setBuildingsEnabled(buildingsEnabled: boolean): Promise<void> {
        return this.setHuaweiMapOptions('setBuildingsEnabled', { 'buildingsEnabled': buildingsEnabled });
    }

    setContentDescription(contentDescription: string): Promise<void> {
        return this.setHuaweiMapOptions('setContentDescription', { 'contentDescription': contentDescription });
    }

    setInfoWindowAdapter(infoWindowAdapter: InfoWindowAdapter): Promise<void> {
        return this.setHuaweiMapOptions('setInfoWindowAdapter', { 'infoWindowAdapter': infoWindowAdapter })
    }

    setLatLngBoundsForCameraTarget(latLngBounds: LatLngBounds): Promise<void> {
        return this.setHuaweiMapOptions('setLatLngBoundsForCameraTarget', { 'latLngBounds': latLngBounds });
    }

    setLocationSource(locationSource: LocationSource): Promise<void> {
        return this.setHuaweiMapOptions('setLocationSource', { 'locationSource': locationSource });
    }

    setMapStyle(mapStyle: MapStyleOptions): Promise<void> {
        return this.setHuaweiMapOptions('setMapStyle', { 'mapStyle': mapStyle.getResourceId() });
    }

    setMapType(mapType: MapType): Promise<void> {
        return this.setHuaweiMapOptions('setMapType', { 'mapType': mapType });
    }

    setMarkersClustering(markersClustering: boolean): Promise<void> {
        return this.setHuaweiMapOptions('setMarkersClustering', { 'markersClustering': markersClustering });
    }

    setMaxZoomPreference(maxZoomPreference: number): Promise<void> {
        return this.setHuaweiMapOptions('setMaxZoomPreference', { 'maxZoomPreference': maxZoomPreference });
    }

    setMinZoomPreference(minZoomPreference: number): Promise<void> {
        return this.setHuaweiMapOptions('setMinZoomPreference', { 'minZoomPreference': minZoomPreference });
    }

    setMyLocationEnabled(myLocationEnabled: boolean): Promise<void> {
        return this.setHuaweiMapOptions('setMyLocationEnabled', { 'myLocationEnabled': myLocationEnabled });
    }

    setPadding(left: number, top: number, right: number, bottom: number): Promise<void> {
        return this.setHuaweiMapOptions('setPadding', { 'left': left, 'top': top, 'right': right, 'bottom': bottom });
    }

    setTrafficEnabled(trafficEnabled: boolean): Promise<void> {
        return this.setHuaweiMapOptions('setTrafficEnabled', { 'trafficEnabled': trafficEnabled });
    }

    setPointToCenter(x: number, y: number): Promise<void> {
        return this.setHuaweiMapOptions('setPointToCenter', { 'x': x, 'y': y });
    }

    getComponent(key: string): any {
        return this.components.get(key);
    }

    getId(): number {
        return this.id;
    }

    snapshot(onReadyCallback: (snapshot: SnapshotResult) => void): Promise<void> {
        const eventName = `${MapEvent.ON_SNAPSHOT_READY_CALLBACK}_${this.id}`;
        window.subscribeHMSEvent(eventName, onReadyCallback);
        return this.getHuaweiMapOptions('snapshot');
    }

    // INTERNAL INTERNAL INTERNAL
    removeComponent(key: string): void {
        if (this.components.has(key)) {
            this.components.get(key).remove();
            this.components.delete(key);
        } else {
            throw ErrorCodes.toString(ErrorCodes.NO_COMPONENT_EXISTS_GIVEN_ID);
        }
    }

    private forceUpdateXAndY(x: number, y: number): Promise<void> {
        return asyncExec("HMSMap", "forceUpdateXAndY", [this.divId, x, y]);
    }

    private setHuaweiMapOptions(func: string, props: any): Promise<void> {
        return asyncExec("HMSMap", "mapOptions", [this.divId, 'setHuaweiMapOptions', func, props]);
    }

    private async getHuaweiMapOptions(func: string): Promise<any> {
        const result = await asyncExec("HMSMap", "mapOptions", [this.divId, 'getHuaweiMapOptions', func, {}]);
        return result.value;
    }

}

class UiSettingsImpl implements UiSettings {

    private readonly mapDivId: string;

    constructor(mapDivId: string) {
        this.mapDivId = mapDivId;
    }

    isCompassEnabled(): Promise<boolean> {
        return this.getUiSettings('isCompassEnabled');
    }

    isIndoorLevelPickerEnabled(): Promise<boolean> {
        return this.getUiSettings('isIndoorLevelPickerEnabled');
    }

    isMapToolbarEnabled(): Promise<boolean> {
        return this.getUiSettings('isMapToolbarEnabled');
    }

    isMyLocationButtonEnabled(): Promise<boolean> {
        return this.getUiSettings('isMyLocationButtonEnabled');
    }

    isRotateGesturesEnabled(): Promise<boolean> {
        return this.getUiSettings('isRotateGesturesEnabled');
    }

    isScrollGesturesEnabled(): Promise<boolean> {
        return this.getUiSettings('isScrollGesturesEnabled');
    }

    isScrollGesturesEnabledDuringRotateOrZoom(): Promise<boolean> {
        return this.getUiSettings('isScrollGesturesEnabledDuringRotateOrZoom');
    }

    isTiltGesturesEnabled(): Promise<boolean> {
        return this.getUiSettings('isTiltGesturesEnabled');
    }

    isZoomControlsEnabled(): Promise<boolean> {
        return this.getUiSettings('isZoomControlsEnabled');
    }

    isZoomGesturesEnabled(): Promise<boolean> {
        return this.getUiSettings('isZoomGesturesEnabled');
    }

    setAllGesturesEnabled(allGesturesEnabled: boolean): Promise<void> {
        return this.setUiSettings('setAllGesturesEnabled', { 'allGesturesEnabled': allGesturesEnabled });
    }

    setCompassEnabled(compassEnabled: boolean): Promise<void> {
        return this.setUiSettings('setCompassEnabled', { 'compassEnabled': compassEnabled });

    }

    setIndoorLevelPickerEnabled(indoorLevelPickerEnabled: boolean): Promise<void> {
        return this.setUiSettings('setIndoorLevelPickerEnabled', { 'indoorLevelPickerEnabled': indoorLevelPickerEnabled });
    }

    setMapToolbarEnabled(mapToolbarEnabled: boolean): Promise<void> {
        return this.setUiSettings('setMapToolbarEnabled', { 'mapToolbarEnabled': mapToolbarEnabled });
    }

    setMyLocationButtonEnabled(myLocationButtonEnabled: boolean): Promise<void> {
        return this.setUiSettings('setMyLocationButtonEnabled', { 'myLocationButtonEnabled': myLocationButtonEnabled });
    }

    setRotateGesturesEnabled(rotateGesturesEnabled: boolean): Promise<void> {
        return this.setUiSettings("setRotateGesturesEnabled", { 'rotateGesturesEnabled': rotateGesturesEnabled });
    }

    setScrollGesturesEnabled(scrollGesturesEnabled: boolean): Promise<void> {
        return this.setUiSettings('setScrollGesturesEnabled', { 'scrollGesturesEnabled': scrollGesturesEnabled });
    }

    setScrollGesturesEnabledDuringRotateOrZoom(scrollGesturesEnabledDuringRotateOrZoom: boolean): Promise<void> {
        return this.setUiSettings('setScrollGesturesEnabledDuringRotateOrZoom', { 'scrollGesturesEnabledDuringRotateOrZoom': scrollGesturesEnabledDuringRotateOrZoom });
    }

    setTiltGesturesEnabled(tiltGesturesEnabled: boolean): Promise<void> {
        return this.setUiSettings('setTiltGesturesEnabled', { 'tiltGesturesEnabled': tiltGesturesEnabled });
    }

    setZoomControlsEnabled(zoomControlsEnabled: boolean): Promise<void> {
        return this.setUiSettings('setZoomControlsEnabled', { 'zoomControlsEnabled': zoomControlsEnabled });
    }

    setZoomGesturesEnabled(zoomGesturesEnabled: boolean): Promise<void> {
        return this.setUiSettings('setZoomGesturesEnabled', { 'zoomGesturesEnabled': zoomGesturesEnabled });
    }

    setGestureScaleByMapCenter(gestureScaleByMapCenterEnabled: boolean): Promise<void> {
        return this.setUiSettings('setGestureScaleByMapCenter', { 'gestureScaleByMapCenterEnabled': gestureScaleByMapCenterEnabled });
    }

    private setUiSettings(func: string, props: any): Promise<void> {
        return asyncExec('HMSMap', 'mapOptions', [this.mapDivId, 'setUiSettings', func, props]);
    }

    private async getUiSettings(func: string) {
        const result = await asyncExec("HMSMap", "mapOptions", [this.mapDivId, 'getUiSettings', func, {}]);
        return result.value;
    }
}

class CameraUpdateImpl implements CameraUpdate {

    props: any;
    event: string = "";

    moveCamera(mapId: string): Promise<any> {
        return asyncExec('HMSMap', 'mapOptions', [mapId, "moveCamera", this.event, this.props]);
    }

    animateCamera(mapId: string, props: any): Promise<any> {
        return asyncExec('HMSMap', 'mapOptions', [mapId, "animateCamera", this.event, { ...this.props, ...props }]);
    }
}

export class CameraUpdateFactory {
    private constructor() {
    }

    static newCameraPosition(cameraPosition: CameraPosition): CameraUpdate {
        return this.constructCameraUpdateImpl("newCameraPosition", { 'cameraPosition': cameraPosition });
    }

    static newLatLng(latLng: LatLng): CameraUpdate {
        return this.constructCameraUpdateImpl("newLatLng", { 'latLng': latLng });
    }

    static newLatLngBounds(latLngBounds: LatLngBounds, padding: number): CameraUpdate;

    static newLatLngBounds(latLngBounds: LatLngBounds, padding: number, width?: number, height?: number): CameraUpdate {
        let props: any = {};
        props['bounds'] = latLngBounds;
        props['padding'] = padding;
        if (width && height) {
            props['width'] = width;
            props['height'] = height;
        }
        return this.constructCameraUpdateImpl("newLatLngBounds", props);
    }

    static newLatLngZoom(latLng: LatLng, zoom: number): CameraUpdate {
        return this.constructCameraUpdateImpl("newLatLngZoom", { "latLng": latLng, "zoom": zoom });
    }

    static scrollBy(xPixel: number, yPixel: number): CameraUpdate {
        return this.constructCameraUpdateImpl("scrollBy", { 'xPixel': xPixel, 'yPixel': yPixel });
    }

    static zoomBy(amount: number): CameraUpdate;

    static zoomBy(amount: number, focus?: Point): CameraUpdate {
        let props: any = {};
        props['amount'] = amount;
        if (focus) props['focus'] = focus;
        return this.constructCameraUpdateImpl("zoomBy", props);
    }

    static zoomIn(): CameraUpdate {
        return this.constructCameraUpdateImpl("zoomIn", {});
    }

    static zoomOut(): CameraUpdate {
        return this.constructCameraUpdateImpl("zoomOut", {});
    }

    static zoomTo(zoom: number): CameraUpdate {
        return this.constructCameraUpdateImpl("zoomTo", { "zoom": zoom });
    }

    private static constructCameraUpdateImpl(event: string, props: any): CameraUpdateImpl {
        let cameraUpdate = new CameraUpdateImpl();
        cameraUpdate.event = event;
        cameraUpdate.props = props;
        return cameraUpdate;
    }
}

class ProjectionImpl implements Projection {
    private readonly divId: string;

    constructor(divId: string) {
        this.divId = divId;
    }

    fromScreenLocation(point: Point): Promise<LatLng> {
        return asyncExec("HMSMap", "mapOptions", [this.divId, "projections", "fromScreenLocation", { "point": point }]);
    }

    getVisibleRegion(): Promise<VisibleRegion> {
        return asyncExec("HMSMap", "mapOptions", [this.divId, "projections", "getVisibleRegion", {}]);
    }

    toScreenLocation(latLng: LatLng): Promise<Point> {
        return asyncExec("HMSMap", "mapOptions", [this.divId, "projections", "toScreenLocation", { "latLng": latLng }]);
    }
}

export class MapStyleOptions {
    private readonly resourceId: number;

    private constructor(resourceId: number) {
        this.resourceId = resourceId;
    }

    public static loadRawResourceStyle(resourceId: number): MapStyleOptions {
        return new MapStyleOptions(resourceId);
    }

    getResourceId(): number {
        return this.resourceId;
    }
}
