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

const utils = require('./utils');

// ////////////////////////////////////////////////////////////////////////////////////////////////
// State
// ////////////////////////////////////////////////////////////////////////////////////////////////

const mapViews = new Map();

// ////////////////////////////////////////////////////////////////////////////////////////////////j
// UTILS
// ////////////////////////////////////////////////////////////////////////////////////////////////

const handleDisplacement = event => {
    for (let [mapId, huaweiMap] of mapViews) {
        const mapRect = huaweiMap.element.getBoundingClientRect();

        if (huaweiMap.props.x === mapRect.x && huaweiMap.props.y === mapRect.y) {
            continue;
        }

        huaweiMap.props.x = mapRect.x;
        huaweiMap.props.y = mapRect.y;

        utils.asyncExec('HMSMap', null, 'setMapViewProps', [mapId, huaweiMap.props]);
    }
};

// ////////////////////////////////////////////////////////////////////////////////////////////////
// Global watchers
// ////////////////////////////////////////////////////////////////////////////////////////////////

const mutationObserver = new MutationObserver(handleDisplacement);
mutationObserver.observe(document.body, {attributes: true, childList: true, subtree: true});
window.addEventListener('scroll', handleDisplacement);

// ////////////////////////////////////////////////////////////////////////////////////////////////
// CallableObj
// ////////////////////////////////////////////////////////////////////////////////////////////////

const CallableObj = function (mapId, obj) {
    this.mapId = mapId;

    // Extend this with all the keys of obj
    Object.keys(obj).forEach(key => {
        this[key] = obj[key];
    });

    // Expose all the functions
    if (this.__functions) {
        this.__functions.forEach(funcName => {
            this[funcName] = (arg, arg2) => {
                let fixedArg = arg;
                if (funcName === 'set' && utils.isString(arg)) {
                    fixedArg = {[arg]: arg2}
                }
                return this.call(funcName, fixedArg);
            }
        });
    }

    return this;
};

CallableObj.prototype.call = function (funcName, arg) {
    return utils.asyncExec('HMSMap', null, 'dispatchFunction', [this.mapId, funcName, this, arg == null ? {} : arg]);
};

