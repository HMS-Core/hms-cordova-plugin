/*
 * Copyright 2023. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.huawei.hms.cordova.mllanguage.providers.langdetection;

import android.app.Activity;
import android.content.Context;
import android.util.Log;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mllanguage.basef.CordovaBaseModule;
import com.huawei.hms.cordova.mllanguage.basef.CordovaMethod;
import com.huawei.hms.cordova.mllanguage.basef.HMSLog;
import com.huawei.hms.cordova.mllanguage.basef.handler.CorPack;
import com.huawei.hms.cordova.mllanguage.basef.handler.Promise;
import com.huawei.hms.cordova.mllanguage.helpers.CordovaErrors;
import com.huawei.hms.cordova.mllanguage.utils.HMSMLUtils;
import com.huawei.hms.cordova.mllanguage.utils.PlatformUtils;
import com.huawei.hms.cordova.mllanguage.utils.TextUtils;
import com.huawei.hms.mlsdk.common.MLException;
import com.huawei.hms.mlsdk.langdetect.MLDetectedLang;
import com.huawei.hms.mlsdk.langdetect.MLLangDetectorFactory;
import com.huawei.hms.mlsdk.langdetect.cloud.MLRemoteLangDetector;
import com.huawei.hms.mlsdk.langdetect.cloud.MLRemoteLangDetectorSetting;
import com.huawei.hms.mlsdk.langdetect.local.MLLocalLangDetector;
import com.huawei.hms.mlsdk.langdetect.local.MLLocalLangDetectorSetting;

import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class MLLangDetectionAnalyser extends CordovaBaseModule {
    MLRemoteLangDetector remoteLangDetector;

    private String TAG = MLLangDetectionAnalyser.class.getSimpleName();

    private MLLocalLangDetector localLangDetector;

    private MLRemoteLangDetectorSetting setting;

    private MLLocalLangDetectorSetting settingLocal;

    private boolean flag = false;

    private Context context;

    private Activity activity;

    private Promise promise;

    public MLLangDetectionAnalyser(CordovaInterface cordova) {
        this.context = cordova.getContext();
        this.activity = cordova.getActivity();
    }

    @HMSLog
    @CordovaMethod
    public void remoteLangDetection(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject params = args.getJSONObject(0);
        if (!params.has("sourceText") || params.isNull("sourceText")) {
            Log.e("remoteLangDetection", String.valueOf(CordovaErrors.ILLEGAL_PARAMETER));
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
            return;
        }
        String sourceText = params.getString("sourceText");
        int taskMode = params.optInt("taskMode", 1);
        float trustedThreshold;
        switch (taskMode) {
            case 0:
                trustedThreshold = (float) params.optDouble("trustedThreshold", 0.5f);
                setting = new MLRemoteLangDetectorSetting.Factory().setTrustedThreshold(trustedThreshold).create();
                remoteLangDetector = MLLangDetectorFactory.getInstance().getRemoteLangDetector(setting);
                Task<String> firstBestDetectTask = remoteLangDetector.firstBestDetect(sourceText);
                firstBestDetectTask.addOnSuccessListener(s -> {
                    promise.success(s);
                }).addOnFailureListener(e -> {
                    promise.error(e.getMessage());
                });
                break;
            case 1:
                trustedThreshold = (float) params.optDouble("trustedThreshold", 0.01f);
                setting = new MLRemoteLangDetectorSetting.Factory().setTrustedThreshold(trustedThreshold).create();
                remoteLangDetector = MLLangDetectorFactory.getInstance().getRemoteLangDetector(setting);
                Task<List<MLDetectedLang>> probabilityDetectTask = remoteLangDetector.probabilityDetect(sourceText);
                probabilityDetectTask.addOnSuccessListener(
                        PlatformUtils.successListener(promise, TextUtils.FROM_MLLANG_TO_JSON_OBJECT))
                    .addOnFailureListener(PlatformUtils.failureListener(promise));
                break;
            case 2:
                trustedThreshold = (float) params.optDouble("trustedThreshold", 0.01f);
                setting = new MLRemoteLangDetectorSetting.Factory().setTrustedThreshold(trustedThreshold).create();
                remoteLangDetector = MLLangDetectorFactory.getInstance().getRemoteLangDetector(setting);
                List<MLDetectedLang> mlList = new ArrayList<>();
                List<MLDetectedLang> result = null;
                try {
                    result = remoteLangDetector.syncProbabilityDetect(sourceText);
                    for (int i = 0; i < result.size(); i++) {
                        mlList.add(result.get(i));
                    }
                    if (!mlList.isEmpty()) {
                        promise.success(HMSMLUtils.listToJSONArray(mlList, TextUtils::mlLangDetectToJSON));
                    } else {
                        processFailure();
                    }
                } catch (MLException e) {
                    Log.e(TAG, "remoteLangDetector.syncProbabilityDetect: error ->" + e.getMessage());
                }
                break;
            case 3:
                trustedThreshold = (float) params.optDouble("trustedThreshold", 0.01f);
                setting = new MLRemoteLangDetectorSetting.Factory().setTrustedThreshold(trustedThreshold).create();
                remoteLangDetector = MLLangDetectorFactory.getInstance().getRemoteLangDetector(setting);
                try {
                    String resultFirstBestDetect = null;
                    resultFirstBestDetect = remoteLangDetector.syncFirstBestDetect(sourceText);
                    if (resultFirstBestDetect != null) {
                        promise.success(resultFirstBestDetect);
                    } else {
                        processFailure();
                    }
                } catch (MLException e) {
                    Log.e(TAG, "remoteLangDetector.syncFirstBestDetect: error ->" + e.getMessage());
                }
                break;
            default:
                break;
        }
    }

    @HMSLog
    @CordovaMethod
    public void localLangDetection(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        flag = true;
        JSONObject params = args.getJSONObject(0);
        if (!params.has("sourceText") || params.isNull("sourceText")) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
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
                    promise.success(s);
                }).addOnFailureListener(e -> {
                    promise.error(e.getMessage());
                });
                break;
            case 1:
                Task<List<MLDetectedLang>> probabilityDetectTask = localLangDetector.probabilityDetect(sourceText);
                probabilityDetectTask.addOnSuccessListener(
                        PlatformUtils.successListener(promise, TextUtils.FROM_MLLANG_TO_JSON_OBJECT))
                    .addOnFailureListener(PlatformUtils.failureListener(promise));
                break;
            default:
                break;
        }
    }

    @HMSLog
    @CordovaMethod
    public void stopLangDetectionService(final CorPack corPack, JSONArray args, final Promise promise) {
        if (remoteLangDetector != null) {
            remoteLangDetector.stop();
            remoteLangDetector = null;
            promise.success("Lang Detection is successfully closed.");
        }
        if (localLangDetector != null) {
            localLangDetector.stop();
            localLangDetector = null;
            promise.success("Lang Detection is successfully closed.");
        }
    }

    @HMSLog
    @CordovaMethod
    public void getLangDetectionSetting(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException {
        JSONObject jsonObject = new JSONObject();
        if (flag) {
            jsonObject.putOpt("trustedThreshold", settingLocal.getTrustedThreshold());
        } else {
            jsonObject.putOpt("trustedThreshold", setting.getTrustedThreshold());
        }
        promise.success(jsonObject);
    }

    @HMSLog
    @CordovaMethod
    public void syncFirstBestDetect(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException, MLException {
        float trustedThreshold;
        JSONObject params = args.getJSONObject(0);
        MLLangDetectorFactory factory = MLLangDetectorFactory.getInstance();
        trustedThreshold = (float) params.optDouble("trustedThreshold", 0.01f);
        MLLocalLangDetectorSetting setting = new MLLocalLangDetectorSetting.Factory().setTrustedThreshold(
            trustedThreshold).create();
        localLangDetector = factory.getLocalLangDetector(setting);
        final String input = params.getString("sourceText");
        if (input != null) {
            String result = localLangDetector.syncFirstBestDetect(input);
            promise.success(result);
        } else {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
        }
    }

    @HMSLog
    @CordovaMethod
    public void syncProbabilityDetect(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException, MLException {
        float trustedThreshold;
        JSONObject params = args.getJSONObject(0);
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
                promise.success(HMSMLUtils.listToJSONArray(mlList, TextUtils::mlLangDetectToJSON));
            } else {
                processFailure();
            }
        } else {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
        }

    }

    private void processFailure() {
        promise.error(CordovaErrors.SERVICE_FAILURE);
    }
}
