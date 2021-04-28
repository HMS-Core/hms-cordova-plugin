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
import { LayoutBounds, AdParam, RollAdLoaderParams, RollAdLoadOptions, Props, Duration } from './interfaces'
import { getInitialPropsOfHTMLElementFrom } from './layout'
import { RollAdEvents } from './HMSConstants'
import { Ads } from './ads'

const rollAdViews = new Map<string, HMSRollAd>()
export class RollAlreadyDefinedError extends Error {
    constructor() {
        super()
        this.name = "RollAlreadyDefinedError"
        this.message = "Roll ad object with the id specified already defined"
    }
}
export class HMSRollAd extends Ads {
    public divId: string = "";
    public element: HTMLElement | null = null;
    public rollCurrentProps: Props;
    constructor() {
        super(HMSRollAd.name.toLowerCase())
        this.rollCurrentProps = {} as Props;

    }

    on(eventName: RollAdEvents, callback: () => void): void {
        super.on(eventName, callback);
    }

    async create(params: RollAdLoaderParams, divId: string, bounds?: LayoutBounds): Promise<HMSRollAd> {
        this.divId = divId;
        if (rollAdViews.has(divId))
            throw new RollAlreadyDefinedError()

        const initialProps: any = getInitialPropsOfHTMLElementFrom(divId);
        rollAdViews.set(divId, this)
        this.element = document.getElementById(this.divId);
        const rollMutationObserver = new MutationObserver(() => {
            if(this.element != null){
                this.forceUpdateRollXAndY();
            }
        });
        const config = {attributes: true, childList: true, subtree: true};
        rollMutationObserver.observe(document.body, config);
        if (bounds) {
            if (bounds.marginBottom) initialProps['marginBottom'] = bounds.marginBottom;
            if (bounds.marginRight) initialProps['marginRight'] = bounds.marginRight;
            if (bounds.marginLeft) initialProps['marginLeft'] = bounds.marginLeft;
            if (bounds.marginTop) initialProps['marginTop'] = bounds.marginTop;
        }
        this.rollCurrentProps = initialProps;
        return <Promise<HMSRollAd>>super.create(initialProps, params);
    }

    scroll(): void {
        if (this.element === null) return;
        const rollRect = this.element.getBoundingClientRect();
        if (this.rollCurrentProps.x === rollRect.x && this.rollCurrentProps.y === rollRect.y) return;
        this.run('scroll', { 'scrolledX': rollRect.x, 'scrolledY': rollRect.y});
    }

    private forceUpdateRollXAndY() {
        if (this.element === null) return;
        const rollRect = this.element.getBoundingClientRect();
        this.run('forceUpdateRollXAndY', { 'scrolledX': rollRect.x, 'scrolledY': rollRect.y,
            'pageYOffset': window.pageYOffset, 'pageXOffset': window.pageXOffset});
    }
    
    //InstreamLoader
    loadAd(options: RollAdLoadOptions): Promise<void> {
        return this.run('loadAd', options)
    }
    isLoading(): Promise<boolean> {
        return this.run('isLoading')
    }

    //InstreamView 
    destroy(): Promise<void> {
        rollAdViews.delete(this.divId)
        return this.run('destroy')
    }

    pause(): Promise<void> {
        return this.run('pause')
    }

    isPlaying(): Promise<boolean> {
        return this.run('isPlaying')
    }


    mute(): Promise<void> {
        return this.run('mute')
    }


    unmute(): Promise<void> {
        return this.run('unmute')
    }

    onClose(): Promise<void> {
        return this.run('onClose')
    }

    play(): Promise<void> {
        return this.run('play')
    }

    stop(): Promise<void> {
        return this.run('stop')
    }

    removeInstreamMediaChangeListener(): Promise<void> {
        return this.run('removeInstreamMediaChangeListener')
    }
    removeMediaMuteListener(): Promise<void> {
        return this.run('removeMediaMuteListener')
    }
    removeInstreamMediaStateListener(): Promise<void> {
        return this.run('removeInstreamMediaStateListener')
    }
    setInstreamAds(): Promise<void> {
        return this.run('setInstreamAds')
    }

    setInstreamMediaChangeListener(): Promise<void> {
        return this.run('setInstreamMediaChangeListener')
    }
    setMediaMuteListener(): Promise<void> {
        return this.run('setMediaMuteListener')
    }
    setInstreamMediaStateListener(): Promise<void> {
        return this.run('setInstreamMediaStateListener')
    }
    setOnInstreamAdClickListener(): Promise<void> {
        return this.run('setOnInstreamAdClickListener')
    }

    //InstreamAd
    getAdSource(): Promise<string> {
        return this.run('getAdSource')
    }
    getDuration(): Promise<Duration> {
        return this.run('getDuration')
    }
    getWhyThisAd(): Promise<string> {
        return this.run('getWhyThisAd')
    }
    getAdSign(): Promise<string> {
        return this.run('getAdSign')
    }
    isClicked(): Promise<boolean> {
        return this.run('isClicked')
    }
    isExpired(): Promise<boolean> {
        return this.run('isExpired')
    }
    isImageAd(): Promise<boolean> {
        return this.run('isImageAd')
    }
    isShown(): Promise<boolean> {
        return this.run('isShown')
    }
    isVideoAd(): Promise<boolean> {
        return this.run('isVideoAd')
    }
    getCallToAction(): Promise<string> {
        return this.run('getCallToAction')
    }

}
