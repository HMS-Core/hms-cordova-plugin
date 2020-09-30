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

import com.huawei.hms.cordova.push.HMSPush;
import com.huawei.hms.cordova.push.utils.CordovaUtils;
import com.huawei.hms.push.RemoteMessage;
import com.huawei.hms.cordova.push.constants.Core;
import com.huawei.hms.cordova.push.utils.RemoteMessageUtils;

import org.apache.cordova.CordovaPlugin;

import org.json.JSONException;
import org.json.JSONObject;

public class HmsMessagePublisher {
    private static String TAG = HmsMessagePublisher.class.getSimpleName();

    public static void sendOnNewTokenEvent(String token) throws JSONException {
        JSONObject params = new JSONObject();
        params.put(Core.Event.Result.TOKEN, token);
        CordovaUtils.sendEvent(HMSPush.getPlugin(),Core.Event.TOKEN_RECEIVED_EVENT,params);

    }


    public static void sendMessageReceivedEvent(RemoteMessage remoteMessage) throws JSONException {
        CordovaPlugin plugin=HMSPush.getPlugin();
        JSONObject params = new JSONObject();
        params.put(Core.Event.Result.MSG, RemoteMessageUtils.fromMap(remoteMessage));
        
        if(plugin!=null) {
            CordovaUtils.sendEvent(plugin, Core.Event.REMOTE_DATA_MESSAGE_RECEIVED, params);
        }

    }

    public static void sendTokenErrorEvent(Exception e) throws JSONException {

        JSONObject params = new JSONObject();
        params.put(Core.Event.Result.EXCEPTION, e.getMessage());
        CordovaUtils.sendEvent(HMSPush.getPlugin(),Core.Event.ON_TOKEN_ERROR_EVENT,params);

    }

    public static void sendOnMessageSentEvent(String msgId) throws JSONException {

        JSONObject params = new JSONObject();
        params.put(Core.Event.Result.MSG_ID, msgId);
        CordovaUtils.sendEvent(HMSPush.getPlugin(),Core.Event.ON_PUSH_MESSAGE_SENT,params);


    }

    public static void sendOnMessageSentErrorEvent(String msgId, int errorCode, String errorInfo) throws JSONException {

        JSONObject params = new JSONObject();
        params.put(Core.Event.Result.RESULT, errorCode + "");
        params.put(Core.Event.Result.MSG_ID, msgId);
        params.put(Core.Event.Result.RESULT_INFO, errorInfo);
        CordovaUtils.sendEvent(HMSPush.getPlugin(),Core.Event.ON_PUSH_MESSAGE_SENT_ERROR,params);


    }

    public static void sendOnMessageDeliveredEvent(String msgId, int errorCode, String errorInfo) throws JSONException {

        JSONObject params = new JSONObject();
        params.put(Core.Event.Result.RESULT, errorCode + "");
        params.put(Core.Event.Result.MSG_ID, msgId);
        params.put(Core.Event.Result.RESULT_INFO, errorInfo);

        CordovaUtils.sendEvent(HMSPush.getPlugin(),Core.Event.ON_PUSH_MESSAGE_SENT_DELIVERED,params);
    }

}

