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
import { FileChooser } from '@ionic-native/file-chooser/ngx';

declare var HMSVoiceServiceProvider;
@Component({
  selector: 'app-aft',
  templateUrl: './aft.page.html',
  styleUrls: ['./aft.page.scss'],
})
export class AftPage {
  audioFile: string = "";
  aftOutput: string = "";
  constructor(private fileChooser: FileChooser) { }

  public async getFile() {
    this.fileChooser.open()
      .then(uri => this.audioFile = uri)
      .catch(e => console.log(e));
  }

  public async aftAnalyserStart() {
    var aftAnalyserInput = {
      audioPath: this.audioFile,
      aftSetting :{
        languageCode: "en-US",
        punctuationEnabled: true,
        timeOffset:true,
        wordTimeOffsetEnabled: true,
        sentenceTimeOffsetEnabled: true        
      }
    };
    try {
      let result = await HMSVoiceServiceProvider.aftAnalyser(aftAnalyserInput);
      this.aftOutput = JSON.stringify(result.text);
    } catch (Ex) {
      alert(Ex);
    }
  }

}
