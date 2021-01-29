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
  selector: 'app-imgseg',
  templateUrl: './imgseg.page.html',
  styleUrls: ['./imgseg.page.scss'],
})
export class ImgsegPage {
  imageResult: string = "";
  resultSegmentation: string = "";
  imageSegmentationOriginal: string = "";
  constructor(private fileChooser: FileChooser) { }

  public async getFile() {
    this.fileChooser.open()
      .then(uri => this.imageResult = uri)
      .catch(e => console.log(e));
    this.imageSegmentationOriginal = this.imageResult;
  }

  public async getimgSegmentation() {
    var imgSegmentationInput = {
      imageSegmentationSetting: {
        isExact:false,
        analyserType: HMSImageServiceProvider.MLImageSegmentationSetting.BODY_SEG,
        scene: HMSImageServiceProvider.MLImageSegmentationScene.ALL,
        analyseMode: 1
      },
      filePath: this.imageResult,
  
    };
    try {
      const result = await HMSImageServiceProvider.imgSegmentation(imgSegmentationInput);
      alert(JSON.stringify(result));
      this.resultSegmentation = ("data:image/jpeg;base64," + result.bitmapForeground);
    } catch (ex) {
      alert(ex)
    }
  }

}
