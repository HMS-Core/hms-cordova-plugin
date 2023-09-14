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

package com.huawei.hms.cordova.mlimage.providers.imageproviders.scenedetection;

import android.content.Context;
import android.util.SparseArray;

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
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.mlsdk.scd.MLSceneDetection;
import com.huawei.hms.mlsdk.scd.MLSceneDetectionAnalyzer;
import com.huawei.hms.mlsdk.scd.MLSceneDetectionAnalyzerFactory;

import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONObject;

import java.util.List;

public class MLStillSceneDetectionAnalyser extends CordovaBaseModule {
    private static final String TAG = MLStillSceneDetectionAnalyser.class.getName();

    private final Context context;

    private MLSceneDetectionAnalyzer analyzer;

    public MLStillSceneDetectionAnalyser(CordovaInterface cordova) {
        this.context = cordova.getContext();
    }

    @HMSLog
    @CordovaMethod
    public void stillSceneAnalyser(final CorPack corPack, JSONArray args, final Promise promise) {
        JSONObject params = args.optJSONObject(0);
        analyzer = MLSceneDetectionAnalyzerFactory.getInstance().getSceneDetectionAnalyzer();
        MLFrame frame = HMSMLUtils.getFrame(context, params);

        CordovaHelpers.frameController(frame, context, promise, "stillSceneAnalyse");

        int analyseMode = params.optInt("analyseMode", 0);
        if (analyseMode == 1) {
            SparseArray<MLSceneDetection> array = analyzer.analyseFrame(frame);
            promise.success(TextUtils.fromSparseArraySceneToJSON(array));
        } else {
            Task<List<MLSceneDetection>> task = analyzer.asyncAnalyseFrame(frame);
            task.addOnSuccessListener(PlatformUtils.successListener(promise, TextUtils.FROM_MLSCEN_TO_JSON_OBJECT))
                .addOnFailureListener(PlatformUtils.failureListener(promise));
        }
    }

    @HMSLog
    @CordovaMethod
    public void stillSceneAnalyserStop(final CorPack corPack, JSONArray args, final Promise promise) {
        if (analyzer == null) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            return;
        }
        analyzer.stop();
        analyzer = null;
        promise.success("Scene analyzer stopped");
    }

}
