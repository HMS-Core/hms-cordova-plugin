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
import { __extends } from "tslib";
import { Injectable } from "@angular/core";
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from "@ionic-native/core";
var HMSMLBodyPlugin = /** @class */ (function (_super) {
    __extends(HMSMLBodyPlugin, _super);
    function HMSMLBodyPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adjusts the focal length of the camera based on the scaling coefficient (digital zoom).
     * @param  {doZoomReq} doZoomReq Reperesents the necessary parameters.
     * @returns Promise<any>
     */
    HMSMLBodyPlugin.prototype.doZoom = function (doZoomReq) { return cordova(this, "doZoom", { "otherPromise": true }, arguments); };
    /**
     * Monitors photographing.
     * @returns Promise<any>
     */
    HMSMLBodyPlugin.prototype.photograph = function () { return cordova(this, "photograph", { "otherPromise": true }, arguments); };
    /**
     * Close lens engine.
     * @returns Promise<any>
     */
    HMSMLBodyPlugin.prototype.destroy = function () { return cordova(this, "destroy", { "otherPromise": true }, arguments); };
    /**
     * Obtains the size of the preview image of a camera.
     * @returns Promise<any>
     */
    HMSMLBodyPlugin.prototype.getDisplayDimension = function () { return cordova(this, "getDisplayDimension", { "otherPromise": true }, arguments); };
    /**
     * Obtains the selected camera type.
     * @returns Promise<any>
     */
    HMSMLBodyPlugin.prototype.getLensType = function () { return cordova(this, "getLensType", { "otherPromise": true }, arguments); };
    /**
     * It sets Api Key or access token for application.
     * @param  {configReq} params Represents your API_KEY.
     * @returns Promise<any>
     */
    HMSMLBodyPlugin.prototype.serviceInitializer = function (params) { return cordova(this, "serviceInitializer", { "otherPromise": true }, arguments); };
    /**
     * Obtains Frame.
     * @param  {mlFrameReq} mlFrameReq Represents the parameter required.
     * @returns Promise<any>
     */
    HMSMLBodyPlugin.prototype.mlFrame = function (mlFrameReq) { return cordova(this, "mlFrame", { "otherPromise": true }, arguments); };
    /**
     * An app information class used to store basic information about apps with the HMS Core ML SDK integrated and complete the initialization of ML Kit. When using cloud services of the ML Kit, you need to set the apiKey of your app.
     * @param  {appSettingReq} appSettingReq Represents the parameter required.
     * @returns Promise<any>
     */
    HMSMLBodyPlugin.prototype.appSetting = function (appSettingReq) { return cordova(this, "appSetting", { "otherPromise": true }, arguments); };
    /**
     * This service enable logger service.
     * @returns Promise<any>
     */
    HMSMLBodyPlugin.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    /**
     * This service disable logger service.
     * @returns Promise<any>
     */
    HMSMLBodyPlugin.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSMLBodyPlugin.prototype.setUserRegion = function (region) { return cordova(this, "setUserRegion", { "otherPromise": true }, arguments); };
    HMSMLBodyPlugin.prototype.getCountryCode = function () { return cordova(this, "getCountryCode", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSMLBodyPlugin.prototype, "MLFaceSetting", {
        get: function () { return cordovaPropertyGet(this, "MLFaceSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPlugin.prototype, "HandkeyPointConfig", {
        get: function () { return cordovaPropertyGet(this, "HandkeyPointConfig"); },
        set: function (value) { cordovaPropertySet(this, "HandkeyPointConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPlugin.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPlugin.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPlugin.prototype, "MLSkeletonConfig", {
        get: function () { return cordovaPropertyGet(this, "MLSkeletonConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLSkeletonConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPlugin.prototype, "MLFlashMode", {
        get: function () { return cordovaPropertyGet(this, "MLFlashMode"); },
        set: function (value) { cordovaPropertySet(this, "MLFlashMode", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPlugin.prototype, "MLLensType", {
        get: function () { return cordovaPropertyGet(this, "MLLensType"); },
        set: function (value) { cordovaPropertySet(this, "MLLensType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPlugin.prototype, "MLAnalyzerName", {
        get: function () { return cordovaPropertyGet(this, "MLAnalyzerName"); },
        set: function (value) { cordovaPropertySet(this, "MLAnalyzerName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPlugin.prototype, "MLFrame", {
        get: function () { return cordovaPropertyGet(this, "MLFrame"); },
        set: function (value) { cordovaPropertySet(this, "MLFrame", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPlugin.prototype, "MLFaceConfigs", {
        get: function () { return cordovaPropertyGet(this, "MLFaceConfigs"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceConfigs", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPlugin.prototype, "MLLivenessConfig", {
        get: function () { return cordovaPropertyGet(this, "MLLivenessConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLLivenessConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPlugin.prototype, "syncType", {
        get: function () { return cordovaPropertyGet(this, "syncType"); },
        set: function (value) { cordovaPropertySet(this, "syncType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPlugin.prototype, "Events", {
        get: function () { return cordovaPropertyGet(this, "Events"); },
        set: function (value) { cordovaPropertySet(this, "Events", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPlugin.prototype, "Options", {
        get: function () { return cordovaPropertyGet(this, "Options"); },
        set: function (value) { cordovaPropertySet(this, "Options", value); },
        enumerable: false,
        configurable: true
    });
    HMSMLBodyPlugin.pluginName = "HMSMLBodyPlugin";
    HMSMLBodyPlugin.plugin = "cordova-plugin-hms-mlbody";
    HMSMLBodyPlugin.pluginRef = "HMSMLBodyPlugin";
    HMSMLBodyPlugin.platforms = ["Android"];
    HMSMLBodyPlugin.decorators = [
        { type: Injectable }
    ];
    return HMSMLBodyPlugin;
}(IonicNativePlugin));
export { HMSMLBodyPlugin };
var HMSMLBody = /** @class */ (function (_super) {
    __extends(HMSMLBody, _super);
    function HMSMLBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSMLBody.prototype.stillGestureAnalyser = function (stillGestureReq) { return cordova(this, "stillGestureAnalyser", { "otherPromise": true }, arguments); };
    HMSMLBody.prototype.stopStillGestureAnalyser = function () { return cordova(this, "stopStillGestureAnalyser", { "otherPromise": true }, arguments); };
    HMSMLBody.prototype.getGestureAnalyserSetting = function () { return cordova(this, "getGestureAnalyserSetting", { "otherPromise": true }, arguments); };
    /**
     * The face detection service can detect the face contour, recognize facial features, and determine facial expressions for a person.
     * @param  {faceReq} faceReq Represents the parameter required for face detection.
     * @returns Promise<MLFace>
     */
    HMSMLBody.prototype.stillFaceAnalyser = function (faceReq) { return cordova(this, "stillFaceAnalyser", { "otherPromise": true }, arguments); };
    HMSMLBody.prototype.stillFaceAnalyserInfo = function () { return cordova(this, "stillFaceAnalyserInfo", { "otherPromise": true }, arguments); };
    HMSMLBody.prototype.setFaceDetected = function (maxFaceVerificationReq) { return cordova(this, "setFaceDetected", { "otherPromise": true }, arguments); };
    HMSMLBody.prototype.getFaceVerificationAnalyserSetting = function () { return cordova(this, "getFaceVerificationAnalyserSetting", { "otherPromise": true }, arguments); };
    /**
     * @param  {faceVerificationReq} faceVerificationReq Represents the parameter required for face detection.
     * @returns Promise<MLFaceVerificationResult>
     */
    HMSMLBody.prototype.stillFaceVerificationAnalyser = function (faceVerificationReq) { return cordova(this, "stillFaceVerificationAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method stop face recognition service.
     * @returns Promise<any>
     */
    HMSMLBody.prototype.stopStillFaceVerificationAnalyser = function () { return cordova(this, "stopStillFaceVerificationAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method gives the information of the face recognition service.
     * @returns Promise<any>
     */
    HMSMLBody.prototype.stilFaceAnalyserInfo = function () { return cordova(this, "stilFaceAnalyserInfo", { "otherPromise": true }, arguments); };
    /**
     * This method stop face recognition service.
     * @returns Promise<any>
     */
    HMSMLBody.prototype.stopStillFaceAnalyser = function () { return cordova(this, "stopStillFaceAnalyser", { "otherPromise": true }, arguments); };
    /**
   The skeleton detection service detects and locates key points of the human body, such as the top of the head, neck, shoulder, elbow, wrist, hip, knee, and ankle.
   * @param  {stillSkeletonReq |stillSkeletonSimilarityReq} stillSkeletonReq Represents the parameter required for still skeleton detection.
   * @returns Promise<MLSkeleton>
   */
    HMSMLBody.prototype.stillSkeletonAnalyser = function (stillSkeletonReq) { return cordova(this, "stillSkeletonAnalyser", { "otherPromise": true }, arguments); };
    /**
     * The liveness detection service supports silent liveness detection and captures faces in real time. It can determine whether a face is of a real user or is a face attack
     * (for example, face recapture image, face recapture video, or face mask) without requiring the user to follow specific instructions.
     * @param  {livenessDetectionReq} livenessDetectionReq Represents the parameter required.
     * @returns Promise<MLLivenessCaptureResult>
     */
    HMSMLBody.prototype.liveLivenessAnalyser = function (livenessDetectionReq) { return cordova(this, "liveLivenessAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This service can detects 21 hand keypoints (including fingertips, knuckles, and wrists) and return positions of the keypoints.
     * @param  {stillHandKeypointReq } stillHandKeypointReq Represents the parameter required for still handkey analyser.
     * @returns Promise<MLHandKeypoints>
     */
    HMSMLBody.prototype.stillHandkeyAnalyser = function (stillHandKeypointReq) { return cordova(this, "stillHandkeyAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method stop hand analyzer service.
     * @returns Promise<any>
     */
    HMSMLBody.prototype.stopStillHandKeyAnalyser = function () { return cordova(this, "stopStillHandKeyAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method returns face analyzer settings.
     * @returns Promise<any>
     */
    HMSMLBody.prototype.getFaceAnalyserSetting = function () { return cordova(this, "getFaceAnalyserSetting", { "otherPromise": true }, arguments); };
    /**
     * This method  returns hand analyzer settings.
     * @returns Promise<any>
     */
    HMSMLBody.prototype.getHandKeyAnalyserSetting = function () { return cordova(this, "getHandKeyAnalyserSetting", { "otherPromise": true }, arguments); };
    /**
     * This method stop skeleton analyzer service.
     * @returns Promise<any>
     */
    HMSMLBody.prototype.stopStillSkeletonAnalyser = function () { return cordova(this, "stopStillSkeletonAnalyser", { "otherPromise": true }, arguments); };
    /**
     * The interactive biometric verification service implements liveness detection in an interactive way. It captures faces in real time and determines
     * whether a face is of a real person or is a presentation attack (for example, a face recapture image, face recapture video, or face mask) by checking
     * whether the specified actions are detected.
     * @returns Promise<MLInteractiveLivenessCaptureResult>
     */
    HMSMLBody.prototype.interactiveLivenessAnalyser = function (interactiveLivenessDetectionReq) { return cordova(this, "interactiveLivenessAnalyser", { "otherPromise": true }, arguments); };
    /**
     * The interactive biometric verification service implements liveness detection in an interactive way. It captures faces in real time and determines
     * whether a face is of a real person or is a presentation attack (for example, a face recapture image, face recapture video, or face mask) by checking
     * whether the specified actions are detected.
     * @returns Promise<MLInteractiveLivenessCaptureResult>
     */
    HMSMLBody.prototype.customInteractiveLivenessAnalyser = function (customInteractiveLivenessDetectionReq) { return cordova(this, "customInteractiveLivenessAnalyser", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSMLBody.prototype, "MLFaceSetting", {
        get: function () { return cordovaPropertyGet(this, "MLFaceSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBody.prototype, "HandkeyPointConfig", {
        get: function () { return cordovaPropertyGet(this, "HandkeyPointConfig"); },
        set: function (value) { cordovaPropertySet(this, "HandkeyPointConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBody.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBody.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBody.prototype, "MLSkeletonConfig", {
        get: function () { return cordovaPropertyGet(this, "MLSkeletonConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLSkeletonConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBody.prototype, "MLFlashMode", {
        get: function () { return cordovaPropertyGet(this, "MLFlashMode"); },
        set: function (value) { cordovaPropertySet(this, "MLFlashMode", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBody.prototype, "MLLensType", {
        get: function () { return cordovaPropertyGet(this, "MLLensType"); },
        set: function (value) { cordovaPropertySet(this, "MLLensType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBody.prototype, "MLAnalyzerName", {
        get: function () { return cordovaPropertyGet(this, "MLAnalyzerName"); },
        set: function (value) { cordovaPropertySet(this, "MLAnalyzerName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBody.prototype, "MLFrame", {
        get: function () { return cordovaPropertyGet(this, "MLFrame"); },
        set: function (value) { cordovaPropertySet(this, "MLFrame", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBody.prototype, "MLFaceConfigs", {
        get: function () { return cordovaPropertyGet(this, "MLFaceConfigs"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceConfigs", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBody.prototype, "MLLivenessConfig", {
        get: function () { return cordovaPropertyGet(this, "MLLivenessConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLLivenessConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBody.prototype, "syncType", {
        get: function () { return cordovaPropertyGet(this, "syncType"); },
        set: function (value) { cordovaPropertySet(this, "syncType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBody.prototype, "Events", {
        get: function () { return cordovaPropertyGet(this, "Events"); },
        set: function (value) { cordovaPropertySet(this, "Events", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBody.prototype, "Options", {
        get: function () { return cordovaPropertyGet(this, "Options"); },
        set: function (value) { cordovaPropertySet(this, "Options", value); },
        enumerable: false,
        configurable: true
    });
    HMSMLBody.pluginName = "HMSMLBody";
    HMSMLBody.plugin = "cordova-plugin-hms-mlbody";
    HMSMLBody.pluginRef = "HMSMLBody";
    HMSMLBody.platforms = ["Android"];
    HMSMLBody.decorators = [
        { type: Injectable }
    ];
    return HMSMLBody;
}(IonicNativePlugin));
export { HMSMLBody };
var MLLive = /** @class */ (function () {
    function MLLive(scene, divId) {
        if (scene === "ACTION_LIVE_ANALYSE")
            this.arScene = new (HMSMLBodyPlugin.getPlugin().liveEngineAnalyser)(divId);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7O0FBRUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHNFQUtOLE1BQU0sb0JBQW9CLENBQUM7O0lBU1MsbUNBQWlCOzs7O0lBK0JsRDs7OztPQUlHO0lBQ0gsZ0NBQU0sYUFBQyxTQUFvQjtJQUkzQjs7O09BR0c7SUFDSCxvQ0FBVTtJQUlWOzs7T0FHRztJQUNILGlDQUFPO0lBSVA7OztPQUdHO0lBQ0gsNkNBQW1CO0lBSW5COzs7T0FHRztJQUNILHFDQUFXO0lBSVg7Ozs7T0FJRztJQUNILDRDQUFrQixhQUFDLE1BQWlCO0lBSXBDOzs7O09BSUc7SUFDSCxpQ0FBTyxhQUFDLFVBQXNCO0lBSTlCOzs7O09BSUc7SUFDSCxvQ0FBVSxhQUFDLGFBQTRCO0lBSXZDOzs7T0FHRztJQUNILHNDQUFZO0lBSVo7OztPQUdHO0lBQ0gsdUNBQWE7SUFJYix1Q0FBYSxhQUFDLE1BQWM7SUFJNUIsd0NBQWM7MEJBckhkLDBDQUFhOzs7Ozs7MEJBRWIsK0NBQWtCOzs7Ozs7MEJBRWxCLG1DQUFNOzs7Ozs7MEJBRU4sc0NBQVM7Ozs7OzswQkFFVCw2Q0FBZ0I7Ozs7OzswQkFFaEIsd0NBQVc7Ozs7OzswQkFFWCx1Q0FBVTs7Ozs7OzBCQUVWLDJDQUFjOzs7Ozs7MEJBRWQsb0NBQU87Ozs7OzswQkFFUCwwQ0FBYTs7Ozs7OzBCQUViLDZDQUFnQjs7Ozs7OzBCQUVoQixxQ0FBUTs7Ozs7OzBCQUVSLG1DQUFNOzs7Ozs7MEJBRU4sb0NBQU87Ozs7Ozs7Ozs7O2dCQTdCVixVQUFVOzswQkE5Qlg7RUErQnFDLGlCQUFpQjtTQUF6QyxlQUFlOztJQW9JRyw2QkFBaUI7Ozs7SUErQjVDLHdD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QTtJQUMxQix3R0FBc0IsQ0FBQTtJQUN0Qiw4R0FBeUIsQ0FBQTtJQUN6Qix3R0FBcUIsQ0FBQTtJQUNyQixtR0FBb0IsQ0FBQTtJQUNwQixxR0FBcUIsQ0FBQTtJQUNyQiwrR0FBMEIsQ0FBQTtJQUMxQiwrRkFBa0IsQ0FBQTtJQUNsQiwySUFBd0MsQ0FBQTtJQUN4Qyx5SUFBdUMsQ0FBQTtJQUN2Qyw2SUFBeUMsQ0FBQTtJQUN6QyxtSUFBb0MsQ0FBQTtBQUN4QyxDQUFDLEVBaENXLDRCQUE0QixLQUE1Qiw0QkFBNEIsUUFnQ3ZDO0FBRUQsTUFBTSxDQUFOLElBQVksYUF3Qlg7QUF4QkQsV0FBWSxhQUFhO0lBQ3JCLHdEQUFZLENBQUE7SUFDWix1REFBVyxDQUFBO0lBQ1gsMkRBQWEsQ0FBQTtJQUNiLG1EQUFTLENBQUE7SUFDVCx5REFBWSxDQUFBO0lBQ1osbUVBQWlCLENBQUE7SUFDakIsMkVBQXFCLENBQUE7SUFDckIsdURBQVcsQ0FBQTtJQUNYLHlEQUFZLENBQUE7SUFDWix1RUFBbUIsQ0FBQTtJQUNuQixtRUFBaUIsQ0FBQTtJQUNqQixvRkFBMEIsQ0FBQTtJQUMxQiwwRUFBcUIsQ0FBQTtJQUNyQixnRUFBZ0IsQ0FBQTtJQUNoQixrRUFBaUIsQ0FBQTtJQUNqQixrRUFBaUIsQ0FBQTtJQUNqQix3RkFBNEIsQ0FBQTtJQUM1QixvRkFBMEIsQ0FBQTtJQUMxQiw4RUFBdUIsQ0FBQTtJQUN2Qiw0REFBYyxDQUFBO0lBQ2Qsb0VBQWtCLENBQUE7SUFDbEIsd0VBQW9CLENBQUE7SUFDcEIsb0VBQWtCLENBQUE7QUFDdEIsQ0FBQyxFQXhCVyxhQUFhLEtBQWIsYUFBYSxRQXdCeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIENvcHlyaWdodCAyMDIzLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxuICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgICBQbHVnaW4sXG4gICAgQ29yZG92YSxcbiAgICBDb3Jkb3ZhUHJvcGVydHksXG4gICAgSW9uaWNOYXRpdmVQbHVnaW4sXG59IGZyb20gXCJAaW9uaWMtbmF0aXZlL2NvcmVcIjtcblxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogXCJITVNNTEJvZHlQbHVnaW5cIixcbiAgICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLW1sYm9keVwiLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgICBwbHVnaW5SZWY6IFwiSE1TTUxCb2R5UGx1Z2luXCIsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNNTEJvZHlQbHVnaW4gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxGYWNlU2V0dGluZyA9IE1MRmFjZVNldHRpbmc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgSGFuZGtleVBvaW50Q29uZmlnID0gSGFuZGtleVBvaW50Q29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIENvbG9ycyA9IENvbG9ycztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBSZWN0U3R5bGUgPSBSZWN0U3R5bGU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxTa2VsZXRvbkNvbmZpZyA9IE1MU2tlbGV0b25Db25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxGbGFzaE1vZGUgPSBNTEZsYXNoTW9kZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTExlbnNUeXBlID0gTUxMZW5zVHlwZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEFuYWx5emVyTmFtZSA9IE1MQW5hbHl6ZXJOYW1lO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MRnJhbWUgPSBNTEZyYW1lO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MRmFjZUNvbmZpZ3MgPSBNTEZhY2VDb25maWdzO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MTGl2ZW5lc3NDb25maWcgPSBNTExpdmVuZXNzQ29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIHN5bmNUeXBlID0gc3luY1R5cGU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgRXZlbnRzID0gRXZlbnRzO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE9wdGlvbnMgPSBPcHRpb25zO1xuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBBZGp1c3RzIHRoZSBmb2NhbCBsZW5ndGggb2YgdGhlIGNhbWVyYSBiYXNlZCBvbiB0aGUgc2NhbGluZyBjb2VmZmljaWVudCAoZGlnaXRhbCB6b29tKS5cbiAgICAgKiBAcGFyYW0gIHtkb1pvb21SZXF9IGRvWm9vbVJlcSBSZXBlcmVzZW50cyB0aGUgbmVjZXNzYXJ5IHBhcmFtZXRlcnMuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZG9ab29tKGRvWm9vbVJlcTogZG9ab29tUmVxKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIE1vbml0b3JzIHBob3RvZ3JhcGhpbmcuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgcGhvdG9ncmFwaCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogQ2xvc2UgbGVucyBlbmdpbmUuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZGVzdHJveSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogT2J0YWlucyB0aGUgc2l6ZSBvZiB0aGUgcHJldmlldyBpbWFnZSBvZiBhIGNhbWVyYS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBnZXREaXNwbGF5RGltZW5zaW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBPYnRhaW5zIHRoZSBzZWxlY3RlZCBjYW1lcmEgdHlwZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBnZXRMZW5zVHlwZSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogSXQgc2V0cyBBcGkgS2V5IG9yIGFjY2VzcyB0b2tlbiBmb3IgYXBwbGljYXRpb24uXG4gICAgICogQHBhcmFtICB7Y29uZmlnUmVxfSBwYXJhbXMgUmVwcmVzZW50cyB5b3VyIEFQSV9LRVkuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgc2VydmljZUluaXRpYWxpemVyKHBhcmFtczogY29uZmlnUmVxKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIE9idGFpbnMgRnJhbWUuXG4gICAgICogQHBhcmFtICB7bWxGcmFtZVJlcX0gbWxGcmFtZVJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgbWxGcmFtZShtbEZyYW1lUmVxOiBtbEZyYW1lUmVxKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIEFuIGFwcCBpbmZvcm1hdGlvbiBjbGFzcyB1c2VkIHRvIHN0b3JlIGJhc2ljIGluZm9ybWF0aW9uIGFib3V0IGFwcHMgd2l0aCB0aGUgSE1TIENvcmUgTUwgU0RLIGludGVncmF0ZWQgYW5kIGNvbXBsZXRlIHRoZSBpbml0aWFsaXphdGlvbiBvZiBNTCBLaXQuIFdoZW4gdXNpbmcgY2xvdWQgc2VydmljZXMgb2YgdGhlIE1MIEtpdCwgeW91IG5lZWQgdG8gc2V0IHRoZSBhcGlLZXkgb2YgeW91ciBhcHAuXG4gICAgICogQHBhcmFtICB7YXBwU2V0dGluZ1JlcX0gYXBwU2V0dGluZ1JlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgYXBwU2V0dGluZyhhcHBTZXR0aW5nUmVxOiBhcHBTZXR0aW5nUmVxKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgc2VydmljZSBlbmFibGUgbG9nZ2VyIHNlcnZpY2UuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIHNlcnZpY2UgZGlzYWJsZSBsb2dnZXIgc2VydmljZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBkaXNhYmxlTG9nZ2VyKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRVc2VyUmVnaW9uKHJlZ2lvbjogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGdldENvdW50cnlDb2RlKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG59XG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6IFwiSE1TTUxCb2R5XCIsXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1tbGJvZHlcIiwgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gICAgcGx1Z2luUmVmOiBcIkhNU01MQm9keVwiLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLCAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TTUxCb2R5IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MRmFjZVNldHRpbmcgPSBNTEZhY2VTZXR0aW5nO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIEhhbmRrZXlQb2ludENvbmZpZyA9IEhhbmRrZXlQb2ludENvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBDb2xvcnMgPSBDb2xvcnM7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgUmVjdFN0eWxlID0gUmVjdFN0eWxlO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MU2tlbGV0b25Db25maWcgPSBNTFNrZWxldG9uQ29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MRmxhc2hNb2RlID0gTUxGbGFzaE1vZGU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxMZW5zVHlwZSA9IE1MTGVuc1R5cGU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxBbmFseXplck5hbWUgPSBNTEFuYWx5emVyTmFtZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEZyYW1lID0gTUxGcmFtZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEZhY2VDb25maWdzID0gTUxGYWNlQ29uZmlncztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTExpdmVuZXNzQ29uZmlnID0gTUxMaXZlbmVzc0NvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBzeW5jVHlwZSA9IHN5bmNUeXBlO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIEV2ZW50cyA9IEV2ZW50cztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBPcHRpb25zID0gT3B0aW9ucztcblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc3RpbGxHZXN0dXJlQW5hbHlzZXIoc3RpbGxHZXN0dXJlUmVxOiBzdGlsbEdlc3R1cmVSZXEpOiBQcm9taXNlPE1MR2VzdHVyZT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzdG9wU3RpbGxHZXN0dXJlQW5hbHlzZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0R2VzdHVyZUFuYWx5c2VyU2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGUgZmFjZSBkZXRlY3Rpb24gc2VydmljZSBjYW4gZGV0ZWN0IHRoZSBmYWNlIGNvbnRvdXIsIHJlY29nbml6ZSBmYWNpYWwgZmVhdHVyZXMsIGFuZCBkZXRlcm1pbmUgZmFjaWFsIGV4cHJlc3Npb25zIGZvciBhIHBlcnNvbi5cbiAgICAgKiBAcGFyYW0gIHtmYWNlUmVxfSBmYWNlUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgZmFjZSBkZXRlY3Rpb24uXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxNTEZhY2U+XG4gICAgICovXG4gICAgc3RpbGxGYWNlQW5hbHlzZXIoZmFjZVJlcTogZmFjZVJlcSk6IFByb21pc2U8TUxGYWNlPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHN0aWxsRmFjZUFuYWx5c2VySW5mbygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRGYWNlRGV0ZWN0ZWQoXG4gICAgICAgIG1heEZhY2VWZXJpZmljYXRpb25SZXE6IG1heEZhY2VWZXJpZmljYXRpb25SZXFcbiAgICApOiBQcm9taXNlPE1MRmFjZVZlcmlmaWNhdGlvblJlc3VsdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZ2V0RmFjZVZlcmlmaWNhdGlvbkFuYWx5c2VyU2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gIHtmYWNlVmVyaWZpY2F0aW9uUmVxfSBmYWNlVmVyaWZpY2F0aW9uUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgZmFjZSBkZXRlY3Rpb24uXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxNTEZhY2VWZXJpZmljYXRpb25SZXN1bHQ+XG4gICAgICovXG4gICAgc3RpbGxGYWNlVmVyaWZpY2F0aW9uQW5hbHlzZXIoXG4gICAgICAgIGZhY2VWZXJpZmljYXRpb25SZXE6IGZhY2VWZXJpZmljYXRpb25SZXFcbiAgICApOiBQcm9taXNlPE1MRmFjZVZlcmlmaWNhdGlvblJlc3VsdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCBmYWNlIHJlY29nbml0aW9uIHNlcnZpY2UuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgc3RvcFN0aWxsRmFjZVZlcmlmaWNhdGlvbkFuYWx5c2VyKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGdpdmVzIHRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgZmFjZSByZWNvZ25pdGlvbiBzZXJ2aWNlLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHN0aWxGYWNlQW5hbHlzZXJJbmZvKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wIGZhY2UgcmVjb2duaXRpb24gc2VydmljZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBzdG9wU3RpbGxGYWNlQW5hbHlzZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgVGhlIHNrZWxldG9uIGRldGVjdGlvbiBzZXJ2aWNlIGRldGVjdHMgYW5kIGxvY2F0ZXMga2V5IHBvaW50cyBvZiB0aGUgaHVtYW4gYm9keSwgc3VjaCBhcyB0aGUgdG9wIG9mIHRoZSBoZWFkLCBuZWNrLCBzaG91bGRlciwgZWxib3csIHdyaXN0LCBoaXAsIGtuZWUsIGFuZCBhbmtsZS5cbiAgICogQHBhcmFtICB7c3RpbGxTa2VsZXRvblJlcSB8c3RpbGxTa2VsZXRvblNpbWlsYXJpdHlSZXF9IHN0aWxsU2tlbGV0b25SZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBzdGlsbCBza2VsZXRvbiBkZXRlY3Rpb24uXG4gICAqIEByZXR1cm5zIFByb21pc2U8TUxTa2VsZXRvbj5cbiAgICovXG4gICAgc3RpbGxTa2VsZXRvbkFuYWx5c2VyKFxuICAgICAgICBzdGlsbFNrZWxldG9uUmVxOiBzdGlsbFNrZWxldG9uUmVxIHwgc3RpbGxTa2VsZXRvblNpbWlsYXJpdHlSZXFcbiAgICApOiBQcm9taXNlPE1MU2tlbGV0b24+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoZSBsaXZlbmVzcyBkZXRlY3Rpb24gc2VydmljZSBzdXBwb3J0cyBzaWxlbnQgbGl2ZW5lc3MgZGV0ZWN0aW9uIGFuZCBjYXB0dXJlcyBmYWNlcyBpbiByZWFsIHRpbWUuIEl0IGNhbiBkZXRlcm1pbmUgd2hldGhlciBhIGZhY2UgaXMgb2YgYSByZWFsIHVzZXIgb3IgaXMgYSBmYWNlIGF0dGFja1xuICAgICAqIChmb3IgZXhhbXBsZSwgZmFjZSByZWNhcHR1cmUgaW1hZ2UsIGZhY2UgcmVjYXB0dXJlIHZpZGVvLCBvciBmYWNlIG1hc2spIHdpdGhvdXQgcmVxdWlyaW5nIHRoZSB1c2VyIHRvIGZvbGxvdyBzcGVjaWZpYyBpbnN0cnVjdGlvbnMuXG4gICAgICogQHBhcmFtICB7bGl2ZW5lc3NEZXRlY3Rpb25SZXF9IGxpdmVuZXNzRGV0ZWN0aW9uUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZC5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPE1MTGl2ZW5lc3NDYXB0dXJlUmVzdWx0PlxuICAgICAqL1xuICAgIGxpdmVMaXZlbmVzc0FuYWx5c2VyKFxuICAgICAgICBsaXZlbmVzc0RldGVjdGlvblJlcTogbGl2ZW5lc3NEZXRlY3Rpb25SZXFcbiAgICApOiBQcm9taXNlPE1MTGl2ZW5lc3NDYXB0dXJlUmVzdWx0PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIHNlcnZpY2UgY2FuIGRldGVjdHMgMjEgaGFuZCBrZXlwb2ludHMgKGluY2x1ZGluZyBmaW5nZXJ0aXBzLCBrbnVja2xlcywgYW5kIHdyaXN0cykgYW5kIHJldHVybiBwb3NpdGlvbnMgb2YgdGhlIGtleXBvaW50cy5cbiAgICAgKiBAcGFyYW0gIHtzdGlsbEhhbmRLZXlwb2ludFJlcSB9IHN0aWxsSGFuZEtleXBvaW50UmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3Igc3RpbGwgaGFuZGtleSBhbmFseXNlci5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPE1MSGFuZEtleXBvaW50cz5cbiAgICAgKi9cbiAgICBzdGlsbEhhbmRrZXlBbmFseXNlcihcbiAgICAgICAgc3RpbGxIYW5kS2V5cG9pbnRSZXE6IHN0aWxsSGFuZEtleXBvaW50UmVxXG4gICAgKTogUHJvbWlzZTxNTEhhbmRLZXlwb2ludHM+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3AgaGFuZCBhbmFseXplciBzZXJ2aWNlLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHN0b3BTdGlsbEhhbmRLZXlBbmFseXNlcigpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJucyBmYWNlIGFuYWx5emVyIHNldHRpbmdzLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGdldEZhY2VBbmFseXNlclNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kICByZXR1cm5zIGhhbmQgYW5hbHl6ZXIgc2V0dGluZ3MuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZ2V0SGFuZEtleUFuYWx5c2VyU2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCBza2VsZXRvbiBhbmFseXplciBzZXJ2aWNlLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHN0b3BTdGlsbFNrZWxldG9uQW5hbHlzZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoZSBpbnRlcmFjdGl2ZSBiaW9tZXRyaWMgdmVyaWZpY2F0aW9uIHNlcnZpY2UgaW1wbGVtZW50cyBsaXZlbmVzcyBkZXRlY3Rpb24gaW4gYW4gaW50ZXJhY3RpdmUgd2F5LiBJdCBjYXB0dXJlcyBmYWNlcyBpbiByZWFsIHRpbWUgYW5kIGRldGVybWluZXMgXG4gICAgICogd2hldGhlciBhIGZhY2UgaXMgb2YgYSByZWFsIHBlcnNvbiBvciBpcyBhIHByZXNlbnRhdGlvbiBhdHRhY2sgKGZvciBleGFtcGxlLCBhIGZhY2UgcmVjYXB0dXJlIGltYWdlLCBmYWNlIHJlY2FwdHVyZSB2aWRlbywgb3IgZmFjZSBtYXNrKSBieSBjaGVja2luZyBcbiAgICAgKiB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgYWN0aW9ucyBhcmUgZGV0ZWN0ZWQuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxNTEludGVyYWN0aXZlTGl2ZW5lc3NDYXB0dXJlUmVzdWx0PlxuICAgICAqL1xuICAgIGludGVyYWN0aXZlTGl2ZW5lc3NBbmFseXNlcihcbiAgICAgICAgaW50ZXJhY3RpdmVMaXZlbmVzc0RldGVjdGlvblJlcTogaW50ZXJhY3RpdmVMaXZlbmVzc0RldGVjdGlvblJlcVxuICAgICk6IFByb21pc2U8TUxJbnRlcmFjdGl2ZUxpdmVuZXNzQ2FwdHVyZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhlIGludGVyYWN0aXZlIGJpb21ldHJpYyB2ZXJpZmljYXRpb24gc2VydmljZSBpbXBsZW1lbnRzIGxpdmVuZXNzIGRldGVjdGlvbiBpbiBhbiBpbnRlcmFjdGl2ZSB3YXkuIEl0IGNhcHR1cmVzIGZhY2VzIGluIHJlYWwgdGltZSBhbmQgZGV0ZXJtaW5lcyBcbiAgICAgKiB3aGV0aGVyIGEgZmFjZSBpcyBvZiBhIHJlYWwgcGVyc29uIG9yIGlzIGEgcHJlc2VudGF0aW9uIGF0dGFjayAoZm9yIGV4YW1wbGUsIGEgZmFjZSByZWNhcHR1cmUgaW1hZ2UsIGZhY2UgcmVjYXB0dXJlIHZpZGVvLCBvciBmYWNlIG1hc2spIGJ5IGNoZWNraW5nIFxuICAgICAqIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBhY3Rpb25zIGFyZSBkZXRlY3RlZC5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPE1MSW50ZXJhY3RpdmVMaXZlbmVzc0NhcHR1cmVSZXN1bHQ+XG4gICAgICovXG4gICAgY3VzdG9tSW50ZXJhY3RpdmVMaXZlbmVzc0FuYWx5c2VyKFxuICAgICAgICBjdXN0b21JbnRlcmFjdGl2ZUxpdmVuZXNzRGV0ZWN0aW9uUmVxOiBjdXN0b21JbnRlcmFjdGl2ZUxpdmVuZXNzRGV0ZWN0aW9uUmVxXG4gICAgKTogUHJvbWlzZTxNTEludGVyYWN0aXZlTGl2ZW5lc3NDYXB0dXJlUmVzdWx0PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1MTGl2ZSB7XG4gICAgcHJpdmF0ZSBhclNjZW5lOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogc3RyaW5nLCBkaXZJZDogc3RyaW5nKSB7XG4gICAgICAgIGlmIChzY2VuZSA9PT0gXCJBQ1RJT05fTElWRV9BTkFMWVNFXCIpXG4gICAgICAgICAgICB0aGlzLmFyU2NlbmUgPSBuZXcgKEhNU01MQm9keVBsdWdpbi5nZXRQbHVnaW4oKS5saXZlRW5naW5lQW5hbHlzZXIpKGRpdklkKTtcbiAgICB9XG5cbiAgICBvbihldmVudE5hbWU6IEV2ZW50cywgY2FsbDogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJTY2VuZS5vbihldmVudE5hbWUsIGNhbGwpO1xuICAgIH1cbiAgICBzdGFydE1MTGl2ZShjb25maWc/OiBNTGNvbmZpZywgYm91bmRzPzogTUxCb3VuZHMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJTY2VuZS5zdGFydE1MTGl2ZShjb25maWcsIGJvdW5kcyk7XG4gICAgfVxuICAgIGRlc3Ryb3koKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmFyU2NlbmUuZGVzdHJveSgpO1xuICAgIH1cbiAgICBzZXRDb25maWcoY29uZmlnOiBNTGNvbmZpZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hclNjZW5lLnNldENvbmZpZyhjb25maWcpO1xuICAgIH1cbiAgICBzY3JvbGwoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmFyU2NlbmUuc2Nyb2xsKCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgbGl2ZUVuZ2luZUFuYWx5c2VyIGV4dGVuZHMgTUxMaXZlIHtcbiAgICBjb25zdHJ1Y3RvcihkaXZJZDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKFwiQUNUSU9OX0xJVkVfQU5BTFlTRVwiLCBkaXZJZCk7XG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MQm91bmRzIHtcbiAgICBtYXJnaW5Ub3A/OiBudW1iZXI7XG4gICAgbWFyZ2luQm90dG9tPzogbnVtYmVyO1xuICAgIG1hcmdpbkxlZnQ/OiBudW1iZXI7XG4gICAgbWFyZ2luUmlnaHQ/OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIE1MY29uZmlnIHtcbiAgICBsZW5zRW5naW5lUmVxOiBsZW5zRW5naW5lUmVxO1xufVxuZXhwb3J0IGludGVyZmFjZSBsZW5zRW5naW5lUmVxIHtcbiAgICBhbmFseXplck5hbWU6IE1MQW5hbHl6ZXJOYW1lO1xuICAgIGxlbnNFbmdpbmVTZXR0aW5nPzogTUxMZW5zRW5naW5lU2V0dGluZztcbiAgICBncmFwaGljU2V0dGluZz86XG4gICAgICAgIHwgRmFjZUdyYXBoaWNTZXR0aW5nXG4gICAgICAgIHwgSGFuZGtleUdyYXBoaWNTZXR0aW5nXG4gICAgICAgIHwgU2tlbGV0b25HcmFwaGljU2V0dGluZ1xuICAgICAgICB8IG51bGw7XG4gICAgYW5hbHl6ZXJTZXR0aW5nPzpcbiAgICAgICAgfCBtbEZhY2VBbmFseXplclNldHRpbmdcbiAgICAgICAgfCBNTEZhY2VWZXJpZmljYXRpb25BbmFseXplclNldHRpbmdcbiAgICAgICAgfCBtbEhhbmRLZXlwb2ludFNldHRpbmdcbiAgICAgICAgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBNTExlbnNFbmdpbmVTZXR0aW5nIHtcbiAgICBmcHM/OiBudW1iZXIgfCBudWxsO1xuICAgIGRpc3BsYXlEaW1lbnNpb25JPzogbnVtYmVyIHwgbnVsbDtcbiAgICBkaXNwbGF5RGltZW5zaW9uSTE/OiBudW1iZXIgfCBudWxsO1xuICAgIGxlbnNUeXBlPzogTUxMZW5zVHlwZSB8IG51bGw7XG4gICAgZW5hYmxlRm9jdXM/OiBib29sZWFuIHwgbnVsbDtcbiAgICBmbGFzaE1vZGU/OiBNTEZsYXNoTW9kZSB8IG51bGw7XG59XG5leHBvcnQgZW51bSBNTEZsYXNoTW9kZSB7XG4gICAgQVVUTyA9IFwiYXV0b1wiLFxuICAgIE9OID0gXCJvblwiLFxuICAgIE9GRiA9IFwib2ZmXCIsXG59XG5leHBvcnQgZW51bSBNTExlbnNUeXBlIHtcbiAgICBCQUNLX0xFTlMgPSAwLFxuICAgIEZST05UX0xFTlMgPSAxLFxufVxuZXhwb3J0IGVudW0gTUxBbmFseXplck5hbWUge1xuICAgIExJVkVGQUNFID0gXCJGQUNFXCIsXG4gICAgTElWRUZBQ0UzRCA9IFwiRkFDRTNEXCIsXG4gICAgTElWRUZBQ0VNQVggPSBcIkZBQ0VNQVhcIixcbiAgICBMSVZFSEFORCA9IFwiSEFORFwiLFxuICAgIExJVkVTS0VMRVRPTiA9IFwiU0tFTEVUT05cIixcbiAgICBMSVZFT0JKRUNUID0gXCJPQkpFQ1RcIixcbiAgICBMSVZFQ0xBU1NJRklDQVRJT04gPSBcIkNMQVNTSUZJQ0FUSU9OXCIsXG4gICAgTElWRVNDRU5FID0gXCJTQ0VORVwiLFxuICAgIExJVkVURVhUID0gXCJURVhUXCIsXG4gICAgTElWRUdFU1RVUkUgPSBcIkdFU1RVUkVcIixcbn1cbmV4cG9ydCBpbnRlcmZhY2UgZG9ab29tUmVxIHtcbiAgICBzY2FsZT86IG51bWJlciB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIG1sRnJhbWVSZXEge1xuICAgIGFjdGlvbk5hbWU6IE1MRnJhbWU7XG4gICAgZmlsZVBhdGg6IGFueTtcbn1cbmV4cG9ydCBlbnVtIE1MRnJhbWUge1xuICAgIGdldFByZXZpZXdCaXRtYXAgPSBcImdldFByZXZpZXdCaXRtYXBcIixcbiAgICByZWFkQml0bWFwID0gXCJyZWFkQml0bWFwXCIsXG4gICAgcm90YXRlID0gXCJyb3RhdGVcIixcbiAgICBTQ1JFRU5fRklSU1RfUVVBRFJBTlQgPSAwLFxuICAgIFNDUkVFTl9TRUNPTkRfUVVBRFJBTlQgPSAxLFxuICAgIFNDUkVFTl9USElSRF9RVUFEUkFOVCA9IDIsXG4gICAgU0NSRUVOX0ZPVVJUSF9RVUFEUkFOVCA9IDMsXG59XG5cbi8vIEFQSSBLRVlcblxuZXhwb3J0IGludGVyZmFjZSBjb25maWdSZXEge1xuICAgIGFwaUtleTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIGFwcFNldHRpbmdSZXEge1xuICAgIGFwaUtleT86IHN0cmluZyB8IG51bGw7XG4gICAgYXBwbGljYXRpb25JZD86IHN0cmluZyB8IG51bGw7XG4gICAgY2VydEZpbmdlcnByaW50Pzogc3RyaW5nIHwgbnVsbDtcbn1cblxuLy8gU1RJTEwgJiYgTElWRSBGQUNFIEFOQUxZU0VSXG5cbmV4cG9ydCBpbnRlcmZhY2UgZmFjZVJlcSB7XG4gICAgbWxGYWNlQW5hbHlzZXJTZXR0aW5nPzogbWxGYWNlQW5hbHl6ZXJTZXR0aW5nIHwgbnVsbDtcbiAgICBhbmFseXNlTW9kZT86IE1MRmFjZUNvbmZpZ3MgfCBudWxsO1xuICAgIGZpbGVQYXRoOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgZmFjZVZlcmlmaWNhdGlvblJlcSB7XG4gICAgbWxGYWNlVmVyaWZpY2F0aW9uQW5hbHl6ZXJTZXR0aW5nPzogTUxGYWNlVmVyaWZpY2F0aW9uQW5hbHl6ZXJTZXR0aW5nIHwgbnVsbDtcbiAgICBzeW5jVHlwZT86IHN5bmNUeXBlIHwgbnVsbDtcbiAgICBmaWxlUGF0aDogYW55O1xuICAgIGZpbGVQYXRoMjogYW55O1xufVxuXG5leHBvcnQgZW51bSBNTEZhY2VDb25maWdzIHtcbiAgICBUWVBFXzJEX1NZTkMgPSAwLFxuICAgIFRZUEVfMkRfQVNZTkMgPSAxLFxuICAgIFRZUEVfM0RfU1lOQyA9IDIsXG4gICAgVFlQRV8zRF9BU1lOQyA9IDMsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmFjZUdyYXBoaWNTZXR0aW5nIHtcbiAgICBmYWNlUG9zaXRpb25QYWludFNldHRpbmc/OiBGYWNlUG9zaXRpb25QYWludFNldHRpbmcgfCBudWxsO1xuICAgIHRleHRQYWludFNldHRpbmc/OiBUZXh0UGFpbnRTZXR0aW5nRmFjZSB8IG51bGw7XG4gICAgZmFjZUZlYXR1cmVQYWludFRleHRTZXR0aW5nPzogRmFjZUZlYXR1cmVQYWludFRleHRTZXR0aW5nIHwgbnVsbDtcbiAgICBrZXlwb2ludFBhaW50U2V0dGluZz86IEtleXBvaW50UGFpbnRTZXR0aW5nIHwgbnVsbDtcbiAgICBib3hQYWludFNldHRpbmc/OiBCb3hQYWludFNldHRpbmdGYWNlIHwgbnVsbDtcbiAgICBmYWNlUGFpbnRTZXR0aW5nPzogRmFjZVBhaW50U2V0dGluZyB8IG51bGw7XG4gICAgZXllUGFpbnRTZXR0aW5nPzogRXllUGFpbnRTZXR0aW5nIHwgbnVsbDtcbiAgICBleWVicm93UGFpbnRTZXR0aW5nPzogRXllYnJvd1BhaW50U2V0dGluZyB8IG51bGw7XG4gICAgbm9zZVBhaW50U2V0dGluZz86IE5vc2VQYWludFNldHRpbmcgfCBudWxsO1xuICAgIG5vc2VCYXNlUGFpbnRTZXR0aW5nPzogTm9zZUJhc2VQYWludFNldHRpbmcgfCBudWxsO1xuICAgIGxpcFBhaW50U2V0dGluZz86IExpcFBhaW50U2V0dGluZyB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIExpcFBhaW50U2V0dGluZyB7XG4gICAgY29sb3I/OiBTdHJpbmcgfCBDb2xvcnMgfCBudWxsO1xuICAgIHN0eWxlPzogUmVjdFN0eWxlIHwgbnVsbDtcbiAgICBzdHJva2VXaWR0aDogTnVtYmVyIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTm9zZVBhaW50U2V0dGluZyB7XG4gICAgY29sb3I/OiBTdHJpbmcgfCBDb2xvcnMgfCBudWxsO1xuICAgIHN0eWxlPzogUmVjdFN0eWxlIHwgbnVsbDtcbiAgICBzdHJva2VXaWR0aD86IE51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTm9zZUJhc2VQYWludFNldHRpbmcge1xuICAgIGNvbG9yPzogU3RyaW5nIHwgQ29sb3JzIHwgbnVsbDtcbiAgICBzdHlsZT86IFJlY3RTdHlsZSB8IG51bGw7XG4gICAgc3Ryb2tlV2lkdGg/OiBOdW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIEV5ZWJyb3dQYWludFNldHRpbmcge1xuICAgIGNvbG9yPzogU3RyaW5nIHwgQ29sb3JzIHwgbnVsbDtcbiAgICBzdHlsZT86IFJlY3RTdHlsZTtcbiAgICBzdHJva2VXaWR0aD86IE51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRXllUGFpbnRTZXR0aW5nIHtcbiAgICBjb2xvcj86IFN0cmluZyB8IENvbG9ycztcbiAgICBzdHlsZT86IFJlY3RTdHlsZSB8IENvbG9ycztcbiAgICBzdHJva2VXaWR0aDogTnVtYmVyIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRmFjZVBhaW50U2V0dGluZyB7XG4gICAgY29sb3I/OiBTdHJpbmcgfCBDb2xvcnMgfCBudWxsO1xuICAgIHN0eWxlPzogUmVjdFN0eWxlIHwgbnVsbDtcbiAgICBzdHJva2VXaWR0aDogTnVtYmVyIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQm94UGFpbnRTZXR0aW5nRmFjZSB7XG4gICAgY29sb3I/OiBTdHJpbmcgfCBDb2xvcnMgfCBudWxsO1xuICAgIHN0eWxlPzogUmVjdFN0eWxlIHwgbnVsbDtcbiAgICBzdHJva2VXaWR0aD86IE51bWJlciB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIEtleXBvaW50UGFpbnRTZXR0aW5nIHtcbiAgICBjb2xvcj86IENvbG9ycyB8IENvbG9ycyB8IG51bGw7XG4gICAgc3R5bGU/OiBSZWN0U3R5bGUgfCBudWxsO1xuICAgIHRleHRTaXplOiBOdW1iZXIgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZhY2VGZWF0dXJlUGFpbnRUZXh0U2V0dGluZyB7XG4gICAgY29sb3I/OiBDb2xvcnMgfCBudWxsO1xuICAgIHRleHRTaXplOiBOdW1iZXIgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBGYWNlUG9zaXRpb25QYWludFNldHRpbmcge1xuICAgIGNvbG9yPzogQ29sb3JzIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dFBhaW50U2V0dGluZ0ZhY2Uge1xuICAgIGNvbG9yPzogQ29sb3JzIHwgbnVsbDtcbiAgICB0ZXh0U2l6ZT86IE51bWJlciB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTUxGYWNlVmVyaWZpY2F0aW9uQW5hbHl6ZXJTZXR0aW5nIHtcbiAgICBtYXhGYWNlRGV0Y3RlZDogbnVtYmVyIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgbWxGYWNlQW5hbHl6ZXJTZXR0aW5nIHtcbiAgICBmZWF0dXJlVHlwZT86IE1MRmFjZVNldHRpbmcgfCBudWxsO1xuICAgIGtleVBvaW50VHlwZT86IE1MRmFjZVNldHRpbmcgfCBudWxsO1xuICAgIG1heFNpemVGYWNlT25seT86IGJvb2xlYW4gfCBudWxsO1xuICAgIG1pbkZhY2VQcm9wb3J0aW9uPzogbnVtYmVyIHwgbnVsbDtcbiAgICBwZXJmb3JtYW5jZVR5cGU/OiBNTEZhY2VTZXR0aW5nIHwgbnVsbDtcbiAgICBwb3NlRGlzYWJsZWQ/OiBib29sZWFuIHwgbnVsbDtcbiAgICBzaGFwZVR5cGU/OiBNTEZhY2VTZXR0aW5nIHwgbnVsbDtcbiAgICB0cmFjaW5nQWxsb3dlZD86IGJvb2xlYW4gfCBudWxsO1xuICAgIHRyYWNpbmdNb2RlPzogbnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGVudW0gTUxGYWNlU2V0dGluZyB7XG4gICAgTU9ERV9UUkFDSU5HX0ZBU1QgPSAxLFxuICAgIE1PREVfVFJBQ0lOR19ST0JVU1QgPSAyLFxuICAgIFRZUEVfRkVBVFVSRVMgPSAxLFxuICAgIFRZUEVfRkVBVFVSRV9BR0UgPSAyNTYsXG4gICAgVFlQRV9GRUFUVVJFX0JFQVJEID0gMzIsXG4gICAgVFlQRV9GRUFUVVJFX0VNT1RJT04gPSA0LFxuICAgIFRZUEVfRkVBVFVSRV9FWUVHTEFTUyA9IDgsXG4gICAgVFlQRV9GRUFUVVJFX0dFTkRBUiA9IDEyOCxcbiAgICBUWVBFX0ZFQVRVUkVfSEFUID0gMTYsXG4gICAgVFlQRV9GRUFUVVJFX09QRU5DTE9TRUVZRSA9IDY0LFxuICAgIFRZUEVfS0VZUE9JTlRTID0gMSxcbiAgICBUWVBFX1BSRUNJU0lPTiA9IDEsXG4gICAgVFlQRV9TSEFQRVMgPSAyLFxuICAgIFRZUEVfU1BFRUQgPSAyLFxuICAgIFRZUEVfVU5TVVBQT1JUX0ZFQVRVUkVTID0gMixcbiAgICBUWVBFX1VOU1VQUE9SVF9LRVlQT0lOVFMgPSAwLFxuICAgIFRZUEVfVU5TVVBQT1JUX1NIQVBFUyA9IDMsXG4gICAgVFlQRV9CT1RUT01fT0ZfTU9VVEggPSAxLFxuICAgIFRZUEVfTEVGVF9DSEVFSyA9IDIsXG4gICAgVFlQRV9MRUZUX0VBUiA9IDMsXG4gICAgVFlQRV9MRUZUX1NJREVfT0ZfTU9VVEggPSA2LFxuICAgIFRZUEVfUklHSFRfQ0hFRUsgPSA4LFxuICAgIFRZUEVfUklHSFRfRUFSID0gOSxcbiAgICBUWVBFX1JJR0hUX1NJREVfT0ZfTU9VVEggPSAxMixcbiAgICBUWVBFX1RJUF9PRl9MRUZUX0VBUiA9IDQsXG4gICAgVFlQRV9USVBfT0ZfTk9TRSA9IDcsXG4gICAgVFlQRV9USVBfT0ZfUklHSFRfRUFSID0gMTAsXG4gICAgVFlQRV9BTEwgPSAwLFxuICAgIFRZUEVfQk9UVE9NX09GX0xFRlRfRVlFQlJPVyA9IDQsXG4gICAgVFlQRV9CT1RUT01fT0ZfTE9XRVJfTElQID0gOCxcbiAgICBUWVBFX0JPVFRPTV9PRl9OT1NFID0gMTIsXG4gICAgVFlQRV9CT1RUT01fT0ZfUklHSFRfRVlFQlJPVyA9IDUsXG4gICAgVFlQRV9CT1RUT01fT0ZfVVBQRVJfTElQID0gMTAsXG4gICAgVFlQRV9CUklER0VfT0ZfTk9TRSA9IDEzLFxuICAgIFRZUEVfRkFDRSA9IDEsXG4gICAgVFlQRV9UT1BfT0ZfTEVGVF9FWUVCUk9XID0gNixcbiAgICBUWVBFX1RPUF9PRl9MT1dFUl9MSVAgPSA5LFxuICAgIFRZUEVfVE9QX09GX1JJR0hUX0VZRUJST1cgPSA3LFxuICAgIFRZUEVfVE9QX09GX1VQUEVSX0xJUCA9IDExLFxufVxuXG4vLyBGQUNFIFZFUklGSUNBVElPTlxuXG5leHBvcnQgaW50ZXJmYWNlIG1heEZhY2VWZXJpZmljYXRpb25SZXEge1xuICAgIE1heEZhY2VEZXRjdGVkPzogbnVtYmVyO1xufVxuXG4vL0xpdmUgJiYgU3RpbCBIYW5ka2V5UG9pbnRcblxuZXhwb3J0IGludGVyZmFjZSBzdGlsbEhhbmRLZXlwb2ludFJlcSB7XG4gICAgc3luY1R5cGU/OiBzeW5jVHlwZSB8IG51bGw7XG4gICAgZmlsZVBhdGg6IGFueTtcbiAgICBoYW5ka2V5U2V0dGluZz86IG1sSGFuZEtleXBvaW50U2V0dGluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2Ugc3RpbGxHZXN0dXJlUmVxIHtcbiAgICBzeW5jVHlwZT86IHN5bmNUeXBlIHwgbnVsbDtcbiAgICBmaWxlUGF0aDogYW55O1xufVxuXG5leHBvcnQgZW51bSBzeW5jVHlwZSB7XG4gICAgU1lOQ19NT0RFID0gMCxcbiAgICBBU1lOQ19NT0RFID0gMSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTEdlc3R1cmUge1xuICAgIHJlY3Q/OiBSZWN0O1xuICAgIHNjb3JlPzogbnVtYmVyO1xuICAgIGNhdGVnb3J5PzogbnVtYmVyO1xuICAgIGhhc2hDb2RlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZW51bSBHZXN0dXJlVHlwZXMge1xuICAgIE9ORSA9IDAsXG4gICAgU0VDT05EID0gMSxcbiAgICBUSFJFRSA9IDIsXG4gICAgRk9VUiA9IDMsXG4gICAgRklWRSA9IDQsXG4gICAgU0lYID0gNSxcbiAgICBTRVZFTiA9IDYsXG4gICAgRUlHSFQgPSA3LFxuICAgIE5JTkUgPSA4LFxuICAgIERJU1MgPSA5LFxuICAgIEZJU1QgPSAxMCxcbiAgICBHT09EID0gMTEsXG4gICAgSEVBUlQgPSAxMixcbiAgICBPSyA9IDEzLFxuICAgIFVOS05PV04gPSAxNCxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZXN0dXJlR3JhcGhpY1NldHRpbmcge1xuICAgIGlkUGFpbnRuZXdTZXR0aW5nPzogSWRQYWludG5ld1NldHRpbmcgfCBudWxsO1xuICAgIHJlY3RQYWludFNldHRpbmc/OiBSZWN0UGFpbnRTZXR0aW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIYW5ka2V5R3JhcGhpY1NldHRpbmcge1xuICAgIGlkUGFpbnRuZXdTZXR0aW5nPzogSWRQYWludG5ld1NldHRpbmcgfCBudWxsO1xuICAgIHJlY3RQYWludFNldHRpbmc/OiBSZWN0UGFpbnRTZXR0aW5nIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSWRQYWludG5ld1NldHRpbmcge1xuICAgIGNvbG9yPzogQ29sb3JzIHwgbnVsbDtcbiAgICB0ZXh0U2l6ZT86IE51bWJlciB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIFJlY3RQYWludFNldHRpbmcge1xuICAgIGNvbG9yPzogQ29sb3JzIHwgbnVsbDtcbiAgICBzdHlsZT86IFJlY3RTdHlsZSB8IG51bGw7XG4gICAgYm94U3Ryb2tlV2lkdGg/OiBOdW1iZXIgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBtbEhhbmRLZXlwb2ludFNldHRpbmcge1xuICAgIHNjZW5lVHlwZT86IEhhbmRrZXlQb2ludENvbmZpZyB8IG51bGw7XG4gICAgbWF4SGFuZFJlc3VsdHM/OiBudW1iZXIgfCBudWxsO1xufVxuZXhwb3J0IGVudW0gSGFuZGtleVBvaW50Q29uZmlnIHtcbiAgICBUWVBFX0FMTCA9IDAsXG4gICAgVFlQRV9LRVlQT0lOVF9PTkxZID0gMSxcbiAgICBUWVBFX1JFQ1RfT05MWSA9IDIsXG4gICAgTUFYX0hBTkRTX05VTSA9IDEwLFxufVxuXG4vL0xpdmVuZXNzIERldGVjdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIGxpdmVuZXNzRGV0ZWN0aW9uUmVxIHtcbiAgICBhbmFseXNlck1vZGU/OiBNTExpdmVuZXNzQ2FwdHVyZVJlc3VsdCB8IG51bGw7XG59XG5leHBvcnQgZW51bSBNTExpdmVuZXNzQ29uZmlnIHtcbiAgICBERUZBVUxUID0gMCxcbiAgICBDVVNUT00gPSAxLFxufVxuZXhwb3J0IGVudW0gTUxMaXZlbmVzc0NhcHR1cmVFcnJvciB7XG4gICAgQ0FNRVJBX05PX1BFUk1JU1NJT04gPSAxMTQwMSxcbiAgICBDQU1FUkFfU1RBUlRfRkFJTEVEID0gMTE0MDIsXG4gICAgVVNFUl9DQU5DRUwgPSAxMTQwMyxcbiAgICBERVRFQ1RfRkFDRV9USU1FX09VVCA9IDExNDA0LFxuICAgIERFVEVDVF9NQVNLID0gMSxcbn1cblxuLy8gQ3VzdG9tIEludGVyYWN0aXZlIExpdmVuZXNzIERldGVjdGlvblxuZXhwb3J0IGludGVyZmFjZSBjdXN0b21JbnRlcmFjdGl2ZUxpdmVuZXNzRGV0ZWN0aW9uUmVxIHtcbiAgICBhY3Rpb24/OiBBY3Rpb24sXG4gICAgZGV0ZWN0aW9uVGltZU91dCA6IG51bWJlcjtcbiAgICBjYW1lcmFGcmFtZTogUmVjdDtcbiAgICBmYWNlRnJhbWU6IFJlY3Q7XG4gICAgdGV4dE1hcmdpbjogbnVtYmVyO1xuICAgIHRleHRPcHRpb25zPzogVGV4dE9wdGlvbnM7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBzaG93U3RhdHVzQ29kZTogYm9vbGVhbjtcbiAgICBzdGF0dXNDb2RlczogTWFwPG51bWJlciwgc3RyaW5nPjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uIHtcbiAgICBhY3Rpb25BcnJheTogTWFwPG51bWJlciwgc3RyaW5nPjtcbiAgICBudW06IG51bWJlcjtcbiAgICBpc1JhbmRvbTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUmVjdCB7XG4gICAgYm90dG9tOiBudW1iZXIsXG4gICAgbGVmdDogbnVtYmVyLFxuICAgIHJpZ2h0OiBudW1iZXIsXG4gICAgdG9wOiBudW1iZXIsXG59XG5leHBvcnQgaW50ZXJmYWNlIFRleHRPcHRpb25zIHtcbiAgICB0ZXh0Q29sb3I/OiBudW1iZXI7XG4gICAgdGV4dFNpemU/OiBudW1iZXI7XG4gICAgYXV0b1NpemVUZXh0PzogYm9vbGVhbjtcbiAgICBtaW5UZXh0U2l6ZT86IG51bWJlcjtcbiAgICBtYXhUZXh0U2l6ZT86IG51bWJlcjtcbiAgICBncmFudWxhcml0eT86IG51bWJlcjtcbn1cblxuLy9TVElMTCAmJiBMSVZFIFNLRUxFVE9OIEFOQUxZU0VSXG5cbmV4cG9ydCBpbnRlcmZhY2Ugc3RpbGxTa2VsZXRvblJlcSB7XG4gICAgZmlsZVBhdGg6IGFueTtcbiAgICBzeW5jVHlwZTogTUxTa2VsZXRvbkNvbmZpZztcbiAgICBhbmFseXplclR5cGU6IE1MU2tlbGV0b25Db25maWc7XG59XG5leHBvcnQgaW50ZXJmYWNlIHN0aWxsU2tlbGV0b25TaW1pbGFyaXR5UmVxIHtcbiAgICBmaWxlUGF0aDogYW55O1xuICAgIGZpbGVwYXRoMjogYW55O1xuICAgIHN5bmNUeXBlOiBNTFNrZWxldG9uQ29uZmlnO1xuICAgIGFuYWx5emVyVHlwZTogTUxTa2VsZXRvbkNvbmZpZztcbn1cbmV4cG9ydCBlbnVtIE1MU2tlbGV0b25Db25maWcge1xuICAgIFNZTkNfTU9ERSA9IDAsXG4gICAgQVNZTkNfTU9ERSA9IDEsXG4gICAgU0lNSUxBUklUVFlfTU9ERSA9IDIsXG4gICAgVFlQRV9ZT0dBID0gMSxcbiAgICBUWVBFX05PUk1BTCA9IDAsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2tlbGV0b25HcmFwaGljU2V0dGluZyB7XG4gICAgY2lyY2xlUGFpbnRTZXR0aW5nPzogY2lyY2xlUGFpbnRTZXR0aW5nIHwgbnVsbDtcbiAgICBsaW5lUGFpbnRTZXR0aW5nPzogbGluZVBhaW50U2V0dGluZyB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIGNpcmNsZVBhaW50U2V0dGluZyB7XG4gICAgY29sb3I/OiBDb2xvcnMgfCBudWxsO1xuICAgIHN0eWxlPzogUmVjdFN0eWxlIHwgbnVsbDtcbiAgICBhbnRpQWxpYXM/OiBib29sZWFuIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgbGluZVBhaW50U2V0dGluZyB7XG4gICAgY29sb3I/OiBDb2xvcnMgfCBudWxsO1xuICAgIHN0eWxlPzogUmVjdFN0eWxlIHwgbnVsbDtcbiAgICBzdHJva2VXaWR0aD86IE51bWJlciB8IG51bGw7XG4gICAgYW50aUFsaWFzPzogYm9vbGVhbiB8IG51bGw7XG59XG5cbmV4cG9ydCBlbnVtIENvbG9ycyB7XG4gICAgUkVEID0gLTY1NTM2LFxuICAgIERLR1JBWSA9IC0xMjMwMzI5MixcbiAgICBHUkFZID0gLTc4MjkzNjgsXG4gICAgV0hJVEUgPSAtMSxcbiAgICBCTFVFID0gLTE2Nzc2OTYxLFxuICAgIEJMQUNLID0gLTE2Nzc3MjE2LFxuICAgIExUR1JBWSA9IC0zMzU1NDQ0LFxuICAgIE1BR0VOVEEgPSAtNjUyODEsXG4gICAgWUVMTE9XID0gLTI1NixcbiAgICBDWUFOID0gLTE2NzExNjgxLFxuICAgIEdSRUVOID0gLTE2NzExOTM2LFxuICAgIFRSQU5TUEFSRU5UID0gMCxcbn1cbmV4cG9ydCBlbnVtIFJlY3RTdHlsZSB7XG4gICAgU1RST0tFID0gMSxcbiAgICBGSUxMID0gMixcbiAgICBGSUxMX0FORF9TVFJPS0UgPSAzLFxufVxuXG4vLyBJbnRlcmFjdGl2ZSBMaXZlbmVzcyBEZXRlY3Rpb25cbmV4cG9ydCBpbnRlcmZhY2UgaW50ZXJhY3RpdmVMaXZlbmVzc0RldGVjdGlvblJlcSB7XG4gICAgb3B0aW9uczogT3B0aW9ucztcbiAgICBkZXRlY3Rpb25UaW1lT3V0IDogbnVtYmVyO1xuICAgIGFjdGlvbj86IERlZmF1bHRBY3Rpb247XG59XG5leHBvcnQgZW51bSBPcHRpb25zIHtcbiAgICBERVRFQ1RfTUFTSyA9IDEsXG4gICAgREVURUNUX1NVTkdMQVNTID0gMlxufVxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0QWN0aW9uIHtcbiAgICBhY3Rpb25BcnJheTogbnVtYmVyIFtdO1xuICAgIG51bTogbnVtYmVyO1xuICAgIGlzUmFuZG9tOiBib29sZWFuO1xufVxuXG4vKlxuLS0tLS0tLS0tLS0tLS0tLS0gcmV0dXJuXG4qL1xuXG5leHBvcnQgaW50ZXJmYWNlIE1MRmFjZVZlcmlmaWNhdGlvblJlc3VsdCB7XG4gICAgZmFjZUluZm8/OiBNTEZhY2VJbmZvW10gfCBudWxsO1xuICAgIHNpbWlsYXJpdHk/OiBudW1iZXIgfCBudWxsO1xuICAgIHRlbXBsYXRlSWQ/OiBudW1iZXIgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MRmFjZVRlbXBsYXRlUmVzdWx0IHtcbiAgICBmYWNlSW5mbz86IE1MRmFjZUluZm9bXSB8IG51bGw7XG4gICAgaGFzaGNvZGU/OiBudW1iZXIgfCBudWxsO1xuICAgIHRlbXBsYXRlSWQ/OiBudW1iZXIgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBNTEZhY2VJbmZvIHtcbiAgICBmYWNlUmVjdD86IFJlY3RbXSB8IG51bGw7XG4gICAgaGFzaENvZGU/OiBudW1iZXIgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MRmFjZSB7XG4gICAgUmVzdWx0PzogUmVzdWx0RW50aXR5W10gfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBSZXN1bHRFbnRpdHkge1xuICAgIG9wZW5uZXNzT2ZMZWZ0RXllOiBudW1iZXI7XG4gICAgdHJhY2luZ0lkZW50aXR5OiBudW1iZXI7XG4gICAgcG9zc2liaWxpdHlPZlNtaWxpbmc6IG51bWJlcjtcbiAgICBvcGVubmVzc09mUmlnaHRFeWU6IG51bWJlcjtcbiAgICByb3RhdGlvbkFuZ2xlWDogbnVtYmVyO1xuICAgIHJvdGF0aW9uQW5nbGVZOiBudW1iZXI7XG4gICAgcm90YXRpb25BbmdsZVo6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGJvcmRlcjogQm9yZGVyO1xuICAgIGZlYXR1cmVzOiBGZWF0dXJlcztcbiAgICBlbW90aW9uczogRW1vdGlvbnM7XG4gICAgYWxsUG9pbnRzPzogQWxsUG9pbnRzRW50aXR5W10gfCBudWxsO1xuICAgIGtleVBvaW50cz86IG51bGxbXSB8IG51bGw7XG4gICAgZmFjZVNoYXBlTGlzdD86IEZhY2VTaGFwZUxpc3RFbnRpdHlbXSB8IG51bGw7XG59XG5cbmV4cG9ydCBlbnVtIE1MRmFjZUNvbnN0YW50IHtcbiAgICBVTkFOQUxZWkVEX1BPU1NJQklMSVRZID0gLTEuMCxcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQm9yZGVyIHtcbiAgICBib3R0b206IG51bWJlcjtcbiAgICB0b3A6IG51bWJlcjtcbiAgICBsZWZ0OiBudW1iZXI7XG4gICAgcmlnaHQ6IG51bWJlcjtcbiAgICBleGFjdENlbnRlclg6IG51bWJlcjtcbiAgICBjZW50ZXJZOiBudW1iZXI7XG4gICAgY2VudGVyWDogbnVtYmVyO1xuICAgIGRlc2NyaWJlQ29udGVudHM6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICB3aWR0aDogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlcyB7XG4gICAgc3VuR2xhc3NQcm9iYWJpbGl0eTogbnVtYmVyO1xuICAgIHNleFByb2JhYmlsaXR5OiBudW1iZXI7XG4gICAgcmlnaHRFeWVPcGVuUHJvYmFiaWxpdHk6IG51bWJlcjtcbiAgICBtb3VzdGFjaGVQcm9iYWJpbGl0eTogbnVtYmVyO1xuICAgIGxlZnRFeWVPcGVuUHJvYmFiaWxpdHk6IG51bWJlcjtcbiAgICBhZ2U6IG51bWJlcjtcbiAgICBoYXRQcm9iYWJpbGl0eTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBFbW90aW9ucyB7XG4gICAgc3VycHJpc2VQcm9iYWJpbGl0eTogbnVtYmVyO1xuICAgIHNtaWxpbmdQcm9iYWJpbGl0eTogbnVtYmVyO1xuICAgIHNhZFByb2JhYmlsaXR5OiBudW1iZXI7XG4gICAgbmV1dHJhbFByb2JhYmlsaXR5OiBudW1iZXI7XG4gICAgZmVhclByb2JhYmlsaXR5OiBudW1iZXI7XG4gICAgZGlzZ3VzdFByb2JhYmlsaXR5OiBudW1iZXI7XG4gICAgYW5ncnlQcm9iYWJpbGl0eTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBBbGxQb2ludHNFbnRpdHkge1xuICAgIFg6IG51bWJlcjtcbiAgICBZOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIEZhY2VTaGFwZUxpc3RFbnRpdHkge1xuICAgIHBvaW50cz86IFBvaW50c0VudGl0eVtdIHwgbnVsbDtcbiAgICBmYWNlU2hhcGVUeXBlOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFBvaW50c0VudGl0eSB7XG4gICAgWDogbnVtYmVyO1xuICAgIFk6IG51bWJlcjtcbiAgICBaOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTUxIYW5kS2V5cG9pbnRzIHtcbiAgICBoYW5ka2V5UG9pbnRzOiBoYW5ka2V5UG9pbnRzO1xuICAgIHJlY3Q6IFJlY3Q7XG4gICAgc2NvcmU6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgaGFuZGtleVBvaW50cyB7XG4gICAgcG9pbnRYOiBudW1iZXI7XG4gICAgcG9pbnRZOiBudW1iZXI7XG4gICAgc2NvcmU6IG51bWJlcjtcbiAgICB0eXBlOiBoYW5ka2V5UG9pbnRzVHlwZXM7XG59XG5leHBvcnQgZW51bSBoYW5ka2V5UG9pbnRzVHlwZXMge1xuICAgIFRZUEVfV1JJU1QgPSAwLFxuICAgIFRZUEVfVEhVTUJfRklSU1QgPSAxLFxuICAgIFRZUEVfVEhVTUJfU0VDT05EID0gMixcbiAgICBUWVBFX1RIVU1CX1RISVJEID0gMyxcbiAgICBUWVBFX1RIVU1CX0ZPVVJUSCA9IDQsXG4gICAgVFlQRV9GT1JFRklOR0VSX0ZJUlNUID0gNSxcbiAgICBUWVBFX0ZPUkVGSU5HRVJfU0VDT05EID0gNixcbiAgICBUWVBFX0ZPUkVGSU5HRVJfVEhJUkQgPSA3LFxuICAgIFRZUEVfRk9SRUZJTkdFUl9GT1VSVEggPSA4LFxuICAgIFRZUEVfTUlERExFX0ZJTkdFUl9GSVJTVCA9IDksXG4gICAgVFlQRV9NSURETEVfRklOR0VSX1NFQ09ORCA9IDEwLFxuICAgIFRZUEVfTUlERExFX0ZJTkdFUl9USElSRCA9IDExLFxuICAgIFRZUEVfTUlERExFX0ZJTkdFUl9GT1VSVEggPSAxMixcbiAgICBUWVBFX1JJTkdfRklOR0VSX0ZJUlNUID0gMTMsXG4gICAgVFlQRV9SSU5HX0ZJTkdFUl9TRUNPTkQgPSAxNCxcbiAgICBUWVBFX1JJTkdfRklOR0VSX1RISVJEID0gMTUsXG4gICAgVFlQRV9SSU5HX0ZJTkdFUl9GT1VSVEggPSAxNixcbiAgICBUWVBFX0xJVFRMRV9GSU5HRVJfRklSU1QgPSAxNyxcbiAgICBUWVBFX0xJVFRMRV9GSU5HRVJfU0VDT05EID0gMTgsXG4gICAgVFlQRV9MSVRUTEVfRklOR0VSX1RISVJEID0gMTksXG4gICAgVFlQRV9MSVRUTEVfRklOR0VSX0ZPVVJUSCA9IDIwLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlY3Qge1xuICAgIGJvdHRvbTogbnVtYmVyO1xuICAgIHRvcDogbnVtYmVyO1xuICAgIGxlZnQ6IG51bWJlcjtcbiAgICByaWdodDogbnVtYmVyO1xuICAgIGV4YWN0Q2VudGVyWDogbnVtYmVyO1xuICAgIGNlbnRlclk6IG51bWJlcjtcbiAgICBjZW50ZXJYOiBudW1iZXI7XG4gICAgZGVzY3JpYmVDb250ZW50czogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTUxMaXZlbmVzc0NhcHR1cmVSZXN1bHQge1xuICAgIGJpdG1hcDogQml0bWFwO1xuICAgIGlzTGl2ZTogYm9vbGVhbjtcbiAgICBwaXRjaDogbnVtYmVyO1xuICAgIHJvbGw6IG51bWJlcjtcbiAgICBzY29yZTogbnVtYmVyO1xuICAgIHlhdzogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBCaXRtYXAge1xuICAgIG1HYWxsZXJ5Q2FjaGVkOiBib29sZWFuO1xuICAgIG1IZWlnaHQ6IG51bWJlcjtcbiAgICBtTmF0aXZlUHRyOiBudW1iZXI7XG4gICAgbVdpZHRoOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTUxJbnRlcmFjdGl2ZUxpdmVuZXNzQ2FwdHVyZVJlc3VsdCB7XG4gICAgYml0bWFwOiBCaXRtYXA7XG4gICAgc3RhdGVDb2RlOiBJbnRlcmFjdGl2ZUxpdmVuZXNzU3RhdGVDb2RlO1xuICAgIGFjdGlvblR5cGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTFNrZWxldG9uIHtcbiAgICBqb2ludHM6IE1MSm9pbnQ7XG4gICAgSm9pbnRQb2ludDogTUxKb2ludFBvaW50cztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTUxKb2ludCB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBzY29yZTogbnVtYmVyO1xuICAgIHR5cGU6IG51bWJlcjtcbiAgICBoYXNoQ29kZTogbnVtYmVyO1xufVxuZXhwb3J0IGVudW0gTUxKb2ludFBvaW50cyB7XG4gICAgVFlQRV9SSUdIVF9TSE9VTERFUiA9IDEwMSxcbiAgICBUWVBFX1JJR0hUX0VMQk9XID0gMTAyLFxuICAgIFRZUEVfUklHSFRfV1JJU1QgPSAxMDMsXG4gICAgVFlQRV9MRUZUX1NIT1VMREVSID0gMTA0LFxuICAgIFRZUEVfTEVGVF9FTEJPVyA9IDEwNSxcbiAgICBUWVBFX0xFRlRfV1JJU1QgPSAxMDYsXG4gICAgVFlQRV9SSUdIVF9ISVAgPSAxMDcsXG4gICAgVFlQRV9SSUdIVF9LTkVFID0gMTA4LFxuICAgIFRZUEVfUklHSFRfQU5LTEUgPSAxMDksXG4gICAgVFlQRV9MRUZUX0hJUCA9IDExMCxcbiAgICBUWVBFX0xFRlRfS05FRSA9IDExMSxcbiAgICBUWVBFX0xFRlRfQU5LTEUgPSAxMTIsXG4gICAgVFlQRV9IRUFEX1RPUCA9IDExMyxcbiAgICBUWVBFX05FQ0sgPSAxMTQsXG59XG5cbmV4cG9ydCBlbnVtIEV2ZW50cyB7XG4gICAgRkFDRV9UUkFOU0FDVE9SX09OX0RFU1RST1kgPSBcImZhY2VUcmFuc2FjdG9yT25EZXN0cm95XCIsXG4gICAgRkFDRV9UUkFOU0FDVE9SX09OX1JFU1VMVCA9IFwiZmFjZVRyYW5zYWN0b3JPblJlc3VsdFwiLFxuICAgIEZBQ0VfM0RfVFJBTlNBQ1RPUl9PTl9ERVNUUk9ZID0gXCJmYWNlM2RUcmFuc2FjdG9yT25EZXN0cm95XCIsXG4gICAgRkFDRV8zRF9UUkFOU0FDVE9SX09OX1JFU1VMVCA9IFwiZmFjZTNkVHJhbnNhY3Rvck9uUmVzdWx0XCIsXG4gICAgU0tFTEVUT05fVFJBTlNBQ1RPUl9PTl9ERVNUUk9ZID0gXCJza2VsZXRvblRyYW5zYWN0b3JPbkRlc3Ryb3lcIixcbiAgICBTS0VMRVRPTl9UUkFOU0FDVE9SX09OX1JFU1VMVCA9IFwic2tlbGV0b25UcmFuc2FjdG9yT25SZXN1bHRcIixcbiAgICBIQU5EX1RSQU5TQUNUT1JfT05fREVTVFJPWSA9IFwiaGFuZFRyYW5zYWN0b3JPbkRlc3Ryb3lcIixcbiAgICBIQU5EX1RSQU5TQUNUT1JfT05fUkVTVUxUID0gXCJoYW5kVHJhbnNhY3Rvck9uUmVzdWx0XCIsXG4gICAgR0VTVFVSRV9UUkFOU0FDVE9SX09OX0RFU1RST1kgPSBcImdlc3R1cmVUcmFuc2FjdG9yT25EZXN0cm95XCIsXG4gICAgR0VTVFVSRV9UUkFOU0FDVE9SX09OX1JFU1VMVCA9IFwiZ2VzdHVyZVRyYW5zYWN0b3JPblJlc3VsdFwiLFxufVxuXG5leHBvcnQgZW51bSBJbnRlcmFjdGl2ZUxpdmVuZXNzU3RhdGVDb2RlIHtcbiAgICBGQUNFX0FTUEVDVCA9IDEwMDEsXG4gICAgTk9fRkFDRSA9IDEwMDIsXG4gICAgTVVMVElfRkFDRVMgPSAxMDAzLFxuICAgIFBBUlRfRkFDRSA9IDEwMDQsXG4gICAgQklHX0ZBQ0UgPSAxMDA1LFxuICAgIFNNQUxMX0ZBQ0UgPSAxMDA2LFxuICAgIFdFQVJfU1VOR0xBU1NFUyA9IDEwMDcsXG4gICAgV0VBUl9NQVNLID0gMTAwOCxcbiAgICBBQ1RJT05fTVVUVUFMTFlfRVhDTFVTSVZFX0VSUk9SID0gMTAwOSxcbiAgICBDT05USU5VSVRZX0RFVEVDVElPTl9FUlJPUiA9IDEwMTQsXG4gICAgREFSSyA9IDEwMTgsXG4gICAgQkxVUiA9IDEwMTksXG4gICAgQkFDS19MSUdIVElORyA9IDEwMjAsXG4gICAgQlJJR0hUID0gMTAyMSxcbiAgICBJTl9QUk9HUkVTUyA9IDIwMDAsXG4gICAgU1BPT0ZJTkcgPSAyMDAyLFxuICAgIExJVkVfQU5EX0FDVElPTl9DT1JSRUNUID0gMjAwMyxcbiAgICBHVUlERV9ERVRFQ1RJT05fU1VDQ0VTUyA9IDIwMDQsXG4gICAgSU5JVF9GQUNFX1JFQ1RBTkdMRV9FUlJPUiA9IDIwMDcsXG4gICAgRVJST1JfUkVTVUxUX0JFRk9SRSA9IDUwMjAsXG4gICAgUkVTVUxUX1RJTUVfT1VUID0gNTAzMCxcbiAgICBBTExfQUNUSU9OX0NPUlJFQ1QgPSA5OTk5LFxuICAgIElOSVRJQUxFRF9GQUlMRUQgPSAtMSxcbiAgICBOT19PUkRFUl9QQVkgPSAtNTAwMSxcbiAgICBPVVRfT0ZfQ1JFRElUID0gLTUwMDIsXG4gICAgRlJFRV9BTU9VTlRfVVNFX1VQID0gLTUwMDMsXG4gICAgQkxBQ0tfTElTVCA9IC01MDA0LFxuICAgIE9GRkxJTkVfVVNFX0NPVU5UX09WRVJfVEhSRVNIT0xEID0gLTYwMDEsXG4gICAgT0ZGTElORV9VU0VfVElNRV9PVkVSX1RIUkVTSE9MRCA9IC02MDAyLFxuICAgIExPQ0FMX0FORF9DTE9VRF9CSUxMX0lORk9fSVNfTlVMTCA9IC03MDAxLFxuICAgIFVQREFURV9CSUxMX0lORk9fRklMRV9GQUlMRUQgPSAtNzAwMixcbn1cblxuZXhwb3J0IGVudW0gQ29yZG92YUVycm9ycyB7XG4gICAgVU5LTk9XTiA9IC0xLFxuICAgIFNVQ0NFU1MgPSAwLFxuICAgIERJU0NBUkRFRCA9IDEsXG4gICAgSU5ORVIgPSAyLFxuICAgIElOQUNUSVZFID0gMyxcbiAgICBOT1RfU1VQUE9SVEVEID0gNCxcbiAgICBJTExFR0FMX1BBUkFNRVRFUiA9IDUsXG4gICAgT1ZFUkRVRSA9IDYsXG4gICAgTk9fRk9VTkQgPSA3LFxuICAgIERVUExJQ0FURV9GT1VORCA9IDgsXG4gICAgTk9fUEVSTUlTU0lPTiA9IDksXG4gICAgSU5TVUZGSUNJRU5UX1JFU09VUkNFID0gMTAsXG4gICAgQU5BTFlTSVNfRkFJTFVSRSA9IDExLFxuICAgIElOVEVSUlVQVEVEID0gMTIsXG4gICAgRVhDRUVEX1JBTkdFID0gMTMsXG4gICAgREFUQV9NSVNTSU5HID0gMTQsXG4gICAgQVVUSEVOVElDQVRJT05fUkVRVUlSRUQgPSAxNSxcbiAgICBURkxJVEVfTk9UX0NPTVBBVElCTEUgPSAxNixcbiAgICBJTlNVRkZJQ0lFTlRfU1BBQ0UgPSAxNyxcbiAgICBIQVNIX01JU1MgPSAxOCxcbiAgICBUT0tFTl9JTlZBTElEID0gMTksXG4gICAgU0VSVklDRV9GQUlMVVJFID0gMjAsXG4gICAgQU5BTFlTSVNfTlVMTCA9IDIxLFxufSJdfQ==