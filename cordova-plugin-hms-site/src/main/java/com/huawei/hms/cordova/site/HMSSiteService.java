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

import android.app.Activity;
import android.util.Log;

import com.huawei.hms.site.api.SearchResultListener;
import com.huawei.hms.site.api.SearchService;
import com.huawei.hms.site.api.SearchServiceFactory;
import com.huawei.hms.site.api.model.DetailSearchRequest;
import com.huawei.hms.site.api.model.DetailSearchResponse;
import com.huawei.hms.site.api.model.LocationType;
import com.huawei.hms.site.api.model.NearbySearchRequest;
import com.huawei.hms.site.api.model.NearbySearchResponse;
import com.huawei.hms.site.api.model.QuerySuggestionRequest;
import com.huawei.hms.site.api.model.QuerySuggestionResponse;
import com.huawei.hms.site.api.model.SearchStatus;
import com.huawei.hms.site.api.model.TextSearchRequest;
import com.huawei.hms.site.api.model.TextSearchResponse;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

public class HMSSiteService {

    private String TAG = HMSSiteService.class.getSimpleName();

    private SearchService searchService;


    public void initializeService(JSONObject params, Activity activity, CallbackContext callbackContext) {
        String apiKey = params.optString("apiKey");

        if (apiKey == null || apiKey.isEmpty()) {
            callbackContext.error("Invalid API key.");
            return;
        }

        String encodedKey = null;

        try {
            encodedKey = URLEncoder.encode(apiKey, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            Log.e(TAG, "API Key encoding error.");
            callbackContext.error("API Key encoding error.");
            return;
        }

        searchService = SearchServiceFactory.create(activity, encodedKey);
        callbackContext.success();
    }

    public void textSearch(JSONObject params, CallbackContext callbackContext) throws JSONException {

        if (searchService == null) {
            Log.e(TAG, "SearchService is not initialized.");
            callbackContext.error("SearchService is not initialized.");
            return;
        }

        if (!params.has("query") || params.isNull("query")) {
            Log.e(TAG, "Illegal argument. query field is mandatory and it must not be null.");
            callbackContext.error("Illegal argument. query field is mandatory and it must not be null.");
            return;
        }

        TextSearchRequest request = HMSSiteUtils.toObject(params, TextSearchRequest.class);
        searchService.textSearch(request, new SearchResultListener<TextSearchResponse>() {
            @Override
            public void onSearchResult(TextSearchResponse response) {
                handleResult(response, true, callbackContext);
            }

            @Override
            public void onSearchError(SearchStatus searchStatus) {
                handleResult(searchStatus, false, callbackContext);
            }
        });
    }

    public void detailSearch(JSONObject params, CallbackContext callbackContext) throws JSONException {

        if (searchService == null) {
            Log.e(TAG, "SearchService is not initialized.");
            callbackContext.error("SearchService is not initialized.");
            return;
        }

        if (!params.has("siteId") || params.isNull("siteId")) {
            Log.e(TAG, "Illegal argument. siteId field is mandatory and it must not be null.");
            callbackContext.error("Illegal argument. siteId field is mandatory and it must not be null.");
            return;
        }

        DetailSearchRequest request = HMSSiteUtils.toObject(params, DetailSearchRequest.class);
        searchService.detailSearch(request, new SearchResultListener<DetailSearchResponse>() {
            @Override
            public void onSearchResult(DetailSearchResponse response) {
                handleResult(response, true, callbackContext);
            }

            @Override
            public void onSearchError(SearchStatus searchStatus) {
                handleResult(searchStatus, false, callbackContext);
            }
        });
    }

    public void querySuggestion(JSONObject params, CallbackContext callbackContext) throws JSONException {

        if (searchService == null) {
            Log.e(TAG, "SearchService is not initialized.");
            callbackContext.error("SearchService is not initialized.");
            return;
        }

        if (!params.has("query") || params.isNull("query")) {
            Log.e(TAG, "Illegal argument. query field is mandatory and it must not be null.");
            callbackContext.error("Illegal argument. query field is mandatory and it must not be null.");
            return;
        }

        QuerySuggestionRequest request = HMSSiteUtils.toObject(params, QuerySuggestionRequest.class);
        searchService.querySuggestion(request, new SearchResultListener<QuerySuggestionResponse>() {
            @Override
            public void onSearchResult(QuerySuggestionResponse response) {
                handleResult(response, true, callbackContext);
            }

            @Override
            public void onSearchError(SearchStatus searchStatus) {
                handleResult(searchStatus, false, callbackContext);
            }
        });
    }

    public void nearbySearch(JSONObject params, CallbackContext callbackContext) throws JSONException {

        if (searchService == null) {
            Log.e(TAG, "SearchService is not initialized.");
            callbackContext.error("SearchService is not initialized.");
            return;
        }

        if (!params.has("location") || params.isNull("location")) {
            Log.e(TAG, "Illegal argument. location field is mandatory and it must not be null.");
            callbackContext.error("Illegal argument. location field is mandatory and it must not be null.");
            return;
        }

        NearbySearchRequest request = HMSSiteUtils.toObject(params, NearbySearchRequest.class);
        searchService.nearbySearch(request, new SearchResultListener<NearbySearchResponse>() {
            @Override
            public void onSearchResult(NearbySearchResponse response) {
                handleResult(response, true, callbackContext);
            }

            @Override
            public void onSearchError(SearchStatus searchStatus) {
                handleResult(searchStatus, false, callbackContext);
            }
        });
    }

    public void getLocationType(JSONObject params, CallbackContext callbackContext) throws JSONException {
        JSONObject locationConstants = new JSONObject();
        LocationType[] locationTypes = LocationType.values();
        for (LocationType type : locationTypes) {
            locationConstants.put(type.name(), type.value());
        }
        callbackContext.success(locationConstants);
    }


    private void handleResult(Object result, boolean isSuccess, CallbackContext callbackContext) {
        try {
            String jsonResult = HMSSiteUtils.toJSON(result);

            if (isSuccess) {
                callbackContext.success(new JSONObject(jsonResult));
            } else {
                callbackContext.error(new JSONObject(jsonResult));
            }

        } catch (JSONException ex) {
            Log.e(TAG, "Error : " + ex);
            callbackContext.error(ex.getMessage());
        }
    }

}
