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
exports.CustomCap = exports.SquareCap = exports.RoundCap = exports.ButtCap = exports.Cap = exports.PolylineImpl = void 0;
const utils_1 = require("./utils");
class PolylineImpl {
    constructor(mapDivId, mapCapsuleId, componentId) {
        this.mapDivId = mapDivId;
        this.mapCapsuleId = mapCapsuleId;
        this.id = componentId;
    }
    getColor() {
        return this.getComponentOptions('getColor');
    }
    getEndCap() {
        return this.parseCap(this.getComponentOptions('getEndCap'));
    }
    getStartCap() {
        return this.parseCap(this.getComponentOptions('getStartCap'));
    }
    getId() {
        return this.id;
    }
    getJointType() {
        return this.getComponentOptions('getJointType');
    }
    getPattern() {
        return this.getComponentOptions('getPattern');
    }
    getPoints() {
        return this.getComponentOptions('getPoints');
    }
    getTag() {
        return this.getComponentOptions('getTag');
    }
    getWidth() {
        return this.getComponentOptions('getWidth');
    }
    getZIndex() {
        return this.getComponentOptions('getZIndex');
    }
    isClickable() {
        return this.getComponentOptions('isClickable');
    }
    isGeodesic() {
        return this.getComponentOptions('isGeodesic');
    }
    isVisible() {
        return this.getComponentOptions('isVisible');
    }
    remove() {
        return utils_1.asyncExec("HMSMap", "removeComponent", [this.mapDivId, this.id]);
    }
    setClickable(clickable) {
        return this.setComponentOptions("setClickable", { "clickable": clickable });
    }
    setColor(color) {
        return this.setComponentOptions("setColor", { "color": color });
    }
    setStartCap(startCap) {
        return this.setCap(startCap, 'setStartCap');
    }
    setEndCap(endCap) {
        return this.setCap(endCap, 'setEndCap');
    }
    setGeodesic(geodesic) {
        return this.setComponentOptions("setGeodesic", { "geodesic": geodesic });
    }
    setJointType(jointType) {
        return this.setComponentOptions("setJointType", { "jointType": jointType });
    }
    setPattern(pattern) {
        return this.setComponentOptions("setPattern", { "pattern": pattern });
    }
    setPoints(points) {
        return this.setComponentOptions("setPoints", { "points": points });
    }
    setTag(tag) {
        return this.setComponentOptions("setTag", { "tag": tag });
    }
    setVisible(visible) {
        return this.setComponentOptions("setVisible", { "visible": visible });
    }
    setWidth(width) {
        return this.setComponentOptions("setWidth", { "width": width });
    }
    setZIndex(zIndex) {
        return this.setComponentOptions("setZIndex", { "zIndex": zIndex });
    }
    setComponentOptions(func, params) {
        return utils_1.asyncExec('HMSMap', 'componentOptions', [this.mapDivId, this.id, 'set', func, params]);
    }
    getComponentOptions(func) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield utils_1.asyncExec("HMSMap", "componentOptions", [this.mapDivId, this.id, 'get', func, {}]);
            return result.value;
        });
    }
    // TODO: Don't forget to parse cap when get method triggered.
    parseCap(promise) {
        return __awaiter(this, void 0, void 0, function* () {
            const value = yield promise;
            if (value.type === Cap.TYPE_BUTT_CAP)
                return new ButtCap();
            else if (value.type === Cap.TYPE_SQUARE_CAP)
                return new SquareCap();
            else if (value.type === Cap.TYPE_ROUND_CAP)
                return new RoundCap();
            return new CustomCap(value.bitmapDescriptor, value.refWidth);
        });
    }
    setCap(cap, methodName) {
        let props = {};
        props['type'] = cap.getType();
        if (cap.getType() === Cap.TYPE_CUSTOM_CAP) { // Let's say custom cap
            props['bitmapDescriptor'] = cap.getBitmapDescriptor();
            if (cap.getRefWidth() !== null)
                props['refWidth'] = cap.getRefWidth();
        }
        return this.setComponentOptions(methodName, { 'cap': props });
    }
}
exports.PolylineImpl = PolylineImpl;
class Cap {
    constructor() {
        this.type = -1;
        this.refWidth = -1;
        this.bitmapDescriptor = {};
    }
    getType() {
        return this.type;
    }
}
exports.Cap = Cap;
Cap.TYPE_BUTT_CAP = 0;
Cap.TYPE_SQUARE_CAP = 1;
Cap.TYPE_ROUND_CAP = 2;
Cap.TYPE_CUSTOM_CAP = 3;
class ButtCap extends Cap {
    constructor() {
        super();
        this.type = 0;
    }
}
exports.ButtCap = ButtCap;
class RoundCap extends Cap {
    constructor() {
        super();
        this.type = 2;
    }
}
exports.RoundCap = RoundCap;
class SquareCap extends Cap {
    constructor() {
        super();
        this.type = 1;
    }
}
exports.SquareCap = SquareCap;
class CustomCap extends Cap {
    constructor(bitmapDescriptor, refWidth) {
        super();
        this.type = 3;
        this.bitmapDescriptor = bitmapDescriptor;
        this.refWidth = refWidth;
    }
    getRefWidth() {
        return this.refWidth == null ? -1 : this.refWidth;
    }
    getBitmapDescriptor() {
        return this.bitmapDescriptor == undefined ? {} : this.bitmapDescriptor;
    }
}
exports.CustomCap = CustomCap;
//# sourceMappingURL=polyline.js.map