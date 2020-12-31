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
package com.huawei.hms.cordova.nearby;

import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaInterface;

import org.json.JSONArray;

import com.huawei.hms.cordova.nearby.basef.CordovaBaseModule;
import com.huawei.hms.cordova.nearby.basef.handler.CordovaController;
import com.huawei.hms.cordova.nearby.modules.HMSDiscovery;
import com.huawei.hms.cordova.nearby.modules.HMSMessage;
import com.huawei.hms.cordova.nearby.modules.HMSNearbyBase;
import com.huawei.hms.cordova.nearby.modules.HMSTransfer;
import com.huawei.hms.cordova.nearby.modules.HMSWifi;

import java.util.Arrays;

public class HMSNearby extends CordovaPlugin {
    private static final String SERVICE = "CordovaNearby";
    private static final String VERSION = "5.0.4.302";
    private CordovaController cordovaController;

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        cordovaController = new CordovaController(this, SERVICE, VERSION,
                Arrays.asList(new HMSDiscovery(cordova.getActivity()),
                new HMSTransfer(cordova.getActivity()),
                new HMSMessage(cordova.getActivity()),
                new HMSWifi(cordova.getActivity()),
                new HMSNearbyBase()));
    }

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) {
        return cordovaController.execute(action, args, callbackContext);
    }
    
    @Override
    public void onPause(boolean multitasking) {
        super.onPause(multitasking);
        cordovaController.onPause(multitasking);
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        cordovaController.onDestroy();
    }

    @Override
    public void onReset() {
        super.onReset();
        cordovaController.onReset();
    }

    @Override
    public void onResume(boolean multitasking) {
        super.onResume(multitasking);
        cordovaController.onResume(multitasking);
    }

    @Override
    public void onStart() {
        super.onStart();
        cordovaController.onStart();
    }

    @Override
    public void onStop() {
        super.onStop();
        cordovaController.onStop();
    }
}
