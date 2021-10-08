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

package com.huawei.hms.cordova.site.basef.handler;

import android.app.Activity;

import org.apache.cordova.CordovaWebView;

public class CordovaEventRunner {
    private static final String TAG = CordovaEventRunner.class.getName();
    private static final String TO_STR_NOT_VALID_ERR = "Sent event parameter value is not valid! Please add toString() method to the object you " +
            "are passing or do not pass this object as an event parameter.";
    private final CordovaWebView webView;
    private final Activity activity;
    private final HMSLogger hmsLogger;

    protected CordovaEventRunner(final CordovaWebView cordovaWebView, final HMSLogger hmsLogger, final Activity activity) {
        this.webView = cordovaWebView;
        this.activity = activity;
        this.hmsLogger = hmsLogger;
    }

    public void sendEvent(String event, Object... params) {
        sendEventToJS(event, params);
    }

    public void sendEvent(String event) {
        sendEventToJS(event);
    }

    private void sendEventToJS(String event, Object... objects) {
        CorLog.info(TAG, "Periodic event " + event + " captured and event " + event + " is sending to JS.");
        StringBuilder jsFunctionBuilder = new StringBuilder();
        jsFunctionBuilder.append("javascript:");
        jsFunctionBuilder.append("window.runHMSEvent('").append(event).append("'");
        if (objects.length > 0) jsFunctionBuilder.append(buildJSEventParameters(objects));
        jsFunctionBuilder.append(");");
        activity.runOnUiThread(() -> {
            webView.loadUrl(jsFunctionBuilder.toString());
            hmsLogger.sendPeriodicEvent(event);
        });
    }

    private String buildJSEventParameters(Object... objects) {
        StringBuilder eventParametersBuilder = new StringBuilder();
        for (Object obj : objects) {
            if (!isToStringValueValid(obj))
                CorLog.warn(TAG, TO_STR_NOT_VALID_ERR);
            eventParametersBuilder.append(",").append(obj.toString());
        }
        return eventParametersBuilder.toString();
    }

    private boolean isToStringValueValid(Object object) {
        String originalToStr = object.getClass().getSimpleName() + "@" + Integer.toHexString(object.hashCode());
        String currentToStr = object.toString();
        return originalToStr.equals(currentToStr);
    }
}


