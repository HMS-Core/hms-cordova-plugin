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

import java.util.ArrayList;
import java.util.Set;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONException;

import org.apache.cordova.PluginResult;

import android.content.Context;
import android.widget.Toast;
import android.text.TextUtils;
import android.util.Log;
import android.os.Bundle;
import android.app.Activity;
import android.content.Intent;

import com.huawei.agconnect.config.AGConnectServicesConfig;

import com.huawei.hmf.tasks.OnCompleteListener;
import com.huawei.hmf.tasks.OnFailureListener;
import com.huawei.hmf.tasks.OnSuccessListener;
import com.huawei.hmf.tasks.Task;
import com.huawei.hms.aaid.HmsInstanceId;
import com.huawei.hms.aaid.entity.AAIDResult;
import com.huawei.hms.push.HmsMessaging;
import com.huawei.hms.common.ApiException;

import com.huawei.cordova.hms.push.Constants;

public class HMSPush extends CordovaPlugin {
    private static volatile HMSPush instance = null;

    private static final String TAG = "[CordovaPluginHMSPush] ";

    private static final String ACTION_TEST = "test";

    private static final String ACTION_TURN_OFF_PUSH = "turnOffPush";

    private static final String ACTION_TURN_ON_PUSH = "turnOnPush";

    private static final String ACTION_GET_ID = "getID";

    private static final String ACTION_GET_AAID = "getAAID";

    private static final String ACTION_GET_TOKEN = "getToken";

    private static final String ACTION_GET_CREATION_TIME = "getCreationTime";

    private static final String ACTION_DELETE_AAID = "deleteAAID";

    private static final String ACTION_DELETE_TOKEN = "deleteToken";

    private static final String ACTION_SUBSCRIBE = "subscribe";

    private static final String ACTION_UNSUBSCRIBE = "unsubscribe";

    private static final String ACTION_DISABLE_AUTO_INIT = "disableAutoInit";

    private static final String ACTION_ENABLE_AUTO_INIT = "enableAutoInit";

    private static final String ACTION_IS_AUTO_INIT_ENABLED = "isAutoInitEnabled";

    private static final String ACTION_ON_MESSAGE_RECEIVED = "onMessageReceived";

    static volatile Context applicationContext = null;

    private static volatile CallbackContext tokenCallbackContext;

    private static volatile ArrayList<Bundle> notificationStack = new ArrayList<Bundle>();

    private static volatile CallbackContext notificationCallbackContext;

    public static synchronized HMSPush getStaticInstance() {
        return HMSPush.instance;
    }

    public static synchronized HMSPush setStaticInstance(HMSPush instance) {
        return HMSPush.instance = instance;
    }

    public static synchronized CallbackContext getStaticNotificationCallbackContext() {
        return HMSPush.notificationCallbackContext;
    }

    public static synchronized CallbackContext setStaticNotificationCallbackContext(CallbackContext callbackContext) {
        return HMSPush.notificationCallbackContext = callbackContext;
    }

    public static synchronized CallbackContext getStaticTokenCallbackContext() {
        return HMSPush.tokenCallbackContext;
    }
    
    public static synchronized CallbackContext setStaticTokenCallbackContext(CallbackContext callbackContext) {
        return HMSPush.tokenCallbackContext = callbackContext;
    }

    public static synchronized Context getStaticApplicationContext() {
        return HMSPush.applicationContext;
    }
    
    public static synchronized Context setStaticApplicationContext(Context context) {
        return HMSPush.applicationContext = context;
    }

    @Override protected void pluginInitialize() {
        HMSPush.setStaticInstance(this);
        HMSPush.setStaticApplicationContext(this.cordova.getActivity().getApplicationContext());
    }

    @Override public void onReset() {
        HMSPush.setStaticNotificationCallbackContext(null);
        HMSPush.setStaticTokenCallbackContext(null);
    }

    @Override public void onDestroy() {
        HMSPush.setStaticInstance(null);
        HMSPush.setStaticApplicationContext(null);
        super.onDestroy();
    }

    public static boolean hasNotificationsCallback() {
        return HMSPush.getStaticNotificationCallbackContext() != null;
    }

