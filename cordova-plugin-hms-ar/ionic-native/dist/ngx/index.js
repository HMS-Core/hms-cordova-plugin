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
import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HMSAR = /** @class */ (function (_super) {
    __extends(HMSAR, _super);
    function HMSAR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSAR.prototype.requestCameraPermission = function () { return cordova(this, "requestCameraPermission", { "otherPromise": true }, arguments); };
    HMSAR.prototype.hasCameraPermission = function () { return cordova(this, "hasCameraPermission", { "otherPromise": true }, arguments); };
    HMSAR.prototype.isAREngineServiceAPKReady = function () { return cordova(this, "isAREngineServiceAPKReady", { "otherPromise": true }, arguments); };
    HMSAR.prototype.navigateToAppMarket = function () { return cordova(this, "navigateToAppMarket", { "otherPromise": true }, arguments); };
    HMSAR.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HMSAR.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSAR.pluginName = "HMSAR";
    HMSAR.plugin = "cordova-plugin-hms-ar";
    HMSAR.pluginRef = "HMSAR";
    HMSAR.repo = "";
    HMSAR.install = "";
    HMSAR.installVariables = [];
    HMSAR.platforms = ["Android"];
    HMSAR = __decorate([
        Injectable()
    ], HMSAR);
    return HMSAR;
}(IonicNativePlugin));
export { HMSAR };
var ARScene = /** @class */ (function () {
    function ARScene(scene, divId) {
        if (scene === "ARHand")
            this.arScene = new (HMSAR.getPlugin()).ARHandScene(divId);
        else if (scene === "ARFace")
            this.arScene = new (HMSAR.getPlugin()).ARFaceScene(divId);
        else if (scene === "ARBody")
            this.arScene = new (HMSAR.getPlugin()).ARBodyScene(divId);
        else
            this.arScene = new (HMSAR.getPlugin()).ARWorldScene(divId);
    }
    ARScene.prototype.on = function (eventName, call) {
        return this.arScene.on(eventName, call);
    };
    ARScene.prototype.startARScene = function (config, bounds) {
        return this.arScene.startARScene(config, bounds);
    };
    ARScene.prototype.destroy = function () {
        return this.arScene.destroy();
    };
    ARScene.prototype.setConfig = function (config) {
        return this.arScene.setConfig(config);
    };
    ARScene.prototype.scroll = function () {
        return this.arScene.scroll();
    };
    return ARScene;
}());
export { ARScene };
var ARHandScene = /** @class */ (function (_super) {
    __extends(ARHandScene, _super);
    function ARHandScene(divId) {
        return _super.call(this, "ARHand", divId) || this;
    }
    return ARHandScene;
}(ARScene));
export { ARHandScene };
var ARFaceScene = /** @class */ (function (_super) {
    __extends(ARFaceScene, _super);
    function ARFaceScene(divId) {
        return _super.call(this, "ARFace", divId) || this;
    }
    return ARFaceScene;
}(ARScene));
export { ARFaceScene };
var ARBodyScene = /** @class */ (function (_super) {
    __extends(ARBodyScene, _super);
    function ARBodyScene(divId) {
        return _super.call(this, "ARBody", divId) || this;
    }
    return ARBodyScene;
}(ARScene));
export { ARBodyScene };
var ARWorldScene = /** @class */ (function (_super) {
    __extends(ARWorldScene, _super);
    function ARWorldScene(divId) {
        return _super.call(this, "ARWorld", divId) || this;
    }
    return ARWorldScene;
}(ARScene));
export { ARWorldScene };
export var HealthParameter;
(function (HealthParameter) {
    HealthParameter[HealthParameter["UNKNOWN_TYPE"] = -1] = "UNKNOWN_TYPE";
    HealthParameter[HealthParameter["PARAMETER_INVALID"] = 0] = "PARAMETER_INVALID";
    HealthParameter[HealthParameter["PARAMETER_HEART_RATE"] = 1] = "PARAMETER_HEART_RATE";
    HealthParameter[HealthParameter["PARAMETER_HEART_RATE_SNR"] = 2] = "PARAMETER_HEART_RATE_SNR";
    HealthParameter[HealthParameter["PARAMETER_HEART_RATE_CONFIDENCE"] = 3] = "PARAMETER_HEART_RATE_CONFIDENCE";
    HealthParameter[HealthParameter["PARAMETER_BREATH_RATE"] = 4] = "PARAMETER_BREATH_RATE";
    HealthParameter[HealthParameter["PARAMETER_BREATH_RATE_SNR"] = 5] = "PARAMETER_BREATH_RATE_SNR";
    HealthParameter[HealthParameter["PARAMETER_BREATH_RATE_CONFIDENCE"] = 6] = "PARAMETER_BREATH_RATE_CONFIDENCE";
    HealthParameter[HealthParameter["PARAMETER_FACE_AGE"] = 7] = "PARAMETER_FACE_AGE";
    HealthParameter[HealthParameter["PARAMETER_GENDER_MALE_WEIGHT"] = 8] = "PARAMETER_GENDER_MALE_WEIGHT";
    HealthParameter[HealthParameter["PARAMETER_GENDER_FEMALE_WEIGHT"] = 9] = "PARAMETER_GENDER_FEMALE_WEIGHT";
    HealthParameter[HealthParameter["PARAMETER_HEART_WAVE"] = 15] = "PARAMETER_HEART_WAVE";
})(HealthParameter || (HealthParameter = {}));
export var Events;
(function (Events) {
    Events["ON_DRAW_FRAME"] = "onDrawFrame";
    Events["ON_FACE_HEALTH_PROGRESS_CHANGED"] = "onFaceHealthProgressChanged";
})(Events || (Events = {}));
export var TrackingState;
(function (TrackingState) {
    TrackingState[TrackingState["UNKNOWN_STATE"] = -1] = "UNKNOWN_STATE";
    TrackingState[TrackingState["TRACKING"] = 0] = "TRACKING";
    TrackingState[TrackingState["PAUSED"] = 1] = "PAUSED";
    TrackingState[TrackingState["STOPPED"] = 2] = "STOPPED";
})(TrackingState || (TrackingState = {}));
export var ARHandType;
(function (ARHandType) {
    ARHandType[ARHandType["AR_HAND_UNKNOWN"] = -1] = "AR_HAND_UNKNOWN";
    ARHandType[ARHandType["AR_HAND_RIGHT"] = 0] = "AR_HAND_RIGHT";
    ARHandType[ARHandType["AR_HAND_LEFT"] = 1] = "AR_HAND_LEFT";
})(ARHandType || (ARHandType = {}));
export var SemanticPlaneLabel;
(function (SemanticPlaneLabel) {
    SemanticPlaneLabel[SemanticPlaneLabel["PLANE_OTHER"] = 0] = "PLANE_OTHER";
    SemanticPlaneLabel[SemanticPlaneLabel["PLANE_WALL"] = 1] = "PLANE_WALL";
    SemanticPlaneLabel[SemanticPlaneLabel["PLANE_FLOOR"] = 2] = "PLANE_FLOOR";
    SemanticPlaneLabel[SemanticPlaneLabel["PLANE_SEAT"] = 3] = "PLANE_SEAT";
    SemanticPlaneLabel[SemanticPlaneLabel["PLANE_TABLE"] = 4] = "PLANE_TABLE";
    SemanticPlaneLabel[SemanticPlaneLabel["PLANE_CEILING"] = 5] = "PLANE_CEILING";
})(SemanticPlaneLabel || (SemanticPlaneLabel = {}));
export var PlaneType;
(function (PlaneType) {
    PlaneType[PlaneType["HORIZONTAL_UPWARD_FACING"] = 0] = "HORIZONTAL_UPWARD_FACING";
    PlaneType[PlaneType["HORIZONTAL_DOWNWARD_FACING"] = 1] = "HORIZONTAL_DOWNWARD_FACING";
    PlaneType[PlaneType["VERTICAL_FACING"] = 2] = "VERTICAL_FACING";
    PlaneType[PlaneType["UNKNOWN_FACING"] = 3] = "UNKNOWN_FACING";
})(PlaneType || (PlaneType = {}));
export var ARCoordinateSystemType;
(function (ARCoordinateSystemType) {
    ARCoordinateSystemType[ARCoordinateSystemType["COORDINATE_SYSTEM_TYPE_UNKNOWN"] = -1] = "COORDINATE_SYSTEM_TYPE_UNKNOWN";
    ARCoordinateSystemType[ARCoordinateSystemType["COORDINATE_SYSTEM_TYPE_3D_WORLD"] = 0] = "COORDINATE_SYSTEM_TYPE_3D_WORLD";
    ARCoordinateSystemType[ARCoordinateSystemType["COORDINATE_SYSTEM_TYPE_3D_SELF"] = 1] = "COORDINATE_SYSTEM_TYPE_3D_SELF";
    ARCoordinateSystemType[ARCoordinateSystemType["COORDINATE_SYSTEM_TYPE_2D_IMAGE"] = 2] = "COORDINATE_SYSTEM_TYPE_2D_IMAGE";
    ARCoordinateSystemType[ARCoordinateSystemType["COORDINATE_SYSTEM_TYPE_3D_CAMERA"] = 3] = "COORDINATE_SYSTEM_TYPE_3D_CAMERA";
})(ARCoordinateSystemType || (ARCoordinateSystemType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1hci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7O0FBRUYsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLDhCQUFvQyxNQUFNLG9CQUFvQixDQUFDOztJQVkzQyx5QkFBaUI7Ozs7SUFHeEMsdUNBQXVCO0lBS3ZCLG1DQUFtQjtJQUtuQix5Q0FBeUI7SUFLekIsbUNBQW1CO0lBS25CLDRCQUFZO0lBS1osNkJBQWE7Ozs7Ozs7O0lBNUJKLEtBQUs7UUFEakIsVUFBVSxFQUFFO09BQ0EsS0FBSztnQkE3QmxCO0VBNkIyQixpQkFBaUI7U0FBL0IsS0FBSzs7SUF1Q2QsaUJBQVksS0FBYSxFQUFFLEtBQWE7UUFDcEMsSUFBSSxLQUFLLEtBQUssUUFBUTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM3RSxJQUFJLEtBQUssS0FBSyxRQUFRO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2xGLElBQUksS0FBSyxLQUFLLFFBQVE7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7O1lBQ2xGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsb0JB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Q25CLDZEQUFrQixDQUFBO0FBQ3RCLENBQUMsRUFMVyxTQUFTLEtBQVQsU0FBUyxRQUtwQjtBQUVELE1BQU0sQ0FBTixJQUFZLHNCQU1YO0FBTkQsV0FBWSxzQkFBc0I7SUFDOUIsd0hBQW1DLENBQUE7SUFDbkMseUhBQW1DLENBQUE7SUFDbkMsdUhBQWtDLENBQUE7SUFDbEMseUhBQW1DLENBQUE7SUFDbkMsMkhBQW9DLENBQUE7QUFDeEMsQ0FBQyxFQU5XLHNCQUFzQixLQUF0QixzQkFBc0IsUUFNakMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgQ29weXJpZ2h0IDIwMjAtMjAyMS4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuXHJcbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXHJcbiAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuXHJcbiAgICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW59IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6ICdITVNBUicsXHJcbiAgICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYXInLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICAgIHBsdWdpblJlZjogJ0hNU0FSJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxyXG4gICAgcmVwbzogJycsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cclxuICAgIGluc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcclxuICAgIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xyXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TQVIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcblxyXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXHJcbiAgICByZXF1ZXN0Q2FtZXJhUGVybWlzc2lvbigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXHJcbiAgICBoYXNDYW1lcmFQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7b3RoZXJQcm9taXNlOiB0cnVlfSlcclxuICAgIGlzQVJFbmdpbmVTZXJ2aWNlQVBLUmVhZHkoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxyXG4gICAgbmF2aWdhdGVUb0FwcE1hcmtldCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXHJcbiAgICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxyXG4gICAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxufVxyXG5cclxudHlwZSBBUkJhc2UgPSBBUkhhbmQgfCBBUkZhY2UgfCBBUkJvZHkgfCBBUlBsYW5lO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFSU2NlbmUge1xyXG5cclxuICAgIHByaXZhdGUgYXJTY2VuZTogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBzdHJpbmcsIGRpdklkOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoc2NlbmUgPT09IFwiQVJIYW5kXCIpIHRoaXMuYXJTY2VuZSA9IG5ldyAoSE1TQVIuZ2V0UGx1Z2luKCkpLkFSSGFuZFNjZW5lKGRpdklkKTtcclxuICAgICAgICBlbHNlIGlmIChzY2VuZSA9PT0gXCJBUkZhY2VcIikgdGhpcy5hclNjZW5lID0gbmV3IChITVNBUi5nZXRQbHVnaW4oKSkuQVJGYWNlU2NlbmUoZGl2SWQpO1xyXG4gICAgICAgIGVsc2UgaWYgKHNjZW5lID09PSBcIkFSQm9keVwiKSB0aGlzLmFyU2NlbmUgPSBuZXcgKEhNU0FSLmdldFBsdWdpbigpKS5BUkJvZHlTY2VuZShkaXZJZCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmFyU2NlbmUgPSBuZXcgKEhNU0FSLmdldFBsdWdpbigpKS5BUldvcmxkU2NlbmUoZGl2SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKGV2ZW50TmFtZTogRXZlbnRzLCBjYWxsOiAodmFsdWU6IEFSQmFzZVtdKSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJTY2VuZS5vbihldmVudE5hbWUsIGNhbGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0QVJTY2VuZShjb25maWc/OiBBUlNjZW5lQ29uZmlnLCBib3VuZHM/OiBTY2VuZUJvdW5kcyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFyU2NlbmUuc3RhcnRBUlNjZW5lKGNvbmZpZywgYm91bmRzKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFyU2NlbmUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvbmZpZyhjb25maWc6IEFSU2NlbmVDb25maWcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hclNjZW5lLnNldENvbmZpZyhjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hclNjZW5lLnNjcm9sbCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQVJIYW5kU2NlbmUgZXh0ZW5kcyBBUlNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKGRpdklkOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihcIkFSSGFuZFwiLCBkaXZJZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBUkZhY2VTY2VuZSBleHRlbmRzIEFSU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IoZGl2SWQ6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKFwiQVJGYWNlXCIsIGRpdklkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFSQm9keVNjZW5lIGV4dGVuZHMgQVJTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihkaXZJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoXCJBUkJvZHlcIiwgZGl2SWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQVJXb3JsZFNjZW5lIGV4dGVuZHMgQVJTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihkaXZJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoXCJBUldvcmxkXCIsIGRpdklkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2xvclJHQkEge1xyXG4gICAgcmVkOiBudW1iZXI7XHJcbiAgICBncmVlbjogbnVtYmVyO1xyXG4gICAgYmx1ZTogbnVtYmVyO1xyXG4gICAgYWxwaGE6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTY2VuZUJvdW5kcyB7XHJcbiAgICBtYXJnaW5Ub3A/OiBudW1iZXIsXHJcbiAgICBtYXJnaW5Cb3R0b20/OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBUlNjZW5lQ29uZmlnIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQVJIYW5kQ29uZmlnIGV4dGVuZHMgQVJTY2VuZUNvbmZpZyB7XHJcbiAgICBkcmF3Qm94PzogYm9vbGVhbjtcclxuICAgIGJveENvbG9yPzogQ29sb3JSR0JBO1xyXG4gICAgbGluZVdpZHRoPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFSV29ybGRDb25maWcgZXh0ZW5kcyBBUlNjZW5lQ29uZmlnIHtcclxuICAgIG9ialBhdGg6IHN0cmluZztcclxuICAgIHRleHR1cmVQYXRoOiBzdHJpbmc7XHJcbiAgICBsYWJlbERyYXc/OiBib29sZWFuO1xyXG4gICAgaW1hZ2VPdGhlcj86IHN0cmluZztcclxuICAgIGltYWdlV2FsbD86IHN0cmluZztcclxuICAgIGltYWdlRmxvb3I/OiBzdHJpbmc7XHJcbiAgICBpbWFnZVNlYXQ/OiBzdHJpbmc7XHJcbiAgICBpbWFnZVRhYmxlPzogc3RyaW5nO1xyXG4gICAgaW1hZ2VDZWlsaW5nPzogc3RyaW5nO1xyXG4gICAgdGV4dE90aGVyPzogc3RyaW5nO1xyXG4gICAgdGV4dFdhbGw/OiBzdHJpbmc7XHJcbiAgICB0ZXh0Rmxvb3I/OiBzdHJpbmc7XHJcbiAgICB0ZXh0U2VhdD86IHN0cmluZztcclxuICAgIHRleHRUYWJsZT86IHN0cmluZztcclxuICAgIHRleHRDZWlsaW5nPzogc3RyaW5nO1xyXG4gICAgY29sb3JPdGhlcj86IENvbG9yUkdCQTtcclxuICAgIGNvbG9yV2FsbD86IENvbG9yUkdCQTtcclxuICAgIGNvbG9yRmxvb3I/OiBDb2xvclJHQkE7XHJcbiAgICBjb2xvclNlYXQ/OiBDb2xvclJHQkE7XHJcbiAgICBjb2xvclRhYmxlPzogQ29sb3JSR0JBO1xyXG4gICAgY29sb3JDZWlsaW5nPzogQ29sb3JSR0JBO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFSRmFjZUNvbmZpZyBleHRlbmRzIEFSU2NlbmVDb25maWcge1xyXG4gICAgcG9pbnRTaXplPzogbnVtYmVyO1xyXG4gICAgZGVwdGhDb2xvcj86IENvbG9yUkdCQTtcclxuICAgIHRleHR1cmVQYXRoPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFSQm9keUNvbmZpZyBleHRlbmRzIEFSU2NlbmVDb25maWcge1xyXG4gICAgZHJhd0xpbmU/OiBib29sZWFuO1xyXG4gICAgZHJhd1BvaW50PzogYm9vbGVhbjtcclxuICAgIGxpbmVXaWR0aD86IG51bWJlcjtcclxuICAgIHBvaW50U2l6ZT86IG51bWJlcjtcclxuICAgIGxpbmVDb2xvcj86IENvbG9yUkdCQTtcclxuICAgIHBvaW50Q29sb3I/OiBDb2xvclJHQkE7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQW5jaG9yIHtcclxuICAgIHBvc2U6IEFSUG9zZTtcclxuICAgIHRyYWNraW5nU3RhdGU6IFRyYWNraW5nU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQVJGYWNlQmxlbmRTaGFwZXMge1xyXG4gICAgYmxlbmRTaGFwZUNvdW50OiBudW1iZXI7XHJcbiAgICBibGVuZFNoYXBlRGF0YTogbnVtYmVyW107XHJcbiAgICBibGVuZFNoYXBlVHlwZTogc3RyaW5nW107XHJcbiAgICBibGVuZFNoYXBlRGF0YU1hcDogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFSUG9zZSB7XHJcbiAgICB0cmFuc2xhdGlvbjogbnVtYmVyW107XHJcbiAgICByb3RhdGlvbjogbnVtYmVyW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQVJIYW5kIHtcclxuICAgIGdlc3R1cmVUeXBlOiBudW1iZXI7XHJcbiAgICBoYW5kVHlwZTogQVJIYW5kVHlwZTtcclxuICAgIGFuY2hvcnM6IEFuY2hvcltdO1xyXG4gICAgZ2VzdHVyZUhhbmRCb3g6IG51bWJlcltdO1xyXG4gICAgZ2VzdHVyZUNlbnRlcjogbnVtYmVyW107XHJcbiAgICBoYW5kU2tlbGV0b25BcnJheTogbnVtYmVyW107XHJcbiAgICBoYW5kU2tlbGV0b25Db25uZWN0aW9uOiBudW1iZXJbXTtcclxuICAgIGhhbmRTa2VsZXRvblR5cGVzOiBudW1iZXJbXTtcclxuICAgIGdlc3R1cmVDb29yZGluYXRlU3lzdGVtOiBBUkNvb3JkaW5hdGVTeXN0ZW1UeXBlO1xyXG4gICAgc2tlbGV0b25Db29yZGluYXRlU3lzdGVtOiBBUkNvb3JkaW5hdGVTeXN0ZW1UeXBlO1xyXG4gICAgdHJhY2tpbmdTdGF0ZTogVHJhY2tpbmdTdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBUlBsYW5lIHtcclxuICAgIGNlbnRlclBvc2U6IEFSUG9zZTtcclxuICAgIGV4dGVudFg6IG51bWJlcjtcclxuICAgIGV4dGVudFo6IG51bWJlcjtcclxuICAgIHBsYW5lUG9seWdvbjogbnVtYmVyW107XHJcbiAgICBsYWJlbDogU2VtYW50aWNQbGFuZUxhYmVsO1xyXG4gICAgdHlwZTogUGxhbmVUeXBlO1xyXG4gICAgdHJhY2tpbmdTdGF0ZTogVHJhY2tpbmdTdGF0ZTtcclxuICAgIGFuY2hvcnM6IEFuY2hvcltdO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBUkZhY2Uge1xyXG4gICAgYW5jaG9yczogQW5jaG9yW107XHJcbiAgICBmYWNlQmxlbmRTaGFwZXM6IEFSRmFjZUJsZW5kU2hhcGVzO1xyXG4gICAgcG9zZTogQVJQb3NlW107XHJcbiAgICB0cmFja2luZ1N0YXRlOiBUcmFja2luZ1N0YXRlO1xyXG4gICAgaGVhbHRoUGFyYW1ldGVyQ291bnQ6IG51bWJlcixcclxuICAgIGhlYWx0aFBhcmFtZXRlcnM6IE1hcDxIZWFsdGhQYXJhbWV0ZXIsIG51bWJlcj5cclxufVxyXG5cclxuZXhwb3J0IGVudW0gSGVhbHRoUGFyYW1ldGVyIHtcclxuICAgIFVOS05PV05fVFlQRSA9IC0xLFxyXG4gICAgUEFSQU1FVEVSX0lOVkFMSUQgPSAwLFxyXG4gICAgUEFSQU1FVEVSX0hFQVJUX1JBVEUgPSAxLFxyXG4gICAgUEFSQU1FVEVSX0hFQVJUX1JBVEVfU05SID0gMixcclxuICAgIFBBUkFNRVRFUl9IRUFSVF9SQVRFX0NPTkZJREVOQ0UgPSAzLFxyXG4gICAgUEFSQU1FVEVSX0JSRUFUSF9SQVRFID0gNCxcclxuICAgIFBBUkFNRVRFUl9CUkVBVEhfUkFURV9TTlIgPSA1LFxyXG4gICAgUEFSQU1FVEVSX0JSRUFUSF9SQVRFX0NPTkZJREVOQ0UgPSA2LFxyXG4gICAgUEFSQU1FVEVSX0ZBQ0VfQUdFID0gNyxcclxuICAgIFBBUkFNRVRFUl9HRU5ERVJfTUFMRV9XRUlHSFQgPSA4LFxyXG4gICAgUEFSQU1FVEVSX0dFTkRFUl9GRU1BTEVfV0VJR0hUID0gOSxcclxuICAgIFBBUkFNRVRFUl9IRUFSVF9XQVZFID0gMTVcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBUkJvZHkge1xyXG4gICAgYm9keUFjdGlvbjogbnVtYmVyO1xyXG4gICAgYW5jaG9yczogQW5jaG9yW107XHJcbiAgICBib2R5U2tlbGV0b25UeXBlczogbnVtYmVyW107XHJcbiAgICBza2VsZXRvblBvaW50MkQ6IG51bWJlcltdO1xyXG4gICAgc2tlbGV0b25Qb2ludDNEOiBudW1iZXJbXTtcclxuICAgIHNrZWxldG9uQ29uZmlkaW5jZTogbnVtYmVyW107XHJcbiAgICBib2R5U2tlbGV0b25Db25uZWN0aW9uOiBudW1iZXJbXTtcclxuICAgIHNrZWxldG9uUG9pbnRJc0V4aXN0MkQ6IG51bWJlcltdO1xyXG4gICAgc2tlbGV0b25Qb2ludElzRXhpc3QzRDogbnVtYmVyW107XHJcbiAgICBjb29yZGluYXRlU3lzdGVtVHlwZTogQVJDb29yZGluYXRlU3lzdGVtVHlwZTtcclxuICAgIHRyYWNraW5nU3RhdGU6IFRyYWNraW5nU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEV2ZW50cyB7XHJcbiAgICBPTl9EUkFXX0ZSQU1FID0gXCJvbkRyYXdGcmFtZVwiLFxyXG4gICAgT05fRkFDRV9IRUFMVEhfUFJPR1JFU1NfQ0hBTkdFRCA9IFwib25GYWNlSGVhbHRoUHJvZ3Jlc3NDaGFuZ2VkXCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVHJhY2tpbmdTdGF0ZSB7XHJcbiAgICBVTktOT1dOX1NUQVRFID0gLTEsXHJcbiAgICBUUkFDS0lORyA9IDAsXHJcbiAgICBQQVVTRUQgPSAxLFxyXG4gICAgU1RPUFBFRCA9IDJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQVJIYW5kVHlwZSB7XHJcbiAgICBBUl9IQU5EX1VOS05PV04gPSAtMSxcclxuICAgIEFSX0hBTkRfUklHSFQgPSAwLFxyXG4gICAgQVJfSEFORF9MRUZUID0gMVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBTZW1hbnRpY1BsYW5lTGFiZWwge1xyXG4gICAgUExBTkVfT1RIRVIgPSAwLFxyXG4gICAgUExBTkVfV0FMTCA9IDEsXHJcbiAgICBQTEFORV9GTE9PUiA9IDIsXHJcbiAgICBQTEFORV9TRUFUID0gMyxcclxuICAgIFBMQU5FX1RBQkxFID0gNCxcclxuICAgIFBMQU5FX0NFSUxJTkcgPSA1XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBsYW5lVHlwZSB7XHJcbiAgICBIT1JJWk9OVEFMX1VQV0FSRF9GQUNJTkcgPSAwLFxyXG4gICAgSE9SSVpPTlRBTF9ET1dOV0FSRF9GQUNJTkcgPSAxLFxyXG4gICAgVkVSVElDQUxfRkFDSU5HID0gMixcclxuICAgIFVOS05PV05fRkFDSU5HID0gM1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBBUkNvb3JkaW5hdGVTeXN0ZW1UeXBlIHtcclxuICAgIENPT1JESU5BVEVfU1lTVEVNX1RZUEVfVU5LTk9XTiA9IC0xLFxyXG4gICAgQ09PUkRJTkFURV9TWVNURU1fVFlQRV8zRF9XT1JMRCA9IDAsXHJcbiAgICBDT09SRElOQVRFX1NZU1RFTV9UWVBFXzNEX1NFTEYgPSAxLFxyXG4gICAgQ09PUkRJTkFURV9TWVNURU1fVFlQRV8yRF9JTUFHRSA9IDIsXHJcbiAgICBDT09SRElOQVRFX1NZU1RFTV9UWVBFXzNEX0NBTUVSQSA9IDNcclxufVxyXG4iXX0=