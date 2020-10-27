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
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.Rect;
import android.os.Bundle;
import android.provider.MediaStore;
import android.text.TextUtils;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.View;
import android.view.Window;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.huawei.hms.cordova.scan.utils.CordovaUtils;
import com.huawei.hms.hmsscankit.RemoteView;
import com.huawei.hms.hmsscankit.ScanUtil;
import com.huawei.hms.ml.scan.HmsScan;
import com.huawei.hms.ml.scan.HmsScanAnalyzerOptions;

import java.io.IOException;

public class CustomViewActivity extends Activity {
    public static final String SCAN_RESULT = "scanResult";
    public static final int REQUEST_CODE_PHOTO = 0X1113;
    private static final String TAG = "DefinedActivity";
    private final int[] img = {
        CordovaUtils.rdraw(HMSScan.getCordovaInterface(), "flashlight_on"),
        CordovaUtils.rdraw(HMSScan.getCordovaInterface(), "flashlight_off")
    };
    private RemoteView remoteView;
    private ImageView imgBtn;
    private ImageView flushBtn;
    private int[] scanTypes;
    private int var1;
    private int height;
    private int width;
    private boolean enableFlushButton;
    private boolean enablePictureButton;
    private String scanAreaText;

    private void setPictureScanOperation() {
        imgBtn = findViewById(CordovaUtils.rid(HMSScan.getCordovaInterface(), "img_btn"));
        imgBtn.setOnClickListener(v -> {
            final Intent pickIntent = new Intent(Intent.ACTION_PICK, MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
            pickIntent.setDataAndType(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, "image/*");
            try {
                CustomViewActivity.this.startActivityForResult(pickIntent, REQUEST_CODE_PHOTO);
            } catch (final ActivityNotFoundException e) {
                Log.e(TAG, "setPictureScanOperation -> " + e.toString());
            }
        });
    }

    private void setFlashOperation() {
        flushBtn.setOnClickListener(v -> {
            if (remoteView.getLightStatus()) {
                remoteView.switchLight();
                flushBtn.setImageResource(img[1]);
            } else {
                remoteView.switchLight();
                flushBtn.setImageResource(img[0]);
            }
        });
    }

    private void setBackOperation() {
        final ImageView backBtn = findViewById(CordovaUtils.rid(HMSScan.getCordovaInterface(), "back_img"));
        backBtn.setOnClickListener(v -> CustomViewActivity.this.finish());
    }

    @Override
    protected void onCreate(final Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);

        setContentView(CordovaUtils.rlayout(HMSScan.getCordovaInterface(), "activity_defined"));
        final Intent getIntent = getIntent();
        if (getIntent != null) {
            try {
                height = getIntent.getIntExtra("scanAreaHeight", 240);
                width = getIntent.getIntExtra("scanAreaWidth", 240);
                enableFlushButton = getIntent.getBooleanExtra("enableFlushButton", false);
                enablePictureButton = getIntent.getBooleanExtra("enablePictureButton", true);
                scanAreaText = getIntent.getStringExtra("scanAreaText");
                scanTypes = getIntent.getIntArrayExtra("scanTypes");
                var1 = getIntent.getIntExtra("scanTypesvar1", -1);
            } catch (final NullPointerException e) {
                Log.e(TAG, e.toString());
            }
        }

        flushBtn = findViewById(CordovaUtils.rid(HMSScan.getCordovaInterface(), "flush_btn"));
        imgBtn = findViewById(CordovaUtils.rid(HMSScan.getCordovaInterface(), "img_btn"));
        imgBtn.setVisibility((enablePictureButton) ? View.VISIBLE : View.INVISIBLE);
        flushBtn.setVisibility((enableFlushButton) ? View.VISIBLE : View.INVISIBLE);
        final TextView textView = findViewById(CordovaUtils.rid(HMSScan.getCordovaInterface(), "scan_areaText"));
        textView.setText(scanAreaText);

        if (var1 == -1) {
            CustomViewActivity.this.finish();
            return;
        }

        final float scale = getResources().getDisplayMetrics().density;
        final int dpHeightInPx = (int) (height * scale);
        final int dpWidthInPx = (int) (width * scale);
        final ImageView imageView = findViewById(CordovaUtils.rid(HMSScan.getCordovaInterface(), "scan_area"));
        imageView.getLayoutParams().height = dpHeightInPx;
        imageView.getLayoutParams().width = dpWidthInPx;
        imageView.requestLayout();

        final Rect rect = new Rect();
        final int mScreenWidth = getResources().getDisplayMetrics().widthPixels;
        final int mScreenHeight = getResources().getDisplayMetrics().heightPixels;
        final DisplayMetrics dm = getResources().getDisplayMetrics();
        final float density = dm.density;
        final int scanFrameSizeHeight = (int) (height * density);
        final int scanFrameSizeWidth = (int) (width * density);
        rect.left = mScreenWidth / 2 - scanFrameSizeWidth / 2;
        rect.right = mScreenWidth / 2 + scanFrameSizeWidth / 2;
        rect.top = mScreenHeight / 2 - scanFrameSizeHeight / 2;
        rect.bottom = mScreenHeight / 2 + scanFrameSizeHeight / 2;

        remoteView = new RemoteView.Builder().setContext(this).setBoundingBox(rect).setFormat(var1, scanTypes).build();
        remoteView.setOnLightVisibleCallback(visible -> {
            if (visible) {
                flushBtn.setVisibility(View.VISIBLE);
            }
        });
        remoteView.setOnResultCallback(result -> {
            if (result != null && result.length > 0 && result[0] != null && !TextUtils.isEmpty(
                result[0].getOriginalValue())) {
                final Intent intent = new Intent();
                intent.putExtra(SCAN_RESULT, result[0]);
                setResult(RESULT_OK, intent);
                CustomViewActivity.this.finish();
            }
        });
        remoteView.onCreate(savedInstanceState);
        final FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT,
            LinearLayout.LayoutParams.MATCH_PARENT);
        final FrameLayout frameLayout = findViewById(CordovaUtils.rid(HMSScan.getCordovaInterface(), "rim"));
        frameLayout.addView(remoteView, params);

