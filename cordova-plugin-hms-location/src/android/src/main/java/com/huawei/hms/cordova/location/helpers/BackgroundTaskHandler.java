/*
 * Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.huawei.hms.cordova.location.helpers;

import android.content.Context;
import android.content.SharedPreferences;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import org.json.JSONObject;

import java.util.Locale;

public class BackgroundTaskHandler {
    private final Context context;

    private WebView webView;

    public BackgroundTaskHandler(Context context) {
        this.context = context;
    }

    private WebView buildWebView(Context context) {
        WebView view = new WebView(context);
        view.setWebViewClient(new WebViewClient());
        view.addJavascriptInterface(new BackgroundManager(context), "BackgroundManager");
        view.getSettings().setSavePassword(false);
        view.getSettings().setJavaScriptEnabled(true);
        return view;
    }

    private String fetchFunctionFromStorage(String functionName) {
        String myAppId = context.getApplicationInfo().uid + "";
        SharedPreferences sharedPref = context.getSharedPreferences(context.getPackageName() + "." + myAppId,
            Context.MODE_PRIVATE);
        return sharedPref.getString(functionName, null);
    }

    private String prepareBackgroundFunction(String functionName) {
        String preFunction = fetchFunctionFromStorage(functionName);
        if (preFunction == null) {
            return null;
        }
        preFunction = preFunction.replace("=>", "");
        String function = String.format(Locale.ENGLISH, "function callback%s", preFunction);
        if (function.contains("ionic") || function.contains("__WEBPACK_") || function.contains("IMPORTED")
            || function.contains("MODULE")) {
            function = cleanIonicPrefixes(function);
        }
        return function;
    }

    private String cleanIonicPrefixes(String function) {
        StringBuilder newFunction = new StringBuilder();
        String[] lines = function.split("\n");
        for (String line : lines) {
            if (line.contains("__WEBPACK_") || line.contains("IMPORTED") || line.contains("MODULE")) {
                int start = line.indexOf("[\"");
                int end;
                if (line.contains(";")) {
                    end = line.indexOf(";");
                } else {
                    end = line.indexOf("\n");
                }
                newFunction.append(line.substring(start, end).replace("[\"", "").replace("\"]", "")).append(";\n");
            } else {
                newFunction.append(line).append("\n");
            }
        }
        return newFunction.toString();
    }

    public void handle(String functionName, JSONObject result) {
        if (webView == null) {
            webView = buildWebView(context);
        }
        String function = prepareBackgroundFunction(functionName);
        executeBackgroundFunction(webView, function, result);
    }

    private void executeBackgroundFunction(WebView webView, String function, JSONObject result) {
        if (function != null) {
            webView.evaluateJavascript(function, null);
            webView.evaluateJavascript(String.format(Locale.ENGLISH, "callback(%s);", result), null);
        } else {
            webView.evaluateJavascript("console.log('Callback function is not defined.');", null);
        }
    }
}
