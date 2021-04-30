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

package com.huawei.hms.cordova.site;

import android.content.Intent;
import android.util.Log;

import com.huawei.hms.cordova.site.basef.CordovaBaseModule;
import com.huawei.hms.cordova.site.basef.CordovaMethod;
import com.huawei.hms.cordova.site.basef.CordovaRule;
import com.huawei.hms.cordova.site.basef.HMSLog;
import com.huawei.hms.cordova.site.basef.handler.CorError;
import com.huawei.hms.cordova.site.basef.handler.CorException;
import com.huawei.hms.cordova.site.basef.handler.CorPack;
import com.huawei.hms.cordova.site.basef.handler.Promise;

import com.huawei.hms.site.api.SearchService;
import com.huawei.hms.site.api.SearchServiceFactory;
import com.huawei.hms.site.api.model.DetailSearchRequest;
import com.huawei.hms.site.api.model.NearbySearchRequest;
import com.huawei.hms.site.api.model.QueryAutocompleteRequest;
import com.huawei.hms.site.api.model.QuerySuggestionRequest;
import com.huawei.hms.site.api.model.SearchStatus;
import com.huawei.hms.site.api.model.Site;
import com.huawei.hms.site.api.model.TextSearchRequest;
import com.huawei.hms.site.widget.SearchFilter;
import com.huawei.hms.site.widget.SearchIntent;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

public class HMSSiteModule extends CordovaBaseModule {

    private final static CorError SEARCH_INTENT_ALREADY_SET = new CorError(2000, "Search intent already set.");
    private final static CorError SERVICE_NOT_INITIALIZED = new CorError(1000, "Search service not initialized.");
    private Promise siteIntentPromise = null;
    private SearchService searchService = null;
    private SearchIntent searchIntent = null;

    @CordovaRule
    public void checkSearchResult() throws CorException {
        if (searchService == null) throw new CorException(SERVICE_NOT_INITIALIZED);
    }

    @CordovaMethod
    @HMSLog
    public void init(final CorPack corPack, JSONArray args, final Promise promise) 
        throws JSONException, UnsupportedEncodingException {
        String apiKey = args.getString(0);
        String encodedKey = URLEncoder.encode(apiKey, "UTF-8");
        searchService = SearchServiceFactory.create(corPack.getCordova().getActivity(), encodedKey);
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void gotoSearchActivity(final CorPack corPack, JSONArray args, final Promise promise) 
        throws JSONException, UnsupportedEncodingException {
        String apiKey = args.getString(0);
        String encodedKey = URLEncoder.encode(apiKey, "UTF-8");
        JSONObject searchFilter = args.getJSONObject(1);
        String hint = args.optString(2); // hint is optional
        if(this.siteIntentPromise != null) {
            // Method already called skip this and send promise reject
            throw new CorException(SEARCH_INTENT_ALREADY_SET);
        }
        this.siteIntentPromise = promise;

        SearchFilter filter = HMSSiteUtils.toObject(searchFilter, SearchFilter.class);
        if(searchFilter.has("poiType"))
            filter.setPoiType(HMSSiteUtils.jArrToPoiList(searchFilter.optJSONArray("poiType")));

        this.searchIntent = new SearchIntent();
        this.searchIntent.setSearchFilter(filter);
        this.searchIntent.setApiKey(encodedKey);
        if(hint != null) this.searchIntent.setHint(hint);

        Intent intent = this.searchIntent.getIntent(corPack.getCordova().getActivity());
        corPack.startActivityForResult(intent, SearchIntent.SEARCH_REQUEST_CODE);
    }

    @CordovaMethod(rules = {"checkSearchResult"})
    @HMSLog
    public void textSearch(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject textSearchReq = args.getJSONObject(0);
        TextSearchRequest req = HMSSiteUtils.toObject(textSearchReq, TextSearchRequest.class);
        searchService.textSearch(req, new HMSSiteUtils.SearchListener<>(promise));
    }

    @CordovaMethod(rules = {"checkSearchResult"})
    @HMSLog
    public void detailSearch(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject detailSearchReq = args.getJSONObject(0);
        DetailSearchRequest req = HMSSiteUtils.toObject(detailSearchReq, DetailSearchRequest.class);
        searchService.detailSearch(req, new HMSSiteUtils.SearchListener<>(promise));
    }

    @CordovaMethod(rules = {"checkSearchResult"})
    @HMSLog
    public void queryAutocomplete(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject autocompleteReq = args.getJSONObject(0);
        QueryAutocompleteRequest request = HMSSiteUtils.toObject(autocompleteReq, QueryAutocompleteRequest.class);
        searchService.queryAutocomplete(request, new HMSSiteUtils.SearchListener<>(promise));
    }

    @CordovaMethod(rules = {"checkSearchResult"})
    @HMSLog
    public void querySuggestion(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject querySuggestionReq = args.getJSONObject(0);
        QuerySuggestionRequest req = HMSSiteUtils.toObject(querySuggestionReq, QuerySuggestionRequest.class);
        if(querySuggestionReq.has("poiTypes"))
            req.setPoiTypes(HMSSiteUtils.jArrToPoiList(querySuggestionReq.getJSONArray("poiTypes")));
        searchService.querySuggestion(req, new HMSSiteUtils.SearchListener<>(promise));
    }

    @CordovaMethod(rules = {"checkSearchResult"})
    @HMSLog
    public void nearbySearch(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject nearbySearchReq = args.getJSONObject(0);
        NearbySearchRequest req = HMSSiteUtils.toObject(nearbySearchReq, NearbySearchRequest.class);
        searchService.nearbySearch(req, new HMSSiteUtils.SearchListener<>(promise));
    }

    @CordovaMethod
    @HMSLog
    public void enableLogger(final CorPack corPack, JSONArray args, final Promise promise) {
        corPack.enableLogger();
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void disableLogger(final CorPack corPack, JSONArray args, final Promise promise) {
        corPack.disableLogger();
        promise.success();
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if(SearchIntent.SEARCH_REQUEST_CODE == requestCode) {
            if(SearchIntent.isSuccess(resultCode)){
                Site site = this.searchIntent.getSiteFromIntent(data);
                this.siteIntentPromise.success(HMSSiteUtils.toJson(site));
            } else {
                SearchStatus searchStatus = this.searchIntent.getStatusFromIntent(data);
                this.siteIntentPromise.error(HMSSiteUtils.toJson(searchStatus));
            }
            this.siteIntentPromise = null;
            this.searchIntent = null;
        }
    }

}
