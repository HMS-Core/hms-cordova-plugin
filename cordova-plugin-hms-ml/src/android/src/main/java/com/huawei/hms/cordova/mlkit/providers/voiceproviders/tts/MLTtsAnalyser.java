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

package com.huawei.hms.cordova.mlkit.providers.voiceproviders.tts;

import android.content.Context;
import android.os.Bundle;
import android.util.Log;
import android.util.Pair;

import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
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

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.json.JSONException;
import org.json.JSONObject;

public class MLTtsAnalyser extends HMSProvider {
    private static final String TAG = MLTtsAnalyser.class.getSimpleName();
    private CallbackContext callbackContext;
    private MLTtsEngine mlTtsEngine;
    private MLTtsConfig mlConfigs;
    private MLTtsLocalModel model;

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
                callbackContext.error(onError);
                HMSLogger.getInstance(getContext()).sendSingleEvent("ttsAnalyser", "-1");
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
                callbackContext.error(onWarn);
                HMSLogger.getInstance(getContext()).sendSingleEvent("ttsAnalyser", "-1");
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
                callbackContext.success(onRangeStart);
                Log.i(TAG, "result" + onRangeStart);
                HMSLogger.getInstance(getContext()).sendSingleEvent("ttsAnalyser");
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
                callbackContext.success(jsonObject);
                HMSLogger.getInstance(getContext()).sendSingleEvent("ttsAnalyser");
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
                callbackContext.success(onEvent);
                HMSLogger.getInstance(getContext()).sendSingleEvent("ttsAnalyser");
            } catch (JSONException e) {
                Log.e(TAG, "onEvent: " + e.getMessage());
            }
        }
    };

    public MLTtsAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializeTTSAnalyser(final CallbackContext callbackContext, final JSONObject params)
        throws JSONException {

        this.callbackContext = callbackContext;
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
            callbackContext.error("Illegal argument");
            HMSLogger.getInstance(getContext()).sendSingleEvent("ttsAnalyser", "-1");

        }

    }

    private boolean checkParams(JSONObject params) {
        if (!params.has("text") || params.isNull("text") || !params.has("queuingMode") || params.isNull(
            "queuingMode")) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("ttsAnalyser", String.valueOf(CordovaErrors.ILLEGAL_PARAMETER));

            return false;
        }
        return true;
    }

    public void stopTTSAnalyser(final CallbackContext callbackContext, final CordovaInterface cordovaInterface) {
        if (mlTtsEngine == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(cordovaInterface.getContext())
                .sendSingleEvent("ttsAnalyserStop", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            mlTtsEngine.stop();
            HMSLogger.getInstance(getContext()).sendSingleEvent("ttsAnalyserStop");
        }
    }

    public void pauseTTSAnalyser(final CallbackContext callbackContext, final CordovaInterface cordovaInterface) {
        if (mlTtsEngine == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(cordovaInterface.getContext())
                .sendSingleEvent("ttsAnalyserPause", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            mlTtsEngine.pause();
            HMSLogger.getInstance(getContext()).sendSingleEvent("ttsAnalyserPause");
        }
    }

    public void resumeTTSAnalyser(final CallbackContext callbackContext) {
        if (mlTtsEngine == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("ttsAnalyserResume", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            mlTtsEngine.resume();
            HMSLogger.getInstance(getContext()).sendSingleEvent("ttsAnalyserResume");
        }
    }

    public void getTTSAnalyserSetting(final CallbackContext callbackContext) throws JSONException {
        if (mlTtsEngine == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("ttsAnalyserSetting", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            JSONObject jsonObject = new JSONObject();
            jsonObject.putOpt("language", mlConfigs.getLanguage());
            jsonObject.putOpt("person", mlConfigs.getPerson());
            jsonObject.putOpt("speed", mlConfigs.getSpeed());
            jsonObject.putOpt("synthesizeMode", mlConfigs.getSynthesizeMode());
            jsonObject.putOpt("volume", mlConfigs.getVolume());
            callbackContext.success(jsonObject);
            HMSLogger.getInstance(getContext()).sendSingleEvent("ttsAnalyserSetting");
        }
    }

    public void downloadTTSAnalyser(final CallbackContext callbackContext, final JSONObject params)
        throws JSONException {

        this.callbackContext = callbackContext;
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
                callbackContext.error("Error:" + e.getMessage());
            });
        }

    }

    public void ttsDownloadSetting(final CallbackContext callbackContext) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("speakerName", model.getSpeakerName());
        jsonObject.putOpt("modelName", model.getModelName());
        callbackContext.success(jsonObject);
        HMSLogger.getInstance(getContext()).sendSingleEvent("ttsAnalyserDownloadSetting");
    }

    public void ttsEngineSetting(final JSONObject params, final CallbackContext callbackContext) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        String language = params.optString("language", "en");
        jsonObject.putOpt("languages", mlTtsEngine.getLanguages());
        jsonObject.putOpt("speakers", mlTtsEngine.getSpeakers());
        jsonObject.putOpt("speaker", mlTtsEngine.getSpeaker(language));
        jsonObject.putOpt("isLanguageAvailable", mlTtsEngine.isLanguageAvailable(language));
        callbackContext.success(jsonObject);
        HMSLogger.getInstance(getContext()).sendSingleEvent("ttsEngineSetting");
    }

    public void shutdown(final CallbackContext callbackContext) {
        if (mlTtsEngine == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("ttsAnalyserShutDown", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            mlTtsEngine.shutdown();
            HMSLogger.getInstance(getContext()).sendSingleEvent("ttsAnalyserShutDown");
        }
    }
}
