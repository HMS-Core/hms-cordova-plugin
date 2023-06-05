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
import { MultiProcessor, ScanTypes, Colors, RectStyle } from '@hmscore/ionic-native-hms-scan/ngx';
@Component({
  selector: 'app-multiprocessor',
  templateUrl: './multiprocessor.page.html',
  styleUrls: ['./multiprocessor.page.scss'],
})
export class MultiprocessorPage implements OnInit {

  constructor(private multiProcessor: MultiProcessor) { }

  ngOnInit() {
  }
  public async multiProcessorSynMode() {
        const multiProcessorSynModeRequest = {
            scanTypes: [ScanTypes.ALL_SCAN_TYPE],
            scanFrameSize: 200,
            enableScanAreaBox: true,
            enableDrawScanResult: true,
            viewAttributes: {
                    textColor: Colors.WHITE,
                    textSize: 30,
                    strokeWidth: 10,
                    rectColor: Colors.BLACK,
                    rectStyle: RectStyle.STROKE,
            }
    };

    this.multiProcessor.on("scanResultClickListener", (value) => {
            console.log(JSON.stringify(value));
    });
    await this.multiProcessor.multiProcessorSynMode("scene", multiProcessorSynModeRequest);
};
public async multiProcessorAsynMode() {
        const multiProcessorAsynModeRequest = {
            scanTypes: [ScanTypes.ALL_SCAN_TYPE],
            scanFrameSize: 200,
            enableScanAreaBox: true,
            enableDrawScanResult: true,
            viewAttributes: {
                    textColor: Colors.WHITE,
                    textSize: 20,
                    strokeWidth: 10,
                    rectColor: Colors.BLACK,
                    rectStyle: RectStyle.FILL_AND_STROKE,
            }
    }

    this.multiProcessor.on("scanResultClickListener", (value) => {
            console.log(JSON.stringify(value));
    });
    await this.multiProcessor.multiProcessorAsynMode("scene", multiProcessorAsynModeRequest);
};
public async stopViewService() {
    await this.multiProcessor.stopViewService();
};
}
