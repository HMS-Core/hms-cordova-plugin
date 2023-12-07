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

package com.huawei.hms.cordova.scan;

import android.content.Context;
import android.Manifest;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.graphics.Rect;
import android.graphics.Point;
import android.os.Build;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import android.view.WindowManager;
import android.view.Display;
import android.net.Uri;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.provider.MediaStore;
import android.text.TextUtils;
import android.util.DisplayMetrics;
import android.util.Log;
import android.util.SparseArray;

import com.huawei.hms.cordova.scan.MultiProcessorModule.SurfaceCallBack;
import com.huawei.hms.cordova.scan.backend.draw.CameraOperation;
import com.huawei.hms.cordova.scan.backend.draw.CommonHandler;
import com.huawei.hms.cordova.scan.backend.draw.ScanResultView;
import com.huawei.hms.cordova.scan.backend.helpers.Exceptions;
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
import com.huawei.hms.hmsscankit.ScanUtil;
import com.huawei.hms.hmsscankit.WriterException;
import com.huawei.hms.ml.scan.HmsBuildBitmapOption;
import com.huawei.hms.ml.scan.HmsScan;
import com.huawei.hms.ml.scan.HmsScanAnalyzer;
import com.huawei.hms.ml.scan.HmsScanAnalyzerOptions;
import com.huawei.hms.ml.scan.HmsScanFrame;
import com.huawei.hms.ml.scan.HmsScanFrameOptions;
import com.huawei.hms.ml.scan.HmsScanResult;
import com.huawei.hms.mlsdk.common.MLFrame;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.List;
import java.util.Locale;

public class HMSScanModule extends CordovaBaseModule {
    private static final String TAG = HMSScanModule.class.getSimpleName();
    private static final int REQUEST_CODE_SCAN_ONE = 0X01;
    private static final int REQUEST_CODE_SCAN_DECODE = 0X06;
    private final CordovaPlugin cordovaPlugin;
    private final CordovaInterface cordova;
    private final PluginLayout pluginLayout;
    private PluginLayoutManager pluginLayoutManager;
    private HmsScanAnalyzer analyzer;
    private CameraOperation cameraOperation;
    private ScanResultView scanResultView;
    private SurfaceHolder surfaceHolder;
    private SurfaceCallBack surfaceCallBack;
    private CommonHandler handler;
    private CorPack corPack;
    private ImageView imageView;
    private FrameLayout frameLayout;
    private boolean isShow;
    private int mode;
    private int[] scanTypes = new int[]{};
    private boolean multiMode = false;
    private boolean parseResult = true;
    private boolean photoMode = false;
    private boolean isCameraOpen = false;

