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
"use strict";

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
exports.MapStyleOptions = exports.CameraUpdateFactory = exports.enableLogger = exports.disableLogger = exports.setApiKey = exports.computeDistanceBetween = exports.requestPermission = exports.hasPermission = exports.showMap = exports.getMap = exports.sync = exports.maps = exports.TileType = exports.PatternItemType = exports.Hue = exports.JointType = exports.MapEvent = exports.MapType = exports.Color = exports.CameraMoveStartedReason = exports.ErrorCodes = exports.InterpolatorType = exports.AnimationSet = exports.Cap = exports.SquareCap = exports.RoundCap = exports.CustomCap = exports.ButtCap = void 0;
const utils_1 = require("./utils");
const interfaces_1 = require("./interfaces");
const circle_1 = require("./circle");
const marker_1 = require("./marker");
const groundOverlay_1 = require("./groundOverlay");
const tileOverlay_1 = require("./tileOverlay");
const polygon_1 = require("./polygon");
const polyline_1 = require("./polyline");
var polyline_2 = require("./polyline");
Object.defineProperty(exports, "ButtCap", { enumerable: true, get: function () { return polyline_2.ButtCap; } });
Object.defineProperty(exports, "CustomCap", { enumerable: true, get: function () { return polyline_2.CustomCap; } });
Object.defineProperty(exports, "RoundCap", { enumerable: true, get: function () { return polyline_2.RoundCap; } });
Object.defineProperty(exports, "SquareCap", { enumerable: true, get: function () { return polyline_2.SquareCap; } });
Object.defineProperty(exports, "Cap", { enumerable: true, get: function () { return polyline_2.Cap; } });
var interfaces_2 = require("./interfaces");
Object.defineProperty(exports, "AnimationSet", { enumerable: true, get: function () { return interfaces_2.AnimationSet; } });
Object.defineProperty(exports, "InterpolatorType", { enumerable: true, get: function () { return interfaces_2.InterpolatorType; } });
Object.defineProperty(exports, "ErrorCodes", { enumerable: true, get: function () { return interfaces_2.ErrorCodes; } });
Object.defineProperty(exports, "CameraMoveStartedReason", { enumerable: true, get: function () { return interfaces_2.CameraMoveStartedReason; } });
Object.defineProperty(exports, "Color", { enumerable: true, get: function () { return interfaces_2.Color; } });
Object.defineProperty(exports, "MapType", { enumerable: true, get: function () { return interfaces_2.MapType; } });
Object.defineProperty(exports, "MapEvent", { enumerable: true, get: function () { return interfaces_2.MapEvent; } });
Object.defineProperty(exports, "JointType", { enumerable: true, get: function () { return interfaces_2.JointType; } });
Object.defineProperty(exports, "Hue", { enumerable: true, get: function () { return interfaces_2.Hue; } });
Object.defineProperty(exports, "PatternItemType", { enumerable: true, get: function () { return interfaces_2.PatternItemType; } });
Object.defineProperty(exports, "TileType", { enumerable: true, get: function () { return interfaces_2.TileType; } });
exports.maps = new Map();
function sync(mapId, mapDiv, components) {
    if (!exports.maps.has(mapId)) {
        const huaweiMap = new HuaweiMapImpl(mapDiv, mapId);
        exports.maps.set(mapId, huaweiMap);
    }
    const map = exports.maps.get(mapId);
    const hashMap = map.components;
    for (let i = 0; i < components.length; i++) {
        if (hashMap.has(components[i]['_id']))
            continue;
        let obj = null;
        let id = components[i]['_id'];
        if (components[i]['_type'] === "circle")
            obj = new circle_1.CircleImpl(mapDiv, mapId, id);
        else if (components[i]['_type'] === 'marker')
            obj = new marker_1.MarkerImpl(mapDiv, mapId, id);
        else if (components[i]['_type'] === 'polygon')
            obj = new polygon_1.PolygonImpl(mapDiv, mapId, id);
        else if (components[i]['_type'] === 'polyline')
            obj = new polyline_1.PolylineImpl(mapDiv, mapId, id);
        else if (components[i]['_type'] === 'groundOverlay')
            obj = new groundOverlay_1.GroundOverlayImpl(mapDiv, mapId, id);
        else if (components[i]['_type'] === 'tileOverlay')
            obj = new tileOverlay_1.TileOverlayImpl(mapDiv, mapId, id);
        hashMap.set(components[i]['_id'], obj);
    }
}
exports.sync = sync;
function getMap(divId, huaweiMapOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const mapElement = document.getElementById(divId);
        if (!mapElement)
            return Promise.reject(interfaces_1.ErrorCodes.toString(interfaces_1.ErrorCodes.NO_DOM_ELEMENT_FOUND));
        const initialProps = utils_1.initalPropsOf(mapElement);
        const mapId = yield utils_1.asyncExec('HMSMap', 'initMap', [divId, { 'mapOptions': huaweiMapOptions, 'initialProps': initialProps }]);
        const huaweiMap = new HuaweiMapImpl(divId, mapId);
        exports.maps.set(huaweiMap.getId(), huaweiMap);
        return huaweiMap;
    });
}
exports.getMap = getMap;
function showMap(divId) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!document.getElementById(divId))
            return Promise.reject(interfaces_1.ErrorCodes.toString(interfaces_1.ErrorCodes.NO_DOM_ELEMENT_FOUND));
        const mapId = yield utils_1.asyncExec("HMSMap", "showMap", [divId]);
        const currentMap = exports.maps.get(mapId);
        if (currentMap == undefined)
            return Promise.reject(interfaces_1.ErrorCodes.toString(interfaces_1.ErrorCodes.NO_DOM_ELEMENT_FOUND));
        currentMap.startOverlayInterval();
        currentMap.startObserver();
        return currentMap;
    });
}
exports.showMap = showMap;
function hasPermission() {
    return __awaiter(this, void 0, void 0, function* () {
        const json = yield utils_1.asyncExec("HMSMap", "hasPermission", []);
        return json.result;
    });
}
exports.hasPermission = hasPermission;
function requestPermission() {
    return __awaiter(this, void 0, void 0, function* () {
        return utils_1.asyncExec("HMSMap", "requestPermission", []);
    });
}
exports.requestPermission = requestPermission;
function computeDistanceBetween(from, to) {
    return __awaiter(this, void 0, void 0, function* () {
        return utils_1.asyncExec("HMSMap", "computeDistanceBetween", [{ "from": from, "to": to }]);
    });
}
exports.computeDistanceBetween = computeDistanceBetween;
function setApiKey(apiKey) {
    return __awaiter(this, void 0, void 0, function* () {
        return utils_1.asyncExec("HMSMap", "setApiKey", [{ "apiKey": apiKey }]);
    });
}
exports.setApiKey = setApiKey;
function disableLogger() {
    return utils_1.asyncExec('HMSMap', 'disableLogger', []);
}
exports.disableLogger = disableLogger;
function enableLogger() {
    return utils_1.asyncExec('HMSMap', 'enableLogger', []);
}
exports.enableLogger = enableLogger;
class MapOverlayCache {
    constructor(mapDivId, mapElement) {
        this.lastRectsRecord = new Map();
        this.rects = new Map();
        this.interval = -1;
        this.mapDivId = mapDivId;
        this.mapElement = mapElement;
    }
    syncWithJava() {
        /**
         * Find and send the Rect information of added/updated/deleted HTML Elements which intersects with map.
         */
        let diffToAdd = [];
        let diffToDelete = [];
        for (let [key, value] of this.rects) {
            if (!this.lastRectsRecord.has(key)) {
                diffToAdd.push(value.rect);
            }
            else {
                this.lastRectsRecord.delete(key);
            }
        }
        for (let [key, value] of this.lastRectsRecord) {
            diffToDelete.push(value.rect);
        }
        if (diffToAdd.length > 0 || diffToDelete.length > 0) {
            utils_1.asyncExec("HMSMap", "updateOverlappingHTMLElements", [this.mapDivId, diffToAdd, diffToDelete]);
        }
        this.lastRectsRecord.clear();
        this.lastRectsRecord = new Map(this.rects);
    }
    mapOverlayInterval() {
        this.fillCacheRecursively(document.body);
        this.refreshCache();
        this.syncWithJava();
    }
    refreshCache() {
        for (let [key, value] of this.rects) {
            if (!value.visited) {
                this.removeRect(key, value);
            }
            else {
                value.visited = false;
                this.rects.set(key, value);
            }
        }
    }
    removeRect(key, value) {
        if (value.count > 1) {
            value.count--;
            this.rects.set(key, value);
        }
        else {
            this.rects.delete(key);
        }
    }
    fillCacheRecursively(element) {
        for (let i = 0; i < element.children.length; i++) {
            this.fillCacheRecursively(element.children[i]);
        }
        if (element.id === this.mapDivId)
            return;
        const curr = utils_1.Rect.fromDomRect(element.getBoundingClientRect());
        const map = utils_1.Rect.fromDomRect(this.mapElement.getBoundingClientRect());
        if (map.intersects(curr) && this.isAboveMap(element)) {
            let val = this.rects.get(curr.hashCode());
            if (val == undefined) {
                this.rects.set(curr.hashCode(), { rect: curr, visited: true, count: 1 });
            }
            else {
                val.count = val.visited ? val.count + 1 : 1;
                val.visited = true;
                this.rects.set(curr.hashCode(), val);
            }
        }
    }
    isAboveMap(element) {
        const isParentOfMap = element.compareDocumentPosition(this.mapElement) & Node.DOCUMENT_POSITION_CONTAINED_BY;
        const elemZIndex = window.getComputedStyle(element).zIndex;
        if (!Boolean(isParentOfMap) && !isNaN(parseInt(elemZIndex)) && parseInt(elemZIndex) > 0)
            return true;
        const isMapCreatedBefore = element.compareDocumentPosition(this.mapElement) & Node.DOCUMENT_POSITION_PRECEDING;
        return Boolean(isMapCreatedBefore);
    }
    startInterval() {
        this.interval = setInterval(() => this.mapOverlayInterval(), 100);
    }
    stopInterval() {
        if (this.interval !== -1)
            clearInterval(this.interval);
    }
}
class MapDomChangeListener {
    constructor(mapDivId, mapElement) {
        this.mapDivId = mapDivId;
        this.mapElement = mapElement;
        this.mapDivRectCache = this.mapElement.getBoundingClientRect();
        this.mapDomChangeObserver = this.createObserver();
    }
    addWindowResizeListener() {
        window.onresize = () => { this.updateWidthAndHeight(); };
    }
    removeWindowResizeListener() {
        window.onresize = null;
    }
    createObserver() {
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
    updateWidthAndHeight() {
        const width = parseInt(window.getComputedStyle(this.mapElement, null).getPropertyValue('width'));
        const height = parseInt(window.getComputedStyle(this.mapElement, null).getPropertyValue('height'));
        if (this.mapDivRectCache.width != width || this.mapDivRectCache.height != height) {
            this.forceUpdateWidthAndHeight(width, height).then(() => {
                this.mapDivRectCache.width = width;
                this.mapDivRectCache.height = height;
            });
        }
    }
    updateXAndY() {
        const mapRect = this.mapElement.getBoundingClientRect();
        const x = mapRect.x;
        const y = mapRect.y;
        if (this.mapDivRectCache.x != x || this.mapDivRectCache.y != y) {
            this.forceUpdateXAndY(x, y).then(() => {
                this.mapDivRectCache.x = x;
                this.mapDivRectCache.y = y;
            });
        }
    }
    forceUpdateXAndY(x, y) {
        return utils_1.asyncExec("HMSMap", "forceUpdateXAndY", [this.mapDivId, x, y]);
    }
    forceUpdateWidthAndHeight(width, height) {
        return utils_1.asyncExec("HMSMap", "forceUpdateWidthAndHeight", [this.mapDivId, width, height]);
    }
}
class HuaweiMapImpl {
    constructor(divId, mapId) {
        this.components = new Map();
        console.log(`Huawei map constructed with the div id ${divId} :: and the props ${mapId}`);
        this.id = mapId;
        this.divId = divId;
        this.projection = new ProjectionImpl(divId);
        this.uiSettings = new UiSettingsImpl(divId);
        const tempElement = document.getElementById(this.divId);
        if (tempElement == null)
            throw Error(`Specified map div could not find: ${divId}`);
        this.mapElement = tempElement;
        this.overlay = new MapOverlayCache(divId, this.mapElement);
        this.mapListener = new MapDomChangeListener(divId, this.mapElement);
        this.startOverlayInterval();
        this.startObserver();
    }
    startOverlayInterval() {
        this.overlay.startInterval();
    }
    startObserver() {
        this.mapListener.startListener();
    }
    // IONIC FRAMEWORK SCROLL EVENT
    scroll() {
        if (this.mapElement == null)
            return;
        const mapRect = this.mapElement.getBoundingClientRect();
        this.forceUpdateXAndY(mapRect.x, mapRect.y);
    }
    destroyMap() {
        return __awaiter(this, void 0, void 0, function* () {
            this.components.clear();
            exports.maps.delete(this.id);
            this.overlay.stopInterval();
            this.mapListener.stopListener();
            return utils_1.asyncExec("HMSMap", "destroyMap", [this.divId]);
        });
    }
    hideMap() {
        return __awaiter(this, void 0, void 0, function* () {
            this.overlay.stopInterval();
            this.mapListener.startListener();
            return utils_1.asyncExec("HMSMap", "hideMap", [this.divId]);
        });
    }
    on(event, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const fixedFunctionNameForJavaScript = `${event}_${this.id}`;
            const fixedFunctionNameForJava = `set${event[0].toUpperCase()}${event.substr(1)}Listener`;
            return utils_1.asyncExec('HMSMap', 'mapOptions', [this.divId, 'setListener', fixedFunctionNameForJava, { 'content': callback.toString() }])
                .then(value => {
                window.subscribeHMSEvent(fixedFunctionNameForJavaScript, callback);
            }).catch(err => console.log(err));
        });
    }
    setMapPointersEnabled(mapPointersEnabled) {
        return __awaiter(this, void 0, void 0, function* () {
            return utils_1.asyncExec('HMSMap', 'setMapPointersEnabled', [this.divId, mapPointersEnabled]);
        });
    }
    isMapPointersEnabled() {
        return __awaiter(this, void 0, void 0, function* () {
            const json = yield utils_1.asyncExec('HMSMap', 'isMapPointersEnabled', [this.divId]);
            return json.result;
        });
    }
    addCircle(circleOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!circleOptions["center"])
                return Promise.reject(interfaces_1.ErrorCodes.toString(interfaces_1.ErrorCodes.CENTER_PROPERTY_MUST_DEFINED));
            const componentId = yield utils_1.asyncExec('HMSMap', 'addComponent', [this.divId, "CIRCLE", circleOptions]);
            const circle = new circle_1.CircleImpl(this.divId, this.id, componentId);
            this.components.set(circle.getId(), circle);
            return circle;
        });
    }
    addMarker(markerOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!markerOptions["position"])
                return Promise.reject(interfaces_1.ErrorCodes.toString(interfaces_1.ErrorCodes.POSITION_PROPERTY_MUST_DEFINED));
            const componentId = yield utils_1.asyncExec('HMSMap', 'addComponent', [this.divId, "MARKER", markerOptions]);
            const marker = new marker_1.MarkerImpl(this.divId, this.id, componentId);
            this.components.set(marker.getId(), marker);
            return marker;
        });
    }
    addGroundOverlay(groundOverlayOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!groundOverlayOptions["position"])
                return Promise.reject(interfaces_1.ErrorCodes.toString(interfaces_1.ErrorCodes.POSITION_PROPERTY_MUST_DEFINED));
            const componentId = yield utils_1.asyncExec('HMSMap', 'addComponent', [this.divId, "GROUND_OVERLAY", groundOverlayOptions]);
            const groundOverlay = new groundOverlay_1.GroundOverlayImpl(this.divId, this.id, componentId);
            this.components.set(groundOverlay.getId(), groundOverlay);
            return groundOverlay;
        });
    }
    addTileOverlay(tileOverlayOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const componentId = yield utils_1.asyncExec('HMSMap', 'addComponent', [this.divId, "TILE_OVERLAY", tileOverlayOptions]);
            const tileOverlay = new tileOverlay_1.TileOverlayImpl(this.divId, this.id, componentId);
            this.components.set(tileOverlay.getId(), tileOverlay);
            return tileOverlay;
        });
    }
    addPolygon(polygonOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!polygonOptions["points"])
                return Promise.reject(interfaces_1.ErrorCodes.toString(interfaces_1.ErrorCodes.POINTS_PROPERTY_MUST_DEFINED));
            const componentId = yield utils_1.asyncExec('HMSMap', 'addComponent', [this.divId, "POLYGON", polygonOptions]);
            const polygon = new polygon_1.PolygonImpl(this.divId, this.id, componentId);
            this.components.set(polygon.getId(), polygon);
            return polygon;
        });
    }
    addPolyline(polylineOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!polylineOptions["points"])
                return Promise.reject(interfaces_1.ErrorCodes.toString(interfaces_1.ErrorCodes.POINTS_PROPERTY_MUST_DEFINED));
            const componentId = yield utils_1.asyncExec('HMSMap', 'addComponent', [this.divId, "POLYLINE", polylineOptions]);
            const polyline = new polyline_1.PolylineImpl(this.divId, this.id, componentId);
            this.components.set(polyline.getId(), polyline);
            return polyline;
        });
    }
    animateCamera(cameraUpdate, cancelableCallback, durationMs) {
        const onFinishEventForJavascript = `${interfaces_1.MapEvent.ON_CANCELABLE_CALLBACK_FINISH}_${this.id}`;
        const onCancelEventForJavascript = `${interfaces_1.MapEvent.ON_CANCELABLE_CALLBACK_CANCEL}_${this.id}`;
        const props = {};
        if (cancelableCallback != undefined) {
            window.subscribeHMSEvent(onFinishEventForJavascript, cancelableCallback.onFinish);
            window.subscribeHMSEvent(onCancelEventForJavascript, cancelableCallback.onCancel);
            if (cancelableCallback.onFinish != undefined)
                props["isOnFinish"] = true;
            if (cancelableCallback.onCancel != undefined)
                props["isOnCancel"] = true;
            if (durationMs)
                props["duration"] = durationMs;
        }
        return cameraUpdate.animateCamera(this.divId, props);
    }
    moveCamera(cameraUpdate) {
        return cameraUpdate.moveCamera(this.divId);
    }
    clear() {
        this.components.clear();
        return this.getHuaweiMapOptions('clear');
    }
    resetMinMaxZoomPreference() {
        return this.getHuaweiMapOptions('resetMinMaxZoomPreference');
    }
    stopAnimation() {
        return this.getHuaweiMapOptions('stopAnimation');
    }
    getCameraPosition() {
        return this.getHuaweiMapOptions('getCameraPosition');
    }
    getMapType() {
        return this.getHuaweiMapOptions('getMapType');
    }
    getMaxZoomLevel() {
        return this.getHuaweiMapOptions('getMaxZoomLevel');
    }
    getMinZoomLevel() {
        return this.getHuaweiMapOptions('getMinZoomLevel');
    }
    getProjection() {
        return this.projection;
    }
    getUiSettings() {
        return this.uiSettings;
    }
    isBuildingsEnabled() {
        return this.getHuaweiMapOptions('isBuildingsEnabled');
    }
    isMyLocationEnabled() {
        return this.getHuaweiMapOptions('isMyLocationEnabled');
    }
    isTrafficEnabled() {
        return this.getHuaweiMapOptions('isTrafficEnabled');
    }
    isIndoorEnabled() {
        return this.getHuaweiMapOptions('isIndoorEnabled');
    }
    setBuildingsEnabled(buildingsEnabled) {
        return this.setHuaweiMapOptions('setBuildingsEnabled', { 'buildingsEnabled': buildingsEnabled });
    }
    setContentDescription(contentDescription) {
        return this.setHuaweiMapOptions('setContentDescription', { 'contentDescription': contentDescription });
    }
    setInfoWindowAdapter(infoWindowAdapter) {
        return this.setHuaweiMapOptions('setInfoWindowAdapter', { 'infoWindowAdapter': infoWindowAdapter });
    }
    setLatLngBoundsForCameraTarget(latLngBounds) {
        return this.setHuaweiMapOptions('setLatLngBoundsForCameraTarget', { 'latLngBounds': latLngBounds });
    }
    setLocationSource(locationSource) {
        return this.setHuaweiMapOptions('setLocationSource', { 'locationSource': locationSource });
    }
    setMapStyle(mapStyle) {
        return this.setHuaweiMapOptions('setMapStyle', { 'mapStyle': mapStyle.getResourceId() });
    }
    setMapType(mapType) {
        return this.setHuaweiMapOptions('setMapType', { 'mapType': mapType });
    }
    setMarkersClustering(markersClustering) {
        return this.setHuaweiMapOptions('setMarkersClustering', { 'markersClustering': markersClustering });
    }
    setMaxZoomPreference(maxZoomPreference) {
        return this.setHuaweiMapOptions('setMaxZoomPreference', { 'maxZoomPreference': maxZoomPreference });
    }
    setMinZoomPreference(minZoomPreference) {
        return this.setHuaweiMapOptions('setMinZoomPreference', { 'minZoomPreference': minZoomPreference });
    }
    setMyLocationEnabled(myLocationEnabled) {
        return this.setHuaweiMapOptions('setMyLocationEnabled', { 'myLocationEnabled': myLocationEnabled });
    }
    setPadding(left, top, right, bottom) {
        return this.setHuaweiMapOptions('setPadding', { 'left': left, 'top': top, 'right': right, 'bottom': bottom });
    }
    setTrafficEnabled(trafficEnabled) {
        return this.setHuaweiMapOptions('setTrafficEnabled', { 'trafficEnabled': trafficEnabled });
    }
    setPointToCenter(x, y) {
        return this.setHuaweiMapOptions('setPointToCenter', { 'x': x, 'y': y });
    }
    getComponent(key) {
        return this.components.get(key);
    }
    getId() {
        return this.id;
    }
    snapshot(onReadyCallback) {
        const eventName = `${interfaces_1.MapEvent.ON_SNAPSHOT_READY_CALLBACK}_${this.id}`;
        window.subscribeHMSEvent(eventName, onReadyCallback);
        return this.getHuaweiMapOptions('snapshot');
    }
    // INTERNAL INTERNAL INTERNAL
    removeComponent(key) {
        if (this.components.has(key)) {
            this.components.get(key).remove();
            this.components.delete(key);
        }
        else {
            throw interfaces_1.ErrorCodes.toString(interfaces_1.ErrorCodes.NO_COMPONENT_EXISTS_GIVEN_ID);
        }
    }
    forceUpdateXAndY(x, y) {
        return utils_1.asyncExec("HMSMap", "forceUpdateXAndY", [this.divId, x, y]);
    }
    setHuaweiMapOptions(func, props) {
        return utils_1.asyncExec("HMSMap", "mapOptions", [this.divId, 'setHuaweiMapOptions', func, props]);
    }
    getHuaweiMapOptions(func) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield utils_1.asyncExec("HMSMap", "mapOptions", [this.divId, 'getHuaweiMapOptions', func, {}]);
            return result.value;
        });
    }
}
class UiSettingsImpl {
    constructor(mapDivId) {
        this.mapDivId = mapDivId;
    }
    isCompassEnabled() {
        return this.getUiSettings('isCompassEnabled');
    }
    isIndoorLevelPickerEnabled() {
        return this.getUiSettings('isIndoorLevelPickerEnabled');
    }
    isMapToolbarEnabled() {
        return this.getUiSettings('isMapToolbarEnabled');
    }
    isMyLocationButtonEnabled() {
        return this.getUiSettings('isMyLocationButtonEnabled');
    }
    isRotateGesturesEnabled() {
        return this.getUiSettings('isRotateGesturesEnabled');
    }
    isScrollGesturesEnabled() {
        return this.getUiSettings('isScrollGesturesEnabled');
    }
    isScrollGesturesEnabledDuringRotateOrZoom() {
        return this.getUiSettings('isScrollGesturesEnabledDuringRotateOrZoom');
    }
    isTiltGesturesEnabled() {
        return this.getUiSettings('isTiltGesturesEnabled');
    }
    isZoomControlsEnabled() {
        return this.getUiSettings('isZoomControlsEnabled');
    }
    isZoomGesturesEnabled() {
        return this.getUiSettings('isZoomGesturesEnabled');
    }
    setAllGesturesEnabled(allGesturesEnabled) {
        return this.setUiSettings('setAllGesturesEnabled', { 'allGesturesEnabled': allGesturesEnabled });
    }
    setCompassEnabled(compassEnabled) {
        return this.setUiSettings('setCompassEnabled', { 'compassEnabled': compassEnabled });
    }
    setIndoorLevelPickerEnabled(indoorLevelPickerEnabled) {
        return this.setUiSettings('setIndoorLevelPickerEnabled', { 'indoorLevelPickerEnabled': indoorLevelPickerEnabled });
    }
    setMapToolbarEnabled(mapToolbarEnabled) {
        return this.setUiSettings('setMapToolbarEnabled', { 'mapToolbarEnabled': mapToolbarEnabled });
    }
    setMyLocationButtonEnabled(myLocationButtonEnabled) {
        return this.setUiSettings('setMyLocationButtonEnabled', { 'myLocationButtonEnabled': myLocationButtonEnabled });
    }
    setRotateGesturesEnabled(rotateGesturesEnabled) {
        return this.setUiSettings("setRotateGesturesEnabled", { 'rotateGesturesEnabled': rotateGesturesEnabled });
    }
    setScrollGesturesEnabled(scrollGesturesEnabled) {
        return this.setUiSettings('setScrollGesturesEnabled', { 'scrollGesturesEnabled': scrollGesturesEnabled });
    }
    setScrollGesturesEnabledDuringRotateOrZoom(scrollGesturesEnabledDuringRotateOrZoom) {
        return this.setUiSettings('setScrollGesturesEnabledDuringRotateOrZoom', { 'scrollGesturesEnabledDuringRotateOrZoom': scrollGesturesEnabledDuringRotateOrZoom });
    }
    setTiltGesturesEnabled(tiltGesturesEnabled) {
        return this.setUiSettings('setTiltGesturesEnabled', { 'tiltGesturesEnabled': tiltGesturesEnabled });
    }
    setZoomControlsEnabled(zoomControlsEnabled) {
        return this.setUiSettings('setZoomControlsEnabled', { 'zoomControlsEnabled': zoomControlsEnabled });
    }
    setZoomGesturesEnabled(zoomGesturesEnabled) {
        return this.setUiSettings('setZoomGesturesEnabled', { 'zoomGesturesEnabled': zoomGesturesEnabled });
    }
    setGestureScaleByMapCenter(gestureScaleByMapCenterEnabled) {
        return this.setUiSettings('setGestureScaleByMapCenter', { 'gestureScaleByMapCenterEnabled': gestureScaleByMapCenterEnabled });
    }
    setUiSettings(func, props) {
        return utils_1.asyncExec('HMSMap', 'mapOptions', [this.mapDivId, 'setUiSettings', func, props]);
    }
    getUiSettings(func) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield utils_1.asyncExec("HMSMap", "mapOptions", [this.mapDivId, 'getUiSettings', func, {}]);
            return result.value;
        });
    }
}
class CameraUpdateImpl {
    constructor() {
        this.event = "";
    }
    moveCamera(mapId) {
        return utils_1.asyncExec('HMSMap', 'mapOptions', [mapId, "moveCamera", this.event, this.props]);
    }
    animateCamera(mapId, props) {
        return utils_1.asyncExec('HMSMap', 'mapOptions', [mapId, "animateCamera", this.event, Object.assign(Object.assign({}, this.props), props)]);
    }
}
class CameraUpdateFactory {
    constructor() {
    }
    static newCameraPosition(cameraPosition) {
        return this.constructCameraUpdateImpl("newCameraPosition", { 'cameraPosition': cameraPosition });
    }
    static newLatLng(latLng) {
        return this.constructCameraUpdateImpl("newLatLng", { 'latLng': latLng });
    }
    static newLatLngBounds(latLngBounds, padding, width, height) {
        let props = {};
        props['bounds'] = latLngBounds;
        props['padding'] = padding;
        if (width && height) {
            props['width'] = width;
            props['height'] = height;
        }
        return this.constructCameraUpdateImpl("newLatLngBounds", props);
    }
    static newLatLngZoom(latLng, zoom) {
        return this.constructCameraUpdateImpl("newLatLngZoom", { "latLng": latLng, "zoom": zoom });
    }
    static scrollBy(xPixel, yPixel) {
        return this.constructCameraUpdateImpl("scrollBy", { 'xPixel': xPixel, 'yPixel': yPixel });
    }
    static zoomBy(amount, focus) {
        let props = {};
        props['amount'] = amount;
        if (focus)
            props['focus'] = focus;
        return this.constructCameraUpdateImpl("zoomBy", props);
    }
    static zoomIn() {
        return this.constructCameraUpdateImpl("zoomIn", {});
    }
    static zoomOut() {
        return this.constructCameraUpdateImpl("zoomOut", {});
    }
    static zoomTo(zoom) {
        return this.constructCameraUpdateImpl("zoomTo", { "zoom": zoom });
    }
    static constructCameraUpdateImpl(event, props) {
        let cameraUpdate = new CameraUpdateImpl();
        cameraUpdate.event = event;
        cameraUpdate.props = props;
        return cameraUpdate;
    }
}
exports.CameraUpdateFactory = CameraUpdateFactory;
class ProjectionImpl {
    constructor(divId) {
        this.divId = divId;
    }
    fromScreenLocation(point) {
        return utils_1.asyncExec("HMSMap", "mapOptions", [this.divId, "projections", "fromScreenLocation", { "point": point }]);
    }
    getVisibleRegion() {
        return utils_1.asyncExec("HMSMap", "mapOptions", [this.divId, "projections", "getVisibleRegion", {}]);
    }
    toScreenLocation(latLng) {
        return utils_1.asyncExec("HMSMap", "mapOptions", [this.divId, "projections", "toScreenLocation", { "latLng": latLng }]);
    }
}
class MapStyleOptions {
    constructor(resourceId) {
        this.resourceId = resourceId;
    }
    static loadRawResourceStyle(resourceId) {
        return new MapStyleOptions(resourceId);
    }
    getResourceId() {
        return this.resourceId;
    }
}
exports.MapStyleOptions = MapStyleOptions;
//# sourceMappingURL=HMSMap.js.map