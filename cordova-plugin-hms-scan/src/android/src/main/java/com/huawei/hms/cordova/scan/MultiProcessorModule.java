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

import android.content.Context;
import android.graphics.Point;
import android.graphics.Rect;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.Display;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import android.view.WindowManager;
import android.widget.FrameLayout;
import android.widget.ImageView;

import com.huawei.hms.cordova.scan.backend.draw.CameraOperation;
import com.huawei.hms.cordova.scan.backend.draw.CommonHandler;
import com.huawei.hms.cordova.scan.backend.draw.ScanResultView;
import com.huawei.hms.cordova.scan.backend.layout.InitialProps;
import com.huawei.hms.cordova.scan.backend.layout.PluginLayout;
import com.huawei.hms.cordova.scan.backend.layout.PluginLayoutManager;
import com.huawei.hms.cordova.scan.backend.utils.CordovaUtils;
import com.huawei.hms.cordova.scan.backend.utils.JSONUtils;
import com.huawei.hms.cordova.scan.basef.CordovaBaseModule;
import com.huawei.hms.cordova.scan.basef.CordovaMethod;
import com.huawei.hms.cordova.scan.basef.HMSLog;
import com.huawei.hms.cordova.scan.basef.handler.CorPack;
import com.huawei.hms.cordova.scan.basef.handler.Promise;

import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

public class MultiProcessorModule extends CordovaBaseModule {
    private final String TAG = MultiProcessorModule.class.getName();
    private PluginLayout pluginLayout;
    private PluginLayoutManager pluginLayoutManager;
    private CordovaInterface cordova;
    private ScanResultView scanResultView;
    private SurfaceHolder surfaceHolder;
    private CameraOperation cameraOperation;
    private SurfaceCallBack surfaceCallBack;
    private CommonHandler handler;
    private boolean isShow;
    private int mode;
    public int[] scanTypes;
    private CorPack corPack;
    private ImageView imageView;
    private FrameLayout frameLayout;

    public MultiProcessorModule(CordovaInterface cordova, PluginLayout pluginLayout) {
        this.cordova = cordova;
        this.pluginLayout = pluginLayout;
    }

    public void onStartMethod() {
        Log.d(TAG, "onStartMethod: ");
    }

    public void onPauseMethod() {
        Log.d(TAG, "onPauseMethod: ");
        if (handler != null) {
            handler.quit();
            handler = null;
        }
        cameraOperation.close();
        if (!isShow) {
            surfaceHolder.removeCallback(surfaceCallBack);
        }
    }

    public void onResumeMethod(boolean multitasking) {
        Log.d(TAG, "onResumeMethod: ");
        if (isShow) {
            initCamera();
        } else {
            surfaceHolder.addCallback(surfaceCallBack);
        }
    }

    public void onStopMethod() {
        Log.d(TAG, "onStopMethod: ");
    }

    @CordovaMethod
    @HMSLog
    public void stopMultiProcessor(final CorPack corPack, final JSONArray args, final Promise promise) {
        stopViewService();
        promise.success();
    }

    public void stopViewService() {
        if (handler != null) {
            handler.quit();
            handler = null;
        }
        cameraOperation.close();
        cameraOperation.stopPreview();
        if (!isShow) {
            surfaceHolder.removeCallback(surfaceCallBack);
        }
        if (pluginLayoutManager != null) {
            pluginLayoutManager.removeChildView(pluginLayout);
            pluginLayoutManager.removeChildView(frameLayout);
        }
    }

