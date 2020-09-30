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

package com.huawei.hms.cordova.push;

import android.os.Bundle;
import android.util.Log;
import android.content.Intent;

import com.huawei.hms.cordova.push.constants.Core;
import com.huawei.hms.cordova.push.remote.HmsPushMessaging;
import com.huawei.hms.cordova.push.utils.ActionManager;
import com.huawei.hms.cordova.push.utils.CordovaUtils;
import com.huawei.hms.cordova.push.utils.RemoteMessageUtils;
import com.huawei.hms.push.RemoteMessage;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

public class HMSPush extends CordovaPlugin {

    private String TAG = HMSPush.class.getSimpleName();
    private static CordovaPlugin staticPlugin;
    private ActionManager actionManager = null;
    private String customIntent=null;

    public static CordovaPlugin getPlugin() {
        return staticPlugin;
    }

    public static void setPlugin(CordovaPlugin plugin) {
        staticPlugin= plugin;
    }

    @Override
    protected void pluginInitialize() {
        actionManager = new ActionManager(this);
        setPlugin(this);
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        actionManager.executeAction(action, args, callbackContext);
        return true;
    }

    @Override
    public void onResume(boolean multitasking) {
        Bundle extras = null;
        try{
            extras=cordova.getActivity().getIntent().getExtras();
        }catch (Exception ex) {
            Log.w(TAG, "onResume: "+ex.getLocalizedMessage() );
        }

        if(customIntent!=null){
            CordovaUtils.sendEvent(staticPlugin, Core.Event.CUSTOM_INTENT_EVENT, customIntent);
            customIntent=null;
        }

        if(extras!=null) {
            try {

                HmsPushMessaging.setInitial(new RemoteMessage(extras));
                CordovaUtils.sendEvent(staticPlugin, Core.Event.NOTIFICATION_OPENED_EVENT, RemoteMessageUtils.fromMap(HmsPushMessaging.getInitial()));
            } catch (JSONException e) {
                Log.w(TAG, "onResume: "+e.getLocalizedMessage());
            }
        }

        super.onResume(multitasking);
    }

    public void onNewIntent(Intent intent) {
        cordova.getActivity().setIntent(intent);
        customIntent=intent.getDataString();
    }


}
