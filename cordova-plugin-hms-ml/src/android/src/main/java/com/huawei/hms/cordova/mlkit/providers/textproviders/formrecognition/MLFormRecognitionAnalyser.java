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

package com.huawei.hms.cordova.mlkit.providers.textproviders.formrecognition;

import android.content.Context;
import android.util.SparseArray;

import com.google.gson.JsonObject;
import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.mlsdk.fr.MLFormRecognitionAnalyzer;
import com.huawei.hms.mlsdk.fr.MLFormRecognitionAnalyzerFactory;
import com.huawei.hms.mlsdk.fr.MLFormRecognitionConstant;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

public class MLFormRecognitionAnalyser extends HMSProvider {
    private static final String TAG = MLFormRecognitionAnalyser.class.getName();
    private MLFormRecognitionAnalyzer analyzer;

    public MLFormRecognitionAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializeFormRecognitionAnalyser(final JSONObject params, final CallbackContext callbackContext)
        throws JSONException {

        MLFrame frame = HMSMLUtils.getFrame(getContext(), params);

        CordovaHelpers.frameController(frame, getContext(), callbackContext, "formRecognitionAnalyser");

        analyzer = MLFormRecognitionAnalyzerFactory.getInstance().getFormRecognitionAnalyzer();
        int syncType = params.optInt("sncyType", 1);
        if (syncType == 0) {
            Task<JsonObject> task = analyzer.asyncAnalyseFrame(frame);
            task.addOnSuccessListener(jsonObject -> {
                if (jsonObject != null && jsonObject.get("retCode").getAsInt() == MLFormRecognitionConstant.SUCCESS) {
                    try {
                        JSONObject formResult = new JSONObject(String.valueOf(jsonObject));
                        callbackContext.success(formResult);
                        HMSLogger.getInstance(getContext()).sendSingleEvent("formRecognitionAnalyser");
                    } catch (JSONException e) {
                        callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.SERVICE_FAILURE));
                        HMSLogger.getInstance(getContext())
                            .sendSingleEvent("formRecognitionAnalyser", String.valueOf(CordovaErrors.SERVICE_FAILURE));
                    }

                } else if (jsonObject != null
                    && jsonObject.get("retCode").getAsInt() == MLFormRecognitionConstant.FAILED) {
                    callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.SERVICE_FAILURE));
                    HMSLogger.getInstance(getContext())
                        .sendSingleEvent("formRecognitionAnalyser", String.valueOf(CordovaErrors.SERVICE_FAILURE));

                }

            }).addOnFailureListener(e -> {
                callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.SERVICE_FAILURE));
                HMSLogger.getInstance(getContext())
                    .sendSingleEvent("formRecognitionAnalyser", String.valueOf(CordovaErrors.SERVICE_FAILURE));
            });
        } else {
            SparseArray<JsonObject> recognizeResult = analyzer.analyseFrame(frame);
            if (recognizeResult != null
                && recognizeResult.get(0).get("retCode").getAsInt() == MLFormRecognitionConstant.SUCCESS) {
                JSONObject result = new JSONObject();
                for (int i = 0; i < recognizeResult.size(); i++) {
                    result.putOpt("" + i, recognizeResult.get(i));
                }
                callbackContext.success(result);
            } else {
                callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.SERVICE_FAILURE));
                HMSLogger.getInstance(getContext())
                    .sendSingleEvent("formRecognitionAnalyser", String.valueOf(CordovaErrors.SERVICE_FAILURE));
            }
        }

    }

    public void stop(CallbackContext callbackContext) throws IOException {
        if (analyzer == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("formRecognitionAnalyserStop", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            analyzer.stop();
            analyzer = null;
            callbackContext.success("Analyser stopped");
            HMSLogger.getInstance(getContext()).sendSingleEvent("formRecognitionAnalyserStop");
        }
    }

}
