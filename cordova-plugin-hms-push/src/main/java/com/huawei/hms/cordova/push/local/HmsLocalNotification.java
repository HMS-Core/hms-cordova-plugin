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

package com.huawei.hms.cordova.push.local;

import android.app.Application;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;

import androidx.annotation.RequiresApi;

import com.huawei.hms.cordova.push.constants.ResultCode;
import com.huawei.hms.cordova.push.utils.Action;
import com.huawei.hms.cordova.push.utils.ArrayUtil;
import com.huawei.hms.cordova.push.utils.MapUtils;
import com.huawei.hms.cordova.push.utils.NotificationConfigUtils;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;


public class HmsLocalNotification implements Action {

    private final String TAG = HmsLocalNotification.class.getSimpleName();
    private HmsLocalNotificationController hmsLocalNotificationController;
    public CordovaPlugin plugin;


    public HmsLocalNotification(Application application) {

        hmsLocalNotificationController = new HmsLocalNotificationController(application);
        hmsLocalNotificationController.createDefaultChannel();
    }

    @RequiresApi(api = Build.VERSION_CODES.CUPCAKE)
    public void execute(String action, final JSONArray args, final CallbackContext callbackContext) throws JSONException {
        switch (action) {
            case "localNotification":
                localNotification(args, callbackContext);
                break;
            case "localNotificationSchedule":
                localNotificationSchedule(args.getJSONObject(1), callbackContext);
                break;
            case "cancelAllNotifications":
                cancelAllNotifications(callbackContext);
                break;
            case "cancelNotifications":
                cancelNotifications(callbackContext);
                break;
            case "cancelScheduledNotifications":
                cancelScheduledNotifications(callbackContext);
                break;
            case "cancelNotificationsWithId":
                cancelNotificationsWithId(args.getJSONArray(1), callbackContext);
                break;
            case "cancelNotificationsWithIdTag":
                cancelNotificationsWithIdTag(args.getJSONArray(1), callbackContext);
                break;
            case "cancelNotificationsWithTag":
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                    cancelNotificationsWithTag(args.getString(1), callbackContext);
                }
                break;
            case "getNotifications":
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                    getNotifications(callbackContext);
                }
                break;
            case "getScheduledNotifications":
                getScheduledNotifications(callbackContext);
                break;
            case "getChannels":
                getChannels(callbackContext);
                break;
            case "channelExists":
                channelExists(args.getString(1), callbackContext);
                break;
            case "channelBlocked":
                channelBlocked(args.getString(1), callbackContext);
                break;
            case "deleteChannel":
                deleteChannel(args.getString(1), callbackContext);
                break;
            default:
                Log.i(TAG, "execute: Wrong Action Sent");
        }
    }


    @RequiresApi(api = Build.VERSION_CODES.CUPCAKE)
    public void localNotification(JSONArray args, CallbackContext callbackContext) {
        try {
            JSONObject details;
            if (args.length() > 1){
                details = args.getJSONObject(1);
            }
            else {
                details = args.getJSONObject(0);
            }
            Bundle bundle = MapUtils.toBundle(details);
            if (bundle == null) {
                if (callbackContext != null)
                    callbackContext.error(ResultCode.NULL_BUNDLE);
                return;
            }
            NotificationConfigUtils.configId(bundle);

            hmsLocalNotificationController.localNotificationNow(bundle, callbackContext);
        } catch (Exception e) {
            callbackContext.error(e.getLocalizedMessage());
        }

    }

    @RequiresApi(api = Build.VERSION_CODES.CUPCAKE)
    public void localNotificationSchedule(JSONObject details, CallbackContext callbackContext) {

        try {
            Bundle bundle = MapUtils.toBundle(details);

            if (bundle == null) {
                callbackContext.error(ResultCode.NULL_BUNDLE);
                return;
            }
            NotificationConfigUtils.configId(bundle);

            hmsLocalNotificationController.localNotificationSchedule(bundle, callbackContext);
        } catch (Exception e) {
            callbackContext.error(e.getLocalizedMessage());
        }
    }

    @RequiresApi(api = Build.VERSION_CODES.GINGERBREAD)
    public void cancelAllNotifications(CallbackContext callbackContext) {

        hmsLocalNotificationController.cancelScheduledNotifications();
        hmsLocalNotificationController.cancelNotifications();
        callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK,true));
    }

    public void cancelNotifications(CallbackContext callbackContext) {

        hmsLocalNotificationController.cancelNotifications();
        callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK,true));
    }

    @RequiresApi(api = Build.VERSION_CODES.GINGERBREAD)
    public void cancelScheduledNotifications(CallbackContext callbackContext) {

        hmsLocalNotificationController.cancelScheduledNotifications();
        callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK,true));
    }

    public void cancelNotificationsWithId(JSONArray idArr, CallbackContext callbackContext) {

        try {
            hmsLocalNotificationController.cancelNotificationsWithId(idArr);
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK,true));
        } catch (Exception e) {
            callbackContext.error(e.getLocalizedMessage());
        }

    }

    @RequiresApi(api = Build.VERSION_CODES.ECLAIR)
    public void cancelNotificationsWithIdTag(JSONArray idTagArr, CallbackContext callbackContext) {

        try {
            hmsLocalNotificationController.cancelNotificationsWithIdTag(idTagArr);
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK,true));
        } catch (Exception e) {
            callbackContext.error(e.getLocalizedMessage());
        }
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    public void cancelNotificationsWithTag(String tag, CallbackContext callbackContext) {

        hmsLocalNotificationController.cancelNotificationsWithTag(tag);
        callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK,true));

    }


    @RequiresApi(api = Build.VERSION_CODES.M)
    public void getNotifications(CallbackContext callbackContext) {

        try {
            JSONArray result = hmsLocalNotificationController.getNotifications();
            callbackContext.success(result);
        } catch (Exception ex) {
            callbackContext.error(ex.getLocalizedMessage());
        }

    }

    public void getScheduledNotifications(CallbackContext callbackContext) {

        JSONArray result = hmsLocalNotificationController.getScheduledNotifications();
        callbackContext.success(result);

    }


    public void getChannels(CallbackContext callbackContext) {

        try {
            JSONArray result = ArrayUtil.fromList(hmsLocalNotificationController.listChannels());
            callbackContext.success(result);
        } catch (Exception ex) {
            callbackContext.error(ex.getLocalizedMessage());
        }

    }


    public void channelExists(String channelId, CallbackContext callbackContext) {

        hmsLocalNotificationController.channelExists(channelId, callbackContext);

    }


    public void channelBlocked(String channelId, CallbackContext callbackContext) {

        hmsLocalNotificationController.isChannelBlocked(channelId, callbackContext);

    }


    public void deleteChannel(String channelId, CallbackContext callbackContext) {

        hmsLocalNotificationController.deleteChannel(channelId, callbackContext);

    }

}

