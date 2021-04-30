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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HMSAROriginal = /** @class */ (function (_super) {
    __extends(HMSAROriginal, _super);
    function HMSAROriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSAROriginal.prototype.requestCameraPermission = function () { return cordova(this, "requestCameraPermission", { "otherPromise": true }, arguments); };
    HMSAROriginal.prototype.hasCameraPermission = function () { return cordova(this, "hasCameraPermission", { "otherPromise": true }, arguments); };
    HMSAROriginal.prototype.isAREngineServiceAPKReady = function () { return cordova(this, "isAREngineServiceAPKReady", { "otherPromise": true }, arguments); };
    HMSAROriginal.prototype.navigateToAppMarket = function () { return cordova(this, "navigateToAppMarket", { "otherPromise": true }, arguments); };
    HMSAROriginal.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HMSAROriginal.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSAROriginal.pluginName = "HMSAR";
    HMSAROriginal.plugin = "cordova-plugin-hms-ar";
    HMSAROriginal.pluginRef = "HMSAR";
    HMSAROriginal.repo = "";
    HMSAROriginal.install = "";
    HMSAROriginal.installVariables = [];
    HMSAROriginal.platforms = ["Android"];
    return HMSAROriginal;
}(IonicNativePlugin));
var HMSAR = new HMSAROriginal();
export { HMSAR };
var ARScene = /** @class */ (function () {
    function ARScene(scene, divId) {
        if (scene === "ARHand")
            this.arScene = new (HMSAROriginal.getPlugin()).ARHandScene(divId);
        else if (scene === "ARFace")
            this.arScene = new (HMSAROriginal.getPlugin()).ARFaceScene(divId);
        else if (scene === "ARBody")
            this.arScene = new (HMSAROriginal.getPlugin()).ARBodyScene(divId);
        else
            this.arScene = new (HMSAROriginal.getPlugin()).ARWorldScene(divId);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1hci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBaUJBLE9BQU8sOEJBQW9DLE1BQU0sb0JBQW9CLENBQUM7O0lBWTNDLHlCQUFpQjs7OztJQUd4Qyx1Q0FBdUI7SUFLdkIsbUNBQW1CO0lBS25CLHlDQUF5QjtJQUt6QixtQ0FBbUI7SUFLbkIsNEJBQVk7SUFLWiw2QkFBYTs7Ozs7Ozs7Z0JBekRqQjtFQTZCMkIsaUJBQWlCO1NBQS9CLEtBQUs7O0lBdUNkLGlCQUFZLEtBQWEsRUFBRSxLQUFhO1FBQ3BDLElBQUksS0FBSyxLQUFLLFFBQVE7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDN0UsSUFBSSxLQUFLLEtBQUssUUFBUTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNsRixJQUFJLEtBQUssS0FBSyxRQUFRO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOztZQUNsRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELG9CQUFFLEdBQUYsVUFBRyxTQUFpQixFQUFFLElBQStCO1FBQ2pELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFD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O0lBQzlCLHdIQUFtQyxDQUFBO0lBQ25DLHlIQUFtQyxDQUFBO0lBQ25DLHVIQUFrQyxDQUFBO0lBQ2xDLHlIQUFtQyxDQUFBO0lBQ25DLDJIQUFvQyxDQUFBO0FBQ3hDLENBQUMsRUFOVyxzQkFBc0IsS0FBdEIsc0JBQXNCLFFBTWpDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIENvcHlyaWdodCAyMDIwLTIwMjEuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxyXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2lufSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiAnSE1TQVInLFxyXG4gICAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFyJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgICBwbHVnaW5SZWY6ICdITVNBUicsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICAgIHJlcG86ICcnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXHJcbiAgICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXHJcbiAgICBpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcclxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0FSIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG5cclxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxyXG4gICAgcmVxdWVzdENhbWVyYVBlcm1pc3Npb24oKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxyXG4gICAgaGFzQ2FtZXJhUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXHJcbiAgICBpc0FSRW5naW5lU2VydmljZUFQS1JlYWR5KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7b3RoZXJQcm9taXNlOiB0cnVlfSlcclxuICAgIG5hdmlnYXRlVG9BcHBNYXJrZXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxyXG4gICAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7b3RoZXJQcm9taXNlOiB0cnVlfSlcclxuICAgIGRpc2FibGVMb2dnZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbn1cclxuXHJcbnR5cGUgQVJCYXNlID0gQVJIYW5kIHwgQVJGYWNlIHwgQVJCb2R5IHwgQVJQbGFuZTtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBUlNjZW5lIHtcclxuXHJcbiAgICBwcml2YXRlIGFyU2NlbmU6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogc3RyaW5nLCBkaXZJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHNjZW5lID09PSBcIkFSSGFuZFwiKSB0aGlzLmFyU2NlbmUgPSBuZXcgKEhNU0FSLmdldFBsdWdpbigpKS5BUkhhbmRTY2VuZShkaXZJZCk7XHJcbiAgICAgICAgZWxzZSBpZiAoc2NlbmUgPT09IFwiQVJGYWNlXCIpIHRoaXMuYXJTY2VuZSA9IG5ldyAoSE1TQVIuZ2V0UGx1Z2luKCkpLkFSRmFjZVNjZW5lKGRpdklkKTtcclxuICAgICAgICBlbHNlIGlmIChzY2VuZSA9PT0gXCJBUkJvZHlcIikgdGhpcy5hclNjZW5lID0gbmV3IChITVNBUi5nZXRQbHVnaW4oKSkuQVJCb2R5U2NlbmUoZGl2SWQpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5hclNjZW5lID0gbmV3IChITVNBUi5nZXRQbHVnaW4oKSkuQVJXb3JsZFNjZW5lKGRpdklkKTtcclxuICAgIH1cclxuXHJcbiAgICBvbihldmVudE5hbWU6IEV2ZW50cywgY2FsbDogKHZhbHVlOiBBUkJhc2VbXSkgPT4gdm9pZCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFyU2NlbmUub24oZXZlbnROYW1lLCBjYWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEFSU2NlbmUoY29uZmlnPzogQVJTY2VuZUNvbmZpZywgYm91bmRzPzogU2NlbmVCb3VuZHMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hclNjZW5lLnN0YXJ0QVJTY2VuZShjb25maWcsIGJvdW5kcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hclNjZW5lLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb25maWcoY29uZmlnOiBBUlNjZW5lQ29uZmlnKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJTY2VuZS5zZXRDb25maWcoY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGwoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJTY2VuZS5zY3JvbGwoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFSSGFuZFNjZW5lIGV4dGVuZHMgQVJTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihkaXZJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoXCJBUkhhbmRcIiwgZGl2SWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQVJGYWNlU2NlbmUgZXh0ZW5kcyBBUlNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKGRpdklkOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihcIkFSRmFjZVwiLCBkaXZJZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBUkJvZHlTY2VuZSBleHRlbmRzIEFSU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IoZGl2SWQ6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKFwiQVJCb2R5XCIsIGRpdklkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFSV29ybGRTY2VuZSBleHRlbmRzIEFSU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IoZGl2SWQ6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKFwiQVJXb3JsZFwiLCBkaXZJZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sb3JSR0JBIHtcclxuICAgIHJlZDogbnVtYmVyO1xyXG4gICAgZ3JlZW46IG51bWJlcjtcclxuICAgIGJsdWU6IG51bWJlcjtcclxuICAgIGFscGhhOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2NlbmVCb3VuZHMge1xyXG4gICAgbWFyZ2luVG9wPzogbnVtYmVyLFxyXG4gICAgbWFyZ2luQm90dG9tPzogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQVJTY2VuZUNvbmZpZyB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFSSGFuZENvbmZpZyBleHRlbmRzIEFSU2NlbmVDb25maWcge1xyXG4gICAgZHJhd0JveD86IGJvb2xlYW47XHJcbiAgICBib3hDb2xvcj86IENvbG9yUkdCQTtcclxuICAgIGxpbmVXaWR0aD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBUldvcmxkQ29uZmlnIGV4dGVuZHMgQVJTY2VuZUNvbmZpZyB7XHJcbiAgICBvYmpQYXRoOiBzdHJpbmc7XHJcbiAgICB0ZXh0dXJlUGF0aDogc3RyaW5nO1xyXG4gICAgbGFiZWxEcmF3PzogYm9vbGVhbjtcclxuICAgIGltYWdlT3RoZXI/OiBzdHJpbmc7XHJcbiAgICBpbWFnZVdhbGw/OiBzdHJpbmc7XHJcbiAgICBpbWFnZUZsb29yPzogc3RyaW5nO1xyXG4gICAgaW1hZ2VTZWF0Pzogc3RyaW5nO1xyXG4gICAgaW1hZ2VUYWJsZT86IHN0cmluZztcclxuICAgIGltYWdlQ2VpbGluZz86IHN0cmluZztcclxuICAgIHRleHRPdGhlcj86IHN0cmluZztcclxuICAgIHRleHRXYWxsPzogc3RyaW5nO1xyXG4gICAgdGV4dEZsb29yPzogc3RyaW5nO1xyXG4gICAgdGV4dFNlYXQ/OiBzdHJpbmc7XHJcbiAgICB0ZXh0VGFibGU/OiBzdHJpbmc7XHJcbiAgICB0ZXh0Q2VpbGluZz86IHN0cmluZztcclxuICAgIGNvbG9yT3RoZXI/OiBDb2xvclJHQkE7XHJcbiAgICBjb2xvcldhbGw/OiBDb2xvclJHQkE7XHJcbiAgICBjb2xvckZsb29yPzogQ29sb3JSR0JBO1xyXG4gICAgY29sb3JTZWF0PzogQ29sb3JSR0JBO1xyXG4gICAgY29sb3JUYWJsZT86IENvbG9yUkdCQTtcclxuICAgIGNvbG9yQ2VpbGluZz86IENvbG9yUkdCQTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBUkZhY2VDb25maWcgZXh0ZW5kcyBBUlNjZW5lQ29uZmlnIHtcclxuICAgIHBvaW50U2l6ZT86IG51bWJlcjtcclxuICAgIGRlcHRoQ29sb3I/OiBDb2xvclJHQkE7XHJcbiAgICB0ZXh0dXJlUGF0aD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBUkJvZHlDb25maWcgZXh0ZW5kcyBBUlNjZW5lQ29uZmlnIHtcclxuICAgIGRyYXdMaW5lPzogYm9vbGVhbjtcclxuICAgIGRyYXdQb2ludD86IGJvb2xlYW47XHJcbiAgICBsaW5lV2lkdGg/OiBudW1iZXI7XHJcbiAgICBwb2ludFNpemU/OiBudW1iZXI7XHJcbiAgICBsaW5lQ29sb3I/OiBDb2xvclJHQkE7XHJcbiAgICBwb2ludENvbG9yPzogQ29sb3JSR0JBO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFuY2hvciB7XHJcbiAgICBwb3NlOiBBUlBvc2U7XHJcbiAgICB0cmFja2luZ1N0YXRlOiBUcmFja2luZ1N0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFSRmFjZUJsZW5kU2hhcGVzIHtcclxuICAgIGJsZW5kU2hhcGVDb3VudDogbnVtYmVyO1xyXG4gICAgYmxlbmRTaGFwZURhdGE6IG51bWJlcltdO1xyXG4gICAgYmxlbmRTaGFwZVR5cGU6IHN0cmluZ1tdO1xyXG4gICAgYmxlbmRTaGFwZURhdGFNYXA6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBUlBvc2Uge1xyXG4gICAgdHJhbnNsYXRpb246IG51bWJlcltdO1xyXG4gICAgcm90YXRpb246IG51bWJlcltdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFSSGFuZCB7XHJcbiAgICBnZXN0dXJlVHlwZTogbnVtYmVyO1xyXG4gICAgaGFuZFR5cGU6IEFSSGFuZFR5cGU7XHJcbiAgICBhbmNob3JzOiBBbmNob3JbXTtcclxuICAgIGdlc3R1cmVIYW5kQm94OiBudW1iZXJbXTtcclxuICAgIGdlc3R1cmVDZW50ZXI6IG51bWJlcltdO1xyXG4gICAgaGFuZFNrZWxldG9uQXJyYXk6IG51bWJlcltdO1xyXG4gICAgaGFuZFNrZWxldG9uQ29ubmVjdGlvbjogbnVtYmVyW107XHJcbiAgICBoYW5kU2tlbGV0b25UeXBlczogbnVtYmVyW107XHJcbiAgICBnZXN0dXJlQ29vcmRpbmF0ZVN5c3RlbTogQVJDb29yZGluYXRlU3lzdGVtVHlwZTtcclxuICAgIHNrZWxldG9uQ29vcmRpbmF0ZVN5c3RlbTogQVJDb29yZGluYXRlU3lzdGVtVHlwZTtcclxuICAgIHRyYWNraW5nU3RhdGU6IFRyYWNraW5nU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQVJQbGFuZSB7XHJcbiAgICBjZW50ZXJQb3NlOiBBUlBvc2U7XHJcbiAgICBleHRlbnRYOiBudW1iZXI7XHJcbiAgICBleHRlbnRaOiBudW1iZXI7XHJcbiAgICBwbGFuZVBvbHlnb246IG51bWJlcltdO1xyXG4gICAgbGFiZWw6IFNlbWFudGljUGxhbmVMYWJlbDtcclxuICAgIHR5cGU6IFBsYW5lVHlwZTtcclxuICAgIHRyYWNraW5nU3RhdGU6IFRyYWNraW5nU3RhdGU7XHJcbiAgICBhbmNob3JzOiBBbmNob3JbXTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQVJGYWNlIHtcclxuICAgIGFuY2hvcnM6IEFuY2hvcltdO1xyXG4gICAgZmFjZUJsZW5kU2hhcGVzOiBBUkZhY2VCbGVuZFNoYXBlcztcclxuICAgIHBvc2U6IEFSUG9zZVtdO1xyXG4gICAgdHJhY2tpbmdTdGF0ZTogVHJhY2tpbmdTdGF0ZTtcclxuICAgIGhlYWx0aFBhcmFtZXRlckNvdW50OiBudW1iZXIsXHJcbiAgICBoZWFsdGhQYXJhbWV0ZXJzOiBNYXA8SGVhbHRoUGFyYW1ldGVyLCBudW1iZXI+XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEhlYWx0aFBhcmFtZXRlciB7XHJcbiAgICBVTktOT1dOX1RZUEUgPSAtMSxcclxuICAgIFBBUkFNRVRFUl9JTlZBTElEID0gMCxcclxuICAgIFBBUkFNRVRFUl9IRUFSVF9SQVRFID0gMSxcclxuICAgIFBBUkFNRVRFUl9IRUFSVF9SQVRFX1NOUiA9IDIsXHJcbiAgICBQQVJBTUVURVJfSEVBUlRfUkFURV9DT05GSURFTkNFID0gMyxcclxuICAgIFBBUkFNRVRFUl9CUkVBVEhfUkFURSA9IDQsXHJcbiAgICBQQVJBTUVURVJfQlJFQVRIX1JBVEVfU05SID0gNSxcclxuICAgIFBBUkFNRVRFUl9CUkVBVEhfUkFURV9DT05GSURFTkNFID0gNixcclxuICAgIFBBUkFNRVRFUl9GQUNFX0FHRSA9IDcsXHJcbiAgICBQQVJBTUVURVJfR0VOREVSX01BTEVfV0VJR0hUID0gOCxcclxuICAgIFBBUkFNRVRFUl9HRU5ERVJfRkVNQUxFX1dFSUdIVCA9IDksXHJcbiAgICBQQVJBTUVURVJfSEVBUlRfV0FWRSA9IDE1XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQVJCb2R5IHtcclxuICAgIGJvZHlBY3Rpb246IG51bWJlcjtcclxuICAgIGFuY2hvcnM6IEFuY2hvcltdO1xyXG4gICAgYm9keVNrZWxldG9uVHlwZXM6IG51bWJlcltdO1xyXG4gICAgc2tlbGV0b25Qb2ludDJEOiBudW1iZXJbXTtcclxuICAgIHNrZWxldG9uUG9pbnQzRDogbnVtYmVyW107XHJcbiAgICBza2VsZXRvbkNvbmZpZGluY2U6IG51bWJlcltdO1xyXG4gICAgYm9keVNrZWxldG9uQ29ubmVjdGlvbjogbnVtYmVyW107XHJcbiAgICBza2VsZXRvblBvaW50SXNFeGlzdDJEOiBudW1iZXJbXTtcclxuICAgIHNrZWxldG9uUG9pbnRJc0V4aXN0M0Q6IG51bWJlcltdO1xyXG4gICAgY29vcmRpbmF0ZVN5c3RlbVR5cGU6IEFSQ29vcmRpbmF0ZVN5c3RlbVR5cGU7XHJcbiAgICB0cmFja2luZ1N0YXRlOiBUcmFja2luZ1N0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBFdmVudHMge1xyXG4gICAgT05fRFJBV19GUkFNRSA9IFwib25EcmF3RnJhbWVcIixcclxuICAgIE9OX0ZBQ0VfSEVBTFRIX1BST0dSRVNTX0NIQU5HRUQgPSBcIm9uRmFjZUhlYWx0aFByb2dyZXNzQ2hhbmdlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRyYWNraW5nU3RhdGUge1xyXG4gICAgVU5LTk9XTl9TVEFURSA9IC0xLFxyXG4gICAgVFJBQ0tJTkcgPSAwLFxyXG4gICAgUEFVU0VEID0gMSxcclxuICAgIFNUT1BQRUQgPSAyXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFSSGFuZFR5cGUge1xyXG4gICAgQVJfSEFORF9VTktOT1dOID0gLTEsXHJcbiAgICBBUl9IQU5EX1JJR0hUID0gMCxcclxuICAgIEFSX0hBTkRfTEVGVCA9IDFcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU2VtYW50aWNQbGFuZUxhYmVsIHtcclxuICAgIFBMQU5FX09USEVSID0gMCxcclxuICAgIFBMQU5FX1dBTEwgPSAxLFxyXG4gICAgUExBTkVfRkxPT1IgPSAyLFxyXG4gICAgUExBTkVfU0VBVCA9IDMsXHJcbiAgICBQTEFORV9UQUJMRSA9IDQsXHJcbiAgICBQTEFORV9DRUlMSU5HID0gNVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBQbGFuZVR5cGUge1xyXG4gICAgSE9SSVpPTlRBTF9VUFdBUkRfRkFDSU5HID0gMCxcclxuICAgIEhPUklaT05UQUxfRE9XTldBUkRfRkFDSU5HID0gMSxcclxuICAgIFZFUlRJQ0FMX0ZBQ0lORyA9IDIsXHJcbiAgICBVTktOT1dOX0ZBQ0lORyA9IDNcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQVJDb29yZGluYXRlU3lzdGVtVHlwZSB7XHJcbiAgICBDT09SRElOQVRFX1NZU1RFTV9UWVBFX1VOS05PV04gPSAtMSxcclxuICAgIENPT1JESU5BVEVfU1lTVEVNX1RZUEVfM0RfV09STEQgPSAwLFxyXG4gICAgQ09PUkRJTkFURV9TWVNURU1fVFlQRV8zRF9TRUxGID0gMSxcclxuICAgIENPT1JESU5BVEVfU1lTVEVNX1RZUEVfMkRfSU1BR0UgPSAyLFxyXG4gICAgQ09PUkRJTkFURV9TWVNURU1fVFlQRV8zRF9DQU1FUkEgPSAzXHJcbn1cclxuIl19
