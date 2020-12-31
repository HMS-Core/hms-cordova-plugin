/*
    Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.mlkit.helpers;

import android.content.Context;
import android.util.Log;

import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.mlsdk.common.MLFrame;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebViewEngine;
import org.json.JSONObject;

public class CordovaHelpers {
    private static String TAG = CordovaHelpers.class.getSimpleName();

    public static void sendEvent(final CordovaPlugin plugin, final String eventName, final JSONObject params) {
        runJS(plugin, "hmsEventHandler('" + eventName + "', " + params.toString() + ");");
    }

    public static void runJS(final CordovaPlugin plugin, final String jsCode) {
        runJS(plugin, jsCode, null);
    }

    public static void runJS(final CordovaPlugin plugin, final String jsCode, Runnable onFinished) {
        Log.d(TAG, "runJS()");

        plugin.cordova.getActivity().runOnUiThread(() -> {
            CordovaWebViewEngine engine = plugin.webView.getEngine();
            if (engine == null) {
                plugin.webView.loadUrl("javascript:" + jsCode);
                if (onFinished != null) {
                    onFinished.run();
                }
            } else {
                engine.evaluateJavascript(jsCode, (result) -> {
                    if (onFinished != null) {
                        onFinished.run();
                    }
                });
            }
        });
    }

    public static <T extends HMSProvider> T initializeProvider(T provider, CordovaInterface cordova,
        CordovaPlugin plugin) {
        provider.setActivityHolder(cordova::getActivity);
        provider.setCordovaPlugin(plugin);

        return provider;
    }

    public static PluginLayout.InitialProps initialPropsFrom(JSONObject json) {

        return new PluginLayout.InitialProps(json.optInt("x"), json.optInt("y"), json.optInt("width"),
            json.optInt("height"), json.optInt("marginLeft"), json.optInt("marginTop"), json.optInt("marginBottom"),
            json.optInt("marginRight"));
    }

    public static void frameController(MLFrame frame, Context context, CallbackContext callbackContext, String name) {
        if (frame == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
            HMSLogger.getInstance(context).sendSingleEvent(name, String.valueOf(CordovaErrors.ILLEGAL_PARAMETER));
            return;
        }
    }

}
