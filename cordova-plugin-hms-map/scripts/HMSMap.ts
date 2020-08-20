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

import { asyncExec, isString, isObject } from './utils';

// ////////////////////////////////////////////////////////////////////////////////////////////////
// State
// ////////////////////////////////////////////////////////////////////////////////////////////////

const mapViews = new Map<String, HuaweiMap>();

// ////////////////////////////////////////////////////////////////////////////////////////////////
// UTILS
// ////////////////////////////////////////////////////////////////////////////////////////////////

function handleDisplacement(event: any) {
    for (let [mapId, huaweiMap] of mapViews) {
        const mapRect = huaweiMap.element.getBoundingClientRect();

        if (huaweiMap.props.x === mapRect.x && huaweiMap.props.y === mapRect.y) {
            continue;
        }

        huaweiMap.props.x = mapRect.x;
        huaweiMap.props.y = mapRect.y;

        asyncExec('HMSMap', 'setMapViewProps', [mapId, huaweiMap.props]);
    }
};

// ////////////////////////////////////////////////////////////////////////////////////////////////
// Global watchers
// ////////////////////////////////////////////////////////////////////////////////////////////////

const mutationObserver = new MutationObserver(handleDisplacement);
mutationObserver.observe(document.body, { attributes: true, childList: true, subtree: true });
window.addEventListener('scroll', handleDisplacement, true);

// ////////////////////////////////////////////////////////////////////////////////////////////////
// CallableObj
// ////////////////////////////////////////////////////////////////////////////////////////////////

class CallableObj {
    mapId: string
    [key: string]: any

    constructor(mapId: string, obj: any) {
        this.mapId = mapId;

        // Extend this with all the keys of obj
        Object.keys(obj).forEach(key => {
            this[key] = obj[key];
        });

        // Expose all the functions
        if (this.__functions) {
            this.__functions.forEach((funcName: string) => {
                this[funcName] = (arg: any, arg2: any) => {
                    let fixedArg = arg;
                    if (funcName === 'set' && isString(arg)) {
                        fixedArg = { [arg]: arg2 }
                    }
                    return this.call(funcName, fixedArg);
                }
            });
        }

        return this;
    }

    call(funcName: string, arg?: any) {
        return asyncExec('HMSMap', 'dispatchFunction', [this.mapId, funcName, this, arg == null ? {} : arg]);
    };
}


async function dispatcher(mapId: string, promise: Promise<any>) {
    const result = await promise;
    if (!isObject(result) || !result.hasOwnProperty("__objectType")) {
        return result;
    }

    for (const key of Object.keys(result)) {
        result[key] = await dispatcher(mapId, result[key]);
    }
    return new CallableObj(mapId, result);
};

// ////////////////////////////////////////////////////////////////////////////////////////////////
// HuaweiMap
// ////////////////////////////////////////////////////////////////////////////////////////////////

class HuaweiMap {
    id: string;
    element: HTMLElement | null;
    props: HuaweiMapProps;

    init(id: string, options: HuaweiMapOptions) {
        this.id = id;
        this.element = document.getElementById(id);
        this.props = {} as HuaweiMapProps;
        this.props = this.refreshProps();

        const mutationObserver = new MutationObserver(this.handleMutation);
        mutationObserver.observe(this.element, { attributes: true });

        mapViews.set(id, this);
        return this.dispatch(asyncExec('HMSMap', 'initMap', [id, { mapOptions: options, mapProps: this.props }]));
    };

    reInitializeMap(){
        return this.dispatch(asyncExec('HMSMap', 'reInitializeMap', [this.id, this.refreshProps()]))
    }

    destroy(){
        return this.dispatch(asyncExec('HMSMap', 'destroyMap', [this.id]));
    }

    hide(){
        return this.dispatch(asyncExec('HMSMap', 'hideMap', [this.id]));
    }

    show(){
        return this.dispatch(asyncExec('HMSMap', 'showMap', [this.id]));
    }
    /**
     * Set a property of a map instance.
     *
     * This function can be called in two ways:
     * ```
     *     mapInstance.set('propName', propValue)
     * ```
     * or
     * ```
     *     mapInstance.set({propName: propValue, prop2Name: prop2Value})
     * ```
     */
    set(propName: string | object, value?: any): Promise<void> {
        const isPropStr = isString(propName)

        let propsObj;
        if (isPropStr) {
            propsObj = { [propName as string]: value };
        }

        return this.dispatch(asyncExec('HMSMap', 'setProps', [this.id, isPropStr ? propsObj : propName]));
    };


