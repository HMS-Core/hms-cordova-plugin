/*
 * Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

package com.huawei.cordova.hms.push;

import android.util.Log;
import android.content.Intent;
import android.text.TextUtils;
import android.os.Bundle;

import java.util.Map;
import java.util.Random;

import com.huawei.hms.push.HmsMessageService;
import com.huawei.hms.push.RemoteMessage;
import com.huawei.hms.push.SendException;

public class CordovaHmsMessageService extends HmsMessageService {
    private static final String TAG = "HmsMessageService";

    @Override public void onMessageReceived(RemoteMessage message) {
        Log.w(TAG, "onMessageReceived");
        boolean wasHandled = CordovaHmsMessageReceiverManager.onMessageReceived(message);
        if (wasHandled) {
            Log.d(TAG, "Message was handled by a registered receiver");
            return;
        }
        if (HMSPush.getStaticApplicationContext() == null) {
            HMSPush.setStaticApplicationContext(this.getApplicationContext());
        }

        String messageType;

        Map<String, String> data = message.getDataOfMap();

        try {
            if (message.getMessageType() == null) {

                Log.i(TAG, "Received message: DATA");
                messageType = "data";

                Log.d(TAG, "DATA: " + data.toString());

                Bundle bundle = new Bundle();

                bundle.putString("messageType", messageType);
                for (Map.Entry<String,String> e : data.entrySet()) {
                    bundle.putString(e.getKey(), e.getValue());
                }
                HMSPush.sendMessage(bundle, this.getApplicationContext());
            }

        } catch (

            Exception e) {
            HMSPush.handleExceptionWithoutContext(e);
        }
    }

    @Override public void onDeletedMessages() {
        Log.w(TAG, "onDeletedMessages");
        super.onDeletedMessages();
    }

    @Override public void onMessageSent(String msgId) {
        Log.w(TAG, "onMessageSent");
        super.onMessageSent(msgId);
    }

    @Override public void onSendError(String msgId, Exception exception) {
        Log.w(TAG, "onMessageReceived");
        super.onSendError(msgId, exception);
    }

    @Override public void onNewToken(String token) {
        try {
            super.onNewToken(token);
            Log.w(TAG, "onNewToken");
            HMSPush.sendToken(token);
        } catch (Exception e) {
            Log.e(TAG, e.getMessage());
        }
    }

}
