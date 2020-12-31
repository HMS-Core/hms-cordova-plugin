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

package com.huawei.hms.cordova.nearby.modules;

import android.app.Activity;
import android.app.IntentService;
import android.app.PendingIntent;
import android.content.Intent;
import android.util.Log;

import com.huawei.hms.cordova.nearby.basef.CordovaBaseModule;
import com.huawei.hms.cordova.nearby.basef.CordovaEvent;
import com.huawei.hms.cordova.nearby.basef.CordovaMethod;
import com.huawei.hms.cordova.nearby.basef.HMSLog;
import com.huawei.hms.cordova.nearby.basef.handler.CorPack;
import com.huawei.hms.cordova.nearby.basef.handler.CordovaEventRunner;
import com.huawei.hms.cordova.nearby.basef.handler.Promise;
import com.huawei.hms.cordova.nearby.utils.HMSEvents;
import com.huawei.hms.cordova.nearby.utils.HMSMessageUtils;
import com.huawei.hms.cordova.nearby.utils.HMSUtils;
import com.huawei.hms.nearby.Nearby;
import com.huawei.hms.nearby.discovery.BleSignal;
import com.huawei.hms.nearby.discovery.Distance;
import com.huawei.hms.nearby.message.Message;
import com.huawei.hms.nearby.message.MessageEngine;
import com.huawei.hms.nearby.message.MessageHandler;
import com.huawei.hms.nearby.message.PutOption;
import com.huawei.hms.nearby.message.StatusCallback;
import com.huawei.hms.nearby.message.GetOption;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Locale;

public class HMSMessage extends CordovaBaseModule {
    private Activity activity;
    private MessageEngine messageEngine;

    private static volatile MessageHandler currentMessageHandler;

    public HMSMessage(Activity activity) {
        this.activity = activity;
        messageEngine = Nearby.getMessageEngine(activity);
    }

    @CordovaEvent
    public void registerStatusCallback(final CorPack corPack) {
        messageEngine.registerStatusCallback(new StatusCallbackHandler(corPack.getEventRunner()));
    }

    @HMSLog
    @CordovaMethod
    public void put(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject messageObj = args.getJSONObject(0);
        Message message = HMSMessageUtils.buildMessage(messageObj);

        if (!HMSUtils.hasOptionalParameter(args, 1)) {
            putInternal(message, corPack, promise);
            return;
        }

        JSONObject putOptionObject = args.getJSONObject(1);
        PutOption putOption = HMSMessageUtils.buildPutOption(putOptionObject, corPack.getEventRunner(), message);
        putInternal(message, putOption, corPack, promise);
    }

    private void putInternal(Message message, final CorPack corPack, final Promise promise) {
        // without put option / default options
        messageEngine.put(message)
                .addOnSuccessListener(unused -> {
                    promise.success();
                })
                .addOnFailureListener(e -> {
                    promise.error(String.format(Locale.ENGLISH, "put: %s", e.getMessage()));
                });
    }

    private void putInternal(Message message, PutOption putOption, final CorPack corPack, final Promise promise) {
        // with put option
        messageEngine.put(message, putOption)
                .addOnSuccessListener(unused -> {
                    promise.success();
                })
                .addOnFailureListener(e -> {
                    promise.error(String.format(Locale.ENGLISH, "put: %s", e.getMessage()));
                });

    }

    @HMSLog
    @CordovaMethod
    public void unput(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject messageObj = args.getJSONObject(0);
        Message message = HMSMessageUtils.buildMessage(messageObj);
        messageEngine.unput(message)
                .addOnSuccessListener(unused -> {
                    promise.success();
                })
                .addOnFailureListener(e -> {
                    promise.error(String.format(Locale.ENGLISH, "unput: %s", e.getMessage()));
                });
    }

    @HMSLog
    @CordovaMethod
    public void get(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        if (!HMSUtils.hasOptionalParameter(args, 0)) {
            getInternal(corPack, promise);
            return;
        }

        JSONObject getOptionObject = args.getJSONObject(0);
        GetOption getOption = HMSMessageUtils.buildGetOption(getOptionObject, corPack.getEventRunner());
        getInternal(getOption, corPack, promise);
    }

    public void getInternal(final CorPack corPack, final Promise promise) {
        initMessageHandler(corPack.getEventRunner());
        // without get option / default options
        messageEngine.get(currentMessageHandler)
                .addOnSuccessListener(unused -> {
                    promise.success();
                })
                .addOnFailureListener(e -> {
                    promise.error(String.format(Locale.ENGLISH, "get: %s", e.getMessage()));
                });
    }

    public void getInternal(GetOption getOption, final CorPack corPack, final Promise promise) {
        initMessageHandler(corPack.getEventRunner());
        messageEngine.get(currentMessageHandler, getOption)
                .addOnSuccessListener(unused -> {
                    promise.success();
                })
                .addOnFailureListener(e -> {
                    promise.error(String.format(Locale.ENGLISH, "get: %s", e.getMessage()));
                });
    }

    @HMSLog
    @CordovaMethod
    public void unget(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        messageEngine.unget(currentMessageHandler)
                .addOnSuccessListener(unused -> {
                    promise.success();
                })
                .addOnFailureListener(e -> {
                    promise.error(String.format(Locale.ENGLISH, "unget: %s", e.getMessage()));
                });
    }

