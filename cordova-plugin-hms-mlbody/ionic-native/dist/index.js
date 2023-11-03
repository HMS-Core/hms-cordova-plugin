/*
    Copyright 2023. Huawei Technologies Co., Ltd. All rights reserved.

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
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from "@ionic-native/core";
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
}(IonicNativePlugin));
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
     * This method gives the information of the face recognition service.
     * @returns Promise<any>
     */
    HMSMLBodyOriginal.prototype.stilFaceAnalyserInfo = function () { return cordova(this, "stilFaceAnalyserInfo", { "otherPromise": true }, arguments); };
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
}(IonicNativePlugin));
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
    MLFrame[MLFrame["SCREEN_FIRST_QUADRANT"] = 0] = "SCREEN_FIRST_QUADRANT";
    MLFrame[MLFrame["SCREEN_SECOND_QUADRANT"] = 1] = "SCREEN_SECOND_QUADRANT";
    MLFrame[MLFrame["SCREEN_THIRD_QUADRANT"] = 2] = "SCREEN_THIRD_QUADRANT";
    MLFrame[MLFrame["SCREEN_FOURTH_QUADRANT"] = 3] = "SCREEN_FOURTH_QUADRANT";
})(MLFrame || (MLFrame = {}));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBaUJBLE9BQU8sc0VBS04sTUFBTSxvQkFBb0IsQ0FBQzs7SUFTUyxtQ0FBaUI7Ozs7SUErQmxEOzs7O09BSUc7SUFDSCxnQ0FBTSxhQUFDLFNBQW9CO0lBSTNCOzs7T0FHRztJQUNILG9DQUFVO0lBSVY7OztPQUdHO0lBQ0gsaUNBQU87SUFJUDs7O09BR0c7SUFDSCw2Q0FBbUI7SUFJbkI7OztPQUdHO0lBQ0gscUNBQVc7SUFJWDs7OztPQUlHO0lBQ0gsNENBQWtCLGFBQUMsTUFBaUI7SUFJcEM7Ozs7T0FJRztJQUNILGlDQUFPLGFBQUMsVUFBc0I7SUFJOUI7Ozs7T0FJRztJQUNILG9DQUFVLGFBQUMsYUFBNEI7SUFJdkM7OztPQUdHO0lBQ0gsc0NBQVk7SUFJWjs7O09BR0c7SUFDSCx1Q0FBYTtJQUliLHVDQUFhLGFBQUMsTUFBYztJQUk1Qix3Q0FBYzswQkFySGQsMENBQWE7Ozs7OzswQkFFYiwrQ0FBa0I7Ozs7OzswQkFFbEIsbUNBQU07Ozs7OzswQkFFTixzQ0FBUzs7Ozs7OzBCQUVULDZDQUFnQjs7Ozs7OzBCQUVoQix3Q0FBVzs7Ozs7OzBCQUVYLHVDQUFVOzs7Ozs7MEJBRVYsMkNBQWM7Ozs7OzswQkFFZCxvQ0FBTzs7Ozs7OzBCQUVQLDBDQUFhOzs7Ozs7MEJBRWIsNkNBQWdCOzs7Ozs7MEJBRWhCLHFDQUFROzs7Ozs7MEJBRVIsbUNBQU07Ozs7OzswQkFFTixvQ0FBTzs7Ozs7Ozs7OzswQkEzRFg7RUErQnFDLGlCQUFpQjtTQUF6QyxlQUFlOztJQW9JRyw2QkFBaUI7Ozs7SUErQjVDLHdDQUFvQixhQUFDLGVBQWdDO0lBS3JELDRDQUF3QjtJQUt4Qiw2Q0FBeUI7SUFLekI7Ozs7T0FJRztJQUNILHFDQUFpQixhQUFD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LENBQUE7SUFDckIsK0dBQTBCLENBQUE7SUFDMUIsK0ZBQWtCLENBQUE7SUFDbEIsMklBQXdDLENBQUE7SUFDeEMseUlBQXVDLENBQUE7SUFDdkMsNklBQXlDLENBQUE7SUFDekMsbUlBQW9DLENBQUE7QUFDeEMsQ0FBQyxFQWhDVyw0QkFBNEIsS0FBNUIsNEJBQTRCLFFBZ0N2QztBQUVELE1BQU0sQ0FBTixJQUFZLGFBd0JYO0FBeEJELFdBQVksYUFBYTtJQUNyQix3REFBWSxDQUFBO0lBQ1osdURBQVcsQ0FBQTtJQUNYLDJEQUFhLENBQUE7SUFDYixtREFBUyxDQUFBO0lBQ1QseURBQVksQ0FBQTtJQUNaLG1FQUFpQixDQUFBO0lBQ2pCLDJFQUFxQixDQUFBO0lBQ3JCLHVEQUFXLENBQUE7SUFDWCx5REFBWSxDQUFBO0lBQ1osdUVBQW1CLENBQUE7SUFDbkIsbUVBQWlCLENBQUE7SUFDakIsb0ZBQTBCLENBQUE7SUFDMUIsMEVBQXFCLENBQUE7SUFDckIsZ0VBQWdCLENBQUE7SUFDaEIsa0VBQWlCLENBQUE7SUFDakIsa0VBQWlCLENBQUE7SUFDakIsd0ZBQTRCLENBQUE7SUFDNUIsb0ZBQTBCLENBQUE7SUFDMUIsOEVBQXVCLENBQUE7SUFDdkIsNERBQWMsQ0FBQTtJQUNkLG9FQUFrQixDQUFBO0lBQ2xCLHdFQUFvQixDQUFBO0lBQ3BCLG9FQUFrQixDQUFBO0FBQ3RCLENBQUMsRUF4QlcsYUFBYSxLQUFiLGFBQWEsUUF3QnhCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBDb3B5cmlnaHQgMjAyMy4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcbiAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gICAgUGx1Z2luLFxuICAgIENvcmRvdmEsXG4gICAgQ29yZG92YVByb3BlcnR5LFxuICAgIElvbmljTmF0aXZlUGx1Z2luLFxufSBmcm9tIFwiQGlvbmljLW5hdGl2ZS9jb3JlXCI7XG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6IFwiSE1TTUxCb2R5UGx1Z2luXCIsXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1tbGJvZHlcIiwgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gICAgcGx1Z2luUmVmOiBcIkhNU01MQm9keVBsdWdpblwiLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLCAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TTUxCb2R5UGx1Z2luIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MRmFjZVNldHRpbmcgPSBNTEZhY2VTZXR0aW5nO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIEhhbmRrZXlQb2ludENvbmZpZyA9IEhhbmRrZXlQb2ludENvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBDb2xvcnMgPSBDb2xvcnM7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgUmVjdFN0eWxlID0gUmVjdFN0eWxlO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MU2tlbGV0b25Db25maWcgPSBNTFNrZWxldG9uQ29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MRmxhc2hNb2RlID0gTUxGbGFzaE1vZGU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxMZW5zVHlwZSA9IE1MTGVuc1R5cGU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxBbmFseXplck5hbWUgPSBNTEFuYWx5emVyTmFtZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEZyYW1lID0gTUxGcmFtZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEZhY2VDb25maWdzID0gTUxGYWNlQ29uZmlncztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTExpdmVuZXNzQ29uZmlnID0gTUxMaXZlbmVzc0NvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBzeW5jVHlwZSA9IHN5bmNUeXBlO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIEV2ZW50cyA9IEV2ZW50cztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBPcHRpb25zID0gT3B0aW9ucztcblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogQWRqdXN0cyB0aGUgZm9jYWwgbGVuZ3RoIG9mIHRoZSBjYW1lcmEgYmFzZWQgb24gdGhlIHNjYWxpbmcgY29lZmZpY2llbnQgKGRpZ2l0YWwgem9vbSkuXG4gICAgICogQHBhcmFtICB7ZG9ab29tUmVxfSBkb1pvb21SZXEgUmVwZXJlc2VudHMgdGhlIG5lY2Vzc2FyeSBwYXJhbWV0ZXJzLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGRvWm9vbShkb1pvb21SZXE6IGRvWm9vbVJlcSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBNb25pdG9ycyBwaG90b2dyYXBoaW5nLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHBob3RvZ3JhcGgoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIENsb3NlIGxlbnMgZW5naW5lLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGRlc3Ryb3koKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIE9idGFpbnMgdGhlIHNpemUgb2YgdGhlIHByZXZpZXcgaW1hZ2Ugb2YgYSBjYW1lcmEuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZ2V0RGlzcGxheURpbWVuc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogT2J0YWlucyB0aGUgc2VsZWN0ZWQgY2FtZXJhIHR5cGUuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZ2V0TGVuc1R5cGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIEl0IHNldHMgQXBpIEtleSBvciBhY2Nlc3MgdG9rZW4gZm9yIGFwcGxpY2F0aW9uLlxuICAgICAqIEBwYXJhbSAge2NvbmZpZ1JlcX0gcGFyYW1zIFJlcHJlc2VudHMgeW91ciBBUElfS0VZLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHNlcnZpY2VJbml0aWFsaXplcihwYXJhbXM6IGNvbmZpZ1JlcSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBPYnRhaW5zIEZyYW1lLlxuICAgICAqIEBwYXJhbSAge21sRnJhbWVSZXF9IG1sRnJhbWVSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIG1sRnJhbWUobWxGcmFtZVJlcTogbWxGcmFtZVJlcSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBBbiBhcHAgaW5mb3JtYXRpb24gY2xhc3MgdXNlZCB0byBzdG9yZSBiYXNpYyBpbmZvcm1hdGlvbiBhYm91dCBhcHBzIHdpdGggdGhlIEhNUyBDb3JlIE1MIFNESyBpbnRlZ3JhdGVkIGFuZCBjb21wbGV0ZSB0aGUgaW5pdGlhbGl6YXRpb24gb2YgTUwgS2l0LiBXaGVuIHVzaW5nIGNsb3VkIHNlcnZpY2VzIG9mIHRoZSBNTCBLaXQsIHlvdSBuZWVkIHRvIHNldCB0aGUgYXBpS2V5IG9mIHlvdXIgYXBwLlxuICAgICAqIEBwYXJhbSAge2FwcFNldHRpbmdSZXF9IGFwcFNldHRpbmdSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGFwcFNldHRpbmcoYXBwU2V0dGluZ1JlcTogYXBwU2V0dGluZ1JlcSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIHNlcnZpY2UgZW5hYmxlIGxvZ2dlciBzZXJ2aWNlLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGVuYWJsZUxvZ2dlcigpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBzZXJ2aWNlIGRpc2FibGUgbG9nZ2VyIHNlcnZpY2UuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0VXNlclJlZ2lvbihyZWdpb246IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBnZXRDb3VudHJ5Q29kZSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxufVxuXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiBcIkhNU01MQm9keVwiLFxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtbWxib2R5XCIsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICAgIHBsdWdpblJlZjogXCJITVNNTEJvZHlcIiwgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU01MQm9keSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEZhY2VTZXR0aW5nID0gTUxGYWNlU2V0dGluZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBIYW5ka2V5UG9pbnRDb25maWcgPSBIYW5ka2V5UG9pbnRDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgQ29sb3JzID0gQ29sb3JzO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIFJlY3RTdHlsZSA9IFJlY3RTdHlsZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFNrZWxldG9uQ29uZmlnID0gTUxTa2VsZXRvbkNvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEZsYXNoTW9kZSA9IE1MRmxhc2hNb2RlO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MTGVuc1R5cGUgPSBNTExlbnNUeXBlO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MQW5hbHl6ZXJOYW1lID0gTUxBbmFseXplck5hbWU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxGcmFtZSA9IE1MRnJhbWU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxGYWNlQ29uZmlncyA9IE1MRmFjZUNvbmZpZ3M7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxMaXZlbmVzc0NvbmZpZyA9IE1MTGl2ZW5lc3NDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgc3luY1R5cGUgPSBzeW5jVHlwZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBFdmVudHMgPSBFdmVudHM7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgT3B0aW9ucyA9IE9wdGlvbnM7XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHN0aWxsR2VzdHVyZUFuYWx5c2VyKHN0aWxsR2VzdHVyZVJlcTogc3RpbGxHZXN0dXJlUmVxKTogUHJvbWlzZTxNTEdlc3R1cmU+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc3RvcFN0aWxsR2VzdHVyZUFuYWx5c2VyKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEdlc3R1cmVBbmFseXNlclNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhlIGZhY2UgZGV0ZWN0aW9uIHNlcnZpY2UgY2FuIGRldGVjdCB0aGUgZmFjZSBjb250b3VyLCByZWNvZ25pemUgZmFjaWFsIGZlYXR1cmVzLCBhbmQgZGV0ZXJtaW5lIGZhY2lhbCBleHByZXNzaW9ucyBmb3IgYSBwZXJzb24uXG4gICAgICogQHBhcmFtICB7ZmFjZVJlcX0gZmFjZVJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIGZhY2UgZGV0ZWN0aW9uLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8TUxGYWNlPlxuICAgICAqL1xuICAgIHN0aWxsRmFjZUFuYWx5c2VyKGZhY2VSZXE6IGZhY2VSZXEpOiBQcm9taXNlPE1MRmFjZT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzdGlsbEZhY2VBbmFseXNlckluZm8oKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0RmFjZURldGVjdGVkKFxuICAgICAgICBtYXhGYWNlVmVyaWZpY2F0aW9uUmVxOiBtYXhGYWNlVmVyaWZpY2F0aW9uUmVxXG4gICAgKTogUHJvbWlzZTxNTEZhY2VWZXJpZmljYXRpb25SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldEZhY2VWZXJpZmljYXRpb25BbmFseXNlclNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogQHBhcmFtICB7ZmFjZVZlcmlmaWNhdGlvblJlcX0gZmFjZVZlcmlmaWNhdGlvblJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIGZhY2UgZGV0ZWN0aW9uLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8TUxGYWNlVmVyaWZpY2F0aW9uUmVzdWx0PlxuICAgICAqL1xuICAgIHN0aWxsRmFjZVZlcmlmaWNhdGlvbkFuYWx5c2VyKFxuICAgICAgICBmYWNlVmVyaWZpY2F0aW9uUmVxOiBmYWNlVmVyaWZpY2F0aW9uUmVxXG4gICAgKTogUHJvbWlzZTxNTEZhY2VWZXJpZmljYXRpb25SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3AgZmFjZSByZWNvZ25pdGlvbiBzZXJ2aWNlLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHN0b3BTdGlsbEZhY2VWZXJpZmljYXRpb25BbmFseXNlcigpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBnaXZlcyB0aGUgaW5mb3JtYXRpb24gb2YgdGhlIGZhY2UgcmVjb2duaXRpb24gc2VydmljZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBzdGlsRmFjZUFuYWx5c2VySW5mbygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCBmYWNlIHJlY29nbml0aW9uIHNlcnZpY2UuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgc3RvcFN0aWxsRmFjZUFuYWx5c2VyKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgIFRoZSBza2VsZXRvbiBkZXRlY3Rpb24gc2VydmljZSBkZXRlY3RzIGFuZCBsb2NhdGVzIGtleSBwb2ludHMgb2YgdGhlIGh1bWFuIGJvZHksIHN1Y2ggYXMgdGhlIHRvcCBvZiB0aGUgaGVhZCwgbmVjaywgc2hvdWxkZXIsIGVsYm93LCB3cmlzdCwgaGlwLCBrbmVlLCBhbmQgYW5rbGUuXG4gICAqIEBwYXJhbSAge3N0aWxsU2tlbGV0b25SZXEgfHN0aWxsU2tlbGV0b25TaW1pbGFyaXR5UmVxfSBzdGlsbFNrZWxldG9uUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3Igc3RpbGwgc2tlbGV0b24gZGV0ZWN0aW9uLlxuICAgKiBAcmV0dXJucyBQcm9taXNlPE1MU2tlbGV0b24+XG4gICAqL1xuICAgIHN0aWxsU2tlbGV0b25BbmFseXNlcihcbiAgICAgICAgc3RpbGxTa2VsZXRvblJlcTogc3RpbGxTa2VsZXRvblJlcSB8IHN0aWxsU2tlbGV0b25TaW1pbGFyaXR5UmVxXG4gICAgKTogUHJvbWlzZTxNTFNrZWxldG9uPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGUgbGl2ZW5lc3MgZGV0ZWN0aW9uIHNlcnZpY2Ugc3VwcG9ydHMgc2lsZW50IGxpdmVuZXNzIGRldGVjdGlvbiBhbmQgY2FwdHVyZXMgZmFjZXMgaW4gcmVhbCB0aW1lLiBJdCBjYW4gZGV0ZXJtaW5lIHdoZXRoZXIgYSBmYWNlIGlzIG9mIGEgcmVhbCB1c2VyIG9yIGlzIGEgZmFjZSBhdHRhY2tcbiAgICAgKiAoZm9yIGV4YW1wbGUsIGZhY2UgcmVjYXB0dXJlIGltYWdlLCBmYWNlIHJlY2FwdHVyZSB2aWRlbywgb3IgZmFjZSBtYXNrKSB3aXRob3V0IHJlcXVpcmluZyB0aGUgdXNlciB0byBmb2xsb3cgc3BlY2lmaWMgaW5zdHJ1Y3Rpb25zLlxuICAgICAqIEBwYXJhbSAge2xpdmVuZXNzRGV0ZWN0aW9uUmVxfSBsaXZlbmVzc0RldGVjdGlvblJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxNTExpdmVuZXNzQ2FwdHVyZVJlc3VsdD5cbiAgICAgKi9cbiAgICBsaXZlTGl2ZW5lc3NBbmFseXNlcihcbiAgICAgICAgbGl2ZW5lc3NEZXRlY3Rpb25SZXE6IGxpdmVuZXNzRGV0ZWN0aW9uUmVxXG4gICAgKTogUHJvbWlzZTxNTExpdmVuZXNzQ2FwdHVyZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBzZXJ2aWNlIGNhbiBkZXRlY3RzIDIxIGhhbmQga2V5cG9pbnRzIChpbmNsdWRpbmcgZmluZ2VydGlwcywga251Y2tsZXMsIGFuZCB3cmlzdHMpIGFuZCByZXR1cm4gcG9zaXRpb25zIG9mIHRoZSBrZXlwb2ludHMuXG4gICAgICogQHBhcmFtICB7c3RpbGxIYW5kS2V5cG9pbnRSZXEgfSBzdGlsbEhhbmRLZXlwb2ludFJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIHN0aWxsIGhhbmRrZXkgYW5hbHlzZXIuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxNTEhhbmRLZXlwb2ludHM+XG4gICAgICovXG4gICAgc3RpbGxIYW5ka2V5QW5hbHlzZXIoXG4gICAgICAgIHN0aWxsSGFuZEtleXBvaW50UmVxOiBzdGlsbEhhbmRLZXlwb2ludFJlcVxuICAgICk6IFByb21pc2U8TUxIYW5kS2V5cG9pbnRzPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wIGhhbmQgYW5hbHl6ZXIgc2VydmljZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBzdG9wU3RpbGxIYW5kS2V5QW5hbHlzZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHJldHVybnMgZmFjZSBhbmFseXplciBzZXR0aW5ncy5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBnZXRGYWNlQW5hbHlzZXJTZXR0aW5nKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCAgcmV0dXJucyBoYW5kIGFuYWx5emVyIHNldHRpbmdzLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGdldEhhbmRLZXlBbmFseXNlclNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3Agc2tlbGV0b24gYW5hbHl6ZXIgc2VydmljZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBzdG9wU3RpbGxTa2VsZXRvbkFuYWx5c2VyKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGUgaW50ZXJhY3RpdmUgYmlvbWV0cmljIHZlcmlmaWNhdGlvbiBzZXJ2aWNlIGltcGxlbWVudHMgbGl2ZW5lc3MgZGV0ZWN0aW9uIGluIGFuIGludGVyYWN0aXZlIHdheS4gSXQgY2FwdHVyZXMgZmFjZXMgaW4gcmVhbCB0aW1lIGFuZCBkZXRlcm1pbmVzIFxuICAgICAqIHdoZXRoZXIgYSBmYWNlIGlzIG9mIGEgcmVhbCBwZXJzb24gb3IgaXMgYSBwcmVzZW50YXRpb24gYXR0YWNrIChmb3IgZXhhbXBsZSwgYSBmYWNlIHJlY2FwdHVyZSBpbWFnZSwgZmFjZSByZWNhcHR1cmUgdmlkZW8sIG9yIGZhY2UgbWFzaykgYnkgY2hlY2tpbmcgXG4gICAgICogd2hldGhlciB0aGUgc3BlY2lmaWVkIGFjdGlvbnMgYXJlIGRldGVjdGVkLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8TUxJbnRlcmFjdGl2ZUxpdmVuZXNzQ2FwdHVyZVJlc3VsdD5cbiAgICAgKi9cbiAgICBpbnRlcmFjdGl2ZUxpdmVuZXNzQW5hbHlzZXIoXG4gICAgICAgIGludGVyYWN0aXZlTGl2ZW5lc3NEZXRlY3Rpb25SZXE6IGludGVyYWN0aXZlTGl2ZW5lc3NEZXRlY3Rpb25SZXFcbiAgICApOiBQcm9taXNlPE1MSW50ZXJhY3RpdmVMaXZlbmVzc0NhcHR1cmVSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoZSBpbnRlcmFjdGl2ZSBiaW9tZXRyaWMgdmVyaWZpY2F0aW9uIHNlcnZpY2UgaW1wbGVtZW50cyBsaXZlbmVzcyBkZXRlY3Rpb24gaW4gYW4gaW50ZXJhY3RpdmUgd2F5LiBJdCBjYXB0dXJlcyBmYWNlcyBpbiByZWFsIHRpbWUgYW5kIGRldGVybWluZXMgXG4gICAgICogd2hldGhlciBhIGZhY2UgaXMgb2YgYSByZWFsIHBlcnNvbiBvciBpcyBhIHByZXNlbnRhdGlvbiBhdHRhY2sgKGZvciBleGFtcGxlLCBhIGZhY2UgcmVjYXB0dXJlIGltYWdlLCBmYWNlIHJlY2FwdHVyZSB2aWRlbywgb3IgZmFjZSBtYXNrKSBieSBjaGVja2luZyBcbiAgICAgKiB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgYWN0aW9ucyBhcmUgZGV0ZWN0ZWQuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxNTEludGVyYWN0aXZlTGl2ZW5lc3NDYXB0dXJlUmVzdWx0PlxuICAgICAqL1xuICAgIGN1c3RvbUludGVyYWN0aXZlTGl2ZW5lc3NBbmFseXNlcihcbiAgICAgICAgY3VzdG9tSW50ZXJhY3RpdmVMaXZlbmVzc0RldGVjdGlvblJlcTogY3VzdG9tSW50ZXJhY3RpdmVMaXZlbmVzc0RldGVjdGlvblJlcVxuICAgICk6IFByb21pc2U8TUxJbnRlcmFjdGl2ZUxpdmVuZXNzQ2FwdHVyZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNTExpdmUge1xuICAgIHByaXZhdGUgYXJTY2VuZTogYW55O1xuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IHN0cmluZywgZGl2SWQ6IHN0cmluZykge1xuICAgICAgICBpZiAoc2NlbmUgPT09IFwiQUNUSU9OX0xJVkVfQU5BTFlTRVwiKVxuICAgICAgICAgICAgdGhpcy5hclNjZW5lID0gbmV3IChITVNNTEJvZHlQbHVnaW4uZ2V0UGx1Z2luKCkubGl2ZUVuZ2luZUFuYWx5c2VyKShkaXZJZCk7XG4gICAgfVxuXG4gICAgb24oZXZlbnROYW1lOiBFdmVudHMsIGNhbGw6ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmFyU2NlbmUub24oZXZlbnROYW1lLCBjYWxsKTtcbiAgICB9XG4gICAgc3RhcnRNTExpdmUoY29uZmlnPzogTUxjb25maWcsIGJvdW5kcz86IE1MQm91bmRzKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmFyU2NlbmUuc3RhcnRNTExpdmUoY29uZmlnLCBib3VuZHMpO1xuICAgIH1cbiAgICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hclNjZW5lLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgc2V0Q29uZmlnKGNvbmZpZzogTUxjb25maWcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJTY2VuZS5zZXRDb25maWcoY29uZmlnKTtcbiAgICB9XG4gICAgc2Nyb2xsKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hclNjZW5lLnNjcm9sbCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIGxpdmVFbmdpbmVBbmFseXNlciBleHRlbmRzIE1MTGl2ZSB7XG4gICAgY29uc3RydWN0b3IoZGl2SWQ6IHN0cmluZykge1xuICAgICAgICBzdXBlcihcIkFDVElPTl9MSVZFX0FOQUxZU0VcIiwgZGl2SWQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTEJvdW5kcyB7XG4gICAgbWFyZ2luVG9wPzogbnVtYmVyO1xuICAgIG1hcmdpbkJvdHRvbT86IG51bWJlcjtcbiAgICBtYXJnaW5MZWZ0PzogbnVtYmVyO1xuICAgIG1hcmdpblJpZ2h0PzogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBNTGNvbmZpZyB7XG4gICAgbGVuc0VuZ2luZVJlcTogbGVuc0VuZ2luZVJlcTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgbGVuc0VuZ2luZVJlcSB7XG4gICAgYW5hbHl6ZXJOYW1lOiBNTEFuYWx5emVyTmFtZTtcbiAgICBsZW5zRW5naW5lU2V0dGluZz86IE1MTGVuc0VuZ2luZVNldHRpbmc7XG4gICAgZ3JhcGhpY1NldHRpbmc/OlxuICAgICAgICB8IEZhY2VHcmFwaGljU2V0dGluZ1xuICAgICAgICB8IEhhbmRrZXlHcmFwaGljU2V0dGluZ1xuICAgICAgICB8IFNrZWxldG9uR3JhcGhpY1NldHRpbmdcbiAgICAgICAgfCBudWxsO1xuICAgIGFuYWx5emVyU2V0dGluZz86XG4gICAgICAgIHwgbWxGYWNlQW5hbHl6ZXJTZXR0aW5nXG4gICAgICAgIHwgTUxGYWNlVmVyaWZpY2F0aW9uQW5hbHl6ZXJTZXR0aW5nXG4gICAgICAgIHwgbWxIYW5kS2V5cG9pbnRTZXR0aW5nXG4gICAgICAgIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTUxMZW5zRW5naW5lU2V0dGluZyB7XG4gICAgZnBzPzogbnVtYmVyIHwgbnVsbDtcbiAgICBkaXNwbGF5RGltZW5zaW9uST86IG51bWJlciB8IG51bGw7XG4gICAgZGlzcGxheURpbWVuc2lvbkkxPzogbnVtYmVyIHwgbnVsbDtcbiAgICBsZW5zVHlwZT86IE1MTGVuc1R5cGUgfCBudWxsO1xuICAgIGVuYWJsZUZvY3VzPzogYm9vbGVhbiB8IG51bGw7XG4gICAgZmxhc2hNb2RlPzogTUxGbGFzaE1vZGUgfCBudWxsO1xufVxuZXhwb3J0IGVudW0gTUxGbGFzaE1vZGUge1xuICAgIEFVVE8gPSBcImF1dG9cIixcbiAgICBPTiA9IFwib25cIixcbiAgICBPRkYgPSBcIm9mZlwiLFxufVxuZXhwb3J0IGVudW0gTUxMZW5zVHlwZSB7XG4gICAgQkFDS19MRU5TID0gMCxcbiAgICBGUk9OVF9MRU5TID0gMSxcbn1cbmV4cG9ydCBlbnVtIE1MQW5hbHl6ZXJOYW1lIHtcbiAgICBMSVZFRkFDRSA9IFwiRkFDRVwiLFxuICAgIExJVkVGQUNFM0QgPSBcIkZBQ0UzRFwiLFxuICAgIExJVkVGQUNFTUFYID0gXCJGQUNFTUFYXCIsXG4gICAgTElWRUhBTkQgPSBcIkhBTkRcIixcbiAgICBMSVZFU0tFTEVUT04gPSBcIlNLRUxFVE9OXCIsXG4gICAgTElWRU9CSkVDVCA9IFwiT0JKRUNUXCIsXG4gICAgTElWRUNMQVNTSUZJQ0FUSU9OID0gXCJDTEFTU0lGSUNBVElPTlwiLFxuICAgIExJVkVTQ0VORSA9IFwiU0NFTkVcIixcbiAgICBMSVZFVEVYVCA9IFwiVEVYVFwiLFxuICAgIExJVkVHRVNUVVJFID0gXCJHRVNUVVJFXCIsXG59XG5leHBvcnQgaW50ZXJmYWNlIGRvWm9vbVJlcSB7XG4gICAgc2NhbGU/OiBudW1iZXIgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBtbEZyYW1lUmVxIHtcbiAgICBhY3Rpb25OYW1lOiBNTEZyYW1lO1xuICAgIGZpbGVQYXRoOiBhbnk7XG59XG5leHBvcnQgZW51bSBNTEZyYW1lIHtcbiAgICBnZXRQcmV2aWV3Qml0bWFwID0gXCJnZXRQcmV2aWV3Qml0bWFwXCIsXG4gICAgcmVhZEJpdG1hcCA9IFwicmVhZEJpdG1hcFwiLFxuICAgIHJvdGF0ZSA9IFwicm90YXRlXCIsXG4gICAgU0NSRUVOX0ZJUlNUX1FVQURSQU5UID0gMCxcbiAgICBTQ1JFRU5fU0VDT05EX1FVQURSQU5UID0gMSxcbiAgICBTQ1JFRU5fVEhJUkRfUVVBRFJBTlQgPSAyLFxuICAgIFNDUkVFTl9GT1VSVEhfUVVBRFJBTlQgPSAzLFxufVxuXG4vLyBBUEkgS0VZXG5cbmV4cG9ydCBpbnRlcmZhY2UgY29uZmlnUmVxIHtcbiAgICBhcGlLZXk6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBhcHBTZXR0aW5nUmVxIHtcbiAgICBhcGlLZXk/OiBzdHJpbmcgfCBudWxsO1xuICAgIGFwcGxpY2F0aW9uSWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIGNlcnRGaW5nZXJwcmludD86IHN0cmluZyB8IG51bGw7XG59XG5cbi8vIFNUSUxMICYmIExJVkUgRkFDRSBBTkFMWVNFUlxuXG5leHBvcnQgaW50ZXJmYWNlIGZhY2VSZXEge1xuICAgIG1sRmFjZUFuYWx5c2VyU2V0dGluZz86IG1sRmFjZUFuYWx5emVyU2V0dGluZyB8IG51bGw7XG4gICAgYW5hbHlzZU1vZGU/OiBNTEZhY2VDb25maWdzIHwgbnVsbDtcbiAgICBmaWxlUGF0aDogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIGZhY2VWZXJpZmljYXRpb25SZXEge1xuICAgIG1sRmFjZVZlcmlmaWNhdGlvbkFuYWx5emVyU2V0dGluZz86IE1MRmFjZVZlcmlmaWNhdGlvbkFuYWx5emVyU2V0dGluZyB8IG51bGw7XG4gICAgc3luY1R5cGU/OiBzeW5jVHlwZSB8IG51bGw7XG4gICAgZmlsZVBhdGg6IGFueTtcbiAgICBmaWxlUGF0aDI6IGFueTtcbn1cblxuZXhwb3J0IGVudW0gTUxGYWNlQ29uZmlncyB7XG4gICAgVFlQRV8yRF9TWU5DID0gMCxcbiAgICBUWVBFXzJEX0FTWU5DID0gMSxcbiAgICBUWVBFXzNEX1NZTkMgPSAyLFxuICAgIFRZUEVfM0RfQVNZTkMgPSAzLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZhY2VHcmFwaGljU2V0dGluZyB7XG4gICAgZmFjZVBvc2l0aW9uUGFpbnRTZXR0aW5nPzogRmFjZVBvc2l0aW9uUGFpbnRTZXR0aW5nIHwgbnVsbDtcbiAgICB0ZXh0UGFpbnRTZXR0aW5nPzogVGV4dFBhaW50U2V0dGluZ0ZhY2UgfCBudWxsO1xuICAgIGZhY2VGZWF0dXJlUGFpbnRUZXh0U2V0dGluZz86IEZhY2VGZWF0dXJlUGFpbnRUZXh0U2V0dGluZyB8IG51bGw7XG4gICAga2V5cG9pbnRQYWludFNldHRpbmc/OiBLZXlwb2ludFBhaW50U2V0dGluZyB8IG51bGw7XG4gICAgYm94UGFpbnRTZXR0aW5nPzogQm94UGFpbnRTZXR0aW5nRmFjZSB8IG51bGw7XG4gICAgZmFjZVBhaW50U2V0dGluZz86IEZhY2VQYWludFNldHRpbmcgfCBudWxsO1xuICAgIGV5ZVBhaW50U2V0dGluZz86IEV5ZVBhaW50U2V0dGluZyB8IG51bGw7XG4gICAgZXllYnJvd1BhaW50U2V0dGluZz86IEV5ZWJyb3dQYWludFNldHRpbmcgfCBudWxsO1xuICAgIG5vc2VQYWludFNldHRpbmc/OiBOb3NlUGFpbnRTZXR0aW5nIHwgbnVsbDtcbiAgICBub3NlQmFzZVBhaW50U2V0dGluZz86IE5vc2VCYXNlUGFpbnRTZXR0aW5nIHwgbnVsbDtcbiAgICBsaXBQYWludFNldHRpbmc/OiBMaXBQYWludFNldHRpbmcgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBMaXBQYWludFNldHRpbmcge1xuICAgIGNvbG9yPzogU3RyaW5nIHwgQ29sb3JzIHwgbnVsbDtcbiAgICBzdHlsZT86IFJlY3RTdHlsZSB8IG51bGw7XG4gICAgc3Ryb2tlV2lkdGg6IE51bWJlciB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIE5vc2VQYWludFNldHRpbmcge1xuICAgIGNvbG9yPzogU3RyaW5nIHwgQ29sb3JzIHwgbnVsbDtcbiAgICBzdHlsZT86IFJlY3RTdHlsZSB8IG51bGw7XG4gICAgc3Ryb2tlV2lkdGg/OiBOdW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIE5vc2VCYXNlUGFpbnRTZXR0aW5nIHtcbiAgICBjb2xvcj86IFN0cmluZyB8IENvbG9ycyB8IG51bGw7XG4gICAgc3R5bGU/OiBSZWN0U3R5bGUgfCBudWxsO1xuICAgIHN0cm9rZVdpZHRoPzogTnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBFeWVicm93UGFpbnRTZXR0aW5nIHtcbiAgICBjb2xvcj86IFN0cmluZyB8IENvbG9ycyB8IG51bGw7XG4gICAgc3R5bGU/OiBSZWN0U3R5bGU7XG4gICAgc3Ryb2tlV2lkdGg/OiBOdW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIEV5ZVBhaW50U2V0dGluZyB7XG4gICAgY29sb3I/OiBTdHJpbmcgfCBDb2xvcnM7XG4gICAgc3R5bGU/OiBSZWN0U3R5bGUgfCBDb2xvcnM7XG4gICAgc3Ryb2tlV2lkdGg6IE51bWJlciB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIEZhY2VQYWludFNldHRpbmcge1xuICAgIGNvbG9yPzogU3RyaW5nIHwgQ29sb3JzIHwgbnVsbDtcbiAgICBzdHlsZT86IFJlY3RTdHlsZSB8IG51bGw7XG4gICAgc3Ryb2tlV2lkdGg6IE51bWJlciB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIEJveFBhaW50U2V0dGluZ0ZhY2Uge1xuICAgIGNvbG9yPzogU3RyaW5nIHwgQ29sb3JzIHwgbnVsbDtcbiAgICBzdHlsZT86IFJlY3RTdHlsZSB8IG51bGw7XG4gICAgc3Ryb2tlV2lkdGg/OiBOdW1iZXIgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBLZXlwb2ludFBhaW50U2V0dGluZyB7XG4gICAgY29sb3I/OiBDb2xvcnMgfCBDb2xvcnMgfCBudWxsO1xuICAgIHN0eWxlPzogUmVjdFN0eWxlIHwgbnVsbDtcbiAgICB0ZXh0U2l6ZTogTnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGYWNlRmVhdHVyZVBhaW50VGV4dFNldHRpbmcge1xuICAgIGNvbG9yPzogQ29sb3JzIHwgbnVsbDtcbiAgICB0ZXh0U2l6ZTogTnVtYmVyIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRmFjZVBvc2l0aW9uUGFpbnRTZXR0aW5nIHtcbiAgICBjb2xvcj86IENvbG9ycyB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIFRleHRQYWludFNldHRpbmdGYWNlIHtcbiAgICBjb2xvcj86IENvbG9ycyB8IG51bGw7XG4gICAgdGV4dFNpemU/OiBOdW1iZXIgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MRmFjZVZlcmlmaWNhdGlvbkFuYWx5emVyU2V0dGluZyB7XG4gICAgbWF4RmFjZURldGN0ZWQ6IG51bWJlciB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIG1sRmFjZUFuYWx5emVyU2V0dGluZyB7XG4gICAgZmVhdHVyZVR5cGU/OiBNTEZhY2VTZXR0aW5nIHwgbnVsbDtcbiAgICBrZXlQb2ludFR5cGU/OiBNTEZhY2VTZXR0aW5nIHwgbnVsbDtcbiAgICBtYXhTaXplRmFjZU9ubHk/OiBib29sZWFuIHwgbnVsbDtcbiAgICBtaW5GYWNlUHJvcG9ydGlvbj86IG51bWJlciB8IG51bGw7XG4gICAgcGVyZm9ybWFuY2VUeXBlPzogTUxGYWNlU2V0dGluZyB8IG51bGw7XG4gICAgcG9zZURpc2FibGVkPzogYm9vbGVhbiB8IG51bGw7XG4gICAgc2hhcGVUeXBlPzogTUxGYWNlU2V0dGluZyB8IG51bGw7XG4gICAgdHJhY2luZ0FsbG93ZWQ/OiBib29sZWFuIHwgbnVsbDtcbiAgICB0cmFjaW5nTW9kZT86IG51bWJlciB8IG51bGw7XG59XG5cbmV4cG9ydCBlbnVtIE1MRmFjZVNldHRpbmcge1xuICAgIE1PREVfVFJBQ0lOR19GQVNUID0gMSxcbiAgICBNT0RFX1RSQUNJTkdfUk9CVVNUID0gMixcbiAgICBUWVBFX0ZFQVRVUkVTID0gMSxcbiAgICBUWVBFX0ZFQVRVUkVfQUdFID0gMjU2LFxuICAgIFRZUEVfRkVBVFVSRV9CRUFSRCA9IDMyLFxuICAgIFRZUEVfRkVBVFVSRV9FTU9USU9OID0gNCxcbiAgICBUWVBFX0ZFQVRVUkVfRVlFR0xBU1MgPSA4LFxuICAgIFRZUEVfRkVBVFVSRV9HRU5EQVIgPSAxMjgsXG4gICAgVFlQRV9GRUFUVVJFX0hBVCA9IDE2LFxuICAgIFRZUEVfRkVBVFVSRV9PUEVOQ0xPU0VFWUUgPSA2NCxcbiAgICBUWVBFX0tFWVBPSU5UUyA9IDEsXG4gICAgVFlQRV9QUkVDSVNJT04gPSAxLFxuICAgIFRZUEVfU0hBUEVTID0gMixcbiAgICBUWVBFX1NQRUVEID0gMixcbiAgICBUWVBFX1VOU1VQUE9SVF9GRUFUVVJFUyA9IDIsXG4gICAgVFlQRV9VTlNVUFBPUlRfS0VZUE9JTlRTID0gMCxcbiAgICBUWVBFX1VOU1VQUE9SVF9TSEFQRVMgPSAzLFxuICAgIFRZUEVfQk9UVE9NX09GX01PVVRIID0gMSxcbiAgICBUWVBFX0xFRlRfQ0hFRUsgPSAyLFxuICAgIFRZUEVfTEVGVF9FQVIgPSAzLFxuICAgIFRZUEVfTEVGVF9TSURFX09GX01PVVRIID0gNixcbiAgICBUWVBFX1JJR0hUX0NIRUVLID0gOCxcbiAgICBUWVBFX1JJR0hUX0VBUiA9IDksXG4gICAgVFlQRV9SSUdIVF9TSURFX09GX01PVVRIID0gMTIsXG4gICAgVFlQRV9USVBfT0ZfTEVGVF9FQVIgPSA0LFxuICAgIFRZUEVfVElQX09GX05PU0UgPSA3LFxuICAgIFRZUEVfVElQX09GX1JJR0hUX0VBUiA9IDEwLFxuICAgIFRZUEVfQUxMID0gMCxcbiAgICBUWVBFX0JPVFRPTV9PRl9MRUZUX0VZRUJST1cgPSA0LFxuICAgIFRZUEVfQk9UVE9NX09GX0xPV0VSX0xJUCA9IDgsXG4gICAgVFlQRV9CT1RUT01fT0ZfTk9TRSA9IDEyLFxuICAgIFRZUEVfQk9UVE9NX09GX1JJR0hUX0VZRUJST1cgPSA1LFxuICAgIFRZUEVfQk9UVE9NX09GX1VQUEVSX0xJUCA9IDEwLFxuICAgIFRZUEVfQlJJREdFX09GX05PU0UgPSAxMyxcbiAgICBUWVBFX0ZBQ0UgPSAxLFxuICAgIFRZUEVfVE9QX09GX0xFRlRfRVlFQlJPVyA9IDYsXG4gICAgVFlQRV9UT1BfT0ZfTE9XRVJfTElQID0gOSxcbiAgICBUWVBFX1RPUF9PRl9SSUdIVF9FWUVCUk9XID0gNyxcbiAgICBUWVBFX1RPUF9PRl9VUFBFUl9MSVAgPSAxMSxcbn1cblxuLy8gRkFDRSBWRVJJRklDQVRJT05cblxuZXhwb3J0IGludGVyZmFjZSBtYXhGYWNlVmVyaWZpY2F0aW9uUmVxIHtcbiAgICBNYXhGYWNlRGV0Y3RlZD86IG51bWJlcjtcbn1cblxuLy9MaXZlICYmIFN0aWwgSGFuZGtleVBvaW50XG5cbmV4cG9ydCBpbnRlcmZhY2Ugc3RpbGxIYW5kS2V5cG9pbnRSZXEge1xuICAgIHN5bmNUeXBlPzogc3luY1R5cGUgfCBudWxsO1xuICAgIGZpbGVQYXRoOiBhbnk7XG4gICAgaGFuZGtleVNldHRpbmc/OiBtbEhhbmRLZXlwb2ludFNldHRpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIHN0aWxsR2VzdHVyZVJlcSB7XG4gICAgc3luY1R5cGU/OiBzeW5jVHlwZSB8IG51bGw7XG4gICAgZmlsZVBhdGg6IGFueTtcbn1cblxuZXhwb3J0IGVudW0gc3luY1R5cGUge1xuICAgIFNZTkNfTU9ERSA9IDAsXG4gICAgQVNZTkNfTU9ERSA9IDEsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTUxHZXN0dXJlIHtcbiAgICByZWN0PzogUmVjdDtcbiAgICBzY29yZT86IG51bWJlcjtcbiAgICBjYXRlZ29yeT86IG51bWJlcjtcbiAgICBoYXNoQ29kZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGVudW0gR2VzdHVyZVR5cGVzIHtcbiAgICBPTkUgPSAwLFxuICAgIFNFQ09ORCA9IDEsXG4gICAgVEhSRUUgPSAyLFxuICAgIEZPVVIgPSAzLFxuICAgIEZJVkUgPSA0LFxuICAgIFNJWCA9IDUsXG4gICAgU0VWRU4gPSA2LFxuICAgIEVJR0hUID0gNyxcbiAgICBOSU5FID0gOCxcbiAgICBESVNTID0gOSxcbiAgICBGSVNUID0gMTAsXG4gICAgR09PRCA9IDExLFxuICAgIEhFQVJUID0gMTIsXG4gICAgT0sgPSAxMyxcbiAgICBVTktOT1dOID0gMTQsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VzdHVyZUdyYXBoaWNTZXR0aW5nIHtcbiAgICBpZFBhaW50bmV3U2V0dGluZz86IElkUGFpbnRuZXdTZXR0aW5nIHwgbnVsbDtcbiAgICByZWN0UGFpbnRTZXR0aW5nPzogUmVjdFBhaW50U2V0dGluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGFuZGtleUdyYXBoaWNTZXR0aW5nIHtcbiAgICBpZFBhaW50bmV3U2V0dGluZz86IElkUGFpbnRuZXdTZXR0aW5nIHwgbnVsbDtcbiAgICByZWN0UGFpbnRTZXR0aW5nPzogUmVjdFBhaW50U2V0dGluZyB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIElkUGFpbnRuZXdTZXR0aW5nIHtcbiAgICBjb2xvcj86IENvbG9ycyB8IG51bGw7XG4gICAgdGV4dFNpemU/OiBOdW1iZXIgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBSZWN0UGFpbnRTZXR0aW5nIHtcbiAgICBjb2xvcj86IENvbG9ycyB8IG51bGw7XG4gICAgc3R5bGU/OiBSZWN0U3R5bGUgfCBudWxsO1xuICAgIGJveFN0cm9rZVdpZHRoPzogTnVtYmVyIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgbWxIYW5kS2V5cG9pbnRTZXR0aW5nIHtcbiAgICBzY2VuZVR5cGU/OiBIYW5ka2V5UG9pbnRDb25maWcgfCBudWxsO1xuICAgIG1heEhhbmRSZXN1bHRzPzogbnVtYmVyIHwgbnVsbDtcbn1cbmV4cG9ydCBlbnVtIEhhbmRrZXlQb2ludENvbmZpZyB7XG4gICAgVFlQRV9BTEwgPSAwLFxuICAgIFRZUEVfS0VZUE9JTlRfT05MWSA9IDEsXG4gICAgVFlQRV9SRUNUX09OTFkgPSAyLFxuICAgIE1BWF9IQU5EU19OVU0gPSAxMCxcbn1cblxuLy9MaXZlbmVzcyBEZXRlY3Rpb25cblxuZXhwb3J0IGludGVyZmFjZSBsaXZlbmVzc0RldGVjdGlvblJlcSB7XG4gICAgYW5hbHlzZXJNb2RlPzogTUxMaXZlbmVzc0NhcHR1cmVSZXN1bHQgfCBudWxsO1xufVxuZXhwb3J0IGVudW0gTUxMaXZlbmVzc0NvbmZpZyB7XG4gICAgREVGQVVMVCA9IDAsXG4gICAgQ1VTVE9NID0gMSxcbn1cbmV4cG9ydCBlbnVtIE1MTGl2ZW5lc3NDYXB0dXJlRXJyb3Ige1xuICAgIENBTUVSQV9OT19QRVJNSVNTSU9OID0gMTE0MDEsXG4gICAgQ0FNRVJBX1NUQVJUX0ZBSUxFRCA9IDExNDAyLFxuICAgIFVTRVJfQ0FOQ0VMID0gMTE0MDMsXG4gICAgREVURUNUX0ZBQ0VfVElNRV9PVVQgPSAxMTQwNCxcbiAgICBERVRFQ1RfTUFTSyA9IDEsXG59XG5cbi8vIEN1c3RvbSBJbnRlcmFjdGl2ZSBMaXZlbmVzcyBEZXRlY3Rpb25cbmV4cG9ydCBpbnRlcmZhY2UgY3VzdG9tSW50ZXJhY3RpdmVMaXZlbmVzc0RldGVjdGlvblJlcSB7XG4gICAgYWN0aW9uPzogQWN0aW9uLFxuICAgIGRldGVjdGlvblRpbWVPdXQgOiBudW1iZXI7XG4gICAgY2FtZXJhRnJhbWU6IFJlY3Q7XG4gICAgZmFjZUZyYW1lOiBSZWN0O1xuICAgIHRleHRNYXJnaW46IG51bWJlcjtcbiAgICB0ZXh0T3B0aW9ucz86IFRleHRPcHRpb25zO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgc2hvd1N0YXR1c0NvZGU6IGJvb2xlYW47XG4gICAgc3RhdHVzQ29kZXM6IE1hcDxudW1iZXIsIHN0cmluZz47XG59XG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbiB7XG4gICAgYWN0aW9uQXJyYXk6IE1hcDxudW1iZXIsIHN0cmluZz47XG4gICAgbnVtOiBudW1iZXI7XG4gICAgaXNSYW5kb206IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIFJlY3Qge1xuICAgIGJvdHRvbTogbnVtYmVyLFxuICAgIGxlZnQ6IG51bWJlcixcbiAgICByaWdodDogbnVtYmVyLFxuICAgIHRvcDogbnVtYmVyLFxufVxuZXhwb3J0IGludGVyZmFjZSBUZXh0T3B0aW9ucyB7XG4gICAgdGV4dENvbG9yPzogbnVtYmVyO1xuICAgIHRleHRTaXplPzogbnVtYmVyO1xuICAgIGF1dG9TaXplVGV4dD86IGJvb2xlYW47XG4gICAgbWluVGV4dFNpemU/OiBudW1iZXI7XG4gICAgbWF4VGV4dFNpemU/OiBudW1iZXI7XG4gICAgZ3JhbnVsYXJpdHk/OiBudW1iZXI7XG59XG5cbi8vU1RJTEwgJiYgTElWRSBTS0VMRVRPTiBBTkFMWVNFUlxuXG5leHBvcnQgaW50ZXJmYWNlIHN0aWxsU2tlbGV0b25SZXEge1xuICAgIGZpbGVQYXRoOiBhbnk7XG4gICAgc3luY1R5cGU6IE1MU2tlbGV0b25Db25maWc7XG4gICAgYW5hbHl6ZXJUeXBlOiBNTFNrZWxldG9uQ29uZmlnO1xufVxuZXhwb3J0IGludGVyZmFjZSBzdGlsbFNrZWxldG9uU2ltaWxhcml0eVJlcSB7XG4gICAgZmlsZVBhdGg6IGFueTtcbiAgICBmaWxlcGF0aDI6IGFueTtcbiAgICBzeW5jVHlwZTogTUxTa2VsZXRvbkNvbmZpZztcbiAgICBhbmFseXplclR5cGU6IE1MU2tlbGV0b25Db25maWc7XG59XG5leHBvcnQgZW51bSBNTFNrZWxldG9uQ29uZmlnIHtcbiAgICBTWU5DX01PREUgPSAwLFxuICAgIEFTWU5DX01PREUgPSAxLFxuICAgIFNJTUlMQVJJVFRZX01PREUgPSAyLFxuICAgIFRZUEVfWU9HQSA9IDEsXG4gICAgVFlQRV9OT1JNQUwgPSAwLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNrZWxldG9uR3JhcGhpY1NldHRpbmcge1xuICAgIGNpcmNsZVBhaW50U2V0dGluZz86IGNpcmNsZVBhaW50U2V0dGluZyB8IG51bGw7XG4gICAgbGluZVBhaW50U2V0dGluZz86IGxpbmVQYWludFNldHRpbmcgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBjaXJjbGVQYWludFNldHRpbmcge1xuICAgIGNvbG9yPzogQ29sb3JzIHwgbnVsbDtcbiAgICBzdHlsZT86IFJlY3RTdHlsZSB8IG51bGw7XG4gICAgYW50aUFsaWFzPzogYm9vbGVhbiB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIGxpbmVQYWludFNldHRpbmcge1xuICAgIGNvbG9yPzogQ29sb3JzIHwgbnVsbDtcbiAgICBzdHlsZT86IFJlY3RTdHlsZSB8IG51bGw7XG4gICAgc3Ryb2tlV2lkdGg/OiBOdW1iZXIgfCBudWxsO1xuICAgIGFudGlBbGlhcz86IGJvb2xlYW4gfCBudWxsO1xufVxuXG5leHBvcnQgZW51bSBDb2xvcnMge1xuICAgIFJFRCA9IC02NTUzNixcbiAgICBES0dSQVkgPSAtMTIzMDMyOTIsXG4gICAgR1JBWSA9IC03ODI5MzY4LFxuICAgIFdISVRFID0gLTEsXG4gICAgQkxVRSA9IC0xNjc3Njk2MSxcbiAgICBCTEFDSyA9IC0xNjc3NzIxNixcbiAgICBMVEdSQVkgPSAtMzM1NTQ0NCxcbiAgICBNQUdFTlRBID0gLTY1MjgxLFxuICAgIFlFTExPVyA9IC0yNTYsXG4gICAgQ1lBTiA9IC0xNjcxMTY4MSxcbiAgICBHUkVFTiA9IC0xNjcxMTkzNixcbiAgICBUUkFOU1BBUkVOVCA9IDAsXG59XG5leHBvcnQgZW51bSBSZWN0U3R5bGUge1xuICAgIFNUUk9LRSA9IDEsXG4gICAgRklMTCA9IDIsXG4gICAgRklMTF9BTkRfU1RST0tFID0gMyxcbn1cblxuLy8gSW50ZXJhY3RpdmUgTGl2ZW5lc3MgRGV0ZWN0aW9uXG5leHBvcnQgaW50ZXJmYWNlIGludGVyYWN0aXZlTGl2ZW5lc3NEZXRlY3Rpb25SZXEge1xuICAgIG9wdGlvbnM6IE9wdGlvbnM7XG4gICAgZGV0ZWN0aW9uVGltZU91dCA6IG51bWJlcjtcbiAgICBhY3Rpb24/OiBEZWZhdWx0QWN0aW9uO1xufVxuZXhwb3J0IGVudW0gT3B0aW9ucyB7XG4gICAgREVURUNUX01BU0sgPSAxLFxuICAgIERFVEVDVF9TVU5HTEFTUyA9IDJcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdEFjdGlvbiB7XG4gICAgYWN0aW9uQXJyYXk6IG51bWJlciBbXTtcbiAgICBudW06IG51bWJlcjtcbiAgICBpc1JhbmRvbTogYm9vbGVhbjtcbn1cblxuLypcbi0tLS0tLS0tLS0tLS0tLS0tIHJldHVyblxuKi9cblxuZXhwb3J0IGludGVyZmFjZSBNTEZhY2VWZXJpZmljYXRpb25SZXN1bHQge1xuICAgIGZhY2VJbmZvPzogTUxGYWNlSW5mb1tdIHwgbnVsbDtcbiAgICBzaW1pbGFyaXR5PzogbnVtYmVyIHwgbnVsbDtcbiAgICB0ZW1wbGF0ZUlkPzogbnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTEZhY2VUZW1wbGF0ZVJlc3VsdCB7XG4gICAgZmFjZUluZm8/OiBNTEZhY2VJbmZvW10gfCBudWxsO1xuICAgIGhhc2hjb2RlPzogbnVtYmVyIHwgbnVsbDtcbiAgICB0ZW1wbGF0ZUlkPzogbnVtYmVyIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTUxGYWNlSW5mbyB7XG4gICAgZmFjZVJlY3Q/OiBSZWN0W10gfCBudWxsO1xuICAgIGhhc2hDb2RlPzogbnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTEZhY2Uge1xuICAgIFJlc3VsdD86IFJlc3VsdEVudGl0eVtdIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUmVzdWx0RW50aXR5IHtcbiAgICBvcGVubmVzc09mTGVmdEV5ZTogbnVtYmVyO1xuICAgIHRyYWNpbmdJZGVudGl0eTogbnVtYmVyO1xuICAgIHBvc3NpYmlsaXR5T2ZTbWlsaW5nOiBudW1iZXI7XG4gICAgb3Blbm5lc3NPZlJpZ2h0RXllOiBudW1iZXI7XG4gICAgcm90YXRpb25BbmdsZVg6IG51bWJlcjtcbiAgICByb3RhdGlvbkFuZ2xlWTogbnVtYmVyO1xuICAgIHJvdGF0aW9uQW5nbGVaOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBib3JkZXI6IEJvcmRlcjtcbiAgICBmZWF0dXJlczogRmVhdHVyZXM7XG4gICAgZW1vdGlvbnM6IEVtb3Rpb25zO1xuICAgIGFsbFBvaW50cz86IEFsbFBvaW50c0VudGl0eVtdIHwgbnVsbDtcbiAgICBrZXlQb2ludHM/OiBudWxsW10gfCBudWxsO1xuICAgIGZhY2VTaGFwZUxpc3Q/OiBGYWNlU2hhcGVMaXN0RW50aXR5W10gfCBudWxsO1xufVxuXG5leHBvcnQgZW51bSBNTEZhY2VDb25zdGFudCB7XG4gICAgVU5BTkFMWVpFRF9QT1NTSUJJTElUWSA9IC0xLjAsXG59XG5leHBvcnQgaW50ZXJmYWNlIEJvcmRlciB7XG4gICAgYm90dG9tOiBudW1iZXI7XG4gICAgdG9wOiBudW1iZXI7XG4gICAgbGVmdDogbnVtYmVyO1xuICAgIHJpZ2h0OiBudW1iZXI7XG4gICAgZXhhY3RDZW50ZXJYOiBudW1iZXI7XG4gICAgY2VudGVyWTogbnVtYmVyO1xuICAgIGNlbnRlclg6IG51bWJlcjtcbiAgICBkZXNjcmliZUNvbnRlbnRzOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgd2lkdGg6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZXMge1xuICAgIHN1bkdsYXNzUHJvYmFiaWxpdHk6IG51bWJlcjtcbiAgICBzZXhQcm9iYWJpbGl0eTogbnVtYmVyO1xuICAgIHJpZ2h0RXllT3BlblByb2JhYmlsaXR5OiBudW1iZXI7XG4gICAgbW91c3RhY2hlUHJvYmFiaWxpdHk6IG51bWJlcjtcbiAgICBsZWZ0RXllT3BlblByb2JhYmlsaXR5OiBudW1iZXI7XG4gICAgYWdlOiBudW1iZXI7XG4gICAgaGF0UHJvYmFiaWxpdHk6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRW1vdGlvbnMge1xuICAgIHN1cnByaXNlUHJvYmFiaWxpdHk6IG51bWJlcjtcbiAgICBzbWlsaW5nUHJvYmFiaWxpdHk6IG51bWJlcjtcbiAgICBzYWRQcm9iYWJpbGl0eTogbnVtYmVyO1xuICAgIG5ldXRyYWxQcm9iYWJpbGl0eTogbnVtYmVyO1xuICAgIGZlYXJQcm9iYWJpbGl0eTogbnVtYmVyO1xuICAgIGRpc2d1c3RQcm9iYWJpbGl0eTogbnVtYmVyO1xuICAgIGFuZ3J5UHJvYmFiaWxpdHk6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQWxsUG9pbnRzRW50aXR5IHtcbiAgICBYOiBudW1iZXI7XG4gICAgWTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBGYWNlU2hhcGVMaXN0RW50aXR5IHtcbiAgICBwb2ludHM/OiBQb2ludHNFbnRpdHlbXSB8IG51bGw7XG4gICAgZmFjZVNoYXBlVHlwZTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBQb2ludHNFbnRpdHkge1xuICAgIFg6IG51bWJlcjtcbiAgICBZOiBudW1iZXI7XG4gICAgWjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MSGFuZEtleXBvaW50cyB7XG4gICAgaGFuZGtleVBvaW50czogaGFuZGtleVBvaW50cztcbiAgICByZWN0OiBSZWN0O1xuICAgIHNjb3JlOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIGhhbmRrZXlQb2ludHMge1xuICAgIHBvaW50WDogbnVtYmVyO1xuICAgIHBvaW50WTogbnVtYmVyO1xuICAgIHNjb3JlOiBudW1iZXI7XG4gICAgdHlwZTogaGFuZGtleVBvaW50c1R5cGVzO1xufVxuZXhwb3J0IGVudW0gaGFuZGtleVBvaW50c1R5cGVzIHtcbiAgICBUWVBFX1dSSVNUID0gMCxcbiAgICBUWVBFX1RIVU1CX0ZJUlNUID0gMSxcbiAgICBUWVBFX1RIVU1CX1NFQ09ORCA9IDIsXG4gICAgVFlQRV9USFVNQl9USElSRCA9IDMsXG4gICAgVFlQRV9USFVNQl9GT1VSVEggPSA0LFxuICAgIFRZUEVfRk9SRUZJTkdFUl9GSVJTVCA9IDUsXG4gICAgVFlQRV9GT1JFRklOR0VSX1NFQ09ORCA9IDYsXG4gICAgVFlQRV9GT1JFRklOR0VSX1RISVJEID0gNyxcbiAgICBUWVBFX0ZPUkVGSU5HRVJfRk9VUlRIID0gOCxcbiAgICBUWVBFX01JRERMRV9GSU5HRVJfRklSU1QgPSA5LFxuICAgIFRZUEVfTUlERExFX0ZJTkdFUl9TRUNPTkQgPSAxMCxcbiAgICBUWVBFX01JRERMRV9GSU5HRVJfVEhJUkQgPSAxMSxcbiAgICBUWVBFX01JRERMRV9GSU5HRVJfRk9VUlRIID0gMTIsXG4gICAgVFlQRV9SSU5HX0ZJTkdFUl9GSVJTVCA9IDEzLFxuICAgIFRZUEVfUklOR19GSU5HRVJfU0VDT05EID0gMTQsXG4gICAgVFlQRV9SSU5HX0ZJTkdFUl9USElSRCA9IDE1LFxuICAgIFRZUEVfUklOR19GSU5HRVJfRk9VUlRIID0gMTYsXG4gICAgVFlQRV9MSVRUTEVfRklOR0VSX0ZJUlNUID0gMTcsXG4gICAgVFlQRV9MSVRUTEVfRklOR0VSX1NFQ09ORCA9IDE4LFxuICAgIFRZUEVfTElUVExFX0ZJTkdFUl9USElSRCA9IDE5LFxuICAgIFRZUEVfTElUVExFX0ZJTkdFUl9GT1VSVEggPSAyMCxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWN0IHtcbiAgICBib3R0b206IG51bWJlcjtcbiAgICB0b3A6IG51bWJlcjtcbiAgICBsZWZ0OiBudW1iZXI7XG4gICAgcmlnaHQ6IG51bWJlcjtcbiAgICBleGFjdENlbnRlclg6IG51bWJlcjtcbiAgICBjZW50ZXJZOiBudW1iZXI7XG4gICAgY2VudGVyWDogbnVtYmVyO1xuICAgIGRlc2NyaWJlQ29udGVudHM6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICB3aWR0aDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MTGl2ZW5lc3NDYXB0dXJlUmVzdWx0IHtcbiAgICBiaXRtYXA6IEJpdG1hcDtcbiAgICBpc0xpdmU6IGJvb2xlYW47XG4gICAgcGl0Y2g6IG51bWJlcjtcbiAgICByb2xsOiBudW1iZXI7XG4gICAgc2NvcmU6IG51bWJlcjtcbiAgICB5YXc6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQml0bWFwIHtcbiAgICBtR2FsbGVyeUNhY2hlZDogYm9vbGVhbjtcbiAgICBtSGVpZ2h0OiBudW1iZXI7XG4gICAgbU5hdGl2ZVB0cjogbnVtYmVyO1xuICAgIG1XaWR0aDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MSW50ZXJhY3RpdmVMaXZlbmVzc0NhcHR1cmVSZXN1bHQge1xuICAgIGJpdG1hcDogQml0bWFwO1xuICAgIHN0YXRlQ29kZTogSW50ZXJhY3RpdmVMaXZlbmVzc1N0YXRlQ29kZTtcbiAgICBhY3Rpb25UeXBlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTUxTa2VsZXRvbiB7XG4gICAgam9pbnRzOiBNTEpvaW50O1xuICAgIEpvaW50UG9pbnQ6IE1MSm9pbnRQb2ludHM7XG59XG5leHBvcnQgaW50ZXJmYWNlIE1MSm9pbnQge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgc2NvcmU6IG51bWJlcjtcbiAgICB0eXBlOiBudW1iZXI7XG4gICAgaGFzaENvZGU6IG51bWJlcjtcbn1cbmV4cG9ydCBlbnVtIE1MSm9pbnRQb2ludHMge1xuICAgIFRZUEVfUklHSFRfU0hPVUxERVIgPSAxMDEsXG4gICAgVFlQRV9SSUdIVF9FTEJPVyA9IDEwMixcbiAgICBUWVBFX1JJR0hUX1dSSVNUID0gMTAzLFxuICAgIFRZUEVfTEVGVF9TSE9VTERFUiA9IDEwNCxcbiAgICBUWVBFX0xFRlRfRUxCT1cgPSAxMDUsXG4gICAgVFlQRV9MRUZUX1dSSVNUID0gMTA2LFxuICAgIFRZUEVfUklHSFRfSElQID0gMTA3LFxuICAgIFRZUEVfUklHSFRfS05FRSA9IDEwOCxcbiAgICBUWVBFX1JJR0hUX0FOS0xFID0gMTA5LFxuICAgIFRZUEVfTEVGVF9ISVAgPSAxMTAsXG4gICAgVFlQRV9MRUZUX0tORUUgPSAxMTEsXG4gICAgVFlQRV9MRUZUX0FOS0xFID0gMTEyLFxuICAgIFRZUEVfSEVBRF9UT1AgPSAxMTMsXG4gICAgVFlQRV9ORUNLID0gMTE0LFxufVxuXG5leHBvcnQgZW51bSBFdmVudHMge1xuICAgIEZBQ0VfVFJBTlNBQ1RPUl9PTl9ERVNUUk9ZID0gXCJmYWNlVHJhbnNhY3Rvck9uRGVzdHJveVwiLFxuICAgIEZBQ0VfVFJBTlNBQ1RPUl9PTl9SRVNVTFQgPSBcImZhY2VUcmFuc2FjdG9yT25SZXN1bHRcIixcbiAgICBGQUNFXzNEX1RSQU5TQUNUT1JfT05fREVTVFJPWSA9IFwiZmFjZTNkVHJhbnNhY3Rvck9uRGVzdHJveVwiLFxuICAgIEZBQ0VfM0RfVFJBTlNBQ1RPUl9PTl9SRVNVTFQgPSBcImZhY2UzZFRyYW5zYWN0b3JPblJlc3VsdFwiLFxuICAgIFNLRUxFVE9OX1RSQU5TQUNUT1JfT05fREVTVFJPWSA9IFwic2tlbGV0b25UcmFuc2FjdG9yT25EZXN0cm95XCIsXG4gICAgU0tFTEVUT05fVFJBTlNBQ1RPUl9PTl9SRVNVTFQgPSBcInNrZWxldG9uVHJhbnNhY3Rvck9uUmVzdWx0XCIsXG4gICAgSEFORF9UUkFOU0FDVE9SX09OX0RFU1RST1kgPSBcImhhbmRUcmFuc2FjdG9yT25EZXN0cm95XCIsXG4gICAgSEFORF9UUkFOU0FDVE9SX09OX1JFU1VMVCA9IFwiaGFuZFRyYW5zYWN0b3JPblJlc3VsdFwiLFxuICAgIEdFU1RVUkVfVFJBTlNBQ1RPUl9PTl9ERVNUUk9ZID0gXCJnZXN0dXJlVHJhbnNhY3Rvck9uRGVzdHJveVwiLFxuICAgIEdFU1RVUkVfVFJBTlNBQ1RPUl9PTl9SRVNVTFQgPSBcImdlc3R1cmVUcmFuc2FjdG9yT25SZXN1bHRcIixcbn1cblxuZXhwb3J0IGVudW0gSW50ZXJhY3RpdmVMaXZlbmVzc1N0YXRlQ29kZSB7XG4gICAgRkFDRV9BU1BFQ1QgPSAxMDAxLFxuICAgIE5PX0ZBQ0UgPSAxMDAyLFxuICAgIE1VTFRJX0ZBQ0VTID0gMTAwMyxcbiAgICBQQVJUX0ZBQ0UgPSAxMDA0LFxuICAgIEJJR19GQUNFID0gMTAwNSxcbiAgICBTTUFMTF9GQUNFID0gMTAwNixcbiAgICBXRUFSX1NVTkdMQVNTRVMgPSAxMDA3LFxuICAgIFdFQVJfTUFTSyA9IDEwMDgsXG4gICAgQUNUSU9OX01VVFVBTExZX0VYQ0xVU0lWRV9FUlJPUiA9IDEwMDksXG4gICAgQ09OVElOVUlUWV9ERVRFQ1RJT05fRVJST1IgPSAxMDE0LFxuICAgIERBUksgPSAxMDE4LFxuICAgIEJMVVIgPSAxMDE5LFxuICAgIEJBQ0tfTElHSFRJTkcgPSAxMDIwLFxuICAgIEJSSUdIVCA9IDEwMjEsXG4gICAgSU5fUFJPR1JFU1MgPSAyMDAwLFxuICAgIFNQT09GSU5HID0gMjAwMixcbiAgICBMSVZFX0FORF9BQ1RJT05fQ09SUkVDVCA9IDIwMDMsXG4gICAgR1VJREVfREVURUNUSU9OX1NVQ0NFU1MgPSAyMDA0LFxuICAgIElOSVRfRkFDRV9SRUNUQU5HTEVfRVJST1IgPSAyMDA3LFxuICAgIEVSUk9SX1JFU1VMVF9CRUZPUkUgPSA1MDIwLFxuICAgIFJFU1VMVF9USU1FX09VVCA9IDUwMzAsXG4gICAgQUxMX0FDVElPTl9DT1JSRUNUID0gOTk5OSxcbiAgICBJTklUSUFMRURfRkFJTEVEID0gLTEsXG4gICAgTk9fT1JERVJfUEFZID0gLTUwMDEsXG4gICAgT1VUX09GX0NSRURJVCA9IC01MDAyLFxuICAgIEZSRUVfQU1PVU5UX1VTRV9VUCA9IC01MDAzLFxuICAgIEJMQUNLX0xJU1QgPSAtNTAwNCxcbiAgICBPRkZMSU5FX1VTRV9DT1VOVF9PVkVSX1RIUkVTSE9MRCA9IC02MDAxLFxuICAgIE9GRkxJTkVfVVNFX1RJTUVfT1ZFUl9USFJFU0hPTEQgPSAtNjAwMixcbiAgICBMT0NBTF9BTkRfQ0xPVURfQklMTF9JTkZPX0lTX05VTEwgPSAtNzAwMSxcbiAgICBVUERBVEVfQklMTF9JTkZPX0ZJTEVfRkFJTEVEID0gLTcwMDIsXG59XG5cbmV4cG9ydCBlbnVtIENvcmRvdmFFcnJvcnMge1xuICAgIFVOS05PV04gPSAtMSxcbiAgICBTVUNDRVNTID0gMCxcbiAgICBESVNDQVJERUQgPSAxLFxuICAgIElOTkVSID0gMixcbiAgICBJTkFDVElWRSA9IDMsXG4gICAgTk9UX1NVUFBPUlRFRCA9IDQsXG4gICAgSUxMRUdBTF9QQVJBTUVURVIgPSA1LFxuICAgIE9WRVJEVUUgPSA2LFxuICAgIE5PX0ZPVU5EID0gNyxcbiAgICBEVVBMSUNBVEVfRk9VTkQgPSA4LFxuICAgIE5PX1BFUk1JU1NJT04gPSA5LFxuICAgIElOU1VGRklDSUVOVF9SRVNPVVJDRSA9IDEwLFxuICAgIEFOQUxZU0lTX0ZBSUxVUkUgPSAxMSxcbiAgICBJTlRFUlJVUFRFRCA9IDEyLFxuICAgIEVYQ0VFRF9SQU5HRSA9IDEzLFxuICAgIERBVEFfTUlTU0lORyA9IDE0LFxuICAgIEFVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEID0gMTUsXG4gICAgVEZMSVRFX05PVF9DT01QQVRJQkxFID0gMTYsXG4gICAgSU5TVUZGSUNJRU5UX1NQQUNFID0gMTcsXG4gICAgSEFTSF9NSVNTID0gMTgsXG4gICAgVE9LRU5fSU5WQUxJRCA9IDE5LFxuICAgIFNFUlZJQ0VfRkFJTFVSRSA9IDIwLFxuICAgIEFOQUxZU0lTX05VTEwgPSAyMSxcbn0iXX0=