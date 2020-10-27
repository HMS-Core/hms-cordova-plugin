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

package com.huawei.hms.cordova.scan.draw;

import static android.app.Activity.RESULT_OK;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.graphics.ImageFormat;
import android.graphics.Rect;
import android.graphics.YuvImage;
import android.os.Handler;
import android.os.HandlerThread;
import android.os.Message;
import android.text.TextUtils;
import android.util.Log;
import android.util.SparseArray;

import com.huawei.hms.cordova.scan.CommonActivity;
import com.huawei.hms.hmsscankit.ScanUtil;
import com.huawei.hms.ml.scan.HmsScan;
import com.huawei.hms.ml.scan.HmsScanAnalyzer;
import com.huawei.hms.ml.scan.HmsScanAnalyzerOptions;
import com.huawei.hms.mlsdk.common.MLFrame;

import java.io.ByteArrayOutputStream;

public final class CommonHandler extends Handler {
    private static final int MULTIPROCESSOR_SYN_CODE = 444;
    private static final int MULTIPROCESSOR_ASYN_CODE = 555;
    private static final int BITMAP_CODE = 333;
    private static final String TAG = "MainHandler";
    private static final double DEFAULT_ZOOM = 1.0;
    private final CameraOperation cameraOperation;
    private final HandlerThread decodeThread;
    private final Handler decodeHandle;
    private final Activity activity;
    private final int mode;

    public CommonHandler(final Activity activity, final CameraOperation cameraOperation, final int mode,
        final int scanType, final int[] scanTypes) {
        this.cameraOperation = cameraOperation;
        this.activity = activity;
        this.mode = mode;
        decodeThread = new HandlerThread("DecodeThread");
        decodeThread.start();
        decodeHandle = new Handler(decodeThread.getLooper()) {
            @Override
            public void handleMessage(final Message msg) {
                if (msg == null) {
                    return;
                }
                if (mode == BITMAP_CODE || mode == MULTIPROCESSOR_SYN_CODE) {
                    final HmsScan[] result = decodeSyn(msg.arg1, msg.arg2, (byte[]) msg.obj, scanType, scanTypes, mode);
                    if (result == null || result.length == 0) {
                        restart(DEFAULT_ZOOM);
                    } else if (TextUtils.isEmpty(result[0].getOriginalValue()) && result[0].getZoomValue() != 1.0) {
                        restart(result[0].getZoomValue());
                    } else if (!TextUtils.isEmpty(result[0].getOriginalValue())) {
                        final Message message = new Message();
                        message.what = msg.what;
                        message.obj = result;
                        CommonHandler.this.sendMessage(message);
                        restart(DEFAULT_ZOOM);
                    } else {
                        restart(DEFAULT_ZOOM);
                    }
                } else if (mode == MULTIPROCESSOR_ASYN_CODE) {
                    decodeAsyn(msg.arg1, msg.arg2, (byte[]) msg.obj, scanType, scanTypes);
                } else {
                    Log.i(TAG, "handleMessage: Invalid mode");
                }
            }
        };
        cameraOperation.startPreview();
        restart(DEFAULT_ZOOM);
    }

    /**
     * Call the MultiProcessor API in synchronous mode.
     */
    private HmsScan[] decodeSyn(final int width, final int height, final byte[] data, final int type, final int[] types,
        final int mode) {
        HmsScan[] info = new HmsScan[0];
        final Bitmap bitmap = convertToBitmap(width, height, data);
        if (bitmap != null) {
            if (mode == BITMAP_CODE) {
                final HmsScanAnalyzerOptions options = new HmsScanAnalyzerOptions.Creator().setHmsScanTypes(type, types)
                    .setPhotoMode(false)
                    .create();
                return ScanUtil.decodeWithBitmap(activity, bitmap, options);
            } else if (mode == MULTIPROCESSOR_SYN_CODE) {
                final MLFrame image = MLFrame.fromBitmap(bitmap);
                final HmsScanAnalyzerOptions options = new HmsScanAnalyzerOptions.Creator().setHmsScanTypes(type, types)
                    .create();
                final HmsScanAnalyzer analyzer = new HmsScanAnalyzer(options);
                final SparseArray<HmsScan> result = analyzer.analyseFrame(image);
                if (result != null && result.size() > 0 && result.valueAt(0) != null && !TextUtils.isEmpty(
                    result.valueAt(0).getOriginalValue())) {
                    info = new HmsScan[result.size()];
                    for (int index = 0; index < result.size(); index++) {
                        info[index] = result.valueAt(index);
                    }
                    return info;
                }
            } else {
                Log.e(TAG, "decodeAsyn -> Invalid mode");
            }
        }
        Log.e(TAG, "decodeAsyn -> Bitmap is null");
        return info;
    }

