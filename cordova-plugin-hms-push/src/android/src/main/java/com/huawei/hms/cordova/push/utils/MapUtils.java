/*
    Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.push.utils;

import android.os.Bundle;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import static com.huawei.hms.cordova.push.utils.ArrayUtil.fromArray;

public class MapUtils {

    public static JSONObject fromBundle(Bundle bundle) throws JSONException {
        JSONObject map = new JSONObject();
        if (bundle == null) {
            return map;
        }
        for (String key : bundle.keySet()) {
            Object value = bundle.get(key);
            if (value == null) {
                map.put(key, null);
            } else if (value instanceof Collection) {
                map.put(key, new JSONArray((Collection) value));
            } else if (value.getClass().isArray()) {
                map.put(key, fromArray(value));
            } else if (value instanceof String) {
                map.put(key, value);
            } else if (value instanceof Number) {
                if (value instanceof Integer) {
                    map.put(key, value);
                } else {
                    map.put(key, ((Number) value).doubleValue());
                }
            } else if (value instanceof Boolean) {
                map.put(key, value);
            } else if (value instanceof Bundle) {
                map.put(key, fromBundle((Bundle) value));
            } else {
                throw new IllegalArgumentException("Could not convert " + value.getClass());
            }
        }
        return map;
    }

    public static Bundle toBundle(JSONObject jsonObject) throws JSONException {
        if (jsonObject == null) {
            return null;
        }

        Iterator iterator = jsonObject.keys();
        if (!iterator.hasNext()) {
            return null;
        }

        Bundle bundle = new Bundle();
        while (iterator.hasNext()) {
            String key = (String) iterator.next();
            Object value;
            if (!jsonObject.isNull(key)) {
                value = jsonObject.get(key);
            } else {
                value = null;
            }
            if (value == null) {
                bundle.putString(key, null);
            } else if (value instanceof Boolean) {
                bundle.putBoolean(key, jsonObject.getBoolean(key));
            } else if (value instanceof Number) {
                bundle.putDouble(key, jsonObject.getDouble(key));
            } else if (value instanceof String) {
                bundle.putString(key, jsonObject.getString(key));
            } else if (value instanceof JSONObject) {
                bundle.putBundle(key, toBundle(jsonObject.getJSONObject(key)));
            } else {
                throw new IllegalArgumentException("Could not convert object with key: " + key + ".");
            }
        }

        return bundle;
    }

    public static Map<String, Object> toMap(JSONObject jsonObject) throws JSONException {

        Map<String, Object> map = new HashMap<>();
        Iterator<String> iterator = jsonObject.keys();

        while (iterator.hasNext()) {
            String key = iterator.next();
            Object value = jsonObject.get(key);

            if (value instanceof JSONObject) {
                value = MapUtils.toMap((JSONObject) value);
            }
            if (value instanceof JSONArray) {
                value = ArrayUtil.toArray((JSONArray) value);
            }

            map.put(key, value);
        }

        return map;
    }

    public static Map<String, String> toStringMap(JSONObject jsonObject) throws JSONException {

        Map<String, Object> objectMap = toMap(jsonObject);
        Map<String, String> map = new HashMap<>();

        for (Map.Entry<String, Object> entry : objectMap.entrySet()) {
            map.put(entry.getKey(), String.valueOf(entry.getValue()));
        }

        return map;
    }

    public static JSONObject toJSONObject(Map<String, Object> map) throws JSONException {

        JSONObject jsonObject = new JSONObject();
        Iterator iterator = map.entrySet().iterator();

        while (iterator.hasNext()) {
            Map.Entry pair = (Map.Entry) iterator.next();
            Object value = pair.getValue();

            if (value == null) {
                jsonObject.put((String) pair.getKey(), null);
            } else if (value instanceof Boolean) {
                jsonObject.put((String) pair.getKey(), value);
            } else if (value instanceof Double) {
                jsonObject.put((String) pair.getKey(), value);
            } else if (value instanceof Integer) {
                jsonObject.put((String) pair.getKey(), value);
            } else if (value instanceof String) {
                jsonObject.put((String) pair.getKey(), value);
            } else if (value instanceof JSONObject) {
                jsonObject.put((String) pair.getKey(), value);
            } else if (value instanceof Map) {
                jsonObject.put((String) pair.getKey(), MapUtils.toJSONObject((Map<String, Object>) value));
            } else {
                value.getClass();
                if (value.getClass().isArray()) {
                    jsonObject.put((String) pair.getKey(), ArrayUtil.jsonArray((Object[]) value));
                }
            }

            iterator.remove();
        }

        return jsonObject;
    }
}
