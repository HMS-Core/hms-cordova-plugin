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
declare var HMSScan;
@Component({
  selector: 'app-multi-syn',
  templateUrl: './multi-syn.page.html',
  styleUrls: ['./multi-syn.page.scss'],
})
export class MultiSynPage{

  constructor() { }

 
  public multiProcessorSynMode() {
    const multiProcessorSynModeInput = {
      scanAreaWidth: 240,
      scanAreaHeight: 240,
      enablePhotoButton: true,
      enableScanArea: true,
      textColor: HMSScan.Colors.WHITE,
      textSize: 30,
      strokeWidth: 10,
      rectColor: HMSScan.Colors.BLACK,
      scanTypes: [HMSScan.ScanTypes.ALL_SCAN_TYPE],
      rectStyle: 0,
  };
  HMSScan.multiProcessorSynMode(
      multiProcessorSynModeInput,
      function (res) {
          console.log(JSON.stringify(res));
      }, function (err) {
          console.log(JSON.stringify(err));
      }
  );
  }

}
