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

import android.util.Log;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CordovaWebViewEngine;
import org.json.JSONObject;

public class CordovaUtils {

    private static String TAG = CordovaUtils.class.getSimpleName();

    public static void sendEvent(final CordovaInterface cordova, final CordovaWebView webView, final String eventName, final JSONObject params) {
        runJS(cordova, webView, "hmsEventHandler('" + eventName + "', " + params.toString() + ");");
    }

    public static void runJS(final CordovaInterface cordova, final CordovaWebView webview, final String jsCode) {
        if(cordova==null)
            return;
        cordova.getActivity().runOnUiThread(() -> webview.loadUrl("javascript:" + jsCode));
    }

}
