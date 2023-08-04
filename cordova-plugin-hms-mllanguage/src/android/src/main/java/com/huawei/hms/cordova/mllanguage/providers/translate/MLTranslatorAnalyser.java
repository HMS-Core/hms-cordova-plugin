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

package com.huawei.hms.cordova.mllanguage.providers.translate;

import android.content.Context;
import android.util.Log;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mllanguage.basef.CordovaBaseModule;
import com.huawei.hms.cordova.mllanguage.basef.CordovaMethod;
import com.huawei.hms.cordova.mllanguage.basef.HMSLog;
import com.huawei.hms.cordova.mllanguage.basef.handler.CorPack;
import com.huawei.hms.cordova.mllanguage.basef.handler.Promise;
import com.huawei.hms.cordova.mllanguage.helpers.CordovaErrors;
import com.huawei.hms.cordova.mllanguage.utils.TextUtils;
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

import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Locale;
import java.util.Set;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class MLTranslatorAnalyser extends CordovaBaseModule {
    private final static long M = 1024 * 1024;

    private String TAG = MLTranslatorAnalyser.class.getSimpleName();

    private MLRemoteTranslator remoteTranslator;

    private MLLocalTranslator localTranslator;

    private MLModelDownloadListener modelDownloadListener;

    private MLModelDownloadStrategy downloadStrategy;

    private MLLocalModelManager manager;

    private ExecutorService mExecutorService;

    private String targetLangCode;

    private String sourceLangCode;

    private Context context;

    public MLTranslatorAnalyser(CordovaInterface cordova) {
        this.context = cordova.getContext();
        mExecutorService = Executors.newSingleThreadExecutor();
        initLocalModelManagement();
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

    @HMSLog
    @CordovaMethod
    public void localTranslator(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject params = args.getJSONObject(0);
        boolean useSync = params.optBoolean("useSync", false);
        boolean checkParams = checkTranslateParams(params, promise);
        if (checkParams) {
            MLLocalTranslateSetting setting = new MLLocalTranslateSetting.Factory().setSourceLangCode(sourceLangCode)
                .setTargetLangCode(targetLangCode)
                .create();
            this.localTranslator = MLTranslatorFactory.getInstance().getLocalTranslator(setting);
            if (useSync) {
                syncLocalTranslator(params, promise);
            } else {
                asyncLocalTranslator(params, promise);
            }
        }
    }

    private void syncLocalTranslator(JSONObject params, Promise promise) throws JSONException {
        String sourceText = params.getString("sourceText");
        localTranslator.preparedModel(downloadStrategy, modelDownloadListener).addOnSuccessListener(aVoid -> {
            mExecutorService.execute(() -> {
                try {
                    String out = localTranslator.syncTranslate(sourceText);
                    promise.success(out);
                } catch (MLException e) {
                    promise.error(e.getMessage());
                }
            });
        }).addOnFailureListener(e -> {
            Log.e(TAG, "syncLocalTranslator: ->" + e.getMessage());
            promise.error(e.getMessage());
        });
    }

    public void asyncLocalTranslator(JSONObject params, Promise promise) throws JSONException {
        String sourceText = params.getString("sourceText");
        localTranslator.preparedModel(downloadStrategy, modelDownloadListener).addOnSuccessListener(aVoid -> {
            final Task<String> task = localTranslator.asyncTranslate(sourceText);
            task.addOnSuccessListener(s -> {
                promise.success(s);
            }).addOnFailureListener(e -> {
                promise.error(e.getMessage());
            });
        }).addOnFailureListener(e -> {
            promise.error(e.getMessage());
        });
    }

    @HMSLog
    @CordovaMethod
    public void remoteTranslator(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject params = args.getJSONObject(0);
        boolean useSync = params.optBoolean("useSync", false);
        boolean checkParams = checkTranslateParams(params, promise);
        if (checkParams) {
            MLRemoteTranslateSetting setting = new MLRemoteTranslateSetting.Factory().setSourceLangCode(sourceLangCode)
                .setTargetLangCode(targetLangCode)
                .create();
            this.remoteTranslator = MLTranslatorFactory.getInstance().getRemoteTranslator(setting);
            if (useSync) {
                syncRemoteTranslator(params, promise);
            } else {
                asyncRemoteTranslator(params, promise);
            }
        }
    }

    private void syncRemoteTranslator(JSONObject params, Promise promise) {
        mExecutorService.execute(() -> {
            try {
                String sourceText = params.getString("sourceText");
                String out = remoteTranslator.syncTranslate(sourceText);
                promise.success(out);
            } catch (MLException | JSONException e) {
                promise.error(e.getMessage());
            }
        });
    }

    public void asyncRemoteTranslator(JSONObject params, Promise promise) throws JSONException {
        String sourceText = params.getString("sourceText");
        Task<String> task = remoteTranslator.asyncTranslate(sourceText);
        task.addOnSuccessListener(s -> {
            promise.success(s);
        }).addOnFailureListener(e -> {
            promise.error(e.getMessage());
        });
    }

    @HMSLog
    @CordovaMethod
    public void translatorLocalAllLang(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException {
        JSONObject params = args.getJSONObject(0);
        boolean useSync = params.optBoolean("useSync", false);
        if (useSync) {
            syncGetLocalAllLanguages(promise);
        } else {
            asyncGetLocalAllLanguages(promise);
        }
    }

    private void syncGetLocalAllLanguages(Promise promise) throws JSONException {
        Set<String> strings = MLTranslateLanguage.syncGetLocalAllLanguages();
        JSONObject sLocalLangs = new JSONObject();
        sLocalLangs.putOpt("localLanguages", strings);
        promise.success(sLocalLangs);
    }

    private void asyncGetLocalAllLanguages(Promise promise) {
        MLTranslateLanguage.getLocalAllLanguages().addOnSuccessListener(strings -> {
            JSONObject sLocalLangs = new JSONObject();
            try {
                sLocalLangs.putOpt("localLanguages", strings);
                promise.success(sLocalLangs);
            } catch (JSONException e) {
                promise.error("Error:" + e.getMessage());
            }
        });
    }

    @HMSLog
    @CordovaMethod
    public void translatorRemoteAllLang(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException {
        JSONObject params = args.getJSONObject(0);
        boolean useSync = params.optBoolean("useSync", false);
        if (useSync) {
            syncGetCloudAllLanguages(promise);
        } else {
            asyncGetCloudAllLanguages(promise);
        }
    }

    private void syncGetCloudAllLanguages(Promise promise) {
        Set<String> strings;
        try {
            JSONObject sCloudLangs = new JSONObject();
            strings = MLTranslateLanguage.syncGetCloudAllLanguages();
            sCloudLangs.putOpt("cloudLanguages", strings);
            promise.success(sCloudLangs);
        } catch (MLException | JSONException e) {
            Log.e(TAG, "syncGetCloudAllLanguages: ->" + e.getMessage());
            promise.error(e.getMessage());
        }
    }

    private void asyncGetCloudAllLanguages(Promise promise) {
        MLTranslateLanguage.getCloudAllLanguages().addOnSuccessListener(strings -> {
            JSONObject sCloudLangs = new JSONObject();
            try {
                sCloudLangs.putOpt("cloudLanguages", strings);
                promise.success(sCloudLangs);
            } catch (JSONException e) {
                promise.error("Error:" + e.getMessage());
            }

        });
    }

    @HMSLog
    @CordovaMethod
    public void translatorDownloadModel(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException {
        JSONObject params = args.getJSONObject(0);
        String langCode = params.optString("langCode", "zh");
        MLLocalModelManager mlLocalModelManager = MLLocalModelManager.getInstance();
        MLLocalTranslatorModel localTranslatorModel = new MLLocalTranslatorModel.Factory(langCode).create();
        MLModelDownloadStrategy mlModelDownloadStrategy = new MLModelDownloadStrategy.Factory().needWifi().create();
        mlLocalModelManager.downloadModel(localTranslatorModel, mlModelDownloadStrategy, modelDownloadListener)
            .addOnSuccessListener(aVoid -> {
                promise.success("download success.");
            })
            .addOnFailureListener(e -> {
                promise.error("Error:" + e.getMessage());
            });
    }

    @HMSLog
    @CordovaMethod
    public void translatorDeleteModel(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException {
        JSONObject params = args.getJSONObject(0);
        String langCode = params.getString("langcode");
        MLLocalTranslatorModel model = new MLLocalTranslatorModel.Factory(langCode).create();
        manager.deleteModel(model).addOnSuccessListener(aVoid -> {
            promise.success("Lang Deleted");
        }).addOnFailureListener(e -> {
            promise.error("Error");
        });
    }

    @HMSLog
    @CordovaMethod
    public void getDownloadStrategy(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        if (downloadStrategy != null) {
            promise.success(TextUtils.downloadStrategy(downloadStrategy));
        } else {
            promise.error(CordovaErrors.DATA_MISSING);
        }
    }

    @HMSLog
    @CordovaMethod
    public void stopTranslatorService(final CorPack corPack, JSONArray args, final Promise promise) {
        if (remoteTranslator != null) {
            remoteTranslator.stop();
            remoteTranslator = null;
            promise.success("Translator is successfully closed.");
        }
        if (localTranslator != null) {
            localTranslator.stop();
            localTranslator = null;
            promise.success("Translator is successfully closed.");
        }
    }

    private boolean checkTranslateParams(JSONObject params, Promise promise) {
        if (!params.has("targetLangCode") || params.isNull("targetLangCode")) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
            return false;
        }
        if (!params.has("sourceText") || params.isNull("sourceText")) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
            return false;
        }
        targetLangCode = params.optString("targetLangCode");
        sourceLangCode = params.optString("sourceLangCode");

        return true;
    }
}
