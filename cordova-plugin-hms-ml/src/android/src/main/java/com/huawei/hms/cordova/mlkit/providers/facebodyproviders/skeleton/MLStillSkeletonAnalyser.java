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

package com.huawei.hms.cordova.mlkit.providers.facebodyproviders.skeleton;

import android.content.Context;
import android.util.SparseArray;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.logger.HMSMethod;
import com.huawei.hms.cordova.mlkit.providers.facebodyproviders.handkeypoint.MLStillHandKeypointAnalyser;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlkit.utils.PlatformUtils;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.mlsdk.skeleton.MLSkeleton;
import com.huawei.hms.mlsdk.skeleton.MLSkeletonAnalyzer;
import com.huawei.hms.mlsdk.skeleton.MLSkeletonAnalyzerFactory;
import com.huawei.hms.mlsdk.skeleton.MLSkeletonAnalyzerSetting;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class MLStillSkeletonAnalyser extends HMSProvider {
    private static final String TAG = MLStillHandKeypointAnalyser.class.getName();
    private MLSkeletonAnalyzer analyzer;
    private MLFrame mFrame;
    private MLSkeletonAnalyzerSetting setting;

    public MLStillSkeletonAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializeStillSkeletonAnalyser(final JSONObject params, final CallbackContext callbackContext)
        throws JSONException {
        mFrame = HMSMLUtils.getFrame(getContext(), params);
        CordovaHelpers.frameController(mFrame, getContext(), callbackContext, "stillSkeletonAnalyse");
        int syncType = params.optInt("syncType", 1);
        int analyzerType = params.optInt("analyzerType", 0);
        setting = new MLSkeletonAnalyzerSetting.Factory().setAnalyzerType(analyzerType).create();
        analyzer = MLSkeletonAnalyzerFactory.getInstance().getSkeletonAnalyzer(setting);
        switch (syncType) {
            case 0:
                analyzerSync(callbackContext);
                break;
            case 1:
                analyzerAsync(callbackContext);
                break;
            case 2: {
                MLFrame mlFrame2 = HMSMLUtils.getFrame2(getContext(), params);
                CordovaHelpers.frameController(mlFrame2, getContext(), callbackContext, "stillSkeletonAnalyse");
                calculateSimilarity(mlFrame2,callbackContext);
            }
            break;
            default:
                callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
                HMSLogger.getInstance(getContext())
                    .sendSingleEvent("stillSkeletonAnalyse", String.valueOf(CordovaErrors.ILLEGAL_PARAMETER));
                break;
        }
    }

    private void analyzerAsync(final CallbackContext callbackContext) {
        HMSMethod method = new HMSMethod("stillSkeletonAnalyse");
        if (analyzer != null) {
            Task<List<MLSkeleton>> task = analyzer.asyncAnalyseFrame(mFrame);
            task.addOnSuccessListener(PlatformUtils.successListener(method, getActivity(), callbackContext,
                TextUtils.FROM_MLSKELETON_TO_JSON_OBJECT))
                .addOnFailureListener(PlatformUtils.failureListener(method, getActivity(), callbackContext));
        }
    }

    private void analyzerSync(final CallbackContext callbackContext) throws JSONException {
        List<MLSkeleton> list = new ArrayList<>();
        if (analyzer != null) {
            SparseArray<MLSkeleton> sparseArray = analyzer.analyseFrame(mFrame);
            for (int i = 0; i < sparseArray.size(); i++) {
                list.add(sparseArray.get(i));
            }
            List<MLSkeleton> skeletons = MLSkeletonUtils.getValidSkeletons(list);
            if (skeletons != null && !skeletons.isEmpty()) {
                callbackContext.success(HMSMLUtils.listToJSONArray(skeletons, TextUtils::mlSkeletonsListTOJSON));
                HMSLogger.getInstance(getContext()).sendSingleEvent("stillSkeletonAnalyse");
            } else {
                processFailure(callbackContext);
            }
        }

    }

    private void calculateSimilarity(MLFrame mlFrame2,final CallbackContext callbackContext) throws JSONException {
        List<MLSkeleton> list1 = new ArrayList<>();
        if (analyzer != null) {
            SparseArray<MLSkeleton> sparseArray1 = analyzer.analyseFrame(mFrame);
            for (int i = 0; i < sparseArray1.size(); i++) {
                list1.add(sparseArray1.get(i));
            }
            List<MLSkeleton> skeletons1 = MLSkeletonUtils.getValidSkeletons(list1);

            List<MLSkeleton> list2 = new ArrayList<>();
            SparseArray<MLSkeleton> sparseArray2 = analyzer.analyseFrame(mlFrame2);
            for (int i = 0; i < sparseArray2.size(); i++) {
                list2.add(sparseArray2.get(i));
            }
            List<MLSkeleton> skeletons2 = MLSkeletonUtils.getValidSkeletons(list2);
            if (skeletons1 != null && !skeletons1.isEmpty() && skeletons2 != null && !skeletons2.isEmpty()) {
                float result = analyzer.caluteSimilarity(skeletons1, skeletons2);
                JSONObject similarityResult = new JSONObject();
                similarityResult.putOpt("result", result);
                callbackContext.success(similarityResult);
                HMSLogger.getInstance(getContext()).sendSingleEvent("stillSkeletonAnalyse");

            } else {
                processFailure(callbackContext);
            }
        }

    }

    private void processFailure(final CallbackContext callbackContext) {
        callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.SERVICE_FAILURE));
        HMSLogger.getInstance(getContext())
            .sendSingleEvent("stillSkeletonAnalyse", String.valueOf(CordovaErrors.SERVICE_FAILURE));
    }

    public void stopSkeleton(final CallbackContext callbackContext) throws IOException {
        if (analyzer == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("stillSkeletonAnalyseStop", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            analyzer.stop();
            analyzer = null;
            callbackContext.success("Analyzer stopped");
            HMSLogger.getInstance(getContext()).sendSingleEvent("stillSkeletonAnalyseStop");
        }
    }

}
