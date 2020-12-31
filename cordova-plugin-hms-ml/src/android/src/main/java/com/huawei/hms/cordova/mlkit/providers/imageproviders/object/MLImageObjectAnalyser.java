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

package com.huawei.hms.cordova.mlkit.providers.imageproviders.object;

import android.content.Context;
import android.util.SparseArray;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.helpers.CordovaHelpers;
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.mlsdk.objects.MLObject;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlkit.logger.HMSMethod;
import com.huawei.hms.cordova.mlkit.utils.PlatformUtils;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.MLAnalyzerFactory;

import com.huawei.hms.mlsdk.objects.MLObjectAnalyzer;
import com.huawei.hms.mlsdk.objects.MLObjectAnalyzerSetting;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.List;

public class MLImageObjectAnalyser extends HMSProvider {

    private String TAG = MLImageObjectAnalyser.class.getName();
    private MLObjectAnalyzer analyzer;
    private MLObjectAnalyzerSetting setting;

    public MLImageObjectAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializeObjectAnalyser(final JSONObject params, final CallbackContext callbackContext) {

        MLFrame frame = HMSMLUtils.getFrame(getContext(), params);
        CordovaHelpers.frameController(frame, getContext(), callbackContext, "objectAnalyser");
        int syncType = params.optInt("syncType", 0);

        JSONObject mlObjectAnalyserSetting = params.optJSONObject("mlObjectAnalyserSetting");
        if (mlObjectAnalyserSetting != null) {
            setting = TextUtils.toObject(mlObjectAnalyserSetting, MLObjectAnalyzerSetting.class);
            analyzer = MLAnalyzerFactory.getInstance().getLocalObjectAnalyzer(setting);
        } else {
            analyzer = MLAnalyzerFactory.getInstance().getLocalObjectAnalyzer();
        }

        HMSMethod method = new HMSMethod("objectAnalyser");
        switch (syncType) {
            case 0: {
                Task<List<MLObject>> task = analyzer.asyncAnalyseFrame(frame);
                task.addOnSuccessListener(PlatformUtils.successListener(method, getActivity(), callbackContext,
                    TextUtils.FROM_MLOBJECT_TO_JSON_OBJECT))
                    .addOnFailureListener(PlatformUtils.failureListener(method, getActivity(), callbackContext));
                break;
            }
            case 1: {
                SparseArray<MLObject> mlObjectSparseArray = analyzer.analyseFrame(frame);
                if (mlObjectSparseArray != null) {
                    callbackContext.success(TextUtils.fromSparseArrayImageObjectJSON(mlObjectSparseArray));
                }
                HMSLogger.getInstance(getContext()).sendSingleEvent("objectAnalyser");
                break;
            }
        }

    }

    public void stopObject(final CallbackContext callbackContext) throws IOException {
        if (analyzer == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.SERVICE_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("objectAnalyserClose", String.valueOf(CordovaErrors.SERVICE_FAILURE));
        } else {
            analyzer.stop();
            analyzer = null;
            callbackContext.success("closed");
            HMSLogger.getInstance(getContext()).sendSingleEvent("objectAnalyserClose");
        }
    }

    public void getObjectAnalyserSetting(final CallbackContext callbackContext) throws JSONException {
        if (analyzer == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("objectAnalyserSetting", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            JSONObject object = new JSONObject();
            object.putOpt("analyzerType", setting.getAnalyzerType());
            object.putOpt("isClassificationAllowed", setting.isClassificationAllowed());
            object.putOpt("isMultipleResultsAllowed", setting.isMultipleResultsAllowed());
            callbackContext.success(object);
            HMSLogger.getInstance(getContext()).sendSingleEvent("objectAnalyserSetting");
        }
    }

}
