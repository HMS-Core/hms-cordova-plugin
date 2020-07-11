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

package com.huawei.hms.cordova.analytics;

import android.app.Activity;
import android.os.Build;
import android.util.Log;

import com.huawei.hms.analytics.HiAnalytics;
import com.huawei.hms.cordova.analytics.actions.ActionManager;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class HMSAnalyticsPlugin extends CordovaPlugin {

    private String TAG = HMSAnalyticsPlugin.class.getSimpleName();

    private ActionManager actionManager = null;

    @Override
    protected void pluginInitialize() {
        actionManager = new ActionManager(this.cordova);
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if(args == null || args.opt(0) == null) {
            callbackContext.error("Argument array is null or empty!");
            return false;
        }

        if (args.optJSONObject(0) == null) {
            callbackContext.error("Invalid parameter type, first argument must be a JSONObject");
            return false;
        }

        JSONObject params = args.getJSONObject(0);
        actionManager.executeAction(action, params, callbackContext);
        return true;
    }

    @Override
    public void onDestroy() {
        Log.i(TAG, "HMSAnalyticsPlugin -> onDestroy");
        Activity activity = cordova.getActivity();
        if (activity.getLocalClassName().equals("MainActivity")) {
            HiAnalytics.getInstance(activity.getApplicationContext()).unRegHmsSvcEvent();
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                Log.i(TAG, "finishAndRemoveTask");
                activity.finishAndRemoveTask();
            }
        }
    }
}
