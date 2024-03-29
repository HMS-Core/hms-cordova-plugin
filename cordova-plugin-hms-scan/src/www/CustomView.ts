/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.

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
import { asyncExec } from './util';
import * as ScanKit from './interfaces';
export { Colors, ScanTypes, RectStyle } from './interfaces';
var currentProps = {};
var element: HTMLElement | null = null;
function getInitialProps(divId: string) {
    element = document.getElementById(divId);
    if (element === null) return {};
    const clientRect = element.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(element, null);
    let props: any = {};
    props['x'] = clientRect.x;
    props['y'] = clientRect.y;
    props['width'] = parseInt(computedStyle.getPropertyValue('width'));
    props['height'] = parseInt(computedStyle.getPropertyValue('height'));
    return props;
}

export function customViewMode(divId: string, userProps: ScanKit.CustomViewModeRequest) {
    const initialProps = getInitialProps(divId);
    const customProps = userProps;

    const mutationObserver = new MutationObserver(() => {
        if (element != null) {
            forceUpdateXAndY();
        }
    });
    const config = { attributes: true, childList: true, subtree: true };
    mutationObserver.observe(document.body, config);
    currentProps = initialProps;

    return asyncExec('HMSScan', 'ViewBaseModule', ['customViewMode', initialProps, customProps]);
};
export function on(eventName: string, call: (value: any) => void): void {
    window.subscribeHMSEvent(eventName, call);
}
export function openFlushLight() {
    return asyncExec('HMSScan', 'ViewBaseModule', ['openFlushLight']);
};
export function pauseContinuouslyScan() {
    return asyncExec('HMSScan', 'ViewBaseModule', ['pauseContinuouslyScan']);
};
export function resumeContinuouslyScan() {
    return asyncExec('HMSScan', 'ViewBaseModule', ['resumeContinuouslyScan']);
};
export function stopViewService() {
    return asyncExec('HMSScan', 'ViewBaseModule', ['stopViewService']);
}

function forceUpdateXAndY() {
    if (element === null) return;
    const rect = element.getBoundingClientRect();
    return asyncExec('HMSScan', 'ViewBaseModule', ['forceUpdateXAndY',
        rect.x, rect.y, window.pageXOffset, window.pageYOffset
    ]);
}