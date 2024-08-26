/*
    Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.

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

import android.os.Bundle;
import android.util.Log;

import com.huawei.hms.cordova.push.HMSPush;
import com.huawei.hms.cordova.push.constants.Core;
import com.huawei.hms.cordova.push.utils.BundleUtils;
import com.huawei.hms.cordova.push.utils.CordovaUtils;
import com.huawei.hms.cordova.push.utils.RemoteMessageUtils;
import com.huawei.hms.push.RemoteMessage;

import org.json.JSONException;
import org.json.JSONObject;

public class HmsPushMessagePublisher {
    private static final String TAG = HmsPushMessagePublisher.class.getSimpleName();

    public static void sendOnNewTokenEvent(String token) {
        try {
            JSONObject params = new JSONObject();
            params.put(Core.Event.Result.TOKEN, token);
            CordovaUtils.sendEvent(HMSPush.getCordova(), HMSPush.getWebView(), Core.Event.TOKEN_RECEIVED_EVENT, params);
        } catch (JSONException ex) {
            Log.w(TAG, "sendOnNewTokenEvent: " + ex.getLocalizedMessage());
        }
    }

    public static void sendOnNewMultiSenderTokenEvent(String token, Bundle bundle) {
        try {
            JSONObject params = new JSONObject();
            params.put(Core.Event.Result.TOKEN, token);
            params.put(Core.Event.Result.DATA, BundleUtils.convertJSON(bundle));
            CordovaUtils.sendEvent(HMSPush.getCordova(), HMSPush.getWebView(),
                Core.Event.ON_MULTI_SENDER_TOKEN_RECEIVED_EVENT, params);
        } catch (JSONException ex) {
            Log.w(TAG, "sendOnNewMultiSenderTokenEvent: " + ex.getLocalizedMessage());
        }
    }

    public static void sendMessageReceivedEvent(RemoteMessage remoteMessage) {
        try {
            JSONObject params = new JSONObject();
            params.put(Core.Event.Result.MSG, RemoteMessageUtils.fromMap(remoteMessage));
            CordovaUtils.sendEvent(HMSPush.getCordova(), HMSPush.getWebView(), Core.Event.REMOTE_DATA_MESSAGE_RECEIVED,
                params);
        } catch (JSONException ex) {
            Log.w(TAG, "sendMessageReceivedEvent: " + ex.getLocalizedMessage());
        }
    }

    public static void sendTokenErrorEvent(Exception e) {
        try {
            JSONObject params = new JSONObject();
            params.put(Core.Event.Result.EXCEPTION, e.getLocalizedMessage());
            CordovaUtils.sendEvent(HMSPush.getCordova(), HMSPush.getWebView(), Core.Event.ON_TOKEN_ERROR_EVENT, params);
        } catch (JSONException ex) {
            Log.w(TAG, "sendTokenErrorEvent: " + ex.getLocalizedMessage());
        }
    }

    public static void sendMultiSenderTokenErrorEvent(Exception e, Bundle bundle) {
        try {
            JSONObject params = new JSONObject();
            params.put(Core.Event.Result.EXCEPTION, e.getLocalizedMessage());
            params.put(Core.Event.Result.DATA, BundleUtils.convertJSON(bundle));
            CordovaUtils.sendEvent(HMSPush.getCordova(), HMSPush.getWebView(),
                Core.Event.ON_MULTI_SENDER_TOKEN_ERROR_EVENT, params);
        } catch (JSONException ex) {
            Log.w(TAG, "sendMultiSenderTokenErrorEvent: " + ex.getLocalizedMessage());
        }
    }

    public static void sendOnMessageSentEvent(String msgId) {
        try {
            JSONObject params = new JSONObject();
            params.put(Core.Event.Result.MSG_ID, msgId);
            CordovaUtils.sendEvent(HMSPush.getCordova(), HMSPush.getWebView(), Core.Event.ON_PUSH_MESSAGE_SENT, params);
        } catch (JSONException ex) {
            Log.w(TAG, "sendOnMessageSentEvent: " + ex.getLocalizedMessage());
        }
    }

    public static void sendOnMessageSentErrorEvent(String msgId, int errorCode, String errorInfo) {
        try {
            JSONObject params = new JSONObject();
            params.put(Core.Event.Result.RESULT, errorCode + "");
            params.put(Core.Event.Result.MSG_ID, msgId);
            params.put(Core.Event.Result.RESULT_INFO, errorInfo);
            CordovaUtils.sendEvent(HMSPush.getCordova(), HMSPush.getWebView(), Core.Event.ON_PUSH_MESSAGE_SENT_ERROR,
                params);
        } catch (JSONException ex) {
            Log.w(TAG, "sendOnMessageSentErrorEvent: " + ex.getLocalizedMessage());
        }
    }

    public static void sendOnMessageDeliveredEvent(String msgId, int errorCode, String errorInfo) {
        try {
            JSONObject params = new JSONObject();
            params.put(Core.Event.Result.RESULT, errorCode + "");
            params.put(Core.Event.Result.MSG_ID, msgId);
            params.put(Core.Event.Result.RESULT_INFO, errorInfo);
            CordovaUtils.sendEvent(HMSPush.getCordova(), HMSPush.getWebView(),
                Core.Event.ON_PUSH_MESSAGE_SENT_DELIVERED, params);
        } catch (JSONException ex) {
            Log.w(TAG, "sendOnMessageDeliveredEvent: " + ex.getLocalizedMessage());
        }
    }
}
