/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.

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
import { CustomView, ScanTypes } from '@hmscore/ionic-native-hms-scan/ngx'
@Component({
  selector: 'app-customview',
  templateUrl: './customview.page.html',
  styleUrls: ['./customview.page.scss'],
})
export class CustomviewPage implements OnInit {

  constructor(private customView: CustomView) { }

  ngOnInit() {
  }
  public async customViewMode() {
    const customScanRequest = {
      scanTypes: [ScanTypes.ALL_SCAN_TYPE],
      scanFrameSize: 200,
      enableReturnBitmap: false,
      isContinuouslyScan: false,
      enableScanAreaBox: true,
    }

    this.customView.on("scanResultClickListener", (value) => {
      console.log(JSON.stringify(value));
    });
    await this.customView.customViewMode("scene", customScanRequest);

  };
  public async stopViewService() {
    await this.customView.stopViewService();
  };
  public async openFlushLight() {
    await this.customView.openFlushLight();
  };
  public async pauseContinuouslyScan() {
    await this.customView.pauseContinuouslyScan();
  };
  public async resumeContinuouslyScan() {
    await this.customView.resumeContinuouslyScan();
  };

}
