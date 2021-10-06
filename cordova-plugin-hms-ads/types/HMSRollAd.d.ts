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
import { LayoutBounds, RollAdLoaderParams, RollAdLoadOptions, Props, Duration } from './interfaces';
import { RollAdEvents } from './HMSConstants';
import { Ads } from './ads';
export declare class RollAlreadyDefinedError extends Error {
    constructor();
}
export declare class HMSRollAd extends Ads {
    divId: string;
    element: HTMLElement | null;
    rollCurrentProps: Props;
    constructor();
    on(eventName: RollAdEvents, callback: () => void): void;
    create(params: RollAdLoaderParams, divId: string, bounds?: LayoutBounds): Promise<HMSRollAd>;
    scroll(): void;
    private forceUpdateRollXAndY;
    loadAd(options: RollAdLoadOptions): Promise<void>;
    isLoading(): Promise<boolean>;
    destroy(): Promise<void>;
    pause(): Promise<void>;
    isPlaying(): Promise<boolean>;
    mute(): Promise<void>;
    unmute(): Promise<void>;
    onClose(): Promise<void>;
    play(): Promise<void>;
    stop(): Promise<void>;
    removeInstreamMediaChangeListener(): Promise<void>;
    removeMediaMuteListener(): Promise<void>;
    removeInstreamMediaStateListener(): Promise<void>;
    setInstreamAds(): Promise<void>;
    setInstreamMediaChangeListener(): Promise<void>;
    setMediaMuteListener(): Promise<void>;
    setInstreamMediaStateListener(): Promise<void>;
    setOnInstreamAdClickListener(): Promise<void>;
    getAdSource(): Promise<string>;
    getDuration(): Promise<Duration>;
    getWhyThisAd(): Promise<string>;
    getAdSign(): Promise<string>;
    isClicked(): Promise<boolean>;
    isExpired(): Promise<boolean>;
    isImageAd(): Promise<boolean>;
    isShown(): Promise<boolean>;
    isVideoAd(): Promise<boolean>;
    getCallToAction(): Promise<string>;
}
