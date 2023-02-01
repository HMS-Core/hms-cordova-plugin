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
import android.os.Bundle;
import android.util.Log;
import android.webkit.WebView;

import com.huawei.hms.cordova.push.constants.Core;
import com.huawei.hms.cordova.push.utils.RemoteMessageUtils;
import com.huawei.hms.cordova.push.utils.ResolvableExceptionUtils;
import com.huawei.hms.push.HmsMessageService;
import com.huawei.hms.push.RemoteMessage;
import com.huawei.hms.push.SendException;

import org.json.JSONException;

import java.util.Locale;

import static com.huawei.hms.cordova.push.utils.HtmlUtils.getItemResponseListener;
import static com.huawei.hms.cordova.push.utils.HtmlUtils.onBackgroundRemoteMessageReceived;
import static com.huawei.hms.cordova.push.utils.HtmlUtils.readFile;
import static com.huawei.hms.cordova.push.utils.HtmlUtils.wrapInsideScriptTag;

public class HmsPushMessageService extends HmsMessageService {

    private final static String TAG = HmsPushMessageService.class.getSimpleName();

    private static Boolean isApplicationRunning = false;

    private WebView webView;

    public static void setApplicationRunningStatus(boolean isRunning) {
        isApplicationRunning = isRunning;
    }

    @Override
    public void onMessageReceived(RemoteMessage message) {
        Log.w(TAG, "** onMessageReceived **");

        try {
            if (isApplicationRunning) {
                HmsPushMessagePublisher.sendMessageReceivedEvent(message);
            } else {
                if (getApplication() == null) {
                    return;
                }
                if (webView == null) {
                    webView = new WebView(getApplicationContext());
                    webView.getSettings().setSavePassword(false);
                    webView.getSettings().setJavaScriptEnabled(true);
                    webView.getSettings().setDomStorageEnabled(true);
                    webView.getSettings().setAllowFileAccess(true);
                    webView.getSettings().setAllowFileAccessFromFileURLs(true);
                    webView.getSettings().setAllowContentAccess(true);
                    webView.addJavascriptInterface(new BackgroundJavaScriptInterface(getApplicationContext()),
                        "HmsLocalNotification");
                    webView.addJavascriptInterface(new BackgroundWebViewLocalStorage(getApplicationContext(), webView),
                        "HmsPush");
                }

                String myAppId = getApplicationContext().getApplicationInfo().uid + "";
                SharedPreferences sharedPref = getApplication().getApplicationContext()
                    .getSharedPreferences(getPackageName() + "." + myAppId, Context.MODE_PRIVATE);
                String filename = sharedPref.getString("backgroundFileName", null);
                if (filename == null) {
                    return;
                }

                String onRemoteMessageEvent = String.format(Locale.ENGLISH,
                    "if(window.hasOwnProperty('%s')) window['%s'](%s)",
                    Core.Event.BACKGROUND_REMOTE_DATA_MESSAGE_RECEIVED,
                    Core.Event.BACKGROUND_REMOTE_DATA_MESSAGE_RECEIVED, RemoteMessageUtils.fromMap(message));
                String definedFunction = wrapInsideScriptTag(
                    onBackgroundRemoteMessageReceived() + getItemResponseListener() + readFile(this, filename)
                        + onRemoteMessageEvent);
                webView.loadDataWithBaseURL("file:///android_assets/", definedFunction, "text/html", "utf-8", null);
            }
        } catch (JSONException e) {
            Log.w(TAG, "onMessageReceived: " + e.getLocalizedMessage());
        }
    }

    @Override
    public void onMessageSent(String msgId) {
        super.onMessageSent(msgId);
        HmsPushMessagePublisher.sendOnMessageSentEvent(msgId);
    }

    @Override
    public void onMessageDelivered(String msgId, Exception e) {
        HmsPushMessagePublisher.sendOnMessageDeliveredEvent(msgId, ((SendException) e).getErrorCode(),
            e.getLocalizedMessage());
    }

    @Override
    public void onSendError(String msgId, Exception e) {
        HmsPushMessagePublisher.sendOnMessageSentErrorEvent(msgId, ((SendException) e).getErrorCode(),
            e.getLocalizedMessage());
    }

    @Override
    public void onNewToken(String token) {
        HmsPushMessagePublisher.sendOnNewTokenEvent(token);
    }

    @Override
    public void onTokenError(Exception e) {
        HmsPushMessagePublisher.sendTokenErrorEvent(e);
    }

    @Override
    public void onNewToken(String s, Bundle bundle) {
        HmsPushMessagePublisher.sendOnNewMultiSenderTokenEvent(s, bundle);
    }

    @Override
    public void onTokenError(Exception e, Bundle bundle) {
        HmsPushMessagePublisher.sendMultiSenderTokenErrorEvent(e, bundle);
        new ResolvableExceptionUtils(e, webView, TAG);
    }
}