const dispatcher = async (mapId, promise) => {
    const result = await promise;
    if (!utils.isObject(result) || !result.hasOwnProperty("__objectType")) {
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

const HuaweiMap = function () {
    return this;
};

HuaweiMap.prototype.init = function (id, initialProps) {
    this.id = id;
    this.element = document.getElementById(id);
    this.props = initialProps;

    this.__refreshProps();

    const mutationObserver = new MutationObserver(this.__handleMutation);
    mutationObserver.observe(this.element, {attributes: true});

    mapViews.set(id, this);
    return this.dispatch(utils.asyncExec('HMSMap', null, 'initMap', [id, this.props]));
};

HuaweiMap.prototype.__refreshProps = function () {
    const elemRect = this.element.getBoundingClientRect();
    const elemStyle = window.getComputedStyle(this.element, null);

    this.props.x = elemRect.x;
    this.props.y = elemRect.y;
    this.props.width = parseInt(elemStyle.getPropertyValue("width"));
    this.props.height = parseInt(elemStyle.getPropertyValue("height"));
    this.props.paddingLeft = parseInt(elemStyle.getPropertyValue("padding-left"));
    this.props.paddingTop = parseInt(elemStyle.getPropertyValue("padding-top"));
    this.props.borderLeft = parseInt(elemStyle.getPropertyValue("border-left-width"));
    this.props.borderTop = parseInt(elemStyle.getPropertyValue("border-top-width"));

    return this.props;
};

HuaweiMap.prototype.__handleMutation = function (mutationRecords) {
    return utils.asyncExec('HMSMap', null, 'setMapViewProps', [this.id, this.__refreshProps()]);
};

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
HuaweiMap.prototype.set = function (propName, value) {
    let propsObj = propName;
    if (utils.isString(propName)) {
        propsObj = {[propName]: value};
    }
    return this.dispatch(utils.asyncExec('HMSMap', null, 'setProps', [this.id, propsObj]));
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
HuaweiMap.prototype.get = async function (propName) {
    const props = await this.dispatch(utils.asyncExec('HMSMap', null, 'getProps', [this.id]));

    if (typeof propName === 'undefined' || propName === 'all') {
        return props;
    }

    return props[propName];
};

/**
  * Register a map event.
*/
HuaweiMap.prototype.on = function (eventName, handler) {
    const instanceEventName = `${eventName}-${this.id}`;
    unregisterHMSEvent(instanceEventName); // Remove old handler
    registerHMSEvent(instanceEventName, async (result, result2) => {
        if (result) {
            handler(await this.dispatch(result));
        }

        if (result2) {
            handler(await this.dispatch(result), await this.dispatch(result2));
        }
    });
    return this.dispatch(utils.asyncExec('HMSMap', null, 'registerEvent', [this.id, eventName]));
};

HuaweiMap.prototype.dispatch = function (obj) {
    return dispatcher(this.id, obj);
};

// ////////////////////////////////////////////////////////////////////////////////////////////////
// Type definitions for type checker
// ////////////////////////////////////////////////////////////////////////////////////////////////

const TypeLatLng = {
    'lat!': 'float',
    'lng!': 'float'
};

const TypePatternItem = {
    type: 'integer',
    'length!': 'float'
};

const TypeAnchor = {
    'u!': 'float',
    'v!': 'double'
};

const TypeBitmap = {
    hue: 'float',
    asset: 'string',
    fileName: 'string',
    path: 'string'
};

const TypeLatLngBounds = {
    'southwest!': TypeLatLng,
    'northeast!': TypeLatLng
};

// Possible combinations are:
// - width height latLng
// - width latLng
// - latLngBounds
// No way to check for this for now.
const TypePosition = {
    width: 'float',
    height: 'float',
    latLng: TypeLatLng,
    latLngBounds: TypeLatLngBounds
};

const TypeCap = {
    'type!': 'integer',
    refWidth: 'float',
    bitmapDescriptor: TypeBitmap
};

const TypeCircleOptions = {
    center: TypeLatLng,
    clickable: 'boolean',
    fillColor: 'integer',
    radius: 'double',
    strokeWidth: 'float',
    strokePattern: TypePatternItem,
    visible: 'boolean',
    zIndex: 'float'
};

const TypeGroundOverlayOptions = {
    anchor: TypeAnchor,
    bearing: 'double',
    clickable: 'boolean',
    'image!': TypeBitmap,
    visible: 'boolean',
    transparency: 'float',
    zIndex: 'float',
    'position!': TypePosition
};

const TypeMarkerOptions = {
    anchorMarker: TypeAnchor,
    infoWindowAnchor: TypeAnchor,
    alpha: 'float',
    clusterable: 'boolean',
    draggable: 'boolean',
    icon: TypeBitmap,
    flat: 'boolean',
    position: TypeLatLng,
    rotation: 'float',
    snippet: 'string',
    title: 'string',
    visible: 'boolean',
    zIndex: 'float'
};

const TypePolygonOptions = {
    points: utils.arrayOf(TypeLatLng),
    holes: utils.arrayOf(utils.arrayOf(TypeLatLng)),
    clickable: 'boolean',
    geodesic: 'boolean',
    fillColor: 'integer',
    strokeColor: 'integer',
    strokeJointType: 'integer',
    strokeWidth: 'float',
    visible: 'boolean',
    zIndex: 'float'
};

const TypePolylineOptions = {
    points: utils.arrayOf(TypeLatLng),
    clickable: 'boolean',
    color: 'integer',
    endCap: TypeCap,
    startCap: TypeCap,
    geodesic: 'boolean',
    jointType: 'integer',
    visible: 'boolean',
    zIndex: 'float'
};

const TypeComputeDistance = {
    from: TypeLatLng,
    to: TypeLatLng
};

const TypeCameraUpdate = {
    'method!': 'string',
    // ... Other stuff depends on the method
};

const actions = [
    {name: 'addCircle', type: [TypeCircleOptions]},
    {name: 'addGroundOverlay', type: [TypeGroundOverlayOptions]},
    {name: 'addMarker', type: [TypeMarkerOptions]},
    {name: 'addPolygon', type: [TypePolygonOptions]},
    {name: 'addPolyline', type: [TypePolylineOptions]},
    {name: 'animateCamera', type: [TypeCameraUpdate]},
    {name: 'moveCamera', type: [TypeCameraUpdate]},
    {name: 'resetMinMaxZoomPreference', type: []},
    {name: 'clear', type: []}
];

actions.forEach(funcInfo => {
    HuaweiMap.prototype[funcInfo.name] = function (arg) {
        return this.dispatch(utils.asyncExec('HMSMap', [null, null, ...funcInfo.type], 'runAction', [this.id, funcInfo.name, arg]));
    };
});

// ////////////////////////////////////////////////////////////////////////////////////////////////
// Public functions
// ////////////////////////////////////////////////////////////////////////////////////////////////

const HMSMap = function () {
      console.log("HMSMap instanced");
};

HMSMap.prototype.init = function () {
    return utils.asyncExec('HMSMap', null, 'init', []);
};

HMSMap.prototype.create = async function (id, initialProps) {
    const huaweiMap = new HuaweiMap();
    await huaweiMap.init(id, initialProps);
    return huaweiMap;
};

// ////////////////////////////////////////////////////////////////////////////////////////////////
// Utility functions
// ////////////////////////////////////////////////////////////////////////////////////////////////

const staticFunctions = [
    {name: 'computeDistanceBetween', type: [TypeComputeDistance]},
    {name: 'hasLocationPermission', type: null},
    {name: 'requestLocationPermission', type: null}
];

staticFunctions.forEach(funcInfo => {
    HMSMap.prototype[funcInfo.name] = function (arg) {
        return utils.asyncExec('HMSMap', funcInfo.type, 'executeStatic', [funcInfo.name, arg == null ? {} : arg]);
    };
});

// ////////////////////////////////////////////////////////////////////////////////////////////////
// Export functions
// ////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = new HMSMap();

