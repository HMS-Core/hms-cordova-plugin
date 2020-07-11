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

package com.huawei.hms.cordova.mlkit.document;

import android.content.Context;
import android.util.Log;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.mlsdk.MLAnalyzerFactory;
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.mlsdk.document.MLDocument;
import com.huawei.hms.mlsdk.document.MLDocumentAnalyzer;
import com.huawei.hms.mlsdk.document.MLDocumentSetting;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.List;

public class ImageDocumentAnalyse {
    private static final String TAG = ImageDocumentAnalyse.class.getName();

    private MLDocumentAnalyzer analyzer;

    public void documentAnalyser(Context context, JSONObject params, CallbackContext callbackContext) throws JSONException, IOException {
        MLFrame frame = HMSMLUtils.getFrame(context, params, callbackContext);
        if (frame == null) {
            callbackContext.error("Illegal argument. filePath field is mandatory and it must not be null.");
            return;
        }
        List<String> languageList;
        String borderType;
        JSONObject documentTextSetting = params.optJSONObject("documentSetting");
        MLDocumentSetting setting;

        if (documentTextSetting != null) {
            borderType = documentTextSetting.optString("borderType", "NGON");
            languageList = HMSMLUtils.jsonArrayToList(documentTextSetting);
            setting = new MLDocumentSetting.Factory()
                    .setBorderType(borderType)
                    .setLanguageList(languageList)
                    .create();
        } else {
            setting = new MLDocumentSetting.Factory()
                    .create();
        }
        analyzer = MLAnalyzerFactory.getInstance().getRemoteDocumentAnalyzer(setting);

        Task<MLDocument> task = analyzer.asyncAnalyseFrame(frame);
        task.addOnSuccessListener(document -> callbackContext.success(TextUtils.fromMLDocumentToJSON(document))).addOnFailureListener(e -> callbackContext.error(e.getMessage()));
    }

    public void closeDocumentAnalyser(CallbackContext callbackContext) throws IOException {
        if (analyzer == null) {
            callbackContext.error("Analyser is not initialized.");
        } else {
            analyzer.close();
            analyzer = null;
        }
    }
}
