/*
    Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

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

import { Component } from '@angular/core';
import { HMSDtm } from '@ionic-native/hms-dtm/ngx'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private hmsDtm:HMSDtm) {
    this.hmsDtm.onCustomTag((result)=>{
      console.log(JSON.stringify(result));
      if(result.price==100){
        const newPrice = result.price - result.price/result.discount
        this.hmsDtm.setCustomVariable({"varName":"PantsPrice","value":newPrice})
      }
    })
      
  }
  
 async sendCustomEvent(){
  const eventName = "Platform"
  const bundleObject = { "platformName":"Cordova" }
  console.log(await this.hmsDtm.onEvent(eventName, bundleObject));
  }

  async CustomTag(){
    const eventName = "PurchaseShoes"
    const bundleObject = {}
    console.log(await this.hmsDtm.onEvent(eventName, bundleObject));
  }

 async setCustomVariableValue(){
    const eventName = "SetPantsPrice"
    const bundleObject = {}
    console.log(await this.hmsDtm.onEvent(eventName, bundleObject));  
 }

 async reportEventwithCustomVariable(){
  const eventName = "PurchasePants"
  const bundleObject = {}
  console.log(await this.hmsDtm.onEvent(eventName, bundleObject));
  
}
}
