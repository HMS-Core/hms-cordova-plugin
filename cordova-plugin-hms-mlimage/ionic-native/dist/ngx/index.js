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
var HMSMLImagePlugin = /** @class */ (function (_super) {
    __extends(HMSMLImagePlugin, _super);
    function HMSMLImagePlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * An app information class used to store basic information about apps with the HMS Core ML Image SDK integrated and complete the initialization of ML Image Kit. When using cloud services of the ML Image Kit, you need to set the apiKey of your app.
     * @param  {appSettingReq} appSettingReq Represents the parameter required.
     * @returns Promise<any>
     */
    HMSMLImagePlugin.prototype.appSetting = function (appSettingReq) { return cordova(this, "appSetting", { "otherPromise": true }, arguments); };
    /**
     * It sets Api Key or access token for application.
     * @param  {configReq} params Represents your API_KEY.
     * @returns Promise<any>
     */
    HMSMLImagePlugin.prototype.serviceInitializer = function (params) { return cordova(this, "serviceInitializer", { "otherPromise": true }, arguments); };
    /**
     * Adjusts the focal length of the camera based on the scaling coefficient (digital zoom).
     * @param  {doZoomReq} doZoomReq Reperesents the necessary parameters.
     * @returns Promise<any>
     */
    HMSMLImagePlugin.prototype.doZoom = function (doZoomReq) { return cordova(this, "doZoom", { "otherPromise": true }, arguments); };
    /**
     * Monitors photographing.
     * @returns Promise<any>
     */
    HMSMLImagePlugin.prototype.photograph = function () { return cordova(this, "photograph", { "otherPromise": true }, arguments); };
    /**
     * Close lens engine.
     * @returns Promise<any>
     */
    HMSMLImagePlugin.prototype.destroy = function () { return cordova(this, "destroy", { "otherPromise": true }, arguments); };
    /**
     * Obtains the size of the preview image of a camera.
     * @returns Promise<any>
     */
    HMSMLImagePlugin.prototype.getDisplayDimension = function () { return cordova(this, "getDisplayDimension", { "otherPromise": true }, arguments); };
    /**
     * Obtains the selected camera type.
     * @returns Promise<any>
     */
    HMSMLImagePlugin.prototype.getLensType = function () { return cordova(this, "getLensType", { "otherPromise": true }, arguments); };
    /**
     * This service recognize the image from the picture and return what the picture can be with the percentages. Use ML Libraries.
     * @param  {ownCustomModelReq | downloadModelReq} ownCustomModelReq Represents the parameter required for custom model analyser.
     * @returns Promise<any>
     */
    HMSMLImagePlugin.prototype.customModelAnalyser = function (ownCustomModelReq) { return cordova(this, "customModelAnalyser", { "otherPromise": true }, arguments); };
    /**
     * Obtains Frame.
     * @param  {mlFrameReq} mlFrameReq Represents the parameter required.
     * @returns Promise<any>
     */
    HMSMLImagePlugin.prototype.mlFrame = function (mlFrameReq) { return cordova(this, "mlFrame", { "otherPromise": true }, arguments); };
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
    HMSMLImagePlugin.prototype.setUserRegion = function (region) { return cordova(this, "setUserRegion", { "otherPromise": true }, arguments); };
    /**
     * Obtains the country/region code of the data processing location you have specified when you choose to manually manage and specify such a location.
     * @returns Promise<String>
     */
    HMSMLImagePlugin.prototype.getCountryCode = function () { return cordova(this, "getCountryCode", { "otherPromise": true }, arguments); };
    /**
     * This service enable logger service.
     * @returns Promise<any>
     */
    HMSMLImagePlugin.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    /**
     * This service disable logger service.
     * @returns Promise<any>
     */
    HMSMLImagePlugin.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    /**
     * This service can integrate with multiple types of analyzers to detect different types of objects at the same time. For example, it can simultaneously recognize faces and texts in an image.
     * @param  {compositeAnalyserReq} ownCustomModelReq Represents the parameter required for composite analyser.
     * @returns Promise<any>
     */
    HMSMLImagePlugin.prototype.initializeCompositeAnalyzer = function (compositeAnalyserReq) { return cordova(this, "initializeCompositeAnalyzer", { "otherPromise": true }, arguments); };
    /**
     * Obtains composite analyser information.
     * @returns Promise<any>
     */
    HMSMLImagePlugin.prototype.infoCompositeAnalyser = function () { return cordova(this, "infoCompositeAnalyser", { "otherPromise": true }, arguments); };
    /**
     * Close composite analyser.
     * @returns Promise<void>
     */
    HMSMLImagePlugin.prototype.closeCompositeAnalyser = function () { return cordova(this, "closeCompositeAnalyser", { "otherPromise": true }, arguments); };
    /**
     * Obtain picture.
     * @param  {req} req Represents the parameter required for obtain picture.
     * @returns Promise<any>
     */
    HMSMLImagePlugin.prototype.obtainPicture = function (req) { return cordova(this, "obtainPicture", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSMLImagePlugin.prototype, "MLImageClassificationConfig", {
        get: function () { return cordovaPropertyGet(this, "MLImageClassificationConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLImageClassificationConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePlugin.prototype, "MLImageSegmentationSetting", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePlugin.prototype, "MLImageSegmentationScene", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationScene"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationScene", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePlugin.prototype, "MLRemoteLandmarkSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteLandmarkSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteLandmarkSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePlugin.prototype, "ImgSuperResolutionConfig", {
        get: function () { return cordovaPropertyGet(this, "ImgSuperResolutionConfig"); },
        set: function (value) { cordovaPropertySet(this, "ImgSuperResolutionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePlugin.prototype, "MlObjectAnalyserConfig", {
        get: function () { return cordovaPropertyGet(this, "MlObjectAnalyserConfig"); },
        set: function (value) { cordovaPropertySet(this, "MlObjectAnalyserConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePlugin.prototype, "DownloadStrategyCustom", {
        get: function () { return cordovaPropertyGet(this, "DownloadStrategyCustom"); },
        set: function (value) { cordovaPropertySet(this, "DownloadStrategyCustom", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePlugin.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePlugin.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePlugin.prototype, "MLFlashMode", {
        get: function () { return cordovaPropertyGet(this, "MLFlashMode"); },
        set: function (value) { cordovaPropertySet(this, "MLFlashMode", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePlugin.prototype, "MLLensType", {
        get: function () { return cordovaPropertyGet(this, "MLLensType"); },
        set: function (value) { cordovaPropertySet(this, "MLLensType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePlugin.prototype, "MLAnalyzerName", {
        get: function () { return cordovaPropertyGet(this, "MLAnalyzerName"); },
        set: function (value) { cordovaPropertySet(this, "MLAnalyzerName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePlugin.prototype, "MLFrame", {
        get: function () { return cordovaPropertyGet(this, "MLFrame"); },
        set: function (value) { cordovaPropertySet(this, "MLFrame", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePlugin.prototype, "MLProductConfig", {
        get: function () { return cordovaPropertyGet(this, "MLProductConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLProductConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImagePlugin.prototype, "syncMode", {
        get: function () { return cordovaPropertyGet(this, "syncMode"); },
        set: function (value) { cordovaPropertySet(this, "syncMode", value); },
        enumerable: false,
        configurable: true
    });
    HMSMLImagePlugin.pluginName = "HMSMLImagePlugin";
    HMSMLImagePlugin.plugin = "cordova-plugin-hms-mlimage";
    HMSMLImagePlugin.pluginRef = "HMSMLImagePlugin";
    HMSMLImagePlugin.platforms = ["Android"];
    HMSMLImagePlugin.decorators = [
        { type: Injectable }
    ];
    return HMSMLImagePlugin;
}(IonicNativePlugin));
export { HMSMLImagePlugin };
var HMSMLImage = /** @class */ (function (_super) {
    __extends(HMSMLImage, _super);
    function HMSMLImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This method represents the image classification SDK.
     * @param  {localImageClassificationReq|remoteImageClassificationReq} imageClassificationInput Represents the parameter required for classify objects.
     * @returns Promise<ImageClassificationAnalyser>
     */
    HMSMLImage.prototype.imageClassificationAnalyser = function (imageClassificationInput) { return cordova(this, "imageClassificationAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method stop image classification analyser.
     * @returns Promise<string>
     */
    HMSMLImage.prototype.stopImageClassificationAnalyser = function () { return cordova(this, "stopImageClassificationAnalyser", { "otherPromise": true }, arguments); };
    /**
     * The image segmentation service segments same elements (such as human body, plant, and sky) from an image. The elements supported include human body, sky, plant, food and others.
     * @param  {imgSegmentationReq} imgSegmentationReq Represents the parameter required for image segmentation.
     * @returns Promise<SegmentationAnalyser>
     */
    HMSMLImage.prototype.imgSegmentation = function (imgSegmentationReq) { return cordova(this, "imgSegmentation", { "otherPromise": true }, arguments); };
    /**
     * This method stop image segmentation service.
     * @returns Promise<any>
     */
    HMSMLImage.prototype.stopImgSegmentation = function () { return cordova(this, "stopImgSegmentation", { "otherPromise": true }, arguments); };
    /**
     * The landmark recognition service enables you to obtain the landmark name, landmark longitude and latitude, and confidence of the input image.
     * @param  {imgLandMarkReq} imgLandMarkReq Represents the parameter required for image landmark analyser.
     * @returns Promise<ImageLandmarkAnalyser>
     */
    HMSMLImage.prototype.imgLandMarkAnalyser = function (imgLandMarkReq) { return cordova(this, "imgLandMarkAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method stop image landmark analyser service.
     * @returns Promise<any>
     */
    HMSMLImage.prototype.imgLandMarkAnalyserStop = function () { return cordova(this, "imgLandMarkAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * The object detection service can detect and track multiple objects in an image.
     * @param  {objectReq} objectReq Represents the parameter required for object detection.
     * @returns Promise<ImageObjectAnalyser>
     */
    HMSMLImage.prototype.objectAnalyser = function (objectReq) { return cordova(this, "objectAnalyser", { "otherPromise": true }, arguments); };
    /**
     * The scene detection service can classify the scenario content of images and add labels, such as outdoor scenery, indoor places, and buildings, to help understand the image content.
     *   @param  {stillSceneReq} stillSceneReq Represents the parameter required for Scene analyser.
     *  @returns Promise <any>
     */
    HMSMLImage.prototype.stillSceneAnalyser = function (stillSceneReq) { return cordova(this, "stillSceneAnalyser", { "otherPromise": true }, arguments); };
    /**
   This service can automatically identify the location of a document in an image and adjust the shooting angle to the angle facing the document, even if the document is tilted.
   * @param  {documentSkewCorrectionReq} documentSkewCorrectionReq Represents the parameter required for document skew correction.
   * @returns Promise<DocumentSkewAnalyser>
   */
    HMSMLImage.prototype.documentSkewCorrectionAnalyser = function (documentSkewCorrectionReq) { return cordova(this, "documentSkewCorrectionAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This service can zoom in an image that contains text and significantly improve the definition of text in the image.
     * @param  {textImageSuperResolutionReq} textImageSuperResolutionReq Represents the parameter required for Text Image Super Resolution.
     * @returns Promise<any>
     */
    HMSMLImage.prototype.textImageSuperResolution = function (textImageSuperResolutionReq) { return cordova(this, "textImageSuperResolution", { "otherPromise": true }, arguments); };
    /**
     * This service provides the 1x super-resolution capabilities. 1x super-resolution removes the compression noise.
     * @param  {imageSuperResolutionReq} imageSuperResolutionReq Represents the parameter required for Image Super Resolution.
     * @returns Promise<any>
     */
    HMSMLImage.prototype.imageSuperResolution = function (imageSuperResolutionReq) { return cordova(this, "imageSuperResolution", { "otherPromise": true }, arguments); };
    /**
     * Represents the image-based product detection API of HUAWEI ML Kit.
     * @param  {productReq} productReq Represents the parameter required.
     * @returns Promise<any>
     */
    HMSMLImage.prototype.productVisionAnalyser = function (productReq) { return cordova(this, "productVisionAnalyser", { "otherPromise": true }, arguments); };
    /**
     * This method stop object analyser service.
     * @returns Promise<any>
     */
    HMSMLImage.prototype.objectAnalyserStop = function () { return cordova(this, "objectAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * This method stop product analyser service.
     * @returns Promise<any>
     */
    HMSMLImage.prototype.productAnalyserStop = function () { return cordova(this, "productAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * This method stop document skew analyser service.
     * @returns Promise<any>
     */
    HMSMLImage.prototype.docSkewAnalyserStop = function () { return cordova(this, "docSkewAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * This method stop TISR analyser service.
     * @returns Promise<any>
     */
    HMSMLImage.prototype.TISRAnalyserStop = function () { return cordova(this, "TISRAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * This method stop ISR analyser service.
     * @returns Promise<any>
     */
    HMSMLImage.prototype.ISRAnalyserStop = function () { return cordova(this, "ISRAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * This method stop scene analyser service.
     * @returns Promise<any>
     */
    HMSMLImage.prototype.stillSceneAnalyserStop = function () { return cordova(this, "stillSceneAnalyserStop", { "otherPromise": true }, arguments); };
    /**
     * This method returns image classification settings.
     * @returns Promise<any>
     */
    HMSMLImage.prototype.getImageClassificationAnalyserSetting = function () { return cordova(this, "getImageClassificationAnalyserSetting", { "otherPromise": true }, arguments); };
    /**
     *  This method returns ISR settings.
     * @returns Promise<any>
     */
    HMSMLImage.prototype.getISRSetting = function () { return cordova(this, "getISRSetting", { "otherPromise": true }, arguments); };
    /**
     *  This method returns segmentation settings.
     * @returns Promise<any>
     */
    HMSMLImage.prototype.getSegmentationSetting = function () { return cordova(this, "getSegmentationSetting", { "otherPromise": true }, arguments); };
    /**
     *  This method returns landmark settings.
     * @returns Promise<any>
     */
    HMSMLImage.prototype.getLandmarkSetting = function () { return cordova(this, "getLandmarkSetting", { "otherPromise": true }, arguments); };
    /**
     *  This method returns object settings.
     * @returns Promise<any>
     */
    HMSMLImage.prototype.getObjectSetting = function () { return cordova(this, "getObjectSetting", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSMLImage.prototype, "MLImageClassificationConfig", {
        get: function () { return cordovaPropertyGet(this, "MLImageClassificationConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLImageClassificationConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImage.prototype, "MLImageSegmentationSetting", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImage.prototype, "MLImageSegmentationScene", {
        get: function () { return cordovaPropertyGet(this, "MLImageSegmentationScene"); },
        set: function (value) { cordovaPropertySet(this, "MLImageSegmentationScene", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImage.prototype, "MLRemoteLandmarkSetting", {
        get: function () { return cordovaPropertyGet(this, "MLRemoteLandmarkSetting"); },
        set: function (value) { cordovaPropertySet(this, "MLRemoteLandmarkSetting", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImage.prototype, "ImgSuperResolutionConfig", {
        get: function () { return cordovaPropertyGet(this, "ImgSuperResolutionConfig"); },
        set: function (value) { cordovaPropertySet(this, "ImgSuperResolutionConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImage.prototype, "MlObjectAnalyserConfig", {
        get: function () { return cordovaPropertyGet(this, "MlObjectAnalyserConfig"); },
        set: function (value) { cordovaPropertySet(this, "MlObjectAnalyserConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImage.prototype, "DownloadStrategyCustom", {
        get: function () { return cordovaPropertyGet(this, "DownloadStrategyCustom"); },
        set: function (value) { cordovaPropertySet(this, "DownloadStrategyCustom", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImage.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImage.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImage.prototype, "MLFlashMode", {
        get: function () { return cordovaPropertyGet(this, "MLFlashMode"); },
        set: function (value) { cordovaPropertySet(this, "MLFlashMode", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImage.prototype, "MLLensType", {
        get: function () { return cordovaPropertyGet(this, "MLLensType"); },
        set: function (value) { cordovaPropertySet(this, "MLLensType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImage.prototype, "MLAnalyzerName", {
        get: function () { return cordovaPropertyGet(this, "MLAnalyzerName"); },
        set: function (value) { cordovaPropertySet(this, "MLAnalyzerName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImage.prototype, "MLFrame", {
        get: function () { return cordovaPropertyGet(this, "MLFrame"); },
        set: function (value) { cordovaPropertySet(this, "MLFrame", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImage.prototype, "MLProductConfig", {
        get: function () { return cordovaPropertyGet(this, "MLProductConfig"); },
        set: function (value) { cordovaPropertySet(this, "MLProductConfig", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSMLImage.prototype, "syncMode", {
        get: function () { return cordovaPropertyGet(this, "syncMode"); },
        set: function (value) { cordovaPropertySet(this, "syncMode", value); },
        enumerable: false,
        configurable: true
    });
    HMSMLImage.pluginName = "HMSMLImage";
    HMSMLImage.plugin = "cordova-plugin-hms-mlimage";
    HMSMLImage.pluginRef = "HMSMLImage";
    HMSMLImage.platforms = ["Android"];
    HMSMLImage.decorators = [
        { type: Injectable }
    ];
    return HMSMLImage;
}(IonicNativePlugin));
export { HMSMLImage };
var MLLive = /** @class */ (function () {
    function MLLive(scene, divId) {
        if (scene === "liveEngineAnalyser") {
            this.arScene = new (HMSMLImagePlugin.getPlugin().liveEngineAnalyser)(divId);
        }
        if (scene === "liveCompositeAnalyser") {
            this.arScene = new (HMSMLImagePlugin.getPlugin().liveCompositeAnalyser)(divId);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7O0FBRUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHNFQUF1RCxNQUFNLG9CQUFvQixDQUFDOztJQVNuRCxvQ0FBaUI7Ozs7SUFpQ25EOzs7O09BSUc7SUFDSCxxQ0FBVSxhQUFDLGFBQTRCO0lBSXZDOzs7O09BSUc7SUFDSCw2Q0FBa0IsYUFBQyxNQUFpQjtJQUlwQzs7OztPQUlHO0lBQ0gsaUNBQU0sYUFBQyxTQUFvQjtJQUkzQjs7O09BR0c7SUFDSCxxQ0FBVTtJQUlWOzs7T0FHRztJQUNILGtDQUFPO0lBSVA7OztPQUdHO0lBQ0gsOENBQW1CO0lBSW5COzs7T0FHRztJQUNILHNDQUFXO0lBS1g7Ozs7T0FJRztJQUNILDhDQUFtQixhQUNmLGlCQUF1RDtJQUszRDs7OztPQUlHO0lBQ0gsa0NBQU8sYUFBQyxVQUFzQjtJQUk5Qjs7Ozs7Ozs7O09BU0c7SUFDSCx3Q0FBYSxhQUFDLE1BQWM7SUFJNUI7OztPQUdHO0lBQ0gseUNBQWM7SUFLZDs7O09BR0c7SUFDSCx1Q0FBWTtJQUlaOzs7T0FHRztJQUNILHdDQUFhO0lBSWI7Ozs7T0FJRztJQUNILHNEQUEyQixhQUN2QixvQkFBMEM7SUFLOUM7OztPQUdHO0lBQ0gsZ0RBQXFCO0lBSXJCOzs7T0FHRztJQUNILGlEQUFzQjtJQUl0Qjs7OztPQUlHO0lBQ0gsd0NBQWEsYUFDVCxHQUF5QjswQkF2TDdCLHlEQUEyQjs7Ozs7OzBCQUUzQix3REFBMEI7Ozs7OzswQkFFMUIsc0RBQXdCOzs7Ozs7MEJBRXhCLHFEQUF1Qjs7Ozs7OzBCQUV2QixzREFBd0I7Ozs7OzswQkFFeEIsb0RBQXNCOzs7Ozs7MEJBRXRCLG9EQUFz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RUFBMkQsQ0FBQTtJQUMzRCxtRUFBeUQsQ0FBQTtJQUN6RCxvRkFBMEUsQ0FBQTtJQUMxRSxrRkFBd0UsQ0FBQTtJQUN4RSxvRUFBMEQsQ0FBQTtJQUMxRCxrRUFBd0QsQ0FBQTtJQUN4RCxrRUFBd0QsQ0FBQTtJQUN4RCxnRUFBc0QsQ0FBQTtJQUN0RCx3RUFBOEQsQ0FBQTtJQUM5RCxzRUFBNEQsQ0FBQTtJQUM1RCxnRUFBc0QsQ0FBQTtJQUN0RCw4REFBb0QsQ0FBQTtJQUNwRCxzRUFBNEQsQ0FBQTtJQUM1RCxvRUFBMEQsQ0FBQTtJQUMxRCxnRkFBc0UsQ0FBQTtJQUN0RSw4RUFBb0UsQ0FBQTtBQUN4RSxDQUFDLEVBckJXLE1BQU0sS0FBTixNQUFNLFFBcUJqQjtBQUVELE1BQU0sQ0FBTixJQUFZLGFBd0JYO0FBeEJELFdBQVksYUFBYTtJQUNyQix3REFBWSxDQUFBO0lBQ1osdURBQVcsQ0FBQTtJQUNYLDJEQUFhLENBQUE7SUFDYixtREFBUyxDQUFBO0lBQ1QseURBQVksQ0FBQTtJQUNaLG1FQUFpQixDQUFBO0lBQ2pCLDJFQUFxQixDQUFBO0lBQ3JCLHVEQUFXLENBQUE7SUFDWCx5REFBWSxDQUFBO0lBQ1osdUVBQW1CLENBQUE7SUFDbkIsbUVBQWlCLENBQUE7SUFDakIsb0ZBQTBCLENBQUE7SUFDMUIsMEVBQXFCLENBQUE7SUFDckIsZ0VBQWdCLENBQUE7SUFDaEIsa0VBQWlCLENBQUE7SUFDakIsa0VBQWlCLENBQUE7SUFDakIsd0ZBQTRCLENBQUE7SUFDNUIsb0ZBQTBCLENBQUE7SUFDMUIsOEVBQXVCLENBQUE7SUFDdkIsNERBQWMsQ0FBQTtJQUNkLG9FQUFrQixDQUFBO0lBQ2xCLHdFQUFvQixDQUFBO0lBQ3BCLG9FQUFrQixDQUFBO0FBQ3RCLENBQUMsRUF4QlcsYUFBYSxLQUFiLGFBQWEsUUF3QnhCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBDb3B5cmlnaHQgMjAyMy4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcbiAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gXCJAaW9uaWMtbmF0aXZlL2NvcmVcIjtcblxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogXCJITVNNTEltYWdlUGx1Z2luXCIsXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1tbGltYWdlXCIsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICAgIHBsdWdpblJlZjogXCJITVNNTEltYWdlUGx1Z2luXCIsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNNTEltYWdlUGx1Z2luIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MSW1hZ2VDbGFzc2lmaWNhdGlvbkNvbmZpZyA9IE1MSW1hZ2VDbGFzc2lmaWNhdGlvbkNvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEltYWdlU2VnbWVudGF0aW9uU2V0dGluZyA9IE1MSW1hZ2VTZWdtZW50YXRpb25TZXR0aW5nO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MSW1hZ2VTZWdtZW50YXRpb25TY2VuZSA9IE1MSW1hZ2VTZWdtZW50YXRpb25TY2VuZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFJlbW90ZUxhbmRtYXJrU2V0dGluZyA9IE1MUmVtb3RlTGFuZG1hcmtTZXR0aW5nO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIEltZ1N1cGVyUmVzb2x1dGlvbkNvbmZpZyA9IEltZ1N1cGVyUmVzb2x1dGlvbkNvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNbE9iamVjdEFuYWx5c2VyQ29uZmlnID0gTWxPYmplY3RBbmFseXNlckNvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBEb3dubG9hZFN0cmF0ZWd5Q3VzdG9tID0gRG93bmxvYWRTdHJhdGVneUN1c3RvbTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBDb2xvcnMgPSBDb2xvcnM7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgUmVjdFN0eWxlID0gUmVjdFN0eWxlO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MRmxhc2hNb2RlID0gTUxGbGFzaE1vZGU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxMZW5zVHlwZSA9IE1MTGVuc1R5cGU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxBbmFseXplck5hbWUgPSBNTEFuYWx5emVyTmFtZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEZyYW1lID0gTUxGcmFtZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFByb2R1Y3RDb25maWcgPSBNTFByb2R1Y3RDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgc3luY01vZGUgPSBzeW5jTW9kZTtcblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogQW4gYXBwIGluZm9ybWF0aW9uIGNsYXNzIHVzZWQgdG8gc3RvcmUgYmFzaWMgaW5mb3JtYXRpb24gYWJvdXQgYXBwcyB3aXRoIHRoZSBITVMgQ29yZSBNTCBJbWFnZSBTREsgaW50ZWdyYXRlZCBhbmQgY29tcGxldGUgdGhlIGluaXRpYWxpemF0aW9uIG9mIE1MIEltYWdlIEtpdC4gV2hlbiB1c2luZyBjbG91ZCBzZXJ2aWNlcyBvZiB0aGUgTUwgSW1hZ2UgS2l0LCB5b3UgbmVlZCB0byBzZXQgdGhlIGFwaUtleSBvZiB5b3VyIGFwcC5cbiAgICAgKiBAcGFyYW0gIHthcHBTZXR0aW5nUmVxfSBhcHBTZXR0aW5nUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZC5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBhcHBTZXR0aW5nKGFwcFNldHRpbmdSZXE6IGFwcFNldHRpbmdSZXEpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogSXQgc2V0cyBBcGkgS2V5IG9yIGFjY2VzcyB0b2tlbiBmb3IgYXBwbGljYXRpb24uXG4gICAgICogQHBhcmFtICB7Y29uZmlnUmVxfSBwYXJhbXMgUmVwcmVzZW50cyB5b3VyIEFQSV9LRVkuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgc2VydmljZUluaXRpYWxpemVyKHBhcmFtczogY29uZmlnUmVxKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIEFkanVzdHMgdGhlIGZvY2FsIGxlbmd0aCBvZiB0aGUgY2FtZXJhIGJhc2VkIG9uIHRoZSBzY2FsaW5nIGNvZWZmaWNpZW50IChkaWdpdGFsIHpvb20pLlxuICAgICAqIEBwYXJhbSAge2RvWm9vbVJlcX0gZG9ab29tUmVxIFJlcGVyZXNlbnRzIHRoZSBuZWNlc3NhcnkgcGFyYW1ldGVycy5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBkb1pvb20oZG9ab29tUmVxOiBkb1pvb21SZXEpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogTW9uaXRvcnMgcGhvdG9ncmFwaGluZy5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBwaG90b2dyYXBoKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBDbG9zZSBsZW5zIGVuZ2luZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBkZXN0cm95KCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBPYnRhaW5zIHRoZSBzaXplIG9mIHRoZSBwcmV2aWV3IGltYWdlIG9mIGEgY2FtZXJhLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGdldERpc3BsYXlEaW1lbnNpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIE9idGFpbnMgdGhlIHNlbGVjdGVkIGNhbWVyYSB0eXBlLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGdldExlbnNUeXBlKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgc2VydmljZSByZWNvZ25pemUgdGhlIGltYWdlIGZyb20gdGhlIHBpY3R1cmUgYW5kIHJldHVybiB3aGF0IHRoZSBwaWN0dXJlIGNhbiBiZSB3aXRoIHRoZSBwZXJjZW50YWdlcy4gVXNlIE1MIExpYnJhcmllcy5cbiAgICAgKiBAcGFyYW0gIHtvd25DdXN0b21Nb2RlbFJlcSB8IGRvd25sb2FkTW9kZWxSZXF9IG93bkN1c3RvbU1vZGVsUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgY3VzdG9tIG1vZGVsIGFuYWx5c2VyLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGN1c3RvbU1vZGVsQW5hbHlzZXIoXG4gICAgICAgIG93bkN1c3RvbU1vZGVsUmVxOiBvd25DdXN0b21Nb2RlbFJlcSB8IGRvd25sb2FkTW9kZWxSZXFcbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogT2J0YWlucyBGcmFtZS5cbiAgICAgKiBAcGFyYW0gIHttbEZyYW1lUmVxfSBtbEZyYW1lUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZC5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBtbEZyYW1lKG1sRnJhbWVSZXE6IG1sRnJhbWVSZXEpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogU2V0cyBhIGRhdGEgcHJvY2Vzc2luZyBsb2NhdGlvbiB3aGVuIHlvdSBjaG9vc2UgdG8gbWFudWFsbHkgbWFuYWdlIGFuZCBzcGVjaWZ5IHN1Y2ggYSBsb2NhdGlvbi5cbiAgICAgKiBAcGFyYW0gIHtyZWdpb259IHJlZ2lvbiBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIuXG4gICAgICogICAgICAgICAqIFJFR0lPTl9EUl9VTktOT1dOID0gMTAwMSxcbiAgICAgICAgICAgICAgICogUkVHSU9OX0RSX0NISU5BID0gMTAwMixcbiAgICAgICAgICAgICAgICogUkVHSU9OX0RSX1JVU1NJQSA9IDEwMDUsXG4gICAgICAgICAgICAgICAqIFJFR0lPTl9EUl9HRVJNQU4gPSAxMDA2LFxuICAgICAgICAgICAgICAgKiBSRUdJT05fRFJfU0lOR0FQT1JFID0gMTAwNyBcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBzZXRVc2VyUmVnaW9uKHJlZ2lvbjogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIE9idGFpbnMgdGhlIGNvdW50cnkvcmVnaW9uIGNvZGUgb2YgdGhlIGRhdGEgcHJvY2Vzc2luZyBsb2NhdGlvbiB5b3UgaGF2ZSBzcGVjaWZpZWQgd2hlbiB5b3UgY2hvb3NlIHRvIG1hbnVhbGx5IG1hbmFnZSBhbmQgc3BlY2lmeSBzdWNoIGEgbG9jYXRpb24uXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxTdHJpbmc+XG4gICAgICovXG4gICAgZ2V0Q291bnRyeUNvZGUoKTogUHJvbWlzZTxTdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBzZXJ2aWNlIGVuYWJsZSBsb2dnZXIgc2VydmljZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgc2VydmljZSBkaXNhYmxlIGxvZ2dlciBzZXJ2aWNlLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGRpc2FibGVMb2dnZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgc2VydmljZSBjYW4gaW50ZWdyYXRlIHdpdGggbXVsdGlwbGUgdHlwZXMgb2YgYW5hbHl6ZXJzIHRvIGRldGVjdCBkaWZmZXJlbnQgdHlwZXMgb2Ygb2JqZWN0cyBhdCB0aGUgc2FtZSB0aW1lLiBGb3IgZXhhbXBsZSwgaXQgY2FuIHNpbXVsdGFuZW91c2x5IHJlY29nbml6ZSBmYWNlcyBhbmQgdGV4dHMgaW4gYW4gaW1hZ2UuXG4gICAgICogQHBhcmFtICB7Y29tcG9zaXRlQW5hbHlzZXJSZXF9IG93bkN1c3RvbU1vZGVsUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgY29tcG9zaXRlIGFuYWx5c2VyLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGluaXRpYWxpemVDb21wb3NpdGVBbmFseXplcihcbiAgICAgICAgY29tcG9zaXRlQW5hbHlzZXJSZXE6IGNvbXBvc2l0ZUFuYWx5c2VyUmVxXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIE9idGFpbnMgY29tcG9zaXRlIGFuYWx5c2VyIGluZm9ybWF0aW9uLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGluZm9Db21wb3NpdGVBbmFseXNlcigpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogQ2xvc2UgY29tcG9zaXRlIGFuYWx5c2VyLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cbiAgICAgKi9cbiAgICBjbG9zZUNvbXBvc2l0ZUFuYWx5c2VyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogT2J0YWluIHBpY3R1cmUuXG4gICAgICogQHBhcmFtICB7cmVxfSByZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBvYnRhaW4gcGljdHVyZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBvYnRhaW5QaWN0dXJlKFxuICAgICAgICByZXE6IGNvbXBvc2l0ZUFuYWx5c2VyUmVxXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogXCJITVNNTEltYWdlXCIsXG4gICAgcGx1Z2luOiBcImNvcmRvdmEtcGx1Z2luLWhtcy1tbGltYWdlXCIsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICAgIHBsdWdpblJlZjogXCJITVNNTEltYWdlXCIsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNNTEltYWdlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MSW1hZ2VDbGFzc2lmaWNhdGlvbkNvbmZpZyA9IE1MSW1hZ2VDbGFzc2lmaWNhdGlvbkNvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEltYWdlU2VnbWVudGF0aW9uU2V0dGluZyA9IE1MSW1hZ2VTZWdtZW50YXRpb25TZXR0aW5nO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MSW1hZ2VTZWdtZW50YXRpb25TY2VuZSA9IE1MSW1hZ2VTZWdtZW50YXRpb25TY2VuZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFJlbW90ZUxhbmRtYXJrU2V0dGluZyA9IE1MUmVtb3RlTGFuZG1hcmtTZXR0aW5nO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIEltZ1N1cGVyUmVzb2x1dGlvbkNvbmZpZyA9IEltZ1N1cGVyUmVzb2x1dGlvbkNvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNbE9iamVjdEFuYWx5c2VyQ29uZmlnID0gTWxPYmplY3RBbmFseXNlckNvbmZpZztcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBEb3dubG9hZFN0cmF0ZWd5Q3VzdG9tID0gRG93bmxvYWRTdHJhdGVneUN1c3RvbTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBDb2xvcnMgPSBDb2xvcnM7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgUmVjdFN0eWxlID0gUmVjdFN0eWxlO1xuICAgIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICAgIE1MRmxhc2hNb2RlID0gTUxGbGFzaE1vZGU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxMZW5zVHlwZSA9IE1MTGVuc1R5cGU7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgTUxBbmFseXplck5hbWUgPSBNTEFuYWx5emVyTmFtZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTEZyYW1lID0gTUxGcmFtZTtcbiAgICBAQ29yZG92YVByb3BlcnR5KClcbiAgICBNTFByb2R1Y3RDb25maWcgPSBNTFByb2R1Y3RDb25maWc7XG4gICAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gICAgc3luY01vZGUgPSBzeW5jTW9kZTtcblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcmVwcmVzZW50cyB0aGUgaW1hZ2UgY2xhc3NpZmljYXRpb24gU0RLLlxuICAgICAqIEBwYXJhbSAge2xvY2FsSW1hZ2VDbGFzc2lmaWNhdGlvblJlcXxyZW1vdGVJbWFnZUNsYXNzaWZpY2F0aW9uUmVxfSBpbWFnZUNsYXNzaWZpY2F0aW9uSW5wdXQgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBjbGFzc2lmeSBvYmplY3RzLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8SW1hZ2VDbGFzc2lmaWNhdGlvbkFuYWx5c2VyPlxuICAgICAqL1xuICAgIGltYWdlQ2xhc3NpZmljYXRpb25BbmFseXNlcihcbiAgICAgICAgaW1hZ2VDbGFzc2lmaWNhdGlvbklucHV0OlxuICAgICAgICAgICAgfCBsb2NhbEltYWdlQ2xhc3NpZmljYXRpb25SZXFcbiAgICAgICAgICAgIHwgcmVtb3RlSW1hZ2VDbGFzc2lmaWNhdGlvblJlcVxuICAgICk6IFByb21pc2U8TUxJbWFnZUNsYXNzaWZpY2F0aW9uPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wIGltYWdlIGNsYXNzaWZpY2F0aW9uIGFuYWx5c2VyLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxuICAgICAqL1xuICAgIHN0b3BJbWFnZUNsYXNzaWZpY2F0aW9uQW5hbHlzZXIoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoZSBpbWFnZSBzZWdtZW50YXRpb24gc2VydmljZSBzZWdtZW50cyBzYW1lIGVsZW1lbnRzIChzdWNoIGFzIGh1bWFuIGJvZHksIHBsYW50LCBhbmQgc2t5KSBmcm9tIGFuIGltYWdlLiBUaGUgZWxlbWVudHMgc3VwcG9ydGVkIGluY2x1ZGUgaHVtYW4gYm9keSwgc2t5LCBwbGFudCwgZm9vZCBhbmQgb3RoZXJzLlxuICAgICAqIEBwYXJhbSAge2ltZ1NlZ21lbnRhdGlvblJlcX0gaW1nU2VnbWVudGF0aW9uUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgaW1hZ2Ugc2VnbWVudGF0aW9uLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8U2VnbWVudGF0aW9uQW5hbHlzZXI+XG4gICAgICovXG4gICAgaW1nU2VnbWVudGF0aW9uKFxuICAgICAgICBpbWdTZWdtZW50YXRpb25SZXE6IGltZ1NlZ21lbnRhdGlvblJlcVxuICAgICk6IFByb21pc2U8TUxJbWFnZVNlZ21lbnRhdGlvbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCBpbWFnZSBzZWdtZW50YXRpb24gc2VydmljZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBzdG9wSW1nU2VnbWVudGF0aW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGUgbGFuZG1hcmsgcmVjb2duaXRpb24gc2VydmljZSBlbmFibGVzIHlvdSB0byBvYnRhaW4gdGhlIGxhbmRtYXJrIG5hbWUsIGxhbmRtYXJrIGxvbmdpdHVkZSBhbmQgbGF0aXR1ZGUsIGFuZCBjb25maWRlbmNlIG9mIHRoZSBpbnB1dCBpbWFnZS5cbiAgICAgKiBAcGFyYW0gIHtpbWdMYW5kTWFya1JlcX0gaW1nTGFuZE1hcmtSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBpbWFnZSBsYW5kbWFyayBhbmFseXNlci5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPEltYWdlTGFuZG1hcmtBbmFseXNlcj5cbiAgICAgKi9cbiAgICBpbWdMYW5kTWFya0FuYWx5c2VyKFxuICAgICAgICBpbWdMYW5kTWFya1JlcTogaW1nTGFuZE1hcmtSZXFcbiAgICApOiBQcm9taXNlPE1MUmVtb3RlTGFuZG1hcms+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3AgaW1hZ2UgbGFuZG1hcmsgYW5hbHlzZXIgc2VydmljZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBpbWdMYW5kTWFya0FuYWx5c2VyU3RvcCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhlIG9iamVjdCBkZXRlY3Rpb24gc2VydmljZSBjYW4gZGV0ZWN0IGFuZCB0cmFjayBtdWx0aXBsZSBvYmplY3RzIGluIGFuIGltYWdlLlxuICAgICAqIEBwYXJhbSAge29iamVjdFJlcX0gb2JqZWN0UmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3Igb2JqZWN0IGRldGVjdGlvbi5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPEltYWdlT2JqZWN0QW5hbHlzZXI+XG4gICAgICovXG4gICAgb2JqZWN0QW5hbHlzZXIob2JqZWN0UmVxOiBvYmplY3RSZXEpOiBQcm9taXNlPE1MT2JqZWN0PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGUgc2NlbmUgZGV0ZWN0aW9uIHNlcnZpY2UgY2FuIGNsYXNzaWZ5IHRoZSBzY2VuYXJpbyBjb250ZW50IG9mIGltYWdlcyBhbmQgYWRkIGxhYmVscywgc3VjaCBhcyBvdXRkb29yIHNjZW5lcnksIGluZG9vciBwbGFjZXMsIGFuZCBidWlsZGluZ3MsIHRvIGhlbHAgdW5kZXJzdGFuZCB0aGUgaW1hZ2UgY29udGVudC5cbiAgICAgKiAgIEBwYXJhbSAge3N0aWxsU2NlbmVSZXF9IHN0aWxsU2NlbmVSZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBTY2VuZSBhbmFseXNlci5cbiAgICAgKiAgQHJldHVybnMgUHJvbWlzZSA8YW55PlxuICAgICAqL1xuICAgIHN0aWxsU2NlbmVBbmFseXNlcihcbiAgICAgICAgc3RpbGxTY2VuZVJlcTogc3RpbGxTY2VuZVJlcVxuICAgICk6IFByb21pc2U8TUxTY2VuZURldGVjdGlvblJlc3VsdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICBUaGlzIHNlcnZpY2UgY2FuIGF1dG9tYXRpY2FsbHkgaWRlbnRpZnkgdGhlIGxvY2F0aW9uIG9mIGEgZG9jdW1lbnQgaW4gYW4gaW1hZ2UgYW5kIGFkanVzdCB0aGUgc2hvb3RpbmcgYW5nbGUgdG8gdGhlIGFuZ2xlIGZhY2luZyB0aGUgZG9jdW1lbnQsIGV2ZW4gaWYgdGhlIGRvY3VtZW50IGlzIHRpbHRlZC5cbiAgICogQHBhcmFtICB7ZG9jdW1lbnRTa2V3Q29ycmVjdGlvblJlcX0gZG9jdW1lbnRTa2V3Q29ycmVjdGlvblJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQgZm9yIGRvY3VtZW50IHNrZXcgY29ycmVjdGlvbi5cbiAgICogQHJldHVybnMgUHJvbWlzZTxEb2N1bWVudFNrZXdBbmFseXNlcj5cbiAgICovXG4gICAgZG9jdW1lbnRTa2V3Q29ycmVjdGlvbkFuYWx5c2VyKFxuICAgICAgICBkb2N1bWVudFNrZXdDb3JyZWN0aW9uUmVxOiBkb2N1bWVudFNrZXdDb3JyZWN0aW9uUmVxXG4gICAgKTogUHJvbWlzZTxNTERvY3VtZW50U2tld0RldGVjdFJlc3VsdD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBzZXJ2aWNlIGNhbiB6b29tIGluIGFuIGltYWdlIHRoYXQgY29udGFpbnMgdGV4dCBhbmQgc2lnbmlmaWNhbnRseSBpbXByb3ZlIHRoZSBkZWZpbml0aW9uIG9mIHRleHQgaW4gdGhlIGltYWdlLlxuICAgICAqIEBwYXJhbSAge3RleHRJbWFnZVN1cGVyUmVzb2x1dGlvblJlcX0gdGV4dEltYWdlU3VwZXJSZXNvbHV0aW9uUmVxIFJlcHJlc2VudHMgdGhlIHBhcmFtZXRlciByZXF1aXJlZCBmb3IgVGV4dCBJbWFnZSBTdXBlciBSZXNvbHV0aW9uLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHRleHRJbWFnZVN1cGVyUmVzb2x1dGlvbihcbiAgICAgICAgdGV4dEltYWdlU3VwZXJSZXNvbHV0aW9uUmVxOiB0ZXh0SW1hZ2VTdXBlclJlc29sdXRpb25SZXFcbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBzZXJ2aWNlIHByb3ZpZGVzIHRoZSAxeCBzdXBlci1yZXNvbHV0aW9uIGNhcGFiaWxpdGllcy4gMXggc3VwZXItcmVzb2x1dGlvbiByZW1vdmVzIHRoZSBjb21wcmVzc2lvbiBub2lzZS5cbiAgICAgKiBAcGFyYW0gIHtpbWFnZVN1cGVyUmVzb2x1dGlvblJlcX0gaW1hZ2VTdXBlclJlc29sdXRpb25SZXEgUmVwcmVzZW50cyB0aGUgcGFyYW1ldGVyIHJlcXVpcmVkIGZvciBJbWFnZSBTdXBlciBSZXNvbHV0aW9uLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGltYWdlU3VwZXJSZXNvbHV0aW9uKFxuICAgICAgICBpbWFnZVN1cGVyUmVzb2x1dGlvblJlcTogaW1hZ2VTdXBlclJlc29sdXRpb25SZXFcbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogUmVwcmVzZW50cyB0aGUgaW1hZ2UtYmFzZWQgcHJvZHVjdCBkZXRlY3Rpb24gQVBJIG9mIEhVQVdFSSBNTCBLaXQuXG4gICAgICogQHBhcmFtICB7cHJvZHVjdFJlcX0gcHJvZHVjdFJlcSBSZXByZXNlbnRzIHRoZSBwYXJhbWV0ZXIgcmVxdWlyZWQuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgcHJvZHVjdFZpc2lvbkFuYWx5c2VyKHByb2R1Y3RSZXE6IHByb2R1Y3RSZXEpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcCBvYmplY3QgYW5hbHlzZXIgc2VydmljZS5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBvYmplY3RBbmFseXNlclN0b3AoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3AgcHJvZHVjdCBhbmFseXNlciBzZXJ2aWNlLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHByb2R1Y3RBbmFseXNlclN0b3AoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3AgZG9jdW1lbnQgc2tldyBhbmFseXNlciBzZXJ2aWNlLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGRvY1NrZXdBbmFseXNlclN0b3AoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3AgVElTUiBhbmFseXNlciBzZXJ2aWNlLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIFRJU1JBbmFseXNlclN0b3AoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3AgSVNSIGFuYWx5c2VyIHNlcnZpY2UuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgSVNSQW5hbHlzZXJTdG9wKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wIHNjZW5lIGFuYWx5c2VyIHNlcnZpY2UuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgc3RpbGxTY2VuZUFuYWx5c2VyU3RvcCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJucyBpbWFnZSBjbGFzc2lmaWNhdGlvbiBzZXR0aW5ncy5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBnZXRJbWFnZUNsYXNzaWZpY2F0aW9uQW5hbHlzZXJTZXR0aW5nKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICAvKipcbiAgICAgKiAgVGhpcyBtZXRob2QgcmV0dXJucyBJU1Igc2V0dGluZ3MuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgZ2V0SVNSU2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogIFRoaXMgbWV0aG9kIHJldHVybnMgc2VnbWVudGF0aW9uIHNldHRpbmdzLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGdldFNlZ21lbnRhdGlvblNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIC8qKlxuICAgICAqICBUaGlzIG1ldGhvZCByZXR1cm5zIGxhbmRtYXJrIHNldHRpbmdzLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGdldExhbmRtYXJrU2V0dGluZygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgLyoqXG4gICAgICogIFRoaXMgbWV0aG9kIHJldHVybnMgb2JqZWN0IHNldHRpbmdzLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIGdldE9iamVjdFNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1MTGl2ZSB7XG4gICAgcHJpdmF0ZSBhclNjZW5lOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogc3RyaW5nLCBkaXZJZDogc3RyaW5nKSB7XG4gICAgICAgIGlmIChzY2VuZSA9PT0gXCJsaXZlRW5naW5lQW5hbHlzZXJcIikge1xuICAgICAgICAgICAgdGhpcy5hclNjZW5lID0gbmV3IChITVNNTEltYWdlUGx1Z2luLmdldFBsdWdpbigpLmxpdmVFbmdpbmVBbmFseXNlcikoZGl2SWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzY2VuZSA9PT0gXCJsaXZlQ29tcG9zaXRlQW5hbHlzZXJcIikge1xuICAgICAgICAgICAgdGhpcy5hclNjZW5lID0gbmV3IChITVNNTEltYWdlUGx1Z2luLmdldFBsdWdpbigpLmxpdmVDb21wb3NpdGVBbmFseXNlcikoZGl2SWQpO1xuICAgICAgICB9ICAgICAgIFxuICAgIH1cblxuICAgIG9uKGV2ZW50TmFtZTogRXZlbnRzLCBjYWxsOiAodmFsdWU6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICByZXR1cm4gdGhpcy5hclNjZW5lLm9uKGV2ZW50TmFtZSwgY2FsbCk7XG4gICAgfVxuICAgIHN0YXJ0QVJTY2VuZShjb25maWc/OiBNTGNvbmZpZywgYm91bmRzPzogTUxCb3VuZHMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJTY2VuZS5zdGFydEFSU2NlbmUoY29uZmlnLCBib3VuZHMpO1xuICAgIH1cbiAgICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hclNjZW5lLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgc2V0Q29uZmlnKGNvbmZpZzogTUxjb25maWcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJTY2VuZS5zZXRDb25maWcoY29uZmlnKTtcbiAgICB9XG4gICAgc2Nyb2xsKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hclNjZW5lLnNjcm9sbCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIGxpdmVFbmdpbmVBbmFseXNlciBleHRlbmRzIE1MTGl2ZSB7XG4gICAgY29uc3RydWN0b3IoZGl2SWQ6IHN0cmluZykge1xuICAgICAgICBzdXBlcihcImxpdmVFbmdpbmVBbmFseXNlclwiLCBkaXZJZCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgbGl2ZUNvbXBvc2l0ZUFuYWx5c2VyIGV4dGVuZHMgTUxMaXZlIHtcbiAgICBjb25zdHJ1Y3RvcihkaXZJZDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKFwibGl2ZUNvbXBvc2l0ZUFuYWx5c2VyXCIsIGRpdklkKTtcbiAgICB9XG59XG5cbi8vIEFQSSBLRVlcblxuZXhwb3J0IGludGVyZmFjZSBjb25maWdSZXEge1xuICAgIGFwaUtleTogc3RyaW5nO1xuICAgIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgYXBwU2V0dGluZ1JlcSB7XG4gICAgYXBpS2V5Pzogc3RyaW5nIHwgbnVsbDtcbiAgICBhcHBsaWNhdGlvbklkPzogc3RyaW5nIHwgbnVsbDtcbiAgICBjZXJ0RmluZ2VycHJpbnQ/OiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MQm91bmRzIHtcbiAgICBtYXJnaW5Ub3A/OiBudW1iZXI7XG4gICAgbWFyZ2luQm90dG9tPzogbnVtYmVyO1xuICAgIG1hcmdpbkxlZnQ/OiBudW1iZXI7XG4gICAgbWFyZ2luUmlnaHQ/OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIE1MY29uZmlnIHtcbiAgICBsZW5zRW5naW5lUmVxOiBsZW5zRW5naW5lUmVxO1xufVxuZXhwb3J0IGludGVyZmFjZSBsZW5zRW5naW5lUmVxIHtcbiAgICBhbmFseXplck5hbWU6IE1MQW5hbHl6ZXJOYW1lO1xuICAgIGxlbnNFbmdpbmVTZXR0aW5nPzogTUxMZW5zRW5naW5lU2V0dGluZztcbiAgICBncmFwaGljU2V0dGluZz86XG4gICAgICAgIHwgc2NlbmVTZXR0aW5nc1xuICAgICAgICB8IE9iamVjdEdyYXBoaWNTZXR0aW5nXG4gICAgICAgIHwgbnVsbDtcbiAgICBhbmFseXplclNldHRpbmc/OlxuICAgICAgICB8IG1sSW1hZ2VTZWdtZW50YXRpb25TZXR0aW5nXG4gICAgICAgIHwgbWxPYmplY3RBbmFseXNlclNldHRpbmdcbiAgICAgICAgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBNTGNvbmZpZ0NvbXBvc2l0ZSB7XG4gICAgbGVuc0VuZ2luZVJlcTogY29tcG9zaXRlQW5hbHlzZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIGNvbXBvc2l0ZUFuYWx5c2VyIHtcbiAgICBhbmFseXplck5hbWVzPzogQXJyYXk8TUxDb21wb3NpdGVBbmFseXplck5hbWU+O1xuICAgIGxlbnNFbmdpbmVTZXR0aW5nPzogTUxMZW5zRW5naW5lU2V0dGluZztcbiAgICBncmFwaGljU2V0dGluZz86XG4gICAgICAgIHwgQ29tcG9zaXRlRmFjZUdyYXBoaWNTZXR0aW5nXG4gICAgICAgIHwgQ29tcG9zaXRlU2NlbmVTZXR0aW5nc1xuICAgICAgICB8IENvbXBvc2l0ZUhhbmRrZXlHcmFwaGljU2V0dGluZ1xuICAgICAgICB8IENvbXBvc2l0ZVNrZWxldG9uR3JhcGhpY1NldHRpbmdcbiAgICAgICAgfCBDb21wb3NpdGVPYmplY3RHcmFwaGljU2V0dGluZ1xuICAgICAgICB8IG51bGw7XG4gICAgYW5hbHl6ZXJTZXR0aW5nPzpcbiAgICAgICAgfCBDb21wb3NpdGVGYWNlQW5hbHl6ZXJTZXR0aW5nXG4gICAgICAgIHwgQ29tcG9zaXRlRmFjZVZlcmlmaWNhdGlvbkFuYWx5emVyU2V0dGluZ1xuICAgICAgICB8IENvbXBvc2l0ZUhhbmRLZXlwb2ludFNldHRpbmdcbiAgICAgICAgfCBDb21wb3NpdGVJbWFnZVNlZ21lbnRhdGlvblNldHRpbmdcbiAgICAgICAgfCBDb21wb3NpdGVPYmplY3RBbmFseXNlclNldHRpbmdcbiAgICAgICAgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvc2l0ZUhhbmRLZXlwb2ludFNldHRpbmcge1xuICAgIHNjZW5lVHlwZT86IEhhbmRrZXlQb2ludENvbmZpZyB8IG51bGw7XG4gICAgbWF4SGFuZFJlc3VsdHM/OiBudW1iZXIgfCBudWxsO1xufVxuZXhwb3J0IGVudW0gSGFuZGtleVBvaW50Q29uZmlnIHtcbiAgICBUWVBFX0FMTCA9IDAsXG4gICAgVFlQRV9LRVlQT0lOVF9PTkxZID0gMSxcbiAgICBUWVBFX1JFQ1RfT05MWSA9IDIsXG4gICAgTUFYX0hBTkRTX05VTSA9IDEwLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvc2l0ZUZhY2VWZXJpZmljYXRpb25BbmFseXplclNldHRpbmcge1xuICAgIG1heEZhY2VEZXRjdGVkOiBudW1iZXIgfCBudWxsO1xufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9zaXRlRmFjZUdyYXBoaWNTZXR0aW5nIHtcbiAgICBmYWNlUG9zaXRpb25QYWludFNldHRpbmc/OiBGYWNlUG9zaXRpb25QYWludFNldHRpbmcgfCBudWxsO1xuICAgIHRleHRQYWludFNldHRpbmc/OiBUZXh0UGFpbnRTZXR0aW5nRmFjZSB8IG51bGw7XG4gICAgZmFjZUZlYXR1cmVQYWludFRleHRTZXR0aW5nPzogRmFjZUZlYXR1cmVQYWludFRleHRTZXR0aW5nIHwgbnVsbDtcbiAgICBrZXlwb2ludFBhaW50U2V0dGluZz86IEtleXBvaW50UGFpbnRTZXR0aW5nIHwgbnVsbDtcbiAgICBib3hQYWludFNldHRpbmc/OiBCb3hQYWludFNldHRpbmdGYWNlIHwgbnVsbDtcbiAgICBmYWNlUGFpbnRTZXR0aW5nPzogRmFjZVBhaW50U2V0dGluZyB8IG51bGw7XG4gICAgZXllUGFpbnRTZXR0aW5nPzogRXllUGFpbnRTZXR0aW5nIHwgbnVsbDtcbiAgICBleWVicm93UGFpbnRTZXR0aW5nPzogRXllYnJvd1BhaW50U2V0dGluZyB8IG51bGw7XG4gICAgbm9zZVBhaW50U2V0dGluZz86IE5vc2VQYWludFNldHRpbmcgfCBudWxsO1xuICAgIG5vc2VCYXNlUGFpbnRTZXR0aW5nPzogTm9zZUJhc2VQYWludFNldHRpbmcgfCBudWxsO1xuICAgIGxpcFBhaW50U2V0dGluZz86IExpcFBhaW50U2V0dGluZyB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIExpcFBhaW50U2V0dGluZyB7XG4gICAgY29sb3I/OiBTdHJpbmcgfCBDb2xvcnMgfCBudWxsO1xuICAgIHN0eWxlPzogUmVjdFN0eWxlIHwgbnVsbDtcbiAgICBzdHJva2VXaWR0aDogTnVtYmVyIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTm9zZVBhaW50U2V0dGluZyB7XG4gICAgY29sb3I/OiBTdHJpbmcgfCBDb2xvcnMgfCBudWxsO1xuICAgIHN0eWxlPzogUmVjdFN0eWxlIHwgbnVsbDtcbiAgICBzdHJva2VXaWR0aD86IE51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTm9zZUJhc2VQYWludFNldHRpbmcge1xuICAgIGNvbG9yPzogU3RyaW5nIHwgQ29sb3JzIHwgbnVsbDtcbiAgICBzdHlsZT86IFJlY3RTdHlsZSB8IG51bGw7XG4gICAgc3Ryb2tlV2lkdGg/OiBOdW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIEV5ZWJyb3dQYWludFNldHRpbmcge1xuICAgIGNvbG9yPzogU3RyaW5nIHwgQ29sb3JzIHwgbnVsbDtcbiAgICBzdHlsZT86IFJlY3RTdHlsZTtcbiAgICBzdHJva2VXaWR0aD86IE51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRXllUGFpbnRTZXR0aW5nIHtcbiAgICBjb2xvcj86IFN0cmluZyB8IENvbG9ycztcbiAgICBzdHlsZT86IFJlY3RTdHlsZSB8IENvbG9ycztcbiAgICBzdHJva2VXaWR0aDogTnVtYmVyIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRmFjZVBhaW50U2V0dGluZyB7XG4gICAgY29sb3I/OiBTdHJpbmcgfCBDb2xvcnMgfCBudWxsO1xuICAgIHN0eWxlPzogUmVjdFN0eWxlIHwgbnVsbDtcbiAgICBzdHJva2VXaWR0aDogTnVtYmVyIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQm94UGFpbnRTZXR0aW5nRmFjZSB7XG4gICAgY29sb3I/OiBTdHJpbmcgfCBDb2xvcnMgfCBudWxsO1xuICAgIHN0eWxlPzogUmVjdFN0eWxlIHwgbnVsbDtcbiAgICBzdHJva2VXaWR0aD86IE51bWJlciB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIEtleXBvaW50UGFpbnRTZXR0aW5nIHtcbiAgICBjb2xvcj86IENvbG9ycyB8IENvbG9ycyB8IG51bGw7XG4gICAgc3R5bGU/OiBSZWN0U3R5bGUgfCBudWxsO1xuICAgIHRleHRTaXplOiBOdW1iZXIgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZhY2VGZWF0dXJlUGFpbnRUZXh0U2V0dGluZyB7XG4gICAgY29sb3I/OiBDb2xvcnMgfCBudWxsO1xuICAgIHRleHRTaXplOiBOdW1iZXIgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBGYWNlUG9zaXRpb25QYWludFNldHRpbmcge1xuICAgIGNvbG9yPzogQ29sb3JzIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dFBhaW50U2V0dGluZ0ZhY2Uge1xuICAgIGNvbG9yPzogQ29sb3JzIHwgbnVsbDtcbiAgICB0ZXh0U2l6ZT86IE51bWJlciB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9zaXRlSGFuZGtleUdyYXBoaWNTZXR0aW5nIHtcbiAgICBpZFBhaW50bmV3U2V0dGluZz86IElkUGFpbnRuZXdTZXR0aW5nIHwgbnVsbDtcbiAgICByZWN0UGFpbnRTZXR0aW5nPzogUmVjdFBhaW50U2V0dGluZyB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIElkUGFpbnRuZXdTZXR0aW5nIHtcbiAgICBjb2xvcj86IENvbG9ycyB8IG51bGw7XG4gICAgdGV4dFNpemU/OiBOdW1iZXIgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBSZWN0UGFpbnRTZXR0aW5nIHtcbiAgICBjb2xvcj86IENvbG9ycyB8IG51bGw7XG4gICAgc3R5bGU/OiBSZWN0U3R5bGUgfCBudWxsO1xuICAgIGJveFN0cm9rZVdpZHRoPzogTnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wb3NpdGVTa2VsZXRvbkdyYXBoaWNTZXR0aW5nIHtcbiAgICBjaXJjbGVQYWludFNldHRpbmc/OiBjaXJjbGVQYWludFNldHRpbmcgfCBudWxsO1xuICAgIGxpbmVQYWludFNldHRpbmc/OiBsaW5lUGFpbnRTZXR0aW5nIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgY2lyY2xlUGFpbnRTZXR0aW5nIHtcbiAgICBjb2xvcj86IENvbG9ycyB8IG51bGw7XG4gICAgc3R5bGU/OiBSZWN0U3R5bGUgfCBudWxsO1xuICAgIGFudGlBbGlhcz86IGJvb2xlYW4gfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBsaW5lUGFpbnRTZXR0aW5nIHtcbiAgICBjb2xvcj86IENvbG9ycyB8IG51bGw7XG4gICAgc3R5bGU/OiBSZWN0U3R5bGUgfCBudWxsO1xuICAgIHN0cm9rZVdpZHRoPzogTnVtYmVyIHwgbnVsbDtcbiAgICBhbnRpQWxpYXM/OiBcbiAgICBib29sZWFuIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wb3NpdGVGYWNlQW5hbHl6ZXJTZXR0aW5nIHtcbiAgICBmZWF0dXJlVHlwZT86IE1MRmFjZVNldHRpbmcgfCBudWxsO1xuICAgIGtleVBvaW50VHlwZT86IE1MRmFjZVNldHRpbmcgfCBudWxsO1xuICAgIG1heFNpemVGYWNlT25seT86IGJvb2xlYW4gfCBudWxsO1xuICAgIG1pbkZhY2VQcm9wb3J0aW9uPzogbnVtYmVyIHwgbnVsbDtcbiAgICBwZXJmb3JtYW5jZVR5cGU/OiBNTEZhY2VTZXR0aW5nIHwgbnVsbDtcbiAgICBwb3NlRGlzYWJsZWQ/OiBib29sZWFuIHwgbnVsbDtcbiAgICBzaGFwZVR5cGU/OiBNTEZhY2VTZXR0aW5nIHwgbnVsbDtcbiAgICB0cmFjaW5nQWxsb3dlZD86IGJvb2xlYW4gfCBudWxsO1xuICAgIHRyYWNpbmdNb2RlPzogbnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGVudW0gTUxGYWNlU2V0dGluZyB7XG4gICAgTU9ERV9UUkFDSU5HX0ZBU1QgPSAxLFxuICAgIE1PREVfVFJBQ0lOR19ST0JVU1QgPSAyLFxuICAgIFRZUEVfRkVBVFVSRVMgPSAxLFxuICAgIFRZUEVfRkVBVFVSRV9BR0UgPSAyNTYsXG4gICAgVFlQRV9GRUFUVVJFX0JFQVJEID0gMzIsXG4gICAgVFlQRV9GRUFUVVJFX0VNT1RJT04gPSA0LFxuICAgIFRZUEVfRkVBVFVSRV9FWUVHTEFTUyA9IDgsXG4gICAgVFlQRV9GRUFUVVJFX0dFTkRBUiA9IDEyOCxcbiAgICBUWVBFX0ZFQVRVUkVfSEFUID0gMTYsXG4gICAgVFlQRV9GRUFUVVJFX09QRU5DTE9TRUVZRSA9IDY0LFxuICAgIFRZUEVfS0VZUE9JTlRTID0gMSxcbiAgICBUWVBFX1BSRUNJU0lPTiA9IDEsXG4gICAgVFlQRV9TSEFQRVMgPSAyLFxuICAgIFRZUEVfU1BFRUQgPSAyLFxuICAgIFRZUEVfVU5TVVBQT1JUX0ZFQVRVUkVTID0gMixcbiAgICBUWVBFX1VOU1VQUE9SVF9LRVlQT0lOVFMgPSAwLFxuICAgIFRZUEVfVU5TVVBQT1JUX1NIQVBFUyA9IDMsXG4gICAgVFlQRV9CT1RUT01fT0ZfTU9VVEggPSAxLFxuICAgIFRZUEVfTEVGVF9DSEVFSyA9IDIsXG4gICAgVFlQRV9MRUZUX0VBUiA9IDMsXG4gICAgVFlQRV9MRUZUX1NJREVfT0ZfTU9VVEggPSA2LFxuICAgIFRZUEVfUklHSFRfQ0hFRUsgPSA4LFxuICAgIFRZUEVfUklHSFRfRUFSID0gOSxcbiAgICBUWVBFX1JJR0hUX1NJREVfT0ZfTU9VVEggPSAxMixcbiAgICBUWVBFX1RJUF9PRl9MRUZUX0VBUiA9IDQsXG4gICAgVFlQRV9USVBfT0ZfTk9TRSA9IDcsXG4gICAgVFlQRV9USVBfT0ZfUklHSFRfRUFSID0gMTAsXG4gICAgVFlQRV9BTEwgPSAwLFxuICAgIFRZUEVfQk9UVE9NX09GX0xFRlRfRVlFQlJPVyA9IDQsXG4gICAgVFlQRV9CT1RUT01fT0ZfTE9XRVJfTElQID0gOCxcbiAgICBUWVBFX0JPVFRPTV9PRl9OT1NFID0gMTIsXG4gICAgVFlQRV9CT1RUT01fT0ZfUklHSFRfRVlFQlJPVyA9IDUsXG4gICAgVFlQRV9CT1RUT01fT0ZfVVBQRVJfTElQID0gMTAsXG4gICAgVFlQRV9CUklER0VfT0ZfTk9TRSA9IDEzLFxuICAgIFRZUEVfRkFDRSA9IDEsXG4gICAgVFlQRV9UT1BfT0ZfTEVGVF9FWUVCUk9XID0gNixcbiAgICBUWVBFX1RPUF9PRl9MT1dFUl9MSVAgPSA5LFxuICAgIFRZUEVfVE9QX09GX1JJR0hUX0VZRUJST1cgPSA3LFxuICAgIFRZUEVfVE9QX09GX1VQUEVSX0xJUCA9IDExLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MTGVuc0VuZ2luZVNldHRpbmcge1xuICAgIGZwcz86IG51bWJlciB8IG51bGw7XG4gICAgZGlzcGxheURpbWVuc2lvbkk/OiBudW1iZXIgfCBudWxsO1xuICAgIGRpc3BsYXlEaW1lbnNpb25JMT86IG51bWJlciB8IG51bGw7XG4gICAgbGVuc1R5cGU/OiBNTExlbnNUeXBlIHwgbnVsbDtcbiAgICBlbmFibGVGb2N1cz86IGJvb2xlYW4gfCBudWxsO1xuICAgIGZsYXNoTW9kZT86IE1MRmxhc2hNb2RlIHwgbnVsbDtcbn1cbmV4cG9ydCBlbnVtIE1MRmxhc2hNb2RlIHtcbiAgICBBVVRPID0gXCJhdXRvXCIsXG4gICAgT04gPSBcIm9uXCIsXG4gICAgT0ZGID0gXCJvZmZcIixcbn1cbmV4cG9ydCBlbnVtIE1MTGVuc1R5cGUge1xuICAgIEJBQ0tfTEVOUyA9IDAsXG4gICAgRlJPTlRfTEVOUyA9IDEsXG59XG5cbmV4cG9ydCBlbnVtIE1MU3RpbGxDb21wb3NpdGVyTmFtZSB7XG4gICAgRkFDRSA9IFwiRkFDRVwiLFxuICAgIEhBTkQgPSBcIkhBTkRcIixcbiAgICBTS0VMRVRPTiA9IFwiU0tFTEVUT05cIixcbiAgICBURVhUID0gXCJURVhUXCIsXG4gICAgT0JKRUNUID0gXCJPQkpFQ1RcIixcbiAgICBDTEFTU0lGSUNBVElPTiA9IFwiQ0xBU1NJRklDQVRJT05cIixcbn1cbmV4cG9ydCBlbnVtIE1MQW5hbHl6ZXJOYW1lIHtcbiAgICBMSVZFT0JKRUNUID0gXCJPQkpFQ1RcIixcbiAgICBMSVZFQ0xBU1NJRklDQVRJT04gPSBcIkNMQVNTSUZJQ0FUSU9OXCIsXG4gICAgTElWRVNDRU5FID0gXCJTQ0VORVwiLFxuICAgIExJVkVTRUdNRU5UQVRJT04gPSBcIlNFR01FTlRBVElPTlwiXG59XG5leHBvcnQgZW51bSBNTENvbXBvc2l0ZUFuYWx5emVyTmFtZSB7XG4gICAgTElWRUZBQ0UgPSBcIkZBQ0VcIixcbiAgICBMSVZFRkFDRTNEID0gXCJGQUNFM0RcIixcbiAgICBMSVZFRkFDRU1BWCA9IFwiRkFDRU1BWFwiLFxuICAgIExJVkVIQU5EID0gXCJIQU5EXCIsXG4gICAgTElWRVNLRUxFVE9OID0gXCJTS0VMRVRPTlwiLFxuICAgIExJVkVPQkpFQ1QgPSBcIk9CSkVDVFwiLFxuICAgIExJVkVDTEFTU0lGSUNBVElPTiA9IFwiQ0xBU1NJRklDQVRJT05cIixcbiAgICBMSVZFU0NFTkUgPSBcIlNDRU5FXCIsXG4gICAgTElWRVRFWFQgPSBcIlRFWFRcIixcbiAgICBMSVZFR0VTVFVSRSA9IFwiR0VTVFVSRVwiLFxufVxuZXhwb3J0IGludGVyZmFjZSBkb1pvb21SZXEge1xuICAgIHNjYWxlPzogbnVtYmVyIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgbWxGcmFtZVJlcSB7XG4gICAgYWN0aW9uTmFtZTogTUxGcmFtZTtcbiAgICBmaWxlUGF0aDogYW55O1xufVxuZXhwb3J0IGVudW0gTUxGcmFtZSB7XG4gICAgZ2V0UHJldmlld0JpdG1hcCA9IFwiZ2V0UHJldmlld0JpdG1hcFwiLFxuICAgIHJlYWRCaXRtYXAgPSBcInJlYWRCaXRtYXBcIixcbiAgICByb3RhdGUgPSBcInJvdGF0ZVwiLFxuICAgIFNDUkVFTl9GSVJTVF9RVUFEUkFOVCA9IDAsXG4gICAgU0NSRUVOX1NFQ09ORF9RVUFEUkFOVCA9IDEsXG4gICAgU0NSRUVOX1RISVJEX1FVQURSQU5UID0gMixcbiAgICBTQ1JFRU5fRk9VUlRIX1FVQURSQU5UID0gMyxcbn1cblxuLy8gQ09NUE9TSVRFXG5cbmV4cG9ydCBpbnRlcmZhY2UgY29tcG9zaXRlQW5hbHlzZXJSZXEge1xuICAgIGNvbXBvc2l0ZUFuYWx5c2VyQ29uZmlnOiBjb21wb3NpdGVBbmFseXNlckNvbmZpZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgY29tcG9zaXRlQW5hbHlzZXJDb25maWcge1xuICAgIGZpbGVQYXRoOiBhbnk7XG4gICAgYW5hbHl6ZXJOYW1lcz86IEFycmF5PE1MU3RpbGxDb21wb3NpdGVyTmFtZT47XG4gICAgYW5hbHl6ZXJTZXR0aW5nPzpcbiAgICAgICAgfCBDb21wb3NpdGVGYWNlQW5hbHl6ZXJTZXR0aW5nXG4gICAgICAgIHwgQ29tcG9zaXRlRmFjZVZlcmlmaWNhdGlvbkFuYWx5emVyU2V0dGluZ1xuICAgICAgICB8IENvbXBvc2l0ZUhhbmRLZXlwb2ludFNldHRpbmdcbiAgICAgICAgfCBDb21wb3NpdGVJbWFnZVNlZ21lbnRhdGlvblNldHRpbmdcbiAgICAgICAgfCBDb21wb3NpdGVPYmplY3RBbmFseXNlclNldHRpbmdcbiAgICAgICAgfCBudWxsO1xufSAgIFxuXG4vL0NsYXNzaWZ5XG5cbmV4cG9ydCBpbnRlcmZhY2UgbG9jYWxJbWFnZUNsYXNzaWZpY2F0aW9uUmVxIHtcbiAgICBvY3JUeXBlOiBNTEltYWdlQ2xhc3NpZmljYXRpb25Db25maWcgfCBudWxsO1xuICAgIGFuYWx5c2VNb2RlPzogbnVtYmVyIHwgbnVsbDtcbiAgICBsb2NhbENsYXNzaWZpY2F0aW9uQW5hbHl6ZXJTZXR0aW5nPzogTG9jYWxDbGFzc2lmaWNhdGlvbkFuYWx5emVyU2V0dGluZyB8IG51bGw7XG4gICAgZmlsZVBhdGg6IGFueTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYWxDbGFzc2lmaWNhdGlvbkFuYWx5emVyU2V0dGluZyB7XG4gICAgcG9zc2liaWxpdHk/OiBudW1iZXIgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIHJlbW90ZUltYWdlQ2xhc3NpZmljYXRpb25SZXEge1xuICAgIG9jclR5cGU6IE1MSW1hZ2VDbGFzc2lmaWNhdGlvbkNvbmZpZztcbiAgICBhbmFseXNlTW9kZT86IG51bWJlcjtcbiAgICByZW1vdGVDbGFzc2lmaWNhdGlvbkFuYWx5emVyU2V0dGluZz86IFJlbW90ZUNsYXNzaWZpY2F0aW9uQW5hbHl6ZXJTZXR0aW5nIHwgbnVsbDtcbiAgICBmaWxlUGF0aDogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlbW90ZUNsYXNzaWZpY2F0aW9uQW5hbHl6ZXJTZXR0aW5nIHtcbiAgICBtYXhSZXN1bHRzPzogbnVtYmVyIHwgbnVsbDtcbiAgICBwb3NzaWJpbGl0eT86IG51bWJlciB8IG51bGw7XG4gICAgaXNFbmFibGVGaW5nZXJwcmludFZlcmlmaWNhdGlvbj86IGJvb2xlYW4gfCBudWxsO1xufVxuXG5leHBvcnQgZW51bSBNTEltYWdlQ2xhc3NpZmljYXRpb25Db25maWcge1xuICAgIFRZUEVfTE9DQUwgPSAwLFxuICAgIFRZUEVfUkVNT1RFID0gMSxcbn1cblxuLy9DdXN0b20gTW9kZWwgRG93bmxvYWRcblxuZXhwb3J0IGludGVyZmFjZSBkb3dubG9hZE1vZGVsUmVxIHtcbiAgICBkZXRlY3RUeXBlOiAxO1xuICAgIGZpbGVQYXRoOiBhbnk7XG4gICAgZG93bmxvYWRTdHJhdGVneVNldHRpbmc/OiBEb3dubG9hZFN0cmF0ZWd5U2V0dGluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG93bmxvYWRTdHJhdGVneVNldHRpbmcge1xuICAgIGlzQ2hhcmdpbmdOZWVkOiBib29sZWFuIHwgbnVsbDtcbiAgICBpc1dpZmlOZWVkOiBib29sZWFuIHwgbnVsbDtcbiAgICBpc0RldmljZUlkbGVOZWVkOiBib29sZWFuIHwgbnVsbDtcbiAgICBzZXRSZWdpb24/OiBEb3dubG9hZFN0cmF0ZWd5Q3VzdG9tIHwgbnVsbDtcbn1cbmV4cG9ydCBlbnVtIERvd25sb2FkU3RyYXRlZ3lDdXN0b20ge1xuICAgIFJFR0lPTl9EUl9DSElOQSA9IDEwMDIsXG4gICAgUkVHSU9OX0RSX0FGSUxBID0gMTAwMyxcbiAgICBSRUdJT05fRFJfRVVST1BFID0gMTAwNCxcbiAgICBSRUdJT05fRFJfUlVTU0lBID0gMTAwNSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBvd25DdXN0b21Nb2RlbFJlcSB7XG4gICAgZGV0ZWN0VHlwZTogbnVtYmVyO1xuICAgIGZpbGVQYXRoOiBhbnk7XG4gICAgbW9kZWxGdWxsTmFtZTogc3RyaW5nIHwgbnVsbDtcbiAgICBtb2RlbE5hbWU6IHN0cmluZyB8IG51bGw7XG4gICAgbGFiZWxGaWxlTmFtZTogc3RyaW5nIHwgbnVsbDtcbiAgICBiaXRtYXBIZWlnaHQ6IG51bWJlciB8IG51bGw7XG4gICAgYml0bWFwV2lkdGg6IG51bWJlciB8IG51bGw7XG4gICAgb3V0UHV0U2l6ZTogbnVtYmVyIHwgbnVsbDtcbn1cblxuLy9Eb2N1bWVudCBTa2V3IENvcnJlY3Rpb25cblxuZXhwb3J0IGludGVyZmFjZSBkb2N1bWVudFNrZXdDb3JyZWN0aW9uUmVxIHtcbiAgICBmaWxlUGF0aDogYW55O1xuICAgIHN5bmNNb2RlPzogc3luY01vZGUgfCBudWxsO1xufVxuXG5leHBvcnQgZW51bSBzeW5jTW9kZSB7XG4gICAgU1lOQ19UWVBFID0gMSxcbiAgICBBU1lOQ19UWVBFID0gMCxcbn1cblxuLy9JbWFnZSBTdXBlciBSZXNvbHV0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgaW1hZ2VTdXBlclJlc29sdXRpb25SZXEge1xuICAgIGZpbGVQYXRoOiBhbnk7XG4gICAgaW1nU3VwZXJSZXNvbHV0aW9uU2V0dGluZz86IEltZ1N1cGVyUmVzb2x1dGlvblNldHRpbmcgfCBudWxsO1xuICAgIHN5bmNUeXBlPzogc3luY01vZGUgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBJbWdTdXBlclJlc29sdXRpb25TZXR0aW5nIHtcbiAgICBzY2FsZVR5cGU/OiBJbWdTdXBlclJlc29sdXRpb25Db25maWc7XG59XG5leHBvcnQgZW51bSBJbWdTdXBlclJlc29sdXRpb25Db25maWcge1xuICAgIElTUl9TQ0FMRV8xWCA9IDEuMCxcbiAgICBJU1JfU0NBTEVfM1ggPSAzLjAsXG59XG5cbi8vUHJvZHVjdCBWaXNpb24gQW5hbHlzZXJcblxuZXhwb3J0IGludGVyZmFjZSBwcm9kdWN0UmVxIHtcbiAgICBmaWxlUGF0aD86IGFueSB8IG51bGw7XG4gICAgZGV0ZWN0VHlwZT86IG51bWJlcjtcbiAgICBtbFByb2R1Y3RTZXR0aW5nPzogbWxQcm9kdWN0U2V0dGluZyB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIG1sUHJvZHVjdFNldHRpbmcge1xuICAgIGxhcmdlc3ROdW1PZlJldHVybnM/OiBudW1iZXIgfCBudWxsO1xuICAgIHByb2R1Y3RTZXRJZD86IHN0cmluZyB8IG51bGw7XG4gICAgcmVnaW9uPzogTUxQcm9kdWN0Q29uZmlnIHwgbnVsbDtcbn1cbmV4cG9ydCBlbnVtIE1MUHJvZHVjdENvbmZpZyB7XG4gICAgUkVHSU9OX0RSX0NISU5BID0gMTAwMixcbiAgICBSRUdJT05fRFJfQUZJTEEgPSAxMDAzLFxuICAgIFJFR0lPTl9EUl9FVVJPUEUgPSAxMDA0LFxuICAgIFJFR0lPTl9EUl9SVVNTSUEgPSAxMDA1LFxuICAgIFJFR0lPTl9EUl9HRVJNQU4gPSAxMDA2LFxuICAgIFJFR0lPTl9EUl9TSUFOR0FQT1JFID0gMTAwNyxcbn1cblxuLy9UZXh0IEltYWdlIFN1cGVyIFJlc29sdXRpb25cblxuZXhwb3J0IGludGVyZmFjZSB0ZXh0SW1hZ2VTdXBlclJlc29sdXRpb25SZXEge1xuICAgIGZpbGVQYXRoOiBhbnk7XG4gICAgYW5hbHlzZU1vZGU/OiBzeW5jTW9kZSB8IG51bGw7XG59XG5cbi8vSU1BR0UgU1RJTEwgJiYgTElWRVNFR01FTlRBVElPTlxuXG5leHBvcnQgaW50ZXJmYWNlIGltZ1NlZ21lbnRhdGlvblJlcSB7XG4gICAgaW1hZ2VTZWdtZW50YXRpb25TZXR0aW5nPzogbWxJbWFnZVNlZ21lbnRhdGlvblNldHRpbmc7XG4gICAgZmlsZVBhdGg6IGFueTtcbiAgICBhbmFseXNlTW9kZT86IHN5bmNNb2RlIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBtbEltYWdlU2VnbWVudGF0aW9uU2V0dGluZyB7XG4gICAgaXNFeGFjdDogYm9vbGVhbiB8IG51bGw7XG4gICAgYW5hbHlzZXJUeXBlPzogTUxJbWFnZVNlZ21lbnRhdGlvblNldHRpbmcgfCBudWxsO1xuICAgIHNjZW5lPzogTUxJbWFnZVNlZ21lbnRhdGlvblNjZW5lO1xuICAgIGhhc2hDb2RlPzogbnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wb3NpdGVJbWFnZVNlZ21lbnRhdGlvblNldHRpbmcge1xuICAgIGlzRXhhY3Q6IGJvb2xlYW4gfCBudWxsO1xuICAgIGFuYWx5c2VyVHlwZT86IE1MSW1hZ2VTZWdtZW50YXRpb25TZXR0aW5nIHwgbnVsbDtcbiAgICBzY2VuZT86IE1MSW1hZ2VTZWdtZW50YXRpb25TY2VuZTtcbiAgICBoYXNoQ29kZT86IG51bWJlciB8IG51bGw7XG59XG5cbmV4cG9ydCBlbnVtIE1MSW1hZ2VTZWdtZW50YXRpb25TZXR0aW5nIHtcbiAgICBCT0RZX1NFRyA9IDAsXG4gICAgSU1BR0VfU0VHID0gMSxcbiAgICBIQUlSX1NFRyA9IDIsXG59XG5cbmV4cG9ydCBlbnVtIE1MSW1hZ2VTZWdtZW50YXRpb25DbGFzc2lmaWNhdGlvbiB7XG4gICAgVFlQRV9CQUNLR09VUk5EID0gMCxcbiAgICBUWVBFX0hVTUFOID0gMSxcbiAgICBUWVBFX1NLWSA9IDIsXG4gICAgVFlQRV9HUkFTUyA9IDMsXG4gICAgVFlQRV9GT09EID0gNCxcbiAgICBUWVBFX0NBVCA9IDUsXG4gICAgVFlQRV9CVUlMRCA9IDYsXG4gICAgVFlQRV9GTE9XRVIgPSA3LFxuICAgIFRZUEVfV0FURVIgPSA4LFxuICAgIFRZUEVfU0FORCA9IDksXG4gICAgVFlQRV9NT1VOVEFJTiA9IDEwLFxufVxuZXhwb3J0IGVudW0gTUxJbWFnZVNlZ21lbnRhdGlvblNjZW5lIHtcbiAgICBBTEwgPSAwLFxuICAgIE1BU0tfT05MWSA9IDEsXG4gICAgRk9SRUdST1VORF9PTkxZID0gMixcbiAgICBHUkFZU0NBTEVfT05MWSA9IDMsXG59XG5cbi8vTEFORCBNQVJLXG5cbmV4cG9ydCBpbnRlcmZhY2UgaW1nTGFuZE1hcmtSZXEge1xuICAgIGxhbmRtYXJrQW5hbHl6ZXJTZXR0aW5nPzogbGFuZG1hcmtBbmFseXplclNldHRpbmc7XG4gICAgZmlsZVBhdGg6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBsYW5kbWFya0FuYWx5emVyU2V0dGluZyB7XG4gICAgbWF4UmVzdWx0cz86IG51bWJlciB8IG51bGw7XG4gICAgbW9kZWxUeXBlPzogTUxSZW1vdGVMYW5kbWFya1NldHRpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgZW51bSBNTFJlbW90ZUxhbmRtYXJrU2V0dGluZyB7XG4gICAgU1RFQURZX1BBVFRFUk4gPSAxLFxuICAgIE5FV0VTVF9QQVRURVJOID0gMixcbn1cblxuLy8gU1RJTEwgJiYgTElWRU9CSkVDVCAgQU5BTFlTRVJcblxuZXhwb3J0IGludGVyZmFjZSBvYmplY3RSZXEge1xuICAgIGZpbGVQYXRoOiBhbnk7XG4gICAgbWxPYmplY3RBbmFseXNlclNldHRpbmc/OiBtbE9iamVjdEFuYWx5c2VyU2V0dGluZztcbiAgICBzeW5jVHlwZT86IHN5bmNNb2RlIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0R3JhcGhpY1NldHRpbmcge1xuICAgIGJveFBhaW50U2V0dGluZz86IEJveFBhaW50U2V0dGluZyB8IG51bGw7XG4gICAgdGV4dFBhaW50U2V0dGluZz86IFRleHRQYWludFNldHRpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvc2l0ZU9iamVjdEdyYXBoaWNTZXR0aW5nIHtcbiAgICBib3hQYWludFNldHRpbmc/OiBCb3hQYWludFNldHRpbmcgfCBudWxsO1xuICAgIHRleHRQYWludFNldHRpbmc/OiBUZXh0UGFpbnRTZXR0aW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCb3hQYWludFNldHRpbmcge1xuICAgIGNvbG9yPzogQ29sb3JzIHwgbnVsbDtcbiAgICBzdHlsZT86IFJlY3RTdHlsZSB8IG51bGw7XG4gICAgYm94U3Ryb2tlV2lkdGg/OiBOdW1iZXIgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBUZXh0UGFpbnRTZXR0aW5nIHtcbiAgICBjb2xvcj86IENvbG9ycyB8IG51bGw7XG4gICAgdGV4dFNpemU/OiBOdW1iZXIgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBtbE9iamVjdEFuYWx5c2VyU2V0dGluZyB7XG4gICAgaXNDbGFzc2lmaWNhdGlvbkFsbG93ZWQ/OiBib29sZWFuIHwgbnVsbDtcbiAgICBpc011bHRpcGxlUmVzdWx0c0FsbG93ZWQ/OiBib29sZWFuIHwgbnVsbDtcbiAgICBhbmFseXplclR5cGU6IE1sT2JqZWN0QW5hbHlzZXJDb25maWc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9zaXRlT2JqZWN0QW5hbHlzZXJTZXR0aW5nIHtcbiAgICBpc0NsYXNzaWZpY2F0aW9uQWxsb3dlZD86IGJvb2xlYW4gfCBudWxsO1xuICAgIGlzTXVsdGlwbGVSZXN1bHRzQWxsb3dlZD86IGJvb2xlYW4gfCBudWxsO1xuICAgIGFuYWx5emVyVHlwZTogTWxPYmplY3RBbmFseXNlckNvbmZpZztcbn1cbmV4cG9ydCBlbnVtIE1sT2JqZWN0QW5hbHlzZXJDb25maWcge1xuICAgIFRZUEVfUElDVFVSRSA9IDAsXG4gICAgVFlQRV9WSURFTyA9IDEsXG4gICAgVFlQRV9PVEhFUiA9IDAsXG4gICAgVFlQRV9HT09EUyA9IDEsXG4gICAgVFlQRV9GT09EID0gMixcbiAgICBUWVBFX0ZVUk5JVFVSRSA9IDMsXG4gICAgVFlQRV9QTEFOVCA9IDQsXG4gICAgVFlQRV9QTEFDRSA9IDUsXG4gICAgVFlQRV9GQUNFID0gNixcbn1cblxuZXhwb3J0IGVudW0gUmVjdFN0eWxlIHtcbiAgICBTVFJPS0UgPSAxLFxuICAgIEZJTEwgPSAyLFxuICAgIEZJTExfQU5EX1NUUk9LRSA9IDMsXG59XG5cbi8vU1RJTEwgJiYgTElWRSBTQ0VORSBBTkFMWVNFUlxuXG5leHBvcnQgaW50ZXJmYWNlIHN0aWxsU2NlbmVSZXEge1xuICAgIGZpbGVQYXRoOiBhbnk7XG4gICAgYW5hbHlzZU1vZGU/OiBzeW5jTW9kZSB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2Ugc2NlbmVTZXR0aW5ncyB7XG4gICAgY29sb3I/OiBDb2xvcnMgfCBudWxsO1xuICAgIHRleHRTaXplPzogTnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wb3NpdGVTY2VuZVNldHRpbmdzIHtcbiAgICBjb2xvcj86IENvbG9ycyB8IG51bGw7XG4gICAgdGV4dFNpemU/OiBOdW1iZXIgfCBudWxsO1xufVxuXG5leHBvcnQgZW51bSBDb2xvcnMge1xuICAgIFJFRCA9IC02NTUzNixcbiAgICBES0dSQVkgPSAtMTIzMDMyOTIsXG4gICAgR1JBWSA9IC03ODI5MzY4LFxuICAgIFdISVRFID0gLTEsXG4gICAgQkxVRSA9IC0xNjc3Njk2MSxcbiAgICBCTEFDSyA9IC0xNjc3NzIxNixcbiAgICBMVEdSQVkgPSAtMzM1NTQ0NCxcbiAgICBNQUdFTlRBID0gLTY1MjgxLFxuICAgIFlFTExPVyA9IC0yNTYsXG4gICAgQ1lBTiA9IC0xNjcxMTY4MSxcbiAgICBHUkVFTiA9IC0xNjcxMTkzNixcbiAgICBUUkFOU1BBUkVOVCA9IDAsXG59XG5cbi8qXG4tLS0tLS0tLS0tLS0tLS0tLSByZXR1cm5cbiovXG5cbmV4cG9ydCBpbnRlcmZhY2UgTUxJbWFnZUNsYXNzaWZpY2F0aW9uIHtcbiAgICByZXN1bHQ/OiBSZXN1bHRFbnRpdHlbXSB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIFJlc3VsdEVudGl0eSB7XG4gICAgaWRlbnRpdHk6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgcG9zc2liaWxpdHk6IG51bWJlcjtcbiAgICBoYXNoQ29kZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1MRG9jdW1lbnRTa2V3RGV0ZWN0UmVzdWx0IHtcbiAgICByZXN1bHRDb2RlOiBudW1iZXI7XG4gICAgYml0bWFwOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTUxJbWFnZVNlZ21lbnRhdGlvbiB7XG4gICAgYml0bWFwRm9yZWdyb3VuZDogYW55O1xuICAgIGJpdG1hcEdyYXlzY2FsZTogYW55O1xuICAgIG1hc2tzOiBudW1iZXI7XG4gICAgYml0bWFwT3JpZ2luYWw6IGFueTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTUxSZW1vdGVMYW5kbWFyayB7XG4gICAgbGFuZG1hcms6IHN0cmluZztcbiAgICBsYW5kbWFya0lkZW50aXR5OiBzdHJpbmc7XG4gICAgcG9zc2liaWxpdHk6IG51bWJlcjtcbiAgICBib3JkZXI6IEJvcmRlcjtcbiAgICBwb3NpdGlvbkluZm8/OiBQb3NpdGlvbkluZm9FbnRpdHlbXSB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIEJvcmRlciB7XG4gICAgYm90dG9tOiBudW1iZXI7XG4gICAgdG9wOiBudW1iZXI7XG4gICAgbGVmdDogbnVtYmVyO1xuICAgIHJpZ2h0OiBudW1iZXI7XG4gICAgZXhhY3RDZW50ZXJYOiBudW1iZXI7XG4gICAgY2VudGVyWTogbnVtYmVyO1xuICAgIGNlbnRlclg6IG51bWJlcjtcbiAgICBkZXNjcmliZUNvbnRlbnRzOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgd2lkdGg6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUG9zaXRpb25JbmZvRW50aXR5IHtcbiAgICBsbmc6IG51bWJlcjtcbiAgICBsYXQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNTE9iamVjdCB7XG4gICAgdHlwZUlkZW50aXR5OiBudW1iZXI7XG4gICAgdHlwZVBvc3NpYmlsaXR5OiBudW1iZXI7XG4gICAgYm9yZGVyOiBCb3JkZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTUxTY2VuZURldGVjdGlvblJlc3VsdCB7XG4gICAgcmVzdWx0U3RyaW5nOiBzdHJpbmc7XG4gICAgY29uZmlkZW5jZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpdmVTY2VuQW5hbHlzZXIge1xuICAgIGFuYWx5c2VMaXN0OiBbQW5hbHlzZUxpc3RdO1xuICAgIGZyYW1lUHJvcGVydHk6IEZyYW1lUHJvcGVydHk7XG59XG5leHBvcnQgaW50ZXJmYWNlIEFuYWx5c2VMaXN0IHtcbiAgICAwOiBhO1xufVxuZXhwb3J0IGludGVyZmFjZSBhIHtcbiAgICByZXN1bHQ6IHN0cmluZztcbiAgICBjb25maWRlbmNlOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIEZyYW1lUHJvcGVydHkge1xuICAgIGV4dDogc3RyaW5nO1xuICAgIGZvcm1hdFR5cGU6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICBpdGVtSWRlbnRpdHk6IG51bWJlcjtcbiAgICBxdWFkcmFudDogbnVtYmVyO1xuICAgIHRpbWVzdGFtcDogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTUxQcm9kdWN0VmlzaW9uUmVzdWx0IHtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgYm9yZGVyOiBCb3JkZXI7XG4gICAgbGlzdD86IExpc3RFbnRpdHlbXSB8IG51bGw7XG59XG5leHBvcnQgaW50ZXJmYWNlIExpc3RFbnRpdHkge1xuICAgIGN1c3RvbWNvbnRlbnQ6IHN0cmluZztcbiAgICBpbWFnZWxpc3Q/OiBJbWFnZWxpc3RFbnRpdHlbXSB8IG51bGw7XG4gICAgcG9zc2liaWxpdHk6IG51bWJlcjtcbiAgICBwcm9kdWN0VVJMOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEltYWdlbGlzdEVudGl0eSB7XG4gICAgaW1hZ2VJZDogc3RyaW5nO1xuICAgIHBvc3NpYmlsaXR5OiBudW1iZXI7XG4gICAgcHJvZHVjdElkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIEV2ZW50cyB7XG4gICAgVEVYVF9UUkFOU0FDVE9SX09OX0RFU1RST1kgPSBcInRleHRUcmFuc2FjdG9yT25EZXN0cm95XCIsXG4gICAgVEVYVF9UUkFOU0FDVE9SX09OX1JFU1VMVCA9IFwidGV4dFRyYW5zYWN0b3JPblJlc3VsdFwiLFxuICAgIEZBQ0VfVFJBTlNBQ1RPUl9PTl9ERVNUUk9ZID0gXCJmYWNlVHJhbnNhY3Rvck9uRGVzdHJveVwiLFxuICAgIEZBQ0VfVFJBTlNBQ1RPUl9PTl9SRVNVTFQgPSBcImZhY2VUcmFuc2FjdG9yT25SZXN1bHRcIixcbiAgICBGQUNFXzNEX1RSQU5TQUNUT1JfT05fREVTVFJPWSA9IFwiZmFjZTNkVHJhbnNhY3Rvck9uRGVzdHJveVwiLFxuICAgIEZBQ0VfM0RfVFJBTlNBQ1RPUl9PTl9SRVNVTFQgPSBcImZhY2UzZFRyYW5zYWN0b3JPblJlc3VsdFwiLFxuICAgIENMQVNTSUZJQ0FUSU9OX1RSQU5TQUNUT1JfT05fREVTVFJPWSA9IFwiY2xhc3NpZmljYXRpb25UcmFuc2FjdG9yT25EZXN0cm95XCIsXG4gICAgQ0xBU1NJRklDQVRJT05fVFJBTlNBQ1RPUl9PTl9SRVNVTFQgPSBcImNsYXNzaWZpY2F0aW9uVHJhbnNhY3Rvck9uUmVzdWx0XCIsXG4gICAgT0JKRUNUX1RSQU5TQUNUT1JfT05fREVTVFJPWSA9IFwib2JqZWN0VHJhbnNhY3Rvck9uRGVzdHJveVwiLFxuICAgIE9CSkVDVF9UUkFOU0FDVE9SX09OX1JFU1VMVCA9IFwib2JqZWN0VHJhbnNhY3Rvck9uUmVzdWx0XCIsXG4gICAgU0NFTkVfVFJBTlNBQ1RPUl9PTl9ERVNUUk9ZID0gXCJzY2VuZVRyYW5zYWN0b3JPbkRlc3Ryb3lcIixcbiAgICBTQ0VORV9UUkFOU0FDVE9SX09OX1JFU1VMVCA9IFwic2NlbmVUcmFuc2FjdG9yT25SZXN1bHRcIixcbiAgICBTS0VMRVRPTl9UUkFOU0FDVE9SX09OX0RFU1RST1kgPSBcInNrZWxldG9uVHJhbnNhY3Rvck9uRGVzdHJveVwiLFxuICAgIFNLRUxFVE9OX1RSQU5TQUNUT1JfT05fUkVTVUxUID0gXCJza2VsZXRvblRyYW5zYWN0b3JPblJlc3VsdFwiLFxuICAgIEhBTkRfVFJBTlNBQ1RPUl9PTl9ERVNUUk9ZID0gXCJoYW5kVHJhbnNhY3Rvck9uRGVzdHJveVwiLFxuICAgIEhBTkRfVFJBTlNBQ1RPUl9PTl9SRVNVTFQgPSBcImhhbmRUcmFuc2FjdG9yT25SZXN1bHRcIixcbiAgICBHRVNUVVJFX1RSQU5TQUNUT1JfT05fREVTVFJPWSA9IFwiZ2VzdHVyZVRyYW5zYWN0b3JPbkRlc3Ryb3lcIixcbiAgICBHRVNUVVJFX1RSQU5TQUNUT1JfT05fUkVTVUxUID0gXCJnZXN0dXJlVHJhbnNhY3Rvck9uUmVzdWx0XCIsXG4gICAgU0VHTUVOVEFUSU9OX1RSQU5TQUNUT1JfT05fREVTVFJPWSA9IFwic2VnbWVudGF0aW9uVHJhbnNhY3Rvck9uRGVzdHJveVwiLFxuICAgIFNFR01FTlRBVElPTl9UUkFOU0FDVE9SX09OX1JFU1VMVCA9IFwic2VnbWVudGF0aW9uVHJhbnNhY3Rvck9uUmVzdWx0XCIsXG59XG5cbmV4cG9ydCBlbnVtIENvcmRvdmFFcnJvcnMge1xuICAgIFVOS05PV04gPSAtMSxcbiAgICBTVUNDRVNTID0gMCxcbiAgICBESVNDQVJERUQgPSAxLFxuICAgIElOTkVSID0gMixcbiAgICBJTkFDVElWRSA9IDMsXG4gICAgTk9UX1NVUFBPUlRFRCA9IDQsXG4gICAgSUxMRUdBTF9QQVJBTUVURVIgPSA1LFxuICAgIE9WRVJEVUUgPSA2LFxuICAgIE5PX0ZPVU5EID0gNyxcbiAgICBEVVBMSUNBVEVfRk9VTkQgPSA4LFxuICAgIE5PX1BFUk1JU1NJT04gPSA5LFxuICAgIElOU1VGRklDSUVOVF9SRVNPVVJDRSA9IDEwLFxuICAgIEFOQUxZU0lTX0ZBSUxVUkUgPSAxMSxcbiAgICBJTlRFUlJVUFRFRCA9IDEyLFxuICAgIEVYQ0VFRF9SQU5HRSA9IDEzLFxuICAgIERBVEFfTUlTU0lORyA9IDE0LFxuICAgIEFVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEID0gMTUsXG4gICAgVEZMSVRFX05PVF9DT01QQVRJQkxFID0gMTYsXG4gICAgSU5TVUZGSUNJRU5UX1NQQUNFID0gMTcsXG4gICAgSEFTSF9NSVNTID0gMTgsXG4gICAgVE9LRU5fSU5WQUxJRCA9IDE5LFxuICAgIFNFUlZJQ0VfRkFJTFVSRSA9IDIwLFxuICAgIEFOQUxZU0lTX05VTEwgPSAyMSxcbn0iXX0=