    @HMSLog
    @CordovaMethod
    public void getInBackground(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        if (!HMSUtils.hasOptionalParameter(args, 0)) {
            getInBackgroundInternal(corPack, promise);
            return;
        }

        JSONObject getOptionObject = args.getJSONObject(0);
        GetOption getOption = HMSMessageUtils.buildGetOption(getOptionObject, corPack.getEventRunner());
        getInBackgroundInternal(getOption, corPack, promise);
    }

    public void getInBackgroundInternal(final CorPack corPack, final Promise promise) {
        initMessageHandler(corPack.getEventRunner());

        PendingIntent pendingIntent = PendingIntent.getService(activity.getApplicationContext(),
                0,
                new Intent(activity, BackgroundIntentService.class),
                PendingIntent.FLAG_UPDATE_CURRENT);

        // without get option / default options
        messageEngine.get(pendingIntent)
                .addOnSuccessListener(unused -> {
                    promise.success();
                })
                .addOnFailureListener(e -> {
                    promise.error(String.format(Locale.ENGLISH, "getInBackground: %s", e.getMessage()));
                });
    }

    public void getInBackgroundInternal(GetOption getOption, final CorPack corPack, final Promise promise) {
        initMessageHandler(corPack.getEventRunner());
        PendingIntent pendingIntent = PendingIntent.getService(activity.getApplicationContext(),
                0,
                new Intent(activity, BackgroundIntentService.class),
                PendingIntent.FLAG_UPDATE_CURRENT);

        messageEngine.get(pendingIntent, getOption)
                .addOnSuccessListener(unused -> {
                    promise.success();
                })
                .addOnFailureListener(e -> {
                    promise.error(String.format(Locale.ENGLISH, "getInBackground: %s", e.getMessage()));
                });
    }

    @HMSLog
    @CordovaMethod
    public void ungetInBackground(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        PendingIntent pendingIntent = PendingIntent.getService(activity.getApplicationContext(),
                0,
                new Intent(activity, BackgroundIntentService.class),
                PendingIntent.FLAG_UPDATE_CURRENT);

        messageEngine.unget(pendingIntent)
                .addOnSuccessListener(unused -> {
                    promise.success();
                })
                .addOnFailureListener(e -> {
                    promise.error(String.format(Locale.ENGLISH, "ungetInBackground: %s", e.getMessage()));
                });
    }

    private static void initMessageHandler(final CordovaEventRunner eventRunner) {
        if (currentMessageHandler == null)
            currentMessageHandler = new MessageHandler() {
            @Override
            public void onFound(Message message) {
                JSONObject jsonObject = HMSUtils.convertMessageToJSONObject(message);
                eventRunner.sendEvent(HMSEvents.EVENT_MESSAGE_ON_FOUND, jsonObject);
            }

            @Override
            public void onLost(Message message) {
                JSONObject jsonObject = HMSUtils.convertMessageToJSONObject(message);
                eventRunner.sendEvent(HMSEvents.EVENT_MESSAGE_ON_LOST, jsonObject);
            }

            @Override
            public void onDistanceChanged(Message message, Distance distance) {
                JSONObject jsonObject = HMSUtils.convertMessageAndDistanceToJSONObject(message, distance);
                eventRunner.sendEvent(HMSEvents.EVENT_MESSAGE_ON_DISTANCE_CHANGED, jsonObject);
            }

            @Override
            public void onBleSignalChanged(Message message, BleSignal bleSignal) {
                JSONObject jsonObject = HMSUtils.convertMessageAndBleSignalToJSONObject(message, bleSignal);
                eventRunner.sendEvent(HMSEvents.EVENT_MESSAGE_ON_BLE_SIGNAL_CHANGED, jsonObject);
            }
        };
    }

    private static class StatusCallbackHandler extends StatusCallback {
        private final CordovaEventRunner eventRunner;
        public StatusCallbackHandler(CordovaEventRunner eventRunner) {
            super();
            this.eventRunner = eventRunner;
        }

        @Override
        public void onPermissionChanged(boolean b) {
            JSONObject jsonObject = HMSUtils.generateBooleanJSONObject("grantPermission", b);
            eventRunner.sendEvent(HMSEvents.EVENT_STATUS_ON_PERMISSION_CHANGED, jsonObject);
        }
    }

    public static class BackgroundIntentService extends IntentService {
        private static final String TAG = BackgroundIntentService.class.getSimpleName();

        public BackgroundIntentService() {
            super(TAG);
            Log.i(TAG, "BackgroundIntentService");
        }

        @Override
        protected void onHandleIntent(Intent intent) {
            Log.i(TAG, "BackgroundIntentService onHandleIntent: ");
            Nearby.getMessageEngine(getApplicationContext()).handleIntent(intent, currentMessageHandler);
        }

        @Override
        public void onCreate() {
            super.onCreate();
            Log.i(TAG, "BackgroundIntentService onCreate: ");
        }

        @Override
        public void onDestroy() {
            super.onDestroy();
            Log.i(TAG, "BackgroundIntentService onDestroy: ");
        }
    }

}