    /**
     * Get a property of a map instance.
     *
     * This function can be called in two ways:
     * ```
     *     mapInstance.get('propName')
     * ```
     * or
     * ```
     *     const properties = mapInstance.get(); // or mapInstance.get('all')
     *     properties.propName;
     * ```
     * The second example will return an object that contains all the properties of the given map
     * instance.
     */
    async get(propName?: string) {
        const props = await this.dispatch(asyncExec('HMSMap', 'getProps', [this.id]));

        if (typeof propName === 'undefined' || propName === 'all') {
            return props;
        }

        return props[propName];
    };

    /**
     * Register a map event.
     */
    on(eventName: MapEvent, handler: (data: any, data2?: any) => void) {
        const instanceEventName = `${eventName}-${this.id}`;
        window.unregisterHMSEvent(instanceEventName, null); // Remove old handler
        window.registerHMSEvent(instanceEventName, async (result, result2) => {
            if (result) {
                handler(await this.dispatch(result));
            }

            if (result2) {
                handler(await this.dispatch(result), await this.dispatch(result2));
            }
        });
        return this.dispatch(asyncExec('HMSMap', 'registerEvent', [this.id, eventName]));
    };

    // IONIC FRAMEWORK SCROLL EVENT
    scroll() {
        const mapRect = this.element.getBoundingClientRect();

        if (this.props.x === mapRect.x && this.props.y === mapRect.y)
            return;

        this.props.x = mapRect.x;
        this.props.y = mapRect.y;

        return asyncExec('HMSMap', 'setMapViewProps', [this.id, this.props]);
    }

    clear() {
        return this.dispatch(this.runAction('clear'));
    }

    resetMinMaxZoomPreference() {
        return this.dispatch(this.runAction('resetMinMaxZoomPreference'));
    }

    moveCamera(opts: CameraUpdate) {
        return this.dispatch(this.runAction('moveCamera', opts));
    }

    animateCamera(opts: CameraUpdate) {
        return this.dispatch(this.runAction('animateCamera', opts));
    }

    addPolyline(opts: PolylineOptions): Promise<Polyline> {
        return this.dispatch(this.runAction('addPolyline', opts));
    }

    addPolygon(opts: PolygonOptions): Promise<Polygon> {
        return this.dispatch(this.runAction('addPolygon', opts));
    }

    addMarker(opts: MarkerOptions): Promise<Marker> {
        return this.dispatch(this.runAction('addMarker', opts));
    }

    addGroundOverlay(opts: GroundOverlayOptions): Promise<GroundOverlay> {
        return this.dispatch(this.runAction('addGroundOverlay', opts));
    }

    addCircle(opts: CircleOptions): Promise<Circle> {
        return this.dispatch(this.runAction('addCircle', opts));
    }

    dispatch(obj: any) {
        return dispatcher(this.id, obj);
    };

    runAction(act: string, opts: any = null): Promise<any> {
        return asyncExec('HMSMap', 'runAction', [this.id, act, opts])
    }

    private refreshProps() {

        const elemRect = this.element.getBoundingClientRect();
        const elemStyle = window.getComputedStyle(this.element, null);

        console.log(`ElemRect :: ${JSON.stringify(elemRect)}`);

        this.props.x = elemRect.x; // .x
        this.props.y = elemRect.y;  // .y
        this.props.width = elemRect.width;
        this.props.height = elemRect.height;
        this.props.paddingLeft = parseInt(elemStyle.getPropertyValue("padding-left"));
        this.props.paddingTop = parseInt(elemStyle.getPropertyValue("padding-top"));
        this.props.borderLeft = parseInt(elemStyle.getPropertyValue("border-left-width"));
        this.props.borderTop = parseInt(elemStyle.getPropertyValue("border-top-width"));

    
        return this.props;
    };

    private handleMutation(mutationRecords: any) {
        return asyncExec('HMSMap', 'setMapViewProps', [this.id, this.refreshProps()]);
    };
}


// ////////////////////////////////////////////////////////////////////////////////////////////////
// Type definitions for type checker
// ////////////////////////////////////////////////////////////////////////////////////////////////

export interface LatLng {
    lat: number,
    lng: number
};

export interface PatternItem {
    type?: PatternItemType,
    length?: number
};

export interface Anchor {
    u: number,
    v: number
};

export interface Bitmap {
    hue?: Hue,
    asset?: string,
    fileName?: string,
    path?: string
};

export interface LatLngBounds {
    southwest: LatLng,
    northeast: LatLng
    center?: LatLng,
};

// Possible combinations are:
// - width height latLng
// - width latLng
// - latLngBounds
// No way to check for this for now.
export interface GroundOverlayPosition {
    width?: number,
    height?: number,
    latLng?: LatLng,
    latLngBounds?: LatLngBounds
}

export interface Cap {
    type?: CapType,
    // If custom tap these parameters needed.
    refWidth?: number,
    bitmapDescriptor?: Bitmap
}

