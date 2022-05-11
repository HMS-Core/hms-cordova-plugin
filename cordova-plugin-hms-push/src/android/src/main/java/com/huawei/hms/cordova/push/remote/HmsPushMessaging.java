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

package com.huawei.hms.cordova.push.remote;

import android.content.Context;
import android.content.SharedPreferences;
import android.webkit.JavascriptInterface;

import com.huawei.hms.cordova.push.basef.CordovaBaseModule;
import com.huawei.hms.cordova.push.basef.CordovaMethod;
import com.huawei.hms.cordova.push.basef.HMSLog;
import com.huawei.hms.cordova.push.basef.handler.CorPack;
import com.huawei.hms.cordova.push.basef.handler.Promise;
import com.huawei.hms.cordova.push.utils.RemoteMessageUtils;
import com.huawei.hms.push.HmsMessaging;
import com.huawei.hms.push.RemoteMessage;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class HmsPushMessaging extends CordovaBaseModule {
    private static JSONObject initialNotification = null;

    private final HmsMessaging hmsMessaging;

    public HmsPushMessaging(Context context) {
        hmsMessaging = HmsMessaging.getInstance(context);
    }

    public static void setInitial(JSONObject initialNotification) {
        HmsPushMessaging.initialNotification = initialNotification;
    }

    @CordovaMethod
    public void setItem(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        String myAppId = corPack.getCordova().getActivity().getApplicationInfo().uid + "";
        SharedPreferences sharedPref = corPack.getCordova()
            .getContext()
            .getSharedPreferences(corPack.getCordova().getContext().getPackageName() + "." + myAppId,
                Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPref.edit();
        editor.putString(args.getString(0), args.getString(1)).apply();
        promise.success();
    }

    @CordovaMethod
    public void removeItem(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        String myAppId = corPack.getCordova().getActivity().getApplicationInfo().uid + "";
        SharedPreferences sharedPref = corPack.getCordova()
            .getContext()
            .getSharedPreferences(corPack.getCordova().getContext().getPackageName() + "." + myAppId,
                Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPref.edit();
        editor.remove(args.getString(0)).apply();
        promise.success();
    }

    @CordovaMethod
    public void getItem(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        String myAppId = corPack.getCordova().getActivity().getApplicationInfo().uid + "";
        SharedPreferences sharedPref = corPack.getCordova()
            .getContext()
            .getSharedPreferences(corPack.getCordova().getContext().getPackageName() + "." + myAppId,
                Context.MODE_PRIVATE);
        String jsonData = sharedPref.getString(args.getString(0), null);
        if (jsonData == null) {
            promise.error(new JSONObject().put("Error", "Data not found with " + args.getString(0) + " key parameter"));
        } else {
            promise.success(new JSONObject(jsonData));
        }
    }

    @CordovaMethod
    public void setBackgroundFile(final CorPack corPack, final JSONArray args, final Promise promise)
        throws JSONException {
        String appId = corPack.getCordova().getActivity().getApplicationInfo().uid + "";
        SharedPreferences sharedPref = corPack.getCordova()
            .getContext()
            .getSharedPreferences(corPack.getCordova().getContext().getPackageName() + "." + appId,
                Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPref.edit();
        editor.putString("backgroundFileName", args.getString(0)).apply();
        promise.success();
    }

    @CordovaMethod
    public void removeBackgroundFile(final CorPack corPack, final JSONArray args, final Promise promise)
        throws JSONException {
        String appId = corPack.getCordova().getActivity().getApplicationInfo().uid + "";
        SharedPreferences sharedPref = corPack.getCordova()
            .getContext()
            .getSharedPreferences(corPack.getCordova().getContext().getPackageName() + "." + appId,
                Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPref.edit();
        editor.remove("backgroundFileName").apply();
        promise.success();
    }

    @HMSLog
    @CordovaMethod
    public void isAutoInitEnabled(final CorPack corPack, JSONArray args, final Promise promise) {
        boolean autoInit = hmsMessaging.isAutoInitEnabled();
        promise.success(autoInit);
    }

    @HMSLog
    @CordovaMethod
    public void setAutoInitEnabled(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        hmsMessaging.setAutoInitEnabled(args.getBoolean(0));
        promise.success(true);
    }

    @HMSLog
    @CordovaMethod
    public void turnOnPush(final CorPack corPack, JSONArray args, final Promise promise) {
        hmsMessaging.turnOnPush()
            .addOnSuccessListener(result -> promise.success(true))
            .addOnFailureListener(error -> promise.error(error.getLocalizedMessage()));
    }

    @HMSLog
    @CordovaMethod
    public void turnOffPush(final CorPack corPack, JSONArray args, final Promise promise) {
        hmsMessaging.turnOffPush()
            .addOnSuccessListener(result -> promise.success(true))
            .addOnFailureListener(error -> promise.error(error.getLocalizedMessage()));
    }

    @HMSLog
    @CordovaMethod
    public void subscribe(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        hmsMessaging.subscribe(args.getString(0))
            .addOnSuccessListener(result -> promise.success(true))
            .addOnFailureListener(error -> promise.error(error.getLocalizedMessage()));
    }

    @HMSLog
    @CordovaMethod
    public void unsubscribe(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        hmsMessaging.unsubscribe(args.getString(0))
            .addOnSuccessListener(result -> promise.success(true))
            .addOnFailureListener(error -> promise.error(error.getLocalizedMessage()));
    }

    @HMSLog
    @CordovaMethod
    public void sendRemoteMessage(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        RemoteMessage remoteMessage = RemoteMessageUtils.toRemoteMessage(args.getJSONObject(0));
        hmsMessaging.send(remoteMessage);
        promise.success(true);
    }

    @HMSLog
    @CordovaMethod
    public void getInitialNotification(final CorPack corPack, JSONArray args, final Promise promise) {
        if (initialNotification != null) {
            promise.success(HmsPushMessaging.initialNotification);
        } else {
            promise.success(new JSONObject());
        }
    }
}
