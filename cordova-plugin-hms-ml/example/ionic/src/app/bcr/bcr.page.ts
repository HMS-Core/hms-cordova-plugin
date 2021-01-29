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
import { Component, OnInit } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

declare var HMSTextServiceProvider;
@Component({
  selector: 'app-bcr',
  templateUrl: './bcr.page.html',
  styleUrls: ['./bcr.page.scss'],
})
export class BcrPage {
  toggle: boolean = false;
  filePath: string = "";
  toogleName: string = "";
  cardNumber:string;
  cardExpire:string;
  cardURI:string;

  constructor(private fileChooser: FileChooser) {
    this.toogleName = "Device";
  }
  public async changeToogle() {
    if (this.toggle == false) {
      this.toogleName = "Plugin";
    } else {
      this.toogleName = "Device";
    }
  }


  public async getFile() {
    this.fileChooser.open()
      .then(uri => this.filePath = uri)
      .catch(e => console.log(e));
  }

  public async bankCardDetector() {
    var bankCardSDKDetectorInput = {
      detectType: 0,
      filePath: this.filePath,
      mLBcrAnalyzerSetting: {
        langType: "zh"
      },
    };
    var bankCardPluginDetectorInput = {
      detectType: 1,
      mLBcrCaptureConfig: {
        orientation: HMSTextServiceProvider.MLBcrCaptureConfig.ORIENTATION_AUTO,
      },
    };
    try {
      if (this.toggle == false) {
        var result = await HMSTextServiceProvider.bankCardDetector(bankCardSDKDetectorInput);
      } else {
         result = await HMSTextServiceProvider.bankCardDetector(bankCardPluginDetectorInput);
      }
      this.cardNumber=JSON.stringify(result.number);
      this.cardExpire= JSON.stringify(result.expire);
      this.cardURI=JSON.stringify(result.originalBitmap);
    } catch (ex) {
      alert(ex)
    }
  }
  
  public async stopbankCardDetector() {
    
    try {
      alert(await HMSTextServiceProvider.stopBankCardDetector());      
    } catch (ex) {
      alert(ex)
    }
  }


}
