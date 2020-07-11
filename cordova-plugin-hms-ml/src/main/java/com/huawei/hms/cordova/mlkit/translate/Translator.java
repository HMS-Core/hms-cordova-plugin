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

package com.huawei.hms.cordova.mlkit.translate;

import android.util.Log;

import com.huawei.hmf.tasks.OnFailureListener;
import com.huawei.hmf.tasks.OnSuccessListener;
import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.mlsdk.langdetect.MLDetectedLang;
import com.huawei.hms.mlsdk.langdetect.MLLangDetectorFactory;
import com.huawei.hms.mlsdk.langdetect.cloud.MLRemoteLangDetector;
import com.huawei.hms.mlsdk.langdetect.cloud.MLRemoteLangDetectorSetting;
import com.huawei.hms.mlsdk.translate.MLTranslatorFactory;
import com.huawei.hms.mlsdk.translate.cloud.MLRemoteTranslateSetting;
import com.huawei.hms.mlsdk.translate.cloud.MLRemoteTranslator;

import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

public class Translator {
    private String TAG = Translator.class.getSimpleName();

    private MLRemoteTranslator translator;

    public void remoteTranslator(JSONObject params, CallbackContext callbackContext) throws JSONException {
        String targetLangCode;
        String sourceLangCode;
        String sourceText;
        if (!params.has("targetLangCode") || params.isNull("targetLangCode")) {
            Log.e(TAG, "Illegal argument. targetLangCode field is mandatory and it must not be null.");
            callbackContext.error("Illegal argument. targetLangCode field is mandatory and it must not be null.");
            return;
        }
        if (!params.has("sourceText") || params.isNull("sourceText")) {
            Log.e(TAG, "Illegal argument. sourceText field is mandatory and it must not be null.");
            callbackContext.error("Illegal argument. sourceText field is mandatory and it must not be null.");
            return;
        }
        targetLangCode = params.getString("targetLangCode");
        sourceLangCode = params.optString("sourceLangCode", null);
        sourceText = params.getString("sourceText");
        MLRemoteTranslateSetting setting =
                new MLRemoteTranslateSetting.Factory().setTargetLangCode(targetLangCode).setSourceLangCode(sourceLangCode).create();
        Log.i(TAG, "remoteTranslatorTranslateSetting: " + setting.getSourceLangCode() + " " + setting.getTargetLangCode());
        translator = MLTranslatorFactory.getInstance().getRemoteTranslator(setting);
        Task<String> task = translator.asyncTranslate(sourceText);
        task.addOnSuccessListener(text -> callbackContext.success(text))
                .addOnFailureListener(e -> callbackContext.error(e.getMessage()));
    }


    public void stopTranslatorService(CallbackContext callbackContext) {
        if (translator != null) {
            try {
                translator.stop();
                translator = null;
                callbackContext.success("Translator is successfully closed.");
            } catch (Exception e) {
                callbackContext.error(e.getMessage());
            }
        }
    }
}
