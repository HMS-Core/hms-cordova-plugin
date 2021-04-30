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
import { DetailSearchRequest, DetailSearchResponse, NearbySearchRequest, NearbySearchResponse, QueryAutocompleteRequest, QueryAutocompleteResponse, QuerySuggestionRequest, QuerySuggestionResponse, TextSearchRequest, TextSearchResponse, SearchFilter, Site } from './interfaces';
export * from './interfaces';
export declare function enableLogger(): Promise<void>;
export declare function disableLogger(): Promise<void>;
export declare function gotoSearchActivity(apiKey: string, searchFilter: SearchFilter, hint?: string): Promise<Site>;
export interface SearchService {
    detailSearch(detailSearchReq: DetailSearchRequest): Promise<DetailSearchResponse>;
    nearbySearch(nearbySearchReq: NearbySearchRequest): Promise<NearbySearchResponse>;
    queryAutocomplete(autocompleteReq: QueryAutocompleteRequest): Promise<QueryAutocompleteResponse>;
    querySuggestion(querySuggestionReq: QuerySuggestionRequest): Promise<QuerySuggestionResponse>;
    textSearch(textSearchReq: TextSearchRequest): Promise<TextSearchResponse>;
}
export declare class SearchServiceFactory {
    private constructor();
    static create(apiKey: string): Promise<SearchService>;
}
