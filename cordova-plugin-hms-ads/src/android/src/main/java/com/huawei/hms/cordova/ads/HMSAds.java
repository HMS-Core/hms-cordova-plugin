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

package com.huawei.hms.cordova.ads;

import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewGroup.LayoutParams;
import android.widget.FrameLayout;

import com.huawei.hms.cordova.ads.basef.handler.CordovaController;
import com.huawei.hms.cordova.ads.layout.PluginAdLayout;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;

import java.io.IOException;
import java.util.Arrays;
import java.util.Objects;

public class HMSAds extends CordovaPlugin {
    private static final String TAG = HMSAds.class.getSimpleName();
    private static final String KIT = "Ads";
    private static final String VERSION = "13.4.35.301";

    private CordovaController cordovaController;
    private OnAdLayoutScroll onAdLayoutScroll;
    private PluginAdLayout pluginAdLayout;

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);

        pluginAdLayout = new PluginAdLayout(webView.getContext());
        pluginAdLayout.setLayoutParams(
            new FrameLayout.LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT));
        cordova.getActivity().runOnUiThread(() -> {
            pluginAdLayout.bringToFront();
            ((ViewGroup) webView.getView().getParent()).addView(pluginAdLayout);
        });
        cordovaController = new CordovaController(this, KIT, VERSION,
            Arrays.asList(new HwAdsModule(), new ConsentModule(), new IdentifierModule(), new InstallReferrerModule(),
                new AdManagerModule(pluginAdLayout, this)));

        boolean isIonicCapacitor = false;
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
            if (onAdLayoutScroll != null) {
                onAdLayoutScroll.onScroll(webView.getView().getScrollX(), webView.getView().getScrollY());
            }
        });
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

    public void attachChildViewToPluginAdLayout(View view) {
        pluginAdLayout.addView(view);
    }

    public void setOnAdLayoutScroll(OnAdLayoutScroll onAdLayoutScroll) {
        this.onAdLayoutScroll = onAdLayoutScroll;
    }

}