    public HMSScanModule(CordovaPlugin cordovaPlugin, CordovaInterface cordova, PluginLayout pluginLayout) {
        this.cordovaPlugin = cordovaPlugin;
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
    public void stopViewService(final CorPack corPack, final JSONArray args, final Promise promise) {
        isCameraOpen = false;
        if (handler != null) {
            handler.quit();
            handler = null;
        }
        if(cameraOperation != null){
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
    }

    private void initCamera() {
        try {
            cameraOperation.open(surfaceHolder);
            if (handler == null) {
                handler = new CommonHandler(cordova.getActivity(), cameraOperation, mode, scanResultView, this.scanTypes[0], this.scanTypes, this.multiMode, this.parseResult, this.photoMode, corPack);
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

    @CordovaMethod
    @HMSLog
    public void forceUpdateXAndY(final CorPack corPack, final JSONArray args, final Promise promise) {
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


    @CordovaMethod
    @HMSLog
    public void defaultViewMode(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final boolean permissions = CordovaUtils.permissionCheck(corPack, promise,
                Manifest.permission.CAMERA, Manifest.permission.READ_EXTERNAL_STORAGE);
        if (!permissions) {
            return;
        }

        final int[] scanTypes = JSONUtils.getScanTypes(args.getJSONArray(0));
        final int viewType = args.optInt(1,0);
        final boolean errorCheck = args.optBoolean(2, false);

        final HmsScanAnalyzerOptions hmsScanAnalyzerOptions = new HmsScanAnalyzerOptions.Creator()
            .setHmsScanTypes(scanTypes[0], scanTypes)
            .setPhotoMode(false)
            .setViewType(viewType)
            .setErrorCheck(errorCheck)
            .create();

        ScanUtil.startScan(corPack.getCordova().getActivity(), REQUEST_CODE_SCAN_ONE, hmsScanAnalyzerOptions);
        corPack.getCordova().setActivityResultCallback(cordovaPlugin);
    }

    @CordovaMethod
    @HMSLog
    public void analyzInAsyn(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final MLFrame frame;
        final int[] scanTypes = JSONUtils.getScanTypes(args.getJSONArray(1));
        try {
            frame = JSONUtils.getFrame(corPack.getCordova().getContext(), args.getString(0));
        } catch (IOException e) {
            promise.error(Exceptions.toErrorJSON(Exceptions.ERR_WRONG_IMAGEURI_PARAMETER));
            return;
        }

        analyzer = new HmsScanAnalyzer.Creator(
                corPack.getCordova().getContext()).setHmsScanTypes(scanTypes[0], scanTypes).create();

        if (analyzer.isAvailable()) {
            analyzer.analyzInAsyn(frame).addOnSuccessListener(hmsScans -> {
                if (hmsScans != null && !hmsScans.isEmpty() && hmsScans.get(0) != null && !TextUtils.isEmpty(
                        hmsScans.get(0).getOriginalValue())) {
                    try {
                        promise.success(JSONUtils.listToJSONArray(hmsScans, JSONUtils::hmsScansToJSON));
                    } catch (JSONException e) {
                        Log.e(TAG, "asynModeWithImage: error -> " + e.toString());
                    }
                } else {
                    promise.error(Exceptions.toErrorJSON(Exceptions.ERR_NO_RESULT));
                }
            }).addOnFailureListener(e -> promise.error(String.format(Locale.ENGLISH, "analyzInAsyn: %s", e.getMessage())));
        } else {
            promise.error(Exceptions.toErrorJSON(Exceptions.ANALYSER_IS_NOT_AVAILABLE));
        }
    }

    @CordovaMethod
    @HMSLog
    public void analyseFrame(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final MLFrame mlFrame;
        try {
            mlFrame = JSONUtils.getFrame(corPack.getCordova().getContext(), args.getString(0));
        } catch (IOException e) {
            promise.error(Exceptions.toErrorJSON(Exceptions.ERR_WRONG_IMAGEURI_PARAMETER));
            return;
        }
        final int[] scanTypes = JSONUtils.getScanTypes(args.getJSONArray(1));

        analyzer = new HmsScanAnalyzer.Creator(corPack.getCordova().getContext())
                .setHmsScanTypes(scanTypes[0], scanTypes).create();

        if (analyzer.isAvailable()) {
            final SparseArray<HmsScan> result = analyzer.analyseFrame(mlFrame);
            if (result != null && result.size() > 0 && result.valueAt(0) != null && !TextUtils.isEmpty(
                    result.valueAt(0).getOriginalValue())) {
                promise.success(JSONUtils.fromSparseArrayHmsScanToJSON(result));
            } else {
                promise.error(Exceptions.toErrorJSON(Exceptions.ERR_NO_RESULT));
            }
        } else {
            promise.error(Exceptions.toErrorJSON(Exceptions.ANALYSER_IS_NOT_AVAILABLE));
        }
    }

    @CordovaMethod
    @HMSLog
    public void decode(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {   
        
        JSONObject scanFrameOptions;
        String data = "";
        
        if(args != null){
            scanFrameOptions = args.optJSONObject(0);
            if(scanFrameOptions.has("scanTypes")){
                this.scanTypes = JSONUtils.getScanTypes(scanFrameOptions.getJSONArray("scanTypes"));
            } else {
                promise.error(Exceptions.toErrorJSON(Exceptions.EER_EMPTY_SCAN_TYPES_PARAMETER));
            }
            if(scanFrameOptions.has("multiMode")){
                this.multiMode = scanFrameOptions.getBoolean("multiMode");
            }
            if(scanFrameOptions.has("parseResult")){
                this.parseResult = scanFrameOptions.getBoolean("parseResult");
            }
            if(scanFrameOptions.has("photoMode")){
                this.photoMode = scanFrameOptions.getBoolean("photoMode");
            }
            if(!args.isNull(1)){
                data = args.getString(1);
            }
        }
        
        HmsScanFrameOptions option = new HmsScanFrameOptions.Creator()
            .setHmsScanTypes(this.scanTypes[0], this. scanTypes)
            .setMultiMode(this.multiMode)
            .setParseResult(this.parseResult)
            .setPhotoMode(this.photoMode)
            .create();

        if(option.isPhotoMode()){
            if(!data.isEmpty()){
                Bitmap bitmap;
                final Uri imageUri = Uri.parse(data);

                try {
                    bitmap = MediaStore.Images.Media.getBitmap(corPack.getCordova().getActivity().getContentResolver(), imageUri);
                } catch (IOException e) {
                    promise.error(Exceptions.toErrorJSON(Exceptions.ERR_WRONG_IMAGEURI_PARAMETER));
                    return;
                }

                HmsScanFrame frame = new HmsScanFrame(bitmap); 
                HmsScanResult result = ScanUtil.decode(corPack.getCordova().getContext(), frame, option);

                if (result.getHmsScans() != null && result.getHmsScans().length > 0 && result.getHmsScans()[0] != null && !TextUtils.isEmpty(
                    result.getHmsScans()[0].getOriginalValue())) {
                    final JSONArray jsArray = new JSONArray();
                    for (final HmsScan hmsScan : result.getHmsScans()) {
                        jsArray.put(JSONUtils.hmsScansToJSON(hmsScan));
                    }
                    promise.success(jsArray);

                } else {
                    promise.error(Exceptions.toErrorJSON(Exceptions.ERR_SCAN_NO_DETECTED));
                }  
            } else {
                promise.error(Exceptions.toErrorJSON(Exceptions.ERR_WRONG_IMAGEURI_PARAMETER));
            }
        } else {
            final boolean permissions = CordovaUtils.permissionCheck(corPack, promise, Manifest.permission.CAMERA);
            if (!permissions || isCameraOpen) {
                return;
            }
            isCameraOpen = true;
            this.corPack = corPack;
            final JSONObject initialPropsJSON = args.optJSONObject(2);
            final JSONObject customPropsJSON = args.optJSONObject(3);
            final int mode = REQUEST_CODE_SCAN_DECODE;
            final JSONObject viewAttributes = customPropsJSON.optJSONObject("viewAttributes");
            InitialProps initialProps = CordovaUtils.constructInitialPropsFromJSON(initialPropsJSON);
            final int scanFrameSize = customPropsJSON.optInt("scanFrameSize", 240);
            final boolean enableScanAreaBox = customPropsJSON.optBoolean("enableScanAreaBox", true);
            final boolean enableDrawScanResult = customPropsJSON.optBoolean("enableDrawScanResult", true);

            this.scanTypes = JSONUtils.getScanTypes(customPropsJSON.getJSONArray("scanTypes"));
            this.mode = REQUEST_CODE_SCAN_DECODE;

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
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                        imageView.setBackground(corPack.getCordova().getContext().getDrawable(CordovaUtils.rdraw(corPack.getCordova(), "cloors")));
                    }
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
    }

    @CordovaMethod
    @HMSLog
    public void decodeWithBitmap(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final Uri imageUri = Uri.parse(args.getString(0));
        final Bitmap bitmap;
        try {
            bitmap = MediaStore.Images.Media.getBitmap(corPack.getCordova().getActivity().getContentResolver(), imageUri);
        } catch (IOException e) {
            promise.error(Exceptions.toErrorJSON(Exceptions.ERR_WRONG_IMAGEURI_PARAMETER));
            return;
        }
        final int[] scanTypes = JSONUtils.getScanTypes(args.getJSONArray(1));

        final HmsScan[] hmsScans = ScanUtil.decodeWithBitmap(corPack.getCordova().getContext(), bitmap,
                new HmsScanAnalyzerOptions.Creator()
                    .setHmsScanTypes(scanTypes[0], scanTypes)
                    .setPhotoMode(true)
                    .create());

        if (hmsScans != null && hmsScans.length > 0 && hmsScans[0] != null && !TextUtils.isEmpty(
                hmsScans[0].getOriginalValue())) {
            final JSONArray jsArray = new JSONArray();
            for (final HmsScan hmsScan : hmsScans) {
                jsArray.put(JSONUtils.hmsScansToJSON(hmsScan));
            }
            promise.success(jsArray);
        } else {
            promise.error(Exceptions.toErrorJSON(Exceptions.ERR_NO_RESULT));
        }
    }

    @CordovaMethod
    @HMSLog
    public void buildBitmap(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException, WriterException {
        final JSONObject buildBitmapOptions = args.getJSONObject(0);

        final String content = buildBitmapOptions.getString("inputContent");
        final int barcodeFormat = buildBitmapOptions.getInt("barcodeFormat");
        final int width = buildBitmapOptions.optInt("barcodeWidth", 200);
        final int height = buildBitmapOptions.optInt("barcodeHeight", 200);
        Bitmap resultImage;
        final JSONObject hmsBuildBitmapOptions = buildBitmapOptions.optJSONObject("hmsBuildBitmapOptions");

        if (hmsBuildBitmapOptions != null) {
            final int bitmapMargin = hmsBuildBitmapOptions.optInt("bitmapMargin", 1);
            final int bitmapBackgroundColor = hmsBuildBitmapOptions.optInt("bitmapBackgroundColor", Color.WHITE);
            final int bitmapColor = hmsBuildBitmapOptions.optInt("bitmapColor", Color.BLACK);
            final String qrErrorCorrectionLevel = hmsBuildBitmapOptions.optString("qrErrorCorrectionLevel");

            final Uri imageUri = Uri.parse(hmsBuildBitmapOptions.optString("qrLogoBitmap"));
            Bitmap logoBitmap = null;
            try {
                logoBitmap = MediaStore.Images.Media.getBitmap(corPack.getCordova().getActivity().getContentResolver(), imageUri);
            } catch (IOException e) {
                Log.i(TAG, "buildBitmap: imageUri is null");
            }

            HmsBuildBitmapOption options = new HmsBuildBitmapOption.Creator()
                    .setBitmapMargin(bitmapMargin)
                    .setBitmapBackgroundColor(bitmapBackgroundColor)
                    .setBitmapColor(bitmapColor)
                    .setQRErrorCorrection(HmsBuildBitmapOption.ErrorCorrectionLevel.valueOf(qrErrorCorrectionLevel))
                    .setQRLogoBitmap(logoBitmap).create();
            resultImage = ScanUtil.buildBitmap(content, barcodeFormat, width, height, options);
        } else {
            resultImage = ScanUtil.buildBitmap(content, barcodeFormat, width, height, null);
        }
        promise.success(JSONUtils.bitmapToBase64(resultImage));
    }

    @CordovaMethod
    @HMSLog
    public void detectForHmsDector(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException, IOException {
        final MLFrame mlFrame = JSONUtils.getFrame(corPack.getCordova().getContext(), args.getString(0));
        final int[] scanTypes = JSONUtils.getScanTypes(args.getJSONArray(1));
        HmsScanAnalyzerOptions hmsScanAnalyzerOptions = new HmsScanAnalyzerOptions.Creator()
            .setHmsScanTypes(scanTypes[0], scanTypes)
            .create();
        HmsScan[] hmsScans = ScanUtil.detectForHmsDector(corPack.getCordova().getContext(), mlFrame, hmsScanAnalyzerOptions);
        final JSONArray jsArray = new JSONArray();
        for (final HmsScan hmsScan : hmsScans) {
            jsArray.put(JSONUtils.hmsScansToJSON(hmsScan));
        }
        promise.success(jsArray);
    }

    /* HMS LOGGER */
    @HMSLog
    @CordovaMethod
    public void enableLogger(final CorPack corPack, JSONArray args, final Promise promise) {
        corPack.enableLogger();
        promise.success();
    }

    @HMSLog
    @CordovaMethod
    public void disableLogger(final CorPack corPack, JSONArray args, final Promise promise) {
        corPack.disableLogger();
        promise.success();
    }

    @HMSLog
    @CordovaMethod
    public void hasPermission(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String permission = args.getString(0);
        promise.success(corPack.hasPermission(permission));
    }

    @HMSLog
    @CordovaMethod
    public void requestPermission(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String permission = args.getString(0);
        corPack.requestPermission(0, permission);
        promise.success();
    }

    @HMSLog
    @CordovaMethod
    public void requestPermissions(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        List<String> permissions = JSONUtils.convertJSONArrayToList(args.getJSONArray(0));
        corPack.requestPermissions(0, permissions.toArray(new String[0]));
        promise.success();
    }
}

