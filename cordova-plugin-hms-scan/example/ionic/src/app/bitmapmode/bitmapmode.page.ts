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
import { Component, OnInit } from '@angular/core';
import { MultiProcessor, ScanTypes } from '@ionic-native/hms-scan/ngx';
@Component({
  selector: 'app-bitmapmode',
  templateUrl: './bitmapmode.page.html',
  styleUrls: ['./bitmapmode.page.scss'],
})
export class BitmapmodePage implements OnInit {

  constructor(private bitmapViewMode: MultiProcessor) { }

  ngOnInit() {
  }

  public async bitmapMode() {
    const bitmapModeRequest = {
      scanTypes: [ScanTypes.ALL_SCAN_TYPE],
      scanFrameSize: 200,
      enableScanAreaBox: true,
    }

    this.bitmapViewMode.on("scanResultClickListener", (value) => {
      alert(JSON.stringify(value));
    });
    await this.bitmapViewMode.bitmapMode("scene", bitmapModeRequest);
  };
  public async stopViewService() {
    await this.bitmapViewMode.stopViewService();
  };

}
