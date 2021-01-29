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
  selector: 'app-formrecognition',
  templateUrl: './formrecognition.page.html',
  styleUrls: ['./formrecognition.page.scss'],
})
export class FormrecognitionPage{

  imageResult: string = "";
  formRecognitionOutput: string = "";
  constructor(private fileChooser: FileChooser) { }

  public async getFile() {
    this.fileChooser.open()
      .then(uri => this.imageResult = uri)
      .catch(e => console.log(e));
  }

  public async formRecognitionAnalyser() {
    var formRecognitionreq = {  
      filePath: this.imageResult,
      syncType:0
    };
    try {
      var result = await HMSTextServiceProvider.formRecognitionAnalyser(formRecognitionreq);
      this.formRecognitionOutput = JSON.stringify(result);
    } catch (ex) {
      alert(ex)
    }
  }


}
