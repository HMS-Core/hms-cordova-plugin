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

package com.huawei.hms.cordova.mlkit.providers.voiceproviders.rtt;

import android.content.Context;
import android.os.Bundle;
import android.util.Log;

import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.utils.MLError;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.speechrtt.MLSpeechRealTimeTranscription;
import com.huawei.hms.mlsdk.speechrtt.MLSpeechRealTimeTranscriptionConfig;
import com.huawei.hms.mlsdk.speechrtt.MLSpeechRealTimeTranscriptionConstants;
import com.huawei.hms.mlsdk.speechrtt.MLSpeechRealTimeTranscriptionListener;
import com.huawei.hms.mlsdk.speechrtt.MLSpeechRealTimeTranscriptionResult;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Arrays;

public class MLRttAnalyser extends HMSProvider {
    private static final String TAG = MLRttAnalyser.class.getName();
    private volatile StringBuffer recognizerResult = new StringBuffer();
    private CallbackContext callbackContext;
    private MLSpeechRealTimeTranscriptionConfig config;

    public MLRttAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializeRTTAnalyser(final JSONObject params, final CallbackContext callbackContext) {
        this.callbackContext = callbackContext;

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

    public void destroyRTT() {
        MLSpeechRealTimeTranscription.getInstance().destroy();
    }

    public void getRTTSetting(final CallbackContext callbackContext) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("language", config.getLanguage());
        jsonObject.putOpt("isPunctuationEnable", config.isPunctuationEnable());
        jsonObject.putOpt("isSentenceTimeOffsetEnable", config.isSentenceTimeOffsetEnable());
        jsonObject.putOpt("isWordTimeOffsetEnable", config.isWordTimeOffsetEnable());
        jsonObject.putOpt("scenes", config.getScenes());
        callbackContext.success(jsonObject);
        HMSLogger.getInstance(getContext()).sendSingleEvent("rttSetting");

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
                            callbackContext.sendPluginResult(pluginResult);
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
                            callbackContext.sendPluginResult(pluginResult);
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
                    callbackContext.sendPluginResult(pluginResult);
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
                callbackContext.sendPluginResult(pluginResult);
            }
        }

        @Override
        public void onError(final int error, final String errorMessage) {
            Log.i(TAG, "" + errorMessage);
            callbackContext.error(MLError.toErrorJSON(error, errorMessage));
            HMSLogger.getInstance(getContext()).sendSingleEvent("rttAnalyse", "-1");
        }

        @Override
        public void onStartListening() {
            Log.i(TAG, "onStartListening");
            JSONObject onStartListening = new JSONObject();
            try {
                onStartListening.putOpt("eventName", "onStartListening");
                PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, onStartListening);
                pluginResult.setKeepCallback(true);
                callbackContext.sendPluginResult(pluginResult);
                HMSLogger.getInstance(getContext()).sendSingleEvent("rttAnalyse");
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
                callbackContext.sendPluginResult(pluginResult);
                HMSLogger.getInstance(getContext()).sendSingleEvent("rttAnalyse");
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
            callbackContext.sendPluginResult(pluginResult);
            HMSLogger.getInstance(getContext()).sendSingleEvent("rttAnalyse");
        }

        @Override
        public void onState(int state, Bundle params) {
            JSONObject onState = new JSONObject();
            try {
                onState.putOpt("eventName", "onState");
                onState.putOpt("state", state);
                callbackContext.success(onState);
                HMSLogger.getInstance(getContext()).sendSingleEvent("rttAnalyse");
            } catch (JSONException e) {
                Log.e(TAG, "onState: error ->" + e.getMessage());
            }

        }
    }
}
