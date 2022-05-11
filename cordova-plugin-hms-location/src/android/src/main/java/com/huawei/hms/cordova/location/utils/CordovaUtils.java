/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.location.utils;

import android.util.Log;

import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Locale;
import java.util.Map;

public class CordovaUtils {
    private static final String TAG = CordovaUtils.class.getSimpleName();

    private static volatile CordovaUtils cordovaUtils = null;

    private CordovaWebView webView;

    private CordovaUtils(CordovaWebView webView) {
        this.webView = webView;
    }

    public static synchronized void createInstance(CordovaWebView webView) {
        if (cordovaUtils == null) {
            synchronized (CordovaUtils.class) {
                if (cordovaUtils == null) {
                    cordovaUtils = new CordovaUtils(webView);
                }
            }
        }
    }

    public static void sendEvent(final String eventName, JSONArray args) {
        if (cordovaUtils == null) {
            return;
        }
        cordovaUtils.webView.loadUrl(
            String.format(Locale.ENGLISH, "javascript:window.runHMSEvent('%s',%s);", eventName, args));
    }

    public static void sendEvent(final String eventName, JSONObject json) {
        if (cordovaUtils == null) {
            return;
        }
        cordovaUtils.webView.loadUrl(
            String.format(Locale.ENGLISH, "javascript:window.runHMSEvent('%s',%s);", eventName, json));
    }

    public static JSONObject fromMapToJSONObject(Map<String, Object> map) {
        JSONObject json = new JSONObject();
        if (map == null) {
            return json;
        }
        try {
            for (Map.Entry<String, Object> entry : map.entrySet()) {
                json.put(entry.getKey(), entry.getValue().toString());
            }
        } catch (JSONException e) {
            Log.d(TAG, "JSONException :: " + e.getMessage());
        }
        return json;
    }
}
