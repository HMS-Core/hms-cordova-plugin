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

package com.huawei.hms.cordova.mllanguage.providers.rtt;

import android.content.Context;
import android.os.Bundle;
import android.util.Log;

import com.huawei.hms.cordova.mllanguage.basef.CordovaBaseModule;
import com.huawei.hms.cordova.mllanguage.basef.CordovaMethod;
import com.huawei.hms.cordova.mllanguage.basef.HMSLog;
import com.huawei.hms.cordova.mllanguage.basef.handler.CorPack;
import com.huawei.hms.cordova.mllanguage.basef.handler.Promise;
import com.huawei.hms.cordova.mllanguage.utils.MLError;
import com.huawei.hms.cordova.mllanguage.utils.TextUtils;
import com.huawei.hms.mlsdk.speechrtt.MLSpeechRealTimeTranscription;
import com.huawei.hms.mlsdk.speechrtt.MLSpeechRealTimeTranscriptionConfig;
import com.huawei.hms.mlsdk.speechrtt.MLSpeechRealTimeTranscriptionConstants;
import com.huawei.hms.mlsdk.speechrtt.MLSpeechRealTimeTranscriptionListener;
import com.huawei.hms.mlsdk.speechrtt.MLSpeechRealTimeTranscriptionResult;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MLRttAnalyser extends CordovaBaseModule {
    private static final String TAG = MLRttAnalyser.class.getName();

    private volatile StringBuffer recognizerResult = new StringBuffer();

    private Promise promise;

    private MLSpeechRealTimeTranscriptionConfig config;

    private Context context;

    public MLRttAnalyser(CordovaInterface cordova) {
        this.context = cordova.getContext();
    }

    @HMSLog
    @CordovaMethod
    public void rttAnalyserStart(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        JSONObject params = args.getJSONObject(0);
        JSONObject mLSpeechRealTimeTranscriptionConfig = params.optJSONObject("mLSpeechRealTimeTranscriptionConfig");
        if (mLSpeechRealTimeTranscriptionConfig != null) {
            config = TextUtils.toObject(mLSpeechRealTimeTranscriptionConfig, MLSpeechRealTimeTranscriptionConfig.class);
        } else {
            config = new MLSpeechRealTimeTranscriptionConfig.Factory().enablePunctuation(true)
                .enableSentenceTimeOffset(true)
                .enableWordTimeOffset(true)
                .create();
        }
        MLSpeechRealTimeTranscription.getInstance().startRecognizing(config);
        MLSpeechRealTimeTranscription.getInstance().setRealTimeTranscriptionListener(new SpeechRecognitionListener());
    }

    @HMSLog
    @CordovaMethod
    public void rttAnalyserStop(final CorPack corPack, JSONArray args, final Promise promise) {
        MLSpeechRealTimeTranscription.getInstance().destroy();
        promise.success();
    }

    public MLSpeechRealTimeTranscription getInstance() {
        return MLSpeechRealTimeTranscription.getInstance();
    }

    @HMSLog
    @CordovaMethod
    public void getRTTSetting(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("language", config.getLanguage());
        jsonObject.putOpt("isPunctuationEnable", config.isPunctuationEnable());
        jsonObject.putOpt("isSentenceTimeOffsetEnable", config.isSentenceTimeOffsetEnable());
        jsonObject.putOpt("isWordTimeOffsetEnable", config.isWordTimeOffsetEnable());
        jsonObject.putOpt("scenes", config.getScenes());
        promise.success(jsonObject);
    }

    @HMSLog
    @CordovaMethod
    public void getRttLanguages(final CorPack corPack, JSONArray args, final Promise promise) {
        MLSpeechRealTimeTranscription.getInstance().getLanguages(new MLSpeechRealTimeTranscription.LanguageCallback() {
            @Override
            public void onResult(List<String> result) {
                Log.i(TAG, "support languages==" + result.toString());
                promise.success(result.toString());
            }

            @Override
            public void onError(int errorCode, String errorMsg) {
                Log.e(TAG, "errorCode:" + errorCode + "errorMsg:" + errorMsg);
                JSONObject json = new JSONObject();
                try {
                    json.put("errorCode", errorCode);
                    json.put("errorMsg", errorMsg);
                } catch (JSONException e) {
                    Log.e(TAG, "MLSpeechRealTimeTranscription.LanguageCallback: error ->" + e.getMessage());
                }
                promise.error(json);
            }
        });

    }

    protected class SpeechRecognitionListener implements MLSpeechRealTimeTranscriptionListener {
        @Override
        public void onRecognizingResults(final Bundle partialResults) {
            if (partialResults == null) {
                return;
            }
            JSONObject recogResult = new JSONObject();
            try {
                recogResult.putOpt("eventName", "onRecognizingResults");
            } catch (JSONException e) {
                Log.e(TAG, "onRecognizingResults: error ->" + e.getMessage());
            }
            boolean isFinal = partialResults.getBoolean(MLSpeechRealTimeTranscriptionConstants.RESULTS_PARTIALFINAL);
            String result = partialResults.getString(MLSpeechRealTimeTranscriptionConstants.RESULTS_RECOGNIZING);
            if (result == null || result.isEmpty()) {
                return;
            }
            if (isFinal) {
                ArrayList<MLSpeechRealTimeTranscriptionResult> wordOffset = partialResults.getParcelableArrayList(
                    MLSpeechRealTimeTranscriptionConstants.RESULTS_WORD_OFFSET);
                ArrayList<MLSpeechRealTimeTranscriptionResult> sentenceOffset = partialResults.getParcelableArrayList(
                    MLSpeechRealTimeTranscriptionConstants.RESULTS_SENTENCE_OFFSET);

                if (wordOffset != null) {
                    for (int i = 0; i < wordOffset.size(); i++) {
                        MLSpeechRealTimeTranscriptionResult remoteResult = wordOffset.get(i);
                        Log.d(TAG, "onRecognizingResults word offset is " + i + " ---> " + remoteResult.toString());
                        JSONObject wordOffsetJSON = new JSONObject();
                        JSONObject wordOffsetTOJSON = new JSONObject();
                        try {
                            wordOffsetJSON.putOpt("startTime", remoteResult.startTime);
                            wordOffsetJSON.putOpt("endTime", remoteResult.endTime);
                            wordOffsetJSON.putOpt("text", remoteResult.text);
                            wordOffsetTOJSON.putOpt("wordOffset", wordOffsetJSON);
                            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, wordOffsetTOJSON);
                            pluginResult.setKeepCallback(true);
                            promise.sendPluginResult(pluginResult);
                        } catch (JSONException e) {
                            Log.e(TAG, "error: " + e.getMessage());
                        }
                    }
                }

                if (sentenceOffset != null) {
                    for (int i = 0; i < sentenceOffset.size(); i++) {
                        MLSpeechRealTimeTranscriptionResult remoteResult = sentenceOffset.get(i);
                        Log.d(TAG, "onRecognizingResults sentence offset is " + i + " ---> " + remoteResult.toString());
                        JSONObject sentenceOffsetJSON = new JSONObject();
                        JSONObject sentenceOffsetTOJSON = new JSONObject();
                        try {
                            sentenceOffsetJSON.putOpt("startTime", remoteResult.startTime);
                            sentenceOffsetJSON.putOpt("endTime", remoteResult.endTime);
                            sentenceOffsetJSON.putOpt("text", remoteResult.text);
                            sentenceOffsetTOJSON.putOpt("sentenceOffset", sentenceOffsetJSON);
                            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, sentenceOffsetTOJSON);
                            pluginResult.setKeepCallback(true);
                            promise.sendPluginResult(pluginResult);
                        } catch (JSONException e) {
                            Log.e(TAG, "onRecognizingResults: error ->", e);
                        }
                    }
                }
                recognizerResult.append(result);
                try {
                    recogResult.putOpt("recognitionResult", recognizerResult);
                    PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, recogResult);
                    pluginResult.setKeepCallback(true);
                    promise.sendPluginResult(pluginResult);
                } catch (JSONException e) {
                    Log.e(TAG, "" + e.getMessage());
                }
                Log.i(TAG, "onRecognizingResults: " + recognizerResult.toString());
            } else {
                Log.i(TAG, "partialResult: " + result);
                JSONObject partialResult = new JSONObject();
                try {
                    partialResult.putOpt("partialResult", result);
                } catch (JSONException e) {
                    Log.e(TAG, "onRecognizingResults: error ->", e);
                }
                PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, partialResult);
                pluginResult.setKeepCallback(true);
                promise.sendPluginResult(pluginResult);
            }
        }

        @Override
        public void onError(final int error, final String errorMessage) {
            Log.i(TAG, "" + errorMessage);
            promise.error(MLError.toErrorJSON(error, errorMessage));
        }

        @Override
        public void onStartListening() {
            Log.i(TAG, "onStartListening");
            JSONObject onStartListening = new JSONObject();
            try {
                onStartListening.putOpt("eventName", "onStartListening");
                PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, onStartListening);
                pluginResult.setKeepCallback(true);
                promise.sendPluginResult(pluginResult);
            } catch (JSONException e) {
                Log.e(TAG, "onStartListening: error ->" + e.getMessage());
            }
        }

        @Override
        public void onStartingOfSpeech() {
            Log.i(TAG, "onStartingOfSpeech");
            JSONObject onStartingOfSpeech = new JSONObject();
            try {
                onStartingOfSpeech.putOpt("eventName", "onStartingOfSpeech");
                PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, onStartingOfSpeech);
                pluginResult.setKeepCallback(true);
                promise.sendPluginResult(pluginResult);
            } catch (JSONException e) {
                Log.e(TAG, "onStartingOfSpeech: error ->" + e.getMessage());
            }
        }

        @Override
        public void onVoiceDataReceived(final byte[] data, final float energy, final Bundle bundle) {
            JSONObject onVoiceDataReceived = new JSONObject();
            try {
                onVoiceDataReceived.putOpt("eventName", "onVoiceDataReceived");
                onVoiceDataReceived.putOpt("data", Arrays.toString(data));
                onVoiceDataReceived.putOpt("energy", energy);
            } catch (JSONException e) {
                Log.e(TAG, "error:" + e.getMessage());
            }
            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, onVoiceDataReceived);
            pluginResult.setKeepCallback(true);
            promise.sendPluginResult(pluginResult);
        }

        @Override
        public void onState(int state, Bundle params) {
            JSONObject onState = new JSONObject();
            try {
                onState.putOpt("eventName", "onState");
                onState.putOpt("state", state);
                promise.success(onState);
            } catch (JSONException e) {
                Log.e(TAG, "onState: error ->" + e.getMessage());
            }

        }
    }
}
