/*
    Copyright 2023-2024. Huawei Technologies Co., Ltd. All rights reserved.

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
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from "@awesome-cordova-plugins/core";
var HMSMLBodyPluginOriginal = /** @class */ (function (_super) {
    __extends(HMSMLBodyPluginOriginal, _super);
    function HMSMLBodyPluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adjusts the focal length of the camera based on the scaling coefficient (digital zoom).
     * @param  {doZoomReq} doZoomReq Reperesents the necessary parameters.
     * @returns Promise<any>
     */
    HMSMLBodyPluginOriginal.prototype.doZoom = function (doZoomReq) { return cordova(this, "doZoom", { "otherPromise": true }, arguments); };
    /**
     * Monitors photographing.
     * @returns Promise<any>
     */
    HMSMLBodyPluginOriginal.prototype.photograph = function () { return cordova(this, "photograph", { "otherPromise": true }, arguments); };
    /**
     * Close lens engine.
     * @returns Promise<any>
     */
    HMSMLBodyPluginOriginal.prototype.destroy = function () { return cordova(this, "destroy", { "otherPromise": true }, arguments); };
    /**
     * Obtains the size of the preview image of a camera.
     * @returns Promise<any>
     */
    HMSMLBodyPluginOriginal.prototype.getDisplayDimension = function () { return cordova(this, "getDisplayDimension", { "otherPromise": true }, arguments); };
    /**
     * Obtains the selected camera type.
     * @returns Promise<any>
     */
    HMSMLBodyPluginOriginal.prototype.getLensType = function () { return cordova(this, "getLensType", { "otherPromise": true }, arguments); };
    /**
     * It sets Api Key or access token for application.
     * @param  {configReq} params Represents your API_KEY.
     * @returns Promise<any>
     */
    HMSMLBodyPluginOriginal.prototype.serviceInitializer = function (params) { return cordova(this, "serviceInitializer", { "otherPromise": true }, arguments); };
    /**
     * Obtains Frame.
     * @param  {mlFrameReq} mlFrameReq Represents the parameter required.
     * @returns Promise<any>
     */
    HMSMLBodyPluginOriginal.prototype.mlFrame = function (mlFrameReq) { return cordova(this, "mlFrame", { "otherPromise": true }, arguments); };
    /**
     * An app information class used to store basic information about apps with the HMS Core ML SDK integrated and complete the initialization of ML Kit. When using cloud services of the ML Kit, you need to set the apiKey of your app.
     * @param  {appSettingReq} appSettingReq Represents the parameter required.
     * @returns Promise<any>
     */
    HMSMLBodyPluginOriginal.prototype.appSetting = function (appSettingReq) { return cordova(this, "appSetting", { "otherPromise": true }, arguments); };
    /**
     * This service enable logger service.
     * @returns Promise<any>
     */
    HMSMLBodyPluginOriginal.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    /**
     * This service disable logger service.
     * @returns Promise<any>
     */
    HMSMLBodyPluginOriginal.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSMLBodyPluginOriginal.prototype.setUserRegion = function (region) { return cordova(this, "setUserRegion", { "otherPromise": true }, arguments); };
    HMSMLBodyPluginOriginal.prototype.getCountryCode = function () { return cordova(this, "getCountryCode", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSMLBodyPluginOriginal.prototype, "MLFaceSetting", {
        get: function () { return cordovaPropertyGet(this, "MLFaceSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPluginOriginal.prototype, "HandkeyPointConfig", {
        get: function () { return cordovaPropertyGet(this, "HandkeyPointConfig"); },
        set: function (value) { cordovaPropertySet(this, "HandkeyPointConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPluginOriginal.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPluginOriginal.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPluginOriginal.prototype, "MLSkeletonConfig", {
        get: function () { return cordovaPropertyGet(this, "MLSkeletonConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLSkeletonConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPluginOriginal.prototype, "MLFlashMode", {
        get: function () { return cordovaPropertyGet(this, "MLFlashMode"); },
        set: function (value) { cordovaPropertySet(this, "MLFlashMode", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPluginOriginal.prototype, "MLLensType", {
        get: function () { return cordovaPropertyGet(this, "MLLensType"); },
        set: function (value) { cordovaPropertySet(this, "MLLensType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPluginOriginal.prototype, "MLAnalyzerName", {
        get: function () { return cordovaPropertyGet(this, "MLAnalyzerName"); },
        set: function (value) { cordovaPropertySet(this, "MLAnalyzerName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPluginOriginal.prototype, "MLFrame", {
        get: function () { return cordovaPropertyGet(this, "MLFrame"); },
        set: function (value) { cordovaPropertySet(this, "MLFrame", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPluginOriginal.prototype, "MLFaceConfigs", {
        get: function () { return cordovaPropertyGet(this, "MLFaceConfigs"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceConfigs", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPluginOriginal.prototype, "MLLivenessConfig", {
        get: function () { return cordovaPropertyGet(this, "MLLivenessConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLLivenessConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPluginOriginal.prototype, "syncType", {
        get: function () { return cordovaPropertyGet(this, "syncType"); },
        set: function (value) { cordovaPropertySet(this, "syncType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPluginOriginal.prototype, "Events", {
        get: function () { return cordovaPropertyGet(this, "Events"); },
        set: function (value) { cordovaPropertySet(this, "Events", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPluginOriginal.prototype, "Options", {
        get: function () { return cordovaPropertyGet(this, "Options"); },
        set: function (value) { cordovaPropertySet(this, "Options", value); },
        enumerable: false,
        configurable: true
    });
    HMSMLBodyPluginOriginal.pluginName = "HMSMLBodyPlugin";
    HMSMLBodyPluginOriginal.plugin = "cordova-plugin-hms-mlbody";
    HMSMLBodyPluginOriginal.pluginRef = "HMSMLBodyPlugin";
    HMSMLBodyPluginOriginal.platforms = ["Android"];
    return HMSMLBodyPluginOriginal;
}(AwesomeCordovaNativePlugin));
var HMSMLBodyPlugin = new HMSMLBodyPluginOriginal();
export { HMSMLBodyPlugin };
var HMSMLBodyOriginal = /** @class */ (function (_super) {
    __extends(HMSMLBodyOriginal, _super);
    function HMSMLBodyOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSMLBodyOriginal.prototype.stillGestureAnalyser = function (stillGestureReq) { return cordova(this, "stillGestureAnalyser", { "otherPromise": true }, arguments); };
    HMSMLBodyOriginal.prototype.stopStillGestureAnalyser = function () { return cordova(this, "stopStillGestureAnalyser", { "otherPromise": true }, arguments); };
    HMSMLBodyOriginal.prototype.getGestureAnalyserSetting = function () { return cordova(this, "getGestureAnalyserSetting", { "otherPromise": true }, arguments); };
    /**
     * The face detection service can detect the face contour, recognize facial features, and determine facial expressions for a person.
     * @param  {faceReq} faceReq Represents the parameter required for face detection.
     * @returns Promise<MLFace>
     */
    HMSMLBodyOriginal.prototype.stillFaceAnalyser = function (faceReq) { return cordova(this, "stillFaceAnalyser", { "otherPromise": true }, arguments); };
    HMSMLBodyOriginal.prototype.stillFaceAnalyserInfo = function () { return cordova(this, "stillFaceAnalyserInfo", { "otherPromise": true }, arguments); };
    HMSMLBodyOriginal.prototype.setFaceDetected = function (maxFaceVerificationReq) { return cordova(this, "setFaceDetected", { "otherPromise": true }, arguments); };
    HMSMLBodyOriginal.prototype.getFaceVerificationAnalyserSetting = function () { return cordova(this, "getFaceVerificationAnalyserSetting", { "otherPromise": true }, arguments); };
    /**
     * @param  {faceVerificationReq} faceVerificationReq Represents the parameter required for face detection.
     * @returns Promise<MLFaceVerificationResult>
     */
    HMSMLBodyOriginal.prototype.stillFaceVerificationAnalyser = function (faceVerificationReq) { return cordova(this, "stillFaceVerificationAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method stop face recognition service.
     * @returns Promise<any>
     */
    HMSMLBodyOriginal.prototype.stopStillFaceVerificationAnalyser = function () { return cordova(this, "stopStillFaceVerificationAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method stop face recognition service.
     * @returns Promise<any>
     */
    HMSMLBodyOriginal.prototype.stopStillFaceAnalyser = function () { return cordova(this, "stopStillFaceAnalyser", { "otherPromise": true }, arguments); };
    /**
   The skeleton detection service detects and locates key points of the human body, such as the top of the head, neck, shoulder, elbow, wrist, hip, knee, and ankle.
   * @param  {stillSkeletonReq |stillSkeletonSimilarityReq} stillSkeletonReq Represents the parameter required for still skeleton detection.
   * @returns Promise<MLSkeleton>
   */
    HMSMLBodyOriginal.prototype.stillSkeletonAnalyser = function (stillSkeletonReq) { return cordova(this, "stillSkeletonAnalyser", { "otherPromise": true }, arguments); };
    /**
     * The liveness detection service supports silent liveness detection and captures faces in real time. It can determine whether a face is of a real user or is a face attack
     * (for example, face recapture image, face recapture video, or face mask) without requiring the user to follow specific instructions.
     * @param  {livenessDetectionReq} livenessDetectionReq Represents the parameter required.
     * @returns Promise<MLLivenessCaptureResult>
     */
    HMSMLBodyOriginal.prototype.liveLivenessAnalyser = function (livenessDetectionReq) { return cordova(this, "liveLivenessAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This service can detects 21 hand keypoints (including fingertips, knuckles, and wrists) and return positions of the keypoints.
     * @param  {stillHandKeypointReq } stillHandKeypointReq Represents the parameter required for still handkey analyser.
     * @returns Promise<MLHandKeypoints>
     */
    HMSMLBodyOriginal.prototype.stillHandkeyAnalyser = function (stillHandKeypointReq) { return cordova(this, "stillHandkeyAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method stop hand analyzer service.
     * @returns Promise<any>
     */
    HMSMLBodyOriginal.prototype.stopStillHandKeyAnalyser = function () { return cordova(this, "stopStillHandKeyAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method returns face analyzer settings.
     * @returns Promise<any>
     */
    HMSMLBodyOriginal.prototype.getFaceAnalyserSetting = function () { return cordova(this, "getFaceAnalyserSetting", { "otherPromise": true }, arguments); };
    /**
     * This method  returns hand analyzer settings.
     * @returns Promise<any>
     */
    HMSMLBodyOriginal.prototype.getHandKeyAnalyserSetting = function () { return cordova(this, "getHandKeyAnalyserSetting", { "otherPromise": true }, arguments); };
    /**
     * This method stop skeleton analyzer service.
     * @returns Promise<any>
     */
    HMSMLBodyOriginal.prototype.stopStillSkeletonAnalyser = function () { return cordova(this, "stopStillSkeletonAnalyser", { "otherPromise": true }, arguments); };
    /**
     * The interactive biometric verification service implements liveness detection in an interactive way. It captures faces in real time and determines
     * whether a face is of a real person or is a presentation attack (for example, a face recapture image, face recapture video, or face mask) by checking
     * whether the specified actions are detected.
     * @returns Promise<MLInteractiveLivenessCaptureResult>
     */
    HMSMLBodyOriginal.prototype.interactiveLivenessAnalyser = function (interactiveLivenessDetectionReq) { return cordova(this, "interactiveLivenessAnalyser", { "otherPromise": true }, arguments); };
    /**
     * The interactive biometric verification service implements liveness detection in an interactive way. It captures faces in real time and determines
     * whether a face is of a real person or is a presentation attack (for example, a face recapture image, face recapture video, or face mask) by checking
     * whether the specified actions are detected.
     * @returns Promise<MLInteractiveLivenessCaptureResult>
     */
    HMSMLBodyOriginal.prototype.customInteractiveLivenessAnalyser = function (customInteractiveLivenessDetectionReq) { return cordova(this, "customInteractiveLivenessAnalyser", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSMLBodyOriginal.prototype, "MLFaceSetting", {
        get: function () { return cordovaPropertyGet(this, "MLFaceSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyOriginal.prototype, "HandkeyPointConfig", {
        get: function () { return cordovaPropertyGet(this, "HandkeyPointConfig"); },
        set: function (value) { cordovaPropertySet(this, "HandkeyPointConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyOriginal.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyOriginal.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyOriginal.prototype, "MLSkeletonConfig", {
        get: function () { return cordovaPropertyGet(this, "MLSkeletonConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLSkeletonConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyOriginal.prototype, "MLFlashMode", {
        get: function () { return cordovaPropertyGet(this, "MLFlashMode"); },
        set: function (value) { cordovaPropertySet(this, "MLFlashMode", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyOriginal.prototype, "MLLensType", {
        get: function () { return cordovaPropertyGet(this, "MLLensType"); },
        set: function (value) { cordovaPropertySet(this, "MLLensType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyOriginal.prototype, "MLAnalyzerName", {
        get: function () { return cordovaPropertyGet(this, "MLAnalyzerName"); },
        set: function (value) { cordovaPropertySet(this, "MLAnalyzerName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyOriginal.prototype, "MLFrame", {
        get: function () { return cordovaPropertyGet(this, "MLFrame"); },
        set: function (value) { cordovaPropertySet(this, "MLFrame", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyOriginal.prototype, "MLFaceConfigs", {
        get: function () { return cordovaPropertyGet(this, "MLFaceConfigs"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceConfigs", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyOriginal.prototype, "MLLivenessConfig", {
        get: function () { return cordovaPropertyGet(this, "MLLivenessConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLLivenessConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyOriginal.prototype, "syncType", {
        get: function () { return cordovaPropertyGet(this, "syncType"); },
        set: function (value) { cordovaPropertySet(this, "syncType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyOriginal.prototype, "Events", {
        get: function () { return cordovaPropertyGet(this, "Events"); },
        set: function (value) { cordovaPropertySet(this, "Events", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyOriginal.prototype, "Options", {
        get: function () { return cordovaPropertyGet(this, "Options"); },
        set: function (value) { cordovaPropertySet(this, "Options", value); },
        enumerable: false,
        configurable: true
    });
    HMSMLBodyOriginal.pluginName = "HMSMLBody";
    HMSMLBodyOriginal.plugin = "cordova-plugin-hms-mlbody";
    HMSMLBodyOriginal.pluginRef = "HMSMLBody";
    HMSMLBodyOriginal.platforms = ["Android"];
    return HMSMLBodyOriginal;
}(AwesomeCordovaNativePlugin));
var HMSMLBody = new HMSMLBodyOriginal();
export { HMSMLBody };
var MLLive = /** @class */ (function () {
    function MLLive(scene, divId) {
        if (scene === "ACTION_LIVE_ANALYSE")
            this.arScene = new (HMSMLBodyPluginOriginal.getPlugin().liveEngineAnalyser)(divId);
    }
    MLLive.prototype.on = function (eventName, call) {
        return this.arScene.on(eventName, call);
    };
    MLLive.prototype.startMLLive = function (config, bounds) {
        return this.arScene.startMLLive(config, bounds);
    };
    MLLive.prototype.destroy = function () {
        return this.arScene.destroy();
    };
    MLLive.prototype.setConfig = function (config) {
        return this.arScene.setConfig(config);
    };
    MLLive.prototype.scroll = function () {
        return this.arScene.scroll();
    };
    return MLLive;
}());
export { MLLive };
var liveEngineAnalyser = /** @class */ (function (_super) {
    __extends(liveEngineAnalyser, _super);
    function liveEngineAnalyser(divId) {
        return _super.call(this, "ACTION_LIVE_ANALYSE", divId) || this;
    }
    return liveEngineAnalyser;
}(MLLive));
export { liveEngineAnalyser };
export var MLFlashMode;
(function (MLFlashMode) {
    MLFlashMode["AUTO"] = "auto";
    MLFlashMode["ON"] = "on";
    MLFlashMode["OFF"] = "off";
})(MLFlashMode || (MLFlashMode = {}));
export var MLLensType;
(function (MLLensType) {
    MLLensType[MLLensType["BACK_LENS"] = 0] = "BACK_LENS";
    MLLensType[MLLensType["FRONT_LENS"] = 1] = "FRONT_LENS";
})(MLLensType || (MLLensType = {}));
export var MLAnalyzerName;
(function (MLAnalyzerName) {
    MLAnalyzerName["LIVEFACE"] = "FACE";
    MLAnalyzerName["LIVEFACE3D"] = "FACE3D";
    MLAnalyzerName["LIVEFACEMAX"] = "FACEMAX";
    MLAnalyzerName["LIVEHAND"] = "HAND";
    MLAnalyzerName["LIVESKELETON"] = "SKELETON";
    MLAnalyzerName["LIVEOBJECT"] = "OBJECT";
    MLAnalyzerName["LIVECLASSIFICATION"] = "CLASSIFICATION";
    MLAnalyzerName["LIVESCENE"] = "SCENE";
    MLAnalyzerName["LIVETEXT"] = "TEXT";
    MLAnalyzerName["LIVEGESTURE"] = "GESTURE";
})(MLAnalyzerName || (MLAnalyzerName = {}));
export var MLFrame;
(function (MLFrame) {
    MLFrame["getPreviewBitmap"] = "getPreviewBitmap";
    MLFrame["readBitmap"] = "readBitmap";
    MLFrame["rotate"] = "rotate";
})(MLFrame || (MLFrame = {}));
export var QuadrantTypes;
(function (QuadrantTypes) {
    QuadrantTypes[QuadrantTypes["SCREEN_FIRST_QUADRANT"] = 0] = "SCREEN_FIRST_QUADRANT";
    QuadrantTypes[QuadrantTypes["SCREEN_SECOND_QUADRANT"] = 1] = "SCREEN_SECOND_QUADRANT";
    QuadrantTypes[QuadrantTypes["SCREEN_THIRD_QUADRANT"] = 2] = "SCREEN_THIRD_QUADRANT";
    QuadrantTypes[QuadrantTypes["SCREEN_FOURTH_QUADRANT"] = 3] = "SCREEN_FOURTH_QUADRANT";
})(QuadrantTypes || (QuadrantTypes = {}));
export var MLFaceConfigs;
(function (MLFaceConfigs) {
    MLFaceConfigs[MLFaceConfigs["TYPE_2D_SYNC"] = 0] = "TYPE_2D_SYNC";
    MLFaceConfigs[MLFaceConfigs["TYPE_2D_ASYNC"] = 1] = "TYPE_2D_ASYNC";
    MLFaceConfigs[MLFaceConfigs["TYPE_3D_SYNC"] = 2] = "TYPE_3D_SYNC";
    MLFaceConfigs[MLFaceConfigs["TYPE_3D_ASYNC"] = 3] = "TYPE_3D_ASYNC";
})(MLFaceConfigs || (MLFaceConfigs = {}));
export var MLFaceSetting;
(function (MLFaceSetting) {
    MLFaceSetting[MLFaceSetting["MODE_TRACING_FAST"] = 1] = "MODE_TRACING_FAST";
    MLFaceSetting[MLFaceSetting["MODE_TRACING_ROBUST"] = 2] = "MODE_TRACING_ROBUST";
    MLFaceSetting[MLFaceSetting["TYPE_FEATURES"] = 1] = "TYPE_FEATURES";
    MLFaceSetting[MLFaceSetting["TYPE_FEATURE_AGE"] = 256] = "TYPE_FEATURE_AGE";
    MLFaceSetting[MLFaceSetting["TYPE_FEATURE_BEARD"] = 32] = "TYPE_FEATURE_BEARD";
    MLFaceSetting[MLFaceSetting["TYPE_FEATURE_EMOTION"] = 4] = "TYPE_FEATURE_EMOTION";
    MLFaceSetting[MLFaceSetting["TYPE_FEATURE_EYEGLASS"] = 8] = "TYPE_FEATURE_EYEGLASS";
    MLFaceSetting[MLFaceSetting["TYPE_FEATURE_GENDAR"] = 128] = "TYPE_FEATURE_GENDAR";
    MLFaceSetting[MLFaceSetting["TYPE_FEATURE_HAT"] = 16] = "TYPE_FEATURE_HAT";
    MLFaceSetting[MLFaceSetting["TYPE_FEATURE_OPENCLOSEEYE"] = 64] = "TYPE_FEATURE_OPENCLOSEEYE";
    MLFaceSetting[MLFaceSetting["TYPE_KEYPOINTS"] = 1] = "TYPE_KEYPOINTS";
    MLFaceSetting[MLFaceSetting["TYPE_PRECISION"] = 1] = "TYPE_PRECISION";
    MLFaceSetting[MLFaceSetting["TYPE_SHAPES"] = 2] = "TYPE_SHAPES";
    MLFaceSetting[MLFaceSetting["TYPE_SPEED"] = 2] = "TYPE_SPEED";
    MLFaceSetting[MLFaceSetting["TYPE_UNSUPPORT_FEATURES"] = 2] = "TYPE_UNSUPPORT_FEATURES";
    MLFaceSetting[MLFaceSetting["TYPE_UNSUPPORT_KEYPOINTS"] = 0] = "TYPE_UNSUPPORT_KEYPOINTS";
    MLFaceSetting[MLFaceSetting["TYPE_UNSUPPORT_SHAPES"] = 3] = "TYPE_UNSUPPORT_SHAPES";
    MLFaceSetting[MLFaceSetting["TYPE_BOTTOM_OF_MOUTH"] = 1] = "TYPE_BOTTOM_OF_MOUTH";
    MLFaceSetting[MLFaceSetting["TYPE_LEFT_CHEEK"] = 2] = "TYPE_LEFT_CHEEK";
    MLFaceSetting[MLFaceSetting["TYPE_LEFT_EAR"] = 3] = "TYPE_LEFT_EAR";
    MLFaceSetting[MLFaceSetting["TYPE_LEFT_SIDE_OF_MOUTH"] = 6] = "TYPE_LEFT_SIDE_OF_MOUTH";
    MLFaceSetting[MLFaceSetting["TYPE_RIGHT_CHEEK"] = 8] = "TYPE_RIGHT_CHEEK";
    MLFaceSetting[MLFaceSetting["TYPE_RIGHT_EAR"] = 9] = "TYPE_RIGHT_EAR";
    MLFaceSetting[MLFaceSetting["TYPE_RIGHT_SIDE_OF_MOUTH"] = 12] = "TYPE_RIGHT_SIDE_OF_MOUTH";
    MLFaceSetting[MLFaceSetting["TYPE_TIP_OF_LEFT_EAR"] = 4] = "TYPE_TIP_OF_LEFT_EAR";
    MLFaceSetting[MLFaceSetting["TYPE_TIP_OF_NOSE"] = 7] = "TYPE_TIP_OF_NOSE";
    MLFaceSetting[MLFaceSetting["TYPE_TIP_OF_RIGHT_EAR"] = 10] = "TYPE_TIP_OF_RIGHT_EAR";
    MLFaceSetting[MLFaceSetting["TYPE_ALL"] = 0] = "TYPE_ALL";
    MLFaceSetting[MLFaceSetting["TYPE_BOTTOM_OF_LEFT_EYEBROW"] = 4] = "TYPE_BOTTOM_OF_LEFT_EYEBROW";
    MLFaceSetting[MLFaceSetting["TYPE_BOTTOM_OF_LOWER_LIP"] = 8] = "TYPE_BOTTOM_OF_LOWER_LIP";
    MLFaceSetting[MLFaceSetting["TYPE_BOTTOM_OF_NOSE"] = 12] = "TYPE_BOTTOM_OF_NOSE";
    MLFaceSetting[MLFaceSetting["TYPE_BOTTOM_OF_RIGHT_EYEBROW"] = 5] = "TYPE_BOTTOM_OF_RIGHT_EYEBROW";
    MLFaceSetting[MLFaceSetting["TYPE_BOTTOM_OF_UPPER_LIP"] = 10] = "TYPE_BOTTOM_OF_UPPER_LIP";
    MLFaceSetting[MLFaceSetting["TYPE_BRIDGE_OF_NOSE"] = 13] = "TYPE_BRIDGE_OF_NOSE";
    MLFaceSetting[MLFaceSetting["TYPE_FACE"] = 1] = "TYPE_FACE";
    MLFaceSetting[MLFaceSetting["TYPE_TOP_OF_LEFT_EYEBROW"] = 6] = "TYPE_TOP_OF_LEFT_EYEBROW";
    MLFaceSetting[MLFaceSetting["TYPE_TOP_OF_LOWER_LIP"] = 9] = "TYPE_TOP_OF_LOWER_LIP";
    MLFaceSetting[MLFaceSetting["TYPE_TOP_OF_RIGHT_EYEBROW"] = 7] = "TYPE_TOP_OF_RIGHT_EYEBROW";
    MLFaceSetting[MLFaceSetting["TYPE_TOP_OF_UPPER_LIP"] = 11] = "TYPE_TOP_OF_UPPER_LIP";
})(MLFaceSetting || (MLFaceSetting = {}));
export var syncType;
(function (syncType) {
    syncType[syncType["SYNC_MODE"] = 0] = "SYNC_MODE";
    syncType[syncType["ASYNC_MODE"] = 1] = "ASYNC_MODE";
})(syncType || (syncType = {}));
export var GestureTypes;
(function (GestureTypes) {
    GestureTypes[GestureTypes["ONE"] = 0] = "ONE";
    GestureTypes[GestureTypes["SECOND"] = 1] = "SECOND";
    GestureTypes[GestureTypes["THREE"] = 2] = "THREE";
    GestureTypes[GestureTypes["FOUR"] = 3] = "FOUR";
    GestureTypes[GestureTypes["FIVE"] = 4] = "FIVE";
    GestureTypes[GestureTypes["SIX"] = 5] = "SIX";
    GestureTypes[GestureTypes["SEVEN"] = 6] = "SEVEN";
    GestureTypes[GestureTypes["EIGHT"] = 7] = "EIGHT";
    GestureTypes[GestureTypes["NINE"] = 8] = "NINE";
    GestureTypes[GestureTypes["DISS"] = 9] = "DISS";
    GestureTypes[GestureTypes["FIST"] = 10] = "FIST";
    GestureTypes[GestureTypes["GOOD"] = 11] = "GOOD";
    GestureTypes[GestureTypes["HEART"] = 12] = "HEART";
    GestureTypes[GestureTypes["OK"] = 13] = "OK";
    GestureTypes[GestureTypes["UNKNOWN"] = 14] = "UNKNOWN";
})(GestureTypes || (GestureTypes = {}));
export var HandkeyPointConfig;
(function (HandkeyPointConfig) {
    HandkeyPointConfig[HandkeyPointConfig["TYPE_ALL"] = 0] = "TYPE_ALL";
    HandkeyPointConfig[HandkeyPointConfig["TYPE_KEYPOINT_ONLY"] = 1] = "TYPE_KEYPOINT_ONLY";
    HandkeyPointConfig[HandkeyPointConfig["TYPE_RECT_ONLY"] = 2] = "TYPE_RECT_ONLY";
    HandkeyPointConfig[HandkeyPointConfig["MAX_HANDS_NUM"] = 10] = "MAX_HANDS_NUM";
})(HandkeyPointConfig || (HandkeyPointConfig = {}));
export var MLLivenessConfig;
(function (MLLivenessConfig) {
    MLLivenessConfig[MLLivenessConfig["DEFAULT"] = 0] = "DEFAULT";
    MLLivenessConfig[MLLivenessConfig["CUSTOM"] = 1] = "CUSTOM";
})(MLLivenessConfig || (MLLivenessConfig = {}));
export var MLLivenessCaptureError;
(function (MLLivenessCaptureError) {
    MLLivenessCaptureError[MLLivenessCaptureError["CAMERA_NO_PERMISSION"] = 11401] = "CAMERA_NO_PERMISSION";
    MLLivenessCaptureError[MLLivenessCaptureError["CAMERA_START_FAILED"] = 11402] = "CAMERA_START_FAILED";
    MLLivenessCaptureError[MLLivenessCaptureError["USER_CANCEL"] = 11403] = "USER_CANCEL";
    MLLivenessCaptureError[MLLivenessCaptureError["DETECT_FACE_TIME_OUT"] = 11404] = "DETECT_FACE_TIME_OUT";
    MLLivenessCaptureError[MLLivenessCaptureError["DETECT_MASK"] = 1] = "DETECT_MASK";
})(MLLivenessCaptureError || (MLLivenessCaptureError = {}));
export var MLSkeletonConfig;
(function (MLSkeletonConfig) {
    MLSkeletonConfig[MLSkeletonConfig["SYNC_MODE"] = 0] = "SYNC_MODE";
    MLSkeletonConfig[MLSkeletonConfig["ASYNC_MODE"] = 1] = "ASYNC_MODE";
    MLSkeletonConfig[MLSkeletonConfig["SIMILARITTY_MODE"] = 2] = "SIMILARITTY_MODE";
    MLSkeletonConfig[MLSkeletonConfig["TYPE_YOGA"] = 1] = "TYPE_YOGA";
    MLSkeletonConfig[MLSkeletonConfig["TYPE_NORMAL"] = 0] = "TYPE_NORMAL";
})(MLSkeletonConfig || (MLSkeletonConfig = {}));
export var Colors;
(function (Colors) {
    Colors[Colors["RED"] = -65536] = "RED";
    Colors[Colors["DKGRAY"] = -12303292] = "DKGRAY";
    Colors[Colors["GRAY"] = -7829368] = "GRAY";
    Colors[Colors["WHITE"] = -1] = "WHITE";
    Colors[Colors["BLUE"] = -16776961] = "BLUE";
    Colors[Colors["BLACK"] = -16777216] = "BLACK";
    Colors[Colors["LTGRAY"] = -3355444] = "LTGRAY";
    Colors[Colors["MAGENTA"] = -65281] = "MAGENTA";
    Colors[Colors["YELLOW"] = -256] = "YELLOW";
    Colors[Colors["CYAN"] = -16711681] = "CYAN";
    Colors[Colors["GREEN"] = -16711936] = "GREEN";
    Colors[Colors["TRANSPARENT"] = 0] = "TRANSPARENT";
})(Colors || (Colors = {}));
export var RectStyle;
(function (RectStyle) {
    RectStyle[RectStyle["STROKE"] = 1] = "STROKE";
    RectStyle[RectStyle["FILL"] = 2] = "FILL";
    RectStyle[RectStyle["FILL_AND_STROKE"] = 3] = "FILL_AND_STROKE";
})(RectStyle || (RectStyle = {}));
export var Options;
(function (Options) {
    Options[Options["DETECT_MASK"] = 1] = "DETECT_MASK";
    Options[Options["DETECT_SUNGLASS"] = 2] = "DETECT_SUNGLASS";
})(Options || (Options = {}));
export var MLFaceConstant;
(function (MLFaceConstant) {
    MLFaceConstant[MLFaceConstant["UNANALYZED_POSSIBILITY"] = -1] = "UNANALYZED_POSSIBILITY";
})(MLFaceConstant || (MLFaceConstant = {}));
export var handkeyPointsTypes;
(function (handkeyPointsTypes) {
    handkeyPointsTypes[handkeyPointsTypes["TYPE_WRIST"] = 0] = "TYPE_WRIST";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_THUMB_FIRST"] = 1] = "TYPE_THUMB_FIRST";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_THUMB_SECOND"] = 2] = "TYPE_THUMB_SECOND";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_THUMB_THIRD"] = 3] = "TYPE_THUMB_THIRD";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_THUMB_FOURTH"] = 4] = "TYPE_THUMB_FOURTH";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_FOREFINGER_FIRST"] = 5] = "TYPE_FOREFINGER_FIRST";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_FOREFINGER_SECOND"] = 6] = "TYPE_FOREFINGER_SECOND";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_FOREFINGER_THIRD"] = 7] = "TYPE_FOREFINGER_THIRD";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_FOREFINGER_FOURTH"] = 8] = "TYPE_FOREFINGER_FOURTH";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_MIDDLE_FINGER_FIRST"] = 9] = "TYPE_MIDDLE_FINGER_FIRST";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_MIDDLE_FINGER_SECOND"] = 10] = "TYPE_MIDDLE_FINGER_SECOND";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_MIDDLE_FINGER_THIRD"] = 11] = "TYPE_MIDDLE_FINGER_THIRD";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_MIDDLE_FINGER_FOURTH"] = 12] = "TYPE_MIDDLE_FINGER_FOURTH";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_RING_FINGER_FIRST"] = 13] = "TYPE_RING_FINGER_FIRST";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_RING_FINGER_SECOND"] = 14] = "TYPE_RING_FINGER_SECOND";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_RING_FINGER_THIRD"] = 15] = "TYPE_RING_FINGER_THIRD";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_RING_FINGER_FOURTH"] = 16] = "TYPE_RING_FINGER_FOURTH";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_LITTLE_FINGER_FIRST"] = 17] = "TYPE_LITTLE_FINGER_FIRST";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_LITTLE_FINGER_SECOND"] = 18] = "TYPE_LITTLE_FINGER_SECOND";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_LITTLE_FINGER_THIRD"] = 19] = "TYPE_LITTLE_FINGER_THIRD";
    handkeyPointsTypes[handkeyPointsTypes["TYPE_LITTLE_FINGER_FOURTH"] = 20] = "TYPE_LITTLE_FINGER_FOURTH";
})(handkeyPointsTypes || (handkeyPointsTypes = {}));
export var MLJointPoints;
(function (MLJointPoints) {
    MLJointPoints[MLJointPoints["TYPE_RIGHT_SHOULDER"] = 101] = "TYPE_RIGHT_SHOULDER";
    MLJointPoints[MLJointPoints["TYPE_RIGHT_ELBOW"] = 102] = "TYPE_RIGHT_ELBOW";
    MLJointPoints[MLJointPoints["TYPE_RIGHT_WRIST"] = 103] = "TYPE_RIGHT_WRIST";
    MLJointPoints[MLJointPoints["TYPE_LEFT_SHOULDER"] = 104] = "TYPE_LEFT_SHOULDER";
    MLJointPoints[MLJointPoints["TYPE_LEFT_ELBOW"] = 105] = "TYPE_LEFT_ELBOW";
    MLJointPoints[MLJointPoints["TYPE_LEFT_WRIST"] = 106] = "TYPE_LEFT_WRIST";
    MLJointPoints[MLJointPoints["TYPE_RIGHT_HIP"] = 107] = "TYPE_RIGHT_HIP";
    MLJointPoints[MLJointPoints["TYPE_RIGHT_KNEE"] = 108] = "TYPE_RIGHT_KNEE";
    MLJointPoints[MLJointPoints["TYPE_RIGHT_ANKLE"] = 109] = "TYPE_RIGHT_ANKLE";
    MLJointPoints[MLJointPoints["TYPE_LEFT_HIP"] = 110] = "TYPE_LEFT_HIP";
    MLJointPoints[MLJointPoints["TYPE_LEFT_KNEE"] = 111] = "TYPE_LEFT_KNEE";
    MLJointPoints[MLJointPoints["TYPE_LEFT_ANKLE"] = 112] = "TYPE_LEFT_ANKLE";
    MLJointPoints[MLJointPoints["TYPE_HEAD_TOP"] = 113] = "TYPE_HEAD_TOP";
    MLJointPoints[MLJointPoints["TYPE_NECK"] = 114] = "TYPE_NECK";
})(MLJointPoints || (MLJointPoints = {}));
export var Events;
(function (Events) {
    Events["FACE_TRANSACTOR_ON_DESTROY"] = "faceTransactorOnDestroy";
    Events["FACE_TRANSACTOR_ON_RESULT"] = "faceTransactorOnResult";
    Events["FACE_3D_TRANSACTOR_ON_DESTROY"] = "face3dTransactorOnDestroy";
    Events["FACE_3D_TRANSACTOR_ON_RESULT"] = "face3dTransactorOnResult";
    Events["SKELETON_TRANSACTOR_ON_DESTROY"] = "skeletonTransactorOnDestroy";
    Events["SKELETON_TRANSACTOR_ON_RESULT"] = "skeletonTransactorOnResult";
    Events["HAND_TRANSACTOR_ON_DESTROY"] = "handTransactorOnDestroy";
    Events["HAND_TRANSACTOR_ON_RESULT"] = "handTransactorOnResult";
    Events["GESTURE_TRANSACTOR_ON_DESTROY"] = "gestureTransactorOnDestroy";
    Events["GESTURE_TRANSACTOR_ON_RESULT"] = "gestureTransactorOnResult";
})(Events || (Events = {}));
export var InteractiveLivenessStateCode;
(function (InteractiveLivenessStateCode) {
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["FACE_ASPECT"] = 1001] = "FACE_ASPECT";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["NO_FACE"] = 1002] = "NO_FACE";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["MULTI_FACES"] = 1003] = "MULTI_FACES";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["PART_FACE"] = 1004] = "PART_FACE";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["BIG_FACE"] = 1005] = "BIG_FACE";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["SMALL_FACE"] = 1006] = "SMALL_FACE";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["WEAR_SUNGLASSES"] = 1007] = "WEAR_SUNGLASSES";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["WEAR_MASK"] = 1008] = "WEAR_MASK";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["ACTION_MUTUALLY_EXCLUSIVE_ERROR"] = 1009] = "ACTION_MUTUALLY_EXCLUSIVE_ERROR";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["CONTINUITY_DETECTION_ERROR"] = 1014] = "CONTINUITY_DETECTION_ERROR";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["DARK"] = 1018] = "DARK";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["BLUR"] = 1019] = "BLUR";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["BACK_LIGHTING"] = 1020] = "BACK_LIGHTING";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["BRIGHT"] = 1021] = "BRIGHT";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["IN_PROGRESS"] = 2000] = "IN_PROGRESS";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["SPOOFING"] = 2002] = "SPOOFING";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["LIVE_AND_ACTION_CORRECT"] = 2003] = "LIVE_AND_ACTION_CORRECT";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["GUIDE_DETECTION_SUCCESS"] = 2004] = "GUIDE_DETECTION_SUCCESS";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["INIT_FACE_RECTANGLE_ERROR"] = 2007] = "INIT_FACE_RECTANGLE_ERROR";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["ERROR_RESULT_BEFORE"] = 5020] = "ERROR_RESULT_BEFORE";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["RESULT_TIME_OUT"] = 5030] = "RESULT_TIME_OUT";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["ALL_ACTION_CORRECT"] = 9999] = "ALL_ACTION_CORRECT";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["INITIALED_FAILED"] = -1] = "INITIALED_FAILED";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["NO_ORDER_PAY"] = -5001] = "NO_ORDER_PAY";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["OUT_OF_CREDIT"] = -5002] = "OUT_OF_CREDIT";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["FREE_AMOUNT_USE_UP"] = -5003] = "FREE_AMOUNT_USE_UP";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["BLACK_LIST"] = -5004] = "BLACK_LIST";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["OFFLINE_USE_COUNT_OVER_THRESHOLD"] = -6001] = "OFFLINE_USE_COUNT_OVER_THRESHOLD";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["OFFLINE_USE_TIME_OVER_THRESHOLD"] = -6002] = "OFFLINE_USE_TIME_OVER_THRESHOLD";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["LOCAL_AND_CLOUD_BILL_INFO_IS_NULL"] = -7001] = "LOCAL_AND_CLOUD_BILL_INFO_IS_NULL";
    InteractiveLivenessStateCode[InteractiveLivenessStateCode["UPDATE_BILL_INFO_FILE_FAILED"] = -7002] = "UPDATE_BILL_INFO_FILE_FAILED";
})(InteractiveLivenessStateCode || (InteractiveLivenessStateCode = {}));
export var CordovaErrors;
(function (CordovaErrors) {
    CordovaErrors[CordovaErrors["UNKNOWN"] = -1] = "UNKNOWN";
    CordovaErrors[CordovaErrors["SUCCESS"] = 0] = "SUCCESS";
    CordovaErrors[CordovaErrors["DISCARDED"] = 1] = "DISCARDED";
    CordovaErrors[CordovaErrors["INNER"] = 2] = "INNER";
    CordovaErrors[CordovaErrors["INACTIVE"] = 3] = "INACTIVE";
    CordovaErrors[CordovaErrors["NOT_SUPPORTED"] = 4] = "NOT_SUPPORTED";
    CordovaErrors[CordovaErrors["ILLEGAL_PARAMETER"] = 5] = "ILLEGAL_PARAMETER";
    CordovaErrors[CordovaErrors["OVERDUE"] = 6] = "OVERDUE";
    CordovaErrors[CordovaErrors["NO_FOUND"] = 7] = "NO_FOUND";
    CordovaErrors[CordovaErrors["DUPLICATE_FOUND"] = 8] = "DUPLICATE_FOUND";
    CordovaErrors[CordovaErrors["NO_PERMISSION"] = 9] = "NO_PERMISSION";
    CordovaErrors[CordovaErrors["INSUFFICIENT_RESOURCE"] = 10] = "INSUFFICIENT_RESOURCE";
    CordovaErrors[CordovaErrors["ANALYSIS_FAILURE"] = 11] = "ANALYSIS_FAILURE";
    CordovaErrors[CordovaErrors["INTERRUPTED"] = 12] = "INTERRUPTED";
    CordovaErrors[CordovaErrors["EXCEED_RANGE"] = 13] = "EXCEED_RANGE";
    CordovaErrors[CordovaErrors["DATA_MISSING"] = 14] = "DATA_MISSING";
    CordovaErrors[CordovaErrors["AUTHENTICATION_REQUIRED"] = 15] = "AUTHENTICATION_REQUIRED";
    CordovaErrors[CordovaErrors["TFLITE_NOT_COMPATIBLE"] = 16] = "TFLITE_NOT_COMPATIBLE";
    CordovaErrors[CordovaErrors["INSUFFICIENT_SPACE"] = 17] = "INSUFFICIENT_SPACE";
    CordovaErrors[CordovaErrors["HASH_MISS"] = 18] = "HASH_MISS";
    CordovaErrors[CordovaErrors["TOKEN_INVALID"] = 19] = "TOKEN_INVALID";
    CordovaErrors[CordovaErrors["SERVICE_FAILURE"] = 20] = "SERVICE_FAILURE";
    CordovaErrors[CordovaErrors["ANALYSIS_NULL"] = 21] = "ANALYSIS_NULL";
})(CordovaErrors || (CordovaErrors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmF0aXZlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLCtFQUtOLE1BQU0sK0JBQStCLENBQUM7O0lBU0YsbUNBQTBCOzs7O0lBK0IzRDs7OztPQUlHO0lBQ0gsZ0NBQU0sYUFBQyxTQUFvQjtJQUkzQjs7O09BR0c7SUFDSCxvQ0FBVTtJQUlWOzs7T0FHRztJQUNILGlDQUFPO0lBSVA7OztPQUdHO0lBQ0gsNkNBQW1CO0lBSW5COzs7T0FHRztJQUNILHFDQUFXO0lBSVg7Ozs7T0FJRztJQUNILDRDQUFrQixhQUFDLE1BQWlCO0lBSXBDOzs7O09BSUc7SUFDSCxpQ0FBTyxhQUFDLFVBQXNCO0lBSTlCOzs7O09BSUc7SUFDSCxvQ0FBVSxhQUFDLGFBQTRCO0lBSXZDOzs7T0FHRztJQUNILHNDQUFZO0lBSVo7OztPQUdHO0lBQ0gsdUNBQWE7SUFJYix1Q0FBYSxhQUFDLE1BQWM7SUFJNUIsd0NBQWM7MEJBckhkLDBDQUFhOzs7Ozs7MEJBRWIsK0NBQWtCOzs7Ozs7MEJBRWxCLG1DQUFNOzs7Ozs7MEJBRU4sc0NBQVM7Ozs7OzswQkFFVCw2Q0FBZ0I7Ozs7OzswQkFFaEIsd0NBQVc7Ozs7OzswQkFFWCx1Q0FBVTs7Ozs7OzBCQUVWLDJDQUFjOzs7Ozs7MEJBRWQsb0NBQU87Ozs7OzswQkFFUCwwQ0FBYTs7Ozs7OzBCQUViLDZDQUFnQjs7Ozs7OzBCQUVoQixxQ0FBUTs7Ozs7OzBCQUVSLG1DQUFNOzs7Ozs7MEJBRU4sb0NBQU87Ozs7Ozs7Ozs7MEJBM0RYO0VBK0JxQywwQkFBMEI7U0FBbEQsZUFBZTs7SUFvSUcsNkJBQTBCOzs7O0lBK0JyRCx3Q0FBb0IsYUFBQyxlQUFnQztJQUtyRCw0Q0FBd0I7SUFLeEIsNkNBQXlCO0lBS3pCOzs7O09BSUc7SUFD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QUN0Qiw4R0FBeUIsQ0FBQTtJQUN6Qix3R0FBcUIsQ0FBQTtJQUNyQixtR0FBb0IsQ0FBQTtJQUNwQixxR0FBcUIsQ0FBQTtJQUNyQiwrR0FBMEIsQ0FBQTtJQUMxQiwrRkFBa0IsQ0FBQTtJQUNsQiwySUFBd0MsQ0FBQTtJQUN4Qyx5SUFBdUMsQ0FBQTtJQUN2Qyw2SUFBeUMsQ0FBQTtJQUN6QyxtSUFBb0MsQ0FBQTtBQUN4QyxDQUFDLEVBaENXLDRCQUE0QixLQUE1Qiw0QkFBNEIsUUFnQ3ZDO0FBRUQsTUFBTSxDQUFOLElBQVksYUF3Qlg7QUF4QkQsV0FBWSxhQUFhO0lBQ3JCLHdEQUFZLENBQUE7SUFDWix1REFBVyxDQUFBO0lBQ1gsMkRBQWEsQ0FBQTtJQUNiLG1EQUFTLENBQUE7SUFDVCx5REFBWSxDQUFBO0lBQ1osbUVBQWlCLENBQUE7SUFDakIsMkVBQXFCLENBQUE7SUFDckIsdURBQVcsQ0FBQTtJQUNYLHlEQUFZLENBQUE7SUFDWix1RUFBbUIsQ0FBQTtJQUNuQixtRUFBaUIsQ0FBQTtJQUNqQixvRkFBMEIsQ0FBQTtJQUMxQiwwRUFBcUIsQ0FBQTtJQUNyQixnRUFBZ0IsQ0FBQTtJQUNoQixrRUFBaUIsQ0FBQTtJQUNqQixrRUFBaUIsQ0FBQTtJQUNqQix3RkFBNEIsQ0FBQTtJQUM1QixvRkFBMEIsQ0FBQTtJQUMxQiw4RUFBdUIsQ0FBQTtJQUN2Qiw0REFBYyxDQUFBO0lBQ2Qsb0VBQWtCLENBQUE7SUFDbEIsd0VBQW9CLENBQUE7SUFDcEIsb0VBQWtCLENBQUE7QUFDdEIsQ0FBQyxFQXhCVyxhQUFhLEtBQWIsYUFBYSxRQXdCeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgQ29weXJpZ2h0IDIwMjMtMjAyNC4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuXHJcbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXHJcbiAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuXHJcbiAgICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICAgIFBsdWdpbixcclxuICAgIENvcmRvdmEsXHJcbiAgICBDb3Jkb3ZhUHJvcGVydHksXHJcbiAgICBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbixcclxufSBmcm9tIFwiQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmVcIjtcclxuXHJcbkBQbHVnaW4oe1xyXG4gICAgcGx1Z2luTmFtZTogXCJITVNNTEJvZHlQbHVnaW5cIixcclxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtbWxib2R5XCIsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gICAgcGx1Z2luUmVmOiBcIkhNU01MQm9keVBsdWdpblwiLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNNTEJvZHlQbHVnaW4gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIE1MRmFjZVNldHRpbmcgPSBNTEZhY2VTZXR0aW5nO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBIYW5ka2V5UG9pbnRDb25maWcgPSBIYW5ka2V5UG9pbnRDb25maWc7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIENvbG9ycyA9IENvbG9ycztcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgUmVjdFN0eWxlID0gUmVjdFN0eWxlO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBNTFNrZWxldG9uQ29uZmlnID0gTUxTa2VsZXRvbkNvbmZpZztcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgTUxGbGFzaE1vZGUgPSBNTEZsYXNoTW9kZTtcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgTUxMZW5zVHlwZSA9IE1MTGVuc1R5cGU7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIE1MQW5hbHl6ZXJOYW1lID0gTUxBbmFseXplck5hbWU7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIE1MRnJhbWUgPSBNTEZyYW1lO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBNTEZhY2VDb25maWdzID0gTUxGYWNlQ29uZmlncztcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgTUxMaXZlbmVzc0NvbmZpZyA9IE1MTGl2ZW5lc3NDb25maWc7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIHN5bmNUeXBlID0gc3luY1R5cGU7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIEV2ZW50cyA9IEV2ZW50cztcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgT3B0aW9ucyA9IE9wdGlvbnM7XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogQWRqdXN0cyB0aGUgZm9jYWwgbGVuZ3RoIG9mIHRoZSBjYW1lcmEgYmFzZWQgb24gdGhlIHNjYWxpbmcgY29lZmZpY2llbnQgKGRpZ2l0YWwgem9vbSkuXHJcbiAgICAgKiBAcGFyYW0gIHtkb1pvb21SZXF9IGRvWm9vbVJlcSBSZXBlcmVzZW50cyB0aGUgbmVjZXNzYXJ5IHBhcmFtZXRlcnMuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgZG9ab29tKGRvWm9vbVJlcTogZG9ab29tUmVxKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBNb25pdG9ycyBwaG90b2dyYXBoaW5nLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIHBob3RvZ3JhcGgoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZSBsZW5zIGVuZ2luZS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBkZXN0cm95KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyB0aGUgc2l6ZSBvZiB0aGUgcHJldmlldyBpbWFnZSBvZiBhIGNhbWVyYS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBnZXREaXNwbGF5RGltZW5zaW9uKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyB0aGUgc2VsZWN0ZWQgY2FtZXJhIHR5cGUuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgZ2V0TGVuc1R5cGUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBJdCBzZXRzIEFwaSBLZXkgb3IgYWNjZXNzIHRva2VuIGZvciBhcHBsaWNhdGlvbi5cclxuICAgICAqIEBwYXJhbSAge2NvbmZpZ1JlcX0gcGFyYW1zIFJlcHJlc2VudHMgeW91ciBBUElfS0VZLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIHNlcnZpY2VJbml0aWFsaXplcihwYXJhbXM6IGNvbmZpZ1JlcSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyBGcmFtZS5cclxuICAgICAqIEBwYXJhbSAge21sRnJhbWVSZXF9IG1sRnJhbWVSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIG1sRnJhbWUobWxGcmFtZVJlcTogbWxGcmFtZVJlcSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogQW4gYXBwIGluZm9ybWF0aW9uIGNsYXNzIHVzZWQgdG8gc3RvcmUgYmFzaWMgaW5mb3JtYXRpb24gYWJvdXQgYXBwcyB3aXRoIHRoZSBITVMgQ29yZSBNTCBTREsgaW50ZWdyYXRlZCBhbmQgY29tcGxldGUgdGhlIGluaXRpYWxpemF0aW9uIG9mIE1MIEtpdC4gV2hlbiB1c2luZyBjbG91ZCBzZXJ2aWNlcyBvZiB0aGUgTUwgS2l0LCB5b3UgbmVlZCB0byBzZXQgdGhlIGFwaUtleSBvZiB5b3VyIGFwcC5cclxuICAgICAqIEBwYXJhbSAge2FwcFNldHRpbmdSZXF9IGFwcFNldHRpbmdSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICAgKi9cclxuICAgIGFwcFNldHRpbmcoYXBwU2V0dGluZ1JlcTogYXBwU2V0dGluZ1JlcSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBzZXJ2aWNlIGVuYWJsZSBsb2dnZXIgc2VydmljZS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHNlcnZpY2UgZGlzYWJsZSBsb2dnZXIgc2VydmljZS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBkaXNhYmxlTG9nZ2VyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHNldFVzZXJSZWdpb24ocmVnaW9uOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBnZXRDb3VudHJ5Q29kZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gICAgcGx1Z2luTmFtZTogXCJITVNNTEJvZHlcIixcclxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtbWxib2R5XCIsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gICAgcGx1Z2luUmVmOiBcIkhNU01MQm9keVwiLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNNTEJvZHkgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIE1MRmFjZVNldHRpbmcgPSBNTEZhY2VTZXR0aW5nO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBIYW5ka2V5UG9pbnRDb25maWcgPSBIYW5ka2V5UG9pbnRDb25maWc7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIENvbG9ycyA9IENvbG9ycztcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgUmVjdFN0eWxlID0gUmVjdFN0eWxlO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBNTFNrZWxldG9uQ29uZmlnID0gTUxTa2VsZXRvbkNvbmZpZztcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgTUxGbGFzaE1vZGUgPSBNTEZsYXNoTW9kZTtcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgTUxMZW5zVHlwZSA9IE1MTGVuc1R5cGU7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIE1MQW5hbHl6ZXJOYW1lID0gTUxBbmFseXplck5hbWU7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIE1MRnJhbWUgPSBNTEZyYW1lO1xyXG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgICBNTEZhY2VDb25maWdzID0gTUxGYWNlQ29uZmlncztcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgTUxMaXZlbmVzc0NvbmZpZyA9IE1MTGl2ZW5lc3NDb25maWc7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIHN5bmNUeXBlID0gc3luY1R5cGU7XHJcbiAgICBAQ29yZG92YVByb3BlcnR5KClcclxuICAgIEV2ZW50cyA9IEV2ZW50cztcclxuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gICAgT3B0aW9ucyA9IE9wdGlvbnM7XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHN0aWxsR2VzdHVyZUFuYWx5c2VyKHN0aWxsR2VzdHVyZVJlcTogc3RpbGxHZXN0dXJlUmVxKTogUHJvbWlzZTxNTEdlc3R1cmU+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHN0b3BTdGlsbEdlc3R1cmVBbmFseXNlcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ2V0R2VzdHVyZUFuYWx5c2VyU2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZmFjZSBkZXRlY3Rpb24gc2VydmljZSBjYW4gZGV0ZWN0IHRoZSBmYWNlIGNvbnRvdXIsIHJlY29nbml6ZSBmYWNpYWwgZmVhdHVyZXMsIGFuZCBkZXRlcm1pbmUgZmFjaWFsIGV4cHJlc3Npb25zIGZvciBhIHBlcnNvbi5cclxuICAgICAqIEBwYXJhbSAge2ZhY2VSZXF9IGZhY2VSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBmYWNlIGRldGVjdGlvbi5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8TUxGYWNlPlxyXG4gICAgICovXHJcbiAgICBzdGlsbEZhY2VBbmFseXNlcihmYWNlUmVxOiBmYWNlUmVxKTogUHJvbWlzZTxNTEZhY2U+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIHN0aWxsRmFjZUFuYWx5c2VySW5mbygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgc2V0RmFjZURldGVjdGVkKFxyXG4gICAgICAgIG1heEZhY2VWZXJpZmljYXRpb25SZXE6IG1heEZhY2VWZXJpZmljYXRpb25SZXFcclxuICAgICk6IFByb21pc2U8TUxGYWNlVmVyaWZpY2F0aW9uUmVzdWx0PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGdldEZhY2VWZXJpZmljYXRpb25BbmFseXNlclNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtICB7ZmFjZVZlcmlmaWNhdGlvblJlcX0gZmFjZVZlcmlmaWNhdGlvblJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIGZhY2UgZGV0ZWN0aW9uLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxNTEZhY2VWZXJpZmljYXRpb25SZXN1bHQ+XHJcbiAgICAgKi9cclxuICAgIHN0aWxsRmFjZVZlcmlmaWNhdGlvbkFuYWx5c2VyKFxyXG4gICAgICAgIGZhY2VWZXJpZmljYXRpb25SZXE6IGZhY2VWZXJpZmljYXRpb25SZXFcclxuICAgICk6IFByb21pc2U8TUxGYWNlVmVyaWZpY2F0aW9uUmVzdWx0PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCBmYWNlIHJlY29nbml0aW9uIHNlcnZpY2UuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgc3RvcFN0aWxsRmFjZVZlcmlmaWNhdGlvbkFuYWx5c2VyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCBmYWNlIHJlY29nbml0aW9uIHNlcnZpY2UuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgc3RvcFN0aWxsRmFjZUFuYWx5c2VyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICBUaGUgc2tlbGV0b24gZGV0ZWN0aW9uIHNlcnZpY2UgZGV0ZWN0cyBhbmQgbG9jYXRlcyBrZXkgcG9pbnRzIG9mIHRoZSBodW1hbiBib2R5LCBzdWNoIGFzIHRoZSB0b3Agb2YgdGhlIGhlYWQsIG5lY2ssIHNob3VsZGVyLCBlbGJvdywgd3Jpc3QsIGhpcCwga25lZSwgYW5kIGFua2xlLlxyXG4gICAqIEBwYXJhbSAge3N0aWxsU2tlbGV0b25SZXEgfHN0aWxsU2tlbGV0b25TaW1pbGFyaXR5UmVxfSBzdGlsbFNrZWxldG9uUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3Igc3RpbGwgc2tlbGV0b24gZGV0ZWN0aW9uLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8TUxTa2VsZXRvbj5cclxuICAgKi9cclxuICAgIHN0aWxsU2tlbGV0b25BbmFseXNlcihcclxuICAgICAgICBzdGlsbFNrZWxldG9uUmVxOiBzdGlsbFNrZWxldG9uUmVxIHwgc3RpbGxTa2VsZXRvblNpbWlsYXJpdHlSZXFcclxuICAgICk6IFByb21pc2U8TUxTa2VsZXRvbj4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsaXZlbmVzcyBkZXRlY3Rpb24gc2VydmljZSBzdXBwb3J0cyBzaWxlbnQgbGl2ZW5lc3MgZGV0ZWN0aW9uIGFuZCBjYXB0dXJlcyBmYWNlcyBpbiByZWFsIHRpbWUuIEl0IGNhbiBkZXRlcm1pbmUgd2hldGhlciBhIGZhY2UgaXMgb2YgYSByZWFsIHVzZXIgb3IgaXMgYSBmYWNlIGF0dGFja1xyXG4gICAgICogKGZvciBleGFtcGxlLCBmYWNlIHJlY2FwdHVyZSBpbWFnZSwgZmFjZSByZWNhcHR1cmUgdmlkZW8sIG9yIGZhY2UgbWFzaykgd2l0aG91dCByZXF1aXJpbmcgdGhlIHVzZXIgdG8gZm9sbG93IHNwZWNpZmljIGluc3RydWN0aW9ucy5cclxuICAgICAqIEBwYXJhbSAge2xpdmVuZXNzRGV0ZWN0aW9uUmVxfSBsaXZlbmVzc0RldGVjdGlvblJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPE1MTGl2ZW5lc3NDYXB0dXJlUmVzdWx0PlxyXG4gICAgICovXHJcbiAgICBsaXZlTGl2ZW5lc3NBbmFseXNlcihcclxuICAgICAgICBsaXZlbmVzc0RldGVjdGlvblJlcTogbGl2ZW5lc3NEZXRlY3Rpb25SZXFcclxuICAgICk6IFByb21pc2U8TUxMaXZlbmVzc0NhcHR1cmVSZXN1bHQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHNlcnZpY2UgY2FuIGRldGVjdHMgMjEgaGFuZCBrZXlwb2ludHMgKGluY2x1ZGluZyBmaW5nZXJ0aXBzLCBrbnVja2xlcywgYW5kIHdyaXN0cykgYW5kIHJldHVybiBwb3NpdGlvbnMgb2YgdGhlIGtleXBvaW50cy5cclxuICAgICAqIEBwYXJhbSAge3N0aWxsSGFuZEtleXBvaW50UmVxIH0gc3RpbGxIYW5kS2V5cG9pbnRSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBzdGlsbCBoYW5ka2V5IGFuYWx5c2VyLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxNTEhhbmRLZXlwb2ludHM+XHJcbiAgICAgKi9cclxuICAgIHN0aWxsSGFuZGtleUFuYWx5c2VyKFxyXG4gICAgICAgIHN0aWxsSGFuZEtleXBvaW50UmVxOiBzdGlsbEhhbmRLZXlwb2ludFJlcVxyXG4gICAgKTogUHJvbWlzZTxNTEhhbmRLZXlwb2ludHM+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wIGhhbmQgYW5hbHl6ZXIgc2VydmljZS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBzdG9wU3RpbGxIYW5kS2V5QW5hbHlzZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIGZhY2UgYW5hbHl6ZXIgc2V0dGluZ3MuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgZ2V0RmFjZUFuYWx5c2VyU2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kICByZXR1cm5zIGhhbmQgYW5hbHl6ZXIgc2V0dGluZ3MuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgICAqL1xyXG4gICAgZ2V0SGFuZEtleUFuYWx5c2VyU2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3Agc2tlbGV0b24gYW5hbHl6ZXIgc2VydmljZS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAgICovXHJcbiAgICBzdG9wU3RpbGxTa2VsZXRvbkFuYWx5c2VyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGludGVyYWN0aXZlIGJpb21ldHJpYyB2ZXJpZmljYXRpb24gc2VydmljZSBpbXBsZW1lbnRzIGxpdmVuZXNzIGRldGVjdGlvbiBpbiBhbiBpbnRlcmFjdGl2ZSB3YXkuIEl0IGNhcHR1cmVzIGZhY2VzIGluIHJlYWwgdGltZSBhbmQgZGV0ZXJtaW5lcyBcclxuICAgICAqIHdoZXRoZXIgYSBmYWNlIGlzIG9mIGEgcmVhbCBwZXJzb24gb3IgaXMgYSBwcmVzZW50YXRpb24gYXR0YWNrIChmb3IgZXhhbXBsZSwgYSBmYWNlIHJlY2FwdHVyZSBpbWFnZSwgZmFjZSByZWNhcHR1cmUgdmlkZW8sIG9yIGZhY2UgbWFzaykgYnkgY2hlY2tpbmcgXHJcbiAgICAgKiB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgYWN0aW9ucyBhcmUgZGV0ZWN0ZWQuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPE1MSW50ZXJhY3RpdmVMaXZlbmVzc0NhcHR1cmVSZXN1bHQ+XHJcbiAgICAgKi9cclxuICAgIGludGVyYWN0aXZlTGl2ZW5lc3NBbmFseXNlcihcclxuICAgICAgICBpbnRlcmFjdGl2ZUxpdmVuZXNzRGV0ZWN0aW9uUmVxOiBpbnRlcmFjdGl2ZUxpdmVuZXNzRGV0ZWN0aW9uUmVxXHJcbiAgICApOiBQcm9taXNlPE1MSW50ZXJhY3RpdmVMaXZlbmVzc0NhcHR1cmVSZXN1bHQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgaW50ZXJhY3RpdmUgYmlvbWV0cmljIHZlcmlmaWNhdGlvbiBzZXJ2aWNlIGltcGxlbWVudHMgbGl2ZW5lc3MgZGV0ZWN0aW9uIGluIGFuIGludGVyYWN0aXZlIHdheS4gSXQgY2FwdHVyZXMgZmFjZXMgaW4gcmVhbCB0aW1lIGFuZCBkZXRlcm1pbmVzIFxyXG4gICAgICogd2hldGhlciBhIGZhY2UgaXMgb2YgYSByZWFsIHBlcnNvbiBvciBpcyBhIHByZXNlbnRhdGlvbiBhdHRhY2sgKGZvciBleGFtcGxlLCBhIGZhY2UgcmVjYXB0dXJlIGltYWdlLCBmYWNlIHJlY2FwdHVyZSB2aWRlbywgb3IgZmFjZSBtYXNrKSBieSBjaGVja2luZyBcclxuICAgICAqIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBhY3Rpb25zIGFyZSBkZXRlY3RlZC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2U8TUxJbnRlcmFjdGl2ZUxpdmVuZXNzQ2FwdHVyZVJlc3VsdD5cclxuICAgICAqL1xyXG4gICAgY3VzdG9tSW50ZXJhY3RpdmVMaXZlbmVzc0FuYWx5c2VyKFxyXG4gICAgICAgIGN1c3RvbUludGVyYWN0aXZlTGl2ZW5lc3NEZXRlY3Rpb25SZXE6IGN1c3RvbUludGVyYWN0aXZlTGl2ZW5lc3NEZXRlY3Rpb25SZXFcclxuICAgICk6IFByb21pc2U8TUxJbnRlcmFjdGl2ZUxpdmVuZXNzQ2FwdHVyZVJlc3VsdD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNTExpdmUge1xyXG4gICAgcHJpdmF0ZSBhclNjZW5lOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IHN0cmluZywgZGl2SWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChzY2VuZSA9PT0gXCJBQ1RJT05fTElWRV9BTkFMWVNFXCIpXHJcbiAgICAgICAgICAgIHRoaXMuYXJTY2VuZSA9IG5ldyAoSE1TTUxCb2R5UGx1Z2luLmdldFBsdWdpbigpLmxpdmVFbmdpbmVBbmFseXNlcikoZGl2SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKGV2ZW50TmFtZTogRXZlbnRzLCBjYWxsOiAodmFsdWU6IGFueSkgPT4gdm9pZCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFyU2NlbmUub24oZXZlbnROYW1lLCBjYWxsKTtcclxuICAgIH1cclxuICAgIHN0YXJ0TUxMaXZlKGNvbmZpZz86IE1MY29uZmlnLCBib3VuZHM/OiBNTEJvdW5kcyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFyU2NlbmUuc3RhcnRNTExpdmUoY29uZmlnLCBib3VuZHMpO1xyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hclNjZW5lLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIHNldENvbmZpZyhjb25maWc6IE1MY29uZmlnKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJTY2VuZS5zZXRDb25maWcoY29uZmlnKTtcclxuICAgIH1cclxuICAgIHNjcm9sbCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hclNjZW5lLnNjcm9sbCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgbGl2ZUVuZ2luZUFuYWx5c2VyIGV4dGVuZHMgTUxMaXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGRpdklkOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihcIkFDVElPTl9MSVZFX0FOQUxZU0VcIiwgZGl2SWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1MQm91bmRzIHtcclxuICAgIG1hcmdpblRvcD86IG51bWJlcjtcclxuICAgIG1hcmdpbkJvdHRvbT86IG51bWJlcjtcclxuICAgIG1hcmdpbkxlZnQ/OiBudW1iZXI7XHJcbiAgICBtYXJnaW5SaWdodD86IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE1MY29uZmlnIHtcclxuICAgIGxlbnNFbmdpbmVSZXE6IGxlbnNFbmdpbmVSZXE7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBsZW5zRW5naW5lUmVxIHtcclxuICAgIGFuYWx5emVyTmFtZTogTUxBbmFseXplck5hbWU7XHJcbiAgICBsZW5zRW5naW5lU2V0dGluZz86IE1MTGVuc0VuZ2luZVNldHRpbmc7XHJcbiAgICBncmFwaGljU2V0dGluZz86XHJcbiAgICB8IEZhY2VHcmFwaGljU2V0dGluZ1xyXG4gICAgfCBIYW5ka2V5R3JhcGhpY1NldHRpbmdcclxuICAgIHwgU2tlbGV0b25HcmFwaGljU2V0dGluZ1xyXG4gICAgfCBudWxsO1xyXG4gICAgYW5hbHl6ZXJTZXR0aW5nPzpcclxuICAgIHwgbWxGYWNlQW5hbHl6ZXJTZXR0aW5nXHJcbiAgICB8IE1MRmFjZVZlcmlmaWNhdGlvbkFuYWx5emVyU2V0dGluZ1xyXG4gICAgfCBtbEhhbmRLZXlwb2ludFNldHRpbmdcclxuICAgIHwgbnVsbDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE1MTGVuc0VuZ2luZVNldHRpbmcge1xyXG4gICAgZnBzPzogbnVtYmVyIHwgbnVsbDtcclxuICAgIGRpc3BsYXlEaW1lbnNpb25JPzogbnVtYmVyIHwgbnVsbDtcclxuICAgIGRpc3BsYXlEaW1lbnNpb25JMT86IG51bWJlciB8IG51bGw7XHJcbiAgICBsZW5zVHlwZT86IE1MTGVuc1R5cGUgfCBudWxsO1xyXG4gICAgZW5hYmxlRm9jdXM/OiBib29sZWFuIHwgbnVsbDtcclxuICAgIGZsYXNoTW9kZT86IE1MRmxhc2hNb2RlIHwgbnVsbDtcclxufVxyXG5leHBvcnQgZW51bSBNTEZsYXNoTW9kZSB7XHJcbiAgICBBVVRPID0gXCJhdXRvXCIsXHJcbiAgICBPTiA9IFwib25cIixcclxuICAgIE9GRiA9IFwib2ZmXCIsXHJcbn1cclxuZXhwb3J0IGVudW0gTUxMZW5zVHlwZSB7XHJcbiAgICBCQUNLX0xFTlMgPSAwLFxyXG4gICAgRlJPTlRfTEVOUyA9IDEsXHJcbn1cclxuZXhwb3J0IGVudW0gTUxBbmFseXplck5hbWUge1xyXG4gICAgTElWRUZBQ0UgPSBcIkZBQ0VcIixcclxuICAgIExJVkVGQUNFM0QgPSBcIkZBQ0UzRFwiLFxyXG4gICAgTElWRUZBQ0VNQVggPSBcIkZBQ0VNQVhcIixcclxuICAgIExJVkVIQU5EID0gXCJIQU5EXCIsXHJcbiAgICBMSVZFU0tFTEVUT04gPSBcIlNLRUxFVE9OXCIsXHJcbiAgICBMSVZFT0JKRUNUID0gXCJPQkpFQ1RcIixcclxuICAgIExJVkVDTEFTU0lGSUNBVElPTiA9IFwiQ0xBU1NJRklDQVRJT05cIixcclxuICAgIExJVkVTQ0VORSA9IFwiU0NFTkVcIixcclxuICAgIExJVkVURVhUID0gXCJURVhUXCIsXHJcbiAgICBMSVZFR0VTVFVSRSA9IFwiR0VTVFVSRVwiLFxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgZG9ab29tUmVxIHtcclxuICAgIHNjYWxlPzogbnVtYmVyIHwgbnVsbDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIG1sRnJhbWVSZXEge1xyXG4gICAgYWN0aW9uTmFtZTogTUxGcmFtZTtcclxuICAgIGZpbGVQYXRoOiBhbnk7XHJcbiAgICBxdWFkcmFudDogUXVhZHJhbnRUeXBlcztcclxufVxyXG5leHBvcnQgZW51bSBNTEZyYW1lIHtcclxuICAgIGdldFByZXZpZXdCaXRtYXAgPSBcImdldFByZXZpZXdCaXRtYXBcIixcclxuICAgIHJlYWRCaXRtYXAgPSBcInJlYWRCaXRtYXBcIixcclxuICAgIHJvdGF0ZSA9IFwicm90YXRlXCIsXHJcbn1cclxuZXhwb3J0IGVudW0gUXVhZHJhbnRUeXBlcyB7XHJcbiAgICBTQ1JFRU5fRklSU1RfUVVBRFJBTlQgPSAwLFxyXG4gICAgU0NSRUVOX1NFQ09ORF9RVUFEUkFOVCA9IDEsXHJcbiAgICBTQ1JFRU5fVEhJUkRfUVVBRFJBTlQgPSAyLFxyXG4gICAgU0NSRUVOX0ZPVVJUSF9RVUFEUkFOVCA9IDMsXHJcbn1cclxuXHJcbi8vIEFQSSBLRVlcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgY29uZmlnUmVxIHtcclxuICAgIGFwaUtleTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGFwcFNldHRpbmdSZXEge1xyXG4gICAgYXBpS2V5Pzogc3RyaW5nIHwgbnVsbDtcclxuICAgIGFwcGxpY2F0aW9uSWQ/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgY2VydEZpbmdlcnByaW50Pzogc3RyaW5nIHwgbnVsbDtcclxufVxyXG5cclxuLy8gU1RJTEwgJiYgTElWRSBGQUNFIEFOQUxZU0VSXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGZhY2VSZXEge1xyXG4gICAgbWxGYWNlQW5hbHlzZXJTZXR0aW5nPzogbWxGYWNlQW5hbHl6ZXJTZXR0aW5nIHwgbnVsbDtcclxuICAgIGFuYWx5c2VNb2RlPzogTUxGYWNlQ29uZmlncyB8IG51bGw7XHJcbiAgICBmaWxlUGF0aDogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGZhY2VWZXJpZmljYXRpb25SZXEge1xyXG4gICAgbWxGYWNlVmVyaWZpY2F0aW9uQW5hbHl6ZXJTZXR0aW5nPzogTUxGYWNlVmVyaWZpY2F0aW9uQW5hbHl6ZXJTZXR0aW5nIHwgbnVsbDtcclxuICAgIHN5bmNUeXBlPzogc3luY1R5cGUgfCBudWxsO1xyXG4gICAgZmlsZVBhdGg6IGFueTtcclxuICAgIGZpbGVQYXRoMjogYW55O1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBNTEZhY2VDb25maWdzIHtcclxuICAgIFRZUEVfMkRfU1lOQyA9IDAsXHJcbiAgICBUWVBFXzJEX0FTWU5DID0gMSxcclxuICAgIFRZUEVfM0RfU1lOQyA9IDIsXHJcbiAgICBUWVBFXzNEX0FTWU5DID0gMyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGYWNlR3JhcGhpY1NldHRpbmcge1xyXG4gICAgZmFjZVBvc2l0aW9uUGFpbnRTZXR0aW5nPzogRmFjZVBvc2l0aW9uUGFpbnRTZXR0aW5nIHwgbnVsbDtcclxuICAgIHRleHRQYWludFNldHRpbmc/OiBUZXh0UGFpbnRTZXR0aW5nRmFjZSB8IG51bGw7XHJcbiAgICBmYWNlRmVhdHVyZVBhaW50VGV4dFNldHRpbmc/OiBGYWNlRmVhdHVyZVBhaW50VGV4dFNldHRpbmcgfCBudWxsO1xyXG4gICAga2V5cG9pbnRQYWludFNldHRpbmc/OiBLZXlwb2ludFBhaW50U2V0dGluZyB8IG51bGw7XHJcbiAgICBib3hQYWludFNldHRpbmc/OiBCb3hQYWludFNldHRpbmdGYWNlIHwgbnVsbDtcclxuICAgIGZhY2VQYWludFNldHRpbmc/OiBGYWNlUGFpbnRTZXR0aW5nIHwgbnVsbDtcclxuICAgIGV5ZVBhaW50U2V0dGluZz86IEV5ZVBhaW50U2V0dGluZyB8IG51bGw7XHJcbiAgICBleWVicm93UGFpbnRTZXR0aW5nPzogRXllYnJvd1BhaW50U2V0dGluZyB8IG51bGw7XHJcbiAgICBub3NlUGFpbnRTZXR0aW5nPzogTm9zZVBhaW50U2V0dGluZyB8IG51bGw7XHJcbiAgICBub3NlQmFzZVBhaW50U2V0dGluZz86IE5vc2VCYXNlUGFpbnRTZXR0aW5nIHwgbnVsbDtcclxuICAgIGxpcFBhaW50U2V0dGluZz86IExpcFBhaW50U2V0dGluZyB8IG51bGw7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBMaXBQYWludFNldHRpbmcge1xyXG4gICAgY29sb3I/OiBTdHJpbmcgfCBDb2xvcnMgfCBudWxsO1xyXG4gICAgc3R5bGU/OiBSZWN0U3R5bGUgfCBudWxsO1xyXG4gICAgc3Ryb2tlV2lkdGg6IE51bWJlciB8IG51bGw7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBOb3NlUGFpbnRTZXR0aW5nIHtcclxuICAgIGNvbG9yPzogU3RyaW5nIHwgQ29sb3JzIHwgbnVsbDtcclxuICAgIHN0eWxlPzogUmVjdFN0eWxlIHwgbnVsbDtcclxuICAgIHN0cm9rZVdpZHRoPzogTnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTm9zZUJhc2VQYWludFNldHRpbmcge1xyXG4gICAgY29sb3I/OiBTdHJpbmcgfCBDb2xvcnMgfCBudWxsO1xyXG4gICAgc3R5bGU/OiBSZWN0U3R5bGUgfCBudWxsO1xyXG4gICAgc3Ryb2tlV2lkdGg/OiBOdW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBFeWVicm93UGFpbnRTZXR0aW5nIHtcclxuICAgIGNvbG9yPzogU3RyaW5nIHwgQ29sb3JzIHwgbnVsbDtcclxuICAgIHN0eWxlPzogUmVjdFN0eWxlO1xyXG4gICAgc3Ryb2tlV2lkdGg/OiBOdW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBFeWVQYWludFNldHRpbmcge1xyXG4gICAgY29sb3I/OiBTdHJpbmcgfCBDb2xvcnM7XHJcbiAgICBzdHlsZT86IFJlY3RTdHlsZSB8IENvbG9ycztcclxuICAgIHN0cm9rZVdpZHRoOiBOdW1iZXIgfCBudWxsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRmFjZVBhaW50U2V0dGluZyB7XHJcbiAgICBjb2xvcj86IFN0cmluZyB8IENvbG9ycyB8IG51bGw7XHJcbiAgICBzdHlsZT86IFJlY3RTdHlsZSB8IG51bGw7XHJcbiAgICBzdHJva2VXaWR0aDogTnVtYmVyIHwgbnVsbDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEJveFBhaW50U2V0dGluZ0ZhY2Uge1xyXG4gICAgY29sb3I/OiBTdHJpbmcgfCBDb2xvcnMgfCBudWxsO1xyXG4gICAgc3R5bGU/OiBSZWN0U3R5bGUgfCBudWxsO1xyXG4gICAgc3Ryb2tlV2lkdGg/OiBOdW1iZXIgfCBudWxsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgS2V5cG9pbnRQYWludFNldHRpbmcge1xyXG4gICAgY29sb3I/OiBDb2xvcnMgfCBDb2xvcnMgfCBudWxsO1xyXG4gICAgc3R5bGU/OiBSZWN0U3R5bGUgfCBudWxsO1xyXG4gICAgdGV4dFNpemU6IE51bWJlciB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmFjZUZlYXR1cmVQYWludFRleHRTZXR0aW5nIHtcclxuICAgIGNvbG9yPzogQ29sb3JzIHwgbnVsbDtcclxuICAgIHRleHRTaXplOiBOdW1iZXIgfCBudWxsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRmFjZVBvc2l0aW9uUGFpbnRTZXR0aW5nIHtcclxuICAgIGNvbG9yPzogQ29sb3JzIHwgbnVsbDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFRleHRQYWludFNldHRpbmdGYWNlIHtcclxuICAgIGNvbG9yPzogQ29sb3JzIHwgbnVsbDtcclxuICAgIHRleHRTaXplPzogTnVtYmVyIHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNTEZhY2VWZXJpZmljYXRpb25BbmFseXplclNldHRpbmcge1xyXG4gICAgbWF4RmFjZURldGN0ZWQ6IG51bWJlciB8IG51bGw7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBtbEZhY2VBbmFseXplclNldHRpbmcge1xyXG4gICAgZmVhdHVyZVR5cGU/OiBNTEZhY2VTZXR0aW5nIHwgbnVsbDtcclxuICAgIGtleVBvaW50VHlwZT86IE1MRmFjZVNldHRpbmcgfCBudWxsO1xyXG4gICAgbWF4U2l6ZUZhY2VPbmx5PzogYm9vbGVhbiB8IG51bGw7XHJcbiAgICBtaW5GYWNlUHJvcG9ydGlvbj86IG51bWJlciB8IG51bGw7XHJcbiAgICBwZXJmb3JtYW5jZVR5cGU/OiBNTEZhY2VTZXR0aW5nIHwgbnVsbDtcclxuICAgIHBvc2VEaXNhYmxlZD86IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgc2hhcGVUeXBlPzogTUxGYWNlU2V0dGluZyB8IG51bGw7XHJcbiAgICB0cmFjaW5nQWxsb3dlZD86IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgdHJhY2luZ01vZGU/OiBudW1iZXIgfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBNTEZhY2VTZXR0aW5nIHtcclxuICAgIE1PREVfVFJBQ0lOR19GQVNUID0gMSxcclxuICAgIE1PREVfVFJBQ0lOR19ST0JVU1QgPSAyLFxyXG4gICAgVFlQRV9GRUFUVVJFUyA9IDEsXHJcbiAgICBUWVBFX0ZFQVRVUkVfQUdFID0gMjU2LFxyXG4gICAgVFlQRV9GRUFUVVJFX0JFQVJEID0gMzIsXHJcbiAgICBUWVBFX0ZFQVRVUkVfRU1PVElPTiA9IDQsXHJcbiAgICBUWVBFX0ZFQVRVUkVfRVlFR0xBU1MgPSA4LFxyXG4gICAgVFlQRV9GRUFUVVJFX0dFTkRBUiA9IDEyOCxcclxuICAgIFRZUEVfRkVBVFVSRV9IQVQgPSAxNixcclxuICAgIFRZUEVfRkVBVFVSRV9PUEVOQ0xPU0VFWUUgPSA2NCxcclxuICAgIFRZUEVfS0VZUE9JTlRTID0gMSxcclxuICAgIFRZUEVfUFJFQ0lTSU9OID0gMSxcclxuICAgIFRZUEVfU0hBUEVTID0gMixcclxuICAgIFRZUEVfU1BFRUQgPSAyLFxyXG4gICAgVFlQRV9VTlNVUFBPUlRfRkVBVFVSRVMgPSAyLFxyXG4gICAgVFlQRV9VTlNVUFBPUlRfS0VZUE9JTlRTID0gMCxcclxuICAgIFRZUEVfVU5TVVBQT1JUX1NIQVBFUyA9IDMsXHJcbiAgICBUWVBFX0JPVFRPTV9PRl9NT1VUSCA9IDEsXHJcbiAgICBUWVBFX0xFRlRfQ0hFRUsgPSAyLFxyXG4gICAgVFlQRV9MRUZUX0VBUiA9IDMsXHJcbiAgICBUWVBFX0xFRlRfU0lERV9PRl9NT1VUSCA9IDYsXHJcbiAgICBUWVBFX1JJR0hUX0NIRUVLID0gOCxcclxuICAgIFRZUEVfUklHSFRfRUFSID0gOSxcclxuICAgIFRZUEVfUklHSFRfU0lERV9PRl9NT1VUSCA9IDEyLFxyXG4gICAgVFlQRV9USVBfT0ZfTEVGVF9FQVIgPSA0LFxyXG4gICAgVFlQRV9USVBfT0ZfTk9TRSA9IDcsXHJcbiAgICBUWVBFX1RJUF9PRl9SSUdIVF9FQVIgPSAxMCxcclxuICAgIFRZUEVfQUxMID0gMCxcclxuICAgIFRZUEVfQk9UVE9NX09GX0xFRlRfRVlFQlJPVyA9IDQsXHJcbiAgICBUWVBFX0JPVFRPTV9PRl9MT1dFUl9MSVAgPSA4LFxyXG4gICAgVFlQRV9CT1RUT01fT0ZfTk9TRSA9IDEyLFxyXG4gICAgVFlQRV9CT1RUT01fT0ZfUklHSFRfRVlFQlJPVyA9IDUsXHJcbiAgICBUWVBFX0JPVFRPTV9PRl9VUFBFUl9MSVAgPSAxMCxcclxuICAgIFRZUEVfQlJJREdFX09GX05PU0UgPSAxMyxcclxuICAgIFRZUEVfRkFDRSA9IDEsXHJcbiAgICBUWVBFX1RPUF9PRl9MRUZUX0VZRUJST1cgPSA2LFxyXG4gICAgVFlQRV9UT1BfT0ZfTE9XRVJfTElQID0gOSxcclxuICAgIFRZUEVfVE9QX09GX1JJR0hUX0VZRUJST1cgPSA3LFxyXG4gICAgVFlQRV9UT1BfT0ZfVVBQRVJfTElQID0gMTEsXHJcbn1cclxuXHJcbi8vIEZBQ0UgVkVSSUZJQ0FUSU9OXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIG1heEZhY2VWZXJpZmljYXRpb25SZXEge1xyXG4gICAgTWF4RmFjZURldGN0ZWQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbi8vTGl2ZSAmJiBTdGlsIEhhbmRrZXlQb2ludFxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBzdGlsbEhhbmRLZXlwb2ludFJlcSB7XHJcbiAgICBzeW5jVHlwZT86IHN5bmNUeXBlIHwgbnVsbDtcclxuICAgIGZpbGVQYXRoOiBhbnk7XHJcbiAgICBoYW5ka2V5U2V0dGluZz86IG1sSGFuZEtleXBvaW50U2V0dGluZyB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2Ugc3RpbGxHZXN0dXJlUmVxIHtcclxuICAgIHN5bmNUeXBlPzogc3luY1R5cGUgfCBudWxsO1xyXG4gICAgZmlsZVBhdGg6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gc3luY1R5cGUge1xyXG4gICAgU1lOQ19NT0RFID0gMCxcclxuICAgIEFTWU5DX01PREUgPSAxLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1MR2VzdHVyZSB7XHJcbiAgICByZWN0PzogUmVjdDtcclxuICAgIHNjb3JlPzogbnVtYmVyO1xyXG4gICAgY2F0ZWdvcnk/OiBudW1iZXI7XHJcbiAgICBoYXNoQ29kZT86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gR2VzdHVyZVR5cGVzIHtcclxuICAgIE9ORSA9IDAsXHJcbiAgICBTRUNPTkQgPSAxLFxyXG4gICAgVEhSRUUgPSAyLFxyXG4gICAgRk9VUiA9IDMsXHJcbiAgICBGSVZFID0gNCxcclxuICAgIFNJWCA9IDUsXHJcbiAgICBTRVZFTiA9IDYsXHJcbiAgICBFSUdIVCA9IDcsXHJcbiAgICBOSU5FID0gOCxcclxuICAgIERJU1MgPSA5LFxyXG4gICAgRklTVCA9IDEwLFxyXG4gICAgR09PRCA9IDExLFxyXG4gICAgSEVBUlQgPSAxMixcclxuICAgIE9LID0gMTMsXHJcbiAgICBVTktOT1dOID0gMTQsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VzdHVyZUdyYXBoaWNTZXR0aW5nIHtcclxuICAgIGlkUGFpbnRuZXdTZXR0aW5nPzogSWRQYWludG5ld1NldHRpbmcgfCBudWxsO1xyXG4gICAgcmVjdFBhaW50U2V0dGluZz86IFJlY3RQYWludFNldHRpbmcgfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhhbmRrZXlHcmFwaGljU2V0dGluZyB7XHJcbiAgICBpZFBhaW50bmV3U2V0dGluZz86IElkUGFpbnRuZXdTZXR0aW5nIHwgbnVsbDtcclxuICAgIHJlY3RQYWludFNldHRpbmc/OiBSZWN0UGFpbnRTZXR0aW5nIHwgbnVsbDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElkUGFpbnRuZXdTZXR0aW5nIHtcclxuICAgIGNvbG9yPzogQ29sb3JzIHwgbnVsbDtcclxuICAgIHRleHRTaXplPzogTnVtYmVyIHwgbnVsbDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFJlY3RQYWludFNldHRpbmcge1xyXG4gICAgY29sb3I/OiBDb2xvcnMgfCBudWxsO1xyXG4gICAgc3R5bGU/OiBSZWN0U3R5bGUgfCBudWxsO1xyXG4gICAgYm94U3Ryb2tlV2lkdGg/OiBOdW1iZXIgfCBudWxsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgbWxIYW5kS2V5cG9pbnRTZXR0aW5nIHtcclxuICAgIHNjZW5lVHlwZT86IEhhbmRrZXlQb2ludENvbmZpZyB8IG51bGw7XHJcbiAgICBtYXhIYW5kUmVzdWx0cz86IG51bWJlciB8IG51bGw7XHJcbn1cclxuZXhwb3J0IGVudW0gSGFuZGtleVBvaW50Q29uZmlnIHtcclxuICAgIFRZUEVfQUxMID0gMCxcclxuICAgIFRZUEVfS0VZUE9JTlRfT05MWSA9IDEsXHJcbiAgICBUWVBFX1JFQ1RfT05MWSA9IDIsXHJcbiAgICBNQVhfSEFORFNfTlVNID0gMTAsXHJcbn1cclxuXHJcbi8vTGl2ZW5lc3MgRGV0ZWN0aW9uXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGxpdmVuZXNzRGV0ZWN0aW9uUmVxIHtcclxuICAgIGFuYWx5c2VyTW9kZT86IE1MTGl2ZW5lc3NDYXB0dXJlUmVzdWx0IHwgbnVsbDtcclxufVxyXG5leHBvcnQgZW51bSBNTExpdmVuZXNzQ29uZmlnIHtcclxuICAgIERFRkFVTFQgPSAwLFxyXG4gICAgQ1VTVE9NID0gMSxcclxufVxyXG5leHBvcnQgZW51bSBNTExpdmVuZXNzQ2FwdHVyZUVycm9yIHtcclxuICAgIENBTUVSQV9OT19QRVJNSVNTSU9OID0gMTE0MDEsXHJcbiAgICBDQU1FUkFfU1RBUlRfRkFJTEVEID0gMTE0MDIsXHJcbiAgICBVU0VSX0NBTkNFTCA9IDExNDAzLFxyXG4gICAgREVURUNUX0ZBQ0VfVElNRV9PVVQgPSAxMTQwNCxcclxuICAgIERFVEVDVF9NQVNLID0gMSxcclxufVxyXG5cclxuLy8gQ3VzdG9tIEludGVyYWN0aXZlIExpdmVuZXNzIERldGVjdGlvblxyXG5leHBvcnQgaW50ZXJmYWNlIGN1c3RvbUludGVyYWN0aXZlTGl2ZW5lc3NEZXRlY3Rpb25SZXEge1xyXG4gICAgYWN0aW9uPzogQWN0aW9uLFxyXG4gICAgZGV0ZWN0aW9uVGltZU91dDogbnVtYmVyO1xyXG4gICAgY2FtZXJhRnJhbWU6IFJlY3Q7XHJcbiAgICBmYWNlRnJhbWU6IFJlY3Q7XHJcbiAgICB0ZXh0TWFyZ2luOiBudW1iZXI7XHJcbiAgICB0ZXh0T3B0aW9ucz86IFRleHRPcHRpb25zO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHNob3dTdGF0dXNDb2RlOiBib29sZWFuO1xyXG4gICAgc3RhdHVzQ29kZXM6IE1hcDxudW1iZXIsIHN0cmluZz47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb24ge1xyXG4gICAgYWN0aW9uQXJyYXk6IE1hcDxudW1iZXIsIHN0cmluZz47XHJcbiAgICBudW06IG51bWJlcjtcclxuICAgIGlzUmFuZG9tOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVjdCB7XHJcbiAgICBib3R0b206IG51bWJlcixcclxuICAgIGxlZnQ6IG51bWJlcixcclxuICAgIHJpZ2h0OiBudW1iZXIsXHJcbiAgICB0b3A6IG51bWJlcixcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFRleHRPcHRpb25zIHtcclxuICAgIHRleHRDb2xvcj86IG51bWJlcjtcclxuICAgIHRleHRTaXplPzogbnVtYmVyO1xyXG4gICAgYXV0b1NpemVUZXh0PzogYm9vbGVhbjtcclxuICAgIG1pblRleHRTaXplPzogbnVtYmVyO1xyXG4gICAgbWF4VGV4dFNpemU/OiBudW1iZXI7XHJcbiAgICBncmFudWxhcml0eT86IG51bWJlcjtcclxufVxyXG5cclxuLy9TVElMTCAmJiBMSVZFIFNLRUxFVE9OIEFOQUxZU0VSXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHN0aWxsU2tlbGV0b25SZXEge1xyXG4gICAgZmlsZVBhdGg6IGFueTtcclxuICAgIHN5bmNUeXBlOiBNTFNrZWxldG9uQ29uZmlnO1xyXG4gICAgYW5hbHl6ZXJUeXBlOiBNTFNrZWxldG9uQ29uZmlnO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2Ugc3RpbGxTa2VsZXRvblNpbWlsYXJpdHlSZXEge1xyXG4gICAgZmlsZVBhdGg6IGFueTtcclxuICAgIGZpbGVwYXRoMjogYW55O1xyXG4gICAgc3luY1R5cGU6IE1MU2tlbGV0b25Db25maWc7XHJcbiAgICBhbmFseXplclR5cGU6IE1MU2tlbGV0b25Db25maWc7XHJcbn1cclxuZXhwb3J0IGVudW0gTUxTa2VsZXRvbkNvbmZpZyB7XHJcbiAgICBTWU5DX01PREUgPSAwLFxyXG4gICAgQVNZTkNfTU9ERSA9IDEsXHJcbiAgICBTSU1JTEFSSVRUWV9NT0RFID0gMixcclxuICAgIFRZUEVfWU9HQSA9IDEsXHJcbiAgICBUWVBFX05PUk1BTCA9IDAsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2tlbGV0b25HcmFwaGljU2V0dGluZyB7XHJcbiAgICBjaXJjbGVQYWludFNldHRpbmc/OiBjaXJjbGVQYWludFNldHRpbmcgfCBudWxsO1xyXG4gICAgbGluZVBhaW50U2V0dGluZz86IGxpbmVQYWludFNldHRpbmcgfCBudWxsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgY2lyY2xlUGFpbnRTZXR0aW5nIHtcclxuICAgIGNvbG9yPzogQ29sb3JzIHwgbnVsbDtcclxuICAgIHN0eWxlPzogUmVjdFN0eWxlIHwgbnVsbDtcclxuICAgIGFudGlBbGlhcz86IGJvb2xlYW4gfCBudWxsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgbGluZVBhaW50U2V0dGluZyB7XHJcbiAgICBjb2xvcj86IENvbG9ycyB8IG51bGw7XHJcbiAgICBzdHlsZT86IFJlY3RTdHlsZSB8IG51bGw7XHJcbiAgICBzdHJva2VXaWR0aD86IE51bWJlciB8IG51bGw7XHJcbiAgICBhbnRpQWxpYXM/OiBib29sZWFuIHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ29sb3JzIHtcclxuICAgIFJFRCA9IC02NTUzNixcclxuICAgIERLR1JBWSA9IC0xMjMwMzI5MixcclxuICAgIEdSQVkgPSAtNzgyOTM2OCxcclxuICAgIFdISVRFID0gLTEsXHJcbiAgICBCTFVFID0gLTE2Nzc2OTYxLFxyXG4gICAgQkxBQ0sgPSAtMTY3NzcyMTYsXHJcbiAgICBMVEdSQVkgPSAtMzM1NTQ0NCxcclxuICAgIE1BR0VOVEEgPSAtNjUyODEsXHJcbiAgICBZRUxMT1cgPSAtMjU2LFxyXG4gICAgQ1lBTiA9IC0xNjcxMTY4MSxcclxuICAgIEdSRUVOID0gLTE2NzExOTM2LFxyXG4gICAgVFJBTlNQQVJFTlQgPSAwLFxyXG59XHJcbmV4cG9ydCBlbnVtIFJlY3RTdHlsZSB7XHJcbiAgICBTVFJPS0UgPSAxLFxyXG4gICAgRklMTCA9IDIsXHJcbiAgICBGSUxMX0FORF9TVFJPS0UgPSAzLFxyXG59XHJcblxyXG4vLyBJbnRlcmFjdGl2ZSBMaXZlbmVzcyBEZXRlY3Rpb25cclxuZXhwb3J0IGludGVyZmFjZSBpbnRlcmFjdGl2ZUxpdmVuZXNzRGV0ZWN0aW9uUmVxIHtcclxuICAgIG9wdGlvbnM6IE9wdGlvbnM7XHJcbiAgICBkZXRlY3Rpb25UaW1lT3V0OiBudW1iZXI7XHJcbiAgICBhY3Rpb24/OiBEZWZhdWx0QWN0aW9uO1xyXG59XHJcbmV4cG9ydCBlbnVtIE9wdGlvbnMge1xyXG4gICAgREVURUNUX01BU0sgPSAxLFxyXG4gICAgREVURUNUX1NVTkdMQVNTID0gMlxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdEFjdGlvbiB7XHJcbiAgICBhY3Rpb25BcnJheTogbnVtYmVyW107XHJcbiAgICBudW06IG51bWJlcjtcclxuICAgIGlzUmFuZG9tOiBib29sZWFuO1xyXG59XHJcblxyXG4vKlxyXG4tLS0tLS0tLS0tLS0tLS0tLSByZXR1cm5cclxuKi9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxGYWNlVmVyaWZpY2F0aW9uUmVzdWx0IHtcclxuICAgIGZhY2VJbmZvPzogTUxGYWNlSW5mb1tdIHwgbnVsbDtcclxuICAgIHNpbWlsYXJpdHk/OiBudW1iZXIgfCBudWxsO1xyXG4gICAgdGVtcGxhdGVJZD86IG51bWJlciB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTUxGYWNlVGVtcGxhdGVSZXN1bHQge1xyXG4gICAgZmFjZUluZm8/OiBNTEZhY2VJbmZvW10gfCBudWxsO1xyXG4gICAgaGFzaGNvZGU/OiBudW1iZXIgfCBudWxsO1xyXG4gICAgdGVtcGxhdGVJZD86IG51bWJlciB8IG51bGw7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNTEZhY2VJbmZvIHtcclxuICAgIGZhY2VSZWN0PzogUmVjdFtdIHwgbnVsbDtcclxuICAgIGhhc2hDb2RlPzogbnVtYmVyIHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNTEZhY2Uge1xyXG4gICAgUmVzdWx0PzogUmVzdWx0RW50aXR5W10gfCBudWxsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVzdWx0RW50aXR5IHtcclxuICAgIG9wZW5uZXNzT2ZMZWZ0RXllOiBudW1iZXI7XHJcbiAgICB0cmFjaW5nSWRlbnRpdHk6IG51bWJlcjtcclxuICAgIHBvc3NpYmlsaXR5T2ZTbWlsaW5nOiBudW1iZXI7XHJcbiAgICBvcGVubmVzc09mUmlnaHRFeWU6IG51bWJlcjtcclxuICAgIHJvdGF0aW9uQW5nbGVYOiBudW1iZXI7XHJcbiAgICByb3RhdGlvbkFuZ2xlWTogbnVtYmVyO1xyXG4gICAgcm90YXRpb25BbmdsZVo6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGJvcmRlcjogQm9yZGVyO1xyXG4gICAgZmVhdHVyZXM6IEZlYXR1cmVzO1xyXG4gICAgZW1vdGlvbnM6IEVtb3Rpb25zO1xyXG4gICAgYWxsUG9pbnRzPzogQWxsUG9pbnRzRW50aXR5W10gfCBudWxsO1xyXG4gICAga2V5UG9pbnRzPzogbnVsbFtdIHwgbnVsbDtcclxuICAgIGZhY2VTaGFwZUxpc3Q/OiBGYWNlU2hhcGVMaXN0RW50aXR5W10gfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBNTEZhY2VDb25zdGFudCB7XHJcbiAgICBVTkFOQUxZWkVEX1BPU1NJQklMSVRZID0gLTEuMCxcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEJvcmRlciB7XHJcbiAgICBib3R0b206IG51bWJlcjtcclxuICAgIHRvcDogbnVtYmVyO1xyXG4gICAgbGVmdDogbnVtYmVyO1xyXG4gICAgcmlnaHQ6IG51bWJlcjtcclxuICAgIGV4YWN0Q2VudGVyWDogbnVtYmVyO1xyXG4gICAgY2VudGVyWTogbnVtYmVyO1xyXG4gICAgY2VudGVyWDogbnVtYmVyO1xyXG4gICAgZGVzY3JpYmVDb250ZW50czogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZXMge1xyXG4gICAgc3VuR2xhc3NQcm9iYWJpbGl0eTogbnVtYmVyO1xyXG4gICAgc2V4UHJvYmFiaWxpdHk6IG51bWJlcjtcclxuICAgIHJpZ2h0RXllT3BlblByb2JhYmlsaXR5OiBudW1iZXI7XHJcbiAgICBtb3VzdGFjaGVQcm9iYWJpbGl0eTogbnVtYmVyO1xyXG4gICAgbGVmdEV5ZU9wZW5Qcm9iYWJpbGl0eTogbnVtYmVyO1xyXG4gICAgYWdlOiBudW1iZXI7XHJcbiAgICBoYXRQcm9iYWJpbGl0eTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRW1vdGlvbnMge1xyXG4gICAgc3VycHJpc2VQcm9iYWJpbGl0eTogbnVtYmVyO1xyXG4gICAgc21pbGluZ1Byb2JhYmlsaXR5OiBudW1iZXI7XHJcbiAgICBzYWRQcm9iYWJpbGl0eTogbnVtYmVyO1xyXG4gICAgbmV1dHJhbFByb2JhYmlsaXR5OiBudW1iZXI7XHJcbiAgICBmZWFyUHJvYmFiaWxpdHk6IG51bWJlcjtcclxuICAgIGRpc2d1c3RQcm9iYWJpbGl0eTogbnVtYmVyO1xyXG4gICAgYW5ncnlQcm9iYWJpbGl0eTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQWxsUG9pbnRzRW50aXR5IHtcclxuICAgIFg6IG51bWJlcjtcclxuICAgIFk6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEZhY2VTaGFwZUxpc3RFbnRpdHkge1xyXG4gICAgcG9pbnRzPzogUG9pbnRzRW50aXR5W10gfCBudWxsO1xyXG4gICAgZmFjZVNoYXBlVHlwZTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnRzRW50aXR5IHtcclxuICAgIFg6IG51bWJlcjtcclxuICAgIFk6IG51bWJlcjtcclxuICAgIFo6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNTEhhbmRLZXlwb2ludHMge1xyXG4gICAgaGFuZGtleVBvaW50czogaGFuZGtleVBvaW50cztcclxuICAgIHJlY3Q6IFJlY3Q7XHJcbiAgICBzY29yZTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgaGFuZGtleVBvaW50cyB7XHJcbiAgICBwb2ludFg6IG51bWJlcjtcclxuICAgIHBvaW50WTogbnVtYmVyO1xyXG4gICAgc2NvcmU6IG51bWJlcjtcclxuICAgIHR5cGU6IGhhbmRrZXlQb2ludHNUeXBlcztcclxufVxyXG5leHBvcnQgZW51bSBoYW5ka2V5UG9pbnRzVHlwZXMge1xyXG4gICAgVFlQRV9XUklTVCA9IDAsXHJcbiAgICBUWVBFX1RIVU1CX0ZJUlNUID0gMSxcclxuICAgIFRZUEVfVEhVTUJfU0VDT05EID0gMixcclxuICAgIFRZUEVfVEhVTUJfVEhJUkQgPSAzLFxyXG4gICAgVFlQRV9USFVNQl9GT1VSVEggPSA0LFxyXG4gICAgVFlQRV9GT1JFRklOR0VSX0ZJUlNUID0gNSxcclxuICAgIFRZUEVfRk9SRUZJTkdFUl9TRUNPTkQgPSA2LFxyXG4gICAgVFlQRV9GT1JFRklOR0VSX1RISVJEID0gNyxcclxuICAgIFRZUEVfRk9SRUZJTkdFUl9GT1VSVEggPSA4LFxyXG4gICAgVFlQRV9NSURETEVfRklOR0VSX0ZJUlNUID0gOSxcclxuICAgIFRZUEVfTUlERExFX0ZJTkdFUl9TRUNPTkQgPSAxMCxcclxuICAgIFRZUEVfTUlERExFX0ZJTkdFUl9USElSRCA9IDExLFxyXG4gICAgVFlQRV9NSURETEVfRklOR0VSX0ZPVVJUSCA9IDEyLFxyXG4gICAgVFlQRV9SSU5HX0ZJTkdFUl9GSVJTVCA9IDEzLFxyXG4gICAgVFlQRV9SSU5HX0ZJTkdFUl9TRUNPTkQgPSAxNCxcclxuICAgIFRZUEVfUklOR19GSU5HRVJfVEhJUkQgPSAxNSxcclxuICAgIFRZUEVfUklOR19GSU5HRVJfRk9VUlRIID0gMTYsXHJcbiAgICBUWVBFX0xJVFRMRV9GSU5HRVJfRklSU1QgPSAxNyxcclxuICAgIFRZUEVfTElUVExFX0ZJTkdFUl9TRUNPTkQgPSAxOCxcclxuICAgIFRZUEVfTElUVExFX0ZJTkdFUl9USElSRCA9IDE5LFxyXG4gICAgVFlQRV9MSVRUTEVfRklOR0VSX0ZPVVJUSCA9IDIwLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlY3Qge1xyXG4gICAgYm90dG9tOiBudW1iZXI7XHJcbiAgICB0b3A6IG51bWJlcjtcclxuICAgIGxlZnQ6IG51bWJlcjtcclxuICAgIHJpZ2h0OiBudW1iZXI7XHJcbiAgICBleGFjdENlbnRlclg6IG51bWJlcjtcclxuICAgIGNlbnRlclk6IG51bWJlcjtcclxuICAgIGNlbnRlclg6IG51bWJlcjtcclxuICAgIGRlc2NyaWJlQ29udGVudHM6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNTExpdmVuZXNzQ2FwdHVyZVJlc3VsdCB7XHJcbiAgICBiaXRtYXA6IEJpdG1hcDtcclxuICAgIGlzTGl2ZTogYm9vbGVhbjtcclxuICAgIHBpdGNoOiBudW1iZXI7XHJcbiAgICByb2xsOiBudW1iZXI7XHJcbiAgICBzY29yZTogbnVtYmVyO1xyXG4gICAgeWF3OiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBCaXRtYXAge1xyXG4gICAgbUdhbGxlcnlDYWNoZWQ6IGJvb2xlYW47XHJcbiAgICBtSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBtTmF0aXZlUHRyOiBudW1iZXI7XHJcbiAgICBtV2lkdGg6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNTEludGVyYWN0aXZlTGl2ZW5lc3NDYXB0dXJlUmVzdWx0IHtcclxuICAgIGJpdG1hcDogQml0bWFwO1xyXG4gICAgc3RhdGVDb2RlOiBJbnRlcmFjdGl2ZUxpdmVuZXNzU3RhdGVDb2RlO1xyXG4gICAgYWN0aW9uVHlwZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1MU2tlbGV0b24ge1xyXG4gICAgam9pbnRzOiBNTEpvaW50O1xyXG4gICAgSm9pbnRQb2ludDogTUxKb2ludFBvaW50cztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE1MSm9pbnQge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgc2NvcmU6IG51bWJlcjtcclxuICAgIHR5cGU6IG51bWJlcjtcclxuICAgIGhhc2hDb2RlOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGVudW0gTUxKb2ludFBvaW50cyB7XHJcbiAgICBUWVBFX1JJR0hUX1NIT1VMREVSID0gMTAxLFxyXG4gICAgVFlQRV9SSUdIVF9FTEJPVyA9IDEwMixcclxuICAgIFRZUEVfUklHSFRfV1JJU1QgPSAxMDMsXHJcbiAgICBUWVBFX0xFRlRfU0hPVUxERVIgPSAxMDQsXHJcbiAgICBUWVBFX0xFRlRfRUxCT1cgPSAxMDUsXHJcbiAgICBUWVBFX0xFRlRfV1JJU1QgPSAxMDYsXHJcbiAgICBUWVBFX1JJR0hUX0hJUCA9IDEwNyxcclxuICAgIFRZUEVfUklHSFRfS05FRSA9IDEwOCxcclxuICAgIFRZUEVfUklHSFRfQU5LTEUgPSAxMDksXHJcbiAgICBUWVBFX0xFRlRfSElQID0gMTEwLFxyXG4gICAgVFlQRV9MRUZUX0tORUUgPSAxMTEsXHJcbiAgICBUWVBFX0xFRlRfQU5LTEUgPSAxMTIsXHJcbiAgICBUWVBFX0hFQURfVE9QID0gMTEzLFxyXG4gICAgVFlQRV9ORUNLID0gMTE0LFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBFdmVudHMge1xyXG4gICAgRkFDRV9UUkFOU0FDVE9SX09OX0RFU1RST1kgPSBcImZhY2VUcmFuc2FjdG9yT25EZXN0cm95XCIsXHJcbiAgICBGQUNFX1RSQU5TQUNUT1JfT05fUkVTVUxUID0gXCJmYWNlVHJhbnNhY3Rvck9uUmVzdWx0XCIsXHJcbiAgICBGQUNFXzNEX1RSQU5TQUNUT1JfT05fREVTVFJPWSA9IFwiZmFjZTNkVHJhbnNhY3Rvck9uRGVzdHJveVwiLFxyXG4gICAgRkFDRV8zRF9UUkFOU0FDVE9SX09OX1JFU1VMVCA9IFwiZmFjZTNkVHJhbnNhY3Rvck9uUmVzdWx0XCIsXHJcbiAgICBTS0VMRVRPTl9UUkFOU0FDVE9SX09OX0RFU1RST1kgPSBcInNrZWxldG9uVHJhbnNhY3Rvck9uRGVzdHJveVwiLFxyXG4gICAgU0tFTEVUT05fVFJBTlNBQ1RPUl9PTl9SRVNVTFQgPSBcInNrZWxldG9uVHJhbnNhY3Rvck9uUmVzdWx0XCIsXHJcbiAgICBIQU5EX1RSQU5TQUNUT1JfT05fREVTVFJPWSA9IFwiaGFuZFRyYW5zYWN0b3JPbkRlc3Ryb3lcIixcclxuICAgIEhBTkRfVFJBTlNBQ1RPUl9PTl9SRVNVTFQgPSBcImhhbmRUcmFuc2FjdG9yT25SZXN1bHRcIixcclxuICAgIEdFU1RVUkVfVFJBTlNBQ1RPUl9PTl9ERVNUUk9ZID0gXCJnZXN0dXJlVHJhbnNhY3Rvck9uRGVzdHJveVwiLFxyXG4gICAgR0VTVFVSRV9UUkFOU0FDVE9SX09OX1JFU1VMVCA9IFwiZ2VzdHVyZVRyYW5zYWN0b3JPblJlc3VsdFwiLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBJbnRlcmFjdGl2ZUxpdmVuZXNzU3RhdGVDb2RlIHtcclxuICAgIEZBQ0VfQVNQRUNUID0gMTAwMSxcclxuICAgIE5PX0ZBQ0UgPSAxMDAyLFxyXG4gICAgTVVMVElfRkFDRVMgPSAxMDAzLFxyXG4gICAgUEFSVF9GQUNFID0gMTAwNCxcclxuICAgIEJJR19GQUNFID0gMTAwNSxcclxuICAgIFNNQUxMX0ZBQ0UgPSAxMDA2LFxyXG4gICAgV0VBUl9TVU5HTEFTU0VTID0gMTAwNyxcclxuICAgIFdFQVJfTUFTSyA9IDEwMDgsXHJcbiAgICBBQ1RJT05fTVVUVUFMTFlfRVhDTFVTSVZFX0VSUk9SID0gMTAwOSxcclxuICAgIENPTlRJTlVJVFlfREVURUNUSU9OX0VSUk9SID0gMTAxNCxcclxuICAgIERBUksgPSAxMDE4LFxyXG4gICAgQkxVUiA9IDEwMTksXHJcbiAgICBCQUNLX0xJR0hUSU5HID0gMTAyMCxcclxuICAgIEJSSUdIVCA9IDEwMjEsXHJcbiAgICBJTl9QUk9HUkVTUyA9IDIwMDAsXHJcbiAgICBTUE9PRklORyA9IDIwMDIsXHJcbiAgICBMSVZFX0FORF9BQ1RJT05fQ09SUkVDVCA9IDIwMDMsXHJcbiAgICBHVUlERV9ERVRFQ1RJT05fU1VDQ0VTUyA9IDIwMDQsXHJcbiAgICBJTklUX0ZBQ0VfUkVDVEFOR0xFX0VSUk9SID0gMjAwNyxcclxuICAgIEVSUk9SX1JFU1VMVF9CRUZPUkUgPSA1MDIwLFxyXG4gICAgUkVTVUxUX1RJTUVfT1VUID0gNTAzMCxcclxuICAgIEFMTF9BQ1RJT05fQ09SUkVDVCA9IDk5OTksXHJcbiAgICBJTklUSUFMRURfRkFJTEVEID0gLTEsXHJcbiAgICBOT19PUkRFUl9QQVkgPSAtNTAwMSxcclxuICAgIE9VVF9PRl9DUkVESVQgPSAtNTAwMixcclxuICAgIEZSRUVfQU1PVU5UX1VTRV9VUCA9IC01MDAzLFxyXG4gICAgQkxBQ0tfTElTVCA9IC01MDA0LFxyXG4gICAgT0ZGTElORV9VU0VfQ09VTlRfT1ZFUl9USFJFU0hPTEQgPSAtNjAwMSxcclxuICAgIE9GRkxJTkVfVVNFX1RJTUVfT1ZFUl9USFJFU0hPTEQgPSAtNjAwMixcclxuICAgIExPQ0FMX0FORF9DTE9VRF9CSUxMX0lORk9fSVNfTlVMTCA9IC03MDAxLFxyXG4gICAgVVBEQVRFX0JJTExfSU5GT19GSUxFX0ZBSUxFRCA9IC03MDAyLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDb3Jkb3ZhRXJyb3JzIHtcclxuICAgIFVOS05PV04gPSAtMSxcclxuICAgIFNVQ0NFU1MgPSAwLFxyXG4gICAgRElTQ0FSREVEID0gMSxcclxuICAgIElOTkVSID0gMixcclxuICAgIElOQUNUSVZFID0gMyxcclxuICAgIE5PVF9TVVBQT1JURUQgPSA0LFxyXG4gICAgSUxMRUdBTF9QQVJBTUVURVIgPSA1LFxyXG4gICAgT1ZFUkRVRSA9IDYsXHJcbiAgICBOT19GT1VORCA9IDcsXHJcbiAgICBEVVBMSUNBVEVfRk9VTkQgPSA4LFxyXG4gICAgTk9fUEVSTUlTU0lPTiA9IDksXHJcbiAgICBJTlNVRkZJQ0lFTlRfUkVTT1VSQ0UgPSAxMCxcclxuICAgIEFOQUxZU0lTX0ZBSUxVUkUgPSAxMSxcclxuICAgIElOVEVSUlVQVEVEID0gMTIsXHJcbiAgICBFWENFRURfUkFOR0UgPSAxMyxcclxuICAgIERBVEFfTUlTU0lORyA9IDE0LFxyXG4gICAgQVVUSEVOVElDQVRJT05fUkVRVUlSRUQgPSAxNSxcclxuICAgIFRGTElURV9OT1RfQ09NUEFUSUJMRSA9IDE2LFxyXG4gICAgSU5TVUZGSUNJRU5UX1NQQUNFID0gMTcsXHJcbiAgICBIQVNIX01JU1MgPSAxOCxcclxuICAgIFRPS0VOX0lOVkFMSUQgPSAxOSxcclxuICAgIFNFUlZJQ0VfRkFJTFVSRSA9IDIwLFxyXG4gICAgQU5BTFlTSVNfTlVMTCA9IDIxLFxyXG59XHJcbiJdfQ==