/*
Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

package com.huawei.hms.cordova.mlkit.tts;

import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.util.Log;

import androidx.annotation.NonNull;

import com.huawei.hms.mlsdk.tts.MLTtsCallback;
import com.huawei.hms.mlsdk.tts.MLTtsConfig;
import com.huawei.hms.mlsdk.tts.MLTtsConstants;
import com.huawei.hms.mlsdk.tts.MLTtsEngine;
import com.huawei.hms.mlsdk.tts.MLTtsError;
import com.huawei.hms.mlsdk.tts.MLTtsWarn;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

public class TtsAnalyse {
    private static final String TAG = TtsAnalyse.class.getSimpleName();
    private CallbackContext callbackContext;
    private MLTtsEngine mlTtsEngine;

    public void ttsAnalyseInitializer(CallbackContext callbackContext, JSONObject params) throws JSONException {
        this.callbackContext = callbackContext;
        if (!params.has("text") || params.isNull("text")) {
            Log.e(TAG, "Illegal argument. text field is mandatory and it must not be null.");
            callbackContext.error("Illegal argument. text field is mandatory and it must not be null.");
            return;
        }
        if (!params.has("queuingMode") || params.isNull("queuingMode")) {
            Log.e(TAG, "Illegal argument. queuingMode field is mandatory and it must not be null.");
            callbackContext.error("Illegal argument. queuingMode field is mandatory and it must not be null.");
            return;
        }
        String text = params.getString("text");
        int queuingMode = params.getInt("queuingMode");
        String language;
        String person;
        float speed;
        float volume;
        JSONObject mlConfigsJSON = params.optJSONObject("mlConfigs");
        if (mlConfigsJSON != null) {
            language = mlConfigsJSON.optString("language", "zh-Hans");
            person = mlConfigsJSON.optString("person", "Female-zh");
            speed = (float) mlConfigsJSON.optDouble("speed", 1.0f);
            volume = (float) mlConfigsJSON.optDouble("volume", 1.0f);
        } else {
            language = "zh-Hans";
            person = "Female-zh";
            speed = 1.0f;
            volume = 1.0f;
        }
        MLTtsConfig mlConfigs = new MLTtsConfig()
                .setLanguage(language)
                .setPerson(person)
                .setSpeed(speed)
                .setVolume(volume);
        mlTtsEngine = new MLTtsEngine(mlConfigs);
        mlTtsEngine.setTtsCallback(callback);
        mlTtsEngine.speak(text, queuingMode);

    }

    private MLTtsCallback callback = new MLTtsCallback() {
        @Override
        public void onError(String taskId, MLTtsError err) {
            JSONObject onError = new JSONObject();
            try {
                onError.putOpt("taskID", taskId);
                JSONObject error = new JSONObject();
                error.put("errorID", err.getErrorId());
                error.put("errorMessage", err.getErrorMsg());
                error.put("extension", err.getExtension());
                onError.putOpt("error", error);

            } catch (JSONException e) {
                Log.e(TAG, "onError: " + e.getMessage());
            }
        }

        @Override
        public void onWarn(String taskId, MLTtsWarn warn) {
            JSONObject onWarn = new JSONObject();
            try {
                onWarn.putOpt("taskID", taskId);
                JSONObject warnJSON = new JSONObject();
                warnJSON.put("warnID", warn.getWarnId());
                warnJSON.put("warnMessage", warn.getWarnMsg());
                warnJSON.put("extension", warn.getExtension());
                onWarn.putOpt("error", warnJSON);
            } catch (JSONException e) {
                Log.e(TAG, "onWarn: " + e.getMessage());
            }
        }

        @Override
        public void onRangeStart(String taskId, int start, int end) {
            JSONObject onRangeStart = new JSONObject();
            try {
                onRangeStart.putOpt("taskID", taskId);
                onRangeStart.putOpt("start", start);
                onRangeStart.putOpt("end", end);
            } catch (JSONException e) {
                Log.e(TAG, "onRangeStart: " + e.getMessage());
            }
        }

        @Override
        public void onEvent(String taskId, int eventName, Bundle bundle) {
            JSONObject onEvent = new JSONObject();
            try {
                onEvent.putOpt("taskID", taskId);
                onEvent.putOpt("eventName", eventName);
                onEvent.putOpt("bundle", bundle);
            } catch (JSONException e) {
                Log.e(TAG, "onEvent: " + e.getMessage());
            }
            callbackContext.success();
        }
    };

    public void stopAnalyser(CallbackContext callbackContext) {
        if (mlTtsEngine == null)
            callbackContext.error("Analyser is not initializer");
        else
            mlTtsEngine.stop();
    }

    public void pauseAnalyser(CallbackContext callbackContext) {
        if (mlTtsEngine == null)
            callbackContext.error("Analyser is not initializer");
        else
            mlTtsEngine.pause();
    }

    public void resumeAnalyser(CallbackContext callbackContext) {
        if (mlTtsEngine == null)
            callbackContext.error("Analyser is not initializer");
        else
            mlTtsEngine.resume();
    }
}
