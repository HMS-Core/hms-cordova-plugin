/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.mlkit.providers.facebodyproviders.gesture;

import android.content.Context;
import android.graphics.BitmapFactory;
import android.util.SparseArray;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.logger.HMSMethod;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlkit.utils.PlatformUtils;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.mlsdk.gesture.MLGesture;
import com.huawei.hms.mlsdk.gesture.MLGestureAnalyzer;
import com.huawei.hms.mlsdk.gesture.MLGestureAnalyzerFactory;
import com.huawei.hms.mlsdk.gesture.MLGestureAnalyzerSetting;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class MLStillGestureAnalyser extends HMSProvider {

    private MLFrame mlFrame;

    private String TAG = MLStillGestureAnalyser.class.getName();

    private MLGestureAnalyzerSetting setting;

    private MLGestureAnalyzer mAnalyzer;

    private CallbackContext callbackContext;

    public MLStillGestureAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializeStillGestureAnalyser(final JSONObject params, final CallbackContext callbackContext)
        throws JSONException {

        this.callbackContext = callbackContext;
        mlFrame = HMSMLUtils.getFrame(getContext(), params);

        BitmapFactory.Options options = new BitmapFactory.Options();
        options.inSampleSize = 16;

        setting = new MLGestureAnalyzerSetting.Factory().create();

        this.mAnalyzer = MLGestureAnalyzerFactory.getInstance().getGestureAnalyzer(setting);
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

    public void analyzerAsync() {

        HMSMethod method = new HMSMethod("stillGestureAnalyse");
        Task<List<MLGesture>> task = mAnalyzer.asyncAnalyseFrame(mlFrame);

        task.addOnSuccessListener(PlatformUtils.successListener(method, getActivity(), callbackContext,
            TextUtils.FROM_MLGESTURE_TO_JSON_OBJECT))
            .addOnFailureListener(PlatformUtils.failureListener(method, getActivity(), callbackContext));

    }

    public void analyzerSync() throws JSONException {
        List<MLGesture> mlGesturesList = new ArrayList<>();
        SparseArray<MLGesture> mlGestureSparseArray = mAnalyzer.analyseFrame(mlFrame);
        for (int i = 0; i < mlGestureSparseArray.size(); i++) {
            mlGesturesList.add(mlGestureSparseArray.get(i));
        }

        if (!mlGesturesList.isEmpty()) {
            callbackContext.success(HMSMLUtils.listToJSONArray(mlGesturesList, TextUtils::mlGesturesListTOJSON));
            HMSLogger.getInstance(getContext()).sendSingleEvent("stillGestureAnalyse");
        } else {
            processFailure();
        }
    }

    public void stopGestureAnalyser(final CallbackContext callbackContext) {
        if (this.mAnalyzer == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("stillGestureAnalyseStop", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            this.mAnalyzer.stop();
            this.mAnalyzer = null;
            callbackContext.success("Gesture analyzer stopped");
            HMSLogger.getInstance(getContext()).sendSingleEvent("stillGestureAnalyseStop");
        }
    }

    private void processFailure() {
        callbackContext.error(CordovaErrors.SERVICE_FAILURE);
        HMSLogger.getInstance(getContext())
            .sendSingleEvent("stillGestureAnalyse", String.valueOf(CordovaErrors.SERVICE_FAILURE));
    }

    public void getGestureAnalyserSetting(final CallbackContext callbackContext) throws JSONException {
        if (this.mAnalyzer == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("stillGestureAnalyseSetting", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            JSONObject jsonObject = new JSONObject();
            HMSLogger.getInstance(getContext()).sendSingleEvent("stillGestureAnalyseSetting");
            callbackContext.success(jsonObject);
            HMSLogger.getInstance(getContext()).sendSingleEvent("stillGestureAnalyseSetting");
        }
    }

}
