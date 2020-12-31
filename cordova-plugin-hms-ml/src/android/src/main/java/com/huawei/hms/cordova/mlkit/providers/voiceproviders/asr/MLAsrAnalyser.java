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

package com.huawei.hms.cordova.mlkit.providers.voiceproviders.asr;

import android.content.Intent;
import android.os.Bundle;
import android.speech.RecognizerIntent;
import android.util.Log;

import androidx.appcompat.app.AppCompatActivity;

import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.mlplugin.asr.MLAsrCaptureConstants;
import com.huawei.hms.mlsdk.asr.MLAsrConstants;
import com.huawei.hms.mlsdk.asr.MLAsrListener;
import com.huawei.hms.mlsdk.asr.MLAsrRecognizer;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.PluginResult;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Arrays;

public class MLAsrAnalyser extends AppCompatActivity {
    private static final String TAG = MLAsrAnalyser.class.getSimpleName();
    private static final int ML_ASR_CAPTURE_CODE = 2;
    private CallbackContext callbackContext;
    private CordovaInterface cordovaInterface;
    private MLAsrRecognizer mSpeechRecognizer;

    public void initializeASRAnalyser(final JSONObject params, final CallbackContext callbackContext,
        final CordovaInterface cordovaInterface) {
        this.callbackContext = callbackContext;
        this.cordovaInterface = cordovaInterface;
        String language = params.optString("language", "en-US");
        int feature = params.optInt("feature", 12);
        mSpeechRecognizer = MLAsrRecognizer.createAsrRecognizer(this);
        mSpeechRecognizer.setAsrListener(new SpeechRecognitionListener());
        Intent intentSdk = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH).putExtra(MLAsrConstants.LANGUAGE,
            language).putExtra(MLAsrConstants.FEATURE, feature);
        mSpeechRecognizer.startRecognizing(intentSdk);

    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
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
                            callbackContext.sendPluginResult(pluginResult);
                            HMSLogger.getInstance(cordovaInterface.getContext()).sendPeriodicEvent("asrAnalyser");
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
                            callbackContext.error(text);
                            HMSLogger.getInstance(cordovaInterface.getContext()).sendSingleEvent("asrAnalyser", "-1");
                            break;
                        default:
                            Log.e(TAG, "Failure: ");
                            HMSLogger.getInstance(cordovaInterface.getContext()).sendSingleEvent("asrAnalyser", "-1");
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

    public void destroy() {
        if (mSpeechRecognizer == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(cordovaInterface.getContext())
                .sendSingleEvent("asrAnalyserStop", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            mSpeechRecognizer.destroy();
            mSpeechRecognizer = null;
            HMSLogger.getInstance(cordovaInterface.getContext()).sendSingleEvent("asrAnalyserStop");
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
            callbackContext.sendPluginResult(pluginResult);
            HMSLogger.getInstance(cordovaInterface.getContext()).sendPeriodicEvent("asrAnalyser");
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
            callbackContext.sendPluginResult(pluginResult);
            HMSLogger.getInstance(cordovaInterface.getContext()).sendPeriodicEvent("asrAnalyser");
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
            callbackContext.error(errorJSON);
            HMSLogger.getInstance(cordovaInterface.getContext()).sendSingleEvent("asrAnalyser", "-1");
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
            callbackContext.sendPluginResult(pluginResult);
            HMSLogger.getInstance(cordovaInterface.getContext()).sendPeriodicEvent("asrAnalyser");
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
            callbackContext.sendPluginResult(pluginResult);
            HMSLogger.getInstance(cordovaInterface.getContext()).sendPeriodicEvent("asrAnalyser");
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
            callbackContext.sendPluginResult(pluginResult);
            HMSLogger.getInstance(cordovaInterface.getContext()).sendPeriodicEvent("asrAnalyser");
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
            callbackContext.sendPluginResult(pluginResult);
            HMSLogger.getInstance(cordovaInterface.getContext()).sendPeriodicEvent("asrAnalyser");
        }
    }
}
