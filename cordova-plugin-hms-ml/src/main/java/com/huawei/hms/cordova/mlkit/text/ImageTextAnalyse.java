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

package com.huawei.hms.cordova.mlkit.text;

import android.content.Context;
import android.util.Log;
import android.util.SparseArray;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.MLAnalyzerFactory;
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.mlsdk.text.MLLocalTextSetting;
import com.huawei.hms.mlsdk.text.MLRemoteTextSetting;
import com.huawei.hms.mlsdk.text.MLText;
import com.huawei.hms.mlsdk.text.MLTextAnalyzer;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.List;

public class ImageTextAnalyse {
    private String TAG = ImageTextAnalyse.class.getSimpleName();

    private MLTextAnalyzer analyzer;
    private int analyseMode;
    private MLLocalTextSetting mlLocalTextSetting;
    private MLRemoteTextSetting mlRemoteTextSetting;
    private String language;
    private int ocrMode;

    public void localImageTextAnalyser(Context context, JSONObject params, CallbackContext callbackContext) throws JSONException, IOException {
        MLFrame frame = HMSMLUtils.getFrame(context, params, callbackContext);
        if (frame == null) {
            callbackContext.error("Illegal argument. filePath field is mandatory and it must not be null.");
            return;
        }

        JSONObject localTextSetting;
        analyseMode = params.optInt("analyseMode", 0);
        localTextSetting = params.optJSONObject("localTextSetting");

        if (localTextSetting != null) {
            ocrMode = localTextSetting.optInt("ocrMode", 1);
            language = localTextSetting.optString("language", "rm");
            mlLocalTextSetting = new MLLocalTextSetting.Factory()
                    .setOCRMode(ocrMode)
                    .setLanguage(language)
                    .create();
        } else {
            language = "rm";
            ocrMode = 1;
            mlLocalTextSetting = new MLLocalTextSetting.Factory()
                    .create();
        }
        callAnalyseFrame(params, context, callbackContext, frame);
    }

    public void remoteImageTextAnalyser(Context context, JSONObject params, CallbackContext callbackContext) throws JSONException, IOException {
        MLFrame frame = HMSMLUtils.getFrame(context, params, callbackContext);
        if (frame == null) {
            callbackContext.error("Illegal argument. filePath field is mandatory and it must not be null.");
            return;
        }
        List<String> languageList;
        String borderType;
        int textDensityScene;
        analyseMode = params.optInt("analyseMode", 0);
        JSONObject remoteTextSetting = params.optJSONObject("remoteTextSetting");
        if (remoteTextSetting != null) {
            borderType = remoteTextSetting.optString("borderType", "ARC");
            textDensityScene = remoteTextSetting.optInt("textDensityScene", 1);
            languageList = HMSMLUtils.jsonArrayToList(remoteTextSetting);
            mlRemoteTextSetting = new MLRemoteTextSetting.Factory()
                    .setTextDensityScene(textDensityScene)
                    .setLanguageList(languageList)
                    .setBorderType(borderType)
                    .create();
            Log.i(TAG, "remoteImageTextAnalyser: " + mlRemoteTextSetting.getTextDensityScene() + " " + mlRemoteTextSetting.getLanguageList() + " " + mlRemoteTextSetting.getBorderType());
            analyzer = MLAnalyzerFactory.getInstance().getRemoteTextAnalyzer(mlRemoteTextSetting);
        } else {
            analyzer = MLAnalyzerFactory.getInstance().getRemoteTextAnalyzer();

        }

        callAnalyseFrame(params, context, callbackContext, frame);

    }

    private void callAnalyseFrame(JSONObject params, Context context, CallbackContext callbackContext, MLFrame frame) throws JSONException {
        int ocrType = params.getInt("ocrType");
        switch (analyseMode) {
            case 0:
                if (ocrType == 0) {
                    Log.i(TAG, "Local Analyser analyseType: AsyncAnalyser");
                    analyzer = MLAnalyzerFactory.getInstance().getLocalTextAnalyzer(mlLocalTextSetting);
                    Task<MLText> task = analyzer.asyncAnalyseFrame(frame);
                    task.addOnSuccessListener(text -> callbackContext.success(TextUtils.fromMLTextToJSON(text))).addOnFailureListener(e -> callbackContext.error(e.getMessage()));
                } else if (ocrType == 1) {
                    Log.i(TAG, ":Remote Analyser analyseType: AsyncAnalyser");
                    analyzer = MLAnalyzerFactory.getInstance().getRemoteTextAnalyzer(mlRemoteTextSetting);
                    Task<MLText> task = analyzer.asyncAnalyseFrame(frame);
                    task.addOnSuccessListener(text -> callbackContext.success(TextUtils.fromMLTextToJSON(text))).addOnFailureListener(e -> callbackContext.error(e.getMessage()));
                }
                break;
            case 1:
                Log.i(TAG, ": analyseType: AnalyseFrame");
                SparseArray<MLText.Block> analyseFrameSparseArray = new MLTextAnalyzer.Factory(context).setLocalOCRMode(ocrMode).setLanguage(language).create().analyseFrame(frame);
                if (analyseFrameSparseArray != null) {
                    callbackContext.success(TextUtils.fromSparseArrayMLTextBlockToJSON(analyseFrameSparseArray));
                }
                break;
            default:
                callbackContext.error("analyseMode can be only 0 or 1");
        }
    }

    public void closeAnalyser(CallbackContext callbackContext) throws IOException {
        if (analyzer == null)
            callbackContext.error("Analyser is not initialized.");
        else {
            analyzer.close();
            analyzer = null;
        }
    }

    public void getAnalyserInfo(CallbackContext callbackContext) throws JSONException {
        int analyseType;
        boolean isAnalyserAvailable;
        if (analyzer == null) {
            callbackContext.error("Analyzer is not initialized");
            return;
        }
        isAnalyserAvailable = analyzer.isAvailable();
        analyseType = analyzer.getAnalyseType();
        JSONObject analyserInfo = new JSONObject();
        analyserInfo.putOpt("isAnalyserAvailable", isAnalyserAvailable);
        analyserInfo.putOpt("analyseType", analyseType);
        callbackContext.success(analyserInfo);
    }
}
