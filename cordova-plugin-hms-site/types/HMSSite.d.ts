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
