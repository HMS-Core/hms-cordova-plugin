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
import { AdParam, HMSReward, HMSRewardVerifyConfig } from './interfaces'
import { RewardAdEvents } from './HMSConstants'
import { Ads } from './ads'

export class HMSRewardAd extends Ads {
    constructor() {
        super(HMSRewardAd.name.toLowerCase())
    }

    on(eventName: RewardAdEvents, callback: () => void): void {
        super.on(eventName, callback);
    }

    async create(adId : string): Promise<HMSRewardAd> {
        return <Promise<HMSRewardAd>>super.create({'adId': adId});
    }
    
    show(useActivity:boolean): Promise<void>{
        return this.run('show', {"useActivity": useActivity})
    }

    resume(): Promise<void>{
        return this.run('resume')
    }

    pause(): Promise<void>{
        return this.run('pause')
    }

    destroy(): Promise<void>{
        return this.run('destroy')
    }

    loadAd(adParam: AdParam = {}): Promise<void>{
        return this.run('loadAd', adParam)
    }

    isLoaded(): Promise<boolean>{
        return this.run('isLoaded')
    }

    getData(): Promise<string>{
        return this.run('getData')
    }

    getUserId(): Promise<string>{
        return this.run('getUserId')
    }

    getReward(): Promise<HMSReward>{
        return this.run('getReward')
    }

    setData(data: string): Promise<void>{
        return this.run('setData', {'data': data})
    }

    setImmersive(immersive: boolean): Promise<void>{
        return this.run('setImmersive', {'immersive': immersive})
    }

    setUserId(userId: string): Promise<void>{
        return this.run('setUserId', {'userId': userId})
    }

    setRewardVerifyConfig(config: HMSRewardVerifyConfig): Promise<void>{
        return this.run('setRewardVerifyConfig', config)
    }

    getRewardVerifyConfig(): Promise<HMSRewardVerifyConfig>{
        return this.run('setRewardVerifyConfig')
    }

    setOnMetadataChangedListener(): Promise<void>{
        return this.run('setOnMetadataChangedListener')
    }

    setRewardAdListener(): Promise<void>{
        return this.run('setRewardAdListener')
    }
}
