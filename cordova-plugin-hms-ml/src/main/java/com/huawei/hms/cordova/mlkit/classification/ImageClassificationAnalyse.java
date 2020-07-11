/*
Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

package com.huawei.hms.cordova.mlkit.classification;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.Log;
import android.util.SparseArray;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.mlsdk.MLAnalyzerFactory;
import com.huawei.hms.mlsdk.classification.MLImageClassification;
import com.huawei.hms.mlsdk.classification.MLImageClassificationAnalyzer;
import com.huawei.hms.mlsdk.classification.MLLocalClassificationAnalyzerSetting;
import com.huawei.hms.mlsdk.classification.MLRemoteClassificationAnalyzerSetting;
import com.huawei.hms.mlsdk.common.MLFrame;

import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.List;

public class ImageClassificationAnalyse {
    private static final String TAG = ImageClassificationAnalyse.class.getName();

    private MLImageClassificationAnalyzer analyzer;
    private int analyseMode;

    public void localImageClassificationAnalyzer(Context context, JSONObject params, CallbackContext callbackContext) throws JSONException, IOException {
        Log.i(TAG, "localImageClassificationAnalyzer: ");
        MLFrame frame = HMSMLUtils.getFrame(context, params, callbackContext);
        if (frame == null) {
            callbackContext.error("Illegal argument. filePath field is mandatory and it must not be null.");
            return;
        }
        float minAcceptablePossibility;
        JSONObject localClassificationAnalyzerSetting = params.optJSONObject("localClassificationAnalyzerSetting");
        if (localClassificationAnalyzerSetting != null) {
            minAcceptablePossibility = (float) localClassificationAnalyzerSetting.optDouble("minAcceptablePossibility", 0.5f);
        } else {
            minAcceptablePossibility = 0.5f;
        }
        MLLocalClassificationAnalyzerSetting setting =
                new MLLocalClassificationAnalyzerSetting.Factory().setMinAcceptablePossibility(minAcceptablePossibility).create();
        analyseMode = params.optInt("analyseMode");
        analyzer = MLAnalyzerFactory.getInstance().getLocalImageClassificationAnalyzer(setting);
        callAnalyseFrame(callbackContext, frame);

    }

    public void remoteImageClassificationAnalyzer(Context context, JSONObject params, CallbackContext callbackContext) throws JSONException, IOException {
        Log.i(TAG, "remoteImageClassificationAnalyzer: ");
        MLFrame frame = HMSMLUtils.getFrame(context, params, callbackContext);
        if (frame == null) {
            callbackContext.error("Illegal argument. filePath field is mandatory and it must not be null.");
            return;
        }
        MLRemoteClassificationAnalyzerSetting setting;
        int largestNumOfReturns;
        float minAcceptablePossibility;
        JSONObject remoteClassificationAnalyzerSetting = params.optJSONObject("remoteClassificationAnalyzerSetting");
        if (remoteClassificationAnalyzerSetting != null) {
            largestNumOfReturns = remoteClassificationAnalyzerSetting.optInt("largestNumOfReturns", 0);
            minAcceptablePossibility = (float) remoteClassificationAnalyzerSetting.optDouble("minAcceptablePossibility", 0.5f);
            setting = new MLRemoteClassificationAnalyzerSetting.Factory()
                    .setLargestNumOfReturns(largestNumOfReturns)
                    .setMinAcceptablePossibility(minAcceptablePossibility).create();
        } else {
            setting = new MLRemoteClassificationAnalyzerSetting.Factory().create();
        }
        analyzer = MLAnalyzerFactory.getInstance().getRemoteImageClassificationAnalyzer(setting);
        analyseMode = params.optInt("analyseMode");
        callAnalyseFrame(callbackContext, frame);
    }

    private void callAnalyseFrame(CallbackContext callbackContext, MLFrame frame) {
        switch (analyseMode) {
            case 0:
                Log.i(TAG, ": asyncAnalyseFrame");
                Task<List<MLImageClassification>> task = analyzer.asyncAnalyseFrame(frame);
                task.addOnSuccessListener(classifications -> handleResult(classifications, true, callbackContext)).addOnFailureListener(e -> handleResult(e.getMessage(), false, callbackContext));
                break;
            case 1:
                try {
                    Log.i(TAG, ": AnalyseFrame");
                    SparseArray<MLImageClassification> analyseFrame = analyzer.analyseFrame(frame);
                    if (analyseFrame != null)
                        callbackContext.success(TextUtils.fromSparseArrayImageClassificationJSON(analyseFrame));
                } catch (Exception e) {
                    Log.e(TAG, "error: " + e.getMessage());
                    callbackContext.error(e.getMessage());
                }
                break;
            default:
                callbackContext.error("analyse Mode can be only 0 or 1");
                break;

        }
    }

    private void handleResult(Object result, boolean isSuccess, CallbackContext callbackContext) {
        try {
            String jsonResult = HMSMLUtils.toJSON(result);

            if (isSuccess) {
                callbackContext.success(new JSONArray(jsonResult));
            } else {
                callbackContext.error(new JSONObject(jsonResult));
            }
        } catch (JSONException ex) {
            Log.e(TAG, "Error : " + ex);
            callbackContext.error(ex.getMessage());
        }
    }

    public void closeImageClassificationAnalyser(CallbackContext callbackContext) throws IOException {
        if (analyzer == null) {
            callbackContext.error("Analyser is not initialized.");
        } else {
            analyzer.stop();
            analyzer = null;
        }
    }
}
