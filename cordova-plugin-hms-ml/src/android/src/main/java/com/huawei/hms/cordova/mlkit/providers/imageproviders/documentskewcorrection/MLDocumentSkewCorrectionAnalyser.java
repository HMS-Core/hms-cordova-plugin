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

package com.huawei.hms.cordova.mlkit.providers.imageproviders.documentskewcorrection;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Point;
import android.net.Uri;
import android.provider.MediaStore;
import android.util.Log;
import android.util.SparseArray;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.mlsdk.dsc.MLDocumentSkewCorrectionAnalyzer;
import com.huawei.hms.mlsdk.dsc.MLDocumentSkewCorrectionAnalyzerFactory;
import com.huawei.hms.mlsdk.dsc.MLDocumentSkewCorrectionAnalyzerSetting;
import com.huawei.hms.mlsdk.dsc.MLDocumentSkewCorrectionConstant;
import com.huawei.hms.mlsdk.dsc.MLDocumentSkewCorrectionCoordinateInput;
import com.huawei.hms.mlsdk.dsc.MLDocumentSkewCorrectionResult;
import com.huawei.hms.mlsdk.dsc.MLDocumentSkewDetectResult;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class MLDocumentSkewCorrectionAnalyser extends HMSProvider {
    private static final String TAG = MLDocumentSkewCorrectionAnalyser.class.getSimpleName();
    private MLDocumentSkewCorrectionAnalyzer analyzer;
    private MLDocumentSkewCorrectionCoordinateInput input;
    private MLFrame mlFrame;
    private Bitmap bitmap;
    private CallbackContext callbackContext;
    private CordovaInterface cordovaInterface;
    private int syncMode = 0;

    public MLDocumentSkewCorrectionAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializeDocumentSkewCorrectionAnalyser(final JSONObject params, final CallbackContext callbackContext,
        final CordovaInterface cordovaInterface) throws JSONException, IOException {
        this.callbackContext = callbackContext;
        this.cordovaInterface = cordovaInterface;
        MLDocumentSkewCorrectionAnalyzerSetting setting
            = new MLDocumentSkewCorrectionAnalyzerSetting.Factory().create();
        this.analyzer = MLDocumentSkewCorrectionAnalyzerFactory.getInstance()
            .getDocumentSkewCorrectionAnalyzer(setting);

        Uri imageUri = Uri.parse(params.getString("filePath"));
        this.bitmap = MediaStore.Images.Media.getBitmap(cordovaInterface.getActivity().getContentResolver(), imageUri);
        this.mlFrame = new MLFrame.Creator().setBitmap(bitmap).create();
        int analyseMode = params.optInt("analyseMode", 0);
        syncMode = params.optInt("syncMode", 0);
        if (analyseMode == 0) {
            Task<MLDocumentSkewDetectResult> detectTask = this.analyzer.asyncDocumentSkewDetect(this.mlFrame);
            detectTask.addOnSuccessListener(detectResult -> {
                if (detectResult != null) {
                    int resultCode = detectResult.getResultCode();
                    if (resultCode == MLDocumentSkewCorrectionConstant.SUCCESS) {
                        success(detectResult);
                    } else {
                        displayFailure(resultCode);
                    }
                } else {
                    callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.SERVICE_FAILURE));
                }
            }).addOnFailureListener(e -> {
                callbackContext.error(e.getMessage());
            });
        }
        if (analyseMode == 1) {
            SparseArray<MLDocumentSkewDetectResult> sparseArray = analyzer.analyseFrame(mlFrame);
            if (sparseArray != null && sparseArray.get(0).getResultCode() == MLDocumentSkewCorrectionConstant.SUCCESS) {
                for (int i = 0; i < sparseArray.size(); i++) {
                    int key = sparseArray.keyAt(i);
                    MLDocumentSkewDetectResult mlDocumentSkewDetectResult = sparseArray.get(key);
                    success(mlDocumentSkewDetectResult);
                }

            } else {
                if (sparseArray != null) {
                    displayFailure(sparseArray.get(0).getResultCode());
                }
            }
        }

    }

    public void success(final MLDocumentSkewDetectResult detectResult) {
        Point leftTop = detectResult.getLeftTopPosition();
        Point rightTop = detectResult.getRightTopPosition();
        Point leftBottom = detectResult.getLeftBottomPosition();
        Point rightBottom = detectResult.getRightBottomPosition();
        List<Point> coordinates = new ArrayList<>();
        coordinates.add(leftTop);
        coordinates.add(rightTop);
        coordinates.add(rightBottom);
        coordinates.add(leftBottom);
        setDetectData(new MLDocumentSkewCorrectionCoordinateInput(coordinates));
        refineImg();
    }

    private void displayFailure(int errorCode) {
        String message = null;
        if (errorCode == MLDocumentSkewCorrectionConstant.IMAGE_DATA_ERROR) {
            message = "Image data error:" + "" + errorCode;
        } else if (errorCode == MLDocumentSkewCorrectionConstant.CORRECTION_FAILD) {
            message = "Correction failed" + "" + errorCode;
        } else {
            message = "Detect failed" + "" + errorCode;
        }
        callbackContext.error(message);
        HMSLogger.getInstance(cordovaInterface.getContext())
            .sendSingleEvent("documentSkewAnalyse", String.valueOf(errorCode));
    }

    private void displaySuccess(final MLDocumentSkewCorrectionResult refineResult) throws JSONException {
        if (this.bitmap == null) {
            Log.e(TAG, "error: bitmap is null.");
            return;
        }
        JSONObject inputJSON = new JSONObject();
        inputJSON.putOpt("points", HMSMLUtils.listToJSONArray(this.input.getPoints(), TextUtils::fromPointToJSON));
        Bitmap corrected = refineResult.getCorrected();
        JSONObject resultCorrection = new JSONObject();
        if (corrected != null) {
            resultCorrection.putOpt("resultCode", refineResult.getResultCode());
            resultCorrection.putOpt("bitmap", HMSMLUtils.bitmapToBase64(corrected));
            resultCorrection.putOpt("points", inputJSON);
            callbackContext.success(resultCorrection);
            HMSLogger.getInstance(cordovaInterface.getContext()).sendSingleEvent("documentSkewAnalyse");
        } else {
            callbackContext.error("Error");
            HMSLogger.getInstance(cordovaInterface.getContext()).sendSingleEvent("documentSkewAnalyse", "-1");
            Log.e(TAG, "error: ");
        }
    }

    private void setDetectData(MLDocumentSkewCorrectionCoordinateInput input) {
        this.input = input;
    }

    private void refineImg() {
        if (syncMode == 0) {
            Task<MLDocumentSkewCorrectionResult> correctionTask = this.analyzer.asyncDocumentSkewCorrect(this.mlFrame,
                this.input);

            correctionTask.addOnSuccessListener(refineResult -> {
                if (refineResult != null) {
                    int resultCode = refineResult.getResultCode();
                    if (resultCode == MLDocumentSkewCorrectionConstant.SUCCESS) {
                        try {
                            displaySuccess(refineResult);
                        } catch (JSONException e) {
                            Log.e(TAG, "refineImg: error->" + e.getMessage());
                        }
                    } else {
                        callbackContext.error(resultCode);
                    }
                } else {
                    Log.e(TAG, "error -> Correct exception！");
                }
            }).addOnFailureListener(e -> {
                Log.e(TAG, "error: " + e.getMessage());
            });
        }
        if (syncMode == 1) {
            SparseArray<MLDocumentSkewCorrectionResult> sparseArray = this.analyzer.syncDocumentSkewCorrect(
                this.mlFrame, this.input);
            callbackContext.success(TextUtils.fromSparseArrayDocSkewToJSON(sparseArray));
        }

    }

    public void stopDocSkew(final CallbackContext callbackContext) throws IOException {
        if (analyzer == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(cordovaInterface.getContext())
                .sendSingleEvent("documentSkewAnalyseStop", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            analyzer.stop();
            analyzer = null;
            callbackContext.success("Analyser Closed");
            HMSLogger.getInstance(cordovaInterface.getContext()).sendSingleEvent("documentSkewAnalyseStop");

        }
    }
}
