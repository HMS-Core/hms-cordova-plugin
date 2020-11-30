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

import { ARSceneConfig, SceneBounds } from './interfaces';
import { asyncExec } from './util';
export { ARSceneConfig, ARHandConfig, ARBodyConfig, ARFaceConfig, ARWorldConfig, ARBody, ARFace, ARHand, ARPlane, ARFaceBlendShapes, ARPose, TrackingState, ARCoordinateSystemType, ARHandType, PlaneType, SemanticPlaneLabel, Anchor, ColorRGBA } from './interfaces';

function getInitialProps(divId: string) {
    const htmlElement: HTMLElement = document.getElementById(divId);
    const clientRect = htmlElement.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(htmlElement, null);
    let props: any = {};
    props['x'] = clientRect.x;
    props['y'] = clientRect.y;
    props['width'] = parseInt(computedStyle.getPropertyValue('width'));
    props['height'] = parseInt(computedStyle.getPropertyValue('height'));
    return props;

}

export abstract class ARScene {
    protected scene: string;
    protected divId: string;
    private mutationObserver: MutationObserver;
    constructor(scene: string, divId: string) {
        this.scene = scene;
        this.divId = divId;
    }
    protected execHelper(func: string, args: any) {
        return asyncExec('HMSAREngine', func, args);
    }
    on(call: (value: any) => void): Promise<void> {
        window.subscribeHMSEvent(`${this.scene}_${this.divId}`, call);
        return this.execHelper('setCallback', [this.scene, this.divId, call.toString()]);
    }
    startARScene(config: ARSceneConfig, bounds?: SceneBounds): Promise<void> {
        const initialProps = getInitialProps(this.divId);
        if (bounds) {
            if (bounds.marginTop) initialProps['marginTop'] = bounds.marginTop;
            if (bounds.marginBottom) initialProps['marginBottom'] = bounds.marginBottom;
        }

        this.mutationObserver = new MutationObserver(() => {
            const sceneRect = document.getElementById(this.divId).getBoundingClientRect();
            this.forceUpdateXAndY(sceneRect.x, sceneRect.y);
        });
        const mutationObserverConfig = { attributes: true, childList: true, subtree: true };
        this.mutationObserver.observe(document.body, mutationObserverConfig);

        return this.execHelper('startARScene', [this.scene, config, initialProps]);
    }
    destroy(): Promise<void> {
        return this.execHelper('destroy', [this.scene]);
    }
    setConfig(config: ARSceneConfig): Promise<void> {
        return this.execHelper('setConfig', [this.scene, config]);
    }
    scroll(): Promise<void> {
        const sceneRect = document.getElementById(this.divId).getBoundingClientRect();
        return this.forceUpdateXAndY(sceneRect.x, sceneRect.y);
    }
    private forceUpdateXAndY(x: number, y: number) {
        return this.execHelper('forceUpdateXAndY', [this.scene, x, y])
    }
}

export class ARHandScene extends ARScene {
    constructor(divId: string) { super("ARHand", divId); }
}

export class ARWorldScene extends ARScene {
    constructor(divId: string) { super("ARWorld", divId); }
}

export class ARFaceScene extends ARScene {
    constructor(divId: string) { super("ARFace", divId); }
}

export class ARBodyScene extends ARScene {
    constructor(divId: string) { super("ARBody", divId); }
}

export function requestCameraPermission(): Promise<void> {
    return asyncExec('HMSAREngine', 'requestPermission', []);
}

export async function hasCameraPermission(): Promise<boolean> {
    const out = await asyncExec('HMSAREngine', 'hasPermission', []);
    return out.result;
}

export async function isAREngineServiceAPKReady(): Promise<boolean> {
    const out = await asyncExec('HMSAREngine', 'isAREngineServiceAPKReady', []);
    return out.result;
}
export function navigateToAppMarket(): Promise<void> {
    return asyncExec('HMSAREngine', 'navigateToAppMarket', []);
}
export function enableLogger(): Promise<void> {
    return asyncExec('HMSAREngine', 'enableLogger', []);
}
export function disableLogger(): Promise<void> {
    return asyncExec('HMSAREngine', 'disableLogger', []);
}