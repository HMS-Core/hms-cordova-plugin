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

package com.huawei.hms.cordova.scan;

import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.Point;
import android.os.Bundle;
import android.provider.MediaStore;
import android.text.TextUtils;
import android.util.Log;
import android.util.SparseArray;
import android.view.Display;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.TextView;

import com.huawei.hms.cordova.scan.draw.CameraOperation;
import com.huawei.hms.cordova.scan.draw.CommonHandler;
import com.huawei.hms.cordova.scan.draw.ScanResultView;
import com.huawei.hms.cordova.scan.utils.CordovaUtils;
import com.huawei.hms.hmsscankit.ScanUtil;
import com.huawei.hms.ml.scan.HmsScan;
import com.huawei.hms.ml.scan.HmsScanAnalyzer;
import com.huawei.hms.ml.scan.HmsScanAnalyzerOptions;
import com.huawei.hms.mlsdk.common.MLFrame;

import java.io.IOException;

public class CommonActivity extends Activity {
    public static final int MULTIPROCESSOR_SYN_CODE = 444;
    public static final int MULTIPROCESSOR_ASYN_CODE = 555;
    public static final int BITMAP_CODE = 333;
    public static final String DECODE_MODE = "decode_mode";
    public static final int REQUEST_CODE_PHOTO = 0X1113;
    public static final String SCAN_RESULT = "scanResult";
    private static final String TAG = "CommonActivity";
    public ScanResultView scanResultView;
    private SurfaceHolder surfaceHolder;
    private CameraOperation cameraOperation;
    private SurfaceCallBack surfaceCallBack;
    private CommonHandler handler;
    private boolean isShow;
    private int mode;
    private ImageView imgBtn;

    private int[] scanTypes;
    private int scanTypeVar1;
    private boolean enablePhotoButton;
    private String scanTips;
    private boolean enableScanArea;
    private int height;
    private int width;

