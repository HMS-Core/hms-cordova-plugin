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

package com.huawei.hms.cordova.ads.utils;

import android.graphics.Color;
import android.util.Log;
import com.huawei.hms.cordova.ads.helpers.Consumer;
import com.huawei.hms.cordova.ads.helpers.JSONBiMapper;
import com.huawei.hms.cordova.ads.helpers.JSONRunnable;
import com.huawei.hms.cordova.ads.helpers.Mapper;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;


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

    public static <T> List<T> jsonArrayToList(JSONArray array, JSONBiMapper<JSONArray, Integer, T> mapper) {
        if (array == null) {
            return null;
        }

        List<T> result = new ArrayList<>(array.length());
        for (int i = 0; i < array.length(); i++) {
            try {
                result.add(mapper.map(array, i));
            } catch (JSONException e) {
                Log.e(TAG, "accumulateJSONArray() :: error while accumulating " + Arrays.toString(e.getStackTrace()));
            }
        }
        return result;
    }

    public static <T> JSONObject basicMap(T... args) {
        JSONObject map = new JSONObject();
        try {
            for (int i = 0; i < args.length; i = i + 2) {
                map.put((String) args[i], args[i + 1]);
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

    public static int resId(CordovaInterface cordova, String type, String name) {
        if (JavaUtils.isNullOrEmpty(type) || JavaUtils.isNullOrEmpty(name)) {
            return -1;
        }

        return cordova.getContext().getResources().getIdentifier(name, type, cordova.getContext().getPackageName());
    }

    public static int rid(CordovaInterface cordova, String name) {
        return resId(cordova, "id", name);
    }

    public static int rlayout(CordovaInterface cordova, String name) {
        return resId(cordova, "layout", name);
    }

    public static int rdraw(CordovaInterface cordova, String name) {
        return resId(cordova, "drawable", name);
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

    public static JSONObject optJSONObject(JSONObject json, String key, JSONObject fallback) {
        JSONObject result = json.optJSONObject(key);
        if (result == null) {
            return fallback;
        }
        return result;
    }

    public static JSONArray optJSONArray(JSONObject json, String key, JSONArray fallback) {
        JSONArray result = json.optJSONArray(key);
        if (result == null) {
            return fallback;
        }
        return result;
    }

    public static Runnable runnableWrapper(JSONRunnable jr) {
        return () -> {
            try {
                jr.run();
            } catch (JSONException e) {
                Log.e(TAG, "wrapper :: JSONException, " + e.getMessage());
            }
        };
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
}
