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

import { asyncExec } from './utils';
import {
    DetailSearchRequest,
    DetailSearchResponse,
    NearbySearchRequest,
    NearbySearchResponse,
    QueryAutocompleteRequest,
    QueryAutocompleteResponse,
    QuerySuggestionRequest,
    QuerySuggestionResponse,
    TextSearchRequest,
    TextSearchResponse,
    SearchStatus,
    SearchFilter,
    Site
} from './interfaces';
export * from './interfaces';

const className: string = 'HMSSite';
const moduleName: string = 'HMSSiteModule';

export function enableLogger(): Promise<void> {
    return asyncExec(className, moduleName, ['enableLogger']);
}
export function disableLogger(): Promise<void> {
    return asyncExec(className, moduleName, ['disableLogger']);
}
export function gotoSearchActivity(apiKey: string, searchFilter: SearchFilter, hint?: string): Promise<Site> {
    return asyncExec(className, moduleName, ['gotoSearchActivity', apiKey, searchFilter, hint]);
}

export interface SearchService {
    detailSearch(detailSearchReq: DetailSearchRequest): Promise<DetailSearchResponse>;
    nearbySearch(nearbySearchReq: NearbySearchRequest): Promise<NearbySearchResponse>;
    queryAutocomplete(autocompleteReq: QueryAutocompleteRequest): Promise<QueryAutocompleteResponse>;
    querySuggestion(querySuggestionReq: QuerySuggestionRequest): Promise<QuerySuggestionResponse>;
    textSearch(textSearchReq: TextSearchRequest): Promise<TextSearchResponse>;
}

export class SearchServiceFactory {
    private constructor() { }
    static async create(apiKey: string): Promise<SearchService> {
        return asyncExec(className, moduleName, ['init', apiKey])
            .then(val => new SearchServiceImpl())
            .catch(err => { throw new ApiKeyException('api key is wrong.') });
    }
}

class ApiKeyException extends Error { }

class SearchServiceImpl implements SearchService {

    detailSearch(detailSearchReq: DetailSearchRequest): Promise<DetailSearchResponse>{
        return this.exec(['detailSearch', detailSearchReq])
    }
    nearbySearch(nearbySearchReq: NearbySearchRequest): Promise<NearbySearchResponse> {
        return this.exec(['nearbySearch', nearbySearchReq]);
    }
    queryAutocomplete(autocompleteReq: QueryAutocompleteRequest): Promise<QueryAutocompleteResponse> {
        return this.exec(['queryAutocomplete', autocompleteReq]);
    }
    querySuggestion(querySuggestionReq: QuerySuggestionRequest): Promise<QuerySuggestionResponse> {
        return this.exec(['querySuggestion', querySuggestionReq]);
    }
    textSearch(textSearchReq: TextSearchRequest): Promise<TextSearchResponse> {
        return this.exec(['textSearch', textSearchReq]);
    }

    private exec(args: any): Promise<any> {
        return asyncExec(className, moduleName, args);
    }
}
