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
import { AdParam, HMSReward, HMSRewardVerifyConfig } from './interfaces';
import { RewardAdEvents } from './HMSConstants';
import { Ads } from './ads';
export declare class HMSRewardAd extends Ads {
    constructor();
    on(eventName: RewardAdEvents, callback: () => void): void;
    create(adId: string): Promise<HMSRewardAd>;
    show(useActivity: boolean): Promise<void>;
    resume(): Promise<void>;
    pause(): Promise<void>;
    destroy(): Promise<void>;
    loadAd(adParam?: AdParam): Promise<void>;
    isLoaded(): Promise<boolean>;
    getData(): Promise<string>;
    getUserId(): Promise<string>;
    getReward(): Promise<HMSReward>;
    setData(data: string): Promise<void>;
    setImmersive(immersive: boolean): Promise<void>;
    setUserId(userId: string): Promise<void>;
    setRewardVerifyConfig(config: HMSRewardVerifyConfig): Promise<void>;
    getRewardVerifyConfig(): Promise<HMSRewardVerifyConfig>;
    setOnMetadataChangedListener(): Promise<void>;
    setRewardAdListener(): Promise<void>;
}
