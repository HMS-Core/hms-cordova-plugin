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

package com.huawei.hms.cordova.push.remote;

import android.content.Context;
import android.util.Log;

import com.huawei.agconnect.config.AGConnectServicesConfig;
import com.huawei.hms.cordova.push.constants.Core;
import com.huawei.hms.cordova.push.hmslogger.HMSLogger;
import com.huawei.hms.cordova.push.utils.Action;
import com.huawei.hmf.tasks.Task;
import com.huawei.hms.aaid.HmsInstanceId;
import com.huawei.hms.aaid.entity.AAIDResult;
import com.huawei.hms.common.ApiException;
import com.huawei.hms.opendevice.OpenDevice;
import com.huawei.hms.support.api.opendevice.OdidResult;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.apache.cordova.PluginResult.Status;
import org.json.JSONArray;
import org.json.JSONException;

public class HmsPushInstanceId implements Action {
    private final String TAG = HmsPushInstanceId.class.getSimpleName();
    private HMSLogger hmsLogger;
    private Context context;

    public HmsPushInstanceId(Context context) {
        this.context = context;
        hmsLogger = HMSLogger.getInstance(context);
    }

    public void execute(String action, final JSONArray args, final CallbackContext callbackContext) throws JSONException {
        if (!action.equals("init"))
            hmsLogger.startMethodExecutionTimer(action);

        switch (action) {
            case "init":
                Log.i("HMSPush", "HMSPush initialized ");
                break;
            case "enableLogger":
                enableLogger(callbackContext);
                break;
            case "disableLogger":
                disableLogger(callbackContext);
                break;
            case "getToken":
                getToken(args.length() > 1 ? args.getString(1) : Core.HCM, callbackContext);
                break;
            case "getAAID":
                getAAID(callbackContext);
                break;
            case "getCreationTime":
                getCreationTime(callbackContext);
                break;
            case "getId":
                getId(callbackContext);
                break;
            case "deleteAAID":
                deleteAAID(callbackContext);
                break;
            case "deleteToken":
                deleteToken(args.length() > 1 ? args.getString(1) : Core.HCM, callbackContext);
                break;
            case "getOdid":
                getOdid(callbackContext);
                break;
            default:
                Log.i(TAG, "execute: Wrong Action Sent");
        }
    }

    private void disableLogger(CallbackContext callback) {
        hmsLogger.disableLogger();
        callback.sendPluginResult(new PluginResult(Status.OK,true));
    }

    private void enableLogger(CallbackContext callback) {
        hmsLogger.enableLogger();
        callback.sendPluginResult(new PluginResult(Status.OK,true));
    }


    private void getToken(String scope, CallbackContext callback) {

        try {
            scope = scope.equals("null") ? Core.HCM : scope;
            if (scope.trim().isEmpty()) {
                scope = Core.HCM;
            }
            String appId = AGConnectServicesConfig.fromContext(context).getString(Core.CLIENT_APP_ID);
            String token = HmsInstanceId.getInstance(context).getToken(appId, scope);
            hmsLogger.sendSingleEvent("getToken");
            Log.d(TAG, "Token Received");
            callback.success(token);
        } catch (ApiException e) {
            hmsLogger.sendSingleEvent("getToken", e.getLocalizedMessage());
            callback.error(e.getStatusCode());
        }

    }

    private void getId(CallbackContext callback) {

        try {
            String instanceId = HmsInstanceId.getInstance(context).getId();
            hmsLogger.sendSingleEvent("getId");
            callback.success(instanceId);
        } catch (Exception e) {
            hmsLogger.sendSingleEvent("getId", e.getLocalizedMessage());
            callback.error(e.getLocalizedMessage());
        }
    }


    private void getAAID(final CallbackContext callback) {

        Task<AAIDResult> idResult = HmsInstanceId.getInstance(context).getAAID();
        idResult
                .addOnSuccessListener(aaidResult -> {
                            hmsLogger.sendSingleEvent("getAAID");
                            callback.success(aaidResult.getId());
                        }
                )
                .addOnFailureListener(e -> {
                    hmsLogger.sendSingleEvent("getAAID", e.getLocalizedMessage());
                    callback.error(e.getLocalizedMessage());
                });

    }

    private void getOdid(CallbackContext callback) {
        Task<OdidResult> idResult = OpenDevice.getOpenDeviceClient(context).getOdid();
        idResult
                .addOnSuccessListener(aaidResult -> {
                            hmsLogger.sendSingleEvent("getOdid");
                            callback.success(aaidResult.getId());
                        }
                )
                .addOnFailureListener(e -> {
                    hmsLogger.sendSingleEvent("getOdid", e.getLocalizedMessage());
                    callback.error(e.getLocalizedMessage());
                });
    }

    private void getCreationTime(CallbackContext callback) {

        try {
            long createTime = HmsInstanceId.getInstance(context).getCreationTime();
            hmsLogger.sendSingleEvent("getCreationTime");
            callback.success(createTime + "");
        } catch (Exception e) {
            hmsLogger.sendSingleEvent("getCreationTime", e.getLocalizedMessage());
            callback.error(e.getLocalizedMessage());
        }
    }


    private void deleteAAID(CallbackContext callback) {

        try {
            HmsInstanceId.getInstance(context).deleteAAID();
            hmsLogger.sendSingleEvent("deleteAAID");
            callback.sendPluginResult(new PluginResult(Status.OK,true));
        } catch (ApiException e) {
            hmsLogger.sendSingleEvent("deleteAAID", e.getLocalizedMessage());
            callback.error(e.getLocalizedMessage());
        }
    }


    private void deleteToken(String scope, CallbackContext callback) {

        try {
            scope = scope.equals("null") ? Core.HCM : scope;
            if (scope.trim().isEmpty()) {
                scope = Core.HCM;
            }

            String appId = AGConnectServicesConfig.fromContext(context).getString(Core.CLIENT_APP_ID);
            HmsInstanceId.getInstance(context).deleteToken(appId, scope);
            hmsLogger.sendSingleEvent("deleteToken");
            callback.sendPluginResult(new PluginResult(Status.OK,true));
        } catch (ApiException e) {
            hmsLogger.sendSingleEvent("deleteToken", e.getLocalizedMessage());
            callback.error(e.getLocalizedMessage());
        }
    }
}
