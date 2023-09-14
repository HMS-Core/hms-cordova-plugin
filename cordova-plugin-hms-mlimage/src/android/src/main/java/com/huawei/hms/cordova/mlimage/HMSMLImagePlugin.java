/*
 * Copyright 2023. Huawei Technologies Co., Ltd. All rights reserved.
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

package com.huawei.hms.cordova.mlimage;

import android.content.Intent;

import com.huawei.hms.cordova.mlimage.basef.handler.CordovaController;
import com.huawei.hms.cordova.mlimage.common.HMSMLApplication;
import com.huawei.hms.cordova.mlimage.common.HMSMLCompositeAnalyzer;
import com.huawei.hms.cordova.mlimage.common.HMSMLFrame;
import com.huawei.hms.cordova.mlimage.common.HMSMLLensEngine;
import com.huawei.hms.cordova.mlimage.providers.custommodel.MLCustomModel;

import com.facebook.drawee.backends.pipeline.Fresco;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;

import java.util.Arrays;

public class HMSMLImagePlugin extends CordovaPlugin {
    private static final String TAG = HMSMLImagePlugin.class.getSimpleName();

    private static final String SERVICE = "HMSMLImagePlugin";

    private static final String VERSION = "3.11.0.300";

    private CordovaController cordovaController;

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        Fresco.initialize(cordova.getContext());
        HMSMLLensEngine mlLensEngine = new HMSMLLensEngine(cordova);

        webView.getView().getViewTreeObserver().addOnScrollChangedListener(() -> {
            if (mlLensEngine.isStart) {
                mlLensEngine.scrollXAndY(-webView.getView().getScrollX(), -webView.getView().getScrollY());
            }
        });
        cordovaController = new CordovaController(this, SERVICE, VERSION,
            Arrays.asList(new HMSMLApplication(), new HMSMLFrame(cordova), mlLensEngine, new MLCustomModel(cordova),
                new HMSMLCompositeAnalyzer(cordova)));
    }

    @Override
    public boolean execute(final String action, final JSONArray args, final CallbackContext callbackContext) {
        return cordovaController.execute(action, args, callbackContext);
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent intent) {
        super.onActivityResult(requestCode, resultCode, intent);
        cordovaController.onActivityResult(requestCode, resultCode, intent);
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
