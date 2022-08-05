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
import { Observable } from "rxjs";
var HMSMLKitOriginal = /** @class */ (function (_super) {
    __extends(HMSMLKitOriginal, _super);
    function HMSMLKitOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adjusts the focal length of the camera based on the scaling coefficient (digital zoom).
     * @param  {doZoomReq} doZoomReq Reperesents the necessary parameters.
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.doZoom = function (doZoomReq) { return cordova(this, "doZoom", { "otherPromise": true }, arguments); };
    /**
     * Monitors photographing.
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.photograph = function () { return cordova(this, "photograph", { "otherPromise": true }, arguments); };
    /**
     * Close lens engine.
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.destroy = function () { return cordova(this, "destroy", { "otherPromise": true }, arguments); };
    /**
     * Obtains the size of the preview image of a camera.
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.getDisplayDimension = function () { return cordova(this, "getDisplayDimension", { "otherPromise": true }, arguments); };
    /**
     * Obtains the selected camera type.
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.getLensType = function () { return cordova(this, "getLensType", { "otherPromise": true }, arguments); };
    /**
     * It checks the permissions required to use this Kit.
     * @param  {CheckPermissionReq} permissionListInput Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.hasPermissions = function (permissionListReq) { return cordova(this, "hasPermissions", { "otherPromise": true }, arguments); };
    /**
     * It gets the necessary permissions.
     * @param  {RequestPermissionReq} permissionListInput Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.requestPermissions = function (permissionListInput) { return cordova(this, "requestPermissions", { "otherPromise": true }, arguments); };
    /**
     * It sets Api Key or access token for application.
     * @param  {configReq} params Represents your API_KEY.
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.serviceInitializer = function (params) { return cordova(this, "serviceInitializer", { "otherPromise": true }, arguments); };
    /**
     * This service recognize the image from the picture and return what the picture can be with the percentages. Use ML Libraries.
     * @param  {ownCustomModelReq | downloadModelReq} ownCustomModelReq Represents the parameter required for custom model analyser.
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.customModelAnalyser = function (ownCustomModelReq) { return cordova(this, "customModelAnalyser", { "otherPromise": true }, arguments); };
    /**
     * Obtains Frame.
     * @param  {mlFrameReq} mlFrameReq Represents the parameter required.
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.mlFrame = function (mlFrameReq) { return cordova(this, "mlFrame", { "otherPromise": true }, arguments); };
    /**
     * An app information class used to store basic information about apps with the HMS Core ML SDK integrated and complete the initialization of ML Kit. When using cloud services of the ML Kit, you need to set the apiKey of your app.
     * @param  {appSettingReq} appSettingReq Represents the parameter required.
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.appSetting = function (appSettingReq) { return cordova(this, "appSetting", { "otherPromise": true }, arguments); };
    /**
     * Determines whether to collect statistics on the current app.
     * @param {any} any
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.setStatistic = function (any) { return cordova(this, "setStatistic", { "otherPromise": true }, arguments); };
    /**
     * Determines whether to collect statistics on the current app.
     ** @param {any} any
     *  @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.getStatistic = function (any) { return cordova(this, "getStatistic", { "otherPromise": true }, arguments); };
    /**
     * This service enable logger service.
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    /**
     * This service disable logger service.
     * @returns Promise<any>
     */
    HMSMLKitOriginal.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLFaceSetting", {
        get: function () { return cordovaPropertyGet(this, "MLFaceSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLLocalTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLLocalTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLLocalTextSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "icrVnCaptureType", {
        get: function () { return cordovaPropertyGet(this, "icrVnCaptureType"); },
        set: function (value) { cordovaPropertySet(this, "icrVnCaptureType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLTextConfig", {
        get: function () { return cordovaPropertyGet(this, "MLTextConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLTextConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLRemoteTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteTextSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLImageClassificationConfig", {
        get: function () { return cordovaPropertyGet(this, "MLImageClassificationConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLImageClassificationConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLImageSegmentationSetting", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLImageSegmentationScene", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationScene"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationScene", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLRemoteLandmarkSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteLandmarkSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteLandmarkSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLBcrCaptureConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrCaptureConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrCaptureConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLGcrCaptureUIConfig", {
        get: function () { return cordovaPropertyGet(this, "MLGcrCaptureUIConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLGcrCaptureUIConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLBcrResultConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrResultConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrResultConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "HandkeyPointConfig", {
        get: function () { return cordovaPropertyGet(this, "HandkeyPointConfig"); },
        set: function (value) { cordovaPropertySet(this, "HandkeyPointConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "ImgSuperResolutionConfig", {
        get: function () { return cordovaPropertyGet(this, "ImgSuperResolutionConfig"); },
        set: function (value) { cordovaPropertySet(this, "ImgSuperResolutionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MlObjectAnalyserConfig", {
        get: function () { return cordovaPropertyGet(this, "MlObjectAnalyserConfig"); },
        set: function (value) { cordovaPropertySet(this, "MlObjectAnalyserConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "DownloadStrategyCustom", {
        get: function () { return cordovaPropertyGet(this, "DownloadStrategyCustom"); },
        set: function (value) { cordovaPropertySet(this, "DownloadStrategyCustom", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "FEATURE", {
        get: function () { return cordovaPropertyGet(this, "FEATURE"); },
        set: function (value) { cordovaPropertySet(this, "FEATURE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "LANGUAGE", {
        get: function () { return cordovaPropertyGet(this, "LANGUAGE"); },
        set: function (value) { cordovaPropertySet(this, "LANGUAGE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLTtsConstants", {
        get: function () { return cordovaPropertyGet(this, "MLTtsConstants"); },
        set: function (value) { cordovaPropertySet(this, "MLTtsConstants", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLSkeletonConfig", {
        get: function () { return cordovaPropertyGet(this, "MLSkeletonConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLSkeletonConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLFlashMode", {
        get: function () { return cordovaPropertyGet(this, "MLFlashMode"); },
        set: function (value) { cordovaPropertySet(this, "MLFlashMode", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLLensType", {
        get: function () { return cordovaPropertyGet(this, "MLLensType"); },
        set: function (value) { cordovaPropertySet(this, "MLLensType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLAnalyzerName", {
        get: function () { return cordovaPropertyGet(this, "MLAnalyzerName"); },
        set: function (value) { cordovaPropertySet(this, "MLAnalyzerName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLFrame", {
        get: function () { return cordovaPropertyGet(this, "MLFrame"); },
        set: function (value) { cordovaPropertySet(this, "MLFrame", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLFormRecogitionConfig", {
        get: function () { return cordovaPropertyGet(this, "MLFormRecogitionConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLFormRecogitionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLFaceConfigs", {
        get: function () { return cordovaPropertyGet(this, "MLFaceConfigs"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceConfigs", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLProductConfig", {
        get: function () { return cordovaPropertyGet(this, "MLProductConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLProductConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLLivenessConfig", {
        get: function () { return cordovaPropertyGet(this, "MLLivenessConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLLivenessConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLRttLanguages", {
        get: function () { return cordovaPropertyGet(this, "MLRttLanguages"); },
        set: function (value) { cordovaPropertySet(this, "MLRttLanguages", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "MLRttScenes", {
        get: function () { return cordovaPropertyGet(this, "MLRttScenes"); },
        set: function (value) { cordovaPropertySet(this, "MLRttScenes", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "gcrCaptureType", {
        get: function () { return cordovaPropertyGet(this, "gcrCaptureType"); },
        set: function (value) { cordovaPropertySet(this, "gcrCaptureType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLKitOriginal.prototype, "syncType", {
        get: function () { return cordovaPropertyGet(this, "syncType"); },
        set: function (value) { cordovaPropertySet(this, "syncType", value); },
        enumerable: false,
        configurable: true
    });
    HMSMLKitOriginal.pluginName = "HMSMLKit";
    HMSMLKitOriginal.plugin = "cordova-plugin-hms-ml";
    HMSMLKitOriginal.pluginRef = "HMSMLKit";
    HMSMLKitOriginal.platforms = ["Android"];
    return HMSMLKitOriginal;
}(IonicNativePlugin));
var HMSMLKit = new HMSMLKitOriginal();
export { HMSMLKit };
var HMSFaceBodyProviderOriginal = /** @class */ (function (_super) {
    __extends(HMSFaceBodyProviderOriginal, _super);
    function HMSFaceBodyProviderOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     */
    HMSFaceBodyProviderOriginal.prototype.stillGestureAnalyser = function (stillGestureReq) { return cordova(this, "stillGestureAnalyser", { "otherPromise": true }, arguments); };
    /**
     */
    HMSFaceBodyProviderOriginal.prototype.stopStillGestureAnalyser = function () { return cordova(this, "stopStillGestureAnalyser", { "otherPromise": true }, arguments); };
    /**
     */
    HMSFaceBodyProviderOriginal.prototype.getGestureAnalyserSetting = function () { return cordova(this, "getGestureAnalyserSetting", { "otherPromise": true }, arguments); };
    /**
     * The face detection service can detect the face contour, recognize facial features, and determine facial expressions for a person.
     * @param  {faceReq} faceReq Represents the parameter required for face detection.
     * @returns Promise<StillFaceAnalyser>
     */
    HMSFaceBodyProviderOriginal.prototype.stillFaceAnalyser = function (faceReq) { return cordova(this, "stillFaceAnalyser", { "otherPromise": true }, arguments); };
    /**
     */
    HMSFaceBodyProviderOriginal.prototype.stillFaceAnalyserInfo = function () { return cordova(this, "stillFaceAnalyserInfo", { "otherPromise": true }, arguments); };
    /**
     * @param  {faceVerificationReq} faceVerificationReq Represents the parameter required for face detection.
     * @returns Promise<MLFaceVerificationResult>
     */
    HMSFaceBodyProviderOriginal.prototype.setFaceDetected = function (maxFaceVerificationReq) { return cordova(this, "setFaceDetected", { "otherPromise": true }, arguments); };
    /**
     */
    HMSFaceBodyProviderOriginal.prototype.getFaceVerificationAnalyserSetting = function () { return cordova(this, "getFaceVerificationAnalyserSetting", { "otherPromise": true }, arguments); };
    /**
     * @param  {faceVerificationReq} faceVerificationReq Represents the parameter required for face detection.
     * @returns Promise<MLFaceVerificationResult>
     */
    HMSFaceBodyProviderOriginal.prototype.stillFaceVerificationAnalyser = function (faceVerificationReq) { return cordova(this, "stillFaceVerificationAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method stop face recognition service.
     * @returns Promise<any>
     */
    HMSFaceBodyProviderOriginal.prototype.stopStillFaceVerificationAnalyser = function () { return cordova(this, "stopStillFaceVerificationAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method gives the information of the face recognition service.
     * @returns Promise<any>
     */
    HMSFaceBodyProviderOriginal.prototype.stilFaceAnalyserInfo = function () { return cordova(this, "stilFaceAnalyserInfo", { "otherPromise": true }, arguments); };
    /**
     * This method stop face recognition service.
     * @returns Promise<any>
     */
    HMSFaceBodyProviderOriginal.prototype.stopStillFaceAnalyser = function () { return cordova(this, "stopStillFaceAnalyser", { "otherPromise": true }, arguments); };
    /**
   The skeleton detection service detects and locates key points of the human body, such as the top of the head, neck, shoulder, elbow, wrist, hip, knee, and ankle.
   * @param  {stillSkeletonReq |stillSkeletonSimilarityReq} stillSkeletonReq Represents the parameter required for still skeleton detection.
   * @returns Promise<StillSkeletonAnalyser>
   */
    HMSFaceBodyProviderOriginal.prototype.stillSkeletonAnalyser = function (stillSkeletonReq) { return cordova(this, "stillSkeletonAnalyser", { "otherPromise": true }, arguments); };
    /**
     * The liveness detection service supports silent liveness detection and captures faces in real time. It can determine whether a face is of a real user or is a face attack
     * (for example, face recapture image, face recapture video, or face mask) without requiring the user to follow specific instructions.
     * @param  {livenessDetectionReq} livenessDetectionReq Represents the parameter required.
     * @returns Promise<LiveLivenessAnalyser>
     */
    HMSFaceBodyProviderOriginal.prototype.liveLivenessAnalyser = function (livenessDetectionReq) { return cordova(this, "liveLivenessAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This service can detects 21 hand keypoints (including fingertips, knuckles, and wrists) and return positions of the keypoints.
     * @param  {stillHandKeypointReq } stillHandKeypointReq Represents the parameter required for still handkey analyser.
     * @returns Promise<StillHandKeyAnalyser>
     */
    HMSFaceBodyProviderOriginal.prototype.stillHandkeyAnalyser = function (stillHandKeypointReq) { return cordova(this, "stillHandkeyAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method stop hand analyzer service.
     * @returns Promise<any>
     */
    HMSFaceBodyProviderOriginal.prototype.stopStillHandKeyAnalyser = function () { return cordova(this, "stopStillHandKeyAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method returns face analyzer settings.
     * @returns Promise<any>
     */
    HMSFaceBodyProviderOriginal.prototype.getFaceAnalyserSetting = function () { return cordova(this, "getFaceAnalyserSetting", { "otherPromise": true }, arguments); };
    /**
     * This method  returns hand analyzer settings.
     * @returns Promise<any>
     */
    HMSFaceBodyProviderOriginal.prototype.getHandKeyAnalyserSetting = function () { return cordova(this, "getHandKeyAnalyserSetting", { "otherPromise": true }, arguments); };
    /**
     * This method stop skeleton analyzer service.
     * @returns Promise<any>
     */
    HMSFaceBodyProviderOriginal.prototype.stopStillSkeletonAnalyser = function () { return cordova(this, "stopStillSkeletonAnalyser", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLFaceSetting", {
        get: function () { return cordovaPropertyGet(this, "MLFaceSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLLocalTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLLocalTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLLocalTextSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLTextConfig", {
        get: function () { return cordovaPropertyGet(this, "MLTextConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLTextConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLRemoteTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteTextSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLImageClassificationConfig", {
        get: function () { return cordovaPropertyGet(this, "MLImageClassificationConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLImageClassificationConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLImageSegmentationSetting", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLImageSegmentationScene", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationScene"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationScene", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLRemoteLandmarkSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteLandmarkSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteLandmarkSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLBcrCaptureConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrCaptureConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrCaptureConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLGcrCaptureUIConfig", {
        get: function () { return cordovaPropertyGet(this, "MLGcrCaptureUIConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLGcrCaptureUIConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLBcrResultConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrResultConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrResultConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "HandkeyPointConfig", {
        get: function () { return cordovaPropertyGet(this, "HandkeyPointConfig"); },
        set: function (value) { cordovaPropertySet(this, "HandkeyPointConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "ImgSuperResolutionConfig", {
        get: function () { return cordovaPropertyGet(this, "ImgSuperResolutionConfig"); },
        set: function (value) { cordovaPropertySet(this, "ImgSuperResolutionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MlObjectAnalyserConfig", {
        get: function () { return cordovaPropertyGet(this, "MlObjectAnalyserConfig"); },
        set: function (value) { cordovaPropertySet(this, "MlObjectAnalyserConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "DownloadStrategyCustom", {
        get: function () { return cordovaPropertyGet(this, "DownloadStrategyCustom"); },
        set: function (value) { cordovaPropertySet(this, "DownloadStrategyCustom", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "FEATURE", {
        get: function () { return cordovaPropertyGet(this, "FEATURE"); },
        set: function (value) { cordovaPropertySet(this, "FEATURE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "LANGUAGE", {
        get: function () { return cordovaPropertyGet(this, "LANGUAGE"); },
        set: function (value) { cordovaPropertySet(this, "LANGUAGE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLTtsConstants", {
        get: function () { return cordovaPropertyGet(this, "MLTtsConstants"); },
        set: function (value) { cordovaPropertySet(this, "MLTtsConstants", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLSkeletonConfig", {
        get: function () { return cordovaPropertyGet(this, "MLSkeletonConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLSkeletonConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLFlashMode", {
        get: function () { return cordovaPropertyGet(this, "MLFlashMode"); },
        set: function (value) { cordovaPropertySet(this, "MLFlashMode", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLLensType", {
        get: function () { return cordovaPropertyGet(this, "MLLensType"); },
        set: function (value) { cordovaPropertySet(this, "MLLensType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLAnalyzerName", {
        get: function () { return cordovaPropertyGet(this, "MLAnalyzerName"); },
        set: function (value) { cordovaPropertySet(this, "MLAnalyzerName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLFrame", {
        get: function () { return cordovaPropertyGet(this, "MLFrame"); },
        set: function (value) { cordovaPropertySet(this, "MLFrame", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLFormRecogitionConfig", {
        get: function () { return cordovaPropertyGet(this, "MLFormRecogitionConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLFormRecogitionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLFaceConfigs", {
        get: function () { return cordovaPropertyGet(this, "MLFaceConfigs"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceConfigs", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLProductConfig", {
        get: function () { return cordovaPropertyGet(this, "MLProductConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLProductConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLLivenessConfig", {
        get: function () { return cordovaPropertyGet(this, "MLLivenessConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLLivenessConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLRttLanguages", {
        get: function () { return cordovaPropertyGet(this, "MLRttLanguages"); },
        set: function (value) { cordovaPropertySet(this, "MLRttLanguages", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "MLRttScenes", {
        get: function () { return cordovaPropertyGet(this, "MLRttScenes"); },
        set: function (value) { cordovaPropertySet(this, "MLRttScenes", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "gcrCaptureType", {
        get: function () { return cordovaPropertyGet(this, "gcrCaptureType"); },
        set: function (value) { cordovaPropertySet(this, "gcrCaptureType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSFaceBodyProviderOriginal.prototype, "syncType", {
        get: function () { return cordovaPropertyGet(this, "syncType"); },
        set: function (value) { cordovaPropertySet(this, "syncType", value); },
        enumerable: false,
        configurable: true
    });
    return HMSFaceBodyProviderOriginal;
}(IonicNativePlugin));
var HMSFaceBodyProvider = new HMSFaceBodyProviderOriginal();
export { HMSFaceBodyProvider };
var HMSImageServiceProviderOriginal = /** @class */ (function (_super) {
    __extends(HMSImageServiceProviderOriginal, _super);
    function HMSImageServiceProviderOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This method represents the image classification SDK.
     * @param  {localImageClassificationReq|remoteImageClassificationReq} imageClassificationInput Represents the parameter required for classify objects.
     * @returns Promise<ImageClassificationAnalyser>
     */
    HMSImageServiceProviderOriginal.prototype.imageClassificationAnalyser = function (imageClassificationInput) { return cordova(this, "imageClassificationAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method stop image classification analyser.
     * @returns Promise<string>
     */
    HMSImageServiceProviderOriginal.prototype.stopImageClassificationAnalyser = function () { return cordova(this, "stopImageClassificationAnalyser", { "otherPromise": true }, arguments); };
    /**
     * The image segmentation service segments same elements (such as human body, plant, and sky) from an image. The elements supported include human body, sky, plant, food and others.
     * @param  {imgSegmentationReq} imgSegmentationReq Represents the parameter required for image segmentation.
     * @returns Promise<SegmentationAnalyser>
     */
    HMSImageServiceProviderOriginal.prototype.imgSegmentation = function (imgSegmentationReq) { return cordova(this, "imgSegmentation", { "otherPromise": true }, arguments); };
    /**
     * This method stop image segmentation service.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.stopImgSegmentation = function () { return cordova(this, "stopImgSegmentation", { "otherPromise": true }, arguments); };
    /**
     * The landmark recognition service enables you to obtain the landmark name, landmark longitude and latitude, and confidence of the input image.
     * @param  {imgLandMarkReq} imgLandMarkReq Represents the parameter required for image landmark analyser.
     * @returns Promise<ImageLandmarkAnalyser>
     */
    HMSImageServiceProviderOriginal.prototype.imgLandMarkAnalyser = function (imgLandMarkReq) { return cordova(this, "imgLandMarkAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method stop image landmark analyser service.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.imgLandMarkAnalyserStop = function () { return cordova(this, "imgLandMarkAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * The object detection service can detect and track multiple objects in an image.
     * @param  {objectReq} objectReq Represents the parameter required for object detection.
     * @returns Promise<ImageObjectAnalyser>
     */
    HMSImageServiceProviderOriginal.prototype.objectAnalyser = function (objectReq) { return cordova(this, "objectAnalyser", { "otherPromise": true }, arguments); };
    /**
     * The scene detection service can classify the scenario content of images and add labels, such as outdoor scenery, indoor places, and buildings, to help understand the image content.
     *   @param  {stillSceneReq} stillSceneReq Represents the parameter required for Scene analyser.
     *  @returns Promise <any>
     */
    HMSImageServiceProviderOriginal.prototype.stillSceneAnalyser = function (stillSceneReq) { return cordova(this, "stillSceneAnalyser", { "otherPromise": true }, arguments); };
    /**
   This service can automatically identify the location of a document in an image and adjust the shooting angle to the angle facing the document, even if the document is tilted.
   * @param  {documentSkewCorrectionReq} documentSkewCorrectionReq Represents the parameter required for document skew correction.
   * @returns Promise<DocumentSkewAnalyser>
   */
    HMSImageServiceProviderOriginal.prototype.documentSkewCorrectionAnalyser = function (documentSkewCorrectionReq) { return cordova(this, "documentSkewCorrectionAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This service can zoom in an image that contains text and significantly improve the definition of text in the image.
     * @param  {textImageSuperResolutionReq} textImageSuperResolutionReq Represents the parameter required for Text Image Super Resolution.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.textImageSuperResolution = function (textImageSuperResolutionReq) { return cordova(this, "textImageSuperResolution", { "otherPromise": true }, arguments); };
    /**
     * This service provides the 1x super-resolution capabilities. 1x super-resolution removes the compression noise.
     * @param  {imageSuperResolutionReq} imageSuperResolutionReq Represents the parameter required for Image Super Resolution.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.imageSuperResolution = function (imageSuperResolutionReq) { return cordova(this, "imageSuperResolution", { "otherPromise": true }, arguments); };
    /**
     * Represents the image-based product detection API of HUAWEI ML Kit.
     * @param  {productReq} productReq Represents the parameter required.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.productVisionAnalyser = function (productReq) { return cordova(this, "productVisionAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method stop object analyser service.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.objectAnalyserStop = function () { return cordova(this, "objectAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * This method stop product analyser service.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.productAnalyserStop = function () { return cordova(this, "productAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * This method stop document skew analyser service.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.docSkewAnalyserStop = function () { return cordova(this, "docSkewAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * This method stop TISR analyser service.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.TISRAnalyserStop = function () { return cordova(this, "TISRAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * This method stop ISR analyser service.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.ISRAnalyserStop = function () { return cordova(this, "ISRAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * This method stop scene analyser service.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.stillSceneAnalyserStop = function () { return cordova(this, "stillSceneAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * This method returns image classification settings.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.getImageClassificationAnalyserSetting = function () { return cordova(this, "getImageClassificationAnalyserSetting", { "otherPromise": true }, arguments); };
    /**
     *  This method returns ISR settings.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.getISRSetting = function () { return cordova(this, "getISRSetting", { "otherPromise": true }, arguments); };
    /**
     *  This method returns segmentation settings.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.getSegmentationSetting = function () { return cordova(this, "getSegmentationSetting", { "otherPromise": true }, arguments); };
    /**
     *  This method returns landmark settings.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.getLandmarkSetting = function () { return cordova(this, "getLandmarkSetting", { "otherPromise": true }, arguments); };
    /**
     *  This method returns object settings.
     * @returns Promise<any>
     */
    HMSImageServiceProviderOriginal.prototype.getObjectSetting = function () { return cordova(this, "getObjectSetting", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLFaceSetting", {
        get: function () { return cordovaPropertyGet(this, "MLFaceSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "gcrCaptureType", {
        get: function () { return cordovaPropertyGet(this, "gcrCaptureType"); },
        set: function (value) { cordovaPropertySet(this, "gcrCaptureType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "syncType", {
        get: function () { return cordovaPropertyGet(this, "syncType"); },
        set: function (value) { cordovaPropertySet(this, "syncType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLLocalTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLLocalTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLLocalTextSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLTextConfig", {
        get: function () { return cordovaPropertyGet(this, "MLTextConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLTextConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLRemoteTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteTextSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLImageClassificationConfig", {
        get: function () { return cordovaPropertyGet(this, "MLImageClassificationConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLImageClassificationConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLImageSegmentationSetting", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLImageSegmentationScene", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationScene"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationScene", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLRemoteLandmarkSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteLandmarkSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteLandmarkSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLBcrCaptureConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrCaptureConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrCaptureConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLGcrCaptureUIConfig", {
        get: function () { return cordovaPropertyGet(this, "MLGcrCaptureUIConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLGcrCaptureUIConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLBcrResultConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrResultConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrResultConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "HandkeyPointConfig", {
        get: function () { return cordovaPropertyGet(this, "HandkeyPointConfig"); },
        set: function (value) { cordovaPropertySet(this, "HandkeyPointConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "ImgSuperResolutionConfig", {
        get: function () { return cordovaPropertyGet(this, "ImgSuperResolutionConfig"); },
        set: function (value) { cordovaPropertySet(this, "ImgSuperResolutionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MlObjectAnalyserConfig", {
        get: function () { return cordovaPropertyGet(this, "MlObjectAnalyserConfig"); },
        set: function (value) { cordovaPropertySet(this, "MlObjectAnalyserConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "DownloadStrategyCustom", {
        get: function () { return cordovaPropertyGet(this, "DownloadStrategyCustom"); },
        set: function (value) { cordovaPropertySet(this, "DownloadStrategyCustom", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "FEATURE", {
        get: function () { return cordovaPropertyGet(this, "FEATURE"); },
        set: function (value) { cordovaPropertySet(this, "FEATURE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "LANGUAGE", {
        get: function () { return cordovaPropertyGet(this, "LANGUAGE"); },
        set: function (value) { cordovaPropertySet(this, "LANGUAGE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLTtsConstants", {
        get: function () { return cordovaPropertyGet(this, "MLTtsConstants"); },
        set: function (value) { cordovaPropertySet(this, "MLTtsConstants", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLSkeletonConfig", {
        get: function () { return cordovaPropertyGet(this, "MLSkeletonConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLSkeletonConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLFlashMode", {
        get: function () { return cordovaPropertyGet(this, "MLFlashMode"); },
        set: function (value) { cordovaPropertySet(this, "MLFlashMode", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLLensType", {
        get: function () { return cordovaPropertyGet(this, "MLLensType"); },
        set: function (value) { cordovaPropertySet(this, "MLLensType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLAnalyzerName", {
        get: function () { return cordovaPropertyGet(this, "MLAnalyzerName"); },
        set: function (value) { cordovaPropertySet(this, "MLAnalyzerName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLFrame", {
        get: function () { return cordovaPropertyGet(this, "MLFrame"); },
        set: function (value) { cordovaPropertySet(this, "MLFrame", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLFormRecogitionConfig", {
        get: function () { return cordovaPropertyGet(this, "MLFormRecogitionConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLFormRecogitionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLFaceConfigs", {
        get: function () { return cordovaPropertyGet(this, "MLFaceConfigs"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceConfigs", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLProductConfig", {
        get: function () { return cordovaPropertyGet(this, "MLProductConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLProductConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLLivenessConfig", {
        get: function () { return cordovaPropertyGet(this, "MLLivenessConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLLivenessConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLRttLanguages", {
        get: function () { return cordovaPropertyGet(this, "MLRttLanguages"); },
        set: function (value) { cordovaPropertySet(this, "MLRttLanguages", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSImageServiceProviderOriginal.prototype, "MLRttScenes", {
        get: function () { return cordovaPropertyGet(this, "MLRttScenes"); },
        set: function (value) { cordovaPropertySet(this, "MLRttScenes", value); },
        enumerable: false,
        configurable: true
    });
    return HMSImageServiceProviderOriginal;
}(IonicNativePlugin));
var HMSImageServiceProvider = new HMSImageServiceProviderOriginal();
export { HMSImageServiceProvider };
var HMSLanguageServiceProviderOriginal = /** @class */ (function (_super) {
    __extends(HMSLanguageServiceProviderOriginal, _super);
    function HMSLanguageServiceProviderOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result.
     * @param  {textEmbeddingDicInfoReq} textEmbeddingDicInfoReq Represents the parameter required for Text Embedding.
     * @returns Promise<any>
     */
    HMSLanguageServiceProviderOriginal.prototype.textEmbeddingDictionaryInfo = function (textEmbeddingDicInfoReq) { return cordova(this, "textEmbeddingDictionaryInfo", { "otherPromise": true }, arguments); };
    /**
     * Asynchronously queries word vectors in batches. (The number of words ranges from 1 to 500.)
     * @param  {textEmbeddingWordBatchReq} textEmbeddingWordBatchReq Represents the parameter required for Text Embedding.
     * @returns Promise<any>
     */
    HMSLanguageServiceProviderOriginal.prototype.textEmbeddingWordBatchVector = function (textEmbeddingWordBatchReq) { return cordova(this, "textEmbeddingWordBatchVector", { "otherPromise": true }, arguments); };
    /**
     * The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result.
     * @param  {textEmbeddingWordtoVectorReq} textEmbeddingWordtoVectorReq Represents the parameter required for Text Embedding.
     * @returns Promise<any>
     */
    HMSLanguageServiceProviderOriginal.prototype.textEmbeddingWordtoVector = function (textEmbeddingWordtoVectorReq) { return cordova(this, "textEmbeddingWordtoVector", { "otherPromise": true }, arguments); };
    /**
     * The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result.
     * @param  {textEmbeddingSentencetoVectorReq} textEmbeddingSentencetoVectorReq Represents the parameter required for Text Embedding.
     * @returns Promise<any>
     */
    HMSLanguageServiceProviderOriginal.prototype.textEmbeddingSentencetoVector = function (textEmbeddingSentencetoVectorReq) { return cordova(this, "textEmbeddingSentencetoVector", { "otherPromise": true }, arguments); };
    /**
     * The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result.
     * @param  {textEmbeddingWordSimilarityReq} textEmbeddingWordSimilarityReq Represents the parameter required for Text Embedding.
     * @returns Promise<any>
     */
    HMSLanguageServiceProviderOriginal.prototype.textEmbeddingWordSimilarty = function (textEmbeddingWordSimilarityReq) { return cordova(this, "textEmbeddingWordSimilarty", { "otherPromise": true }, arguments); };
    /**
     * The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result.
     * @param  {textEmbeddingSentenceSimilarityReq} textEmbeddingSentenceSimilarityReq Represents the parameter required for Text Embedding.
     * @returns Promise<any>
     */
    HMSLanguageServiceProviderOriginal.prototype.textEmbeddingSentenceSimilarty = function (textEmbeddingSentenceSimilarityReq) { return cordova(this, "textEmbeddingSentenceSimilarty", { "otherPromise": true }, arguments); };
    /**
     * The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result.
     * @param  {textEmbeddingSimilarWordsReq} textEmbeddingSimilarWordsReq Represents the parameter required for Text Embedding.
     * @returns Promise<any>
     */
    HMSLanguageServiceProviderOriginal.prototype.textEmbeddingSimilarWords = function (textEmbeddingSimilarWordsReq) { return cordova(this, "textEmbeddingSimilarWords", { "otherPromise": true }, arguments); };
    /**
     * This method returns textembedding settings.
     * @returns Promise<any>
     */
    HMSLanguageServiceProviderOriginal.prototype.getTextEmbeddingSetting = function () { return cordova(this, "getTextEmbeddingSetting", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLFaceSetting", {
        get: function () { return cordovaPropertyGet(this, "MLFaceSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "gcrCaptureType", {
        get: function () { return cordovaPropertyGet(this, "gcrCaptureType"); },
        set: function (value) { cordovaPropertySet(this, "gcrCaptureType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "syncType", {
        get: function () { return cordovaPropertyGet(this, "syncType"); },
        set: function (value) { cordovaPropertySet(this, "syncType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLLocalTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLLocalTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLLocalTextSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLTextConfig", {
        get: function () { return cordovaPropertyGet(this, "MLTextConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLTextConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLRemoteTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteTextSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLImageClassificationConfig", {
        get: function () { return cordovaPropertyGet(this, "MLImageClassificationConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLImageClassificationConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLImageSegmentationSetting", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLImageSegmentationScene", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationScene"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationScene", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLRemoteLandmarkSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteLandmarkSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteLandmarkSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLBcrCaptureConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrCaptureConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrCaptureConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLGcrCaptureUIConfig", {
        get: function () { return cordovaPropertyGet(this, "MLGcrCaptureUIConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLGcrCaptureUIConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLBcrResultConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrResultConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrResultConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "HandkeyPointConfig", {
        get: function () { return cordovaPropertyGet(this, "HandkeyPointConfig"); },
        set: function (value) { cordovaPropertySet(this, "HandkeyPointConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "ImgSuperResolutionConfig", {
        get: function () { return cordovaPropertyGet(this, "ImgSuperResolutionConfig"); },
        set: function (value) { cordovaPropertySet(this, "ImgSuperResolutionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MlObjectAnalyserConfig", {
        get: function () { return cordovaPropertyGet(this, "MlObjectAnalyserConfig"); },
        set: function (value) { cordovaPropertySet(this, "MlObjectAnalyserConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "DownloadStrategyCustom", {
        get: function () { return cordovaPropertyGet(this, "DownloadStrategyCustom"); },
        set: function (value) { cordovaPropertySet(this, "DownloadStrategyCustom", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "FEATURE", {
        get: function () { return cordovaPropertyGet(this, "FEATURE"); },
        set: function (value) { cordovaPropertySet(this, "FEATURE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "LANGUAGE", {
        get: function () { return cordovaPropertyGet(this, "LANGUAGE"); },
        set: function (value) { cordovaPropertySet(this, "LANGUAGE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLTtsConstants", {
        get: function () { return cordovaPropertyGet(this, "MLTtsConstants"); },
        set: function (value) { cordovaPropertySet(this, "MLTtsConstants", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLSkeletonConfig", {
        get: function () { return cordovaPropertyGet(this, "MLSkeletonConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLSkeletonConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLFlashMode", {
        get: function () { return cordovaPropertyGet(this, "MLFlashMode"); },
        set: function (value) { cordovaPropertySet(this, "MLFlashMode", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLLensType", {
        get: function () { return cordovaPropertyGet(this, "MLLensType"); },
        set: function (value) { cordovaPropertySet(this, "MLLensType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLAnalyzerName", {
        get: function () { return cordovaPropertyGet(this, "MLAnalyzerName"); },
        set: function (value) { cordovaPropertySet(this, "MLAnalyzerName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLFrame", {
        get: function () { return cordovaPropertyGet(this, "MLFrame"); },
        set: function (value) { cordovaPropertySet(this, "MLFrame", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLFormRecogitionConfig", {
        get: function () { return cordovaPropertyGet(this, "MLFormRecogitionConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLFormRecogitionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLFaceConfigs", {
        get: function () { return cordovaPropertyGet(this, "MLFaceConfigs"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceConfigs", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLProductConfig", {
        get: function () { return cordovaPropertyGet(this, "MLProductConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLProductConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLLivenessConfig", {
        get: function () { return cordovaPropertyGet(this, "MLLivenessConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLLivenessConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLRttLanguages", {
        get: function () { return cordovaPropertyGet(this, "MLRttLanguages"); },
        set: function (value) { cordovaPropertySet(this, "MLRttLanguages", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSLanguageServiceProviderOriginal.prototype, "MLRttScenes", {
        get: function () { return cordovaPropertyGet(this, "MLRttScenes"); },
        set: function (value) { cordovaPropertySet(this, "MLRttScenes", value); },
        enumerable: false,
        configurable: true
    });
    return HMSLanguageServiceProviderOriginal;
}(IonicNativePlugin));
var HMSLanguageServiceProvider = new HMSLanguageServiceProviderOriginal();
export { HMSLanguageServiceProvider };
var HMSTextServiceProviderOriginal = /** @class */ (function (_super) {
    __extends(HMSTextServiceProviderOriginal, _super);
    function HMSTextServiceProviderOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This method start the Text analyzer.
     * @param  {localImageTextReq|remoteImageTextReq} ImageTextAnalyserInput Reperesents the necessary parameters to convert images to text format.
     * @returns Promise <TextAnalyser>
     */
    HMSTextServiceProviderOriginal.prototype.imageTextAnalyser = function (ImageTextAnalyserInput) { return cordova(this, "imageTextAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method stop the Text analyzer.
     * @returns Promise<any>
     */
    HMSTextServiceProviderOriginal.prototype.stopTextAnalyser = function () { return cordova(this, "stopTextAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method gives Text Analyser information.
     * @returns Promise<any>
     */
    HMSTextServiceProviderOriginal.prototype.getTextAnalyserInfo = function () { return cordova(this, "getTextAnalyserInfo", { "otherPromise": true }, arguments); };
    /**
     * This method provides a document recognition component that recognizes text from images of documents.
     * @param  {documentImageAnalyserReq} documentImageAnalyserReq Reperesents the necessary parameter to convert document images to text format.
     * @returns Promise<DocumentAnalyser>
     */
    HMSTextServiceProviderOriginal.prototype.documentImageAnalyser = function (documentImageAnalyserReq) { return cordova(this, "documentImageAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method stop the Document analyzer.
     * @returns Promise<any>
     */
    HMSTextServiceProviderOriginal.prototype.stopDocumentImageAnalyser = function () { return cordova(this, "stopDocumentImageAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method close the Document analyzer.
     * @returns Promise<any>
     */
    HMSTextServiceProviderOriginal.prototype.closeDocumentImageAnalyser = function () { return cordova(this, "closeDocumentImageAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method returns the Document analyzer setting.
     * @returns Promise<any>
     */
    HMSTextServiceProviderOriginal.prototype.getDocumentImageAnalyserSetting = function () { return cordova(this, "getDocumentImageAnalyserSetting", { "otherPromise": true }, arguments); };
    /**
     * This method returns the Image analyzer setting.
     * @returns Promise<any>
     */
    HMSTextServiceProviderOriginal.prototype.getTextAnalyserSetting = function () { return cordova(this, "getTextAnalyserSetting", { "otherPromise": true }, arguments); };
    /**
     * This method returns the GCR setting.
     * @returns Promise<any>
     */
    HMSTextServiceProviderOriginal.prototype.getGCRSetting = function () { return cordova(this, "getGCRSetting", { "otherPromise": true }, arguments); };
    /**
     * This method stop the Form Recognition Analyzer.
     * @returns Promise<any>
     */
    HMSTextServiceProviderOriginal.prototype.stopFormRecognitionAnalyser = function () { return cordova(this, "stopFormRecognitionAnalyser", { "otherPromise": true }, arguments); };
    /**
     * The bank card recognition service recognizes bank cards in camera streams within angle offset of 15 degrees and extracts key information such as card number and validity period.
     * @param  {bankCardSDKDetectorReq|bankCardPluginDetectorReq} bankCardDetecterInput Represents the parameter required for bank card recognition.
     * @returns Promise<BankCardAnalyser> | Promise<BankCardAnalyser>
     */
    HMSTextServiceProviderOriginal.prototype.bankCardDetector = function (bankCardDetecterInput) {
        return;
    };
    /**
     * This method stop bankcard recognition service.
     * @returns Promise<any>
     */
    HMSTextServiceProviderOriginal.prototype.stopBankCardDetector = function () { return cordova(this, "stopBankCardDetector", { "otherPromise": true }, arguments); };
    HMSTextServiceProviderOriginal.prototype.setResultTypeBcr = function (mLBcrCaptureConfig) { return cordova(this, "setResultTypeBcr", { "otherPromise": true }, arguments); };
    /**

   */
    HMSTextServiceProviderOriginal.prototype.setRecModeBcr = function (mLBcrCaptureConfig) { return cordova(this, "setRecModeBcr", { "otherPromise": true }, arguments); };
    /**
     * This method returns the BCR setting.
     * @returns Promise<any>
     */
    HMSTextServiceProviderOriginal.prototype.getBankCardDetectorSetting = function () { return cordova(this, "getBankCardDetectorSetting", { "otherPromise": true }, arguments); };
    /**
     * The general card recognition service provides a universal development framework based on the text recognition technology.
     * @param  {generalCardDetectorReq} generalCardDetectorReq Represents the parameter required for general card recognition plug-in.
     * @returns Promise<GeneralCardAnalyser>
     */
    HMSTextServiceProviderOriginal.prototype.generalCardDetector = function (generalCardDetectorReq) { return cordova(this, "generalCardDetector", { "otherPromise": true }, arguments); };
    /**
     * The general Vietnam id card  recognition service provides a universal development framework based on the text recognition technology.
     * @param  {icrVnDetectorReq} icrVnDetectorReq Represents the parameter required for general card recognition plug-in.
     * @returns Promise<MLVnIcrCaptureResult>
     */
    HMSTextServiceProviderOriginal.prototype.icrVnCardDetector = function (icrVnDetectorReq) { return cordova(this, "icrVnCardDetector", { "otherPromise": true }, arguments); };
    /**
     * The form recognition service uses AI technologies to recognize and return form structure information (including rows, columns, and coordinates of cells) and form text in Chinese and English (including punctuation) from input images.
     * @param  {formRecognizerAnalyserReq} formRecognizerAnalyserReq Represents the parameter required for general card recognition plug-in.
     * @returns Promise<GeneralCardAnalyser>
     */
    HMSTextServiceProviderOriginal.prototype.formRecognitionAnalyser = function (formRecognizerAnalyserReq) { return cordova(this, "formRecognitionAnalyser", { "otherPromise": true }, arguments); };
    /**

   */
    HMSTextServiceProviderOriginal.prototype.icrLocalAnalyser = function (localAnalyserReq) { return cordova(this, "icrLocalAnalyser", { "otherPromise": true }, arguments); };
    /**

   */
    HMSTextServiceProviderOriginal.prototype.icrLocalAnalyserCreateIdCard = function (createIdCardReq) { return cordova(this, "icrLocalAnalyserCreateIdCard", { "otherPromise": true }, arguments); };
    /**
     */
    HMSTextServiceProviderOriginal.prototype.icrLocalAnalyserStop = function () { return cordova(this, "icrLocalAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     */
    HMSTextServiceProviderOriginal.prototype.geticrCnCardInstance = function () { return cordova(this, "geticrCnCardInstance", { "otherPromise": true }, arguments); };
    /**
     */
    HMSTextServiceProviderOriginal.prototype.icrCnCardCreate = function () { return cordova(this, "icrCnCardCreate", { "otherPromise": true }, arguments); };
    /**
     */
    HMSTextServiceProviderOriginal.prototype.geticrVnCardInstance = function () { return cordova(this, "geticrVnCardInstance", { "otherPromise": true }, arguments); };
    /**
     */
    HMSTextServiceProviderOriginal.prototype.icrVnCardCreate = function () { return cordova(this, "icrVnCardCreate", { "otherPromise": true }, arguments); };
    /**
     */
    HMSTextServiceProviderOriginal.prototype.getIcrVnCapture = function () { return cordova(this, "getIcrVnCapture", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLFaceSetting", {
        get: function () { return cordovaPropertyGet(this, "MLFaceSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "icrVnCaptureType", {
        get: function () { return cordovaPropertyGet(this, "icrVnCaptureType"); },
        set: function (value) { cordovaPropertySet(this, "icrVnCaptureType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "gcrCaptureType", {
        get: function () { return cordovaPropertyGet(this, "gcrCaptureType"); },
        set: function (value) { cordovaPropertySet(this, "gcrCaptureType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "syncType", {
        get: function () { return cordovaPropertyGet(this, "syncType"); },
        set: function (value) { cordovaPropertySet(this, "syncType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLLocalTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLLocalTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLLocalTextSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLTextConfig", {
        get: function () { return cordovaPropertyGet(this, "MLTextConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLTextConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLRemoteTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteTextSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLImageClassificationConfig", {
        get: function () { return cordovaPropertyGet(this, "MLImageClassificationConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLImageClassificationConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLImageSegmentationSetting", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLImageSegmentationScene", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationScene"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationScene", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLRemoteLandmarkSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteLandmarkSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteLandmarkSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLBcrCaptureConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrCaptureConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrCaptureConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLGcrCaptureUIConfig", {
        get: function () { return cordovaPropertyGet(this, "MLGcrCaptureUIConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLGcrCaptureUIConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLBcrResultConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrResultConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrResultConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "HandkeyPointConfig", {
        get: function () { return cordovaPropertyGet(this, "HandkeyPointConfig"); },
        set: function (value) { cordovaPropertySet(this, "HandkeyPointConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "ImgSuperResolutionConfig", {
        get: function () { return cordovaPropertyGet(this, "ImgSuperResolutionConfig"); },
        set: function (value) { cordovaPropertySet(this, "ImgSuperResolutionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MlObjectAnalyserConfig", {
        get: function () { return cordovaPropertyGet(this, "MlObjectAnalyserConfig"); },
        set: function (value) { cordovaPropertySet(this, "MlObjectAnalyserConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "DownloadStrategyCustom", {
        get: function () { return cordovaPropertyGet(this, "DownloadStrategyCustom"); },
        set: function (value) { cordovaPropertySet(this, "DownloadStrategyCustom", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "FEATURE", {
        get: function () { return cordovaPropertyGet(this, "FEATURE"); },
        set: function (value) { cordovaPropertySet(this, "FEATURE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "LANGUAGE", {
        get: function () { return cordovaPropertyGet(this, "LANGUAGE"); },
        set: function (value) { cordovaPropertySet(this, "LANGUAGE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLTtsConstants", {
        get: function () { return cordovaPropertyGet(this, "MLTtsConstants"); },
        set: function (value) { cordovaPropertySet(this, "MLTtsConstants", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLSkeletonConfig", {
        get: function () { return cordovaPropertyGet(this, "MLSkeletonConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLSkeletonConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLFlashMode", {
        get: function () { return cordovaPropertyGet(this, "MLFlashMode"); },
        set: function (value) { cordovaPropertySet(this, "MLFlashMode", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLLensType", {
        get: function () { return cordovaPropertyGet(this, "MLLensType"); },
        set: function (value) { cordovaPropertySet(this, "MLLensType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLAnalyzerName", {
        get: function () { return cordovaPropertyGet(this, "MLAnalyzerName"); },
        set: function (value) { cordovaPropertySet(this, "MLAnalyzerName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLFrame", {
        get: function () { return cordovaPropertyGet(this, "MLFrame"); },
        set: function (value) { cordovaPropertySet(this, "MLFrame", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLFormRecogitionConfig", {
        get: function () { return cordovaPropertyGet(this, "MLFormRecogitionConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLFormRecogitionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLFaceConfigs", {
        get: function () { return cordovaPropertyGet(this, "MLFaceConfigs"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceConfigs", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLProductConfig", {
        get: function () { return cordovaPropertyGet(this, "MLProductConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLProductConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLLivenessConfig", {
        get: function () { return cordovaPropertyGet(this, "MLLivenessConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLLivenessConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLRttLanguages", {
        get: function () { return cordovaPropertyGet(this, "MLRttLanguages"); },
        set: function (value) { cordovaPropertySet(this, "MLRttLanguages", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSTextServiceProviderOriginal.prototype, "MLRttScenes", {
        get: function () { return cordovaPropertyGet(this, "MLRttScenes"); },
        set: function (value) { cordovaPropertySet(this, "MLRttScenes", value); },
        enumerable: false,
        configurable: true
    });
    return HMSTextServiceProviderOriginal;
}(IonicNativePlugin));
var HMSTextServiceProvider = new HMSTextServiceProviderOriginal();
export { HMSTextServiceProvider };
var HMSVoiceServiceProviderOriginal = /** @class */ (function (_super) {
    __extends(HMSVoiceServiceProviderOriginal, _super);
    function HMSVoiceServiceProviderOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param  {syncProbabilityDetect} syncRequestLocalLangDetect Represents the parameter.
     * @returns Promise<MLRemoteLangDetection>
     */
    HMSVoiceServiceProviderOriginal.prototype.syncProbabilityDetect = function (syncProbabilityDetect) { return cordova(this, "syncProbabilityDetect", { "otherPromise": true }, arguments); };
    /**
     * @param  {syncProbabilityDetect} syncProbabilityDetect Represents the parameter.
     * @returns Promise<String>
     */
    HMSVoiceServiceProviderOriginal.prototype.syncFirstBestDetect = function (syncProbabilityDetect) { return cordova(this, "syncFirstBestDetect", { "otherPromise": true }, arguments); };
    /**
     * Implements on-cloud text translation.
     * @param  {remotetranslateReq} remotetranslateReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.remoteTranslator = function (remotetranslateReq) { return cordova(this, "remoteTranslator", { "otherPromise": true }, arguments); };
    /**
     * Implements on-cloud text translation.
     * @param  {localtranslateReq} localtranslateReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.localTranslator = function (localtranslateReq) { return cordova(this, "localTranslator", { "otherPromise": true }, arguments); };
    /**
     * Obtains all languages supported for local translation.
     * @param  {localAllLangReq} localAllLangReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.translatorLocalAllLang = function (localAllLangReq) { return cordova(this, "translatorLocalAllLang", { "otherPromise": true }, arguments); };
    /**
     * Obtains all languages supported for on-cloud translation.
     * @param  {remoteAllLangReq} remoteAllLangReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.translatorRemoteAllLang = function (remoteAllLangReq) { return cordova(this, "translatorRemoteAllLang", { "otherPromise": true }, arguments); };
    /**
     * Detects languages on the cloud.
     * @param  {remoteLangDetectionReq} remoteLangDetectionReq Represents the parameter required for lang detection.
     * @returns Promise<RemoteLangDetectionAnalyser> | Promise<langDetectionWithFirstDetect>
     */
    HMSVoiceServiceProviderOriginal.prototype.remoteLangDetection = function (remoteLangDetectionReq) { return cordova(this, "remoteLangDetection", { "otherPromise": true }, arguments); };
    /**
     * Detects languages on local.
     * @param  {localLangDetectionReq} localLangDetectionReq Represents the parameter required for lang detection.
     * @returns Promise<any> | Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.localLangDetection = function (localLangDetectionReq) { return cordova(this, "localLangDetection", { "otherPromise": true }, arguments); };
    /**
     * Download language model.
     * @param  {downloadTranslateReq} downloadTranslateReq Represents the parameter required for download model.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.translatorDownloadModel = function (downloadTranslateReq) { return cordova(this, "translatorDownloadModel", { "otherPromise": true }, arguments); };
    /**
     * For delete language model.
     * @param  {deleteTranslateReq} deleteTranslateReq Represents the parameter required for delete model.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.translatorDeleteModel = function (deleteTranslateReq) { return cordova(this, "translatorDeleteModel", { "otherPromise": true }, arguments); };
    /**
     * This method stop translator service.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.stopTranslatorService = function () { return cordova(this, "stopTranslatorService", { "otherPromise": true }, arguments); };
    /**
     * This method return RTT setting.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.getRTTSetting = function () { return cordova(this, "getRTTSetting", { "otherPromise": true }, arguments); };
    /**
     * This method returns TTS setting.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.getTTSSetting = function () { return cordova(this, "getTTSSetting", { "otherPromise": true }, arguments); };
    /**
     * This method returns AFT setting.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.getAFTSetting = function () { return cordova(this, "getAFTSetting", { "otherPromise": true }, arguments); };
    /**
     * This method returns Lang Detection setting.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.getLangDetectionSetting = function () { return cordova(this, "getLangDetectionSetting", { "otherPromise": true }, arguments); };
    /**
     * This method stop lang detection service.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.stopLangDetectionService = function () { return cordova(this, "stopLangDetectionService", { "otherPromise": true }, arguments); };
    /**
     * The sound detection service can detect sound events in online (real-time recording) mode. The detected sound events can help you perform subsequent actions.
     * @param  {soundDectReq} soundDectReq Represents the parameter required for Sound Detection analyser.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.soundDectAnalyser = function (soundDectReq) { return cordova(this, "soundDectAnalyser", { "otherPromise": true }, arguments); };
    /**
     * TTS can convert text information into audio output. Rich timbres, and volume and speed options are supported to produce more natural sounds.
     * @param  {ttsReq} ttsReq Represents the parameter required for text to speech.
     * @returns Promise<TtsAnalyser>
     */
    HMSVoiceServiceProviderOriginal.prototype.ttsAnalyser = function (ttsReq) { return cordova(this, "ttsAnalyser", { "otherPromise": true }, arguments); };
    /**
     * TTS can convert text information into audio output offline. Rich timbres, and volume and speed options are supported to produce more natural sounds.
     * @param  {ttsReq} ttsReq Represents the parameter required for text to speech.
     * @returns Promise<TtsAnalyser>
     */
    HMSVoiceServiceProviderOriginal.prototype.ttsOfflineAnalyser = function (ttsReq) { return cordova(this, "ttsOfflineAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This service stop text to speech (TTS) service.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.ttsAnalyserStop = function () { return cordova(this, "ttsAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * This service pauses text to speech (TTS) analyser.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.ttsAnalyserPause = function () { return cordova(this, "ttsAnalyserPause", { "otherPromise": true }, arguments); };
    /**
     * This service continues text to speech (TTS) analyser.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.ttsAnalyserResume = function () { return cordova(this, "ttsAnalyserResume", { "otherPromise": true }, arguments); };
    /**
     * This service shutdown text to speech (TTS) analyser.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.ttsAnalysershutDown = function () { return cordova(this, "ttsAnalysershutDown", { "otherPromise": true }, arguments); };
    /**
     * This method returns TTS Download setting.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.ttsAnalyserDownloadSetting = function () { return cordova(this, "ttsAnalyserDownloadSetting", { "otherPromise": true }, arguments); };
    /**
     * This service close AFT analyser.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.aftAnalyserClose = function () { return cordova(this, "aftAnalyserClose", { "otherPromise": true }, arguments); };
    /**
     * This service stop AFT analyser.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.asrAnalyserStop = function () { return cordova(this, "asrAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * This service destroy AFT analyser.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.aftAnalyserDestroy = function () { return cordova(this, "aftAnalyserDestroy", { "otherPromise": true }, arguments); };
    /**
     * This service pause AFT analyser.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.aftAnalyserPause = function () { return cordova(this, "aftAnalyserPause", { "otherPromise": true }, arguments); };
    /**
     * This service destroy Sound Detection analyser.
     * @returns Promise<any>
     */
    HMSVoiceServiceProviderOriginal.prototype.soundDectAnalyserDestroy = function () { return cordova(this, "soundDectAnalyserDestroy", { "otherPromise": true }, arguments); };
    /**
     * The audio file transcription service can convert an audio file less than or equal to 60 seconds into a text file. Currently, Chinese and English are supported.
     * @param  {aftReq} aftReq Represents the parameter required for aft analyser.
     * @returns Promise<AftAnalyser>
     */
    HMSVoiceServiceProviderOriginal.prototype.aftAnalyser = function (aftReq) { return cordova(this, "aftAnalyser", { "otherPromise": true }, arguments); };
    HMSVoiceServiceProviderOriginal.prototype.asrAnalyser = function (asrReq) { return cordova(this, "asrAnalyser", { "observable": true }, arguments); };
    HMSVoiceServiceProviderOriginal.prototype.rttAnalyserStart = function (rttReq) { return cordova(this, "rttAnalyserStart", { "observable": true }, arguments); };
    HMSVoiceServiceProviderOriginal.prototype.rttAnalyserStop = function () { return cordova(this, "rttAnalyserStop", { "observable": true }, arguments); };
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLFaceSetting", {
        get: function () { return cordovaPropertyGet(this, "MLFaceSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLLocalTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLLocalTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLLocalTextSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLTextConfig", {
        get: function () { return cordovaPropertyGet(this, "MLTextConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLTextConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLRemoteTextSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteTextSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteTextSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLImageClassificationConfig", {
        get: function () { return cordovaPropertyGet(this, "MLImageClassificationConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLImageClassificationConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLImageSegmentationSetting", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLImageSegmentationScene", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationScene"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationScene", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLRemoteLandmarkSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteLandmarkSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteLandmarkSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLBcrCaptureConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrCaptureConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrCaptureConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLGcrCaptureUIConfig", {
        get: function () { return cordovaPropertyGet(this, "MLGcrCaptureUIConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLGcrCaptureUIConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLBcrResultConfig", {
        get: function () { return cordovaPropertyGet(this, "MLBcrResultConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLBcrResultConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "HandkeyPointConfig", {
        get: function () { return cordovaPropertyGet(this, "HandkeyPointConfig"); },
        set: function (value) { cordovaPropertySet(this, "HandkeyPointConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "ImgSuperResolutionConfig", {
        get: function () { return cordovaPropertyGet(this, "ImgSuperResolutionConfig"); },
        set: function (value) { cordovaPropertySet(this, "ImgSuperResolutionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MlObjectAnalyserConfig", {
        get: function () { return cordovaPropertyGet(this, "MlObjectAnalyserConfig"); },
        set: function (value) { cordovaPropertySet(this, "MlObjectAnalyserConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "DownloadStrategyCustom", {
        get: function () { return cordovaPropertyGet(this, "DownloadStrategyCustom"); },
        set: function (value) { cordovaPropertySet(this, "DownloadStrategyCustom", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "FEATURE", {
        get: function () { return cordovaPropertyGet(this, "FEATURE"); },
        set: function (value) { cordovaPropertySet(this, "FEATURE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "LANGUAGE", {
        get: function () { return cordovaPropertyGet(this, "LANGUAGE"); },
        set: function (value) { cordovaPropertySet(this, "LANGUAGE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLTtsConstants", {
        get: function () { return cordovaPropertyGet(this, "MLTtsConstants"); },
        set: function (value) { cordovaPropertySet(this, "MLTtsConstants", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLSkeletonConfig", {
        get: function () { return cordovaPropertyGet(this, "MLSkeletonConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLSkeletonConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLFlashMode", {
        get: function () { return cordovaPropertyGet(this, "MLFlashMode"); },
        set: function (value) { cordovaPropertySet(this, "MLFlashMode", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLLensType", {
        get: function () { return cordovaPropertyGet(this, "MLLensType"); },
        set: function (value) { cordovaPropertySet(this, "MLLensType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLAnalyzerName", {
        get: function () { return cordovaPropertyGet(this, "MLAnalyzerName"); },
        set: function (value) { cordovaPropertySet(this, "MLAnalyzerName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLFrame", {
        get: function () { return cordovaPropertyGet(this, "MLFrame"); },
        set: function (value) { cordovaPropertySet(this, "MLFrame", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLFormRecogitionConfig", {
        get: function () { return cordovaPropertyGet(this, "MLFormRecogitionConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLFormRecogitionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLFaceConfigs", {
        get: function () { return cordovaPropertyGet(this, "MLFaceConfigs"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceConfigs", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLProductConfig", {
        get: function () { return cordovaPropertyGet(this, "MLProductConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLProductConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLLivenessConfig", {
        get: function () { return cordovaPropertyGet(this, "MLLivenessConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLLivenessConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLRttLanguages", {
        get: function () { return cordovaPropertyGet(this, "MLRttLanguages"); },
        set: function (value) { cordovaPropertySet(this, "MLRttLanguages", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "MLRttScenes", {
        get: function () { return cordovaPropertyGet(this, "MLRttScenes"); },
        set: function (value) { cordovaPropertySet(this, "MLRttScenes", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "gcrCaptureType", {
        get: function () { return cordovaPropertyGet(this, "gcrCaptureType"); },
        set: function (value) { cordovaPropertySet(this, "gcrCaptureType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSVoiceServiceProviderOriginal.prototype, "syncType", {
        get: function () { return cordovaPropertyGet(this, "syncType"); },
        set: function (value) { cordovaPropertySet(this, "syncType", value); },
        enumerable: false,
        configurable: true
    });
    return HMSVoiceServiceProviderOriginal;
}(IonicNativePlugin));
var HMSVoiceServiceProvider = new HMSVoiceServiceProviderOriginal();
export { HMSVoiceServiceProvider };
var MLLive = /** @class */ (function () {
    function MLLive(scene, divId) {
        if (scene === "ACTION_LIVE_ANALYSE")
            this.arScene = new (HMSMLKitOriginal.getPlugin().liveEngineAnalyser)(divId);
    }
    MLLive.prototype.on = function (call) {
        return this.arScene.on(call);
    };
    MLLive.prototype.startARScene = function (config, bounds) {
        return this.arScene.startARScene(config, bounds);
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
export var MLStillCompositerName;
(function (MLStillCompositerName) {
    MLStillCompositerName["FACE"] = "FACE";
    MLStillCompositerName["HAND"] = "HAND";
    MLStillCompositerName["SKELETON"] = "SKELETON";
    MLStillCompositerName["OBJECT"] = "OBJECT";
    MLStillCompositerName["TEXT"] = "TEXT";
    MLStillCompositerName["CLASSIFICATION"] = "classification";
})(MLStillCompositerName || (MLStillCompositerName = {}));
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
export var MLAsrConstants;
(function (MLAsrConstants) {
    MLAsrConstants["PUNCTUATION_ENABLE"] = "PUNCTUATION_ENABLE";
    MLAsrConstants[MLAsrConstants["ERR_NO_NETWORK"] = 11202] = "ERR_NO_NETWORK";
    MLAsrConstants[MLAsrConstants["ERR_NO_UNDERSTAND"] = 11204] = "ERR_NO_UNDERSTAND";
    MLAsrConstants[MLAsrConstants["ERR_SERVICE_UNAVAILABLE"] = 11203] = "ERR_SERVICE_UNAVAILABLE";
    MLAsrConstants["FEATURE"] = "FEATURE";
    MLAsrConstants["LANGUAGE"] = "LANGUAGE";
    MLAsrConstants["LAN_EN_US"] = "en-US";
    MLAsrConstants["LAN_FR_FR"] = "fr-FR";
    MLAsrConstants["LAN_ZH"] = "zh";
    MLAsrConstants["LAN_ZH_CN"] = "zh-CN";
    MLAsrConstants["LAN_ES_ES"] = "es-ES";
    MLAsrConstants["LAN_DE_DE"] = "de-DE";
    MLAsrConstants["LAN_RU_RU"] = "ru-RU";
    MLAsrConstants["LAN_IT_IT"] = "it-IT";
    MLAsrConstants["LAN_AR"] = "ar";
    MLAsrConstants["LAN_TH_TH"] = "th_TH";
    MLAsrConstants["LAN_MS_MY"] = "ms_MY";
    MLAsrConstants["LAN_FIL_PH"] = "fil_PH";
    MLAsrConstants["Turkish"] = "tr-TR";
    MLAsrConstants[MLAsrConstants["ERR_INVALIDATE_TOKEN"] = 11219] = "ERR_INVALIDATE_TOKEN";
    MLAsrConstants[MLAsrConstants["FEATURE_ALLINONE"] = 12] = "FEATURE_ALLINONE";
    MLAsrConstants[MLAsrConstants["FEATURE_WORDFLUX"] = 11] = "FEATURE_WORDFLUX";
    MLAsrConstants["SCENES"] = "scenes";
    MLAsrConstants["SCENES_SHOPPING"] = "shopping";
    MLAsrConstants[MLAsrConstants["STATE_LISTENING"] = 1] = "STATE_LISTENING";
    MLAsrConstants[MLAsrConstants["STATE_NO_NETWORK"] = 7] = "STATE_NO_NETWORK";
    MLAsrConstants[MLAsrConstants["STATE_NO_SOUND"] = 2] = "STATE_NO_SOUND";
    MLAsrConstants[MLAsrConstants["STATE_NO_SOUND_TIMES_EXCEED"] = 3] = "STATE_NO_SOUND_TIMES_EXCEED";
    MLAsrConstants[MLAsrConstants["STATE_NO_UNDERSTAND"] = 6] = "STATE_NO_UNDERSTAND";
    MLAsrConstants[MLAsrConstants["STATE_WAITING"] = 9] = "STATE_WAITING";
    MLAsrConstants["ACTION_HMS_ASR_SPEECH"] = "com.huawei.hms.mlsdk.action.RECOGNIZE_SPEECH";
    MLAsrConstants["WAVE_PAINE_ENCODING"] = "ENCODING";
    MLAsrConstants["WAVE_PAINE_SAMPLE_RATE"] = "SAMPLE_RATE";
    MLAsrConstants["WAVE_PAINE_BIT_WIDTH"] = "BIT_WIDTH";
    MLAsrConstants["WAVE_PAINE_CHANNEL_COUNT"] = "CHANNEL_COUNT";
})(MLAsrConstants || (MLAsrConstants = {}));
export var FEATURE;
(function (FEATURE) {
    FEATURE[FEATURE["FEATURE_ALLINONE"] = 12] = "FEATURE_ALLINONE";
    FEATURE[FEATURE["FEATURE_WORDFLUX"] = 11] = "FEATURE_WORDFLUX";
})(FEATURE || (FEATURE = {}));
export var LANGUAGE;
(function (LANGUAGE) {
    LANGUAGE["LAN_EN_US"] = "en-US";
    LANGUAGE["LAN_FR_FR"] = "fr-FR";
    LANGUAGE["LAN_ZH"] = "zh";
    LANGUAGE["LAN_ZH_CN"] = "zh-CN";
    LANGUAGE["LAN_ES_ES"] = "es-ES";
    LANGUAGE["LAN_DE_DE"] = "de-DE";
    LANGUAGE["LAN_RU_RU"] = "ru-RU";
    LANGUAGE["LAN_IT_IT"] = "it-IT";
    LANGUAGE["LAN_AR"] = "ar";
    LANGUAGE["LAN_TH_TH"] = "th_TH";
    LANGUAGE["LAN_MS_MY"] = "ms_MY";
    LANGUAGE["LAN_FIL_PH"] = "fil_PH";
    LANGUAGE["Turkish"] = "tr-TR";
})(LANGUAGE || (LANGUAGE = {}));
export var MLDocumentSkewCorrectionConstant;
(function (MLDocumentSkewCorrectionConstant) {
    MLDocumentSkewCorrectionConstant[MLDocumentSkewCorrectionConstant["SUCCESS"] = 0] = "SUCCESS";
    MLDocumentSkewCorrectionConstant[MLDocumentSkewCorrectionConstant["DETECT_FAILED"] = 1] = "DETECT_FAILED";
    MLDocumentSkewCorrectionConstant[MLDocumentSkewCorrectionConstant["CORRECTION_FAILED"] = 2] = "CORRECTION_FAILED";
    MLDocumentSkewCorrectionConstant[MLDocumentSkewCorrectionConstant["IMAGE_DATA_ERROR"] = 3] = "IMAGE_DATA_ERROR";
})(MLDocumentSkewCorrectionConstant || (MLDocumentSkewCorrectionConstant = {}));
export var RecMode;
(function (RecMode) {
    RecMode[RecMode["WEAK_MODE"] = 0] = "WEAK_MODE";
    RecMode[RecMode["STRICT_MODE"] = 1] = "STRICT_MODE";
})(RecMode || (RecMode = {}));
export var MLBcrCaptureConfig;
(function (MLBcrCaptureConfig) {
    MLBcrCaptureConfig[MLBcrCaptureConfig["ERROR_CODE_INIT_CAMERA_FAILED"] = 10101] = "ERROR_CODE_INIT_CAMERA_FAILED";
    MLBcrCaptureConfig[MLBcrCaptureConfig["RESULT_NUM_ONLY"] = 0] = "RESULT_NUM_ONLY";
    MLBcrCaptureConfig[MLBcrCaptureConfig["ORIENTATION_AUTO"] = 0] = "ORIENTATION_AUTO";
    MLBcrCaptureConfig[MLBcrCaptureConfig["WEAK_MODE"] = 0] = "WEAK_MODE";
    MLBcrCaptureConfig[MLBcrCaptureConfig["ORIENTATION_LANDSCAPE"] = 1] = "ORIENTATION_LANDSCAPE";
    MLBcrCaptureConfig[MLBcrCaptureConfig["ORIENTATION_PORTRAIT"] = 2] = "ORIENTATION_PORTRAIT";
    MLBcrCaptureConfig[MLBcrCaptureConfig["RESULT_ALL"] = 2] = "RESULT_ALL";
    MLBcrCaptureConfig[MLBcrCaptureConfig["RESULT_SIMPLE"] = 1] = "RESULT_SIMPLE";
    MLBcrCaptureConfig[MLBcrCaptureConfig["STRICT_MODE"] = 1] = "STRICT_MODE";
})(MLBcrCaptureConfig || (MLBcrCaptureConfig = {}));
export var MLBcrResultConfig;
(function (MLBcrResultConfig) {
    MLBcrResultConfig[MLBcrResultConfig["RESULT_NUM_ONLY"] = 0] = "RESULT_NUM_ONLY";
    MLBcrResultConfig[MLBcrResultConfig["RESULT_SIMPLE"] = 1] = "RESULT_SIMPLE";
    MLBcrResultConfig[MLBcrResultConfig["RESULT_ALL"] = 2] = "RESULT_ALL";
})(MLBcrResultConfig || (MLBcrResultConfig = {}));
export var MLBcrCaptureErrorCode;
(function (MLBcrCaptureErrorCode) {
    MLBcrCaptureErrorCode[MLBcrCaptureErrorCode["ERROR_CODE_INIT_CAMERA_FAILED"] = 10101] = "ERROR_CODE_INIT_CAMERA_FAILED";
})(MLBcrCaptureErrorCode || (MLBcrCaptureErrorCode = {}));
export var MLImageClassificationConfig;
(function (MLImageClassificationConfig) {
    MLImageClassificationConfig[MLImageClassificationConfig["TYPE_LOCAL"] = 0] = "TYPE_LOCAL";
    MLImageClassificationConfig[MLImageClassificationConfig["TYPE_REMOTE"] = 1] = "TYPE_REMOTE";
})(MLImageClassificationConfig || (MLImageClassificationConfig = {}));
export var DownloadStrategyCustom;
(function (DownloadStrategyCustom) {
    DownloadStrategyCustom[DownloadStrategyCustom["REGION_DR_CHINA"] = 1002] = "REGION_DR_CHINA";
    DownloadStrategyCustom[DownloadStrategyCustom["REGION_DR_AFILA"] = 1003] = "REGION_DR_AFILA";
    DownloadStrategyCustom[DownloadStrategyCustom["REGION_DR_EUROPE"] = 1004] = "REGION_DR_EUROPE";
    DownloadStrategyCustom[DownloadStrategyCustom["REGION_DR_RUSSIA"] = 1005] = "REGION_DR_RUSSIA";
})(DownloadStrategyCustom || (DownloadStrategyCustom = {}));
export var MLRemoteTextSetting;
(function (MLRemoteTextSetting) {
    MLRemoteTextSetting[MLRemoteTextSetting["OCR_LOOSE_SCENE"] = 1] = "OCR_LOOSE_SCENE";
    MLRemoteTextSetting[MLRemoteTextSetting["OCR_COMPACT_SCENE"] = 2] = "OCR_COMPACT_SCENE";
    MLRemoteTextSetting["NGON"] = "NGON";
    MLRemoteTextSetting["ARC"] = "ARC";
    MLRemoteTextSetting[MLRemoteTextSetting["OTHER"] = 5] = "OTHER";
    MLRemoteTextSetting[MLRemoteTextSetting["NEW_LINE_CHARACTER"] = 8] = "NEW_LINE_CHARACTER";
    MLRemoteTextSetting[MLRemoteTextSetting["SPACE"] = 6] = "SPACE";
})(MLRemoteTextSetting || (MLRemoteTextSetting = {}));
export var languageListRemoteText;
(function (languageListRemoteText) {
    languageListRemoteText["LATIN"] = "rm";
    languageListRemoteText["ENGLISH"] = "en";
    languageListRemoteText["CHINESE"] = "zh";
    languageListRemoteText["JAPANESE"] = "ja";
    languageListRemoteText["KOREAN"] = "ko";
    languageListRemoteText["RUSSIAN"] = "ru";
    languageListRemoteText["GERMAN"] = "de";
    languageListRemoteText["FRENCH"] = "fr";
    languageListRemoteText["ITALIAN"] = "it";
    languageListRemoteText["PORTUGUESE"] = "pt";
    languageListRemoteText["SPANISH"] = "es";
    languageListRemoteText["POLISH"] = "pl";
    languageListRemoteText["NORWEGIAN"] = "no";
    languageListRemoteText["SWEDISH"] = "sv";
    languageListRemoteText["DANISH"] = "da";
    languageListRemoteText["TURKISH"] = "tr";
    languageListRemoteText["FINNISH"] = "fi";
    languageListRemoteText["THAI"] = "th";
    languageListRemoteText["ARABIC"] = "ar";
    languageListRemoteText["HINDI"] = "hi";
})(languageListRemoteText || (languageListRemoteText = {}));
export var MLFormRecogitionConfig;
(function (MLFormRecogitionConfig) {
    MLFormRecogitionConfig[MLFormRecogitionConfig["SYNC_TYPE"] = 1] = "SYNC_TYPE";
    MLFormRecogitionConfig[MLFormRecogitionConfig["ASYNC_TYPE"] = 0] = "ASYNC_TYPE";
})(MLFormRecogitionConfig || (MLFormRecogitionConfig = {}));
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
export var gcrCaptureType;
(function (gcrCaptureType) {
    gcrCaptureType[gcrCaptureType["CAPTURE_ACTIVITY"] = 0] = "CAPTURE_ACTIVITY";
    gcrCaptureType[gcrCaptureType["CAPTURE_PHOTO"] = 1] = "CAPTURE_PHOTO";
    gcrCaptureType[gcrCaptureType["CAPTURE_IMAGE"] = 2] = "CAPTURE_IMAGE";
})(gcrCaptureType || (gcrCaptureType = {}));
export var MLGcrCaptureUIConfig;
(function (MLGcrCaptureUIConfig) {
    MLGcrCaptureUIConfig[MLGcrCaptureUIConfig["ORIENTATION_AUTO"] = 0] = "ORIENTATION_AUTO";
    MLGcrCaptureUIConfig[MLGcrCaptureUIConfig["ORIENTATION_LANDSCAPE"] = 1] = "ORIENTATION_LANDSCAPE";
    MLGcrCaptureUIConfig[MLGcrCaptureUIConfig["ORIENTATION_PORTRAIT"] = 2] = "ORIENTATION_PORTRAIT";
})(MLGcrCaptureUIConfig || (MLGcrCaptureUIConfig = {}));
export var icrCaptureType;
(function (icrCaptureType) {
    icrCaptureType[icrCaptureType["CAPTURE_CAMERA"] = 0] = "CAPTURE_CAMERA";
    icrCaptureType[icrCaptureType["CAPTURE_IMAGE"] = 1] = "CAPTURE_IMAGE";
})(icrCaptureType || (icrCaptureType = {}));
export var MLIcrSideType;
(function (MLIcrSideType) {
    MLIcrSideType["FRONT"] = "FRONT";
    MLIcrSideType["BACK"] = "BACK";
})(MLIcrSideType || (MLIcrSideType = {}));
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
export var ImgSuperResolutionConfig;
(function (ImgSuperResolutionConfig) {
    ImgSuperResolutionConfig[ImgSuperResolutionConfig["ISR_SCALE_1X"] = 1] = "ISR_SCALE_1X";
    ImgSuperResolutionConfig[ImgSuperResolutionConfig["ISR_SCALE_3X"] = 3] = "ISR_SCALE_3X";
})(ImgSuperResolutionConfig || (ImgSuperResolutionConfig = {}));
export var MLProductConfig;
(function (MLProductConfig) {
    MLProductConfig[MLProductConfig["REGION_DR_CHINA"] = 1002] = "REGION_DR_CHINA";
    MLProductConfig[MLProductConfig["REGION_DR_AFILA"] = 1003] = "REGION_DR_AFILA";
    MLProductConfig[MLProductConfig["REGION_DR_EUROPE"] = 1004] = "REGION_DR_EUROPE";
    MLProductConfig[MLProductConfig["REGION_DR_RUSSIA"] = 1005] = "REGION_DR_RUSSIA";
    MLProductConfig[MLProductConfig["REGION_DR_GERMAN"] = 1006] = "REGION_DR_GERMAN";
    MLProductConfig[MLProductConfig["REGION_DR_SIANGAPORE"] = 1007] = "REGION_DR_SIANGAPORE";
})(MLProductConfig || (MLProductConfig = {}));
export var MLImageSegmentationSetting;
(function (MLImageSegmentationSetting) {
    MLImageSegmentationSetting[MLImageSegmentationSetting["BODY_SEG"] = 0] = "BODY_SEG";
    MLImageSegmentationSetting[MLImageSegmentationSetting["IMAGE_SEG"] = 1] = "IMAGE_SEG";
    MLImageSegmentationSetting[MLImageSegmentationSetting["HAIR_SEG"] = 2] = "HAIR_SEG";
})(MLImageSegmentationSetting || (MLImageSegmentationSetting = {}));
export var MLImageSegmentationClassification;
(function (MLImageSegmentationClassification) {
    MLImageSegmentationClassification[MLImageSegmentationClassification["TYPE_BACKGOURND"] = 0] = "TYPE_BACKGOURND";
    MLImageSegmentationClassification[MLImageSegmentationClassification["TYPE_HUMAN"] = 1] = "TYPE_HUMAN";
    MLImageSegmentationClassification[MLImageSegmentationClassification["TYPE_SKY"] = 2] = "TYPE_SKY";
    MLImageSegmentationClassification[MLImageSegmentationClassification["TYPE_GRASS"] = 3] = "TYPE_GRASS";
    MLImageSegmentationClassification[MLImageSegmentationClassification["TYPE_FOOD"] = 4] = "TYPE_FOOD";
    MLImageSegmentationClassification[MLImageSegmentationClassification["TYPE_CAT"] = 5] = "TYPE_CAT";
    MLImageSegmentationClassification[MLImageSegmentationClassification["TYPE_BUILD"] = 6] = "TYPE_BUILD";
    MLImageSegmentationClassification[MLImageSegmentationClassification["TYPE_FLOWER"] = 7] = "TYPE_FLOWER";
    MLImageSegmentationClassification[MLImageSegmentationClassification["TYPE_WATER"] = 8] = "TYPE_WATER";
    MLImageSegmentationClassification[MLImageSegmentationClassification["TYPE_SAND"] = 9] = "TYPE_SAND";
    MLImageSegmentationClassification[MLImageSegmentationClassification["TYPE_MOUNTAIN"] = 10] = "TYPE_MOUNTAIN";
})(MLImageSegmentationClassification || (MLImageSegmentationClassification = {}));
export var MLImageSegmentationScene;
(function (MLImageSegmentationScene) {
    MLImageSegmentationScene[MLImageSegmentationScene["ALL"] = 0] = "ALL";
    MLImageSegmentationScene[MLImageSegmentationScene["MASK_ONLY"] = 1] = "MASK_ONLY";
    MLImageSegmentationScene[MLImageSegmentationScene["FOREGROUND_ONLY"] = 2] = "FOREGROUND_ONLY";
    MLImageSegmentationScene[MLImageSegmentationScene["GRAYSCALE_ONLY"] = 3] = "GRAYSCALE_ONLY";
})(MLImageSegmentationScene || (MLImageSegmentationScene = {}));
export var MLRemoteLandmarkSetting;
(function (MLRemoteLandmarkSetting) {
    MLRemoteLandmarkSetting[MLRemoteLandmarkSetting["STEADY_PATTERN"] = 1] = "STEADY_PATTERN";
    MLRemoteLandmarkSetting[MLRemoteLandmarkSetting["NEWEST_PATTERN"] = 2] = "NEWEST_PATTERN";
})(MLRemoteLandmarkSetting || (MLRemoteLandmarkSetting = {}));
export var MLLanguageDetection;
(function (MLLanguageDetection) {
    MLLanguageDetection[MLLanguageDetection["FIRST_BEST_DETECTION_LANGUAGE_TRUSTED_THRESHOLD"] = 0.5] = "FIRST_BEST_DETECTION_LANGUAGE_TRUSTED_THRESHOLD";
    MLLanguageDetection[MLLanguageDetection["PROBABILITY_DETECTION_LANGUAGE_TRUSTED_THRESHOLD"] = 0.01] = "PROBABILITY_DETECTION_LANGUAGE_TRUSTED_THRESHOLD";
    MLLanguageDetection["UNDETECTION_LANGUAGE_TRUSTED_THRESHOLD"] = "unknown";
})(MLLanguageDetection || (MLLanguageDetection = {}));
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
export var MlObjectAnalyserConfig;
(function (MlObjectAnalyserConfig) {
    MlObjectAnalyserConfig[MlObjectAnalyserConfig["TYPE_PICTURE"] = 0] = "TYPE_PICTURE";
    MlObjectAnalyserConfig[MlObjectAnalyserConfig["TYPE_VIDEO"] = 1] = "TYPE_VIDEO";
    MlObjectAnalyserConfig[MlObjectAnalyserConfig["TYPE_OTHER"] = 0] = "TYPE_OTHER";
    MlObjectAnalyserConfig[MlObjectAnalyserConfig["TYPE_GOODS"] = 1] = "TYPE_GOODS";
    MlObjectAnalyserConfig[MlObjectAnalyserConfig["TYPE_FOOD"] = 2] = "TYPE_FOOD";
    MlObjectAnalyserConfig[MlObjectAnalyserConfig["TYPE_FURNITURE"] = 3] = "TYPE_FURNITURE";
    MlObjectAnalyserConfig[MlObjectAnalyserConfig["TYPE_PLANT"] = 4] = "TYPE_PLANT";
    MlObjectAnalyserConfig[MlObjectAnalyserConfig["TYPE_PLACE"] = 5] = "TYPE_PLACE";
    MlObjectAnalyserConfig[MlObjectAnalyserConfig["TYPE_FACE"] = 6] = "TYPE_FACE";
})(MlObjectAnalyserConfig || (MlObjectAnalyserConfig = {}));
export var MLRttLanguages;
(function (MLRttLanguages) {
    MLRttLanguages["LAN_ZH_CN"] = "zh-CN";
    MLRttLanguages["LAN_EN_US"] = "en-US";
    MLRttLanguages["LAN_FR_FR"] = "fr-FR";
    MLRttLanguages["LAN_ES_ES"] = "es-ES";
    MLRttLanguages["LAN_EN_IN"] = "en-IN";
    MLRttLanguages["LAN_DE_DE"] = "de-DE";
})(MLRttLanguages || (MLRttLanguages = {}));
export var MLRttScenes;
(function (MLRttScenes) {
    MLRttScenes["SCENES_SHOPPINGf"] = "shopping";
})(MLRttScenes || (MLRttScenes = {}));
export var MLSpeechRealTimeTranscriptionConstants;
(function (MLSpeechRealTimeTranscriptionConstants) {
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["ERR_INVALIDE_TOKEN"] = 13219] = "ERR_INVALIDE_TOKEN";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["ERR_NO_NETWORK"] = 13202] = "ERR_NO_NETWORK";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["ERR_SERVICE_CREDIT"] = 13222] = "ERR_SERVICE_CREDIT";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["ERR_SERVICE_UNSUBSCRIBED"] = 13223] = "ERR_SERVICE_UNSUBSCRIBED";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["ERR_SERVICE_FREE_USED_UP"] = 13224] = "ERR_SERVICE_FREE_USED_UP";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["ERR_SERVICE_UNAVAILABLE"] = 13203] = "ERR_SERVICE_UNAVAILABLE";
    MLSpeechRealTimeTranscriptionConstants["LAN_EN_US"] = " en-US";
    MLSpeechRealTimeTranscriptionConstants["LAN_FR_FR"] = "fr-FR";
    MLSpeechRealTimeTranscriptionConstants["LAN_ZH_CN"] = "zh-CN";
    MLSpeechRealTimeTranscriptionConstants["RESULTS_PARTIALFINAL"] = "RESULTS_PARTIALFINAL";
    MLSpeechRealTimeTranscriptionConstants["RESULTS_RECOGNIZING"] = "results_recognizing";
    MLSpeechRealTimeTranscriptionConstants["RESULTS_SENTENCE_OFFSET"] = "RESULTS_SENTENCE_OFFSET";
    MLSpeechRealTimeTranscriptionConstants["RESULTS_WORD_OFFSET"] = "RESULTS_WORD_OFFSET";
    MLSpeechRealTimeTranscriptionConstants["SCENES_SHOPPING"] = "shopping";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["STATE_SERVICE_RECONNECTED"] = 43] = "STATE_SERVICE_RECONNECTED";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["STATE_SERVICE_RECONNECTING"] = 42] = "STATE_SERVICE_RECONNECTING";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["STATE_LISTENING"] = 1] = "STATE_LISTENING";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["STATE_NO_NETWORK"] = 7] = "STATE_NO_NETWORK";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["STATE_NO_UNDERSTAND"] = 6] = "STATE_NO_UNDERSTAND";
    MLSpeechRealTimeTranscriptionConstants["WAVE_PAINE_BIT_WIDTH"] = "BIT_WIDTH";
    MLSpeechRealTimeTranscriptionConstants["WAVE_PAINE_CHANNEL_COUNT"] = "CHANNEL_COUNT";
    MLSpeechRealTimeTranscriptionConstants["WAVE_PAINE_ENCODING"] = "ENCODING";
    MLSpeechRealTimeTranscriptionConstants["WAVE_PAINE_SAMPLE_RATE"] = "SAMPLE_RATE";
})(MLSpeechRealTimeTranscriptionConstants || (MLSpeechRealTimeTranscriptionConstants = {}));
export var MLSkeletonConfig;
(function (MLSkeletonConfig) {
    MLSkeletonConfig[MLSkeletonConfig["SYNC_MODE"] = 0] = "SYNC_MODE";
    MLSkeletonConfig[MLSkeletonConfig["ASYNC_MODE"] = 1] = "ASYNC_MODE";
    MLSkeletonConfig[MLSkeletonConfig["SIMILARITTY_MODE"] = 2] = "SIMILARITTY_MODE";
    MLSkeletonConfig[MLSkeletonConfig["TYPE_YOGA"] = 1] = "TYPE_YOGA";
    MLSkeletonConfig[MLSkeletonConfig["TYPE_NORMAL"] = 0] = "TYPE_NORMAL";
})(MLSkeletonConfig || (MLSkeletonConfig = {}));
export var MLLocalTextSetting;
(function (MLLocalTextSetting) {
    MLLocalTextSetting[MLLocalTextSetting["OCR_DETECT_MODE"] = 1] = "OCR_DETECT_MODE";
    MLLocalTextSetting[MLLocalTextSetting["OCR_TRACKING_MODE"] = 2] = "OCR_TRACKING_MODE";
})(MLLocalTextSetting || (MLLocalTextSetting = {}));
export var MLTextConfig;
(function (MLTextConfig) {
    MLTextConfig[MLTextConfig["OCR_LOCAL_TYPE"] = 0] = "OCR_LOCAL_TYPE";
    MLTextConfig[MLTextConfig["OCR_REMOTE_TYPE"] = 1] = "OCR_REMOTE_TYPE";
})(MLTextConfig || (MLTextConfig = {}));
export var MLTranslateLanguages;
(function (MLTranslateLanguages) {
    MLTranslateLanguages["AFRIKAANS"] = "af";
    MLTranslateLanguages["ARABIC"] = "ar";
    MLTranslateLanguages["BULGARIAN"] = "bg";
    MLTranslateLanguages["BURMESE"] = "my";
    MLTranslateLanguages["CROATIAN"] = "hr";
    MLTranslateLanguages["CZECH"] = "cs";
    MLTranslateLanguages["CHINESE"] = "zh";
    MLTranslateLanguages["TRADITIONAL_CHINESE"] = "zh-hk";
    MLTranslateLanguages["DANISH"] = "da";
    MLTranslateLanguages["DUTCH"] = "nl";
    MLTranslateLanguages["ESTONIAN"] = "et";
    MLTranslateLanguages["ENGLISH"] = "en";
    MLTranslateLanguages["FINNISH"] = "fi";
    MLTranslateLanguages["FRENCH"] = "fr";
    MLTranslateLanguages["GERMAN"] = "de";
    MLTranslateLanguages["GUJARATI"] = "gu";
    MLTranslateLanguages["GREEK"] = "el";
    MLTranslateLanguages["HUNGARIAN"] = "hu";
    MLTranslateLanguages["HINDI"] = "hi";
    MLTranslateLanguages["HEBREW"] = "he";
    MLTranslateLanguages["IRISH"] = "is";
    MLTranslateLanguages["ITALIAN"] = "it";
    MLTranslateLanguages["INDONESIAN"] = "id";
    MLTranslateLanguages["KHMER"] = "km";
    MLTranslateLanguages["KOREAN"] = "ko";
    MLTranslateLanguages["JAPANESE"] = "ja";
    MLTranslateLanguages["LATIN"] = "rm";
    MLTranslateLanguages["LATVIAN"] = "lv";
    MLTranslateLanguages["MALAY"] = "ms";
    MLTranslateLanguages["MARATHI"] = "mr";
    MLTranslateLanguages["NORWEGIAN"] = "no";
    MLTranslateLanguages["PUNJABI"] = "pa";
    MLTranslateLanguages["POLISH"] = "pl";
    MLTranslateLanguages["PORTUGUESE"] = "pt";
    MLTranslateLanguages["PERSIAN"] = "fa";
    MLTranslateLanguages["RUSSIAN"] = "ru";
    MLTranslateLanguages["ROMANIAN"] = "ro";
    MLTranslateLanguages["SERBIAN"] = "sr";
    MLTranslateLanguages["SPANISH"] = "es";
    MLTranslateLanguages["SLOVAK"] = "sk";
    MLTranslateLanguages["SWEDISH"] = "sv";
    MLTranslateLanguages["TAMIL"] = "ta";
    MLTranslateLanguages["TURKISH"] = "tr";
    MLTranslateLanguages["THAI"] = "th";
    MLTranslateLanguages["TAGALOG"] = "tl";
    MLTranslateLanguages["TELUGU"] = "te";
    MLTranslateLanguages["VIETNAMESE"] = "vi";
})(MLTranslateLanguages || (MLTranslateLanguages = {}));
export var TextLanguage;
(function (TextLanguage) {
    TextLanguage["LANGUAGE_ZH"] = "zh";
    TextLanguage["LANGUAGE_EN"] = "em";
})(TextLanguage || (TextLanguage = {}));
export var MLTextEmbeddibgExceptions;
(function (MLTextEmbeddibgExceptions) {
    MLTextEmbeddibgExceptions["LANGUAGE_ZH"] = "zh";
    MLTextEmbeddibgExceptions["LANGUAGE_EN"] = "en";
    MLTextEmbeddibgExceptions[MLTextEmbeddibgExceptions["ERR_SERVICE_IS_UNAVAILABLE"] = 12199] = "ERR_SERVICE_IS_UNAVAILABLE";
    MLTextEmbeddibgExceptions[MLTextEmbeddibgExceptions["RR_NET_UNAVAILABLE"] = 12198] = "RR_NET_UNAVAILABLE";
    MLTextEmbeddibgExceptions[MLTextEmbeddibgExceptions["ERR_INNER"] = 12101] = "ERR_INNER";
    MLTextEmbeddibgExceptions[MLTextEmbeddibgExceptions["ERR_AUTH_FAILED"] = 12102] = "ERR_AUTH_FAILED";
    MLTextEmbeddibgExceptions[MLTextEmbeddibgExceptions["ERR_PARAM_ILLEGAL"] = 12103] = "ERR_PARAM_ILLEGAL";
    MLTextEmbeddibgExceptions[MLTextEmbeddibgExceptions["ERR_ANALYZE_FAILED"] = 12104] = "ERR_ANALYZE_FAILED";
    MLTextEmbeddibgExceptions[MLTextEmbeddibgExceptions["ERR_AUTH_TOKEN_INVALIDE"] = 12105] = "ERR_AUTH_TOKEN_INVALIDE";
})(MLTextEmbeddibgExceptions || (MLTextEmbeddibgExceptions = {}));
export var MLTtsAudioFragmentConstant;
(function (MLTtsAudioFragmentConstant) {
    MLTtsAudioFragmentConstant[MLTtsAudioFragmentConstant["CHANNEL_OUT_MONO"] = 4] = "CHANNEL_OUT_MONO";
    MLTtsAudioFragmentConstant[MLTtsAudioFragmentConstant["FORMAT_PCM_16BIT"] = 2] = "FORMAT_PCM_16BIT";
    MLTtsAudioFragmentConstant[MLTtsAudioFragmentConstant["FORMAT_PCM_8BIT"] = 1] = "FORMAT_PCM_8BIT";
    MLTtsAudioFragmentConstant[MLTtsAudioFragmentConstant["SAMPLE_RATE_16K"] = 16000] = "SAMPLE_RATE_16K";
})(MLTtsAudioFragmentConstant || (MLTtsAudioFragmentConstant = {}));
export var MLTtsConstants;
(function (MLTtsConstants) {
    MLTtsConstants[MLTtsConstants["EVENT_PLAY_START"] = 1] = "EVENT_PLAY_START";
    MLTtsConstants[MLTtsConstants["EVENT_PLAY_RESUME"] = 2] = "EVENT_PLAY_RESUME";
    MLTtsConstants[MLTtsConstants["EVENT_PLAY_PAUSE"] = 3] = "EVENT_PLAY_PAUSE";
    MLTtsConstants[MLTtsConstants["EVENT_PLAY_STOP"] = 4] = "EVENT_PLAY_STOP";
    MLTtsConstants[MLTtsConstants["EVENT_SYNTHESIS_START"] = 5] = "EVENT_SYNTHESIS_START";
    MLTtsConstants[MLTtsConstants["EVENT_SYNTHESIS_END"] = 6] = "EVENT_SYNTHESIS_END";
    MLTtsConstants[MLTtsConstants["EVENT_SYNTHESIS_COMPLETE"] = 7] = "EVENT_SYNTHESIS_COMPLETE";
    MLTtsConstants["EVENT_PLAY_STOP_INTERRUPTED"] = "interrupted";
    MLTtsConstants["EVENT_SYNTHESIS_INTERRUPTED"] = "interrupted";
    MLTtsConstants[MLTtsConstants["LANGUAGE_AVAILABLE"] = 0] = "LANGUAGE_AVAILABLE";
    MLTtsConstants[MLTtsConstants["LANGUAGE_NOT_SUPPORT"] = 1] = "LANGUAGE_NOT_SUPPORT";
    MLTtsConstants[MLTtsConstants["LANGUAGE_UPDATING"] = 2] = "LANGUAGE_UPDATING";
    MLTtsConstants["TTS_EN_US"] = "en-US";
    MLTtsConstants["TTS_LAN_AR_AR"] = "ar-AR";
    MLTtsConstants["TTS_LAN_TR_TR"] = "tr-TR";
    MLTtsConstants["TTS_SPEAKER_FEMALE_AR"] = "ar-AR-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_TR"] = "tr-TR-st-1";
    MLTtsConstants["TTS_LAN_ES_ES"] = "es-ES";
    MLTtsConstants["TTS_LAN_FR_FR"] = "fr-FR";
    MLTtsConstants["TTS_LAN_DE_DE"] = "de-DE";
    MLTtsConstants["TTS_LAN_IT_IT"] = "it-IT";
    MLTtsConstants["TTS_LAN_RU_RU"] = "ru-RU";
    MLTtsConstants["TTS_LAN_PL_PL"] = "pl-PL";
    MLTtsConstants["TTS_LAN_TH_TH"] = " th-TH";
    MLTtsConstants["TTS_LAN_MS_MS"] = "ms-MS";
    MLTtsConstants["TTS_ZH_HANS"] = "zh-Hans";
    MLTtsConstants["TTS_SPEAKER_FEMALE_EN"] = "Female-en";
    MLTtsConstants["TTS_SPEAKER_FEMALE_ZH"] = "Female-zh";
    MLTtsConstants["TTS_SPEAKER_MALE_EN"] = "Male-en";
    MLTtsConstants["TTS_SPEAKER_MALE_ZH"] = "Male-zh";
    MLTtsConstants["TTS_SPEAKER_MALE_ZH_2"] = "zh-Hans-st-4";
    MLTtsConstants["TTS_SPEAKER_FEMALE_ZH_2"] = "zh-Hans-st-3";
    MLTtsConstants["TTS_SPEAKER_MALE_EN_2"] = "en-US-st-4";
    MLTtsConstants["TTS_SPEAKER_FEMALE_EN_2"] = "en-US-st-3";
    MLTtsConstants["TTS_SPEAKER_FEMALE_DE"] = "de-DE-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_ES"] = "it-IT-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_IT"] = "es-ES-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_FR"] = "fr-FR-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_RU"] = "ru-RU-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_PL"] = "pl-PL-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_TH"] = "th-TH-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_MS"] = "ms-MS-st-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_EN_US_MALE_BOLT"] = "en-US-st-bolt-2";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_ZH_HANS_FEMALE_EAGLE"] = "zh-Hans-st-eagle-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_ZH_HANS_MALE_EAGLE"] = "zh-Hans-st-eagle-2";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_EN_US_FEMALE_EAGLE"] = "en-US-st-eagle-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_EN_US_MALE_EAGLE"] = "en-US-st-eagle-2";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_EN_US_FEMALE_BEE"] = "en-US-st-bee-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_FR_FR_FEMALE_BEE"] = "fr-FR-st-bee-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_ES_ES_FEMALE_BEE"] = "es-ES-st-bee-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_DE_DE_FEMALE_BEE"] = "de-DE-st-bee-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_IT_IT_FEMALE_BEE"] = "it-IT-st-bee-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_ZH_HANS_FEMALE_BOLT"] = "zh-Hans-st-bolt-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_ZH_HANS_MALE_BOLT"] = "zh-Hans-st-bolt-2";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_EN_US_FEMALE_BOLT"] = "en-US-st-bolt-1";
    MLTtsConstants["TTS_ONLINE_MODE"] = "online";
    MLTtsConstants["TTS_OFFLINE_MODE"] = "offline";
    MLTtsConstants[MLTtsConstants["QUEUE_APPEND"] = 0] = "QUEUE_APPEND";
    MLTtsConstants[MLTtsConstants["QUEUE_FLUSH"] = 1] = "QUEUE_FLUSH";
    MLTtsConstants[MLTtsConstants["EXTERNAL_PLAYBACK"] = 2] = "EXTERNAL_PLAYBACK";
    MLTtsConstants[MLTtsConstants["OPEN_STREAM"] = 4] = "OPEN_STREAM";
})(MLTtsConstants || (MLTtsConstants = {}));
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
export var MLTtsError;
(function (MLTtsError) {
    MLTtsError[MLTtsError["ERR_AUDIO_PLAYER_FAILED"] = 11305] = "ERR_AUDIO_PLAYER_FAILED";
    MLTtsError[MLTtsError["ERR_AUTHORIZE_FAILED"] = 11306] = "ERR_AUTHORIZE_FAILED";
    MLTtsError[MLTtsError["ERR_AUTHORIZE_TOKEN_INVALIDE"] = 11307] = "ERR_AUTHORIZE_TOKEN_INVALIDE";
    MLTtsError[MLTtsError["ERR_ILLEGAL_PARAMETER"] = 11301] = "ERR_ILLEGAL_PARAMETER";
    MLTtsError[MLTtsError["ERR_INSUFFICIENT_BALANCE"] = 11303] = "ERR_INSUFFICIENT_BALANCE";
    MLTtsError[MLTtsError["ERR_INTERNAL"] = 11398] = "ERR_INTERNAL";
    MLTtsError[MLTtsError["ERR_NETCONNECT_FAILED"] = 11302] = "ERR_NETCONNECT_FAILED";
    MLTtsError[MLTtsError["ERR_SPEECH_SYNTHESIS_FAILED"] = 11304] = "ERR_SPEECH_SYNTHESIS_FAILED";
    MLTtsError[MLTtsError["ERR_UNKNOWN"] = 11399] = "ERR_UNKNOWN";
})(MLTtsError || (MLTtsError = {}));
export var MLAftErrorCodes;
(function (MLAftErrorCodes) {
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUDIO_FILE_NOTSUPPORTED"] = 11101] = "ERR_AUDIO_FILE_NOTSUPPORTED";
    MLAftErrorCodes[MLAftErrorCodes["LANGUAGE_CODE_NOTSUPPORTED"] = 11102] = "LANGUAGE_CODE_NOTSUPPORTED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUDIO_FILE_SIZE_OVERFLOW"] = 11103] = "ERR_AUDIO_FILE_SIZE_OVERFLOW";
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUDIO_LENGTH_OVERFLOW"] = 11104] = "ERR_AUDIO_LENGTH_OVERFLOW";
    MLAftErrorCodes[MLAftErrorCodes["ERR_FILE_NOT_FOUND"] = 11105] = "ERR_FILE_NOT_FOUND";
    MLAftErrorCodes[MLAftErrorCodes["ERR_ILLEGAL_PARAMETER"] = 11106] = "ERR_ILLEGAL_PARAMETER";
    MLAftErrorCodes[MLAftErrorCodes["ERR_ENGINE_BUSY"] = 11107] = "ERR_ENGINE_BUSY";
    MLAftErrorCodes[MLAftErrorCodes["ERR_NETCONNECT_FAILED"] = 11108] = "ERR_NETCONNECT_FAILED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_RESULT_WHEN_UPLOADING"] = 11109] = "ERR_RESULT_WHEN_UPLOADING";
    MLAftErrorCodes[MLAftErrorCodes["ERR_TASK_NOT_EXISTED"] = 11110] = "ERR_TASK_NOT_EXISTED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUDIO_TRANSCRIPT_FAILED"] = 11111] = "ERR_AUDIO_TRANSCRIPT_FAILED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUDIO_INIT_FAILED"] = 11112] = "ERR_AUDIO_INIT_FAILED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUDIO_UPLOAD_FAILED"] = 11113] = "ERR_AUDIO_UPLOAD_FAILED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_TASK_ALREADY_INPROGRESS"] = 11114] = "ERR_TASK_ALREADY_INPROGRESS";
    MLAftErrorCodes[MLAftErrorCodes["ERR_NO_ENOUGH_STORAGE"] = 11115] = "ERR_NO_ENOUGH_STORAGE";
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUTHORIZE_FAILED"] = 11119] = "ERR_AUTHORIZE_FAILED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_SERVICE_CREDIT"] = 11122] = "ERR_SERVICE_CREDIT";
    MLAftErrorCodes[MLAftErrorCodes["ERR_SERVICE_UNSUBSCRIBED"] = 11123] = "ERR_SERVICE_UNSUBSCRIBED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_SERVICE_FREE_USED_UP"] = 11124] = "ERR_SERVICE_FREE_USED_UP";
    MLAftErrorCodes[MLAftErrorCodes["ERR_INTERNAL"] = 11198] = "ERR_INTERNAL";
    MLAftErrorCodes[MLAftErrorCodes["ERR_UNKNOWN"] = 11199] = "ERR_UNKNOWN";
})(MLAftErrorCodes || (MLAftErrorCodes = {}));
export var MLAFTEventCodes;
(function (MLAFTEventCodes) {
    MLAFTEventCodes[MLAFTEventCodes["PAUSE_EVENT"] = 2] = "PAUSE_EVENT";
    MLAFTEventCodes[MLAFTEventCodes["STOP_EVENT"] = 3] = "STOP_EVENT";
    MLAFTEventCodes[MLAFTEventCodes["UPLOADED_EVENT"] = 1] = "UPLOADED_EVENT";
})(MLAFTEventCodes || (MLAFTEventCodes = {}));
export var MLAftConstants;
(function (MLAftConstants) {
    MLAftConstants["LANGUAGE_ZH"] = "zh";
    MLAftConstants["LANGUAGE_EN_US"] = "en-US";
})(MLAftConstants || (MLAftConstants = {}));
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
export var MLSoundDectSoundTypeResult;
(function (MLSoundDectSoundTypeResult) {
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_DECT_ERROR_NO_MEM"] = 12201] = "SOUND_DECT_ERROR_NO_MEM";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_DECT_ERROR_FATAL_ERROR"] = 12202] = "SOUND_DECT_ERROR_FATAL_ERROR";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_DECT_ERROR_AUDIO"] = 12203] = "SOUND_DECT_ERROR_AUDIO";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_DECT_ERROR_INTERNAL"] = 12298] = "SOUND_DECT_ERROR_INTERNAL";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_LAUGHTER"] = 0] = "SOUND_EVENT_TYPE_LAUGHTER";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_BABY_CRY"] = 1] = "SOUND_EVENT_TYPE_BABY_CRY";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_SNORING"] = 2] = "SOUND_EVENT_TYPE_SNORING";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_SNEEZE"] = 3] = "SOUND_EVENT_TYPE_SNEEZE";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_SCREAMING"] = 4] = "SOUND_EVENT_TYPE_SCREAMING";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_MEOW"] = 5] = "SOUND_EVENT_TYPE_MEOW";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_BARK"] = 6] = "SOUND_EVENT_TYPE_BARK";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_WATER"] = 7] = "SOUND_EVENT_TYPE_WATER";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_CAR_ALARM"] = 8] = "SOUND_EVENT_TYPE_CAR_ALARM";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_DOOR_BELL"] = 9] = "SOUND_EVENT_TYPE_DOOR_BELL";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_KNOCK"] = 10] = "SOUND_EVENT_TYPE_KNOCK";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_ALARM"] = 11] = "SOUND_EVENT_TYPE_ALARM";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_STEAM_WHISTLE"] = 12] = "SOUND_EVENT_TYPE_STEAM_WHISTLE";
})(MLSoundDectSoundTypeResult || (MLSoundDectSoundTypeResult = {}));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBaUJBLE9BQU8sc0VBT04sTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQWdFSiw0QkFBaUI7Ozs7SUF1RTNDOzs7O09BSUc7SUFDSCx5QkFBTSxhQUFDLFNBQW9CO0lBSTNCOzs7T0FHRztJQUNILDZCQUFVO0lBSVY7OztPQUdHO0lBQ0gsMEJBQU87SUFJUDs7O09BR0c7SUFDSCxzQ0FBbUI7SUFJbkI7OztPQUdHO0lBQ0gsOEJBQVc7SUFJWDs7OztPQUlHO0lBQ0gsaUNBQWMsYUFBQyxpQkFBcUM7SUFJcEQ7Ozs7T0FJRztJQUNILHFDQUFrQixhQUNkLG1CQUF5QztJQUs3Qzs7OztPQUlHO0lBQ0gscUNBQWtCLGFBQUMsTUFBaUI7SUFJcEM7Ozs7T0FJRztJQUNILHNDQUFtQixhQUNmLGlCQUF1RDtJQUszRDs7OztPQUlHO0lBQ0gsMEJBQU8sYUFBQyxVQUFzQjtJQUk5Qjs7OztPQUlHO0lBQ0gsNkJBQVUsYUFBQyxhQUE0QjtJQUl2Qzs7OztPQUlHO0lBQ0gsK0JBQVksYUFBQyxHQUFRO0lBSXJCOzs7O09BSUc7SUFDSCwrQkFBWSxhQUFDLEdBQVE7SUFJckI7OztPQUdHO0lBQ0gsK0JBQVk7SUFJWjs7O09BR0c7SUFDSCxnQ0FBYTswQkF0TWIsbUNBQWE7Ozs7OzswQkFFYix3Q0FBa0I7Ozs7OzswQkFFbEIsc0NBQWdCOzs7Ozs7MEJBRWhCLGtDQUFZOzs7Ozs7MEJBRVoseUNBQW1COzs7Ozs7MEJBRW5CLGlEQUEyQjs7Ozs7OzBCQUUzQixnREFBMEI7Ozs7OzswQkFFMUIsOENBQXdCOzs7Ozs7MEJBRXhCLDZDQUF1Qjs7Ozs7OzBCQUV2Qix3Q0FBa0I7Ozs7Ozsw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SUFDckIsdURBQVcsQ0FBQTtJQUNYLHlEQUFZLENBQUE7SUFDWix1RUFBbUIsQ0FBQTtJQUNuQixtRUFBaUIsQ0FBQTtJQUNqQixvRkFBMEIsQ0FBQTtJQUMxQiwwRUFBcUIsQ0FBQTtJQUNyQixnRUFBZ0IsQ0FBQTtJQUNoQixrRUFBaUIsQ0FBQTtJQUNqQixrRUFBaUIsQ0FBQTtJQUNqQix3RkFBNEIsQ0FBQTtJQUM1QixvRkFBMEIsQ0FBQTtJQUMxQiw4RUFBdUIsQ0FBQTtJQUN2Qiw0REFBYyxDQUFBO0lBQ2Qsb0VBQWtCLENBQUE7SUFDbEIsd0VBQW9CLENBQUE7SUFDcEIsb0VBQWtCLENBQUE7QUFDdEIsQ0FBQyxFQXhCVyxhQUFhLEtBQWIsYUFBYSxRQXdCeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIENvcHlyaWdodCAyMDIwLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuIFxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcbiAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiBcbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgICBQbHVnaW4sXG4gICAgQ29yZG92YSxcbiAgICBDb3Jkb3ZhUHJvcGVydHksXG4gICAgQ29yZG92YUluc3RhbmNlLFxuICAgIEluc3RhbmNlUHJvcGVydHksXG4gICAgSW9uaWNOYXRpdmVQbHVnaW4sXG59IGZyb20gXCJAaW9uaWMtbmF0aXZlL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuLyoqXG4gKiBAbmFtZSBITVNNTEtpdFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSG1zTWwgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2htcy1tbCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaG1zTWw6IEhtc01sKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5obXNNbC5mdW5jdGlvbk5hbWUoJ0hlbGxvJywgMTIzKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiBcIkhNU01MS2l0XCIsXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1tbFwiLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgICBwbHVnaW5SZWY6IFwiSE1TTUxLaXRcIiwgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogXCJITVNGYWNlQm9keVByb3ZpZGVyXCIsXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1tbFwiLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgICBwbHVnaW5SZWY6IFwiSE1TRmFjZUJvZHlQcm92aWRlclwiLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLCAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiBcIkhNU0ltYWdlU2VydmljZVByb3ZpZGVyXCIsXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1tbFwiLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgICBwbHVnaW5SZWY6IFwiSE1TSW1hZ2VTZXJ2aWNlUHJvdmlkZXJcIiwgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogXCJITVNMYW5ndWFnZVNlcnZpY2VQcm92aWRlclwiLFxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtbWxcIiwgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gICAgcGx1Z2luUmVmOiBcIkhNU0xhbmd1YWdlU2VydmljZVByb3ZpZGVyXCIsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6IFwiSE1TVGV4dFNlcnZpY2VQcm92aWRlclwiLFxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtbWxcIiwgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gICAgcGx1Z2luUmVmOiBcIkhNU1RleHRTZXJ2aWNlUHJvdmlkZXJcIiwgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICAgIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogXCJITVNWb2ljZVNlcnZpY2VQcm92aWRlclwiLFxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtbWxcIiwgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gICAgcGx1Z2luUmVmOiBcIkhNU1ZvaWNlU2VydmljZVByb3ZpZGVyXCIsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNNTEtpdCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEZhY2VTZXR0aW5nID0gTUxGYWNlU2V0dGluZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTExvY2FsVGV4dFNldHRpbmcgPSBNTExvY2FsVGV4dFNldHRpbmc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgaWNyVm5DYXB0dXJlVHlwZSA9IGljckNhcHR1cmVUeXBlO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MVGV4dENvbmZpZyA9IE1MVGV4dENvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFJlbW90ZVRleHRTZXR0aW5nID0gTUxSZW1vdGVUZXh0U2V0dGluZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEltYWdlQ2xhc3NpZmljYXRpb25Db25maWcgPSBNTEltYWdlQ2xhc3NpZmljYXRpb25Db25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxJbWFnZVNlZ21lbnRhdGlvblNldHRpbmcgPSBNTEltYWdlU2VnbWVudGF0aW9uU2V0dGluZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEltYWdlU2VnbWVudGF0aW9uU2NlbmUgPSBNTEltYWdlU2VnbWVudGF0aW9uU2NlbmU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxSZW1vdGVMYW5kbWFya1NldHRpbmcgPSBNTFJlbW90ZUxhbmRtYXJrU2V0dGluZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEJjckNhcHR1cmVDb25maWcgPSBNTEJjckNhcHR1cmVDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxHY3JDYXB0dXJlVUlDb25maWcgPSBNTEdjckNhcHR1cmVVSUNvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEJjclJlc3VsdENvbmZpZyA9IE1MQmNyUmVzdWx0Q29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIEhhbmRrZXlQb2ludENvbmZpZyA9IEhhbmRrZXlQb2ludENvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBJbWdTdXBlclJlc29sdXRpb25Db25maWcgPSBJbWdTdXBlclJlc29sdXRpb25Db25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTWxPYmplY3RBbmFseXNlckNvbmZpZyA9IE1sT2JqZWN0QW5hbHlzZXJDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgRG93bmxvYWRTdHJhdGVneUN1c3RvbSA9IERvd25sb2FkU3RyYXRlZ3lDdXN0b207XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgRkVBVFVSRSA9IEZFQVRVUkU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTEFOR1VBR0UgPSBMQU5HVUFHRTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFR0c0NvbnN0YW50cyA9IE1MVHRzQ29uc3RhbnRzO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIENvbG9ycyA9IENvbG9ycztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBSZWN0U3R5bGUgPSBSZWN0U3R5bGU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxTa2VsZXRvbkNvbmZpZyA9IE1MU2tlbGV0b25Db25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxGbGFzaE1vZGUgPSBNTEZsYXNoTW9kZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTExlbnNUeXBlID0gTUxMZW5zVHlwZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEFuYWx5emVyTmFtZSA9IE1MQW5hbHl6ZXJOYW1lO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MRnJhbWUgPSBNTEZyYW1lO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MRm9ybVJlY29naXRpb25Db25maWcgPSBNTEZvcm1SZWNvZ2l0aW9uQ29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MRmFjZUNvbmZpZ3MgPSBNTEZhY2VDb25maWdzO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MUHJvZHVjdENvbmZpZyA9IE1MUHJvZHVjdENvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTExpdmVuZXNzQ29uZmlnID0gTUxMaXZlbmVzc0NvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFJ0dExhbmd1YWdlcyA9IE1MUnR0TGFuZ3VhZ2VzO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MUnR0U2NlbmVzID0gTUxSdHRTY2VuZXM7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgZ2NyQ2FwdHVyZVR5cGUgPSBnY3JDYXB0dXJlVHlwZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBzeW5jVHlwZSA9IHN5bmNUeXBlO1xuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBBZGp1c3RzIHRoZSBmb2NhbCBsZW5ndGggb2YgdGhlIGNhbWVyYSBiYXNlZCBvbiB0aGUgc2NhbGluZyBjb2VmZmljaWVudCAoZGlnaXRhbCB6b29tKS5cbiAgICAgKiBAcGFyYW0gIHtkb1pvb21SZXF9IGRvWm9vbVJlcSBSZXBlcmVzZW50cyB0aGUgbmVjZXNzYXJ5IHBhcmFtZXRlcnMuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZG9ab29tKGRvWm9vbVJlcTogZG9ab29tUmVxKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIE1vbml0b3JzIHBob3RvZ3JhcGhpbmcuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgcGhvdG9ncmFwaCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogQ2xvc2UgbGVucyBlbmdpbmUuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZGVzdHJveSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogT2J0YWlucyB0aGUgc2l6ZSBvZiB0aGUgcHJldmlldyBpbWFnZSBvZiBhIGNhbWVyYS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBnZXREaXNwbGF5RGltZW5zaW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBPYnRhaW5zIHRoZSBzZWxlY3RlZCBjYW1lcmEgdHlwZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBnZXRMZW5zVHlwZSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogSXQgY2hlY2tzIHRoZSBwZXJtaXNzaW9ucyByZXF1aXJlZCB0byB1c2UgdGhpcyBLaXQuXG4gICAgICogQHBhcmFtICB7Q2hlY2tQZXJtaXNzaW9uUmVxfSBwZXJtaXNzaW9uTGlzdElucHV0IFJlcHJlc2VudHMgdGhlIGxpc3QgaW4gd2hpY2ggcGVybWlzc2lvbiBuYW1lcyBhcmUga2VwdC5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBoYXNQZXJtaXNzaW9ucyhwZXJtaXNzaW9uTGlzdFJlcTogQ2hlY2tQZXJtaXNzaW9uUmVxKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIEl0IGdldHMgdGhlIG5lY2Vzc2FyeSBwZXJtaXNzaW9ucy5cbiAgICAgKiBAcGFyYW0gIHtSZXF1ZXN0UGVybWlzc2lvblJlcX0gcGVybWlzc2lvbkxpc3RJbnB1dCBSZXByZXNlbnRzIHRoZSBsaXN0IGluIHdoaWNoIHBlcm1pc3Npb24gbmFtZXMgYXJlIGtlcHQuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgcmVxdWVzdFBlcm1pc3Npb25zKFxuICAgICAgICBwZXJtaXNzaW9uTGlzdElucHV0OiBSZXF1ZXN0UGVybWlzc2lvblJlcVxuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBJdCBzZXRzIEFwaSBLZXkgb3IgYWNjZXNzIHRva2VuIGZvciBhcHBsaWNhdGlvbi5cbiAgICAgKiBAcGFyYW0gIHtjb25maWdSZXF9IHBhcmFtcyBSZXByZXNlbnRzIHlvdXIgQVBJX0tFWS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBzZXJ2aWNlSW5pdGlhbGl6ZXIocGFyYW1zOiBjb25maWdSZXEpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBzZXJ2aWNlIHJlY29nbml6ZSB0aGUgaW1hZ2UgZnJvbSB0aGUgcGljdHVyZSBhbmQgcmV0dXJuIHdoYXQgdGhlIHBpY3R1cmUgY2FuIGJlIHdpdGggdGhlIHBlcmNlbnRhZ2VzLiBVc2UgTUwgTGlicmFyaWVzLlxuICAgICAqIEBwYXJhbSAge293bkN1c3RvbU1vZGVsUmVxIHwgZG93bmxvYWRNb2RlbFJlcX0gb3duQ3VzdG9tTW9kZWxSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBjdXN0b20gbW9kZWwgYW5hbHlzZXIuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgY3VzdG9tTW9kZWxBbmFseXNlcihcbiAgICAgICAgb3duQ3VzdG9tTW9kZWxSZXE6IG93bkN1c3RvbU1vZGVsUmVxIHwgZG93bmxvYWRNb2RlbFJlcVxuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBPYnRhaW5zIEZyYW1lLlxuICAgICAqIEBwYXJhbSAge21sRnJhbWVSZXF9IG1sRnJhbWVSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIG1sRnJhbWUobWxGcmFtZVJlcTogbWxGcmFtZVJlcSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBBbiBhcHAgaW5mb3JtYXRpb24gY2xhc3MgdXNlZCB0byBzdG9yZSBiYXNpYyBpbmZvcm1hdGlvbiBhYm91dCBhcHBzIHdpdGggdGhlIEhNUyBDb3JlIE1MIFNESyBpbnRlZ3JhdGVkIGFuZCBjb21wbGV0ZSB0aGUgaW5pdGlhbGl6YXRpb24gb2YgTUwgS2l0LiBXaGVuIHVzaW5nIGNsb3VkIHNlcnZpY2VzIG9mIHRoZSBNTCBLaXQsIHlvdSBuZWVkIHRvIHNldCB0aGUgYXBpS2V5IG9mIHlvdXIgYXBwLlxuICAgICAqIEBwYXJhbSAge2FwcFNldHRpbmdSZXF9IGFwcFNldHRpbmdSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGFwcFNldHRpbmcoYXBwU2V0dGluZ1JlcTogYXBwU2V0dGluZ1JlcSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gY29sbGVjdCBzdGF0aXN0aWNzIG9uIHRoZSBjdXJyZW50IGFwcC5cbiAgICAgKiBAcGFyYW0ge2FueX0gYW55XG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgc2V0U3RhdGlzdGljKGFueTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0byBjb2xsZWN0IHN0YXRpc3RpY3Mgb24gdGhlIGN1cnJlbnQgYXBwLlxuICAgICAqKiBAcGFyYW0ge2FueX0gYW55XG4gICAgICogIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGdldFN0YXRpc3RpYyhhbnk6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIHNlcnZpY2UgZW5hYmxlIGxvZ2dlciBzZXJ2aWNlLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGVuYWJsZUxvZ2dlcigpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBzZXJ2aWNlIGRpc2FibGUgbG9nZ2VyIHNlcnZpY2UuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU0ZhY2VCb2R5UHJvdmlkZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxGYWNlU2V0dGluZyA9IE1MRmFjZVNldHRpbmc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxMb2NhbFRleHRTZXR0aW5nID0gTUxMb2NhbFRleHRTZXR0aW5nO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MVGV4dENvbmZpZyA9IE1MVGV4dENvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFJlbW90ZVRleHRTZXR0aW5nID0gTUxSZW1vdGVUZXh0U2V0dGluZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEltYWdlQ2xhc3NpZmljYXRpb25Db25maWcgPSBNTEltYWdlQ2xhc3NpZmljYXRpb25Db25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxJbWFnZVNlZ21lbnRhdGlvblNldHRpbmcgPSBNTEltYWdlU2VnbWVudGF0aW9uU2V0dGluZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEltYWdlU2VnbWVudGF0aW9uU2NlbmUgPSBNTEltYWdlU2VnbWVudGF0aW9uU2NlbmU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxSZW1vdGVMYW5kbWFya1NldHRpbmcgPSBNTFJlbW90ZUxhbmRtYXJrU2V0dGluZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEJjckNhcHR1cmVDb25maWcgPSBNTEJjckNhcHR1cmVDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxHY3JDYXB0dXJlVUlDb25maWcgPSBNTEdjckNhcHR1cmVVSUNvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEJjclJlc3VsdENvbmZpZyA9IE1MQmNyUmVzdWx0Q29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIEhhbmRrZXlQb2ludENvbmZpZyA9IEhhbmRrZXlQb2ludENvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBJbWdTdXBlclJlc29sdXRpb25Db25maWcgPSBJbWdTdXBlclJlc29sdXRpb25Db25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTWxPYmplY3RBbmFseXNlckNvbmZpZyA9IE1sT2JqZWN0QW5hbHlzZXJDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgRG93bmxvYWRTdHJhdGVneUN1c3RvbSA9IERvd25sb2FkU3RyYXRlZ3lDdXN0b207XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgRkVBVFVSRSA9IEZFQVRVUkU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTEFOR1VBR0UgPSBMQU5HVUFHRTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFR0c0NvbnN0YW50cyA9IE1MVHRzQ29uc3RhbnRzO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIENvbG9ycyA9IENvbG9ycztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBSZWN0U3R5bGUgPSBSZWN0U3R5bGU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxTa2VsZXRvbkNvbmZpZyA9IE1MU2tlbGV0b25Db25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxGbGFzaE1vZGUgPSBNTEZsYXNoTW9kZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTExlbnNUeXBlID0gTUxMZW5zVHlwZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEFuYWx5emVyTmFtZSA9IE1MQW5hbHl6ZXJOYW1lO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MRnJhbWUgPSBNTEZyYW1lO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MRm9ybVJlY29naXRpb25Db25maWcgPSBNTEZvcm1SZWNvZ2l0aW9uQ29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MRmFjZUNvbmZpZ3MgPSBNTEZhY2VDb25maWdzO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MUHJvZHVjdENvbmZpZyA9IE1MUHJvZHVjdENvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTExpdmVuZXNzQ29uZmlnID0gTUxMaXZlbmVzc0NvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFJ0dExhbmd1YWdlcyA9IE1MUnR0TGFuZ3VhZ2VzO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MUnR0U2NlbmVzID0gTUxSdHRTY2VuZXM7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgZ2NyQ2FwdHVyZVR5cGUgPSBnY3JDYXB0dXJlVHlwZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBzeW5jVHlwZSA9IHN5bmNUeXBlO1xuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKi9cbiAgICBzdGlsbEdlc3R1cmVBbmFseXNlcihzdGlsbEdlc3R1cmVSZXE6IHN0aWxsR2VzdHVyZVJlcSk6IFByb21pc2U8TUxHZXN0dXJlPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKi9cbiAgICBzdG9wU3RpbGxHZXN0dXJlQW5hbHlzZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICovXG4gICAgZ2V0R2VzdHVyZUFuYWx5c2VyU2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGUgZmFjZSBkZXRlY3Rpb24gc2VydmljZSBjYW4gZGV0ZWN0IHRoZSBmYWNlIGNvbnRvdXIsIHJlY29nbml6ZSBmYWNpYWwgZmVhdHVyZXMsIGFuZCBkZXRlcm1pbmUgZmFjaWFsIGV4cHJlc3Npb25zIGZvciBhIHBlcnNvbi5cbiAgICAgKiBAcGFyYW0gIHtmYWNlUmVxfSBmYWNlUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgZmFjZSBkZXRlY3Rpb24uXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxTdGlsbEZhY2VBbmFseXNlcj5cbiAgICAgKi9cbiAgICBzdGlsbEZhY2VBbmFseXNlcihmYWNlUmVxOiBmYWNlUmVxKTogUHJvbWlzZTxNTEZhY2U+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICovXG4gICAgc3RpbGxGYWNlQW5hbHlzZXJJbmZvKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSAge2ZhY2VWZXJpZmljYXRpb25SZXF9IGZhY2VWZXJpZmljYXRpb25SZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBmYWNlIGRldGVjdGlvbi5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPE1MRmFjZVZlcmlmaWNhdGlvblJlc3VsdD5cbiAgICAgKi9cbiAgICBzZXRGYWNlRGV0ZWN0ZWQoXG4gICAgICAgIG1heEZhY2VWZXJpZmljYXRpb25SZXE6IG1heEZhY2VWZXJpZmljYXRpb25SZXFcbiAgICApOiBQcm9taXNlPE1MRmFjZVZlcmlmaWNhdGlvblJlc3VsdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICovXG4gICAgZ2V0RmFjZVZlcmlmaWNhdGlvbkFuYWx5c2VyU2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gIHtmYWNlVmVyaWZpY2F0aW9uUmVxfSBmYWNlVmVyaWZpY2F0aW9uUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgZmFjZSBkZXRlY3Rpb24uXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxNTEZhY2VWZXJpZmljYXRpb25SZXN1bHQ+XG4gICAgICovXG4gICAgc3RpbGxGYWNlVmVyaWZpY2F0aW9uQW5hbHlzZXIoXG4gICAgICAgIGZhY2VWZXJpZmljYXRpb25SZXE6IGZhY2VWZXJpZmljYXRpb25SZXFcbiAgICApOiBQcm9taXNlPE1MRmFjZVZlcmlmaWNhdGlvblJlc3VsdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCBmYWNlIHJlY29nbml0aW9uIHNlcnZpY2UuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgc3RvcFN0aWxsRmFjZVZlcmlmaWNhdGlvbkFuYWx5c2VyKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGdpdmVzIHRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgZmFjZSByZWNvZ25pdGlvbiBzZXJ2aWNlLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHN0aWxGYWNlQW5hbHlzZXJJbmZvKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wIGZhY2UgcmVjb2duaXRpb24gc2VydmljZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBzdG9wU3RpbGxGYWNlQW5hbHlzZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgVGhlIHNrZWxldG9uIGRldGVjdGlvbiBzZXJ2aWNlIGRldGVjdHMgYW5kIGxvY2F0ZXMga2V5IHBvaW50cyBvZiB0aGUgaHVtYW4gYm9keSwgc3VjaCBhcyB0aGUgdG9wIG9mIHRoZSBoZWFkLCBuZWNrLCBzaG91bGRlciwgZWxib3csIHdyaXN0LCBoaXAsIGtuZWUsIGFuZCBhbmtsZS5cbiAgICogQHBhcmFtICB7c3RpbGxTa2VsZXRvblJlcSB8c3RpbGxTa2VsZXRvblNpbWlsYXJpdHlSZXF9IHN0aWxsU2tlbGV0b25SZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBzdGlsbCBza2VsZXRvbiBkZXRlY3Rpb24uXG4gICAqIEByZXR1cm5zIFByb21pc2U8U3RpbGxTa2VsZXRvbkFuYWx5c2VyPlxuICAgKi9cbiAgICBzdGlsbFNrZWxldG9uQW5hbHlzZXIoXG4gICAgICAgIHN0aWxsU2tlbGV0b25SZXE6IHN0aWxsU2tlbGV0b25SZXEgfCBzdGlsbFNrZWxldG9uU2ltaWxhcml0eVJlcVxuICAgICk6IFByb21pc2U8TUxTa2VsZXRvbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhlIGxpdmVuZXNzIGRldGVjdGlvbiBzZXJ2aWNlIHN1cHBvcnRzIHNpbGVudCBsaXZlbmVzcyBkZXRlY3Rpb24gYW5kIGNhcHR1cmVzIGZhY2VzIGluIHJlYWwgdGltZS4gSXQgY2FuIGRldGVybWluZSB3aGV0aGVyIGEgZmFjZSBpcyBvZiBhIHJlYWwgdXNlciBvciBpcyBhIGZhY2UgYXR0YWNrXG4gICAgICogKGZvciBleGFtcGxlLCBmYWNlIHJlY2FwdHVyZSBpbWFnZSwgZmFjZSByZWNhcHR1cmUgdmlkZW8sIG9yIGZhY2UgbWFzaykgd2l0aG91dCByZXF1aXJpbmcgdGhlIHVzZXIgdG8gZm9sbG93IHNwZWNpZmljIGluc3RydWN0aW9ucy5cbiAgICAgKiBAcGFyYW0gIHtsaXZlbmVzc0RldGVjdGlvblJlcX0gbGl2ZW5lc3NEZXRlY3Rpb25SZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8TGl2ZUxpdmVuZXNzQW5hbHlzZXI+XG4gICAgICovXG4gICAgbGl2ZUxpdmVuZXNzQW5hbHlzZXIoXG4gICAgICAgIGxpdmVuZXNzRGV0ZWN0aW9uUmVxOiBsaXZlbmVzc0RldGVjdGlvblJlcVxuICAgICk6IFByb21pc2U8TUxMaXZlbmVzc0NhcHR1cmVSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgc2VydmljZSBjYW4gZGV0ZWN0cyAyMSBoYW5kIGtleXBvaW50cyAoaW5jbHVkaW5nIGZpbmdlcnRpcHMsIGtudWNrbGVzLCBhbmQgd3Jpc3RzKSBhbmQgcmV0dXJuIHBvc2l0aW9ucyBvZiB0aGUga2V5cG9pbnRzLlxuICAgICAqIEBwYXJhbSAge3N0aWxsSGFuZEtleXBvaW50UmVxIH0gc3RpbGxIYW5kS2V5cG9pbnRSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBzdGlsbCBoYW5ka2V5IGFuYWx5c2VyLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8U3RpbGxIYW5kS2V5QW5hbHlzZXI+XG4gICAgICovXG4gICAgc3RpbGxIYW5ka2V5QW5hbHlzZXIoXG4gICAgICAgIHN0aWxsSGFuZEtleXBvaW50UmVxOiBzdGlsbEhhbmRLZXlwb2ludFJlcVxuICAgICk6IFByb21pc2U8TUxIYW5kS2V5cG9pbnRzPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wIGhhbmQgYW5hbHl6ZXIgc2VydmljZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBzdG9wU3RpbGxIYW5kS2V5QW5hbHlzZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHJldHVybnMgZmFjZSBhbmFseXplciBzZXR0aW5ncy5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBnZXRGYWNlQW5hbHlzZXJTZXR0aW5nKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCAgcmV0dXJucyBoYW5kIGFuYWx5emVyIHNldHRpbmdzLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGdldEhhbmRLZXlBbmFseXNlclNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3Agc2tlbGV0b24gYW5hbHl6ZXIgc2VydmljZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBzdG9wU3RpbGxTa2VsZXRvbkFuYWx5c2VyKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TSW1hZ2VTZXJ2aWNlUHJvdmlkZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxGYWNlU2V0dGluZyA9IE1MRmFjZVNldHRpbmc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgZ2NyQ2FwdHVyZVR5cGUgPSBnY3JDYXB0dXJlVHlwZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBzeW5jVHlwZSA9IHN5bmNUeXBlO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MTG9jYWxUZXh0U2V0dGluZyA9IE1MTG9jYWxUZXh0U2V0dGluZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFRleHRDb25maWcgPSBNTFRleHRDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxSZW1vdGVUZXh0U2V0dGluZyA9IE1MUmVtb3RlVGV4dFNldHRpbmc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxJbWFnZUNsYXNzaWZpY2F0aW9uQ29uZmlnID0gTUxJbWFnZUNsYXNzaWZpY2F0aW9uQ29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MSW1hZ2VTZWdtZW50YXRpb25TZXR0aW5nID0gTUxJbWFnZVNlZ21lbnRhdGlvblNldHRpbmc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxJbWFnZVNlZ21lbnRhdGlvblNjZW5lID0gTUxJbWFnZVNlZ21lbnRhdGlvblNjZW5lO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MUmVtb3RlTGFuZG1hcmtTZXR0aW5nID0gTUxSZW1vdGVMYW5kbWFya1NldHRpbmc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxCY3JDYXB0dXJlQ29uZmlnID0gTUxCY3JDYXB0dXJlQ29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MR2NyQ2FwdHVyZVVJQ29uZmlnID0gTUxHY3JDYXB0dXJlVUlDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxCY3JSZXN1bHRDb25maWcgPSBNTEJjclJlc3VsdENvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBIYW5ka2V5UG9pbnRDb25maWcgPSBIYW5ka2V5UG9pbnRDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgSW1nU3VwZXJSZXNvbHV0aW9uQ29uZmlnID0gSW1nU3VwZXJSZXNvbHV0aW9uQ29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1sT2JqZWN0QW5hbHlzZXJDb25maWcgPSBNbE9iamVjdEFuYWx5c2VyQ29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIERvd25sb2FkU3RyYXRlZ3lDdXN0b20gPSBEb3dubG9hZFN0cmF0ZWd5Q3VzdG9tO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIEZFQVRVUkUgPSBGRUFUVVJFO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIExBTkdVQUdFID0gTEFOR1VBR0U7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxUdHNDb25zdGFudHMgPSBNTFR0c0NvbnN0YW50cztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBDb2xvcnMgPSBDb2xvcnM7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgUmVjdFN0eWxlID0gUmVjdFN0eWxlO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MU2tlbGV0b25Db25maWcgPSBNTFNrZWxldG9uQ29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MRmxhc2hNb2RlID0gTUxGbGFzaE1vZGU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxMZW5zVHlwZSA9IE1MTGVuc1R5cGU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxBbmFseXplck5hbWUgPSBNTEFuYWx5emVyTmFtZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEZyYW1lID0gTUxGcmFtZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEZvcm1SZWNvZ2l0aW9uQ29uZmlnID0gTUxGb3JtUmVjb2dpdGlvbkNvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEZhY2VDb25maWdzID0gTUxGYWNlQ29uZmlncztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFByb2R1Y3RDb25maWcgPSBNTFByb2R1Y3RDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxMaXZlbmVzc0NvbmZpZyA9IE1MTGl2ZW5lc3NDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxSdHRMYW5ndWFnZXMgPSBNTFJ0dExhbmd1YWdlcztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFJ0dFNjZW5lcyA9IE1MUnR0U2NlbmVzO1xuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCByZXByZXNlbnRzIHRoZSBpbWFnZSBjbGFzc2lmaWNhdGlvbiBTREsuXG4gICAgICogQHBhcmFtICB7bG9jYWxJbWFnZUNsYXNzaWZpY2F0aW9uUmVxfHJlbW90ZUltYWdlQ2xhc3NpZmljYXRpb25SZXF9IGltYWdlQ2xhc3NpZmljYXRpb25JbnB1dCBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIGNsYXNzaWZ5IG9iamVjdHMuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxJbWFnZUNsYXNzaWZpY2F0aW9uQW5hbHlzZXI+XG4gICAgICovXG4gICAgaW1hZ2VDbGFzc2lmaWNhdGlvbkFuYWx5c2VyKFxuICAgICAgICBpbWFnZUNsYXNzaWZpY2F0aW9uSW5wdXQ6XG4gICAgICAgICAgICB8IGxvY2FsSW1hZ2VDbGFzc2lmaWNhdGlvblJlcVxuICAgICAgICAgICAgfCByZW1vdGVJbWFnZUNsYXNzaWZpY2F0aW9uUmVxXG4gICAgKTogUHJvbWlzZTxNTEltYWdlQ2xhc3NpZmljYXRpb24+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3AgaW1hZ2UgY2xhc3NpZmljYXRpb24gYW5hbHlzZXIuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XG4gICAgICovXG4gICAgc3RvcEltYWdlQ2xhc3NpZmljYXRpb25BbmFseXNlcigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhlIGltYWdlIHNlZ21lbnRhdGlvbiBzZXJ2aWNlIHNlZ21lbnRzIHNhbWUgZWxlbWVudHMgKHN1Y2ggYXMgaHVtYW4gYm9keSwgcGxhbnQsIGFuZCBza3kpIGZyb20gYW4gaW1hZ2UuIFRoZSBlbGVtZW50cyBzdXBwb3J0ZWQgaW5jbHVkZSBodW1hbiBib2R5LCBza3ksIHBsYW50LCBmb29kIGFuZCBvdGhlcnMuXG4gICAgICogQHBhcmFtICB7aW1nU2VnbWVudGF0aW9uUmVxfSBpbWdTZWdtZW50YXRpb25SZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBpbWFnZSBzZWdtZW50YXRpb24uXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxTZWdtZW50YXRpb25BbmFseXNlcj5cbiAgICAgKi9cbiAgICBpbWdTZWdtZW50YXRpb24oXG4gICAgICAgIGltZ1NlZ21lbnRhdGlvblJlcTogaW1nU2VnbWVudGF0aW9uUmVxXG4gICAgKTogUHJvbWlzZTxNTEltYWdlU2VnbWVudGF0aW9uPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wIGltYWdlIHNlZ21lbnRhdGlvbiBzZXJ2aWNlLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHN0b3BJbWdTZWdtZW50YXRpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoZSBsYW5kbWFyayByZWNvZ25pdGlvbiBzZXJ2aWNlIGVuYWJsZXMgeW91IHRvIG9idGFpbiB0aGUgbGFuZG1hcmsgbmFtZSwgbGFuZG1hcmsgbG9uZ2l0dWRlIGFuZCBsYXRpdHVkZSwgYW5kIGNvbmZpZGVuY2Ugb2YgdGhlIGlucHV0IGltYWdlLlxuICAgICAqIEBwYXJhbSAge2ltZ0xhbmRNYXJrUmVxfSBpbWdMYW5kTWFya1JlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIGltYWdlIGxhbmRtYXJrIGFuYWx5c2VyLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8SW1hZ2VMYW5kbWFya0FuYWx5c2VyPlxuICAgICAqL1xuICAgIGltZ0xhbmRNYXJrQW5hbHlzZXIoXG4gICAgICAgIGltZ0xhbmRNYXJrUmVxOiBpbWdMYW5kTWFya1JlcVxuICAgICk6IFByb21pc2U8TUxSZW1vdGVMYW5kbWFyaz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCBpbWFnZSBsYW5kbWFyayBhbmFseXNlciBzZXJ2aWNlLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGltZ0xhbmRNYXJrQW5hbHlzZXJTdG9wKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGUgb2JqZWN0IGRldGVjdGlvbiBzZXJ2aWNlIGNhbiBkZXRlY3QgYW5kIHRyYWNrIG11bHRpcGxlIG9iamVjdHMgaW4gYW4gaW1hZ2UuXG4gICAgICogQHBhcmFtICB7b2JqZWN0UmVxfSBvYmplY3RSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBvYmplY3QgZGV0ZWN0aW9uLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8SW1hZ2VPYmplY3RBbmFseXNlcj5cbiAgICAgKi9cbiAgICBvYmplY3RBbmFseXNlcihvYmplY3RSZXE6IG9iamVjdFJlcSk6IFByb21pc2U8TUxPYmplY3Q+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoZSBzY2VuZSBkZXRlY3Rpb24gc2VydmljZSBjYW4gY2xhc3NpZnkgdGhlIHNjZW5hcmlvIGNvbnRlbnQgb2YgaW1hZ2VzIGFuZCBhZGQgbGFiZWxzLCBzdWNoIGFzIG91dGRvb3Igc2NlbmVyeSwgaW5kb29yIHBsYWNlcywgYW5kIGJ1aWxkaW5ncywgdG8gaGVscCB1bmRlcnN0YW5kIHRoZSBpbWFnZSBjb250ZW50LlxuICAgICAqICAgQHBhcmFtICB7c3RpbGxTY2VuZVJlcX0gc3RpbGxTY2VuZVJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIFNjZW5lIGFuYWx5c2VyLlxuICAgICAqICBAcmV0dXJucyBQcm9taXNlIDxhbnk+XG4gICAgICovXG4gICAgc3RpbGxTY2VuZUFuYWx5c2VyKFxuICAgICAgICBzdGlsbFNjZW5lUmVxOiBzdGlsbFNjZW5lUmVxXG4gICAgKTogUHJvbWlzZTxNTFNjZW5lRGV0ZWN0aW9uUmVzdWx0PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgIFRoaXMgc2VydmljZSBjYW4gYXV0b21hdGljYWxseSBpZGVudGlmeSB0aGUgbG9jYXRpb24gb2YgYSBkb2N1bWVudCBpbiBhbiBpbWFnZSBhbmQgYWRqdXN0IHRoZSBzaG9vdGluZyBhbmdsZSB0byB0aGUgYW5nbGUgZmFjaW5nIHRoZSBkb2N1bWVudCwgZXZlbiBpZiB0aGUgZG9jdW1lbnQgaXMgdGlsdGVkLlxuICAgKiBAcGFyYW0gIHtkb2N1bWVudFNrZXdDb3JyZWN0aW9uUmVxfSBkb2N1bWVudFNrZXdDb3JyZWN0aW9uUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgZG9jdW1lbnQgc2tldyBjb3JyZWN0aW9uLlxuICAgKiBAcmV0dXJucyBQcm9taXNlPERvY3VtZW50U2tld0FuYWx5c2VyPlxuICAgKi9cbiAgICBkb2N1bWVudFNrZXdDb3JyZWN0aW9uQW5hbHlzZXIoXG4gICAgICAgIGRvY3VtZW50U2tld0NvcnJlY3Rpb25SZXE6IGRvY3VtZW50U2tld0NvcnJlY3Rpb25SZXFcbiAgICApOiBQcm9taXNlPE1MRG9jdW1lbnRTa2V3RGV0ZWN0UmVzdWx0PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIHNlcnZpY2UgY2FuIHpvb20gaW4gYW4gaW1hZ2UgdGhhdCBjb250YWlucyB0ZXh0IGFuZCBzaWduaWZpY2FudGx5IGltcHJvdmUgdGhlIGRlZmluaXRpb24gb2YgdGV4dCBpbiB0aGUgaW1hZ2UuXG4gICAgICogQHBhcmFtICB7dGV4dEltYWdlU3VwZXJSZXNvbHV0aW9uUmVxfSB0ZXh0SW1hZ2VTdXBlclJlc29sdXRpb25SZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBUZXh0IEltYWdlIFN1cGVyIFJlc29sdXRpb24uXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgdGV4dEltYWdlU3VwZXJSZXNvbHV0aW9uKFxuICAgICAgICB0ZXh0SW1hZ2VTdXBlclJlc29sdXRpb25SZXE6IHRleHRJbWFnZVN1cGVyUmVzb2x1dGlvblJlcVxuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIHNlcnZpY2UgcHJvdmlkZXMgdGhlIDF4IHN1cGVyLXJlc29sdXRpb24gY2FwYWJpbGl0aWVzLiAxeCBzdXBlci1yZXNvbHV0aW9uIHJlbW92ZXMgdGhlIGNvbXByZXNzaW9uIG5vaXNlLlxuICAgICAqIEBwYXJhbSAge2ltYWdlU3VwZXJSZXNvbHV0aW9uUmVxfSBpbWFnZVN1cGVyUmVzb2x1dGlvblJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIEltYWdlIFN1cGVyIFJlc29sdXRpb24uXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgaW1hZ2VTdXBlclJlc29sdXRpb24oXG4gICAgICAgIGltYWdlU3VwZXJSZXNvbHV0aW9uUmVxOiBpbWFnZVN1cGVyUmVzb2x1dGlvblJlcVxuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBSZXByZXNlbnRzIHRoZSBpbWFnZS1iYXNlZCBwcm9kdWN0IGRldGVjdGlvbiBBUEkgb2YgSFVBV0VJIE1MIEtpdC5cbiAgICAgKiBAcGFyYW0gIHtwcm9kdWN0UmVxfSBwcm9kdWN0UmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZC5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBwcm9kdWN0VmlzaW9uQW5hbHlzZXIocHJvZHVjdFJlcTogcHJvZHVjdFJlcSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wIG9iamVjdCBhbmFseXNlciBzZXJ2aWNlLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIG9iamVjdEFuYWx5c2VyU3RvcCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCBwcm9kdWN0IGFuYWx5c2VyIHNlcnZpY2UuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgcHJvZHVjdEFuYWx5c2VyU3RvcCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCBkb2N1bWVudCBza2V3IGFuYWx5c2VyIHNlcnZpY2UuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZG9jU2tld0FuYWx5c2VyU3RvcCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCBUSVNSIGFuYWx5c2VyIHNlcnZpY2UuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgVElTUkFuYWx5c2VyU3RvcCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCBJU1IgYW5hbHlzZXIgc2VydmljZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBJU1JBbmFseXNlclN0b3AoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3Agc2NlbmUgYW5hbHlzZXIgc2VydmljZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBzdGlsbFNjZW5lQW5hbHlzZXJTdG9wKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIGltYWdlIGNsYXNzaWZpY2F0aW9uIHNldHRpbmdzLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGdldEltYWdlQ2xhc3NpZmljYXRpb25BbmFseXNlclNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqICBUaGlzIG1ldGhvZCByZXR1cm5zIElTUiBzZXR0aW5ncy5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBnZXRJU1JTZXR0aW5nKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiAgVGhpcyBtZXRob2QgcmV0dXJucyBzZWdtZW50YXRpb24gc2V0dGluZ3MuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZ2V0U2VnbWVudGF0aW9uU2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogIFRoaXMgbWV0aG9kIHJldHVybnMgbGFuZG1hcmsgc2V0dGluZ3MuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZ2V0TGFuZG1hcmtTZXR0aW5nKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiAgVGhpcyBtZXRob2QgcmV0dXJucyBvYmplY3Qgc2V0dGluZ3MuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZ2V0T2JqZWN0U2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU0xhbmd1YWdlU2VydmljZVByb3ZpZGVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MRmFjZVNldHRpbmcgPSBNTEZhY2VTZXR0aW5nO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIGdjckNhcHR1cmVUeXBlID0gZ2NyQ2FwdHVyZVR5cGU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgc3luY1R5cGUgPSBzeW5jVHlwZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTExvY2FsVGV4dFNldHRpbmcgPSBNTExvY2FsVGV4dFNldHRpbmc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxUZXh0Q29uZmlnID0gTUxUZXh0Q29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MUmVtb3RlVGV4dFNldHRpbmcgPSBNTFJlbW90ZVRleHRTZXR0aW5nO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MSW1hZ2VDbGFzc2lmaWNhdGlvbkNvbmZpZyA9IE1MSW1hZ2VDbGFzc2lmaWNhdGlvbkNvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEltYWdlU2VnbWVudGF0aW9uU2V0dGluZyA9IE1MSW1hZ2VTZWdtZW50YXRpb25TZXR0aW5nO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MSW1hZ2VTZWdtZW50YXRpb25TY2VuZSA9IE1MSW1hZ2VTZWdtZW50YXRpb25TY2VuZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFJlbW90ZUxhbmRtYXJrU2V0dGluZyA9IE1MUmVtb3RlTGFuZG1hcmtTZXR0aW5nO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MQmNyQ2FwdHVyZUNvbmZpZyA9IE1MQmNyQ2FwdHVyZUNvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEdjckNhcHR1cmVVSUNvbmZpZyA9IE1MR2NyQ2FwdHVyZVVJQ29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MQmNyUmVzdWx0Q29uZmlnID0gTUxCY3JSZXN1bHRDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgSGFuZGtleVBvaW50Q29uZmlnID0gSGFuZGtleVBvaW50Q29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIEltZ1N1cGVyUmVzb2x1dGlvbkNvbmZpZyA9IEltZ1N1cGVyUmVzb2x1dGlvbkNvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNbE9iamVjdEFuYWx5c2VyQ29uZmlnID0gTWxPYmplY3RBbmFseXNlckNvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBEb3dubG9hZFN0cmF0ZWd5Q3VzdG9tID0gRG93bmxvYWRTdHJhdGVneUN1c3RvbTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBGRUFUVVJFID0gRkVBVFVSRTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBMQU5HVUFHRSA9IExBTkdVQUdFO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MVHRzQ29uc3RhbnRzID0gTUxUdHNDb25zdGFudHM7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgQ29sb3JzID0gQ29sb3JzO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIFJlY3RTdHlsZSA9IFJlY3RTdHlsZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFNrZWxldG9uQ29uZmlnID0gTUxTa2VsZXRvbkNvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEZsYXNoTW9kZSA9IE1MRmxhc2hNb2RlO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MTGVuc1R5cGUgPSBNTExlbnNUeXBlO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MQW5hbHl6ZXJOYW1lID0gTUxBbmFseXplck5hbWU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxGcmFtZSA9IE1MRnJhbWU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxGb3JtUmVjb2dpdGlvbkNvbmZpZyA9IE1MRm9ybVJlY29naXRpb25Db25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxGYWNlQ29uZmlncyA9IE1MRmFjZUNvbmZpZ3M7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxQcm9kdWN0Q29uZmlnID0gTUxQcm9kdWN0Q29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MTGl2ZW5lc3NDb25maWcgPSBNTExpdmVuZXNzQ29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MUnR0TGFuZ3VhZ2VzID0gTUxSdHRMYW5ndWFnZXM7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxSdHRTY2VuZXMgPSBNTFJ0dFNjZW5lcztcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoZSB0ZXh0IGVtYmVkZGluZyBzZXJ2aWNlIGFsbG93cyB5b3UgdG8gZW50ZXIgQ2hpbmVzZSBhbmQgRW5nbGlzaCB3b3JkcyBvciBzZW50ZW5jZXMgdG8gcXVlcnkgbWF0Y2hpbmcgdmVjdG9yIHZhbHVlcywgYW5kIHBlcmZvcm0gZnVydGhlciByZXNlYXJjaCBiYXNlZCBvbiB0aGUgcXVlcnkgcmVzdWx0LlxuICAgICAqIEBwYXJhbSAge3RleHRFbWJlZGRpbmdEaWNJbmZvUmVxfSB0ZXh0RW1iZWRkaW5nRGljSW5mb1JlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIFRleHQgRW1iZWRkaW5nLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHRleHRFbWJlZGRpbmdEaWN0aW9uYXJ5SW5mbyhcbiAgICAgICAgdGV4dEVtYmVkZGluZ0RpY0luZm9SZXE6IHRleHRFbWJlZGRpbmdEaWNJbmZvUmVxXG4gICAgKTogUHJvbWlzZTxNTFZvY2FidWxhcnlWZXJzaW9uPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBBc3luY2hyb25vdXNseSBxdWVyaWVzIHdvcmQgdmVjdG9ycyBpbiBiYXRjaGVzLiAoVGhlIG51bWJlciBvZiB3b3JkcyByYW5nZXMgZnJvbSAxIHRvIDUwMC4pXG4gICAgICogQHBhcmFtICB7dGV4dEVtYmVkZGluZ1dvcmRCYXRjaFJlcX0gdGV4dEVtYmVkZGluZ1dvcmRCYXRjaFJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIFRleHQgRW1iZWRkaW5nLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHRleHRFbWJlZGRpbmdXb3JkQmF0Y2hWZWN0b3IoXG4gICAgICAgIHRleHRFbWJlZGRpbmdXb3JkQmF0Y2hSZXE6IHRleHRFbWJlZGRpbmdXb3JkQmF0Y2hSZXFcbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhlIHRleHQgZW1iZWRkaW5nIHNlcnZpY2UgYWxsb3dzIHlvdSB0byBlbnRlciBDaGluZXNlIGFuZCBFbmdsaXNoIHdvcmRzIG9yIHNlbnRlbmNlcyB0byBxdWVyeSBtYXRjaGluZyB2ZWN0b3IgdmFsdWVzLCBhbmQgcGVyZm9ybSBmdXJ0aGVyIHJlc2VhcmNoIGJhc2VkIG9uIHRoZSBxdWVyeSByZXN1bHQuXG4gICAgICogQHBhcmFtICB7dGV4dEVtYmVkZGluZ1dvcmR0b1ZlY3RvclJlcX0gdGV4dEVtYmVkZGluZ1dvcmR0b1ZlY3RvclJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIFRleHQgRW1iZWRkaW5nLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHRleHRFbWJlZGRpbmdXb3JkdG9WZWN0b3IoXG4gICAgICAgIHRleHRFbWJlZGRpbmdXb3JkdG9WZWN0b3JSZXE6IHRleHRFbWJlZGRpbmdXb3JkdG9WZWN0b3JSZXFcbiAgICApOiBQcm9taXNlPE1MV29yZHRvVmVjdG9yUmVzdWx0PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGUgdGV4dCBlbWJlZGRpbmcgc2VydmljZSBhbGxvd3MgeW91IHRvIGVudGVyIENoaW5lc2UgYW5kIEVuZ2xpc2ggd29yZHMgb3Igc2VudGVuY2VzIHRvIHF1ZXJ5IG1hdGNoaW5nIHZlY3RvciB2YWx1ZXMsIGFuZCBwZXJmb3JtIGZ1cnRoZXIgcmVzZWFyY2ggYmFzZWQgb24gdGhlIHF1ZXJ5IHJlc3VsdC5cbiAgICAgKiBAcGFyYW0gIHt0ZXh0RW1iZWRkaW5nU2VudGVuY2V0b1ZlY3RvclJlcX0gdGV4dEVtYmVkZGluZ1NlbnRlbmNldG9WZWN0b3JSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBUZXh0IEVtYmVkZGluZy5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICB0ZXh0RW1iZWRkaW5nU2VudGVuY2V0b1ZlY3RvcihcbiAgICAgICAgdGV4dEVtYmVkZGluZ1NlbnRlbmNldG9WZWN0b3JSZXE6IHRleHRFbWJlZGRpbmdTZW50ZW5jZXRvVmVjdG9yUmVxXG4gICAgKTogUHJvbWlzZTxNbFNlbnRlbmNldG9WZWN0b3JSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoZSB0ZXh0IGVtYmVkZGluZyBzZXJ2aWNlIGFsbG93cyB5b3UgdG8gZW50ZXIgQ2hpbmVzZSBhbmQgRW5nbGlzaCB3b3JkcyBvciBzZW50ZW5jZXMgdG8gcXVlcnkgbWF0Y2hpbmcgdmVjdG9yIHZhbHVlcywgYW5kIHBlcmZvcm0gZnVydGhlciByZXNlYXJjaCBiYXNlZCBvbiB0aGUgcXVlcnkgcmVzdWx0LlxuICAgICAqIEBwYXJhbSAge3RleHRFbWJlZGRpbmdXb3JkU2ltaWxhcml0eVJlcX0gdGV4dEVtYmVkZGluZ1dvcmRTaW1pbGFyaXR5UmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgVGV4dCBFbWJlZGRpbmcuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgdGV4dEVtYmVkZGluZ1dvcmRTaW1pbGFydHkoXG4gICAgICAgIHRleHRFbWJlZGRpbmdXb3JkU2ltaWxhcml0eVJlcTogdGV4dEVtYmVkZGluZ1dvcmRTaW1pbGFyaXR5UmVxXG4gICAgKTogUHJvbWlzZTxNTFdvcmRTaW1pbGFyaXR5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGUgdGV4dCBlbWJlZGRpbmcgc2VydmljZSBhbGxvd3MgeW91IHRvIGVudGVyIENoaW5lc2UgYW5kIEVuZ2xpc2ggd29yZHMgb3Igc2VudGVuY2VzIHRvIHF1ZXJ5IG1hdGNoaW5nIHZlY3RvciB2YWx1ZXMsIGFuZCBwZXJmb3JtIGZ1cnRoZXIgcmVzZWFyY2ggYmFzZWQgb24gdGhlIHF1ZXJ5IHJlc3VsdC5cbiAgICAgKiBAcGFyYW0gIHt0ZXh0RW1iZWRkaW5nU2VudGVuY2VTaW1pbGFyaXR5UmVxfSB0ZXh0RW1iZWRkaW5nU2VudGVuY2VTaW1pbGFyaXR5UmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgVGV4dCBFbWJlZGRpbmcuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgdGV4dEVtYmVkZGluZ1NlbnRlbmNlU2ltaWxhcnR5KFxuICAgICAgICB0ZXh0RW1iZWRkaW5nU2VudGVuY2VTaW1pbGFyaXR5UmVxOiB0ZXh0RW1iZWRkaW5nU2VudGVuY2VTaW1pbGFyaXR5UmVxXG4gICAgKTogUHJvbWlzZTxNTFNlbnRlbmNlU2ltaWxhcml0eVJlc3VsdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhlIHRleHQgZW1iZWRkaW5nIHNlcnZpY2UgYWxsb3dzIHlvdSB0byBlbnRlciBDaGluZXNlIGFuZCBFbmdsaXNoIHdvcmRzIG9yIHNlbnRlbmNlcyB0byBxdWVyeSBtYXRjaGluZyB2ZWN0b3IgdmFsdWVzLCBhbmQgcGVyZm9ybSBmdXJ0aGVyIHJlc2VhcmNoIGJhc2VkIG9uIHRoZSBxdWVyeSByZXN1bHQuXG4gICAgICogQHBhcmFtICB7dGV4dEVtYmVkZGluZ1NpbWlsYXJXb3Jkc1JlcX0gdGV4dEVtYmVkZGluZ1NpbWlsYXJXb3Jkc1JlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIFRleHQgRW1iZWRkaW5nLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHRleHRFbWJlZGRpbmdTaW1pbGFyV29yZHMoXG4gICAgICAgIHRleHRFbWJlZGRpbmdTaW1pbGFyV29yZHNSZXE6IHRleHRFbWJlZGRpbmdTaW1pbGFyV29yZHNSZXFcbiAgICApOiBQcm9taXNlPE1MU2ltaWxhcldvcmRzUmVzdWx0PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRleHRlbWJlZGRpbmcgc2V0dGluZ3MuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZ2V0VGV4dEVtYmVkZGluZ1NldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNUZXh0U2VydmljZVByb3ZpZGVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MRmFjZVNldHRpbmcgPSBNTEZhY2VTZXR0aW5nO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIGljclZuQ2FwdHVyZVR5cGUgPSBpY3JDYXB0dXJlVHlwZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBnY3JDYXB0dXJlVHlwZSA9IGdjckNhcHR1cmVUeXBlO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIHN5bmNUeXBlID0gc3luY1R5cGU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxMb2NhbFRleHRTZXR0aW5nID0gTUxMb2NhbFRleHRTZXR0aW5nO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MVGV4dENvbmZpZyA9IE1MVGV4dENvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFJlbW90ZVRleHRTZXR0aW5nID0gTUxSZW1vdGVUZXh0U2V0dGluZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEltYWdlQ2xhc3NpZmljYXRpb25Db25maWcgPSBNTEltYWdlQ2xhc3NpZmljYXRpb25Db25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxJbWFnZVNlZ21lbnRhdGlvblNldHRpbmcgPSBNTEltYWdlU2VnbWVudGF0aW9uU2V0dGluZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEltYWdlU2VnbWVudGF0aW9uU2NlbmUgPSBNTEltYWdlU2VnbWVudGF0aW9uU2NlbmU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxSZW1vdGVMYW5kbWFya1NldHRpbmcgPSBNTFJlbW90ZUxhbmRtYXJrU2V0dGluZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEJjckNhcHR1cmVDb25maWcgPSBNTEJjckNhcHR1cmVDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxHY3JDYXB0dXJlVUlDb25maWcgPSBNTEdjckNhcHR1cmVVSUNvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEJjclJlc3VsdENvbmZpZyA9IE1MQmNyUmVzdWx0Q29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIEhhbmRrZXlQb2ludENvbmZpZyA9IEhhbmRrZXlQb2ludENvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBJbWdTdXBlclJlc29sdXRpb25Db25maWcgPSBJbWdTdXBlclJlc29sdXRpb25Db25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTWxPYmplY3RBbmFseXNlckNvbmZpZyA9IE1sT2JqZWN0QW5hbHlzZXJDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgRG93bmxvYWRTdHJhdGVneUN1c3RvbSA9IERvd25sb2FkU3RyYXRlZ3lDdXN0b207XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgRkVBVFVSRSA9IEZFQVRVUkU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTEFOR1VBR0UgPSBMQU5HVUFHRTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFR0c0NvbnN0YW50cyA9IE1MVHRzQ29uc3RhbnRzO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIENvbG9ycyA9IENvbG9ycztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBSZWN0U3R5bGUgPSBSZWN0U3R5bGU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxTa2VsZXRvbkNvbmZpZyA9IE1MU2tlbGV0b25Db25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxGbGFzaE1vZGUgPSBNTEZsYXNoTW9kZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTExlbnNUeXBlID0gTUxMZW5zVHlwZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEFuYWx5emVyTmFtZSA9IE1MQW5hbHl6ZXJOYW1lO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MRnJhbWUgPSBNTEZyYW1lO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MRm9ybVJlY29naXRpb25Db25maWcgPSBNTEZvcm1SZWNvZ2l0aW9uQ29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MRmFjZUNvbmZpZ3MgPSBNTEZhY2VDb25maWdzO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MUHJvZHVjdENvbmZpZyA9IE1MUHJvZHVjdENvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTExpdmVuZXNzQ29uZmlnID0gTUxMaXZlbmVzc0NvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFJ0dExhbmd1YWdlcyA9IE1MUnR0TGFuZ3VhZ2VzO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MUnR0U2NlbmVzID0gTUxSdHRTY2VuZXM7XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHN0YXJ0IHRoZSBUZXh0IGFuYWx5emVyLlxuICAgICAqIEBwYXJhbSAge2xvY2FsSW1hZ2VUZXh0UmVxfHJlbW90ZUltYWdlVGV4dFJlcX0gSW1hZ2VUZXh0QW5hbHlzZXJJbnB1dCBSZXBlcmVzZW50cyB0aGUgbmVjZXNzYXJ5IHBhcmFtZXRlcnMgdG8gY29udmVydCBpbWFnZXMgdG8gdGV4dCBmb3JtYXQuXG4gICAgICogQHJldHVybnMgUHJvbWlzZSA8VGV4dEFuYWx5c2VyPlxuICAgICAqL1xuICAgIGltYWdlVGV4dEFuYWx5c2VyKFxuICAgICAgICBJbWFnZVRleHRBbmFseXNlcklucHV0OiBsb2NhbEltYWdlVGV4dFJlcSB8IHJlbW90ZUltYWdlVGV4dFJlcVxuICAgICk6IFByb21pc2U8TUxUZXh0PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wIHRoZSBUZXh0IGFuYWx5emVyLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHN0b3BUZXh0QW5hbHlzZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGdpdmVzIFRleHQgQW5hbHlzZXIgaW5mb3JtYXRpb24uXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZ2V0VGV4dEFuYWx5c2VySW5mbygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcHJvdmlkZXMgYSBkb2N1bWVudCByZWNvZ25pdGlvbiBjb21wb25lbnQgdGhhdCByZWNvZ25pemVzIHRleHQgZnJvbSBpbWFnZXMgb2YgZG9jdW1lbnRzLlxuICAgICAqIEBwYXJhbSAge2RvY3VtZW50SW1hZ2VBbmFseXNlclJlcX0gZG9jdW1lbnRJbWFnZUFuYWx5c2VyUmVxIFJlcGVyZXNlbnRzIHRoZSBuZWNlc3NhcnkgcGFyYW1ldGVyIHRvIGNvbnZlcnQgZG9jdW1lbnQgaW1hZ2VzIHRvIHRleHQgZm9ybWF0LlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8RG9jdW1lbnRBbmFseXNlcj5cbiAgICAgKi9cbiAgICBkb2N1bWVudEltYWdlQW5hbHlzZXIoXG4gICAgICAgIGRvY3VtZW50SW1hZ2VBbmFseXNlclJlcTogZG9jdW1lbnRJbWFnZUFuYWx5c2VyUmVxXG4gICAgKTogUHJvbWlzZTxNTERvY3VtZW50PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wIHRoZSBEb2N1bWVudCBhbmFseXplci5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBzdG9wRG9jdW1lbnRJbWFnZUFuYWx5c2VyKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBjbG9zZSB0aGUgRG9jdW1lbnQgYW5hbHl6ZXIuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgY2xvc2VEb2N1bWVudEltYWdlQW5hbHlzZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIERvY3VtZW50IGFuYWx5emVyIHNldHRpbmcuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZ2V0RG9jdW1lbnRJbWFnZUFuYWx5c2VyU2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgSW1hZ2UgYW5hbHl6ZXIgc2V0dGluZy5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBnZXRUZXh0QW5hbHlzZXJTZXR0aW5nKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBHQ1Igc2V0dGluZy5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBnZXRHQ1JTZXR0aW5nKCk6IFByb21pc2U8Z2NyU2V0dGluZ1Jlc3VsdHM+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3AgdGhlIEZvcm0gUmVjb2duaXRpb24gQW5hbHl6ZXIuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgc3RvcEZvcm1SZWNvZ25pdGlvbkFuYWx5c2VyKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIGJhbmsgY2FyZCByZWNvZ25pdGlvbiBzZXJ2aWNlIHJlY29nbml6ZXMgYmFuayBjYXJkcyBpbiBjYW1lcmEgc3RyZWFtcyB3aXRoaW4gYW5nbGUgb2Zmc2V0IG9mIDE1IGRlZ3JlZXMgYW5kIGV4dHJhY3RzIGtleSBpbmZvcm1hdGlvbiBzdWNoIGFzIGNhcmQgbnVtYmVyIGFuZCB2YWxpZGl0eSBwZXJpb2QuXG4gICAgICogQHBhcmFtICB7YmFua0NhcmRTREtEZXRlY3RvclJlcXxiYW5rQ2FyZFBsdWdpbkRldGVjdG9yUmVxfSBiYW5rQ2FyZERldGVjdGVySW5wdXQgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBiYW5rIGNhcmQgcmVjb2duaXRpb24uXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxCYW5rQ2FyZEFuYWx5c2VyPiB8IFByb21pc2U8QmFua0NhcmRBbmFseXNlcj5cbiAgICAgKi9cbiAgICBiYW5rQ2FyZERldGVjdG9yKFxuICAgICAgICBiYW5rQ2FyZERldGVjdGVySW5wdXQ6XG4gICAgICAgICAgICB8IGJhbmtDYXJkU0RLRGV0ZWN0b3JSZXFcbiAgICAgICAgICAgIHwgYmFua0NhcmRQbHVnaW5EZXRlY3RvclJlcVxuICAgICk6IFByb21pc2U8TUxCYW5rQ2FyZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCBiYW5rY2FyZCByZWNvZ25pdGlvbiBzZXJ2aWNlLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHN0b3BCYW5rQ2FyZERldGVjdG9yKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRSZXN1bHRUeXBlQmNyKG1MQmNyQ2FwdHVyZUNvbmZpZzogbUxCY3JDYXB0dXJlQ29uZmlnKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuXG4gICAqL1xuICAgIHNldFJlY01vZGVCY3IobUxCY3JDYXB0dXJlQ29uZmlnOiBtTEJjckNhcHR1cmVDb25maWcpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgQkNSIHNldHRpbmcuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZ2V0QmFua0NhcmREZXRlY3RvclNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoZSBnZW5lcmFsIGNhcmQgcmVjb2duaXRpb24gc2VydmljZSBwcm92aWRlcyBhIHVuaXZlcnNhbCBkZXZlbG9wbWVudCBmcmFtZXdvcmsgYmFzZWQgb24gdGhlIHRleHQgcmVjb2duaXRpb24gdGVjaG5vbG9neS5cbiAgICAgKiBAcGFyYW0gIHtnZW5lcmFsQ2FyZERldGVjdG9yUmVxfSBnZW5lcmFsQ2FyZERldGVjdG9yUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgZ2VuZXJhbCBjYXJkIHJlY29nbml0aW9uIHBsdWctaW4uXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxHZW5lcmFsQ2FyZEFuYWx5c2VyPlxuICAgICAqL1xuICAgIGdlbmVyYWxDYXJkRGV0ZWN0b3IoXG4gICAgICAgIGdlbmVyYWxDYXJkRGV0ZWN0b3JSZXE6IGdlbmVyYWxDYXJkRGV0ZWN0b3JSZXFcbiAgICApOiBQcm9taXNlPE1MR2NyQ2FwdHVyZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhlIGdlbmVyYWwgVmlldG5hbSBpZCBjYXJkICByZWNvZ25pdGlvbiBzZXJ2aWNlIHByb3ZpZGVzIGEgdW5pdmVyc2FsIGRldmVsb3BtZW50IGZyYW1ld29yayBiYXNlZCBvbiB0aGUgdGV4dCByZWNvZ25pdGlvbiB0ZWNobm9sb2d5LlxuICAgICAqIEBwYXJhbSAge2ljclZuRGV0ZWN0b3JSZXF9IGljclZuRGV0ZWN0b3JSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBnZW5lcmFsIGNhcmQgcmVjb2duaXRpb24gcGx1Zy1pbi5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPE1MVm5JY3JDYXB0dXJlUmVzdWx0PlxuICAgICAqL1xuICAgIGljclZuQ2FyZERldGVjdG9yKFxuICAgICAgICBpY3JWbkRldGVjdG9yUmVxOiBpY3JWbkRldGVjdG9yUmVxXG4gICAgKTogUHJvbWlzZTxNTFZuSWNyQ2FwdHVyZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhlIGZvcm0gcmVjb2duaXRpb24gc2VydmljZSB1c2VzIEFJIHRlY2hub2xvZ2llcyB0byByZWNvZ25pemUgYW5kIHJldHVybiBmb3JtIHN0cnVjdHVyZSBpbmZvcm1hdGlvbiAoaW5jbHVkaW5nIHJvd3MsIGNvbHVtbnMsIGFuZCBjb29yZGluYXRlcyBvZiBjZWxscykgYW5kIGZvcm0gdGV4dCBpbiBDaGluZXNlIGFuZCBFbmdsaXNoIChpbmNsdWRpbmcgcHVuY3R1YXRpb24pIGZyb20gaW5wdXQgaW1hZ2VzLlxuICAgICAqIEBwYXJhbSAge2Zvcm1SZWNvZ25pemVyQW5hbHlzZXJSZXF9IGZvcm1SZWNvZ25pemVyQW5hbHlzZXJSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBnZW5lcmFsIGNhcmQgcmVjb2duaXRpb24gcGx1Zy1pbi5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPEdlbmVyYWxDYXJkQW5hbHlzZXI+XG4gICAgICovXG4gICAgZm9ybVJlY29nbml0aW9uQW5hbHlzZXIoXG4gICAgICAgIGZvcm1SZWNvZ25pemVyQW5hbHlzZXJSZXE6IGZvcm1SZWNvZ25pemVyQW5hbHlzZXJSZXFcbiAgICApOiBQcm9taXNlPE1MR2NyQ2FwdHVyZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG5cbiAgICovXG4gICAgaWNyTG9jYWxBbmFseXNlcihcbiAgICAgICAgbG9jYWxBbmFseXNlclJlcTogbG9jYWxBbmFseXNlclJlcVxuICAgICk6IFByb21pc2U8TUxJY3JDYXB0dXJlUmVzdWx0PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuXG4gICAqL1xuICAgIGljckxvY2FsQW5hbHlzZXJDcmVhdGVJZENhcmQoXG4gICAgICAgIGNyZWF0ZUlkQ2FyZFJlcTogY3JlYXRlSWRDYXJkUmVxXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICovXG4gICAgaWNyTG9jYWxBbmFseXNlclN0b3AoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICovXG4gICAgZ2V0aWNyQ25DYXJkSW5zdGFuY2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICovXG4gICAgaWNyQ25DYXJkQ3JlYXRlKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKi9cbiAgICBnZXRpY3JWbkNhcmRJbnN0YW5jZSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICovXG4gICAgaWNyVm5DYXJkQ3JlYXRlKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKi9cbiAgICBnZXRJY3JWbkNhcHR1cmUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU1ZvaWNlU2VydmljZVByb3ZpZGVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MRmFjZVNldHRpbmcgPSBNTEZhY2VTZXR0aW5nO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MTG9jYWxUZXh0U2V0dGluZyA9IE1MTG9jYWxUZXh0U2V0dGluZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFRleHRDb25maWcgPSBNTFRleHRDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxSZW1vdGVUZXh0U2V0dGluZyA9IE1MUmVtb3RlVGV4dFNldHRpbmc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxJbWFnZUNsYXNzaWZpY2F0aW9uQ29uZmlnID0gTUxJbWFnZUNsYXNzaWZpY2F0aW9uQ29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MSW1hZ2VTZWdtZW50YXRpb25TZXR0aW5nID0gTUxJbWFnZVNlZ21lbnRhdGlvblNldHRpbmc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxJbWFnZVNlZ21lbnRhdGlvblNjZW5lID0gTUxJbWFnZVNlZ21lbnRhdGlvblNjZW5lO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MUmVtb3RlTGFuZG1hcmtTZXR0aW5nID0gTUxSZW1vdGVMYW5kbWFya1NldHRpbmc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxCY3JDYXB0dXJlQ29uZmlnID0gTUxCY3JDYXB0dXJlQ29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MR2NyQ2FwdHVyZVVJQ29uZmlnID0gTUxHY3JDYXB0dXJlVUlDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxCY3JSZXN1bHRDb25maWcgPSBNTEJjclJlc3VsdENvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBIYW5ka2V5UG9pbnRDb25maWcgPSBIYW5ka2V5UG9pbnRDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgSW1nU3VwZXJSZXNvbHV0aW9uQ29uZmlnID0gSW1nU3VwZXJSZXNvbHV0aW9uQ29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1sT2JqZWN0QW5hbHlzZXJDb25maWcgPSBNbE9iamVjdEFuYWx5c2VyQ29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIERvd25sb2FkU3RyYXRlZ3lDdXN0b20gPSBEb3dubG9hZFN0cmF0ZWd5Q3VzdG9tO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIEZFQVRVUkUgPSBGRUFUVVJFO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIExBTkdVQUdFID0gTEFOR1VBR0U7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxUdHNDb25zdGFudHMgPSBNTFR0c0NvbnN0YW50cztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBDb2xvcnMgPSBDb2xvcnM7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgUmVjdFN0eWxlID0gUmVjdFN0eWxlO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MU2tlbGV0b25Db25maWcgPSBNTFNrZWxldG9uQ29uZmlnO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MRmxhc2hNb2RlID0gTUxGbGFzaE1vZGU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxMZW5zVHlwZSA9IE1MTGVuc1R5cGU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxBbmFseXplck5hbWUgPSBNTEFuYWx5emVyTmFtZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEZyYW1lID0gTUxGcmFtZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEZvcm1SZWNvZ2l0aW9uQ29uZmlnID0gTUxGb3JtUmVjb2dpdGlvbkNvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEZhY2VDb25maWdzID0gTUxGYWNlQ29uZmlncztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFByb2R1Y3RDb25maWcgPSBNTFByb2R1Y3RDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxMaXZlbmVzc0NvbmZpZyA9IE1MTGl2ZW5lc3NDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxSdHRMYW5ndWFnZXMgPSBNTFJ0dExhbmd1YWdlcztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFJ0dFNjZW5lcyA9IE1MUnR0U2NlbmVzO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIGdjckNhcHR1cmVUeXBlID0gZ2NyQ2FwdHVyZVR5cGU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgc3luY1R5cGUgPSBzeW5jVHlwZTtcblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogQHBhcmFtICB7c3luY1Byb2JhYmlsaXR5RGV0ZWN0fSBzeW5jUmVxdWVzdExvY2FsTGFuZ0RldGVjdCBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxNTFJlbW90ZUxhbmdEZXRlY3Rpb24+XG4gICAgICovXG4gICAgc3luY1Byb2JhYmlsaXR5RGV0ZWN0KFxuICAgICAgICBzeW5jUHJvYmFiaWxpdHlEZXRlY3Q6IHN5bmNSZXF1ZXN0TG9jYWxMYW5nRGV0ZWN0XG4gICAgKTogUHJvbWlzZTxNTFJlbW90ZUxhbmdEZXRlY3Rpb24+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSAge3N5bmNQcm9iYWJpbGl0eURldGVjdH0gc3luY1Byb2JhYmlsaXR5RGV0ZWN0IFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlci5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPFN0cmluZz5cbiAgICAgKi9cbiAgICBzeW5jRmlyc3RCZXN0RGV0ZWN0KFxuICAgICAgICBzeW5jUHJvYmFiaWxpdHlEZXRlY3Q6IHN5bmNSZXF1ZXN0TG9jYWxMYW5nRGV0ZWN0XG4gICAgKTogUHJvbWlzZTxTdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogSW1wbGVtZW50cyBvbi1jbG91ZCB0ZXh0IHRyYW5zbGF0aW9uLlxuICAgICAqIEBwYXJhbSAge3JlbW90ZXRyYW5zbGF0ZVJlcX0gcmVtb3RldHJhbnNsYXRlUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgdHJhbnNsYXRlLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHJlbW90ZVRyYW5zbGF0b3IocmVtb3RldHJhbnNsYXRlUmVxOiByZW1vdGV0cmFuc2xhdGVSZXEpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogSW1wbGVtZW50cyBvbi1jbG91ZCB0ZXh0IHRyYW5zbGF0aW9uLlxuICAgICAqIEBwYXJhbSAge2xvY2FsdHJhbnNsYXRlUmVxfSBsb2NhbHRyYW5zbGF0ZVJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIHRyYW5zbGF0ZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBsb2NhbFRyYW5zbGF0b3IobG9jYWx0cmFuc2xhdGVSZXE6IGxvY2FsdHJhbnNsYXRlUmVxKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIE9idGFpbnMgYWxsIGxhbmd1YWdlcyBzdXBwb3J0ZWQgZm9yIGxvY2FsIHRyYW5zbGF0aW9uLlxuICAgICAqIEBwYXJhbSAge2xvY2FsQWxsTGFuZ1JlcX0gbG9jYWxBbGxMYW5nUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgdHJhbnNsYXRlLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHRyYW5zbGF0b3JMb2NhbEFsbExhbmcobG9jYWxBbGxMYW5nUmVxOiBsb2NhbEFsbExhbmdSZXEpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogT2J0YWlucyBhbGwgbGFuZ3VhZ2VzIHN1cHBvcnRlZCBmb3Igb24tY2xvdWQgdHJhbnNsYXRpb24uXG4gICAgICogQHBhcmFtICB7cmVtb3RlQWxsTGFuZ1JlcX0gcmVtb3RlQWxsTGFuZ1JlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIHRyYW5zbGF0ZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICB0cmFuc2xhdG9yUmVtb3RlQWxsTGFuZyhyZW1vdGVBbGxMYW5nUmVxOiByZW1vdGVBbGxMYW5nUmVxKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIERldGVjdHMgbGFuZ3VhZ2VzIG9uIHRoZSBjbG91ZC5cbiAgICAgKiBAcGFyYW0gIHtyZW1vdGVMYW5nRGV0ZWN0aW9uUmVxfSByZW1vdGVMYW5nRGV0ZWN0aW9uUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgbGFuZyBkZXRlY3Rpb24uXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxSZW1vdGVMYW5nRGV0ZWN0aW9uQW5hbHlzZXI+IHwgUHJvbWlzZTxsYW5nRGV0ZWN0aW9uV2l0aEZpcnN0RGV0ZWN0PlxuICAgICAqL1xuICAgIHJlbW90ZUxhbmdEZXRlY3Rpb24oXG4gICAgICAgIHJlbW90ZUxhbmdEZXRlY3Rpb25SZXE6IHJlbW90ZUxhbmdEZXRlY3Rpb25SZXFcbiAgICApOiBQcm9taXNlPE1MUmVtb3RlTGFuZ0RldGVjdGlvbiB8IE1MbGFuZ0RldGVjdGlvbldpdGhGaXJzdERldGVjdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogRGV0ZWN0cyBsYW5ndWFnZXMgb24gbG9jYWwuXG4gICAgICogQHBhcmFtICB7bG9jYWxMYW5nRGV0ZWN0aW9uUmVxfSBsb2NhbExhbmdEZXRlY3Rpb25SZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBsYW5nIGRldGVjdGlvbi5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gfCBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBsb2NhbExhbmdEZXRlY3Rpb24oXG4gICAgICAgIGxvY2FsTGFuZ0RldGVjdGlvblJlcTogbG9jYWxMYW5nRGV0ZWN0aW9uUmVxXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuXG4gICAgLyoqXG4gICAgICogRG93bmxvYWQgbGFuZ3VhZ2UgbW9kZWwuXG4gICAgICogQHBhcmFtICB7ZG93bmxvYWRUcmFuc2xhdGVSZXF9IGRvd25sb2FkVHJhbnNsYXRlUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgZG93bmxvYWQgbW9kZWwuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgdHJhbnNsYXRvckRvd25sb2FkTW9kZWwoXG4gICAgICAgIGRvd25sb2FkVHJhbnNsYXRlUmVxOiBkb3dubG9hZFRyYW5zbGF0ZVJlcVxuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBGb3IgZGVsZXRlIGxhbmd1YWdlIG1vZGVsLlxuICAgICAqIEBwYXJhbSAge2RlbGV0ZVRyYW5zbGF0ZVJlcX0gZGVsZXRlVHJhbnNsYXRlUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgZGVsZXRlIG1vZGVsLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHRyYW5zbGF0b3JEZWxldGVNb2RlbChcbiAgICAgICAgZGVsZXRlVHJhbnNsYXRlUmVxOiBkZWxldGVUcmFuc2xhdGVSZXFcbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCB0cmFuc2xhdG9yIHNlcnZpY2UuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgc3RvcFRyYW5zbGF0b3JTZXJ2aWNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm4gUlRUIHNldHRpbmcuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZ2V0UlRUU2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJucyBUVFMgc2V0dGluZy5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBnZXRUVFNTZXR0aW5nKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIEFGVCBzZXR0aW5nLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGdldEFGVFNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHJldHVybnMgTGFuZyBEZXRlY3Rpb24gc2V0dGluZy5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBnZXRMYW5nRGV0ZWN0aW9uU2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCBsYW5nIGRldGVjdGlvbiBzZXJ2aWNlLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHN0b3BMYW5nRGV0ZWN0aW9uU2VydmljZSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhlIHNvdW5kIGRldGVjdGlvbiBzZXJ2aWNlIGNhbiBkZXRlY3Qgc291bmQgZXZlbnRzIGluIG9ubGluZSAocmVhbC10aW1lIHJlY29yZGluZykgbW9kZS4gVGhlIGRldGVjdGVkIHNvdW5kIGV2ZW50cyBjYW4gaGVscCB5b3UgcGVyZm9ybSBzdWJzZXF1ZW50IGFjdGlvbnMuXG4gICAgICogQHBhcmFtICB7c291bmREZWN0UmVxfSBzb3VuZERlY3RSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBTb3VuZCBEZXRlY3Rpb24gYW5hbHlzZXIuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgc291bmREZWN0QW5hbHlzZXIoc291bmREZWN0UmVxOiBzb3VuZERlY3RSZXEpOiBQcm9taXNlPE1MU291bmREZWN0UmVzdWx0PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUVFMgY2FuIGNvbnZlcnQgdGV4dCBpbmZvcm1hdGlvbiBpbnRvIGF1ZGlvIG91dHB1dC4gUmljaCB0aW1icmVzLCBhbmQgdm9sdW1lIGFuZCBzcGVlZCBvcHRpb25zIGFyZSBzdXBwb3J0ZWQgdG8gcHJvZHVjZSBtb3JlIG5hdHVyYWwgc291bmRzLlxuICAgICAqIEBwYXJhbSAge3R0c1JlcX0gdHRzUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgdGV4dCB0byBzcGVlY2guXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxUdHNBbmFseXNlcj5cbiAgICAgKi9cbiAgICB0dHNBbmFseXNlcih0dHNSZXE6IHR0c1JlcSk6IFByb21pc2U8TUxUdHNSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRUUyBjYW4gY29udmVydCB0ZXh0IGluZm9ybWF0aW9uIGludG8gYXVkaW8gb3V0cHV0IG9mZmxpbmUuIFJpY2ggdGltYnJlcywgYW5kIHZvbHVtZSBhbmQgc3BlZWQgb3B0aW9ucyBhcmUgc3VwcG9ydGVkIHRvIHByb2R1Y2UgbW9yZSBuYXR1cmFsIHNvdW5kcy5cbiAgICAgKiBAcGFyYW0gIHt0dHNSZXF9IHR0c1JlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIHRleHQgdG8gc3BlZWNoLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8VHRzQW5hbHlzZXI+XG4gICAgICovXG4gICAgdHRzT2ZmbGluZUFuYWx5c2VyKHR0c1JlcTogdHRzUmVxKTogUHJvbWlzZTxNTFR0c1Jlc3VsdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBzZXJ2aWNlIHN0b3AgdGV4dCB0byBzcGVlY2ggKFRUUykgc2VydmljZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICB0dHNBbmFseXNlclN0b3AoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgc2VydmljZSBwYXVzZXMgdGV4dCB0byBzcGVlY2ggKFRUUykgYW5hbHlzZXIuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgdHRzQW5hbHlzZXJQYXVzZSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBzZXJ2aWNlIGNvbnRpbnVlcyB0ZXh0IHRvIHNwZWVjaCAoVFRTKSBhbmFseXNlci5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICB0dHNBbmFseXNlclJlc3VtZSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBzZXJ2aWNlIHNodXRkb3duIHRleHQgdG8gc3BlZWNoIChUVFMpIGFuYWx5c2VyLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHR0c0FuYWx5c2Vyc2h1dERvd24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHJldHVybnMgVFRTIERvd25sb2FkIHNldHRpbmcuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgdHRzQW5hbHlzZXJEb3dubG9hZFNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgc2VydmljZSBjbG9zZSBBRlQgYW5hbHlzZXIuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgYWZ0QW5hbHlzZXJDbG9zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBzZXJ2aWNlIHN0b3AgQUZUIGFuYWx5c2VyLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGFzckFuYWx5c2VyU3RvcCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBzZXJ2aWNlIGRlc3Ryb3kgQUZUIGFuYWx5c2VyLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGFmdEFuYWx5c2VyRGVzdHJveSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBzZXJ2aWNlIHBhdXNlIEFGVCBhbmFseXNlci5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBhZnRBbmFseXNlclBhdXNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIHNlcnZpY2UgZGVzdHJveSBTb3VuZCBEZXRlY3Rpb24gYW5hbHlzZXIuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgc291bmREZWN0QW5hbHlzZXJEZXN0cm95KCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGUgYXVkaW8gZmlsZSB0cmFuc2NyaXB0aW9uIHNlcnZpY2UgY2FuIGNvbnZlcnQgYW4gYXVkaW8gZmlsZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gNjAgc2Vjb25kcyBpbnRvIGEgdGV4dCBmaWxlLiBDdXJyZW50bHksIENoaW5lc2UgYW5kIEVuZ2xpc2ggYXJlIHN1cHBvcnRlZC5cbiAgICAgKiBAcGFyYW0gIHthZnRSZXF9IGFmdFJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIGFmdCBhbmFseXNlci5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPEFmdEFuYWx5c2VyPlxuICAgICAqL1xuICAgIGFmdEFuYWx5c2VyKGFmdFJlcTogYWZ0UmVxKTogUHJvbWlzZTxNTEFmdFJlc3VsdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFTUiBjYW4gcmVjb2duaXplIHNwZWVjaCBub3QgbG9uZ2VyIHRoYW4gNjBzIGFuZCBjb252ZXJ0IHRoZSBpbnB1dCBzcGVlY2ggaW50byB0ZXh0IGluIHJlYWwgdGltZS5cbiAgICAgKiBAcGFyYW0gIHthc3JSZXF9IGFzclJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIGFzciBhbmFseXNlci5cbiAgICAgKiBAcGFyYW0gIHthbnl9IHN1Y2Nlc3MgQSBjYWxsYmFjayBmdW5jdGlvbi4gSXQgaXMgY2FsbGVkIHdoZW4gZnVuY3Rpb24gaXMgZXhlY3V0ZWQgc3VjY2Vzc2Z1bGx5LiBJdCByZXR1cm5zIHRoZSByZXN1bHRzIG9mIHRleHQuXG4gICAgICogQHBhcmFtICB7YW55fSBlcnJvciBBIGNhbGxiYWNrIGZ1bmN0aW9uLiBJdCBpcyBjYWxsZWQgd2hlbiBmdW5jdGlvbiBpcyBmYWlsZWQuXG4gICAgICogQHJldHVybnMgY2FsbGJhY2tcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICBhc3JBbmFseXNlcihhc3JSZXE6IGFzclJlcSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVhbC10aW1lIHRyYW5zY3JpcHRpb24gZW5hYmxlcyB5b3VyIGFwcCB0byBjb252ZXJ0IGxvbmcgc3BlZWNoIChubyBsb25nZXIgdGhhbiA1IGhvdXJzKSBpbnRvIHRleHQgaW4gcmVhbCB0aW1lLiBUaGUgZ2VuZXJhdGVkIHRleHQgY29udGFpbnMgcHVuY3R1YXRpb24gbWFya3MgYW5kIHRpbWVzdGFtcHMuXG4gICAgICogQHBhcmFtICB7cnR0UmVxfSBydHRSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBydHQgYW5hbHlzZXIuXG4gICAgICogQHBhcmFtICB7YW55fSBzdWNjZXNzIEEgY2FsbGJhY2sgZnVuY3Rpb24uIEl0IGlzIGNhbGxlZCB3aGVuIGZ1bmN0aW9uIGlzIGV4ZWN1dGVkIHN1Y2Nlc3NmdWxseS4gSXQgcmV0dXJucyB0aGUgcmVzdWx0cyBvZiB0ZXh0LlxuICAgICAqIEBwYXJhbSAge2FueX0gZXJyb3IgQSBjYWxsYmFjayBmdW5jdGlvbi4gSXQgaXMgY2FsbGVkIHdoZW4gZnVuY3Rpb24gaXMgZmFpbGVkLlxuICAgICAqIEByZXR1cm5zIGNhbGxiYWNrXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgcnR0QW5hbHlzZXJTdGFydChydHRSZXE6IHJ0dFJlcSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCBSVFQgYW5hbHlzZXJcbiAgICAgKiBAcGFyYW0gIHthbnl9IHN1Y2Nlc3MgQSBjYWxsYmFjayBmdW5jdGlvbi4gSXQgaXMgY2FsbGVkIHdoZW4gZnVuY3Rpb24gaXMgZXhlY3V0ZWQgc3VjY2Vzc2Z1bGx5LiBJdCByZXR1cm5zIHRoZSByZXN1bHRzIG9mIHRleHQuXG4gICAgICogQHBhcmFtICB7YW55fSBlcnJvciBBIGNhbGxiYWNrIGZ1bmN0aW9uLiBJdCBpcyBjYWxsZWQgd2hlbiBmdW5jdGlvbiBpcyBmYWlsZWQuXG4gICAgICogQHJldHVybnMgY2FsbGJhY2tcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICBydHRBbmFseXNlclN0b3AoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1MTGl2ZSB7XG4gICAgcHJpdmF0ZSBhclNjZW5lOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogc3RyaW5nLCBkaXZJZDogc3RyaW5nKSB7XG4gICAgICAgIGlmIChzY2VuZSA9PT0gXCJBQ1RJT05fTElWRV9BTkFMWVNFXCIpXG4gICAgICAgICAgICB0aGlzLmFyU2NlbmUgPSBuZXcgKEhNU01MS2l0LmdldFBsdWdpbigpLmxpdmVFbmdpbmVBbmFseXNlcikoZGl2SWQpO1xuICAgIH1cblxuICAgIG9uKGNhbGw6ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmFyU2NlbmUub24oY2FsbCk7XG4gICAgfVxuICAgIHN0YXJ0QVJTY2VuZShjb25maWc/OiBNTGNvbmZpZywgYm91bmRzPzogTUxCb3VuZHMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJTY2VuZS5zdGFydEFSU2NlbmUoY29uZmlnLCBib3VuZHMpO1xuICAgIH1cbiAgICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hclNjZW5lLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgc2V0Q29uZmlnKGNvbmZpZzogTUxjb25maWcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJTY2VuZS5zZXRDb25maWcoY29uZmlnKTtcbiAgICB9XG4gICAgc2Nyb2xsKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hclNjZW5lLnNjcm9sbCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIGxpdmVFbmdpbmVBbmFseXNlciBleHRlbmRzIE1MTGl2ZSB7XG4gICAgY29uc3RydWN0b3IoZGl2SWQ6IHN0cmluZykge1xuICAgICAgICBzdXBlcihcIkFDVElPTl9MSVZFX0FOQUxZU0VcIiwgZGl2SWQpO1xuICAgIH1cbn1cblxuLypcbiAgICBDb3B5cmlnaHQgMjAyMC0yMDIyLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxuICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RQZXJtaXNzaW9uUmVxIHtcbiAgICBwZXJtaXNzaW9uTGlzdDogQXJyYXk8c3RyaW5nPjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2hlY2tQZXJtaXNzaW9uUmVxIHtcbiAgICBwZXJtaXNzaW9uTGlzdDogQXJyYXk8c3RyaW5nPjtcbn1cbmV4cG9ydCBpbnRlcmZhY2Ugc3RhdGlzdGljc25SZXEge1xuICAgIGlzQWxsb3dlZDogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTUxCb3VuZHMge1xuICAgIG1hcmdpblRvcD86IG51bWJlcjtcbiAgICBtYXJnaW5Cb3R0b20/OiBudW1iZXI7XG4gICAgbWFyZ2luTGVmdD86IG51bWJlcjtcbiAgICBtYXJnaW5SaWdodD86IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTUxjb25maWcge1xuICAgIGxlbnNFbmdpbmVSZXE6IGxlbnNFbmdpbmVSZXE7XG59XG5leHBvcnQgaW50ZXJmYWNlIGxlbnNFbmdpbmVSZXEge1xuICAgIGFuYWx5emVyTmFtZTogTUxBbmFseXplck5hbWU7XG4gICAgbGVuc0VuZ2luZVNldHRpbmc/OiBNTExlbnNFbmdpbmVTZXR0aW5nO1xuICAgIGdyYXBoaWNTZXR0aW5nPzpcbiAgICAgICAgfCBGYWNlR3JhcGhpY1NldHRpbmdcbiAgICAgICAgfCBzY2VuZVNldHRpbmdzXG4gICAgICAgIHwgSGFuZGtleUdyYXBoaWNTZXR0aW5nXG4gICAgICAgIHwgU2tlbGV0b25HcmFwaGljU2V0dGluZ1xuICAgICAgICB8IE9iamVjdEdyYXBoaWNTZXR0aW5nXG4gICAgICAgIHwgbnVsbDtcbiAgICBhbmFseXplclNldHRpbmc/OlxuICAgICAgICB8IG1sRmFjZUFuYWx5emVyU2V0dGluZ1xuICAgICAgICB8IE1MRmFjZVZlcmlmaWNhdGlvbkFuYWx5emVyU2V0dGluZ1xuICAgICAgICB8IG1sSGFuZEtleXBvaW50U2V0dGluZ1xuICAgICAgICB8IG1sSW1hZ2VTZWdtZW50YXRpb25TZXR0aW5nXG4gICAgICAgIHwgbWxPYmplY3RBbmFseXNlclNldHRpbmdcbiAgICAgICAgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBNTGNvbmZpZ0NvbXBvc2l0ZSB7XG4gICAgbGVuc0VuZ2luZVJlcTogY29tcG9zaXRlQW5hbHlzZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIGNvbXBvc2l0ZUFuYWx5c2VyIHtcbiAgICBhbmFseXplck5hbWVzPzogQXJyYXk8TUxBbmFseXplck5hbWU+O1xuICAgIGxlbnNFbmdpbmVTZXR0aW5nPzogTUxMZW5zRW5naW5lU2V0dGluZztcbiAgICBncmFwZ2ljU2V0dGluZz86XG4gICAgICAgIHwgRmFjZUdyYXBoaWNTZXR0aW5nXG4gICAgICAgIHwgc2NlbmVTZXR0aW5nc1xuICAgICAgICB8IEhhbmRrZXlHcmFwaGljU2V0dGluZ1xuICAgICAgICB8IFNrZWxldG9uR3JhcGhpY1NldHRpbmdcbiAgICAgICAgfCBPYmplY3RHcmFwaGljU2V0dGluZ1xuICAgICAgICB8IG51bGw7XG4gICAgYW5hbHl6ZXJTZXR0aW5nPzpcbiAgICAgICAgfCBtbEZhY2VBbmFseXplclNldHRpbmdcbiAgICAgICAgfCBNTEZhY2VWZXJpZmljYXRpb25BbmFseXplclNldHRpbmdcbiAgICAgICAgfCBtbEhhbmRLZXlwb2ludFNldHRpbmdcbiAgICAgICAgfCBtbEltYWdlU2VnbWVudGF0aW9uU2V0dGluZ1xuICAgICAgICB8IG1sT2JqZWN0QW5hbHlzZXJTZXR0aW5nXG4gICAgICAgIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTUxMZW5zRW5naW5lU2V0dGluZyB7XG4gICAgZnBzPzogbnVtYmVyIHwgbnVsbDtcbiAgICBkaXNwbGF5RGltZW5zaW9uST86IG51bWJlciB8IG51bGw7XG4gICAgZGlzcGxheURpbWVuc2lvbkkxPzogbnVtYmVyIHwgbnVsbDtcbiAgICBsZW5zVHlwZT86IE1MTGVuc1R5cGUgfCBudWxsO1xuICAgIGVuYWJsZUZvY3VzPzogYm9vbGVhbiB8IG51bGw7XG4gICAgZmxhc2hNb2RlPzogTUxGbGFzaE1vZGUgfCBudWxsO1xufVxuZXhwb3J0IGVudW0gTUxGbGFzaE1vZGUge1xuICAgIEFVVE8gPSBcImF1dG9cIixcbiAgICBPTiA9IFwib25cIixcbiAgICBPRkYgPSBcIm9mZlwiLFxufVxuZXhwb3J0IGVudW0gTUxMZW5zVHlwZSB7XG4gICAgQkFDS19MRU5TID0gMCxcbiAgICBGUk9OVF9MRU5TID0gMSxcbn1cblxuZXhwb3J0IGVudW0gTUxTdGlsbENvbXBvc2l0ZXJOYW1lIHtcbiAgICBGQUNFID0gXCJGQUNFXCIsXG4gICAgSEFORCA9IFwiSEFORFwiLFxuICAgIFNLRUxFVE9OID0gXCJTS0VMRVRPTlwiLFxuICAgIE9CSkVDVCA9IFwiT0JKRUNUXCIsXG4gICAgVEVYVCA9IFwiVEVYVFwiLFxuICAgIENMQVNTSUZJQ0FUSU9OID0gXCJjbGFzc2lmaWNhdGlvblwiLFxufVxuZXhwb3J0IGVudW0gTUxBbmFseXplck5hbWUge1xuICAgIExJVkVGQUNFID0gXCJGQUNFXCIsXG4gICAgTElWRUZBQ0UzRCA9IFwiRkFDRTNEXCIsXG4gICAgTElWRUZBQ0VNQVggPSBcIkZBQ0VNQVhcIixcbiAgICBMSVZFSEFORCA9IFwiSEFORFwiLFxuICAgIExJVkVTS0VMRVRPTiA9IFwiU0tFTEVUT05cIixcbiAgICBMSVZFT0JKRUNUID0gXCJPQkpFQ1RcIixcbiAgICBMSVZFQ0xBU1NJRklDQVRJT04gPSBcIkNMQVNTSUZJQ0FUSU9OXCIsXG4gICAgTElWRVNDRU5FID0gXCJTQ0VORVwiLFxuICAgIExJVkVURVhUID0gXCJURVhUXCIsXG4gICAgTElWRUdFU1RVUkUgPSBcIkdFU1RVUkVcIixcbn1cbmV4cG9ydCBpbnRlcmZhY2UgZG9ab29tUmVxIHtcbiAgICBzY2FsZT86IG51bWJlciB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIG1sRnJhbWVSZXEge1xuICAgIGFjdGlvbk5hbWU6IE1MRnJhbWU7XG4gICAgZmlsZVBhdGg6IGFueTtcbn1cbmV4cG9ydCBlbnVtIE1MRnJhbWUge1xuICAgIGdldFByZXZpZXdCaXRtYXAgPSBcImdldFByZXZpZXdCaXRtYXBcIixcbiAgICByZWFkQml0bWFwID0gXCJyZWFkQml0bWFwXCIsXG4gICAgcm90YXRlID0gXCJyb3RhdGVcIixcbiAgICBTQ1JFRU5fRklSU1RfUVVBRFJBTlQgPSAwLFxuICAgIFNDUkVFTl9TRUNPTkRfUVVBRFJBTlQgPSAxLFxuICAgIFNDUkVFTl9USElSRF9RVUFEUkFOVCA9IDIsXG4gICAgU0NSRUVOX0ZPVVJUSF9RVUFEUkFOVCA9IDMsXG59XG4vLy8vLy8vKioqKi8vLy8vLy8vL1xuLy8gQVBJIEtFWVxuLy8vLy8vLyoqKiovLy8vLy8vLy9cblxuZXhwb3J0IGludGVyZmFjZSBjb25maWdSZXEge1xuICAgIGFwaUtleTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIGFwcFNldHRpbmdSZXEge1xuICAgIGFwaUtleT86IHN0cmluZyB8IG51bGw7XG4gICAgYXBwbGljYXRpb25JZD86IHN0cmluZyB8IG51bGw7XG4gICAgY2VydEZpbmdlcnByaW50Pzogc3RyaW5nIHwgbnVsbDtcbn1cblxuLy8vLy8vLyoqKiovLy8vLy8vLy9cbi8vIENPTVBPU0lURVxuLy8vLy8vLyoqKiovLy8vLy8vLy9cbmV4cG9ydCBpbnRlcmZhY2UgY29tcG9zaXRlQW5hbHlzZXJSZXEge1xuICAgIGNvbXBvc2l0ZUFuYWx5c2VyQ29uZmlnOiBjb21wb3NpdGVBbmFseXNlckNvbmZpZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgY29tcG9zaXRlQW5hbHlzZXJDb25maWcge1xuICAgIGZpbGVQYXRoOiBhbnk7XG4gICAgYW5hbHl6ZXJOYW1lcz86IEFycmF5PE1MU3RpbGxDb21wb3NpdGVyTmFtZT47XG4gICAgYW5hbHl6ZXJTZXR0aW5nPzpcbiAgICAgICAgfCBtbEZhY2VBbmFseXplclNldHRpbmdcbiAgICAgICAgfCBNTEZhY2VWZXJpZmljYXRpb25BbmFseXplclNldHRpbmdcbiAgICAgICAgfCBtbEhhbmRLZXlwb2ludFNldHRpbmdcbiAgICAgICAgfCBtbEltYWdlU2VnbWVudGF0aW9uU2V0dGluZ1xuICAgICAgICB8IG1sT2JqZWN0QW5hbHlzZXJTZXR0aW5nXG4gICAgICAgIHwgbnVsbDtcbn1cblxuLy8vLy8vLyoqKiovLy8vLy8vLy9cbi8vIEFGVCBBTkFMWVNFUlxuLy8vLy8vLyoqKiovLy8vLy8vLy9cblxuZXhwb3J0IGludGVyZmFjZSBhZnRSZXEge1xuICAgIGF1ZGlvUGF0aDogYW55O1xuICAgIGFmdFNldHRpbmc/OiBBZnRTZXR0aW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFmdFNldHRpbmcge1xuICAgIGxhbmd1YWdlQ29kZT86IHN0cmluZyB8IG51bGw7XG4gICAgcHVuY3R1YXRpb25FbmFibGVkPzogYm9vbGVhbiB8IG51bGw7XG4gICAgdGltZU9mZnNldD86IGJvb2xlYW4gfCBudWxsO1xuICAgIHdvcmRUaW1lT2Zmc2V0RW5hYmxlZD86IGJvb2xlYW4gfCBudWxsO1xuICAgIHNlbnRlbmNlVGltZU9mZnNldEVuYWJsZWQ/OiBib29sZWFuIHwgbnVsbDtcbn1cblxuLy8vLy8vLyoqKiovLy8vLy8vLy9cbi8vIEFTUiBBTkFMWVNFUlxuLy8vLy8vLyoqKiovLy8vLy8vLy9cblxuZXhwb3J0IGludGVyZmFjZSBhc3JSZXEge1xuICAgIGxhbmd1YWdlPzogTEFOR1VBR0UgfCBudWxsO1xuICAgIGZlYXR1cmU/OiBGRUFUVVJFIHwgbnVsbDtcbn1cblxuZXhwb3J0IGVudW0gTUxBc3JDb25zdGFudHMge1xuICAgIFBVTkNUVUFUSU9OX0VOQUJMRSA9IFwiUFVOQ1RVQVRJT05fRU5BQkxFXCIsXG4gICAgRVJSX05PX05FVFdPUksgPSAxMTIwMixcbiAgICBFUlJfTk9fVU5ERVJTVEFORCA9IDExMjA0LFxuICAgIEVSUl9TRVJWSUNFX1VOQVZBSUxBQkxFID0gMTEyMDMsXG4gICAgRkVBVFVSRSA9IFwiRkVBVFVSRVwiLFxuICAgIExBTkdVQUdFID0gXCJMQU5HVUFHRVwiLFxuICAgIExBTl9FTl9VUyA9IFwiZW4tVVNcIixcbiAgICBMQU5fRlJfRlIgPSBcImZyLUZSXCIsXG4gICAgTEFOX1pIID0gXCJ6aFwiLFxuICAgIExBTl9aSF9DTiA9IFwiemgtQ05cIixcbiAgICBMQU5fRVNfRVMgPSBcImVzLUVTXCIsXG4gICAgTEFOX0RFX0RFID0gXCJkZS1ERVwiLFxuICAgIExBTl9SVV9SVSA9IFwicnUtUlVcIixcbiAgICBMQU5fSVRfSVQgPSBcIml0LUlUXCIsXG4gICAgTEFOX0FSID0gXCJhclwiLFxuICAgIExBTl9USF9USCA9IFwidGhfVEhcIixcbiAgICBMQU5fTVNfTVkgPSBcIm1zX01ZXCIsXG4gICAgTEFOX0ZJTF9QSCA9IFwiZmlsX1BIXCIsXG4gICAgVHVya2lzaCA9IFwidHItVFJcIixcbiAgICBFUlJfSU5WQUxJREFURV9UT0tFTiA9IDExMjE5LFxuICAgIEZFQVRVUkVfQUxMSU5PTkUgPSAxMixcbiAgICBGRUFUVVJFX1dPUkRGTFVYID0gMTEsXG4gICAgU0NFTkVTID0gXCJzY2VuZXNcIixcbiAgICBTQ0VORVNfU0hPUFBJTkcgPSBcInNob3BwaW5nXCIsXG4gICAgU1RBVEVfTElTVEVOSU5HID0gMSxcbiAgICBTVEFURV9OT19ORVRXT1JLID0gNyxcbiAgICBTVEFURV9OT19TT1VORCA9IDIsXG4gICAgU1RBVEVfTk9fU09VTkRfVElNRVNfRVhDRUVEID0gMyxcbiAgICBTVEFURV9OT19VTkRFUlNUQU5EID0gNixcbiAgICBTVEFURV9XQUlUSU5HID0gOSxcbiAgICBBQ1RJT05fSE1TX0FTUl9TUEVFQ0ggPSBcImNvbS5odWF3ZWkuaG1zLm1sc2RrLmFjdGlvbi5SRUNPR05JWkVfU1BFRUNIXCIsXG4gICAgV0FWRV9QQUlORV9FTkNPRElORyA9IFwiRU5DT0RJTkdcIixcbiAgICBXQVZFX1BBSU5FX1NBTVBMRV9SQVRFID0gXCJTQU1QTEVfUkFURVwiLFxuICAgIFdBVkVfUEFJTkVfQklUX1dJRFRIID0gXCJCSVRfV0lEVEhcIixcbiAgICBXQVZFX1BBSU5FX0NIQU5ORUxfQ09VTlQgPSBcIkNIQU5ORUxfQ09VTlRcIixcbn1cblxuZXhwb3J0IGVudW0gRkVBVFVSRSB7XG4gICAgRkVBVFVSRV9BTExJTk9ORSA9IDEyLFxuICAgIEZFQVRVUkVfV09SREZMVVggPSAxMSxcbn1cblxuZXhwb3J0IGVudW0gTEFOR1VBR0Uge1xuICAgIExBTl9FTl9VUyA9IFwiZW4tVVNcIixcbiAgICBMQU5fRlJfRlIgPSBcImZyLUZSXCIsXG4gICAgTEFOX1pIID0gXCJ6aFwiLFxuICAgIExBTl9aSF9DTiA9IFwiemgtQ05cIixcbiAgICBMQU5fRVNfRVMgPSBcImVzLUVTXCIsXG4gICAgTEFOX0RFX0RFID0gXCJkZS1ERVwiLFxuICAgIExBTl9SVV9SVSA9IFwicnUtUlVcIixcbiAgICBMQU5fSVRfSVQgPSBcIml0LUlUXCIsXG4gICAgTEFOX0FSID0gXCJhclwiLFxuICAgIExBTl9USF9USCA9IFwidGhfVEhcIixcbiAgICBMQU5fTVNfTVkgPSBcIm1zX01ZXCIsXG4gICAgTEFOX0ZJTF9QSCA9IFwiZmlsX1BIXCIsXG4gICAgVHVya2lzaCA9IFwidHItVFJcIixcbn1cblxuZXhwb3J0IGVudW0gTUxEb2N1bWVudFNrZXdDb3JyZWN0aW9uQ29uc3RhbnQge1xuICAgIFNVQ0NFU1MgPSAwLFxuICAgIERFVEVDVF9GQUlMRUQgPSAxLFxuICAgIENPUlJFQ1RJT05fRkFJTEVEID0gMixcbiAgICBJTUFHRV9EQVRBX0VSUk9SID0gMyxcbn1cbi8vLy8vLy8qKioqLy8vLy8vLy8vXG4vLyBTREsgQkFOSyBDQVJEIEFOQUxZU0VSXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xuXG5leHBvcnQgaW50ZXJmYWNlIGJhbmtDYXJkU0RLRGV0ZWN0b3JSZXEge1xuICAgIGZpbGVQYXRoOiBhbnk7XG4gICAgZGV0ZWN0VHlwZTogMDtcbiAgICBtTEJjckFuYWx5emVyU2V0dGluZz86IE1MQmNyQW5hbHl6ZXJTZXR0aW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTEJjckFuYWx5emVyU2V0dGluZyB7XG4gICAgbGFuZ1R5cGU/OiBzdHJpbmcgfCBudWxsO1xuICAgIHJlc3VsdFR5cGU/OiBNTEJjclJlc3VsdENvbmZpZyB8IG51bGw7XG59XG5cbi8vLy8vLy8qKioqLy8vLy8vLy8vXG4vLyBQTFVHSU4gQkFOSyBDQVJEIEFOQUxZU0VSXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xuXG5leHBvcnQgaW50ZXJmYWNlIGJhbmtDYXJkUGx1Z2luRGV0ZWN0b3JSZXEge1xuICAgIGRldGVjdFR5cGU6IDE7XG4gICAgbUxCY3JDYXB0dXJlQ29uZmlnPzogbUxCY3JDYXB0dXJlQ29uZmlnIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBtTEJjckNhcHR1cmVDb25maWcge1xuICAgIG9yaWVudGF0aW9uPzogTUxCY3JDYXB0dXJlQ29uZmlnIHwgbnVsbDtcbiAgICByZXN1bHRUeXBlPzogTUxCY3JSZXN1bHRDb25maWcgfCBudWxsO1xuICAgIHJlY01vZGU/OiBSZWNNb2RlIHwgbnVsbDtcbn1cblxuZXhwb3J0IGVudW0gUmVjTW9kZSB7XG4gICAgV0VBS19NT0RFID0gMCxcbiAgICBTVFJJQ1RfTU9ERSA9IDEsXG59XG5cbmV4cG9ydCBlbnVtIE1MQmNyQ2FwdHVyZUNvbmZpZyB7XG4gICAgRVJST1JfQ09ERV9JTklUX0NBTUVSQV9GQUlMRUQgPSAxMDEwMSxcbiAgICBSRVNVTFRfTlVNX09OTFkgPSAwLFxuICAgIE9SSUVOVEFUSU9OX0FVVE8gPSAwLFxuICAgIFdFQUtfTU9ERSA9IDAsXG4gICAgT1JJRU5UQVRJT05fTEFORFNDQVBFID0gMSxcbiAgICBPUklFTlRBVElPTl9QT1JUUkFJVCA9IDIsXG4gICAgUkVTVUxUX0FMTCA9IDIsXG4gICAgUkVTVUxUX1NJTVBMRSA9IDEsXG4gICAgU1RSSUNUX01PREUgPSAxLFxufVxuZXhwb3J0IGVudW0gTUxCY3JSZXN1bHRDb25maWcge1xuICAgIFJFU1VMVF9OVU1fT05MWSA9IDAsXG4gICAgUkVTVUxUX1NJTVBMRSA9IDEsXG4gICAgUkVTVUxUX0FMTCA9IDIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTUxCY3JDYXB0dXJlUmVzdWx0IHtcbiAgICBlcnJvckNvZGU/OiBNTEJjckNhcHR1cmVFcnJvckNvZGUgfCBudWxsO1xuICAgIGV4cGlyZT86IFN0cmluZyB8IG51bGw7XG4gICAgaXNzdWVyPzogU3RyaW5nIHwgbnVsbDtcbiAgICBudW1iZXI/OiBTdHJpbmcgfCBudWxsO1xuICAgIG51bWJlckJpdG1hcD86IGFueTtcbiAgICBvcmdhbml6YXRpb24/OiBTdHJpbmcgfCBudWxsO1xuICAgIHJpZ2luYWxCaXRtYXA/OiBhbnk7XG4gICAgdHlwZT86IFN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBlbnVtIE1MQmNyQ2FwdHVyZUVycm9yQ29kZSB7XG4gICAgRVJST1JfQ09ERV9JTklUX0NBTUVSQV9GQUlMRUQgPSAxMDEwMSxcbn1cbi8vLy8vLy8qKioqLy8vLy8vLy8vXG4vL0NsYXNzaWZ5XG4vLy8vLy8vKioqKi8vLy8vLy8vL1xuXG5leHBvcnQgaW50ZXJmYWNlIGxvY2FsSW1hZ2VDbGFzc2lmaWNhdGlvblJlcSB7XG4gICAgb2NyVHlwZTogTUxJbWFnZUNsYXNzaWZpY2F0aW9uQ29uZmlnIHwgbnVsbDtcbiAgICBhbmFseXNlTW9kZT86IG51bWJlciB8IG51bGw7XG4gICAgbG9jYWxDbGFzc2lmaWNhdGlvbkFuYWx5emVyU2V0dGluZz86IExvY2FsQ2xhc3NpZmljYXRpb25BbmFseXplclNldHRpbmcgfCBudWxsO1xuICAgIGZpbGVQYXRoOiBhbnk7XG59XG5leHBvcnQgaW50ZXJmYWNlIExvY2FsQ2xhc3NpZmljYXRpb25BbmFseXplclNldHRpbmcge1xuICAgIHBvc3NpYmlsaXR5PzogbnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSByZW1vdGVJbWFnZUNsYXNzaWZpY2F0aW9uUmVxIHtcbiAgICBvY3JUeXBlOiBNTEltYWdlQ2xhc3NpZmljYXRpb25Db25maWc7XG4gICAgYW5hbHlzZU1vZGU/OiBudW1iZXI7XG4gICAgcmVtb3RlQ2xhc3NpZmljYXRpb25BbmFseXplclNldHRpbmc/OiBSZW1vdGVDbGFzc2lmaWNhdGlvbkFuYWx5emVyU2V0dGluZyB8IG51bGw7XG4gICAgZmlsZVBhdGg6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZW1vdGVDbGFzc2lmaWNhdGlvbkFuYWx5emVyU2V0dGluZyB7XG4gICAgbWF4UmVzdWx0cz86IG51bWJlciB8IG51bGw7XG4gICAgcG9zc2liaWxpdHk/OiBudW1iZXIgfCBudWxsO1xuICAgIGlzRW5hYmxlRmluZ2VycHJpbnRWZXJpZmljYXRpb24/OiBib29sZWFuIHwgbnVsbDtcbn1cblxuZXhwb3J0IGVudW0gTUxJbWFnZUNsYXNzaWZpY2F0aW9uQ29uZmlnIHtcbiAgICBUWVBFX0xPQ0FMID0gMCxcbiAgICBUWVBFX1JFTU9URSA9IDEsXG59XG5cbi8vLy8vLy8qKioqLy8vLy8vLy8vXG4vL0N1c3RvbSBNb2RlbCBEb3dubG9hZFxuLy8vLy8vLyoqKiovLy8vLy8vLy9cblxuZXhwb3J0IGludGVyZmFjZSBkb3dubG9hZE1vZGVsUmVxIHtcbiAgICBkZXRlY3RUeXBlOiAxO1xuICAgIGZpbGVQYXRoOiBhbnk7XG4gICAgZG93bmxvYWRTdHJhdGVneVNldHRpbmc/OiBEb3dubG9hZFN0cmF0ZWd5U2V0dGluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG93bmxvYWRTdHJhdGVneVNldHRpbmcge1xuICAgIGlzQ2hhcmdpbmdOZWVkOiBib29sZWFuIHwgbnVsbDtcbiAgICBpc1dpZmlOZWVkOiBib29sZWFuIHwgbnVsbDtcbiAgICBpc0RldmljZUlkbGVOZWVkOiBib29sZWFuIHwgbnVsbDtcbiAgICBzZXRSZWdpb24/OiBEb3dubG9hZFN0cmF0ZWd5Q3VzdG9tIHwgbnVsbDtcbn1cbmV4cG9ydCBlbnVtIERvd25sb2FkU3RyYXRlZ3lDdXN0b20ge1xuICAgIFJFR0lPTl9EUl9DSElOQSA9IDEwMDIsXG4gICAgUkVHSU9OX0RSX0FGSUxBID0gMTAwMyxcbiAgICBSRUdJT05fRFJfRVVST1BFID0gMTAwNCxcbiAgICBSRUdJT05fRFJfUlVTU0lBID0gMTAwNSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBvd25DdXN0b21Nb2RlbFJlcSB7XG4gICAgZGV0ZWN0VHlwZTogbnVtYmVyO1xuICAgIGZpbGVQYXRoOiBhbnk7XG4gICAgbW9kZWxGdWxsTmFtZTogc3RyaW5nIHwgbnVsbDtcbiAgICBtb2RlbE5hbWU6IHN0cmluZyB8IG51bGw7XG4gICAgbGFiZWxGaWxlTmFtZTogc3RyaW5nIHwgbnVsbDtcbiAgICBiaXRtYXBIZWlnaHQ6IG51bWJlciB8IG51bGw7XG4gICAgYml0bWFwV2lkdGg6IG51bWJlciB8IG51bGw7XG4gICAgb3V0UHV0U2l6ZTogbnVtYmVyIHwgbnVsbDtcbn1cblxuLy8vLy8vLyoqKiovLy8vLy8vLy9cbi8vRG9jdW1lbnQgQW5hbHlzZXJcbi8vLy8vLy8qKioqLy8vLy8vLy8vXG5cbmV4cG9ydCBpbnRlcmZhY2UgZG9jdW1lbnRJbWFnZUFuYWx5c2VyUmVxIHtcbiAgICBkb2N1bWVudFNldHRpbmc/OiBEb2N1bWVudFNldHRpbmcgfCBudWxsO1xuICAgIGZpbGVQYXRoOiBhbnk7XG59XG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50U2V0dGluZyB7XG4gICAgYm9yZGVyVHlwZT86IE1MUmVtb3RlVGV4dFNldHRpbmcgfCBudWxsO1xuICAgIExhbmd1YWdlTGlzdD86IEFycmF5PHN0cmluZz4gfCBudWxsO1xuICAgIGVuYWJsZUZpbmdlcnByaW50VmVyaWZpY2F0aW9uOiBib29sZWFuIHwgbnVsbDtcbn1cblxuZXhwb3J0IGVudW0gTUxSZW1vdGVUZXh0U2V0dGluZyB7XG4gICAgT0NSX0xPT1NFX1NDRU5FID0gMSxcbiAgICBPQ1JfQ09NUEFDVF9TQ0VORSA9IDIsXG4gICAgTkdPTiA9IFwiTkdPTlwiLFxuICAgIEFSQyA9IFwiQVJDXCIsXG4gICAgT1RIRVIgPSA1LFxuICAgIE5FV19MSU5FX0NIQVJBQ1RFUiA9IDgsXG4gICAgU1BBQ0UgPSA2LFxufVxuZXhwb3J0IGVudW0gbGFuZ3VhZ2VMaXN0UmVtb3RlVGV4dCB7XG4gICAgTEFUSU4gPSBcInJtXCIsXG4gICAgRU5HTElTSCA9IFwiZW5cIixcbiAgICBDSElORVNFID0gXCJ6aFwiLFxuICAgIEpBUEFORVNFID0gXCJqYVwiLFxuICAgIEtPUkVBTiA9IFwia29cIixcbiAgICBSVVNTSUFOID0gXCJydVwiLFxuICAgIEdFUk1BTiA9IFwiZGVcIixcbiAgICBGUkVOQ0ggPSBcImZyXCIsXG4gICAgSVRBTElBTiA9IFwiaXRcIixcbiAgICBQT1JUVUdVRVNFID0gXCJwdFwiLFxuICAgIFNQQU5JU0ggPSBcImVzXCIsXG4gICAgUE9MSVNIID0gXCJwbFwiLFxuICAgIE5PUldFR0lBTiA9IFwibm9cIixcbiAgICBTV0VESVNIID0gXCJzdlwiLFxuICAgIERBTklTSCA9IFwiZGFcIixcbiAgICBUVVJLSVNIID0gXCJ0clwiLFxuICAgIEZJTk5JU0ggPSBcImZpXCIsXG4gICAgVEhBSSA9IFwidGhcIixcbiAgICBBUkFCSUMgPSBcImFyXCIsXG4gICAgSElOREkgPSBcImhpXCIsXG59XG5cbi8vLy8vLy8qKioqLy8vLy8vLy8vXG4vL0Zvcm0gUmVjb2duaXplciBBbmFseXNlclxuLy8vLy8vLyoqKiovLy8vLy8vLy9cblxuZXhwb3J0IGludGVyZmFjZSBmb3JtUmVjb2duaXplckFuYWx5c2VyUmVxIHtcbiAgICBmaWxlUGF0aDogYW55O1xuICAgIHN5bmNUeXBlOiBNTEZvcm1SZWNvZ2l0aW9uQ29uZmlnO1xufVxuZXhwb3J0IGVudW0gTUxGb3JtUmVjb2dpdGlvbkNvbmZpZyB7XG4gICAgU1lOQ19UWVBFID0gMSxcbiAgICBBU1lOQ19UWVBFID0gMCxcbn1cblxuLy8vLy8vLyoqKiovLy8vLy8vLy9cbi8vRG9jdW1lbnQgU2tldyBDb3JyZWN0aW9uXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xuXG5leHBvcnQgaW50ZXJmYWNlIGRvY3VtZW50U2tld0NvcnJlY3Rpb25SZXEge1xuICAgIGZpbGVQYXRoOiBhbnk7XG4gICAgc3luY01vZGU/OiBNTEZvcm1SZWNvZ2l0aW9uQ29uZmlnIHwgbnVsbDtcbn1cblxuLy8vLy8vLyoqKiovLy8vLy8vLy9cbi8vIFNUSUxMICYmIExJVkUgRkFDRSBBTkFMWVNFUlxuLy8vLy8vLyoqKiovLy8vLy8vLy9cblxuZXhwb3J0IGludGVyZmFjZSBmYWNlUmVxIHtcbiAgICBtbEZhY2VBbmFseXNlclNldHRpbmc/OiBtbEZhY2VBbmFseXplclNldHRpbmcgfCBudWxsO1xuICAgIGFuYWx5c2VNb2RlPzogTUxGYWNlQ29uZmlncyB8IG51bGw7XG4gICAgZmlsZVBhdGg6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBmYWNlVmVyaWZpY2F0aW9uUmVxIHtcbiAgICBtbEZhY2VWZXJpZmljYXRpb25BbmFseXplclNldHRpbmc/OiBNTEZhY2VWZXJpZmljYXRpb25BbmFseXplclNldHRpbmcgfCBudWxsO1xuICAgIHN5bmNUeXBlPzogc3luY1R5cGUgfCBudWxsO1xuICAgIGZpbGVQYXRoOiBhbnk7XG4gICAgZmlsZVBhdGgyOiBhbnk7XG59XG5cbmV4cG9ydCBlbnVtIE1MRmFjZUNvbmZpZ3Mge1xuICAgIFRZUEVfMkRfU1lOQyA9IDAsXG4gICAgVFlQRV8yRF9BU1lOQyA9IDEsXG4gICAgVFlQRV8zRF9TWU5DID0gMixcbiAgICBUWVBFXzNEX0FTWU5DID0gMyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGYWNlR3JhcGhpY1NldHRpbmcge1xuICAgIGZhY2VQb3NpdGlvblBhaW50U2V0dGluZz86IEZhY2VQb3NpdGlvblBhaW50U2V0dGluZyB8IG51bGw7XG4gICAgdGV4dFBhaW50U2V0dGluZz86IFRleHRQYWludFNldHRpbmdGYWNlIHwgbnVsbDtcbiAgICBmYWNlRmVhdHVyZVBhaW50VGV4dFNldHRpbmc/OiBGYWNlRmVhdHVyZVBhaW50VGV4dFNldHRpbmcgfCBudWxsO1xuICAgIGtleXBvaW50UGFpbnRTZXR0aW5nPzogS2V5cG9pbnRQYWludFNldHRpbmcgfCBudWxsO1xuICAgIGJveFBhaW50U2V0dGluZz86IEJveFBhaW50U2V0dGluZ0ZhY2UgfCBudWxsO1xuICAgIGZhY2VQYWludFNldHRpbmc/OiBGYWNlUGFpbnRTZXR0aW5nIHwgbnVsbDtcbiAgICBleWVQYWludFNldHRpbmc/OiBFeWVQYWludFNldHRpbmcgfCBudWxsO1xuICAgIGV5ZWJyb3dQYWludFNldHRpbmc/OiBFeWVicm93UGFpbnRTZXR0aW5nIHwgbnVsbDtcbiAgICBub3NlUGFpbnRTZXR0aW5nPzogTm9zZVBhaW50U2V0dGluZyB8IG51bGw7XG4gICAgbm9zZUJhc2VQYWludFNldHRpbmc/OiBOb3NlQmFzZVBhaW50U2V0dGluZyB8IG51bGw7XG4gICAgbGlwUGFpbnRTZXR0aW5nPzogTGlwUGFpbnRTZXR0aW5nIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGlwUGFpbnRTZXR0aW5nIHtcbiAgICBjb2xvcj86IFN0cmluZyB8IENvbG9ycyB8IG51bGw7XG4gICAgc3R5bGU/OiBSZWN0U3R5bGUgfCBudWxsO1xuICAgIHN0cm9rZVdpZHRoOiBOdW1iZXIgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBOb3NlUGFpbnRTZXR0aW5nIHtcbiAgICBjb2xvcj86IFN0cmluZyB8IENvbG9ycyB8IG51bGw7XG4gICAgc3R5bGU/OiBSZWN0U3R5bGUgfCBudWxsO1xuICAgIHN0cm9rZVdpZHRoPzogTnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBOb3NlQmFzZVBhaW50U2V0dGluZyB7XG4gICAgY29sb3I/OiBTdHJpbmcgfCBDb2xvcnMgfCBudWxsO1xuICAgIHN0eWxlPzogUmVjdFN0eWxlIHwgbnVsbDtcbiAgICBzdHJva2VXaWR0aD86IE51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRXllYnJvd1BhaW50U2V0dGluZyB7XG4gICAgY29sb3I/OiBTdHJpbmcgfCBDb2xvcnMgfCBudWxsO1xuICAgIHN0eWxlPzogUmVjdFN0eWxlO1xuICAgIHN0cm9rZVdpZHRoPzogTnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBFeWVQYWludFNldHRpbmcge1xuICAgIGNvbG9yPzogU3RyaW5nIHwgQ29sb3JzO1xuICAgIHN0eWxlPzogUmVjdFN0eWxlIHwgQ29sb3JzO1xuICAgIHN0cm9rZVdpZHRoOiBOdW1iZXIgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBGYWNlUGFpbnRTZXR0aW5nIHtcbiAgICBjb2xvcj86IFN0cmluZyB8IENvbG9ycyB8IG51bGw7XG4gICAgc3R5bGU/OiBSZWN0U3R5bGUgfCBudWxsO1xuICAgIHN0cm9rZVdpZHRoOiBOdW1iZXIgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBCb3hQYWludFNldHRpbmdGYWNlIHtcbiAgICBjb2xvcj86IFN0cmluZyB8IENvbG9ycyB8IG51bGw7XG4gICAgc3R5bGU/OiBSZWN0U3R5bGUgfCBudWxsO1xuICAgIHN0cm9rZVdpZHRoPzogTnVtYmVyIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2V5cG9pbnRQYWludFNldHRpbmcge1xuICAgIGNvbG9yPzogQ29sb3JzIHwgQ29sb3JzIHwgbnVsbDtcbiAgICBzdHlsZT86IFJlY3RTdHlsZSB8IG51bGw7XG4gICAgdGV4dFNpemU6IE51bWJlciB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmFjZUZlYXR1cmVQYWludFRleHRTZXR0aW5nIHtcbiAgICBjb2xvcj86IENvbG9ycyB8IG51bGw7XG4gICAgdGV4dFNpemU6IE51bWJlciB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIEZhY2VQb3NpdGlvblBhaW50U2V0dGluZyB7XG4gICAgY29sb3I/OiBDb2xvcnMgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBUZXh0UGFpbnRTZXR0aW5nRmFjZSB7XG4gICAgY29sb3I/OiBDb2xvcnMgfCBudWxsO1xuICAgIHRleHRTaXplPzogTnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTEZhY2VWZXJpZmljYXRpb25BbmFseXplclNldHRpbmcge1xuICAgIG1heEZhY2VEZXRjdGVkOiBudW1iZXIgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBtbEZhY2VBbmFseXplclNldHRpbmcge1xuICAgIGZlYXR1cmVUeXBlPzogTUxGYWNlU2V0dGluZyB8IG51bGw7XG4gICAga2V5UG9pbnRUeXBlPzogTUxGYWNlU2V0dGluZyB8IG51bGw7XG4gICAgbWF4U2l6ZUZhY2VPbmx5PzogYm9vbGVhbiB8IG51bGw7XG4gICAgbWluRmFjZVByb3BvcnRpb24/OiBudW1iZXIgfCBudWxsO1xuICAgIHBlcmZvcm1hbmNlVHlwZT86IE1MRmFjZVNldHRpbmcgfCBudWxsO1xuICAgIHBvc2VEaXNhYmxlZD86IGJvb2xlYW4gfCBudWxsO1xuICAgIHNoYXBlVHlwZT86IE1MRmFjZVNldHRpbmcgfCBudWxsO1xuICAgIHRyYWNpbmdBbGxvd2VkPzogYm9vbGVhbiB8IG51bGw7XG4gICAgdHJhY2luZ01vZGU/OiBudW1iZXIgfCBudWxsO1xufVxuXG5leHBvcnQgZW51bSBNTEZhY2VTZXR0aW5nIHtcbiAgICBNT0RFX1RSQUNJTkdfRkFTVCA9IDEsXG4gICAgTU9ERV9UUkFDSU5HX1JPQlVTVCA9IDIsXG4gICAgVFlQRV9GRUFUVVJFUyA9IDEsXG4gICAgVFlQRV9GRUFUVVJFX0FHRSA9IDI1NixcbiAgICBUWVBFX0ZFQVRVUkVfQkVBUkQgPSAzMixcbiAgICBUWVBFX0ZFQVRVUkVfRU1PVElPTiA9IDQsXG4gICAgVFlQRV9GRUFUVVJFX0VZRUdMQVNTID0gOCxcbiAgICBUWVBFX0ZFQVRVUkVfR0VOREFSID0gMTI4LFxuICAgIFRZUEVfRkVBVFVSRV9IQVQgPSAxNixcbiAgICBUWVBFX0ZFQVRVUkVfT1BFTkNMT1NFRVlFID0gNjQsXG4gICAgVFlQRV9LRVlQT0lOVFMgPSAxLFxuICAgIFRZUEVfUFJFQ0lTSU9OID0gMSxcbiAgICBUWVBFX1NIQVBFUyA9IDIsXG4gICAgVFlQRV9TUEVFRCA9IDIsXG4gICAgVFlQRV9VTlNVUFBPUlRfRkVBVFVSRVMgPSAyLFxuICAgIFRZUEVfVU5TVVBQT1JUX0tFWVBPSU5UUyA9IDAsXG4gICAgVFlQRV9VTlNVUFBPUlRfU0hBUEVTID0gMyxcbiAgICBUWVBFX0JPVFRPTV9PRl9NT1VUSCA9IDEsXG4gICAgVFlQRV9MRUZUX0NIRUVLID0gMixcbiAgICBUWVBFX0xFRlRfRUFSID0gMyxcbiAgICBUWVBFX0xFRlRfU0lERV9PRl9NT1VUSCA9IDYsXG4gICAgVFlQRV9SSUdIVF9DSEVFSyA9IDgsXG4gICAgVFlQRV9SSUdIVF9FQVIgPSA5LFxuICAgIFRZUEVfUklHSFRfU0lERV9PRl9NT1VUSCA9IDEyLFxuICAgIFRZUEVfVElQX09GX0xFRlRfRUFSID0gNCxcbiAgICBUWVBFX1RJUF9PRl9OT1NFID0gNyxcbiAgICBUWVBFX1RJUF9PRl9SSUdIVF9FQVIgPSAxMCxcbiAgICBUWVBFX0FMTCA9IDAsXG4gICAgVFlQRV9CT1RUT01fT0ZfTEVGVF9FWUVCUk9XID0gNCxcbiAgICBUWVBFX0JPVFRPTV9PRl9MT1dFUl9MSVAgPSA4LFxuICAgIFRZUEVfQk9UVE9NX09GX05PU0UgPSAxMixcbiAgICBUWVBFX0JPVFRPTV9PRl9SSUdIVF9FWUVCUk9XID0gNSxcbiAgICBUWVBFX0JPVFRPTV9PRl9VUFBFUl9MSVAgPSAxMCxcbiAgICBUWVBFX0JSSURHRV9PRl9OT1NFID0gMTMsXG4gICAgVFlQRV9GQUNFID0gMSxcbiAgICBUWVBFX1RPUF9PRl9MRUZUX0VZRUJST1cgPSA2LFxuICAgIFRZUEVfVE9QX09GX0xPV0VSX0xJUCA9IDksXG4gICAgVFlQRV9UT1BfT0ZfUklHSFRfRVlFQlJPVyA9IDcsXG4gICAgVFlQRV9UT1BfT0ZfVVBQRVJfTElQID0gMTEsXG59XG5cbi8vLy8vLy8qKioqLy8vLy8vLy8vXG4vLyBHRU5FUkFMIENBUkQgQU5BTFlTRVJcbi8vLy8vLy8qKioqLy8vLy8vLy8vXG5cbmV4cG9ydCBpbnRlcmZhY2UgbWF4RmFjZVZlcmlmaWNhdGlvblJlcSB7XG4gICAgTWF4RmFjZURldGN0ZWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgZ2VuZXJhbENhcmREZXRlY3RvclJlcSB7XG4gICAgZ2NyQ2FwdHVyZUNvbmZpZz86IGdjckNhcHR1cmVDb25maWc7XG4gICAgZ2NyQ2FwdHVyZVVJQ29uZmlnPzogZ2NyQ2FwdHVyZVVJQ29uZmlnO1xuICAgIGNhcHR1cmVUeXBlPzogZ2NyQ2FwdHVyZVR5cGUgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIGdjckNhcHR1cmVDb25maWcge1xuICAgIGxhbmd1YWdlOiBzdHJpbmc7XG59XG5leHBvcnQgZW51bSBnY3JDYXB0dXJlVHlwZSB7XG4gICAgQ0FQVFVSRV9BQ1RJVklUWSA9IDAsXG4gICAgQ0FQVFVSRV9QSE9UTyA9IDEsXG4gICAgQ0FQVFVSRV9JTUFHRSA9IDIsXG59XG5leHBvcnQgaW50ZXJmYWNlIGdjckNhcHR1cmVVSUNvbmZpZyB7XG4gICAgb3JpZW50YXRpb24/OiBNTEdjckNhcHR1cmVVSUNvbmZpZyB8IG51bGw7XG4gICAgdGlwVGV4dD86IHN0cmluZyB8IG51bGw7XG4gICAgdGlwVGV4dENvbG9yPzogbnVtYmVyIHwgbnVsbDtcbiAgICBwaG90b0J1dHRvblJlc0lkPzogbnVtYmVyIHwgbnVsbDtcbiAgICBzY2FuQm94Q29ybmVyQ29sb3I/OiBudW1iZXIgfCBudWxsO1xuICAgIGJhY2tCdXR0b25SZWRJZD86IG51bWJlciB8IG51bGw7XG4gICAgdG9yY2hSZWRJZD86IG51bWJlciB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIGdjclNldHRpbmdSZXN1bHRzIHtcbiAgICBnY3JDb25maWdMYW5ndWFnZTogU3RyaW5nO1xuICAgIHRvcmNoT25SZXNJZDogbnVtYmVyO1xuICAgIHRpcFRleHRDb2xvcjogbnVtYmVyO1xuICAgIHRpcFRleHQ6IFN0cmluZztcbiAgICBiYWNrQnV0dG9uUmVzSWQ6IG51bWJlcjtcbiAgICBvcmllbnRhdGlvbjogbnVtYmVyO1xuICAgIHBob3RvQnV0dG9uUmVzSWQ6IG51bWJlcjtcbiAgICBzY2FuQm94U2NyZWVuUmF0aW86IG51bWJlcjtcbiAgICBzY2FuQm94Q29ybmVyQ29sb3I6IG51bWJlcjtcbiAgICBzY2FuQm94QXNwZWN0UmF0aW86IG51bWJlcjtcbn1cblxuZXhwb3J0IGVudW0gTUxHY3JDYXB0dXJlVUlDb25maWcge1xuICAgIE9SSUVOVEFUSU9OX0FVVE8gPSAwLFxuICAgIE9SSUVOVEFUSU9OX0xBTkRTQ0FQRSA9IDEsXG4gICAgT1JJRU5UQVRJT05fUE9SVFJBSVQgPSAyLFxufVxuXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xuLy8gSUQgQ0FSRCBBTkFMWVNFUlxuLy8vLy8vLyoqKiovLy8vLy8vLy9cblxuZXhwb3J0IGludGVyZmFjZSBpY3JWbkRldGVjdG9yUmVxIHtcbiAgICBjYXB0dXJlVHlwZTogaWNyQ2FwdHVyZVR5cGU7XG4gICAgZmlsZVBhdGg/OiBhbnkgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIGljckNuRGV0ZWN0b3JSZXEge1xuICAgIGNhcHR1cmVUeXBlOiBpY3JDYXB0dXJlVHlwZTtcbiAgICBmaWxlUGF0aD86IGFueSB8IG51bGw7XG4gICAgaXNGcm9udD86IGJvb2xlYW4gfCBudWxsO1xufVxuXG5leHBvcnQgZW51bSBpY3JDYXB0dXJlVHlwZSB7XG4gICAgQ0FQVFVSRV9DQU1FUkEgPSAwLFxuICAgIENBUFRVUkVfSU1BR0UgPSAxLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIGNyZWF0ZUlkQ2FyZFJlcSB7XG4gICAgbWxJY3JBbmFseXplclNldHRpbmc/OiBNTEljckFuYWx5emVyU2V0dGluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgbG9jYWxBbmFseXNlclJlcSB7XG4gICAgc2V0dGluZ3M6IE1MSWNyQW5hbHl6ZXJTZXR0aW5nO1xuICAgIGZpbGVQYXRoPzogYW55IHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTUxJY3JBbmFseXplclNldHRpbmcge1xuICAgIGNvdW50cnlDb2RlOiBzdHJpbmc7XG4gICAgaGFzaENvZGU/OiBudW1iZXIgfCBudWxsO1xuICAgIHNpZGVUeXBlPzogTUxJY3JTaWRlVHlwZSB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgbG9jYWxBbmFseXplclJlcSB7fVxuZXhwb3J0IGVudW0gTUxJY3JTaWRlVHlwZSB7XG4gICAgRlJPTlQgPSBcIkZST05UXCIsXG4gICAgQkFDSyA9IFwiQkFDS1wiLFxufVxuXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xuLy9MaXZlICYmIFN0aWwgSGFuZGtleVBvaW50XG4vLy8vLy8vKioqKi8vLy8vLy8vL1xuXG5leHBvcnQgaW50ZXJmYWNlIHN0aWxsSGFuZEtleXBvaW50UmVxIHtcbiAgICBzeW5jVHlwZT86IHN5bmNUeXBlIHwgbnVsbDtcbiAgICBmaWxlUGF0aDogYW55O1xuICAgIGhhbmRrZXlTZXR0aW5nPzogbWxIYW5kS2V5cG9pbnRTZXR0aW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBzdGlsbEdlc3R1cmVSZXEge1xuICAgIHN5bmNUeXBlPzogc3luY1R5cGUgfCBudWxsO1xuICAgIGZpbGVQYXRoOiBhbnk7XG59XG5cbmV4cG9ydCBlbnVtIHN5bmNUeXBlIHtcbiAgICBTWU5DX01PREUgPSAwLFxuICAgIEFTWU5DX01PREUgPSAxLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MR2VzdHVyZSB7XG4gICAgcmVjdD86IFJlY3Q7XG4gICAgc2NvcmU/OiBudW1iZXI7XG4gICAgY2F0ZWdvcnk/OiBudW1iZXI7XG4gICAgaGFzaENvZGU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBlbnVtIEdlc3R1cmVUeXBlcyB7XG4gICAgT05FID0gMCxcbiAgICBTRUNPTkQgPSAxLFxuICAgIFRIUkVFID0gMixcbiAgICBGT1VSID0gMyxcbiAgICBGSVZFID0gNCxcbiAgICBTSVggPSA1LFxuICAgIFNFVkVOID0gNixcbiAgICBFSUdIVCA9IDcsXG4gICAgTklORSA9IDgsXG4gICAgRElTUyA9IDksXG4gICAgRklTVCA9IDEwLFxuICAgIEdPT0QgPSAxMSxcbiAgICBIRUFSVCA9IDEyLFxuICAgIE9LID0gMTMsXG4gICAgVU5LTk9XTiA9IDE0LFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlc3R1cmVHcmFwaGljU2V0dGluZyB7XG4gICAgaWRQYWludG5ld1NldHRpbmc/OiBJZFBhaW50bmV3U2V0dGluZyB8IG51bGw7XG4gICAgcmVjdFBhaW50U2V0dGluZz86IFJlY3RQYWludFNldHRpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhhbmRrZXlHcmFwaGljU2V0dGluZyB7XG4gICAgaWRQYWludG5ld1NldHRpbmc/OiBJZFBhaW50bmV3U2V0dGluZyB8IG51bGw7XG4gICAgcmVjdFBhaW50U2V0dGluZz86IFJlY3RQYWludFNldHRpbmcgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBJZFBhaW50bmV3U2V0dGluZyB7XG4gICAgY29sb3I/OiBDb2xvcnMgfCBudWxsO1xuICAgIHRleHRTaXplPzogTnVtYmVyIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUmVjdFBhaW50U2V0dGluZyB7XG4gICAgY29sb3I/OiBDb2xvcnMgfCBudWxsO1xuICAgIHN0eWxlPzogUmVjdFN0eWxlIHwgbnVsbDtcbiAgICBib3hTdHJva2VXaWR0aD86IE51bWJlciB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIG1sSGFuZEtleXBvaW50U2V0dGluZyB7XG4gICAgc2NlbmVUeXBlPzogSGFuZGtleVBvaW50Q29uZmlnIHwgbnVsbDtcbiAgICBtYXhIYW5kUmVzdWx0cz86IG51bWJlciB8IG51bGw7XG59XG5leHBvcnQgZW51bSBIYW5ka2V5UG9pbnRDb25maWcge1xuICAgIFRZUEVfQUxMID0gMCxcbiAgICBUWVBFX0tFWVBPSU5UX09OTFkgPSAxLFxuICAgIFRZUEVfUkVDVF9PTkxZID0gMixcbiAgICBNQVhfSEFORFNfTlVNID0gMTAsXG59XG5cbi8vLy8vLy8qKioqLy8vLy8vLy8vXG4vL0ltYWdlIFN1cGVyIFJlc29sdXRpb25cbi8vLy8vLy8qKioqLy8vLy8vLy8vXG5cbmV4cG9ydCBpbnRlcmZhY2UgaW1hZ2VTdXBlclJlc29sdXRpb25SZXEge1xuICAgIGZpbGVQYXRoOiBhbnk7XG4gICAgaW1nU3VwZXJSZXNvbHV0aW9uU2V0dGluZz86IEltZ1N1cGVyUmVzb2x1dGlvblNldHRpbmcgfCBudWxsO1xuICAgIHN5bmNUeXBlPzogTUxGb3JtUmVjb2dpdGlvbkNvbmZpZyB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIEltZ1N1cGVyUmVzb2x1dGlvblNldHRpbmcge1xuICAgIHNjYWxlVHlwZT86IEltZ1N1cGVyUmVzb2x1dGlvbkNvbmZpZztcbn1cbmV4cG9ydCBlbnVtIEltZ1N1cGVyUmVzb2x1dGlvbkNvbmZpZyB7XG4gICAgSVNSX1NDQUxFXzFYID0gMS4wLFxuICAgIElTUl9TQ0FMRV8zWCA9IDMuMCxcbn1cbi8vLy8vLy8qKioqLy8vLy8vLy8vXG4vL1Byb2R1Y3QgVmlzaW9uIEFuYWx5c2VyXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xuXG5leHBvcnQgaW50ZXJmYWNlIHByb2R1Y3RSZXEge1xuICAgIGZpbGVQYXRoPzogYW55IHwgbnVsbDtcbiAgICBkZXRlY3RUeXBlPzogbnVtYmVyO1xuICAgIG1sUHJvZHVjdFNldHRpbmc/OiBtbFByb2R1Y3RTZXR0aW5nIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgbWxQcm9kdWN0U2V0dGluZyB7XG4gICAgbGFyZ2VzdE51bU9mUmV0dXJucz86IG51bWJlciB8IG51bGw7XG4gICAgcHJvZHVjdFNldElkPzogc3RyaW5nIHwgbnVsbDtcbiAgICByZWdpb24/OiBNTFByb2R1Y3RDb25maWcgfCBudWxsO1xufVxuZXhwb3J0IGVudW0gTUxQcm9kdWN0Q29uZmlnIHtcbiAgICBSRUdJT05fRFJfQ0hJTkEgPSAxMDAyLFxuICAgIFJFR0lPTl9EUl9BRklMQSA9IDEwMDMsXG4gICAgUkVHSU9OX0RSX0VVUk9QRSA9IDEwMDQsXG4gICAgUkVHSU9OX0RSX1JVU1NJQSA9IDEwMDUsXG4gICAgUkVHSU9OX0RSX0dFUk1BTiA9IDEwMDYsXG4gICAgUkVHSU9OX0RSX1NJQU5HQVBPUkUgPSAxMDA3LFxufVxuXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xuLy9UZXh0IEltYWdlIFN1cGVyIFJlc29sdXRpb25cbi8vLy8vLy8qKioqLy8vLy8vLy8vXG5cbmV4cG9ydCBpbnRlcmZhY2UgdGV4dEltYWdlU3VwZXJSZXNvbHV0aW9uUmVxIHtcbiAgICBmaWxlUGF0aDogYW55O1xuICAgIGFuYWx5c2VNb2RlPzogTUxGb3JtUmVjb2dpdGlvbkNvbmZpZyB8IG51bGw7XG59XG5cbi8vLy8vLy8qKioqLy8vLy8vLy8vXG4vL0lNQUdFIFNUSUxMICYmIExJVkVTRUdNRU5UQVRJT05cbi8vLy8vLy8qKioqLy8vLy8vLy8vXG5cbmV4cG9ydCBpbnRlcmZhY2UgaW1nU2VnbWVudGF0aW9uUmVxIHtcbiAgICBpbWFnZVNlZ21lbnRhdGlvblNldHRpbmc/OiBtbEltYWdlU2VnbWVudGF0aW9uU2V0dGluZztcbiAgICBmaWxlUGF0aDogYW55O1xuICAgIGFuYWx5c2VNb2RlPzogTUxGb3JtUmVjb2dpdGlvbkNvbmZpZyB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgbWxJbWFnZVNlZ21lbnRhdGlvblNldHRpbmcge1xuICAgIGlzRXhhY3Q6IGJvb2xlYW4gfCBudWxsO1xuICAgIGFuYWx5c2VyVHlwZT86IE1MSW1hZ2VTZWdtZW50YXRpb25TZXR0aW5nIHwgbnVsbDtcbiAgICBzY2VuZT86IE1MSW1hZ2VTZWdtZW50YXRpb25TY2VuZTtcbiAgICBoYXNoQ29kZT86IG51bWJlciB8IG51bGw7XG59XG5cbmV4cG9ydCBlbnVtIE1MSW1hZ2VTZWdtZW50YXRpb25TZXR0aW5nIHtcbiAgICBCT0RZX1NFRyA9IDAsXG4gICAgSU1BR0VfU0VHID0gMSxcbiAgICBIQUlSX1NFRyA9IDIsXG59XG5cbmV4cG9ydCBlbnVtIE1MSW1hZ2VTZWdtZW50YXRpb25DbGFzc2lmaWNhdGlvbiB7XG4gICAgVFlQRV9CQUNLR09VUk5EID0gMCxcbiAgICBUWVBFX0hVTUFOID0gMSxcbiAgICBUWVBFX1NLWSA9IDIsXG4gICAgVFlQRV9HUkFTUyA9IDMsXG4gICAgVFlQRV9GT09EID0gNCxcbiAgICBUWVBFX0NBVCA9IDUsXG4gICAgVFlQRV9CVUlMRCA9IDYsXG4gICAgVFlQRV9GTE9XRVIgPSA3LFxuICAgIFRZUEVfV0FURVIgPSA4LFxuICAgIFRZUEVfU0FORCA9IDksXG4gICAgVFlQRV9NT1VOVEFJTiA9IDEwLFxufVxuZXhwb3J0IGVudW0gTUxJbWFnZVNlZ21lbnRhdGlvblNjZW5lIHtcbiAgICBBTEwgPSAwLFxuICAgIE1BU0tfT05MWSA9IDEsXG4gICAgRk9SRUdST1VORF9PTkxZID0gMixcbiAgICBHUkFZU0NBTEVfT05MWSA9IDMsXG59XG5cbi8vLy8vLy8qKioqLy8vLy8vLy8vXG4vL0xBTkQgTUFSS1xuLy8vLy8vLyoqKiovLy8vLy8vLy9cblxuZXhwb3J0IGludGVyZmFjZSBpbWdMYW5kTWFya1JlcSB7XG4gICAgbGFuZG1hcmtBbmFseXplclNldHRpbmc/OiBsYW5kbWFya0FuYWx5emVyU2V0dGluZztcbiAgICBmaWxlUGF0aDogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIGxhbmRtYXJrQW5hbHl6ZXJTZXR0aW5nIHtcbiAgICBtYXhSZXN1bHRzPzogbnVtYmVyIHwgbnVsbDtcbiAgICBtb2RlbFR5cGU/OiBNTFJlbW90ZUxhbmRtYXJrU2V0dGluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBlbnVtIE1MUmVtb3RlTGFuZG1hcmtTZXR0aW5nIHtcbiAgICBTVEVBRFlfUEFUVEVSTiA9IDEsXG4gICAgTkVXRVNUX1BBVFRFUk4gPSAyLFxufVxuXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xuLy9MYW5nIERldGVjdFxuLy8vLy8vLyoqKiovLy8vLy8vLy9cblxuZXhwb3J0IGludGVyZmFjZSByZW1vdGVMYW5nRGV0ZWN0aW9uUmVxIHtcbiAgICBzb3VyY2VUZXh0OiBzdHJpbmc7XG4gICAgdGFza01vZGU/OiBudW1iZXI7XG4gICAgdHJ1c3RlZFRocmVzaG9sZD86IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgbG9jYWxMYW5nRGV0ZWN0aW9uUmVxIHtcbiAgICBzb3VyY2VUZXh0OiBzdHJpbmc7XG4gICAgdHJ1c3RlZFRocmVzaG9sZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBzeW5jUmVxdWVzdExvY2FsTGFuZ0RldGVjdCB7XG4gICAgc291cmNlVGV4dDogc3RyaW5nO1xuICAgIHRydXN0ZWRUaHJlc2hvbGQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBlbnVtIE1MTGFuZ3VhZ2VEZXRlY3Rpb24ge1xuICAgIEZJUlNUX0JFU1RfREVURUNUSU9OX0xBTkdVQUdFX1RSVVNURURfVEhSRVNIT0xEID0gMC41LFxuICAgIFBST0JBQklMSVRZX0RFVEVDVElPTl9MQU5HVUFHRV9UUlVTVEVEX1RIUkVTSE9MRCA9IDAuMDEsXG4gICAgVU5ERVRFQ1RJT05fTEFOR1VBR0VfVFJVU1RFRF9USFJFU0hPTEQgPSBcInVua25vd25cIixcbn1cblxuLy8vLy8vLyoqKiovLy8vLy8vLy9cbi8vTGl2ZW5lc3MgRGV0ZWN0aW9uXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xuXG5leHBvcnQgaW50ZXJmYWNlIGxpdmVuZXNzRGV0ZWN0aW9uUmVxIHtcbiAgICBhbmFseXNlck1vZGU/OiBNTExpdmVuZXNzQ2FwdHVyZVJlc3VsdCB8IG51bGw7XG59XG5leHBvcnQgZW51bSBNTExpdmVuZXNzQ29uZmlnIHtcbiAgICBERUZBVUxUID0gMCxcbiAgICBDVVNUT00gPSAxLFxufVxuZXhwb3J0IGVudW0gTUxMaXZlbmVzc0NhcHR1cmVFcnJvciB7XG4gICAgQ0FNRVJBX05PX1BFUk1JU1NJT04gPSAxMTQwMSxcbiAgICBDQU1FUkFfU1RBUlRfRkFJTEVEID0gMTE0MDIsXG4gICAgVVNFUl9DQU5DRUwgPSAxMTQwMyxcbiAgICBERVRFQ1RfRkFDRV9USU1FX09VVCA9IDExNDA0LFxuICAgIERFVEVDVF9NQVNLID0gMSxcbn1cblxuLy8vLy8vLyoqKiovLy8vLy8vLy9cbi8vIFNUSUxMICYmIExJVkVPQkpFQ1QgIEFOQUxZU0VSXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xuXG5leHBvcnQgaW50ZXJmYWNlIG9iamVjdFJlcSB7XG4gICAgZmlsZVBhdGg6IGFueTtcbiAgICBtbE9iamVjdEFuYWx5c2VyU2V0dGluZz86IG1sT2JqZWN0QW5hbHlzZXJTZXR0aW5nO1xuICAgIHN5bmNUeXBlPzogTUxGb3JtUmVjb2dpdGlvbkNvbmZpZyB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdEdyYXBoaWNTZXR0aW5nIHtcbiAgICBib3hQYWludFNldHRpbmc/OiBCb3hQYWludFNldHRpbmcgfCBudWxsO1xuICAgIHRleHRQYWludFNldHRpbmc/OiBUZXh0UGFpbnRTZXR0aW5nIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQm94UGFpbnRTZXR0aW5nIHtcbiAgICBjb2xvcj86IENvbG9ycyB8IG51bGw7XG4gICAgc3R5bGU/OiBSZWN0U3R5bGUgfCBudWxsO1xuICAgIGJveFN0cm9rZVdpZHRoPzogTnVtYmVyIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dFBhaW50U2V0dGluZyB7XG4gICAgY29sb3I/OiBDb2xvcnMgfCBudWxsO1xuICAgIHRleHRTaXplPzogTnVtYmVyIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgbWxPYmplY3RBbmFseXNlclNldHRpbmcge1xuICAgIGlzQ2xhc3NpZmljYXRpb25BbGxvd2VkPzogYm9vbGVhbiB8IG51bGw7XG4gICAgaXNNdWx0aXBsZVJlc3VsdHNBbGxvd2VkPzogYm9vbGVhbiB8IG51bGw7XG4gICAgYW5hbHl6ZXJUeXBlOiBNbE9iamVjdEFuYWx5c2VyQ29uZmlnO1xufVxuZXhwb3J0IGVudW0gTWxPYmplY3RBbmFseXNlckNvbmZpZyB7XG4gICAgVFlQRV9QSUNUVVJFID0gMCxcbiAgICBUWVBFX1ZJREVPID0gMSxcbiAgICBUWVBFX09USEVSID0gMCxcbiAgICBUWVBFX0dPT0RTID0gMSxcbiAgICBUWVBFX0ZPT0QgPSAyLFxuICAgIFRZUEVfRlVSTklUVVJFID0gMyxcbiAgICBUWVBFX1BMQU5UID0gNCxcbiAgICBUWVBFX1BMQUNFID0gNSxcbiAgICBUWVBFX0ZBQ0UgPSA2LFxufVxuXG4vLy8vLy8vKioqKi8vLy8vLy8vL1xuLy9SVFRcbi8vLy8vLy8qKioqLy8vLy8vLy8vXG5cbmV4cG9ydCBpbnRlcmZhY2UgcnR0UmVxIHtcbiAgICBtTFNwZWVjaFJlYWxUaW1lVHJhbnNjcmlwdGlvbkNvbmZpZzogTUxTcGVlY2hSZWFsVGltZVRyYW5zY3JpcHRpb25Db25maWc7XG59XG5leHBvcnQgaW50ZXJmYWNlIE1MU3BlZWNoUmVhbFRpbWVUcmFuc2NyaXB0aW9uQ29uZmlnIHtcbiAgICBsYW5ndWFnZTogTUxSdHRMYW5ndWFnZXMgfCBudWxsO1xuICAgIHB1bmN0dWF0aW9uRW5hYmxlOiBib29sZWFuIHwgbnVsbDtcbiAgICB3b3JkVGltZU9mZnNldEVuYWJsZTogYm9vbGVhbiB8IG51bGw7XG4gICAgc2VudGVuY2VUaW1lT2Zmc2V0RW5hYmxlOiBib29sZWFuIHwgbnVsbDtcbiAgICBzY2VuZXM/OiBNTFJ0dFNjZW5lcyB8IG51bGw7XG59XG5leHBvcnQgZW51bSBNTFJ0dExhbmd1YWdlcyB7XG4gICAgTEFOX1pIX0NOID0gXCJ6aC1DTlwiLFxuICAgIExBTl9FTl9VUyA9IFwiZW4tVVNcIixcbiAgICBMQU5fRlJfRlIgPSBcImZyLUZSXCIsXG4gICAgTEFOX0VTX0VTID0gXCJlcy1FU1wiLFxuICAgIExBTl9FTl9JTiA9IFwiZW4tSU5cIixcbiAgICBMQU5fREVfREUgPSBcImRlLURFXCIsXG59XG5leHBvcnQgZW51bSBNTFJ0dFNjZW5lcyB7XG4gICAgU0NFTkVTX1NIT1BQSU5HZiA9IFwic2hvcHBpbmdcIixcbn1cbmV4cG9ydCBlbnVtIE1MU3BlZWNoUmVhbFRpbWVUcmFuc2NyaXB0aW9uQ29uc3RhbnRzIHtcbiAgICBFUlJfSU5WQUxJREVfVE9LRU4gPSAxMzIxOSxcbiAgICBFUlJfTk9fTkVUV09SSyA9IDEzMjAyLFxuICAgIEVSUl9TRVJWSUNFX0NSRURJVCA9IDEzMjIyLFxuICAgIEVSUl9TRVJWSUNFX1VOU1VCU0NSSUJFRCA9IDEzMjIzLFxuICAgIEVSUl9TRVJWSUNFX0ZSRUVfVVNFRF9VUCA9IDEzMjI0LFxuICAgIEVSUl9TRVJWSUNFX1VOQVZBSUxBQkxFID0gMTMyMDMsXG4gICAgTEFOX0VOX1VTID0gXCIgZW4tVVNcIixcbiAgICBMQU5fRlJfRlIgPSBcImZyLUZSXCIsXG4gICAgTEFOX1pIX0NOID0gXCJ6aC1DTlwiLFxuICAgIFJFU1VMVFNfUEFSVElBTEZJTkFMID0gXCJSRVNVTFRTX1BBUlRJQUxGSU5BTFwiLFxuICAgIFJFU1VMVFNfUkVDT0dOSVpJTkcgPSBcInJlc3VsdHNfcmVjb2duaXppbmdcIixcbiAgICBSRVNVTFRTX1NFTlRFTkNFX09GRlNFVCA9IFwiUkVTVUxUU19TRU5URU5DRV9PRkZTRVRcIixcbiAgICBSRVNVTFRTX1dPUkRfT0ZGU0VUID0gXCJSRVNVTFRTX1dPUkRfT0ZGU0VUXCIsXG4gICAgU0NFTkVTX1NIT1BQSU5HID0gXCJzaG9wcGluZ1wiLFxuICAgIFNUQVRFX1NFUlZJQ0VfUkVDT05ORUNURUQgPSA0MyxcbiAgICBTVEFURV9TRVJWSUNFX1JFQ09OTkVDVElORyA9IDQyLFxuICAgIFNUQVRFX0xJU1RFTklORyA9IDEsXG4gICAgU1RBVEVfTk9fTkVUV09SSyA9IDcsXG4gICAgU1RBVEVfTk9fVU5ERVJTVEFORCA9IDYsXG4gICAgV0FWRV9QQUlORV9CSVRfV0lEVEggPSBcIkJJVF9XSURUSFwiLFxuICAgIFdBVkVfUEFJTkVfQ0hBTk5FTF9DT1VOVCA9IFwiQ0hBTk5FTF9DT1VOVFwiLFxuICAgIFdBVkVfUEFJTkVfRU5DT0RJTkcgPSBcIkVOQ09ESU5HXCIsXG4gICAgV0FWRV9QQUlORV9TQU1QTEVfUkFURSA9IFwiU0FNUExFX1JBVEVcIixcbn1cblxuLy8vLy8vLyoqKiovLy8vLy8vLy9cbi8vU1RJTEwgJiYgTElWRSBTQ0VORSBBTkFMWVNFUlxuLy8vLy8vLyoqKiovLy8vLy8vLy9cblxuZXhwb3J0IGludGVyZmFjZSBzdGlsbFNjZW5lUmVxIHtcbiAgICBmaWxlUGF0aDogYW55O1xuICAgIGFuYWx5c2VNb2RlPzogc3luY1R5cGUgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIHNjZW5lU2V0dGluZ3Mge1xuICAgIGNvbG9yPzogQ29sb3JzIHwgbnVsbDtcbiAgICB0ZXh0U2l6ZT86IE51bWJlciB8IG51bGw7XG59XG5cbi8vLy8vLy8qKioqLy8vLy8vLy8vXG4vL1NUSUxMICYmIExJVkUgU0tFTEVUT04gQU5BTFlTRVJcbi8vLy8vLy8qKioqLy8vLy8vLy8vXG5cbmV4cG9ydCBpbnRlcmZhY2Ugc3RpbGxTa2VsZXRvblJlcSB7XG4gICAgZmlsZVBhdGg6IGFueTtcbiAgICBzeW5jVHlwZTogTUxTa2VsZXRvbkNvbmZpZztcbiAgICBhbmFseXplclR5cGU6IE1MU2tlbGV0b25Db25maWc7XG59XG5leHBvcnQgaW50ZXJmYWNlIHN0aWxsU2tlbGV0b25TaW1pbGFyaXR5UmVxIHtcbiAgICBmaWxlUGF0aDogYW55O1xuICAgIGZpbGVwYXRoMjogYW55O1xuICAgIHN5bmNUeXBlOiBNTFNrZWxldG9uQ29uZmlnO1xuICAgIGFuYWx5emVyVHlwZTogTUxTa2VsZXRvbkNvbmZpZztcbn1cbmV4cG9ydCBlbnVtIE1MU2tlbGV0b25Db25maWcge1xuICAgIFNZTkNfTU9ERSA9IDAsXG4gICAgQVNZTkNfTU9ERSA9IDEsXG4gICAgU0lNSUxBUklUVFlfTU9ERSA9IDIsXG4gICAgVFlQRV9ZT0dBID0gMSxcbiAgICBUWVBFX05PUk1BTCA9IDAsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2tlbGV0b25HcmFwaGljU2V0dGluZyB7XG4gICAgY2lyY2xlUGFpbnRTZXR0aW5nPzogY2lyY2xlUGFpbnRTZXR0aW5nIHwgbnVsbDtcbiAgICBsaW5lUGFpbnRTZXR0aW5nPzogbGluZVBhaW50U2V0dGluZyB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIGNpcmNsZVBhaW50U2V0dGluZyB7XG4gICAgY29sb3I/OiBDb2xvcnMgfCBudWxsO1xuICAgIHN0eWxlPzogUmVjdFN0eWxlIHwgbnVsbDtcbiAgICBhbnRpQWxpYXM/OiBib29sZWFuIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgbGluZVBhaW50U2V0dGluZyB7XG4gICAgY29sb3I/OiBDb2xvcnMgfCBudWxsO1xuICAgIHN0eWxlPzogUmVjdFN0eWxlIHwgbnVsbDtcbiAgICBzdHJva2VXaWR0aD86IE51bWJlciB8IG51bGw7XG4gICAgYW50aUFsaWFzPzogYm9vbGVhbiB8IG51bGw7XG59XG5cbi8vLy8vLy8qKioqLy8vLy8vLy8vXG4vL1RleHQgQW5hbHlzZXJcbi8vLy8vLy8qKioqLy8vLy8vLy8vXG5leHBvcnQgaW50ZXJmYWNlIGxvY2FsSW1hZ2VUZXh0UmVxIHtcbiAgICBvY3JUeXBlOiBNTFRleHRDb25maWc7XG4gICAgYW5hbHlzZU1vZGU/OiBudW1iZXI7XG4gICAgbG9jYWxUZXh0U2V0dGluZz86IGxvY2FsVGV4dFNldHRpbmcgfCBudWxsO1xuICAgIGZpbGVQYXRoOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgbG9jYWxUZXh0U2V0dGluZyB7XG4gICAgb2NyTW9kZT86IE1MTG9jYWxUZXh0U2V0dGluZztcbiAgICBsYW5ndWFnZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gTUxMb2NhbFRleHRTZXR0aW5nIHtcbiAgICBPQ1JfREVURUNUX01PREUgPSAxLFxuICAgIE9DUl9UUkFDS0lOR19NT0RFID0gMixcbn1cbmV4cG9ydCBlbnVtIE1MVGV4dENvbmZpZyB7XG4gICAgT0NSX0xPQ0FMX1RZUEUgPSAwLFxuICAgIE9DUl9SRU1PVEVfVFlQRSA9IDEsXG59XG5leHBvcnQgaW50ZXJmYWNlIHJlbW90ZUltYWdlVGV4dFJlcSB7XG4gICAgb2NyVHlwZTogTUxUZXh0Q29uZmlnO1xuICAgIGFuYWx5c2VNb2RlPzogbnVtYmVyO1xuICAgIHJlbW90ZVRleHRTZXR0aW5nPzogcmVtb3RlVGV4dFNldHRpbmc7XG4gICAgZmlsZVBhdGg6IGFueTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgcmVtb3RlVGV4dFNldHRpbmcge1xuICAgIHRleHREZW5zaXR5U2NlbmU/OiBNTFJlbW90ZVRleHRTZXR0aW5nO1xuICAgIGxhbmd1YWdlTGlzdD86IEFycmF5PHN0cmluZz47XG4gICAgYm9yZGVyVHlwZT86IE1MUmVtb3RlVGV4dFNldHRpbmc7XG59XG5cbi8vLy8vLy8qKioqLy8vLy8vLy8vXG4vL1RSQU5TTEFURVxuLy8vLy8vLyoqKiovLy8vLy8vLy9cblxuZXhwb3J0IGludGVyZmFjZSByZW1vdGV0cmFuc2xhdGVSZXEge1xuICAgIFVTRV9TWU5DOiBib29sZWFuO1xuICAgIHRhcmdldExhbmdDb2RlOiBNTFRyYW5zbGF0ZUxhbmd1YWdlcztcbiAgICBzb3VyY2VMYW5nQ29kZT86IE1MVHJhbnNsYXRlTGFuZ3VhZ2VzO1xuICAgIHNvdXJjZVRleHQ6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgbG9jYWx0cmFuc2xhdGVSZXEge1xuICAgIFVTRV9TWU5DOiBib29sZWFuO1xuICAgIHRhcmdldExhbmdDb2RlOiBNTFRyYW5zbGF0ZUxhbmd1YWdlcztcbiAgICBzb3VyY2VMYW5nQ29kZTogTUxUcmFuc2xhdGVMYW5ndWFnZXM7XG4gICAgc291cmNlVGV4dDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBkZWxldGVUcmFuc2xhdGVSZXEge1xuICAgIFVTRV9TWU5DOiBib29sZWFuO1xuICAgIGxhbmdjb2RlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIGRvd25sb2FkVHJhbnNsYXRlUmVxIHtcbiAgICBVU0VfU1lOQzogYm9vbGVhbjtcbiAgICBsYW5nY29kZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBsb2NhbEFsbExhbmdSZXEge1xuICAgIFVTRV9TWU5DOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSByZW1vdGVBbGxMYW5nUmVxIHtcbiAgICBVU0VfU1lOQzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGVudW0gTUxUcmFuc2xhdGVMYW5ndWFnZXMge1xuICAgIEFGUklLQUFOUyA9IFwiYWZcIixcbiAgICBBUkFCSUMgPSBcImFyXCIsXG4gICAgQlVMR0FSSUFOID0gXCJiZ1wiLFxuICAgIEJVUk1FU0UgPSBcIm15XCIsXG4gICAgQ1JPQVRJQU4gPSBcImhyXCIsXG4gICAgQ1pFQ0ggPSBcImNzXCIsXG4gICAgQ0hJTkVTRSA9IFwiemhcIixcbiAgICBUUkFESVRJT05BTF9DSElORVNFID0gXCJ6aC1oa1wiLFxuICAgIERBTklTSCA9IFwiZGFcIixcbiAgICBEVVRDSCA9IFwibmxcIixcbiAgICBFU1RPTklBTiA9IFwiZXRcIixcbiAgICBFTkdMSVNIID0gXCJlblwiLFxuICAgIEZJTk5JU0ggPSBcImZpXCIsXG4gICAgRlJFTkNIID0gXCJmclwiLFxuICAgIEdFUk1BTiA9IFwiZGVcIixcbiAgICBHVUpBUkFUSSA9IFwiZ3VcIixcbiAgICBHUkVFSyA9IFwiZWxcIixcbiAgICBIVU5HQVJJQU4gPSBcImh1XCIsXG4gICAgSElOREkgPSBcImhpXCIsXG4gICAgSEVCUkVXID0gXCJoZVwiLFxuICAgIElSSVNIID0gXCJpc1wiLFxuICAgIElUQUxJQU4gPSBcIml0XCIsXG4gICAgSU5ET05FU0lBTiA9IFwiaWRcIixcbiAgICBLSE1FUiA9IFwia21cIixcbiAgICBLT1JFQU4gPSBcImtvXCIsXG4gICAgSkFQQU5FU0UgPSBcImphXCIsXG4gICAgTEFUSU4gPSBcInJtXCIsXG4gICAgTEFUVklBTiA9IFwibHZcIixcbiAgICBNQUxBWSA9IFwibXNcIixcbiAgICBNQVJBVEhJID0gXCJtclwiLFxuICAgIE5PUldFR0lBTiA9IFwibm9cIixcbiAgICBQVU5KQUJJID0gXCJwYVwiLFxuICAgIFBPTElTSCA9IFwicGxcIixcbiAgICBQT1JUVUdVRVNFID0gXCJwdFwiLFxuICAgIFBFUlNJQU4gPSBcImZhXCIsXG4gICAgUlVTU0lBTiA9IFwicnVcIixcbiAgICBST01BTklBTiA9IFwicm9cIixcbiAgICBTRVJCSUFOID0gXCJzclwiLFxuICAgIFNQQU5JU0ggPSBcImVzXCIsXG4gICAgU0xPVkFLID0gXCJza1wiLFxuICAgIFNXRURJU0ggPSBcInN2XCIsXG4gICAgVEFNSUwgPSBcInRhXCIsXG4gICAgVFVSS0lTSCA9IFwidHJcIixcbiAgICBUSEFJID0gXCJ0aFwiLFxuICAgIFRBR0FMT0cgPSBcInRsXCIsXG4gICAgVEVMVUdVID0gXCJ0ZVwiLFxuICAgIFZJRVROQU1FU0UgPSBcInZpXCIsXG59XG4vLy8vLy8vKioqKi8vLy8vLy8vL1xuLy8gU291bmQgRGVjdFxuLy8vLy8vLyoqKiovLy8vLy8vLy9cblxuZXhwb3J0IGludGVyZmFjZSBzb3VuZERlY3RSZXEge1xuICAgIHN0YXJ0VHlwZTogYm9vbGVhbiB8IG51bGw7XG59XG4vLy8vLy8vKioqKi8vLy8vLy8vL1xuLy8gVGV4dCBFbWJlZGRpbmdcbi8vLy8vLy8qKioqLy8vLy8vLy8vXG5cbmV4cG9ydCBpbnRlcmZhY2UgdGV4dEVtYmVkZGluZ0RpY0luZm9SZXEge1xuICAgIHRleHRFbWJlZGRpbmdTZXR0aW5nOiB0ZXh0RW1iZWRkaW5nU2V0dGluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgdGV4dEVtYmVkZGluZ1dvcmR0b1ZlY3RvclJlcSB7XG4gICAgdGV4dEVtYmVkZGluZ1NldHRpbmc/OiB0ZXh0RW1iZWRkaW5nU2V0dGluZztcbiAgICB3b3JkVGV4dDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSB0ZXh0RW1iZWRkaW5nU2VudGVuY2V0b1ZlY3RvclJlcSB7XG4gICAgdGV4dEVtYmVkZGluZ1NldHRpbmc/OiB0ZXh0RW1iZWRkaW5nU2V0dGluZztcbiAgICBzZW50ZW5jZVRleHQ6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgdGV4dEVtYmVkZGluZ1dvcmRTaW1pbGFyaXR5UmVxIHtcbiAgICB0ZXh0RW1iZWRkaW5nU2V0dGluZz86IHRleHRFbWJlZGRpbmdTZXR0aW5nO1xuICAgIHdvcmRUZXh0MTogc3RyaW5nO1xuICAgIHdvcmRUZXh0Mjogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSB0ZXh0RW1iZWRkaW5nU2VudGVuY2VTaW1pbGFyaXR5UmVxIHtcbiAgICB0ZXh0RW1iZWRkaW5nU2V0dGluZz86IHRleHRFbWJlZGRpbmdTZXR0aW5nO1xuICAgIHNlbnRlbmNlVGV4dDE6IHN0cmluZztcbiAgICBzZW50ZW5jZVRleHQyOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIHRleHRFbWJlZGRpbmdTaW1pbGFyV29yZHNSZXEge1xuICAgIHRleHRFbWJlZGRpbmdTZXR0aW5nPzogdGV4dEVtYmVkZGluZ1NldHRpbmc7XG4gICAgbXVsdGlwbGVUZXh0OiBzdHJpbmc7XG4gICAgc2ltaWxhcml0eU51bWJlcjogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSB0ZXh0RW1iZWRkaW5nV29yZEJhdGNoUmVxIHtcbiAgICB0ZXh0RW1iZWRkaW5nU2V0dGluZz86IHRleHRFbWJlZGRpbmdTZXR0aW5nO1xuICAgIGJhdGNoVGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIHRleHRFbWJlZGRpbmdTZXR0aW5nIHtcbiAgICBsYW5ndWFnZTogVGV4dExhbmd1YWdlO1xufVxuXG5leHBvcnQgZW51bSBUZXh0TGFuZ3VhZ2Uge1xuICAgIExBTkdVQUdFX1pIID0gXCJ6aFwiLFxuICAgIExBTkdVQUdFX0VOID0gXCJlbVwiLFxufVxuXG5leHBvcnQgZW51bSBNTFRleHRFbWJlZGRpYmdFeGNlcHRpb25zIHtcbiAgICBMQU5HVUFHRV9aSCA9IFwiemhcIixcbiAgICBMQU5HVUFHRV9FTiA9IFwiZW5cIixcbiAgICBFUlJfU0VSVklDRV9JU19VTkFWQUlMQUJMRSA9IDEyMTk5LFxuICAgIFJSX05FVF9VTkFWQUlMQUJMRSA9IDEyMTk4LFxuICAgIEVSUl9JTk5FUiA9IDEyMTAxLFxuICAgIEVSUl9BVVRIX0ZBSUxFRCA9IDEyMTAyLFxuICAgIEVSUl9QQVJBTV9JTExFR0FMID0gMTIxMDMsXG4gICAgRVJSX0FOQUxZWkVfRkFJTEVEID0gMTIxMDQsXG4gICAgRVJSX0FVVEhfVE9LRU5fSU5WQUxJREUgPSAxMjEwNSxcbn1cbi8vLy8vLy8qKioqLy8vLy8vLy8vXG4vLyBUVFMgQU5BTFlTRVJcbi8vLy8vLy8qKioqLy8vLy8vLy8vXG5cbmV4cG9ydCBpbnRlcmZhY2UgTUxUdHNTcGVha2VyIHtcbiAgICBsYW5ndWFnZT86IHN0cmluZyB8IG51bGw7XG4gICAgbW9kZWxTaXplPzogc3RyaW5nIHwgbnVsbDtcbiAgICBuYW1lPzogc3RyaW5nIHwgbnVsbDtcbiAgICBzcGVha2VyRGVzYz86IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgdHRzRW5naW5lUmVxIHtcbiAgICBsYW5ndWFnZT86IHN0cmluZyB8IG51bGw7XG4gICAgcGxheWVyVm9sdW1lPzogbnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSB0dHNBbmFseXNlclNldHRpbmdzUmVzdWx0cyB7XG4gICAgbGFuZ3VhZ2VzOiBTdHJpbmdbXTtcbiAgICBzcGVha2VyczogTUxUdHNTcGVha2VyO1xuICAgIHNwZWFrZXI6IE1MVHRzU3BlYWtlcjtcbiAgICBpc0xhbmd1YWdlQXZhaWxhYmxlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgdHRzUmVxIHtcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgbWxDb25maWdzOiBNTENvbmZpZ3M7XG4gICAgcXVldWluZ01vZGU6IE1MVHRzQ29uc3RhbnRzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MVHRzQXVkaW9GcmFnbWVudCB7XG4gICAgYXVkaW9EYXRhPzogbnVtYmVyIHwgbnVsbDtcbiAgICBhdWRpb0Zvcm1hdD86IG51bWJlciB8IG51bGw7XG4gICAgY2hhbm5lbEluZm8/OiBudW1iZXIgfCBudWxsO1xuICAgIFNhbXBsZVJhdGVJbkh6PzogbnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGVudW0gTUxUdHNBdWRpb0ZyYWdtZW50Q29uc3RhbnQge1xuICAgIENIQU5ORUxfT1VUX01PTk8gPSA0LFxuICAgIEZPUk1BVF9QQ01fMTZCSVQgPSAyLFxuICAgIEZPUk1BVF9QQ01fOEJJVCA9IDEsXG4gICAgU0FNUExFX1JBVEVfMTZLID0gMTYwMDAsXG59XG5leHBvcnQgaW50ZXJmYWNlIE1MQ29uZmlncyB7XG4gICAgbGFuZ3VhZ2U6IE1MVHRzQ29uc3RhbnRzO1xuICAgIHBlcnNvbjogTUxUdHNDb25zdGFudHM7XG4gICAgc3BlZWQ6IG51bWJlcjtcbiAgICB2b2x1bWU6IG51bWJlcjtcbiAgICBzeW50aGVzaXplTW9kZTogTUxUdHNDb25zdGFudHM7XG59XG5leHBvcnQgZW51bSBNTFR0c0NvbnN0YW50cyB7XG4gICAgRVZFTlRfUExBWV9TVEFSVCA9IDEsXG4gICAgRVZFTlRfUExBWV9SRVNVTUUgPSAyLFxuICAgIEVWRU5UX1BMQVlfUEFVU0UgPSAzLFxuICAgIEVWRU5UX1BMQVlfU1RPUCA9IDQsXG4gICAgRVZFTlRfU1lOVEhFU0lTX1NUQVJUID0gNSxcbiAgICBFVkVOVF9TWU5USEVTSVNfRU5EID0gNixcbiAgICBFVkVOVF9TWU5USEVTSVNfQ09NUExFVEUgPSA3LFxuICAgIEVWRU5UX1BMQVlfU1RPUF9JTlRFUlJVUFRFRCA9IFwiaW50ZXJydXB0ZWRcIixcbiAgICBFVkVOVF9TWU5USEVTSVNfSU5URVJSVVBURUQgPSBcImludGVycnVwdGVkXCIsXG4gICAgTEFOR1VBR0VfQVZBSUxBQkxFID0gMCxcbiAgICBMQU5HVUFHRV9OT1RfU1VQUE9SVCA9IDEsXG4gICAgTEFOR1VBR0VfVVBEQVRJTkcgPSAyLFxuICAgIFRUU19FTl9VUyA9IFwiZW4tVVNcIixcbiAgICBUVFNfTEFOX0FSX0FSID0gXCJhci1BUlwiLFxuICAgIFRUU19MQU5fVFJfVFIgPSBcInRyLVRSXCIsXG4gICAgVFRTX1NQRUFLRVJfRkVNQUxFX0FSID0gXCJhci1BUi1zdC0xXCIsXG4gICAgVFRTX1NQRUFLRVJfRkVNQUxFX1RSID0gXCJ0ci1UUi1zdC0xXCIsXG4gICAgVFRTX0xBTl9FU19FUyA9IFwiZXMtRVNcIixcbiAgICBUVFNfTEFOX0ZSX0ZSID0gXCJmci1GUlwiLFxuICAgIFRUU19MQU5fREVfREUgPSBcImRlLURFXCIsXG4gICAgVFRTX0xBTl9JVF9JVCA9IFwiaXQtSVRcIixcbiAgICBUVFNfTEFOX1JVX1JVID0gXCJydS1SVVwiLFxuICAgIFRUU19MQU5fUExfUEwgPSBcInBsLVBMXCIsXG4gICAgVFRTX0xBTl9USF9USCA9IFwiIHRoLVRIXCIsXG4gICAgVFRTX0xBTl9NU19NUyA9IFwibXMtTVNcIixcbiAgICBUVFNfWkhfSEFOUyA9IFwiemgtSGFuc1wiLFxuICAgIFRUU19TUEVBS0VSX0ZFTUFMRV9FTiA9IFwiRmVtYWxlLWVuXCIsXG4gICAgVFRTX1NQRUFLRVJfRkVNQUxFX1pIID0gXCJGZW1hbGUtemhcIixcbiAgICBUVFNfU1BFQUtFUl9NQUxFX0VOID0gXCJNYWxlLWVuXCIsXG4gICAgVFRTX1NQRUFLRVJfTUFMRV9aSCA9IFwiTWFsZS16aFwiLFxuICAgIFRUU19TUEVBS0VSX01BTEVfWkhfMiA9IFwiemgtSGFucy1zdC00XCIsXG4gICAgVFRTX1NQRUFLRVJfRkVNQUxFX1pIXzIgPSBcInpoLUhhbnMtc3QtM1wiLFxuICAgIFRUU19TUEVBS0VSX01BTEVfRU5fMiA9IFwiZW4tVVMtc3QtNFwiLFxuICAgIFRUU19TUEVBS0VSX0ZFTUFMRV9FTl8yID0gXCJlbi1VUy1zdC0zXCIsXG4gICAgVFRTX1NQRUFLRVJfRkVNQUxFX0RFID0gXCJkZS1ERS1zdC0xXCIsXG4gICAgVFRTX1NQRUFLRVJfRkVNQUxFX0VTID0gXCJpdC1JVC1zdC0xXCIsXG4gICAgVFRTX1NQRUFLRVJfRkVNQUxFX0lUID0gXCJlcy1FUy1zdC0xXCIsXG4gICAgVFRTX1NQRUFLRVJfRkVNQUxFX0ZSID0gXCJmci1GUi1zdC0xXCIsXG4gICAgVFRTX1NQRUFLRVJfRkVNQUxFX1JVID0gXCJydS1SVS1zdC0xXCIsXG4gICAgVFRTX1NQRUFLRVJfRkVNQUxFX1BMID0gXCJwbC1QTC1zdC0xXCIsXG4gICAgVFRTX1NQRUFLRVJfRkVNQUxFX1RIID0gXCJ0aC1USC1zdC0xXCIsXG4gICAgVFRTX1NQRUFLRVJfRkVNQUxFX01TID0gXCJtcy1NUy1zdC0xXCIsXG4gICAgVFRTX1NQRUFLRVJfT0ZGTElORV9FTl9VU19NQUxFX0JPTFQgPSBcImVuLVVTLXN0LWJvbHQtMlwiLFxuICAgIFRUU19TUEVBS0VSX09GRkxJTkVfWkhfSEFOU19GRU1BTEVfRUFHTEUgPSBcInpoLUhhbnMtc3QtZWFnbGUtMVwiLFxuICAgIFRUU19TUEVBS0VSX09GRkxJTkVfWkhfSEFOU19NQUxFX0VBR0xFID0gXCJ6aC1IYW5zLXN0LWVhZ2xlLTJcIixcbiAgICBUVFNfU1BFQUtFUl9PRkZMSU5FX0VOX1VTX0ZFTUFMRV9FQUdMRSA9IFwiZW4tVVMtc3QtZWFnbGUtMVwiLFxuICAgIFRUU19TUEVBS0VSX09GRkxJTkVfRU5fVVNfTUFMRV9FQUdMRSA9IFwiZW4tVVMtc3QtZWFnbGUtMlwiLFxuICAgIFRUU19TUEVBS0VSX09GRkxJTkVfRU5fVVNfRkVNQUxFX0JFRSA9IFwiZW4tVVMtc3QtYmVlLTFcIixcbiAgICBUVFNfU1BFQUtFUl9PRkZMSU5FX0ZSX0ZSX0ZFTUFMRV9CRUUgPSBcImZyLUZSLXN0LWJlZS0xXCIsXG4gICAgVFRTX1NQRUFLRVJfT0ZGTElORV9FU19FU19GRU1BTEVfQkVFID0gXCJlcy1FUy1zdC1iZWUtMVwiLFxuICAgIFRUU19TUEVBS0VSX09GRkxJTkVfREVfREVfRkVNQUxFX0JFRSA9IFwiZGUtREUtc3QtYmVlLTFcIixcbiAgICBUVFNfU1BFQUtFUl9PRkZMSU5FX0lUX0lUX0ZFTUFMRV9CRUUgPSBcIml0LUlULXN0LWJlZS0xXCIsXG4gICAgVFRTX1NQRUFLRVJfT0ZGTElORV9aSF9IQU5TX0ZFTUFMRV9CT0xUID0gXCJ6aC1IYW5zLXN0LWJvbHQtMVwiLFxuICAgIFRUU19TUEVBS0VSX09GRkxJTkVfWkhfSEFOU19NQUxFX0JPTFQgPSBcInpoLUhhbnMtc3QtYm9sdC0yXCIsXG4gICAgVFRTX1NQRUFLRVJfT0ZGTElORV9FTl9VU19GRU1BTEVfQk9MVCA9IFwiZW4tVVMtc3QtYm9sdC0xXCIsXG4gICAgVFRTX09OTElORV9NT0RFID0gXCJvbmxpbmVcIixcbiAgICBUVFNfT0ZGTElORV9NT0RFID0gXCJvZmZsaW5lXCIsXG4gICAgUVVFVUVfQVBQRU5EID0gMCxcbiAgICBRVUVVRV9GTFVTSCA9IDEsXG4gICAgRVhURVJOQUxfUExBWUJBQ0sgPSAyLFxuICAgIE9QRU5fU1RSRUFNID0gNCxcbn1cblxuZXhwb3J0IGVudW0gQ29sb3JzIHtcbiAgICBSRUQgPSAtNjU1MzYsXG4gICAgREtHUkFZID0gLTEyMzAzMjkyLFxuICAgIEdSQVkgPSAtNzgyOTM2OCxcbiAgICBXSElURSA9IC0xLFxuICAgIEJMVUUgPSAtMTY3NzY5NjEsXG4gICAgQkxBQ0sgPSAtMTY3NzcyMTYsXG4gICAgTFRHUkFZID0gLTMzNTU0NDQsXG4gICAgTUFHRU5UQSA9IC02NTI4MSxcbiAgICBZRUxMT1cgPSAtMjU2LFxuICAgIENZQU4gPSAtMTY3MTE2ODEsXG4gICAgR1JFRU4gPSAtMTY3MTE5MzYsXG4gICAgVFJBTlNQQVJFTlQgPSAwLFxufVxuZXhwb3J0IGVudW0gUmVjdFN0eWxlIHtcbiAgICBTVFJPS0UgPSAxLFxuICAgIEZJTEwgPSAyLFxuICAgIEZJTExfQU5EX1NUUk9LRSA9IDMsXG59XG5cbmV4cG9ydCBlbnVtIE1MVHRzRXJyb3Ige1xuICAgIEVSUl9BVURJT19QTEFZRVJfRkFJTEVEID0gMTEzMDUsXG4gICAgRVJSX0FVVEhPUklaRV9GQUlMRUQgPSAxMTMwNixcbiAgICBFUlJfQVVUSE9SSVpFX1RPS0VOX0lOVkFMSURFID0gMTEzMDcsXG4gICAgRVJSX0lMTEVHQUxfUEFSQU1FVEVSID0gMTEzMDEsXG4gICAgRVJSX0lOU1VGRklDSUVOVF9CQUxBTkNFID0gMTEzMDMsXG4gICAgRVJSX0lOVEVSTkFMID0gMTEzOTgsXG4gICAgRVJSX05FVENPTk5FQ1RfRkFJTEVEID0gMTEzMDIsXG4gICAgRVJSX1NQRUVDSF9TWU5USEVTSVNfRkFJTEVEID0gMTEzMDQsXG4gICAgRVJSX1VOS05PV04gPSAxMTM5OSxcbn1cbi8qXG4tLS0tLS0tLS0tLS0tLS0tLSByZXR1cm5cbiovXG5cbmV4cG9ydCBpbnRlcmZhY2UgTUxBZnRSZXN1bHQge1xuICAgIGV2ZW50TmFtZTogc3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZztcbiAgICB0YXNrSWQ6IHN0cmluZztcbiAgICBjb21wbGV0ZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTUxBZnRFcnJvclJlc3VsdCB7XG4gICAgZXZlbnROYW1lOiBzdHJpbmc7XG4gICAgdGFza0lkOiBzdHJpbmc7XG4gICAgZXJyb3JDb2RlOiBNTEFmdEVycm9yQ29kZXM7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xufVxuZXhwb3J0IGVudW0gTUxBZnRFcnJvckNvZGVzIHtcbiAgICBFUlJfQVVESU9fRklMRV9OT1RTVVBQT1JURUQgPSAxMTEwMSxcbiAgICBMQU5HVUFHRV9DT0RFX05PVFNVUFBPUlRFRCA9IDExMTAyLFxuICAgIEVSUl9BVURJT19GSUxFX1NJWkVfT1ZFUkZMT1cgPSAxMTEwMyxcbiAgICBFUlJfQVVESU9fTEVOR1RIX09WRVJGTE9XID0gMTExMDQsXG4gICAgRVJSX0ZJTEVfTk9UX0ZPVU5EID0gMTExMDUsXG4gICAgRVJSX0lMTEVHQUxfUEFSQU1FVEVSID0gMTExMDYsXG4gICAgRVJSX0VOR0lORV9CVVNZID0gMTExMDcsXG4gICAgRVJSX05FVENPTk5FQ1RfRkFJTEVEID0gMTExMDgsXG4gICAgRVJSX1JFU1VMVF9XSEVOX1VQTE9BRElORyA9IDExMTA5LFxuICAgIEVSUl9UQVNLX05PVF9FWElTVEVEID0gMTExMTAsXG4gICAgRVJSX0FVRElPX1RSQU5TQ1JJUFRfRkFJTEVEID0gMTExMTEsXG4gICAgRVJSX0FVRElPX0lOSVRfRkFJTEVEID0gMTExMTIsXG4gICAgRVJSX0FVRElPX1VQTE9BRF9GQUlMRUQgPSAxMTExMyxcbiAgICBFUlJfVEFTS19BTFJFQURZX0lOUFJPR1JFU1MgPSAxMTExNCxcbiAgICBFUlJfTk9fRU5PVUdIX1NUT1JBR0UgPSAxMTExNSxcbiAgICBFUlJfQVVUSE9SSVpFX0ZBSUxFRCA9IDExMTE5LFxuICAgIEVSUl9TRVJWSUNFX0NSRURJVCA9IDExMTIyLFxuICAgIEVSUl9TRVJWSUNFX1VOU1VCU0NSSUJFRCA9IDExMTIzLFxuICAgIEVSUl9TRVJWSUNFX0ZSRUVfVVNFRF9VUCA9IDExMTI0LFxuICAgIEVSUl9JTlRFUk5BTCA9IDExMTk4LFxuICAgIEVSUl9VTktOT1dOID0gMTExOTksXG59XG5leHBvcnQgaW50ZXJmYWNlIE1MQWZ0RXZlbnRSZXN1bHQge1xuICAgIGV2ZW50TmFtZTogc3RyaW5nO1xuICAgIHRhc2tJZDogc3RyaW5nO1xuICAgIGV4dDogc3RyaW5nO1xuICAgIGV2ZW50SWQ6IHN0cmluZztcbn1cbmV4cG9ydCBlbnVtIE1MQUZURXZlbnRDb2RlcyB7XG4gICAgUEFVU0VfRVZFTlQgPSAyLFxuICAgIFNUT1BfRVZFTlQgPSAzLFxuICAgIFVQTE9BREVEX0VWRU5UID0gMSxcbn1cblxuZXhwb3J0IGVudW0gTUxBZnRDb25zdGFudHMge1xuICAgIExBTkdVQUdFX1pIID0gXCJ6aFwiLFxuICAgIExBTkdVQUdFX0VOX1VTID0gXCJlbi1VU1wiLFxufVxuZXhwb3J0IGludGVyZmFjZSBNTEJhbmtDYXJkIHtcbiAgICBudW1iZXI6IHN0cmluZztcbiAgICBleHBpcmU6IHN0cmluZztcbiAgICBpc3N1ZXI6IHN0cmluZztcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgb3JnYW5pemF0aW9uOiBzdHJpbmc7XG4gICAgb3JpZ2luYWxCaXRtYXA6IGFueTtcbiAgICBudW1iZXJCaXRtYXA6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTEN1c3RvbUJhbmtDYXJkIHtcbiAgICBudW1iZXI6IHN0cmluZztcbiAgICBleHBpcmU6IHN0cmluZztcbiAgICBpc3N1ZXI6IHN0cmluZztcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgb3JnYW5pemF0aW9uOiBzdHJpbmc7XG4gICAgb3JpZ2luYWxCaXRtYXA6IGFueTtcbiAgICBudW1iZXJCaXRtYXA6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTEZhY2VWZXJpZmljYXRpb25SZXN1bHQge1xuICAgIGZhY2VJbmZvPzogTUxGYWNlSW5mb1tdIHwgbnVsbDtcbiAgICBzaW1pbGFyaXR5PzogbnVtYmVyIHwgbnVsbDtcbiAgICB0ZW1wbGF0ZUlkPzogbnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTEZhY2VUZW1wbGF0ZVJlc3VsdCB7XG4gICAgZmFjZUluZm8/OiBNTEZhY2VJbmZvW10gfCBudWxsO1xuICAgIGhhc2hjb2RlPzogbnVtYmVyIHwgbnVsbDtcbiAgICB0ZW1wbGF0ZUlkPzogbnVtYmVyIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTUxGYWNlSW5mbyB7XG4gICAgZmFjZVJlY3Q/OiBSZWN0W10gfCBudWxsO1xuICAgIGhhc2hDb2RlPzogbnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTEZhY2Uge1xuICAgIFJlc3VsdD86IFJlc3VsdEVudGl0eVtdIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUmVzdWx0RW50aXR5IHtcbiAgICBvcGVubmVzc09mTGVmdEV5ZTogbnVtYmVyO1xuICAgIHRyYWNpbmdJZGVudGl0eTogbnVtYmVyO1xuICAgIHBvc3NpYmlsaXR5T2ZTbWlsaW5nOiBudW1iZXI7XG4gICAgb3Blbm5lc3NPZlJpZ2h0RXllOiBudW1iZXI7XG4gICAgcm90YXRpb25BbmdsZVg6IG51bWJlcjtcbiAgICByb3RhdGlvbkFuZ2xlWTogbnVtYmVyO1xuICAgIHJvdGF0aW9uQW5nbGVaOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBib3JkZXI6IEJvcmRlcjtcbiAgICBmZWF0dXJlczogRmVhdHVyZXM7XG4gICAgZW1vdGlvbnM6IEVtb3Rpb25zO1xuICAgIGFsbFBvaW50cz86IEFsbFBvaW50c0VudGl0eVtdIHwgbnVsbDtcbiAgICBrZXlQb2ludHM/OiBudWxsW10gfCBudWxsO1xuICAgIGZhY2VTaGFwZUxpc3Q/OiBGYWNlU2hhcGVMaXN0RW50aXR5W10gfCBudWxsO1xufVxuXG5leHBvcnQgZW51bSBNTEZhY2VDb25zdGFudCB7XG4gICAgVU5BTkFMWVpFRF9QT1NTSUJJTElUWSA9IC0xLjAsXG59XG5leHBvcnQgaW50ZXJmYWNlIEJvcmRlciB7XG4gICAgYm90dG9tOiBudW1iZXI7XG4gICAgdG9wOiBudW1iZXI7XG4gICAgbGVmdDogbnVtYmVyO1xuICAgIHJpZ2h0OiBudW1iZXI7XG4gICAgZXhhY3RDZW50ZXJYOiBudW1iZXI7XG4gICAgY2VudGVyWTogbnVtYmVyO1xuICAgIGNlbnRlclg6IG51bWJlcjtcbiAgICBkZXNjcmliZUNvbnRlbnRzOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgd2lkdGg6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZXMge1xuICAgIHN1bkdsYXNzUHJvYmFiaWxpdHk6IG51bWJlcjtcbiAgICBzZXhQcm9iYWJpbGl0eTogbnVtYmVyO1xuICAgIHJpZ2h0RXllT3BlblByb2JhYmlsaXR5OiBudW1iZXI7XG4gICAgbW91c3RhY2hlUHJvYmFiaWxpdHk6IG51bWJlcjtcbiAgICBsZWZ0RXllT3BlblByb2JhYmlsaXR5OiBudW1iZXI7XG4gICAgYWdlOiBudW1iZXI7XG4gICAgaGF0UHJvYmFiaWxpdHk6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRW1vdGlvbnMge1xuICAgIHN1cnByaXNlUHJvYmFiaWxpdHk6IG51bWJlcjtcbiAgICBzbWlsaW5nUHJvYmFiaWxpdHk6IG51bWJlcjtcbiAgICBzYWRQcm9iYWJpbGl0eTogbnVtYmVyO1xuICAgIG5ldXRyYWxQcm9iYWJpbGl0eTogbnVtYmVyO1xuICAgIGZlYXJQcm9iYWJpbGl0eTogbnVtYmVyO1xuICAgIGRpc2d1c3RQcm9iYWJpbGl0eTogbnVtYmVyO1xuICAgIGFuZ3J5UHJvYmFiaWxpdHk6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQWxsUG9pbnRzRW50aXR5IHtcbiAgICBYOiBudW1iZXI7XG4gICAgWTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBGYWNlU2hhcGVMaXN0RW50aXR5IHtcbiAgICBwb2ludHM/OiBQb2ludHNFbnRpdHlbXSB8IG51bGw7XG4gICAgZmFjZVNoYXBlVHlwZTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBQb2ludHNFbnRpdHkge1xuICAgIFg6IG51bWJlcjtcbiAgICBZOiBudW1iZXI7XG4gICAgWjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MSW1hZ2VDbGFzc2lmaWNhdGlvbiB7XG4gICAgcmVzdWx0PzogUmVzdWx0RW50aXR5W10gfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBSZXN1bHRFbnRpdHkge1xuICAgIGlkZW50aXR5OiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHBvc3NpYmlsaXR5OiBudW1iZXI7XG4gICAgaGFzaENvZGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTERvY3VtZW50IHtcbiAgICBzdHJpbmdWYWx1ZTogc3RyaW5nO1xuICAgIGJsb2Nrcz86IEJsb2Nrc1tdO1xufVxuZXhwb3J0IGludGVyZmFjZSBCbG9ja3Mge1xuICAgIHN0cmluZ1ZhbHVlOiBzdHJpbmc7XG4gICAgcG9zc2liaWxpdHk6IG51bWJlcjtcbiAgICBib3JkZXI6IEJvcmRlcjtcbiAgICBpbnRlcnZhbDogSW50ZXJ2YWw7XG4gICAgc2VjdGlvbnM/OiBTZWN0aW9uc1tdO1xufVxuZXhwb3J0IGludGVyZmFjZSBCb3JkZXIge1xuICAgIGJvdHRvbTogbnVtYmVyO1xuICAgIHRvcDogbnVtYmVyO1xuICAgIGxlZnQ6IG51bWJlcjtcbiAgICByaWdodDogbnVtYmVyO1xuICAgIGV4YWN0Q2VudGVyWDogbnVtYmVyO1xuICAgIGNlbnRlclk6IG51bWJlcjtcbiAgICBjZW50ZXJYOiBudW1iZXI7XG4gICAgZGVzY3JpYmVDb250ZW50czogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIEludGVydmFsIHtcbiAgICBpbnRlcnZhbFR5cGU6IG51bWJlcjtcbiAgICBpc1RleHRGb2xsb3dlZDogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdGlvbnMge1xuICAgIHN0cmluZ1ZhbHVlOiBzdHJpbmc7XG4gICAgYm9yZGVyOiBCb3JkZXI7XG4gICAgaW50ZXJ2YWw6IEludGVydmFsO1xuICAgIHBvc3NpYmlsaXR5OiBudW1iZXI7XG4gICAgbGFuZ3VhZ2VMaXN0PzogTGFuZ3VhZ2VMaXN0W107XG4gICAgbGluZUxpc3Q/OiBMaW5lTGlzdFtdO1xufVxuZXhwb3J0IGludGVyZmFjZSBMYW5ndWFnZUxpc3Qge1xuICAgIGxhbmd1YWdlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIExpbmVMaXN0IHtcbiAgICBzdHJpbmdWYWx1ZTogc3RyaW5nO1xuICAgIGJvcmRlcjogQm9yZGVyO1xuICAgIHBvc3NpYmlsaXR5OiBudW1iZXI7XG4gICAgbGFuZ3VhZ2VMaXN0PzogTGFuZ3VhZ2VMaXN0W107XG4gICAgd29yZExpc3Q/OiBXb3JkTGlzdFtdO1xufVxuZXhwb3J0IGludGVyZmFjZSBXb3JkTGlzdCB7XG4gICAgc3RyaW5nVmFsdWU6IHN0cmluZztcbiAgICBib3JkZXI6IEJvcmRlcjtcbiAgICBjaGFyYWN0ZXJMaXN0PzogQ2hhcmFjdGVyTGlzdFtdO1xuICAgIGxhbmd1YWdlTGlzdD86IExhbmd1YWdlTGlzdFtdO1xuICAgIHBvc3NpYmlsaXR5PzogbnVtYmVyO1xuICAgIGludGVydmFsPzogSW50ZXJ2YWw7XG59XG5leHBvcnQgaW50ZXJmYWNlIENoYXJhY3Rlckxpc3Qge1xuICAgIHN0cmluZ1ZhbHVlOiBzdHJpbmc7XG4gICAgcG9zc2liaWxpdHk6IG51bWJlcjtcbiAgICBib3JkZXI/OiBCb3JkZXI7XG4gICAgbGFuZ3VhZ2VMaXN0PzogTGFuZ3VhZ2VMaXN0W107XG4gICAgaW50ZXJ2YWw/OiBJbnRlcnZhbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTERvY3VtZW50U2tld0RldGVjdFJlc3VsdCB7XG4gICAgcmVzdWx0Q29kZTogbnVtYmVyO1xuICAgIGJpdG1hcDogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MVm5JY3JDYXB0dXJlUmVzdWx0IHtcbiAgICBiaXJ0aGRheTogc3RyaW5nO1xuICAgIGNhcmRCaXRtYXA6IEJpdG1hcDtcbiAgICBpZE51bTogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBzZXg6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTENuSWNyQ2FwdHVyZVJlc3VsdCB7XG4gICAgYmlydGhkYXk6IHN0cmluZztcbiAgICBjYXJkQml0bWFwOiBCaXRtYXA7XG4gICAgaWROdW06IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgc2V4OiBzdHJpbmc7XG4gICAgbmF0aW9uOiBzdHJpbmc7XG4gICAgYWRkcmVzczogc3RyaW5nO1xuICAgIGF1dGhvcml0eTogc3RyaW5nO1xuICAgIHZhbGlkRGF0ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MSWNyQ2FwdHVyZVJlc3VsdCB7XG4gICAgYmlydGhkYXk6IHN0cmluZztcbiAgICBjYXJkQml0bWFwOiBCaXRtYXA7XG4gICAgaWROdW06IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgc2V4OiBzdHJpbmc7XG4gICAgbmF0aW9uOiBzdHJpbmc7XG4gICAgYWRkcmVzczogc3RyaW5nO1xuICAgIHZhbGlkRGF0ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MR2NyQ2FwdHVyZVJlc3VsdCB7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIGNhcmRCaXRtYXA6IEJpdG1hcDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTEhhbmRLZXlwb2ludHMge1xuICAgIGhhbmRrZXlQb2ludHM6IGhhbmRrZXlQb2ludHM7XG4gICAgcmVjdDogUmVjdDtcbiAgICBzY29yZTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBoYW5ka2V5UG9pbnRzIHtcbiAgICBwb2ludFg6IG51bWJlcjtcbiAgICBwb2ludFk6IG51bWJlcjtcbiAgICBzY29yZTogbnVtYmVyO1xuICAgIHR5cGU6IGhhbmRrZXlQb2ludHNUeXBlcztcbn1cbmV4cG9ydCBlbnVtIGhhbmRrZXlQb2ludHNUeXBlcyB7XG4gICAgVFlQRV9XUklTVCA9IDAsXG4gICAgVFlQRV9USFVNQl9GSVJTVCA9IDEsXG4gICAgVFlQRV9USFVNQl9TRUNPTkQgPSAyLFxuICAgIFRZUEVfVEhVTUJfVEhJUkQgPSAzLFxuICAgIFRZUEVfVEhVTUJfRk9VUlRIID0gNCxcbiAgICBUWVBFX0ZPUkVGSU5HRVJfRklSU1QgPSA1LFxuICAgIFRZUEVfRk9SRUZJTkdFUl9TRUNPTkQgPSA2LFxuICAgIFRZUEVfRk9SRUZJTkdFUl9USElSRCA9IDcsXG4gICAgVFlQRV9GT1JFRklOR0VSX0ZPVVJUSCA9IDgsXG4gICAgVFlQRV9NSURETEVfRklOR0VSX0ZJUlNUID0gOSxcbiAgICBUWVBFX01JRERMRV9GSU5HRVJfU0VDT05EID0gMTAsXG4gICAgVFlQRV9NSURETEVfRklOR0VSX1RISVJEID0gMTEsXG4gICAgVFlQRV9NSURETEVfRklOR0VSX0ZPVVJUSCA9IDEyLFxuICAgIFRZUEVfUklOR19GSU5HRVJfRklSU1QgPSAxMyxcbiAgICBUWVBFX1JJTkdfRklOR0VSX1NFQ09ORCA9IDE0LFxuICAgIFRZUEVfUklOR19GSU5HRVJfVEhJUkQgPSAxNSxcbiAgICBUWVBFX1JJTkdfRklOR0VSX0ZPVVJUSCA9IDE2LFxuICAgIFRZUEVfTElUVExFX0ZJTkdFUl9GSVJTVCA9IDE3LFxuICAgIFRZUEVfTElUVExFX0ZJTkdFUl9TRUNPTkQgPSAxOCxcbiAgICBUWVBFX0xJVFRMRV9GSU5HRVJfVEhJUkQgPSAxOSxcbiAgICBUWVBFX0xJVFRMRV9GSU5HRVJfRk9VUlRIID0gMjAsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVjdCB7XG4gICAgYm90dG9tOiBudW1iZXI7XG4gICAgdG9wOiBudW1iZXI7XG4gICAgbGVmdDogbnVtYmVyO1xuICAgIHJpZ2h0OiBudW1iZXI7XG4gICAgZXhhY3RDZW50ZXJYOiBudW1iZXI7XG4gICAgY2VudGVyWTogbnVtYmVyO1xuICAgIGNlbnRlclg6IG51bWJlcjtcbiAgICBkZXNjcmliZUNvbnRlbnRzOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgd2lkdGg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTEltYWdlU2VnbWVudGF0aW9uIHtcbiAgICBiaXRtYXBGb3JlZ3JvdW5kOiBhbnk7XG4gICAgYml0bWFwR3JheXNjYWxlOiBhbnk7XG4gICAgbWFza3M6IG51bWJlcjtcbiAgICBiaXRtYXBPcmlnaW5hbDogYW55O1xufVxuZXhwb3J0IGludGVyZmFjZSBNTFJlbW90ZUxhbmRtYXJrIHtcbiAgICBsYW5kbWFyazogc3RyaW5nO1xuICAgIGxhbmRtYXJrSWRlbnRpdHk6IHN0cmluZztcbiAgICBwb3NzaWJpbGl0eTogbnVtYmVyO1xuICAgIGJvcmRlcjogQm9yZGVyO1xuICAgIHBvc2l0aW9uSW5mbz86IFBvc2l0aW9uSW5mb0VudGl0eVtdIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQm9yZGVyIHtcbiAgICBib3R0b206IG51bWJlcjtcbiAgICB0b3A6IG51bWJlcjtcbiAgICBsZWZ0OiBudW1iZXI7XG4gICAgcmlnaHQ6IG51bWJlcjtcbiAgICBleGFjdENlbnRlclg6IG51bWJlcjtcbiAgICBjZW50ZXJZOiBudW1iZXI7XG4gICAgY2VudGVyWDogbnVtYmVyO1xuICAgIGRlc2NyaWJlQ29udGVudHM6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICB3aWR0aDogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBQb3NpdGlvbkluZm9FbnRpdHkge1xuICAgIGxuZzogbnVtYmVyO1xuICAgIGxhdDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MUmVtb3RlTGFuZ0RldGVjdGlvbiB7XG4gICAgbGFuZ0NvZGU6IHN0cmluZztcbiAgICBwcm9iYWJpbGl0eTogbnVtYmVyO1xuICAgIGhhc2hDb2RlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTUxsYW5nRGV0ZWN0aW9uV2l0aEZpcnN0RGV0ZWN0IHtcbiAgICBsYW5nQ29kZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MTGl2ZW5lc3NDYXB0dXJlUmVzdWx0IHtcbiAgICBiaXRtYXA6IEJpdG1hcDtcbiAgICBpc0xpdmU6IGJvb2xlYW47XG4gICAgcGl0Y2g6IG51bWJlcjtcbiAgICByb2xsOiBudW1iZXI7XG4gICAgc2NvcmU6IG51bWJlcjtcbiAgICB5YXc6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQml0bWFwIHtcbiAgICBtR2FsbGVyeUNhY2hlZDogYm9vbGVhbjtcbiAgICBtSGVpZ2h0OiBudW1iZXI7XG4gICAgbU5hdGl2ZVB0cjogbnVtYmVyO1xuICAgIG1XaWR0aDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MT2JqZWN0IHtcbiAgICB0eXBlSWRlbnRpdHk6IG51bWJlcjtcbiAgICB0eXBlUG9zc2liaWxpdHk6IG51bWJlcjtcbiAgICBib3JkZXI6IEJvcmRlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQm9yZGVyIHtcbiAgICBib3R0b206IG51bWJlcjtcbiAgICB0b3A6IG51bWJlcjtcbiAgICBsZWZ0OiBudW1iZXI7XG4gICAgcmlnaHQ6IG51bWJlcjtcbiAgICBleGFjdENlbnRlclg6IG51bWJlcjtcbiAgICBjZW50ZXJZOiBudW1iZXI7XG4gICAgY2VudGVyWDogbnVtYmVyO1xuICAgIGRlc2NyaWJlQ29udGVudHM6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICB3aWR0aDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MU2tlbGV0b24ge1xuICAgIGpvaW50czogTUxKb2ludDtcbiAgICBKb2ludFBvaW50OiBNTEpvaW50UG9pbnRzO1xufVxuZXhwb3J0IGludGVyZmFjZSBNTEpvaW50IHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIHNjb3JlOiBudW1iZXI7XG4gICAgdHlwZTogbnVtYmVyO1xuICAgIGhhc2hDb2RlOiBudW1iZXI7XG59XG5leHBvcnQgZW51bSBNTEpvaW50UG9pbnRzIHtcbiAgICBUWVBFX1JJR0hUX1NIT1VMREVSID0gMTAxLFxuICAgIFRZUEVfUklHSFRfRUxCT1cgPSAxMDIsXG4gICAgVFlQRV9SSUdIVF9XUklTVCA9IDEwMyxcbiAgICBUWVBFX0xFRlRfU0hPVUxERVIgPSAxMDQsXG4gICAgVFlQRV9MRUZUX0VMQk9XID0gMTA1LFxuICAgIFRZUEVfTEVGVF9XUklTVCA9IDEwNixcbiAgICBUWVBFX1JJR0hUX0hJUCA9IDEwNyxcbiAgICBUWVBFX1JJR0hUX0tORUUgPSAxMDgsXG4gICAgVFlQRV9SSUdIVF9BTktMRSA9IDEwOSxcbiAgICBUWVBFX0xFRlRfSElQID0gMTEwLFxuICAgIFRZUEVfTEVGVF9LTkVFID0gMTExLFxuICAgIFRZUEVfTEVGVF9BTktMRSA9IDExMixcbiAgICBUWVBFX0hFQURfVE9QID0gMTEzLFxuICAgIFRZUEVfTkVDSyA9IDExNCxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTFRleHQge1xuICAgIHN0cmluZ1ZhbHVlOiBzdHJpbmc7XG4gICAgYmxvY2tzPzogQmxvY2tzW107XG59XG5leHBvcnQgaW50ZXJmYWNlIEJsb2NrcyB7XG4gICAgY29udGVudHM/OiBDb250ZW50c1tdO1xufVxuZXhwb3J0IGludGVyZmFjZSBDb250ZW50cyB7XG4gICAgc3RyaW5nVmFsdWU6IHN0cmluZztcbiAgICByb3RhdGluZ0RlZ3JlZTogbnVtYmVyO1xuICAgIGlzVmVydGljYWw6IGJvb2xlYW47XG4gICAgbGFuZ3VhZ2U6IHN0cmluZztcbiAgICBib3JkZXI6IEJvcmRlcjtcbiAgICBjb250ZW50cz86IENvbnRlbnRzW107XG59XG5leHBvcnQgaW50ZXJmYWNlIEJvcmRlciB7XG4gICAgYm90dG9tOiBudW1iZXI7XG4gICAgdG9wOiBudW1iZXI7XG4gICAgbGVmdDogbnVtYmVyO1xuICAgIHJpZ2h0OiBudW1iZXI7XG4gICAgZXhhY3RDZW50ZXJYOiBudW1iZXI7XG4gICAgY2VudGVyWTogbnVtYmVyO1xuICAgIGNlbnRlclg6IG51bWJlcjtcbiAgICBkZXNjcmliZUNvbnRlbnRzOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgd2lkdGg6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29udGVudHMge1xuICAgIHN0cmluZ1ZhbHVlOiBzdHJpbmc7XG4gICAgYm9yZGVyOiBCb3JkZXI7XG4gICAgbGFuZ3VhZ2U6IHN0cmluZztcbiAgICBsYW5ndWFnZUxpc3Q/OiBMYW5ndWFnZUxpc3RbXTtcbiAgICB2ZXJ0ZXhlcz86IFZlcnRleGVzW107XG59XG5leHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlTGlzdCB7XG4gICAgbGFuZ3VhZ2U6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVmVydGV4ZXMge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgZGVzY3JpYmVDb250ZW50czogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MVHRzUmVzdWx0IHtcbiAgICBldmVudE5hbWU6IHN0cmluZztcbiAgICB0YXNrSUQ6IHN0cmluZztcbiAgICBzdGFydDogbnVtYmVyO1xuICAgIGVuZDogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBNTFNjZW5lRGV0ZWN0aW9uUmVzdWx0IHtcbiAgICByZXN1bHRTdHJpbmc6IHN0cmluZztcbiAgICBjb25maWRlbmNlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGl2ZVNjZW5BbmFseXNlciB7XG4gICAgYW5hbHlzZUxpc3Q6IFtBbmFseXNlTGlzdF07XG4gICAgZnJhbWVQcm9wZXJ0eTogRnJhbWVQcm9wZXJ0eTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQW5hbHlzZUxpc3Qge1xuICAgIDA6IGE7XG59XG5leHBvcnQgaW50ZXJmYWNlIGEge1xuICAgIHJlc3VsdDogc3RyaW5nO1xuICAgIGNvbmZpZGVuY2U6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRnJhbWVQcm9wZXJ0eSB7XG4gICAgZXh0OiBzdHJpbmc7XG4gICAgZm9ybWF0VHlwZTogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIGl0ZW1JZGVudGl0eTogbnVtYmVyO1xuICAgIHF1YWRyYW50OiBudW1iZXI7XG4gICAgdGltZXN0YW1wOiBudW1iZXI7XG4gICAgd2lkdGg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTFNvdW5kRGVjdFJlc3VsdCB7XG4gICAgc291bmRUeXBlOiBNTFNvdW5kRGVjdFNvdW5kVHlwZVJlc3VsdDtcbiAgICBldmVudE5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCBlbnVtIE1MU291bmREZWN0U291bmRUeXBlUmVzdWx0IHtcbiAgICBTT1VORF9ERUNUX0VSUk9SX05PX01FTSA9IDEyMjAxLFxuICAgIFNPVU5EX0RFQ1RfRVJST1JfRkFUQUxfRVJST1IgPSAxMjIwMixcbiAgICBTT1VORF9ERUNUX0VSUk9SX0FVRElPID0gMTIyMDMsXG4gICAgU09VTkRfREVDVF9FUlJPUl9JTlRFUk5BTCA9IDEyMjk4LFxuICAgIFNPVU5EX0VWRU5UX1RZUEVfTEFVR0hURVIgPSAwLFxuICAgIFNPVU5EX0VWRU5UX1RZUEVfQkFCWV9DUlkgPSAxLFxuICAgIFNPVU5EX0VWRU5UX1RZUEVfU05PUklORyA9IDIsXG4gICAgU09VTkRfRVZFTlRfVFlQRV9TTkVFWkUgPSAzLFxuICAgIFNPVU5EX0VWRU5UX1RZUEVfU0NSRUFNSU5HID0gNCxcbiAgICBTT1VORF9FVkVOVF9UWVBFX01FT1cgPSA1LFxuICAgIFNPVU5EX0VWRU5UX1RZUEVfQkFSSyA9IDYsXG4gICAgU09VTkRfRVZFTlRfVFlQRV9XQVRFUiA9IDcsXG4gICAgU09VTkRfRVZFTlRfVFlQRV9DQVJfQUxBUk0gPSA4LFxuICAgIFNPVU5EX0VWRU5UX1RZUEVfRE9PUl9CRUxMID0gOSxcbiAgICBTT1VORF9FVkVOVF9UWVBFX0tOT0NLID0gMTAsXG4gICAgU09VTkRfRVZFTlRfVFlQRV9BTEFSTSA9IDExLFxuICAgIFNPVU5EX0VWRU5UX1RZUEVfU1RFQU1fV0hJU1RMRSA9IDEyLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MVm9jYWJ1bGFyeVZlcnNpb24ge1xuICAgIGRpY3Rpb25hcnlEaW1lbnNpb246IHN0cmluZztcbiAgICBkaWN0aW9uYXJ5U2l6ZTogc3RyaW5nO1xuICAgIHZlcnNpb25Obzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MV29yZHRvVmVjdG9yUmVzdWx0IHtcbiAgICByZXN1bHQ6IFJlc3VsdDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUmVzdWx0IHtcbiAgICB3b3JkVGV4dDogc3RyaW5nO1xuICAgIHZlY3Rvcjogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBNbFNlbnRlbmNldG9WZWN0b3JSZXN1bHQge1xuICAgIHNlbnRlbmNlOiBzdHJpbmc7XG4gICAgdmVjdG9yOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIE1MV29yZFNpbWlsYXJpdHlSZXN1bHQge1xuICAgIHdvcmRTaW1pbGFyaXR5OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIE1MU2VudGVuY2VTaW1pbGFyaXR5UmVzdWx0IHtcbiAgICBzZW50ZW5jZVNpbWlsYXJpdHk6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTUxTaW1pbGFyV29yZHNSZXN1bHQge1xuICAgIHJlc3VsdD86IHN0cmluZ1tdIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTUxGb3JtUmVjb2dpdGlvblJlc3VsdCB7XG4gICAgcmV0Q29kZTogbnVtYmVyO1xuICAgIHRhYmxlQ29udGVudDogVGFibGVDb250ZW50O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlQ29udGVudCB7XG4gICAgdGFibGVDb3VudDogbnVtYmVyO1xuICAgIHRhYmxlcz86IFRhYmxlc0VudGl0eVtdIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVzRW50aXR5IHtcbiAgICB0YWJsZUlEOiBudW1iZXI7XG4gICAgaGVhZGVySW5mbzogc3RyaW5nO1xuICAgIGZvb3RlckluZm86IHN0cmluZztcbiAgICB0YWJsZUJvZHk/OiBUYWJsZUJvZHlFbnRpdHlbXSB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlQm9keUVudGl0eSB7XG4gICAgc3RhcnRSb3c6IG51bWJlcjtcbiAgICBlbmRSb3c6IG51bWJlcjtcbiAgICBzdGFydENvbDogbnVtYmVyO1xuICAgIGVuZENvbDogbnVtYmVyO1xuICAgIGNlbGxDb29yZGluYXRlOiBDZWxsQ29vcmRpbmF0ZTtcbiAgICB0ZXh0SW5mbzogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBDZWxsQ29vcmRpbmF0ZSB7XG4gICAgdG9wTGVmdF94OiBudW1iZXI7XG4gICAgdG9wTGVmdF95OiBudW1iZXI7XG4gICAgdG9wUmlnaHRfeDogbnVtYmVyO1xuICAgIHRvcFJpZ2h0X3k6IG51bWJlcjtcbiAgICBib3R0b21MZWZ0X3g6IG51bWJlcjtcbiAgICBib3R0b21MZWZ0X3k6IG51bWJlcjtcbiAgICBib3R0b21SaWdodF94OiBudW1iZXI7XG4gICAgYm90dG9tUmlnaHRfeTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MUHJvZHVjdFZpc2lvblJlc3VsdCB7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIGJvcmRlcjogQm9yZGVyO1xuICAgIGxpc3Q/OiBMaXN0RW50aXR5W10gfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBCb3JkZXIge1xuICAgIGJvdHRvbTogbnVtYmVyO1xuICAgIHRvcDogbnVtYmVyO1xuICAgIGxlZnQ6IG51bWJlcjtcbiAgICByaWdodDogbnVtYmVyO1xuICAgIGV4YWN0Q2VudGVyWDogbnVtYmVyO1xuICAgIGNlbnRlclk6IG51bWJlcjtcbiAgICBjZW50ZXJYOiBudW1iZXI7XG4gICAgZGVzY3JpYmVDb250ZW50czogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIExpc3RFbnRpdHkge1xuICAgIGN1c3RvbWNvbnRlbnQ6IHN0cmluZztcbiAgICBpbWFnZWxpc3Q/OiBJbWFnZWxpc3RFbnRpdHlbXSB8IG51bGw7XG4gICAgcG9zc2liaWxpdHk6IG51bWJlcjtcbiAgICBwcm9kdWN0VVJMOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEltYWdlbGlzdEVudGl0eSB7XG4gICAgaW1hZ2VJZDogc3RyaW5nO1xuICAgIHBvc3NpYmlsaXR5OiBudW1iZXI7XG4gICAgcHJvZHVjdElkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIENvcmRvdmFFcnJvcnMge1xuICAgIFVOS05PV04gPSAtMSxcbiAgICBTVUNDRVNTID0gMCxcbiAgICBESVNDQVJERUQgPSAxLFxuICAgIElOTkVSID0gMixcbiAgICBJTkFDVElWRSA9IDMsXG4gICAgTk9UX1NVUFBPUlRFRCA9IDQsXG4gICAgSUxMRUdBTF9QQVJBTUVURVIgPSA1LFxuICAgIE9WRVJEVUUgPSA2LFxuICAgIE5PX0ZPVU5EID0gNyxcbiAgICBEVVBMSUNBVEVfRk9VTkQgPSA4LFxuICAgIE5PX1BFUk1JU1NJT04gPSA5LFxuICAgIElOU1VGRklDSUVOVF9SRVNPVVJDRSA9IDEwLFxuICAgIEFOQUxZU0lTX0ZBSUxVUkUgPSAxMSxcbiAgICBJTlRFUlJVUFRFRCA9IDEyLFxuICAgIEVYQ0VFRF9SQU5HRSA9IDEzLFxuICAgIERBVEFfTUlTU0lORyA9IDE0LFxuICAgIEFVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEID0gMTUsXG4gICAgVEZMSVRFX05PVF9DT01QQVRJQkxFID0gMTYsXG4gICAgSU5TVUZGSUNJRU5UX1NQQUNFID0gMTcsXG4gICAgSEFTSF9NSVNTID0gMTgsXG4gICAgVE9LRU5fSU5WQUxJRCA9IDE5LFxuICAgIFNFUlZJQ0VfRkFJTFVSRSA9IDIwLFxuICAgIEFOQUxZU0lTX05VTEwgPSAyMSxcbn1cbiJdfQ==