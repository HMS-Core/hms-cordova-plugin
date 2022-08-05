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

package com.huawei.hms.cordova.mlkit.providers.voiceproviders.langdetection;

import android.content.Context;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.logger.HMSMethod;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlkit.utils.PlatformUtils;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.common.MLException;
import com.huawei.hms.mlsdk.faceverify.MLFaceVerificationResult;
import com.huawei.hms.mlsdk.langdetect.MLDetectedLang;
import com.huawei.hms.mlsdk.langdetect.MLLangDetectorFactory;
import com.huawei.hms.mlsdk.langdetect.cloud.MLRemoteLangDetector;
import com.huawei.hms.mlsdk.langdetect.cloud.MLRemoteLangDetectorSetting;
import com.huawei.hms.mlsdk.langdetect.local.MLLocalLangDetector;
import com.huawei.hms.mlsdk.langdetect.local.MLLocalLangDetectorSetting;
import android.util.Log;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class MLLangDetectionAnalyser extends HMSProvider {
    MLRemoteLangDetector remotelangDetector;

    private String TAG = MLLangDetectionAnalyser.class.getSimpleName();

    private MLLocalLangDetector localLangDetector;

    private MLRemoteLangDetectorSetting setting;

    private MLLocalLangDetectorSetting settingLocal;

    private boolean flag = false;

    private CallbackContext callbackContext;

    public MLLangDetectionAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializeRemoteLangDetectionAnalyser(final JSONObject params, final CallbackContext callbackContext)
            throws JSONException {

        if (!params.has("sourceText") || params.isNull("sourceText")) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
            HMSLogger.getInstance(getContext())
                    .sendSingleEvent("remoteLangDetection", String.valueOf(CordovaErrors.ILLEGAL_PARAMETER));
            return;
        }
        String sourceText = params.getString("sourceText");
        int taskMode = params.optInt("taskMode", 1);
        float trustedThreshold;
        switch (taskMode) {
            case 0:
                trustedThreshold = (float) params.optDouble("trustedThreshold", 0.5f);
                setting = new MLRemoteLangDetectorSetting.Factory().setTrustedThreshold(trustedThreshold).create();
                remotelangDetector = MLLangDetectorFactory.getInstance().getRemoteLangDetector(setting);
                Task<String> firstBestDetectTask = remotelangDetector.firstBestDetect(sourceText);
                firstBestDetectTask.addOnSuccessListener(s -> {
                    callbackContext.success(s);
                    HMSLogger.getInstance(getContext()).sendSingleEvent("remoteLangDetection");
                }).addOnFailureListener(e -> {
                    callbackContext.error(e.getMessage());
                    HMSLogger.getInstance(getContext()).sendSingleEvent("remoteLangDetection", e.getMessage());
                });
                break;
            case 1:
                trustedThreshold = (float) params.optDouble("trustedThreshold", 0.01f);
                setting = new MLRemoteLangDetectorSetting.Factory().setTrustedThreshold(trustedThreshold).create();
                remotelangDetector = MLLangDetectorFactory.getInstance().getRemoteLangDetector(setting);
                HMSMethod method = new HMSMethod("remoteLangDetection");
                Task<List<MLDetectedLang>> probabilityDetectTask = remotelangDetector.probabilityDetect(sourceText);
                probabilityDetectTask.addOnSuccessListener(
                        PlatformUtils.successListener(method, getActivity(), callbackContext,
                                TextUtils.FROM_MLLANG_TO_JSON_OBJECT))
                        .addOnFailureListener(PlatformUtils.failureListener(method, getActivity(), callbackContext));
                break;
            case 2:
                trustedThreshold = (float) params.optDouble("trustedThreshold", 0.01f);
                setting = new MLRemoteLangDetectorSetting.Factory().setTrustedThreshold(trustedThreshold).create();
                remotelangDetector = MLLangDetectorFactory.getInstance().getRemoteLangDetector(setting);
                List<MLDetectedLang> mlList = new ArrayList<>();
                List<MLDetectedLang> result = null;
                try {
                    result = remotelangDetector.syncProbabilityDetect(sourceText);
                    for (int i = 0; i < result.size(); i++) {
                        mlList.add(result.get(i));
                    }
                    if (!mlList.isEmpty()) {
                        callbackContext.success(HMSMLUtils.listToJSONArray(mlList, TextUtils::mlLangDetectToJSON));
                        HMSLogger.getInstance(getContext()).sendSingleEvent("mlLangDetection");
                    } else {
                        processFailure();
                    }
                } catch (MLException e) {
                    Log.e(TAG, "remotelangDetector.syncProbabilityDetect: error ->" + e.getMessage());
                }
                break;
            case 3:
                trustedThreshold = (float) params.optDouble("trustedThreshold", 0.01f);
                setting = new MLRemoteLangDetectorSetting.Factory().setTrustedThreshold(trustedThreshold).create();
                remotelangDetector = MLLangDetectorFactory.getInstance().getRemoteLangDetector(setting);
                try {
                    String resultFirstBestDetect = null;
                    resultFirstBestDetect = remotelangDetector.syncFirstBestDetect(sourceText);
                    if (resultFirstBestDetect != null) {
                        callbackContext.success(resultFirstBestDetect);
                    } else {
                        processFailure();
                    }
                } catch (MLException e) {
                    Log.e(TAG, "remotelangDetector.syncFirstBestDetect: error ->" + e.getMessage());
                }
                break;
            default:
                break;
        }
    }

    public void initializeLocalLangDetectionAnalyser(final JSONObject params, final CallbackContext callbackContext,
            final CordovaInterface cordovaInterface) throws JSONException {
        flag = true;
        if (!params.has("sourceText") || params.isNull("sourceText")) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
            HMSLogger.getInstance(getContext())
                    .sendSingleEvent("localLangDetection", String.valueOf(CordovaErrors.ILLEGAL_PARAMETER));
            return;
        }

        String sourceText = params.getString("sourceText");
        MLLangDetectorFactory factory = MLLangDetectorFactory.getInstance();
        if (params.has("trustedThreshold")) {
            float trustedThreshold = (float) params.getDouble("trustedThreshold");
            settingLocal = new MLLocalLangDetectorSetting.Factory().setTrustedThreshold(trustedThreshold).create();
            localLangDetector = factory.getLocalLangDetector(settingLocal);
        } else {
            localLangDetector = factory.getLocalLangDetector();
        }
        int taskMode = params.optInt("taskMode", 1);
        switch (taskMode) {
            case 0:
                localLangDetector.firstBestDetect(sourceText).addOnSuccessListener(s -> {
                    callbackContext.success(s);
                    HMSLogger.getInstance(cordovaInterface.getContext()).sendSingleEvent("localLangDetection");
                }).addOnFailureListener(e -> {
                    callbackContext.error(e.getMessage());
                    HMSLogger.getInstance(cordovaInterface.getContext())
                            .sendSingleEvent("localLangDetection", e.getMessage());
                });
                break;
            case 1:
                HMSMethod method = new HMSMethod("LocalLanngDetection");
                Task<List<MLDetectedLang>> probabilityDetectTask = localLangDetector.probabilityDetect(sourceText);
                probabilityDetectTask.addOnSuccessListener(
                        PlatformUtils.successListener(method, getActivity(), callbackContext,
                                TextUtils.FROM_MLLANG_TO_JSON_OBJECT))
                        .addOnFailureListener(PlatformUtils.failureListener(method, getActivity(), callbackContext));
                break;
            default:
                break;
        }

    }

    public void stopLangDetectionService(final CallbackContext callbackContext,
            final CordovaInterface cordovaInterface) {
        if (remotelangDetector != null) {
            remotelangDetector.stop();
            remotelangDetector = null;
            callbackContext.success("Lang Detection is successfully closed.");
            HMSLogger.getInstance(cordovaInterface.getContext()).sendSingleEvent("langDetectionServiceStop");

        }
        if (localLangDetector != null) {
            localLangDetector.stop();
            localLangDetector = null;
            callbackContext.success("Lang Detection is successfully closed.");
            HMSLogger.getInstance(cordovaInterface.getContext()).sendSingleEvent("langDetectionServiceStop");
        }

    }

    public void getLangDetectionSetting(final CallbackContext callbackContext) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        if (flag) {
            jsonObject.putOpt("trustedThreshold", settingLocal.getTrustedThreshold());
        } else {
            jsonObject.putOpt("trustedThreshold", setting.getTrustedThreshold());
        }
        callbackContext.success(jsonObject);
        HMSLogger.getInstance(getContext()).sendSingleEvent("langSetting");

    }

    public void syncFirstBestDetect(CallbackContext context, JSONObject params) throws JSONException, MLException {
        float trustedThreshold;
        MLLangDetectorFactory factory = MLLangDetectorFactory.getInstance();
        trustedThreshold = (float) params.optDouble("trustedThreshold", 0.01f);
        MLLocalLangDetectorSetting setting = new MLLocalLangDetectorSetting.Factory().setTrustedThreshold(
                trustedThreshold).create();
        localLangDetector = factory.getLocalLangDetector(setting);
        final String input = params.getString("sourceText");
        if (input != null) {
            String result = localLangDetector.syncFirstBestDetect(input);
            context.success(result);
        } else {
            context.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
        }

    }

    public void syncProbabilityDetect(CallbackContext context, JSONObject params) throws JSONException, MLException {
        float trustedThreshold;
        MLLangDetectorFactory factory = MLLangDetectorFactory.getInstance();
        trustedThreshold = (float) params.optDouble("trustedThreshold", 0.01f);
        MLLocalLangDetectorSetting setting = new MLLocalLangDetectorSetting.Factory().setTrustedThreshold(
                trustedThreshold).create();
        localLangDetector = factory.getLocalLangDetector(setting);
        final String input = params.getString("sourceText");
        if (input != null) {
            List<MLDetectedLang> mlList = new ArrayList<>();
            List<MLDetectedLang> result = localLangDetector.syncProbabilityDetect(input);
            for (int i = 0; i < result.size(); i++) {
                mlList.add(result.get(i));
            }
            if (!mlList.isEmpty()) {
                context.success(HMSMLUtils.listToJSONArray(mlList, TextUtils::mlLangDetectToJSON));
                HMSLogger.getInstance(getContext()).sendSingleEvent("mlLangDetection");
            } else {
                processFailure();
            }
            HMSLogger.getInstance(getContext()).sendSingleEvent("mlLangDetection");
        } else {
            context.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
        }

    }

    private void processFailure() {
        callbackContext.error(CordovaErrors.SERVICE_FAILURE);
        HMSLogger.getInstance(getContext())
                .sendSingleEvent("mlLangDetection", String.valueOf(CordovaErrors.SERVICE_FAILURE));
    }

};
