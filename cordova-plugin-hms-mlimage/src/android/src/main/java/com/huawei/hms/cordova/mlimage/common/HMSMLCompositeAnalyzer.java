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

package com.huawei.hms.cordova.mlimage.common;

import android.content.Context;
import android.util.SparseArray;

import com.huawei.hms.cordova.mlimage.basef.CordovaBaseModule;
import com.huawei.hms.cordova.mlimage.basef.CordovaMethod;
import com.huawei.hms.cordova.mlimage.basef.HMSLog;
import com.huawei.hms.cordova.mlimage.basef.handler.CorPack;
import com.huawei.hms.cordova.mlimage.basef.handler.Promise;
import com.huawei.hms.cordova.mlimage.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlimage.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mlimage.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlimage.utils.TextUtils;
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

import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class HMSMLCompositeAnalyzer extends CordovaBaseModule {
    private static final String TAG = HMSMLCompositeAnalyzer.class.getSimpleName();

    private final Context context;

    private MLCompositeAnalyzer analyzer;

    public HMSMLCompositeAnalyzer(CordovaInterface cordova) {
        this.context = cordova.getContext();
    }

    @HMSLog
    @CordovaMethod
    public void initializeCompositeAnalyzer(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException {

        JSONObject params = args.optJSONObject(0);

        MLFrame frame = HMSMLUtils.getFrame(context, params);
        CordovaHelpers.frameController(frame, context, promise, "compositeAnalyser");
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
        promise.success(jsonObject);
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

    @HMSLog
    @CordovaMethod
    public void infoCompositeAnalyser(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException {
        if (analyzer == null) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            JSONObject analyserInfo = new JSONObject();
            analyserInfo.putOpt("isAnalyserAvailable", analyzer.isAvailable());
            promise.success(analyserInfo);
            analyzer = null;
        }
    }

    @HMSLog
    @CordovaMethod
    public void closeCompositeAnalyser(final CorPack corPack, JSONArray args, final Promise promise) {
        if (analyzer == null) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            analyzer.destroy();
            analyzer = null;
            promise.success();
        }
    }

    @HMSLog
    @CordovaMethod
    public void obtainPicture(final CorPack corPack, JSONArray args, final Promise promise) {
        JSONObject params = args.optJSONObject(0);
        MLFrame frame = HMSMLUtils.getFrame(context, params);
        analyzer.obtainPicture(frame);
        promise.success();
    }
}
