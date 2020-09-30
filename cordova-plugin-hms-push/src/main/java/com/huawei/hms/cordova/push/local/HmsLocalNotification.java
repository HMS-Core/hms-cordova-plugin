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
    public void execute(String action, final JSONArray args, final CallbackContext callbackContext)
        throws JSONException {
        switch (action) {
            case "localNotification":
                localNotification(args.getJSONObject(1), callbackContext);
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
                cancelNotificationsWithId(args.getJSONArray(1),callbackContext);
                break;
            case "cancelNotificationsWithIdTag":
                cancelNotificationsWithIdTag(args.getJSONArray(1),callbackContext);
                break;
            case "cancelNotificationsWithTag":
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                    cancelNotificationsWithTag(args.getString(1),callbackContext);
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
    public void localNotification(JSONObject details, CallbackContext callback) throws JSONException {

        Bundle bundle = MapUtils.toBundle(details);
        if (bundle == null) {
            callback.error(ResultCode.NULL_BUNDLE);
            return;
        }
        NotificationConfigUtils.configId(bundle);

        hmsLocalNotificationController.localNotificationNow(bundle, callback);

    }

    @RequiresApi(api = Build.VERSION_CODES.CUPCAKE)
    public void localNotificationSchedule(JSONObject details, CallbackContext callback) throws JSONException {

        Bundle bundle = MapUtils.toBundle(details);
        if (bundle == null) {
            callback.error(ResultCode.NULL_BUNDLE);
            return;
        }
        NotificationConfigUtils.configId(bundle);

        hmsLocalNotificationController.localNotificationSchedule(bundle, callback);

    }

    @RequiresApi(api = Build.VERSION_CODES.GINGERBREAD)
    public void cancelAllNotifications(CallbackContext callbackContext) {

        hmsLocalNotificationController.cancelScheduledNotifications();
        hmsLocalNotificationController.cancelNotifications();
        callbackContext.success("true");
    }

    public void cancelNotifications(CallbackContext callbackContext) {
        hmsLocalNotificationController.cancelNotifications();
        callbackContext.success("true");
    }

    @RequiresApi(api = Build.VERSION_CODES.GINGERBREAD)
    public void cancelScheduledNotifications(CallbackContext callbackContext) {

        hmsLocalNotificationController.cancelScheduledNotifications();
        callbackContext.success("true");
    }

    public void cancelNotificationsWithId(JSONArray idArr, CallbackContext callbackContext) throws JSONException {

        hmsLocalNotificationController.cancelNotificationsWithId(idArr);
        callbackContext.success("true");
    }

    @RequiresApi(api = Build.VERSION_CODES.ECLAIR)
    public void cancelNotificationsWithIdTag(JSONArray idTagArr, CallbackContext callbackContext) throws JSONException {

        hmsLocalNotificationController.cancelNotificationsWithIdTag(idTagArr);
        callbackContext.success("true");
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    public void cancelNotificationsWithTag(String tag, CallbackContext callbackContext) {

        hmsLocalNotificationController.cancelNotificationsWithTag(tag);
        callbackContext.success("true");

    }


    @RequiresApi(api = Build.VERSION_CODES.M)
    public void getNotifications(CallbackContext callback)  {
        try{
        JSONArray result = hmsLocalNotificationController.getNotifications();
        callback.success(result);
        } catch (Exception ex){
            callback.error(ex.getMessage());
        }

    }

    public void getScheduledNotifications(CallbackContext callback) {
        try{
        JSONArray result = hmsLocalNotificationController.getScheduledNotifications();
        callback.success(result);
        } catch (Exception ex){
            callback.error(ex.getMessage());
        }

    }



    public void getChannels(CallbackContext callback) {
        try{
            JSONArray result = ArrayUtil.fromList(hmsLocalNotificationController.listChannels());
            callback.success(result);
        } catch (Exception ex){
            callback.error(ex.getMessage());
        }


    }


    public void channelExists(String channelId, CallbackContext callback) {
        try{
            String channelExist  = hmsLocalNotificationController.channelExists(channelId)+ "";
            callback.success(channelExist);
        }
        catch(Exception ex) {
            callback.error(ex.getMessage());
        }
    }


    public void channelBlocked(String channelId, CallbackContext callback) {
    try{
        String channelBlocked  = hmsLocalNotificationController.isChannelBlocked(channelId)+ "";
        callback.success(channelBlocked);
    }
    catch(Exception ex) {
            callback.error(ex.getMessage());
        }

    }


    public void deleteChannel(String channelId,CallbackContext callbackContext) {
        try{
            hmsLocalNotificationController.deleteChannel(channelId);
            callbackContext.success("true");
        }
        catch (Exception ex){
            callbackContext.error(ex.getMessage());
        }
    }

}

