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
import { asyncExec } from './utils'
import { QuerySuggestionRequest, NearbySearchRequest, TextSearchRequest, DetailSearchRequest, WidgetSearchRequest, Sites, LocationType, config, HwLocationType, WidgetSearchResponse } from './Interfaces';

let HMSSite: string = "cordova-plugin-hms-site";

class HMSSiteAPI {

  LocationType = LocationType;
  HwLocationType = HwLocationType;

  initializeService(config: config): Promise<any> {
    return run("ACTION_INITIALIZE_SERVICE", config)
  }

  textSearch(textSearchRequest: TextSearchRequest): Promise<Sites> {
    return run("ACTION_TEXT_SEARCH", textSearchRequest);
  }

  detailSearch(detailSearch: DetailSearchRequest): Promise<Sites> {
    return run("ACTION_DETAILED_SEARCH", detailSearch)
  }

  querySuggestion(querySuggestionRequest: QuerySuggestionRequest): Promise<Sites> {
    return run("ACTION_QUERY_SUGGESTION", querySuggestionRequest)
  }

  nearbySearch(nearbySearchRequest: NearbySearchRequest): Promise<Sites> {
    return run("ACTION_NEARBY_SEARCH", nearbySearchRequest)
  }
  widgetSearch(widgetSearchRequest: WidgetSearchRequest): Promise<WidgetSearchResponse> {
    return run("ACTION_WIDGET_SEARCH", widgetSearchRequest)
  }
  enableLogger() {
    return run("enableLogger")
  }
  disableLogger() {
    return run("disableLogger")
  }
}

function run(funcName: string, args?: object | string): Promise<any> {
  return asyncExec(HMSSite, funcName, [args])
}

export = new HMSSiteAPI()