    private void adjustSurface(final SurfaceView cameraPreview) {
        if (cameraPreview.getLayoutParams() instanceof FrameLayout.LayoutParams) {
            final FrameLayout.LayoutParams paramSurface = (FrameLayout.LayoutParams) cameraPreview.getLayoutParams();
            if (getSystemService(Context.WINDOW_SERVICE) != null) {
                final WindowManager windowManager = (WindowManager) getSystemService(Context.WINDOW_SERVICE);
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

    private void setBackOperation() {
        final ImageView backBtn = findViewById(CordovaUtils.rid(HMSScan.getCordovaInterface(), "back_img"));
        backBtn.setOnClickListener(v -> {
            if (mode == MULTIPROCESSOR_ASYN_CODE || mode == MULTIPROCESSOR_SYN_CODE) {
                setResult(RESULT_CANCELED);
            }
            CommonActivity.this.finish();
        });
    }

    private void setPictureScanOperation() {
        imgBtn = findViewById(CordovaUtils.rid(HMSScan.getCordovaInterface(), "img_btn"));
        imgBtn.setOnClickListener(v -> {
            final Intent pickIntent = new Intent(Intent.ACTION_PICK, MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
            pickIntent.setDataAndType(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, "image/*");
            try {
                CommonActivity.this.startActivityForResult(pickIntent, REQUEST_CODE_PHOTO);
            } catch (final ActivityNotFoundException e) {
                Log.e(TAG, "setPictureScanOperation -> " + e.toString());
            }
        });
    }

    private void initCamera() {
        try {
            cameraOperation.open(surfaceHolder);
            if (handler == null) {
                handler = new CommonHandler(CommonActivity.this, cameraOperation, mode, scanTypeVar1, scanTypes);
            }
        } catch (final IOException e) {
            Log.w(TAG, e);
        }
    }

    private void decodeBitmap(final Bitmap bitmap, final int scanType, final int[] scanTypes) {
        Log.i(TAG, "decodeBitmap: ");
        final HmsScan[] hmsScans = ScanUtil.decodeWithBitmap(CommonActivity.this, bitmap,
            new HmsScanAnalyzerOptions.Creator().setHmsScanTypes(scanType, scanTypes).setPhotoMode(true).create());
        if (hmsScans != null && hmsScans.length > 0 && hmsScans[0] != null && !TextUtils.isEmpty(
            hmsScans[0].getOriginalValue())) {
            final Intent intent = new Intent();
            intent.putExtra(SCAN_RESULT, hmsScans);
            setResult(RESULT_OK, intent);
            CommonActivity.this.finish();
        }
    }

    private void decodeMultiAsyn(final Bitmap bitmap) {
        Log.i(TAG, "decodeMultiAsyn: ");
        final MLFrame image = MLFrame.fromBitmap(bitmap);
        final HmsScanAnalyzer analyzer = new HmsScanAnalyzer.Creator(this).setHmsScanTypes(scanTypeVar1, scanTypes)
            .create();
        analyzer.analyzInAsyn(image).addOnSuccessListener(hmsScans -> {
            if (hmsScans != null && !hmsScans.isEmpty() && hmsScans.get(0) != null && !TextUtils.isEmpty(
                hmsScans.get(0).getOriginalValue())) {
                HmsScan[] infos = new HmsScan[hmsScans.size()];
                Intent intent = new Intent();
                intent.putExtra(SCAN_RESULT, hmsScans.toArray(infos));
                setResult(RESULT_OK, intent);
                CommonActivity.this.finish();
            }
        }).addOnFailureListener(e -> Log.w(TAG, e));
    }

    private void decodeMultiSyn(final Bitmap bitmap) {
        Log.i(TAG, "decodeMultiSyn: ");
        final MLFrame image = MLFrame.fromBitmap(bitmap);
        final HmsScanAnalyzer analyzer = new HmsScanAnalyzer.Creator(this).setHmsScanTypes(scanTypeVar1, scanTypes)
            .create();
        final SparseArray<HmsScan> result = analyzer.analyseFrame(image);
        if (result != null && result.size() > 0 && result.valueAt(0) != null && !TextUtils.isEmpty(
            result.valueAt(0).getOriginalValue())) {
            final HmsScan[] info = new HmsScan[result.size()];
            for (int index = 0; index < result.size(); index++) {
                info[index] = result.valueAt(index);
            }
            Log.i(TAG, "decodeMultiSyn: " + result.valueAt(0).getOriginalValue());

            final Intent intent = new Intent();
            intent.putExtra(SCAN_RESULT, info);
            setResult(RESULT_OK, intent);
            CommonActivity.this.finish();
        }
    }

    @Override
    protected void onCreate(final Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        final Window window = getWindow();
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        setContentView(CordovaUtils.rlayout(HMSScan.getCordovaInterface(), "activity_common"));

        final Intent intent = getIntent();
        if (intent != null) {
            try {
                enablePhotoButton = intent.getBooleanExtra("enablePhotoButton", true);
                scanTips = intent.getStringExtra("scanTips");
                scanTypes = intent.getIntArrayExtra("scanTypes");
                scanTypeVar1 = intent.getIntExtra("scanTypeVar1", -1);
                enableScanArea = intent.getBooleanExtra("enableScanArea", false);
                height = intent.getIntExtra("scanAreaHeight", 240);
                width = intent.getIntExtra("scanAreaWidth", 240);
                mode = intent.getIntExtra(DECODE_MODE, -1);
            } catch (final NullPointerException e) {
                Log.e(TAG, e.toString());
            }
        }

        final float scale = getResources().getDisplayMetrics().density;
        final int dpHeightInPx = (int) (height * scale);
        final int dpWidthInPx = (int) (width * scale);
        final ImageView mscanArs = findViewById(CordovaUtils.rid(HMSScan.getCordovaInterface(), "scan_ars"));
        mscanArs.getLayoutParams().height = dpHeightInPx;
        mscanArs.getLayoutParams().width = dpWidthInPx;
        mscanArs.requestLayout();
        mscanArs.setVisibility((enableScanArea) ? View.VISIBLE : View.INVISIBLE);

        imgBtn = findViewById(CordovaUtils.rid(HMSScan.getCordovaInterface(), "img_btn"));
        imgBtn.setVisibility((enablePhotoButton) ? View.VISIBLE : View.INVISIBLE);

        final TextView mscanTips;
        mscanTips = findViewById(CordovaUtils.rid(HMSScan.getCordovaInterface(), "scan_tip"));
        mscanTips.setText(scanTips);

        cameraOperation = new CameraOperation();
        surfaceCallBack = new SurfaceCallBack();

        final SurfaceView cameraPreview = findViewById(CordovaUtils.rid(HMSScan.getCordovaInterface(), "surfaceView"));
        adjustSurface(cameraPreview);
        surfaceHolder = cameraPreview.getHolder();

        isShow = false;
        setBackOperation();
        setPictureScanOperation();
        scanResultView = findViewById(CordovaUtils.rid(HMSScan.getCordovaInterface(), "scan_result_view"));
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (isShow) {
            initCamera();
        } else {
            surfaceHolder.addCallback(surfaceCallBack);
        }
    }

    @Override
    protected void onPause() {
        if (handler != null) {
            handler.quit();
            handler = null;
        }
        cameraOperation.close();
        if (!isShow) {
            surfaceHolder.removeCallback(surfaceCallBack);
        }
        super.onPause();
    }

    @Override
    public void onBackPressed() {
        if (mode == MULTIPROCESSOR_ASYN_CODE || mode == MULTIPROCESSOR_SYN_CODE) {
            setResult(RESULT_CANCELED);
        }
        CommonActivity.this.finish();
    }

    @Override
    protected void onActivityResult(final int requestCode, final int resultCode, final Intent data) {
        Log.i(TAG, "onActivityResult: CommonActivity");
        super.onActivityResult(requestCode, resultCode, data);
        if (resultCode != RESULT_OK || data == null || requestCode != REQUEST_CODE_PHOTO) {
            return;
        }
        try {
            if (mode == BITMAP_CODE) {
                decodeBitmap(MediaStore.Images.Media.getBitmap(this.getContentResolver(), data.getData()), scanTypeVar1,
                    scanTypes);
            } else if (mode == MULTIPROCESSOR_SYN_CODE) {
                decodeMultiSyn(MediaStore.Images.Media.getBitmap(this.getContentResolver(), data.getData()));
            } else if (mode == MULTIPROCESSOR_ASYN_CODE) {
                decodeMultiAsyn(MediaStore.Images.Media.getBitmap(this.getContentResolver(), data.getData()));
            } else {
                Log.i(TAG, "error: Invalid Action");
            }
        } catch (final IOException e) {
            Log.e(TAG, e.toString());
        }
    }

    class SurfaceCallBack implements SurfaceHolder.Callback {
        @Override
        public void surfaceCreated(final SurfaceHolder holder) {
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
}
