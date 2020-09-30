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

package com.huawei.hms.cordova.site;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class HMSSitePlugin extends CordovaPlugin {

    private HMSSiteService siteService = new HMSSiteService();

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        JSONObject params = args.optJSONObject(0);

        if (Actions.ACTION_INITIALIZE_SERVICE.name().equals(action)) {
            siteService.initializeService(params, this.cordova.getActivity(), callbackContext, cordova);
            return true;
        }

        if (Actions.ACTION_TEXT_SEARCH.name().equals(action)) {
            siteService.textSearch(params, callbackContext);
            return true;
        }

        if (Actions.ACTION_DETAILED_SEARCH.name().equals(action)) {
            siteService.detailSearch(params, callbackContext);
            return true;
        }

        if (Actions.ACTION_QUERY_SUGGESTION.name().equals(action)) {
            siteService.querySuggestion(params, callbackContext);
            return true;
        }

        if (Actions.ACTION_NEARBY_SEARCH.name().equals(action)) {
            siteService.nearbySearch(params, callbackContext);
            return true;
        }
        if (Actions.ACTION_WIDGET_SEARCH.name().equals(action)) {
            siteService.widgetSearch(params, callbackContext, cordova);
            return true;
        }

        if ("enableLogger".equals(action)) {
            siteService.enableLogger(callbackContext);
        }

        if ("disableLogger".equals(action)) {
            siteService.disableLogger(callbackContext);
        }

        return false;
    }

    enum Actions {
        ACTION_INITIALIZE_SERVICE, ACTION_TEXT_SEARCH, ACTION_DETAILED_SEARCH,
        ACTION_QUERY_SUGGESTION, ACTION_NEARBY_SEARCH, ACTION_WIDGET_SEARCH;
    }
}