        setBackOperation();
        setPictureScanOperation();
        setFlashOperation();
    }

    @Override
    protected void onStart() {
        super.onStart();
        remoteView.onStart();
    }

    @Override
    protected void onResume() {
        super.onResume();
        remoteView.onResume();
    }

    @Override
    protected void onPause() {
        super.onPause();
        remoteView.onPause();
    }

    @Override
    protected void onStop() {
        super.onStop();
        remoteView.onStop();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        remoteView.onDestroy();
    }

    @Override
    protected void onActivityResult(final int requestCode, final int resultCode, final Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (resultCode == RESULT_OK && requestCode == REQUEST_CODE_PHOTO) {
            try {
                if (data != null) {
                    final Bitmap bitmap = MediaStore.Images.Media.getBitmap(this.getContentResolver(), data.getData());
                    final HmsScan[] hmsScans = ScanUtil.decodeWithBitmap(CustomViewActivity.this, bitmap,
                        new HmsScanAnalyzerOptions.Creator().setPhotoMode(true).create());
                    if (hmsScans != null && hmsScans.length > 0 && hmsScans[0] != null && !TextUtils.isEmpty(
                        hmsScans[0].getOriginalValue())) {
                        final Intent intent = new Intent();
                        intent.putExtra(SCAN_RESULT, hmsScans[0]);
                        setResult(RESULT_OK, intent);
                        CustomViewActivity.this.finish();
                    }
                } else {
                    Log.e(TAG, "onActivityResult -> data is null");
                }
            } catch (final IOException e) {
                Log.e(TAG, "error: " + e.toString());
            }
        }
    }
}
