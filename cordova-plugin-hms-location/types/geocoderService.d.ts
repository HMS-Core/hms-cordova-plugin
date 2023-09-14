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
import { GeocoderService, GetFromLocationNameRequest, GetFromLocationRequest, HWLocation } from "./interfaces";
export declare class GeocoderServiceImpl implements GeocoderService {
    language: string;
    country?: string;
    constructor(language: string, country?: string);
    getFromLocation(getFromLocationRequest: GetFromLocationRequest): Promise<HWLocation[]>;
    getFromLocationName(getFromLocationNameRequest: GetFromLocationNameRequest): Promise<HWLocation[]>;
    run(funcName: string, args?: any[]): Promise<any>;
}
