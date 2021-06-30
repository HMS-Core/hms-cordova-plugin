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

import android.Manifest;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.provider.MediaStore;
import android.text.TextUtils;
import android.util.Log;
import android.util.SparseArray;

import com.huawei.hms.cordova.scan.backend.helpers.Exceptions;
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
import com.huawei.hms.mlsdk.common.MLFrame;

import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.List;
import java.util.Locale;

public class HMSScanModule extends CordovaBaseModule {
    private static final String TAG = HMSScanModule.class.getSimpleName();

    private static final int REQUEST_CODE_SCAN_ONE = 0X01;
    private CordovaPlugin cordovaPlugin;
    private HmsScanAnalyzer analyzer;

    public HMSScanModule(CordovaPlugin cordovaPlugin) {
        this.cordovaPlugin = cordovaPlugin;
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

        final HmsScanAnalyzerOptions hmsScanAnalyzerOptions = new HmsScanAnalyzerOptions.Creator()
                .setHmsScanTypes(scanTypes[0], scanTypes).setPhotoMode(false).create();

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
                new HmsScanAnalyzerOptions.Creator().setHmsScanTypes(scanTypes[0], scanTypes).setPhotoMode(true).create());

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
                .setHmsScanTypes(scanTypes[0], scanTypes).create();
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
    public void enableLogger(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        corPack.enableLogger();
        promise.success();
    }

    @HMSLog
    @CordovaMethod
    public void disableLogger(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
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

