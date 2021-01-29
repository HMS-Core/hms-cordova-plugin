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
declare var HMSTextServiceProvider;
@Component({
  selector: 'app-generalcard',
  templateUrl: './generalcard.page.html',
  styleUrls: ['./generalcard.page.scss'],
})
export class GeneralcardPage {
  gcrCardRecognitionOutput: string = "";
  constructor() { }

  public async generalCardDetector() {
    var generalCardDetectorInput = {
      gcrCaptureConfig: {
        language: "en",
      },
      gcrCaptureUIConfig: {
        orientation: HMSTextServiceProvider.MLGcrCaptureUIConfig.ORIENTATION_AUTO,
        tipTextColor: HMSTextServiceProvider.Colors.GREEN,
        tipText: "Scan a card",
        scanBoxCornerColor: HMSTextServiceProvider.Colors.BLUE,
      }
    };
    try {
      const result = await HMSTextServiceProvider.generalCardDetector(generalCardDetectorInput);
      this.gcrCardRecognitionOutput = JSON.stringify(result.text);
      console.log(JSON.stringify(result));
    } catch (ex) {
      alert(ex)
    }
  }

}
