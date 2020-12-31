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

package com.huawei.hms.cordova.mlkit.common;

import android.content.Context;
import android.util.SparseArray;

import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.MLAnalyzerFactory;
import com.huawei.hms.mlsdk.classification.MLImageClassificationAnalyzer;
import com.huawei.hms.mlsdk.classification.MLRemoteClassificationAnalyzerSetting;
import com.huawei.hms.mlsdk.common.MLAnalyzer;
import com.huawei.hms.mlsdk.common.MLCompositeAnalyzer;
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.mlsdk.face.MLFaceAnalyzer;
import com.huawei.hms.mlsdk.face.MLFaceAnalyzerSetting;
import com.huawei.hms.mlsdk.handkeypoint.MLHandKeypointAnalyzer;
import com.huawei.hms.mlsdk.handkeypoint.MLHandKeypointAnalyzerFactory;
import com.huawei.hms.mlsdk.handkeypoint.MLHandKeypointAnalyzerSetting;
import com.huawei.hms.mlsdk.objects.MLObjectAnalyzer;
import com.huawei.hms.mlsdk.objects.MLObjectAnalyzerSetting;
import com.huawei.hms.mlsdk.skeleton.MLSkeletonAnalyzer;
import com.huawei.hms.mlsdk.skeleton.MLSkeletonAnalyzerFactory;
import com.huawei.hms.mlsdk.skeleton.MLSkeletonAnalyzerSetting;
import com.huawei.hms.mlsdk.text.MLRemoteTextSetting;
import com.huawei.hms.mlsdk.text.MLTextAnalyzer;

