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
import { Component, OnInit } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
declare var HMSFaceBodyProvider;
@Component({
  selector: 'app-stillhandkey',
  templateUrl: './stillhandkey.page.html',
  styleUrls: ['./stillhandkey.page.scss'],
})
export class StillhandkeyPage {
  imageResult: string = "";
  resultHandkey: string = "";
  imageHandkeyOriginal: string = "";
  constructor(private fileChooser: FileChooser) { }

  public async getFile() {
    this.fileChooser.open()
      .then(uri => this.imageResult = uri)
      .catch(e => console.log(e));
    this.imageHandkeyOriginal = this.imageResult;
  }

  public async getStillHandkey() {
    var stillHandkeyAnalyserInput  = {
      syncType:0, 
       handkeySetting:{
            maxHandResults:2,
        },
      filePath: this.imageResult,
  
    };
    try {
      const result = await HMSFaceBodyProvider.stillHandkeyAnalyser(stillHandkeyAnalyserInput);
      alert(JSON.stringify(result));
      } catch (ex) {
      alert(ex)
    }
  }

}
