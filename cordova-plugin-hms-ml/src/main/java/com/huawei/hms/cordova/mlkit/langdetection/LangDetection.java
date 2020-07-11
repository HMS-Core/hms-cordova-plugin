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

package com.huawei.hms.cordova.mlkit.langdetection;

import android.util.Log;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.translate.Translator;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.mlsdk.langdetect.MLDetectedLang;
import com.huawei.hms.mlsdk.langdetect.MLLangDetectorFactory;
import com.huawei.hms.mlsdk.langdetect.cloud.MLRemoteLangDetector;
import com.huawei.hms.mlsdk.langdetect.cloud.MLRemoteLangDetectorSetting;

import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

public class LangDetection {
    private String TAG = LangDetection.class.getSimpleName();
    MLRemoteLangDetector langDetector;

    public void remoteLangDetection(JSONObject params, CallbackContext callbackContext) throws JSONException {

        if (!params.has("sourceText") || params.isNull("sourceText")) {
            Log.e(TAG, "Illegal argument. sourceText field is mandatory and it must not be null.");
            callbackContext.error("Illegal argument. sourceText field is mandatory and it must not be null.");
            return;
        }
        String sourceText = params.getString("sourceText");
        int taskMode = params.optInt("taskMode", 1);
        float trustedThreshold;
        MLRemoteLangDetectorSetting setting;
        switch (taskMode) {
            case 0:
                trustedThreshold = (float) params.optDouble("trustedThreshold", 0.5f);
                setting = new MLRemoteLangDetectorSetting.Factory().setTrustedThreshold(trustedThreshold).create();
                langDetector = MLLangDetectorFactory.getInstance().getRemoteLangDetector(setting);
                Log.i(TAG, "firstBestDetectTask: getTrustedThreshold: " + setting.getTrustedThreshold());
                Task<String> firstBestDetectTask = langDetector.firstBestDetect(sourceText);
                firstBestDetectTask.addOnSuccessListener(callbackContext::success)
                        .addOnFailureListener(e -> callbackContext.error(e.getMessage()));
                break;
            case 1:
                trustedThreshold = (float) params.optDouble("trustedThreshold", 0.01f);
                setting = new MLRemoteLangDetectorSetting.Factory().setTrustedThreshold(trustedThreshold).create();
                langDetector = MLLangDetectorFactory.getInstance().getRemoteLangDetector(setting);
                Log.i(TAG, "probabilityDetectTask: getTrustedThreshold: " + setting.getTrustedThreshold());
                Task<List<MLDetectedLang>> probabilityDetectTask = langDetector.probabilityDetect(sourceText);
                probabilityDetectTask.addOnSuccessListener(text -> {
                    String result = HMSMLUtils.toJSON(text);
                    try {
                        callbackContext.success(new JSONArray(result));
                    } catch (JSONException e) {
                        callbackContext.error(e.getMessage());
                    }
                }).addOnFailureListener(e -> callbackContext.error(e.getMessage()));
                break;
            default:
                break;
        }
    }

    public void stopLangDetectionService(CallbackContext callbackContext) {
        if (langDetector != null) {
            try {
                langDetector.stop();
                langDetector = null;
                callbackContext.success("Translator is successfully closed.");
            } catch (Exception e) {
                callbackContext.error(e.getMessage());
            }
        }
    }
}
