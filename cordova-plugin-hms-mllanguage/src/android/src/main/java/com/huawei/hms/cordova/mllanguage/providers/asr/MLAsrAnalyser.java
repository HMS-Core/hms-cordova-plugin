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

package com.huawei.hms.cordova.mllanguage.providers.asr;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.speech.RecognizerIntent;
import android.util.Log;

import com.huawei.hms.cordova.mllanguage.basef.CordovaBaseModule;
import com.huawei.hms.cordova.mllanguage.basef.CordovaMethod;
import com.huawei.hms.cordova.mllanguage.basef.HMSLog;
import com.huawei.hms.cordova.mllanguage.basef.handler.CorPack;
import com.huawei.hms.cordova.mllanguage.basef.handler.Promise;
import com.huawei.hms.cordova.mllanguage.helpers.CordovaErrors;
import com.huawei.hms.mlplugin.asr.MLAsrCaptureConstants;
import com.huawei.hms.mlsdk.asr.MLAsrConstants;
import com.huawei.hms.mlsdk.asr.MLAsrListener;
import com.huawei.hms.mlsdk.asr.MLAsrRecognizer;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Arrays;
import java.util.List;

public class MLAsrAnalyser extends CordovaBaseModule {
    private static final String TAG = MLAsrAnalyser.class.getSimpleName();

    private static final int ML_ASR_CAPTURE_CODE = 2;

    private MLAsrRecognizer mSpeechRecognizer;

    private Context context;

    private Promise promise;

    public MLAsrAnalyser(CordovaInterface cordova) {
        this.context = cordova.getContext();
    }