import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class MLHMSCompositeAnalyzer extends HMSProvider {
    private static String TAG = MLHMSCompositeAnalyzer.class.getSimpleName();
    private MLCompositeAnalyzer analyzer;

    public MLHMSCompositeAnalyzer(Context ctx) {
        super(ctx);
    }

    public void initializeCompositeAnalyzer(final JSONObject params, final CallbackContext callbackContext)
        throws JSONException {
        MLFrame frame = HMSMLUtils.getFrame(getContext(), params);
        CordovaHelpers.frameController(frame, getContext(), callbackContext, "compositeAnalyser");
        JSONObject analyzerSetting = params.optJSONObject("analyzerSetting");
        JSONArray array = params.getJSONArray("analyzerNames");
        MLCompositeAnalyzer.Creator creator = new MLCompositeAnalyzer.Creator();
        for (int i = 0; i < array.length(); i++) {
            creator.add(findAnalyzer(array.getString(i), analyzerSetting));
        }
        analyzer = creator.create();
        SparseArray<Object> sparseArray = analyzer.analyseFrame(frame);

        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("result", TextUtils.fromSparseArrayCompositeToJSON(sparseArray));
        callbackContext.success(jsonObject);
        HMSLogger.getInstance(getContext()).sendSingleEvent("compositeAnalyser");

    }

    private MLAnalyzer<?> findAnalyzer(String analyzerName, JSONObject analyzerSetting) {
        switch (analyzerName) {
            case "FACE": {
                MLFaceAnalyzer mlFaceAnalyzer;
                if (analyzerSetting != null) {
                    MLFaceAnalyzerSetting setting = TextUtils.toObject(analyzerSetting, MLFaceAnalyzerSetting.class);
                    mlFaceAnalyzer = MLAnalyzerFactory.getInstance().getFaceAnalyzer(setting);
                } else {
                    mlFaceAnalyzer = MLAnalyzerFactory.getInstance().getFaceAnalyzer();
                }
                return mlFaceAnalyzer;
            }
            case "HAND": {
                MLHandKeypointAnalyzer handKeypointAnalyzer;
                MLHandKeypointAnalyzerSetting handKeypointAnalyzerSetting;
                if (analyzerSetting != null) {
                    handKeypointAnalyzerSetting = TextUtils.toObject(analyzerSetting,
                        MLHandKeypointAnalyzerSetting.class);
                } else {
                    handKeypointAnalyzerSetting = new MLHandKeypointAnalyzerSetting.Factory().setMaxHandResults(10)
                        .setSceneType(MLHandKeypointAnalyzerSetting.TYPE_ALL)
                        .create();
                }
                handKeypointAnalyzer = MLHandKeypointAnalyzerFactory.getInstance()
                    .getHandKeypointAnalyzer(handKeypointAnalyzerSetting);
                return handKeypointAnalyzer;
            }
            case "SKELETON": {
                MLSkeletonAnalyzer skeletonAnalyzer;
                MLSkeletonAnalyzerSetting setting;
                if (analyzerSetting != null) {
                    setting = TextUtils.toObject(analyzerSetting, MLSkeletonAnalyzerSetting.class);
                } else {
                    setting = new MLSkeletonAnalyzerSetting.Factory().setAnalyzerType(
                        MLSkeletonAnalyzerSetting.TYPE_YOGA).create();
                }
                skeletonAnalyzer = MLSkeletonAnalyzerFactory.getInstance().getSkeletonAnalyzer(setting);
                return skeletonAnalyzer;
            }
            case "OBJECT": {
                MLObjectAnalyzerSetting objectAnalyzerSetting;
                MLObjectAnalyzer objectAnalyzer;
                if (analyzerSetting != null) {
                    objectAnalyzerSetting = TextUtils.toObject(analyzerSetting, MLObjectAnalyzerSetting.class);
                } else {
                    objectAnalyzerSetting = new MLObjectAnalyzerSetting.Factory().setAnalyzerType(
                        MLObjectAnalyzerSetting.TYPE_PICTURE).allowMultiResults().allowClassification().create();
                }
                objectAnalyzer = MLAnalyzerFactory.getInstance().getLocalObjectAnalyzer(objectAnalyzerSetting);
                return objectAnalyzer;
            }
            case "TEXT":
                MLRemoteTextSetting mlRemoteTextSetting;
                MLTextAnalyzer mlTextAnalyzer;
                if (analyzerSetting != null) {
                    mlRemoteTextSetting = TextUtils.toObject(analyzerSetting, MLRemoteTextSetting.class);
                } else {
                    mlRemoteTextSetting = new MLRemoteTextSetting.Factory().create();
                }
                mlTextAnalyzer = MLAnalyzerFactory.getInstance().getRemoteTextAnalyzer(mlRemoteTextSetting);
                return mlTextAnalyzer;
            case "CLASSIFICATION": {
                MLRemoteClassificationAnalyzerSetting setting;
                MLImageClassificationAnalyzer mlImageClassificationAnalyzer;
                if (analyzerSetting != null) {
                    setting = TextUtils.toObject(analyzerSetting, MLRemoteClassificationAnalyzerSetting.class);
                    mlImageClassificationAnalyzer = MLAnalyzerFactory.getInstance()
                        .getRemoteImageClassificationAnalyzer(setting);
                } else {
                    mlImageClassificationAnalyzer = MLAnalyzerFactory.getInstance()
                        .getRemoteImageClassificationAnalyzer();
                }
                return mlImageClassificationAnalyzer;
            }
            default:
                return null;
        }
    }

    public void closeCompositeAnalyser(final CallbackContext callbackContext) {
        if (analyzer == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("compositeAnalyzerClose", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {

            analyzer.destroy();
            analyzer = null;
            HMSLogger.getInstance(getContext()).sendSingleEvent("compositeAnalyzerClose");
        }
    }

    public void infoCompositeAnalyser(final CallbackContext callbackContext) throws JSONException {
        if (analyzer == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("compositeAnalyzerInfo", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            JSONObject analyserInfo = new JSONObject();
            analyserInfo.putOpt("isAnalyserAvailable", analyzer.isAvailable());
            HMSLogger.getInstance(getContext()).sendSingleEvent("compositeAnalyzerInfo");
            callbackContext.success(analyserInfo);
            analyzer = null;
        }
    }

    public void obtainPicture(final JSONObject params, final CallbackContext callbackContext) {
        MLFrame frame = HMSMLUtils.getFrame(getContext(), params);
        CordovaHelpers.frameController(frame, getContext(), callbackContext, "compositeAnalyser");
        analyzer.obtainPicture(frame);
    }
}
