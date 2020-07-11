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

package com.huawei.hms.cordova.map.utils;

import android.graphics.Color;
import android.util.Log;
import android.webkit.ValueCallback;

import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CordovaInterface;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONException;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import com.huawei.hms.cordova.map.helpers.BiConsumer;
import com.huawei.hms.cordova.map.helpers.Consumer;
import com.huawei.hms.cordova.map.helpers.JSONBiConsumer;
import com.huawei.hms.cordova.map.helpers.JSONConsumer;
import com.huawei.hms.cordova.map.helpers.JSONMapper;
import com.huawei.hms.cordova.map.helpers.JSONTriConsumer;
import com.huawei.hms.cordova.map.helpers.JSONTriMapper;
import com.huawei.hms.cordova.map.helpers.Mapper;
import com.huawei.hms.cordova.map.helpers.TriConsumer;
import com.huawei.hms.cordova.map.helpers.TriMapper;


public class CordovaUtils {

    private final static String TAG = CordovaUtils.class.getSimpleName();

    public static void sendEvent(final CordovaInterface cordova, final CordovaWebView webView, final String eventName) {
        sendEvent(cordova, webView, eventName, new JSONObject());
    }

    public static void sendEvent(final CordovaInterface cordova, final CordovaWebView webView, final String eventName, Consumer<String> onFinished) {
        sendEvent(cordova, webView, eventName, new JSONObject(), onFinished);
    }

    public static void sendEvent(final CordovaInterface cordova, final CordovaWebView webView, final String eventName, final JSONObject params) {
        sendEvent(cordova, webView, eventName, params, null);
    }

    public static void sendEvent(final CordovaInterface cordova, final CordovaWebView webView, final String eventName, final JSONObject params, Consumer<String> onFinished) {
        runJS(cordova, webView, "hmsEventHandler('"+ eventName + "', " + params.toString() + ");", onFinished);
    }

    public static void runJS(final CordovaInterface cordova, final CordovaWebView webView, String jsCode, Consumer<String> onFinished) {
        Log.d(TAG, JavaUtils.format("runJS :: jsCode=%s, onFinished=%s", jsCode, onFinished));
        cordova.getActivity().runOnUiThread(() -> webView.getEngine().evaluateJavascript(jsCode, (rtVal) -> {
            if (onFinished != null)
                onFinished.run(rtVal);
        }));
    }

    public static JSONObject basicMap(String... args) {
        JSONObject map = new JSONObject();
        try {
            for (int i = 0; i < args.length; i = i + 2) {
                map.put(args[i], args[i + 1]);
            }
        } catch (JSONException e) {
            Log.d(TAG, "JSONException :: " + e.getMessage());
        }
        return map;
    }

    public static <T> JSONObject keyValPair(String key, T val) {
        JSONObject map = new JSONObject();
        try {
            map.put(key, val);
        } catch (JSONException e) {
            Log.d(TAG, "JSONException :: " + e.getMessage());
        }
        return map;
    }

    public static JSONObject fromMapToJSONObject(Map<String, Object> map) {
        JSONObject writableMap = new JSONObject();
        if (map == null) {
            return writableMap;
        }

        try {
            for (Map.Entry<String, Object> entry: map.entrySet()) {
                writableMap.put(entry.getKey(), entry.getValue().toString());
            }
        } catch (JSONException e) {
            Log.d(TAG, "JSONException :: " + e.getMessage());
        }
        return writableMap;
    }

    public static <R> List<R> mapJSONArray(JSONArray array, Mapper<JSONObject, R> mapper) {
        return mapJSONArray(array, JSONObject.class, mapper);
    }

    public static <R, T> List<R> mapJSONArray(JSONArray array, Class<T> intermediate, Mapper<T, R> mapper) {
        if (array == null) {
            return null;
        }

        List<R> list = new ArrayList<>();
        try {
            for (int i = 0; i < array.length(); i++) {
                if (JSONObject.class.isAssignableFrom(intermediate)) {
                    list.add(mapper.map((T) array.getJSONObject(i)));
                } else if (JSONArray.class.isAssignableFrom(intermediate)) {
                    list.add(mapper.map((T) array.getJSONArray(i)));
                }
            }
        } catch (JSONException e) {
            Log.d(TAG, "mapJSONArray :: JSONException, " + e.getMessage());
        }
        return list;
    }

