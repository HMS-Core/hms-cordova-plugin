/*
 * Copyright 2023. Huawei Technologies Co., Ltd. All rights reserved.
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

package com.huawei.hms.cordova.mlbody.helpers;

import android.content.Context;
import android.util.Log;

import com.huawei.hms.cordova.mlbody.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlbody.logger.HMSLogger;
import com.huawei.hms.mlsdk.common.MLFrame;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONObject;

public class CordovaHelpers {
    private static final String TO_STR_NOT_VALID_ERR =
        "Sent event parameter value is not valid! Please add toString() method to the object you "
            + "are passing or do not pass this object as an event parameter.";

    private static String TAG = CordovaHelpers.class.getSimpleName();

    public static void sendEvent(final CordovaPlugin plugin, final String eventName, Object... params) {
        sendEventToJS(plugin, eventName, params);
    }

    public static void sendEvent(final CordovaPlugin plugin, final String eventName) {
        sendEventToJS(plugin, eventName);
    }

    private static void sendEventToJS(CordovaPlugin plugin, String event, Object... objects) {
        Log.i(TAG, "Periodic event " + event + " captured and event " + event + " is sending to JS.");
        StringBuilder jsFunctionBuilder = new StringBuilder();
        jsFunctionBuilder.append("javascript:");
        jsFunctionBuilder.append("window.runHMSEvent('").append(event).append("'");
        if (objects.length > 0) {
            jsFunctionBuilder.append(buildJSEventParameters(objects));
        }
        jsFunctionBuilder.append(");");
        plugin.cordova.getActivity().runOnUiThread(() -> plugin.webView.loadUrl(jsFunctionBuilder.toString()));
    }

    private static String buildJSEventParameters(Object... objects) {
        StringBuilder eventParametersBuilder = new StringBuilder();
        for (Object obj : objects) {
            if (!isToStringValueValid(obj)) {
                Log.w(TAG, TO_STR_NOT_VALID_ERR);
            }
            eventParametersBuilder.append(",").append(obj.toString());
        }
        return eventParametersBuilder.toString();
    }

    private static boolean isToStringValueValid(Object object) {
        String originalToStr = object.getClass().getSimpleName() + "@" + Integer.toHexString(object.hashCode());
        String currentToStr = object.toString();
        return originalToStr.equals(currentToStr);
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
