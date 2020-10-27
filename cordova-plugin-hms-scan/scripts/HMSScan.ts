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

import { exec } from "cordova";
import * as ScanKit from './Interfaces';

let HMSScan: string = "HMSScan";

class HMSScanAPI {
    Colors = ScanKit.Colors;
    ScanTypes = ScanKit.ScanTypes;
    RectStyle = ScanKit.RectStyle;

    requestPermissions(params: ScanKit.RequestPermissionInput) {
        return run("requestPermissions", params);
    };
    checkPermissions(params: ScanKit.CheckPermissionInput) {
        return run("checkPermissions", params);
    };
    defaultViewMode(params: ScanKit.DefaultViewModeRequest) {
        return run("defaultViewMode", params);
    };
    asynModeWithImage(params: ScanKit.AsynModeWithImageRequest) {
        return run("asynModeWithImage", params);
    };
    synModeWithImage(params: ScanKit.SynModeWithImageRequest) {
        return run("synModeWithImage", params);
    };
    customViewMode(params: ScanKit.CustomViewModeRequest) {
        return run("customViewMode", params);
    };
    decodeWithBitmap(params: ScanKit.DecodeWithBitmapRequest) {
        return run("decodeWithBitmap", params);
    };
    generateBarcode(params: ScanKit.GenerateBarcodeRequest) {
        return run("generateBarcode", params);
    };
    bitmapMode(params: ScanKit.BitmapModeRequest) {
        return run("bitmapMode", params);
    };
    enableLogger() {
        return run("enableLogger");
    };
    disableLogger() {
        return run("disableLogger");
    };
    multiProcessorSynMode(params: ScanKit.MultiProcessorSynModeRequest, success: any, error: any) {
        exec(success, error, "HMSScan", "multiProcessorSynMode", [params]);
    };
    multiProcessorAsynMode(params: ScanKit.MultiProcessorAsynModeRequest, success: any, error: any) {
        exec(success, error, "HMSScan", "multiProcessorAsynMode", [params]);
    };
}

function run(funcName: string, args?: object | string): Promise<any> {
    return asyncExec(HMSScan, funcName, [args])
}

function asyncExec(clasName: string, funcName: string, args: any[] = []): Promise<any> {
    return new Promise<string>((resolve, reject) => {
        exec(resolve, reject, clasName, funcName, args);
    })
}

export = new HMSScanAPI()
