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

import static android.app.Activity.RESULT_OK;

import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Parcelable;
import android.provider.MediaStore;
import android.text.TextUtils;
import android.util.Log;
import android.util.SparseArray;

import com.huawei.hms.cordova.scan.draw.ScanResultView;
import com.huawei.hms.cordova.scan.helpers.GenerateBarcodeProps;
import com.huawei.hms.cordova.scan.utils.CordovaUtils;
import com.huawei.hms.cordova.scan.utils.HMSLogger;
import com.huawei.hms.cordova.scan.utils.JSONUtils;
import com.huawei.hms.cordova.scan.utils.PermissionUtils;
import com.huawei.hms.cordova.scan.utils.ScanError;
import com.huawei.hms.hmsscankit.ScanUtil;
import com.huawei.hms.hmsscankit.WriterException;
import com.huawei.hms.ml.scan.HmsBuildBitmapOption;
import com.huawei.hms.ml.scan.HmsScan;
import com.huawei.hms.ml.scan.HmsScanAnalyzer;
import com.huawei.hms.ml.scan.HmsScanAnalyzerOptions;
import com.huawei.hms.mlsdk.common.MLFrame;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class HMSScan extends CordovaPlugin {
    private static final String TAG = HMSScan.class.getSimpleName();
    private static final int BITMAP_CODE = 333;
    private static final int MULTIPROCESSOR_SYN_CODE = 444;
    private static final int MULTIPROCESSOR_ASYN_CODE = 555;
    private static final int REQUEST_CODE_SCAN_ONE = 0X01;
    private static final int REQUEST_CODE_DEFINE = 0X0111;
    private static final int REQUEST_CODE_SCAN_MULTI = 0X011;
    private static final String DECODE_MODE = "decode_mode";
    private static CordovaInterface cordovaInterface;
    List<String> permissionList = new ArrayList<>();
    ScanError scanError = new ScanError(1, "ERROR_NO_CAMERA_PERMISSION");
    private CallbackContext callbackContext;
    private CordovaPlugin cordovaPlugin;
    private HMSLogger hmsLogger;

    public static CordovaInterface getCordovaInterface() {
        return cordovaInterface;
    }

    public static void setCordovaInterface(final CordovaInterface crdvaInterface) {
        cordovaInterface = crdvaInterface;
    }

    public boolean checkPermission(final List<String> list) {
        boolean permissionResult = false;
        if (list.contains("CAMERA")) {
            permissionResult = PermissionUtils.hasPermission("CAMERA", this);
        }
        if (list.contains("WRITE_EXTERNAL_STORAGE")) {
            permissionResult = PermissionUtils.hasPermission("WRITE_EXTERNAL_STORAGE", this);
        }
        return permissionResult;
    }

    public void enableLogger(final CallbackContext callbackContext) {
        hmsLogger.enableLogger();
        callbackContext.success();
    }

    public void disableLogger(final CallbackContext callbackContext) {
        hmsLogger.disableLogger();
        callbackContext.success();
    }

    public void multiprocessor(final JSONObject params, final String action) throws JSONException {
        if (!params.has("scanTypes") || params.isNull("scanTypes")) {
            callbackContext.error("Illegal argument. scanTypes field is mandatory and it must not be null.");
            return;
        }
        ScanResultView.scanResultViewInitializer(params, callbackContext, cordovaInterface);
        Log.i(TAG, "multiprocessorSynMode: func1");
        final Intent intent = new Intent(cordovaInterface.getContext(), CommonActivity.class);
        intent.putExtra("enablePhotoButton", params.optBoolean("enablePhotoButton", true));
        intent.putExtra("enableScanArea", params.optBoolean("enableScanArea", true));
        intent.putExtra("scanTips", params.optString("scanTips"));
        intent.putExtra("scanAreaWidth", params.optInt("scanAreaWidth", 240));
        intent.putExtra("scanAreaHeight", params.optInt("scanAreaHeight", 240));
        final JSONArray jsonArray = params.getJSONArray("scanTypes");
        final int[] scanTypes = JSONUtils.getScanTypes(jsonArray, callbackContext);
        final int var1 = jsonArray.getInt(0);
        intent.putExtra("scanTypes", scanTypes);
        intent.putExtra("scanTypeVar1", var1);

        if ("multiprocessorSynMode".equals(action)) {
            if (checkPermission(permissionList)) {
                intent.putExtra(DECODE_MODE, MULTIPROCESSOR_SYN_CODE);
                cordovaInterface.startActivityForResult(cordovaPlugin, intent, REQUEST_CODE_SCAN_MULTI);
            } else {
                callbackContext.error(scanError.toJSON());
            }
        } else {
            if (checkPermission(permissionList)) {
                intent.putExtra(DECODE_MODE, MULTIPROCESSOR_ASYN_CODE);
                cordovaInterface.startActivityForResult(cordovaPlugin, intent, REQUEST_CODE_SCAN_MULTI);
            } else {
                callbackContext.error(scanError.toJSON());
            }
        }
    }

    //Cordova Method barcodeGeneration
    private void barcodeGeneration(final JSONObject params) throws JSONException {
        if (checkPermission(permissionList)) {
            Log.i(TAG, "isScanAvailable: " + ScanUtil.isScanAvailable(cordova.getContext()));

            if (!params.has("inputContent") || params.isNull("inputContent")) {
                Log.e(TAG, "Illegal argument. inputContent field is mandatory and it must not be null.");
                callbackContext.error("Illegal argument. inputContent field is mandatory and it must not be null.");
                return;
            }
            if (!params.has("barcodeFormat") || params.isNull("barcodeFormat")) {
                Log.e(TAG, "Illegal argument. generateType field is mandatory and it must not be null.");
                callbackContext.error("Illegal argument. generateType field is mandatory and it must not be null.");
                return;
            }
            final GenerateBarcodeProps generateBarcodeProps
                = JSONUtils.FROM_JSON_OBJECT_TO_GENERATE_BARCODE_OPTIONS.map(params);
            final Bitmap resultImage;
            try {
                final HmsBuildBitmapOption options = new HmsBuildBitmapOption.Creator().setBitmapMargin(
                    generateBarcodeProps.getGenerateMargin())
                    .setBitmapColor(generateBarcodeProps.getGenerateColor())
                    .setBitmapBackgroundColor(generateBarcodeProps.getGenerateBackground())
                    .create();
                resultImage = ScanUtil.buildBitmap(generateBarcodeProps.getInputContent(),
                    generateBarcodeProps.getGenerateType(), generateBarcodeProps.getBarcodeWidth(),
                    generateBarcodeProps.getBarcodeHeight(), options);
                callbackContext.success(JSONUtils.bitmapToBase64(resultImage));
                hmsLogger.sendSingleEvent("generateBarcode");
            } catch (final WriterException e) {
                callbackContext.error(e.toString());
                hmsLogger.sendSingleEvent("generateBarcode", "-1");
            }
        } else {
            callbackContext.error(scanError.toJSON());
        }
    }

    //Cordova Method defaultViewMode
    public void defaultViewMode(final JSONObject params) throws JSONException {
        if (checkPermission(permissionList)) {
            Log.i(TAG, "defaultViewMode:");

            final JSONArray jsonArray = params.getJSONArray("scanTypes");
            if (jsonArray.isNull(0) || jsonArray.length() == 0) {
                callbackContext.error("Illegal argument. jsonArray field is mandatory and it must not be null.");
                return;
            }
            final int var1 = jsonArray.getInt(0);
            final int[] scanTypes = JSONUtils.getScanTypes(jsonArray, callbackContext);
            final HmsScanAnalyzerOptions hmsScanAnalyzerOptions = new HmsScanAnalyzerOptions.Creator().setHmsScanTypes(
                var1, scanTypes).setPhotoMode(false).create();
            ScanUtil.startScan(this.cordova.getActivity(), REQUEST_CODE_SCAN_ONE, hmsScanAnalyzerOptions);
            cordova.setActivityResultCallback(this);

        } else {
            callbackContext.error(scanError.toJSON());
        }
    }

    //Cordova Method analyzInAsyn with Bitmap
    private void asynModeWithImage(final JSONObject params) throws JSONException {
        if (checkPermission(permissionList)) {
            try {
                final MLFrame frame = JSONUtils.getFrame(cordova.getContext(), params);
                final JSONArray jsonArray = params.getJSONArray("scanTypes");
                if (jsonArray.isNull(0) || jsonArray.length() == 0) {
                    callbackContext.error("Illegal argument. jsonArray field is mandatory and it must not be null.");
                    return;
                }
                final int[] scanTypes = JSONUtils.getScanTypes(jsonArray, callbackContext);
                final int var1 = jsonArray.getInt(0);

                final HmsScanAnalyzer analyzer = new HmsScanAnalyzer.Creator(cordova.getContext()).setHmsScanTypes(var1,
                    scanTypes).create();
                analyzer.analyzInAsyn(frame).addOnSuccessListener(hmsScans -> {
                    if (hmsScans != null && !hmsScans.isEmpty() && hmsScans.get(0) != null && !TextUtils.isEmpty(
                        hmsScans.get(0).getOriginalValue())) {
                        try {
                            Log.i(TAG, "onSuccess: " + JSONUtils.listToJSONArray(hmsScans, JSONUtils::hmsScansToJSON));
                            callbackContext.success(JSONUtils.listToJSONArray(hmsScans, JSONUtils::hmsScansToJSON));
                            hmsLogger.sendSingleEvent("asynModeWithImage");
                        } catch (JSONException e) {
                            Log.e(TAG, "error1: " + e.toString());
                            hmsLogger.sendSingleEvent("asynModeWithImage", "-1");
                        }
                    }
                }).addOnFailureListener(e -> callbackContext.error(e.toString()));
            } catch (final IOException e) {
                callbackContext.error("asynModeWithImage -> " + e.toString());
            }
        } else {
            callbackContext.error(scanError.toJSON());
        }
    }

    //Cordova Method analyseFrame with Bitmap
    private void synModeWithImage(final JSONObject params) throws JSONException {
        if (checkPermission(permissionList)) {
            try {
                final MLFrame frame = JSONUtils.getFrame(cordova.getContext(), params);
                final JSONArray jsonArray = params.getJSONArray("scanTypes");
                if (!params.has("scanTypes") || params.isNull("scanTypes")) {
                    callbackContext.error("Illegal argument. scanTypes field is mandatory and it must not be null.");
                    return;
                }
                final int[] scanTypes = JSONUtils.getScanTypes(jsonArray, callbackContext);
                final int var1 = jsonArray.getInt(0);
                final HmsScanAnalyzer analyzer = new HmsScanAnalyzer.Creator(cordova.getContext()).setHmsScanTypes(var1,
                    scanTypes).create();
                final SparseArray<HmsScan> result = analyzer.analyseFrame(frame);
                if (result != null && result.size() > 0 && result.valueAt(0) != null && !TextUtils.isEmpty(
                    result.valueAt(0).getOriginalValue())) {
                    callbackContext.success(JSONUtils.fromSparseArrayHmsScanToJSON(result));
                    hmsLogger.sendSingleEvent("synModeWithImage");
                } else {
                    callbackContext.error("No result");
                    hmsLogger.sendSingleEvent("synModeWithImage", "-1");
                }
            } catch (final IOException e) {
                callbackContext.error("synModeWithImage -> " + e.toString());
            }

        } else {
            callbackContext.error(scanError.toJSON());
        }
    }

    //Cordova Method decodeBitmap
    private void decodeWithBitmap(final JSONObject params) throws JSONException {
        if (checkPermission(permissionList)) {
            final Uri imageUri = Uri.parse(params.getString("filePath"));

            try {
                final Bitmap bitmap = MediaStore.Images.Media.getBitmap(cordova.getActivity().getContentResolver(),
                    imageUri);
                final JSONArray jsonArray = params.getJSONArray("scanTypes");
                if (jsonArray.isNull(0) || jsonArray.length() == 0) {
                    callbackContext.error("Illegal argument. jsonArray field is mandatory and it must not be null.");
                    return;
                }
                final int[] scanTypes = JSONUtils.getScanTypes(jsonArray, callbackContext);
                final int var1 = jsonArray.getInt(0);
                final HmsScan[] hmsScans = ScanUtil.decodeWithBitmap(cordova.getContext(), bitmap,
                    new HmsScanAnalyzerOptions.Creator().setHmsScanTypes(var1, scanTypes).setPhotoMode(true).create());
                if (hmsScans != null && hmsScans.length > 0 && hmsScans[0] != null && !TextUtils.isEmpty(
                    hmsScans[0].getOriginalValue())) {
                    Log.i(TAG, "decodewithBitmap Array Size: " + hmsScans.length);
                    final JSONArray jsArray = new JSONArray();
                    for (final HmsScan hmsScan : hmsScans) {
                        jsArray.put(JSONUtils.hmsScansToJSON(hmsScan));
                    }
                    callbackContext.success(jsArray);
                    hmsLogger.sendSingleEvent("decodeWithBitmap");
                } else {
                    callbackContext.error("Result is null.");
                    hmsLogger.sendSingleEvent("decodeWithBitmap", "-1");
                }
            } catch (final IOException e) {
                callbackContext.error(e.toString());
            }
        } else {
            callbackContext.error(scanError.toJSON());
        }
    }

    //Cordova Method customView
    public void customViewMode(final JSONObject params) throws JSONException {
        if (checkPermission(permissionList)) {
            if (!params.has("scanTypes") || params.isNull("scanTypes")) {
                callbackContext.error("Illegal argument. scanTypes field is mandatory and it must not be null.");
                return;
            }
            final JSONArray jsonArray = params.getJSONArray("scanTypes");
            final int[] scanTypes = JSONUtils.getScanTypes(jsonArray, callbackContext);
            final int var1 = jsonArray.getInt(0);
            final Intent intent = new Intent(cordova.getContext(), CustomViewActivity.class);
            intent.putExtra("scanAreaWidth", params.optInt("scanAreaWidth", 240));
            intent.putExtra("scanAreaHeight", params.optInt("scanAreaHeight", 240));
            intent.putExtra("enableFlushButton", params.optBoolean("enableFlushButton", false));
            intent.putExtra("enablePictureButton", params.optBoolean("enablePictureButton", true));
            intent.putExtra("scanAreaText", params.optString("scanAreaText", "Place the code within the frame"));
            intent.putExtra("scanTypes", scanTypes);
            intent.putExtra("scanTypesvar1", var1);
            cordova.startActivityForResult(this, intent, REQUEST_CODE_DEFINE);
        } else {
            callbackContext.error(scanError.toJSON());
        }
    }

    //Bitmap Mode
    public void bitmapMode(final JSONObject params) {
        if (checkPermission(permissionList)) {
            final Intent intent = new Intent(cordovaInterface.getContext(), CommonActivity.class);
            intent.putExtra("scanAreaWidth", params.optInt("scanAreaWidth", 240));
            intent.putExtra("scanAreaHeight", params.optInt("scanAreaHeight", 240));
            intent.putExtra("enableScanArea", params.optBoolean("enableScanArea", false));
            intent.putExtra("enablePhotoButton", params.optBoolean("enablePhotoButton", true));
            intent.putExtra("scanTips", params.optString("scanTips"));
            intent.putExtra(DECODE_MODE, BITMAP_CODE);
            cordovaInterface.startActivityForResult(cordovaPlugin, intent, REQUEST_CODE_SCAN_MULTI);
        } else {
            callbackContext.error(scanError.toJSON());
        }
    }

    @Override
    public void initialize(final CordovaInterface cordova, final CordovaWebView webView) {
        super.initialize(cordova, webView);
        hmsLogger = HMSLogger.getInstance(cordova.getContext());
        permissionList.add("CAMERA");
        permissionList.add("WRITE_EXTERNAL_STORAGE");
    }

    @Override
    public boolean execute(final String action, final JSONArray args, final CallbackContext callbackContext)
        throws JSONException {
        if ("multiprocessorSynMode".equals(action) || "multiProcessorAsynMode".equals(action) || "bitmapMode".equals(
            action)) {
            hmsLogger.startMethodExecutionTimer("multiprocessorMode");
        } else {
            hmsLogger.startMethodExecutionTimer(action);
        }
        this.cordovaPlugin = this;
        setCordovaInterface(cordova);
        this.callbackContext = callbackContext;

        final JSONObject params = args.optJSONObject(0);
        switch (action) {
            case "checkPermissions":
                final JSONObject permissionResult = new JSONObject();
                final List<String> permissionsList = PermissionUtils.jsonArrayToList(params);
                if (permissionsList.contains("CAMERA")) {
                    permissionResult.putOpt("CAMERA",
                        CordovaUtils.keyValPair("hasPermission", PermissionUtils.hasPermission("CAMERA", this)));
                }
                if (permissionsList.contains("WRITE_EXTERNAL_STORAGE")) {
                    permissionResult.putOpt("WRITE_EXTERNAL_STORAGE", CordovaUtils.keyValPair("hasPermission",
                        PermissionUtils.hasPermission("WRITE_EXTERNAL_STORAGE", this)));
                }
                callbackContext.success(permissionResult);
                return true;
            case "requestPermissions":
                PermissionUtils.requestPermission(params, this);
                return true;
            case "defaultViewMode":
                cordova.getThreadPool().execute(() -> {
                    try {
                        defaultViewMode(params);
                    } catch (final JSONException e) {
                        Log.e(TAG, "error" + e.toString());
                    }
                });
                return true;
            case "asynModeWithImage":
                cordova.getThreadPool().execute(() -> {
                    try {
                        asynModeWithImage(params);
                    } catch (final JSONException e) {
                        Log.e(TAG, "error" + e.toString());
                    }
                });
                return true;
            case "synModeWithImage":
                cordova.getThreadPool().execute(() -> {
                    try {
                        synModeWithImage(params);
                    } catch (final JSONException e) {
                        Log.e(TAG, "error: " + e.toString());
                    }
                });
                return true;
            case "decodeWithBitmap":
                cordova.getActivity().runOnUiThread(() -> {
                    try {
                        decodeWithBitmap(params);
                    } catch (final JSONException e) {
                        Log.e(TAG, "error: " + e.toString());
                    }
                });
                return true;
            case "multiProcessorSynMode":
            case "multiProcessorAsynMode":
                cordova.getThreadPool().execute(() -> {
                    try {
                        multiprocessor(params, action);
                    } catch (final JSONException e) {
                        Log.e(TAG, "error: " + e.toString());
                    }
                });
                return true;
            case "customViewMode":
                cordova.getThreadPool().execute(() -> {
                    try {
                        customViewMode(params);
                    } catch (final JSONException e) {
                        Log.e(TAG, "error: " + e.toString());
                    }
                });
                return true;
            case "generateBarcode":
                barcodeGeneration(params);
                return true;
            case "enableLogger":
                enableLogger(callbackContext);
                return true;
            case "disableLogger":
                disableLogger(callbackContext);
                return true;
            case "bitmapMode":
                bitmapMode(params);
                return true;
            default:
                return false;
        }
    }

    //onActivityResult
    @Override
    public void onActivityResult(final int requestCode, final int resultCode, final Intent data) {
        super.onActivityResult(requestCode, requestCode, data);
        if (resultCode != RESULT_OK || data == null) {
            return;
        }
        if (requestCode == REQUEST_CODE_SCAN_ONE) {
            final HmsScan obj = data.getParcelableExtra(ScanUtil.RESULT);
            if (obj != null) {
                try {
                    final String jsonResult = JSONUtils.toJSON(obj);
                    callbackContext.success(new JSONObject(jsonResult));
                    hmsLogger.sendSingleEvent("defaultViewMode");
                } catch (final JSONException e) {
                    Log.e(TAG, "error: " + e.toString());
                    callbackContext.error(e.toString());
                    hmsLogger.sendSingleEvent("defaultViewMode", "-1");
                }
            }
        } else if (requestCode == REQUEST_CODE_SCAN_MULTI) {
            final Parcelable[] obj = data.getParcelableArrayExtra(CommonActivity.SCAN_RESULT);
            if (obj != null && obj.length > 0 && obj[0] instanceof HmsScan) {
                if (obj.length == 1) {
                    if (!TextUtils.isEmpty(((HmsScan) obj[0]).getOriginalValue())) {
                        try {
                            callbackContext.success(JSONUtils.hmsScansToJSON(((HmsScan) obj[0])));
                            hmsLogger.sendPeriodicEvent("multiprocessorMode");
                        } catch (final JSONException e) {
                            Log.e(TAG, "error: " + e.toString());
                            callbackContext.error(e.toString());
                            hmsLogger.sendPeriodicEvent("multiprocessorMode", "-1");
                        }
                    }
                } else {
                    final JSONArray jsArray = new JSONArray();
                    for (final Parcelable parcelable : obj) {
                        try {
                            jsArray.put(JSONUtils.hmsScansToJSON(((HmsScan) parcelable)));
                        } catch (final JSONException e) {
                            Log.e(TAG, "error: " + e.toString());
                        }
                    }
                    callbackContext.success(jsArray);
                }
            }
            //Customized View
        } else if (requestCode == REQUEST_CODE_DEFINE) {
            final HmsScan obj = data.getParcelableExtra(CustomViewActivity.SCAN_RESULT);
            if (obj != null) {
                try {
                    callbackContext.success(JSONUtils.hmsScansToJSON(obj));
                    hmsLogger.sendSingleEvent("customViewMode");
                } catch (final JSONException e) {
                    Log.e(TAG, "error: " + e.toString());
                    callbackContext.error(e.toString());
                    hmsLogger.sendSingleEvent("customViewMode", "-1");
                }
            }
        } else {
            Log.i(TAG, "onActivityResult: invalid Action");
        }
    }
}
