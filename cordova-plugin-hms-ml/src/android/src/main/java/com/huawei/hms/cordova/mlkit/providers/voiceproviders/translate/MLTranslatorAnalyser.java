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

package com.huawei.hms.cordova.mlkit.providers.voiceproviders.translate;

import android.content.Context;
import android.util.Log;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.common.MLException;
import com.huawei.hms.mlsdk.model.download.MLLocalModelManager;
import com.huawei.hms.mlsdk.model.download.MLModelDownloadListener;
import com.huawei.hms.mlsdk.model.download.MLModelDownloadStrategy;
import com.huawei.hms.mlsdk.translate.MLTranslateLanguage;
import com.huawei.hms.mlsdk.translate.MLTranslatorFactory;
import com.huawei.hms.mlsdk.translate.cloud.MLRemoteTranslateSetting;
import com.huawei.hms.mlsdk.translate.cloud.MLRemoteTranslator;
import com.huawei.hms.mlsdk.translate.local.MLLocalTranslateSetting;
import com.huawei.hms.mlsdk.translate.local.MLLocalTranslator;
import com.huawei.hms.mlsdk.translate.local.MLLocalTranslatorModel;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Locale;
import java.util.Set;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class MLTranslatorAnalyser extends HMSProvider {
    private final static long M = 1024 * 1024;
    private JSONObject params;
    private CallbackContext callbackContext;
    private String TAG = MLTranslatorAnalyser.class.getSimpleName();
    private MLRemoteTranslator remoteTranslator;
    private MLLocalTranslator localTranslator;
    private MLModelDownloadListener modelDownloadListener;
    private MLModelDownloadStrategy downloadStrategy;
    private MLLocalModelManager manager;
    private ExecutorService mExecutorService;
    private String targetLangCode;
    private String sourceLangCode;

    public MLTranslatorAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializeTranslatorAnalyser(final String action, final CallbackContext callbackContext,
        JSONObject params) throws JSONException {
        boolean checkParams;
        this.callbackContext = callbackContext;
        this.params = params;
        boolean useSync = params.optBoolean("USE_SYNC", false);
        mExecutorService = Executors.newSingleThreadExecutor();
        initLocalModelManagement();
        if ("ACTION_LOCAL_GETLANG".equals(action)) {
            if (useSync) {
                syncGetLocalAllLanguages();
            } else {
                getLocalAllLanguages();
            }
        }
        if ("ACTION_REMOTE_GETLANG".equals(action)) {
            if (useSync) {
                syncGetCloudAllLanguages();
            } else {
                getCloudAllLanguages();
            }
        }
        if ("ACTION_REMOTE_TRANSLATOR".equals(action)) {
            checkParams = checkTranslateParams(params);
            if (checkParams) {
                MLRemoteTranslateSetting setting = new MLRemoteTranslateSetting.Factory().setSourceLangCode(
                    sourceLangCode).setTargetLangCode(targetLangCode).create();
                this.remoteTranslator = MLTranslatorFactory.getInstance().getRemoteTranslator(setting);
                if (useSync) {
                    syncRemoteTranslator();
                } else {
                    remoteTranslator();
                }
            }
        }
        if ("ACTION_LOCAL_TRANSLATOR".equals(action)) {
            checkParams = checkTranslateParams(params);
            if (checkParams) {
                MLLocalTranslateSetting setting = new MLLocalTranslateSetting.Factory().setSourceLangCode(
                    sourceLangCode).setTargetLangCode(targetLangCode).create();
                this.localTranslator = MLTranslatorFactory.getInstance().getLocalTranslator(setting);
                if (useSync) {
                    syncLocalTranslator();
                } else {
                    localTranslator();
                }
            }
        }
        if ("ACTION_DELETE_MODEL".equals(action)) {
            deleteModel(params);
        }
        if ("ACTION_DOWNLOAD_MODEL".equals(action)) {
            downloadModel();
        }
        if ("ACTION_GET_DSTRATEGY".equals(action)) {
            getDownloadStrategy();
        }

    }

    private void getDownloadStrategy() throws JSONException {
        if (downloadStrategy != null) {
            callbackContext.success(TextUtils.downloadStrategy(downloadStrategy));
            HMSLogger.getInstance(getContext()).sendSingleEvent("translatorAnalyser");
        } else {
            callbackContext.error(CordovaErrors.DATA_MISSING);
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("translatorAnalyser", String.valueOf(CordovaErrors.DATA_MISSING));
        }
    }

    private boolean checkTranslateParams(JSONObject params) {
        if (!params.has("targetLangCode") || params.isNull("targetLangCode")) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("translatorAnalyser", String.valueOf(CordovaErrors.ILLEGAL_PARAMETER));
            return false;
        }
        if (!params.has("sourceText") || params.isNull("sourceText")) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("translatorAnalyser", String.valueOf(CordovaErrors.ILLEGAL_PARAMETER));
            return false;
        }
        targetLangCode = params.optString("targetLangCode");
        sourceLangCode = params.optString("sourceLangCode");

        return true;
    }

    private void initLocalModelManagement() {
        manager = MLLocalModelManager.getInstance();
        modelDownloadListener = (alreadyDownLength, totalLength) -> {
            double downDone = alreadyDownLength * 1.0 / M;
            double downTotal = totalLength * 1.0 / M;
            String downD = String.format(Locale.ENGLISH, "%.2f", downDone);
            String downT = String.format(Locale.ENGLISH, "%.2f", downTotal);
            final String text = downD + "M" + "/" + downT + "M";
        };
        downloadStrategy = new MLModelDownloadStrategy.Factory().needWifi().create();
    }

    public void stopTranslatorService(CallbackContext callbackContext, CordovaInterface cordovaInterface) {
        if (remoteTranslator != null) {
            remoteTranslator.stop();
            remoteTranslator = null;
            callbackContext.success("Translator is successfully closed.");
            HMSLogger.getInstance(cordovaInterface.getContext()).sendSingleEvent("translatorAnalyserStop");
        }
        if (localTranslator != null) {
            localTranslator.stop();
            localTranslator = null;
            callbackContext.success("Translator is successfully closed.");
            HMSLogger.getInstance(cordovaInterface.getContext()).sendSingleEvent("translatorAnalyserStop");
        }
    }

    private void deleteModel(final JSONObject params) throws JSONException {
        String langCode = params.getString("langcode");
        MLLocalTranslatorModel model = new MLLocalTranslatorModel.Factory(langCode).create();
        manager.deleteModel(model).addOnSuccessListener(aVoid -> {
            callbackContext.success("Lang Deleted");
            HMSLogger.getInstance(getContext()).sendSingleEvent("translatorAnalyser");
        }).addOnFailureListener(e -> {
            callbackContext.error("Error");
            HMSLogger.getInstance(getContext()).sendSingleEvent("translatorAnalyser", e.getMessage());
        });
    }

    private void downloadModel() {
        String langCode = params.optString("langCode", "zh");
        MLLocalModelManager mlLocalModelManager = MLLocalModelManager.getInstance();
        MLLocalTranslatorModel localTranslatorModel = new MLLocalTranslatorModel.Factory(langCode).create();
        MLModelDownloadStrategy mlModelDownloadStrategy = new MLModelDownloadStrategy.Factory().needWifi().create();
        mlLocalModelManager.downloadModel(localTranslatorModel, mlModelDownloadStrategy, modelDownloadListener)
            .addOnSuccessListener(aVoid -> {
                callbackContext.success("download success.");
                HMSLogger.getInstance(getContext()).sendSingleEvent("translatorAnalyser");
            })
            .addOnFailureListener(e -> {
                callbackContext.error("Error:" + e.getMessage());
                HMSLogger.getInstance(getContext()).sendSingleEvent("translatorAnalyser", e.getMessage());
            });
    }

    public void remoteTranslator() throws JSONException {
        String sourceText = params.getString("sourceText");
        Task<String> task = remoteTranslator.asyncTranslate(sourceText);
        task.addOnSuccessListener(s -> {
            callbackContext.success(s);
            HMSLogger.getInstance(getContext()).sendSingleEvent("translatorAnalyser");
        }).addOnFailureListener(e -> {
            callbackContext.error(e.getMessage());
            HMSLogger.getInstance(getContext()).sendSingleEvent("translatorAnalyser", e.getMessage());
        });
    }

    private void syncRemoteTranslator() {
        mExecutorService.execute(() -> {
            try {
                String sourceText = params.getString("sourceText");
                String out = remoteTranslator.syncTranslate(sourceText);
                callbackContext.success(out);
                HMSLogger.getInstance(getContext()).sendSingleEvent("translatorAnalyser");
            } catch (MLException | JSONException e) {
                callbackContext.error(e.getMessage());
                HMSLogger.getInstance(getContext()).sendSingleEvent("translatorAnalyser", e.getMessage());
            }
        });
    }

    public void localTranslator() throws JSONException {
        String sourceText = params.getString("sourceText");
        localTranslator.preparedModel(downloadStrategy, modelDownloadListener).addOnSuccessListener(aVoid -> {
            final Task<String> task = localTranslator.asyncTranslate(sourceText);
            task.addOnSuccessListener(s -> {
                callbackContext.success(s);
                HMSLogger.getInstance(getContext()).sendSingleEvent("translatorAnalyser");
            }).addOnFailureListener(e -> {
                callbackContext.error(e.getMessage());
                HMSLogger.getInstance(getContext()).sendSingleEvent("translatorAnalyser", e.getMessage());
            });
        }).addOnFailureListener(e -> {
            callbackContext.error(e.getMessage());
            HMSLogger.getInstance(getContext()).sendSingleEvent("translatorAnalyser", e.getMessage());
        });
    }

    private void syncLocalTranslator() throws JSONException {
        String sourceText = params.getString("sourceText");
        localTranslator.preparedModel(downloadStrategy, modelDownloadListener).addOnSuccessListener(aVoid -> {
            mExecutorService.execute(() -> {
                try {
                    String out = localTranslator.syncTranslate(sourceText);
                    callbackContext.success(out);
                    HMSLogger.getInstance(getContext()).sendSingleEvent("translatorAnalyser");
                } catch (MLException e) {
                    callbackContext.error(e.getMessage());
                    HMSLogger.getInstance(getContext()).sendSingleEvent("translatorAnalyser", e.getMessage());
                }
            });
        }).addOnFailureListener(e -> {
            Log.e(TAG, "syncLocalTranslator: ->" + e.getMessage());
            callbackContext.error(e.getMessage());
            HMSLogger.getInstance(getContext()).sendSingleEvent("translatorAnalyser", e.getMessage());
        });
    }

    private void syncGetCloudAllLanguages() {
        Set<String> strings;
        try {
            JSONObject sCloudLangs = new JSONObject();
            strings = MLTranslateLanguage.syncGetCloudAllLanguages();
            sCloudLangs.putOpt("cloudLanguages", strings);
            callbackContext.success(sCloudLangs);
            HMSLogger.getInstance(getContext()).sendSingleEvent("translatorAnalyser");
        } catch (MLException | JSONException e) {
            Log.e(TAG, "syncGetCloudAllLanguages: ->" + e.getMessage());
            callbackContext.error(e.getMessage());
            HMSLogger.getInstance(getContext()).sendSingleEvent("translatorAnalyser", e.getMessage());

        }
    }

    private void syncGetLocalAllLanguages() throws JSONException {
        Set<String> strings = MLTranslateLanguage.syncGetLocalAllLanguages();
        JSONObject sLocalLangs = new JSONObject();
        sLocalLangs.putOpt("localLanguages", strings);
        callbackContext.success(sLocalLangs);
        HMSLogger.getInstance(getContext()).sendSingleEvent("translatorAnalyser");
    }

    private void getCloudAllLanguages() {
        MLTranslateLanguage.getCloudAllLanguages().addOnSuccessListener(strings -> {
            JSONObject sCloudLangs = new JSONObject();
            try {
                sCloudLangs.putOpt("cloudLanguages", strings);
                callbackContext.success(sCloudLangs);
                HMSLogger.getInstance(getContext()).sendSingleEvent("translatorAnalyser");
            } catch (JSONException e) {
                callbackContext.error("Error:" + e.getMessage());
                HMSLogger.getInstance(getContext()).sendSingleEvent("translatorAnalyser", e.getMessage());
            }

        });
    }

    private void getLocalAllLanguages() {
        MLTranslateLanguage.getLocalAllLanguages().addOnSuccessListener(strings -> {
            JSONObject sLocalLangs = new JSONObject();
            try {
                sLocalLangs.putOpt("localLanguages", strings);
                callbackContext.success(sLocalLangs);
                HMSLogger.getInstance(getContext()).sendSingleEvent("translatorAnalyser");
            } catch (JSONException e) {
                callbackContext.error("Error:" + e.getMessage());
                HMSLogger.getInstance(getContext()).sendSingleEvent("translatorAnalyser", e.getMessage());
            }

        });
    }
}
