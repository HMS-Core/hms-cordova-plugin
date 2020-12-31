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

package com.huawei.hms.cordova.mlkit.providers.imageproviders.classification;

import android.content.Context;
import android.util.SparseArray;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.logger.HMSMethod;
import com.huawei.hms.mlsdk.classification.MLImageClassification;
import com.huawei.hms.mlsdk.classification.MLImageClassificationAnalyzer;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.mlsdk.classification.MLRemoteClassificationAnalyzerSetting;
import com.huawei.hms.cordova.mlkit.utils.PlatformUtils;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.MLAnalyzerFactory;
import com.huawei.hms.mlsdk.classification.MLLocalClassificationAnalyzerSetting;
import com.huawei.hms.mlsdk.common.MLFrame;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.List;

public class MLImageClassificationAnalyser extends HMSProvider {
    private static final String TAG = MLImageClassificationAnalyser.class.getName();
    private MLImageClassificationAnalyzer analyzer;
    private int analyseMode;
    private MLLocalClassificationAnalyzerSetting setting;

    public MLImageClassificationAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializeLocalImgClassAnalyzer(final JSONObject params, final CallbackContext callbackContext,
        final CordovaInterface cordovaInterface) {

        MLFrame frame = HMSMLUtils.getFrame(getContext(), params);
        CordovaHelpers.frameController(frame, getContext(), callbackContext, "imageClassificationAnalyser");
        JSONObject localClassificationAnalyzerSetting = params.optJSONObject("localClassificationAnalyzerSetting");

        if (localClassificationAnalyzerSetting != null) {
            setting = TextUtils.toObject(localClassificationAnalyzerSetting,
                MLLocalClassificationAnalyzerSetting.class);
            analyzer = MLAnalyzerFactory.getInstance().getLocalImageClassificationAnalyzer(setting);
        } else {
            analyzer = MLAnalyzerFactory.getInstance().getLocalImageClassificationAnalyzer();
        }

        analyseMode = params.optInt("analyseMode");
        callAnalyseFrame(callbackContext, frame, cordovaInterface);

    }

    public void initializeRemoteImgClassAnalyzer(final JSONObject params, final CallbackContext callbackContext,
        final CordovaInterface cordovaInterface) {

        MLFrame classFrame = HMSMLUtils.getFrame(getContext(), params);
        CordovaHelpers.frameController(classFrame, getContext(), callbackContext, "imageClassificationAnalyser");
        JSONObject remoteClassificationAnalyzerSetting = params.optJSONObject("remoteClassificationAnalyzerSetting");
        if (remoteClassificationAnalyzerSetting != null) {
            MLRemoteClassificationAnalyzerSetting mlRemoteClassificationAnalyzerSetting = TextUtils.toObject(
                remoteClassificationAnalyzerSetting, MLRemoteClassificationAnalyzerSetting.class);
            analyzer = MLAnalyzerFactory.getInstance()
                .getRemoteImageClassificationAnalyzer(mlRemoteClassificationAnalyzerSetting);
        } else {
            analyzer = MLAnalyzerFactory.getInstance().getRemoteImageClassificationAnalyzer();
        }

        analyseMode = params.optInt("analyseMode");
        callAnalyseFrame(callbackContext, classFrame, cordovaInterface);
    }

    private void callAnalyseFrame(final CallbackContext callbackContext, final MLFrame frame,
        final CordovaInterface cordovaInterface) {
        HMSMethod method = new HMSMethod("imageClassificationAnalyser");
        switch (analyseMode) {
            case 0:
                Task<List<MLImageClassification>> task = analyzer.asyncAnalyseFrame(frame);
                task.addOnSuccessListener(PlatformUtils.successListener(method, getActivity(), callbackContext,
                    TextUtils.FROM_MLCLASS_TO_JSON_OBJECT))
                    .addOnFailureListener(PlatformUtils.failureListener(method, getActivity(), callbackContext));
                break;
            case 1:
                SparseArray<MLImageClassification> analyseFrame = analyzer.analyseFrame(frame);
                if (analyseFrame != null) {
                    callbackContext.success(TextUtils.fromSparseArrayImageClassificationJSON(analyseFrame));
                }
                HMSLogger.getInstance(cordovaInterface.getContext()).sendSingleEvent("imageClassificationAnalyser");
                break;
            default:
                callbackContext.error("analyse Mode can be only 0 or 1");
                HMSLogger.getInstance(cordovaInterface.getContext())
                    .sendSingleEvent("imageClassificationAnalyser", "-1");
                break;
        }
    }

    public void closeImageClassificationAnalyser(final CallbackContext callbackCtx) throws IOException {
        if (analyzer == null) {
            callbackCtx.error(CordovaErrors.toErrorJSON(CordovaErrors.SERVICE_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("imageClassificationAnalyserClose", String.valueOf(CordovaErrors.SERVICE_FAILURE));
        } else {
            analyzer.stop();
            analyzer = null;
            callbackCtx.success("Image classification analyzer stopped");
            HMSLogger.getInstance(getContext()).sendSingleEvent("imageClassificationAnalyserClose");

        }
    }

    public void getImageClassificationAnalyserSetting(final CallbackContext callbackCtx) throws JSONException {
        if (analyzer == null) {
            callbackCtx.error(CordovaErrors.toErrorJSON(CordovaErrors.SERVICE_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("imageClassificationAnalyserSetting", String.valueOf(CordovaErrors.SERVICE_FAILURE));
        } else {
            JSONObject jsonObject = new JSONObject();
            jsonObject.putOpt("minAcceptablePossibility", setting.getMinAcceptablePossibility());
            callbackCtx.success(jsonObject);
            HMSLogger.getInstance(getContext()).sendSingleEvent("imageClassificationAnalyserSetting");
        }
    }

}
