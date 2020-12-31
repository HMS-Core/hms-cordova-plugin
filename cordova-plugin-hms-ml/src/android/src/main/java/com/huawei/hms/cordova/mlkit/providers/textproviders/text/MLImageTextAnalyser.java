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

package com.huawei.hms.cordova.mlkit.providers.textproviders.text;

import android.content.Context;
import android.util.SparseArray;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.logger.HMSMethod;
import com.huawei.hms.mlsdk.text.MLRemoteTextSetting;
import com.huawei.hms.mlsdk.text.MLText;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlkit.utils.PlatformUtils;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.MLAnalyzerFactory;
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.mlsdk.text.MLLocalTextSetting;
import com.huawei.hms.mlsdk.text.MLTextAnalyzer;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

public class MLImageTextAnalyser extends HMSProvider {
    private String TAG = MLImageTextAnalyser.class.getSimpleName();
    private MLTextAnalyzer analyzer;
    private boolean flag = false;
    private MLLocalTextSetting mlLocalTextSetting;
    private MLRemoteTextSetting mlRemoteTextSetting;
    private String language = "rm";
    private int ocrMode = 1;

    public MLImageTextAnalyser(Context context) {
        super(context);
    }

    public void initializeLocalImageTextAnalyser(final JSONObject params, final CallbackContext callbackContext)
        throws JSONException {
        HMSMethod method = new HMSMethod("localImageTextAnalyser");
        MLFrame frame = HMSMLUtils.getFrame(getContext(), params);
        CordovaHelpers.frameController(frame, getContext(), callbackContext, "localImageTextAnalyser");
        int analyseMode = params.getInt("analyseMode");
        JSONObject localTextSetting = params.optJSONObject("localTextSetting");
        if (localTextSetting != null) {
            mlLocalTextSetting = TextUtils.toObject(localTextSetting, MLLocalTextSetting.class);
            language = localTextSetting.optString("languae", "rm");
            ocrMode = localTextSetting.optInt("ocrMode", 1);

        } else {
            mlLocalTextSetting = new MLLocalTextSetting.Factory().create();
        }
        if (analyseMode == 0) {
            analyzer = MLAnalyzerFactory.getInstance().getLocalTextAnalyzer();
            Task<MLText> task = analyzer.asyncAnalyseFrame(frame);
            task.addOnSuccessListener(PlatformUtils.successListener(method, getActivity(), callbackContext,
                TextUtils.FROM_MLTEXT_TO_JSON_OBJECT))
                .addOnFailureListener(PlatformUtils.failureListener(method, getActivity(), callbackContext));
        } else if (analyseMode == 1) {
            syncMode(language, ocrMode, callbackContext, frame);
        } else {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("localImageTextAnalyser", String.valueOf(CordovaErrors.ILLEGAL_PARAMETER));
        }

    }

    public void initializeRemoteImageTextAnalyser(final JSONObject params, final CallbackContext callbackContext)
        throws JSONException, IOException {
        flag = true;
        HMSMethod method = new HMSMethod("remoteImageTextAnalyser");
        MLFrame frame = HMSMLUtils.getFrame(getContext(), params);
        CordovaHelpers.frameController(frame, getContext(), callbackContext, "remoteImageTextAnalyser");
        JSONObject remoteTextSetting = params.optJSONObject("remoteTextSetting");
        if (remoteTextSetting != null) {
            mlRemoteTextSetting = TextUtils.toObject(remoteTextSetting, MLRemoteTextSetting.class);
            language = remoteTextSetting.optString("languae", "rm");
            ocrMode = remoteTextSetting.optInt("ocrMode", 1);
        } else {
            mlRemoteTextSetting = new MLRemoteTextSetting.Factory().create();

        }
        int analyseRemoteMode = params.getInt("analyseMode");
        switch (analyseRemoteMode) {
            case 1: {
                syncMode(language, ocrMode, callbackContext, frame);
                break;
            }
            case 0: {
                analyzer = MLAnalyzerFactory.getInstance().getRemoteTextAnalyzer(mlRemoteTextSetting);
                Task<MLText> task = analyzer.asyncAnalyseFrame(frame);
                task.addOnSuccessListener(PlatformUtils.successListener(method, getActivity(), callbackContext,
                    TextUtils.FROM_MLTEXT_TO_JSON_OBJECT))
                    .addOnFailureListener(PlatformUtils.failureListener(method, getActivity(), callbackContext));
                break;
            }
            default:
                callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
                HMSLogger.getInstance(getContext())
                    .sendSingleEvent("localImageTextAnalyser", String.valueOf(CordovaErrors.ILLEGAL_PARAMETER));
                break;
        }

    }

