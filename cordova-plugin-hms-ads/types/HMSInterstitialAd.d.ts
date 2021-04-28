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
import { AdParam } from './interfaces';
import { Ads } from './ads';
import { InterstitialAdEvents } from './HMSConstants';
export declare class HMSInterstitialAd extends Ads {
    constructor();
    on(eventName: InterstitialAdEvents, callback: () => void): void;
    create(useActivity: boolean): Promise<HMSInterstitialAd>;
    show(): Promise<void>;
    isLoaded(): Promise<boolean>;
    isLoading(): Promise<boolean>;
    loadAd(adParam?: AdParam): Promise<void>;
    setAdId(adId: string): Promise<void>;
    getAdId(): Promise<string>;
    setAdListener(): Promise<void>;
    setRewardAdListener(): Promise<void>;
}
