/*
    Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.

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
import { asyncExec } from './utils';
import { GeocoderService, GetFromLocationNameRequest, GetFromLocationRequest, HWLocation } from "./interfaces";

export class GeocoderServiceImpl implements GeocoderService {
    language: string;
    country?: string;
    
    public constructor(language: string, country?: string) {
        this.language = language;
        this.country = country;
    }

    getFromLocation(getFromLocationRequest: GetFromLocationRequest): Promise<HWLocation[]> {
        return this.run('getFromLocation', [getFromLocationRequest.latitude, getFromLocationRequest.longitude, getFromLocationRequest.maxResults, this.language, this.country]);
    }

    getFromLocationName(getFromLocationNameRequest: GetFromLocationNameRequest): Promise<HWLocation[]> {
        return this.run('getFromLocationName', [getFromLocationNameRequest.locationName, getFromLocationNameRequest.maxResults, getFromLocationNameRequest.corner, this.language, this.country]);
    }

    run(funcName: string, args: any[] = []) {
        args.unshift(funcName);
        return asyncExec('HMSLocation', 'GeocoderService', args);
    }
}