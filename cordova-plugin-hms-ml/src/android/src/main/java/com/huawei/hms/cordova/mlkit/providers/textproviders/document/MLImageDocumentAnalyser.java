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

package com.huawei.hms.cordova.mlkit.providers.textproviders.document;

import android.content.Context;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.helpers.CordovaHelpers;
import com.huawei.hms.mlsdk.document.MLDocument;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlkit.utils.PlatformUtils;
import com.huawei.hms.cordova.mlkit.logger.HMSMethod;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.MLAnalyzerFactory;
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.mlsdk.document.MLDocumentAnalyzer;
import com.huawei.hms.mlsdk.document.MLDocumentSetting;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

public class MLImageDocumentAnalyser extends HMSProvider {
    private static final String TAG = MLImageDocumentAnalyser.class.getName();
    private MLDocumentAnalyzer analyzer;
    private MLDocumentSetting setting;
    ;

    public MLImageDocumentAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializeDocumentAnalyser(final JSONObject params, final CallbackContext callbackContext) {

        MLFrame frame = HMSMLUtils.getFrame(getContext(), params);
        HMSMethod method = new HMSMethod("documentImageAnalyser");
        CordovaHelpers.frameController(frame, getContext(), callbackContext, "documentImageAnalyser");
        JSONObject documentTextSetting = params.optJSONObject("documentSetting");

        if (documentTextSetting != null) {
            setting = TextUtils.toObject(documentTextSetting, MLDocumentSetting.class);
            analyzer = MLAnalyzerFactory.getInstance().getRemoteDocumentAnalyzer(setting);
        } else {
            analyzer = MLAnalyzerFactory.getInstance().getRemoteDocumentAnalyzer();
        }

        Task<MLDocument> task = analyzer.asyncAnalyseFrame(frame);
        task.addOnSuccessListener(
            PlatformUtils.successListener(method, getActivity(), callbackContext, TextUtils.FROM_MLDOC_TO_JSON_OBJECT))
            .addOnFailureListener(PlatformUtils.failureListener(method, getActivity(), callbackContext));
    }

    public void closeDocumentAnalyser(final CallbackContext callbackContext) throws IOException {
        if (analyzer == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("documentImageAnalyserClose", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            analyzer.close();
            analyzer = null;
            callbackContext.success("Analyser closed");
            HMSLogger.getInstance(getContext()).sendSingleEvent("documentImageAnalyserClose");
        }
    }

    public void getDocumentAnalyserSetting(final CallbackContext callbackContext) throws IOException, JSONException {
        if (analyzer == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("documentImageAnalyserSetting", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            JSONObject jsonObject = new JSONObject();
            jsonObject.putOpt("borderType", setting.getBorderType());
            jsonObject.putOpt("languageList", setting.getLanguageList());
            jsonObject.putOpt("isEnableFingerprintVerification", setting.isEnableFingerprintVerification());
            callbackContext.success(jsonObject);
            HMSLogger.getInstance(getContext()).sendSingleEvent("documentImageAnalyserSetting");
        }
    }

    public void stopDocumentAnalyser(final CallbackContext callbackContext) throws IOException {
        if (analyzer == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("documentImageAnalyserStop", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            analyzer.stop();
            analyzer = null;
            callbackContext.success("Analyser stopped");
            HMSLogger.getInstance(getContext()).sendSingleEvent("documentImageAnalyserStop");
        }
    }
}
