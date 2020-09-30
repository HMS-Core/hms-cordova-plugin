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

package com.huawei.hms.cordova.push.remote;

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
import org.json.JSONArray;

public class HmsPushInstanceId implements Action {
    private final String TAG = HmsPushInstanceId.class.getSimpleName();
    private HMSLogger hmsLogger;
    private CordovaInterface cordova;
    private CordovaWebView webView;

    public HmsPushInstanceId(CordovaPlugin plugin){
        this.webView=plugin.webView;
        this.cordova=plugin.cordova;
        hmsLogger= HMSLogger.getInstance(cordova.getContext());
    }

    public void execute(String action, JSONArray args, CallbackContext callbackContext) {
        if(!action.equals("init"))
        hmsLogger.startMethodExecutionTimer(action);

        switch (action) {
            case "init":
                Log.i("HMSPush", "HMSPush initialized ");
                break;
            case "enableLogger":
                enableLogger();
                break;
            case "disableLogger":
                disableLogger();
                break;
            case "getToken":
                getToken(callbackContext);
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
                deleteToken(callbackContext);
                break;
            case "getOdid":
                getOdid(callbackContext);
                break;
            default:
                Log.i(TAG, "execute: Wrong Action Sent");
        }
    }

    private void disableLogger() {
        hmsLogger.disableLogger();
    }

    private void enableLogger() {
        hmsLogger.enableLogger();
    }


    private void getToken(CallbackContext callback) {

        try {
            String appId = AGConnectServicesConfig.fromContext(cordova.getContext()).getString(Core.CLIENT_APP_ID);
            String token = HmsInstanceId.getInstance(cordova.getContext()).getToken(appId, Core.HCM);
            hmsLogger.sendSingleEvent("getToken");
            callback.success(token);
        } catch (ApiException e) {
            hmsLogger.sendSingleEvent("getToken","500");
            callback.error(e.getStatusCode());
        }

    }


    private void getId(CallbackContext callback) {

        try {
            String instanceId = HmsInstanceId.getInstance(cordova.getContext()).getId();
            hmsLogger.sendSingleEvent("getId");
            callback.success(instanceId);
        } catch (Exception e) {
            hmsLogger.sendSingleEvent("getId","500");
            callback.error(e.getMessage());
        }
    }


    private void getAAID(final CallbackContext callback) {

        Task<AAIDResult> idResult = HmsInstanceId.getInstance(cordova.getContext()).getAAID();
        idResult
            .addOnSuccessListener(aaidResult -> {

                hmsLogger.sendSingleEvent("getAAID");
                callback.success(aaidResult.getId());
                }
            )
            .addOnFailureListener(e -> {
                hmsLogger.sendSingleEvent("getAAID","500");
                callback.error(e.getMessage());
            });

    }

    private void getOdid(CallbackContext callback) {
        Task<OdidResult> idResult = OpenDevice.getOpenDeviceClient(cordova.getContext()).getOdid();
        idResult
            .addOnSuccessListener(aaidResult -> {
                hmsLogger.sendSingleEvent("getOdid");
                callback.success(aaidResult.getId());
                }
            )
            .addOnFailureListener(e -> {
                hmsLogger.sendSingleEvent("getOdid","500");
                callback.error(e.getMessage());
            });
    }

    private void getCreationTime(CallbackContext callback) {

        try {
            String createTime = HmsInstanceId.getInstance(cordova.getContext()).getCreationTime() + "";
            hmsLogger.sendSingleEvent("getCreationTime");
            callback.success(createTime);
        } catch (Exception e) {
            hmsLogger.sendSingleEvent("getCreationTime","500");
            callback.error(e.getMessage());
        }
    }


    private void deleteAAID(CallbackContext callback) {

        try {
            HmsInstanceId.getInstance(cordova.getContext()).deleteAAID();
            hmsLogger.sendSingleEvent("deleteAAID");
            callback.success();
        } catch (ApiException e) {
            hmsLogger.sendSingleEvent("deleteAAID","500");
            callback.error(e.getMessage());
        }
    }


    private void deleteToken(CallbackContext callback) {

        try {
            String appId = AGConnectServicesConfig.fromContext(cordova.getContext()).getString(Core.CLIENT_APP_ID);
            HmsInstanceId.getInstance(cordova.getContext()).deleteToken(appId, Core.HCM);
            hmsLogger.sendSingleEvent("deleteToken");
            callback.success();
        } catch (ApiException e) {
            hmsLogger.sendSingleEvent("deleteToken","500");
            callback.error(e.getMessage());
        }
    }
}
