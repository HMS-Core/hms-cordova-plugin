/*
    Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

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
var HmsAR = /** @class */ (function (_super) {
    __extends(HmsAR, _super);
    function HmsAR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HmsAR.prototype.requestCameraPermission = function () { return cordova(this, "requestCameraPermission", { "otherPromise": true }, arguments); };
    HmsAR.prototype.hasCameraPermission = function () { return cordova(this, "hasCameraPermission", { "otherPromise": true }, arguments); };
    HmsAR.prototype.isAREngineServiceAPKReady = function () { return cordova(this, "isAREngineServiceAPKReady", { "otherPromise": true }, arguments); };
    HmsAR.prototype.navigateToAppMarket = function () { return cordova(this, "navigateToAppMarket", { "otherPromise": true }, arguments); };
    HmsAR.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HmsAR.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HmsAR.pluginName = "HmsAR";
    HmsAR.plugin = "cordova-plugin-hms-ar";
    HmsAR.pluginRef = "HMSAR";
    HmsAR.repo = "";
    HmsAR.install = "";
    HmsAR.installVariables = [];
    HmsAR.platforms = ["Android"];
    HmsAR = __decorate([
        Injectable()
    ], HmsAR);
    return HmsAR;
}(IonicNativePlugin));
export { HmsAR };
var ARScene = /** @class */ (function () {
    function ARScene(scene, divId) {
        if (scene === "ARHand")
            this.arScene = new (HmsAR.getPlugin()).ARHandScene(divId);
        else if (scene === "ARFace")
            this.arScene = new (HmsAR.getPlugin()).ARFaceScene(divId);
        else if (scene === "ARBody")
            this.arScene = new (HmsAR.getPlugin()).ARBodyScene(divId);
        else
            this.arScene = new (HmsAR.getPlugin()).ARWorldScene(divId);
    }
    ARScene.prototype.on = function (call) {
        return this.arScene.on(call);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1hci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7O0FBRUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQVk3Qyx5QkFBaUI7Ozs7SUFHeEMsdUNBQXVCO0lBS3ZCLG1DQUFtQjtJQUtuQix5Q0FBeUI7SUFLekIsbUNBQW1CO0lBS25CLDRCQUFZO0lBS1osNkJBQWE7Ozs7Ozs7O0lBNUJKLEtBQUs7UUFEakIsVUFBVSxFQUFFO09BQ0EsS0FBSztnQkE3QmxCO0VBNkIyQixpQkFBaUI7U0FBL0IsS0FBSzs7SUF1Q2QsaUJBQVksS0FBYSxFQUFFLEtBQWE7UUFDcEMsSUFBSSxLQUFLLEtBQUssUUFBUTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM3RSxJQUFJLEtBQUssS0FBSyxRQUFRO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2xGLElBQUksS0FBSyxLQUFLLFFBQVE7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7O1lBQ2xGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsb0JBQUUsR0FBRixVQUFHLElBQStCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNELDhCQUFZLEdBQVosVUFBYSxNQUFzQixFQUFFLE1BQW9CO1FBQ3JELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDRCx5QkFBTyxHQUFQO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFDRCwyQkFBUyxHQUFULFVBQVUsTUFBcUI7UUFDM0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0Qsd0JBQU0sR0FBTjtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNqQyxDQUFDO2tCQXpGTDs7OztJQTRGaUMsK0JBQU87SUFDcEMscUJBQVksS0FBYTtlQUNyQixrQkFBTSxRQUFRLEVBQUUsS0FBSyxDQUFDO0lBQzFCLENBQUM7c0JBL0ZMO0VBNEZpQyxPQUFPOzs7SUFNUCwrQkFBTztJQUNwQyxxQkFBWSxLQUFhO2VBQ3JCLGtCQUFNLFFBQVEsRUFBRSxLQUFLLENBQUM7SUFDMUIsQ0FBQztzQkFyR0w7RUFrR2lDLE9BQU87OztJQU1QLCtCQUFPO0lBQ3BDLHFCQUFZLEtBQWE7ZUFDckIsa0JBQU0sUUFBUSxFQUFFLEtBQUssQ0FBQztJQUMxQixDQUFDO3NCQTNHTDtFQXdHaUMsT0FBTzs7O0lBTU4sZ0NBQU87SUFDckMsc0JBQVksS0FBYTtlQUNyQixrQkFBTSxTQUFTLEVBQUUsS0FBSyxDQUFDO0lBQzNCLENBQUM7dUJBakhMO0VBOEdrQyxPQUFPOztBQWlJekMsTUFBTSxDQUFOLElBQVksYUFLWDtBQUxELFdBQVksYUFBYTtJQUNyQixvRUFBa0IsQ0FBQTtJQUNsQix5REFBWSxDQUFBO0lBQ1oscURBQVUsQ0FBQTtJQUNWLHVEQUFXLENBQUE7QUFDZixDQUFDLEVBTFcsYUFBYSxLQUFiLGFBQWEsUUFLeEI7QUFFRCxNQUFNLENBQU4sSUFBWSxVQUlYO0FBSkQsV0FBWSxVQUFVO0lBQ2xCLGtFQUFvQixDQUFBO0lBQ3BCLDZEQUFpQixDQUFBO0lBQ2pCLDJEQUFnQixDQUFBO0FBQ3BCLENBQUMsRUFKVyxVQUFVLEtBQVYsVUFBVSxRQUlyQjtBQUVELE1BQU0sQ0FBTixJQUFZLGtCQU9YO0FBUEQsV0FBWSxrQkFBa0I7SUFDMUIseUVBQWUsQ0FBQTtJQUNmLHVFQUFjLENBQUE7SUFDZCx5RUFBZSxDQUFBO0lBQ2YsdUVBQWMsQ0FBQTtJQUNkLHlFQUFlLENBQUE7SUFDZiw2RUFBaUIsQ0FBQTtBQUNyQixDQUFDLEVBUFcsa0JBQWtCLEtBQWxCLGtCQUFrQixRQU83QjtBQUVELE1BQU0sQ0FBTixJQUFZLFNBS1g7QUFMRCxXQUFZLFNBQVM7SUFDakIsaUZBQTRCLENBQUE7SUFDNUIscUZBQThCLENBQUE7SUFDOUIsK0RBQW1CLENBQUE7SUFDbkIsNkRBQWtCLENBQUE7QUFDdEIsQ0FBQyxFQUxXLFNBQVMsS0FBVCxTQUFTLFFBS3BCO0FBRUQsTUFBTSxDQUFOLElBQVksc0JBTVg7QUFORCxXQUFZLHNCQUFzQjtJQUM5Qix3SEFBbUMsQ0FBQTtJQUNuQyx5SEFBbUMsQ0FBQTtJQUNuQyx1SEFBa0MsQ0FBQTtJQUNsQyx5SEFBbUMsQ0FBQTtJQUNuQywySEFBb0MsQ0FBQTtBQUN4QyxDQUFDLEVBTlcsc0JBQXNCLEtBQXRCLHNCQUFzQixRQU1qQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgICBDb3B5cmlnaHQgMjAyMC4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuXHJcbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXHJcbiAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuXHJcbiAgICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiAnSG1zQVInLFxyXG4gICAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFyJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgICBwbHVnaW5SZWY6ICdITVNBUicsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICAgIHJlcG86ICcnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXHJcbiAgICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXHJcbiAgICBpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcclxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhtc0FSIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICByZXF1ZXN0Q2FtZXJhUGVybWlzc2lvbigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGhhc0NhbWVyYVBlcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBpc0FSRW5naW5lU2VydmljZUFQS1JlYWR5KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgbmF2aWdhdGVUb0FwcE1hcmtldCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGVuYWJsZUxvZ2dlcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGRpc2FibGVMb2dnZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbn1cclxuXHJcbnR5cGUgQVJCYXNlID0gQVJIYW5kIHwgQVJGYWNlIHwgQVJCb2R5IHwgQVJQbGFuZTtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBUlNjZW5lIHtcclxuXHJcbiAgICBwcml2YXRlIGFyU2NlbmU6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogc3RyaW5nLCBkaXZJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHNjZW5lID09PSBcIkFSSGFuZFwiKSB0aGlzLmFyU2NlbmUgPSBuZXcgKEhtc0FSLmdldFBsdWdpbigpKS5BUkhhbmRTY2VuZShkaXZJZCk7XHJcbiAgICAgICAgZWxzZSBpZiAoc2NlbmUgPT09IFwiQVJGYWNlXCIpIHRoaXMuYXJTY2VuZSA9IG5ldyAoSG1zQVIuZ2V0UGx1Z2luKCkpLkFSRmFjZVNjZW5lKGRpdklkKTtcclxuICAgICAgICBlbHNlIGlmIChzY2VuZSA9PT0gXCJBUkJvZHlcIikgdGhpcy5hclNjZW5lID0gbmV3IChIbXNBUi5nZXRQbHVnaW4oKSkuQVJCb2R5U2NlbmUoZGl2SWQpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5hclNjZW5lID0gbmV3IChIbXNBUi5nZXRQbHVnaW4oKSkuQVJXb3JsZFNjZW5lKGRpdklkKTtcclxuICAgIH1cclxuXHJcbiAgICBvbihjYWxsOiAodmFsdWU6IEFSQmFzZVtdKSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJTY2VuZS5vbihjYWxsKTtcclxuICAgIH1cclxuICAgIHN0YXJ0QVJTY2VuZShjb25maWc/OiBBUlNjZW5lQ29uZmlnLCBib3VuZHM/OiBTY2VuZUJvdW5kcyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFyU2NlbmUuc3RhcnRBUlNjZW5lKGNvbmZpZywgYm91bmRzKTtcclxuICAgIH1cclxuICAgIGRlc3Ryb3koKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJTY2VuZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICBzZXRDb25maWcoY29uZmlnOiBBUlNjZW5lQ29uZmlnKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJTY2VuZS5zZXRDb25maWcoY29uZmlnKTtcclxuICAgIH1cclxuICAgIHNjcm9sbCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hclNjZW5lLnNjcm9sbCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQVJIYW5kU2NlbmUgZXh0ZW5kcyBBUlNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKGRpdklkOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihcIkFSSGFuZFwiLCBkaXZJZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBUkZhY2VTY2VuZSBleHRlbmRzIEFSU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IoZGl2SWQ6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKFwiQVJGYWNlXCIsIGRpdklkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFSQm9keVNjZW5lIGV4dGVuZHMgQVJTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihkaXZJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoXCJBUkJvZHlcIiwgZGl2SWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQVJXb3JsZFNjZW5lIGV4dGVuZHMgQVJTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihkaXZJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoXCJBUldvcmxkXCIsIGRpdklkKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yUkdCQSB7XHJcbiAgICByZWQ6IG51bWJlcjtcclxuICAgIGdyZWVuOiBudW1iZXI7XHJcbiAgICBibHVlOiBudW1iZXI7XHJcbiAgICBhbHBoYTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNjZW5lQm91bmRzIHtcclxuICAgIG1hcmdpblRvcD86IG51bWJlcixcclxuICAgIG1hcmdpbkJvdHRvbT86IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFSU2NlbmVDb25maWcge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBUkhhbmRDb25maWcgZXh0ZW5kcyBBUlNjZW5lQ29uZmlnIHtcclxuICAgIGRyYXdCb3g/OiBib29sZWFuO1xyXG4gICAgYm94Q29sb3I/OiBDb2xvclJHQkE7XHJcbiAgICBsaW5lV2lkdGg/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQVJXb3JsZENvbmZpZyBleHRlbmRzIEFSU2NlbmVDb25maWcge1xyXG4gICAgb2JqUGF0aDogc3RyaW5nO1xyXG4gICAgdGV4dHVyZVBhdGg6IHN0cmluZztcclxuICAgIGxhYmVsRHJhdz86IGJvb2xlYW47XHJcbiAgICBpbWFnZU90aGVyPzogc3RyaW5nO1xyXG4gICAgaW1hZ2VXYWxsPzogc3RyaW5nO1xyXG4gICAgaW1hZ2VGbG9vcj86IHN0cmluZztcclxuICAgIGltYWdlU2VhdD86IHN0cmluZztcclxuICAgIGltYWdlVGFibGU/OiBzdHJpbmc7XHJcbiAgICBpbWFnZUNlaWxpbmc/OiBzdHJpbmc7XHJcbiAgICB0ZXh0T3RoZXI/OiBzdHJpbmc7XHJcbiAgICB0ZXh0V2FsbD86IHN0cmluZztcclxuICAgIHRleHRGbG9vcj86IHN0cmluZztcclxuICAgIHRleHRTZWF0Pzogc3RyaW5nO1xyXG4gICAgdGV4dFRhYmxlPzogc3RyaW5nO1xyXG4gICAgdGV4dENlaWxpbmc/OiBzdHJpbmc7XHJcbiAgICBjb2xvck90aGVyPzogQ29sb3JSR0JBO1xyXG4gICAgY29sb3JXYWxsPzogQ29sb3JSR0JBO1xyXG4gICAgY29sb3JGbG9vcj86IENvbG9yUkdCQTtcclxuICAgIGNvbG9yU2VhdD86IENvbG9yUkdCQTtcclxuICAgIGNvbG9yVGFibGU/OiBDb2xvclJHQkE7XHJcbiAgICBjb2xvckNlaWxpbmc/OiBDb2xvclJHQkE7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQVJGYWNlQ29uZmlnIGV4dGVuZHMgQVJTY2VuZUNvbmZpZyB7XHJcbiAgICBwb2ludFNpemU/OiBudW1iZXI7XHJcbiAgICBkZXB0aENvbG9yPzogQ29sb3JSR0JBO1xyXG4gICAgdGV4dHVyZVBhdGg/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQVJCb2R5Q29uZmlnIGV4dGVuZHMgQVJTY2VuZUNvbmZpZyB7XHJcbiAgICBkcmF3TGluZT86IGJvb2xlYW47XHJcbiAgICBkcmF3UG9pbnQ/OiBib29sZWFuO1xyXG4gICAgbGluZVdpZHRoPzogbnVtYmVyO1xyXG4gICAgcG9pbnRTaXplPzogbnVtYmVyO1xyXG4gICAgbGluZUNvbG9yPzogQ29sb3JSR0JBO1xyXG4gICAgcG9pbnRDb2xvcj86IENvbG9yUkdCQTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEFuY2hvciB7XHJcbiAgICBwb3NlOiBBUlBvc2U7XHJcbiAgICB0cmFja2luZ1N0YXRlOiBUcmFja2luZ1N0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFSRmFjZUJsZW5kU2hhcGVzIHtcclxuICAgIGJsZW5kU2hhcGVDb3VudDogbnVtYmVyO1xyXG4gICAgYmxlbmRTaGFwZURhdGE6IG51bWJlcltdO1xyXG4gICAgYmxlbmRTaGFwZVR5cGU6IHN0cmluZ1tdO1xyXG4gICAgYmxlbmRTaGFwZURhdGFNYXA6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBUlBvc2Uge1xyXG4gICAgdHJhbnNsYXRpb246IG51bWJlcltdO1xyXG4gICAgcm90YXRpb246IG51bWJlcltdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFSSGFuZCB7XHJcbiAgICBnZXN0dXJlVHlwZTogbnVtYmVyO1xyXG4gICAgaGFuZFR5cGU6IEFSSGFuZFR5cGU7XHJcbiAgICBhbmNob3JzOiBBbmNob3JbXTtcclxuICAgIGdlc3R1cmVIYW5kQm94OiBudW1iZXJbXTtcclxuICAgIGdlc3R1cmVDZW50ZXI6IG51bWJlcltdO1xyXG4gICAgaGFuZFNrZWxldG9uQXJyYXk6IG51bWJlcltdO1xyXG4gICAgaGFuZFNrZWxldG9uQ29ubmVjdGlvbjogbnVtYmVyW107XHJcbiAgICBoYW5kU2tlbGV0b25UeXBlczogbnVtYmVyW107XHJcbiAgICBnZXN0dXJlQ29vcmRpbmF0ZVN5c3RlbTogQVJDb29yZGluYXRlU3lzdGVtVHlwZTtcclxuICAgIHNrZWxldG9uQ29vcmRpbmF0ZVN5c3RlbTogQVJDb29yZGluYXRlU3lzdGVtVHlwZTtcclxuICAgIHRyYWNraW5nU3RhdGU6IFRyYWNraW5nU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQVJQbGFuZSB7XHJcbiAgICBjZW50ZXJQb3NlOiBBUlBvc2U7XHJcbiAgICBleHRlbnRYOiBudW1iZXI7XHJcbiAgICBleHRlbnRaOiBudW1iZXI7XHJcbiAgICBwbGFuZVBvbHlnb246IG51bWJlcltdO1xyXG4gICAgbGFiZWw6IFNlbWFudGljUGxhbmVMYWJlbDtcclxuICAgIHR5cGU6IFBsYW5lVHlwZTtcclxuICAgIHRyYWNraW5nU3RhdGU6IFRyYWNraW5nU3RhdGU7XHJcbiAgICBhbmNob3JzOiBBbmNob3JbXTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQVJGYWNlIHtcclxuICAgIGFuY2hvcnM6IEFuY2hvcltdO1xyXG4gICAgZmFjZUJsZW5kU2hhcGVzOiBBUkZhY2VCbGVuZFNoYXBlcztcclxuICAgIHBvc2U6IEFSUG9zZVtdO1xyXG4gICAgdHJhY2tpbmdTdGF0ZTogVHJhY2tpbmdTdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBUkJvZHkge1xyXG4gICAgYm9keUFjdGlvbjogbnVtYmVyO1xyXG4gICAgYW5jaG9yczogQW5jaG9yW107XHJcbiAgICBib2R5U2tlbGV0b25UeXBlczogbnVtYmVyW107XHJcbiAgICBza2VsZXRvblBvaW50MkQ6IG51bWJlcltdO1xyXG4gICAgc2tlbGV0b25Qb2ludDNEOiBudW1iZXJbXTtcclxuICAgIHNrZWxldG9uQ29uZmlkaW5jZTogbnVtYmVyW107XHJcbiAgICBib2R5U2tlbGV0b25Db25uZWN0aW9uOiBudW1iZXJbXTtcclxuICAgIHNrZWxldG9uUG9pbnRJc0V4aXN0MkQ6IG51bWJlcltdO1xyXG4gICAgc2tlbGV0b25Qb2ludElzRXhpc3QzRDogbnVtYmVyW107XHJcbiAgICBjb29yZGluYXRlU3lzdGVtVHlwZTogQVJDb29yZGluYXRlU3lzdGVtVHlwZTtcclxuICAgIHRyYWNraW5nU3RhdGU6IFRyYWNraW5nU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRyYWNraW5nU3RhdGUge1xyXG4gICAgVU5LTk9XTl9TVEFURSA9IC0xLFxyXG4gICAgVFJBQ0tJTkcgPSAwLFxyXG4gICAgUEFVU0VEID0gMSxcclxuICAgIFNUT1BQRUQgPSAyXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFSSGFuZFR5cGUge1xyXG4gICAgQVJfSEFORF9VTktOT1dOID0gLTEsXHJcbiAgICBBUl9IQU5EX1JJR0hUID0gMCxcclxuICAgIEFSX0hBTkRfTEVGVCA9IDFcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU2VtYW50aWNQbGFuZUxhYmVsIHtcclxuICAgIFBMQU5FX09USEVSID0gMCxcclxuICAgIFBMQU5FX1dBTEwgPSAxLFxyXG4gICAgUExBTkVfRkxPT1IgPSAyLFxyXG4gICAgUExBTkVfU0VBVCA9IDMsXHJcbiAgICBQTEFORV9UQUJMRSA9IDQsXHJcbiAgICBQTEFORV9DRUlMSU5HID0gNVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBQbGFuZVR5cGUge1xyXG4gICAgSE9SSVpPTlRBTF9VUFdBUkRfRkFDSU5HID0gMCxcclxuICAgIEhPUklaT05UQUxfRE9XTldBUkRfRkFDSU5HID0gMSxcclxuICAgIFZFUlRJQ0FMX0ZBQ0lORyA9IDIsXHJcbiAgICBVTktOT1dOX0ZBQ0lORyA9IDNcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQVJDb29yZGluYXRlU3lzdGVtVHlwZSB7XHJcbiAgICBDT09SRElOQVRFX1NZU1RFTV9UWVBFX1VOS05PV04gPSAtMSxcclxuICAgIENPT1JESU5BVEVfU1lTVEVNX1RZUEVfM0RfV09STEQgPSAwLFxyXG4gICAgQ09PUkRJTkFURV9TWVNURU1fVFlQRV8zRF9TRUxGID0gMSxcclxuICAgIENPT1JESU5BVEVfU1lTVEVNX1RZUEVfMkRfSU1BR0UgPSAyLFxyXG4gICAgQ09PUkRJTkFURV9TWVNURU1fVFlQRV8zRF9DQU1FUkEgPSAzXHJcbn1cclxuIl19