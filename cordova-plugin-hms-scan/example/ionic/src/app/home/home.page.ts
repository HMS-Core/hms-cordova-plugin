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

import { Component } from '@angular/core';
import { HMSScan, ScanTypes, Colors, ErrorCorrectionLevel, HMSPermission } from '@hmscore/ionic-native-hms-scan/ngx'
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imageResult: string = "";
  generateBarcodeImage: string = "";
  constructor(private hmsScanKit: HMSScan, private router: Router, private fileChooser: FileChooser) { }

  customViewPage() {
    this.router.navigate(['customview']);
  }
  multiProcessorPage() {
    this.router.navigate(['multiprocessor']);
  }
  bitmapMode() {
    this.router.navigate(['bitmapmode']);
  }

  public async getFile() {
    this.fileChooser.open()
      .then(uri => this.imageResult = uri)
      .catch(e => console.log(e));
  }

  public async hasPermission() {
    const permission = HMSPermission.CAMERA;
    this.hmsScanKit.hasPermission(permission)
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)))
  }

  public async requestPermission() {
    const permission = HMSPermission.CAMERA;
    this.hmsScanKit.requestPermission(permission)
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }

  public async requestPermissions() {
    this.hmsScanKit.requestPermissions([HMSPermission.CAMERA, HMSPermission.READ_EXTERNAL_STORAGE])
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }

  public async defaultViewMode() {
    const scanTypes = [ScanTypes.ALL_SCAN_TYPE];
    this.hmsScanKit.defaultViewMode(scanTypes)
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }

  public async analyseFrame() {
    const filePath = this.imageResult;
    const scanTypes = [ScanTypes.ALL_SCAN_TYPE];
    this.hmsScanKit.analyseFrame(filePath, scanTypes)
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }

  public async analyzInAsyn() {
    const filePath = this.imageResult;
    const scanTypes = [ScanTypes.ALL_SCAN_TYPE];
    this.hmsScanKit.analyzInAsyn(filePath, scanTypes)
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }

  public async decodeWithBitmap() {
    const filePath = this.imageResult;
    const scanTypes = [ScanTypes.ALL_SCAN_TYPE];
    this.hmsScanKit.decodeWithBitmap(filePath, scanTypes)
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }

  public async buildBitmap() {
    const buildBitmapRequest = {
      inputContent: "Huawei",
      barcodeFormat: ScanTypes.QRCODE_SCAN_TYPE,
      barcodeHeight: 400,
      barcodeWidth: 400,
      hmsBuildBitmapOptions: {
        bitmapMargin: 1,
        bitmapColor: Colors.BLACK,
        bitmapBackgroundColor: Colors.WHITE,
        qrErrorCorrectionLevel: ErrorCorrectionLevel.M,
        qrLogoBitmap: this.imageResult
      }
    }
    this.hmsScanKit.buildBitmap(buildBitmapRequest)
      .then((res) => this.generateBarcodeImage = "data:image/jpeg;base64," + res)
      .catch((err) => alert(JSON.stringify(err)));
  }

  public async detectForHmsDector() {
    const filePath = this.imageResult;
    const scanTypes = [ScanTypes.ALL_SCAN_TYPE];
    this.hmsScanKit.detectForHmsDector(filePath, scanTypes)
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }
}
