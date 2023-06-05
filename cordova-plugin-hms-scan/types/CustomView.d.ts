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
import * as ScanKit from './interfaces';
export { Colors, ScanTypes, RectStyle } from './interfaces';
export declare function customViewMode(divId: string, userProps: ScanKit.CustomViewModeRequest): Promise<any>;
export declare function on(eventName: string, call: (value: any) => void): void;
export declare function openFlushLight(): Promise<any>;
export declare function pauseContinuouslyScan(): Promise<any>;
export declare function resumeContinuouslyScan(): Promise<any>;
export declare function stopViewService(): Promise<any>;
