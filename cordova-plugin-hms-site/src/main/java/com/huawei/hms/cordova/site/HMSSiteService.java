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
import android.content.Intent;
import android.util.Log;

import com.huawei.hms.site.api.SearchResultListener;
import com.huawei.hms.site.api.SearchService;
import com.huawei.hms.site.api.SearchServiceFactory;
import com.huawei.hms.site.api.model.Coordinate;
import com.huawei.hms.site.api.model.CoordinateBounds;
import com.huawei.hms.site.api.model.DetailSearchRequest;
import com.huawei.hms.site.api.model.DetailSearchResponse;
import com.huawei.hms.site.api.model.NearbySearchRequest;
import com.huawei.hms.site.api.model.NearbySearchResponse;
import com.huawei.hms.site.api.model.QuerySuggestionRequest;
import com.huawei.hms.site.api.model.QuerySuggestionResponse;
import com.huawei.hms.site.api.model.SearchStatus;
import com.huawei.hms.site.api.model.Site;
import com.huawei.hms.site.api.model.TextSearchRequest;
import com.huawei.hms.site.api.model.TextSearchResponse;
import com.huawei.hms.site.widget.SearchFilter;
import com.huawei.hms.site.widget.SearchIntent;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

public class HMSSiteService extends CordovaPlugin {

    private static String TAG = HMSSiteService.class.getSimpleName();

    private SearchService searchService;

    private SearchIntent searchIntent;

    private CallbackContext callbackContext;

    private String encodedKey;

    private HMSLogger hmsLogger;


    public void enableLogger(CallbackContext callbackContext) {
        if (hmsLogger != null) {
            hmsLogger.enableLogger();
            callbackContext.success();
        } else {
            callbackContext.error("HMSLogger is null.");
        }
    }

    public void disableLogger(CallbackContext callbackContext) {
        if (hmsLogger != null) {
            hmsLogger.disableLogger();
            callbackContext.success();
        } else {
            callbackContext.error("HMSLogger is null.");
        }
    }

    public void initializeService(JSONObject params, Activity activity, CallbackContext callbackContext, CordovaInterface cordovaInterface) {
        hmsLogger = HMSLogger.getInstance(cordovaInterface.getContext());
        String apiKey = params.optString("apiKey");

        if (apiKey == null || apiKey.isEmpty()) {
            callbackContext.error("Invalid API key.");
            return;
        }

        encodedKey = null;

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

    public void widgetSearch(JSONObject params, CallbackContext callbackContext, CordovaInterface cordovaInterface) {

        this.callbackContext = callbackContext;
        SearchFilter searchFilter = new SearchFilter();
        searchIntent = new SearchIntent();
        searchIntent.setHint(params.optString("hint"));
        searchIntent.setApiKey(encodedKey);

        hmsLogger.startMethodExecutionTimer("widgetSearch");

        if (params.optJSONObject("location") != null || !params.isNull("location"))
            searchFilter.setLocation(HMSSiteUtils.toObject(params.optJSONObject("location"), Coordinate.class));

        if (params.optJSONObject("coordinateBounds") != null || !params.isNull("coordinateBounds"))
            searchFilter.setBounds(HMSSiteUtils.toObject(params.optJSONObject("coordinateBounds"), CoordinateBounds.class));

        if (HMSSiteUtils.poiTypesToList(params) != null)
            searchFilter.setPoiType(HMSSiteUtils.poiTypesToList(params));

        searchFilter.setCountryCode(params.optString("countryCode"));
        searchFilter.setLanguage(params.optString("language"));
        searchFilter.setPoliticalView(params.optString("politicalView"));
        searchFilter.setRadius(params.optInt("radius"));
        searchFilter.setQuery(params.optString("query"));
        searchIntent.setSearchFilter(searchFilter);

        Intent intent = searchIntent.getIntent(cordovaInterface.getActivity());
        cordovaInterface.startActivityForResult(this, intent, SearchIntent.SEARCH_REQUEST_CODE);

    }


    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        Log.i(TAG, "onActivityResult: ");
        if (SearchIntent.SEARCH_REQUEST_CODE == requestCode) {
            if (SearchIntent.isSuccess(resultCode)) {
                Site site;
                site = searchIntent.getSiteFromIntent(data);
                Log.i(TAG, "result: " + HMSSiteUtils.toJSON(site));
                handleResult(site, true, callbackContext);
                hmsLogger.sendSingleEvent("widgetSearch");
            } else {
                SearchStatus searchStatus = searchIntent.getStatusFromIntent(data);
                handleResult(searchStatus, false, callbackContext);
                hmsLogger.sendSingleEvent("widgetSearch", searchStatus.getErrorCode());
            }
        }
    }

    public void textSearch(JSONObject params, CallbackContext callbackContext) {
        hmsLogger.startMethodExecutionTimer("textSearch");
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
                Log.i(TAG, "result: " + HMSSiteUtils.toJSON(response));
                handleResult(response, true, callbackContext);
                hmsLogger.sendSingleEvent("textSearch");
            }

            @Override
            public void onSearchError(SearchStatus searchStatus) {
                handleResult(searchStatus, false, callbackContext);
                hmsLogger.sendSingleEvent("textSearch", searchStatus.getErrorCode());
            }
        });

    }

    public void detailSearch(JSONObject params, CallbackContext callbackContext) {
        hmsLogger.startMethodExecutionTimer("detailSearch");
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
                hmsLogger.sendSingleEvent("detailSearch");
            }

            @Override
            public void onSearchError(SearchStatus searchStatus) {
                handleResult(searchStatus, false, callbackContext);
                hmsLogger.sendSingleEvent("detailSearch", searchStatus.getErrorCode());
            }
        });
    }

    public void querySuggestion(JSONObject params, CallbackContext callbackContext) {
        hmsLogger.startMethodExecutionTimer("querySuggestion");

        if (!params.has("query") || params.isNull("query")) {
            Log.e(TAG, "Illegal argument. query field is mandatory and it must not be null.");
            callbackContext.error("Illegal argument. query field is mandatory and it must not be null.");
            return;
        }

        if (searchService == null) {
            Log.e(TAG, "SearchService is not initialized.");
            callbackContext.error("SearchService is not initialized.");
            return;
        }

        QuerySuggestionRequest request = HMSSiteUtils.toObject(params, QuerySuggestionRequest.class);
        searchService.querySuggestion(request, new SearchResultListener<QuerySuggestionResponse>() {
            @Override
            public void onSearchResult(QuerySuggestionResponse response) {
                handleResult(response, true, callbackContext);
                hmsLogger.sendSingleEvent("querySuggestion");
            }

            @Override
            public void onSearchError(SearchStatus searchStatus) {
                handleResult(searchStatus, false, callbackContext);
                hmsLogger.sendSingleEvent("querySuggestion", searchStatus.getErrorCode());
            }
        });
    }

    public void nearbySearch(JSONObject params, CallbackContext callbackContext) {
        hmsLogger.startMethodExecutionTimer("nearbySearch");
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
                hmsLogger.sendSingleEvent("nearbySearch");
            }

            @Override
            public void onSearchError(SearchStatus searchStatus) {
                handleResult(searchStatus, false, callbackContext);
                hmsLogger.sendSingleEvent("nearbySearch", searchStatus.getErrorCode());
            }
        });
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
