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

package com.huawei.hms.cordova.scan.backend.draw;

import android.app.Activity;

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

import com.huawei.hms.cordova.scan.backend.helpers.Constants;
import com.huawei.hms.cordova.scan.backend.utils.JSONUtils;
import com.huawei.hms.cordova.scan.basef.handler.CorPack;
import com.huawei.hms.hmsscankit.ScanUtil;
import com.huawei.hms.ml.scan.HmsScan;
import com.huawei.hms.ml.scan.HmsScanAnalyzer;
import com.huawei.hms.ml.scan.HmsScanAnalyzerOptions;
import com.huawei.hms.mlsdk.common.MLFrame;

import org.json.JSONException;

import java.io.ByteArrayOutputStream;

public final class CommonHandler extends Handler {
    private static final String TAG = CommonHandler.class.getName();
    private static final double DEFAULT_ZOOM = 1.0;
    private CameraOperation cameraOperation;
    private HandlerThread decodeThread;
    private Handler decodeHandle;
    private int mode;
    private ScanResultView scanResultView;
    private CorPack corPack;

    public CommonHandler(final Activity activity, CameraOperation cameraOperation, final int mode,
        ScanResultView scanResultView, int var1, int[] scanTypes, CorPack corPack) {
        this.corPack = corPack;
        this.scanResultView = scanResultView;
        this.cameraOperation = cameraOperation;
        this.mode = mode;
        decodeThread = new HandlerThread("DecodeThread");
        decodeThread.start();
        decodeHandle = new Handler(decodeThread.getLooper()) {
            @Override
            public void handleMessage(Message msg) {
                if (msg == null) {
                    return;
                }
                if (mode == Constants.BITMAP_CODE || mode == Constants.MULTIPROCESSOR_SYN_CODE) {
                    final HmsScan[] result = decodeSyn(msg.arg1, msg.arg2, (byte[]) msg.obj, var1, scanTypes, mode, activity);
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
                } else if (mode == Constants.MULTIPROCESSOR_ASYN_CODE) {
                    decodeAsyn(msg.arg1, msg.arg2, (byte[]) msg.obj, var1, scanTypes);
                } else {
                    Log.i(TAG, "handleMessage: Invalid mode");
                }
            }
        };
        cameraOperation.startPreview();
        restart(DEFAULT_ZOOM);
    }

    private HmsScan[] decodeSyn(int width, int height, byte[] data, int var1, int[] scanTypes,
        int mode, Activity activity) {
        HmsScan[] info = new HmsScan[0];
        final Bitmap bitmap = convertToBitmap(width, height, data);
        if (bitmap != null) {
            if (mode == Constants.BITMAP_CODE) {
                final HmsScanAnalyzerOptions options = new HmsScanAnalyzerOptions.Creator().setHmsScanTypes(var1, scanTypes)
                        .setPhotoMode(false)
                        .create();
                return ScanUtil.decodeWithBitmap(activity, bitmap, options);
            } else if (mode == Constants.MULTIPROCESSOR_SYN_CODE) {
                final MLFrame image = MLFrame.fromBitmap(bitmap);
                final HmsScanAnalyzerOptions options = new HmsScanAnalyzerOptions.Creator().setHmsScanTypes(var1, scanTypes)
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

    private void decodeAsyn(int width, int height, byte[] data, int var1, int[] scanTypes) {
        final Bitmap bitmap = convertToBitmap(width, height, data);
        if (bitmap != null) {
            final MLFrame image = MLFrame.fromBitmap(bitmap);
            final HmsScanAnalyzerOptions options = new HmsScanAnalyzerOptions.Creator().setHmsScanTypes(var1, scanTypes).create();
            final HmsScanAnalyzer analyzer = new HmsScanAnalyzer(options);
            analyzer.analyzInAsyn(image).addOnSuccessListener(hmsScans -> {
                if (hmsScans != null && hmsScans.size() > 0 && hmsScans.get(0) != null && !TextUtils.isEmpty(hmsScans.get(0).getOriginalValue())) {
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

    @Override
    public void handleMessage(Message message) {
        Log.e(TAG, String.valueOf(message.what));
        removeMessages(1);
        if (scanResultView != null) {
            if (message.what == 0) {
                scanResultView.clear();

                if (mode == Constants.MULTIPROCESSOR_ASYN_CODE || mode == Constants.MULTIPROCESSOR_SYN_CODE) {
                    HmsScan[] arr = (HmsScan[]) message.obj;
                    for (int i = 0; i < arr.length; i++) {
                        if (i == 0) {
                            scanResultView.add(new ScanResultView.HmsScanGraphic(scanResultView, arr[i], Color.YELLOW));
                        } else if (i == 1) {
                            scanResultView.add(new ScanResultView.HmsScanGraphic(scanResultView, arr[i], Color.BLUE));
                        } else if (i == 2) {
                            scanResultView.add(new ScanResultView.HmsScanGraphic(scanResultView, arr[i], Color.RED));
                        } else if (i == 3) {
                            scanResultView.add(new ScanResultView.HmsScanGraphic(scanResultView, arr[i], Color.GREEN));
                        } else {
                            scanResultView.add(new ScanResultView.HmsScanGraphic(scanResultView, arr[i]));
                        }
                        try {
                            corPack.getEventRunner().sendEvent("scanResultClickListener", JSONUtils.hmsScansToJSON(arr[i]));
                        } catch (JSONException e) {
                            Log.e(TAG, "handleMessage: error -> " + e.toString());
                        }
                    }
                    scanResultView.setCameraInfo(1080, 1920);
                    scanResultView.invalidate();
                    sendEmptyMessageDelayed(1, 1000);
                } else {
                    HmsScan[] arr = (HmsScan[]) message.obj;
                    for (HmsScan hmsScans : arr) {
                        try {
                            corPack.getEventRunner().sendEvent("scanResultClickListener", JSONUtils.hmsScansToJSON(hmsScans));
                        } catch (JSONException e) {
                            Log.e(TAG, "handleMessage: error -> " + e.toString());
                        }
                    }
                    quit();
                }
            } else if (message.what == 1) {
                scanResultView.clear();
            }
        } else {
            HmsScan[] arr = (HmsScan[]) message.obj;
            for (HmsScan hmsScan : arr) {
                try {
                    corPack.getEventRunner().sendEvent("scanResultClickListener", JSONUtils.hmsScansToJSON(hmsScan));
                } catch (JSONException e) {
                    Log.e(TAG, "handleMessage: error -> " + e.toString());
                }
            }
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

    public void restart(double zoomValue) {
        cameraOperation.callbackFrame(decodeHandle, zoomValue);
    }
}
