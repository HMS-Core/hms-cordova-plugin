/*
Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
import { QuerySuggestionRequest, NearbySearchRequest, TextSearchRequest, DetailSearchRequest, WidgetSearchRequest, Sites, LocationType, config, HwLocationType, WidgetSearchResponse } from './Interfaces';
declare class HMSSiteAPI {
    LocationType: typeof LocationType;
    HwLocationType: typeof HwLocationType;
    initializeService(config: config): Promise<any>;
    textSearch(textSearchRequest: TextSearchRequest): Promise<Sites>;
    detailSearch(detailSearch: DetailSearchRequest): Promise<Sites>;
    querySuggestion(querySuggestionRequest: QuerySuggestionRequest): Promise<Sites>;
    nearbySearch(nearbySearchRequest: NearbySearchRequest): Promise<Sites>;
    widgetSearch(widgetSearchRequest: WidgetSearchRequest): Promise<WidgetSearchResponse>;
    enableLogger(): Promise<any>;
    disableLogger(): Promise<any>;
}
declare const _default: HMSSiteAPI;
export = _default;
