/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.push;

import android.os.Bundle;
import android.util.Log;
import android.content.Intent;

import com.huawei.hms.cordova.push.basef.handler.CordovaController;
import com.huawei.hms.cordova.push.constants.Core;
import com.huawei.hms.cordova.push.constants.NotificationConstants;
import com.huawei.hms.cordova.push.local.HmsLocalNotification;
import com.huawei.hms.cordova.push.remote.HmsPushInstanceId;
import com.huawei.hms.cordova.push.remote.HmsPushMessageService;
import com.huawei.hms.cordova.push.remote.HmsPushMessaging;
import com.huawei.hms.cordova.push.remote.HmsPushProfile;
import com.huawei.hms.cordova.push.utils.CordovaUtils;
import com.huawei.hms.cordova.push.utils.MapUtils;
import com.huawei.hms.cordova.push.utils.RemoteMessageUtils;
import com.huawei.hms.push.RemoteMessage;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class HMSPush extends CordovaPlugin {

    private static final String KIT = "Push";

    private static final String VERSION = "6.3.0.304";

    private static CordovaInterface staticCordova;

    private static CordovaWebView staticWebView;

    private String TAG = HMSPush.class.getSimpleName();

    private CordovaController cordovaController;

    public static CordovaInterface getCordova() {
        return staticCordova;
    }

    public static void setCordova(CordovaInterface cordova) {
        staticCordova = cordova;
    }

    public static CordovaWebView getWebView() {
        return staticWebView;
    }

    public static void setWebView(CordovaWebView webView) {
        staticWebView = webView;
    }

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        HmsPushMessageService.setApplicationRunningStatus(true);
        if (checkFlag(cordova.getActivity().getIntent())) {
            sendOpenedNotificationData(cordova.getActivity().getIntent());
        }
        setCordova(cordova);
        setWebView(webView);

        cordovaController = new CordovaController(this, KIT, VERSION,
            Arrays.asList(new HmsPushMessaging(webView.getContext()), new HmsPushInstanceId(webView.getContext()),
                new HmsLocalNotification(webView.getContext()), new HmsPushProfile(webView.getContext())));
    }

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) {
        return cordovaController.execute(action, args, callbackContext);
    }

    @Override
    public void onPause(boolean multitasking) {
        super.onPause(multitasking);
        cordovaController.onPause(multitasking);
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        cordovaController.onDestroy();
    }

    @Override
    public void onReset() {
        super.onReset();
        cordovaController.onReset();
    }

    @Override
    public void onStart() {
        super.onStart();
        cordovaController.onStart();
    }

    @Override
    public void onStop() {
        super.onStop();
        cordovaController.onStop();
    }

    @Override
    public void onNewIntent(Intent intent) {
        HmsPushMessaging.setInitial(null);
        if (checkFlag(intent)) {
            sendOpenedNotificationData(intent);
        }
    }

    public boolean checkFlag(Intent intent) {
        int flagNumber = Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_RECEIVER_REPLACE_PENDING
            | Intent.FLAG_ACTIVITY_REORDER_TO_FRONT;
        int flagNumberAndBroughtToFront = flagNumber | Intent.FLAG_ACTIVITY_BROUGHT_TO_FRONT;
        return intent.getFlags() == flagNumber || intent.getFlags() == flagNumberAndBroughtToFront
            || intent.getBundleExtra(NotificationConstants.NOTIFICATION) != null || intent.getDataString() != null;
    }

    public void sendOpenedNotificationData(Intent intent) {
        try {
            Map<String, Object> map = new HashMap<>();
            Bundle extras = intent.getExtras();
            if (extras != null) {
                RemoteMessage remoteMessage = new RemoteMessage(extras);
                map.put("remoteMessage", RemoteMessageUtils.fromMap(remoteMessage));
                JSONObject extrasData = MapUtils.fromBundle(extras);
                map.put("extras", extrasData);
            }
            if (intent.getDataString() != null) {
                map.put("uriPage", intent.getDataString());
            }
            JSONObject result = MapUtils.toJSONObject(map);
            HmsPushMessaging.setInitial(result);
            CordovaUtils.sendEvent(cordova, webView, Core.Event.NOTIFICATION_OPENED_EVENT, result);
        } catch (JSONException e) {
            Log.w(TAG, "sendOpenedNotificationData: " + e.getLocalizedMessage());
        }
    }
}
