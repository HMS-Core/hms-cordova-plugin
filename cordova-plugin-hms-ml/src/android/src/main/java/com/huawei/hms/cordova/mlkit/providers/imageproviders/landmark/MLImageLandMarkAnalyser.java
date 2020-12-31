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

package com.huawei.hms.cordova.mlkit.providers.imageproviders.landmark;

import android.content.Context;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.helpers.CordovaHelpers;
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.mlsdk.landmark.MLRemoteLandmark;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.logger.HMSMethod;
import com.huawei.hms.cordova.mlkit.utils.PlatformUtils;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.MLAnalyzerFactory;

import com.huawei.hms.mlsdk.landmark.MLRemoteLandmarkAnalyzer;
import com.huawei.hms.mlsdk.landmark.MLRemoteLandmarkAnalyzerSetting;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.List;

public class MLImageLandMarkAnalyser extends HMSProvider {
    private static final String TAG = MLImageLandMarkAnalyser.class.getName();
    private MLRemoteLandmarkAnalyzer analyzer;
    private MLRemoteLandmarkAnalyzerSetting settings;

    public MLImageLandMarkAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializeImageLandMarkAnalyzer(final JSONObject params, final CallbackContext callbackContext) {

        MLFrame landmarkFrame = HMSMLUtils.getFrame(getContext(), params);
        CordovaHelpers.frameController(landmarkFrame, getContext(), callbackContext, "imageLandmarkAnalyse");
        JSONObject landmarkAnalyzerSetting = params.optJSONObject("landmarkAnalyzerSetting");
        if (landmarkAnalyzerSetting != null) {
            settings = TextUtils.toObject(landmarkAnalyzerSetting, MLRemoteLandmarkAnalyzerSetting.class);
            analyzer = MLAnalyzerFactory.getInstance().getRemoteLandmarkAnalyzer(settings);
        } else {
            MLRemoteLandmarkAnalyzerSetting mlRemoteLandmarkAnalyzerSetting
                = MLRemoteLandmarkAnalyzerSetting.DEFAULT_SETTINGS;
            analyzer = MLAnalyzerFactory.getInstance().getRemoteLandmarkAnalyzer(mlRemoteLandmarkAnalyzerSetting);
        }
        HMSMethod method = new HMSMethod("imageLandmarkAnalyse");
        Task<List<MLRemoteLandmark>> task = analyzer.asyncAnalyseFrame(landmarkFrame);
        task.addOnSuccessListener(PlatformUtils.successListener(method, getActivity(), callbackContext,
            TextUtils.FROM_MLREMOTELANDMARK_TO_JSON_OBJECT))
            .addOnFailureListener(PlatformUtils.failureListener(method, getActivity(), callbackContext));

    }

    public void stopLandmarkAnalyser(final CallbackContext callbackContext) throws IOException {
        if (analyzer == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("imageLandmarkAnalyseStop", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            this.analyzer.close();
            callbackContext.success("Image landmark Analyser is closed");
            HMSLogger.getInstance(getContext()).sendSingleEvent("imageLandmarkAnalyseStop");
        }
    }

    public void getLandmarkAnalyserSetting(final CallbackContext callbackContext) throws JSONException {
        if (analyzer == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("imageLandmarkAnalyseSetting", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            JSONObject object = new JSONObject();
            object.putOpt("largestNumOfReturns", settings.getLargestNumOfReturns());
            object.putOpt("patternType", settings.getPatternType());
            object.putOpt("isEnableFingerprintVerification", settings.isEnableFingerprintVerification());
            callbackContext.success(object);
            HMSLogger.getInstance(getContext()).sendSingleEvent("imageLandmarkAnalyseSetting");
        }
    }
}
