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

import { Component, OnInit } from "@angular/core";
import { FileChooser } from "@ionic-native/file-chooser/ngx";
import { HMSMLKit, downloadModelReq } from "@hmscore/ionic-native-hms-ml/ngx";
@Component({
    selector: "app-custommodel",
    templateUrl: "./custommodel.page.html",
    styleUrls: ["./custommodel.page.scss"]
})
export class CustommodelPage {
    imageResult: string = "";
    resultCustomModel: string = "";
    customModelOriginal: string = "";
    constructor(private fileChooser: FileChooser, private HMSMLKit: HMSMLKit) {}

    public async getFile() {
        this.fileChooser
            .open()
            .then((uri) => (this.imageResult = uri))
            .catch((e) => console.log(e));
        this.customModelOriginal = this.imageResult;
    }

    public async getCustomModel() {
        var customModelInput = {
            detectType: 0,
            filePath: this.imageResult
            /**
             *modelFullName:"",
             *modelName:"",
             *labelFileName:"",
             *bitmapHeight:"",
             *bitmapWidth:"",
             *outPutSize:"",
             */
        };
        try {
            const result = await this.HMSMLKit.customModelAnalyser(customModelInput);
            alert(JSON.stringify(result));
        } catch (ex) {
            alert(ex);
        }
    }
    public async downloadModel() {
        var downloadModelInput: downloadModelReq = {
            detectType: 1,
            filePath: this.imageResult,
            downloadStrategySetting: {
                isChargingNeed: true,
                isWifiNeed: true,
                isDeviceIdleNeed: true,
                setRegion: this.HMSMLKit.DownloadStrategyCustom.REGION_DR_CHINA
            }
        };
        try {
            const result = await this.HMSMLKit.customModelAnalyser(downloadModelInput);
            alert(JSON.stringify(result));
        } catch (ex) {
            alert(ex);
        }
    }
}
