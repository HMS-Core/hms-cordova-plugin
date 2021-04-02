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

package com.huawei.hms.cordova.push.utils;

import android.os.Bundle;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;
import java.util.Map;

import static com.huawei.hms.cordova.push.utils.MapUtils.fromBundle;

public class ArrayUtil {


    public static Object[] toArray(JSONArray jsonArray) throws JSONException {
        Object[] array = new Object[jsonArray.length()];

        for (int i = 0; i < jsonArray.length(); i++) {
            Object value = jsonArray.get(i);

            if (value instanceof JSONObject) {
                value = MapUtils.toMap((JSONObject) value);
            }
            if (value instanceof JSONArray) {
                value = ArrayUtil.toArray((JSONArray) value);
            }

            array[i] = value;
        }

        return array;
    }

    public static JSONArray fromArray(Object array) throws JSONException {
        JSONArray catalystArray = new JSONArray();
        if (array instanceof String[]) {
            for (String v : (String[]) array) {
                catalystArray.put(v);
            }
        } else if (array instanceof Bundle[]) {
            for (Bundle v : (Bundle[]) array) {
                catalystArray.put(fromBundle(v));
            }
        } else if (array instanceof int[]) {
            for (int v : (int[]) array) {
                catalystArray.put(v);
            }
        } else if (array instanceof float[]) {
            for (float v : (float[]) array) {
                catalystArray.put(v);
            }
        } else if (array instanceof double[]) {
            for (double v : (double[]) array) {
                catalystArray.put(v);
            }
        } else if (array instanceof boolean[]) {
            for (boolean v : (boolean[]) array) {
                catalystArray.put(v);
            }
        } else {
            throw new IllegalArgumentException("Unknown array type " + array.getClass());
        }
        return catalystArray;
    }

    public static JSONArray jsonArray(Object[] array) {
        JSONArray jsonArray = new JSONArray();

        for (Object value : array) {
            if (value == null) {
                jsonArray.put(null);
            }
            if (value instanceof Boolean) {
                jsonArray.put((Boolean) value);
            }
            if (value instanceof Double) {
                jsonArray.put((Double) value);
            }
            if (value instanceof Integer) {
                jsonArray.put((Integer) value);
            }
            if (value instanceof String) {
                jsonArray.put((String) value);
            }
            if (value instanceof Map) {
                try {
                    jsonArray.put(MapUtils.toJSONObject((Map<String, Object>) value));
                } catch (NullPointerException | IllegalStateException | JSONException e) {
                    continue;
                }
            }
            try {
                if (value.getClass().isArray()) {
                    jsonArray.put(ArrayUtil.jsonArray((Object[]) value));
                }
            } catch (NullPointerException | IllegalStateException e) {
                continue;
            }

        }

        return jsonArray;
    }

    public static JSONArray fromList(List list) throws JSONException {
        JSONArray catalystArray = new JSONArray();
        for (Object obj : list) {
            if (obj == null) {
                catalystArray.put(null);
            } else if (obj.getClass().isArray()) {
                catalystArray.put(fromArray(obj));
            } else if (obj instanceof Bundle) {
                catalystArray.put(fromBundle((Bundle) obj));
            } else if (obj instanceof List) {
                catalystArray.put(fromList((List) obj));
            } else if (obj instanceof String) {
                catalystArray.put((String) obj);
            } else if (obj instanceof Integer) {
                catalystArray.put((Integer) obj);
            } else if (obj instanceof Number) {
                catalystArray.put(((Number) obj).doubleValue());
            } else if (obj instanceof Boolean) {
                catalystArray.put((Boolean) obj);
            } else {
                throw new IllegalArgumentException("Unknown value type " + obj.getClass());
            }
        }
        return catalystArray;
    }
}
