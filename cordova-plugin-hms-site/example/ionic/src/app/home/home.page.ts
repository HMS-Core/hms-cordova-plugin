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
import { Component } from '@angular/core';
import {
  HMSSite, SearchService, SearchServiceFactory,
  TextSearchRequest, TextSearchResponse,
  NearbySearchRequest, NearbySearchResponse,
  DetailSearchRequest, DetailSearchResponse,
  QueryAutocompleteRequest, QueryAutocompleteResponse,
  QuerySuggestionRequest, QuerySuggestionResponse,
  SearchFilter, LocationType, HwLocationType
} from '@hmscore/ionic-native-hms-site/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private searchService: SearchService = null;
  private readonly apiKey = "<api_key>";

  constructor(private site: HMSSite) {
    SearchServiceFactory.create(this.apiKey)
      .then(service => this.searchService = service)
      .catch(err => alert('An error occurred.'));
  }

  async textSearch() {
    const textSearchReq: TextSearchRequest = {
      children: false,
      query: 'Paris',
      location: {
        lat: 48.89,
        lng: 2.33,
      },
      radius: 1000,
      poiType: LocationType.ADDRESS,
      hwPoiType: HwLocationType.ADDRESS,
      countryCode: "FR",
      language: "fr",
      pageIndex: 1,
      pageSize: 5
    };
    const response: TextSearchResponse = await this.searchService.textSearch(textSearchReq);
    this.log(response);
  }
  async nearbySearch() {
    const nearbySearchReq: NearbySearchRequest = {
      query: "Paris",
      location: {
        lat: 48.893478,
        lng: 2.334595,
      },
      radius: 1000,
      poiType: LocationType.ADDRESS,
      hwPoiType: HwLocationType.ADDRESS,
      language: "fr",
      pageIndex: 1,
      pageSize: 5
    };
    const response: NearbySearchResponse = await this.searchService.nearbySearch(nearbySearchReq);
    this.log(response);
  }
  async detailSearch() {
    const detailSearchReq: DetailSearchRequest = {
      siteId: '16DA89C6962A36CB1752A343ED48B78A',
      language: 'fr'
    };
    const response: DetailSearchResponse = await this.searchService.detailSearch(detailSearchReq);
    this.log(response);
  }
  async queryAutocomplete() {
    const queryAutocompleteReq: QueryAutocompleteRequest = {
      query: 'Paris',
      location: {
        lat: 48.89,
        lng: 2.33
      },
      radius: 1000,
      children: false
    };
    const response: QueryAutocompleteResponse = await this.searchService.queryAutocomplete(queryAutocompleteReq);
    this.log(response);
  }
  async querySuggestion() {
    const querySuggestionReq: QuerySuggestionRequest = {
      query: "Paris",
      location: {
        lat: 48.893478,
        lng: 2.334595,
      },
      poiTypes: [LocationType.ADDRESS, LocationType.GEOCODE],
      radius: 1000,
      countryCode: "FR",
      language: "fr",
    };
    const response: QuerySuggestionResponse = await this.searchService.querySuggestion(querySuggestionReq);
    this.log(response);
  }
  async gotoActivity() {
    const searchFilter: SearchFilter = {
      query: 'Paris',
      location: {
        lat: 48.89,
        lng: 2.33
      },
      bounds: {
        northeast: {
          lat: 48.85,
          lng: 2.33
        },
        southwest: {
          lat: 48.85,
          lng: 2.34
        },
      },
      radius: 1000,
      poiType: [LocationType.ADDRESS, LocationType.GEOCODE],
      countryCode: 'FR',
      language: 'fr'
    };
    const hint = 'Search place';
    const result = await this.site.gotoSearchActivity(this.apiKey, searchFilter, hint);
    this.log(result);
  }

  private log(response: any): void {
    const logDiv = document.getElementById('logger');
    response = JSON.parse(JSON.stringify(response).replace('NaN', '0'));
    console.log(response);
    logDiv.innerHTML = JSON.stringify(JSON.parse(response), undefined, 2);
  }
}
