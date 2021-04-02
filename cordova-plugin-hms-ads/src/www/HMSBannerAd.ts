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
import { LayoutBounds, AdParam, Props, AdSize } from './interfaces'
import { getInitialPropsOfHTMLElementFrom } from './layout'
import { BannerAdSize, BannerAdEvents, Color } from './HMSConstants'
import { Ads } from './ads'

const bannerViews = new Map<string, HMSBannerAd>()
export class BannerAlreadyDefinedError extends Error {
    constructor() {
        super()
        this.name = "BannerAlreadyDefinedError"
        this.message = "Banner object with the id specified already defined"
    }
}
export class HMSBannerAd extends Ads {
    public divId: string = "";
    public element: HTMLElement | null = null;
    public bannerCurrentProps: Props;
    constructor() {
        super(HMSBannerAd.name.toLowerCase())
        this.bannerCurrentProps = {} as Props;
    }

    on(eventName: BannerAdEvents, callback: () => void): void {
        super.on(eventName, callback);
    }

    async create(divId: string, bounds?: LayoutBounds): Promise<HMSBannerAd> {
        this.divId = divId
        if (bannerViews.has(divId))
            throw new BannerAlreadyDefinedError()

        this.element = document.getElementById(this.divId);
        bannerViews.set(divId, this)
        const initialProps: any = getInitialPropsOfHTMLElementFrom(divId);
        if (bounds) {
            if (bounds.marginLeft) initialProps['marginLeft'] = bounds.marginLeft;
            if (bounds.marginTop) initialProps['marginTop'] = bounds.marginTop;
            if (bounds.marginBottom) initialProps['marginBottom'] = bounds.marginBottom;
            if (bounds.marginRight) initialProps['marginRight'] = bounds.marginRight;
        }

        const bannerMutationObserver = new MutationObserver(() => {
            if (this.element != null) {
                this.forceUpdateBannerXAndY();
            }
        });
        const config = { attributes: true, childList: true, subtree: true };
        bannerMutationObserver.observe(document.body, config);
        this.bannerCurrentProps = initialProps;
        return <Promise<HMSBannerAd>>super.create(initialProps);
    }

    scroll(): void {
        if (this.element === null) return;
        const bannerRect = this.element.getBoundingClientRect();
        if (this.bannerCurrentProps.x === bannerRect.x && this.bannerCurrentProps.y === bannerRect.y) return;
        this.run('scroll', { 'scrolledX': bannerRect.x, 'scrolledY': bannerRect.y});
    }

    private forceUpdateBannerXAndY() {
        if (this.element === null) return;
        const bannerRect = this.element.getBoundingClientRect();
        this.run('forceUpdateBannerXAndY', { 'scrolledX': bannerRect.x, 'scrolledY': bannerRect.y,
            'pageYOffset': window.pageYOffset, 'pageXOffset': window.pageXOffset});
    }

    getAdId(): Promise<string> {
        return this.run('getAdId')
    }

    setAdId(adId: string): Promise<void> {
        return this.run('setAdId', { 'adId': adId })
    }

    getBannerAdSize(): Promise<AdSize> {
        return this.run('getBannerAdSize')
    }

    setBannerAdSize(bannerAdSize: BannerAdSize | AdSize): Promise<void> {
        return this.run('setBannerAdSize', { 'bannerAdSize': bannerAdSize })
    }

    setBackgroundColor(bgColor: Color): Promise<void> {
        return this.run('setBackgroundColor', { 'backgroundColor': bgColor })
    }

    setBannerRefresh(bannerRefresh: number): Promise<void> {
        return this.run('setBannerRefresh', { 'bannerRefresh': bannerRefresh })
    }

    setAdListener(): Promise<void> {
        return this.run('setAdListener')
    }

    isLoading(): Promise<boolean> {
        return this.run('isLoading')
    }

    loadAd(adParam: AdParam = {}): Promise<void> {
        return this.run('loadAd', adParam)
    }

    pause(): Promise<void> {
        return this.run('pause')
    }

    resume(): Promise<void> {
        return this.run('resume')
    }

    destroy(): Promise<void> {
        bannerViews.delete(this.divId)
        return this.run('destroy')
    }

    getHeight(): Promise<number> {
        return this.run('getHeight')
    }
    getHeightPx(): Promise<number> {
        return this.run('getHeightPx')
    }
    getWidth(): Promise<number> {
        return this.run('getWidth')
    }
    getWidthPx(): Promise<number> {
        return this.run('getWidthPx')
    }
    isAutoHeightSize(): Promise<boolean> {
        return this.run('isAutoHeightSize')
    }
    isDynamicSize(): Promise<boolean> {
        return this.run('isDynamicSize')
    }
    isFullWidthSize(): Promise<boolean> {
        return this.run('isFullWidthSize')
    }

    getCurrentDirectionBannerSize(width: number): Promise<AdSize> {
        return this.run('getCurrentDirectionBannerSize', { "width": width })
    }
    getLandscapeBannerSize(width: number): Promise<AdSize> {
        return this.run('getLandscapeBannerSize', { "width": width })
    }
    getPortraitBannerSize(width: number): Promise<AdSize> {
        return this.run('getPortraitBannerSize', { "width": width })
    }
}
