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

import android.graphics.Rect;
import android.text.TextUtils;
import android.util.DisplayMetrics;
import android.util.Log;
import android.widget.FrameLayout;
import android.widget.ImageView;

import com.huawei.hms.cordova.scan.backend.layout.InitialProps;
import com.huawei.hms.cordova.scan.backend.layout.PluginLayout;
import com.huawei.hms.cordova.scan.backend.layout.PluginLayoutManager;
import com.huawei.hms.cordova.scan.backend.utils.CordovaUtils;
import com.huawei.hms.cordova.scan.backend.utils.JSONUtils;
import com.huawei.hms.cordova.scan.basef.CordovaBaseModule;
import com.huawei.hms.cordova.scan.basef.handler.CorPack;
import com.huawei.hms.cordova.scan.basef.handler.Promise;
import com.huawei.hms.hmsscankit.RemoteView;

import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;


public class CustomViewModule extends CordovaBaseModule {
    private static final String TAG = CustomViewModule.class.getName();
    private RemoteView remoteView;
    private CordovaInterface cordovaInterface;
    private PluginLayout pluginLayout;
    private PluginLayoutManager pluginLayoutManager;
    private FrameLayout frameLayout;
    private ImageView imageView;
    private Promise promise;

    public CustomViewModule(CordovaInterface cordovaInterface, PluginLayout pluginLayout, Promise promise) {
        this.cordovaInterface = cordovaInterface;
        this.pluginLayout = pluginLayout;
        this.promise = promise;
    }

    public void customViewMode(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final JSONObject initialPropsJSONObject = args.optJSONObject(0);
        InitialProps initialProps = CordovaUtils.constructInitialPropsFromJSON(initialPropsJSONObject);

        final JSONObject customProps = args.optJSONObject(1);
        final int[] scanTypes = JSONUtils.getScanTypes(customProps.getJSONArray("scanTypes"));
        final boolean isContinuouslyScan = customProps.optBoolean("isContinuouslyScan", true);
        final boolean enableReturnBitmap = customProps.optBoolean("enableReturnBitmap", false);
        final boolean enableScanAreaBox = customProps.optBoolean("enableScanAreaBox", false);
        final int scanFrameSize = customProps.optInt("scanFrameSize", 240);
        final DisplayMetrics dm = cordovaInterface.getContext().getResources().getDisplayMetrics();
        final float density = dm.density;
        final int scanFrameSizeHeight = (int) (scanFrameSize * density);
        final int scanFrameSizeWidth = (int) (scanFrameSize * density);
        Rect rect = new Rect();
        rect.left = initialProps.getWidth() / 2 - scanFrameSizeWidth / 2;
        rect.right = initialProps.getWidth() / 2 + scanFrameSizeWidth / 2;
        rect.top = initialProps.getHeight() / 2 - scanFrameSizeHeight / 2;
        rect.bottom = initialProps.getHeight() / 2 + scanFrameSizeHeight / 2;

        if (enableReturnBitmap) {
            remoteView = new RemoteView.Builder()
                    .setContext(cordovaInterface.getActivity())
                    .setBoundingBox(rect)
                    .enableReturnBitmap()
                    .setContinuouslyScan(isContinuouslyScan)
                    .setFormat(scanTypes[0], scanTypes).build();
        } else {
            remoteView = new RemoteView.Builder()
                    .setContext(cordovaInterface.getActivity())
                    .setBoundingBox(rect)
                    .setContinuouslyScan(isContinuouslyScan)
                    .setFormat(scanTypes[0], scanTypes).build();
        }

        remoteView.setOnLightVisibleCallback(visible -> {
            if (visible) {
                remoteView.switchLight();
            }
        });

        remoteView.setOnResultCallback(result -> {
            if (result != null && result.length > 0 && result[0] != null && !TextUtils.isEmpty(result[0].getOriginalValue())) {
                try {
                    if (!isContinuouslyScan) {
                        remoteView.onStop();
                    }
                    corPack.getEventRunner().sendEvent("scanResultClickListener", JSONUtils.hmsScansToJSON(result[0], cordovaInterface, enableReturnBitmap));
                } catch (JSONException e) {
                    Log.e(TAG, "customViewModule: error -> " + e.toString());
                }
            }
        });
        corPack.getCordova().getActivity().runOnUiThread(() -> {
            remoteView.onCreate(null);

            frameLayout = new FrameLayout(corPack.getCordova().getContext());
            frameLayout.setLayoutParams(new FrameLayout.LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));

            InitialProps props = CordovaUtils.constructInitialPropsFromJSON(initialPropsJSONObject);
            FrameLayout.LayoutParams layoutParams = new FrameLayout.LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT);
            layoutParams.setMargins(props.getMarginLeft(), props.getMarginTop(), props.getMarginRight(), props.getMarginBottom());
            remoteView.setLayoutParams(layoutParams);
            frameLayout.addView(remoteView);

            if (enableScanAreaBox) {
                imageView = new ImageView(cordovaInterface.getContext());
                imageView.setBackground(corPack.getCordova().getContext().getDrawable(CordovaUtils.rdraw(corPack.getCordova(), "cloors")));
                FrameLayout.LayoutParams imageParams = new FrameLayout.LayoutParams(scanFrameSizeWidth, scanFrameSizeHeight);
                imageView.setLayoutParams(imageParams);
                imageParams.setMargins(rect.left, rect.top, rect.right, rect.bottom);
                frameLayout.addView(imageView);
            }

            pluginLayoutManager = new PluginLayoutManager(pluginLayout, frameLayout, CordovaUtils.constructInitialPropsFromJSON(initialPropsJSONObject));
            remoteView.onStart();
        });
    }

    public void openFlushLight() {
        if (remoteView != null) {
            remoteView.switchLight();
        }
        promise.success();
    }

    public void pauseContinuouslyScan() {
        if (remoteView != null) {
            remoteView.pauseContinuouslyScan();
        }
        Log.i(TAG, "pauseContinuouslyScan: isEnable");
        promise.success();
    }

    public void resumeContinuouslyScan() {
        if (remoteView != null) {
            remoteView.resumeContinuouslyScan();
        }
        Log.i(TAG, "resumeContinuouslyScan: isEnable");
        promise.success();
    }

    public void onStartMethod() {
        remoteView.onStart();
    }

    public void onPauseMethod() {
        remoteView.onPause();
    }

    public void onResumeMethod(boolean multitasking) {
        remoteView.onResume();
    }

    public void onStopMethod() {
        remoteView.onStop();
    }

    public void onDestroyMethod() {
        stopViewService();
    }

    public void stopViewService() {
        if (remoteView != null && pluginLayoutManager != null) {
            cordovaInterface.getActivity().runOnUiThread(() -> {
                remoteView.onStop();
                pluginLayoutManager.removeChildView(pluginLayout);
                frameLayout.removeView(remoteView);
                if (imageView != null) {
                    frameLayout.removeView(imageView);
                }
            });
        }
    }

    public void onScroll(int scrollX, int scrollY) {
        pluginLayout.updateScrollValues(scrollX, scrollY);
        pluginLayoutManager.scroll(scrollX, scrollY);
    }

    public void forceUpdateXAndY(final JSONArray args) {
        if (pluginLayoutManager == null) {
            return;
        }
        pluginLayoutManager.forceUpdateXAndY(args.optInt(0), args.optInt(1),
                args.optInt(2), args.optInt(3));
    }
}