    public static <T> JSONArray mapList(List<T> list, Mapper<T, JSONObject> mapper) {
        // TODO: nullcheck list
        JSONArray array = new JSONArray();
        for (T item : list) {
            array.put(mapper.map(item));
        }
        return array;
    }

    public static <T> JSONArray arrayOf(T... args) {
        JSONArray arr = new JSONArray();
        for (T arg : args) {
            arr.put(arg);
        }
        return arr;
    }

    public static JSONObject err(int errCode, String errMsg) {
        try {
            Log.e(TAG, "err :: errCode = " + errCode + " errMsg = " + errMsg);
            return new JSONObject().put("errCode", errCode).put("errMsg", errMsg);
        } catch (JSONException ex) {
            Log.e(TAG, "err :: JSONException, " + ex.getMessage());
            return null;
        }
    }

    public static <T> JSONObject extendJSONWith(JSONObject json, Map<String, T> supplement) {
        for (Map.Entry<String, T> entry : supplement.entrySet()){
            try {
                json.put(entry.getKey(), entry.getValue());
            } catch (JSONException ex)  {
                Log.e(TAG, "err :: JSONException, " + ex.getMessage());
                return null;
            }
        }

        return json;
    }

    public static JSONObject extendJSONWith(JSONObject json, JSONObject supplement) {
        for (Iterator<String> it = supplement.keys(); it.hasNext();) {
            String key = it.next();
            try {
                json.put(key, supplement.get(key));
            } catch (JSONException ex)  {
                Log.e(TAG, "err :: JSONException, " + ex.getMessage());
                return null;
            }
        }

        return json;
    }

    // /////////////////////////////////////////////////////////////////////////////////////////////
    // Wrappers
    // /////////////////////////////////////////////////////////////////////////////////////////////

    // A generic handler for JSONExceptions
    public static <T, R> Mapper<T, R> mapperWrapper(JSONMapper<T, R> jm) {
        return arg -> {
            if (arg == null) {
                return null;
            }

            try {
                return jm.map(arg);
            } catch (JSONException e) {
                Log.e(TAG, "wrapper :: JSONException, " + e.getMessage());
                return null;
            }
        };
    }

    // A generic handler for JSONExceptions
    public static <T> Consumer<T> consumerWrapper(JSONConsumer<T> jba) {
        return (arg1) -> {
            if (arg1 == null) {
                return;
            }

            try {
                jba.run(arg1);
            } catch (JSONException e) {
                Log.e(TAG, "wrapper :: JSONException, " + e.getMessage());
            }
        };
    }

    // A generic handler for JSONExceptions
    public static <T, U> BiConsumer<T, U> biConsumerWrapper(JSONBiConsumer<T, U> jba) {
        return (arg1, arg2) -> {
            if (arg1 == null || arg2 == null) {
                return;
            }

            try {
                jba.run(arg1, arg2);
            } catch (JSONException e) {
                Log.e(TAG, "wrapper :: JSONException, " + e.getMessage());
            }
        };
    }

    // A generic handler for JSONExceptions
    public static <T, U, V> TriConsumer<T, U, V> triConsumerWrapper(JSONTriConsumer<T, U, V> jba) {
        return (arg1, arg2, arg3) -> {
            if (arg1 == null || arg2 == null || arg3 == null) {
                return;
            }

            try {
                jba.run(arg1, arg2, arg3);
            } catch (JSONException e) {
                Log.e(TAG, "wrapper :: JSONException, " + e.getMessage());
            }
        };
    }

    // A generic handler for JSONExceptions
    public static <T, U, V, R> TriMapper<T, U, V, R> triMapperWrapper(JSONTriMapper<T, U, V, R> jba) {
        return (arg1, arg2, arg3) -> {
            if (arg1 == null || arg2 == null || arg3 == null) {
                return null;
            }

            try {
                return jba.run(arg1, arg2, arg3);
            } catch (JSONException e) {
                Log.e(TAG, "wrapper :: JSONException, " + e.getMessage());
                return null;
            }
        };
    }

    public static JSONObject optJSONObject(JSONObject json, String key, JSONObject fallback) {
        JSONObject result = json.optJSONObject(key);
        if (result == null) {
            return fallback;
        }
        return result;
    }

    public static int parseColor(JSONObject json, String field) {
        return parseColor(json, field, Color.WHITE);
    }

    public static int parseColor(JSONObject json, String field, int fallback) {
        try {
            return Color.parseColor(json.getString(field));
        } catch (JSONException | IllegalArgumentException e) {
            return json.optInt(field, fallback);
        }
    }
}
