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

package com.huawei.hms.cordova.mlkit.providers.facebodyproviders.handkeypoint;

import android.content.Context;
import android.util.SparseArray;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.logger.HMSMethod;
import com.huawei.hms.mlsdk.handkeypoint.MLHandKeypointAnalyzer;
import com.huawei.hms.mlsdk.handkeypoint.MLHandKeypointAnalyzerFactory;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlkit.utils.PlatformUtils;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.mlsdk.handkeypoint.MLHandKeypointAnalyzerSetting;
import com.huawei.hms.mlsdk.handkeypoint.MLHandKeypoints;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class MLStillHandKeypointAnalyser extends HMSProvider {
    private String TAG = MLStillHandKeypointAnalyser.class.getName();
    private MLFrame mlFrame;
    private MLHandKeypointAnalyzer mAnalyzer;
    private CallbackContext callbackContext;
    private MLHandKeypointAnalyzerSetting setting;

    public MLStillHandKeypointAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializeStillHandKeyAnalyser(final JSONObject params, final CallbackContext callbackContext)
        throws JSONException {
        this.callbackContext = callbackContext;

        mlFrame = HMSMLUtils.getFrame(getContext(), params);
        JSONObject mlHandkeyAnalyserSetting = params.optJSONObject("handkeySetting");

        if (mlHandkeyAnalyserSetting != null) {
            setting = TextUtils.toObject(mlHandkeyAnalyserSetting, MLHandKeypointAnalyzerSetting.class);
            this.mAnalyzer = MLHandKeypointAnalyzerFactory.getInstance().getHandKeypointAnalyzer(setting);
        } else {
            this.mAnalyzer = MLHandKeypointAnalyzerFactory.getInstance().getHandKeypointAnalyzer();
        }
        int syncType = params.optInt("syncType", 0);
        switch (syncType) {
            case 0:
                analyzerSync();
                break;
            case 1:
                analyzerAsync();
                break;
            default:
                callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
                HMSLogger.getInstance(getContext())
                    .sendSingleEvent("stillHandkeypointAnalyse", String.valueOf(CordovaErrors.ILLEGAL_PARAMETER));
                break;
        }
    }

    public void analyzerSync() throws JSONException {

        List<MLHandKeypoints> mlHandKeypointsList = new ArrayList<>();
        SparseArray<MLHandKeypoints> mlHandKeypointsSparseArray = mAnalyzer.analyseFrame(mlFrame);
        for (int i = 0; i < mlHandKeypointsSparseArray.size(); i++) {
            mlHandKeypointsList.add(mlHandKeypointsSparseArray.get(i));
        }
        if (!mlHandKeypointsList.isEmpty()) {
            callbackContext.success(
                HMSMLUtils.listToJSONArray(mlHandKeypointsList, TextUtils::mlHandKeypointsListTOJSON));
            HMSLogger.getInstance(getContext()).sendSingleEvent("stillHandkeypointAnalyse");
        } else {
            processFailure();
        }

    }

    public void analyzerAsync() {
        HMSMethod method = new HMSMethod("stillHandkeypointAnalyse");
        Task<List<MLHandKeypoints>> task = mAnalyzer.asyncAnalyseFrame(mlFrame);
        task.addOnSuccessListener(
            PlatformUtils.successListener(method, getActivity(), callbackContext, TextUtils.FROM_MLHAND_TO_JSON_OBJECT))
            .addOnFailureListener(PlatformUtils.failureListener(method, getActivity(), callbackContext));
    }

    private void processFailure() {
        callbackContext.error(CordovaErrors.SERVICE_FAILURE);
        HMSLogger.getInstance(getContext())
            .sendSingleEvent("stillHandkeypointAnalyse", String.valueOf(CordovaErrors.SERVICE_FAILURE));
    }

    public void stopHandKeypoint(final CallbackContext callbackContext) {
        if (this.mAnalyzer == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("stillHandkeypointAnalyseStop", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            this.mAnalyzer.stop();
            this.mAnalyzer = null;
            callbackContext.success("Handkeypoint analyzer stopped");
            HMSLogger.getInstance(getContext()).sendSingleEvent("stillHandkeypointAnalyseStop");
        }
    }

    public void getHandKeypointSetting(final CallbackContext callbackContext) throws JSONException {
        if (this.mAnalyzer == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("stillHandkeypointAnalyseSetting", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            JSONObject jsonObject = new JSONObject();
            jsonObject.putOpt("maxHandResults", setting.getMaxHandResults());
            jsonObject.putOpt("sceneType", setting.getSceneType());
            HMSLogger.getInstance(getContext()).sendSingleEvent("stillHandkeypointAnalyseSetting");
            callbackContext.success(jsonObject);
            HMSLogger.getInstance(getContext()).sendSingleEvent("stillHandkeypointAnalyseSetting");
        }
    }

}