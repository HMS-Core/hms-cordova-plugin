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

package com.huawei.hms.cordova.push.remote;

import android.content.Intent;
import android.util.Log;

import com.huawei.hms.cordova.push.HMSPush;
import com.huawei.hms.cordova.push.hmslogger.HMSLogger;
import com.huawei.hms.push.HmsMessageService;
import com.huawei.hms.push.RemoteMessage;
import com.huawei.hms.push.SendException;

import org.json.JSONException;


public class HmsPushMessageService extends HmsMessageService {
    private final String TAG = HmsPushMessageService.class.getSimpleName();
    private HMSLogger hmsLogger;
    @Override
    public void onMessageReceived(RemoteMessage message) {
        if(HMSPush.getPlugin()==null)
            return;
        hmsLogger = HMSLogger.getInstance(HMSPush.getPlugin().cordova.getContext());
        Log.w(TAG, "** onMessageReceived **");
        try {
            HmsMessagePublisher.sendMessageReceivedEvent(message);
            hmsLogger.sendPeriodicEvent("onMessageReceived");
        } catch (JSONException e) {
            Log.w(TAG, "onMessageReceived: "+e.getLocalizedMessage() );
            hmsLogger.sendPeriodicEvent("onMessageReceived","500");
        }
    }

    @Override
    public void onDeletedMessages() {
        if(HMSPush.getPlugin()==null)
            return;
        hmsLogger = HMSLogger.getInstance(HMSPush.getPlugin().cordova.getContext());
        Log.w(TAG, "** onDeletedMessages **");
        hmsLogger.sendPeriodicEvent("onDeletedMessages");
    }

    @Override
    public void onMessageSent(String msgId) {
        if(HMSPush.getPlugin()==null)
            return;
        hmsLogger = HMSLogger.getInstance(HMSPush.getPlugin().cordova.getContext());
        Log.w(TAG, "** onMessageSent **");

        try {
            HmsMessagePublisher.sendOnMessageSentEvent(msgId);
            hmsLogger.sendPeriodicEvent("onMessageSent");
        } catch (JSONException e) {
            Log.w(TAG, "onMessageSent: "+e.getLocalizedMessage());
            hmsLogger.sendPeriodicEvent("onMessageSent","500");
        }
    }

    @Override
    public void onSendError(String msgId, Exception exception) {
        if(HMSPush.getPlugin()==null)
            return;
        hmsLogger = HMSLogger.getInstance(HMSPush.getPlugin().cordova.getContext());
        Log.w(TAG, "** onSendError **");

        int errorCode = ((SendException) exception).getErrorCode();
        String errorInfo = exception.getMessage();
        try {
            HmsMessagePublisher.sendOnMessageSentErrorEvent(msgId, errorCode, errorInfo);
            hmsLogger.sendPeriodicEvent("onSendError");
        } catch (JSONException e) {
            Log.w(TAG, "onSendError: "+e.getLocalizedMessage() );
            hmsLogger.sendPeriodicEvent("onSendError","500");
        }
    }

    @Override
    public void onMessageDelivered(String msgId, Exception e) {
        if(HMSPush.getPlugin()==null)
            return;
        hmsLogger = HMSLogger.getInstance(HMSPush.getPlugin().cordova.getContext());
        Log.w(TAG, "** onMessageDelivered **");
        if (e == null) {
            try {
                HmsMessagePublisher.sendOnMessageDeliveredEvent(msgId, 0, "");
                hmsLogger.sendPeriodicEvent("onMessageDelivered");
            } catch (JSONException ex) {
                Log.w(TAG, "*onMessageDelivered*");
                hmsLogger.sendPeriodicEvent("onMessageDelivered","500");
            }
        } else {
            int errorCode = ((SendException) e).getErrorCode();
            String errorInfo = e.getMessage();
            try {
                HmsMessagePublisher.sendOnMessageDeliveredEvent(msgId, errorCode, errorInfo);
                hmsLogger.sendPeriodicEvent("onMessageDelivered");
            } catch (JSONException ex) {
                Log.w(TAG, "onMessageDelivered: "+e.getLocalizedMessage() );
                hmsLogger.sendPeriodicEvent("onMessageDelivered","500");
            }
        }
    }

    @Override
    public void onTokenError(Exception e) {
        if(HMSPush.getPlugin()==null)
            return;
        hmsLogger = HMSLogger.getInstance(HMSPush.getPlugin().cordova.getContext());
        Log.w(TAG, "** onTokenError **");
        try {
            HmsMessagePublisher.sendTokenErrorEvent(e);
            hmsLogger.sendPeriodicEvent("onTokenError");
        } catch (JSONException ex) {
            Log.w(TAG, "onTokenError: "+e.getLocalizedMessage() );
            hmsLogger.sendPeriodicEvent("onTokenError","500");
        }
    }

    @Override
    public int onStartCommand(Intent intent, int i, int i1) {
        Log.w(TAG, "** onStartCommand **");
        int result = super.onStartCommand(intent, i, i1);
        return result;
    }

    @Override
    public void onNewToken(String token) {
        if(HMSPush.getPlugin()==null)
            return;
        hmsLogger = HMSLogger.getInstance(HMSPush.getPlugin().cordova.getContext());
        try {
            super.onNewToken(token);
            HmsMessagePublisher.sendOnNewTokenEvent(token);
            hmsLogger.sendPeriodicEvent("onNewToken");
        } catch (Exception e) {
            Log.e(TAG, e.getMessage());
            hmsLogger.sendPeriodicEvent("onNewToken","500");
        }
    }
}