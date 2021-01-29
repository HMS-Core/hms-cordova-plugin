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
declare var HMSImageServiceProvider;
@Component({
  selector: 'app-classify',
  templateUrl: './classify.page.html',
  styleUrls: ['./classify.page.scss'],
})
export class ClassifyPage {
  imageResult: string = "";
  identity: string = "";
  name: string = "";
  possibility: string = "";
  toggle: boolean = false;
  ocrType: number;
  toogleName: string = "";
  constructor(private fileChooser: FileChooser) {
    this.toogleName = "Local";
    this.ocrType = 0;
  }

  public async changeToogle() {
    if (this.toggle == false) {
      this.toogleName = "Remote";
    } else {
      this.toogleName = "Local";
    }
    if (this.toggle == true) {
      this.ocrType = HMSImageServiceProvider.MLImageClassificationConfig.TYPE_LOCAL;
    } else {
      this.ocrType = HMSImageServiceProvider.MLImageClassificationConfig.TYPE_REMOTE;
    }
  }

  public async getFile() {
    this.fileChooser.open()
      .then(uri => this.imageResult = uri)
      .catch(e => console.log(e));
  }

  public async imageClassificationAnalyser() {
    var localImageClassificationInput = {
      ocrType: this.ocrType,
      analyseMode: 0,
      localClassificationAnalyzerSetting: {
        possibility: 0.8,
      },
      filePath: this.imageResult,
     
    };
    var remoteImageClassificationInput = {
      ocrType: this.ocrType,
      analyseMode: 0,
      remoteClassificationAnalyzerSetting: {
        maxResults: 0,
        possibility: 0.5,
      },
      filePath: this.imageResult,
      
    };

    try {

      if (this.toggle == true) {
        var result = await HMSImageServiceProvider.imageClassificationAnalyser(remoteImageClassificationInput);
        alert(JSON.stringify(result));
      } else {
        var result = await HMSImageServiceProvider.imageClassificationAnalyser(localImageClassificationInput);
        alert(JSON.stringify(result));
      }

    } catch (ex) {
      alert(ex)
    }
  }

}