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

package com.huawei.hms.cordova.analytics.actions;

import android.util.Log;

import com.huawei.hms.analytics.HiAnalytics;
import com.huawei.hms.analytics.HiAnalyticsInstance;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

public final class ActionManager {

    private String TAG = ActionManager.class.getSimpleName();

    private Map<Actions, Action> actionMap = new HashMap<>();

    private HiAnalyticsInstance instance;

    private CordovaInterface cordova;

    public ActionManager(CordovaInterface cordova) {
        this.cordova = cordova;
        instance = HiAnalytics.getInstance(cordova.getActivity());

        //register actions
        registerActions();
    }

    private void registerActions() {
        actionMap.put(Actions.ACTION_ENABLE_LOG, new ActionEnableLog());
        actionMap.put(Actions.ACTION_ENABLE_LOG_WITH_LEVEL, new ActionEnableLogWithLevel());
        actionMap.put(Actions.ACTION_ENABLE_ANALYTICS, new ActionEnableAnalytics(instance));
        actionMap.put(Actions.ACTION_ENABLE_AUTO_COLLECTION, new ActionEnableAutoCollection(instance));
        actionMap.put(Actions.ACTION_SET_USER_ID, new ActionSetUserId(instance));
        actionMap.put(Actions.ACTION_SET_USER_PROFILE, new ActionSetUserProfile(instance));
        actionMap.put(Actions.ACTION_SET_PUSH_TOKEN, new ActionSetPushToken(instance));
        actionMap.put(Actions.ACTION_SET_MIN_ACTIVITY_SESSIONS, new ActionSetMinActivitySessions(instance));
        actionMap.put(Actions.ACTION_SET_SESSION_DURATION, new ActionSetSessionDuration(instance));
        actionMap.put(Actions.ACTION_SET_CURRENT_ACTIVITY, new ActionSetCurrentActivity(instance, cordova));
        actionMap.put(Actions.ACTION_SEND_EVENT, new ActionOnEvent(instance));
        actionMap.put(Actions.ACTION_CLEAR_CACHED_DATA, new ActionClearCachedData(instance));
        actionMap.put(Actions.ACTION_GET_AAID, new ActionGetAAID(instance));
        actionMap.put(Actions.ACTION_REG_HMS_SVC_EVENT, new ActionRegHmsSvcEvent(instance));
        actionMap.put(Actions.ACTION_UNREG_HMS_SVC_EVENT, new ActionUnRegHmsSvcEvent(instance));
        actionMap.put(Actions.ACTION_GET_USER_PROFILES, new ActionGetUserProfiles(instance));
        actionMap.put(Actions.ACTION_GET_HA_EVENT_TYPE, new ActionGetHAEventType());
        actionMap.put(Actions.ACTION_GET_HA_PARAM_TYPE, new ActionGetHAParamType());
    }

    public void executeAction(String actionName, JSONObject params, CallbackContext cb) {
        try {
            Action action = actionMap.get(Actions.valueOf(actionName));
            action.execute(params, cb);
        } catch (IllegalArgumentException e) {
            Log.e(TAG, "Action is not registered. actionName : " + actionName);
            cb.error("Action is not registered. actionName : " + actionName);
        } catch (Exception e) {
            Log.e(TAG, "An error occurred while executing action. Err : " + e);
            cb.error("An error occurred while executing action. Action Name : " + actionName);
        }
    }

    public enum Actions {
        ACTION_ENABLE_LOG, ACTION_ENABLE_LOG_WITH_LEVEL, ACTION_ENABLE_ANALYTICS,
        ACTION_ENABLE_AUTO_COLLECTION, ACTION_SET_USER_ID, ACTION_SET_USER_PROFILE,
        ACTION_SET_PUSH_TOKEN, ACTION_SET_MIN_ACTIVITY_SESSIONS, ACTION_SET_SESSION_DURATION,
        ACTION_SET_CURRENT_ACTIVITY, ACTION_SEND_EVENT, ACTION_CLEAR_CACHED_DATA,
        ACTION_GET_AAID, ACTION_REG_HMS_SVC_EVENT, ACTION_UNREG_HMS_SVC_EVENT,
        ACTION_GET_USER_PROFILES, ACTION_GET_HA_EVENT_TYPE, ACTION_GET_HA_PARAM_TYPE;
    }

}
