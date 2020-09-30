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

package com.huawei.hms.cordova.push.utils;

import android.util.Log;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebViewEngine;
import org.json.JSONObject;

public class CordovaUtils {

    private static String TAG = CordovaUtils.class .getSimpleName();



    public static void sendEvent(final CordovaPlugin plugin, final String eventName, final JSONObject params) {
        runJS(plugin, "hmsEventHandler('" + eventName + "', " + params.toString() + ");");
    }

    public static void sendEvent(final CordovaPlugin plugin, final String eventName, final String params) {
        runJS(plugin, "hmsEventHandler('" + eventName + "', '" + params + "');");
    }
    
    public static void runJS(final CordovaPlugin plugin, final String jsCode) {
        if(plugin==null)
            return;
        Log.d(TAG, "runJS()");

        plugin.cordova.getActivity().runOnUiThread(() -> {
            CordovaWebViewEngine engine = plugin.webView.getEngine();
            if (engine == null) {
                plugin.webView.loadUrl("javascript:" + jsCode);

            } else {
                engine.evaluateJavascript(jsCode, (result) -> {

                });
            }
        });
    }

}
