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
import {
    LayoutBounds,
    NativeAdLoadOptions,
    NativeAdOptions,
    Props,
    VideoOperatorAspectRatio,
    NativeAdConfiguration
} from './interfaces'
import { getInitialPropsOfHTMLElementFrom } from './layout'
import { NativeAdEvents } from './HMSConstants'
import { Ads } from './ads'


const nativeViews = new Map<string, HMSNativeAd>()
export class NativeAlreadyDefinedError extends Error {
    constructor() {
        super()
        this.name = "NativeAlreadyDefinedError"
        this.message = "Native object with the id specified already defined"
    }
}
export class HMSNativeAd extends Ads {
    public divId: string = "";
    public element: HTMLElement | null = null;
    public nativeCurrentProps: Props;
    constructor() {
        super(HMSNativeAd.name.toLowerCase())
        this.nativeCurrentProps = {} as Props;
    }

    on(eventName: NativeAdEvents, callback: () => void): void {
        super.on(eventName, callback);
    }

    async create(options: NativeAdOptions, bounds?: LayoutBounds): Promise<HMSNativeAd> {
        this.divId = options.div
        if (nativeViews.has(options.div))
            throw new NativeAlreadyDefinedError()

        nativeViews.set(options.div, this)
        this.element = document.getElementById(this.divId);
        const nativeMutationObserver = new MutationObserver(() => {
            if (this.element != null) {
                this.forceUpdateNativeXAndY();
            }
        });

        const config = { attributes: true, childList: true, subtree: true };
        nativeMutationObserver.observe(document.body, config);

        const initialProps: any = getInitialPropsOfHTMLElementFrom(options.div);
        if (bounds) {
            if (bounds.marginRight) initialProps['marginRight'] = bounds.marginRight;
            if (bounds.marginTop) initialProps['marginTop'] = bounds.marginTop;
            if (bounds.marginBottom) initialProps['marginBottom'] = bounds.marginBottom;
            if (bounds.marginLeft) initialProps['marginLeft'] = bounds.marginLeft;
        }
        this.nativeCurrentProps = initialProps;
        return <Promise<HMSNativeAd>>super.create(initialProps, options);
    }

    scroll(): void {
        if (this.element === null) return;
        const nativeRect = this.element.getBoundingClientRect();
        if (this.nativeCurrentProps.x === nativeRect.x && this.nativeCurrentProps.y === nativeRect.y) return;
        this.run('scroll', { 'scrolledX': nativeRect.x, 'scrolledY': nativeRect.y});
    }

    private forceUpdateNativeXAndY() {
        if (this.element === null) return;
        const nativeRect = this.element.getBoundingClientRect();
        this.run('forceUpdateNativeXAndY', { 'scrolledX': nativeRect.x, 'scrolledY': nativeRect.y,
            'pageYOffset': window.pageYOffset, 'pageXOffset': window.pageXOffset});
    }

    loadAd(options: NativeAdLoadOptions = {}): Promise<void> {
        return this.run('loadAd', options)
    }

    show(): Promise<void> {
        return this.run('show')
    }

    isLoading(): Promise<boolean> {
        return this.run('isLoading')
    }

    destroy(): Promise<void> {
        nativeViews.delete(this.divId)
        return this.run('destroy')
    }

    dislikeAd(dislikeReason: string): Promise<void> {
        return this.run('dislikeAd', { 'dislikeAdReason': dislikeReason })
    }
    setAllowCustomClick(): Promise<void> {
        return this.run('setAllowCustomClick')
    }
    getAdSource(): Promise<string> {
        return this.run('getAdSource')
    }
    getDescription(): Promise<string> {
        return this.run('getDescription')
    }
    getCallToAction(): Promise<string> {
        return this.run('getCallToAction')
    }
    getDislikeAdReasons(): Promise<string[]> {
        return this.run('getDislikeAdReasons')
    }
    isCustomClickAllowed(): Promise<boolean> {
        return this.run('isCustomClickAllowed')
    }

    isCustomDislikeThisAdEnabled(): Promise<boolean> {
        return this.run('isCustomDislikeThisAdEnabled')
    }
    recordClickEvent(): Promise<void> {
        return this.run('recordClickEvent')
    }
    recordImpressionEvent(impressionData: any): Promise<boolean> {
        return this.run('recordImpressionEvent', impressionData)
    }

    getUniqueId(): Promise<string> {
        return this.run('getUniqueId')
    }
    setDislikeAdListener(): Promise<void> {
        return this.run('setDislikeAdListener')
    }
    gotoWhyThisAdPage(useView: boolean): Promise<void> {
        return this.run('gotoWhyThisAdPage', { "useView": useView })
    }

    getAdSign(): Promise<string> {
        return this.run('getAdSign')
    }

    getTitle(): Promise<string> {
        return this.run('getTitle')
    }


    getWhyThisAd(): Promise<string> {
        return this.run('getWhyThisAd')
    }

    recordShowStartEvent(showStartData: any): Promise<boolean> {
        return this.run('recordShowStartEvent', showStartData)
    }

    onAdClose(keywords: string[]): Promise<void> {
        return this.run('onAdClose', { 'keywords': keywords })
    }
    getNativeAdConfiguration(): Promise<NativeAdConfiguration> {
        return this.run('getNativeAdConfiguration')
    }

    // VideoOperator
    videoOperatorGetAspectRatio(): Promise<VideoOperatorAspectRatio> {
        return this.run('videoOperatorGetAspectRatio')
    }
    videoOperatorHasVideo(): Promise<boolean> {
        return this.run('videoOperatorHasVideo')
    }
    videoOperatorIsCustomizeOperateEnabled(): Promise<boolean> {
        return this.run('videoOperatorIsCustomizeOperateEnabled')
    }
    videoOperatorIsMuted(): Promise<boolean> {
        return this.run('videoOperatorIsMuted')
    }
    videoOperatorMute(mute: boolean): Promise<void> {
        return this.run('videoOperatorMute', { "mute": mute })
    }
    videoOperatorPause(): Promise<void> {
        return this.run('videoOperatorPause')
    }
    videoOperatorPlay(): Promise<void> {
        return this.run('videoOperatorPlay')
    }
    videoOperatorStop(): Promise<void> {
        return this.run('videoOperatorStop')
    }
}
