/*
    Copyright 2020-2021. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.iap;

import android.content.Intent;
import com.huawei.hms.cordova.iap.basef.CordovaBaseModule;
import com.huawei.hms.cordova.iap.basef.handler.CordovaController;
import java.util.Arrays;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;

public class HMSInAppPurchases extends CordovaPlugin {
    private static final String KIT = "IAP";
    private static final String VERSION = "5.0.4.302";
    private CordovaController cordovaController;
    private OnActivityResultCallback onActivityResultCallback;

    @Override
    public void initialize(final CordovaInterface cordova, final CordovaWebView webView) {
        super.initialize(cordova, webView);
        cordovaController = new CordovaController(this, KIT, VERSION,
            Arrays.asList(new CordovaBaseModule[] {
                new InAppPurchases(this)
            }));
    }

    @Override
    public boolean execute(final String action, final JSONArray args, final CallbackContext callbackContext) {
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

    @Override
    public void onPause(final boolean multitasking) {
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
    public void onResume(final boolean multitasking) {
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
