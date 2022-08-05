/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.mlkit.providers.facebodyproviders.faceverification;

import android.content.Context;
import android.util.SparseArray;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.logger.HMSMethod;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlkit.utils.PlatformUtils;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.mlsdk.faceverify.MLFaceVerificationAnalyzer;
import com.huawei.hms.mlsdk.faceverify.MLFaceVerificationAnalyzerFactory;
import com.huawei.hms.mlsdk.faceverify.MLFaceVerificationAnalyzerSetting;
import com.huawei.hms.mlsdk.faceverify.MLFaceVerificationResult;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class MLStillFaceVerificationAnalyser extends HMSProvider {

    MLFaceVerificationAnalyzerSetting setting = null;

    MLFaceVerificationAnalyzerSetting.Factory factory = null;

    private String TAG = MLStillFaceVerificationAnalyser.class.getSimpleName();

    private MLFrame faceFrame;

    private MLFrame faceFrame2;

    private MLFaceVerificationAnalyzer analyzer = null;

    private CallbackContext callbackContext;

    public MLStillFaceVerificationAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializeFaceVerification(final JSONObject params, final CallbackContext callbackContext)
        throws JSONException {

        this.callbackContext = callbackContext;
        faceFrame = HMSMLUtils.getFrame(getContext(), params);
        faceFrame2 = HMSMLUtils.getFrame2(getContext(), params);
        JSONObject mlFaceVerificationAnalyserAnalyserSetting = params.optJSONObject(
            "mlFaceVerificationAnalyserSetting");

        if (mlFaceVerificationAnalyserAnalyserSetting != null) {
            if (mlFaceVerificationAnalyserAnalyserSetting.has("MaxFaceDetcted") == true) {
                String maxFaceDetcted = mlFaceVerificationAnalyserAnalyserSetting.getString("MaxFaceDetcted");
                int maxFaceDetectedNumber = defaultFaceDetectedNumber(maxFaceDetcted);
                MLFaceVerificationAnalyzerSetting.Factory factory
                    = new MLFaceVerificationAnalyzerSetting.Factory().setMaxFaceDetected(maxFaceDetectedNumber);
                this.setting = factory.create();
                this.analyzer = MLFaceVerificationAnalyzerFactory.getInstance().getFaceVerificationAnalyzer(setting);
                this.analyzer.setTemplateFace(faceFrame);

            } else {
                callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.DATA_MISSING));
                return;
            }
        } else {
            this.analyzer = MLFaceVerificationAnalyzerFactory.getInstance().getFaceVerificationAnalyzer();
            this.analyzer.setTemplateFace(faceFrame);
        }

        int syncType = params.optInt("syncType");
        switch (syncType) {
            case 0: {
                analyzerSync();
                break;
            }
            case 1: {
                analyzerAsync();
                break;
            }
            default:
                callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
                HMSLogger.getInstance(getContext())
                    .sendSingleEvent("stillFaceVerificationAnalyser", String.valueOf(CordovaErrors.ILLEGAL_PARAMETER));
                break;
        }
    }

    public void analyzerSync() throws JSONException {
        List<MLFaceVerificationResult> mlList = new ArrayList<>();
        SparseArray<MLFaceVerificationResult> analyseFrame = this.analyzer.analyseFrame(faceFrame2);
        for (int i = 0; i < analyseFrame.size(); i++) {
            mlList.add(analyseFrame.get(i));
        }
        if (!mlList.isEmpty()) {
            callbackContext.success(HMSMLUtils.listToJSONArray(mlList, TextUtils::mlFaceVerificationToJSON));
            HMSLogger.getInstance(getContext()).sendSingleEvent("stillGestureAnalyse");
        } else {
            processFailure();
        }
        HMSLogger.getInstance(getContext()).sendSingleEvent("stillfaceVerificationAnalyse");
    }

    public void analyzerAsync() {
        HMSMethod method = new HMSMethod("stillFaceVerificationAnalyse");

        Task<List<MLFaceVerificationResult>> task = analyzer.asyncAnalyseFrame(faceFrame2);
        task.addOnSuccessListener(PlatformUtils.successListener(method, getActivity(), callbackContext,
            TextUtils.FROM_MLFACE_VERIFICATION_TO_JSON_OBJECT))
            .addOnFailureListener(PlatformUtils.failureListener(method, getActivity(), callbackContext));

    }

    public void stopStillFaceVerificationAnalyser(final CallbackContext callbackContext) {
        if (this.analyzer == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("stillFaceVerificatiobAnalyseStop", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            this.analyzer.stop();
            this.analyzer = null;
            callbackContext.success("FaceVerification analyzer stopped");
            HMSLogger.getInstance(getContext()).sendSingleEvent("stillFaceVerificationAnalyseStop");
        }
    }

    public void getFaceVerificationAnalyserSetting(final CallbackContext callbackContext) throws JSONException {
        if (this.analyzer == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("stillFaceVerificationAnalyserSetting",
                    String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            if (setting != null) {
                JSONObject jsonObject = new JSONObject();
                jsonObject.putOpt("maxFaceDetcted", setting.getMaxFaceDetcted());
                HMSLogger.getInstance(getContext()).sendSingleEvent("stillFaceVerificationAnalyserSetting");
                callbackContext.success(jsonObject);
            } else {
                callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.DATA_MISSING));
            }

        }
    }

    private int defaultFaceDetectedNumber(String number) {

        int faceNumber = Integer.parseInt(number);

        if (faceNumber < 1) {
            return 1;
        } else if (faceNumber > 3) {
            return 3;
        } else {
            return faceNumber;
        }
    }

    public void setFaceDetected(final JSONObject params, final CallbackContext callbackContext) throws JSONException {

        String maxFaceVerificationReq = params.getString("MaxFaceDetcted");
        int maxFaceDetectedNumber = defaultFaceDetectedNumber(maxFaceVerificationReq);
        if (this.factory == null) {
            factory = new MLFaceVerificationAnalyzerSetting.Factory().setMaxFaceDetected(maxFaceDetectedNumber);
        } else {
            factory.setMaxFaceDetected(maxFaceDetectedNumber);
        }
        callbackContext.success("FaceVerification set MaxFaceDetected OK ");
        HMSLogger.getInstance(getContext()).sendSingleEvent("setMaxFaceDetected");
    }

    private void processFailure() {
        callbackContext.error(CordovaErrors.SERVICE_FAILURE);
        HMSLogger.getInstance(getContext())
            .sendSingleEvent("mlFaceVerification", String.valueOf(CordovaErrors.SERVICE_FAILURE));
    }
}
