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
import { asyncExec } from './utils'

export abstract class Ads {

    id: number;
    objectName: string;
    constructor(objectName: string = 'ads') {
      this.id = -1;
      this.objectName = objectName;
      console.log(`New ads object created, objType=${this.objectName}..`)
    }
  
    on(eventName: any, handler: () => void): void {
      const instanceEventName = `${eventName}_${this.id}`
      console.log(`${this.objectName} :: ${instanceEventName} -> event registeration started..`)
      window.subscribeHMSEvent(instanceEventName, handler);
    }
  
    async create(...options: any): Promise<Ads> {
      console.log(`${this.objectName} ads creation started..`)
  
  
      if (this.id != -1)
        return this
  
      console.log('createAd starting')
      const result = await asyncExec('HMSAds', 'AdManagerModule', ['createAd', this.objectName, options])
      console.log('result', JSON.stringify(result))
      this.id = result.id
      console.log(`${this.objectName} ads creation result id=${this.id}`)
      return this
    }
  
  
    protected run(funcName: string, opts: any = {}) {
      console.log(`run :: ${funcName} -> function called by object=${this.objectName}`)
      return asyncExec('HMSAds', 'AdManagerModule',  ['run', this.objectName, this.id, funcName, opts])
    }
  
  }