    private void syncMode(String language, int ocrMode, CallbackContext callbackContext, MLFrame frame) {
        SparseArray<MLText.Block> analyseFrameSparseArray = new MLTextAnalyzer.Factory(getContext()).setLocalOCRMode(
            ocrMode).setLanguage(language).create().analyseFrame(frame);
        if (analyseFrameSparseArray != null) {
            callbackContext.success(TextUtils.fromSparseArrayMLTextBlockToJSON(analyseFrameSparseArray));
            HMSLogger.getInstance(getContext()).sendSingleEvent("imageTextAnalyser");
        }
    }

    public void closeImgTextAnalyser(final CallbackContext callbackContext, final CordovaInterface cordovaInterface)
        throws IOException {
        if (analyzer == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(cordovaInterface.getContext())
                .sendSingleEvent("imageTextAnalyserStop", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            analyzer.close();
            analyzer = null;
            callbackContext.success("Analyzer closed");
            HMSLogger.getInstance(cordovaInterface.getContext()).sendSingleEvent("imageTextAnalyserStop");
        }
    }

    public void getImgTextAnalyserInfo(final CallbackContext callbackContext, final CordovaInterface cordovaInterface)
        throws JSONException {
        int analyseType;
        boolean isAnalyserAvailable;
        if (analyzer == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_NULL));
            HMSLogger.getInstance(cordovaInterface.getContext())
                .sendSingleEvent("imageTextAnalyserInfo", String.valueOf(CordovaErrors.ANALYSIS_NULL));
            return;
        }
        isAnalyserAvailable = analyzer.isAvailable();
        analyseType = analyzer.getAnalyseType();
        JSONObject analyserInfo = new JSONObject();
        analyserInfo.putOpt("isAnalyserAvailable", isAnalyserAvailable);
        analyserInfo.putOpt("analyseType", analyseType);
        callbackContext.success(analyserInfo);
        HMSLogger.getInstance(cordovaInterface.getContext()).sendSingleEvent("imageTextAnalyserInfo");
    }

    public void getTextSetting(final CallbackContext callbackContext) throws JSONException {
        if (analyzer == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_NULL));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("imageTextAnalyserSetting", String.valueOf(CordovaErrors.ANALYSIS_NULL));
            return;
        } else {
            JSONObject jsonObject = new JSONObject();
            if (flag) {
                jsonObject.putOpt("borderType", mlRemoteTextSetting.getBorderType());
                jsonObject.putOpt("languageList", mlRemoteTextSetting.getLanguageList());
                jsonObject.putOpt("textDensityScene", mlRemoteTextSetting.getTextDensityScene());
                jsonObject.putOpt("isEnableFingerprintVerification",
                    mlRemoteTextSetting.isEnableFingerprintVerification());
            } else {
                jsonObject.putOpt("language", mlLocalTextSetting.getLanguage());
                jsonObject.putOpt("ocrMode", mlLocalTextSetting.getOCRMode());
            }
            callbackContext.success(jsonObject);
            HMSLogger.getInstance(getContext()).sendSingleEvent("imageTextAnalyserSetting");
        }
    }

}
