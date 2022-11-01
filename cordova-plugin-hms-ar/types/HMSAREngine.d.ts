import { ARSceneConfig, Events, SceneBounds } from './interfaces';
export { ARSceneConfig, ARHandConfig, ARBodyConfig, ARFaceConfig, ARWorldConfig, ARAugmentedImageConfig, ARSceneMeshConfig, ARWorldBodyConfig, ARCloud3DObjectConfig, ARBody, ARFace, ARHand, ARAugmentedImage, ARSceneMesh, ARPlane, ARTarget, ARFaceBlendShapes, ARPose, TrackingState, ARCoordinateSystemType, ARHandType, PlaneType, SemanticPlaneLabel, Anchor, ColorRGBA, HealthParameter, FaceHealthCheckState, LightMode, CameraLensFacing, SemanticMode, PowerMode, FocusMode, UpdateMode, TargetLabel, TargetShapeType, PlaneFindingMode, Events } from './interfaces';
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
export declare class ARAugmentedImageScene extends ARScene {
    constructor(divId: string);
}
export declare class ARWorldBodyScene extends ARScene {
    constructor(divId: string);
}
export declare class ARSceneMeshScene extends ARScene {
    constructor(divId: string);
}
export declare class ARCloud3DObjectScene extends ARScene {
    constructor(divId: string);
}
export declare function requestCameraPermission(): Promise<void>;
export declare function hasCameraPermission(): Promise<boolean>;
export declare function isAREngineServiceAPKReady(): Promise<boolean>;
export declare function navigateToAppMarket(): Promise<void>;
export declare function enableLogger(): Promise<void>;
export declare function disableLogger(): Promise<void>;
