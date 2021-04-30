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
import * as ScanKit from './interfaces';
import { asyncExec } from './util'
export { Colors, ScanTypes, RectStyle, HMSPermission, ErrorCorrectionLevel } from './interfaces'
let HMSScanClass: string = 'HMSScan';
let HMSScanModule: string = 'HMSScanModule';

export function defaultViewMode(scanTypes: ScanKit.ScanTypes[]) {
    return asyncExec(HMSScanClass, HMSScanModule, ['defaultViewMode', scanTypes]);
};
export function analyzInAsyn(filePath: string, scanTypes: ScanKit.ScanTypes[]) {
    return asyncExec(HMSScanClass, HMSScanModule, ['analyzInAsyn', filePath, scanTypes]);
};
export function analyseFrame(filePath: string, scanTypes: ScanKit.ScanTypes[]) {
    return asyncExec(HMSScanClass, HMSScanModule, ['analyseFrame', filePath, scanTypes]);
};
export function decodeWithBitmap(filePath: string, scanTypes: ScanKit.ScanTypes[]) {
    return asyncExec(HMSScanClass, HMSScanModule, ['decodeWithBitmap', filePath, scanTypes]);
};
export function buildBitmap(params: ScanKit.BuildBitmapRequest) {
    return asyncExec(HMSScanClass, HMSScanModule, ['buildBitmap', params]);
};
export function compressBitmap(path: string) {
    return asyncExec(HMSScanClass, HMSScanModule, ['compressBitmap', path]);
};
export function detectForHmsDector(path: string, scanTypes: ScanKit.ScanTypes[]) {
    return asyncExec(HMSScanClass, HMSScanModule, ['detectForHmsDector', path, scanTypes]);
};
export function enableLogger() {
    return asyncExec(HMSScanClass, HMSScanModule, ['enableLogger']);
};
export function disableLogger() {
    return asyncExec(HMSScanClass, HMSScanModule, ['disableLogger']);
};
export function hasPermission(permission: ScanKit.HMSPermission) {
    return asyncExec(HMSScanClass, HMSScanModule, ['hasPermission', permission]);
};
export function requestPermission(permission: ScanKit.HMSPermission) {
    return asyncExec(HMSScanClass, HMSScanModule, ['requestPermission', permission]);
};
export function requestPermissions(permissions: ScanKit.HMSPermission[]) {
    return asyncExec(HMSScanClass, HMSScanModule, ['requestPermissions', permissions]);
};


