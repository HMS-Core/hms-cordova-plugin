/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.

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

import { Ads } from './ads'
import { VastEvents } from './HMSConstants'
import { VastLoadOptions, Props, LayoutBounds } from './interfaces'
import { getInitialPropsOfHTMLElementFrom } from './layout'

const vastViews = new Map<string, HMSVast>()
export class VastAlreadyDefinedError extends Error {
    constructor() {
        super()
        this.name = "VastAlreadyDefinedError"
        this.message = "Vast object with the id specified already defined"
    }
}
export class HMSVast extends Ads {
    public divId: string = "";
    public element: HTMLElement | null = null;
    public vastCurrentProps: Props;
    constructor() {
        super(HMSVast.name.toLowerCase())
        this.vastCurrentProps = {} as Props;
    }

    on(eventName: VastEvents, callback: () => void): void {
        super.on(eventName, callback);
    }

    async create(divId: string, bounds?: LayoutBounds): Promise<HMSVast> {
        this.divId = divId;
        if (vastViews.has(divId))
            throw new VastAlreadyDefinedError()
            
        this.element = document.getElementById(this.divId);
        vastViews.set(divId, this);
        const vastMutationObserver = new MutationObserver(() => {
            if (this.element != null) {
                this.forceUpdateVastXAndY();
            }
        });

        const config = {attributes: true, childList: true, subtree: true};
        vastMutationObserver.observe(document.body, config);

        const initialProps: any = getInitialPropsOfHTMLElementFrom(divId);
        if (bounds) {
            if (bounds.marginBottom) initialProps['marginBottom'] = bounds.marginBottom;
            if (bounds.marginRight) initialProps['marginRight'] = bounds.marginRight;
            if (bounds.marginLeft) initialProps['marginLeft'] = bounds.marginLeft;
            if (bounds.marginTop) initialProps['marginTop'] = bounds.marginTop;
        }
        this.vastCurrentProps = initialProps;
        return <Promise<HMSVast>>super.create(initialProps);
    }
    scroll(): void {
        if (this.element === null) return;
        const vastRect = this.element.getBoundingClientRect();
        if (this.vastCurrentProps.x === vastRect.x && this.vastCurrentProps.y === vastRect.y) return;
        this.run('scroll', { 'scrolledX': vastRect.x, 'scrolledY': vastRect.y});
    }
    private forceUpdateVastXAndY() {
        if (this.element === null) return;
        const vastRect = this.element.getBoundingClientRect();
        this.run('forceUpdateVastXAndY', { 'scrolledX': vastRect.x, 'scrolledY': vastRect.y,
            'pageYOffset': window.pageYOffset, 'pageXOffset': window.pageXOffset});
    }

    loadAd(options: VastLoadOptions = {}): Promise<void>{
        return this.run('loadAd', options)
    }

    resume(): Promise<void>{
        return this.run('resume')
    }

    pause(): Promise<void>{
        return this.run('pause')
    }

    release(): Promise<void>{
        vastViews.delete(this.divId)
        return this.run('release')
    }

    toggleMuteState(isMute:boolean): Promise<void>{
        return this.run('toggleMuteState',isMute)
    }

    startOrPause(): Promise<void>{
        return this.run('startOrPause')
    }
    
}    