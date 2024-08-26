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

'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
   var n = Object.create(null);
   if (e) {
      Object.keys(e).forEach(function (k) {
         if (k !== 'default') {
            var d = Object.getOwnPropertyDescriptor(e, k);
            Object.defineProperty(n, k, d.get ? d : {
               enumerable: true,
               get: function () { return e[k]; }
            });
         }
      });
   }
   n.default = e;
   return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var HMSMLBodyPlugin = /** @class */ (function (_super) {
    tslib.__extends(HMSMLBodyPlugin, _super);
    function HMSMLBodyPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adjusts the focal length of the camera based on the scaling coefficient (digital zoom).
     * @param  {doZoomReq} doZoomReq Reperesents the necessary parameters.
     * @returns Promise<any>
     */
    HMSMLBodyPlugin.prototype.doZoom = function (doZoomReq) { return core.cordova(this, "doZoom", { "otherPromise": true }, arguments); };
    /**
     * Monitors photographing.
     * @returns Promise<any>
     */
    HMSMLBodyPlugin.prototype.photograph = function () { return core.cordova(this, "photograph", { "otherPromise": true }, arguments); };
    /**
     * Close lens engine.
     * @returns Promise<any>
     */
    HMSMLBodyPlugin.prototype.destroy = function () { return core.cordova(this, "destroy", { "otherPromise": true }, arguments); };
    /**
     * Obtains the size of the preview image of a camera.
     * @returns Promise<any>
     */
    HMSMLBodyPlugin.prototype.getDisplayDimension = function () { return core.cordova(this, "getDisplayDimension", { "otherPromise": true }, arguments); };
    /**
     * Obtains the selected camera type.
     * @returns Promise<any>
     */
    HMSMLBodyPlugin.prototype.getLensType = function () { return core.cordova(this, "getLensType", { "otherPromise": true }, arguments); };
    /**
     * It sets Api Key or access token for application.
     * @param  {configReq} params Represents your API_KEY.
     * @returns Promise<any>
     */
    HMSMLBodyPlugin.prototype.serviceInitializer = function (params) { return core.cordova(this, "serviceInitializer", { "otherPromise": true }, arguments); };
    /**
     * Obtains Frame.
     * @param  {mlFrameReq} mlFrameReq Represents the parameter required.
     * @returns Promise<any>
     */
    HMSMLBodyPlugin.prototype.mlFrame = function (mlFrameReq) { return core.cordova(this, "mlFrame", { "otherPromise": true }, arguments); };
    /**
     * An app information class used to store basic information about apps with the HMS Core ML SDK integrated and complete the initialization of ML Kit. When using cloud services of the ML Kit, you need to set the apiKey of your app.
     * @param  {appSettingReq} appSettingReq Represents the parameter required.
     * @returns Promise<any>
     */
    HMSMLBodyPlugin.prototype.appSetting = function (appSettingReq) { return core.cordova(this, "appSetting", { "otherPromise": true }, arguments); };
    /**
     * This service enable logger service.
     * @returns Promise<any>
     */
    HMSMLBodyPlugin.prototype.enableLogger = function () { return core.cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    /**
     * This service disable logger service.
     * @returns Promise<any>
     */
    HMSMLBodyPlugin.prototype.disableLogger = function () { return core.cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSMLBodyPlugin.prototype.setUserRegion = function (region) { return core.cordova(this, "setUserRegion", { "otherPromise": true }, arguments); };
    HMSMLBodyPlugin.prototype.getCountryCode = function () { return core.cordova(this, "getCountryCode", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSMLBodyPlugin.prototype, "MLFaceSetting", {
        get: function () { return core.cordovaPropertyGet(this, "MLFaceSetting"); },
        set: function (value) { core.cordovaPropertySet(this, "MLFaceSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPlugin.prototype, "HandkeyPointConfig", {
        get: function () { return core.cordovaPropertyGet(this, "HandkeyPointConfig"); },
        set: function (value) { core.cordovaPropertySet(this, "HandkeyPointConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPlugin.prototype, "Colors", {
        get: function () { return core.cordovaPropertyGet(this, "Colors"); },
        set: function (value) { core.cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPlugin.prototype, "RectStyle", {
        get: function () { return core.cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { core.cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPlugin.prototype, "MLSkeletonConfig", {
        get: function () { return core.cordovaPropertyGet(this, "MLSkeletonConfig"); },
        set: function (value) { core.cordovaPropertySet(this, "MLSkeletonConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPlugin.prototype, "MLFlashMode", {
        get: function () { return core.cordovaPropertyGet(this, "MLFlashMode"); },
        set: function (value) { core.cordovaPropertySet(this, "MLFlashMode", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPlugin.prototype, "MLLensType", {
        get: function () { return core.cordovaPropertyGet(this, "MLLensType"); },
        set: function (value) { core.cordovaPropertySet(this, "MLLensType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPlugin.prototype, "MLAnalyzerName", {
        get: function () { return core.cordovaPropertyGet(this, "MLAnalyzerName"); },
        set: function (value) { core.cordovaPropertySet(this, "MLAnalyzerName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPlugin.prototype, "MLFrame", {
        get: function () { return core.cordovaPropertyGet(this, "MLFrame"); },
        set: function (value) { core.cordovaPropertySet(this, "MLFrame", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPlugin.prototype, "MLFaceConfigs", {
        get: function () { return core.cordovaPropertyGet(this, "MLFaceConfigs"); },
        set: function (value) { core.cordovaPropertySet(this, "MLFaceConfigs", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPlugin.prototype, "MLLivenessConfig", {
        get: function () { return core.cordovaPropertyGet(this, "MLLivenessConfig"); },
        set: function (value) { core.cordovaPropertySet(this, "MLLivenessConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPlugin.prototype, "syncType", {
        get: function () { return core.cordovaPropertyGet(this, "syncType"); },
        set: function (value) { core.cordovaPropertySet(this, "syncType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPlugin.prototype, "Events", {
        get: function () { return core.cordovaPropertyGet(this, "Events"); },
        set: function (value) { core.cordovaPropertySet(this, "Events", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBodyPlugin.prototype, "Options", {
        get: function () { return core.cordovaPropertyGet(this, "Options"); },
        set: function (value) { core.cordovaPropertySet(this, "Options", value); },
        enumerable: false,
        configurable: true
    });
    HMSMLBodyPlugin.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSMLBodyPlugin, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HMSMLBodyPlugin.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSMLBodyPlugin });
    HMSMLBodyPlugin.pluginName = "HMSMLBodyPlugin";
    HMSMLBodyPlugin.plugin = "cordova-plugin-hms-mlbody";
    HMSMLBodyPlugin.pluginRef = "HMSMLBodyPlugin";
    HMSMLBodyPlugin.platforms = ["Android"];
    HMSMLBodyPlugin = tslib.__decorate([], HMSMLBodyPlugin);
    return HMSMLBodyPlugin;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSMLBodyPlugin, decorators: [{
            type: i0.Injectable
        }], propDecorators: { MLFaceSetting: [], HandkeyPointConfig: [], Colors: [], RectStyle: [], MLSkeletonConfig: [], MLFlashMode: [], MLLensType: [], MLAnalyzerName: [], MLFrame: [], MLFaceConfigs: [], MLLivenessConfig: [], syncType: [], Events: [], Options: [], 
        /**
         * Adjusts the focal length of the camera based on the scaling coefficient (digital zoom).
         * @param  {doZoomReq} doZoomReq Reperesents the necessary parameters.
         * @returns Promise<any>
         */
        doZoom: [], 
        /**
         * Monitors photographing.
         * @returns Promise<any>
         */
        photograph: [], 
        /**
         * Close lens engine.
         * @returns Promise<any>
         */
        destroy: [], 
        /**
         * Obtains the size of the preview image of a camera.
         * @returns Promise<any>
         */
        getDisplayDimension: [], 
        /**
         * Obtains the selected camera type.
         * @returns Promise<any>
         */
        getLensType: [], 
        /**
         * It sets Api Key or access token for application.
         * @param  {configReq} params Represents your API_KEY.
         * @returns Promise<any>
         */
        serviceInitializer: [], 
        /**
         * Obtains Frame.
         * @param  {mlFrameReq} mlFrameReq Represents the parameter required.
         * @returns Promise<any>
         */
        mlFrame: [], 
        /**
         * An app information class used to store basic information about apps with the HMS Core ML SDK integrated and complete the initialization of ML Kit. When using cloud services of the ML Kit, you need to set the apiKey of your app.
         * @param  {appSettingReq} appSettingReq Represents the parameter required.
         * @returns Promise<any>
         */
        appSetting: [], 
        /**
         * This service enable logger service.
         * @returns Promise<any>
         */
        enableLogger: [], 
        /**
         * This service disable logger service.
         * @returns Promise<any>
         */
        disableLogger: [], setUserRegion: [], getCountryCode: [] } });
var HMSMLBody = /** @class */ (function (_super) {
    tslib.__extends(HMSMLBody, _super);
    function HMSMLBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSMLBody.prototype.stillGestureAnalyser = function (stillGestureReq) { return core.cordova(this, "stillGestureAnalyser", { "otherPromise": true }, arguments); };
    HMSMLBody.prototype.stopStillGestureAnalyser = function () { return core.cordova(this, "stopStillGestureAnalyser", { "otherPromise": true }, arguments); };
    HMSMLBody.prototype.getGestureAnalyserSetting = function () { return core.cordova(this, "getGestureAnalyserSetting", { "otherPromise": true }, arguments); };
    /**
     * The face detection service can detect the face contour, recognize facial features, and determine facial expressions for a person.
     * @param  {faceReq} faceReq Represents the parameter required for face detection.
     * @returns Promise<MLFace>
     */
    HMSMLBody.prototype.stillFaceAnalyser = function (faceReq) { return core.cordova(this, "stillFaceAnalyser", { "otherPromise": true }, arguments); };
    HMSMLBody.prototype.stillFaceAnalyserInfo = function () { return core.cordova(this, "stillFaceAnalyserInfo", { "otherPromise": true }, arguments); };
    HMSMLBody.prototype.setFaceDetected = function (maxFaceVerificationReq) { return core.cordova(this, "setFaceDetected", { "otherPromise": true }, arguments); };
    HMSMLBody.prototype.getFaceVerificationAnalyserSetting = function () { return core.cordova(this, "getFaceVerificationAnalyserSetting", { "otherPromise": true }, arguments); };
    /**
     * @param  {faceVerificationReq} faceVerificationReq Represents the parameter required for face detection.
     * @returns Promise<MLFaceVerificationResult>
     */
    HMSMLBody.prototype.stillFaceVerificationAnalyser = function (faceVerificationReq) { return core.cordova(this, "stillFaceVerificationAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method stop face recognition service.
     * @returns Promise<any>
     */
    HMSMLBody.prototype.stopStillFaceVerificationAnalyser = function () { return core.cordova(this, "stopStillFaceVerificationAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method stop face recognition service.
     * @returns Promise<any>
     */
    HMSMLBody.prototype.stopStillFaceAnalyser = function () { return core.cordova(this, "stopStillFaceAnalyser", { "otherPromise": true }, arguments); };
    /**
   The skeleton detection service detects and locates key points of the human body, such as the top of the head, neck, shoulder, elbow, wrist, hip, knee, and ankle.
   * @param  {stillSkeletonReq |stillSkeletonSimilarityReq} stillSkeletonReq Represents the parameter required for still skeleton detection.
   * @returns Promise<MLSkeleton>
   */
    HMSMLBody.prototype.stillSkeletonAnalyser = function (stillSkeletonReq) { return core.cordova(this, "stillSkeletonAnalyser", { "otherPromise": true }, arguments); };
    /**
     * The liveness detection service supports silent liveness detection and captures faces in real time. It can determine whether a face is of a real user or is a face attack
     * (for example, face recapture image, face recapture video, or face mask) without requiring the user to follow specific instructions.
     * @param  {livenessDetectionReq} livenessDetectionReq Represents the parameter required.
     * @returns Promise<MLLivenessCaptureResult>
     */
    HMSMLBody.prototype.liveLivenessAnalyser = function (livenessDetectionReq) { return core.cordova(this, "liveLivenessAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This service can detects 21 hand keypoints (including fingertips, knuckles, and wrists) and return positions of the keypoints.
     * @param  {stillHandKeypointReq } stillHandKeypointReq Represents the parameter required for still handkey analyser.
     * @returns Promise<MLHandKeypoints>
     */
    HMSMLBody.prototype.stillHandkeyAnalyser = function (stillHandKeypointReq) { return core.cordova(this, "stillHandkeyAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method stop hand analyzer service.
     * @returns Promise<any>
     */
    HMSMLBody.prototype.stopStillHandKeyAnalyser = function () { return core.cordova(this, "stopStillHandKeyAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method returns face analyzer settings.
     * @returns Promise<any>
     */
    HMSMLBody.prototype.getFaceAnalyserSetting = function () { return core.cordova(this, "getFaceAnalyserSetting", { "otherPromise": true }, arguments); };
    /**
     * This method  returns hand analyzer settings.
     * @returns Promise<any>
     */
    HMSMLBody.prototype.getHandKeyAnalyserSetting = function () { return core.cordova(this, "getHandKeyAnalyserSetting", { "otherPromise": true }, arguments); };
    /**
     * This method stop skeleton analyzer service.
     * @returns Promise<any>
     */
    HMSMLBody.prototype.stopStillSkeletonAnalyser = function () { return core.cordova(this, "stopStillSkeletonAnalyser", { "otherPromise": true }, arguments); };
    /**
     * The interactive biometric verification service implements liveness detection in an interactive way. It captures faces in real time and determines
     * whether a face is of a real person or is a presentation attack (for example, a face recapture image, face recapture video, or face mask) by checking
     * whether the specified actions are detected.
     * @returns Promise<MLInteractiveLivenessCaptureResult>
     */
    HMSMLBody.prototype.interactiveLivenessAnalyser = function (interactiveLivenessDetectionReq) { return core.cordova(this, "interactiveLivenessAnalyser", { "otherPromise": true }, arguments); };
    /**
     * The interactive biometric verification service implements liveness detection in an interactive way. It captures faces in real time and determines
     * whether a face is of a real person or is a presentation attack (for example, a face recapture image, face recapture video, or face mask) by checking
     * whether the specified actions are detected.
     * @returns Promise<MLInteractiveLivenessCaptureResult>
     */
    HMSMLBody.prototype.customInteractiveLivenessAnalyser = function (customInteractiveLivenessDetectionReq) { return core.cordova(this, "customInteractiveLivenessAnalyser", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSMLBody.prototype, "MLFaceSetting", {
        get: function () { return core.cordovaPropertyGet(this, "MLFaceSetting"); },
        set: function (value) { core.cordovaPropertySet(this, "MLFaceSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBody.prototype, "HandkeyPointConfig", {
        get: function () { return core.cordovaPropertyGet(this, "HandkeyPointConfig"); },
        set: function (value) { core.cordovaPropertySet(this, "HandkeyPointConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBody.prototype, "Colors", {
        get: function () { return core.cordovaPropertyGet(this, "Colors"); },
        set: function (value) { core.cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBody.prototype, "RectStyle", {
        get: function () { return core.cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { core.cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBody.prototype, "MLSkeletonConfig", {
        get: function () { return core.cordovaPropertyGet(this, "MLSkeletonConfig"); },
        set: function (value) { core.cordovaPropertySet(this, "MLSkeletonConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBody.prototype, "MLFlashMode", {
        get: function () { return core.cordovaPropertyGet(this, "MLFlashMode"); },
        set: function (value) { core.cordovaPropertySet(this, "MLFlashMode", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBody.prototype, "MLLensType", {
        get: function () { return core.cordovaPropertyGet(this, "MLLensType"); },
        set: function (value) { core.cordovaPropertySet(this, "MLLensType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBody.prototype, "MLAnalyzerName", {
        get: function () { return core.cordovaPropertyGet(this, "MLAnalyzerName"); },
        set: function (value) { core.cordovaPropertySet(this, "MLAnalyzerName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBody.prototype, "MLFrame", {
        get: function () { return core.cordovaPropertyGet(this, "MLFrame"); },
        set: function (value) { core.cordovaPropertySet(this, "MLFrame", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBody.prototype, "MLFaceConfigs", {
        get: function () { return core.cordovaPropertyGet(this, "MLFaceConfigs"); },
        set: function (value) { core.cordovaPropertySet(this, "MLFaceConfigs", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBody.prototype, "MLLivenessConfig", {
        get: function () { return core.cordovaPropertyGet(this, "MLLivenessConfig"); },
        set: function (value) { core.cordovaPropertySet(this, "MLLivenessConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBody.prototype, "syncType", {
        get: function () { return core.cordovaPropertyGet(this, "syncType"); },
        set: function (value) { core.cordovaPropertySet(this, "syncType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBody.prototype, "Events", {
        get: function () { return core.cordovaPropertyGet(this, "Events"); },
        set: function (value) { core.cordovaPropertySet(this, "Events", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLBody.prototype, "Options", {
        get: function () { return core.cordovaPropertyGet(this, "Options"); },
        set: function (value) { core.cordovaPropertySet(this, "Options", value); },
        enumerable: false,
        configurable: true
    });
    HMSMLBody.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSMLBody, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HMSMLBody.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSMLBody });
    HMSMLBody.pluginName = "HMSMLBody";
    HMSMLBody.plugin = "cordova-plugin-hms-mlbody";
    HMSMLBody.pluginRef = "HMSMLBody";
    HMSMLBody.platforms = ["Android"];
    HMSMLBody = tslib.__decorate([], HMSMLBody);
    return HMSMLBody;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSMLBody, decorators: [{
            type: i0.Injectable
        }], propDecorators: { MLFaceSetting: [], HandkeyPointConfig: [], Colors: [], RectStyle: [], MLSkeletonConfig: [], MLFlashMode: [], MLLensType: [], MLAnalyzerName: [], MLFrame: [], MLFaceConfigs: [], MLLivenessConfig: [], syncType: [], Events: [], Options: [], stillGestureAnalyser: [], stopStillGestureAnalyser: [], getGestureAnalyserSetting: [], 
        /**
         * The face detection service can detect the face contour, recognize facial features, and determine facial expressions for a person.
         * @param  {faceReq} faceReq Represents the parameter required for face detection.
         * @returns Promise<MLFace>
         */
        stillFaceAnalyser: [], stillFaceAnalyserInfo: [], setFaceDetected: [], getFaceVerificationAnalyserSetting: [], 
        /**
         * @param  {faceVerificationReq} faceVerificationReq Represents the parameter required for face detection.
         * @returns Promise<MLFaceVerificationResult>
         */
        stillFaceVerificationAnalyser: [], 
        /**
         * This method stop face recognition service.
         * @returns Promise<any>
         */
        stopStillFaceVerificationAnalyser: [], 
        /**
         * This method stop face recognition service.
         * @returns Promise<any>
         */
        stopStillFaceAnalyser: [], 
        /**
       The skeleton detection service detects and locates key points of the human body, such as the top of the head, neck, shoulder, elbow, wrist, hip, knee, and ankle.
       * @param  {stillSkeletonReq |stillSkeletonSimilarityReq} stillSkeletonReq Represents the parameter required for still skeleton detection.
       * @returns Promise<MLSkeleton>
       */
        stillSkeletonAnalyser: [], 
        /**
         * The liveness detection service supports silent liveness detection and captures faces in real time. It can determine whether a face is of a real user or is a face attack
         * (for example, face recapture image, face recapture video, or face mask) without requiring the user to follow specific instructions.
         * @param  {livenessDetectionReq} livenessDetectionReq Represents the parameter required.
         * @returns Promise<MLLivenessCaptureResult>
         */
        liveLivenessAnalyser: [], 
        /**
         * This service can detects 21 hand keypoints (including fingertips, knuckles, and wrists) and return positions of the keypoints.
         * @param  {stillHandKeypointReq } stillHandKeypointReq Represents the parameter required for still handkey analyser.
         * @returns Promise<MLHandKeypoints>
         */
        stillHandkeyAnalyser: [], 
        /**
         * This method stop hand analyzer service.
         * @returns Promise<any>
         */
        stopStillHandKeyAnalyser: [], 
        /**
         * This method returns face analyzer settings.
         * @returns Promise<any>
         */
        getFaceAnalyserSetting: [], 
        /**
         * This method  returns hand analyzer settings.
         * @returns Promise<any>
         */
        getHandKeyAnalyserSetting: [], 
        /**
         * This method stop skeleton analyzer service.
         * @returns Promise<any>
         */
        stopStillSkeletonAnalyser: [], 
        /**
         * The interactive biometric verification service implements liveness detection in an interactive way. It captures faces in real time and determines
         * whether a face is of a real person or is a presentation attack (for example, a face recapture image, face recapture video, or face mask) by checking
         * whether the specified actions are detected.
         * @returns Promise<MLInteractiveLivenessCaptureResult>
         */
        interactiveLivenessAnalyser: [], 
        /**
         * The interactive biometric verification service implements liveness detection in an interactive way. It captures faces in real time and determines
         * whether a face is of a real person or is a presentation attack (for example, a face recapture image, face recapture video, or face mask) by checking
         * whether the specified actions are detected.
         * @returns Promise<MLInteractiveLivenessCaptureResult>
         */
        customInteractiveLivenessAnalyser: [] } });
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
var liveEngineAnalyser = /** @class */ (function (_super) {
    tslib.__extends(liveEngineAnalyser, _super);
    function liveEngineAnalyser(divId) {
        return _super.call(this, "ACTION_LIVE_ANALYSE", divId) || this;
    }
    return liveEngineAnalyser;
}(MLLive));
exports.MLFlashMode = void 0;
(function (MLFlashMode) {
    MLFlashMode["AUTO"] = "auto";
    MLFlashMode["ON"] = "on";
    MLFlashMode["OFF"] = "off";
})(exports.MLFlashMode || (exports.MLFlashMode = {}));
exports.MLLensType = void 0;
(function (MLLensType) {
    MLLensType[MLLensType["BACK_LENS"] = 0] = "BACK_LENS";
    MLLensType[MLLensType["FRONT_LENS"] = 1] = "FRONT_LENS";
})(exports.MLLensType || (exports.MLLensType = {}));
exports.MLAnalyzerName = void 0;
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
})(exports.MLAnalyzerName || (exports.MLAnalyzerName = {}));
exports.MLFrame = void 0;
(function (MLFrame) {
    MLFrame["getPreviewBitmap"] = "getPreviewBitmap";
    MLFrame["readBitmap"] = "readBitmap";
    MLFrame["rotate"] = "rotate";
})(exports.MLFrame || (exports.MLFrame = {}));
exports.QuadrantTypes = void 0;
(function (QuadrantTypes) {
    QuadrantTypes[QuadrantTypes["SCREEN_FIRST_QUADRANT"] = 0] = "SCREEN_FIRST_QUADRANT";
    QuadrantTypes[QuadrantTypes["SCREEN_SECOND_QUADRANT"] = 1] = "SCREEN_SECOND_QUADRANT";
    QuadrantTypes[QuadrantTypes["SCREEN_THIRD_QUADRANT"] = 2] = "SCREEN_THIRD_QUADRANT";
    QuadrantTypes[QuadrantTypes["SCREEN_FOURTH_QUADRANT"] = 3] = "SCREEN_FOURTH_QUADRANT";
})(exports.QuadrantTypes || (exports.QuadrantTypes = {}));
exports.MLFaceConfigs = void 0;
(function (MLFaceConfigs) {
    MLFaceConfigs[MLFaceConfigs["TYPE_2D_SYNC"] = 0] = "TYPE_2D_SYNC";
    MLFaceConfigs[MLFaceConfigs["TYPE_2D_ASYNC"] = 1] = "TYPE_2D_ASYNC";
    MLFaceConfigs[MLFaceConfigs["TYPE_3D_SYNC"] = 2] = "TYPE_3D_SYNC";
    MLFaceConfigs[MLFaceConfigs["TYPE_3D_ASYNC"] = 3] = "TYPE_3D_ASYNC";
})(exports.MLFaceConfigs || (exports.MLFaceConfigs = {}));
exports.MLFaceSetting = void 0;
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
})(exports.MLFaceSetting || (exports.MLFaceSetting = {}));
exports.syncType = void 0;
(function (syncType) {
    syncType[syncType["SYNC_MODE"] = 0] = "SYNC_MODE";
    syncType[syncType["ASYNC_MODE"] = 1] = "ASYNC_MODE";
})(exports.syncType || (exports.syncType = {}));
exports.GestureTypes = void 0;
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
})(exports.GestureTypes || (exports.GestureTypes = {}));
exports.HandkeyPointConfig = void 0;
(function (HandkeyPointConfig) {
    HandkeyPointConfig[HandkeyPointConfig["TYPE_ALL"] = 0] = "TYPE_ALL";
    HandkeyPointConfig[HandkeyPointConfig["TYPE_KEYPOINT_ONLY"] = 1] = "TYPE_KEYPOINT_ONLY";
    HandkeyPointConfig[HandkeyPointConfig["TYPE_RECT_ONLY"] = 2] = "TYPE_RECT_ONLY";
    HandkeyPointConfig[HandkeyPointConfig["MAX_HANDS_NUM"] = 10] = "MAX_HANDS_NUM";
})(exports.HandkeyPointConfig || (exports.HandkeyPointConfig = {}));
exports.MLLivenessConfig = void 0;
(function (MLLivenessConfig) {
    MLLivenessConfig[MLLivenessConfig["DEFAULT"] = 0] = "DEFAULT";
    MLLivenessConfig[MLLivenessConfig["CUSTOM"] = 1] = "CUSTOM";
})(exports.MLLivenessConfig || (exports.MLLivenessConfig = {}));
exports.MLLivenessCaptureError = void 0;
(function (MLLivenessCaptureError) {
    MLLivenessCaptureError[MLLivenessCaptureError["CAMERA_NO_PERMISSION"] = 11401] = "CAMERA_NO_PERMISSION";
    MLLivenessCaptureError[MLLivenessCaptureError["CAMERA_START_FAILED"] = 11402] = "CAMERA_START_FAILED";
    MLLivenessCaptureError[MLLivenessCaptureError["USER_CANCEL"] = 11403] = "USER_CANCEL";
    MLLivenessCaptureError[MLLivenessCaptureError["DETECT_FACE_TIME_OUT"] = 11404] = "DETECT_FACE_TIME_OUT";
    MLLivenessCaptureError[MLLivenessCaptureError["DETECT_MASK"] = 1] = "DETECT_MASK";
})(exports.MLLivenessCaptureError || (exports.MLLivenessCaptureError = {}));
exports.MLSkeletonConfig = void 0;
(function (MLSkeletonConfig) {
    MLSkeletonConfig[MLSkeletonConfig["SYNC_MODE"] = 0] = "SYNC_MODE";
    MLSkeletonConfig[MLSkeletonConfig["ASYNC_MODE"] = 1] = "ASYNC_MODE";
    MLSkeletonConfig[MLSkeletonConfig["SIMILARITTY_MODE"] = 2] = "SIMILARITTY_MODE";
    MLSkeletonConfig[MLSkeletonConfig["TYPE_YOGA"] = 1] = "TYPE_YOGA";
    MLSkeletonConfig[MLSkeletonConfig["TYPE_NORMAL"] = 0] = "TYPE_NORMAL";
})(exports.MLSkeletonConfig || (exports.MLSkeletonConfig = {}));
exports.Colors = void 0;
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
})(exports.Colors || (exports.Colors = {}));
exports.RectStyle = void 0;
(function (RectStyle) {
    RectStyle[RectStyle["STROKE"] = 1] = "STROKE";
    RectStyle[RectStyle["FILL"] = 2] = "FILL";
    RectStyle[RectStyle["FILL_AND_STROKE"] = 3] = "FILL_AND_STROKE";
})(exports.RectStyle || (exports.RectStyle = {}));
exports.Options = void 0;
(function (Options) {
    Options[Options["DETECT_MASK"] = 1] = "DETECT_MASK";
    Options[Options["DETECT_SUNGLASS"] = 2] = "DETECT_SUNGLASS";
})(exports.Options || (exports.Options = {}));
exports.MLFaceConstant = void 0;
(function (MLFaceConstant) {
    MLFaceConstant[MLFaceConstant["UNANALYZED_POSSIBILITY"] = -1] = "UNANALYZED_POSSIBILITY";
})(exports.MLFaceConstant || (exports.MLFaceConstant = {}));
exports.handkeyPointsTypes = void 0;
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
})(exports.handkeyPointsTypes || (exports.handkeyPointsTypes = {}));
exports.MLJointPoints = void 0;
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
})(exports.MLJointPoints || (exports.MLJointPoints = {}));
exports.Events = void 0;
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
})(exports.Events || (exports.Events = {}));
exports.InteractiveLivenessStateCode = void 0;
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
})(exports.InteractiveLivenessStateCode || (exports.InteractiveLivenessStateCode = {}));
exports.CordovaErrors = void 0;
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
})(exports.CordovaErrors || (exports.CordovaErrors = {}));

exports.HMSMLBody = HMSMLBody;
exports.HMSMLBodyPlugin = HMSMLBodyPlugin;
exports.MLLive = MLLive;
exports.liveEngineAnalyser = liveEngineAnalyser;
