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

import com.huawei.hms.cordova.push.constants.NotificationConstants;
import com.huawei.hms.cordova.push.hmslogger.HMSLogger;
import com.huawei.hms.cordova.push.utils.Action;
import com.huawei.hms.cordova.push.utils.MapUtils;
import com.huawei.hms.cordova.push.utils.RemoteMessageUtils;
import com.huawei.hms.push.HmsMessaging;
import com.huawei.hms.push.RemoteMessage;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Iterator;
import java.util.Map;


public class HmsPushMessaging implements Action {
    private final String TAG = HmsPushMessaging.class.getSimpleName();
    private static JSONObject initialNotification = null;
    private HMSLogger hmsLogger;
    private CordovaPlugin plugin;
    public CordovaWebView webView;
    public CordovaInterface cordova;


    public HmsPushMessaging(CordovaPlugin plugin) {
        this.cordova = plugin.cordova;
        this.webView = plugin.webView;
        this.plugin = plugin;
        hmsLogger = HMSLogger.getInstance(cordova.getContext());
    }

    public static void setInitial(JSONObject initialNotification) {
        HmsPushMessaging.initialNotification = initialNotification;
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
                sendRemoteMessage(args.getJSONObject(1), callbackContext);
                break;
            case "getInitialNotification":
                getInitialNotification(callbackContext);
                break;
            case "setBackgroundAction":
                setBackgroundAction(args, callbackContext);
                break;
            case "removeBackgroundAction":
                removeBackgroundAction(callbackContext);
                break;
            default:
                Log.i(TAG, "execute: Wrong Action Sent");
        }
    }

    private void setBackgroundAction(JSONArray args, CallbackContext callbackContext) throws JSONException {
        String appId = cordova.getActivity().getApplicationInfo().uid + "";
        SharedPreferences sharedPref = cordova.getContext().getSharedPreferences(cordova.getContext().getPackageName() + "." + appId, Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPref.edit();
        editor.clear();
        editor.apply();
        String data = args.getString(1);
        editor.putString("data",data);
        editor.apply();
        callbackContext.success();
    }

    private void removeBackgroundAction(CallbackContext callbackContext) throws JSONException {
        String appId = cordova.getActivity().getApplicationInfo().uid + "";
        SharedPreferences sharedPref = cordova.getContext().getSharedPreferences(cordova.getContext().getPackageName() + "." + appId, Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPref.edit();
        editor.clear();
        editor.apply();
        callbackContext.success();
    }

    private void isAutoInitEnabled(CallbackContext callBack) {

        try {
            boolean autoInit = HmsMessaging.getInstance(cordova.getContext()).isAutoInitEnabled();
            hmsLogger.sendSingleEvent("isAutoInitEnabled");
            callBack.sendPluginResult(new PluginResult(PluginResult.Status.OK,autoInit));
        } catch (Exception e) {
            hmsLogger.sendSingleEvent("isAutoInitEnabled", e.getLocalizedMessage());
            callBack.error(e.getLocalizedMessage());
        }
    }


    private void setAutoInitEnabled(boolean enabled, CallbackContext callBack) {

        try {
            HmsMessaging.getInstance(cordova.getContext()).setAutoInitEnabled(enabled);
            hmsLogger.sendSingleEvent("setAutoInitEnabled");
            callBack.sendPluginResult(new PluginResult(PluginResult.Status.OK,true));
        } catch (Exception e) {
            hmsLogger.sendSingleEvent("setAutoInitEnabled", e.getLocalizedMessage());
            callBack.error(e.getLocalizedMessage());
        }
    }

    private void turnOnPush(final CallbackContext callBack) {

        try {
            HmsMessaging.getInstance(cordova.getContext()).turnOnPush()
                    .addOnCompleteListener(task -> {
                        if (task.isSuccessful()) {
                            hmsLogger.sendSingleEvent("turnOnPush");
                            callBack.sendPluginResult(new PluginResult(PluginResult.Status.OK,true));
                        } else {
                            hmsLogger.sendSingleEvent("turnOnPush", task.getException().getLocalizedMessage());
                            callBack.error(task.getException().getLocalizedMessage());
                        }
                    });
        } catch (Exception e) {
            callBack.error(e.getLocalizedMessage());
        }
    }


    private void turnOffPush(final CallbackContext callBack) {

        try {
            HmsMessaging.getInstance(cordova.getContext()).turnOffPush()
                    .addOnCompleteListener(task -> {
                        if (task.isSuccessful()) {
                            hmsLogger.sendSingleEvent("turnOffPush");
                            callBack.sendPluginResult(new PluginResult(PluginResult.Status.OK,true));
                        } else {
                            hmsLogger.sendSingleEvent("turnOffPush", task.getException().getLocalizedMessage());
                            callBack.error(task.getException().getLocalizedMessage());
                        }
                    });
        } catch (Exception e) {
            callBack.error(e.getLocalizedMessage());
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
                            callBack.sendPluginResult(new PluginResult(PluginResult.Status.OK,true));
                        } else {
                            hmsLogger.sendSingleEvent("subscribe", task.getException().getLocalizedMessage());
                            callBack.error(task.getException().getLocalizedMessage());
                        }
                    });
        } catch (Exception e) {
            callBack.error(e.getLocalizedMessage());
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
                            callBack.sendPluginResult(new PluginResult(PluginResult.Status.OK,true));
                            hmsLogger.sendSingleEvent("unsubscribe");
                        } else {
                            callBack.error(task.getException().getLocalizedMessage());
                            hmsLogger.sendSingleEvent("unsubscribe", task.getException().getLocalizedMessage());
                        }
                    });
        } catch (Exception e) {
            callBack.error(e.getLocalizedMessage());
        }
    }


    private void sendRemoteMessage(JSONObject arguments, final CallbackContext callBack) throws JSONException {

        try{
            RemoteMessage remoteMessage = RemoteMessageUtils.toRemoteMessage(arguments);
            HmsMessaging.getInstance(cordova.getContext()).send(remoteMessage);
            callBack.sendPluginResult(new PluginResult(PluginResult.Status.OK,true));
            hmsLogger.sendSingleEvent("sendRemoteMessage");
        }catch (Exception e){
            Log.w(TAG, "sendRemoteMessage: "+e.getLocalizedMessage());
            callBack.error(e.getLocalizedMessage());
            hmsLogger.sendSingleEvent("sendRemoteMessage",e.getLocalizedMessage());
        }
    }


    private void getInitialNotification(CallbackContext callback) throws JSONException {

        if (initialNotification != null) {
            callback.success(HmsPushMessaging.initialNotification);
        } else {
            callback.success(new JSONObject());
        }
    }


}
