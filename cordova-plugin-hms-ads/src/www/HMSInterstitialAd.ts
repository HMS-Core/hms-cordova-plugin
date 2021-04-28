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
import { AdParam} from './interfaces'
import { Ads } from './ads'
import { InterstitialAdEvents } from './HMSConstants'



export class HMSInterstitialAd extends Ads {
    constructor() {
        super(HMSInterstitialAd.name.toLowerCase())
    }

    on(eventName: InterstitialAdEvents, callback: () => void): void {
        super.on(eventName, callback);
    }

    async create(useActivity: boolean): Promise<HMSInterstitialAd> {
        return <Promise<HMSInterstitialAd>>super.create({"useActivity": useActivity});
    }

    // Interstitial Ad Methods
    show(): Promise<void> {
        return this.run('show')
    }

    isLoaded(): Promise<boolean> {
        return this.run('isLoaded')
    }

    isLoading(): Promise<boolean> {
        return this.run('isLoading')
    }

    loadAd(adParam: AdParam = {}): Promise<void> {
        return this.run('loadAd', adParam)
    }

    setAdId(adId: string): Promise<void> {
        return this.run('setAdId', { 'adId': adId });
    }

    getAdId(): Promise<string> {
        return this.run('getAdId');
    }

    setAdListener(): Promise<void> {
        return this.run('setAdListener');
    }

    setRewardAdListener(): Promise<void> {
        return this.run('setAdListener');
    }

}