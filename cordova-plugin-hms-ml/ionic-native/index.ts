/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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

import { Injectable } from "@angular/core";
import {
    Plugin,
    Cordova,
    CordovaProperty,
    CordovaInstance,
    InstanceProperty,
    IonicNativePlugin,
} from "@ionic-native/core";
import { Observable } from "rxjs";
/**
 * @name HMSMLKit
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { HmsMl } from '@ionic-native/hms-ml';
 *
 *
 * constructor(private hmsMl: HmsMl) { }
 *
 * ...
 *
 *
 * this.hmsMl.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
    pluginName: "HMSMLKit",
    plugin: "cordova-plugin-hms-ml", // npm package name, example: cordova-plugin-camera
    pluginRef: "HMSMLKit", // the variable reference to call the plugin, example: navigator.geolocation
    platforms: ["Android"], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
@Plugin({
    pluginName: "HMSFaceBodyProvider",
    plugin: "cordova-plugin-hms-ml", // npm package name, example: cordova-plugin-camera
    pluginRef: "HMSFaceBodyProvider", // the variable reference to call the plugin, example: navigator.geolocation
    platforms: ["Android"], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
@Plugin({
    pluginName: "HMSImageServiceProvider",
    plugin: "cordova-plugin-hms-ml", // npm package name, example: cordova-plugin-camera
    pluginRef: "HMSImageServiceProvider", // the variable reference to call the plugin, example: navigator.geolocation
    platforms: ["Android"], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
@Plugin({
    pluginName: "HMSLanguageServiceProvider",
    plugin: "cordova-plugin-hms-ml", // npm package name, example: cordova-plugin-camera
    pluginRef: "HMSLanguageServiceProvider", // the variable reference to call the plugin, example: navigator.geolocation
    platforms: ["Android"], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
@Plugin({
    pluginName: "HMSTextServiceProvider",
    plugin: "cordova-plugin-hms-ml", // npm package name, example: cordova-plugin-camera
    pluginRef: "HMSTextServiceProvider", // the variable reference to call the plugin, example: navigator.geolocation
    platforms: ["Android"], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
@Plugin({
    pluginName: "HMSVoiceServiceProvider",
    plugin: "cordova-plugin-hms-ml", // npm package name, example: cordova-plugin-camera
    pluginRef: "HMSVoiceServiceProvider", // the variable reference to call the plugin, example: navigator.geolocation
    platforms: ["Android"], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class HMSMLKit extends IonicNativePlugin {
    @CordovaProperty()
    MLFaceSetting = MLFaceSetting;
    @CordovaProperty()
    MLLocalTextSetting = MLLocalTextSetting;
    @CordovaProperty()
    icrVnCaptureType = icrCaptureType;
    @CordovaProperty()
    MLTextConfig = MLTextConfig;
    @CordovaProperty()
    MLRemoteTextSetting = MLRemoteTextSetting;
    @CordovaProperty()
    MLImageClassificationConfig = MLImageClassificationConfig;
    @CordovaProperty()
    MLImageSegmentationSetting = MLImageSegmentationSetting;
    @CordovaProperty()
    MLImageSegmentationScene = MLImageSegmentationScene;
    @CordovaProperty()
    MLRemoteLandmarkSetting = MLRemoteLandmarkSetting;
    @CordovaProperty()
    MLBcrCaptureConfig = MLBcrCaptureConfig;
    @CordovaProperty()
    MLGcrCaptureUIConfig = MLGcrCaptureUIConfig;
    @CordovaProperty()
    MLBcrResultConfig = MLBcrResultConfig;
    @CordovaProperty()
    HandkeyPointConfig = HandkeyPointConfig;
    @CordovaProperty()
    ImgSuperResolutionConfig = ImgSuperResolutionConfig;
    @CordovaProperty()
    MlObjectAnalyserConfig = MlObjectAnalyserConfig;
    @CordovaProperty()
    DownloadStrategyCustom = DownloadStrategyCustom;
    @CordovaProperty()
    FEATURE = FEATURE;
    @CordovaProperty()
    LANGUAGE = LANGUAGE;
    @CordovaProperty()
    MLTtsConstants = MLTtsConstants;
    @CordovaProperty()
    Colors = Colors;
    @CordovaProperty()
    RectStyle = RectStyle;
    @CordovaProperty()
    MLSkeletonConfig = MLSkeletonConfig;
    @CordovaProperty()
    MLFlashMode = MLFlashMode;
    @CordovaProperty()
    MLLensType = MLLensType;
    @CordovaProperty()
    MLAnalyzerName = MLAnalyzerName;
    @CordovaProperty()
    MLFrame = MLFrame;
    @CordovaProperty()
    MLFormRecogitionConfig = MLFormRecogitionConfig;
    @CordovaProperty()
    MLFaceConfigs = MLFaceConfigs;
    @CordovaProperty()
    MLProductConfig = MLProductConfig;
    @CordovaProperty()
    MLLivenessConfig = MLLivenessConfig;
    @CordovaProperty()
    MLRttLanguages = MLRttLanguages;
    @CordovaProperty()
    MLRttScenes = MLRttScenes;
    @CordovaProperty()
    gcrCaptureType = gcrCaptureType;
    @CordovaProperty()
    syncType = syncType;

    @Cordova({ otherPromise: true })
    /**
     * Adjusts the focal length of the camera based on the scaling coefficient (digital zoom).
     * @param  {doZoomReq} doZoomReq Reperesents the necessary parameters.
     * @returns Promise<any>
     */
    doZoom(doZoomReq: doZoomReq): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * Monitors photographing.
     * @returns Promise<any>
     */
    photograph(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * Close lens engine.
     * @returns Promise<any>
     */
    destroy(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * Obtains the size of the preview image of a camera.
     * @returns Promise<any>
     */
    getDisplayDimension(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * Obtains the selected camera type.
     * @returns Promise<any>
     */
    getLensType(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * It checks the permissions required to use this Kit.
     * @param  {CheckPermissionReq} permissionListInput Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    hasPermissions(permissionListReq: CheckPermissionReq): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * It gets the necessary permissions.
     * @param  {RequestPermissionReq} permissionListInput Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    requestPermissions(
        permissionListInput: RequestPermissionReq
    ): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * It sets Api Key or access token for application.
     * @param  {configReq} params Represents your API_KEY.
     * @returns Promise<any>
     */
    serviceInitializer(params: configReq): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This service recognize the image from the picture and return what the picture can be with the percentages. Use ML Libraries.
     * @param  {ownCustomModelReq | downloadModelReq} ownCustomModelReq Represents the parameter required for custom model analyser.
     * @returns Promise<any>
     */
    customModelAnalyser(
        ownCustomModelReq: ownCustomModelReq | downloadModelReq
    ): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * Obtains Frame.
     * @param  {mlFrameReq} mlFrameReq Represents the parameter required.
     * @returns Promise<any>
     */
    mlFrame(mlFrameReq: mlFrameReq): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * An app information class used to store basic information about apps with the HMS Core ML SDK integrated and complete the initialization of ML Kit. When using cloud services of the ML Kit, you need to set the apiKey of your app.
     * @param  {appSettingReq} appSettingReq Represents the parameter required.
     * @returns Promise<any>
     */
    appSetting(appSettingReq: appSettingReq): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * Determines whether to collect statistics on the current app.
     * @param {any} any
     * @returns Promise<any>
     */
    setStatistic(any: any): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * Determines whether to collect statistics on the current app.
     ** @param {any} any
     *  @returns Promise<any>
     */
    getStatistic(any: any): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This service enable logger service.
     * @returns Promise<any>
     */
    enableLogger(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This service disable logger service.
     * @returns Promise<any>
     */
    disableLogger(): Promise<any> {
        return;
    }
}
@Injectable()
export class HMSFaceBodyProvider extends IonicNativePlugin {
    @CordovaProperty()
    MLFaceSetting = MLFaceSetting;
    @CordovaProperty()
    MLLocalTextSetting = MLLocalTextSetting;
    @CordovaProperty()
    MLTextConfig = MLTextConfig;
    @CordovaProperty()
    MLRemoteTextSetting = MLRemoteTextSetting;
    @CordovaProperty()
    MLImageClassificationConfig = MLImageClassificationConfig;
    @CordovaProperty()
    MLImageSegmentationSetting = MLImageSegmentationSetting;
    @CordovaProperty()
    MLImageSegmentationScene = MLImageSegmentationScene;
    @CordovaProperty()
    MLRemoteLandmarkSetting = MLRemoteLandmarkSetting;
    @CordovaProperty()
    MLBcrCaptureConfig = MLBcrCaptureConfig;
    @CordovaProperty()
    MLGcrCaptureUIConfig = MLGcrCaptureUIConfig;
    @CordovaProperty()
    MLBcrResultConfig = MLBcrResultConfig;
    @CordovaProperty()
    HandkeyPointConfig = HandkeyPointConfig;
    @CordovaProperty()
    ImgSuperResolutionConfig = ImgSuperResolutionConfig;
    @CordovaProperty()
    MlObjectAnalyserConfig = MlObjectAnalyserConfig;
    @CordovaProperty()
    DownloadStrategyCustom = DownloadStrategyCustom;
    @CordovaProperty()
    FEATURE = FEATURE;
    @CordovaProperty()
    LANGUAGE = LANGUAGE;
    @CordovaProperty()
    MLTtsConstants = MLTtsConstants;
    @CordovaProperty()
    Colors = Colors;
    @CordovaProperty()
    RectStyle = RectStyle;
    @CordovaProperty()
    MLSkeletonConfig = MLSkeletonConfig;
    @CordovaProperty()
    MLFlashMode = MLFlashMode;
    @CordovaProperty()
    MLLensType = MLLensType;
    @CordovaProperty()
    MLAnalyzerName = MLAnalyzerName;
    @CordovaProperty()
    MLFrame = MLFrame;
    @CordovaProperty()
    MLFormRecogitionConfig = MLFormRecogitionConfig;
    @CordovaProperty()
    MLFaceConfigs = MLFaceConfigs;
    @CordovaProperty()
    MLProductConfig = MLProductConfig;
    @CordovaProperty()
    MLLivenessConfig = MLLivenessConfig;
    @CordovaProperty()
    MLRttLanguages = MLRttLanguages;
    @CordovaProperty()
    MLRttScenes = MLRttScenes;
    @CordovaProperty()
    gcrCaptureType = gcrCaptureType;
    @CordovaProperty()
    syncType = syncType;

    @Cordova({ otherPromise: true })
    stillGestureAnalyser(stillGestureReq: stillGestureReq): Promise<MLGesture> {
        return;
    }

    @Cordova({ otherPromise: true })
    stopStillGestureAnalyser(): Promise<any> {
        return;
    }

    @Cordova({ otherPromise: true })
    getGestureAnalyserSetting(): Promise<any> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * The face detection service can detect the face contour, recognize facial features, and determine facial expressions for a person.
     * @param  {faceReq} faceReq Represents the parameter required for face detection.
     * @returns Promise<StillFaceAnalyser>
     */
    stillFaceAnalyser(faceReq: faceReq): Promise<MLFace> {
        return;
    }

    @Cordova({ otherPromise: true })
    stillFaceAnalyserInfo(): Promise<any> {
        return;
    }

    @Cordova({ otherPromise: true })
    setFaceDetected(
        maxFaceVerificationReq: maxFaceVerificationReq
    ): Promise<MLFaceVerificationResult> {
        return;
    }
    @Cordova({ otherPromise: true })
    getFaceVerificationAnalyserSetting(): Promise<any> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * @param  {faceVerificationReq} faceVerificationReq Represents the parameter required for face detection.
     * @returns Promise<MLFaceVerificationResult>
     */
    stillFaceVerificationAnalyser(
        faceVerificationReq: faceVerificationReq
    ): Promise<MLFaceVerificationResult> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method stop face recognition service.
     * @returns Promise<any>
     */
    stopStillFaceVerificationAnalyser(): Promise<any> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * This method gives the information of the face recognition service.
     * @returns Promise<any>
     */
    stilFaceAnalyserInfo(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method stop face recognition service.
     * @returns Promise<any>
     */
    stopStillFaceAnalyser(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
   The skeleton detection service detects and locates key points of the human body, such as the top of the head, neck, shoulder, elbow, wrist, hip, knee, and ankle.
   * @param  {stillSkeletonReq |stillSkeletonSimilarityReq} stillSkeletonReq Represents the parameter required for still skeleton detection.
   * @returns Promise<StillSkeletonAnalyser>
   */
    stillSkeletonAnalyser(
        stillSkeletonReq: stillSkeletonReq | stillSkeletonSimilarityReq
    ): Promise<MLSkeleton> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * The liveness detection service supports silent liveness detection and captures faces in real time. It can determine whether a face is of a real user or is a face attack
     * (for example, face recapture image, face recapture video, or face mask) without requiring the user to follow specific instructions.
     * @param  {livenessDetectionReq} livenessDetectionReq Represents the parameter required.
     * @returns Promise<LiveLivenessAnalyser>
     */
    liveLivenessAnalyser(
        livenessDetectionReq: livenessDetectionReq
    ): Promise<MLLivenessCaptureResult> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This service can detects 21 hand keypoints (including fingertips, knuckles, and wrists) and return positions of the keypoints.
     * @param  {stillHandKeypointReq } stillHandKeypointReq Represents the parameter required for still handkey analyser.
     * @returns Promise<StillHandKeyAnalyser>
     */
    stillHandkeyAnalyser(
        stillHandKeypointReq: stillHandKeypointReq
    ): Promise<MLHandKeypoints> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method stop hand analyzer service.
     * @returns Promise<any>
     */
    stopStillHandKeyAnalyser(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method returns face analyzer settings.
     * @returns Promise<any>
     */
    getFaceAnalyserSetting(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method  returns hand analyzer settings.
     * @returns Promise<any>
     */
    getHandKeyAnalyserSetting(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method stop skeleton analyzer service.
     * @returns Promise<any>
     */
    stopStillSkeletonAnalyser(): Promise<any> {
        return;
    }
}
@Injectable()
export class HMSImageServiceProvider extends IonicNativePlugin {
    @CordovaProperty()
    MLFaceSetting = MLFaceSetting;
    @CordovaProperty()
    gcrCaptureType = gcrCaptureType;
    @CordovaProperty()
    syncType = syncType;
    @CordovaProperty()
    MLLocalTextSetting = MLLocalTextSetting;
    @CordovaProperty()
    MLTextConfig = MLTextConfig;
    @CordovaProperty()
    MLRemoteTextSetting = MLRemoteTextSetting;
    @CordovaProperty()
    MLImageClassificationConfig = MLImageClassificationConfig;
    @CordovaProperty()
    MLImageSegmentationSetting = MLImageSegmentationSetting;
    @CordovaProperty()
    MLImageSegmentationScene = MLImageSegmentationScene;
    @CordovaProperty()
    MLRemoteLandmarkSetting = MLRemoteLandmarkSetting;
    @CordovaProperty()
    MLBcrCaptureConfig = MLBcrCaptureConfig;
    @CordovaProperty()
    MLGcrCaptureUIConfig = MLGcrCaptureUIConfig;
    @CordovaProperty()
    MLBcrResultConfig = MLBcrResultConfig;
    @CordovaProperty()
    HandkeyPointConfig = HandkeyPointConfig;
    @CordovaProperty()
    ImgSuperResolutionConfig = ImgSuperResolutionConfig;
    @CordovaProperty()
    MlObjectAnalyserConfig = MlObjectAnalyserConfig;
    @CordovaProperty()
    DownloadStrategyCustom = DownloadStrategyCustom;
    @CordovaProperty()
    FEATURE = FEATURE;
    @CordovaProperty()
    LANGUAGE = LANGUAGE;
    @CordovaProperty()
    MLTtsConstants = MLTtsConstants;
    @CordovaProperty()
    Colors = Colors;
    @CordovaProperty()
    RectStyle = RectStyle;
    @CordovaProperty()
    MLSkeletonConfig = MLSkeletonConfig;
    @CordovaProperty()
    MLFlashMode = MLFlashMode;
    @CordovaProperty()
    MLLensType = MLLensType;
    @CordovaProperty()
    MLAnalyzerName = MLAnalyzerName;
    @CordovaProperty()
    MLFrame = MLFrame;
    @CordovaProperty()
    MLFormRecogitionConfig = MLFormRecogitionConfig;
    @CordovaProperty()
    MLFaceConfigs = MLFaceConfigs;
    @CordovaProperty()
    MLProductConfig = MLProductConfig;
    @CordovaProperty()
    MLLivenessConfig = MLLivenessConfig;
    @CordovaProperty()
    MLRttLanguages = MLRttLanguages;
    @CordovaProperty()
    MLRttScenes = MLRttScenes;

    @Cordova({ otherPromise: true })
    /**
     * This method represents the image classification SDK.
     * @param  {localImageClassificationReq|remoteImageClassificationReq} imageClassificationInput Represents the parameter required for classify objects.
     * @returns Promise<ImageClassificationAnalyser>
     */
    imageClassificationAnalyser(
        imageClassificationInput:
            | localImageClassificationReq
            | remoteImageClassificationReq
    ): Promise<MLImageClassification> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method stop image classification analyser.
     * @returns Promise<string>
     */
    stopImageClassificationAnalyser(): Promise<string> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * The image segmentation service segments same elements (such as human body, plant, and sky) from an image. The elements supported include human body, sky, plant, food and others.
     * @param  {imgSegmentationReq} imgSegmentationReq Represents the parameter required for image segmentation.
     * @returns Promise<SegmentationAnalyser>
     */
    imgSegmentation(
        imgSegmentationReq: imgSegmentationReq
    ): Promise<MLImageSegmentation> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method stop image segmentation service.
     * @returns Promise<any>
     */
    stopImgSegmentation(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * The landmark recognition service enables you to obtain the landmark name, landmark longitude and latitude, and confidence of the input image.
     * @param  {imgLandMarkReq} imgLandMarkReq Represents the parameter required for image landmark analyser.
     * @returns Promise<ImageLandmarkAnalyser>
     */
    imgLandMarkAnalyser(
        imgLandMarkReq: imgLandMarkReq
    ): Promise<MLRemoteLandmark> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method stop image landmark analyser service.
     * @returns Promise<any>
     */
    imgLandMarkAnalyserStop(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * The object detection service can detect and track multiple objects in an image.
     * @param  {objectReq} objectReq Represents the parameter required for object detection.
     * @returns Promise<ImageObjectAnalyser>
     */
    objectAnalyser(objectReq: objectReq): Promise<MLObject> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * The scene detection service can classify the scenario content of images and add labels, such as outdoor scenery, indoor places, and buildings, to help understand the image content.
     *   @param  {stillSceneReq} stillSceneReq Represents the parameter required for Scene analyser.
     *  @returns Promise <any>
     */
    stillSceneAnalyser(
        stillSceneReq: stillSceneReq
    ): Promise<MLSceneDetectionResult> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
   This service can automatically identify the location of a document in an image and adjust the shooting angle to the angle facing the document, even if the document is tilted.
   * @param  {documentSkewCorrectionReq} documentSkewCorrectionReq Represents the parameter required for document skew correction.
   * @returns Promise<DocumentSkewAnalyser>
   */
    documentSkewCorrectionAnalyser(
        documentSkewCorrectionReq: documentSkewCorrectionReq
    ): Promise<MLDocumentSkewDetectResult> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This service can zoom in an image that contains text and significantly improve the definition of text in the image.
     * @param  {textImageSuperResolutionReq} textImageSuperResolutionReq Represents the parameter required for Text Image Super Resolution.
     * @returns Promise<any>
     */
    textImageSuperResolution(
        textImageSuperResolutionReq: textImageSuperResolutionReq
    ): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This service provides the 1x super-resolution capabilities. 1x super-resolution removes the compression noise.
     * @param  {imageSuperResolutionReq} imageSuperResolutionReq Represents the parameter required for Image Super Resolution.
     * @returns Promise<any>
     */
    imageSuperResolution(
        imageSuperResolutionReq: imageSuperResolutionReq
    ): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * Represents the image-based product detection API of HUAWEI ML Kit.
     * @param  {productReq} productReq Represents the parameter required.
     * @returns Promise<any>
     */
    productVisionAnalyser(productReq: productReq): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method stop object analyser service.
     * @returns Promise<any>
     */
    objectAnalyserStop(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method stop product analyser service.
     * @returns Promise<any>
     */
    productAnalyserStop(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method stop document skew analyser service.
     * @returns Promise<any>
     */
    docSkewAnalyserStop(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method stop TISR analyser service.
     * @returns Promise<any>
     */
    TISRAnalyserStop(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method stop ISR analyser service.
     * @returns Promise<any>
     */
    ISRAnalyserStop(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method stop scene analyser service.
     * @returns Promise<any>
     */
    stillSceneAnalyserStop(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method returns image classification settings.
     * @returns Promise<any>
     */
    getImageClassificationAnalyserSetting(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     *  This method returns ISR settings.
     * @returns Promise<any>
     */
    getISRSetting(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     *  This method returns segmentation settings.
     * @returns Promise<any>
     */
    getSegmentationSetting(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     *  This method returns landmark settings.
     * @returns Promise<any>
     */
    getLandmarkSetting(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     *  This method returns object settings.
     * @returns Promise<any>
     */
    getObjectSetting(): Promise<any> {
        return;
    }
}
@Injectable()
export class HMSLanguageServiceProvider extends IonicNativePlugin {
    @CordovaProperty()
    MLFaceSetting = MLFaceSetting;
    @CordovaProperty()
    gcrCaptureType = gcrCaptureType;
    @CordovaProperty()
    syncType = syncType;
    @CordovaProperty()
    MLLocalTextSetting = MLLocalTextSetting;
    @CordovaProperty()
    MLTextConfig = MLTextConfig;
    @CordovaProperty()
    MLRemoteTextSetting = MLRemoteTextSetting;
    @CordovaProperty()
    MLImageClassificationConfig = MLImageClassificationConfig;
    @CordovaProperty()
    MLImageSegmentationSetting = MLImageSegmentationSetting;
    @CordovaProperty()
    MLImageSegmentationScene = MLImageSegmentationScene;
    @CordovaProperty()
    MLRemoteLandmarkSetting = MLRemoteLandmarkSetting;
    @CordovaProperty()
    MLBcrCaptureConfig = MLBcrCaptureConfig;
    @CordovaProperty()
    MLGcrCaptureUIConfig = MLGcrCaptureUIConfig;
    @CordovaProperty()
    MLBcrResultConfig = MLBcrResultConfig;
    @CordovaProperty()
    HandkeyPointConfig = HandkeyPointConfig;
    @CordovaProperty()
    ImgSuperResolutionConfig = ImgSuperResolutionConfig;
    @CordovaProperty()
    MlObjectAnalyserConfig = MlObjectAnalyserConfig;
    @CordovaProperty()
    DownloadStrategyCustom = DownloadStrategyCustom;
    @CordovaProperty()
    FEATURE = FEATURE;
    @CordovaProperty()
    LANGUAGE = LANGUAGE;
    @CordovaProperty()
    MLTtsConstants = MLTtsConstants;
    @CordovaProperty()
    Colors = Colors;
    @CordovaProperty()
    RectStyle = RectStyle;
    @CordovaProperty()
    MLSkeletonConfig = MLSkeletonConfig;
    @CordovaProperty()
    MLFlashMode = MLFlashMode;
    @CordovaProperty()
    MLLensType = MLLensType;
    @CordovaProperty()
    MLAnalyzerName = MLAnalyzerName;
    @CordovaProperty()
    MLFrame = MLFrame;
    @CordovaProperty()
    MLFormRecogitionConfig = MLFormRecogitionConfig;
    @CordovaProperty()
    MLFaceConfigs = MLFaceConfigs;
    @CordovaProperty()
    MLProductConfig = MLProductConfig;
    @CordovaProperty()
    MLLivenessConfig = MLLivenessConfig;
    @CordovaProperty()
    MLRttLanguages = MLRttLanguages;
    @CordovaProperty()
    MLRttScenes = MLRttScenes;
    @Cordova({ otherPromise: true })
    /**
     * The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result.
     * @param  {textEmbeddingDicInfoReq} textEmbeddingDicInfoReq Represents the parameter required for Text Embedding.
     * @returns Promise<any>
     */
    textEmbeddingDictionaryInfo(
        textEmbeddingDicInfoReq: textEmbeddingDicInfoReq
    ): Promise<MLVocabularyVersion> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * Asynchronously queries word vectors in batches. (The number of words ranges from 1 to 500.)
     * @param  {textEmbeddingWordBatchReq} textEmbeddingWordBatchReq Represents the parameter required for Text Embedding.
     * @returns Promise<any>
     */
    textEmbeddingWordBatchVector(
        textEmbeddingWordBatchReq: textEmbeddingWordBatchReq
    ): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result.
     * @param  {textEmbeddingWordtoVectorReq} textEmbeddingWordtoVectorReq Represents the parameter required for Text Embedding.
     * @returns Promise<any>
     */
    textEmbeddingWordtoVector(
        textEmbeddingWordtoVectorReq: textEmbeddingWordtoVectorReq
    ): Promise<MLWordtoVectorResult> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result.
     * @param  {textEmbeddingSentencetoVectorReq} textEmbeddingSentencetoVectorReq Represents the parameter required for Text Embedding.
     * @returns Promise<any>
     */
    textEmbeddingSentencetoVector(
        textEmbeddingSentencetoVectorReq: textEmbeddingSentencetoVectorReq
    ): Promise<MlSentencetoVectorResult> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result.
     * @param  {textEmbeddingWordSimilarityReq} textEmbeddingWordSimilarityReq Represents the parameter required for Text Embedding.
     * @returns Promise<any>
     */
    textEmbeddingWordSimilarty(
        textEmbeddingWordSimilarityReq: textEmbeddingWordSimilarityReq
    ): Promise<MLWordSimilarityResult> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result.
     * @param  {textEmbeddingSentenceSimilarityReq} textEmbeddingSentenceSimilarityReq Represents the parameter required for Text Embedding.
     * @returns Promise<any>
     */
    textEmbeddingSentenceSimilarty(
        textEmbeddingSentenceSimilarityReq: textEmbeddingSentenceSimilarityReq
    ): Promise<MLSentenceSimilarityResult> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result.
     * @param  {textEmbeddingSimilarWordsReq} textEmbeddingSimilarWordsReq Represents the parameter required for Text Embedding.
     * @returns Promise<any>
     */
    textEmbeddingSimilarWords(
        textEmbeddingSimilarWordsReq: textEmbeddingSimilarWordsReq
    ): Promise<MLSimilarWordsResult> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method returns textembedding settings.
     * @returns Promise<any>
     */
    getTextEmbeddingSetting(): Promise<any> {
        return;
    }
}
@Injectable()
export class HMSTextServiceProvider extends IonicNativePlugin {
    @CordovaProperty()
    MLFaceSetting = MLFaceSetting;
    @CordovaProperty()
    icrVnCaptureType = icrCaptureType;
    @CordovaProperty()
    gcrCaptureType = gcrCaptureType;
    @CordovaProperty()
    syncType = syncType;
    @CordovaProperty()
    MLLocalTextSetting = MLLocalTextSetting;
    @CordovaProperty()
    MLTextConfig = MLTextConfig;
    @CordovaProperty()
    MLRemoteTextSetting = MLRemoteTextSetting;
    @CordovaProperty()
    MLImageClassificationConfig = MLImageClassificationConfig;
    @CordovaProperty()
    MLImageSegmentationSetting = MLImageSegmentationSetting;
    @CordovaProperty()
    MLImageSegmentationScene = MLImageSegmentationScene;
    @CordovaProperty()
    MLRemoteLandmarkSetting = MLRemoteLandmarkSetting;
    @CordovaProperty()
    MLBcrCaptureConfig = MLBcrCaptureConfig;
    @CordovaProperty()
    MLGcrCaptureUIConfig = MLGcrCaptureUIConfig;
    @CordovaProperty()
    MLBcrResultConfig = MLBcrResultConfig;
    @CordovaProperty()
    HandkeyPointConfig = HandkeyPointConfig;
    @CordovaProperty()
    ImgSuperResolutionConfig = ImgSuperResolutionConfig;
    @CordovaProperty()
    MlObjectAnalyserConfig = MlObjectAnalyserConfig;
    @CordovaProperty()
    DownloadStrategyCustom = DownloadStrategyCustom;
    @CordovaProperty()
    FEATURE = FEATURE;
    @CordovaProperty()
    LANGUAGE = LANGUAGE;
    @CordovaProperty()
    MLTtsConstants = MLTtsConstants;
    @CordovaProperty()
    Colors = Colors;
    @CordovaProperty()
    RectStyle = RectStyle;
    @CordovaProperty()
    MLSkeletonConfig = MLSkeletonConfig;
    @CordovaProperty()
    MLFlashMode = MLFlashMode;
    @CordovaProperty()
    MLLensType = MLLensType;
    @CordovaProperty()
    MLAnalyzerName = MLAnalyzerName;
    @CordovaProperty()
    MLFrame = MLFrame;
    @CordovaProperty()
    MLFormRecogitionConfig = MLFormRecogitionConfig;
    @CordovaProperty()
    MLFaceConfigs = MLFaceConfigs;
    @CordovaProperty()
    MLProductConfig = MLProductConfig;
    @CordovaProperty()
    MLLivenessConfig = MLLivenessConfig;
    @CordovaProperty()
    MLRttLanguages = MLRttLanguages;
    @CordovaProperty()
    MLRttScenes = MLRttScenes;

    @Cordova({ otherPromise: true })
    /**
     * This method start the Text analyzer.
     * @param  {localImageTextReq|remoteImageTextReq} ImageTextAnalyserInput Reperesents the necessary parameters to convert images to text format.
     * @returns Promise <TextAnalyser>
     */
    imageTextAnalyser(
        ImageTextAnalyserInput: localImageTextReq | remoteImageTextReq
    ): Promise<MLText> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method stop the Text analyzer.
     * @returns Promise<any>
     */
    stopTextAnalyser(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method gives Text Analyser information.
     * @returns Promise<any>
     */
    getTextAnalyserInfo(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method provides a document recognition component that recognizes text from images of documents.
     * @param  {documentImageAnalyserReq} documentImageAnalyserReq Reperesents the necessary parameter to convert document images to text format.
     * @returns Promise<DocumentAnalyser>
     */
    documentImageAnalyser(
        documentImageAnalyserReq: documentImageAnalyserReq
    ): Promise<MLDocument> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method stop the Document analyzer.
     * @returns Promise<any>
     */
    stopDocumentImageAnalyser(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method close the Document analyzer.
     * @returns Promise<any>
     */
    closeDocumentImageAnalyser(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method returns the Document analyzer setting.
     * @returns Promise<any>
     */
    getDocumentImageAnalyserSetting(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method returns the Image analyzer setting.
     * @returns Promise<any>
     */
    getTextAnalyserSetting(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method returns the GCR setting.
     * @returns Promise<any>
     */
    getGCRSetting(): Promise<gcrSettingResults> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method stop the Form Recognition Analyzer.
     * @returns Promise<any>
     */
    stopFormRecognitionAnalyser(): Promise<any> {
        return;
    }
    /**
     * The bank card recognition service recognizes bank cards in camera streams within angle offset of 15 degrees and extracts key information such as card number and validity period.
     * @param  {bankCardSDKDetectorReq|bankCardPluginDetectorReq} bankCardDetecterInput Represents the parameter required for bank card recognition.
     * @returns Promise<BankCardAnalyser> | Promise<BankCardAnalyser>
     */
    bankCardDetector(
        bankCardDetecterInput:
            | bankCardSDKDetectorReq
            | bankCardPluginDetectorReq
    ): Promise<MLBankCard> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method stop bankcard recognition service.
     * @returns Promise<any>
     */
    stopBankCardDetector(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    setResultTypeBcr(mLBcrCaptureConfig: mLBcrCaptureConfig): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    setRecModeBcr(mLBcrCaptureConfig: mLBcrCaptureConfig): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method returns the BCR setting.
     * @returns Promise<any>
     */
    getBankCardDetectorSetting(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * The general card recognition service provides a universal development framework based on the text recognition technology.
     * @param  {generalCardDetectorReq} generalCardDetectorReq Represents the parameter required for general card recognition plug-in.
     * @returns Promise<GeneralCardAnalyser>
     */
    generalCardDetector(
        generalCardDetectorReq: generalCardDetectorReq
    ): Promise<MLGcrCaptureResult> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * The general Vietnam id card  recognition service provides a universal development framework based on the text recognition technology.
     * @param  {icrVnDetectorReq} icrVnDetectorReq Represents the parameter required for general card recognition plug-in.
     * @returns Promise<MLVnIcrCaptureResult>
     */
    icrVnCardDetector(
        icrVnDetectorReq: icrVnDetectorReq
    ): Promise<MLVnIcrCaptureResult> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * The form recognition service uses AI technologies to recognize and return form structure information (including rows, columns, and coordinates of cells) and form text in Chinese and English (including punctuation) from input images.
     * @param  {formRecognizerAnalyserReq} formRecognizerAnalyserReq Represents the parameter required for general card recognition plug-in.
     * @returns Promise<GeneralCardAnalyser>
     */
    formRecognitionAnalyser(
        formRecognizerAnalyserReq: formRecognizerAnalyserReq
    ): Promise<MLGcrCaptureResult> {
        return;
    }
    @Cordova({ otherPromise: true })
    icrLocalAnalyser(
        localAnalyserReq: localAnalyserReq
    ): Promise<MLIcrCaptureResult> {
        return;
    }

    @Cordova({ otherPromise: true })
    icrLocalAnalyserCreateIdCard(
        createIdCardReq: createIdCardReq
    ): Promise<any> {
        return;
    }

    @Cordova({ otherPromise: true })
    icrLocalAnalyserStop(): Promise<any> {
        return;
    }

    @Cordova({ otherPromise: true })
    geticrCnCardInstance(): Promise<any> {
        return;
    }

    @Cordova({ otherPromise: true })
    icrCnCardCreate(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    geticrVnCardInstance(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    icrVnCardCreate(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    getIcrVnCapture(): Promise<any> {
        return;
    }
}

@Injectable()
export class HMSVoiceServiceProvider extends IonicNativePlugin {
    @CordovaProperty()
    MLFaceSetting = MLFaceSetting;
    @CordovaProperty()
    MLLocalTextSetting = MLLocalTextSetting;
    @CordovaProperty()
    MLTextConfig = MLTextConfig;
    @CordovaProperty()
    MLRemoteTextSetting = MLRemoteTextSetting;
    @CordovaProperty()
    MLImageClassificationConfig = MLImageClassificationConfig;
    @CordovaProperty()
    MLImageSegmentationSetting = MLImageSegmentationSetting;
    @CordovaProperty()
    MLImageSegmentationScene = MLImageSegmentationScene;
    @CordovaProperty()
    MLRemoteLandmarkSetting = MLRemoteLandmarkSetting;
    @CordovaProperty()
    MLBcrCaptureConfig = MLBcrCaptureConfig;
    @CordovaProperty()
    MLGcrCaptureUIConfig = MLGcrCaptureUIConfig;
    @CordovaProperty()
    MLBcrResultConfig = MLBcrResultConfig;
    @CordovaProperty()
    HandkeyPointConfig = HandkeyPointConfig;
    @CordovaProperty()
    ImgSuperResolutionConfig = ImgSuperResolutionConfig;
    @CordovaProperty()
    MlObjectAnalyserConfig = MlObjectAnalyserConfig;
    @CordovaProperty()
    DownloadStrategyCustom = DownloadStrategyCustom;
    @CordovaProperty()
    FEATURE = FEATURE;
    @CordovaProperty()
    LANGUAGE = LANGUAGE;
    @CordovaProperty()
    MLTtsConstants = MLTtsConstants;
    @CordovaProperty()
    Colors = Colors;
    @CordovaProperty()
    RectStyle = RectStyle;
    @CordovaProperty()
    MLSkeletonConfig = MLSkeletonConfig;
    @CordovaProperty()
    MLFlashMode = MLFlashMode;
    @CordovaProperty()
    MLLensType = MLLensType;
    @CordovaProperty()
    MLAnalyzerName = MLAnalyzerName;
    @CordovaProperty()
    MLFrame = MLFrame;
    @CordovaProperty()
    MLFormRecogitionConfig = MLFormRecogitionConfig;
    @CordovaProperty()
    MLFaceConfigs = MLFaceConfigs;
    @CordovaProperty()
    MLProductConfig = MLProductConfig;
    @CordovaProperty()
    MLLivenessConfig = MLLivenessConfig;
    @CordovaProperty()
    MLRttLanguages = MLRttLanguages;
    @CordovaProperty()
    MLRttScenes = MLRttScenes;
    @CordovaProperty()
    gcrCaptureType = gcrCaptureType;
    @CordovaProperty()
    syncType = syncType;

    @Cordova({ otherPromise: true })
    /**
     * @param  {syncProbabilityDetect} syncRequestLocalLangDetect Represents the parameter.
     * @returns Promise<MLRemoteLangDetection>
     */
    syncProbabilityDetect(
        syncProbabilityDetect: syncRequestLocalLangDetect
    ): Promise<MLRemoteLangDetection> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * @param  {syncProbabilityDetect} syncProbabilityDetect Represents the parameter.
     * @returns Promise<String>
     */
    syncFirstBestDetect(
        syncProbabilityDetect: syncRequestLocalLangDetect
    ): Promise<String> {
        return;
    }

    @Cordova({ otherPromise: true })
    /**
     * Implements on-cloud text translation.
     * @param  {remotetranslateReq} remotetranslateReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    remoteTranslator(remotetranslateReq: remotetranslateReq): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * Implements on-cloud text translation.
     * @param  {localtranslateReq} localtranslateReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    localTranslator(localtranslateReq: localtranslateReq): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * Obtains all languages supported for local translation.
     * @param  {localAllLangReq} localAllLangReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    translatorLocalAllLang(localAllLangReq: localAllLangReq): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * Obtains all languages supported for on-cloud translation.
     * @param  {remoteAllLangReq} remoteAllLangReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    translatorRemoteAllLang(remoteAllLangReq: remoteAllLangReq): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * Detects languages on the cloud.
     * @param  {remoteLangDetectionReq} remoteLangDetectionReq Represents the parameter required for lang detection.
     * @returns Promise<RemoteLangDetectionAnalyser> | Promise<langDetectionWithFirstDetect>
     */
    remoteLangDetection(
        remoteLangDetectionReq: remoteLangDetectionReq
    ): Promise<MLRemoteLangDetection | MLlangDetectionWithFirstDetect> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * Detects languages on local.
     * @param  {localLangDetectionReq} localLangDetectionReq Represents the parameter required for lang detection.
     * @returns Promise<any> | Promise<any>
     */
    localLangDetection(
        localLangDetectionReq: localLangDetectionReq
    ): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })

    /**
     * Download language model.
     * @param  {downloadTranslateReq} downloadTranslateReq Represents the parameter required for download model.
     * @returns Promise<any>
     */
    translatorDownloadModel(
        downloadTranslateReq: downloadTranslateReq
    ): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * For delete language model.
     * @param  {deleteTranslateReq} deleteTranslateReq Represents the parameter required for delete model.
     * @returns Promise<any>
     */
    translatorDeleteModel(
        deleteTranslateReq: deleteTranslateReq
    ): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method stop translator service.
     * @returns Promise<any>
     */
    stopTranslatorService(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method return RTT setting.
     * @returns Promise<any>
     */
    getRTTSetting(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method returns TTS setting.
     * @returns Promise<any>
     */
    getTTSSetting(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method returns AFT setting.
     * @returns Promise<any>
     */
    getAFTSetting(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method returns Lang Detection setting.
     * @returns Promise<any>
     */
    getLangDetectionSetting(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method stop lang detection service.
     * @returns Promise<any>
     */
    stopLangDetectionService(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * The sound detection service can detect sound events in online (real-time recording) mode. The detected sound events can help you perform subsequent actions.
     * @param  {soundDectReq} soundDectReq Represents the parameter required for Sound Detection analyser.
     * @returns Promise<any>
     */
    soundDectAnalyser(soundDectReq: soundDectReq): Promise<MLSoundDectResult> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * TTS can convert text information into audio output. Rich timbres, and volume and speed options are supported to produce more natural sounds.
     * @param  {ttsReq} ttsReq Represents the parameter required for text to speech.
     * @returns Promise<TtsAnalyser>
     */
    ttsAnalyser(ttsReq: ttsReq): Promise<MLTtsResult> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * TTS can convert text information into audio output offline. Rich timbres, and volume and speed options are supported to produce more natural sounds.
     * @param  {ttsReq} ttsReq Represents the parameter required for text to speech.
     * @returns Promise<TtsAnalyser>
     */
    ttsOfflineAnalyser(ttsReq: ttsReq): Promise<MLTtsResult> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This service stop text to speech (TTS) service.
     * @returns Promise<any>
     */
    ttsAnalyserStop(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This service pauses text to speech (TTS) analyser.
     * @returns Promise<any>
     */
    ttsAnalyserPause(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This service continues text to speech (TTS) analyser.
     * @returns Promise<any>
     */
    ttsAnalyserResume(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This service shutdown text to speech (TTS) analyser.
     * @returns Promise<any>
     */
    ttsAnalysershutDown(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This method returns TTS Download setting.
     * @returns Promise<any>
     */
    ttsAnalyserDownloadSetting(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This service close AFT analyser.
     * @returns Promise<any>
     */
    aftAnalyserClose(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This service stop AFT analyser.
     * @returns Promise<any>
     */
    asrAnalyserStop(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This service destroy AFT analyser.
     * @returns Promise<any>
     */
    aftAnalyserDestroy(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This service pause AFT analyser.
     * @returns Promise<any>
     */
    aftAnalyserPause(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * This service destroy Sound Detection analyser.
     * @returns Promise<any>
     */
    soundDectAnalyserDestroy(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * The audio file transcription service can convert an audio file less than or equal to 60 seconds into a text file. Currently, Chinese and English are supported.
     * @param  {aftReq} aftReq Represents the parameter required for aft analyser.
     * @returns Promise<AftAnalyser>
     */
    aftAnalyser(aftReq: aftReq): Promise<MLAftResult> {
        return;
    }
    /**
     * ASR can recognize speech not longer than 60s and convert the input speech into text in real time.
     * @param  {asrReq} asrReq Represents the parameter required for asr analyser.
     * @param  {any} success A callback function. It is called when function is executed successfully. It returns the results of text.
     * @param  {any} error A callback function. It is called when function is failed.
     * @returns callback
     */
    @Cordova({ observable: true })
    asrAnalyser(asrReq: asrReq): Observable<any> {
        return;
    }
    /**
     * Real-time transcription enables your app to convert long speech (no longer than 5 hours) into text in real time. The generated text contains punctuation marks and timestamps.
     * @param  {rttReq} rttReq Represents the parameter required for rtt analyser.
     * @param  {any} success A callback function. It is called when function is executed successfully. It returns the results of text.
     * @param  {any} error A callback function. It is called when function is failed.
     * @returns callback
     */
    @Cordova({ observable: true })
    rttAnalyserStart(rttReq: rttReq): Observable<any> {
        return;
    }
    /**
     * This method stop RTT analyser
     * @param  {any} success A callback function. It is called when function is executed successfully. It returns the results of text.
     * @param  {any} error A callback function. It is called when function is failed.
     * @returns callback
     */
    @Cordova({ observable: true })
    rttAnalyserStop(): Observable<any> {
        return;
    }
}

export abstract class MLLive {
    private arScene: any;

    constructor(scene: string, divId: string) {
        if (scene === "ACTION_LIVE_ANALYSE")
            this.arScene = new (HMSMLKit.getPlugin().liveEngineAnalyser)(divId);
    }

    on(call: (value: any) => void): Promise<void> {
        return this.arScene.on(call);
    }
    startARScene(config?: MLconfig, bounds?: MLBounds): Promise<void> {
        return this.arScene.startARScene(config, bounds);
    }
    destroy(): Promise<void> {
        return this.arScene.destroy();
    }
    setConfig(config: MLconfig): Promise<void> {
        return this.arScene.setConfig(config);
    }
    scroll(): Promise<void> {
        return this.arScene.scroll();
    }
}

export class liveEngineAnalyser extends MLLive {
    constructor(divId: string) {
        super("ACTION_LIVE_ANALYSE", divId);
    }
}

export interface RequestPermissionReq {
    permissionList: Array<string>;
}
export interface CheckPermissionReq {
    permissionList: Array<string>;
}
export interface statisticsnReq {
    isAllowed: boolean;
}
export interface MLBounds {
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
}
export interface MLconfig {
    lensEngineReq: lensEngineReq;
}
export interface lensEngineReq {
    analyzerName: MLAnalyzerName;
    lensEngineSetting?: MLLensEngineSetting;
    graphicSetting?:
        | FaceGraphicSetting
        | sceneSettings
        | HandkeyGraphicSetting
        | SkeletonGraphicSetting
        | ObjectGraphicSetting
        | null;
    analyzerSetting?:
        | mlFaceAnalyzerSetting
        | MLFaceVerificationAnalyzerSetting
        | mlHandKeypointSetting
        | mlImageSegmentationSetting
        | mlObjectAnalyserSetting
        | null;
}
export interface MLconfigComposite {
    lensEngineReq: compositeAnalyser;
}
export interface compositeAnalyser {
    analyzerNames?: Array<MLAnalyzerName>;
    lensEngineSetting?: MLLensEngineSetting;
    grapgicSetting?:
        | FaceGraphicSetting
        | sceneSettings
        | HandkeyGraphicSetting
        | SkeletonGraphicSetting
        | ObjectGraphicSetting
        | null;
    analyzerSetting?:
        | mlFaceAnalyzerSetting
        | MLFaceVerificationAnalyzerSetting
        | mlHandKeypointSetting
        | mlImageSegmentationSetting
        | mlObjectAnalyserSetting
        | null;
}
export interface MLLensEngineSetting {
    fps?: number | null;
    displayDimensionI?: number | null;
    displayDimensionI1?: number | null;
    lensType?: MLLensType | null;
    enableFocus?: boolean | null;
    flashMode?: MLFlashMode | null;
}
export enum MLFlashMode {
    AUTO = "auto",
    ON = "on",
    OFF = "off",
}
export enum MLLensType {
    BACK_LENS = 0,
    FRONT_LENS = 1,
}

export enum MLStillCompositerName {
    FACE = "FACE",
    HAND = "HAND",
    SKELETON = "SKELETON",
    OBJECT = "OBJECT",
    TEXT = "TEXT",
    CLASSIFICATION = "classification",
}
export enum MLAnalyzerName {
    LIVEFACE = "FACE",
    LIVEFACE3D = "FACE3D",
    LIVEFACEMAX = "FACEMAX",
    LIVEHAND = "HAND",
    LIVESKELETON = "SKELETON",
    LIVEOBJECT = "OBJECT",
    LIVECLASSIFICATION = "CLASSIFICATION",
    LIVESCENE = "SCENE",
    LIVETEXT = "TEXT",
    LIVEGESTURE = "GESTURE",
}
export interface doZoomReq {
    scale?: number | null;
}
export interface mlFrameReq {
    actionName: MLFrame;
    filePath: any;
}
export enum MLFrame {
    getPreviewBitmap = "getPreviewBitmap",
    readBitmap = "readBitmap",
    rotate = "rotate",
    SCREEN_FIRST_QUADRANT = 0,
    SCREEN_SECOND_QUADRANT = 1,
    SCREEN_THIRD_QUADRANT = 2,
    SCREEN_FOURTH_QUADRANT = 3,
}

// API KEY

export interface configReq {
    apiKey: string;
}

export interface appSettingReq {
    apiKey?: string | null;
    applicationId?: string | null;
    certFingerprint?: string | null;
}

// COMPOSITE

export interface compositeAnalyserReq {
    compositeAnalyserConfig: compositeAnalyserConfig;
}
export interface compositeAnalyserConfig {
    filePath: any;
    analyzerNames?: Array<MLStillCompositerName>;
    analyzerSetting?:
        | mlFaceAnalyzerSetting
        | MLFaceVerificationAnalyzerSetting
        | mlHandKeypointSetting
        | mlImageSegmentationSetting
        | mlObjectAnalyserSetting
        | null;
}

// AFT ANALYSER

export interface aftReq {
    audioPath: any;
    aftSetting?: AftSetting;
}

export interface AftSetting {
    languageCode?: string | null;
    punctuationEnabled?: boolean | null;
    timeOffset?: boolean | null;
    wordTimeOffsetEnabled?: boolean | null;
    sentenceTimeOffsetEnabled?: boolean | null;
}

// ASR ANALYSER

export interface asrReq {
    language?: LANGUAGE | null;
    feature?: FEATURE | null;
}

export enum MLAsrConstants {
    PUNCTUATION_ENABLE = "PUNCTUATION_ENABLE",
    ERR_NO_NETWORK = 11202,
    ERR_NO_UNDERSTAND = 11204,
    ERR_SERVICE_UNAVAILABLE = 11203,
    FEATURE = "FEATURE",
    LANGUAGE = "LANGUAGE",
    LAN_EN_US = "en-US",
    LAN_FR_FR = "fr-FR",
    LAN_ZH = "zh",
    LAN_ZH_CN = "zh-CN",
    LAN_ES_ES = "es-ES",
    LAN_DE_DE = "de-DE",
    LAN_RU_RU = "ru-RU",
    LAN_IT_IT = "it-IT",
    LAN_AR = "ar",
    LAN_TH_TH = "th_TH",
    LAN_MS_MY = "ms_MY",
    LAN_FIL_PH = "fil_PH",
    Turkish = "tr-TR",
    ERR_INVALIDATE_TOKEN = 11219,
    FEATURE_ALLINONE = 12,
    FEATURE_WORDFLUX = 11,
    SCENES = "scenes",
    SCENES_SHOPPING = "shopping",
    STATE_LISTENING = 1,
    STATE_NO_NETWORK = 7,
    STATE_NO_SOUND = 2,
    STATE_NO_SOUND_TIMES_EXCEED = 3,
    STATE_NO_UNDERSTAND = 6,
    STATE_WAITING = 9,
    ACTION_HMS_ASR_SPEECH = "com.huawei.hms.mlsdk.action.RECOGNIZE_SPEECH",
    WAVE_PAINE_ENCODING = "ENCODING",
    WAVE_PAINE_SAMPLE_RATE = "SAMPLE_RATE",
    WAVE_PAINE_BIT_WIDTH = "BIT_WIDTH",
    WAVE_PAINE_CHANNEL_COUNT = "CHANNEL_COUNT",
}

export enum FEATURE {
    FEATURE_ALLINONE = 12,
    FEATURE_WORDFLUX = 11,
}

export enum LANGUAGE {
    LAN_EN_US = "en-US",
    LAN_FR_FR = "fr-FR",
    LAN_ZH = "zh",
    LAN_ZH_CN = "zh-CN",
    LAN_ES_ES = "es-ES",
    LAN_DE_DE = "de-DE",
    LAN_RU_RU = "ru-RU",
    LAN_IT_IT = "it-IT",
    LAN_AR = "ar",
    LAN_TH_TH = "th_TH",
    LAN_MS_MY = "ms_MY",
    LAN_FIL_PH = "fil_PH",
    Turkish = "tr-TR",
}

export enum MLDocumentSkewCorrectionConstant {
    SUCCESS = 0,
    DETECT_FAILED = 1,
    CORRECTION_FAILED = 2,
    IMAGE_DATA_ERROR = 3,
}

// SDK BANK CARD ANALYSER

export interface bankCardSDKDetectorReq {
    filePath: any;
    detectType: 0;
    mLBcrAnalyzerSetting?: MLBcrAnalyzerSetting | null;
}

export interface MLBcrAnalyzerSetting {
    langType?: string | null;
    resultType?: MLBcrResultConfig | null;
}

// PLUGIN BANK CARD ANALYSER

export interface bankCardPluginDetectorReq {
    detectType: 1;
    mLBcrCaptureConfig?: mLBcrCaptureConfig | null;
}

export interface mLBcrCaptureConfig {
    orientation?: MLBcrCaptureConfig | null;
    resultType?: MLBcrResultConfig | null;
    recMode?: RecMode | null;
}

export enum RecMode {
    WEAK_MODE = 0,
    STRICT_MODE = 1,
}

export enum MLBcrCaptureConfig {
    ERROR_CODE_INIT_CAMERA_FAILED = 10101,
    RESULT_NUM_ONLY = 0,
    ORIENTATION_AUTO = 0,
    WEAK_MODE = 0,
    ORIENTATION_LANDSCAPE = 1,
    ORIENTATION_PORTRAIT = 2,
    RESULT_ALL = 2,
    RESULT_SIMPLE = 1,
    STRICT_MODE = 1,
}
export enum MLBcrResultConfig {
    RESULT_NUM_ONLY = 0,
    RESULT_SIMPLE = 1,
    RESULT_ALL = 2,
}

export interface MLBcrCaptureResult {
    errorCode?: MLBcrCaptureErrorCode | null;
    expire?: String | null;
    issuer?: String | null;
    number?: String | null;
    numberBitmap?: any;
    organization?: String | null;
    riginalBitmap?: any;
    type?: String | null;
}

export enum MLBcrCaptureErrorCode {
    ERROR_CODE_INIT_CAMERA_FAILED = 10101,
}

//Classify

export interface localImageClassificationReq {
    ocrType: MLImageClassificationConfig | null;
    analyseMode?: number | null;
    localClassificationAnalyzerSetting?: LocalClassificationAnalyzerSetting | null;
    filePath: any;
}
export interface LocalClassificationAnalyzerSetting {
    possibility?: number | null;
}

export interface remoteImageClassificationReq {
    ocrType: MLImageClassificationConfig;
    analyseMode?: number;
    remoteClassificationAnalyzerSetting?: RemoteClassificationAnalyzerSetting | null;
    filePath: any;
}

export interface RemoteClassificationAnalyzerSetting {
    maxResults?: number | null;
    possibility?: number | null;
    isEnableFingerprintVerification?: boolean | null;
}

export enum MLImageClassificationConfig {
    TYPE_LOCAL = 0,
    TYPE_REMOTE = 1,
}

//Custom Model Download

export interface downloadModelReq {
    detectType: 1;
    filePath: any;
    downloadStrategySetting?: DownloadStrategySetting | null;
}

export interface DownloadStrategySetting {
    isChargingNeed: boolean | null;
    isWifiNeed: boolean | null;
    isDeviceIdleNeed: boolean | null;
    setRegion?: DownloadStrategyCustom | null;
}
export enum DownloadStrategyCustom {
    REGION_DR_CHINA = 1002,
    REGION_DR_AFILA = 1003,
    REGION_DR_EUROPE = 1004,
    REGION_DR_RUSSIA = 1005,
}

export interface ownCustomModelReq {
    detectType: number;
    filePath: any;
    modelFullName: string | null;
    modelName: string | null;
    labelFileName: string | null;
    bitmapHeight: number | null;
    bitmapWidth: number | null;
    outPutSize: number | null;
}

//Document Analyser

export interface documentImageAnalyserReq {
    documentSetting?: DocumentSetting | null;
    filePath: any;
}
export interface DocumentSetting {
    borderType?: MLRemoteTextSetting | null;
    LanguageList?: Array<string> | null;
    enableFingerprintVerification: boolean | null;
}

export enum MLRemoteTextSetting {
    OCR_LOOSE_SCENE = 1,
    OCR_COMPACT_SCENE = 2,
    NGON = "NGON",
    ARC = "ARC",
    OTHER = 5,
    NEW_LINE_CHARACTER = 8,
    SPACE = 6,
}
export enum languageListRemoteText {
    LATIN = "rm",
    ENGLISH = "en",
    CHINESE = "zh",
    JAPANESE = "ja",
    KOREAN = "ko",
    RUSSIAN = "ru",
    GERMAN = "de",
    FRENCH = "fr",
    ITALIAN = "it",
    PORTUGUESE = "pt",
    SPANISH = "es",
    POLISH = "pl",
    NORWEGIAN = "no",
    SWEDISH = "sv",
    DANISH = "da",
    TURKISH = "tr",
    FINNISH = "fi",
    THAI = "th",
    ARABIC = "ar",
    HINDI = "hi",
}

//Form Recognizer Analyser

export interface formRecognizerAnalyserReq {
    filePath: any;
    syncType: MLFormRecogitionConfig;
}
export enum MLFormRecogitionConfig {
    SYNC_TYPE = 1,
    ASYNC_TYPE = 0,
}

//Document Skew Correction

export interface documentSkewCorrectionReq {
    filePath: any;
    syncMode?: MLFormRecogitionConfig | null;
}

// STILL && LIVE FACE ANALYSER

export interface faceReq {
    mlFaceAnalyserSetting?: mlFaceAnalyzerSetting | null;
    analyseMode?: MLFaceConfigs | null;
    filePath: any;
}

export interface faceVerificationReq {
    mlFaceVerificationAnalyzerSetting?: MLFaceVerificationAnalyzerSetting | null;
    syncType?: syncType | null;
    filePath: any;
    filePath2: any;
}

export enum MLFaceConfigs {
    TYPE_2D_SYNC = 0,
    TYPE_2D_ASYNC = 1,
    TYPE_3D_SYNC = 2,
    TYPE_3D_ASYNC = 3,
}

export interface FaceGraphicSetting {
    facePositionPaintSetting?: FacePositionPaintSetting | null;
    textPaintSetting?: TextPaintSettingFace | null;
    faceFeaturePaintTextSetting?: FaceFeaturePaintTextSetting | null;
    keypointPaintSetting?: KeypointPaintSetting | null;
    boxPaintSetting?: BoxPaintSettingFace | null;
    facePaintSetting?: FacePaintSetting | null;
    eyePaintSetting?: EyePaintSetting | null;
    eyebrowPaintSetting?: EyebrowPaintSetting | null;
    nosePaintSetting?: NosePaintSetting | null;
    noseBasePaintSetting?: NoseBasePaintSetting | null;
    lipPaintSetting?: LipPaintSetting | null;
}
export interface LipPaintSetting {
    color?: String | Colors | null;
    style?: RectStyle | null;
    strokeWidth: Number | null;
}
export interface NosePaintSetting {
    color?: String | Colors | null;
    style?: RectStyle | null;
    strokeWidth?: Number;
}
export interface NoseBasePaintSetting {
    color?: String | Colors | null;
    style?: RectStyle | null;
    strokeWidth?: Number;
}
export interface EyebrowPaintSetting {
    color?: String | Colors | null;
    style?: RectStyle;
    strokeWidth?: Number;
}
export interface EyePaintSetting {
    color?: String | Colors;
    style?: RectStyle | Colors;
    strokeWidth: Number | null;
}
export interface FacePaintSetting {
    color?: String | Colors | null;
    style?: RectStyle | null;
    strokeWidth: Number | null;
}
export interface BoxPaintSettingFace {
    color?: String | Colors | null;
    style?: RectStyle | null;
    strokeWidth?: Number | null;
}
export interface KeypointPaintSetting {
    color?: Colors | Colors | null;
    style?: RectStyle | null;
    textSize: Number | null;
}

export interface FaceFeaturePaintTextSetting {
    color?: Colors | null;
    textSize: Number | null;
}
export interface FacePositionPaintSetting {
    color?: Colors | null;
}
export interface TextPaintSettingFace {
    color?: Colors | null;
    textSize?: Number | null;
}

export interface MLFaceVerificationAnalyzerSetting {
    maxFaceDetcted: number | null;
}
export interface mlFaceAnalyzerSetting {
    featureType?: MLFaceSetting | null;
    keyPointType?: MLFaceSetting | null;
    maxSizeFaceOnly?: boolean | null;
    minFaceProportion?: number | null;
    performanceType?: MLFaceSetting | null;
    poseDisabled?: boolean | null;
    shapeType?: MLFaceSetting | null;
    tracingAllowed?: boolean | null;
    tracingMode?: number | null;
}

export enum MLFaceSetting {
    MODE_TRACING_FAST = 1,
    MODE_TRACING_ROBUST = 2,
    TYPE_FEATURES = 1,
    TYPE_FEATURE_AGE = 256,
    TYPE_FEATURE_BEARD = 32,
    TYPE_FEATURE_EMOTION = 4,
    TYPE_FEATURE_EYEGLASS = 8,
    TYPE_FEATURE_GENDAR = 128,
    TYPE_FEATURE_HAT = 16,
    TYPE_FEATURE_OPENCLOSEEYE = 64,
    TYPE_KEYPOINTS = 1,
    TYPE_PRECISION = 1,
    TYPE_SHAPES = 2,
    TYPE_SPEED = 2,
    TYPE_UNSUPPORT_FEATURES = 2,
    TYPE_UNSUPPORT_KEYPOINTS = 0,
    TYPE_UNSUPPORT_SHAPES = 3,
    TYPE_BOTTOM_OF_MOUTH = 1,
    TYPE_LEFT_CHEEK = 2,
    TYPE_LEFT_EAR = 3,
    TYPE_LEFT_SIDE_OF_MOUTH = 6,
    TYPE_RIGHT_CHEEK = 8,
    TYPE_RIGHT_EAR = 9,
    TYPE_RIGHT_SIDE_OF_MOUTH = 12,
    TYPE_TIP_OF_LEFT_EAR = 4,
    TYPE_TIP_OF_NOSE = 7,
    TYPE_TIP_OF_RIGHT_EAR = 10,
    TYPE_ALL = 0,
    TYPE_BOTTOM_OF_LEFT_EYEBROW = 4,
    TYPE_BOTTOM_OF_LOWER_LIP = 8,
    TYPE_BOTTOM_OF_NOSE = 12,
    TYPE_BOTTOM_OF_RIGHT_EYEBROW = 5,
    TYPE_BOTTOM_OF_UPPER_LIP = 10,
    TYPE_BRIDGE_OF_NOSE = 13,
    TYPE_FACE = 1,
    TYPE_TOP_OF_LEFT_EYEBROW = 6,
    TYPE_TOP_OF_LOWER_LIP = 9,
    TYPE_TOP_OF_RIGHT_EYEBROW = 7,
    TYPE_TOP_OF_UPPER_LIP = 11,
}

// GENERAL CARD ANALYSER

export interface maxFaceVerificationReq {
    MaxFaceDetcted?: number;
}

export interface generalCardDetectorReq {
    gcrCaptureConfig?: gcrCaptureConfig;
    gcrCaptureUIConfig?: gcrCaptureUIConfig;
    captureType?: gcrCaptureType | null;
}

export interface gcrCaptureConfig {
    language: string;
}
export enum gcrCaptureType {
    CAPTURE_ACTIVITY = 0,
    CAPTURE_PHOTO = 1,
    CAPTURE_IMAGE = 2,
}
export interface gcrCaptureUIConfig {
    orientation?: MLGcrCaptureUIConfig | null;
    tipText?: string | null;
    tipTextColor?: number | null;
    photoButtonResId?: number | null;
    scanBoxCornerColor?: number | null;
    backButtonRedId?: number | null;
    torchRedId?: number | null;
}
export interface gcrSettingResults {
    gcrConfigLanguage: String;
    torchOnResId: number;
    tipTextColor: number;
    tipText: String;
    backButtonResId: number;
    orientation: number;
    photoButtonResId: number;
    scanBoxScreenRatio: number;
    scanBoxCornerColor: number;
    scanBoxAspectRatio: number;
}

export enum MLGcrCaptureUIConfig {
    ORIENTATION_AUTO = 0,
    ORIENTATION_LANDSCAPE = 1,
    ORIENTATION_PORTRAIT = 2,
}

// ID CARD ANALYSER

export interface icrVnDetectorReq {
    captureType: icrCaptureType;
    filePath?: any | null;
}

export interface icrCnDetectorReq {
    captureType: icrCaptureType;
    filePath?: any | null;
    isFront?: boolean | null;
}

export enum icrCaptureType {
    CAPTURE_CAMERA = 0,
    CAPTURE_IMAGE = 1,
}

export interface createIdCardReq {
    mlIcrAnalyzerSetting?: MLIcrAnalyzerSetting | null;
}

export interface localAnalyserReq {
    settings: MLIcrAnalyzerSetting;
    filePath?: any | null;
}
export interface MLIcrAnalyzerSetting {
    countryCode: string;
    hashCode?: number | null;
    sideType?: MLIcrSideType | null;
}

export interface localAnalyzerReq {}
export enum MLIcrSideType {
    FRONT = "FRONT",
    BACK = "BACK",
}

//Live && Stil HandkeyPoint

export interface stillHandKeypointReq {
    syncType?: syncType | null;
    filePath: any;
    handkeySetting?: mlHandKeypointSetting | null;
}

export interface stillGestureReq {
    syncType?: syncType | null;
    filePath: any;
}

export enum syncType {
    SYNC_MODE = 0,
    ASYNC_MODE = 1,
}

export interface MLGesture {
    rect?: Rect;
    score?: number;
    category?: number;
    hashCode?: number;
}

export enum GestureTypes {
    ONE = 0,
    SECOND = 1,
    THREE = 2,
    FOUR = 3,
    FIVE = 4,
    SIX = 5,
    SEVEN = 6,
    EIGHT = 7,
    NINE = 8,
    DISS = 9,
    FIST = 10,
    GOOD = 11,
    HEART = 12,
    OK = 13,
    UNKNOWN = 14,
}

export interface GestureGraphicSetting {
    idPaintnewSetting?: IdPaintnewSetting | null;
    rectPaintSetting?: RectPaintSetting | null;
}

export interface HandkeyGraphicSetting {
    idPaintnewSetting?: IdPaintnewSetting | null;
    rectPaintSetting?: RectPaintSetting | null;
}
export interface IdPaintnewSetting {
    color?: Colors | null;
    textSize?: Number | null;
}
export interface RectPaintSetting {
    color?: Colors | null;
    style?: RectStyle | null;
    boxStrokeWidth?: Number | null;
}
export interface mlHandKeypointSetting {
    sceneType?: HandkeyPointConfig | null;
    maxHandResults?: number | null;
}
export enum HandkeyPointConfig {
    TYPE_ALL = 0,
    TYPE_KEYPOINT_ONLY = 1,
    TYPE_RECT_ONLY = 2,
    MAX_HANDS_NUM = 10,
}

//Image Super Resolution

export interface imageSuperResolutionReq {
    filePath: any;
    imgSuperResolutionSetting?: ImgSuperResolutionSetting | null;
    syncType?: MLFormRecogitionConfig | null;
}
export interface ImgSuperResolutionSetting {
    scaleType?: ImgSuperResolutionConfig;
}
export enum ImgSuperResolutionConfig {
    ISR_SCALE_1X = 1.0,
    ISR_SCALE_3X = 3.0,
}

//Product Vision Analyser

export interface productReq {
    filePath?: any | null;
    detectType?: number;
    mlProductSetting?: mlProductSetting | null;
}
export interface mlProductSetting {
    largestNumOfReturns?: number | null;
    productSetId?: string | null;
    region?: MLProductConfig | null;
}
export enum MLProductConfig {
    REGION_DR_CHINA = 1002,
    REGION_DR_AFILA = 1003,
    REGION_DR_EUROPE = 1004,
    REGION_DR_RUSSIA = 1005,
    REGION_DR_GERMAN = 1006,
    REGION_DR_SIANGAPORE = 1007,
}

//Text Image Super Resolution

export interface textImageSuperResolutionReq {
    filePath: any;
    analyseMode?: MLFormRecogitionConfig | null;
}

//IMAGE STILL && LIVESEGMENTATION

export interface imgSegmentationReq {
    imageSegmentationSetting?: mlImageSegmentationSetting;
    filePath: any;
    analyseMode?: MLFormRecogitionConfig | null;
}

export interface mlImageSegmentationSetting {
    isExact: boolean | null;
    analyserType?: MLImageSegmentationSetting | null;
    scene?: MLImageSegmentationScene;
    hashCode?: number | null;
}

export enum MLImageSegmentationSetting {
    BODY_SEG = 0,
    IMAGE_SEG = 1,
    HAIR_SEG = 2,
}

export enum MLImageSegmentationClassification {
    TYPE_BACKGOURND = 0,
    TYPE_HUMAN = 1,
    TYPE_SKY = 2,
    TYPE_GRASS = 3,
    TYPE_FOOD = 4,
    TYPE_CAT = 5,
    TYPE_BUILD = 6,
    TYPE_FLOWER = 7,
    TYPE_WATER = 8,
    TYPE_SAND = 9,
    TYPE_MOUNTAIN = 10,
}
export enum MLImageSegmentationScene {
    ALL = 0,
    MASK_ONLY = 1,
    FOREGROUND_ONLY = 2,
    GRAYSCALE_ONLY = 3,
}

//LAND MARK

export interface imgLandMarkReq {
    landmarkAnalyzerSetting?: landmarkAnalyzerSetting;
    filePath: any;
}

export interface landmarkAnalyzerSetting {
    maxResults?: number | null;
    modelType?: MLRemoteLandmarkSetting | null;
}

export enum MLRemoteLandmarkSetting {
    STEADY_PATTERN = 1,
    NEWEST_PATTERN = 2,
}

//Lang Detect

export interface remoteLangDetectionReq {
    sourceText: string;
    taskMode?: number;
    trustedThreshold?: number;
}
export interface localLangDetectionReq {
    sourceText: string;
    trustedThreshold?: number;
}

export interface syncRequestLocalLangDetect {
    sourceText: string;
    trustedThreshold?: number;
}

export enum MLLanguageDetection {
    FIRST_BEST_DETECTION_LANGUAGE_TRUSTED_THRESHOLD = 0.5,
    PROBABILITY_DETECTION_LANGUAGE_TRUSTED_THRESHOLD = 0.01,
    UNDETECTION_LANGUAGE_TRUSTED_THRESHOLD = "unknown",
}

//Liveness Detection

export interface livenessDetectionReq {
    analyserMode?: MLLivenessCaptureResult | null;
}
export enum MLLivenessConfig {
    DEFAULT = 0,
    CUSTOM = 1,
}
export enum MLLivenessCaptureError {
    CAMERA_NO_PERMISSION = 11401,
    CAMERA_START_FAILED = 11402,
    USER_CANCEL = 11403,
    DETECT_FACE_TIME_OUT = 11404,
    DETECT_MASK = 1,
}

// STILL && LIVEOBJECT  ANALYSER

export interface objectReq {
    filePath: any;
    mlObjectAnalyserSetting?: mlObjectAnalyserSetting;
    syncType?: MLFormRecogitionConfig | null;
}
export interface ObjectGraphicSetting {
    boxPaintSetting?: BoxPaintSetting | null;
    textPaintSetting?: TextPaintSetting | null;
}
export interface BoxPaintSetting {
    color?: Colors | null;
    style?: RectStyle | null;
    boxStrokeWidth?: Number | null;
}
export interface TextPaintSetting {
    color?: Colors | null;
    textSize?: Number | null;
}
export interface mlObjectAnalyserSetting {
    isClassificationAllowed?: boolean | null;
    isMultipleResultsAllowed?: boolean | null;
    analyzerType: MlObjectAnalyserConfig;
}
export enum MlObjectAnalyserConfig {
    TYPE_PICTURE = 0,
    TYPE_VIDEO = 1,
    TYPE_OTHER = 0,
    TYPE_GOODS = 1,
    TYPE_FOOD = 2,
    TYPE_FURNITURE = 3,
    TYPE_PLANT = 4,
    TYPE_PLACE = 5,
    TYPE_FACE = 6,
}

//RTT

export interface rttReq {
    mLSpeechRealTimeTranscriptionConfig: MLSpeechRealTimeTranscriptionConfig;
}
export interface MLSpeechRealTimeTranscriptionConfig {
    language: MLRttLanguages | null;
    punctuationEnable: boolean | null;
    wordTimeOffsetEnable: boolean | null;
    sentenceTimeOffsetEnable: boolean | null;
    scenes?: MLRttScenes | null;
}
export enum MLRttLanguages {
    LAN_ZH_CN = "zh-CN",
    LAN_EN_US = "en-US",
    LAN_FR_FR = "fr-FR",
    LAN_ES_ES = "es-ES",
    LAN_EN_IN = "en-IN",
    LAN_DE_DE = "de-DE",
}
export enum MLRttScenes {
    SCENES_SHOPPINGf = "shopping",
}
export enum MLSpeechRealTimeTranscriptionConstants {
    ERR_INVALIDE_TOKEN = 13219,
    ERR_NO_NETWORK = 13202,
    ERR_SERVICE_CREDIT = 13222,
    ERR_SERVICE_UNSUBSCRIBED = 13223,
    ERR_SERVICE_FREE_USED_UP = 13224,
    ERR_SERVICE_UNAVAILABLE = 13203,
    LAN_EN_US = " en-US",
    LAN_FR_FR = "fr-FR",
    LAN_ZH_CN = "zh-CN",
    RESULTS_PARTIALFINAL = "RESULTS_PARTIALFINAL",
    RESULTS_RECOGNIZING = "results_recognizing",
    RESULTS_SENTENCE_OFFSET = "RESULTS_SENTENCE_OFFSET",
    RESULTS_WORD_OFFSET = "RESULTS_WORD_OFFSET",
    SCENES_SHOPPING = "shopping",
    STATE_SERVICE_RECONNECTED = 43,
    STATE_SERVICE_RECONNECTING = 42,
    STATE_LISTENING = 1,
    STATE_NO_NETWORK = 7,
    STATE_NO_UNDERSTAND = 6,
    WAVE_PAINE_BIT_WIDTH = "BIT_WIDTH",
    WAVE_PAINE_CHANNEL_COUNT = "CHANNEL_COUNT",
    WAVE_PAINE_ENCODING = "ENCODING",
    WAVE_PAINE_SAMPLE_RATE = "SAMPLE_RATE",
}

//STILL && LIVE SCENE ANALYSER

export interface stillSceneReq {
    filePath: any;
    analyseMode?: syncType | null;
}

export interface sceneSettings {
    color?: Colors | null;
    textSize?: Number | null;
}

//STILL && LIVE SKELETON ANALYSER

export interface stillSkeletonReq {
    filePath: any;
    syncType: MLSkeletonConfig;
    analyzerType: MLSkeletonConfig;
}
export interface stillSkeletonSimilarityReq {
    filePath: any;
    filepath2: any;
    syncType: MLSkeletonConfig;
    analyzerType: MLSkeletonConfig;
}
export enum MLSkeletonConfig {
    SYNC_MODE = 0,
    ASYNC_MODE = 1,
    SIMILARITTY_MODE = 2,
    TYPE_YOGA = 1,
    TYPE_NORMAL = 0,
}

export interface SkeletonGraphicSetting {
    circlePaintSetting?: circlePaintSetting | null;
    linePaintSetting?: linePaintSetting | null;
}
export interface circlePaintSetting {
    color?: Colors | null;
    style?: RectStyle | null;
    antiAlias?: boolean | null;
}
export interface linePaintSetting {
    color?: Colors | null;
    style?: RectStyle | null;
    strokeWidth?: Number | null;
    antiAlias?: boolean | null;
}

//Text Analyser

export interface localImageTextReq {
    ocrType: MLTextConfig;
    analyseMode?: number;
    localTextSetting?: localTextSetting | null;
    filePath: any;
}

export interface localTextSetting {
    ocrMode?: MLLocalTextSetting;
    language?: string;
}

export enum MLLocalTextSetting {
    OCR_DETECT_MODE = 1,
    OCR_TRACKING_MODE = 2,
}
export enum MLTextConfig {
    OCR_LOCAL_TYPE = 0,
    OCR_REMOTE_TYPE = 1,
}
export interface remoteImageTextReq {
    ocrType: MLTextConfig;
    analyseMode?: number;
    remoteTextSetting?: remoteTextSetting;
    filePath: any;
}
export interface remoteTextSetting {
    textDensityScene?: MLRemoteTextSetting;
    languageList?: Array<string>;
    borderType?: MLRemoteTextSetting;
}

//TRANSLATE

export interface remotetranslateReq {
    USE_SYNC: boolean;
    targetLangCode: MLTranslateLanguages;
    sourceLangCode?: MLTranslateLanguages;
    sourceText: string;
}
export interface localtranslateReq {
    USE_SYNC: boolean;
    targetLangCode: MLTranslateLanguages;
    sourceLangCode: MLTranslateLanguages;
    sourceText: string;
}
export interface deleteTranslateReq {
    USE_SYNC: boolean;
    langcode: string;
}
export interface downloadTranslateReq {
    USE_SYNC: boolean;
    langcode: string;
}
export interface localAllLangReq {
    USE_SYNC: boolean;
}
export interface remoteAllLangReq {
    USE_SYNC: boolean;
}

export enum MLTranslateLanguages {
    AFRIKAANS = "af",
    ARABIC = "ar",
    BULGARIAN = "bg",
    BURMESE = "my",
    CROATIAN = "hr",
    CZECH = "cs",
    CHINESE = "zh",
    TRADITIONAL_CHINESE = "zh-hk",
    DANISH = "da",
    DUTCH = "nl",
    ESTONIAN = "et",
    ENGLISH = "en",
    FINNISH = "fi",
    FRENCH = "fr",
    GERMAN = "de",
    GUJARATI = "gu",
    GREEK = "el",
    HUNGARIAN = "hu",
    HINDI = "hi",
    HEBREW = "he",
    IRISH = "is",
    ITALIAN = "it",
    INDONESIAN = "id",
    KHMER = "km",
    KOREAN = "ko",
    JAPANESE = "ja",
    LATIN = "rm",
    LATVIAN = "lv",
    MALAY = "ms",
    MARATHI = "mr",
    NORWEGIAN = "no",
    PUNJABI = "pa",
    POLISH = "pl",
    PORTUGUESE = "pt",
    PERSIAN = "fa",
    RUSSIAN = "ru",
    ROMANIAN = "ro",
    SERBIAN = "sr",
    SPANISH = "es",
    SLOVAK = "sk",
    SWEDISH = "sv",
    TAMIL = "ta",
    TURKISH = "tr",
    THAI = "th",
    TAGALOG = "tl",
    TELUGU = "te",
    VIETNAMESE = "vi",
}

// Sound Dect

export interface soundDectReq {
    startType: boolean | null;
}

// Text Embedding

export interface textEmbeddingDicInfoReq {
    textEmbeddingSetting: textEmbeddingSetting;
}
export interface textEmbeddingWordtoVectorReq {
    textEmbeddingSetting?: textEmbeddingSetting;
    wordText: string;
}
export interface textEmbeddingSentencetoVectorReq {
    textEmbeddingSetting?: textEmbeddingSetting;
    sentenceText: string;
}
export interface textEmbeddingWordSimilarityReq {
    textEmbeddingSetting?: textEmbeddingSetting;
    wordText1: string;
    wordText2: string;
}
export interface textEmbeddingSentenceSimilarityReq {
    textEmbeddingSetting?: textEmbeddingSetting;
    sentenceText1: string;
    sentenceText2: string;
}
export interface textEmbeddingSimilarWordsReq {
    textEmbeddingSetting?: textEmbeddingSetting;
    multipleText: string;
    similarityNumber: number;
}
export interface textEmbeddingWordBatchReq {
    textEmbeddingSetting?: textEmbeddingSetting;
    batchText: string;
}

export interface textEmbeddingSetting {
    language: TextLanguage;
}

export enum TextLanguage {
    LANGUAGE_ZH = "zh",
    LANGUAGE_EN = "em",
}

export enum MLTextEmbeddibgExceptions {
    LANGUAGE_ZH = "zh",
    LANGUAGE_EN = "en",
    ERR_SERVICE_IS_UNAVAILABLE = 12199,
    RR_NET_UNAVAILABLE = 12198,
    ERR_INNER = 12101,
    ERR_AUTH_FAILED = 12102,
    ERR_PARAM_ILLEGAL = 12103,
    ERR_ANALYZE_FAILED = 12104,
    ERR_AUTH_TOKEN_INVALIDE = 12105,
}

// TTS ANALYSER

export interface MLTtsSpeaker {
    language?: string | null;
    modelSize?: string | null;
    name?: string | null;
    speakerDesc?: string | null;
}

export interface ttsEngineReq {
    language?: string | null;
    playerVolume?: number | null;
}

export interface ttsAnalyserSettingsResults {
    languages: String[];
    speakers: MLTtsSpeaker;
    speaker: MLTtsSpeaker;
    isLanguageAvailable: number;
}

export interface ttsReq {
    text: string;
    mlConfigs: MLConfigs;
    queuingMode: MLTtsConstants;
}

export interface MLTtsAudioFragment {
    audioData?: number | null;
    audioFormat?: number | null;
    channelInfo?: number | null;
    SampleRateInHz?: number | null;
}

export enum MLTtsAudioFragmentConstant {
    CHANNEL_OUT_MONO = 4,
    FORMAT_PCM_16BIT = 2,
    FORMAT_PCM_8BIT = 1,
    SAMPLE_RATE_16K = 16000,
}
export interface MLConfigs {
    language: MLTtsConstants;
    person: MLTtsConstants;
    speed: number;
    volume: number;
    synthesizeMode: MLTtsConstants;
}
export enum MLTtsConstants {
    EVENT_PLAY_START = 1,
    EVENT_PLAY_RESUME = 2,
    EVENT_PLAY_PAUSE = 3,
    EVENT_PLAY_STOP = 4,
    EVENT_SYNTHESIS_START = 5,
    EVENT_SYNTHESIS_END = 6,
    EVENT_SYNTHESIS_COMPLETE = 7,
    EVENT_PLAY_STOP_INTERRUPTED = "interrupted",
    EVENT_SYNTHESIS_INTERRUPTED = "interrupted",
    LANGUAGE_AVAILABLE = 0,
    LANGUAGE_NOT_SUPPORT = 1,
    LANGUAGE_UPDATING = 2,
    TTS_EN_US = "en-US",
    TTS_LAN_AR_AR = "ar-AR",
    TTS_LAN_TR_TR = "tr-TR",
    TTS_SPEAKER_FEMALE_AR = "ar-AR-st-1",
    TTS_SPEAKER_FEMALE_TR = "tr-TR-st-1",
    TTS_LAN_ES_ES = "es-ES",
    TTS_LAN_FR_FR = "fr-FR",
    TTS_LAN_DE_DE = "de-DE",
    TTS_LAN_IT_IT = "it-IT",
    TTS_LAN_RU_RU = "ru-RU",
    TTS_LAN_PL_PL = "pl-PL",
    TTS_LAN_TH_TH = " th-TH",
    TTS_LAN_MS_MS = "ms-MS",
    TTS_ZH_HANS = "zh-Hans",
    TTS_SPEAKER_FEMALE_EN = "Female-en",
    TTS_SPEAKER_FEMALE_ZH = "Female-zh",
    TTS_SPEAKER_MALE_EN = "Male-en",
    TTS_SPEAKER_MALE_ZH = "Male-zh",
    TTS_SPEAKER_MALE_ZH_2 = "zh-Hans-st-4",
    TTS_SPEAKER_FEMALE_ZH_2 = "zh-Hans-st-3",
    TTS_SPEAKER_MALE_EN_2 = "en-US-st-4",
    TTS_SPEAKER_FEMALE_EN_2 = "en-US-st-3",
    TTS_SPEAKER_FEMALE_DE = "de-DE-st-1",
    TTS_SPEAKER_FEMALE_ES = "it-IT-st-1",
    TTS_SPEAKER_FEMALE_IT = "es-ES-st-1",
    TTS_SPEAKER_FEMALE_FR = "fr-FR-st-1",
    TTS_SPEAKER_FEMALE_RU = "ru-RU-st-1",
    TTS_SPEAKER_FEMALE_PL = "pl-PL-st-1",
    TTS_SPEAKER_FEMALE_TH = "th-TH-st-1",
    TTS_SPEAKER_FEMALE_MS = "ms-MS-st-1",
    TTS_SPEAKER_OFFLINE_EN_US_MALE_BOLT = "en-US-st-bolt-2",
    TTS_SPEAKER_OFFLINE_ZH_HANS_FEMALE_EAGLE = "zh-Hans-st-eagle-1",
    TTS_SPEAKER_OFFLINE_ZH_HANS_MALE_EAGLE = "zh-Hans-st-eagle-2",
    TTS_SPEAKER_OFFLINE_EN_US_FEMALE_EAGLE = "en-US-st-eagle-1",
    TTS_SPEAKER_OFFLINE_EN_US_MALE_EAGLE = "en-US-st-eagle-2",
    TTS_SPEAKER_OFFLINE_EN_US_FEMALE_BEE = "en-US-st-bee-1",
    TTS_SPEAKER_OFFLINE_FR_FR_FEMALE_BEE = "fr-FR-st-bee-1",
    TTS_SPEAKER_OFFLINE_ES_ES_FEMALE_BEE = "es-ES-st-bee-1",
    TTS_SPEAKER_OFFLINE_DE_DE_FEMALE_BEE = "de-DE-st-bee-1",
    TTS_SPEAKER_OFFLINE_IT_IT_FEMALE_BEE = "it-IT-st-bee-1",
    TTS_SPEAKER_OFFLINE_ZH_HANS_FEMALE_BOLT = "zh-Hans-st-bolt-1",
    TTS_SPEAKER_OFFLINE_ZH_HANS_MALE_BOLT = "zh-Hans-st-bolt-2",
    TTS_SPEAKER_OFFLINE_EN_US_FEMALE_BOLT = "en-US-st-bolt-1",
    TTS_ONLINE_MODE = "online",
    TTS_OFFLINE_MODE = "offline",
    QUEUE_APPEND = 0,
    QUEUE_FLUSH = 1,
    EXTERNAL_PLAYBACK = 2,
    OPEN_STREAM = 4,
}

export enum Colors {
    RED = -65536,
    DKGRAY = -12303292,
    GRAY = -7829368,
    WHITE = -1,
    BLUE = -16776961,
    BLACK = -16777216,
    LTGRAY = -3355444,
    MAGENTA = -65281,
    YELLOW = -256,
    CYAN = -16711681,
    GREEN = -16711936,
    TRANSPARENT = 0,
}
export enum RectStyle {
    STROKE = 1,
    FILL = 2,
    FILL_AND_STROKE = 3,
}

export enum MLTtsError {
    ERR_AUDIO_PLAYER_FAILED = 11305,
    ERR_AUTHORIZE_FAILED = 11306,
    ERR_AUTHORIZE_TOKEN_INVALIDE = 11307,
    ERR_ILLEGAL_PARAMETER = 11301,
    ERR_INSUFFICIENT_BALANCE = 11303,
    ERR_INTERNAL = 11398,
    ERR_NETCONNECT_FAILED = 11302,
    ERR_SPEECH_SYNTHESIS_FAILED = 11304,
    ERR_UNKNOWN = 11399,
}

export interface MLAftResult {
    eventName: string;
    text: string;
    taskId: string;
    complete: boolean;
}
export interface MLAftErrorResult {
    eventName: string;
    taskId: string;
    errorCode: MLAftErrorCodes;
    message: string;
}
export enum MLAftErrorCodes {
    ERR_AUDIO_FILE_NOTSUPPORTED = 11101,
    LANGUAGE_CODE_NOTSUPPORTED = 11102,
    ERR_AUDIO_FILE_SIZE_OVERFLOW = 11103,
    ERR_AUDIO_LENGTH_OVERFLOW = 11104,
    ERR_FILE_NOT_FOUND = 11105,
    ERR_ILLEGAL_PARAMETER = 11106,
    ERR_ENGINE_BUSY = 11107,
    ERR_NETCONNECT_FAILED = 11108,
    ERR_RESULT_WHEN_UPLOADING = 11109,
    ERR_TASK_NOT_EXISTED = 11110,
    ERR_AUDIO_TRANSCRIPT_FAILED = 11111,
    ERR_AUDIO_INIT_FAILED = 11112,
    ERR_AUDIO_UPLOAD_FAILED = 11113,
    ERR_TASK_ALREADY_INPROGRESS = 11114,
    ERR_NO_ENOUGH_STORAGE = 11115,
    ERR_AUTHORIZE_FAILED = 11119,
    ERR_SERVICE_CREDIT = 11122,
    ERR_SERVICE_UNSUBSCRIBED = 11123,
    ERR_SERVICE_FREE_USED_UP = 11124,
    ERR_INTERNAL = 11198,
    ERR_UNKNOWN = 11199,
}
export interface MLAftEventResult {
    eventName: string;
    taskId: string;
    ext: string;
    eventId: string;
}
export enum MLAFTEventCodes {
    PAUSE_EVENT = 2,
    STOP_EVENT = 3,
    UPLOADED_EVENT = 1,
}

export enum MLAftConstants {
    LANGUAGE_ZH = "zh",
    LANGUAGE_EN_US = "en-US",
}
export interface MLBankCard {
    number: string;
    expire: string;
    issuer: string;
    type: string;
    organization: string;
    originalBitmap: any;
    numberBitmap: any;
}

export interface MLCustomBankCard {
    number: string;
    expire: string;
    issuer: string;
    type: string;
    organization: string;
    originalBitmap: any;
    numberBitmap: any;
}

export interface MLFaceVerificationResult {
    faceInfo?: MLFaceInfo[] | null;
    similarity?: number | null;
    templateId?: number | null;
}

export interface MLFaceTemplateResult {
    faceInfo?: MLFaceInfo[] | null;
    hashcode?: number | null;
    templateId?: number | null;
}
export interface MLFaceInfo {
    faceRect?: Rect[] | null;
    hashCode?: number | null;
}

export interface MLFace {
    Result?: ResultEntity[] | null;
}
export interface ResultEntity {
    opennessOfLeftEye: number;
    tracingIdentity: number;
    possibilityOfSmiling: number;
    opennessOfRightEye: number;
    rotationAngleX: number;
    rotationAngleY: number;
    rotationAngleZ: number;
    height: number;
    width: number;
    border: Border;
    features: Features;
    emotions: Emotions;
    allPoints?: AllPointsEntity[] | null;
    keyPoints?: null[] | null;
    faceShapeList?: FaceShapeListEntity[] | null;
}

export enum MLFaceConstant {
    UNANALYZED_POSSIBILITY = -1.0,
}
export interface Border {
    bottom: number;
    top: number;
    left: number;
    right: number;
    exactCenterX: number;
    centerY: number;
    centerX: number;
    describeContents: number;
    height: number;
    width: number;
}
export interface Features {
    sunGlassProbability: number;
    sexProbability: number;
    rightEyeOpenProbability: number;
    moustacheProbability: number;
    leftEyeOpenProbability: number;
    age: number;
    hatProbability: number;
}
export interface Emotions {
    surpriseProbability: number;
    smilingProbability: number;
    sadProbability: number;
    neutralProbability: number;
    fearProbability: number;
    disgustProbability: number;
    angryProbability: number;
}
export interface AllPointsEntity {
    X: number;
    Y: number;
}
export interface FaceShapeListEntity {
    points?: PointsEntity[] | null;
    faceShapeType: number;
}
export interface PointsEntity {
    X: number;
    Y: number;
    Z: number;
}

export interface MLImageClassification {
    result?: ResultEntity[] | null;
}
export interface ResultEntity {
    identity: string;
    name: string;
    possibility: number;
    hashCode: number;
}

export interface MLDocument {
    stringValue: string;
    blocks?: Blocks[];
}
export interface Blocks {
    stringValue: string;
    possibility: number;
    border: Border;
    interval: Interval;
    sections?: Sections[];
}
export interface Border {
    bottom: number;
    top: number;
    left: number;
    right: number;
    exactCenterX: number;
    centerY: number;
    centerX: number;
    describeContents: number;
    height: number;
    width: number;
}
export interface Interval {
    intervalType: number;
    isTextFollowed: boolean;
}
export interface Sections {
    stringValue: string;
    border: Border;
    interval: Interval;
    possibility: number;
    languageList?: LanguageList[];
    lineList?: LineList[];
}
export interface LanguageList {
    language: string;
}
export interface LineList {
    stringValue: string;
    border: Border;
    possibility: number;
    languageList?: LanguageList[];
    wordList?: WordList[];
}
export interface WordList {
    stringValue: string;
    border: Border;
    characterList?: CharacterList[];
    languageList?: LanguageList[];
    possibility?: number;
    interval?: Interval;
}
export interface CharacterList {
    stringValue: string;
    possibility: number;
    border?: Border;
    languageList?: LanguageList[];
    interval?: Interval;
}

export interface MLDocumentSkewDetectResult {
    resultCode: number;
    bitmap: any;
}

export interface MLVnIcrCaptureResult {
    birthday: string;
    cardBitmap: Bitmap;
    idNum: string;
    name: string;
    sex: string;
}

export interface MLCnIcrCaptureResult {
    birthday: string;
    cardBitmap: Bitmap;
    idNum: string;
    name: string;
    sex: string;
    nation: string;
    address: string;
    authority: string;
    validDate: string;
}

export interface MLIcrCaptureResult {
    birthday: string;
    cardBitmap: Bitmap;
    idNum: string;
    name: string;
    sex: string;
    nation: string;
    address: string;
    validDate: string;
}

export interface MLGcrCaptureResult {
    text: string;
    cardBitmap: Bitmap;
}

export interface MLHandKeypoints {
    handkeyPoints: handkeyPoints;
    rect: Rect;
    score: number;
}
export interface handkeyPoints {
    pointX: number;
    pointY: number;
    score: number;
    type: handkeyPointsTypes;
}
export enum handkeyPointsTypes {
    TYPE_WRIST = 0,
    TYPE_THUMB_FIRST = 1,
    TYPE_THUMB_SECOND = 2,
    TYPE_THUMB_THIRD = 3,
    TYPE_THUMB_FOURTH = 4,
    TYPE_FOREFINGER_FIRST = 5,
    TYPE_FOREFINGER_SECOND = 6,
    TYPE_FOREFINGER_THIRD = 7,
    TYPE_FOREFINGER_FOURTH = 8,
    TYPE_MIDDLE_FINGER_FIRST = 9,
    TYPE_MIDDLE_FINGER_SECOND = 10,
    TYPE_MIDDLE_FINGER_THIRD = 11,
    TYPE_MIDDLE_FINGER_FOURTH = 12,
    TYPE_RING_FINGER_FIRST = 13,
    TYPE_RING_FINGER_SECOND = 14,
    TYPE_RING_FINGER_THIRD = 15,
    TYPE_RING_FINGER_FOURTH = 16,
    TYPE_LITTLE_FINGER_FIRST = 17,
    TYPE_LITTLE_FINGER_SECOND = 18,
    TYPE_LITTLE_FINGER_THIRD = 19,
    TYPE_LITTLE_FINGER_FOURTH = 20,
}

export interface Rect {
    bottom: number;
    top: number;
    left: number;
    right: number;
    exactCenterX: number;
    centerY: number;
    centerX: number;
    describeContents: number;
    height: number;
    width: number;
}

export interface MLImageSegmentation {
    bitmapForeground: any;
    bitmapGrayscale: any;
    masks: number;
    bitmapOriginal: any;
}
export interface MLRemoteLandmark {
    landmark: string;
    landmarkIdentity: string;
    possibility: number;
    border: Border;
    positionInfo?: PositionInfoEntity[] | null;
}
export interface Border {
    bottom: number;
    top: number;
    left: number;
    right: number;
    exactCenterX: number;
    centerY: number;
    centerX: number;
    describeContents: number;
    height: number;
    width: number;
}
export interface PositionInfoEntity {
    lng: number;
    lat: number;
}

export interface MLRemoteLangDetection {
    langCode: string;
    probability: number;
    hashCode: number;
}

export interface MLlangDetectionWithFirstDetect {
    langCode: string;
}

export interface MLLivenessCaptureResult {
    bitmap: Bitmap;
    isLive: boolean;
    pitch: number;
    roll: number;
    score: number;
    yaw: number;
}
export interface Bitmap {
    mGalleryCached: boolean;
    mHeight: number;
    mNativePtr: number;
    mWidth: number;
}

export interface MLObject {
    typeIdentity: number;
    typePossibility: number;
    border: Border;
}
export interface Border {
    bottom: number;
    top: number;
    left: number;
    right: number;
    exactCenterX: number;
    centerY: number;
    centerX: number;
    describeContents: number;
    height: number;
    width: number;
}

export interface MLSkeleton {
    joints: MLJoint;
    JointPoint: MLJointPoints;
}
export interface MLJoint {
    x: number;
    y: number;
    score: number;
    type: number;
    hashCode: number;
}
export enum MLJointPoints {
    TYPE_RIGHT_SHOULDER = 101,
    TYPE_RIGHT_ELBOW = 102,
    TYPE_RIGHT_WRIST = 103,
    TYPE_LEFT_SHOULDER = 104,
    TYPE_LEFT_ELBOW = 105,
    TYPE_LEFT_WRIST = 106,
    TYPE_RIGHT_HIP = 107,
    TYPE_RIGHT_KNEE = 108,
    TYPE_RIGHT_ANKLE = 109,
    TYPE_LEFT_HIP = 110,
    TYPE_LEFT_KNEE = 111,
    TYPE_LEFT_ANKLE = 112,
    TYPE_HEAD_TOP = 113,
    TYPE_NECK = 114,
}

export interface MLText {
    stringValue: string;
    blocks?: Blocks[];
}
export interface Blocks {
    contents?: Contents[];
}
export interface Contents {
    stringValue: string;
    rotatingDegree: number;
    isVertical: boolean;
    language: string;
    border: Border;
    contents?: Contents[];
}
export interface Border {
    bottom: number;
    top: number;
    left: number;
    right: number;
    exactCenterX: number;
    centerY: number;
    centerX: number;
    describeContents: number;
    height: number;
    width: number;
}
export interface Contents {
    stringValue: string;
    border: Border;
    language: string;
    languageList?: LanguageList[];
    vertexes?: Vertexes[];
}
export interface LanguageList {
    language: string;
}
export interface Vertexes {
    x: number;
    y: number;
    describeContents: number;
}

export interface MLTtsResult {
    eventName: string;
    taskID: string;
    start: number;
    end: number;
}
export interface MLSceneDetectionResult {
    resultString: string;
    confidence: number;
}

export interface LiveScenAnalyser {
    analyseList: [AnalyseList];
    frameProperty: FrameProperty;
}
export interface AnalyseList {
    0: a;
}
export interface a {
    result: string;
    confidence: number;
}
export interface FrameProperty {
    ext: string;
    formatType: number;
    height: number;
    itemIdentity: number;
    quadrant: number;
    timestamp: number;
    width: number;
}

export interface MLSoundDectResult {
    soundType: MLSoundDectSoundTypeResult;
    eventName: string;
}
export enum MLSoundDectSoundTypeResult {
    SOUND_DECT_ERROR_NO_MEM = 12201,
    SOUND_DECT_ERROR_FATAL_ERROR = 12202,
    SOUND_DECT_ERROR_AUDIO = 12203,
    SOUND_DECT_ERROR_INTERNAL = 12298,
    SOUND_EVENT_TYPE_LAUGHTER = 0,
    SOUND_EVENT_TYPE_BABY_CRY = 1,
    SOUND_EVENT_TYPE_SNORING = 2,
    SOUND_EVENT_TYPE_SNEEZE = 3,
    SOUND_EVENT_TYPE_SCREAMING = 4,
    SOUND_EVENT_TYPE_MEOW = 5,
    SOUND_EVENT_TYPE_BARK = 6,
    SOUND_EVENT_TYPE_WATER = 7,
    SOUND_EVENT_TYPE_CAR_ALARM = 8,
    SOUND_EVENT_TYPE_DOOR_BELL = 9,
    SOUND_EVENT_TYPE_KNOCK = 10,
    SOUND_EVENT_TYPE_ALARM = 11,
    SOUND_EVENT_TYPE_STEAM_WHISTLE = 12,
}

export interface MLVocabularyVersion {
    dictionaryDimension: string;
    dictionarySize: string;
    versionNo: string;
}

export interface MLWordtoVectorResult {
    result: Result;
}
export interface Result {
    wordText: string;
    vector: string;
}
export interface MlSentencetoVectorResult {
    sentence: string;
    vector: string;
}
export interface MLWordSimilarityResult {
    wordSimilarity: number;
}
export interface MLSentenceSimilarityResult {
    sentenceSimilarity: number;
}
export interface MLSimilarWordsResult {
    result?: string[] | null;
}
export interface MLFormRecogitionResult {
    retCode: number;
    tableContent: TableContent;
}

export interface TableContent {
    tableCount: number;
    tables?: TablesEntity[] | null;
}
export interface TablesEntity {
    tableID: number;
    headerInfo: string;
    footerInfo: string;
    tableBody?: TableBodyEntity[] | null;
}
export interface TableBodyEntity {
    startRow: number;
    endRow: number;
    startCol: number;
    endCol: number;
    cellCoordinate: CellCoordinate;
    textInfo: string;
}
export interface CellCoordinate {
    topLeft_x: number;
    topLeft_y: number;
    topRight_x: number;
    topRight_y: number;
    bottomLeft_x: number;
    bottomLeft_y: number;
    bottomRight_x: number;
    bottomRight_y: number;
}

export interface MLProductVisionResult {
    type: string;
    border: Border;
    list?: ListEntity[] | null;
}
export interface Border {
    bottom: number;
    top: number;
    left: number;
    right: number;
    exactCenterX: number;
    centerY: number;
    centerX: number;
    describeContents: number;
    height: number;
    width: number;
}
export interface ListEntity {
    customcontent: string;
    imagelist?: ImagelistEntity[] | null;
    possibility: number;
    productURL: string;
}
export interface ImagelistEntity {
    imageId: string;
    possibility: number;
    productId: string;
}

export enum CordovaErrors {
    UNKNOWN = -1,
    SUCCESS = 0,
    DISCARDED = 1,
    INNER = 2,
    INACTIVE = 3,
    NOT_SUPPORTED = 4,
    ILLEGAL_PARAMETER = 5,
    OVERDUE = 6,
    NO_FOUND = 7,
    DUPLICATE_FOUND = 8,
    NO_PERMISSION = 9,
    INSUFFICIENT_RESOURCE = 10,
    ANALYSIS_FAILURE = 11,
    INTERRUPTED = 12,
    EXCEED_RANGE = 13,
    DATA_MISSING = 14,
    AUTHENTICATION_REQUIRED = 15,
    TFLITE_NOT_COMPATIBLE = 16,
    INSUFFICIENT_SPACE = 17,
    HASH_MISS = 18,
    TOKEN_INVALID = 19,
    SERVICE_FAILURE = 20,
    ANALYSIS_NULL = 21,
}
