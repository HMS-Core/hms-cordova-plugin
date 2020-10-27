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

package com.huawei.hms.cordova.push.utils;

import android.util.Log;

import com.huawei.hms.cordova.push.local.HmsLocalNotification;
import com.huawei.hms.cordova.push.remote.HmsPushInstanceId;
import com.huawei.hms.cordova.push.remote.HmsPushMessaging;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;

import org.json.JSONArray;

import java.util.HashMap;
import java.util.Map;

public class ActionManager {

    private String TAG = ActionManager.class.getSimpleName();

    private Map<Actions, Action> actionMap = new HashMap<>();

    public CordovaPlugin plugin;

    public ActionManager(CordovaPlugin plugin) {
        this.plugin = plugin;

        registerActions();
    }

    public void executeAction(String actionName, JSONArray params, CallbackContext callbackContext) {
        try {
            Action action = actionMap.get(Actions.valueOf(actionName));
            if (action != null) {
                action.execute(params.getString(0), params, callbackContext);
            }
        } catch (IllegalArgumentException e) {
            Log.e(TAG, "Action is not registered. actionName : " + actionName);
            callbackContext.error("Action is not registered. actionName : " + actionName);
        } catch (Exception e) {
            Log.e(TAG, "An error occurred while executing action. Err : " + e);
            callbackContext.error("An error occurred while executing action. Action Name : " + actionName);
        }
    }


    private void registerActions() {

        actionMap.put(Actions.ACTION_HMS_PUSH_MESSAGING, new HmsPushMessaging(plugin));
        actionMap.put(Actions.ACTION_HMS_PUSH_INSTANCE_ID, new HmsPushInstanceId(plugin.cordova.getContext()));
        actionMap.put(Actions.ACTION_HMS_LOCAL_NOTIFICATION, new HmsLocalNotification(plugin.cordova.getActivity().getApplication()));

    }

    public enum Actions {
        ACTION_HMS_PUSH_MESSAGING, ACTION_HMS_PUSH_INSTANCE_ID, ACTION_HMS_LOCAL_NOTIFICATION
    }

}