    @CordovaMethod
    @HMSLog
    public void multiProcessorMode(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.corPack = corPack;
        final JSONObject initialPropsJSON = args.optJSONObject(0);
        final JSONObject customPropsJSON = args.optJSONObject(1);
        mode = args.getInt(2);
        final JSONObject viewAttributes = customPropsJSON.optJSONObject("viewAttributes");
        InitialProps initialProps = CordovaUtils.constructInitialPropsFromJSON(initialPropsJSON);
        final int scanFrameSize = customPropsJSON.optInt("scanFrameSize", 240);
        final boolean enableScanAreaBox = customPropsJSON.optBoolean("enableScanAreaBox", true);
        final boolean enableDrawScanResult = customPropsJSON.optBoolean("enableDrawScanResult", true);

        scanTypes = JSONUtils.getScanTypes(customPropsJSON.getJSONArray("scanTypes"));

        final DisplayMetrics dm = corPack.getCordova().getContext().getResources().getDisplayMetrics();
        final float density = dm.density;

        final int scanFrameSizeHeight = (int) (scanFrameSize * density);
        final int scanFrameSizeWidth = (int) (scanFrameSize * density);

        cameraOperation = new CameraOperation();
        surfaceCallBack = new SurfaceCallBack();

        Rect rect = new Rect();
        rect.left = initialProps.getWidth() / 2 - scanFrameSizeWidth / 2;
        rect.right = initialProps.getWidth() / 2 + scanFrameSizeWidth / 2;
        rect.top = initialProps.getHeight() / 2 - scanFrameSizeHeight / 2;
        rect.bottom = initialProps.getHeight() / 2 + scanFrameSizeHeight / 2;

        corPack.getCordova().getActivity().runOnUiThread(() -> {
            InitialProps props = CordovaUtils.constructInitialPropsFromJSON(initialPropsJSON);
            FrameLayout.LayoutParams layoutParams = new FrameLayout
                    .LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT);
            layoutParams.setMargins(props.getMarginLeft(), props.getMarginTop(), props.getMarginRight(), props.getMarginBottom());

            SurfaceView cameraPreview = new SurfaceView(cordova.getContext());
            cameraPreview.setLayoutParams(layoutParams);
            adjustSurface(cameraPreview);
            surfaceHolder = cameraPreview.getHolder();
            frameLayout = new FrameLayout(corPack.getCordova().getContext());
            frameLayout.setLayoutParams(new FrameLayout
                    .LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));

            frameLayout.addView(cameraPreview);
            if (enableDrawScanResult) {
                scanResultView = new ScanResultView(cordova.getContext());
                ScanResultView.scanResultViewInitializer(viewAttributes);
                scanResultView.setLayoutParams(layoutParams);
                frameLayout.addView(scanResultView);
            }

            if (enableScanAreaBox) {
                imageView = new ImageView(corPack.getCordova().getContext());
                imageView.setBackground(corPack.getCordova().getContext().getDrawable(CordovaUtils.rdraw(corPack.getCordova(), "cloors")));
                FrameLayout.LayoutParams imageParams = new FrameLayout.LayoutParams(scanFrameSizeWidth, scanFrameSizeHeight);
                imageView.setLayoutParams(imageParams);
                imageParams.setMargins(rect.left, rect.top, rect.right, rect.bottom);
                frameLayout.addView(imageView);
            }

            pluginLayoutManager = new PluginLayoutManager(pluginLayout, frameLayout, CordovaUtils.constructInitialPropsFromJSON(initialPropsJSON));
            surfaceHolder.addCallback(surfaceCallBack);
            isShow = false;
        });
    }

    private void adjustSurface(final SurfaceView cameraPreview) {
        if (cameraPreview.getLayoutParams() instanceof FrameLayout.LayoutParams) {
            final FrameLayout.LayoutParams paramSurface = (FrameLayout.LayoutParams) cameraPreview.getLayoutParams();
            if (cordova.getContext().getSystemService(Context.WINDOW_SERVICE) != null) {
                final WindowManager windowManager = (WindowManager) cordova.getContext().getSystemService(Context.WINDOW_SERVICE);
                if (windowManager != null) {
                    final Display defaultDisplay = windowManager.getDefaultDisplay();
                    final Point outPoint = new Point();
                    defaultDisplay.getRealSize(outPoint);

                    final float screenWidth = outPoint.x;
                    final float screenHeight = outPoint.y;
                    final float rate;
                    if (screenWidth / (float) 1080 > screenHeight / (float) 1920) {
                        rate = screenWidth / (float) 1080;
                        final int targetHeight = (int) (1920 * rate);
                        paramSurface.width = FrameLayout.LayoutParams.MATCH_PARENT;
                        paramSurface.height = targetHeight;
                        final int topMargin = (int) (-(targetHeight - screenHeight) / 2);
                        if (topMargin < 0) {
                            paramSurface.topMargin = topMargin;
                        }
                    } else {
                        rate = screenHeight / (float) 1920;
                        final int targetWidth = (int) (1080 * rate);
                        paramSurface.width = targetWidth;
                        paramSurface.height = FrameLayout.LayoutParams.MATCH_PARENT;
                        final int leftMargin = (int) (-(targetWidth - screenHeight) / 2);
                        if (leftMargin < 0) {
                            paramSurface.leftMargin = leftMargin;
                        }
                    }
                } else {
                    Log.e(TAG, "adjustSurface -> windowManager is null");
                }
            } else {
                Log.e(TAG, "adjustSurface -> WINDOW_SERVICE is null");
            }
        }
    }

    private void initCamera() {
        try {
            cameraOperation.open(surfaceHolder);
            if (handler == null) {
                handler = new CommonHandler(cordova.getActivity(), cameraOperation, mode, scanResultView, scanTypes[0], scanTypes, corPack);
            }
        } catch (final IOException e) {
            Log.e(TAG, "error -> " + e.toString());
        }
    }

    class SurfaceCallBack implements SurfaceHolder.Callback {
        @Override
        public void surfaceCreated(final SurfaceHolder holder) {
            Log.i(TAG, "surfaceCreated: ");
            if (!isShow) {
                isShow = true;
                initCamera();
            }
        }

        @Override
        public void surfaceChanged(final SurfaceHolder holder, final int format, final int width, final int height) {
            Log.d(TAG,
                    "surfaceChanged() called with: holder = [" + holder + "], format = [" + format + "], width = [" + width
                            + "], height = [" + height + "]");
        }

        @Override
        public void surfaceDestroyed(final SurfaceHolder holder) {
            isShow = false;
        }
    }

    public void forceUpdateXAndY(final JSONArray args) {
        if (pluginLayoutManager == null) {
            return;
        }
        pluginLayoutManager.forceUpdateXAndY(args.optInt(0), args.optInt(1),
                args.optInt(2), args.optInt(3));
    }

    public void onScroll(int scrollX, int scrollY) {
        pluginLayout.updateScrollValues(scrollX, scrollY);
        pluginLayoutManager.scroll(scrollX, scrollY);
    }
}

