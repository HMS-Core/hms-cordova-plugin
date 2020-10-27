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

package com.huawei.hms.cordova.push;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.content.Intent;

import com.huawei.hms.cordova.push.constants.Core;
import com.huawei.hms.cordova.push.remote.HmsPushMessaging;
import com.huawei.hms.cordova.push.utils.ActionManager;
import com.huawei.hms.cordova.push.utils.BundleUtils;
import com.huawei.hms.cordova.push.utils.CordovaUtils;
import com.huawei.hms.cordova.push.utils.MapUtils;
import com.huawei.hms.cordova.push.utils.RemoteMessageUtils;
import com.huawei.hms.push.RemoteMessage;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

public class HMSPush extends CordovaPlugin {

    private String TAG = HMSPush.class.getSimpleName();
    private static CordovaPlugin staticPlugin;
    private ActionManager actionManager = null;
    private Boolean notificationOpened=false;

    public static CordovaPlugin getPlugin() {
        return staticPlugin;
    }

    public static void setPlugin(CordovaPlugin plugin) {
        staticPlugin = plugin;
    }

    @Override
    protected void pluginInitialize() {
        actionManager = new ActionManager(this);
        setPlugin(this);
        Bundle extras;
        try{
            extras=this.cordova.getActivity().getIntent().getExtras();
            if(extras != null)
                getInitial();
        }catch (Exception ex){
            Log.i(TAG, "getExtras: "+ ex.getLocalizedMessage());
        }
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext)  {
        actionManager.executeAction(action, args, callbackContext);
        return true;
    }

    @Override
    public void onResume(boolean multitasking) {
        if(notificationOpened){
            getInitial();
        }
        notificationOpened=false;
        super.onResume(multitasking);
    }

    public void getInitial(){
        try {
            Map<String, Object> map = new HashMap<>();
            Activity activity = cordova.getActivity();
            if (activity == null) return;
            Intent intent = activity.getIntent();

            Bundle bundleExtras = intent.getExtras();
            if (bundleExtras != null) {
                RemoteMessage remoteMessage = new RemoteMessage(bundleExtras);
                map.put("remoteMessage", RemoteMessageUtils.fromMap(remoteMessage));
                JSONObject extras= MapUtils.fromBundle(bundleExtras);
                map.put("extras", extras);
                map.put("uriPage", intent.getDataString());
                JSONObject result= MapUtils.toJSONObject(map);
                HmsPushMessaging.setInitial(result);
                CordovaUtils.sendEvent(staticPlugin, Core.Event.NOTIFICATION_OPENED_EVENT, result);
            }
        } catch (JSONException e) {
            Log.w(TAG, "onResume: " + e.getLocalizedMessage());
        }
    }

    public void onNewIntent(Intent intent) {
        cordova.getActivity().setIntent(intent);
        HmsPushMessaging.setInitial(null);
        notificationOpened=true;
    }


}
