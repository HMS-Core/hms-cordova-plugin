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
var HmsAROriginal = /** @class */ (function (_super) {
    __extends(HmsAROriginal, _super);
    function HmsAROriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HmsAROriginal.prototype.requestCameraPermission = function () { return cordova(this, "requestCameraPermission", { "otherPromise": true }, arguments); };
    HmsAROriginal.prototype.hasCameraPermission = function () { return cordova(this, "hasCameraPermission", { "otherPromise": true }, arguments); };
    HmsAROriginal.prototype.isAREngineServiceAPKReady = function () { return cordova(this, "isAREngineServiceAPKReady", { "otherPromise": true }, arguments); };
    HmsAROriginal.prototype.navigateToAppMarket = function () { return cordova(this, "navigateToAppMarket", { "otherPromise": true }, arguments); };
    HmsAROriginal.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HmsAROriginal.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HmsAROriginal.pluginName = "HmsAR";
    HmsAROriginal.plugin = "cordova-plugin-hms-ar";
    HmsAROriginal.pluginRef = "HMSAR";
    HmsAROriginal.repo = "";
    HmsAROriginal.install = "";
    HmsAROriginal.installVariables = [];
    HmsAROriginal.platforms = ["Android"];
    return HmsAROriginal;
}(IonicNativePlugin));
var HmsAR = new HmsAROriginal();
export { HmsAR };
var ARScene = /** @class */ (function () {
    function ARScene(scene, divId) {
        if (scene === "ARHand")
            this.arScene = new (HmsAROriginal.getPlugin()).ARHandScene(divId);
        else if (scene === "ARFace")
            this.arScene = new (HmsAROriginal.getPlugin()).ARFaceScene(divId);
        else if (scene === "ARBody")
            this.arScene = new (HmsAROriginal.getPlugin()).ARBodyScene(divId);
        else
            this.arScene = new (HmsAROriginal.getPlugin()).ARWorldScene(divId);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1hci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBaUJBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBWTdDLHlCQUFpQjs7OztJQUd4Qyx1Q0FBdUI7SUFLdkIsbUNBQW1CO0lBS25CLHlDQUF5QjtJQUt6QixtQ0FBbUI7SUFLbkIsNEJBQVk7SUFLWiw2QkFBYTs7Ozs7Ozs7Z0JBekRqQjtFQTZCMkIsaUJBQWlCO1NBQS9CLEtBQUs7O0lBdUNkLGlCQUFZLEtBQWEsRUFBRSxLQUFhO1FBQ3BDLElBQUksS0FBSyxLQUFLLFFBQVE7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDN0UsSUFBSSxLQUFLLEtBQUssUUFBUTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNsRixJQUFJLEtBQUssS0FBSyxRQUFRO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOztZQUNsRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELG9CQUFFLEdBQUYsVUFBRyxJQUErQjtRQUM5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDRCw4QkFBWSxHQUFaLFVBQWEsTUFBc0IsRUFBRSxNQUFvQjtRQUNyRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0QseUJBQU8sR0FBUDtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsMkJBQVMsR0FBVCxVQUFVLE1BQXFCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNELHdCQUFNLEdBQU47UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakMsQ0FBQztrQkF6Rkw7Ozs7SUE0RmlDLCtCQUFPO0lBQ3BDLHFCQUFZLEtBQWE7ZUFDckIsa0JBQU0sUUFBUSxFQUFFLEtBQUssQ0FBQztJQUMxQixDQUFDO3NCQS9GTDtFQTRGaUMsT0FBTzs7O0lBTVAsK0JBQU87SUFDcEMscUJBQVksS0FBYTtlQUNyQixrQkFBTSxRQUFRLEVBQUUsS0FBSyxDQUFDO0lBQzFCLENBQUM7c0JBckdMO0VBa0dpQyxPQUFPOzs7SUFNUCwrQkFBTztJQUNwQyxxQkFBWSxLQUFhO2VBQ3JCLGtCQUFNLFFBQVEsRUFBRSxLQUFLLENBQUM7SUFDMUIsQ0FBQztzQkEzR0w7RUF3R2lDLE9BQU87OztJQU1OLGdDQUFPO0lBQ3JDLHNCQUFZLEtBQWE7ZUFDckIsa0JBQU0sU0FBUyxFQUFFLEtBQUssQ0FBQztJQUMzQixDQUFDO3VCQWpITDtFQThHa0MsT0FBTzs7QUFpSXpDLE1BQU0sQ0FBTixJQUFZLGFBS1g7QUFMRCxXQUFZLGFBQWE7SUFDckIsb0VBQWtCLENBQUE7SUFDbEIseURBQVksQ0FBQTtJQUNaLHFEQUFVLENBQUE7SUFDVix1REFBVyxDQUFBO0FBQ2YsQ0FBQyxFQUxXLGFBQWEsS0FBYixhQUFhLFFBS3hCO0FBRUQsTUFBTSxDQUFOLElBQVksVUFJWDtBQUpELFdBQVksVUFBVTtJQUNsQixrRUFBb0IsQ0FBQTtJQUNwQiw2REFBaUIsQ0FBQTtJQUNqQiwyREFBZ0IsQ0FBQTtBQUNwQixDQUFDLEVBSlcsVUFBVSxLQUFWLFVBQVUsUUFJckI7QUFFRCxNQUFNLENBQU4sSUFBWSxrQkFPWDtBQVBELFdBQVksa0JBQWtCO0lBQzFCLHlFQUFlLENBQUE7SUFDZix1RUFBYyxDQUFBO0lBQ2QseUVBQWUsQ0FBQTtJQUNmLHVFQUFjLENBQUE7SUFDZCx5RUFBZSxDQUFBO0lBQ2YsNkVBQWlCLENBQUE7QUFDckIsQ0FBQyxFQVBXLGtCQUFrQixLQUFsQixrQkFBa0IsUUFPN0I7QUFFRCxNQUFNLENBQU4sSUFBWSxTQUtYO0FBTEQsV0FBWSxTQUFTO0lBQ2pCLGlGQUE0QixDQUFBO0lBQzVCLHFGQUE4QixDQUFBO0lBQzlCLCtEQUFtQixDQUFBO0lBQ25CLDZEQUFrQixDQUFBO0FBQ3RCLENBQUMsRUFMVyxTQUFTLEtBQVQsU0FBUyxRQUtwQjtBQUVELE1BQU0sQ0FBTixJQUFZLHNCQU1YO0FBTkQsV0FBWSxzQkFBc0I7SUFDOUIsd0hBQW1DLENBQUE7SUFDbkMseUhBQW1DLENBQUE7SUFDbkMsdUhBQWtDLENBQUE7SUFDbEMseUhBQW1DLENBQUE7SUFDbkMsMkhBQW9DLENBQUE7QUFDeEMsQ0FBQyxFQU5XLHNCQUFzQixLQUF0QixzQkFBc0IsUUFNakMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgQ29weXJpZ2h0IDIwMjAuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxyXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbkBQbHVnaW4oe1xyXG4gICAgcGx1Z2luTmFtZTogJ0htc0FSJyxcclxuICAgIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hcicsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gICAgcGx1Z2luUmVmOiAnSE1TQVInLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgICByZXBvOiAnJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxyXG4gICAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xyXG4gICAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXHJcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIbXNBUiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgcmVxdWVzdENhbWVyYVBlcm1pc3Npb24oKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBoYXNDYW1lcmFQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgaXNBUkVuZ2luZVNlcnZpY2VBUEtSZWFkeSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIG5hdmlnYXRlVG9BcHBNYXJrZXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBkaXNhYmxlTG9nZ2VyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG59XHJcblxyXG50eXBlIEFSQmFzZSA9IEFSSGFuZCB8IEFSRmFjZSB8IEFSQm9keSB8IEFSUGxhbmU7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQVJTY2VuZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBhclNjZW5lOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IHN0cmluZywgZGl2SWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChzY2VuZSA9PT0gXCJBUkhhbmRcIikgdGhpcy5hclNjZW5lID0gbmV3IChIbXNBUi5nZXRQbHVnaW4oKSkuQVJIYW5kU2NlbmUoZGl2SWQpO1xyXG4gICAgICAgIGVsc2UgaWYgKHNjZW5lID09PSBcIkFSRmFjZVwiKSB0aGlzLmFyU2NlbmUgPSBuZXcgKEhtc0FSLmdldFBsdWdpbigpKS5BUkZhY2VTY2VuZShkaXZJZCk7XHJcbiAgICAgICAgZWxzZSBpZiAoc2NlbmUgPT09IFwiQVJCb2R5XCIpIHRoaXMuYXJTY2VuZSA9IG5ldyAoSG1zQVIuZ2V0UGx1Z2luKCkpLkFSQm9keVNjZW5lKGRpdklkKTtcclxuICAgICAgICBlbHNlIHRoaXMuYXJTY2VuZSA9IG5ldyAoSG1zQVIuZ2V0UGx1Z2luKCkpLkFSV29ybGRTY2VuZShkaXZJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgb24oY2FsbDogKHZhbHVlOiBBUkJhc2VbXSkgPT4gdm9pZCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFyU2NlbmUub24oY2FsbCk7XHJcbiAgICB9XHJcbiAgICBzdGFydEFSU2NlbmUoY29uZmlnPzogQVJTY2VuZUNvbmZpZywgYm91bmRzPzogU2NlbmVCb3VuZHMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hclNjZW5lLnN0YXJ0QVJTY2VuZShjb25maWcsIGJvdW5kcyk7XHJcbiAgICB9XHJcbiAgICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFyU2NlbmUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgc2V0Q29uZmlnKGNvbmZpZzogQVJTY2VuZUNvbmZpZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFyU2NlbmUuc2V0Q29uZmlnKGNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBzY3JvbGwoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJTY2VuZS5zY3JvbGwoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFSSGFuZFNjZW5lIGV4dGVuZHMgQVJTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihkaXZJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoXCJBUkhhbmRcIiwgZGl2SWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQVJGYWNlU2NlbmUgZXh0ZW5kcyBBUlNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKGRpdklkOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihcIkFSRmFjZVwiLCBkaXZJZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBUkJvZHlTY2VuZSBleHRlbmRzIEFSU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IoZGl2SWQ6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKFwiQVJCb2R5XCIsIGRpdklkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFSV29ybGRTY2VuZSBleHRlbmRzIEFSU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IoZGl2SWQ6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKFwiQVJXb3JsZFwiLCBkaXZJZCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDb2xvclJHQkEge1xyXG4gICAgcmVkOiBudW1iZXI7XHJcbiAgICBncmVlbjogbnVtYmVyO1xyXG4gICAgYmx1ZTogbnVtYmVyO1xyXG4gICAgYWxwaGE6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTY2VuZUJvdW5kcyB7XHJcbiAgICBtYXJnaW5Ub3A/OiBudW1iZXIsXHJcbiAgICBtYXJnaW5Cb3R0b20/OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBUlNjZW5lQ29uZmlnIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQVJIYW5kQ29uZmlnIGV4dGVuZHMgQVJTY2VuZUNvbmZpZyB7XHJcbiAgICBkcmF3Qm94PzogYm9vbGVhbjtcclxuICAgIGJveENvbG9yPzogQ29sb3JSR0JBO1xyXG4gICAgbGluZVdpZHRoPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFSV29ybGRDb25maWcgZXh0ZW5kcyBBUlNjZW5lQ29uZmlnIHtcclxuICAgIG9ialBhdGg6IHN0cmluZztcclxuICAgIHRleHR1cmVQYXRoOiBzdHJpbmc7XHJcbiAgICBsYWJlbERyYXc/OiBib29sZWFuO1xyXG4gICAgaW1hZ2VPdGhlcj86IHN0cmluZztcclxuICAgIGltYWdlV2FsbD86IHN0cmluZztcclxuICAgIGltYWdlRmxvb3I/OiBzdHJpbmc7XHJcbiAgICBpbWFnZVNlYXQ/OiBzdHJpbmc7XHJcbiAgICBpbWFnZVRhYmxlPzogc3RyaW5nO1xyXG4gICAgaW1hZ2VDZWlsaW5nPzogc3RyaW5nO1xyXG4gICAgdGV4dE90aGVyPzogc3RyaW5nO1xyXG4gICAgdGV4dFdhbGw/OiBzdHJpbmc7XHJcbiAgICB0ZXh0Rmxvb3I/OiBzdHJpbmc7XHJcbiAgICB0ZXh0U2VhdD86IHN0cmluZztcclxuICAgIHRleHRUYWJsZT86IHN0cmluZztcclxuICAgIHRleHRDZWlsaW5nPzogc3RyaW5nO1xyXG4gICAgY29sb3JPdGhlcj86IENvbG9yUkdCQTtcclxuICAgIGNvbG9yV2FsbD86IENvbG9yUkdCQTtcclxuICAgIGNvbG9yRmxvb3I/OiBDb2xvclJHQkE7XHJcbiAgICBjb2xvclNlYXQ/OiBDb2xvclJHQkE7XHJcbiAgICBjb2xvclRhYmxlPzogQ29sb3JSR0JBO1xyXG4gICAgY29sb3JDZWlsaW5nPzogQ29sb3JSR0JBO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFSRmFjZUNvbmZpZyBleHRlbmRzIEFSU2NlbmVDb25maWcge1xyXG4gICAgcG9pbnRTaXplPzogbnVtYmVyO1xyXG4gICAgZGVwdGhDb2xvcj86IENvbG9yUkdCQTtcclxuICAgIHRleHR1cmVQYXRoPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFSQm9keUNvbmZpZyBleHRlbmRzIEFSU2NlbmVDb25maWcge1xyXG4gICAgZHJhd0xpbmU/OiBib29sZWFuO1xyXG4gICAgZHJhd1BvaW50PzogYm9vbGVhbjtcclxuICAgIGxpbmVXaWR0aD86IG51bWJlcjtcclxuICAgIHBvaW50U2l6ZT86IG51bWJlcjtcclxuICAgIGxpbmVDb2xvcj86IENvbG9yUkdCQTtcclxuICAgIHBvaW50Q29sb3I/OiBDb2xvclJHQkE7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBbmNob3Ige1xyXG4gICAgcG9zZTogQVJQb3NlO1xyXG4gICAgdHJhY2tpbmdTdGF0ZTogVHJhY2tpbmdTdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBUkZhY2VCbGVuZFNoYXBlcyB7XHJcbiAgICBibGVuZFNoYXBlQ291bnQ6IG51bWJlcjtcclxuICAgIGJsZW5kU2hhcGVEYXRhOiBudW1iZXJbXTtcclxuICAgIGJsZW5kU2hhcGVUeXBlOiBzdHJpbmdbXTtcclxuICAgIGJsZW5kU2hhcGVEYXRhTWFwOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQVJQb3NlIHtcclxuICAgIHRyYW5zbGF0aW9uOiBudW1iZXJbXTtcclxuICAgIHJvdGF0aW9uOiBudW1iZXJbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBUkhhbmQge1xyXG4gICAgZ2VzdHVyZVR5cGU6IG51bWJlcjtcclxuICAgIGhhbmRUeXBlOiBBUkhhbmRUeXBlO1xyXG4gICAgYW5jaG9yczogQW5jaG9yW107XHJcbiAgICBnZXN0dXJlSGFuZEJveDogbnVtYmVyW107XHJcbiAgICBnZXN0dXJlQ2VudGVyOiBudW1iZXJbXTtcclxuICAgIGhhbmRTa2VsZXRvbkFycmF5OiBudW1iZXJbXTtcclxuICAgIGhhbmRTa2VsZXRvbkNvbm5lY3Rpb246IG51bWJlcltdO1xyXG4gICAgaGFuZFNrZWxldG9uVHlwZXM6IG51bWJlcltdO1xyXG4gICAgZ2VzdHVyZUNvb3JkaW5hdGVTeXN0ZW06IEFSQ29vcmRpbmF0ZVN5c3RlbVR5cGU7XHJcbiAgICBza2VsZXRvbkNvb3JkaW5hdGVTeXN0ZW06IEFSQ29vcmRpbmF0ZVN5c3RlbVR5cGU7XHJcbiAgICB0cmFja2luZ1N0YXRlOiBUcmFja2luZ1N0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFSUGxhbmUge1xyXG4gICAgY2VudGVyUG9zZTogQVJQb3NlO1xyXG4gICAgZXh0ZW50WDogbnVtYmVyO1xyXG4gICAgZXh0ZW50WjogbnVtYmVyO1xyXG4gICAgcGxhbmVQb2x5Z29uOiBudW1iZXJbXTtcclxuICAgIGxhYmVsOiBTZW1hbnRpY1BsYW5lTGFiZWw7XHJcbiAgICB0eXBlOiBQbGFuZVR5cGU7XHJcbiAgICB0cmFja2luZ1N0YXRlOiBUcmFja2luZ1N0YXRlO1xyXG4gICAgYW5jaG9yczogQW5jaG9yW107XHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFSRmFjZSB7XHJcbiAgICBhbmNob3JzOiBBbmNob3JbXTtcclxuICAgIGZhY2VCbGVuZFNoYXBlczogQVJGYWNlQmxlbmRTaGFwZXM7XHJcbiAgICBwb3NlOiBBUlBvc2VbXTtcclxuICAgIHRyYWNraW5nU3RhdGU6IFRyYWNraW5nU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQVJCb2R5IHtcclxuICAgIGJvZHlBY3Rpb246IG51bWJlcjtcclxuICAgIGFuY2hvcnM6IEFuY2hvcltdO1xyXG4gICAgYm9keVNrZWxldG9uVHlwZXM6IG51bWJlcltdO1xyXG4gICAgc2tlbGV0b25Qb2ludDJEOiBudW1iZXJbXTtcclxuICAgIHNrZWxldG9uUG9pbnQzRDogbnVtYmVyW107XHJcbiAgICBza2VsZXRvbkNvbmZpZGluY2U6IG51bWJlcltdO1xyXG4gICAgYm9keVNrZWxldG9uQ29ubmVjdGlvbjogbnVtYmVyW107XHJcbiAgICBza2VsZXRvblBvaW50SXNFeGlzdDJEOiBudW1iZXJbXTtcclxuICAgIHNrZWxldG9uUG9pbnRJc0V4aXN0M0Q6IG51bWJlcltdO1xyXG4gICAgY29vcmRpbmF0ZVN5c3RlbVR5cGU6IEFSQ29vcmRpbmF0ZVN5c3RlbVR5cGU7XHJcbiAgICB0cmFja2luZ1N0YXRlOiBUcmFja2luZ1N0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBUcmFja2luZ1N0YXRlIHtcclxuICAgIFVOS05PV05fU1RBVEUgPSAtMSxcclxuICAgIFRSQUNLSU5HID0gMCxcclxuICAgIFBBVVNFRCA9IDEsXHJcbiAgICBTVE9QUEVEID0gMlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBBUkhhbmRUeXBlIHtcclxuICAgIEFSX0hBTkRfVU5LTk9XTiA9IC0xLFxyXG4gICAgQVJfSEFORF9SSUdIVCA9IDAsXHJcbiAgICBBUl9IQU5EX0xFRlQgPSAxXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFNlbWFudGljUGxhbmVMYWJlbCB7XHJcbiAgICBQTEFORV9PVEhFUiA9IDAsXHJcbiAgICBQTEFORV9XQUxMID0gMSxcclxuICAgIFBMQU5FX0ZMT09SID0gMixcclxuICAgIFBMQU5FX1NFQVQgPSAzLFxyXG4gICAgUExBTkVfVEFCTEUgPSA0LFxyXG4gICAgUExBTkVfQ0VJTElORyA9IDVcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUGxhbmVUeXBlIHtcclxuICAgIEhPUklaT05UQUxfVVBXQVJEX0ZBQ0lORyA9IDAsXHJcbiAgICBIT1JJWk9OVEFMX0RPV05XQVJEX0ZBQ0lORyA9IDEsXHJcbiAgICBWRVJUSUNBTF9GQUNJTkcgPSAyLFxyXG4gICAgVU5LTk9XTl9GQUNJTkcgPSAzXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFSQ29vcmRpbmF0ZVN5c3RlbVR5cGUge1xyXG4gICAgQ09PUkRJTkFURV9TWVNURU1fVFlQRV9VTktOT1dOID0gLTEsXHJcbiAgICBDT09SRElOQVRFX1NZU1RFTV9UWVBFXzNEX1dPUkxEID0gMCxcclxuICAgIENPT1JESU5BVEVfU1lTVEVNX1RZUEVfM0RfU0VMRiA9IDEsXHJcbiAgICBDT09SRElOQVRFX1NZU1RFTV9UWVBFXzJEX0lNQUdFID0gMixcclxuICAgIENPT1JESU5BVEVfU1lTVEVNX1RZUEVfM0RfQ0FNRVJBID0gM1xyXG59XHJcbiJdfQ==