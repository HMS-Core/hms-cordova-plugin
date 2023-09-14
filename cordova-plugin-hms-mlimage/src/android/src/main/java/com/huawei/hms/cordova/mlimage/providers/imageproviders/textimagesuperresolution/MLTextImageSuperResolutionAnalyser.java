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

package com.huawei.hms.cordova.mlimage.providers.imageproviders.textimagesuperresolution;

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
import com.huawei.hms.mlsdk.textimagesuperresolution.MLTextImageSuperResolution;
import com.huawei.hms.mlsdk.textimagesuperresolution.MLTextImageSuperResolutionAnalyzer;
import com.huawei.hms.mlsdk.textimagesuperresolution.MLTextImageSuperResolutionAnalyzerFactory;

import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONObject;

public class MLTextImageSuperResolutionAnalyser extends CordovaBaseModule {
    private final Context context;

    private MLTextImageSuperResolutionAnalyzer analyzer;

    public MLTextImageSuperResolutionAnalyser(CordovaInterface cordova) {
        this.context = cordova.getContext();
    }

    @HMSLog
    @CordovaMethod
    public void textImageSuperResolution(final CorPack corPack, JSONArray args, final Promise promise) {
        JSONObject params = args.optJSONObject(0);

        analyzer = MLTextImageSuperResolutionAnalyzerFactory.getInstance().getTextImageSuperResolutionAnalyzer();

        if (analyzer == null) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.SERVICE_FAILURE));
            return;
        }
        int analyseMode = params.optInt("analyseMode", 0);

        MLFrame frame = HMSMLUtils.getFrame(context, params);
        CordovaHelpers.frameController(frame, context, promise, "textImageSuperResolutionAnalyse");
        if (analyseMode == 0) {
            Task<MLTextImageSuperResolution> task = analyzer.asyncAnalyseFrame(frame);
            task.addOnSuccessListener(PlatformUtils.successListener(promise, TextUtils.FROM_TISR_TO_JSON_OBJECT))
                .addOnFailureListener(PlatformUtils.failureListener(promise));
        } else {
            SparseArray<MLTextImageSuperResolution> sparseArray = analyzer.analyseFrame(frame);
            promise.success(TextUtils.fromSparseArrayTISRToJSON(sparseArray));
        }

    }

    @HMSLog
    @CordovaMethod
    public void TISRAnalyserStop(final CorPack corPack, JSONArray args, final Promise promise) {
        if (analyzer == null) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            return;
        }
        analyzer.stop();
        analyzer = null;
        promise.success("Stopped");
    }
}
