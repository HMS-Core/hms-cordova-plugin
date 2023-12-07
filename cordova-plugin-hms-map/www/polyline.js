/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.

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
        return (0, utils_1.getComponentOptions)("getColor", this.mapDivId, this.id);
    }
    getEndCap() {
        return this.parseCap((0, utils_1.getComponentOptions)("getEndCap", this.mapDivId, this.id));
    }
    getStartCap() {
        return this.parseCap((0, utils_1.getComponentOptions)("getStartCap", this.mapDivId, this.id));
    }
    getId() {
        return this.id;
    }
    getJointType() {
        return (0, utils_1.getComponentOptions)("getJointType", this.mapDivId, this.id);
    }
    getPattern() {
        return (0, utils_1.getComponentOptions)("getPattern", this.mapDivId, this.id);
    }
    getPoints() {
        return (0, utils_1.getComponentOptions)("getPoints", this.mapDivId, this.id);
    }
    getTag() {
        return (0, utils_1.getComponentOptions)("getTag", this.mapDivId, this.id);
    }
    getWidth() {
        return (0, utils_1.getComponentOptions)("getWidth", this.mapDivId, this.id);
    }
    getZIndex() {
        return (0, utils_1.getComponentOptions)("getZIndex", this.mapDivId, this.id);
    }
    isClickable() {
        return (0, utils_1.getComponentOptions)("isClickable", this.mapDivId, this.id);
    }
    isGeodesic() {
        return (0, utils_1.getComponentOptions)("isGeodesic", this.mapDivId, this.id);
    }
    isVisible() {
        return (0, utils_1.getComponentOptions)("isVisible", this.mapDivId, this.id);
    }
    remove() {
        return (0, utils_1.asyncExec)("HMSMap", "removeComponent", [this.mapDivId, this.id]);
    }
    setClickable(clickable) {
        return (0, utils_1.setComponentOptions)("setClickable", { clickable: clickable }, this.mapDivId, this.id);
    }
    setColor(color) {
        return (0, utils_1.setComponentOptions)("setColor", { color: color }, this.mapDivId, this.id);
    }
    setStartCap(startCap) {
        return this.setCap(startCap, "setStartCap");
    }
    setEndCap(endCap) {
        return this.setCap(endCap, "setEndCap");
    }
    setGeodesic(geodesic) {
        return (0, utils_1.setComponentOptions)("setGeodesic", { geodesic: geodesic }, this.mapDivId, this.id);
    }
    setJointType(jointType) {
        return (0, utils_1.setComponentOptions)("setJointType", { jointType: jointType, }, this.mapDivId, this.id);
    }
    setPattern(pattern) {
        return (0, utils_1.setComponentOptions)("setPattern", { pattern: pattern }, this.mapDivId, this.id);
    }
    setPoints(points) {
        return (0, utils_1.setComponentOptions)("setPoints", { points: points }, this.mapDivId, this.id);
    }
    setTag(tag) {
        return (0, utils_1.setComponentOptions)("setTag", { tag: tag }, this.mapDivId, this.id);
    }
    setVisible(visible) {
        return (0, utils_1.setComponentOptions)("setVisible", { visible: visible }, this.mapDivId, this.id);
    }
    setWidth(width) {
        return (0, utils_1.setComponentOptions)("setWidth", { width: width }, this.mapDivId, this.id);
    }
    setZIndex(zIndex) {
        return (0, utils_1.setComponentOptions)("setZIndex", { zIndex: zIndex }, this.mapDivId, this.id);
    }
    setGradient(on) {
        return (0, utils_1.setComponentOptions)("setGradient", { on: on }, this.mapDivId, this.id);
    }
    setColorValues(colors) {
        return (0, utils_1.setComponentOptions)("setColorValues", { colors: colors }, this.mapDivId, this.id);
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
        props["type"] = cap.getType();
        if (cap.getType() === Cap.TYPE_CUSTOM_CAP) {
            // Let's say custom cap
            props["bitmapDescriptor"] = cap.getBitmapDescriptor();
            if (cap.getRefWidth() !== null)
                props["refWidth"] = cap.getRefWidth();
        }
        return (0, utils_1.setComponentOptions)(methodName, { cap: props }, this.mapDivId, this.id);
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