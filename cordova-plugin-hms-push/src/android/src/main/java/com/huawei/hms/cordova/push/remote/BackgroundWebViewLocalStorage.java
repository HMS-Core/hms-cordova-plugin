/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.push.remote;

import android.content.Context;
import android.content.SharedPreferences;
import android.os.Handler;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;

import com.huawei.hms.cordova.push.constants.Core;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.Locale;

public class BackgroundWebViewLocalStorage {
    private Context context;

    private WebView webView;

    public BackgroundWebViewLocalStorage(Context context, WebView webView) {
        this.context = context;
        this.webView = webView;
    }

    @JavascriptInterface
    public void setItem(String key, String jsonData) {
        String myAppId = context.getApplicationInfo().uid + "";
        SharedPreferences sharedPref = context.getApplicationContext()
            .getSharedPreferences(context.getPackageName() + "." + myAppId, Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPref.edit();
        editor.putString(key, jsonData).apply();
    }

    @JavascriptInterface
    public void getItem(String key) {
        String myAppId = context.getApplicationInfo().uid + "";
        SharedPreferences sharedPref = context.getApplicationContext()
            .getSharedPreferences(context.getPackageName() + "." + myAppId, Context.MODE_PRIVATE);
        String jsonData = sharedPref.getString(key, null);
        Handler mainHandler = new Handler(context.getMainLooper());
        Runnable myRunnable = () -> {
            try {
                if (jsonData != null) {
                    webView.evaluateJavascript(
                        String.format(Locale.ENGLISH, "if(window.hasOwnProperty('%s')) window['%s'](%s)",
                            Core.Event.ON_GET_ITEM_RESPONSE_EVENT, Core.Event.ON_GET_ITEM_RESPONSE_EVENT,
                            new JSONObject(jsonData)), null);
                } else {
                    webView.evaluateJavascript(
                        String.format(Locale.ENGLISH, "if(window.hasOwnProperty('%s')) window['%s'](%s)",
                            Core.Event.ON_GET_ITEM_RESPONSE_EVENT, Core.Event.ON_GET_ITEM_RESPONSE_EVENT,
                            new JSONObject().put("Error", "Data not found with " + key + " key parameter")), null);
                }
            } catch (JSONException ex) {
                Log.i(context.getPackageName(), "run: " + ex.getLocalizedMessage());
            }
        };
        mainHandler.post(myRunnable);

    }

    @JavascriptInterface
    public void removeItem(String key) {
        String myAppId = context.getApplicationInfo().uid + "";
        SharedPreferences sharedPref = context.getApplicationContext()
            .getSharedPreferences(context.getPackageName() + "." + myAppId, Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPref.edit();
        editor.remove(key).apply();
    }
}
