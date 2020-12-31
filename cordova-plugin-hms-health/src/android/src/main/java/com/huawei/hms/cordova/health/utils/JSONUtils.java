/*
    Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.health.utils;

import android.util.Log;

import com.huawei.hms.support.api.entity.auth.Scope;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public final class JSONUtils {
    private static final String TAG = JSONUtils.class.getSimpleName();

    private JSONUtils() {
    }

    public static List<Scope> toScopeList(final JSONArray JSONArray) {
        List<String> scopeList = mapJSONArray(JSONArray);
        List<Scope> scopes = new ArrayList<>();
        for (String scope : scopeList) {
            scopes.add(new Scope(scope));
        }
        return scopes;
    }

    private static List<String> mapJSONArray(final JSONArray jsonArray) {
        final List<String> list = new ArrayList<>();

        for (int i = 0; i < jsonArray.length(); i++) {
            try {
                list.add(jsonArray.getString(i));
            } catch (final JSONException e) {
                Log.e(TAG, e.toString());
            }
        }
        return list;
    }

    public static JSONObject error(final int errorCode) {
        final JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("errorCode", errorCode);
        } catch (final JSONException e) {
            Log.e(TAG, e.toString());
        }
        return jsonObject;
    }
}
