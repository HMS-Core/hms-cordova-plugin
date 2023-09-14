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

package com.huawei.hms.cordova.mlimage.providers.imageproviders.landmark;

import android.content.Context;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlimage.basef.CordovaBaseModule;
import com.huawei.hms.cordova.mlimage.basef.CordovaMethod;
import com.huawei.hms.cordova.mlimage.basef.HMSLog;
import com.huawei.hms.cordova.mlimage.basef.handler.CorPack;
import com.huawei.hms.cordova.mlimage.basef.handler.Promise;
import com.huawei.hms.cordova.mlimage.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlimage.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mlimage.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlimage.utils.PlatformUtils;
import com.huawei.hms.cordova.mlimage.utils.TextUtils;
import com.huawei.hms.mlsdk.MLAnalyzerFactory;
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.mlsdk.landmark.MLRemoteLandmark;
import com.huawei.hms.mlsdk.landmark.MLRemoteLandmarkAnalyzer;
import com.huawei.hms.mlsdk.landmark.MLRemoteLandmarkAnalyzerSetting;

import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.List;

public class MLImageLandMarkAnalyser extends CordovaBaseModule {
    private static final String TAG = MLImageLandMarkAnalyser.class.getName();

    private final Context context;

    private MLRemoteLandmarkAnalyzer analyzer;

    private MLRemoteLandmarkAnalyzerSetting settings;

    public MLImageLandMarkAnalyser(CordovaInterface cordova) {
        this.context = cordova.getContext();
    }

    @HMSLog
    @CordovaMethod
    public void imgLandMarkAnalyser(final CorPack corPack, JSONArray args, final Promise promise) {
        JSONObject params = args.optJSONObject(0);
        MLFrame landmarkFrame = HMSMLUtils.getFrame(context, params);
        CordovaHelpers.frameController(landmarkFrame, context, promise, "imageLandmarkAnalyse");
        JSONObject landmarkAnalyzerSetting = params.optJSONObject("landmarkAnalyzerSetting");
        corPack.getCordova().getThreadPool().execute(() -> {
            if (landmarkAnalyzerSetting != null) {
                settings = TextUtils.toObject(landmarkAnalyzerSetting, MLRemoteLandmarkAnalyzerSetting.class);
                analyzer = MLAnalyzerFactory.getInstance().getRemoteLandmarkAnalyzer(settings);
            } else {
                MLRemoteLandmarkAnalyzerSetting mlRemoteLandmarkAnalyzerSetting
                    = MLRemoteLandmarkAnalyzerSetting.DEFAULT_SETTINGS;
                analyzer = MLAnalyzerFactory.getInstance().getRemoteLandmarkAnalyzer(mlRemoteLandmarkAnalyzerSetting);
            }
            Task<List<MLRemoteLandmark>> task = analyzer.asyncAnalyseFrame(landmarkFrame);
            task.addOnSuccessListener(
                    PlatformUtils.successListener(promise, TextUtils.FROM_MLREMOTELANDMARK_TO_JSON_OBJECT))
                .addOnFailureListener(PlatformUtils.failureListener(promise));
        });
    }

    @HMSLog
    @CordovaMethod
    public void imgLandMarkAnalyserStop(final CorPack corPack, JSONArray args, final Promise promise) {
        if (analyzer == null) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            try {
                this.analyzer.close();
                promise.success("Image landmark Analyser is closed");
            } catch (IOException e) {
                promise.error(e.getMessage());
            }
        }
    }

    @HMSLog
    @CordovaMethod
    public void getLandmarkSetting(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        if (analyzer == null) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            JSONObject object = new JSONObject();
            object.putOpt("largestNumOfReturns", settings.getLargestNumOfReturns());
            object.putOpt("patternType", settings.getPatternType());
            object.putOpt("isEnableFingerprintVerification", settings.isEnableFingerprintVerification());
            promise.success(object);
        }
    }
}
