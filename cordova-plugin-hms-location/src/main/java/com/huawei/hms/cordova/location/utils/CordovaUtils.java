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

package com.huawei.hms.cordova.location.utils;

import android.util.Log;

import com.huawei.hms.cordova.location.helpers.JSONMapper;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;


public class CordovaUtils {

    private final static String TAG = CordovaUtils.class.getSimpleName();

    public static void sendEvent(final CordovaInterface cordova, final CordovaWebView webView, final String eventName, final JSONObject params) {
        runJS(cordova, webView, "hmsEventHandler('"+ eventName + "', " + params.toString() + ");");
    }

    public static void runJS(final CordovaInterface cordova, final CordovaWebView webView, final String jsCode) {
        runJS(cordova, webView, jsCode, null);
    }

    public static void runJS(final CordovaInterface cordova, final CordovaWebView webView, final String jsCode, Runnable onFinished) {
        Log.d(TAG, "runJS :: " + jsCode);

        cordova.getActivity().runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    webView.getEngine().evaluateJavascript(jsCode, (result) -> {
                        if (onFinished != null) {
                            onFinished.run();
                        }
                    });
                }
            });
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

    public static <R> List<R> mapJSONArray(JSONArray array, JSONMapper<JSONObject, R> mapper) {
        List<R> list = new ArrayList<>();
        try {
            for (int i = 0; i < array.length(); i++) {
                list.add(mapper.map(array.getJSONObject(i)));
            }
        } catch (JSONException e) {
            Log.d(TAG, "JSONException :: " + e.getMessage());
        }
        return list;
    }

    public static <T> JSONArray mapList(List<T> list, JSONMapper<T, JSONObject> mapper) {
        JSONArray array = new JSONArray();
        try {
            for (T item : list) {
                array.put(mapper.map(item));
            }
        } catch (JSONException e) {
            Log.d(TAG, "JSONException :: " + e.getMessage());
        }
        return array;
    }

}
