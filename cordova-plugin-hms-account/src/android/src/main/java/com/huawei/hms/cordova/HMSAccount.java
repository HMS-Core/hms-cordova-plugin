/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova;

import android.content.Intent;

import com.huawei.hms.cordova.basef.handler.CordovaController;
import com.huawei.hms.cordova.account.HMSAuthService;
import com.huawei.hms.cordova.account.HMSAuthManager;
import com.huawei.hms.cordova.hwid.HMSHuaweiIdAuthTool;
import com.huawei.hms.cordova.hwid.HMSReadSMSManager;
import com.huawei.hms.cordova.hwid.HMSNetworkTool;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;

import java.util.Arrays;

public class HMSAccount extends CordovaPlugin {
    private static final String KIT = "Account";

    private static final String VERSION = "6.11.0.300";

    private CordovaController cordovaController;

    private OnActivityResultCallback onActivityResultCallback;

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        cordovaController = new CordovaController(this, KIT, VERSION,
            Arrays.asList(new HMSAuthService(cordova, this), new HMSAuthManager(cordova),
                new HMSHuaweiIdAuthTool(cordova), new HMSReadSMSManager(cordova), new HMSNetworkTool()));
    }

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) {
        return cordovaController.execute(action, args, callbackContext);
    }

    @Override
    public void onActivityResult(final int requestCode, final int resultCode, final Intent intent) {
        super.onActivityResult(requestCode, resultCode, intent);
        if (onActivityResultCallback != null) {
            onActivityResultCallback.onActivityResult(requestCode, resultCode, intent);
        }
    }

    public void setOnActivityResultCallback(final OnActivityResultCallback onActivityResultCallback) {
        this.onActivityResultCallback = onActivityResultCallback;
    }

}