    @HMSLog
    @CordovaMethod
    public void asrAnalyser(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        JSONObject params = args.getJSONObject(0);
        String language = params.optString("language", "en-US");
        int feature = params.optInt("feature", 12);
        mSpeechRecognizer = MLAsrRecognizer.createAsrRecognizer(context);
        mSpeechRecognizer.setAsrListener(new SpeechRecognitionListener());
        Intent intentSdk = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH).putExtra(MLAsrConstants.LANGUAGE,
            language).putExtra(MLAsrConstants.FEATURE, feature);
        mSpeechRecognizer.startRecognizing(intentSdk);
    }

    @HMSLog
    @CordovaMethod
    public void asrAnalyserStop(final CorPack corPack, JSONArray args, final Promise promise) {
        if (mSpeechRecognizer == null) {
            Log.e("asrAnalyserStop", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            mSpeechRecognizer.destroy();
            mSpeechRecognizer = null;
            promise.success();
        }
    }

    @HMSLog
    @CordovaMethod
    public void asrAnalyserGetLanguages(final CorPack corPack, JSONArray args, final Promise promise) {
        if (mSpeechRecognizer != null) {
            mSpeechRecognizer.getLanguages(new MLAsrRecognizer.LanguageCallback() {
                @Override
                public void onResult(List<String> result) {
                    Log.i(TAG, "support languages==" + result.toString());
                    promise.success(result.toString());
                }

                @Override
                public void onError(int errorCode, String errorMsg) {
                    JSONObject jsonObject = new JSONObject();
                    try {
                        jsonObject.put(errorMsg, errorCode);
                    } catch (JSONException e) {
                        Log.e(TAG, "MLAsrRecognizer.LanguageCallback: error ->" + e.getMessage());
                    }
                    Log.e(TAG, "errorCode:" + errorCode + "errorMsg:" + errorMsg);
                    promise.error(jsonObject);
                }
            });
        } else {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.UNKNOWN));
        }
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        String text = "";
        if (requestCode == ML_ASR_CAPTURE_CODE) {
            if (data != null) {
                Bundle bundle = data.getExtras();
                if (bundle != null) {
                    switch (resultCode) {
                        case MLAsrCaptureConstants.ASR_SUCCESS:
                            if (bundle.containsKey(MLAsrCaptureConstants.ASR_RESULT)) {
                                text = bundle.getString(MLAsrCaptureConstants.ASR_RESULT);
                            }
                            if (text == null || "".equals(text)) {
                                text = "Result is null.";
                            }
                            JSONObject recognitionResult = new JSONObject();
                            try {
                                recognitionResult.putOpt("text", text);
                            } catch (JSONException e) {
                                Log.e(TAG, "onActivityResult: error" + e.getMessage());
                            }
                            JSONObject result = new JSONObject();
                            try {
                                result.putOpt("eventName", "onResults");
                                result.putOpt("result", text);
                            } catch (JSONException e) {
                                Log.e(TAG, "onActivityResult: error" + e.getMessage());
                            }
                            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, result);
                            pluginResult.setKeepCallback(true);
                            promise.sendPluginResult(pluginResult);
                            break;
                        case MLAsrCaptureConstants.ASR_FAILURE:
                            if (bundle.containsKey(MLAsrCaptureConstants.ASR_ERROR_CODE)) {
                                text = text + bundle.getInt(MLAsrCaptureConstants.ASR_ERROR_CODE);
                            }
                            if (bundle.containsKey(MLAsrCaptureConstants.ASR_ERROR_MESSAGE)) {
                                String errorMsg = bundle.getString(MLAsrCaptureConstants.ASR_ERROR_MESSAGE);
                                if (errorMsg != null && !"".equals(errorMsg)) {
                                    text = "[" + text + "]" + errorMsg;
                                }
                            }
                            if (bundle.containsKey(MLAsrCaptureConstants.ASR_SUB_ERROR_CODE)) {
                                int subErrorCode = bundle.getInt(MLAsrCaptureConstants.ASR_SUB_ERROR_CODE);
                                text = "[" + text + "]" + subErrorCode;
                            }
                            promise.error(text);
                            break;
                        default:
                            Log.e(TAG, "Failure: ");
                            break;
                    }
                } else {
                    Log.e(TAG, "onActivityResult: error -> bundle data is null");
                }
            } else {
                Log.e(TAG, "onActivityResult: error -> intent data is null");
            }
        }
    }

    class SpeechRecognitionListener implements MLAsrListener {
        @Override
        public void onResults(Bundle results) {
            JSONObject result = new JSONObject();
            try {
                result.putOpt("eventName", "onResults");
                result.putOpt("result", results.getString(MLAsrRecognizer.RESULTS_RECOGNIZED));
            } catch (JSONException e) {
                Log.e(TAG, "onResults: error ->" + e.getMessage());
            }
            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, result);
            pluginResult.setKeepCallback(true);
            promise.sendPluginResult(pluginResult);
        }

        @Override
        public void onRecognizingResults(Bundle partialResults) {
            JSONObject result = new JSONObject();
            try {
                result.putOpt("eventName", "onRecognizingResults");
                result.putOpt("recognitionResult", partialResults.getString(MLAsrRecognizer.RESULTS_RECOGNIZING));
            } catch (JSONException e) {
                Log.e(TAG, "onRecognizingResults: error ->" + e.getMessage());
            }
            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, result);
            pluginResult.setKeepCallback(true);
            promise.sendPluginResult(pluginResult);
        }

        @Override
        public void onError(int error, String errorMessage) {
            JSONObject errorJSON = new JSONObject();
            try {
                errorJSON.putOpt("errorCode", error);
                errorJSON.putOpt("errorMessage", errorMessage);
            } catch (JSONException e) {
                Log.e(TAG, "onError: error ->" + e.getMessage());
            }
            promise.error(errorJSON);
        }

        @Override
        public void onStartListening() {
            JSONObject result = new JSONObject();
            try {
                result.putOpt("eventName", "onStartListening");
            } catch (JSONException e) {
                Log.e(TAG, "onStartListening: error ->" + e.getMessage());
            }
            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, result);
            pluginResult.setKeepCallback(true);
            promise.sendPluginResult(pluginResult);
        }

        @Override
        public void onStartingOfSpeech() {
            JSONObject result = new JSONObject();
            try {
                result.putOpt("eventName", "onStartingOfSpeech");
            } catch (JSONException e) {
                Log.e(TAG, "onStartingOfSpeech: error -> " + e.getMessage());
            }
            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, result);
            pluginResult.setKeepCallback(true);
            promise.sendPluginResult(pluginResult);
        }

        @Override
        public void onVoiceDataReceived(byte[] data, float energy, Bundle bundle) {
            JSONObject result = new JSONObject();
            try {
                result.putOpt("eventName", "onVoiceDataReceived");
                result.putOpt("data", Arrays.toString(data));
                result.putOpt("energy", energy);
            } catch (JSONException e) {
                Log.e(TAG, "onVoiceDataReceived: error ->" + e.getMessage());
            }
            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, result);
            pluginResult.setKeepCallback(true);
            promise.sendPluginResult(pluginResult);
        }

        @Override
        public void onState(int i, Bundle bundle) {
            JSONObject result = new JSONObject();
            try {
                result.putOpt("eventName", "onState");
                result.putOpt("state", i);
            } catch (JSONException e) {
                Log.e(TAG, "onState: error ->" + e.getMessage());
            }
            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, result);
            pluginResult.setKeepCallback(true);
            promise.sendPluginResult(pluginResult);
        }
    }
}