    /**
     * Convert camera data into bitmap data.
     */
    private Bitmap convertToBitmap(final int width, final int height, final byte[] data) {
        final YuvImage yuv = new YuvImage(data, ImageFormat.NV21, width, height, null);
        final ByteArrayOutputStream stream = new ByteArrayOutputStream();
        yuv.compressToJpeg(new Rect(0, 0, width, height), 100, stream);
        try {
            return BitmapFactory.decodeByteArray(stream.toByteArray(), 0, stream.toByteArray().length);
        } catch (final OutOfMemoryError e) {
            Log.e(TAG, "convertToBitmap -> " + e.toString());
            return null;
        }
    }

    /**
     * Call the MultiProcessor API in asynchronous mode.
     */
    private void decodeAsyn(final int width, final int height, final byte[] data, final int type, final int[] types) {
        final Bitmap bitmap = convertToBitmap(width, height, data);
        if (bitmap != null) {
            final MLFrame image = MLFrame.fromBitmap(bitmap);
            final HmsScanAnalyzerOptions options = new HmsScanAnalyzerOptions.Creator().setHmsScanTypes(type, types)
                .create();
            final HmsScanAnalyzer analyzer = new HmsScanAnalyzer(options);
            analyzer.analyzInAsyn(image).addOnSuccessListener(hmsScans -> {
                if (hmsScans != null && !hmsScans.isEmpty() && hmsScans.get(0) != null && !TextUtils.isEmpty(
                    hmsScans.get(0).getOriginalValue())) {
                    HmsScan[] infos = new HmsScan[hmsScans.size()];
                    Message message = new Message();
                    message.obj = hmsScans.toArray(infos);
                    CommonHandler.this.sendMessage(message);
                    restart(DEFAULT_ZOOM);
                } else {
                    restart(DEFAULT_ZOOM);
                }
                bitmap.recycle();
            }).addOnFailureListener(e -> {
                Log.w(TAG, e);
                restart(DEFAULT_ZOOM);
                bitmap.recycle();
            });
        } else {
            Log.e(TAG, "decodeAsyn -> Bitmap is null");
        }
    }

    public void quit() {
        try {
            cameraOperation.stopPreview();
            decodeHandle.getLooper().quit();
            decodeThread.join(500);
        } catch (final InterruptedException e) {
            Log.e(TAG, e.toString());
            Thread.currentThread().interrupt();
        }
    }

    public void restart(final double zoomValue) {
        cameraOperation.callbackFrame(decodeHandle, zoomValue);
    }

    @Override
    public void handleMessage(final Message message) {
        Log.e(TAG, String.valueOf(message.what));
        removeMessages(1);
        if (message.what == 0) {
            final CommonActivity commonActivity1 = (CommonActivity) activity;
            commonActivity1.scanResultView.clear();
            final Intent intent = new Intent();
            intent.putExtra(CommonActivity.SCAN_RESULT, (HmsScan[]) message.obj);
            activity.setResult(RESULT_OK, intent);
            //Show the scanning result on the screen.
            if (mode == MULTIPROCESSOR_ASYN_CODE || mode == MULTIPROCESSOR_SYN_CODE) {
                final CommonActivity commonActivity = (CommonActivity) activity;
                final HmsScan[] arr = (HmsScan[]) message.obj;

                for (int i = 0; i < arr.length; i++) {
                    if (i == 0) {
                        commonActivity.scanResultView.add(
                            new ScanResultView.HmsScanGraphic(commonActivity.scanResultView, arr[i], Color.YELLOW));
                    } else if (i == 1) {
                        commonActivity.scanResultView.add(
                            new ScanResultView.HmsScanGraphic(commonActivity.scanResultView, arr[i], Color.BLUE));
                    } else if (i == 2) {
                        commonActivity.scanResultView.add(
                            new ScanResultView.HmsScanGraphic(commonActivity.scanResultView, arr[i], Color.RED));
                    } else if (i == 3) {
                        commonActivity.scanResultView.add(
                            new ScanResultView.HmsScanGraphic(commonActivity.scanResultView, arr[i], Color.GREEN));
                    } else {
                        commonActivity.scanResultView.add(
                            new ScanResultView.HmsScanGraphic(commonActivity.scanResultView, arr[i]));
                    }
                }

                commonActivity.scanResultView.setCameraInfo(1080, 1920);
                commonActivity.scanResultView.invalidate();
                sendEmptyMessageDelayed(1, 1000);
            } else {
                activity.finish();
            }
        }
        if (message.what == 1) {
            final CommonActivity commonActivity1 = (CommonActivity) activity;
            commonActivity1.scanResultView.clear();
        }
    }
}
