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
import { HMSScan, ScanTypes, Colors, RectStyle } from '@hmscore/ionic-native-hms-scan/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
@Component({
    selector: 'app-decode',
    templateUrl: './decode.page.html',
    styleUrls: ['./decode.page.scss'],
})
export class DecodePage implements OnInit {

    imageData: string = "";

    constructor(
        private fileChooser: FileChooser,
        private hmsScan: HMSScan,
    ) { }

    ngOnInit() { }

    public async getFile() {
        this.fileChooser.open()
            .then(uri => this.imageData = uri)
            .catch(e => console.log(e));
    }

    public async decodeWithImage() {

        const scanFrameOptions = {
            scanTypes: [ScanTypes.ALL_SCAN_TYPE],
            multiMode: true,
            parseResult: true,
            photoMode: true,
        }
        const filePath = this.imageData;
        this.hmsScan.decode(scanFrameOptions, filePath)
            .then((res) => { alert(JSON.stringify(res)) })
            .catch((err) => alert(JSON.stringify(err)));
    }

    public async decodeWithCamera() {
        const scanFrameOptions = {
            scanTypes: [ScanTypes.ALL_SCAN_TYPE],
            multiMode: true,
            parseResult: true,
            photoMode: false,
        }
        const decodeModeRequest = {
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
        }
        this.hmsScan.decodeOn("scanResultClickListener", (value) => {
            alert(JSON.stringify(value));
        });
        await this.hmsScan.decode(scanFrameOptions, "", "scene", decodeModeRequest);
    }

    public async stopViewService() {
        await this.hmsScan.decodeStopViewService();
    }
};