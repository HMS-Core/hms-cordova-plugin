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
  selector: 'app-object',
  templateUrl: './object.page.html',
  styleUrls: ['./object.page.scss'],
})
export class ObjectPage {
  imageResult: string = "";
  tracingIdentity: string = "";
  typeIdentity: string = "";
  typePossibility: string = "";
  bottom: string = "";
  left: string = "";
  right: string = "";
  top: string = "";
  constructor(private fileChooser: FileChooser) { }

  public async getFile() {
    this.fileChooser.open()
      .then(uri => this.imageResult = uri)
      .catch(e => console.log(e));
  }

  public async objectAnalyser() {
    var objectAnalyserInput = {
      filePath: this.imageResult,
      mlObjectAnalyserSetting: {
        isClassificationAllowed: true,
        isMultipleResultsAllowed: true,
        analyzerType:0
      }
    };
    try {
      var result = await HMSImageServiceProvider.objectAnalyser(objectAnalyserInput);
      this.bottom = JSON.stringify(result.result[0].border.bottom);
      this.left = JSON.stringify(result.result[0].border.left);
      this.right = JSON.stringify(result.result[0].border.right);
      this.top = JSON.stringify(result.result[0].border.top);
    } catch (ex) {
      alert(ex)
    }
  }

}
