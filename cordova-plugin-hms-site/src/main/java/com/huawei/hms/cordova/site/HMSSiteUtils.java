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

import android.util.Log;

import com.google.gson.Gson;
import com.huawei.hms.site.api.model.Coordinate;
import com.huawei.hms.site.api.model.CoordinateBounds;
import com.huawei.hms.site.api.model.LocationType;

import java.security.AccessController;
import java.security.PrivilegedAction;
import java.util.Locale;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

public class HMSSiteUtils {

    private static String TAG = HMSSiteUtils.class.getSimpleName();

    private static Gson gson = new Gson();

    private HMSSiteUtils() {
    }

    public static <T> String toJSON(T obj) {
        return gson.toJson(obj);
    }

    public static <T> T toObject(JSONObject jsonObject, Class<T> clazz) {
        return gson.fromJson(jsonObject.toString(), clazz);
    }


    public static List<LocationType> poiTypesToList(JSONObject jsonObject) {
        List<LocationType> locationTypes = new ArrayList<>();
        try {
            JSONArray poiTypes = jsonObject.optJSONArray("poiTypes");
            for (int i = 0; i < poiTypes.length(); i++) {
                locationTypes.add(LocationType.valueOf(poiTypes.getString(i).toUpperCase(Locale.ENGLISH)));
            }
            return locationTypes;
        } catch (Exception e) {
            Log.e(TAG, "error: " + e.getMessage());
            return null;
        }
    }


}
