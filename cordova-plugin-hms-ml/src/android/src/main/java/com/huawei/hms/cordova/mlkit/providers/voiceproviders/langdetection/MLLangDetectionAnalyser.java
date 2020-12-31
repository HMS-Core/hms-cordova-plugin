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

package com.huawei.hms.cordova.mlkit.providers.voiceproviders.langdetection;

import android.content.Context;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.logger.HMSMethod;
import com.huawei.hms.cordova.mlkit.utils.PlatformUtils;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.langdetect.MLDetectedLang;
import com.huawei.hms.mlsdk.langdetect.MLLangDetectorFactory;
import com.huawei.hms.mlsdk.langdetect.cloud.MLRemoteLangDetector;
import com.huawei.hms.mlsdk.langdetect.cloud.MLRemoteLangDetectorSetting;
import com.huawei.hms.mlsdk.langdetect.local.MLLocalLangDetector;
import com.huawei.hms.mlsdk.langdetect.local.MLLocalLangDetectorSetting;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

public class MLLangDetectionAnalyser extends HMSProvider {
    MLRemoteLangDetector remotelangDetector;
    private String TAG = MLLangDetectionAnalyser.class.getSimpleName();
    private MLLocalLangDetector localLangDetector;
    private MLRemoteLangDetectorSetting setting;
    private MLLocalLangDetectorSetting settingLocal;
    private boolean flag = false;

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

        localLangDetector.firstBestDetect(sourceText).addOnSuccessListener(s -> {
            callbackContext.success(s);
            HMSLogger.getInstance(cordovaInterface.getContext()).sendSingleEvent("localLangDetection");
        }).addOnFailureListener(e -> {
            callbackContext.error(e.getMessage());
            HMSLogger.getInstance(cordovaInterface.getContext()).sendSingleEvent("localLangDetection", e.getMessage());
        });
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
}
