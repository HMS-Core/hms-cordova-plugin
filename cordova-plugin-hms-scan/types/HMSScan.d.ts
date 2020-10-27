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

import * as ScanKit from './Interfaces';

declare class HMSScanAPI {
    Colors: typeof ScanKit.Colors;
    ScanTypes: typeof ScanKit.ScanTypes;
    RectStyle: typeof ScanKit.RectStyle;
    requestPermissions(params: ScanKit.RequestPermissionInput): Promise<any>;
    checkPermissions(params: ScanKit.CheckPermissionInput): Promise<any>;
    defaultViewMode(params: ScanKit.DefaultViewModeRequest): Promise<any>;
    asynModeWithImage(params: ScanKit.AsynModeWithImageRequest): Promise<any>;
    synModeWithImage(params: ScanKit.SynModeWithImageRequest): Promise<any>;
    customViewMode(params: ScanKit.CustomViewModeRequest): Promise<any>;
    decodeWithBitmap(params: ScanKit.DecodeWithBitmapRequest): Promise<any>;
    generateBarcode(params: ScanKit.GenerateBarcodeRequest): Promise<any>;
    bitmapMode(params: ScanKit.BitmapModeRequest): Promise<any>;
    enableLogger(): Promise<any>;
    disableLogger(): Promise<any>;
    multiProcessorSynMode(params: ScanKit.MultiProcessorSynModeRequest, success: any, error: any): void;
    multiProcessorAsynMode(params: ScanKit.MultiProcessorAsynModeRequest, success: any, error: any): void;
}
declare const _default: HMSScanAPI;
export = _default;
