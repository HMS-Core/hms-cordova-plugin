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

package com.huawei.hms.cordova.scan;

import android.content.Intent;
import android.util.Log;
import android.view.ViewGroup;
import android.view.ViewGroup.LayoutParams;
import android.widget.FrameLayout;

import com.huawei.hms.cordova.scan.backend.helpers.Exceptions;
import com.huawei.hms.cordova.scan.backend.layout.OnViewLayoutScroll;
import com.huawei.hms.cordova.scan.backend.helpers.OnViewLifecycle;
import com.huawei.hms.cordova.scan.backend.layout.PluginLayout;
import com.huawei.hms.cordova.scan.backend.utils.JSONUtils;
import com.huawei.hms.cordova.scan.basef.handler.CordovaController;
import com.huawei.hms.hmsscankit.ScanUtil;
import com.huawei.hms.ml.scan.HmsScan;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;

import java.io.IOException;
import java.util.Arrays;
import java.util.Objects;

import static android.app.Activity.RESULT_OK;

public class HMSScan extends CordovaPlugin {
    private static final String TAG = HMSScan.class.getSimpleName();
    private static final int REQUEST_CODE_SCAN_ONE = 0X01;
    private CordovaController cordovaController;
    private CallbackContext callbackContext;
    private PluginLayout pluginLayout;
    private OnViewLayoutScroll onViewLayoutScroll;
    private OnViewLifecycle onViewLifecycle;

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);

        pluginLayout = new PluginLayout(webView.getContext());
        pluginLayout.setLayoutParams(
                new FrameLayout.LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT));
        cordova.getActivity().runOnUiThread(() -> {
            pluginLayout.bringToFront();
            ((ViewGroup) webView.getView().getParent()).addView(pluginLayout);
        });


        final String kit = "Scan";
        final String version = "1.3.1.301";
        cordovaController = new CordovaController(this, kit, version,
                Arrays.asList(new HMSScanModule(this),
                        new ViewBaseModule(pluginLayout, this)
                ));

        boolean isIonicCapacitor;
        try {
            isIonicCapacitor = Objects.requireNonNull(cordova.getContext().getAssets().list("public")).length >
                    Objects.requireNonNull(cordova.getContext().getAssets().list("www")).length;
        } catch (IOException e) {
            Log.e(TAG, "isIonicCapacitor -> " + e.getMessage());
            return;
        }

        if (isIonicCapacitor) {
            return;
        }
        webView.getView().getViewTreeObserver().addOnScrollChangedListener(() -> {
            if (onViewLayoutScroll != null) {
                onViewLayoutScroll.onScroll(webView.getView().getScrollX(), webView.getView().getScrollY());
            }
        });
    }

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) {
        this.callbackContext = callbackContext;
        return cordovaController.execute(action, args, callbackContext);
    }

    @Override
    public void onPause(boolean multitasking) {
        super.onPause(multitasking);
        onViewLifecycle.pause(multitasking);
    }

    @Override
    public void onStart() {
        super.onStart();
        onViewLifecycle.start();
    }

    @Override
    public void onResume(boolean multitasking) {
        Log.i(TAG, "onResume: ");
        super.onResume(multitasking);
        onViewLifecycle.resume(multitasking);
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        onViewLifecycle.destroy();
    }

    @Override
    public void onStop() {
        super.onStop();
        onViewLifecycle.stop();
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, requestCode, data);
        if (resultCode != RESULT_OK || data == null) {
            callbackContext.error(Exceptions.toErrorJSON(Exceptions.ERR_NO_RESULT));
            return;
        }
        if (requestCode == REQUEST_CODE_SCAN_ONE) {
            HmsScan obj = data.getParcelableExtra(ScanUtil.RESULT);
            if (obj != null) {
                try {
                    callbackContext.success(JSONUtils.hmsScansToJSON(obj));
                } catch (JSONException e) {
                    Log.e(TAG, "onActivityResult: error -> " + e.toString());
                }
            }
        }
    }

    public void setLayoutScroll(OnViewLayoutScroll onViewLayoutScroll) {
        this.onViewLayoutScroll = onViewLayoutScroll;
    }

    public void setOnViewLifecycle(OnViewLifecycle onViewLifecycle) {
        this.onViewLifecycle = onViewLifecycle;
    }
}
