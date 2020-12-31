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

package com.huawei.hms.cordova.mlkit.providers.imageproviders.scenedetection;

import android.content.Context;
import android.util.SparseArray;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mlkit.utils.PlatformUtils;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.mlsdk.scd.MLSceneDetection;
import com.huawei.hms.mlsdk.scd.MLSceneDetectionAnalyzer;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.logger.HMSMethod;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.common.MLFrame;

import com.huawei.hms.mlsdk.scd.MLSceneDetectionAnalyzerFactory;

import org.apache.cordova.CallbackContext;
import org.json.JSONObject;

import java.util.List;

public class MLStillSceneDetectionAnalyser extends HMSProvider {
    private static final String TAG = MLStillSceneDetectionAnalyser.class.getName();
    private MLSceneDetectionAnalyzer analyzer;

    public MLStillSceneDetectionAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializeStillSceneAnalyser(final JSONObject params, final CallbackContext callbackContext) {

        analyzer = MLSceneDetectionAnalyzerFactory.getInstance().getSceneDetectionAnalyzer();
        MLFrame frame = HMSMLUtils.getFrame(getContext(), params);

        CordovaHelpers.frameController(frame, getContext(), callbackContext, "stillSceneAnalyse");

        HMSMethod method = new HMSMethod("stillSceneAnalyse");
        int analyseMode = params.optInt("analyseMode", 0);
        if (analyseMode == 1) {
            SparseArray<MLSceneDetection> array = analyzer.analyseFrame(frame);
            callbackContext.success(TextUtils.fromSparseArraySceneToJSON(array));
        } else {
            Task<List<MLSceneDetection>> task = analyzer.asyncAnalyseFrame(frame);
            task.addOnSuccessListener(PlatformUtils.successListener(method, getActivity(), callbackContext,
                TextUtils.FROM_MLSCEN_TO_JSON_OBJECT))
                .addOnFailureListener(PlatformUtils.failureListener(method, getActivity(), callbackContext));
        }

    }

    public void stopScene(final CallbackContext callbackContext) {
        if (analyzer == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("stillSceneAnalyseStop", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            analyzer.stop();
            analyzer = null;
            callbackContext.success("Scene analyzer stopped");
            HMSLogger.getInstance(getContext()).sendSingleEvent("stillSceneAnalyseStop");
        }
    }

}