    public boolean execute(String action, final JSONArray args, final CallbackContext callbackContext)
        throws JSONException {

        switch (action) {
            case ACTION_ON_MESSAGE_RECEIVED:
                onMessageReceived(callbackContext);
                break;
            case ACTION_TURN_OFF_PUSH:
                turnOffPush(callbackContext);
                break;
            case ACTION_TURN_ON_PUSH:
                turnOnPush(callbackContext);
                break;
            case ACTION_GET_ID:
                getID(callbackContext);
                break;
            case ACTION_GET_AAID:
                getAAID(callbackContext);
                break;
            case ACTION_GET_TOKEN:
                cordova.getThreadPool().execute(new Runnable() {
                    public void run() {
                        getToken(callbackContext);
                    }
                });
                break;
            case ACTION_GET_CREATION_TIME:
                getCreationTime(callbackContext);
                break;
            case ACTION_DELETE_AAID:
                deleteAAID(callbackContext);
                break;
            case ACTION_DELETE_TOKEN:
                deleteToken(callbackContext);
                break;
            case ACTION_SUBSCRIBE:
                cordova.getThreadPool().execute(new Runnable() {
                    public void run() {
                        try {
                            subscribe(args, callbackContext);
                        } catch (JSONException e) {
                            handleExceptionWithoutContext(e);
                        }

                    }
                });
                break;
            case ACTION_UNSUBSCRIBE:
                cordova.getThreadPool().execute(new Runnable() {
                    public void run() {
                        try {
                            unsubscribe(args, callbackContext);
                        } catch (JSONException e) {
                            handleExceptionWithoutContext(e);
                        }

                    }
                });
                break;
            case ACTION_DISABLE_AUTO_INIT:
                disableAutoInit(callbackContext);
                break;
            case ACTION_ENABLE_AUTO_INIT:
                enableAutoInit(callbackContext);
                break;
            case ACTION_IS_AUTO_INIT_ENABLED:
                isAutoInitEnabled(callbackContext);
                break;
            case ACTION_TEST:
                cordova.getThreadPool().execute(new Runnable() {
                    public void run() {
                        test("Test Message", callbackContext);
                    }
                });
                break;
            default:
                Log.e(TAG, "[ERROR] Action not supported on HMSPush plugin !");
                callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR,
                    "Invalid action: " + action));
                return false;
        }
        return true;
    }

    private void onMessageReceived(final CallbackContext callbackContext) {
        Log.i(TAG, "[onMessageReceived]: begin");
        HMSPush.setStaticNotificationCallbackContext(callbackContext);
        if (HMSPush.notificationStack != null) {
            for (Bundle bundle : HMSPush.notificationStack) {
                HMSPush.sendMessage(bundle, HMSPush.getStaticApplicationContext());
            }
            HMSPush.notificationStack.clear();
        }
    }

    public static void sendMessage(Bundle bundle, Context context) {
        final CallbackContext callbackContext = HMSPush.getStaticNotificationCallbackContext();

        if (bundle != null) {
            boolean wasHandled = CordovaHmsMessageReceiverManager.sendMessage(bundle);
            if (wasHandled) {
                Log.d(TAG, "Message bundle was handled by a registered receiver");
            } else if (callbackContext != null) {
                JSONObject json = new JSONObject();
                Set<String> keys = bundle.keySet();
                for (String key : keys) {
                    try {
                        json.put(key, bundle.get(key));
                    } catch (JSONException e) {
                        handleExceptionWithContext(e, callbackContext);
                        return;
                    }
                }

                PluginResult pluginresult = new PluginResult(PluginResult.Status.OK, json);
                pluginresult.setKeepCallback(true);
                callbackContext.sendPluginResult(pluginresult);
            }
        }
    }

    private void turnOffPush(final CallbackContext callbackContext) {
        Log.i(TAG, "[turnOffPush]: begin");
        try {
            HmsMessaging.getInstance(cordova.getContext())
                .turnOffPush()
                .addOnCompleteListener(task -> {
                        if (task.isSuccessful()) {
                            Log.i(TAG, "[turnOffPush]:" + "success");
                            callbackContext.success();
                        } else {
                            Log.i(TAG, "[turnOffPush]:" + "error " + task.getException().getMessage());
                            callbackContext.error(task.getException().getMessage());
                        }
                    }
                );
        } catch (Exception e) {
            Log.e(TAG, "[turnOffPush] Failed, " + e);
            callbackContext.error("[turnOffPush] Failed, error : " + e.getMessage());
        }
    }

    private void turnOnPush(final CallbackContext callbackContext) {
        Log.i(TAG, "[turnOnPush]: begin");
        try {
            HmsMessaging.getInstance(cordova.getContext())
                .turnOnPush()
                .addOnCompleteListener(task -> {
                        if (task.isSuccessful()) {
                            Log.i(TAG, "[turnOnPush]:" + "success");
                            callbackContext.success();
                        } else {
                            Log.i(TAG, "[turnOnPush]:" + "error " + task.getException().getMessage());
                            callbackContext.error(task.getException().getMessage());
                        }
                    }
                );
        } catch (Exception e) {
            Log.e(TAG, "[turnOnPush] Failed, " + e);
            callbackContext.error("[turnOnPush] Failed, error : " + e.getMessage());
        }
    }

    private void getID(CallbackContext callbackContext) {
        Log.i(TAG, "[getId]: begin");
        try {
            String result = HmsInstanceId.getInstance(cordova.getContext()).getId();
            Log.i(TAG, "[getId]:" + result);
            callbackContext.success(result);
        } catch (Exception e) {
            Log.e(TAG, "[getId] Failed, " + e);
            callbackContext.error("[getId] Failed, error : " + e.getMessage());
        }
    }

    private void getAAID(final CallbackContext callbackContext) {
        Log.i(TAG, "[getAAID]: begin");
        try {
            final Task<AAIDResult> result = HmsInstanceId.getInstance(cordova.getContext()).getAAID();
            result.addOnSuccessListener(aaidResult -> {
                    Log.i(TAG, "[getAAID]:" + result);
                    callbackContext.success(aaidResult.getId());
                }
            ).addOnFailureListener(e -> {
                    callbackContext.error(e.getMessage());
                }
            );
        } catch (Exception e) {
            Log.e(TAG, "[getAAID] Failed, " + e);
            callbackContext.error("[getAAID] Failed, error : " + e.getMessage());
        }
    }

    private void getToken(CallbackContext callbackContext) {
        Log.i(TAG, "[getToken] : begin");
        HMSPush.setStaticTokenCallbackContext(callbackContext);
        try {
            String appId = AGConnectServicesConfig.fromContext(cordova.getContext()).getString("client/app_id");
            Log.i(TAG, "[getToken] appId = " + appId);
            String pushToken = HmsInstanceId.getInstance(cordova.getContext()).getToken(appId, "HCM");
            if (!TextUtils.isEmpty(pushToken)) {
                Log.i(TAG, "[getToken] token is received");
                callbackContext.success(pushToken);
            }
        } catch (Exception e) {
            Log.e(TAG, "[getToken] Failed, " + e);
            callbackContext.error("[getToken] Failed, error : " + e.getMessage());
        }
    }

    public static void sendToken(String token) {
        if (HMSPush.getStaticTokenCallbackContext() == null) {
            return;
        }

        final CallbackContext callbackContext = HMSPush.getStaticTokenCallbackContext();
        if (token != null) {
            PluginResult pluginresult = new PluginResult(PluginResult.Status.OK, token);
            pluginresult.setKeepCallback(true);
            callbackContext.sendPluginResult(pluginresult);
        }
    }

    private void getCreationTime(CallbackContext callbackContext) {
        Log.i(TAG, "[getCreationTime]: begin");
        try {
            String result = HmsInstanceId.getInstance(cordova.getContext()).getCreationTime() + "";
            // String result = "todo";
            Log.i(TAG, "[getCreationTime]:" + result);
            callbackContext.success(result);
        } catch (Exception e) {
            Log.e(TAG, "[getCreationTime] Failed, " + e);
            callbackContext.error("[getCreationTime] Failed, error : " + e.getMessage());
        }
    }

    private void deleteAAID(CallbackContext callbackContext) {
        Log.i(TAG, "[deleteAAID]: begin");
        try {
            HmsInstanceId.getInstance(cordova.getContext()).deleteAAID();
            Log.i(TAG, "[deleteAAID]:" + " AAID deleted");
            callbackContext.success();
        } catch (Exception e) {
            Log.e(TAG, "[deleteAAID] Failed, " + e);
            callbackContext.error("[deleteAAID] Failed, error : " + e.getMessage());
        }
    }

    private void deleteToken(CallbackContext callbackContext) {
        Log.i(TAG, "[deleteToken]: begin");
        try {
            String appId = AGConnectServicesConfig.fromContext(cordova.getContext()).getString("client/app_id");
            HmsInstanceId.getInstance(cordova.getContext()).deleteToken(appId, "HCM");
            Log.i(TAG, "[deleteToken]:" + " Token deleted");
            callbackContext.success();
        } catch (Exception e) {
            Log.e(TAG, "[deleteToken] Failed, " + e);
            callbackContext.error("[deleteToken] Failed, error : " + e.getMessage());
        }
    }

    private void subscribe(final JSONArray topic, final CallbackContext callbackContext)
        throws JSONException {
        Log.i(TAG, "[subscribe]: begin");
        String topicName = topic.getString(0);
        Log.i(TAG, "[subscribe]: Topic is: " + topicName);
        try {
            HmsMessaging.getInstance(cordova.getContext())
                .subscribe(topicName)
                .addOnCompleteListener(task -> {
                        if (task.isSuccessful()) {
                            Log.i(TAG, "[subscribe]:" + "success");
                            callbackContext.success();
                        } else {
                            Log.i(TAG, "[subscribe]:" + "error " + task.getException().getMessage());
                            callbackContext.error(task.getException().getMessage());
                        }
                    }
                );
        } catch (Exception e) {
            Log.e(TAG, "[subscribe] Failed, " + e);
            callbackContext.error("[subscribe] Failed, error : " + e.getMessage());
        }
    }

    private void unsubscribe(final JSONArray topic, final CallbackContext callbackContext)
        throws JSONException {
        Log.i(TAG, "[unsubscribe]: begin");
        String topicName = topic.getString(0);
        Log.i(TAG, "[unsubscribe]: Topic is: " + topicName);
        try {
            HmsMessaging.getInstance(cordova.getContext())
                .unsubscribe(topicName)
                .addOnCompleteListener(task -> {
                        if (task.isSuccessful()) {
                            Log.i(TAG, "[unsubscribe]:" + "success");
                            callbackContext.success();
                        } else {
                            Log.i(TAG, "[unsubscribe]:" + "error " + task.getException().getMessage());
                            callbackContext.error(task.getException().getMessage());
                        }
                    }
                );
        } catch (Exception e) {
            Log.e(TAG, "[unsubscribe] Failed, " + e);
            callbackContext.error("[unsubscribe] Failed, error : " + e.getMessage());
        }
    }

    private void disableAutoInit(CallbackContext callbackContext) {
        Log.i(TAG, "[disableAutoInit]: begin");
        try {
            HmsMessaging.getInstance(cordova.getContext()).setAutoInitEnabled(false);
            Log.i(TAG, "[disableAutoInit]: " + "true");
            callbackContext.success("true");
        } catch (Exception e) {
            Log.i(TAG, "[disableAutoInit]: " + e.getMessage());
            callbackContext.error(e.getMessage());
        }
    }

    private void enableAutoInit(CallbackContext callbackContext) {
        Log.i(TAG, "[enableAutoInit]: begin");
        try {
            HmsMessaging.getInstance(cordova.getContext()).setAutoInitEnabled(true);
            Log.i(TAG, "[enableAutoInit]: " + "true");
            callbackContext.success("true");
        } catch (Exception e) {
            Log.i(TAG, "[enableAutoInit]: " + e.getMessage());
            callbackContext.error(e.getMessage());
        }
    }

    private void isAutoInitEnabled(CallbackContext callbackContext) {
        Log.i(TAG, "[isAutoInitEnabled]: begin");
        try {
            String result = HmsMessaging.getInstance(cordova.getContext()).isAutoInitEnabled() + "";
            Log.i(TAG, "[isAutoInitEnabled]: " + result);
            callbackContext.success(result);
        } catch (Exception e) {
            Log.i(TAG, "[isAutoInitEnabled]: " + e.getMessage());
            callbackContext.error(e.getMessage());
        }
    }

    private void test(String msg, CallbackContext callbackContext) {
        if (msg == null || msg.length() == 0) {
            callbackContext.error("Empty message!");
        } else {
            callbackContext.success(msg);
        }
    }

    protected static void handleExceptionWithContext(Exception e, CallbackContext context) {
        Log.e(TAG, e.getMessage());
        context.error(e.getMessage());
    }

    protected static void handleExceptionWithoutContext(Exception e) {
        Log.e(TAG, e.getMessage());
    }

}
