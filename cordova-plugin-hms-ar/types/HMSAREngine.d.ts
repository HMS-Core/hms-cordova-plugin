/*
    Copyright 2020-2021. Huawei Technologies Co., Ltd. All rights reserved.

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
import { ARSceneConfig, Events, SceneBounds } from './interfaces';
export { ARSceneConfig, ARHandConfig, ARBodyConfig, ARFaceConfig, ARWorldConfig, ARBody, ARFace, ARHand, ARPlane, ARFaceBlendShapes, ARPose, TrackingState, ARCoordinateSystemType, ARHandType, PlaneType, SemanticPlaneLabel, Anchor, ColorRGBA, Events } from './interfaces';
export declare abstract class ARScene {
    protected scene: string;
    protected divId: string;
    private mutationObserver;
    constructor(scene: string, divId: string);
    on(eventName: Events, call: (value: any) => void): Promise<void>;
    startARScene(config: ARSceneConfig, bounds?: SceneBounds): Promise<void>;
    destroy(): Promise<void>;
    setConfig(config: ARSceneConfig): Promise<void>;
    scroll(): Promise<void>;
    protected execHelper(func: string, args: any): Promise<any>;
    private forceUpdateXAndY;
}
export declare class ARHandScene extends ARScene {
    constructor(divId: string);
}
export declare class ARWorldScene extends ARScene {
    constructor(divId: string);
}
export declare class ARFaceScene extends ARScene {
    constructor(divId: string);
}
export declare class ARBodyScene extends ARScene {
    constructor(divId: string);
}
export declare function requestCameraPermission(): Promise<void>;
export declare function hasCameraPermission(): Promise<boolean>;
export declare function isAREngineServiceAPKReady(): Promise<boolean>;
export declare function navigateToAppMarket(): Promise<void>;
export declare function enableLogger(): Promise<void>;
export declare function disableLogger(): Promise<void>;
