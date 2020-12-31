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

package com.huawei.hms.cordova.health.basef.handler;

import android.app.Activity;
import android.util.Log;
import org.apache.cordova.CordovaWebView;

public class CordovaEventRunner {
    private static final String TAG = CordovaEventRunner.class.getName();

    private final HMSLogger hmsLogger;
    private final CordovaWebView webView;
    private final Activity activity;

    CordovaEventRunner(final CordovaWebView cordovaWebView, final Activity activity, final HMSLogger hmsLogger) {
        this.hmsLogger = hmsLogger;
        this.webView = cordovaWebView;
        this.activity = activity;
    }

    public void sendEvent(final String event, final Object... params) {
        hmsLogger.sendPeriodicEvent(event);
        sendEventToJS(event, params);
    }

    public void sendEvent(final String event) {
        hmsLogger.sendPeriodicEvent(event);
        sendEventToJS(event);
    }

    private void sendEventToJS(final String event, final Object... objects) {
        Log.i(CordovaEventRunner.TAG,
            "Periodic event " + event + " captured and event " + event + " is sending to JS.");
        final StringBuilder jsFunctionBuilder = new StringBuilder();
        jsFunctionBuilder.append("javascript:");
        jsFunctionBuilder.append("window.runHMSEvent('").append(event).append("'");
        if (objects.length > 0) {
            jsFunctionBuilder.append(buildJSEventParameters(objects));
        }
        jsFunctionBuilder.append(");");
        activity.runOnUiThread(() -> webView.loadUrl(jsFunctionBuilder.toString()));
    }

    private String buildJSEventParameters(final Object... objects) {
        final String toStrNotValidErr =
            "Sent event parameter value is not valid! Please add toString() method to the object you " +
                "are passing or do not pass this object as an event parameter. Objects current toString value is %!s(MISSING).";
        final StringBuilder eventParametersBuilder = new StringBuilder();
        for (final Object obj : objects) {
            eventParametersBuilder.append(",").append(obj.toString());
        }
        return eventParametersBuilder.toString();
    }
}
