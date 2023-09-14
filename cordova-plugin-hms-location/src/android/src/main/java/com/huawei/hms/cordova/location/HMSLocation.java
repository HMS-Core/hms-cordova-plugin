/*
 * Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.huawei.hms.cordova.location;

import android.content.Intent;
import android.util.Log;

import com.huawei.hms.cordova.location.basef.handler.CordovaController;
import com.huawei.hms.cordova.location.services.ActivityIdentificationService;
import com.huawei.hms.cordova.location.services.CoordinateConversionService;
import com.huawei.hms.cordova.location.services.FusedLocationService;
import com.huawei.hms.cordova.location.services.GeocoderService;
import com.huawei.hms.cordova.location.services.GeofenceService;
import com.huawei.hms.cordova.location.services.PluginService;
import com.huawei.hms.cordova.location.utils.CordovaUtils;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;

import java.util.Arrays;

public class HMSLocation extends CordovaPlugin {

    private static final String SERVICE = "HMSLocation";

    private static final String VERSION = "6.11.0.301";

    private CordovaController cordovaController;

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        CordovaUtils.createInstance(webView);
        cordovaController = new CordovaController(this, SERVICE, VERSION,
            Arrays.asList(new FusedLocationService(cordova), new GeofenceService(cordova),
                new ActivityIdentificationService(cordova), new GeocoderService(), new PluginService(),
                new CoordinateConversionService()));
        cordova.setActivityResultCallback(this);
    }

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) {
        cordova.getThreadPool().execute(() -> cordovaController.execute(action, args, callbackContext));
        return true;
    }

    @Override
    public void onPause(boolean multitasking) {
        super.onPause(multitasking);
        cordovaController.onPause(multitasking);
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

    @Override
    public void onDestroy() {
        super.onDestroy();
        cordovaController.onDestroy();
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent intent) {
        super.onActivityResult(requestCode, resultCode, intent);
        cordovaController.onActivityResult(requestCode, resultCode, intent);
    }

    @Override
    public void onReset() {
        super.onReset();
        cordovaController.onReset();
    }

    @Override
    public void onRequestPermissionResult(int requestCode, String[] permissions, int[] grantResults) {
        Log.d("HMSLocation",
            "onRequestPermissionResult() called with: requestCode = [" + requestCode + "], permissions = ["
                + Arrays.toString(permissions) + "], grantResults = [" + Arrays.toString(grantResults) + "]");
        cordovaController.onRequestPermissionResult(requestCode, permissions, grantResults);
    }
}
