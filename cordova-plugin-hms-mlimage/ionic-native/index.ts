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

import { Injectable } from "@angular/core";
import { Plugin, Cordova, CordovaProperty, IonicNativePlugin } from "@ionic-native/core";

@Plugin({
    pluginName: "HMSMLImagePlugin",
    plugin: "cordova-plugin-hms-mlimage", // npm package name, example: cordova-plugin-camera
    pluginRef: "HMSMLImagePlugin", // the variable reference to call the plugin, example: navigator.geolocation
    platforms: ["Android"], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class HMSMLImagePlugin extends IonicNativePlugin {
    @CordovaProperty()
    MLImageClassificationConfig = MLImageClassificationConfig;
    @CordovaProperty()
    MLImageSegmentationSetting = MLImageSegmentationSetting;
    @CordovaProperty()
    MLImageSegmentationScene = MLImageSegmentationScene;
    @CordovaProperty()
    MLRemoteLandmarkSetting = MLRemoteLandmarkSetting;
    @CordovaProperty()
    ImgSuperResolutionConfig = ImgSuperResolutionConfig;
    @CordovaProperty()
    MlObjectAnalyserConfig = MlObjectAnalyserConfig;
    @CordovaProperty()
    DownloadStrategyCustom = DownloadStrategyCustom;
    @CordovaProperty()
    Colors = Colors;
    @CordovaProperty()
    RectStyle = RectStyle;
    @CordovaProperty()
    MLFlashMode = MLFlashMode;
    @CordovaProperty()
    MLLensType = MLLensType;
    @CordovaProperty()
    MLAnalyzerName = MLAnalyzerName;
    @CordovaProperty()
    MLCompositeAnalyzerName = MLCompositeAnalyzerName;
    @CordovaProperty()
    MLFrame = MLFrame;
    @CordovaProperty()
    MLProductConfig = MLProductConfig;
    @CordovaProperty()
    syncMode = syncMode;
    @CordovaProperty()
    MLFaceSetting = MLFaceSetting;
    @CordovaProperty()
    HandkeyPointConfig = HandkeyPointConfig;
    @CordovaProperty()
    Events = Events;

    @Cordova({ otherPromise: true })
    /**
     * An app information class used to store basic information about apps with the HMS Core ML Image SDK integrated and complete the initialization of ML Image Kit. When using cloud services of the ML Image Kit, you need to set the apiKey of your app.
     * @param  {appSettingReq} appSettingReq Represents the parameter required.
     * @returns Promise<any>
     */
    appSetting(appSettingReq: appSettingReq): Promise<any> {
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
     * Sets a data processing location when you choose to manually manage and specify such a location.
     * @param  {region} region Represents the parameter.
     *         * REGION_DR_UNKNOWN = 1001,
               * REGION_DR_CHINA = 1002,
               * REGION_DR_RUSSIA = 1005,
               * REGION_DR_GERMAN = 1006,
               * REGION_DR_SINGAPORE = 1007 
     * @returns Promise<any>
     */
    setUserRegion(region: number): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * Obtains the country/region code of the data processing location you have specified when you choose to manually manage and specify such a location.
     * @returns Promise<String>
     */
    getCountryCode(): Promise<String> {
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
    @Cordova({ otherPromise: true })
    /**
     * This service can integrate with multiple types of analyzers to detect different types of objects at the same time. For example, it can simultaneously recognize faces and texts in an image.
     * @param  {compositeAnalyserReq} ownCustomModelReq Represents the parameter required for composite analyser.
     * @returns Promise<any>
     */
    initializeCompositeAnalyzer(
        compositeAnalyserReq: compositeAnalyserReq
    ): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * Obtains composite analyser information.
     * @returns Promise<any>
     */
    infoCompositeAnalyser(): Promise<any> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * Close composite analyser.
     * @returns Promise<void>
     */
    closeCompositeAnalyser(): Promise<void> {
        return;
    }
    @Cordova({ otherPromise: true })
    /**
     * Obtain picture.
     * @param  {req} req Represents the parameter required for obtain picture.
     * @returns Promise<any>
     */
    obtainPicture(
        req: compositeAnalyserReq
    ): Promise<any> {
        return;
    }
}

@Plugin({
    pluginName: "HMSMLImage",
    plugin: "cordova-plugin-hms-mlimage", // npm package name, example: cordova-plugin-camera
    pluginRef: "HMSMLImage", // the variable reference to call the plugin, example: navigator.geolocation
    platforms: ["Android"], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class HMSMLImage extends IonicNativePlugin {
    @CordovaProperty()
    MLImageClassificationConfig = MLImageClassificationConfig;
    @CordovaProperty()
    MLImageSegmentationSetting = MLImageSegmentationSetting;
    @CordovaProperty()
    MLImageSegmentationScene = MLImageSegmentationScene;
    @CordovaProperty()
    MLRemoteLandmarkSetting = MLRemoteLandmarkSetting;
    @CordovaProperty()
    ImgSuperResolutionConfig = ImgSuperResolutionConfig;
    @CordovaProperty()
    MlObjectAnalyserConfig = MlObjectAnalyserConfig;
    @CordovaProperty()
    DownloadStrategyCustom = DownloadStrategyCustom;
    @CordovaProperty()
    Colors = Colors;
    @CordovaProperty()
    RectStyle = RectStyle;
    @CordovaProperty()
    MLFlashMode = MLFlashMode;
    @CordovaProperty()
    MLLensType = MLLensType;
    @CordovaProperty()
    MLAnalyzerName = MLAnalyzerName;
    @CordovaProperty()
    MLCompositeAnalyzerName = MLCompositeAnalyzerName;
    @CordovaProperty()
    MLFrame = MLFrame;
    @CordovaProperty()
    MLProductConfig = MLProductConfig;
    @CordovaProperty()
    syncMode = syncMode;
    @CordovaProperty()
    MLFaceSetting = MLFaceSetting;
    @CordovaProperty()
    HandkeyPointConfig = HandkeyPointConfig;
    @CordovaProperty()
    Events = Events;

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

export abstract class MLLive {
    private arScene: any;

    constructor(scene: string, divId: string) {
        if (scene === "liveEngineAnalyser") {
            this.arScene = new (HMSMLImagePlugin.getPlugin().liveEngineAnalyser)(divId);
        }
        if (scene === "liveCompositeAnalyser") {
            this.arScene = new (HMSMLImagePlugin.getPlugin().liveCompositeAnalyser)(divId);
        }       
    }

    on(eventName: Events, call: (value: any) => void): void {
        return this.arScene.on(eventName, call);
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
        super("liveEngineAnalyser", divId);
    }
}

export class liveCompositeAnalyser extends MLLive {
    constructor(divId: string) {
        super("liveCompositeAnalyser", divId);
    }
}

// API KEY

export interface configReq {
    apiKey: string;
    accessToken: string;
}

export interface appSettingReq {
    apiKey?: string | null;
    applicationId?: string | null;
    certFingerprint?: string | null;
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
        | sceneSettings
        | ObjectGraphicSetting
        | null;
    analyzerSetting?:
        | mlImageSegmentationSetting
        | mlObjectAnalyserSetting
        | null;
}
export interface MLconfigComposite {
    lensEngineReq: compositeAnalyser;
}
export interface compositeAnalyser {
    analyzerNames?: Array<MLCompositeAnalyzerName>;
    lensEngineSetting?: MLLensEngineSetting;
    graphicSetting?:
        | CompositeFaceGraphicSetting
        | CompositeSceneSettings
        | CompositeHandkeyGraphicSetting
        | CompositeSkeletonGraphicSetting
        | CompositeObjectGraphicSetting
        | null;
    analyzerSetting?:
        | CompositeFaceAnalyzerSetting
        | CompositeFaceVerificationAnalyzerSetting
        | CompositeHandKeypointSetting
        | CompositeImageSegmentationSetting
        | CompositeObjectAnalyserSetting
        | null;
}

export interface CompositeHandKeypointSetting {
    sceneType?: HandkeyPointConfig | null;
    maxHandResults?: number | null;
}
export enum HandkeyPointConfig {
    TYPE_ALL = 0,
    TYPE_KEYPOINT_ONLY = 1,
    TYPE_RECT_ONLY = 2,
    MAX_HANDS_NUM = 10,
}

export interface CompositeFaceVerificationAnalyzerSetting {
    maxFaceDetcted: number | null;
}


export interface CompositeFaceGraphicSetting {
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

export interface CompositeHandkeyGraphicSetting {
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

export interface CompositeSkeletonGraphicSetting {
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
    antiAlias?: 
    boolean | null;
}

export interface CompositeFaceAnalyzerSetting {
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
    TEXT = "TEXT",
    OBJECT = "OBJECT",
    CLASSIFICATION = "CLASSIFICATION",
}
export enum MLAnalyzerName {
    LIVEOBJECT = "OBJECT",
    LIVECLASSIFICATION = "CLASSIFICATION",
    LIVESCENE = "SCENE",
    LIVESEGMENTATION = "SEGMENTATION"
}
export enum MLCompositeAnalyzerName {
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

// COMPOSITE

export interface compositeAnalyserReq {
    compositeAnalyserConfig: compositeAnalyserConfig;
}
export interface compositeAnalyserConfig {
    filePath: any;
    analyzerNames?: Array<MLStillCompositerName>;
    analyzerSetting?:
        | CompositeFaceAnalyzerSetting
        | CompositeFaceVerificationAnalyzerSetting
        | CompositeHandKeypointSetting
        | CompositeImageSegmentationSetting
        | CompositeObjectAnalyserSetting
        | null;
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

//Document Skew Correction

export interface documentSkewCorrectionReq {
    filePath: any;
    syncMode?: syncMode | null;
}

export enum syncMode {
    SYNC_TYPE = 1,
    ASYNC_TYPE = 0,
}

//Image Super Resolution

export interface imageSuperResolutionReq {
    filePath: any;
    imgSuperResolutionSetting?: ImgSuperResolutionSetting | null;
    syncType?: syncMode | null;
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
    analyseMode?: syncMode | null;
}

//IMAGE STILL && LIVESEGMENTATION

export interface imgSegmentationReq {
    imageSegmentationSetting?: mlImageSegmentationSetting;
    filePath: any;
    analyseMode?: syncMode | null;
}

export interface mlImageSegmentationSetting {
    isExact: boolean | null;
    analyserType?: MLImageSegmentationSetting | null;
    scene?: MLImageSegmentationScene;
    hashCode?: number | null;
}

export interface CompositeImageSegmentationSetting {
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

// STILL && LIVEOBJECT  ANALYSER

export interface objectReq {
    filePath: any;
    mlObjectAnalyserSetting?: mlObjectAnalyserSetting;
    syncType?: syncMode | null;
}
export interface ObjectGraphicSetting {
    boxPaintSetting?: BoxPaintSetting | null;
    textPaintSetting?: TextPaintSetting | null;
}

export interface CompositeObjectGraphicSetting {
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

export interface CompositeObjectAnalyserSetting {
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

export enum RectStyle {
    STROKE = 1,
    FILL = 2,
    FILL_AND_STROKE = 3,
}

//STILL && LIVE SCENE ANALYSER

export interface stillSceneReq {
    filePath: any;
    analyseMode?: syncMode | null;
}

export interface sceneSettings {
    color?: Colors | null;
    textSize?: Number | null;
}

export interface CompositeSceneSettings {
    color?: Colors | null;
    textSize?: Number | null;
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

/*
----------------- return
*/

export interface MLImageClassification {
    result?: ResultEntity[] | null;
}
export interface ResultEntity {
    identity: string;
    name: string;
    possibility: number;
    hashCode: number;
}

export interface MLDocumentSkewDetectResult {
    resultCode: number;
    bitmap: any;
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

export interface MLObject {
    typeIdentity: number;
    typePossibility: number;
    border: Border;
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

export interface MLProductVisionResult {
    type: string;
    border: Border;
    list?: ListEntity[] | null;
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

export enum Events {
    TEXT_TRANSACTOR_ON_DESTROY = "textTransactorOnDestroy",
    TEXT_TRANSACTOR_ON_RESULT = "textTransactorOnResult",
    FACE_TRANSACTOR_ON_DESTROY = "faceTransactorOnDestroy",
    FACE_TRANSACTOR_ON_RESULT = "faceTransactorOnResult",
    FACE_3D_TRANSACTOR_ON_DESTROY = "face3dTransactorOnDestroy",
    FACE_3D_TRANSACTOR_ON_RESULT = "face3dTransactorOnResult",
    CLASSIFICATION_TRANSACTOR_ON_DESTROY = "classificationTransactorOnDestroy",
    CLASSIFICATION_TRANSACTOR_ON_RESULT = "classificationTransactorOnResult",
    OBJECT_TRANSACTOR_ON_DESTROY = "objectTransactorOnDestroy",
    OBJECT_TRANSACTOR_ON_RESULT = "objectTransactorOnResult",
    SCENE_TRANSACTOR_ON_DESTROY = "sceneTransactorOnDestroy",
    SCENE_TRANSACTOR_ON_RESULT = "sceneTransactorOnResult",
    SKELETON_TRANSACTOR_ON_DESTROY = "skeletonTransactorOnDestroy",
    SKELETON_TRANSACTOR_ON_RESULT = "skeletonTransactorOnResult",
    HAND_TRANSACTOR_ON_DESTROY = "handTransactorOnDestroy",
    HAND_TRANSACTOR_ON_RESULT = "handTransactorOnResult",
    GESTURE_TRANSACTOR_ON_DESTROY = "gestureTransactorOnDestroy",
    GESTURE_TRANSACTOR_ON_RESULT = "gestureTransactorOnResult",
    SEGMENTATION_TRANSACTOR_ON_DESTROY = "segmentationTransactorOnDestroy",
    SEGMENTATION_TRANSACTOR_ON_RESULT = "segmentationTransactorOnResult",
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