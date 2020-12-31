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
import { MLBounds, MLconfig } from './Interfaces';
import * as MLKit from './Interfaces';
export { MLBounds, faceReq, MLFace, MLconfig, lensEngineReq, MLAnalyzerName, MLStillCompositerName, MLFrame, MLconfigComposite, MLLensEngineSetting, MLLensType, compositeAnalyserReq, doZoomReq, MLFlashMode, appSettingReq, MLFaceConfigs, livenessDetectionReq, MLLivenessConfig, LANGUAGE, MLTtsConstants, Colors, MLFaceSetting, MLSkeletonConfig, RectStyle, DownloadStrategyCustom, FEATURE, MlObjectAnalyserConfig, ImgSuperResolutionConfig, MLBcrResultConfig, HandkeyPointConfig, MLGcrCaptureUIConfig, MLRemoteLandmarkSetting, MLBcrCaptureConfig, MLImageSegmentationScene, MLTextConfig, MLRemoteTextSetting, MLLocalTextSetting, MLImageClassificationConfig, MLImageSegmentationSetting } from './Interfaces';
export declare abstract class MLLive {
    protected scene: string;
    protected divId: string;
    private mutationObserver;
    constructor(scene: string, divId: string);
    protected execHelper(func: string, args: any): Promise<any>;
    on(call: (value: any) => void): Promise<void>;
    startMLLive(config: MLKit.MLconfig, bounds?: MLBounds): Promise<void>;
    setConfig(config: MLconfig): Promise<void>;
    scroll(): Promise<void>;
    private forceUpdateXAndY;
}
export declare class liveEngineAnalyser extends MLLive {
    constructor(divId: string);
}
export declare function doZoom(doZoomReq: MLKit.doZoomReq): Promise<any>;
export declare function photograph(): Promise<any>;
export declare function destroy(): Promise<any>;
export declare function getDisplayDimension(): Promise<any>;
export declare function getLensType(): Promise<any>;
export declare function hasPermissions(permissionListReq: MLKit.CheckPermissionReq): Promise<any>;
export declare function requestPermissions(permissionListReq: MLKit.RequestPermissionReq): Promise<any>;
export declare function serviceInitializer(params: MLKit.configReq): Promise<any>;
export declare function customModelAnalyser(customModelReq: MLKit.downloadModelReq | MLKit.ownCustomModelReq): Promise<any>;
export declare function mlFrame(mlFrameReq: MLKit.mlFrameReq): Promise<any>;
export declare function appSetting(appSettingReq: MLKit.appSettingReq): Promise<any>;
export declare function setStatistic(any: any): Promise<any>;
export declare function getStatistic(any: any): Promise<any>;
export declare function enableLogger(): Promise<void>;
export declare function disableLogger(): Promise<void>;
