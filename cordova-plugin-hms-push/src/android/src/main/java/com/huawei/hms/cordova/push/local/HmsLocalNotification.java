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

package com.huawei.hms.cordova.push.local;

import android.content.Context;
import android.content.SharedPreferences;
import android.os.Build;
import android.os.Bundle;

import androidx.annotation.RequiresApi;

import com.huawei.hms.cordova.push.basef.CordovaBaseModule;
import com.huawei.hms.cordova.push.basef.CordovaMethod;
import com.huawei.hms.cordova.push.basef.HMSLog;
import com.huawei.hms.cordova.push.basef.handler.CorPack;
import com.huawei.hms.cordova.push.basef.handler.Promise;
import com.huawei.hms.cordova.push.constants.Core;
import com.huawei.hms.cordova.push.constants.ResultCode;
import com.huawei.hms.cordova.push.utils.ArrayUtil;
import com.huawei.hms.cordova.push.utils.MapUtils;
import com.huawei.hms.cordova.push.utils.NotificationConfigUtils;

import org.json.JSONArray;
import org.json.JSONException;

public class HmsLocalNotification extends CordovaBaseModule {

    private final String TAG = HmsLocalNotification.class.getSimpleName();

    private HmsLocalNotificationController hmsLocalNotificationController;

    public HmsLocalNotification(Context context) {
        hmsLocalNotificationController = new HmsLocalNotificationController(context);
    }

    @CordovaMethod
    public void localNotification(final CorPack corPack, JSONArray args, final Promise promise) {
        try {
            Bundle bundle = MapUtils.toBundle(args.getJSONObject(0));
            if (bundle == null) {
                promise.error(ResultCode.NULL_BUNDLE);
            }
            NotificationConfigUtils.configId(bundle);
            hmsLocalNotificationController.localNotificationNow(bundle, promise);
        } catch (JSONException e) {
            promise.error(e.getLocalizedMessage());
        }
    }

    @CordovaMethod
    public void localNotificationSchedule(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException {
        Bundle bundle = MapUtils.toBundle(args.getJSONObject(0));
        if (bundle == null) {
            promise.error(ResultCode.NULL_BUNDLE);
            return;
        }
        NotificationConfigUtils.configId(bundle);
        hmsLocalNotificationController.localNotificationSchedule(bundle, promise);
    }

    @CordovaMethod
    public void cancelAllNotifications(final CorPack corPack, JSONArray args, final Promise promise) {
        hmsLocalNotificationController.cancelScheduledNotifications();
        hmsLocalNotificationController.cancelNotifications();
        promise.success(true);
    }

    @CordovaMethod
    public void cancelNotifications(final CorPack corPack, JSONArray args, final Promise promise) {
        hmsLocalNotificationController.cancelNotifications();
        promise.success(true);
    }

    @CordovaMethod
    public void cancelScheduledNotifications(final CorPack corPack, JSONArray args, final Promise promise) {
        hmsLocalNotificationController.cancelScheduledNotifications();
        promise.success(true);
    }

    @CordovaMethod
    public void cancelNotificationsWithId(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException {
        hmsLocalNotificationController.cancelNotificationsWithId(args.getJSONArray(0));
        promise.success(true);
    }

    @CordovaMethod
    public void cancelNotificationsWithIdTag(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException {
        hmsLocalNotificationController.cancelNotificationsWithIdTag(args.getJSONArray(0));
        promise.success(true);
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    @CordovaMethod
    public void cancelNotificationsWithTag(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException {
        hmsLocalNotificationController.cancelNotificationsWithTag(args.getString(0));
        promise.success(true);
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    @CordovaMethod
    public void getNotifications(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        promise.success(hmsLocalNotificationController.getNotifications());
    }

    @CordovaMethod
    public void getScheduledNotifications(final CorPack corPack, JSONArray args, final Promise promise) {
        promise.success(hmsLocalNotificationController.getScheduledNotifications());
    }

    @CordovaMethod
    public void getChannels(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        promise.success(ArrayUtil.fromList(hmsLocalNotificationController.listChannels()));
    }

    @CordovaMethod
    public void channelExists(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        hmsLocalNotificationController.channelExists(args.getString(0), promise);
    }

    @CordovaMethod
    public void channelBlocked(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        hmsLocalNotificationController.isChannelBlocked(args.getString(0), promise);
    }

    @CordovaMethod
    public void deleteChannel(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        hmsLocalNotificationController.deleteChannel(args.getString(0), promise);
    }

}
