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
import { LayoutBounds, AdParam, Props, AdSize } from './interfaces';
import { BannerAdSize, BannerAdEvents, Color } from './HMSConstants';
import { Ads } from './ads';
export declare class BannerAlreadyDefinedError extends Error {
    constructor();
}
export declare class HMSBannerAd extends Ads {
    divId: string;
    element: HTMLElement | null;
    bannerCurrentProps: Props;
    constructor();
    on(eventName: BannerAdEvents, callback: () => void): void;
    create(divId: string, bounds?: LayoutBounds): Promise<HMSBannerAd>;
    scroll(): void;
    private forceUpdateBannerXAndY;
    getAdId(): Promise<string>;
    setAdId(adId: string): Promise<void>;
    getBannerAdSize(): Promise<AdSize>;
    setBannerAdSize(bannerAdSize: BannerAdSize | AdSize): Promise<void>;
    setBackgroundColor(bgColor: Color): Promise<void>;
    setBannerRefresh(bannerRefresh: number): Promise<void>;
    setAdListener(): Promise<void>;
    isLoading(): Promise<boolean>;
    loadAd(adParam?: AdParam): Promise<void>;
    pause(): Promise<void>;
    resume(): Promise<void>;
    destroy(): Promise<void>;
    getHeight(): Promise<number>;
    getHeightPx(): Promise<number>;
    getWidth(): Promise<number>;
    getWidthPx(): Promise<number>;
    isAutoHeightSize(): Promise<boolean>;
    isDynamicSize(): Promise<boolean>;
    isFullWidthSize(): Promise<boolean>;
    getCurrentDirectionBannerSize(width: number): Promise<AdSize>;
    getLandscapeBannerSize(width: number): Promise<AdSize>;
    getPortraitBannerSize(width: number): Promise<AdSize>;
}
