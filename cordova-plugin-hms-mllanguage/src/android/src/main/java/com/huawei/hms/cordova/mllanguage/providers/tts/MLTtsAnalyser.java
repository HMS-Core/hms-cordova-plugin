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

package com.huawei.hms.cordova.mllanguage.providers.tts;

import android.content.Context;
import android.os.Bundle;
import android.util.Log;
import android.util.Pair;

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
import com.huawei.hms.mlsdk.tts.MLTtsAudioFragment;
import com.huawei.hms.mlsdk.tts.MLTtsCallback;
import com.huawei.hms.mlsdk.tts.MLTtsConfig;
import com.huawei.hms.mlsdk.tts.MLTtsConstants;
import com.huawei.hms.mlsdk.tts.MLTtsEngine;
import com.huawei.hms.mlsdk.tts.MLTtsError;
import com.huawei.hms.mlsdk.tts.MLTtsLocalModel;
import com.huawei.hms.mlsdk.tts.MLTtsWarn;

import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class MLTtsAnalyser extends CordovaBaseModule {
    private static final String TAG = MLTtsAnalyser.class.getSimpleName();

    private Promise promise;

    private MLTtsEngine mlTtsEngine;

    private MLTtsConfig mlConfigs;

    private MLTtsLocalModel model;

    private Context context;

    private MLTtsCallback callback = new MLTtsCallback() {
        @Override
        public void onError(String taskId, MLTtsError err) {
            JSONObject onError = new JSONObject();
            try {
                onError.putOpt("eventName", "onError");
                onError.putOpt("taskID", taskId);
                JSONObject error = new JSONObject();
                error.put("errorID", err.getErrorId());
                error.put("errorMessage", err.getErrorMsg());
                error.put("extension", err.getExtension());
                onError.putOpt("error", error);
                promise.error(onError);
            } catch (JSONException e) {
                Log.e(TAG, "onError: " + e.getMessage());
            }
        }

        @Override
        public void onWarn(String taskId, MLTtsWarn warn) {
            JSONObject onWarn = new JSONObject();
            try {
                onWarn.putOpt("eventName", "onWarn");
                onWarn.putOpt("taskID", taskId);
                JSONObject warnJSON = new JSONObject();
                warnJSON.put("warnID", warn.getWarnId());
                warnJSON.put("warnMessage", warn.getWarnMsg());
                warnJSON.put("extension", warn.getExtension());
                onWarn.putOpt("error", warnJSON);
                promise.error(onWarn);
            } catch (JSONException e) {
                Log.e(TAG, "onWarn: " + e.getMessage());
            }
        }

        @Override
        public void onRangeStart(String taskId, int start, int end) {
            JSONObject onRangeStart = new JSONObject();
            try {
                onRangeStart.putOpt("eventName", "onRangeStart");
                onRangeStart.putOpt("taskID", taskId);
                onRangeStart.putOpt("start", start);
                onRangeStart.putOpt("end", end);
                promise.success(onRangeStart);
                Log.i(TAG, "result" + onRangeStart);
            } catch (JSONException e) {
                Log.e(TAG, "onRangeStart: " + e.getMessage());
            }
        }

        @Override
        public void onAudioAvailable(String s, MLTtsAudioFragment mlTtsAudioFragment, int i,
            Pair<Integer, Integer> pair, Bundle bundle) {
            Log.i(TAG, "onAudioAvailable: ");
            JSONObject jsonObject = new JSONObject();
            try {
                jsonObject.putOpt("audioData", mlTtsAudioFragment.getAudioData());
                jsonObject.putOpt("audioFormat", mlTtsAudioFragment.getAudioFormat());
                jsonObject.putOpt("channelInfo", mlTtsAudioFragment.getChannelInfo());
                jsonObject.putOpt("sampleRateInHz", mlTtsAudioFragment.getSampleRateInHz());
                promise.success(jsonObject);
            } catch (JSONException e) {
                Log.e(TAG, "" + e.getMessage());
            }
        }

        @Override
        public void onEvent(String taskId, int eventName, Bundle bundle) {
            JSONObject onEvent = new JSONObject();
            try {
                onEvent.putOpt("eventName", "onEvent");
                onEvent.putOpt("taskID", taskId);
                onEvent.putOpt("eventName", eventName);
                onEvent.putOpt("bundle", bundle);
                promise.success(onEvent);
            } catch (JSONException e) {
                Log.e(TAG, "onEvent: " + e.getMessage());
            }
        }
    };

    public MLTtsAnalyser(CordovaInterface cordova) {
        this.context = cordova.getContext();
    }

    @HMSLog
    @CordovaMethod
    public void ttsAnalyser(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject params = args.getJSONObject(0);
        this.promise = promise;
        if (checkParams(params)) {
            String text = params.getString("text");
            int queuingMode = params.getInt("queuingMode");
            JSONObject mlConfigsJSON = params.optJSONObject("mlConfigs");

            if (mlConfigsJSON != null) {
                mlConfigs = TextUtils.toObject(mlConfigsJSON, MLTtsConfig.class);
            } else {
                mlConfigs = new MLTtsConfig().setLanguage("en-US")
                    .setPerson("Female-en")
                    .setSpeed(1.0f)
                    .setVolume(1.0f);
            }
            try {
                mlTtsEngine = new MLTtsEngine(mlConfigs);
                mlTtsEngine.setTtsCallback(callback);
                mlTtsEngine.speak(text, queuingMode);

            } catch (Exception e) {
                MLException mlException = (MLException) e;
                Log.i(TAG, "TTs:" + mlException.getMessage());
            }

        } else {
            promise.error("Illegal argument");
        }

    }

    private boolean checkParams(JSONObject params) {
        if (!params.has("text") || params.isNull("text") || !params.has("queuingMode") || params.isNull(
            "queuingMode")) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
            return false;
        }
        return true;
    }

    @HMSLog
    @CordovaMethod
    public void ttsAnalyserSetPLayerVolume(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException {
        JSONObject params = args.getJSONObject(0);
        int volume = params.getInt("playerVolume");
        if (mlTtsEngine == null) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
            return;
        }
        mlTtsEngine.setPlayerVolume(volume);
        promise.success();

    }

    @HMSLog
    @CordovaMethod
    public void ttsAnalyserStop(final CorPack corPack, JSONArray args, final Promise promise) {
        if (mlTtsEngine == null) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            mlTtsEngine.stop();
            promise.success();
        }
    }

    @HMSLog
    @CordovaMethod
    public void ttsAnalyserPause(final CorPack corPack, JSONArray args, final Promise promise) {
        if (mlTtsEngine == null) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            mlTtsEngine.pause();
            promise.success();
        }
    }

    @HMSLog
    @CordovaMethod
    public void ttsAnalyserResume(final CorPack corPack, JSONArray args, final Promise promise) {
        if (mlTtsEngine == null) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            mlTtsEngine.resume();
            promise.success();
        }
    }

    @HMSLog
    @CordovaMethod
    public void getTTSSetting(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        if (mlTtsEngine == null) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            JSONObject jsonObject = new JSONObject();
            jsonObject.putOpt("language", mlConfigs.getLanguage());
            jsonObject.putOpt("person", mlConfigs.getPerson());
            jsonObject.putOpt("speed", mlConfigs.getSpeed());
            jsonObject.putOpt("synthesizeMode", mlConfigs.getSynthesizeMode());
            jsonObject.putOpt("volume", mlConfigs.getVolume());
            promise.success(jsonObject);
        }
    }

    @HMSLog
    @CordovaMethod
    public void ttsOfflineAnalyser(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject params = args.getJSONObject(0);
        this.promise = promise;
        MLLocalModelManager manager;
        if (checkParams(params)) {
            String textD = params.getString("text");
            int queuingModeD = params.getInt("queuingMode");
            JSONObject mlConfigsJSON = params.optJSONObject("mlConfigs");
            MLTtsConfig mlTtsConfig;
            String person = MLTtsConstants.TTS_SPEAKER_OFFLINE_EN_US_FEMALE_BEE;
            if (mlConfigsJSON != null) {
                mlTtsConfig = TextUtils.toObject(mlConfigsJSON, MLTtsConfig.class);
                person = mlConfigsJSON.optString("person", "en-US-st-bee-1");
            } else {
                mlTtsConfig = new MLTtsConfig().setLanguage("en-US")
                    .setPerson("en-US-st-bee-1")
                    .setSpeed(1.0f)
                    .setVolume(1.0f);
            }
            mlTtsEngine = new MLTtsEngine(mlTtsConfig);
            mlTtsEngine.setTtsCallback(callback);
            manager = MLLocalModelManager.getInstance();
            model = new MLTtsLocalModel.Factory(person).create();
            MLModelDownloadStrategy request = new MLModelDownloadStrategy.Factory().create();
            MLModelDownloadListener modelDownloadListener = (alreadyDownLength, totalLength) -> Log.i(TAG, " success");

            manager.downloadModel(model, request, modelDownloadListener).addOnSuccessListener(aVoid -> {
                mlTtsEngine.updateConfig(mlTtsConfig);
                Log.i(TAG, "downloadModel: " + model.getModelName() + " success");
                mlTtsEngine.speak(textD, queuingModeD);
            }).addOnFailureListener(e -> {
                Log.e(TAG, "downloadModel failed: " + e.getMessage());
                promise.error("Error:" + e.getMessage());
            });
        }

    }

    @HMSLog
    @CordovaMethod
    public void ttsAnalyserDownloadSetting(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("speakerName", model.getSpeakerName());
        jsonObject.putOpt("modelName", model.getModelName());
        promise.success(jsonObject);
    }

    @HMSLog
    @CordovaMethod
    public void ttsAnalyserEngineSetting(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException {
        JSONObject jsonObject = new JSONObject();
        JSONObject params = args.getJSONObject(0);
        String language = params.optString("language", "en");
        jsonObject.putOpt("languages", mlTtsEngine.getLanguages());
        jsonObject.putOpt("speakers", mlTtsEngine.getSpeakers());
        jsonObject.putOpt("speaker", mlTtsEngine.getSpeaker(language));
        jsonObject.putOpt("isLanguageAvailable", mlTtsEngine.isLanguageAvailable(language));
        promise.success(jsonObject);
    }

    @HMSLog
    @CordovaMethod
    public void ttsAnalyserShutDown(final CorPack corPack, JSONArray args, final Promise promise) {
        if (mlTtsEngine == null) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            mlTtsEngine.shutdown();
            mlTtsEngine = null;
            mlConfigs = null;
            promise.success();
        }
    }
}
