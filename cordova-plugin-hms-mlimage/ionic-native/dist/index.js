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
var HMSMLImagePluginOriginal = /** @class */ (function (_super) {
    __extends(HMSMLImagePluginOriginal, _super);
    function HMSMLImagePluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * An app information class used to store basic information about apps with the HMS Core ML Image SDK integrated and complete the initialization of ML Image Kit. When using cloud services of the ML Image Kit, you need to set the apiKey of your app.
     * @param  {appSettingReq} appSettingReq Represents the parameter required.
     * @returns Promise<any>
     */
    HMSMLImagePluginOriginal.prototype.appSetting = function (appSettingReq) { return cordova(this, "appSetting", { "otherPromise": true }, arguments); };
    /**
     * It sets Api Key or access token for application.
     * @param  {configReq} params Represents your API_KEY.
     * @returns Promise<any>
     */
    HMSMLImagePluginOriginal.prototype.serviceInitializer = function (params) { return cordova(this, "serviceInitializer", { "otherPromise": true }, arguments); };
    /**
     * Adjusts the focal length of the camera based on the scaling coefficient (digital zoom).
     * @param  {doZoomReq} doZoomReq Reperesents the necessary parameters.
     * @returns Promise<any>
     */
    HMSMLImagePluginOriginal.prototype.doZoom = function (doZoomReq) { return cordova(this, "doZoom", { "otherPromise": true }, arguments); };
    /**
     * Monitors photographing.
     * @returns Promise<any>
     */
    HMSMLImagePluginOriginal.prototype.photograph = function () { return cordova(this, "photograph", { "otherPromise": true }, arguments); };
    /**
     * Close lens engine.
     * @returns Promise<any>
     */
    HMSMLImagePluginOriginal.prototype.destroy = function () { return cordova(this, "destroy", { "otherPromise": true }, arguments); };
    /**
     * Obtains the size of the preview image of a camera.
     * @returns Promise<any>
     */
    HMSMLImagePluginOriginal.prototype.getDisplayDimension = function () { return cordova(this, "getDisplayDimension", { "otherPromise": true }, arguments); };
    /**
     * Obtains the selected camera type.
     * @returns Promise<any>
     */
    HMSMLImagePluginOriginal.prototype.getLensType = function () { return cordova(this, "getLensType", { "otherPromise": true }, arguments); };
    /**
     * This service recognize the image from the picture and return what the picture can be with the percentages. Use ML Libraries.
     * @param  {ownCustomModelReq | downloadModelReq} ownCustomModelReq Represents the parameter required for custom model analyser.
     * @returns Promise<any>
     */
    HMSMLImagePluginOriginal.prototype.customModelAnalyser = function (ownCustomModelReq) { return cordova(this, "customModelAnalyser", { "otherPromise": true }, arguments); };
    /**
     * Obtains Frame.
     * @param  {mlFrameReq} mlFrameReq Represents the parameter required.
     * @returns Promise<any>
     */
    HMSMLImagePluginOriginal.prototype.mlFrame = function (mlFrameReq) { return cordova(this, "mlFrame", { "otherPromise": true }, arguments); };
    /**
     * Sets a data processing location when you choose to manually manage and specify such a location.
     * @param  {region} region Represents the parameter.
     *         * REGION_DR_UNKNOWN = 1001,
               * REGION_DR_CHINA = 1002,
               * REGION_DR_RUSSIA = 1005,
               * REGION_DR_GERMAN = 1006,
               * REGION_DR_SINGAPORE = 1007
     * @returns Promise<any>
     */
    HMSMLImagePluginOriginal.prototype.setUserRegion = function (region) { return cordova(this, "setUserRegion", { "otherPromise": true }, arguments); };
    /**
     * Obtains the country/region code of the data processing location you have specified when you choose to manually manage and specify such a location.
     * @returns Promise<String>
     */
    HMSMLImagePluginOriginal.prototype.getCountryCode = function () { return cordova(this, "getCountryCode", { "otherPromise": true }, arguments); };
    /**
     * This service enable logger service.
     * @returns Promise<any>
     */
    HMSMLImagePluginOriginal.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    /**
     * This service disable logger service.
     * @returns Promise<any>
     */
    HMSMLImagePluginOriginal.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    /**
     * This service can integrate with multiple types of analyzers to detect different types of objects at the same time. For example, it can simultaneously recognize faces and texts in an image.
     * @param  {compositeAnalyserReq} ownCustomModelReq Represents the parameter required for composite analyser.
     * @returns Promise<any>
     */
    HMSMLImagePluginOriginal.prototype.initializeCompositeAnalyzer = function (compositeAnalyserReq) { return cordova(this, "initializeCompositeAnalyzer", { "otherPromise": true }, arguments); };
    /**
     * Obtains composite analyser information.
     * @returns Promise<any>
     */
    HMSMLImagePluginOriginal.prototype.infoCompositeAnalyser = function () { return cordova(this, "infoCompositeAnalyser", { "otherPromise": true }, arguments); };
    /**
     * Close composite analyser.
     * @returns Promise<void>
     */
    HMSMLImagePluginOriginal.prototype.closeCompositeAnalyser = function () { return cordova(this, "closeCompositeAnalyser", { "otherPromise": true }, arguments); };
    /**
     * Obtain picture.
     * @param  {req} req Represents the parameter required for obtain picture.
     * @returns Promise<any>
     */
    HMSMLImagePluginOriginal.prototype.obtainPicture = function (req) { return cordova(this, "obtainPicture", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSMLImagePluginOriginal.prototype, "MLImageClassificationConfig", {
        get: function () { return cordovaPropertyGet(this, "MLImageClassificationConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLImageClassificationConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePluginOriginal.prototype, "MLImageSegmentationSetting", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePluginOriginal.prototype, "MLImageSegmentationScene", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationScene"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationScene", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePluginOriginal.prototype, "MLRemoteLandmarkSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteLandmarkSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteLandmarkSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePluginOriginal.prototype, "ImgSuperResolutionConfig", {
        get: function () { return cordovaPropertyGet(this, "ImgSuperResolutionConfig"); },
        set: function (value) { cordovaPropertySet(this, "ImgSuperResolutionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePluginOriginal.prototype, "MlObjectAnalyserConfig", {
        get: function () { return cordovaPropertyGet(this, "MlObjectAnalyserConfig"); },
        set: function (value) { cordovaPropertySet(this, "MlObjectAnalyserConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePluginOriginal.prototype, "DownloadStrategyCustom", {
        get: function () { return cordovaPropertyGet(this, "DownloadStrategyCustom"); },
        set: function (value) { cordovaPropertySet(this, "DownloadStrategyCustom", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePluginOriginal.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePluginOriginal.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePluginOriginal.prototype, "MLFlashMode", {
        get: function () { return cordovaPropertyGet(this, "MLFlashMode"); },
        set: function (value) { cordovaPropertySet(this, "MLFlashMode", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePluginOriginal.prototype, "MLLensType", {
        get: function () { return cordovaPropertyGet(this, "MLLensType"); },
        set: function (value) { cordovaPropertySet(this, "MLLensType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePluginOriginal.prototype, "MLAnalyzerName", {
        get: function () { return cordovaPropertyGet(this, "MLAnalyzerName"); },
        set: function (value) { cordovaPropertySet(this, "MLAnalyzerName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePluginOriginal.prototype, "MLCompositeAnalyzerName", {
        get: function () { return cordovaPropertyGet(this, "MLCompositeAnalyzerName"); },
        set: function (value) { cordovaPropertySet(this, "MLCompositeAnalyzerName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePluginOriginal.prototype, "MLFrame", {
        get: function () { return cordovaPropertyGet(this, "MLFrame"); },
        set: function (value) { cordovaPropertySet(this, "MLFrame", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePluginOriginal.prototype, "MLProductConfig", {
        get: function () { return cordovaPropertyGet(this, "MLProductConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLProductConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePluginOriginal.prototype, "syncMode", {
        get: function () { return cordovaPropertyGet(this, "syncMode"); },
        set: function (value) { cordovaPropertySet(this, "syncMode", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePluginOriginal.prototype, "MLFaceSetting", {
        get: function () { return cordovaPropertyGet(this, "MLFaceSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePluginOriginal.prototype, "HandkeyPointConfig", {
        get: function () { return cordovaPropertyGet(this, "HandkeyPointConfig"); },
        set: function (value) { cordovaPropertySet(this, "HandkeyPointConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePluginOriginal.prototype, "Events", {
        get: function () { return cordovaPropertyGet(this, "Events"); },
        set: function (value) { cordovaPropertySet(this, "Events", value); },
        enumerable: false,
        configurable: true
    });
    HMSMLImagePluginOriginal.pluginName = "HMSMLImagePlugin";
    HMSMLImagePluginOriginal.plugin = "cordova-plugin-hms-mlimage";
    HMSMLImagePluginOriginal.pluginRef = "HMSMLImagePlugin";
    HMSMLImagePluginOriginal.platforms = ["Android"];
    return HMSMLImagePluginOriginal;
}(IonicNativePlugin));
var HMSMLImagePlugin = new HMSMLImagePluginOriginal();
export { HMSMLImagePlugin };
var HMSMLImageOriginal = /** @class */ (function (_super) {
    __extends(HMSMLImageOriginal, _super);
    function HMSMLImageOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This method represents the image classification SDK.
     * @param  {localImageClassificationReq|remoteImageClassificationReq} imageClassificationInput Represents the parameter required for classify objects.
     * @returns Promise<ImageClassificationAnalyser>
     */
    HMSMLImageOriginal.prototype.imageClassificationAnalyser = function (imageClassificationInput) { return cordova(this, "imageClassificationAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method stop image classification analyser.
     * @returns Promise<string>
     */
    HMSMLImageOriginal.prototype.stopImageClassificationAnalyser = function () { return cordova(this, "stopImageClassificationAnalyser", { "otherPromise": true }, arguments); };
    /**
     * The image segmentation service segments same elements (such as human body, plant, and sky) from an image. The elements supported include human body, sky, plant, food and others.
     * @param  {imgSegmentationReq} imgSegmentationReq Represents the parameter required for image segmentation.
     * @returns Promise<SegmentationAnalyser>
     */
    HMSMLImageOriginal.prototype.imgSegmentation = function (imgSegmentationReq) { return cordova(this, "imgSegmentation", { "otherPromise": true }, arguments); };
    /**
     * This method stop image segmentation service.
     * @returns Promise<any>
     */
    HMSMLImageOriginal.prototype.stopImgSegmentation = function () { return cordova(this, "stopImgSegmentation", { "otherPromise": true }, arguments); };
    /**
     * The landmark recognition service enables you to obtain the landmark name, landmark longitude and latitude, and confidence of the input image.
     * @param  {imgLandMarkReq} imgLandMarkReq Represents the parameter required for image landmark analyser.
     * @returns Promise<ImageLandmarkAnalyser>
     */
    HMSMLImageOriginal.prototype.imgLandMarkAnalyser = function (imgLandMarkReq) { return cordova(this, "imgLandMarkAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method stop image landmark analyser service.
     * @returns Promise<any>
     */
    HMSMLImageOriginal.prototype.imgLandMarkAnalyserStop = function () { return cordova(this, "imgLandMarkAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * The object detection service can detect and track multiple objects in an image.
     * @param  {objectReq} objectReq Represents the parameter required for object detection.
     * @returns Promise<ImageObjectAnalyser>
     */
    HMSMLImageOriginal.prototype.objectAnalyser = function (objectReq) { return cordova(this, "objectAnalyser", { "otherPromise": true }, arguments); };
    /**
     * The scene detection service can classify the scenario content of images and add labels, such as outdoor scenery, indoor places, and buildings, to help understand the image content.
     *   @param  {stillSceneReq} stillSceneReq Represents the parameter required for Scene analyser.
     *  @returns Promise <any>
     */
    HMSMLImageOriginal.prototype.stillSceneAnalyser = function (stillSceneReq) { return cordova(this, "stillSceneAnalyser", { "otherPromise": true }, arguments); };
    /**
   This service can automatically identify the location of a document in an image and adjust the shooting angle to the angle facing the document, even if the document is tilted.
   * @param  {documentSkewCorrectionReq} documentSkewCorrectionReq Represents the parameter required for document skew correction.
   * @returns Promise<DocumentSkewAnalyser>
   */
    HMSMLImageOriginal.prototype.documentSkewCorrectionAnalyser = function (documentSkewCorrectionReq) { return cordova(this, "documentSkewCorrectionAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This service can zoom in an image that contains text and significantly improve the definition of text in the image.
     * @param  {textImageSuperResolutionReq} textImageSuperResolutionReq Represents the parameter required for Text Image Super Resolution.
     * @returns Promise<any>
     */
    HMSMLImageOriginal.prototype.textImageSuperResolution = function (textImageSuperResolutionReq) { return cordova(this, "textImageSuperResolution", { "otherPromise": true }, arguments); };
    /**
     * This service provides the 1x super-resolution capabilities. 1x super-resolution removes the compression noise.
     * @param  {imageSuperResolutionReq} imageSuperResolutionReq Represents the parameter required for Image Super Resolution.
     * @returns Promise<any>
     */
    HMSMLImageOriginal.prototype.imageSuperResolution = function (imageSuperResolutionReq) { return cordova(this, "imageSuperResolution", { "otherPromise": true }, arguments); };
    /**
     * Represents the image-based product detection API of HUAWEI ML Kit.
     * @param  {productReq} productReq Represents the parameter required.
     * @returns Promise<any>
     */
    HMSMLImageOriginal.prototype.productVisionAnalyser = function (productReq) { return cordova(this, "productVisionAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method stop object analyser service.
     * @returns Promise<any>
     */
    HMSMLImageOriginal.prototype.objectAnalyserStop = function () { return cordova(this, "objectAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * This method stop product analyser service.
     * @returns Promise<any>
     */
    HMSMLImageOriginal.prototype.productAnalyserStop = function () { return cordova(this, "productAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * This method stop document skew analyser service.
     * @returns Promise<any>
     */
    HMSMLImageOriginal.prototype.docSkewAnalyserStop = function () { return cordova(this, "docSkewAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * This method stop TISR analyser service.
     * @returns Promise<any>
     */
    HMSMLImageOriginal.prototype.TISRAnalyserStop = function () { return cordova(this, "TISRAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * This method stop ISR analyser service.
     * @returns Promise<any>
     */
    HMSMLImageOriginal.prototype.ISRAnalyserStop = function () { return cordova(this, "ISRAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * This method stop scene analyser service.
     * @returns Promise<any>
     */
    HMSMLImageOriginal.prototype.stillSceneAnalyserStop = function () { return cordova(this, "stillSceneAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * This method returns image classification settings.
     * @returns Promise<any>
     */
    HMSMLImageOriginal.prototype.getImageClassificationAnalyserSetting = function () { return cordova(this, "getImageClassificationAnalyserSetting", { "otherPromise": true }, arguments); };
    /**
     *  This method returns ISR settings.
     * @returns Promise<any>
     */
    HMSMLImageOriginal.prototype.getISRSetting = function () { return cordova(this, "getISRSetting", { "otherPromise": true }, arguments); };
    /**
     *  This method returns segmentation settings.
     * @returns Promise<any>
     */
    HMSMLImageOriginal.prototype.getSegmentationSetting = function () { return cordova(this, "getSegmentationSetting", { "otherPromise": true }, arguments); };
    /**
     *  This method returns landmark settings.
     * @returns Promise<any>
     */
    HMSMLImageOriginal.prototype.getLandmarkSetting = function () { return cordova(this, "getLandmarkSetting", { "otherPromise": true }, arguments); };
    /**
     *  This method returns object settings.
     * @returns Promise<any>
     */
    HMSMLImageOriginal.prototype.getObjectSetting = function () { return cordova(this, "getObjectSetting", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSMLImageOriginal.prototype, "MLImageClassificationConfig", {
        get: function () { return cordovaPropertyGet(this, "MLImageClassificationConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLImageClassificationConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImageOriginal.prototype, "MLImageSegmentationSetting", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImageOriginal.prototype, "MLImageSegmentationScene", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationScene"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationScene", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImageOriginal.prototype, "MLRemoteLandmarkSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteLandmarkSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteLandmarkSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImageOriginal.prototype, "ImgSuperResolutionConfig", {
        get: function () { return cordovaPropertyGet(this, "ImgSuperResolutionConfig"); },
        set: function (value) { cordovaPropertySet(this, "ImgSuperResolutionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImageOriginal.prototype, "MlObjectAnalyserConfig", {
        get: function () { return cordovaPropertyGet(this, "MlObjectAnalyserConfig"); },
        set: function (value) { cordovaPropertySet(this, "MlObjectAnalyserConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImageOriginal.prototype, "DownloadStrategyCustom", {
        get: function () { return cordovaPropertyGet(this, "DownloadStrategyCustom"); },
        set: function (value) { cordovaPropertySet(this, "DownloadStrategyCustom", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImageOriginal.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImageOriginal.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImageOriginal.prototype, "MLFlashMode", {
        get: function () { return cordovaPropertyGet(this, "MLFlashMode"); },
        set: function (value) { cordovaPropertySet(this, "MLFlashMode", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImageOriginal.prototype, "MLLensType", {
        get: function () { return cordovaPropertyGet(this, "MLLensType"); },
        set: function (value) { cordovaPropertySet(this, "MLLensType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImageOriginal.prototype, "MLAnalyzerName", {
        get: function () { return cordovaPropertyGet(this, "MLAnalyzerName"); },
        set: function (value) { cordovaPropertySet(this, "MLAnalyzerName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImageOriginal.prototype, "MLCompositeAnalyzerName", {
        get: function () { return cordovaPropertyGet(this, "MLCompositeAnalyzerName"); },
        set: function (value) { cordovaPropertySet(this, "MLCompositeAnalyzerName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImageOriginal.prototype, "MLFrame", {
        get: function () { return cordovaPropertyGet(this, "MLFrame"); },
        set: function (value) { cordovaPropertySet(this, "MLFrame", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImageOriginal.prototype, "MLProductConfig", {
        get: function () { return cordovaPropertyGet(this, "MLProductConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLProductConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImageOriginal.prototype, "syncMode", {
        get: function () { return cordovaPropertyGet(this, "syncMode"); },
        set: function (value) { cordovaPropertySet(this, "syncMode", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImageOriginal.prototype, "MLFaceSetting", {
        get: function () { return cordovaPropertyGet(this, "MLFaceSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLFaceSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImageOriginal.prototype, "HandkeyPointConfig", {
        get: function () { return cordovaPropertyGet(this, "HandkeyPointConfig"); },
        set: function (value) { cordovaPropertySet(this, "HandkeyPointConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImageOriginal.prototype, "Events", {
        get: function () { return cordovaPropertyGet(this, "Events"); },
        set: function (value) { cordovaPropertySet(this, "Events", value); },
        enumerable: false,
        configurable: true
    });
    HMSMLImageOriginal.pluginName = "HMSMLImage";
    HMSMLImageOriginal.plugin = "cordova-plugin-hms-mlimage";
    HMSMLImageOriginal.pluginRef = "HMSMLImage";
    HMSMLImageOriginal.platforms = ["Android"];
    return HMSMLImageOriginal;
}(IonicNativePlugin));
var HMSMLImage = new HMSMLImageOriginal();
export { HMSMLImage };
var MLLive = /** @class */ (function () {
    function MLLive(scene, divId) {
        if (scene === "liveEngineAnalyser") {
            this.arScene = new (HMSMLImagePluginOriginal.getPlugin().liveEngineAnalyser)(divId);
        }
        if (scene === "liveCompositeAnalyser") {
            this.arScene = new (HMSMLImagePluginOriginal.getPlugin().liveCompositeAnalyser)(divId);
        }
    }
    MLLive.prototype.on = function (eventName, call) {
        return this.arScene.on(eventName, call);
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
        return _super.call(this, "liveEngineAnalyser", divId) || this;
    }
    return liveEngineAnalyser;
}(MLLive));
export { liveEngineAnalyser };
var liveCompositeAnalyser = /** @class */ (function (_super) {
    __extends(liveCompositeAnalyser, _super);
    function liveCompositeAnalyser(divId) {
        return _super.call(this, "liveCompositeAnalyser", divId) || this;
    }
    return liveCompositeAnalyser;
}(MLLive));
export { liveCompositeAnalyser };
export var HandkeyPointConfig;
(function (HandkeyPointConfig) {
    HandkeyPointConfig[HandkeyPointConfig["TYPE_ALL"] = 0] = "TYPE_ALL";
    HandkeyPointConfig[HandkeyPointConfig["TYPE_KEYPOINT_ONLY"] = 1] = "TYPE_KEYPOINT_ONLY";
    HandkeyPointConfig[HandkeyPointConfig["TYPE_RECT_ONLY"] = 2] = "TYPE_RECT_ONLY";
    HandkeyPointConfig[HandkeyPointConfig["MAX_HANDS_NUM"] = 10] = "MAX_HANDS_NUM";
})(HandkeyPointConfig || (HandkeyPointConfig = {}));
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
    MLStillCompositerName["TEXT"] = "TEXT";
    MLStillCompositerName["OBJECT"] = "OBJECT";
    MLStillCompositerName["CLASSIFICATION"] = "CLASSIFICATION";
})(MLStillCompositerName || (MLStillCompositerName = {}));
export var MLAnalyzerName;
(function (MLAnalyzerName) {
    MLAnalyzerName["LIVEOBJECT"] = "OBJECT";
    MLAnalyzerName["LIVECLASSIFICATION"] = "CLASSIFICATION";
    MLAnalyzerName["LIVESCENE"] = "SCENE";
    MLAnalyzerName["LIVESEGMENTATION"] = "SEGMENTATION";
})(MLAnalyzerName || (MLAnalyzerName = {}));
export var MLCompositeAnalyzerName;
(function (MLCompositeAnalyzerName) {
    MLCompositeAnalyzerName["LIVEFACE"] = "FACE";
    MLCompositeAnalyzerName["LIVEFACE3D"] = "FACE3D";
    MLCompositeAnalyzerName["LIVEFACEMAX"] = "FACEMAX";
    MLCompositeAnalyzerName["LIVEHAND"] = "HAND";
    MLCompositeAnalyzerName["LIVESKELETON"] = "SKELETON";
    MLCompositeAnalyzerName["LIVEOBJECT"] = "OBJECT";
    MLCompositeAnalyzerName["LIVECLASSIFICATION"] = "CLASSIFICATION";
    MLCompositeAnalyzerName["LIVESCENE"] = "SCENE";
    MLCompositeAnalyzerName["LIVETEXT"] = "TEXT";
    MLCompositeAnalyzerName["LIVEGESTURE"] = "GESTURE";
})(MLCompositeAnalyzerName || (MLCompositeAnalyzerName = {}));
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
export var syncMode;
(function (syncMode) {
    syncMode[syncMode["SYNC_TYPE"] = 1] = "SYNC_TYPE";
    syncMode[syncMode["ASYNC_TYPE"] = 0] = "ASYNC_TYPE";
})(syncMode || (syncMode = {}));
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
export var RectStyle;
(function (RectStyle) {
    RectStyle[RectStyle["STROKE"] = 1] = "STROKE";
    RectStyle[RectStyle["FILL"] = 2] = "FILL";
    RectStyle[RectStyle["FILL_AND_STROKE"] = 3] = "FILL_AND_STROKE";
})(RectStyle || (RectStyle = {}));
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
export var Events;
(function (Events) {
    Events["TEXT_TRANSACTOR_ON_DESTROY"] = "textTransactorOnDestroy";
    Events["TEXT_TRANSACTOR_ON_RESULT"] = "textTransactorOnResult";
    Events["FACE_TRANSACTOR_ON_DESTROY"] = "faceTransactorOnDestroy";
    Events["FACE_TRANSACTOR_ON_RESULT"] = "faceTransactorOnResult";
    Events["FACE_3D_TRANSACTOR_ON_DESTROY"] = "face3dTransactorOnDestroy";
    Events["FACE_3D_TRANSACTOR_ON_RESULT"] = "face3dTransactorOnResult";
    Events["CLASSIFICATION_TRANSACTOR_ON_DESTROY"] = "classificationTransactorOnDestroy";
    Events["CLASSIFICATION_TRANSACTOR_ON_RESULT"] = "classificationTransactorOnResult";
    Events["OBJECT_TRANSACTOR_ON_DESTROY"] = "objectTransactorOnDestroy";
    Events["OBJECT_TRANSACTOR_ON_RESULT"] = "objectTransactorOnResult";
    Events["SCENE_TRANSACTOR_ON_DESTROY"] = "sceneTransactorOnDestroy";
    Events["SCENE_TRANSACTOR_ON_RESULT"] = "sceneTransactorOnResult";
    Events["SKELETON_TRANSACTOR_ON_DESTROY"] = "skeletonTransactorOnDestroy";
    Events["SKELETON_TRANSACTOR_ON_RESULT"] = "skeletonTransactorOnResult";
    Events["HAND_TRANSACTOR_ON_DESTROY"] = "handTransactorOnDestroy";
    Events["HAND_TRANSACTOR_ON_RESULT"] = "handTransactorOnResult";
    Events["GESTURE_TRANSACTOR_ON_DESTROY"] = "gestureTransactorOnDestroy";
    Events["GESTURE_TRANSACTOR_ON_RESULT"] = "gestureTransactorOnResult";
    Events["SEGMENTATION_TRANSACTOR_ON_DESTROY"] = "segmentationTransactorOnDestroy";
    Events["SEGMENTATION_TRANSACTOR_ON_RESULT"] = "segmentationTransactorOnResult";
})(Events || (Events = {}));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBaUJBLE9BQU8sc0VBQXVELE1BQU0sb0JBQW9CLENBQUM7O0lBU25ELG9DQUFpQjs7OztJQXlDbkQ7Ozs7T0FJRztJQUNILHFDQUFVLGFBQUMsYUFBNEI7SUFJdkM7Ozs7T0FJRztJQUNILDZDQUFrQixhQUFDLE1BQWlCO0lBSXBDOzs7O09BSUc7SUFDSCxpQ0FBTSxhQUFDLFNBQW9CO0lBSTNCOzs7T0FHRztJQUNILHFDQUFVO0lBSVY7OztPQUdHO0lBQ0gsa0NBQU87SUFJUDs7O09BR0c7SUFDSCw4Q0FBbUI7SUFJbkI7OztPQUdHO0lBQ0gsc0NBQVc7SUFLWDs7OztPQUlHO0lBQ0gsOENBQW1CLGFBQ2YsaUJBQXVEO0lBSzNEOzs7O09BSUc7SUFDSCxrQ0FBTyxhQUFDLFVBQXNCO0lBSTlCOzs7Ozs7Ozs7T0FTRztJQUNILHdDQUFhLGFBQUMsTUFBYztJQUk1Qjs7O09BR0c7SUFDSCx5Q0FBYztJQUtkOzs7T0FHRztJQUNILHVDQUFZO0lBSVo7OztPQUdHO0lBQ0gsd0NBQWE7SUFJYjs7OztPQUlHO0lBQ0gsc0RBQTJCLGFBQ3ZCLG9CQUEwQztJQUs5Qzs7O09BR0c7SUFDSCxnREFBcUI7SUFJckI7OztPQUdHO0lBQ0gsaURBQXNCO0lBSXRCOzs7O09BSUc7SUFDSCx3Q0FBYSxhQUNULEdBQXlCOzBCQS9MN0IseURBQTJCOzs7Ozs7MEJBRTNCLHdEQUEwQjs7Ozs7OzBCQUUxQixzREFBd0I7Ozs7OzswQkFFeEIscURBQXVCOzs7Ozs7MEJBRXZCLHNEQUF3Qjs7Ozs7OzBCQUV4QixvREFBc0I7Ozs7OzswQkFFdEIsb0RBQXNCOzs7Ozs7MEJBRXRCLG9DQUFNOzs7Ozs7MEJBRU4sdUNBQVM7Ozs7OzswQkFFVCx5Q0FBVzs7Ozs7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MjAyMy4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcbiAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gXCJAaW9uaWMtbmF0aXZlL2NvcmVcIjtcblxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogXCJITVNNTEltYWdlUGx1Z2luXCIsXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1tbGltYWdlXCIsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICAgIHBsdWdpblJlZjogXCJITVNNTEltYWdlUGx1Z2luXCIsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNNTEltYWdlUGx1Z2luIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MSW1hZ2VDbGFzc2lmaWNhdGlvbkNvbmZpZyA9IE1MSW1hZ2VDbGFzc2lmaWNhdGlvbkNvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEltYWdlU2VnbWVudGF0aW9uU2V0dGluZyA9IE1MSW1hZ2VTZWdtZW50YXRpb25TZXR0aW5nO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MSW1hZ2VTZWdtZW50YXRpb25TY2VuZSA9IE1MSW1hZ2VTZWdtZW50YXRpb25TY2VuZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFJlbW90ZUxhbmRtYXJrU2V0dGluZyA9IE1MUmVtb3RlTGFuZG1hcmtTZXR0aW5nO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIEltZ1N1cGVyUmVzb2x1dGlvbkNvbmZpZyA9IEltZ1N1cGVyUmVzb2x1dGlvbkNvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNbE9iamVjdEFuYWx5c2VyQ29uZmlnID0gTWxPYmplY3RBbmFseXNlckNvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBEb3dubG9hZFN0cmF0ZWd5Q3VzdG9tID0gRG93bmxvYWRTdHJhdGVneUN1c3RvbTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBDb2xvcnMgPSBDb2xvcnM7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgUmVjdFN0eWxlID0gUmVjdFN0eWxlO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MRmxhc2hNb2RlID0gTUxGbGFzaE1vZGU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxMZW5zVHlwZSA9IE1MTGVuc1R5cGU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxBbmFseXplck5hbWUgPSBNTEFuYWx5emVyTmFtZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTENvbXBvc2l0ZUFuYWx5emVyTmFtZSA9IE1MQ29tcG9zaXRlQW5hbHl6ZXJOYW1lO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MRnJhbWUgPSBNTEZyYW1lO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MUHJvZHVjdENvbmZpZyA9IE1MUHJvZHVjdENvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBzeW5jTW9kZSA9IHN5bmNNb2RlO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MRmFjZVNldHRpbmcgPSBNTEZhY2VTZXR0aW5nO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIEhhbmRrZXlQb2ludENvbmZpZyA9IEhhbmRrZXlQb2ludENvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBFdmVudHMgPSBFdmVudHM7XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIEFuIGFwcCBpbmZvcm1hdGlvbiBjbGFzcyB1c2VkIHRvIHN0b3JlIGJhc2ljIGluZm9ybWF0aW9uIGFib3V0IGFwcHMgd2l0aCB0aGUgSE1TIENvcmUgTUwgSW1hZ2UgU0RLIGludGVncmF0ZWQgYW5kIGNvbXBsZXRlIHRoZSBpbml0aWFsaXphdGlvbiBvZiBNTCBJbWFnZSBLaXQuIFdoZW4gdXNpbmcgY2xvdWQgc2VydmljZXMgb2YgdGhlIE1MIEltYWdlIEtpdCwgeW91IG5lZWQgdG8gc2V0IHRoZSBhcGlLZXkgb2YgeW91ciBhcHAuXG4gICAgICogQHBhcmFtICB7YXBwU2V0dGluZ1JlcX0gYXBwU2V0dGluZ1JlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgYXBwU2V0dGluZyhhcHBTZXR0aW5nUmVxOiBhcHBTZXR0aW5nUmVxKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIEl0IHNldHMgQXBpIEtleSBvciBhY2Nlc3MgdG9rZW4gZm9yIGFwcGxpY2F0aW9uLlxuICAgICAqIEBwYXJhbSAge2NvbmZpZ1JlcX0gcGFyYW1zIFJlcHJlc2VudHMgeW91ciBBUElfS0VZLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHNlcnZpY2VJbml0aWFsaXplcihwYXJhbXM6IGNvbmZpZ1JlcSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBBZGp1c3RzIHRoZSBmb2NhbCBsZW5ndGggb2YgdGhlIGNhbWVyYSBiYXNlZCBvbiB0aGUgc2NhbGluZyBjb2VmZmljaWVudCAoZGlnaXRhbCB6b29tKS5cbiAgICAgKiBAcGFyYW0gIHtkb1pvb21SZXF9IGRvWm9vbVJlcSBSZXBlcmVzZW50cyB0aGUgbmVjZXNzYXJ5IHBhcmFtZXRlcnMuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZG9ab29tKGRvWm9vbVJlcTogZG9ab29tUmVxKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIE1vbml0b3JzIHBob3RvZ3JhcGhpbmcuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgcGhvdG9ncmFwaCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogQ2xvc2UgbGVucyBlbmdpbmUuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZGVzdHJveSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogT2J0YWlucyB0aGUgc2l6ZSBvZiB0aGUgcHJldmlldyBpbWFnZSBvZiBhIGNhbWVyYS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBnZXREaXNwbGF5RGltZW5zaW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBPYnRhaW5zIHRoZSBzZWxlY3RlZCBjYW1lcmEgdHlwZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBnZXRMZW5zVHlwZSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIHNlcnZpY2UgcmVjb2duaXplIHRoZSBpbWFnZSBmcm9tIHRoZSBwaWN0dXJlIGFuZCByZXR1cm4gd2hhdCB0aGUgcGljdHVyZSBjYW4gYmUgd2l0aCB0aGUgcGVyY2VudGFnZXMuIFVzZSBNTCBMaWJyYXJpZXMuXG4gICAgICogQHBhcmFtICB7b3duQ3VzdG9tTW9kZWxSZXEgfCBkb3dubG9hZE1vZGVsUmVxfSBvd25DdXN0b21Nb2RlbFJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIGN1c3RvbSBtb2RlbCBhbmFseXNlci5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBjdXN0b21Nb2RlbEFuYWx5c2VyKFxuICAgICAgICBvd25DdXN0b21Nb2RlbFJlcTogb3duQ3VzdG9tTW9kZWxSZXEgfCBkb3dubG9hZE1vZGVsUmVxXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIE9idGFpbnMgRnJhbWUuXG4gICAgICogQHBhcmFtICB7bWxGcmFtZVJlcX0gbWxGcmFtZVJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgbWxGcmFtZShtbEZyYW1lUmVxOiBtbEZyYW1lUmVxKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFNldHMgYSBkYXRhIHByb2Nlc3NpbmcgbG9jYXRpb24gd2hlbiB5b3UgY2hvb3NlIHRvIG1hbnVhbGx5IG1hbmFnZSBhbmQgc3BlY2lmeSBzdWNoIGEgbG9jYXRpb24uXG4gICAgICogQHBhcmFtICB7cmVnaW9ufSByZWdpb24gUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyLlxuICAgICAqICAgICAgICAgKiBSRUdJT05fRFJfVU5LTk9XTiA9IDEwMDEsXG4gICAgICAgICAgICAgICAqIFJFR0lPTl9EUl9DSElOQSA9IDEwMDIsXG4gICAgICAgICAgICAgICAqIFJFR0lPTl9EUl9SVVNTSUEgPSAxMDA1LFxuICAgICAgICAgICAgICAgKiBSRUdJT05fRFJfR0VSTUFOID0gMTAwNixcbiAgICAgICAgICAgICAgICogUkVHSU9OX0RSX1NJTkdBUE9SRSA9IDEwMDcgXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgc2V0VXNlclJlZ2lvbihyZWdpb246IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBPYnRhaW5zIHRoZSBjb3VudHJ5L3JlZ2lvbiBjb2RlIG9mIHRoZSBkYXRhIHByb2Nlc3NpbmcgbG9jYXRpb24geW91IGhhdmUgc3BlY2lmaWVkIHdoZW4geW91IGNob29zZSB0byBtYW51YWxseSBtYW5hZ2UgYW5kIHNwZWNpZnkgc3VjaCBhIGxvY2F0aW9uLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8U3RyaW5nPlxuICAgICAqL1xuICAgIGdldENvdW50cnlDb2RlKCk6IFByb21pc2U8U3RyaW5nPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgc2VydmljZSBlbmFibGUgbG9nZ2VyIHNlcnZpY2UuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIHNlcnZpY2UgZGlzYWJsZSBsb2dnZXIgc2VydmljZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBkaXNhYmxlTG9nZ2VyKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIHNlcnZpY2UgY2FuIGludGVncmF0ZSB3aXRoIG11bHRpcGxlIHR5cGVzIG9mIGFuYWx5emVycyB0byBkZXRlY3QgZGlmZmVyZW50IHR5cGVzIG9mIG9iamVjdHMgYXQgdGhlIHNhbWUgdGltZS4gRm9yIGV4YW1wbGUsIGl0IGNhbiBzaW11bHRhbmVvdXNseSByZWNvZ25pemUgZmFjZXMgYW5kIHRleHRzIGluIGFuIGltYWdlLlxuICAgICAqIEBwYXJhbSAge2NvbXBvc2l0ZUFuYWx5c2VyUmVxfSBvd25DdXN0b21Nb2RlbFJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIGNvbXBvc2l0ZSBhbmFseXNlci5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBpbml0aWFsaXplQ29tcG9zaXRlQW5hbHl6ZXIoXG4gICAgICAgIGNvbXBvc2l0ZUFuYWx5c2VyUmVxOiBjb21wb3NpdGVBbmFseXNlclJlcVxuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBPYnRhaW5zIGNvbXBvc2l0ZSBhbmFseXNlciBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBpbmZvQ29tcG9zaXRlQW5hbHlzZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIENsb3NlIGNvbXBvc2l0ZSBhbmFseXNlci5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XG4gICAgICovXG4gICAgY2xvc2VDb21wb3NpdGVBbmFseXNlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIE9idGFpbiBwaWN0dXJlLlxuICAgICAqIEBwYXJhbSAge3JlcX0gcmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3Igb2J0YWluIHBpY3R1cmUuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgb2J0YWluUGljdHVyZShcbiAgICAgICAgcmVxOiBjb21wb3NpdGVBbmFseXNlclJlcVxuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6IFwiSE1TTUxJbWFnZVwiLFxuICAgIHBsdWdpbjogXCJjb3Jkb3ZhLXBsdWdpbi1obXMtbWxpbWFnZVwiLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgICBwbHVnaW5SZWY6IFwiSE1TTUxJbWFnZVwiLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gICAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCJdLCAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TTUxJbWFnZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEltYWdlQ2xhc3NpZmljYXRpb25Db25maWcgPSBNTEltYWdlQ2xhc3NpZmljYXRpb25Db25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxJbWFnZVNlZ21lbnRhdGlvblNldHRpbmcgPSBNTEltYWdlU2VnbWVudGF0aW9uU2V0dGluZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEltYWdlU2VnbWVudGF0aW9uU2NlbmUgPSBNTEltYWdlU2VnbWVudGF0aW9uU2NlbmU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxSZW1vdGVMYW5kbWFya1NldHRpbmcgPSBNTFJlbW90ZUxhbmRtYXJrU2V0dGluZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBJbWdTdXBlclJlc29sdXRpb25Db25maWcgPSBJbWdTdXBlclJlc29sdXRpb25Db25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTWxPYmplY3RBbmFseXNlckNvbmZpZyA9IE1sT2JqZWN0QW5hbHlzZXJDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgRG93bmxvYWRTdHJhdGVneUN1c3RvbSA9IERvd25sb2FkU3RyYXRlZ3lDdXN0b207XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgQ29sb3JzID0gQ29sb3JzO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIFJlY3RTdHlsZSA9IFJlY3RTdHlsZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEZsYXNoTW9kZSA9IE1MRmxhc2hNb2RlO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MTGVuc1R5cGUgPSBNTExlbnNUeXBlO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MQW5hbHl6ZXJOYW1lID0gTUxBbmFseXplck5hbWU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxDb21wb3NpdGVBbmFseXplck5hbWUgPSBNTENvbXBvc2l0ZUFuYWx5emVyTmFtZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEZyYW1lID0gTUxGcmFtZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFByb2R1Y3RDb25maWcgPSBNTFByb2R1Y3RDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgc3luY01vZGUgPSBzeW5jTW9kZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEZhY2VTZXR0aW5nID0gTUxGYWNlU2V0dGluZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBIYW5ka2V5UG9pbnRDb25maWcgPSBIYW5ka2V5UG9pbnRDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgRXZlbnRzID0gRXZlbnRzO1xuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCByZXByZXNlbnRzIHRoZSBpbWFnZSBjbGFzc2lmaWNhdGlvbiBTREsuXG4gICAgICogQHBhcmFtICB7bG9jYWxJbWFnZUNsYXNzaWZpY2F0aW9uUmVxfHJlbW90ZUltYWdlQ2xhc3NpZmljYXRpb25SZXF9IGltYWdlQ2xhc3NpZmljYXRpb25JbnB1dCBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIGNsYXNzaWZ5IG9iamVjdHMuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxJbWFnZUNsYXNzaWZpY2F0aW9uQW5hbHlzZXI+XG4gICAgICovXG4gICAgaW1hZ2VDbGFzc2lmaWNhdGlvbkFuYWx5c2VyKFxuICAgICAgICBpbWFnZUNsYXNzaWZpY2F0aW9uSW5wdXQ6XG4gICAgICAgICAgICB8IGxvY2FsSW1hZ2VDbGFzc2lmaWNhdGlvblJlcVxuICAgICAgICAgICAgfCByZW1vdGVJbWFnZUNsYXNzaWZpY2F0aW9uUmVxXG4gICAgKTogUHJvbWlzZTxNTEltYWdlQ2xhc3NpZmljYXRpb24+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3AgaW1hZ2UgY2xhc3NpZmljYXRpb24gYW5hbHlzZXIuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XG4gICAgICovXG4gICAgc3RvcEltYWdlQ2xhc3NpZmljYXRpb25BbmFseXNlcigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhlIGltYWdlIHNlZ21lbnRhdGlvbiBzZXJ2aWNlIHNlZ21lbnRzIHNhbWUgZWxlbWVudHMgKHN1Y2ggYXMgaHVtYW4gYm9keSwgcGxhbnQsIGFuZCBza3kpIGZyb20gYW4gaW1hZ2UuIFRoZSBlbGVtZW50cyBzdXBwb3J0ZWQgaW5jbHVkZSBodW1hbiBib2R5LCBza3ksIHBsYW50LCBmb29kIGFuZCBvdGhlcnMuXG4gICAgICogQHBhcmFtICB7aW1nU2VnbWVudGF0aW9uUmVxfSBpbWdTZWdtZW50YXRpb25SZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBpbWFnZSBzZWdtZW50YXRpb24uXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxTZWdtZW50YXRpb25BbmFseXNlcj5cbiAgICAgKi9cbiAgICBpbWdTZWdtZW50YXRpb24oXG4gICAgICAgIGltZ1NlZ21lbnRhdGlvblJlcTogaW1nU2VnbWVudGF0aW9uUmVxXG4gICAgKTogUHJvbWlzZTxNTEltYWdlU2VnbWVudGF0aW9uPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wIGltYWdlIHNlZ21lbnRhdGlvbiBzZXJ2aWNlLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHN0b3BJbWdTZWdtZW50YXRpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoZSBsYW5kbWFyayByZWNvZ25pdGlvbiBzZXJ2aWNlIGVuYWJsZXMgeW91IHRvIG9idGFpbiB0aGUgbGFuZG1hcmsgbmFtZSwgbGFuZG1hcmsgbG9uZ2l0dWRlIGFuZCBsYXRpdHVkZSwgYW5kIGNvbmZpZGVuY2Ugb2YgdGhlIGlucHV0IGltYWdlLlxuICAgICAqIEBwYXJhbSAge2ltZ0xhbmRNYXJrUmVxfSBpbWdMYW5kTWFya1JlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIGltYWdlIGxhbmRtYXJrIGFuYWx5c2VyLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8SW1hZ2VMYW5kbWFya0FuYWx5c2VyPlxuICAgICAqL1xuICAgIGltZ0xhbmRNYXJrQW5hbHlzZXIoXG4gICAgICAgIGltZ0xhbmRNYXJrUmVxOiBpbWdMYW5kTWFya1JlcVxuICAgICk6IFByb21pc2U8TUxSZW1vdGVMYW5kbWFyaz4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCBpbWFnZSBsYW5kbWFyayBhbmFseXNlciBzZXJ2aWNlLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGltZ0xhbmRNYXJrQW5hbHlzZXJTdG9wKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGUgb2JqZWN0IGRldGVjdGlvbiBzZXJ2aWNlIGNhbiBkZXRlY3QgYW5kIHRyYWNrIG11bHRpcGxlIG9iamVjdHMgaW4gYW4gaW1hZ2UuXG4gICAgICogQHBhcmFtICB7b2JqZWN0UmVxfSBvYmplY3RSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBvYmplY3QgZGV0ZWN0aW9uLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8SW1hZ2VPYmplY3RBbmFseXNlcj5cbiAgICAgKi9cbiAgICBvYmplY3RBbmFseXNlcihvYmplY3RSZXE6IG9iamVjdFJlcSk6IFByb21pc2U8TUxPYmplY3Q+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoZSBzY2VuZSBkZXRlY3Rpb24gc2VydmljZSBjYW4gY2xhc3NpZnkgdGhlIHNjZW5hcmlvIGNvbnRlbnQgb2YgaW1hZ2VzIGFuZCBhZGQgbGFiZWxzLCBzdWNoIGFzIG91dGRvb3Igc2NlbmVyeSwgaW5kb29yIHBsYWNlcywgYW5kIGJ1aWxkaW5ncywgdG8gaGVscCB1bmRlcnN0YW5kIHRoZSBpbWFnZSBjb250ZW50LlxuICAgICAqICAgQHBhcmFtICB7c3RpbGxTY2VuZVJlcX0gc3RpbGxTY2VuZVJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIFNjZW5lIGFuYWx5c2VyLlxuICAgICAqICBAcmV0dXJucyBQcm9taXNlIDxhbnk+XG4gICAgICovXG4gICAgc3RpbGxTY2VuZUFuYWx5c2VyKFxuICAgICAgICBzdGlsbFNjZW5lUmVxOiBzdGlsbFNjZW5lUmVxXG4gICAgKTogUHJvbWlzZTxNTFNjZW5lRGV0ZWN0aW9uUmVzdWx0PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgIFRoaXMgc2VydmljZSBjYW4gYXV0b21hdGljYWxseSBpZGVudGlmeSB0aGUgbG9jYXRpb24gb2YgYSBkb2N1bWVudCBpbiBhbiBpbWFnZSBhbmQgYWRqdXN0IHRoZSBzaG9vdGluZyBhbmdsZSB0byB0aGUgYW5nbGUgZmFjaW5nIHRoZSBkb2N1bWVudCwgZXZlbiBpZiB0aGUgZG9jdW1lbnQgaXMgdGlsdGVkLlxuICAgKiBAcGFyYW0gIHtkb2N1bWVudFNrZXdDb3JyZWN0aW9uUmVxfSBkb2N1bWVudFNrZXdDb3JyZWN0aW9uUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgZG9jdW1lbnQgc2tldyBjb3JyZWN0aW9uLlxuICAgKiBAcmV0dXJucyBQcm9taXNlPERvY3VtZW50U2tld0FuYWx5c2VyPlxuICAgKi9cbiAgICBkb2N1bWVudFNrZXdDb3JyZWN0aW9uQW5hbHlzZXIoXG4gICAgICAgIGRvY3VtZW50U2tld0NvcnJlY3Rpb25SZXE6IGRvY3VtZW50U2tld0NvcnJlY3Rpb25SZXFcbiAgICApOiBQcm9taXNlPE1MRG9jdW1lbnRTa2V3RGV0ZWN0UmVzdWx0PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIHNlcnZpY2UgY2FuIHpvb20gaW4gYW4gaW1hZ2UgdGhhdCBjb250YWlucyB0ZXh0IGFuZCBzaWduaWZpY2FudGx5IGltcHJvdmUgdGhlIGRlZmluaXRpb24gb2YgdGV4dCBpbiB0aGUgaW1hZ2UuXG4gICAgICogQHBhcmFtICB7dGV4dEltYWdlU3VwZXJSZXNvbHV0aW9uUmVxfSB0ZXh0SW1hZ2VTdXBlclJlc29sdXRpb25SZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBUZXh0IEltYWdlIFN1cGVyIFJlc29sdXRpb24uXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgdGV4dEltYWdlU3VwZXJSZXNvbHV0aW9uKFxuICAgICAgICB0ZXh0SW1hZ2VTdXBlclJlc29sdXRpb25SZXE6IHRleHRJbWFnZVN1cGVyUmVzb2x1dGlvblJlcVxuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIHNlcnZpY2UgcHJvdmlkZXMgdGhlIDF4IHN1cGVyLXJlc29sdXRpb24gY2FwYWJpbGl0aWVzLiAxeCBzdXBlci1yZXNvbHV0aW9uIHJlbW92ZXMgdGhlIGNvbXByZXNzaW9uIG5vaXNlLlxuICAgICAqIEBwYXJhbSAge2ltYWdlU3VwZXJSZXNvbHV0aW9uUmVxfSBpbWFnZVN1cGVyUmVzb2x1dGlvblJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIEltYWdlIFN1cGVyIFJlc29sdXRpb24uXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgaW1hZ2VTdXBlclJlc29sdXRpb24oXG4gICAgICAgIGltYWdlU3VwZXJSZXNvbHV0aW9uUmVxOiBpbWFnZVN1cGVyUmVzb2x1dGlvblJlcVxuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBSZXByZXNlbnRzIHRoZSBpbWFnZS1iYXNlZCBwcm9kdWN0IGRldGVjdGlvbiBBUEkgb2YgSFVBV0VJIE1MIEtpdC5cbiAgICAgKiBAcGFyYW0gIHtwcm9kdWN0UmVxfSBwcm9kdWN0UmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZC5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBwcm9kdWN0VmlzaW9uQW5hbHlzZXIocHJvZHVjdFJlcTogcHJvZHVjdFJlcSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wIG9iamVjdCBhbmFseXNlciBzZXJ2aWNlLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIG9iamVjdEFuYWx5c2VyU3RvcCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCBwcm9kdWN0IGFuYWx5c2VyIHNlcnZpY2UuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgcHJvZHVjdEFuYWx5c2VyU3RvcCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCBkb2N1bWVudCBza2V3IGFuYWx5c2VyIHNlcnZpY2UuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZG9jU2tld0FuYWx5c2VyU3RvcCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCBUSVNSIGFuYWx5c2VyIHNlcnZpY2UuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgVElTUkFuYWx5c2VyU3RvcCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCBJU1IgYW5hbHlzZXIgc2VydmljZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBJU1JBbmFseXNlclN0b3AoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3Agc2NlbmUgYW5hbHlzZXIgc2VydmljZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBzdGlsbFNjZW5lQW5hbHlzZXJTdG9wKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIGltYWdlIGNsYXNzaWZpY2F0aW9uIHNldHRpbmdzLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGdldEltYWdlQ2xhc3NpZmljYXRpb25BbmFseXNlclNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqICBUaGlzIG1ldGhvZCByZXR1cm5zIElTUiBzZXR0aW5ncy5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBnZXRJU1JTZXR0aW5nKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiAgVGhpcyBtZXRob2QgcmV0dXJucyBzZWdtZW50YXRpb24gc2V0dGluZ3MuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZ2V0U2VnbWVudGF0aW9uU2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogIFRoaXMgbWV0aG9kIHJldHVybnMgbGFuZG1hcmsgc2V0dGluZ3MuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZ2V0TGFuZG1hcmtTZXR0aW5nKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiAgVGhpcyBtZXRob2QgcmV0dXJucyBvYmplY3Qgc2V0dGluZ3MuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZ2V0T2JqZWN0U2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTUxMaXZlIHtcbiAgICBwcml2YXRlIGFyU2NlbmU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBzdHJpbmcsIGRpdklkOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHNjZW5lID09PSBcImxpdmVFbmdpbmVBbmFseXNlclwiKSB7XG4gICAgICAgICAgICB0aGlzLmFyU2NlbmUgPSBuZXcgKEhNU01MSW1hZ2VQbHVnaW4uZ2V0UGx1Z2luKCkubGl2ZUVuZ2luZUFuYWx5c2VyKShkaXZJZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNjZW5lID09PSBcImxpdmVDb21wb3NpdGVBbmFseXNlclwiKSB7XG4gICAgICAgICAgICB0aGlzLmFyU2NlbmUgPSBuZXcgKEhNU01MSW1hZ2VQbHVnaW4uZ2V0UGx1Z2luKCkubGl2ZUNvbXBvc2l0ZUFuYWx5c2VyKShkaXZJZCk7XG4gICAgICAgIH0gICAgICAgXG4gICAgfVxuXG4gICAgb24oZXZlbnROYW1lOiBFdmVudHMsIGNhbGw6ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmFyU2NlbmUub24oZXZlbnROYW1lLCBjYWxsKTtcbiAgICB9XG4gICAgc3RhcnRBUlNjZW5lKGNvbmZpZz86IE1MY29uZmlnLCBib3VuZHM/OiBNTEJvdW5kcyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hclNjZW5lLnN0YXJ0QVJTY2VuZShjb25maWcsIGJvdW5kcyk7XG4gICAgfVxuICAgIGRlc3Ryb3koKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmFyU2NlbmUuZGVzdHJveSgpO1xuICAgIH1cbiAgICBzZXRDb25maWcoY29uZmlnOiBNTGNvbmZpZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hclNjZW5lLnNldENvbmZpZyhjb25maWcpO1xuICAgIH1cbiAgICBzY3JvbGwoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmFyU2NlbmUuc2Nyb2xsKCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgbGl2ZUVuZ2luZUFuYWx5c2VyIGV4dGVuZHMgTUxMaXZlIHtcbiAgICBjb25zdHJ1Y3RvcihkaXZJZDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKFwibGl2ZUVuZ2luZUFuYWx5c2VyXCIsIGRpdklkKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBsaXZlQ29tcG9zaXRlQW5hbHlzZXIgZXh0ZW5kcyBNTExpdmUge1xuICAgIGNvbnN0cnVjdG9yKGRpdklkOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoXCJsaXZlQ29tcG9zaXRlQW5hbHlzZXJcIiwgZGl2SWQpO1xuICAgIH1cbn1cblxuLy8gQVBJIEtFWVxuXG5leHBvcnQgaW50ZXJmYWNlIGNvbmZpZ1JlcSB7XG4gICAgYXBpS2V5OiBzdHJpbmc7XG4gICAgYWNjZXNzVG9rZW46IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBhcHBTZXR0aW5nUmVxIHtcbiAgICBhcGlLZXk/OiBzdHJpbmcgfCBudWxsO1xuICAgIGFwcGxpY2F0aW9uSWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIGNlcnRGaW5nZXJwcmludD86IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTUxCb3VuZHMge1xuICAgIG1hcmdpblRvcD86IG51bWJlcjtcbiAgICBtYXJnaW5Cb3R0b20/OiBudW1iZXI7XG4gICAgbWFyZ2luTGVmdD86IG51bWJlcjtcbiAgICBtYXJnaW5SaWdodD86IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTUxjb25maWcge1xuICAgIGxlbnNFbmdpbmVSZXE6IGxlbnNFbmdpbmVSZXE7XG59XG5leHBvcnQgaW50ZXJmYWNlIGxlbnNFbmdpbmVSZXEge1xuICAgIGFuYWx5emVyTmFtZTogTUxBbmFseXplck5hbWU7XG4gICAgbGVuc0VuZ2luZVNldHRpbmc/OiBNTExlbnNFbmdpbmVTZXR0aW5nO1xuICAgIGdyYXBoaWNTZXR0aW5nPzpcbiAgICAgICAgfCBzY2VuZVNldHRpbmdzXG4gICAgICAgIHwgT2JqZWN0R3JhcGhpY1NldHRpbmdcbiAgICAgICAgfCBudWxsO1xuICAgIGFuYWx5emVyU2V0dGluZz86XG4gICAgICAgIHwgbWxJbWFnZVNlZ21lbnRhdGlvblNldHRpbmdcbiAgICAgICAgfCBtbE9iamVjdEFuYWx5c2VyU2V0dGluZ1xuICAgICAgICB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIE1MY29uZmlnQ29tcG9zaXRlIHtcbiAgICBsZW5zRW5naW5lUmVxOiBjb21wb3NpdGVBbmFseXNlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgY29tcG9zaXRlQW5hbHlzZXIge1xuICAgIGFuYWx5emVyTmFtZXM/OiBBcnJheTxNTENvbXBvc2l0ZUFuYWx5emVyTmFtZT47XG4gICAgbGVuc0VuZ2luZVNldHRpbmc/OiBNTExlbnNFbmdpbmVTZXR0aW5nO1xuICAgIGdyYXBoaWNTZXR0aW5nPzpcbiAgICAgICAgfCBDb21wb3NpdGVGYWNlR3JhcGhpY1NldHRpbmdcbiAgICAgICAgfCBDb21wb3NpdGVTY2VuZVNldHRpbmdzXG4gICAgICAgIHwgQ29tcG9zaXRlSGFuZGtleUdyYXBoaWNTZXR0aW5nXG4gICAgICAgIHwgQ29tcG9zaXRlU2tlbGV0b25HcmFwaGljU2V0dGluZ1xuICAgICAgICB8IENvbXBvc2l0ZU9iamVjdEdyYXBoaWNTZXR0aW5nXG4gICAgICAgIHwgbnVsbDtcbiAgICBhbmFseXplclNldHRpbmc/OlxuICAgICAgICB8IENvbXBvc2l0ZUZhY2VBbmFseXplclNldHRpbmdcbiAgICAgICAgfCBDb21wb3NpdGVGYWNlVmVyaWZpY2F0aW9uQW5hbHl6ZXJTZXR0aW5nXG4gICAgICAgIHwgQ29tcG9zaXRlSGFuZEtleXBvaW50U2V0dGluZ1xuICAgICAgICB8IENvbXBvc2l0ZUltYWdlU2VnbWVudGF0aW9uU2V0dGluZ1xuICAgICAgICB8IENvbXBvc2l0ZU9iamVjdEFuYWx5c2VyU2V0dGluZ1xuICAgICAgICB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9zaXRlSGFuZEtleXBvaW50U2V0dGluZyB7XG4gICAgc2NlbmVUeXBlPzogSGFuZGtleVBvaW50Q29uZmlnIHwgbnVsbDtcbiAgICBtYXhIYW5kUmVzdWx0cz86IG51bWJlciB8IG51bGw7XG59XG5leHBvcnQgZW51bSBIYW5ka2V5UG9pbnRDb25maWcge1xuICAgIFRZUEVfQUxMID0gMCxcbiAgICBUWVBFX0tFWVBPSU5UX09OTFkgPSAxLFxuICAgIFRZUEVfUkVDVF9PTkxZID0gMixcbiAgICBNQVhfSEFORFNfTlVNID0gMTAsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9zaXRlRmFjZVZlcmlmaWNhdGlvbkFuYWx5emVyU2V0dGluZyB7XG4gICAgbWF4RmFjZURldGN0ZWQ6IG51bWJlciB8IG51bGw7XG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBDb21wb3NpdGVGYWNlR3JhcGhpY1NldHRpbmcge1xuICAgIGZhY2VQb3NpdGlvblBhaW50U2V0dGluZz86IEZhY2VQb3NpdGlvblBhaW50U2V0dGluZyB8IG51bGw7XG4gICAgdGV4dFBhaW50U2V0dGluZz86IFRleHRQYWludFNldHRpbmdGYWNlIHwgbnVsbDtcbiAgICBmYWNlRmVhdHVyZVBhaW50VGV4dFNldHRpbmc/OiBGYWNlRmVhdHVyZVBhaW50VGV4dFNldHRpbmcgfCBudWxsO1xuICAgIGtleXBvaW50UGFpbnRTZXR0aW5nPzogS2V5cG9pbnRQYWludFNldHRpbmcgfCBudWxsO1xuICAgIGJveFBhaW50U2V0dGluZz86IEJveFBhaW50U2V0dGluZ0ZhY2UgfCBudWxsO1xuICAgIGZhY2VQYWludFNldHRpbmc/OiBGYWNlUGFpbnRTZXR0aW5nIHwgbnVsbDtcbiAgICBleWVQYWludFNldHRpbmc/OiBFeWVQYWludFNldHRpbmcgfCBudWxsO1xuICAgIGV5ZWJyb3dQYWludFNldHRpbmc/OiBFeWVicm93UGFpbnRTZXR0aW5nIHwgbnVsbDtcbiAgICBub3NlUGFpbnRTZXR0aW5nPzogTm9zZVBhaW50U2V0dGluZyB8IG51bGw7XG4gICAgbm9zZUJhc2VQYWludFNldHRpbmc/OiBOb3NlQmFzZVBhaW50U2V0dGluZyB8IG51bGw7XG4gICAgbGlwUGFpbnRTZXR0aW5nPzogTGlwUGFpbnRTZXR0aW5nIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGlwUGFpbnRTZXR0aW5nIHtcbiAgICBjb2xvcj86IFN0cmluZyB8IENvbG9ycyB8IG51bGw7XG4gICAgc3R5bGU/OiBSZWN0U3R5bGUgfCBudWxsO1xuICAgIHN0cm9rZVdpZHRoOiBOdW1iZXIgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBOb3NlUGFpbnRTZXR0aW5nIHtcbiAgICBjb2xvcj86IFN0cmluZyB8IENvbG9ycyB8IG51bGw7XG4gICAgc3R5bGU/OiBSZWN0U3R5bGUgfCBudWxsO1xuICAgIHN0cm9rZVdpZHRoPzogTnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBOb3NlQmFzZVBhaW50U2V0dGluZyB7XG4gICAgY29sb3I/OiBTdHJpbmcgfCBDb2xvcnMgfCBudWxsO1xuICAgIHN0eWxlPzogUmVjdFN0eWxlIHwgbnVsbDtcbiAgICBzdHJva2VXaWR0aD86IE51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRXllYnJvd1BhaW50U2V0dGluZyB7XG4gICAgY29sb3I/OiBTdHJpbmcgfCBDb2xvcnMgfCBudWxsO1xuICAgIHN0eWxlPzogUmVjdFN0eWxlO1xuICAgIHN0cm9rZVdpZHRoPzogTnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBFeWVQYWludFNldHRpbmcge1xuICAgIGNvbG9yPzogU3RyaW5nIHwgQ29sb3JzO1xuICAgIHN0eWxlPzogUmVjdFN0eWxlIHwgQ29sb3JzO1xuICAgIHN0cm9rZVdpZHRoOiBOdW1iZXIgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBGYWNlUGFpbnRTZXR0aW5nIHtcbiAgICBjb2xvcj86IFN0cmluZyB8IENvbG9ycyB8IG51bGw7XG4gICAgc3R5bGU/OiBSZWN0U3R5bGUgfCBudWxsO1xuICAgIHN0cm9rZVdpZHRoOiBOdW1iZXIgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBCb3hQYWludFNldHRpbmdGYWNlIHtcbiAgICBjb2xvcj86IFN0cmluZyB8IENvbG9ycyB8IG51bGw7XG4gICAgc3R5bGU/OiBSZWN0U3R5bGUgfCBudWxsO1xuICAgIHN0cm9rZVdpZHRoPzogTnVtYmVyIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2V5cG9pbnRQYWludFNldHRpbmcge1xuICAgIGNvbG9yPzogQ29sb3JzIHwgQ29sb3JzIHwgbnVsbDtcbiAgICBzdHlsZT86IFJlY3RTdHlsZSB8IG51bGw7XG4gICAgdGV4dFNpemU6IE51bWJlciB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmFjZUZlYXR1cmVQYWludFRleHRTZXR0aW5nIHtcbiAgICBjb2xvcj86IENvbG9ycyB8IG51bGw7XG4gICAgdGV4dFNpemU6IE51bWJlciB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIEZhY2VQb3NpdGlvblBhaW50U2V0dGluZyB7XG4gICAgY29sb3I/OiBDb2xvcnMgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBUZXh0UGFpbnRTZXR0aW5nRmFjZSB7XG4gICAgY29sb3I/OiBDb2xvcnMgfCBudWxsO1xuICAgIHRleHRTaXplPzogTnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wb3NpdGVIYW5ka2V5R3JhcGhpY1NldHRpbmcge1xuICAgIGlkUGFpbnRuZXdTZXR0aW5nPzogSWRQYWludG5ld1NldHRpbmcgfCBudWxsO1xuICAgIHJlY3RQYWludFNldHRpbmc/OiBSZWN0UGFpbnRTZXR0aW5nIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSWRQYWludG5ld1NldHRpbmcge1xuICAgIGNvbG9yPzogQ29sb3JzIHwgbnVsbDtcbiAgICB0ZXh0U2l6ZT86IE51bWJlciB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIFJlY3RQYWludFNldHRpbmcge1xuICAgIGNvbG9yPzogQ29sb3JzIHwgbnVsbDtcbiAgICBzdHlsZT86IFJlY3RTdHlsZSB8IG51bGw7XG4gICAgYm94U3Ryb2tlV2lkdGg/OiBOdW1iZXIgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvc2l0ZVNrZWxldG9uR3JhcGhpY1NldHRpbmcge1xuICAgIGNpcmNsZVBhaW50U2V0dGluZz86IGNpcmNsZVBhaW50U2V0dGluZyB8IG51bGw7XG4gICAgbGluZVBhaW50U2V0dGluZz86IGxpbmVQYWludFNldHRpbmcgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBjaXJjbGVQYWludFNldHRpbmcge1xuICAgIGNvbG9yPzogQ29sb3JzIHwgbnVsbDtcbiAgICBzdHlsZT86IFJlY3RTdHlsZSB8IG51bGw7XG4gICAgYW50aUFsaWFzPzogYm9vbGVhbiB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIGxpbmVQYWludFNldHRpbmcge1xuICAgIGNvbG9yPzogQ29sb3JzIHwgbnVsbDtcbiAgICBzdHlsZT86IFJlY3RTdHlsZSB8IG51bGw7XG4gICAgc3Ryb2tlV2lkdGg/OiBOdW1iZXIgfCBudWxsO1xuICAgIGFudGlBbGlhcz86IFxuICAgIGJvb2xlYW4gfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvc2l0ZUZhY2VBbmFseXplclNldHRpbmcge1xuICAgIGZlYXR1cmVUeXBlPzogTUxGYWNlU2V0dGluZyB8IG51bGw7XG4gICAga2V5UG9pbnRUeXBlPzogTUxGYWNlU2V0dGluZyB8IG51bGw7XG4gICAgbWF4U2l6ZUZhY2VPbmx5PzogYm9vbGVhbiB8IG51bGw7XG4gICAgbWluRmFjZVByb3BvcnRpb24/OiBudW1iZXIgfCBudWxsO1xuICAgIHBlcmZvcm1hbmNlVHlwZT86IE1MRmFjZVNldHRpbmcgfCBudWxsO1xuICAgIHBvc2VEaXNhYmxlZD86IGJvb2xlYW4gfCBudWxsO1xuICAgIHNoYXBlVHlwZT86IE1MRmFjZVNldHRpbmcgfCBudWxsO1xuICAgIHRyYWNpbmdBbGxvd2VkPzogYm9vbGVhbiB8IG51bGw7XG4gICAgdHJhY2luZ01vZGU/OiBudW1iZXIgfCBudWxsO1xufVxuXG5leHBvcnQgZW51bSBNTEZhY2VTZXR0aW5nIHtcbiAgICBNT0RFX1RSQUNJTkdfRkFTVCA9IDEsXG4gICAgTU9ERV9UUkFDSU5HX1JPQlVTVCA9IDIsXG4gICAgVFlQRV9GRUFUVVJFUyA9IDEsXG4gICAgVFlQRV9GRUFUVVJFX0FHRSA9IDI1NixcbiAgICBUWVBFX0ZFQVRVUkVfQkVBUkQgPSAzMixcbiAgICBUWVBFX0ZFQVRVUkVfRU1PVElPTiA9IDQsXG4gICAgVFlQRV9GRUFUVVJFX0VZRUdMQVNTID0gOCxcbiAgICBUWVBFX0ZFQVRVUkVfR0VOREFSID0gMTI4LFxuICAgIFRZUEVfRkVBVFVSRV9IQVQgPSAxNixcbiAgICBUWVBFX0ZFQVRVUkVfT1BFTkNMT1NFRVlFID0gNjQsXG4gICAgVFlQRV9LRVlQT0lOVFMgPSAxLFxuICAgIFRZUEVfUFJFQ0lTSU9OID0gMSxcbiAgICBUWVBFX1NIQVBFUyA9IDIsXG4gICAgVFlQRV9TUEVFRCA9IDIsXG4gICAgVFlQRV9VTlNVUFBPUlRfRkVBVFVSRVMgPSAyLFxuICAgIFRZUEVfVU5TVVBQT1JUX0tFWVBPSU5UUyA9IDAsXG4gICAgVFlQRV9VTlNVUFBPUlRfU0hBUEVTID0gMyxcbiAgICBUWVBFX0JPVFRPTV9PRl9NT1VUSCA9IDEsXG4gICAgVFlQRV9MRUZUX0NIRUVLID0gMixcbiAgICBUWVBFX0xFRlRfRUFSID0gMyxcbiAgICBUWVBFX0xFRlRfU0lERV9PRl9NT1VUSCA9IDYsXG4gICAgVFlQRV9SSUdIVF9DSEVFSyA9IDgsXG4gICAgVFlQRV9SSUdIVF9FQVIgPSA5LFxuICAgIFRZUEVfUklHSFRfU0lERV9PRl9NT1VUSCA9IDEyLFxuICAgIFRZUEVfVElQX09GX0xFRlRfRUFSID0gNCxcbiAgICBUWVBFX1RJUF9PRl9OT1NFID0gNyxcbiAgICBUWVBFX1RJUF9PRl9SSUdIVF9FQVIgPSAxMCxcbiAgICBUWVBFX0FMTCA9IDAsXG4gICAgVFlQRV9CT1RUT01fT0ZfTEVGVF9FWUVCUk9XID0gNCxcbiAgICBUWVBFX0JPVFRPTV9PRl9MT1dFUl9MSVAgPSA4LFxuICAgIFRZUEVfQk9UVE9NX09GX05PU0UgPSAxMixcbiAgICBUWVBFX0JPVFRPTV9PRl9SSUdIVF9FWUVCUk9XID0gNSxcbiAgICBUWVBFX0JPVFRPTV9PRl9VUFBFUl9MSVAgPSAxMCxcbiAgICBUWVBFX0JSSURHRV9PRl9OT1NFID0gMTMsXG4gICAgVFlQRV9GQUNFID0gMSxcbiAgICBUWVBFX1RPUF9PRl9MRUZUX0VZRUJST1cgPSA2LFxuICAgIFRZUEVfVE9QX09GX0xPV0VSX0xJUCA9IDksXG4gICAgVFlQRV9UT1BfT0ZfUklHSFRfRVlFQlJPVyA9IDcsXG4gICAgVFlQRV9UT1BfT0ZfVVBQRVJfTElQID0gMTEsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTUxMZW5zRW5naW5lU2V0dGluZyB7XG4gICAgZnBzPzogbnVtYmVyIHwgbnVsbDtcbiAgICBkaXNwbGF5RGltZW5zaW9uST86IG51bWJlciB8IG51bGw7XG4gICAgZGlzcGxheURpbWVuc2lvbkkxPzogbnVtYmVyIHwgbnVsbDtcbiAgICBsZW5zVHlwZT86IE1MTGVuc1R5cGUgfCBudWxsO1xuICAgIGVuYWJsZUZvY3VzPzogYm9vbGVhbiB8IG51bGw7XG4gICAgZmxhc2hNb2RlPzogTUxGbGFzaE1vZGUgfCBudWxsO1xufVxuZXhwb3J0IGVudW0gTUxGbGFzaE1vZGUge1xuICAgIEFVVE8gPSBcImF1dG9cIixcbiAgICBPTiA9IFwib25cIixcbiAgICBPRkYgPSBcIm9mZlwiLFxufVxuZXhwb3J0IGVudW0gTUxMZW5zVHlwZSB7XG4gICAgQkFDS19MRU5TID0gMCxcbiAgICBGUk9OVF9MRU5TID0gMSxcbn1cblxuZXhwb3J0IGVudW0gTUxTdGlsbENvbXBvc2l0ZXJOYW1lIHtcbiAgICBGQUNFID0gXCJGQUNFXCIsXG4gICAgSEFORCA9IFwiSEFORFwiLFxuICAgIFNLRUxFVE9OID0gXCJTS0VMRVRPTlwiLFxuICAgIFRFWFQgPSBcIlRFWFRcIixcbiAgICBPQkpFQ1QgPSBcIk9CSkVDVFwiLFxuICAgIENMQVNTSUZJQ0FUSU9OID0gXCJDTEFTU0lGSUNBVElPTlwiLFxufVxuZXhwb3J0IGVudW0gTUxBbmFseXplck5hbWUge1xuICAgIExJVkVPQkpFQ1QgPSBcIk9CSkVDVFwiLFxuICAgIExJVkVDTEFTU0lGSUNBVElPTiA9IFwiQ0xBU1NJRklDQVRJT05cIixcbiAgICBMSVZFU0NFTkUgPSBcIlNDRU5FXCIsXG4gICAgTElWRVNFR01FTlRBVElPTiA9IFwiU0VHTUVOVEFUSU9OXCJcbn1cbmV4cG9ydCBlbnVtIE1MQ29tcG9zaXRlQW5hbHl6ZXJOYW1lIHtcbiAgICBMSVZFRkFDRSA9IFwiRkFDRVwiLFxuICAgIExJVkVGQUNFM0QgPSBcIkZBQ0UzRFwiLFxuICAgIExJVkVGQUNFTUFYID0gXCJGQUNFTUFYXCIsXG4gICAgTElWRUhBTkQgPSBcIkhBTkRcIixcbiAgICBMSVZFU0tFTEVUT04gPSBcIlNLRUxFVE9OXCIsXG4gICAgTElWRU9CSkVDVCA9IFwiT0JKRUNUXCIsXG4gICAgTElWRUNMQVNTSUZJQ0FUSU9OID0gXCJDTEFTU0lGSUNBVElPTlwiLFxuICAgIExJVkVTQ0VORSA9IFwiU0NFTkVcIixcbiAgICBMSVZFVEVYVCA9IFwiVEVYVFwiLFxuICAgIExJVkVHRVNUVVJFID0gXCJHRVNUVVJFXCIsXG59XG5leHBvcnQgaW50ZXJmYWNlIGRvWm9vbVJlcSB7XG4gICAgc2NhbGU/OiBudW1iZXIgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBtbEZyYW1lUmVxIHtcbiAgICBhY3Rpb25OYW1lOiBNTEZyYW1lO1xuICAgIGZpbGVQYXRoOiBhbnk7XG59XG5leHBvcnQgZW51bSBNTEZyYW1lIHtcbiAgICBnZXRQcmV2aWV3Qml0bWFwID0gXCJnZXRQcmV2aWV3Qml0bWFwXCIsXG4gICAgcmVhZEJpdG1hcCA9IFwicmVhZEJpdG1hcFwiLFxuICAgIHJvdGF0ZSA9IFwicm90YXRlXCIsXG4gICAgU0NSRUVOX0ZJUlNUX1FVQURSQU5UID0gMCxcbiAgICBTQ1JFRU5fU0VDT05EX1FVQURSQU5UID0gMSxcbiAgICBTQ1JFRU5fVEhJUkRfUVVBRFJBTlQgPSAyLFxuICAgIFNDUkVFTl9GT1VSVEhfUVVBRFJBTlQgPSAzLFxufVxuXG4vLyBDT01QT1NJVEVcblxuZXhwb3J0IGludGVyZmFjZSBjb21wb3NpdGVBbmFseXNlclJlcSB7XG4gICAgY29tcG9zaXRlQW5hbHlzZXJDb25maWc6IGNvbXBvc2l0ZUFuYWx5c2VyQ29uZmlnO1xufVxuZXhwb3J0IGludGVyZmFjZSBjb21wb3NpdGVBbmFseXNlckNvbmZpZyB7XG4gICAgZmlsZVBhdGg6IGFueTtcbiAgICBhbmFseXplck5hbWVzPzogQXJyYXk8TUxTdGlsbENvbXBvc2l0ZXJOYW1lPjtcbiAgICBhbmFseXplclNldHRpbmc/OlxuICAgICAgICB8IENvbXBvc2l0ZUZhY2VBbmFseXplclNldHRpbmdcbiAgICAgICAgfCBDb21wb3NpdGVGYWNlVmVyaWZpY2F0aW9uQW5hbHl6ZXJTZXR0aW5nXG4gICAgICAgIHwgQ29tcG9zaXRlSGFuZEtleXBvaW50U2V0dGluZ1xuICAgICAgICB8IENvbXBvc2l0ZUltYWdlU2VnbWVudGF0aW9uU2V0dGluZ1xuICAgICAgICB8IENvbXBvc2l0ZU9iamVjdEFuYWx5c2VyU2V0dGluZ1xuICAgICAgICB8IG51bGw7XG59ICAgXG5cbi8vQ2xhc3NpZnlcblxuZXhwb3J0IGludGVyZmFjZSBsb2NhbEltYWdlQ2xhc3NpZmljYXRpb25SZXEge1xuICAgIG9jclR5cGU6IE1MSW1hZ2VDbGFzc2lmaWNhdGlvbkNvbmZpZyB8IG51bGw7XG4gICAgYW5hbHlzZU1vZGU/OiBudW1iZXIgfCBudWxsO1xuICAgIGxvY2FsQ2xhc3NpZmljYXRpb25BbmFseXplclNldHRpbmc/OiBMb2NhbENsYXNzaWZpY2F0aW9uQW5hbHl6ZXJTZXR0aW5nIHwgbnVsbDtcbiAgICBmaWxlUGF0aDogYW55O1xufVxuZXhwb3J0IGludGVyZmFjZSBMb2NhbENsYXNzaWZpY2F0aW9uQW5hbHl6ZXJTZXR0aW5nIHtcbiAgICBwb3NzaWJpbGl0eT86IG51bWJlciB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgcmVtb3RlSW1hZ2VDbGFzc2lmaWNhdGlvblJlcSB7XG4gICAgb2NyVHlwZTogTUxJbWFnZUNsYXNzaWZpY2F0aW9uQ29uZmlnO1xuICAgIGFuYWx5c2VNb2RlPzogbnVtYmVyO1xuICAgIHJlbW90ZUNsYXNzaWZpY2F0aW9uQW5hbHl6ZXJTZXR0aW5nPzogUmVtb3RlQ2xhc3NpZmljYXRpb25BbmFseXplclNldHRpbmcgfCBudWxsO1xuICAgIGZpbGVQYXRoOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVtb3RlQ2xhc3NpZmljYXRpb25BbmFseXplclNldHRpbmcge1xuICAgIG1heFJlc3VsdHM/OiBudW1iZXIgfCBudWxsO1xuICAgIHBvc3NpYmlsaXR5PzogbnVtYmVyIHwgbnVsbDtcbiAgICBpc0VuYWJsZUZpbmdlcnByaW50VmVyaWZpY2F0aW9uPzogYm9vbGVhbiB8IG51bGw7XG59XG5cbmV4cG9ydCBlbnVtIE1MSW1hZ2VDbGFzc2lmaWNhdGlvbkNvbmZpZyB7XG4gICAgVFlQRV9MT0NBTCA9IDAsXG4gICAgVFlQRV9SRU1PVEUgPSAxLFxufVxuXG4vL0N1c3RvbSBNb2RlbCBEb3dubG9hZFxuXG5leHBvcnQgaW50ZXJmYWNlIGRvd25sb2FkTW9kZWxSZXEge1xuICAgIGRldGVjdFR5cGU6IDE7XG4gICAgZmlsZVBhdGg6IGFueTtcbiAgICBkb3dubG9hZFN0cmF0ZWd5U2V0dGluZz86IERvd25sb2FkU3RyYXRlZ3lTZXR0aW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEb3dubG9hZFN0cmF0ZWd5U2V0dGluZyB7XG4gICAgaXNDaGFyZ2luZ05lZWQ6IGJvb2xlYW4gfCBudWxsO1xuICAgIGlzV2lmaU5lZWQ6IGJvb2xlYW4gfCBudWxsO1xuICAgIGlzRGV2aWNlSWRsZU5lZWQ6IGJvb2xlYW4gfCBudWxsO1xuICAgIHNldFJlZ2lvbj86IERvd25sb2FkU3RyYXRlZ3lDdXN0b20gfCBudWxsO1xufVxuZXhwb3J0IGVudW0gRG93bmxvYWRTdHJhdGVneUN1c3RvbSB7XG4gICAgUkVHSU9OX0RSX0NISU5BID0gMTAwMixcbiAgICBSRUdJT05fRFJfQUZJTEEgPSAxMDAzLFxuICAgIFJFR0lPTl9EUl9FVVJPUEUgPSAxMDA0LFxuICAgIFJFR0lPTl9EUl9SVVNTSUEgPSAxMDA1LFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIG93bkN1c3RvbU1vZGVsUmVxIHtcbiAgICBkZXRlY3RUeXBlOiBudW1iZXI7XG4gICAgZmlsZVBhdGg6IGFueTtcbiAgICBtb2RlbEZ1bGxOYW1lOiBzdHJpbmcgfCBudWxsO1xuICAgIG1vZGVsTmFtZTogc3RyaW5nIHwgbnVsbDtcbiAgICBsYWJlbEZpbGVOYW1lOiBzdHJpbmcgfCBudWxsO1xuICAgIGJpdG1hcEhlaWdodDogbnVtYmVyIHwgbnVsbDtcbiAgICBiaXRtYXBXaWR0aDogbnVtYmVyIHwgbnVsbDtcbiAgICBvdXRQdXRTaXplOiBudW1iZXIgfCBudWxsO1xufVxuXG4vL0RvY3VtZW50IFNrZXcgQ29ycmVjdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIGRvY3VtZW50U2tld0NvcnJlY3Rpb25SZXEge1xuICAgIGZpbGVQYXRoOiBhbnk7XG4gICAgc3luY01vZGU/OiBzeW5jTW9kZSB8IG51bGw7XG59XG5cbmV4cG9ydCBlbnVtIHN5bmNNb2RlIHtcbiAgICBTWU5DX1RZUEUgPSAxLFxuICAgIEFTWU5DX1RZUEUgPSAwLFxufVxuXG4vL0ltYWdlIFN1cGVyIFJlc29sdXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBpbWFnZVN1cGVyUmVzb2x1dGlvblJlcSB7XG4gICAgZmlsZVBhdGg6IGFueTtcbiAgICBpbWdTdXBlclJlc29sdXRpb25TZXR0aW5nPzogSW1nU3VwZXJSZXNvbHV0aW9uU2V0dGluZyB8IG51bGw7XG4gICAgc3luY1R5cGU/OiBzeW5jTW9kZSB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIEltZ1N1cGVyUmVzb2x1dGlvblNldHRpbmcge1xuICAgIHNjYWxlVHlwZT86IEltZ1N1cGVyUmVzb2x1dGlvbkNvbmZpZztcbn1cbmV4cG9ydCBlbnVtIEltZ1N1cGVyUmVzb2x1dGlvbkNvbmZpZyB7XG4gICAgSVNSX1NDQUxFXzFYID0gMS4wLFxuICAgIElTUl9TQ0FMRV8zWCA9IDMuMCxcbn1cblxuLy9Qcm9kdWN0IFZpc2lvbiBBbmFseXNlclxuXG5leHBvcnQgaW50ZXJmYWNlIHByb2R1Y3RSZXEge1xuICAgIGZpbGVQYXRoPzogYW55IHwgbnVsbDtcbiAgICBkZXRlY3RUeXBlPzogbnVtYmVyO1xuICAgIG1sUHJvZHVjdFNldHRpbmc/OiBtbFByb2R1Y3RTZXR0aW5nIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgbWxQcm9kdWN0U2V0dGluZyB7XG4gICAgbGFyZ2VzdE51bU9mUmV0dXJucz86IG51bWJlciB8IG51bGw7XG4gICAgcHJvZHVjdFNldElkPzogc3RyaW5nIHwgbnVsbDtcbiAgICByZWdpb24/OiBNTFByb2R1Y3RDb25maWcgfCBudWxsO1xufVxuZXhwb3J0IGVudW0gTUxQcm9kdWN0Q29uZmlnIHtcbiAgICBSRUdJT05fRFJfQ0hJTkEgPSAxMDAyLFxuICAgIFJFR0lPTl9EUl9BRklMQSA9IDEwMDMsXG4gICAgUkVHSU9OX0RSX0VVUk9QRSA9IDEwMDQsXG4gICAgUkVHSU9OX0RSX1JVU1NJQSA9IDEwMDUsXG4gICAgUkVHSU9OX0RSX0dFUk1BTiA9IDEwMDYsXG4gICAgUkVHSU9OX0RSX1NJQU5HQVBPUkUgPSAxMDA3LFxufVxuXG4vL1RleHQgSW1hZ2UgU3VwZXIgUmVzb2x1dGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIHRleHRJbWFnZVN1cGVyUmVzb2x1dGlvblJlcSB7XG4gICAgZmlsZVBhdGg6IGFueTtcbiAgICBhbmFseXNlTW9kZT86IHN5bmNNb2RlIHwgbnVsbDtcbn1cblxuLy9JTUFHRSBTVElMTCAmJiBMSVZFU0VHTUVOVEFUSU9OXG5cbmV4cG9ydCBpbnRlcmZhY2UgaW1nU2VnbWVudGF0aW9uUmVxIHtcbiAgICBpbWFnZVNlZ21lbnRhdGlvblNldHRpbmc/OiBtbEltYWdlU2VnbWVudGF0aW9uU2V0dGluZztcbiAgICBmaWxlUGF0aDogYW55O1xuICAgIGFuYWx5c2VNb2RlPzogc3luY01vZGUgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIG1sSW1hZ2VTZWdtZW50YXRpb25TZXR0aW5nIHtcbiAgICBpc0V4YWN0OiBib29sZWFuIHwgbnVsbDtcbiAgICBhbmFseXNlclR5cGU/OiBNTEltYWdlU2VnbWVudGF0aW9uU2V0dGluZyB8IG51bGw7XG4gICAgc2NlbmU/OiBNTEltYWdlU2VnbWVudGF0aW9uU2NlbmU7XG4gICAgaGFzaENvZGU/OiBudW1iZXIgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvc2l0ZUltYWdlU2VnbWVudGF0aW9uU2V0dGluZyB7XG4gICAgaXNFeGFjdDogYm9vbGVhbiB8IG51bGw7XG4gICAgYW5hbHlzZXJUeXBlPzogTUxJbWFnZVNlZ21lbnRhdGlvblNldHRpbmcgfCBudWxsO1xuICAgIHNjZW5lPzogTUxJbWFnZVNlZ21lbnRhdGlvblNjZW5lO1xuICAgIGhhc2hDb2RlPzogbnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGVudW0gTUxJbWFnZVNlZ21lbnRhdGlvblNldHRpbmcge1xuICAgIEJPRFlfU0VHID0gMCxcbiAgICBJTUFHRV9TRUcgPSAxLFxuICAgIEhBSVJfU0VHID0gMixcbn1cblxuZXhwb3J0IGVudW0gTUxJbWFnZVNlZ21lbnRhdGlvbkNsYXNzaWZpY2F0aW9uIHtcbiAgICBUWVBFX0JBQ0tHT1VSTkQgPSAwLFxuICAgIFRZUEVfSFVNQU4gPSAxLFxuICAgIFRZUEVfU0tZID0gMixcbiAgICBUWVBFX0dSQVNTID0gMyxcbiAgICBUWVBFX0ZPT0QgPSA0LFxuICAgIFRZUEVfQ0FUID0gNSxcbiAgICBUWVBFX0JVSUxEID0gNixcbiAgICBUWVBFX0ZMT1dFUiA9IDcsXG4gICAgVFlQRV9XQVRFUiA9IDgsXG4gICAgVFlQRV9TQU5EID0gOSxcbiAgICBUWVBFX01PVU5UQUlOID0gMTAsXG59XG5leHBvcnQgZW51bSBNTEltYWdlU2VnbWVudGF0aW9uU2NlbmUge1xuICAgIEFMTCA9IDAsXG4gICAgTUFTS19PTkxZID0gMSxcbiAgICBGT1JFR1JPVU5EX09OTFkgPSAyLFxuICAgIEdSQVlTQ0FMRV9PTkxZID0gMyxcbn1cblxuLy9MQU5EIE1BUktcblxuZXhwb3J0IGludGVyZmFjZSBpbWdMYW5kTWFya1JlcSB7XG4gICAgbGFuZG1hcmtBbmFseXplclNldHRpbmc/OiBsYW5kbWFya0FuYWx5emVyU2V0dGluZztcbiAgICBmaWxlUGF0aDogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIGxhbmRtYXJrQW5hbHl6ZXJTZXR0aW5nIHtcbiAgICBtYXhSZXN1bHRzPzogbnVtYmVyIHwgbnVsbDtcbiAgICBtb2RlbFR5cGU/OiBNTFJlbW90ZUxhbmRtYXJrU2V0dGluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBlbnVtIE1MUmVtb3RlTGFuZG1hcmtTZXR0aW5nIHtcbiAgICBTVEVBRFlfUEFUVEVSTiA9IDEsXG4gICAgTkVXRVNUX1BBVFRFUk4gPSAyLFxufVxuXG4vLyBTVElMTCAmJiBMSVZFT0JKRUNUICBBTkFMWVNFUlxuXG5leHBvcnQgaW50ZXJmYWNlIG9iamVjdFJlcSB7XG4gICAgZmlsZVBhdGg6IGFueTtcbiAgICBtbE9iamVjdEFuYWx5c2VyU2V0dGluZz86IG1sT2JqZWN0QW5hbHlzZXJTZXR0aW5nO1xuICAgIHN5bmNUeXBlPzogc3luY01vZGUgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RHcmFwaGljU2V0dGluZyB7XG4gICAgYm94UGFpbnRTZXR0aW5nPzogQm94UGFpbnRTZXR0aW5nIHwgbnVsbDtcbiAgICB0ZXh0UGFpbnRTZXR0aW5nPzogVGV4dFBhaW50U2V0dGluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9zaXRlT2JqZWN0R3JhcGhpY1NldHRpbmcge1xuICAgIGJveFBhaW50U2V0dGluZz86IEJveFBhaW50U2V0dGluZyB8IG51bGw7XG4gICAgdGV4dFBhaW50U2V0dGluZz86IFRleHRQYWludFNldHRpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJveFBhaW50U2V0dGluZyB7XG4gICAgY29sb3I/OiBDb2xvcnMgfCBudWxsO1xuICAgIHN0eWxlPzogUmVjdFN0eWxlIHwgbnVsbDtcbiAgICBib3hTdHJva2VXaWR0aD86IE51bWJlciB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIFRleHRQYWludFNldHRpbmcge1xuICAgIGNvbG9yPzogQ29sb3JzIHwgbnVsbDtcbiAgICB0ZXh0U2l6ZT86IE51bWJlciB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIG1sT2JqZWN0QW5hbHlzZXJTZXR0aW5nIHtcbiAgICBpc0NsYXNzaWZpY2F0aW9uQWxsb3dlZD86IGJvb2xlYW4gfCBudWxsO1xuICAgIGlzTXVsdGlwbGVSZXN1bHRzQWxsb3dlZD86IGJvb2xlYW4gfCBudWxsO1xuICAgIGFuYWx5emVyVHlwZTogTWxPYmplY3RBbmFseXNlckNvbmZpZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wb3NpdGVPYmplY3RBbmFseXNlclNldHRpbmcge1xuICAgIGlzQ2xhc3NpZmljYXRpb25BbGxvd2VkPzogYm9vbGVhbiB8IG51bGw7XG4gICAgaXNNdWx0aXBsZVJlc3VsdHNBbGxvd2VkPzogYm9vbGVhbiB8IG51bGw7XG4gICAgYW5hbHl6ZXJUeXBlOiBNbE9iamVjdEFuYWx5c2VyQ29uZmlnO1xufVxuZXhwb3J0IGVudW0gTWxPYmplY3RBbmFseXNlckNvbmZpZyB7XG4gICAgVFlQRV9QSUNUVVJFID0gMCxcbiAgICBUWVBFX1ZJREVPID0gMSxcbiAgICBUWVBFX09USEVSID0gMCxcbiAgICBUWVBFX0dPT0RTID0gMSxcbiAgICBUWVBFX0ZPT0QgPSAyLFxuICAgIFRZUEVfRlVSTklUVVJFID0gMyxcbiAgICBUWVBFX1BMQU5UID0gNCxcbiAgICBUWVBFX1BMQUNFID0gNSxcbiAgICBUWVBFX0ZBQ0UgPSA2LFxufVxuXG5leHBvcnQgZW51bSBSZWN0U3R5bGUge1xuICAgIFNUUk9LRSA9IDEsXG4gICAgRklMTCA9IDIsXG4gICAgRklMTF9BTkRfU1RST0tFID0gMyxcbn1cblxuLy9TVElMTCAmJiBMSVZFIFNDRU5FIEFOQUxZU0VSXG5cbmV4cG9ydCBpbnRlcmZhY2Ugc3RpbGxTY2VuZVJlcSB7XG4gICAgZmlsZVBhdGg6IGFueTtcbiAgICBhbmFseXNlTW9kZT86IHN5bmNNb2RlIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBzY2VuZVNldHRpbmdzIHtcbiAgICBjb2xvcj86IENvbG9ycyB8IG51bGw7XG4gICAgdGV4dFNpemU/OiBOdW1iZXIgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvc2l0ZVNjZW5lU2V0dGluZ3Mge1xuICAgIGNvbG9yPzogQ29sb3JzIHwgbnVsbDtcbiAgICB0ZXh0U2l6ZT86IE51bWJlciB8IG51bGw7XG59XG5cbmV4cG9ydCBlbnVtIENvbG9ycyB7XG4gICAgUkVEID0gLTY1NTM2LFxuICAgIERLR1JBWSA9IC0xMjMwMzI5MixcbiAgICBHUkFZID0gLTc4MjkzNjgsXG4gICAgV0hJVEUgPSAtMSxcbiAgICBCTFVFID0gLTE2Nzc2OTYxLFxuICAgIEJMQUNLID0gLTE2Nzc3MjE2LFxuICAgIExUR1JBWSA9IC0zMzU1NDQ0LFxuICAgIE1BR0VOVEEgPSAtNjUyODEsXG4gICAgWUVMTE9XID0gLTI1NixcbiAgICBDWUFOID0gLTE2NzExNjgxLFxuICAgIEdSRUVOID0gLTE2NzExOTM2LFxuICAgIFRSQU5TUEFSRU5UID0gMCxcbn1cblxuLypcbi0tLS0tLS0tLS0tLS0tLS0tIHJldHVyblxuKi9cblxuZXhwb3J0IGludGVyZmFjZSBNTEltYWdlQ2xhc3NpZmljYXRpb24ge1xuICAgIHJlc3VsdD86IFJlc3VsdEVudGl0eVtdIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUmVzdWx0RW50aXR5IHtcbiAgICBpZGVudGl0eTogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBwb3NzaWJpbGl0eTogbnVtYmVyO1xuICAgIGhhc2hDb2RlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTUxEb2N1bWVudFNrZXdEZXRlY3RSZXN1bHQge1xuICAgIHJlc3VsdENvZGU6IG51bWJlcjtcbiAgICBiaXRtYXA6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTEltYWdlU2VnbWVudGF0aW9uIHtcbiAgICBiaXRtYXBGb3JlZ3JvdW5kOiBhbnk7XG4gICAgYml0bWFwR3JheXNjYWxlOiBhbnk7XG4gICAgbWFza3M6IG51bWJlcjtcbiAgICBiaXRtYXBPcmlnaW5hbDogYW55O1xufVxuZXhwb3J0IGludGVyZmFjZSBNTFJlbW90ZUxhbmRtYXJrIHtcbiAgICBsYW5kbWFyazogc3RyaW5nO1xuICAgIGxhbmRtYXJrSWRlbnRpdHk6IHN0cmluZztcbiAgICBwb3NzaWJpbGl0eTogbnVtYmVyO1xuICAgIGJvcmRlcjogQm9yZGVyO1xuICAgIHBvc2l0aW9uSW5mbz86IFBvc2l0aW9uSW5mb0VudGl0eVtdIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQm9yZGVyIHtcbiAgICBib3R0b206IG51bWJlcjtcbiAgICB0b3A6IG51bWJlcjtcbiAgICBsZWZ0OiBudW1iZXI7XG4gICAgcmlnaHQ6IG51bWJlcjtcbiAgICBleGFjdENlbnRlclg6IG51bWJlcjtcbiAgICBjZW50ZXJZOiBudW1iZXI7XG4gICAgY2VudGVyWDogbnVtYmVyO1xuICAgIGRlc2NyaWJlQ29udGVudHM6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICB3aWR0aDogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBQb3NpdGlvbkluZm9FbnRpdHkge1xuICAgIGxuZzogbnVtYmVyO1xuICAgIGxhdDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MT2JqZWN0IHtcbiAgICB0eXBlSWRlbnRpdHk6IG51bWJlcjtcbiAgICB0eXBlUG9zc2liaWxpdHk6IG51bWJlcjtcbiAgICBib3JkZXI6IEJvcmRlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTFNjZW5lRGV0ZWN0aW9uUmVzdWx0IHtcbiAgICByZXN1bHRTdHJpbmc6IHN0cmluZztcbiAgICBjb25maWRlbmNlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGl2ZVNjZW5BbmFseXNlciB7XG4gICAgYW5hbHlzZUxpc3Q6IFtBbmFseXNlTGlzdF07XG4gICAgZnJhbWVQcm9wZXJ0eTogRnJhbWVQcm9wZXJ0eTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQW5hbHlzZUxpc3Qge1xuICAgIDA6IGE7XG59XG5leHBvcnQgaW50ZXJmYWNlIGEge1xuICAgIHJlc3VsdDogc3RyaW5nO1xuICAgIGNvbmZpZGVuY2U6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRnJhbWVQcm9wZXJ0eSB7XG4gICAgZXh0OiBzdHJpbmc7XG4gICAgZm9ybWF0VHlwZTogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIGl0ZW1JZGVudGl0eTogbnVtYmVyO1xuICAgIHF1YWRyYW50OiBudW1iZXI7XG4gICAgdGltZXN0YW1wOiBudW1iZXI7XG4gICAgd2lkdGg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTFByb2R1Y3RWaXNpb25SZXN1bHQge1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBib3JkZXI6IEJvcmRlcjtcbiAgICBsaXN0PzogTGlzdEVudGl0eVtdIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGlzdEVudGl0eSB7XG4gICAgY3VzdG9tY29udGVudDogc3RyaW5nO1xuICAgIGltYWdlbGlzdD86IEltYWdlbGlzdEVudGl0eVtdIHwgbnVsbDtcbiAgICBwb3NzaWJpbGl0eTogbnVtYmVyO1xuICAgIHByb2R1Y3RVUkw6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VsaXN0RW50aXR5IHtcbiAgICBpbWFnZUlkOiBzdHJpbmc7XG4gICAgcG9zc2liaWxpdHk6IG51bWJlcjtcbiAgICBwcm9kdWN0SWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gRXZlbnRzIHtcbiAgICBURVhUX1RSQU5TQUNUT1JfT05fREVTVFJPWSA9IFwidGV4dFRyYW5zYWN0b3JPbkRlc3Ryb3lcIixcbiAgICBURVhUX1RSQU5TQUNUT1JfT05fUkVTVUxUID0gXCJ0ZXh0VHJhbnNhY3Rvck9uUmVzdWx0XCIsXG4gICAgRkFDRV9UUkFOU0FDVE9SX09OX0RFU1RST1kgPSBcImZhY2VUcmFuc2FjdG9yT25EZXN0cm95XCIsXG4gICAgRkFDRV9UUkFOU0FDVE9SX09OX1JFU1VMVCA9IFwiZmFjZVRyYW5zYWN0b3JPblJlc3VsdFwiLFxuICAgIEZBQ0VfM0RfVFJBTlNBQ1RPUl9PTl9ERVNUUk9ZID0gXCJmYWNlM2RUcmFuc2FjdG9yT25EZXN0cm95XCIsXG4gICAgRkFDRV8zRF9UUkFOU0FDVE9SX09OX1JFU1VMVCA9IFwiZmFjZTNkVHJhbnNhY3Rvck9uUmVzdWx0XCIsXG4gICAgQ0xBU1NJRklDQVRJT05fVFJBTlNBQ1RPUl9PTl9ERVNUUk9ZID0gXCJjbGFzc2lmaWNhdGlvblRyYW5zYWN0b3JPbkRlc3Ryb3lcIixcbiAgICBDTEFTU0lGSUNBVElPTl9UUkFOU0FDVE9SX09OX1JFU1VMVCA9IFwiY2xhc3NpZmljYXRpb25UcmFuc2FjdG9yT25SZXN1bHRcIixcbiAgICBPQkpFQ1RfVFJBTlNBQ1RPUl9PTl9ERVNUUk9ZID0gXCJvYmplY3RUcmFuc2FjdG9yT25EZXN0cm95XCIsXG4gICAgT0JKRUNUX1RSQU5TQUNUT1JfT05fUkVTVUxUID0gXCJvYmplY3RUcmFuc2FjdG9yT25SZXN1bHRcIixcbiAgICBTQ0VORV9UUkFOU0FDVE9SX09OX0RFU1RST1kgPSBcInNjZW5lVHJhbnNhY3Rvck9uRGVzdHJveVwiLFxuICAgIFNDRU5FX1RSQU5TQUNUT1JfT05fUkVTVUxUID0gXCJzY2VuZVRyYW5zYWN0b3JPblJlc3VsdFwiLFxuICAgIFNLRUxFVE9OX1RSQU5TQUNUT1JfT05fREVTVFJPWSA9IFwic2tlbGV0b25UcmFuc2FjdG9yT25EZXN0cm95XCIsXG4gICAgU0tFTEVUT05fVFJBTlNBQ1RPUl9PTl9SRVNVTFQgPSBcInNrZWxldG9uVHJhbnNhY3Rvck9uUmVzdWx0XCIsXG4gICAgSEFORF9UUkFOU0FDVE9SX09OX0RFU1RST1kgPSBcImhhbmRUcmFuc2FjdG9yT25EZXN0cm95XCIsXG4gICAgSEFORF9UUkFOU0FDVE9SX09OX1JFU1VMVCA9IFwiaGFuZFRyYW5zYWN0b3JPblJlc3VsdFwiLFxuICAgIEdFU1RVUkVfVFJBTlNBQ1RPUl9PTl9ERVNUUk9ZID0gXCJnZXN0dXJlVHJhbnNhY3Rvck9uRGVzdHJveVwiLFxuICAgIEdFU1RVUkVfVFJBTlNBQ1RPUl9PTl9SRVNVTFQgPSBcImdlc3R1cmVUcmFuc2FjdG9yT25SZXN1bHRcIixcbiAgICBTRUdNRU5UQVRJT05fVFJBTlNBQ1RPUl9PTl9ERVNUUk9ZID0gXCJzZWdtZW50YXRpb25UcmFuc2FjdG9yT25EZXN0cm95XCIsXG4gICAgU0VHTUVOVEFUSU9OX1RSQU5TQUNUT1JfT05fUkVTVUxUID0gXCJzZWdtZW50YXRpb25UcmFuc2FjdG9yT25SZXN1bHRcIixcbn1cblxuZXhwb3J0IGVudW0gQ29yZG92YUVycm9ycyB7XG4gICAgVU5LTk9XTiA9IC0xLFxuICAgIFNVQ0NFU1MgPSAwLFxuICAgIERJU0NBUkRFRCA9IDEsXG4gICAgSU5ORVIgPSAyLFxuICAgIElOQUNUSVZFID0gMyxcbiAgICBOT1RfU1VQUE9SVEVEID0gNCxcbiAgICBJTExFR0FMX1BBUkFNRVRFUiA9IDUsXG4gICAgT1ZFUkRVRSA9IDYsXG4gICAgTk9fRk9VTkQgPSA3LFxuICAgIERVUExJQ0FURV9GT1VORCA9IDgsXG4gICAgTk9fUEVSTUlTU0lPTiA9IDksXG4gICAgSU5TVUZGSUNJRU5UX1JFU09VUkNFID0gMTAsXG4gICAgQU5BTFlTSVNfRkFJTFVSRSA9IDExLFxuICAgIElOVEVSUlVQVEVEID0gMTIsXG4gICAgRVhDRUVEX1JBTkdFID0gMTMsXG4gICAgREFUQV9NSVNTSU5HID0gMTQsXG4gICAgQVVUSEVOVElDQVRJT05fUkVRVUlSRUQgPSAxNSxcbiAgICBURkxJVEVfTk9UX0NPTVBBVElCTEUgPSAxNixcbiAgICBJTlNVRkZJQ0lFTlRfU1BBQ0UgPSAxNyxcbiAgICBIQVNIX01JU1MgPSAxOCxcbiAgICBUT0tFTl9JTlZBTElEID0gMTksXG4gICAgU0VSVklDRV9GQUlMVVJFID0gMjAsXG4gICAgQU5BTFlTSVNfTlVMTCA9IDIxLFxufSJdfQ==