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

import { Ads } from './ads';
import { VastEvents } from './HMSConstants';
import { VastLoadOptions, Props, LayoutBounds } from './interfaces';
export declare class VastAlreadyDefinedError extends Error {
    constructor();
}
export declare class HMSVast extends Ads {
    divId: string;
    element: HTMLElement | null;
    vastCurrentProps: Props;
    constructor();
    on(eventName: VastEvents, callback: () => void): void;
    create(divId: string, bounds?: LayoutBounds): Promise<HMSVast>;
    scroll(): void;
    private forceUpdateVastXAndY;
    loadAd(options?: VastLoadOptions): Promise<void>;
    resume(): Promise<void>;
    pause(): Promise<void>;
    release(): Promise<void>;
    toggleMuteState(isMute: boolean): Promise<void>;
    startOrPause(): Promise<void>;
}
