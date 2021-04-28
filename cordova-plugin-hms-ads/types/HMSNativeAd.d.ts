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
import { LayoutBounds, NativeAdLoadOptions, NativeAdOptions, Props, VideoOperatorAspectRatio, NativeAdConfiguration } from './interfaces';
import { NativeAdEvents } from './HMSConstants';
import { Ads } from './ads';
export declare class NativeAlreadyDefinedError extends Error {
    constructor();
}
export declare class HMSNativeAd extends Ads {
    divId: string;
    element: HTMLElement | null;
    nativeCurrentProps: Props;
    constructor();
    on(eventName: NativeAdEvents, callback: () => void): void;
    create(options: NativeAdOptions, bounds?: LayoutBounds): Promise<HMSNativeAd>;
    scroll(): void;
    private forceUpdateNativeXAndY;
    loadAd(options?: NativeAdLoadOptions): Promise<void>;
    show(): Promise<void>;
    isLoading(): Promise<boolean>;
    destroy(): Promise<void>;
    dislikeAd(dislikeReason: string): Promise<void>;
    setAllowCustomClick(): Promise<void>;
    getAdSource(): Promise<string>;
    getDescription(): Promise<string>;
    getCallToAction(): Promise<string>;
    getDislikeAdReasons(): Promise<string[]>;
    isCustomClickAllowed(): Promise<boolean>;
    isCustomDislikeThisAdEnabled(): Promise<boolean>;
    recordClickEvent(): Promise<void>;
    recordImpressionEvent(impressionData: any): Promise<boolean>;
    getUniqueId(): Promise<string>;
    setDislikeAdListener(): Promise<void>;
    gotoWhyThisAdPage(useView: boolean): Promise<void>;
    getAdSign(): Promise<string>;
    getTitle(): Promise<string>;
    getWhyThisAd(): Promise<string>;
    recordShowStartEvent(showStartData: any): Promise<boolean>;
    onAdClose(keywords: string[]): Promise<void>;
    getNativeAdConfiguration(): Promise<NativeAdConfiguration>;
    videoOperatorGetAspectRatio(): Promise<VideoOperatorAspectRatio>;
    videoOperatorHasVideo(): Promise<boolean>;
    videoOperatorIsCustomizeOperateEnabled(): Promise<boolean>;
    videoOperatorIsMuted(): Promise<boolean>;
    videoOperatorMute(mute: boolean): Promise<void>;
    videoOperatorPause(): Promise<void>;
    videoOperatorPlay(): Promise<void>;
    videoOperatorStop(): Promise<void>;
}
