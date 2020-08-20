"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CameraUpdateMethod = exports.MapEvent = exports.Hue = exports.MarkerEvent = exports.MapType = exports.Color = exports.CameraMoveReason = exports.CapType = exports.JointType = exports.PatternItemType = exports.loadMap = exports.requestLocationPermission = exports.hasLocationPermission = exports.computeDistanceBetween = exports.create = exports.setApiKey = exports.init = void 0;
const utils_1 = require("./utils");
// ////////////////////////////////////////////////////////////////////////////////////////////////
// State
// ////////////////////////////////////////////////////////////////////////////////////////////////
const mapViews = new Map();
// ////////////////////////////////////////////////////////////////////////////////////////////////
// UTILS
// ////////////////////////////////////////////////////////////////////////////////////////////////
function handleDisplacement(event) {
    for (let [mapId, huaweiMap] of mapViews) {
        const mapRect = huaweiMap.element.getBoundingClientRect();
        if (huaweiMap.props.x === mapRect.x && huaweiMap.props.y === mapRect.y) {
            continue;
        }
        huaweiMap.props.x = mapRect.x;
        huaweiMap.props.y = mapRect.y;
        utils_1.asyncExec('HMSMap', 'setMapViewProps', [mapId, huaweiMap.props]);
    }
}
;
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
    constructor(mapId, obj) {
        this.mapId = mapId;
        // Extend this with all the keys of obj
        Object.keys(obj).forEach(key => {
            this[key] = obj[key];
        });
        // Expose all the functions
        if (this.__functions) {
            this.__functions.forEach((funcName) => {
                this[funcName] = (arg, arg2) => {
                    let fixedArg = arg;
                    if (funcName === 'set' && utils_1.isString(arg)) {
                        fixedArg = { [arg]: arg2 };
                    }
                    return this.call(funcName, fixedArg);
                };
            });
        }
        return this;
    }
    call(funcName, arg) {
        return utils_1.asyncExec('HMSMap', 'dispatchFunction', [this.mapId, funcName, this, arg == null ? {} : arg]);
    }
    ;
}
function dispatcher(mapId, promise) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield promise;
        if (!utils_1.isObject(result) || !result.hasOwnProperty("__objectType")) {
            return result;
        }
        for (const key of Object.keys(result)) {
            result[key] = yield dispatcher(mapId, result[key]);
        }
        return new CallableObj(mapId, result);
    });
}
;
// ////////////////////////////////////////////////////////////////////////////////////////////////
// HuaweiMap
// ////////////////////////////////////////////////////////////////////////////////////////////////
class HuaweiMap {
    init(id, options) {
        this.id = id;
        this.element = document.getElementById(id);
        this.props = {};
        this.props = this.refreshProps();
        const mutationObserver = new MutationObserver(this.handleMutation);
        mutationObserver.observe(this.element, { attributes: true });
        mapViews.set(id, this);
        return this.dispatch(utils_1.asyncExec('HMSMap', 'initMap', [id, { mapOptions: options, mapProps: this.props }]));
    }
    ;
    reInitializeMap() {
        return this.dispatch(utils_1.asyncExec('HMSMap', 'reInitializeMap', [this.id, this.refreshProps()]));
    }
    destroy() {
        return this.dispatch(utils_1.asyncExec('HMSMap', 'destroyMap', [this.id]));
    }
    hide() {
        return this.dispatch(utils_1.asyncExec('HMSMap', 'hideMap', [this.id]));
    }
    show() {
        return this.dispatch(utils_1.asyncExec('HMSMap', 'showMap', [this.id]));
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
    set(propName, value) {
        const isPropStr = utils_1.isString(propName);
        let propsObj;
        if (isPropStr) {
            propsObj = { [propName]: value };
        }
        return this.dispatch(utils_1.asyncExec('HMSMap', 'setProps', [this.id, isPropStr ? propsObj : propName]));
    }
    ;
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
    get(propName) {
        return __awaiter(this, void 0, void 0, function* () {
            const props = yield this.dispatch(utils_1.asyncExec('HMSMap', 'getProps', [this.id]));
            if (typeof propName === 'undefined' || propName === 'all') {
                return props;
            }
            return props[propName];
        });
    }
    ;
    /**
     * Register a map event.
     */
    on(eventName, handler) {
        const instanceEventName = `${eventName}-${this.id}`;
        window.unregisterHMSEvent(instanceEventName, null); // Remove old handler
        window.registerHMSEvent(instanceEventName, (result, result2) => __awaiter(this, void 0, void 0, function* () {
            if (result) {
                handler(yield this.dispatch(result));
            }
            if (result2) {
                handler(yield this.dispatch(result), yield this.dispatch(result2));
            }
        }));
        return this.dispatch(utils_1.asyncExec('HMSMap', 'registerEvent', [this.id, eventName]));
    }
    ;
    // IONIC FRAMEWORK SCROLL EVENT
    scroll() {
        const mapRect = this.element.getBoundingClientRect();
        if (this.props.x === mapRect.x && this.props.y === mapRect.y)
            return;
        this.props.x = mapRect.x;
        this.props.y = mapRect.y;
        return utils_1.asyncExec('HMSMap', 'setMapViewProps', [this.id, this.props]);
    }
    clear() {
        return this.dispatch(this.runAction('clear'));
    }
    resetMinMaxZoomPreference() {
        return this.dispatch(this.runAction('resetMinMaxZoomPreference'));
    }
    moveCamera(opts) {
        return this.dispatch(this.runAction('moveCamera', opts));
    }
    animateCamera(opts) {
        return this.dispatch(this.runAction('animateCamera', opts));
    }
    addPolyline(opts) {
        return this.dispatch(this.runAction('addPolyline', opts));
    }
    addPolygon(opts) {
        return this.dispatch(this.runAction('addPolygon', opts));
    }
    addMarker(opts) {
        return this.dispatch(this.runAction('addMarker', opts));
    }
    addGroundOverlay(opts) {
        return this.dispatch(this.runAction('addGroundOverlay', opts));
    }
    addCircle(opts) {
        return this.dispatch(this.runAction('addCircle', opts));
    }
    dispatch(obj) {
        return dispatcher(this.id, obj);
    }
    ;
    runAction(act, opts = null) {
        return utils_1.asyncExec('HMSMap', 'runAction', [this.id, act, opts]);
    }
    refreshProps() {
        const elemRect = this.element.getBoundingClientRect();
        const elemStyle = window.getComputedStyle(this.element, null);
        console.log(`ElemRect :: ${JSON.stringify(elemRect)}`);
        this.props.x = elemRect.x; // .x
        this.props.y = elemRect.y; // .y
        this.props.width = elemRect.width;
        this.props.height = elemRect.height;
        this.props.paddingLeft = parseInt(elemStyle.getPropertyValue("padding-left"));
        this.props.paddingTop = parseInt(elemStyle.getPropertyValue("padding-top"));
        this.props.borderLeft = parseInt(elemStyle.getPropertyValue("border-left-width"));
        this.props.borderTop = parseInt(elemStyle.getPropertyValue("border-top-width"));
        return this.props;
    }
    ;
    handleMutation(mutationRecords) {
        return utils_1.asyncExec('HMSMap', 'setMapViewProps', [this.id, this.refreshProps()]);
    }
    ;
}
;
;
;
;
;
// ////////////////////////////////////////////////////////////////////////////////////////////////
// Public functions
// ////////////////////////////////////////////////////////////////////////////////////////////////
function init() {
    return utils_1.asyncExec('HMSMap', 'init', []);
}
exports.init = init;
function setApiKey(apiKey) {
    return utils_1.asyncExec('HMSMap', 'setApiKey', [apiKey]);
}
exports.setApiKey = setApiKey;
function create(divId, huaweiMapOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const huaweiMap = new HuaweiMap();
        yield huaweiMap.init(divId, huaweiMapOptions);
        return huaweiMap;
    });
}
exports.create = create;
function computeDistanceBetween(arg) {
    return utils_1.asyncExec('HMSMap', 'executeStatic', ['computeDistanceBetween', arg]);
}
exports.computeDistanceBetween = computeDistanceBetween;
function hasLocationPermission() {
    return utils_1.asyncExec('HMSMap', 'executeStatic', ['hasLocationPermission', {}]);
}
exports.hasLocationPermission = hasLocationPermission;
function requestLocationPermission() {
    return utils_1.asyncExec('HMSMap', 'executeStatic', ['requestLocationPermission', {}]);
}
exports.requestLocationPermission = requestLocationPermission;
function temp(element) {
    let props = {};
    const elemRect = element.getBoundingClientRect();
    const elemStyle = window.getComputedStyle(element, null);
    console.log(`ElemRect :: ${JSON.stringify(elemRect)}`);
    props.x = elemRect.x; // .x
    props.y = elemRect.y; // .y
    props.width = elemRect.width;
    props.height = elemRect.height;
    props.paddingLeft = parseInt(elemStyle.getPropertyValue("padding-left"));
    props.paddingTop = parseInt(elemStyle.getPropertyValue("padding-top"));
    props.borderLeft = parseInt(elemStyle.getPropertyValue("border-left-width"));
    props.borderTop = parseInt(elemStyle.getPropertyValue("border-top-width"));
    return props;
}
function loadMap(jsonMap) {
    return __awaiter(this, void 0, void 0, function* () {
        const parsedMap = JSON.parse(jsonMap);
        const map = new HuaweiMap();
        const elem = document.getElementById(parsedMap.id);
        map.element = elem;
        map.props = temp(map.element);
        map.id = parsedMap.id;
        yield utils_1.asyncExec('HMSMap', 'setMapViewProps', [map.id, map.props]);
        const mutationObserver = new MutationObserver(map.scroll);
        mutationObserver.observe(map.element, { attributes: true });
        mapViews.set(map.id, map);
        return map;
    });
}
exports.loadMap = loadMap;
// ////////////////////////////////////////////////////////////////////////////////////////////////
// CONSTANTS
// ////////////////////////////////////////////////////////////////////////////////////////////////
var PatternItemType;
(function (PatternItemType) {
    PatternItemType[PatternItemType["TYPE_GAP"] = 2] = "TYPE_GAP";
    PatternItemType[PatternItemType["TYPE_DOT"] = 1] = "TYPE_DOT";
    PatternItemType[PatternItemType["TYPE_DASH"] = 0] = "TYPE_DASH";
})(PatternItemType = exports.PatternItemType || (exports.PatternItemType = {}));
var JointType;
(function (JointType) {
    JointType[JointType["ROUND"] = 2] = "ROUND";
    JointType[JointType["BEVEL"] = 1] = "BEVEL";
    JointType[JointType["DEFAULT"] = 0] = "DEFAULT";
})(JointType = exports.JointType || (exports.JointType = {}));
var CapType;
(function (CapType) {
    CapType[CapType["TYPE_BUTT_CAP"] = 0] = "TYPE_BUTT_CAP";
    CapType[CapType["TYPE_SQUARE_CAP"] = 1] = "TYPE_SQUARE_CAP";
    CapType[CapType["TYPE_ROUND_CAP"] = 2] = "TYPE_ROUND_CAP";
    CapType[CapType["TYPE_CUSTOM_CAP"] = 3] = "TYPE_CUSTOM_CAP";
})(CapType = exports.CapType || (exports.CapType = {}));
var CameraMoveReason;
(function (CameraMoveReason) {
    CameraMoveReason[CameraMoveReason["REASON_DEVELOPER_ANIMATION"] = 3] = "REASON_DEVELOPER_ANIMATION";
    CameraMoveReason[CameraMoveReason["REASON_API_ANIMATION"] = 2] = "REASON_API_ANIMATION";
    CameraMoveReason[CameraMoveReason["REASON_GESTURE"] = 1] = "REASON_GESTURE";
})(CameraMoveReason = exports.CameraMoveReason || (exports.CameraMoveReason = {}));
var Color;
(function (Color) {
    Color[Color["RED"] = -65536] = "RED";
    Color[Color["DKGRAY"] = -12303292] = "DKGRAY";
    Color[Color["GRAY"] = -7829368] = "GRAY";
    Color[Color["WHITE"] = -1] = "WHITE";
    Color[Color["BLUE"] = -16776961] = "BLUE";
    Color[Color["BLACK"] = -16777216] = "BLACK";
    Color[Color["LTGRAY"] = -3355444] = "LTGRAY";
    Color[Color["MAGENTA"] = -65281] = "MAGENTA";
    Color[Color["YELLOW"] = -256] = "YELLOW";
    Color[Color["CYAN"] = -16711681] = "CYAN";
    Color[Color["GREEN"] = -16711936] = "GREEN";
    Color[Color["TRANSPARENT"] = 0] = "TRANSPARENT";
})(Color = exports.Color || (exports.Color = {}));
var MapType;
(function (MapType) {
    MapType[MapType["MAP_TYPE_NONE"] = 0] = "MAP_TYPE_NONE";
    MapType[MapType["MAP_TYPE_SATELLITE"] = 2] = "MAP_TYPE_SATELLITE";
    MapType[MapType["MAP_TYPE_NORMAL"] = 1] = "MAP_TYPE_NORMAL";
    MapType[MapType["MAP_TYPE_HYBRID"] = 4] = "MAP_TYPE_HYBRID";
    MapType[MapType["MAP_TYPE_TERRAIN"] = 3] = "MAP_TYPE_TERRAIN";
})(MapType = exports.MapType || (exports.MapType = {}));
var MarkerEvent;
(function (MarkerEvent) {
    MarkerEvent[MarkerEvent["MARKER_DRAG"] = 2] = "MARKER_DRAG";
    MarkerEvent[MarkerEvent["MARKER_DRAG_END"] = 3] = "MARKER_DRAG_END";
    MarkerEvent[MarkerEvent["MARKER_DRAG_START"] = 1] = "MARKER_DRAG_START";
})(MarkerEvent = exports.MarkerEvent || (exports.MarkerEvent = {}));
var Hue;
(function (Hue) {
    Hue[Hue["HUE_GREEN"] = 120] = "HUE_GREEN";
    Hue[Hue["HUE_AZURE"] = 210] = "HUE_AZURE";
    Hue[Hue["HUE_ROSE"] = 330] = "HUE_ROSE";
    Hue[Hue["HUE_CYAN"] = 180] = "HUE_CYAN";
    Hue[Hue["HUE_ORANGE"] = 30] = "HUE_ORANGE";
    Hue[Hue["HUE_MAGENTA"] = 300] = "HUE_MAGENTA";
    Hue[Hue["HUE_VIOLET"] = 270] = "HUE_VIOLET";
    Hue[Hue["HUE_YELLOW"] = 60] = "HUE_YELLOW";
    Hue[Hue["HUE_BLUE"] = 240] = "HUE_BLUE";
    Hue[Hue["HUE_RED"] = 0] = "HUE_RED";
})(Hue = exports.Hue || (exports.Hue = {}));
var MapEvent;
(function (MapEvent) {
    MapEvent["CIRCLE_CLICK"] = "circleClick";
    MapEvent["MAP_CLICK"] = "mapClick";
    MapEvent["MAP_LONG_CLICK"] = "mapLongClick";
    MapEvent["INFO_WINDOW_CLICK"] = "infoWindowClick";
    MapEvent["CAMERA_MOVE_STARTED"] = "cameraMoveStarted";
    MapEvent["POLYGON_CLICK"] = "polygonClick";
    MapEvent["POLYLINE_CLICK"] = "polylineClick";
    MapEvent["GROUND_OVERLAY_CLICK"] = "groundOverlayClick";
    MapEvent["CAMERA_MOVE"] = "cameraMove";
    MapEvent["CAMERA_IDLE"] = "cameraIdle";
    MapEvent["MAP_LOADED"] = "mapLoaded";
    MapEvent["MARKER_CLICK"] = "markerClick";
    MapEvent["MY_LOCATION_BUTTON_CLICK"] = "myLocationButtonClick";
    MapEvent["MY_LOCATION_CLICK"] = "myLocationClick";
    MapEvent["MARKER_DRAG"] = "markerDrag";
})(MapEvent = exports.MapEvent || (exports.MapEvent = {}));
var CameraUpdateMethod;
(function (CameraUpdateMethod) {
    CameraUpdateMethod["CAMERA_POSITION"] = "newCameraPosition";
    CameraUpdateMethod["LATLNG"] = "newLatLng";
    CameraUpdateMethod["LATLNG_BOUNDS"] = "newLatLngBounds";
    CameraUpdateMethod["LATLNG_ZOOM"] = "newLatLngZoom";
    CameraUpdateMethod["SCROLL_BY"] = "scrollBy";
    CameraUpdateMethod["ZOOM_BY"] = "zoomBy";
    CameraUpdateMethod["ZOOM_IN"] = "zoomIn";
    CameraUpdateMethod["ZOOM_OUT"] = "zoomOut";
    CameraUpdateMethod["ZOOM_TO"] = "zoomTo";
})(CameraUpdateMethod = exports.CameraUpdateMethod || (exports.CameraUpdateMethod = {}));
//# sourceMappingURL=HMSMap.js.map