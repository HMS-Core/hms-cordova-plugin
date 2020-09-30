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

import android.util.Log;

import com.huawei.hms.cordova.push.hmslogger.HMSLogger;
import com.huawei.hms.cordova.push.utils.Action;
import com.huawei.hms.cordova.push.utils.RemoteMessageUtils;
import com.huawei.hms.push.HmsMessaging;
import com.huawei.hms.push.RemoteMessage;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;



public class HmsPushMessaging implements Action {
    private final String TAG = HmsPushMessaging.class.getSimpleName();
    private static RemoteMessage initialNotification = null;
    private HMSLogger hmsLogger;
    private CordovaPlugin plugin;
    public CordovaWebView webView;
    public CordovaInterface cordova;


    public HmsPushMessaging(CordovaPlugin plugin){
        this.cordova=plugin.cordova;
        this.webView=plugin.webView;
        this.plugin=plugin;
        hmsLogger= HMSLogger.getInstance(cordova.getContext());
    }

    public static void setInitial(RemoteMessage remoteMessage) {
        initialNotification=remoteMessage;
    }

    public static RemoteMessage getInitial() {
        return initialNotification;
    }

    public void execute(String action, final JSONArray args, final CallbackContext callbackContext)
        throws JSONException {
        hmsLogger.startMethodExecutionTimer(action);
        switch (action) {
            case "isAutoInitEnabled":
                isAutoInitEnabled(callbackContext);
                break;
            case "setAutoInitEnabled":
                setAutoInitEnabled(args.getBoolean(1), callbackContext);
                break;
            case "turnOffPush":
                turnOffPush(callbackContext);
                break;
            case "turnOnPush":
                turnOnPush(callbackContext);
                break;
            case "subscribe":
                subscribe(args.getString(1), callbackContext);
                break;
            case "unsubscribe":
                unsubscribe(args.getString(1), callbackContext);
                break;
            case "sendRemoteMessage":
                sendRemoteMessage(args.getJSONObject(1));
                break;
            case "getInitialNotification":
                getInitialNotification(callbackContext);
                break;
            default:
                Log.i(TAG, "execute: Wrong Action Sent");
        }
}

    private void isAutoInitEnabled(CallbackContext callBack) {

        try {
            String autoInit = HmsMessaging.getInstance(cordova.getContext()).isAutoInitEnabled() + "";
            hmsLogger.sendSingleEvent("isAutoInitEnabled");
            callBack.success(autoInit);
        } catch (Exception e) {
            hmsLogger.sendSingleEvent("isAutoInitEnabled","500");
            callBack.error(e.getMessage());
        }
    }


    private void setAutoInitEnabled(boolean enabled, CallbackContext callBack) {

        try {
            HmsMessaging.getInstance(cordova.getContext()).setAutoInitEnabled(enabled);
            hmsLogger.sendSingleEvent("setAutoInitEnabled");
            callBack.success();
        } catch (Exception e) {
            hmsLogger.sendSingleEvent("setAutoInitEnabled","500");
            callBack.error( e.getMessage());
        }
    }

    private void turnOnPush(final CallbackContext callBack) {

        try {
            HmsMessaging.getInstance(cordova.getContext()).turnOnPush()
                .addOnCompleteListener(task -> {
                    if (task.isSuccessful()) {
                        hmsLogger.sendSingleEvent("turnOnPush");
                        callBack.success();
                    } else {
                        hmsLogger.sendSingleEvent("turnOnPush","500");
                        callBack.error(task.getException().getMessage());
                    }
                });
        } catch (Exception e) {
            callBack.error(e.getMessage());
        }
    }


    private void turnOffPush(final CallbackContext callBack) {

        try {
            HmsMessaging.getInstance(cordova.getContext()).turnOffPush()
                .addOnCompleteListener(task -> {
                    if (task.isSuccessful()) {
                        hmsLogger.sendSingleEvent("turnOffPush");
                        callBack.success();
                    } else {
                        hmsLogger.sendSingleEvent("turnOffPush","500");
                        callBack.error(task.getException().getMessage());
                    }
                });
        } catch (Exception e) {
            callBack.error(e.getMessage());
        }
    }

    private void subscribe(String topic, final CallbackContext callBack) {

        if (topic == null || topic.equals("")) {
            callBack.error("topic is empty!");
            return;
        }
        try {
            HmsMessaging.getInstance(cordova.getContext()).subscribe(topic)
                .addOnCompleteListener(task -> {
                    if (task.isSuccessful()) {
                        hmsLogger.sendSingleEvent("subscribe");
                        callBack.success();
                    } else {
                        hmsLogger.sendSingleEvent("subscribe","500");
                        callBack.error(task.getException().getMessage());
                    }
                });
        } catch (Exception e) {
            callBack.error(e.getMessage());
        }
    }


    private void unsubscribe(String topic, final CallbackContext callBack) {

        if (topic == null || topic.equals("")) {
            callBack.error("topic is empty!");
            return;
        }
        try {
            HmsMessaging.getInstance(cordova.getContext()).unsubscribe(topic)
                .addOnCompleteListener(task -> {
                    if (task.isSuccessful()) {
                        callBack.success();
                        hmsLogger.sendSingleEvent("unsubscribe");
                    } else {
                        callBack.error(task.getException().getMessage());
                        hmsLogger.sendSingleEvent("unsubscribe","500");
                    }
                });
        } catch (Exception e) {
            callBack.error(e.getMessage());
        }
    }



    private void sendRemoteMessage(JSONObject arguments) throws JSONException {

        RemoteMessage remoteMessage = RemoteMessageUtils.toRemoteMessage(arguments);
        HmsMessaging.getInstance(cordova.getContext())
            .send(remoteMessage);
        hmsLogger.sendSingleEvent("sendRemoteMessage");
    }


    private void getInitialNotification(CallbackContext callback) throws JSONException {

        if(initialNotification != null){
            callback.success(RemoteMessageUtils.fromMap(initialNotification));
        }else {
            callback.success("Null");
        }
    }



}
