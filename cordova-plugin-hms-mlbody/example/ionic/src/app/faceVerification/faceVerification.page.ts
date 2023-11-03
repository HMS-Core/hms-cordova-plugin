/*
    Copyright 2023. Huawei Technologies Co., Ltd. All rights reserved.

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
import { Component, OnInit } from "@angular/core";
import { FileChooser } from "@ionic-native/file-chooser/ngx";
declare var HMSMLBody;
@Component({
  selector: "app-face",
  templateUrl: "./faceVerification.page.html",
  styleUrls: ["./faceVerification.page.scss"],
})
export class faceVerificationPage {
  filePathTemplate: string = "";
  filePathCompare: string = "";
  constructor(private fileChooser: FileChooser) {}

  public async getFileTemplate() {
    this.fileChooser
      .open()
      .then((uri) => (this.filePathTemplate = uri))
      .catch((e) => console.log(e));
  }

  public async getFileCompare() {
    this.fileChooser
      .open()
      .then((uri) => (this.filePathCompare = uri))
      .catch((e) => console.log(e));
  }

  public async faceVerificationPage() {
    var faceVerificationReq = {
      mlFaceVerificationAnalyserSetting: {
        MaxFaceDetcted: 3,
      },
      syncType: 1,
      filePath: this.filePathTemplate,
      filePath2: this.filePathCompare,
    };
    try {
      alert(
        JSON.stringify(
          await HMSMLBody.stillFaceVerificationAnalyser(
            faceVerificationReq
          )
        )
      );
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
}