export interface CircleOptions {
    center?: LatLng,
    clickable?: boolean,
    fillColor?: Color,
    radius?: number,
    strokeColor?: Color,
    strokeWidth?: number,
    strokePattern?: PatternItem,
    visible?: boolean,
    zIndex?: number
}

// Ground overlay posiiton is different than the others.
export interface GroundOverlayOptions {
    anchor?: Anchor,
    bearing?: number,
    clickable?: boolean,
    image?: Bitmap,
    visible?: boolean,
    transparency?: number,
    zIndex?: number,
    position?: GroundOverlayPosition
}

export interface MarkerOptions {
    anchorMarker?: Anchor,
    infoWindowAnchor?: Anchor,
    alpha?: number,
    clusterable?: boolean,
    draggable?: boolean,
    icon?: Bitmap,
    flat?: boolean,
    position?: LatLng,
    rotation?: number,
    snippet?: string,
    title?: string,
    visible?: boolean,
    zIndex?: number
}

export interface PolygonOptions {
    points?: LatLng[],
    holes?: LatLng[][],
    clickable?: boolean,
    geodesic?: boolean,
    fillColor?: Color,
    strokeColor?: Color,
    strokeJointType?: JointType,
    strokePattern?: PatternItem,
    strokeWidth?: number,
    visible?: boolean,
    zIndex?: number
}

export interface PolylineOptions {
    points?: LatLng[],
    clickable?: boolean,
    color?: Color,
    endCap?: Cap,
    startCap?: Cap,
    geodesic?: boolean,
    jointType?: JointType,
    visible?: boolean,
    zIndex?: number,
    width?: number
}

interface HuaweiMapProps {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    paddingLeft?: number;
    paddingTop?: number;
    borderLeft?: number;
    borderTop?: number;
}


// Change this camera position field.
export interface HuaweiMapOptions {
    mapType?: MapType;
    zoomControlsEnabled?: boolean;
    compassEnabled?: boolean;
    zoomGesturesEnabled?: boolean;
    scrollGesturesEnabled?: boolean;
    rotateGesturesEnabled?: boolean;
    tiltGesturesEnabled?: boolean;
    zOrderOnTop?: boolean;
    liteMode?: boolean;
    ambientEnabled?: boolean;
    minZoomPreference?: number;
    maxZoomPreference?: number;
    cameraPosition?: CameraPosition;
    latLngBounds?: LatLngBounds
}

export interface CameraPosition {
    target?: LatLng;
    zoom?: number;
    bearing?: number;
    tilt?: number;
}

export interface LocationPermissionResult {
    hasLocationPermission: boolean;
}

export interface ComputeDistanceResult {
    result: number;
}

export interface ComputeDistance {
    from?: LatLng,
    to?: LatLng,
}

export interface CameraUpdate {
    method?: CameraUpdateMethod,
    [other: string]: any, // ... Other stuff depends on the method
}


interface BaseMapObject<T> {
    set(propName: string, propValue: any): Promise<any>;
    set(keyVals: any): Promise<any>;
    update(): Promise<T>;
    remove(): Promise<any>;

    [other: string]: any;
}

interface Polyline extends BaseMapObject<Polyline> {
}

interface Polygon extends BaseMapObject<Polygon> {
}

interface Circle extends BaseMapObject<Circle> {
}

interface GroundOverlay extends BaseMapObject<GroundOverlay> {
}

interface Marker extends BaseMapObject<Marker> {
    showInfoWindow(): Promise<void>;
    hideInfoWindow(): Promise<void>;
}

// ////////////////////////////////////////////////////////////////////////////////////////////////
// Public functions
// ////////////////////////////////////////////////////////////////////////////////////////////////


export function init(): Promise<void> {
    return asyncExec('HMSMap', 'init', []);
}

export function setApiKey(apiKey: string): Promise<void> {
    return asyncExec('HMSMap', 'setApiKey', [apiKey])
}

export async function create(divId: string, huaweiMapOptions: HuaweiMapOptions): Promise<HuaweiMap> {
    const huaweiMap = new HuaweiMap();
    await huaweiMap.init(divId, huaweiMapOptions);
    return huaweiMap;
}

export function computeDistanceBetween(arg: ComputeDistance): Promise<ComputeDistanceResult> {
    return asyncExec('HMSMap', 'executeStatic', ['computeDistanceBetween', arg]);
}

export function hasLocationPermission(): Promise<LocationPermissionResult> {
    return asyncExec('HMSMap', 'executeStatic', ['hasLocationPermission', {}]);
}

export function requestLocationPermission(): Promise<void> {
    return asyncExec('HMSMap', 'executeStatic', ['requestLocationPermission', {}])
}

