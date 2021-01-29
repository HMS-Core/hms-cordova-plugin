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
import { HMSScan } from '@ionic-native/hms-scan/ngx'
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

  public async getFile() {
    this.fileChooser.open()
      .then(uri => this.imageResult = uri)
      .catch(e => console.log(e));
  }

  public async requestPermissions() {
    try {
      await this.hmsScanKit.requestPermissions({
        permissionList: ["CAMERA", "WRITE_EXTERNAL_STORAGE"],
      });
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  public async checkPermissions() {
    var permissionListInput = {
      permissionList: ["CAMERA", "WRITE_EXTERNAL_STORAGE"],
    }
    try {
      const result = await this.hmsScanKit.checkPermissions(permissionListInput);
      alert("Camera Permission: " + result.CAMERA.hasPermission + "\nWrite Ext Strg Permission: " + result.WRITE_EXTERNAL_STORAGE.hasPermission);
    } catch (ex) {
      alert(JSON.stringify(ex))
    }
  }

  multiProcessorSynMode() {
    this.router.navigate(['multi-syn']);
  }
  multiProcessorAsynMode() {
    this.router.navigate(['multi-asyn']);
  }
  public async bitmapMode() {
    try {
      const bitmapModeInput = {
        scanAreaWidth: 240,
        scanAreaHeight: 240,
        scanTypes: [this.hmsScanKit.ScanTypes.ALL_SCAN_TYPE],
        enableScanArea: true,
        scanTips: "Place the code within the frame",
      };
      let result = await this.hmsScanKit.bitmapMode(bitmapModeInput);
      alert(JSON.stringify(result));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }

  public async defaultViewMode() {
    try {
      const defaultViewModeInput = {
        scanTypes: [this.hmsScanKit.ScanTypes.ALL_SCAN_TYPE]
      };
      let result = await this.hmsScanKit.defaultViewMode(defaultViewModeInput);
      alert(JSON.stringify(result));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  public async customViewMode() {
    try {
      const customViewModeInput = {
        scanTypes: [this.hmsScanKit.ScanTypes.ALL_SCAN_TYPE],
        scanAreaWidth: 240,
        scanAreaHeight: 240,
        enableFlushButton: true,
        enablePictureButton: false,
        scanAreaText: "Place the code within the frame",
      };
      let result = await this.hmsScanKit.customViewMode(customViewModeInput);
      alert(JSON.stringify(result));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }


  public async synModeWithImage() {
    try {
      const synModeWithImageInput = {
        filePath: this.imageResult,
        scanTypes: [this.hmsScanKit.ScanTypes.ALL_SCAN_TYPE]
      };
      let result = await this.hmsScanKit.synModeWithImage(synModeWithImageInput);
      alert(JSON.stringify(result));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }

  public async asynModeWithImage() {
    try {
      const asynModeWithImageInput = {
        filePath: this.imageResult,
        scanTypes: [this.hmsScanKit.ScanTypes.ALL_SCAN_TYPE]
      };
      let result = await this.hmsScanKit.asynModeWithImage(asynModeWithImageInput);
      alert(JSON.stringify(result));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }

  public async decodeWithBitmap() {
    try {
      const decodeWithBitmapInput = {
        filePath: this.imageResult,
        scanTypes: [this.hmsScanKit.ScanTypes.ALL_SCAN_TYPE]
      };
      let result = await this.hmsScanKit.decodeWithBitmap(decodeWithBitmapInput);
      alert(JSON.stringify(result));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  public async generateBarcode() {
    try {
      const generateBarcodeInput = {
        inputContent: "Huawei Mobile Services",
        barcodeFormat: this.hmsScanKit.ScanTypes.QRCODE_SCAN_TYPE,
        barcodeHeight: 800,
        barcodeWidth: 800,
        bitmapBackgroundColor: this.hmsScanKit.Colors.WHITE,
        bitmapColor: this.hmsScanKit.Colors.BLACK,
        bitmapMargin: 1,
      };
      let result = await this.hmsScanKit.generateBarcode(generateBarcodeInput);
      this.generateBarcodeImage = "data:image/jpeg;base64," + result;
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
}
