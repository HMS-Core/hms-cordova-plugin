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

import com.google.gson.Gson;

import com.google.gson.GsonBuilder;
import com.huawei.hms.cordova.site.basef.handler.CorLog;
import com.huawei.hms.cordova.site.basef.handler.Promise;
import com.huawei.hms.site.api.SearchResultListener;
import com.huawei.hms.site.api.model.LocationType;
import com.huawei.hms.site.api.model.SearchStatus;

import java.util.Locale;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class HMSSiteUtils {
    private static final String TAG = HMSSiteUtils.class.getSimpleName();

    private static final Gson GSON = new GsonBuilder().serializeSpecialFloatingPointValues().create();
    private HMSSiteUtils() { }

    public static <T> String toJson(T obj) {
        return GSON.toJson(obj);
    }
    public static <T> T toObject(JSONObject json, Class<T> clazz) {
        return GSON.fromJson(json.toString(), clazz);
    }

    public static List<LocationType> jArrToPoiList(JSONArray array) {
        List<LocationType> locTypes = new ArrayList<>();
        if(array == null) return locTypes;
        for(int i=0; i<array.length();i++) {
            locTypes.add(LocationType.valueOf(array.optString(i).toUpperCase(Locale.ENGLISH)));
        }
        return locTypes;
    }

    public static class SearchListener<T> implements SearchResultListener<T> {
        private static final String TAG = SearchListener.class.getSimpleName();

        private final Promise promise;
        public SearchListener(final Promise promise) {
            this.promise = promise;
        }

        @Override
        public void onSearchResult(T t) {
            CorLog.info(TAG, toJson(t));
            promise.success(toJson(t));
        }

        @Override
        public void onSearchError(SearchStatus searchStatus) {
            CorLog.err(TAG, toJson(searchStatus));
            promise.error(toJson(searchStatus));
        }
    }
}
