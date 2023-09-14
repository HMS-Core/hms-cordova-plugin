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

package com.huawei.hms.cordova.mlimage.providers.imageproviders.classification;

import android.content.Context;
import android.util.Log;
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
import com.huawei.hms.mlsdk.MLAnalyzerFactory;
import com.huawei.hms.mlsdk.classification.MLImageClassification;
import com.huawei.hms.mlsdk.classification.MLImageClassificationAnalyzer;
import com.huawei.hms.mlsdk.classification.MLLocalClassificationAnalyzerSetting;
import com.huawei.hms.mlsdk.classification.MLRemoteClassificationAnalyzerSetting;
import com.huawei.hms.mlsdk.common.MLFrame;

import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.List;

public class MLImageClassificationAnalyser extends CordovaBaseModule {
    private static final String TAG = MLImageClassificationAnalyser.class.getName();

    private final Context context;

    private MLImageClassificationAnalyzer analyzer;

    private int analyseMode;

    private MLLocalClassificationAnalyzerSetting setting;

    public MLImageClassificationAnalyser(CordovaInterface cordova) {
        this.context = cordova.getContext();
    }

    @HMSLog
    @CordovaMethod
    public void imageClassificationAnalyser(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException {

        JSONObject params = args.optJSONObject(0);
        if (!params.has("ocrType") || params.isNull("ocrType")) {
            Log.e(TAG, "Illegal argument. ocrType field is mandatory and it must not be null.");
            promise.error("Illegal argument. ocrType field is mandatory and it must not be null.");
        }
        int ocrType = params.getInt("ocrType");
        switch (ocrType) {
            case 0:
                initializeLocalImgClassAnalyzer(params, promise);
                break;
            case 1:
                initializeRemoteImgClassAnalyzer(params, promise);
                break;
            default:
        }
    }

    public void initializeLocalImgClassAnalyzer(final JSONObject params, final Promise promise) {
        MLFrame frame = HMSMLUtils.getFrame(context, params);
        CordovaHelpers.frameController(frame, context, promise, "imageClassificationAnalyser");
        JSONObject localClassificationAnalyzerSetting = params.optJSONObject("localClassificationAnalyzerSetting");

        if (localClassificationAnalyzerSetting != null) {
            setting = TextUtils.toObject(localClassificationAnalyzerSetting,
                MLLocalClassificationAnalyzerSetting.class);
            analyzer = MLAnalyzerFactory.getInstance().getLocalImageClassificationAnalyzer(setting);
        } else {
            analyzer = MLAnalyzerFactory.getInstance().getLocalImageClassificationAnalyzer();
        }

        analyseMode = params.optInt("analyseMode");
        callAnalyseFrame(promise, frame);
    }

    public void initializeRemoteImgClassAnalyzer(final JSONObject params, final Promise promise) {
        MLFrame classFrame = HMSMLUtils.getFrame(context, params);
        CordovaHelpers.frameController(classFrame, context, promise, "imageClassificationAnalyser");
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
        callAnalyseFrame(promise, classFrame);
    }

    private void callAnalyseFrame(final Promise promise, final MLFrame frame) {
        switch (analyseMode) {
            case 0:
                Task<List<MLImageClassification>> task = analyzer.asyncAnalyseFrame(frame);
                task.addOnSuccessListener(PlatformUtils.successListener(promise, TextUtils.FROM_MLCLASS_TO_JSON_OBJECT))
                    .addOnFailureListener(PlatformUtils.failureListener(promise));
                break;
            case 1:
                SparseArray<MLImageClassification> analyseFrame = analyzer.analyseFrame(frame);
                if (analyseFrame != null) {
                    promise.success(TextUtils.fromSparseArrayImageClassificationJSON(analyseFrame));
                }
                break;
            default:
                promise.error("analyse Mode can be only 0 or 1");
                break;
        }
    }

    @HMSLog
    @CordovaMethod
    public void stopImageClassificationAnalyser(final CorPack corPack, JSONArray args, final Promise promise)
        throws IOException {
        if (analyzer == null) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.SERVICE_FAILURE));
        } else {
            analyzer.stop();
            analyzer = null;
            promise.success("Image classification analyzer stopped");
        }
    }

    @HMSLog
    @CordovaMethod
    public void getImageClassificationAnalyserSetting(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException {
        if (analyzer == null) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.SERVICE_FAILURE));
        } else {
            JSONObject jsonObject = new JSONObject();
            jsonObject.putOpt("minAcceptablePossibility", setting.getMinAcceptablePossibility());
            promise.success(jsonObject);
        }
    }
}
