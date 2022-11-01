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

package com.huawei.hms.cordova.ar;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONObject;

import java.util.Locale;
import java.util.Map;

public final class CordovaListenerHelper {
    private static final String TAG = CordovaListenerHelper.class.getSimpleName();

    private final CordovaWebView webView;

    private final CordovaInterface cordova;

    public CordovaListenerHelper(CordovaWebView webView, CordovaInterface cordova) {
        this.webView = webView;
        this.cordova = cordova;
    }

    public void sendEvent(String eventName, JSONObject object) {
        runJSEvent(eventName, object);
    }

    public void sendEvent(String eventName, JSONArray array) {
        runJSEvent(eventName, array);
    }

    public void sendEvent(String eventName, Map<String, Object> jsonMap) {
        runJSEvent(eventName, jsonMap);
    }

    public void sendEvent(String eventName) {
        runJSEvent(eventName, null);
    }

    private void runJSEvent(String eventName, Object nullable) {
        cordova.getActivity().runOnUiThread(() -> {
            if (nullable == null) {
                webView.loadUrl(String.format(Locale.ENGLISH, "javascript:window.runHMSEvent('%s');", eventName));
            } else {
                webView.loadUrl(
                    String.format(Locale.ENGLISH, "javascript:window.runHMSEvent('%s', %s)", eventName, nullable));
            }
        });
    }

}
