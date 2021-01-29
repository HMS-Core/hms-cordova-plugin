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
declare var HMSFaceBodyProvider;
@Component({
  selector: 'app-face',
  templateUrl: './face.page.html',
  styleUrls: ['./face.page.scss'],
})
export class FacePage {
  filePath: string = "";

  constructor(private fileChooser: FileChooser) { }

  public async getFile() {
    this.fileChooser.open()
      .then(uri => this.filePath = uri)
      .catch(e => console.log(e));
  }

  public async stillFaceAnalyser() {
    var faceAnalyserInput = {
      mlFaceAnalyserSetting: {
        featureType: HMSFaceBodyProvider.MLFaceSetting.TYPE_FEATURES,
        keyPointType: HMSFaceBodyProvider.MLFaceSetting.TYPE_KEYPOINTS,
        maxSizeFaceOnly: false,
        minFaceProportion: 1.0,
        performanceType: HMSFaceBodyProvider.MLFaceSetting.TYPE_PRECISION,
        shapeType: HMSFaceBodyProvider.MLFaceSetting.TYPE_SHAPES,
        tracingAllowed: false,
      },
      analyseMode: 0,
      filePath: this.filePath,
    };
    try {
      alert(JSON.stringify(await HMSFaceBodyProvider.stillFaceAnalyser(faceAnalyserInput)));
    } catch (ex) {
      alert(JSON.stringify(ex))
    }
  }
  public async stilFaceAnalyserInfo() {
  
    try {
      alert(JSON.stringify(await HMSFaceBodyProvider.stilFaceAnalyserInfo()));
    } catch (ex) {
      alert(JSON.stringify(ex))
    }
  }
  public async stopStillFaceAnalyser() {
  
    try {
      alert(JSON.stringify(await HMSFaceBodyProvider.stopStillFaceAnalyser()));
    } catch (ex) {
      alert(JSON.stringify(ex))
    }
  }

}
