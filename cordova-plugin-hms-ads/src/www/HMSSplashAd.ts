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
import { HMSScreenOrientation, SplashAdEvents, AudioFocusType } from './HMSConstants'
import { AdParam, SplashAdLoadOptions } from './interfaces'
import { Ads } from './ads'

export class HMSSplashAd extends Ads{
    constructor() {
        super(HMSSplashAd.name.toLowerCase())
    }

    async create(): Promise<HMSSplashAd> {
        return <Promise<HMSSplashAd>>super.create();
    }

    on(eventName: SplashAdEvents, callback: () => void): void {
        super.on(eventName, callback);
    }

    setLogo(file: string): Promise<void> {
        return this.run('setLogo', {'file': file})
    }

    setWideSloganResId(wideSloganResId: string): Promise<void> {
        return this.run('setWideSloganResId', {'wideSloganResId': wideSloganResId})
    }

    setSloganResId(sloganResId: string): Promise<void> {
        return this.run('setSloganResId', {'sloganResId': sloganResId})
    }

    load(options: SplashAdLoadOptions): Promise<void>{
        return this.run('load',options)
    }

    preloadAd(options: SplashAdLoadOptions): Promise<void>{
        return this.run('preloadAd',options)
    }

    destroyView(): Promise<void>{
        return this.run('destroyView')
    }

    pauseView(): Promise<void>{
        return this.run('pauseView')
    }
    resumeView(): Promise<void>{
        return this.run('resumeView')
    }

    isLoading(): Promise<boolean>{
        return this.run('isLoading')
    }

    isLoaded(): Promise<boolean>{
        return this.run('isLoaded')
    }
    
    setAdDisplayListener(): Promise<void>{
        return this.run('setAdDisplayListener')
    }

    setAudioFocusType(audioFocusType: AudioFocusType): Promise<void>{
        return this.run('setAudioFocusType', {"audioFocusType": audioFocusType})
    }


}