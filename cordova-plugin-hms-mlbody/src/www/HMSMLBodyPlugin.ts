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

import { asyncExec } from "./util";
import * as MLKit from "./interfaces";
export * from './interfaces'

//ML
function getInitialProps(divId: string) {
    const element: HTMLElement | null = document.getElementById(divId);
    if (element === null) return {};
    const clientRect = element.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(element, null);
    let props: any = {};
    props["x"] = clientRect.x;
    props["y"] = clientRect.y;
    props["width"] = parseInt(computedStyle.getPropertyValue("width"));
    props["height"] = parseInt(computedStyle.getPropertyValue("height"));
    return props;
}
export abstract class MLLive {
    protected scene: string;
    protected divId: string;
    private mutationObserver: MutationObserver;
    constructor(scene: string, divId: string) {
        this.scene = scene;
        this.divId = divId;
    }
    protected execHelper(func: string, args: any) {
        return asyncExec("HMSMLBodyPlugin", func, args);
    }
    on(eventName: MLKit.Events, call: (value: any) => void): void {
        window.subscribeHMSEvent(eventName, call);
    }
    startMLLive(config: MLKit.MLconfig, bounds?: MLKit.MLBounds): Promise<void> {
        const initialProps = getInitialProps(this.divId);
        if (bounds) {
            if (bounds.marginLeft)
                initialProps["marginLeft"] = bounds.marginLeft;
            if (bounds.marginTop) initialProps["marginTop"] = bounds.marginTop;
            if (bounds.marginBottom)
                initialProps["marginBottom"] = bounds.marginBottom;
            if (bounds.marginRight)
                initialProps["marginRight"] = bounds.marginRight;
        }

        this.mutationObserver = new MutationObserver(() => {
            const sceneRect = document
                .getElementById(this.divId)!
                .getBoundingClientRect();
            this.forceUpdateXAndY(sceneRect.x, sceneRect.y);
        });
        const mutationObserverConfig = {
            attributes: true,
            childList: true,
            subtree: true,
        };
        this.mutationObserver.observe(document.body, mutationObserverConfig);

        return this.execHelper(this.scene, [config, initialProps]);
    }
    setConfig(config: MLKit.MLconfig): Promise<void> {
        return this.execHelper("setConfig", [this.scene, config]);
    }
    scroll(): Promise<void> {
        const sceneRect = document
            .getElementById(this.divId)!
            .getBoundingClientRect();
        return this.forceUpdateXAndY(sceneRect.x, sceneRect.y);
    }
    private forceUpdateXAndY(x: number, y: number) {
        return this.execHelper("forceUpdateXAndY", [this.scene, x, y]);
    }
}
export class gestureliveEngineAnalyser extends MLLive {
    constructor(divId: string) {
        super("ACTION_GESTURE_LIVE_ANALYSE", divId);
    }
}
export class liveEngineAnalyser extends MLLive {
    constructor(divId: string) {
        super("ACTION_LIVE_ANALYSE", divId);
    }
}
export async function doZoom(doZoomReq: MLKit.doZoomReq): Promise<any> {
    return asyncExec("HMSMLBodyPlugin", "ACTION_LIVE_DOZOOM", [
        doZoomReq
    ]);
}
export async function photograph(): Promise<any> {
    return asyncExec("HMSMLBodyPlugin", "ACTION_LIVE_PHOTOGRAPHY_ANALYSE", [

    ]);
}
export async function destroy(): Promise<any> {
    return asyncExec("HMSMLBodyPlugin", "ACTION_LIVE_DESTROY", [

    ]);
}
export async function getDisplayDimension(): Promise<any> {
    return asyncExec("HMSMLBodyPlugin", "ACTION_LIVE_DISPLAYDIMENSION", [

    ]);
}
export async function getLensType(): Promise<any> {
    return asyncExec("HMSMLBodyPlugin", "ACTION_LIVE_GETLENSTYPE", [

    ]);
}

export async function serviceInitializer(
    params: MLKit.configReq
): Promise<any> {
    return asyncExec("HMSMLBodyPlugin", "HMSMLKIT_INITILALIZER", [
        params
    ]);
}

export async function mlFrame(
    mlFrameReq: MLKit.mlFrameReq
): Promise<any> {
    return asyncExec("HMSMLBodyPlugin", "ACTION_MLFRAME", [
        mlFrameReq
    ]);
}

export async function appSetting(
    appSettingReq: MLKit.appSettingReq
): Promise<any> {
    return asyncExec("HMSMLBodyPlugin", "ACTION_APP_SETTING", [
        appSettingReq
    ]);
}

export function enableLogger(): Promise<void> {
    return asyncExec("HMSMLBodyPlugin", "enableLogger", [

    ]);
}
export function disableLogger(): Promise<void> {
    return asyncExec("HMSMLBodyPlugin", "disableLogger", [

    ]);
}

/// Sets a data processing location when you choose to manually manage and specify such a location.
///
/// REGION_DR_UNKNOWN = 1001,
/// REGION_DR_CHINA = 1002,
/// REGION_DR_RUSSIA = 1005,
/// REGION_DR_GERMAN = 1006,
/// REGION_DR_SINGAPORE = 1007
export async function setUserRegion(
    region: number
): Promise<void> {
    return asyncExec("HMSMLBodyPlugin", "setUserRegion", [region]);
}
export async function getCountryCode(): Promise<String> {
    return asyncExec("HMSMLBodyPlugin", "getCountryCode", []);
}



