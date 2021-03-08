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

package com.huawei.hms.cordova.push.remote;

import android.content.Context;
import android.content.SharedPreferences;
import android.util.Log;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.huawei.hms.cordova.push.HMSPush;
import com.huawei.hms.cordova.push.hmslogger.HMSLogger;
import com.huawei.hms.cordova.push.utils.ApplicationUtils;
import com.huawei.hms.cordova.push.utils.RemoteMessageUtils;
import com.huawei.hms.push.HmsMessageService;
import com.huawei.hms.push.RemoteMessage;
import com.huawei.hms.push.SendException;

import org.json.JSONException;

import java.util.Locale;

public class HmsPushMessageService extends HmsMessageService {
    private final String TAG = HmsPushMessageService.class.getSimpleName();
    private HMSLogger hmsLogger;
    private WebView webView;

    @Override
    public void onMessageReceived(final RemoteMessage message) {
        Log.w(TAG, "** onMessageReceived **");
        hmsLogger = HMSLogger.getInstance(getApplicationContext());
        try {
            final boolean isApplicationInForeground = ApplicationUtils.isApplicationInForeground(
                getApplicationContext());
            if (isApplicationInForeground) {
                HmsMessagePublisher.sendMessageReceivedEvent(message);
                hmsLogger.sendPeriodicEvent("onMessageReceived");
            } else {
                final String myAppId = getApplicationContext().getApplicationInfo().uid + "";
                if (getApplication() == null) {
                    return;
                }
                final SharedPreferences sharedPref = getApplication().getApplicationContext()
                    .getSharedPreferences(getPackageName() + "." + myAppId, Context.MODE_PRIVATE);
                if (webView == null) {
                    webView = new WebView(getApplicationContext());
                    webView.setWebViewClient(new WebViewClient());
                    webView.getSettings().setSavePassword(false);
                    webView.getSettings().setJavaScriptEnabled(true);
                    webView.addJavascriptInterface(new BackgroundJavaScriptInterface(getApplication()),
                        "HmsLocalNotification");

                }
                String preFunction = sharedPref.getString("data", null);
                if (preFunction != null) {
                    preFunction = preFunction.replace("=>", "");
                    preFunction = preFunction.replace("function", "");
                }
                String function = String.format(Locale.ENGLISH, "function callback%s", preFunction);
                String s = "[\"HmsLocalNotification\"].backgroundLocalNotification";
                StringBuilder newFunction = new StringBuilder();
                if (function.contains("ionic")) {
                    final String[] lines = function.split("\n");
                    for (final String line : lines) {
                        if (line.contains(s)) {
                            final int start = line.indexOf("(");
                            final int end = line.indexOf(";");
                            final String param = line.substring(start, end);
                            newFunction.append("HmsLocalNotification.backgroundLocalNotification(")
                                .append(param)
                                .append(");");
                        } else {
                            newFunction.append(line);
                        }
                    }
                    function = newFunction.toString();
                }
                webView.evaluateJavascript(function, null);
                webView.evaluateJavascript(
                    String.format(Locale.ENGLISH, "callback(%s);", RemoteMessageUtils.fromMap(message)), null);
            }
        } catch (final JSONException e) {
            Log.w(TAG, "onMessageReceived: " + e.getLocalizedMessage());
            hmsLogger.sendPeriodicEvent("onMessageReceived", e.getLocalizedMessage());
        }
    }

    @Override
    public void onDeletedMessages() {
        if (HMSPush.getPlugin() == null) {
            return;
        }
        hmsLogger = HMSLogger.getInstance(HMSPush.getPlugin().cordova.getContext());
        Log.w(TAG, "** onDeletedMessages **");
        hmsLogger.sendPeriodicEvent("onDeletedMessages");
    }

    @Override
    public void onMessageSent(final String msgId) {
        if (HMSPush.getPlugin() == null) {
            return;
        }
        hmsLogger = HMSLogger.getInstance(HMSPush.getPlugin().cordova.getContext());
        Log.w(TAG, "** onMessageSent **");
        try {
            HmsMessagePublisher.sendOnMessageSentEvent(msgId);
            hmsLogger.sendPeriodicEvent("onMessageSent");
        } catch (final JSONException e) {
            Log.w(TAG, "onMessageSent: " + e.getLocalizedMessage());
            hmsLogger.sendPeriodicEvent("onMessageSent", e.getLocalizedMessage());
        }
    }

    @Override
    public void onSendError(final String msgId, final Exception exception) {
        if (HMSPush.getPlugin() == null) {
            return;
        }
        hmsLogger = HMSLogger.getInstance(HMSPush.getPlugin().cordova.getContext());
        Log.w(TAG, "** onSendError **");
        final int errorCode = ((SendException) exception).getErrorCode();
        final String errorInfo = exception.getLocalizedMessage();
        try {
            HmsMessagePublisher.sendOnMessageSentErrorEvent(msgId, errorCode, errorInfo);
            hmsLogger.sendPeriodicEvent("onSendError");
        } catch (final JSONException e) {
            Log.w(TAG, "onSendError: " + e.getLocalizedMessage());
            hmsLogger.sendPeriodicEvent("onSendError", e.getLocalizedMessage());
        }
    }

    @Override
    public void onMessageDelivered(final String msgId, final Exception e) {
        if (HMSPush.getPlugin() == null) {
            return;
        }
        hmsLogger = HMSLogger.getInstance(HMSPush.getPlugin().cordova.getContext());
        Log.w(TAG, "** onMessageDelivered **");
        try {
            if (e == null) {
                HmsMessagePublisher.sendOnMessageDeliveredEvent(msgId, 0, "");
            } else {
                HmsMessagePublisher.sendOnMessageDeliveredEvent(msgId, ((SendException) e).getErrorCode(),
                    e.getLocalizedMessage());
            }
            hmsLogger.sendPeriodicEvent("onMessageDelivered");
        } catch (final JSONException ex) {
            hmsLogger.sendPeriodicEvent("onMessageDelivered", ex.getLocalizedMessage());
        }
    }

    @Override
    public void onTokenError(final Exception e) {
        if (HMSPush.getPlugin() == null) {
            return;
        }
        hmsLogger = HMSLogger.getInstance(HMSPush.getPlugin().cordova.getContext());
        Log.w(TAG, "** onTokenError **");
        try {
            HmsMessagePublisher.sendTokenErrorEvent(e);
            hmsLogger.sendPeriodicEvent("onTokenError");
        } catch (final JSONException ex) {
            Log.w(TAG, "onTokenError: " + e.getLocalizedMessage());
            hmsLogger.sendPeriodicEvent("onTokenError", e.getLocalizedMessage());
        }
    }

    @Override
    public void onNewToken(final String token) {
        if (HMSPush.getPlugin() == null) {
            return;
        }
        hmsLogger = HMSLogger.getInstance(HMSPush.getPlugin().cordova.getContext());
        try {
            super.onNewToken(token);
            HmsMessagePublisher.sendOnNewTokenEvent(token);
            hmsLogger.sendPeriodicEvent("onNewToken");
        } catch (final Exception e) {
            Log.e(TAG, e.getLocalizedMessage());
            hmsLogger.sendPeriodicEvent("onNewToken", e.getLocalizedMessage());
        }
    }
}
