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

import * as MLKit from "./interfaces";
export * from './interfaces';
export declare abstract class MLLive {
    protected scene: string;
    protected divId: string;
    private mutationObserver;
    constructor(scene: string, divId: string);
    protected execHelper(func: string, args: any): Promise<any>;
    on(eventName: MLKit.Events, call: (value: any) => void): void;
    startMLLive(config: MLKit.MLconfig | MLKit.MLconfigComposite, bounds?: MLKit.MLBounds): Promise<void>;
    setConfig(config: MLKit.MLconfig): Promise<void>;
    scroll(): Promise<void>;
    private forceUpdateXAndY;
}
export declare function serviceInitializer(params: MLKit.configReq): Promise<any>;
export declare function appSetting(appSettingReq: MLKit.appSettingReq): Promise<any>;
export declare function setUserRegion(region: number): Promise<void>;
export declare function getCountryCode(): Promise<String>;
export declare function enableLogger(): Promise<void>;
export declare function disableLogger(): Promise<void>;
export declare function mlFrame(mlFrameReq: MLKit.mlFrameReq): Promise<any>;
export declare class liveEngineAnalyser extends MLLive {
    constructor(divId: string);
}
export declare class liveCompositeAnalyser extends MLLive {
    constructor(divId: string);
}
export declare function photograph(): Promise<any>;
export declare function destroy(): Promise<any>;
export declare function doZoom(doZoomReq: MLKit.doZoomReq): Promise<any>;
export declare function getDisplayDimension(): Promise<any>;
export declare function getLensType(): Promise<any>;
export declare function customModelAnalyser(customModelReq: MLKit.downloadModelReq | MLKit.ownCustomModelReq): Promise<any>;
export declare function initializeCompositeAnalyzer(compositeAnalyserReq: MLKit.compositeAnalyserReq): Promise<any>;
export declare function infoCompositeAnalyser(): Promise<any>;
export declare function closeCompositeAnalyser(): Promise<void>;
export declare function obtainPicture(req: MLKit.compositeAnalyserReq): Promise<void>;