function temp(element: HTMLElement): HuaweiMapProps{
    let props : HuaweiMapProps = {} as HuaweiMapProps; 
    const elemRect = element.getBoundingClientRect();
    const elemStyle = window.getComputedStyle(element, null);

    console.log(`ElemRect :: ${JSON.stringify(elemRect)}`);

    props.x = elemRect.x; // .x
    props.y = elemRect.y;  // .y
    props.width = elemRect.width;
    props.height = elemRect.height;
    props.paddingLeft = parseInt(elemStyle.getPropertyValue("padding-left"));
    props.paddingTop = parseInt(elemStyle.getPropertyValue("padding-top"));
    props.borderLeft = parseInt(elemStyle.getPropertyValue("border-left-width"));
    props.borderTop = parseInt(elemStyle.getPropertyValue("border-top-width"));


    return props;
}

export async function loadMap(jsonMap: string): Promise<HuaweiMap>{
    const parsedMap = JSON.parse(jsonMap);
    const map: HuaweiMap = new HuaweiMap();
    const elem = document.getElementById(parsedMap.id);

    map.element = elem;
    map.props = temp(map.element);
    map.id = parsedMap.id;

    await asyncExec('HMSMap', 'setMapViewProps', [map.id, map.props]);
    const mutationObserver = new MutationObserver(map.scroll);
    mutationObserver.observe(map.element, { attributes: true });

    mapViews.set(map.id, map);
    
    return map;
}


// ////////////////////////////////////////////////////////////////////////////////////////////////
// CONSTANTS
// ////////////////////////////////////////////////////////////////////////////////////////////////

export enum PatternItemType {
    TYPE_GAP = 2,
    TYPE_DOT = 1,
    TYPE_DASH = 0
}

export enum JointType {
    ROUND = 2,
    BEVEL = 1,
    DEFAULT = 0
}

export enum CapType {
    TYPE_BUTT_CAP = 0,
    TYPE_SQUARE_CAP = 1,
    TYPE_ROUND_CAP = 2,
    TYPE_CUSTOM_CAP = 3
}

export enum CameraMoveReason {
    REASON_DEVELOPER_ANIMATION = 3,
    REASON_API_ANIMATION = 2,
    REASON_GESTURE = 1
}

export enum Color {
    RED = -65536,
    DKGRAY = -12303292,
    GRAY = -7829368,
    WHITE = -1,
    BLUE = -16776961,
    BLACK = -16777216,
    LTGRAY = -3355444,
    MAGENTA = -65281,
    YELLOW = -256,
    CYAN = -16711681,
    GREEN = -16711936,
    TRANSPARENT = 0
}

export enum MapType {
    MAP_TYPE_NONE = 0,
    MAP_TYPE_SATELLITE = 2,
    MAP_TYPE_NORMAL = 1,
    MAP_TYPE_HYBRID = 4,
    MAP_TYPE_TERRAIN = 3,
}

export enum MarkerEvent {
    MARKER_DRAG = 2,
    MARKER_DRAG_END = 3,
    MARKER_DRAG_START = 1
}

export enum Hue {
    HUE_GREEN = 120,
    HUE_AZURE = 210,
    HUE_ROSE = 330,
    HUE_CYAN = 180,
    HUE_ORANGE = 30,
    HUE_MAGENTA = 300,
    HUE_VIOLET = 270,
    HUE_YELLOW = 60,
    HUE_BLUE = 240,
    HUE_RED = 0,

}

export enum MapEvent {
    CIRCLE_CLICK = "circleClick",
    MAP_CLICK = "mapClick",
    MAP_LONG_CLICK = "mapLongClick",
    INFO_WINDOW_CLICK = "infoWindowClick",
    CAMERA_MOVE_STARTED = "cameraMoveStarted",
    POLYGON_CLICK = "polygonClick",
    POLYLINE_CLICK = "polylineClick",
    GROUND_OVERLAY_CLICK = "groundOverlayClick",
    CAMERA_MOVE = "cameraMove",
    CAMERA_IDLE = "cameraIdle",
    MAP_LOADED = "mapLoaded",
    MARKER_CLICK = "markerClick",
    MY_LOCATION_BUTTON_CLICK = "myLocationButtonClick",
    MY_LOCATION_CLICK = "myLocationClick",
    MARKER_DRAG = "markerDrag"
}

export enum CameraUpdateMethod {
    CAMERA_POSITION = "newCameraPosition",
    LATLNG = "newLatLng",
    LATLNG_BOUNDS = "newLatLngBounds",
    LATLNG_ZOOM = "newLatLngZoom",
    SCROLL_BY = "scrollBy",
    ZOOM_BY = "zoomBy",
    ZOOM_IN = "zoomIn",
    ZOOM_OUT = "zoomOut",
    ZOOM_TO = "zoomTo"
}
